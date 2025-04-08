import {
  EventService
} from "./chunk-WS5FEPJJ.js";
import {
  Browser
} from "./chunk-3ABWPIXG.js";
import {
  MemberPage
} from "./chunk-REWK7CTI.js";
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
  AsyncPipe,
  ChangeDetectorRef,
  DatePipe,
  IonAccordion,
  IonAccordionGroup,
  IonBadge,
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonListHeader,
  IonModal,
  IonSkeletonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
  ModalController,
  NavParams,
  NgForOf,
  NgIf,
  SelectValueAccessorDirective,
  TextValueAccessorDirective,
  ToastController,
  TranslatePipe,
  TranslateService,
  catchError,
  combineLatest,
  firstValueFrom,
  forkJoin,
  lastValueFrom,
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
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-LQ2EECYJ.js";

// src/app/pages/helfer/helfer-detail/helfer-detail.page.ts
function HelferDetailPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 7);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_1_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.edit());
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
function HelferDetailPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 7);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_2_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.edit());
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
function HelferDetailPage_ng_container_0_ng_container_3_ion_buttons_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-buttons", 12);
    \u0275\u0275template(1, HelferDetailPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_1_Template, 3, 3, "ion-button", 13)(2, HelferDetailPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_2_Template, 3, 3, "ion-button", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.allowEdit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.allowEdit);
  }
}
function HelferDetailPage_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HelferDetailPage_ng_container_0_ng_container_3_ion_buttons_1_Template, 3, 2, "ion-buttons", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r5 = ctx.ngIf;
    const event_r6 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isClubAdmin(clubAdminList_r5, event_r6.clubId));
  }
}
function HelferDetailPage_ng_container_0_ion_list_18_ion_item_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275element(1, "ion-icon", 20);
    \u0275\u0275elementStart(2, "ion-label", 16)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-button", 21);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_ion_list_18_ion_item_28_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const event_r6 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openUrl(event_r6.link_web));
    });
    \u0275\u0275element(6, "ion-icon", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r6 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r6.link_web);
  }
}
function HelferDetailPage_ng_container_0_ion_list_18_ion_item_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275element(1, "ion-icon", 23);
    \u0275\u0275elementStart(2, "ion-label", 16)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-button", 21);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_ion_list_18_ion_item_29_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const event_r6 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openUrl(event_r6.link_poll));
    });
    \u0275\u0275element(6, "ion-icon", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r6 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r6.link_poll);
  }
}
function HelferDetailPage_ng_container_0_ion_list_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 14)(1, "ion-item");
    \u0275\u0275element(2, "ion-icon", 15);
    \u0275\u0275elementStart(3, "ion-label", 16)(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "ion-item");
    \u0275\u0275element(7, "ion-icon", 17);
    \u0275\u0275elementStart(8, "ion-label")(9, "h2");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275pipe(12, "date");
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "ion-item");
    \u0275\u0275element(15, "ion-icon", 18);
    \u0275\u0275elementStart(16, "ion-label", 16)(17, "h2");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "h2");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h2");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "ion-item");
    \u0275\u0275element(24, "ion-icon", 19);
    \u0275\u0275elementStart(25, "ion-label", 16)(26, "h2");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(28, HelferDetailPage_ng_container_0_ion_list_18_ion_item_28_Template, 7, 1, "ion-item", 5)(29, HelferDetailPage_ng_container_0_ion_list_18_ion_item_29_Template, 7, 1, "ion-item", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r6 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(event_r6.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(11, 12, event_r6.date.toDate(), "dd.MM.YYYY "), " ", \u0275\u0275pipeBind2(12, 15, event_r6.timeFrom, "HH:mm"), " Uhr - ", \u0275\u0275pipeBind2(13, 18, event_r6.timeTo, "HH:mm"), " Uhr ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(event_r6.location);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", event_r6.streetAndNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", event_r6.postalCode, " ", event_r6.city, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(event_r6.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r6.link_web);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r6.link_poll);
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_5_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 7);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_5_ion_button_1_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.confirmSchichten());
    });
    \u0275\u0275text(1, " best\xE4tigen ");
    \u0275\u0275elementEnd();
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_5_ion_button_1_Template, 2, 0, "ion-button", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r10 = ctx.ngIf;
    const event_r6 = \u0275\u0275nextContext(4).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isClubAdmin(clubAdminList_r10, event_r6.clubId));
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ng_container_4_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-icon", 33);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ng_container_4_ion_icon_1_Template_ion_icon_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const schicht_r12 = \u0275\u0275nextContext(2).$implicit;
      const event_r6 = \u0275\u0275nextContext(4).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSchicht(true, event_r6, schicht_r12));
    });
    \u0275\u0275elementEnd();
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ng_container_4_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-icon", 34);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ng_container_4_ion_icon_2_Template_ion_icon_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const schicht_r12 = \u0275\u0275nextContext(2).$implicit;
      const event_r6 = \u0275\u0275nextContext(4).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSchicht(false, event_r6, schicht_r12));
    });
    \u0275\u0275elementEnd();
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ng_container_4_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-icon", 35);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ng_container_4_ion_icon_3_Template_ion_icon_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const schicht_r12 = \u0275\u0275nextContext(2).$implicit;
      const event_r6 = \u0275\u0275nextContext(4).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSchicht(true, event_r6, schicht_r12));
    });
    \u0275\u0275elementEnd();
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ng_container_4_ion_icon_1_Template, 1, 0, "ion-icon", 30)(2, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ng_container_4_ion_icon_2_Template, 1, 0, "ion-icon", 31)(3, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ng_container_4_ion_icon_3_Template, 1, 0, "ion-icon", 32);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const schicht_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", schicht_r12.status === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", schicht_r12.status === true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", schicht_r12.status === false);
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ng_container_5_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 39);
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ng_container_5_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 40);
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ng_container_5_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 41);
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ng_container_5_ion_icon_1_Template, 1, 0, "ion-icon", 36)(2, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ng_container_5_ion_icon_2_Template, 1, 0, "ion-icon", 37)(3, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ng_container_5_ion_icon_3_Template, 1, 0, "ion-icon", 38);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const schicht_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", schicht_r12.status === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", schicht_r12.status === true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", schicht_r12.status === false);
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ion_item_options_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-options", 42)(1, "ion-item-option", 43);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ion_item_options_16_Template_ion_item_option_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const schicht_r12 = \u0275\u0275nextContext().$implicit;
      const item_r16 = \u0275\u0275reference(2);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.addMembersToSchicht(item_r16, schicht_r12));
    });
    \u0275\u0275element(2, "ion-icon", 44);
    \u0275\u0275elementEnd()();
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ion_accordion_group_18_ion_item_sliding_8_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 51);
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ion_accordion_group_18_ion_item_sliding_8_ng_container_6_ion_item_options_1_ion_item_option_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-option", 54);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ion_accordion_group_18_ion_item_sliding_8_ng_container_6_ion_item_options_1_ion_item_option_1_Template_ion_item_option_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const member_r18 = \u0275\u0275nextContext(3).$implicit;
      const item_r20 = \u0275\u0275reference(1);
      const schicht_r12 = \u0275\u0275nextContext(2).$implicit;
      const event_r6 = \u0275\u0275nextContext(4).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSchichtItem(item_r20, false, event_r6, schicht_r12, member_r18.id));
    });
    \u0275\u0275element(1, "ion-icon", 55);
    \u0275\u0275elementEnd();
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ion_accordion_group_18_ion_item_sliding_8_ng_container_6_ion_item_options_1_ion_item_option_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-option", 56);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ion_accordion_group_18_ion_item_sliding_8_ng_container_6_ion_item_options_1_ion_item_option_2_Template_ion_item_option_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const member_r18 = \u0275\u0275nextContext(3).$implicit;
      const item_r20 = \u0275\u0275reference(1);
      const schicht_r12 = \u0275\u0275nextContext(2).$implicit;
      const event_r6 = \u0275\u0275nextContext(4).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSchichtItem(item_r20, false, event_r6, schicht_r12, member_r18.id));
    });
    \u0275\u0275element(1, "ion-icon", 57);
    \u0275\u0275elementEnd();
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ion_accordion_group_18_ion_item_sliding_8_ng_container_6_ion_item_options_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item-options", 42);
    \u0275\u0275template(1, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ion_accordion_group_18_ion_item_sliding_8_ng_container_6_ion_item_options_1_ion_item_option_1_Template, 2, 0, "ion-item-option", 52)(2, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ion_accordion_group_18_ion_item_sliding_8_ng_container_6_ion_item_options_1_ion_item_option_2_Template, 2, 0, "ion-item-option", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r18 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r18.status === false || member_r18.status === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r18.status === true || member_r18.status === null);
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ion_accordion_group_18_ion_item_sliding_8_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ion_accordion_group_18_ion_item_sliding_8_ng_container_6_ion_item_options_1_Template, 3, 2, "ion-item-options", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r22 = ctx.ngIf;
    const event_r6 = \u0275\u0275nextContext(7).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isClubAdmin(clubAdminList_r22, event_r6.clubId));
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ion_accordion_group_18_ion_item_sliding_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 2)(2, "ion-item", 49);
    \u0275\u0275template(3, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ion_accordion_group_18_ion_item_sliding_8_ion_icon_3_Template, 1, 0, "ion-icon", 50);
    \u0275\u0275elementStart(4, "ion-label", 7);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ion_accordion_group_18_ion_item_sliding_8_Template_ion_label_click_4_listener() {
      const member_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r2.openMember(member_r18));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ion_accordion_group_18_ion_item_sliding_8_ng_container_6_Template, 2, 1, "ng-container", 5);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r18 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", member_r18.confirmed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", member_r18.firstName, " ", member_r18.lastName, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(7, 4, ctx_r2.clubAdminList$));
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ion_accordion_group_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-accordion-group", 45)(1, "ion-accordion", 46)(2, "ion-item", 47)(3, "ion-label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 48)(7, "ion-list");
    \u0275\u0275template(8, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ion_accordion_group_18_ion_item_sliding_8_Template, 8, 6, "ion-item-sliding", 27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const schicht_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 3, "helfer-detail.helfer_innen_for"), " ", schicht_r12.name, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", schicht_r12["attendeeListTrue"]);
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-item-sliding", null, 2)(3, "ion-item");
    \u0275\u0275template(4, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ng_container_4_Template, 4, 3, "ng-container", 5)(5, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ng_container_5_Template, 4, 3, "ng-container", 5);
    \u0275\u0275elementStart(6, "ion-label")(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h3");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "ion-badge");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ion_item_options_16_Template, 3, 0, "ion-item-options", 28);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_ion_accordion_group_18_Template, 9, 5, "ion-accordion-group", 29);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const schicht_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !schicht_r12.confirmed && ctx_r2.isFuture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isFuture || schicht_r12.confirmed);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(schicht_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Zeit: ", schicht_r12.timeFrom, " Uhr - ", schicht_r12.timeTo, " Uhr");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(13, 11, "common.helper_points"), ": ", schicht_r12.points, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", schicht_r12.attendeeListTrue.length, " / ", schicht_r12.countNeeded, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(17, 13, ctx_r2.clubAdminList$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", schicht_r12["attendeeListTrue"].length > 0);
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 26)(1, "ion-list-header")(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_5_Template, 2, 1, "ng-container", 5);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_ng_container_7_Template, 19, 15, "ng-container", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const schichten_r23 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "helfer.schichten"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(6, 6, ctx_r2.clubAdminList$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", schichten_r23);
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_2_ng_container_5_ion_fab_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-fab-button", 63);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_2_ng_container_5_ion_fab_button_1_Template_ion_fab_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const event_r6 = \u0275\u0275nextContext(5).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle(true, event_r6));
    });
    \u0275\u0275element(1, "ion-icon", 64);
    \u0275\u0275elementEnd();
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_2_ng_container_5_ion_fab_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-fab-button", 65);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_2_ng_container_5_ion_fab_button_2_Template_ion_fab_button_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const event_r6 = \u0275\u0275nextContext(5).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle(true, event_r6));
    });
    \u0275\u0275element(1, "ion-icon", 66);
    \u0275\u0275elementEnd();
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_2_ng_container_5_ion_fab_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-fab-button", 67);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_2_ng_container_5_ion_fab_button_3_Template_ion_fab_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const event_r6 = \u0275\u0275nextContext(5).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle(false, event_r6));
    });
    \u0275\u0275element(1, "ion-icon", 68);
    \u0275\u0275elementEnd();
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_2_ng_container_5_ion_fab_button_1_Template, 2, 0, "ion-fab-button", 60)(2, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_2_ng_container_5_ion_fab_button_2_Template, 2, 0, "ion-fab-button", 61)(3, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_2_ng_container_5_ion_fab_button_3_Template, 2, 0, "ion-fab-button", 62);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const event_r6 = \u0275\u0275nextContext(4).ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r6.status === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r6.status === false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r6.status === true);
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 58)(1, "ion-list-header");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-item", 59);
    \u0275\u0275template(5, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_2_ng_container_5_Template, 4, 3, "ng-container", 5);
    \u0275\u0275elementStart(6, "ion-label");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r6 = \u0275\u0275nextContext(3).ngIf;
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "common.attendances__absences"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", event_r6.hasOwnProperty("status"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "common.my__status"));
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_3_ion_item_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 49);
    \u0275\u0275element(1, "ion-icon", 72);
    \u0275\u0275elementStart(2, "ion-label", 7);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_3_ion_item_9_Template_ion_label_click_2_listener() {
      const member_r28 = \u0275\u0275restoreView(_r27).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.openMember(member_r28));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r28 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", member_r28.firstName, " ", member_r28.lastName, "");
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_3_ion_item_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 49);
    \u0275\u0275element(1, "ion-icon", 73);
    \u0275\u0275elementStart(2, "ion-label", 7);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_3_ion_item_17_Template_ion_label_click_2_listener() {
      const member_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.openMember(member_r30));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r30 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", member_r30.firstName, " ", member_r30.lastName, "");
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_3_ion_item_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 49);
    \u0275\u0275element(1, "ion-icon", 74);
    \u0275\u0275elementStart(2, "ion-label", 7);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_3_ion_item_25_Template_ion_label_click_2_listener() {
      const member_r32 = \u0275\u0275restoreView(_r31).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.openMember(member_r32));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r32 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", member_r32.firstName, " ", member_r32.lastName, "");
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 14)(1, "ion-accordion-group")(2, "ion-accordion", 46)(3, "ion-item", 47)(4, "ion-label");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 48)(8, "ion-list");
    \u0275\u0275template(9, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_3_ion_item_9_Template, 4, 2, "ion-item", 69);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "ion-accordion", 70)(11, "ion-item", 47)(12, "ion-label");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 48)(16, "ion-list");
    \u0275\u0275template(17, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_3_ion_item_17_Template, 4, 2, "ion-item", 69);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "ion-accordion", 71)(19, "ion-item", 47)(20, "ion-label");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 48)(24, "ion-list");
    \u0275\u0275template(25, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_3_ion_item_25_Template, 4, 2, "ion-item", 69);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const event_r6 = \u0275\u0275nextContext(3).ngIf;
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 10, "common.present"), ": ", event_r6["attendeeListTrue"] == null ? null : event_r6["attendeeListTrue"].length, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", event_r6["attendeeListTrue"]);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(14, 12, "common.absent"), ": ", event_r6["attendeeListFalse"] == null ? null : event_r6["attendeeListFalse"].length, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", event_r6["attendeeListFalse"]);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(22, 14, "common.noreply"), ": ", event_r6["unrespondedMembers"].length, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", event_r6["unrespondedMembers"]);
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_1_Template, 8, 8, "ion-list", 24)(2, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_2_Template, 9, 8, "ion-list", 25)(3, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_ion_list_3_Template, 26, 16, "ion-list", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const schichten_r23 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", schichten_r23.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", schichten_r23.length == 0 && ctx_r2.isFuture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", schichten_r23.length == 0);
  }
}
function HelferDetailPage_ng_container_0_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HelferDetailPage_ng_container_0_ng_container_19_ng_container_1_Template, 4, 3, "ng-container", 5);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r2.schichten$));
  }
}
function HelferDetailPage_ng_container_0_ng_container_20_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 89);
    \u0275\u0275listener("ionChange", function HelferDetailPage_ng_container_0_ng_container_20_ng_template_37_Template_ion_datetime_ionChange_0_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.changeTimeFrom($event));
    })("ionChange", function HelferDetailPage_ng_container_0_ng_container_20_ng_template_37_Template_ion_datetime_ionChange_0_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "timeFrom"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r6 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("value", event_r6.timeFrom);
  }
}
function HelferDetailPage_ng_container_0_ng_container_20_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 90);
    \u0275\u0275listener("ionChange", function HelferDetailPage_ng_container_0_ng_container_20_ng_template_44_Template_ion_datetime_ionChange_0_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "timeTo"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r6 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("value", event_r6.timeTo);
  }
}
function HelferDetailPage_ng_container_0_ng_container_20_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 91);
    \u0275\u0275listener("ionChange", function HelferDetailPage_ng_container_0_ng_container_20_ng_template_51_Template_ion_datetime_ionChange_0_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "startDate"));
    })("ionChange", function HelferDetailPage_ng_container_0_ng_container_20_ng_template_51_Template_ion_datetime_ionChange_0_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.changeStartDate($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r6 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("firstDayOfWeek", 1)("value", event_r6.startDate);
  }
}
function HelferDetailPage_ng_container_0_ng_container_20_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 92);
    \u0275\u0275listener("ionChange", function HelferDetailPage_ng_container_0_ng_container_20_ng_template_58_Template_ion_datetime_ionChange_0_listener($event) {
      \u0275\u0275restoreView(_r37);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "endDate"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r6 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("firstDayOfWeek", 1)("value", event_r6.endDate);
  }
}
function HelferDetailPage_ng_container_0_ng_container_20_ion_list_59_ng_container_7_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-icon", 93);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_ng_container_20_ion_list_59_ng_container_7_ion_item_1_Template_ion_icon_click_1_listener() {
      const schicht_r40 = \u0275\u0275restoreView(_r39).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.deleteSchicht(schicht_r40));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ion-icon", 94);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_ng_container_20_ion_list_59_ng_container_7_ion_item_1_Template_ion_icon_click_2_listener() {
      const schicht_r40 = \u0275\u0275restoreView(_r39).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.copySchicht(schicht_r40));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-label", 7);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_ng_container_20_ion_list_59_ng_container_7_ion_item_1_Template_ion_label_click_3_listener() {
      const schicht_r40 = \u0275\u0275restoreView(_r39).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.editSchicht(schicht_r40));
    });
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-badge", 95);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const schicht_r40 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(schicht_r40.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", schicht_r40.timeFrom, " Uhr - ", schicht_r40.timeTo, " Uhr");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(schicht_r40.countNeeded);
  }
}
function HelferDetailPage_ng_container_0_ng_container_20_ion_list_59_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HelferDetailPage_ng_container_0_ng_container_20_ion_list_59_ng_container_7_ion_item_1_Template, 10, 4, "ion-item", 27);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const schichten_r41 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", schichten_r41);
  }
}
function HelferDetailPage_ng_container_0_ng_container_20_ion_list_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-list", 26)(1, "ion-list-header")(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-button", 7);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_ng_container_20_ion_list_59_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addSchicht());
    });
    \u0275\u0275text(6, "hinzuf\xFCgen");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, HelferDetailPage_ng_container_0_ng_container_20_ion_list_59_ng_container_7_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const schichten_r41 = ctx.ngIf;
    \u0275\u0275nextContext(3);
    const schichtenTemplate_r42 = \u0275\u0275reference(3);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "helfer.schichten"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", schichten_r41.length > 0)("ngIfElse", schichtenTemplate_r42);
  }
}
function HelferDetailPage_ng_container_0_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-list", 14)(2, "ion-item")(3, "ion-input", 75);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("ionChange", function HelferDetailPage_ng_container_0_ng_container_20_Template_ion_input_ionChange_3_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "name"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-item")(6, "ion-textarea", 76);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("ionChange", function HelferDetailPage_ng_container_0_ng_container_20_Template_ion_textarea_ionChange_6_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "description"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ion-list", 14)(9, "ion-item")(10, "ion-input", 75);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("ionChange", function HelferDetailPage_ng_container_0_ng_container_20_Template_ion_input_ionChange_10_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "location"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "ion-item")(13, "ion-input", 75);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("ionChange", function HelferDetailPage_ng_container_0_ng_container_20_Template_ion_input_ionChange_13_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "streetAndNumber"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ion-item")(16, "ion-input", 75);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275listener("ionChange", function HelferDetailPage_ng_container_0_ng_container_20_Template_ion_input_ionChange_16_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "postalCode"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "ion-item")(19, "ion-input", 75);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275listener("ionChange", function HelferDetailPage_ng_container_0_ng_container_20_Template_ion_input_ionChange_19_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "city"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "ion-list", 14)(22, "ion-item")(23, "ion-input", 77);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275listener("ionChange", function HelferDetailPage_ng_container_0_ng_container_20_Template_ion_input_ionChange_23_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "link_web"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "ion-item")(27, "ion-input", 77);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275listener("ionChange", function HelferDetailPage_ng_container_0_ng_container_20_Template_ion_input_ionChange_27_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "link_poll"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "ion-list", 14)(31, "ion-item", 78)(32, "ion-label", 79);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "ion-datetime-button", 80);
    \u0275\u0275elementStart(36, "ion-modal", 81);
    \u0275\u0275template(37, HelferDetailPage_ng_container_0_ng_container_20_ng_template_37_Template, 1, 1, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "ion-item", 82)(39, "ion-label", 79);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "ion-datetime-button", 83);
    \u0275\u0275elementStart(43, "ion-modal", 81);
    \u0275\u0275template(44, HelferDetailPage_ng_container_0_ng_container_20_ng_template_44_Template, 1, 1, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "ion-item", 84)(46, "ion-label", 85);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "ion-datetime-button", 86);
    \u0275\u0275elementStart(50, "ion-modal", 81);
    \u0275\u0275template(51, HelferDetailPage_ng_container_0_ng_container_20_ng_template_51_Template, 1, 2, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "ion-item", 87)(53, "ion-label", 85);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "ion-datetime-button", 88);
    \u0275\u0275elementStart(57, "ion-modal", 81);
    \u0275\u0275template(58, HelferDetailPage_ng_container_0_ng_container_20_ng_template_58_Template, 1, 2, "ng-template");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(59, HelferDetailPage_ng_container_0_ng_container_20_ion_list_59_Template, 8, 6, "ion-list", 24);
    \u0275\u0275pipe(60, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const event_r6 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(4, 32, "common.name"))("value", event_r6.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("autoGrow", true)("label", \u0275\u0275pipeBind1(7, 34, "common.description"))("value", event_r6.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(11, 36, "common.location"))("value", event_r6.location);
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(14, 38, "common.street__house_number"))("value", event_r6.streetAndNumber);
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(17, 40, "common.postal__code"))("value", event_r6.postalCode);
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(20, 42, "common.locality"))("value", event_r6.city);
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(24, 44, "common.link__web"))("value", event_r6.link_web)("placeholder", \u0275\u0275pipeBind1(25, 46, "common.link__placeholder"));
    \u0275\u0275advance(4);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(28, 48, "common.link__poll"))("value", event_r6.link_poll)("placeholder", \u0275\u0275pipeBind1(29, 50, "common.link__placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 52, "common.start__event"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 54, "common.end__event"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 56, "common.start__date"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 58, "common.end__date"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(60, 60, ctx_r2.schichten$));
  }
}
function HelferDetailPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-header", 4)(2, "ion-toolbar");
    \u0275\u0275template(3, HelferDetailPage_ng_container_0_ng_container_3_Template, 2, 1, "ng-container", 5);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementStart(5, "ion-title");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-buttons", 6)(9, "ion-button", 7);
    \u0275\u0275listener("click", function HelferDetailPage_ng_container_0_Template_ion_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "ion-content")(13, "ion-header", 8)(14, "ion-toolbar")(15, "ion-title", 9);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, HelferDetailPage_ng_container_0_ion_list_18_Template, 30, 21, "ion-list", 10)(19, HelferDetailPage_ng_container_0_ng_container_19_Template, 3, 3, "ng-container", 5)(20, HelferDetailPage_ng_container_0_ng_container_20_Template, 61, 62, "ng-container", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(4, 8, ctx_r2.clubAdminList$));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 10, "common.details"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 12, "common.close"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 14, "common.details"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.allowEdit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.allowEdit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.allowEdit);
  }
}
function HelferDetailPage_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-label")(2, "h3");
    \u0275\u0275element(3, "ion-skeleton-text", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275element(5, "ion-skeleton-text", 97)(6, "ion-skeleton-text", 98);
    \u0275\u0275elementEnd()()();
  }
}
function HelferDetailPage_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 4)(1, "ion-toolbar")(2, "ion-buttons", 12)(3, "ion-button");
    \u0275\u0275element(4, "ion-skeleton-text", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-title");
    \u0275\u0275element(6, "ion-skeleton-text", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-buttons", 6)(8, "ion-button");
    \u0275\u0275element(9, "ion-skeleton-text", 99);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "ion-content")(11, "ion-header", 8)(12, "ion-toolbar")(13, "ion-title", 9);
    \u0275\u0275element(14, "ion-skeleton-text", 101);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "ion-list", 14)(16, "ion-item");
    \u0275\u0275element(17, "ion-icon", 15);
    \u0275\u0275elementStart(18, "ion-label");
    \u0275\u0275element(19, "ion-skeleton-text", 102);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "ion-item");
    \u0275\u0275element(21, "ion-icon", 17);
    \u0275\u0275elementStart(22, "ion-label");
    \u0275\u0275element(23, "ion-skeleton-text", 103);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "ion-item");
    \u0275\u0275element(25, "ion-icon", 18);
    \u0275\u0275elementStart(26, "ion-label");
    \u0275\u0275element(27, "ion-skeleton-text", 104)(28, "ion-skeleton-text", 102)(29, "ion-skeleton-text", 105);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "ion-item");
    \u0275\u0275element(31, "ion-icon", 19);
    \u0275\u0275elementStart(32, "ion-label");
    \u0275\u0275element(33, "ion-skeleton-text", 106)(34, "ion-skeleton-text", 103);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "ion-list", 14)(36, "ion-list-header")(37, "ion-label");
    \u0275\u0275element(38, "ion-skeleton-text", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "ion-button");
    \u0275\u0275element(40, "ion-skeleton-text", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "ion-item");
    \u0275\u0275element(42, "ion-icon", 107);
    \u0275\u0275elementStart(43, "ion-label");
    \u0275\u0275element(44, "ion-skeleton-text", 104)(45, "ion-skeleton-text", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "ion-badge", 95);
    \u0275\u0275element(47, "ion-skeleton-text", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "ion-item");
    \u0275\u0275element(49, "ion-icon", 107);
    \u0275\u0275elementStart(50, "ion-label");
    \u0275\u0275element(51, "ion-skeleton-text", 105)(52, "ion-skeleton-text", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "ion-badge", 95);
    \u0275\u0275element(54, "ion-skeleton-text", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "ion-accordion-group")(56, "ion-accordion", 110)(57, "ion-item", 111)(58, "ion-label");
    \u0275\u0275element(59, "ion-skeleton-text", 112);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 48)(61, "ion-list")(62, "ion-item");
    \u0275\u0275element(63, "ion-icon", 113);
    \u0275\u0275elementStart(64, "ion-label");
    \u0275\u0275element(65, "ion-skeleton-text", 109);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "ion-item");
    \u0275\u0275element(67, "ion-icon", 113);
    \u0275\u0275elementStart(68, "ion-label");
    \u0275\u0275element(69, "ion-skeleton-text", 102);
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(15);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(20);
    \u0275\u0275property("inset", true);
  }
}
var _HelferDetailPage = class _HelferDetailPage {
  constructor(modalCtrl, navParams, userProfileService, eventService, fbService, toastController, alertCtrl, authService, cdr, translate) {
    this.modalCtrl = modalCtrl;
    this.navParams = navParams;
    this.userProfileService = userProfileService;
    this.eventService = eventService;
    this.fbService = fbService;
    this.toastController = toastController;
    this.alertCtrl = alertCtrl;
    this.authService = authService;
    this.cdr = cdr;
    this.translate = translate;
    this.mode = "yes";
    this.allowEdit = false;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.event = this.navParams.get("data");
      this.event$ = this.getHelferEvent(this.event.clubId, this.event.id);
      this.schichten$ = this.getHelferEventSchichtenWithAttendees(this.event.clubId, this.event.id);
      this.clubAdminList$ = this.fbService.getClubAdminList();
      this.eventHasChanged = {};
    });
  }
  isClubAdmin(clubAdminList, clubId) {
    return clubAdminList && clubAdminList.some((club) => club.id === clubId);
  }
  edit() {
    return __async(this, null, function* () {
      if (this.allowEdit) {
        this.allowEdit = false;
        if (Object.keys(this.eventHasChanged).length > 0) {
          const updatedEvent = yield this.eventService.changeHelferEvent(this.eventHasChanged, this.event.clubId, this.event.id).catch((e) => {
            this.toastActionError(e);
          });
          this.presentToast();
        }
      } else {
        this.allowEdit = true;
      }
    });
  }
  updateEvent(event, field) {
    return __async(this, null, function* () {
      console.log(field, event.detail);
      this.eventHasChanged[field] = event.detail.value;
    });
  }
  getHelferEvent(clubId, eventId) {
    return this.authService.getUser$().pipe(take(1), tap((user) => {
      this.user = user;
      if (!user)
        throw new Error("User not found");
    }), switchMap(() => this.eventService.getClubHelferEventRef(clubId, eventId)), switchMap((event) => {
      if (!event)
        return of(null);
      return this.fbService.getClubRef(clubId).pipe(switchMap((club) => {
        if (!club)
          return of(null);
        return this.fbService.getClubMemberRefs(clubId).pipe(switchMap((clubMembers) => {
          const clubMemberProfiles$ = clubMembers.map((member) => this.userProfileService.getUserProfileById(member.id).pipe(take(1), catchError((err) => {
            console.log(`Failed to fetch profile for club member ${member.id}:`, err);
            return of({ id: member.id, firstName: "Unknown", lastName: "Unknown", status: null });
          })));
          return forkJoin(clubMemberProfiles$).pipe(switchMap((clubMembersWithDetails) => {
            return this.eventService.getClubHelferEventAttendeesRef(clubId, eventId).pipe(map((attendees) => {
              const attendeeDetails = attendees.map((attendee) => {
                const detail = clubMembersWithDetails.find((member) => member && member.id === attendee.id);
                return detail ? __spreadProps(__spreadValues({}, detail), { status: attendee.status }) : null;
              }).filter((item) => item !== null);
              const attendeeListTrue = attendeeDetails.filter((att) => att && att.status === true);
              const attendeeListFalse = attendeeDetails.filter((att) => att && att.status === false);
              const respondedIds = new Set(attendeeDetails.map((att) => att.id));
              const unrespondedMembers = clubMembersWithDetails.filter((member) => member && !respondedIds.has(member.id));
              const userAttendee = attendeeDetails.find((att) => att && att.id === this.user.uid);
              const status = userAttendee ? userAttendee.status : null;
              return __spreadProps(__spreadValues({}, event), {
                club,
                attendees: attendeeDetails,
                attendeeListTrue,
                attendeeListFalse,
                unrespondedMembers,
                status
              });
            }), catchError((err) => {
              console.error("Error fetching attendees:", err);
              return of(__spreadProps(__spreadValues({}, event), {
                club,
                attendees: [],
                attendeeListTrue: [],
                attendeeListFalse: [],
                unrespondedMembers: clubMembersWithDetails.filter((member) => member !== null),
                status: null
              }));
            }));
          }));
        }), catchError((err) => {
          console.error("Error fetching club members:", err);
          return of(__spreadProps(__spreadValues({}, event), {
            club,
            attendees: [],
            attendeeListTrue: [],
            attendeeListFalse: [],
            unrespondedMembers: [],
            status: null
          }));
        }));
      }));
    }), catchError((err) => {
      console.error("Error in getHelferEventWithAttendees:", err);
      return of(null);
    }));
  }
  getHelferEventSchichtenWithAttendees(clubId, eventId) {
    return this.eventService.getClubHelferEventSchichtenRef(clubId, eventId).pipe(switchMap((schichten) => {
      if (schichten.length === 0)
        return of([]);
      const sortedSchichten = schichten.sort((a, b) => {
        const timeComparison = a.timeFrom.localeCompare(b.timeFrom);
        if (timeComparison !== 0)
          return timeComparison;
        return a.name.localeCompare(b.name);
      });
      return this.fbService.getClubMemberRefs(clubId).pipe(switchMap((clubMembers) => {
        const clubMemberProfiles$ = clubMembers.map((member) => this.userProfileService.getUserProfileById(member.id).pipe(take(1), catchError((err) => {
          console.error(`Failed to fetch profile for club member ${member.id}:`, err);
          return of({ id: member.id, firstName: "Unknown", lastName: "Unknown", status: null, confirmed: null });
        })));
        return forkJoin(clubMemberProfiles$).pipe(switchMap((clubMembersWithDetails) => {
          const schichtenWithAttendees$ = sortedSchichten.map((schicht) => this.eventService.getClubHelferEventSchichtAttendeesRef(clubId, eventId, schicht.id).pipe(map((attendees) => {
            const attendeeDetails = attendees.map((attendee) => {
              const detail = clubMembersWithDetails.find((member) => member && member.id === attendee.id);
              return detail ? __spreadProps(__spreadValues({}, detail), { status: attendee.status, confirmed: attendee.confirmed }) : null;
            }).filter((item) => item);
            const attendeeListTrue = attendeeDetails.filter((att) => att.status === true);
            const attendeeListFalse = attendeeDetails.filter((att) => att.status === false);
            const respondedIds = new Set(attendeeDetails.map((att) => att.id));
            const unrespondedMembers = clubMembersWithDetails.filter((member) => member && !respondedIds.has(member.id));
            const userAttendee = attendeeDetails.find((att) => att.id === this.user.uid);
            const userStatus = userAttendee ? userAttendee.status : null;
            const userConfirmed = userAttendee ? userAttendee.confirmed : null;
            return __spreadProps(__spreadValues({}, schicht), {
              attendees: attendeeDetails,
              attendeeListTrue,
              attendeeListFalse,
              unrespondedMembers,
              status: userStatus,
              // Status of the logged-in user as an attendee
              confirmed: userConfirmed
            });
          }), catchError((err) => {
            console.error("Error fetching attendees for schicht:", err);
            return of(__spreadProps(__spreadValues({}, schicht), {
              attendees: [],
              attendeeListTrue: [],
              attendeeListFalse: [],
              unrespondedMembers: clubMembersWithDetails,
              status: null,
              confirmed: null
            }));
          })));
          return combineLatest(schichtenWithAttendees$);
        }));
      }), catchError((err) => {
        console.error("Error fetching club members:", err);
        return of(schichten.map((schicht) => __spreadProps(__spreadValues({}, schicht), {
          attendees: [],
          attendeeListTrue: [],
          attendeeListFalse: [],
          unrespondedMembers: [],
          status: null,
          confirmed: null
        })));
      }));
    }), catchError((err) => {
      console.error("Error in getHelferEventSchichtenWithAttendees:", err);
      return of([]);
    }));
  }
  confirmSchichten() {
    return __async(this, null, function* () {
      try {
        const schichten = yield firstValueFrom(this.getHelferEventSchichtenWithAttendees(this.event.clubId, this.event.id));
        let alertInputs = schichten.reduce((acc, schicht) => {
          const inputs = schicht.attendeeListTrue.filter((member) => !member.confirmed && member.status).map((member) => ({
            name: member.id,
            type: "checkbox",
            checked: true,
            value: {
              memberId: member.id,
              schichtId: schicht.id,
              points: schicht.points,
              eventId: this.event.id
            },
            label: `${member.firstName} ${member.lastName} - ${schicht.name}`
          }));
          return [...acc, ...inputs];
        }, []);
        if (alertInputs.length > 0) {
          const cancelText = yield lastValueFrom(this.translate.get("common.cancel"));
          const confirmText = yield lastValueFrom(this.translate.get("common.confirm"));
          const alert = yield this.alertCtrl.create({
            header: "Helferpunkte best\xE4tigen",
            subHeader: "Bitte erst nach dem Einsatz best\xE4tigen!",
            message: "W\xE4hle die Mitglieder um die Helferpunkte zu best\xE4tigen:",
            inputs: alertInputs,
            buttons: [
              {
                text: cancelText,
                role: "cancel",
                handler: () => console.log("Operation cancelled")
              },
              {
                text: confirmText,
                handler: (events) => this.handleConfirm(events)
              }
            ]
          });
          yield alert.present();
        } else {
          const toast = yield this.toastController.create({
            message: "Keine Eins\xE4tze zum Best\xE4tigen verf\xFCgbar",
            position: "top",
            color: "primary",
            duration: 1500
          });
          toast.present();
        }
      } catch (error) {
        console.error("Error in confirmSchichten:", error);
      }
    });
  }
  handleConfirm(events) {
    return __async(this, null, function* () {
      for (const event of events) {
        yield this.eventService.setClubHelferEventSchichtAttendeeStatusConfirm(this.event.clubId, event.eventId, event.schichtId, event.memberId, event.points);
      }
    });
  }
  openUrl(url) {
    return __async(this, null, function* () {
      Browser.open({
        url
      });
    });
  }
  toggleSchichtItem(slidingItem, status, event, schicht, memberId) {
    return __async(this, null, function* () {
      slidingItem.closeOpened();
      yield this.eventService.setClubHelferEventSchichtAttendeeStatusAdmin(status, event.clubId, event.id, schicht.id, memberId);
      this.presentToast();
    });
  }
  toggleSchicht(status, event, schicht) {
    return __async(this, null, function* () {
      console.log(`Set Status ${status}`);
      console.log(`Set Status ${status} for user ${this.user.uid} and Club ${event.clubId} and event ${event.id}`);
      const newStartDate = event.date.toDate();
      newStartDate.setHours(Number(event.timeFrom.substring(0, 2)));
      console.log("Grenzwert ");
      const helferThreshold = event.club.helferThreshold || 0;
      console.log(helferThreshold);
      if (schicht["attendeeListTrue"].length >= schicht.countNeeded && status == true) {
        console.log("too many");
        this.tooMany();
      } else if (newStartDate.getTime() - (/* @__PURE__ */ new Date()).getTime() < 1e3 * 60 * 60 * helferThreshold && status == false && helferThreshold) {
        console.log("too late");
        yield this.tooLateToggle();
      } else {
        yield this.eventService.setClubHelferEventSchichtAttendeeStatus(status, event.clubId, event.id, schicht.id);
        this.presentToast();
      }
    });
  }
  openMember(member) {
    return __async(this, null, function* () {
      console.log("openMember");
      const modal = yield this.modalCtrl.create({
        component: MemberPage,
        presentingElement: yield this.modalCtrl.getTop(),
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          data: member
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
  toggle(status, event) {
    return __async(this, null, function* () {
      console.log(`Set Status ${status} for user ${this.user.uid} and Club ${this.event.clubId} and event ${event.id}`);
      const newStartDate = event.date.toDate();
      newStartDate.setHours(Number(event.timeFrom.substring(0, 2)));
      console.log("Grenzwert ");
      const helferThreshold = event.club.helferThreshold || 0;
      console.log(helferThreshold);
      if (event.count >= event.countNeeded) {
        console.log("too many");
      } else if (newStartDate.getTime() - (/* @__PURE__ */ new Date()).getTime() < 1e3 * 60 * 60 * helferThreshold && status == false && helferThreshold) {
        console.log("too late");
        yield this.tooLateToggle();
      } else {
        yield this.eventService.setClubHelferEventAttendeeStatus(status, this.event.clubId, event.id);
        this.presentToast();
      }
    });
  }
  tooLateToggle() {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "Abmelden nicht m\xF6glich",
        message: "Bitte melde dich direkt beim Trainerteam um dich abzumelden",
        buttons: [{
          role: "",
          text: "OK",
          handler: (data) => {
            console.log(data);
          }
        }]
      });
      alert.present();
    });
  }
  tooMany() {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "Gen\xFCgend Helfer",
        message: "Die Schicht hat bereits gen\xFCgend Helfer",
        buttons: [{
          role: "",
          text: "OK",
          handler: (data) => {
            console.log(data);
          }
        }]
      });
      alert.present();
    });
  }
  presentToast() {
    return __async(this, null, function* () {
      const toast = yield this.toastController.create({
        message: yield lastValueFrom(this.translate.get("common.success__saved")),
        color: "success",
        duration: 1500,
        position: "top"
      });
      toast.present();
    });
  }
  toastActionError(error) {
    return __async(this, null, function* () {
      const toast = yield this.toastController.create({
        message: error.message,
        duration: 1500,
        position: "top",
        color: "danger"
      });
      yield toast.present();
    });
  }
  editSchicht(schicht) {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "Schicht bearbeiten",
        subHeader: " ",
        message: "Eine Helferschicht bearbeiten.",
        inputs: [
          {
            id: "name",
            name: "name",
            label: "Beschreibung",
            placeholder: "Beschreibung",
            type: "text",
            value: schicht.name
          },
          {
            id: "count",
            name: "countNeeded",
            label: "Anzahl Helfer",
            placeholder: "Anzahl Helfer",
            type: "number",
            value: schicht.countNeeded
          },
          {
            id: "points",
            name: "points",
            label: "Anzahl Helferpunkte",
            placeholder: "1",
            type: "number",
            value: schicht.points
          },
          {
            id: "timeFrom",
            name: "timeFrom",
            label: "Zeit von",
            placeholder: "Zeit von",
            type: "time",
            value: schicht.timeFrom
          },
          {
            id: "timeTo",
            name: "timeTo",
            label: "Zeit bis",
            placeholder: "Zeit bis",
            type: "time",
            value: schicht.timeTo
          }
        ],
        buttons: [
          {
            text: "Abbrechen",
            handler: () => {
              console.log("Abbrechen");
            }
          },
          {
            text: "Speichern",
            handler: (data) => __async(this, null, function* () {
              console.log(data);
              yield this.eventService.changeHelferEventSchicht(this.event.clubId, this.event.id, schicht.id, data);
              yield this.presentToast();
            })
          }
        ]
      });
      yield alert.present();
    });
  }
  deleteSchicht(schicht) {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "Schicht l\xF6schen",
        message: "M\xF6chten Sie diese Schicht wirklich l\xF6schen?",
        buttons: [
          {
            text: "Abbrechen",
            role: "cancel",
            handler: () => {
              console.log("L\xF6schen abgebrochen");
            }
          },
          {
            text: "L\xF6schen",
            handler: () => __async(this, null, function* () {
              yield this.eventService.deleteHelferEventSchicht(this.event.clubId, this.event.id, schicht.id);
              yield this.presentToast();
            })
          }
        ]
      });
      yield alert.present();
    });
  }
  copySchicht(schicht) {
    return __async(this, null, function* () {
      console.log(this.event.timeTo);
      const alert = yield this.alertCtrl.create({
        header: "Schicht erstellen",
        subHeader: " ",
        message: "Eine neue Helferschicht erstellen.",
        inputs: [
          {
            id: "name",
            name: "name",
            value: schicht.name,
            label: "Beschreibung",
            placeholder: "Beschreibung",
            type: "text"
          },
          {
            id: "count",
            name: "countNeeded",
            value: schicht.countNeeded,
            label: "Anzahl Helfer",
            placeholder: "Anzahl Helfer",
            type: "number"
          },
          {
            id: "points",
            name: "points",
            value: schicht.points,
            label: "Anzahl Helferpunkte",
            placeholder: "Anzahl Helferpunkte",
            type: "number"
          },
          {
            id: "timeFrom",
            name: "timeFrom",
            value: schicht.timeFrom,
            label: "Zeit von",
            placeholder: "Zeit von",
            type: "time"
          },
          {
            id: "timeTo",
            name: "timeTo",
            value: schicht.timeTo,
            label: "Zeit bis",
            placeholder: "Zeit bis",
            type: "time"
          }
        ],
        buttons: [
          {
            text: "Abbrechen",
            handler: () => {
              console.log("Abbrechen");
            }
          },
          {
            text: "Hinzuf\xFCgen",
            handler: (data) => __async(this, null, function* () {
              console.log(data);
              yield this.eventService.addNewHelferEventSchicht(this.event.clubId, this.event.id, data);
              yield this.presentToast();
            })
          }
        ]
      });
      alert.present();
    });
  }
  addSchicht() {
    return __async(this, null, function* () {
      console.log(this.event.timeTo);
      const alert = yield this.alertCtrl.create({
        header: "Schicht erstellen",
        subHeader: " ",
        message: "Eine neue Helferschicht erstellen.",
        inputs: [
          {
            id: "name",
            name: "name",
            label: "Beschreibung",
            placeholder: "Beschreibung",
            type: "text"
          },
          {
            id: "count",
            name: "countNeeded",
            label: "Anzahl Helfer",
            placeholder: "Anzahl Helfer",
            type: "number"
          },
          {
            id: "points",
            name: "points",
            label: "Anzahl Helferpunkte",
            placeholder: "Anzahl Helferpunkte",
            type: "number",
            value: ""
          },
          {
            id: "timeFrom",
            name: "timeFrom",
            label: "Zeit von",
            placeholder: "Zeit von",
            type: "time",
            value: this.event.timeFrom.slice(11, 16)
          },
          {
            id: "timeTo",
            name: "timeTo",
            label: "Zeit bis",
            placeholder: "Zeit bis",
            type: "time",
            value: this.event.timeTo.slice(11, 16)
          }
        ],
        buttons: [
          {
            text: "Abbrechen",
            handler: () => {
              console.log("Abbrechen");
            }
          },
          {
            text: "Hinzuf\xFCgen",
            handler: (data) => __async(this, null, function* () {
              console.log(data);
              yield this.eventService.addNewHelferEventSchicht(this.event.clubId, this.event.id, data);
              yield this.presentToast();
            })
          }
        ]
      });
      yield alert.present();
    });
  }
  addMembersToSchicht(slidingItem, schicht) {
    return __async(this, null, function* () {
      slidingItem.closeOpened();
      const clubMembers = yield firstValueFrom(this.fbService.getClubMemberRefs(this.event.clubId).pipe(switchMap((members) => {
        const memberProfiles$ = members.map((member) => this.userProfileService.getUserProfileById(member.id).pipe(take(1), catchError((err) => {
          console.error(`Failed to fetch profile for member ${member.id}:`, err);
          return of(null);
        })));
        return forkJoin(memberProfiles$);
      })));
      const existingMemberIds = schicht.attendeeListTrue.map((m) => m.id);
      const availableMembers = clubMembers.filter((member) => member && !existingMemberIds.includes(member.id)).sort((a, b) => a.firstName.localeCompare(b.firstName));
      if (availableMembers.length === 0) {
        const toast = yield this.toastController.create({
          message: yield lastValueFrom(this.translate.get("helfer-detail.no_members_available")),
          duration: 1500,
          position: "top",
          color: "warning"
        });
        toast.present();
        return;
      }
      const alert = yield this.alertCtrl.create({
        header: yield lastValueFrom(this.translate.get("helfer-detail.add_members_title")),
        message: yield lastValueFrom(this.translate.get("helfer-detail.add_members_message")),
        inputs: availableMembers.map((member) => ({
          type: "checkbox",
          label: `${member.firstName} ${member.lastName}`,
          value: member.id,
          checked: false
        })),
        buttons: [
          {
            text: yield lastValueFrom(this.translate.get("common.cancel")),
            role: "cancel"
          },
          {
            text: yield lastValueFrom(this.translate.get("common.confirm")),
            handler: (selectedMemberIds) => __async(this, null, function* () {
              if (selectedMemberIds.length === 0)
                return;
              try {
                const promises = selectedMemberIds.map((memberId) => this.eventService.setClubHelferEventSchichtAttendeeStatusAdmin(true, this.event.clubId, this.event.id, schicht.id, memberId));
                yield Promise.all(promises);
                this.presentToast();
              } catch (error) {
                console.error("Error adding members to schicht:", error);
                this.toastActionError(error);
              }
            })
          }
        ]
      });
      yield alert.present();
    });
  }
  changeTimeFrom(ev) {
    console.log(ev.detail.value);
    if (this.event.timeFrom > this.event.timeTo) {
      this.event.timeTo = this.event.timeFrom;
    }
  }
  changeStartDate(ev) {
    console.log(ev.detail.value);
    if (this.event.startDate > this.event.endDate) {
      this.event.endDate = this.event.startDate;
    }
  }
  close() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(null, "close");
    });
  }
  confirm() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(this.event, "confirm");
    });
  }
};
_HelferDetailPage.\u0275fac = function HelferDetailPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HelferDetailPage)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(NavParams), \u0275\u0275directiveInject(UserProfileService), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(TranslateService));
};
_HelferDetailPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HelferDetailPage, selectors: [["app-helfer-detail"]], inputs: { event: [0, "data", "event"], isFuture: "isFuture" }, standalone: false, decls: 6, vars: 4, consts: [["schichtenTemplate", ""], ["loading", ""], ["item", ""], [4, "ngIf", "ngIfElse"], [3, "translucent"], [4, "ngIf"], ["slot", "primary"], [3, "click"], ["collapse", "condense"], ["size", "large"], [3, "inset", 4, "ngIf"], ["slot", "secondary", 4, "ngIf"], ["slot", "secondary"], [3, "click", 4, "ngIf"], [3, "inset"], ["slot", "start", "name", "home-outline"], [1, "ion-text-wrap"], ["slot", "start", "name", "calendar-outline"], ["slot", "start", "name", "location-outline"], ["slot", "start", "name", "information-circle-outline"], ["slot", "start", "name", "link-outline"], ["slot", "end", "fill", "clear", 3, "click"], ["slot", "icon-only", "name", "open-outline"], ["slot", "start", "name", "help-circle-outline"], ["lines", "full", 3, "inset", 4, "ngIf"], ["lines", "none", 3, "inset", 4, "ngIf"], ["lines", "full", 3, "inset"], [4, "ngFor", "ngForOf"], ["side", "end", 4, "ngIf"], ["expand", "inset", 4, "ngIf"], ["slot", "icon-only", "color", "warning", "slot", "start", "name", "help-circle", 3, "click", 4, "ngIf"], ["slot", "icon-only", "color", "success", "slot", "start", "name", "checkmark-circle", 3, "click", 4, "ngIf"], ["slot", "icon-only", "color", "danger", "slot", "start", "name", "close-circle", 3, "click", 4, "ngIf"], ["slot", "icon-only", "color", "warning", "slot", "start", "name", "help-circle", 3, "click"], ["slot", "icon-only", "color", "success", "slot", "start", "name", "checkmark-circle", 3, "click"], ["slot", "icon-only", "color", "danger", "slot", "start", "name", "close-circle", 3, "click"], ["slot", "icon-only", "color", "warning", "slot", "start", "name", "help-circle", 4, "ngIf"], ["slot", "icon-only", "color", "success", "slot", "start", "name", "checkmark-circle", 4, "ngIf"], ["slot", "icon-only", "color", "danger", "slot", "start", "name", "close-circle", 4, "ngIf"], ["slot", "icon-only", "color", "warning", "slot", "start", "name", "help-circle"], ["slot", "icon-only", "color", "success", "slot", "start", "name", "checkmark-circle"], ["slot", "icon-only", "color", "danger", "slot", "start", "name", "close-circle"], ["side", "end"], ["color", "primary", 3, "click"], ["slot", "icon-only", "name", "person-add"], ["expand", "inset"], ["value", "yes"], ["slot", "header", "color", "light"], ["slot", "content"], ["detail", "true"], ["color", "primary", "slot", "start", "name", "checkmark-circle-outline", 4, "ngIf"], ["color", "primary", "slot", "start", "name", "checkmark-circle-outline"], ["color", "success", 3, "click", 4, "ngIf"], ["color", "danger", 3, "click", 4, "ngIf"], ["color", "success", 3, "click"], ["slot", "icon-only", "name", "checkmark-circle"], ["color", "danger", 3, "click"], ["slot", "icon-only", "name", "close-circle"], ["lines", "none", 3, "inset"], [1, "myclubStatus"], ["size", "small", "color", "warning", "slot", "start", 3, "click", 4, "ngIf"], ["size", "small", "color", "danger", "slot", "start", 3, "click", 4, "ngIf"], ["size", "small", "color", "success", "slot", "start", 3, "click", 4, "ngIf"], ["size", "small", "color", "warning", "slot", "start", 3, "click"], ["name", "help-circle"], ["size", "small", "color", "danger", "slot", "start", 3, "click"], ["name", "close-circle"], ["size", "small", "color", "success", "slot", "start", 3, "click"], ["name", "checkmark-circle"], ["detail", "true", 4, "ngFor", "ngForOf"], ["value", "no"], ["value", "null"], ["color", "success", "slot", "start", "name", "checkmark-circle"], ["color", "danger", "slot", "start", "name", "close-circle"], ["color", "warning", "slot", "start", "name", "help-circle"], ["label-placement", "stacked", 3, "ionChange", "label", "value"], ["label-placement", "stacked", 3, "ionChange", "autoGrow", "label", "value"], ["label-placement", "stacked", "type", "url", 3, "ionChange", "label", "value", "placeholder"], ["id", "timeFromItem"], ["position", ""], ["slot", "end", "datetime", "timeFrom"], [3, "keepContentsMounted"], ["id", "timeToItem"], ["slot", "end", "datetime", "timeTo"], ["id", "startDateItem"], ["position", "default"], ["slot", "end", "datetime", "startDate"], ["id", "endDateItem"], ["slot", "end", "datetime", "endDate"], ["presentation", "time", "id", "timeFrom", "minuteValues", "0,5,10,15,20,25,30,35,40,45,50,55", 3, "ionChange", "value"], ["presentation", "time", "id", "timeTo", "minuteValues", "0,5,10,15,20,25,30,35,40,45,50,55", 3, "ionChange", "value"], ["presentation", "date", "id", "startDate", 3, "ionChange", "firstDayOfWeek", "value"], ["presentation", "date", "id", "endDate", 3, "ionChange", "firstDayOfWeek", "value"], ["color", "danger", "slot", "start", "name", "trash", "size", "medium", 3, "click"], ["color", "primary", "slot", "start", "name", "copy", "size", "medium", 3, "click"], ["slot", "end"], [2, "width", "60%"], [2, "width", "30%"], [2, "width", "40%"], ["animated", "", 2, "width", "80px", "height", "20px"], ["animated", "", 2, "width", "100px"], ["animated", "", 2, "width", "120px"], ["animated", "", 2, "width", "60%"], ["animated", "", 2, "width", "80%"], ["animated", "", 2, "width", "40%"], ["animated", "", 2, "width", "50%"], ["animated", "", 2, "width", "90%"], ["slot", "start", "name", "time-outline"], ["animated", "", 2, "width", "30px"], ["animated", "", 2, "width", "70%"], ["value", "helpers"], ["slot", "header"], ["animated", "", 2, "width", "150px"], ["slot", "start", "name", "person-outline"]], template: function HelferDetailPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HelferDetailPage_ng_container_0_Template, 21, 16, "ng-container", 3);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275template(2, HelferDetailPage_ng_template_2_Template, 7, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, HelferDetailPage_ng_template_4_Template, 70, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const loading_r43 = \u0275\u0275reference(5);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 2, ctx.event$))("ngIfElse", loading_r43);
  }
}, dependencies: [NgForOf, NgIf, IonAccordion, IonAccordionGroup, IonBadge, IonButton, IonButtons, IonContent, IonDatetime, IonDatetimeButton, IonFabButton, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonSkeletonText, IonTextarea, IonTitle, IonToolbar, IonModal, SelectValueAccessorDirective, TextValueAccessorDirective, AsyncPipe, DatePipe, TranslatePipe], encapsulation: 2 });
var HelferDetailPage = _HelferDetailPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HelferDetailPage, { className: "HelferDetailPage", filePath: "src/app/pages/helfer/helfer-detail/helfer-detail.page.ts", lineNumber: 40 });
})();

export {
  HelferDetailPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9oZWxmZXIvaGVsZmVyLWRldGFpbC9oZWxmZXItZGV0YWlsLnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9oZWxmZXIvaGVsZmVyLWRldGFpbC9oZWxmZXItZGV0YWlsLnBhZ2UuaHRtbCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBBbGVydENvbnRyb2xsZXIsXG4gIElvbkl0ZW1TbGlkaW5nLFxuICBNb2RhbENvbnRyb2xsZXIsXG4gIE5hdlBhcmFtcyxcbiAgVG9hc3RDb250cm9sbGVyLFxufSBmcm9tIFwiQGlvbmljL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxuICBjYXRjaEVycm9yLFxuICBjb21iaW5lTGF0ZXN0LFxuICBmaXJzdFZhbHVlRnJvbSxcbiAgZm9ya0pvaW4sXG4gIGxhc3RWYWx1ZUZyb20sXG4gIG1hcCxcbiAgb2YsXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbiAgdGFwLFxufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQnJvd3NlciB9IGZyb20gXCJAY2FwYWNpdG9yL2Jyb3dzZXJcIjtcbmltcG9ydCB7IEhlbGZlckV2ZW50LCBTY2hpY2h0IH0gZnJvbSBcInNyYy9hcHAvbW9kZWxzL2V2ZW50XCI7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcInNyYy9hcHAvbW9kZWxzL3VzZXJcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS9ldmVudC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZVNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS91c2VyLXByb2ZpbGUuc2VydmljZVwiO1xuaW1wb3J0IHsgTWVtYmVyUGFnZSB9IGZyb20gXCIuLi8uLi9tZW1iZXIvbWVtYmVyLnBhZ2VcIjtcbmltcG9ydCB7IENsdWIgfSBmcm9tIFwic3JjL2FwcC9tb2RlbHMvY2x1YlwiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtaGVsZmVyLWRldGFpbFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaGVsZmVyLWRldGFpbC5wYWdlLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaGVsZmVyLWRldGFpbC5wYWdlLnNjc3NcIl0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgSGVsZmVyRGV0YWlsUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dChcImRhdGFcIikgZXZlbnQ6IEhlbGZlckV2ZW50O1xuICBASW5wdXQoXCJpc0Z1dHVyZVwiKSBpc0Z1dHVyZTogYm9vbGVhbjtcblxuICBldmVudCQ6IE9ic2VydmFibGU8YW55PjtcbiAgc2NoaWNodGVuJDogT2JzZXJ2YWJsZTxhbnlbXT47XG5cbiAgbW9kZSA9IFwieWVzXCI7XG5cbiAgYWxsb3dFZGl0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgdXNlciQ6IE9ic2VydmFibGU8VXNlcj47XG4gIHVzZXI6IFVzZXI7XG5cbiAgY2x1YkFkbWluTGlzdCQ6IE9ic2VydmFibGU8Q2x1YltdPjtcbiAgZXZlbnRIYXNDaGFuZ2VkOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsXG4gICAgcHJpdmF0ZSByZWFkb25seSB1c2VyUHJvZmlsZVNlcnZpY2U6IFVzZXJQcm9maWxlU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmJTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSB0b2FzdENvbnRyb2xsZXI6IFRvYXN0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFsZXJ0Q3RybDogQWxlcnRDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZVxuICApIHsgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZXZlbnQgPSB0aGlzLm5hdlBhcmFtcy5nZXQoXCJkYXRhXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YSBoZXJlOiAgIFwiICsgdGhpcy5ldmVudC5jbHViSWQsIHRoaXMuZXZlbnQuaWQpO1xuICAgIC8vIHRoaXMuZXZlbnQkID0gb2YodGhpcy5ldmVudCk7XG5cbiAgICAvLyBHRVQgSEVMRkVSRVZFTlQgJiYgQkFTSUMgQVRURU5ERUVcbiAgICB0aGlzLmV2ZW50JCA9IHRoaXMuZ2V0SGVsZmVyRXZlbnQodGhpcy5ldmVudC5jbHViSWQsIHRoaXMuZXZlbnQuaWQpO1xuXG4gICAgLy8gR0VUIFNDSElDSFRFTlxuICAgIHRoaXMuc2NoaWNodGVuJCA9IHRoaXMuZ2V0SGVsZmVyRXZlbnRTY2hpY2h0ZW5XaXRoQXR0ZW5kZWVzKHRoaXMuZXZlbnQuY2x1YklkLCB0aGlzLmV2ZW50LmlkKTtcblxuICAgIC8vQ3JlYXRlIEV2ZW50cywgSGVsZmVyLCBOZXdzXG4gICAgdGhpcy5jbHViQWRtaW5MaXN0JCA9IHRoaXMuZmJTZXJ2aWNlLmdldENsdWJBZG1pbkxpc3QoKTtcbiAgICB0aGlzLmV2ZW50SGFzQ2hhbmdlZCA9IHt9O1xuICB9XG5cbiAgaXNDbHViQWRtaW4oY2x1YkFkbWluTGlzdDogYW55W10sIGNsdWJJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNsdWJBZG1pbkxpc3QgJiYgY2x1YkFkbWluTGlzdC5zb21lKGNsdWIgPT4gY2x1Yi5pZCA9PT0gY2x1YklkKTtcbiAgfVxuICBhc3luYyBlZGl0KCkge1xuXG4gICAgaWYgKHRoaXMuYWxsb3dFZGl0KSB7XG4gICAgICB0aGlzLmFsbG93RWRpdCA9IGZhbHNlO1xuXG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5ldmVudEhhc0NoYW5nZWQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gYWxlcnQoXCJjaGFuZ2VcIilcbiAgICAgICAgY29uc3QgdXBkYXRlZEV2ZW50ID0gYXdhaXQgdGhpcy5ldmVudFNlcnZpY2UuY2hhbmdlSGVsZmVyRXZlbnQodGhpcy5ldmVudEhhc0NoYW5nZWQsIHRoaXMuZXZlbnQuY2x1YklkLCB0aGlzLmV2ZW50LmlkKS5jYXRjaChlID0+IHtcbiAgICAgICAgICB0aGlzLnRvYXN0QWN0aW9uRXJyb3IoZSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1cGRhdGVkRXZlbnQpO1xuICAgICAgICB0aGlzLnByZXNlbnRUb2FzdCgpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWxsb3dFZGl0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgdXBkYXRlRXZlbnQoZXZlbnQsIGZpZWxkKSB7XG4gICAgY29uc29sZS5sb2coZmllbGQsIGV2ZW50LmRldGFpbClcbiAgICB0aGlzLmV2ZW50SGFzQ2hhbmdlZFtmaWVsZF0gPSBldmVudC5kZXRhaWwudmFsdWU7XG4gIH1cbiAgZ2V0SGVsZmVyRXZlbnQoY2x1YklkOiBzdHJpbmcsIGV2ZW50SWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXIkKCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICB0YXAoKHVzZXIpID0+IHtcbiAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIG5vdCBmb3VuZFwiKTtcbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuZXZlbnRTZXJ2aWNlLmdldENsdWJIZWxmZXJFdmVudFJlZihjbHViSWQsIGV2ZW50SWQpKSxcbiAgICAgIHN3aXRjaE1hcCgoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFldmVudCkgcmV0dXJuIG9mKG51bGwpO1xuXG4gICAgICAgIC8vIEZldGNoIGNsdWIgZGV0YWlsc1xuICAgICAgICByZXR1cm4gdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1YlJlZihjbHViSWQpLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKGNsdWIgPT4ge1xuICAgICAgICAgICAgaWYgKCFjbHViKSByZXR1cm4gb2YobnVsbCk7XG5cbiAgICAgICAgICAgIC8vIEZldGNoIGFsbCBjbHViIG1lbWJlcnMgZmlyc3RcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZiU2VydmljZS5nZXRDbHViTWVtYmVyUmVmcyhjbHViSWQpLnBpcGUoXG4gICAgICAgICAgICAgIHN3aXRjaE1hcChjbHViTWVtYmVycyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2x1Yk1lbWJlclByb2ZpbGVzJCA9IGNsdWJNZW1iZXJzLm1hcChtZW1iZXIgPT5cbiAgICAgICAgICAgICAgICAgIHRoaXMudXNlclByb2ZpbGVTZXJ2aWNlLmdldFVzZXJQcm9maWxlQnlJZChtZW1iZXIuaWQpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRmFpbGVkIHRvIGZldGNoIHByb2ZpbGUgZm9yIGNsdWIgbWVtYmVyICR7bWVtYmVyLmlkfTpgLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvZih7IGlkOiBtZW1iZXIuaWQsIGZpcnN0TmFtZTogXCJVbmtub3duXCIsIGxhc3ROYW1lOiBcIlVua25vd25cIiwgc3RhdHVzOiBudWxsIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAvLyBGZXRjaCBhbGwgYXR0ZW5kZWVzIG5leHRcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ya0pvaW4oY2x1Yk1lbWJlclByb2ZpbGVzJCkucGlwZShcbiAgICAgICAgICAgICAgICAgIHN3aXRjaE1hcChjbHViTWVtYmVyc1dpdGhEZXRhaWxzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRTZXJ2aWNlLmdldENsdWJIZWxmZXJFdmVudEF0dGVuZGVlc1JlZihjbHViSWQsIGV2ZW50SWQpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgbWFwKGF0dGVuZGVlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRlbmRlZURldGFpbHMgPSBhdHRlbmRlZXMubWFwKGF0dGVuZGVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsID0gY2x1Yk1lbWJlcnNXaXRoRGV0YWlscy5maW5kKG1lbWJlciA9PiBtZW1iZXIgJiYgbWVtYmVyLmlkID09PSBhdHRlbmRlZS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZXRhaWwgPyB7IC4uLmRldGFpbCwgc3RhdHVzOiBhdHRlbmRlZS5zdGF0dXMgfSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBudWxsKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0ZW5kZWVMaXN0VHJ1ZSA9IGF0dGVuZGVlRGV0YWlscy5maWx0ZXIoYXR0ID0+IGF0dCAmJiBhdHQuc3RhdHVzID09PSB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dGVuZGVlTGlzdEZhbHNlID0gYXR0ZW5kZWVEZXRhaWxzLmZpbHRlcihhdHQgPT4gYXR0ICYmIGF0dC5zdGF0dXMgPT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbmRlZElkcyA9IG5ldyBTZXQoYXR0ZW5kZWVEZXRhaWxzLm1hcChhdHQgPT4gYXR0LmlkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bnJlc3BvbmRlZE1lbWJlcnMgPSBjbHViTWVtYmVyc1dpdGhEZXRhaWxzLmZpbHRlcihtZW1iZXIgPT4gbWVtYmVyICYmICFyZXNwb25kZWRJZHMuaGFzKG1lbWJlci5pZCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VyQXR0ZW5kZWUgPSBhdHRlbmRlZURldGFpbHMuZmluZChhdHQgPT4gYXR0ICYmIGF0dC5pZCA9PT0gdGhpcy51c2VyLnVpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSB1c2VyQXR0ZW5kZWUgPyB1c2VyQXR0ZW5kZWUuc3RhdHVzIDogbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsdWIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlczogYXR0ZW5kZWVEZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbmRlZUxpc3RUcnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbmRlZUxpc3RGYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5yZXNwb25kZWRNZW1iZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBhdHRlbmRlZXM6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2Yoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5ldmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2x1YixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVMaXN0VHJ1ZTogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlTGlzdEZhbHNlOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5yZXNwb25kZWRNZW1iZXJzOiBjbHViTWVtYmVyc1dpdGhEZXRhaWxzLmZpbHRlcihtZW1iZXIgPT4gbWVtYmVyICE9PSBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjbHViIG1lbWJlcnM6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHtcbiAgICAgICAgICAgICAgICAgIC4uLmV2ZW50LFxuICAgICAgICAgICAgICAgICAgY2x1YixcbiAgICAgICAgICAgICAgICAgIGF0dGVuZGVlczogW10sXG4gICAgICAgICAgICAgICAgICBhdHRlbmRlZUxpc3RUcnVlOiBbXSxcbiAgICAgICAgICAgICAgICAgIGF0dGVuZGVlTGlzdEZhbHNlOiBbXSxcbiAgICAgICAgICAgICAgICAgIHVucmVzcG9uZGVkTWVtYmVyczogW10sXG4gICAgICAgICAgICAgICAgICBzdGF0dXM6IG51bGxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gZ2V0SGVsZmVyRXZlbnRXaXRoQXR0ZW5kZWVzOlwiLCBlcnIpO1xuICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRIZWxmZXJFdmVudFNjaGljaHRlbldpdGhBdHRlbmRlZXMoY2x1YklkOiBzdHJpbmcsIGV2ZW50SWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmV2ZW50U2VydmljZS5nZXRDbHViSGVsZmVyRXZlbnRTY2hpY2h0ZW5SZWYoY2x1YklkLCBldmVudElkKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChzY2hpY2h0ZW4pID0+IHtcbiAgICAgICAgaWYgKHNjaGljaHRlbi5sZW5ndGggPT09IDApIHJldHVybiBvZihbXSk7IC8vIE5vIHNjaGljaHRlbiBmb3VuZFxuXG4gICAgICAgIC8vIFNvcnQgdGhlIHNjaGljaHRlbiBieSB0aW1lRnJvbSBhc2NlbmRpbmcgYW5kIHRoZW4gYnkgbmFtZSBBLVpcbiAgICAgICAgY29uc3Qgc29ydGVkU2NoaWNodGVuID0gc2NoaWNodGVuLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICBjb25zdCB0aW1lQ29tcGFyaXNvbiA9IGEudGltZUZyb20ubG9jYWxlQ29tcGFyZShiLnRpbWVGcm9tKTsgLy8gQXNjZW5kaW5nIG9yZGVyIGJ5IHRpbWVGcm9tXG4gICAgICAgICAgaWYgKHRpbWVDb21wYXJpc29uICE9PSAwKSByZXR1cm4gdGltZUNvbXBhcmlzb247IC8vIElmIHRpbWVGcm9tIGlzIGRpZmZlcmVudCwgdXNlIGl0XG4gICAgICAgICAgcmV0dXJuIGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSk7IC8vIElmIHRpbWVGcm9tIGlzIHRoZSBzYW1lLCBzb3J0IGJ5IG5hbWUgQS1aXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmJTZXJ2aWNlLmdldENsdWJNZW1iZXJSZWZzKGNsdWJJZCkucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoY2x1Yk1lbWJlcnMgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2x1Yk1lbWJlclByb2ZpbGVzJCA9IGNsdWJNZW1iZXJzLm1hcChtZW1iZXIgPT5cbiAgICAgICAgICAgICAgdGhpcy51c2VyUHJvZmlsZVNlcnZpY2UuZ2V0VXNlclByb2ZpbGVCeUlkKG1lbWJlci5pZCkucGlwZShcbiAgICAgICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBmZXRjaCBwcm9maWxlIGZvciBjbHViIG1lbWJlciAke21lbWJlci5pZH06YCwgZXJyKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBvZih7IGlkOiBtZW1iZXIuaWQsIGZpcnN0TmFtZTogXCJVbmtub3duXCIsIGxhc3ROYW1lOiBcIlVua25vd25cIiwgc3RhdHVzOiBudWxsLCBjb25maXJtZWQ6IG51bGwgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBmb3JrSm9pbihjbHViTWVtYmVyUHJvZmlsZXMkKS5waXBlKFxuICAgICAgICAgICAgICBzd2l0Y2hNYXAoY2x1Yk1lbWJlcnNXaXRoRGV0YWlscyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NoaWNodGVuV2l0aEF0dGVuZGVlcyQgPSBzb3J0ZWRTY2hpY2h0ZW4ubWFwKHNjaGljaHQgPT5cbiAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRTZXJ2aWNlLmdldENsdWJIZWxmZXJFdmVudFNjaGljaHRBdHRlbmRlZXNSZWYoY2x1YklkLCBldmVudElkLCBzY2hpY2h0LmlkKS5waXBlKFxuICAgICAgICAgICAgICAgICAgICBtYXAoYXR0ZW5kZWVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRlbmRlZURldGFpbHMgPSBhdHRlbmRlZXMubWFwKGF0dGVuZGVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbCA9IGNsdWJNZW1iZXJzV2l0aERldGFpbHMuZmluZChtZW1iZXIgPT4gbWVtYmVyICYmIG1lbWJlci5pZCA9PT0gYXR0ZW5kZWUuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRldGFpbCA/IHsgLi4uZGV0YWlsLCBzdGF0dXM6IGF0dGVuZGVlLnN0YXR1cywgY29uZmlybWVkOiBhdHRlbmRlZS5jb25maXJtZWQgfSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgfSkuZmlsdGVyKGl0ZW0gPT4gaXRlbSk7ICAvLyBFbnN1cmUgbnVsbHMgYXJlIHJlbW92ZWRcblxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dGVuZGVlTGlzdFRydWUgPSBhdHRlbmRlZURldGFpbHMuZmlsdGVyKGF0dCA9PiBhdHQuc3RhdHVzID09PSB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRlbmRlZUxpc3RGYWxzZSA9IGF0dGVuZGVlRGV0YWlscy5maWx0ZXIoYXR0ID0+IGF0dC5zdGF0dXMgPT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25kZWRJZHMgPSBuZXcgU2V0KGF0dGVuZGVlRGV0YWlscy5tYXAoYXR0ID0+IGF0dC5pZCkpO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVucmVzcG9uZGVkTWVtYmVycyA9IGNsdWJNZW1iZXJzV2l0aERldGFpbHMuZmlsdGVyKG1lbWJlciA9PiBtZW1iZXIgJiYgIXJlc3BvbmRlZElkcy5oYXMobWVtYmVyLmlkKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSB1c2VyJ3MgYXR0ZW5kZWUgZGV0YWlscyB0byBnZXQgdGhlIHVzZXIncyBzdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VyQXR0ZW5kZWUgPSBhdHRlbmRlZURldGFpbHMuZmluZChhdHQgPT4gYXR0LmlkID09PSB0aGlzLnVzZXIudWlkKTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VyU3RhdHVzID0gdXNlckF0dGVuZGVlID8gdXNlckF0dGVuZGVlLnN0YXR1cyA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlckNvbmZpcm1lZCA9IHVzZXJBdHRlbmRlZSA/IHVzZXJBdHRlbmRlZS5jb25maXJtZWQgOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNjaGljaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRlbmRlZXM6IGF0dGVuZGVlRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlTGlzdFRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRlbmRlZUxpc3RGYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVucmVzcG9uZGVkTWVtYmVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogdXNlclN0YXR1cywgIC8vIFN0YXR1cyBvZiB0aGUgbG9nZ2VkLWluIHVzZXIgYXMgYW4gYXR0ZW5kZWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1lZDogdXNlckNvbmZpcm1lZFxuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGF0dGVuZGVlcyBmb3Igc2NoaWNodDpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2Yoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2NoaWNodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRlbmRlZUxpc3RUcnVlOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlTGlzdEZhbHNlOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVucmVzcG9uZGVkTWVtYmVyczogY2x1Yk1lbWJlcnNXaXRoRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1lZDogbnVsbFxuXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdChzY2hpY2h0ZW5XaXRoQXR0ZW5kZWVzJCk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjbHViIG1lbWJlcnM6XCIsIGVycik7XG4gICAgICAgICAgICByZXR1cm4gb2Yoc2NoaWNodGVuLm1hcChzY2hpY2h0ID0+ICh7XG4gICAgICAgICAgICAgIC4uLnNjaGljaHQsXG4gICAgICAgICAgICAgIGF0dGVuZGVlczogW10sXG4gICAgICAgICAgICAgIGF0dGVuZGVlTGlzdFRydWU6IFtdLFxuICAgICAgICAgICAgICBhdHRlbmRlZUxpc3RGYWxzZTogW10sXG4gICAgICAgICAgICAgIHVucmVzcG9uZGVkTWVtYmVyczogW10sXG4gICAgICAgICAgICAgIHN0YXR1czogbnVsbCxcbiAgICAgICAgICAgICAgY29uZmlybWVkOiBudWxsXG4gICAgICAgICAgICB9KSkpO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGdldEhlbGZlckV2ZW50U2NoaWNodGVuV2l0aEF0dGVuZGVlczpcIiwgZXJyKTtcbiAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGNvbmZpcm1TY2hpY2h0ZW4oKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNjaGljaHRlbiA9IGF3YWl0IGZpcnN0VmFsdWVGcm9tKFxuICAgICAgICB0aGlzLmdldEhlbGZlckV2ZW50U2NoaWNodGVuV2l0aEF0dGVuZGVlcyh0aGlzLmV2ZW50LmNsdWJJZCwgdGhpcy5ldmVudC5pZClcbiAgICAgICk7XG5cbiAgICAgIGxldCBhbGVydElucHV0cyA9IHNjaGljaHRlbi5yZWR1Y2UoKGFjYywgc2NoaWNodCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dHMgPSBzY2hpY2h0LmF0dGVuZGVlTGlzdFRydWVcbiAgICAgICAgICAuZmlsdGVyKG1lbWJlciA9PiAhbWVtYmVyLmNvbmZpcm1lZCAmJiBtZW1iZXIuc3RhdHVzKVxuICAgICAgICAgIC5tYXAobWVtYmVyID0+ICh7XG4gICAgICAgICAgICBuYW1lOiBtZW1iZXIuaWQsXG4gICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICBjaGVja2VkOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgbWVtYmVySWQ6IG1lbWJlci5pZCxcbiAgICAgICAgICAgICAgc2NoaWNodElkOiBzY2hpY2h0LmlkLFxuICAgICAgICAgICAgICBwb2ludHM6IHNjaGljaHQucG9pbnRzLFxuICAgICAgICAgICAgICBldmVudElkOiB0aGlzLmV2ZW50LmlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhYmVsOiBgJHttZW1iZXIuZmlyc3ROYW1lfSAke21lbWJlci5sYXN0TmFtZX0gLSAke3NjaGljaHQubmFtZX1gXG4gICAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gWy4uLmFjYywgLi4uaW5wdXRzXTtcbiAgICAgIH0sIFtdKTtcblxuICAgICAgaWYgKGFsZXJ0SW5wdXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgY2FuY2VsVGV4dCA9IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLmNhbmNlbFwiKSk7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1UZXh0ID0gYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uY29uZmlybVwiKSk7XG5cbiAgICAgICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgICAgICAgIGhlYWRlcjogXCJIZWxmZXJwdW5rdGUgYmVzdMOkdGlnZW5cIixcbiAgICAgICAgICBzdWJIZWFkZXI6IFwiQml0dGUgZXJzdCBuYWNoIGRlbSBFaW5zYXR6IGJlc3TDpHRpZ2VuIVwiLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiV8OkaGxlIGRpZSBNaXRnbGllZGVyIHVtIGRpZSBIZWxmZXJwdW5rdGUgenUgYmVzdMOkdGlnZW46XCIsXG4gICAgICAgICAgaW5wdXRzOiBhbGVydElucHV0cyxcbiAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IGNhbmNlbFRleHQsXG4gICAgICAgICAgICAgIHJvbGU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiBjb25zb2xlLmxvZyhcIk9wZXJhdGlvbiBjYW5jZWxsZWRcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBjb25maXJtVGV4dCxcbiAgICAgICAgICAgICAgaGFuZGxlcjogKGV2ZW50cykgPT4gdGhpcy5oYW5kbGVDb25maXJtKGV2ZW50cyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICAgICAgbWVzc2FnZTogXCJLZWluZSBFaW5zw6R0emUgenVtIEJlc3TDpHRpZ2VuIHZlcmbDvGdiYXJcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcbiAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgIH0pO1xuICAgICAgICB0b2FzdC5wcmVzZW50KCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBjb25maXJtU2NoaWNodGVuOlwiLCBlcnJvcik7XG4gICAgICAvLyBIYW5kbGUgZXJyb3IgYXBwcm9wcmlhdGVseVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZUNvbmZpcm0oZXZlbnRzKSB7XG4gICAgZm9yIChjb25zdCBldmVudCBvZiBldmVudHMpIHtcbiAgICAgIGF3YWl0IHRoaXMuZXZlbnRTZXJ2aWNlLnNldENsdWJIZWxmZXJFdmVudFNjaGljaHRBdHRlbmRlZVN0YXR1c0NvbmZpcm0oXG4gICAgICAgIHRoaXMuZXZlbnQuY2x1YklkLFxuICAgICAgICBldmVudC5ldmVudElkLFxuICAgICAgICBldmVudC5zY2hpY2h0SWQsXG4gICAgICAgIGV2ZW50Lm1lbWJlcklkLFxuICAgICAgICBldmVudC5wb2ludHNcbiAgICAgICk7XG4gICAgfVxuICB9XG5cblxuICBhc3luYyBvcGVuVXJsKHVybDogc3RyaW5nKSB7XG4gICAgQnJvd3Nlci5vcGVuKHtcbiAgICAgIHVybDogdXJsXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyB0b2dnbGVTY2hpY2h0SXRlbShcbiAgICBzbGlkaW5nSXRlbTogSW9uSXRlbVNsaWRpbmcsXG4gICAgc3RhdHVzOiBib29sZWFuLCBldmVudCwgc2NoaWNodCxcbiAgICBtZW1iZXJJZDogc3RyaW5nLFxuICApIHtcbiAgICBzbGlkaW5nSXRlbS5jbG9zZU9wZW5lZCgpO1xuXG4gICAgYXdhaXQgdGhpcy5ldmVudFNlcnZpY2Uuc2V0Q2x1YkhlbGZlckV2ZW50U2NoaWNodEF0dGVuZGVlU3RhdHVzQWRtaW4oXG4gICAgICBzdGF0dXMsXG4gICAgICBldmVudC5jbHViSWQsXG4gICAgICBldmVudC5pZCwgc2NoaWNodC5pZCxcbiAgICAgIG1lbWJlcklkLFxuICAgICk7XG4gICAgdGhpcy5wcmVzZW50VG9hc3QoKTtcbiAgfVxuXG4gIGFzeW5jIHRvZ2dsZVNjaGljaHQoc3RhdHVzOiBib29sZWFuLCBldmVudCwgc2NoaWNodCkge1xuICAgIGNvbnNvbGUubG9nKGBTZXQgU3RhdHVzICR7c3RhdHVzfWApO1xuXG5cbiAgICAvLyBTZXQgXCJnbG9iYWwgc3RhdHVzXCIgYXMgd2VsbC4uID8gRG9lc24ndCBtYWtlIHNlbnNlLi5cbiAgICAvLyB0aGlzLnRvZ2dsZShzdGF0dXMsIHRoaXMuZXZlbnQpO1xuXG4gICAgY29uc29sZS5sb2coXG4gICAgICBgU2V0IFN0YXR1cyAke3N0YXR1c30gZm9yIHVzZXIgJHt0aGlzLnVzZXIudWlkfSBhbmQgQ2x1YiAke2V2ZW50LmNsdWJJZH0gYW5kIGV2ZW50ICR7ZXZlbnQuaWR9YFxuICAgICk7XG4gICAgY29uc3QgbmV3U3RhcnREYXRlID0gZXZlbnQuZGF0ZS50b0RhdGUoKTtcbiAgICBuZXdTdGFydERhdGUuc2V0SG91cnMoTnVtYmVyKGV2ZW50LnRpbWVGcm9tLnN1YnN0cmluZygwLCAyKSkpO1xuICAgIC8vIGNvbnNvbGUubG9nKG5ld1N0YXJ0RGF0ZSk7XG5cbiAgICAvLyBHZXQgdGVhbSB0aHJlc2hvbGQgdmlhIHRyYWluaW5nLnRlYW1JZFxuICAgIGNvbnNvbGUubG9nKFwiR3Jlbnp3ZXJ0IFwiKVxuICAgIGNvbnN0IGhlbGZlclRocmVzaG9sZCA9IGV2ZW50LmNsdWIuaGVsZmVyVGhyZXNob2xkIHx8IDA7XG4gICAgY29uc29sZS5sb2coaGVsZmVyVGhyZXNob2xkKTtcblxuICAgIGlmIChzY2hpY2h0WydhdHRlbmRlZUxpc3RUcnVlJ10ubGVuZ3RoID49IHNjaGljaHQuY291bnROZWVkZWQgJiYgc3RhdHVzID09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidG9vIG1hbnlcIik7XG4gICAgICB0aGlzLnRvb01hbnkoKTtcblxuICAgIH0gZWxzZSBpZiAoKChuZXdTdGFydERhdGUuZ2V0VGltZSgpIC0gbmV3IERhdGUoKS5nZXRUaW1lKCkpIDwgKDEwMDAgKiA2MCAqIDYwICogaGVsZmVyVGhyZXNob2xkKSkgJiYgc3RhdHVzID09IGZhbHNlICYmIGhlbGZlclRocmVzaG9sZCkge1xuICAgICAgLy8gVmVycMOkdGV0ZSBBYm1lbGR1bmc/XG4gICAgICBjb25zb2xlLmxvZyhcInRvbyBsYXRlXCIpO1xuICAgICAgYXdhaXQgdGhpcy50b29MYXRlVG9nZ2xlKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT0tcbiAgICAgIGF3YWl0IHRoaXMuZXZlbnRTZXJ2aWNlLnNldENsdWJIZWxmZXJFdmVudFNjaGljaHRBdHRlbmRlZVN0YXR1cyhcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBldmVudC5jbHViSWQsXG4gICAgICAgIGV2ZW50LmlkLFxuICAgICAgICBzY2hpY2h0LmlkXG4gICAgICApO1xuICAgICAgdGhpcy5wcmVzZW50VG9hc3QoKTtcbiAgICB9XG5cblxuICB9XG5cbiAgYXN5bmMgb3Blbk1lbWJlcihtZW1iZXI6IFByb2ZpbGUpIHtcbiAgICBjb25zb2xlLmxvZyhcIm9wZW5NZW1iZXJcIik7XG4gICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoe1xuICAgICAgY29tcG9uZW50OiBNZW1iZXJQYWdlLFxuICAgICAgcHJlc2VudGluZ0VsZW1lbnQ6IGF3YWl0IHRoaXMubW9kYWxDdHJsLmdldFRvcCgpLFxuICAgICAgY2FuRGlzbWlzczogdHJ1ZSxcbiAgICAgIHNob3dCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIGRhdGE6IG1lbWJlcixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgbW9kYWwucHJlc2VudCgpO1xuXG4gICAgY29uc3QgeyBkYXRhLCByb2xlIH0gPSBhd2FpdCBtb2RhbC5vbldpbGxEaXNtaXNzKCk7XG5cbiAgICBpZiAocm9sZSA9PT0gXCJjb25maXJtXCIpIHtcbiAgICB9XG4gIH1cblxuICBhc3luYyB0b2dnbGUoc3RhdHVzOiBib29sZWFuLCBldmVudDogSGVsZmVyRXZlbnQgfCBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBTZXQgU3RhdHVzICR7c3RhdHVzfSBmb3IgdXNlciAke3RoaXMudXNlci51aWR9IGFuZCBDbHViICR7dGhpcy5ldmVudC5jbHViSWR9IGFuZCBldmVudCAke2V2ZW50LmlkfWBcbiAgICApO1xuICAgIGNvbnN0IG5ld1N0YXJ0RGF0ZSA9IGV2ZW50LmRhdGUudG9EYXRlKCk7XG4gICAgbmV3U3RhcnREYXRlLnNldEhvdXJzKE51bWJlcihldmVudC50aW1lRnJvbS5zdWJzdHJpbmcoMCwgMikpKTtcbiAgICAvLyBjb25zb2xlLmxvZyhuZXdTdGFydERhdGUpO1xuXG4gICAgLy8gR2V0IHRlYW0gdGhyZXNob2xkIHZpYSB0cmFpbmluZy50ZWFtSWRcbiAgICBjb25zb2xlLmxvZyhcIkdyZW56d2VydCBcIilcbiAgICBjb25zdCBoZWxmZXJUaHJlc2hvbGQgPSBldmVudC5jbHViLmhlbGZlclRocmVzaG9sZCB8fCAwO1xuICAgIGNvbnNvbGUubG9nKGhlbGZlclRocmVzaG9sZCk7XG5cbiAgICBpZiAoZXZlbnQuY291bnQgPj0gZXZlbnQuY291bnROZWVkZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidG9vIG1hbnlcIik7XG5cbiAgICB9IGVsc2UgaWYgKCgobmV3U3RhcnREYXRlLmdldFRpbWUoKSAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpKSA8ICgxMDAwICogNjAgKiA2MCAqIGhlbGZlclRocmVzaG9sZCkpICYmIHN0YXR1cyA9PSBmYWxzZSAmJiBoZWxmZXJUaHJlc2hvbGQpIHtcbiAgICAgIC8vIFZlcnDDpHRldGUgQWJtZWxkdW5nP1xuICAgICAgY29uc29sZS5sb2coXCJ0b28gbGF0ZVwiKTtcbiAgICAgIGF3YWl0IHRoaXMudG9vTGF0ZVRvZ2dsZSgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE9LXG4gICAgICBhd2FpdCB0aGlzLmV2ZW50U2VydmljZS5zZXRDbHViSGVsZmVyRXZlbnRBdHRlbmRlZVN0YXR1cyhcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICB0aGlzLmV2ZW50LmNsdWJJZCxcbiAgICAgICAgZXZlbnQuaWRcbiAgICAgICk7XG4gICAgICB0aGlzLnByZXNlbnRUb2FzdCgpO1xuICAgIH1cblxuICB9XG4gIGFzeW5jIHRvb0xhdGVUb2dnbGUoKSB7XG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiBcIkFibWVsZGVuIG5pY2h0IG3DtmdsaWNoXCIsXG4gICAgICBtZXNzYWdlOiBcIkJpdHRlIG1lbGRlIGRpY2ggZGlyZWt0IGJlaW0gVHJhaW5lcnRlYW0gdW0gZGljaCBhYnp1bWVsZGVuXCIsXG4gICAgICBidXR0b25zOiBbe1xuICAgICAgICByb2xlOiBcIlwiLFxuICAgICAgICB0ZXh0OiBcIk9LXCIsXG4gICAgICAgIGhhbmRsZXI6IChkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9KVxuICAgIGFsZXJ0LnByZXNlbnQoKVxuICB9XG5cbiAgYXN5bmMgdG9vTWFueSgpIHtcbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XG4gICAgICBoZWFkZXI6IFwiR2Vuw7xnZW5kIEhlbGZlclwiLFxuICAgICAgbWVzc2FnZTogXCJEaWUgU2NoaWNodCBoYXQgYmVyZWl0cyBnZW7DvGdlbmQgSGVsZmVyXCIsXG4gICAgICBidXR0b25zOiBbe1xuICAgICAgICByb2xlOiBcIlwiLFxuICAgICAgICB0ZXh0OiBcIk9LXCIsXG4gICAgICAgIGhhbmRsZXI6IChkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9KVxuICAgIGFsZXJ0LnByZXNlbnQoKVxuICB9XG5cbiAgYXN5bmMgcHJlc2VudFRvYXN0KCkge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLnN1Y2Nlc3NfX3NhdmVkXCIpKSxcbiAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgfSk7XG4gICAgdG9hc3QucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgdG9hc3RBY3Rpb25FcnJvcihlcnJvcikge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gIH1cblxuICBhc3luYyBlZGl0U2NoaWNodChzY2hpY2h0OiBTY2hpY2h0KSB7XG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiBcIlNjaGljaHQgYmVhcmJlaXRlblwiLFxuICAgICAgc3ViSGVhZGVyOiBcIiBcIixcbiAgICAgIG1lc3NhZ2U6IFwiRWluZSBIZWxmZXJzY2hpY2h0IGJlYXJiZWl0ZW4uXCIsXG4gICAgICBpbnB1dHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcIm5hbWVcIixcbiAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgICBsYWJlbDogXCJCZXNjaHJlaWJ1bmdcIixcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJCZXNjaHJlaWJ1bmdcIixcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICB2YWx1ZTogc2NoaWNodC5uYW1lLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwiY291bnRcIixcbiAgICAgICAgICBuYW1lOiBcImNvdW50TmVlZGVkXCIsXG4gICAgICAgICAgbGFiZWw6IFwiQW56YWhsIEhlbGZlclwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkFuemFobCBIZWxmZXJcIixcbiAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgIHZhbHVlOiBzY2hpY2h0LmNvdW50TmVlZGVkLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwicG9pbnRzXCIsXG4gICAgICAgICAgbmFtZTogXCJwb2ludHNcIixcbiAgICAgICAgICBsYWJlbDogXCJBbnphaGwgSGVsZmVycHVua3RlXCIsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiMVwiLFxuICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgdmFsdWU6IHNjaGljaHQucG9pbnRzLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwidGltZUZyb21cIixcbiAgICAgICAgICBuYW1lOiBcInRpbWVGcm9tXCIsXG4gICAgICAgICAgbGFiZWw6IFwiWmVpdCB2b25cIixcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJaZWl0IHZvblwiLFxuICAgICAgICAgIHR5cGU6IFwidGltZVwiLFxuICAgICAgICAgIHZhbHVlOiBzY2hpY2h0LnRpbWVGcm9tLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwidGltZVRvXCIsXG4gICAgICAgICAgbmFtZTogXCJ0aW1lVG9cIixcbiAgICAgICAgICBsYWJlbDogXCJaZWl0IGJpc1wiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlplaXQgYmlzXCIsXG4gICAgICAgICAgdHlwZTogXCJ0aW1lXCIsXG4gICAgICAgICAgdmFsdWU6IHNjaGljaHQudGltZVRvLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiQWJicmVjaGVuXCIsXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBYmJyZWNoZW5cIik7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiU3BlaWNoZXJuXCIsXG4gICAgICAgICAgaGFuZGxlcjogYXN5bmMgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmV2ZW50U2VydmljZS5jaGFuZ2VIZWxmZXJFdmVudFNjaGljaHQodGhpcy5ldmVudC5jbHViSWQsIHRoaXMuZXZlbnQuaWQsIHNjaGljaHQuaWQsIGRhdGEpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wcmVzZW50VG9hc3QoKTtcbiAgICAgICAgICAgIC8qY29uc3QgaW5kZXggPSB0aGlzLmV2ZW50LnNjaGljaHRlbi5maW5kSW5kZXgoKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0LmlkID09PSBzY2hpY2h0LmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgIHRoaXMuZXZlbnQuc2NoaWNodGVuW2luZGV4XSA9IHtcbiAgICAgICAgICAgICAgICBpZDogc2NoaWNodC5pZCxcbiAgICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgICAgIGNvdW50OiAwLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSovXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XG4gIH1cblxuICBhc3luYyBkZWxldGVTY2hpY2h0KHNjaGljaHQ6IFNjaGljaHQpIHtcbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XG4gICAgICBoZWFkZXI6IFwiU2NoaWNodCBsw7ZzY2hlblwiLFxuICAgICAgbWVzc2FnZTogXCJNw7ZjaHRlbiBTaWUgZGllc2UgU2NoaWNodCB3aXJrbGljaCBsw7ZzY2hlbj9cIixcbiAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiQWJicmVjaGVuXCIsXG4gICAgICAgICAgcm9sZTogXCJjYW5jZWxcIixcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkzDtnNjaGVuIGFiZ2Vicm9jaGVuXCIpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkzDtnNjaGVuXCIsXG4gICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5ldmVudFNlcnZpY2UuZGVsZXRlSGVsZmVyRXZlbnRTY2hpY2h0KHRoaXMuZXZlbnQuY2x1YklkLCB0aGlzLmV2ZW50LmlkLCBzY2hpY2h0LmlkKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucHJlc2VudFRvYXN0KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XG5cbiAgfVxuXG4gIGFzeW5jIGNvcHlTY2hpY2h0KHNjaGljaHQ6IFNjaGljaHQpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmV2ZW50LnRpbWVUbyk7XG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiBcIlNjaGljaHQgZXJzdGVsbGVuXCIsXG4gICAgICBzdWJIZWFkZXI6IFwiIFwiLFxuICAgICAgbWVzc2FnZTogXCJFaW5lIG5ldWUgSGVsZmVyc2NoaWNodCBlcnN0ZWxsZW4uXCIsXG4gICAgICBpbnB1dHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcIm5hbWVcIixcbiAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgICB2YWx1ZTogc2NoaWNodC5uYW1lLFxuICAgICAgICAgIGxhYmVsOiBcIkJlc2NocmVpYnVuZ1wiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkJlc2NocmVpYnVuZ1wiLFxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwiY291bnRcIixcbiAgICAgICAgICBuYW1lOiBcImNvdW50TmVlZGVkXCIsXG4gICAgICAgICAgdmFsdWU6IHNjaGljaHQuY291bnROZWVkZWQsXG4gICAgICAgICAgbGFiZWw6IFwiQW56YWhsIEhlbGZlclwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkFuemFobCBIZWxmZXJcIixcbiAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwicG9pbnRzXCIsXG4gICAgICAgICAgbmFtZTogXCJwb2ludHNcIixcbiAgICAgICAgICB2YWx1ZTogc2NoaWNodC5wb2ludHMsXG4gICAgICAgICAgbGFiZWw6IFwiQW56YWhsIEhlbGZlcnB1bmt0ZVwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkFuemFobCBIZWxmZXJwdW5rdGVcIixcbiAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCJ0aW1lRnJvbVwiLFxuICAgICAgICAgIG5hbWU6IFwidGltZUZyb21cIixcbiAgICAgICAgICB2YWx1ZTogc2NoaWNodC50aW1lRnJvbSxcbiAgICAgICAgICBsYWJlbDogXCJaZWl0IHZvblwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlplaXQgdm9uXCIsXG4gICAgICAgICAgdHlwZTogXCJ0aW1lXCIsXG5cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcInRpbWVUb1wiLFxuICAgICAgICAgIG5hbWU6IFwidGltZVRvXCIsXG4gICAgICAgICAgdmFsdWU6IHNjaGljaHQudGltZVRvLFxuICAgICAgICAgIGxhYmVsOiBcIlplaXQgYmlzXCIsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiWmVpdCBiaXNcIixcbiAgICAgICAgICB0eXBlOiBcInRpbWVcIixcblxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiQWJicmVjaGVuXCIsXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBYmJyZWNoZW5cIik7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiSGluenVmw7xnZW5cIixcbiAgICAgICAgICBoYW5kbGVyOiBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmV2ZW50U2VydmljZS5hZGROZXdIZWxmZXJFdmVudFNjaGljaHQodGhpcy5ldmVudC5jbHViSWQsIHRoaXMuZXZlbnQuaWQsIGRhdGEpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wcmVzZW50VG9hc3QoKTtcbiAgICAgICAgICAgIC8qdGhpcy5ldmVudC5zY2hpY2h0ZW4ucHVzaCh7XG4gICAgICAgICAgICAgIGlkOiB0aGlzLmV2ZW50LnNjaGljaHRlbi5sZW5ndGggKyAxLFxuICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgIH0pOyovXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gICAgYWxlcnQucHJlc2VudCgpO1xuICB9XG5cblxuICBhc3luYyBhZGRTY2hpY2h0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZXZlbnQudGltZVRvKTtcbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XG4gICAgICBoZWFkZXI6IFwiU2NoaWNodCBlcnN0ZWxsZW5cIixcbiAgICAgIHN1YkhlYWRlcjogXCIgXCIsXG4gICAgICBtZXNzYWdlOiBcIkVpbmUgbmV1ZSBIZWxmZXJzY2hpY2h0IGVyc3RlbGxlbi5cIixcbiAgICAgIGlucHV0czogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwibmFtZVwiLFxuICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICAgIGxhYmVsOiBcIkJlc2NocmVpYnVuZ1wiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkJlc2NocmVpYnVuZ1wiLFxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwiY291bnRcIixcbiAgICAgICAgICBuYW1lOiBcImNvdW50TmVlZGVkXCIsXG4gICAgICAgICAgbGFiZWw6IFwiQW56YWhsIEhlbGZlclwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkFuemFobCBIZWxmZXJcIixcbiAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwicG9pbnRzXCIsXG4gICAgICAgICAgbmFtZTogXCJwb2ludHNcIixcbiAgICAgICAgICBsYWJlbDogXCJBbnphaGwgSGVsZmVycHVua3RlXCIsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQW56YWhsIEhlbGZlcnB1bmt0ZVwiLFxuICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCJ0aW1lRnJvbVwiLFxuICAgICAgICAgIG5hbWU6IFwidGltZUZyb21cIixcbiAgICAgICAgICBsYWJlbDogXCJaZWl0IHZvblwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlplaXQgdm9uXCIsXG4gICAgICAgICAgdHlwZTogXCJ0aW1lXCIsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuZXZlbnQudGltZUZyb20uc2xpY2UoMTEsIDE2KSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcInRpbWVUb1wiLFxuICAgICAgICAgIG5hbWU6IFwidGltZVRvXCIsXG4gICAgICAgICAgbGFiZWw6IFwiWmVpdCBiaXNcIixcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJaZWl0IGJpc1wiLFxuICAgICAgICAgIHR5cGU6IFwidGltZVwiLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmV2ZW50LnRpbWVUby5zbGljZSgxMSwgMTYpLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiQWJicmVjaGVuXCIsXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBYmJyZWNoZW5cIik7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiSGluenVmw7xnZW5cIixcbiAgICAgICAgICBoYW5kbGVyOiBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmV2ZW50U2VydmljZS5hZGROZXdIZWxmZXJFdmVudFNjaGljaHQodGhpcy5ldmVudC5jbHViSWQsIHRoaXMuZXZlbnQuaWQsIGRhdGEpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wcmVzZW50VG9hc3QoKTtcbiAgICAgICAgICAgIC8qdGhpcy5ldmVudC5zY2hpY2h0ZW4ucHVzaCh7XG4gICAgICAgICAgICAgIGlkOiB0aGlzLmV2ZW50LnNjaGljaHRlbi5sZW5ndGggKyAxLFxuICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgIH0pOyovXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XG4gIH1cblxuICBhc3luYyBhZGRNZW1iZXJzVG9TY2hpY2h0KHNsaWRpbmdJdGVtOiBJb25JdGVtU2xpZGluZywgc2NoaWNodDogYW55KSB7XG4gICAgc2xpZGluZ0l0ZW0uY2xvc2VPcGVuZWQoKTtcbiAgICAvLyBIb2xlIGFsbGUgQ2x1Ym1pdGdsaWVkZXJcbiAgICBjb25zdCBjbHViTWVtYmVycyA9IGF3YWl0IGZpcnN0VmFsdWVGcm9tKFxuICAgICAgdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1Yk1lbWJlclJlZnModGhpcy5ldmVudC5jbHViSWQpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChtZW1iZXJzID0+IHtcbiAgICAgICAgICBjb25zdCBtZW1iZXJQcm9maWxlcyQgPSBtZW1iZXJzLm1hcChtZW1iZXIgPT5cbiAgICAgICAgICAgIHRoaXMudXNlclByb2ZpbGVTZXJ2aWNlLmdldFVzZXJQcm9maWxlQnlJZChtZW1iZXIuaWQpLnBpcGUoXG4gICAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggcHJvZmlsZSBmb3IgbWVtYmVyICR7bWVtYmVyLmlkfTpgLCBlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiBmb3JrSm9pbihtZW1iZXJQcm9maWxlcyQpO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIFxuICAgIC8vIEZpbHRlcmUgTWl0Z2xpZWRlciwgZGllIGJlcmVpdHMgaW4gZGVyIFNjaGljaHQgc2luZFxuICAgIGNvbnN0IGV4aXN0aW5nTWVtYmVySWRzID0gc2NoaWNodC5hdHRlbmRlZUxpc3RUcnVlLm1hcChtID0+IG0uaWQpO1xuICAgIGNvbnN0IGF2YWlsYWJsZU1lbWJlcnMgPSBjbHViTWVtYmVyc1xuICAgICAgLmZpbHRlcihtZW1iZXIgPT4gbWVtYmVyICYmICFleGlzdGluZ01lbWJlcklkcy5pbmNsdWRlcyhtZW1iZXIuaWQpKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEuZmlyc3ROYW1lLmxvY2FsZUNvbXBhcmUoYi5maXJzdE5hbWUpKTtcbiAgXG4gICAgaWYgKGF2YWlsYWJsZU1lbWJlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiaGVsZmVyLWRldGFpbC5ub19tZW1iZXJzX2F2YWlsYWJsZVwiKSksXG4gICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcbiAgICAgICAgY29sb3I6IFwid2FybmluZ1wiXG4gICAgICB9KTtcbiAgICAgIHRvYXN0LnByZXNlbnQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIFxuICAgIC8vIEVyc3RlbGxlIEFsZXJ0IG1pdCBDaGVja2JveGVuIGbDvHIgdmVyZsO8Z2JhcmUgTWl0Z2xpZWRlclxuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydEN0cmwuY3JlYXRlKHtcbiAgICAgIGhlYWRlcjogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJoZWxmZXItZGV0YWlsLmFkZF9tZW1iZXJzX3RpdGxlXCIpKSxcbiAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiaGVsZmVyLWRldGFpbC5hZGRfbWVtYmVyc19tZXNzYWdlXCIpKSxcbiAgICAgIGlucHV0czogYXZhaWxhYmxlTWVtYmVycy5tYXAobWVtYmVyID0+ICh7XG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgIGxhYmVsOiBgJHttZW1iZXIuZmlyc3ROYW1lfSAke21lbWJlci5sYXN0TmFtZX1gLFxuICAgICAgICB2YWx1ZTogbWVtYmVyLmlkLFxuICAgICAgICBjaGVja2VkOiBmYWxzZVxuICAgICAgfSkpLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uY2FuY2VsXCIpKSxcbiAgICAgICAgICByb2xlOiAnY2FuY2VsJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uY29uZmlybVwiKSksXG4gICAgICAgICAgaGFuZGxlcjogYXN5bmMgKHNlbGVjdGVkTWVtYmVySWRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRNZW1iZXJJZHMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIC8vIEbDvGdlIGF1c2dld8OkaGx0ZSBNaXRnbGllZGVyIHp1ciBTY2hpY2h0IGhpbnp1XG4gICAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gc2VsZWN0ZWRNZW1iZXJJZHMubWFwKG1lbWJlcklkID0+XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudFNlcnZpY2Uuc2V0Q2x1YkhlbGZlckV2ZW50U2NoaWNodEF0dGVuZGVlU3RhdHVzQWRtaW4oXG4gICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudC5jbHViSWQsXG4gICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50LmlkLFxuICAgICAgICAgICAgICAgICAgc2NoaWNodC5pZCxcbiAgICAgICAgICAgICAgICAgIG1lbWJlcklkXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgICAgICAgICAgICB0aGlzLnByZXNlbnRUb2FzdCgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIG1lbWJlcnMgdG8gc2NoaWNodDonLCBlcnJvcik7XG4gICAgICAgICAgICAgIHRoaXMudG9hc3RBY3Rpb25FcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG4gIFxuICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcbiAgfVxuXG5cbiAgY2hhbmdlVGltZUZyb20oZXYpIHtcbiAgICBjb25zb2xlLmxvZyhldi5kZXRhaWwudmFsdWUpO1xuICAgIGlmICh0aGlzLmV2ZW50LnRpbWVGcm9tID4gdGhpcy5ldmVudC50aW1lVG8pIHtcbiAgICAgIHRoaXMuZXZlbnQudGltZVRvID0gdGhpcy5ldmVudC50aW1lRnJvbTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGFydERhdGUoZXYpIHtcbiAgICBjb25zb2xlLmxvZyhldi5kZXRhaWwudmFsdWUpO1xuICAgIGlmICh0aGlzLmV2ZW50LnN0YXJ0RGF0ZSA+IHRoaXMuZXZlbnQuZW5kRGF0ZSkge1xuICAgICAgdGhpcy5ldmVudC5lbmREYXRlID0gdGhpcy5ldmVudC5zdGFydERhdGU7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY2xvc2UoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kYWxDdHJsLmRpc21pc3MobnVsbCwgXCJjbG9zZVwiKTtcbiAgfVxuXG4gIGFzeW5jIGNvbmZpcm0oKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kYWxDdHJsLmRpc21pc3ModGhpcy5ldmVudCwgXCJjb25maXJtXCIpO1xuICB9XG59XG4iLCAiPG5nLWNvbnRhaW5lciAqbmdJZj1cImV2ZW50JCB8IGFzeW5jIGFzIGV2ZW50OyBlbHNlIGxvYWRpbmdcIj5cblxuICA8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxuICAgIDxpb24tdG9vbGJhcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbHViQWRtaW5MaXN0JCB8IGFzeW5jIGFzIGNsdWJBZG1pbkxpc3RcIj5cbiAgICAgICAgPGlvbi1idXR0b25zICpuZ0lmPVwiaXNDbHViQWRtaW4oY2x1YkFkbWluTGlzdCwgZXZlbnQuY2x1YklkKVwiIHNsb3Q9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICA8aW9uLWJ1dHRvbiAqbmdJZj1cIiFhbGxvd0VkaXRcIiAoY2xpY2spPVwiZWRpdCgpXCI+e3tcImNvbW1vbi5lZGl0XCIgfCB0cmFuc2xhdGV9fTwvaW9uLWJ1dHRvbj5cbiAgICAgICAgICA8aW9uLWJ1dHRvbiAqbmdJZj1cImFsbG93RWRpdFwiIChjbGljayk9XCJlZGl0KClcIj57e1wiY29tbW9uLmRvbmVcIiB8IHRyYW5zbGF0ZX19PC9pb24tYnV0dG9uPlxuICAgICAgICA8L2lvbi1idXR0b25zPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8aW9uLXRpdGxlPnt7XCJjb21tb24uZGV0YWlsc1wiIHwgdHJhbnNsYXRlfX0gPC9pb24tdGl0bGU+XG4gICAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInByaW1hcnlcIj5cbiAgICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cImNsb3NlKClcIj57e1wiY29tbW9uLmNsb3NlXCIgfCB0cmFuc2xhdGV9fTwvaW9uLWJ1dHRvbj5cbiAgICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgPC9pb24tdG9vbGJhcj5cbiAgPC9pb24taGVhZGVyPlxuXG4gIDxpb24tY29udGVudD5cbiAgICA8aW9uLWhlYWRlciBjb2xsYXBzZT1cImNvbmRlbnNlXCI+XG4gICAgICA8aW9uLXRvb2xiYXI+XG4gICAgICAgIDxpb24tdGl0bGUgc2l6ZT1cImxhcmdlXCI+e3tcImNvbW1vbi5kZXRhaWxzXCIgfCB0cmFuc2xhdGV9fTwvaW9uLXRpdGxlPlxuICAgICAgPC9pb24tdG9vbGJhcj5cbiAgICA8L2lvbi1oZWFkZXI+XG5cbiAgICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIiAqbmdJZj1cIiFhbGxvd0VkaXRcIj5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJob21lLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsIGNsYXNzPVwiaW9uLXRleHQtd3JhcFwiPlxuICAgICAgICAgIDxoMj57e2V2ZW50Lm5hbWV9fTwvaDI+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cblxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cImNhbGVuZGFyLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIHt7ZXZlbnQuZGF0ZS50b0RhdGUoKSB8IGRhdGU6J2RkLk1NLllZWVkgJ319IHt7ZXZlbnQudGltZUZyb20gfFxuICAgICAgICAgICAgZGF0ZTonSEg6bW0nfX0gVWhyIC0ge3tldmVudC50aW1lVG8gfCBkYXRlOidISDptbSd9fSBVaHJcbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJsb2NhdGlvbi1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj5cbiAgICAgICAgICA8aDI+e3tldmVudC5sb2NhdGlvbn19PC9oMj5cbiAgICAgICAgICA8aDI+e3tldmVudC5zdHJlZXRBbmROdW1iZXJ9fSA8L2gyPlxuICAgICAgICAgIDxoMj57e2V2ZW50LnBvc3RhbENvZGV9fSB7e2V2ZW50LmNpdHl9fTwvaDI+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cblxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cImluZm9ybWF0aW9uLWNpcmNsZS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj5cbiAgICAgICAgICA8aDI+e3tldmVudC5kZXNjcmlwdGlvbn19PC9oMj5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8aW9uLWl0ZW0gKm5nSWY9XCJldmVudC5saW5rX3dlYlwiPlxuICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cImxpbmstb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbGFiZWwgY2xhc3M9XCJpb24tdGV4dC13cmFwXCI+XG4gICAgICAgICAgPGgyPnt7ZXZlbnQubGlua193ZWJ9fTwvaDI+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICA8aW9uLWJ1dHRvbiBzbG90PVwiZW5kXCIgKGNsaWNrKT1cIm9wZW5VcmwoZXZlbnQubGlua193ZWIpXCIgZmlsbD1cImNsZWFyXCI+XG4gICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwib3Blbi1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24taXRlbT5cblxuICAgICAgPGlvbi1pdGVtICpuZ0lmPVwiZXZlbnQubGlua19wb2xsXCI+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwiaGVscC1jaXJjbGUtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbGFiZWwgY2xhc3M9XCJpb24tdGV4dC13cmFwXCI+XG4gICAgICAgICAgPGgyPnt7ZXZlbnQubGlua19wb2xsfX08L2gyPlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgPGlvbi1idXR0b24gc2xvdD1cImVuZFwiIChjbGljayk9XCJvcGVuVXJsKGV2ZW50LmxpbmtfcG9sbClcIiBmaWxsPVwiY2xlYXJcIj5cbiAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJvcGVuLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgIDwvaW9uLWxpc3Q+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFhbGxvd0VkaXRcIj5cblxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNjaGljaHRlbiQgfCBhc3luYyBhcyBzY2hpY2h0ZW5cIj5cblxuICAgICAgICA8IS0tIEhlbGZlcmVpbnPDpHR6ZSBNSVQgU2NoaWNodGVuIC0tPlxuICAgICAgICA8aW9uLWxpc3QgbGluZXM9XCJmdWxsXCIgW2luc2V0XT1cInRydWVcIiAqbmdJZj1cInNjaGljaHRlbi5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgICAgIDxpb24tbGFiZWw+IHt7XCJoZWxmZXIuc2NoaWNodGVuXCIgfCB0cmFuc2xhdGV9fSA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgIDwhLS0gQkVTVMOgVElHRU4sIEZBTExTIENMVUJBRE1JTiAtLT5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbHViQWRtaW5MaXN0JCB8IGFzeW5jIGFzIGNsdWJBZG1pbkxpc3RcIj5cbiAgICAgICAgICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cImNvbmZpcm1TY2hpY2h0ZW4oKVwiICpuZ0lmPVwiaXNDbHViQWRtaW4oY2x1YkFkbWluTGlzdCwgZXZlbnQuY2x1YklkKVwiPiBiZXN0w6R0aWdlblxuICAgICAgICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzY2hpY2h0IG9mIHNjaGljaHRlblwiPlxuICAgICAgICAgICAgPGlvbi1pdGVtLXNsaWRpbmcgI2l0ZW0+XG4gICAgICAgICAgICA8aW9uLWl0ZW0+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc2NoaWNodC5jb25maXJtZWQgJiYgaXNGdXR1cmVcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJzY2hpY2h0LnN0YXR1cyA9PT0gbnVsbFwiIHNsb3Q9XCJpY29uLW9ubHlcIiBjb2xvcj1cIndhcm5pbmdcIiBzbG90PVwic3RhcnRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImhlbHAtY2lyY2xlXCIgKGNsaWNrKT1cInRvZ2dsZVNjaGljaHQodHJ1ZSwgZXZlbnQsIHNjaGljaHQpXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJzY2hpY2h0LnN0YXR1cyA9PT0gdHJ1ZVwiIHNsb3Q9XCJpY29uLW9ubHlcIiBjb2xvcj1cInN1Y2Nlc3NcIiBzbG90PVwic3RhcnRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZWNrbWFyay1jaXJjbGVcIiAoY2xpY2spPVwidG9nZ2xlU2NoaWNodChmYWxzZSwgZXZlbnQsIHNjaGljaHQpXCI+PC9pb24taWNvbj5cblxuICAgICAgICAgICAgICAgIDxpb24taWNvbiAqbmdJZj1cInNjaGljaHQuc3RhdHVzID09PSBmYWxzZVwiIHNsb3Q9XCJpY29uLW9ubHlcIiBjb2xvcj1cImRhbmdlclwiIHNsb3Q9XCJzdGFydFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY2xvc2UtY2lyY2xlXCIgKGNsaWNrKT1cInRvZ2dsZVNjaGljaHQodHJ1ZSwgZXZlbnQsIHNjaGljaHQpXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNGdXR1cmUgfHwgc2NoaWNodC5jb25maXJtZWRcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJzY2hpY2h0LnN0YXR1cyA9PT0gbnVsbFwiIHNsb3Q9XCJpY29uLW9ubHlcIiBjb2xvcj1cIndhcm5pbmdcIiBzbG90PVwic3RhcnRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImhlbHAtY2lyY2xlXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJzY2hpY2h0LnN0YXR1cyA9PT0gdHJ1ZVwiIHNsb3Q9XCJpY29uLW9ubHlcIiBjb2xvcj1cInN1Y2Nlc3NcIiBzbG90PVwic3RhcnRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZWNrbWFyay1jaXJjbGVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiAqbmdJZj1cInNjaGljaHQuc3RhdHVzID09PSBmYWxzZVwiIHNsb3Q9XCJpY29uLW9ubHlcIiBjb2xvcj1cImRhbmdlclwiIHNsb3Q9XCJzdGFydFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY2xvc2UtY2lyY2xlXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgICAgICAgPGgyPnt7c2NoaWNodC5uYW1lfX08L2gyPlxuICAgICAgICAgICAgICAgIDxoMz5aZWl0OiB7e3NjaGljaHQudGltZUZyb219fSBVaHIgLSB7e3NjaGljaHQudGltZVRvfX0gVWhyPC9oMz5cbiAgICAgICAgICAgICAgICA8aDM+e3snY29tbW9uLmhlbHBlcl9wb2ludHMnfCB0cmFuc2xhdGV9fToge3tzY2hpY2h0LnBvaW50c319PC9oMz5cbiAgICAgICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgIDxpb24tYmFkZ2U+e3tzY2hpY2h0LmF0dGVuZGVlTGlzdFRydWUubGVuZ3RofX0gL1xuICAgICAgICAgICAgICAgIHt7c2NoaWNodC5jb3VudE5lZWRlZH19XG4gICAgICAgICAgICAgIDwvaW9uLWJhZGdlPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9ucyBzaWRlPVwiZW5kXCIgKm5nSWY9XCJjbHViQWRtaW5MaXN0JCB8IGFzeW5jIGFzIGNsdWJBZG1pbkxpc3RcIj5cbiAgICAgICAgICAgICAgPGlvbi1pdGVtLW9wdGlvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkTWVtYmVyc1RvU2NoaWNodChpdGVtLCBzY2hpY2h0KVwiPlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cInBlcnNvbi1hZGRcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbj5cbiAgICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9ucz5cbiAgICAgICAgICA8L2lvbi1pdGVtLXNsaWRpbmc+XG4gICAgICAgICAgICA8aW9uLWFjY29yZGlvbi1ncm91cCBleHBhbmQ9XCJpbnNldFwiICpuZ0lmPVwic2NoaWNodFsnYXR0ZW5kZWVMaXN0VHJ1ZSddLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgPGlvbi1hY2NvcmRpb24gdmFsdWU9XCJ5ZXNcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWl0ZW0gc2xvdD1cImhlYWRlclwiIGNvbG9yPVwibGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIDxpb24tbGFiZWw+e3tcImhlbGZlci1kZXRhaWwuaGVsZmVyX2lubmVuX2ZvclwiIHwgdHJhbnNsYXRlfX0ge3tzY2hpY2h0Lm5hbWV9fTwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPCEtLSBjbGFzcz1cImlvbi1wYWRkaW5nXCItLT5cbiAgICAgICAgICAgICAgICAgIDxpb24tbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxpb24taXRlbSAqbmdGb3I9XCJsZXQgbWVtYmVyIG9mIHNjaGljaHRbJ2F0dGVuZGVlTGlzdFRydWUnXVwiIGRldGFpbD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJtZW1iZXIuY29uZmlybWVkXCIgY29sb3I9XCJwcmltYXJ5XCIgc2xvdD1cInN0YXJ0XCIgbmFtZT1cImNoZWNrbWFyay1jaXJjbGUtb3V0bGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDwvaW9uLWljb24+XG4gICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICA8aW9uLWxhYmVsIChjbGljayk9XCJvcGVuTWVtYmVyKG1lbWJlcilcIj57e21lbWJlci5maXJzdE5hbWV9fSB7e21lbWJlci5sYXN0TmFtZX19PC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0+LS0+XG5cbiAgICAgICAgICAgICAgICAgICAgPGlvbi1pdGVtLXNsaWRpbmcgI2l0ZW0gKm5nRm9yPVwibGV0IG1lbWJlciBvZiBzY2hpY2h0WydhdHRlbmRlZUxpc3RUcnVlJ11cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW9uLWl0ZW0gZGV0YWlsPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uICpuZ0lmPVwibWVtYmVyLmNvbmZpcm1lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJjaGVja21hcmstY2lyY2xlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWxhYmVsIChjbGljayk9XCJvcGVuTWVtYmVyKG1lbWJlcilcIj57e21lbWJlci5maXJzdE5hbWV9fSB7e21lbWJlci5sYXN0TmFtZX19PC9pb24tbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbHViQWRtaW5MaXN0JCB8IGFzeW5jIGFzIGNsdWJBZG1pbkxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taXRlbS1vcHRpb25zICpuZ0lmPVwiaXNDbHViQWRtaW4oY2x1YkFkbWluTGlzdCwgZXZlbnQuY2x1YklkKVwiIHNpZGU9XCJlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pdGVtLW9wdGlvbiBjb2xvcj1cInN1Y2Nlc3NcIiAqbmdJZj1cIm1lbWJlci5zdGF0dXMgPT09IGZhbHNlIHx8IG1lbWJlci5zdGF0dXMgPT09IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVTY2hpY2h0SXRlbShpdGVtLCBmYWxzZSwgZXZlbnQsIHNjaGljaHQsIG1lbWJlci5pZClcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cImNoZWNrbWFyay1jaXJjbGVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pdGVtLW9wdGlvbiBjb2xvcj1cImRhbmdlclwiICpuZ0lmPVwibWVtYmVyLnN0YXR1cyA9PT0gdHJ1ZSB8fCBtZW1iZXIuc3RhdHVzID09PSBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlU2NoaWNodEl0ZW0oaXRlbSwgZmFsc2UsIGV2ZW50LCBzY2hpY2h0LCBtZW1iZXIuaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwiY2xvc2UtY2lyY2xlXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pb24taXRlbS1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0tc2xpZGluZz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvaW9uLWxpc3Q+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8L2lvbi1hY2NvcmRpb24+XG4gICAgICAgICAgICA8L2lvbi1hY2NvcmRpb24tZ3JvdXA+XG5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9pb24tbGlzdD5cblxuICAgICAgICA8IS0tIEhlbGZlcmVpbnPDpHR6ZSBPSE5FIFNjaGljaHRlbiBNWSBTVEFUVVMtLT5cbiAgICAgICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCIgbGluZXM9XCJub25lXCIgKm5nSWY9XCJzY2hpY2h0ZW4ubGVuZ3RoID09IDAgJiYgaXNGdXR1cmVcIj5cbiAgICAgICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICAgICAge3tcImNvbW1vbi5hdHRlbmRhbmNlc19fYWJzZW5jZXNcIiB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG4gICAgICAgICAgPGlvbi1pdGVtIGNsYXNzPVwibXljbHViU3RhdHVzXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZXZlbnQuaGFzT3duUHJvcGVydHkoJ3N0YXR1cycpXCI+XG4gICAgICAgICAgICAgIDxpb24tZmFiLWJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlKHRydWUsIGV2ZW50KVwiIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwid2FybmluZ1wiIHNsb3Q9XCJzdGFydFwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJldmVudC5zdGF0dXMgPT09IG51bGxcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImhlbHAtY2lyY2xlXCI+IDwvaW9uLWljb24+XG4gICAgICAgICAgICAgIDwvaW9uLWZhYi1idXR0b24+XG5cbiAgICAgICAgICAgICAgPGlvbi1mYWItYnV0dG9uIChjbGljayk9XCJ0b2dnbGUodHJ1ZSwgZXZlbnQpXCIgc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkYW5nZXJcIiBzbG90PVwic3RhcnRcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZXZlbnQuc3RhdHVzID09PSBmYWxzZVwiPlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiY2xvc2UtY2lyY2xlXCI+IDwvaW9uLWljb24+XG4gICAgICAgICAgICAgIDwvaW9uLWZhYi1idXR0b24+XG5cbiAgICAgICAgICAgICAgPGlvbi1mYWItYnV0dG9uIChjbGljayk9XCJ0b2dnbGUoZmFsc2UsIGV2ZW50KVwiIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwic3VjY2Vzc1wiIHNsb3Q9XCJzdGFydFwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJldmVudC5zdGF0dXMgPT09IHRydWVcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImNoZWNrbWFyay1jaXJjbGVcIj4gPC9pb24taWNvbj5cbiAgICAgICAgICAgICAgPC9pb24tZmFiLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPGlvbi1sYWJlbD57e1wiY29tbW9uLm15X19zdGF0dXNcIiB8IHRyYW5zbGF0ZX19PC9pb24tbGFiZWw+XG5cbiAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICA8L2lvbi1saXN0PlxuXG4gICAgICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiICpuZ0lmPVwic2NoaWNodGVuLmxlbmd0aCA9PSAwXCI+XG4gICAgICAgICAgPGlvbi1hY2NvcmRpb24tZ3JvdXA+XG4gICAgICAgICAgICA8aW9uLWFjY29yZGlvbiB2YWx1ZT1cInllc1wiPlxuICAgICAgICAgICAgICA8aW9uLWl0ZW0gc2xvdD1cImhlYWRlclwiIGNvbG9yPVwibGlnaHRcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWxhYmVsPnt7XCJjb21tb24ucHJlc2VudFwiIHwgdHJhbnNsYXRlfX06XG4gICAgICAgICAgICAgICAgICB7e2V2ZW50WydhdHRlbmRlZUxpc3RUcnVlJ10/Lmxlbmd0aH19PC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICAgIDxkaXYgc2xvdD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWxpc3Q+XG4gICAgICAgICAgICAgICAgICA8aW9uLWl0ZW0gKm5nRm9yPVwibGV0IG1lbWJlciBvZiBldmVudFsnYXR0ZW5kZWVMaXN0VHJ1ZSddXCIgZGV0YWlsPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gY29sb3I9XCJzdWNjZXNzXCIgc2xvdD1cInN0YXJ0XCIgbmFtZT1cImNoZWNrbWFyay1jaXJjbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9pb24taWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPGlvbi1sYWJlbCAoY2xpY2spPVwib3Blbk1lbWJlcihtZW1iZXIpXCI+e3ttZW1iZXIuZmlyc3ROYW1lfX0ge3ttZW1iZXIubGFzdE5hbWV9fTwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICAgICAgICA8L2lvbi1saXN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvaW9uLWFjY29yZGlvbj5cbiAgICAgICAgICAgIDxpb24tYWNjb3JkaW9uIHZhbHVlPVwibm9cIj5cbiAgICAgICAgICAgICAgPGlvbi1pdGVtIHNsb3Q9XCJoZWFkZXJcIiBjb2xvcj1cImxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGlvbi1sYWJlbD57e1wiY29tbW9uLmFic2VudFwiIHwgdHJhbnNsYXRlfX06XG4gICAgICAgICAgICAgICAgICB7e2V2ZW50WydhdHRlbmRlZUxpc3RGYWxzZSddPy5sZW5ndGh9fTwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGlvbi1saXN0PlxuICAgICAgICAgICAgICAgICAgPGlvbi1pdGVtICpuZ0Zvcj1cImxldCBtZW1iZXIgb2YgZXZlbnRbJ2F0dGVuZGVlTGlzdEZhbHNlJ11cIiBkZXRhaWw9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBjb2xvcj1cImRhbmdlclwiIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJjbG9zZS1jaXJjbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9pb24taWNvbj5cblxuICAgICAgICAgICAgICAgICAgICA8aW9uLWxhYmVsIChjbGljayk9XCJvcGVuTWVtYmVyKG1lbWJlcilcIj57e21lbWJlci5maXJzdE5hbWV9fSB7e21lbWJlci5sYXN0TmFtZX19PC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgICAgICAgIDwvaW9uLWxpc3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9pb24tYWNjb3JkaW9uPlxuICAgICAgICAgICAgPGlvbi1hY2NvcmRpb24gdmFsdWU9XCJudWxsXCI+XG4gICAgICAgICAgICAgIDxpb24taXRlbSBzbG90PVwiaGVhZGVyXCIgY29sb3I9XCJsaWdodFwiPlxuICAgICAgICAgICAgICAgIDxpb24tbGFiZWw+e3tcImNvbW1vbi5ub3JlcGx5XCIgfCB0cmFuc2xhdGV9fTpcbiAgICAgICAgICAgICAgICAgIHt7ZXZlbnRbJ3VucmVzcG9uZGVkTWVtYmVycyddLmxlbmd0aH19PC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICAgIDxkaXYgc2xvdD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8IS0tIGNsYXNzPVwiaW9uLXBhZGRpbmdcIi0tPlxuICAgICAgICAgICAgICAgIDxpb24tbGlzdD5cbiAgICAgICAgICAgICAgICAgIDxpb24taXRlbSAqbmdGb3I9XCJsZXQgbWVtYmVyIG9mIGV2ZW50Wyd1bnJlc3BvbmRlZE1lbWJlcnMnXVwiIGRldGFpbD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIGNvbG9yPVwid2FybmluZ1wiIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJoZWxwLWNpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2lvbi1pY29uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxpb24tbGFiZWwgKGNsaWNrKT1cIm9wZW5NZW1iZXIobWVtYmVyKVwiPnt7bWVtYmVyLmZpcnN0TmFtZX19IHt7bWVtYmVyLmxhc3ROYW1lfX08L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9pb24tbGlzdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2lvbi1hY2NvcmRpb24+XG4gICAgICAgICAgPC9pb24tYWNjb3JkaW9uLWdyb3VwPlxuICAgICAgICA8L2lvbi1saXN0PlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuXG4gICAgPCEtLSBDSEFOR0UgTU9ERS0tPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJhbGxvd0VkaXRcIj5cbiAgICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiPlxuICAgICAgICA8aW9uLWl0ZW0+XG4gICAgICAgICAgPGlvbi1pbnB1dCBbbGFiZWxdPSdcImNvbW1vbi5uYW1lXCIgfCB0cmFuc2xhdGUnIGxhYmVsLXBsYWNlbWVudD1cInN0YWNrZWRcIlxuICAgICAgICAgICAgKGlvbkNoYW5nZSk9XCJ1cGRhdGVFdmVudCgkZXZlbnQsICduYW1lJylcIiBbdmFsdWVdPVwiZXZlbnQubmFtZVwiPlxuICAgICAgICAgIDwvaW9uLWlucHV0PlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICA8aW9uLWl0ZW0+XG4gICAgICAgICAgPGlvbi10ZXh0YXJlYSBbYXV0b0dyb3ddPVwidHJ1ZVwiIChpb25DaGFuZ2UpPVwidXBkYXRlRXZlbnQoJGV2ZW50LCAnZGVzY3JpcHRpb24nKVwiXG4gICAgICAgICAgICBbbGFiZWxdPSdcImNvbW1vbi5kZXNjcmlwdGlvblwiIHwgdHJhbnNsYXRlJyBsYWJlbC1wbGFjZW1lbnQ9XCJzdGFja2VkXCIgW3ZhbHVlXT1cImV2ZW50LmRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgPC9pb24tdGV4dGFyZWE+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICA8L2lvbi1saXN0PlxuXG4gICAgICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIj5cbiAgICAgICAgPGlvbi1pdGVtPlxuICAgICAgICAgIDxpb24taW5wdXQgKGlvbkNoYW5nZSk9XCJ1cGRhdGVFdmVudCgkZXZlbnQsICdsb2NhdGlvbicpXCIgW2xhYmVsXT0nXCJjb21tb24ubG9jYXRpb25cIiB8IHRyYW5zbGF0ZSdcbiAgICAgICAgICAgIGxhYmVsLXBsYWNlbWVudD1cInN0YWNrZWRcIiBbdmFsdWVdPVwiZXZlbnQubG9jYXRpb25cIj5cbiAgICAgICAgICA8L2lvbi1pbnB1dD5cbiAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgPGlvbi1pdGVtPlxuICAgICAgICAgIDxpb24taW5wdXQgKGlvbkNoYW5nZSk9XCJ1cGRhdGVFdmVudCgkZXZlbnQsICdzdHJlZXRBbmROdW1iZXInKVwiXG4gICAgICAgICAgICBbbGFiZWxdPSdcImNvbW1vbi5zdHJlZXRfX2hvdXNlX251bWJlclwiIHwgdHJhbnNsYXRlJyBsYWJlbC1wbGFjZW1lbnQ9XCJzdGFja2VkXCJcbiAgICAgICAgICAgIFt2YWx1ZV09XCJldmVudC5zdHJlZXRBbmROdW1iZXJcIj5cbiAgICAgICAgICA8L2lvbi1pbnB1dD5cbiAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgPGlvbi1pdGVtPlxuICAgICAgICAgIDxpb24taW5wdXQgKGlvbkNoYW5nZSk9XCJ1cGRhdGVFdmVudCgkZXZlbnQsICdwb3N0YWxDb2RlJylcIiBbbGFiZWxdPVwiJ2NvbW1vbi5wb3N0YWxfX2NvZGUnIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgICAgIGxhYmVsLXBsYWNlbWVudD1cInN0YWNrZWRcIiBbdmFsdWVdPVwiZXZlbnQucG9zdGFsQ29kZVwiPlxuICAgICAgICAgIDwvaW9uLWlucHV0PlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICA8aW9uLWl0ZW0+XG4gICAgICAgICAgPGlvbi1pbnB1dCAoaW9uQ2hhbmdlKT1cInVwZGF0ZUV2ZW50KCRldmVudCwgJ2NpdHknKVwiIFtsYWJlbF09J1wiY29tbW9uLmxvY2FsaXR5XCIgfCB0cmFuc2xhdGUnXG4gICAgICAgICAgICBsYWJlbC1wbGFjZW1lbnQ9XCJzdGFja2VkXCIgW3ZhbHVlXT1cImV2ZW50LmNpdHlcIj5cbiAgICAgICAgICA8L2lvbi1pbnB1dD5cbiAgICAgICAgPC9pb24taXRlbT5cbiAgICAgIDwvaW9uLWxpc3Q+XG5cblxuICAgICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCI+XG4gICAgICAgIDxpb24taXRlbT5cbiAgICAgICAgICA8aW9uLWlucHV0IChpb25DaGFuZ2UpPVwidXBkYXRlRXZlbnQoJGV2ZW50LCAnbGlua193ZWInKVwiIFtsYWJlbF09XCInY29tbW9uLmxpbmtfX3dlYicgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgICAgbGFiZWwtcGxhY2VtZW50PVwic3RhY2tlZFwiIHR5cGU9XCJ1cmxcIiBbdmFsdWVdPVwiZXZlbnQubGlua193ZWJcIlxuICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidjb21tb24ubGlua19fcGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlXCI+XG4gICAgICAgICAgPC9pb24taW5wdXQ+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgIDxpb24taXRlbT5cbiAgICAgICAgICA8aW9uLWlucHV0IChpb25DaGFuZ2UpPVwidXBkYXRlRXZlbnQoJGV2ZW50LCAnbGlua19wb2xsJylcIiBbbGFiZWxdPVwiJ2NvbW1vbi5saW5rX19wb2xsJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgICBsYWJlbC1wbGFjZW1lbnQ9XCJzdGFja2VkXCIgdHlwZT1cInVybFwiIFt2YWx1ZV09XCJldmVudC5saW5rX3BvbGxcIlxuICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidjb21tb24ubGlua19fcGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlXCI+XG4gICAgICAgICAgPC9pb24taW5wdXQ+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICA8L2lvbi1saXN0PlxuXG4gICAgICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIj5cbiAgICAgICAgPGlvbi1pdGVtIGlkPVwidGltZUZyb21JdGVtXCI+XG4gICAgICAgICAgPGlvbi1sYWJlbCBwb3NpdGlvbj1cIlwiPlxuICAgICAgICAgICAge3tcImNvbW1vbi5zdGFydF9fZXZlbnRcIiB8IHRyYW5zbGF0ZX19OlxuICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgIDxpb24tZGF0ZXRpbWUtYnV0dG9uIHNsb3Q9XCJlbmRcIiBkYXRldGltZT1cInRpbWVGcm9tXCI+PC9pb24tZGF0ZXRpbWUtYnV0dG9uPlxuXG4gICAgICAgICAgPGlvbi1tb2RhbCBba2VlcENvbnRlbnRzTW91bnRlZF09XCJ0cnVlXCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDxpb24tZGF0ZXRpbWUgcHJlc2VudGF0aW9uPVwidGltZVwiIGlkPVwidGltZUZyb21cIiAoaW9uQ2hhbmdlKT1cImNoYW5nZVRpbWVGcm9tKCRldmVudClcIlxuICAgICAgICAgICAgICAgIChpb25DaGFuZ2UpPVwidXBkYXRlRXZlbnQoJGV2ZW50LCAndGltZUZyb20nKVwiIG1pbnV0ZVZhbHVlcz1cIjAsNSwxMCwxNSwyMCwyNSwzMCwzNSw0MCw0NSw1MCw1NVwiXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cImV2ZW50LnRpbWVGcm9tXCI+PC9pb24tZGF0ZXRpbWU+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvaW9uLW1vZGFsPlxuICAgICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICAgIDxpb24taXRlbSBpZD1cInRpbWVUb0l0ZW1cIj5cbiAgICAgICAgICA8aW9uLWxhYmVsIHBvc2l0aW9uPVwiXCI+IHt7XCJjb21tb24uZW5kX19ldmVudFwiIHwgdHJhbnNsYXRlfX06IDwvaW9uLWxhYmVsPlxuICAgICAgICAgIDxpb24tZGF0ZXRpbWUtYnV0dG9uIHNsb3Q9XCJlbmRcIiBkYXRldGltZT1cInRpbWVUb1wiPjwvaW9uLWRhdGV0aW1lLWJ1dHRvbj5cblxuICAgICAgICAgIDxpb24tbW9kYWwgW2tlZXBDb250ZW50c01vdW50ZWRdPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICA8aW9uLWRhdGV0aW1lIChpb25DaGFuZ2UpPVwidXBkYXRlRXZlbnQoJGV2ZW50LCAndGltZVRvJylcIiBwcmVzZW50YXRpb249XCJ0aW1lXCIgaWQ9XCJ0aW1lVG9cIlxuICAgICAgICAgICAgICAgIG1pbnV0ZVZhbHVlcz1cIjAsNSwxMCwxNSwyMCwyNSwzMCwzNSw0MCw0NSw1MCw1NVwiIFt2YWx1ZV09XCJldmVudC50aW1lVG9cIj48L2lvbi1kYXRldGltZT5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPC9pb24tbW9kYWw+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgICAgPGlvbi1pdGVtIGlkPVwic3RhcnREYXRlSXRlbVwiPlxuICAgICAgICAgIDxpb24tbGFiZWwgcG9zaXRpb249XCJkZWZhdWx0XCI+XG4gICAgICAgICAgICB7e1wiY29tbW9uLnN0YXJ0X19kYXRlXCIgfCB0cmFuc2xhdGV9fTpcbiAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICA8aW9uLWRhdGV0aW1lLWJ1dHRvbiBzbG90PVwiZW5kXCIgZGF0ZXRpbWU9XCJzdGFydERhdGVcIj48L2lvbi1kYXRldGltZS1idXR0b24+XG5cbiAgICAgICAgICA8aW9uLW1vZGFsIFtrZWVwQ29udGVudHNNb3VudGVkXT1cInRydWVcIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPGlvbi1kYXRldGltZSAoaW9uQ2hhbmdlKT1cInVwZGF0ZUV2ZW50KCRldmVudCwgJ3N0YXJ0RGF0ZScpXCIgW2ZpcnN0RGF5T2ZXZWVrXT1cIjFcIlxuICAgICAgICAgICAgICAgIChpb25DaGFuZ2UpPVwiY2hhbmdlU3RhcnREYXRlKCRldmVudClcIiBwcmVzZW50YXRpb249XCJkYXRlXCIgaWQ9XCJzdGFydERhdGVcIlxuICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJldmVudC5zdGFydERhdGVcIj48L2lvbi1kYXRldGltZT5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPC9pb24tbW9kYWw+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgICAgPGlvbi1pdGVtIGlkPVwiZW5kRGF0ZUl0ZW1cIj5cbiAgICAgICAgICA8aW9uLWxhYmVsIHBvc2l0aW9uPVwiZGVmYXVsdFwiPlxuICAgICAgICAgICAge3tcImNvbW1vbi5lbmRfX2RhdGVcIiB8IHRyYW5zbGF0ZX19OlxuICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgIDxpb24tZGF0ZXRpbWUtYnV0dG9uIHNsb3Q9XCJlbmRcIiBkYXRldGltZT1cImVuZERhdGVcIj48L2lvbi1kYXRldGltZS1idXR0b24+XG5cbiAgICAgICAgICA8aW9uLW1vZGFsIFtrZWVwQ29udGVudHNNb3VudGVkXT1cInRydWVcIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPGlvbi1kYXRldGltZSAoaW9uQ2hhbmdlKT1cInVwZGF0ZUV2ZW50KCRldmVudCwgJ2VuZERhdGUnKVwiIFtmaXJzdERheU9mV2Vla109XCIxXCIgcHJlc2VudGF0aW9uPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJlbmREYXRlXCIgW3ZhbHVlXT1cImV2ZW50LmVuZERhdGVcIj48L2lvbi1kYXRldGltZT5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPC9pb24tbW9kYWw+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICA8L2lvbi1saXN0PlxuXG5cbiAgICAgIDxpb24tbGlzdCBsaW5lcz1cImZ1bGxcIiBbaW5zZXRdPVwidHJ1ZVwiICpuZ0lmPVwic2NoaWNodGVuJCB8IGFzeW5jIGFzIHNjaGljaHRlblwiPlxuICAgICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICAgIDxpb24tbGFiZWw+IHt7XCJoZWxmZXIuc2NoaWNodGVuXCIgfCB0cmFuc2xhdGV9fSA8L2lvbi1sYWJlbD5cbiAgICAgICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwiYWRkU2NoaWNodCgpXCI+aGluenVmw7xnZW48L2lvbi1idXR0b24+XG4gICAgICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2NoaWNodGVuLmxlbmd0aCA+IDA7IGVsc2Ugc2NoaWNodGVuVGVtcGxhdGVcIj5cblxuICAgICAgICAgIDxpb24taXRlbSAqbmdGb3I9XCJsZXQgc2NoaWNodCBvZiBzY2hpY2h0ZW5cIj5cblxuICAgICAgICAgICAgPGlvbi1pY29uIGNvbG9yPVwiZGFuZ2VyXCIgKGNsaWNrKT1cImRlbGV0ZVNjaGljaHQoc2NoaWNodClcIiBzbG90PVwic3RhcnRcIiBuYW1lPVwidHJhc2hcIlxuICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDxpb24taWNvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiY29weVNjaGljaHQoc2NoaWNodClcIiBzbG90PVwic3RhcnRcIiBuYW1lPVwiY29weVwiIHNpemU9XCJtZWRpdW1cIj48L2lvbi1pY29uPlxuXG4gICAgICAgICAgICA8aW9uLWxhYmVsIChjbGljayk9XCJlZGl0U2NoaWNodChzY2hpY2h0KVwiPlxuICAgICAgICAgICAgICA8aDM+e3tzY2hpY2h0Lm5hbWV9fTwvaDM+XG4gICAgICAgICAgICAgIDxoMj57e3NjaGljaHQudGltZUZyb219fSBVaHIgLSB7e3NjaGljaHQudGltZVRvfX0gVWhyPC9oMj5cbiAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgPGlvbi1iYWRnZSBzbG90PVwiZW5kXCI+e3tzY2hpY2h0LmNvdW50TmVlZGVkfX08L2lvbi1iYWRnZT5cbiAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvaW9uLWxpc3Q+XG5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuXG4gIDwvaW9uLWNvbnRlbnQ+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICNzY2hpY2h0ZW5UZW1wbGF0ZT5cbiAgPGlvbi1pdGVtPlxuICAgIDxpb24tbGFiZWw+XG4gICAgICA8aDM+PGlvbi1za2VsZXRvbi10ZXh0IHN0eWxlPVwid2lkdGg6IDYwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+PC9oMz5cbiAgICAgIDxoMj48aW9uLXNrZWxldG9uLXRleHQgc3R5bGU9XCJ3aWR0aDogMzAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD4gPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgc3R5bGU9XCJ3aWR0aDogNDAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD48L2gyPlxuICAgIDwvaW9uLWxhYmVsPlxuXG4gIDwvaW9uLWl0ZW0+XG48L25nLXRlbXBsYXRlPlxuXG48IS0tIFJlcGxhY2UgeW91ciBjdXJyZW50IGxvYWRpbmcgdGVtcGxhdGUgd2l0aCB0aGlzIHN0cnVjdHVyZSAtLT5cbjxuZy10ZW1wbGF0ZSAjbG9hZGluZz5cbiAgPGlvbi1oZWFkZXIgW3RyYW5zbHVjZW50XT1cInRydWVcIj5cbiAgICA8aW9uLXRvb2xiYXI+XG4gICAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInNlY29uZGFyeVwiPlxuICAgICAgICA8aW9uLWJ1dHRvbj5cbiAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogODBweDsgaGVpZ2h0OiAyMHB4XCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24tYnV0dG9ucz5cbiAgICAgIDxpb24tdGl0bGU+XG4gICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiAxMDBweFwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICA8L2lvbi10aXRsZT5cbiAgICAgIDxpb24tYnV0dG9ucyBzbG90PVwicHJpbWFyeVwiPlxuICAgICAgICA8aW9uLWJ1dHRvbj5cbiAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogODBweDsgaGVpZ2h0OiAyMHB4XCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24tYnV0dG9ucz5cbiAgICA8L2lvbi10b29sYmFyPlxuICA8L2lvbi1oZWFkZXI+XG5cbiAgPGlvbi1jb250ZW50PlxuICAgIDxpb24taGVhZGVyIGNvbGxhcHNlPVwiY29uZGVuc2VcIj5cbiAgICAgIDxpb24tdG9vbGJhcj5cbiAgICAgICAgPGlvbi10aXRsZSBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogMTIwcHhcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICA8L2lvbi10aXRsZT5cbiAgICAgIDwvaW9uLXRvb2xiYXI+XG4gICAgPC9pb24taGVhZGVyPlxuXG4gICAgPCEtLSBFdmVudCBEZXRhaWxzIExpc3QgLS0+XG4gICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCI+XG4gICAgICA8IS0tIE5hbWUgLS0+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwiaG9tZS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogNjAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8IS0tIERhdGUvVGltZSAtLT5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJjYWxlbmRhci1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogODAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8IS0tIExvY2F0aW9uIC0tPlxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cImxvY2F0aW9uLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA0MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA2MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA1MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDwhLS0gRGVzY3JpcHRpb24gLS0+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwiaW5mb3JtYXRpb24tY2lyY2xlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA5MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA4MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgPC9pb24tbGlzdD5cblxuICAgIDwhLS0gSGVscGVyIFNoaWZ0cyBTZWN0aW9uIC0tPlxuICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiPlxuICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogMTIwcHhcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgPGlvbi1idXR0b24+XG4gICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDgwcHg7IGhlaWdodDogMjBweFwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxuXG4gICAgICA8IS0tIFNoaWZ0IEl0ZW1zIC0tPlxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cInRpbWUtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDQwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDYwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICA8aW9uLWJhZGdlIHNsb3Q9XCJlbmRcIj5cbiAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogMzBweFwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgIDwvaW9uLWJhZGdlPlxuICAgICAgPC9pb24taXRlbT5cblxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cInRpbWUtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDUwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDcwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICA8aW9uLWJhZGdlIHNsb3Q9XCJlbmRcIj5cbiAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogMzBweFwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgIDwvaW9uLWJhZGdlPlxuICAgICAgPC9pb24taXRlbT5cblxuICAgICAgPCEtLSBIZWxwZXIgTGlzdCBBY2NvcmRpb24gLS0+XG4gICAgICA8aW9uLWFjY29yZGlvbi1ncm91cD5cbiAgICAgICAgPGlvbi1hY2NvcmRpb24gdmFsdWU9XCJoZWxwZXJzXCI+XG4gICAgICAgICAgPGlvbi1pdGVtIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiAxNTBweFwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgIDxkaXYgc2xvdD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxpb24tbGlzdD5cbiAgICAgICAgICAgICAgPGlvbi1pdGVtPlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwicGVyc29uLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogNzAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICAgICAgPGlvbi1pdGVtPlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwicGVyc29uLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogNjAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICAgIDwvaW9uLWxpc3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaW9uLWFjY29yZGlvbj5cbiAgICAgIDwvaW9uLWFjY29yZGlvbi1ncm91cD5cbiAgICA8L2lvbi1saXN0PlxuICA8L2lvbi1jb250ZW50PlxuPC9uZy10ZW1wbGF0ZT4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTVUsSUFBQSx5QkFBQSxHQUFBLGNBQUEsQ0FBQTtBQUErQixJQUFBLHFCQUFBLFNBQUEsU0FBQSxpSEFBQTtBQUFBLE1BQUEsd0JBQUEsR0FBQTtBQUFBLFlBQUEsU0FBQSx3QkFBQSxDQUFBO0FBQUEsYUFBQSxzQkFBUyxPQUFBLEtBQUEsQ0FBTTtJQUFBLENBQUE7QUFBRSxJQUFBLGlCQUFBLENBQUE7O0FBQTZCLElBQUEsdUJBQUE7OztBQUE3QixJQUFBLG9CQUFBO0FBQUEsSUFBQSw0QkFBQSxzQkFBQSxHQUFBLEdBQUEsYUFBQSxDQUFBOzs7Ozs7QUFDaEQsSUFBQSx5QkFBQSxHQUFBLGNBQUEsQ0FBQTtBQUE4QixJQUFBLHFCQUFBLFNBQUEsU0FBQSxpSEFBQTtBQUFBLE1BQUEsd0JBQUEsR0FBQTtBQUFBLFlBQUEsU0FBQSx3QkFBQSxDQUFBO0FBQUEsYUFBQSxzQkFBUyxPQUFBLEtBQUEsQ0FBTTtJQUFBLENBQUE7QUFBRSxJQUFBLGlCQUFBLENBQUE7O0FBQTZCLElBQUEsdUJBQUE7OztBQUE3QixJQUFBLG9CQUFBO0FBQUEsSUFBQSw0QkFBQSxzQkFBQSxHQUFBLEdBQUEsYUFBQSxDQUFBOzs7OztBQUZqRCxJQUFBLHlCQUFB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QUFBLFFBQUEsa0JBQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxRQUFBLDRCQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsUUFBQSxjQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsUUFBQSxTQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFFBQUEsY0FBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFFBQUEscUJBQUEsR0FBQSxDQUFBLFNBQUEsUUFBQSxHQUFBLFNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLFFBQUEsR0FBQSxTQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsU0FBQSxRQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxTQUFBLFNBQUEsR0FBQSxDQUFBLFFBQUEsT0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFVBQUEsU0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxTQUFBLFdBQUEsUUFBQSxTQUFBLFFBQUEsZUFBQSxHQUFBLFNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsU0FBQSxXQUFBLFFBQUEsU0FBQSxRQUFBLG9CQUFBLEdBQUEsU0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxTQUFBLFVBQUEsUUFBQSxTQUFBLFFBQUEsZ0JBQUEsR0FBQSxTQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFNBQUEsV0FBQSxRQUFBLFNBQUEsUUFBQSxlQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFNBQUEsV0FBQSxRQUFBLFNBQUEsUUFBQSxvQkFBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxTQUFBLFVBQUEsUUFBQSxTQUFBLFFBQUEsZ0JBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsU0FBQSxXQUFBLFFBQUEsU0FBQSxRQUFBLGVBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsU0FBQSxXQUFBLFFBQUEsU0FBQSxRQUFBLG9CQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFNBQUEsVUFBQSxRQUFBLFNBQUEsUUFBQSxnQkFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxTQUFBLFdBQUEsUUFBQSxTQUFBLFFBQUEsYUFBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFNBQUEsV0FBQSxRQUFBLFNBQUEsUUFBQSxrQkFBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFNBQUEsVUFBQSxRQUFBLFNBQUEsUUFBQSxjQUFBLEdBQUEsQ0FBQSxRQUFBLEtBQUEsR0FBQSxDQUFBLFNBQUEsV0FBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxRQUFBLFlBQUEsR0FBQSxDQUFBLFVBQUEsT0FBQSxHQUFBLENBQUEsU0FBQSxLQUFBLEdBQUEsQ0FBQSxRQUFBLFVBQUEsU0FBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsR0FBQSxDQUFBLFVBQUEsTUFBQSxHQUFBLENBQUEsU0FBQSxXQUFBLFFBQUEsU0FBQSxRQUFBLDRCQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsU0FBQSxXQUFBLFFBQUEsU0FBQSxRQUFBLDBCQUFBLEdBQUEsQ0FBQSxTQUFBLFdBQUEsR0FBQSxTQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsU0FBQSxVQUFBLEdBQUEsU0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFNBQUEsV0FBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxRQUFBLGtCQUFBLEdBQUEsQ0FBQSxTQUFBLFVBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsUUFBQSxjQUFBLEdBQUEsQ0FBQSxTQUFBLFFBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLGNBQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxTQUFBLFdBQUEsUUFBQSxTQUFBLEdBQUEsU0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxTQUFBLFVBQUEsUUFBQSxTQUFBLEdBQUEsU0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxTQUFBLFdBQUEsUUFBQSxTQUFBLEdBQUEsU0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxTQUFBLFdBQUEsUUFBQSxTQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxhQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsU0FBQSxVQUFBLFFBQUEsU0FBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsY0FBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFNBQUEsV0FBQSxRQUFBLFNBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLGtCQUFBLEdBQUEsQ0FBQSxVQUFBLFFBQUEsR0FBQSxTQUFBLFNBQUEsR0FBQSxDQUFBLFNBQUEsSUFBQSxHQUFBLENBQUEsU0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLFdBQUEsUUFBQSxTQUFBLFFBQUEsa0JBQUEsR0FBQSxDQUFBLFNBQUEsVUFBQSxRQUFBLFNBQUEsUUFBQSxjQUFBLEdBQUEsQ0FBQSxTQUFBLFdBQUEsUUFBQSxTQUFBLFFBQUEsYUFBQSxHQUFBLENBQUEsbUJBQUEsV0FBQSxHQUFBLGFBQUEsU0FBQSxPQUFBLEdBQUEsQ0FBQSxtQkFBQSxXQUFBLEdBQUEsYUFBQSxZQUFBLFNBQUEsT0FBQSxHQUFBLENBQUEsbUJBQUEsV0FBQSxRQUFBLE9BQUEsR0FBQSxhQUFBLFNBQUEsU0FBQSxhQUFBLEdBQUEsQ0FBQSxNQUFBLGNBQUEsR0FBQSxDQUFBLFlBQUEsRUFBQSxHQUFBLENBQUEsUUFBQSxPQUFBLFlBQUEsVUFBQSxHQUFBLENBQUEsR0FBQSxxQkFBQSxHQUFBLENBQUEsTUFBQSxZQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsWUFBQSxRQUFBLEdBQUEsQ0FBQSxNQUFBLGVBQUEsR0FBQSxDQUFBLFlBQUEsU0FBQSxHQUFBLENBQUEsUUFBQSxPQUFBLFlBQUEsV0FBQSxHQUFBLENBQUEsTUFBQSxhQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsWUFBQSxTQUFBLEdBQUEsQ0FBQSxnQkFBQSxRQUFBLE1BQUEsWUFBQSxnQkFBQSxxQ0FBQSxHQUFBLGFBQUEsT0FBQSxHQUFBLENBQUEsZ0JBQUEsUUFBQSxNQUFBLFVBQUEsZ0JBQUEscUNBQUEsR0FBQSxhQUFBLE9BQUEsR0FBQSxDQUFBLGdCQUFBLFFBQUEsTUFBQSxhQUFBLEdBQUEsYUFBQSxrQkFBQSxPQUFBLEdBQUEsQ0FBQSxnQkFBQSxRQUFBLE1BQUEsV0FBQSxHQUFBLGFBQUEsa0JBQUEsT0FBQSxHQUFBLENBQUEsU0FBQSxVQUFBLFFBQUEsU0FBQSxRQUFBLFNBQUEsUUFBQSxVQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsU0FBQSxXQUFBLFFBQUEsU0FBQSxRQUFBLFFBQUEsUUFBQSxVQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxLQUFBLEdBQUEsQ0FBQSxHQUFBLFNBQUEsS0FBQSxHQUFBLENBQUEsR0FBQSxTQUFBLEtBQUEsR0FBQSxDQUFBLEdBQUEsU0FBQSxLQUFBLEdBQUEsQ0FBQSxZQUFBLElBQUEsR0FBQSxTQUFBLFFBQUEsVUFBQSxNQUFBLEdBQUEsQ0FBQSxZQUFBLElBQUEsR0FBQSxTQUFBLE9BQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxHQUFBLFNBQUEsT0FBQSxHQUFBLENBQUEsWUFBQSxJQUFBLEdBQUEsU0FBQSxLQUFBLEdBQUEsQ0FBQSxZQUFBLElBQUEsR0FBQSxTQUFBLEtBQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxHQUFBLFNBQUEsS0FBQSxHQUFBLENBQUEsWUFBQSxJQUFBLEdBQUEsU0FBQSxLQUFBLEdBQUEsQ0FBQSxZQUFBLElBQUEsR0FBQSxTQUFBLEtBQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxRQUFBLGNBQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxHQUFBLFNBQUEsTUFBQSxHQUFBLENBQUEsWUFBQSxJQUFBLEdBQUEsU0FBQSxLQUFBLEdBQUEsQ0FBQSxTQUFBLFNBQUEsR0FBQSxDQUFBLFFBQUEsUUFBQSxHQUFBLENBQUEsWUFBQSxJQUFBLEdBQUEsU0FBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsUUFBQSxnQkFBQSxDQUFBLEdBQUEsVUFBQSxTQUFBLDBCQUFBLElBQUEsS0FBQTtBQUFBLE1BQUEsS0FBQSxHQUFBO0FDdkM3QixJQUFBLHFCQUFBLEdBQUEsMENBQUEsSUFBQSxJQUFBLGdCQUFBLENBQUE7O0FBa1pBLElBQUEscUJBQUEsR0FBQSx5Q0FBQSxHQUFBLEdBQUEsZUFBQSxNQUFBLEdBQUEsZ0NBQUEsRUFBZ0MsR0FBQSx5Q0FBQSxJQUFBLEdBQUEsZUFBQSxNQUFBLEdBQUEsZ0NBQUE7Ozs7QUFsWmpCLElBQUEscUJBQUEsUUFBQSxzQkFBQSxHQUFBLEdBQUEsSUFBQSxNQUFBLENBQUEsRUFBcUIsWUFBQSxXQUFBOzs7QUR1QzlCLElBQU8sbUJBQVA7OzZFQUFPLGtCQUFnQixFQUFBLFdBQUEsb0JBQUEsVUFBQSw0REFBQSxZQUFBLEdBQUEsQ0FBQTtBQUFBLEdBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
