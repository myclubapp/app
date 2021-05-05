import { ModalController, NavParams, MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agb-app',
  templateUrl: './agb-app.page.html',
  styleUrls: ['./agb-app.page.scss'],
})
export class AgbAppPage implements OnInit {
  public status;
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    public menuCtrl: MenuController
  ) { 
    
    this.status = this.navParams.get('data');
    this.menuCtrl.enable(false, 'menu');

  }

  ngOnInit() {
  }
  ionViewDidLeave(){
    //console.log("ionViewDidLeave");
    this.menuCtrl.enable(true, 'menu');
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true,
      'status': true
    });
  }
}
