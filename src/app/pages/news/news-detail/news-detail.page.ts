import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  @Input("data") news: News;

  constructor(private modalCtrl: ModalController,
    public navParams : NavParams) {}
  ngOnInit() {
    this.news = this.navParams.get('data');
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.news, 'confirm');
  }


}
