import { Component, OnInit } from "@angular/core";
import {
  IonRouterOutlet,
  LoadingController,
  ModalController,
  MenuController,
  ToastController,
  AnimationController,
} from "@ionic/angular";
import { News } from "src/app/models/news";

import { Share } from "@capacitor/share";
import { Device } from "@capacitor/device";

import {
  faTwitter,
  faFacebook,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCopy } from "@fortawesome/free-solid-svg-icons";

import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { User } from "@angular/fire/auth";
import { NewsDetailPage } from "../news-detail/news-detail.page";
import { NewsService } from "src/app/services/firebase/news.service";
import { Observable, catchError, combineLatest, concat, concatAll, concatMap, finalize, forkJoin, from, map, merge, mergeMap, of, switchMap, take, tap, timeout, toArray } from "rxjs";
import { Club } from "src/app/models/club";

@Component({
  selector: "app-news",
  templateUrl: "./news.page.html",
  styleUrls: ["./news.page.scss"],
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
    private readonly newsService: NewsService,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalCtrl: ModalController,
    private readonly menuCtrl: MenuController,
    public animationCtrl: AnimationController
  ) {
    this.menuCtrl.enable(true, "menu");
  }
  
  ngOnInit() {
   
  const clubNewsList: News[] = [];
  const teamNewsList: News[] = [];
  const verbandNewsList: News[] = [];

// Club observable
const clubNews$ = this.authService.getUser$().pipe(
    switchMap(user => this.fbService.getUserClubRefs(user)),
    concatMap(clubsArray => from(clubsArray)),
    concatMap(club => 
        this.newsService.getClubNewsRef(club.id).pipe(
            catchError(error => {
                console.error('Error fetching club news:', error);
                return of([]);
            })
        )
    ),
    tap(news => news.forEach(n => clubNewsList.push(n))),
    finalize(() => console.log("Club news fetching completed"))
);

// Verband observable
const verbandNews$ = this.authService.getUser$().pipe(
  switchMap(user => this.fbService.getUserClubRefs(user)),
  concatMap(clubsArray => from(clubsArray)),
  switchMap(club => this.fbService.getClubRef(club.id)),
  concatMap(clubDetail => 
      this.newsService.getNewsRef(clubDetail.type).pipe(
          catchError(error => {
              console.error('Error fetching verband news:', error);
              return of([]);
          })
      )
  ),
  tap(news => news.forEach(n => verbandNewsList.push(n))),
  finalize(() => console.log("Verband news fetching completed"))
);

// Team observable
const teamNews$ = this.authService.getUser$().pipe(
    switchMap(user => this.fbService.getUserTeamRefs(user)),
    concatMap(teamsArray => from(teamsArray)),
    concatMap(team => 
        this.newsService.getTeamNewsRef(team.id).pipe(
            catchError(error => {
                console.error('Error fetching team news:', error);
                return of([]);
            })
        )
    ),
    tap(news => news.forEach(n => teamNewsList.push(n))),
    finalize(() => console.log("Team news fetching completed"))
);

// Use combineLatest to get results when both observables have emitted
combineLatest([clubNews$, teamNews$, verbandNews$]).subscribe({
    next: () => {
      this.newsList = [...clubNewsList, ...teamNewsList, ...verbandNewsList].sort((a, b):any => {
          // Assuming date is a string in 'YYYY-MM-DD' format or a similar directly comparable format.
          return new Date(a.date).getTime() < new Date(b.date).getTime();
      });
    
      this.newsList$ = of(this.newsList);
      console.log("Combined news list created");
    },
    error: err => console.error('Error in the observable chain:', err)
});


  }

  ngAfterViewInit(): void {}
  ngOnDestroy(): void {
  }
  /*
  getGameReports() {
    let reportListNew = [];
    this.gameReportSubscription = this.authService
      .getUser$()
      .pipe(
        switchMap((user) => {
          return this.fbService.getUserTeamRefs(user).pipe(
            map((result: any) => {
              return result.map((team) => {
                // console.log(`Read News for Team > ${team.id}`);
                return team.id;
              });
            })
          );
        }),
        switchMap((allTeamIds) => {
          return combineLatest(
            allTeamIds.map((teamId) => {
              return this.newsService.getGameReports(teamId);
            })
          );
        }),
        map(([allGameReports]) => {
          return allGameReports;
        })
      )
      .subscribe((data: any) => {
        // console.log(data);
        reportListNew = data;
        this.newsList = [...new Set(reportListNew.concat(...this.newsList))];
        this.newsList = this.newsList.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        // this.newsList = [...new Set(reportListNew.concat(...this.newsList))];
      });
  }
 */
  async openModal(news: News) {
    // const presentingElement = await this.modalCtrl.getTop();

    /*const enterAnimation = (baseEl: any) => {
      const root = baseEl.shadowRoot;

      const backdropAnimation = this.animationCtrl
        .create()
        .addElement(root.querySelector("ion-backdrop")!)
        .fromTo("opacity", "0.01", "var(--backdrop-opacity)");

      const wrapperAnimation = this.animationCtrl
        .create()
        .addElement(root.querySelector(".modal-wrapper")!)
        .keyframes([
          { offset: 0, opacity: "0", transform: "scale(0)" },
          { offset: 1, opacity: "0.99", transform: "scale(1)" },
        ]);

      return this.animationCtrl
        .create()
        .addElement(baseEl)
        .easing("ease-out")
        .duration(150)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    };

    const leaveAnimation = (baseEl: any) => {
      return enterAnimation(baseEl).direction("reverse");
    };*/

    const modal = await this.modalCtrl.create({
      component: NewsDetailPage,
      presentingElement: this.routerOutlet.nativeEl,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: news,
      },
      //   enterAnimation,
      //   leaveAnimation,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async openAddNews() {

  }

  async share(news: News) {
    const device = await Device.getInfo();
    if (device.platform === "web" && navigator && navigator.share) {
      const shareRet = await Share.share({
        title: news.title,
        text: news.leadText,
        url: news.url,
        dialogTitle: news.title,
      }).catch((onrejected) => {});
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
              socialShareUrl: "👉 " + news.title + ": " + news.url,
              socialSharePopupWidth: 300,
              socialSharePopupHeight: 400,
            },
          },
          {
            facebook: {
              socialShareUrl: "👉 " + news.title + ": " + news.url,
            },
          },
          {
            whatsapp: {
              socialShareUrl: "👉 " + news.title + ": " + news.url,
            },
          },
          {
            linkedin: {
              socialShareUrl: "👉 " + news.title + ": " + news.url,
            },
          },
          {
            email: {
              socialShareUrl: "👉 " + news.title + ": " + news.url,
            },
          },
          {
            copy: {
              socialShareUrl: "👉 " + news.title + ": " + news.url,
            },
          },
        ],
      };
      this.showSocialShare = true;
      resolve(true);
    });
  }
}
