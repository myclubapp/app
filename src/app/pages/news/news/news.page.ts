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
import { NewsService } from 'src/app/services/firebase/news.service';
import { Observable } from 'rxjs';

import { of,combineLatest } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  skeleton = new Array(12);
  user: User;

  newsList: News[];
  newsList$: Observable<News[]>;
  

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
    private newsService: NewsService,
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
    this.getUser();
    this.getNews();
    this.getClubNews();
    this.getTeamNews();
  }
  ngAfterViewInit(): void {
  }

  async getUser(){
    this.user = await this.authService.getUser();
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
      this.fbService.getClubRef(club.id).subscribe(clubData=>{
        // console.log(clubData.type);
        if ( clubData.type === 'swissunihockey' ) {
            this.newsList$ = this.newsService.getNewsRef(clubData.type);
            // this.newsList$ = this.newsService.getClubNewsRef(clubData.type);
        }
      });
    }
  });

  }


  getClubNews() {

    this.authService.getUser$().pipe(
      // GET Clubs
      switchMap((user:User) => this.fbService.getClubRefs(user)),
      // Loop Over Clubs  
      switchMap((allClubs:any) => combineLatest(
        allClubs.map((club) => combineLatest(
          of(club),
          this.newsService.getClubNewsRef(club.id),
          this.fbService.getClubRef(club.id),  
        )),
      )),
      )
      .subscribe(async (data:any)=>{
        console.log(data);

        let newsListNew = [];
        for (let news of data){ // loop over news
            newsListNew.push(news);
          }

        this.newsList = [...new Set([].concat(...newsListNew))];
        // this.newsList = this.newsList.sort((a,b)=>a.dateTime.toMillis()-b.dateTime.toMillis()); // Not needed -> via service
      });
  }
  getTeamNews() {
    this.authService.getUser$().pipe(
      // GET Teams
      switchMap((user:User) => this.fbService.getTeamRefs(user)),
      // Loop Over Teams  
      switchMap((allTeams:any) => combineLatest(
        allTeams.map((team) => combineLatest(
          of(team),
          this.newsService.getTeamNewsRef(team.id),
          this.fbService.getTeamRef(team.id),  
        )),
      )),
      )
      .subscribe(async (data:any)=>{
        console.log(data);

        let newsListNew = [];
        for (let news of data){ // loop over news
            newsListNew.push(news);
          }

        this.newsList = [...new Set([].concat(...newsListNew))];
        //this.newsList = this.newsList.sort((a,b)=>a.date-b.date); 
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
