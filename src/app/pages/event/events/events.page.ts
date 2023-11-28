import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import {
  IonItemSliding,
  IonRouterOutlet,
  ModalController,
  MenuController,
  ToastController,
} from "@ionic/angular";
import { User } from "@angular/fire/auth";
import {
  Observable,
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
import { Timestamp } from "firebase/firestore";
import { EventDetailPage } from "../event-detail/event-detail.page";
import { TranslateService } from "@ngx-translate/core";

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

  filterList: any[] = [];
  filterValue: string = "";

  constructor(
    public toastController: ToastController,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalCtrl: ModalController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly eventService: EventService,
    private readonly menuCtrl: MenuController,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService
  ) {
    this.menuCtrl.enable(true, "menu");
  }

  ngOnInit() {
    this.eventList$ = this.getClubEvent();
    this.eventList$.subscribe({
      next: (data) => {
        console.log("EVENT Data received");
        this.cdr.detectChanges();
      },
      error: (err) => console.error("EVENT Error in subscription:", err),
      complete: () => console.log("EVENT Observable completed"),
    });

    this.eventListPast$ = this.getClubEventPast();
    this.eventListPast$.subscribe({
      next: () => {
        console.log("EVENT PAST Data received");
        this.cdr.detectChanges();
      },
      error: (err) => console.error("EVENT PAST Error in subscription:", err),
      complete: () => console.log("EVENT PAST Observable completed"),
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
      tap((clubs) => console.log("Clubs:", clubs)),
      mergeMap((clubs) => {
        if (clubs.length === 0) return of([]);
        return combineLatest(
          clubs.map((team) =>
            this.eventService.getClubEventsRef(team.id).pipe(
              switchMap((clubEvents) => {
                if (clubEvents.length === 0) return of([]);
                return combineLatest(
                  clubEvents.map((game) =>
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
              map((gamesWithAttendees) => gamesWithAttendees), // Flatten games array for each team
              catchError(() => of([])) // If error in fetching games, return empty array
            )
          )
        ).pipe(
          map((teamsGames) => teamsGames.flat()), // Flatten to get all games across all teams
          map(
            (allGames) =>
              allGames.sort(
                (a, b) =>
                  Timestamp.fromMillis(a.dateTime).seconds -
                  Timestamp.fromMillis(b.dateTime).seconds
              ) // Sort games by date
          )
        );
      }),
      tap((results) => console.log("Final results with all games:", results)),
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
      tap((clubs) => console.log("Teams:", clubs)),
      mergeMap((teams) => {
        if (teams.length === 0) return of([]);
        return combineLatest(
          teams.map((team) =>
            this.eventService.getClubEventsPastRef(team.id).pipe(
              switchMap((teamGames) => {
                if (teamGames.length === 0) return of([]);
                return combineLatest(
                  teamGames.map((game) =>
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
              map((gamesWithAttendees) => gamesWithAttendees), // Flatten games array for each team
              catchError(() => of([])) // If error in fetching games, return empty array
            )
          )
        ).pipe(
          map((teamsGames) => teamsGames.flat()), // Flatten to get all games across all teams
          map(
            (allGames) =>
              allGames.sort(
                (a, b) =>
                  Timestamp.fromMillis(a.dateTime).seconds -
                  Timestamp.fromMillis(b.dateTime).seconds
              ) // Sort games by date
          )
        );
      }),
      tap((results) => console.log("Final results with all games:", results)),
      catchError((err) => {
        console.error("Error in getClubEventPast:", err);
        return of([]); // Return an empty array on error
      })
    );
  }
  async toggle(status: boolean, event: Veranstaltung) {
    console.log(
      `Set Status ${status} for user ${this.user.uid} and club ${event.clubId} and event ${event.id}`
    );

    await this.eventService.setClubEventAttendeeStatus(
      this.user.uid,
      status,
      event.clubId,
      event.id
    );
    this.presentToast();
  }

  async toggleItem(
    slidingItem: IonItemSliding,
    status: boolean,
    event: Veranstaltung
  ) {
    slidingItem.closeOpened();

    console.log(
      `Set Status ${status} for user ${this.user.uid} and club ${event.clubId} and event ${event.id}`
    );
    await this.eventService.setClubEventAttendeeStatus(
      this.user.uid,
      status,
      event.clubId,
      event.id
    );
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: await lastValueFrom(this.translate.get("changes__saved")),
      color: "primary",
      duration: 2000,
      position: "top",
    });
    toast.present();
  }

  async copyEvent(slidingItem: IonItemSliding, event) {
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

  async deleteEvent(slidingItem: IonItemSliding, event) {
    slidingItem.closeOpened();
    const toast = await this.toastController.create({
      message: await lastValueFrom(this.translate.get("delete")),
      color: "primary",
      duration: 2000,
      position: "top",
    });
    toast.present();
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
