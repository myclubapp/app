import { Component, OnInit, Optional } from "@angular/core";
import {
  IonRouterOutlet,
  ModalController,
  MenuController,
  AnimationController,
  AlertController,
} from "@ionic/angular";
import { Router } from "@angular/router";
// import { ActivatedRoute } from '@angular/router';
import { News } from "src/app/models/news";
import { Share } from "@capacitor/share";

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
import {
  Observable,
  catchError,
  combineLatest,
  map,
  of,
  switchMap,
  take,
  tap,
} from "rxjs";
import { Club } from "src/app/models/club";
import { TranslateService } from "@ngx-translate/core";
import { NotificationPage } from "../notification/notification.page";
import { NotificationService } from "src/app/services/firebase/notification.service";
import { Profile } from "src/app/models/user";
import { UserProfileService } from "src/app/services/firebase/user-profile.service";
import { CreateNewsPage } from "../create-news/create-news.page";

@Component({
  selector: "app-news",
  templateUrl: "./news.page.html",
  styleUrls: ["./news.page.scss"],
  standalone: false,
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

  children: Profile[] = [];

  notifications$: Observable<any[]>;

  newsList$: Observable<News[]>;

  clubAdminList$: Observable<Club[]>;

  constructor(
    private readonly notificationService: NotificationService,
    private readonly newsService: NewsService,
    // private readonly sanitization: DomSanitizer,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    @Optional() private readonly routerOutlet: IonRouterOutlet,
    private readonly modalCtrl: ModalController,
    private readonly alertCtrl: AlertController,
    private readonly menuCtrl: MenuController,
    public animationCtrl: AnimationController,
    private translate: TranslateService,
    private userProfileService: UserProfileService,
    // private route: ActivatedRoute,
    private router: Router,
  ) {
    this.menuCtrl.enable(true, "menu");

    /* if (this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state.type === "news") {
      const pushData = this.router.getCurrentNavigation().extras.state;
      // It's a Push Message
      let news: News = {
        id: pushData.id,
        title: pushData.title,
        slug: pushData.slug,
        image: pushData.image,
        leadText: pushData.leadText,
        author: pushData.author,
        authorImage: pushData.authorImage,
        date: pushData.date,
        htmlText: pushData.htmlText,
        text: pushData.text,
        url: pushData.url,
        filterable: pushData.filterable,
        tags: pushData.tags || []
      };
      this.openModal(news);
    }
    if (this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state.type === "clubNews") {
      const pushData = this.router.getCurrentNavigation().extras.state;
      // It's a Push Message
      let news: News = {
        id: pushData.id,
        title: pushData.title,
        slug: pushData.slug,
        image: pushData.image,
        leadText: pushData.leadText,
        author: pushData.author,
        authorImage: pushData.authorImage,
        date: pushData.date,
        htmlText: pushData.htmlText,
        text: pushData.text,
        url: pushData.url,
        filterable: pushData.filterable,
        tags: pushData.tags || []
      };
      this.openModal(news); 
    }*/
  }

  ngOnInit() {
    this.newsList$ = this.getNews();
    this.notifications$ = this.getNotifications();
    this.clubAdminList$ = this.fbService.getClubAdminList();

    /*this.route.snapshot.data['news'].subscribe((news) => {
      console.log(news)
    });*/

    const navigation = this.router.currentNavigation();
    if (navigation) {
      const state = navigation.extras.state;
      if (state) {
        console.log(state); // 'someValue'
      } else {
        console.log("No state provided");
      }
    }
  }

  ngOnDestroy(): void {}

  getNews() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        if (!user) throw new Error("User not found");
        this.user = user;
      }),
      switchMap((user) => {
        if (!user) return of([]);
        // Get user's teams and children's teams
        return combineLatest([
          this.fbService.getUserClubRefs(user),
          this.userProfileService.getChildren(user.uid).pipe(
            tap((children) => {
              this.children = children;
            }),
            switchMap((children: Profile[]) =>
              children.length > 0
                ? combineLatest(
                    children.map((child) => {
                      // Create a User-like object with uid from child.id
                      const childUser = { uid: child.id } as User;
                      console.log("Child User:", childUser);
                      return this.fbService.getUserClubRefs(childUser);
                    }),
                  )
                : of([]),
            ),
            map((childrenClubs) => childrenClubs.flat()),
            tap((clubs) => console.log("Children Clubs:", clubs)),
            catchError((error) => {
              console.error("Error fetching children clubs:", error);
              return of([]);
            }),
          ),
        ]).pipe(
          map(([userClubs, childrenClubs]) => {
            const allClubs = [...userClubs, ...childrenClubs];
            return allClubs.filter(
              (club, index, self) =>
                index === self.findIndex((c) => c.id === club.id),
            );
          }),
        );
      }),
      switchMap((clubs) => {
        if (!clubs.length) {
          console.log("No clubs associated with the user.");
          /*this.router.navigateByUrl('/onboarding-club').then(navOnboardingClub=>{
            if (navOnboardingClub) {
              console.log('Navigation success to onboarding Club Page');
            } else {
              console.error('Navigation ERROR to onboarding Club Page');
            }
          })*/
          return of([]);
        }

        // Fetch detailed information for each club
        return combineLatest(
          clubs.map((club) =>
            this.fbService.getClubRef(club.id).pipe(
              switchMap((clubDetail) => {
                if (!clubDetail) {
                  console.log(`No details found for club ID: ${club.id}`);
                  return of({ clubNews: [], typeNews: [] });
                }

                const newsByClub$ = this.newsService
                  .getClubNewsRef(club.id)
                  .pipe(
                    catchError((error) => {
                      console.error(
                        `Error fetching news for club ID ${club.id}:`,
                        error,
                      );
                      return of([]);
                    }),
                  );

                const newsByType$ = this.newsService
                  .getNewsRef(clubDetail.type)
                  .pipe(
                    catchError((error) => {
                      console.error(
                        `Error fetching news for type ${clubDetail.type}:`,
                        error,
                      );
                      return of([]);
                    }),
                  );

                return combineLatest([newsByClub$, newsByType$]).pipe(
                  map(([clubNews, typeNews]) => ({ clubNews, typeNews })),
                  tap((newsArrays) => {
                    console.log("News Arrays:", newsArrays);
                  }),
                );
              }),
            ),
          ),
        );
      }),
      map((newsArrays) => {
        const allNews = [];

        // Aggregate and flatten the news items
        newsArrays.forEach(({ clubNews, typeNews }) => {
          /*typeNews.map(news=>{
            news.image = this.sanitization.bypassSecurityTrustResourceUrl(news.image);
          })*/
          allNews.push(...clubNews);
          allNews.push(...typeNews);
        });

        // Remove duplicates and sort
        return allNews
          .filter(
            (news, index, self) =>
              index === self.findIndex((t) => t.id === news.id),
          )
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
          );
      }),
      catchError((error) => {
        console.error("Error fetching news:", error);
        return of([]);
      }),
    );
  }
  getNotifications(): Observable<any[]> {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        if (!user) throw new Error("User not found");
      }),
      switchMap((user) => {
        return this.notificationService.getNotifications(user);
      }),
    );
  }

  isClubAdmin(clubAdminList: any[], clubId: string): boolean {
    return this.fbService.isClubAdmin(clubAdminList, clubId);
  }

  async openNotification() {
    const modal = await this.modalCtrl.create({
      component: NotificationPage,
      presentingElement: this.routerOutlet.nativeEl,
      canDismiss: true,
      showBackdrop: true,
      componentProps: {},
      //   enterAnimation,
      //   leaveAnimation,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
      console.log("Notification", data);
      // console.log("TYPE:  " + data.type);
      if (data.type === "news" || data.type === "clubNews") {
        this.openModal(data);
      } else {
      }
    }
  }

  async openModal(news: News) {
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

  async share(news: News) {
    // const device = await Device.getInfo();
    const { value } = await Share.canShare();

    if (value) {
      // if (device.platform === "web" && navigator && navigator.share) {
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

  async openAddNews() {
    const modal = await this.modalCtrl.create({
      component: CreateNewsPage,
      presentingElement: this.routerOutlet.nativeEl,
      canDismiss: true,
      showBackdrop: true,
    });
    await modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === "confirm") {
      // Optional: News-Liste neu laden
    }
  }
}
