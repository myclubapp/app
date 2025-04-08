import {
  HelferAddPage
} from "./chunk-MPTMT4G6.js";
import {
  HelferDetailPage
} from "./chunk-TPIQQKTH.js";
import {
  EventService
} from "./chunk-WS5FEPJJ.js";
import "./chunk-3ABWPIXG.js";
import "./chunk-REWK7CTI.js";
import "./chunk-7XMQNZXL.js";
import {
  FirebaseService
} from "./chunk-RMTOAZGR.js";
import {
  AuthService,
  Timestamp
} from "./chunk-AMO7VPPH.js";
import {
  ActivatedRoute,
  AsyncPipe,
  CommonModule,
  DatePipe,
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
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonNote,
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
  ToastController,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  catchError,
  combineLatest,
  lastValueFrom,
  map,
  mergeMap,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-LQ2EECYJ.js";

// src/app/pages/helfer/helfer/helfer.page.ts
function HelferPage_ng_container_13_ion_list_1_ion_item_sliding_14_ng_container_16_ion_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", event_r2.countAttendees, " / ", event_r2.countNeeded, "");
  }
}
function HelferPage_ng_container_13_ion_list_1_ion_item_sliding_14_ng_container_16_ion_badge_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", event_r2.countAttendees, " / ", event_r2.countNeeded, "");
  }
}
function HelferPage_ng_container_13_ion_list_1_ion_item_sliding_14_ng_container_16_ion_badge_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", event_r2.countAttendees, " / ", event_r2.countNeeded, "");
  }
}
function HelferPage_ng_container_13_ion_list_1_ion_item_sliding_14_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HelferPage_ng_container_13_ion_list_1_ion_item_sliding_14_ng_container_16_ion_badge_1_Template, 2, 2, "ion-badge", 17)(2, HelferPage_ng_container_13_ion_list_1_ion_item_sliding_14_ng_container_16_ion_badge_2_Template, 2, 2, "ion-badge", 18)(3, HelferPage_ng_container_13_ion_list_1_ion_item_sliding_14_ng_container_16_ion_badge_3_Template, 2, 2, "ion-badge", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const event_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r2.countAttendees >= event_r2.countNeeded);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r2.countAttendees < event_r2.countNeeded && event_r2.countAttendees !== 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r2.countAttendees < event_r2.countNeeded && event_r2.countAttendees === 0);
  }
}
function HelferPage_ng_container_13_ion_list_1_ion_item_sliding_14_ng_container_17_ion_item_options_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-options", 24)(1, "ion-item-option", 25);
    \u0275\u0275listener("click", function HelferPage_ng_container_13_ion_list_1_ion_item_sliding_14_ng_container_17_ion_item_options_1_Template_ion_item_option_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const event_r2 = \u0275\u0275nextContext(2).$implicit;
      const item_r5 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.copyEvent(item_r5, event_r2));
    });
    \u0275\u0275element(2, "ion-icon", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-item-option", 27);
    \u0275\u0275listener("click", function HelferPage_ng_container_13_ion_list_1_ion_item_sliding_14_ng_container_17_ion_item_options_1_Template_ion_item_option_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const event_r2 = \u0275\u0275nextContext(2).$implicit;
      const item_r5 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.deleteEvent(item_r5, event_r2));
    });
    \u0275\u0275element(4, "ion-icon", 28);
    \u0275\u0275elementEnd()();
  }
}
function HelferPage_ng_container_13_ion_list_1_ion_item_sliding_14_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HelferPage_ng_container_13_ion_list_1_ion_item_sliding_14_ng_container_17_ion_item_options_1_Template, 5, 0, "ion-item-options", 23);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r6 = ctx.ngIf;
    const event_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isClubAdmin(clubAdminList_r6, event_r2.clubId));
  }
}
function HelferPage_ng_container_13_ion_list_1_ion_item_sliding_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 1)(2, "ion-item", 13);
    \u0275\u0275listener("click", function HelferPage_ng_container_13_ion_list_1_ion_item_sliding_14_Template_ion_item_click_2_listener() {
      const event_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openEventDetailModal(event_r2, true));
    });
    \u0275\u0275element(3, "ion-icon", 14);
    \u0275\u0275elementStart(4, "ion-label")(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275element(8, "ion-icon", 15);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275pipe(11, "date");
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h3");
    \u0275\u0275element(14, "ion-icon", 16);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, HelferPage_ng_container_13_ion_list_1_ion_item_sliding_14_ng_container_16_Template, 4, 3, "ng-container", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, HelferPage_ng_container_13_ion_list_1_ion_item_sliding_14_ng_container_17_Template, 2, 1, "ng-container", 8);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(event_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(10, 9, event_r2.date.toDate(), "dd.MM.YYYY "), " ", \u0275\u0275pipeBind2(11, 12, event_r2.timeFrom, "HH:mm"), " Uhr - ", \u0275\u0275pipeBind2(12, 15, event_r2.timeTo, "HH:mm"), " Uhr ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3(" ", event_r2.location, " ", event_r2.streetAndNumber, " ", event_r2.city, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r2.schichten.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(18, 18, ctx_r2.clubAdminList$));
  }
}
function HelferPage_ng_container_13_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 10)(1, "ion-list-header")(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-item")(6, "ion-label", 3)(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ion-label", 11)(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, HelferPage_ng_container_13_ion_list_1_ion_item_sliding_14_Template, 19, 20, "ion-item-sliding", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const eventsList_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "helfer.upcomming__helper_event"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, "common.status"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 8, "common.participant"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", eventsList_r7);
  }
}
function HelferPage_ng_container_13_ion_list_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list")(1, "ion-list-header")(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-item")(6, "ion-note");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "helfer.upcomming__helper_event"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "common.no_event__found"), " ");
  }
}
function HelferPage_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HelferPage_ng_container_13_ion_list_1_Template, 15, 10, "ion-list", 9)(2, HelferPage_ng_container_13_ion_list_2_Template, 9, 6, "ion-list", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const eventsList_r7 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", eventsList_r7.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", eventsList_r7.length == 0);
  }
}
function HelferPage_ng_container_15_ion_list_1_ion_item_sliding_14_ng_container_19_ion_item_options_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-options", 24)(1, "ion-item-option", 25);
    \u0275\u0275listener("click", function HelferPage_ng_container_15_ion_list_1_ion_item_sliding_14_ng_container_19_ion_item_options_1_Template_ion_item_option_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const event_r9 = \u0275\u0275nextContext(2).$implicit;
      const item_r11 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.copyEvent(item_r11, event_r9));
    });
    \u0275\u0275element(2, "ion-icon", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-item-option", 27);
    \u0275\u0275listener("click", function HelferPage_ng_container_15_ion_list_1_ion_item_sliding_14_ng_container_19_ion_item_options_1_Template_ion_item_option_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const event_r9 = \u0275\u0275nextContext(2).$implicit;
      const item_r11 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.deleteEvent(item_r11, event_r9));
    });
    \u0275\u0275element(4, "ion-icon", 28);
    \u0275\u0275elementEnd()();
  }
}
function HelferPage_ng_container_15_ion_list_1_ion_item_sliding_14_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HelferPage_ng_container_15_ion_list_1_ion_item_sliding_14_ng_container_19_ion_item_options_1_Template, 5, 0, "ion-item-options", 23);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r12 = ctx.ngIf;
    const event_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isClubAdmin(clubAdminList_r12, event_r9.clubId));
  }
}
function HelferPage_ng_container_15_ion_list_1_ion_item_sliding_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 1)(2, "ion-item", 13);
    \u0275\u0275listener("click", function HelferPage_ng_container_15_ion_list_1_ion_item_sliding_14_Template_ion_item_click_2_listener() {
      const event_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openEventDetailModal(event_r9, false));
    });
    \u0275\u0275element(3, "ion-icon", 14);
    \u0275\u0275elementStart(4, "ion-label")(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275element(8, "ion-icon", 15);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275pipe(11, "date");
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h3");
    \u0275\u0275element(14, "ion-icon", 16);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "ion-note", 11)(17, "ion-badge", 29);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, HelferPage_ng_container_15_ion_list_1_ion_item_sliding_14_ng_container_19_Template, 2, 1, "ng-container", 8);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(event_r9.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(10, 10, event_r9.date.toDate(), "dd.MM.YYYY "), " ", \u0275\u0275pipeBind2(11, 13, event_r9.timeFrom, "HH:mm"), " Uhr - ", \u0275\u0275pipeBind2(12, 16, event_r9.timeTo, "HH:mm"), " Uhr ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3(" ", event_r9.location, " ", event_r9.streetAndNumber, " ", event_r9.city, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", event_r9.countAttendees, " / ", event_r9.countNeeded, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(20, 19, ctx_r2.clubAdminList$));
  }
}
function HelferPage_ng_container_15_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 10)(1, "ion-list-header")(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-item")(6, "ion-label", 3)(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ion-label", 11)(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, HelferPage_ng_container_15_ion_list_1_ion_item_sliding_14_Template, 21, 21, "ion-item-sliding", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const eventsListPast_r13 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "helfer.past__helper_events"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, "common.status"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 8, "common.participant"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", eventsListPast_r13);
  }
}
function HelferPage_ng_container_15_ion_list_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list")(1, "ion-list-header")(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-item")(6, "ion-label")(7, "ion-note");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "helfer.past__helper_events"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 4, "common.no_event__found"), " ");
  }
}
function HelferPage_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HelferPage_ng_container_15_ion_list_1_Template, 15, 10, "ion-list", 9)(2, HelferPage_ng_container_15_ion_list_2_Template, 10, 6, "ion-list", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const eventsListPast_r13 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", eventsListPast_r13.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", eventsListPast_r13.length == 0);
  }
}
function HelferPage_ng_container_17_ion_fab_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-fab", 31)(1, "ion-fab-button", 32);
    \u0275\u0275listener("click", function HelferPage_ng_container_17_ion_fab_1_Template_ion_fab_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEventCreateModal());
    });
    \u0275\u0275element(2, "ion-icon", 33);
    \u0275\u0275elementEnd()();
  }
}
function HelferPage_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HelferPage_ng_container_17_ion_fab_1_Template, 3, 0, "ion-fab", 30);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r15 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", clubAdminList_r15.length > 0);
  }
}
function HelferPage_ng_template_19_ion_list_0_ion_col_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-col", 35)(1, "ion-card")(2, "ion-card-header")(3, "ion-card-subtitle");
    \u0275\u0275element(4, "ion-skeleton-text", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-card-title");
    \u0275\u0275element(6, "ion-skeleton-text", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-card-content");
    \u0275\u0275element(8, "ion-skeleton-text", 37)(9, "ion-skeleton-text", 36)(10, "ion-skeleton-text", 37)(11, "ion-skeleton-text", 36)(12, "ion-skeleton-text", 37);
    \u0275\u0275elementEnd()()();
  }
}
function HelferPage_ng_template_19_ion_list_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list")(1, "ion-grid")(2, "ion-row");
    \u0275\u0275template(3, HelferPage_ng_template_19_ion_list_0_ion_col_3_Template, 13, 0, "ion-col", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.skeleton);
  }
}
function HelferPage_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HelferPage_ng_template_19_ion_list_0_Template, 4, 1, "ion-list", 8);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const loading_r16 = \u0275\u0275reference(20);
    \u0275\u0275property("ngIf", loading_r16);
  }
}
var _HelferPage = class _HelferPage {
  constructor(toastController, routerOutlet, modalCtrl, authService, fbService, eventService, menuCtrl, translate, router, activatedRoute) {
    this.toastController = toastController;
    this.routerOutlet = routerOutlet;
    this.modalCtrl = modalCtrl;
    this.authService = authService;
    this.fbService = fbService;
    this.eventService = eventService;
    this.menuCtrl = menuCtrl;
    this.translate = translate;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.skeleton = new Array(12);
    this.menuCtrl.enable(true, "menu");
  }
  ngOnInit() {
    this.helferList$ = this.getHelferEvent();
    this.helferListPast$ = this.getHelferEventPast();
    this.clubAdminList$ = this.fbService.getClubAdminList();
    this.handleNavigationData();
  }
  ngOnDestroy() {
    if (this.activatedRouteSub) {
      this.activatedRouteSub.unsubscribe();
    }
  }
  handleNavigationData() {
    this.activatedRouteSub = this.activatedRoute.url.subscribe((data) => {
      if (this.router.getCurrentNavigation().extras && this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state["type"] === "helferEvent") {
        const pushData = this.router.getCurrentNavigation().extras.state;
        let helferEvent = {
          id: "",
          name: "",
          description: "",
          location: "",
          streetAndNumber: "",
          postalCode: "",
          city: "",
          date: Timestamp.now(),
          startDate: "",
          endDate: "",
          timeFrom: "",
          timeTo: "",
          clubId: "",
          clubName: "",
          link_poll: "",
          link_web: "",
          status: false,
          attendees: void 0,
          countAttendees: 0,
          countNeeded: 0,
          closedEvent: false
        };
        this.openEventDetailModal(helferEvent, true);
      } else {
        console.log("no data");
      }
    });
  }
  isClubAdmin(clubAdminList, clubId) {
    return clubAdminList && clubAdminList.some((club) => club.id === clubId);
  }
  getHelferEvent() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user)
          return of([]);
        return this.fbService.getUserClubRefs(user);
      }),
      // tap((clubs) => console.log("Clubs:", clubs)),
      mergeMap((clubs) => {
        if (clubs.length === 0)
          return of([]);
        return combineLatest(clubs.map((club) => this.eventService.getClubHelferEventRefs(club.id).pipe(
          switchMap((events) => {
            if (events.length === 0)
              return of([]);
            return combineLatest(events.map((event) => this.eventService.getClubHelferEventSchichtenRef(club.id, event.id).pipe(switchMap((schichten) => {
              if (schichten.length === 0)
                return of([]);
              return combineLatest(schichten.map((schicht) => this.eventService.getClubHelferEventSchichtAttendeesRef(club.id, event.id, schicht.id).pipe(map((attendees) => {
                return __spreadProps(__spreadValues({}, schicht), {
                  // attendees: attendeeDetails,
                  countAttendees: attendees.filter((att) => att.status === true).length,
                  countNeeded: schicht.countNeeded
                });
              }), catchError(() => of(__spreadProps(__spreadValues({}, schicht), {
                // attendees: [],
                countAttendees: 0,
                countNeeded: schicht.neededAttendees
              }))))));
            }), map((schichtenWithDetails) => __spreadProps(__spreadValues({}, event), {
              schichten: schichtenWithDetails,
              countAttendees: schichtenWithDetails.reduce((acc, schicht) => acc + Number(schicht.countAttendees), 0),
              countNeeded: schichtenWithDetails.reduce((acc, schicht) => acc + Number(schicht.countNeeded), 0)
            })), catchError(() => of(__spreadProps(__spreadValues({}, event), {
              schichten: [],
              countAttendees: 0,
              countNeeded: 0
            }))))));
          }),
          map((eventsWithSchichten) => eventsWithSchichten),
          // Flatten events array for each club
          catchError(() => of([]))
          // If error in fetching events, return empty array
        ))).pipe(
          map((clubsEvents) => clubsEvents.flat()),
          // Flatten to get all events across all clubs
          map((allEvents) => allEvents.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
            // Sort events by date
          ))
        );
      }),
      // tap((results) => console.log("Final results with all events:", results)),
      catchError((err) => {
        console.error("Error in getHelferEvent:", err);
        return of([]);
      })
    );
  }
  getHelferEvent2() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user)
          return of([]);
        return this.fbService.getUserClubRefs(user);
      }),
      tap((clubs) => console.log("Teams:", clubs)),
      mergeMap((clubs) => {
        if (clubs.length === 0)
          return of([]);
        return combineLatest(clubs.map((club) => this.eventService.getClubHelferEventRefs(club.id).pipe(
          switchMap((clubevents) => {
            if (clubevents.length === 0)
              return of([]);
            return combineLatest(clubevents.map((event) => this.eventService.getClubHelferEventAttendeesRef(club.id, event.id).pipe(
              map((attendees) => {
                const userAttendee = attendees.find((att) => att.id == this.user.uid);
                const status = userAttendee ? userAttendee.status : null;
                return __spreadProps(__spreadValues({}, event), {
                  attendees,
                  status,
                  countAttendees: attendees.filter((att) => att.status == true).length,
                  clubId: club.id
                });
              }),
              catchError(() => of(__spreadProps(__spreadValues({}, event), {
                attendees: [],
                status: null,
                countAttendees: 0,
                clubId: club.id
              })))
              // If error, return game with empty attendees
            )));
          }),
          map((eventsWithAttendees) => eventsWithAttendees),
          // Flatten events array for each club
          catchError(() => of([]))
          // If error in fetching events, return empty array
        ))).pipe(
          map((clubsevents) => clubsevents.flat()),
          // Flatten to get all events across all clubs
          map(
            (allEvents) => allEvents.sort((a, b) => Timestamp.fromMillis(a.date).seconds - Timestamp.fromMillis(b.date).seconds)
            // Sort events by date
          )
        );
      }),
      // tap((results) => console.log("Final results with all events:", results)),
      catchError((err) => {
        console.error("Error in getTeameventsUpcoming:", err);
        return of([]);
      })
    );
  }
  getHelferEventPast() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user)
          return of([]);
        return this.fbService.getUserClubRefs(user);
      }),
      // tap((clubs) => console.log("Teams:", clubs)),
      mergeMap((clubs) => {
        if (clubs.length === 0)
          return of([]);
        return combineLatest(clubs.map((club) => this.eventService.getClubHelferEventPastRefs(club.id).pipe(
          switchMap((events) => {
            if (events.length === 0)
              return of([]);
            return combineLatest(events.map((event) => this.eventService.getClubHelferEventSchichtenRef(club.id, event.id).pipe(switchMap((schichten) => {
              if (schichten.length === 0)
                return of([]);
              return combineLatest(schichten.map((schicht) => this.eventService.getClubHelferEventSchichtAttendeesRef(club.id, event.id, schicht.id).pipe(map((attendees) => {
                return __spreadProps(__spreadValues({}, schicht), {
                  // attendees: attendeeDetails,
                  countAttendees: attendees.filter((att) => att.status === true).length,
                  countNeeded: schicht.countNeeded
                });
              }), catchError(() => of(__spreadProps(__spreadValues({}, schicht), {
                // attendees: [],
                countAttendees: 0,
                countNeeded: schicht.neededAttendees
              }))))));
            }), map((schichtenWithDetails) => __spreadProps(__spreadValues({}, event), {
              schichten: schichtenWithDetails,
              countAttendees: schichtenWithDetails.reduce((acc, schicht) => acc + Number(schicht.countAttendees), 0),
              countNeeded: schichtenWithDetails.reduce((acc, schicht) => acc + Number(schicht.countNeeded), 0)
            })), catchError(() => of(__spreadProps(__spreadValues({}, event), {
              schichten: [],
              countAttendees: 0,
              countNeeded: 0
            }))))));
          }),
          map((eventsWithSchichten) => eventsWithSchichten),
          // Flatten events array for each club
          catchError(() => of([]))
          // If error in fetching events, return empty array
        ))).pipe(
          map((clubsEvents) => clubsEvents.flat()),
          // Flatten to get all events across all clubs
          map(
            (allEvents) => allEvents.sort((a, b) => Timestamp.fromMillis(b.date).seconds - Timestamp.fromMillis(a.date).seconds)
            // Sort events by date
          )
        );
      }),
      // tap((results) => console.log("Final results with all events:", results)),
      catchError((err) => {
        console.error("Error in getHelferEvent:", err);
        return of([]);
      })
    );
  }
  toggle(status, event) {
    return __async(this, null, function* () {
      console.log(`Set Status ${status} for user ${this.user.uid} and club ${event.clubId} and training ${event.id}`);
      yield this.eventService.setClubHelferEventAttendeeStatus(status, event.clubId, event.id);
      this.presentToast();
    });
  }
  toggleItem(slidingItem, status, event) {
    return __async(this, null, function* () {
      slidingItem.closeOpened();
      console.log(`Set Status ${status} for user ${this.user.uid} and club ${event.clubId} and training ${event.id}`);
      yield this.eventService.setClubHelferEventAttendeeStatus(status, event.clubId, event.id);
      this.presentToast();
    });
  }
  presentToast() {
    return __async(this, null, function* () {
      const toast = yield this.toastController.create({
        message: yield lastValueFrom(this.translate.get("common.changes__saved")),
        color: "primary",
        duration: 1500,
        position: "top"
      });
      toast.present();
    });
  }
  copyEvent(slidingItem, event) {
    return __async(this, null, function* () {
      slidingItem.closeOpened();
      try {
        const schichten = yield lastValueFrom(this.eventService.getClubHelferEventSchichtenRef(event.clubId, event.id).pipe(take(1), map((schichten2) => schichten2.sort((a, b) => a.timeFrom.localeCompare(b.timeFrom))), catchError((err) => {
          console.error("Error in getHelferEventSchichten:", err);
          return of([]);
        })));
        event["schichten"] = schichten;
        const modal = yield this.modalCtrl.create({
          component: HelferAddPage,
          presentingElement: this.routerOutlet.nativeEl,
          // make sure this is correct
          canDismiss: true,
          showBackdrop: true,
          componentProps: { data: event }
        });
        yield modal.present();
        const { data, role } = yield modal.onWillDismiss();
        if (role === "confirm") {
        }
      } catch (error) {
        console.error("Failed to process event schichten:", error);
      }
    });
  }
  deleteEvent(slidingItem, event) {
    return __async(this, null, function* () {
      slidingItem.closeOpened();
      yield this.eventService.deleteHelferEvent(event.clubId, event.id);
      const toast = yield this.toastController.create({
        message: yield lastValueFrom(this.translate.get("common.success__helfer_deleted")),
        color: "danger",
        duration: 1500,
        position: "top"
      });
      toast.present();
    });
  }
  openEventCreateModal() {
    return __async(this, null, function* () {
      const modal = yield this.modalCtrl.create({
        component: HelferAddPage,
        presentingElement: this.routerOutlet.nativeEl,
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          data: ""
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
  openEventDetailModal(event, isFuture) {
    return __async(this, null, function* () {
      const modal = yield this.modalCtrl.create({
        component: HelferDetailPage,
        presentingElement: this.routerOutlet.nativeEl,
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          data: event,
          isFuture
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
};
_HelferPage.\u0275fac = function HelferPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HelferPage)(\u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(IonRouterOutlet), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(MenuController), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
};
_HelferPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HelferPage, selectors: [["app-helfer"]], standalone: false, decls: 21, vars: 19, consts: [["loading", ""], ["item", ""], [3, "translucent"], ["slot", "start"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["lines", "full", 4, "ngIf"], ["lines", "full"], ["slot", "end"], [4, "ngFor", "ngForOf"], ["type", "button", "detail", "true", 3, "click"], ["color", "primary", "slot", "icon-only", "slot", "start", "name", "list-outline"], ["slot", "icon-only", "name", "calendar-outline"], ["slot", "icon-only", "name", "location-outline"], ["slot", "end", "color", "primary", 4, "ngIf"], ["slot", "end", "color", "warning", 4, "ngIf"], ["slot", "end", "color", "danger", 4, "ngIf"], ["slot", "end", "color", "primary"], ["slot", "end", "color", "warning"], ["slot", "end", "color", "danger"], ["side", "end", 4, "ngIf"], ["side", "end"], ["color", "medium", 3, "click"], ["slot", "icon-only", "name", "copy-outline"], ["color", "danger", 3, "click"], ["slot", "icon-only", "name", "trash"], ["color", "primary"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [3, "click"], ["name", "add-outline"], ["size-lg", "4", "size-md", "6", "size-sm", "6", "size", "12", 4, "ngFor", "ngForOf"], ["size-lg", "4", "size-md", "6", "size-sm", "6", "size", "12"], ["animated", "", 2, "width", "60%"], ["animated", "", 2, "width", "80%"]], template: function HelferPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 2)(1, "ion-toolbar")(2, "ion-buttons", 3);
    \u0275\u0275element(3, "ion-menu-button");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-title");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "ion-content", 4)(8, "ion-header", 5)(9, "ion-toolbar")(10, "ion-title", 6);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, HelferPage_ng_container_13_Template, 3, 2, "ng-container", 7);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275template(15, HelferPage_ng_container_15_Template, 3, 2, "ng-container", 7);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275template(17, HelferPage_ng_container_17_Template, 2, 1, "ng-container", 8);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, HelferPage_ng_template_19_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const loading_r16 = \u0275\u0275reference(20);
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "common.helper"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 11, "common.helper"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(14, 13, ctx.helferList$))("ngIfElse", loading_r16);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(16, 15, ctx.helferListPast$))("ngIfElse", loading_r16);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(18, 17, ctx.clubAdminList$));
  }
}, dependencies: [NgForOf, NgIf, IonBadge, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonMenuButton, IonNote, IonRow, IonSkeletonText, IonTitle, IonToolbar, AsyncPipe, DatePipe, TranslatePipe], encapsulation: 2 });
var HelferPage = _HelferPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HelferPage, { className: "HelferPage", filePath: "src/app/pages/helfer/helfer/helfer.page.ts", lineNumber: 40 });
})();

// src/app/pages/helfer/helfer/helfer-routing.module.ts
var routes = [
  {
    path: "",
    component: HelferPage
  }
];
var _HelferPageRoutingModule = class _HelferPageRoutingModule {
};
_HelferPageRoutingModule.\u0275fac = function HelferPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HelferPageRoutingModule)();
};
_HelferPageRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HelferPageRoutingModule });
_HelferPageRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var HelferPageRoutingModule = _HelferPageRoutingModule;

// src/app/pages/helfer/helfer/helfer.module.ts
var _HelferPageModule = class _HelferPageModule {
};
_HelferPageModule.\u0275fac = function HelferPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HelferPageModule)();
};
_HelferPageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HelferPageModule });
_HelferPageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  IonicModule,
  HelferPageRoutingModule,
  TranslateModule
] });
var HelferPageModule = _HelferPageModule;
export {
  HelferPageModule
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9oZWxmZXIvaGVsZmVyL2hlbGZlci5wYWdlLnRzIiwgInNyYy9hcHAvcGFnZXMvaGVsZmVyL2hlbGZlci9oZWxmZXIucGFnZS5odG1sIiwgInNyYy9hcHAvcGFnZXMvaGVsZmVyL2hlbGZlci9oZWxmZXItcm91dGluZy5tb2R1bGUudHMiLCAic3JjL2FwcC9wYWdlcy9oZWxmZXIvaGVsZmVyL2hlbGZlci5tb2R1bGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIElvbkl0ZW1TbGlkaW5nLFxuICBJb25Sb3V0ZXJPdXRsZXQsXG4gIE1vZGFsQ29udHJvbGxlcixcbiAgTWVudUNvbnRyb2xsZXIsXG4gIFRvYXN0Q29udHJvbGxlcixcbn0gZnJvbSBcIkBpb25pYy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvYXV0aFwiO1xuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbiAgU3Vic2NyaXB0aW9uLFxuICBjYXRjaEVycm9yLFxuICBjb21iaW5lTGF0ZXN0LFxuICBsYXN0VmFsdWVGcm9tLFxuICBtYXAsXG4gIG1lcmdlTWFwLFxuICBvZixcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG59IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBIZWxmZXJFdmVudCB9IGZyb20gXCJzcmMvYXBwL21vZGVscy9ldmVudFwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlL2V2ZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7IEhlbGZlckFkZFBhZ2UgfSBmcm9tIFwiLi4vaGVsZmVyLWFkZC9oZWxmZXItYWRkLnBhZ2VcIjtcbmltcG9ydCB7IFRpbWVzdGFtcCB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IEhlbGZlckRldGFpbFBhZ2UgfSBmcm9tIFwiLi4vaGVsZmVyLWRldGFpbC9oZWxmZXItZGV0YWlsLnBhZ2VcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuaW1wb3J0IHsgQ2x1YiB9IGZyb20gXCJzcmMvYXBwL21vZGVscy9jbHViXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtaGVsZmVyXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9oZWxmZXIucGFnZS5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hlbGZlci5wYWdlLnNjc3NcIl0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgSGVsZmVyUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHNrZWxldG9uID0gbmV3IEFycmF5KDEyKTtcblxuICB1c2VyJDogT2JzZXJ2YWJsZTxVc2VyPjtcbiAgdXNlcjogVXNlcjtcblxuICBoZWxmZXJMaXN0JDogT2JzZXJ2YWJsZTxIZWxmZXJFdmVudFtdPjtcbiAgaGVsZmVyTGlzdFBhc3QkOiBPYnNlcnZhYmxlPEhlbGZlckV2ZW50W10+O1xuXG4gIGNsdWJBZG1pbkxpc3QkOiBPYnNlcnZhYmxlPENsdWJbXT47XG5cbiAgYWN0aXZhdGVkUm91dGVTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdG9hc3RDb250cm9sbGVyOiBUb2FzdENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXJPdXRsZXQ6IElvblJvdXRlck91dGxldCxcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vZGFsQ3RybDogTW9kYWxDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmJTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1lbnVDdHJsOiBNZW51Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICApIHtcbiAgICB0aGlzLm1lbnVDdHJsLmVuYWJsZSh0cnVlLCBcIm1lbnVcIik7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaGVsZmVyTGlzdCQgPSB0aGlzLmdldEhlbGZlckV2ZW50KCk7XG4gICAgdGhpcy5oZWxmZXJMaXN0UGFzdCQgPSB0aGlzLmdldEhlbGZlckV2ZW50UGFzdCgpO1xuXG4gICAgLy9DcmVhdGUgRXZlbnRzLCBIZWxmZXIsIE5ld3NcbiAgICB0aGlzLmNsdWJBZG1pbkxpc3QkID0gdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1YkFkbWluTGlzdCgpO1xuICAgIHRoaXMuaGFuZGxlTmF2aWdhdGlvbkRhdGEoKTtcbiAgfVxuXG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZhdGVkUm91dGVTdWIpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGVTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVOYXZpZ2F0aW9uRGF0YSgpIHtcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlU3ViID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS51cmwuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgaWYgKHRoaXMucm91dGVyLmdldEN1cnJlbnROYXZpZ2F0aW9uKCkuZXh0cmFzICYmIHRoaXMucm91dGVyLmdldEN1cnJlbnROYXZpZ2F0aW9uKCkuZXh0cmFzLnN0YXRlICYmIHRoaXMucm91dGVyLmdldEN1cnJlbnROYXZpZ2F0aW9uKCkuZXh0cmFzLnN0YXRlW1widHlwZVwiXSA9PT0gXCJoZWxmZXJFdmVudFwiKSB7XG4gICAgICAgIGNvbnN0IHB1c2hEYXRhID0gdGhpcy5yb3V0ZXIuZ2V0Q3VycmVudE5hdmlnYXRpb24oKS5leHRyYXMuc3RhdGU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUFVTSERBVEEgXCIgKyBKU09OLnN0cmluZ2lmeShwdXNoRGF0YSkpO1xuICAgICAgICBsZXQgaGVsZmVyRXZlbnQ6IEhlbGZlckV2ZW50ID0ge1xuICAgICAgICAgIGlkOiBcIlwiLFxuICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgICAgbG9jYXRpb246IFwiXCIsXG4gICAgICAgICAgc3RyZWV0QW5kTnVtYmVyOiBcIlwiLFxuICAgICAgICAgIHBvc3RhbENvZGU6IFwiXCIsXG4gICAgICAgICAgY2l0eTogXCJcIixcbiAgICAgICAgICBkYXRlOiBUaW1lc3RhbXAubm93KCksXG4gICAgICAgICAgc3RhcnREYXRlOiBcIlwiLFxuICAgICAgICAgIGVuZERhdGU6IFwiXCIsXG4gICAgICAgICAgdGltZUZyb206IFwiXCIsXG4gICAgICAgICAgdGltZVRvOiBcIlwiLFxuICAgICAgICAgIGNsdWJJZDogXCJcIixcbiAgICAgICAgICBjbHViTmFtZTogXCJcIixcbiAgICAgICAgICBsaW5rX3BvbGw6IFwiXCIsXG4gICAgICAgICAgbGlua193ZWI6IFwiXCIsXG4gICAgICAgICAgc3RhdHVzOiBmYWxzZSxcbiAgICAgICAgICBhdHRlbmRlZXM6IHVuZGVmaW5lZCxcbiAgICAgICAgICBjb3VudEF0dGVuZGVlczogMCxcbiAgICAgICAgICBjb3VudE5lZWRlZDogMCxcbiAgICAgICAgICBjbG9zZWRFdmVudDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vcGVuRXZlbnREZXRhaWxNb2RhbChoZWxmZXJFdmVudCwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGRhdGFcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgaXNDbHViQWRtaW4oY2x1YkFkbWluTGlzdDogYW55W10sIGNsdWJJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNsdWJBZG1pbkxpc3QgJiYgY2x1YkFkbWluTGlzdC5zb21lKGNsdWIgPT4gY2x1Yi5pZCA9PT0gY2x1YklkKTtcbiAgfVxuXG4gIGdldEhlbGZlckV2ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXIkKCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICB0YXAoKHVzZXIpID0+IHtcbiAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKCh1c2VyKSA9PiB7XG4gICAgICAgIGlmICghdXNlcikgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmJTZXJ2aWNlLmdldFVzZXJDbHViUmVmcyh1c2VyKTtcbiAgICAgIH0pLFxuICAgICAgLy8gdGFwKChjbHVicykgPT4gY29uc29sZS5sb2coXCJDbHViczpcIiwgY2x1YnMpKSxcbiAgICAgIG1lcmdlTWFwKChjbHVicykgPT4ge1xuICAgICAgICBpZiAoY2x1YnMubGVuZ3RoID09PSAwKSByZXR1cm4gb2YoW10pO1xuICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgICAgICBjbHVicy5tYXAoKGNsdWIpID0+XG4gICAgICAgICAgICB0aGlzLmV2ZW50U2VydmljZS5nZXRDbHViSGVsZmVyRXZlbnRSZWZzKGNsdWIuaWQpLnBpcGUoXG4gICAgICAgICAgICAgIHN3aXRjaE1hcCgoZXZlbnRzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50cy5sZW5ndGggPT09IDApIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgICAgICAgICAgICBldmVudHMubWFwKChldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudFNlcnZpY2UuZ2V0Q2x1YkhlbGZlckV2ZW50U2NoaWNodGVuUmVmKGNsdWIuaWQsIGV2ZW50LmlkKS5waXBlKFxuICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaE1hcCgoc2NoaWNodGVuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NoaWNodGVuLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hpY2h0ZW4ubWFwKChzY2hpY2h0KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRTZXJ2aWNlLmdldENsdWJIZWxmZXJFdmVudFNjaGljaHRBdHRlbmRlZXNSZWYoY2x1Yi5pZCwgZXZlbnQuaWQsIHNjaGljaHQuaWQpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAoKGF0dGVuZGVlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmNvbnN0IGF0dGVuZGVlRGV0YWlscyA9IGF0dGVuZGVlcy5tYXAoYXR0ZW5kZWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5hdHRlbmRlZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGF0dGVuZGVlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtZWQ6IGF0dGVuZGVlLmNvbmZpcm1lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2NoaWNodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhdHRlbmRlZXM6IGF0dGVuZGVlRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudEF0dGVuZGVlczogYXR0ZW5kZWVzLmZpbHRlcigoYXR0KSA9PiBhdHQuc3RhdHVzID09PSB0cnVlKS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnROZWVkZWQ6IHNjaGljaHQuY291bnROZWVkZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2Yoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zY2hpY2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhdHRlbmRlZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudEF0dGVuZGVlczogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnROZWVkZWQ6IHNjaGljaHQubmVlZGVkQXR0ZW5kZWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgbWFwKChzY2hpY2h0ZW5XaXRoRGV0YWlscykgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NoaWNodGVuOiBzY2hpY2h0ZW5XaXRoRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50QXR0ZW5kZWVzOiBzY2hpY2h0ZW5XaXRoRGV0YWlscy5yZWR1Y2UoKGFjYywgc2NoaWNodCkgPT4gYWNjICsgTnVtYmVyKHNjaGljaHQuY291bnRBdHRlbmRlZXMpLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50TmVlZGVkOiBzY2hpY2h0ZW5XaXRoRGV0YWlscy5yZWR1Y2UoKGFjYywgc2NoaWNodCkgPT4gYWNjICsgTnVtYmVyKHNjaGljaHQuY291bnROZWVkZWQpLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZih7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5ldmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGljaHRlbjogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudEF0dGVuZGVlczogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50TmVlZGVkOiAwXG4gICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbWFwKChldmVudHNXaXRoU2NoaWNodGVuKSA9PiBldmVudHNXaXRoU2NoaWNodGVuKSwgLy8gRmxhdHRlbiBldmVudHMgYXJyYXkgZm9yIGVhY2ggY2x1YlxuICAgICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKFtdKSkgLy8gSWYgZXJyb3IgaW4gZmV0Y2hpbmcgZXZlbnRzLCByZXR1cm4gZW1wdHkgYXJyYXlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICkucGlwZShcbiAgICAgICAgICBtYXAoKGNsdWJzRXZlbnRzKSA9PiBjbHVic0V2ZW50cy5mbGF0KCkpLCAvLyBGbGF0dGVuIHRvIGdldCBhbGwgZXZlbnRzIGFjcm9zcyBhbGwgY2x1YnNcbiAgICAgICAgICBtYXAoKGFsbEV2ZW50cykgPT5cbiAgICAgICAgICAgIGFsbEV2ZW50cy5zb3J0KFxuICAgICAgICAgICAgICAoYSwgYikgPT4gbmV3IERhdGUoYS5kYXRlKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShiLmRhdGUpLmdldFRpbWUoKSAvLyBTb3J0IGV2ZW50cyBieSBkYXRlXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICAvLyB0YXAoKHJlc3VsdHMpID0+IGNvbnNvbGUubG9nKFwiRmluYWwgcmVzdWx0cyB3aXRoIGFsbCBldmVudHM6XCIsIHJlc3VsdHMpKSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gZ2V0SGVsZmVyRXZlbnQ6XCIsIGVycik7XG4gICAgICAgIHJldHVybiBvZihbXSk7IC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBvbiBlcnJvclxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0SGVsZmVyRXZlbnQyKCkge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXIkKCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICB0YXAoKHVzZXIpID0+IHtcbiAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKCh1c2VyKSA9PiB7XG4gICAgICAgIGlmICghdXNlcikgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmJTZXJ2aWNlLmdldFVzZXJDbHViUmVmcyh1c2VyKTtcbiAgICAgIH0pLFxuICAgICAgdGFwKChjbHVicykgPT4gY29uc29sZS5sb2coXCJUZWFtczpcIiwgY2x1YnMpKSxcbiAgICAgIG1lcmdlTWFwKChjbHVicykgPT4ge1xuICAgICAgICBpZiAoY2x1YnMubGVuZ3RoID09PSAwKSByZXR1cm4gb2YoW10pO1xuICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgICAgICBjbHVicy5tYXAoKGNsdWIpID0+XG4gICAgICAgICAgICB0aGlzLmV2ZW50U2VydmljZS5nZXRDbHViSGVsZmVyRXZlbnRSZWZzKGNsdWIuaWQpLnBpcGUoXG4gICAgICAgICAgICAgIHN3aXRjaE1hcCgoY2x1YmV2ZW50cykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjbHViZXZlbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgICAgICAgICAgICAgIGNsdWJldmVudHMubWFwKChldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2x1YkhlbGZlckV2ZW50QXR0ZW5kZWVzUmVmKGNsdWIuaWQsIGV2ZW50LmlkKVxuICAgICAgICAgICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwKChhdHRlbmRlZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlckF0dGVuZGVlID0gYXR0ZW5kZWVzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGF0dCkgPT4gYXR0LmlkID09IHRoaXMudXNlci51aWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gdXNlckF0dGVuZGVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB1c2VyQXR0ZW5kZWUuc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsOyAvLyBkZWZhdWx0IHRvIGZhbHNlIGlmIHVzZXIgaXMgbm90IGZvdW5kIGluIGF0dGVuZGVlcyBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50QXR0ZW5kZWVzOiBhdHRlbmRlZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGF0dCkgPT4gYXR0LnN0YXR1cyA9PSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2x1YklkOiBjbHViLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9mKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5ldmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbmRlZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudEF0dGVuZGVlczogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHViSWQ6IGNsdWIuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApIC8vIElmIGVycm9yLCByZXR1cm4gZ2FtZSB3aXRoIGVtcHR5IGF0dGVuZGVlc1xuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbWFwKChldmVudHNXaXRoQXR0ZW5kZWVzKSA9PiBldmVudHNXaXRoQXR0ZW5kZWVzKSwgLy8gRmxhdHRlbiBldmVudHMgYXJyYXkgZm9yIGVhY2ggY2x1YlxuICAgICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKFtdKSkgLy8gSWYgZXJyb3IgaW4gZmV0Y2hpbmcgZXZlbnRzLCByZXR1cm4gZW1wdHkgYXJyYXlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICkucGlwZShcbiAgICAgICAgICBtYXAoKGNsdWJzZXZlbnRzKSA9PiBjbHVic2V2ZW50cy5mbGF0KCkpLCAvLyBGbGF0dGVuIHRvIGdldCBhbGwgZXZlbnRzIGFjcm9zcyBhbGwgY2x1YnNcbiAgICAgICAgICBtYXAoKGFsbEV2ZW50cykgPT5cbiAgICAgICAgICAgIGFsbEV2ZW50cy5zb3J0KChhLCBiKSA9PlxuICAgICAgICAgICAgICBUaW1lc3RhbXAuZnJvbU1pbGxpcyhhLmRhdGUpLnNlY29uZHMgLSBUaW1lc3RhbXAuZnJvbU1pbGxpcyhiLmRhdGUpLnNlY29uZHNcbiAgICAgICAgICAgICkgLy8gU29ydCBldmVudHMgYnkgZGF0ZVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgLy8gdGFwKChyZXN1bHRzKSA9PiBjb25zb2xlLmxvZyhcIkZpbmFsIHJlc3VsdHMgd2l0aCBhbGwgZXZlbnRzOlwiLCByZXN1bHRzKSksXG4gICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGdldFRlYW1ldmVudHNVcGNvbWluZzpcIiwgZXJyKTtcbiAgICAgICAgcmV0dXJuIG9mKFtdKTsgLy8gUmV0dXJuIGFuIGVtcHR5IGFycmF5IG9uIGVycm9yXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRIZWxmZXJFdmVudFBhc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlciQoKS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHRhcCgodXNlcikgPT4ge1xuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKHVzZXIpID0+IHtcbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gb2YoW10pO1xuICAgICAgICByZXR1cm4gdGhpcy5mYlNlcnZpY2UuZ2V0VXNlckNsdWJSZWZzKHVzZXIpO1xuICAgICAgfSksXG4gICAgICAvLyB0YXAoKGNsdWJzKSA9PiBjb25zb2xlLmxvZyhcIlRlYW1zOlwiLCBjbHVicykpLFxuICAgICAgbWVyZ2VNYXAoKGNsdWJzKSA9PiB7XG4gICAgICAgIGlmIChjbHVicy5sZW5ndGggPT09IDApIHJldHVybiBvZihbXSk7XG4gICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFxuICAgICAgICAgIGNsdWJzLm1hcCgoY2x1YikgPT5cbiAgICAgICAgICAgIHRoaXMuZXZlbnRTZXJ2aWNlLmdldENsdWJIZWxmZXJFdmVudFBhc3RSZWZzKGNsdWIuaWQpLnBpcGUoXG4gICAgICAgICAgICAgIHN3aXRjaE1hcCgoZXZlbnRzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50cy5sZW5ndGggPT09IDApIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgICAgICAgICAgICBldmVudHMubWFwKChldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudFNlcnZpY2UuZ2V0Q2x1YkhlbGZlckV2ZW50U2NoaWNodGVuUmVmKGNsdWIuaWQsIGV2ZW50LmlkKS5waXBlKFxuICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaE1hcCgoc2NoaWNodGVuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NoaWNodGVuLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hpY2h0ZW4ubWFwKChzY2hpY2h0KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRTZXJ2aWNlLmdldENsdWJIZWxmZXJFdmVudFNjaGljaHRBdHRlbmRlZXNSZWYoY2x1Yi5pZCwgZXZlbnQuaWQsIHNjaGljaHQuaWQpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAoKGF0dGVuZGVlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmNvbnN0IGF0dGVuZGVlRGV0YWlscyA9IGF0dGVuZGVlcy5tYXAoYXR0ZW5kZWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5hdHRlbmRlZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGF0dGVuZGVlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtZWQ6IGF0dGVuZGVlLmNvbmZpcm1lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2NoaWNodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhdHRlbmRlZXM6IGF0dGVuZGVlRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudEF0dGVuZGVlczogYXR0ZW5kZWVzLmZpbHRlcigoYXR0KSA9PiBhdHQuc3RhdHVzID09PSB0cnVlKS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnROZWVkZWQ6IHNjaGljaHQuY291bnROZWVkZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2Yoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zY2hpY2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhdHRlbmRlZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudEF0dGVuZGVlczogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnROZWVkZWQ6IHNjaGljaHQubmVlZGVkQXR0ZW5kZWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgbWFwKChzY2hpY2h0ZW5XaXRoRGV0YWlscykgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NoaWNodGVuOiBzY2hpY2h0ZW5XaXRoRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50QXR0ZW5kZWVzOiBzY2hpY2h0ZW5XaXRoRGV0YWlscy5yZWR1Y2UoKGFjYywgc2NoaWNodCkgPT4gYWNjICsgTnVtYmVyKHNjaGljaHQuY291bnRBdHRlbmRlZXMpLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50TmVlZGVkOiBzY2hpY2h0ZW5XaXRoRGV0YWlscy5yZWR1Y2UoKGFjYywgc2NoaWNodCkgPT4gYWNjICsgTnVtYmVyKHNjaGljaHQuY291bnROZWVkZWQpLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZih7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5ldmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGljaHRlbjogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudEF0dGVuZGVlczogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50TmVlZGVkOiAwXG4gICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbWFwKChldmVudHNXaXRoU2NoaWNodGVuKSA9PiBldmVudHNXaXRoU2NoaWNodGVuKSwgLy8gRmxhdHRlbiBldmVudHMgYXJyYXkgZm9yIGVhY2ggY2x1YlxuICAgICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKFtdKSkgLy8gSWYgZXJyb3IgaW4gZmV0Y2hpbmcgZXZlbnRzLCByZXR1cm4gZW1wdHkgYXJyYXlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICkucGlwZShcbiAgICAgICAgICBtYXAoKGNsdWJzRXZlbnRzKSA9PiBjbHVic0V2ZW50cy5mbGF0KCkpLCAvLyBGbGF0dGVuIHRvIGdldCBhbGwgZXZlbnRzIGFjcm9zcyBhbGwgY2x1YnNcbiAgICAgICAgICBtYXAoKGFsbEV2ZW50cykgPT5cbiAgICAgICAgICAgIGFsbEV2ZW50cy5zb3J0KChhLCBiKSA9PlxuICAgICAgICAgICAgICBUaW1lc3RhbXAuZnJvbU1pbGxpcyhiLmRhdGUpLnNlY29uZHMgLSBUaW1lc3RhbXAuZnJvbU1pbGxpcyhhLmRhdGUpLnNlY29uZHNcbiAgICAgICAgICAgICkgLy8gU29ydCBldmVudHMgYnkgZGF0ZVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgLy8gdGFwKChyZXN1bHRzKSA9PiBjb25zb2xlLmxvZyhcIkZpbmFsIHJlc3VsdHMgd2l0aCBhbGwgZXZlbnRzOlwiLCByZXN1bHRzKSksXG4gICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGdldEhlbGZlckV2ZW50OlwiLCBlcnIpO1xuICAgICAgICByZXR1cm4gb2YoW10pOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgb24gZXJyb3JcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICBhc3luYyB0b2dnbGUoc3RhdHVzOiBib29sZWFuLCBldmVudDogSGVsZmVyRXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBTZXQgU3RhdHVzICR7c3RhdHVzfSBmb3IgdXNlciAke3RoaXMudXNlci51aWR9IGFuZCBjbHViICR7ZXZlbnQuY2x1YklkfSBhbmQgdHJhaW5pbmcgJHtldmVudC5pZH1gXG4gICAgKTtcbiAgICBhd2FpdCB0aGlzLmV2ZW50U2VydmljZS5zZXRDbHViSGVsZmVyRXZlbnRBdHRlbmRlZVN0YXR1cyhcbiAgICAgIHN0YXR1cyxcbiAgICAgIGV2ZW50LmNsdWJJZCxcbiAgICAgIGV2ZW50LmlkXG4gICAgKTtcbiAgICB0aGlzLnByZXNlbnRUb2FzdCgpO1xuICB9XG5cbiAgYXN5bmMgdG9nZ2xlSXRlbShcbiAgICBzbGlkaW5nSXRlbTogSW9uSXRlbVNsaWRpbmcsXG4gICAgc3RhdHVzOiBib29sZWFuLFxuICAgIGV2ZW50OiBIZWxmZXJFdmVudFxuICApIHtcbiAgICBzbGlkaW5nSXRlbS5jbG9zZU9wZW5lZCgpO1xuXG4gICAgY29uc29sZS5sb2coXG4gICAgICBgU2V0IFN0YXR1cyAke3N0YXR1c30gZm9yIHVzZXIgJHt0aGlzLnVzZXIudWlkfSBhbmQgY2x1YiAke2V2ZW50LmNsdWJJZH0gYW5kIHRyYWluaW5nICR7ZXZlbnQuaWR9YFxuICAgICk7XG4gICAgYXdhaXQgdGhpcy5ldmVudFNlcnZpY2Uuc2V0Q2x1YkhlbGZlckV2ZW50QXR0ZW5kZWVTdGF0dXMoXG4gICAgICBzdGF0dXMsXG4gICAgICBldmVudC5jbHViSWQsXG4gICAgICBldmVudC5pZFxuICAgICk7XG4gICAgdGhpcy5wcmVzZW50VG9hc3QoKTtcbiAgfVxuXG4gIGFzeW5jIHByZXNlbnRUb2FzdCgpIHtcbiAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5jaGFuZ2VzX19zYXZlZFwiKSksXG4gICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgIH0pO1xuICAgIHRvYXN0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIGNvcHlFdmVudChzbGlkaW5nSXRlbTogSW9uSXRlbVNsaWRpbmcsIGV2ZW50KSB7XG4gICAgc2xpZGluZ0l0ZW0uY2xvc2VPcGVuZWQoKTtcbiAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNjaGljaHRlbiA9IGF3YWl0IGxhc3RWYWx1ZUZyb20oXG4gICAgICAgIHRoaXMuZXZlbnRTZXJ2aWNlLmdldENsdWJIZWxmZXJFdmVudFNjaGljaHRlblJlZihldmVudC5jbHViSWQsIGV2ZW50LmlkKS5waXBlKFxuICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgbWFwKChzY2hpY2h0ZW4pID0+IHNjaGljaHRlbi5zb3J0KChhLCBiKSA9PiBhLnRpbWVGcm9tLmxvY2FsZUNvbXBhcmUoYi50aW1lRnJvbSkpKSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBnZXRIZWxmZXJFdmVudFNjaGljaHRlbjpcIiwgZXJyKTtcbiAgICAgICAgICAgIHJldHVybiBvZihbXSk7IC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBvbiBlcnJvclxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICk7XG4gIFxuICAgICAgZXZlbnRbXCJzY2hpY2h0ZW5cIl0gPSBzY2hpY2h0ZW47XG4gIFxuICAgICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoe1xuICAgICAgICBjb21wb25lbnQ6IEhlbGZlckFkZFBhZ2UsXG4gICAgICAgIHByZXNlbnRpbmdFbGVtZW50OiB0aGlzLnJvdXRlck91dGxldC5uYXRpdmVFbCwgLy8gbWFrZSBzdXJlIHRoaXMgaXMgY29ycmVjdFxuICAgICAgICBjYW5EaXNtaXNzOiB0cnVlLFxuICAgICAgICBzaG93QmFja2Ryb3A6IHRydWUsXG4gICAgICAgIGNvbXBvbmVudFByb3BzOiB7IGRhdGE6IGV2ZW50IH0sXG4gICAgICB9KTtcbiAgXG4gICAgICBhd2FpdCBtb2RhbC5wcmVzZW50KCk7XG4gIFxuICAgICAgY29uc3QgeyBkYXRhLCByb2xlIH0gPSBhd2FpdCBtb2RhbC5vbldpbGxEaXNtaXNzKCk7XG4gIFxuICAgICAgaWYgKHJvbGUgPT09IFwiY29uZmlybVwiKSB7XG4gICAgICAgIC8vIEhhbmRsZSBjb25maXJtIGFjdGlvbiBpZiBuZWNlc3NhcnlcbiAgICAgIH1cbiAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gcHJvY2VzcyBldmVudCBzY2hpY2h0ZW46XCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBkZWxldGVFdmVudChzbGlkaW5nSXRlbTogSW9uSXRlbVNsaWRpbmcsIGV2ZW50KSB7XG4gICAgc2xpZGluZ0l0ZW0uY2xvc2VPcGVuZWQoKTtcbiAgICBhd2FpdCB0aGlzLmV2ZW50U2VydmljZS5kZWxldGVIZWxmZXJFdmVudChldmVudC5jbHViSWQsIGV2ZW50LmlkKTtcbiAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5zdWNjZXNzX19oZWxmZXJfZGVsZXRlZFwiKSksXG4gICAgICBjb2xvcjogXCJkYW5nZXJcIixcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgfSk7XG4gICAgdG9hc3QucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgb3BlbkV2ZW50Q3JlYXRlTW9kYWwoKSB7XG4gICAgLy8gY29uc3QgcHJlc2VudGluZ0VsZW1lbnQgPSBhd2FpdCB0aGlzLm1vZGFsQ3RybC5nZXRUb3AoKTtcbiAgICBjb25zdCBtb2RhbCA9IGF3YWl0IHRoaXMubW9kYWxDdHJsLmNyZWF0ZSh7XG4gICAgICBjb21wb25lbnQ6IEhlbGZlckFkZFBhZ2UsXG4gICAgICBwcmVzZW50aW5nRWxlbWVudDogdGhpcy5yb3V0ZXJPdXRsZXQubmF0aXZlRWwsXG4gICAgICBjYW5EaXNtaXNzOiB0cnVlLFxuICAgICAgc2hvd0JhY2tkcm9wOiB0cnVlLFxuICAgICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgZGF0YTogXCJcIixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgbW9kYWwucHJlc2VudCgpO1xuXG4gICAgY29uc3QgeyBkYXRhLCByb2xlIH0gPSBhd2FpdCBtb2RhbC5vbldpbGxEaXNtaXNzKCk7XG5cbiAgICBpZiAocm9sZSA9PT0gXCJjb25maXJtXCIpIHtcbiAgICB9XG4gIH1cblxuICBhc3luYyBvcGVuRXZlbnREZXRhaWxNb2RhbChldmVudDogSGVsZmVyRXZlbnQsIGlzRnV0dXJlOiBib29sZWFuKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJPcGVuIE1vZGFsXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGV2ZW50KSk7XG4gICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoe1xuICAgICAgY29tcG9uZW50OiBIZWxmZXJEZXRhaWxQYWdlLFxuICAgICAgcHJlc2VudGluZ0VsZW1lbnQ6IHRoaXMucm91dGVyT3V0bGV0Lm5hdGl2ZUVsLFxuICAgICAgY2FuRGlzbWlzczogdHJ1ZSxcbiAgICAgIHNob3dCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIGRhdGE6IGV2ZW50LFxuICAgICAgICBpc0Z1dHVyZTogaXNGdXR1cmUsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIG1vZGFsLnByZXNlbnQoKTtcblxuICAgIGNvbnN0IHsgZGF0YSwgcm9sZSB9ID0gYXdhaXQgbW9kYWwub25XaWxsRGlzbWlzcygpO1xuXG4gICAgaWYgKHJvbGUgPT09IFwiY29uZmlybVwiKSB7XG4gICAgfVxuICB9XG59XG4iLCAiPGlvbi1oZWFkZXIgW3RyYW5zbHVjZW50XT1cInRydWVcIj5cbiAgPGlvbi10b29sYmFyPlxuICAgIDxpb24tYnV0dG9ucyBzbG90PVwic3RhcnRcIj5cbiAgICAgIDxpb24tbWVudS1idXR0b24+PC9pb24tbWVudS1idXR0b24+XG4gICAgPC9pb24tYnV0dG9ucz5cbiAgICA8aW9uLXRpdGxlPnt7XCJjb21tb24uaGVscGVyXCIgfCB0cmFuc2xhdGV9fTwvaW9uLXRpdGxlPlxuICAgIDwhLS0gIDxpb24tYnV0dG9ucyBzbG90PVwiZW5kXCI+XG4gICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwib3BlbkZpbHRlcigkZXZlbnQpXCI+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cImZpbHRlclwiPjwvaW9uLWljb24+XG4gICAgICA8L2lvbi1idXR0b24+XG4gICAgPC9pb24tYnV0dG9ucz4tLT5cbiAgPC9pb24tdG9vbGJhcj5cbjwvaW9uLWhlYWRlcj5cblxuPGlvbi1jb250ZW50IFtmdWxsc2NyZWVuXT1cInRydWVcIj5cbiAgPGlvbi1oZWFkZXIgY29sbGFwc2U9XCJjb25kZW5zZVwiPlxuICAgIDxpb24tdG9vbGJhcj5cbiAgICAgIDxpb24tdGl0bGUgc2l6ZT1cImxhcmdlXCI+e3tcImNvbW1vbi5oZWxwZXJcIiB8IHRyYW5zbGF0ZX19PC9pb24tdGl0bGU+XG4gICAgPC9pb24tdG9vbGJhcj5cbiAgPC9pb24taGVhZGVyPlxuXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJoZWxmZXJMaXN0JCB8IGFzeW5jIGFzIGV2ZW50c0xpc3Q7IGVsc2UgbG9hZGluZ1wiPlxuICAgIDxpb24tbGlzdCAqbmdJZj1cImV2ZW50c0xpc3QubGVuZ3RoID4gMFwiIGxpbmVzPVwiZnVsbFwiPlxuICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgPGlvbi1sYWJlbD57e1wiaGVsZmVyLnVwY29tbWluZ19faGVscGVyX2V2ZW50XCIgfCB0cmFuc2xhdGV9fTwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1sYWJlbCBzbG90PVwic3RhcnRcIj5cbiAgICAgICAgICA8cD57e1wiY29tbW9uLnN0YXR1c1wiIHwgdHJhbnNsYXRlfX08L3A+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICA8aW9uLWxhYmVsIHNsb3Q9XCJlbmRcIj5cbiAgICAgICAgICA8cD57e1wiY29tbW9uLnBhcnRpY2lwYW50XCIgfCB0cmFuc2xhdGV9fTwvcD5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8aW9uLWl0ZW0tc2xpZGluZyAjaXRlbSAqbmdGb3I9XCJsZXQgZXZlbnQgb2YgZXZlbnRzTGlzdFwiPlxuICAgICAgICA8aW9uLWl0ZW1cbiAgICAgICAgICAoY2xpY2spPVwib3BlbkV2ZW50RGV0YWlsTW9kYWwoZXZlbnQsIHRydWUpXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBkZXRhaWw9XCJ0cnVlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpb24taWNvblxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHNsb3Q9XCJpY29uLW9ubHlcIlxuICAgICAgICAgICAgc2xvdD1cInN0YXJ0XCJcbiAgICAgICAgICAgIG5hbWU9XCJsaXN0LW91dGxpbmVcIlxuICAgICAgICAgID48L2lvbi1pY29uPlxuICAgICAgICAgIDwhLS08aW9uLWljb25cbiAgICAgICAgICAgICpuZ0lmPVwiZXZlbnQuc3RhdHVzID09PSBudWxsXCJcbiAgICAgICAgICAgIHNsb3Q9XCJpY29uLW9ubHlcIlxuICAgICAgICAgICAgY29sb3I9XCJ3YXJuaW5nXCJcbiAgICAgICAgICAgIHNsb3Q9XCJzdGFydFwiXG4gICAgICAgICAgICBuYW1lPVwiaGVscC1jaXJjbGVcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZSh0cnVlLCBldmVudClcIlxuICAgICAgICAgID48L2lvbi1pY29uPlxuICAgICAgICAgIDxpb24taWNvblxuICAgICAgICAgICAgKm5nSWY9XCJldmVudC5zdGF0dXMgPT09IGZhbHNlXCJcbiAgICAgICAgICAgIHNsb3Q9XCJpY29uLW9ubHlcIlxuICAgICAgICAgICAgY29sb3I9XCJkYW5nZXJcIlxuICAgICAgICAgICAgc2xvdD1cInN0YXJ0XCJcbiAgICAgICAgICAgIG5hbWU9XCJjbG9zZS1jaXJjbGVcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZSggdHJ1ZSwgZXZlbnQpXCJcbiAgICAgICAgICA+PC9pb24taWNvbj5cbiAgICAgICAgICA8aW9uLWljb25cbiAgICAgICAgICAgICpuZ0lmPVwiZXZlbnQuc3RhdHVzID09PSB0cnVlXCJcbiAgICAgICAgICAgIHNsb3Q9XCJpY29uLW9ubHlcIlxuICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgIHNsb3Q9XCJzdGFydFwiXG4gICAgICAgICAgICBuYW1lPVwiY2hlY2ttYXJrLWNpcmNsZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlKGZhbHNlLCBldmVudClcIlxuICAgICAgICAgID48L2lvbi1pY29uPi0tPlxuICAgICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgICA8aDI+e3tldmVudC5uYW1lfX08L2gyPlxuICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJjYWxlbmRhci1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAge3tldmVudC5kYXRlLnRvRGF0ZSgpIHwgZGF0ZTonZGQuTU0uWVlZWSAnfX0ge3tldmVudC50aW1lRnJvbSB8XG4gICAgICAgICAgICAgIGRhdGU6J0hIOm1tJ319IFVociAtIHt7ZXZlbnQudGltZVRvIHwgZGF0ZTonSEg6bW0nfX0gVWhyXG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJsb2NhdGlvbi1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAge3tldmVudC5sb2NhdGlvbn19IHt7ZXZlbnQuc3RyZWV0QW5kTnVtYmVyfX0ge3tldmVudC5jaXR5fX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImV2ZW50LnNjaGljaHRlbi5sZW5ndGg+MFwiID5cbiAgICAgICAgICAgIDxpb24tYmFkZ2UgKm5nSWY9XCJldmVudC5jb3VudEF0dGVuZGVlcyA+PSBldmVudC5jb3VudE5lZWRlZFwiIHNsb3Q9XCJlbmRcIiBjb2xvcj1cInByaW1hcnlcIj57e2V2ZW50LmNvdW50QXR0ZW5kZWVzfX0gLyB7e2V2ZW50LmNvdW50TmVlZGVkfX08L2lvbi1iYWRnZT4gIFxuICAgICAgICAgICAgPGlvbi1iYWRnZSAqbmdJZj1cImV2ZW50LmNvdW50QXR0ZW5kZWVzIDwgZXZlbnQuY291bnROZWVkZWQgJiYgZXZlbnQuY291bnRBdHRlbmRlZXMgIT09IDBcIiBzbG90PVwiZW5kXCIgY29sb3I9XCJ3YXJuaW5nXCI+e3tldmVudC5jb3VudEF0dGVuZGVlc319IC8ge3tldmVudC5jb3VudE5lZWRlZH19PC9pb24tYmFkZ2U+ICBcbiAgICAgICAgICAgIDxpb24tYmFkZ2UgKm5nSWY9XCJldmVudC5jb3VudEF0dGVuZGVlcyA8IGV2ZW50LmNvdW50TmVlZGVkICYmIGV2ZW50LmNvdW50QXR0ZW5kZWVzID09PSAwXCIgc2xvdD1cImVuZFwiIGNvbG9yPVwiZGFuZ2VyXCI+e3tldmVudC5jb3VudEF0dGVuZGVlc319IC8ge3tldmVudC5jb3VudE5lZWRlZH19PC9pb24tYmFkZ2U+ICBcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICBcbiAgICAgICAgPC9pb24taXRlbT5cblxuICAgICAgICA8IS0tPGlvbi1pdGVtLW9wdGlvbnMgc2lkZT1cInN0YXJ0XCI+XG4gICAgICAgICAgPGlvbi1pdGVtLW9wdGlvblxuICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICpuZ0lmPVwiZXZlbnQuc3RhdHVzID09PSBmYWxzZSB8fCBldmVudC5zdGF0dXMgPT09IG51bGxcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZUl0ZW0oaXRlbSwgdHJ1ZSwgZXZlbnQpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJjaGVja21hcmstY2lyY2xlXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbj5cbiAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9uXG4gICAgICAgICAgICBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgICAqbmdJZj1cImV2ZW50LnN0YXR1cyA9PT0gdHJ1ZSB8fCBldmVudC5zdGF0dXMgPT09IG51bGxcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZUl0ZW0oaXRlbSwgZmFsc2UsIGV2ZW50KVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwiY2xvc2UtY2lyY2xlXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbj5cbiAgICAgICAgPC9pb24taXRlbS1vcHRpb25zPi0tPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbHViQWRtaW5MaXN0JCB8IGFzeW5jIGFzIGNsdWJBZG1pbkxpc3RcIj5cbiAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9ucyBzaWRlPVwiZW5kXCIgKm5nSWY9XCJpc0NsdWJBZG1pbihjbHViQWRtaW5MaXN0LCBldmVudC5jbHViSWQpXCI+XG4gICAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9uIGNvbG9yPVwibWVkaXVtXCIgKGNsaWNrKT1cImNvcHlFdmVudChpdGVtLCBldmVudClcIj5cbiAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwiY29weS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9uPlxuXG4gICAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9uIGNvbG9yPVwiZGFuZ2VyXCIgKGNsaWNrKT1cImRlbGV0ZUV2ZW50KGl0ZW0sIGV2ZW50KVwiPlxuICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJ0cmFzaFwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbj5cbiAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbnM+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9pb24taXRlbS1zbGlkaW5nPlxuICAgIDwvaW9uLWxpc3Q+XG5cbiAgICA8aW9uLWxpc3QgKm5nSWY9XCJldmVudHNMaXN0Lmxlbmd0aD09MFwiPlxuICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgPGlvbi1sYWJlbD57e1wiaGVsZmVyLnVwY29tbWluZ19faGVscGVyX2V2ZW50XCIgfCB0cmFuc2xhdGV9fTwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24tbm90ZT4ge3tcImNvbW1vbi5ub19ldmVudF9fZm91bmRcIiB8IHRyYW5zbGF0ZX19IDwvaW9uLW5vdGU+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgIDwvaW9uLWxpc3Q+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJoZWxmZXJMaXN0UGFzdCQgfCBhc3luYyBhcyBldmVudHNMaXN0UGFzdDsgZWxzZSBsb2FkaW5nXCI+XG4gICAgPGlvbi1saXN0ICpuZ0lmPVwiZXZlbnRzTGlzdFBhc3QubGVuZ3RoID4gMFwiIGxpbmVzPVwiZnVsbFwiPlxuICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgPGlvbi1sYWJlbD57e1wiaGVsZmVyLnBhc3RfX2hlbHBlcl9ldmVudHNcIiB8IHRyYW5zbGF0ZX19PC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1sYWJlbCBzbG90PVwic3RhcnRcIj5cbiAgICAgICAgICA8cD57e1wiY29tbW9uLnN0YXR1c1wiIHwgdHJhbnNsYXRlfX08L3A+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICA8aW9uLWxhYmVsIHNsb3Q9XCJlbmRcIj5cbiAgICAgICAgICA8cD57e1wiY29tbW9uLnBhcnRpY2lwYW50XCIgfCB0cmFuc2xhdGV9fTwvcD5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgICAgPGlvbi1pdGVtLXNsaWRpbmcgI2l0ZW0gKm5nRm9yPVwibGV0IGV2ZW50IG9mIGV2ZW50c0xpc3RQYXN0XCI+XG4gICAgICAgIDxpb24taXRlbVxuICAgICAgICAgIChjbGljayk9XCJvcGVuRXZlbnREZXRhaWxNb2RhbChldmVudCwgZmFsc2UpXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBkZXRhaWw9XCJ0cnVlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpb24taWNvblxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHNsb3Q9XCJpY29uLW9ubHlcIlxuICAgICAgICAgICAgc2xvdD1cInN0YXJ0XCJcbiAgICAgICAgICAgIG5hbWU9XCJsaXN0LW91dGxpbmVcIlxuICAgICAgICAgID48L2lvbi1pY29uPlxuICAgICAgICAgIDwhLS08aW9uLWljb25cbiAgICAgICAgICAgICpuZ0lmPVwiZXZlbnQuc3RhdHVzID09PSBudWxsXCJcbiAgICAgICAgICAgIHNsb3Q9XCJpY29uLW9ubHlcIlxuICAgICAgICAgICAgY29sb3I9XCJ3YXJuaW5nXCJcbiAgICAgICAgICAgIHNsb3Q9XCJzdGFydFwiXG4gICAgICAgICAgICBuYW1lPVwiaGVscC1jaXJjbGVcIlxuICAgICAgICAgID48L2lvbi1pY29uPlxuICAgICAgICAgIDxpb24taWNvblxuICAgICAgICAgICAgKm5nSWY9XCJldmVudC5zdGF0dXMgPT09IGZhbHNlXCJcbiAgICAgICAgICAgIHNsb3Q9XCJpY29uLW9ubHlcIlxuICAgICAgICAgICAgY29sb3I9XCJkYW5nZXJcIlxuICAgICAgICAgICAgc2xvdD1cInN0YXJ0XCJcbiAgICAgICAgICAgIG5hbWU9XCJjbG9zZS1jaXJjbGVcIlxuICAgICAgICAgID48L2lvbi1pY29uPlxuICAgICAgICAgIDxpb24taWNvblxuICAgICAgICAgICAgKm5nSWY9XCJldmVudC5zdGF0dXMgPT09IHRydWVcIlxuICAgICAgICAgICAgc2xvdD1cImljb24tb25seVwiXG4gICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgc2xvdD1cInN0YXJ0XCJcbiAgICAgICAgICAgIG5hbWU9XCJjaGVja21hcmstY2lyY2xlXCJcbiAgICAgICAgICA+PC9pb24taWNvbj4tLT5cbiAgICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgICAgPGgyPnt7ZXZlbnQubmFtZX19PC9oMj5cbiAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwiY2FsZW5kYXItb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgIHt7ZXZlbnQuZGF0ZS50b0RhdGUoKSB8IGRhdGU6J2RkLk1NLllZWVkgJ319IHt7ZXZlbnQudGltZUZyb20gfFxuICAgICAgICAgICAgICBkYXRlOidISDptbSd9fSBVaHIgLSB7e2V2ZW50LnRpbWVUbyB8IGRhdGU6J0hIOm1tJ319IFVoclxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwibG9jYXRpb24tb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgIHt7ZXZlbnQubG9jYXRpb259fSB7e2V2ZW50LnN0cmVldEFuZE51bWJlcn19IHt7ZXZlbnQuY2l0eX19XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgIDxpb24tbm90ZSBzbG90PVwiZW5kXCI+XG4gICAgICAgICAgICA8aW9uLWJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPnt7ZXZlbnQuY291bnRBdHRlbmRlZXN9fSAvIHt7ZXZlbnQuY291bnROZWVkZWR9fTwvaW9uLWJhZGdlPlxuICAgICAgICAgIDwvaW9uLW5vdGU+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbHViQWRtaW5MaXN0JCB8IGFzeW5jIGFzIGNsdWJBZG1pbkxpc3RcIj5cbiAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9ucyBzaWRlPVwiZW5kXCIgKm5nSWY9XCJpc0NsdWJBZG1pbihjbHViQWRtaW5MaXN0LCBldmVudC5jbHViSWQpXCI+XG4gICAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9uIGNvbG9yPVwibWVkaXVtXCIgKGNsaWNrKT1cImNvcHlFdmVudChpdGVtLCBldmVudClcIj5cbiAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwiY29weS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9uPlxuXG4gICAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9uIGNvbG9yPVwiZGFuZ2VyXCIgKGNsaWNrKT1cImRlbGV0ZUV2ZW50KGl0ZW0sIGV2ZW50KVwiPlxuICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJ0cmFzaFwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbj5cbiAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbnM+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9pb24taXRlbS1zbGlkaW5nPlxuICAgIDwvaW9uLWxpc3Q+XG4gICAgPGlvbi1saXN0ICpuZ0lmPVwiZXZlbnRzTGlzdFBhc3QubGVuZ3RoPT0wXCI+XG4gICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICA8aW9uLWxhYmVsPnt7XCJoZWxmZXIucGFzdF9faGVscGVyX2V2ZW50c1wiIHwgdHJhbnNsYXRlfX08L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgIDxpb24tbm90ZT4ge3tcImNvbW1vbi5ub19ldmVudF9fZm91bmRcIiB8IHRyYW5zbGF0ZX19IDwvaW9uLW5vdGU+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cbiAgICA8L2lvbi1saXN0PlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2x1YkFkbWluTGlzdCQgfCBhc3luYyBhcyBjbHViQWRtaW5MaXN0XCI+XG4gICAgPGlvbi1mYWJcbiAgICAqbmdJZj1cImNsdWJBZG1pbkxpc3QubGVuZ3RoID4gMFwiXG4gICAgICB2ZXJ0aWNhbD1cImJvdHRvbVwiXG4gICAgICBob3Jpem9udGFsPVwiZW5kXCJcbiAgICAgIHNsb3Q9XCJmaXhlZFwiXG4gICAgPlxuICAgICAgPGlvbi1mYWItYnV0dG9uIChjbGljayk9XCJvcGVuRXZlbnRDcmVhdGVNb2RhbCgpXCI+XG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwiYWRkLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgPC9pb24tZmFiLWJ1dHRvbj5cbiAgICA8L2lvbi1mYWI+XG4gIDwvbmctY29udGFpbmVyPlxuPC9pb24tY29udGVudD5cblxuPG5nLXRlbXBsYXRlICNsb2FkaW5nPlxuICA8aW9uLWxpc3QgKm5nSWY9XCJsb2FkaW5nXCI+XG4gICAgPGlvbi1ncmlkPlxuICAgICAgPGlvbi1yb3c+XG4gICAgICAgIDxpb24tY29sXG4gICAgICAgICAgc2l6ZS1sZz1cIjRcIlxuICAgICAgICAgIHNpemUtbWQ9XCI2XCJcbiAgICAgICAgICBzaXplLXNtPVwiNlwiXG4gICAgICAgICAgc2l6ZT1cIjEyXCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBza2VsZXRvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW9uLWNhcmQ+XG4gICAgICAgICAgICA8aW9uLWNhcmQtaGVhZGVyPlxuICAgICAgICAgICAgICA8aW9uLWNhcmQtc3VidGl0bGU+XG4gICAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICAgICAgICBhbmltYXRlZFxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogNjAlXCJcbiAgICAgICAgICAgICAgICA+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPC9pb24tY2FyZC1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgPGlvbi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZWRcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDgwJVwiXG4gICAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDwvaW9uLWNhcmQtdGl0bGU+XG4gICAgICAgICAgICA8L2lvbi1jYXJkLWhlYWRlcj5cblxuICAgICAgICAgICAgPGlvbi1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgICAgIGFuaW1hdGVkXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogODAlXCJcbiAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgICAgIGFuaW1hdGVkXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogNjAlXCJcbiAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgICAgIGFuaW1hdGVkXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogODAlXCJcbiAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgICAgIGFuaW1hdGVkXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogNjAlXCJcbiAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgICAgIGFuaW1hdGVkXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogODAlXCJcbiAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICA8L2lvbi1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgPC9pb24tY2FyZD5cbiAgICAgICAgPC9pb24tY29sPlxuICAgICAgPC9pb24tcm93PlxuICAgIDwvaW9uLWdyaWQ+XG4gIDwvaW9uLWxpc3Q+XG48L25nLXRlbXBsYXRlPlxuIiwgImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEhlbGZlclBhZ2UgfSBmcm9tICcuL2hlbGZlci5wYWdlJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IEhlbGZlclBhZ2VcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEhlbGZlclBhZ2VSb3V0aW5nTW9kdWxlIHt9XG4iLCAiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmltcG9ydCB7IEhlbGZlclBhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9oZWxmZXItcm91dGluZy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBIZWxmZXJQYWdlIH0gZnJvbSAnLi9oZWxmZXIucGFnZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBJb25pY01vZHVsZSxcbiAgICBIZWxmZXJQYWdlUm91dGluZ01vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbSGVsZmVyUGFnZV1cbn0pXG5leHBvcnQgY2xhc3MgSGVsZmVyUGFnZU1vZHVsZSB7fVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3FGWSxJQUFBLHlCQUFBLEdBQUEsYUFBQSxFQUFBO0FBQXdGLElBQUEsaUJBQUEsQ0FBQTtBQUFnRCxJQUFBLHVCQUFBOzs7O0FBQWhELElBQUEsb0JBQUE7QUFB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R0FBQSxDQUFBLFFBQUEsRUFBQSxHQUFBLENBQUEsR0FBQSxhQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsR0FBQSxDQUFBLEdBQUEsWUFBQSxHQUFBLENBQUEsWUFBQSxVQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsR0FBQSxDQUFBLEdBQUEsUUFBQSxVQUFBLEdBQUEsQ0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFNBQUEsUUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFNBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxLQUFBLEdBQUEsQ0FBQSxHQUFBLFNBQUEsU0FBQSxHQUFBLENBQUEsUUFBQSxVQUFBLFVBQUEsUUFBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFNBQUEsV0FBQSxRQUFBLGFBQUEsUUFBQSxTQUFBLFFBQUEsY0FBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFFBQUEsa0JBQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxRQUFBLGtCQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsU0FBQSxXQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxPQUFBLFNBQUEsV0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsT0FBQSxTQUFBLFVBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsU0FBQSxTQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsU0FBQSxTQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsU0FBQSxRQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLEtBQUEsR0FBQSxDQUFBLFNBQUEsVUFBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxRQUFBLGNBQUEsR0FBQSxDQUFBLFNBQUEsVUFBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxRQUFBLE9BQUEsR0FBQSxDQUFBLFNBQUEsU0FBQSxHQUFBLENBQUEsWUFBQSxVQUFBLGNBQUEsT0FBQSxRQUFBLFNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxZQUFBLFVBQUEsY0FBQSxPQUFBLFFBQUEsT0FB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
