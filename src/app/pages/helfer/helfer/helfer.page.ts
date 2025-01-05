import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
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
import { HelferEvent, Veranstaltung } from "src/app/models/event";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { EventService } from "src/app/services/firebase/event.service";
import { HelferAddPage } from "../helfer-add/helfer-add.page";
import { Timestamp } from "firebase/firestore";
import { HelferDetailPage } from "../helfer-detail/helfer-detail.page";
import { TranslateService } from "@ngx-translate/core";
import { Club } from "src/app/models/club";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-helfer",
  templateUrl: "./helfer.page.html",
  styleUrls: ["./helfer.page.scss"],
})
export class HelferPage implements OnInit {
  skeleton = new Array(12);

  user$: Observable<User>;
  user: User;

  helferList$: Observable<HelferEvent[]>;
  helferListPast$: Observable<HelferEvent[]>;

  clubAdminList$: Observable<Club[]>;

  activatedRouteSub: Subscription;

  constructor(
    public toastController: ToastController,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalCtrl: ModalController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly eventService: EventService,
    private readonly menuCtrl: MenuController,
    private translate: TranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
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
    this.activatedRouteSub = this.activatedRoute.url.subscribe(data => {
      if (this.router.getCurrentNavigation().extras && this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state["type"] === "helferEvent") {
        const pushData = this.router.getCurrentNavigation().extras.state;
        // console.log("PUSHDATA " + JSON.stringify(pushData));
        let helferEvent: HelferEvent = {
          id: "",
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
          clubId: "",
          clubName: "",
          link_poll: "",
          link_web: "",
          status: false,
          attendees: undefined,
          countAttendees: 0,
          countNeeded: 0
        };
        this.openEventDetailModal(helferEvent, true);
      } else {
        console.log("no data");
      }
    });
  }
  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return clubAdminList && clubAdminList.some(club => club.id === clubId);
  }

  getHelferEvent() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user) return of([]);
        return this.fbService.getUserClubRefs(user);
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
                    this.eventService.getClubHelferEventSchichtenRef(club.id, event.id).pipe(
                      switchMap((schichten) => {
                        if (schichten.length === 0) return of([]);
                        return combineLatest(
                          schichten.map((schicht) =>
                            this.eventService.getClubHelferEventSchichtAttendeesRef(club.id, event.id, schicht.id).pipe(
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
                                  countAttendees: attendees.filter((att) => att.status === true).length,
                                  countNeeded: schicht.countNeeded,
                                };
                              }),
                              catchError(() => of({
                                ...schicht,
                                // attendees: [],
                                countAttendees: 0,
                                countNeeded: schicht.neededAttendees
                              }))
                            )
                          )
                        );
                      }),
                      map((schichtenWithDetails) => ({
                        ...event,
                        schichten: schichtenWithDetails,
                        countAttendees: schichtenWithDetails.reduce((acc, schicht) => acc + Number(schicht.countAttendees), 0),
                        countNeeded: schichtenWithDetails.reduce((acc, schicht) => acc + Number(schicht.countNeeded), 0),
                      })),
                      catchError(() => of({
                        ...event,
                        schichten: [],
                        countAttendees: 0,
                        countNeeded: 0
                      }))
                    )
                  )
                );
              }),
              map((eventsWithSchichten) => eventsWithSchichten), // Flatten events array for each club
              catchError(() => of([])) // If error in fetching events, return empty array
            )
          )
        ).pipe(
          map((clubsEvents) => clubsEvents.flat()), // Flatten to get all events across all clubs
          map((allEvents) =>
            allEvents.sort(
              (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime() // Sort events by date
            )
          )
        );
      }),
      // tap((results) => console.log("Final results with all events:", results)),
      catchError((err) => {
        console.error("Error in getHelferEvent:", err);
        return of([]); // Return an empty array on error
      })
    );
  }

  getHelferEvent2() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user) return of([]);
        return this.fbService.getUserClubRefs(user);
      }),
      tap((clubs) => console.log("Teams:", clubs)),
      mergeMap((clubs) => {
        if (clubs.length === 0) return of([]);
        return combineLatest(
          clubs.map((club) =>
            this.eventService.getClubHelferEventRefs(club.id).pipe(
              switchMap((clubevents) => {
                if (clubevents.length === 0) return of([]);
                return combineLatest(
                  clubevents.map((event) =>
                    this.eventService
                      .getClubHelferEventAttendeesRef(club.id, event.id)
                      .pipe(
                        map((attendees) => {
                          const userAttendee = attendees.find(
                            (att) => att.id == this.user.uid
                          );
                          const status = userAttendee
                            ? userAttendee.status
                            : null; // default to false if user is not found in attendees list
                          return {
                            ...event,
                            attendees,
                            status: status,
                            countAttendees: attendees.filter(
                              (att) => att.status == true
                            ).length,
                            clubId: club.id,
                          };
                        }),
                        catchError(() =>
                          of({
                            ...event,
                            attendees: [],
                            status: null,
                            countAttendees: 0,
                            clubId: club.id,
                          })
                        ) // If error, return game with empty attendees
                      )
                  )
                );
              }),
              map((eventsWithAttendees) => eventsWithAttendees), // Flatten events array for each club
              catchError(() => of([])) // If error in fetching events, return empty array
            )
          )
        ).pipe(
          map((clubsevents) => clubsevents.flat()), // Flatten to get all events across all clubs
          map((allEvents) =>
            allEvents.sort((a, b) =>
              Timestamp.fromMillis(a.date).seconds - Timestamp.fromMillis(b.date).seconds
            ) // Sort events by date
          )
        );
      }),
      // tap((results) => console.log("Final results with all events:", results)),
      catchError((err) => {
        console.error("Error in getTeameventsUpcoming:", err);
        return of([]); // Return an empty array on error
      })
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
        return this.fbService.getUserClubRefs(user);
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
                    this.eventService.getClubHelferEventSchichtenRef(club.id, event.id).pipe(
                      switchMap((schichten) => {
                        if (schichten.length === 0) return of([]);
                        return combineLatest(
                          schichten.map((schicht) =>
                            this.eventService.getClubHelferEventSchichtAttendeesRef(club.id, event.id, schicht.id).pipe(
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
                                  countAttendees: attendees.filter((att) => att.status === true).length,
                                  countNeeded: schicht.countNeeded,
                                };
                              }),
                              catchError(() => of({
                                ...schicht,
                                // attendees: [],
                                countAttendees: 0,
                                countNeeded: schicht.neededAttendees
                              }))
                            )
                          )
                        );
                      }),
                      map((schichtenWithDetails) => ({
                        ...event,
                        schichten: schichtenWithDetails,
                        countAttendees: schichtenWithDetails.reduce((acc, schicht) => acc + Number(schicht.countAttendees), 0),
                        countNeeded: schichtenWithDetails.reduce((acc, schicht) => acc + Number(schicht.countNeeded), 0),
                      })),
                      catchError(() => of({
                        ...event,
                        schichten: [],
                        countAttendees: 0,
                        countNeeded: 0
                      }))
                    )
                  )
                );
              }),
              map((eventsWithSchichten) => eventsWithSchichten), // Flatten events array for each club
              catchError(() => of([])) // If error in fetching events, return empty array
            )
          )
        ).pipe(
          map((clubsEvents) => clubsEvents.flat()), // Flatten to get all events across all clubs
          map((allEvents) =>
            allEvents.sort((a, b) =>
              Timestamp.fromMillis(b.date).seconds - Timestamp.fromMillis(a.date).seconds
            ) // Sort events by date
          )
        );
      }),
      // tap((results) => console.log("Final results with all events:", results)),
      catchError((err) => {
        console.error("Error in getHelferEvent:", err);
        return of([]); // Return an empty array on error
      })
    );
  }
  async toggle(status: boolean, event: HelferEvent) {
    console.log(
      `Set Status ${status} for user ${this.user.uid} and club ${event.clubId} and training ${event.id}`
    );
    await this.eventService.setClubHelferEventAttendeeStatus(
      status,
      event.clubId,
      event.id
    );
    this.presentToast();
  }

  async toggleItem(
    slidingItem: IonItemSliding,
    status: boolean,
    event: HelferEvent
  ) {
    slidingItem.closeOpened();

    console.log(
      `Set Status ${status} for user ${this.user.uid} and club ${event.clubId} and training ${event.id}`
    );
    await this.eventService.setClubHelferEventAttendeeStatus(
      status,
      event.clubId,
      event.id
    );
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(this.translate.get("common.changes__saved")),
      color: "primary",
      duration: 1500,
      position: "top",
    });
    toast.present();
  }

  async copyEvent(slidingItem: IonItemSliding, event) {
    slidingItem.closeOpened();
  
    try {
      const schichten = await lastValueFrom(
        this.eventService.getClubHelferEventSchichtenRef(event.clubId, event.id).pipe(
          take(1),
          map((schichten) => schichten.sort((a, b) => a.timeFrom.localeCompare(b.timeFrom))),
          catchError((err) => {
            console.error("Error in getHelferEventSchichten:", err);
            return of([]); // Return an empty array on error
          })
        )
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
      message: await lastValueFrom(this.translate.get("common.success__helfer_deleted")),
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
