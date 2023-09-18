import { Component, OnInit } from "@angular/core";
import {
  IonItemSliding,
  IonRouterOutlet,
  ModalController,
  MenuController,
  ToastController,
} from "@ionic/angular";
import { User } from "@angular/fire/auth";
import { Observable, Subscription, catchError, combineLatest, concatMap, finalize, forkJoin, from,  map,  of, switchMap, take, tap, timeout} from "rxjs";
import { Event } from "src/app/models/event";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { EventService } from "src/app/services/firebase/event.service";

@Component({
  selector: "app-events",
  templateUrl: "./events.page.html",
  styleUrls: ["./events.page.scss"],
})
export class EventsPage implements OnInit {
  skeleton = new Array(12);

  user$: Observable<User>;
  user: User;

  eventsList$: Observable<Event[]>;
  eventsListPast$: Observable<Event[]>;

  eventsList: Event[];
  eventsListPast: Event[];

  private subscription: Subscription;
  private subscriptionPast: Subscription;


  constructor(
    public toastController: ToastController,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalController: ModalController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly eventService: EventService,
    private readonly menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(true, "menu");
  }

  ngOnInit() {
  
    const TIMEOUT_DURATION = 1000; // 5 seconds, adjust as needed

    const teamEventList: Event[] = [];
    const teamEventPastList: Event[] = [];

    // CURRENT EventS
    const teamEvent$ = this.authService.getUser$().pipe(
      take(1),
      tap(() => console.log("Fetching user...")),
      switchMap(user => {
        console.log("Got user:", user);
        this.user = user;
        return this.fbService.getUserTeamRefs(user);
      }),
      tap(teams => console.log("Fetched teams:", teams)),
      concatMap(teamsArray => from(teamsArray)),
      tap(team => console.log("Processing team:", team.id)),
      concatMap(team => this.eventService.getTeamEventsRef(team.id).pipe(
        timeout(TIMEOUT_DURATION), // Adding timeout here 
        take(1),
        tap(Events => console.log(`Fetched Events for team ${team.id}:`, Events)),
        switchMap(Events => {
          // Fetch attendees for each Event and combine the results
          const EventWithAttendees$ = Events.map(Event => 
            this.eventService.getTeamEventsAttendeesRef(team.id, Event.id).pipe(
              take(1),
              map(attendees => {
                const userAttendee = attendees.find(att => att.id == this.user.uid);
                const status = userAttendee ? userAttendee.status : null; // default to false if user is not found in attendees list
                return {
                  ...Event,
                  teamId: team.id,
                  status: status,
                  countAttendees: attendees.filter(att => att.status == true).length,
                  attendees: attendees
                };
              })
            )
          );
          return forkJoin(EventWithAttendees$);
        }),
        catchError(error => {
          if (error.name === 'TimeoutError') {
            console.error(`Error fetching Events for team ${team.id}:`);
            return of([]);
          } else {
          // Handle other errors, maybe rethrow or return a default object
            throw error;
          }
        })
      )),
      tap(Events => Events.forEach(Event => teamEventList.push(Event))),
      finalize(() => console.log("Team Event fetching completed"))
    );

    // CURRENT EventS
    const teamEventPast$ = this.authService.getUser$().pipe(
      take(1),
      tap(() => console.log("Fetching user...")),
      switchMap(user => {
        console.log("Got user:", user);
        this.user = user;
        return this.fbService.getUserTeamRefs(user);
      }),
      tap(teams => console.log("Fetched teams:", teams)),
      concatMap(teamsArray => from(teamsArray)),
      tap(team => console.log("Processing team:", team.id)),
      concatMap(team => this.eventService.getTeamEventsRefPast(team.id).pipe(
        timeout(TIMEOUT_DURATION), // Adding timeout here 
        take(1),
        tap(events => console.log(`Fetched Events for team ${team.id}:`, events)),
        switchMap(events => {
          // Fetch attendees for each Event and combine the results
          const EventWithAttendees$ = events.map(Event => 
            this.eventService.getTeamEventsAttendeesRef(team.id, Event.id).pipe(
              take(1),
              map(attendees => {
                const userAttendee = attendees.find(att => att.id == this.user.uid);
                const status = userAttendee ? userAttendee.status : null; // default to false if user is not found in attendees list
                return {
                  ...Event,
                  teamId: team.id,
                  status: status,
                  countAttendees: attendees.filter(att => att.status == true).length,
                  attendees: attendees
                };
              })
            )
          );
          return forkJoin(EventWithAttendees$);
        }),
        catchError(error => {
          if (error.name === 'TimeoutError') {
            console.error(`Error fetching Events for team ${team.id}:`);
            return of([]);
          } else {
          // Handle other errors, maybe rethrow or return a default object
            throw error;
          }
        })
      )),
      tap(Events => Events.forEach(Event => teamEventPastList.push(Event))),
      finalize(() => console.log("Team Event fetching completed"))
    );

    // Use combineLatest to get results when both observables have emitted
   this.subscription = combineLatest([teamEvent$]).subscribe({
      next: () => {
        this.eventsList = [...teamEventList].sort((a, b):any => {
          // return a.date.getTime() > b.date.getTime();
          return a.date.seconds < b.date.seconds ;
        });
        this.eventsList = this.eventsList.filter((Event, index, self) => 
          index === self.findIndex((t) => (t.id === Event.id))
        );
        this.eventsList$ = of(this.eventsList);
        console.log("Combined Event list created");
      },
      error: err => console.error('Error in the observable chain:', err)
    });

    this.subscriptionPast = combineLatest([teamEventPast$]).subscribe({
      next: () => {
        this.eventsListPast = [...teamEventPastList].sort((a, b):any => {
          // return a.date.getTime() > b.date.getTime();
          return a.date.seconds > b.date.seconds ;
        });
        this.eventsListPast = this.eventsListPast.filter((Event, index, self) => 
          index === self.findIndex((t) => (t.id === Event.id))
        );
        this.eventsListPast$ = of(this.eventsListPast);
        console.log("Combined Event list PAST created");
      },
      error: err => console.error('Error in the observable chain:', err)
    });

  }

  async toggle(status: boolean, event: Event) {
    console.log(
      `Set Status ${status} for user ${this.user.uid} and team ${event.teamId} and event ${event.id}`
    );

    await this.eventService.setTeamEventAttendeeStatus(
      this.user.uid,
      status,
      event.teamId,
      event.id
    );
    this.presentToast();
  }

  async toggleItem(slidingItem: IonItemSliding, status: boolean, event: Event) {
    slidingItem.closeOpened();

    console.log(
      `Set Status ${status} for user ${this.user.uid} and team ${event.teamId} and event ${event.id}`
    );
    await this.eventService.setTeamEventAttendeeStatus(
      this.user.uid,
      status,
      event.teamId,
      event.id
    );
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "changes has been saved",
      color: "primary",
      duration: 2000,
      position: "top",
    });
    toast.present();
  }
}
