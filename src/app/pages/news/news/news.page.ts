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
import { Club } from 'src/app/models/club';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  skeleton = new Array(12);
  user: User;

  newsList: News[] = [];
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

    this.authService.getUser$().pipe(
      // GET Clubs
      switchMap((user:User) => this.fbService.getUserClubRefs(user)),
      // Loop Over Clubs  
      switchMap((allClubs:any) => combineLatest(
        allClubs.map((club) => combineLatest(
          of(club),
          this.fbService.getClubRef(club.id).pipe(
            switchMap((clubDetail) => this.newsService.getNewsRef(clubDetail.type)), // Array of news,
          )
        )))),
      )
      .subscribe(async (data:any)=>{
        console.log(data);

      
        let newsListNew = [];
        for (let club of data){ // loop over news

          for (let news of club[1]){ // Club News
            newsListNew.push(news);
          }
        }

        this.newsList = [...new Set(this.newsList.concat(...newsListNew))];
        this.newsList = this.newsList.sort((a,b)=>new Date(b.date).getTime()-new Date(a.date).getTime()); 
      });
  }

  getClubNews() {

    this.authService.getUser$().pipe(
      // GET Clubs
      switchMap((user:User) => this.fbService.getUserClubRefs(user)),
      // Loop Over Clubs  
      switchMap((allClubs:any) => combineLatest(
        allClubs.map((club) => combineLatest(
          of(club),
          this.newsService.getClubNewsRef(club.id), // Array of news
        ))))
      )
      .subscribe(async (data:any)=>{
//         console.log(data);
        let newsListNew = [];
        for (let club of data){ // loop over news
          for (let news of club[1]){ // Club News
            newsListNew.push(news);
          }
        }
        this.newsList = [...new Set(this.newsList.concat(...newsListNew))];
        this.newsList = this.newsList.sort((a,b)=>new Date(b.date).getTime()-new Date(a.date).getTime()); 
      });
  }
  getTeamNews() {
    this.authService.getUser$().pipe(
      // GET Teams
      switchMap((user:User) => this.fbService.getUserTeamRefs(user)),
      // Loop Over Teams  
      switchMap((allTeams:any) => combineLatest(
        allTeams.map((team) => combineLatest(
          of(team),
          this.newsService.getTeamNewsRef(team.id), // Array of news
          this.fbService.getTeamRef(team.id),       // team details
        )),
      )),
      )
      .subscribe(async (data:any)=>{
        // console.log(this.newsList);
        let newsListNew = [];
        for (let team of data){ // loop over news
          for (let news of team[1]){
            // console.log("team news");
            // console.log(news);
            newsListNew.push(news);
          }
        }
        this.newsList = [...new Set(this.newsList.concat(...newsListNew))];
        this.newsList = this.newsList.sort((a,b)=>new Date(b.date).getTime()-new Date(a.date).getTime()); 
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
