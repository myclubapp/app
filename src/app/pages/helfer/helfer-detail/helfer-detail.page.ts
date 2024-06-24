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
    console.log("data here:   " + JSON.stringify(this.event));
    this.event$ = of(this.event);

    // GET HELFEREVENT && BASIC ATTENDEE
    this.event$ = this.getHelferEvent(this.event.clubId, this.event.id);

    // GET SCHICHTEN
    this.schichten$ = this.getHelferEventSchichtenWithAttendees(this.event.clubId, this.event.id);

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
        if (!user) throw new Error("User not found");
      }),
      switchMap(() => this.eventService.getClubHelferEventRef(clubId, eventId)),
      switchMap((event) => {
        if (!event) return of(null);

        // Fetch all club members first
        return this.fbService.getClubMemberRefs(clubId).pipe(
          switchMap(clubMembers => {
            const clubMemberProfiles$ = clubMembers.map(member =>
              this.userProfileService.getUserProfileById(member.id).pipe(
                take(1),
                catchError(err => {
                  console.log(`Failed to fetch profile for club member ${member.id}:`, err);
                  return of({ id: member.id, firstName: "Unknown", lastName: "Unknown", status: null });
                })
              )
            );

            // Fetch all attendees next
            return forkJoin(clubMemberProfiles$).pipe(
              switchMap(clubMembersWithDetails => {
                return this.eventService.getClubHelferEventAttendeesRef(clubId, eventId).pipe(
                  map(attendees => {
                    const attendeeDetails = attendees.map(attendee => {
                      const detail = clubMembersWithDetails.find(member => member && member.id === attendee.id);
                      return detail ? { ...detail, status: attendee.status } : null;
                    }).filter(item => item !== null);

                    const attendeeListTrue = attendeeDetails.filter(att => att && att.status === true);
                    const attendeeListFalse = attendeeDetails.filter(att => att && att.status === false);
                    const respondedIds = new Set(attendeeDetails.map(att => att.id));
                    const unrespondedMembers = clubMembersWithDetails.filter(member => member && !respondedIds.has(member.id));

                    const userAttendee = attendeeDetails.find(att => att && att.id === this.user.uid);
                    const status = userAttendee ? userAttendee.status : null;

                    return {
                      ...event,
                      attendees: attendeeDetails,
                      attendeeListTrue,
                      attendeeListFalse,
                      unrespondedMembers,
                      status,
                    };
                  }),
                  catchError(err => {
                    console.error("Error fetching attendees:", err);
                    return of({
                      ...event,
                      attendees: [],
                      attendeeListTrue: [],
                      attendeeListFalse: [],
                      unrespondedMembers: clubMembersWithDetails.filter(member => member !== null),
                      status: null
                    });
                  })
                );
              })
            );
          }),
          catchError(err => {
            console.error("Error fetching club members:", err);
            return of({
              ...event,
              attendees: [],
              attendeeListTrue: [],
              attendeeListFalse: [],
              unrespondedMembers: [],
              status: null
            });
          })
        );
      }),
      catchError(err => {
        console.error("Error in getHelferEventWithAttendees:", err);
        return of(null);
      })
    );
  }

  getHelferEventSchichtenWithAttendees(clubId: string, eventId: string) {
    return this.eventService.getClubHelferEventSchichtenRef(clubId, eventId).pipe(
      switchMap((schichten) => {
        if (schichten.length === 0) return of([]); // No schichten found
        return this.fbService.getClubMemberRefs(clubId).pipe(
          switchMap(clubMembers => {
            const clubMemberProfiles$ = clubMembers.map(member =>
              this.userProfileService.getUserProfileById(member.id).pipe(
                take(1),
                catchError(err => {
                  console.error(`Failed to fetch profile for club member ${member.id}:`, err);
                  return of({ id: member.id, firstName: "Unknown", lastName: "Unknown", status: null, confirmed: null });
                })
              )
            );
            return forkJoin(clubMemberProfiles$).pipe(
              switchMap(clubMembersWithDetails => {
                const schichtenWithAttendees$ = schichten.map(schicht =>
                  this.eventService.getClubHelferEventSchichtAttendeesRef(clubId, eventId, schicht.id).pipe(
                    map(attendees => {
                      const attendeeDetails = attendees.map(attendee => {
                        const detail = clubMembersWithDetails.find(member => member && member.id === attendee.id);
                        return detail ? { ...detail, status: attendee.status, confirmed: attendee.confirmed } : null;
                      }).filter(item => item);  // Ensure nulls are removed

                      const attendeeListTrue = attendeeDetails.filter(att => att.status === true);
                      const attendeeListFalse = attendeeDetails.filter(att => att.status === false);
                      const respondedIds = new Set(attendeeDetails.map(att => att.id));
                      const unrespondedMembers = clubMembersWithDetails.filter(member => member && !respondedIds.has(member.id));

                      // Find the user's attendee details to get the user's status
                      const userAttendee = attendeeDetails.find(att => att.id === this.user.uid);
                      const userStatus = userAttendee ? userAttendee.status : null;
                      const userConfirmed = userAttendee ? userAttendee.confirmed : null;

                      return {
                        ...schicht,
                        attendees: attendeeDetails,
                        attendeeListTrue,
                        attendeeListFalse,
                        unrespondedMembers,
                        status: userStatus,  // Status of the logged-in user as an attendee
                        confirmed: userConfirmed
                      };
                    }),
                    catchError(err => {
                      console.error("Error fetching attendees for schicht:", err);
                      return of({
                        ...schicht,
                        attendees: [],
                        attendeeListTrue: [],
                        attendeeListFalse: [],
                        unrespondedMembers: clubMembersWithDetails,
                        status: null,
                        confirmed: null

                      });
                    })
                  )
                );
                return combineLatest(schichtenWithAttendees$);
              })
            );
          }),
          catchError(err => {
            console.error("Error fetching club members:", err);
            return of(schichten.map(schicht => ({
              ...schicht,
              attendees: [],
              attendeeListTrue: [],
              attendeeListFalse: [],
              unrespondedMembers: [],
              status: null,
              confirmed: null
            })));
          })
        );
      }),
      catchError(err => {
        console.error("Error in getHelferEventSchichtenWithAttendees:", err);
        return of([]);
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
                    points: schicht.points,
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
                    text: await lastValueFrom(this.translate.get("common.confirm")),
                    handler: async (event) => {
                      // console.log(event);

                      for (const index in event) {
                        const el = event[index];
                        console.log(el);
                        await this.eventService.setClubHelferEventSchichtAttendeeStatusConfirm(
                          this.event.clubId,
                          el.eventId,
                          el.schichtId,
                          el.memberId,
                          el.points,
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

    // Set "global status" as well.. ? Doesn't make sense..
    // this.toggle(status, this.event);
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
