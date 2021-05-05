import {MenuController, ModalController, NavParams} from '@ionic/angular';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-agb',
  templateUrl: './agb.page.html',
  styleUrls: ['./agb.page.scss'],
})
export class AgbPage implements OnInit {
  public status;
  constructor(public menuCtrl: MenuController) {
    this.menuCtrl.enable(false, 'menu');
  }

  ngOnInit() {
    this.menuCtrl.enable(false, 'menu');
  }
}
