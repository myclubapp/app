import {TeamService} from './../../services/club/team.service';

import {ModalController, ToastController} from '@ionic/angular';
import {TrainingService} from './../../services/training/training.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-training-create',
  templateUrl: './training-create.page.html',
  styleUrls: ['./training-create.page.scss'],
})
export class TrainingCreatePage implements OnInit {
  public training: any = {};
  public teamList: Array<any>;
  public clubList: Array<any>;
  constructor(
    private trainingService: TrainingService,
    private modalCtrl: ModalController,
    private teamSerivice: TeamService,
    public toastController: ToastController
  ) {
    this.training.timeFrom = '20:00';
    this.training.timeTo = '22:00';
    this.training.startDate = new Date();
  }

  async ngOnInit() {
    //Teams
    this.teamSerivice.getTeamList().then((teams) => {
      this.teamList = teams;
      this.training.teamId = teams[0].id;
    });
    //clubs
    this.teamSerivice.getClubList().then((clubs) => {
      this.clubList = clubs;
      this.training.clubId = clubs[0].id;
    });
  }

  createTraining(): void {
    if (
      this.training.title === undefined ||
      this.training.description === undefined ||
      this.training.location === undefined ||
      this.training.timeFrom === undefined ||
      this.training.timeTo === undefined ||
      this.training.weekday === undefined ||
      this.training.startDate === undefined ||
      this.training.repeat === undefined ||
      this.training.clubId == undefined ||
      this.training.teamId == undefined
    ) {
      console.log(this.training);
      this.toastController
        .create({
          message: 'Fehler: Bitte alle Felder ausfüllen!',
          color: 'danger',
          duration: 2000,
        })
        .then((toast) => {
          toast.present();
        });

      return;
    }

    this.trainingService
      .createTraining(
        this.training.title,
        this.training.description,
        this.training.location,
        this.training.timeFrom,
        this.training.timeTo,
        this.training.weekday,
        this.training.startDate,
        this.training.repeat,
        this.training.clubId,
        this.training.teamId
      )
      .then(
        () => {
          this.toastController
            .create({
              message: 'Training erfolgreich erstellt',
              color: 'success',
              duration: 2000,
            })
            .then((toast) => {
              toast.present();

              this.dismiss();
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
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
}
