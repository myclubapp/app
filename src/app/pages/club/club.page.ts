import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Club } from 'src/app/models/club';
import { Team } from 'src/app/models/team';
import { Profile } from 'src/app/models/user';

@Component({
  selector: 'app-club',
  templateUrl: './club.page.html',
  styleUrls: ['./club.page.scss'],
})
export class ClubPage implements OnInit {
  
  @Input("data") club: Club;

  constructor(private modalCtrl: ModalController,
    public navParams : NavParams) {}
  ngOnInit() {
    this.club = this.navParams.get('data');
  }
  close() {
    return this.modalCtrl.dismiss(null, 'close');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.club, 'confirm');
  }

}
