import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-championship-detail',
  templateUrl: './championship-detail.page.html',
  styleUrls: ['./championship-detail.page.scss'],
})
export class ChampionshipDetailPage implements OnInit {
  @Input("data") game: Game;

  constructor(private modalCtrl: ModalController,
    public navParams : NavParams) {}
  ngOnInit() {
    this.game = this.navParams.get('data');
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.game, 'confirm');
  }
}
