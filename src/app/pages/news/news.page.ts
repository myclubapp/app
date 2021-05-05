import {AuthService} from 'src/app/services/auth.service';
import {NewsCreatePage} from './../news-create/news-create.page';
import {WordpressService} from './../../services/news/wordpress.service';
import {TeamService} from './../../services/club/team.service';
import {NewsDetailPage} from '../news-detail/news-detail.page';
import {IonRouterOutlet, ModalController, Platform} from '@ionic/angular';
import {SwissunihockeyNewsService} from './../../services/news/swissunihockey-news.service';

import {Component, OnInit} from '@angular/core';
import {Plugins, Browser} from '@capacitor/core';
const {Share} = Plugins;

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  newsList: Array<any> = [];
  skeletonList = ['', '', '', '', '', ''];
  // Social Share Web Component
  shareSocialShareOptions: any;
  showSocialShare = false;
  public showButton: boolean = false;
  constructor(
    public newsSwissunihockey: SwissunihockeyNewsService,
    public modalController: ModalController,
    public plt: Platform,
    private teamService: TeamService,
    private routerOutlet: IonRouterOutlet,
    private wordpressService: WordpressService,
    private authService: AuthService
  ) {
    this.loadNews();
    this.authService.checkUserhasTeamAdmin().then((status) => {
      //console.log(status);
      //this.showButton = status;
    });
  }
  ngOnInit() {}

  async openCreate() {
    //console.log("clicked");
    const modal = await this.modalController.create({
      component: NewsCreatePage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
  }

  loadNews() {
    this.teamService.getClubList().then((clubList) => {
      for (let club of clubList) {
        if (club.type == 'swissunihockey') {
          this.newsSwissunihockey.getNews().subscribe((data: any) => {
            for (let element of data.data) {
              this.newsList.push(element);
              //sort by date
              this.newsList = this.newsList.sort(function (a, b) {
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                //console.log( b.date + " / " + a.date);
                return new Date(b.date).getTime() - new Date(a.date).getTime();
              });
            }
            this.skeletonList = [];
          });
        }

        if (club.wordpress) {
          //console.log("club has wordpress news");
          this.wordpressService.getNews(club.wordpress, club.name).subscribe((data: any) => {
            for (let element of data.data) {
              this.newsList.push(element);
              //sort by date
              this.newsList = this.newsList.sort(function (a, b) {
                //console.log( b.date + " / " + a.date);
                return new Date(b.date).getTime() - new Date(a.date).getTime();
              });
            }

            this.skeletonList = [];
          });
        }
      }
    });
  }

  doRefresh(event) {
    this.skeletonList = ['', '', '', '', '', ''];
    this.newsList = [];
    this.loadNews();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 500);
  }

  async openDetail(news) {
    //console.log("clicked");
    const modal = await this.modalController.create({
      component: NewsDetailPage,
      componentProps: {
        news: news,
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    console.log(data);
  }

  async share(news) {
    console.log(news);
    if (this.plt.is('mobile') && navigator && navigator['share']) {
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

  shareFallback(news) {
    return new Promise(async (resolve) => {
      const shareUrl = news.url;

      // The configuration, set the share options
      this.shareSocialShareOptions = {
        displayNames: true,
        config: [
          {
            twitter: {
              socialShareUrl: shareUrl,
              socialSharePopupWidth: 300,
              socialSharePopupHeight: 400,
            },
          },
          {
            facebook: {
              socialShareUrl: shareUrl,
            },
          },
          {
            whatsapp: {
              socialShareUrl: shareUrl,
            },
          },
          {
            linkedin: {
              socialShareUrl: shareUrl,
            },
          },
          {
            email: {
              socialShareBody: shareUrl,
            },
          },
          {
            copy: {
              socialShareUrl: shareUrl,
            },
          },
        ],
      };
      this.showSocialShare = true;
      resolve(true);
    });
  }
}
