import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Training } from '../../../models/training'

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.page.html',
  styleUrls: ['./training-detail.page.scss'],
})
export class TrainingDetailPage implements OnInit {


  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
