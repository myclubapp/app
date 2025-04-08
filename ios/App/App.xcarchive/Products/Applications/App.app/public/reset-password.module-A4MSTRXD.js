import {
  AuthService
} from "./chunk-AMO7VPPH.js";
import {
  AlertController,
  CommonModule,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonInput,
  IonItem,
  IonList,
  IonRow,
  IonText,
  IonicModule,
  LoadingController,
  MenuController,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Router,
  RouterLink,
  RouterLinkDelegateDirective,
  RouterModule,
  TextValueAccessorDirective,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  UntypedFormBuilder,
  Validators,
  lastValueFrom,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵtext,
  ɵɵtextInterpolate,
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

// src/app/pages/auth/reset-password/reset-password.page.ts
var _ResetPasswordPage = class _ResetPasswordPage {
  constructor(menuCtrl, authService, alertCtrl, router, formBuilder, loadingCtrl, translate) {
    this.menuCtrl = menuCtrl;
    this.authService = authService;
    this.alertCtrl = alertCtrl;
    this.router = router;
    this.formBuilder = formBuilder;
    this.loadingCtrl = loadingCtrl;
    this.translate = translate;
    this.menuCtrl.enable(false, "menu");
    this.authForm = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: [""]
    });
  }
  ngOnInit() {
    this.menuCtrl.enable(false, "menu");
    this.user = {
      email: "",
      password: ""
    };
  }
  submitCredentials(authForm) {
    return __async(this, null, function* () {
      if (!authForm.get("email").valid) {
        this.alertCtrl.create({
          message: yield lastValueFrom(this.translate.get("common.error__invalid_form")),
          buttons: [
            {
              text: yield lastValueFrom(this.translate.get("common.ok")),
              role: "cancel"
            }
          ]
        }).then((alert) => {
          alert.present();
        });
      } else {
        this.presentLoading();
        const credentials = {
          email: authForm.value.email,
          password: authForm.value.password
        };
        this.resetPassword(credentials);
      }
    });
  }
  presentLoading() {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        cssClass: "my-custom-class",
        message: (yield lastValueFrom(this.translate.get("common.please__wait"))) + "...",
        duration: 1500
      });
      yield loading.present();
      const { role, data } = yield loading.onDidDismiss();
      console.log("Loading dismissed!");
    });
  }
  resetPassword(credentials) {
    this.authService.resetPassword(credentials.email).then(() => __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        message: yield lastValueFrom(this.translate.get("reset-password.check__email_for_reset_link")),
        buttons: [
          {
            text: yield lastValueFrom(this.translate.get("common.ok")),
            role: "cancel",
            handler: () => {
              this.router.navigateByUrl("login");
            }
          }
        ]
      });
      yield alert.present();
    }), (error) => __async(this, null, function* () {
      const errorAlert = yield this.alertCtrl.create({
        message: error.message,
        buttons: [
          {
            text: yield lastValueFrom(this.translate.get("common.ok")),
            role: "cancel"
          }
        ]
      });
      yield errorAlert.present();
    }));
  }
};
_ResetPasswordPage.\u0275fac = function ResetPasswordPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResetPasswordPage)(\u0275\u0275directiveInject(MenuController), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(TranslateService));
};
_ResetPasswordPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordPage, selectors: [["app-reset-password"]], standalone: false, decls: 29, vars: 20, consts: [[1, "ion-no-padding", 2, "height", "100vh"], [2, "height", "100%"], ["size-md", "6", "size-lg", "5", 2, "display", "flex", "align-items", "center", "justify-content", "center"], [1, "ion-no-margin", 2, "max-width", "500px", "width", "100%"], ["src", "assets/logo_trans.png", "alt", "Logo", 2, "max-height", "100px", "max-width", "100px"], ["routerLink", "/login", 1, "ion-text-primary"], [3, "formGroup"], [3, "inset"], ["lines", "full"], ["labelPlacement", "floating", "type", "email", "formControlName", "email", "required", "", 3, "label"], ["expand", "block", "type", "submit", 1, "ion-margin-top", 3, "click"], ["size-md", "6", "size-lg", "7", 1, "ion-hide-md-down", 2, "padding", "0"], ["src", "assets/bg/mountain-5.jpg", 2, "height", "100%", "width", "100%", "object-fit", "cover", 3, "alt"]], template: function ResetPasswordPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-content")(2, "ion-grid", 0)(3, "ion-row", 1)(4, "ion-col", 2)(5, "ion-card", 3)(6, "ion-card-content");
    \u0275\u0275element(7, "ion-img", 4);
    \u0275\u0275elementStart(8, "ion-card-title");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ion-text")(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementStart(15, "ion-router-link", 5);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "form", 6)(19, "ion-list", 7)(20, "ion-item", 8);
    \u0275\u0275element(21, "ion-input", 9);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "ion-button", 10);
    \u0275\u0275listener("click", function ResetPasswordPage_Template_ion_button_click_23_listener() {
      return ctx.submitCredentials(ctx.authForm);
    });
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(26, "ion-col", 11);
    \u0275\u0275element(27, "ion-img", 12);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "common.forget__password"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 10, "common.or"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 12, "reset-password.try__login_again"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.authForm);
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("label", \u0275\u0275pipeBind1(22, 14, "common.email__address"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 16, "reset-password.reset__password"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("alt", \u0275\u0275pipeBind1(28, 18, "common.mountain_background__alt"));
  }
}, dependencies: [\u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, IonButton, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonGrid, IonImg, IonInput, IonItem, IonList, IonRow, IonText, TextValueAccessorDirective, RouterLinkDelegateDirective, RouterLink, TranslatePipe], styles: ["\n\nion-list[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\nion-card-title[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important;\n}\n/*# sourceMappingURL=reset-password.page.css.map */"] });
var ResetPasswordPage = _ResetPasswordPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordPage, { className: "ResetPasswordPage", filePath: "src/app/pages/auth/reset-password/reset-password.page.ts", lineNumber: 24 });
})();

// src/app/pages/auth/reset-password/reset-password-routing.module.ts
var routes = [
  {
    path: "",
    component: ResetPasswordPage
  }
];
var _ResetPasswordPageRoutingModule = class _ResetPasswordPageRoutingModule {
};
_ResetPasswordPageRoutingModule.\u0275fac = function ResetPasswordPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResetPasswordPageRoutingModule)();
};
_ResetPasswordPageRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ResetPasswordPageRoutingModule });
_ResetPasswordPageRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var ResetPasswordPageRoutingModule = _ResetPasswordPageRoutingModule;

// src/app/pages/auth/reset-password/reset-password.module.ts
var _ResetPasswordPageModule = class _ResetPasswordPageModule {
};
_ResetPasswordPageModule.\u0275fac = function ResetPasswordPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResetPasswordPageModule)();
};
_ResetPasswordPageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ResetPasswordPageModule });
_ResetPasswordPageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  IonicModule,
  ResetPasswordPageRoutingModule,
  TranslateModule
] });
var ResetPasswordPageModule = _ResetPasswordPageModule;
export {
  ResetPasswordPageModule
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9hdXRoL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9hdXRoL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLnBhZ2UuaHRtbCIsICJzcmMvYXBwL3BhZ2VzL2F1dGgvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcm91dGluZy5tb2R1bGUudHMiLCAic3JjL2FwcC9wYWdlcy9hdXRoL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLm1vZHVsZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgVW50eXBlZEZvcm1CdWlsZGVyLFxuICBVbnR5cGVkRm9ybUdyb3VwLFxuICBWYWxpZGF0b3JzLFxufSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7XG4gIEFsZXJ0Q29udHJvbGxlcixcbiAgTG9hZGluZ0NvbnRyb2xsZXIsXG4gIE1lbnVDb250cm9sbGVyLFxufSBmcm9tIFwiQGlvbmljL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuaW1wb3J0IHsgbGFzdFZhbHVlRnJvbSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBVc2VyQ3JlZGVudGlhbExvZ2luIH0gZnJvbSBcInNyYy9hcHAvbW9kZWxzL3VzZXJcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1yZXNldC1wYXNzd29yZFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVzZXQtcGFzc3dvcmQucGFnZS5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3Jlc2V0LXBhc3N3b3JkLnBhZ2Uuc2Nzc1wiXSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyB1c2VyOiBVc2VyQ3JlZGVudGlhbExvZ2luO1xuICBwdWJsaWMgYXV0aEZvcm06IFVudHlwZWRGb3JtR3JvdXA7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBtZW51Q3RybDogTWVudUNvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBhbGVydEN0cmw6IEFsZXJ0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZm9ybUJ1aWxkZXI6IFVudHlwZWRGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlcixcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZVxuICApIHtcbiAgICB0aGlzLm1lbnVDdHJsLmVuYWJsZShmYWxzZSwgXCJtZW51XCIpO1xuICAgIHRoaXMuYXV0aEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGVtYWlsOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXSldLFxuICAgICAgcGFzc3dvcmQ6IFtcIlwiXSxcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubWVudUN0cmwuZW5hYmxlKGZhbHNlLCBcIm1lbnVcIik7XG4gICAgdGhpcy51c2VyID0ge1xuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICBwYXNzd29yZDogXCJcIixcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgc3VibWl0Q3JlZGVudGlhbHMoYXV0aEZvcm06IFVudHlwZWRGb3JtR3JvdXApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIWF1dGhGb3JtLmdldChcImVtYWlsXCIpLnZhbGlkKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnRm9ybSBpcyBub3QgdmFsaWQgeWV0LCBjdXJyZW50IHZhbHVlOicsIGF1dGhGb3JtLnZhbHVlKTtcbiAgICAgIHRoaXMuYWxlcnRDdHJsXG4gICAgICAgIC5jcmVhdGUoe1xuICAgICAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20oXG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uZXJyb3JfX2ludmFsaWRfZm9ybVwiKVxuICAgICAgICAgICksXG4gICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5va1wiKSksXG4gICAgICAgICAgICAgIHJvbGU6IFwiY2FuY2VsXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChhbGVydCkgPT4ge1xuICAgICAgICAgIGFsZXJ0LnByZXNlbnQoKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJlc2VudExvYWRpbmcoKTtcbiAgICAgIGNvbnN0IGNyZWRlbnRpYWxzOiBVc2VyQ3JlZGVudGlhbExvZ2luID0ge1xuICAgICAgICBlbWFpbDogYXV0aEZvcm0udmFsdWUuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiBhdXRoRm9ybS52YWx1ZS5wYXNzd29yZCxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucmVzZXRQYXNzd29yZChjcmVkZW50aWFscyk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcHJlc2VudExvYWRpbmcoKSB7XG4gICAgY29uc3QgbG9hZGluZyA9IGF3YWl0IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgIGNzc0NsYXNzOiBcIm15LWN1c3RvbS1jbGFzc1wiLFxuICAgICAgbWVzc2FnZTpcbiAgICAgICAgKGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLnBsZWFzZV9fd2FpdFwiKSkpICtcbiAgICAgICAgXCIuLi5cIixcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgIH0pO1xuICAgIGF3YWl0IGxvYWRpbmcucHJlc2VudCgpO1xuXG4gICAgY29uc3QgeyByb2xlLCBkYXRhIH0gPSBhd2FpdCBsb2FkaW5nLm9uRGlkRGlzbWlzcygpO1xuICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyBkaXNtaXNzZWQhXCIpO1xuICB9XG5cbiAgcmVzZXRQYXNzd29yZChjcmVkZW50aWFsczogVXNlckNyZWRlbnRpYWxMb2dpbik6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UucmVzZXRQYXNzd29yZChjcmVkZW50aWFscy5lbWFpbCkudGhlbihcbiAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgICAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20oXG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoXCJyZXNldC1wYXNzd29yZC5jaGVja19fZW1haWxfZm9yX3Jlc2V0X2xpbmtcIilcbiAgICAgICAgICApLFxuICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24ub2tcIikpLFxuICAgICAgICAgICAgICByb2xlOiBcImNhbmNlbFwiLFxuICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChcImxvZ2luXCIpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jIChlcnJvcikgPT4ge1xuICAgICAgICBjb25zdCBlcnJvckFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydEN0cmwuY3JlYXRlKHtcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24ub2tcIikpLFxuICAgICAgICAgICAgICByb2xlOiBcImNhbmNlbFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgZXJyb3JBbGVydC5wcmVzZW50KCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIiwgIjxpb24tY29udGVudD5cbiAgXG4gIDxpb24tY29udGVudD5cbiAgICA8aW9uLWdyaWQgY2xhc3M9XCJpb24tbm8tcGFkZGluZ1wiIHN0eWxlPVwiaGVpZ2h0OiAxMDB2aDtcIj5cbiAgICAgIDxpb24tcm93IHN0eWxlPVwiaGVpZ2h0OiAxMDAlO1wiPlxuICAgICAgICA8IS0tIFJlc2V0IFBhc3N3b3JkIEZvcm0gQ29sdW1uIC0tPlxuICAgICAgICA8aW9uLWNvbCBzaXplLW1kPVwiNlwiIHNpemUtbGc9XCI1XCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cbiAgICAgICAgICA8aW9uLWNhcmQgY2xhc3M9XCJpb24tbm8tbWFyZ2luXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDUwMHB4OyB3aWR0aDogMTAwJTtcIj5cbiAgICAgICAgICAgIDxpb24tY2FyZC1jb250ZW50PlxuICAgICAgICAgICAgICA8aW9uLWltZyBzcmM9XCJhc3NldHMvbG9nb190cmFucy5wbmdcIiBhbHQ9XCJMb2dvXCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiAxMDBweDsgbWF4LXdpZHRoOiAxMDBweDtcIj48L2lvbi1pbWc+XG4gICAgICAgICAgICAgIDxpb24tY2FyZC10aXRsZT57eydjb21tb24uZm9yZ2V0X19wYXNzd29yZCcgfCB0cmFuc2xhdGV9fTwvaW9uLWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgIDxpb24tdGV4dD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIHt7J2NvbW1vbi5vcicgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgICAgICAgPGlvbi1yb3V0ZXItbGluayByb3V0ZXJMaW5rPVwiL2xvZ2luXCIgY2xhc3M9XCJpb24tdGV4dC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7J3Jlc2V0LXBhc3N3b3JkLnRyeV9fbG9naW5fYWdhaW4nIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgICAgICAgIDwvaW9uLXJvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9pb24tdGV4dD5cbiAgICAgICAgICAgICAgPCEtLSBSZXNldCBQYXNzd29yZCBGb3JtIENvbnRlbnQgSGVyZSAtLT5cbiAgICAgICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJhdXRoRm9ybVwiPlxuICAgICAgICAgICAgICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiPlxuXG4gICAgICAgICAgICAgICAgICA8aW9uLWl0ZW0gbGluZXM9XCJmdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpb24taW5wdXQgbGFiZWxQbGFjZW1lbnQ9XCJmbG9hdGluZ1wiIGxhYmVsPVwie3snY29tbW9uLmVtYWlsX19hZGRyZXNzJyB8IHRyYW5zbGF0ZX19XCIgdHlwZT1cImVtYWlsXCIgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIiByZXF1aXJlZD48L2lvbi1pbnB1dD5cbiAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9pb24tbGlzdD5cbiAgICAgICAgICAgICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwic3VibWl0Q3JlZGVudGlhbHMoYXV0aEZvcm0pXCIgZXhwYW5kPVwiYmxvY2tcIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJpb24tbWFyZ2luLXRvcFwiPlxuICAgICAgICAgICAgICAgIHt7J3Jlc2V0LXBhc3N3b3JkLnJlc2V0X19wYXNzd29yZCcgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvaW9uLWNhcmQtY29udGVudD5cbiAgICAgICAgICA8L2lvbi1jYXJkPlxuICAgICAgICA8L2lvbi1jb2w+XG4gICAgICAgIDwhLS0gSW1hZ2UgQ29sdW1uIC0tPlxuICAgICAgICA8aW9uLWNvbCBzaXplLW1kPVwiNlwiIHNpemUtbGc9XCI3XCIgc3R5bGU9XCJwYWRkaW5nOiAwO1wiIGNsYXNzPVwiaW9uLWhpZGUtbWQtZG93blwiPlxuICAgICAgICAgIDxpb24taW1nXG4gICAgICAgICAgICBzcmM9XCJhc3NldHMvYmcvbW91bnRhaW4tNS5qcGdcIlxuICAgICAgICAgICAgYWx0PVwie3snY29tbW9uLm1vdW50YWluX2JhY2tncm91bmRfX2FsdCcgfCB0cmFuc2xhdGV9fVwiXG4gICAgICAgICAgICBzdHlsZT1cImhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IG9iamVjdC1maXQ6IGNvdmVyO1wiPlxuICAgICAgICAgIDwvaW9uLWltZz5cbiAgICAgICAgPC9pb24tY29sPlxuICAgICAgPC9pb24tcm93PlxuICAgIDwvaW9uLWdyaWQ+XG4gIDwvaW9uLWNvbnRlbnQ+XG4gIFxuICBcbiAgXG4gIDwhLS1cbiAgPGRpdiBjbGFzcz1cIm1pbi1oLXNjcmVlbiBiZy13aGl0ZSBmbGV4XCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJmbGV4LTEgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBweS0xMiBweC00IHNtOnB4LTYgbGc6ZmxleC1ub25lIGxnOnB4LTIwIHhsOnB4LTI0XCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwibXgtYXV0byB3LWZ1bGwgbWF4LXctc20gbGc6dy05NlwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwaWN0dXJlPlxuICAgICAgICAgICAgPHNvdXJjZVxuICAgICAgICAgICAgICBzcmNzZXQ9XCJhc3NldHMvbG9nb190cmFucy5wbmdcIlxuICAgICAgICAgICAgICBtZWRpYT1cIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzb3VyY2VcbiAgICAgICAgICAgICAgc3Jjc2V0PVwiYXNzZXRzL2xvZ29fdHJhbnMucG5nXCJcbiAgICAgICAgICAgICAgbWVkaWE9XCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImgtMTIgdy1hdXRvXCIgc3JjPVwiYXNzZXRzL2xvZ29fdHJhbnMucG5nXCIgYWx0PVwiTG9nb1wiIC8+XG4gICAgICAgICAgPC9waWN0dXJlPlxuXG4gICAgICAgICAgPGgyIGNsYXNzPVwibXQtNiB0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICB7e1wiY29tbW9uLmZvcmdldF9fcGFzc3dvcmRcInwgdHJhbnNsYXRlfX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMiB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgIHt7XCJvclwifCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgcm91dGVyTGluaz1cIi9sb2dpblwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9udC1tZWRpdW0gdGV4dC1teWNsdWJsaWdodCBob3Zlcjp0ZXh0LW15Y2x1YmRhcmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7e1wicmVzZXQtcGFzc3dvcmQudHJ5X19sb2dpbl9hZ2FpblwifCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm10LThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtNlwiPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJzcGFjZS15LTZcIiBbZm9ybUdyb3VwXT1cImF1dGhGb3JtXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBmb3I9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3tcImNvbW1vbi5lbWFpbF9fYWRkcmVzc1wifCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTFcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHNoYWRvdy1zbSBwbGFjZWhvbGRlci1ncmF5LTQwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIHNtOnRleHQtc20gZGFyazp0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwic3VibWl0Q3JlZGVudGlhbHMoYXV0aEZvcm0pXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgcHktMiBweC00IGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBzaGFkb3ctc20gdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGRhcms6dGV4dC13aGl0ZSBiZy1teWNsdWJsaWdodCBkYXJrOmJnLW15Y2x1YmRhcmsgaG92ZXI6YmctbXljbHViZGFyayBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1iZy1teWNsdWJkYXJrXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7e1wicmVzZXQtcGFzc3dvcmQucmVzZXRfX3Bhc3N3b3JkXCJ8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJoaWRkZW4gbGc6YmxvY2sgcmVsYXRpdmUgdy0wIGZsZXgtMVwiPlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzcz1cImFic29sdXRlIGluc2V0LTAgaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICBzcmM9XCJhc3NldHMvYmcvbW91bnRhaW4tNS5qcGdcIlxuICAgICAgICBbYWx0XT0nXCJjb21tb24ubW91bnRhaW5fYmFja2dyb3VuZF9fYWx0XCIgfCB0cmFuc2xhdGUnXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj4tLT5cbjwvaW9uLWNvbnRlbnQ+XG4iLCAiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgUmVzZXRQYXNzd29yZFBhZ2UgfSBmcm9tICcuL3Jlc2V0LXBhc3N3b3JkLnBhZ2UnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogUmVzZXRQYXNzd29yZFBhZ2VcbiAgfVxuXVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkUGFnZVJvdXRpbmdNb2R1bGUge31cbiIsICJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuaW1wb3J0IHsgUmVzZXRQYXNzd29yZFBhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9yZXNldC1wYXNzd29yZC1yb3V0aW5nLm1vZHVsZSc7XG5cbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRQYWdlIH0gZnJvbSAnLi9yZXNldC1wYXNzd29yZC5wYWdlJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgUmVzZXRQYXNzd29yZFBhZ2VSb3V0aW5nTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtSZXNldFBhc3N3b3JkUGFnZV1cbn0pXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZFBhZ2VNb2R1bGUge31cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Qk0sSUFBTyxxQkFBUCxNQUFPLG1CQUFpQjtFQUc1QixZQUNTLFVBQ1UsYUFDQSxXQUNBLFFBQ0EsYUFDQSxhQUNULFdBQTJCO0FBTjVCLFNBQUEsV0FBQTtBQUNVLFNBQUEsY0FBQTtBQUNBLFNBQUEsWUFBQTtBQUNBLFNBQUEsU0FBQTtBQUNBLFNBQUEsY0FBQTtBQUNBLFNBQUEsY0FBQTtBQUNULFNBQUEs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
