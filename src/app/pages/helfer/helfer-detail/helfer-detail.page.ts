import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { ModalController, NavParams, ToastController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { User } from "firebase/auth";
import {
  Observable,
  catchError,
  combineLatest,
  defaultIfEmpty,
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

@Component({
  selector: "app-helfer-detail",
  templateUrl: "./helfer-detail.page.html",
  styleUrls: ["./helfer-detail.page.scss"],
})
export class HelferDetailPage implements OnInit {
  @Input("data") event: HelferEvent;
  @Input("isFuture") isFuture: boolean;

  event$: Observable<any>;
  schichten$: Observable<any>;

  mode = "yes";

  user$: Observable<User>;
  user: User;

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly userProfileService: UserProfileService,
    private readonly eventService: EventService,
    private readonly toastController: ToastController,
    private readonly authService: AuthService,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.event = this.navParams.get("data");
    console.log(this.event);
    this.event$ = of(this.event);

    this.event$ = this.getHelferEvent(this.event.clubId, this.event.id);

    this.schichten$ = this.getHelferEventSchichtenWithAttendees(
      this.event.clubId,
      this.event.id
    );
    this.schichten$.subscribe(data=>{
      console.log(data);
    })
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
                  )?.status,
                }))
              );
            }),
            catchError(() =>
              of({
                ...event,
                attendees: [],
                status: null,
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
          console.log("this works! "  + schichten); //this works!
          // Fetch attendees for each schicht
          const schichtenWithAttendees$ = schichten.map((schicht) =>
            this.eventService
              .getClubHelferEventSchichtAttendeesRef(
                clubId,
                eventId,
                schicht.id
              )
              .pipe(
                switchMap((attendees) => {
                  console.log(attendees) // <- this line is never called
                  if (attendees.length === 0) {
                    return of({ ...schicht,
                      attendees: [],
                      attendeeListTrue: [],
                      attendeeListFalse: [],
                      status: null }); // Return schicht with empty attendees array
                  }

                  // Fetch profiles for each attendee
                  const attendeeProfiles$ = attendees.map((attendee) =>
                    this.userProfileService
                      .getUserProfileById(attendee.id)
                      .pipe(
                        take(1),
                        map((profile) => ({
                           ...profile, 
                           ...attendee 
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
                      )?.status,
                    })),
                    tap(data=>{
                      console.log(">>>>>>" + data);
                    })
                  );
                }),
                catchError((err) => {
                  console.log(err);
                  return of({ ...schicht, attendees: [], status: null })}) // Fallback for error in fetching attendees
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

  async toggleSchicht(status: boolean, schicht) {
    this.toggle(status, this.event);
    console.log(`Set Status ${status}`);
    await this.eventService.setClubHelferEventSchichtAttendeeStatus(
      status,
      this.event.clubId,
      this.event.id,
      schicht.id
    );
    this.presentToast();
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
