import {
  UserProfileService
} from "./chunk-7XMQNZXL.js";
import {
  FirebaseService
} from "./chunk-RMTOAZGR.js";
import {
  AuthService
} from "./chunk-AMO7VPPH.js";
import {
  AlertController,
  CommonModule,
  FormsModule,
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRow,
  IonSearchbar,
  IonText,
  IonicModule,
  MenuController,
  NgForOf,
  NgIf,
  RouterModule,
  TextValueAccessorDirective,
  ToastController,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  catchError,
  lastValueFrom,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PZUQX53K.js";
import "./chunk-JFBLR2DD.js";
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

// src/app/pages/onboarding/onboarding-club/onboarding-club.page.ts
function OnboardingClubPage_ion_list_header_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list-header");
    \u0275\u0275text(1, " Unihockey ");
    \u0275\u0275elementEnd();
  }
}
function OnboardingClubPage_ion_item_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 14);
    \u0275\u0275listener("click", function OnboardingClubPage_ion_item_20_Template_ion_item_click_0_listener() {
      const club_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.joinClub(club_r2));
    });
    \u0275\u0275elementStart(1, "ion-avatar", 15);
    \u0275\u0275element(2, "img", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-label", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const club_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("alt", club_r2.name);
    \u0275\u0275propertyInterpolate("src", club_r2.logo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", club_r2.name, " ");
  }
}
function OnboardingClubPage_ion_list_header_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list-header");
    \u0275\u0275text(1, " Volleyball ");
    \u0275\u0275elementEnd();
  }
}
function OnboardingClubPage_ion_item_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 14);
    \u0275\u0275listener("click", function OnboardingClubPage_ion_item_22_Template_ion_item_click_0_listener() {
      const club_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.joinClub(club_r5));
    });
    \u0275\u0275elementStart(1, "ion-avatar", 15);
    \u0275\u0275element(2, "img", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-label", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const club_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("alt", club_r5.name);
    \u0275\u0275propertyInterpolate("src", club_r5.logo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", club_r5.name, " ");
  }
}
function OnboardingClubPage_ion_list_header_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list-header");
    \u0275\u0275text(1, " Handball ");
    \u0275\u0275elementEnd();
  }
}
function OnboardingClubPage_ion_item_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 14);
    \u0275\u0275listener("click", function OnboardingClubPage_ion_item_24_Template_ion_item_click_0_listener() {
      const club_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.joinClub(club_r7));
    });
    \u0275\u0275elementStart(1, "ion-avatar", 15);
    \u0275\u0275element(2, "img", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-label", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const club_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("alt", club_r7.name);
    \u0275\u0275propertyInterpolate("src", club_r7.logo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", club_r7.name, " ");
  }
}
function OnboardingClubPage_ion_list_header_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list-header");
    \u0275\u0275text(1, " Turnverein ");
    \u0275\u0275elementEnd();
  }
}
function OnboardingClubPage_ion_item_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 14);
    \u0275\u0275listener("click", function OnboardingClubPage_ion_item_26_Template_ion_item_click_0_listener() {
      const club_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.joinClub(club_r9));
    });
    \u0275\u0275elementStart(1, "ion-avatar", 15);
    \u0275\u0275element(2, "img", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-label", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const club_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("alt", club_r9.name);
    \u0275\u0275propertyInterpolate("src", club_r9.logo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", club_r9.name, " ");
  }
}
var _OnboardingClubPage = class _OnboardingClubPage {
  constructor(fbService, authService, translate, toastController, alertController, profileService, menuCtrl) {
    this.fbService = fbService;
    this.authService = authService;
    this.translate = translate;
    this.toastController = toastController;
    this.alertController = alertController;
    this.profileService = profileService;
    this.menuCtrl = menuCtrl;
    this.menuCtrl.enable(false, "menu");
  }
  ngOnInit() {
    this.menuCtrl.enable(false, "menu");
    this.clubListSU = [];
    this.clubListSV = [];
    this.clubListSH = [];
    this.clubListST = [];
    this.subscription = this.authService.getUser$().pipe(take(1), tap((user) => this.user = user), switchMap((user) => user ? this.profileService.getUserProfile(user) : of(null))).subscribe((profile) => {
      this.userProfile$ = of(profile);
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  getUserProfile() {
    return this.authService.getUser$().pipe(switchMap((user) => {
      if (!user || !user.uid) {
        console.log("No user found");
        return of(null);
      }
      return this.profileService.getUserProfile(user);
    }), catchError((err) => {
      console.error("Error fetching user profile", err);
      return of(null);
    }));
  }
  joinClub(club) {
    return __async(this, null, function* () {
      console.log(club);
      if (club.active) {
        const alert = yield this.alertController.create({
          message: (yield lastValueFrom(this.translate.get("onboarding.do_you_want_to_join__club"))) + ` ${club.name}`,
          header: yield lastValueFrom(this.translate.get("onboarding.join__club")),
          buttons: [
            {
              text: yield lastValueFrom(this.translate.get("common.no")),
              role: "destructive",
              handler: () => {
                console.log("nein");
                this.presentCancelToast();
              }
            },
            {
              text: yield lastValueFrom(this.translate.get("common.yes")),
              handler: (data) => __async(this, null, function* () {
                try {
                  yield this.fbService.setClubRequest(club.id, this.user.uid);
                  yield this.presentRequestToast();
                  yield this.presentRequestSentAlert(club.name);
                } catch (err) {
                  console.log(err.message);
                  if (err.message === "Missing or insufficient permissions.") {
                    this.presentErrorAlert();
                  }
                }
              })
            }
          ]
        });
        yield alert.present();
      } else {
        console.log("dieser club existiert noch nicht");
        const alert = yield this.alertController.create({
          header: "Club aktivieren",
          message: "Dieser Club wurde noch nicht aktiviert. M\xF6chtest du den Club aktivieren? Falls deine E-Mail Adresse bereits hinterlegt ist, werden wir deinen Club sofort aktivieren.",
          // subHeader: "Fülle dazu ein Antragsformular aus",
          buttons: [
            {
              text: yield lastValueFrom(this.translate.get("common.cancel")),
              role: "cancel",
              handler: () => {
                console.log("abbrechen");
                this.presentCancelToast();
              }
            },
            {
              text: yield lastValueFrom(this.translate.get("common.ok")),
              handler: () => __async(this, null, function* () {
                console.log("OK");
                yield this.fbService.setClubRequest(club.id, this.user.uid);
                yield this.presentRequestToast();
                yield this.presentActivatetSentAlert(club.name);
              })
            }
          ]
        });
        alert.present();
      }
    });
  }
  presentRequestToast() {
    return __async(this, null, function* () {
      const toast = yield this.toastController.create({
        message: yield lastValueFrom(this.translate.get("onboarding.success__request_sent")),
        duration: 1500,
        position: "top",
        color: "success"
      });
      yield toast.present();
    });
  }
  presentCancelToast() {
    return __async(this, null, function* () {
      const toast = yield this.toastController.create({
        message: yield lastValueFrom(this.translate.get("onboarding.warning__action_canceled")),
        duration: 1500,
        position: "top",
        color: "danger"
      });
      yield toast.present();
    });
  }
  presentRequestSentAlert(clubName) {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        cssClass: "my-custom-class",
        header: yield lastValueFrom(this.translate.get("onboarding.success__application_sent")),
        // subHeader: "",
        message: yield lastValueFrom(this.translate.get("onboarding.success__application_sent_desc")),
        buttons: [
          {
            text: yield lastValueFrom(this.translate.get("common.logout")),
            handler: () => __async(this, null, function* () {
              this.logout();
            })
          }
        ]
      });
      yield alert.present();
      const { role } = yield alert.onDidDismiss();
      console.log("onDidDismiss resolved with role", role);
    });
  }
  presentActivatetSentAlert(clubName) {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        cssClass: "my-custom-class",
        header: yield lastValueFrom(this.translate.get("onboarding.success__activate_pplication_sent")),
        // subHeader: "",
        message: yield lastValueFrom(this.translate.get("onboarding.success__activate_application_sent_desc")),
        buttons: [
          {
            text: yield lastValueFrom(this.translate.get("common.logout")),
            handler: () => __async(this, null, function* () {
              this.logout();
            })
          }
        ]
      });
      yield alert.present();
      const { role } = yield alert.onDidDismiss();
      console.log("onDidDismiss resolved with role", role);
    });
  }
  presentErrorAlert() {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        cssClass: "my-custom-class",
        header: yield lastValueFrom(this.translate.get("onboarding.error__clubRequest")),
        subHeader: "",
        message: yield lastValueFrom(this.translate.get("onboarding.error__clubRequest_desc")),
        buttons: [
          {
            text: yield lastValueFrom(this.translate.get("common.ok")),
            handler: () => __async(this, null, function* () {
            })
          }
        ]
      });
      yield alert.present();
      const { role } = yield alert.onDidDismiss();
      console.log("onDidDismiss resolved with role", role);
    });
  }
  handleChange(event) {
    console.log(event.detail.value);
    const searchValue = event.detail.value;
    if (event.detail.value) {
      console.log("before club search");
      this.clubListSub = this.fbService.searchClubListRef(event.detail.value).pipe(
        take(1),
        map((clubs) => clubs.filter((searchClub) => searchClub.name.toLowerCase().includes(event.detail.value.toLowerCase())))
        // return club.name.search(searchValue)
      ).subscribe((data) => {
        console.log(data);
        this.clubListSU = data.filter((el) => el.type == "swissunihockey");
        this.clubListSV = data.filter((el) => el.type == "swissvolley");
        this.clubListSH = data.filter((el) => el.type == "swisshandball");
        this.clubListST = data.filter((el) => el.type == "swissturnverband");
      });
    } else {
      this.clubListSU = [];
      this.clubListSV = [];
      this.clubListSH = [];
      this.clubListST = [];
    }
  }
  logout() {
    return __async(this, null, function* () {
      return this.authService.logout();
    });
  }
};
_OnboardingClubPage.\u0275fac = function OnboardingClubPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OnboardingClubPage)(\u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(UserProfileService), \u0275\u0275directiveInject(MenuController));
};
_OnboardingClubPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OnboardingClubPage, selectors: [["app-onboarding-club"]], standalone: false, decls: 29, vars: 15, consts: [["vertical", "top", "horizontal", "end"], ["size", "small", 3, "click"], ["name", "log-out-outline", "size", "small"], [1, "ion-no-padding", 2, "height", "100vh"], [2, "height", "100%"], ["size-md", "6", "size-lg", "5", 2, "display", "flex", "align-items", "center", "justify-content", "center"], [1, "ion-no-margin", 2, "max-width", "500px", "width", "100%"], ["src", "assets/logo_trans.png", "alt", "Logo", 2, "max-height", "100px", "max-width", "100px"], ["animated", "false", "search-icon", "search-circle", 1, "ion-no-padding", 3, "ionInput", "placeholder"], [1, "ion-no-margin", 3, "inset"], [4, "ngIf"], ["lines", "full", "button", "", 3, "click", 4, "ngFor", "ngForOf"], ["size-md", "6", "size-lg", "7", 1, "ion-hide-md-down", 2, "padding", "0"], [2, "height", "100%", "background-image", "url('assets/bg/login.jpg')", "background-size", "cover", "background-position", "center"], ["lines", "full", "button", "", 3, "click"], ["slot", "start"], [3, "alt", "src"], [1, "ion-text-wrap"]], template: function OnboardingClubPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-fab", 0)(2, "ion-fab-button", 1);
    \u0275\u0275listener("click", function OnboardingClubPage_Template_ion_fab_button_click_2_listener() {
      return ctx.logout();
    });
    \u0275\u0275element(3, "ion-icon", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ion-grid", 3)(5, "ion-row", 4)(6, "ion-col", 5)(7, "ion-card", 6)(8, "ion-card-content");
    \u0275\u0275element(9, "ion-img", 7);
    \u0275\u0275elementStart(10, "ion-card-title");
    \u0275\u0275text(11, "Trete deinem Club bei");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-text")(13, "p");
    \u0275\u0275text(14, "Damit wir dein Profil fertig einrichten k\xF6nnnen, musst du zuerst einem Club beitreten.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ion-searchbar", 8);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275listener("ionInput", function OnboardingClubPage_Template_ion_searchbar_ionInput_15_listener($event) {
      return ctx.handleChange($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ion-list", 9);
    \u0275\u0275template(19, OnboardingClubPage_ion_list_header_19_Template, 2, 0, "ion-list-header", 10)(20, OnboardingClubPage_ion_item_20_Template, 5, 3, "ion-item", 11)(21, OnboardingClubPage_ion_list_header_21_Template, 2, 0, "ion-list-header", 10)(22, OnboardingClubPage_ion_item_22_Template, 5, 3, "ion-item", 11)(23, OnboardingClubPage_ion_list_header_23_Template, 2, 0, "ion-list-header", 10)(24, OnboardingClubPage_ion_item_24_Template, 5, 3, "ion-item", 11)(25, OnboardingClubPage_ion_list_header_25_Template, 2, 0, "ion-list-header", 10)(26, OnboardingClubPage_ion_item_26_Template, 5, 3, "ion-item", 11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "ion-col", 12);
    \u0275\u0275element(28, "div", 13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(15);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(16, 11, "common.searchfield"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(17, 13, "onboarding.search_by_club__pholder"));
    \u0275\u0275advance(3);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.clubListSU.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.clubListSU);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.clubListSV.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.clubListSV);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.clubListSH.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.clubListSH);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.clubListST.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.clubListST);
  }
}, dependencies: [NgForOf, NgIf, IonAvatar, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonIcon, IonImg, IonItem, IonLabel, IonList, IonListHeader, IonRow, IonSearchbar, IonText, TextValueAccessorDirective, TranslatePipe], styles: ["\n\nion-list[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\nion-card-title[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important;\n}\n/*# sourceMappingURL=onboarding-club.page.css.map */"] });
var OnboardingClubPage = _OnboardingClubPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OnboardingClubPage, { className: "OnboardingClubPage", filePath: "src/app/pages/onboarding/onboarding-club/onboarding-club.page.ts", lineNumber: 19 });
})();

// src/app/pages/onboarding/onboarding-club/onboarding-club-routing.module.ts
var routes = [
  {
    path: "",
    component: OnboardingClubPage
  }
];
var _OnboardingClubPageRoutingModule = class _OnboardingClubPageRoutingModule {
};
_OnboardingClubPageRoutingModule.\u0275fac = function OnboardingClubPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OnboardingClubPageRoutingModule)();
};
_OnboardingClubPageRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _OnboardingClubPageRoutingModule });
_OnboardingClubPageRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var OnboardingClubPageRoutingModule = _OnboardingClubPageRoutingModule;

// src/app/pages/onboarding/onboarding-club/onboarding-club.module.ts
var _OnboardingClubPageModule = class _OnboardingClubPageModule {
};
_OnboardingClubPageModule.\u0275fac = function OnboardingClubPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OnboardingClubPageModule)();
};
_OnboardingClubPageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _OnboardingClubPageModule });
_OnboardingClubPageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  IonicModule,
  OnboardingClubPageRoutingModule,
  TranslateModule
] });
var OnboardingClubPageModule = _OnboardingClubPageModule;
export {
  OnboardingClubPageModule
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9vbmJvYXJkaW5nL29uYm9hcmRpbmctY2x1Yi9vbmJvYXJkaW5nLWNsdWIucGFnZS50cyIsICJzcmMvYXBwL3BhZ2VzL29uYm9hcmRpbmcvb25ib2FyZGluZy1jbHViL29uYm9hcmRpbmctY2x1Yi5wYWdlLmh0bWwiLCAic3JjL2FwcC9wYWdlcy9vbmJvYXJkaW5nL29uYm9hcmRpbmctY2x1Yi9vbmJvYXJkaW5nLWNsdWItcm91dGluZy5tb2R1bGUudHMiLCAic3JjL2FwcC9wYWdlcy9vbmJvYXJkaW5nL29uYm9hcmRpbmctY2x1Yi9vbmJvYXJkaW5nLWNsdWIubW9kdWxlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3NlciB9IGZyb20gJ0BjYXBhY2l0b3IvYnJvd3Nlcic7XG5pbXBvcnQgeyBBbGVydENvbnRyb2xsZXIsIE1lbnVDb250cm9sbGVyLCBUb2FzdENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIGNhdGNoRXJyb3IsIGxhc3RWYWx1ZUZyb20sIG1hcCwgb2YsIHN3aXRjaE1hcCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbHViIH0gZnJvbSAnc3JjL2FwcC9tb2RlbHMvY2x1Yic7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnc3JjL2FwcC9tb2RlbHMvdXNlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZVNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlL3VzZXItcHJvZmlsZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtb25ib2FyZGluZy1jbHViJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vb25ib2FyZGluZy1jbHViLnBhZ2UuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vb25ib2FyZGluZy1jbHViLnBhZ2Uuc2NzcyddLFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdDbHViUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNsdWJMaXN0U1Y6IENsdWJbXTtcbiAgY2x1Ykxpc3RTVTogQ2x1YltdO1xuICBjbHViTGlzdFNIOiBDbHViW107XG4gIGNsdWJMaXN0U1Q6IENsdWJbXTtcbiAgY2x1Ykxpc3RTdWI6IFN1YnNjcmlwdGlvbjtcbiAgdXNlcjogVXNlcjtcbiAgdXNlclByb2ZpbGUkOiBPYnNlcnZhYmxlPFByb2ZpbGU+O1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uQWN0aXZlQ2x1Ykxpc3Q6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZiU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdG9hc3RDb250cm9sbGVyOiBUb2FzdENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBhbGVydENvbnRyb2xsZXI6IEFsZXJ0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByb2ZpbGVTZXJ2aWNlOiBVc2VyUHJvZmlsZVNlcnZpY2UsXG4gICAgcHVibGljIHJlYWRvbmx5IG1lbnVDdHJsOiBNZW51Q29udHJvbGxlcixcbiAgKSB7IFxuICAgIHRoaXMubWVudUN0cmwuZW5hYmxlKGZhbHNlLCBcIm1lbnVcIik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1lbnVDdHJsLmVuYWJsZShmYWxzZSwgXCJtZW51XCIpO1xuICAgIHRoaXMuY2x1Ykxpc3RTVSA9IFtdO1xuICAgIHRoaXMuY2x1Ykxpc3RTViA9IFtdO1xuICAgIHRoaXMuY2x1Ykxpc3RTSCA9IFtdOyBcbiAgICB0aGlzLmNsdWJMaXN0U1QgPSBbXTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlciQoKS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHRhcCh1c2VyID0+IHRoaXMudXNlciA9IHVzZXIpLFxuICAgICAgc3dpdGNoTWFwKHVzZXIgPT4gdXNlciA/IHRoaXMucHJvZmlsZVNlcnZpY2UuZ2V0VXNlclByb2ZpbGUodXNlcikgOiBvZihudWxsKSlcbiAgICApLnN1YnNjcmliZShwcm9maWxlID0+IHtcbiAgICAgIHRoaXMudXNlclByb2ZpbGUkID0gb2YocHJvZmlsZSk7XG4gICAgfSlcblxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG5cbiAgZ2V0VXNlclByb2ZpbGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvLyBSZXBsYWNlICdhbnknIHdpdGggdGhlIGFjdHVhbCB0eXBlIG9mIHRoZSB1c2VyIHByb2ZpbGVcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyJCgpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHVzZXI6IFVzZXIpID0+IHtcbiAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLnVpZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gdXNlciBmb3VuZFwiKTtcbiAgICAgICAgICByZXR1cm4gb2YobnVsbCk7IC8vIFJldHVybiBudWxsIG9yIGFwcHJvcHJpYXRlIGRlZmF1bHQgdmFsdWUgaWYgdXNlciBpcyBub3QgbG9nZ2VkIGluXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsZVNlcnZpY2UuZ2V0VXNlclByb2ZpbGUodXNlcik7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlciBwcm9maWxlXCIsIGVycik7XG4gICAgICAgIHJldHVybiBvZihudWxsKTsgLy8gSGFuZGxlIHRoZSBlcnJvciBhbmQgcmV0dXJuIGEgZGVmYXVsdCB2YWx1ZVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgam9pbkNsdWIoY2x1YjogQ2x1Yikge1xuICAgIGNvbnNvbGUubG9nKGNsdWIpO1xuXG4gICAgaWYgKGNsdWIuYWN0aXZlKSB7XG4gICAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgKGF3YWl0IGxhc3RWYWx1ZUZyb20oXG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoXCJvbmJvYXJkaW5nLmRvX3lvdV93YW50X3RvX2pvaW5fX2NsdWJcIilcbiAgICAgICAgICApKSArIGAgJHtjbHViLm5hbWV9YCxcbiAgICAgICAgaGVhZGVyOiBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlLmdldChcIm9uYm9hcmRpbmcuam9pbl9fY2x1YlwiKVxuICAgICAgICApLFxuICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24ubm9cIikpLFxuICAgICAgICAgICAgcm9sZTogXCJkZXN0cnVjdGl2ZVwiLFxuICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5laW5cIik7XG4gICAgICAgICAgICAgIHRoaXMucHJlc2VudENhbmNlbFRvYXN0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24ueWVzXCIpKSxcbiAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZiU2VydmljZS5zZXRDbHViUmVxdWVzdChjbHViLmlkLCB0aGlzLnVzZXIudWlkKVxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucHJlc2VudFJlcXVlc3RUb2FzdCgpOyAvLyBBbmZyYWdlIGdlc2VuZGV0XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wcmVzZW50UmVxdWVzdFNlbnRBbGVydChjbHViLm5hbWUpOy8vIEluZm9ybSBBZG1pbiBhbmQgTG9nb3V0IGFsZXJ0XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLm1lc3NhZ2UgPT09IFwiTWlzc2luZyBvciBpbnN1ZmZpY2llbnQgcGVybWlzc2lvbnMuXCIpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJlc2VudEVycm9yQWxlcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgXG4gICAgICAgIF0sXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJkaWVzZXIgY2x1YiBleGlzdGllcnQgbm9jaCBuaWNodFwiKTtcbiAgICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgICAgaGVhZGVyOiBcIkNsdWIgYWt0aXZpZXJlblwiLFxuICAgICAgICBtZXNzYWdlOiBcIkRpZXNlciBDbHViIHd1cmRlIG5vY2ggbmljaHQgYWt0aXZpZXJ0LiBNw7ZjaHRlc3QgZHUgZGVuIENsdWIgYWt0aXZpZXJlbj8gRmFsbHMgZGVpbmUgRS1NYWlsIEFkcmVzc2UgYmVyZWl0cyBoaW50ZXJsZWd0IGlzdCwgd2VyZGVuIHdpciBkZWluZW4gQ2x1YiBzb2ZvcnQgYWt0aXZpZXJlbi5cIixcbiAgICAgICAgLy8gc3ViSGVhZGVyOiBcIkbDvGxsZSBkYXp1IGVpbiBBbnRyYWdzZm9ybXVsYXIgYXVzXCIsXG4gICAgICAgIGJ1dHRvbnM6IFt7XG4gICAgICAgICAgdGV4dDogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uY2FuY2VsXCIpKSxcbiAgICAgICAgICByb2xlOiBcImNhbmNlbFwiLFxuICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWJicmVjaGVuXCIpO1xuICAgICAgICAgICAgdGhpcy5wcmVzZW50Q2FuY2VsVG9hc3QoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5va1wiKSksXG4gICAgICAgIFxuICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT0tcIik7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZiU2VydmljZS5zZXRDbHViUmVxdWVzdChjbHViLmlkLCB0aGlzLnVzZXIudWlkKVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wcmVzZW50UmVxdWVzdFRvYXN0KCk7IC8vIEFuZnJhZ2UgZ2VzZW5kZXRcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucHJlc2VudEFjdGl2YXRldFNlbnRBbGVydChjbHViLm5hbWUpOyBcbiAgICAgICAgICB9LFxuICAgICAgICB9XVxuICAgICAgfSk7XG4gICAgICBhbGVydC5wcmVzZW50KCk7XG4gICAgfVxuICB9XG4gIGFzeW5jIHByZXNlbnRSZXF1ZXN0VG9hc3QoKSB7XG4gICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KFwib25ib2FyZGluZy5zdWNjZXNzX19yZXF1ZXN0X3NlbnRcIilcbiAgICAgICksXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwic3VjY2Vzc1wiLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgdG9hc3QucHJlc2VudCgpO1xuICB9XG4gIGFzeW5jIHByZXNlbnRDYW5jZWxUb2FzdCgpIHtcbiAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoXCJvbmJvYXJkaW5nLndhcm5pbmdfX2FjdGlvbl9jYW5jZWxlZFwiKVxuICAgICAgKSxcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgICBjb2xvcjogXCJkYW5nZXJcIixcbiAgICB9KTtcblxuICAgIGF3YWl0IHRvYXN0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIHByZXNlbnRSZXF1ZXN0U2VudEFsZXJ0KGNsdWJOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBjc3NDbGFzczogXCJteS1jdXN0b20tY2xhc3NcIixcbiAgICAgIGhlYWRlcjogYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KFwib25ib2FyZGluZy5zdWNjZXNzX19hcHBsaWNhdGlvbl9zZW50XCIpXG4gICAgICApLFxuICAgICAgLy8gc3ViSGVhZGVyOiBcIlwiLFxuICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KFwib25ib2FyZGluZy5zdWNjZXNzX19hcHBsaWNhdGlvbl9zZW50X2Rlc2NcIilcbiAgICAgICksXG4gICAgICBidXR0b25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5sb2dvdXRcIikpLFxuICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9nb3V0KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XG5cbiAgICBjb25zdCB7IHJvbGUgfSA9IGF3YWl0IGFsZXJ0Lm9uRGlkRGlzbWlzcygpO1xuICAgIGNvbnNvbGUubG9nKFwib25EaWREaXNtaXNzIHJlc29sdmVkIHdpdGggcm9sZVwiLCByb2xlKTtcbiAgfVxuXG5cblxuICBhc3luYyBwcmVzZW50QWN0aXZhdGV0U2VudEFsZXJ0KGNsdWJOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBjc3NDbGFzczogXCJteS1jdXN0b20tY2xhc3NcIixcbiAgICAgIGhlYWRlcjogYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KFwib25ib2FyZGluZy5zdWNjZXNzX19hY3RpdmF0ZV9wcGxpY2F0aW9uX3NlbnRcIilcbiAgICAgICksXG4gICAgICAvLyBzdWJIZWFkZXI6IFwiXCIsXG4gICAgICBtZXNzYWdlOiBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoXCJvbmJvYXJkaW5nLnN1Y2Nlc3NfX2FjdGl2YXRlX2FwcGxpY2F0aW9uX3NlbnRfZGVzY1wiKVxuICAgICAgKSxcbiAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLmxvZ291dFwiKSksXG4gICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2dvdXQoKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcblxuICAgIGNvbnN0IHsgcm9sZSB9ID0gYXdhaXQgYWxlcnQub25EaWREaXNtaXNzKCk7XG4gICAgY29uc29sZS5sb2coXCJvbkRpZERpc21pc3MgcmVzb2x2ZWQgd2l0aCByb2xlXCIsIHJvbGUpO1xuICB9XG5cblxuICBhc3luYyBwcmVzZW50RXJyb3JBbGVydCgpIHtcbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBjc3NDbGFzczogXCJteS1jdXN0b20tY2xhc3NcIixcbiAgICAgIGhlYWRlcjogYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KFwib25ib2FyZGluZy5lcnJvcl9fY2x1YlJlcXVlc3RcIilcbiAgICAgICksXG4gICAgICBzdWJIZWFkZXI6IFwiXCIsXG4gICAgICBtZXNzYWdlOiBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoXCJvbmJvYXJkaW5nLmVycm9yX19jbHViUmVxdWVzdF9kZXNjXCIpXG4gICAgICApLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24ub2tcIikpLFxuICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcblxuICAgIGNvbnN0IHsgcm9sZSB9ID0gYXdhaXQgYWxlcnQub25EaWREaXNtaXNzKCk7XG4gICAgY29uc29sZS5sb2coXCJvbkRpZERpc21pc3MgcmVzb2x2ZWQgd2l0aCByb2xlXCIsIHJvbGUpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudC5kZXRhaWwudmFsdWUpO1xuICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gZXZlbnQuZGV0YWlsLnZhbHVlO1xuXG4gICAgaWYgKGV2ZW50LmRldGFpbC52YWx1ZSkge1xuICAgICAgY29uc29sZS5sb2coXCJiZWZvcmUgY2x1YiBzZWFyY2hcIik7XG4gICAgICAvLyBTZWFyY2hcbiAgICAgIHRoaXMuY2x1Ykxpc3RTdWIgPSB0aGlzLmZiU2VydmljZVxuICAgICAgICAuc2VhcmNoQ2x1Ykxpc3RSZWYoZXZlbnQuZGV0YWlsLnZhbHVlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgIG1hcCgoY2x1YnM6IENsdWJbXSkgPT5cbiAgICAgICAgICAgIGNsdWJzLmZpbHRlcigoc2VhcmNoQ2x1YikgPT5cbiAgICAgICAgICAgICAgc2VhcmNoQ2x1Yi5uYW1lXG4gICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAuaW5jbHVkZXMoZXZlbnQuZGV0YWlsLnZhbHVlLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgIC8vIHJldHVybiBjbHViLm5hbWUuc2VhcmNoKHNlYXJjaFZhbHVlKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIHRoaXMuY2x1Ykxpc3RTVSA9IGRhdGEuZmlsdGVyKChlbCkgPT4gZWwudHlwZSA9PSBcInN3aXNzdW5paG9ja2V5XCIpO1xuICAgICAgICAgIHRoaXMuY2x1Ykxpc3RTViA9IGRhdGEuZmlsdGVyKChlbCkgPT4gZWwudHlwZSA9PSBcInN3aXNzdm9sbGV5XCIpO1xuICAgICAgICAgIHRoaXMuY2x1Ykxpc3RTSCA9IGRhdGEuZmlsdGVyKChlbCkgPT4gZWwudHlwZSA9PSBcInN3aXNzaGFuZGJhbGxcIik7XG4gICAgICAgICAgdGhpcy5jbHViTGlzdFNUID0gZGF0YS5maWx0ZXIoKGVsKSA9PiBlbC50eXBlID09IFwic3dpc3N0dXJudmVyYmFuZFwiKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2x1Ykxpc3RTVSA9IFtdO1xuICAgICAgdGhpcy5jbHViTGlzdFNWID0gW107XG4gICAgICB0aGlzLmNsdWJMaXN0U0ggPSBbXTtcbiAgICAgIHRoaXMuY2x1Ykxpc3RTVCA9IFtdO1xuICAgICAgLy8gdGhpcy5hY3RpdmVDbHViTGlzdCA9IHRoaXMuYWN0aXZlQ2x1Ykxpc3RCYWNrdXA7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgbG9nb3V0KCkge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICB9XG5cbn1cbiIsICI8aW9uLWNvbnRlbnQ+XG4gIDxpb24tZmFiIHZlcnRpY2FsPVwidG9wXCIgaG9yaXpvbnRhbD1cImVuZFwiPlxuICAgIDxpb24tZmFiLWJ1dHRvbiBzaXplPVwic21hbGxcIiAoY2xpY2spPVwibG9nb3V0KClcIj5cbiAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nLW91dC1vdXRsaW5lXCIgc2l6ZT1cInNtYWxsXCI+PC9pb24taWNvbj5cbiAgICA8L2lvbi1mYWItYnV0dG9uPlxuICA8L2lvbi1mYWI+XG5cbiAgPGlvbi1ncmlkIGNsYXNzPVwiaW9uLW5vLXBhZGRpbmdcIiBzdHlsZT1cImhlaWdodDogMTAwdmg7XCI+XG4gICAgPGlvbi1yb3cgc3R5bGU9XCJoZWlnaHQ6IDEwMCU7XCI+XG4gICAgICA8IS0tIExvZ2luIEZvcm0gQ29sdW1uIC0tPlxuICAgICAgPGlvbi1jb2wgc2l6ZS1tZD1cIjZcIiBzaXplLWxnPVwiNVwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgICAgIDxpb24tY2FyZCBjbGFzcz1cImlvbi1uby1tYXJnaW5cIiBzdHlsZT1cIm1heC13aWR0aDogNTAwcHg7IHdpZHRoOiAxMDAlO1wiPlxuICAgICAgICAgIDxpb24tY2FyZC1jb250ZW50PlxuICAgICAgICAgICAgPGlvbi1pbWcgc3JjPVwiYXNzZXRzL2xvZ29fdHJhbnMucG5nXCIgYWx0PVwiTG9nb1wiIHN0eWxlPVwibWF4LWhlaWdodDogMTAwcHg7IG1heC13aWR0aDogMTAwcHg7XCI+PC9pb24taW1nPlxuICAgICAgICAgICAgPGlvbi1jYXJkLXRpdGxlPlRyZXRlIGRlaW5lbSBDbHViIGJlaTwvaW9uLWNhcmQtdGl0bGU+ICAgICAgICAgICBcbiAgICAgICAgICAgIDxpb24tdGV4dD5cbiAgICAgICAgICAgICAgPHA+RGFtaXQgd2lyIGRlaW4gUHJvZmlsIGZlcnRpZyBlaW5yaWNodGVuIGvDtm5ubmVuLCBtdXNzdCBkdSB6dWVyc3QgZWluZW0gQ2x1YiBiZWl0cmV0ZW4uPC9wPlxuICAgICAgICAgICAgICA8IS0tPHA+U3VjaGUgZGVpbmVuIENsdWIgw7xiZXIgZGFzIFN1Y2hmZWxkIHVuZCBzdGVsbGUgYW5zY2hsaWVzc2VuZCBlaW5lIEJlaXRyaXR0c2FuZnJhZ2UgYW4gZGVpbmVuIFZlcmVpbi4gRGllIFZlcmFudHdvcmxpY2hlbiBQZXJzb25lbiB3ZXJkZW4gYW5zY2hsaWVzc2VuZCBwcsO8ZmVuIG9iIGR1IGJlcmVjaHRpZ3QgYmlzdCwgZGllc2VtIFZlcmVpbiBiZWl6dXRyZXRlbiB1bmQgZsO8Z2VuIGRpY2ggZWluZW0gVGVhbSBoaW56dS4gRHUgd2lyc3QgcGVyIEUtTWFpbCBCZW5hY2hyaWNodGlndCwgd2VubiBkZWluIEFudHJhZyBhbmdlbm9tbWVuIHd1cmRlLjwvcD4tLT5cbiAgICAgICAgICAgIDwvaW9uLXRleHQ+XG4gICAgICAgICAgICA8aW9uLXNlYXJjaGJhciAgY2xhc3M9XCJpb24tbm8tcGFkZGluZ1wiIChpb25JbnB1dCk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiIGFuaW1hdGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICBzZWFyY2gtaWNvbj1cInNlYXJjaC1jaXJjbGVcIiBwbGFjZWhvbGRlcj0ne3tcImNvbW1vbi5zZWFyY2hmaWVsZFwiIHwgdHJhbnNsYXRlfX0nXG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09J1wib25ib2FyZGluZy5zZWFyY2hfYnlfY2x1Yl9fcGhvbGRlclwiIHwgIHRyYW5zbGF0ZSc+PC9pb24tc2VhcmNoYmFyPlxuICAgICAgICAgICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCIgY2xhc3M9XCJpb24tbm8tbWFyZ2luXCI+XG4gICAgICAgICAgICAgIDxpb24tbGlzdC1oZWFkZXIgKm5nSWY9XCJjbHViTGlzdFNVLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICBVbmlob2NrZXlcbiAgICAgICAgICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG4gICAgICAgICAgICAgIDxpb24taXRlbSBsaW5lcz1cImZ1bGxcIiAqbmdGb3I9XCJsZXQgY2x1YiBvZiBjbHViTGlzdFNVXCIgKGNsaWNrKT1cImpvaW5DbHViKGNsdWIpXCIgYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxpb24tYXZhdGFyIHNsb3Q9XCJzdGFydFwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJ7e2NsdWIubmFtZX19XCIgc3JjPVwie3tjbHViLmxvZ299fVwiIC8+XG4gICAgICAgICAgICAgICAgPC9pb24tYXZhdGFyPlxuICAgICAgICAgICAgICAgIDxpb24tbGFiZWwgY2xhc3M9XCJpb24tdGV4dC13cmFwXCI+e3tjbHViLm5hbWV9fSA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgPC9pb24taXRlbT5cblxuICAgICAgICAgICAgICA8aW9uLWxpc3QtaGVhZGVyICpuZ0lmPVwiY2x1Ykxpc3RTVi5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgVm9sbGV5YmFsbFxuICAgICAgICAgICAgICA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgICAgICAgPGlvbi1pdGVtIGxpbmVzPVwiZnVsbFwiICpuZ0Zvcj1cImxldCBjbHViIG9mIGNsdWJMaXN0U1ZcIiAoY2xpY2spPVwiam9pbkNsdWIoY2x1YilcIiBidXR0b24+XG4gICAgICAgICAgICAgICAgPGlvbi1hdmF0YXIgc2xvdD1cInN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cInt7Y2x1Yi5uYW1lfX1cIiBzcmM9XCJ7e2NsdWIubG9nb319XCIgLz5cbiAgICAgICAgICAgICAgICA8L2lvbi1hdmF0YXI+XG4gICAgICAgICAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj57e2NsdWIubmFtZX19IDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICAgICAgICAgIDxpb24tbGlzdC1oZWFkZXIgKm5nSWY9XCJjbHViTGlzdFNILmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICBIYW5kYmFsbFxuICAgICAgICAgICAgICA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgICAgICAgPGlvbi1pdGVtIGxpbmVzPVwiZnVsbFwiICpuZ0Zvcj1cImxldCBjbHViIG9mIGNsdWJMaXN0U0hcIiAoY2xpY2spPVwiam9pbkNsdWIoY2x1YilcIiBidXR0b24+XG4gICAgICAgICAgICAgICAgPGlvbi1hdmF0YXIgc2xvdD1cInN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cInt7Y2x1Yi5uYW1lfX1cIiBzcmM9XCJ7e2NsdWIubG9nb319XCIgLz5cbiAgICAgICAgICAgICAgICA8L2lvbi1hdmF0YXI+XG4gICAgICAgICAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj57e2NsdWIubmFtZX19IDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICAgICAgICAgIDxpb24tbGlzdC1oZWFkZXIgKm5nSWY9XCJjbHViTGlzdFNULmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICBUdXJudmVyZWluXG4gICAgICAgICAgICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICAgICAgICA8aW9uLWl0ZW0gbGluZXM9XCJmdWxsXCIgKm5nRm9yPVwibGV0IGNsdWIgb2YgY2x1Ykxpc3RTVFwiIChjbGljayk9XCJqb2luQ2x1YihjbHViKVwiIGJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8aW9uLWF2YXRhciBzbG90PVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwie3tjbHViLm5hbWV9fVwiIHNyYz1cInt7Y2x1Yi5sb2dvfX1cIiAvPlxuICAgICAgICAgICAgICAgIDwvaW9uLWF2YXRhcj5cbiAgICAgICAgICAgICAgICA8aW9uLWxhYmVsIGNsYXNzPVwiaW9uLXRleHQtd3JhcFwiPnt7Y2x1Yi5uYW1lfX0gPC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgICAgICAgIDwvaW9uLWxpc3Q+XG5cbiAgICAgICAgICA8L2lvbi1jYXJkLWNvbnRlbnQ+XG4gICAgICAgIDwvaW9uLWNhcmQ+XG4gICAgICA8L2lvbi1jb2w+XG4gICAgICA8IS0tIEltYWdlIENvbHVtbiAtLT5cbiAgICAgIDxpb24tY29sIHNpemUtbWQ9XCI2XCIgc2l6ZS1sZz1cIjdcIiBzdHlsZT1cInBhZGRpbmc6IDA7XCIgY2xhc3M9XCJpb24taGlkZS1tZC1kb3duXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT1cImhlaWdodDogMTAwJTsgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdhc3NldHMvYmcvbG9naW4uanBnJyk7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7IGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2lvbi1jb2w+XG4gICAgPC9pb24tcm93PlxuICA8L2lvbi1ncmlkPlxuXG5cbjwvaW9uLWNvbnRlbnQ+IiwgImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE9uYm9hcmRpbmdDbHViUGFnZSB9IGZyb20gJy4vb25ib2FyZGluZy1jbHViLnBhZ2UnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogT25ib2FyZGluZ0NsdWJQYWdlXG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nQ2x1YlBhZ2VSb3V0aW5nTW9kdWxlIHt9XG4iLCAiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmltcG9ydCB7IE9uYm9hcmRpbmdDbHViUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL29uYm9hcmRpbmctY2x1Yi1yb3V0aW5nLm1vZHVsZSc7XG5cbmltcG9ydCB7IE9uYm9hcmRpbmdDbHViUGFnZSB9IGZyb20gJy4vb25ib2FyZGluZy1jbHViLnBhZ2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgT25ib2FyZGluZ0NsdWJQYWdlUm91dGluZ01vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbT25ib2FyZGluZ0NsdWJQYWdlXVxufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nQ2x1YlBhZ2VNb2R1bGUge31cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3VCYyxJQUFBLHlCQUFBLEdBQUEsaUJBQUE7QUFDRSxJQUFBLGlCQUFBLEdBQUEsYUFBQTtBQUNGLElBQUEsdUJBQUE7Ozs7OztBQUNBLElBQUEseUJBQUEsR0FBQSxZQUFBLEVBQUE7QUFBdUQsSUFBQSxxQkFBQSxTQUFB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
