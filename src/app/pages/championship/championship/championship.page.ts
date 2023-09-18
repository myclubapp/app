import { Component, OnInit } from "@angular/core";

import {
  AlertController,
  IonItemSliding,
  IonRouterOutlet,
  MenuController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { User } from "@angular/fire/auth";
import { Observable, Subscription, catchError, combineLatest, concatMap, defaultIfEmpty, finalize, forkJoin, from,  map,  of, switchMap, take, tap, timeout} from "rxjs";
import { Game } from "src/app/models/game";
import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { ChampionshipService } from "src/app/services/firebase/championship.service";
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

  gameList: Game[] = [];
  gameListPast: Game[] = [];

  private subscription: Subscription;
  private subscriptionPast: Subscription;

  filterList: any[] = [];
  filterValue: string = "";

  constructor(
    public toastController: ToastController,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalCtrl: ModalController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly championshipService: ChampionshipService,
    private readonly alertCtrl: AlertController,
    private readonly menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(true, "menu");
  }

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
  async openFilter(ev: Event){
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
  
  }

  }

