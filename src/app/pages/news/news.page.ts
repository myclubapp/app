import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { News } from 'src/app/models/news';
import { BackendService } from 'src/app/services/backend.service';
import { Browser } from '@capacitor/browser';
import { Share } from '@capacitor/share';
import { Device } from '@capacitor/device';


import {faTwitter, faFacebook, faWhatsapp, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faCopy} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  newsList: News[]
  loading = true;

// Social Share
shareSocialShareOptions: any;
showSocialShare = false;
faTwitter = faTwitter;
faFacebook = faFacebook;
faWhatsapp = faWhatsapp;
faLinkedin = faLinkedin;
faEnvelope = faEnvelope;
faCopy = faCopy;

  constructor(
    private backend: BackendService,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.getNews();
  }

  async openNews(news: News){
    
  }

  async openBrowser(url: string){
    await Browser.open({ url: url, presentationStyle: 'popover', windowName: '_self' });
  }
  async shareNews(news: News){
    
  }

  async getNews() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Loading news...',
      translucent: true,
      cssClass: 'custom-class custom-loading',

    });
    await loading.present();

  
    this.backend.getNews().subscribe((result: any) => {
      this.newsList = result?.data?.news as News[];
      if (result.loading == false){
        loading.dismiss();
      }
      
      // console.log(result);
      
      if (result.errors){
        this.toastController.create({
          message: JSON.stringify(result.errors[0].message),
          duration: 2000
        }).then(toast=>{
          toast.present();
        });
        
      }
      this.loading = result.loading;

    });
  }

  async share(news: News) {
    const device = await Device.getInfo();
      if (device.platform === 'web' && navigator && navigator['share']) {
        let shareRet = await Share.share({
          title: news.title,
          text: news.leadText,
          url: news.url,
          dialogTitle: news.title,
        }).catch((onrejected) => {});
      } else {
        await this.shareFallback(news);
      }
  }

  shareFallback(news: News) {
    return new Promise(async (resolve) => {
      // The configuration, set the share options
      this.shareSocialShareOptions = {
        displayNames: true,
        config: [
          {
            twitter: {
              socialShareUrl: '👉 ' + news.title + ': ' + news.url,
              socialSharePopupWidth: 300,
              socialSharePopupHeight: 400,
            },
          },
          {
            facebook: {
              socialShareUrl: '👉 ' + news.title + ': ' + news.url,
            },
          },
          {
            whatsapp: {
              socialShareUrl: '👉 ' + news.title + ': ' + news.url,
            },
          },
          {
            linkedin: {
              socialShareUrl: '👉 ' + news.title + ': ' + news.url,
            },
          },
          {
            email: {
              socialShareUrl: '👉 ' + news.title + ': ' + news.url,
            },
          },
          {
            copy: {
              socialShareUrl: '👉 ' + news.title + ': ' + news.url,
            },
          },
        ],
      };
      this.showSocialShare = true;
      resolve(true);
    });
  }

}
