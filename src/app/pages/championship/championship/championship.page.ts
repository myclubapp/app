import { Component, OnInit } from "@angular/core";

import {
  IonItemSliding,
  IonRouterOutlet,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { User } from "@angular/fire/auth";
import { Observable, catchError, combineLatest, concatMap, finalize, from,  of, switchMap, tap} from "rxjs";
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
//   gameListPast: Game[] = [];

  constructor(
    public toastController: ToastController,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalCtrl: ModalController,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly championshipService: ChampionshipService
  ) {}

  ngOnInit() {
    const teamGameList: Game[] = [];
    //const teamGamePastList: Game[] = [];

    // Team observable
    const teamGame$ = this.authService.getUser$().pipe(
      switchMap(user => this.fbService.getUserTeamRefs(user)),
      concatMap(teamsArray => from(teamsArray)),
      tap(team=>console.log(team.id)),
      switchMap(team => this.fbService.getTeamRef(team.id)),
      tap(team=>console.log(team.name, team.id)),
      concatMap(teamDetail => 
          this.championshipService.getTeamGamesRefs(teamDetail.id).pipe(
              catchError(error => {
                  console.error('Error fetching team game:', error);
                  return of([]);
              })
          )
      ),
      tap(games => games.forEach(game => teamGameList.push(game))),
      finalize(() => console.log("Team Game fetching completed"))
  );

  /*
    // Team observable
  const teamGamePast$ = this.authService.getUser$().pipe(
      switchMap(user => this.fbService.getUserTeamRefs(user)),
      concatMap(teamsArray => from(teamsArray)),
      tap(team=>console.log(team.id)),
      concatMap(team => 
        this.championshipService.getTeamGamesPastRefs(team.id).pipe(
              catchError(error => {
                  console.error('Error fetching team game:', error);
                  return of([]);
              })
          )
      ),
      tap(game => game.forEach(n => teamGamePastList.push(n))),
      finalize(() => console.log("Team Game Past fetching completed"))
  );
*/

    // Use combineLatest to get results when both observables have emitted
    combineLatest([teamGame$]).subscribe({
        next: () => {
          this.gameList = [...this.gameList, ...teamGameList].sort((a, b):any => {
            // Assuming date is a string in 'YYYY-MM-DD' format or a similar directly comparable format.
            return new Date(a.date).getTime() < new Date(b.date).getTime();
        });
          this.gameList$ = of(this.gameList);
          console.log("Combined Game list created");
        },
        error: err => console.error('Error in the observable chain:', err)
    });

    /*  // Use combineLatest to get results when both observables have emitted
    combineLatest([teamGamePast$]).subscribe({
        next: () => {
          this.gameListPast = [...this.gameListPast, ...teamGamePastList].sort((a, b):any => {
            // Assuming date is a string in 'YYYY-MM-DD' format or a similar directly comparable format.
            return new Date(a.date).getTime() < new Date(b.date).getTime();
        });
          this.gameListPast$ = of(this.gameListPast);
          console.log("Combined Game list Past created");
        },
        error: err => console.error('Error in the observable chain:', err)
    });*/

  }


  ngOnDestroy(): void {
    
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

  }

