import { TrainingService } from './../../services/training/training.service';
import { NavParams, ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-change',
  templateUrl: './training-change.page.html',
  styleUrls: ['./training-change.page.scss'],
})
export class TrainingChangePage implements OnInit {
  public training: any = {};
  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    public toastController: ToastController,
    private trainingService: TrainingService,
  ) {
   }

  ngOnInit() {
    this.training = this.navParams.get('training');
  }

  changeValue(event){
    //console.log(event)

    this.training[event.target.id] = event.detail.value;

  }

  saveTraining(){
    console.log(this.training.title);
    this.trainingService.changeTraining(this.training).then(done=>{
      this.toastController.create({
        message: 'Training gespeichert',
        color: "success",
        duration: 2000
      }).then(toast => {
        toast.present();
      });
      this.dismiss();

    },error=>{
      //      console.log(error.message);
      this.toastController.create({
        message: 'Fehler: ' + error.message,
        color: "danger",
        duration: 2000
      }).then(toast => {
        toast.present();
      });
      this.dismiss();
      
    })



  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
