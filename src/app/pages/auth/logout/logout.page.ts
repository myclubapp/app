import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.page.html',
    styleUrls: ['./logout.page.scss'],
    standalone: false
})
export class LogoutPage implements OnInit {
  constructor (public menuCtrl: MenuController) {
    this.menuCtrl.enable(false, 'menu');
  }

  ngOnInit () {
    this.menuCtrl.enable(false, 'menu');
  }
}
