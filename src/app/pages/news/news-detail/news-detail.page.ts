import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { News } from 'src/app/models/news';
import { Share } from '@capacitor/share';

import {
  faTwitter,
  faFacebook,
  faWhatsapp,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCopy } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  @Input('data') news: News;

  // Social Share
  shareSocialShareOptions: any;
  showSocialShare = false;

  faTwitter: any = faTwitter;
  faFacebook: any = faFacebook;
  faWhatsapp: any = faWhatsapp;
  faLinkedin: any = faLinkedin;
  faEnvelope: any = faEnvelope;
  faCopy: any = faCopy;

  constructor(
    private readonly modalCtrl: ModalController,
    // private readonly sanitization: DomSanitizer,
    public navParams: NavParams
  ) { }

  ngOnInit() {
    this.news = this.navParams.get('data');

  }

  ngOnDestroy() {
 
  }
  async close() {
    return await this.modalCtrl.dismiss(null, 'close');
  }

  async confirm() {
    return await this.modalCtrl.dismiss(this.news, 'confirm');
  }

  async share(news: News) {
    // const device = await Device.getInfo();
    const { value } = await Share.canShare();
    if (value) {
      const shareRet = await Share.share({
        title: news.title,
        text: news.leadText,
        url: news.url,
        dialogTitle: news.title
      }).catch((onrejected) => { })
    } else {
      await this.shareFallback(news);
    }
  }

  async shareFallback(news: News) {
    return await new Promise(async (resolve) => {
      // The configuration, set the share options
      this.shareSocialShareOptions = {
        displayNames: true,
        config: [
          {
            twitter: {
              socialShareUrl: '👉 ' + news.title + ': ' + news.url,
              socialSharePopupWidth: 300,
              socialSharePopupHeight: 400
            }
          },
          {
            facebook: {
              socialShareUrl: '👉 ' + news.title + ': ' + news.url
            }
          },
          {
            whatsapp: {
              socialShareUrl: '👉 ' + news.title + ': ' + news.url
            }
          },
          {
            linkedin: {
              socialShareUrl: '👉 ' + news.title + ': ' + news.url
            }
          },
          {
            email: {
              socialShareUrl: '👉 ' + news.title + ': ' + news.url
            }
          },
          {
            copy: {
              socialShareUrl: '👉 ' + news.title + ': ' + news.url
            }
          }
        ]
      }
      this.showSocialShare = true;
      resolve(true);
    })
  }
}
