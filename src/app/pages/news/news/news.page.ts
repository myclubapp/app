import { Component, OnInit, Optional, ChangeDetectorRef } from "@angular/core";
import {
  IonRouterOutlet,
  ModalController,
  MenuController,
  AnimationController,
  AlertController,
  ToastController,
} from "@ionic/angular";
import { Router } from "@angular/router";
// import { ActivatedRoute } from '@angular/router';
import { News } from "src/app/models/news";
import { Share } from "@capacitor/share";
import { Preferences } from "@capacitor/preferences";

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
  shareReplay,
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
import { ChampionshipService } from "src/app/services/firebase/championship.service";
import { Game } from "src/app/models/game";
import { ChampionshipDetailPage } from "src/app/pages/championship/championship-detail/championship-detail.page";
import { BehaviorSubject, Subject } from "rxjs";

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
  filteredNewsList$: Observable<(News & { source?: "verein" | "verband" })[]>;

  clubAdminList$: Observable<Club[]>;
  clubList$: Observable<Club[]>;

  clubGames$: Observable<Game[]>;
  showGamePreview: boolean = false;
  hasChampionshipModule: boolean = false;

  currentSegment: "all" | "verein" | "verband" = "all";
  private segmentFilter$ = new BehaviorSubject<"all" | "verein" | "verband">(
    "all",
  );

  constructor(
    private readonly notificationService: NotificationService,
    private readonly newsService: NewsService,
    // private readonly sanitization: DomSanitizer,
    private readonly authService: AuthService,
    private readonly fbService: FirebaseService,
    @Optional() private readonly routerOutlet: IonRouterOutlet,
    private readonly modalCtrl: ModalController,
    private readonly alertCtrl: AlertController,
    private readonly toastCtrl: ToastController,
    private readonly menuCtrl: MenuController,
    public animationCtrl: AnimationController,
    private translate: TranslateService,
    private userProfileService: UserProfileService,
    private readonly championshipService: ChampionshipService,
    // private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
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

  async ngOnInit() {
    // Lade gespeicherte Filter-Einstellung
    await this.loadSavedFilter();

    // Lade Game-Preview Einstellung aus dem User-Profil
    await this.loadGamePreviewSetting();

    this.newsList$ = this.getNews().pipe(shareReplay(1));
    this.filteredNewsList$ = combineLatest([
      this.newsList$ as Observable<
        (News & { source?: "verein" | "verband" })[]
      >,
      this.segmentFilter$,
    ]).pipe(
      map(([list, filter]) => {
        if (filter === "all") return list;
        return list.filter((n) => n.source === filter);
      }),
    );
    this.notifications$ = this.getNotifications().pipe(shareReplay(1));
    this.clubAdminList$ = this.fbService
      .getClubAdminList()
      .pipe(shareReplay(1));
    this.clubList$ = this.fbService.getClubList().pipe(shareReplay(1));
    this.clubGames$ = this.getClubGames().pipe(shareReplay(1));

    // Prüfe ob der Benutzer in einem Club mit aktiviertem Meisterschaftsmodul ist
    this.clubList$.pipe(take(1)).subscribe((clubList) => {
      const hasChampionship = this.enableChampionship(clubList);
      console.log("Championship module check result:", hasChampionship);
      this.hasChampionshipModule = hasChampionship;
    });

    /*this.route.snapshot.data['news'].subscribe((news) => {
      console.log(news)
    });*/

    const navigation = this.router.currentNavigation();
    if (navigation) {
      const state = navigation.extras.state;
      if (state) {
        // console.log(state); // 'someValue'
      } else {
        // console.log("No state provided");
      }
    }
  }

  ngOnDestroy(): void {}

  /**
   * Lädt die gespeicherte Filter-Einstellung aus dem lokalen Storage
   */
  async loadSavedFilter(): Promise<void> {
    try {
      const { value } = await Preferences.get({ key: "newsFilter" });
      if (value) {
        const savedFilter = value as "all" | "verein" | "verband";
        this.currentSegment = savedFilter;
        this.segmentFilter$.next(savedFilter);
        this.filterValue = savedFilter === "all" ? "" : savedFilter;
      }
    } catch (error) {
      console.error("Fehler beim Laden der Filter-Einstellung:", error);
    }
  }

  /**
   * Speichert die aktuelle Filter-Einstellung im lokalen Storage
   */
  async saveFilter(filter: "all" | "verein" | "verband"): Promise<void> {
    try {
      await Preferences.set({
        key: "newsFilter",
        value: filter,
      });
    } catch (error) {
      console.error("Fehler beim Speichern der Filter-Einstellung:", error);
    }
  }

  /**
   * Lädt die Game-Preview Einstellung aus dem User-Profil
   */
  async loadGamePreviewSetting(): Promise<void> {
    try {
      const user = await this.authService.getUser$().pipe(take(1)).toPromise();
      if (user) {
        const userProfile = await this.userProfileService
          .getUserProfileById(user.uid)
          .pipe(take(1))
          .toPromise();
        if (userProfile) {
          this.showGamePreview = userProfile.showGamePreview || false;
        }
      }
    } catch (error) {
      console.error("Fehler beim Laden der Game-Preview Einstellung:", error);
      this.showGamePreview = false;
    }
  }

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
                      return this.fbService.getUserClubRefs(childUser);
                    }),
                  )
                : of([]),
            ),
            map((childrenClubs) => childrenClubs.flat()),
            // tap((clubs) => console.log("Children Clubs:", clubs)),
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
                    map((arr) =>
                      arr.map((n) => ({
                        ...n,
                        source: "verein" as const,
                      })),
                    ),
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
                    map((arr) =>
                      arr.map((n) => ({
                        ...n,
                        source: "verband" as const,
                      })),
                    ),
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
                );
              }),
            ),
          ),
        );
      }),
      map((newsArrays) => {
        const allNews: (News & { source?: "verein" | "verband" })[] = [];

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

  getClubGames(): Observable<Game[]> {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        if (!user) throw new Error("User not found");
        this.user = user;
      }),
      switchMap((user) => {
        if (!user) return of([]);
        // Get user's clubs and children's clubs
        return combineLatest([
          this.fbService.getUserClubRefs(user),
          this.userProfileService.getChildren(user.uid).pipe(
            switchMap((children: Profile[]) =>
              children.length > 0
                ? combineLatest(
                    children.map((child) => {
                      const childUser = { uid: child.id } as User;
                      return this.fbService.getUserClubRefs(childUser);
                    }),
                  )
                : of([]),
            ),
            map((childrenClubs) => childrenClubs.flat()),
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
          return of([]);
        }

        // Fetch games and teams from all clubs
        return combineLatest(
          clubs.map((club) =>
            combineLatest([
              this.championshipService.getClubGamesRef(club.id).pipe(
                catchError((error) => {
                  console.error(
                    `Error fetching games for club ID ${club.id}:`,
                    error,
                  );
                  return of([]);
                }),
              ),
              this.fbService.getClubTeamsRef(club.id).pipe(
                catchError((error) => {
                  console.error(
                    `Error fetching teams for club ID ${club.id}:`,
                    error,
                  );
                  return of([]);
                }),
              ),
            ]).pipe(
              map(([games, teams]) => {
                // Match teamId for each game
                return games.map((game) => {
                  const homeTeam = teams.find(
                    (team) => team.id === game.teamHomeId,
                  );
                  const awayTeam = teams.find(
                    (team) => team.id === game.teamAwayId,
                  );

                  // Use homeTeam if it's a club team, otherwise awayTeam
                  const matchedTeam = homeTeam || awayTeam;

                  return {
                    ...game,
                    teamId: matchedTeam ? matchedTeam.id : game.teamId,
                  };
                });
              }),
            ),
          ),
        );
      }),
      map((gamesArrays) => {
        // Flatten and merge all games
        const allGames = gamesArrays.flat();

        // Sort by dateTime
        const sortedGames = allGames.sort(
          (a, b) => a.dateTime.toMillis() - b.dateTime.toMillis(),
        );

        // Filter: only games from today and tomorrow
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 10);
        tomorrow.setHours(23, 59, 59, 999);

        return sortedGames.filter((game) => {
          const gameDate = game.dateTime.toDate();
          return gameDate <= tomorrow;
        });
      }),
      catchError((error) => {
        console.error("Error fetching club games:", error);
        return of([]);
      }),
    );
  }

  async openFilter() {
    const alert = await this.alertCtrl.create({
      header: "News filtern",
      inputs: [
        {
          name: "all",
          type: "radio",
          label: "Alle",
          value: "all",
          checked: this.currentSegment === "all",
        },
        {
          name: "verband",
          type: "radio",
          label: "Verband",
          value: "verband",
          checked: this.currentSegment === "verband",
        },
        {
          name: "verein",
          type: "radio",
          label: "Verein",
          value: "verein",
          checked: this.currentSegment === "verein",
        },
      ],
      buttons: [
        {
          text: this.translate.instant("common.cancel") || "Abbrechen",
          role: "cancel",
        },
        {
          text: this.translate.instant("common.apply") || "Übernehmen",
          role: "confirm",
        },
      ],
    });
    await alert.present();

    const { data, role } = await alert.onWillDismiss();
    if (role === "confirm") {
      const selected = (data as any)?.values ?? (data as any);
      const value = (selected as "all" | "verein" | "verband") || "all";
      this.currentSegment = value;
      this.segmentFilter$.next(value);
      this.filterValue = value === "all" ? "" : value;

      // Speichere die Filter-Einstellung
      await this.saveFilter(value);
    }
  }

  async onSegmentChanged(event: CustomEvent<{ value?: string | number }>) {
    const raw = event.detail?.value;
    const value =
      ((typeof raw === "number" ? String(raw) : raw) as
        | "all"
        | "verein"
        | "verband") || "all";
    this.currentSegment = value;
    this.segmentFilter$.next(value);

    // Speichere die Filter-Einstellung
    await this.saveFilter(value);
  }

  async openGameDetails(game: Game) {
    // Determine if game is in the future
    const isFuture = game.dateTime.toDate() > new Date();

    const topModal = await this.modalCtrl.getTop();
    const presentingElement = topModal || this.routerOutlet?.nativeEl;
    console.log(game);
    const modal = await this.modalCtrl.create({
      component: ChampionshipDetailPage,
      presentingElement,
      canDismiss: true,
      cssClass: "transparent-modal",
      showBackdrop: true,
      componentProps: {
        data: game,
        isFuture: isFuture,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === "confirm") {
    }
  }

  /**
   * Prüft ob mindestens ein Club das Championship-Feature aktiviert hat
   */
  enableChampionship(clubList: Club[]): boolean {
    return (
      clubList && clubList.some((club) => club.hasFeatureChampionship == true)
    );
  }
}
