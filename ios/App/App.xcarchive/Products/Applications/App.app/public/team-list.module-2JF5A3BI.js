import {
  TeamPage
} from "./chunk-MPT66UUM.js";
import "./chunk-IHJSXIQX.js";
import "./chunk-SMELFGID.js";
import "./chunk-NVBRLDNC.js";
import "./chunk-MS3JJYL5.js";
import "./chunk-YLSEXBCU.js";
import "./chunk-3ABWPIXG.js";
import "./chunk-REWK7CTI.js";
import "./chunk-7XMQNZXL.js";
import {
  FirebaseService
} from "./chunk-RMTOAZGR.js";
import {
  AuthService
} from "./chunk-AMO7VPPH.js";
import {
  AlertController,
  AsyncPipe,
  CommonModule,
  FormsModule,
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonList,
  IonMenuButton,
  IonRouterOutlet,
  IonRow,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
  IonicModule,
  ModalController,
  NgForOf,
  NgIf,
  RouterModule,
  ToastController,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  catchError,
  first,
  lastValueFrom,
  of,
  switchMap,
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
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PZUQX53K.js";
import "./chunk-BK6XZVAH.js";
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

// src/app/pages/team-list/team-list.page.ts
function TeamListPage_ion_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 9);
    \u0275\u0275listener("click", function TeamListPage_ion_button_8_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "common.edit"));
  }
}
function TeamListPage_ion_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 9);
    \u0275\u0275listener("click", function TeamListPage_ion_button_9_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "common.done"));
  }
}
function TeamListPage_ion_col_19_ion_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 13);
    \u0275\u0275listener("click", function TeamListPage_ion_col_19_ion_button_11_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const team_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.leaveTeam(team_r5));
    });
    \u0275\u0275element(1, "ion-icon", 14);
    \u0275\u0275text(2, " Team verlassen");
    \u0275\u0275elementEnd();
  }
}
function TeamListPage_ion_col_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-col", 10)(1, "ion-card")(2, "img", 11);
    \u0275\u0275listener("click", function TeamListPage_ion_col_19_Template_img_click_2_listener() {
      const team_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal(team_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-card-header", 9);
    \u0275\u0275listener("click", function TeamListPage_ion_col_19_Template_ion_card_header_click_3_listener() {
      const team_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal(team_r5));
    });
    \u0275\u0275elementStart(4, "ion-card-title");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-card-subtitle");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-card-content", 9);
    \u0275\u0275listener("click", function TeamListPage_ion_col_19_Template_ion_card_content_click_8_listener() {
      const team_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal(team_r5));
    });
    \u0275\u0275elementStart(9, "ion-badge");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, TeamListPage_ion_col_19_ion_button_11_Template, 3, 0, "ion-button", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", team_r5 == null ? null : team_r5.logo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", team_r5 == null ? null : team_r5.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", team_r5 == null ? null : team_r5.liga, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", team_r5 == null ? null : team_r5.type, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.allowEdit);
  }
}
function TeamListPage_ng_template_21_ion_col_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-col", 10)(1, "ion-card")(2, "ion-card-header")(3, "ion-card-subtitle");
    \u0275\u0275element(4, "ion-skeleton-text", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-card-title");
    \u0275\u0275element(6, "ion-skeleton-text", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-card-content");
    \u0275\u0275element(8, "ion-skeleton-text", 16)(9, "ion-skeleton-text", 15)(10, "ion-skeleton-text", 16)(11, "ion-skeleton-text", 15)(12, "ion-skeleton-text", 16);
    \u0275\u0275elementEnd()()();
  }
}
function TeamListPage_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list")(1, "ion-grid")(2, "ion-row");
    \u0275\u0275template(3, TeamListPage_ng_template_21_ion_col_3_Template, 13, 0, "ion-col", 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.skeleton);
  }
}
var _TeamListPage = class _TeamListPage {
  constructor(fbService, authService, routerOutlet, toastController, alertController, translate, modalCtrl) {
    this.fbService = fbService;
    this.authService = authService;
    this.routerOutlet = routerOutlet;
    this.toastController = toastController;
    this.alertController = alertController;
    this.translate = translate;
    this.modalCtrl = modalCtrl;
    this.skeleton = new Array(12);
    this.allowEdit = false;
  }
  ngOnInit() {
    this.teamList$ = this.fbService.getTeamList();
  }
  ngOnDestroy() {
  }
  leaveTeam(team) {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        message: yield lastValueFrom(this.translate.get("team-list.leave_team__confirm")),
        buttons: [
          {
            role: "destructive",
            text: yield lastValueFrom(this.translate.get("common.no")),
            handler: () => {
              console.log("nein");
              this.presentCancelToast();
            }
          },
          {
            text: yield lastValueFrom(this.translate.get("common.yes")),
            handler: () => __async(this, null, function* () {
              this.authService.getUser$().pipe(
                first(),
                // Ensures that only the first value is taken and the observable completes.
                switchMap((userProfile) => {
                  if (userProfile) {
                    return this.fbService.leaveTeam(team.id, userProfile.uid);
                  } else {
                    return of(null);
                  }
                }),
                catchError((err) => {
                  console.error("Error leaving team:", err);
                  return of(null);
                })
              ).subscribe({
                next: () => {
                  console.log("Successfully left the team.");
                },
                error: (err) => console.error("An error occurred:", err)
              });
            })
          }
        ]
      });
      alert.present();
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
  edit() {
    if (this.allowEdit) {
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }
  openModal(team) {
    return __async(this, null, function* () {
      const modal = yield this.modalCtrl.create({
        component: TeamPage,
        presentingElement: this.routerOutlet.nativeEl,
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          data: team
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
};
_TeamListPage.\u0275fac = function TeamListPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TeamListPage)(\u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(IonRouterOutlet), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ModalController));
};
_TeamListPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamListPage, selectors: [["app-team-list"]], standalone: false, decls: 23, vars: 13, consts: [["loading", ""], [3, "translucent"], ["slot", "start"], ["slot", "primary"], [3, "click", 4, "ngIf"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], ["size-lg", "4", "size-md", "6", "size-sm", "6", "size", "12", 4, "ngFor", "ngForOf"], [3, "click"], ["size-lg", "4", "size-md", "6", "size-sm", "6", "size", "12"], [3, "click", "src"], ["class", "ion-margin", "fill", "outline", "expand", "block", "color", "warning", 3, "click", 4, "ngIf"], ["fill", "outline", "expand", "block", "color", "warning", 1, "ion-margin", 3, "click"], ["slot", "start", "name", "exit-outline"], ["animated", "", 2, "width", "60%"], ["animated", "", 2, "width", "80%"]], template: function TeamListPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 1)(1, "ion-toolbar")(2, "ion-buttons", 2);
    \u0275\u0275element(3, "ion-menu-button");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-title");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-buttons", 3);
    \u0275\u0275template(8, TeamListPage_ion_button_8_Template, 3, 3, "ion-button", 4)(9, TeamListPage_ion_button_9_Template, 3, 3, "ion-button", 4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "ion-content", 5)(11, "ion-header", 6)(12, "ion-toolbar")(13, "ion-title", 7);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "ion-list")(17, "ion-grid")(18, "ion-row");
    \u0275\u0275template(19, TeamListPage_ion_col_19_Template, 12, 5, "ion-col", 8);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(21, TeamListPage_ng_template_21_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "team-list.my__teams"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx.allowEdit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.allowEdit);
    \u0275\u0275advance();
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 9, "team-list.my__teams"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(20, 11, ctx.teamList$));
  }
}, dependencies: [NgForOf, NgIf, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonList, IonMenuButton, IonRow, IonSkeletonText, IonTitle, IonToolbar, AsyncPipe, TranslatePipe], encapsulation: 2 });
var TeamListPage = _TeamListPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamListPage, { className: "TeamListPage", filePath: "src/app/pages/team-list/team-list.page.ts", lineNumber: 24 });
})();

// src/app/pages/team-list/team-list-routing.module.ts
var routes = [
  {
    path: "",
    component: TeamListPage
  }
];
var _TeamListPageRoutingModule = class _TeamListPageRoutingModule {
};
_TeamListPageRoutingModule.\u0275fac = function TeamListPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TeamListPageRoutingModule)();
};
_TeamListPageRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TeamListPageRoutingModule });
_TeamListPageRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var TeamListPageRoutingModule = _TeamListPageRoutingModule;

// src/app/pages/team-list/team-list.module.ts
var _TeamListPageModule = class _TeamListPageModule {
};
_TeamListPageModule.\u0275fac = function TeamListPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TeamListPageModule)();
};
_TeamListPageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TeamListPageModule });
_TeamListPageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, FormsModule, IonicModule, TeamListPageRoutingModule, TranslateModule] });
var TeamListPageModule = _TeamListPageModule;
export {
  TeamListPageModule
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy90ZWFtLWxpc3QvdGVhbS1saXN0LnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy90ZWFtLWxpc3QvdGVhbS1saXN0LnBhZ2UuaHRtbCIsICJzcmMvYXBwL3BhZ2VzL3RlYW0tbGlzdC90ZWFtLWxpc3Qtcm91dGluZy5tb2R1bGUudHMiLCAic3JjL2FwcC9wYWdlcy90ZWFtLWxpc3QvdGVhbS1saXN0Lm1vZHVsZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRlYW0gfSBmcm9tIFwic3JjL2FwcC9tb2RlbHMvdGVhbVwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIGNhdGNoRXJyb3IsIGZpcnN0LCBsYXN0VmFsdWVGcm9tLCBvZiwgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9hdXRoXCI7XG5pbXBvcnQge1xuICBBbGVydENvbnRyb2xsZXIsXG4gIElvblJvdXRlck91dGxldCxcbiAgTW9kYWxDb250cm9sbGVyLFxuICBUb2FzdENvbnRyb2xsZXIsXG59IGZyb20gXCJAaW9uaWMvYW5ndWxhclwiO1xuaW1wb3J0IHsgVGVhbVBhZ2UgfSBmcm9tIFwiLi4vdGVhbS90ZWFtLWRldGFpbC90ZWFtLnBhZ2VcIjtcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwic3JjL2FwcC9tb2RlbHMvdXNlclwiO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvZmlyZWJhc2UvdXNlci1wcm9maWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtdGVhbS1saXN0XCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90ZWFtLWxpc3QucGFnZS5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3RlYW0tbGlzdC5wYWdlLnNjc3NcIl0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgVGVhbUxpc3RQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGVhbUxpc3QkOiBPYnNlcnZhYmxlPFRlYW1bXT47XG4gIGF2YWlsYWJsZVRlYW1MaXN0JDogT2JzZXJ2YWJsZTxUZWFtW10+O1xuXG4gIHNrZWxldG9uID0gbmV3IEFycmF5KDEyKTtcblxuICBhbGxvd0VkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZiU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyT3V0bGV0OiBJb25Sb3V0ZXJPdXRsZXQsXG4gICAgcHJpdmF0ZSByZWFkb25seSB0b2FzdENvbnRyb2xsZXI6IFRvYXN0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFsZXJ0Q29udHJvbGxlcjogQWxlcnRDb250cm9sbGVyLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsXG5cbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRlYW1MaXN0JCA9IHRoaXMuZmJTZXJ2aWNlLmdldFRlYW1MaXN0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHsgfVxuXG4gIGFzeW5jIGxlYXZlVGVhbSh0ZWFtKSB7XG5cbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoXCJ0ZWFtLWxpc3QubGVhdmVfdGVhbV9fY29uZmlybVwiKVxuICAgICAgKSxcbiAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHJvbGU6IFwiZGVzdHJ1Y3RpdmVcIixcbiAgICAgICAgICB0ZXh0OiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5ub1wiKSksXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZWluXCIpO1xuICAgICAgICAgICAgdGhpcy5wcmVzZW50Q2FuY2VsVG9hc3QoKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24ueWVzXCIpKSxcbiAgICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXIkKCkucGlwZShcbiAgICAgICAgICAgICAgZmlyc3QoKSwgLy8gRW5zdXJlcyB0aGF0IG9ubHkgdGhlIGZpcnN0IHZhbHVlIGlzIHRha2VuIGFuZCB0aGUgb2JzZXJ2YWJsZSBjb21wbGV0ZXMuXG4gICAgICAgICAgICAgIHN3aXRjaE1hcCh1c2VyUHJvZmlsZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJQcm9maWxlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mYlNlcnZpY2UubGVhdmVUZWFtKHRlYW0uaWQsIHVzZXJQcm9maWxlLnVpZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBvZihudWxsKTsgLy8gSGFuZGxlIHRoZSBjYXNlIHdoZXJlIHVzZXJQcm9maWxlIGlzIG5vdCBhdmFpbGFibGUuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxlYXZpbmcgdGVhbTonLCBlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvZihudWxsKTsgLy8gSGFuZGxlIGVycm9ycyBncmFjZWZ1bGx5LlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSBsZWZ0IHRoZSB0ZWFtLicpO1xuICAgICAgICAgICAgICAgIC8vIE9wdGlvbmFsOiBBZGQgYWRkaXRpb25hbCBsb2dpYyBhZnRlciBsZWF2aW5nIHRoZSB0ZWFtIHN1Y2Nlc3NmdWxseS5cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXJyb3I6IGVyciA9PiBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZDonLCBlcnIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICBdLFxuICAgIH0pO1xuICAgIGFsZXJ0LnByZXNlbnQoKTtcblxuICB9XG4gIGFzeW5jIHByZXNlbnRDYW5jZWxUb2FzdCgpIHtcbiAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoXCJvbmJvYXJkaW5nLndhcm5pbmdfX2FjdGlvbl9jYW5jZWxlZFwiKVxuICAgICAgKSxcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgICBjb2xvcjogXCJkYW5nZXJcIixcbiAgICB9KTtcblxuICAgIGF3YWl0IHRvYXN0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGVkaXQoKSB7XG5cbiAgICBpZiAodGhpcy5hbGxvd0VkaXQpIHtcbiAgICAgIHRoaXMuYWxsb3dFZGl0ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWxsb3dFZGl0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgb3Blbk1vZGFsKHRlYW06IFRlYW0pIHtcbiAgICAvLyBjb25zdCBwcmVzZW50aW5nRWxlbWVudCA9IGF3YWl0IHRoaXMubW9kYWxDdHJsLmdldFRvcCgpO1xuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbEN0cmwuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogVGVhbVBhZ2UsXG4gICAgICBwcmVzZW50aW5nRWxlbWVudDogdGhpcy5yb3V0ZXJPdXRsZXQubmF0aXZlRWwsXG4gICAgICBjYW5EaXNtaXNzOiB0cnVlLFxuICAgICAgc2hvd0JhY2tkcm9wOiB0cnVlLFxuICAgICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgZGF0YTogdGVhbSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgbW9kYWwucHJlc2VudCgpO1xuXG4gICAgY29uc3QgeyBkYXRhLCByb2xlIH0gPSBhd2FpdCBtb2RhbC5vbldpbGxEaXNtaXNzKCk7XG5cbiAgICBpZiAocm9sZSA9PT0gXCJjb25maXJtXCIpIHtcbiAgICB9XG4gIH1cblxufVxuIiwgIjxpb24taGVhZGVyIFt0cmFuc2x1Y2VudF09XCJ0cnVlXCI+XG4gIDxpb24tdG9vbGJhcj5cbiAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInN0YXJ0XCI+XG4gICAgICA8aW9uLW1lbnUtYnV0dG9uPjwvaW9uLW1lbnUtYnV0dG9uPlxuICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgPGlvbi10aXRsZT57e1widGVhbS1saXN0Lm15X190ZWFtc1wiIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInByaW1hcnlcIj5cblxuICAgICAgPGlvbi1idXR0b24gKm5nSWY9XCIhYWxsb3dFZGl0XCIgKGNsaWNrKT1cImVkaXQoKVwiPnt7XCJjb21tb24uZWRpdFwiIHwgdHJhbnNsYXRlfX08L2lvbi1idXR0b24+XG4gICAgICA8aW9uLWJ1dHRvbiAqbmdJZj1cImFsbG93RWRpdFwiIChjbGljayk9XCJlZGl0KClcIj57e1wiY29tbW9uLmRvbmVcIiB8IHRyYW5zbGF0ZX19PC9pb24tYnV0dG9uPlxuXG4gICAgPC9pb24tYnV0dG9ucz5cbiAgPC9pb24tdG9vbGJhcj5cbjwvaW9uLWhlYWRlcj5cblxuPGlvbi1jb250ZW50IFtmdWxsc2NyZWVuXT1cInRydWVcIj5cbiAgPGlvbi1oZWFkZXIgY29sbGFwc2U9XCJjb25kZW5zZVwiPlxuICAgIDxpb24tdG9vbGJhcj5cbiAgICAgIDxpb24tdGl0bGUgc2l6ZT1cImxhcmdlXCI+e3tcInRlYW0tbGlzdC5teV9fdGVhbXNcIiB8IHRyYW5zbGF0ZX19PC9pb24tdGl0bGU+XG4gICAgICBcbiAgICA8L2lvbi10b29sYmFyPlxuXG4gIDwvaW9uLWhlYWRlcj5cblxuICA8aW9uLWxpc3Q+XG4gICAgPGlvbi1ncmlkPlxuICAgICAgPGlvbi1yb3c+XG4gICAgICAgIDxpb24tY29sXG4gICAgICAgICAgc2l6ZS1sZz1cIjRcIlxuICAgICAgICAgIHNpemUtbWQ9XCI2XCJcbiAgICAgICAgICBzaXplLXNtPVwiNlwiXG4gICAgICAgICAgc2l6ZT1cIjEyXCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgdGVhbSBvZiB0ZWFtTGlzdCQgfCBhc3luY1wiXG4gICAgICAgID5cbiAgICAgICAgICA8aW9uLWNhcmQ+XG4gICAgICAgICAgICA8aW1nIChjbGljayk9XCJvcGVuTW9kYWwodGVhbSlcIiBzcmM9XCJ7e3RlYW0/LmxvZ299fVwiIC8+XG4gICAgICAgICAgICA8aW9uLWNhcmQtaGVhZGVyIChjbGljayk9XCJvcGVuTW9kYWwodGVhbSlcIj5cbiAgICAgICAgICAgICAgPGlvbi1jYXJkLXRpdGxlPiB7e3RlYW0/Lm5hbWV9fSA8L2lvbi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICA8aW9uLWNhcmQtc3VidGl0bGU+IHt7dGVhbT8ubGlnYX19IDwvaW9uLWNhcmQtc3VidGl0bGU+XG4gICAgICAgICAgICA8L2lvbi1jYXJkLWhlYWRlcj5cblxuICAgICAgICAgICAgPGlvbi1jYXJkLWNvbnRlbnQgKGNsaWNrKT1cIm9wZW5Nb2RhbCh0ZWFtKVwiPlxuICAgICAgICAgICAgICA8aW9uLWJhZGdlPiB7e3RlYW0/LnR5cGV9fSA8L2lvbi1iYWRnZT5cbiAgICAgICAgICAgIDwvaW9uLWNhcmQtY29udGVudD5cbiAgICAgICAgICAgIDxpb24tYnV0dG9uIGNsYXNzPVwiaW9uLW1hcmdpblwiIGZpbGw9XCJvdXRsaW5lXCIgZXhwYW5kPVwiYmxvY2tcIiBjb2xvcj1cIndhcm5pbmdcIiAgICpuZ0lmPVwiYWxsb3dFZGl0XCIgIChjbGljayk9XCJsZWF2ZVRlYW0odGVhbSlcIiA+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwiZXhpdC1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgVGVhbSB2ZXJsYXNzZW48L2lvbi1idXR0b24+XG4gICAgICAgICAgPC9pb24tY2FyZD5cbiAgICAgICAgPC9pb24tY29sPlxuICAgICAgPC9pb24tcm93PlxuICAgIDwvaW9uLWdyaWQ+XG4gIDwvaW9uLWxpc3Q+XG5cbiAgPCEtLSBmYWIgcGxhY2VkIHRvIHRoZSBib3R0b20gZW5kXG4gIDxpb24tZmFiIHZlcnRpY2FsPVwiYm90dG9tXCIgaG9yaXpvbnRhbD1cImVuZFwiIHNsb3Q9XCJmaXhlZFwiPlxuICAgIDxpb24tZmFiLWJ1dHRvbiAoY2xpY2spPVwiam9pblRlYW1BbGVydCgpXCI+XG4gICAgICA8aW9uLWljb24gbmFtZT1cImFkZC1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICA8L2lvbi1mYWItYnV0dG9uPlxuICA8L2lvbi1mYWI+IC0tPlxuPC9pb24tY29udGVudD5cblxuPG5nLXRlbXBsYXRlICNsb2FkaW5nPlxuICA8aW9uLWxpc3Q+XG4gICAgPGlvbi1ncmlkPlxuICAgICAgPGlvbi1yb3c+XG4gICAgICAgIDxpb24tY29sXG4gICAgICAgICAgc2l6ZS1sZz1cIjRcIlxuICAgICAgICAgIHNpemUtbWQ9XCI2XCJcbiAgICAgICAgICBzaXplLXNtPVwiNlwiXG4gICAgICAgICAgc2l6ZT1cIjEyXCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBza2VsZXRvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW9uLWNhcmQ+XG4gICAgICAgICAgICA8aW9uLWNhcmQtaGVhZGVyPlxuICAgICAgICAgICAgICA8aW9uLWNhcmQtc3VidGl0bGU+XG4gICAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICAgICAgICBhbmltYXRlZFxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogNjAlXCJcbiAgICAgICAgICAgICAgICA+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPC9pb24tY2FyZC1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgPGlvbi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZWRcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDgwJVwiXG4gICAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDwvaW9uLWNhcmQtdGl0bGU+XG4gICAgICAgICAgICA8L2lvbi1jYXJkLWhlYWRlcj5cblxuICAgICAgICAgICAgPGlvbi1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgICAgIGFuaW1hdGVkXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogODAlXCJcbiAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgICAgIGFuaW1hdGVkXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogNjAlXCJcbiAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgICAgIGFuaW1hdGVkXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogODAlXCJcbiAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgICAgIGFuaW1hdGVkXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogNjAlXCJcbiAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgICAgIGFuaW1hdGVkXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogODAlXCJcbiAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICA8L2lvbi1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgPC9pb24tY2FyZD5cbiAgICAgICAgPC9pb24tY29sPlxuICAgICAgPC9pb24tcm93PlxuICAgIDwvaW9uLWdyaWQ+XG4gIDwvaW9uLWxpc3Q+XG48L25nLXRlbXBsYXRlPlxuIiwgImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFRlYW1MaXN0UGFnZSB9IGZyb20gJy4vdGVhbS1saXN0LnBhZ2UnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogVGVhbUxpc3RQYWdlXG4gIH1cbl1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgVGVhbUxpc3RQYWdlUm91dGluZ01vZHVsZSB7fVxuIiwgImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBUZWFtTGlzdFBhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi90ZWFtLWxpc3Qtcm91dGluZy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBUZWFtTGlzdFBhZ2UgfSBmcm9tICcuL3RlYW0tbGlzdC5wYWdlJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgSW9uaWNNb2R1bGUsIFRlYW1MaXN0UGFnZVJvdXRpbmdNb2R1bGUsIFRyYW5zbGF0ZU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1RlYW1MaXN0UGFnZV1cbn0pXG5leHBvcnQgY2xhc3MgVGVhbUxpc3RQYWdlTW9kdWxlIHt9XG4i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
