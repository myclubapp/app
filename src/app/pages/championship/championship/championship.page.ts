import { Component, OnInit } from '@angular/core';
import { IonItemSliding, IonRouterOutlet, ModalController, ToastController } from '@ionic/angular';
import { User } from 'firebase/auth';
import { of,combineLatest } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Game } from 'src/app/models/game';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ChampionshipService } from 'src/app/services/firebase/championship.service';
import { ChampionshipDetailPage } from '../championship-detail/championship-detail.page';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.page.html',
  styleUrls: ['./championship.page.scss'],
})
export class ChampionshipPage implements OnInit {

  skeleton = new Array(12);
  user: User;

  gamesList: Game[];
  gamesListPast: Game[];
  constructor(
    public toastController: ToastController,
    private routerOutlet: IonRouterOutlet,
    private modalCtrl: ModalController,
    private authService: AuthService,
    private fbService: FirebaseService,
    private championshipService: ChampionshipService,
  ) { }

  ngOnInit() {
    this.getUser();
    this.getGamesList();
    this.getGamesListPast();
  }

  async getUser(){
    this.user = await this.authService.getUser();
  }
  async openModal(game: Game) {
    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalCtrl.create({
      component: ChampionshipDetailPage,
      presentingElement: this.routerOutlet.nativeEl,
      swipeToClose: true,
      showBackdrop: true,
      componentProps: {
        data: game
      }
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
     
    }
  }


  async toggle(status: boolean, game: Game){
    console.log(`Set Status ${status} for user ${this.user.uid} and team ${game.teamId} and game ${game.id}` );
    await this.championshipService.setTeamGameAttendeeStatus(this.user.uid, status, game.teamId,  game.id);
    this.presentToast();
  }
  async toggleItem(slidingItem: IonItemSliding, status: boolean, game: Game){
    slidingItem.closeOpened();

    console.log(`Set Status ${status} for user ${this.user.uid} and team ${game.teamId} and game ${game.id}` );
    await this.championshipService.setTeamGameAttendeeStatus(this.user.uid, status, game.teamId,  game.id);
    this.presentToast();
  }

  async presentToast() {
   
    const toast = await this.toastController.create({
      message: 'Änderungen gespeichert',
      color: "primary",
      duration: 2000,
      position: "top"
    });
    toast.present();
  }

   getGamesList(){
    
    this.authService.getUser$().pipe(
      // GET TEAMS
      switchMap((user:User) => this.fbService.getTeamRefs(user)),
      // Loop Over Teams  
      switchMap((allTeams:any) => combineLatest(
        allTeams.map((team) => combineLatest(
          of(team),
          // Loop over Games
          // this.championshipService.getTeamGamesRef(team.id), 
          this.championshipService.getTeamGamesRef(team.id).pipe(
            switchMap((allGames:any)=>combineLatest(
              allGames.map((game)=> combineLatest(
                of(game),
                this.championshipService.getTeamGamesAttendeesRef(team.id, game.id),
              ))
            )),
          ), 
          this.fbService.getTeam(team.id),  
        )),
      )),
      )
      .subscribe(async (data:any)=>{

        let gamesListNew = [];
        for (let team of data){ // loop over teams

          let games = team[1];
          let teamDetails = team[2];
          for (let gameObject of games){
            let game = gameObject[0];
            let attendees = gameObject[1];

            game.teamName = teamDetails.name; 
            game.teamId = teamDetails.id;
            game.attendees = attendees.filter(e=>e.status === true).length;

            if (attendees && attendees.filter(e=>e.id === this.user.uid).length === 1){
              game.status = attendees.filter(e=>e.id === this.user.uid)[0].status
            } else {
              game.status = null;
            }
            
            gamesListNew.push(game);
          }
        }
        this.gamesList = [...new Set([].concat(...gamesListNew))];
        this.gamesList = this.gamesList.sort((a,b)=>a.dateTime.toMillis()-b.dateTime.toMillis());
      });
  }
  
  getGamesListPast(){
    
    this.authService.getUser$().pipe(
      // GET TEAMS
      switchMap((user:User) => this.fbService.getTeamRefs(user)),
      // Loop Over Teams  
      switchMap((allTeams:any) => combineLatest(
        allTeams.map((team) => combineLatest(
          of(team),
          // Loop over Games
          // this.championshipService.getTeamGamesRef(team.id), 
          this.championshipService.getTeamGamesRefPast(team.id).pipe(
            switchMap((allGames:any)=>combineLatest(
              allGames.map((game)=> combineLatest(
                of(game),
                this.championshipService.getTeamGamesAttendeesRef(team.id, game.id),
              ))
            )),
          ), 
          this.fbService.getTeam(team.id),  
        )),
      )),
      )
      .subscribe(async (data:any)=>{

        let gamesListNew = [];
        for (let team of data){ // loop over teams

          let games = team[1];
          let teamDetails = team[2];
          for (let gameObject of games){
            let game = gameObject[0];
            let attendees = gameObject[1];

            game.teamName = teamDetails.name; 
            game.teamId = teamDetails.id;
            game.attendees = attendees.filter(e=>e.status === true).length;

            if (attendees && attendees.filter(e=>e.id === this.user.uid).length === 1){
              game.status = attendees.filter(e=>e.id === this.user.uid)[0].status
            } else {
              game.status = null;
            }
            
            gamesListNew.push(game);
          }
        }
        this.gamesListPast = [...new Set([].concat(...gamesListNew))];
        this.gamesListPast = this.gamesListPast.sort((a,b)=>b.dateTime.toMillis()-a.dateTime.toMillis());
      });
  }
}
