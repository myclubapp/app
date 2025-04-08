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
  ɵɵproperty,
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

// src/app/pages/auth/login/login.page.ts
var _LoginPage = class _LoginPage {
  constructor(alertCtrl, loadingCtrl, authService, router, formBuilder, menuCtrl, translate) {
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
    this.authService = authService;
    this.router = router;
    this.formBuilder = formBuilder;
    this.menuCtrl = menuCtrl;
    this.translate = translate;
    this.menuCtrl.enable(true, "menu");
    this.authForm = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.minLength(6)]
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
      const loading = yield this.loadingCtrl.create({
        message: "Login...",
        duration: 0,
        backdropDismiss: false
      });
      loading.present();
      try {
        const userCredential = yield this.authService.login(authForm.value.email, authForm.value.password);
        loading.dismiss();
        this.menuCtrl.enable(true, "menu");
        this.router.navigateByUrl("/t").catch((error) => {
          console.error(error.message);
          this.router.navigateByUrl("");
        });
      } catch (err) {
        loading.dismiss();
        let message = (yield lastValueFrom(this.translate.get("common.general__error_occurred"))) + " " + err.code + " / " + err.message;
        console.error(err.code);
        if (err.code == "auth/user-not-found") {
          message = yield lastValueFrom(this.translate.get("login.error__no_acount_found"));
        } else if (err.code == "auth/wrong-password") {
          message = yield lastValueFrom(this.translate.get("login.error__no_acount_found"));
        } else if (err.code == "auth/invalid-email") {
          message = yield lastValueFrom(this.translate.get("login.error__no_acount_found"));
        } else if (err.code == "auth/network-request-failed") {
          message = yield lastValueFrom(this.translate.get("login.error__network_connection"));
        } else if (err.code == "auth/invalid-login-credentials") {
          message = yield lastValueFrom(this.translate.get("login.error__invalid_login_credentials"));
        } else if (err.code == "auth/invalid-credential") {
          message = yield lastValueFrom(this.translate.get("login.error__invalid_credentials"));
        } else {
          console.log("Error");
        }
        const alert = yield this.alertCtrl.create({
          header: yield lastValueFrom(this.translate.get("login.error")),
          message,
          buttons: [
            {
              text: yield lastValueFrom(this.translate.get("common.ok")),
              role: "cancel"
            }
          ]
        });
        alert.present();
      }
    });
  }
};
_LoginPage.\u0275fac = function LoginPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginPage)(\u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(MenuController), \u0275\u0275directiveInject(TranslateService));
};
_LoginPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginPage, selectors: [["app-login"]], standalone: false, decls: 26, vars: 2, consts: [[1, "ion-no-padding", 2, "height", "100vh"], [2, "height", "100%"], ["size-md", "6", "size-lg", "5", 2, "display", "flex", "align-items", "center", "justify-content", "center"], [1, "ion-no-margin", 2, "max-width", "500px", "width", "100%"], ["src", "assets/logo_trans.png", "alt", "Logo", 2, "max-height", "100px", "max-width", "100px"], ["routerLink", "/signup", 1, "ion-text-primary"], [3, "keyup.enter", "formGroup"], [3, "inset"], ["lines", "full"], ["label", "E-Mail Adresse", "labelPlacement", "floating", "formControlName", "email", "type", "email", "required", "", "placeholder", "Gib deine E-Mail Adresse ein"], ["label", "Passwort", "labelPlacement", "floating", "formControlName", "password", "type", "password", "required", "", "placeholder", "Gib dein Passwort ein"], ["routerLink", "/reset-password", "slot", "end", 1, "ion-text-primary"], ["expand", "block", "type", "submit", 1, "ion-margin-top", 3, "click"], ["size-md", "6", "size-lg", "7", 1, "ion-hide-md-down", 2, "padding", "0"], [2, "height", "100%", "background-image", "url('assets/bg/login.jpg')", "background-size", "cover", "background-position", "center"]], template: function LoginPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-grid", 0)(2, "ion-row", 1)(3, "ion-col", 2)(4, "ion-card", 3)(5, "ion-card-content");
    \u0275\u0275element(6, "ion-img", 4);
    \u0275\u0275elementStart(7, "ion-card-title");
    \u0275\u0275text(8, "Melde Dich mit deinem Konto an");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ion-text")(10, "p");
    \u0275\u0275text(11, " Oder ");
    \u0275\u0275elementStart(12, "ion-router-link", 5);
    \u0275\u0275text(13, "erstelle einen neuen Account");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "form", 6);
    \u0275\u0275listener("keyup.enter", function LoginPage_Template_form_keyup_enter_14_listener() {
      return ctx.submitCredentials(ctx.authForm);
    });
    \u0275\u0275elementStart(15, "ion-list", 7)(16, "ion-item", 8);
    \u0275\u0275element(17, "ion-input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ion-item", 8);
    \u0275\u0275element(19, "ion-input", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "ion-router-link", 11);
    \u0275\u0275text(21, " Passwort vergessen? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ion-button", 12);
    \u0275\u0275listener("click", function LoginPage_Template_ion_button_click_22_listener() {
      return ctx.submitCredentials(ctx.authForm);
    });
    \u0275\u0275text(23, "Anmelden");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(24, "ion-col", 13);
    \u0275\u0275element(25, "div", 14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(14);
    \u0275\u0275property("formGroup", ctx.authForm);
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
  }
}, dependencies: [\u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, IonButton, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonGrid, IonImg, IonInput, IonItem, IonList, IonRow, IonText, TextValueAccessorDirective, RouterLinkDelegateDirective, RouterLink], styles: ["\n\nion-list[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\nion-card-title[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important;\n}\n/*# sourceMappingURL=login.page.css.map */"] });
var LoginPage = _LoginPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginPage, { className: "LoginPage", filePath: "src/app/pages/auth/login/login.page.ts", lineNumber: 22 });
})();

// src/app/pages/auth/login/login-routing.module.ts
var routes = [
  {
    path: "",
    component: LoginPage
  }
];
var _LoginPageRoutingModule = class _LoginPageRoutingModule {
};
_LoginPageRoutingModule.\u0275fac = function LoginPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginPageRoutingModule)();
};
_LoginPageRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LoginPageRoutingModule });
_LoginPageRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var LoginPageRoutingModule = _LoginPageRoutingModule;

// src/app/pages/auth/login/login.module.ts
var _LoginPageModule = class _LoginPageModule {
};
_LoginPageModule.\u0275fac = function LoginPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginPageModule)();
};
_LoginPageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LoginPageModule });
_LoginPageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  IonicModule,
  LoginPageRoutingModule,
  TranslateModule
] });
var LoginPageModule = _LoginPageModule;
export {
  LoginPageModule
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9hdXRoL2xvZ2luL2xvZ2luLnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9hdXRoL2xvZ2luL2xvZ2luLnBhZ2UuaHRtbCIsICJzcmMvYXBwL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4tcm91dGluZy5tb2R1bGUudHMiLCAic3JjL2FwcC9wYWdlcy9hdXRoL2xvZ2luL2xvZ2luLm1vZHVsZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuLy8gaW1wb3J0IHsgQWxlcnRDb250cm9sbGVyLCBMb2FkaW5nQ29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IFVzZXJDcmVkZW50aWFsIH0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvYXV0aFwiO1xuXG5pbXBvcnQgeyBVc2VyQ3JlZGVudGlhbExvZ2luIH0gZnJvbSBcInNyYy9hcHAvbW9kZWxzL3VzZXJcIjtcbmltcG9ydCB7XG4gIFVudHlwZWRGb3JtR3JvdXAsXG4gIFZhbGlkYXRvcnMsXG4gIFVudHlwZWRGb3JtQnVpbGRlcixcbn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBBbGVydENvbnRyb2xsZXIsIExvYWRpbmdDb250cm9sbGVyLCBNZW51Q29udHJvbGxlciB9IGZyb20gXCJAaW9uaWMvYW5ndWxhclwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuaW1wb3J0IHsgbGFzdFZhbHVlRnJvbSB9IGZyb20gXCJyeGpzXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtbG9naW5cIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLnBhZ2UuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9sb2dpbi5wYWdlLnNjc3NcIl0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5QYWdlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIHVzZXI6IFVzZXJDcmVkZW50aWFsTG9naW47XG4gIHB1YmxpYyBhdXRoRm9ybTogVW50eXBlZEZvcm1Hcm91cDtcbiAgcHVibGljIHNob3c6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBhbGVydEN0cmw6IEFsZXJ0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZm9ybUJ1aWxkZXI6IFVudHlwZWRGb3JtQnVpbGRlcixcbiAgICBwdWJsaWMgcmVhZG9ubHkgbWVudUN0cmw6IE1lbnVDb250cm9sbGVyLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMubWVudUN0cmwuZW5hYmxlKHRydWUsIFwibWVudVwiKTtcbiAgICB0aGlzLmF1dGhGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBlbWFpbDogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF0pXSxcbiAgICAgIHBhc3N3b3JkOiBbXCJcIiwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildLFxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5tZW51Q3RybC5lbmFibGUoZmFsc2UsIFwibWVudVwiKTtcbiAgICB0aGlzLnVzZXIgPSB7XG4gICAgICBlbWFpbDogXCJcIixcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBzdWJtaXRDcmVkZW50aWFscyhhdXRoRm9ybTogYW55KSB7XG4gICAgY29uc3QgbG9hZGluZyA9IGF3YWl0IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6ICdMb2dpbi4uLicsXG4gICAgICBkdXJhdGlvbjogMCxcbiAgICAgIGJhY2tkcm9wRGlzbWlzczogZmFsc2UsXG4gICAgfSk7XG4gICAgbG9hZGluZy5wcmVzZW50KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXJDcmVkZW50aWFsOiBVc2VyQ3JlZGVudGlhbCA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UubG9naW4oXG4gICAgICAgIGF1dGhGb3JtLnZhbHVlLmVtYWlsLFxuICAgICAgICBhdXRoRm9ybS52YWx1ZS5wYXNzd29yZFxuICAgICAgKTtcbiAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgdGhpcy5tZW51Q3RybC5lbmFibGUodHJ1ZSwgXCJtZW51XCIpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChcIi90XCIpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiXCIpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgIGxldCBtZXNzYWdlID1cbiAgICAgICAgKGF3YWl0IGxhc3RWYWx1ZUZyb20oXG4gICAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLmdlbmVyYWxfX2Vycm9yX29jY3VycmVkXCIpXG4gICAgICAgICkpICtcbiAgICAgICAgXCIgXCIgK1xuICAgICAgICBlcnIuY29kZSArXG4gICAgICAgIFwiIC8gXCIgK1xuICAgICAgICBlcnIubWVzc2FnZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLmNvZGUpO1xuXG4gICAgICBpZiAoZXJyLmNvZGUgPT0gXCJhdXRoL3VzZXItbm90LWZvdW5kXCIpIHtcbiAgICAgICAgbWVzc2FnZSA9IGF3YWl0IGxhc3RWYWx1ZUZyb20oXG4gICAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KFwibG9naW4uZXJyb3JfX25vX2Fjb3VudF9mb3VuZFwiKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChlcnIuY29kZSA9PSBcImF1dGgvd3JvbmctcGFzc3dvcmRcIikge1xuICAgICAgICBtZXNzYWdlID0gYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoXCJsb2dpbi5lcnJvcl9fbm9fYWNvdW50X2ZvdW5kXCIpXG4gICAgICAgICk7XG5cbiAgICAgIH0gZWxzZSBpZiAoZXJyLmNvZGUgPT0gXCJhdXRoL2ludmFsaWQtZW1haWxcIikge1xuICAgICAgICBtZXNzYWdlID0gYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoXCJsb2dpbi5lcnJvcl9fbm9fYWNvdW50X2ZvdW5kXCIpXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgfSBlbHNlIGlmIChlcnIuY29kZSA9PSBcImF1dGgvbmV0d29yay1yZXF1ZXN0LWZhaWxlZFwiKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlLmdldChcImxvZ2luLmVycm9yX19uZXR3b3JrX2Nvbm5lY3Rpb25cIilcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyLmNvZGUgPT0gXCJhdXRoL2ludmFsaWQtbG9naW4tY3JlZGVudGlhbHNcIikge1xuICAgICAgICBtZXNzYWdlID0gYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoXCJsb2dpbi5lcnJvcl9faW52YWxpZF9sb2dpbl9jcmVkZW50aWFsc1wiKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChlcnIuY29kZSA9PSBcImF1dGgvaW52YWxpZC1jcmVkZW50aWFsXCIpIHtcbiAgICAgICAgbWVzc2FnZSA9IGF3YWl0IGxhc3RWYWx1ZUZyb20oXG4gICAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KFwibG9naW4uZXJyb3JfX2ludmFsaWRfY3JlZGVudGlhbHNcIilcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3JcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydEN0cmwuY3JlYXRlKHtcbiAgICAgICAgaGVhZGVyOiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImxvZ2luLmVycm9yXCIpKSxcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLm9rXCIpKSxcbiAgICAgICAgICAgIHJvbGU6IFwiY2FuY2VsXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pO1xuICAgICAgYWxlcnQucHJlc2VudCgpO1xuICAgIH1cbiAgfVxufVxuIiwgIjxpb24tY29udGVudD5cblxuICA8aW9uLWdyaWQgY2xhc3M9XCJpb24tbm8tcGFkZGluZ1wiIHN0eWxlPVwiaGVpZ2h0OiAxMDB2aDtcIj5cbiAgICA8aW9uLXJvdyBzdHlsZT1cImhlaWdodDogMTAwJTtcIj5cbiAgICAgIDwhLS0gTG9naW4gRm9ybSBDb2x1bW4gLS0+XG4gICAgICA8aW9uLWNvbCBzaXplLW1kPVwiNlwiIHNpemUtbGc9XCI1XCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cbiAgICAgICAgPGlvbi1jYXJkIGNsYXNzPVwiaW9uLW5vLW1hcmdpblwiIHN0eWxlPVwibWF4LXdpZHRoOiA1MDBweDsgd2lkdGg6IDEwMCU7XCI+XG4gICAgICAgICAgPGlvbi1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgICA8aW9uLWltZyBzcmM9XCJhc3NldHMvbG9nb190cmFucy5wbmdcIiBhbHQ9XCJMb2dvXCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiAxMDBweDsgbWF4LXdpZHRoOiAxMDBweDtcIj48L2lvbi1pbWc+XG4gICAgICAgICAgICA8aW9uLWNhcmQtdGl0bGU+TWVsZGUgRGljaCBtaXQgZGVpbmVtIEtvbnRvIGFuPC9pb24tY2FyZC10aXRsZT5cbiAgICAgICAgICAgIDxpb24tdGV4dD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgT2RlciA8aW9uLXJvdXRlci1saW5rIHJvdXRlckxpbms9XCIvc2lnbnVwXCIgY2xhc3M9XCJpb24tdGV4dC1wcmltYXJ5XCI+ZXJzdGVsbGUgZWluZW4gbmV1ZW5cbiAgICAgICAgICAgICAgICAgIEFjY291bnQ8L2lvbi1yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9pb24tdGV4dD5cbiAgICAgICAgICAgIDwhLS0gRm9ybSBDb250ZW50IEhlcmUgLS0+XG4gICAgICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImF1dGhGb3JtXCIgKGtleXVwLmVudGVyKT1cInN1Ym1pdENyZWRlbnRpYWxzKGF1dGhGb3JtKVwiPlxuICAgICAgICAgICAgICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIj5cblxuICAgICAgICAgICAgICAgIDxpb24taXRlbSBsaW5lcz1cImZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgIDxpb24taW5wdXQgbGFiZWw9XCJFLU1haWwgQWRyZXNzZVwiIGxhYmVsUGxhY2VtZW50PVwiZmxvYXRpbmdcIiBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiR2liIGRlaW5lIEUtTWFpbCBBZHJlc3NlIGVpblwiPjwvaW9uLWlucHV0PlxuICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8aW9uLWl0ZW0gbGluZXM9XCJmdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8aW9uLWlucHV0IGxhYmVsPVwiUGFzc3dvcnRcIiBsYWJlbFBsYWNlbWVudD1cImZsb2F0aW5nXCIgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkdpYiBkZWluIFBhc3N3b3J0IGVpblwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tXG4gICAgICAgICAgICAgICAgICAgICAgTk9UIFlFVCBXT1JLSU5HXG4gICAgICAgICAgICAgICAgICAgICAgPGlvbi1pbnB1dC1wYXNzd29yZC10b2dnbGUgc2xvdD1cImVuZFwiPjwvaW9uLWlucHV0LXBhc3N3b3JkLXRvZ2dsZT4tLT5cbiAgICAgICAgICAgICAgICAgIDwvaW9uLWlucHV0PlxuICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICAgIDwvaW9uLWxpc3Q+XG5cbiAgICAgICAgICAgICAgPGlvbi1yb3V0ZXItbGluayByb3V0ZXJMaW5rPVwiL3Jlc2V0LXBhc3N3b3JkXCIgc2xvdD1cImVuZFwiIGNsYXNzPVwiaW9uLXRleHQtcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgIFBhc3N3b3J0IHZlcmdlc3Nlbj9cbiAgICAgICAgICAgICAgPC9pb24tcm91dGVyLWxpbms+XG5cbiAgICAgICAgICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cInN1Ym1pdENyZWRlbnRpYWxzKGF1dGhGb3JtKVwiIGV4cGFuZD1cImJsb2NrXCIgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpb24tbWFyZ2luLXRvcFwiPkFubWVsZGVuPC9pb24tYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgPC9pb24tY2FyZC1jb250ZW50PlxuICAgICAgICA8L2lvbi1jYXJkPlxuICAgICAgPC9pb24tY29sPlxuICAgICAgPCEtLSBJbWFnZSBDb2x1bW4gLS0+XG4gICAgICA8aW9uLWNvbCBzaXplLW1kPVwiNlwiIHNpemUtbGc9XCI3XCIgc3R5bGU9XCJwYWRkaW5nOiAwO1wiIGNsYXNzPVwiaW9uLWhpZGUtbWQtZG93blwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDEwMCU7IGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYXNzZXRzL2JnL2xvZ2luLmpwZycpOyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9pb24tY29sPlxuICAgIDwvaW9uLXJvdz5cbiAgPC9pb24tZ3JpZD5cblxuXG4gIDwhLS1cblxuICA8ZGl2IGNsYXNzPVwibWluLWgtc2NyZWVuIGJnLXdoaXRlIGZsZXhcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleC0xIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgcHktMTIgcHgtNCBzbTpweC02IGxnOmZsZXgtbm9uZSBsZzpweC0yMCB4bDpweC0yNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm14LWF1dG8gdy1mdWxsIG1heC13LXNtIGxnOnctOTZcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cGljdHVyZT5cbiAgICAgICAgICAgIDxzb3VyY2Ugc3Jjc2V0PVwiYXNzZXRzL2xvZ29fdHJhbnMucG5nXCIgbWVkaWE9XCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIgLz5cbiAgICAgICAgICAgIDxzb3VyY2Ugc3Jjc2V0PVwiYXNzZXRzL2xvZ29fdHJhbnMucG5nXCIgbWVkaWE9XCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KVwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiaC0xMiB3LWF1dG9cIiBzcmM9XCJhc3NldHMvbG9nb190cmFucy5wbmdcIiBhbHQ9XCJMb2dvXCIgLz5cbiAgICAgICAgICA8L3BpY3R1cmU+XG4gICAgICAgICAgXG4gICAgICAgICAgPGgyIGkxOG4gY2xhc3M9XCJtdC02IHRleHQtM3hsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgIHt7XCJsb2dpbi5sb2dpbl9fdGl0bGVcIiB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzcz1cIm10LTIgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCIgaTE4bj5cbiAgICAgICAgICAgIHt7XCJjb21tb24ub3JcInx0cmFuc2xhdGV9fVxuICAgICAgICAgICAgPHNwYW4gcm91dGVyTGluaz1cIi9zaWdudXBcIiBjbGFzcz1cImZvbnQtbWVkaXVtIHRleHQtbXljbHVibGlnaHQgaG92ZXI6dGV4dC1teWNsdWJkYXJrXCI+XG4gICAgICAgICAgICAgIHt7XCJsb2dpbi5zaWduaW5fY3JlYXRlX19hY2NvdW50XCJ8dHJhbnNsYXRlfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm10LThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtNlwiPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJzcGFjZS15LTZcIiBbZm9ybUdyb3VwXT1cImF1dGhGb3JtXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCIgY2xhc3M9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIiBpMThuPlxuICAgICAgICAgICAgICAgICAge3tcImNvbW1vbi5lbWFpbF9fYWRkcmVzc1wifCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTFcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgYXV0b2NvbXBsZXRlPVwiZW1haWxcIiBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBzaGFkb3ctc20gcGxhY2Vob2xkZXItZ3JheS00MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctbXljbHViZGFyayBmb2N1czpib3JkZXItbXljbHViZGFyayBzbTp0ZXh0LXNtIGRhcms6dGV4dC1ibGFja1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiIGNsYXNzPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCIgaTE4bj5cbiAgICAgICAgICAgICAgICAgIHt7XCJjb21tb24ucGFzc3dvcmRcInwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0xXCI+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCA6dHlwZT1cInNob3cgPyAncGFzc3dvcmQnIDogJ3RleHQnXCIgaWQ9XCJwYXNzd29yZFwiIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIGF1dG9jb21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIiByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgc2hhZG93LXNtIHBsYWNlaG9sZGVyLWdyYXktNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLW15Y2x1YmRhcmsgZm9jdXM6Ym9yZGVyLW15Y2x1YmRhcmsgc206dGV4dC1zbSBkYXJrOnRleHQtYmxhY2tcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gcm91dGVyTGluaz1cIi9yZXNldC1wYXNzd29yZFwiIGNsYXNzPVwiZm9udC1tZWRpdW0gdGV4dC1teWNsdWJsaWdodCBob3Zlcjp0ZXh0LW15Y2x1YmRhcmtcIiBpMThuPlxuICAgICAgICAgICAgICAgICAgICB7e1wiY29tbW9uLmZvcmdldF9fcGFzc3dvcmRcIiB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJzdWJtaXRDcmVkZW50aWFscyhhdXRoRm9ybSlcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgcHktMiBweC00IGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBzaGFkb3ctc20gdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGRhcms6dGV4dC13aGl0ZSBiZy1teWNsdWJsaWdodCBkYXJrOmJnLW15Y2x1YmRhcmsgaG92ZXI6YmctbXljbHViZGFyayBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1iZy1teWNsdWJkYXJrXCJcbiAgICAgICAgICAgICAgICBpMThuPlxuICAgICAgICAgICAgICAgIHt7XCJsb2dpbi5yZWdpc3RlclwiIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiaGlkZGVuIGxnOmJsb2NrIHJlbGF0aXZlIHctMCBmbGV4LTFcIj5cbiAgICA8aW1nIGNsYXNzPVwiYWJzb2x1dGUgaW5zZXQtMCBoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlclwiIHNyYz1cImFzc2V0cy9iZy9sb2dpbi5qcGdcIlxuICAgIGFsdD1cIkhpbnRlcmdydW5kYmlsZCBmw7xyIGRlbiBMb2dpblwiIC8+XG4gIDwvZGl2PlxuPC9kaXY+XG4tLT5cbjwvaW9uLWNvbnRlbnQ+IiwgImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IExvZ2luUGFnZSB9IGZyb20gJy4vbG9naW4ucGFnZSc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBMb2dpblBhZ2VcbiAgfVxuXVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpblBhZ2VSb3V0aW5nTW9kdWxlIHt9XG4iLCAiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmltcG9ydCB7IExvZ2luUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2xvZ2luLXJvdXRpbmcubW9kdWxlJztcblxuaW1wb3J0IHsgTG9naW5QYWdlIH0gZnJvbSAnLi9sb2dpbi5wYWdlJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgTG9naW5QYWdlUm91dGluZ01vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTG9naW5QYWdlXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpblBhZ2VNb2R1bGUge31cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
