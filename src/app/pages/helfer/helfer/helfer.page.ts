import { Component, OnInit } from '@angular/core';
import {
  IonItemSliding,
  IonRouterOutlet,
  ModalController,
  MenuController,
  ToastController,
  AlertController,
} from "@ionic/angular";
import { User } from "@angular/fire/auth";
import { Observable, Subscription, catchError, combineLatest, concatMap, defaultIfEmpty, finalize, forkJoin, from,  map,  of, switchMap, take, tap, timeout} from "rxjs";
import { HelferEvent, Veranstaltung } from "src/app/models/event";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { EventService } from "src/app/services/firebase/event.service";
import { Club } from "src/app/models/club";
import { Team } from "src/app/models/team";

@Component({
  selector: 'app-helfer',
  templateUrl: './helfer.page.html',
  styleUrls: ['./helfer.page.scss'],
})
export class HelferPage implements OnInit {
  skeleton = new Array(12);

  user$: Observable<User>;
  user: User;

  eventsList$: Observable<Veranstaltung[]>;
  eventsListPast$: Observable<Veranstaltung[]>;

  eventsList: Veranstaltung[];
  eventsListPast: Veranstaltung[];

  private subscription: Subscription;
  private subscriptionPast: Subscription;

  filterList: any[] = [];
  filterValue: string = "";
  constructor(
    public toastController: ToastController,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalController: ModalController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly eventService: EventService,
    private readonly alertCtrl: AlertController,
    private readonly menuCtrl: MenuController
  ) { 
    this.menuCtrl.enable(true, "menu");
  }

  ngOnInit() {
    const TIMEOUT_DURATION = 1000; // 5 seconds, adjust as needed

    const helferEventList: HelferEvent[] = [];
    const helferEventPastList: HelferEvent[] = [];

    // CURRENT EventS
    const helferEvent$ = this.authService.getUser$().pipe(
      take(1),
      tap(() => console.log("Fetching user...")),
      switchMap(user => {
        console.log("Got user:", user);
        this.user = user;
        return this.fbService.getUserClubRefs(user);
      }),
      tap(clubs => console.log("Fetched clubs:", clubs)),
      concatMap(clubArray => from(clubArray)),
      tap(club => console.log("Processing club:", club.id)),
      concatMap(club => this.eventService.getClubHelferEventRefs(club.id).pipe(
        timeout(TIMEOUT_DURATION), // Adding timeout here 
        take(1),
        tap(events => console.log(`Fetched Events for Club ${club.id}:`, events)),
        switchMap(events => {
          // Fetch attendees for each Event and combine the results
          const eventWithAttendees$ = events.map(event => 
            this.eventService.getClubHelferEventAttendeesRef(club.id, event.id).pipe(
              take(1),
              map(attendees => {
                const userAttendee = attendees.find(att => att.id == this.user.uid);
                const status = userAttendee ? userAttendee.status : null; // default to false if user is not found in attendees list
                return {
                  ...event,
                  status: status,
                  countAttendees: attendees.filter(att => att.status == true).length,
                  attendees: attendees
                };
              })
            )
          );
          return forkJoin(eventWithAttendees$);
        }),
        catchError(error => {
          if (error.name === 'TimeoutError') {
            console.error(`Error fetching Events for Club ${club.id}:`);
            return of([]);
          } else {
          // Handle other errors, maybe rethrow or return a default object
            throw error;
          }
        })
      )),
      tap(events => events.forEach(event => helferEventList.push(event))),
      finalize(() => console.log("Team Event fetching completed"))
    );


    // Use combineLatest to get results when both observables have emitted
   this.subscription = combineLatest([helferEvent$]).subscribe({
      next: () => {
        this.eventsList = [...helferEventList].sort((a, b):any => {
          // return a.date.getTime() > b.date.getTime();
          return a.date.toMillis() < b.date.seconds ;
        });
        this.eventsList = this.eventsList.filter((event, index, self) => 
          index === self.findIndex((t) => (t.id === event.id))
        );
        this.eventsList$ = of(this.eventsList);
        console.log("Combined Event list created");
      },
      error: err => console.error('Error in the observable chain:', err)
    });

  }

  async toggle(status: boolean, event: Veranstaltung) {
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

  async toggleItem(slidingItem: IonItemSliding, status: boolean, event: Veranstaltung) {
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

  async openFilter(ev: Event){
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
        filterList.push({id: club.type, name: club.type}); // Verband Infos
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
        header: 'News filtern',
        message: 'Nach Verein oder Teams filtern.',
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
  
  }
}
