import {TrainingDetailPage} from './../training-detail/training-detail.page';
import {AgbAppPage} from './../agb-app/agb-app.page';
import {TrainingService} from './../../services/training/training.service';
import {ProfileService} from './../../services/user/profile.service';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
import {TeamListPage} from './../team-list/team-list.page';
import {ClubListPage} from './../club-list/club-list.page';

import {TeamService} from './../../services/club/team.service';
import {MenuController, ModalController, IonRouterOutlet, ToastController, AlertController, IonSlides} from '@ionic/angular';
import {Component, OnInit, ViewChild} from '@angular/core';
import {RequestsService} from 'src/app/services/requests/requests.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {
  public requestList: Array<any> = [];
  public openRequestList: Array<any> = [];
  public timelineList: Array<any> = [];
  public teamList: Array<any> = [];
  public clubList: Array<any> = [];

  setupAccountTutorial: boolean = false;
  setupAccountAGB: boolean = false;
  setupAccountProfile: boolean = false;
  setupAccountClub: boolean = false;

  sliderConfig = {
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 1.4,
  };
  @ViewChild('slides', {
    static: true,
  })
  slides: IonSlides;

  constructor(
    private router: Router,
    public menuCtrl: MenuController,
    private teamSerivice: TeamService,
    private alertCtrl: AlertController,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private requestService: RequestsService,
    private authService: AuthService,
    private profileService: ProfileService,
    private trainingService: TrainingService,
    public toastController: ToastController,
    private alertController: AlertController
  ) {
    this.menuCtrl.enable(true, 'menu');

    this.profileService.getUserProfileChanges().then(
      (user) => {
        user.onSnapshot((snapshot) => {
          let userProfile = snapshot.data();

          //setupAccountProfil
          if (!userProfile.firstName || !userProfile.lastName || !userProfile.picture) {
            this.setupAccountProfile = true;
          } else {
            this.setupAccountProfile = false;
          }

          if (!userProfile.agb) {
            this.setupAccountAGB = true;
          } else {
            this.setupAccountAGB = false;
          }

          if (!userProfile.tutorial) {
            this.setupAccountTutorial = true;
          } else {
            this.setupAccountTutorial = false;
          }
        });
      },
      (error) => {}
    );
  }

  ionViewDidLoad() {
    this.slides.pager = true;
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'menu');
  }

  async ngOnInit() {
    //TIMELINE - TRAINING
    let teamList = await this.teamSerivice.getTeamList();
    for (let team of teamList) {
      //future
      let trainingRef = this.trainingService.getTeamTraining(team.id);
      trainingRef.onSnapshot(async (querySnapshot) => {
        let trainings = querySnapshot.docChanges();

        for (let training of trainings) {
          let team = await training.doc.data().teamRef.get();
          let club = await training.doc.data().clubRef.get();

          if (training.type === 'added') {
            this.timelineList.push({
              ...training.doc.data(),
              // ...{"status": status},
              ...{team: team.data()},
              ...{club: club.data()},
              ...{
                id: training.doc.id,
              },
            });
          } else if (training.type === 'modified') {
            this.timelineList.find((element, index) => {
              if (element.id === training.doc.id) {
                this.timelineList[index] = {
                  ...training.doc.data(),
                  //  ...{"status": status},
                  ...{team: team.data()},
                  ...{club: club.data()},
                  ...{
                    id: training.doc.id,
                  },
                };
              }
            });
          } else if (training.type === 'removed') {
            this.timelineList.find((element, index) => {
              if (element.id === training.doc.id) {
                this.timelineList.splice(index, 1);
                return;
              }
            });
          }
        }
      });
    }

    //Offene Requests anzeigen
    let userRequestListRef = await this.requestService.getUserRequestList();
    userRequestListRef.onSnapshot(async (snapshot) => {
      let userRequests = snapshot.docChanges();
      for (let request of userRequests) {
        //console.log(request.doc.data());

        let team = await request.doc.data().teamRef.get();
        let club = await request.doc.data().clubRef.get();

        if (request.type == 'added') {
          this.openRequestList.push({
            ...request.doc.data(),
            ...{
              id: request.doc.id,
            },
            ...{
              club: club.data(),
            },
            ...{
              team: team.data(),
            },
          });
        } else {
          this.openRequestList.find((element, index) => {
            if (element) {
              if (element.id === request.doc.id) {
                this.openRequestList.splice(index, 1);
                return;
              }
            }
          });
        }
      }
    });

    const user: firebase.default.User = await this.authService.getUser();
    let teamListRef = this.teamSerivice.getTeamListChanges(user);

    teamListRef.onSnapshot(
      async (snapshot) => {
        let teams = snapshot.docChanges();
        for (let team of teams) {
          let teamData = await team.doc.data().teamRef.get();
          let clubRef = await teamData.data().clubRef.get();

          if (team.type == 'added') {
            this.teamList.push({
              ...teamData.data(),
              ...{
                id: team.doc.id,
              },
              ...{
                club: clubRef.data(),
              },
              ...{
                clubName: clubRef.data().name,
              },
            });
          } else if (team.type == 'removed') {
            this.teamList.find((element, index) => {
              if (element) {
                if (element.id === team.doc.id) {
                  this.teamList.splice(index, 1);
                  return;
                }
              }
            });
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );

    /*************************
     *  Club
     *
     **********************/
    let clubListRef = this.teamSerivice.getClubListChanges(user);

    clubListRef.onSnapshot(
      async (snapshot) => {
        let clubs = snapshot.docChanges();
        for (let club of clubs) {
          let clubData = await club.doc.data().clubRef.get();
          //console.log(club);

          if (club.type == 'added') {
            this.clubList.push({
              ...clubData.data(),
              ...{
                id: club.doc.id,
              },
            });
          } else if (club.type == 'removed') {
            this.clubList.find((element, index) => {
              if (element) {
                if (element.id === club.doc.id) {
                  this.clubList.splice(index, 1);
                  return;
                }
              }
            });
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );

    //Teams
    /*
    this.teamSerivice.getTeamList().then(teamList => {
      this.teamList = teamList;
    });
*/

    //clubs

    this.teamSerivice.getClubList().then((clubList) => {
      //this.clubList = clubList;

      // requests for club
      for (let club of clubList) {
        //console.log("club id " + club.id);
        this.requestService.getClubRequestList(club.id).onSnapshot(
          async (querySnapshot) => {
            let requests = querySnapshot.docChanges();
            for (let request of requests) {
              let team = await request.doc.data().teamRef.get();
              let club = await request.doc.data().clubRef.get();
              let user = await request.doc.data().userRef.get();

              if (request.type === 'added') {
                this.requestList.push({
                  ...request.doc.data(),
                  ...{
                    user: user.data(),
                  },
                  ...{
                    team: team.data(),
                  },
                  ...{
                    club: club.data(),
                  },
                  ...{
                    id: request.doc.id,
                  },
                });
              } else if (request.type === 'modified') {
                this.requestList.find((element, index) => {
                  if (element.id === request.doc.id) {
                    this.requestList[index] = {
                      ...request.doc.data(),
                      ...{
                        user: user.data(),
                      },
                      ...{
                        team: team.data(),
                      },
                      ...{
                        club: club.data(),
                      },
                      ...{
                        id: request.doc.id,
                      },
                    };
                  }
                });
              } else if (request.type === 'removed') {
                this.requestList.find((element, index) => {
                  if (element) {
                    if (element.id === request.doc.id) {
                      this.requestList.splice(index, 1);
                      return;
                    }
                  }
                });
              }
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });

    //requests
    /*
    this.requestService.getTeamRequestList().then(data=>{
      for (let element of data){
        this.requestList.push(element);
      }
    })
    this.requestService.getClubRequestList().then(data=>{
      for (let element of data){
        this.requestList.push(element);
      }
    })*/
  }

  approveRequest(id) {
    this.requestService.approve(id).then(
      (ok) => {
        this.toastController
          .create({
            message: 'Request genehmigt',
            color: 'success',
            duration: 2000,
          })
          .then((toast) => {
            toast.present();
          });
      },
      (error) => {
        this.toastController
          .create({
            message: 'Fehler',
            color: 'danger',
            duration: 2000,
          })
          .then((toast) => {
            toast.present();
          });
      }
    );
  }

  rejectRequest(id) {
    this.requestService.reject(id).then(
      (ok) => {
        this.toastController
          .create({
            message: 'Request abgelehnt',
            color: 'danger',
            duration: 2000,
          })
          .then((toast) => {
            toast.present();
          });
      },
      (error) => {
        this.toastController
          .create({
            message: 'Fehler',
            color: 'danger',
            duration: 2000,
          })
          .then((toast) => {
            toast.present();
          });
      }
    );
  }

  async openJoinClub() {
    //console.log("clicked");
    const modal = await this.modalController.create({
      component: ClubListPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();

    await modal.onDidDismiss();

    if (data && data.clubs) {
      //select teams for every club..
      data.clubs.forEach(async (club) => {
        let clubId = club.set_in_context.club_id;

        let status = await this.teamSerivice.checkIfClubNotExists('su-' + clubId);
        // check Club Members?
        if (status) {
          const alert = await this.alertController.create({
            //cssClass: 'my-custom-class',
            header: 'Neuer Verein!',
            message: 'Dieser Verein ist noch nicht aktiv. Bist du berechtigt, diesen Verein zu verwalten? ',
            buttons: [
              {
                text: 'Nein',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                  this.toastController
                    .create({
                      message: 'Aktion abgebrochen',
                      color: 'danger',
                      duration: 2000,
                    })
                    .then((toast) => {
                      toast.present();
                    });
                  console.log('Nein keine Berechtigung');
                },
              },
              {
                text: 'Ja',
                handler: () => {
                  this.openTeamModal(clubId, club);
                },
              },
            ],
          });
          await alert.present();
        } else {
          this.openTeamModal(clubId, club);
        }
      });
    }
  }

  async openTeamModal(clubId, club) {
    const modalTeam = await this.modalController.create({
      component: TeamListPage,
      swipeToClose: true,
      componentProps: {
        clubName: club.text,
        clubId: clubId,
      },
      presentingElement: this.routerOutlet.nativeEl,
    });
    await modalTeam.present();
    const {data} = await modalTeam.onWillDismiss();
    club.teams = data.teams;
    await modalTeam.onDidDismiss();

    club.teams.forEach(async (team) => {
      let teamId = team.set_in_context.team_id;
      this.requestService.addRequest(clubId, teamId).then(
        (ok) => {
          this.toastController
            .create({
              message: `Antrag an ${club.text} - ${team.text} gesendet`,
              color: 'success',
              duration: 3000,
            })
            .then((toast) => {
              toast.present();
            });
        },
        (error) => {
          this.toastController
            .create({
              message: `Fehler.. `,
              color: 'danger',
              duration: 3000,
            })
            .then((toast) => {
              toast.present();
            });
        }
      );
    });
  }

  async leaveClub(clubId: string) {
    const alert = await this.alertCtrl.create({
      header: 'Club verlassen?',
      message: 'Möchtest du wirklich den Club <strong>verlassen</strong>?',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          handler: (data) => {
            this.toastController
              .create({
                message: 'Aktion abgebrochen',
                color: 'danger',
                duration: 2000,
              })
              .then((toast) => {
                toast.present();
              });
          },
        },
        {
          text: 'Verlassen',
          handler: (data) => {
            this.teamSerivice.leaveClub(clubId).then((value) => {
              this.toastController
                .create({
                  message: 'Club wurde verlassen',
                  color: 'danger',
                  duration: 2000,
                })
                .then((toast) => {
                  toast.present();
                });
            });
          },
        },
      ],
    });
    await alert.present();
  }
  async leaveTeam(teamId: string) {
    const alert = await this.alertCtrl.create({
      header: 'Team verlassen?',
      message: 'Möchtest du wirklich das Team <strong>verlassen</strong>?',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          handler: (data) => {
            this.toastController
              .create({
                message: 'Aktion abgebrochen',
                color: 'danger',
                duration: 2000,
              })
              .then((toast) => {
                toast.present();
              });
          },
        },
        {
          text: 'Verlassen',
          handler: (data) => {
            this.teamSerivice.leaveTeam(teamId).then((value) => {
              this.toastController
                .create({
                  message: 'Team verlassen',
                  color: 'danger',
                  duration: 2000,
                })
                .then((toast) => {
                  toast.present();
                });
            });
          },
        },
      ],
    });
    await alert.present();
  }
  openClub(club) {
    this.router.navigateByUrl('/home/club/' + club.id);
  }
  openTeam(team) {
    this.router.navigateByUrl('/home/team/' + team.id);
  }

  async openTimeline(timeline) {
    //call modal
    const modal = await this.modalController.create({
      component: TrainingDetailPage,
      componentProps: {
        training: timeline,
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();

    modal.onDidDismiss().then((ok) => {});

    //  this.router.navigateByUrl('/home/training-detail/' + timeline.id);
  }

  setupProfile() {
    this.router.navigateByUrl('/home/profile');
  }

  async setupAGB() {
    const modal = await this.modalController.create({
      component: AgbAppPage,
      componentProps: {
        data: true,
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();

    modal.onDidDismiss().then((ok) => {
      if (ok.data && ok.data.status) {
        this.profileService.setAGB(ok.data.status);
      }
    });
  }

  setupTutorial() {
    this.router.navigateByUrl('/home/tutorial');
  }
}
