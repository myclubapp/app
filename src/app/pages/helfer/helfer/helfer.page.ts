import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  IonItemSliding,
  IonRouterOutlet,
  ModalController,
  MenuController,
  ToastController,
  AlertController,
} from "@ionic/angular";
import { User } from "@angular/fire/auth";
import { Observable, Subscription, catchError, combineLatest, concatMap, defaultIfEmpty, finalize, forkJoin, from,  map,  mergeMap,  of, switchMap, take, tap, timeout} from "rxjs";
import { HelferEvent, Veranstaltung } from "src/app/models/event";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { EventService } from "src/app/services/firebase/event.service";
import { Club } from "src/app/models/club";
import { Team } from "src/app/models/team";
import { HelferAddPage } from '../helfer-add/helfer-add.page';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-helfer',
  templateUrl: './helfer.page.html',
  styleUrls: ['./helfer.page.scss'],
})
export class HelferPage implements OnInit {
  skeleton = new Array(12);

  user$: Observable<User>;
  user: User;

  helferList$: Observable<Veranstaltung[]>;
  helferListPast$: Observable<Veranstaltung[]>;


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
    private readonly menuCtrl: MenuController,
    private cdr: ChangeDetectorRef,
  ) { 
    this.menuCtrl.enable(true, "menu");
  }

  ngOnInit() {



    this.helferList$ = this.getHelferEvent();
    this.helferList$.subscribe({
      next: (data) => {
        console.log("HELFER Data received");
        this.cdr.detectChanges();
      },
      error: (err) => console.error("HELFER Error in subscription:", err),
      complete: () => console.log("HELFER Observable completed")
    });


    this.helferListPast$ = this.getHelferEventPast();
    this.helferListPast$.subscribe({
      next: () => {
        console.log("HELFER PAST Data received");
        this.cdr.detectChanges();
      },
      error: (err) => console.error("HELFER PAST Error in subscription:", err),
      complete: () => console.log("HELFER PAST Observable completed")
    });








/*
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
*/
  }

  getHelferEvent() {
    return this.authService.getUser$().pipe(
      take(1),
      tap(user=>{
        this.user = user;
      }),
      switchMap(user => {
        if (!user) return of([]);
        return this.fbService.getUserClubRefs(user);
      }),
      tap(clubs => console.log("Teams:", clubs)),
      mergeMap(teams => {
        if (teams.length === 0) return of([]);
        return combineLatest(
          teams.map(team => 
            this.eventService.getClubHelferEventRefs(team.id).pipe(
              switchMap(teamGames => {
                if (teamGames.length === 0) return of([]);
                return combineLatest(
                  teamGames.map(game => 
                    this.eventService.getClubHelferEventAttendeesRef(team.id, game.id).pipe(
                      map(attendees => {
                        const userAttendee = attendees.find(att => att.id == this.user.uid);
                        const status = userAttendee ? userAttendee.status : null; // default to false if user is not found in attendees list
                        return ({...game, attendees, status: status, countAttendees: attendees.filter(att => att.status == true).length, teamId: team.id,})
                      }),
                      catchError(() => of({ ...game, attendees: [], status: null, countAttendees: 0, teamId: team.id,})) // If error, return game with empty attendees
                    )
                  )
                );
              }),
              map(gamesWithAttendees => gamesWithAttendees), // Flatten games array for each team
              catchError(() => of([])) // If error in fetching games, return empty array
            )
          )
        ).pipe(
          map(teamsGames => teamsGames.flat()), // Flatten to get all games across all teams
          map(allGames => 
            allGames.sort((a, b) => Timestamp.fromMillis(a.dateTime).seconds - Timestamp.fromMillis(b.dateTime).seconds) // Sort games by date
          )
        );
      }),
      tap(results => console.log("Final results with all games:", results)),
      catchError(err => {
        console.error("Error in getTeamGamesUpcoming:", err);
        return of([]); // Return an empty array on error
      })
    );
  }
  
  getHelferEventPast() {
    return this.authService.getUser$().pipe(
      take(1),
      tap(user=>{
        this.user = user;
      }),
      switchMap(user => {
        if (!user) return of([]);
        return this.fbService.getUserClubRefs(user);
      }),
      tap(clubs => console.log("Teams:", clubs)),
      mergeMap(teams => {
        if (teams.length === 0) return of([]);
        return combineLatest(
          teams.map(team => 
            this.eventService.getClubHelferEventPastRefs(team.id).pipe(
              switchMap(teamGames => {
                if (teamGames.length === 0) return of([]);
                return combineLatest(
                  teamGames.map(game => 
                    this.eventService.getClubHelferEventAttendeesRef(team.id, game.id).pipe(
                      map(attendees => {
                        const userAttendee = attendees.find(att => att.id == this.user.uid);
                        const status = userAttendee ? userAttendee.status : null; // default to false if user is not found in attendees list
                        return ({...game, attendees, status: status, countAttendees: attendees.filter(att => att.status == true).length, teamId: team.id,})
                      }),
                      catchError(() => of({ ...game, attendees: [], status: null, countAttendees: 0, teamId: team.id,})) // If error, return game with empty attendees
                    )
                  )
                );
              }),
              map(gamesWithAttendees => gamesWithAttendees), // Flatten games array for each team
              catchError(() => of([])) // If error in fetching games, return empty array
            )
          )
        ).pipe(
          map(teamsGames => teamsGames.flat()), // Flatten to get all games across all teams
          map(allGames => 
            allGames.sort((a, b) => Timestamp.fromMillis(a.dateTime).seconds - Timestamp.fromMillis(b.dateTime).seconds) // Sort games by date
          )
        );
      }),
      tap(results => console.log("Final results with all games:", results)),
      catchError(err => {
        console.error("Error in getTeamGamesUpcoming:", err);
        return of([]); // Return an empty array on error
      })
    );
  }
  async toggle(status: boolean, event: Veranstaltung) {
    console.log(
      `Set Status ${status} for user ${this.user.uid} and club ${event.clubId} and event ${event.id}`
    );
/*
    await this.eventService.setTeamEventAttendeeStatus(
      this.user.uid,
      status,
      event.teamId,
      event.id
    );*/
    this.presentToast();
  }

  async toggleItem(slidingItem: IonItemSliding, status: boolean, event: Veranstaltung) {
    slidingItem.closeOpened();

    console.log(
      `Set Status ${status} for user ${this.user.uid} and club ${event.clubId} and event ${event.id}`
    );
    /*await this.eventService.setTeamEventAttendeeStatus(
      this.user.uid,
      status,
      event.teamId,
      event.id
    );*/
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
        //filterList.push({id: club.type, name: club.type}); // Verband Infos
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
        header: 'Helferevents filtern',
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
    const modal = await this.modalController.create({
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
 
}
