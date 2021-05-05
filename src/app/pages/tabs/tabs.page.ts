import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(
    public menuCtrl: MenuController
  ) { 
    this.menuCtrl.enable(true, 'menu');
  }

  ngOnInit() {
  }

}
