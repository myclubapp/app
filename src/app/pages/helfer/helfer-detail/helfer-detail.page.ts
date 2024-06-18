import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import {
  AlertController,
  AlertInput,
  AlertOptions,
  ModalController,
  NavParams,
  ToastController,
} from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { User } from "firebase/auth";
import {
  Observable,
  catchError,
  combineLatest,
  defaultIfEmpty,
  first,
  forkJoin,
  lastValueFrom,
  map,
  of,
  switchMap,
  take,
  tap,
} from "rxjs";
import { HelferEvent } from "src/app/models/event";
import { Profile } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { EventService } from "src/app/services/firebase/event.service";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { MemberPage } from "../../member/member.page";
import { Club } from "src/app/models/club";
import { FirebaseService } from "src/app/services/firebase.service";

@Component({
  selector: "app-helfer-detail",
  templateUrl: "./helfer-detail.page.html",
  styleUrls: ["./helfer-detail.page.scss"],
})
export class HelferDetailPage implements OnInit {
  @Input("data") event: HelferEvent;
  @Input("isFuture") isFuture: boolean;

  event$: Observable<any>;
  schichten$: Observable<any[]>;

  mode = "yes";

  user$: Observable<User>;
  user: User;

  clubAdminList$: Observable<Club[]>;

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly userProfileService: UserProfileService,
    private readonly eventService: EventService,
    private readonly fbService: FirebaseService,
    private readonly toastController: ToastController,
    private readonly alertController: AlertController,
    private readonly authService: AuthService,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService
  ) { }

  async ngOnInit() {
    this.event = await this.navParams.get("data");
    console.log("data here:   " + this.event);
    this.event$ = of(this.event);
    this.event$ = this.getHelferEvent(this.event.clubId, this.event.id);


    this.schichten$ = this.getHelferEventSchichtenWithAttendees(
      this.event.clubId,
      this.event.id
    );

    //Create Events, Helfer, News
    this.clubAdminList$ = this.fbService.getClubAdminList();
  }

  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return clubAdminList && clubAdminList.some(club => club.id === clubId);
  }

  getHelferEvent(clubId: string, eventId: string) {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
        if (!user) {
          console.log("No user found");
          throw new Error("User not found");
        }
      }),
      switchMap(() => this.eventService.getClubHelferEventRef(clubId, eventId)),
      switchMap((event) => {
        if (!event) return of(null);
        return this.eventService
          .getClubHelferEventAttendeesRef(clubId, eventId)
          .pipe(
            switchMap((attendees) => {
              if (attendees.length === 0) {
                // If no attendees, return event data immediately
                return of({
                  ...event,

                  attendees: [],
                  attendeeListTrue: [],
                  attendeeListFalse: [],
                  status: null,
                });
              }
              const attendeeProfiles$ = attendees.map((attendee) =>
                this.userProfileService.getUserProfileById(attendee.id).pipe(
                  take(1),
                  map((profile) => ({ ...profile, ...attendee })), // Combine attendee object with profile
                  catchError(() =>
                    of({
                      ...attendee,
                      firstName: "Unknown",
                      lastName: "Unknown",
                    })
                  )
                )
              );
              return forkJoin(attendeeProfiles$).pipe(
                map((attendeesWithDetails) => ({
                  ...event,
                  attendees: attendeesWithDetails,
                  attendeeListTrue: attendeesWithDetails.filter(
                    (e) => e.status == true
                  ),
                  attendeeListFalse: attendeesWithDetails.filter(
                    (e) => e.status == false
                  ),
                  status: attendeesWithDetails.find(
                    (att) => att.id == this.user.uid
                  )?.status || null,
                  confirmed: attendeesWithDetails.find(
                    (att) => att.id == this.user.uid
                  )?.confirmed,
                }))
              );
            }),
            catchError(() =>
              of({
                ...event,
                attendees: [],
                status: null,
                confirmed: null,
              })
            )
          );
      }),
      catchError((err) => {
        console.error("Error in getTrainingWithAttendees:", err);
        return of(null);
      })
    );
  }

  getHelferEventSchichtenWithAttendees(clubId: string, eventId: string) {
    return this.eventService
      .getClubHelferEventSchichtenRef(clubId, eventId)
      .pipe(
        switchMap((schichten) => {
          if (schichten.length === 0) {
            return of([]); // Return an empty array if no schichten are found
          }
          // Sort schichten by ID in ascending order
          const sortedSchichten = schichten.sort((a, b) =>
            a.timeFrom.localeCompare(b.timeFrom)
          );
          console.log(schichten);
          console.log(sortedSchichten);
          // Fetch attendees for each schicht
          const schichtenWithAttendees$ = sortedSchichten.map((schicht) =>
            this.eventService
              .getClubHelferEventSchichtAttendeesRef(
                clubId,
                eventId,
                schicht.id
              )
              .pipe(
                switchMap((attendees) => {
                  console.log(attendees); // <- this line is never called
                  if (attendees.length === 0) {
                    return of({
                      ...schicht,
                      attendees: [],
                      attendeeListTrue: [],
                      attendeeListFalse: [],
                      status: null,
                      confirmed: null,
                    }); // Return schicht with empty attendees array
                  }

                  // Fetch profiles for each attendee
                  const attendeeProfiles$ = attendees.map((attendee) =>
                    this.userProfileService
                      .getUserProfileById(attendee.id)
                      .pipe(
                        take(1),
                        map((profile) => ({
                          ...profile,
                          ...attendee,
                        })), // Combine attendee object with profile
                        catchError(() =>
                          of({
                            ...attendee,
                            firstName: "Unknown",
                            lastName: "Unknown",
                          })
                        ) // Fallback for unknown profiles
                      )
                  );

                  return forkJoin(attendeeProfiles$).pipe(
                    map((attendeesWithDetails) => ({
                      ...schicht,
                      attendees: attendeesWithDetails,
                      attendeeListTrue: attendeesWithDetails.filter(
                        (e) => e.status == true
                      ),
                      attendeeListFalse: attendeesWithDetails.filter(
                        (e) => e.status == false
                      ),
                      status: attendeesWithDetails.find(
                        (att) => att.id == this.user.uid
                      )?.status  || null,
                      confirmed: attendeesWithDetails.find(
                        (att) => att.id == this.user.uid
                      )?.confirmed,
                    }))
                  );
                }),
                catchError((err) => {
                  console.log(err);
                  return of({
                    ...schicht,
                    attendees: [],
                    status: null,
                    confirmed: null,
                  });
                }) // Fallback for error in fetching attendees
              )
          );

          return combineLatest(schichtenWithAttendees$);
        }),
        catchError((err) => {
          console.error("Error in getHelferEventSchichtenWithAttendees:", err);
          return of([]); // Return an empty array on error
        })
      );
  }

  async confirmSchichten() {
    this.getHelferEventSchichtenWithAttendees(this.event.clubId, this.event.id)
      .pipe(
        take(1),
        map(async (schichten) => {
          let alertInputs = [];

          schichten.map((schicht) => {
            schicht.attendeeListTrue.map((member) => {
              if (!member.confirmed && member.status) {
                alertInputs.push({
                  name: member.id,
                  type: "checkbox",
                  checked: true,
                  value: {
                    memberId: member.id,
                    schichtId: schicht.id,
                    eventId: this.event.id,
                  },
                  label:
                    member.firstName +
                    " " +
                    member.lastName +
                    " - " +
                    schicht.name,
                });
              }
            });
          });

          if (alertInputs.length > 0) {
            const alert = await this.alertController
              .create({
                header: "Helfereinsätze bestätigen",
                message: "Bitte wählen Sie die Mitglieder aus:",
                inputs: alertInputs,
                buttons: [
                  {
                    text: await lastValueFrom(this.translate.get("common.cancel")),
                    handler: () => {
                      console.log("abbrechen");
                    },
                  },
                  {
                    text:  await lastValueFrom(this.translate.get("common.confirm")),
                    handler: async (event) => {
                      // console.log(event);

                      for (const index in event) {
                        const el = event[index];
                        console.log(el);
                        await this.eventService.setClubHelferEventSchichtAttendeeStatusConfirm(
                          this.event.clubId,
                          el.eventId,
                          el.schichtId,
                          el.memberId
                        );
                      }
                    },
                  },
                ],
              })
            alert.present();

          } else {
            this.toastController
              .create({
                message: "Keine Einsätze zum bestätigen verfügbar",
                position: "top",
                color: "primary",
                duration: 1500,
              })
              .then((toast) => {
                toast.present();
              });
          }
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  async toggleSchicht(status: boolean, schicht) {
    console.log(`Set Status ${status}`);
    await this.eventService.setClubHelferEventSchichtAttendeeStatus(
      status,
      this.event.clubId,
      this.event.id,
      schicht.id
    );
    this.presentToast();

    this.toggle(status, this.event);
  }

  async openMember(member: Profile) {
    console.log("openMember");
    const modal = await this.modalCtrl.create({
      component: MemberPage,
      presentingElement: await this.modalCtrl.getTop(),
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: member,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }
  async toggle(status: boolean, event: HelferEvent) {
    console.log(
      `Set Status ${status} for user ${this.user.uid} and Club ${this.event.clubId} and event ${event.id}`
    );
    await this.eventService.setClubHelferEventAttendeeStatus(
      status,
      this.event.clubId,
      event.id
    );
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(this.translate.get("common.success__saved")),
      color: "primary",
      duration: 2000,
      position: "top",
    });
    toast.present();
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.event, "confirm");
  }
}
