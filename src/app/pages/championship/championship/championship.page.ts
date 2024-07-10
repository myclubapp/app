import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Preferences, GetResult } from "@capacitor/preferences";
import {
  AlertController,
  IonItemSliding,
  IonRouterOutlet,
  MenuController,
  ModalController,
  NavController,
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
import { Game } from "src/app/models/game";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import { Timestamp } from "firebase/firestore";
import { NavigationExtras, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { ChampionshipDetailPage } from "../championship-detail/championship-detail.page";
import { Team } from "src/app/models/team";

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
  teamRankings$: Observable<any[]>;

  /*gameListBackup$: Observable<Game[]>;
  gameListPastBackup$: Observable<Game[]>;
  teamRankingsBackup$: Observable<any[]>;


  gameListBackup: Subscription;
  gameListPastBackup: Subscription;
  */

  mode = "games";

  teamList$: Observable<Team[]>;

  /*filterList: any[] = [];
  filterValue: string = "";
  */

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
    private navCtrl: NavController,
    private translate: TranslateService
  ) {
    this.menuCtrl.enable(true, "menu");
  }

  ngOnInit() {
    this.teamRankings$ = this.getTeamsWithRankingsForYear("2024");
    this.gameList$ = this.getTeamGamesUpcoming();
    this.gameListPast$ = this.getTeamGamesPast();

    /*this.teamRankingsBackup$ = this.getTeamsWithRankingsForYear("2023");
    this.teamRankingsBackup$.subscribe({
      next: () => {
        console.log("RANKING Backup Data received");
        this.cdr.detectChanges();
      },
      error: (err) => console.error("RANKING Backup Error in subscription:", err),
      complete: () => console.log("RANKING Backup Observable completed"),
    });

   
    this.gameListBackup$ = this.getTeamGamesUpcoming();
    this.gameListBackup$.subscribe({
      next: (data) => {
        console.log("GAMES Data received");
        this.cdr.detectChanges();
      },
      error: (err) => console.error("GAMES Error in subscription:", err),
      complete: () => console.log("GAMES Observable completed"),
    });*/

    /*this.gameListPastBackup$ = this.getTeamGamesPast();
    this.gameListPastBackup$.subscribe({
      next: () => {
        console.log("GAMES PAST Data received");
        this.cdr.detectChanges();
      },
      error: (err) => console.error("GAMES PAST Error in subscription:", err),
      complete: () => console.log("GAMES PAST Observable completed"),
    });*/

    // Filter
    /* this.teamList$ = this.fbService.getTeamList();
    this.teamList$.subscribe({
      next: (data) => {
       // this.filterList = data;
        console.log("Team Data received");
        this.cdr.detectChanges();
      },
      error: (err) => console.error("Team Error in subscription:", err),
      complete: () => console.log("Team Observable completed"),
    });*/
  }

  ngOnDestroy(): void {
    /* if (this.subscription) {
        this.subscription.unsubscribe();
    }
    if (this.subscriptionPast) {
      this.subscriptionPast.unsubscribe();
    }*/
  }

  getTeamsWithRankingsForYear(year: string = "2024") {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => console.log("User:", user)),
      switchMap((user) => {
        if (!user) return of([]); // If no user, return an empty array
        return this.fbService.getUserTeamRefs(user);
      }),
      tap((teams) => console.log("Teams:", teams)),
      mergeMap((teams) => {
        if (teams.length === 0) return of([]);
        return combineLatest(
          teams.map((team) =>
            combineLatest({
              teamDetails: of(team),
              rankingsTable: this.championshipService.getTeamRankingTable(
                team.id,
                year
              ),
              rankingDetails: this.championshipService.getTeamRanking(
                team.id,
                year
              ),
            }).pipe(
              map(({ teamDetails, rankingsTable, rankingDetails }) => ({
                ...teamDetails,
                teamId: teamDetails.id,
                rankings: rankingsTable.sort((a, b) => {
                  return ((a.ranking as number) - b.ranking) as number;
                }),
                details: rankingDetails,
              })),
              tap((result) =>
                console.log("Team with rankings and details:", result)
              )
            )
          )
        );
      }),
      tap((results) => console.log("Final results:", results)),
      catchError((err) => {
        console.error("Error in getTeamsWithRankingsForYear:", err);
        return of([]); // Return an empty array on error
      })
    );
  }

  getTeamGamesUpcoming() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user) return of([]);
        return this.fbService.getUserTeamRefs(user);
      }),
      tap((teams) => console.log("Teams:", teams)),
      mergeMap((teams) => {
        if (teams.length === 0) return of([]);
        return combineLatest(
          teams.map((team) =>
            this.championshipService.getTeamGamesRefs(team.id).pipe(
              switchMap((teamGames) => {
                if (teamGames.length === 0) return of([]);
                return combineLatest(
                  teamGames.map((game) =>
                    this.championshipService
                      .getTeamGameAttendeesRef(team.id, game.id)
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
      // tap((results) => console.log("Final results with all games:", results)),
      catchError((err) => {
        console.error("Error in getTeamGamesUpcoming:", err);
        return of([]); // Return an empty array on error
      })
    );
  }

  getTeamGamesPast() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user) return of([]);
        return this.fbService.getUserTeamRefs(user);
      }),
      tap((teams) => console.log("Teams:", teams)),
      mergeMap((teams) => {
        if (teams.length === 0) return of([]);
        return combineLatest(
          teams.map((team) =>
            this.championshipService.getTeamGamesPastRefs(team.id).pipe(
              switchMap((teamGames) => {
                if (teamGames.length === 0) return of([]);
                return combineLatest(
                  teamGames.map((game) =>
                    this.championshipService
                      .getTeamGameAttendeesRef(team.id, game.id)
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
                (b, a) =>
                  Timestamp.fromMillis(a.dateTime).seconds -
                  Timestamp.fromMillis(b.dateTime).seconds
              ) // Sort games by date
          )
        );
      }),
      tap((results) => console.log("Final results with all games:", results)),
      catchError((err) => {
        console.error("Error in getTeamGamesUpcoming:", err);
        return of([]); // Return an empty array on error
      })
    );
  }

  async openChampionshipDetailModal(game: Game, isFuture: boolean) {
    /*let extras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(game),
        isFuture: isFuture,
      },
    };
    console.log(extras);
    this.navCtrl
      .navigateForward(["championship-details"], extras)
      .catch((e) => {
        console.log(e);
      });
    */

    const modal = await this.modalCtrl.create({
      component: ChampionshipDetailPage,
      presentingElement: this.routerOutlet.nativeEl,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: game,
        isFuture: isFuture,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  // List item
  async toggle(status: boolean, game: Game) {
    console.log(
      `Set Status ${status} for user ${this.user.uid} and team ${game.teamId} and game ${game.id}`
    );
    await this.championshipService.setTeamGameAttendeeStatus(
      status,
      game.teamId,
      game.id
    );
    this.presentToast();
  }

  //Sliding
  async toggleItem(slidingItem: IonItemSliding, status: boolean, game: Game) {
    slidingItem.closeOpened();

    /*console.log(
      `Set Status ${status} for user ${this.user.uid} and team ${game.teamId} and game ${game.id}`
    );*/
    await this.championshipService.setTeamGameAttendeeStatus(
      status,
      game.teamId,
      game.id
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

  /*  async openFilter(ev: Event) {

    const alertInputs = [];
    for (const item of this.filterList) {
      alertInputs.push({
        label: item.name,
        type: 'radio',
        checked: item.id == this.filterValue,
        value: item.id,
      });
    }

    let alert = await this.alertCtrl.create({
      header: 'News filtern',
      message: 'Nach Verein oder Teams filtern.',
      // subHeader: 'Nach Verein oder Teams filtern.',
      inputs: alertInputs,
      buttons: [
        {
          text: "OK",
          role: "confirm",
          handler: (value) => {
            console.log(value)
            this.filterValue = value;
            
            this.gameList$ = this.gameListBackup$.pipe(
              map(items => {
               return items.filter(element => element.teamId == value)
              })
            )  
            this.gameListPast$ = this.gameListPastBackup$.pipe(
              map(items => {
               return items.filter(element => element.teamId == value)
              })
            )          
            this.teamRankings$ = this.teamRankingsBackup$.pipe(
              map(items => {
               return items.filter(element => element.teamId == value)
              })
            )   
          }
        },
        {
          text: "abbrechen",
          role: "cancel",
          handler:async  (value) => {
            console.log(value);
            this.filterValue = "";
            await Preferences.set({
              key: 'teamFilter',
              value: this.filterValue,
            });
            this.gameList$ = this.gameListBackup$;
            this.gameListPast$ = this.gameListPastBackup$;
            this.teamRankings$ = this.teamRankingsBackup$;
          }
        }
      ],
      htmlAttributes: { 'aria-label': 'alert dialog' },
    });
    alert.present();
  }*/
}
