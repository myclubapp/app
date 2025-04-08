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
  BooleanValueAccessorDirective,
  ChangeDetectorRef,
  DatePipe,
  IonAccordion,
  IonAccordionGroup,
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
  IonSelect,
  IonSelectOption,
  IonSkeletonText,
  IonTextarea,
  IonTitle,
  IonToggle,
  IonToolbar,
  ModalController,
  NavParams,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  SelectValueAccessorDirective,
  TextValueAccessorDirective,
  ToastController,
  TranslatePipe,
  TranslateService,
  catchError,
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
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PZUQX53K.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-LQ2EECYJ.js";

// src/app/pages/event/event-add/event-add.page.ts
function EventAddPage_ng_container_20_ion_item_1_ion_select_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const club_r4 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", club_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(club_r4.name);
  }
}
function EventAddPage_ng_container_20_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-select", 10);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EventAddPage_ng_container_20_ion_item_1_Template_ion_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.event.clubId, $event) || (ctx_r2.event.clubId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(3, EventAddPage_ng_container_20_ion_item_1_ion_select_option_3_Template, 2, 2, "ion-select-option", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const clubAdminList_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("value", ctx_r2.event.clubId);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 4, "common.club"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.event.clubId);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", clubAdminList_r5);
  }
}
function EventAddPage_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EventAddPage_ng_container_20_ion_item_1_Template, 4, 6, "ion-item", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r5 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", clubAdminList_r5.length > 1);
  }
}
function EventAddPage_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 27);
    \u0275\u0275listener("ionChange", function EventAddPage_ng_template_57_Template_ion_datetime_ionChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeTimeFrom($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function EventAddPage_ng_template_57_Template_ion_datetime_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.event.timeFrom, $event) || (ctx_r2.event.timeFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275propertyInterpolate("value", ctx_r2.event.timeFrom);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.event.timeFrom);
  }
}
function EventAddPage_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 28);
    \u0275\u0275twoWayListener("ngModelChange", function EventAddPage_ng_template_64_Template_ion_datetime_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.event.timeTo, $event) || (ctx_r2.event.timeTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275propertyInterpolate("value", ctx_r2.event.timeTo);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.event.timeTo);
  }
}
function EventAddPage_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 29);
    \u0275\u0275listener("ionChange", function EventAddPage_ng_template_71_Template_ion_datetime_ionChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeStartDate($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function EventAddPage_ng_template_71_Template_ion_datetime_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.event.startDate, $event) || (ctx_r2.event.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275propertyInterpolate("value", ctx_r2.event.startDate);
    \u0275\u0275property("firstDayOfWeek", 1);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.event.startDate);
  }
}
function EventAddPage_ng_template_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 30);
    \u0275\u0275twoWayListener("ngModelChange", function EventAddPage_ng_template_78_Template_ion_datetime_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.event.endDate, $event) || (ctx_r2.event.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275propertyInterpolate("value", ctx_r2.event.endDate);
    \u0275\u0275property("firstDayOfWeek", 1);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.event.endDate);
  }
}
function EventAddPage_ng_template_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-skeleton-text", 31)(1, "ion-skeleton-text", 32);
  }
}
var _EventAddPage = class _EventAddPage {
  constructor(modalCtrl, eventService, cdr, fbService, toastController, navParams, translate) {
    this.modalCtrl = modalCtrl;
    this.eventService = eventService;
    this.cdr = cdr;
    this.fbService = fbService;
    this.toastController = toastController;
    this.navParams = navParams;
    this.translate = translate;
    this.event = {
      id: "",
      name: "",
      description: "",
      location: "",
      streetAndNumber: "",
      postalCode: "",
      city: "",
      date: Timestamp.fromDate(/* @__PURE__ */ new Date()),
      timeFrom: (/* @__PURE__ */ new Date()).toISOString(),
      timeTo: (/* @__PURE__ */ new Date()).toISOString(),
      startDate: (/* @__PURE__ */ new Date()).toISOString(),
      endDate: (/* @__PURE__ */ new Date()).toISOString(),
      /*teamId: "",
      teamName: "",
      liga: "",*/
      link_poll: "",
      link_web: "",
      clubId: "",
      clubName: "",
      status: true,
      attendees: [],
      countAttendees: 0,
      countNeeded: 0,
      closedEvent: false
    };
  }
  ngOnInit() {
    this.eventCopy = this.navParams.get("data");
    if (this.eventCopy.id) {
      this.event = this.eventCopy;
    }
    this.clubAdminList$ = this.fbService.getClubAdminList();
    this.clubAdminList$.forEach((clubList) => {
      this.event.clubId = clubList[0].id;
      this.event.clubName = clubList[0].name;
      return clubList;
    });
  }
  ngOnDestroy() {
  }
  close() {
    return __async(this, null, function* () {
      return this.modalCtrl.dismiss(null, "close");
    });
  }
  isClubAdmin(clubAdminList, clubId) {
    return clubAdminList && clubAdminList.some((club) => club.id === clubId);
  }
  createEvent() {
    return __async(this, null, function* () {
      console.log(`Start Date before calculation: ${this.event.startDate}`);
      const calculatedStartDate = new Date(this.event.startDate);
      calculatedStartDate.setHours(new Date(this.event.timeFrom).getHours());
      calculatedStartDate.setMinutes(new Date(this.event.timeFrom).getMinutes());
      calculatedStartDate.setSeconds(0);
      calculatedStartDate.setMilliseconds(0);
      this.event.startDate = calculatedStartDate.toISOString();
      console.log(`Start Date after calculation: ${this.event.startDate}`);
      console.log(`End Date before calculation: ${this.event.endDate}`);
      const calcualtedEndDate = new Date(this.event.endDate);
      calcualtedEndDate.setHours(new Date(this.event.timeFrom).getHours());
      calcualtedEndDate.setMinutes(new Date(this.event.timeFrom).getMinutes());
      calcualtedEndDate.setSeconds(0);
      calcualtedEndDate.setMilliseconds(0);
      this.event.endDate = calcualtedEndDate.toISOString();
      console.log(`End Date after calculation: ${this.event.endDate}`);
      const calculatedTimeFrom = new Date(this.event.timeFrom);
      calculatedTimeFrom.setDate(new Date(this.event.startDate).getDate());
      calculatedTimeFrom.setMonth(new Date(this.event.startDate).getMonth());
      calculatedTimeFrom.setFullYear(new Date(this.event.startDate).getFullYear());
      calculatedTimeFrom.setSeconds(0);
      calculatedTimeFrom.setMilliseconds(0);
      this.event.timeFrom = calculatedTimeFrom.toISOString();
      const calculatedTimeTo = new Date(this.event.timeTo);
      calculatedTimeTo.setDate(new Date(this.event.startDate).getDate());
      calculatedTimeTo.setMonth(new Date(this.event.startDate).getMonth());
      calculatedTimeTo.setFullYear(new Date(this.event.startDate).getFullYear());
      calculatedTimeTo.setSeconds(0);
      calculatedTimeTo.setMilliseconds(0);
      this.event.timeTo = calculatedTimeTo.toISOString();
      this.event.date = Timestamp.fromDate(new Date(this.event.startDate));
      delete this.event.attendees;
      const event = yield this.eventService.setCreateClubEvent(this.event).catch((e) => {
        console.log(e.message);
        this.toastActionError(e);
      });
      if (event) {
        console.log(event.id);
        return this.modalCtrl.dismiss({}, "confirm");
      }
      return null;
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
};
_EventAddPage.\u0275fac = function EventAddPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventAddPage)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(NavParams), \u0275\u0275directiveInject(TranslateService));
};
_EventAddPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventAddPage, selectors: [["app-event-add"]], inputs: { eventCopy: [0, "data", "eventCopy"] }, standalone: false, decls: 86, vars: 86, consts: [["loading", ""], [3, "translucent"], ["slot", "secondary"], [3, "click"], ["slot", "primary"], ["strong", "true", 3, "click"], ["collapse", "condense"], ["size", "large"], [3, "inset"], [4, "ngIf"], ["label-placement", "stacked", 3, "ngModelChange", "label", "ngModel", "value"], ["label-placement", "stacked", 3, "ngModelChange", "label", "value", "ngModel"], ["label-placement", "stacked", "type", "url", 3, "ngModelChange", "label", "value", "ngModel", "placeholder"], ["id", "timeFromItem"], ["position", ""], ["slot", "end", "datetime", "timeFrom"], [3, "keepContentsMounted"], ["id", "timeToItem"], ["slot", "end", "datetime", "timeTo"], ["id", "startDateItem"], ["position", "default"], ["slot", "end", "datetime", "startDate"], ["id", "endDateItem"], ["slot", "end", "datetime", "endDate"], ["slot", "end", 3, "checked"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["presentation", "time", "id", "timeFrom", "minuteValues", "0,5,10,15,20,25,30,35,40,45,50,55", 3, "ionChange", "ngModelChange", "value", "ngModel"], ["presentation", "time", "id", "timeTo", "minuteValues", "0,5,10,15,20,25,30,35,40,45,50,55", 3, "ngModelChange", "value", "ngModel"], ["presentation", "date", "id", "startDate", 3, "ionChange", "ngModelChange", "firstDayOfWeek", "value", "ngModel"], ["presentation", "date", "id", "endDate", 3, "ngModelChange", "firstDayOfWeek", "value", "ngModel"], ["animated", "", 2, "width", "10%"], ["animated", "", 2, "width", "60%"]], template: function EventAddPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 1)(1, "ion-toolbar")(2, "ion-buttons", 2)(3, "ion-button", 3);
    \u0275\u0275listener("click", function EventAddPage_Template_ion_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.close());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-title");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ion-buttons", 4)(10, "ion-button", 5);
    \u0275\u0275listener("click", function EventAddPage_Template_ion_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.createEvent());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "ion-content")(14, "ion-header", 6)(15, "ion-toolbar")(16, "ion-title", 7);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "ion-list", 8);
    \u0275\u0275template(20, EventAddPage_ng_container_20_Template, 2, 1, "ng-container", 9);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementStart(22, "ion-item")(23, "ion-input", 10);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EventAddPage_Template_ion_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.event.name, $event) || (ctx.event.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "ion-item")(26, "ion-textarea", 11);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EventAddPage_Template_ion_textarea_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.event.description, $event) || (ctx.event.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "ion-list", 8)(29, "ion-item")(30, "ion-input", 11);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EventAddPage_Template_ion_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.event.location, $event) || (ctx.event.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "ion-item")(33, "ion-input", 11);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EventAddPage_Template_ion_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.event.streetAndNumber, $event) || (ctx.event.streetAndNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "ion-item")(36, "ion-input", 11);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EventAddPage_Template_ion_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.event.postalCode, $event) || (ctx.event.postalCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "ion-item")(39, "ion-input", 11);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EventAddPage_Template_ion_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.event.city, $event) || (ctx.event.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "ion-list", 8)(42, "ion-item")(43, "ion-input", 12);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EventAddPage_Template_ion_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.event.link_web, $event) || (ctx.event.link_web = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "ion-item")(47, "ion-input", 12);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EventAddPage_Template_ion_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.event.link_poll, $event) || (ctx.event.link_poll = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "ion-list", 8)(51, "ion-item", 13)(52, "ion-label", 14);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "ion-datetime-button", 15);
    \u0275\u0275elementStart(56, "ion-modal", 16);
    \u0275\u0275template(57, EventAddPage_ng_template_57_Template, 1, 2, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "ion-item", 17)(59, "ion-label", 14);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "ion-datetime-button", 18);
    \u0275\u0275elementStart(63, "ion-modal", 16);
    \u0275\u0275template(64, EventAddPage_ng_template_64_Template, 1, 2, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "ion-item", 19)(66, "ion-label", 20);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "ion-datetime-button", 21);
    \u0275\u0275elementStart(70, "ion-modal", 16);
    \u0275\u0275template(71, EventAddPage_ng_template_71_Template, 1, 3, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "ion-item", 22)(73, "ion-label", 20);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(76, "ion-datetime-button", 23);
    \u0275\u0275elementStart(77, "ion-modal", 16);
    \u0275\u0275template(78, EventAddPage_ng_template_78_Template, 1, 3, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "ion-item")(80, "ion-label", 20);
    \u0275\u0275text(81);
    \u0275\u0275pipe(82, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(83, "ion-toggle", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(84, EventAddPage_ng_template_84_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 46, "common.close"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 48, "event-add.new__event"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 50, "common.create"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 52, "event-add.new__event"));
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(21, 54, ctx.clubAdminList$));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("value", ctx.event.name);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(24, 56, "common.name"));
    \u0275\u0275twoWayProperty("ngModel", ctx.event.name);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("value", ctx.event.description);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(27, 58, "common.description"));
    \u0275\u0275twoWayProperty("ngModel", ctx.event.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("value", ctx.event.location);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(31, 60, "common.location"));
    \u0275\u0275twoWayProperty("ngModel", ctx.event.location);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("value", ctx.event.streetAndNumber);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(34, 62, "common.street__house_number"));
    \u0275\u0275twoWayProperty("ngModel", ctx.event.streetAndNumber);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("value", ctx.event.postalCode);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(37, 64, "common.postal__code"));
    \u0275\u0275twoWayProperty("ngModel", ctx.event.postalCode);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("value", ctx.event.city);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(40, 66, "common.locality"));
    \u0275\u0275twoWayProperty("ngModel", ctx.event.city);
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("value", ctx.event.link_web);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(44, 68, "common.link__web"));
    \u0275\u0275twoWayProperty("ngModel", ctx.event.link_web);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(45, 70, "common.link__placeholder"));
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("value", ctx.event.link_poll);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(48, 72, "common.link__poll"));
    \u0275\u0275twoWayProperty("ngModel", ctx.event.link_poll);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(49, 74, "common.link__placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(54, 76, "common.start__event"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(61, 78, "common.end__event"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(68, 80, "common.start__date"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(75, 82, "common.end__date"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(82, 84, "event-add.is__closed__event"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx.event.closedEvent);
  }
}, dependencies: [NgForOf, NgIf, IonButton, IonButtons, IonContent, IonDatetime, IonDatetimeButton, IonHeader, IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonSkeletonText, IonTextarea, IonTitle, IonToggle, IonToolbar, IonModal, BooleanValueAccessorDirective, SelectValueAccessorDirective, TextValueAccessorDirective, NgControlStatus, NgModel, AsyncPipe, TranslatePipe], encapsulation: 2 });
var EventAddPage = _EventAddPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventAddPage, { className: "EventAddPage", filePath: "src/app/pages/event/event-add/event-add.page.ts", lineNumber: 20 });
})();

// src/app/pages/event/event-detail/event-detail.page.ts
var _c0 = () => ["yes"];
function EventDetailPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 7);
    \u0275\u0275listener("click", function EventDetailPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_1_Template_ion_button_click_0_listener() {
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
function EventDetailPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 7);
    \u0275\u0275listener("click", function EventDetailPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_2_Template_ion_button_click_0_listener() {
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
function EventDetailPage_ng_container_0_ng_container_3_ion_buttons_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-buttons", 13);
    \u0275\u0275template(1, EventDetailPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_1_Template, 3, 3, "ion-button", 14)(2, EventDetailPage_ng_container_0_ng_container_3_ion_buttons_1_ion_button_2_Template, 3, 3, "ion-button", 14);
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
function EventDetailPage_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EventDetailPage_ng_container_0_ng_container_3_ion_buttons_1_Template, 3, 2, "ion-buttons", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r5 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isClubAdmin(clubAdminList_r5, ctx_r2.event.clubId));
  }
}
function EventDetailPage_ng_container_0_ion_list_18_ion_item_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275element(1, "ion-icon", 21);
    \u0275\u0275elementStart(2, "ion-label", 17)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-button", 22);
    \u0275\u0275listener("click", function EventDetailPage_ng_container_0_ion_list_18_ion_item_28_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const event_r7 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openUrl(event_r7.link_web));
    });
    \u0275\u0275element(6, "ion-icon", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r7.link_web);
  }
}
function EventDetailPage_ng_container_0_ion_list_18_ion_item_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275element(1, "ion-icon", 24);
    \u0275\u0275elementStart(2, "ion-label", 17)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-button", 22);
    \u0275\u0275listener("click", function EventDetailPage_ng_container_0_ion_list_18_ion_item_29_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const event_r7 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openUrl(event_r7.link_poll));
    });
    \u0275\u0275element(6, "ion-icon", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r7.link_poll);
  }
}
function EventDetailPage_ng_container_0_ion_list_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 15)(1, "ion-item");
    \u0275\u0275element(2, "ion-icon", 16);
    \u0275\u0275elementStart(3, "ion-label", 17)(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "ion-item");
    \u0275\u0275element(7, "ion-icon", 18);
    \u0275\u0275elementStart(8, "ion-label")(9, "h2");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275pipe(12, "date");
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "ion-item");
    \u0275\u0275element(15, "ion-icon", 19);
    \u0275\u0275elementStart(16, "ion-label", 17)(17, "h2");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "h2");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h2");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "ion-item");
    \u0275\u0275element(24, "ion-icon", 20);
    \u0275\u0275elementStart(25, "ion-label", 17)(26, "h2");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(28, EventDetailPage_ng_container_0_ion_list_18_ion_item_28_Template, 7, 1, "ion-item", 5)(29, EventDetailPage_ng_container_0_ion_list_18_ion_item_29_Template, 7, 1, "ion-item", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(event_r7.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(11, 12, event_r7.date.toDate(), "dd.MM.YYYY "), " ", \u0275\u0275pipeBind2(12, 15, event_r7.timeFrom, "HH:mm"), " Uhr - ", \u0275\u0275pipeBind2(13, 18, event_r7.timeTo, "HH:mm"), " Uhr ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(event_r7.location);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", event_r7.streetAndNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", event_r7.postalCode, " ", event_r7.city, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(event_r7.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r7.link_web);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r7.link_poll);
  }
}
function EventDetailPage_ng_container_0_ng_container_19_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 40);
    \u0275\u0275listener("ionChange", function EventDetailPage_ng_container_0_ng_container_19_ng_template_37_Template_ion_datetime_ionChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.changeTimeFrom($event));
    })("ionChange", function EventDetailPage_ng_container_0_ng_container_19_ng_template_37_Template_ion_datetime_ionChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "timeFrom"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("value", event_r7.timeFrom);
  }
}
function EventDetailPage_ng_container_0_ng_container_19_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 41);
    \u0275\u0275listener("ionChange", function EventDetailPage_ng_container_0_ng_container_19_ng_template_44_Template_ion_datetime_ionChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "timeTo"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("value", event_r7.timeTo);
  }
}
function EventDetailPage_ng_container_0_ng_container_19_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 42);
    \u0275\u0275listener("ionChange", function EventDetailPage_ng_container_0_ng_container_19_ng_template_51_Template_ion_datetime_ionChange_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "startDate"));
    })("ionChange", function EventDetailPage_ng_container_0_ng_container_19_ng_template_51_Template_ion_datetime_ionChange_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.changeStartDate($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("firstDayOfWeek", 1)("value", event_r7.startDate);
  }
}
function EventDetailPage_ng_container_0_ng_container_19_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 43);
    \u0275\u0275listener("ionChange", function EventDetailPage_ng_container_0_ng_container_19_ng_template_58_Template_ion_datetime_ionChange_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "endDate"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("firstDayOfWeek", 1)("value", event_r7.endDate);
  }
}
function EventDetailPage_ng_container_0_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-list", 15)(2, "ion-item")(3, "ion-input", 25);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("ionChange", function EventDetailPage_ng_container_0_ng_container_19_Template_ion_input_ionChange_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "name"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-item")(6, "ion-textarea", 26);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("ionChange", function EventDetailPage_ng_container_0_ng_container_19_Template_ion_textarea_ionChange_6_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "description"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ion-list", 15)(9, "ion-item")(10, "ion-input", 25);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("ionChange", function EventDetailPage_ng_container_0_ng_container_19_Template_ion_input_ionChange_10_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "location"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "ion-item")(13, "ion-input", 25);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("ionChange", function EventDetailPage_ng_container_0_ng_container_19_Template_ion_input_ionChange_13_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "streetAndNumber"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ion-item")(16, "ion-input", 25);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275listener("ionChange", function EventDetailPage_ng_container_0_ng_container_19_Template_ion_input_ionChange_16_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "postalCode"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "ion-item")(19, "ion-input", 25);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275listener("ionChange", function EventDetailPage_ng_container_0_ng_container_19_Template_ion_input_ionChange_19_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "city"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "ion-list", 15)(22, "ion-item")(23, "ion-input", 27);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275listener("ionChange", function EventDetailPage_ng_container_0_ng_container_19_Template_ion_input_ionChange_23_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "link_web"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "ion-item")(27, "ion-input", 27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275listener("ionChange", function EventDetailPage_ng_container_0_ng_container_19_Template_ion_input_ionChange_27_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "link_poll"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "ion-list", 15)(31, "ion-item", 28)(32, "ion-label", 29);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "ion-datetime-button", 30);
    \u0275\u0275elementStart(36, "ion-modal", 31);
    \u0275\u0275template(37, EventDetailPage_ng_container_0_ng_container_19_ng_template_37_Template, 1, 1, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "ion-item", 32)(39, "ion-label", 29);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "ion-datetime-button", 33);
    \u0275\u0275elementStart(43, "ion-modal", 31);
    \u0275\u0275template(44, EventDetailPage_ng_container_0_ng_container_19_ng_template_44_Template, 1, 1, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "ion-item", 34)(46, "ion-label", 35);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "ion-datetime-button", 36);
    \u0275\u0275elementStart(50, "ion-modal", 31);
    \u0275\u0275template(51, EventDetailPage_ng_container_0_ng_container_19_ng_template_51_Template, 1, 2, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "ion-item", 37)(53, "ion-label", 35);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "ion-datetime-button", 38);
    \u0275\u0275elementStart(57, "ion-modal", 31);
    \u0275\u0275template(58, EventDetailPage_ng_container_0_ng_container_19_ng_template_58_Template, 1, 2, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "ion-item")(60, "ion-label", 35);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "ion-toggle", 39);
    \u0275\u0275listener("ionChange", function EventDetailPage_ng_container_0_ng_container_19_Template_ion_toggle_ionChange_63_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateEvent($event, "closedEvent"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(4, 33, "common.name"))("value", event_r7.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("autoGrow", true)("label", \u0275\u0275pipeBind1(7, 35, "common.description"))("value", event_r7.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(11, 37, "common.location"))("value", event_r7.location);
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(14, 39, "common.street__house_number"))("value", event_r7.streetAndNumber);
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(17, 41, "common.postal__code"))("value", event_r7.postalCode);
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(20, 43, "common.locality"))("value", event_r7.city);
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(24, 45, "common.link__web"))("value", event_r7.link_web)("placeholder", \u0275\u0275pipeBind1(25, 47, "common.link__placeholder"));
    \u0275\u0275advance(4);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(28, 49, "common.link__poll"))("value", event_r7.link_poll)("placeholder", \u0275\u0275pipeBind1(29, 51, "common.link__placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 53, "common.start__event"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 55, "common.end__event"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 57, "common.start__date"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 59, "common.end__date"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(62, 61, "event-add.is__closed__event"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", event_r7.closedEvent);
  }
}
function EventDetailPage_ng_container_0_ion_list_20_ng_container_5_ion_fab_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-fab-button", 49);
    \u0275\u0275listener("click", function EventDetailPage_ng_container_0_ion_list_20_ng_container_5_ion_fab_button_1_Template_ion_fab_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const event_r7 = \u0275\u0275nextContext(3).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle(true, event_r7));
    });
    \u0275\u0275element(1, "ion-icon", 50);
    \u0275\u0275elementEnd();
  }
}
function EventDetailPage_ng_container_0_ion_list_20_ng_container_5_ion_fab_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-fab-button", 51);
    \u0275\u0275listener("click", function EventDetailPage_ng_container_0_ion_list_20_ng_container_5_ion_fab_button_2_Template_ion_fab_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const event_r7 = \u0275\u0275nextContext(3).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle(true, event_r7));
    });
    \u0275\u0275element(1, "ion-icon", 52);
    \u0275\u0275elementEnd();
  }
}
function EventDetailPage_ng_container_0_ion_list_20_ng_container_5_ion_fab_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-fab-button", 53);
    \u0275\u0275listener("click", function EventDetailPage_ng_container_0_ion_list_20_ng_container_5_ion_fab_button_3_Template_ion_fab_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const event_r7 = \u0275\u0275nextContext(3).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle(false, event_r7));
    });
    \u0275\u0275element(1, "ion-icon", 54);
    \u0275\u0275elementEnd();
  }
}
function EventDetailPage_ng_container_0_ion_list_20_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EventDetailPage_ng_container_0_ion_list_20_ng_container_5_ion_fab_button_1_Template, 2, 0, "ion-fab-button", 46)(2, EventDetailPage_ng_container_0_ion_list_20_ng_container_5_ion_fab_button_2_Template, 2, 0, "ion-fab-button", 47)(3, EventDetailPage_ng_container_0_ion_list_20_ng_container_5_ion_fab_button_3_Template, 2, 0, "ion-fab-button", 48);
    \u0275\u0275elementStart(4, "ion-label");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r7.status === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r7.status === false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r7.status === true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "common.my__status"));
  }
}
function EventDetailPage_ng_container_0_ion_list_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 44)(1, "ion-list-header");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-item", 45);
    \u0275\u0275template(5, EventDetailPage_ng_container_0_ion_list_20_ng_container_5_Template, 7, 6, "ng-container", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275nextContext();
    const loadingStatus_r17 = \u0275\u0275reference(3);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "common.attendances__absences"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", event_r7.hasOwnProperty("status"))("ngIfElse", loadingStatus_r17);
  }
}
function EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_9_ng_container_6_ion_item_options_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-options", 65)(1, "ion-item-option", 66);
    \u0275\u0275listener("click", function EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_9_ng_container_6_ion_item_options_1_Template_ion_item_option_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const member_r19 = \u0275\u0275nextContext(2).$implicit;
      const item_r21 = \u0275\u0275reference(1);
      const event_r7 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleItem(item_r21, false, event_r7, member_r19.id));
    });
    \u0275\u0275element(2, "ion-icon", 67);
    \u0275\u0275elementEnd()();
  }
}
function EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_9_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_9_ng_container_6_ion_item_options_1_Template, 3, 0, "ion-item-options", 64);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r22 = ctx.ngIf;
    const event_r7 = \u0275\u0275nextContext(3).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isClubAdmin(clubAdminList_r22, event_r7.clubId));
  }
}
function EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 2)(2, "ion-item", 62);
    \u0275\u0275element(3, "ion-icon", 63);
    \u0275\u0275elementStart(4, "ion-label", 7);
    \u0275\u0275listener("click", function EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_9_Template_ion_label_click_4_listener() {
      const member_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openMember(member_r19));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_9_ng_container_6_Template, 2, 1, "ng-container", 5);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r19 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", member_r19.firstName, " ", member_r19.lastName, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(7, 3, ctx_r2.clubAdminList$));
  }
}
function EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_17_ng_container_6_ion_item_options_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-options", 65)(1, "ion-item-option", 69);
    \u0275\u0275listener("click", function EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_17_ng_container_6_ion_item_options_1_Template_ion_item_option_click_1_listener() {
      \u0275\u0275restoreView(_r25);
      const member_r24 = \u0275\u0275nextContext(2).$implicit;
      const item_r26 = \u0275\u0275reference(1);
      const event_r7 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleItem(item_r26, true, event_r7, member_r24.id));
    });
    \u0275\u0275element(2, "ion-icon", 70);
    \u0275\u0275elementEnd()();
  }
}
function EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_17_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_17_ng_container_6_ion_item_options_1_Template, 3, 0, "ion-item-options", 64);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r27 = ctx.ngIf;
    const event_r7 = \u0275\u0275nextContext(3).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isClubAdmin(clubAdminList_r27, event_r7.clubId));
  }
}
function EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 2)(2, "ion-item", 62);
    \u0275\u0275element(3, "ion-icon", 68);
    \u0275\u0275elementStart(4, "ion-label", 7);
    \u0275\u0275listener("click", function EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_17_Template_ion_label_click_4_listener() {
      const member_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openMember(member_r24));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_17_ng_container_6_Template, 2, 1, "ng-container", 5);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r24 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", member_r24.firstName, " ", member_r24.lastName, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(7, 3, ctx_r2.clubAdminList$));
  }
}
function EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_25_ng_container_6_ion_item_options_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-options", 65)(1, "ion-item-option", 69);
    \u0275\u0275listener("click", function EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_25_ng_container_6_ion_item_options_1_Template_ion_item_option_click_1_listener() {
      \u0275\u0275restoreView(_r30);
      const member_r29 = \u0275\u0275nextContext(2).$implicit;
      const item_r31 = \u0275\u0275reference(1);
      const event_r7 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleItem(item_r31, true, event_r7, member_r29.id));
    });
    \u0275\u0275element(2, "ion-icon", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-item-option", 66);
    \u0275\u0275listener("click", function EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_25_ng_container_6_ion_item_options_1_Template_ion_item_option_click_3_listener() {
      \u0275\u0275restoreView(_r30);
      const member_r29 = \u0275\u0275nextContext(2).$implicit;
      const item_r31 = \u0275\u0275reference(1);
      const event_r7 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleItem(item_r31, false, event_r7, member_r29.id));
    });
    \u0275\u0275element(4, "ion-icon", 67);
    \u0275\u0275elementEnd()();
  }
}
function EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_25_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_25_ng_container_6_ion_item_options_1_Template, 5, 0, "ion-item-options", 64);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r32 = ctx.ngIf;
    const event_r7 = \u0275\u0275nextContext(3).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isClubAdmin(clubAdminList_r32, event_r7.clubId));
  }
}
function EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 2)(2, "ion-item", 62);
    \u0275\u0275element(3, "ion-icon", 71);
    \u0275\u0275elementStart(4, "ion-label", 7);
    \u0275\u0275listener("click", function EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_25_Template_ion_label_click_4_listener() {
      const member_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openMember(member_r29));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_25_ng_container_6_Template, 2, 1, "ng-container", 5);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r29 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", member_r29.firstName, " ", member_r29.lastName, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(7, 3, ctx_r2.clubAdminList$));
  }
}
function EventDetailPage_ng_container_0_ion_list_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 15)(1, "ion-accordion-group", 55)(2, "ion-accordion", 56)(3, "ion-item", 57)(4, "ion-label");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 58)(8, "ion-list");
    \u0275\u0275template(9, EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_9_Template, 8, 5, "ion-item-sliding", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "ion-accordion", 60)(11, "ion-item", 57)(12, "ion-label");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 58)(16, "ion-list");
    \u0275\u0275template(17, EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_17_Template, 8, 5, "ion-item-sliding", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "ion-accordion", 61)(19, "ion-item", 57)(20, "ion-label");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 58)(24, "ion-list");
    \u0275\u0275template(25, EventDetailPage_ng_container_0_ion_list_21_ion_item_sliding_25_Template, 8, 5, "ion-item-sliding", 59);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("multiple", true)("value", \u0275\u0275pureFunction0(18, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 12, "common.present"), ": ", event_r7["attendeeListTrue"].length, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", event_r7["attendeeListTrue"]);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(14, 14, "common.absent"), ": ", event_r7["attendeeListFalse"].length, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", event_r7["attendeeListFalse"]);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(22, 16, "common.noreply"), ": ", event_r7["unrespondedMembers"].length, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", event_r7["unrespondedMembers"]);
  }
}
function EventDetailPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-header", 4)(2, "ion-toolbar");
    \u0275\u0275template(3, EventDetailPage_ng_container_0_ng_container_3_Template, 2, 1, "ng-container", 5);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementStart(5, "ion-title");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-buttons", 6)(9, "ion-button", 7);
    \u0275\u0275listener("click", function EventDetailPage_ng_container_0_Template_ion_button_click_9_listener() {
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
    \u0275\u0275template(18, EventDetailPage_ng_container_0_ion_list_18_Template, 30, 21, "ion-list", 10)(19, EventDetailPage_ng_container_0_ng_container_19_Template, 64, 63, "ng-container", 5)(20, EventDetailPage_ng_container_0_ion_list_20_Template, 6, 6, "ion-list", 11)(21, EventDetailPage_ng_container_0_ion_list_21_Template, 26, 19, "ion-list", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const event_r7 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(4, 9, ctx_r2.clubAdminList$));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 11, "common.details"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 13, "common.close"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 15, "common.details"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.allowEdit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.allowEdit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isFuture && !ctx_r2.allowEdit && !event_r7.closedEvent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.allowEdit && !event_r7.closedEvent);
  }
}
function EventDetailPage_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-skeleton-text", 72)(1, "ion-skeleton-text", 73);
  }
}
function EventDetailPage_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 4)(1, "ion-toolbar")(2, "ion-buttons", 13);
    \u0275\u0275element(3, "ion-skeleton-text", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-title");
    \u0275\u0275element(5, "ion-skeleton-text", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-buttons", 6);
    \u0275\u0275element(7, "ion-skeleton-text", 74);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ion-content")(9, "ion-header", 8)(10, "ion-toolbar")(11, "ion-title", 9);
    \u0275\u0275element(12, "ion-skeleton-text", 76);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "ion-list", 15)(14, "ion-item");
    \u0275\u0275element(15, "ion-icon", 16);
    \u0275\u0275elementStart(16, "ion-label", 17);
    \u0275\u0275element(17, "ion-skeleton-text", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "ion-item");
    \u0275\u0275element(19, "ion-icon", 18);
    \u0275\u0275elementStart(20, "ion-label");
    \u0275\u0275element(21, "ion-skeleton-text", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "ion-item");
    \u0275\u0275element(23, "ion-icon", 19);
    \u0275\u0275elementStart(24, "ion-label", 17);
    \u0275\u0275element(25, "ion-skeleton-text", 79)(26, "ion-skeleton-text", 80)(27, "ion-skeleton-text", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "ion-item");
    \u0275\u0275element(29, "ion-icon", 20);
    \u0275\u0275elementStart(30, "ion-label", 17);
    \u0275\u0275element(31, "ion-skeleton-text", 81)(32, "ion-skeleton-text", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "ion-item");
    \u0275\u0275element(34, "ion-icon", 21);
    \u0275\u0275elementStart(35, "ion-label", 17);
    \u0275\u0275element(36, "ion-skeleton-text", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "ion-button", 84);
    \u0275\u0275element(38, "ion-icon", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "ion-list", 44)(40, "ion-list-header");
    \u0275\u0275element(41, "ion-skeleton-text", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "ion-item");
    \u0275\u0275element(43, "ion-skeleton-text", 86);
    \u0275\u0275elementStart(44, "ion-label");
    \u0275\u0275element(45, "ion-skeleton-text", 87);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "ion-list", 15)(47, "ion-accordion-group", 55)(48, "ion-accordion", 56)(49, "ion-item", 57)(50, "ion-label");
    \u0275\u0275element(51, "ion-skeleton-text", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 58)(53, "ion-list")(54, "ion-item");
    \u0275\u0275element(55, "ion-skeleton-text", 88);
    \u0275\u0275elementStart(56, "ion-label");
    \u0275\u0275element(57, "ion-skeleton-text", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "ion-item");
    \u0275\u0275element(59, "ion-skeleton-text", 88);
    \u0275\u0275elementStart(60, "ion-label");
    \u0275\u0275element(61, "ion-skeleton-text", 77);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(62, "ion-accordion", 60)(63, "ion-item", 57)(64, "ion-label");
    \u0275\u0275element(65, "ion-skeleton-text", 89);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "ion-accordion", 61)(67, "ion-item", 57)(68, "ion-label");
    \u0275\u0275element(69, "ion-skeleton-text", 85);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(13);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(26);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("multiple", true)("value", \u0275\u0275pureFunction0(6, _c0));
  }
}
var _EventDetailPage = class _EventDetailPage {
  constructor(modalCtrl, navParams, userProfileService, eventService, alertCtrl, fbService, toastController, authService, translate) {
    this.modalCtrl = modalCtrl;
    this.navParams = navParams;
    this.userProfileService = userProfileService;
    this.eventService = eventService;
    this.alertCtrl = alertCtrl;
    this.fbService = fbService;
    this.toastController = toastController;
    this.authService = authService;
    this.translate = translate;
    this.mode = "yes";
    this.allowEdit = false;
  }
  ngOnInit() {
    this.event = this.navParams.get("data");
    this.event$ = of(this.event);
    this.event$ = this.getEvent(this.event.clubId, this.event.id);
    this.clubAdminList$ = this.fbService.getClubAdminList();
    this.eventHasChanged = {};
  }
  getEvent(clubId, eventId) {
    return this.authService.getUser$().pipe(take(1), tap((user) => {
      this.user = user;
      if (!user)
        throw new Error("User not found");
    }), switchMap(() => this.eventService.getClubEventRef(clubId, eventId)), switchMap((event) => {
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
            return this.eventService.getClubEventAttendeesRef(clubId, eventId).pipe(map((attendees) => {
              const attendeeDetails = attendees.map((attendee) => {
                const detail = clubMembersWithDetails.find((member) => member && member.id === attendee.id);
                return detail ? __spreadProps(__spreadValues({}, detail), { status: attendee.status }) : null;
              }).filter((item) => item !== null);
              const attendeeListTrue = attendeeDetails.filter((att) => att.status === true).sort((a, b) => a.firstName.localeCompare(b.firstName));
              const attendeeListFalse = attendeeDetails.filter((att) => att.status === false).sort((a, b) => a.firstName.localeCompare(b.firstName));
              const respondedIds = new Set(attendeeDetails.map((att) => att.id));
              const unrespondedMembers = clubMembersWithDetails.filter((member) => member && !respondedIds.has(member.id)).sort((a, b) => a.firstName.localeCompare(b.firstName));
              const userAttendee = attendeeDetails.find((att) => att && att.id === this.user.uid);
              const status = userAttendee ? userAttendee.status : null;
              console.log(status);
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
  isClubAdmin(clubAdminList, clubId) {
    return clubAdminList && clubAdminList.some((club) => club.id === clubId);
  }
  edit() {
    return __async(this, null, function* () {
      if (this.allowEdit) {
        this.allowEdit = false;
        if (Object.keys(this.eventHasChanged).length > 0) {
          const updatedEvent = yield this.eventService.changeClubEvent(this.eventHasChanged, this.event.clubId, this.event.id).catch((e) => {
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
      if (field === "closedEvent") {
        this.eventHasChanged[field] = event.detail.checked;
      } else {
        this.eventHasChanged[field] = event.detail.value;
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
  toggleItem(item, status, event, memberId) {
    return __async(this, null, function* () {
      yield item.close();
      yield this.eventService.setClubEventAttendeeStatusAdmin(status, event.clubId, event.id, memberId);
      this.presentToast();
    });
  }
  toggle(status, event) {
    return __async(this, null, function* () {
      console.log(`Set Status ${status} for user ${this.user.uid} and club ${this.event.clubId} and event ${event.id}`);
      const newStartDate = event.date.toDate();
      newStartDate.setHours(Number(event.timeFrom.substring(0, 2)));
      console.log("Grenzwert ");
      const eventThreshold = event.club.eventThreshold || 0;
      console.log(eventThreshold);
      if (newStartDate.getTime() - (/* @__PURE__ */ new Date()).getTime() < 1e3 * 60 * 60 * eventThreshold && status == false && eventThreshold) {
        console.log("too late");
        yield this.tooLateToggle();
      } else {
        yield this.eventService.setClubEventAttendeeStatus(status, this.event.clubId, event.id);
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
  presentToast() {
    return __async(this, null, function* () {
      const toast = yield this.toastController.create({
        message: yield lastValueFrom(this.translate.get("common.success__saved")),
        color: "primary",
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
_EventDetailPage.\u0275fac = function EventDetailPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventDetailPage)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(NavParams), \u0275\u0275directiveInject(UserProfileService), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(TranslateService));
};
_EventDetailPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventDetailPage, selectors: [["app-event-detail"]], inputs: { event: [0, "data", "event"], isFuture: "isFuture" }, standalone: false, decls: 6, vars: 4, consts: [["loadingStatus", ""], ["loading", ""], ["item", ""], [4, "ngIf", "ngIfElse"], [3, "translucent"], [4, "ngIf"], ["slot", "primary"], [3, "click"], ["collapse", "condense"], ["size", "large"], [3, "inset", 4, "ngIf"], ["lines", "none", 3, "inset", 4, "ngIf"], ["slot", "secondary", 4, "ngIf"], ["slot", "secondary"], [3, "click", 4, "ngIf"], [3, "inset"], ["slot", "start", "name", "home-outline"], [1, "ion-text-wrap"], ["slot", "start", "name", "calendar-outline"], ["slot", "start", "name", "location-outline"], ["slot", "start", "name", "information-circle-outline"], ["slot", "start", "name", "link-outline"], ["slot", "end", "fill", "clear", 3, "click"], ["slot", "icon-only", "name", "open-outline"], ["slot", "start", "name", "help-circle-outline"], ["label-placement", "stacked", 3, "ionChange", "label", "value"], ["label-placement", "stacked", 3, "ionChange", "autoGrow", "label", "value"], ["label-placement", "stacked", "type", "url", 3, "ionChange", "label", "value", "placeholder"], ["id", "timeFromItem"], ["position", ""], ["slot", "end", "datetime", "timeFrom"], [3, "keepContentsMounted"], ["id", "timeToItem"], ["slot", "end", "datetime", "timeTo"], ["id", "startDateItem"], ["position", "default"], ["slot", "end", "datetime", "startDate"], ["id", "endDateItem"], ["slot", "end", "datetime", "endDate"], ["slot", "end", 3, "ionChange", "checked"], ["presentation", "time", "id", "timeFrom", "minuteValues", "0,5,10,15,20,25,30,35,40,45,50,55", 3, "ionChange", "value"], ["presentation", "time", "id", "timeTo", "minuteValues", "0,5,10,15,20,25,30,35,40,45,50,55", 3, "ionChange", "value"], ["presentation", "date", "id", "startDate", 3, "ionChange", "firstDayOfWeek", "value"], ["presentation", "date", "id", "endDate", 3, "ionChange", "firstDayOfWeek", "value"], ["lines", "none", 3, "inset"], [1, "myclubStatus"], ["size", "small", "color", "warning", "slot", "start", 3, "click", 4, "ngIf"], ["size", "small", "color", "danger", "slot", "start", 3, "click", 4, "ngIf"], ["size", "small", "color", "success", "slot", "start", 3, "click", 4, "ngIf"], ["size", "small", "color", "warning", "slot", "start", 3, "click"], ["name", "help-circle"], ["size", "small", "color", "danger", "slot", "start", 3, "click"], ["name", "close-circle"], ["size", "small", "color", "success", "slot", "start", 3, "click"], ["name", "checkmark-circle"], [3, "multiple", "value"], ["value", "yes"], ["slot", "header", "color", "light"], ["slot", "content"], [4, "ngFor", "ngForOf"], ["value", "no"], ["value", "null"], ["detail", "true"], ["color", "success", "slot", "start", "name", "checkmark-circle"], ["side", "end", 4, "ngIf"], ["side", "end"], ["color", "danger", 3, "click"], ["slot", "icon-only", "name", "close-circle"], ["color", "danger", "slot", "start", "name", "close-circle"], ["color", "success", 3, "click"], ["slot", "icon-only", "name", "checkmark-circle"], ["color", "warning", "slot", "start", "name", "help-circle"], ["animated", "", 2, "width", "10%"], ["animated", "", 2, "width", "60%"], ["animated", "", 2, "width", "80px", "height", "20px", "margin", "0 10px"], ["animated", "", 2, "width", "100px", "margin", "0 auto"], ["animated", "", 2, "width", "150px"], ["animated", "", 2, "width", "70%"], ["animated", "", 2, "width", "85%"], ["animated", "", 2, "width", "50%"], ["animated", "", 2, "width", "80%"], ["animated", "", 2, "width", "90%"], ["animated", "", 2, "width", "75%"], ["animated", "", 2, "width", "65%"], ["slot", "end", "fill", "clear"], ["animated", "", 2, "width", "140px"], ["animated", "", "slot", "start", 2, "width", "40px", "height", "40px", "border-radius", "50%"], ["animated", "", 2, "width", "100px"], ["animated", "", "slot", "start", 2, "width", "24px", "height", "24px", "border-radius", "50%"], ["animated", "", 2, "width", "130px"]], template: function EventDetailPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EventDetailPage_ng_container_0_Template, 22, 17, "ng-container", 3);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275template(2, EventDetailPage_ng_template_2_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, EventDetailPage_ng_template_4_Template, 70, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const loading_r33 = \u0275\u0275reference(5);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 2, ctx.event$))("ngIfElse", loading_r33);
  }
}, dependencies: [NgForOf, NgIf, IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonContent, IonDatetime, IonDatetimeButton, IonFabButton, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonSkeletonText, IonTextarea, IonTitle, IonToggle, IonToolbar, IonModal, BooleanValueAccessorDirective, SelectValueAccessorDirective, TextValueAccessorDirective, AsyncPipe, DatePipe, TranslatePipe], encapsulation: 2 });
var EventDetailPage = _EventDetailPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventDetailPage, { className: "EventDetailPage", filePath: "src/app/pages/event/event-detail/event-detail.page.ts", lineNumber: 32 });
})();

export {
  EventAddPage,
  EventDetailPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9ldmVudC9ldmVudC1hZGQvZXZlbnQtYWRkLnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9ldmVudC9ldmVudC1hZGQvZXZlbnQtYWRkLnBhZ2UuaHRtbCIsICJzcmMvYXBwL3BhZ2VzL2V2ZW50L2V2ZW50LWRldGFpbC9ldmVudC1kZXRhaWwucGFnZS50cyIsICJzcmMvYXBwL3BhZ2VzL2V2ZW50L2V2ZW50LWRldGFpbC9ldmVudC1kZXRhaWwucGFnZS5odG1sIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsQ29udHJvbGxlciwgTmF2UGFyYW1zLCBUb2FzdENvbnRyb2xsZXIgfSBmcm9tIFwiQGlvbmljL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQ2x1YiB9IGZyb20gXCJzcmMvYXBwL21vZGVscy9jbHViXCI7XG5pbXBvcnQgeyBWZXJhbnN0YWx0dW5nIH0gZnJvbSBcInNyYy9hcHAvbW9kZWxzL2V2ZW50XCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS9ldmVudC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1ldmVudC1hZGRcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2V2ZW50LWFkZC5wYWdlLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vZXZlbnQtYWRkLnBhZ2Uuc2Nzc1wiXSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBFdmVudEFkZFBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoXCJkYXRhXCIpIGV2ZW50Q29weTogVmVyYW5zdGFsdHVuZztcbiAgZXZlbnQ6IFZlcmFuc3RhbHR1bmc7XG4gIHVzZXIkOiBPYnNlcnZhYmxlPFVzZXI+O1xuICB1c2VyOiBVc2VyO1xuXG4gIGNsdWJBZG1pbkxpc3QkOiBPYnNlcnZhYmxlPENsdWJbXT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwcml2YXRlIGV2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGZiU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdG9hc3RDb250cm9sbGVyOiBUb2FzdENvbnRyb2xsZXIsXG4gICAgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuZXZlbnQgPSB7XG4gICAgICBpZDogXCJcIixcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgIGxvY2F0aW9uOiBcIlwiLFxuICAgICAgc3RyZWV0QW5kTnVtYmVyOiBcIlwiLFxuICAgICAgcG9zdGFsQ29kZTogXCJcIixcbiAgICAgIGNpdHk6IFwiXCIsXG5cbiAgICAgIGRhdGU6IFRpbWVzdGFtcC5mcm9tRGF0ZShuZXcgRGF0ZSgpKSxcblxuICAgICAgdGltZUZyb206IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIHRpbWVUbzogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuXG4gICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcblxuICAgICAgLyp0ZWFtSWQ6IFwiXCIsXG4gICAgICB0ZWFtTmFtZTogXCJcIixcbiAgICAgIGxpZ2E6IFwiXCIsKi9cblxuICAgICAgbGlua19wb2xsOiBcIlwiLCBcbiAgICAgIGxpbmtfd2ViOiBcIlwiLFxuXG4gICAgICBjbHViSWQ6IFwiXCIsXG4gICAgICBjbHViTmFtZTogXCJcIixcblxuICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgYXR0ZW5kZWVzOiBbXSxcbiAgICAgIGNvdW50QXR0ZW5kZWVzOiAwLFxuICAgICAgY291bnROZWVkZWQ6IDAsXG4gICAgICBjbG9zZWRFdmVudDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5ldmVudENvcHkgPSB0aGlzLm5hdlBhcmFtcy5nZXQoXCJkYXRhXCIpO1xuICAgIGlmICh0aGlzLmV2ZW50Q29weS5pZCkge1xuICAgICAgdGhpcy5ldmVudCA9IHRoaXMuZXZlbnRDb3B5O1xuICAgIH1cblxuICAgIHRoaXMuY2x1YkFkbWluTGlzdCQgPSB0aGlzLmZiU2VydmljZS5nZXRDbHViQWRtaW5MaXN0KCk7XG4gICAgdGhpcy5jbHViQWRtaW5MaXN0JC5mb3JFYWNoKChjbHViTGlzdCkgPT4ge1xuICAgICAgdGhpcy5ldmVudC5jbHViSWQgPSBjbHViTGlzdFswXS5pZDtcbiAgICAgIHRoaXMuZXZlbnQuY2x1Yk5hbWUgPSBjbHViTGlzdFswXS5uYW1lO1xuICAgICAgcmV0dXJuIGNsdWJMaXN0O1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxuXG4gIGFzeW5jIGNsb3NlKCkge1xuICAgIHJldHVybiB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKG51bGwsIFwiY2xvc2VcIik7XG4gIH1cbiAgaXNDbHViQWRtaW4oY2x1YkFkbWluTGlzdDogYW55W10sIGNsdWJJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNsdWJBZG1pbkxpc3QgJiYgY2x1YkFkbWluTGlzdC5zb21lKGNsdWIgPT4gY2x1Yi5pZCA9PT0gY2x1YklkKTtcbiAgfVxuICBhc3luYyBjcmVhdGVFdmVudCgpIHtcbiAgICAvL1NldCBIb3Vycy9NaW51dGVzIG9mIGVuZERhdGUgdG8gVGltZUZyb20gb2YgdHJhaW5pbmdcbiAgICBjb25zb2xlLmxvZyhgU3RhcnQgRGF0ZSBiZWZvcmUgY2FsY3VsYXRpb246ICR7dGhpcy5ldmVudC5zdGFydERhdGV9YCk7XG4gICAgY29uc3QgY2FsY3VsYXRlZFN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRoaXMuZXZlbnQuc3RhcnREYXRlKTtcbiAgICBjYWxjdWxhdGVkU3RhcnREYXRlLnNldEhvdXJzKG5ldyBEYXRlKHRoaXMuZXZlbnQudGltZUZyb20pLmdldEhvdXJzKCkpO1xuICAgIGNhbGN1bGF0ZWRTdGFydERhdGUuc2V0TWludXRlcyhuZXcgRGF0ZSh0aGlzLmV2ZW50LnRpbWVGcm9tKS5nZXRNaW51dGVzKCkpO1xuICAgIGNhbGN1bGF0ZWRTdGFydERhdGUuc2V0U2Vjb25kcygwKTtcbiAgICBjYWxjdWxhdGVkU3RhcnREYXRlLnNldE1pbGxpc2Vjb25kcygwKTtcbiAgICB0aGlzLmV2ZW50LnN0YXJ0RGF0ZSA9IGNhbGN1bGF0ZWRTdGFydERhdGUudG9JU09TdHJpbmcoKTtcbiAgICBjb25zb2xlLmxvZyhgU3RhcnQgRGF0ZSBhZnRlciBjYWxjdWxhdGlvbjogJHt0aGlzLmV2ZW50LnN0YXJ0RGF0ZX1gKTtcblxuICAgIGNvbnNvbGUubG9nKGBFbmQgRGF0ZSBiZWZvcmUgY2FsY3VsYXRpb246ICR7dGhpcy5ldmVudC5lbmREYXRlfWApO1xuICAgIGNvbnN0IGNhbGN1YWx0ZWRFbmREYXRlID0gbmV3IERhdGUodGhpcy5ldmVudC5lbmREYXRlKTtcbiAgICBjYWxjdWFsdGVkRW5kRGF0ZS5zZXRIb3VycyhuZXcgRGF0ZSh0aGlzLmV2ZW50LnRpbWVGcm9tKS5nZXRIb3VycygpKTtcbiAgICBjYWxjdWFsdGVkRW5kRGF0ZS5zZXRNaW51dGVzKG5ldyBEYXRlKHRoaXMuZXZlbnQudGltZUZyb20pLmdldE1pbnV0ZXMoKSk7XG4gICAgY2FsY3VhbHRlZEVuZERhdGUuc2V0U2Vjb25kcygwKTtcbiAgICBjYWxjdWFsdGVkRW5kRGF0ZS5zZXRNaWxsaXNlY29uZHMoMCk7XG4gICAgdGhpcy5ldmVudC5lbmREYXRlID0gY2FsY3VhbHRlZEVuZERhdGUudG9JU09TdHJpbmcoKTtcbiAgICBjb25zb2xlLmxvZyhgRW5kIERhdGUgYWZ0ZXIgY2FsY3VsYXRpb246ICR7dGhpcy5ldmVudC5lbmREYXRlfWApO1xuXG4gICAgY29uc3QgY2FsY3VsYXRlZFRpbWVGcm9tID0gbmV3IERhdGUodGhpcy5ldmVudC50aW1lRnJvbSk7XG4gICAgY2FsY3VsYXRlZFRpbWVGcm9tLnNldERhdGUobmV3IERhdGUodGhpcy5ldmVudC5zdGFydERhdGUpLmdldERhdGUoKSk7XG4gICAgY2FsY3VsYXRlZFRpbWVGcm9tLnNldE1vbnRoKG5ldyBEYXRlKHRoaXMuZXZlbnQuc3RhcnREYXRlKS5nZXRNb250aCgpKTtcbiAgICBjYWxjdWxhdGVkVGltZUZyb20uc2V0RnVsbFllYXIoXG4gICAgICBuZXcgRGF0ZSh0aGlzLmV2ZW50LnN0YXJ0RGF0ZSkuZ2V0RnVsbFllYXIoKVxuICAgICk7XG4gICAgY2FsY3VsYXRlZFRpbWVGcm9tLnNldFNlY29uZHMoMCk7XG4gICAgY2FsY3VsYXRlZFRpbWVGcm9tLnNldE1pbGxpc2Vjb25kcygwKTtcbiAgICB0aGlzLmV2ZW50LnRpbWVGcm9tID0gY2FsY3VsYXRlZFRpbWVGcm9tLnRvSVNPU3RyaW5nKCk7XG5cbiAgICBjb25zdCBjYWxjdWxhdGVkVGltZVRvID0gbmV3IERhdGUodGhpcy5ldmVudC50aW1lVG8pO1xuICAgIGNhbGN1bGF0ZWRUaW1lVG8uc2V0RGF0ZShuZXcgRGF0ZSh0aGlzLmV2ZW50LnN0YXJ0RGF0ZSkuZ2V0RGF0ZSgpKTtcbiAgICBjYWxjdWxhdGVkVGltZVRvLnNldE1vbnRoKG5ldyBEYXRlKHRoaXMuZXZlbnQuc3RhcnREYXRlKS5nZXRNb250aCgpKTtcbiAgICBjYWxjdWxhdGVkVGltZVRvLnNldEZ1bGxZZWFyKG5ldyBEYXRlKHRoaXMuZXZlbnQuc3RhcnREYXRlKS5nZXRGdWxsWWVhcigpKTtcbiAgICBjYWxjdWxhdGVkVGltZVRvLnNldFNlY29uZHMoMCk7XG4gICAgY2FsY3VsYXRlZFRpbWVUby5zZXRNaWxsaXNlY29uZHMoMCk7XG4gICAgdGhpcy5ldmVudC50aW1lVG8gPSBjYWxjdWxhdGVkVGltZVRvLnRvSVNPU3RyaW5nKCk7XG5cbiAgICB0aGlzLmV2ZW50LmRhdGUgPSBUaW1lc3RhbXAuZnJvbURhdGUobmV3IERhdGUodGhpcy5ldmVudC5zdGFydERhdGUpKTtcblxuICAgIGRlbGV0ZSB0aGlzLmV2ZW50LmF0dGVuZGVlcztcblxuICAgIGNvbnN0IGV2ZW50ID0gYXdhaXQgdGhpcy5ldmVudFNlcnZpY2Uuc2V0Q3JlYXRlQ2x1YkV2ZW50KHRoaXMuZXZlbnQpLmNhdGNoKGUgPT4ge1xuICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcbiAgICAgIHRoaXMudG9hc3RBY3Rpb25FcnJvcihlKTtcbiAgICB9KVxuICAgIGlmIChldmVudCkge1xuICAgICAgY29uc29sZS5sb2coZXZlbnQuaWQpO1xuICAgICAgcmV0dXJuIHRoaXMubW9kYWxDdHJsLmRpc21pc3Moe30sIFwiY29uZmlybVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgYXN5bmMgdG9hc3RBY3Rpb25FcnJvcihlcnJvcikge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gIH1cbiAgY2hhbmdlVGltZUZyb20oZXYpIHtcbiAgICBjb25zb2xlLmxvZyhldi5kZXRhaWwudmFsdWUpO1xuICAgIGlmICh0aGlzLmV2ZW50LnRpbWVGcm9tID4gdGhpcy5ldmVudC50aW1lVG8pIHtcbiAgICAgIHRoaXMuZXZlbnQudGltZVRvID0gdGhpcy5ldmVudC50aW1lRnJvbTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGFydERhdGUoZXYpIHtcbiAgICBjb25zb2xlLmxvZyhldi5kZXRhaWwudmFsdWUpO1xuICAgIGlmICh0aGlzLmV2ZW50LnN0YXJ0RGF0ZSA+IHRoaXMuZXZlbnQuZW5kRGF0ZSkge1xuICAgICAgdGhpcy5ldmVudC5lbmREYXRlID0gdGhpcy5ldmVudC5zdGFydERhdGU7XG4gICAgfVxuICB9XG59XG4iLCAiPGlvbi1oZWFkZXIgW3RyYW5zbHVjZW50XT1cInRydWVcIj5cbiAgPGlvbi10b29sYmFyPlxuICAgIDxpb24tYnV0dG9ucyBzbG90PVwic2Vjb25kYXJ5XCI+XG4gICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwiY2xvc2UoKVwiPnt7XCJjb21tb24uY2xvc2VcIiB8IHRyYW5zbGF0ZX19PC9pb24tYnV0dG9uPlxuICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgPGlvbi10aXRsZT57e1wiZXZlbnQtYWRkLm5ld19fZXZlbnRcIiB8IHRyYW5zbGF0ZX19PC9pb24tdGl0bGU+XG4gICAgPGlvbi1idXR0b25zIHNsb3Q9XCJwcmltYXJ5XCI+XG4gICAgICA8aW9uLWJ1dHRvbiBzdHJvbmc9XCJ0cnVlXCIgKGNsaWNrKT1cImNyZWF0ZUV2ZW50KClcIj57e1wiY29tbW9uLmNyZWF0ZVwiIHwgdHJhbnNsYXRlfX08L2lvbi1idXR0b24+XG4gICAgPC9pb24tYnV0dG9ucz5cbiAgPC9pb24tdG9vbGJhcj5cbjwvaW9uLWhlYWRlcj5cbjxpb24tY29udGVudD5cbiAgPGlvbi1oZWFkZXIgY29sbGFwc2U9XCJjb25kZW5zZVwiPlxuICAgIDxpb24tdG9vbGJhcj5cbiAgICAgIDxpb24tdGl0bGUgc2l6ZT1cImxhcmdlXCI+e3tcImV2ZW50LWFkZC5uZXdfX2V2ZW50XCIgfCB0cmFuc2xhdGV9fTwvaW9uLXRpdGxlPlxuICAgIDwvaW9uLXRvb2xiYXI+XG4gIDwvaW9uLWhlYWRlcj5cblxuICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2x1YkFkbWluTGlzdCQgfCBhc3luYyBhcyBjbHViQWRtaW5MaXN0XCI+XG4gICAgICA8aW9uLWl0ZW0gKm5nSWY9XCJjbHViQWRtaW5MaXN0Lmxlbmd0aCA+IDFcIj5cbiAgICAgICAgPGlvbi1zZWxlY3QgW2xhYmVsXT0nXCJjb21tb24uY2x1YlwiIHwgdHJhbnNsYXRlJyBsYWJlbC1wbGFjZW1lbnQ9XCJzdGFja2VkXCIgWyhuZ01vZGVsKV09XCJldmVudC5jbHViSWRcIlxuICAgICAgICAgIHZhbHVlPVwie3tldmVudC5jbHViSWR9fVwiPlxuICAgICAgICAgIDxpb24tc2VsZWN0LW9wdGlvbiAqbmdGb3I9XCJsZXQgY2x1YiBvZiBjbHViQWRtaW5MaXN0XCIgdmFsdWU9XCJ7e2NsdWIuaWR9fVwiPnt7Y2x1Yi5uYW1lfX08L2lvbi1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICA8L2lvbi1zZWxlY3Q+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPCEtLTxpb24taXRlbSAqbmdJZj1cImNsdWJMaXN0Lmxlbmd0aD09MFwiPlxuICAgICAgPGlvbi1zZWxlY3QgY2FuY2VsLXRleHQ9XCJBYmJyZWNoZW5cIiBvay10ZXh0PVwiQXVzd8OkaGxlblwiIGxhYmVsPVwiQ2x1YlwiIGxhYmVsLXBsYWNlbWVudD1cInN0YWNrZWRcIiBbKG5nTW9kZWwpXT1cImV2ZW50LmNsdWJJZFwiIHZhbHVlPVwie3tldmVudC5jbHViSWR9fVwiID5cbiAgICAgICAgPGlvbi1zZWxlY3Qtb3B0aW9uIGRpc2FibGVkPVwidHJ1ZVwiICpuZ0Zvcj1cImxldCBjbHViIG9mIGNsdWJMaXN0XCIgdmFsdWU9XCJ7e2NsdWIuaWR9fVwiPnt7Y2x1Yi5uYW1lfX08L2lvbi1zZWxlY3Qtb3B0aW9uPlxuICAgICAgPC9pb24tc2VsZWN0PlxuICAgIDwvaW9uLWl0ZW0+LS0+XG5cbiAgICA8aW9uLWl0ZW0+XG4gICAgICA8aW9uLWlucHV0IFtsYWJlbF09J1wiY29tbW9uLm5hbWVcIiB8IHRyYW5zbGF0ZScgbGFiZWwtcGxhY2VtZW50PVwic3RhY2tlZFwiIFsobmdNb2RlbCldPVwiZXZlbnQubmFtZVwiXG4gICAgICAgIHZhbHVlPVwie3tldmVudC5uYW1lfX1cIj5cbiAgICAgIDwvaW9uLWlucHV0PlxuICAgIDwvaW9uLWl0ZW0+XG4gICAgPGlvbi1pdGVtPlxuICAgICAgPGlvbi10ZXh0YXJlYSBbbGFiZWxdPSdcImNvbW1vbi5kZXNjcmlwdGlvblwiIHwgdHJhbnNsYXRlJyBsYWJlbC1wbGFjZW1lbnQ9XCJzdGFja2VkXCIgdmFsdWU9XCJ7e2V2ZW50LmRlc2NyaXB0aW9ufX1cIlxuICAgICAgICBbKG5nTW9kZWwpXT1cImV2ZW50LmRlc2NyaXB0aW9uXCI+XG4gICAgICA8L2lvbi10ZXh0YXJlYT5cbiAgICA8L2lvbi1pdGVtPlxuICA8L2lvbi1saXN0PlxuXG4gIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiPlxuICAgIDxpb24taXRlbT5cbiAgICAgIDxpb24taW5wdXQgW2xhYmVsXT0nXCJjb21tb24ubG9jYXRpb25cIiB8IHRyYW5zbGF0ZScgbGFiZWwtcGxhY2VtZW50PVwic3RhY2tlZFwiIHZhbHVlPVwie3tldmVudC5sb2NhdGlvbn19XCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJldmVudC5sb2NhdGlvblwiPlxuICAgICAgPC9pb24taW5wdXQ+XG4gICAgPC9pb24taXRlbT5cblxuICAgIDxpb24taXRlbT5cbiAgICAgIDxpb24taW5wdXQgW2xhYmVsXT0nXCJjb21tb24uc3RyZWV0X19ob3VzZV9udW1iZXJcIiB8IHRyYW5zbGF0ZScgbGFiZWwtcGxhY2VtZW50PVwic3RhY2tlZFwiXG4gICAgICAgIHZhbHVlPVwie3tldmVudC5zdHJlZXRBbmROdW1iZXJ9fVwiIFsobmdNb2RlbCldPVwiZXZlbnQuc3RyZWV0QW5kTnVtYmVyXCI+XG4gICAgICA8L2lvbi1pbnB1dD5cbiAgICA8L2lvbi1pdGVtPlxuICAgIDxpb24taXRlbT5cbiAgICAgIDxpb24taW5wdXQgW2xhYmVsXT1cIidjb21tb24ucG9zdGFsX19jb2RlJyB8IHRyYW5zbGF0ZVwiIGxhYmVsLXBsYWNlbWVudD1cInN0YWNrZWRcIiB2YWx1ZT1cInt7ZXZlbnQucG9zdGFsQ29kZX19XCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJldmVudC5wb3N0YWxDb2RlXCI+XG4gICAgICA8L2lvbi1pbnB1dD5cbiAgICA8L2lvbi1pdGVtPlxuICAgIDxpb24taXRlbT5cbiAgICAgIDxpb24taW5wdXQgW2xhYmVsXT0nXCJjb21tb24ubG9jYWxpdHlcIiB8IHRyYW5zbGF0ZScgbGFiZWwtcGxhY2VtZW50PVwic3RhY2tlZFwiIHZhbHVlPVwie3tldmVudC5jaXR5fX1cIlxuICAgICAgICBbKG5nTW9kZWwpXT1cImV2ZW50LmNpdHlcIj5cbiAgICAgIDwvaW9uLWlucHV0PlxuICAgIDwvaW9uLWl0ZW0+XG4gIDwvaW9uLWxpc3Q+XG5cbiAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCI+XG4gICAgPGlvbi1pdGVtPlxuICAgICAgPGlvbi1pbnB1dCBbbGFiZWxdPVwiJ2NvbW1vbi5saW5rX193ZWInIHwgdHJhbnNsYXRlXCIgbGFiZWwtcGxhY2VtZW50PVwic3RhY2tlZFwiIHR5cGU9XCJ1cmxcIlxuICAgICAgICB2YWx1ZT1cInt7ZXZlbnQubGlua193ZWJ9fVwiIFsobmdNb2RlbCldPVwiZXZlbnQubGlua193ZWJcIiBbcGxhY2Vob2xkZXJdPVwiJ2NvbW1vbi5saW5rX19wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGVcIj5cbiAgICAgIDwvaW9uLWlucHV0PlxuICAgIDwvaW9uLWl0ZW0+XG4gICAgPGlvbi1pdGVtPlxuICAgICAgPGlvbi1pbnB1dCBbbGFiZWxdPVwiJ2NvbW1vbi5saW5rX19wb2xsJyB8IHRyYW5zbGF0ZVwiIGxhYmVsLXBsYWNlbWVudD1cInN0YWNrZWRcIiB0eXBlPVwidXJsXCJcbiAgICAgICAgdmFsdWU9XCJ7e2V2ZW50LmxpbmtfcG9sbH19XCIgWyhuZ01vZGVsKV09XCJldmVudC5saW5rX3BvbGxcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ2NvbW1vbi5saW5rX19wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGVcIj5cbiAgICAgIDwvaW9uLWlucHV0PlxuICAgIDwvaW9uLWl0ZW0+XG4gIDwvaW9uLWxpc3Q+XG5cbiAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCI+XG4gICAgPGlvbi1pdGVtIGlkPVwidGltZUZyb21JdGVtXCI+XG4gICAgICA8aW9uLWxhYmVsIHBvc2l0aW9uPVwiXCI+XG4gICAgICAgIHt7XCJjb21tb24uc3RhcnRfX2V2ZW50XCIgfCB0cmFuc2xhdGV9fTpcbiAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgPGlvbi1kYXRldGltZS1idXR0b24gc2xvdD1cImVuZFwiIGRhdGV0aW1lPVwidGltZUZyb21cIj48L2lvbi1kYXRldGltZS1idXR0b24+XG5cbiAgICAgIDxpb24tbW9kYWwgW2tlZXBDb250ZW50c01vdW50ZWRdPVwidHJ1ZVwiPlxuICAgICAgICA8bmctdGVtcGxhdGU+XG4gICAgICAgICAgPGlvbi1kYXRldGltZSBwcmVzZW50YXRpb249XCJ0aW1lXCIgaWQ9XCJ0aW1lRnJvbVwiIChpb25DaGFuZ2UpPVwiY2hhbmdlVGltZUZyb20oJGV2ZW50KVwiXG4gICAgICAgICAgICBtaW51dGVWYWx1ZXM9XCIwLDUsMTAsMTUsMjAsMjUsMzAsMzUsNDAsNDUsNTAsNTVcIiB2YWx1ZT1cInt7ZXZlbnQudGltZUZyb219fVwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cImV2ZW50LnRpbWVGcm9tXCI+PC9pb24tZGF0ZXRpbWU+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L2lvbi1tb2RhbD5cbiAgICA8L2lvbi1pdGVtPlxuXG4gICAgPGlvbi1pdGVtIGlkPVwidGltZVRvSXRlbVwiPlxuICAgICAgPGlvbi1sYWJlbCBwb3NpdGlvbj1cIlwiPiB7e1wiY29tbW9uLmVuZF9fZXZlbnRcIiB8IHRyYW5zbGF0ZX19OiA8L2lvbi1sYWJlbD5cbiAgICAgIDxpb24tZGF0ZXRpbWUtYnV0dG9uIHNsb3Q9XCJlbmRcIiBkYXRldGltZT1cInRpbWVUb1wiPjwvaW9uLWRhdGV0aW1lLWJ1dHRvbj5cblxuICAgICAgPGlvbi1tb2RhbCBba2VlcENvbnRlbnRzTW91bnRlZF09XCJ0cnVlXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8aW9uLWRhdGV0aW1lIHByZXNlbnRhdGlvbj1cInRpbWVcIiBpZD1cInRpbWVUb1wiIG1pbnV0ZVZhbHVlcz1cIjAsNSwxMCwxNSwyMCwyNSwzMCwzNSw0MCw0NSw1MCw1NVwiXG4gICAgICAgICAgICB2YWx1ZT1cInt7ZXZlbnQudGltZVRvfX1cIiBbKG5nTW9kZWwpXT1cImV2ZW50LnRpbWVUb1wiPjwvaW9uLWRhdGV0aW1lPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9pb24tbW9kYWw+XG4gICAgPC9pb24taXRlbT5cblxuICAgIDxpb24taXRlbSBpZD1cInN0YXJ0RGF0ZUl0ZW1cIj5cbiAgICAgIDxpb24tbGFiZWwgcG9zaXRpb249XCJkZWZhdWx0XCI+XG4gICAgICAgIHt7XCJjb21tb24uc3RhcnRfX2RhdGVcIiB8IHRyYW5zbGF0ZX19OlxuICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8aW9uLWRhdGV0aW1lLWJ1dHRvbiBzbG90PVwiZW5kXCIgZGF0ZXRpbWU9XCJzdGFydERhdGVcIj48L2lvbi1kYXRldGltZS1idXR0b24+XG5cbiAgICAgIDxpb24tbW9kYWwgW2tlZXBDb250ZW50c01vdW50ZWRdPVwidHJ1ZVwiPlxuICAgICAgICA8bmctdGVtcGxhdGU+XG4gICAgICAgICAgPGlvbi1kYXRldGltZSBbZmlyc3REYXlPZldlZWtdPVwiMVwiIChpb25DaGFuZ2UpPVwiY2hhbmdlU3RhcnREYXRlKCRldmVudClcIiBwcmVzZW50YXRpb249XCJkYXRlXCIgaWQ9XCJzdGFydERhdGVcIlxuICAgICAgICAgICAgdmFsdWU9XCJ7e2V2ZW50LnN0YXJ0RGF0ZX19XCIgWyhuZ01vZGVsKV09XCJldmVudC5zdGFydERhdGVcIj48L2lvbi1kYXRldGltZT5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvaW9uLW1vZGFsPlxuICAgIDwvaW9uLWl0ZW0+XG5cbiAgICA8aW9uLWl0ZW0gaWQ9XCJlbmREYXRlSXRlbVwiPlxuICAgICAgPGlvbi1sYWJlbCBwb3NpdGlvbj1cImRlZmF1bHRcIj5cbiAgICAgICAge3tcImNvbW1vbi5lbmRfX2RhdGVcIiB8IHRyYW5zbGF0ZX19OlxuICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8aW9uLWRhdGV0aW1lLWJ1dHRvbiBzbG90PVwiZW5kXCIgZGF0ZXRpbWU9XCJlbmREYXRlXCI+PC9pb24tZGF0ZXRpbWUtYnV0dG9uPlxuXG4gICAgICA8aW9uLW1vZGFsIFtrZWVwQ29udGVudHNNb3VudGVkXT1cInRydWVcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlPlxuICAgICAgICAgIDxpb24tZGF0ZXRpbWUgW2ZpcnN0RGF5T2ZXZWVrXT1cIjFcIiBwcmVzZW50YXRpb249XCJkYXRlXCIgaWQ9XCJlbmREYXRlXCIgdmFsdWU9XCJ7e2V2ZW50LmVuZERhdGV9fVwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cImV2ZW50LmVuZERhdGVcIj48L2lvbi1kYXRldGltZT5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvaW9uLW1vZGFsPlxuICAgIDwvaW9uLWl0ZW0+XG5cbiAgICA8aW9uLWl0ZW0+XG4gICAgICA8aW9uLWxhYmVsIHBvc2l0aW9uPVwiZGVmYXVsdFwiPlxuICAgICAgICB7e1wiZXZlbnQtYWRkLmlzX19jbG9zZWRfX2V2ZW50XCIgfCB0cmFuc2xhdGV9fVxuICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8aW9uLXRvZ2dsZSBzbG90PVwiZW5kXCIgW2NoZWNrZWRdPVwiZXZlbnQuY2xvc2VkRXZlbnRcIj48L2lvbi10b2dnbGU+XG4gICAgPC9pb24taXRlbT5cbiAgPC9pb24tbGlzdD5cblxuXG5cblxuXG5cbjwvaW9uLWNvbnRlbnQ+XG5cbjxuZy10ZW1wbGF0ZSAjbG9hZGluZz5cbiAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDEwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA2MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuPC9uZy10ZW1wbGF0ZT4iLCAiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFsZXJ0Q29udHJvbGxlciwgSW9uSXRlbVNsaWRpbmcsIE1vZGFsQ29udHJvbGxlciwgTmF2UGFyYW1zLCBUb2FzdENvbnRyb2xsZXIgfSBmcm9tIFwiQGlvbmljL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxuICBjYXRjaEVycm9yLFxuICBmb3JrSm9pbixcbiAgbGFzdFZhbHVlRnJvbSxcbiAgbWFwLFxuICBvZixcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG59IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBCcm93c2VyIH0gZnJvbSBcIkBjYXBhY2l0b3IvYnJvd3NlclwiO1xuaW1wb3J0IHsgVmVyYW5zdGFsdHVuZyB9IGZyb20gXCJzcmMvYXBwL21vZGVscy9ldmVudFwiO1xuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gXCJzcmMvYXBwL21vZGVscy91c2VyXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvZmlyZWJhc2UvZXZlbnQuc2VydmljZVwiO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvZmlyZWJhc2UvdXNlci1wcm9maWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IE1lbWJlclBhZ2UgfSBmcm9tIFwiLi4vLi4vbWVtYmVyL21lbWJlci5wYWdlXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDbHViIH0gZnJvbSBcInNyYy9hcHAvbW9kZWxzL2NsdWJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLWV2ZW50LWRldGFpbFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZXZlbnQtZGV0YWlsLnBhZ2UuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9ldmVudC1kZXRhaWwucGFnZS5zY3NzXCJdLFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50RGV0YWlsUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dChcImRhdGFcIikgZXZlbnQ6IFZlcmFuc3RhbHR1bmc7XG4gIEBJbnB1dChcImlzRnV0dXJlXCIpIGlzRnV0dXJlOiBib29sZWFuO1xuXG4gIGV2ZW50JDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIG1vZGUgPSBcInllc1wiO1xuXG4gIGFsbG93RWRpdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHVzZXIkOiBPYnNlcnZhYmxlPFVzZXI+O1xuICB1c2VyOiBVc2VyO1xuXG4gIGNsdWJBZG1pbkxpc3QkOiBPYnNlcnZhYmxlPENsdWJbXT47XG5cbiAgZXZlbnRIYXNDaGFuZ2VkOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsXG4gICAgcHJpdmF0ZSByZWFkb25seSB1c2VyUHJvZmlsZVNlcnZpY2U6IFVzZXJQcm9maWxlU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYWxlcnRDdHJsOiBBbGVydENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBmYlNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvYXN0Q29udHJvbGxlcjogVG9hc3RDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlXG4gICkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmV2ZW50ID0gdGhpcy5uYXZQYXJhbXMuZ2V0KFwiZGF0YVwiKTtcbiAgICB0aGlzLmV2ZW50JCA9IG9mKHRoaXMuZXZlbnQpO1xuICAgIHRoaXMuZXZlbnQkID0gdGhpcy5nZXRFdmVudCh0aGlzLmV2ZW50LmNsdWJJZCwgdGhpcy5ldmVudC5pZCk7XG5cbiAgICB0aGlzLmNsdWJBZG1pbkxpc3QkID0gdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1YkFkbWluTGlzdCgpO1xuICAgIHRoaXMuZXZlbnRIYXNDaGFuZ2VkID0ge307XG4gIH1cblxuICBnZXRFdmVudChjbHViSWQ6IHN0cmluZywgZXZlbnRJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlciQoKS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHRhcCgodXNlcikgPT4ge1xuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBFcnJvcihcIlVzZXIgbm90IGZvdW5kXCIpO1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5ldmVudFNlcnZpY2UuZ2V0Q2x1YkV2ZW50UmVmKGNsdWJJZCwgZXZlbnRJZCkpLFxuICAgICAgc3dpdGNoTWFwKChldmVudCkgPT4ge1xuICAgICAgICBpZiAoIWV2ZW50KSByZXR1cm4gb2YobnVsbCk7XG5cbiAgICAgICAgLy8gRmV0Y2ggY2x1YiBkZXRhaWxzXG4gICAgICAgIHJldHVybiB0aGlzLmZiU2VydmljZS5nZXRDbHViUmVmKGNsdWJJZCkucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoY2x1YiA9PiB7XG4gICAgICAgICAgICBpZiAoIWNsdWIpIHJldHVybiBvZihudWxsKTtcblxuICAgICAgICAgICAgLy8gRmV0Y2ggYWxsIGNsdWIgbWVtYmVycyBmaXJzdFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmJTZXJ2aWNlLmdldENsdWJNZW1iZXJSZWZzKGNsdWJJZCkucGlwZShcbiAgICAgICAgICAgICAgc3dpdGNoTWFwKGNsdWJNZW1iZXJzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbHViTWVtYmVyUHJvZmlsZXMkID0gY2x1Yk1lbWJlcnMubWFwKG1lbWJlciA9PlxuICAgICAgICAgICAgICAgICAgdGhpcy51c2VyUHJvZmlsZVNlcnZpY2UuZ2V0VXNlclByb2ZpbGVCeUlkKG1lbWJlci5pZCkucGlwZShcbiAgICAgICAgICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBGYWlsZWQgdG8gZmV0Y2ggcHJvZmlsZSBmb3IgY2x1YiBtZW1iZXIgJHttZW1iZXIuaWR9OmAsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHsgaWQ6IG1lbWJlci5pZCwgZmlyc3ROYW1lOiBcIlVua25vd25cIiwgbGFzdE5hbWU6IFwiVW5rbm93blwiLCBzdGF0dXM6IG51bGwgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIC8vIEZldGNoIGFsbCBhdHRlbmRlZXMgbmV4dFxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JrSm9pbihjbHViTWVtYmVyUHJvZmlsZXMkKS5waXBlKFxuICAgICAgICAgICAgICAgICAgc3dpdGNoTWFwKGNsdWJNZW1iZXJzV2l0aERldGFpbHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ldmVudFNlcnZpY2UuZ2V0Q2x1YkV2ZW50QXR0ZW5kZWVzUmVmKGNsdWJJZCwgZXZlbnRJZCkucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICBtYXAoYXR0ZW5kZWVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dGVuZGVlRGV0YWlscyA9IGF0dGVuZGVlcy5tYXAoYXR0ZW5kZWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWwgPSBjbHViTWVtYmVyc1dpdGhEZXRhaWxzLmZpbmQobWVtYmVyID0+IG1lbWJlciAmJiBtZW1iZXIuaWQgPT09IGF0dGVuZGVlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRldGFpbCA/IHsgLi4uZGV0YWlsLCBzdGF0dXM6IGF0dGVuZGVlLnN0YXR1cyB9IDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IG51bGwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRlbmRlZUxpc3RUcnVlID0gYXR0ZW5kZWVEZXRhaWxzLmZpbHRlcihhdHQgPT4gYXR0LnN0YXR1cyA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuZmlyc3ROYW1lLmxvY2FsZUNvbXBhcmUoYi5maXJzdE5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dGVuZGVlTGlzdEZhbHNlID0gYXR0ZW5kZWVEZXRhaWxzLmZpbHRlcihhdHQgPT4gYXR0LnN0YXR1cyA9PT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmZpcnN0TmFtZS5sb2NhbGVDb21wYXJlKGIuZmlyc3ROYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25kZWRJZHMgPSBuZXcgU2V0KGF0dGVuZGVlRGV0YWlscy5tYXAoYXR0ID0+IGF0dC5pZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5yZXNwb25kZWRNZW1iZXJzID0gY2x1Yk1lbWJlcnNXaXRoRGV0YWlscy5maWx0ZXIobWVtYmVyID0+IG1lbWJlciAmJiAhcmVzcG9uZGVkSWRzLmhhcyhtZW1iZXIuaWQpKS5zb3J0KChhLCBiKSA9PiBhLmZpcnN0TmFtZS5sb2NhbGVDb21wYXJlKGIuZmlyc3ROYW1lKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJBdHRlbmRlZSA9IGF0dGVuZGVlRGV0YWlscy5maW5kKGF0dCA9PiBhdHQgJiYgYXR0LmlkID09PSB0aGlzLnVzZXIudWlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHVzZXJBdHRlbmRlZSA/IHVzZXJBdHRlbmRlZS5zdGF0dXMgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdHVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsdWIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlczogYXR0ZW5kZWVEZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbmRlZUxpc3RUcnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRlbmRlZUxpc3RGYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5yZXNwb25kZWRNZW1iZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBhdHRlbmRlZXM6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2Yoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5ldmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2x1YixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVMaXN0VHJ1ZTogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlTGlzdEZhbHNlOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5yZXNwb25kZWRNZW1iZXJzOiBjbHViTWVtYmVyc1dpdGhEZXRhaWxzLmZpbHRlcihtZW1iZXIgPT4gbWVtYmVyICE9PSBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjbHViIG1lbWJlcnM6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHtcbiAgICAgICAgICAgICAgICAgIC4uLmV2ZW50LFxuICAgICAgICAgICAgICAgICAgY2x1YixcbiAgICAgICAgICAgICAgICAgIGF0dGVuZGVlczogW10sXG4gICAgICAgICAgICAgICAgICBhdHRlbmRlZUxpc3RUcnVlOiBbXSxcbiAgICAgICAgICAgICAgICAgIGF0dGVuZGVlTGlzdEZhbHNlOiBbXSxcbiAgICAgICAgICAgICAgICAgIHVucmVzcG9uZGVkTWVtYmVyczogW10sXG4gICAgICAgICAgICAgICAgICBzdGF0dXM6IG51bGxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gZ2V0SGVsZmVyRXZlbnRXaXRoQXR0ZW5kZWVzOlwiLCBlcnIpO1xuICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbiAgYXN5bmMgb3Blbk1lbWJlcihtZW1iZXI6IFByb2ZpbGUpIHtcbiAgICBjb25zb2xlLmxvZyhcIm9wZW5NZW1iZXJcIik7XG4gICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoe1xuICAgICAgY29tcG9uZW50OiBNZW1iZXJQYWdlLFxuICAgICAgcHJlc2VudGluZ0VsZW1lbnQ6IGF3YWl0IHRoaXMubW9kYWxDdHJsLmdldFRvcCgpLFxuICAgICAgY2FuRGlzbWlzczogdHJ1ZSxcbiAgICAgIHNob3dCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIGRhdGE6IG1lbWJlcixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgbW9kYWwucHJlc2VudCgpO1xuXG4gICAgY29uc3QgeyBkYXRhLCByb2xlIH0gPSBhd2FpdCBtb2RhbC5vbldpbGxEaXNtaXNzKCk7XG5cbiAgICBpZiAocm9sZSA9PT0gXCJjb25maXJtXCIpIHtcbiAgICB9XG4gIH1cblxuICBpc0NsdWJBZG1pbihjbHViQWRtaW5MaXN0OiBhbnlbXSwgY2x1YklkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY2x1YkFkbWluTGlzdCAmJiBjbHViQWRtaW5MaXN0LnNvbWUoY2x1YiA9PiBjbHViLmlkID09PSBjbHViSWQpO1xuICB9XG4gIGFzeW5jIGVkaXQoKSB7XG5cbiAgICBpZiAodGhpcy5hbGxvd0VkaXQpIHtcbiAgICAgIHRoaXMuYWxsb3dFZGl0ID0gZmFsc2U7XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmV2ZW50SGFzQ2hhbmdlZCkubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBhbGVydChcImNoYW5nZVwiKVxuICAgICAgICBjb25zdCB1cGRhdGVkRXZlbnQgPSBhd2FpdCB0aGlzLmV2ZW50U2VydmljZS5jaGFuZ2VDbHViRXZlbnQodGhpcy5ldmVudEhhc0NoYW5nZWQsIHRoaXMuZXZlbnQuY2x1YklkLCB0aGlzLmV2ZW50LmlkKS5jYXRjaChlID0+IHtcbiAgICAgICAgICB0aGlzLnRvYXN0QWN0aW9uRXJyb3IoZSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1cGRhdGVkRXZlbnQpO1xuICAgICAgICB0aGlzLnByZXNlbnRUb2FzdCgpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWxsb3dFZGl0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgdXBkYXRlRXZlbnQoZXZlbnQsIGZpZWxkKSB7XG4gICAgY29uc29sZS5sb2coZmllbGQsIGV2ZW50LmRldGFpbClcbiAgICBpZiAoZmllbGQgPT09ICdjbG9zZWRFdmVudCcpIHtcbiAgICAgIHRoaXMuZXZlbnRIYXNDaGFuZ2VkW2ZpZWxkXSA9IGV2ZW50LmRldGFpbC5jaGVja2VkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV2ZW50SGFzQ2hhbmdlZFtmaWVsZF0gPSBldmVudC5kZXRhaWwudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb3BlblVybCh1cmw6IHN0cmluZykge1xuICAgIEJyb3dzZXIub3Blbih7XG4gICAgICB1cmw6IHVybFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgdG9nZ2xlSXRlbShpdGVtOiBJb25JdGVtU2xpZGluZywgc3RhdHVzOiBib29sZWFuLCBldmVudDogYW55LCBtZW1iZXJJZDogc3RyaW5nKSB7XG4gICAgYXdhaXQgaXRlbS5jbG9zZSgpO1xuICAgIGF3YWl0IHRoaXMuZXZlbnRTZXJ2aWNlLnNldENsdWJFdmVudEF0dGVuZGVlU3RhdHVzQWRtaW4oXG4gICAgICBzdGF0dXMsXG4gICAgICBldmVudC5jbHViSWQsXG4gICAgICBldmVudC5pZCxcbiAgICAgIG1lbWJlcklkXG4gICAgKTtcbiAgICB0aGlzLnByZXNlbnRUb2FzdCgpO1xuICB9XG5cbiAgYXN5bmMgdG9nZ2xlKHN0YXR1czogYm9vbGVhbiwgZXZlbnQ6IFZlcmFuc3RhbHR1bmcgfCBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBTZXQgU3RhdHVzICR7c3RhdHVzfSBmb3IgdXNlciAke3RoaXMudXNlci51aWR9IGFuZCBjbHViICR7dGhpcy5ldmVudC5jbHViSWR9IGFuZCBldmVudCAke2V2ZW50LmlkfWBcbiAgICApO1xuICAgIGNvbnN0IG5ld1N0YXJ0RGF0ZSA9IGV2ZW50LmRhdGUudG9EYXRlKCk7XG4gICAgbmV3U3RhcnREYXRlLnNldEhvdXJzKE51bWJlcihldmVudC50aW1lRnJvbS5zdWJzdHJpbmcoMCwgMikpKTtcbiAgICAvLyBjb25zb2xlLmxvZyhuZXdTdGFydERhdGUpO1xuXG4gICAgLy8gR2V0IHRlYW0gdGhyZXNob2xkIHZpYSB0cmFpbmluZy50ZWFtSWRcbiAgICBjb25zb2xlLmxvZyhcIkdyZW56d2VydCBcIilcbiAgICBjb25zdCBldmVudFRocmVzaG9sZCA9IGV2ZW50LmNsdWIuZXZlbnRUaHJlc2hvbGQgfHwgMDtcbiAgICBjb25zb2xlLmxvZyhldmVudFRocmVzaG9sZCk7XG4gICAgLy8gVmVycMOkdGV0ZSBBYm1lbGR1bmc/XG4gICAgaWYgKCgobmV3U3RhcnREYXRlLmdldFRpbWUoKSAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpKSA8ICgxMDAwICogNjAgKiA2MCAqIGV2ZW50VGhyZXNob2xkKSkgJiYgc3RhdHVzID09IGZhbHNlICYmIGV2ZW50VGhyZXNob2xkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInRvbyBsYXRlXCIpO1xuICAgICAgYXdhaXQgdGhpcy50b29MYXRlVG9nZ2xlKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT0tcbiAgICAgIGF3YWl0IHRoaXMuZXZlbnRTZXJ2aWNlLnNldENsdWJFdmVudEF0dGVuZGVlU3RhdHVzKFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIHRoaXMuZXZlbnQuY2x1YklkLFxuICAgICAgICBldmVudC5pZFxuICAgICAgKTtcbiAgICAgIHRoaXMucHJlc2VudFRvYXN0KCk7XG4gICAgfVxuXG4gIH1cbiAgYXN5bmMgdG9vTGF0ZVRvZ2dsZSgpIHtcbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XG4gICAgICBoZWFkZXI6IFwiQWJtZWxkZW4gbmljaHQgbcO2Z2xpY2hcIixcbiAgICAgIG1lc3NhZ2U6IFwiQml0dGUgbWVsZGUgZGljaCBkaXJla3QgYmVpbSBUcmFpbmVydGVhbSB1bSBkaWNoIGFienVtZWxkZW5cIixcbiAgICAgIGJ1dHRvbnM6IFt7XG4gICAgICAgIHJvbGU6IFwiXCIsXG4gICAgICAgIHRleHQ6IFwiT0tcIixcbiAgICAgICAgaGFuZGxlcjogKGRhdGEpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH0pXG4gICAgYWxlcnQucHJlc2VudCgpXG4gIH1cbiAgYXN5bmMgcHJlc2VudFRvYXN0KCkge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLnN1Y2Nlc3NfX3NhdmVkXCIpKSxcbiAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgfSk7XG4gICAgdG9hc3QucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgdG9hc3RBY3Rpb25FcnJvcihlcnJvcikge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gIH1cblxuXG4gIGNoYW5nZVRpbWVGcm9tKGV2KSB7XG4gICAgY29uc29sZS5sb2coZXYuZGV0YWlsLnZhbHVlKTtcbiAgICBpZiAodGhpcy5ldmVudC50aW1lRnJvbSA+IHRoaXMuZXZlbnQudGltZVRvKSB7XG4gICAgICB0aGlzLmV2ZW50LnRpbWVUbyA9IHRoaXMuZXZlbnQudGltZUZyb207XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhcnREYXRlKGV2KSB7XG4gICAgY29uc29sZS5sb2coZXYuZGV0YWlsLnZhbHVlKTtcbiAgICBpZiAodGhpcy5ldmVudC5zdGFydERhdGUgPiB0aGlzLmV2ZW50LmVuZERhdGUpIHtcbiAgICAgIHRoaXMuZXZlbnQuZW5kRGF0ZSA9IHRoaXMuZXZlbnQuc3RhcnREYXRlO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNsb3NlKCkge1xuXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kYWxDdHJsLmRpc21pc3MobnVsbCwgXCJjbG9zZVwiKTtcbiAgfVxuXG4gIGFzeW5jIGNvbmZpcm0oKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kYWxDdHJsLmRpc21pc3ModGhpcy5ldmVudCwgXCJjb25maXJtXCIpO1xuICB9XG59XG4iLCAiPG5nLWNvbnRhaW5lciAqbmdJZj1cImV2ZW50JCB8IGFzeW5jIGFzIGV2ZW50IGVsc2UgbG9hZGluZ1wiPlxuICA8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxuICAgIDxpb24tdG9vbGJhcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbHViQWRtaW5MaXN0JCB8IGFzeW5jIGFzIGNsdWJBZG1pbkxpc3RcIj5cbiAgICAgICAgPGlvbi1idXR0b25zICpuZ0lmPVwiaXNDbHViQWRtaW4oY2x1YkFkbWluTGlzdCwgdGhpcy5ldmVudC5jbHViSWQpXCIgc2xvdD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgIDxpb24tYnV0dG9uICpuZ0lmPVwiIWFsbG93RWRpdFwiIChjbGljayk9XCJlZGl0KClcIj57e1wiY29tbW9uLmVkaXRcIiB8IHRyYW5zbGF0ZX19PC9pb24tYnV0dG9uPlxuICAgICAgICAgIDxpb24tYnV0dG9uICpuZ0lmPVwiYWxsb3dFZGl0XCIgKGNsaWNrKT1cImVkaXQoKVwiPnt7XCJjb21tb24uZG9uZVwiIHwgdHJhbnNsYXRlfX08L2lvbi1idXR0b24+XG4gICAgICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxpb24tdGl0bGU+e3tcImNvbW1vbi5kZXRhaWxzXCIgfCB0cmFuc2xhdGV9fTwvaW9uLXRpdGxlPlxuICAgICAgPGlvbi1idXR0b25zIHNsb3Q9XCJwcmltYXJ5XCI+XG4gICAgICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJjbG9zZSgpXCI+e3tcImNvbW1vbi5jbG9zZVwiIHwgdHJhbnNsYXRlfX08L2lvbi1idXR0b24+XG4gICAgICA8L2lvbi1idXR0b25zPlxuICAgIDwvaW9uLXRvb2xiYXI+XG4gIDwvaW9uLWhlYWRlcj5cbiAgPCEtLSBjbGFzcz1cImlvbi1wYWRkaW5nXCIgLS0+XG5cbiAgPGlvbi1jb250ZW50PlxuICAgIDxpb24taGVhZGVyIGNvbGxhcHNlPVwiY29uZGVuc2VcIj5cbiAgICAgIDxpb24tdG9vbGJhcj5cbiAgICAgICAgPGlvbi10aXRsZSBzaXplPVwibGFyZ2VcIj57e1wiY29tbW9uLmRldGFpbHNcIiB8IHRyYW5zbGF0ZX19PC9pb24tdGl0bGU+XG4gICAgICA8L2lvbi10b29sYmFyPlxuICAgIDwvaW9uLWhlYWRlcj5cblxuICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiICpuZ0lmPVwiIWFsbG93RWRpdFwiPlxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cImhvbWUtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbGFiZWwgY2xhc3M9XCJpb24tdGV4dC13cmFwXCI+XG4gICAgICAgICAgPGgyPnt7ZXZlbnQubmFtZX19PC9oMj5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuXG5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJjYWxlbmRhci1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICB7e2V2ZW50LmRhdGUudG9EYXRlKCkgfCBkYXRlOidkZC5NTS5ZWVlZICd9fSB7e2V2ZW50LnRpbWVGcm9tIHxcbiAgICAgICAgICAgIGRhdGU6J0hIOm1tJ319IFVociAtIHt7ZXZlbnQudGltZVRvIHwgZGF0ZTonSEg6bW0nfX0gVWhyXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwibG9jYXRpb24tb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbGFiZWwgY2xhc3M9XCJpb24tdGV4dC13cmFwXCI+XG4gICAgICAgICAgPGgyPnt7ZXZlbnQubG9jYXRpb259fTwvaDI+XG4gICAgICAgICAgPGgyPnt7ZXZlbnQuc3RyZWV0QW5kTnVtYmVyfX0gPC9oMj5cbiAgICAgICAgICA8aDI+e3tldmVudC5wb3N0YWxDb2RlfX0ge3tldmVudC5jaXR5fX08L2gyPlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJpbmZvcm1hdGlvbi1jaXJjbGUtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbGFiZWwgY2xhc3M9XCJpb24tdGV4dC13cmFwXCI+XG4gICAgICAgICAgPGgyPnt7ZXZlbnQuZGVzY3JpcHRpb259fTwvaDI+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cblxuICAgICAgPGlvbi1pdGVtICpuZ0lmPVwiZXZlbnQubGlua193ZWJcIj5cbiAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJsaW5rLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsIGNsYXNzPVwiaW9uLXRleHQtd3JhcFwiPlxuICAgICAgICAgIDxoMj57e2V2ZW50Lmxpbmtfd2VifX08L2gyPlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgPGlvbi1idXR0b24gc2xvdD1cImVuZFwiIChjbGljayk9XCJvcGVuVXJsKGV2ZW50Lmxpbmtfd2ViKVwiIGZpbGw9XCJjbGVhclwiPlxuICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cIm9wZW4tb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDxpb24taXRlbSAqbmdJZj1cImV2ZW50LmxpbmtfcG9sbFwiPlxuICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cImhlbHAtY2lyY2xlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsIGNsYXNzPVwiaW9uLXRleHQtd3JhcFwiPlxuICAgICAgICAgIDxoMj57e2V2ZW50LmxpbmtfcG9sbH19PC9oMj5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgIDxpb24tYnV0dG9uIHNsb3Q9XCJlbmRcIiAoY2xpY2spPVwib3BlblVybChldmVudC5saW5rX3BvbGwpXCIgZmlsbD1cImNsZWFyXCI+XG4gICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwib3Blbi1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24taXRlbT5cbiAgICA8L2lvbi1saXN0PlxuXG5cblxuICAgIDwhLS0gQ0hBTkdFIE1PREUtLT5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYWxsb3dFZGl0XCI+XG4gICAgICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIj5cbiAgICAgICAgPGlvbi1pdGVtPlxuICAgICAgICAgIDxpb24taW5wdXQgW2xhYmVsXT0nXCJjb21tb24ubmFtZVwiIHwgdHJhbnNsYXRlJyBsYWJlbC1wbGFjZW1lbnQ9XCJzdGFja2VkXCJcbiAgICAgICAgICAgIChpb25DaGFuZ2UpPVwidXBkYXRlRXZlbnQoJGV2ZW50LCAnbmFtZScpXCIgW3ZhbHVlXT1cImV2ZW50Lm5hbWVcIj5cbiAgICAgICAgICA8L2lvbi1pbnB1dD5cbiAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgPGlvbi1pdGVtPlxuICAgICAgICAgIDxpb24tdGV4dGFyZWEgW2F1dG9Hcm93XT1cInRydWVcIiAoaW9uQ2hhbmdlKT1cInVwZGF0ZUV2ZW50KCRldmVudCwgJ2Rlc2NyaXB0aW9uJylcIlxuICAgICAgICAgICAgW2xhYmVsXT0nXCJjb21tb24uZGVzY3JpcHRpb25cIiB8IHRyYW5zbGF0ZScgbGFiZWwtcGxhY2VtZW50PVwic3RhY2tlZFwiIFt2YWx1ZV09XCJldmVudC5kZXNjcmlwdGlvblwiPlxuICAgICAgICAgIDwvaW9uLXRleHRhcmVhPlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgPC9pb24tbGlzdD5cblxuICAgICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCI+XG4gICAgICAgIDxpb24taXRlbT5cbiAgICAgICAgICA8aW9uLWlucHV0IChpb25DaGFuZ2UpPVwidXBkYXRlRXZlbnQoJGV2ZW50LCAnbG9jYXRpb24nKVwiIFtsYWJlbF09J1wiY29tbW9uLmxvY2F0aW9uXCIgfCB0cmFuc2xhdGUnXG4gICAgICAgICAgICBsYWJlbC1wbGFjZW1lbnQ9XCJzdGFja2VkXCIgW3ZhbHVlXT1cImV2ZW50LmxvY2F0aW9uXCI+XG4gICAgICAgICAgPC9pb24taW5wdXQ+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgIDxpb24taXRlbT5cbiAgICAgICAgICA8aW9uLWlucHV0IChpb25DaGFuZ2UpPVwidXBkYXRlRXZlbnQoJGV2ZW50LCAnc3RyZWV0QW5kTnVtYmVyJylcIlxuICAgICAgICAgICAgW2xhYmVsXT0nXCJjb21tb24uc3RyZWV0X19ob3VzZV9udW1iZXJcIiB8IHRyYW5zbGF0ZScgbGFiZWwtcGxhY2VtZW50PVwic3RhY2tlZFwiXG4gICAgICAgICAgICBbdmFsdWVdPVwiZXZlbnQuc3RyZWV0QW5kTnVtYmVyXCI+XG4gICAgICAgICAgPC9pb24taW5wdXQ+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgIDxpb24taXRlbT5cbiAgICAgICAgICA8aW9uLWlucHV0IChpb25DaGFuZ2UpPVwidXBkYXRlRXZlbnQoJGV2ZW50LCAncG9zdGFsQ29kZScpXCIgW2xhYmVsXT1cIidjb21tb24ucG9zdGFsX19jb2RlJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgICBsYWJlbC1wbGFjZW1lbnQ9XCJzdGFja2VkXCIgW3ZhbHVlXT1cImV2ZW50LnBvc3RhbENvZGVcIj5cbiAgICAgICAgICA8L2lvbi1pbnB1dD5cbiAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgPGlvbi1pdGVtPlxuICAgICAgICAgIDxpb24taW5wdXQgKGlvbkNoYW5nZSk9XCJ1cGRhdGVFdmVudCgkZXZlbnQsICdjaXR5JylcIiBbbGFiZWxdPSdcImNvbW1vbi5sb2NhbGl0eVwiIHwgdHJhbnNsYXRlJ1xuICAgICAgICAgICAgbGFiZWwtcGxhY2VtZW50PVwic3RhY2tlZFwiIFt2YWx1ZV09XCJldmVudC5jaXR5XCI+XG4gICAgICAgICAgPC9pb24taW5wdXQ+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICA8L2lvbi1saXN0PlxuXG5cbiAgICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiPlxuICAgICAgICA8aW9uLWl0ZW0+XG4gICAgICAgICAgPGlvbi1pbnB1dCAoaW9uQ2hhbmdlKT1cInVwZGF0ZUV2ZW50KCRldmVudCwgJ2xpbmtfd2ViJylcIiBbbGFiZWxdPVwiJ2NvbW1vbi5saW5rX193ZWInIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgICAgIGxhYmVsLXBsYWNlbWVudD1cInN0YWNrZWRcIiB0eXBlPVwidXJsXCIgW3ZhbHVlXT1cImV2ZW50Lmxpbmtfd2ViXCJcbiAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCInY29tbW9uLmxpbmtfX3BsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZVwiPlxuICAgICAgICAgIDwvaW9uLWlucHV0PlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICA8aW9uLWl0ZW0+XG4gICAgICAgICAgPGlvbi1pbnB1dCAoaW9uQ2hhbmdlKT1cInVwZGF0ZUV2ZW50KCRldmVudCwgJ2xpbmtfcG9sbCcpXCIgW2xhYmVsXT1cIidjb21tb24ubGlua19fcG9sbCcgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgICAgbGFiZWwtcGxhY2VtZW50PVwic3RhY2tlZFwiIHR5cGU9XCJ1cmxcIiBbdmFsdWVdPVwiZXZlbnQubGlua19wb2xsXCJcbiAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCInY29tbW9uLmxpbmtfX3BsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZVwiPlxuICAgICAgICAgIDwvaW9uLWlucHV0PlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgPC9pb24tbGlzdD5cblxuICAgICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCI+XG4gICAgICAgIDxpb24taXRlbSBpZD1cInRpbWVGcm9tSXRlbVwiPlxuICAgICAgICAgIDxpb24tbGFiZWwgcG9zaXRpb249XCJcIj5cbiAgICAgICAgICAgIHt7XCJjb21tb24uc3RhcnRfX2V2ZW50XCIgfCB0cmFuc2xhdGV9fTpcbiAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICA8aW9uLWRhdGV0aW1lLWJ1dHRvbiBzbG90PVwiZW5kXCIgZGF0ZXRpbWU9XCJ0aW1lRnJvbVwiPjwvaW9uLWRhdGV0aW1lLWJ1dHRvbj5cblxuICAgICAgICAgIDxpb24tbW9kYWwgW2tlZXBDb250ZW50c01vdW50ZWRdPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICA8aW9uLWRhdGV0aW1lIHByZXNlbnRhdGlvbj1cInRpbWVcIiBpZD1cInRpbWVGcm9tXCIgKGlvbkNoYW5nZSk9XCJjaGFuZ2VUaW1lRnJvbSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAoaW9uQ2hhbmdlKT1cInVwZGF0ZUV2ZW50KCRldmVudCwgJ3RpbWVGcm9tJylcIiBtaW51dGVWYWx1ZXM9XCIwLDUsMTAsMTUsMjAsMjUsMzAsMzUsNDAsNDUsNTAsNTVcIlxuICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJldmVudC50aW1lRnJvbVwiPjwvaW9uLWRhdGV0aW1lPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L2lvbi1tb2RhbD5cbiAgICAgICAgPC9pb24taXRlbT5cblxuICAgICAgICA8aW9uLWl0ZW0gaWQ9XCJ0aW1lVG9JdGVtXCI+XG4gICAgICAgICAgPGlvbi1sYWJlbCBwb3NpdGlvbj1cIlwiPiB7e1wiY29tbW9uLmVuZF9fZXZlbnRcIiB8IHRyYW5zbGF0ZX19OiA8L2lvbi1sYWJlbD5cbiAgICAgICAgICA8aW9uLWRhdGV0aW1lLWJ1dHRvbiBzbG90PVwiZW5kXCIgZGF0ZXRpbWU9XCJ0aW1lVG9cIj48L2lvbi1kYXRldGltZS1idXR0b24+XG5cbiAgICAgICAgICA8aW9uLW1vZGFsIFtrZWVwQ29udGVudHNNb3VudGVkXT1cInRydWVcIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPGlvbi1kYXRldGltZSAoaW9uQ2hhbmdlKT1cInVwZGF0ZUV2ZW50KCRldmVudCwgJ3RpbWVUbycpXCIgcHJlc2VudGF0aW9uPVwidGltZVwiIGlkPVwidGltZVRvXCJcbiAgICAgICAgICAgICAgICBtaW51dGVWYWx1ZXM9XCIwLDUsMTAsMTUsMjAsMjUsMzAsMzUsNDAsNDUsNTAsNTVcIiBbdmFsdWVdPVwiZXZlbnQudGltZVRvXCI+PC9pb24tZGF0ZXRpbWU+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvaW9uLW1vZGFsPlxuICAgICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICAgIDxpb24taXRlbSBpZD1cInN0YXJ0RGF0ZUl0ZW1cIj5cbiAgICAgICAgICA8aW9uLWxhYmVsIHBvc2l0aW9uPVwiZGVmYXVsdFwiPlxuICAgICAgICAgICAge3tcImNvbW1vbi5zdGFydF9fZGF0ZVwiIHwgdHJhbnNsYXRlfX06XG4gICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgPGlvbi1kYXRldGltZS1idXR0b24gc2xvdD1cImVuZFwiIGRhdGV0aW1lPVwic3RhcnREYXRlXCI+PC9pb24tZGF0ZXRpbWUtYnV0dG9uPlxuXG4gICAgICAgICAgPGlvbi1tb2RhbCBba2VlcENvbnRlbnRzTW91bnRlZF09XCJ0cnVlXCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDxpb24tZGF0ZXRpbWUgKGlvbkNoYW5nZSk9XCJ1cGRhdGVFdmVudCgkZXZlbnQsICdzdGFydERhdGUnKVwiIFtmaXJzdERheU9mV2Vla109XCIxXCJcbiAgICAgICAgICAgICAgICAoaW9uQ2hhbmdlKT1cImNoYW5nZVN0YXJ0RGF0ZSgkZXZlbnQpXCIgcHJlc2VudGF0aW9uPVwiZGF0ZVwiIGlkPVwic3RhcnREYXRlXCJcbiAgICAgICAgICAgICAgICBbdmFsdWVdPVwiZXZlbnQuc3RhcnREYXRlXCI+PC9pb24tZGF0ZXRpbWU+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvaW9uLW1vZGFsPlxuICAgICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICAgIDxpb24taXRlbSBpZD1cImVuZERhdGVJdGVtXCI+XG4gICAgICAgICAgPGlvbi1sYWJlbCBwb3NpdGlvbj1cImRlZmF1bHRcIj5cbiAgICAgICAgICAgIHt7XCJjb21tb24uZW5kX19kYXRlXCIgfCB0cmFuc2xhdGV9fTpcbiAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICA8aW9uLWRhdGV0aW1lLWJ1dHRvbiBzbG90PVwiZW5kXCIgZGF0ZXRpbWU9XCJlbmREYXRlXCI+PC9pb24tZGF0ZXRpbWUtYnV0dG9uPlxuXG4gICAgICAgICAgPGlvbi1tb2RhbCBba2VlcENvbnRlbnRzTW91bnRlZF09XCJ0cnVlXCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDxpb24tZGF0ZXRpbWUgKGlvbkNoYW5nZSk9XCJ1cGRhdGVFdmVudCgkZXZlbnQsICdlbmREYXRlJylcIiBbZmlyc3REYXlPZldlZWtdPVwiMVwiIHByZXNlbnRhdGlvbj1cImRhdGVcIlxuICAgICAgICAgICAgICAgIGlkPVwiZW5kRGF0ZVwiIFt2YWx1ZV09XCJldmVudC5lbmREYXRlXCI+PC9pb24tZGF0ZXRpbWU+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvaW9uLW1vZGFsPlxuICAgICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICAgIDxpb24taXRlbT5cbiAgICAgICAgICA8aW9uLWxhYmVsIHBvc2l0aW9uPVwiZGVmYXVsdFwiPlxuICAgICAgICAgICAge3tcImV2ZW50LWFkZC5pc19fY2xvc2VkX19ldmVudFwiIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICA8aW9uLXRvZ2dsZSBzbG90PVwiZW5kXCIgKGlvbkNoYW5nZSk9XCJ1cGRhdGVFdmVudCgkZXZlbnQsICdjbG9zZWRFdmVudCcpXCIgW2NoZWNrZWRdPVwiZXZlbnQuY2xvc2VkRXZlbnRcIj48L2lvbi10b2dnbGU+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDwvaW9uLWxpc3Q+XG4gICAgPC9uZy1jb250YWluZXI+XG5cblxuICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiIGxpbmVzPVwibm9uZVwiICpuZ0lmPVwiaXNGdXR1cmUgJiYgIWFsbG93RWRpdCAmJiAhZXZlbnQuY2xvc2VkRXZlbnRcIj5cbiAgICAgIDxpb24tbGlzdC1oZWFkZXI+XG4gICAgICAgIHt7XCJjb21tb24uYXR0ZW5kYW5jZXNfX2Fic2VuY2VzXCIgfCB0cmFuc2xhdGV9fVxuICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG4gICAgICA8aW9uLWl0ZW0gY2xhc3M9XCJteWNsdWJTdGF0dXNcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImV2ZW50Lmhhc093blByb3BlcnR5KCdzdGF0dXMnKTsgZWxzZSBsb2FkaW5nU3RhdHVzXCI+XG4gICAgICAgICAgPGlvbi1mYWItYnV0dG9uIChjbGljayk9XCJ0b2dnbGUodHJ1ZSwgZXZlbnQpXCIgc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJ3YXJuaW5nXCIgc2xvdD1cInN0YXJ0XCJcbiAgICAgICAgICAgICpuZ0lmPVwiZXZlbnQuc3RhdHVzID09PSBudWxsXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImhlbHAtY2lyY2xlXCI+IDwvaW9uLWljb24+XG4gICAgICAgICAgPC9pb24tZmFiLWJ1dHRvbj5cblxuICAgICAgICAgIDxpb24tZmFiLWJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlKHRydWUsIGV2ZW50KVwiIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGFuZ2VyXCIgc2xvdD1cInN0YXJ0XCJcbiAgICAgICAgICAgICpuZ0lmPVwiZXZlbnQuc3RhdHVzID09PSBmYWxzZVwiPlxuICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjbG9zZS1jaXJjbGVcIj4gPC9pb24taWNvbj5cbiAgICAgICAgICA8L2lvbi1mYWItYnV0dG9uPlxuXG4gICAgICAgICAgPGlvbi1mYWItYnV0dG9uIChjbGljayk9XCJ0b2dnbGUoZmFsc2UsIGV2ZW50KVwiIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwic3VjY2Vzc1wiIHNsb3Q9XCJzdGFydFwiXG4gICAgICAgICAgICAqbmdJZj1cImV2ZW50LnN0YXR1cyA9PT0gdHJ1ZVwiPlxuICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjaGVja21hcmstY2lyY2xlXCI+IDwvaW9uLWljb24+XG4gICAgICAgICAgPC9pb24tZmFiLWJ1dHRvbj5cblxuICAgICAgICAgIDxpb24tbGFiZWw+e3tcImNvbW1vbi5teV9fc3RhdHVzXCIgfCB0cmFuc2xhdGV9fTwvaW9uLWxhYmVsPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgPC9pb24tbGlzdD5cblxuICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiICpuZ0lmPVwiIWFsbG93RWRpdCAmJiAhZXZlbnQuY2xvc2VkRXZlbnRcIj5cbiAgICAgIDwhLS0gRXJzZXR6ZSBkaWUgYmVzdGVoZW5kZW4gQWNjb3JkaW9uLUluaGFsdGUgbWl0IGRpZXNlciBWZXJzaW9uIC0tPlxuICAgICAgPGlvbi1hY2NvcmRpb24tZ3JvdXAgW211bHRpcGxlXT1cInRydWVcIiBbdmFsdWVdPVwiWyd5ZXMnXVwiPlxuICAgICAgICA8aW9uLWFjY29yZGlvbiB2YWx1ZT1cInllc1wiPlxuICAgICAgICAgIDxpb24taXRlbSBzbG90PVwiaGVhZGVyXCIgY29sb3I9XCJsaWdodFwiPlxuICAgICAgICAgICAgPGlvbi1sYWJlbD57e1wiY29tbW9uLnByZXNlbnRcIiB8IHRyYW5zbGF0ZX19OiB7e2V2ZW50WydhdHRlbmRlZUxpc3RUcnVlJ10ubGVuZ3RofX08L2lvbi1sYWJlbD5cbiAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgIDxkaXYgc2xvdD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxpb24tbGlzdD5cbiAgICAgICAgICAgICAgPGlvbi1pdGVtLXNsaWRpbmcgI2l0ZW0gKm5nRm9yPVwibGV0IG1lbWJlciBvZiBldmVudFsnYXR0ZW5kZWVMaXN0VHJ1ZSddXCI+XG4gICAgICAgICAgICAgICAgPGlvbi1pdGVtIGRldGFpbD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBjb2xvcj1cInN1Y2Nlc3NcIiBzbG90PVwic3RhcnRcIiBuYW1lPVwiY2hlY2ttYXJrLWNpcmNsZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgICAgICA8aW9uLWxhYmVsIChjbGljayk9XCJvcGVuTWVtYmVyKG1lbWJlcilcIj57e21lbWJlci5maXJzdE5hbWV9fSB7e21lbWJlci5sYXN0TmFtZX19PC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9pb24taXRlbT5cblxuXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2x1YkFkbWluTGlzdCQgfCBhc3luYyBhcyBjbHViQWRtaW5MaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpb24taXRlbS1vcHRpb25zICpuZ0lmPVwiaXNDbHViQWRtaW4oY2x1YkFkbWluTGlzdCwgZXZlbnQuY2x1YklkKVwiIHNpZGU9XCJlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9uIGNvbG9yPVwiZGFuZ2VyXCIgKGNsaWNrKT1cInRvZ2dsZUl0ZW0oaXRlbSwgZmFsc2UsIGV2ZW50LCBtZW1iZXIuaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJjbG9zZS1jaXJjbGVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbnM+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8L2lvbi1pdGVtLXNsaWRpbmc+XG4gICAgICAgICAgICA8L2lvbi1saXN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2lvbi1hY2NvcmRpb24+XG5cbiAgICAgICAgPGlvbi1hY2NvcmRpb24gdmFsdWU9XCJub1wiPlxuICAgICAgICAgIDxpb24taXRlbSBzbG90PVwiaGVhZGVyXCIgY29sb3I9XCJsaWdodFwiPlxuICAgICAgICAgICAgPGlvbi1sYWJlbD57e1wiY29tbW9uLmFic2VudFwiIHwgdHJhbnNsYXRlfX06IHt7ZXZlbnRbJ2F0dGVuZGVlTGlzdEZhbHNlJ10ubGVuZ3RofX08L2lvbi1sYWJlbD5cbiAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgIDxkaXYgc2xvdD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxpb24tbGlzdD5cbiAgICAgICAgICAgICAgPGlvbi1pdGVtLXNsaWRpbmcgI2l0ZW0gKm5nRm9yPVwibGV0IG1lbWJlciBvZiBldmVudFsnYXR0ZW5kZWVMaXN0RmFsc2UnXVwiPlxuICAgICAgICAgICAgICAgIDxpb24taXRlbSBkZXRhaWw9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8aW9uLWljb24gY29sb3I9XCJkYW5nZXJcIiBzbG90PVwic3RhcnRcIiBuYW1lPVwiY2xvc2UtY2lyY2xlXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgICAgIDxpb24tbGFiZWwgKGNsaWNrKT1cIm9wZW5NZW1iZXIobWVtYmVyKVwiPnt7bWVtYmVyLmZpcnN0TmFtZX19IHt7bWVtYmVyLmxhc3ROYW1lfX08L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNsdWJBZG1pbkxpc3QkIHwgYXN5bmMgYXMgY2x1YkFkbWluTGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9ucyAqbmdJZj1cImlzQ2x1YkFkbWluKGNsdWJBZG1pbkxpc3QsIGV2ZW50LmNsdWJJZClcIiBzaWRlPVwiZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlvbi1pdGVtLW9wdGlvbiBjb2xvcj1cInN1Y2Nlc3NcIiAoY2xpY2spPVwidG9nZ2xlSXRlbShpdGVtLCB0cnVlLCBldmVudCwgbWVtYmVyLmlkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwiY2hlY2ttYXJrLWNpcmNsZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9pb24taXRlbS1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9ucz5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2lvbi1pdGVtLXNsaWRpbmc+XG4gICAgICAgICAgICA8L2lvbi1saXN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2lvbi1hY2NvcmRpb24+XG5cbiAgICAgICAgPGlvbi1hY2NvcmRpb24gdmFsdWU9XCJudWxsXCI+XG4gICAgICAgICAgPGlvbi1pdGVtIHNsb3Q9XCJoZWFkZXJcIiBjb2xvcj1cImxpZ2h0XCI+XG4gICAgICAgICAgICA8aW9uLWxhYmVsPnt7XCJjb21tb24ubm9yZXBseVwiIHwgdHJhbnNsYXRlfX06IHt7ZXZlbnRbJ3VucmVzcG9uZGVkTWVtYmVycyddLmxlbmd0aH19PC9pb24tbGFiZWw+XG4gICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8aW9uLWxpc3Q+XG4gICAgICAgICAgICAgIDxpb24taXRlbS1zbGlkaW5nICNpdGVtICpuZ0Zvcj1cImxldCBtZW1iZXIgb2YgZXZlbnRbJ3VucmVzcG9uZGVkTWVtYmVycyddXCI+XG4gICAgICAgICAgICAgICAgPGlvbi1pdGVtIGRldGFpbD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBjb2xvcj1cIndhcm5pbmdcIiBzbG90PVwic3RhcnRcIiBuYW1lPVwiaGVscC1jaXJjbGVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgICAgPGlvbi1sYWJlbCAoY2xpY2spPVwib3Blbk1lbWJlcihtZW1iZXIpXCI+e3ttZW1iZXIuZmlyc3ROYW1lfX0ge3ttZW1iZXIubGFzdE5hbWV9fTwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2x1YkFkbWluTGlzdCQgfCBhc3luYyBhcyBjbHViQWRtaW5MaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpb24taXRlbS1vcHRpb25zICpuZ0lmPVwiaXNDbHViQWRtaW4oY2x1YkFkbWluTGlzdCwgZXZlbnQuY2x1YklkKVwiIHNpZGU9XCJlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9uIGNvbG9yPVwic3VjY2Vzc1wiIChjbGljayk9XCJ0b2dnbGVJdGVtKGl0ZW0sIHRydWUsIGV2ZW50LCBtZW1iZXIuaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJjaGVja21hcmstY2lyY2xlXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9uIGNvbG9yPVwiZGFuZ2VyXCIgKGNsaWNrKT1cInRvZ2dsZUl0ZW0oaXRlbSwgZmFsc2UsIGV2ZW50LCBtZW1iZXIuaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJjbG9zZS1jaXJjbGVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbnM+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8L2lvbi1pdGVtLXNsaWRpbmc+XG4gICAgICAgICAgICA8L2lvbi1saXN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2lvbi1hY2NvcmRpb24+XG4gICAgICA8L2lvbi1hY2NvcmRpb24tZ3JvdXA+XG4gICAgPC9pb24tbGlzdD5cbiAgPC9pb24tY29udGVudD5cbjwvbmctY29udGFpbmVyPlxuXG48bmctdGVtcGxhdGUgI2xvYWRpbmdTdGF0dXM+XG4gIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiAxMCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogNjAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbjwvbmctdGVtcGxhdGU+XG5cbjwhLS0gRXZlbnQgRGV0YWlscyBTa2VsZXRvbiAtLT5cbjxuZy10ZW1wbGF0ZSAjbG9hZGluZz5cbiAgPCEtLSBIZWFkZXIgLS0+XG4gIDxpb24taGVhZGVyIFt0cmFuc2x1Y2VudF09XCJ0cnVlXCI+XG4gICAgPGlvbi10b29sYmFyPlxuICAgICAgPGlvbi1idXR0b25zIHNsb3Q9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDgwcHg7IGhlaWdodDogMjBweDsgbWFyZ2luOiAwIDEwcHg7XCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgICA8aW9uLXRpdGxlPlxuICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogMTAwcHg7IG1hcmdpbjogMCBhdXRvO1wiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICA8L2lvbi10aXRsZT5cbiAgICAgIDxpb24tYnV0dG9ucyBzbG90PVwicHJpbWFyeVwiPlxuICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogODBweDsgaGVpZ2h0OiAyMHB4OyBtYXJnaW46IDAgMTBweDtcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgPC9pb24tYnV0dG9ucz5cbiAgICA8L2lvbi10b29sYmFyPlxuICA8L2lvbi1oZWFkZXI+XG5cbiAgPGlvbi1jb250ZW50PlxuICAgIDwhLS0gTGFyZ2UgVGl0bGUgZm9yIGlPUyAtLT5cbiAgICA8aW9uLWhlYWRlciBjb2xsYXBzZT1cImNvbmRlbnNlXCI+XG4gICAgICA8aW9uLXRvb2xiYXI+XG4gICAgICAgIDxpb24tdGl0bGUgc2l6ZT1cImxhcmdlXCI+XG4gICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDE1MHB4O1wiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgIDwvaW9uLXRpdGxlPlxuICAgICAgPC9pb24tdG9vbGJhcj5cbiAgICA8L2lvbi1oZWFkZXI+XG5cbiAgICA8IS0tIEV2ZW50IERldGFpbHMgTGlzdCAtLT5cbiAgICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIj5cbiAgICAgIDwhLS0gRXZlbnQgTmFtZSAtLT5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJob21lLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsIGNsYXNzPVwiaW9uLXRleHQtd3JhcFwiPlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA3MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDwhLS0gRGF0ZSBhbmQgVGltZSAtLT5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJjYWxlbmRhci1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogODUlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8IS0tIExvY2F0aW9uIC0tPlxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cImxvY2F0aW9uLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsIGNsYXNzPVwiaW9uLXRleHQtd3JhcFwiPlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA1MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA4MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA2MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDwhLS0gRGVzY3JpcHRpb24gLS0+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwiaW5mb3JtYXRpb24tY2lyY2xlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsIGNsYXNzPVwiaW9uLXRleHQtd3JhcFwiPlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA5MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA3NSVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDwhLS0gV2ViIExpbmsgLS0+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwibGluay1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj5cbiAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogNjUlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgIDxpb24tYnV0dG9uIHNsb3Q9XCJlbmRcIiBmaWxsPVwiY2xlYXJcIj5cbiAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJvcGVuLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgIDwvaW9uLWxpc3Q+XG5cbiAgICA8IS0tIEF0dGVuZGFuY2UgU2VjdGlvbiAtLT5cbiAgICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIiBsaW5lcz1cIm5vbmVcIj5cbiAgICAgIDxpb24tbGlzdC1oZWFkZXI+XG4gICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiAxNDBweFwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHNsb3Q9XCJzdGFydFwiIHN0eWxlPVwid2lkdGg6IDQwcHg7IGhlaWdodDogNDBweDsgYm9yZGVyLXJhZGl1czogNTAlO1wiPlxuICAgICAgICA8L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiAxMDBweFwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cbiAgICA8L2lvbi1saXN0PlxuXG4gICAgPCEtLSBBdHRlbmRhbmNlIExpc3RzIC0tPlxuICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiPlxuICAgICAgPGlvbi1hY2NvcmRpb24tZ3JvdXAgW211bHRpcGxlXT1cInRydWVcIiBbdmFsdWVdPVwiWyd5ZXMnXVwiPlxuICAgICAgICA8IS0tIFByZXNlbnQgLS0+XG4gICAgICAgIDxpb24tYWNjb3JkaW9uIHZhbHVlPVwieWVzXCI+XG4gICAgICAgICAgPGlvbi1pdGVtIHNsb3Q9XCJoZWFkZXJcIiBjb2xvcj1cImxpZ2h0XCI+XG4gICAgICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogMTUwcHhcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8aW9uLWxpc3Q+XG4gICAgICAgICAgICAgIDxpb24taXRlbT5cbiAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc2xvdD1cInN0YXJ0XCIgc3R5bGU9XCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4OyBib3JkZXItcmFkaXVzOiA1MCU7XCI+XG4gICAgICAgICAgICAgICAgPC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDYwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICAgIDxpb24taXRlbT5cbiAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc2xvdD1cInN0YXJ0XCIgc3R5bGU9XCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4OyBib3JkZXItcmFkaXVzOiA1MCU7XCI+XG4gICAgICAgICAgICAgICAgPC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDcwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICA8L2lvbi1saXN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2lvbi1hY2NvcmRpb24+XG5cbiAgICAgICAgPCEtLSBBYnNlbnQgLS0+XG4gICAgICAgIDxpb24tYWNjb3JkaW9uIHZhbHVlPVwibm9cIj5cbiAgICAgICAgICA8aW9uLWl0ZW0gc2xvdD1cImhlYWRlclwiIGNvbG9yPVwibGlnaHRcIj5cbiAgICAgICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiAxMzBweFwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICA8L2lvbi1hY2NvcmRpb24+XG5cbiAgICAgICAgPCEtLSBObyBSZXBseSAtLT5cbiAgICAgICAgPGlvbi1hY2NvcmRpb24gdmFsdWU9XCJudWxsXCI+XG4gICAgICAgICAgPGlvbi1pdGVtIHNsb3Q9XCJoZWFkZXJcIiBjb2xvcj1cImxpZ2h0XCI+XG4gICAgICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogMTQwcHhcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgPC9pb24tYWNjb3JkaW9uPlxuICAgICAgPC9pb24tYWNjb3JkaW9uLWdyb3VwPlxuICAgIDwvaW9uLWxpc3Q+XG4gIDwvaW9uLWNvbnRlbnQ+XG48L25nLXRlbXBsYXRlPiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3VCVSxJQUFBLHlCQUFBLEdBQUEscUJBQUEsRUFBQTtBQUEwRSxJQUFBLGlCQUFBLENBQUE7QUFBYSxJQUFBLHVCQUFBOzs7O0FBQWpDLElBQUEsZ0NBQUEsU0FBQSxRQUFBLEVBQUE7QUFBb0IsSUFBQSxvQkFBQTtBQUFBLElBQUEsNEJBQUEsUUFBQSxJQUFBOzs7Ozs7QUFIOUUsSUFBQSx5QkFBQSxHQUFBLFVBQUEsRUFBMkMsR0FBQSxjQUFBLEVBQUE7O0FBQ2lDLElBQUEsMkJBQUEsaUJBQUEsU0FBQSxxRkFBQSxRQUFBO0FBQUEsTUFBQSx3QkFBQSxHQUFBO0FBQUEsWUFBQSxTQUFBLHdCQUFBLENBQUE7QUFBQSxNQUFBLDZCQUFBLE9BQUEsTUFBQSxRQUFBLE1BQUEsTUFBQSxPQUFBLE1BQUEsU0FBQTtBQUFBLGFBQUEsc0JBQUEsTUFBQTtJQUFBLENBQUE7QUFFeEUsSUFBQSxxQkFBQSxHQUFBLHNFQUFBLEdBQUEsR0FBQSxxQkFBQSxFQUFBO0FBQ0YsSUFBQSx1QkFBQSxFQUFhOzs7OztBQUZYLElBQUEsb0JBQUE7QUFBQSxJQUFBLGdDQUFBLFNBQUEsT0FBQSxNQUFBLE1BQUE7QUFEVSxJQUFBLHFCQUFBLFNBQUEsc0JBQUEsR0FBQSxHQUFBLGFBQUEsQ0FBQTtBQUE4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QSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxRQUFBLGNBQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxRQUFBLHFCQUFBLEdBQUEsQ0FBQSxtQkFBQSxXQUFBLEdBQUEsYUFBQSxTQUFBLE9BQUEsR0FBQSxDQUFBLG1CQUFBLFdBQUEsR0FBQSxhQUFBLFlBQUEsU0FBQSxPQUFBLEdBQUEsQ0FBQSxtQkFBQSxXQUFBLFFBQUEsT0FBQSxHQUFBLGFBQUEsU0FBQSxTQUFBLGFBQUEsR0FBQSxDQUFBLE1BQUEsY0FBQSxHQUFBLENBQUEsWUFBQSxFQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsWUFBQSxVQUFBLEdBQUEsQ0FBQSxHQUFBLHFCQUFBLEdBQUEsQ0FBQSxNQUFBLFlBQUEsR0FBQSxDQUFBLFFBQUEsT0FBQSxZQUFBLFFBQUEsR0FBQSxDQUFBLE1BQUEsZUFBQSxHQUFBLENBQUEsWUFBQSxTQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsWUFBQSxXQUFBLEdBQUEsQ0FBQSxNQUFBLGFBQUEsR0FBQSxDQUFBLFFBQUEsT0FBQSxZQUFBLFNBQUEsR0FBQSxDQUFBLFFBQUEsT0FBQSxHQUFBLGFBQUEsU0FBQSxHQUFBLENBQUEsZ0JBQUEsUUFBQSxNQUFBLFlBQUEsZ0JBQUEscUNBQUEsR0FBQSxhQUFBLE9BQUEsR0FBQSxDQUFBLGdCQUFBLFFBQUEsTUFBQSxVQUFBLGdCQUFBLHFDQUFBLEdBQUEsYUFBQSxPQUFBLEdBQUEsQ0FBQSxnQkFBQSxRQUFBLE1BQUEsYUFBQSxHQUFBLGFBQUEsa0JBQUEsT0FBQSxHQUFBLENBQUEsZ0JBQUEsUUFBQSxNQUFBLFdBQUEsR0FBQSxhQUFBLGtCQUFBLE9BQUEsR0FBQSxDQUFBLFNBQUEsUUFBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLEdBQUEsY0FBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFNBQUEsV0FBQSxRQUFBLFNBQUEsR0FBQSxTQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFNBQUEsVUFBQSxRQUFBLFNBQUEsR0FBQSxTQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFNBQUEsV0FBQSxRQUFBLFNBQUEsR0FBQSxTQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFNBQUEsV0FBQSxRQUFBLFNBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxTQUFBLFVBQUEsUUFBQSxTQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxjQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsU0FBQSxXQUFBLFFBQUEsU0FBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsa0JBQUEsR0FBQSxDQUFBLEdBQUEsWUFBQSxPQUFBLEdBQUEsQ0FBQSxTQUFBLEtBQUEsR0FBQSxDQUFBLFFBQUEsVUFBQSxTQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxHQUFBLENBQUEsR0FBQSxTQUFBLFNBQUEsR0FBQSxDQUFBLFNBQUEsSUFBQSxHQUFBLENBQUEsU0FBQSxNQUFBLEdBQUEsQ0FBQSxVQUFBLE1BQUEsR0FBQSxDQUFBLFNBQUEsV0FBQSxRQUFBLFNBQUEsUUFBQSxrQkFBQSxHQUFBLENBQUEsUUFBQSxPQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxLQUFBLEdBQUEsQ0FBQSxTQUFBLFVBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsUUFBQSxjQUFBLEdBQUEsQ0FBQSxTQUFBLFVBQUEsUUFBQSxTQUFBLFFBQUEsY0FBQSxHQUFBLENBQUEsU0FBQSxXQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFFBQUEsa0JBQUEsR0FBQSxDQUFBLFNBQUEsV0FBQSxRQUFBLFNBQUEsUUFBQSxhQUFBLEdBQUEsQ0FBQSxZQUFBLElBQUEsR0FBQSxTQUFBLEtBQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxHQUFBLFNBQUEsS0FBQSxHQUFBLENBQUEsWUFBQSxJQUFBLEdBQUEsU0FBQSxRQUFBLFVBQUEsUUFBQSxVQUFBLFFBQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxHQUFBLFNBQUEsU0FBQSxVQUFBLFFBQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxHQUFBLFNBQUEsT0FBQSxHQUFBLENBQUEsWUFBQSxJQUFBLEdBQUEsU0FBQSxLQUFBLEdBQUEsQ0FBQSxZQUFBLElBQUEsR0FBQSxTQUFBLEtBQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxHQUFBLFNBQUEsS0FBQSxHQUFBLENBQUEsWUFBQSxJQUFBLEdBQUEsU0FBQSxLQUFBLEdBQUEsQ0FBQSxZQUFBLElBQUEsR0FBQSxTQUFBLEtBQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxHQUFBLFNBQUEsS0FBQSxHQUFBLENBQUEsWUFBQSxJQUFBLEdBQUEsU0FBQSxLQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsQ0FBQSxZQUFBLElBQUEsR0FBQSxTQUFBLE9BQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxRQUFBLFNBQUEsR0FBQSxTQUFBLFFBQUEsVUFBQSxRQUFBLGlCQUFBLEtBQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxHQUFBLFNBQUEsT0FBQSxHQUFBLENBQUEsWUFBQSxJQUFBLFFBQUEsU0FBQSxHQUFBLFNBQUEsUUFBQSxVQUFBLFFBQUEsaUJBQUEsS0FBQSxHQUFBLENBQUEsWUFBQSxJQUFBLEdBQUEsU0FBQSxPQUFBLENBQUEsR0FBQSxVQUFBLFNBQUEseUJBQUEsSUFBQSxLQUFBO0FBQUEsTUFBQSxLQUFBLEdBQUE7QUMvQjVCLElBQUEscUJBQUEsR0FBQSx5Q0FBQSxJQUFBLElBQUEsZ0JBQUEsQ0FBQTs7QUE2VEEsSUFBQSxxQkFBQSxHQUFBLHdDQUFBLEdBQUEsR0FBQSxlQUFBLE1BQUEsR0FBQSxnQ0FBQSxFQUE0QixHQUFBLHdDQUFBLElBQUEsR0FBQSxlQUFBLE1BQUEsR0FBQSxnQ0FBQTs7OztBQTdUYixJQUFBLHFCQUFBLFFBQUEsc0JBQUEsR0FBQSxHQUFBLElBQUEsTUFBQSxDQUFBLEVBQXFCLFlBQUEsV0FBQTs7O0FEK0I5QixJQUFPLGtCQUFQOzs2RUFBTyxpQkFBZSxFQUFBLFdBQUEsbUJBQUEsVUFBQSx5REFBQSxZQUFBLEdBQUEsQ0FBQTtBQUFBLEdBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
