import { ChangeDetectorRef, Component, OnInit } from "@angular/core";

import {
  AlertController,
  IonItemSliding,
  IonRouterOutlet,
  MenuController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { User } from "@angular/fire/auth";
import { Observable, Subscription, catchError, combineLatest, concatMap, defaultIfEmpty, finalize, forkJoin, from,  map,  mergeMap,  of, switchMap, take, tap, timeout} from "rxjs";
import { Game } from "src/app/models/game";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import { ChampionshipDetailPage } from "../championship-detail/championship-detail.page";
import { Team } from "src/app/models/team";
import { Timestamp } from "firebase/firestore";

@Component({
  selector: "app-championship",
  templateUrl: "./championship.page.html",
  styleUrls: ["./championship.page.scss"],
})
export class ChampionshipPage implements OnInit {
  skeleton = new Array(12);
  user$: Observable<User>;
  user: User;

  gameList$: Observable<Game[]>;
  gameListPast$: Observable<Game[]>;

  mode = "games" ;

  /*
  private subscription: Subscription;
  private subscriptionPast: Subscription;
*/
  filterList: any[] = [];
  filterValue: string = "";

  teamRankings$: Observable<any[]>;;

  constructor(
    public toastController: ToastController,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalCtrl: ModalController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly championshipService: ChampionshipService,
    private readonly alertCtrl: AlertController,
    private readonly menuCtrl: MenuController,
    private cdr: ChangeDetectorRef,
  ) {
    this.menuCtrl.enable(true, "menu");
  }

  ngOnInit() {

    this.teamRankings$ = this.getTeamsWithRankingsForYear("2023");
    this.teamRankings$.subscribe({
      next: () => {
        console.log("RANKING Data received");
        this.cdr.detectChanges();
      },
      error: (err) => console.error("RANKING Error in subscription:", err),
      complete: () => console.log("RANKING Observable completed")
    });

    this.gameList$ = this.getTeamGamesUpcoming();
    this.gameList$.subscribe({
      next: (data) => {
        console.log("GAMES Data received");
        this.cdr.detectChanges();
      },
      error: (err) => console.error("GAMES Error in subscription:", err),
      complete: () => console.log("GAMES Observable completed")
    });


    this.gameListPast$ = this.getTeamGamesPast();
    this.gameListPast$.subscribe({
      next: () => {
        console.log("GAMES PAST Data received");
        this.cdr.detectChanges();
      },
      error: (err) => console.error("GAMES PAST Error in subscription:", err),
      complete: () => console.log("GAMES PAST Observable completed")
    });


/*
    const TIMEOUT_DURATION = 1000; // 5 seconds, adjust as needed

    const teamGameList: Game[] = [];
    const teamGamePastList: Game[] = [];

    // CURRENT GAMES
    const teamGame$ = this.authService.getUser$().pipe(
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
      concatMap(team => this.championshipService.getTeamGamesRefs(team.id).pipe(
        timeout(TIMEOUT_DURATION), // Adding timeout here 
        take(1),
        tap(games => console.log(`Fetched games for team ${team.id}:`, games)),
        switchMap(games => {
          // Fetch attendees for each game and combine the results
          const gameWithAttendees$ = games.map(game => 
            this.championshipService.getTeamGameAttendeesRef(team.id, game.id).pipe(
              take(1),
              map(attendees => {
                const userAttendee = attendees.find(att => att.id == this.user.uid);
                const status = userAttendee ? userAttendee.status : null; // default to false if user is not found in attendees list
                return {
                  ...game,
                  teamId: team.id,
                  status: status,
                  countAttendees: attendees.filter(att => att.status == true).length,
                  attendees: attendees
                };
              })
            )
          );
          return forkJoin(gameWithAttendees$);
        }),
        catchError(error => {
          if (error.name === 'TimeoutError') {
            console.error(`Error fetching games for team ${team.id}:`);
            return of([]);
          } else {
          // Handle other errors, maybe rethrow or return a default object
            throw error;
          }
        })
      )),
      tap(games => games.forEach(game => teamGameList.push(game))),
      finalize(() => console.log("Team Game fetching completed"))
    );

    // PAST GAMES
    const teamGamePast$ = this.authService.getUser$().pipe(
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
      concatMap(team => this.championshipService.getTeamGamesPastRefs(team.id).pipe(
        timeout(TIMEOUT_DURATION), // Adding timeout here 
        take(1),
        tap(games => console.log(`Fetched games for team ${team.id}:`, games)),
        switchMap(games => {
          // Fetch attendees for each game and combine the results
          const gameWithAttendees$ = games.map(game => 
            this.championshipService.getTeamGameAttendeesRef(team.id, game.id).pipe(
              take(1),
              map(attendees => {
                const userAttendee = attendees.find(att => att.id == this.user.uid);
                console.log(">>>>" + JSON.stringify(userAttendee))
                const status = userAttendee ? userAttendee.status : null; // default to false if user is not found in attendees list
                return {
                  ...game,
                  teamId: team.id,
                  status: status,
                  countAttendees: attendees.filter(att => att.status == true).length,
                  attendees: attendees
                };
              })
            )
          );
          return forkJoin(gameWithAttendees$);
        }),
        catchError(error => {
          if (error.name === 'TimeoutError') {
            console.error(`Error fetching games for team ${team.id}:`);
            return of([]);
          } else {
          // Handle other errors, maybe rethrow or return a default object
            throw error;
          }
        })
      )),
      tap(games => games.forEach(game => teamGamePastList.push(game))),
      finalize(() => console.log("Team Game fetching completed"))
    );

    // Use combineLatest to get results when both observables have emitted
   this.subscription = combineLatest([teamGame$]).subscribe({
      next: () => {
        this.gameList = [...teamGameList].sort((a, b):any => {
          return a.dateTime.seconds > b.dateTime.seconds;
        });
        this.gameList = this.gameList.filter((game, index, self) => 
          index === self.findIndex((t) => (t.id === game.id))
        );
        this.gameList$ = of(this.gameList);
        console.log("Combined Game list created");
      },
      error: err => console.error('Error in the observable chain:', err)
    });

    this.subscriptionPast = combineLatest([teamGamePast$]).subscribe({
      next: () => {
        this.gameListPast = [...teamGamePastList].sort((a, b):any => {
          return a.dateTime.seconds < b.dateTime.seconds;
        });
        this.gameListPast = this.gameListPast.filter((game, index, self) => 
          index === self.findIndex((t) => (t.id === game.id))
        );
        this.gameListPast$ = of(this.gameListPast);
        console.log("Combined Game list PAST created");
      },
      error: err => console.error('Error in the observable chain:', err)
    });

*/

  }

  ngOnDestroy(): void {
   /* if (this.subscription) {
        this.subscription.unsubscribe();
    }
    if (this.subscriptionPast) {
      this.subscriptionPast.unsubscribe();
    }*/
  }

  getTeamsWithRankingsForYear(year: string = '2023') {
      return this.authService.getUser$().pipe(
        take(1),
        tap(user => console.log("User:", user)),
        switchMap(user => {
          if (!user) return of([]); // If no user, return an empty array
          return this.fbService.getUserTeamRefs(user);
        }),
        tap(teams => console.log("Teams:", teams)),
        mergeMap(teams => {
          if (teams.length === 0) return of([]);
          return combineLatest(
            teams.map(team => 
              combineLatest({
                teamDetails: of(team),
                rankingsTable: this.championshipService.getTeamRankingTable(team.id, year),
                rankingDetails: this.championshipService.getTeamRanking(team.id, year)
              }).pipe(
                map(({ teamDetails, rankingsTable, rankingDetails }) => ({
                  ...teamDetails,
                  rankings: rankingsTable,
                  details: rankingDetails
                })),
                tap(result => console.log("Team with rankings and details:", result))
              )
            )
          );
        }),
        tap(results => console.log("Final results:", results)),
        catchError(err => {
          console.error("Error in getTeamsWithRankingsForYear:", err);
          return of([]); // Return an empty array on error
        })
      );
    }


    getTeamGamesUpcoming() {
      return this.authService.getUser$().pipe(
        take(1),
        tap(user=>{
          this.user = user;
        }),
        switchMap(user => {
          if (!user) return of([]);
          return this.fbService.getUserTeamRefs(user);
        }),
        tap(teams => console.log("Teams:", teams)),
        mergeMap(teams => {
          if (teams.length === 0) return of([]);
          return combineLatest(
            teams.map(team => 
              this.championshipService.getTeamGamesRefs(team.id).pipe(
                switchMap(teamGames => {
                  if (teamGames.length === 0) return of([]);
                  return combineLatest(
                    teamGames.map(game => 
                      this.championshipService.getTeamGameAttendeesRef(team.id, game.id).pipe(
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
    

    getTeamGamesPast() {
      return this.authService.getUser$().pipe(
        take(1),
        tap(user=>{
          this.user = user;
        }),
        switchMap(user => {
          if (!user) return of([]);
          return this.fbService.getUserTeamRefs(user);
        }),
        tap(teams => console.log("Teams:", teams)),
        mergeMap(teams => {
          if (teams.length === 0) return of([]);
          return combineLatest(
            teams.map(team => 
              this.championshipService.getTeamGamesPastRefs(team.id).pipe(
                switchMap(teamGames => {
                  if (teamGames.length === 0) return of([]);
                  return combineLatest(
                    teamGames.map(game => 
                      this.championshipService.getTeamGameAttendeesRef(team.id, game.id).pipe(
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
              allGames.sort((b, a) => Timestamp.fromMillis(a.dateTime).seconds - Timestamp.fromMillis(b.dateTime).seconds) // Sort games by date
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
    
    
  async openModal(game: Game) {
    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalCtrl.create({
      component: ChampionshipDetailPage,
      presentingElement: this.routerOutlet.nativeEl,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: game,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async toggle(status: boolean, game: Game) {
    console.log(`Set Status ${status} for user ${this.user.uid} and team ${game.teamId} and game ${game.id}` );
    await this.championshipService.setTeamGameAttendeeStatus(
      this.user.uid,
      status,
      game.teamId,
      game.id
    );
    this.presentToast();
  }

  async toggleItem(slidingItem: IonItemSliding, status: boolean, game: Game) {
    slidingItem.closeOpened();

    /*console.log(
      `Set Status ${status} for user ${this.user.uid} and team ${game.teamId} and game ${game.id}`
    );*/
    await this.championshipService.setTeamGameAttendeeStatus(
      this.user.uid,
      status,
      game.teamId,
      game.id
    );
    this.presentToast();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: "Änderungen gespeichert",
      color: "primary",
      duration: 2000,
      position: "top",
    });
    toast.present();
  }



  async openFilter(ev: Event){
      /*
    let filterList = [];

   
  const teams$ = this.authService.getUser$().pipe(
    take(1),
    switchMap(user => this.fbService.getUserTeamRefs(user).pipe(take(1))),
    concatMap(teamsArray =>  from(teamsArray)),
    tap((team:Team)=>console.log(team.id)),
    concatMap(team => 
      this.fbService.getTeamRef(team.id).pipe(
        take(1),
        defaultIfEmpty(null),  // gibt null zurück, wenn kein Wert von getClubRef gesendet wird
        map(result => [result]),
        catchError(error => {
          console.error('Error fetching TeamDetail:', error);
          return of([]);
      })
    )
    ),
    tap(teamList => teamList.forEach(team => filterList.push(team))),
    finalize(() => console.log("Get Teams completed"))
  );

  this.subscription = forkJoin([teams$]).subscribe({
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
              this.gameList$ = of(this.gameList.filter((game: any) => game.teamId == value));
            } 
          },
          { text: "abbrechen",
            role: "cancel",
            handler: (value)=>{
              console.log(value);
              this.filterValue = "";
              this.gameList$ = of(this.gameList);
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

  }

