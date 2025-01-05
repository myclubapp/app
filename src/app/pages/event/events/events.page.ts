import { Component, OnInit } from "@angular/core";
import { MyClubAppWidget } from 'myclub-widget-plugin';

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
  first,
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
import { Timestamp } from "firebase/firestore";
import { EventDetailPage } from "../event-detail/event-detail.page";
import { TranslateService } from "@ngx-translate/core";
import { Club } from "src/app/models/club";
import { HelferAddPage } from "../../helfer/helfer-add/helfer-add.page";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-events",
  templateUrl: "./events.page.html",
  styleUrls: ["./events.page.scss"],
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

  constructor(
    public toastController: ToastController,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly alertCtrl: AlertController,
    private readonly modalCtrl: ModalController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly eventService: EventService,
    private readonly menuCtrl: MenuController,
    private translate: TranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.menuCtrl.enable(true, "menu");
  }

  ngOnInit() {
    this.eventList$ = this.getClubEvent();
    this.eventListPast$ = this.getClubEventPast();

    this.subscription = this.eventList$.pipe(
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
    ).subscribe();


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
    return clubAdminList && clubAdminList.some(club => club.id === clubId);
  }

  handleNavigationData() {
    this.activatedRouteSub = this.activatedRoute.url.subscribe(() => {
      const navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras.state && navigation.extras.state["type"] === 'clubEvent') {
        const pushData = navigation.extras.state;
        console.log('PUSHDATA', JSON.stringify(pushData));
        const clubEvent: Veranstaltung = {
          id: pushData["id"],
          name: '',
          description: '',
          location: '',
          streetAndNumber: '',
          postalCode: '',
          city: '',
          date: Timestamp.now(),
          startDate: '',
          endDate: '',
          timeFrom: '',
          timeTo: '',
          clubId: pushData["clubId"],
          clubName: '',
          link_poll: '',
          link_web: '',
          status: false,
          attendees: undefined,
          countAttendees: 0,
          countNeeded: 0,
        };
        this.openEventDetailModal(clubEvent, true);
      } else {
        console.log('no data');
      }
    });
  }

  getClubEvent() {
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
            combineLatest([
              this.eventService.getClubEventsRef(club.id),
              this.fbService.getClubRef(club.id) // Fetch the club details here
            ]).pipe(
              switchMap(([clubEvents, clubDetails]) => {
                if (clubEvents.length === 0) return of([]);
                return combineLatest(
                  clubEvents.map((event) =>
                    this.eventService.getClubEventAttendeesRef(club.id, event.id).pipe(
                      map((attendees) => {
                        const userAttendee = attendees.find(
                          (att) => att.id == this.user.uid
                        );
                        const status = userAttendee ? userAttendee.status : null;
                        return {
                          ...event,
                          attendees,
                          status,
                          countAttendees: attendees.filter((att) => att.status == true).length,
                          clubId: club.id,
                          club: clubDetails // Append club details to each event
                        };
                      }),
                      catchError(() =>
                        of({
                          ...event,
                          attendees: [],
                          status: null,
                          countAttendees: 0,
                          clubId: club.id,
                          club: clubDetails // Also provide club details here in case of error
                        })
                      )
                    )
                  )
                );
              }),
              map((eventsWithAttendees) => eventsWithAttendees), // Flatten events array for each team
              catchError(() => of([])) // If error in fetching events, return empty array
            )
          )
        ).pipe(
          map((clubsEvents) => clubsEvents.flat()), // Flatten to get all events across all clubs
          map((allEvents) =>
            allEvents.sort((a, b) =>
              Timestamp.fromMillis(a.date).seconds - Timestamp.fromMillis(b.date).seconds
            ) // Sort events by date
          )
        );
      }),
      // tap((results) => console.log("Final results with all events:", results)),
      catchError((err) => {
        console.error("Error in getClubEvent:", err);
        return of([]); // Return an empty array on error
      })
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
        return this.fbService.getUserClubRefs(user);
      }),
      // tap((clubs) => console.log("Teams:", clubs)),
      mergeMap((teams) => {
        if (teams.length === 0) return of([]);
        return combineLatest(
          teams.map((team) =>
            this.eventService.getClubEventsPastRef(team.id).pipe(
              switchMap((teamevents) => {
                if (teamevents.length === 0) return of([]);
                return combineLatest(
                  teamevents.map((game) =>
                    this.eventService
                      .getClubEventAttendeesRef(team.id, game.id)
                      .pipe(
                        map((attendees) => {
                          const userAttendee = attendees.find(
                            (att) => att.id == this.user.uid
                          );
                          const status = userAttendee
                            ? userAttendee.status
                            : null; // default to false if user is not found in attendees list
                          return {
                            ...game,
                            attendees,
                            status: status,
                            countAttendees: attendees.filter(
                              (att) => att.status == true
                            ).length,
                            teamId: team.id,
                          };
                        }),
                        catchError(() =>
                          of({
                            ...game,
                            attendees: [],
                            status: null,
                            countAttendees: 0,
                            teamId: team.id,
                          })
                        ) // If error, return game with empty attendees
                      )
                  )
                );
              }),
              map((eventsWithAttendees) => eventsWithAttendees), // Flatten events array for each team
              catchError(() => of([])) // If error in fetching events, return empty array
            )
          )
        ).pipe(
          map((teamsevents) => teamsevents.flat()), // Flatten to get all events across all teams
          map((allEvents) =>
            allEvents.sort((a, b) => {
              // console.log(a);
              return Timestamp.fromMillis(b.date).seconds - Timestamp.fromMillis(a.date).seconds;
            }
              
              // a.startDate.getTime() - b.dateTime.getTime()
              // 
            ) // Sort events by date
          )
        );
      }),
      // tap((results) => console.log("Final results with all events:", results)),
      catchError((err) => {
        console.error("Error in getClubEventPast:", err);
        return of([]); // Return an empty array on error
      })
    );
  }


  async toggle(status: boolean, event: Veranstaltung | any) {
    console.log(
      `Set Status ${status} for user ${this.user.uid} and club ${event.clubId} and event ${event.id}`
    );
    const newStartDate = event.date.toDate();
    newStartDate.setHours(Number(event.timeFrom.substring(0, 2)));
    // console.log(newStartDate);

    // Get team threshold via training.teamId
    console.log("Grenzwert ")
    const eventThreshold = event.club.eventThreshold || 0;
    console.log(eventThreshold);
    // Verpätete Abmeldung?
    if (((newStartDate.getTime() - new Date().getTime()) < (1000 * 60 * 60 * eventThreshold)) && status == false && eventThreshold) {
      console.log("too late");
      await this.tooLateToggle();

    } else {
      // OK
      await this.eventService.setClubEventAttendeeStatus(
        status,
        event.clubId,
        event.id
      );
      this.presentToast();
    }

  }


  async toggleItem(
    slidingItem: IonItemSliding,
    status: boolean,
    event: Veranstaltung | any
  ) {
    slidingItem.closeOpened();

    console.log(
      `Set Status ${status} for user ${this.user.uid} and club ${event.clubId} and event ${event.id}`
    );
    const newStartDate = event.date.toDate();
    newStartDate.setHours(Number(event.timeFrom.substring(0, 2)));
    // console.log(newStartDate);

    // Get team threshold via training.teamId
    console.log("Grenzwert ")
    const eventThreshold = event.club.eventThreshold || 0;
    console.log(eventThreshold);

    // Verpätete Abmeldung?
    if (((newStartDate.getTime() - new Date().getTime()) < (1000 * 60 * 60 * eventThreshold)) && status == false && eventThreshold) {
      console.log("too late");
      await this.tooLateToggle();

    } else {
      // OK
      await this.eventService.setClubEventAttendeeStatus(
        status,
        event.clubId,
        event.id
      );
      this.presentToast();
    }
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

  async copyEvent(slidingItem: IonItemSliding, event: Veranstaltung) {
    slidingItem.closeOpened();

    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalCtrl.create({
      component: EventAddPage,
      presentingElement: this.routerOutlet.nativeEl,
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

  async createHelferEvent(slidingItem: IonItemSliding, event: Veranstaltung) {
    slidingItem.closeOpened();

    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalCtrl.create({
      component: HelferAddPage,
      presentingElement: this.routerOutlet.nativeEl,
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
      message: await lastValueFrom(this.translate.get("common.success__event_deleted")),
      color: "danger",
      duration: 1500,
      position: "top",
    });
    toast.present();
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
    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalCtrl.create({
      component: EventAddPage,
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

  async openEventDetailModal(event: Veranstaltung, isFuture: boolean) {
    console.log("Open Modal");
    console.log(JSON.stringify(event));
    const modal = await this.modalCtrl.create({
      component: EventDetailPage,
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
