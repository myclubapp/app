import {
  HelferService
} from "./chunk-3HMFG4JN.js";
import {
  HelferDetailPage
} from "./chunk-TPIQQKTH.js";
import {
  FirebaseService
} from "./chunk-RMTOAZGR.js";
import {
  AuthService
} from "./chunk-AMO7VPPH.js";
import {
  AsyncPipe,
  DatePipe,
  IonBadge,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonNote,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
  ModalController,
  NgForOf,
  NgIf,
  TranslatePipe,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PZUQX53K.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-LQ2EECYJ.js";

// src/app/pages/helfer/helfer-punkte/helfer-punkte.page.ts
function HelferPunktePage_ng_container_10_ng_container_8_ng_container_4_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 11);
    \u0275\u0275listener("click", function HelferPunktePage_ng_container_10_ng_container_8_ng_container_4_ion_item_1_Template_ion_item_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const helferPunkt_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openHelferEinsatz(helferPunkt_r3));
    });
    \u0275\u0275elementStart(1, "ion-label")(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275element(5, "ion-icon", 12);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275element(9, "ion-icon", 13);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ion-note", 14)(12, "ion-badge");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const helferPunkt_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", helferPunkt_r3.eventName, " - ", helferPunkt_r3.schichtName, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 6, helferPunkt_r3.eventDate.toDate(), "dd.MM.YYYY "), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", helferPunkt_r3.schichtTimeFrom, " Uhr - ", helferPunkt_r3.schichtTimeTo, " Uhr ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(helferPunkt_r3.points);
  }
}
function HelferPunktePage_ng_container_10_ng_container_8_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HelferPunktePage_ng_container_10_ng_container_8_ng_container_4_ion_item_1_Template, 14, 9, "ion-item", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const helferPunkt_r3 = ctx.$implicit;
    const groupBy_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", helferPunkt_r3.eventDate.toDate().getFullYear() == groupBy_r5);
  }
}
function HelferPunktePage_ng_container_10_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-item-divider", 9)(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, HelferPunktePage_ng_container_10_ng_container_8_ng_container_4_Template, 2, 1, "ng-container", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const groupBy_r5 = ctx.$implicit;
    const helferPunkteList_r6 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", groupBy_r5, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", helferPunkteList_r6);
  }
}
function HelferPunktePage_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-header", 5)(2, "ion-toolbar")(3, "ion-title", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "ion-list", 7)(7, "ion-item-group");
    \u0275\u0275template(8, HelferPunktePage_ng_container_10_ng_container_8_Template, 5, 2, "ng-container", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "common.my_helper_points"));
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.groupArray);
  }
}
function HelferPunktePage_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-skeleton-text", 15)(1, "ion-skeleton-text", 16);
  }
}
var _HelferPunktePage = class _HelferPunktePage {
  constructor(modalCtrl, authService, fbService, helferService) {
    this.modalCtrl = modalCtrl;
    this.authService = authService;
    this.fbService = fbService;
    this.helferService = helferService;
    this.groupArray = [];
    this.helferPunkteList$ = this.getHelferEinsatz();
  }
  ngOnInit() {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.groupArray.push(currentYear);
    this.groupArray.push(currentYear - 1);
    this.groupArray.push(currentYear - 2);
    this.groupArray.push(currentYear - 3);
  }
  getHelferEinsatz() {
    return this.authService.getUser$().pipe(take(1), tap((user) => {
      if (!user) {
        console.log("No user found");
        throw new Error("User not found");
      }
    }), switchMap((user) => this.fbService.getUserClubRefs(user).pipe(tap((clubs) => console.log("Clubs:", clubs)), switchMap((clubs) => {
      if (clubs.length === 0) {
        console.log("No clubs associated with the user");
        return of([]);
      }
      const clubHelferPunkte$ = clubs.map((club) => this.helferService.getUserHelferPunkteRefs(user.uid, club.id).pipe(catchError((err) => {
        console.error(`Failed to fetch HelferPunkte for club ${club.id}:`, err);
        return of([]);
      })));
      return combineLatest(clubHelferPunkte$).pipe(
        map((helferPunkteArrays) => helferPunkteArrays.flat())
        // Flatten the array of arrays into a single array of HelferPunkte
      );
    }))), catchError((err) => {
      console.error("Error fetching HelferEinsatz:", err);
      return of([]);
    }));
  }
  openHelferEinsatz(helfereinsatz) {
    return __async(this, null, function* () {
      const modal = yield this.modalCtrl.create({
        component: HelferDetailPage,
        presentingElement: yield this.modalCtrl.getTop(),
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          data: __spreadProps(__spreadValues({}, helfereinsatz), {
            clubId: helfereinsatz.clubRef.id,
            id: helfereinsatz.eventRef.id
          }),
          isFuture: false
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
  close() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(null, "close");
    });
  }
  confirm() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(null, "confirm");
    });
  }
};
_HelferPunktePage.\u0275fac = function HelferPunktePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HelferPunktePage)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(HelferService));
};
_HelferPunktePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HelferPunktePage, selectors: [["app-helfer-punkte"]], standalone: false, decls: 14, vars: 10, consts: [["loading", ""], [3, "translucent"], ["slot", "primary"], [3, "click"], [4, "ngIf"], ["collapse", "condense"], ["size", "large"], [3, "inset"], [4, "ngFor", "ngForOf"], ["color", "light"], ["type", "button", "detail", "true", 3, "click", 4, "ngIf"], ["type", "button", "detail", "true", 3, "click"], ["slot", "icon-only", "name", "calendar-outline"], ["slot", "icon-only", "name", "time-outline"], ["slot", "end"], ["animated", "", 2, "width", "10%"], ["animated", "", 2, "width", "60%"]], template: function HelferPunktePage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 1)(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-buttons", 2)(6, "ion-button", 3);
    \u0275\u0275listener("click", function HelferPunktePage_Template_ion_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.close());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "ion-content");
    \u0275\u0275template(10, HelferPunktePage_ng_container_10_Template, 9, 5, "ng-container", 4);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, HelferPunktePage_ng_template_12_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "common.my_helper_points"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "common.close"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(11, 8, ctx.helferPunkteList$));
  }
}, dependencies: [NgForOf, NgIf, IonBadge, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonNote, IonSkeletonText, IonTitle, IonToolbar, AsyncPipe, DatePipe, TranslatePipe], encapsulation: 2 });
var HelferPunktePage = _HelferPunktePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HelferPunktePage, { className: "HelferPunktePage", filePath: "src/app/pages/helfer/helfer-punkte/helfer-punkte.page.ts", lineNumber: 15 });
})();

export {
  HelferPunktePage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9oZWxmZXIvaGVsZmVyLXB1bmt0ZS9oZWxmZXItcHVua3RlLnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9oZWxmZXIvaGVsZmVyLXB1bmt0ZS9oZWxmZXItcHVua3RlLnBhZ2UuaHRtbCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxDb250cm9sbGVyIH0gZnJvbSBcIkBpb25pYy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBjYXRjaEVycm9yLCBjb21iaW5lTGF0ZXN0LCBtYXAsIG9mLCBzd2l0Y2hNYXAsIHRha2UsIHRhcCB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBIZWxmZXJTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvZmlyZWJhc2UvaGVsZmVyLnNlcnZpY2VcIjtcbmltcG9ydCB7IEhlbGZlckRldGFpbFBhZ2UgfSBmcm9tIFwiLi4vaGVsZmVyLWRldGFpbC9oZWxmZXItZGV0YWlsLnBhZ2VcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1oZWxmZXItcHVua3RlXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9oZWxmZXItcHVua3RlLnBhZ2UuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9oZWxmZXItcHVua3RlLnBhZ2Uuc2Nzc1wiXSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBIZWxmZXJQdW5rdGVQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgaGVsZmVyUHVua3RlTGlzdCQ6IE9ic2VydmFibGU8YW55W10+O1xuICBncm91cEFycmF5ID0gW107XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBmYlNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhlbGZlclNlcnZpY2U6IEhlbGZlclNlcnZpY2VcbiAgKSB7XG5cbiAgICB0aGlzLmhlbGZlclB1bmt0ZUxpc3QkID0gdGhpcy5nZXRIZWxmZXJFaW5zYXR6KCk7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXG4gICAgdGhpcy5ncm91cEFycmF5LnB1c2goY3VycmVudFllYXIpO1xuICAgIHRoaXMuZ3JvdXBBcnJheS5wdXNoKGN1cnJlbnRZZWFyIC0gMSk7XG4gICAgdGhpcy5ncm91cEFycmF5LnB1c2goY3VycmVudFllYXIgLSAyKTtcbiAgICB0aGlzLmdyb3VwQXJyYXkucHVzaChjdXJyZW50WWVhciAtIDMpO1xuICB9XG5cbiAgZ2V0SGVsZmVyRWluc2F0eigpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyJCgpLnBpcGUoXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIHRhcCgodXNlcikgPT4ge1xuICAgICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyB1c2VyIGZvdW5kXCIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXIgbm90IGZvdW5kXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgc3dpdGNoTWFwKHVzZXIgPT4gdGhpcy5mYlNlcnZpY2UuZ2V0VXNlckNsdWJSZWZzKHVzZXIpLnBpcGUoXG4gICAgICAgICAgICB0YXAoY2x1YnMgPT4gY29uc29sZS5sb2coXCJDbHViczpcIiwgY2x1YnMpKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcChjbHVicyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNsdWJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGNsdWJzIGFzc29jaWF0ZWQgd2l0aCB0aGUgdXNlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTWFwIG92ZXIgZWFjaCBjbHViIGFuZCBmZXRjaCBIZWxmZXJQdW5rdGUgZm9yIHRoZSB1c2VyXG4gICAgICAgICAgICAgICAgY29uc3QgY2x1YkhlbGZlclB1bmt0ZSQgPSBjbHVicy5tYXAoY2x1YiA9PlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlbGZlclNlcnZpY2UuZ2V0VXNlckhlbGZlclB1bmt0ZVJlZnModXNlci51aWQsIGNsdWIuaWQpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGZldGNoIEhlbGZlclB1bmt0ZSBmb3IgY2x1YiAke2NsdWIuaWR9OmAsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKFtdKTsgLy8gUmV0dXJuaW5nIGFuIGVtcHR5IGFycmF5IGluIGNhc2Ugb2YgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KGNsdWJIZWxmZXJQdW5rdGUkKS5waXBlKFxuICAgICAgICAgICAgICAgICAgICBtYXAoaGVsZmVyUHVua3RlQXJyYXlzID0+IGhlbGZlclB1bmt0ZUFycmF5cy5mbGF0KCkpIC8vIEZsYXR0ZW4gdGhlIGFycmF5IG9mIGFycmF5cyBpbnRvIGEgc2luZ2xlIGFycmF5IG9mIEhlbGZlclB1bmt0ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIEhlbGZlckVpbnNhdHo6XCIsIGVycik7XG4gICAgICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgICB9KVxuICAgICk7XG59XG5cbiAgYXN5bmMgb3BlbkhlbGZlckVpbnNhdHooaGVsZmVyZWluc2F0eil7XG4gICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoe1xuICAgICAgY29tcG9uZW50OiBIZWxmZXJEZXRhaWxQYWdlLFxuICAgICAgcHJlc2VudGluZ0VsZW1lbnQ6IGF3YWl0IHRoaXMubW9kYWxDdHJsLmdldFRvcCgpLFxuICAgICAgY2FuRGlzbWlzczogdHJ1ZSxcbiAgICAgIHNob3dCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAuLi5oZWxmZXJlaW5zYXR6LFxuICAgICAgICAgIGNsdWJJZDogaGVsZmVyZWluc2F0ei5jbHViUmVmLmlkLFxuICAgICAgICAgIGlkOiBoZWxmZXJlaW5zYXR6LmV2ZW50UmVmLmlkXG4gICAgICAgIH0sXG4gICAgICAgIGlzRnV0dXJlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgbW9kYWwucHJlc2VudCgpO1xuXG4gICAgY29uc3QgeyBkYXRhLCByb2xlIH0gPSBhd2FpdCBtb2RhbC5vbldpbGxEaXNtaXNzKCk7XG5cbiAgICBpZiAocm9sZSA9PT0gXCJjb25maXJtXCIpIHtcbiAgICB9XG5cbiAgfVxuXG4gIGFzeW5jIGNsb3NlKCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKG51bGwsIFwiY2xvc2VcIik7XG4gIH1cblxuICBhc3luYyBjb25maXJtKCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKG51bGwsIFwiY29uZmlybVwiKTtcbiAgfVxufVxuIiwgIjxpb24taGVhZGVyIFt0cmFuc2x1Y2VudF09XCJ0cnVlXCI+XG4gIDxpb24tdG9vbGJhcj5cbiAgICA8aW9uLXRpdGxlPnt7IFwiY29tbW9uLm15X2hlbHBlcl9wb2ludHNcIiB8IHRyYW5zbGF0ZX19PC9pb24tdGl0bGU+XG4gICAgPGlvbi1idXR0b25zIHNsb3Q9XCJwcmltYXJ5XCI+XG4gICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwiY2xvc2UoKVwiPnt7XCJjb21tb24uY2xvc2VcIiB8IHRyYW5zbGF0ZX19PC9pb24tYnV0dG9uPlxuICAgIDwvaW9uLWJ1dHRvbnM+XG4gIDwvaW9uLXRvb2xiYXI+XG48L2lvbi1oZWFkZXI+XG48IS0tIGNsYXNzPVwiaW9uLXBhZGRpbmdcIiAtLT5cblxuPGlvbi1jb250ZW50PlxuXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJoZWxmZXJQdW5rdGVMaXN0JCB8IGFzeW5jIGFzIGhlbGZlclB1bmt0ZUxpc3RcIj5cblxuXG4gICAgPGlvbi1oZWFkZXIgY29sbGFwc2U9XCJjb25kZW5zZVwiPlxuICAgICAgPGlvbi10b29sYmFyPlxuICAgICAgICA8aW9uLXRpdGxlIHNpemU9XCJsYXJnZVwiPnt7IFwiY29tbW9uLm15X2hlbHBlcl9wb2ludHNcIiB8IHRyYW5zbGF0ZX19PC9pb24tdGl0bGU+XG4gICAgICA8L2lvbi10b29sYmFyPlxuICAgIDwvaW9uLWhlYWRlcj5cblxuXG4gICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCI+XG5cbiAgICAgIDxpb24taXRlbS1ncm91cD5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZ3JvdXBCeSBvZiBncm91cEFycmF5XCI+XG4gICAgICAgICAgPGlvbi1pdGVtLWRpdmlkZXIgY29sb3I9XCJsaWdodFwiPlxuICAgICAgICAgICAgPGlvbi1sYWJlbD4ge3tncm91cEJ5fX0gPC9pb24tbGFiZWw+XG4gICAgICAgICAgPC9pb24taXRlbS1kaXZpZGVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGhlbGZlclB1bmt0IG9mIGhlbGZlclB1bmt0ZUxpc3RcIj5cblxuICAgICAgICAgICAgPGlvbi1pdGVtICBcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGV0YWlsPVwidHJ1ZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwib3BlbkhlbGZlckVpbnNhdHooaGVsZmVyUHVua3QpXCJcbiAgICAgICAgICAgICpuZ0lmPVwiaGVsZmVyUHVua3QuZXZlbnREYXRlLnRvRGF0ZSgpLmdldEZ1bGxZZWFyKCk9PWdyb3VwQnlcIj5cbiAgICAgICAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICA8aDI+e3toZWxmZXJQdW5rdC5ldmVudE5hbWV9fSAtIHt7aGVsZmVyUHVua3Quc2NoaWNodE5hbWV9fTwvaDI+XG4gICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwiY2FsZW5kYXItb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgICAgICB7e2hlbGZlclB1bmt0LmV2ZW50RGF0ZS50b0RhdGUoKSB8IGRhdGU6J2RkLk1NLllZWVkgJ319XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJ0aW1lLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgICAge3toZWxmZXJQdW5rdC5zY2hpY2h0VGltZUZyb219fSBVaHIgLSB7e2hlbGZlclB1bmt0LnNjaGljaHRUaW1lVG99fSBVaHJcbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cblxuICAgICAgICAgICAgICA8aW9uLW5vdGUgc2xvdD1cImVuZFwiPlxuICAgICAgICAgICAgICAgIDxpb24tYmFkZ2U+e3toZWxmZXJQdW5rdC5wb2ludHN9fTwvaW9uLWJhZGdlPlxuICAgICAgICAgICAgICA8L2lvbi1ub3RlPlxuXG4gICAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPiBcbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L2lvbi1pdGVtLWdyb3VwPlxuICAgIDwvaW9uLWxpc3Q+XG4gIDwvbmctY29udGFpbmVyPlxuPC9pb24tY29udGVudD5cblxuPG5nLXRlbXBsYXRlICNsb2FkaW5nPlxuICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogMTAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDYwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG48L25nLXRlbXBsYXRlPiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMrQlksSUFBQSx5QkFBQSxHQUFBLFlBQUEsRUFBQTtBQUdBLElBQUEscUJBQUEsU0FBQSxTQUFBLCtHQUFBO0FBQUEsTUFBQSx3QkFBQSxHQUFBO0FBQUEsWUFBQSxpQkFBQSx3QkFBQSxFQUFBO0FBQUEsWUFBQSxTQUFBLHdCQUFBLENBQUE7QUFBQSxhQUFBLHNCQUFTLE9BQUEsa0JBQUEsY0FBQSxDQUE4QjtJQUFBLENBQUE7QUFFckMsSUFBQSx5QkFBQSxHQUFB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
