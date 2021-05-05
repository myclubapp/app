import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-detail-popover',
  templateUrl: './training-detail-popover.page.html',
  styleUrls: ['./training-detail-popover.page.scss'],
})
export class TrainingDetailPopoverPage implements OnInit {

  constructor(
    private router: Router,
    public popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
  }
  changeTraining(){
    this.popoverCtrl.dismiss({action:'change'});

  }
  deleteTraining(){
    this.popoverCtrl.dismiss({action:'delete'});
  }
}
