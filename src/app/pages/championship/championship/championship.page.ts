import { Component, OnInit } from "@angular/core";
import {
  IonItemSliding,
  IonRouterOutlet,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { User } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import { of, combineLatest, Subscription, from, Observable } from "rxjs";
import { switchMap, map, flatMap, tap, mapTo } from "rxjs/operators";
import { Game } from "src/app/models/game";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import { ChampionshipDetailPage } from "../championship-detail/championship-detail.page";

@Component({
  selector: "app-championship",
  templateUrl: "./championship.page.html",
  styleUrls: ["./championship.page.scss"],
})
export class ChampionshipPage implements OnInit {
  skeleton = new Array(12);
  user: User;

  gamesList: Game[] = [];
  gamesListPast: Game[] = [];

  teamSubscription: Subscription;

  constructor(
    public toastController: ToastController,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalCtrl: ModalController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly championshipService: ChampionshipService
  ) {}

  ngOnInit() {
    this.getUser();

    this.gameListTeam();

    // this.getGamesList();
    this.getGamesListPast();
  }

  ngOnDestroy(): void {
    this.teamSubscription.unsubscribe();
  }

  async getUser() {
    this.user = await this.authService.getUser();
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
    // console.log(`Set Status ${status} for user ${this.user.uid} and team ${game.teamId} and game ${game.id}` );
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

    console.log(
      `Set Status ${status} for user ${this.user.uid} and team ${game.teamId} and game ${game.id}`
    );
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

  gameListTeam() {
    let gamesListNew = [];
    this.teamSubscription = this.authService
      .getUser$()
      .pipe(
        switchMap((user) => {
          return this.fbService.getUserTeamRefs(user).pipe(
            map((result: any) => {
              return result.map((team) => {
                console.log(`Read Upcomming Games for Team > ${team.id}`);
                return team.id;
              });
            })
          );
        }),
        switchMap((allTeamIds) => {
          return combineLatest([
            allTeamIds.map((teamId) => {
              combineLatest([this.championshipService.getTeamGamesRef(teamId)]);
            }),
          ]);
        }),
        switchMap((allTeamGames: any) => {
          return combineLatest(
            allTeamGames.map((gameList: any) => {
              console.log(gameList);

              // this.championshipService.getTeamGameAttendeesRef(teamRef.id, game.id)
              // this.championshipService.getTeamGameRef(teamRef.id, game.id);
            })
          );
        })
      )
      .subscribe((games: any) => {
        // console.log(games);
        gamesListNew = [];
        for (const game of games) {
          let gameDetail = game[0];
          let attendeeList = game[1];
          let newGame = {
            ...gameDetail,
            attendees: attendeeList,
            teamName: gameDetail.name,
            teamId: gameDetail.id,
            countAttendees: attendeeList.filter((e) => e.status === true)
              .length,
            status:
              attendeeList &&
              attendeeList.filter((e) => e.id === this.user.uid).length === 1
                ? attendeeList.filter((e) => e.id === this.user.uid)[0].status
                : null,
          };
          gamesListNew.push(newGame);
        }
        gamesListNew = gamesListNew.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        this.gamesList = [...new Set([...gamesListNew, ...this.gamesList])];
      });
  }
  /*
  getGamesList() {
    let gamesListNew = [];
    this.authService.getUser$().subscribe((user: User) => {
      this.fbService.getUserTeamRefs(user).subscribe((teamList) => {
        for (const team of teamList) {
          this.championshipService
            .getTeamGamesRef(team.id)
            .subscribe((teamGamesList) => {
              for (const gameDetail of teamGamesList) {
                this.championshipService
                  .getTeamGameAttendeesRef(team.id, gameDetail.id)
                  .subscribe((attendeeList) => {
                    let newGame = {
                      ...gameDetail,
                      attendees: attendeeList,
                      teamName: gameDetail.name,
                      teamId: gameDetail.id,
                      countAttendees: attendeeList.filter(
                        (e) => e.status === true
                      ).length,
                      status:
                        attendeeList &&
                        attendeeList.filter((e) => e.id === this.user.uid)
                          .length === 1
                          ? attendeeList.filter(
                              (e) => e.id === this.user.uid
                            )[0].status
                          : null,
                    };
                    gamesListNew.push(newGame);
                    gamesListNew = gamesListNew.sort(
                      (a, b) => a.dateTime.toMillis() - b.dateTime.toMillis()
                    );
                    this.gamesList = [...new Set(gamesListNew)];
                  });
              }
            });
        }
      });
    });

    /*    const unsubscribe = this.authService
      .getUser$()
      .pipe(
        // GET TEAMS
        switchMap((user: User) => this.fbService.getUserTeamRefs(user)),
        // Loop Over Teams
        switchMap((allTeams: any) =>
          combineLatest([
            allTeams.map((team) => {
              combineLatest([
                of(team),
                this.championshipService
                  .getTeamGamesRef(team.id)
                  .pipe(
                    switchMap((allGames: any) =>
                      combineLatest([
                        allGames.map((game) => {
                          combineLatest([
                            of(game),
                            this.championshipService.getTeamGameAttendeesRef(
                              team.id,
                              game.id
                            )
                          ]) 
                        })
                      ]
                      )
                    )
                  ),
                this.fbService.getTeamRef(team.id)
              ])
          })
        ])
      )
      )
      .subscribe(async (data: any) => {
        const gamesListNew = [];
        for (const team of data) {
          // loop over teams

          const games = team[1];
          const teamDetails = team[2];
          for (const gameObject of games) {
            const game = gameObject[0];
            const attendees = gameObject[1];

            game.teamName = teamDetails.name;
            game.teamId = teamDetails.id;
            game.countAttendees = attendees.filter(
              (e) => e.status === true
            ).length;
            game.attendees = attendees;

            if (
              attendees &&
              attendees.filter((e) => e.id === this.user.uid).length === 1
            ) {
              game.status = attendees.filter(
                (e) => e.id === this.user.uid
              )[0].status;
            } else {
              game.status = null;
            }

            gamesListNew.push(game);
          }
        }
        this.gamesList = this.gamesList.sort(
          (a, b) => a.dateTime.toMillis() - b.dateTime.toMillis()
          );
        // this.gamesList = [...new Set(this.gamesList.concat(...gamesListNew))];
        this.gamesList = [...new Set(gamesListNew)];
      });
  }*/

  getGamesListPast() {
    let gamesListNew = [];
    this.authService.getUser$().subscribe((user: User) => {
      this.fbService.getUserTeamRefs(user).subscribe((teamList) => {
        for (const team of teamList) {
          this.championshipService
            .getTeamGamesRefPast(team.id)
            .subscribe((teamGamesList) => {
              for (const gameDetail of teamGamesList) {
                this.championshipService
                  .getTeamGameAttendeesRef(team.id, gameDetail.id)
                  .subscribe((attendeeList) => {
                    let newGame = {
                      ...gameDetail,
                      attendees: attendeeList,
                      teamName: gameDetail.name,
                      teamId: gameDetail.id,
                      countAttendees: attendeeList.filter(
                        (e) => e.status === true
                      ).length,
                      status:
                        attendeeList &&
                        attendeeList.filter((e) => e.id === this.user.uid)
                          .length === 1
                          ? attendeeList.filter(
                              (e) => e.id === this.user.uid
                            )[0].status
                          : null,
                    };
                    gamesListNew.push(newGame);
                    gamesListNew = gamesListNew.sort(
                      (a, b) => a.dateTime.toMillis() - b.dateTime.toMillis()
                    );
                    this.gamesListPast = [...new Set(gamesListNew)];
                  });
              }
            });
        }
      });
    });
    /*
    this.authService
      .getUser$()
      .pipe(
        // GET TEAMS
        switchMap((user: User) => this.fbService.getUserTeamRefs(user)),
        // Loop Over Teams
        switchMap((allTeams: any) =>
          combineLatest([
            allTeams.map((team) =>
              combineLatest([
                of(team),
                // Loop over Games
                // this.championshipService.getTeamGamesRef(team.id),
                this.championshipService
                  .getTeamGamesRefPast(team.id)
                  .pipe(
                    switchMap((allGames: any) =>
                      combineLatest([
                        allGames.map((game) =>
                          combineLatest([
                            of(game),
                            this.championshipService.getTeamGameAttendeesRef(
                              team.id,
                              game.id
                            )
                          ])
                        )
                      ]
                      )
                    )
                ),
                this.fbService.getTeamRef(team.id)
              ])
            )
          ])
        )
      )
      .subscribe(async (data: any) => {
        const gamesListNew = [];
        for (const team of data) {
          // loop over teams

          const games = team[1];
          const teamDetails = team[2];
          for (const gameObject of games) {
            const game = gameObject[0];
            const attendees = gameObject[1];

            game.teamName = teamDetails.name;
            game.teamId = teamDetails.id;
            game.attendees = attendees.filter((e) => e.status === true).length;

            if (
              attendees &&
              attendees.filter((e) => e.id === this.user.uid).length === 1
            ) {
              game.status = attendees.filter(
                (e) => e.id === this.user.uid
              )[0].status;
            } else {
              game.status = null;
            }

            gamesListNew.push(game);
          }
        }
        this.gamesListPast = this.gamesListPast.sort(
          (a, b) => b.dateTime.toMillis() - a.dateTime.toMillis()
          );
        this.gamesListPast = [...new Set(gamesListNew)];
      });*/
  }
}
