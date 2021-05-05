import {ChampionshipPopoverPage} from './../championship-popover/championship-popover.page';
import {ChampionshipService} from './../../services/championship/championship.service';
import {UnihockeyService} from './../../services/verband/unihockey.service';
import {TeamService} from './../../services/club/team.service';
import {ChampionshipDetailPage} from './../championship-detail/championship-detail.page';
import {ModalController, PickerController, IonRouterOutlet, ToastController, PopoverController} from '@ionic/angular';

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.page.html',
  styleUrls: ['./championship.page.scss'],
})
export class ChampionshipPage implements OnInit {
  public gamesList: any[];
  public gamesListPast: any[];

  public championshipList: Array<any> = [];

  skeletonList = ['', '', '', '', '', ''];
  constructor(
    private unihockeyService: UnihockeyService,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private teamSerivice: TeamService,
    private toastController: ToastController,
    private popoverController: PopoverController,
    private championshipService: ChampionshipService
  ) {
    this.gamesList = [];
    this.gamesListPast = [];
  }

  ngOnInit() {
    this.loadGames();
  }

  doRefresh(event) {
    this.skeletonList = ['', '', '', '', '', ''];
    this.gamesList = [];
    this.gamesListPast = [];
    this.loadGames();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  loadGames() {
    this.unihockeyService.getCurrentSeason().subscribe((season: any) => {
      this.teamSerivice.getTeamList().then((teamList: any[]) => {
        for (let team of teamList) {
          //* Swiss Unihockey
          this.unihockeyService.getSUGames(team.verbandId, season.data.season).subscribe(async (games) => {
            for (let game of games.data) {
              let status: any = await this.championshipService.getGameStatus(game.teamId, game.id);
              if (status.exists) {
                game.status = String(status.data().status);
              } else {
                game.status = 'undefined';
              }
              let date = new Date(game.dateObject);
              if (date.getTime() >= Date.now() - 1 * 24 * 60 * 60 * 1000) {
                // 1 tag zurück
                this.gamesList.push(game);
              } else {
                this.gamesListPast.push(game);
              }
              this.skeletonList = [];
            }

            this.gamesList = this.gamesList.sort((a, b) => {
              let dateA = new Date(a.dateObject);
              let dateB = new Date(b.dateObject);
              if (dateA.getTime() > dateB.getTime()) {
                return 0;
              } else {
                return -1;
              }
            });

            this.gamesListPast = this.gamesListPast.sort((a, b) => {
              let dateA = new Date(a.dateObject);
              let dateB = new Date(b.dateObject);
              if (dateA.getTime() > dateB.getTime()) {
                return 0;
              } else {
                return -1;
              }
            });
          });

          let championshipRef = this.championshipService.getTeamChampionshipList(team.id);
          //liest aktuell alle spiele aus Firestore!!!
          championshipRef.onSnapshot(async (querySnapshot) => {
            let games = querySnapshot.docChanges();
            for (let game of games) {
              if (game.type === 'modified' || game.type === 'added') {
                this.gamesList.find((element, index) => {
                  if (element.id === game.doc.id) {
                    //console.log( game.doc.data().membersAccepted);
                    //this.gamesList[index].membersAccepted = game.doc.data().membersAccepted || 0;
                    //this.gamesList[index].membersRejected = game.doc.data().membersRejected || 0;

                    if (game.type == 'modified') {
                      this.championshipService.getGameStatus(element.teamId, element.id).then((status: any) => {
                        console.log('status: ' + status.data().status);
                        if (status.exists) {
                          status = String(status.data().status);
                        } else {
                          status = 'undefined';
                        }
                        this.gamesList[index].status = status;
                      });
                    }
                    return;
                  }
                });
                this.gamesListPast.find((element, index) => {
                  if (element.id === game.doc.id) {
                    //console.log( game.doc.data().membersAccepted);
                    //this.gamesListPast[index].membersAccepted = game.doc.data().membersAccepted || 0;
                    //this.gamesListPast[index].membersRejected = game.doc.data().membersRejected || 0;

                    if (game.type == 'modified') {
                      this.championshipService.getGameStatus(element.teamId, element.id).then((status: any) => {
                        console.log('status: ' + status.data().status);
                        if (status.exists) {
                          status = String(status.data().status);
                        } else {
                          status = 'undefined';
                        }
                        this.gamesListPast[index].status = status;
                      });
                    }
                    return;
                  }
                });
              }
            }
          });
        }
      });
    });

    //PAST SEASON
    this.unihockeyService.getCurrentSeason().subscribe((season: any) => {
      this.teamSerivice.getTeamList().then((teamList: any) => {
        for (let team of teamList) {
          //* Swiss Unihockey
          this.unihockeyService.getSUGames(team.verbandId, season.data.season - 1).subscribe(async (games) => {
            for (let game of games.data) {
              let status: any = await this.championshipService.getGameStatus(game.teamId, game.id);
              if (status.exists) {
                game.status = String(status.data().status);
              } else {
                game.status = 'undefined';
              }

              let date = new Date(game.dateObject);
              if (date.getTime() >= Date.now() - 1 * 24 * 60 * 60 * 1000) {
                // 1 tag zurück
                this.gamesList.push(game);
              } else {
                this.gamesListPast.push(game);
              }
            }

            this.gamesList = this.gamesList.sort((a, b) => {
              let dateA = new Date(a.dateObject);
              let dateB = new Date(b.dateObject);
              if (dateA.getTime() > dateB.getTime()) {
                return 0;
              } else {
                return -1;
              }
            });

            this.gamesListPast = this.gamesListPast.sort((a, b) => {
              let dateA = new Date(a.dateObject);
              let dateB = new Date(b.dateObject);

              if (dateA.getTime() > dateB.getTime()) {
                return 0;
              } else {
                return -1;
              }
            });

            this.skeletonList = [];
          });

          let championshipRef = this.championshipService.getTeamChampionshipList(team.id);
          //liest aktuell alle spiele aus Firestore!!!
          championshipRef.onSnapshot(async (querySnapshot) => {
            let games = querySnapshot.docChanges();
            for (let game of games) {
              if (game.type === 'modified' || game.type === 'added') {
                this.gamesList.find((element, index) => {
                  if (element.id === game.doc.id) {
                    //console.log( game.doc.data().membersAccepted);
                    //this.gamesList[index].membersAccepted = game.doc.data().membersAccepted || 0;
                    //this.gamesList[index].membersRejected = game.doc.data().membersRejected || 0;

                    if (game.type == 'modified') {
                      this.championshipService.getGameStatus(element.teamId, element.id).then((status: any) => {
                        if (status.exists) {
                          status = String(status.data().status);
                        } else {
                          status = 'undefined';
                        }
                        this.gamesList[index].status = status;
                      });
                    }
                    return;
                  }
                });
                this.gamesListPast.find((element, index) => {
                  if (element.id === game.doc.id) {
                    //console.log( game.doc.data().membersAccepted);
                    //this.gamesListPast[index].membersAccepted = game.doc.data().membersAccepted || 0;
                    //this.gamesListPast[index].membersRejected = game.doc.data().membersRejected || 0;

                    if (game.type == 'modified') {
                      this.championshipService.getGameStatus(element.teamId, element.id).then((status: any) => {
                        if (status.exists) {
                          status = String(status.data().status);
                        } else {
                          status = 'undefined';
                        }
                        this.gamesListPast[index].status = status;
                      });
                    }
                    return;
                  }
                });
              }
            }
          });
        }
      });
    });
  }

  async openDetail(game) {
    console.log('clicked');
    const modal = await this.modalController.create({
      component: ChampionshipDetailPage,
      componentProps: {
        game: game,
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    console.log(data);
  }

  acceptGame(game) {
    this.championshipService.acceptGame(game).then((value) => {
      this.toastController
        .create({
          message: 'Du bist angemeldet',
          color: 'success',
          duration: 2000,
        })
        .then((toast) => {
          toast.present();
        });
    });
  }
  rejectGame(game) {
    this.championshipService.rejectGame(game).then((value) => {
      this.toastController
        .create({
          message: 'Du bist abgemeldet',
          color: 'danger',
          duration: 2000,
        })
        .then((toast) => {
          toast.present();
        });
    });
  }

  async openPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ChampionshipPopoverPage,
      //cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
    });
    return await popover.present();
  }
}
