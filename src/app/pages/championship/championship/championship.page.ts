import { Component, OnInit } from "@angular/core";

import {
  IonItemSliding,
  IonRouterOutlet,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { User } from "@angular/fire/auth";
import { Observable, Subscription, catchError, combineLatest, concatMap, finalize, forkJoin, from,  map,  of, switchMap, take, tap, timeout} from "rxjs";
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
  user$: Observable<User>;
  user: User;

  gameList$: Observable<Game[]>;
  gameListPast$: Observable<Game[]>;

  gameList: Game[] = [];
  gameListPast: Game[] = [];

  private subscription: Subscription;
  private subscriptionPast: Subscription;

  constructor(
    public toastController: ToastController,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalCtrl: ModalController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly championshipService: ChampionshipService
  ) {}

  ngOnInit() {
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
  }


  ngOnDestroy(): void {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
    if (this.subscriptionPast) {
      this.subscriptionPast.unsubscribe();
    }
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
    //console.log(`Set Status ${status} for user ${this.user.uid} and team ${game.teamId} and game ${game.id}` );
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

  }

