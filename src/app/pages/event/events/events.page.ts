import { Component, OnInit } from "@angular/core";

import {
  IonItemSliding,
  IonRouterOutlet,
  ModalController,
  MenuController,
  ToastController,
  AlertController,
} from "@ionic/angular";
import { User } from "@angular/fire/auth";
import {
  Observable,
  Subscription,
  catchError,
  combineLatest,
  lastValueFrom,
  map,
  mergeMap,
  of,
  switchMap,
  take,
  tap,
} from "rxjs";
import { Veranstaltung } from "src/app/models/event";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { EventService } from "src/app/services/firebase/event.service";
import { EventAddPage } from "../event-add/event-add.page";
import { Timestamp } from "@angular/fire/firestore";
import { EventDetailPage } from "../event-detail/event-detail.page";
import { TranslateService } from "@ngx-translate/core";
import { Club } from "src/app/models/club";
import { HelferAddPage } from "../../helfer/helfer-add/helfer-add.page";
import { ActivatedRoute, Router } from "@angular/router";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { Profile } from "src/app/models/user";
import { UiService } from "src/app/services/ui.service";
import { Optional } from "@angular/core";

@Component({
  selector: "app-events",
  templateUrl: "./events.page.html",
  styleUrls: ["./events.page.scss"],
  standalone: false,
})
export class EventsPage implements OnInit {
  skeleton = new Array(12);
  user$: Observable<User>;
  user: User;

  eventList$: Observable<Veranstaltung[]>;
  eventListPast$: Observable<Veranstaltung[]>;

  clubAdminList$: Observable<Club[]>;

  activatedRouteSub: Subscription;

  subscription: Subscription;
  children: Profile[] = [];

  constructor(
    public toastController: ToastController,
    @Optional() private readonly routerOutlet: IonRouterOutlet,
    private readonly alertCtrl: AlertController,
    private readonly modalCtrl: ModalController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly eventService: EventService,
    private readonly menuCtrl: MenuController,
    private translate: TranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userProfileService: UserProfileService,
    private uiService: UiService,
  ) {
    this.menuCtrl.enable(true, "menu");
  }

  ngOnInit() {
    this.eventList$ = this.getClubEvent();
    this.eventListPast$ = this.getClubEventPast();

    /*this.subscription = this.eventList$.pipe(
      tap(async (events) => {
        const event = events[0];
        console.log('Widget Value for Key=NextEvent: ', event?.name);
        // MyClubAppWidget.echo({ value: event.name });

        try {
          await MyClubAppWidget.setItem({ key: 'nextEvent', value: event?.name, group: 'group.app.myclub.default' }); 
        } catch (error) { 
          console.error('Widget Error setItem: ', error); 
        }
      
        try {
          await MyClubAppWidget.reloadAllTimelines();
          await MyClubAppWidget.reloadTimelines({ ofKind: 'AppWidget' });

        } catch (error) {
          console.error('Widget Error reloadTimelines: ', error);
        }

      })
    ).subscribe();*/

    //Create Events, Helfer, News
    this.clubAdminList$ = this.fbService.getClubAdminList();

    this.handleNavigationData();
  }

  ngOnDestroy() {
    if (this.activatedRouteSub) {
      this.activatedRouteSub.unsubscribe();
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return this.fbService.isClubAdmin(clubAdminList, clubId);
  }

  handleNavigationData() {
    this.activatedRouteSub = this.activatedRoute.url.subscribe(() => {
      const navigation = this.router.currentNavigation();
      if (
        navigation &&
        navigation.extras.state &&
        navigation.extras.state["type"] === "clubEvent"
      ) {
        const pushData = navigation.extras.state;
        console.log("PUSHDATA", JSON.stringify(pushData));
        const clubEvent: Veranstaltung = {
          id: pushData["id"],
          name: "",
          description: "",
          location: "",
          streetAndNumber: "",
          postalCode: "",
          city: "",
          date: Timestamp.now(),
          startDate: "",
          endDate: "",
          timeFrom: "",
          timeTo: "",
          clubId: pushData["clubId"],
          clubName: "",
          link_poll: "",
          link_web: "",
          status: false,
          attendees: undefined,
          countAttendees: 0,
          countNeeded: 0,
          closedEvent: false,
        };
        this.openEventDetailModal(clubEvent, true);
      } else {
        // console.log("no data");
      }
    });
  }

  getClubEvent() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
        if (!user) throw new Error("User not found");
      }),
      switchMap((user) => {
        if (!user) return of([]);
        return combineLatest([
          this.fbService.getUserClubRefs(user),
          this.userProfileService.getChildren(user.uid).pipe(
            tap((children) => {
              this.children = children;
            }),
            switchMap((children: Profile[]) =>
              children.length > 0
                ? combineLatest(
                    children.map((child) => {
                      // Create a User-like object with uid from child.id
                      const childUser = { uid: child.id } as User;
                      console.log("Child User:", childUser);
                      return this.fbService.getUserClubRefs(childUser);
                    }),
                  )
                : of([]),
            ),
            map((childrenClubs) => childrenClubs.flat()),
            // tap((clubs) => console.log("Children Clubs:", clubs)),
            catchError((error) => {
              console.error("Error fetching children clubs:", error);
              return of([]);
            }),
          ),
        ]).pipe(
          map(([userClubs, childrenClubs]) => {
            const allClubs = [...userClubs, ...childrenClubs];
            return allClubs.filter(
              (club, index, self) =>
                index === self.findIndex((c) => c.id === club.id),
            );
          }),
        );
      }),
      mergeMap((clubs) => {
        if (clubs.length === 0) return of([]);
        return combineLatest(
          clubs.map((club) =>
            combineLatest([
              this.eventService.getClubEventsRef(club.id),
              this.fbService.getClubRef(club.id), // Fetch the club details here
            ]).pipe(
              switchMap(([clubEvents, clubDetails]) => {
                if (clubEvents.length === 0) return of([]);
                return combineLatest(
                  clubEvents.map((event) =>
                    this.eventService
                      .getClubEventAttendeesRef(club.id, event.id)
                      .pipe(
                        map((attendees) => {
                          console.log("attendees", attendees);
                          const allIds = [
                            this.user.uid,
                            ...(this.children?.map((child) => child.id) || []),
                          ];
                          console.log("all ids", allIds);
                          const userAttendee = attendees.find((att) =>
                            allIds.includes(att.id),
                          );
                          console.log(userAttendee);
                          const status = userAttendee
                            ? userAttendee.status
                            : null;
                          return {
                            ...event,
                            attendees,
                            status,
                            countAttendees: attendees.filter(
                              (att) => att.status == true,
                            ).length,
                            clubId: club.id,
                            club: clubDetails, // Append club details to each event
                          };
                        }),
                        catchError(() =>
                          of({
                            ...event,
                            attendees: [],
                            status: null,
                            countAttendees: 0,
                            clubId: club.id,
                            club: clubDetails, // Also provide club details here in case of error
                          }),
                        ),
                      ),
                  ),
                );
              }),
              map((eventsWithAttendees) => eventsWithAttendees), // Flatten events array for each team
              catchError(() => of([])), // If error in fetching events, return empty array
            ),
          ),
        ).pipe(
          map((clubsEvents) => clubsEvents.flat()), // Flatten to get all events across all clubs
          map(
            (allEvents) =>
              allEvents.sort(
                (a, b) =>
                  Timestamp.fromMillis(a.date).seconds -
                  Timestamp.fromMillis(b.date).seconds,
              ), // Sort events by date
          ),
        );
      }),
      // tap((results) => console.log("Final results with all events:", results)),
      catchError((err) => {
        console.error("Error in getClubEvent:", err);
        return of([]); // Return an empty array on error
      }),
    );
  }

  getClubEventPast() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user) return of([]);
        return combineLatest([
          this.fbService.getUserClubRefs(user),
          this.userProfileService.getChildren(user.uid).pipe(
            tap((children) => {
              this.children = children;
            }),
            switchMap((children: Profile[]) =>
              children.length > 0
                ? combineLatest(
                    children.map((child) => {
                      // Create a User-like object with uid from child.id
                      const childUser = { uid: child.id } as User;
                      console.log("Child User:", childUser);
                      return this.fbService.getUserClubRefs(childUser);
                    }),
                  )
                : of([]),
            ),
            map((childrenClubs) => childrenClubs.flat()),
            // tap((clubs) => console.log("Children Clubs:", clubs)),
            catchError((error) => {
              console.error("Error fetching children clubs:", error);
              return of([]);
            }),
          ),
        ]).pipe(
          map(([userClubs, childrenClubs]) => {
            const allClubs = [...userClubs, ...childrenClubs];
            return allClubs.filter(
              (club, index, self) =>
                index === self.findIndex((c) => c.id === club.id),
            );
          }),
        );
      }),
      mergeMap((clubs) => {
        if (clubs.length === 0) return of([]);
        return combineLatest(
          clubs.map((club) =>
            combineLatest([
              this.eventService.getClubEventsPastRef(club.id),
              this.fbService.getClubRef(club.id), // Fetch the club details here
            ]).pipe(
              switchMap(([clubEvents, clubDetails]) => {
                if (clubEvents.length === 0) return of([]);
                return combineLatest(
                  clubEvents.map((event) =>
                    this.eventService
                      .getClubEventAttendeesRef(club.id, event.id)
                      .pipe(
                        map((attendees) => {
                          const attendeeIds = [
                            this.user.uid,
                            ...this.children.map((child) => child.id),
                          ];
                          const userAttendee = attendees.find((att) =>
                            attendeeIds.includes(att.id),
                          );
                          const status = userAttendee
                            ? userAttendee.status
                            : null;
                          return {
                            ...event,
                            attendees,
                            status,
                            countAttendees: attendees.filter(
                              (att) => att.status == true,
                            ).length,
                            clubId: club.id,
                            club: clubDetails, // Append club details to each event
                          };
                        }),
                        catchError(() =>
                          of({
                            ...event,
                            attendees: [],
                            status: null,
                            countAttendees: 0,
                            clubId: club.id,
                            club: clubDetails, // Also provide club details here in case of error
                          }),
                        ), // If error, return game with empty attendees
                      ),
                  ),
                );
              }),
              map((eventsWithAttendees) => eventsWithAttendees), // Flatten events array for each team
              catchError(() => of([])), // If error in fetching events, return empty array
            ),
          ),
        ).pipe(
          map((teamsevents) => teamsevents.flat()), // Flatten to get all events across all teams
          map(
            (allEvents) =>
              allEvents.sort(
                (a, b) => {
                  // console.log(a);
                  return (
                    Timestamp.fromMillis(b.date).seconds -
                    Timestamp.fromMillis(a.date).seconds
                  );
                },

                // a.startDate.getTime() - b.dateTime.getTime()
                //
              ), // Sort events by date
          ),
        );
      }),
      // tap((results) => console.log("Final results with all events:", results)),
      catchError((err) => {
        console.error("Error in getClubEventPast:", err);
        return of([]); // Return an empty array on error
      }),
    );
  }

  async toggle(status: boolean, event: Veranstaltung | any) {
    // Hole die Club-Mitglieder
    const clubMembers = await lastValueFrom(
      this.fbService.getClubMemberRefs(event.clubId).pipe(take(1)),
    );
    // Hole die Kinder des aktuellen Benutzers
    const children = await lastValueFrom(
      this.userProfileService.getChildren(this.user.uid).pipe(take(1)),
    );
    // Sammle alle möglichen Mitglieder (aktueller Benutzer + Kinder)
    const possibleMembers = [
      this.user,
      ...children.map((child) => ({ uid: child.id })),
    ];
    // Filtere die tatsächlichen Club-Mitglieder
    const clubMemberIds = clubMembers.map((member) => member.id);
    const validMembers = possibleMembers.filter((member) =>
      clubMemberIds.includes(member.uid),
    );
    if (validMembers.length === 0) {
      await this.uiService.showErrorToast(
        await lastValueFrom(this.translate.get("common.error__no_club_member")),
      );
      return;
    }
    if (validMembers.length === 1) {
      // Nur ein Kind oder nur Elternteil: direkt zusagen
      await this.processToggle(validMembers[0].uid, status, event);
    } else {
      // Mehrere Kinder/Eltern: Auswahl anzeigen
      const alert = await this.alertCtrl.create({
        header: await lastValueFrom(this.translate.get("common.select_member")),
        inputs: await Promise.all(
          validMembers.map(async (member) => {
            const profile =
              member.uid === this.user.uid
                ? { firstName: "Ich", lastName: "" }
                : await lastValueFrom(
                    this.userProfileService
                      .getUserProfileById(member.uid)
                      .pipe(take(1)),
                  );
            return {
              type: "checkbox" as const,
              label: `${profile.firstName} ${profile.lastName}`,
              value: member.uid,
            };
          }),
        ),
        buttons: [
          {
            text: await lastValueFrom(this.translate.get("common.cancel")),
            role: "cancel",
          },
          {
            text: await lastValueFrom(this.translate.get("common.ok")),
            role: "confirm",
            handler: (selectedId) => {
              console.log(selectedId);
              if (selectedId) {
                for (const id of selectedId) {
                  this.processToggle(id, status, event);
                }
              }
            },
          },
        ],
      });
      await alert.present();
    }
  }

  private async processToggle(
    userId: string,
    status: boolean,
    event: Veranstaltung | any,
  ) {
    const newStartDate = event.date.toDate();
    newStartDate.setHours(Number(event.timeFrom.substring(0, 2)));
    const eventThreshold = event.club.eventThreshold || 0;
    if (
      newStartDate.getTime() - new Date().getTime() <
        1000 * 60 * 60 * eventThreshold &&
      status == false &&
      eventThreshold
    ) {
      await this.tooLateToggle();
    } else {
      await this.eventService.setClubEventAttendeeStatusAdmin(
        status,
        event.clubId,
        event.id,
        userId,
      );
      this.presentToast();
    }
  }

  async toggleItem(
    slidingItem: IonItemSliding,
    status: boolean,
    event: Veranstaltung | any,
  ) {
    slidingItem.closeOpened();

    console.log(
      `Set Status ${status} for user ${this.user.uid} and club ${event.clubId} and event ${event.id}`,
    );
    const newStartDate = event.date.toDate();
    newStartDate.setHours(Number(event.timeFrom.substring(0, 2)));
    // console.log(newStartDate);

    // Get team threshold via training.teamId
    console.log("Grenzwert ");
    const eventThreshold = event.club.eventThreshold || 0;
    console.log(eventThreshold);

    // Verpätete Abmeldung?
    if (
      newStartDate.getTime() - new Date().getTime() <
        1000 * 60 * 60 * eventThreshold &&
      status == false &&
      eventThreshold
    ) {
      console.log("too late");
      await this.tooLateToggle();
    } else {
      // OK
      await this.eventService.setClubEventAttendeeStatus(
        status,
        event.clubId,
        event.id,
      );
      this.presentToast();
    }
  }

  async presentToast() {
    await this.uiService.showSuccessToast(
      await lastValueFrom(this.translate.get("common.changes__saved")),
    );
  }

  async copyEvent(slidingItem: IonItemSliding, event: Veranstaltung) {
    slidingItem.closeOpened();

    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: EventAddPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: event,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async createHelferEvent(event: Veranstaltung) {
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: HelferAddPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: event,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async deleteEvent(slidingItem: IonItemSliding, event) {
    slidingItem.closeOpened();
    await this.eventService.deleteClubEvent(event.clubId, event.id);
    const toast = await this.toastController.create({
      message: await lastValueFrom(
        this.translate.get("common.success__event_deleted"),
      ),
      color: "danger",
      duration: 1500,
      position: "top",
    });
    toast.present();
  }

  async cancelEvent(event: any) {
    const result = await this.uiService.showFormDialog({
      header: await lastValueFrom(this.translate.get("events.cancel_event")),
      inputs: [
        {
          name: "reason",
          type: "textarea",
          placeholder: await lastValueFrom(
            this.translate.get("events.cancel_reason_placeholder"),
          ),
          attributes: {
            maxlength: 200,
          },
        },
      ],
      confirmText: await lastValueFrom(this.translate.get("common.confirm")),
      cancelText: await lastValueFrom(this.translate.get("common.cancel")),
    });

    if (result) {
      if (!result.reason) {
        await this.uiService.showErrorToast(
          await lastValueFrom(
            this.translate.get("events.cancel_reason_required"),
          ),
        );
        return;
      }

      try {
        await this.eventService.changeClubEvent(
          {
            cancelled: true,
            cancelledReason: result.reason,
          },
          event.clubId,
          event.id,
        );
        await this.uiService.showSuccessToast(
          await lastValueFrom(this.translate.get("events.event_cancelled")),
        );
      } catch (error) {
        console.error("Error cancelling event:", error);
        await this.uiService.showErrorToast(
          await lastValueFrom(this.translate.get("common.error")),
        );
      }
    }
  }

  async tooLateToggle() {
    await this.uiService.showInfoDialog({
      header: "Abmelden nicht möglich",
      message: "Bitte melde dich direkt beim Trainerteam um dich abzumelden",
    });
  }
  async openFilter(ev: Event) {
    /*
    let filterList = [];

    const clubs$ = this.authService.getUser$().pipe(
      take(1),
      switchMap(user => this.fbService.getUserClubRefs(user).pipe(take(1))),  
      concatMap(clubArray => from(clubArray)),
      tap((club:Club)=>console.log(club.id)),
      concatMap(club => 
        this.fbService.getClubRef(club.id).pipe(
          take(1),
          defaultIfEmpty(null),  // gibt null zurück, wenn kein Wert von getClubRef gesendet wird
          map(result => [result]),
          catchError(error => {
            console.error('Error fetching ClubDetail:', error);
            return of([]);
          })
        )
      ),
      tap(clubList => clubList.forEach(club => {
        // filterList.push({id: club.type, name: club.type}); // Verband Infos
        return filterList.push(club);
      })),
      finalize(() => console.log("Get Club completed"))
  );

  this.subscription = forkJoin([clubs$]).subscribe({
    next: () => {
      const alertInputs = [];
      for (const item of filterList){
        alertInputs.push({
          label: item.name,
          type: 'radio',
          checked: item.id == this.filterValue,
          value: item.id,
        });
      }
    
      this.alertCtrl.create({
        header: 'Veranstaltungen filtern',
        message: 'Nach Verein filtern.',
       // subHeader: 'Nach Verein oder Teams filtern.',
        inputs: alertInputs,
        buttons: [
          { text: "OK",
            role: "confirm",
            handler: (value)=>{
              console.log(value)
              this.filterValue = value;
              this.eventsList$ = of(this.eventsList.filter((news: any) => news.filterable == value));
            } 
          },
          { text: "abbrechen",
            role: "cancel",
            handler: (value)=>{
              console.log(value);
              this.filterValue = "";
              this.eventsList$ = of(this.eventsList);
            } 
          }
        ],
        htmlAttributes: { 'aria-label': 'alert dialog' },
      }).then(alert => {
        alert.present();
      });
    },
    error: err => console.error('Error in the observable chain:', err)
  });
   */
  }

  async openEventCreateModal() {
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: EventAddPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: "",
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async openEventDetailModal(event: Veranstaltung, isFuture: boolean) {
    console.log("Open Modal");
    console.log(JSON.stringify(event));
    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: EventDetailPage,
      presentingElement,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: event,
        isFuture: isFuture,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async sendReminder(event: any) {
    // Hole alle Club-Mitglieder
    const clubMembers = await lastValueFrom(
      this.fbService.getClubMemberRefs(event.clubId).pipe(take(1)),
    );

    // Hole alle Teilnehmer des Events
    const attendees = await lastValueFrom(
      this.eventService
        .getClubEventAttendeesRef(event.clubId, event.id)
        .pipe(take(1)),
    );

    // Filtere Mitglieder, die noch nicht geantwortet haben
    const pendingMembers = clubMembers.filter(
      (member) => !attendees.some((attendee) => attendee.id === member.id),
    );

    if (pendingMembers.length === 0) {
      await this.uiService.showErrorToast(
        await lastValueFrom(this.translate.get("events.all_members_responded")),
      );
      return;
    }

    const result = await this.uiService.showConfirmDialog({
      header: await lastValueFrom(this.translate.get("events.send_reminder")),
      message: await lastValueFrom(
        this.translate.get("events.send_reminder_confirm", {
          count: pendingMembers.length,
        }),
      ),
      confirmText: await lastValueFrom(this.translate.get("common.confirm")),
      cancelText: await lastValueFrom(this.translate.get("common.cancel")),
    });

    if (result) {
      try {
        await this.eventService.sendReminder(event.clubId, event.id);
        await this.uiService.showSuccessToast(
          await lastValueFrom(this.translate.get("events.reminder_sent")),
        );
      } catch (error) {
        console.error("Error sending reminder:", error);
        await this.uiService.showErrorToast(
          await lastValueFrom(this.translate.get("common.error")),
        );
      }
    }
  }

  async openEventActions(slidingItem: IonItemSliding, event: any) {
    slidingItem.closeOpened();
    const actionSheet = await this.uiService.showActionSheet({
      header: await lastValueFrom(this.translate.get("events.actions")),
      buttons: [
        {
          text: await lastValueFrom(this.translate.get("events.create_helfer")),
          icon: "help-buoy-outline",
          handler: () => {
            this.createHelferEvent(event);
          },
        },
        {
          text: await lastValueFrom(this.translate.get("events.cancel_event")),
          icon: "alert-circle-outline",
          handler: () => {
            this.cancelEvent(event);
          },
        },
        {
          text: await lastValueFrom(this.translate.get("events.send_reminder")),
          icon: "notifications-outline",
          handler: () => {
            this.sendReminder(event);
          },
        },
        {
          text: await lastValueFrom(this.translate.get("common.cancel")),
          // icon: "close",
          role: "destructive",
        },
      ],
    });
  }
}
