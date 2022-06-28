import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { News } from 'src/app/models/news';

import { Share } from '@capacitor/share';
import { Device } from '@capacitor/device';

import {faTwitter, faFacebook, faWhatsapp, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faCopy} from '@fortawesome/free-solid-svg-icons';
import { SwissunihockeyService } from 'src/app/services/backend/swissunihockey.service';

import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { User } from 'firebase/auth';
import { NewsDetailPage } from '../news-detail/news-detail.page';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  newsList: News[]
  loading = true;
  skeleton = new Array(12);

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
    private authService: AuthService,
    private fbService: FirebaseService,
    private swissunihockey: SwissunihockeyService,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private routerOutlet: IonRouterOutlet,
    private modalCtrl: ModalController
  ) { 
  }

  ngOnInit() {
    //this.getNews();
  }
  ngAfterViewInit(): void {
    this.getNews();
  }

  async openModal(news: News) {
    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalCtrl.create({
      component: NewsDetailPage,
      presentingElement: this.routerOutlet.nativeEl,
      swipeToClose: true,
      showBackdrop: true,
      componentProps: {
        data: news
      }
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
    
    }
  }

  async openAddNews(){

  }


  
  async getNews() {

    const user: User = await this.authService.getUser();
    // this.clubList$ = 
  this.fbService.getClubRefs(user).subscribe(async (data: any)=>{
    
    for (const club of data) {
      this.fbService.getClub(club.id).subscribe(clubData=>{
        // console.log(clubData.type);
        if ( clubData.type === 'swissunihockey' ) {
          this.getSUNews();
        }
      });
    }


  });

  }

  getSUNews(){
    this.swissunihockey.getNews().subscribe((result: any) => {
      this.newsList = result?.data?.news as News[];
      if (result.loading == false){
        // loading.dismiss();
      }
      
       //console.log("SANDRO" + result);
      
      if (result.errors){
        this.toastController.create({
          message: JSON.stringify(result.errors[0].message),
          duration: 2000
        }).then(toast=>{
          toast.present();
        });
        
      }
      this.loading = result.loading;

    }, (error: any)=>{
      this.toastController.create({
        message: JSON.stringify(error.message),
        duration: 2000
      }).then(toast=>{
        toast.present();
      });
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
