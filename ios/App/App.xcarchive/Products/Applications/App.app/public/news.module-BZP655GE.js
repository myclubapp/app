import {
  FaIconComponent,
  FontAwesomeModule,
  NewsDetailPage,
  NewsService,
  NotificationPage,
  NotificationService,
  Share,
  faCopy,
  faEnvelope,
  faFacebook,
  faLinkedin,
  faTwitter,
  faWhatsapp
} from "./chunk-KAKENQW2.js";
import "./chunk-IILXOVOO.js";
import {
  FirebaseService
} from "./chunk-RMTOAZGR.js";
import {
  AuthService
} from "./chunk-AMO7VPPH.js";
import {
  AlertController,
  AnimationController,
  AsyncPipe,
  CommonModule,
  DatePipe,
  FormsModule,
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonLabel,
  IonList,
  IonMenuButton,
  IonRouterOutlet,
  IonRow,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
  IonicModule,
  MenuController,
  ModalController,
  NgForOf,
  NgIf,
  Router,
  RouterModule,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  catchError,
  combineLatest,
  map,
  of,
  switchMap,
  take,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PZUQX53K.js";
import "./chunk-JFBLR2DD.js";
import "./chunk-YB7CDXXA.js";
import "./chunk-BMLGNNEE.js";
import "./chunk-R3N6CFPK.js";
import "./chunk-HHPBBMWP.js";
import "./chunk-P46UNXAG.js";
import "./chunk-6NM256MY.js";
import "./chunk-AWRGIDDG.js";
import "./chunk-55OVODAE.js";
import "./chunk-HIKKWWV7.js";
import "./chunk-HYGHPGGJ.js";
import "./chunk-BKPN4S4N.js";
import "./chunk-U6MFTC2E.js";
import "./chunk-QQMTNXUN.js";
import "./chunk-5HIO5JVM.js";
import "./chunk-RRWPYKYY.js";
import "./chunk-2HS7YJ5A.js";
import "./chunk-F4BDZKIT.js";
import "./chunk-QVGABGEB.js";
import "./chunk-JYOJD2RE.js";
import "./chunk-5IJ3YEPD.js";
import "./chunk-T7BCX42A.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// src/app/pages/news/news/news.page.ts
function NewsPage_ng_container_9_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 18);
  }
}
function NewsPage_ng_container_9_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 19);
  }
}
function NewsPage_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NewsPage_ng_container_9_ion_icon_1_Template, 1, 0, "ion-icon", 16)(2, NewsPage_ng_container_9_ion_icon_2_Template, 1, 0, "ion-icon", 17);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const notificationsList_r2 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", notificationsList_r2.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", notificationsList_r2.length == 0);
  }
}
function NewsPage_ng_container_17_ion_list_1_ion_col_3_ion_fab_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-fab", 30)(1, "ion-fab-button", 31);
    \u0275\u0275listener("click", function NewsPage_ng_container_17_ion_list_1_ion_col_3_ion_fab_2_Template_ion_fab_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const news_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r5.share(news_r5));
    });
    \u0275\u0275element(2, "ion-icon", 32);
    \u0275\u0275elementEnd()();
  }
}
function NewsPage_ng_container_17_ion_list_1_ion_col_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-col", 22)(1, "ion-card", 23);
    \u0275\u0275template(2, NewsPage_ng_container_17_ion_list_1_ion_col_3_ion_fab_2_Template, 3, 0, "ion-fab", 24);
    \u0275\u0275elementStart(3, "ion-img", 25);
    \u0275\u0275listener("click", function NewsPage_ng_container_17_ion_list_1_ion_col_3_Template_ion_img_click_3_listener() {
      const news_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r5.openModal(news_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-card-header", 4);
    \u0275\u0275listener("click", function NewsPage_ng_container_17_ion_list_1_ion_col_3_Template_ion_card_header_click_4_listener() {
      const news_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r5.openModal(news_r5));
    });
    \u0275\u0275elementStart(5, "ion-card-subtitle");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-card-title");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ion-card-content", 26);
    \u0275\u0275listener("click", function NewsPage_ng_container_17_ion_list_1_ion_col_3_Template_ion_card_content_click_10_listener() {
      const news_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r5.openModal(news_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ion-row")(12, "ion-col", 27)(13, "ion-chip")(14, "ion-avatar");
    \u0275\u0275element(15, "img", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "ion-label");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "ion-col", 29);
    \u0275\u0275element(19, "ion-label");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const news_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", news_r5.url);
    \u0275\u0275advance();
    \u0275\u0275property("src", news_r5.image)("alt", news_r5.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 8, news_r5.date, "dd.MM.YYYY HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(news_r5.title);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", news_r5.leadText, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(5);
    \u0275\u0275propertyInterpolate("src", news_r5.authorImage, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(news_r5.author);
  }
}
function NewsPage_ng_container_17_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list")(1, "ion-grid")(2, "ion-row");
    \u0275\u0275template(3, NewsPage_ng_container_17_ion_list_1_ion_col_3_Template, 20, 11, "ion-col", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const newsList_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", newsList_r7);
  }
}
function NewsPage_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NewsPage_ng_container_17_ion_list_1_Template, 4, 1, "ion-list", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const newsList_r7 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", newsList_r7.length > 0);
  }
}
function NewsPage_ng_template_26_ion_col_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-col", 22)(1, "ion-card")(2, "ion-card-header")(3, "ion-card-subtitle");
    \u0275\u0275element(4, "ion-skeleton-text", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-card-title");
    \u0275\u0275element(6, "ion-skeleton-text", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-card-content");
    \u0275\u0275element(8, "ion-skeleton-text", 34)(9, "ion-skeleton-text", 33)(10, "ion-skeleton-text", 34)(11, "ion-skeleton-text", 33)(12, "ion-skeleton-text", 34);
    \u0275\u0275elementEnd()()();
  }
}
function NewsPage_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list")(1, "ion-grid")(2, "ion-row");
    \u0275\u0275template(3, NewsPage_ng_template_26_ion_col_3_Template, 13, 0, "ion-col", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r5.skeleton);
  }
}
var _NewsPage = class _NewsPage {
  constructor(notificationService, newsService, authService, fbService, routerOutlet, modalCtrl, alertCtrl, menuCtrl, animationCtrl, translate, router) {
    this.notificationService = notificationService;
    this.newsService = newsService;
    this.authService = authService;
    this.fbService = fbService;
    this.routerOutlet = routerOutlet;
    this.modalCtrl = modalCtrl;
    this.alertCtrl = alertCtrl;
    this.menuCtrl = menuCtrl;
    this.animationCtrl = animationCtrl;
    this.translate = translate;
    this.router = router;
    this.skeleton = new Array(12);
    this.filterList = [];
    this.filterValue = "";
    this.showSocialShare = false;
    this.faTwitter = faTwitter;
    this.faFacebook = faFacebook;
    this.faWhatsapp = faWhatsapp;
    this.faLinkedin = faLinkedin;
    this.faEnvelope = faEnvelope;
    this.faCopy = faCopy;
    this.menuCtrl.enable(true, "menu");
  }
  ngOnInit() {
    this.newsList$ = this.getNews();
    this.notifications$ = this.getNotifications();
    const navigation = this.router.getCurrentNavigation();
    if (navigation) {
      const state = navigation.extras.state;
      if (state) {
        console.log(state);
      } else {
        console.log("No state provided");
      }
    }
  }
  ngOnDestroy() {
  }
  getNews() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        if (!user)
          throw new Error("User not found");
        this.user = user;
      }),
      switchMap((user) => this.fbService.getUserClubRefs(user)),
      // Get user's club references
      switchMap((clubs) => {
        if (!clubs.length) {
          console.log("No clubs associated with the user.");
          return of([]);
        }
        return combineLatest(clubs.map((club) => this.fbService.getClubRef(club.id).pipe(switchMap((clubDetail) => {
          if (!clubDetail) {
            console.log(`No details found for club ID: ${club.id}`);
            return of({ clubNews: [], typeNews: [] });
          }
          const newsByClub$ = this.newsService.getClubNewsRef(club.id).pipe(catchError((error) => {
            console.error(`Error fetching news for club ID ${club.id}:`, error);
            return of([]);
          }));
          const newsByType$ = this.newsService.getNewsRef(clubDetail.type).pipe(catchError((error) => {
            console.error(`Error fetching news for type ${clubDetail.type}:`, error);
            return of([]);
          }));
          return combineLatest([newsByClub$, newsByType$]).pipe(map(([clubNews, typeNews]) => ({ clubNews, typeNews })));
        }))));
      }),
      map((newsArrays) => {
        const allNews = [];
        newsArrays.forEach(({ clubNews, typeNews }) => {
          allNews.push(...clubNews);
          allNews.push(...typeNews);
        });
        return allNews.filter((news, index, self) => index === self.findIndex((t) => t.id === news.id)).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      }),
      catchError((error) => {
        console.error("Error fetching news:", error);
        return of([]);
      })
    );
  }
  getNotifications() {
    return this.authService.getUser$().pipe(take(1), tap((user) => {
      if (!user)
        throw new Error("User not found");
    }), switchMap((user) => {
      return this.notificationService.getNotifications(user);
    }));
  }
  openNotification() {
    return __async(this, null, function* () {
      const modal = yield this.modalCtrl.create({
        component: NotificationPage,
        presentingElement: this.routerOutlet.nativeEl,
        canDismiss: true,
        showBackdrop: true,
        componentProps: {}
        //   enterAnimation,
        //   leaveAnimation,
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
        console.log("Notification", data);
        if (data.type === "news" || data.type === "clubNews") {
          this.openModal(data);
        } else {
        }
      }
    });
  }
  openModal(news) {
    return __async(this, null, function* () {
      const modal = yield this.modalCtrl.create({
        component: NewsDetailPage,
        presentingElement: this.routerOutlet.nativeEl,
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          data: news
        }
        //   enterAnimation,
        //   leaveAnimation,
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
  share(news) {
    return __async(this, null, function* () {
      const { value } = yield Share.canShare();
      if (value) {
        const shareRet = yield Share.share({
          title: news.title,
          text: news.leadText,
          url: news.url,
          dialogTitle: news.title
        }).catch((onrejected) => {
        });
      } else {
        yield this.shareFallback(news);
      }
    });
  }
  shareFallback(news) {
    return __async(this, null, function* () {
      return yield new Promise((resolve) => __async(this, null, function* () {
        this.shareSocialShareOptions = {
          displayNames: true,
          config: [
            {
              twitter: {
                socialShareUrl: "\u{1F449} " + news.title + ": " + news.url,
                socialSharePopupWidth: 300,
                socialSharePopupHeight: 400
              }
            },
            {
              facebook: {
                socialShareUrl: "\u{1F449} " + news.title + ": " + news.url
              }
            },
            {
              whatsapp: {
                socialShareUrl: "\u{1F449} " + news.title + ": " + news.url
              }
            },
            {
              linkedin: {
                socialShareUrl: "\u{1F449} " + news.title + ": " + news.url
              }
            },
            {
              email: {
                socialShareUrl: "\u{1F449} " + news.title + ": " + news.url
              }
            },
            {
              copy: {
                socialShareUrl: "\u{1F449} " + news.title + ": " + news.url
              }
            }
          ]
        };
        this.showSocialShare = true;
        resolve(true);
      }));
    });
  }
};
_NewsPage.\u0275fac = function NewsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewsPage)(\u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(NewsService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(IonRouterOutlet), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(MenuController), \u0275\u0275directiveInject(AnimationController), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(Router));
};
_NewsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewsPage, selectors: [["app-news"]], standalone: false, decls: 28, vars: 23, consts: [["loading", ""], [3, "translucent"], ["slot", "start"], ["slot", "end"], [3, "click"], [4, "ngIf", "ngIfElse"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], [3, "closed", "show", "share"], ["slot", "twitter", "name", "logo-twitter"], ["slot", "facebook", 2, "color", "#00aced", "display", "block", 3, "icon"], ["slot", "facebook", "slot", "whatsapp", 2, "color", "#25d366", "display", "block", 3, "icon"], ["slot", "linkedin", 2, "color", "#0077b5", "display", "block", 3, "icon"], ["slot", "email", "ariaLabel", "Email", 2, "color", "#ff8ea3", "display", "block", 3, "icon"], ["slot", "copy", "ariaLabel", "Copy", 2, "color", "#ff8ea3", "display", "block", 3, "icon"], ["slot", "icon-only", "name", "notifications", 4, "ngIf"], ["slot", "icon-only", "name", "notifications-outline", 4, "ngIf"], ["slot", "icon-only", "name", "notifications"], ["slot", "icon-only", "name", "notifications-outline"], [4, "ngIf"], ["size-lg", "4", "size-md", "6", "size-sm", "6", "size", "12", 4, "ngFor", "ngForOf"], ["size-lg", "4", "size-md", "6", "size-sm", "6", "size", "12"], ["button", "true"], ["vertical", "top", "horizontal", "end", 4, "ngIf"], [3, "click", "src", "alt"], [3, "click", "innerHTML"], ["size", "8"], [3, "src"], ["size", "4"], ["vertical", "top", "horizontal", "end"], ["size", "small", 3, "click"], ["name", "share", "size", "small"], ["animated", "", 2, "width", "60%"], ["animated", "", 2, "width", "80%"]], template: function NewsPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 1)(1, "ion-toolbar")(2, "ion-buttons", 2);
    \u0275\u0275element(3, "ion-menu-button");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-title");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-buttons", 3)(8, "ion-button", 4);
    \u0275\u0275listener("click", function NewsPage_Template_ion_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.openNotification());
    });
    \u0275\u0275template(9, NewsPage_ng_container_9_Template, 3, 2, "ng-container", 5);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "ion-content", 6)(12, "ion-header", 7)(13, "ion-toolbar")(14, "ion-title", 8);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, NewsPage_ng_container_17_Template, 2, 1, "ng-container", 5);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementStart(19, "web-social-share", 9);
    \u0275\u0275listener("closed", function NewsPage_Template_web_social_share_closed_19_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.showSocialShare = false);
    });
    \u0275\u0275element(20, "ion-icon", 10)(21, "fa-icon", 11)(22, "fa-icon", 12)(23, "fa-icon", 13)(24, "fa-icon", 14)(25, "fa-icon", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, NewsPage_ng_template_26_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const loading_r8 = \u0275\u0275reference(27);
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 15, "common.news"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(10, 17, ctx.notifications$))("ngIfElse", loading_r8);
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 19, "common.news"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(18, 21, ctx.newsList$))("ngIfElse", loading_r8);
    \u0275\u0275advance(2);
    \u0275\u0275property("show", ctx.showSocialShare)("share", ctx.shareSocialShareOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx.faFacebook);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx.faWhatsapp);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx.faLinkedin);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx.faEnvelope);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx.faCopy);
  }
}, dependencies: [NgForOf, NgIf, FaIconComponent, IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonLabel, IonList, IonMenuButton, IonRow, IonSkeletonText, IonTitle, IonToolbar, AsyncPipe, DatePipe, TranslatePipe], styles: ["\n\ndiv.web-social-share[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: black !important;\n}\n@media (prefers-color-scheme: dark) {\n  div.web-social-share[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #000 !important;\n  }\n}\ndiv.web-social-share-action-sheet-group[_ngcontent-%COMP%] {\n  margin-bottom: 60px !important;\n}\nimg[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n/*# sourceMappingURL=news.page.css.map */"] });
var NewsPage = _NewsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewsPage, { className: "NewsPage", filePath: "src/app/pages/news/news/news.page.ts", lineNumber: 58 });
})();

// src/app/pages/news/news/news-routing.module.ts
var routes = [
  {
    path: "",
    component: NewsPage
  }
];
var _NewsPageRoutingModule = class _NewsPageRoutingModule {
};
_NewsPageRoutingModule.\u0275fac = function NewsPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewsPageRoutingModule)();
};
_NewsPageRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NewsPageRoutingModule });
_NewsPageRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var NewsPageRoutingModule = _NewsPageRoutingModule;

// src/app/pages/news/news/news.module.ts
var _NewsPageModule = class _NewsPageModule {
};
_NewsPageModule.\u0275fac = function NewsPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewsPageModule)();
};
_NewsPageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NewsPageModule });
_NewsPageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FontAwesomeModule,
  FormsModule,
  IonicModule,
  NewsPageRoutingModule,
  TranslateModule
] });
var NewsPageModule = _NewsPageModule;
export {
  NewsPageModule
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9uZXdzL25ld3MvbmV3cy5wYWdlLnRzIiwgInNyYy9hcHAvcGFnZXMvbmV3cy9uZXdzL25ld3MucGFnZS5odG1sIiwgInNyYy9hcHAvcGFnZXMvbmV3cy9uZXdzL25ld3Mtcm91dGluZy5tb2R1bGUudHMiLCAic3JjL2FwcC9wYWdlcy9uZXdzL25ld3MvbmV3cy5tb2R1bGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIElvblJvdXRlck91dGxldCxcbiAgTG9hZGluZ0NvbnRyb2xsZXIsXG4gIE1vZGFsQ29udHJvbGxlcixcbiAgTWVudUNvbnRyb2xsZXIsXG4gIFRvYXN0Q29udHJvbGxlcixcbiAgQW5pbWF0aW9uQ29udHJvbGxlcixcbiAgQWxlcnRDb250cm9sbGVyLFxufSBmcm9tIFwiQGlvbmljL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vLyBpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZXdzIH0gZnJvbSBcInNyYy9hcHAvbW9kZWxzL25ld3NcIjtcbmltcG9ydCB7XG4gIERvbVNhbml0aXplcixcbiAgU2FmZUh0bWwsXG4gIFNhZmVVcmwsXG4gIFNhZmVTdHlsZVxufSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFNoYXJlIH0gZnJvbSBcIkBjYXBhY2l0b3Ivc2hhcmVcIjtcbmltcG9ydCB7IERldmljZSB9IGZyb20gXCJAY2FwYWNpdG9yL2RldmljZVwiO1xuXG5pbXBvcnQge1xuICBmYVR3aXR0ZXIsXG4gIGZhRmFjZWJvb2ssXG4gIGZhV2hhdHNhcHAsXG4gIGZhTGlua2VkaW4sXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBmYUVudmVsb3BlLCBmYUNvcHkgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2VyLCB1c2VyIH0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvYXV0aFwiO1xuaW1wb3J0IHsgTmV3c0RldGFpbFBhZ2UgfSBmcm9tIFwiLi4vbmV3cy1kZXRhaWwvbmV3cy1kZXRhaWwucGFnZVwiO1xuaW1wb3J0IHsgTmV3c1NlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS9uZXdzLnNlcnZpY2VcIjtcbmltcG9ydCB7XG4gIE9ic2VydmFibGUsXG4gIGNhdGNoRXJyb3IsXG4gIGNvbWJpbmVMYXRlc3QsXG4gIG1hcCxcbiAgb2YsXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbiAgdGFwLFxufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQ2x1YiB9IGZyb20gXCJzcmMvYXBwL21vZGVscy9jbHViXCI7XG5pbXBvcnQgeyBUZWFtIH0gZnJvbSBcInNyYy9hcHAvbW9kZWxzL3RlYW1cIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uUGFnZSB9IGZyb20gXCIuLi9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnBhZ2VcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS9ub3RpZmljYXRpb24uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtbmV3c1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbmV3cy5wYWdlLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vbmV3cy5wYWdlLnNjc3NcIl0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgTmV3c1BhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICBza2VsZXRvbiA9IG5ldyBBcnJheSgxMik7XG4gIHVzZXI6IFVzZXI7XG5cbiAgZmlsdGVyTGlzdDogYW55W10gPSBbXTtcbiAgZmlsdGVyVmFsdWU6IHN0cmluZyA9IFwiXCI7XG5cbiAgLy8gU29jaWFsIFNoYXJlXG4gIHNoYXJlU29jaWFsU2hhcmVPcHRpb25zOiBhbnk7XG4gIHNob3dTb2NpYWxTaGFyZSA9IGZhbHNlO1xuXG4gIGZhVHdpdHRlcjogYW55ID0gZmFUd2l0dGVyO1xuICBmYUZhY2Vib29rOiBhbnkgPSBmYUZhY2Vib29rO1xuICBmYVdoYXRzYXBwOiBhbnkgPSBmYVdoYXRzYXBwO1xuICBmYUxpbmtlZGluOiBhbnkgPSBmYUxpbmtlZGluO1xuICBmYUVudmVsb3BlOiBhbnkgPSBmYUVudmVsb3BlO1xuICBmYUNvcHk6IGFueSA9IGZhQ29weTtcblxuICBub3RpZmljYXRpb25zJDogT2JzZXJ2YWJsZTxhbnlbXT47XG5cbiAgbmV3c0xpc3QkOiBPYnNlcnZhYmxlPE5ld3NbXT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbmV3c1NlcnZpY2U6IE5ld3NTZXJ2aWNlLFxuICAgIC8vIHByaXZhdGUgcmVhZG9ubHkgc2FuaXRpemF0aW9uOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBmYlNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlck91dGxldDogSW9uUm91dGVyT3V0bGV0LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBhbGVydEN0cmw6IEFsZXJ0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1lbnVDdHJsOiBNZW51Q29udHJvbGxlcixcbiAgICBwdWJsaWMgYW5pbWF0aW9uQ3RybDogQW5pbWF0aW9uQ29udHJvbGxlcixcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICAvLyBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkge1xuICAgIHRoaXMubWVudUN0cmwuZW5hYmxlKHRydWUsIFwibWVudVwiKTtcbiAgICAvKiBpZiAodGhpcy5yb3V0ZXIuZ2V0Q3VycmVudE5hdmlnYXRpb24oKS5leHRyYXMuc3RhdGUgJiYgdGhpcy5yb3V0ZXIuZ2V0Q3VycmVudE5hdmlnYXRpb24oKS5leHRyYXMuc3RhdGUudHlwZSA9PT0gXCJuZXdzXCIpIHtcbiAgICAgIGNvbnN0IHB1c2hEYXRhID0gdGhpcy5yb3V0ZXIuZ2V0Q3VycmVudE5hdmlnYXRpb24oKS5leHRyYXMuc3RhdGU7XG4gICAgICAvLyBJdCdzIGEgUHVzaCBNZXNzYWdlXG4gICAgICBsZXQgbmV3czogTmV3cyA9IHtcbiAgICAgICAgaWQ6IHB1c2hEYXRhLmlkLFxuICAgICAgICB0aXRsZTogcHVzaERhdGEudGl0bGUsXG4gICAgICAgIHNsdWc6IHB1c2hEYXRhLnNsdWcsXG4gICAgICAgIGltYWdlOiBwdXNoRGF0YS5pbWFnZSxcbiAgICAgICAgbGVhZFRleHQ6IHB1c2hEYXRhLmxlYWRUZXh0LFxuICAgICAgICBhdXRob3I6IHB1c2hEYXRhLmF1dGhvcixcbiAgICAgICAgYXV0aG9ySW1hZ2U6IHB1c2hEYXRhLmF1dGhvckltYWdlLFxuICAgICAgICBkYXRlOiBwdXNoRGF0YS5kYXRlLFxuICAgICAgICBodG1sVGV4dDogcHVzaERhdGEuaHRtbFRleHQsXG4gICAgICAgIHRleHQ6IHB1c2hEYXRhLnRleHQsXG4gICAgICAgIHVybDogcHVzaERhdGEudXJsLFxuICAgICAgICBmaWx0ZXJhYmxlOiBwdXNoRGF0YS5maWx0ZXJhYmxlLFxuICAgICAgICB0YWdzOiBwdXNoRGF0YS50YWdzIHx8IFtdXG4gICAgICB9O1xuICAgICAgdGhpcy5vcGVuTW9kYWwobmV3cyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJvdXRlci5nZXRDdXJyZW50TmF2aWdhdGlvbigpLmV4dHJhcy5zdGF0ZSAmJiB0aGlzLnJvdXRlci5nZXRDdXJyZW50TmF2aWdhdGlvbigpLmV4dHJhcy5zdGF0ZS50eXBlID09PSBcImNsdWJOZXdzXCIpIHtcbiAgICAgIGNvbnN0IHB1c2hEYXRhID0gdGhpcy5yb3V0ZXIuZ2V0Q3VycmVudE5hdmlnYXRpb24oKS5leHRyYXMuc3RhdGU7XG4gICAgICAvLyBJdCdzIGEgUHVzaCBNZXNzYWdlXG4gICAgICBsZXQgbmV3czogTmV3cyA9IHtcbiAgICAgICAgaWQ6IHB1c2hEYXRhLmlkLFxuICAgICAgICB0aXRsZTogcHVzaERhdGEudGl0bGUsXG4gICAgICAgIHNsdWc6IHB1c2hEYXRhLnNsdWcsXG4gICAgICAgIGltYWdlOiBwdXNoRGF0YS5pbWFnZSxcbiAgICAgICAgbGVhZFRleHQ6IHB1c2hEYXRhLmxlYWRUZXh0LFxuICAgICAgICBhdXRob3I6IHB1c2hEYXRhLmF1dGhvcixcbiAgICAgICAgYXV0aG9ySW1hZ2U6IHB1c2hEYXRhLmF1dGhvckltYWdlLFxuICAgICAgICBkYXRlOiBwdXNoRGF0YS5kYXRlLFxuICAgICAgICBodG1sVGV4dDogcHVzaERhdGEuaHRtbFRleHQsXG4gICAgICAgIHRleHQ6IHB1c2hEYXRhLnRleHQsXG4gICAgICAgIHVybDogcHVzaERhdGEudXJsLFxuICAgICAgICBmaWx0ZXJhYmxlOiBwdXNoRGF0YS5maWx0ZXJhYmxlLFxuICAgICAgICB0YWdzOiBwdXNoRGF0YS50YWdzIHx8IFtdXG4gICAgICB9O1xuICAgICAgdGhpcy5vcGVuTW9kYWwobmV3cyk7IFxuICAgIH0qL1xuXG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubmV3c0xpc3QkID0gdGhpcy5nZXROZXdzKCk7XG4gICAgdGhpcy5ub3RpZmljYXRpb25zJCA9IHRoaXMuZ2V0Tm90aWZpY2F0aW9ucygpO1xuXG4gICAgLyp0aGlzLnJvdXRlLnNuYXBzaG90LmRhdGFbJ25ld3MnXS5zdWJzY3JpYmUoKG5ld3MpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKG5ld3MpXG4gICAgfSk7Ki9cblxuICAgIGNvbnN0IG5hdmlnYXRpb24gPSB0aGlzLnJvdXRlci5nZXRDdXJyZW50TmF2aWdhdGlvbigpO1xuICAgIGlmIChuYXZpZ2F0aW9uKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IG5hdmlnYXRpb24uZXh0cmFzLnN0YXRlO1xuICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRlKTsgLy8gJ3NvbWVWYWx1ZSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBzdGF0ZSBwcm92aWRlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cbiAgfVxuXG4gIGdldE5ld3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlciQoKS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHRhcCh1c2VyID0+IHtcbiAgICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKHVzZXIgPT4gdGhpcy5mYlNlcnZpY2UuZ2V0VXNlckNsdWJSZWZzKHVzZXIpKSwgLy8gR2V0IHVzZXIncyBjbHViIHJlZmVyZW5jZXNcbiAgICAgIHN3aXRjaE1hcChjbHVicyA9PiB7XG4gICAgICAgIGlmICghY2x1YnMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJObyBjbHVicyBhc3NvY2lhdGVkIHdpdGggdGhlIHVzZXIuXCIpO1xuICAgICAgICAgIC8qdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL29uYm9hcmRpbmctY2x1YicpLnRoZW4obmF2T25ib2FyZGluZ0NsdWI9PntcbiAgICAgICAgICAgIGlmIChuYXZPbmJvYXJkaW5nQ2x1Yikge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTmF2aWdhdGlvbiBzdWNjZXNzIHRvIG9uYm9hcmRpbmcgQ2x1YiBQYWdlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdOYXZpZ2F0aW9uIEVSUk9SIHRvIG9uYm9hcmRpbmcgQ2x1YiBQYWdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkqL1xuICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGZXRjaCBkZXRhaWxlZCBpbmZvcm1hdGlvbiBmb3IgZWFjaCBjbHViXG4gICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFxuICAgICAgICAgIGNsdWJzLm1hcChjbHViID0+IHRoaXMuZmJTZXJ2aWNlLmdldENsdWJSZWYoY2x1Yi5pZCkucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcChjbHViRGV0YWlsID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFjbHViRGV0YWlsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYE5vIGRldGFpbHMgZm91bmQgZm9yIGNsdWIgSUQ6ICR7Y2x1Yi5pZH1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YoeyBjbHViTmV3czogW10sIHR5cGVOZXdzOiBbXSB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnN0IG5ld3NCeUNsdWIkID0gdGhpcy5uZXdzU2VydmljZS5nZXRDbHViTmV3c1JlZihjbHViLmlkKS5waXBlKFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgZmV0Y2hpbmcgbmV3cyBmb3IgY2x1YiBJRCAke2NsdWIuaWR9OmAsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBjb25zdCBuZXdzQnlUeXBlJCA9IHRoaXMubmV3c1NlcnZpY2UuZ2V0TmV3c1JlZihjbHViRGV0YWlsLnR5cGUpLnBpcGUoXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBmZXRjaGluZyBuZXdzIGZvciB0eXBlICR7Y2x1YkRldGFpbC50eXBlfTpgLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW25ld3NCeUNsdWIkLCBuZXdzQnlUeXBlJF0pLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKChbY2x1Yk5ld3MsIHR5cGVOZXdzXSkgPT4gKHsgY2x1Yk5ld3MsIHR5cGVOZXdzIH0pKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApKVxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICBtYXAobmV3c0FycmF5cyA9PiB7XG4gICAgICAgIGNvbnN0IGFsbE5ld3MgPSBbXTtcblxuICAgICAgICAvLyBBZ2dyZWdhdGUgYW5kIGZsYXR0ZW4gdGhlIG5ld3MgaXRlbXNcbiAgICAgICAgbmV3c0FycmF5cy5mb3JFYWNoKCh7IGNsdWJOZXdzLCB0eXBlTmV3cyB9KSA9PiB7XG4gICAgICAgICAgLyp0eXBlTmV3cy5tYXAobmV3cz0+e1xuICAgICAgICAgICAgbmV3cy5pbWFnZSA9IHRoaXMuc2FuaXRpemF0aW9uLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChuZXdzLmltYWdlKTtcbiAgICAgICAgICB9KSovXG4gICAgICAgICAgYWxsTmV3cy5wdXNoKC4uLmNsdWJOZXdzKTtcbiAgICAgICAgICBhbGxOZXdzLnB1c2goLi4udHlwZU5ld3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZW1vdmUgZHVwbGljYXRlcyBhbmQgc29ydFxuICAgICAgICByZXR1cm4gYWxsTmV3c1xuICAgICAgICAgIC5maWx0ZXIoKG5ld3MsIGluZGV4LCBzZWxmKSA9PlxuICAgICAgICAgICAgaW5kZXggPT09IHNlbGYuZmluZEluZGV4KCh0KSA9PiB0LmlkID09PSBuZXdzLmlkKVxuICAgICAgICAgIClcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRlKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShhLmRhdGUpLmdldFRpbWUoKSk7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbmV3czpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgfSlcbiAgICApO1xuICB9XG4gIGdldE5vdGlmaWNhdGlvbnMoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXIkKCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICB0YXAoKHVzZXIpID0+IHtcbiAgICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIG5vdCBmb3VuZFwiKTtcbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKCh1c2VyKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UuZ2V0Tm90aWZpY2F0aW9ucyh1c2VyKTtcbiAgICAgIH0pXG4gICAgKVxuICB9XG4gIGFzeW5jIG9wZW5Ob3RpZmljYXRpb24oKSB7XG4gICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoe1xuICAgICAgY29tcG9uZW50OiBOb3RpZmljYXRpb25QYWdlLFxuICAgICAgcHJlc2VudGluZ0VsZW1lbnQ6IHRoaXMucm91dGVyT3V0bGV0Lm5hdGl2ZUVsLFxuICAgICAgY2FuRGlzbWlzczogdHJ1ZSxcbiAgICAgIHNob3dCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICB9LFxuICAgICAgLy8gICBlbnRlckFuaW1hdGlvbixcbiAgICAgIC8vICAgbGVhdmVBbmltYXRpb24sXG4gICAgfSk7XG4gICAgbW9kYWwucHJlc2VudCgpO1xuXG4gICAgY29uc3QgeyBkYXRhLCByb2xlIH0gPSBhd2FpdCBtb2RhbC5vbldpbGxEaXNtaXNzKCk7XG5cbiAgICBpZiAocm9sZSA9PT0gXCJjb25maXJtXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdOb3RpZmljYXRpb24nLCBkYXRhKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiVFlQRTogIFwiICsgZGF0YS50eXBlKTtcbiAgICAgIGlmIChkYXRhLnR5cGUgPT09IFwibmV3c1wiIHx8IGRhdGEudHlwZSA9PT0gXCJjbHViTmV3c1wiKSB7XG4gICAgICAgIHRoaXMub3Blbk1vZGFsKGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIGFzeW5jIG9wZW5Nb2RhbChuZXdzOiBOZXdzKSB7XG4gICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoe1xuICAgICAgY29tcG9uZW50OiBOZXdzRGV0YWlsUGFnZSxcbiAgICAgIHByZXNlbnRpbmdFbGVtZW50OiB0aGlzLnJvdXRlck91dGxldC5uYXRpdmVFbCxcbiAgICAgIGNhbkRpc21pc3M6IHRydWUsXG4gICAgICBzaG93QmFja2Ryb3A6IHRydWUsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBkYXRhOiBuZXdzLFxuICAgICAgfSxcbiAgICAgIC8vICAgZW50ZXJBbmltYXRpb24sXG4gICAgICAvLyAgIGxlYXZlQW5pbWF0aW9uLFxuICAgIH0pO1xuICAgIG1vZGFsLnByZXNlbnQoKTtcblxuICAgIGNvbnN0IHsgZGF0YSwgcm9sZSB9ID0gYXdhaXQgbW9kYWwub25XaWxsRGlzbWlzcygpO1xuXG4gICAgaWYgKHJvbGUgPT09IFwiY29uZmlybVwiKSB7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc2hhcmUobmV3czogTmV3cykge1xuICAgIC8vIGNvbnN0IGRldmljZSA9IGF3YWl0IERldmljZS5nZXRJbmZvKCk7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gYXdhaXQgU2hhcmUuY2FuU2hhcmUoKTtcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gaWYgKGRldmljZS5wbGF0Zm9ybSA9PT0gXCJ3ZWJcIiAmJiBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnNoYXJlKSB7XG4gICAgICBjb25zdCBzaGFyZVJldCA9IGF3YWl0IFNoYXJlLnNoYXJlKHtcbiAgICAgICAgdGl0bGU6IG5ld3MudGl0bGUsXG4gICAgICAgIHRleHQ6IG5ld3MubGVhZFRleHQsXG4gICAgICAgIHVybDogbmV3cy51cmwsXG4gICAgICAgIGRpYWxvZ1RpdGxlOiBuZXdzLnRpdGxlLFxuICAgICAgfSkuY2F0Y2goKG9ucmVqZWN0ZWQpID0+IHsgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHRoaXMuc2hhcmVGYWxsYmFjayhuZXdzKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzaGFyZUZhbGxiYWNrKG5ld3M6IE5ld3MpIHtcbiAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcbiAgICAgIC8vIFRoZSBjb25maWd1cmF0aW9uLCBzZXQgdGhlIHNoYXJlIG9wdGlvbnNcbiAgICAgIHRoaXMuc2hhcmVTb2NpYWxTaGFyZU9wdGlvbnMgPSB7XG4gICAgICAgIGRpc3BsYXlOYW1lczogdHJ1ZSxcbiAgICAgICAgY29uZmlnOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHdpdHRlcjoge1xuICAgICAgICAgICAgICBzb2NpYWxTaGFyZVVybDogXCLwn5GJIFwiICsgbmV3cy50aXRsZSArIFwiOiBcIiArIG5ld3MudXJsLFxuICAgICAgICAgICAgICBzb2NpYWxTaGFyZVBvcHVwV2lkdGg6IDMwMCxcbiAgICAgICAgICAgICAgc29jaWFsU2hhcmVQb3B1cEhlaWdodDogNDAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZhY2Vib29rOiB7XG4gICAgICAgICAgICAgIHNvY2lhbFNoYXJlVXJsOiBcIvCfkYkgXCIgKyBuZXdzLnRpdGxlICsgXCI6IFwiICsgbmV3cy51cmwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgd2hhdHNhcHA6IHtcbiAgICAgICAgICAgICAgc29jaWFsU2hhcmVVcmw6IFwi8J+RiSBcIiArIG5ld3MudGl0bGUgKyBcIjogXCIgKyBuZXdzLnVybCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsaW5rZWRpbjoge1xuICAgICAgICAgICAgICBzb2NpYWxTaGFyZVVybDogXCLwn5GJIFwiICsgbmV3cy50aXRsZSArIFwiOiBcIiArIG5ld3MudXJsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICAgIHNvY2lhbFNoYXJlVXJsOiBcIvCfkYkgXCIgKyBuZXdzLnRpdGxlICsgXCI6IFwiICsgbmV3cy51cmwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29weToge1xuICAgICAgICAgICAgICBzb2NpYWxTaGFyZVVybDogXCLwn5GJIFwiICsgbmV3cy50aXRsZSArIFwiOiBcIiArIG5ld3MudXJsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICAgIHRoaXMuc2hvd1NvY2lhbFNoYXJlID0gdHJ1ZTtcbiAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsICI8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxuICA8aW9uLXRvb2xiYXI+XG4gICAgPGlvbi1idXR0b25zIHNsb3Q9XCJzdGFydFwiPlxuICAgICAgPGlvbi1tZW51LWJ1dHRvbj48L2lvbi1tZW51LWJ1dHRvbj5cbiAgICA8L2lvbi1idXR0b25zPlxuICAgIDxpb24tdGl0bGU+e3tcImNvbW1vbi5uZXdzXCIgfCB0cmFuc2xhdGV9fTwvaW9uLXRpdGxlPlxuICAgIDxpb24tYnV0dG9ucyBzbG90PVwiZW5kXCI+XG4gICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwib3Blbk5vdGlmaWNhdGlvbigpXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJub3RpZmljYXRpb25zJCB8IGFzeW5jIGFzIG5vdGlmaWNhdGlvbnNMaXN0OyBlbHNlIGxvYWRpbmdcIj5cbiAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJub3RpZmljYXRpb25zTGlzdC5sZW5ndGggPiAwXCIgc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJub3RpZmljYXRpb25zXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJub3RpZmljYXRpb25zTGlzdC5sZW5ndGggPT0gMFwic2xvdD1cImljb24tb25seVwiIG5hbWU9XCJub3RpZmljYXRpb25zLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICBcbiAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgIDwhLS0gPGlvbi1idXR0b24+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cIm5vdGlmaWNhdGlvbnMtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICA8L2lvbi1idXR0b24+XG4gICAtLT5cbiAgICA8L2lvbi1idXR0b25zPlxuICAgIDwhLS08aW9uLWJ1dHRvbnMgc2xvdD1cImVuZFwiPlxuICAgICAgPGlvbi1idXR0b24gKm5nSWY9XCIhZmlsdGVyVmFsdWVcIiAoY2xpY2spPVwib3BlbkZpbHRlcigkZXZlbnQpXCI+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cImZpbHRlclwiPjwvaW9uLWljb24+XG4gICAgICA8L2lvbi1idXR0b24+XG4gICAgICA8aW9uLWJ1dHRvbiAqbmdJZj1cImZpbHRlclZhbHVlXCIgKGNsaWNrKT1cIm9wZW5GaWx0ZXIoJGV2ZW50KVwiPlxuICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJmaWx0ZXItY2lyY2xlXCI+PC9pb24taWNvbj5cbiAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICA8L2lvbi1idXR0b25zPi0tPlxuICA8L2lvbi10b29sYmFyPlxuPC9pb24taGVhZGVyPlxuXG48aW9uLWNvbnRlbnQgW2Z1bGxzY3JlZW5dPVwidHJ1ZVwiPlxuICA8aW9uLWhlYWRlciBjb2xsYXBzZT1cImNvbmRlbnNlXCI+XG4gICAgPGlvbi10b29sYmFyPlxuICAgICAgPGlvbi10aXRsZSBzaXplPVwibGFyZ2VcIj57e1wiY29tbW9uLm5ld3NcIiB8IHRyYW5zbGF0ZX19PC9pb24tdGl0bGU+XG4gICAgPC9pb24tdG9vbGJhcj5cbiAgPC9pb24taGVhZGVyPlxuXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJuZXdzTGlzdCQgfCBhc3luYyBhcyBuZXdzTGlzdDsgZWxzZSBsb2FkaW5nXCI+XG4gICAgPGlvbi1saXN0ICpuZ0lmPVwibmV3c0xpc3QubGVuZ3RoID4gMFwiPlxuICAgICAgPGlvbi1ncmlkPlxuICAgICAgICA8aW9uLXJvdz5cbiAgICAgICAgICA8aW9uLWNvbCBzaXplLWxnPVwiNFwiIHNpemUtbWQ9XCI2XCIgc2l6ZS1zbT1cIjZcIiBzaXplPVwiMTJcIiAqbmdGb3I9XCJsZXQgbmV3cyBvZiBuZXdzTGlzdFwiPlxuICAgICAgICAgICAgPGlvbi1jYXJkIGJ1dHRvbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgPGlvbi1mYWIgKm5nSWY9XCJuZXdzLnVybFwiIHZlcnRpY2FsPVwidG9wXCIgaG9yaXpvbnRhbD1cImVuZFwiPlxuICAgICAgICAgICAgICAgIDxpb24tZmFiLWJ1dHRvbiBzaXplPVwic21hbGxcIiAoY2xpY2spPVwic2hhcmUobmV3cylcIj5cbiAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwic2hhcmVcIiBzaXplPVwic21hbGxcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgIDwvaW9uLWZhYi1idXR0b24+XG4gICAgICAgICAgICAgIDwvaW9uLWZhYj5cblxuICAgICAgICAgICAgICA8aW9uLWltZyAoY2xpY2spPVwib3Blbk1vZGFsKG5ld3MpXCIgW3NyY109XCJuZXdzLmltYWdlXCIgW2FsdF09XCJuZXdzLnRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgPGlvbi1jYXJkLWhlYWRlciAoY2xpY2spPVwib3Blbk1vZGFsKG5ld3MpXCI+XG4gICAgICAgICAgICAgICAgPGlvbi1jYXJkLXN1YnRpdGxlPnt7bmV3cy5kYXRlIHwgZGF0ZTonZGQuTU0uWVlZWSBISDptbSd9fTwvaW9uLWNhcmQtc3VidGl0bGU+XG4gICAgICAgICAgICAgICAgPGlvbi1jYXJkLXRpdGxlPnt7bmV3cy50aXRsZX19PC9pb24tY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgPC9pb24tY2FyZC1oZWFkZXI+XG5cbiAgICAgICAgICAgICAgPGlvbi1jYXJkLWNvbnRlbnQgKGNsaWNrKT1cIm9wZW5Nb2RhbChuZXdzKVwiIFtpbm5lckhUTUxdPVwibmV3cy5sZWFkVGV4dFwiPlxuXG4gICAgICAgICAgICAgIDwvaW9uLWNhcmQtY29udGVudD5cbiAgICAgICAgICAgICAgPGlvbi1yb3c+XG4gICAgICAgICAgICAgICAgPGlvbi1jb2wgc2l6ZT1cIjhcIj5cbiAgICAgICAgICAgICAgICAgIDxpb24tY2hpcD5cbiAgICAgICAgICAgICAgICAgICAgPGlvbi1hdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJ7e25ld3MuYXV0aG9ySW1hZ2V9fVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvaW9uLWF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgPGlvbi1sYWJlbD57e25ld3MuYXV0aG9yfX08L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvaW9uLWNoaXA+XG4gICAgICAgICAgICAgICAgPC9pb24tY29sPlxuICAgICAgICAgICAgICAgIDxpb24tY29sIHNpemU9XCI0XCI+XG4gICAgICAgICAgICAgICAgICA8aW9uLWxhYmVsPjwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgIDwvaW9uLWNvbD5cbiAgICAgICAgICAgICAgPC9pb24tcm93PlxuICAgICAgICAgICAgPC9pb24tY2FyZD5cbiAgICAgICAgICA8L2lvbi1jb2w+XG4gICAgICAgIDwvaW9uLXJvdz5cbiAgICAgIDwvaW9uLWdyaWQ+XG4gICAgPC9pb24tbGlzdD5cbiAgPC9uZy1jb250YWluZXI+XG4gIDwhLS1cblxuICA8aW9uLWxpc3QgKm5nSWY9XCJsb2FkaW5nXCI+XG4gICAgPGlvbi1ncmlkPlxuICAgICAgPGlvbi1yb3cgID4gXG4gICAgICAgIDxpb24tY29sIHNpemUtbGc9XCI0XCIgc2l6ZS1tZD1cIjZcIiBzaXplLXNtPVwiNlwiIHNpemU9XCIxMlwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNrZWxldG9uXCI+XG4gICAgICAgICAgPGlvbi1jYXJkID5cbiAgICAgICAgICAgIDxpb24tY2FyZC1oZWFkZXI+XG4gICAgICAgICAgICAgIDxpb24tY2FyZC1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogNjAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPC9pb24tY2FyZC1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgPGlvbi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA4MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgICA8L2lvbi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgPC9pb24tY2FyZC1oZWFkZXI+XG5cbiAgICAgICAgICAgIDxpb24tY2FyZC1jb250ZW50PlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogODAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDYwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA4MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogNjAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDgwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICA8L2lvbi1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgPC9pb24tY2FyZD5cblxuICAgICAgICA8L2lvbi1jb2w+XG4gICAgICAgIFxuICAgICAgPC9pb24tcm93PlxuICAgIDwvaW9uLWdyaWQ+XG4gICAgXG4gIDwvaW9uLWxpc3Q+XG4tLT5cblxuICA8d2ViLXNvY2lhbC1zaGFyZSBbc2hvd109XCJzaG93U29jaWFsU2hhcmVcIiBbc2hhcmVdPVwic2hhcmVTb2NpYWxTaGFyZU9wdGlvbnNcIiAoY2xvc2VkKT1cInNob3dTb2NpYWxTaGFyZSA9IGZhbHNlXCI+XG5cbiAgICA8aW9uLWljb24gc2xvdD1cInR3aXR0ZXJcIiBuYW1lPVwibG9nby10d2l0dGVyXCI+PC9pb24taWNvbj5cbiAgICA8IS0tIDxmYS1pY29uXG4gICAgICBbaWNvbl09XCJmYVR3aXR0ZXJcIlxuICAgICAgc2xvdD1cInR3aXR0ZXJcIlxuICAgICAgc3R5bGU9XCJjb2xvcjogIzAwYWNlZDsgZGlzcGxheTogYmxvY2tcIlxuICAgID48L2ZhLWljb24+LS0+XG4gICAgPGZhLWljb24gW2ljb25dPVwiZmFGYWNlYm9va1wiIHNsb3Q9XCJmYWNlYm9va1wiIHN0eWxlPVwiY29sb3I6ICMwMGFjZWQ7IGRpc3BsYXk6IGJsb2NrXCI+PC9mYS1pY29uPlxuICAgIDxmYS1pY29uIFtpY29uXT1cImZhV2hhdHNhcHBcIiBzbG90PVwiZmFjZWJvb2tcIiBzbG90PVwid2hhdHNhcHBcIiBzdHlsZT1cImNvbG9yOiAjMjVkMzY2OyBkaXNwbGF5OiBibG9ja1wiPjwvZmEtaWNvbj5cbiAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYUxpbmtlZGluXCIgc2xvdD1cImxpbmtlZGluXCIgc3R5bGU9XCJjb2xvcjogIzAwNzdiNTsgZGlzcGxheTogYmxvY2tcIj48L2ZhLWljb24+XG4gICAgPGZhLWljb24gW2ljb25dPVwiZmFFbnZlbG9wZVwiIHNsb3Q9XCJlbWFpbFwiIGFyaWFMYWJlbD1cIkVtYWlsXCIgc3R5bGU9XCJjb2xvcjogI2ZmOGVhMzsgZGlzcGxheTogYmxvY2tcIj48L2ZhLWljb24+XG4gICAgPGZhLWljb24gW2ljb25dPVwiZmFDb3B5XCIgc2xvdD1cImNvcHlcIiBhcmlhTGFiZWw9XCJDb3B5XCIgc3R5bGU9XCJjb2xvcjogI2ZmOGVhMzsgZGlzcGxheTogYmxvY2tcIj48L2ZhLWljb24+XG4gIDwvd2ViLXNvY2lhbC1zaGFyZT5cblxuICA8IS0tIGZhYiBwbGFjZWQgdG8gdGhlIGJvdHRvbSBlbmQgXG4gIDxpb24tZmFiIHZlcnRpY2FsPVwiYm90dG9tXCIgaG9yaXpvbnRhbD1cImVuZFwiIHNsb3Q9XCJmaXhlZFwiPlxuICAgIDxpb24tZmFiLWJ1dHRvbiAoY2xpY2spPVwib3BlbkFkZE5ld3MoKVwiPlxuICAgICAgPGlvbi1pY29uIG5hbWU9XCJhZGQtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgPC9pb24tZmFiLWJ1dHRvbj5cbiAgPC9pb24tZmFiPi0tPlxuPC9pb24tY29udGVudD5cblxuPG5nLXRlbXBsYXRlICNsb2FkaW5nPlxuICA8aW9uLWxpc3Q+XG4gICAgPGlvbi1ncmlkPlxuICAgICAgPGlvbi1yb3c+XG4gICAgICAgIDxpb24tY29sIHNpemUtbGc9XCI0XCIgc2l6ZS1tZD1cIjZcIiBzaXplLXNtPVwiNlwiIHNpemU9XCIxMlwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNrZWxldG9uXCI+XG4gICAgICAgICAgPGlvbi1jYXJkPlxuICAgICAgICAgICAgPGlvbi1jYXJkLWhlYWRlcj5cbiAgICAgICAgICAgICAgPGlvbi1jYXJkLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA2MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgICA8L2lvbi1jYXJkLXN1YnRpdGxlPlxuICAgICAgICAgICAgICA8aW9uLWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDgwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDwvaW9uLWNhcmQtdGl0bGU+XG4gICAgICAgICAgICA8L2lvbi1jYXJkLWhlYWRlcj5cblxuICAgICAgICAgICAgPGlvbi1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA4MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogNjAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDgwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA2MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogODAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgIDwvaW9uLWNhcmQtY29udGVudD5cbiAgICAgICAgICA8L2lvbi1jYXJkPlxuICAgICAgICA8L2lvbi1jb2w+XG4gICAgICA8L2lvbi1yb3c+XG4gICAgPC9pb24tZ3JpZD5cbiAgPC9pb24tbGlzdD5cbjwvbmctdGVtcGxhdGU+IiwgImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE5ld3NQYWdlIH0gZnJvbSAnLi9uZXdzLnBhZ2UnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogTmV3c1BhZ2VcbiAgfVxuXVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBOZXdzUGFnZVJvdXRpbmdNb2R1bGUge31cbiIsICJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5cbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBOZXdzUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL25ld3Mtcm91dGluZy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOZXdzUGFnZSB9IGZyb20gJy4vbmV3cy5wYWdlJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIE5ld3NQYWdlUm91dGluZ01vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGVcbiAgXSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxuICBkZWNsYXJhdGlvbnM6IFtOZXdzUGFnZV1cbn0pXG5leHBvcnQgY2xhc3MgTmV3c1BhZ2VNb2R1bGUge31cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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WUFBQSxHQUFBLFNBQUEsV0FBQSxXQUFBLFNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLFlBQUEsR0FBQSxTQUFBLFdBQUEsV0FBQSxTQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxTQUFBLGFBQUEsU0FBQSxHQUFBLFNBQUEsV0FBQSxXQUFBLFNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLFFBQUEsYUFBQSxRQUFBLEdBQUEsU0FBQSxXQUFBLFdBQUEsU0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxRQUFBLGlCQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFFBQUEseUJBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsUUFBQSxlQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsUUFBQSx1QkFBQSxHQUFBLENBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxXQUFBLEtBQUEsV0FBQSxLQUFBLFdBQUEsS0FBQSxRQUFBLE1BQUEsR0FBQSxTQUFBLFNBQUEsR0FBQSxDQUFBLFdBQUEsS0FBQSxXQUFBLEtBQUEsV0FBQSxLQUFBLFFBQUEsSUFBQSxHQUFBLENBQUEsVUFBQSxNQUFBLEdBQUEsQ0FBQSxZQUFBLE9BQUEsY0FBQSxPQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxTQUFBLE9BQUEsS0FBQSxHQUFBLENBQUEsR0FBQSxTQUFBLFdBQUEsR0FBQSxDQUFBLFFBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxLQUFBLEdBQUEsQ0FBQSxRQUFBLEdBQUEsR0FBQSxDQUFBLFlBQUEsT0FBQSxjQUFBLEtBQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxRQUFBLE9BQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxHQUFBLFNBQUEsS0FBQSxHQUFBLENBQUEsWUFBQSxJQUFBLEdBQUEsU0FBQSxLQUFBLENBQUEsR0FBQSxVQUFBLFNBQUEsa0JBQUEsSUFBQSxLQUFBO0FBQUEsTUFBQSxLQUFBLEdBQUE7O0FDekRy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
