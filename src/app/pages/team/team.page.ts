import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {
  @Input("data") team: Team;

  constructor(private modalCtrl: ModalController,
    public navParams : NavParams) {}
  ngOnInit() {
    this.team = this.navParams.get('data');
  }
  close() {
    return this.modalCtrl.dismiss(null, 'close');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.team, 'confirm');
  }

}
