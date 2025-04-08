import {
  ClubPage
} from "./chunk-QT4RDWZQ.js";
import "./chunk-MPT66UUM.js";
import "./chunk-IHJSXIQX.js";
import "./chunk-SMELFGID.js";
import "./chunk-NVBRLDNC.js";
import "./chunk-3HMFG4JN.js";
import "./chunk-TPIQQKTH.js";
import "./chunk-WS5FEPJJ.js";
import "./chunk-MS3JJYL5.js";
import "./chunk-YLSEXBCU.js";
import "./chunk-3ABWPIXG.js";
import "./chunk-REWK7CTI.js";
import "./chunk-7XMQNZXL.js";
import {
  FirebaseService
} from "./chunk-RMTOAZGR.js";
import "./chunk-AMO7VPPH.js";
import {
  AsyncPipe,
  CommonModule,
  FormsModule,
  IonBadge,
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
  Router,
  RouterModule,
  TranslateModule,
  TranslatePipe,
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

// src/app/pages/club-list/club-list.page.ts
function ClubListPage_ion_col_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-col", 7)(1, "ion-card", 8);
    \u0275\u0275listener("click", function ClubListPage_ion_col_16_Template_ion_card_click_1_listener() {
      const club_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openModal(club_r2));
    });
    \u0275\u0275element(2, "img", 9);
    \u0275\u0275elementStart(3, "ion-card-header");
    \u0275\u0275element(4, "ion-card-subtitle");
    \u0275\u0275elementStart(5, "ion-card-title");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-card-content")(8, "ion-badge");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const club_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", club_r2.logo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", club_r2.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", club_r2.type, " ");
  }
}
function ClubListPage_ng_template_18_ion_col_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-col", 7)(1, "ion-card")(2, "ion-card-header")(3, "ion-card-subtitle");
    \u0275\u0275element(4, "ion-skeleton-text", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-card-title");
    \u0275\u0275element(6, "ion-skeleton-text", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-card-content");
    \u0275\u0275element(8, "ion-skeleton-text", 11)(9, "ion-skeleton-text", 10)(10, "ion-skeleton-text", 11)(11, "ion-skeleton-text", 10)(12, "ion-skeleton-text", 11);
    \u0275\u0275elementEnd()()();
  }
}
function ClubListPage_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list")(1, "ion-grid")(2, "ion-row");
    \u0275\u0275template(3, ClubListPage_ng_template_18_ion_col_3_Template, 13, 0, "ion-col", 6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.skeleton);
  }
}
var _ClubListPage = class _ClubListPage {
  constructor(fbService, router, routerOutlet, modalCtrl) {
    this.fbService = fbService;
    this.router = router;
    this.routerOutlet = routerOutlet;
    this.modalCtrl = modalCtrl;
    this.skeleton = new Array(12);
  }
  ngOnInit() {
    this.clubList$ = this.fbService.getClubList();
    if (this.router.getCurrentNavigation().extras && this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state["type"] === "clubRequestAdmin") {
      this.subscription = this.fbService.getClubRef(this.router.getCurrentNavigation().extras.state["clubId"]).pipe(take(1), tap((club) => {
        this.openModal(club);
      })).subscribe();
    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  openModal(club) {
    return __async(this, null, function* () {
      const modal = yield this.modalCtrl.create({
        component: ClubPage,
        presentingElement: this.routerOutlet.nativeEl,
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          data: club
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
  joinClubAlert() {
    return __async(this, null, function* () {
    });
  }
};
_ClubListPage.\u0275fac = function ClubListPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClubListPage)(\u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(IonRouterOutlet), \u0275\u0275directiveInject(ModalController));
};
_ClubListPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClubListPage, selectors: [["app-club-list"]], standalone: false, decls: 20, vars: 11, consts: [["loading", ""], [3, "translucent"], ["slot", "start"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], ["size-lg", "4", "size-md", "6", "size-sm", "6", "size", "12", 4, "ngFor", "ngForOf"], ["size-lg", "4", "size-md", "6", "size-sm", "6", "size", "12"], [3, "click"], [3, "src"], ["animated", "", 2, "width", "60%"], ["animated", "", 2, "width", "80%"]], template: function ClubListPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 1)(1, "ion-toolbar")(2, "ion-buttons", 2);
    \u0275\u0275element(3, "ion-menu-button");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-title");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "ion-content", 3)(8, "ion-header", 4)(9, "ion-toolbar")(10, "ion-title", 5);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "ion-list")(14, "ion-grid")(15, "ion-row");
    \u0275\u0275template(16, ClubListPage_ion_col_16_Template, 10, 3, "ion-col", 6);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(18, ClubListPage_ng_template_18_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "club-list.my__clubs"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, "club-list.my__clubs"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(17, 9, ctx.clubList$));
  }
}, dependencies: [NgForOf, IonBadge, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonList, IonMenuButton, IonRow, IonSkeletonText, IonTitle, IonToolbar, AsyncPipe, TranslatePipe], encapsulation: 2 });
var ClubListPage = _ClubListPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClubListPage, { className: "ClubListPage", filePath: "src/app/pages/club-list/club-list.page.ts", lineNumber: 19 });
})();

// src/app/pages/club-list/club-list-routing.module.ts
var routes = [
  {
    path: "",
    component: ClubListPage
  }
];
var _ClubListPageRoutingModule = class _ClubListPageRoutingModule {
};
_ClubListPageRoutingModule.\u0275fac = function ClubListPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClubListPageRoutingModule)();
};
_ClubListPageRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ClubListPageRoutingModule });
_ClubListPageRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var ClubListPageRoutingModule = _ClubListPageRoutingModule;

// src/app/pages/club-list/club-list.module.ts
var _ClubListPageModule = class _ClubListPageModule {
};
_ClubListPageModule.\u0275fac = function ClubListPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClubListPageModule)();
};
_ClubListPageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ClubListPageModule });
_ClubListPageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, FormsModule, IonicModule, ClubListPageRoutingModule, TranslateModule] });
var ClubListPageModule = _ClubListPageModule;
export {
  ClubListPageModule
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9jbHViLWxpc3QvY2x1Yi1saXN0LnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9jbHViLWxpc3QvY2x1Yi1saXN0LnBhZ2UuaHRtbCIsICJzcmMvYXBwL3BhZ2VzL2NsdWItbGlzdC9jbHViLWxpc3Qtcm91dGluZy5tb2R1bGUudHMiLCAic3JjL2FwcC9wYWdlcy9jbHViLWxpc3QvY2x1Yi1saXN0Lm1vZHVsZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ2x1YiB9IGZyb20gXCJzcmMvYXBwL21vZGVscy9jbHViXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIHRha2UsIHRhcCB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvYXV0aFwiO1xuaW1wb3J0IHsgQ2x1YlBhZ2UgfSBmcm9tIFwiLi4vY2x1Yi9jbHViLnBhZ2VcIjtcbmltcG9ydCB7XG4gIElvblJvdXRlck91dGxldCxcbiAgTW9kYWxDb250cm9sbGVyLFxufSBmcm9tIFwiQGlvbmljL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLWNsdWItbGlzdFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY2x1Yi1saXN0LnBhZ2UuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9jbHViLWxpc3QucGFnZS5zY3NzXCJdLFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIENsdWJMaXN0UGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBza2VsZXRvbiA9IG5ldyBBcnJheSgxMik7XG4gIHVzZXI6IFVzZXI7XG4gIGNsdWJMaXN0JDogT2JzZXJ2YWJsZTxDbHViW10+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmJTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlck91dGxldDogSW9uUm91dGVyT3V0bGV0LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsXG5cbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuY2x1Ykxpc3QkID0gdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1Ykxpc3QoKTtcbiAgICBpZiAodGhpcy5yb3V0ZXIuZ2V0Q3VycmVudE5hdmlnYXRpb24oKS5leHRyYXMgJiYgdGhpcy5yb3V0ZXIuZ2V0Q3VycmVudE5hdmlnYXRpb24oKS5leHRyYXMuc3RhdGUgJiYgdGhpcy5yb3V0ZXIuZ2V0Q3VycmVudE5hdmlnYXRpb24oKS5leHRyYXMuc3RhdGVbXCJ0eXBlXCJdID09PSAnY2x1YlJlcXVlc3RBZG1pbicpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1YlJlZih0aGlzLnJvdXRlci5nZXRDdXJyZW50TmF2aWdhdGlvbigpLmV4dHJhcy5zdGF0ZVtcImNsdWJJZFwiXSkucGlwZShcbiAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgdGFwKGNsdWIgPT4ge1xuICAgICAgICAgIHRoaXMub3Blbk1vZGFsKGNsdWIpO1xuICAgICAgICB9KVxuICAgICAgKS5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gIH1cbiAgYXN5bmMgb3Blbk1vZGFsKGNsdWI6IENsdWIpIHtcbiAgICAvLyBjb25zdCBwcmVzZW50aW5nRWxlbWVudCA9IGF3YWl0IHRoaXMubW9kYWxDdHJsLmdldFRvcCgpO1xuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbEN0cmwuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogQ2x1YlBhZ2UsXG4gICAgICBwcmVzZW50aW5nRWxlbWVudDogdGhpcy5yb3V0ZXJPdXRsZXQubmF0aXZlRWwsXG4gICAgICBjYW5EaXNtaXNzOiB0cnVlLFxuICAgICAgc2hvd0JhY2tkcm9wOiB0cnVlLFxuICAgICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgZGF0YTogY2x1YixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgbW9kYWwucHJlc2VudCgpO1xuXG4gICAgY29uc3QgeyBkYXRhLCByb2xlIH0gPSBhd2FpdCBtb2RhbC5vbldpbGxEaXNtaXNzKCk7XG5cbiAgICBpZiAocm9sZSA9PT0gXCJjb25maXJtXCIpIHtcbiAgICB9XG4gIH1cblxuICBhc3luYyBqb2luQ2x1YkFsZXJ0KCkge1xuICAgIC8qXG4gICAgbGV0IF9pbnB1dHMgPSBbXTtcbiAgICBmb3IgKGxldCBjbHViIG9mIHRoaXMuYWN0aXZlQ2x1Ykxpc3QpIHtcbiAgICAgIGZvciAobGV0IG15Q2x1YiBvZiB0aGlzLmNsdWJMaXN0KSB7XG4gICAgICAgIGlmIChteUNsdWIuaWQgPT09IGNsdWIuaWQpIHtcbiAgICAgICAgICAvLyBjbHViIG5pY2h0IGFkZGVuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2lucHV0cy5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiBjbHViLm5hbWUsXG4gICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICB2YWx1ZTogY2x1Yi5pZCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIGhlYWRlcjogXCJXw6RobGUgZGVpbmVuIENsdWIgYXVzOlwiLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJhdXN3w6RobGVuXCIsXG4gICAgICAgICAgcm9sZTogXCJjb25maXJtXCIsXG4gICAgICAgICAgaGFuZGxlcjogKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmZiU2VydmljZVxuICAgICAgICAgICAgICAuc2V0Q2x1YlJlcXVlc3QoZGF0YSwgdGhpcy51c2VyKVxuICAgICAgICAgICAgICAudGhlbihhc3luYyAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBbmZyYWdlIGFuIENsdWIgZ2VzZW5kZXRcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7fSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiYWJicmVjaGVuXCIsXG4gICAgICAgICAgcm9sZTogXCJjYW5jZWxcIixcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFiYnJlY2hlblwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGlucHV0czogX2lucHV0cyxcbiAgICB9KTtcblxuICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTsqL1xuICB9XG59XG4iLCAiPGlvbi1oZWFkZXIgW3RyYW5zbHVjZW50XT1cInRydWVcIj5cbiAgPGlvbi10b29sYmFyPlxuICAgIDxpb24tYnV0dG9ucyBzbG90PVwic3RhcnRcIj5cbiAgICAgIDxpb24tbWVudS1idXR0b24+PC9pb24tbWVudS1idXR0b24+XG4gICAgPC9pb24tYnV0dG9ucz5cbiAgICA8aW9uLXRpdGxlPnt7XCJjbHViLWxpc3QubXlfX2NsdWJzXCIgfCB0cmFuc2xhdGV9fTwvaW9uLXRpdGxlPlxuICA8L2lvbi10b29sYmFyPlxuPC9pb24taGVhZGVyPlxuXG48aW9uLWNvbnRlbnQgW2Z1bGxzY3JlZW5dPVwidHJ1ZVwiPlxuICA8aW9uLWhlYWRlciBjb2xsYXBzZT1cImNvbmRlbnNlXCI+XG4gICAgPGlvbi10b29sYmFyPlxuICAgICAgPGlvbi10aXRsZSBzaXplPVwibGFyZ2VcIj57e1wiY2x1Yi1saXN0Lm15X19jbHVic1wiIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgICA8L2lvbi10b29sYmFyPlxuICA8L2lvbi1oZWFkZXI+XG5cbiAgPGlvbi1saXN0PlxuICAgIDxpb24tZ3JpZD5cbiAgICAgIDxpb24tcm93PlxuICAgICAgICA8aW9uLWNvbFxuICAgICAgICAgIHNpemUtbGc9XCI0XCJcbiAgICAgICAgICBzaXplLW1kPVwiNlwiXG4gICAgICAgICAgc2l6ZS1zbT1cIjZcIlxuICAgICAgICAgIHNpemU9XCIxMlwiXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGNsdWIgb2YgY2x1Ykxpc3QkIHwgYXN5bmNcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlvbi1jYXJkIChjbGljayk9XCJvcGVuTW9kYWwoY2x1YilcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwie3tjbHViLmxvZ299fVwiIC8+XG4gICAgICAgICAgICA8aW9uLWNhcmQtaGVhZGVyPlxuICAgICAgICAgICAgICA8aW9uLWNhcmQtc3VidGl0bGU+IDwvaW9uLWNhcmQtc3VidGl0bGU+XG4gICAgICAgICAgICAgIDxpb24tY2FyZC10aXRsZT4ge3tjbHViLm5hbWV9fSA8L2lvbi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgPC9pb24tY2FyZC1oZWFkZXI+XG5cbiAgICAgICAgICAgIDxpb24tY2FyZC1jb250ZW50PlxuICAgICAgICAgICAgICA8aW9uLWJhZGdlPiB7e2NsdWIudHlwZX19IDwvaW9uLWJhZGdlPlxuICAgICAgICAgICAgPC9pb24tY2FyZC1jb250ZW50PlxuICAgICAgICAgIDwvaW9uLWNhcmQ+XG4gICAgICAgIDwvaW9uLWNvbD5cbiAgICAgIDwvaW9uLXJvdz5cbiAgICA8L2lvbi1ncmlkPlxuICA8L2lvbi1saXN0PlxuXG4gIDwhLS0gZmFiIHBsYWNlZCB0byB0aGUgYm90dG9tIGVuZCBcbiAgPGlvbi1mYWIgdmVydGljYWw9XCJib3R0b21cIiBob3Jpem9udGFsPVwiZW5kXCIgc2xvdD1cImZpeGVkXCI+XG4gICAgPGlvbi1mYWItYnV0dG9uIChjbGljayk9XCJqb2luQ2x1YkFsZXJ0KClcIj5cbiAgICAgIDxpb24taWNvbiBuYW1lPVwiYWRkLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgIDwvaW9uLWZhYi1idXR0b24+XG4gIDwvaW9uLWZhYj4tLT5cbjwvaW9uLWNvbnRlbnQ+XG5cbjxuZy10ZW1wbGF0ZSAjbG9hZGluZz5cbiAgPGlvbi1saXN0PlxuICAgIDxpb24tZ3JpZD5cbiAgICAgIDxpb24tcm93PlxuICAgICAgICA8aW9uLWNvbFxuICAgICAgICAgIHNpemUtbGc9XCI0XCJcbiAgICAgICAgICBzaXplLW1kPVwiNlwiXG4gICAgICAgICAgc2l6ZS1zbT1cIjZcIlxuICAgICAgICAgIHNpemU9XCIxMlwiXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2tlbGV0b25cIlxuICAgICAgICA+XG4gICAgICAgICAgPGlvbi1jYXJkPlxuICAgICAgICAgICAgPGlvbi1jYXJkLWhlYWRlcj5cbiAgICAgICAgICAgICAgPGlvbi1jYXJkLXN1YnRpdGxlPlxuICAgICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZWRcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDYwJVwiXG4gICAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDwvaW9uLWNhcmQtc3VidGl0bGU+XG4gICAgICAgICAgICAgIDxpb24tY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGVkXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA4MCVcIlxuICAgICAgICAgICAgICAgID48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgICA8L2lvbi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgPC9pb24tY2FyZC1oZWFkZXI+XG5cbiAgICAgICAgICAgIDxpb24tY2FyZC1jb250ZW50PlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgICAgICAgICBhbmltYXRlZFxuICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDgwJVwiXG4gICAgICAgICAgICAgID48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgICAgICAgICBhbmltYXRlZFxuICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDYwJVwiXG4gICAgICAgICAgICAgID48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgICAgICAgICBhbmltYXRlZFxuICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDgwJVwiXG4gICAgICAgICAgICAgID48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgICAgICAgICBhbmltYXRlZFxuICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDYwJVwiXG4gICAgICAgICAgICAgID48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgICAgICAgICBhbmltYXRlZFxuICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDgwJVwiXG4gICAgICAgICAgICAgID48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgPC9pb24tY2FyZC1jb250ZW50PlxuICAgICAgICAgIDwvaW9uLWNhcmQ+XG4gICAgICAgIDwvaW9uLWNvbD5cbiAgICAgIDwvaW9uLXJvdz5cbiAgICA8L2lvbi1ncmlkPlxuICA8L2lvbi1saXN0PlxuPC9uZy10ZW1wbGF0ZT5cbiIsICJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDbHViTGlzdFBhZ2UgfSBmcm9tICcuL2NsdWItbGlzdC5wYWdlJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IENsdWJMaXN0UGFnZVxuICB9XG5dXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIENsdWJMaXN0UGFnZVJvdXRpbmdNb2R1bGUge31cbiIsICJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuaW1wb3J0IHsgQ2x1Ykxpc3RQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vY2x1Yi1saXN0LXJvdXRpbmcubW9kdWxlJztcblxuaW1wb3J0IHsgQ2x1Ykxpc3RQYWdlIH0gZnJvbSAnLi9jbHViLWxpc3QucGFnZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIElvbmljTW9kdWxlLCBDbHViTGlzdFBhZ2VSb3V0aW5nTW9kdWxlLCBUcmFuc2xhdGVNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtDbHViTGlzdFBhZ2VdXG59KVxuZXhwb3J0IGNsYXNzIENsdWJMaXN0UGFnZU1vZHVsZSB7fVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ21CUSxJQUFBLHlCQUFBLEdBQUEsV0FBQSxDQUFBLEVBTUMsR0FBQSxZQUFBLENBQUE7QUFDVyxJQUFBLHFCQUFBLFNBQUEsU0FBQSw2REFBQTtBQUFBLFlBQUEsVUFBQSx3QkFBQSxHQUFBLEVBQUE7QUFBQSxZQUFBLFNBQUEsd0JBQUE7QUFBQSxhQUFBLHNCQUFTLE9BQUEsVUFBQSxPQUFBLENBQWU7SUFBQSxDQUFBO0FBQ2hDLElBQUEsb0JBQUEsR0FBQSxPQUFBLENBQUE7QUFDQSxJQUFBLHlCQUFBLEdBQUEsaUJBQUE7QUFDRSxJQUFB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
