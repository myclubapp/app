import { Component, OnInit, Optional } from "@angular/core";
import {
  AlertController,
  IonItemSliding,
  IonRouterOutlet,
  ModalController,
  MenuController,
  ToastController,
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
import { HelferEvent } from "src/app/models/event";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { EventService } from "src/app/services/firebase/event.service";
import { HelferAddPage } from "../helfer-add/helfer-add.page";
import { Timestamp } from "@angular/fire/firestore";
import { HelferDetailPage } from "../helfer-detail/helfer-detail.page";
import { TranslateService } from "@ngx-translate/core";
import { Club } from "src/app/models/club";
import { ActivatedRoute, Router } from "@angular/router";
import { Profile } from "src/app/models/user";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { UiService } from "src/app/services/ui.service";

@Component({
  selector: "app-helfer",
  templateUrl: "./helfer.page.html",
  styleUrls: ["./helfer.page.scss"],
  standalone: false,
})
export class HelferPage implements OnInit {
  skeleton = new Array(12);

  user$: Observable<User>;
  user: User;

  helferList$: Observable<HelferEvent[]>;
  helferListPast$: Observable<HelferEvent[]>;

  clubAdminList$: Observable<Club[]>;

  activatedRouteSub: Subscription;

  children: Profile[] = [];

  constructor(
    public toastController: ToastController,
    @Optional() private readonly routerOutlet: IonRouterOutlet,
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
    private readonly alertCtrl: AlertController,
  ) {
    this.menuCtrl.enable(true, "menu");
  }

  ngOnInit() {
    this.helferList$ = this.getHelferEvent();
    this.helferListPast$ = this.getHelferEventPast();

    //Create Events, Helfer, News
    this.clubAdminList$ = this.fbService.getClubAdminList();
    this.handleNavigationData();
  }

  ngOnDestroy() {
    if (this.activatedRouteSub) {
      this.activatedRouteSub.unsubscribe();
    }
  }

  handleNavigationData() {
    this.activatedRouteSub = this.activatedRoute.url.subscribe(() => {
      const navigation = this.router.currentNavigation();
      if (
        navigation &&
        navigation.extras.state &&
        navigation.extras.state["type"] === "helferEvent"
      ) {
        const pushData = this.router.currentNavigation().extras.state;
        // console.log("PUSHDATA " + JSON.stringify(pushData));
        // console.log("PUSHDATA " + JSON.stringify(pushData));
        let helferEvent: HelferEvent = {
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
        this.openEventDetailModal(helferEvent, true);
      } else {
        // console.log("no data");
      }
    });
  }
  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return this.fbService.isClubAdmin(clubAdminList, clubId);
  }

  getHelferEvent() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user) return of([]);
        // Get user's teams and children's teams
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
      // tap((clubs) => console.log("Clubs:", clubs)),
      mergeMap((clubs) => {
        if (clubs.length === 0) return of([]);
        return combineLatest(
          clubs.map((club) =>
            this.eventService.getClubHelferEventRefs(club.id).pipe(
              switchMap((events) => {
                if (events.length === 0) return of([]);
                return combineLatest(
                  events.map((event) =>
                    this.eventService
                      .getClubHelferEventSchichtenRef(club.id, event.id)
                      .pipe(
                        switchMap((schichten) => {
                          if (schichten.length === 0) return of([]);
                          return combineLatest(
                            schichten.map((schicht) =>
                              this.eventService
                                .getClubHelferEventSchichtAttendeesRef(
                                  club.id,
                                  event.id,
                                  schicht.id,
                                )
                                .pipe(
                                  map((attendees) => {
                                    /*const attendeeDetails = attendees.map(attendee => {
                                    return {
                                        ...attendee,
                                        status: attendee.status,
                                        confirmed: attendee.confirmed
                                    };
                                });
                                */
                                    return {
                                      ...schicht,
                                      // attendees: attendeeDetails,
                                      countAttendees: attendees.filter(
                                        (att) => att.status === true,
                                      ).length,
                                      countNeeded: schicht.countNeeded,
                                    };
                                  }),
                                  catchError(() =>
                                    of({
                                      ...schicht,
                                      // attendees: [],
                                      countAttendees: 0,
                                      countNeeded: schicht.neededAttendees,
                                    }),
                                  ),
                                ),
                            ),
                          );
                        }),
                        map((schichtenWithDetails) => ({
                          ...event,
                          schichten: schichtenWithDetails,
                          countAttendees: schichtenWithDetails.reduce(
                            (acc, schicht) =>
                              acc + Number(schicht.countAttendees),
                            0,
                          ),
                          countNeeded: schichtenWithDetails.reduce(
                            (acc, schicht) => acc + Number(schicht.countNeeded),
                            0,
                          ),
                        })),
                        catchError(() =>
                          of({
                            ...event,
                            schichten: [],
                            countAttendees: 0,
                            countNeeded: 0,
                          }),
                        ),
                      ),
                  ),
                );
              }),
              map((eventsWithSchichten) => eventsWithSchichten), // Flatten events array for each club
              catchError(() => of([])), // If error in fetching events, return empty array
            ),
          ),
        ).pipe(
          map((clubsEvents) => clubsEvents.flat()), // Flatten to get all events across all clubs
          map((allEvents) =>
            allEvents.sort(
              (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(), // Sort events by date
            ),
          ),
        );
      }),
      // tap((results) => console.log("Final results with all events:", results)),
      catchError((err) => {
        console.error("Error in getHelferEvent:", err);
        return of([]); // Return an empty array on error
      }),
    );
  }

  getHelferEventPast() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user) return of([]);
        // Get user's teams and children's teams
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
      // tap((clubs) => console.log("Teams:", clubs)),
      mergeMap((clubs) => {
        if (clubs.length === 0) return of([]);
        return combineLatest(
          clubs.map((club) =>
            this.eventService.getClubHelferEventPastRefs(club.id).pipe(
              switchMap((events) => {
                if (events.length === 0) return of([]);
                return combineLatest(
                  events.map((event) =>
                    this.eventService
                      .getClubHelferEventSchichtenRef(club.id, event.id)
                      .pipe(
                        switchMap((schichten) => {
                          if (schichten.length === 0) return of([]);
                          return combineLatest(
                            schichten.map((schicht) =>
                              this.eventService
                                .getClubHelferEventSchichtAttendeesRef(
                                  club.id,
                                  event.id,
                                  schicht.id,
                                )
                                .pipe(
                                  map((attendees) => {
                                    /*const attendeeDetails = attendees.map(attendee => {
                                    return {
                                        ...attendee,
                                        status: attendee.status,
                                        confirmed: attendee.confirmed
                                    };
                                });
                                */
                                    return {
                                      ...schicht,
                                      // attendees: attendeeDetails,
                                      countAttendees: attendees.filter(
                                        (att) => att.status === true,
                                      ).length,
                                      countNeeded: schicht.countNeeded,
                                    };
                                  }),
                                  catchError(() =>
                                    of({
                                      ...schicht,
                                      // attendees: [],
                                      countAttendees: 0,
                                      countNeeded: schicht.neededAttendees,
                                    }),
                                  ),
                                ),
                            ),
                          );
                        }),
                        map((schichtenWithDetails) => ({
                          ...event,
                          schichten: schichtenWithDetails,
                          countAttendees: schichtenWithDetails.reduce(
                            (acc, schicht) =>
                              acc + Number(schicht.countAttendees),
                            0,
                          ),
                          countNeeded: schichtenWithDetails.reduce(
                            (acc, schicht) => acc + Number(schicht.countNeeded),
                            0,
                          ),
                        })),
                        catchError(() =>
                          of({
                            ...event,
                            schichten: [],
                            countAttendees: 0,
                            countNeeded: 0,
                          }),
                        ),
                      ),
                  ),
                );
              }),
              map((eventsWithSchichten) => eventsWithSchichten), // Flatten events array for each club
              catchError(() => of([])), // If error in fetching events, return empty array
            ),
          ),
        ).pipe(
          map((clubsEvents) => clubsEvents.flat()), // Flatten to get all events across all clubs
          map(
            (allEvents) =>
              allEvents.sort(
                (a, b) =>
                  Timestamp.fromMillis(b.date).seconds -
                  Timestamp.fromMillis(a.date).seconds,
              ), // Sort events by date
          ),
        );
      }),
      // tap((results) => console.log("Final results with all events:", results)),
      catchError((err) => {
        console.error("Error in getHelferEvent:", err);
        return of([]); // Return an empty array on error
      }),
    );
  }
  async toggle(status: boolean, event: HelferEvent) {
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
              type: "radio" as const,
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
              if (selectedId) {
                this.processToggle(selectedId, status, event);
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
    event: HelferEvent,
  ) {
    await this.eventService.setClubHelferEventAttendeeStatusAdmin(
      status,
      event.clubId,
      event.id,
      userId,
    );
    this.presentToast();
  }

  async toggleItem(
    slidingItem: IonItemSliding,
    status: boolean,
    event: HelferEvent,
  ) {
    slidingItem.closeOpened();

    console.log(
      `Set Status ${status} for user ${this.user.uid} and club ${event.clubId} and training ${event.id}`,
    );
    await this.eventService.setClubHelferEventAttendeeStatus(
      status,
      event.clubId,
      event.id,
    );
    this.presentToast();
  }

  async presentToast() {
    await this.uiService.showSuccessToast(
      await lastValueFrom(this.translate.get("common.success__saved")),
    );
  }

  async presentErrorToast(error) {
    await this.uiService.showErrorToast(error.message);
  }

  private async showAddHelferSuccessAlert() {
    await this.uiService.showInfoDialog({
      header: "Erfolg",
      message: "Der Helfer wurde erfolgreich hinzugefügt.",
    });
  }

  private async showAddHelferErrorAlert() {
    await this.uiService.showInfoDialog({
      header: "Fehler",
      message:
        "Beim Hinzufügen des Helfers ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
    });
  }

  async copyEvent(slidingItem: IonItemSliding, event) {
    slidingItem.closeOpened();

    try {
      const schichten = await lastValueFrom(
        this.eventService
          .getClubHelferEventSchichtenRef(event.clubId, event.id)
          .pipe(
            take(1),
            map((schichten) =>
              schichten.sort((a, b) => a.timeFrom.localeCompare(b.timeFrom)),
            ),
            catchError((err) => {
              console.error("Error in getHelferEventSchichten:", err);
              return of([]); // Return an empty array on error
            }),
          ),
      );

      event["schichten"] = schichten;

      const modal = await this.modalCtrl.create({
        component: HelferAddPage,
        presentingElement: this.routerOutlet.nativeEl, // make sure this is correct
        canDismiss: true,
        showBackdrop: true,
        componentProps: { data: event },
      });

      await modal.present();

      const { data, role } = await modal.onWillDismiss();

      if (role === "confirm") {
        // Handle confirm action if necessary
      }
    } catch (error) {
      console.error("Failed to process event schichten:", error);
    }
  }

  async deleteEvent(slidingItem: IonItemSliding, event) {
    slidingItem.closeOpened();
    await this.eventService.deleteHelferEvent(event.clubId, event.id);
    const toast = await this.toastController.create({
      message: await lastValueFrom(
        this.translate.get("common.success__helfer_deleted"),
      ),
      color: "danger",
      duration: 1500,
      position: "top",
    });
    toast.present();
  }

  async openEventCreateModal() {
    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalCtrl.create({
      component: HelferAddPage,
      presentingElement: this.routerOutlet.nativeEl,
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

  async openEventDetailModal(event: HelferEvent, isFuture: boolean) {
    // console.log("Open Modal");
    // console.log(JSON.stringify(event));
    const modal = await this.modalCtrl.create({
      component: HelferDetailPage,
      presentingElement: this.routerOutlet.nativeEl,
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
}
