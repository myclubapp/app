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

// src/app/pages/auth/signup/signup.page.ts
var _SignupPage = class _SignupPage {
  constructor(authService, alertCtrl, formBuilder, menuCtrl, loadingCtrl, router, translate) {
    this.authService = authService;
    this.alertCtrl = alertCtrl;
    this.formBuilder = formBuilder;
    this.menuCtrl = menuCtrl;
    this.loadingCtrl = loadingCtrl;
    this.router = router;
    this.translate = translate;
    this.authForm = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.minLength(6)],
      lastName: ["", Validators.required],
      firstName: ["", Validators.required]
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
      if (!authForm.valid) {
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
        const loading = yield this.loadingCtrl.create({
          cssClass: "my-custom-class",
          message: (yield lastValueFrom(this.translate.get("common.please__wait"))) + "..."
          // duration: 10000,
        });
        yield loading.present();
        const credentials = {
          email: authForm.value.email,
          password: authForm.value.password
        };
        try {
          const signupUserResponse = yield this.signupUser(credentials, {
            firstName: authForm.value.firstName,
            lastName: authForm.value.lastName
          });
          if (signupUserResponse.operationType !== "signIn") {
            console.log(signupUserResponse.operationType);
          }
          const alert = yield this.alertCtrl.create({
            header: yield lastValueFrom(this.translate.get("signup.account__created")),
            message: yield lastValueFrom(this.translate.get("signup.account__created_description")),
            buttons: [
              {
                text: yield lastValueFrom(this.translate.get("common.ok")),
                role: "confirm"
              }
            ]
          });
          yield loading.dismiss();
          alert.present();
          const { data, role } = yield alert.onDidDismiss();
          if (role === "confirm") {
          }
          const usercredentials = yield this.authService.login(credentials.email, credentials.password);
          console.log("user signed up " + usercredentials.user.email);
          yield this.router.navigateByUrl("/");
        } catch (err) {
          let message = (yield lastValueFrom(this.translate.get("common.general__error_occurred"))) + ": " + err.code + " / " + err.message;
          console.error(err.code);
          if (err.code == "auth/email-already-in-use") {
            message = yield lastValueFrom(this.translate.get("signup.email__already_in_use"));
          } else {
            console.log("Error");
          }
          yield loading.dismiss();
          const alert = yield this.alertCtrl.create({
            header: yield lastValueFrom(this.translate.get("common.error")),
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
      }
    });
  }
  /* async presentLoading() {
      const loading = await this.loadingCtrl.create({
        cssClass: "my-custom-class",
        message: await lastValueFrom(this.translate.get("please__wait"))+"...",
        duration: 1500,
      });
      await loading.present();
  
      const { role, data } = await loading.onDidDismiss();
      console.log("Loading dismissed!");
    }*/
  signupUser(credentials, userData) {
    return __async(this, null, function* () {
      return this.authService.signup(credentials.email, credentials.password, userData.firstName, userData.lastName);
    });
  }
};
_SignupPage.\u0275fac = function SignupPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignupPage)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(MenuController), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService));
};
_SignupPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupPage, selectors: [["app-signup"]], standalone: false, decls: 37, vars: 29, consts: [[1, "ion-no-padding", 2, "height", "100vh"], [2, "height", "100%"], ["size-md", "6", "size-lg", "5", 2, "display", "flex", "align-items", "center", "justify-content", "center"], [1, "ion-no-margin", 2, "max-width", "500px", "width", "100%"], ["src", "assets/logo_trans.png", "alt", "Logo", 2, "max-height", "100px", "max-width", "100px"], ["routerLink", "/login", 1, "ion-text-primary"], [3, "formGroup"], [3, "inset"], ["lines", "full"], ["labelPlacement", "floating", "type", "email", "formControlName", "email", "required", "", 3, "label"], ["labelPlacement", "floating", "type", "password", "formControlName", "password", "required", "", 3, "label"], ["labelPlacement", "floating", "type", "text", "formControlName", "firstName", "required", "", 3, "label"], ["labelPlacement", "floating", "type", "text", "formControlName", "lastName", "required", "", 3, "label"], ["expand", "block", "type", "submit", 1, "ion-margin-top", 3, "click"], ["size-md", "6", "size-lg", "7", 1, "ion-hide-md-down", 2, "padding", "0"], ["src", "assets/bg/mountain-4.jpg", 2, "height", "100%", "width", "100%", "object-fit", "cover", 3, "alt"]], template: function SignupPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-grid", 0)(2, "ion-row", 1)(3, "ion-col", 2)(4, "ion-card", 3)(5, "ion-card-content");
    \u0275\u0275element(6, "ion-img", 4);
    \u0275\u0275elementStart(7, "ion-card-title");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ion-text")(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementStart(14, "ion-router-link", 5);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "form", 6)(18, "ion-list", 7)(19, "ion-item", 8);
    \u0275\u0275element(20, "ion-input", 9);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ion-item", 8);
    \u0275\u0275element(23, "ion-input", 10);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ion-item", 8);
    \u0275\u0275element(26, "ion-input", 11);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ion-item", 8);
    \u0275\u0275element(29, "ion-input", 12);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "ion-button", 13);
    \u0275\u0275listener("click", function SignupPage_Template_ion_button_click_31_listener() {
      return ctx.submitCredentials(ctx.authForm);
    });
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(34, "ion-col", 14);
    \u0275\u0275element(35, "ion-img", 15);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, "signup.signup__title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 13, "common.or"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 15, "signup.already_have__acount"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.authForm);
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("label", \u0275\u0275pipeBind1(21, 17, "common.email__address"));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("label", \u0275\u0275pipeBind1(24, 19, "common.password"));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("label", \u0275\u0275pipeBind1(27, 21, "common.first__name"));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("label", \u0275\u0275pipeBind1(30, 23, "common.last__name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 25, "signup.to__register"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("alt", \u0275\u0275pipeBind1(36, 27, "common.mountain_background__alt"));
  }
}, dependencies: [\u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, IonButton, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonGrid, IonImg, IonInput, IonItem, IonList, IonRow, IonText, TextValueAccessorDirective, RouterLinkDelegateDirective, RouterLink, TranslatePipe], styles: ["\n\nion-list[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\nion-card-title[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important;\n}\n/*# sourceMappingURL=signup.page.css.map */"] });
var SignupPage = _SignupPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupPage, { className: "SignupPage", filePath: "src/app/pages/auth/signup/signup.page.ts", lineNumber: 25 });
})();

// src/app/pages/auth/signup/signup-routing.module.ts
var routes = [
  {
    path: "",
    component: SignupPage
  }
];
var _SignupPageRoutingModule = class _SignupPageRoutingModule {
};
_SignupPageRoutingModule.\u0275fac = function SignupPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignupPageRoutingModule)();
};
_SignupPageRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SignupPageRoutingModule });
_SignupPageRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var SignupPageRoutingModule = _SignupPageRoutingModule;

// src/app/pages/auth/signup/signup.module.ts
var _SignupPageModule = class _SignupPageModule {
};
_SignupPageModule.\u0275fac = function SignupPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignupPageModule)();
};
_SignupPageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SignupPageModule });
_SignupPageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  IonicModule,
  SignupPageRoutingModule,
  TranslateModule
] });
var SignupPageModule = _SignupPageModule;
export {
  SignupPageModule
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ251cC9zaWdudXAucGFnZS50cyIsICJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbnVwL3NpZ251cC5wYWdlLmh0bWwiLCAic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ251cC9zaWdudXAtcm91dGluZy5tb2R1bGUudHMiLCAic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ251cC9zaWdudXAubW9kdWxlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBVbnR5cGVkRm9ybUJ1aWxkZXIsXG4gIFVudHlwZWRGb3JtR3JvdXAsXG4gIFZhbGlkYXRvcnMsXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtcbiAgQWxlcnRDb250cm9sbGVyLFxuICBMb2FkaW5nQ29udHJvbGxlcixcbiAgTWVudUNvbnRyb2xsZXIsXG59IGZyb20gXCJAaW9uaWMvYW5ndWxhclwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyQ3JlZGVudGlhbCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBsYXN0VmFsdWVGcm9tIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IFVzZXJDcmVkZW50aWFsTG9naW4sIFByb2ZpbGUgfSBmcm9tIFwic3JjL2FwcC9tb2RlbHMvdXNlclwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLXNpZ251cFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2lnbnVwLnBhZ2UuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9zaWdudXAucGFnZS5zY3NzXCJdLFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cFBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBwcml2YXRlIHVzZXJQcm9maWxlUmVmOiBBbmd1bGFyRmlyZXN0b3JlRG9jdW1lbnQgPCBVc2VyUHJvZmlsZSA+IDtcbiAgcHVibGljIHVzZXI6IFVzZXJDcmVkZW50aWFsTG9naW47XG4gIHB1YmxpYyBhdXRoRm9ybTogVW50eXBlZEZvcm1Hcm91cDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBhbGVydEN0cmw6IEFsZXJ0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZvcm1CdWlsZGVyOiBVbnR5cGVkRm9ybUJ1aWxkZXIsXG4gICAgLy8gcHJpdmF0ZSBhZnM6IEFuZ3VsYXJGaXJlc3RvcmUsXG4gICAgcHVibGljIG1lbnVDdHJsOiBNZW51Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuYXV0aEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGVtYWlsOiBbXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXSldLFxuICAgICAgcGFzc3dvcmQ6IFtcIlwiLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0sXG4gICAgICBsYXN0TmFtZTogW1wiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZmlyc3ROYW1lOiBbXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1lbnVDdHJsLmVuYWJsZShmYWxzZSwgXCJtZW51XCIpO1xuICAgIHRoaXMudXNlciA9IHtcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIHN1Ym1pdENyZWRlbnRpYWxzKGF1dGhGb3JtOiBVbnR5cGVkRm9ybUdyb3VwKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCFhdXRoRm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5hbGVydEN0cmxcbiAgICAgICAgLmNyZWF0ZSh7XG4gICAgICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5lcnJvcl9faW52YWxpZF9mb3JtXCIpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLm9rXCIpKSxcbiAgICAgICAgICAgICAgcm9sZTogXCJjYW5jZWxcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGFsZXJ0KSA9PiB7XG4gICAgICAgICAgYWxlcnQucHJlc2VudCgpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbG9hZGluZyA9IGF3YWl0IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgICAgY3NzQ2xhc3M6IFwibXktY3VzdG9tLWNsYXNzXCIsXG4gICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgKGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLnBsZWFzZV9fd2FpdFwiKSkpICtcbiAgICAgICAgICBcIi4uLlwiLFxuICAgICAgICAvLyBkdXJhdGlvbjogMTAwMDAsXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IGxvYWRpbmcucHJlc2VudCgpO1xuXG4gICAgICBjb25zdCBjcmVkZW50aWFsczogVXNlckNyZWRlbnRpYWxMb2dpbiA9IHtcbiAgICAgICAgZW1haWw6IGF1dGhGb3JtLnZhbHVlLmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogYXV0aEZvcm0udmFsdWUucGFzc3dvcmQsXG4gICAgICB9O1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBzaWdudXBVc2VyUmVzcG9uc2U6IFVzZXJDcmVkZW50aWFsID0gYXdhaXQgdGhpcy5zaWdudXBVc2VyKFxuICAgICAgICAgIGNyZWRlbnRpYWxzLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogYXV0aEZvcm0udmFsdWUuZmlyc3ROYW1lLFxuICAgICAgICAgICAgbGFzdE5hbWU6IGF1dGhGb3JtLnZhbHVlLmxhc3ROYW1lLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoc2lnbnVwVXNlclJlc3BvbnNlLm9wZXJhdGlvblR5cGUgIT09IFwic2lnbkluXCIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzaWdudXBVc2VyUmVzcG9uc2Uub3BlcmF0aW9uVHlwZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XG4gICAgICAgICAgaGVhZGVyOiBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KFwic2lnbnVwLmFjY291bnRfX2NyZWF0ZWRcIilcbiAgICAgICAgICApLFxuICAgICAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwic2lnbnVwLmFjY291bnRfX2NyZWF0ZWRfZGVzY3JpcHRpb25cIikpLFxuICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24ub2tcIikpLFxuICAgICAgICAgICAgICByb2xlOiBcImNvbmZpcm1cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICBhbGVydC5wcmVzZW50KCk7XG4gICAgICAgIGNvbnN0IHsgZGF0YSwgcm9sZSB9ID0gYXdhaXQgYWxlcnQub25EaWREaXNtaXNzKCk7XG4gICAgICAgIGlmIChyb2xlID09PSBcImNvbmZpcm1cIikge1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVzZXJjcmVkZW50aWFscyA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UubG9naW4oY3JlZGVudGlhbHMuZW1haWwsIGNyZWRlbnRpYWxzLnBhc3N3b3JkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIHNpZ25lZCB1cCBcIiArIHVzZXJjcmVkZW50aWFscy51c2VyLmVtYWlsKTtcbiAgICAgICAgYXdhaXQgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChcIi9cIik7IC8vIC0tPiB0aGlzIHNob3VsZCB0cmlnZ2VyIGFwcGNvbXBvbmVudD9cblxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGxldCBtZXNzYWdlID1cbiAgICAgICAgICAoYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5nZW5lcmFsX19lcnJvcl9vY2N1cnJlZFwiKVxuICAgICAgICAgICkpICtcbiAgICAgICAgICBcIjogXCIgK1xuICAgICAgICAgIGVyci5jb2RlICtcbiAgICAgICAgICBcIiAvIFwiICtcbiAgICAgICAgICBlcnIubWVzc2FnZTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIuY29kZSk7XG5cbiAgICAgICAgaWYgKGVyci5jb2RlID09IFwiYXV0aC9lbWFpbC1hbHJlYWR5LWluLXVzZVwiKSB7XG4gICAgICAgICAgbWVzc2FnZSA9IGF3YWl0IGxhc3RWYWx1ZUZyb20oXG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoXCJzaWdudXAuZW1haWxfX2FscmVhZHlfaW5fdXNlXCIpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yXCIpO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XG4gICAgICAgICAgaGVhZGVyOiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5lcnJvclwiKSksXG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLm9rXCIpKSxcbiAgICAgICAgICAgICAgcm9sZTogXCJjYW5jZWxcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgICAgIGFsZXJ0LnByZXNlbnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiBhc3luYyBwcmVzZW50TG9hZGluZygpIHtcbiAgICBjb25zdCBsb2FkaW5nID0gYXdhaXQgdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgY3NzQ2xhc3M6IFwibXktY3VzdG9tLWNsYXNzXCIsXG4gICAgICBtZXNzYWdlOiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcInBsZWFzZV9fd2FpdFwiKSkrXCIuLi5cIixcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgIH0pO1xuICAgIGF3YWl0IGxvYWRpbmcucHJlc2VudCgpO1xuXG4gICAgY29uc3QgeyByb2xlLCBkYXRhIH0gPSBhd2FpdCBsb2FkaW5nLm9uRGlkRGlzbWlzcygpO1xuICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyBkaXNtaXNzZWQhXCIpO1xuICB9Ki9cblxuICBhc3luYyBzaWdudXBVc2VyKGNyZWRlbnRpYWxzOiBVc2VyQ3JlZGVudGlhbExvZ2luLCB1c2VyRGF0YTogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2Uuc2lnbnVwKFxuICAgICAgY3JlZGVudGlhbHMuZW1haWwsXG4gICAgICBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgIHVzZXJEYXRhLmZpcnN0TmFtZSxcbiAgICAgIHVzZXJEYXRhLmxhc3ROYW1lXG4gICAgKTtcbiAgfVxufVxuIiwgIjxpb24tY29udGVudD5cblxuICA8aW9uLWdyaWQgY2xhc3M9XCJpb24tbm8tcGFkZGluZ1wiIHN0eWxlPVwiaGVpZ2h0OiAxMDB2aDtcIj5cbiAgICA8aW9uLXJvdyBzdHlsZT1cImhlaWdodDogMTAwJTtcIj5cbiAgICAgIDwhLS0gU2lnbnVwIEZvcm0gQ29sdW1uIC0tPlxuICAgICAgPGlvbi1jb2wgc2l6ZS1tZD1cIjZcIiBzaXplLWxnPVwiNVwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgICAgIDxpb24tY2FyZCBjbGFzcz1cImlvbi1uby1tYXJnaW5cIiBzdHlsZT1cIm1heC13aWR0aDogNTAwcHg7IHdpZHRoOiAxMDAlO1wiPlxuICAgICAgICAgIDxpb24tY2FyZC1jb250ZW50PlxuICAgICAgICAgICAgPGlvbi1pbWcgc3JjPVwiYXNzZXRzL2xvZ29fdHJhbnMucG5nXCIgYWx0PVwiTG9nb1wiIHN0eWxlPVwibWF4LWhlaWdodDogMTAwcHg7IG1heC13aWR0aDogMTAwcHg7XCI+PC9pb24taW1nPlxuICAgICAgICAgICAgPGlvbi1jYXJkLXRpdGxlPnt7J3NpZ251cC5zaWdudXBfX3RpdGxlJyB8IHRyYW5zbGF0ZX19PC9pb24tY2FyZC10aXRsZT5cbiAgICAgICAgICAgIDxpb24tdGV4dD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAge3snY29tbW9uLm9yJyB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICAgICAgPGlvbi1yb3V0ZXItbGluayByb3V0ZXJMaW5rPVwiL2xvZ2luXCIgY2xhc3M9XCJpb24tdGV4dC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICB7eydzaWdudXAuYWxyZWFkeV9oYXZlX19hY291bnQnIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgICAgICA8L2lvbi1yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9pb24tdGV4dD5cbiAgICAgICAgICAgIDwhLS0gU2lnbnVwIEZvcm0gQ29udGVudCBIZXJlIC0tPlxuICAgICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJhdXRoRm9ybVwiPlxuICAgICAgICAgICAgICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIj5cblxuICAgICAgICAgICAgICAgIDxpb24taXRlbSBsaW5lcz1cImZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgIDxpb24taW5wdXQgbGFiZWxQbGFjZW1lbnQ9XCJmbG9hdGluZ1wiIGxhYmVsPVwie3snY29tbW9uLmVtYWlsX19hZGRyZXNzJyB8IHRyYW5zbGF0ZX19XCIgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIiByZXF1aXJlZD48L2lvbi1pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICAgICAgICAgICAgPGlvbi1pdGVtIGxpbmVzPVwiZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgPGlvbi1pbnB1dCBsYWJlbFBsYWNlbWVudD1cImZsb2F0aW5nXCIgbGFiZWw9XCJ7eydjb21tb24ucGFzc3dvcmQnIHwgdHJhbnNsYXRlfX1cIiB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgPCEtLVxuICAgICAgICAgICAgICAgICAgICAgIE5PVCBZRVQgV09SS0lOR1xuICAgICAgICAgICAgICAgICAgICA8aW9uLWlucHV0LXBhc3N3b3JkLXRvZ2dsZSBzbG90PVwiZW5kXCI+PC9pb24taW5wdXQtcGFzc3dvcmQtdG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICAgLS0+XG4gICAgICAgICAgICAgICAgICA8L2lvbi1pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICAgICAgICAgICAgPGlvbi1pdGVtIGxpbmVzPVwiZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgPGlvbi1pbnB1dCBsYWJlbFBsYWNlbWVudD1cImZsb2F0aW5nXCIgbGFiZWw9XCJ7eydjb21tb24uZmlyc3RfX25hbWUnIHwgdHJhbnNsYXRlfX1cIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImZpcnN0TmFtZVwiIHJlcXVpcmVkPjwvaW9uLWlucHV0PlxuICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8aW9uLWl0ZW0gbGluZXM9XCJmdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8aW9uLWlucHV0IGxhYmVsUGxhY2VtZW50PVwiZmxvYXRpbmdcIiBsYWJlbD1cInt7J2NvbW1vbi5sYXN0X19uYW1lJyB8IHRyYW5zbGF0ZX19XCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJsYXN0TmFtZVwiIHJlcXVpcmVkPjwvaW9uLWlucHV0PlxuICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICAgIDwvaW9uLWxpc3Q+XG5cbiAgICAgICAgICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cInN1Ym1pdENyZWRlbnRpYWxzKGF1dGhGb3JtKVwiIGV4cGFuZD1cImJsb2NrXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiaW9uLW1hcmdpbi10b3BcIj5cbiAgICAgICAgICAgICAgICB7eydzaWdudXAudG9fX3JlZ2lzdGVyJyB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2lvbi1jYXJkLWNvbnRlbnQ+XG4gICAgICAgIDwvaW9uLWNhcmQ+XG4gICAgICA8L2lvbi1jb2w+XG4gICAgICA8IS0tIEltYWdlIENvbHVtbiAtLT5cbiAgICAgIDxpb24tY29sIHNpemUtbWQ9XCI2XCIgc2l6ZS1sZz1cIjdcIiBzdHlsZT1cInBhZGRpbmc6IDA7XCIgY2xhc3M9XCJpb24taGlkZS1tZC1kb3duXCI+XG4gICAgICAgIDxpb24taW1nIHNyYz1cImFzc2V0cy9iZy9tb3VudGFpbi00LmpwZ1wiIGFsdD1cInt7J2NvbW1vbi5tb3VudGFpbl9iYWNrZ3JvdW5kX19hbHQnIHwgdHJhbnNsYXRlfX1cIlxuICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgb2JqZWN0LWZpdDogY292ZXI7XCI+XG4gICAgICAgIDwvaW9uLWltZz5cbiAgICAgIDwvaW9uLWNvbD5cbiAgICA8L2lvbi1yb3c+XG4gIDwvaW9uLWdyaWQ+XG5cblxuXG5cblxuICA8IS0tXG5cbiAgPGRpdiBjbGFzcz1cIm1pbi1oLXNjcmVlbiBiZy13aGl0ZSBmbGV4XCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJmbGV4LTEgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBweS0xMiBweC00IHNtOnB4LTYgbGc6ZmxleC1ub25lIGxnOnB4LTIwIHhsOnB4LTI0XCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwibXgtYXV0byB3LWZ1bGwgbWF4LXctc20gbGc6dy05NlwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwaWN0dXJlPlxuICAgICAgICAgICAgPHNvdXJjZVxuICAgICAgICAgICAgICBzcmNzZXQ9XCJhc3NldHMvbG9nb190cmFucy5wbmdcIlxuICAgICAgICAgICAgICBtZWRpYT1cIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzb3VyY2VcbiAgICAgICAgICAgICAgc3Jjc2V0PVwiYXNzZXRzL2xvZ29fdHJhbnMucG5nXCJcbiAgICAgICAgICAgICAgbWVkaWE9XCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImgtMTIgdy1hdXRvXCIgc3JjPVwiYXNzZXRzL2xvZ29fdHJhbnMucG5nXCIgYWx0PVwiTG9nb1wiIC8+XG4gICAgICAgICAgPC9waWN0dXJlPlxuXG4gICAgICAgICAgPGgyIGNsYXNzPVwibXQtNiB0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICB7e1wic2lnbnVwLnNpZ251cF9fdGl0bGVcInwgdHJhbnNsYXRlfX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMiB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgIHt7XCJjb21tb24ub3JcIiB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICByb3V0ZXJMaW5rPVwiL2xvZ2luXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb250LW1lZGl1bSB0ZXh0LW15Y2x1YmxpZ2h0IGhvdmVyOnRleHQtbXljbHViZGFya1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAge3tcInNpZ251cC5hbHJlYWR5X2hhdmVfX2Fjb3VudFwiIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTZcIj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwic3BhY2UteS02XCIgW2Zvcm1Hcm91cF09XCJhdXRoRm9ybVwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgZm9yPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt7XCJjb21tb24uZW1haWxfX2FkZHJlc3NcInwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0xXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBzaGFkb3ctc20gcGxhY2Vob2xkZXItZ3JheS00MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBzbTp0ZXh0LXNtIGRhcms6dGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteS0xXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBmb3I9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3tcImNvbW1vbi5wYXNzd29yZFwiIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0xXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHNoYWRvdy1zbSBwbGFjZWhvbGRlci1ncmF5LTQwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1teWNsdWJkYXJrIGZvY3VzOmJvcmRlci1teWNsdWJkYXJrIHNtOnRleHQtc20gZGFyazp0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBmb3I9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt7XCJjb21tb24uZmlyc3RfX25hbWVcIiB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgc2hhZG93LXNtIHBsYWNlaG9sZGVyLWdyYXktNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgc206dGV4dC1zbSBkYXJrOnRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBmb3I9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3tcImNvbW1vbi5sYXN0X19uYW1lXCIgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTFcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgc2hhZG93LXNtIHBsYWNlaG9sZGVyLWdyYXktNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgc206dGV4dC1zbSBkYXJrOnRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwic3VibWl0Q3JlZGVudGlhbHMoYXV0aEZvcm0pXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgcHktMiBweC00IGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBzaGFkb3ctc20gdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGRhcms6dGV4dC13aGl0ZSBiZy1teWNsdWJsaWdodCBkYXJrOmJnLW15Y2x1YmRhcmsgaG92ZXI6YmctbXljbHViZGFyayBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1iZy1teWNsdWJkYXJrXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7e1wic2lnbnVwLnRvX19yZWdpc3RlclwiIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImhpZGRlbiBsZzpibG9jayByZWxhdGl2ZSB3LTAgZmxleC0xXCI+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzPVwiYWJzb2x1dGUgaW5zZXQtMCBoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlclwiXG4gICAgICAgIHNyYz1cImFzc2V0cy9iZy9tb3VudGFpbi00LmpwZ1wiXG4gICAgICAgIFthbHRdPSdcImNvbW1vbi5tb3VudGFpbl9iYWNrZ3JvdW5kX19hbHQgXCIgfCB0cmFuc2xhdGUnXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj4tLT5cbjwvaW9uLWNvbnRlbnQ+IiwgImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFNpZ251cFBhZ2UgfSBmcm9tICcuL3NpZ251cC5wYWdlJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IFNpZ251cFBhZ2VcbiAgfVxuXVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBQYWdlUm91dGluZ01vZHVsZSB7fVxuIiwgImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBTaWdudXBQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vc2lnbnVwLXJvdXRpbmcubW9kdWxlJztcblxuaW1wb3J0IHsgU2lnbnVwUGFnZSB9IGZyb20gJy4vc2lnbnVwLnBhZ2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBJb25pY01vZHVsZSxcbiAgICBTaWdudXBQYWdlUm91dGluZ01vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU2lnbnVwUGFnZV1cbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwUGFnZU1vZHVsZSB7fVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCTSxJQUFPLGNBQVAsTUFBTyxZQUFVO0VBSXJCLFlBQ21CLGFBQ0EsV0FDQSxhQUVWLFVBQ1UsYUFDQSxRQUNULFdBQTJCO0FBUGxCLFNBQUEsY0FBQTtBQUNBLFNBQUEsWUFBQTtBQUNBLFNBQUEsY0FBQTtBQUVWLFNBQUEsV0FBQTtBQUNVLFNBQUEsY0FBQTtBQUNBLFNBQUEsU0FBQTtBQUNULFNBQUEsWUFBQTtBQUVSLFNBQUssV0FBVyxLQUFLLFlBQVksTUFBTTtNQUNyQyxPQUFPLENBQUMsSUFBSSxXQUFXLFFBQVEsQ0FBQyxXQUFXLFVBQVUsV0FBVyxLQUFLLENBQUMsQ0FBQztNQUN2RSxVQUFVLENBQUMsSUFBSSxXQUFXLFVBQVUsQ0FBQyxDQUFDO01BQ3RDLFVBQVUsQ0FBQyxJQUFJLFdBQVcsUUFBUTtNQUNsQyxXQUFXLENBQUMsSUFBSSxXQUFXLFFBQVE7S0FDcEM7RUFDSDtFQUVBLFdBQVE7QUFDTixTQUFLLFNBQVMsT0FBTyxPQUFPLE1BQU07QUFDbEMsU0FBSyxPQUFPO01BQ1YsT0FBTztNQUNQLFVBQVU7O0VBRWQ7RUFFTSxrQkFBa0IsVUFBMEI7O0FBQ2hELFVBQUksQ0FBQyxTQUFTLE9BQU87QUFDbkIsYUFBSyxVQUNGLE9BQU87VUFDTixTQUFTLE1BQU0sY0FDYixLQUFLLFVBQVUsSUFBSSw0QkFBNEIsQ0FBQztVQUVsRCxTQUFT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
