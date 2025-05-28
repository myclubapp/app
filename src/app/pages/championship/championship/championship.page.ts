import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  Optional,
} from "@angular/core";
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
import { GamePreviewPage } from "../game-preview/game-preview.page";
import { Club } from "src/app/models/club";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { Profile } from "src/app/models/user";
import { UiService } from "src/app/services/ui.service";

@Component({
  selector: "app-championship",
  templateUrl: "./championship.page.html",
  styleUrls: ["./championship.page.scss"],
  standalone: false,
})
export class ChampionshipPage implements OnInit {
  @Input("team")
  team!: Team;
  @Input("isModal")
  isModal!: boolean;
  skeleton = new Array(12);
  user$!: Observable<User>;
  user!: User;

  gameList$!: Observable<Game[]>;
  gameListPast$!: Observable<Game[]>;
  teamRankings$!: Observable<any[]>;

  /*gameListBackup$: Observable<Game[]>;
  gameListPastBackup$: Observable<Game[]>;
  teamRankingsBackup$: Observable<any[]>;


  gameListBackup: Subscription;
  gameListPastBackup: Subscription;
  */

  mode = "games";

  teamList$!: Observable<Team[]>;

  clubAdminList$!: Observable<Club[]>;
  teamAdminList$!: Observable<Team[]>;

  children: Profile[] = [];
  /*filterList: any[] = [];
  filterValue: string = "";
  */

  constructor(
    public toastController: ToastController,
    @Optional() private readonly routerOutlet: IonRouterOutlet,
    private readonly modalCtrl: ModalController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly championshipService: ChampionshipService,
    private readonly alertCtrl: AlertController,
    private readonly menuCtrl: MenuController,
    private cdr: ChangeDetectorRef,
    private navCtrl: NavController,
    private translate: TranslateService,
    private userProfileService: UserProfileService,
    private uiService: UiService,
  ) {
    this.menuCtrl.enable(true, "menu");
  }

  ngOnInit() {
    this.gameList$ = this.getTeamGamesUpcoming();
    this.gameListPast$ = this.getTeamGamesPast();
    this.teamRankings$ = this.getTeamsWithRankingsForYear("2024");

    this.teamAdminList$ = this.fbService.getTeamAdminList();
    this.clubAdminList$ = this.fbService.getClubAdminList();
  }

  ngOnDestroy(): void {}
  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return this.fbService.isClubAdmin(clubAdminList, clubId);
  }
  isTeamAdmin(teamAdminList: any[], teamId: string): boolean {
    return this.fbService.isTeamAdmin(teamAdminList, teamId);
  }

  getTeamsWithRankingsForYear(year: string) {
    return this.authService.getUser$().pipe(
      take(1),
      // tap((user) => console.log("User:", user)),
      switchMap((user) => {
        if (!user) return of([]);
        // Get user's teams and children's teams
        return combineLatest([
          this.fbService.getUserTeamRefs(user),
          this.userProfileService.getChildren(user.uid).pipe(
            switchMap((children: Profile[]) =>
              children.length > 0
                ? combineLatest(
                    children.map((child) => {
                      // Create a User-like object with uid from child.id
                      const childUser = { uid: child.id } as User;
                      console.log("Child User:", childUser);
                      return this.fbService.getUserTeamRefs(childUser);
                    }),
                  )
                : of([]),
            ),
            map((childrenTeams) => childrenTeams.flat()),
            tap((teams) => console.log("Children Teams:", teams)),
            catchError((error) => {
              console.error("Error fetching children teams:", error);
              return of([]);
            }),
          ),
        ]).pipe(
          map(([userTeams, childrenTeams]) => {
            const allTeams = [...userTeams, ...childrenTeams];
            return allTeams.filter(
              (team, index, self) =>
                index === self.findIndex((t) => t.id === team.id),
            );
          }),
        );
      }),
      // tap((teams) => console.log("Teams:", teams)),
      mergeMap((teams) => {
        if (this.team && this.team.id) {
          teams.push({
            id: this.team.id,
            clubId: "",
            name: "",
            logo: "",
            website: "",
            portrait: "",
            liga: "",
            type: "",
            updated: Timestamp.now(),
          });
        } else if (teams.length === 0) {
          return of([]);
        }
        let relevantTeams =
          this.team && this.team.id
            ? teams.filter((team) => team.id === this.team.id)
            : teams;
        relevantTeams = [...new Set(relevantTeams.map((team) => team.id))].map(
          (id) => relevantTeams.find((team) => team.id === id),
        );
        // console.log("relevant teams : ", relevantTeams);
        return combineLatest(
          relevantTeams.map((team) =>
            combineLatest({
              teamDetails: of(team),
              rankingsTable: this.championshipService.getTeamRankingTable(
                team.id,
                year,
              ),
              rankingDetails: this.championshipService.getTeamRanking(
                team.id,
                year,
              ),
            }).pipe(
              tap((data) => {
                console.log(data);
              }),
              map(({ teamDetails, rankingsTable, rankingDetails }) => ({
                ...teamDetails,
                teamId: teamDetails.id,
                rankings: rankingsTable.sort((a, b) => {
                  return ((a.ranking as number) - b.ranking) as number;
                }),
                details: rankingDetails,
              })),
              // tap((result) => console.log("Team with rankings and details:", result))
            ),
          ),
        );
      }),
      // tap((results) => console.log("Final results:", results)),
      catchError((err) => {
        console.error("Error in getTeamsWithRankingsForYear:", err);
        return of([]); // Return an empty array on error
      }),
    );
  }

  getTeamGamesUpcoming() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        if (user) {
          this.user = user;
        }
      }),
      switchMap((user) => {
        if (!user) return of([]);
        // Get user's teams and children's teams
        return combineLatest([
          this.fbService.getUserTeamRefs(user),
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
                      return this.fbService.getUserTeamRefs(childUser);
                    }),
                  )
                : of([]),
            ),
            map((childrenTeams) => childrenTeams.flat()),
            tap((teams) => console.log("Children Teams:", teams)),
            catchError((error) => {
              console.error("Error fetching children teams:", error);
              return of([]);
            }),
          ),
        ]).pipe(
          map(([userTeams, childrenTeams]) => {
            const allTeams = [...userTeams, ...childrenTeams];
            return allTeams.filter(
              (team, index, self) =>
                index === self.findIndex((t) => t.id === team.id),
            );
          }),
        );
      }),
      // tap((teams) => console.log("Teams:", teams)),
      mergeMap((teams) => {
        // Add the specific team if it exists
        if (this.team && this.team.id) {
          teams.push({
            id: this.team.id,
            clubId: "",
            name: "",
            logo: "",
            website: "",
            portrait: "",
            liga: "",
            type: "",
            updated: Timestamp.now(),
          });
        } else if (teams.length === 0) {
          return of([]); // Return empty if there are no teams
        }

        // Filter to get only the specific team if `this.team.id` is set
        let relevantTeams =
          this.team && this.team.id
            ? teams.filter((team) => team.id === this.team.id)
            : teams;
        relevantTeams = [...new Set(relevantTeams.map((team) => team.id))].map(
          (id) => relevantTeams.find((team) => team.id === id),
        );
        // Fetch games for all relevant teams
        return combineLatest(
          relevantTeams.map((team) =>
            this.championshipService.getTeamGamesRefs(team.id).pipe(
              catchError((err) => {
                console.error(
                  "Permission error in fetching getTeamGamesRefs:",
                  team.id,
                  err,
                );
                return of([]); // Return an empty array if permission error occurs
              }),
              switchMap((teamGames) => {
                if (teamGames.length === 0) return of([]);

                return combineLatest(
                  teamGames.map((game) =>
                    combineLatest([
                      this.championshipService
                        .getTeamGameAttendeesRef(team.id, game.id)
                        .pipe(
                          catchError((err) => {
                            console.error(
                              "Permission error in fetching attendees:",
                              err,
                            );
                            return of([]); // Return an empty array if permission error occurs
                          }),
                        ),
                      this.fbService.getTeamRef(team.id).pipe(
                        catchError((err) => {
                          console.error(
                            "Permission error in fetching getTeamRef:",
                            err,
                          );
                          return of({}); // Return an empty array if permission error occurs
                        }),
                      ), // Fetching team details
                    ]).pipe(
                      map(([attendees, teamDetails]) => {
                        const attendeeIds = [
                          this.user.uid,
                          ...this.children.map((child) => child.id),
                        ];
                        const userAttendee = attendees.find((att) =>
                          attendeeIds.includes(att.id),
                        );
                        // Füge die Kinderinformationen hinzu
                        const relevantChildren = attendeeIds
                          .filter((att) =>
                            this.children.some((child) => child.id == att),
                          )
                          .map((att) => {
                            const child = this.children.find(
                              (child) => child.id == att,
                            );
                            return child
                              ? {
                                  firstName: child.firstName,
                                  lastName: child.lastName,
                                }
                              : {};
                          });

                        return {
                          ...game,
                          team: teamDetails,
                          attendees,
                          children: relevantChildren,
                          status: userAttendee ? userAttendee.status : null,
                          countAttendees: attendees.filter(
                            (att) => att.status === true,
                          ).length,
                          teamId: team.id,
                        };
                      }),
                      catchError(() =>
                        of({
                          ...game,
                          team: null,
                          attendees: [],
                          children: [],
                          status: null,
                          countAttendees: 0,
                          teamId: team.id,
                        }),
                      ),
                    ),
                  ),
                );
              }),
              map((gamesWithAttendees) => gamesWithAttendees), // Combine games for each team
              catchError((err) => {
                console.error("Error fetching games for team:", err);
                return of([]); // Return an empty array on error
              }),
            ),
          ),
        ).pipe(
          // Flatten all games across all teams into a single array
          map((teamsGames) => teamsGames.flat()),
          // tap((allGames) => console.log("All games:", allGames)),

          // Sort games globally by their `dateTime` in ascending order (upcoming games)
          map((allGames) =>
            allGames.sort((a, b) => a.dateTime.seconds - b.dateTime.seconds),
          ),

          catchError((err) => {
            console.error("Error in getTeamGamesUpcoming:", err);
            return of([]); // Return an empty array on error
          }),
        );
      }),
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
        // Get user's teams and children's teams
        return combineLatest([
          this.fbService.getUserTeamRefs(user),
          this.userProfileService.getChildren(user.uid).pipe(
            switchMap((children: Profile[]) =>
              children.length > 0
                ? combineLatest(
                    children.map((child) => {
                      // Create a User-like object with uid from child.id
                      const childUser = { uid: child.id } as User;
                      console.log("Child User:", childUser);
                      return this.fbService.getUserTeamRefs(childUser);
                    }),
                  )
                : of([]),
            ),
            map((childrenTeams) => childrenTeams.flat()),
            tap((teams) => console.log("Children Teams:", teams)),
            catchError((error) => {
              console.error("Error fetching children teams:", error);
              return of([]);
            }),
          ),
        ]).pipe(
          map(([userTeams, childrenTeams]) => {
            const allTeams = [...userTeams, ...childrenTeams];
            return allTeams.filter(
              (team, index, self) =>
                index === self.findIndex((t) => t.id === team.id),
            );
          }),
        );
      }),
      mergeMap((teams) => {
        // Add the current team (if any) to the list
        if (this.team && this.team.id) {
          teams.push({
            id: this.team.id,
            clubId: "",
            name: "",
            logo: "",
            website: "",
            portrait: "",
            liga: "",
            type: "",
            updated: Timestamp.now(),
          });
        } else if (teams.length === 0) {
          return of([]); // If no teams found, return an empty array
        }

        // Filter to get only the specific team if `this.team.id` is set
        let relevantTeams =
          this.team && this.team.id
            ? teams.filter((team) => team.id === this.team.id)
            : teams;
        relevantTeams = [...new Set(relevantTeams.map((team) => team.id))].map(
          (id) => relevantTeams.find((team) => team.id === id),
        );
        // Fetch games for all relevant teams
        return combineLatest(
          relevantTeams.map((team) =>
            this.championshipService.getTeamGamesPastRefs(team.id).pipe(
              catchError((err) => {
                console.error(
                  "Permission error in fetching getTeamGamesRefs:",
                  team.id,
                  err,
                );
                return of([]); // Return an empty array if permission error occurs
              }),
              switchMap((teamGames) => {
                if (teamGames.length === 0) return of([]);
                return combineLatest(
                  teamGames.map((game) =>
                    combineLatest([
                      this.championshipService
                        .getTeamGameAttendeesRef(team.id, game.id)
                        .pipe(
                          catchError((err) => {
                            console.error(
                              "Permission error in fetching attendees:",
                              err,
                            );
                            return of([]); // Return an empty array if permission error occurs
                          }),
                        ),
                      this.fbService.getTeamRef(team.id).pipe(
                        catchError((err) => {
                          console.error(
                            "Permission error in fetching getTeamRef:",
                            err,
                          );
                          return of({}); // Return an empty object if permission error occurs
                        }),
                      ), // Fetching team details
                    ]).pipe(
                      map(([attendees, teamDetails]) => {
                        const attendeeIds = [
                          this.user.uid,
                          ...this.children.map((child) => child.id),
                        ];
                        const userAttendee = attendees.find((att) =>
                          attendeeIds.includes(att.id),
                        );
                        // Füge die Kinderinformationen hinzu
                        const relevantChildren = attendeeIds
                          .filter((att) =>
                            this.children.some((child) => child.id == att),
                          )
                          .map((att) => {
                            const child = this.children.find(
                              (child) => child.id == att,
                            );
                            return child
                              ? {
                                  firstName: child.firstName,
                                  lastName: child.lastName,
                                }
                              : {};
                          });
                        return {
                          ...game,
                          team: teamDetails,
                          attendees,
                          children: relevantChildren,
                          status: userAttendee ? userAttendee.status : null,
                          countAttendees: attendees.filter(
                            (att) => att.status === true,
                          ).length,
                          teamId: team.id,
                        };
                      }),
                      catchError(() =>
                        of({
                          ...game,
                          team: null,
                          attendees: [],
                          children: [],
                          status: null,
                          countAttendees: 0,
                          teamId: team.id,
                        }),
                      ),
                    ),
                  ),
                );
              }),
              map((gamesWithAttendees) => gamesWithAttendees), // Combine games for a team
              catchError((err) => {
                console.error("Error fetching games for team:", err);
                return of([]); // Return an empty array if error occurs
              }),
            ),
          ),
        ).pipe(
          // Flatten to get all games across all teams
          map((teamsGames) => teamsGames.flat()),
          // tap((allGames) => console.log("All games:", allGames)),
          // Sort games globally by date (newest first)
          map((allGames) =>
            allGames.sort((a, b) => b.dateTime.seconds - a.dateTime.seconds),
          ),

          catchError((err) => {
            console.error("Error in getTeamGamesPast:", err);
            return of([]); // Return an empty array on error
          }),
        );
      }),
    );
  }

  async openChampionshipDetailModal(game: Game, isFuture: boolean) {
    let extras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(game),
        isFuture: isFuture,
      },
    };
    console.log(extras);
    /*this.navCtrl
      .navigateForward(["championship-details"], extras)
      .catch((e) => {
        console.log(e);
      });*/

    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;

    const modal = await this.modalCtrl.create({
      component: ChampionshipDetailPage,
      presentingElement,
      canDismiss: true,
      cssClass: "transparent-modal",
      showBackdrop: true,
      componentProps: {
        data: game,
        isFuture: isFuture,
      },
    });
    /*
    let modal;
    if (topModal) {
     
    } else {
       modal = await this.modalCtrl.create({
        component: ChampionshipDetailPage,
        presentingElement: this.routerOutlet.nativeEl,
        canDismiss: true,
        cssClass: 'transparent-modal',
        showBackdrop: true,
        componentProps: {
          data: game,
          isFuture: isFuture,
        },
      });
    }*/
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  // List item
  async toggle(status: boolean, game: any) {
    console.log(
      `Set Status ${status} for user ${this.user.uid} and team ${game.teamId} and game ${game.id}`,
    );
    console.log(game);
    const newStartDate = game.dateTime.toDate();
    newStartDate.setHours(Number(game.time.substring(0, 2)));
    console.log(newStartDate);

    // Get team threshold via training.teamId
    console.log("Grenzwert ");
    const championshipTreshold = game.team.championshipThreshold || 0;
    console.log(championshipTreshold);
    // Verpätete Abmeldung?
    if (
      newStartDate.getTime() - new Date().getTime() <
        1000 * 60 * 60 * championshipTreshold &&
      status == false &&
      championshipTreshold
    ) {
      console.log("too late");
      await this.tooLateToggle();
    } else {
      // OK
      await this.championshipService.setTeamGameAttendeeStatus(
        status,
        game.teamId,
        game.id,
      );
      this.presentToast();
    }
  }

  //Sliding
  async toggleItem(slidingItem: IonItemSliding, status: boolean, game: any) {
    slidingItem.closeOpened();

    console.log(
      `Set Status ${status} for user ${this.user.uid} and team ${game.teamId} and training ${game.id}`,
    );
    console.log(game);
    const newStartDate = game.dateTime.toDate();
    newStartDate.setHours(Number(game.time.substring(0, 2)));
    console.log(newStartDate);

    // Get team threshold via training.teamId
    console.log("Grenzwert ");
    const championshipTreshold = game.team.championshipThreshold || 0;
    console.log(championshipTreshold);
    // Verpätete Abmeldung?
    if (
      newStartDate.getTime() - new Date().getTime() <
        1000 * 60 * 60 * championshipTreshold &&
      status == false &&
      championshipTreshold
    ) {
      console.log("too late");
      await this.tooLateToggle();
    } else {
      // OK
      await this.championshipService.setTeamGameAttendeeStatus(
        status,
        game.teamId,
        game.id,
      );
      this.presentToast();
    }
  }

  async presentToast() {
    await this.uiService.showSuccessToast(
      await lastValueFrom(this.translate.get("common.changes__saved")),
    );
  }

  async toastActionError(error) {
    await this.uiService.showErrorToast(error.message);
  }

  async shareSocialMedia(slidingItem: IonItemSliding, game) {
    slidingItem.closeOpened();

    const modal = await this.modalCtrl.create({
      component: GamePreviewPage,
      // presentingElement: this.routerOutlet.nativeEl,
      presentingElement: await this.modalCtrl.getTop(),
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

  async close() {
    return await this.modalCtrl.dismiss(null, "close");
  }

  async deleteGame(slidingItem: IonItemSliding, game) {
    slidingItem.closeOpened();
    await this.championshipService.deleteTeamGame(game.teamId, game.id);
    const toast = await this.toastController.create({
      message: await lastValueFrom(
        this.translate.get("common.success__training_deleted"),
      ),
      color: "danger",
      duration: 1500,
      position: "top",
    });
    toast.present();
  }

  async tooLateToggle() {
    await this.uiService.showInfoDialog({
      header: "Abmelden nicht möglich",
      message: "Bitte melde dich direkt beim Trainerteam um dich abzumelden",
    });
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
