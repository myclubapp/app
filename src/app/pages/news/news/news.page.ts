import { Component, OnInit } from "@angular/core";
import {
  IonRouterOutlet,
  LoadingController,
  ModalController,
  ToastController,
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
// import { SwissunihockeyService } from 'src/app/services/backend/swissunihockey.service';

import { AuthService } from "src/app/services/auth.service";
import { FirebaseService } from "src/app/services/firebase.service";
import { User } from "firebase/auth";
import { NewsDetailPage } from "../news-detail/news-detail.page";
import { NewsService } from "src/app/services/firebase/news.service";
import { Observable, of, combineLatest, forkJoin, Subscription } from "rxjs";

import { switchMap, map, tap } from "rxjs/operators";
import { Club } from "src/app/models/club";
import { DocumentData } from "firebase/firestore";

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

  clubSubscription: Subscription;
  teamSubscription: Subscription;
  verbandSubscription: Subscription;

  constructor(
    private readonly newsService: NewsService,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalCtrl: ModalController
  ) {}

  ngOnInit() {
    // this.getUser();

    this.getNews();
    this.getClubNews();
    this.getTeamNews();

    //this.learnRXJS();
  }

  ngAfterViewInit(): void {

  }
  ngOnDestroy(): void {
    this.clubSubscription.unsubscribe();
    this.teamSubscription.unsubscribe()
    this.verbandSubscription.unsubscribe()
  }

 /* async getUser() {
    this.user = await this.authService.getUser();
  } */

  async getNews() {
    let newsListNew = [];
    this.verbandSubscription = this.authService.getUser$().pipe(
        switchMap((user)=> {
          return this.fbService.getUserClubRefs(user).pipe(
            map((result:any)=>{
              return result.map(club=>{
                console.log(`Read assigned clubs for emitting type > ${club.id}`);
                return club.id;
              })
            })
          )
        }),
        switchMap((allClubIds)=>{
          return combineLatest(
            allClubIds.map(clubId=>{
              return this.fbService.getClubRef(clubId)
            })
          )
        }),
        switchMap((allClubDetails)=>{
          return combineLatest(
            allClubDetails.map((clubDetail:Club)=>{
              return this.newsService.getNewsRef(clubDetail.type)
          }))
        }),
        map(([allClubNews])=>{
          return allClubNews;
        })
      ).subscribe(data=>{
        // console.log(data);
        newsListNew = data;
        newsListNew = newsListNew.sort(
          (a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        this.newsList = [
          ...new Set(newsListNew.concat(...this.newsList)),
        ];
      });
  }


  learnRXJS() {
    let newsListNew = [];
    /*
      mergeMap - creates an Observable immediately for any source item, all previous Observables are kept alive. (this was formerly known as flatMap).
      concatMap - waits for the previous Observable to complete before creating the next one
      switchMap - for any source item, completes the previous Observable and immediately creates the next one
      exhaustMap - map to inner observable, ignore other values until that observable completes
    */
    /*this.authService.getUser$().pipe(
      switchMap((user)=> {
        return this.fbService.getUserClubRefs(user).pipe(
          map((result:any)=>{
            return result.map(club=>{
              console.log(`> ${club.id}`);
              return club.id;
            })
          })
        )
      }),
      switchMap((allClubIds)=>{
        return combineLatest(
          allClubIds.map(clubId=>{
            return this.fbService.getClubRef(clubId)
        }))
      }),
      switchMap((allClubDetails)=>{
        return combineLatest(
          allClubDetails.map((clubDetail:Club)=>{
            return this.newsService.getNewsRef(clubDetail.type)
        }))
      }),
      map(([allClubNews])=>{
        return allClubNews;
      })
    ).subscribe(data=>{
      console.log(data);
      newsListNew = data;
      newsListNew = newsListNew.sort(
        (a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      this.newsList = [
        ...new Set(newsListNew.concat(...this.newsList)),
      ];
    });*/


   /*
    this.authService.getUser$().subscribe((user: User) => {
      this.fbService.getUserClubRefs(user).subscribe((clubs) => {
        for (let club of clubs) {
          console.log(`>> ${club.id}`);
          this.fbService.getClubRef(club.id).subscribe((clubDetail: Club) => {
            console.log("clubdetail");
            this.newsService.getNewsRef(clubDetail.type).subscribe((news) => {
              console.log(`news for club ${clubDetail.name} ${news.length}`);
              for (const newsEntry of news) {
                newsListNew.push(newsEntry);
              }
              newsListNew = newsListNew.sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              );
              this.newsList = [
                ...new Set(this.newsList.concat(...newsListNew)),
              ];
            });
          });
        }
      });
    });

    /*
  for (let club of clubs){
    console.log(`>> ${club.id}`);
    this.fbService.getClubRef(club.id).subscribe((clubDetail:Club)=>{
      console.log("clubdetail");
      this.newsService.getNewsRef(clubDetail.type).subscribe(news=>{
        console.log(`news for club ${clubDetail.name} ${news.length}`);
        for (const newsEntry of news) {
          newsListNew.push(newsEntry);
        }
        newsListNew = newsListNew.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        this.newsList = [...new Set(this.newsList.concat(...newsListNew))];
      
      })
    })
  }
*/
  }

  getClubNews() {
    let newsListNew = [];
    this.clubSubscription = this.authService.getUser$().pipe(
        switchMap((user)=> {
          return this.fbService.getUserClubRefs(user).pipe(
            map((result:any)=>{
              return result.map(club=>{
                console.log(`Read News for Club > ${club.id}`);
                return club.id;
              })
            })
          )
        }),
        switchMap((allClubIds)=>{
          return combineLatest(
            allClubIds.map((clubIds)=>{
              return this.newsService.getClubNewsRef(clubIds)
          }))
        }),
        map(([allClubNews])=>{
          return allClubNews;
        })
      ).subscribe((data:any)=>{
        // console.log(data);
        newsListNew = data;
        newsListNew = newsListNew.sort(
          (a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        this.newsList = [
          ...new Set(newsListNew.concat(...this.newsList)),
        ];
      });
    /*
    this.authService
      .getUser$()
      .pipe(
        // ->
        // GET Clubs
        switchMap((user: User) => this.fbService.getUserClubRefs(user)),
        // Loop Over Clubs
        switchMap((allClubs: any) =>
          combineLatest([
            allClubs.map((club) =>
              combineLatest([
                of(club),
                this.newsService.getClubNewsRef(club.id), // Array of news
              ])
            ),
          ])
        )
      )
      .subscribe((data: any) => {
        console.log(data);
        const newsListNew = [];
        for (const club of data) {
          // loop over news
          for (const news of club[1]) {
            // Club News
            newsListNew.push(news);
          }
        }
        this.newsList = this.newsList.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        this.newsList = [...new Set(this.newsList.concat(...newsListNew))];
      });
      */
  }

  getTeamNews() {
      let newsListNew = [];
      this.teamSubscription = this.authService.getUser$().pipe(
          switchMap((user)=> {
            return this.fbService.getUserTeamRefs(user).pipe(
              map((result:any)=>{
                return result.map(team=>{
                  console.log(`Read News for Team > ${team.id}`);
                  return team.id;
                })
              })
            )
          }),
          switchMap((allTeamIds)=>{
            return combineLatest(
              allTeamIds.map((teamId)=>{
                return this.newsService.getTeamNewsRef(teamId)
            }))
          }),
          map(([allClubNews])=>{
            return allClubNews;
          })
        ).subscribe((data:any)=>{
          // console.log(data);
          newsListNew = data;
          newsListNew = newsListNew.sort(
            (a, b) =>
              new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          this.newsList = [
            ...new Set(newsListNew.concat(...this.newsList)),
          ];
        });
    /*
    this.authService
      .getUser$()
      .pipe(
        // GET Teams
        switchMap((user: User) => this.fbService.getUserTeamRefs(user)),
        // Loop Over Teams
        switchMap((allTeams: any) =>
          combineLatest([
            allTeams.map((team) =>
              combineLatest([
                of(team),
                this.newsService.getTeamNewsRef(team.id), // Array of news
                this.fbService.getTeamRef(team.id), // team details
              ])
            ),
          ])
        )
      )
      .subscribe((data: any) => {
        console.log(data);
        const newsListNew = [];
        for (const team of data) {
          // loop over news
          for (const news of team[1]) {
            // console.log("team news");
            // console.log(news);
            newsListNew.push(news);
          }
        }
        this.newsList = this.newsList.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        this.newsList = [...new Set(this.newsList.concat(...newsListNew))];
      });
      */
  }

  async openModal(news: News) {
    // const presentingElement = await this.modalCtrl.getTop();
    const modal = await this.modalCtrl.create({
      component: NewsDetailPage,
      presentingElement: this.routerOutlet.nativeEl,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {
        data: news,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  async openAddNews() {}

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
