import { Component, OnInit } from "@angular/core";
import {
  IonRouterOutlet,
  LoadingController,
  ModalController,
  MenuController,
  ToastController,
  AnimationController,
  AlertController,
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
import { User, user } from "@angular/fire/auth";
import { NewsDetailPage } from "../news-detail/news-detail.page";
import { NewsService } from "src/app/services/firebase/news.service";
import { filter } from 'rxjs/operators';
import { Observable, Subscription, catchError, combineLatest, concat, concatAll, concatMap, defaultIfEmpty, finalize, forkJoin, from, map, merge, mergeMap, of, shareReplay, switchMap, take, tap, timeout, toArray } from "rxjs";
import { Club } from "src/app/models/club";
import { Team } from "src/app/models/team";

@Component({
  selector: "app-news",
  templateUrl: "./news.page.html",
  styleUrls: ["./news.page.scss"],
})
export class NewsPage implements OnInit {
  skeleton = new Array(12);
  user: User;

  filterList: any[] = [];
  filterValue: string = "";

  // Social Share
  shareSocialShareOptions: any;
  showSocialShare = false;

  faTwitter: any = faTwitter;
  faFacebook: any = faFacebook;
  faWhatsapp: any = faWhatsapp;
  faLinkedin: any = faLinkedin;
  faEnvelope: any = faEnvelope;
  faCopy: any = faCopy;

  private subscription: Subscription;
  private subscriptionFilter: Subscription;
  
  newsList: News[] = [];
  newsList$: Observable<News[]>;

  constructor(
    private readonly newsService: NewsService,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    private readonly routerOutlet: IonRouterOutlet,
    private readonly modalCtrl: ModalController,
    private readonly alertCtrl: AlertController,
    private readonly menuCtrl: MenuController,
    public animationCtrl: AnimationController
  ) {
    this.menuCtrl.enable(true, "menu");
  }
  
  ngOnInit() {
   
  const clubNewsList: News[] = [];
  const teamNewsList: News[] = [];
  const verbandNewsList: News[] = [];

  clubNewsList.length = 0;
  teamNewsList.length = 0;
  verbandNewsList.length = 0;

  // Club observable
  const clubNews$ = this.authService.getUser$().pipe(
      take(1),
      switchMap(user => this.fbService.getUserClubRefs(user)),
      concatMap(clubsArray => from(clubsArray)),
      tap(club=>console.log(club.id)),
      concatMap(club => 
          this.newsService.getClubNewsRef(club.id).pipe(
            take(1), 
            map(newsArray => newsArray.map(newsItem => ({ 
              ...newsItem, 
              filterable: club.id 
            }))),
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
    take(1),
    switchMap(user => this.fbService.getUserClubRefs(user)),
    concatMap(clubsArray => from(clubsArray)),
    switchMap(club => this.fbService.getClubRef(club.id)),
    tap(clubDetail=>console.log(clubDetail.type)),
    concatMap(clubDetail => 
        this.newsService.getNewsRef(clubDetail.type).pipe(
          take(1), 
          map(newsArray => newsArray.map(newsItem => ({ 
            ...newsItem, 
            filterable: clubDetail.type 
          }))),
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
      take(1),
      switchMap(user => this.fbService.getUserTeamRefs(user)),
      concatMap(teamsArray => from(teamsArray)),
      tap(team=>console.log(team.id)),
      concatMap(team => 
          this.newsService.getTeamNewsRef(team.id).pipe(
            take(1), 
            map(newsArray => newsArray.map(newsItem => ({ 
              ...newsItem, 
              filterable: team.id 
            }))),
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
    this.subscriptionFilter = combineLatest([clubNews$, teamNews$, verbandNews$]).subscribe({
        next: () => {
          this.newsList = [...this.newsList, ...clubNewsList, ...teamNewsList, ...verbandNewsList].sort((a, b):any => {
              // Assuming date is a string in 'YYYY-MM-DD' format or a similar directly comparable format.
              return new Date(a.date).getTime() < new Date(b.date).getTime();
          });

          this.newsList = this.newsList.filter((news, index, self) => 
              index === self.findIndex((t) => (t.id === news.id))
          );
        
          this.newsList$ = of(this.newsList);
          console.log("Combined news list created");
        },
        error: err => console.error('Error in the observable chain:', err)
    });


  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
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

  async openFilter(ev: Event){
    let filterList = [];

    const clubs$ = this.authService.getUser$().pipe(
      take(1),
      switchMap(user => this.fbService.getUserClubRefs(user).pipe(take(1))),  
      concatMap(clubArray => from(clubArray)),
      tap((club:Club)=>console.log(club.id)),
      concatMap(club => 
        this.fbService.getClubRef(club.id).pipe(
          take(1),
          defaultIfEmpty(null),  // gibt null zurück, wenn kein Wert von getClubRef gesendet wird
          map(result => [result]),
          catchError(error => {
            console.error('Error fetching ClubDetail:', error);
            return of([]);
          })
        )
      ),
      tap(clubList => clubList.forEach(club => {
        filterList.push({id: club.type, name: club.type}); // Verband Infos
        return filterList.push(club);
      })),
      finalize(() => console.log("Get Club completed"))
  );

  const teams$ = this.authService.getUser$().pipe(
    take(1),
    switchMap(user => this.fbService.getUserTeamRefs(user).pipe(take(1))),
    concatMap(teamsArray =>  from(teamsArray)),
    tap((team:Team)=>console.log(team.id)),
    concatMap(team => 
      this.fbService.getTeamRef(team.id).pipe(
        take(1),
        defaultIfEmpty(null),  // gibt null zurück, wenn kein Wert von getClubRef gesendet wird
        map(result => [result]),
        catchError(error => {
          console.error('Error fetching TeamDetail:', error);
          return of([]);
      })
    )
    ),
    tap(teamList => teamList.forEach(team => filterList.push(team))),
    finalize(() => console.log("Get Teams completed"))
  );

  this.subscription = forkJoin([teams$, clubs$]).subscribe({
    next: () => {
      const alertInputs = [];
      for (const item of filterList){
        alertInputs.push({
          label: item.name,
          type: 'radio',
          checked: item.id == this.filterValue,
          value: item.id,
        });
      }
    
      this.alertCtrl.create({
        header: 'News filtern',
        message: 'Nach Verein oder Teams filtern.',
       // subHeader: 'Nach Verein oder Teams filtern.',
        inputs: alertInputs,
        buttons: [
          { text: "OK",
            role: "confirm",
            handler: (value)=>{
              console.log(value)
              this.filterValue = value;
              this.newsList$ = of(this.newsList.filter((news: any) => news.filterable == value));
            } 
          },
          { text: "abbrechen",
            role: "cancel",
            handler: (value)=>{
              console.log(value);
              this.filterValue = "";
              this.newsList$ = of(this.newsList);
            } 
          }
        ],
        htmlAttributes: { 'aria-label': 'alert dialog' },
      }).then(alert => {
        alert.present();
      });
    },
    error: err => console.error('Error in the observable chain:', err)
  });

/*
  this.subscriptionFilter = forkJoin([teams$, clubs$]).pipe(
    map(([teams, clubs]) => [...teams, ...clubs]),
    map(filterList => {
      filterList.sort((a, b) => a.name < b.name ? -1 : 1);
      return filterList.filter((item, index, self) => 
        index === self.findIndex(t => t.id === item.id)
      );
    }),
    tap(filteredList => {
      const alertInputs = [];
      for (const item of filteredList){
        alertInputs.push({
          label: item.name,
          type: 'radio',
          value: item.id,
        });
      }
    
      this.alertCtrl.create({
        message: 'News Filtern.',
        inputs: alertInputs,
        buttons: [
          { text: "OK" },
          { text: "abbrechen" }
        ],
        htmlAttributes: { 'aria-label': 'alert dialog' },
      }).then(alert => {
        alert.present();
      });
    })
  ).subscribe({
    error: err => console.error('Error in the observable chain:', err)
  });
*/
  /*


  // Use forkJoin to get results when both observables have completed
  this.subscriptionFilter = combineLatest([teams$, clubs$]).subscribe({
    next: () => {
      console.log("ONLY 1 TIME")
      
      filterList = filterList.sort((a, b):any => {
        return a.name < b.name;
      });    
      
      filterList = filterList.filter((item, index, self) => 
      index === self.findIndex((t) => (t.id === item.id))
      );
      console.log(filterList);

      const alertInputs = [];
      for (const item of filterList){
        console.log(item)
        alertInputs.push(
          {
            label: item.name,
            type: 'radio',
            value: item.id,
          }
        )
      }
  
      this.alertCtrl.create({
        message: 'News Filtern.',
        inputs: alertInputs,
        buttons: [
          {
            text: "OK"
          },
          {
            text: "abbrechen"
          }
        ],
        htmlAttributes: {
          'aria-label': 'alert dialog',
        },
      }).then(alert=>{
        alert.present();
      });
  
      
    },
    error: err => console.error('Error in the observable chain:', err)
  });
*/
/*
    // console.log(ev);
    const filterList = [];

    const clubs$ =  this.authService.getUser$().pipe(
      switchMap(user => this.fbService.getUserClubRefs(user)),
      concatMap(clubsArray => from(clubsArray)),
      switchMap(club => this.fbService.getClubRef(club.id).pipe(take(1))),
      tap(clubDetail=>{
        filterList.push(clubDetail)
      }),
    finalize(() => console.log("Get clubs completed")));
    const teams$ =  this.authService.getUser$().pipe(
      switchMap(user => this.fbService.getUserTeamRefs(user)),
      concatMap(teamArray => from(teamArray)),
      concatMap(team => this.fbService.getTeamRef(team.id).pipe(take(1))),
      tap(teamDetail=>{
        filterList.push(teamDetail)
      }),
      finalize(() => console.log("Get clubs completed")));

// Use combineLatest to get results when both observables have emitted
this.subscriptionFilter = combineLatest([teams$, clubs$]).subscribe({
  next: () => {
    this.filterList = [...this.filterList, ...filterList].sort((a, b):any => {
        // Assuming date is a string in 'YYYY-MM-DD' format or a similar directly comparable format.
        return a.name < b.name;
    });    
    this.filterList = this.filterList.filter((item, index, self) => 
    index === self.findIndex((t) => (t.id === item.id))
);
console.log(this.filterList)
   
    const alertInputs = [];
    for (const item of this.filterList){
      console.log(item)
      alertInputs.push(
        {
          label: item.name,
          type: 'radio',
          value: item.id,
        }
      )
    }

    this.alertCtrl.create({
      message: 'This is an alert with custom aria attributes.',
      inputs: alertInputs,
      buttons: [
        {
          text: "OK"
        },
        {
          text: "abbrechen"
        }
      ],
      htmlAttributes: {
        'aria-label': 'alert dialog',
      },
    }).then(alert=>{
      alert.present();
    });

    //alert.present();
   
  },
  error: err => console.error('Error in the observable chain:', err)
});
*/
  

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
