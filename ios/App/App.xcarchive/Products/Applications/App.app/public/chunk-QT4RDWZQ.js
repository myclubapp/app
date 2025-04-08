import {
  TeamPage
} from "./chunk-MPT66UUM.js";
import {
  HelferService
} from "./chunk-3HMFG4JN.js";
import {
  HelferDetailPage
} from "./chunk-TPIQQKTH.js";
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
  AuthService,
  Timestamp
} from "./chunk-AMO7VPPH.js";
import {
  AlertController,
  AsyncPipe,
  BehaviorSubject,
  BooleanValueAccessorDirective,
  ChangeDetectorRef,
  DatePipe,
  IonAccordion,
  IonAccordionGroup,
  IonAlert,
  IonAvatar,
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
  IonDatetime,
  IonDatetimeButton,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonListHeader,
  IonModal,
  IonNote,
  IonRow,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonThumbnail,
  IonTitle,
  IonToggle,
  IonToolbar,
  LoadingController,
  ModalController,
  NavParams,
  NgForOf,
  NgIf,
  NumericValueAccessorDirective,
  SelectValueAccessorDirective,
  TextValueAccessorDirective,
  ToastController,
  TranslatePipe,
  TranslateService,
  catchError,
  combineLatest,
  debounceTime,
  defaultIfEmpty,
  forkJoin,
  from,
  lastValueFrom,
  map,
  of,
  startWith,
  switchMap,
  take,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpropertyInterpolate,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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

// src/app/pages/club-subscription/club-subscription.page.ts
function ClubSubscriptionPage_ng_container_15_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubMemberCount_r4 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Aktuelle Anzahl Mitglieder: ", clubMemberCount_r4, " ");
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 20);
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 21);
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_ion_note_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-note", 22);
    \u0275\u0275text(1, "Dieses Abonnement wurde bereits aktiviert. ");
    \u0275\u0275element(2, "br")(3, "br");
    \u0275\u0275elementEnd();
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_ng_container_8_ion_item_4_ion_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Preis / ", \u0275\u0275pipeBind1(2, 1, "common.month"), " ");
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_ng_container_8_ion_item_4_ion_label_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Preis / ", \u0275\u0275pipeBind1(2, 1, "common.year"), " ");
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_ng_container_8_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275template(1, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_ng_container_8_ion_item_4_ion_label_1_Template, 3, 3, "ion-label", 7)(2, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_ng_container_8_ion_item_4_ion_label_2_Template, 3, 3, "ion-label", 7);
    \u0275\u0275elementStart(3, "ion-badge", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const price_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", price_r5.stripe_metadata_payment == "month");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", price_r5.stripe_metadata_payment == "year");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", price_r5.currency_upper, " ", price_r5.unit_amount, " ");
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-label", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-list");
    \u0275\u0275template(4, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_ng_container_8_ion_item_4_Template, 5, 4, "ion-item", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const product_r6 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r6.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", product_r6.prices);
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_ng_container_9_ion_item_8_ion_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Preis / ", \u0275\u0275pipeBind1(2, 1, "common.month"), " ");
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_ng_container_9_ion_item_8_ion_label_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Preis / ", \u0275\u0275pipeBind1(2, 1, "common.year"), " ");
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_ng_container_9_ion_item_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275template(1, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_ng_container_9_ion_item_8_ion_label_1_Template, 3, 3, "ion-label", 7)(2, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_ng_container_9_ion_item_8_ion_label_2_Template, 3, 3, "ion-label", 7);
    \u0275\u0275elementStart(3, "ion-badge", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const price_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", price_r7.stripe_metadata_payment == "month");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", price_r7.stripe_metadata_payment == "year");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", price_r7.currency_upper, " ", price_r7.unit_amount, " ");
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-note", 24);
    \u0275\u0275text(2, "Dieses Abonnement kann nicht gew\xE4hlt werden. ");
    \u0275\u0275element(3, "br")(4, "br");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-label", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-list");
    \u0275\u0275template(8, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_ng_container_9_ion_item_8_Template, 5, 4, "ion-item", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const product_r6 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(product_r6.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", product_r6.prices);
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-accordion", 14)(1, "ion-item", 15)(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_ion_icon_4_Template, 1, 0, "ion-icon", 16)(5, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_ion_icon_5_Template, 1, 0, "ion-icon", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18);
    \u0275\u0275template(7, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_ion_note_7_Template, 4, 0, "ion-note", 19)(8, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_ng_container_8_Template, 5, 2, "ng-container", 7)(9, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_ng_container_9_Template, 9, 2, "ng-container", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r6 = \u0275\u0275nextContext(2).$implicit;
    const club_r8 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("value", product_r6.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r6.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r6.stripe_metadata_subscription == club_r8.subscriptionType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r6.stripe_metadata_subscription !== club_r8.subscriptionType);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", product_r6.stripe_metadata_subscription == club_r8.subscriptionType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r6.stripe_metadata_subscription == club_r8.subscriptionType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r6.stripe_metadata_subscription != club_r8.subscriptionType);
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 20);
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 26);
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ion_note_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-note", 22);
    \u0275\u0275text(1, "Dieses Abonnement wurde bereits aktiviert. ");
    \u0275\u0275element(2, "br")(3, "br");
    \u0275\u0275elementEnd();
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ng_container_8_ion_item_4_ion_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Preis / ", \u0275\u0275pipeBind1(2, 1, "common.month"), " ");
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ng_container_8_ion_item_4_ion_label_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Preis / ", \u0275\u0275pipeBind1(2, 1, "common.year"), " ");
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ng_container_8_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275template(1, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ng_container_8_ion_item_4_ion_label_1_Template, 3, 3, "ion-label", 7)(2, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ng_container_8_ion_item_4_ion_label_2_Template, 3, 3, "ion-label", 7);
    \u0275\u0275elementStart(3, "ion-badge", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const price_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", price_r9.stripe_metadata_payment == "month");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", price_r9.stripe_metadata_payment == "year");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", price_r9.currency_upper, " ", price_r9.unit_amount, " ");
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-label", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-list");
    \u0275\u0275template(4, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ng_container_8_ion_item_4_Template, 5, 4, "ion-item", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const product_r6 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r6.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", product_r6.prices);
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ng_container_9_ion_item_4_ion_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Preis / ", \u0275\u0275pipeBind1(2, 1, "common.month"), " ");
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ng_container_9_ion_item_4_ion_label_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Preis / ", \u0275\u0275pipeBind1(2, 1, "common.year"), " ");
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ng_container_9_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 9);
    \u0275\u0275listener("click", function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ng_container_9_ion_item_4_Template_ion_item_click_0_listener() {
      const price_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const product_r6 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.checkout(price_r11, product_r6));
    });
    \u0275\u0275template(1, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ng_container_9_ion_item_4_ion_label_1_Template, 3, 3, "ion-label", 7)(2, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ng_container_9_ion_item_4_ion_label_2_Template, 3, 3, "ion-label", 7);
    \u0275\u0275elementStart(3, "ion-badge", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const price_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", price_r11.stripe_metadata_payment == "month");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", price_r11.stripe_metadata_payment == "year");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", price_r11.currency_upper, " ", price_r11.unit_amount, " ");
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-label", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-list");
    \u0275\u0275template(4, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ng_container_9_ion_item_4_Template, 5, 4, "ion-item", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const product_r6 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r6.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", product_r6.prices);
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-accordion", 14)(1, "ion-item", 15)(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ion_icon_4_Template, 1, 0, "ion-icon", 16)(5, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ion_icon_5_Template, 1, 0, "ion-icon", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18);
    \u0275\u0275template(7, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ion_note_7_Template, 4, 0, "ion-note", 19)(8, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ng_container_8_Template, 5, 2, "ng-container", 7)(9, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_ng_container_9_Template, 5, 2, "ng-container", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r6 = \u0275\u0275nextContext(2).$implicit;
    const club_r8 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("value", product_r6.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r6.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r6.stripe_metadata_subscription == club_r8.subscriptionType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r6.stripe_metadata_subscription !== club_r8.subscriptionType);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", product_r6.stripe_metadata_subscription == club_r8.subscriptionType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r6.stripe_metadata_subscription == club_r8.subscriptionType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r6.stripe_metadata_subscription != club_r8.subscriptionType);
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_1_Template, 10, 7, "ion-accordion", 13)(2, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_ion_accordion_2_Template, 10, 7, "ion-accordion", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubMemberCount_r12 = ctx.ngIf;
    const product_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r6["stripe_metadata_max_users"] && product_r6["stripe_metadata_max_users"] < clubMemberCount_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r6["stripe_metadata_max_users"] && product_r6["stripe_metadata_max_users"] >= clubMemberCount_r12);
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-accordion-group");
    \u0275\u0275template(1, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_ng_container_1_Template, 3, 2, "ng-container", 7);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r2.clubMemberCount$));
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClubSubscriptionPage_ng_container_15_ng_container_9_ion_accordion_group_1_Template, 3, 3, "ion-accordion-group", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const productList_r13 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", productList_r13);
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 20);
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_ion_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 20);
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_ion_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 20);
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_ion_note_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-note", 22);
    \u0275\u0275text(1, "Dieses Modul wurde bereits aktiviert.");
    \u0275\u0275elementEnd();
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_ion_note_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-note", 22);
    \u0275\u0275text(1, "Dieses Modul wurde bereits aktiviert.");
    \u0275\u0275elementEnd();
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_ion_note_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-note", 22);
    \u0275\u0275text(1, "Dieses Modul wurde bereits aktiviert.");
    \u0275\u0275elementEnd();
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_ng_container_12_ion_item_4_ion_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Preis / ", \u0275\u0275pipeBind1(2, 1, "common.month"), " ");
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_ng_container_12_ion_item_4_ion_label_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Preis / ", \u0275\u0275pipeBind1(2, 1, "common.year"), " ");
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_ng_container_12_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 9);
    \u0275\u0275listener("click", function ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_ng_container_12_ion_item_4_Template_ion_item_click_0_listener() {
      const price_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const module_r16 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.checkoutAddon(price_r15, module_r16));
    });
    \u0275\u0275template(1, ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_ng_container_12_ion_item_4_ion_label_1_Template, 3, 3, "ion-label", 7)(2, ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_ng_container_12_ion_item_4_ion_label_2_Template, 3, 3, "ion-label", 7);
    \u0275\u0275elementStart(3, "ion-badge", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const price_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", price_r15.stripe_metadata_payment == "month");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", price_r15.stripe_metadata_payment == "year");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", price_r15.currency_upper, " ", price_r15.unit_amount, " ");
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-label", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-list");
    \u0275\u0275template(4, ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_ng_container_12_ion_item_4_Template, 5, 4, "ion-item", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const module_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(module_r16.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", module_r16.prices);
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-accordion-group")(1, "ion-accordion", 14)(2, "ion-item", 15)(3, "ion-label");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_ion_icon_5_Template, 1, 0, "ion-icon", 16)(6, ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_ion_icon_6_Template, 1, 0, "ion-icon", 16)(7, ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_ion_icon_7_Template, 1, 0, "ion-icon", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 18);
    \u0275\u0275template(9, ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_ion_note_9_Template, 2, 0, "ion-note", 19)(10, ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_ion_note_10_Template, 2, 0, "ion-note", 19)(11, ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_ion_note_11_Template, 2, 0, "ion-note", 19)(12, ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_ng_container_12_Template, 5, 2, "ng-container", 7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const module_r16 = ctx.$implicit;
    const club_r8 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("value", module_r16.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(module_r16.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", module_r16.stripe_metadata_addon == "training" && club_r8.hasFeatureTrainingExercise);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", module_r16.stripe_metadata_addon == "helfer" && club_r8.hasFeatureHelferEvent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", module_r16.stripe_metadata_addon == "championship" && club_r8.hasFeatureChampionship);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", module_r16.stripe_metadata_addon == "training" && club_r8.hasFeatureTrainingExercise);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", module_r16.stripe_metadata_addon == "helfer" && club_r8.hasFeatureHelferEvent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", module_r16.stripe_metadata_addon == "championship" && club_r8.hasFeatureChampionship);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", module_r16.stripe_metadata_addon == "training" && !club_r8.hasFeatureTrainingExercise || module_r16.stripe_metadata_addon == "helfer" && !club_r8.hasFeatureHelferEvent || module_r16.stripe_metadata_addon == "championship" && !club_r8.hasFeatureChampionship);
  }
}
function ClubSubscriptionPage_ng_container_15_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClubSubscriptionPage_ng_container_15_ng_container_17_ion_accordion_group_1_Template, 13, 9, "ion-accordion-group", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const moduleList_r17 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", moduleList_r17);
  }
}
function ClubSubscriptionPage_ng_container_15_ion_list_19_ion_item_4_h3_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subscription_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "common.ended_at"), ": ", \u0275\u0275pipeBind2(3, 4, subscription_r19.ended_at.toDate(), "dd.MM.YYYY"), "");
  }
}
function ClubSubscriptionPage_ng_container_15_ion_list_19_ion_item_4_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const subscription_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(3, 4, "common.current_period_start"), ": ", \u0275\u0275pipeBind2(4, 6, subscription_r19.current_period_start.toDate(), "dd.MM.YYYY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(7, 9, "common.current_period_end"), ": ", \u0275\u0275pipeBind2(8, 11, subscription_r19.current_period_end.toDate(), "dd.MM.YYYY"), "");
  }
}
function ClubSubscriptionPage_ng_container_15_ion_list_19_ion_item_4_ion_badge_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "common.active"), " ");
  }
}
function ClubSubscriptionPage_ng_container_15_ion_list_19_ion_item_4_ion_badge_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "common.canceled"), " ");
  }
}
function ClubSubscriptionPage_ng_container_15_ion_list_19_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 9);
    \u0275\u0275listener("click", function ClubSubscriptionPage_ng_container_15_ion_list_19_ion_item_4_Template_ion_item_click_0_listener() {
      const subscription_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openUrl(subscription_r19.invoices[0].invoice_pdf));
    });
    \u0275\u0275elementStart(1, "ion-label")(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ClubSubscriptionPage_ng_container_15_ion_list_19_ion_item_4_h3_8_Template, 4, 7, "h3", 7)(9, ClubSubscriptionPage_ng_container_15_ion_list_19_ion_item_4_ng_container_9_Template, 9, 14, "ng-container", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ClubSubscriptionPage_ng_container_15_ion_list_19_ion_item_4_ion_badge_10_Template, 3, 3, "ion-badge", 19)(11, ClubSubscriptionPage_ng_container_15_ion_list_19_ion_item_4_ion_badge_11_Template, 3, 3, "ion-badge", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subscription_r19 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(subscription_r19.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 7, "common.created"), ": ", \u0275\u0275pipeBind2(7, 9, subscription_r19.created.toDate(), "dd.MM.YYYY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", subscription_r19.ended_at);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subscription_r19.status == "active");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subscription_r19.status == "active");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subscription_r19.status == "canceled");
  }
}
function ClubSubscriptionPage_ng_container_15_ion_list_19_ion_item_6_h3_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subscription_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "common.ended_at"), ": ", \u0275\u0275pipeBind2(3, 4, subscription_r21.ended_at.toDate(), "dd.MM.YYYY"), "");
  }
}
function ClubSubscriptionPage_ng_container_15_ion_list_19_ion_item_6_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const subscription_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(3, 4, "common.current_period_start"), ": ", \u0275\u0275pipeBind2(4, 6, subscription_r21.current_period_start.toDate(), "dd.MM.YYYY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(7, 9, "common.current_period_end"), ": ", \u0275\u0275pipeBind2(8, 11, subscription_r21.current_period_end.toDate(), "dd.MM.YYYY"), "");
  }
}
function ClubSubscriptionPage_ng_container_15_ion_list_19_ion_item_6_ion_badge_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "common.active"), " ");
  }
}
function ClubSubscriptionPage_ng_container_15_ion_list_19_ion_item_6_ion_badge_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "common.canceled"), " ");
  }
}
function ClubSubscriptionPage_ng_container_15_ion_list_19_ion_item_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 9);
    \u0275\u0275listener("click", function ClubSubscriptionPage_ng_container_15_ion_list_19_ion_item_6_Template_ion_item_click_0_listener() {
      const subscription_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openUrl(subscription_r21.invoices[0].invoice_pdf));
    });
    \u0275\u0275elementStart(1, "ion-label")(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ClubSubscriptionPage_ng_container_15_ion_list_19_ion_item_6_h3_8_Template, 4, 7, "h3", 7)(9, ClubSubscriptionPage_ng_container_15_ion_list_19_ion_item_6_ng_container_9_Template, 9, 14, "ng-container", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ClubSubscriptionPage_ng_container_15_ion_list_19_ion_item_6_ion_badge_10_Template, 3, 3, "ion-badge", 19)(11, ClubSubscriptionPage_ng_container_15_ion_list_19_ion_item_6_ion_badge_11_Template, 3, 3, "ion-badge", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subscription_r21 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(subscription_r21.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 7, "common.created"), ": ", \u0275\u0275pipeBind2(7, 9, subscription_r21.created.toDate(), "dd.MM.YYYY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", subscription_r21.ended_at);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subscription_r21.status == "active");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subscription_r21.status == "active");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subscription_r21.status == "canceled");
  }
}
function ClubSubscriptionPage_ng_container_15_ion_list_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 28)(1, "ion-list-header");
    \u0275\u0275text(2, " Bestellverlauf ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(3);
    \u0275\u0275template(4, ClubSubscriptionPage_ng_container_15_ion_list_19_ion_item_4_Template, 12, 12, "ion-item", 27);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5);
    \u0275\u0275template(6, ClubSubscriptionPage_ng_container_15_ion_list_19_ion_item_6_Template, 12, 12, "ion-item", 27);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const club_r8 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", club_r8["activeSubscriptions"]);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", club_r8["inactiveSubscriptions"]);
  }
}
function ClubSubscriptionPage_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-list", 8)(2, "ion-list-header");
    \u0275\u0275text(3, " Abonnement kaufen ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-item", 9);
    \u0275\u0275listener("click", function ClubSubscriptionPage_ng_container_15_Template_ion_item_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openUrl("https://my-club.app/pricing"));
    });
    \u0275\u0275elementStart(5, "ion-label", 10);
    \u0275\u0275text(6);
    \u0275\u0275template(7, ClubSubscriptionPage_ng_container_15_ng_container_7_Template, 2, 1, "ng-container", 7);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ClubSubscriptionPage_ng_container_15_ng_container_9_Template, 2, 1, "ng-container", 7);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ion-list", 8)(12, "ion-list-header");
    \u0275\u0275text(13, " Zusatzmodule kaufen ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ion-item", 9);
    \u0275\u0275listener("click", function ClubSubscriptionPage_ng_container_15_Template_ion_item_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openUrl("https://my-club.app/pricing"));
    });
    \u0275\u0275elementStart(15, "ion-label", 10);
    \u0275\u0275text(16, " Du bezahlst nichts, was du nicht brauchst. Mit unseren Zusatzmodulen kannst du my club deinen pers\xF6nlichen Bed\xFCrfnissen anpassen. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, ClubSubscriptionPage_ng_container_15_ng_container_17_Template, 2, 1, "ng-container", 7);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, ClubSubscriptionPage_ng_container_15_ion_list_19_Template, 7, 3, "ion-list", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const club_r8 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Finde dein passendes Abonnement f\xFCr deinen Verein ", club_r8.name, ". ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(8, 7, ctx_r2.clubMemberCount$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(10, 9, ctx_r2.products$));
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(18, 11, ctx_r2.modules$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", club_r8["activeSubscriptions"].length > 0 || club_r8["inactiveSubscriptions"].length > 0);
  }
}
function ClubSubscriptionPage_ng_template_17_Template(rf, ctx) {
}
var _ClubSubscriptionPage = class _ClubSubscriptionPage {
  constructor(modalCtrl, alertCtrl, loadingCtrl, toastCtrl, userProfileService, fbService, translate, authService, navParams) {
    this.modalCtrl = modalCtrl;
    this.alertCtrl = alertCtrl;
    this.loadingCtrl = loadingCtrl;
    this.toastCtrl = toastCtrl;
    this.userProfileService = userProfileService;
    this.fbService = fbService;
    this.translate = translate;
    this.authService = authService;
    this.navParams = navParams;
    this.subscriptionStatus = "active";
  }
  ngOnInit() {
    this.clubId = this.navParams.get("clubId");
    this.club$ = this.getClub(this.clubId);
    this.products$ = this.getProductsAndPrices();
    this.modules$ = this.getModules();
    this.clubMemberCount$ = this.fbService.getClubMemberRefs(this.clubId).pipe(take(1), map((members) => members.length), tap((members) => console.log(members)));
  }
  getClub(clubId) {
    return this.fbService.getClubRef(clubId).pipe(switchMap((club) => {
      if (!club)
        return of(null);
      return this.fbService.getClubSubscriptionList(clubId).pipe(map((subscriptions) => subscriptions.sort((a, b) => b.created - a.created)), switchMap((subscriptions) => {
        if (subscriptions.length === 0) {
          return of(__spreadProps(__spreadValues({}, club), {
            activeSubscriptions: [],
            inactiveSubscriptions: []
          }));
        }
        const subscriptionsWithDetails$ = subscriptions.map((subscription) => combineLatest([
          of(subscription),
          this.fbService.getClubSubscriptionInvoiceList(clubId, subscription.id).pipe(
            map((invoices) => invoices.sort((a, b) => new Date(a.created).getTime() - new Date(b.created).getTime())),
            catchError(() => of([])),
            // Return empty array on error
            defaultIfEmpty([])
            // Ensure empty array if no invoices are found
          ),
          this.fbService.getProduct(subscription.product.path.split("/")[1]).pipe(
            take(1),
            catchError(() => of({ id: subscription.product, name: "Unknown Product" }))
            // Return a default product on error
          )
        ]).pipe(map(([subscription2, invoices, product]) => __spreadProps(__spreadValues({}, subscription2), {
          invoices,
          product
        }))));
        return combineLatest(subscriptionsWithDetails$).pipe(take(1), map((subscriptionsWithDetails) => __spreadProps(__spreadValues({}, club), {
          activeSubscriptions: subscriptionsWithDetails.filter((sub) => sub.status == "active"),
          inactiveSubscriptions: subscriptionsWithDetails.filter((sub) => sub.status !== "active")
        })));
      }), catchError((err) => {
        console.error("Error fetching subscriptions:", err);
        return of(__spreadProps(__spreadValues({}, club), {
          activeSubscriptions: [],
          inactiveSubscriptions: []
        }));
      }));
    }), catchError((err) => {
      console.error("Error in getClubWithSubscriptions:", err);
      return of(null);
    }));
  }
  changeSegment(event) {
    console.log(event);
    this.subscriptionStatus = event.detail.value;
  }
  getProductsAndPrices() {
    return this.fbService.getProducts().pipe(
      switchMap((products) => {
        if (products.length === 0) {
          return of([]);
        }
        const productsWithPrices$ = products.map((product) => this.fbService.getPrices(product.id).pipe(take(1), map((prices) => __spreadProps(__spreadValues({}, product), {
          prices: prices.map((price) => __spreadProps(__spreadValues({}, price), {
            currency_upper: price.currency.toUpperCase(),
            unit_amount: price.unit_amount ? (price.unit_amount / 100).toFixed(2) : "0.00"
            // Format to two decimal places
          })).sort((a, b) => a.unit_amount - b.unit_amount)
          // Sorting prices based on the adjusted amount
        })), tap((prices) => console.log(prices)), catchError((err) => {
          console.error(`Error fetching prices for product ${product.id}:`, err);
          return of(__spreadProps(__spreadValues({}, product), { prices: [] }));
        })));
        return combineLatest(productsWithPrices$);
      }),
      // Sorting the products based on stripe_metadata_max_users
      map((products) => products.sort((a, b) => Number(a["stripe_metadata_max_users"]) - Number(b["stripe_metadata_max_users"]))),
      catchError((err) => {
        console.error("Error fetching products and prices:", err);
        return of([]);
      })
    );
  }
  getModules() {
    return this.fbService.getModules().pipe(switchMap((products) => {
      if (products.length === 0) {
        return of([]);
      }
      const productsWithPrices$ = products.map((product) => this.fbService.getPrices(product.id).pipe(take(1), map((prices) => __spreadProps(__spreadValues({}, product), {
        prices: prices.map((price) => __spreadProps(__spreadValues({}, price), {
          currency_upper: price.currency.toUpperCase(),
          unit_amount: price.unit_amount ? (price.unit_amount / 100).toFixed(2) : "0.00"
          // Format to two decimal places
        })).sort((a, b) => a.unit_amount - b.unit_amount)
        // Sorting prices based on the adjusted amount
      })), tap((prices) => console.log(prices)), catchError((err) => {
        console.error(`Error fetching prices for product ${product.id}:`, err);
        return of(__spreadProps(__spreadValues({}, product), { prices: [] }));
      })));
      return combineLatest(productsWithPrices$);
    }), catchError((err) => {
      console.error("Error fetching products and prices:", err);
      return of([]);
    }));
  }
  checkout(price, product) {
    return __async(this, null, function* () {
      console.log(price);
      console.log(product);
      const alert = yield this.alertCtrl.create({
        buttons: [
          {
            id: "cancel",
            text: yield lastValueFrom(this.translate.get("common.cancel")),
            role: "cancel"
          },
          {
            id: "ok",
            text: yield lastValueFrom(this.translate.get("common.ok")),
            handler: () => __async(this, null, function* () {
              const loading = yield this.loadingCtrl.create({
                showBackdrop: false,
                message: "Bitte warten"
              });
              loading.present();
              from(this.fbService.checkoutSubscription(this.clubId, price, product)).pipe(switchMap((checkout) => {
                console.log("Checkout session created with ID:", checkout.id);
                return this.fbService.getCheckoutSession(this.clubId, checkout.id);
              }), catchError((error) => {
                console.error("Error during checkout process:", error);
                return of(null);
              })).subscribe((checkoutSession) => {
                if (checkoutSession) {
                  console.log("Received checkout session data:", checkoutSession);
                  if (checkoutSession && checkoutSession.url) {
                    loading.dismiss();
                    this.openUrl(checkoutSession.url);
                  }
                } else {
                  console.log("No checkout session data received.");
                }
              });
            })
          }
        ],
        header: "Abo kaufen",
        message: "M\xF6chtest du das Abo f\xFCr " + price.currency_upper + " " + price.unit_amount + " kaufen?"
      });
      alert.present();
    });
  }
  checkoutAddon(price, product) {
    return __async(this, null, function* () {
      console.log(price);
      console.log(product);
      const alert = yield this.alertCtrl.create({
        buttons: [
          {
            id: "cancel",
            text: yield lastValueFrom(this.translate.get("common.cancel")),
            role: "cancel"
          },
          {
            id: "ok",
            text: yield lastValueFrom(this.translate.get("common.ok")),
            handler: () => __async(this, null, function* () {
              const loading = yield this.loadingCtrl.create({
                showBackdrop: false,
                message: "Bitte warten"
              });
              loading.present();
              from(this.fbService.checkoutAddon(this.clubId, price, product)).pipe(switchMap((checkout) => {
                console.log("Checkout session created with ID:", checkout.id);
                return this.fbService.getCheckoutSession(this.clubId, checkout.id);
              }), catchError((error) => {
                console.error("Error during checkout process:", error);
                return of(null);
              })).subscribe((checkoutSession) => {
                if (checkoutSession) {
                  console.log("Received checkout session data:", checkoutSession);
                  if (checkoutSession && checkoutSession.url) {
                    loading.dismiss();
                    this.openUrl(checkoutSession.url);
                  }
                } else {
                  console.log("No checkout session data received.");
                }
              });
            })
          }
        ],
        header: "Abo kaufen",
        message: "M\xF6chtest du das Abo f\xFCr " + price.currency_upper + " " + price.unit_amount + " kaufen?"
      });
      alert.present();
    });
  }
  hasAcitveSubscription(subscriptionList) {
    return subscriptionList.filter((subcription) => subcription.status === "active");
  }
  openUrl(url) {
    return __async(this, null, function* () {
      Browser.open({
        url
      });
    });
  }
  toastActionSaved() {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: yield lastValueFrom(this.translate.get("common.success__saved")),
        duration: 1500,
        position: "top",
        color: "success"
      });
      yield toast.present();
    });
  }
  toastActionCanceled() {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: yield lastValueFrom(this.translate.get("common.action__canceled")),
        duration: 1500,
        position: "top",
        color: "danger"
      });
      yield toast.present();
    });
  }
  toastActionError(error) {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: error.message,
        duration: 1500,
        position: "top",
        color: "danger"
      });
      yield toast.present();
    });
  }
  close() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(null, "close");
    });
  }
  confirm() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(this.clubId, "confirm");
    });
  }
};
_ClubSubscriptionPage.\u0275fac = function ClubSubscriptionPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClubSubscriptionPage)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(UserProfileService), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NavParams));
};
_ClubSubscriptionPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClubSubscriptionPage, selectors: [["app-club-subscription"]], inputs: { clubId: "clubId" }, standalone: false, decls: 19, vars: 14, consts: [["noRequests", ""], [3, "translucent"], ["slot", "primary"], [3, "click"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], [4, "ngIf"], ["lines", "none", 3, "inset"], ["detail", "", 3, "click"], [1, "ion-text-wrap"], [3, "inset", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "value", 4, "ngIf"], [3, "value"], ["slot", "header", "color", "light"], ["slot", "start", "color", "success", "name", "checkmark-circle-outline", 4, "ngIf"], ["slot", "start", "color", "danger", "name", "close-circle-outline", 4, "ngIf"], ["slot", "content", 1, "ion-padding"], ["color", "success", 4, "ngIf"], ["slot", "start", "color", "success", "name", "checkmark-circle-outline"], ["slot", "start", "color", "danger", "name", "close-circle-outline"], ["color", "success"], ["slot", "end"], ["color", "danger"], ["slot", "start", "color", "primary", "name", "heart-outline", 4, "ngIf"], ["slot", "start", "color", "primary", "name", "heart-outline"], ["detail", "", 3, "click", 4, "ngFor", "ngForOf"], [3, "inset"], ["color", "danger", 4, "ngIf"]], template: function ClubSubscriptionPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 1)(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-buttons", 2)(6, "ion-button", 3);
    \u0275\u0275listener("click", function ClubSubscriptionPage_Template_ion_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.close());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "ion-content", 4)(10, "ion-header", 5)(11, "ion-toolbar")(12, "ion-title", 6);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, ClubSubscriptionPage_ng_container_15_Template, 20, 13, "ng-container", 7);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ClubSubscriptionPage_ng_template_17_Template, 0, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "common.subscription"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, "common.close"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 10, "common.subscription"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(16, 12, ctx.club$));
  }
}, dependencies: [NgForOf, NgIf, IonAccordion, IonAccordionGroup, IonBadge, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonNote, IonTitle, IonToolbar, AsyncPipe, DatePipe, TranslatePipe], encapsulation: 2 });
var ClubSubscriptionPage = _ClubSubscriptionPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClubSubscriptionPage, { className: "ClubSubscriptionPage", filePath: "src/app/pages/club-subscription/club-subscription.page.ts", lineNumber: 17 });
})();

// src/app/pages/club-member-list/club-member-list.page.ts
function ClubMemberListPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 5);
    \u0275\u0275listener("click", function ClubMemberListPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_1_Template_ion_button_click_0_listener() {
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
function ClubMemberListPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 5);
    \u0275\u0275listener("click", function ClubMemberListPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_2_Template_ion_button_click_0_listener() {
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
function ClubMemberListPage_ng_container_0_ng_container_3_ion_buttons_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-buttons", 14);
    \u0275\u0275template(1, ClubMemberListPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_1_Template, 3, 3, "ion-button", 15)(2, ClubMemberListPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_2_Template, 3, 3, "ion-button", 15);
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
function ClubMemberListPage_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClubMemberListPage_ng_container_0_ng_container_3_ion_buttons_1_Template, 3, 2, "ion-buttons", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r5 = ctx.ngIf;
    const club_r6 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isClubAdmin(clubAdminList_r5, club_r6.id));
  }
}
function ClubMemberListPage_ng_container_0_ng_container_21_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 17);
    \u0275\u0275listener("click", function ClubMemberListPage_ng_container_0_ng_container_21_ion_button_1_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addRole());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "ion-icon", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "common.add"), " ");
  }
}
function ClubMemberListPage_ng_container_0_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClubMemberListPage_ng_container_0_ng_container_21_ion_button_1_Template, 4, 3, "ion-button", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r8 = ctx.ngIf;
    const club_r6 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isClubAdmin(clubAdminList_r8, club_r6.id));
  }
}
function ClubMemberListPage_ng_container_0_ion_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 17);
    \u0275\u0275listener("click", function ClubMemberListPage_ng_container_0_ion_button_23_Template_ion_button_click_0_listener() {
      const role_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setFilter(role_r10));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r10, " ");
  }
}
function ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ng_container_2_ion_item_options_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-options", 30)(1, "ion-item-option", 31);
    \u0275\u0275listener("click", function ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ng_container_2_ion_item_options_1_Template_ion_item_option_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      \u0275\u0275nextContext(2);
      const item_r13 = \u0275\u0275reference(1);
      const member_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.changeRoleOfMember(item_r13, member_r14));
    });
    \u0275\u0275element(2, "ion-icon", 32);
    \u0275\u0275elementEnd()();
  }
}
function ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ng_container_2_ion_item_options_1_Template, 3, 0, "ion-item-options", 29);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r15 = ctx.ngIf;
    const club_r6 = \u0275\u0275nextContext(5).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isClubAdmin(clubAdminList_r15, club_r6.id));
  }
}
function ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-icon", 33);
    \u0275\u0275listener("click", function ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ion_icon_5_Template_ion_icon_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const member_r14 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.deleteClubMember(member_r14));
    });
    \u0275\u0275elementEnd();
  }
}
function ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_img_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 34);
  }
}
function ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_img_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 35);
  }
  if (rf & 2) {
    const member_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275propertyInterpolate("src", member_r14 == null ? null : member_r14.profilePicture, \u0275\u0275sanitizeUrl);
  }
}
function ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ng_container_11_ion_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-label", 5);
    \u0275\u0275listener("click", function ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ng_container_11_ion_label_1_Template_ion_label_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const member_r14 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openMember(member_r14));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r14 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, member_r14.dateOfBirth == null ? null : member_r14.dateOfBirth.toDate(), "dd.MM.YYYY "), " ");
  }
}
function ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ng_container_11_ion_label_1_Template, 3, 4, "ion-label", 15);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r18 = ctx.ngIf;
    const club_r6 = \u0275\u0275nextContext(5).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isClubAdmin(clubAdminList_r18, club_r6.id));
  }
}
function ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ion_label_13_ion_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r20);
  }
}
function ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ion_label_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-label", 36);
    \u0275\u0275listener("click", function ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ion_label_13_Template_ion_label_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const member_r14 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openMember(member_r14));
    });
    \u0275\u0275template(1, ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ion_label_13_ion_badge_1_Template, 2, 1, "ion-badge", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", member_r14.roles);
  }
}
function ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 1);
    \u0275\u0275template(2, ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ng_container_2_Template, 2, 1, "ng-container", 2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementStart(4, "ion-item", 22);
    \u0275\u0275template(5, ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ion_icon_5_Template, 1, 0, "ion-icon", 23);
    \u0275\u0275elementStart(6, "ion-avatar", 24);
    \u0275\u0275listener("click", function ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_Template_ion_avatar_click_6_listener() {
      \u0275\u0275restoreView(_r11);
      const member_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openMember(member_r14));
    });
    \u0275\u0275template(7, ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_img_7_Template, 1, 0, "img", 25)(8, ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_img_8_Template, 1, 1, "img", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ion-label", 27);
    \u0275\u0275listener("click", function ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_Template_ion_label_click_9_listener() {
      \u0275\u0275restoreView(_r11);
      const member_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openMember(member_r14));
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ng_container_11_Template, 2, 1, "ng-container", 2);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275template(13, ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ion_label_13_Template, 2, 1, "ion-label", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 8, ctx_r2.clubAdminList$));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.allowEdit == true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !member_r14.profilePicture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r14.profilePicture);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", member_r14.firstName, " ", member_r14.lastName, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(12, 10, ctx_r2.clubAdminList$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", member_r14.roles.length > 0);
  }
}
function ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_Template, 14, 12, "ion-item-sliding", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const member_r14 = ctx.$implicit;
    const groupBy_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r14.groupBy == groupBy_r21);
  }
}
function ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-item-divider", 21)(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_Template, 2, 1, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const groupBy_r21 = ctx.$implicit;
    const clubMemberList_r22 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", groupBy_r21, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", clubMemberList_r22);
  }
}
function ClubMemberListPage_ng_container_0_ion_list_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 19)(1, "ion-item-group");
    \u0275\u0275template(2, ClubMemberListPage_ng_container_0_ion_list_24_ng_container_2_Template, 5, 2, "ng-container", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.groupArray);
  }
}
function ClubMemberListPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-header", 3)(2, "ion-toolbar");
    \u0275\u0275template(3, ClubMemberListPage_ng_container_0_ng_container_3_Template, 2, 1, "ng-container", 2);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementStart(5, "ion-title");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-buttons", 4)(9, "ion-button", 5);
    \u0275\u0275listener("click", function ClubMemberListPage_ng_container_0_Template_ion_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "ion-content", 6)(13, "ion-header", 7)(14, "ion-toolbar")(15, "ion-title", 8);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "ion-searchbar", 9);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275listener("ionChange", function ClubMemberListPage_ng_container_0_Template_ion_searchbar_ionChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 10);
    \u0275\u0275template(21, ClubMemberListPage_ng_container_0_ng_container_21_Template, 2, 1, "ng-container", 2);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275template(23, ClubMemberListPage_ng_container_0_ion_button_23_Template, 2, 1, "ion-button", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, ClubMemberListPage_ng_container_0_ion_list_24_Template, 3, 2, "ion-list", 12);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const club_r6 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(4, 12, ctx_r2.clubAdminList$));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 14, "common.members"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 16, "common.close"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 18, "common.members"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(19, 20, "common.searchfield"));
    \u0275\u0275property("debounce", 1e3)("value", ctx_r2.searchTerm.value);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(22, 22, ctx_r2.clubAdminList$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", club_r6["roles"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(25, 24, ctx_r2.filteredClubMembers$));
  }
}
function ClubMemberListPage_ng_template_2_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-item-divider", 21)(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const groupBy_r24 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", groupBy_r24, " ");
  }
}
function ClubMemberListPage_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 3)(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-buttons", 4)(6, "ion-button", 5);
    \u0275\u0275listener("click", function ClubMemberListPage_ng_template_2_Template_ion_button_click_6_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "ion-content", 6)(10, "ion-header", 7)(11, "ion-toolbar")(12, "ion-title", 8);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "ion-searchbar", 37);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("ionChange", function ClubMemberListPage_ng_template_2_Template_ion_searchbar_ionChange_15_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ion-list", 19)(18, "ion-item-group");
    \u0275\u0275template(19, ClubMemberListPage_ng_template_2_ng_container_19_Template, 4, 1, "ng-container", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 9, "common.members"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 11, "common.close"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 13, "common.members"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(16, 15, "common.searchfield"));
    \u0275\u0275property("debounce", 1e3);
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.groupArray);
  }
}
var _ClubMemberListPage = class _ClubMemberListPage {
  constructor(modalCtrl, navParams, alertCtrl, toastCtrl, userProfileService, fbService, authService, alertController, translate) {
    this.modalCtrl = modalCtrl;
    this.navParams = navParams;
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.userProfileService = userProfileService;
    this.fbService = fbService;
    this.authService = authService;
    this.alertController = alertController;
    this.translate = translate;
    this.allowEdit = false;
    this.groupArray = [];
    this.searchTerm = new BehaviorSubject("");
  }
  ngOnInit() {
    this.club = this.navParams.get("club");
    if (this.club.roles && this.club.roles.lenght > 0) {
    } else {
      this.club.roles = [];
    }
    this.club$ = this.fbService.getClubRef(this.club.id);
    this.initializeClubMembers();
    this.clubAdminList$ = this.fbService.getClubAdminList();
  }
  ngOnDestroy() {
  }
  edit() {
    if (this.allowEdit) {
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }
  addRole() {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "Neue Rolle hinzuf\xFCgen",
        message: "Erstelle eine neue Rolle f\xFCr deinen Verein.",
        inputs: [{
          name: "role",
          value: "",
          placeholder: "Vorstand, Sportchef,...",
          id: "role"
        }],
        buttons: [
          {
            text: yield lastValueFrom(this.translate.get("common.cancel")),
            handler: (data) => {
              console.log("Cancelled", data);
            },
            role: "cancel"
          },
          {
            text: yield lastValueFrom(this.translate.get("common.ok")),
            handler: (data) => {
              if (data.role.trim()) {
                this.club$.pipe(take(1)).subscribe((club) => {
                  if (club && club.roles) {
                    club.roles.push(data.role);
                    this.fbService.addClubRole(club.id, club.roles).then(() => {
                      console.log("Role added successfully");
                    }).catch((error) => {
                      console.error("Failed to add role", error);
                    });
                  } else {
                    this.fbService.addClubRole(club.id, [data.role]).then(() => {
                      console.log("Role added successfully");
                    }).catch((error) => {
                      console.error("Failed to add role", error);
                    });
                    console.error("Club data is missing or invalid");
                  }
                });
              }
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  changeRoleOfMember(slidingItem, member) {
    return __async(this, null, function* () {
      slidingItem.closeOpened();
      let alertInputs = [];
      this.club$.pipe(take(1)).subscribe((club) => __async(this, null, function* () {
        for (const role of club.roles) {
          alertInputs.push({
            label: role,
            type: "checkbox",
            value: role,
            checked: member.roles.find((memberRole) => memberRole == role)
          });
        }
        const alert = yield this.alertCtrl.create({
          header: "Rollen von Mitglied bearbeiten",
          inputs: alertInputs,
          buttons: [
            {
              text: yield lastValueFrom(this.translate.get("common.cancel")),
              handler: (data) => {
                console.log("Cancelled", data);
              },
              role: "cancel"
            },
            {
              text: yield lastValueFrom(this.translate.get("common.ok")),
              handler: (data) => {
                console.log(data);
                this.fbService.addClubMemberRole(club.id, member.id, data).then(() => {
                  console.log("Role added successfully");
                }).catch((error) => {
                  console.error("Failed to add role", error);
                });
              }
            }
          ]
        });
        yield alert.present();
      }));
    });
  }
  setFilter(role) {
    this.handleSearch({ detail: { value: role } });
  }
  deleteClubMember(member) {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        message: yield lastValueFrom(this.translate.get("club-member-list.delete_member__confirm")),
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
              try {
                yield this.fbService.deleteClubember(this.club.id, member.id);
                yield this.toastActionSaved();
              } catch (e) {
                this.toastActionError(e);
              }
            })
          }
        ]
      });
      alert.present();
    });
  }
  initializeClubMembers() {
    this.groupArray = [];
    this.clubMembers$ = this.fbService.getClubMemberRefs(this.club.id).pipe(
      // tap(() => console.log("Fetching club members")),
      switchMap((members) => {
        if (members.length === 0) {
          console.log("No club members found.");
          this.groupArray = [];
          return of([]);
        }
        const profiles$ = members.map((member) => this.userProfileService.getUserProfileById(member.id).pipe(map((profile) => __spreadProps(__spreadValues(__spreadValues({}, member), profile), {
          // Spread profile to overwrite and add profile attributes
          firstName: profile.firstName || "Unknown",
          lastName: profile.lastName || "Unknown",
          roles: member.roles || [],
          dateOfBirth: profile.dateOfBirth || null
        })), catchError(() => of(__spreadProps(__spreadValues({}, member), {
          firstName: "Unknown",
          lastName: "Unknown",
          dateOfBirth: null,
          roles: member.roles || []
          // Ensure role or other attributes are included even in error
        })))));
        return combineLatest(profiles$).pipe(map((profiles) => profiles.filter((profile) => profile !== void 0).sort((a, b) => a.firstName.localeCompare(b.firstName)).map((profile) => {
          const groupByChar = profile.firstName.charAt(0).toUpperCase();
          if (!this.groupArray.includes(groupByChar)) {
            this.groupArray.push(groupByChar);
          }
          return __spreadProps(__spreadValues({}, profile), {
            groupBy: groupByChar
          });
        })));
      }),
      catchError((err) => {
        console.error("Error fetching Club members:", err);
        return of([]);
      })
    );
    this.filteredClubMembers$ = combineLatest([this.clubMembers$, this.searchTerm]).pipe(debounceTime(300), map(([members, term]) => {
      if (!term)
        return members;
      const filtered = members.filter((member) => member.firstName.toLowerCase().includes(term.toLowerCase()) || member.lastName.toLowerCase().includes(term.toLowerCase()) || member.roles.find((role) => role.toLowerCase().includes(term.toLowerCase())));
      return filtered;
    }), map((filtered) => {
      this.groupArray = [];
      filtered.forEach((member) => {
        const groupByChar = member.firstName.charAt(0).toUpperCase();
        if (!this.groupArray.includes(groupByChar)) {
          this.groupArray.push(groupByChar);
        }
      });
      return filtered;
    }), tap((filtered) => console.log("Filtered members:", filtered.length)), catchError((err) => {
      console.error("Error filtering members:", err);
      return of([]);
    }));
  }
  handleSearch(event) {
    const searchTerm = event.detail.value || "";
    console.log("Handling Search Event:", searchTerm);
    this.searchTerm.next(searchTerm.trim());
  }
  isClubAdmin(clubAdminList, clubId) {
    return clubAdminList && clubAdminList.some((club) => club.id === clubId);
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
          data: member,
          clubId: this.club.id
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
  toastActionSaved() {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: yield lastValueFrom(this.translate.get("common.success__saved")),
        duration: 1500,
        position: "top",
        color: "success"
      });
      yield toast.present();
    });
  }
  presentCancelToast() {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: yield lastValueFrom(this.translate.get("onboarding.warning__action_canceled")),
        duration: 1500,
        position: "top",
        color: "danger"
      });
      yield toast.present();
    });
  }
  toastActionCanceled() {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: yield lastValueFrom(this.translate.get("common.action__canceled")),
        duration: 1500,
        position: "top",
        color: "danger"
      });
      yield toast.present();
    });
  }
  toastActionError(error) {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: error.message,
        duration: 1500,
        position: "top",
        color: "danger"
      });
      yield toast.present();
    });
  }
  close() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(null, "close");
    });
  }
  confirm() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(this.club, "confirm");
    });
  }
};
_ClubMemberListPage.\u0275fac = function ClubMemberListPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClubMemberListPage)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(NavParams), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(UserProfileService), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(TranslateService));
};
_ClubMemberListPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClubMemberListPage, selectors: [["app-club-member-list"]], inputs: { club: "club" }, standalone: false, decls: 4, vars: 3, consts: [["loading", ""], ["item", ""], [4, "ngIf"], [3, "translucent"], ["slot", "primary"], [3, "click"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], ["animated", "true", "search-icon", "search-circle", 3, "ionChange", "debounce", "value", "placeholder"], [1, "ion-padding"], ["shape", "round", "size", "small", 3, "click", 4, "ngFor", "ngForOf"], [3, "inset", 4, "ngIf"], ["slot", "secondary", 4, "ngIf"], ["slot", "secondary"], [3, "click", 4, "ngIf"], ["shape", "round", "size", "small", 3, "click", 4, "ngIf"], ["shape", "round", "size", "small", 3, "click"], ["slot", "start", "name", "add-circle-outline"], [3, "inset"], [4, "ngFor", "ngForOf"], ["color", "light"], ["detail", "true"], ["slot", "icon-only", "color", "danger", "slot", "start", "name", "trash", 3, "click", 4, "ngIf"], ["slot", "start", 3, "click"], ["alt", "Silhouette of a person's head", "src", "https://ionicframework.com/docs/img/demos/avatar.svg", 4, "ngIf"], [3, "src", 4, "ngIf"], [1, "ion-text-wrap", 3, "click"], ["slot", "end", 3, "click", 4, "ngIf"], ["side", "end", 4, "ngIf"], ["side", "end"], ["color", "primary", 3, "click"], ["slot", "icon-only", "name", "pricetags-outline"], ["slot", "icon-only", "color", "danger", "slot", "start", "name", "trash", 3, "click"], ["alt", "Silhouette of a person's head", "src", "https://ionicframework.com/docs/img/demos/avatar.svg"], [3, "src"], ["slot", "end", 3, "click"], ["animated", "true", "search-icon", "search-circle", 3, "ionChange", "debounce", "placeholder"]], template: function ClubMemberListPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ClubMemberListPage_ng_container_0_Template, 26, 26, "ng-container", 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275template(2, ClubMemberListPage_ng_template_2_Template, 20, 17, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.club$));
  }
}, dependencies: [NgForOf, NgIf, IonAvatar, IonBadge, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonSearchbar, IonTitle, IonToolbar, TextValueAccessorDirective, AsyncPipe, DatePipe, TranslatePipe], encapsulation: 2 });
var ClubMemberListPage = _ClubMemberListPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClubMemberListPage, { className: "ClubMemberListPage", filePath: "src/app/pages/club-member-list/club-member-list.page.ts", lineNumber: 36 });
})();

// src/app/pages/club-admin-list/club-admin-list.page.ts
function ClubAdminListPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 4);
    \u0275\u0275listener("click", function ClubAdminListPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_1_Template_ion_button_click_0_listener() {
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
function ClubAdminListPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 4);
    \u0275\u0275listener("click", function ClubAdminListPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_2_Template_ion_button_click_0_listener() {
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
function ClubAdminListPage_ng_container_0_ng_container_3_ion_buttons_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-buttons", 11);
    \u0275\u0275template(1, ClubAdminListPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_1_Template, 3, 3, "ion-button", 12)(2, ClubAdminListPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_2_Template, 3, 3, "ion-button", 12);
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
function ClubAdminListPage_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClubAdminListPage_ng_container_0_ng_container_3_ion_buttons_1_Template, 3, 2, "ion-buttons", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r5 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isClubAdmin(clubAdminList_r5, ctx_r2.club.id));
  }
}
function ClubAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_ion_item_sliding_1_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-icon", 22);
    \u0275\u0275listener("click", function ClubAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_ion_item_sliding_1_ion_icon_2_Template_ion_icon_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const member_r8 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.deleteClubAdmin(member_r8));
    });
    \u0275\u0275elementEnd();
  }
}
function ClubAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_ion_item_sliding_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
}
function ClubAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_ion_item_sliding_1_img_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 24);
  }
  if (rf & 2) {
    const member_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275propertyInterpolate("src", member_r8 == null ? null : member_r8.profilePicture, \u0275\u0275sanitizeUrl);
  }
}
function ClubAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_ion_item_sliding_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding")(1, "ion-item", 16);
    \u0275\u0275template(2, ClubAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_ion_item_sliding_1_ion_icon_2_Template, 1, 0, "ion-icon", 17);
    \u0275\u0275elementStart(3, "ion-avatar", 18);
    \u0275\u0275template(4, ClubAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_ion_item_sliding_1_img_4_Template, 1, 0, "img", 19)(5, ClubAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_ion_item_sliding_1_img_5_Template, 1, 1, "img", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-label", 21);
    \u0275\u0275listener("click", function ClubAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_ion_item_sliding_1_Template_ion_label_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const member_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openMember(member_r8));
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const member_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.allowEdit == true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !member_r8.profilePicture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r8.profilePicture);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", member_r8.firstName, " ", member_r8.lastName, " ");
  }
}
function ClubAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClubAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_ion_item_sliding_1_Template, 8, 5, "ion-item-sliding", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const member_r8 = ctx.$implicit;
    const groupBy_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r8.groupBy == groupBy_r9);
  }
}
function ClubAdminListPage_ng_container_0_ion_list_20_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-item-divider", 15)(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, ClubAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_Template, 2, 1, "ng-container", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const groupBy_r9 = ctx.$implicit;
    const clubAdminList_r10 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", groupBy_r9, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", clubAdminList_r10);
  }
}
function ClubAdminListPage_ng_container_0_ion_list_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 13)(1, "ion-item-group");
    \u0275\u0275template(2, ClubAdminListPage_ng_container_0_ion_list_20_ng_container_2_Template, 5, 2, "ng-container", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.groupArray);
  }
}
function ClubAdminListPage_ng_container_0_ng_container_22_ion_fab_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-fab", 26)(1, "ion-fab-button", 4);
    \u0275\u0275listener("click", function ClubAdminListPage_ng_container_0_ng_container_22_ion_fab_1_Template_ion_fab_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addAdministratorToClub());
    });
    \u0275\u0275element(2, "ion-icon", 27);
    \u0275\u0275elementEnd()();
  }
}
function ClubAdminListPage_ng_container_0_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClubAdminListPage_ng_container_0_ng_container_22_ion_fab_1_Template, 3, 0, "ion-fab", 25);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r12 = ctx.ngIf;
    const club_r13 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isClubAdmin(clubAdminList_r12, club_r13.id));
  }
}
function ClubAdminListPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-header", 2)(2, "ion-toolbar");
    \u0275\u0275template(3, ClubAdminListPage_ng_container_0_ng_container_3_Template, 2, 1, "ng-container", 1);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementStart(5, "ion-title");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-buttons", 3)(9, "ion-button", 4);
    \u0275\u0275listener("click", function ClubAdminListPage_ng_container_0_Template_ion_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "ion-content", 5)(13, "ion-header", 6)(14, "ion-toolbar")(15, "ion-title", 7);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "ion-searchbar", 8);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275listener("ionChange", function ClubAdminListPage_ng_container_0_Template_ion_searchbar_ionChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, ClubAdminListPage_ng_container_0_ion_list_20_Template, 3, 2, "ion-list", 9);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275template(22, ClubAdminListPage_ng_container_0_ng_container_22_Template, 2, 1, "ng-container", 1);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(4, 10, ctx_r2.clubAdminList$));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 12, "common.admins"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 14, "common.close"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 16, "common.admins"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(19, 18, "common.searchfield"));
    \u0275\u0275property("debounce", 1e3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(21, 20, ctx_r2.filteredClubAdmins$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(23, 22, ctx_r2.clubAdminList$));
  }
}
function ClubAdminListPage_ng_template_2_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-item-divider", 15)(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const groupBy_r15 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", groupBy_r15, " ");
  }
}
function ClubAdminListPage_ng_template_2_ng_container_20_ion_fab_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-fab", 26)(1, "ion-fab-button", 4);
    \u0275\u0275listener("click", function ClubAdminListPage_ng_template_2_ng_container_20_ion_fab_1_Template_ion_fab_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addAdministratorToClub());
    });
    \u0275\u0275element(2, "ion-icon", 27);
    \u0275\u0275elementEnd()();
  }
}
function ClubAdminListPage_ng_template_2_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClubAdminListPage_ng_template_2_ng_container_20_ion_fab_1_Template, 3, 0, "ion-fab", 25);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r17 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", clubAdminList_r17.length > 0);
  }
}
function ClubAdminListPage_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 2)(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-buttons", 3)(6, "ion-button", 4);
    \u0275\u0275listener("click", function ClubAdminListPage_ng_template_2_Template_ion_button_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "ion-content", 5)(10, "ion-header", 6)(11, "ion-toolbar")(12, "ion-title", 7);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "ion-searchbar", 8);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("ionChange", function ClubAdminListPage_ng_template_2_Template_ion_searchbar_ionChange_15_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ion-list", 13)(18, "ion-item-group");
    \u0275\u0275template(19, ClubAdminListPage_ng_template_2_ng_container_19_Template, 4, 1, "ng-container", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, ClubAdminListPage_ng_template_2_ng_container_20_Template, 2, 1, "ng-container", 1);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 10, "common.admins"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 12, "common.close"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 14, "common.admins"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(16, 16, "common.searchfield"));
    \u0275\u0275property("debounce", 1e3);
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.groupArray);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(21, 18, ctx_r2.clubAdminList$));
  }
}
var _ClubAdminListPage = class _ClubAdminListPage {
  constructor(modalCtrl, navParams, alertCtrl, toastCtrl, userProfileService, fbService, authService, translate) {
    this.modalCtrl = modalCtrl;
    this.navParams = navParams;
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.userProfileService = userProfileService;
    this.fbService = fbService;
    this.authService = authService;
    this.translate = translate;
    this.allowEdit = false;
    this.groupArray = [];
    this.searchTerm = new BehaviorSubject("");
  }
  ngOnInit() {
    this.club = this.navParams.get("club");
    if (this.club.roles && this.club.roles.lenght > 0) {
    } else {
      this.club.roles = [];
    }
    this.club$ = this.fbService.getClubRef(this.club.id);
    this.initializeClubAdmins();
    this.clubAdminList$ = this.fbService.getClubAdminList();
  }
  ngOnDestroy() {
  }
  edit() {
    if (this.allowEdit) {
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }
  initializeClubAdmins() {
    this.groupArray = [];
    this.clubAdmins$ = this.fbService.getClubAdminRefs(this.club.id).pipe(
      // tap(() => console.log("Fetching club admins")),
      switchMap((members) => {
        if (members.length === 0) {
          console.log("No club admins found.");
          this.groupArray = [];
          return of([]);
        }
        const profiles$ = members.map((member) => this.userProfileService.getUserProfileById(member.id).pipe(map((profile) => __spreadProps(__spreadValues(__spreadValues({}, member), profile), {
          // Spread profile to overwrite and add profile attributes
          firstName: profile.firstName || "Unknown",
          lastName: profile.lastName || "Unknown",
          roles: member.roles || []
        })), catchError(() => of(__spreadProps(__spreadValues({}, member), {
          firstName: "Unknown",
          lastName: "Unknown",
          roles: member.roles || []
          // Ensure role or other attributes are included even in error
        })))));
        return combineLatest(profiles$).pipe(map((profiles) => profiles.filter((profile) => profile !== void 0).sort((a, b) => a.firstName.localeCompare(b.firstName)).map((profile) => {
          const groupByChar = profile.firstName.charAt(0).toUpperCase();
          if (!this.groupArray.includes(groupByChar)) {
            this.groupArray.push(groupByChar);
          }
          return __spreadProps(__spreadValues({}, profile), {
            groupBy: groupByChar
          });
        })));
      }),
      catchError((err) => {
        console.error("Error fetching Club admins:", err);
        return of([]);
      })
    );
    this.filteredClubAdmins$ = combineLatest([this.clubAdmins$, this.searchTerm]).pipe(debounceTime(300), map(([admins, term]) => {
      if (!term)
        return admins;
      const filtered = admins.filter((admin) => admin.firstName.toLowerCase().includes(term.toLowerCase()) || admin.lastName.toLowerCase().includes(term.toLowerCase()) || admin.roles.find((role) => role.toLowerCase().includes(term.toLowerCase())));
      return filtered;
    }), map((filtered) => {
      this.groupArray = [];
      filtered.forEach((admin) => {
        const groupByChar = admin.firstName.charAt(0).toUpperCase();
        if (!this.groupArray.includes(groupByChar)) {
          this.groupArray.push(groupByChar);
        }
      });
      return filtered;
    }), tap((filtered) => console.log("Filtered admins:", filtered.length)), catchError((err) => {
      console.error("Error filtering admins:", err);
      return of([]);
    }));
  }
  handleSearch(event) {
    const searchTerm = event.detail.value || "";
    console.log("Handling Search Event:", searchTerm);
    this.searchTerm.next(searchTerm.trim());
  }
  isClubAdmin(clubAdminList, clubId) {
    return clubAdminList && clubAdminList.some((club) => club.id === clubId);
  }
  addAdministratorToClub() {
    if (!this.club || !this.club.id) {
      console.error("No valid club or club reference found.");
      return;
    }
    const fetchClubAndAdmins$ = combineLatest([
      this.fbService.getClubMemberRefs(this.club.id),
      this.clubAdmins$
    ]).pipe(take(1), switchMap(([members, clubAdmins]) => {
      if (members.length === 0) {
        console.log("No club members found.");
        return of([]);
      }
      const profiles$ = members.map((member) => this.userProfileService.getUserProfileById(member.id).pipe(
        catchError(() => of(__spreadProps(__spreadValues({}, member), { firstName: "Unknown", lastName: "Unknown" })))
        // Provide fallback data
      ));
      return combineLatest(profiles$).pipe(take(1), map((profiles) => profiles.filter((profile) => profile !== void 0)), map((profiles) => this.filterNewAdmins(profiles, clubAdmins)), map((filteredMembers) => this.prepareMemberSelectOptions(filteredMembers)));
    }), catchError((err) => {
      console.error("Error fetching club and club admins:", err);
      return of([]);
    }));
    fetchClubAndAdmins$.subscribe((adminSelect) => __async(this, null, function* () {
      if (adminSelect.length > 0) {
        yield this.showAddAdminAlert(adminSelect);
      } else {
        console.log("No new administrators available to add.");
      }
    }));
  }
  filterNewAdmins(profiles, clubAdmins) {
    return profiles.filter((member) => !clubAdmins.some((admin) => admin.id === member.id));
  }
  prepareMemberSelectOptions(filteredMembers) {
    const sortedMembers = filteredMembers.sort((a, b) => {
      const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
      const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
      return nameA.localeCompare(nameB);
    });
    return sortedMembers.map((member) => ({
      type: "checkbox",
      name: member.id,
      label: `${member.firstName} ${member.lastName}`,
      value: member.id,
      checked: false
    }));
  }
  showAddAdminAlert(adminSelect) {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: yield lastValueFrom(this.translate.get("common.addAdministrator")),
        inputs: adminSelect,
        buttons: [
          {
            text: yield lastValueFrom(this.translate.get("common.cancel")),
            role: "cancel",
            handler: () => console.log("Cancel clicked")
          },
          {
            text: yield lastValueFrom(this.translate.get("common.add")),
            handler: (selectedAdmins) => {
              selectedAdmins.forEach((adminId) => {
                this.approveClubAdminRequest(this.club.id, adminId);
              });
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  approveClubAdminRequest(clubId, adminId) {
    return __async(this, null, function* () {
      yield this.fbService.addClubAdmin(clubId, adminId).then(() => {
        this.toastActionSaved();
      }).catch((err) => {
        this.toastActionError(err);
      });
    });
  }
  deleteClubAdmin(member) {
    return __async(this, null, function* () {
      try {
        yield this.fbService.deleteClubAdmin(this.club.id, member.id);
        yield this.toastActionSaved();
      } catch (e) {
        this.toastActionError(e);
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
  toastActionSaved() {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: yield lastValueFrom(this.translate.get("common.success__saved")),
        duration: 1500,
        position: "top",
        color: "success"
      });
      yield toast.present();
    });
  }
  toastActionCanceled() {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: yield lastValueFrom(this.translate.get("common.action__canceled")),
        duration: 1500,
        position: "top",
        color: "danger"
      });
      yield toast.present();
    });
  }
  toastActionError(error) {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: error.message,
        duration: 1500,
        position: "top",
        color: "danger"
      });
      yield toast.present();
    });
  }
  close() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(null, "close");
    });
  }
  confirm() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(this.club, "confirm");
    });
  }
};
_ClubAdminListPage.\u0275fac = function ClubAdminListPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClubAdminListPage)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(NavParams), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(UserProfileService), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(TranslateService));
};
_ClubAdminListPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClubAdminListPage, selectors: [["app-club-admin-list"]], inputs: { club: "club" }, standalone: false, decls: 4, vars: 3, consts: [["loading", ""], [4, "ngIf"], [3, "translucent"], ["slot", "primary"], [3, "click"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], ["animated", "true", "search-icon", "search-circle", 3, "ionChange", "debounce", "placeholder"], [3, "inset", 4, "ngIf"], ["slot", "secondary", 4, "ngIf"], ["slot", "secondary"], [3, "click", 4, "ngIf"], [3, "inset"], [4, "ngFor", "ngForOf"], ["color", "light"], ["detail", "true"], ["slot", "icon-only", "color", "danger", "slot", "start", "name", "trash", 3, "click", 4, "ngIf"], ["slot", "start"], ["alt", "Silhouette of a person's head", "src", "https://ionicframework.com/docs/img/demos/avatar.svg", 4, "ngIf"], [3, "src", 4, "ngIf"], [1, "ion-text-wrap", 3, "click"], ["slot", "icon-only", "color", "danger", "slot", "start", "name", "trash", 3, "click"], ["alt", "Silhouette of a person's head", "src", "https://ionicframework.com/docs/img/demos/avatar.svg"], [3, "src"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["name", "add-outline"]], template: function ClubAdminListPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ClubAdminListPage_ng_container_0_Template, 24, 24, "ng-container", 1);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275template(2, ClubAdminListPage_ng_template_2_Template, 22, 20, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.club$));
  }
}, dependencies: [NgForOf, NgIf, IonAvatar, IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemGroup, IonItemSliding, IonLabel, IonList, IonSearchbar, IonTitle, IonToolbar, TextValueAccessorDirective, AsyncPipe, TranslatePipe], styles: ["\n\nion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 36px;\n}\n/*# sourceMappingURL=club-admin-list.page.css.map */"] });
var ClubAdminListPage = _ClubAdminListPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClubAdminListPage, { className: "ClubAdminListPage", filePath: "src/app/pages/club-admin-list/club-admin-list.page.ts", lineNumber: 42 });
})();

// src/app/pages/club-team-list/club-team-list.page.ts
function ClubTeamListPage_ion_col_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-col", 8)(1, "ion-card", 2);
    \u0275\u0275listener("click", function ClubTeamListPage_ion_col_16_Template_ion_card_click_1_listener() {
      const team_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openModal(team_r2));
    });
    \u0275\u0275element(2, "img", 9);
    \u0275\u0275elementStart(3, "ion-card-header")(4, "ion-card-title");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-card-subtitle");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-card-content")(9, "ion-badge");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const team_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", team_r2 == null ? null : team_r2.logo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", team_r2 == null ? null : team_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", team_r2 == null ? null : team_r2.liga, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", team_r2 == null ? null : team_r2.type, " ");
  }
}
function ClubTeamListPage_ng_container_18_ion_fab_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-fab", 12)(1, "ion-fab-button", 13);
    \u0275\u0275element(2, "ion-icon", 14);
    \u0275\u0275elementEnd()();
  }
}
function ClubTeamListPage_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClubTeamListPage_ng_container_18_ion_fab_1_Template, 3, 0, "ion-fab", 10);
    \u0275\u0275element(2, "ion-alert", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r4 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isClubAdmin(clubAdminList_r4, ctx_r2.clubId));
    \u0275\u0275advance();
    \u0275\u0275property("buttons", ctx_r2.alertButtonsAddTeam)("inputs", ctx_r2.alertInputsAddTeam);
  }
}
var _ClubTeamListPage = class _ClubTeamListPage {
  constructor(translate, fbService, toastController, modalCtrl, navParams) {
    this.translate = translate;
    this.fbService = fbService;
    this.toastController = toastController;
    this.modalCtrl = modalCtrl;
    this.navParams = navParams;
    this.alertButtonsAddTeam = [];
    this.alertInputsAddTeam = [];
    this.clubId = this.navParams.get("clubId");
    this.teamList$ = this.fbService.getClubTeamList(this.clubId);
    this.club$ = this.fbService.getClubRef(this.clubId);
  }
  ngOnInit() {
    this.setupAlerts();
    this.clubAdminList$ = this.fbService.getClubAdminList();
  }
  isClubAdmin(clubAdminList, clubId) {
    return clubAdminList && clubAdminList.some((club) => club.id === clubId);
  }
  setupAlerts() {
    this.alertInputsAddTeam = [
      {
        label: "Team Name",
        // this.translate.instant("profile.change_email_old_label"),
        placeholder: "Team Name",
        name: "name",
        type: "text",
        value: ""
      },
      {
        label: "Webseite",
        // this.translate.instant("profile.change_email_old_label"),
        placeholder: "Webseite",
        name: "website",
        type: "url",
        value: "https://"
      }
    ];
    this.alertButtonsAddTeam = [
      {
        text: this.translate.instant("common.cancel"),
        role: "destructive",
        handler: (data) => {
          console.log(data);
        }
      },
      {
        text: this.translate.instant("common.save"),
        handler: (data) => __async(this, null, function* () {
          console.log(data);
          let teamId = yield this.fbService.addClubTeam(data, this.clubId);
          yield this.toastActionSaved();
        })
      }
    ];
  }
  toastActionSaved() {
    return __async(this, null, function* () {
      const toast = yield this.toastController.create({
        message: yield lastValueFrom(this.translate.get("common.success__saved")),
        duration: 1500,
        position: "top",
        color: "success"
      });
      yield toast.present();
    });
  }
  openModal(team) {
    return __async(this, null, function* () {
      const modal = yield this.modalCtrl.create({
        component: TeamPage,
        presentingElement: yield this.modalCtrl.getTop(),
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
  openAddClubTeam() {
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
_ClubTeamListPage.\u0275fac = function ClubTeamListPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClubTeamListPage)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(NavParams));
};
_ClubTeamListPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClubTeamListPage, selectors: [["app-club-team-list"]], inputs: { clubId: "clubId" }, standalone: false, decls: 20, vars: 11, consts: [[3, "translucent"], ["slot", "primary"], [3, "click"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], ["size-lg", "4", "size-md", "6", "size-sm", "6", "size", "12", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["size-lg", "4", "size-md", "6", "size-sm", "6", "size", "12"], [3, "src"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 4, "ngIf"], ["trigger", "present-alert", "header", "Team hinzuf\xFCgen", "message", "F\xFCge ein Team hinzu", 3, "buttons", "inputs"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["id", "present-alert"], ["name", "add-outline"]], template: function ClubTeamListPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3, "Teams");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 1)(5, "ion-button", 2);
    \u0275\u0275listener("click", function ClubTeamListPage_Template_ion_button_click_5_listener() {
      return ctx.close();
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "ion-content", 3)(9, "ion-header", 4)(10, "ion-toolbar")(11, "ion-title", 5);
    \u0275\u0275text(12, "Teams");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "ion-list")(14, "ion-grid")(15, "ion-row");
    \u0275\u0275template(16, ClubTeamListPage_ion_col_16_Template, 11, 4, "ion-col", 6);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, ClubTeamListPage_ng_container_18_Template, 3, 3, "ng-container", 7);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "common.close"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(17, 7, ctx.teamList$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(19, 9, ctx.clubAdminList$));
  }
}, dependencies: [NgForOf, NgIf, IonAlert, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonList, IonRow, IonTitle, IonToolbar, AsyncPipe, TranslatePipe], encapsulation: 2 });
var ClubTeamListPage = _ClubTeamListPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClubTeamListPage, { className: "ClubTeamListPage", filePath: "src/app/pages/club-team-list/club-team-list.page.ts", lineNumber: 17 });
})();

// src/app/pages/club-request-list/club-request-list.page.ts
function ClubRequestListPage_ng_container_0_ion_list_18_ng_container_2_ng_container_4_ion_item_sliding_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 20);
  }
}
function ClubRequestListPage_ng_container_0_ion_list_18_ng_container_2_ng_container_4_ion_item_sliding_1_img_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 21);
  }
  if (rf & 2) {
    const member_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275propertyInterpolate("src", member_r4 == null ? null : member_r4.profilePicture, \u0275\u0275sanitizeUrl);
  }
}
function ClubRequestListPage_ng_container_0_ion_list_18_ng_container_2_ng_container_4_ion_item_sliding_1_ion_badge_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r5);
  }
}
function ClubRequestListPage_ng_container_0_ion_list_18_ng_container_2_ng_container_4_ion_item_sliding_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 1)(2, "ion-item", 14)(3, "ion-avatar", 15);
    \u0275\u0275template(4, ClubRequestListPage_ng_container_0_ion_list_18_ng_container_2_ng_container_4_ion_item_sliding_1_img_4_Template, 1, 0, "img", 16)(5, ClubRequestListPage_ng_container_0_ion_list_18_ng_container_2_ng_container_4_ion_item_sliding_1_img_5_Template, 1, 1, "img", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-label", 18);
    \u0275\u0275listener("click", function ClubRequestListPage_ng_container_0_ion_list_18_ng_container_2_ng_container_4_ion_item_sliding_1_Template_ion_label_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const member_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openMember(member_r4));
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ClubRequestListPage_ng_container_0_ion_list_18_ng_container_2_ng_container_4_ion_item_sliding_1_ion_badge_8_Template, 2, 1, "ion-badge", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !member_r4.profilePicture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r4.profilePicture);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", member_r4.firstName, " ", member_r4.lastName, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", member_r4.roles);
  }
}
function ClubRequestListPage_ng_container_0_ion_list_18_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClubRequestListPage_ng_container_0_ion_list_18_ng_container_2_ng_container_4_ion_item_sliding_1_Template, 9, 5, "ion-item-sliding", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const member_r4 = ctx.$implicit;
    const groupBy_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r4.groupBy == groupBy_r6);
  }
}
function ClubRequestListPage_ng_container_0_ion_list_18_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-item-divider", 13)(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, ClubRequestListPage_ng_container_0_ion_list_18_ng_container_2_ng_container_4_Template, 2, 1, "ng-container", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const groupBy_r6 = ctx.$implicit;
    const clubMemberList_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", groupBy_r6, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", clubMemberList_r7);
  }
}
function ClubRequestListPage_ng_container_0_ion_list_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 11)(1, "ion-item-group");
    \u0275\u0275template(2, ClubRequestListPage_ng_container_0_ion_list_18_ng_container_2_Template, 5, 2, "ng-container", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.groupArray);
  }
}
function ClubRequestListPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-header", 3)(2, "ion-toolbar")(3, "ion-title");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-buttons", 4)(7, "ion-button", 5);
    \u0275\u0275listener("click", function ClubRequestListPage_ng_container_0_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "ion-content", 6)(11, "ion-header", 7)(12, "ion-toolbar")(13, "ion-title", 8);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "ion-searchbar", 9);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275listener("ionChange", function ClubRequestListPage_ng_container_0_Template_ion_searchbar_ionChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, ClubRequestListPage_ng_container_0_ion_list_18_Template, 3, 2, "ion-list", 10);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 9, "common.requests"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, "common.close"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 13, "common.requests"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(17, 15, "common.searchfield"));
    \u0275\u0275property("debounce", 1e3)("value", ctx_r1.searchTerm.value);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(19, 17, ctx_r1.filteredClubMembers$));
  }
}
function ClubRequestListPage_ng_template_2_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-item-divider", 13)(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const groupBy_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", groupBy_r9, " ");
  }
}
function ClubRequestListPage_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 3)(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-buttons", 4)(6, "ion-button", 5);
    \u0275\u0275listener("click", function ClubRequestListPage_ng_template_2_Template_ion_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "ion-content", 6)(10, "ion-header", 7)(11, "ion-toolbar")(12, "ion-title", 8);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "ion-searchbar", 23);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("ionChange", function ClubRequestListPage_ng_template_2_Template_ion_searchbar_ionChange_15_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ion-list", 11)(18, "ion-item-group");
    \u0275\u0275template(19, ClubRequestListPage_ng_template_2_ng_container_19_Template, 4, 1, "ng-container", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 9, "common.members"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 11, "common.close"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 13, "common.members"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(16, 15, "common.searchfield"));
    \u0275\u0275property("debounce", 1e3);
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.groupArray);
  }
}
var _ClubRequestListPage = class _ClubRequestListPage {
  constructor(modalCtrl, navParams, alertCtrl, toastCtrl, userProfileService, fbService, authService, translate) {
    this.modalCtrl = modalCtrl;
    this.navParams = navParams;
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.userProfileService = userProfileService;
    this.fbService = fbService;
    this.authService = authService;
    this.translate = translate;
    this.allowEdit = false;
    this.groupArray = [];
    this.searchTerm = new BehaviorSubject("");
  }
  ngOnInit() {
    this.club = this.navParams.get("club");
    this.club$ = this.club$ = this.fbService.getClubRef(this.club.id);
    this.initializeClubMembers();
  }
  initializeClubMembers() {
    this.groupArray = [];
    this.clubMembers$ = this.fbService.getClubRequestRefs(this.club.id).pipe(
      // tap(() => console.log("Fetching club members")),
      switchMap((members) => {
        if (members.length === 0) {
          console.log("No club members found.");
          this.groupArray = [];
          return of([]);
        }
        const profiles$ = members.map((member) => this.userProfileService.getUserProfileById(member.id).pipe(map((profile) => __spreadProps(__spreadValues(__spreadValues({}, member), profile), {
          // Spread profile to overwrite and add profile attributes
          firstName: profile.firstName || "Unknown",
          lastName: profile.lastName || "Unknown",
          roles: member.roles || []
        })), catchError(() => of(__spreadProps(__spreadValues({}, member), {
          firstName: "Unknown",
          lastName: "Unknown",
          roles: member.roles || []
          // Ensure role or other attributes are included even in error
        })))));
        return combineLatest(profiles$).pipe(map((profiles) => profiles.filter((profile) => profile !== void 0).sort((a, b) => a.firstName.localeCompare(b.firstName)).map((profile) => {
          const groupByChar = profile.firstName.charAt(0).toUpperCase();
          if (!this.groupArray.includes(groupByChar)) {
            this.groupArray.push(groupByChar);
          }
          return __spreadProps(__spreadValues({}, profile), {
            groupBy: groupByChar
          });
        })));
      }),
      catchError((err) => {
        console.error("Error fetching Club members:", err);
        return of([]);
      })
    );
    this.filteredClubMembers$ = combineLatest([this.clubMembers$, this.searchTerm]).pipe(debounceTime(300), map(([members, term]) => {
      if (!term)
        return members;
      const filtered = members.filter((member) => member.firstName.toLowerCase().includes(term.toLowerCase()) || member.lastName.toLowerCase().includes(term.toLowerCase()) || member.roles.find((role) => role.toLowerCase().includes(term.toLowerCase())));
      return filtered;
    }), map((filtered) => {
      this.groupArray = [];
      filtered.forEach((member) => {
        const groupByChar = member.firstName.charAt(0).toUpperCase();
        if (!this.groupArray.includes(groupByChar)) {
          this.groupArray.push(groupByChar);
        }
      });
      return filtered;
    }), tap((filtered) => console.log("Filtered members:", filtered.length)), catchError((err) => {
      console.error("Error filtering members:", err);
      return of([]);
    }));
  }
  handleSearch(event) {
    const searchTerm = event.detail.value || "";
    console.log("Handling Search Event:", searchTerm);
    this.searchTerm.next(searchTerm.trim());
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
          data: member,
          isRequest: true,
          clubId: this.club.id
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
  toastActionSaved() {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: yield lastValueFrom(this.translate.get("common.success__saved")),
        duration: 1500,
        position: "top",
        color: "success"
      });
      yield toast.present();
    });
  }
  toastActionCanceled() {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: yield lastValueFrom(this.translate.get("common.action__canceled")),
        duration: 1500,
        position: "top",
        color: "danger"
      });
      yield toast.present();
    });
  }
  toastActionError(error) {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: error.message,
        duration: 1500,
        position: "top",
        color: "danger"
      });
      yield toast.present();
    });
  }
  close() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(null, "close");
    });
  }
  confirm() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(this.club, "confirm");
    });
  }
};
_ClubRequestListPage.\u0275fac = function ClubRequestListPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClubRequestListPage)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(NavParams), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(UserProfileService), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(TranslateService));
};
_ClubRequestListPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClubRequestListPage, selectors: [["app-club-request-list"]], inputs: { club: "club" }, standalone: false, decls: 4, vars: 3, consts: [["loading", ""], ["item", ""], [4, "ngIf"], [3, "translucent"], ["slot", "primary"], [3, "click"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], ["animated", "true", "search-icon", "search-circle", 3, "ionChange", "debounce", "value", "placeholder"], [3, "inset", 4, "ngIf"], [3, "inset"], [4, "ngFor", "ngForOf"], ["color", "light"], ["detail", "true"], ["slot", "start"], ["alt", "Silhouette of a person's head", "src", "https://ionicframework.com/docs/img/demos/avatar.svg", 4, "ngIf"], [3, "src", 4, "ngIf"], [1, "ion-text-wrap", 3, "click"], ["slot", "end", 4, "ngFor", "ngForOf"], ["alt", "Silhouette of a person's head", "src", "https://ionicframework.com/docs/img/demos/avatar.svg"], [3, "src"], ["slot", "end"], ["animated", "true", "search-icon", "search-circle", 3, "ionChange", "debounce", "placeholder"]], template: function ClubRequestListPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ClubRequestListPage_ng_container_0_Template, 20, 19, "ng-container", 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275template(2, ClubRequestListPage_ng_template_2_Template, 20, 17, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.club$));
  }
}, dependencies: [NgForOf, NgIf, IonAvatar, IonBadge, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonItemDivider, IonItemGroup, IonItemSliding, IonLabel, IonList, IonSearchbar, IonTitle, IonToolbar, TextValueAccessorDirective, AsyncPipe, TranslatePipe], encapsulation: 2 });
var ClubRequestListPage = _ClubRequestListPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClubRequestListPage, { className: "ClubRequestListPage", filePath: "src/app/pages/club-request-list/club-request-list.page.ts", lineNumber: 17 });
})();

// src/app/pages/helfer/helfer-punkte-club/helfer-punkte-club.page.ts
function HelferPunkteClubPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 4);
    \u0275\u0275listener("click", function HelferPunkteClubPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_1_Template_ion_button_click_0_listener() {
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
function HelferPunkteClubPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 4);
    \u0275\u0275listener("click", function HelferPunkteClubPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_2_Template_ion_button_click_0_listener() {
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
function HelferPunkteClubPage_ng_container_0_ng_container_3_ion_buttons_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-buttons", 32);
    \u0275\u0275template(1, HelferPunkteClubPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_1_Template, 3, 3, "ion-button", 33)(2, HelferPunkteClubPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_2_Template, 3, 3, "ion-button", 33);
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
function HelferPunkteClubPage_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HelferPunkteClubPage_ng_container_0_ng_container_3_ion_buttons_1_Template, 3, 2, "ion-buttons", 31);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r5 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isClubAdmin(clubAdminList_r5, ctx_r2.clubId));
  }
}
function HelferPunkteClubPage_ng_container_0_ion_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 34);
    \u0275\u0275listener("click", function HelferPunkteClubPage_ng_container_0_ion_button_21_Template_ion_button_click_0_listener() {
      const role_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setFilter(role_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r7, " ");
  }
}
function HelferPunkteClubPage_ng_container_0_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 35);
    \u0275\u0275listener("ionChange", function HelferPunkteClubPage_ng_container_0_ng_template_31_Template_ion_datetime_ionChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeDate($event, "helferReportingDateFrom"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const club_r9 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("firstDayOfWeek", 1)("value", club_r9.helferReportingDateFrom)("min", ctx_r2.minDate)("max", ctx_r2.maxDate);
  }
}
function HelferPunkteClubPage_ng_container_0_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 36);
    \u0275\u0275listener("ionChange", function HelferPunkteClubPage_ng_container_0_ng_template_38_Template_ion_datetime_ionChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeDate($event, "helferReportingDateTo"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const club_r9 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("firstDayOfWeek", 1)("value", club_r9.helferReportingDateTo)("min", ctx_r2.minDate)("max", ctx_r2.maxDate);
  }
}
function HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_item_1_ion_badge_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r11);
  }
}
function HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_item_1_ion_badge_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const memberPunkte_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(memberPunkte_r12.totalPoints);
  }
}
function HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_item_1_ion_badge_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const memberPunkte_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(memberPunkte_r12.totalPoints);
  }
}
function HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_item_1_ion_badge_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const memberPunkte_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(memberPunkte_r12.totalPoints);
  }
}
function HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_item_1_ion_badge_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const memberPunkte_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(memberPunkte_r12.totalPoints);
  }
}
function HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-label");
    \u0275\u0275text(2);
    \u0275\u0275template(3, HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_item_1_ion_badge_3_Template, 2, 1, "ion-badge", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_item_1_ion_badge_4_Template, 2, 1, "ion-badge", 40)(5, HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_item_1_ion_badge_5_Template, 2, 1, "ion-badge", 41)(6, HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_item_1_ion_badge_6_Template, 2, 1, "ion-badge", 41)(7, HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_item_1_ion_badge_7_Template, 2, 1, "ion-badge", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const memberPunkte_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", memberPunkte_r12.profile.firstName, " ", memberPunkte_r12.profile.lastName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", memberPunkte_r12.roles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", memberPunkte_r12.totalPoints >= 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", memberPunkte_r12.totalPoints == 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", memberPunkte_r12.totalPoints == 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", memberPunkte_r12.totalPoints == 0);
  }
}
function HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_list_2_ion_item_sliding_1_ng_container_2_ion_item_options_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-options", 51)(1, "ion-item-option", 52);
    \u0275\u0275listener("click", function HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_list_2_ion_item_sliding_1_ng_container_2_ion_item_options_1_Template_ion_item_option_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const helferPunkt_r15 = \u0275\u0275nextContext(2).$implicit;
      const item_r16 = \u0275\u0275reference(1);
      const memberPunkte_r12 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.changeHelferPunkt(item_r16, memberPunkte_r12, helferPunkt_r15));
    });
    \u0275\u0275element(2, "ion-icon", 53);
    \u0275\u0275elementEnd()();
  }
}
function HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_list_2_ion_item_sliding_1_ng_container_2_ion_item_options_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-options", 54)(1, "ion-item-option", 55);
    \u0275\u0275listener("click", function HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_list_2_ion_item_sliding_1_ng_container_2_ion_item_options_2_Template_ion_item_option_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const helferPunkt_r15 = \u0275\u0275nextContext(2).$implicit;
      const item_r16 = \u0275\u0275reference(1);
      const memberPunkte_r12 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.deleteHelferPunkt(item_r16, memberPunkte_r12, helferPunkt_r15));
    });
    \u0275\u0275element(2, "ion-icon", 56);
    \u0275\u0275elementEnd()();
  }
}
function HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_list_2_ion_item_sliding_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_list_2_ion_item_sliding_1_ng_container_2_ion_item_options_1_Template, 3, 0, "ion-item-options", 49)(2, HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_list_2_ion_item_sliding_1_ng_container_2_ion_item_options_2_Template, 3, 0, "ion-item-options", 50);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r18 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isClubAdmin(clubAdminList_r18, ctx_r2.clubId));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isClubAdmin(clubAdminList_r18, ctx_r2.clubId));
  }
}
function HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_list_2_ion_item_sliding_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 0);
    \u0275\u0275template(2, HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_list_2_ion_item_sliding_1_ng_container_2_Template, 3, 2, "ng-container", 1);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementStart(4, "ion-item", 47);
    \u0275\u0275listener("click", function HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_list_2_ion_item_sliding_1_Template_ion_item_click_4_listener() {
      const helferPunkt_r15 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.openHelferEvent(helferPunkt_r15));
    });
    \u0275\u0275elementStart(5, "ion-label")(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275element(9, "br");
    \u0275\u0275text(10);
    \u0275\u0275element(11, "br");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "ion-badge", 48);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const helferPunkt_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 7, ctx_r2.clubAdminList$));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Datum: ", \u0275\u0275pipeBind2(8, 9, helferPunkt_r15.eventDate.toDate(), "dd.MM.YYYY "), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", helferPunkt_r15.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", helferPunkt_r15.schichtName, " von ", helferPunkt_r15.schichtTimeFrom, " Uhr bis ", helferPunkt_r15.schichtTimeTo, " Uhr ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(helferPunkt_r15.points);
  }
}
function HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_list_2_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-label")(2, "h3")(3, "ion-badge");
    \u0275\u0275text(4, "geplant");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "br");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275element(8, "br");
    \u0275\u0275text(9);
    \u0275\u0275element(10, "br");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "ion-badge", 57);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const planned_r19 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" Datum: ", \u0275\u0275pipeBind2(7, 6, planned_r19.event.startDate, "dd.MM.YYYY "), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", planned_r19.event.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", planned_r19.schicht.name, " von ", planned_r19.schicht.timeFrom, " Uhr bis ", planned_r19.schicht.timeTo, " Uhr ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(planned_r19.schicht.points);
  }
}
function HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_list_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list");
    \u0275\u0275template(1, HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_list_2_ion_item_sliding_1_Template, 15, 12, "ion-item-sliding", 37)(2, HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_list_2_ion_item_2_Template, 14, 9, "ion-item", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const memberPunkte_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", memberPunkte_r12.helferPunkte);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", memberPunkte_r12.plannedHelfer);
  }
}
function HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_item_1_Template, 8, 7, "ion-item", 1)(2, HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_ion_list_2_Template, 3, 2, "ion-list", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const memberPunkte_r12 = ctx.$implicit;
    const groupBy_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", memberPunkte_r12.groupBy == groupBy_r20);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", memberPunkte_r12.groupBy == groupBy_r20);
  }
}
function HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-item-divider", 38)(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_ng_container_4_Template, 3, 2, "ng-container", 37);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const groupBy_r20 = ctx.$implicit;
    const helferPunkteList_r21 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", groupBy_r20, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", helferPunkteList_r21);
  }
}
function HelferPunkteClubPage_ng_container_0_ng_container_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-list", 11)(2, "ion-list-header");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-item-group");
    \u0275\u0275template(5, HelferPunkteClubPage_ng_container_0_ng_container_96_ng_container_5_Template, 5, 2, "ng-container", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const helferPunkteList_r21 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Mitglieder (", helferPunkteList_r21.length, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.groupArray);
  }
}
function HelferPunkteClubPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-header", 2)(2, "ion-toolbar");
    \u0275\u0275template(3, HelferPunkteClubPage_ng_container_0_ng_container_3_Template, 2, 1, "ng-container", 1);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementStart(5, "ion-title");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-buttons", 3)(9, "ion-button", 4);
    \u0275\u0275listener("click", function HelferPunkteClubPage_ng_container_0_Template_ion_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "ion-content", 5)(13, "ion-header", 6)(14, "ion-toolbar")(15, "ion-title", 7);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "ion-searchbar", 8);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275listener("ionChange", function HelferPunkteClubPage_ng_container_0_Template_ion_searchbar_ionChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 9);
    \u0275\u0275template(21, HelferPunkteClubPage_ng_container_0_ion_button_21_Template, 2, 1, "ion-button", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ion-list", 11)(23, "ion-list-header");
    \u0275\u0275text(24, " Auswertung ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ion-item");
    \u0275\u0275element(26, "ion-icon", 12);
    \u0275\u0275elementStart(27, "ion-label");
    \u0275\u0275text(28, "Datum von");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "ion-datetime-button", 13);
    \u0275\u0275elementStart(30, "ion-modal", 14);
    \u0275\u0275template(31, HelferPunkteClubPage_ng_container_0_ng_template_31_Template, 1, 4, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "ion-item");
    \u0275\u0275element(33, "ion-icon", 12);
    \u0275\u0275elementStart(34, "ion-label");
    \u0275\u0275text(35, "Datum bis");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "ion-datetime-button", 15);
    \u0275\u0275elementStart(37, "ion-modal", 14);
    \u0275\u0275template(38, HelferPunkteClubPage_ng_container_0_ng_template_38_Template, 1, 4, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "ion-item")(40, "ion-select", 16);
    \u0275\u0275listener("ionChange", function HelferPunkteClubPage_ng_container_0_Template_ion_select_ionChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onHelferPunkteMinChange($event));
    });
    \u0275\u0275elementStart(41, "ion-select-option", 17);
    \u0275\u0275text(42, "0 Punkte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "ion-select-option", 18);
    \u0275\u0275text(44, "1 Punkt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "ion-select-option", 19);
    \u0275\u0275text(46, "2 Punkte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "ion-select-option", 20);
    \u0275\u0275text(48, "3 Punkte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "ion-select-option", 21);
    \u0275\u0275text(50, "4 Punkte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "ion-select-option", 22);
    \u0275\u0275text(52, "5 Punkte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "ion-select-option", 23);
    \u0275\u0275text(54, "6 Punkte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "ion-select-option", 24);
    \u0275\u0275text(56, "7 Punkt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "ion-select-option", 25);
    \u0275\u0275text(58, "8 Punkte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "ion-select-option", 26);
    \u0275\u0275text(60, "9 Punkte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "ion-select-option", 27);
    \u0275\u0275text(62, "10 Punkte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "ion-select-option", 28);
    \u0275\u0275text(64, "10+ Punkte");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "ion-item")(66, "ion-select", 29);
    \u0275\u0275listener("ionChange", function HelferPunkteClubPage_ng_container_0_Template_ion_select_ionChange_66_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onHelferPunkteMaxChange($event));
    });
    \u0275\u0275elementStart(67, "ion-select-option", 17);
    \u0275\u0275text(68, "0 Punkte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "ion-select-option", 18);
    \u0275\u0275text(70, "1 Punkt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "ion-select-option", 19);
    \u0275\u0275text(72, "2 Punkte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "ion-select-option", 20);
    \u0275\u0275text(74, "3 Punkte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "ion-select-option", 21);
    \u0275\u0275text(76, "4 Punkte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "ion-select-option", 22);
    \u0275\u0275text(78, "5 Punkte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "ion-select-option", 23);
    \u0275\u0275text(80, "6 Punkte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "ion-select-option", 24);
    \u0275\u0275text(82, "7 Punkt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "ion-select-option", 25);
    \u0275\u0275text(84, "8 Punkte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "ion-select-option", 26);
    \u0275\u0275text(86, "9 Punkte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "ion-select-option", 27);
    \u0275\u0275text(88, "10 Punkte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "ion-select-option", 28);
    \u0275\u0275text(90, "10+ Punkte");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(91, "ion-item")(92, "ion-toggle", 30);
    \u0275\u0275listener("ionChange", function HelferPunkteClubPage_ng_container_0_Template_ion_toggle_ionChange_92_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onHelferPunktePlanned($event));
    });
    \u0275\u0275text(93, "Geplante Eins\xE4tze");
    \u0275\u0275elementEnd();
    \u0275\u0275element(94, "br")(95, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(96, HelferPunkteClubPage_ng_container_0_ng_container_96_Template, 6, 2, "ng-container", 1);
    \u0275\u0275pipe(97, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const club_r9 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(4, 15, ctx_r2.clubAdminList$));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 17, "common.helper_points"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 19, "common.close"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 21, "common.helper_points"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(19, 23, "common.searchfield"));
    \u0275\u0275property("debounce", 1e3)("value", ctx_r2.searchTerm.value);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", club_r9["roles"]);
    \u0275\u0275advance(9);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(55);
    \u0275\u0275property("checked", ctx_r2.plannedToggle.value)("enableOnOffLabels", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(97, 25, ctx_r2.filteredHelferPunkteList$));
  }
}
var _HelferPunkteClubPage = class _HelferPunkteClubPage {
  constructor(modalCtrl, translate, navParams, alertController, helferService, eventService, userProfileService, toastController, fbService) {
    this.modalCtrl = modalCtrl;
    this.translate = translate;
    this.navParams = navParams;
    this.alertController = alertController;
    this.helferService = helferService;
    this.eventService = eventService;
    this.userProfileService = userProfileService;
    this.toastController = toastController;
    this.fbService = fbService;
    this.allowEdit = false;
    this.groupArray = [];
    this.plannedToggle = new BehaviorSubject(false);
    this.searchTerm = new BehaviorSubject("");
    this.pointsRange = new BehaviorSubject({ lower: 0, upper: 10 });
    this.minDate = "";
    this.maxDate = "";
  }
  ngOnInit() {
    let dateFrom = /* @__PURE__ */ new Date();
    dateFrom.setFullYear((/* @__PURE__ */ new Date()).getFullYear() - 2);
    this.minDate = dateFrom.toISOString();
    let dateTo = /* @__PURE__ */ new Date();
    dateTo.setFullYear((/* @__PURE__ */ new Date()).getFullYear() + 2);
    this.maxDate = dateTo.toISOString();
    this.club$ = this.fbService.getClubRef(this.clubId);
    this.initializeClubMembersWithHelferPunkte(this.clubId);
    this.clubAdminList$ = this.fbService.getClubAdminList();
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.groupArray.push(currentYear);
    this.groupArray.push(currentYear - 1);
    this.groupArray.push(currentYear - 2);
    this.groupArray.push(currentYear - 3);
  }
  handleSearch(event) {
    const searchTerm = event.detail.value || "";
    console.log("Handling Search Event:", searchTerm);
    this.searchTerm.next(searchTerm.trim());
  }
  processShift(clubId, eventId, shift) {
    console.log(`Loading attendees for shift ${shift.id} of event ${eventId}`);
    return this.eventService.getClubHelferEventSchichtAttendeesRef(clubId, eventId, shift.id).pipe(
      tap((attendees) => {
        console.log(`Raw attendees for shift ${shift.id}:`, attendees);
        const confirmed = attendees.filter((a) => a.status === true);
        console.log(`Confirmed attendees for shift ${shift.id}:`, confirmed);
      }),
      map((attendees) => ({
        eventId,
        shiftId: shift.id,
        shift,
        event: this.currentEvent,
        // wird später gesetzt
        attendees: attendees.filter((a) => a.status === true)
      })),
      // Fehlerbehandlung für einzelne Shifts
      catchError((error) => {
        console.error(`Error loading attendees for shift ${shift.id}:`, error);
        return of({
          eventId,
          shiftId: shift.id,
          shift,
          event: this.currentEvent,
          attendees: []
        });
      })
    );
  }
  initializeClubMembersWithHelferPunkte(clubId) {
    this.groupArray = [];
    this.helferPunkteList$ = this.fbService.getClubRef(clubId).pipe(switchMap((club) => {
      if (!club)
        return of(null);
      return combineLatest([
        this.fbService.getClubMemberRefs(clubId),
        this.plannedToggle.pipe(switchMap((showPlanned) => {
          if (!showPlanned) {
            console.log("Planned toggle is false, returning empty data");
            return of({ events: [], shifts: [] });
          }
          const dateFrom = Timestamp.fromDate(new Date(club.helferReportingDateFrom));
          const dateTo = Timestamp.fromDate(new Date(club.helferReportingDateTo));
          return this.eventService.getClubHelferEventRefsByDate(clubId, dateFrom, dateTo).pipe(switchMap((events) => {
            if (!events.length)
              return of({ events, shifts: [] });
            const processedEvents$ = events.map((event) => {
              this.currentEvent = event;
              return this.eventService.getClubHelferEventSchichtenRef(clubId, event.id).pipe(switchMap((shifts) => {
                if (!shifts.length)
                  return of([]);
                const shiftPromises = shifts.map((shift) => this.processShift(clubId, event.id, shift));
                return forkJoin(shiftPromises).pipe(catchError((error) => {
                  console.error(`Error processing shifts for event ${event.id}:`, error);
                  return of([]);
                }));
              }));
            });
            return forkJoin(processedEvents$).pipe(map((results) => ({
              events,
              shifts: results.flat()
            })), tap((result) => {
              console.log("Final processed data:", result);
            }));
          }));
        }))
      ]).pipe(
        // Rest des Codes bleibt gleich...
        switchMap(([members, plannedEvents]) => {
          if (!members.length) {
            this.groupArray = [];
            return of([]);
          }
          const memberDetailsWithHelferPunkte$ = members.map((member) => this.userProfileService.getUserProfileById(member.id).pipe(switchMap((profile) => {
            if (!profile) {
              return of({
                profile: __spreadProps(__spreadValues({}, member), { firstName: "Unknown", lastName: "Unknown", roles: member.roles || [] }),
                helferPunkte: [],
                plannedHelfer: [],
                totalPoints: 0
              });
            }
            return this.helferService.getUserHelferPunkteRefsWithFilter(profile.id, clubId, Timestamp.fromDate(new Date(club.helferReportingDateFrom)), Timestamp.fromDate(new Date(club.helferReportingDateTo))).pipe(map((helferPunkte) => {
              const plannedHelfer = (plannedEvents.shifts || []).filter((shift) => {
                console.log(`Checking shift ${shift.shiftId} attendees for ${profile.id}:`, shift.attendees);
                return shift.attendees.some((attendee) => attendee.id === profile.id);
              }).map((shift) => ({
                event: shift.event,
                schicht: shift.shift
              }));
              console.log(`Planned helpers for ${profile.firstName}:`, plannedHelfer);
              return {
                profile,
                helferPunkte,
                plannedHelfer,
                totalPoints: helferPunkte.reduce((sum, item) => sum + Number(item.points), 0) + plannedHelfer.reduce((sum, item) => sum + Number(item.schicht.points), 0),
                groupBy: profile.firstName.charAt(0).toUpperCase(),
                roles: member.roles || []
              };
            }));
          })));
          return combineLatest(memberDetailsWithHelferPunkte$);
        }),
        map((memberDetails) => {
          this.groupArray = [...new Set(memberDetails.map((member) => member.profile.firstName.charAt(0).toUpperCase()))].sort();
          return memberDetails.sort((a, b) => a.profile.firstName.localeCompare(b.profile.firstName));
        })
      );
    }));
    this.filteredHelferPunkteList$ = combineLatest([this.helferPunkteList$, this.searchTerm, this.pointsRange]).pipe(debounceTime(300), map(([members, term, range]) => {
      return members.filter((member) => {
        const matchesSearch = term ? member.profile.firstName.toLowerCase().includes(term.toLowerCase()) || member.profile.lastName.toLowerCase().includes(term.toLowerCase()) || member.roles.find((role) => role.toLowerCase().includes(term.toLowerCase())) : true;
        const withinRange = member.totalPoints >= range.lower && member.totalPoints <= range.upper;
        return matchesSearch && withinRange;
      });
    }), map((filtered) => {
      this.groupArray = [];
      filtered.forEach((member) => {
        const groupByChar = member.profile.firstName.charAt(0).toUpperCase();
        if (!this.groupArray.includes(groupByChar)) {
          this.groupArray.push(groupByChar);
        }
      });
      return filtered;
    }), tap((filtered) => console.log("Filtered members:", filtered.length)), catchError((err) => {
      console.error("Error filtering members:", err);
      return of([]);
    }));
  }
  changeHelferPunkt(slidingItem, member, helferPunkt) {
    return __async(this, null, function* () {
      yield slidingItem.closeOpened();
      const alert = yield this.alertController.create({
        message: "asdasd",
        header: "Helferpunkt \xE4ndern",
        inputs: [{
          id: "points",
          value: helferPunkt.points
        }],
        buttons: [{
          "id": "ok",
          "text": "Speichern",
          handler: (data) => {
            console.log(data.points);
          }
        }]
      });
      yield alert.present();
      console.log(member, helferPunkt);
    });
  }
  deleteHelferPunkt(slidingItem, member, helferPunkt) {
    return __async(this, null, function* () {
      yield slidingItem.closeOpened();
      const alert = yield this.alertController.create({
        header: "Best\xE4tigung",
        message: "Sind Sie sicher, dass Sie diesen HelferPunkt l\xF6schen m\xF6chten?",
        buttons: [
          {
            text: "Abbrechen",
            role: "cancel",
            handler: () => {
              console.log("L\xF6schvorgang abgebrochen");
            }
          },
          {
            text: "L\xF6schen",
            handler: () => __async(this, null, function* () {
              yield this.helferService.deleteHelferPunkt(this.clubId, helferPunkt.id);
              this.presentToast();
              console.log(member, helferPunkt);
            })
          }
        ]
      });
      yield alert.present();
    });
  }
  getPlannedHelfer(memberId, clubId, dateFrom, dateTo) {
    return this.eventService.getClubHelferEventRefsByDate(clubId, dateFrom, dateTo).pipe(switchMap((events) => {
      const schichtenObservables = events.map((event) => this.eventService.getClubHelferEventSchichtenRef(clubId, event.id).pipe(
        // Step 3: For each schicht, fetch the attendees and filter based on the memberId and status
        switchMap((schichten) => {
          const attendeesObservables = schichten.map((schicht) => this.eventService.getClubHelferEventSchichtAttendeesRef(clubId, event.id, schicht.id).pipe(map((attendees) => {
            const isConfirmed = attendees.some((attendee) => attendee.id === memberId && attendee.status === true);
            return isConfirmed ? { event, schicht } : null;
          }), catchError((err) => {
            console.error("Error fetching schicht attendees:", err);
            return of(null);
          })));
          return combineLatest(attendeesObservables).pipe(
            map((results) => results.filter((result) => result !== null))
            // Filter out null values
          );
        })
      ));
      return combineLatest(schichtenObservables).pipe(
        map((results) => results.flat()),
        // Flatten the array of results
        catchError((err) => {
          console.error("Error fetching schichten:", err);
          return of([]);
        })
      );
    }), catchError((err) => {
      console.error("Error fetching events:", err);
      return of([]);
    }));
  }
  /*onHelferPunkteChange(event: CustomEvent) {
  
      const range = (event as RangeCustomEvent).detail.value as any;
      console.log('Range slider value:', range);
      this.pointsRange.next({ lower: range.lower, upper: range.upper });
  
  
  
    pinFormatter(value: number) {
      console.log(value);
      return `${value} Punkte`;
    }
  
    }*/
  onHelferPunkteMinChange(event) {
    this.pointsRange.next({ lower: event.detail.value, upper: this.pointsRange.value.upper });
  }
  onHelferPunkteMaxChange(event) {
    this.pointsRange.next({ lower: this.pointsRange.value.lower, upper: event.detail.value });
  }
  onHelferPunktePlanned(event) {
    console.log("Toggle changed:", event.detail["checked"]);
    this.plannedToggle.next(event.detail["checked"]);
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
  /*
    getClubMembersWithHelferPunkte(clubId: string) {
      return this.fbService.getClubRef(clubId).pipe(
        tap(club => console.log("Fetched club:", club)),
        switchMap((club) => {
          if (!club) {
            console.log("No club found for ID:", clubId);
            return of(null);
          }
          return this.fbService.getClubMemberRefs(clubId).pipe(
            tap(members => console.log("Fetched members:", members)),
            switchMap((members) => {
              if (!members.length) {
                console.log("No members found in club:", clubId);
                return of([]);
              }
              const memberDetailsWithHelferPunkte$ = members.map((member) =>
                this.userProfileService.getUserProfileById(member.id).pipe(
                  switchMap((profile) => {
                    if (!profile) {
                      return of({ profile: { ...member, firstName: "Unknown", lastName: "Unknown" }, helferPunkte: [], totalPoints: 0 });
                    }
                    return this.helferService.getUserHelferPunkteRefs(profile.id, clubId).pipe(
                      map((helferPunkte) => ({
                        profile,
                        helferPunkte,
                        totalPoints: helferPunkte.reduce((sum, item) => sum + Number(item.points), 0)
                      })),
                      catchError((err) => {
                        return of({ profile, helferPunkte: [], totalPoints: 0 });
                      })
                    );
                  }),
                  catchError((err) => {
                    return of({ profile: { ...member, firstName: "Unknown", lastName: "Unknown" }, helferPunkte: [], totalPoints: 0 });
                  })
                )
              );
              return combineLatest(memberDetailsWithHelferPunkte$);
            }),
            map(memberDetails => {
              // Integrate search filter here
              return memberDetails.sort((a, b) => a.profile.firstName.localeCompare(b.profile.firstName));
            }),
            catchError((err) => {
              console.error("Error fetching members for club:", clubId, err);
              return of([]);
            })
          );
        }),
        catchError((err) => {
          console.error("Error fetching club with ID:", clubId, err);
          return of([]);
        })
      );
    }*/
  isClubAdmin(clubAdminList, clubId) {
    return clubAdminList && clubAdminList.some((club) => club.id === clubId);
  }
  setFilter(role) {
    this.handleSearch({ detail: { value: role } });
  }
  edit() {
    if (this.allowEdit) {
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }
  changeDate(event, fieldname) {
    return __async(this, null, function* () {
      yield this.fbService.setClubHelferReportingDate(this.clubId, fieldname, event.detail.value);
    });
  }
  openHelferEvent(helferPunkt) {
    return __async(this, null, function* () {
      const modal = yield this.modalCtrl.create({
        component: HelferDetailPage,
        presentingElement: yield this.modalCtrl.getTop(),
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          data: __spreadProps(__spreadValues({}, helferPunkt), {
            clubId: helferPunkt.clubRef.id,
            id: helferPunkt.eventRef.id
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
_HelferPunkteClubPage.\u0275fac = function HelferPunkteClubPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HelferPunkteClubPage)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(NavParams), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(HelferService), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(UserProfileService), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(FirebaseService));
};
_HelferPunkteClubPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HelferPunkteClubPage, selectors: [["app-helfer-punkte-club"]], inputs: { clubId: "clubId" }, standalone: false, decls: 2, vars: 3, consts: [["item", ""], [4, "ngIf"], [3, "translucent"], ["slot", "primary"], [3, "click"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], ["animated", "true", "search-icon", "search-circle", 3, "ionChange", "debounce", "value", "placeholder"], [1, "ion-padding"], ["shape", "round", "size", "small", 3, "click", 4, "ngFor", "ngForOf"], ["inset", "true"], ["name", "calendar", "slot", "start"], ["datetime", "dateFrom"], [3, "keepContentsMounted"], ["datetime", "dateTo"], ["value", "0", "label", "Min. Punkte", "aria-label", "Min Punkte", "justify", "space-between", "placeholder", "Min Punkte", 3, "ionChange"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "99"], ["value", "99", "label", "Max. Punkte", "aria-label", "Max Punkte", "justify", "space-between", "placeholder", "Max Punkte", 3, "ionChange"], ["justify", "space-between", "labelPlacement", "start", 3, "ionChange", "checked", "enableOnOffLabels"], ["slot", "secondary", 4, "ngIf"], ["slot", "secondary"], [3, "click", 4, "ngIf"], ["shape", "round", "size", "small", 3, "click"], ["id", "dateFrom", "presentation", "date", 3, "ionChange", "firstDayOfWeek", "value", "min", "max"], ["id", "dateTo", "presentation", "date", 3, "ionChange", "firstDayOfWeek", "value", "min", "max"], [4, "ngFor", "ngForOf"], ["color", "light"], ["color", "primary", 4, "ngFor", "ngForOf"], ["color", "success", "slot", "end", 4, "ngIf"], ["color", "warning", "slot", "end", 4, "ngIf"], ["color", "danger", "slot", "end", 4, "ngIf"], ["color", "primary"], ["color", "success", "slot", "end"], ["color", "warning", "slot", "end"], ["color", "danger", "slot", "end"], ["detail", "true", 3, "click"], ["color", "primary", "slot", "end"], ["side", "start", 4, "ngIf"], ["side", "end", 4, "ngIf"], ["side", "start"], ["color", "primary", 3, "click"], ["slot", "icon-only", "name", "help-buoy-outline"], ["side", "end"], ["color", "danger", 3, "click"], ["slot", "icon-only", "name", "trash"], ["color", "medium", "slot", "end"]], template: function HelferPunkteClubPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HelferPunkteClubPage_ng_container_0_Template, 98, 27, "ng-container", 1);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.club$));
  }
}, dependencies: [NgForOf, NgIf, IonBadge, IonButton, IonButtons, IonContent, IonDatetime, IonDatetimeButton, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToggle, IonToolbar, IonModal, BooleanValueAccessorDirective, SelectValueAccessorDirective, TextValueAccessorDirective, AsyncPipe, DatePipe, TranslatePipe], encapsulation: 2 });
var HelferPunkteClubPage = _HelferPunkteClubPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HelferPunkteClubPage, { className: "HelferPunkteClubPage", filePath: "src/app/pages/helfer/helfer-punkte-club/helfer-punkte-club.page.ts", lineNumber: 31 });
})();

// src/app/pages/club/club.page.ts
function ClubPage_ng_container_0_ion_item_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 15);
    \u0275\u0275listener("click", function ClubPage_ng_container_0_ion_item_34_Template_ion_item_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRequestList());
    });
    \u0275\u0275element(1, "ion-icon", 23);
    \u0275\u0275elementStart(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-note", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const club_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "common.requests"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(club_r4["clubRequests"].length);
  }
}
function ClubPage_ng_container_0_ng_container_56_ng_container_1_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 15);
    \u0275\u0275listener("click", function ClubPage_ng_container_0_ng_container_56_ng_container_1_ion_item_1_Template_ion_item_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openHelferPunkteClub());
    });
    \u0275\u0275element(1, "ion-icon", 24);
    \u0275\u0275elementStart(2, "ion-label");
    \u0275\u0275text(3, " Helferpunkte ");
    \u0275\u0275elementEnd()();
  }
}
function ClubPage_ng_container_0_ng_container_56_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClubPage_ng_container_0_ng_container_56_ng_container_1_ion_item_1_Template, 4, 0, "ion-item", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r6 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isClubAdmin(clubAdminList_r6, ctx_r1.club.id));
  }
}
function ClubPage_ng_container_0_ng_container_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClubPage_ng_container_0_ng_container_56_ng_container_1_Template, 2, 1, "ng-container", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r1.clubAdminList$));
  }
}
function ClubPage_ng_container_0_ng_container_58_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 15);
    \u0275\u0275listener("click", function ClubPage_ng_container_0_ng_container_58_ion_item_1_Template_ion_item_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openSubscription());
    });
    \u0275\u0275element(1, "ion-icon", 25);
    \u0275\u0275elementStart(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-badge", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const club_r4 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "common.subscription"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(club_r4.subscriptionType);
  }
}
function ClubPage_ng_container_0_ng_container_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClubPage_ng_container_0_ng_container_58_ion_item_1_Template, 7, 4, "ion-item", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r8 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isClubAdmin(clubAdminList_r8, ctx_r1.club.id));
  }
}
function ClubPage_ng_container_0_ng_container_60_ng_container_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-item");
    \u0275\u0275element(2, "ion-icon", 24);
    \u0275\u0275elementStart(3, "ion-input", 29);
    \u0275\u0275listener("ionInput", function ClubPage_ng_container_0_ng_container_60_ng_container_1_ng_container_8_Template_ion_input_ionInput_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onInput($event, "helferThreshold"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const club_r4 = \u0275\u0275nextContext(3).ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275property("value", club_r4.helferThreshold);
  }
}
function ClubPage_ng_container_0_ng_container_60_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-list", 11)(2, "ion-list-header")(3, "ion-label");
    \u0275\u0275text(4, " Grenzwerte f\xFCr Abmeldungen ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-item");
    \u0275\u0275element(6, "ion-icon", 26);
    \u0275\u0275elementStart(7, "ion-input", 27);
    \u0275\u0275listener("ionInput", function ClubPage_ng_container_0_ng_container_60_ng_container_1_Template_ion_input_ionInput_7_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onInput($event, "eventThreshold"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ClubPage_ng_container_0_ng_container_60_ng_container_1_ng_container_8_Template, 4, 1, "ng-container", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ion-note", 28);
    \u0275\u0275text(10, " Anzahl Stunden vor Beginn des Spiels, Trainings oder Veranstaltung");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const club_r4 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", club_r4.eventThreshold);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", club_r4.hasFeatureHelferEvent);
  }
}
function ClubPage_ng_container_0_ng_container_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClubPage_ng_container_0_ng_container_60_ng_container_1_Template, 11, 3, "ng-container", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r11 = ctx.ngIf;
    const club_r4 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isClubAdmin(clubAdminList_r11, club_r4.id));
  }
}
function ClubPage_ng_container_0_ion_item_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275element(1, "ion-icon", 30);
    \u0275\u0275elementStart(2, "ion-label", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-button", 32);
    \u0275\u0275listener("click", function ClubPage_ng_container_0_ion_item_72_Template_ion_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const club_r4 = \u0275\u0275nextContext().ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openUrl(club_r4.wordpress));
    });
    \u0275\u0275element(5, "ion-icon", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const club_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", club_r4.wordpress, " ");
  }
}
function ClubPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-header", 2)(2, "ion-toolbar")(3, "ion-title");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-buttons", 3)(7, "ion-button", 4);
    \u0275\u0275listener("click", function ClubPage_ng_container_0_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "ion-content", 5)(11, "ion-header", 6)(12, "ion-toolbar")(13, "ion-title", 7);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "ion-list", 8)(17, "ion-item")(18, "ion-thumbnail", 9);
    \u0275\u0275element(19, "img", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ion-label");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "ion-list", 11)(23, "ion-list-header")(24, "ion-label");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "ion-item");
    \u0275\u0275element(28, "ion-icon", 12);
    \u0275\u0275elementStart(29, "ion-label");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ion-note", 13);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, ClubPage_ng_container_0_ion_item_34_Template, 7, 4, "ion-item", 14);
    \u0275\u0275elementStart(35, "ion-item", 15);
    \u0275\u0275listener("click", function ClubPage_ng_container_0_Template_ion_item_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openMemberList());
    });
    \u0275\u0275element(36, "ion-icon", 16);
    \u0275\u0275elementStart(37, "ion-label");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "ion-note", 13);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "ion-item", 15);
    \u0275\u0275listener("click", function ClubPage_ng_container_0_Template_ion_item_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAdminList());
    });
    \u0275\u0275element(43, "ion-icon", 17);
    \u0275\u0275elementStart(44, "ion-label");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "ion-note", 13);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "ion-item", 15);
    \u0275\u0275listener("click", function ClubPage_ng_container_0_Template_ion_item_click_49_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTeamList());
    });
    \u0275\u0275element(50, "ion-icon", 18);
    \u0275\u0275elementStart(51, "ion-label");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "ion-note", 13);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(56, ClubPage_ng_container_0_ng_container_56_Template, 3, 3, "ng-container", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "ion-list", 8);
    \u0275\u0275template(58, ClubPage_ng_container_0_ng_container_58_Template, 2, 1, "ng-container", 1);
    \u0275\u0275pipe(59, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(60, ClubPage_ng_container_0_ng_container_60_Template, 2, 1, "ng-container", 1);
    \u0275\u0275pipe(61, "async");
    \u0275\u0275elementStart(62, "ion-list", 11)(63, "ion-list-header")(64, "ion-label");
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "ion-item");
    \u0275\u0275element(68, "ion-icon", 19);
    \u0275\u0275elementStart(69, "ion-input", 20);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275listener("ionChange", function ClubPage_ng_container_0_Template_ion_input_ionChange_69_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeEmail($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(72, ClubPage_ng_container_0_ion_item_72_Template, 6, 1, "ion-item", 1);
    \u0275\u0275elementStart(73, "ion-item");
    \u0275\u0275element(74, "ion-icon", 21);
    \u0275\u0275elementStart(75, "ion-label");
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "ion-item");
    \u0275\u0275element(78, "ion-icon", 22);
    \u0275\u0275elementStart(79, "ion-note");
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const club_r4 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 32, "club.details"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 34, "common.close"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 36, "club.details"));
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("alt", club_r4.name);
    \u0275\u0275propertyInterpolate("src", club_r4.logo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(club_r4.name);
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 38, "common.manage_members"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 40, "common.average__age"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", club_r4.averageAge, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", club_r4["clubRequests"].length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 42, "common.members"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(club_r4["clubMembers"].length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 44, "common.admins"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(club_r4["clubAdmins"].length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 46, "common.teams"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(club_r4["clubTeams"].length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", club_r4.hasFeatureHelferEvent);
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(59, 48, ctx_r1.clubAdminList$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(61, 50, ctx_r1.clubAdminList$));
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(66, 52, "common.details"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(70, 54, "profile.email"))("value", club_r4.email);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(71, 56, "common.email"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", club_r4.wordpress);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", club_r4.type, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(81, 58, club_r4.updated, "dd.MM.YYYY HH:mm"), " Uhr");
  }
}
function ClubPage_ng_template_2_Template(rf, ctx) {
}
var _ClubPage = class _ClubPage {
  constructor(modalCtrl, navParams, alertCtrl, toastCtrl, userProfileService, fbService, authService, cdr, translate) {
    this.modalCtrl = modalCtrl;
    this.navParams = navParams;
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.userProfileService = userProfileService;
    this.fbService = fbService;
    this.authService = authService;
    this.cdr = cdr;
    this.translate = translate;
    this.allowEdit = false;
  }
  ngOnInit() {
    this.club = this.navParams.get("data");
    this.club$ = this.getClub(this.club.id);
    this.clubAdminList$ = this.fbService.getClubAdminList();
  }
  ngOnDestroy() {
  }
  edit() {
    if (this.allowEdit) {
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }
  isClubAdmin(clubAdminList, clubId) {
    return clubAdminList && clubAdminList.some((club) => club.id === clubId);
  }
  openUrl(url) {
    return __async(this, null, function* () {
      Browser.open({
        url
      });
    });
  }
  getClub(clubId) {
    const calculateAge = (dateOfBirth) => {
      const birthday = new Date(dateOfBirth.seconds * 1e3);
      const ageDifMs = Date.now() - birthday.getTime();
      const ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    return this.authService.getUser$().pipe(take(1), tap((user) => {
      this.user = user;
      if (!user)
        throw new Error("User not found");
    }), switchMap(() => this.fbService.getClubRef(clubId)), switchMap((club) => {
      if (!club)
        return of(null);
      return combineLatest({
        clubMembers: this.fbService.getClubMemberRefs(clubId),
        clubAdmins: this.fbService.getClubAdminRefs(clubId),
        clubRequests: this.fbService.getClubRequestRefs(clubId),
        clubTeams: this.fbService.getClubTeamRefs(clubId)
      }).pipe(switchMap(({ clubMembers, clubAdmins, clubRequests, clubTeams }) => {
        const memberProfiles$ = clubMembers.map((member) => this.userProfileService.getUserProfileById(member.id).pipe(take(1), catchError(() => of(__spreadProps(__spreadValues({}, member), { firstName: "Unknown", lastName: "Unknown" })))));
        const adminProfiles$ = clubAdmins.map((admin) => this.userProfileService.getUserProfileById(admin.id).pipe(take(1), catchError(() => of(__spreadProps(__spreadValues({}, admin), { firstName: "Unknown", lastName: "Unknown" })))));
        const clubRequests$ = clubRequests.map((request) => this.userProfileService.getUserProfileById(request.id).pipe(take(1), catchError(() => of(__spreadProps(__spreadValues({}, request), { firstName: "Unknown", lastName: "Unknown" })))));
        return forkJoin({
          clubMembers: forkJoin(memberProfiles$).pipe(startWith([])),
          clubAdmins: forkJoin(adminProfiles$).pipe(startWith([])),
          clubRequests: forkJoin(clubRequests$).pipe(startWith([])),
          clubTeams: of(clubTeams)
        }).pipe(map(({ clubMembers: clubMembers2, clubAdmins: clubAdmins2, clubRequests: clubRequests2, clubTeams: clubTeams2 }) => ({
          clubMembers: clubMembers2.filter((member) => member !== void 0),
          // Filter out undefined
          clubAdmins: clubAdmins2.filter((admin) => admin !== void 0),
          // Filter out undefined
          clubRequests: clubRequests2.filter((request) => request !== void 0),
          // Filter out undefined*/
          clubTeams: clubTeams2
        })));
      }), map(({ clubMembers, clubAdmins, clubRequests, clubTeams }) => {
        const ages = clubMembers.map((member) => member.hasOwnProperty("dateOfBirth") ? calculateAge(member.dateOfBirth) : 0).filter((age) => age > 0);
        const averageAge = ages.length > 0 ? ages.reduce((a, b) => a + b, 0) / ages.length : 0;
        return __spreadProps(__spreadValues({}, club), {
          clubTeams,
          updated: Timestamp.fromMillis(club.updated.seconds * 1e3).toDate().toISOString(),
          averageAge: averageAge.toFixed(1),
          // Keep two decimal places
          clubMembers,
          clubAdmins,
          clubRequests
        });
      }));
    }), catchError((err) => {
      this.toastActionError(err);
      console.error("Error in getClubWithMembersAndAdmins:", err);
      return of(null);
    }));
  }
  onInput(ev, fieldname) {
    console.log(ev.detail.value);
    this.fbService.setClubThreshold(this.club.id, fieldname, ev.detail.value);
  }
  openRequestList() {
    return __async(this, null, function* () {
      console.log("open Club Request List");
      const modal = yield this.modalCtrl.create({
        component: ClubRequestListPage,
        presentingElement: yield this.modalCtrl.getTop(),
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          club: this.club
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
  openMemberList() {
    return __async(this, null, function* () {
      console.log("open Club Member List");
      const modal = yield this.modalCtrl.create({
        component: ClubMemberListPage,
        presentingElement: yield this.modalCtrl.getTop(),
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          club: this.club
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
  openAdminList() {
    return __async(this, null, function* () {
      console.log("open Club Admin");
      const modal = yield this.modalCtrl.create({
        component: ClubAdminListPage,
        presentingElement: yield this.modalCtrl.getTop(),
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          club: this.club
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
  /*
    async openRequestMember(member: Profile) {
      console.log("open Request Member");
      const modal = await this.modalCtrl.create({
        component: MemberPage,
        presentingElement: await this.modalCtrl.getTop(),
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          data: member,
          isRequest: true,
          clubId: this.club.id
        },
      });
      modal.present();
  
      const { data, role } = await modal.onWillDismiss();
  
      if (role === "confirm") {
      }
    }*/
  openSubscription() {
    return __async(this, null, function* () {
      console.log("open openSubscription CLUB");
      const modal = yield this.modalCtrl.create({
        component: ClubSubscriptionPage,
        presentingElement: yield this.modalCtrl.getTop(),
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          clubId: this.club.id
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
  openHelferPunkteClub() {
    return __async(this, null, function* () {
      console.log("open HelferPunkte CLUB");
      const modal = yield this.modalCtrl.create({
        component: HelferPunkteClubPage,
        presentingElement: yield this.modalCtrl.getTop(),
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          clubId: this.club.id
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
  changeEmail(event) {
    console.log(event.detail.value);
  }
  /* changeClubttribute(value: any, fieldname) {
     const user = this.authService.auth.currentUser;
     const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
     return updateDoc(userProfileRef, { [fieldname]: value });
   }*/
  openTeamList() {
    return __async(this, null, function* () {
      console.log("open Team List");
      const modal = yield this.modalCtrl.create({
        component: ClubTeamListPage,
        presentingElement: yield this.modalCtrl.getTop(),
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          clubId: this.club.id
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
  toastActionSaved() {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: yield lastValueFrom(this.translate.get("common.success__saved")),
        duration: 1500,
        position: "top",
        color: "success"
      });
      yield toast.present();
    });
  }
  toastActionCanceled() {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: yield lastValueFrom(this.translate.get("common.action__canceled")),
        duration: 1500,
        position: "top",
        color: "danger"
      });
      yield toast.present();
    });
  }
  toastActionError(error) {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: error.message,
        duration: 1500,
        position: "top",
        color: "danger"
      });
      yield toast.present();
    });
  }
  close() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(null, "close");
    });
  }
  confirm() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(this.club, "confirm");
    });
  }
};
_ClubPage.\u0275fac = function ClubPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClubPage)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(NavParams), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(UserProfileService), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(TranslateService));
};
_ClubPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClubPage, selectors: [["app-club"]], inputs: { club: [0, "data", "club"] }, standalone: false, decls: 4, vars: 3, consts: [["noRequests", ""], [4, "ngIf"], [3, "translucent"], ["slot", "primary"], [3, "click"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], [3, "inset"], ["slot", "start"], [3, "alt", "src"], ["lines", "full", 3, "inset"], ["name", "stats-chart-outline", "slot", "start"], ["slot", "end"], ["detail", "true", 3, "click", 4, "ngIf"], ["detail", "true", 3, "click"], ["name", "people-circle-outline", "slot", "start"], ["name", "shield-half-outline", "slot", "start"], ["name", "people-outline", "slot", "start"], ["slot", "start", "name", "mail-outline"], ["labelPlacement", "stacked", "type", "email", 3, "ionChange", "label", "value"], ["name", "heart-circle-outline", "slot", "start"], ["name", "time", "slot", "start", "color", "medium"], ["name", "alert-circle-outline", "color", "warning", "slot", "start"], ["name", "help-buoy-outline", "slot", "start"], ["name", "card-outline", "slot", "start"], ["name", "calendar-outline", "slot", "start"], ["labelPlacement", "fixed", "label", "Veranstaltungen", "type", "number", 3, "ionInput", "value"], ["color", "medium", 1, "ion-margin-horizontal", "ion-padding-horizontal", "ion-text-wrap", 2, "display", "block"], ["labelPlacement", "fixed", "label", "Helferevents", "type", "number", 3, "ionInput", "value"], ["name", "logo-wordpress", "slot", "start"], [1, "ion-text-wrap"], ["fill", "clear", 3, "click"], ["slot", "icon-only", "name", "open-outline"]], template: function ClubPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ClubPage_ng_container_0_Template, 82, 61, "ng-container", 1);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275template(2, ClubPage_ng_template_2_Template, 0, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.club$));
  }
}, dependencies: [NgIf, IonBadge, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonNote, IonThumbnail, IonTitle, IonToolbar, NumericValueAccessorDirective, TextValueAccessorDirective, AsyncPipe, DatePipe, TranslatePipe], styles: ["\n\nion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 36px;\n}\n/*# sourceMappingURL=club.page.css.map */"] });
var ClubPage = _ClubPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClubPage, { className: "ClubPage", filePath: "src/app/pages/club/club.page.ts", lineNumber: 48 });
})();

export {
  ClubSubscriptionPage,
  ClubPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9jbHViLXN1YnNjcmlwdGlvbi9jbHViLXN1YnNjcmlwdGlvbi5wYWdlLnRzIiwgInNyYy9hcHAvcGFnZXMvY2x1Yi1zdWJzY3JpcHRpb24vY2x1Yi1zdWJzY3JpcHRpb24ucGFnZS5odG1sIiwgInNyYy9hcHAvcGFnZXMvY2x1Yi1tZW1iZXItbGlzdC9jbHViLW1lbWJlci1saXN0LnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9jbHViLW1lbWJlci1saXN0L2NsdWItbWVtYmVyLWxpc3QucGFnZS5odG1sIiwgInNyYy9hcHAvcGFnZXMvY2x1Yi1hZG1pbi1saXN0L2NsdWItYWRtaW4tbGlzdC5wYWdlLnRzIiwgInNyYy9hcHAvcGFnZXMvY2x1Yi1hZG1pbi1saXN0L2NsdWItYWRtaW4tbGlzdC5wYWdlLmh0bWwiLCAic3JjL2FwcC9wYWdlcy9jbHViLXRlYW0tbGlzdC9jbHViLXRlYW0tbGlzdC5wYWdlLnRzIiwgInNyYy9hcHAvcGFnZXMvY2x1Yi10ZWFtLWxpc3QvY2x1Yi10ZWFtLWxpc3QucGFnZS5odG1sIiwgInNyYy9hcHAvcGFnZXMvY2x1Yi1yZXF1ZXN0LWxpc3QvY2x1Yi1yZXF1ZXN0LWxpc3QucGFnZS50cyIsICJzcmMvYXBwL3BhZ2VzL2NsdWItcmVxdWVzdC1saXN0L2NsdWItcmVxdWVzdC1saXN0LnBhZ2UuaHRtbCIsICJzcmMvYXBwL3BhZ2VzL2hlbGZlci9oZWxmZXItcHVua3RlLWNsdWIvaGVsZmVyLXB1bmt0ZS1jbHViLnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9oZWxmZXIvaGVsZmVyLXB1bmt0ZS1jbHViL2hlbGZlci1wdW5rdGUtY2x1Yi5wYWdlLmh0bWwiLCAic3JjL2FwcC9wYWdlcy9jbHViL2NsdWIucGFnZS50cyIsICJzcmMvYXBwL3BhZ2VzL2NsdWIvY2x1Yi5wYWdlLmh0bWwiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnRDb250cm9sbGVyLCBNb2RhbENvbnRyb2xsZXIsIExvYWRpbmdDb250cm9sbGVyLCBOYXZQYXJhbXMsIFRvYXN0Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGNhdGNoRXJyb3IsIGNvbWJpbmVMYXRlc3QsIGRlZmF1bHRJZkVtcHR5LCBmb3JrSm9pbiwgZnJvbSwgbGFzdFZhbHVlRnJvbSwgbWFwLCBvZiwgc3dpdGNoTWFwLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJQcm9maWxlU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvZmlyZWJhc2UvdXNlci1wcm9maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQnJvd3NlciB9IGZyb20gXCJAY2FwYWNpdG9yL2Jyb3dzZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtY2x1Yi1zdWJzY3JpcHRpb24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jbHViLXN1YnNjcmlwdGlvbi5wYWdlLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2NsdWItc3Vic2NyaXB0aW9uLnBhZ2Uuc2NzcyddLFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIENsdWJTdWJzY3JpcHRpb25QYWdlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KFwiY2x1YklkXCIpIGNsdWJJZDogYW55O1xuICBjbHViJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIGNsdWJNZW1iZXJDb3VudCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuICB1c2VyJDogT2JzZXJ2YWJsZTxVc2VyPjtcbiAgbW9kdWxlcyQ6IE9ic2VydmFibGU8YW55PjtcbiAgcHJvZHVjdHMkOiBPYnNlcnZhYmxlPGFueT47XG4gIHVzZXI6IFVzZXI7XG4gIHN1YnNjcmlwdGlvblN0YXR1cyA9IFwiYWN0aXZlXCI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFsZXJ0Q3RybDogQWxlcnRDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9hZGluZ0N0cmw6IExvYWRpbmdDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdG9hc3RDdHJsOiBUb2FzdENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSB1c2VyUHJvZmlsZVNlcnZpY2U6IFVzZXJQcm9maWxlU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZiU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcyxcblxuXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jbHViSWQgPSB0aGlzLm5hdlBhcmFtcy5nZXQoXCJjbHViSWRcIik7XG4gICAgdGhpcy5jbHViJCA9IHRoaXMuZ2V0Q2x1Yih0aGlzLmNsdWJJZCk7XG4gICAgdGhpcy5wcm9kdWN0cyQgPSB0aGlzLmdldFByb2R1Y3RzQW5kUHJpY2VzKCk7XG4gICAgdGhpcy5tb2R1bGVzJCA9IHRoaXMuZ2V0TW9kdWxlcygpO1xuXG4gICAgdGhpcy5jbHViTWVtYmVyQ291bnQkID0gdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1Yk1lbWJlclJlZnModGhpcy5jbHViSWQpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgbWFwKChtZW1iZXJzID0+IG1lbWJlcnMubGVuZ3RoKSksXG4gICAgICB0YXAoKG1lbWJlcnMpID0+IGNvbnNvbGUubG9nKG1lbWJlcnMpKVxuICAgICk7XG4gIH1cblxuICBnZXRDbHViKGNsdWJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZmJTZXJ2aWNlLmdldENsdWJSZWYoY2x1YklkKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChjbHViKSA9PiB7XG4gICAgICAgIGlmICghY2x1YikgcmV0dXJuIG9mKG51bGwpO1xuICAgICAgICByZXR1cm4gdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1YlN1YnNjcmlwdGlvbkxpc3QoY2x1YklkKS5waXBlKFxuICAgICAgICAgIG1hcChzdWJzY3JpcHRpb25zID0+IHN1YnNjcmlwdGlvbnMuc29ydCgoYSwgYikgPT4gYi5jcmVhdGVkIC0gYS5jcmVhdGVkKSksXG4gICAgICAgICAgc3dpdGNoTWFwKChzdWJzY3JpcHRpb25zKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG9mKHtcbiAgICAgICAgICAgICAgICAuLi5jbHViLFxuICAgICAgICAgICAgICAgIGFjdGl2ZVN1YnNjcmlwdGlvbnM6IFtdLFxuICAgICAgICAgICAgICAgIGluYWN0aXZlU3Vic2NyaXB0aW9uczogW11cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdWJzY3JpcHRpb25zV2l0aERldGFpbHMkID0gc3Vic2NyaXB0aW9ucy5tYXAoc3Vic2NyaXB0aW9uID0+XG4gICAgICAgICAgICAgIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICAgICAgICAgIG9mKHN1YnNjcmlwdGlvbiksXG4gICAgICAgICAgICAgICAgdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1YlN1YnNjcmlwdGlvbkludm9pY2VMaXN0KGNsdWJJZCwgc3Vic2NyaXB0aW9uLmlkKS5waXBlKFxuICAgICAgICAgICAgICAgICAgbWFwKGludm9pY2VzID0+IGludm9pY2VzLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGEuY3JlYXRlZCkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYi5jcmVhdGVkKS5nZXRUaW1lKCkpKSxcbiAgICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YoW10pKSwgLy8gUmV0dXJuIGVtcHR5IGFycmF5IG9uIGVycm9yXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0SWZFbXB0eShbXSkgLy8gRW5zdXJlIGVtcHR5IGFycmF5IGlmIG5vIGludm9pY2VzIGFyZSBmb3VuZFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgdGhpcy5mYlNlcnZpY2UuZ2V0UHJvZHVjdChzdWJzY3JpcHRpb24ucHJvZHVjdC5wYXRoLnNwbGl0KCcvJylbMV0pLnBpcGUoXG4gICAgICAgICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZih7IGlkOiBzdWJzY3JpcHRpb24ucHJvZHVjdCwgbmFtZTogXCJVbmtub3duIFByb2R1Y3RcIiB9KSkgLy8gUmV0dXJuIGEgZGVmYXVsdCBwcm9kdWN0IG9uIGVycm9yXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKS5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCgoW3N1YnNjcmlwdGlvbiwgaW52b2ljZXMsIHByb2R1Y3RdKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgLi4uc3Vic2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgaW52b2ljZXMsXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0XG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdChzdWJzY3JpcHRpb25zV2l0aERldGFpbHMkKS5waXBlKFxuICAgICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgICBtYXAoc3Vic2NyaXB0aW9uc1dpdGhEZXRhaWxzID0+ICh7XG4gICAgICAgICAgICAgICAgLi4uY2x1YixcbiAgICAgICAgICAgICAgICBhY3RpdmVTdWJzY3JpcHRpb25zOiBzdWJzY3JpcHRpb25zV2l0aERldGFpbHMuZmlsdGVyKHN1YiA9PiBzdWIuc3RhdHVzID09ICdhY3RpdmUnKSxcbiAgICAgICAgICAgICAgICBpbmFjdGl2ZVN1YnNjcmlwdGlvbnM6IHN1YnNjcmlwdGlvbnNXaXRoRGV0YWlscy5maWx0ZXIoc3ViID0+IHN1Yi5zdGF0dXMgIT09ICdhY3RpdmUnKVxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHN1YnNjcmlwdGlvbnM6XCIsIGVycik7XG4gICAgICAgICAgICByZXR1cm4gb2Yoe1xuICAgICAgICAgICAgICAuLi5jbHViLFxuICAgICAgICAgICAgICBhY3RpdmVTdWJzY3JpcHRpb25zOiBbXSxcbiAgICAgICAgICAgICAgaW5hY3RpdmVTdWJzY3JpcHRpb25zOiBbXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gZ2V0Q2x1YldpdGhTdWJzY3JpcHRpb25zOlwiLCBlcnIpO1xuICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBjaGFuZ2VTZWdtZW50KGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgdGhpcy5zdWJzY3JpcHRpb25TdGF0dXMgPSBldmVudC5kZXRhaWwudmFsdWU7XG4gIH1cblxuICBnZXRQcm9kdWN0c0FuZFByaWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5mYlNlcnZpY2UuZ2V0UHJvZHVjdHMoKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKHByb2R1Y3RzID0+IHtcbiAgICAgICAgaWYgKHByb2R1Y3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBvZihbXSk7IC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBpZiBubyBwcm9kdWN0cyBhcmUgZm91bmRcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9kdWN0c1dpdGhQcmljZXMkID0gcHJvZHVjdHMubWFwKHByb2R1Y3QgPT5cbiAgICAgICAgICB0aGlzLmZiU2VydmljZS5nZXRQcmljZXMocHJvZHVjdC5pZCkucGlwZShcbiAgICAgICAgICAgIHRha2UoMSksXG5cbiAgICAgICAgICAgIG1hcChwcmljZXMgPT4gKHtcbiAgICAgICAgICAgICAgLi4ucHJvZHVjdCxcbiAgICAgICAgICAgICAgcHJpY2VzOiBwcmljZXMubWFwKHByaWNlID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJpY2UsXG4gICAgICAgICAgICAgICAgY3VycmVuY3lfdXBwZXI6IHByaWNlLmN1cnJlbmN5LnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgdW5pdF9hbW91bnQ6IHByaWNlLnVuaXRfYW1vdW50ID8gKHByaWNlLnVuaXRfYW1vdW50IC8gMTAwKS50b0ZpeGVkKDIpIDogXCIwLjAwXCIgLy8gRm9ybWF0IHRvIHR3byBkZWNpbWFsIHBsYWNlc1xuICAgICAgICAgICAgICB9KSkuc29ydCgoYSwgYikgPT4gYS51bml0X2Ftb3VudCAtIGIudW5pdF9hbW91bnQpIC8vIFNvcnRpbmcgcHJpY2VzIGJhc2VkIG9uIHRoZSBhZGp1c3RlZCBhbW91bnRcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIHRhcChwcmljZXMgPT4gY29uc29sZS5sb2cocHJpY2VzKSksXG5cbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgZmV0Y2hpbmcgcHJpY2VzIGZvciBwcm9kdWN0ICR7cHJvZHVjdC5pZH06YCwgZXJyKTtcbiAgICAgICAgICAgICAgcmV0dXJuIG9mKHsgLi4ucHJvZHVjdCwgcHJpY2VzOiBbXSB9KTsgLy8gUmV0dXJuIHByb2R1Y3Qgd2l0aCBlbXB0eSBwcmljZSBsaXN0IG9uIGVycm9yXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QocHJvZHVjdHNXaXRoUHJpY2VzJCk7IC8vIENvbWJpbmUgYWxsIHByb2R1Y3RzIHdpdGggdGhlaXIgcHJpY2VzIGludG8gYSBzaW5nbGUgYXJyYXlcbiAgICAgIH0pLFxuXG5cbiAgICAgIC8vIFNvcnRpbmcgdGhlIHByb2R1Y3RzIGJhc2VkIG9uIHN0cmlwZV9tZXRhZGF0YV9tYXhfdXNlcnNcbiAgICAgIG1hcChwcm9kdWN0cyA9PlxuICAgICAgICBwcm9kdWN0cy5zb3J0KChhLCBiKSA9PlxuICAgICAgICAgIE51bWJlcihhWydzdHJpcGVfbWV0YWRhdGFfbWF4X3VzZXJzJ10pIC0gTnVtYmVyKGJbJ3N0cmlwZV9tZXRhZGF0YV9tYXhfdXNlcnMnXSlcbiAgICAgICAgKVxuICAgICAgKSxcblxuXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwcm9kdWN0cyBhbmQgcHJpY2VzOlwiLCBlcnIpO1xuICAgICAgICByZXR1cm4gb2YoW10pOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgb24gZXJyb3JcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldE1vZHVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmJTZXJ2aWNlLmdldE1vZHVsZXMoKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKHByb2R1Y3RzID0+IHtcbiAgICAgICAgaWYgKHByb2R1Y3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBvZihbXSk7IC8vIFJldHVybiBhbiBlbXB0eSBhcnJheSBpZiBubyBwcm9kdWN0cyBhcmUgZm91bmRcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9kdWN0c1dpdGhQcmljZXMkID0gcHJvZHVjdHMubWFwKHByb2R1Y3QgPT5cbiAgICAgICAgICB0aGlzLmZiU2VydmljZS5nZXRQcmljZXMocHJvZHVjdC5pZCkucGlwZShcbiAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICBtYXAocHJpY2VzID0+ICh7XG4gICAgICAgICAgICAgIC4uLnByb2R1Y3QsXG4gICAgICAgICAgICAgIHByaWNlczogcHJpY2VzLm1hcChwcmljZSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByaWNlLFxuICAgICAgICAgICAgICAgIGN1cnJlbmN5X3VwcGVyOiBwcmljZS5jdXJyZW5jeS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgICAgIHVuaXRfYW1vdW50OiBwcmljZS51bml0X2Ftb3VudCA/IChwcmljZS51bml0X2Ftb3VudCAvIDEwMCkudG9GaXhlZCgyKSA6IFwiMC4wMFwiIC8vIEZvcm1hdCB0byB0d28gZGVjaW1hbCBwbGFjZXNcbiAgICAgICAgICAgICAgfSkpLnNvcnQoKGEsIGIpID0+IGEudW5pdF9hbW91bnQgLSBiLnVuaXRfYW1vdW50KSAvLyBTb3J0aW5nIHByaWNlcyBiYXNlZCBvbiB0aGUgYWRqdXN0ZWQgYW1vdW50XG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICB0YXAocHJpY2VzID0+IGNvbnNvbGUubG9nKHByaWNlcykpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBmZXRjaGluZyBwcmljZXMgZm9yIHByb2R1Y3QgJHtwcm9kdWN0LmlkfTpgLCBlcnIpO1xuICAgICAgICAgICAgICByZXR1cm4gb2YoeyAuLi5wcm9kdWN0LCBwcmljZXM6IFtdIH0pOyAvLyBSZXR1cm4gcHJvZHVjdCB3aXRoIGVtcHR5IHByaWNlIGxpc3Qgb24gZXJyb3JcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdChwcm9kdWN0c1dpdGhQcmljZXMkKTsgLy8gQ29tYmluZSBhbGwgcHJvZHVjdHMgd2l0aCB0aGVpciBwcmljZXMgaW50byBhIHNpbmdsZSBhcnJheVxuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwcm9kdWN0cyBhbmQgcHJpY2VzOlwiLCBlcnIpO1xuICAgICAgICByZXR1cm4gb2YoW10pOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgb24gZXJyb3JcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG5cbiAgYXN5bmMgY2hlY2tvdXQocHJpY2UsIHByb2R1Y3QpIHtcbiAgICBjb25zb2xlLmxvZyhwcmljZSk7XG4gICAgY29uc29sZS5sb2cocHJvZHVjdCk7XG5cbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XG4gICAgICBidXR0b25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCJjYW5jZWxcIixcbiAgICAgICAgICB0ZXh0OiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5jYW5jZWxcIikpLFxuICAgICAgICAgIHJvbGU6IFwiY2FuY2VsXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlkOiBcIm9rXCIsXG4gICAgICAgICAgdGV4dDogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24ub2tcIikpLFxuICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvYWRpbmcgPSBhd2FpdCB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICAgICAgICAgIHNob3dCYWNrZHJvcDogZmFsc2UsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQml0dGUgd2FydGVuXCIsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbG9hZGluZy5wcmVzZW50KCk7XG5cbiAgICAgICAgICAgIGZyb20odGhpcy5mYlNlcnZpY2UuY2hlY2tvdXRTdWJzY3JpcHRpb24odGhpcy5jbHViSWQsIHByaWNlLCBwcm9kdWN0KSkucGlwZShcbiAgICAgICAgICAgICAgc3dpdGNoTWFwKGNoZWNrb3V0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2hlY2tvdXQgc2Vzc2lvbiBjcmVhdGVkIHdpdGggSUQ6JywgY2hlY2tvdXQuaWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZiU2VydmljZS5nZXRDaGVja291dFNlc3Npb24odGhpcy5jbHViSWQsIGNoZWNrb3V0LmlkKTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBjaGVja291dCBwcm9jZXNzOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YobnVsbCk7IC8vIEhhbmRsZSBlcnJvcnMgb3IgcHJvdmlkZSBhIGZhbGxiYWNrIHZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnN1YnNjcmliZShjaGVja291dFNlc3Npb24gPT4ge1xuICAgICAgICAgICAgICBpZiAoY2hlY2tvdXRTZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIGNoZWNrb3V0IHNlc3Npb24gZGF0YTonLCBjaGVja291dFNlc3Npb24pO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja291dFNlc3Npb24gJiYgY2hlY2tvdXRTZXNzaW9uLnVybCkge1xuICAgICAgICAgICAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgICAgICAgICAgICB0aGlzLm9wZW5VcmwoY2hlY2tvdXRTZXNzaW9uLnVybCk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGNoZWNrb3V0IHNlc3Npb24gZGF0YSByZWNlaXZlZC4nKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGhlYWRlcjogXCJBYm8ga2F1ZmVuXCIsXG4gICAgICBtZXNzYWdlOiBcIk3DtmNodGVzdCBkdSBkYXMgQWJvIGbDvHIgXCIgKyBwcmljZS5jdXJyZW5jeV91cHBlciArIFwiIFwiICsgcHJpY2UudW5pdF9hbW91bnQgKyBcIiBrYXVmZW4/XCIsXG4gICAgfSlcbiAgICBhbGVydC5wcmVzZW50KCk7XG5cblxuXG4gIH1cbiAgYXN5bmMgY2hlY2tvdXRBZGRvbihwcmljZSwgcHJvZHVjdCkge1xuICAgIGNvbnNvbGUubG9nKHByaWNlKTtcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0KTtcblxuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydEN0cmwuY3JlYXRlKHtcbiAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcImNhbmNlbFwiLFxuICAgICAgICAgIHRleHQ6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLmNhbmNlbFwiKSksXG4gICAgICAgICAgcm9sZTogXCJjYW5jZWxcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgaWQ6IFwib2tcIixcbiAgICAgICAgICB0ZXh0OiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5va1wiKSksXG4gICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbG9hZGluZyA9IGF3YWl0IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgICAgICAgICAgc2hvd0JhY2tkcm9wOiBmYWxzZSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJCaXR0ZSB3YXJ0ZW5cIixcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsb2FkaW5nLnByZXNlbnQoKTtcblxuICAgICAgICAgICAgZnJvbSh0aGlzLmZiU2VydmljZS5jaGVja291dEFkZG9uKHRoaXMuY2x1YklkLCBwcmljZSwgcHJvZHVjdCkpLnBpcGUoXG4gICAgICAgICAgICAgIHN3aXRjaE1hcChjaGVja291dCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NoZWNrb3V0IHNlc3Npb24gY3JlYXRlZCB3aXRoIElEOicsIGNoZWNrb3V0LmlkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mYlNlcnZpY2UuZ2V0Q2hlY2tvdXRTZXNzaW9uKHRoaXMuY2x1YklkLCBjaGVja291dC5pZCk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgY2hlY2tvdXQgcHJvY2VzczonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKG51bGwpOyAvLyBIYW5kbGUgZXJyb3JzIG9yIHByb3ZpZGUgYSBmYWxsYmFjayB2YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS5zdWJzY3JpYmUoY2hlY2tvdXRTZXNzaW9uID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNoZWNrb3V0U2Vzc2lvbikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCBjaGVja291dCBzZXNzaW9uIGRhdGE6JywgY2hlY2tvdXRTZXNzaW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tvdXRTZXNzaW9uICYmIGNoZWNrb3V0U2Vzc2lvbi51cmwpIHtcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuVXJsKGNoZWNrb3V0U2Vzc2lvbi51cmwpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBjaGVja291dCBzZXNzaW9uIGRhdGEgcmVjZWl2ZWQuJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBoZWFkZXI6IFwiQWJvIGthdWZlblwiLFxuICAgICAgbWVzc2FnZTogXCJNw7ZjaHRlc3QgZHUgZGFzIEFibyBmw7xyIFwiICsgcHJpY2UuY3VycmVuY3lfdXBwZXIgKyBcIiBcIiArIHByaWNlLnVuaXRfYW1vdW50ICsgXCIga2F1ZmVuP1wiLFxuICAgIH0pXG4gICAgYWxlcnQucHJlc2VudCgpO1xuXG5cblxuICB9XG5cbiAgaGFzQWNpdHZlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbkxpc3QpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhzdWJzY3JpcHRpb25MaXN0KVxuICAgIHJldHVybiBzdWJzY3JpcHRpb25MaXN0LmZpbHRlcihzdWJjcmlwdGlvbiA9PiBzdWJjcmlwdGlvbi5zdGF0dXMgPT09IFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgYXN5bmMgb3BlblVybCh1cmw6IHN0cmluZykge1xuICAgIEJyb3dzZXIub3Blbih7XG4gICAgICB1cmw6IHVybFxuICAgIH0pO1xuICB9XG4gIGFzeW5jIHRvYXN0QWN0aW9uU2F2ZWQoKSB7XG4gICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uc3VjY2Vzc19fc2F2ZWRcIikpLFxuICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIixcbiAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICB9KTtcblxuICAgIGF3YWl0IHRvYXN0LnByZXNlbnQoKTtcbiAgfVxuICBhc3luYyB0b2FzdEFjdGlvbkNhbmNlbGVkKCkge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdEN0cmwuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLmFjdGlvbl9fY2FuY2VsZWRcIikpLFxuICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIixcbiAgICAgIGNvbG9yOiBcImRhbmdlclwiLFxuICAgIH0pO1xuICAgIGF3YWl0IHRvYXN0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIHRvYXN0QWN0aW9uRXJyb3IoZXJyb3IpIHtcbiAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDdHJsLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIixcbiAgICAgIGNvbG9yOiBcImRhbmdlclwiLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgdG9hc3QucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgY2xvc2UoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kYWxDdHJsLmRpc21pc3MobnVsbCwgXCJjbG9zZVwiKTtcbiAgfVxuXG4gIGFzeW5jIGNvbmZpcm0oKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kYWxDdHJsLmRpc21pc3ModGhpcy5jbHViSWQsIFwiY29uZmlybVwiKTtcbiAgfVxufVxuXG4iLCAiPGlvbi1oZWFkZXIgW3RyYW5zbHVjZW50XT1cInRydWVcIj5cbiAgPGlvbi10b29sYmFyPlxuICAgIDxpb24tdGl0bGU+e3tcImNvbW1vbi5zdWJzY3JpcHRpb25cIiB8IHRyYW5zbGF0ZX19PC9pb24tdGl0bGU+XG4gICAgPGlvbi1idXR0b25zIHNsb3Q9XCJwcmltYXJ5XCI+XG4gICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwiY2xvc2UoKVwiPnt7XCJjb21tb24uY2xvc2VcIiB8IHRyYW5zbGF0ZX19PC9pb24tYnV0dG9uPlxuICAgIDwvaW9uLWJ1dHRvbnM+XG4gIDwvaW9uLXRvb2xiYXI+XG48L2lvbi1oZWFkZXI+XG5cbjxpb24tY29udGVudCBbZnVsbHNjcmVlbl09XCJ0cnVlXCI+XG4gIDxpb24taGVhZGVyIGNvbGxhcHNlPVwiY29uZGVuc2VcIj5cbiAgICA8aW9uLXRvb2xiYXI+XG4gICAgICA8aW9uLXRpdGxlIHNpemU9XCJsYXJnZVwiPnt7XCJjb21tb24uc3Vic2NyaXB0aW9uXCIgfCB0cmFuc2xhdGV9fTwvaW9uLXRpdGxlPlxuICAgIDwvaW9uLXRvb2xiYXI+XG4gIDwvaW9uLWhlYWRlcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNsdWIkIHwgYXN5bmMgYXMgY2x1YlwiPlxuXG5cbiAgICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIiBsaW5lcz1cIm5vbmVcIj5cbiAgICAgIDxpb24tbGlzdC1oZWFkZXI+XG4gICAgICAgIEFib25uZW1lbnQga2F1ZmVuXG4gICAgICA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICAgIDxpb24taXRlbSBkZXRhaWwgKGNsaWNrKT1cIm9wZW5VcmwoJ2h0dHBzOi8vbXktY2x1Yi5hcHAvcHJpY2luZycpXCI+XG5cbiAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj5cbiAgICAgICAgICBGaW5kZSBkZWluIHBhc3NlbmRlcyBBYm9ubmVtZW50IGbDvHIgZGVpbmVuIFZlcmVpbiB7e2NsdWIubmFtZX19LlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbHViTWVtYmVyQ291bnQkIHwgYXN5bmMgYXMgY2x1Yk1lbWJlckNvdW50XCI+XG4gICAgICAgICAgICBBa3R1ZWxsZSBBbnphaGwgTWl0Z2xpZWRlcjoge3tjbHViTWVtYmVyQ291bnR9fVxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2lvbi1sYWJlbD5cblxuICAgICAgPC9pb24taXRlbT5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJwcm9kdWN0cyQgfCBhc3luYyBhcyBwcm9kdWN0TGlzdFwiPlxuICAgICAgICA8aW9uLWFjY29yZGlvbi1ncm91cCAqbmdGb3I9XCJsZXQgcHJvZHVjdCBvZiBwcm9kdWN0TGlzdFwiPlxuXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNsdWJNZW1iZXJDb3VudCQgfCBhc3luYyBhcyBjbHViTWVtYmVyQ291bnRcIj5cblxuICAgICAgICAgICAgPGlvbi1hY2NvcmRpb25cbiAgICAgICAgICAgICAgKm5nSWY9XCJwcm9kdWN0WydzdHJpcGVfbWV0YWRhdGFfbWF4X3VzZXJzJ10gJiYgcHJvZHVjdFsnc3RyaXBlX21ldGFkYXRhX21heF91c2VycyddIDwgY2x1Yk1lbWJlckNvdW50XCJcbiAgICAgICAgICAgICAgW3ZhbHVlXT1wcm9kdWN0LmlkPlxuICAgICAgICAgICAgICA8aW9uLWl0ZW0gc2xvdD1cImhlYWRlclwiIGNvbG9yPVwibGlnaHRcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWxhYmVsPnt7cHJvZHVjdC5uYW1lfX08L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJwcm9kdWN0LnN0cmlwZV9tZXRhZGF0YV9zdWJzY3JpcHRpb249PWNsdWIuc3Vic2NyaXB0aW9uVHlwZVwiIHNsb3Q9XCJzdGFydFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIiBuYW1lPVwiY2hlY2ttYXJrLWNpcmNsZS1vdXRsaW5lXCI+PC9pb24taWNvbj5cblxuICAgICAgICAgICAgICAgIDxpb24taWNvbiAqbmdJZj1cInByb2R1Y3Quc3RyaXBlX21ldGFkYXRhX3N1YnNjcmlwdGlvbiE9PWNsdWIuc3Vic2NyaXB0aW9uVHlwZVwiIHNsb3Q9XCJzdGFydFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImRhbmdlclwiIG5hbWU9XCJjbG9zZS1jaXJjbGUtb3V0bGluZVwiPjwvaW9uLWljb24+XG5cblxuXG4gICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpb24tcGFkZGluZ1wiIHNsb3Q9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGlvbi1ub3RlIGNvbG9yPVwic3VjY2Vzc1wiICpuZ0lmPVwicHJvZHVjdC5zdHJpcGVfbWV0YWRhdGFfc3Vic2NyaXB0aW9uPT1jbHViLnN1YnNjcmlwdGlvblR5cGVcIj5EaWVzZXNcbiAgICAgICAgICAgICAgICAgIEFib25uZW1lbnRcbiAgICAgICAgICAgICAgICAgIHd1cmRlXG4gICAgICAgICAgICAgICAgICBiZXJlaXRzIGFrdGl2aWVydC4gPGJyIC8+PGJyIC8+PC9pb24tbm90ZT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicHJvZHVjdC5zdHJpcGVfbWV0YWRhdGFfc3Vic2NyaXB0aW9uPT1jbHViLnN1YnNjcmlwdGlvblR5cGVcIj5cblxuICAgICAgICAgICAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj57e3Byb2R1Y3QuZGVzY3JpcHRpb259fTwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlvbi1saXN0PlxuICAgICAgICAgICAgICAgICAgICA8aW9uLWl0ZW0gKm5nRm9yPVwibGV0IHByaWNlIG9mIHByb2R1Y3QucHJpY2VzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlvbi1sYWJlbCAqbmdJZj1cInByaWNlLnN0cmlwZV9tZXRhZGF0YV9wYXltZW50PT0nbW9udGgnXCI+UHJlaXMgLyB7e1wiY29tbW9uLm1vbnRoXCIgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpb24tbGFiZWwgKm5nSWY9XCJwcmljZS5zdHJpcGVfbWV0YWRhdGFfcGF5bWVudD09J3llYXInXCI+UHJlaXMgLyB7e1wiY29tbW9uLnllYXJcIiB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICAgICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlvbi1iYWRnZSBzbG90PVwiZW5kXCI+e3twcmljZS5jdXJyZW5jeV91cHBlcn19IHt7cHJpY2UudW5pdF9hbW91bnR9fSA8L2lvbi1iYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvaW9uLWxpc3Q+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cblxuXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInByb2R1Y3Quc3RyaXBlX21ldGFkYXRhX3N1YnNjcmlwdGlvbiE9Y2x1Yi5zdWJzY3JpcHRpb25UeXBlXCI+XG4gICAgICAgICAgICAgICAgICA8aW9uLW5vdGUgY29sb3I9XCJkYW5nZXJcIj5EaWVzZXMgQWJvbm5lbWVudFxuICAgICAgICAgICAgICAgICAgICBrYW5uIG5pY2h0IGdld8OkaGx0IHdlcmRlbi4gPGJyIC8+PGJyIC8+PC9pb24tbm90ZT5cbiAgICAgICAgICAgICAgICAgIDxpb24tbGFiZWwgY2xhc3M9XCJpb24tdGV4dC13cmFwXCI+e3twcm9kdWN0LmRlc2NyaXB0aW9ufX08L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpb24tbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPGlvbi1pdGVtICpuZ0Zvcj1cImxldCBwcmljZSBvZiBwcm9kdWN0LnByaWNlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpb24tbGFiZWwgKm5nSWY9XCJwcmljZS5zdHJpcGVfbWV0YWRhdGFfcGF5bWVudD09J21vbnRoJ1wiPlByZWlzIC8ge3tcImNvbW1vbi5tb250aFwiIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW9uLWxhYmVsICpuZ0lmPVwicHJpY2Uuc3RyaXBlX21ldGFkYXRhX3BheW1lbnQ9PSd5ZWFyJ1wiPlByZWlzIC8ge3tcImNvbW1vbi55ZWFyXCIgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpb24tYmFkZ2Ugc2xvdD1cImVuZFwiPnt7cHJpY2UuY3VycmVuY3lfdXBwZXJ9fSB7e3ByaWNlLnVuaXRfYW1vdW50fX0gPC9pb24tYmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L2lvbi1saXN0PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2lvbi1hY2NvcmRpb24+XG5cbiAgICAgICAgICAgIDxpb24tYWNjb3JkaW9uXG4gICAgICAgICAgICAgICpuZ0lmPVwicHJvZHVjdFsnc3RyaXBlX21ldGFkYXRhX21heF91c2VycyddICYmIHByb2R1Y3RbJ3N0cmlwZV9tZXRhZGF0YV9tYXhfdXNlcnMnXSA+PSBjbHViTWVtYmVyQ291bnRcIlxuICAgICAgICAgICAgICBbdmFsdWVdPXByb2R1Y3QuaWQ+XG4gICAgICAgICAgICAgIDxpb24taXRlbSBzbG90PVwiaGVhZGVyXCIgY29sb3I9XCJsaWdodFwiPlxuICAgICAgICAgICAgICAgIDxpb24tbGFiZWw+e3twcm9kdWN0Lm5hbWV9fTwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiAqbmdJZj1cInByb2R1Y3Quc3RyaXBlX21ldGFkYXRhX3N1YnNjcmlwdGlvbj09Y2x1Yi5zdWJzY3JpcHRpb25UeXBlXCIgc2xvdD1cInN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiIG5hbWU9XCJjaGVja21hcmstY2lyY2xlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuXG4gICAgICAgICAgICAgICAgPGlvbi1pY29uICpuZ0lmPVwicHJvZHVjdC5zdHJpcGVfbWV0YWRhdGFfc3Vic2NyaXB0aW9uIT09Y2x1Yi5zdWJzY3JpcHRpb25UeXBlXCIgc2xvdD1cInN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiIG5hbWU9XCJoZWFydC1vdXRsaW5lXCI+PC9pb24taWNvbj5cblxuXG5cbiAgICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlvbi1wYWRkaW5nXCIgc2xvdD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8aW9uLW5vdGUgY29sb3I9XCJzdWNjZXNzXCIgKm5nSWY9XCJwcm9kdWN0LnN0cmlwZV9tZXRhZGF0YV9zdWJzY3JpcHRpb249PWNsdWIuc3Vic2NyaXB0aW9uVHlwZVwiPkRpZXNlc1xuICAgICAgICAgICAgICAgICAgQWJvbm5lbWVudFxuICAgICAgICAgICAgICAgICAgd3VyZGVcbiAgICAgICAgICAgICAgICAgIGJlcmVpdHMgYWt0aXZpZXJ0LiA8YnIgLz48YnIgLz48L2lvbi1ub3RlPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInByb2R1Y3Quc3RyaXBlX21ldGFkYXRhX3N1YnNjcmlwdGlvbj09Y2x1Yi5zdWJzY3JpcHRpb25UeXBlXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj57e3Byb2R1Y3QuZGVzY3JpcHRpb259fTwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW9uLWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgPGlvbi1pdGVtICpuZ0Zvcj1cImxldCBwcmljZSBvZiBwcm9kdWN0LnByaWNlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1sYWJlbCAqbmdJZj1cInByaWNlLnN0cmlwZV9tZXRhZGF0YV9wYXltZW50PT0nbW9udGgnXCI+UHJlaXMgLyB7e1wiY29tbW9uLm1vbnRoXCIgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWxhYmVsICpuZ0lmPVwicHJpY2Uuc3RyaXBlX21ldGFkYXRhX3BheW1lbnQ9PSd5ZWFyJ1wiPlByZWlzIC8ge3tcImNvbW1vbi55ZWFyXCIgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWJhZGdlIHNsb3Q9XCJlbmRcIj57e3ByaWNlLmN1cnJlbmN5X3VwcGVyfX0ge3twcmljZS51bml0X2Ftb3VudH19IDwvaW9uLWJhZGdlPlxuICAgICAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvaW9uLWxpc3Q+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJwcm9kdWN0LnN0cmlwZV9tZXRhZGF0YV9zdWJzY3JpcHRpb24hPWNsdWIuc3Vic2NyaXB0aW9uVHlwZVwiPlxuICAgICAgICAgICAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj57e3Byb2R1Y3QuZGVzY3JpcHRpb259fTwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlvbi1saXN0PlxuICAgICAgICAgICAgICAgICAgICA8aW9uLWl0ZW0gKm5nRm9yPVwibGV0IHByaWNlIG9mIHByb2R1Y3QucHJpY2VzXCIgZGV0YWlsIChjbGljayk9XCJjaGVja291dChwcmljZSwgcHJvZHVjdClcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW9uLWxhYmVsICpuZ0lmPVwicHJpY2Uuc3RyaXBlX21ldGFkYXRhX3BheW1lbnQ9PSdtb250aCdcIj5QcmVpcyAvIHt7XCJjb21tb24ubW9udGhcIiB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICAgICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlvbi1sYWJlbCAqbmdJZj1cInByaWNlLnN0cmlwZV9tZXRhZGF0YV9wYXltZW50PT0neWVhcidcIj5QcmVpcyAvIHt7XCJjb21tb24ueWVhclwiIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW9uLWJhZGdlIHNsb3Q9XCJlbmRcIj57e3ByaWNlLmN1cnJlbmN5X3VwcGVyfX0ge3twcmljZS51bml0X2Ftb3VudH19IDwvaW9uLWJhZGdlPlxuICAgICAgICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgICAgICAgICAgPC9pb24tbGlzdD5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9pb24tYWNjb3JkaW9uPlxuXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvaW9uLWFjY29yZGlvbi1ncm91cD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPC9pb24tbGlzdD5cblxuXG4gICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCIgbGluZXM9XCJub25lXCI+XG4gICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICBadXNhdHptb2R1bGUga2F1ZmVuXG4gICAgICA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICAgIDxpb24taXRlbSBkZXRhaWwgKGNsaWNrKT1cIm9wZW5VcmwoJ2h0dHBzOi8vbXktY2x1Yi5hcHAvcHJpY2luZycpXCI+XG5cbiAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj5cbiAgICAgICAgICBEdSBiZXphaGxzdCBuaWNodHMsIHdhcyBkdSBuaWNodCBicmF1Y2hzdC4gTWl0IHVuc2VyZW4gWnVzYXR6bW9kdWxlbiBrYW5uc3QgZHUgbXkgY2x1YiBkZWluZW4gcGVyc8O2bmxpY2hlblxuICAgICAgICAgIEJlZMO8cmZuaXNzZW4gYW5wYXNzZW4uXG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJtb2R1bGVzJCB8IGFzeW5jIGFzIG1vZHVsZUxpc3RcIj5cbiAgICAgICAgPGlvbi1hY2NvcmRpb24tZ3JvdXAgKm5nRm9yPVwibGV0IG1vZHVsZSBvZiBtb2R1bGVMaXN0XCI+XG4gICAgICAgICAgPGlvbi1hY2NvcmRpb24gW3ZhbHVlXT1tb2R1bGUuaWQ+XG4gICAgICAgICAgICA8aW9uLWl0ZW0gc2xvdD1cImhlYWRlclwiIGNvbG9yPVwibGlnaHRcIj5cbiAgICAgICAgICAgICAgPGlvbi1sYWJlbD57e21vZHVsZS5uYW1lfX08L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgPGlvbi1pY29uICpuZ0lmPVwibW9kdWxlLnN0cmlwZV9tZXRhZGF0YV9hZGRvbj09J3RyYWluaW5nJyAmJiBjbHViLmhhc0ZlYXR1cmVUcmFpbmluZ0V4ZXJjaXNlXCIgc2xvdD1cInN0YXJ0XCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIiBuYW1lPVwiY2hlY2ttYXJrLWNpcmNsZS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgPGlvbi1pY29uICpuZ0lmPVwibW9kdWxlLnN0cmlwZV9tZXRhZGF0YV9hZGRvbj09J2hlbGZlcicgJiYgY2x1Yi5oYXNGZWF0dXJlSGVsZmVyRXZlbnRcIiBzbG90PVwic3RhcnRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiIG5hbWU9XCJjaGVja21hcmstY2lyY2xlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJtb2R1bGUuc3RyaXBlX21ldGFkYXRhX2FkZG9uPT0nY2hhbXBpb25zaGlwJyAmJiBjbHViLmhhc0ZlYXR1cmVDaGFtcGlvbnNoaXBcIiBzbG90PVwic3RhcnRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiIG5hbWU9XCJjaGVja21hcmstY2lyY2xlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpb24tcGFkZGluZ1wiIHNsb3Q9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgIDxpb24tbm90ZSBjb2xvcj1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwibW9kdWxlLnN0cmlwZV9tZXRhZGF0YV9hZGRvbj09J3RyYWluaW5nJyAmJiBjbHViLmhhc0ZlYXR1cmVUcmFpbmluZ0V4ZXJjaXNlXCI+RGllc2VzIE1vZHVsIHd1cmRlXG4gICAgICAgICAgICAgICAgYmVyZWl0cyBha3RpdmllcnQuPC9pb24tbm90ZT5cbiAgICAgICAgICAgICAgPGlvbi1ub3RlIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJtb2R1bGUuc3RyaXBlX21ldGFkYXRhX2FkZG9uPT0naGVsZmVyJyAmJiBjbHViLmhhc0ZlYXR1cmVIZWxmZXJFdmVudFwiPkRpZXNlcyBNb2R1bCB3dXJkZSBiZXJlaXRzXG4gICAgICAgICAgICAgICAgYWt0aXZpZXJ0LjwvaW9uLW5vdGU+XG4gICAgICAgICAgICAgIDxpb24tbm90ZSBjb2xvcj1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwibW9kdWxlLnN0cmlwZV9tZXRhZGF0YV9hZGRvbj09J2NoYW1waW9uc2hpcCcgJiYgY2x1Yi5oYXNGZWF0dXJlQ2hhbXBpb25zaGlwXCI+RGllc2VzIE1vZHVsIHd1cmRlXG4gICAgICAgICAgICAgICAgYmVyZWl0cyBha3RpdmllcnQuPC9pb24tbm90ZT5cblxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiKCBtb2R1bGUuc3RyaXBlX21ldGFkYXRhX2FkZG9uPT0ndHJhaW5pbmcnICYmICFjbHViLmhhc0ZlYXR1cmVUcmFpbmluZ0V4ZXJjaXNlICkgfHxcbiAgICAgICAgICAgICAgKCBtb2R1bGUuc3RyaXBlX21ldGFkYXRhX2FkZG9uPT0naGVsZmVyJyAmJiAhY2x1Yi5oYXNGZWF0dXJlSGVsZmVyRXZlbnQgKSB8fFxuICAgICAgICAgICAgICAoIG1vZHVsZS5zdHJpcGVfbWV0YWRhdGFfYWRkb249PSdjaGFtcGlvbnNoaXAnICYmICFjbHViLmhhc0ZlYXR1cmVDaGFtcGlvbnNoaXAgKVwiPlxuICAgICAgICAgICAgICAgIDxpb24tbGFiZWwgY2xhc3M9XCJpb24tdGV4dC13cmFwXCI+e3ttb2R1bGUuZGVzY3JpcHRpb259fTwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgIDxpb24tbGlzdD5cbiAgICAgICAgICAgICAgICAgIDxpb24taXRlbSAqbmdGb3I9XCJsZXQgcHJpY2Ugb2YgbW9kdWxlLnByaWNlc1wiIGRldGFpbCAoY2xpY2spPVwiY2hlY2tvdXRBZGRvbihwcmljZSwgbW9kdWxlKVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW9uLWxhYmVsICpuZ0lmPVwicHJpY2Uuc3RyaXBlX21ldGFkYXRhX3BheW1lbnQ9PSdtb250aCdcIj5QcmVpcyAvIHt7XCJjb21tb24ubW9udGhcIiB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW9uLWxhYmVsICpuZ0lmPVwicHJpY2Uuc3RyaXBlX21ldGFkYXRhX3BheW1lbnQ9PSd5ZWFyJ1wiPlByZWlzIC8ge3tcImNvbW1vbi55ZWFyXCIgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlvbi1iYWRnZSBzbG90PVwiZW5kXCI+e3twcmljZS5jdXJyZW5jeV91cHBlcn19IHt7cHJpY2UudW5pdF9hbW91bnR9fSA8L2lvbi1iYWRnZT5cbiAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9pb24tbGlzdD5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9pb24tYWNjb3JkaW9uPlxuICAgICAgICA8L2lvbi1hY2NvcmRpb24tZ3JvdXA+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDwvaW9uLWxpc3Q+XG5cbiAgICA8IS0tXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJtb2R1bGVzJCB8IGFzeW5jIGFzIG1vZHVsZUxpc3RcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtb2R1bGUgb2YgbW9kdWxlTGlzdFwiPlxuICAgICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCI+XG4gICAgICAgIDxpb24tbGlzdC1oZWFkZXI+XG4gICAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBbbmFtZV09XCJtb2R1bGUuc3RyaXBlX21ldGFkYXRhX2ljb25cIj48L2lvbi1pY29uPlxuICAgICAgICAgICAge3ttb2R1bGUubmFtZX19XG4gICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJlbmRcIiBjb2xvcj1cInN1Y2Nlc3NcIiBuYW1lPVwiY2hlY2ttYXJrLWNpcmNsZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICA8aW9uLWl0ZW0+XG4gICAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj57e21vZHVsZS5kZXNjcmlwdGlvbn19PC9pb24tbGFiZWw+XG4gICAgICAgICAgPGlvbi1iYWRnZSBzbG90PVwiZW5kXCI+IDwvaW9uLWJhZGdlPlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICA8aW9uLWxpc3Q+XG4gICAgICAgICAgPGlvbi1pdGVtICpuZ0Zvcj1cImxldCBwcmljZSBvZiBtb2R1bGUucHJpY2VzXCIgZGV0YWlsIChjbGljayk9XCJjaGVja291dEFkZG9uKHByaWNlLCBtb2R1bGUpXCI+XG4gICAgICAgICAgICA8aW9uLWxhYmVsICpuZ0lmPVwicHJpY2Uuc3RyaXBlX21ldGFkYXRhX3BheW1lbnQ9PSdtb250aCdcIj5QcmVpcyAvIHt7XCJjb21tb24ubW9udGhcIiB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgIDxpb24tbGFiZWwgKm5nSWY9XCJwcmljZS5zdHJpcGVfbWV0YWRhdGFfcGF5bWVudD09J3llYXInXCI+UHJlaXMgLyB7e1wiY29tbW9uLnllYXJcIiB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgIDxpb24tYmFkZ2Ugc2xvdD1cImVuZFwiPnt7cHJpY2UuY3VycmVuY3lfdXBwZXJ9fSB7e3ByaWNlLnVuaXRfYW1vdW50fX0gPC9pb24tYmFkZ2U+XG4gICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgPC9pb24tbGlzdD5cbiAgICAgIDwvaW9uLWxpc3Q+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvbmctY29udGFpbmVyPlxuICAtLT5cblxuXG5cblxuXG5cblxuXG4gICAgPCEtLVxuICBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzQWNpdHZlU3Vic2NyaXB0aW9uKGNsdWJbJ2FjdGl2ZVN1YnNjcmlwdGlvbnMnXSkubGVuZ3RoID09PSAwXCI+XG5cbiAgICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiPlxuICAgICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICAgIEFib25uZW1lbnQga2F1ZmVuXG4gICAgICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICA8aW9uLWl0ZW0gZGV0YWlsIChjbGljayk9XCJvcGVuVXJsKCdodHRwczovL215LWNsdWIuYXBwL3ByaWNpbmcnKVwiPlxuICAgICAgICAgXG4gICAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj5cbiAgICAgICAgICAgIEZpbmRlIGRlaW4gcGFzc2VuZGVzIEFib25uZW1lbnQgZsO8ciBkZWluZW4gVmVyZWluIHt7Y2x1Yi5uYW1lfX1cbiAgICAgICAgICA8L2lvbi1sYWJlbD5cblxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgPC9pb24tbGlzdD5cblxuXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicHJvZHVjdHMkIHwgYXN5bmMgYXMgcHJvZHVjdExpc3RcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcHJvZHVjdCBvZiBwcm9kdWN0TGlzdFwiPlxuICAgICAgICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWF2YXRhciBzbG90PVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgW2FsdF09XCJwcm9kdWN0Lm5hbWVcIiBbc3JjXT1cInByb2R1Y3QuaW1hZ2VzWzBdXCIgLz5cbiAgICAgICAgICAgICAgICA8L2lvbi1hdmF0YXI+XG4gICAgICAgICAgICAgICAge3twcm9kdWN0Lm5hbWV9fVxuICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cblxuICAgICAgICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG4gICAgICAgICAgICA8aW9uLWl0ZW0+XG4gICAgICAgICAgICAgIDxpb24tbGFiZWwgY2xhc3M9XCJpb24tdGV4dC13cmFwXCI+e3twcm9kdWN0LmRlc2NyaXB0aW9ufX08L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgPGlvbi1iYWRnZSBzbG90PVwiZW5kXCI+IDwvaW9uLWJhZGdlPlxuICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICAgIDxpb24tbGlzdD5cbiAgICAgICAgICAgICAgPGlvbi1pdGVtICpuZ0Zvcj1cImxldCBwcmljZSBvZiBwcm9kdWN0LnByaWNlc1wiIGRldGFpbCAoY2xpY2spPVwiY2hlY2tvdXQocHJpY2UsIHByb2R1Y3QpXCI+XG4gICAgICAgICAgICAgICAgPGlvbi1sYWJlbCAqbmdJZj1cInByaWNlLnN0cmlwZV9tZXRhZGF0YV9wYXltZW50PT0nbW9udGgnXCI+UHJlaXMgLyB7e1wiY29tbW9uLm1vbnRoXCIgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgIDxpb24tbGFiZWwgKm5nSWY9XCJwcmljZS5zdHJpcGVfbWV0YWRhdGFfcGF5bWVudD09J3llYXInXCI+UHJlaXMgLyB7e1wiY29tbW9uLnllYXJcIiB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlvbi1iYWRnZSBzbG90PVwiZW5kXCI+e3twcmljZS5jdXJyZW5jeV91cHBlcn19IHt7cHJpY2UudW5pdF9hbW91bnR9fSA8L2lvbi1iYWRnZT5cbiAgICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICAgIDwvaW9uLWxpc3Q+XG4gICAgICAgICAgPC9pb24tbGlzdD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuLS0+XG5cbiAgICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIlxuICAgICAgKm5nSWY9XCJjbHViWydhY3RpdmVTdWJzY3JpcHRpb25zJ10ubGVuZ3RoID4gMCB8fCBjbHViWydpbmFjdGl2ZVN1YnNjcmlwdGlvbnMnXS5sZW5ndGggPiAwIFwiPlxuICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgQmVzdGVsbHZlcmxhdWZcbiAgICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxuXG5cblxuICAgICAgPG5nLWNvbnRhaW5lcj5cbiAgICAgICAgPGlvbi1pdGVtICpuZ0Zvcj1cImxldCBzdWJzY3JpcHRpb24gb2YgY2x1YlsnYWN0aXZlU3Vic2NyaXB0aW9ucyddXCIgZGV0YWlsXG4gICAgICAgICAgKGNsaWNrKT1cIm9wZW5Vcmwoc3Vic2NyaXB0aW9uLmludm9pY2VzWzBdLmludm9pY2VfcGRmKVwiPlxuICAgICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgICA8aDI+e3tzdWJzY3JpcHRpb24ucHJvZHVjdC5uYW1lfX08L2gyPlxuICAgICAgICAgICAgPGgzPnt7XCJjb21tb24uY3JlYXRlZFwiIHwgdHJhbnNsYXRlfX06IHt7c3Vic2NyaXB0aW9uLmNyZWF0ZWQudG9EYXRlKCkgfCBkYXRlOidkZC5NTS5ZWVlZJ319IDwvaDM+XG4gICAgICAgICAgICA8aDMgKm5nSWY9XCJzdWJzY3JpcHRpb24uZW5kZWRfYXRcIj57e1wiY29tbW9uLmVuZGVkX2F0XCIgfCB0cmFuc2xhdGV9fToge3tzdWJzY3JpcHRpb24uZW5kZWRfYXQudG9EYXRlKCkgfFxuICAgICAgICAgICAgICBkYXRlOidkZC5NTS5ZWVlZJ319PC9oMz5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdWJzY3JpcHRpb24uc3RhdHVzPT0nYWN0aXZlJ1wiPlxuICAgICAgICAgICAgICA8aDM+e3tcImNvbW1vbi5jdXJyZW50X3BlcmlvZF9zdGFydFwiIHwgdHJhbnNsYXRlfX06IHt7c3Vic2NyaXB0aW9uLmN1cnJlbnRfcGVyaW9kX3N0YXJ0LnRvRGF0ZSgpIHxcbiAgICAgICAgICAgICAgICBkYXRlOidkZC5NTS5ZWVlZJ319IDwvaDM+XG4gICAgICAgICAgICAgIDxoMz57e1wiY29tbW9uLmN1cnJlbnRfcGVyaW9kX2VuZFwiIHwgdHJhbnNsYXRlfX06IHt7c3Vic2NyaXB0aW9uLmN1cnJlbnRfcGVyaW9kX2VuZC50b0RhdGUoKSB8XG4gICAgICAgICAgICAgICAgZGF0ZTonZGQuTU0uWVlZWSd9fTwvaDM+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICA8aW9uLWJhZGdlICpuZ0lmPVwic3Vic2NyaXB0aW9uLnN0YXR1cz09J2FjdGl2ZSdcIiBjb2xvcj1cInN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIHt7XCJjb21tb24uYWN0aXZlXCIgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgIDwvaW9uLWJhZGdlPlxuICAgICAgICAgIDxpb24tYmFkZ2UgKm5nSWY9XCJzdWJzY3JpcHRpb24uc3RhdHVzPT0nY2FuY2VsZWQnXCIgY29sb3I9XCJkYW5nZXJcIj5cbiAgICAgICAgICAgIHt7XCJjb21tb24uY2FuY2VsZWRcIiB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgPC9pb24tYmFkZ2U+XG5cbiAgICAgICAgPC9pb24taXRlbT5cblxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyPlxuICAgICAgICA8aW9uLWl0ZW0gKm5nRm9yPVwibGV0IHN1YnNjcmlwdGlvbiBvZiBjbHViWydpbmFjdGl2ZVN1YnNjcmlwdGlvbnMnXVwiIGRldGFpbFxuICAgICAgICAgIChjbGljayk9XCJvcGVuVXJsKHN1YnNjcmlwdGlvbi5pbnZvaWNlc1swXS5pbnZvaWNlX3BkZilcIj5cbiAgICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgICAgPGgyPnt7c3Vic2NyaXB0aW9uLnByb2R1Y3QubmFtZX19PC9oMj5cbiAgICAgICAgICAgIDxoMz57e1wiY29tbW9uLmNyZWF0ZWRcIiB8IHRyYW5zbGF0ZX19OiB7e3N1YnNjcmlwdGlvbi5jcmVhdGVkLnRvRGF0ZSgpIHwgZGF0ZTonZGQuTU0uWVlZWSd9fSA8L2gzPlxuICAgICAgICAgICAgPGgzICpuZ0lmPVwic3Vic2NyaXB0aW9uLmVuZGVkX2F0XCI+e3tcImNvbW1vbi5lbmRlZF9hdFwiIHwgdHJhbnNsYXRlfX06IHt7c3Vic2NyaXB0aW9uLmVuZGVkX2F0LnRvRGF0ZSgpIHxcbiAgICAgICAgICAgICAgZGF0ZTonZGQuTU0uWVlZWSd9fTwvaDM+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3Vic2NyaXB0aW9uLnN0YXR1cz09J2FjdGl2ZSdcIj5cbiAgICAgICAgICAgICAgPGgzPnt7XCJjb21tb24uY3VycmVudF9wZXJpb2Rfc3RhcnRcIiB8IHRyYW5zbGF0ZX19OiB7e3N1YnNjcmlwdGlvbi5jdXJyZW50X3BlcmlvZF9zdGFydC50b0RhdGUoKSB8XG4gICAgICAgICAgICAgICAgZGF0ZTonZGQuTU0uWVlZWSd9fSA8L2gzPlxuICAgICAgICAgICAgICA8aDM+e3tcImNvbW1vbi5jdXJyZW50X3BlcmlvZF9lbmRcIiB8IHRyYW5zbGF0ZX19OiB7e3N1YnNjcmlwdGlvbi5jdXJyZW50X3BlcmlvZF9lbmQudG9EYXRlKCkgfFxuICAgICAgICAgICAgICAgIGRhdGU6J2RkLk1NLllZWVknfX08L2gzPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgPGlvbi1iYWRnZSAqbmdJZj1cInN1YnNjcmlwdGlvbi5zdGF0dXM9PSdhY3RpdmUnXCIgY29sb3I9XCJzdWNjZXNzXCI+XG4gICAgICAgICAgICB7e1wiY29tbW9uLmFjdGl2ZVwiIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICA8L2lvbi1iYWRnZT5cbiAgICAgICAgICA8aW9uLWJhZGdlICpuZ0lmPVwic3Vic2NyaXB0aW9uLnN0YXR1cz09J2NhbmNlbGVkJ1wiIGNvbG9yPVwiZGFuZ2VyXCI+XG4gICAgICAgICAgICB7e1wiY29tbW9uLmNhbmNlbGVkXCIgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgIDwvaW9uLWJhZGdlPlxuXG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2lvbi1saXN0PlxuXG4gICAgPCEtLVxuICAgIFxuICAgIDxpb24tbGlzdCAqbmdGb3I9XCJsZXQgc3Vic2NyaXB0aW9uIG9mIGNsdWJbJ3N1YnNjcmlwdGlvbnMnXVwiIFtpbnNldF09XCJ0cnVlXCI+XG4gICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICB7e3N1YnNjcmlwdGlvbi5wcm9kdWN0Lm5hbWV9fVxuICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG5cbiAgICAgIDxuZy1jb250YWluZXI+XG4gICAgICAgIDxpb24taXRlbT5cbiAgICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgICAgPGgzPnt7c3Vic2NyaXB0aW9uLnByb2R1Y3QuZGVzY3JpcHRpb259fTwvaDM+XG4gICAgICAgICAgICA8aDM+e3tcImNvbW1vbi5jcmVhdGVkXCIgfCB0cmFuc2xhdGV9fToge3tzdWJzY3JpcHRpb24uY3JlYXRlZC50b0RhdGUoKSB8IGRhdGU6J2RkLk1NLllZWVknfX0gPC9oMz5cbiAgICAgICAgICAgIDxoMyAqbmdJZj1cInN1YnNjcmlwdGlvbi5lbmRlZF9hdFwiPnt7XCJjb21tb24uZW5kZWRfYXRcIiB8IHRyYW5zbGF0ZX19OiB7e3N1YnNjcmlwdGlvbi5lbmRlZF9hdC50b0RhdGUoKSB8XG4gICAgICAgICAgICAgIGRhdGU6J2RkLk1NLllZWVknfX08L2gzPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN1YnNjcmlwdGlvbi5zdGF0dXM9PSdhY3RpdmUnXCI+XG4gICAgICAgICAgICAgIDxoMz57e1wiY29tbW9uLmN1cnJlbnRfcGVyaW9kX3N0YXJ0XCIgfCB0cmFuc2xhdGV9fToge3tzdWJzY3JpcHRpb24uY3VycmVudF9wZXJpb2Rfc3RhcnQudG9EYXRlKCkgfFxuICAgICAgICAgICAgICAgIGRhdGU6J2RkLk1NLllZWVknfX0gPC9oMz5cbiAgICAgICAgICAgICAgPGgzPnt7XCJjb21tb24uY3VycmVudF9wZXJpb2RfZW5kXCIgfCB0cmFuc2xhdGV9fToge3tzdWJzY3JpcHRpb24uY3VycmVudF9wZXJpb2RfZW5kLnRvRGF0ZSgpIHxcbiAgICAgICAgICAgICAgICBkYXRlOidkZC5NTS5ZWVlZJ319PC9oMz5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgIDxpb24tYmFkZ2UgKm5nSWY9XCJzdWJzY3JpcHRpb24uc3RhdHVzPT0nYWN0aXZlJ1wiIGNvbG9yPVwic3VjY2Vzc1wiPlxuICAgICAgICAgICAge3tcImNvbW1vbi5hY3RpdmVcIiB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgPC9pb24tYmFkZ2U+XG4gICAgICAgICAgPGlvbi1iYWRnZSAqbmdJZj1cInN1YnNjcmlwdGlvbi5zdGF0dXM9PSdjYW5jZWxlZCdcIiBjb2xvcj1cImRhbmdlclwiPlxuICAgICAgICAgICAge3tcImNvbW1vbi5jYW5jZWxlZFwiIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICA8L2lvbi1iYWRnZT5cblxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgIFxuICAgICAgICA8aW9uLWl0ZW0gKm5nRm9yPVwibGV0IGludm9pY2Ugb2Ygc3Vic2NyaXB0aW9uLmludm9pY2VzXCIgZGV0YWlsIChjbGljayk9XCJvcGVuVXJsKGludm9pY2UuaW52b2ljZV9wZGYpXCI+XG4gICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJkb2N1bWVudC10ZXh0LW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDxpb24tbGFiZWw+IFJlY2hudW5nIGFuc2VoZW5cbiAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICA8aW9uLWJhZGdlICpuZ0lmPVwiaW52b2ljZS5zdGF0dXM9PSdwYWlkJ1wiIGNvbG9yPVwic3VjY2Vzc1wiIHNsb3Q9XCJlbmRcIj5cbiAgICAgICAgICAgIHt7XCJjb21tb24ucGFpZFwiIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICA8L2lvbi1iYWRnZT5cbiAgICAgICAgPC9pb24taXRlbT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPC9pb24tbGlzdD5cbiAgICAtLT5cbiAgPC9uZy1jb250YWluZXI+XG5cblxuPC9pb24tY29udGVudD5cbjxuZy10ZW1wbGF0ZSAjbm9SZXF1ZXN0cz5cbiAgPCEtLSBZb3UgY2FuIHB1dCBhbnkgcGxhY2Vob2xkZXIgb3IgbWVzc2FnZSBoZXJlIGlmIG5lZWRlZCB3aGVuIHRoZXJlIGFyZSBubyByZXF1ZXN0cyAtLT5cbjwvbmctdGVtcGxhdGU+IiwgImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBBbGVydENvbnRyb2xsZXIsXG4gIE1vZGFsQ29udHJvbGxlcixcbiAgTmF2UGFyYW1zLFxuICBUb2FzdENvbnRyb2xsZXIsXG4gIElvbkl0ZW1TbGlkaW5nLFxufSBmcm9tIFwiQGlvbmljL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuaW1wb3J0IHtcbiAgQmVoYXZpb3JTdWJqZWN0LFxuICBPYnNlcnZhYmxlLFxuICBjYXRjaEVycm9yLFxuICBjb21iaW5lTGF0ZXN0LFxuICBkZWJvdW5jZVRpbWUsXG4gIGxhc3RWYWx1ZUZyb20sXG4gIG1hcCxcbiAgb2YsXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbiAgdGFwLFxufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFVzZXJQcm9maWxlU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlL3VzZXItcHJvZmlsZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBNZW1iZXJQYWdlIH0gZnJvbSBcIi4uL21lbWJlci9tZW1iZXIucGFnZVwiO1xuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gXCJzcmMvYXBwL21vZGVscy91c2VyXCI7XG5pbXBvcnQgeyBDbHViIH0gZnJvbSBcInNyYy9hcHAvbW9kZWxzL2NsdWJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLWNsdWItbWVtYmVyLWxpc3RcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NsdWItbWVtYmVyLWxpc3QucGFnZS5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2NsdWItbWVtYmVyLWxpc3QucGFnZS5zY3NzXCJdLFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIENsdWJNZW1iZXJMaXN0UGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dChcImNsdWJcIikgY2x1YjogYW55O1xuICBjbHViJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIGFsbG93RWRpdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGdyb3VwQXJyYXkgPSBbXTtcblxuICBjbHViQWRtaW5MaXN0JDogT2JzZXJ2YWJsZTxDbHViW10+O1xuXG4gIGNsdWJNZW1iZXJzJDogT2JzZXJ2YWJsZTxhbnlbXT47IC8vIE9ic2VydmFibGUgZm9yIHRoZSBmdWxsIGxpc3Qgb2YgbWVtYmVyc1xuICBmaWx0ZXJlZENsdWJNZW1iZXJzJDogT2JzZXJ2YWJsZTxhbnlbXT47IC8vIE9ic2VydmFibGUgZm9yIGZpbHRlcmVkIHJlc3VsdHNcbiAgc2VhcmNoVGVybSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7ICAvLyBJbml0aWFsaXplZCB3aXRoIGFuIGVtcHR5IHN0cmluZ1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsXG4gICAgcHJpdmF0ZSByZWFkb25seSBhbGVydEN0cmw6IEFsZXJ0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvYXN0Q3RybDogVG9hc3RDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXNlclByb2ZpbGVTZXJ2aWNlOiBVc2VyUHJvZmlsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBmYlNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFsZXJ0Q29udHJvbGxlcjogQWxlcnRDb250cm9sbGVyLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jbHViID0gdGhpcy5uYXZQYXJhbXMuZ2V0KFwiY2x1YlwiKTtcbiAgICBpZiAodGhpcy5jbHViLnJvbGVzICYmIHRoaXMuY2x1Yi5yb2xlcy5sZW5naHQgPiAwKSB7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbHViLnJvbGVzID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5jbHViJCA9IHRoaXMuZmJTZXJ2aWNlLmdldENsdWJSZWYodGhpcy5jbHViLmlkKTtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZUNsdWJNZW1iZXJzKCk7XG5cbiAgICB0aGlzLmNsdWJBZG1pbkxpc3QkID0gdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1YkFkbWluTGlzdCgpO1xuICB9XG5cblxuICBuZ09uRGVzdHJveSgpIHtcblxuICB9XG5cbiAgZWRpdCgpIHtcblxuICAgIGlmICh0aGlzLmFsbG93RWRpdCkge1xuICAgICAgdGhpcy5hbGxvd0VkaXQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbGxvd0VkaXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBhc3luYyBhZGRSb2xlKCkge1xuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydEN0cmwuY3JlYXRlKHtcbiAgICAgIGhlYWRlcjogXCJOZXVlIFJvbGxlIGhpbnp1ZsO8Z2VuXCIsXG4gICAgICBtZXNzYWdlOiBcIkVyc3RlbGxlIGVpbmUgbmV1ZSBSb2xsZSBmw7xyIGRlaW5lbiBWZXJlaW4uXCIsXG4gICAgICBpbnB1dHM6IFt7XG4gICAgICAgIG5hbWU6IFwicm9sZVwiLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiVm9yc3RhbmQsIFNwb3J0Y2hlZiwuLi5cIixcbiAgICAgICAgaWQ6IFwicm9sZVwiXG4gICAgICB9XSxcbiAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLmNhbmNlbFwiKSksXG4gICAgICAgICAgaGFuZGxlcjogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FuY2VsbGVkXCIsIGRhdGEpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcm9sZTogXCJjYW5jZWxcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLm9rXCIpKSxcbiAgICAgICAgICBoYW5kbGVyOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEucm9sZS50cmltKCkpIHsgIC8vIENoZWNrIGlmIHRoZSByb2xlIGlzIG5vdCBqdXN0IGVtcHR5IHNwYWNlc1xuICAgICAgICAgICAgICB0aGlzLmNsdWIkLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFrZSgxKVxuICAgICAgICAgICAgICApLnN1YnNjcmliZShjbHViID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2x1YiAmJiBjbHViLnJvbGVzKSB7XG4gICAgICAgICAgICAgICAgICBjbHViLnJvbGVzLnB1c2goZGF0YS5yb2xlKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZmJTZXJ2aWNlLmFkZENsdWJSb2xlKGNsdWIuaWQsIGNsdWIucm9sZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJvbGUgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGFkZCByb2xlXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmZiU2VydmljZS5hZGRDbHViUm9sZShjbHViLmlkLCBbZGF0YS5yb2xlXSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUm9sZSBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XG4gICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gYWRkIHJvbGVcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2x1YiBkYXRhIGlzIG1pc3Npbmcgb3IgaW52YWxpZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XG4gIH1cblxuICBhc3luYyBjaGFuZ2VSb2xlT2ZNZW1iZXIoc2xpZGluZ0l0ZW06IElvbkl0ZW1TbGlkaW5nLCBtZW1iZXIpIHtcbiAgICBzbGlkaW5nSXRlbS5jbG9zZU9wZW5lZCgpO1xuXG4gICAgbGV0IGFsZXJ0SW5wdXRzID0gW107XG4gICAgdGhpcy5jbHViJC5waXBlKFxuICAgICAgdGFrZSgxKVxuICAgICkuc3Vic2NyaWJlKGFzeW5jIGNsdWIgPT4ge1xuICAgICAgZm9yIChjb25zdCByb2xlIG9mIGNsdWIucm9sZXMpIHtcbiAgICAgICAgYWxlcnRJbnB1dHMucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IHJvbGUsXG4gICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICB2YWx1ZTogcm9sZSxcbiAgICAgICAgICBjaGVja2VkOiBtZW1iZXIucm9sZXMuZmluZChtZW1iZXJSb2xlID0+IG1lbWJlclJvbGUgPT0gcm9sZSlcbiAgICAgICAgfSwpXG4gICAgICB9XG5cblxuICAgICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgICAgICBoZWFkZXI6IFwiUm9sbGVuIHZvbiBNaXRnbGllZCBiZWFyYmVpdGVuXCIsXG4gICAgICAgIGlucHV0czogYWxlcnRJbnB1dHMsXG4gICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5jYW5jZWxcIikpLFxuICAgICAgICAgICAgaGFuZGxlcjogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYW5jZWxsZWRcIiwgZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm9sZTogXCJjYW5jZWxcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLm9rXCIpKSxcbiAgICAgICAgICAgIGhhbmRsZXI6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgIHRoaXMuZmJTZXJ2aWNlLmFkZENsdWJNZW1iZXJSb2xlKGNsdWIuaWQsIG1lbWJlci5pZCwgZGF0YSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSb2xlIGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gYWRkIHJvbGVcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICB9KTtcblxuICAgICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xuICAgIH0pXG4gIH1cblxuICBzZXRGaWx0ZXIocm9sZSkge1xuICAgIHRoaXMuaGFuZGxlU2VhcmNoKHsgZGV0YWlsOiB7IHZhbHVlOiByb2xlIH0gfSlcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZUNsdWJNZW1iZXIobWVtYmVyKSB7XG5cbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjbHViLW1lbWJlci1saXN0LmRlbGV0ZV9tZW1iZXJfX2NvbmZpcm1cIilcbiAgICAgICksXG4gICAgICBidXR0b25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICByb2xlOiBcImRlc3RydWN0aXZlXCIsXG4gICAgICAgICAgdGV4dDogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24ubm9cIikpLFxuICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmVpblwiKTtcbiAgICAgICAgICAgIHRoaXMucHJlc2VudENhbmNlbFRvYXN0KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLnllc1wiKSksXG4gICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZiU2VydmljZS5kZWxldGVDbHViZW1iZXIodGhpcy5jbHViLmlkLCBtZW1iZXIuaWQpO1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnRvYXN0QWN0aW9uU2F2ZWQoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgdGhpcy50b2FzdEFjdGlvbkVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgIF0sXG4gICAgfSk7XG4gICAgYWxlcnQucHJlc2VudCgpO1xuXG5cblxuICB9XG4gIGluaXRpYWxpemVDbHViTWVtYmVycygpIHtcbiAgICB0aGlzLmdyb3VwQXJyYXkgPSBbXTsgIC8vIEluaXRpYWxpemUgb3IgY2xlYXIgdGhlIGdyb3VwIGFycmF5XG5cbiAgICB0aGlzLmNsdWJNZW1iZXJzJCA9IHRoaXMuZmJTZXJ2aWNlLmdldENsdWJNZW1iZXJSZWZzKHRoaXMuY2x1Yi5pZCkucGlwZShcbiAgICAgIC8vIHRhcCgoKSA9PiBjb25zb2xlLmxvZyhcIkZldGNoaW5nIGNsdWIgbWVtYmVyc1wiKSksXG4gICAgICBzd2l0Y2hNYXAobWVtYmVycyA9PiB7XG4gICAgICAgIGlmIChtZW1iZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gY2x1YiBtZW1iZXJzIGZvdW5kLlwiKTtcbiAgICAgICAgICB0aGlzLmdyb3VwQXJyYXkgPSBbXTtcbiAgICAgICAgICByZXR1cm4gb2YoW10pOyAvLyBFbWl0IGFuIGVtcHR5IGFycmF5IHRvIGtlZXAgdGhlIG9ic2VydmFibGUgYWxpdmVcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9maWxlcyQgPSBtZW1iZXJzLm1hcChtZW1iZXIgPT5cbiAgICAgICAgICB0aGlzLnVzZXJQcm9maWxlU2VydmljZS5nZXRVc2VyUHJvZmlsZUJ5SWQobWVtYmVyLmlkKS5waXBlKFxuICAgICAgICAgICAgbWFwKHByb2ZpbGUgPT4gKHtcbiAgICAgICAgICAgICAgLi4ubWVtYmVyLCAvLyBTcHJlYWQgbWVtYmVyIHRvIHJldGFpbiBhbGwgb3JpZ2luYWwgYXR0cmlidXRlc1xuICAgICAgICAgICAgICAuLi5wcm9maWxlLCAvLyBTcHJlYWQgcHJvZmlsZSB0byBvdmVyd3JpdGUgYW5kIGFkZCBwcm9maWxlIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgZmlyc3ROYW1lOiBwcm9maWxlLmZpcnN0TmFtZSB8fCBcIlVua25vd25cIixcbiAgICAgICAgICAgICAgbGFzdE5hbWU6IHByb2ZpbGUubGFzdE5hbWUgfHwgXCJVbmtub3duXCIsXG4gICAgICAgICAgICAgIHJvbGVzOiBtZW1iZXIucm9sZXMgfHwgW10sXG4gICAgICAgICAgICAgIGRhdGVPZkJpcnRoOiBwcm9maWxlLmRhdGVPZkJpcnRoIHx8IG51bGwsXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKHtcbiAgICAgICAgICAgICAgLi4ubWVtYmVyLFxuICAgICAgICAgICAgICBmaXJzdE5hbWU6IFwiVW5rbm93blwiLFxuICAgICAgICAgICAgICBsYXN0TmFtZTogXCJVbmtub3duXCIsXG4gICAgICAgICAgICAgIGRhdGVPZkJpcnRoOiBudWxsLFxuICAgICAgICAgICAgICByb2xlczogbWVtYmVyLnJvbGVzIHx8IFtdIC8vIEVuc3VyZSByb2xlIG9yIG90aGVyIGF0dHJpYnV0ZXMgYXJlIGluY2x1ZGVkIGV2ZW4gaW4gZXJyb3JcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QocHJvZmlsZXMkKS5waXBlKFxuICAgICAgICAgIG1hcChwcm9maWxlcyA9PiBwcm9maWxlc1xuICAgICAgICAgICAgLmZpbHRlcihwcm9maWxlID0+IHByb2ZpbGUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmZpcnN0TmFtZS5sb2NhbGVDb21wYXJlKGIuZmlyc3ROYW1lKSlcbiAgICAgICAgICAgIC5tYXAocHJvZmlsZSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGdyb3VwQnlDaGFyID0gcHJvZmlsZS5maXJzdE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5ncm91cEFycmF5LmluY2x1ZGVzKGdyb3VwQnlDaGFyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXBBcnJheS5wdXNoKGdyb3VwQnlDaGFyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByb2ZpbGUsXG4gICAgICAgICAgICAgICAgZ3JvdXBCeTogZ3JvdXBCeUNoYXIsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgQ2x1YiBtZW1iZXJzOlwiLCBlcnIpO1xuICAgICAgICByZXR1cm4gb2YoW10pOyAvLyBFbWl0IGFuIGVtcHR5IGFycmF5IG9uIGVycm9yXG4gICAgICB9KSxcblxuICAgICk7XG5cblxuICAgIHRoaXMuZmlsdGVyZWRDbHViTWVtYmVycyQgPSBjb21iaW5lTGF0ZXN0KFt0aGlzLmNsdWJNZW1iZXJzJCwgdGhpcy5zZWFyY2hUZXJtXSkucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgzMDApLFxuICAgICAgbWFwKChbbWVtYmVycywgdGVybV0pID0+IHtcbiAgICAgICAgaWYgKCF0ZXJtKSByZXR1cm4gbWVtYmVycztcblxuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IG1lbWJlcnMuZmlsdGVyKG1lbWJlciA9PlxuICAgICAgICAgIG1lbWJlci5maXJzdE5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXJtLnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgICAgbWVtYmVyLmxhc3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGVybS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIG1lbWJlci5yb2xlcy5maW5kKHJvbGUgPT4gcm9sZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm0udG9Mb3dlckNhc2UoKSkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZDtcbiAgICAgIH0pLFxuICAgICAgbWFwKGZpbHRlcmVkID0+IHtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBncm91cEFycmF5XG4gICAgICAgIHRoaXMuZ3JvdXBBcnJheSA9IFtdO1xuICAgICAgICBmaWx0ZXJlZC5mb3JFYWNoKG1lbWJlciA9PiB7XG4gICAgICAgICAgY29uc3QgZ3JvdXBCeUNoYXIgPSBtZW1iZXIuZmlyc3ROYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIGlmICghdGhpcy5ncm91cEFycmF5LmluY2x1ZGVzKGdyb3VwQnlDaGFyKSkge1xuICAgICAgICAgICAgdGhpcy5ncm91cEFycmF5LnB1c2goZ3JvdXBCeUNoYXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZDtcbiAgICAgIH0pLFxuICAgICAgdGFwKGZpbHRlcmVkID0+IGNvbnNvbGUubG9nKFwiRmlsdGVyZWQgbWVtYmVyczpcIiwgZmlsdGVyZWQubGVuZ3RoKSksXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmaWx0ZXJpbmcgbWVtYmVyczpcIiwgZXJyKTtcbiAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaChldmVudDogYW55KSB7XG4gICAgY29uc3Qgc2VhcmNoVGVybSA9IGV2ZW50LmRldGFpbC52YWx1ZSB8fCAnJztcbiAgICBjb25zb2xlLmxvZygnSGFuZGxpbmcgU2VhcmNoIEV2ZW50OicsIHNlYXJjaFRlcm0pO1xuICAgIHRoaXMuc2VhcmNoVGVybS5uZXh0KHNlYXJjaFRlcm0udHJpbSgpKTsgLy8gVHJpbSBhbmQgdXBkYXRlIHRoZSBzZWFyY2ggdGVybVxuICB9XG5cbiAgaXNDbHViQWRtaW4oY2x1YkFkbWluTGlzdDogYW55W10sIGNsdWJJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNsdWJBZG1pbkxpc3QgJiYgY2x1YkFkbWluTGlzdC5zb21lKGNsdWIgPT4gY2x1Yi5pZCA9PT0gY2x1YklkKTtcbiAgfVxuXG4gIGFzeW5jIG9wZW5NZW1iZXIobWVtYmVyOiBQcm9maWxlKSB7XG4gICAgY29uc29sZS5sb2coXCJvcGVuTWVtYmVyXCIpO1xuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbEN0cmwuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogTWVtYmVyUGFnZSxcbiAgICAgIHByZXNlbnRpbmdFbGVtZW50OiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5nZXRUb3AoKSxcbiAgICAgIGNhbkRpc21pc3M6IHRydWUsXG4gICAgICBzaG93QmFja2Ryb3A6IHRydWUsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBkYXRhOiBtZW1iZXIsXG4gICAgICAgIGNsdWJJZDogdGhpcy5jbHViLmlkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBtb2RhbC5wcmVzZW50KCk7XG5cbiAgICBjb25zdCB7IGRhdGEsIHJvbGUgfSA9IGF3YWl0IG1vZGFsLm9uV2lsbERpc21pc3MoKTtcblxuICAgIGlmIChyb2xlID09PSBcImNvbmZpcm1cIikge1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHRvYXN0QWN0aW9uU2F2ZWQoKSB7XG4gICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uc3VjY2Vzc19fc2F2ZWRcIikpLFxuICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIixcbiAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICB9KTtcblxuICAgIGF3YWl0IHRvYXN0LnByZXNlbnQoKTtcbiAgfVxuICBhc3luYyBwcmVzZW50Q2FuY2VsVG9hc3QoKSB7XG4gICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KFwib25ib2FyZGluZy53YXJuaW5nX19hY3Rpb25fY2FuY2VsZWRcIilcbiAgICAgICksXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gIH1cbiAgYXN5bmMgdG9hc3RBY3Rpb25DYW5jZWxlZCgpIHtcbiAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDdHJsLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5hY3Rpb25fX2NhbmNlbGVkXCIpKSxcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgICBjb2xvcjogXCJkYW5nZXJcIixcbiAgICB9KTtcbiAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gIH1cblxuICBhc3luYyB0b2FzdEFjdGlvbkVycm9yKGVycm9yKSB7XG4gICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgICBjb2xvcjogXCJkYW5nZXJcIixcbiAgICB9KTtcblxuICAgIGF3YWl0IHRvYXN0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIGNsb3NlKCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKG51bGwsIFwiY2xvc2VcIik7XG4gIH1cblxuICBhc3luYyBjb25maXJtKCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKHRoaXMuY2x1YiwgXCJjb25maXJtXCIpO1xuICB9XG59XG4iLCAiPG5nLWNvbnRhaW5lciAqbmdJZj1cImNsdWIkIHwgYXN5bmMgYXMgY2x1YlwiPlxuICA8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxuICAgIDxpb24tdG9vbGJhcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbHViQWRtaW5MaXN0JCB8IGFzeW5jIGFzIGNsdWJBZG1pbkxpc3RcIj5cbiAgICAgICAgPGlvbi1idXR0b25zICpuZ0lmPVwiaXNDbHViQWRtaW4oY2x1YkFkbWluTGlzdCwgY2x1Yi5pZClcIiBzbG90PVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgPGlvbi1idXR0b24gKm5nSWY9XCIhYWxsb3dFZGl0XCIgKGNsaWNrKT1cImVkaXQoKVwiPnt7XCJjb21tb24uZWRpdFwiIHwgdHJhbnNsYXRlfX08L2lvbi1idXR0b24+XG4gICAgICAgICAgPGlvbi1idXR0b24gKm5nSWY9XCJhbGxvd0VkaXRcIiAoY2xpY2spPVwiZWRpdCgpXCI+e3tcImNvbW1vbi5kb25lXCIgfCB0cmFuc2xhdGV9fTwvaW9uLWJ1dHRvbj5cbiAgICAgICAgPC9pb24tYnV0dG9ucz5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPGlvbi10aXRsZT57e1wiY29tbW9uLm1lbWJlcnNcIiB8IHRyYW5zbGF0ZX19PC9pb24tdGl0bGU+XG4gICAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInByaW1hcnlcIj5cbiAgICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cImNsb3NlKClcIj57e1wiY29tbW9uLmNsb3NlXCIgfCB0cmFuc2xhdGV9fTwvaW9uLWJ1dHRvbj5cbiAgICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgPC9pb24tdG9vbGJhcj5cbiAgPC9pb24taGVhZGVyPlxuXG4gIDxpb24tY29udGVudCBbZnVsbHNjcmVlbl09XCJ0cnVlXCI+XG4gICAgPGlvbi1oZWFkZXIgY29sbGFwc2U9XCJjb25kZW5zZVwiPlxuICAgICAgPGlvbi10b29sYmFyPlxuICAgICAgICA8aW9uLXRpdGxlIHNpemU9XCJsYXJnZVwiPnt7XCJjb21tb24ubWVtYmVyc1wiIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgICAgIDwvaW9uLXRvb2xiYXI+XG4gICAgPC9pb24taGVhZGVyPlxuXG4gICAgPGlvbi1zZWFyY2hiYXIgW2RlYm91bmNlXT1cIjEwMDBcIiAoaW9uQ2hhbmdlKT1cImhhbmRsZVNlYXJjaCgkZXZlbnQpXCIgYW5pbWF0ZWQ9XCJ0cnVlXCIgc2VhcmNoLWljb249XCJzZWFyY2gtY2lyY2xlXCJcbiAgICAgIFt2YWx1ZV09XCJzZWFyY2hUZXJtLnZhbHVlXCIgcGxhY2Vob2xkZXI9J3t7XCJjb21tb24uc2VhcmNoZmllbGRcIiB8IHRyYW5zbGF0ZX19Jz48L2lvbi1zZWFyY2hiYXI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbHViQWRtaW5MaXN0JCB8IGFzeW5jIGFzIGNsdWJBZG1pbkxpc3RcIj5cbiAgICAgICAgPGlvbi1idXR0b24gKm5nSWY9XCJpc0NsdWJBZG1pbihjbHViQWRtaW5MaXN0LCBjbHViLmlkKVwiIHNoYXBlPVwicm91bmRcIiBzaXplPVwic21hbGxcIiAoY2xpY2spPVwiYWRkUm9sZSgpXCI+XG4gICAgICAgICAge3tcImNvbW1vbi5hZGRcIiB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJhZGQtY2lyY2xlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJzZXRGaWx0ZXIocm9sZSlcIiBzaGFwZT1cInJvdW5kXCIgc2l6ZT1cInNtYWxsXCIgKm5nRm9yPVwibGV0IHJvbGUgb2YgY2x1Ylsncm9sZXMnXVwiPlxuICAgICAgICB7e3JvbGV9fVxuICAgICAgPC9pb24tYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCIgKm5nSWY9XCJmaWx0ZXJlZENsdWJNZW1iZXJzJCB8IGFzeW5jIGFzIGNsdWJNZW1iZXJMaXN0XCI+XG4gICAgICA8aW9uLWl0ZW0tZ3JvdXA+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGdyb3VwQnkgb2YgZ3JvdXBBcnJheVwiPlxuICAgICAgICAgIDxpb24taXRlbS1kaXZpZGVyIGNvbG9yPVwibGlnaHRcIj5cbiAgICAgICAgICAgIDxpb24tbGFiZWw+IHt7Z3JvdXBCeX19IDwvaW9uLWxhYmVsPlxuICAgICAgICAgIDwvaW9uLWl0ZW0tZGl2aWRlcj5cblxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG1lbWJlciBvZiBjbHViTWVtYmVyTGlzdFwiPlxuXG4gICAgICAgICAgICA8aW9uLWl0ZW0tc2xpZGluZyAjaXRlbSAqbmdJZj1cIm1lbWJlci5ncm91cEJ5ID09IGdyb3VwQnlcIj5cblxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2x1YkFkbWluTGlzdCQgfCBhc3luYyBhcyBjbHViQWRtaW5MaXN0XCI+XG4gICAgICAgICAgICAgICAgPGlvbi1pdGVtLW9wdGlvbnMgKm5nSWY9XCJpc0NsdWJBZG1pbihjbHViQWRtaW5MaXN0LCBjbHViLmlkKVwiIHNpZGU9XCJlbmRcIj5cbiAgICAgICAgICAgICAgICAgIDxpb24taXRlbS1vcHRpb24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImNoYW5nZVJvbGVPZk1lbWJlcihpdGVtLCBtZW1iZXIpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cInByaWNldGFncy1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9ucz5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxpb24taXRlbSBkZXRhaWw9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGlvbi1pY29uICpuZ0lmPVwiYWxsb3dFZGl0PT10cnVlXCIgc2xvdD1cImljb24tb25seVwiIGNvbG9yPVwiZGFuZ2VyXCIgc2xvdD1cInN0YXJ0XCIgbmFtZT1cInRyYXNoXCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJkZWxldGVDbHViTWVtYmVyKG1lbWJlcilcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgIDxpb24tYXZhdGFyIChjbGljayk9XCJvcGVuTWVtYmVyKG1lbWJlcilcIiBzbG90PVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgKm5nSWY9XCIhbWVtYmVyLnByb2ZpbGVQaWN0dXJlXCIgYWx0PVwiU2lsaG91ZXR0ZSBvZiBhIHBlcnNvbidzIGhlYWRcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2ltZy9kZW1vcy9hdmF0YXIuc3ZnXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxpbWcgKm5nSWY9XCJtZW1iZXIucHJvZmlsZVBpY3R1cmVcIiBzcmM9XCJ7e21lbWJlcj8ucHJvZmlsZVBpY3R1cmV9fVwiIC8+XG4gICAgICAgICAgICAgICAgPC9pb24tYXZhdGFyPlxuICAgICAgICAgICAgICAgIDxpb24tbGFiZWwgY2xhc3M9XCJpb24tdGV4dC13cmFwXCIgKGNsaWNrKT1cIm9wZW5NZW1iZXIobWVtYmVyKVwiPnt7bWVtYmVyLmZpcnN0TmFtZX19XG4gICAgICAgICAgICAgICAgICB7e21lbWJlci5sYXN0TmFtZX19PC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNsdWJBZG1pbkxpc3QkIHwgYXN5bmMgYXMgY2x1YkFkbWluTGlzdFwiPlxuICAgICAgICAgICAgICAgICAgPGlvbi1sYWJlbCAoY2xpY2spPVwib3Blbk1lbWJlcihtZW1iZXIpXCIgKm5nSWY9XCJpc0NsdWJBZG1pbihjbHViQWRtaW5MaXN0LCBjbHViLmlkKVwiPlxuICAgICAgICAgICAgICAgICAgICB7e21lbWJlci5kYXRlT2ZCaXJ0aD8udG9EYXRlKCkgfCBkYXRlOidkZC5NTS5ZWVlZICd9fVxuICAgICAgICAgICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8aW9uLWxhYmVsIChjbGljayk9XCJvcGVuTWVtYmVyKG1lbWJlcilcIiAqbmdJZj1cIm1lbWJlci5yb2xlcy5sZW5ndGggPiAwXCIgc2xvdD1cImVuZFwiPlxuICAgICAgICAgICAgICAgICAgPGlvbi1iYWRnZSAqbmdGb3I9XCJsZXQgcm9sZSBvZiBtZW1iZXIucm9sZXNcIj57e3JvbGV9fTwvaW9uLWJhZGdlPlxuICAgICAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgICAgPC9pb24taXRlbS1zbGlkaW5nPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvaW9uLWl0ZW0tZ3JvdXA+XG4gICAgPC9pb24tbGlzdD5cbiAgPC9pb24tY29udGVudD5cbjwvbmctY29udGFpbmVyPlxuXG5cblxuPG5nLXRlbXBsYXRlICNsb2FkaW5nPlxuICA8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxuICAgIDxpb24tdG9vbGJhcj5cblxuICAgICAgPGlvbi10aXRsZT57e1wiY29tbW9uLm1lbWJlcnNcIiB8IHRyYW5zbGF0ZX19PC9pb24tdGl0bGU+XG4gICAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInByaW1hcnlcIj5cbiAgICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cImNsb3NlKClcIj57e1wiY29tbW9uLmNsb3NlXCIgfCB0cmFuc2xhdGV9fTwvaW9uLWJ1dHRvbj5cbiAgICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgPC9pb24tdG9vbGJhcj5cbiAgPC9pb24taGVhZGVyPlxuXG4gIDxpb24tY29udGVudCBbZnVsbHNjcmVlbl09XCJ0cnVlXCI+XG4gICAgPGlvbi1oZWFkZXIgY29sbGFwc2U9XCJjb25kZW5zZVwiPlxuICAgICAgPGlvbi10b29sYmFyPlxuICAgICAgICA8aW9uLXRpdGxlIHNpemU9XCJsYXJnZVwiPnt7XCJjb21tb24ubWVtYmVyc1wiIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgICAgIDwvaW9uLXRvb2xiYXI+XG4gICAgPC9pb24taGVhZGVyPlxuXG4gICAgPGlvbi1zZWFyY2hiYXIgW2RlYm91bmNlXT1cIjEwMDBcIiAoaW9uQ2hhbmdlKT1cImhhbmRsZVNlYXJjaCgkZXZlbnQpXCIgYW5pbWF0ZWQ9XCJ0cnVlXCIgc2VhcmNoLWljb249XCJzZWFyY2gtY2lyY2xlXCJcbiAgICAgIHBsYWNlaG9sZGVyPSd7e1wiY29tbW9uLnNlYXJjaGZpZWxkXCIgfCB0cmFuc2xhdGV9fSc+PC9pb24tc2VhcmNoYmFyPlxuXG4gICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCI+XG5cbiAgICAgIDxpb24taXRlbS1ncm91cD5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZ3JvdXBCeSBvZiBncm91cEFycmF5XCI+XG4gICAgICAgICAgPGlvbi1pdGVtLWRpdmlkZXIgY29sb3I9XCJsaWdodFwiPlxuICAgICAgICAgICAgPGlvbi1sYWJlbD4ge3tncm91cEJ5fX0gPC9pb24tbGFiZWw+XG4gICAgICAgICAgPC9pb24taXRlbS1kaXZpZGVyPlxuXG5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L2lvbi1pdGVtLWdyb3VwPlxuICAgIDwvaW9uLWxpc3Q+XG5cbiAgPC9pb24tY29udGVudD5cblxuXG48L25nLXRlbXBsYXRlPiIsICJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBBbGVydENvbnRyb2xsZXIsXG4gIE1vZGFsQ29udHJvbGxlcixcbiAgTmF2UGFyYW1zLFxuICBUb2FzdENvbnRyb2xsZXIsXG4gIElvbkxpc3QsXG59IGZyb20gXCJAaW9uaWMvYW5ndWxhclwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5pbXBvcnQge1xuICBCZWhhdmlvclN1YmplY3QsXG4gIE9ic2VydmFibGUsXG4gIFN1YnNjcmlwdGlvbixcbiAgY2F0Y2hFcnJvcixcbiAgY29tYmluZUxhdGVzdCxcbiAgZGVib3VuY2VUaW1lLFxuICBmaW5hbGl6ZSxcbiAgZm9ya0pvaW4sXG4gIGxhc3RWYWx1ZUZyb20sXG4gIG1hcCxcbiAgb2YsXG4gIHNoYXJlUmVwbGF5LFxuICBzdGFydFdpdGgsXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbiAgdGFwLFxufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFVzZXJQcm9maWxlU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlL3VzZXItcHJvZmlsZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBNZW1iZXJQYWdlIH0gZnJvbSBcIi4uL21lbWJlci9tZW1iZXIucGFnZVwiO1xuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gXCJzcmMvYXBwL21vZGVscy91c2VyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IENsdWIgfSBmcm9tIFwic3JjL2FwcC9tb2RlbHMvY2x1YlwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1jbHViLWFkbWluLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jbHViLWFkbWluLWxpc3QucGFnZS5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jbHViLWFkbWluLWxpc3QucGFnZS5zY3NzJ10sXG4gICAgc3RhbmRhbG9uZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgQ2x1YkFkbWluTGlzdFBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoXCJjbHViXCIpIGNsdWI6IGFueTtcbiAgY2x1YiQ6IE9ic2VydmFibGU8YW55PjtcblxuICBhbGxvd0VkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBncm91cEFycmF5ID0gW107XG5cbiAgY2x1YkFkbWluTGlzdCQ6IE9ic2VydmFibGU8Q2x1YltdPjtcblxuICBjbHViQWRtaW5zJDogT2JzZXJ2YWJsZTxhbnlbXT47IC8vIE9ic2VydmFibGUgZm9yIHRoZSBmdWxsIGxpc3Qgb2YgbWVtYmVyc1xuICBmaWx0ZXJlZENsdWJBZG1pbnMkOiBPYnNlcnZhYmxlPGFueVtdPjsgLy8gT2JzZXJ2YWJsZSBmb3IgZmlsdGVyZWQgcmVzdWx0c1xuICBzZWFyY2hUZXJtID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTsgIC8vIEluaXRpYWxpemVkIHdpdGggYW4gZW1wdHkgc3RyaW5nXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsXG4gICAgcHJpdmF0ZSByZWFkb25seSBhbGVydEN0cmw6IEFsZXJ0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvYXN0Q3RybDogVG9hc3RDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXNlclByb2ZpbGVTZXJ2aWNlOiBVc2VyUHJvZmlsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBmYlNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jbHViID0gdGhpcy5uYXZQYXJhbXMuZ2V0KFwiY2x1YlwiKTtcbiAgICBpZiAodGhpcy5jbHViLnJvbGVzICYmIHRoaXMuY2x1Yi5yb2xlcy5sZW5naHQgPiAwKSB7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbHViLnJvbGVzID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5jbHViJCA9IHRoaXMuZmJTZXJ2aWNlLmdldENsdWJSZWYodGhpcy5jbHViLmlkKTtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZUNsdWJBZG1pbnMoKTtcblxuICAgIHRoaXMuY2x1YkFkbWluTGlzdCQgPSB0aGlzLmZiU2VydmljZS5nZXRDbHViQWRtaW5MaXN0KCk7IFxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG5cblxuICB9XG5cbiAgZWRpdCgpIHtcblxuICAgIGlmICh0aGlzLmFsbG93RWRpdCkge1xuICAgICAgdGhpcy5hbGxvd0VkaXQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbGxvd0VkaXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGluaXRpYWxpemVDbHViQWRtaW5zKCkge1xuICAgIHRoaXMuZ3JvdXBBcnJheSA9IFtdOyAgLy8gSW5pdGlhbGl6ZSBvciBjbGVhciB0aGUgZ3JvdXAgYXJyYXlcbiAgXG4gICAgdGhpcy5jbHViQWRtaW5zJCA9IHRoaXMuZmJTZXJ2aWNlLmdldENsdWJBZG1pblJlZnModGhpcy5jbHViLmlkKS5waXBlKFxuICAgICAgLy8gdGFwKCgpID0+IGNvbnNvbGUubG9nKFwiRmV0Y2hpbmcgY2x1YiBhZG1pbnNcIikpLFxuICAgICAgc3dpdGNoTWFwKG1lbWJlcnMgPT4ge1xuICAgICAgICBpZiAobWVtYmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGNsdWIgYWRtaW5zIGZvdW5kLlwiKTtcbiAgICAgICAgICB0aGlzLmdyb3VwQXJyYXkgPSBbXTtcbiAgICAgICAgICByZXR1cm4gb2YoW10pOyAvLyBFbWl0IGFuIGVtcHR5IGFycmF5IHRvIGtlZXAgdGhlIG9ic2VydmFibGUgYWxpdmVcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9maWxlcyQgPSBtZW1iZXJzLm1hcChtZW1iZXIgPT5cbiAgICAgICAgICB0aGlzLnVzZXJQcm9maWxlU2VydmljZS5nZXRVc2VyUHJvZmlsZUJ5SWQobWVtYmVyLmlkKS5waXBlKFxuICAgICAgICAgICAgbWFwKHByb2ZpbGUgPT4gKHtcbiAgICAgICAgICAgICAgLi4ubWVtYmVyLCAvLyBTcHJlYWQgbWVtYmVyIHRvIHJldGFpbiBhbGwgb3JpZ2luYWwgYXR0cmlidXRlc1xuICAgICAgICAgICAgICAuLi5wcm9maWxlLCAvLyBTcHJlYWQgcHJvZmlsZSB0byBvdmVyd3JpdGUgYW5kIGFkZCBwcm9maWxlIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgZmlyc3ROYW1lOiBwcm9maWxlLmZpcnN0TmFtZSB8fCBcIlVua25vd25cIixcbiAgICAgICAgICAgICAgbGFzdE5hbWU6IHByb2ZpbGUubGFzdE5hbWUgfHwgXCJVbmtub3duXCIsXG4gICAgICAgICAgICAgIHJvbGVzOiBtZW1iZXIucm9sZXMgfHwgIFtdXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKHsgXG4gICAgICAgICAgICAgIC4uLm1lbWJlciwgXG4gICAgICAgICAgICAgIGZpcnN0TmFtZTogXCJVbmtub3duXCIsIFxuICAgICAgICAgICAgICBsYXN0TmFtZTogXCJVbmtub3duXCIsIFxuICAgICAgICAgICAgICByb2xlczogbWVtYmVyLnJvbGVzIHx8ICBbXSAvLyBFbnN1cmUgcm9sZSBvciBvdGhlciBhdHRyaWJ1dGVzIGFyZSBpbmNsdWRlZCBldmVuIGluIGVycm9yXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KHByb2ZpbGVzJCkucGlwZShcbiAgICAgICAgICBtYXAocHJvZmlsZXMgPT4gcHJvZmlsZXNcbiAgICAgICAgICAgIC5maWx0ZXIocHJvZmlsZSA9PiBwcm9maWxlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5maXJzdE5hbWUubG9jYWxlQ29tcGFyZShiLmZpcnN0TmFtZSkpXG4gICAgICAgICAgICAubWFwKHByb2ZpbGUgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBncm91cEJ5Q2hhciA9IHByb2ZpbGUuZmlyc3ROYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICBpZiAoIXRoaXMuZ3JvdXBBcnJheS5pbmNsdWRlcyhncm91cEJ5Q2hhcikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwQXJyYXkucHVzaChncm91cEJ5Q2hhcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcm9maWxlLFxuICAgICAgICAgICAgICAgIGdyb3VwQnk6IGdyb3VwQnlDaGFyLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIENsdWIgYWRtaW5zOlwiLCBlcnIpO1xuICAgICAgICByZXR1cm4gb2YoW10pOyAvLyBFbWl0IGFuIGVtcHR5IGFycmF5IG9uIGVycm9yXG4gICAgICB9KSxcbiAgICApO1xuICBcbiAgICB0aGlzLmZpbHRlcmVkQ2x1YkFkbWlucyQgPSBjb21iaW5lTGF0ZXN0KFt0aGlzLmNsdWJBZG1pbnMkLCB0aGlzLnNlYXJjaFRlcm1dKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDMwMCksXG4gICAgICBtYXAoKFthZG1pbnMsIHRlcm1dKSA9PiB7XG4gICAgICAgIGlmICghdGVybSkgcmV0dXJuIGFkbWlucztcbiAgXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gYWRtaW5zLmZpbHRlcihhZG1pbiA9PlxuICAgICAgICAgIGFkbWluLmZpcnN0TmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm0udG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICBhZG1pbi5sYXN0TmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm0udG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICBhZG1pbi5yb2xlcy5maW5kKHJvbGU9PnJvbGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXJtLnRvTG93ZXJDYXNlKCkpKVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZmlsdGVyZWQ7XG4gICAgICB9KSxcbiAgICAgIG1hcChmaWx0ZXJlZD0+e1xuICAgICAgICAvLyBVcGRhdGUgdGhlIGdyb3VwQXJyYXlcbiAgICAgICAgdGhpcy5ncm91cEFycmF5ID0gW107XG4gICAgICAgIGZpbHRlcmVkLmZvckVhY2goYWRtaW4gPT4ge1xuICAgICAgICAgIGNvbnN0IGdyb3VwQnlDaGFyID0gYWRtaW4uZmlyc3ROYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIGlmICghdGhpcy5ncm91cEFycmF5LmluY2x1ZGVzKGdyb3VwQnlDaGFyKSkge1xuICAgICAgICAgICAgdGhpcy5ncm91cEFycmF5LnB1c2goZ3JvdXBCeUNoYXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZDtcbiAgICAgIH0pLFxuICAgICAgdGFwKGZpbHRlcmVkID0+IGNvbnNvbGUubG9nKFwiRmlsdGVyZWQgYWRtaW5zOlwiLCBmaWx0ZXJlZC5sZW5ndGgpKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZpbHRlcmluZyBhZG1pbnM6XCIsIGVycik7XG4gICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbiAgXG4gIGhhbmRsZVNlYXJjaChldmVudDogYW55KSB7XG4gICAgY29uc3Qgc2VhcmNoVGVybSA9IGV2ZW50LmRldGFpbC52YWx1ZSB8fCAnJztcbiAgICBjb25zb2xlLmxvZygnSGFuZGxpbmcgU2VhcmNoIEV2ZW50OicsIHNlYXJjaFRlcm0pO1xuICAgIHRoaXMuc2VhcmNoVGVybS5uZXh0KHNlYXJjaFRlcm0udHJpbSgpKTsgLy8gVHJpbSBhbmQgdXBkYXRlIHRoZSBzZWFyY2ggdGVybVxuICB9XG5cblxuICBpc0NsdWJBZG1pbihjbHViQWRtaW5MaXN0OiBhbnlbXSwgY2x1YklkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY2x1YkFkbWluTGlzdCAmJiBjbHViQWRtaW5MaXN0LnNvbWUoY2x1YiA9PiBjbHViLmlkID09PSBjbHViSWQpO1xuICB9XG5cbiAgYWRkQWRtaW5pc3RyYXRvclRvQ2x1YigpIHtcbiAgICBpZiAoIXRoaXMuY2x1YiB8fCAhdGhpcy5jbHViLmlkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdObyB2YWxpZCBjbHViIG9yIGNsdWIgcmVmZXJlbmNlIGZvdW5kLicpO1xuICAgICAgcmV0dXJuOyAvLyBFeGl0IGlmIG5vIHZhbGlkIGNsdWIgSUQgaXMgZm91bmRcbiAgICB9XG4gIFxuICAgIC8vIENvbWJpbmUgdGhlIGZldGNoaW5nIG9mIGNsdWIgbWVtYmVycyBhbmQgY3VycmVudCBjbHViIGFkbWluc1xuICAgIGNvbnN0IGZldGNoQ2x1YkFuZEFkbWlucyQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuZmJTZXJ2aWNlLmdldENsdWJNZW1iZXJSZWZzKHRoaXMuY2x1Yi5pZCksXG4gICAgICB0aGlzLmNsdWJBZG1pbnMkXG4gICAgXSkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoKFttZW1iZXJzLCBjbHViQWRtaW5zXSkgPT4ge1xuICAgICAgICBpZiAobWVtYmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTm8gY2x1YiBtZW1iZXJzIGZvdW5kLicpO1xuICAgICAgICAgIHJldHVybiBvZihbXSk7IC8vIFJldHVybiBlbXB0eSBhcnJheSBpZiBubyBtZW1iZXJzXG4gICAgICAgIH1cbiAgXG4gICAgICAgIGNvbnN0IHByb2ZpbGVzJCA9IG1lbWJlcnMubWFwKG1lbWJlciA9PlxuICAgICAgICAgIHRoaXMudXNlclByb2ZpbGVTZXJ2aWNlLmdldFVzZXJQcm9maWxlQnlJZChtZW1iZXIuaWQpLnBpcGUoXG4gICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKHsgLi4ubWVtYmVyLCBmaXJzdE5hbWU6ICdVbmtub3duJywgbGFzdE5hbWU6ICdVbmtub3duJyB9KSkgLy8gUHJvdmlkZSBmYWxsYmFjayBkYXRhXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICBcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QocHJvZmlsZXMkKS5waXBlKFxuICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgbWFwKHByb2ZpbGVzID0+IHByb2ZpbGVzLmZpbHRlcihwcm9maWxlID0+IHByb2ZpbGUgIT09IHVuZGVmaW5lZCkpLFxuICAgICAgICAgIG1hcChwcm9maWxlcyA9PiB0aGlzLmZpbHRlck5ld0FkbWlucyhwcm9maWxlcywgY2x1YkFkbWlucykpLFxuICAgICAgICAgIG1hcChmaWx0ZXJlZE1lbWJlcnMgPT4gdGhpcy5wcmVwYXJlTWVtYmVyU2VsZWN0T3B0aW9ucyhmaWx0ZXJlZE1lbWJlcnMpKVxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsdWIgYW5kIGNsdWIgYWRtaW5zOicsIGVycik7XG4gICAgICAgIHJldHVybiBvZihbXSk7IC8vIEhhbmRsZSBlcnJvcnMgYnkgcmV0dXJuaW5nIGFuIGVtcHR5IGFycmF5XG4gICAgICB9KVxuICAgICk7XG4gIFxuICAgIGZldGNoQ2x1YkFuZEFkbWlucyQuc3Vic2NyaWJlKGFzeW5jIGFkbWluU2VsZWN0ID0+IHtcbiAgICAgIGlmIChhZG1pblNlbGVjdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc2hvd0FkZEFkbWluQWxlcnQoYWRtaW5TZWxlY3QpOyAvLyBQcmVzZW50IHRoZSBhbGVydCB3aXRoIGFkbWluIHNlbGVjdGlvbnNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBuZXcgYWRtaW5pc3RyYXRvcnMgYXZhaWxhYmxlIHRvIGFkZC4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBcbiAgZmlsdGVyTmV3QWRtaW5zKHByb2ZpbGVzLCBjbHViQWRtaW5zKSB7XG4gICAgcmV0dXJuIHByb2ZpbGVzLmZpbHRlcihtZW1iZXIgPT5cbiAgICAgICFjbHViQWRtaW5zLnNvbWUoYWRtaW4gPT4gYWRtaW4uaWQgPT09IG1lbWJlci5pZClcbiAgICApO1xuICB9XG5cbiAgcHJlcGFyZU1lbWJlclNlbGVjdE9wdGlvbnMoZmlsdGVyZWRNZW1iZXJzKSB7XG4gICAgLy8gU29ydCBtZW1iZXJzIGFscGhhYmV0aWNhbGx5IGJ5IGZpcnN0TmFtZSwgdGhlbiBieSBsYXN0TmFtZVxuICAgIGNvbnN0IHNvcnRlZE1lbWJlcnMgPSBmaWx0ZXJlZE1lbWJlcnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBuYW1lQSA9IGAke2EuZmlyc3ROYW1lfSAke2EubGFzdE5hbWV9YC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBuYW1lQiA9IGAke2IuZmlyc3ROYW1lfSAke2IubGFzdE5hbWV9YC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbmFtZUEubG9jYWxlQ29tcGFyZShuYW1lQik7XG4gICAgfSk7XG5cbiAgICAvLyBNYXAgc29ydGVkIG1lbWJlcnMgdG8gY2hlY2tib3ggb3B0aW9uc1xuICAgIHJldHVybiBzb3J0ZWRNZW1iZXJzLm1hcChtZW1iZXIgPT4gKHtcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgbmFtZTogbWVtYmVyLmlkLFxuICAgICAgICBsYWJlbDogYCR7bWVtYmVyLmZpcnN0TmFtZX0gJHttZW1iZXIubGFzdE5hbWV9YCxcbiAgICAgICAgdmFsdWU6IG1lbWJlci5pZCxcbiAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgfSkpO1xuICB9XG5cbiAgYXN5bmMgc2hvd0FkZEFkbWluQWxlcnQoYWRtaW5TZWxlY3QpIHtcbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XG4gICAgICBoZWFkZXI6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLmFkZEFkbWluaXN0cmF0b3JcIikpLFxuICAgICAgaW5wdXRzOiBhZG1pblNlbGVjdCxcbiAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLmNhbmNlbFwiKSksXG4gICAgICAgICAgcm9sZTogJ2NhbmNlbCcsXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4gY29uc29sZS5sb2coJ0NhbmNlbCBjbGlja2VkJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5hZGRcIikpLFxuICAgICAgICAgIGhhbmRsZXI6IChzZWxlY3RlZEFkbWlucykgPT4ge1xuICAgICAgICAgICAgc2VsZWN0ZWRBZG1pbnMuZm9yRWFjaChhZG1pbklkID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5hcHByb3ZlQ2x1YkFkbWluUmVxdWVzdCh0aGlzLmNsdWIuaWQsIGFkbWluSWQpOyAvLyBBZGp1c3RlZCB0byBhZG1pbi1zcGVjaWZpYyBhcHByb3ZhbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgYXBwcm92ZUNsdWJBZG1pblJlcXVlc3QoY2x1YklkLCBhZG1pbklkKSB7XG4gICAgYXdhaXQgdGhpcy5mYlNlcnZpY2UuYWRkQ2x1YkFkbWluKGNsdWJJZCwgYWRtaW5JZCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnRvYXN0QWN0aW9uU2F2ZWQoKTtcbiAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdGhpcy50b2FzdEFjdGlvbkVycm9yKGVycik7XG4gICAgICB9KTtcbiAgfVxuICBhc3luYyBkZWxldGVDbHViQWRtaW4oIG1lbWJlcil7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuZmJTZXJ2aWNlLmRlbGV0ZUNsdWJBZG1pbih0aGlzLmNsdWIuaWQsIG1lbWJlci5pZCk7XG4gICAgICBhd2FpdCB0aGlzLnRvYXN0QWN0aW9uU2F2ZWQoKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgdGhpcy50b2FzdEFjdGlvbkVycm9yKGUpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9wZW5NZW1iZXIobWVtYmVyOiBQcm9maWxlKSB7XG4gICAgY29uc29sZS5sb2coXCJvcGVuTWVtYmVyXCIpO1xuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbEN0cmwuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogTWVtYmVyUGFnZSxcbiAgICAgIHByZXNlbnRpbmdFbGVtZW50OiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5nZXRUb3AoKSxcbiAgICAgIGNhbkRpc21pc3M6IHRydWUsXG4gICAgICBzaG93QmFja2Ryb3A6IHRydWUsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBkYXRhOiBtZW1iZXIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIG1vZGFsLnByZXNlbnQoKTtcblxuICAgIGNvbnN0IHsgZGF0YSwgcm9sZSB9ID0gYXdhaXQgbW9kYWwub25XaWxsRGlzbWlzcygpO1xuXG4gICAgaWYgKHJvbGUgPT09IFwiY29uZmlybVwiKSB7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgdG9hc3RBY3Rpb25TYXZlZCgpIHtcbiAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDdHJsLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5zdWNjZXNzX19zYXZlZFwiKSksXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwic3VjY2Vzc1wiLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgdG9hc3QucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgdG9hc3RBY3Rpb25DYW5jZWxlZCgpIHtcbiAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDdHJsLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5hY3Rpb25fX2NhbmNlbGVkXCIpKSxcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgICBjb2xvcjogXCJkYW5nZXJcIixcbiAgICB9KTtcbiAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gIH1cblxuICBhc3luYyB0b2FzdEFjdGlvbkVycm9yKGVycm9yKSB7XG4gICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgICBjb2xvcjogXCJkYW5nZXJcIixcbiAgICB9KTtcblxuICAgIGF3YWl0IHRvYXN0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIGNsb3NlKCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKG51bGwsIFwiY2xvc2VcIik7XG4gIH1cblxuICBhc3luYyBjb25maXJtKCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKHRoaXMuY2x1YiwgXCJjb25maXJtXCIpO1xuICB9XG59XG4iLCAiPG5nLWNvbnRhaW5lciAqbmdJZj1cImNsdWIkIHwgYXN5bmMgYXMgY2x1YlwiPlxuICA8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxuICAgIDxpb24tdG9vbGJhcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbHViQWRtaW5MaXN0JCB8IGFzeW5jIGFzIGNsdWJBZG1pbkxpc3RcIj5cbiAgICAgICAgPGlvbi1idXR0b25zICpuZ0lmPVwiaXNDbHViQWRtaW4oY2x1YkFkbWluTGlzdCwgdGhpcy5jbHViLmlkKVwiIHNsb3Q9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICA8aW9uLWJ1dHRvbiAqbmdJZj1cIiFhbGxvd0VkaXRcIiAoY2xpY2spPVwiZWRpdCgpXCI+e3tcImNvbW1vbi5lZGl0XCIgfCB0cmFuc2xhdGV9fTwvaW9uLWJ1dHRvbj5cbiAgICAgICAgICA8aW9uLWJ1dHRvbiAqbmdJZj1cImFsbG93RWRpdFwiIChjbGljayk9XCJlZGl0KClcIj57e1wiY29tbW9uLmRvbmVcIiB8IHRyYW5zbGF0ZX19PC9pb24tYnV0dG9uPlxuICAgICAgICA8L2lvbi1idXR0b25zPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8aW9uLXRpdGxlPnt7XCJjb21tb24uYWRtaW5zXCIgfCB0cmFuc2xhdGV9fTwvaW9uLXRpdGxlPlxuICAgICAgPGlvbi1idXR0b25zIHNsb3Q9XCJwcmltYXJ5XCI+XG4gICAgICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJjbG9zZSgpXCI+e3tcImNvbW1vbi5jbG9zZVwiIHwgdHJhbnNsYXRlfX08L2lvbi1idXR0b24+XG4gICAgICA8L2lvbi1idXR0b25zPlxuICAgIDwvaW9uLXRvb2xiYXI+XG4gIDwvaW9uLWhlYWRlcj5cblxuICA8aW9uLWNvbnRlbnQgW2Z1bGxzY3JlZW5dPVwidHJ1ZVwiPlxuICAgIDxpb24taGVhZGVyIGNvbGxhcHNlPVwiY29uZGVuc2VcIj5cbiAgICAgIDxpb24tdG9vbGJhcj5cbiAgICAgICAgPGlvbi10aXRsZSBzaXplPVwibGFyZ2VcIj57e1wiY29tbW9uLmFkbWluc1wiIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgICAgIDwvaW9uLXRvb2xiYXI+XG4gICAgPC9pb24taGVhZGVyPlxuXG4gICAgPGlvbi1zZWFyY2hiYXIgW2RlYm91bmNlXT1cIjEwMDBcIiAoaW9uQ2hhbmdlKT1cImhhbmRsZVNlYXJjaCgkZXZlbnQpXCIgYW5pbWF0ZWQ9XCJ0cnVlXCIgc2VhcmNoLWljb249XCJzZWFyY2gtY2lyY2xlXCJcbiAgICAgIHBsYWNlaG9sZGVyPSd7e1wiY29tbW9uLnNlYXJjaGZpZWxkXCIgfCB0cmFuc2xhdGV9fSc+PC9pb24tc2VhcmNoYmFyPlxuXG4gICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCIgKm5nSWY9XCJmaWx0ZXJlZENsdWJBZG1pbnMkIHwgYXN5bmMgYXMgY2x1YkFkbWluTGlzdFwiPlxuICAgICAgPGlvbi1pdGVtLWdyb3VwPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBncm91cEJ5IG9mIGdyb3VwQXJyYXlcIj5cbiAgICAgICAgICA8aW9uLWl0ZW0tZGl2aWRlciBjb2xvcj1cImxpZ2h0XCI+XG4gICAgICAgICAgICA8aW9uLWxhYmVsPiB7e2dyb3VwQnl9fSA8L2lvbi1sYWJlbD5cbiAgICAgICAgICA8L2lvbi1pdGVtLWRpdmlkZXI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWVtYmVyIG9mIGNsdWJBZG1pbkxpc3RcIj5cblxuICAgICAgICAgICAgPGlvbi1pdGVtLXNsaWRpbmcgKm5nSWY9XCJtZW1iZXIuZ3JvdXBCeSA9PSBncm91cEJ5XCI+XG4gICAgICAgICAgICAgIDxpb24taXRlbSBkZXRhaWw9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGlvbi1pY29uICpuZ0lmPVwiYWxsb3dFZGl0PT10cnVlXCIgc2xvdD1cImljb24tb25seVwiIGNvbG9yPVwiZGFuZ2VyXCIgc2xvdD1cInN0YXJ0XCIgbmFtZT1cInRyYXNoXCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJkZWxldGVDbHViQWRtaW4obWVtYmVyKVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgICAgPGlvbi1hdmF0YXIgc2xvdD1cInN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nICpuZ0lmPVwiIW1lbWJlci5wcm9maWxlUGljdHVyZVwiIGFsdD1cIlNpbGhvdWV0dGUgb2YgYSBwZXJzb24ncyBoZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9pbWcvZGVtb3MvYXZhdGFyLnN2Z1wiIC8+XG4gICAgICAgICAgICAgICAgICA8aW1nICpuZ0lmPVwibWVtYmVyLnByb2ZpbGVQaWN0dXJlXCIgc3JjPVwie3ttZW1iZXI/LnByb2ZpbGVQaWN0dXJlfX1cIiAvPlxuICAgICAgICAgICAgICAgIDwvaW9uLWF2YXRhcj5cbiAgICAgICAgICAgICAgICA8aW9uLWxhYmVsIGNsYXNzPVwiaW9uLXRleHQtd3JhcFwiIChjbGljayk9XCJvcGVuTWVtYmVyKG1lbWJlcilcIj5cbiAgICAgICAgICAgICAgICAgIHt7bWVtYmVyLmZpcnN0TmFtZX19IHt7bWVtYmVyLmxhc3ROYW1lfX1cbiAgICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICAgIDwvaW9uLWl0ZW0tc2xpZGluZz5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L2lvbi1pdGVtLWdyb3VwPlxuICAgIDwvaW9uLWxpc3Q+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2x1YkFkbWluTGlzdCQgfCBhc3luYyBhcyBjbHViQWRtaW5MaXN0XCI+XG4gICAgICA8aW9uLWZhYiAqbmdJZj1cImlzQ2x1YkFkbWluKGNsdWJBZG1pbkxpc3QsIGNsdWIuaWQpXCIgdmVydGljYWw9XCJib3R0b21cIiBob3Jpem9udGFsPVwiZW5kXCIgc2xvdD1cImZpeGVkXCI+XG4gICAgICAgIDxpb24tZmFiLWJ1dHRvbiAoY2xpY2spPVwiYWRkQWRtaW5pc3RyYXRvclRvQ2x1YigpXCI+XG4gICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJhZGQtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDwvaW9uLWZhYi1idXR0b24+XG4gICAgICA8L2lvbi1mYWI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvaW9uLWNvbnRlbnQ+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICNsb2FkaW5nPlxuICA8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxuICAgIDxpb24tdG9vbGJhcj5cbiAgICAgIDxpb24tdGl0bGU+e3tcImNvbW1vbi5hZG1pbnNcIiB8IHRyYW5zbGF0ZX19PC9pb24tdGl0bGU+XG4gICAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInByaW1hcnlcIj5cbiAgICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cImNsb3NlKClcIj57e1wiY29tbW9uLmNsb3NlXCIgfCB0cmFuc2xhdGV9fTwvaW9uLWJ1dHRvbj5cbiAgICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgPC9pb24tdG9vbGJhcj5cbiAgPC9pb24taGVhZGVyPlxuXG4gIDxpb24tY29udGVudCBbZnVsbHNjcmVlbl09XCJ0cnVlXCI+XG4gICAgPGlvbi1oZWFkZXIgY29sbGFwc2U9XCJjb25kZW5zZVwiPlxuICAgICAgPGlvbi10b29sYmFyPlxuICAgICAgICA8aW9uLXRpdGxlIHNpemU9XCJsYXJnZVwiPnt7XCJjb21tb24uYWRtaW5zXCIgfCB0cmFuc2xhdGV9fTwvaW9uLXRpdGxlPlxuICAgICAgPC9pb24tdG9vbGJhcj5cbiAgICA8L2lvbi1oZWFkZXI+XG5cbiAgICA8aW9uLXNlYXJjaGJhciBbZGVib3VuY2VdPVwiMTAwMFwiIChpb25DaGFuZ2UpPVwiaGFuZGxlU2VhcmNoKCRldmVudClcIiBhbmltYXRlZD1cInRydWVcIiBzZWFyY2gtaWNvbj1cInNlYXJjaC1jaXJjbGVcIlxuICAgICAgcGxhY2Vob2xkZXI9J3t7XCJjb21tb24uc2VhcmNoZmllbGRcIiB8IHRyYW5zbGF0ZX19Jz48L2lvbi1zZWFyY2hiYXI+XG5cbiAgICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIj5cbiAgICAgIDxpb24taXRlbS1ncm91cD5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZ3JvdXBCeSBvZiBncm91cEFycmF5XCI+XG4gICAgICAgICAgPGlvbi1pdGVtLWRpdmlkZXIgY29sb3I9XCJsaWdodFwiPlxuICAgICAgICAgICAgPGlvbi1sYWJlbD4ge3tncm91cEJ5fX0gPC9pb24tbGFiZWw+XG4gICAgICAgICAgPC9pb24taXRlbS1kaXZpZGVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvaW9uLWl0ZW0tZ3JvdXA+XG4gICAgPC9pb24tbGlzdD5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbHViQWRtaW5MaXN0JCB8IGFzeW5jIGFzIGNsdWJBZG1pbkxpc3RcIj5cbiAgICAgIDxpb24tZmFiICpuZ0lmPVwiY2x1YkFkbWluTGlzdC5sZW5ndGggPiAwXCIgdmVydGljYWw9XCJib3R0b21cIiBob3Jpem9udGFsPVwiZW5kXCIgc2xvdD1cImZpeGVkXCI+XG4gICAgICAgIDxpb24tZmFiLWJ1dHRvbiAoY2xpY2spPVwiYWRkQWRtaW5pc3RyYXRvclRvQ2x1YigpXCI+XG4gICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJhZGQtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDwvaW9uLWZhYi1idXR0b24+XG4gICAgICA8L2lvbi1mYWI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvaW9uLWNvbnRlbnQ+XG48L25nLXRlbXBsYXRlPiIsICJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsQ29udHJvbGxlciwgVG9hc3RDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgSW9uUm91dGVyT3V0bGV0LCBOYXZQYXJhbXMgfSBmcm9tICdAaW9uaWMvYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgbGFzdFZhbHVlRnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVGVhbSB9IGZyb20gJ3NyYy9hcHAvbW9kZWxzL3RlYW0nO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlJztcbmltcG9ydCB7IFRlYW1QYWdlIH0gZnJvbSAnLi4vdGVhbS90ZWFtLWRldGFpbC90ZWFtLnBhZ2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgQ2x1YiB9IGZyb20gJ3NyYy9hcHAvbW9kZWxzL2NsdWInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1jbHViLXRlYW0tbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NsdWItdGVhbS1saXN0LnBhZ2UuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vY2x1Yi10ZWFtLWxpc3QucGFnZS5zY3NzJ10sXG4gICAgc3RhbmRhbG9uZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgQ2x1YlRlYW1MaXN0UGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dChcImNsdWJJZFwiKSBjbHViSWQ6IGFueTtcbiAgXG4gIHRlYW1MaXN0JDogT2JzZXJ2YWJsZTxUZWFtW10+O1xuICBjbHViJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBjbHViQWRtaW5MaXN0JDogT2JzZXJ2YWJsZTxDbHViW10+O1xuICBcbiAgcHVibGljIGFsZXJ0QnV0dG9uc0FkZFRlYW0gPSBbXTtcbiAgcHVibGljIGFsZXJ0SW5wdXRzQWRkVGVhbSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmJTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSB0b2FzdENvbnRyb2xsZXI6IFRvYXN0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vZGFsQ3RybDogTW9kYWxDb250cm9sbGVyLFxuICAgIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcyxcbiAgKSB7XG4gICAgdGhpcy5jbHViSWQgPSAgdGhpcy5uYXZQYXJhbXMuZ2V0KFwiY2x1YklkXCIpO1xuICAgIHRoaXMudGVhbUxpc3QkID0gdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1YlRlYW1MaXN0KHRoaXMuY2x1YklkKTtcblxuICAgIHRoaXMuY2x1YiQgPSB0aGlzLmZiU2VydmljZS5nZXRDbHViUmVmKHRoaXMuY2x1YklkKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0dXBBbGVydHMoKTtcbiAgICB0aGlzLmNsdWJBZG1pbkxpc3QkID0gdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1YkFkbWluTGlzdCgpO1xuICB9XG4gIGlzQ2x1YkFkbWluKGNsdWJBZG1pbkxpc3Q6IGFueVtdLCBjbHViSWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjbHViQWRtaW5MaXN0ICYmIGNsdWJBZG1pbkxpc3Quc29tZShjbHViID0+IGNsdWIuaWQgPT09IGNsdWJJZCk7XG4gIH1cbiAgc2V0dXBBbGVydHMoKXtcbiAgICB0aGlzLmFsZXJ0SW5wdXRzQWRkVGVhbSA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiVGVhbSBOYW1lXCIsIC8vIHRoaXMudHJhbnNsYXRlLmluc3RhbnQoXCJwcm9maWxlLmNoYW5nZV9lbWFpbF9vbGRfbGFiZWxcIiksXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlRlYW0gTmFtZVwiLFxuICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIHZhbHVlOiBcIlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJXZWJzZWl0ZVwiLCAvLyB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KFwicHJvZmlsZS5jaGFuZ2VfZW1haWxfb2xkX2xhYmVsXCIpLFxuICAgICAgICBwbGFjZWhvbGRlcjogXCJXZWJzZWl0ZVwiLFxuICAgICAgICBuYW1lOiBcIndlYnNpdGVcIixcbiAgICAgICAgdHlwZTogXCJ1cmxcIixcbiAgICAgICAgdmFsdWU6IFwiaHR0cHM6Ly9cIlxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgdGhpcy5hbGVydEJ1dHRvbnNBZGRUZWFtID0gW1xuICAgICAge1xuICAgICAgICB0ZXh0OiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KFwiY29tbW9uLmNhbmNlbFwiKSxcbiAgICAgICAgcm9sZTogXCJkZXN0cnVjdGl2ZVwiLFxuICAgICAgICBoYW5kbGVyOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogdGhpcy50cmFuc2xhdGUuaW5zdGFudChcImNvbW1vbi5zYXZlXCIpLFxuICAgICAgICBoYW5kbGVyOiBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIGxldCB0ZWFtSWQgPSBhd2FpdCB0aGlzLmZiU2VydmljZS5hZGRDbHViVGVhbShkYXRhLCB0aGlzLmNsdWJJZCk7XG4gICAgICAgICAgYXdhaXQgdGhpcy50b2FzdEFjdGlvblNhdmVkKCk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICBhc3luYyB0b2FzdEFjdGlvblNhdmVkKCkge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLnN1Y2Nlc3NfX3NhdmVkXCIpKSxcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgICBjb2xvcjogXCJzdWNjZXNzXCIsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gIH1cblxuICBhc3luYyBvcGVuTW9kYWwodGVhbTogVGVhbSkge1xuICAgIC8vIGNvbnN0IHByZXNlbnRpbmdFbGVtZW50ID0gYXdhaXQgdGhpcy5tb2RhbEN0cmwuZ2V0VG9wKCk7XG4gICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoe1xuICAgICAgY29tcG9uZW50OiBUZWFtUGFnZSxcbiAgICAgIHByZXNlbnRpbmdFbGVtZW50OiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5nZXRUb3AoKSxcbiAgICAgIGNhbkRpc21pc3M6IHRydWUsXG4gICAgICBzaG93QmFja2Ryb3A6IHRydWUsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBkYXRhOiB0ZWFtLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBtb2RhbC5wcmVzZW50KCk7XG5cbiAgICBjb25zdCB7IGRhdGEsIHJvbGUgfSA9IGF3YWl0IG1vZGFsLm9uV2lsbERpc21pc3MoKTtcblxuICAgIGlmIChyb2xlID09PSBcImNvbmZpcm1cIikge1xuICAgIH1cbiAgfVxuXG4gIG9wZW5BZGRDbHViVGVhbSgpe1xuXG5cblxuICB9XG5cbiAgYXN5bmMgY2xvc2UoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kYWxDdHJsLmRpc21pc3MobnVsbCwgXCJjbG9zZVwiKTtcbiAgfVxuXG4gIGFzeW5jIGNvbmZpcm0oKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kYWxDdHJsLmRpc21pc3MobnVsbCwgXCJjb25maXJtXCIpO1xuICB9XG59XG4iLCAiPGlvbi1oZWFkZXIgW3RyYW5zbHVjZW50XT1cInRydWVcIj5cbiAgPGlvbi10b29sYmFyPlxuXG4gICAgPGlvbi10aXRsZT5UZWFtczwvaW9uLXRpdGxlPlxuICAgIDxpb24tYnV0dG9ucyBzbG90PVwicHJpbWFyeVwiPlxuICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cImNsb3NlKClcIj57e1wiY29tbW9uLmNsb3NlXCIgfCB0cmFuc2xhdGV9fTwvaW9uLWJ1dHRvbj5cbiAgICA8L2lvbi1idXR0b25zPlxuICA8L2lvbi10b29sYmFyPlxuPC9pb24taGVhZGVyPlxuXG48aW9uLWNvbnRlbnQgW2Z1bGxzY3JlZW5dPVwidHJ1ZVwiPlxuXG4gIDxpb24taGVhZGVyIGNvbGxhcHNlPVwiY29uZGVuc2VcIj5cbiAgICA8aW9uLXRvb2xiYXI+XG4gICAgICA8aW9uLXRpdGxlIHNpemU9XCJsYXJnZVwiPlRlYW1zPC9pb24tdGl0bGU+XG4gICAgPC9pb24tdG9vbGJhcj5cbiAgPC9pb24taGVhZGVyPlxuXG5cbiAgPGlvbi1saXN0PlxuICAgIDxpb24tZ3JpZD5cbiAgICAgIDxpb24tcm93PlxuICAgICAgICA8aW9uLWNvbCBzaXplLWxnPVwiNFwiIHNpemUtbWQ9XCI2XCIgc2l6ZS1zbT1cIjZcIiBzaXplPVwiMTJcIiAqbmdGb3I9XCJsZXQgdGVhbSBvZiB0ZWFtTGlzdCQgfCBhc3luY1wiPlxuICAgICAgICAgIDxpb24tY2FyZCAoY2xpY2spPVwib3Blbk1vZGFsKHRlYW0pXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cInt7dGVhbT8ubG9nb319XCIgLz5cbiAgICAgICAgICAgIDxpb24tY2FyZC1oZWFkZXI+XG4gICAgICAgICAgICAgIDxpb24tY2FyZC10aXRsZT4ge3t0ZWFtPy5uYW1lfX0gPC9pb24tY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgPGlvbi1jYXJkLXN1YnRpdGxlPiB7e3RlYW0/LmxpZ2F9fSA8L2lvbi1jYXJkLXN1YnRpdGxlPlxuICAgICAgICAgICAgPC9pb24tY2FyZC1oZWFkZXI+XG5cbiAgICAgICAgICAgIDxpb24tY2FyZC1jb250ZW50PlxuICAgICAgICAgICAgICA8aW9uLWJhZGdlPiB7e3RlYW0/LnR5cGV9fSA8L2lvbi1iYWRnZT5cbiAgICAgICAgICAgIDwvaW9uLWNhcmQtY29udGVudD5cbiAgICAgICAgICA8L2lvbi1jYXJkPlxuICAgICAgICA8L2lvbi1jb2w+XG4gICAgICA8L2lvbi1yb3c+XG4gICAgPC9pb24tZ3JpZD5cbiAgPC9pb24tbGlzdD5cblxuXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbHViQWRtaW5MaXN0JCB8IGFzeW5jIGFzIGNsdWJBZG1pbkxpc3RcIj5cbiAgICA8aW9uLWZhYiAgKm5nSWY9XCJpc0NsdWJBZG1pbihjbHViQWRtaW5MaXN0LCBjbHViSWQpXCIgdmVydGljYWw9XCJib3R0b21cIiBob3Jpem9udGFsPVwiZW5kXCIgc2xvdD1cImZpeGVkXCI+XG4gICAgICA8aW9uLWZhYi1idXR0b24gaWQ9XCJwcmVzZW50LWFsZXJ0XCI+XG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwiYWRkLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgPC9pb24tZmFiLWJ1dHRvbj5cbiAgICAgIDwvaW9uLWZhYj5cbiAgICAgIDxpb24tYWxlcnQgdHJpZ2dlcj1cInByZXNlbnQtYWxlcnRcIiBoZWFkZXI9XCJUZWFtIGhpbnp1ZsO8Z2VuXCIgbWVzc2FnZT1cIkbDvGdlIGVpbiBUZWFtIGhpbnp1XCIgW2J1dHRvbnNdPVwiYWxlcnRCdXR0b25zQWRkVGVhbVwiXG4gICAgICAgIFtpbnB1dHNdPVwiYWxlcnRJbnB1dHNBZGRUZWFtXCI+PC9pb24tYWxlcnQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG48L2lvbi1jb250ZW50PiIsICJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsZXJ0Q29udHJvbGxlciwgTW9kYWxDb250cm9sbGVyLCBOYXZQYXJhbXMsIFRvYXN0Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgY2F0Y2hFcnJvciwgY29tYmluZUxhdGVzdCwgZGVib3VuY2VUaW1lLCBsYXN0VmFsdWVGcm9tLCBtYXAsIG9mLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gJ3NyYy9hcHAvbW9kZWxzL3VzZXInO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS91c2VyLXByb2ZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBNZW1iZXJQYWdlIH0gZnJvbSAnLi4vbWVtYmVyL21lbWJlci5wYWdlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtY2x1Yi1yZXF1ZXN0LWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jbHViLXJlcXVlc3QtbGlzdC5wYWdlLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2NsdWItcmVxdWVzdC1saXN0LnBhZ2Uuc2NzcyddLFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIENsdWJSZXF1ZXN0TGlzdFBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoXCJjbHViXCIpIGNsdWI6IGFueTtcbiAgY2x1YiQ6IE9ic2VydmFibGU8YW55PjtcblxuICBhbGxvd0VkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBncm91cEFycmF5ID0gW107XG5cbiAgY2x1Yk1lbWJlcnMkOiBPYnNlcnZhYmxlPGFueVtdPjsgLy8gT2JzZXJ2YWJsZSBmb3IgdGhlIGZ1bGwgbGlzdCBvZiBtZW1iZXJzXG4gIGZpbHRlcmVkQ2x1Yk1lbWJlcnMkOiBPYnNlcnZhYmxlPGFueVtdPjsgLy8gT2JzZXJ2YWJsZSBmb3IgZmlsdGVyZWQgcmVzdWx0c1xuICBzZWFyY2hUZXJtID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTsgIC8vIEluaXRpYWxpemVkIHdpdGggYW4gZW1wdHkgc3RyaW5nXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsXG4gICAgcHJpdmF0ZSByZWFkb25seSBhbGVydEN0cmw6IEFsZXJ0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvYXN0Q3RybDogVG9hc3RDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXNlclByb2ZpbGVTZXJ2aWNlOiBVc2VyUHJvZmlsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBmYlNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2x1YiA9IHRoaXMubmF2UGFyYW1zLmdldChcImNsdWJcIik7XG4gICAgdGhpcy5jbHViJCA9IHRoaXMuY2x1YiQgPSB0aGlzLmZiU2VydmljZS5nZXRDbHViUmVmKHRoaXMuY2x1Yi5pZCk7XG4gICAgdGhpcy5pbml0aWFsaXplQ2x1Yk1lbWJlcnMoKTtcbiAgfVxuXG4gIGluaXRpYWxpemVDbHViTWVtYmVycygpIHtcbiAgICB0aGlzLmdyb3VwQXJyYXkgPSBbXTsgIC8vIEluaXRpYWxpemUgb3IgY2xlYXIgdGhlIGdyb3VwIGFycmF5XG4gIFxuICAgIHRoaXMuY2x1Yk1lbWJlcnMkID0gdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1YlJlcXVlc3RSZWZzKHRoaXMuY2x1Yi5pZCkucGlwZShcbiAgICAgIC8vIHRhcCgoKSA9PiBjb25zb2xlLmxvZyhcIkZldGNoaW5nIGNsdWIgbWVtYmVyc1wiKSksXG4gICAgICBzd2l0Y2hNYXAobWVtYmVycyA9PiB7XG4gICAgICAgIGlmIChtZW1iZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gY2x1YiBtZW1iZXJzIGZvdW5kLlwiKTtcbiAgICAgICAgICB0aGlzLmdyb3VwQXJyYXkgPSBbXTtcbiAgICAgICAgICByZXR1cm4gb2YoW10pOyAvLyBFbWl0IGFuIGVtcHR5IGFycmF5IHRvIGtlZXAgdGhlIG9ic2VydmFibGUgYWxpdmVcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9maWxlcyQgPSBtZW1iZXJzLm1hcChtZW1iZXIgPT5cbiAgICAgICAgICB0aGlzLnVzZXJQcm9maWxlU2VydmljZS5nZXRVc2VyUHJvZmlsZUJ5SWQobWVtYmVyLmlkKS5waXBlKFxuICAgICAgICAgICAgbWFwKHByb2ZpbGUgPT4gKHtcbiAgICAgICAgICAgICAgLi4ubWVtYmVyLCAvLyBTcHJlYWQgbWVtYmVyIHRvIHJldGFpbiBhbGwgb3JpZ2luYWwgYXR0cmlidXRlc1xuICAgICAgICAgICAgICAuLi5wcm9maWxlLCAvLyBTcHJlYWQgcHJvZmlsZSB0byBvdmVyd3JpdGUgYW5kIGFkZCBwcm9maWxlIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgZmlyc3ROYW1lOiBwcm9maWxlLmZpcnN0TmFtZSB8fCBcIlVua25vd25cIixcbiAgICAgICAgICAgICAgbGFzdE5hbWU6IHByb2ZpbGUubGFzdE5hbWUgfHwgXCJVbmtub3duXCIsXG4gICAgICAgICAgICAgIHJvbGVzOiBtZW1iZXIucm9sZXMgfHwgW11cbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YoeyBcbiAgICAgICAgICAgICAgLi4ubWVtYmVyLCBcbiAgICAgICAgICAgICAgZmlyc3ROYW1lOiBcIlVua25vd25cIiwgXG4gICAgICAgICAgICAgIGxhc3ROYW1lOiBcIlVua25vd25cIiwgXG4gICAgICAgICAgICAgIHJvbGVzOiBtZW1iZXIucm9sZXMgfHwgW10gLy8gRW5zdXJlIHJvbGUgb3Igb3RoZXIgYXR0cmlidXRlcyBhcmUgaW5jbHVkZWQgZXZlbiBpbiBlcnJvclxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdChwcm9maWxlcyQpLnBpcGUoXG4gICAgICAgICAgbWFwKHByb2ZpbGVzID0+IHByb2ZpbGVzXG4gICAgICAgICAgICAuZmlsdGVyKHByb2ZpbGUgPT4gcHJvZmlsZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuZmlyc3ROYW1lLmxvY2FsZUNvbXBhcmUoYi5maXJzdE5hbWUpKVxuICAgICAgICAgICAgLm1hcChwcm9maWxlID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZ3JvdXBCeUNoYXIgPSBwcm9maWxlLmZpcnN0TmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLmdyb3VwQXJyYXkuaW5jbHVkZXMoZ3JvdXBCeUNoYXIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cEFycmF5LnB1c2goZ3JvdXBCeUNoYXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucHJvZmlsZSxcbiAgICAgICAgICAgICAgICBncm91cEJ5OiBncm91cEJ5Q2hhcixcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBDbHViIG1lbWJlcnM6XCIsIGVycik7XG4gICAgICAgIHJldHVybiBvZihbXSk7IC8vIEVtaXQgYW4gZW1wdHkgYXJyYXkgb24gZXJyb3JcbiAgICAgIH0pLFxuICAgIFxuICAgICk7XG4gIFxuICBcbiAgICB0aGlzLmZpbHRlcmVkQ2x1Yk1lbWJlcnMkID0gY29tYmluZUxhdGVzdChbdGhpcy5jbHViTWVtYmVycyQsIHRoaXMuc2VhcmNoVGVybV0pLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMzAwKSxcbiAgICAgIG1hcCgoW21lbWJlcnMsIHRlcm1dKSA9PiB7XG4gICAgICAgIGlmICghdGVybSkgcmV0dXJuIG1lbWJlcnM7XG4gIFxuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IG1lbWJlcnMuZmlsdGVyKG1lbWJlciA9PlxuICAgICAgICAgIG1lbWJlci5maXJzdE5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXJtLnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgICAgbWVtYmVyLmxhc3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGVybS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIG1lbWJlci5yb2xlcy5maW5kKHJvbGU9PnJvbGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXJtLnRvTG93ZXJDYXNlKCkpKVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZmlsdGVyZWQ7XG4gICAgICB9KSxcbiAgICAgIG1hcChmaWx0ZXJlZD0+e1xuICAgICAgICAvLyBVcGRhdGUgdGhlIGdyb3VwQXJyYXlcbiAgICAgICAgdGhpcy5ncm91cEFycmF5ID0gW107XG4gICAgICAgIGZpbHRlcmVkLmZvckVhY2gobWVtYmVyID0+IHtcbiAgICAgICAgICBjb25zdCBncm91cEJ5Q2hhciA9IG1lbWJlci5maXJzdE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgaWYgKCF0aGlzLmdyb3VwQXJyYXkuaW5jbHVkZXMoZ3JvdXBCeUNoYXIpKSB7XG4gICAgICAgICAgICB0aGlzLmdyb3VwQXJyYXkucHVzaChncm91cEJ5Q2hhcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkO1xuICAgICAgfSksXG4gICAgICB0YXAoZmlsdGVyZWQgPT4gY29uc29sZS5sb2coXCJGaWx0ZXJlZCBtZW1iZXJzOlwiLCBmaWx0ZXJlZC5sZW5ndGgpKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZpbHRlcmluZyBtZW1iZXJzOlwiLCBlcnIpO1xuICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBzZWFyY2hUZXJtID0gZXZlbnQuZGV0YWlsLnZhbHVlIHx8ICcnO1xuICAgIGNvbnNvbGUubG9nKCdIYW5kbGluZyBTZWFyY2ggRXZlbnQ6Jywgc2VhcmNoVGVybSk7XG4gICAgdGhpcy5zZWFyY2hUZXJtLm5leHQoc2VhcmNoVGVybS50cmltKCkpOyAvLyBUcmltIGFuZCB1cGRhdGUgdGhlIHNlYXJjaCB0ZXJtXG4gIH1cblxuXG4gIGFzeW5jIG9wZW5NZW1iZXIobWVtYmVyOiBQcm9maWxlKSB7XG4gICAgY29uc29sZS5sb2coXCJvcGVuTWVtYmVyXCIpO1xuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbEN0cmwuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogTWVtYmVyUGFnZSxcbiAgICAgIHByZXNlbnRpbmdFbGVtZW50OiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5nZXRUb3AoKSxcbiAgICAgIGNhbkRpc21pc3M6IHRydWUsXG4gICAgICBzaG93QmFja2Ryb3A6IHRydWUsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBkYXRhOiBtZW1iZXIsXG4gICAgICAgIGlzUmVxdWVzdDogdHJ1ZSxcbiAgICAgICAgY2x1YklkOiB0aGlzLmNsdWIuaWRcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgbW9kYWwucHJlc2VudCgpO1xuXG4gICAgY29uc3QgeyBkYXRhLCByb2xlIH0gPSBhd2FpdCBtb2RhbC5vbldpbGxEaXNtaXNzKCk7XG5cbiAgICBpZiAocm9sZSA9PT0gXCJjb25maXJtXCIpIHtcbiAgICB9XG4gIH1cbiAgYXN5bmMgdG9hc3RBY3Rpb25TYXZlZCgpIHtcbiAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDdHJsLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5zdWNjZXNzX19zYXZlZFwiKSksXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwic3VjY2Vzc1wiLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgdG9hc3QucHJlc2VudCgpO1xuICB9XG4gIGFzeW5jIHRvYXN0QWN0aW9uQ2FuY2VsZWQoKSB7XG4gICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uYWN0aW9uX19jYW5jZWxlZFwiKSksXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgfSk7XG4gICAgYXdhaXQgdG9hc3QucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgdG9hc3RBY3Rpb25FcnJvcihlcnJvcikge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdEN0cmwuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gIH1cbiAgYXN5bmMgY2xvc2UoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kYWxDdHJsLmRpc21pc3MobnVsbCwgXCJjbG9zZVwiKTtcbiAgfVxuXG4gIGFzeW5jIGNvbmZpcm0oKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kYWxDdHJsLmRpc21pc3ModGhpcy5jbHViLCBcImNvbmZpcm1cIik7XG4gIH1cbn1cbiIsICI8bmctY29udGFpbmVyICpuZ0lmPVwiY2x1YiQgfCBhc3luYyBhcyBjbHViXCI+XG4gIDxpb24taGVhZGVyIFt0cmFuc2x1Y2VudF09XCJ0cnVlXCI+XG4gICAgPGlvbi10b29sYmFyPlxuICAgICAgPGlvbi10aXRsZT57e1wiY29tbW9uLnJlcXVlc3RzXCIgfCB0cmFuc2xhdGV9fTwvaW9uLXRpdGxlPlxuICAgICAgPGlvbi1idXR0b25zIHNsb3Q9XCJwcmltYXJ5XCI+XG4gICAgICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJjbG9zZSgpXCI+e3tcImNvbW1vbi5jbG9zZVwiIHwgdHJhbnNsYXRlfX08L2lvbi1idXR0b24+XG4gICAgICA8L2lvbi1idXR0b25zPlxuICAgIDwvaW9uLXRvb2xiYXI+XG4gIDwvaW9uLWhlYWRlcj5cblxuICA8aW9uLWNvbnRlbnQgW2Z1bGxzY3JlZW5dPVwidHJ1ZVwiPlxuICAgIDxpb24taGVhZGVyIGNvbGxhcHNlPVwiY29uZGVuc2VcIj5cbiAgICAgIDxpb24tdG9vbGJhcj5cbiAgICAgICAgPGlvbi10aXRsZSBzaXplPVwibGFyZ2VcIj57e1wiY29tbW9uLnJlcXVlc3RzXCIgfCB0cmFuc2xhdGV9fTwvaW9uLXRpdGxlPlxuICAgICAgPC9pb24tdG9vbGJhcj5cbiAgICA8L2lvbi1oZWFkZXI+XG5cbiAgICA8aW9uLXNlYXJjaGJhciBbZGVib3VuY2VdPVwiMTAwMFwiIChpb25DaGFuZ2UpPVwiaGFuZGxlU2VhcmNoKCRldmVudClcIiBhbmltYXRlZD1cInRydWVcIiBzZWFyY2gtaWNvbj1cInNlYXJjaC1jaXJjbGVcIlxuICAgICAgW3ZhbHVlXT1cInNlYXJjaFRlcm0udmFsdWVcIiBwbGFjZWhvbGRlcj0ne3tcImNvbW1vbi5zZWFyY2hmaWVsZFwiIHwgdHJhbnNsYXRlfX0nPjwvaW9uLXNlYXJjaGJhcj5cblxuICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiICpuZ0lmPVwiZmlsdGVyZWRDbHViTWVtYmVycyQgfCBhc3luYyBhcyBjbHViTWVtYmVyTGlzdFwiPlxuICAgICAgPGlvbi1pdGVtLWdyb3VwPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBncm91cEJ5IG9mIGdyb3VwQXJyYXlcIj5cbiAgICAgICAgICA8aW9uLWl0ZW0tZGl2aWRlciBjb2xvcj1cImxpZ2h0XCI+XG4gICAgICAgICAgICA8aW9uLWxhYmVsPiB7e2dyb3VwQnl9fSA8L2lvbi1sYWJlbD5cbiAgICAgICAgICA8L2lvbi1pdGVtLWRpdmlkZXI+XG5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtZW1iZXIgb2YgY2x1Yk1lbWJlckxpc3RcIj5cblxuICAgICAgICAgICAgPGlvbi1pdGVtLXNsaWRpbmcgI2l0ZW0gKm5nSWY9XCJtZW1iZXIuZ3JvdXBCeSA9PSBncm91cEJ5XCI+XG5cbiAgICAgICAgXG4gICAgICAgICAgICAgIDxpb24taXRlbSBkZXRhaWw9XCJ0cnVlXCI+XG5cbiAgICAgICAgICAgICAgICA8aW9uLWF2YXRhciBzbG90PVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgKm5nSWY9XCIhbWVtYmVyLnByb2ZpbGVQaWN0dXJlXCIgYWx0PVwiU2lsaG91ZXR0ZSBvZiBhIHBlcnNvbidzIGhlYWRcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2ltZy9kZW1vcy9hdmF0YXIuc3ZnXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxpbWcgKm5nSWY9XCJtZW1iZXIucHJvZmlsZVBpY3R1cmVcIiBzcmM9XCJ7e21lbWJlcj8ucHJvZmlsZVBpY3R1cmV9fVwiIC8+XG4gICAgICAgICAgICAgICAgPC9pb24tYXZhdGFyPlxuICAgICAgICAgICAgICAgIDxpb24tbGFiZWwgY2xhc3M9XCJpb24tdGV4dC13cmFwXCIgKGNsaWNrKT1cIm9wZW5NZW1iZXIobWVtYmVyKVwiPnt7bWVtYmVyLmZpcnN0TmFtZX19XG4gICAgICAgICAgICAgICAgICB7e21lbWJlci5sYXN0TmFtZX19PC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlvbi1iYWRnZSAqbmdGb3I9XCJsZXQgcm9sZSBvZiBtZW1iZXIucm9sZXNcIiBzbG90PVwiZW5kXCI+e3tyb2xlfX08L2lvbi1iYWRnZT5cbiAgICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICAgIDwvaW9uLWl0ZW0tc2xpZGluZz5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L2lvbi1pdGVtLWdyb3VwPlxuICAgIDwvaW9uLWxpc3Q+XG5cbiAgPC9pb24tY29udGVudD5cbjwvbmctY29udGFpbmVyPlxuPG5nLXRlbXBsYXRlICNsb2FkaW5nPlxuICA8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxuICAgIDxpb24tdG9vbGJhcj5cblxuICAgICAgPGlvbi10aXRsZT57e1wiY29tbW9uLm1lbWJlcnNcIiB8IHRyYW5zbGF0ZX19PC9pb24tdGl0bGU+XG4gICAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInByaW1hcnlcIj5cbiAgICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cImNsb3NlKClcIj57e1wiY29tbW9uLmNsb3NlXCIgfCB0cmFuc2xhdGV9fTwvaW9uLWJ1dHRvbj5cbiAgICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgPC9pb24tdG9vbGJhcj5cbiAgPC9pb24taGVhZGVyPlxuXG4gIDxpb24tY29udGVudCBbZnVsbHNjcmVlbl09XCJ0cnVlXCI+XG4gICAgPGlvbi1oZWFkZXIgY29sbGFwc2U9XCJjb25kZW5zZVwiPlxuICAgICAgPGlvbi10b29sYmFyPlxuICAgICAgICA8aW9uLXRpdGxlIHNpemU9XCJsYXJnZVwiPnt7XCJjb21tb24ubWVtYmVyc1wiIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgICAgIDwvaW9uLXRvb2xiYXI+XG4gICAgPC9pb24taGVhZGVyPlxuXG4gICAgPGlvbi1zZWFyY2hiYXIgW2RlYm91bmNlXT1cIjEwMDBcIiAoaW9uQ2hhbmdlKT1cImhhbmRsZVNlYXJjaCgkZXZlbnQpXCIgYW5pbWF0ZWQ9XCJ0cnVlXCIgc2VhcmNoLWljb249XCJzZWFyY2gtY2lyY2xlXCJcbiAgICAgIHBsYWNlaG9sZGVyPSd7e1wiY29tbW9uLnNlYXJjaGZpZWxkXCIgfCB0cmFuc2xhdGV9fSc+PC9pb24tc2VhcmNoYmFyPlxuXG4gICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCI+XG5cbiAgICAgIDxpb24taXRlbS1ncm91cD5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZ3JvdXBCeSBvZiBncm91cEFycmF5XCI+XG4gICAgICAgICAgPGlvbi1pdGVtLWRpdmlkZXIgY29sb3I9XCJsaWdodFwiPlxuICAgICAgICAgICAgPGlvbi1sYWJlbD4ge3tncm91cEJ5fX0gPC9pb24tbGFiZWw+XG4gICAgICAgICAgPC9pb24taXRlbS1kaXZpZGVyPlxuXG5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L2lvbi1pdGVtLWdyb3VwPlxuICAgIDwvaW9uLWxpc3Q+XG5cbiAgPC9pb24tY29udGVudD5cblxuXG48L25nLXRlbXBsYXRlPiIsICJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsZXJ0Q29udHJvbGxlciwgSW9uSXRlbVNsaWRpbmcsIE1vZGFsQ29udHJvbGxlciwgTmF2UGFyYW1zLCBSYW5nZUN1c3RvbUV2ZW50LCBUb2FzdENvbnRyb2xsZXIsIFRvZ2dsZUNoYW5nZUV2ZW50RGV0YWlsLCBUb2dnbGVDdXN0b21FdmVudCB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgY2F0Y2hFcnJvciwgY29tYmluZUxhdGVzdCwgZGVib3VuY2VUaW1lLCBkZWZhdWx0SWZFbXB0eSwgZm9ya0pvaW4sIGxhc3RWYWx1ZUZyb20sIG1hcCwgb2YsIHN3aXRjaE1hcCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSGVsZmVyU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvZmlyZWJhc2UvaGVsZmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS91c2VyLXByb2ZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBIZWxmZXJEZXRhaWxQYWdlIH0gZnJvbSAnLi4vaGVsZmVyLWRldGFpbC9oZWxmZXItZGV0YWlsLnBhZ2UnO1xuaW1wb3J0IHsgQ2x1YiB9IGZyb20gJ3NyYy9hcHAvbW9kZWxzL2NsdWInO1xuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvZmlyZWJhc2UvZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBIZWxmZXJFdmVudCB9IGZyb20gJ3NyYy9hcHAvbW9kZWxzL2V2ZW50JztcblxuaW50ZXJmYWNlIFBsYW5uZWRFdmVudHNEYXRhIHtcbiAgZXZlbnRzOiBIZWxmZXJFdmVudFtdO1xuICBzaGlmdHM/OiB7XG4gICAgZXZlbnRJZDogc3RyaW5nO1xuICAgIHNoaWZ0SWQ6IHN0cmluZztcbiAgICBzaGlmdDogYW55O1xuICAgIGV2ZW50OiBIZWxmZXJFdmVudDtcbiAgICBhdHRlbmRlZXM6IGFueVtdO1xuICB9W107XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWhlbGZlci1wdW5rdGUtY2x1YicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hlbGZlci1wdW5rdGUtY2x1Yi5wYWdlLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2hlbGZlci1wdW5rdGUtY2x1Yi5wYWdlLnNjc3MnXSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBIZWxmZXJQdW5rdGVDbHViUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dChcImNsdWJJZFwiKSBjbHViSWQ6IGFueTtcbiAgY2x1YkFkbWluTGlzdCQ6IE9ic2VydmFibGU8Q2x1YltdPjtcbiAgYWxsb3dFZGl0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgY2x1YiQ6IE9ic2VydmFibGU8Q2x1YiB8IGFueT47XG4gIGhlbGZlclB1bmt0ZUxpc3QkOiBPYnNlcnZhYmxlPGFueVtdPjtcbiAgZmlsdGVyZWRIZWxmZXJQdW5rdGVMaXN0JDogT2JzZXJ2YWJsZTxhbnlbXT47XG5cbiAgZ3JvdXBBcnJheSA9IFtdO1xuXG4gIHBsYW5uZWRUb2dnbGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTsgIC8vIEluaXRpYWxpemVkIHdpdGggYW4gZW1wdHkgc3RyaW5nXG5cbiAgc2VhcmNoVGVybSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7ICAvLyBJbml0aWFsaXplZCB3aXRoIGFuIGVtcHR5IHN0cmluZ1xuXG4gIHBvaW50c1JhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDx7IGxvd2VyOiBudW1iZXIsIHVwcGVyOiBudW1iZXIgfT4oeyBsb3dlcjogMCwgdXBwZXI6IDEwIH0pOyAvLyBEZWZhdWx0IHJhbmdlXG5cbiAgbWluRGF0ZTogc3RyaW5nID0gXCJcIjtcbiAgbWF4RGF0ZTogc3RyaW5nID0gXCJcIjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vZGFsQ3RybDogTW9kYWxDb250cm9sbGVyLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFsZXJ0Q29udHJvbGxlcjogQWxlcnRDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgaGVsZmVyU2VydmljZTogSGVsZmVyU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXNlclByb2ZpbGVTZXJ2aWNlOiBVc2VyUHJvZmlsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSB0b2FzdENvbnRyb2xsZXI6IFRvYXN0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZiU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICApIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBsZXQgZGF0ZUZyb20gPSBuZXcgRGF0ZSgpO1xuICAgIGRhdGVGcm9tLnNldEZ1bGxZZWFyKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDIpO1xuICAgIHRoaXMubWluRGF0ZSA9IGRhdGVGcm9tLnRvSVNPU3RyaW5nKCk7XG5cbiAgICBsZXQgZGF0ZVRvID0gbmV3IERhdGUoKTtcbiAgICBkYXRlVG8uc2V0RnVsbFllYXIobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpICsgMik7XG4gICAgdGhpcy5tYXhEYXRlID0gZGF0ZVRvLnRvSVNPU3RyaW5nKCk7XG5cbiAgICB0aGlzLmNsdWIkID0gdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1YlJlZih0aGlzLmNsdWJJZCk7XG5cbiAgICB0aGlzLmluaXRpYWxpemVDbHViTWVtYmVyc1dpdGhIZWxmZXJQdW5rdGUodGhpcy5jbHViSWQpO1xuXG4gICAgdGhpcy5jbHViQWRtaW5MaXN0JCA9IHRoaXMuZmJTZXJ2aWNlLmdldENsdWJBZG1pbkxpc3QoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIHRoaXMuZ3JvdXBBcnJheS5wdXNoKGN1cnJlbnRZZWFyKTtcbiAgICB0aGlzLmdyb3VwQXJyYXkucHVzaChjdXJyZW50WWVhciAtIDEpO1xuICAgIHRoaXMuZ3JvdXBBcnJheS5wdXNoKGN1cnJlbnRZZWFyIC0gMik7XG4gICAgdGhpcy5ncm91cEFycmF5LnB1c2goY3VycmVudFllYXIgLSAzKTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaChldmVudDogYW55KSB7XG4gICAgY29uc3Qgc2VhcmNoVGVybSA9IGV2ZW50LmRldGFpbC52YWx1ZSB8fCAnJztcbiAgICBjb25zb2xlLmxvZygnSGFuZGxpbmcgU2VhcmNoIEV2ZW50OicsIHNlYXJjaFRlcm0pO1xuICAgIHRoaXMuc2VhcmNoVGVybS5uZXh0KHNlYXJjaFRlcm0udHJpbSgpKTsgLy8gVHJpbSBhbmQgdXBkYXRlIHRoZSBzZWFyY2ggdGVybVxuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzU2hpZnQoY2x1YklkOiBzdHJpbmcsIGV2ZW50SWQ6IHN0cmluZywgc2hpZnQ6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGBMb2FkaW5nIGF0dGVuZGVlcyBmb3Igc2hpZnQgJHtzaGlmdC5pZH0gb2YgZXZlbnQgJHtldmVudElkfWApO1xuICAgIHJldHVybiB0aGlzLmV2ZW50U2VydmljZS5nZXRDbHViSGVsZmVyRXZlbnRTY2hpY2h0QXR0ZW5kZWVzUmVmKFxuICAgICAgY2x1YklkLFxuICAgICAgZXZlbnRJZCxcbiAgICAgIHNoaWZ0LmlkXG4gICAgKS5waXBlKFxuICAgICAgdGFwKGF0dGVuZGVlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBSYXcgYXR0ZW5kZWVzIGZvciBzaGlmdCAke3NoaWZ0LmlkfTpgLCBhdHRlbmRlZXMpO1xuICAgICAgICBjb25zdCBjb25maXJtZWQgPSBhdHRlbmRlZXMuZmlsdGVyKGEgPT4gYS5zdGF0dXMgPT09IHRydWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhgQ29uZmlybWVkIGF0dGVuZGVlcyBmb3Igc2hpZnQgJHtzaGlmdC5pZH06YCwgY29uZmlybWVkKTtcbiAgICAgIH0pLFxuICAgICAgbWFwKGF0dGVuZGVlcyA9PiAoe1xuICAgICAgICBldmVudElkLFxuICAgICAgICBzaGlmdElkOiBzaGlmdC5pZCxcbiAgICAgICAgc2hpZnQsXG4gICAgICAgIGV2ZW50OiB0aGlzLmN1cnJlbnRFdmVudCwgLy8gd2lyZCBzcMOkdGVyIGdlc2V0enRcbiAgICAgICAgYXR0ZW5kZWVzOiBhdHRlbmRlZXMuZmlsdGVyKGEgPT4gYS5zdGF0dXMgPT09IHRydWUpXG4gICAgICB9KSksXG4gICAgICAvLyBGZWhsZXJiZWhhbmRsdW5nIGbDvHIgZWluemVsbmUgU2hpZnRzXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgbG9hZGluZyBhdHRlbmRlZXMgZm9yIHNoaWZ0ICR7c2hpZnQuaWR9OmAsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIG9mKHtcbiAgICAgICAgICBldmVudElkLFxuICAgICAgICAgIHNoaWZ0SWQ6IHNoaWZ0LmlkLFxuICAgICAgICAgIHNoaWZ0LFxuICAgICAgICAgIGV2ZW50OiB0aGlzLmN1cnJlbnRFdmVudCxcbiAgICAgICAgICBhdHRlbmRlZXM6IFtdXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjdXJyZW50RXZlbnQ6IGFueTsgLy8gSGlsZnN2YXJpYWJsZSBmw7xyIEV2ZW50LUtvbnRleHRcblxuICBpbml0aWFsaXplQ2x1Yk1lbWJlcnNXaXRoSGVsZmVyUHVua3RlKGNsdWJJZCkge1xuICAgIHRoaXMuZ3JvdXBBcnJheSA9IFtdO1xuXG4gICAgdGhpcy5oZWxmZXJQdW5rdGVMaXN0JCA9IHRoaXMuZmJTZXJ2aWNlLmdldENsdWJSZWYoY2x1YklkKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChjbHViKSA9PiB7XG4gICAgICAgIGlmICghY2x1YikgcmV0dXJuIG9mKG51bGwpO1xuXG4gICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICB0aGlzLmZiU2VydmljZS5nZXRDbHViTWVtYmVyUmVmcyhjbHViSWQpLFxuICAgICAgICAgIHRoaXMucGxhbm5lZFRvZ2dsZS5waXBlKFxuICAgICAgICAgICAgc3dpdGNoTWFwKHNob3dQbGFubmVkID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFzaG93UGxhbm5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQbGFubmVkIHRvZ2dsZSBpcyBmYWxzZSwgcmV0dXJuaW5nIGVtcHR5IGRhdGEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YoeyBldmVudHM6IFtdLCBzaGlmdHM6IFtdIH0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc3QgZGF0ZUZyb20gPSBUaW1lc3RhbXAuZnJvbURhdGUobmV3IERhdGUoY2x1Yi5oZWxmZXJSZXBvcnRpbmdEYXRlRnJvbSkpO1xuICAgICAgICAgICAgICBjb25zdCBkYXRlVG8gPSBUaW1lc3RhbXAuZnJvbURhdGUobmV3IERhdGUoY2x1Yi5oZWxmZXJSZXBvcnRpbmdEYXRlVG8pKTtcblxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ldmVudFNlcnZpY2UuZ2V0Q2x1YkhlbGZlckV2ZW50UmVmc0J5RGF0ZShjbHViSWQsIGRhdGVGcm9tLCBkYXRlVG8pLnBpcGUoXG4gICAgICAgICAgICAgICAgc3dpdGNoTWFwKGV2ZW50cyA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoIWV2ZW50cy5sZW5ndGgpIHJldHVybiBvZih7IGV2ZW50cywgc2hpZnRzOiBbXSB9KTtcblxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkRXZlbnRzJCA9IGV2ZW50cy5tYXAoZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50OyAvLyBFdmVudC1Lb250ZXh0IHNldHplblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ldmVudFNlcnZpY2UuZ2V0Q2x1YkhlbGZlckV2ZW50U2NoaWNodGVuUmVmKGNsdWJJZCwgZXZlbnQuaWQpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgc3dpdGNoTWFwKHNoaWZ0cyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNoaWZ0cy5sZW5ndGgpIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFZlcmFyYmVpdGUgYWxsZSBTaGlmdHMgZWluZXMgRXZlbnRzIHBhcmFsbGVsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlmdFByb21pc2VzID0gc2hpZnRzLm1hcChzaGlmdCA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzU2hpZnQoY2x1YklkLCBldmVudC5pZCwgc2hpZnQpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ya0pvaW4oc2hpZnRQcm9taXNlcykucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgcHJvY2Vzc2luZyBzaGlmdHMgZm9yIGV2ZW50ICR7ZXZlbnQuaWR9OmAsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIC8vIFZlcmFyYmVpdGUgYWxsZSBFdmVudHMgcGFyYWxsZWxcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JrSm9pbihwcm9jZXNzZWRFdmVudHMkKS5waXBlKFxuICAgICAgICAgICAgICAgICAgICBtYXAocmVzdWx0cyA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgIGV2ZW50cyxcbiAgICAgICAgICAgICAgICAgICAgICBzaGlmdHM6IHJlc3VsdHMuZmxhdCgpXG4gICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgdGFwKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZpbmFsIHByb2Nlc3NlZCBkYXRhOicsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgXSkucGlwZShcbiAgICAgICAgICAvLyBSZXN0IGRlcyBDb2RlcyBibGVpYnQgZ2xlaWNoLi4uXG4gICAgICAgICAgc3dpdGNoTWFwKChbbWVtYmVycywgcGxhbm5lZEV2ZW50c10pID0+IHtcbiAgICAgICAgICAgIGlmICghbWVtYmVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgdGhpcy5ncm91cEFycmF5ID0gW107XG4gICAgICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG1lbWJlckRldGFpbHNXaXRoSGVsZmVyUHVua3RlJCA9IG1lbWJlcnMubWFwKG1lbWJlciA9PlxuICAgICAgICAgICAgICB0aGlzLnVzZXJQcm9maWxlU2VydmljZS5nZXRVc2VyUHJvZmlsZUJ5SWQobWVtYmVyLmlkKS5waXBlKFxuICAgICAgICAgICAgICAgIHN3aXRjaE1hcChwcm9maWxlID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICghcHJvZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2Yoe1xuICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGU6IHsgLi4ubWVtYmVyLCBmaXJzdE5hbWU6IFwiVW5rbm93blwiLCBsYXN0TmFtZTogXCJVbmtub3duXCIsIHJvbGVzOiBtZW1iZXIucm9sZXMgfHwgW10gfSxcbiAgICAgICAgICAgICAgICAgICAgICBoZWxmZXJQdW5rdGU6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYW5uZWRIZWxmZXI6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUG9pbnRzOiAwXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oZWxmZXJTZXJ2aWNlLmdldFVzZXJIZWxmZXJQdW5rdGVSZWZzV2l0aEZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgY2x1YklkLFxuICAgICAgICAgICAgICAgICAgICBUaW1lc3RhbXAuZnJvbURhdGUobmV3IERhdGUoY2x1Yi5oZWxmZXJSZXBvcnRpbmdEYXRlRnJvbSkpLFxuICAgICAgICAgICAgICAgICAgICBUaW1lc3RhbXAuZnJvbURhdGUobmV3IERhdGUoY2x1Yi5oZWxmZXJSZXBvcnRpbmdEYXRlVG8pKVxuICAgICAgICAgICAgICAgICAgKS5waXBlKFxuICAgICAgICAgICAgICAgICAgICBtYXAoaGVsZmVyUHVua3RlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGFubmVkSGVsZmVyID0gKHBsYW5uZWRFdmVudHMuc2hpZnRzIHx8IFtdKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihzaGlmdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDaGVja2luZyBzaGlmdCAke3NoaWZ0LnNoaWZ0SWR9IGF0dGVuZGVlcyBmb3IgJHtwcm9maWxlLmlkfTpgLCBzaGlmdC5hdHRlbmRlZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2hpZnQuYXR0ZW5kZWVzLnNvbWUoYXR0ZW5kZWUgPT4gYXR0ZW5kZWUuaWQgPT09IHByb2ZpbGUuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoc2hpZnQgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHNoaWZ0LmV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hpY2h0OiBzaGlmdC5zaGlmdFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFBsYW5uZWQgaGVscGVycyBmb3IgJHtwcm9maWxlLmZpcnN0TmFtZX06YCwgcGxhbm5lZEhlbGZlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbGZlclB1bmt0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYW5uZWRIZWxmZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFBvaW50czogaGVsZmVyUHVua3RlLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBOdW1iZXIoaXRlbS5wb2ludHMpLCAwKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW5uZWRIZWxmZXIucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIE51bWJlcihpdGVtLnNjaGljaHQucG9pbnRzKSwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cEJ5OiBwcm9maWxlLmZpcnN0TmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGVzOiBtZW1iZXIucm9sZXMgfHwgW11cbiAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdChtZW1iZXJEZXRhaWxzV2l0aEhlbGZlclB1bmt0ZSQpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1hcChtZW1iZXJEZXRhaWxzID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBBcnJheSA9IFsuLi5uZXcgU2V0KG1lbWJlckRldGFpbHMubWFwKFxuICAgICAgICAgICAgICBtZW1iZXIgPT4gbWVtYmVyLnByb2ZpbGUuZmlyc3ROYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICApKV0uc29ydCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbWVtYmVyRGV0YWlscy5zb3J0KChhLCBiKSA9PiBcbiAgICAgICAgICAgICAgYS5wcm9maWxlLmZpcnN0TmFtZS5sb2NhbGVDb21wYXJlKGIucHJvZmlsZS5maXJzdE5hbWUpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgXG4gICAgdGhpcy5maWx0ZXJlZEhlbGZlclB1bmt0ZUxpc3QkID0gY29tYmluZUxhdGVzdChbdGhpcy5oZWxmZXJQdW5rdGVMaXN0JCwgdGhpcy5zZWFyY2hUZXJtLCB0aGlzLnBvaW50c1JhbmdlXSkucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgzMDApLFxuICAgICAgbWFwKChbbWVtYmVycywgdGVybSwgcmFuZ2VdKSA9PiB7XG4gICAgICAgIC8vIEZpbHRlciBiYXNlZCBvbiBzZWFyY2ggdGVybSBhbmQgcG9pbnQgcmFuZ2VcbiAgICAgICAgcmV0dXJuIG1lbWJlcnMuZmlsdGVyKG1lbWJlciA9PiB7XG4gICAgICAgICAgY29uc3QgbWF0Y2hlc1NlYXJjaCA9IHRlcm1cbiAgICAgICAgICAgID8gbWVtYmVyLnByb2ZpbGUuZmlyc3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGVybS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgICAgICBtZW1iZXIucHJvZmlsZS5sYXN0TmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm0udG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICAgICAgbWVtYmVyLnJvbGVzLmZpbmQocm9sZSA9PiByb2xlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGVybS50b0xvd2VyQ2FzZSgpKSlcbiAgICAgICAgICAgIDogdHJ1ZTsgIC8vIElmIG5vIHNlYXJjaCB0ZXJtLCBtYXRjaCBhbGxcbiAgXG4gICAgICAgICAgY29uc3Qgd2l0aGluUmFuZ2UgPSBtZW1iZXIudG90YWxQb2ludHMgPj0gcmFuZ2UubG93ZXIgJiYgbWVtYmVyLnRvdGFsUG9pbnRzIDw9IHJhbmdlLnVwcGVyO1xuICBcbiAgICAgICAgICAvLyBSZXR1cm4gdHJ1ZSBpZiBib3RoIGNvbmRpdGlvbnMgYXJlIG1ldFxuICAgICAgICAgIHJldHVybiBtYXRjaGVzU2VhcmNoICYmIHdpdGhpblJhbmdlO1xuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgICAgbWFwKGZpbHRlcmVkID0+IHtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBncm91cEFycmF5XG4gICAgICAgIHRoaXMuZ3JvdXBBcnJheSA9IFtdO1xuICAgICAgICBmaWx0ZXJlZC5mb3JFYWNoKG1lbWJlciA9PiB7XG4gICAgICAgICAgY29uc3QgZ3JvdXBCeUNoYXIgPSBtZW1iZXIucHJvZmlsZS5maXJzdE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgaWYgKCF0aGlzLmdyb3VwQXJyYXkuaW5jbHVkZXMoZ3JvdXBCeUNoYXIpKSB7XG4gICAgICAgICAgICB0aGlzLmdyb3VwQXJyYXkucHVzaChncm91cEJ5Q2hhcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkO1xuICAgICAgfSksXG4gICAgICB0YXAoZmlsdGVyZWQgPT4gY29uc29sZS5sb2coXCJGaWx0ZXJlZCBtZW1iZXJzOlwiLCBmaWx0ZXJlZC5sZW5ndGgpKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZpbHRlcmluZyBtZW1iZXJzOlwiLCBlcnIpO1xuICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgY2hhbmdlSGVsZmVyUHVua3Qoc2xpZGluZ0l0ZW06IElvbkl0ZW1TbGlkaW5nLCBtZW1iZXIsIGhlbGZlclB1bmt0KSB7XG4gICAgYXdhaXQgc2xpZGluZ0l0ZW0uY2xvc2VPcGVuZWQoKTtcblxuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IFwiYXNkYXNkXCIsXG4gICAgICBoZWFkZXI6IFwiSGVsZmVycHVua3Qgw6RuZGVyblwiLFxuICAgICAgaW5wdXRzOiBbe1xuICAgICAgICBpZDogXCJwb2ludHNcIixcbiAgICAgICAgdmFsdWU6IGhlbGZlclB1bmt0LnBvaW50c1xuICAgICAgfV0sXG4gICAgICBidXR0b25zOiBbe1xuICAgICAgICBcImlkXCI6IFwib2tcIixcbiAgICAgICAgXCJ0ZXh0XCI6IFwiU3BlaWNoZXJuXCIsXG4gICAgICAgIGhhbmRsZXI6IChkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YS5wb2ludHMpO1xuICAgICAgICB9XG4gICAgICB9XVxuXG4gICAgfSk7XG5cbiAgICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XG5cbiAgICAvLyB0aGlzLnByZXNlbnRUb2FzdCgpO1xuICAgIGNvbnNvbGUubG9nKG1lbWJlciwgaGVsZmVyUHVua3QpXG4gIH1cblxuICBhc3luYyBkZWxldGVIZWxmZXJQdW5rdChzbGlkaW5nSXRlbTogSW9uSXRlbVNsaWRpbmcsIG1lbWJlciwgaGVsZmVyUHVua3QpIHtcbiAgICBhd2FpdCBzbGlkaW5nSXRlbS5jbG9zZU9wZW5lZCgpO1xuXG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiAnQmVzdMOkdGlndW5nJyxcbiAgICAgIG1lc3NhZ2U6ICdTaW5kIFNpZSBzaWNoZXIsIGRhc3MgU2llIGRpZXNlbiBIZWxmZXJQdW5rdCBsw7ZzY2hlbiBtw7ZjaHRlbj8nLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0FiYnJlY2hlbicsXG4gICAgICAgICAgcm9sZTogJ2NhbmNlbCcsXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0zDtnNjaHZvcmdhbmcgYWJnZWJyb2NoZW4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnTMO2c2NoZW4nLFxuICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaGVsZmVyU2VydmljZS5kZWxldGVIZWxmZXJQdW5rdCh0aGlzLmNsdWJJZCwgaGVsZmVyUHVua3QuaWQpO1xuICAgICAgICAgICAgdGhpcy5wcmVzZW50VG9hc3QoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lbWJlciwgaGVsZmVyUHVua3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuXG4gICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xuICB9XG5cbiAgZ2V0UGxhbm5lZEhlbGZlcihtZW1iZXJJZDogc3RyaW5nLCBjbHViSWQ6IHN0cmluZywgZGF0ZUZyb20sIGRhdGVUbyk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICAvLyBTdGVwIDE6IEZldGNoIGFsbCBIZWxmZXIgZXZlbnRzXG4gICAgcmV0dXJuIHRoaXMuZXZlbnRTZXJ2aWNlLmdldENsdWJIZWxmZXJFdmVudFJlZnNCeURhdGUoY2x1YklkLCBkYXRlRnJvbSwgZGF0ZVRvKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKGV2ZW50cyA9PiB7XG4gICAgICAgIC8vIFN0ZXAgMjogRm9yIGVhY2ggZXZlbnQsIGZldGNoIHRoZSBsaXN0IG9mIHNjaGljaHRlbiAoc2hpZnRzKVxuICAgICAgICBjb25zdCBzY2hpY2h0ZW5PYnNlcnZhYmxlcyA9IGV2ZW50cy5tYXAoZXZlbnQgPT5cbiAgICAgICAgICB0aGlzLmV2ZW50U2VydmljZS5nZXRDbHViSGVsZmVyRXZlbnRTY2hpY2h0ZW5SZWYoY2x1YklkLCBldmVudC5pZCkucGlwZShcbiAgICAgICAgICAgIC8vIFN0ZXAgMzogRm9yIGVhY2ggc2NoaWNodCwgZmV0Y2ggdGhlIGF0dGVuZGVlcyBhbmQgZmlsdGVyIGJhc2VkIG9uIHRoZSBtZW1iZXJJZCBhbmQgc3RhdHVzXG4gICAgICAgICAgICBzd2l0Y2hNYXAoc2NoaWNodGVuID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXR0ZW5kZWVzT2JzZXJ2YWJsZXMgPSBzY2hpY2h0ZW4ubWFwKHNjaGljaHQgPT5cbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50U2VydmljZS5nZXRDbHViSGVsZmVyRXZlbnRTY2hpY2h0QXR0ZW5kZWVzUmVmKGNsdWJJZCwgZXZlbnQuaWQsIHNjaGljaHQuaWQpLnBpcGUoXG4gICAgICAgICAgICAgICAgICBtYXAoYXR0ZW5kZWVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RlcCA0OiBGaW5kIHRoZSBhdHRlbmRlZXMgd2l0aCB0aGUgc3BlY2lmaWVkIG1lbWJlcklkIGFuZCBzdGF0dXMgc2V0IHRvIHRydWVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNDb25maXJtZWQgPSBhdHRlbmRlZXMuc29tZShhdHRlbmRlZSA9PiBhdHRlbmRlZS5pZCA9PT0gbWVtYmVySWQgJiYgYXR0ZW5kZWUuc3RhdHVzID09PSB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzQ29uZmlybWVkID8geyBldmVudCwgc2NoaWNodCB9IDogbnVsbDsgIC8vIFJldHVybiB0aGUgZXZlbnQgYW5kIHNjaGljaHQgaWYgY29uZmlybWVkXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHNjaGljaHQgYXR0ZW5kZWVzOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoYXR0ZW5kZWVzT2JzZXJ2YWJsZXMpLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKHJlc3VsdHMgPT4gcmVzdWx0cy5maWx0ZXIocmVzdWx0ID0+IHJlc3VsdCAhPT0gbnVsbCkpIC8vIEZpbHRlciBvdXQgbnVsbCB2YWx1ZXNcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KHNjaGljaHRlbk9ic2VydmFibGVzKS5waXBlKFxuICAgICAgICAgIG1hcChyZXN1bHRzID0+IHJlc3VsdHMuZmxhdCgpKSwgIC8vIEZsYXR0ZW4gdGhlIGFycmF5IG9mIHJlc3VsdHNcbiAgICAgICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgc2NoaWNodGVuOlwiLCBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBldmVudHM6XCIsIGVycik7XG4gICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKm9uSGVsZmVyUHVua3RlQ2hhbmdlKGV2ZW50OiBDdXN0b21FdmVudCkge1xuXG4gICAgY29uc3QgcmFuZ2UgPSAoZXZlbnQgYXMgUmFuZ2VDdXN0b21FdmVudCkuZGV0YWlsLnZhbHVlIGFzIGFueTtcbiAgICBjb25zb2xlLmxvZygnUmFuZ2Ugc2xpZGVyIHZhbHVlOicsIHJhbmdlKTtcbiAgICB0aGlzLnBvaW50c1JhbmdlLm5leHQoeyBsb3dlcjogcmFuZ2UubG93ZXIsIHVwcGVyOiByYW5nZS51cHBlciB9KTtcblxuXG5cbiAgcGluRm9ybWF0dGVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgcmV0dXJuIGAke3ZhbHVlfSBQdW5rdGVgO1xuICB9XG5cbiAgfSovXG5cblxuICBvbkhlbGZlclB1bmt0ZU1pbkNoYW5nZShldmVudDogQ3VzdG9tRXZlbnQpIHtcbiAgICB0aGlzLnBvaW50c1JhbmdlLm5leHQoeyBsb3dlcjogZXZlbnQuZGV0YWlsLnZhbHVlLCB1cHBlcjogdGhpcy5wb2ludHNSYW5nZS52YWx1ZS51cHBlciB9KTtcbiAgfVxuXG5cbiAgb25IZWxmZXJQdW5rdGVNYXhDaGFuZ2UoZXZlbnQ6IEN1c3RvbUV2ZW50KSB7XG4gICAgdGhpcy5wb2ludHNSYW5nZS5uZXh0KHsgbG93ZXI6IHRoaXMucG9pbnRzUmFuZ2UudmFsdWUubG93ZXIsIHVwcGVyOiBldmVudC5kZXRhaWwudmFsdWUgfSk7XG4gIH1cblxuICBvbkhlbGZlclB1bmt0ZVBsYW5uZWQoZXZlbnQ6IEN1c3RvbUV2ZW50PFRvZ2dsZUNoYW5nZUV2ZW50RGV0YWlsPikge1xuICAgIGNvbnNvbGUubG9nKCdUb2dnbGUgY2hhbmdlZDonLCBldmVudC5kZXRhaWxbJ2NoZWNrZWQnXSk7XG4gICAgdGhpcy5wbGFubmVkVG9nZ2xlLm5leHQoZXZlbnQuZGV0YWlsWydjaGVja2VkJ10pO1xuICB9XG5cbiAgYXN5bmMgcHJlc2VudFRvYXN0KCkge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLnN1Y2Nlc3NfX3NhdmVkXCIpKSxcbiAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgfSk7XG4gICAgdG9hc3QucHJlc2VudCgpO1xuICB9XG4gIC8qXG4gICAgZ2V0Q2x1Yk1lbWJlcnNXaXRoSGVsZmVyUHVua3RlKGNsdWJJZDogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1YlJlZihjbHViSWQpLnBpcGUoXG4gICAgICAgIHRhcChjbHViID0+IGNvbnNvbGUubG9nKFwiRmV0Y2hlZCBjbHViOlwiLCBjbHViKSksXG4gICAgICAgIHN3aXRjaE1hcCgoY2x1YikgPT4ge1xuICAgICAgICAgIGlmICghY2x1Yikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBjbHViIGZvdW5kIGZvciBJRDpcIiwgY2x1YklkKTtcbiAgICAgICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZmJTZXJ2aWNlLmdldENsdWJNZW1iZXJSZWZzKGNsdWJJZCkucGlwZShcbiAgICAgICAgICAgIHRhcChtZW1iZXJzID0+IGNvbnNvbGUubG9nKFwiRmV0Y2hlZCBtZW1iZXJzOlwiLCBtZW1iZXJzKSksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKG1lbWJlcnMpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFtZW1iZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gbWVtYmVycyBmb3VuZCBpbiBjbHViOlwiLCBjbHViSWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc3QgbWVtYmVyRGV0YWlsc1dpdGhIZWxmZXJQdW5rdGUkID0gbWVtYmVycy5tYXAoKG1lbWJlcikgPT5cbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJQcm9maWxlU2VydmljZS5nZXRVc2VyUHJvZmlsZUJ5SWQobWVtYmVyLmlkKS5waXBlKFxuICAgICAgICAgICAgICAgICAgc3dpdGNoTWFwKChwcm9maWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJvZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvZih7IHByb2ZpbGU6IHsgLi4ubWVtYmVyLCBmaXJzdE5hbWU6IFwiVW5rbm93blwiLCBsYXN0TmFtZTogXCJVbmtub3duXCIgfSwgaGVsZmVyUHVua3RlOiBbXSwgdG90YWxQb2ludHM6IDAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVsZmVyU2VydmljZS5nZXRVc2VySGVsZmVyUHVua3RlUmVmcyhwcm9maWxlLmlkLCBjbHViSWQpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgbWFwKChoZWxmZXJQdW5rdGUpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVsZmVyUHVua3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQb2ludHM6IGhlbGZlclB1bmt0ZS5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgTnVtYmVyKGl0ZW0ucG9pbnRzKSwgMClcbiAgICAgICAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YoeyBwcm9maWxlLCBoZWxmZXJQdW5rdGU6IFtdLCB0b3RhbFBvaW50czogMCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHsgcHJvZmlsZTogeyAuLi5tZW1iZXIsIGZpcnN0TmFtZTogXCJVbmtub3duXCIsIGxhc3ROYW1lOiBcIlVua25vd25cIiB9LCBoZWxmZXJQdW5rdGU6IFtdLCB0b3RhbFBvaW50czogMCB9KTtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdChtZW1iZXJEZXRhaWxzV2l0aEhlbGZlclB1bmt0ZSQpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBtYXAobWVtYmVyRGV0YWlscyA9PiB7XG4gICAgICAgICAgICAgIC8vIEludGVncmF0ZSBzZWFyY2ggZmlsdGVyIGhlcmVcbiAgICAgICAgICAgICAgcmV0dXJuIG1lbWJlckRldGFpbHMuc29ydCgoYSwgYikgPT4gYS5wcm9maWxlLmZpcnN0TmFtZS5sb2NhbGVDb21wYXJlKGIucHJvZmlsZS5maXJzdE5hbWUpKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBtZW1iZXJzIGZvciBjbHViOlwiLCBjbHViSWQsIGVycik7XG4gICAgICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2x1YiB3aXRoIElEOlwiLCBjbHViSWQsIGVycik7XG4gICAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSovXG5cbiAgaXNDbHViQWRtaW4oY2x1YkFkbWluTGlzdDogYW55W10sIGNsdWJJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNsdWJBZG1pbkxpc3QgJiYgY2x1YkFkbWluTGlzdC5zb21lKGNsdWIgPT4gY2x1Yi5pZCA9PT0gY2x1YklkKTtcbiAgfVxuICBzZXRGaWx0ZXIocm9sZSkge1xuICAgIHRoaXMuaGFuZGxlU2VhcmNoKHsgZGV0YWlsOiB7IHZhbHVlOiByb2xlIH0gfSlcbiAgfVxuICBlZGl0KCkge1xuXG4gICAgaWYgKHRoaXMuYWxsb3dFZGl0KSB7XG4gICAgICB0aGlzLmFsbG93RWRpdCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFsbG93RWRpdCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlRGF0ZShldmVudCwgZmllbGRuYW1lKSB7XG4gICAgYXdhaXQgdGhpcy5mYlNlcnZpY2Uuc2V0Q2x1YkhlbGZlclJlcG9ydGluZ0RhdGUodGhpcy5jbHViSWQsIGZpZWxkbmFtZSwgZXZlbnQuZGV0YWlsLnZhbHVlKVxuXG4gIH1cblxuXG4gIGFzeW5jIG9wZW5IZWxmZXJFdmVudChoZWxmZXJQdW5rdCkge1xuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbEN0cmwuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogSGVsZmVyRGV0YWlsUGFnZSxcbiAgICAgIHByZXNlbnRpbmdFbGVtZW50OiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5nZXRUb3AoKSxcbiAgICAgIGNhbkRpc21pc3M6IHRydWUsXG4gICAgICBzaG93QmFja2Ryb3A6IHRydWUsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgLi4uaGVsZmVyUHVua3QsXG4gICAgICAgICAgY2x1YklkOiBoZWxmZXJQdW5rdC5jbHViUmVmLmlkLFxuICAgICAgICAgIGlkOiBoZWxmZXJQdW5rdC5ldmVudFJlZi5pZFxuICAgICAgICB9LFxuICAgICAgICBpc0Z1dHVyZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIG1vZGFsLnByZXNlbnQoKTtcblxuICAgIGNvbnN0IHsgZGF0YSwgcm9sZSB9ID0gYXdhaXQgbW9kYWwub25XaWxsRGlzbWlzcygpO1xuXG4gICAgaWYgKHJvbGUgPT09IFwiY29uZmlybVwiKSB7XG4gICAgfVxuXG4gIH1cblxuXG4gIFxuICBhc3luYyBjbG9zZSgpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RhbEN0cmwuZGlzbWlzcyhudWxsLCBcImNsb3NlXCIpO1xuICB9XG5cbiAgYXN5bmMgY29uZmlybSgpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RhbEN0cmwuZGlzbWlzcyhudWxsLCBcImNvbmZpcm1cIik7XG4gIH1cbn1cbiIsICI8bmctY29udGFpbmVyICpuZ0lmPVwiY2x1YiQgfCBhc3luYyBhcyBjbHViXCI+XG4gIDxpb24taGVhZGVyIFt0cmFuc2x1Y2VudF09XCJ0cnVlXCI+XG4gICAgPGlvbi10b29sYmFyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNsdWJBZG1pbkxpc3QkIHwgYXN5bmMgYXMgY2x1YkFkbWluTGlzdFwiPlxuICAgICAgICA8aW9uLWJ1dHRvbnMgKm5nSWY9XCJpc0NsdWJBZG1pbihjbHViQWRtaW5MaXN0LCBjbHViSWQpXCIgc2xvdD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgIDxpb24tYnV0dG9uICpuZ0lmPVwiIWFsbG93RWRpdFwiIChjbGljayk9XCJlZGl0KClcIj57e1wiY29tbW9uLmVkaXRcIiB8IHRyYW5zbGF0ZX19PC9pb24tYnV0dG9uPlxuICAgICAgICAgIDxpb24tYnV0dG9uICpuZ0lmPVwiYWxsb3dFZGl0XCIgKGNsaWNrKT1cImVkaXQoKVwiPnt7XCJjb21tb24uZG9uZVwiIHwgdHJhbnNsYXRlfX08L2lvbi1idXR0b24+XG4gICAgICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxpb24tdGl0bGU+e3sgXCJjb21tb24uaGVscGVyX3BvaW50c1wiIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgICAgIDxpb24tYnV0dG9ucyBzbG90PVwicHJpbWFyeVwiPlxuICAgICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwiY2xvc2UoKVwiPnt7XCJjb21tb24uY2xvc2VcIiB8IHRyYW5zbGF0ZX19PC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24tYnV0dG9ucz5cbiAgICA8L2lvbi10b29sYmFyPlxuICA8L2lvbi1oZWFkZXI+XG5cbiAgPGlvbi1jb250ZW50IFtmdWxsc2NyZWVuXT1cInRydWVcIj5cbiAgICA8aW9uLWhlYWRlciBjb2xsYXBzZT1cImNvbmRlbnNlXCI+XG4gICAgICA8aW9uLXRvb2xiYXI+XG4gICAgICAgIDxpb24tdGl0bGUgc2l6ZT1cImxhcmdlXCI+e3sgXCJjb21tb24uaGVscGVyX3BvaW50c1wiIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgICAgIDwvaW9uLXRvb2xiYXI+XG4gICAgPC9pb24taGVhZGVyPlxuXG4gICAgPGlvbi1zZWFyY2hiYXIgW2RlYm91bmNlXT1cIjEwMDBcIiAoaW9uQ2hhbmdlKT1cImhhbmRsZVNlYXJjaCgkZXZlbnQpXCIgYW5pbWF0ZWQ9XCJ0cnVlXCIgc2VhcmNoLWljb249XCJzZWFyY2gtY2lyY2xlXCJcbiAgICAgIFt2YWx1ZV09XCJzZWFyY2hUZXJtLnZhbHVlXCIgcGxhY2Vob2xkZXI9J3t7XCJjb21tb24uc2VhcmNoZmllbGRcIiB8IHRyYW5zbGF0ZX19Jz48L2lvbi1zZWFyY2hiYXI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgICAgIDwhLS08bmctY29udGFpbmVyICpuZ0lmPVwiY2x1YkFkbWluTGlzdCQgfCBhc3luYyBhcyBjbHViQWRtaW5MaXN0XCI+XG4gICAgICAgICAgPGlvbi1idXR0b24gKm5nSWY9XCJpc0NsdWJBZG1pbihjbHViQWRtaW5MaXN0LCBjbHViLmlkKVwiIHNoYXBlPVwicm91bmRcIiBzaXplPVwic21hbGxcIiAoY2xpY2spPVwiYWRkUm9sZSgpXCI+XG4gICAgICAgICAgICB7e1wiY29tbW9uLmFkZFwiIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwiYWRkLWNpcmNsZS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICAgIDwvbmctY29udGFpbmVyPi0tPlxuICAgICAgIFxuICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cInNldEZpbHRlcihyb2xlKVwiIHNoYXBlPVwicm91bmRcIiBzaXplPVwic21hbGxcIiAqbmdGb3I9XCJsZXQgcm9sZSBvZiBjbHViWydyb2xlcyddXCI+XG4gICAgICAgIHt7cm9sZX19XG4gICAgICA8L2lvbi1idXR0b24+XG4gICAgPC9kaXY+XG5cblxuICAgIDxpb24tbGlzdCBpbnNldD1cInRydWVcIj5cbiAgICAgIDxpb24tbGlzdC1oZWFkZXI+XG4gICAgICAgIEF1c3dlcnR1bmdcbiAgICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWljb24gbmFtZT1cImNhbGVuZGFyXCIgc2xvdD1cInN0YXJ0XCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbD5EYXR1bSB2b248L2lvbi1sYWJlbD5cbiAgICAgICAgPGlvbi1kYXRldGltZS1idXR0b24gZGF0ZXRpbWU9XCJkYXRlRnJvbVwiPjwvaW9uLWRhdGV0aW1lLWJ1dHRvbj5cblxuICAgICAgICA8aW9uLW1vZGFsIFtrZWVwQ29udGVudHNNb3VudGVkXT1cInRydWVcIj5cbiAgICAgICAgICA8bmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8aW9uLWRhdGV0aW1lIGlkPVwiZGF0ZUZyb21cIiBwcmVzZW50YXRpb249XCJkYXRlXCIgW2ZpcnN0RGF5T2ZXZWVrXT1cIjFcIiBbdmFsdWVdPVwiY2x1Yi5oZWxmZXJSZXBvcnRpbmdEYXRlRnJvbVwiXG4gICAgICAgICAgICAgIFttaW5dPVwibWluRGF0ZVwiIFttYXhdPVwibWF4RGF0ZVwiXG4gICAgICAgICAgICAgIChpb25DaGFuZ2UpPVwiY2hhbmdlRGF0ZSgkZXZlbnQsICdoZWxmZXJSZXBvcnRpbmdEYXRlRnJvbScpXCI+PC9pb24tZGF0ZXRpbWU+XG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9pb24tbW9kYWw+XG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwiY2FsZW5kYXJcIiBzbG90PVwic3RhcnRcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsPkRhdHVtIGJpczwvaW9uLWxhYmVsPlxuICAgICAgICA8aW9uLWRhdGV0aW1lLWJ1dHRvbiBkYXRldGltZT1cImRhdGVUb1wiPjwvaW9uLWRhdGV0aW1lLWJ1dHRvbj5cblxuICAgICAgICA8aW9uLW1vZGFsIFtrZWVwQ29udGVudHNNb3VudGVkXT1cInRydWVcIj5cbiAgICAgICAgICA8bmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8aW9uLWRhdGV0aW1lIGlkPVwiZGF0ZVRvXCIgcHJlc2VudGF0aW9uPVwiZGF0ZVwiIFtmaXJzdERheU9mV2Vla109XCIxXCIgW3ZhbHVlXT1cImNsdWIuaGVsZmVyUmVwb3J0aW5nRGF0ZVRvXCJcbiAgICAgICAgICAgICAgW21pbl09XCJtaW5EYXRlXCIgW21heF09XCJtYXhEYXRlXCIgKGlvbkNoYW5nZSk9XCJjaGFuZ2VEYXRlKCRldmVudCwgJ2hlbGZlclJlcG9ydGluZ0RhdGVUbycpXCI+PC9pb24tZGF0ZXRpbWU+XG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9pb24tbW9kYWw+XG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24tc2VsZWN0ICB2YWx1ZT1cIjBcIiBsYWJlbD1cIk1pbi4gUHVua3RlXCIgIGFyaWEtbGFiZWw9XCJNaW4gUHVua3RlXCIgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgICAoaW9uQ2hhbmdlKT1cIm9uSGVsZmVyUHVua3RlTWluQ2hhbmdlKCRldmVudClcIiBwbGFjZWhvbGRlcj1cIk1pbiBQdW5rdGVcIj5cbiAgICAgICAgICA8aW9uLXNlbGVjdC1vcHRpb24gdmFsdWU9XCIwXCI+MCBQdW5rdGU8L2lvbi1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICAgIDxpb24tc2VsZWN0LW9wdGlvbiB2YWx1ZT1cIjFcIj4xIFB1bmt0PC9pb24tc2VsZWN0LW9wdGlvbj5cbiAgICAgICAgICA8aW9uLXNlbGVjdC1vcHRpb24gdmFsdWU9XCIyXCI+MiBQdW5rdGU8L2lvbi1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICAgIDxpb24tc2VsZWN0LW9wdGlvbiB2YWx1ZT1cIjNcIj4zIFB1bmt0ZTwvaW9uLXNlbGVjdC1vcHRpb24+XG4gICAgICAgICAgPGlvbi1zZWxlY3Qtb3B0aW9uIHZhbHVlPVwiNFwiPjQgUHVua3RlPC9pb24tc2VsZWN0LW9wdGlvbj5cbiAgICAgICAgICA8aW9uLXNlbGVjdC1vcHRpb24gdmFsdWU9XCI1XCI+NSBQdW5rdGU8L2lvbi1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICAgIDxpb24tc2VsZWN0LW9wdGlvbiB2YWx1ZT1cIjZcIj42IFB1bmt0ZTwvaW9uLXNlbGVjdC1vcHRpb24+XG4gICAgICAgICAgPGlvbi1zZWxlY3Qtb3B0aW9uIHZhbHVlPVwiN1wiPjcgUHVua3Q8L2lvbi1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICAgIDxpb24tc2VsZWN0LW9wdGlvbiB2YWx1ZT1cIjhcIj44IFB1bmt0ZTwvaW9uLXNlbGVjdC1vcHRpb24+XG4gICAgICAgICAgPGlvbi1zZWxlY3Qtb3B0aW9uIHZhbHVlPVwiOVwiPjkgUHVua3RlPC9pb24tc2VsZWN0LW9wdGlvbj5cbiAgICAgICAgICA8aW9uLXNlbGVjdC1vcHRpb24gdmFsdWU9XCIxMFwiPjEwIFB1bmt0ZTwvaW9uLXNlbGVjdC1vcHRpb24+XG4gICAgICAgICAgPGlvbi1zZWxlY3Qtb3B0aW9uIHZhbHVlPVwiOTlcIj4xMCsgUHVua3RlPC9pb24tc2VsZWN0LW9wdGlvbj5cbiAgICAgICAgPC9pb24tc2VsZWN0PlxuXG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24tc2VsZWN0IHZhbHVlPVwiOTlcIiBsYWJlbD1cIk1heC4gUHVua3RlXCIgIGFyaWEtbGFiZWw9XCJNYXggUHVua3RlXCIgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgICAoaW9uQ2hhbmdlKT1cIm9uSGVsZmVyUHVua3RlTWF4Q2hhbmdlKCRldmVudClcIiBwbGFjZWhvbGRlcj1cIk1heCBQdW5rdGVcIj5cbiAgICAgICAgICA8aW9uLXNlbGVjdC1vcHRpb24gdmFsdWU9XCIwXCI+MCBQdW5rdGU8L2lvbi1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICAgIDxpb24tc2VsZWN0LW9wdGlvbiB2YWx1ZT1cIjFcIj4xIFB1bmt0PC9pb24tc2VsZWN0LW9wdGlvbj5cbiAgICAgICAgICA8aW9uLXNlbGVjdC1vcHRpb24gdmFsdWU9XCIyXCI+MiBQdW5rdGU8L2lvbi1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICAgIDxpb24tc2VsZWN0LW9wdGlvbiB2YWx1ZT1cIjNcIj4zIFB1bmt0ZTwvaW9uLXNlbGVjdC1vcHRpb24+XG4gICAgICAgICAgPGlvbi1zZWxlY3Qtb3B0aW9uIHZhbHVlPVwiNFwiPjQgUHVua3RlPC9pb24tc2VsZWN0LW9wdGlvbj5cbiAgICAgICAgICA8aW9uLXNlbGVjdC1vcHRpb24gdmFsdWU9XCI1XCI+NSBQdW5rdGU8L2lvbi1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICAgIDxpb24tc2VsZWN0LW9wdGlvbiB2YWx1ZT1cIjZcIj42IFB1bmt0ZTwvaW9uLXNlbGVjdC1vcHRpb24+XG4gICAgICAgICAgPGlvbi1zZWxlY3Qtb3B0aW9uIHZhbHVlPVwiN1wiPjcgUHVua3Q8L2lvbi1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICAgIDxpb24tc2VsZWN0LW9wdGlvbiB2YWx1ZT1cIjhcIj44IFB1bmt0ZTwvaW9uLXNlbGVjdC1vcHRpb24+XG4gICAgICAgICAgPGlvbi1zZWxlY3Qtb3B0aW9uIHZhbHVlPVwiOVwiPjkgUHVua3RlPC9pb24tc2VsZWN0LW9wdGlvbj5cbiAgICAgICAgICA8aW9uLXNlbGVjdC1vcHRpb24gdmFsdWU9XCIxMFwiPjEwIFB1bmt0ZTwvaW9uLXNlbGVjdC1vcHRpb24+XG4gICAgICAgICAgPGlvbi1zZWxlY3Qtb3B0aW9uIHZhbHVlPVwiOTlcIj4xMCsgUHVua3RlPC9pb24tc2VsZWN0LW9wdGlvbj5cblxuICAgICAgICA8L2lvbi1zZWxlY3Q+XG5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi10b2dnbGUganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiAgKGlvbkNoYW5nZSk9XCJvbkhlbGZlclB1bmt0ZVBsYW5uZWQoJGV2ZW50KVwiIFtjaGVja2VkXT1cInBsYW5uZWRUb2dnbGUudmFsdWVcIiBbZW5hYmxlT25PZmZMYWJlbHNdPVwidHJ1ZVwiICBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCI+R2VwbGFudGUgRWluc8OkdHplPC9pb24tdG9nZ2xlPjxiciAvPjxiciAvPlxuICAgICAgPC9pb24taXRlbT5cblxuPCEtLSAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1yYW5nZSBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIgbGFiZWw9XCJIZWxmZXJwdW5rdGVcIiBcbiAgICAgICAgW2R1YWxLbm9ic109XCJ0cnVlXCIgXG4gICAgICAgIFt2YWx1ZV09XCJ7IGxvd2VyOiAwLCB1cHBlcjogMiB9XCJcbiAgICAgICAgW3Bpbl09XCJ0cnVlXCIgXG4gICAgICAgIFtwaW5Gb3JtYXR0ZXJdPVwicGluRm9ybWF0dGVyXCJcbiAgICAgICAgW3RpY2tzXT1cInRydWVcIiBbc25hcHNdPVwidHJ1ZVwiIFttaW5dPVwiMFwiIFttYXhdPVwiMTBcIlxuICAgICAgICAoaW9uQ2hhbmdlKT1cIm9uSGVsZmVyUHVua3RlQ2hhbmdlKCRldmVudClcIlxuICAgICAgICA+PC9pb24tcmFuZ2U+XG5cbiAgICAgICAgPGJyIC8+XG4gICAgICA8L2lvbi1pdGVtPi0tPlxuICAgIDwvaW9uLWxpc3Q+XG5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWx0ZXJlZEhlbGZlclB1bmt0ZUxpc3QkIHwgYXN5bmMgYXMgaGVsZmVyUHVua3RlTGlzdFwiPlxuICAgICAgPGlvbi1saXN0IGluc2V0PVwidHJ1ZVwiPlxuICAgICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICAgIE1pdGdsaWVkZXIgKHt7aGVsZmVyUHVua3RlTGlzdC5sZW5ndGh9fSlcbiAgICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG5cbiAgICAgICAgPGlvbi1pdGVtLWdyb3VwPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGdyb3VwQnkgb2YgZ3JvdXBBcnJheVwiPlxuICAgICAgICAgICAgPGlvbi1pdGVtLWRpdmlkZXIgY29sb3I9XCJsaWdodFwiPlxuICAgICAgICAgICAgICA8aW9uLWxhYmVsPiB7e2dyb3VwQnl9fSA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgIDwvaW9uLWl0ZW0tZGl2aWRlcj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWVtYmVyUHVua3RlIG9mIGhlbGZlclB1bmt0ZUxpc3RcIj5cblxuICAgICAgICAgICAgICA8aW9uLWl0ZW0gKm5nSWY9XCJtZW1iZXJQdW5rdGUuZ3JvdXBCeSA9PSBncm91cEJ5XCI+XG4gICAgICAgICAgICAgICAgPGlvbi1sYWJlbD57e21lbWJlclB1bmt0ZS5wcm9maWxlLmZpcnN0TmFtZX19IHt7bWVtYmVyUHVua3RlLnByb2ZpbGUubGFzdE5hbWV9fSA8aW9uLWJhZGdlXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiICpuZ0Zvcj1cImxldCByb2xlIG9mIG1lbWJlclB1bmt0ZS5yb2xlc1wiPnt7cm9sZX19PC9pb24tYmFkZ2U+PC9pb24tbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8aW9uLWJhZGdlICpuZ0lmPVwibWVtYmVyUHVua3RlLnRvdGFsUG9pbnRzID49IDNcIiBjb2xvcj1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgc2xvdD1cImVuZFwiPnt7bWVtYmVyUHVua3RlLnRvdGFsUG9pbnRzfX08L2lvbi1iYWRnZT5cbiAgICAgICAgICAgICAgICA8aW9uLWJhZGdlICpuZ0lmPVwibWVtYmVyUHVua3RlLnRvdGFsUG9pbnRzID09IDJcIiBjb2xvcj1cIndhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgc2xvdD1cImVuZFwiPnt7bWVtYmVyUHVua3RlLnRvdGFsUG9pbnRzfX08L2lvbi1iYWRnZT5cbiAgICAgICAgICAgICAgICA8aW9uLWJhZGdlICpuZ0lmPVwibWVtYmVyUHVua3RlLnRvdGFsUG9pbnRzID09IDFcIiBjb2xvcj1cIndhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgc2xvdD1cImVuZFwiPnt7bWVtYmVyUHVua3RlLnRvdGFsUG9pbnRzfX08L2lvbi1iYWRnZT5cbiAgICAgICAgICAgICAgICA8aW9uLWJhZGdlICpuZ0lmPVwibWVtYmVyUHVua3RlLnRvdGFsUG9pbnRzID09IDBcIiBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgICAgICAgICBzbG90PVwiZW5kXCI+e3ttZW1iZXJQdW5rdGUudG90YWxQb2ludHN9fTwvaW9uLWJhZGdlPlxuICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICAgICAgICAgIDxpb24tbGlzdCAqbmdJZj1cIm1lbWJlclB1bmt0ZS5ncm91cEJ5ID09IGdyb3VwQnlcIj5cblxuICAgICAgICAgICAgICAgIDxpb24taXRlbS1zbGlkaW5nICNpdGVtICpuZ0Zvcj1cImxldCBoZWxmZXJQdW5rdCBvZiBtZW1iZXJQdW5rdGUuaGVsZmVyUHVua3RlXCI+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2x1YkFkbWluTGlzdCQgfCBhc3luYyBhcyBjbHViQWRtaW5MaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpb24taXRlbS1vcHRpb25zICpuZ0lmPVwiaXNDbHViQWRtaW4oY2x1YkFkbWluTGlzdCwgY2x1YklkKVwiIHNpZGU9XCJzdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpb24taXRlbS1vcHRpb24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImNoYW5nZUhlbGZlclB1bmt0KGl0ZW0sIG1lbWJlclB1bmt0ZSAsaGVsZmVyUHVua3QpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJoZWxwLWJ1b3ktb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9pb24taXRlbS1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgPGlvbi1pdGVtLW9wdGlvbnMgKm5nSWY9XCJpc0NsdWJBZG1pbihjbHViQWRtaW5MaXN0LCBjbHViSWQpXCIgc2lkZT1cImVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpb24taXRlbS1vcHRpb24gY29sb3I9XCJkYW5nZXJcIiAoY2xpY2spPVwiZGVsZXRlSGVsZmVyUHVua3QoaXRlbSwgbWVtYmVyUHVua3RlLGhlbGZlclB1bmt0KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwidHJhc2hcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9ucz5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPGlvbi1pdGVtIGRldGFpbD1cInRydWVcIiAoY2xpY2spPVwib3BlbkhlbGZlckV2ZW50KGhlbGZlclB1bmt0KVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIERhdHVtOiB7e2hlbGZlclB1bmt0LmV2ZW50RGF0ZS50b0RhdGUoKSB8IGRhdGU6J2RkLk1NLllZWVkgJ319XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz4ge3toZWxmZXJQdW5rdC5uYW1lfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPiB7e2hlbGZlclB1bmt0LnNjaGljaHROYW1lfX0gdm9uIHt7aGVsZmVyUHVua3Quc2NoaWNodFRpbWVGcm9tfX0gVWhyIGJpcyB7e2hlbGZlclB1bmt0LnNjaGljaHRUaW1lVG99fSBVaHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICA8aW9uLWJhZGdlIGNvbG9yPVwicHJpbWFyeVwiIHNsb3Q9XCJlbmRcIj57e2hlbGZlclB1bmt0LnBvaW50c319PC9pb24tYmFkZ2U+XG4gICAgICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0tc2xpZGluZz5cblxuICAgICAgICAgICAgICAgIDxpb24taXRlbSAqbmdGb3I9XCJsZXQgcGxhbm5lZCBvZiBtZW1iZXJQdW5rdGUucGxhbm5lZEhlbGZlclwiPlxuICAgICAgICAgICAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgIDxpb24tYmFkZ2U+Z2VwbGFudDwvaW9uLWJhZGdlPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgIERhdHVtOiB7e3BsYW5uZWQuZXZlbnQuc3RhcnREYXRlIHwgZGF0ZTonZGQuTU0uWVlZWSAnfX1cbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz4ge3twbGFubmVkLmV2ZW50Lm5hbWV9fVxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPiB7e3BsYW5uZWQuc2NoaWNodC5uYW1lfX0gdm9uIHt7cGxhbm5lZC5zY2hpY2h0LnRpbWVGcm9tfX0gVWhyIGJpcyB7e3BsYW5uZWQuc2NoaWNodC50aW1lVG99fSBVaHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlvbi1iYWRnZSBjb2xvcj1cIm1lZGl1bVwiIHNsb3Q9XCJlbmRcIj57e3BsYW5uZWQuc2NoaWNodC5wb2ludHN9fTwvaW9uLWJhZGdlPlxuICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgICAgICAgICAgPC9pb24tbGlzdD5cblxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvaW9uLWl0ZW0tZ3JvdXA+XG5cbiAgICAgIDwvaW9uLWxpc3Q+XG5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICA8L2lvbi1jb250ZW50PlxuXG48L25nLWNvbnRhaW5lcj4iLCAiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBBbGVydENvbnRyb2xsZXIsXG4gIE1vZGFsQ29udHJvbGxlcixcbiAgTmF2UGFyYW1zLFxuICBUb2FzdENvbnRyb2xsZXIsXG59IGZyb20gXCJAaW9uaWMvYW5ndWxhclwiO1xuaW1wb3J0IHsgQnJvd3NlciB9IGZyb20gXCJAY2FwYWNpdG9yL2Jyb3dzZXJcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxuICBTdWJzY3JpcHRpb24sXG4gIGNhdGNoRXJyb3IsXG4gIGNvbWJpbmVMYXRlc3QsXG4gIGZpbmFsaXplLFxuICBmaXJzdCxcbiAgZm9ya0pvaW4sXG4gIGxhc3RWYWx1ZUZyb20sXG4gIG1hcCxcbiAgb2YsXG4gIHN0YXJ0V2l0aCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG59IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcInNyYy9hcHAvbW9kZWxzL3VzZXJcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZVNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS91c2VyLXByb2ZpbGUuc2VydmljZVwiO1xuaW1wb3J0IHsgTWVtYmVyUGFnZSB9IGZyb20gXCIuLi9tZW1iZXIvbWVtYmVyLnBhZ2VcIjtcbmltcG9ydCB7IENsdWJNZW1iZXJMaXN0UGFnZSB9IGZyb20gXCIuLi9jbHViLW1lbWJlci1saXN0L2NsdWItbWVtYmVyLWxpc3QucGFnZVwiO1xuaW1wb3J0IHsgQ2x1YkFkbWluTGlzdFBhZ2UgfSBmcm9tIFwiLi4vY2x1Yi1hZG1pbi1saXN0L2NsdWItYWRtaW4tbGlzdC5wYWdlXCI7XG5pbXBvcnQgeyBUZWFtTGlzdFBhZ2UgfSBmcm9tIFwiLi4vdGVhbS1saXN0L3RlYW0tbGlzdC5wYWdlXCI7XG5pbXBvcnQgeyBDbHViVGVhbUxpc3RQYWdlIH0gZnJvbSBcIi4uL2NsdWItdGVhbS1saXN0L2NsdWItdGVhbS1saXN0LnBhZ2VcIjtcbmltcG9ydCB7IENsdWJSZXF1ZXN0TGlzdFBhZ2UgfSBmcm9tIFwiLi4vY2x1Yi1yZXF1ZXN0LWxpc3QvY2x1Yi1yZXF1ZXN0LWxpc3QucGFnZVwiO1xuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgSGVsZmVyUHVua3RlQ2x1YlBhZ2UgfSBmcm9tIFwiLi4vaGVsZmVyL2hlbGZlci1wdW5rdGUtY2x1Yi9oZWxmZXItcHVua3RlLWNsdWIucGFnZVwiO1xuaW1wb3J0IHsgQ2x1YiB9IGZyb20gXCJzcmMvYXBwL21vZGVscy9jbHViXCI7XG5pbXBvcnQgeyBDbHViU3Vic2NyaXB0aW9uUGFnZSB9IGZyb20gXCIuLi9jbHViLXN1YnNjcmlwdGlvbi9jbHViLXN1YnNjcmlwdGlvbi5wYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1jbHViXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jbHViLnBhZ2UuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9jbHViLnBhZ2Uuc2Nzc1wiXSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBDbHViUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dChcImRhdGFcIikgY2x1YjogYW55O1xuXG4gIGNsdWIkOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgdXNlciQ6IE9ic2VydmFibGU8VXNlcj47XG4gIHVzZXI6IFVzZXI7XG5cbiAgY2x1YkFkbWluTGlzdCQ6IE9ic2VydmFibGU8Q2x1YltdPjtcblxuICAvLyBhbGVydFRlYW1TZWxlY3Rpb24gPSBbXTtcblxuICBhbGxvd0VkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vZGFsQ3RybDogTW9kYWxDb250cm9sbGVyLFxuICAgIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFsZXJ0Q3RybDogQWxlcnRDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdG9hc3RDdHJsOiBUb2FzdENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSB1c2VyUHJvZmlsZVNlcnZpY2U6IFVzZXJQcm9maWxlU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZiU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2x1YiA9IHRoaXMubmF2UGFyYW1zLmdldChcImRhdGFcIik7XG5cbiAgICB0aGlzLmNsdWIkID0gdGhpcy5nZXRDbHViKHRoaXMuY2x1Yi5pZCk7XG5cbiAgICB0aGlzLmNsdWJBZG1pbkxpc3QkID0gdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1YkFkbWluTGlzdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG5cbiAgfVxuICBlZGl0KCkge1xuICAgIGlmICh0aGlzLmFsbG93RWRpdCkge1xuICAgICAgdGhpcy5hbGxvd0VkaXQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbGxvd0VkaXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlzQ2x1YkFkbWluKGNsdWJBZG1pbkxpc3Q6IGFueVtdLCBjbHViSWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjbHViQWRtaW5MaXN0ICYmIGNsdWJBZG1pbkxpc3Quc29tZShjbHViID0+IGNsdWIuaWQgPT09IGNsdWJJZCk7XG4gIH1cbiAgYXN5bmMgb3BlblVybCh1cmw6IHN0cmluZykge1xuICAgIEJyb3dzZXIub3Blbih7XG4gICAgICB1cmw6IHVybFxuICAgIH0pO1xuICB9XG4gIGdldENsdWIoY2x1YklkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBjYWxjdWxhdGVBZ2UgPSAoZGF0ZU9mQmlydGgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiRG9COiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGVPZkJpcnRoKSk7XG4gICAgICBjb25zdCBiaXJ0aGRheSA9IG5ldyBEYXRlKGRhdGVPZkJpcnRoLnNlY29uZHMgKiAxMDAwKTtcbiAgICAgIGNvbnN0IGFnZURpZk1zID0gRGF0ZS5ub3coKSAtIGJpcnRoZGF5LmdldFRpbWUoKTtcbiAgICAgIGNvbnN0IGFnZURhdGUgPSBuZXcgRGF0ZShhZ2VEaWZNcyk7IC8vIG1pbGlzZWNvbmRzIGZyb20gZXBvY2hcbiAgICAgIHJldHVybiBNYXRoLmFicyhhZ2VEYXRlLmdldFVUQ0Z1bGxZZWFyKCkgLSAxOTcwKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlciQoKS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHRhcCgodXNlcikgPT4ge1xuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBFcnJvcihcIlVzZXIgbm90IGZvdW5kXCIpO1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1YlJlZihjbHViSWQpKSxcbiAgICAgIHN3aXRjaE1hcCgoY2x1YikgPT4ge1xuICAgICAgICBpZiAoIWNsdWIpIHJldHVybiBvZihudWxsKTtcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3Qoe1xuICAgICAgICAgIGNsdWJNZW1iZXJzOiB0aGlzLmZiU2VydmljZS5nZXRDbHViTWVtYmVyUmVmcyhjbHViSWQpLFxuICAgICAgICAgIGNsdWJBZG1pbnM6IHRoaXMuZmJTZXJ2aWNlLmdldENsdWJBZG1pblJlZnMoY2x1YklkKSxcbiAgICAgICAgICBjbHViUmVxdWVzdHM6IHRoaXMuZmJTZXJ2aWNlLmdldENsdWJSZXF1ZXN0UmVmcyhjbHViSWQpLFxuICAgICAgICAgIGNsdWJUZWFtczogdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1YlRlYW1SZWZzKGNsdWJJZCksXG4gICAgICAgIH0pLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKCh7XG4gICAgICAgICAgICBjbHViTWVtYmVycyxcbiAgICAgICAgICAgIGNsdWJBZG1pbnMsXG4gICAgICAgICAgICBjbHViUmVxdWVzdHMsXG4gICAgICAgICAgICBjbHViVGVhbXMsXG4gICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVtYmVyUHJvZmlsZXMkID0gY2x1Yk1lbWJlcnMubWFwKChtZW1iZXIpID0+XG4gICAgICAgICAgICAgIHRoaXMudXNlclByb2ZpbGVTZXJ2aWNlLmdldFVzZXJQcm9maWxlQnlJZChtZW1iZXIuaWQpLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+XG4gICAgICAgICAgICAgICAgICBvZih7IC4uLm1lbWJlciwgZmlyc3ROYW1lOiBcIlVua25vd25cIiwgbGFzdE5hbWU6IFwiVW5rbm93blwiIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgYWRtaW5Qcm9maWxlcyQgPSBjbHViQWRtaW5zLm1hcCgoYWRtaW4pID0+XG4gICAgICAgICAgICAgIHRoaXMudXNlclByb2ZpbGVTZXJ2aWNlLmdldFVzZXJQcm9maWxlQnlJZChhZG1pbi5pZCkucGlwZShcbiAgICAgICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT5cbiAgICAgICAgICAgICAgICAgIG9mKHsgLi4uYWRtaW4sIGZpcnN0TmFtZTogXCJVbmtub3duXCIsIGxhc3ROYW1lOiBcIlVua25vd25cIiB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGNsdWJSZXF1ZXN0cyQgPSBjbHViUmVxdWVzdHMubWFwKChyZXF1ZXN0KSA9PlxuICAgICAgICAgICAgICB0aGlzLnVzZXJQcm9maWxlU2VydmljZS5nZXRVc2VyUHJvZmlsZUJ5SWQocmVxdWVzdC5pZCkucGlwZShcbiAgICAgICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT5cbiAgICAgICAgICAgICAgICAgIG9mKHsgLi4ucmVxdWVzdCwgZmlyc3ROYW1lOiBcIlVua25vd25cIiwgbGFzdE5hbWU6IFwiVW5rbm93blwiIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2x1YlRlYW1zKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZm9ya0pvaW4oe1xuICAgICAgICAgICAgICBjbHViTWVtYmVyczogZm9ya0pvaW4obWVtYmVyUHJvZmlsZXMkKS5waXBlKHN0YXJ0V2l0aChbXSkpLFxuICAgICAgICAgICAgICBjbHViQWRtaW5zOiBmb3JrSm9pbihhZG1pblByb2ZpbGVzJCkucGlwZShzdGFydFdpdGgoW10pKSxcbiAgICAgICAgICAgICAgY2x1YlJlcXVlc3RzOiBmb3JrSm9pbihjbHViUmVxdWVzdHMkKS5waXBlKHN0YXJ0V2l0aChbXSkpLFxuICAgICAgICAgICAgICBjbHViVGVhbXM6IG9mKGNsdWJUZWFtcykgXG4gICAgICAgICAgICB9KS5waXBlKFxuICAgICAgICAgICAgICBtYXAoKHtcbiAgICAgICAgICAgICAgICBjbHViTWVtYmVycyxcbiAgICAgICAgICAgICAgICBjbHViQWRtaW5zLFxuICAgICAgICAgICAgICAgIGNsdWJSZXF1ZXN0cyxcbiAgICAgICAgICAgICAgICBjbHViVGVhbXNcbiAgICAgICAgICAgICAgfSkgPT4gKHtcbiAgICAgICAgICAgICAgICBjbHViTWVtYmVyczogY2x1Yk1lbWJlcnMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgKG1lbWJlcikgPT4gbWVtYmVyICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICApLCAvLyBGaWx0ZXIgb3V0IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIGNsdWJBZG1pbnM6IGNsdWJBZG1pbnMuZmlsdGVyKChhZG1pbikgPT4gYWRtaW4gIT09IHVuZGVmaW5lZCksIC8vIEZpbHRlciBvdXQgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgY2x1YlJlcXVlc3RzOiBjbHViUmVxdWVzdHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgKHJlcXVlc3QpID0+IHJlcXVlc3QgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICksIC8vIEZpbHRlciBvdXQgdW5kZWZpbmVkKi9cbiAgICAgICAgICAgICAgICBjbHViVGVhbXM6Y2x1YlRlYW1zLFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWFwKCh7XG4gICAgICAgICAgICBjbHViTWVtYmVycyxcbiAgICAgICAgICAgIGNsdWJBZG1pbnMsXG4gICAgICAgICAgICBjbHViUmVxdWVzdHMsXG4gICAgICAgICAgICBjbHViVGVhbXNcbiAgICAgICAgICB9KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGFnZXMgPSBjbHViTWVtYmVyc1xuICAgICAgICAgICAgICAubWFwKChtZW1iZXIpID0+XG4gICAgICAgICAgICAgICAgbWVtYmVyLmhhc093blByb3BlcnR5KFwiZGF0ZU9mQmlydGhcIilcbiAgICAgICAgICAgICAgICAgID8gY2FsY3VsYXRlQWdlKG1lbWJlci5kYXRlT2ZCaXJ0aClcbiAgICAgICAgICAgICAgICAgIDogMFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5maWx0ZXIoKGFnZSkgPT4gYWdlID4gMCk7IC8vIEZpbHRlciBvdXQgaW52YWxpZCBvciAnVW5rbm93bicgYWdlc1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWdlcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGF2ZXJhZ2VBZ2UgPVxuICAgICAgICAgICAgICBhZ2VzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICA/IGFnZXMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCkgLyBhZ2VzLmxlbmd0aFxuICAgICAgICAgICAgICAgIDogMDsgLy8gQ2FsY3VsYXRlIGF2ZXJhZ2Ugb3Igc2V0IHRvIDAgaWYgbm8gdmFsaWQgYWdlc1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2x1YlRlYW1zKVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4uY2x1YixcbiAgICAgICAgICAgICAgY2x1YlRlYW1zLFxuICAgICAgICAgICAgICB1cGRhdGVkOiBUaW1lc3RhbXAuZnJvbU1pbGxpcyhjbHViLnVwZGF0ZWQuc2Vjb25kcyAqIDEwMDApLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgIGF2ZXJhZ2VBZ2U6IGF2ZXJhZ2VBZ2UudG9GaXhlZCgxKSwgLy8gS2VlcCB0d28gZGVjaW1hbCBwbGFjZXNcbiAgICAgICAgICAgICAgY2x1Yk1lbWJlcnMsXG4gICAgICAgICAgICAgIGNsdWJBZG1pbnMsXG4gICAgICAgICAgICAgIGNsdWJSZXF1ZXN0cyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMudG9hc3RBY3Rpb25FcnJvcihlcnIpO1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gZ2V0Q2x1YldpdGhNZW1iZXJzQW5kQWRtaW5zOlwiLCBlcnIpO1xuICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBvbklucHV0KGV2LCBmaWVsZG5hbWUpe1xuICAgIGNvbnNvbGUubG9nKGV2LmRldGFpbC52YWx1ZSk7XG4gICAgdGhpcy5mYlNlcnZpY2Uuc2V0Q2x1YlRocmVzaG9sZCh0aGlzLmNsdWIuaWQsIGZpZWxkbmFtZSwgZXYuZGV0YWlsLnZhbHVlKVxuICB9XG5cbiAgYXN5bmMgb3BlblJlcXVlc3RMaXN0KCkge1xuICAgIGNvbnNvbGUubG9nKFwib3BlbiBDbHViIFJlcXVlc3QgTGlzdFwiKTtcbiAgICBjb25zdCBtb2RhbCA9IGF3YWl0IHRoaXMubW9kYWxDdHJsLmNyZWF0ZSh7XG4gICAgICBjb21wb25lbnQ6IENsdWJSZXF1ZXN0TGlzdFBhZ2UsXG4gICAgICBwcmVzZW50aW5nRWxlbWVudDogYXdhaXQgdGhpcy5tb2RhbEN0cmwuZ2V0VG9wKCksXG4gICAgICBjYW5EaXNtaXNzOiB0cnVlLFxuICAgICAgc2hvd0JhY2tkcm9wOiB0cnVlLFxuICAgICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgY2x1YjogdGhpcy5jbHViXG4gICAgICB9LFxuICAgIH0pO1xuICAgIG1vZGFsLnByZXNlbnQoKTtcblxuICAgIGNvbnN0IHsgZGF0YSwgcm9sZSB9ID0gYXdhaXQgbW9kYWwub25XaWxsRGlzbWlzcygpO1xuXG4gICAgaWYgKHJvbGUgPT09IFwiY29uZmlybVwiKSB7XG4gICAgfVxuICB9XG5cblxuICBhc3luYyBvcGVuTWVtYmVyTGlzdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIm9wZW4gQ2x1YiBNZW1iZXIgTGlzdFwiKTtcbiAgICBjb25zdCBtb2RhbCA9IGF3YWl0IHRoaXMubW9kYWxDdHJsLmNyZWF0ZSh7XG4gICAgICBjb21wb25lbnQ6IENsdWJNZW1iZXJMaXN0UGFnZSxcbiAgICAgIHByZXNlbnRpbmdFbGVtZW50OiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5nZXRUb3AoKSxcbiAgICAgIGNhbkRpc21pc3M6IHRydWUsXG4gICAgICBzaG93QmFja2Ryb3A6IHRydWUsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBjbHViOiB0aGlzLmNsdWJcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgbW9kYWwucHJlc2VudCgpO1xuXG4gICAgY29uc3QgeyBkYXRhLCByb2xlIH0gPSBhd2FpdCBtb2RhbC5vbldpbGxEaXNtaXNzKCk7XG5cbiAgICBpZiAocm9sZSA9PT0gXCJjb25maXJtXCIpIHtcbiAgICB9XG4gIH1cblxuXG4gIGFzeW5jIG9wZW5BZG1pbkxpc3QoKSB7XG4gICAgY29uc29sZS5sb2coXCJvcGVuIENsdWIgQWRtaW5cIik7XG4gICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoe1xuICAgICAgY29tcG9uZW50OiBDbHViQWRtaW5MaXN0UGFnZSxcbiAgICAgIHByZXNlbnRpbmdFbGVtZW50OiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5nZXRUb3AoKSxcbiAgICAgIGNhbkRpc21pc3M6IHRydWUsXG4gICAgICBzaG93QmFja2Ryb3A6IHRydWUsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBjbHViOiB0aGlzLmNsdWJcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgbW9kYWwucHJlc2VudCgpO1xuXG4gICAgY29uc3QgeyBkYXRhLCByb2xlIH0gPSBhd2FpdCBtb2RhbC5vbldpbGxEaXNtaXNzKCk7XG5cbiAgICBpZiAocm9sZSA9PT0gXCJjb25maXJtXCIpIHtcbiAgICB9XG4gIH1cbiAgLypcbiAgICBhc3luYyBvcGVuUmVxdWVzdE1lbWJlcihtZW1iZXI6IFByb2ZpbGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwib3BlbiBSZXF1ZXN0IE1lbWJlclwiKTtcbiAgICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbEN0cmwuY3JlYXRlKHtcbiAgICAgICAgY29tcG9uZW50OiBNZW1iZXJQYWdlLFxuICAgICAgICBwcmVzZW50aW5nRWxlbWVudDogYXdhaXQgdGhpcy5tb2RhbEN0cmwuZ2V0VG9wKCksXG4gICAgICAgIGNhbkRpc21pc3M6IHRydWUsXG4gICAgICAgIHNob3dCYWNrZHJvcDogdHJ1ZSxcbiAgICAgICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgICBkYXRhOiBtZW1iZXIsXG4gICAgICAgICAgaXNSZXF1ZXN0OiB0cnVlLFxuICAgICAgICAgIGNsdWJJZDogdGhpcy5jbHViLmlkXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIG1vZGFsLnByZXNlbnQoKTtcbiAgXG4gICAgICBjb25zdCB7IGRhdGEsIHJvbGUgfSA9IGF3YWl0IG1vZGFsLm9uV2lsbERpc21pc3MoKTtcbiAgXG4gICAgICBpZiAocm9sZSA9PT0gXCJjb25maXJtXCIpIHtcbiAgICAgIH1cbiAgICB9Ki9cblxuICBhc3luYyBvcGVuU3Vic2NyaXB0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwib3BlbiBvcGVuU3Vic2NyaXB0aW9uIENMVUJcIik7XG4gICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoe1xuICAgICAgY29tcG9uZW50OiBDbHViU3Vic2NyaXB0aW9uUGFnZSxcbiAgICAgIHByZXNlbnRpbmdFbGVtZW50OiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5nZXRUb3AoKSxcbiAgICAgIGNhbkRpc21pc3M6IHRydWUsXG4gICAgICBzaG93QmFja2Ryb3A6IHRydWUsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBjbHViSWQ6IHRoaXMuY2x1Yi5pZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgbW9kYWwucHJlc2VudCgpO1xuXG4gICAgY29uc3QgeyBkYXRhLCByb2xlIH0gPSBhd2FpdCBtb2RhbC5vbldpbGxEaXNtaXNzKCk7XG5cbiAgICBpZiAocm9sZSA9PT0gXCJjb25maXJtXCIpIHtcbiAgICB9XG5cbiAgfVxuXG4gIGFzeW5jIG9wZW5IZWxmZXJQdW5rdGVDbHViKCkge1xuICAgIGNvbnNvbGUubG9nKFwib3BlbiBIZWxmZXJQdW5rdGUgQ0xVQlwiKTtcbiAgICBjb25zdCBtb2RhbCA9IGF3YWl0IHRoaXMubW9kYWxDdHJsLmNyZWF0ZSh7XG4gICAgICBjb21wb25lbnQ6IEhlbGZlclB1bmt0ZUNsdWJQYWdlLFxuICAgICAgcHJlc2VudGluZ0VsZW1lbnQ6IGF3YWl0IHRoaXMubW9kYWxDdHJsLmdldFRvcCgpLFxuICAgICAgY2FuRGlzbWlzczogdHJ1ZSxcbiAgICAgIHNob3dCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIGNsdWJJZDogdGhpcy5jbHViLmlkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBtb2RhbC5wcmVzZW50KCk7XG5cbiAgICBjb25zdCB7IGRhdGEsIHJvbGUgfSA9IGF3YWl0IG1vZGFsLm9uV2lsbERpc21pc3MoKTtcblxuICAgIGlmIChyb2xlID09PSBcImNvbmZpcm1cIikge1xuICAgIH1cblxuICB9XG4gIGNoYW5nZUVtYWlsKGV2ZW50KXtcbiAgICBjb25zb2xlLmxvZyhldmVudC5kZXRhaWwudmFsdWUpXG4gICAgLy90aGlzLmZiU2VydmljZS5zZXRDbHViXG4gIH1cblxuIC8qIGNoYW5nZUNsdWJ0dHJpYnV0ZSh2YWx1ZTogYW55LCBmaWVsZG5hbWUpIHtcbiAgICBjb25zdCB1c2VyID0gdGhpcy5hdXRoU2VydmljZS5hdXRoLmN1cnJlbnRVc2VyO1xuICAgIGNvbnN0IHVzZXJQcm9maWxlUmVmID0gZG9jKHRoaXMuZmlyZXN0b3JlLCBgdXNlclByb2ZpbGUvJHt1c2VyLnVpZH1gKTtcbiAgICByZXR1cm4gdXBkYXRlRG9jKHVzZXJQcm9maWxlUmVmLCB7IFtmaWVsZG5hbWVdOiB2YWx1ZSB9KTtcbiAgfSovXG5cblxuXG4gIGFzeW5jIG9wZW5UZWFtTGlzdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIm9wZW4gVGVhbSBMaXN0XCIpO1xuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbEN0cmwuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogQ2x1YlRlYW1MaXN0UGFnZSxcbiAgICAgIHByZXNlbnRpbmdFbGVtZW50OiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5nZXRUb3AoKSxcbiAgICAgIGNhbkRpc21pc3M6IHRydWUsXG4gICAgICBzaG93QmFja2Ryb3A6IHRydWUsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBjbHViSWQ6IHRoaXMuY2x1Yi5pZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgbW9kYWwucHJlc2VudCgpO1xuXG4gICAgY29uc3QgeyBkYXRhLCByb2xlIH0gPSBhd2FpdCBtb2RhbC5vbldpbGxEaXNtaXNzKCk7XG5cbiAgICBpZiAocm9sZSA9PT0gXCJjb25maXJtXCIpIHtcbiAgICB9XG4gIH1cblxuXG4gIGFzeW5jIHRvYXN0QWN0aW9uU2F2ZWQoKSB7XG4gICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uc3VjY2Vzc19fc2F2ZWRcIikpLFxuICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIixcbiAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICB9KTtcblxuICAgIGF3YWl0IHRvYXN0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIHRvYXN0QWN0aW9uQ2FuY2VsZWQoKSB7XG4gICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uYWN0aW9uX19jYW5jZWxlZFwiKSksXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgfSk7XG4gICAgYXdhaXQgdG9hc3QucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgdG9hc3RBY3Rpb25FcnJvcihlcnJvcikge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdEN0cmwuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gIH1cblxuICBhc3luYyBjbG9zZSgpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RhbEN0cmwuZGlzbWlzcyhudWxsLCBcImNsb3NlXCIpO1xuICB9XG5cbiAgYXN5bmMgY29uZmlybSgpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RhbEN0cmwuZGlzbWlzcyh0aGlzLmNsdWIsIFwiY29uZmlybVwiKTtcbiAgfVxufVxuIiwgIjxuZy1jb250YWluZXIgKm5nSWY9XCJjbHViJCB8IGFzeW5jIGFzIGNsdWJcIj5cbiAgPGlvbi1oZWFkZXIgW3RyYW5zbHVjZW50XT1cInRydWVcIj5cbiAgICA8aW9uLXRvb2xiYXI+XG4gICAgICA8IS0tPGlvbi1idXR0b25zIHNsb3Q9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgPGlvbi1idXR0b24gKm5nSWY9XCIhYWxsb3dFZGl0XCIgKGNsaWNrKT1cImVkaXQoKVwiXG4gICAgICAgICAgPnt7XCJjb21tb24uZWRpdFwiIHwgdHJhbnNsYXRlfX08L2lvbi1idXR0b25cbiAgICAgICAgPlxuICAgICAgICA8aW9uLWJ1dHRvbiAqbmdJZj1cImFsbG93RWRpdFwiIChjbGljayk9XCJlZGl0KClcIlxuICAgICAgICAgID57e1wiY29tbW9uLmNhbmNlbFwiIHwgdHJhbnNsYXRlfX08L2lvbi1idXR0b25cbiAgICAgICAgPlxuICAgICAgPC9pb24tYnV0dG9ucz4tLT5cbiAgICAgIDxpb24tdGl0bGU+e3tcImNsdWIuZGV0YWlsc1wiIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgICAgIDxpb24tYnV0dG9ucyBzbG90PVwicHJpbWFyeVwiPlxuICAgICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwiY2xvc2UoKVwiPnt7XCJjb21tb24uY2xvc2VcIiB8IHRyYW5zbGF0ZX19PC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24tYnV0dG9ucz5cbiAgICA8L2lvbi10b29sYmFyPlxuICA8L2lvbi1oZWFkZXI+XG5cbiAgPGlvbi1jb250ZW50IFtmdWxsc2NyZWVuXT1cInRydWVcIj5cbiAgICA8aW9uLWhlYWRlciBjb2xsYXBzZT1cImNvbmRlbnNlXCI+XG4gICAgICA8aW9uLXRvb2xiYXI+XG4gICAgICAgIDxpb24tdGl0bGUgc2l6ZT1cImxhcmdlXCI+e3tcImNsdWIuZGV0YWlsc1wiIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgICAgIDwvaW9uLXRvb2xiYXI+XG4gICAgPC9pb24taGVhZGVyPlxuXG4gICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCI+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24tdGh1bWJuYWlsIHNsb3Q9XCJzdGFydFwiPlxuICAgICAgICAgIDxpbWcgYWx0PVwie3tjbHViLm5hbWV9fVwiIHNyYz1cInt7Y2x1Yi5sb2dvfX1cIiAvPlxuICAgICAgICA8L2lvbi10aHVtYm5haWw+XG4gICAgICAgIDxpb24tbGFiZWw+e3tjbHViLm5hbWV9fTwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cbiAgICAgIDwhLS0gICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24tbGFiZWw+dHlwZTwvaW9uLWxhYmVsPlxuICAgICAgICA8aW9uLWJhZGdlIHNsb3Q9XCJlbmRcIj57e2NsdWIudHlwZX19PC9pb24tYmFkZ2U+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWxhYmVsPiB7e2NsdWIud2Vic2l0ZX19IDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1sYWJlbD4ge3tjbHViLndvcmRwcmVzc319IDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT4tLT5cblxuICAgICAgPCEtLVxuICA8aW9uLWl0ZW0+XG4gICAge3tcImNsdWIudHJhaW5haW5nX19wcmVzZW5jZVwiIHwgdHJhbnNsYXRlfX06IFxuICA8L2lvbi1pdGVtPlxuLS0+XG4gICAgPC9pb24tbGlzdD5cblxuICAgIDxpb24tbGlzdCBsaW5lcz1cImZ1bGxcIiBbaW5zZXRdPVwidHJ1ZVwiPlxuICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgPGlvbi1sYWJlbD4ge3sgXCJjb21tb24ubWFuYWdlX21lbWJlcnNcIiB8IHRyYW5zbGF0ZX19IDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwic3RhdHMtY2hhcnQtb3V0bGluZVwiIHNsb3Q9XCJzdGFydFwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbGFiZWw+IHt7XCJjb21tb24uYXZlcmFnZV9fYWdlXCIgfCB0cmFuc2xhdGV9fSA8L2lvbi1sYWJlbD5cbiAgICAgICAgPGlvbi1ub3RlIHNsb3Q9XCJlbmRcIj4ge3tjbHViLmF2ZXJhZ2VBZ2V9fTwvaW9uLW5vdGU+XG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8aW9uLWl0ZW0gZGV0YWlsPVwidHJ1ZVwiIChjbGljayk9XCJvcGVuUmVxdWVzdExpc3QoKVwiICpuZ0lmPVwiY2x1YlsnY2x1YlJlcXVlc3RzJ10ubGVuZ3RoID4gMFwiPlxuICAgICAgICA8aW9uLWljb24gbmFtZT1cImFsZXJ0LWNpcmNsZS1vdXRsaW5lXCIgY29sb3I9XCJ3YXJuaW5nXCIgc2xvdD1cInN0YXJ0XCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbD4ge3tcImNvbW1vbi5yZXF1ZXN0c1wiIHwgdHJhbnNsYXRlfX0gPC9pb24tbGFiZWw+XG4gICAgICAgIDxpb24tbm90ZSBzbG90PVwiZW5kXCI+e3tjbHViWydjbHViUmVxdWVzdHMnXS5sZW5ndGh9fTwvaW9uLW5vdGU+XG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8aW9uLWl0ZW0gZGV0YWlsPVwidHJ1ZVwiIChjbGljayk9XCJvcGVuTWVtYmVyTGlzdCgpXCI+XG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwicGVvcGxlLWNpcmNsZS1vdXRsaW5lXCIgc2xvdD1cInN0YXJ0XCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbD4ge3tcImNvbW1vbi5tZW1iZXJzXCIgfCB0cmFuc2xhdGV9fSA8L2lvbi1sYWJlbD5cbiAgICAgICAgPGlvbi1ub3RlIHNsb3Q9XCJlbmRcIj57e2NsdWJbJ2NsdWJNZW1iZXJzJ10ubGVuZ3RofX08L2lvbi1ub3RlPlxuICAgICAgPC9pb24taXRlbT5cblxuICAgICAgPGlvbi1pdGVtIGRldGFpbD1cInRydWVcIiAoY2xpY2spPVwib3BlbkFkbWluTGlzdCgpXCI+XG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwic2hpZWxkLWhhbGYtb3V0bGluZVwiIHNsb3Q9XCJzdGFydFwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbGFiZWw+IHt7XCJjb21tb24uYWRtaW5zXCIgfCB0cmFuc2xhdGV9fSA8L2lvbi1sYWJlbD5cbiAgICAgICAgPGlvbi1ub3RlIHNsb3Q9XCJlbmRcIj57e2NsdWJbJ2NsdWJBZG1pbnMnXS5sZW5ndGh9fTwvaW9uLW5vdGU+XG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8aW9uLWl0ZW0gZGV0YWlsPVwidHJ1ZVwiIChjbGljayk9XCJvcGVuVGVhbUxpc3QoKVwiPlxuICAgICAgICA8aW9uLWljb24gbmFtZT1cInBlb3BsZS1vdXRsaW5lXCIgc2xvdD1cInN0YXJ0XCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbD4ge3tcImNvbW1vbi50ZWFtc1wiIHwgdHJhbnNsYXRlfX0gPC9pb24tbGFiZWw+XG4gICAgICAgIDxpb24tbm90ZSBzbG90PVwiZW5kXCI+e3tjbHViWydjbHViVGVhbXMnXS5sZW5ndGh9fTwvaW9uLW5vdGU+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNsdWIuaGFzRmVhdHVyZUhlbGZlckV2ZW50XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbHViQWRtaW5MaXN0JCB8IGFzeW5jIGFzIGNsdWJBZG1pbkxpc3RcIj5cbiAgICAgICAgICA8aW9uLWl0ZW0gKm5nSWY9XCJpc0NsdWJBZG1pbihjbHViQWRtaW5MaXN0LCB0aGlzLmNsdWIuaWQpXCIgZGV0YWlsPVwidHJ1ZVwiIChjbGljayk9XCJvcGVuSGVsZmVyUHVua3RlQ2x1YigpXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImhlbHAtYnVveS1vdXRsaW5lXCIgc2xvdD1cInN0YXJ0XCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDxpb24tbGFiZWw+IEhlbGZlcnB1bmt0ZSA8L2lvbi1sYWJlbD5cbiAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvaW9uLWxpc3Q+XG5cbiAgICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbHViQWRtaW5MaXN0JCB8IGFzeW5jIGFzIGNsdWJBZG1pbkxpc3RcIj5cbiAgICAgICAgPGlvbi1pdGVtICpuZ0lmPVwiaXNDbHViQWRtaW4oY2x1YkFkbWluTGlzdCwgdGhpcy5jbHViLmlkKVwiIGRldGFpbD1cInRydWVcIiAoY2xpY2spPVwib3BlblN1YnNjcmlwdGlvbigpXCI+XG4gICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjYXJkLW91dGxpbmVcIiBzbG90PVwic3RhcnRcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDxpb24tbGFiZWw+IHt7XCJjb21tb24uc3Vic2NyaXB0aW9uXCIgfCB0cmFuc2xhdGV9fSA8L2lvbi1sYWJlbD5cbiAgICAgICAgICA8aW9uLWJhZGdlIHNsb3Q9XCJlbmRcIj57e2NsdWIuc3Vic2NyaXB0aW9uVHlwZX19PC9pb24tYmFkZ2U+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2lvbi1saXN0PlxuXG5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbHViQWRtaW5MaXN0JCB8IGFzeW5jIGFzIGNsdWJBZG1pbkxpc3RcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0NsdWJBZG1pbihjbHViQWRtaW5MaXN0LCBjbHViLmlkKVwiPlxuICAgICAgICA8aW9uLWxpc3QgbGluZXM9XCJmdWxsXCIgW2luc2V0XT1cInRydWVcIj5cbiAgICAgICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICAgICAgPGlvbi1sYWJlbD4gR3Jlbnp3ZXJ0ZSBmw7xyIEFibWVsZHVuZ2VuIDwvaW9uLWxhYmVsPlxuICAgICAgICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICAgIDxpb24taXRlbT5cbiAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiY2FsZW5kYXItb3V0bGluZVwiIHNsb3Q9XCJzdGFydFwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8aW9uLWlucHV0IGxhYmVsUGxhY2VtZW50PVwiZml4ZWRcIiBsYWJlbD1cIlZlcmFuc3RhbHR1bmdlblwiIHR5cGU9XCJudW1iZXJcIiBbdmFsdWVdPVwiY2x1Yi5ldmVudFRocmVzaG9sZFwiXG4gICAgICAgICAgICAgIChpb25JbnB1dCk9XCJvbklucHV0KCRldmVudCwgJ2V2ZW50VGhyZXNob2xkJylcIj48L2lvbi1pbnB1dD5cbiAgICAgICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNsdWIuaGFzRmVhdHVyZUhlbGZlckV2ZW50XCI+XG4gICAgICAgICAgICA8aW9uLWl0ZW0+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiaGVscC1idW95LW91dGxpbmVcIiBzbG90PVwic3RhcnRcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8aW9uLWlucHV0IGxhYmVsUGxhY2VtZW50PVwiZml4ZWRcIiBsYWJlbD1cIkhlbGZlcmV2ZW50c1wiIHR5cGU9XCJudW1iZXJcIiBbdmFsdWVdPVwiY2x1Yi5oZWxmZXJUaHJlc2hvbGRcIlxuICAgICAgICAgICAgICAgIChpb25JbnB1dCk9XCJvbklucHV0KCRldmVudCwgJ2hlbGZlclRocmVzaG9sZCcpXCI+PC9pb24taW5wdXQ+XG4gICAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDwvaW9uLWxpc3Q+XG4gICAgICAgIDxpb24tbm90ZSBjb2xvcj1cIm1lZGl1bVwiIHN0eWxlPVwiZGlzcGxheTpibG9ja1wiXG4gICAgICAgICAgY2xhc3M9XCJpb24tbWFyZ2luLWhvcml6b250YWwgaW9uLXBhZGRpbmctaG9yaXpvbnRhbCBpb24tdGV4dC13cmFwXCI+XG4gICAgICAgICAgQW56YWhsIFN0dW5kZW4gdm9yIEJlZ2lubiBkZXMgU3BpZWxzLCBUcmFpbmluZ3Mgb2RlciBWZXJhbnN0YWx0dW5nPC9pb24tbm90ZT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG5cbiAgICA8aW9uLWxpc3QgbGluZXM9XCJmdWxsXCIgW2luc2V0XT1cInRydWVcIj5cbiAgICAgIDxpb24tbGlzdC1oZWFkZXI+XG4gICAgICAgIDxpb24tbGFiZWw+IHt7IFwiY29tbW9uLmRldGFpbHNcIiB8IHRyYW5zbGF0ZX19IDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwibWFpbC1vdXRsaW5lXCI+XG4gICAgICAgIDwvaW9uLWljb24+XG4gICAgICAgIDxpb24taW5wdXQgKGlvbkNoYW5nZSk9XCJjaGFuZ2VFbWFpbCgkZXZlbnQpXCIgbGFiZWxQbGFjZW1lbnQ9XCJzdGFja2VkXCIgW2xhYmVsXT0nXCJwcm9maWxlLmVtYWlsXCIgfCB0cmFuc2xhdGUnIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgYXR0ci5hcmlhLWxhYmVsPSd7e1wiY29tbW9uLmVtYWlsXCIgfCB0cmFuc2xhdGV9fScgW3ZhbHVlXT1cImNsdWIuZW1haWxcIj5cbiAgICAgICAgPC9pb24taW5wdXQ+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgICAgPGlvbi1pdGVtICpuZ0lmPVwiY2x1Yi53b3JkcHJlc3NcIj5cbiAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJsb2dvLXdvcmRwcmVzc1wiIHNsb3Q9XCJzdGFydFwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbGFiZWwgY2xhc3M9XCJpb24tdGV4dC13cmFwXCI+IHt7Y2x1Yi53b3JkcHJlc3N9fSA8L2lvbi1sYWJlbD5cbiAgICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cIm9wZW5VcmwoY2x1Yi53b3JkcHJlc3MpXCIgZmlsbD1cImNsZWFyXCI+XG4gICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwib3Blbi1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24taXRlbT5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJoZWFydC1jaXJjbGUtb3V0bGluZVwiIHNsb3Q9XCJzdGFydFwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbGFiZWw+IHt7Y2x1Yi50eXBlfX0gPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWljb24gbmFtZT1cInRpbWVcIiBzbG90PVwic3RhcnRcIiBjb2xvcj1cIm1lZGl1bVwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbm90ZT4ge3tjbHViLnVwZGF0ZWQgfCBkYXRlOidkZC5NTS5ZWVlZIEhIOm1tJ319IFVocjwvaW9uLW5vdGU+XG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8IS0tPGlvbi1pdGVtID5cbiAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJrZXlcIiBzbG90PVwic3RhcnRcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsPiB7e2NsdWIuYXBpS2V5fX0gPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPi0tPlxuICAgIDwvaW9uLWxpc3Q+XG4gICAgPCEtLVxuICA8aW9uLWxpc3QgbGluZXM9XCJmdWxsXCIgW2luc2V0XT1cInRydWVcIj5cbiAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgPGlvbi1sYWJlbD4ge3sgXCJjb21tb24uc2V0dGluZ3NcIiB8IHRyYW5zbGF0ZX19IDwvaW9uLWxhYmVsPlxuICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxuICAgIFxuICAgIDxpb24taXRlbT5cbiAgICAgIDxpb24taWNvbiBuYW1lPVwiaGFtbWVyLW91dGxpbmVcIiBzbG90PVwic3RhcnRcIj48L2lvbi1pY29uPlxuICAgICAgPGlvbi1sYWJlbD4gQVBJIEtFWSA8L2lvbi1sYWJlbD5cbiAgICA8L2lvbi1pdGVtPlxuICA8L2lvbi1saXN0PlxuLS0+XG5cbiAgICA8IS0tXG4gIFxuICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiICpuZ0lmPVwiY2x1YlsnY2x1YlJlcXVlc3RzJ10ubGVuZ3RoID4gMFwiPlxuICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgPGlvbi1sYWJlbD4ge3tcImNvbW1vbi5yZXF1ZXN0c1wiIHwgdHJhbnNsYXRlfX0gPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICAgIDxpb24taXRlbSAqbmdGb3I9XCJsZXQgcmVxdWVzdCBvZiBjbHViWydjbHViUmVxdWVzdHMnXVwiIGRldGFpbD1cInRydWVcIj5cbiAgICAgICAgPGlvbi1pY29uXG4gICAgICAgICAgc2xvdD1cInN0YXJ0XCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIG5hbWU9XCJoZWxwLWNpcmNsZS1vdXRsaW5lXCJcbiAgICAgICAgPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbGFiZWwgY2xhc3M9XCJpb24tdGV4dC13cmFwXCIgKGNsaWNrKT1cIm9wZW5SZXF1ZXN0TWVtYmVyKHJlcXVlc3QpXCJcbiAgICAgICAgICA+e3tyZXF1ZXN0LmZpcnN0TmFtZX19IHt7cmVxdWVzdC5sYXN0TmFtZX19IHt7cmVxdWVzdD8uZW1haWx9fVxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgPC9pb24tbGlzdD5cblxuICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiPlxuICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgPGlvbi1sYWJlbD4ge3tcImNvbW1vbi5tZW1iZXJzXCIgfCB0cmFuc2xhdGV9fSA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxuICAgICAgPGlvbi1pdGVtICpuZ0Zvcj1cImxldCBtZW1iZXIgb2YgY2x1YlsnY2x1Yk1lbWJlcnMnXVwiIGRldGFpbD1cInRydWVcIj5cbiAgICAgICAgPGlvbi1hdmF0YXIgc2xvdD1cInN0YXJ0XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJ7e21lbWJlcj8ucHJvZmlsZVBpY3R1cmV9fVwiIC8+XG4gICAgICAgIDwvaW9uLWF2YXRhcj5cbiAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIiAoY2xpY2spPVwib3Blbk1lbWJlcihtZW1iZXIpXCJcbiAgICAgICAgICA+e3ttZW1iZXIuZmlyc3ROYW1lfX0ge3ttZW1iZXIubGFzdE5hbWV9fTwvaW9uLWxhYmVsXG4gICAgICAgID5cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgPC9pb24tbGlzdD5cblxuICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiPlxuICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgPGlvbi1sYWJlbD4ge3tcImNvbW1vbi5hZG1pbnNcIiB8IHRyYW5zbGF0ZX19IDwvaW9uLWxhYmVsPlxuICAgICAgICA8aW9uLWJ1dHRvbiBzdHJvbmc9XCJ0cnVlXCIgKGNsaWNrKT1cImFkZEFkbWluaXN0cmF0b3IoKVwiXG4gICAgICAgICAgPmhpbnp1ZsO8Z2VuPC9pb24tYnV0dG9uXG4gICAgICAgID5cbiAgICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxuICAgICAgPGlvbi1pdGVtICpuZ0Zvcj1cImxldCBhZG1pbiBvZiBjbHViWydjbHViQWRtaW5zJ11cIiBkZXRhaWw9XCJ0cnVlXCI+XG4gICAgICAgIDxpb24tYXZhdGFyIHNsb3Q9XCJzdGFydFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwie3thZG1pbj8ucHJvZmlsZVBpY3R1cmV9fVwiIC8+XG4gICAgICAgIDwvaW9uLWF2YXRhcj5cbiAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIiAoY2xpY2spPVwib3Blbk1lbWJlcihhZG1pbilcIlxuICAgICAgICAgID57e2FkbWluLmZpcnN0TmFtZX19IHt7YWRtaW4ubGFzdE5hbWV9fTwvaW9uLWxhYmVsXG4gICAgICAgID5cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgPC9pb24tbGlzdD5cblxuLS0+XG5cbiAgICA8IS0tXG5cbiAgPGlvbi1saXN0ICpuZ0lmPVwicmVxdWVzdExpc3QubGVuZ3RoID4gMFwiPlxuICAgIDxpb24tbGlzdC1oZWFkZXI+IEFuZnJhZ2VuIDwvaW9uLWxpc3QtaGVhZGVyPlxuICAgIDxpb24taXRlbSAqbmdGb3I9XCJsZXQgbWVtYmVyIG9mIHJlcXVlc3RMaXN0XCI+XG4gICAgICA8aW9uLWF2YXRhciBzbG90PVwic3RhcnRcIj5cbiAgICAgICAgPGltZyBzcmM9XCJ7e21lbWJlcj8ucHJvZmlsZVBpY3R1cmV9fVwiIC8+XG4gICAgICA8L2lvbi1hdmF0YXI+XG4gICAgICA8aW9uLWxhYmVsPiB7e21lbWJlcj8uZmlyc3ROYW1lfX0ge3ttZW1iZXI/Lmxhc3ROYW1lfX0gPC9pb24tbGFiZWw+XG4gICAgICA8aW9uLWJ1dHRvbiBjb2xvcj1cImRhbmdlclwiIChjbGljayk9XCJkZWxldGVDbHViUmVxdWVzdChtZW1iZXIpXCIgc2xvdD1cImVuZFwiPlxuICAgICAgICA8aW9uLWljb24gaWNvbi1vbmx5IG5hbWU9XCJ0cmFzaFwiPjwvaW9uLWljb24+XG4gICAgICA8L2lvbi1idXR0b24+XG4gICAgICA8aW9uLWJ1dHRvblxuICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgIChjbGljayk9XCJhcHByb3ZlQ2x1YlJlcXVlc3QobWVtYmVyKVwiXG4gICAgICBzbG90PVwiZW5kXCJcbiAgICAgID5cbiAgICAgIDxpb24taWNvbiBpY29uLW9ubHkgbmFtZT1cImNoZWNrbWFyay1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICA8L2lvbi1idXR0b24+XG4gIDwvaW9uLWl0ZW0+XG48L2lvbi1saXN0PlxuLS0+XG4gICAgPCEtLVxuXG5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJyZXF1ZXN0TGlzdCQgfCBhc3luYyBhcyByZXF1ZXN0czsgZWxzZSBub1JlcXVlc3RzXCI+XG4gIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiICpuZ0lmPVwicmVxdWVzdHMubGVuZ3RoID4gMFwiPlxuICAgIDxpb24tbGlzdC1oZWFkZXI+IEFuZnJhZ2VuIDwvaW9uLWxpc3QtaGVhZGVyPlxuICAgIDxpb24taXRlbSAqbmdGb3I9XCJsZXQgcmVxdWVzdCBvZiByZXF1ZXN0c1wiPlxuICAgICAgPGlvbi1hdmF0YXIgc2xvdD1cInN0YXJ0XCI+XG4gICAgICAgIDxpbWcgW3NyY109XCJyZXF1ZXN0Py5wcm9maWxlUGljdHVyZVwiIC8+XG4gICAgICA8L2lvbi1hdmF0YXI+XG4gICAgICA8aW9uLWxhYmVsPiB7e3JlcXVlc3Q/LmZpcnN0TmFtZX19IHt7cmVxdWVzdD8ubGFzdE5hbWV9fSA8L2lvbi1sYWJlbD5cbiAgICAgIDxpb24tYnV0dG9uIGNvbG9yPVwiZGFuZ2VyXCIgKGNsaWNrKT1cImRlbGV0ZUNsdWJSZXF1ZXN0KHJlcXVlc3QpXCIgc2xvdD1cImVuZFwiPlxuICAgICAgICA8aW9uLWljb24gaWNvbi1vbmx5IG5hbWU9XCJ0cmFzaFwiPjwvaW9uLWljb24+XG4gICAgICA8L2lvbi1idXR0b24+XG4gICAgICA8aW9uLWJ1dHRvbiBjb2xvcj1cInN1Y2Nlc3NcIiAoY2xpY2spPVwiYXBwcm92ZUNsdWJSZXF1ZXN0KHJlcXVlc3QpXCIgc2xvdD1cImVuZFwiPlxuICAgICAgICA8aW9uLWljb24gaWNvbi1vbmx5IG5hbWU9XCJjaGVja21hcmstb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICA8L2lvbi1idXR0b24+XG4gICAgPC9pb24taXRlbT5cbiAgPC9pb24tbGlzdD5cbjwvbmctY29udGFpbmVyPlxuLS0+XG4gIDwvaW9uLWNvbnRlbnQ+XG48L25nLWNvbnRhaW5lcj5cbjxuZy10ZW1wbGF0ZSAjbm9SZXF1ZXN0cz5cbiAgPCEtLSBZb3UgY2FuIHB1dCBhbnkgcGxhY2Vob2xkZXIgb3IgbWVzc2FnZSBoZXJlIGlmIG5lZWRlZCB3aGVuIHRoZXJlIGFyZSBubyByZXF1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QSxHQUFBLDRCQUFBLGdCQUFBLENBQUE7QUFBQTtvRkFBbEIscUJBQWtCLFdBQUEsQ0FBQSxDQUFBLHNCQUFBLENBQUEsR0FBQSxRQUFBLEVBQUEsTUFBQSxPQUFBLEdBQUEsWUFBQSxPQUFBLE9BQUEsR0FBQSxNQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsV0FBQSxFQUFBLEdBQUEsQ0FBQSxRQUFBLEVBQUEsR0FBQSxDQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxhQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxZQUFBLEdBQUEsQ0FBQSxZQUFBLFVBQUEsR0FBQSxDQUFBLFFBQUEsT0FBQSxHQUFBLENBQUEsWUFBQSxRQUFBLGVBQUEsaUJBQUEsR0FBQSxhQUFBLFlBQUEsU0FBQSxhQUFBLEdBQUEsQ0FBQSxHQUFBLGFBQUEsR0FBQSxDQUFBLFNBQUEsU0FBQSxRQUFBLFNBQUEsR0FBQSxTQUFBLEdBQUEsU0FBQSxTQUFBLEdBQUEsQ0FBQSxHQUFBLFNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLFdBQUEsR0FBQSxDQUFBLEdBQUEsU0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFNBQUEsU0FBQSxRQUFBLFNBQUEsR0FBQSxTQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsU0FBQSxTQUFBLFFBQUEsU0FBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxRQUFBLG9CQUFBLEdBQUEsQ0FBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLEdBQUEsU0FBQSxTQUFBLEdBQUEsQ0FBQSxTQUFBLE9BQUEsR0FBQSxDQUFBLFVBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFNBQUEsVUFBQSxRQUFBLFNBQUEsUUFBQSxTQUFBLEdBQUEsU0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLE9BQUEsaUNBQUEsT0FBQSx3REFBQSxHQUFBLE1B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U0FBQSxHQUFBLEdBQUEsQ0FBQSxTQUFBLEdBQUEsR0FBQSxDQUFBLFNBQUEsR0FBQSxHQUFBLENBQUEsU0FBQSxHQUFBLEdBQUEsQ0FBQSxTQUFBLEdBQUEsR0FBQSxDQUFBLFNBQUEsSUFBQSxHQUFBLENBQUEsU0FBQSxJQUFBLEdBQUEsQ0FBQSxTQUFBLE1BQUEsU0FBQSxlQUFBLGNBQUEsY0FBQSxXQUFBLGlCQUFBLGVBQUEsY0FBQSxHQUFBLFdBQUEsR0FBQSxDQUFBLFdBQUEsaUJBQUEsa0JBQUEsU0FBQSxHQUFBLGFBQUEsV0FBQSxtQkFBQSxHQUFBLENBQUEsUUFBQSxhQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxXQUFBLEdBQUEsQ0FBQSxHQUFBLFNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLFNBQUEsUUFBQSxTQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsTUFBQSxZQUFBLGdCQUFBLFFBQUEsR0FBQSxhQUFBLGtCQUFBLFNBQUEsT0FBQSxLQUFBLEdBQUEsQ0FBQSxNQUFBLFVBQUEsZ0JBQUEsUUFBQSxHQUFBLGFBQUEsa0JBQUEsU0FBQSxPQUFBLEtBQUEsR0FBQSxDQUFBLEdBQUEsU0FBQSxTQUFBLEdBQUEsQ0FBQSxTQUFBLE9BQUEsR0FBQSxDQUFBLFNBQUEsV0FBQSxHQUFBLFNBQUEsU0FBQSxHQUFBLENBQUEsU0FBQSxXQUFBLFFBQUEsT0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFNBQUEsV0FBQSxRQUFBLE9BQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLFVBQUEsUUFBQSxPQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsU0FBQSxTQUFBLEdBQUEsQ0FBQSxTQUFBLFdBQUEsUUFBQSxLQUFBLEdBQUEsQ0FBQSxTQUFBLFdBQUEsUUFBQSxLQUFBLEdBQUEsQ0FBQSxTQUFBLFVBQUEsUUFBQSxLQUFBLEdBQUEsQ0FBQSxVQUFBLFFBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxTQUFBLFdBQUEsUUFBQSxLQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsR0FBQSxNQUFBLEdB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ZUFBQSxHQUFBLDRCQUFBLFdBQUEsR0FBQSw0QkFBQSxpQkFBQSxHQUFBLDRCQUFBLGdCQUFBLENBQUE7QUFBQTswRUFBUixXQUFRLFdBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxHQUFBLFFBQUEsRUFBQSxNQUFBLENBQUEsR0FBQSxRQUFBLE1BQUEsRUFBQSxHQUFBLFlBQUEsT0FBQSxPQUFBLEdBQUEsTUFBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLGNBQUEsRUFBQSxHQUFBLENBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBLGFBQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxHQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLFlBQUEsR0FBQSxDQUFBLFlBQUEsVUFBQSxHQUFBLENBQUEsUUFBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxPQUFBLEtBQUEsR0FBQSxDQUFBLFNBQUEsUUFBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsdUJBQUEsUUFBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLEtBQUEsR0FBQSxDQUFBLFVBQUEsUUFBQSxHQUFBLFNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxVQUFBLFFBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLHlCQUFBLFFBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSx1QkFBQSxRQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsa0JBQUEsUUFBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsUUFBQSxjQUFBLEdBQUEsQ0FBQSxrQkFBQSxXQUFBLFFBQUEsU0FBQSxHQUFBLGFBQUEsU0FBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLHdCQUFBLFFBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxRQUFBLFFBQUEsU0FBQSxTQUFBLFFBQUEsR0FBQSxDQUFBLFFBQUEsd0JBQUEsU0FBQSxXQUFBLFFBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxxQkFBQSxRQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsZ0JBQUEsUUFBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLG9CQUFBLFFBQUEsT0FBQSxHQUFBLENBQUEsa0JBQUEsU0FBQSxTQUFBLG1CQUFBLFFBQUEsVUFBQSxHQUFBLFlBQUEsT0FBQSxHQUFBLENBQUEsU0FBQSxVQUFBLEdBQUEseUJBQUEsMEJBQUEsaUJBQUEsR0FBQSxXQUFBLE9BQUEsR0FBQSxDQUFBLGtCQUFBLFNBQUEsU0FBQSxnQkFBQSxRQUFBLFVBQUEsR0FBQSxZQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsa0JBQUEsUUFBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLGVBQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxRQUFBLGNBQUEsQ0FBQSxHQUFBLFVBQUEsU0FBQSxrQkFBQSxJQUFBLEtBQUE7QUFBQSxNQUFBLEtBQUEsR0FBQTtBQy9DckIsSUFBQSxxQkFBQSxHQUFBLGtDQUFBLElBQUEsSUFBQSxnQkFBQSxDQUFBOztBQWtSQSxJQUFBLHFCQUFBLEdBQUEsaUNBQUEsR0FBQSxHQUFBLGVBQUEsTUFBQSxHQUFBLGdDQUFBOzs7QUFsUmUsSUFBQSxxQkFBQSxRQUFBLHNCQUFBLEdBQUEsR0FBQSxJQUFBLEtBQUEsQ0FBQTs7O0FEK0NULElBQU8sV0FBUDs7NkVBQU8sVUFBUSxFQUFBLFdBQUEsWUFBQSxVQUFBLG1DQUFBLFlBQUEsR0FBQSxDQUFBO0FBQUEsR0FBQTsiLAogICJuYW1lcyI6IFsic3Vic2NyaXB0aW9uIiwgImNsdWJNZW1iZXJzIiwgImNsdWJBZG1pbnMiLCAiY2x1YlJlcXVlc3RzIiwgImNsdWJUZWFtcyJdCn0K
