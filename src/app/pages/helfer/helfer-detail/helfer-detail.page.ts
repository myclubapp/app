import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import {
  AlertController,
  IonItemSliding,
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
  firstValueFrom,
  forkJoin,
  lastValueFrom,
  map,
  of,
  switchMap,
  take,
  tap,
} from "rxjs";
import { Browser } from "@capacitor/browser";
import { HelferEvent, Schicht } from "src/app/models/event";
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
    standalone: false
})
export class HelferDetailPage implements OnInit {
  @Input("data") event: HelferEvent;
  @Input("isFuture") isFuture: boolean;

  event$: Observable<any>;
  schichten$: Observable<any[]>;

  mode = "yes";

  allowEdit: boolean = false;

  user$: Observable<User>;
  user: User;

  clubAdminList$: Observable<Club[]>;
  eventHasChanged: any;

  constructor(
    private readonly modalCtrl: ModalController,
    public navParams: NavParams,
    private readonly userProfileService: UserProfileService,
    private readonly eventService: EventService,
    private readonly fbService: FirebaseService,
    private readonly toastController: ToastController,
    private readonly alertCtrl: AlertController,
    private readonly authService: AuthService,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService
  ) { }

  async ngOnInit() {
    this.event = this.navParams.get("data");
    this.event$ = of(this.event);
    // console.log("data here:   " + this.event.clubId, this.event.id);
    // this.event$ = of(this.event);

    // GET HELFEREVENT && BASIC ATTENDEE
    this.event$ = this.getHelferEvent(this.event.clubId, this.event.id);

    // GET SCHICHTEN
    this.schichten$ = this.getHelferEventSchichtenWithAttendees(this.event.clubId, this.event.id);

    //Create Events, Helfer, News
    this.clubAdminList$ = this.fbService.getClubAdminList();
    this.eventHasChanged = {};
  }

  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return clubAdminList && clubAdminList.some(club => club.id === clubId);
  }
  async edit() {

    if (this.allowEdit) {
      this.allowEdit = false;

      if (Object.keys(this.eventHasChanged).length > 0) {
        // alert("change")
        const updatedEvent = await this.eventService.changeHelferEvent(this.eventHasChanged, this.event.clubId, this.event.id).catch(e => {
          this.toastActionError(e);
        });
        // console.log(updatedEvent);
        this.presentToast();
      }

    } else {
      this.allowEdit = true;
    }
  }
  async updateEvent(event, field) {
    console.log(field, event.detail)
    this.eventHasChanged[field] = event.detail.value;
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

        // Fetch club details
        return this.fbService.getClubRef(clubId).pipe(
          switchMap(club => {
            if (!club) return of(null);

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
                          club,
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
                          club,
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
                  club,
                  attendees: [],
                  attendeeListTrue: [],
                  attendeeListFalse: [],
                  unrespondedMembers: [],
                  status: null
                });
              })
            );
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

        // Sort the schichten by timeFrom ascending and then by name A-Z
        const sortedSchichten = schichten.sort((a, b) => {
          const timeComparison = a.timeFrom.localeCompare(b.timeFrom); // Ascending order by timeFrom
          if (timeComparison !== 0) return timeComparison; // If timeFrom is different, use it
          return a.name.localeCompare(b.name); // If timeFrom is the same, sort by name A-Z
        });


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
                const schichtenWithAttendees$ = sortedSchichten.map(schicht =>
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
    try {
      const schichten = await firstValueFrom(
        this.getHelferEventSchichtenWithAttendees(this.event.clubId, this.event.id)
      );

      let alertInputs = schichten.reduce((acc, schicht) => {
        const inputs = schicht.attendeeListTrue
          .filter(member => !member.confirmed && member.status)
          .map(member => ({
            name: member.id,
            type: "checkbox",
            checked: true,
            value: {
              memberId: member.id,
              schichtId: schicht.id,
              points: schicht.points,
              eventId: this.event.id,
            },
            label: `${member.firstName} ${member.lastName} - ${schicht.name}`
          }));
        return [...acc, ...inputs];
      }, []);

      if (alertInputs.length > 0) {
        const cancelText = await lastValueFrom(this.translate.get("common.cancel"));
        const confirmText = await lastValueFrom(this.translate.get("common.confirm"));

        const alert = await this.alertCtrl.create({
          header: "Helferpunkte bestätigen",
          subHeader: "Bitte erst nach dem Einsatz bestätigen!",
          message: "Wähle die Mitglieder um die Helferpunkte zu bestätigen:",
          inputs: alertInputs,
          buttons: [
            {
              text: cancelText,
              role: 'cancel',
              handler: () => console.log("Operation cancelled"),
            },
            {
              text: confirmText,
              handler: (events) => this.handleConfirm(events),
            },
          ],
        });
        await alert.present();
      } else {
        const toast = await this.toastController.create({
          message: "Keine Einsätze zum Bestätigen verfügbar",
          position: "top",
          color: "primary",
          duration: 1500,
        });
        toast.present();
      }
    } catch (error) {
      console.error("Error in confirmSchichten:", error);
      // Handle error appropriately
    }
  }

  async handleConfirm(events) {
    for (const event of events) {
      await this.eventService.setClubHelferEventSchichtAttendeeStatusConfirm(
        this.event.clubId,
        event.eventId,
        event.schichtId,
        event.memberId,
        event.points
      );
    }
  }


  async openUrl(url: string) {
    Browser.open({
      url: url
    });
  }

  async toggleSchichtItem(
    slidingItem: IonItemSliding,
    status: boolean, event, schicht,
    memberId: string,
  ) {
    slidingItem.closeOpened();

    await this.eventService.setClubHelferEventSchichtAttendeeStatusAdmin(
      status,
      event.clubId,
      event.id, schicht.id,
      memberId,
    );
    this.presentToast();
  }

  async toggleSchicht(status: boolean, event, schicht) {
    console.log(`Set Status ${status}`);


    // Set "global status" as well.. ? Doesn't make sense..
    // this.toggle(status, this.event);

    console.log(
      `Set Status ${status} for user ${this.user.uid} and Club ${event.clubId} and event ${event.id}`
    );
    const newStartDate = event.date.toDate();
    newStartDate.setHours(Number(event.timeFrom.substring(0, 2)));
    // console.log(newStartDate);

    // Get team threshold via training.teamId
    console.log("Grenzwert ")
    const helferThreshold = event.club.helferThreshold || 0;
    console.log(helferThreshold);

    if (schicht['attendeeListTrue'].length >= schicht.countNeeded && status == true) {
      console.log("too many");
      this.tooMany();

    } else if (((newStartDate.getTime() - new Date().getTime()) < (1000 * 60 * 60 * helferThreshold)) && status == false && helferThreshold) {
      // Verpätete Abmeldung?
      console.log("too late");
      await this.tooLateToggle();

    } else {
      // OK
      await this.eventService.setClubHelferEventSchichtAttendeeStatus(
        status,
        event.clubId,
        event.id,
        schicht.id
      );
      this.presentToast();
    }


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

  async toggle(status: boolean, event: HelferEvent | any) {
    console.log(
      `Set Status ${status} for user ${this.user.uid} and Club ${this.event.clubId} and event ${event.id}`
    );
    const newStartDate = event.date.toDate();
    newStartDate.setHours(Number(event.timeFrom.substring(0, 2)));
    // console.log(newStartDate);

    // Get team threshold via training.teamId
    console.log("Grenzwert ")
    const helferThreshold = event.club.helferThreshold || 0;
    console.log(helferThreshold);

    if (event.count >= event.countNeeded) {
      console.log("too many");

    } else if (((newStartDate.getTime() - new Date().getTime()) < (1000 * 60 * 60 * helferThreshold)) && status == false && helferThreshold) {
      // Verpätete Abmeldung?
      console.log("too late");
      await this.tooLateToggle();

    } else {
      // OK
      await this.eventService.setClubHelferEventAttendeeStatus(
        status,
        this.event.clubId,
        event.id
      );
      this.presentToast();
    }

  }
  async tooLateToggle() {
    const alert = await this.alertCtrl.create({
      header: "Abmelden nicht möglich",
      message: "Bitte melde dich direkt beim Trainerteam um dich abzumelden",
      buttons: [{
        role: "",
        text: "OK",
        handler: (data) => {
          console.log(data)
        }
      }]
    })
    alert.present()
  }

  async tooMany() {
    const alert = await this.alertCtrl.create({
      header: "Genügend Helfer",
      message: "Die Schicht hat bereits genügend Helfer",
      buttons: [{
        role: "",
        text: "OK",
        handler: (data) => {
          console.log(data)
        }
      }]
    })
    alert.present()
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(this.translate.get("common.success__saved")),
      color: "success",
      duration: 1500,
      position: "top",
    });
    toast.present();
  }

  async toastActionError(error) {
    const toast = await this.toastController.create({
      message: error.message,
      duration: 1500,
      position: "top",
      color: "danger",
    });

    await toast.present();
  }

  async editSchicht(schicht: Schicht) {
    const alert = await this.alertCtrl.create({
      header: "Schicht bearbeiten",
      subHeader: " ",
      message: "Eine Helferschicht bearbeiten.",
      inputs: [
        {
          id: "name",
          name: "name",
          label: "Beschreibung",
          placeholder: "Beschreibung",
          type: "text",
          value: schicht.name,
        },
        {
          id: "count",
          name: "countNeeded",
          label: "Anzahl Helfer",
          placeholder: "Anzahl Helfer",
          type: "number",
          value: schicht.countNeeded,
        },
        {
          id: "points",
          name: "points",
          label: "Anzahl Helferpunkte",
          placeholder: "1",
          type: "number",
          value: schicht.points,
        },
        {
          id: "timeFrom",
          name: "timeFrom",
          label: "Zeit von",
          placeholder: "Zeit von",
          type: "time",
          value: schicht.timeFrom,
        },
        {
          id: "timeTo",
          name: "timeTo",
          label: "Zeit bis",
          placeholder: "Zeit bis",
          type: "time",
          value: schicht.timeTo,
        },
      ],
      buttons: [
        {
          text: "Abbrechen",
          handler: () => {
            console.log("Abbrechen");
          },
        },
        {
          text: "Speichern",
          handler: async (data) => {
            console.log(data);

            await this.eventService.changeHelferEventSchicht(this.event.clubId, this.event.id, schicht.id, data);
            await this.presentToast();
            /*const index = this.event.schichten.findIndex((object) => {
              return object.id === schicht.id;
            });
            if (index !== -1) {
              this.event.schichten[index] = {
                id: schicht.id,
                ...data,
                count: 0,
              };
            }*/
          },
        },
      ],
    });

    await alert.present();
  }

  async deleteSchicht(schicht: Schicht) {
    const alert = await this.alertCtrl.create({
      header: "Schicht löschen",
      message: "Möchten Sie diese Schicht wirklich löschen?",
      buttons: [
        {
          text: "Abbrechen",
          role: "cancel",
          handler: () => {
            console.log("Löschen abgebrochen");
          },
        },
        {
          text: "Löschen",
          handler: async () => {
            await this.eventService.deleteHelferEventSchicht(this.event.clubId, this.event.id, schicht.id);
            await this.presentToast();
          },
        },
      ],
    });

    await alert.present();

  }

  async copySchicht(schicht: Schicht) {
    console.log(this.event.timeTo);
    const alert = await this.alertCtrl.create({
      header: "Schicht erstellen",
      subHeader: " ",
      message: "Eine neue Helferschicht erstellen.",
      inputs: [
        {
          id: "name",
          name: "name",
          value: schicht.name,
          label: "Beschreibung",
          placeholder: "Beschreibung",
          type: "text",
        },
        {
          id: "count",
          name: "countNeeded",
          value: schicht.countNeeded,
          label: "Anzahl Helfer",
          placeholder: "Anzahl Helfer",
          type: "number",
        },
        {
          id: "points",
          name: "points",
          value: schicht.points,
          label: "Anzahl Helferpunkte",
          placeholder: "Anzahl Helferpunkte",
          type: "number",

        },
        {
          id: "timeFrom",
          name: "timeFrom",
          value: schicht.timeFrom,
          label: "Zeit von",
          placeholder: "Zeit von",
          type: "time",

        },
        {
          id: "timeTo",
          name: "timeTo",
          value: schicht.timeTo,
          label: "Zeit bis",
          placeholder: "Zeit bis",
          type: "time",

        },
      ],
      buttons: [
        {
          text: "Abbrechen",
          handler: () => {
            console.log("Abbrechen");
          },
        },
        {
          text: "Hinzufügen",
          handler: async (data) => {
            console.log(data);
            await this.eventService.addNewHelferEventSchicht(this.event.clubId, this.event.id, data);
            await this.presentToast();
            /*this.event.schichten.push({
              id: this.event.schichten.length + 1,
              ...data,
              count: 0,
            });*/
          },
        },
      ],
    });
    alert.present();
  }


  async addSchicht() {
    console.log(this.event.timeTo);
    const alert = await this.alertCtrl.create({
      header: "Schicht erstellen",
      subHeader: " ",
      message: "Eine neue Helferschicht erstellen.",
      inputs: [
        {
          id: "name",
          name: "name",
          label: "Beschreibung",
          placeholder: "Beschreibung",
          type: "text",
        },
        {
          id: "count",
          name: "countNeeded",
          label: "Anzahl Helfer",
          placeholder: "Anzahl Helfer",
          type: "number",
        },
        {
          id: "points",
          name: "points",
          label: "Anzahl Helferpunkte",
          placeholder: "Anzahl Helferpunkte",
          type: "number",
          value: "",
        },
        {
          id: "timeFrom",
          name: "timeFrom",
          label: "Zeit von",
          placeholder: "Zeit von",
          type: "time",
          value: this.event.timeFrom.slice(11, 16),
        },
        {
          id: "timeTo",
          name: "timeTo",
          label: "Zeit bis",
          placeholder: "Zeit bis",
          type: "time",
          value: this.event.timeTo.slice(11, 16),
        },
      ],
      buttons: [
        {
          text: "Abbrechen",
          handler: () => {
            console.log("Abbrechen");
          },
        },
        {
          text: "Hinzufügen",
          handler: async (data) => {
            console.log(data);
            await this.eventService.addNewHelferEventSchicht(this.event.clubId, this.event.id, data);
            await this.presentToast();
            /*this.event.schichten.push({
              id: this.event.schichten.length + 1,
              ...data,
              count: 0,
            });*/
          },
        },
      ],
    });

    await alert.present();
  }

  async addMembersToSchicht(slidingItem: IonItemSliding, schicht: any) {
    slidingItem.closeOpened();
    // Hole alle Clubmitglieder
    const clubMembers = await firstValueFrom(
      this.fbService.getClubMemberRefs(this.event.clubId).pipe(
        switchMap(members => {
          const memberProfiles$ = members.map(member =>
            this.userProfileService.getUserProfileById(member.id).pipe(
              take(1),
              catchError(err => {
                console.error(`Failed to fetch profile for member ${member.id}:`, err);
                return of(null);
              })
            )
          );
          return forkJoin(memberProfiles$);
        })
      )
    );
  
    // Filtere Mitglieder, die bereits in der Schicht sind
    const existingMemberIds = schicht.attendeeListTrue.map(m => m.id);
    const availableMembers = clubMembers
      .filter(member => member && !existingMemberIds.includes(member.id))
      .sort((a, b) => a.firstName.localeCompare(b.firstName));
  
    if (availableMembers.length === 0) {
      const toast = await this.toastController.create({
        message: await lastValueFrom(this.translate.get("helfer-detail.no_members_available")),
        duration: 1500,
        position: "top",
        color: "warning"
      });
      toast.present();
      return;
    }
  
    // Erstelle Alert mit Checkboxen für verfügbare Mitglieder
    const alert = await this.alertCtrl.create({
      header: await lastValueFrom(this.translate.get("helfer-detail.add_members_title")),
      message: await lastValueFrom(this.translate.get("helfer-detail.add_members_message")),
      inputs: availableMembers.map(member => ({
        type: 'checkbox',
        label: `${member.firstName} ${member.lastName}`,
        value: member.id,
        checked: false
      })),
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("common.cancel")),
          role: 'cancel'
        },
        {
          text: await lastValueFrom(this.translate.get("common.confirm")),
          handler: async (selectedMemberIds) => {
            if (selectedMemberIds.length === 0) return;
            
            try {
              // Füge ausgewählte Mitglieder zur Schicht hinzu
              const promises = selectedMemberIds.map(memberId =>
                this.eventService.setClubHelferEventSchichtAttendeeStatusAdmin(
                  true,
                  this.event.clubId,
                  this.event.id,
                  schicht.id,
                  memberId
                )
              );
              
              await Promise.all(promises);
              this.presentToast();
            } catch (error) {
              console.error('Error adding members to schicht:', error);
              this.toastActionError(error);
            }
          }
        }
      ]
    });
  
    await alert.present();
  }


  changeTimeFrom(ev) {
    console.log(ev.detail.value);
    if (this.event.timeFrom > this.event.timeTo) {
      this.event.timeTo = this.event.timeFrom;
    }
  }

  changeStartDate(ev) {
    console.log(ev.detail.value);
    if (this.event.startDate > this.event.endDate) {
      this.event.endDate = this.event.startDate;
    }
  }

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.event, "confirm");
  }
}
