import {
  AuthGuard,
  emailVerified,
  getAnalytics,
  logEvent
} from "./chunk-EPUNNSVT.js";
import {
  FirebaseService
} from "./chunk-RMTOAZGR.js";
import "./chunk-AMO7VPPH.js";
import {
  AnimationController,
  AsyncPipe,
  CommonModule,
  FormsModule,
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonicModule,
  MenuController,
  NavController,
  NgIf,
  RouterModule,
  TranslateModule,
  TranslatePipe,
  map,
  pipe,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
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

// src/app/pages/tabs/tabs.page.ts
var _c0 = ["tabs"];
function TabsPage_ng_container_13_ion_tab_button_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-tab-button", 11);
    \u0275\u0275element(1, "ion-icon", 12);
    \u0275\u0275elementStart(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "common.championship"));
  }
}
function TabsPage_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TabsPage_ng_container_13_ion_tab_button_1_Template, 5, 3, "ion-tab-button", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubList_r2 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.enableChampionship(clubList_r2));
  }
}
function TabsPage_ng_container_20_ion_tab_button_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-tab-button", 14);
    \u0275\u0275element(1, "ion-icon", 15);
    \u0275\u0275elementStart(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "common.helper"));
  }
}
function TabsPage_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TabsPage_ng_container_20_ion_tab_button_1_Template, 5, 3, "ion-tab-button", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubList_r4 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.enableHelferEvents(clubList_r4));
  }
}
function TabsPage_ng_container_22_ion_tab_button_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-tab-button", 17);
    \u0275\u0275element(1, "ion-icon", 18);
    \u0275\u0275elementStart(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "common.profile"));
  }
}
function TabsPage_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TabsPage_ng_container_22_ion_tab_button_1_Template, 5, 3, "ion-tab-button", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubList_r5 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.enableHelferEvents(clubList_r5) || !ctx_r2.enableChampionship(clubList_r5));
  }
}
var _TabsPage = class _TabsPage {
  constructor(menuCtrl, fbService, navCtrl, animationCtrl) {
    this.menuCtrl = menuCtrl;
    this.fbService = fbService;
    this.navCtrl = navCtrl;
    this.animationCtrl = animationCtrl;
    this.menuCtrl.enable(true, "menu");
  }
  ngOnInit() {
    this.clubList$ = this.fbService.getClubList();
    this.menuCtrl.enable(true, "menu");
  }
  animation() {
    const DURATION = 500;
    const animation = this.animationCtrl.create().addElement(document.querySelector("ion-router-outlet")).duration(DURATION).easing("ease-in-out").fromTo("opacity", "0", "1");
    animation.play();
  }
  enableHelferEvents(clubList) {
    return clubList && clubList.some((club) => club.hasFeatureHelferEvent == true);
  }
  enableChampionship(clubList) {
    return clubList && clubList.some((club) => club.hasFeatureChampionship == true);
  }
  onTabsWillChange(event) {
    return __async(this, null, function* () {
      console.log("event", event);
      const analytics = getAnalytics();
      logEvent(analytics, "tabs_will_change_" + event.tab);
      this.animation();
    });
  }
};
_TabsPage.\u0275fac = function TabsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabsPage)(\u0275\u0275directiveInject(MenuController), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(AnimationController));
};
_TabsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TabsPage, selectors: [["app-tabs"]], viewQuery: function TabsPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tabs = _t.first);
  }
}, standalone: false, decls: 24, vars: 18, consts: [["myTabs", ""], [3, "ionTabsWillChange"], ["slot", "bottom"], ["tab", "news"], ["name", "newspaper-outline"], ["tab", "training"], ["name", "barbell-outline"], [4, "ngIf"], ["tab", "events"], ["name", "calendar-outline"], ["tab", "championship", 4, "ngIf"], ["tab", "championship"], ["name", "trophy-outline"], ["tab", "helfer", 4, "ngIf"], ["tab", "helfer"], ["name", "help-buoy-outline"], ["tab", "profile", 4, "ngIf"], ["tab", "profile"], ["name", "person-circle-outline"]], template: function TabsPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-tabs", 1, 0);
    \u0275\u0275listener("ionTabsWillChange", function TabsPage_Template_ion_tabs_ionTabsWillChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onTabsWillChange($event));
    });
    \u0275\u0275elementStart(2, "ion-tab-bar", 2)(3, "ion-tab-button", 3);
    \u0275\u0275element(4, "ion-icon", 4);
    \u0275\u0275elementStart(5, "ion-label");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-tab-button", 5);
    \u0275\u0275element(9, "ion-icon", 6);
    \u0275\u0275elementStart(10, "ion-label");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, TabsPage_ng_container_13_Template, 2, 1, "ng-container", 7);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementStart(15, "ion-tab-button", 8);
    \u0275\u0275element(16, "ion-icon", 9);
    \u0275\u0275elementStart(17, "ion-label");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, TabsPage_ng_container_20_Template, 2, 1, "ng-container", 7);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275template(22, TabsPage_ng_container_22_Template, 2, 1, "ng-container", 7);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "common.news"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, "common.training"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(14, 10, ctx.clubList$));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 12, "common.events"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(21, 14, ctx.clubList$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(23, 16, ctx.clubList$));
  }
}, dependencies: [NgIf, IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs, AsyncPipe, TranslatePipe], encapsulation: 2 });
var TabsPage = _TabsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TabsPage, { className: "TabsPage", filePath: "src/app/pages/tabs/tabs.page.ts", lineNumber: 14 });
})();

// src/app/pages/tabs/tabs-routing.module.ts
var redirectUnverifiedTo = (redirect) => pipe(emailVerified, map((emailVerified2) => emailVerified2 || redirect));
var redirectUnauthorizedToLogin = () => redirectUnverifiedTo(["/onboarding-email"]);
var routes = [
  {
    path: "t",
    component: TabsPage,
    children: [
      {
        path: "news",
        loadChildren: () => import("./news.module-BZP655GE.js").then((m) => m.NewsPageModule),
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
      },
      {
        path: "training",
        loadChildren: () => import("./trainings.module-KP362J7H.js").then((m) => m.TrainingsPageModule),
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
      },
      {
        path: "championship",
        loadChildren: () => import("./championship.module-EQFR7BCP.js").then((m) => m.ChampionshipPageModule),
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
      },
      {
        path: "events",
        loadChildren: () => import("./events.module-E325LFYW.js").then((m) => m.EventsPageModule),
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
      },
      {
        path: "helfer",
        loadChildren: () => import("./helfer.module-HQO2J7N3.js").then((m) => m.HelferPageModule),
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
      },
      {
        path: "profile",
        loadChildren: () => import("./profile.module-AJNOUL4I.js").then((m) => m.ProfilePageModule),
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
      },
      {
        path: "",
        redirectTo: "/t/news",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/t/news",
    pathMatch: "full"
  }
];
var _TabsPageRoutingModule = class _TabsPageRoutingModule {
};
_TabsPageRoutingModule.\u0275fac = function TabsPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabsPageRoutingModule)();
};
_TabsPageRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TabsPageRoutingModule });
_TabsPageRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var TabsPageRoutingModule = _TabsPageRoutingModule;

// src/app/pages/tabs/tabs.module.ts
var _TabsPageModule = class _TabsPageModule {
};
_TabsPageModule.\u0275fac = function TabsPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabsPageModule)();
};
_TabsPageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TabsPageModule });
_TabsPageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  IonicModule.forRoot({}),
  TabsPageRoutingModule,
  TranslateModule
] });
var TabsPageModule = _TabsPageModule;
export {
  TabsPageModule
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy90YWJzL3RhYnMucGFnZS50cyIsICJzcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5wYWdlLmh0bWwiLCAic3JjL2FwcC9wYWdlcy90YWJzL3RhYnMtcm91dGluZy5tb2R1bGUudHMiLCAic3JjL2FwcC9wYWdlcy90YWJzL3RhYnMubW9kdWxlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1lbnVDb250cm9sbGVyLCBJb25UYWJzLCBOYXZDb250cm9sbGVyLCBBbmltYXRpb25Db250cm9sbGVyIH0gZnJvbSBcIkBpb25pYy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IENsdWIgfSBmcm9tIFwic3JjL2FwcC9tb2RlbHMvY2x1YlwiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgZ2V0QW5hbHl0aWNzLCBsb2dFdmVudCB9IGZyb20gXCJmaXJlYmFzZS9hbmFseXRpY3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLXRhYnNcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3RhYnMucGFnZS5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3RhYnMucGFnZS5zY3NzXCJdLFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgndGFicycsIHsgc3RhdGljOiB0cnVlIH0pIHRhYnMhOiBJb25UYWJzO1xuICBjbHViTGlzdCQ6IE9ic2VydmFibGU8Q2x1YltdPjtcbiAgcHJldmlvdXNUYWI6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbWVudUN0cmw6IE1lbnVDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmJTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBuYXZDdHJsOiBOYXZDb250cm9sbGVyLFxuICAgIHByaXZhdGUgYW5pbWF0aW9uQ3RybDogQW5pbWF0aW9uQ29udHJvbGxlclxuICApIHtcbiAgICB0aGlzLm1lbnVDdHJsLmVuYWJsZSh0cnVlLCBcIm1lbnVcIik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNsdWJMaXN0JCA9IHRoaXMuZmJTZXJ2aWNlLmdldENsdWJMaXN0KCk7XG5cbiAgICB0aGlzLm1lbnVDdHJsLmVuYWJsZSh0cnVlLCBcIm1lbnVcIik7XG5cbiAgfVxuXG4gIGFuaW1hdGlvbigpIHtcbiAgICBjb25zdCBEVVJBVElPTiA9IDUwMDsgXG4gICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb25DdHJsLmNyZWF0ZSgpXG4gICAgLmFkZEVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlci1vdXRsZXQnKSlcbiAgICAuZHVyYXRpb24oRFVSQVRJT04pXG4gICAgLy8gLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuMzYsIDAuNjYsIDAuMDQsIDEpJykgLy8gU21vb3RoIGFuZCBzcHJpbmctbGlrZSBlZmZlY3RcbiAgICAvLy5mcm9tVG8oJ3RyYW5zZm9ybScsICdzY2FsZSgwLjkpIHRyYW5zbGF0ZVgoMTAwJSknLCAnc2NhbGUoMSkgdHJhbnNsYXRlWCgwJSknKSAvLyBTbGlkZSBpbiB3aXRoIGEgc2xpZ2h0IHpvb21cbiAgICAvLy5lYXNpbmcoJ2N1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNywgMS41NSknKVxuICAgIC5lYXNpbmcoJ2Vhc2UtaW4tb3V0JylcbiAgICAuZnJvbVRvKCdvcGFjaXR5JywgJzAnLCAnMScpIC8vIEZhZGUgaW5cbiAgICAvLyAuZnJvbVRvKCdib3gtc2hhZG93JywgJzBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDApJywgJzBweCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMyknKTtcbiAgICBcbiAgICBhbmltYXRpb24ucGxheSgpO1xuICAgIC8vIE5hdmlnYXRlIHRvIHRoZSBhY2NvdW50IHRhYiBhZnRlciB0aGUgYW5pbWF0aW9uXG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdGFicy9hY2NvdW50J10pO1xuICAgIC8vIHRoaXMubmF2Q3RybC5uYXZpZ2F0ZUZvcndhcmQoJy90L25ld3MnKTsgLy8gVXNlIG5hdmlnYXRlRm9yd2FyZCBmb3IgdGFiIHRyYW5zaXRpb25zXG4gIH1cblxuICBlbmFibGVIZWxmZXJFdmVudHMoY2x1Ykxpc3QpIHtcbiAgICByZXR1cm4gY2x1Ykxpc3QgJiYgY2x1Ykxpc3Quc29tZShjbHViID0+IGNsdWIuaGFzRmVhdHVyZUhlbGZlckV2ZW50ID09IHRydWUpO1xuICB9XG4gIGVuYWJsZUNoYW1waW9uc2hpcChjbHViTGlzdCkge1xuICAgIHJldHVybiBjbHViTGlzdCAmJiBjbHViTGlzdC5zb21lKGNsdWIgPT4gY2x1Yi5oYXNGZWF0dXJlQ2hhbXBpb25zaGlwID09IHRydWUpO1xuICB9XG4gIGFzeW5jIG9uVGFic1dpbGxDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcImV2ZW50XCIsIGV2ZW50KTtcbiAgICBjb25zdCBhbmFseXRpY3MgPSBnZXRBbmFseXRpY3MoKTtcbiAgICBsb2dFdmVudChhbmFseXRpY3MsICd0YWJzX3dpbGxfY2hhbmdlXycgKyBldmVudC50YWIpO1xuICAgIHRoaXMuYW5pbWF0aW9uKClcbiAgfVxufVxuIiwgIjxpb24tdGFicyAjbXlUYWJzIChpb25UYWJzV2lsbENoYW5nZSk9XCJvblRhYnNXaWxsQ2hhbmdlKCRldmVudClcIj5cbiAgPGlvbi10YWItYmFyIHNsb3Q9XCJib3R0b21cIj5cbiAgICA8aW9uLXRhYi1idXR0b24gdGFiPVwibmV3c1wiPlxuICAgICAgPGlvbi1pY29uIG5hbWU9XCJuZXdzcGFwZXItb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICA8aW9uLWxhYmVsPnt7XCJjb21tb24ubmV3c1wifCB0cmFuc2xhdGV9fTwvaW9uLWxhYmVsPlxuICAgIDwvaW9uLXRhYi1idXR0b24+XG5cbiAgICA8aW9uLXRhYi1idXR0b24gdGFiPVwidHJhaW5pbmdcIj5cbiAgICAgIDxpb24taWNvbiBuYW1lPVwiYmFyYmVsbC1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgIDxpb24tbGFiZWw+e3tcImNvbW1vbi50cmFpbmluZ1wifCB0cmFuc2xhdGV9fTwvaW9uLWxhYmVsPlxuICAgIDwvaW9uLXRhYi1idXR0b24+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2x1Ykxpc3QkIHwgYXN5bmMgYXMgY2x1Ykxpc3RcIj5cbiAgICAgIDxpb24tdGFiLWJ1dHRvbiAqbmdJZj1cImVuYWJsZUNoYW1waW9uc2hpcChjbHViTGlzdClcIiAgdGFiPVwiY2hhbXBpb25zaGlwXCI+XG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwidHJvcGh5LW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsPnt7XCJjb21tb24uY2hhbXBpb25zaGlwXCJ8IHRyYW5zbGF0ZX19PC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi10YWItYnV0dG9uPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPGlvbi10YWItYnV0dG9uIHRhYj1cImV2ZW50c1wiPlxuICAgICAgPGlvbi1pY29uIG5hbWU9XCJjYWxlbmRhci1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgIDxpb24tbGFiZWw+e3tcImNvbW1vbi5ldmVudHNcIiB8IHRyYW5zbGF0ZX19PC9pb24tbGFiZWw+XG4gICAgPC9pb24tdGFiLWJ1dHRvbj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbHViTGlzdCQgfCBhc3luYyBhcyBjbHViTGlzdFwiPlxuICAgICAgPGlvbi10YWItYnV0dG9uICpuZ0lmPVwiZW5hYmxlSGVsZmVyRXZlbnRzKGNsdWJMaXN0KVwiIHRhYj1cImhlbGZlclwiPlxuICAgICAgICA8aW9uLWljb24gbmFtZT1cImhlbHAtYnVveS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbD57e1wiY29tbW9uLmhlbHBlclwiIHwgdHJhbnNsYXRlfX08L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLXRhYi1idXR0b24+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2x1Ykxpc3QkIHwgYXN5bmMgYXMgY2x1Ykxpc3RcIj5cbiAgICA8aW9uLXRhYi1idXR0b24gKm5nSWY9XCIhZW5hYmxlSGVsZmVyRXZlbnRzKGNsdWJMaXN0KSB8fCAhZW5hYmxlQ2hhbXBpb25zaGlwKGNsdWJMaXN0KVwiIHRhYj1cInByb2ZpbGVcIj5cbiAgICAgIDxpb24taWNvbiBuYW1lPVwicGVyc29uLWNpcmNsZS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgIDxpb24tbGFiZWw+e3tcImNvbW1vbi5wcm9maWxlXCIgfCB0cmFuc2xhdGV9fTwvaW9uLWxhYmVsPlxuICAgIDwvaW9uLXRhYi1idXR0b24+XG4gIDwvbmctY29udGFpbmVyPlxuICA8L2lvbi10YWItYmFyPlxuPC9pb24tdGFicz4iLCAiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVGFic1BhZ2UgfSBmcm9tICcuL3RhYnMucGFnZSc7XG5pbXBvcnQgeyBtYXAsIHBpcGUsIHRhcCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBlbWFpbFZlcmlmaWVkLFxufSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9hdXRoLWd1YXJkXCI7XG5cbmNvbnN0IHJlZGlyZWN0VW52ZXJpZmllZFRvID0gKHJlZGlyZWN0OiBhbnlbXSkgPT4gcGlwZShlbWFpbFZlcmlmaWVkLCBtYXAoZW1haWxWZXJpZmllZCA9PiBlbWFpbFZlcmlmaWVkIHx8IHJlZGlyZWN0KSk7XG5jb25zdCByZWRpcmVjdFVuYXV0aG9yaXplZFRvTG9naW4gPSAoKSA9PiByZWRpcmVjdFVudmVyaWZpZWRUbyhbJy9vbmJvYXJkaW5nLWVtYWlsJ10pO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICd0JyxcbiAgICBjb21wb25lbnQ6IFRhYnNQYWdlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICduZXdzJyxcbiAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgnLi4vbmV3cy9uZXdzL25ld3MubW9kdWxlJykudGhlbigobSkgPT4gbS5OZXdzUGFnZU1vZHVsZSksXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgZGF0YTogeyBhdXRoR3VhcmRQaXBlOiByZWRpcmVjdFVuYXV0aG9yaXplZFRvTG9naW4gfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICd0cmFpbmluZycsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoJy4uL3RyYWluaW5nL3RyYWluaW5ncy90cmFpbmluZ3MubW9kdWxlJykudGhlbihcbiAgICAgICAgICAgIChtKSA9PiBtLlRyYWluaW5nc1BhZ2VNb2R1bGVcbiAgICAgICAgICApLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXG4gICAgICAgIGRhdGE6IHsgYXV0aEd1YXJkUGlwZTogcmVkaXJlY3RVbmF1dGhvcml6ZWRUb0xvZ2luIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnY2hhbXBpb25zaGlwJyxcbiAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgnLi4vY2hhbXBpb25zaGlwL2NoYW1waW9uc2hpcC9jaGFtcGlvbnNoaXAubW9kdWxlJykudGhlbihcbiAgICAgICAgICAgIChtKSA9PiBtLkNoYW1waW9uc2hpcFBhZ2VNb2R1bGVcbiAgICAgICAgICApLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXG4gICAgICAgIGRhdGE6IHsgYXV0aEd1YXJkUGlwZTogcmVkaXJlY3RVbmF1dGhvcml6ZWRUb0xvZ2luIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnZXZlbnRzJyxcbiAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgnLi4vZXZlbnQvZXZlbnRzL2V2ZW50cy5tb2R1bGUnKS50aGVuKFxuICAgICAgICAgICAgKG0pID0+IG0uRXZlbnRzUGFnZU1vZHVsZVxuICAgICAgICAgICksXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgZGF0YTogeyBhdXRoR3VhcmRQaXBlOiByZWRpcmVjdFVuYXV0aG9yaXplZFRvTG9naW4gfSxcbiAgICAgIH0sIHtcbiAgICAgICAgcGF0aDogJ2hlbGZlcicsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoJy4uL2hlbGZlci9oZWxmZXIvaGVsZmVyLm1vZHVsZScpLnRoZW4oXG4gICAgICAgICAgICAobSkgPT4gbS5IZWxmZXJQYWdlTW9kdWxlXG4gICAgICAgICAgKSxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLFxuICAgICAgICBkYXRhOiB7IGF1dGhHdWFyZFBpcGU6IHJlZGlyZWN0VW5hdXRob3JpemVkVG9Mb2dpbiB9LFxuICAgICAgfSwge1xuICAgICAgICBwYXRoOiAncHJvZmlsZScsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoJy4uL3Byb2ZpbGUvcHJvZmlsZS5tb2R1bGUnKS50aGVuKFxuICAgICAgICAgICAgKG0pID0+IG0uUHJvZmlsZVBhZ2VNb2R1bGVcbiAgICAgICAgICApLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXG4gICAgICAgIGRhdGE6IHsgYXV0aEd1YXJkUGlwZTogcmVkaXJlY3RVbmF1dGhvcml6ZWRUb0xvZ2luIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgcmVkaXJlY3RUbzogJy90L25ld3MnLFxuICAgICAgICBwYXRoTWF0Y2g6ICdmdWxsJyxcblxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIHJlZGlyZWN0VG86ICcvdC9uZXdzJyxcbiAgICBwYXRoTWF0Y2g6ICdmdWxsJyxcblxuICB9XG5dXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNQYWdlUm91dGluZ01vZHVsZSB7IH1cbiIsICJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuaW1wb3J0IHsgVGFic1BhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi90YWJzLXJvdXRpbmcubW9kdWxlJztcblxuaW1wb3J0IHsgVGFic1BhZ2UgfSBmcm9tICcuL3RhYnMucGFnZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIElvbmljTW9kdWxlLmZvclJvb3Qoe1xuICAgXG4gIH0pLFxuICBUYWJzUGFnZVJvdXRpbmdNb2R1bGUsVHJhbnNsYXRlTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbVGFic1BhZ2VdXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNQYWdlTW9kdWxlIHt9XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNhTSxJQUFBLHlCQUFBLEdBQUEsa0JBQUEsRUFBQTtBQUNFLElBQUEsb0JBQUEsR0FBQSxZQUFBLEVBQUE7QUFDQSxJQUFBLHlCQUFBLEdBQUEsV0FBQTtBQUFXLElBQUEsaUJBQUEsQ0FBQTs7QUFBb0MsSUFBQSx1QkFBQSxFQUFZOzs7QUFBaEQsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw0QkFBQSxzQkFBQSxHQUFBLEdBQUEscUJBQUEsQ0FBQTs7Ozs7QUFIZixJQUFBLGtDQUFBLENBQUE7QUFDRSxJQUFBLHFCQUFBLEdBQUEsb0RBQUEsR0FBQSxHQUFBLGtCQUFBLEVBQUE7Ozs7OztBQUFpQixJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLE9BQUEsbUJBQUEsV0FBQSxDQUFBOzs7OztBQVlqQixJQUFBLHlCQUFBLEdBQUEsa0JBQUEsRUFBQTtBQUNFLElBQUEsb0JBQUEsR0FBQSxZQUFBLEVBQUE7QUFDQSxJQUFBLHlCQUFBLEdBQUEsV0FBQTtBQUFXLElBQUEsaUJBQUEsQ0FBQTs7QUFBK0IsSUFBQSx1QkFBQSxFQUFZOzs7QUFBM0MsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw0QkFBQSxzQkFBQSxHQUFBLEdBQUEsZUFBQSxDQUFBOzs7OztBQUhmLElBQUEsa0NBQUEsQ0FBQTtBQUNFLElBQUEscUJBQUEsR0FBQSxvREFBQSxHQUFBLEdBQUEsa0JBQUEsRUFBQTs7Ozs7O0FBQWlCLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsT0FBQSxtQkFBQSxX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RUFBRSxjQUFjO1FBQ2pFLGFBQWEsQ0FBQyxTQUFTO1FBQ3ZCLE1BQU0sRUFBRSxlQUFlLDRCQUEyQjs7TUFFcEQ7UUFDRSxNQUFNO1FBQ04sY0FBYyxNQUNaLE9BQU8sZ0NBQXdDLEVBQUUsS0FDL0MsQ0FBQyxNQUFNLEVBQUUsbUJBQW1CO1FBRWhDLGFBQWEsQ0FBQyxTQUFTO1FBQ3ZCLE1BQU0sRUFBRSxlQUFlLDRCQUEyQjs7TUFFcEQ7UUFDRSxNQUFNO1FBQ04sY0FBYyxNQUNaLE9BQU8sbUNBQWtELEVBQUUsS0FDekQsQ0FBQyxNQUFNLEVBQUUsc0JBQXNCO1FBRW5DLGFBQWEsQ0FBQyxTQUFTO1FBQ3ZCLE1BQU0sRUFBRSxlQUFlLDRCQUEyQjs7TUFFcEQ7UUFDRSxNQUFNO1FBQ04sY0FBYyxNQUNaLE9BQU8sNkJBQStCLEVBQUUsS0FDdEMsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCO1FBRTdCLGFBQWEsQ0FBQyxTQUFTO1FBQ3ZCLE1BQU0sRUFBRSxlQUFlLDRCQUEyQjs7TUFDakQ7UUFDRCxNQUFNO1FBQ04sY0FBYyxNQUNaLE9BQU8sNkJBQWdDLEVBQUUsS0FDdkMsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCO1FBRTdCLGFBQWEsQ0FBQyxTQUFTO1FBQ3ZCLE1BQU0sRUFBRSxlQUFlLDRCQUEyQjs7TUFDakQ7UUFDRCxNQUFNO1FBQ04sY0FBYyxNQUNaLE9BQU8sOEJBQTJCLEVBQUUsS0FDbEMsQ0FBQyxNQUFNLEVBQUUsaUJBQWlCO1FBRTlCLGFBQWEsQ0FBQyxTQUFTO1FBQ3ZCLE1BQU0sRUFBRSxlQUFlLDRCQUEyQjs7TUFFcEQ7UUFDRSxNQUFNO1FBQ04sWUFBWTtRQUNaLFdBQVc7Ozs7RUFLakI7SUFDRSxNQUFNO0lBQ04sWUFBWTtJQUNaLFdBQVc7OztBQVNULElBQU8seUJBQVAsTUFBTyx1QkFBcUI7OzttQ0FBckIsd0JBQXFCO0FBQUE7c0ZBQXJCLHVCQUFxQixDQUFBOzBGQUh0QixhQUFhLFNBQVMsTUFBTSxHQUM1QixZQUFZLEVBQUEsQ0FBQTtBQUVsQixJQUFPLHdCQUFQOzs7QUN0RUEsSUFBTyxrQkFBUCxNQUFPLGdCQUFjOzs7bUNBQWQsaUJBQWM7QUFBQTsrRUFBZCxnQkFBYyxDQUFBOztFQU5mO0VBQWM7RUFBYSxZQUFZLFFBQVEsQ0FBQSxDQUV4RDtFQUNEO0VBQXNCO0FBQWUsRUFBQSxDQUFBO0FBR2pDLElBQU8saUJBQVA7IiwKICAibmFtZXMiOiBbImVtYWlsVmVyaWZpZWQiXQp9Cg==
