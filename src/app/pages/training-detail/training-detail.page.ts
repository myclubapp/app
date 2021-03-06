import {TrainingChangePage} from './../training-change/training-change.page';
import {TrainingDetailPopoverPage} from './../training-detail-popover/training-detail-popover.page';
import {NavParams, ModalController, PopoverController, ToastController, AlertController} from '@ionic/angular';
import {TrainingService} from './../../services/training/training.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.page.html',
  styleUrls: ['./training-detail.page.scss'],
})
export class TrainingDetailPage implements OnInit {
  public training: any = {};
  public segment = 'accept';
  public acceptList: any = [];
  public rejectList: any = [];
  constructor(
    private navParams: NavParams,
    private trainingService: TrainingService,
    private route: ActivatedRoute,
    private popoverController: PopoverController,
    private modalController: ModalController,
    public toastController: ToastController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    const trainingId: string = this.navParams.get('training').id; //this.route.snapshot.paramMap.get('id') ||
    this.training = this.navParams.get('training');
    this.trainingService.getAcceptList(this.training).then((list) => {
      this.acceptList = list;
    });

    this.trainingService.getRejectList(this.training).then((list) => {
      this.rejectList = list;
    });
    /*
    this.trainingService.getTrainingDetail(this.training).then(trainingSnapshot => {
      this.training = trainingSnapshot.data();
      this.training.id = trainingSnapshot.id;
      this.trainingService.getAcceptList(trainingSnapshot).then(list => {
        this.acceptList = list;
      });
  
      this.trainingService.getRejectList(trainingSnapshot).then(list => {
          this.rejectList = list;
      });
    });*/
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true,
    });
  }
  acceptTraining() {
    this.trainingService.acceptTraining(this.training.id);
  }

  rejectTraining() {
    this.trainingService.rejectTraining(this.training.id);
  }

  changeSegment(event) {
    this.segment = event.detail.value;
  }

  async openPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: TrainingDetailPopoverPage,
      //cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
    });
    popover.present();

    popover.onDidDismiss().then(async (done) => {
      if (done.data && done.data.action && done.data.action === 'change') {
        this.modalController.dismiss({
          training: this.training,
        });
      } else if (done.data && done.data.action && done.data.action === 'delete') {
        const alert = await this.alertController.create({
          header: 'Training l??schen?',
          message: 'M??chtest du wirklich das Training <strong>l??schen</strong>?',
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
              text: 'L??schen',
              handler: (data) => {
                this.trainingService.deleteTraining(this.training).then(
                  (done) => {
                    this.toastController
                      .create({
                        message: 'Training gel??scht',
                        color: 'danger',
                        duration: 2000,
                      })
                      .then((toast) => {
                        toast.present();
                      });
                    this.dismiss();
                  },
                  (error) => {
                    //console.log(error);
                    this.toastController
                      .create({
                        message: 'Fehler: ' + error.message,
                        color: 'danger',
                        duration: 2000,
                      })
                      .then((toast) => {
                        toast.present();
                      });
                  }
                );
              },
            },
          ],
        });
        await alert.present();
      }

      //console.log(done)
    });
  }
}
