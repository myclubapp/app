import {
  UserProfileService
} from "./chunk-7XMQNZXL.js";
import {
  AuthService
} from "./chunk-AMO7VPPH.js";
import {
  AsyncPipe,
  CommonModule,
  FormsModule,
  IonButton,
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
  IonRow,
  IonText,
  IonicModule,
  MenuController,
  NgIf,
  Router,
  RouterModule,
  ToastController,
  TranslateModule,
  TranslateService,
  lastValueFrom,
  of,
  switchMap,
  take,
  ɵsetClassDebugInfo,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
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

// src/app/pages/onboarding/onboarding-email/onboarding-email.page.ts
function OnboardingEmailPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-content")(2, "ion-fab", 1)(3, "ion-fab-button", 2);
    \u0275\u0275listener("click", function OnboardingEmailPage_ng_container_0_Template_ion_fab_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275element(4, "ion-icon", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-grid", 4)(6, "ion-row", 5)(7, "ion-col", 6)(8, "ion-card", 7)(9, "ion-card-content");
    \u0275\u0275element(10, "ion-img", 8);
    \u0275\u0275elementStart(11, "ion-card-title");
    \u0275\u0275text(12, "E-Mail Adresse verifizieren");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ion-text")(14, "p");
    \u0275\u0275text(15, "Damit wir dein Profil fertig einrichten k\xF6nnen, musst du zuerst deine E-Mail Adresse verifizieren.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17, 'Pr\xFCfe bitte dein E-Mail Postfach (schau auch im SPAM Ordner nach) und klicke auf den Link "E-Mail verifizieren".');
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "ion-row");
    \u0275\u0275element(19, "ion-col", 9);
    \u0275\u0275elementStart(20, "ion-col", 10)(21, "ion-button", 11);
    \u0275\u0275listener("click", function OnboardingEmailPage_ng_container_0_Template_ion_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resendEmailActivation());
    });
    \u0275\u0275text(22, "E-Mail erneut senden");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "ion-col", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ion-row");
    \u0275\u0275element(25, "ion-col", 9);
    \u0275\u0275elementStart(26, "ion-col", 10)(27, "ion-button", 12);
    \u0275\u0275listener("click", function OnboardingEmailPage_ng_container_0_Template_ion_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.next());
    });
    \u0275\u0275text(28, "Weiter");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(29, "ion-col", 9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "ion-col", 13);
    \u0275\u0275element(31, "div", 14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
}
var _OnboardingEmailPage = class _OnboardingEmailPage {
  constructor(authService, profileService, translate, toastCtrl, menuCtrl, router) {
    this.authService = authService;
    this.profileService = profileService;
    this.translate = translate;
    this.toastCtrl = toastCtrl;
    this.menuCtrl = menuCtrl;
    this.router = router;
  }
  ngOnInit() {
    this.menuCtrl.enable(false, "menu");
    this.userProfile$ = this.authService.getUser$().pipe(take(1), switchMap((user) => user ? this.profileService.getUserProfile(user) : of(null)));
  }
  ngOnDestroy() {
  }
  /*getUserProfile(): Observable<any> {
    // Replace 'any' with the actual type of the user profile
    return this.authService.getUser$().pipe(
      switchMap((user: User) => {
        if (!user || !user.uid) {
          console.log("No user found");
          return of(null); // Return null or appropriate default value if user is not logged in
        }
        return this.profileService.getUserProfile(user);
      }),
      catchError((err) => {
        console.error("Error fetching user profile", err);
        return of(null); // Handle the error and return a default value
      })
    );
  }*/
  resendEmailActivation() {
    return __async(this, null, function* () {
      yield this.authService.sendVerifyEmail();
      yield this.toastActionSaved();
    });
  }
  next() {
    return __async(this, null, function* () {
      const token = yield this.authService.auth.currentUser.getIdToken(true);
      yield this.authService.auth.currentUser.reload();
      console.log("is Email verified now? " + this.authService.auth.currentUser.emailVerified);
      if (this.authService.auth.currentUser.emailVerified) {
        const navOnboardingClub = yield this.router.navigateByUrl("/onboarding-club");
        if (navOnboardingClub) {
          console.log("Navigation success to onboarding Club Page");
        } else {
          console.error("Navigation ERROR to onboarding Club Page");
        }
      } else {
        yield this.toastEmailNotYetVerified();
      }
    });
  }
  toastActionSaved() {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: yield lastValueFrom(this.translate.get("common.email_sent")),
        duration: 1500,
        position: "top",
        color: "success"
      });
      yield toast.present();
    });
  }
  toastEmailNotYetVerified() {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: yield lastValueFrom(this.translate.get("common.email_not_yet_verified")),
        duration: 3e3,
        position: "top",
        color: "danger"
      });
      yield toast.present();
    });
  }
  logout() {
    return __async(this, null, function* () {
      return this.authService.logout();
    });
  }
};
_OnboardingEmailPage.\u0275fac = function OnboardingEmailPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OnboardingEmailPage)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UserProfileService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(MenuController), \u0275\u0275directiveInject(Router));
};
_OnboardingEmailPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OnboardingEmailPage, selectors: [["app-onboarding-email"]], standalone: false, decls: 2, vars: 3, consts: [[4, "ngIf"], ["vertical", "top", "horizontal", "end"], ["size", "small", 3, "click"], ["name", "log-out-outline", "size", "small"], [1, "ion-no-padding", 2, "height", "100vh"], [2, "height", "100%"], ["size-md", "6", "size-lg", "5", 2, "display", "flex", "align-items", "center", "justify-content", "center"], [1, "ion-no-margin", 2, "max-width", "500px", "width", "100%"], ["src", "assets/logo_trans.png", "alt", "Logo", 2, "max-height", "100px", "max-width", "100px"], ["size", "3"], ["size", "6"], ["color", "light", "expand", "block", "shape", "round", 3, "click"], ["color", "primary", "expand", "block", "shape", "round", 3, "click"], ["size-md", "6", "size-lg", "7", 1, "ion-hide-md-down", 2, "padding", "0"], [2, "height", "100%", "background-image", "url('assets/bg/login.jpg')", "background-size", "cover", "background-position", "center"]], template: function OnboardingEmailPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, OnboardingEmailPage_ng_container_0_Template, 32, 0, "ng-container", 0);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.userProfile$));
  }
}, dependencies: [NgIf, IonButton, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonIcon, IonImg, IonRow, IonText, AsyncPipe], styles: ["\n\nion-card-title[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important;\n}\n/*# sourceMappingURL=onboarding-email.page.css.map */"] });
var OnboardingEmailPage = _OnboardingEmailPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OnboardingEmailPage, { className: "OnboardingEmailPage", filePath: "src/app/pages/onboarding/onboarding-email/onboarding-email.page.ts", lineNumber: 17 });
})();

// src/app/pages/onboarding/onboarding-email/onboarding-email-routing.module.ts
var routes = [
  {
    path: "",
    component: OnboardingEmailPage
  }
];
var _OnboardingEmailPageRoutingModule = class _OnboardingEmailPageRoutingModule {
};
_OnboardingEmailPageRoutingModule.\u0275fac = function OnboardingEmailPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OnboardingEmailPageRoutingModule)();
};
_OnboardingEmailPageRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _OnboardingEmailPageRoutingModule });
_OnboardingEmailPageRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var OnboardingEmailPageRoutingModule = _OnboardingEmailPageRoutingModule;

// src/app/pages/onboarding/onboarding-email/onboarding-email.module.ts
var _OnboardingEmailPageModule = class _OnboardingEmailPageModule {
};
_OnboardingEmailPageModule.\u0275fac = function OnboardingEmailPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OnboardingEmailPageModule)();
};
_OnboardingEmailPageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _OnboardingEmailPageModule });
_OnboardingEmailPageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  TranslateModule,
  CommonModule,
  FormsModule,
  IonicModule,
  OnboardingEmailPageRoutingModule
] });
var OnboardingEmailPageModule = _OnboardingEmailPageModule;
export {
  OnboardingEmailPageModule
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9vbmJvYXJkaW5nL29uYm9hcmRpbmctZW1haWwvb25ib2FyZGluZy1lbWFpbC5wYWdlLnRzIiwgInNyYy9hcHAvcGFnZXMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWVtYWlsL29uYm9hcmRpbmctZW1haWwucGFnZS5odG1sIiwgInNyYy9hcHAvcGFnZXMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWVtYWlsL29uYm9hcmRpbmctZW1haWwtcm91dGluZy5tb2R1bGUudHMiLCAic3JjL2FwcC9wYWdlcy9vbmJvYXJkaW5nL29uYm9hcmRpbmctZW1haWwvb25ib2FyZGluZy1lbWFpbC5tb2R1bGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWVudUNvbnRyb2xsZXIsIFRvYXN0Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgY2F0Y2hFcnJvciwgbGFzdFZhbHVlRnJvbSwgb2YsIHN3aXRjaE1hcCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnc3JjL2FwcC9tb2RlbHMvdXNlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJQcm9maWxlU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvZmlyZWJhc2UvdXNlci1wcm9maWxlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1vbmJvYXJkaW5nLWVtYWlsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vb25ib2FyZGluZy1lbWFpbC5wYWdlLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL29uYm9hcmRpbmctZW1haWwucGFnZS5zY3NzJ10sXG4gICAgc3RhbmRhbG9uZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ0VtYWlsUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHVzZXJQcm9maWxlJDogT2JzZXJ2YWJsZTxQcm9maWxlPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByb2ZpbGVTZXJ2aWNlOiBVc2VyUHJvZmlsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSB0b2FzdEN0cmw6IFRvYXN0Q29udHJvbGxlcixcbiAgICBwdWJsaWMgcmVhZG9ubHkgbWVudUN0cmw6IE1lbnVDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyOiBSb3V0ZXJcbiAgKSB7IH0gXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5tZW51Q3RybC5lbmFibGUoZmFsc2UsIFwibWVudVwiKTtcbiAgICB0aGlzLnVzZXJQcm9maWxlJCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlciQoKS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHN3aXRjaE1hcCh1c2VyID0+IHVzZXIgPyB0aGlzLnByb2ZpbGVTZXJ2aWNlLmdldFVzZXJQcm9maWxlKHVzZXIpIDogb2YobnVsbCkpXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuXG4gIH1cblxuXG4gIC8qZ2V0VXNlclByb2ZpbGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvLyBSZXBsYWNlICdhbnknIHdpdGggdGhlIGFjdHVhbCB0eXBlIG9mIHRoZSB1c2VyIHByb2ZpbGVcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyJCgpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHVzZXI6IFVzZXIpID0+IHtcbiAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLnVpZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gdXNlciBmb3VuZFwiKTtcbiAgICAgICAgICByZXR1cm4gb2YobnVsbCk7IC8vIFJldHVybiBudWxsIG9yIGFwcHJvcHJpYXRlIGRlZmF1bHQgdmFsdWUgaWYgdXNlciBpcyBub3QgbG9nZ2VkIGluXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsZVNlcnZpY2UuZ2V0VXNlclByb2ZpbGUodXNlcik7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlciBwcm9maWxlXCIsIGVycik7XG4gICAgICAgIHJldHVybiBvZihudWxsKTsgLy8gSGFuZGxlIHRoZSBlcnJvciBhbmQgcmV0dXJuIGEgZGVmYXVsdCB2YWx1ZVxuICAgICAgfSlcbiAgICApO1xuICB9Ki9cblxuICBhc3luYyByZXNlbmRFbWFpbEFjdGl2YXRpb24oKSB7XG4gICAgYXdhaXQgdGhpcy5hdXRoU2VydmljZS5zZW5kVmVyaWZ5RW1haWwoKTtcbiAgICBhd2FpdCB0aGlzLnRvYXN0QWN0aW9uU2F2ZWQoKTtcbiAgfVxuXG4gIGFzeW5jIG5leHQoKSB7XG4gICAgLy8gQ2xpY2sgbmV4dCBhbmQgc2VlIGlmIHVzZXIgaXMgcmVhbGx5IHZlcmlmaWVkP1xuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5hdXRoLmN1cnJlbnRVc2VyLmdldElkVG9rZW4odHJ1ZSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hdXRoU2VydmljZS5hdXRoLmN1cnJlbnRVc2VyKVxuICAgIGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuYXV0aC5jdXJyZW50VXNlci5yZWxvYWQoKTtcbiAgICBjb25zb2xlLmxvZyhcImlzIEVtYWlsIHZlcmlmaWVkIG5vdz8gXCIgKyB0aGlzLmF1dGhTZXJ2aWNlLmF1dGguY3VycmVudFVzZXIuZW1haWxWZXJpZmllZCk7XG4gICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuYXV0aC5jdXJyZW50VXNlci5lbWFpbFZlcmlmaWVkKXtcbiAgICAgIGNvbnN0IG5hdk9uYm9hcmRpbmdDbHViID0gYXdhaXQgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL29uYm9hcmRpbmctY2x1YicpO1xuICAgICAgaWYgKG5hdk9uYm9hcmRpbmdDbHViKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdOYXZpZ2F0aW9uIHN1Y2Nlc3MgdG8gb25ib2FyZGluZyBDbHViIFBhZ2UnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ05hdmlnYXRpb24gRVJST1IgdG8gb25ib2FyZGluZyBDbHViIFBhZ2UnKTtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIGF3YWl0IHRoaXMudG9hc3RFbWFpbE5vdFlldFZlcmlmaWVkKCk7XG4gICAgfVxuXG4gICAgLyphd2FpdCB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL3RcIikuY2F0Y2goZT0+e1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChcIlwiKVxuICAgIH0pOyovXG4gICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG5cbiAgYXN5bmMgdG9hc3RBY3Rpb25TYXZlZCgpIHtcbiAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDdHJsLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5lbWFpbF9zZW50XCIpKSxcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgICBjb2xvcjogXCJzdWNjZXNzXCIsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gIH1cblxuICBhc3luYyB0b2FzdEVtYWlsTm90WWV0VmVyaWZpZWQoKSB7XG4gICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uZW1haWxfbm90X3lldF92ZXJpZmllZFwiKSksXG4gICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gIH1cblxuICBhc3luYyBsb2dvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gIH1cbn1cbiIsICI8bmctY29udGFpbmVyICpuZ0lmPVwidXNlclByb2ZpbGUkIHwgYXN5bmMgYXMgdXNlclByb2ZpbGVcIj5cbjxpb24tY29udGVudD5cbiAgPGlvbi1mYWIgdmVydGljYWw9XCJ0b3BcIiBob3Jpem9udGFsPVwiZW5kXCI+XG4gICAgPGlvbi1mYWItYnV0dG9uIHNpemU9XCJzbWFsbFwiIChjbGljayk9XCJsb2dvdXQoKVwiPlxuICAgICAgPGlvbi1pY29uIG5hbWU9XCJsb2ctb3V0LW91dGxpbmVcIiBzaXplPVwic21hbGxcIj48L2lvbi1pY29uPlxuICAgIDwvaW9uLWZhYi1idXR0b24+XG4gIDwvaW9uLWZhYj5cblxuICA8aW9uLWdyaWQgY2xhc3M9XCJpb24tbm8tcGFkZGluZ1wiIHN0eWxlPVwiaGVpZ2h0OiAxMDB2aDtcIj5cbiAgICA8aW9uLXJvdyBzdHlsZT1cImhlaWdodDogMTAwJTtcIj5cbiAgICAgIDwhLS0gTG9naW4gRm9ybSBDb2x1bW4gLS0+XG4gICAgICA8aW9uLWNvbCBzaXplLW1kPVwiNlwiIHNpemUtbGc9XCI1XCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cbiAgICAgICAgPGlvbi1jYXJkIGNsYXNzPVwiaW9uLW5vLW1hcmdpblwiIHN0eWxlPVwibWF4LXdpZHRoOiA1MDBweDsgd2lkdGg6IDEwMCU7XCI+XG4gICAgICAgICAgPGlvbi1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgICA8aW9uLWltZyBzcmM9XCJhc3NldHMvbG9nb190cmFucy5wbmdcIiBhbHQ9XCJMb2dvXCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiAxMDBweDsgbWF4LXdpZHRoOiAxMDBweDtcIj5cbiAgICAgICAgICAgIDwvaW9uLWltZz5cblxuICAgICAgICAgICAgPGlvbi1jYXJkLXRpdGxlPkUtTWFpbCBBZHJlc3NlIHZlcmlmaXppZXJlbjwvaW9uLWNhcmQtdGl0bGU+XG4gICAgICAgICAgICA8aW9uLXRleHQ+XG4gICAgICAgICAgICAgIDxwPkRhbWl0IHdpciBkZWluIFByb2ZpbCBmZXJ0aWcgZWlucmljaHRlbiBrw7ZubmVuLCBtdXNzdCBkdSB6dWVyc3QgZGVpbmUgRS1NYWlsIEFkcmVzc2UgdmVyaWZpemllcmVuLjwvcD5cbiAgICAgICAgICAgICAgPHA+UHLDvGZlIGJpdHRlIGRlaW4gRS1NYWlsIFBvc3RmYWNoIChzY2hhdSBhdWNoIGltIFNQQU0gT3JkbmVyIG5hY2gpIHVuZCBrbGlja2UgYXVmIGRlbiBMaW5rIFwiRS1NYWlsIHZlcmlmaXppZXJlblwiLjwvcD5cbiAgICAgICAgICAgIDwvaW9uLXRleHQ+XG4gICAgICAgICAgICA8aW9uLXJvdz5cbiAgICAgICAgICAgICAgPGlvbi1jb2wgc2l6ZT1cIjNcIj4gPC9pb24tY29sPlxuICAgICAgICAgICAgICA8aW9uLWNvbCBzaXplPVwiNlwiPlxuICAgICAgICAgICAgICAgIDxpb24tYnV0dG9uIGNvbG9yPVwibGlnaHRcIiBleHBhbmQ9XCJibG9ja1wiIHNoYXBlPVwicm91bmRcIiAoY2xpY2spPVwicmVzZW5kRW1haWxBY3RpdmF0aW9uKClcIj5FLU1haWwgZXJuZXV0IHNlbmRlbjwvaW9uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9pb24tY29sPlxuICAgICAgICAgICAgICA8aW9uLWNvbCBzaXplPVwiM1wiPiA8L2lvbi1jb2w+XG4gICAgICAgICAgICA8L2lvbi1yb3c+XG4gICAgICAgICAgICA8aW9uLXJvdz5cbiAgICAgICAgICAgICAgPGlvbi1jb2wgc2l6ZT1cIjNcIj4gPC9pb24tY29sPlxuICAgICAgICAgICAgICA8aW9uLWNvbCBzaXplPVwiNlwiPlxuICAgICAgICAgICAgICAgIDxpb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIGV4cGFuZD1cImJsb2NrXCIgc2hhcGU9XCJyb3VuZFwiIChjbGljayk9XCJuZXh0KClcIj5XZWl0ZXI8L2lvbi1idXR0b24+XG4gICAgICAgICAgICAgIDwvaW9uLWNvbD5cbiAgICAgICAgICAgICAgPGlvbi1jb2wgc2l6ZT1cIjNcIj4gPC9pb24tY29sPlxuICAgICAgICAgICAgPC9pb24tcm93PlxuICAgICAgICAgIDwvaW9uLWNhcmQtY29udGVudD5cbiAgICAgICAgPC9pb24tY2FyZD5cbiAgICAgIDwvaW9uLWNvbD5cbiAgICAgIDwhLS0gSW1hZ2UgQ29sdW1uIC0tPlxuICAgICAgPGlvbi1jb2wgc2l6ZS1tZD1cIjZcIiBzaXplLWxnPVwiN1wiIHN0eWxlPVwicGFkZGluZzogMDtcIiBjbGFzcz1cImlvbi1oaWRlLW1kLWRvd25cIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAxMDAlOyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9iZy9sb2dpbi5qcGcnKTsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaW9uLWNvbD5cbiAgICA8L2lvbi1yb3c+XG4gIDwvaW9uLWdyaWQ+XG5cblxuPC9pb24tY29udGVudD5cbjwvbmctY29udGFpbmVyPlxuXG48IS0tXG5cbiAgPGlvbi1jb250ZW50PlxuICAgIDxpb24tZmFiIHZlcnRpY2FsPVwidG9wXCIgaG9yaXpvbnRhbD1cImVuZFwiPlxuICAgICAgPGlvbi1mYWItYnV0dG9uIHNpemU9XCJzbWFsbFwiIChjbGljayk9XCJsb2dvdXQoKVwiPlxuICAgICAgICA8aW9uLWljb24gbmFtZT1cImxvZy1vdXQtb3V0bGluZVwiIHNpemU9XCJzbWFsbFwiPjwvaW9uLWljb24+XG4gICAgICA8L2lvbi1mYWItYnV0dG9uPlxuICAgIDwvaW9uLWZhYj5cbiAgICA8aW9uLWNhcmQ+XG4gICAgXG4gICAgPGlvbi1jYXJkLWhlYWRlcj5cbiAgICAgIDxpb24tY2FyZC10aXRsZT5FLU1haWwgQWRyZXNzZSB2ZXJpZml6aWVyZW48L2lvbi1jYXJkLXRpdGxlPlxuICAgICAgPGlvbi1jYXJkLXN1YnRpdGxlPk9uYm9hcmRpbmc8L2lvbi1jYXJkLXN1YnRpdGxlPlxuICAgIDwvaW9uLWNhcmQtaGVhZGVyPlxuICAgIFxuICAgIDxpb24tY2FyZC1jb250ZW50PiBCaXR0ZSB6dWVyc3QgRS1NYWlsIEFkcmVzc2UgcHLDvGZlbiA8L2lvbi1jYXJkLWNvbnRlbnQ+XG4gICAgPGlvbi1yb3c+XG4gICAgICA8aW9uLWNvbCBzaXplPVwiM1wiPiA8L2lvbi1jb2w+XG4gICAgICA8aW9uLWNvbCBzaXplPVwiNlwiPlxuICAgICAgICA8aW9uLWJ1dHRvbiBjb2xvcj1cImxpZ2h0XCIgZXhwYW5kPVwiYmxvY2tcIiBzaGFwZT1cInJvdW5kXCIgKGNsaWNrKT1cInJlc2VuZEVtYWlsQWN0aXZhdGlvbigpXCI+RS1NYWlsIGVybmV1dCBzZW5kZW48L2lvbi1idXR0b24+XG4gICAgICA8L2lvbi1jb2w+XG4gICAgICA8aW9uLWNvbCBzaXplPVwiM1wiPiA8L2lvbi1jb2w+XG4gICAgPC9pb24tcm93PlxuICAgIDxpb24tcm93PlxuICAgICAgPGlvbi1jb2wgc2l6ZT1cIjNcIj4gPC9pb24tY29sPlxuICAgICAgPGlvbi1jb2wgc2l6ZT1cIjZcIj5cbiAgICAgICAgPGlvbi1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgZXhwYW5kPVwiYmxvY2tcIiBzaGFwZT1cInJvdW5kXCIgKGNsaWNrKT1cInZlcmlmaWVkKClcIj5XZWl0ZXI8L2lvbi1idXR0b24+XG4gICAgICA8L2lvbi1jb2w+XG4gICAgICA8aW9uLWNvbCBzaXplPVwiM1wiPiA8L2lvbi1jb2w+XG4gICAgPC9pb24tcm93PlxuICA8L2lvbi1jYXJkPlxuICBcbjwvaW9uLWNvbnRlbnQ+XG4tLT4iLCAiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgT25ib2FyZGluZ0VtYWlsUGFnZSB9IGZyb20gJy4vb25ib2FyZGluZy1lbWFpbC5wYWdlJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IE9uYm9hcmRpbmdFbWFpbFBhZ2VcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdFbWFpbFBhZ2VSb3V0aW5nTW9kdWxlIHt9XG4iLCAiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmltcG9ydCB7IE9uYm9hcmRpbmdFbWFpbFBhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9vbmJvYXJkaW5nLWVtYWlsLXJvdXRpbmcubW9kdWxlJztcblxuaW1wb3J0IHsgT25ib2FyZGluZ0VtYWlsUGFnZSB9IGZyb20gJy4vb25ib2FyZGluZy1lbWFpbC5wYWdlJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgT25ib2FyZGluZ0VtYWlsUGFnZVJvdXRpbmdNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbT25ib2FyZGluZ0VtYWlsUGFnZV1cbn0pXG5leHBvcnQgY2xhc3MgT25ib2FyZGluZ0VtYWlsUGFnZU1vZHVsZSB7fVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQUEsa0NBQUEsQ0FBQTtBQUNBLElBQUEseUJBQUEsR0FBQSxhQUFBLEVBQWEsR0FBQSxXQUFBLENBQUEsRUFDOEIsR0FBQSxrQkFBQSxDQUFBO0FBQ1YsSUFBQSxxQkFBQSxTQUFBLFNBQUEsOEVBQUE7QUFBQSxNQUFBLHdCQUFBLEdBQUE7QUFBQSxZQUFBLFNBQUEsd0JBQUE7QUFBQSxhQUFBLHNCQUFTLE9BQUEsT0FBQSxDQUFRO0lBQUEsQ0FBQTtBQUM1QyxJQUFBLG9CQUFBLEdBQUEsWUFBQSxDQUFBO0FBQ0YsSUFBQSx1QkFBQSxFQUFpQjtBQUduQixJQUFBLHlCQUFBLEdBQUEsWUFBQSxDQUFBLEVBQXdELEdBQUEsV0FBQSxDQUFBLEVBQ3ZCLEdBQUEsV0FBQSxDQUFBLEVBRXlFLEdB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
