import {
  EventService
} from "./chunk-WS5FEPJJ.js";
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
  ChangeDetectorRef,
  IonBadge,
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonModal,
  IonSelect,
  IonSelectOption,
  IonSkeletonText,
  IonTextarea,
  IonTitle,
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
  catchError,
  map,
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
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PZUQX53K.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-LQ2EECYJ.js";

// src/app/pages/helfer/helfer-add/helfer-add.page.ts
function HelferAddPage_div_20_ion_item_1_ion_select_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 28);
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
function HelferAddPage_div_20_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-select", 11);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function HelferAddPage_div_20_ion_item_1_Template_ion_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.event.clubId, $event) || (ctx_r2.event.clubId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(3, HelferAddPage_div_20_ion_item_1_ion_select_option_3_Template, 2, 2, "ion-select-option", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const clubList_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("value", ctx_r2.event.clubId);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 4, "common.club"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.event.clubId);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", clubList_r5);
  }
}
function HelferAddPage_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, HelferAddPage_div_20_ion_item_1_Template, 4, 6, "ion-item", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const clubList_r5 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", clubList_r5.length > 1);
  }
}
function HelferAddPage_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 29);
    \u0275\u0275listener("ionChange", function HelferAddPage_ng_template_57_Template_ion_datetime_ionChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeTimeFrom($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function HelferAddPage_ng_template_57_Template_ion_datetime_ngModelChange_0_listener($event) {
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
function HelferAddPage_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 30);
    \u0275\u0275twoWayListener("ngModelChange", function HelferAddPage_ng_template_64_Template_ion_datetime_ngModelChange_0_listener($event) {
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
function HelferAddPage_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 31);
    \u0275\u0275listener("ionChange", function HelferAddPage_ng_template_71_Template_ion_datetime_ionChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeStartDate($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function HelferAddPage_ng_template_71_Template_ion_datetime_ngModelChange_0_listener($event) {
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
function HelferAddPage_ng_template_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 32);
    \u0275\u0275twoWayListener("ngModelChange", function HelferAddPage_ng_template_78_Template_ion_datetime_ngModelChange_0_listener($event) {
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
function HelferAddPage_ng_container_86_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-icon", 34);
    \u0275\u0275listener("click", function HelferAddPage_ng_container_86_ion_item_1_Template_ion_icon_click_1_listener() {
      const schicht_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteSchicht(schicht_r11));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ion-icon", 35);
    \u0275\u0275listener("click", function HelferAddPage_ng_container_86_ion_item_1_Template_ion_icon_click_2_listener() {
      const schicht_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.copySchicht(schicht_r11));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-label", 4);
    \u0275\u0275listener("click", function HelferAddPage_ng_container_86_ion_item_1_Template_ion_label_click_3_listener() {
      const schicht_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editSchicht(schicht_r11));
    });
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-badge", 36);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const schicht_r11 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(schicht_r11.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", schicht_r11.timeFrom, " ", schicht_r11.timeTo, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(schicht_r11.countNeeded);
  }
}
function HelferAddPage_ng_container_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HelferAddPage_ng_container_86_ion_item_1_Template, 10, 4, "ion-item", 33);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.event.schichten);
  }
}
function HelferAddPage_ng_template_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-label")(2, "h3");
    \u0275\u0275element(3, "ion-skeleton-text", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275element(5, "ion-skeleton-text", 38)(6, "ion-skeleton-text", 39);
    \u0275\u0275elementEnd()()();
  }
}
function HelferAddPage_ng_template_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-skeleton-text", 40)(1, "ion-skeleton-text", 41);
  }
}
var _HelferAddPage = class _HelferAddPage {
  constructor(modalCtrl, eventService, toastController, cdr, authService, fbService, alertController, navParams) {
    this.modalCtrl = modalCtrl;
    this.eventService = eventService;
    this.toastController = toastController;
    this.cdr = cdr;
    this.authService = authService;
    this.fbService = fbService;
    this.alertController = alertController;
    this.navParams = navParams;
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
      schichten: [],
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
      console.log(this.event);
    }
    if (!this.event.schichten) {
      this.event.schichten = [];
    }
    this.clubAdminList$ = this.fbService.getClubAdminList().pipe(map((data) => {
      if (data && data.length > 0) {
        this.event.clubId = data[0].id;
        this.event.clubName = data[0].name;
        return data;
      } else {
        console.log("No club admins found.");
        return [];
      }
    }), catchError((err) => {
      console.error("Club Admin Error in data fetching:", err);
      return [];
    }));
  }
  ngOnDestroy() {
  }
  close() {
    return __async(this, null, function* () {
      return this.modalCtrl.dismiss(null, "close");
    });
  }
  deleteSchicht(schicht) {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
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
              console.log("L\xF6schen best\xE4tigt");
              const index = this.event.schichten.findIndex((object) => {
                return object.id === schicht.id;
              });
              if (index !== -1) {
                this.event.schichten.splice(index, 1);
              }
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
      const alert = yield this.alertController.create({
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
            handler: (data) => {
              console.log(data);
              this.event.schichten.push(__spreadProps(__spreadValues({
                id: this.event.schichten.length + 1
              }, data), {
                count: 0
              }));
            }
          }
        ]
      });
      alert.present();
    });
  }
  editSchicht(schicht) {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
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
            handler: (data) => {
              console.log(data);
              const index = this.event.schichten.findIndex((object) => {
                return object.id === schicht.id;
              });
              if (index !== -1) {
                this.event.schichten[index] = __spreadProps(__spreadValues({
                  id: schicht.id
                }, data), {
                  count: 0
                });
              }
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  addSchicht() {
    return __async(this, null, function* () {
      console.log(this.event.timeTo);
      const alert = yield this.alertController.create({
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
            handler: (data) => {
              console.log(data);
              this.event.schichten.push(__spreadProps(__spreadValues({
                id: this.event.schichten.length + 1
              }, data), {
                count: 0
              }));
            }
          }
        ]
      });
      yield alert.present();
    });
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
      const helferEvent = yield this.eventService.setCreateHelferEvent(this.event).catch((e) => {
        console.log(e.message);
        this.toastActionError(e);
      });
      if (helferEvent) {
        console.log(helferEvent.id);
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
_HelferAddPage.\u0275fac = function HelferAddPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HelferAddPage)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(NavParams));
};
_HelferAddPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HelferAddPage, selectors: [["app-helfer-add"]], inputs: { eventCopy: [0, "data", "eventCopy"] }, standalone: false, decls: 91, vars: 88, consts: [["schichtenTemplate", ""], ["loading", ""], [3, "translucent"], ["slot", "secondary"], [3, "click"], ["slot", "primary"], ["strong", "true", 3, "click"], ["collapse", "condense"], ["size", "large"], [3, "inset"], [4, "ngIf"], ["label-placement", "stacked", 3, "ngModelChange", "label", "ngModel", "value"], ["label-placement", "stacked", 3, "ngModelChange", "label", "value", "ngModel"], ["label-placement", "stacked", "type", "url", 3, "ngModelChange", "label", "value", "ngModel", "placeholder"], ["id", "timeFromItem"], ["position", ""], ["slot", "end", "datetime", "timeFrom"], [3, "keepContentsMounted"], ["id", "timeToItem"], ["slot", "end", "datetime", "timeTo"], ["id", "startDateItem"], ["position", "default"], ["slot", "end", "datetime", "startDate"], ["id", "endDateItem"], ["slot", "end", "datetime", "endDate"], ["lines", "full", 3, "inset"], [4, "ngIf", "ngIfElse"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["presentation", "time", "id", "timeFrom", "minuteValues", "0,5,10,15,20,25,30,35,40,45,50,55", 3, "ionChange", "ngModelChange", "value", "ngModel"], ["presentation", "time", "id", "timeTo", "minuteValues", "0,5,10,15,20,25,30,35,40,45,50,55", 3, "ngModelChange", "value", "ngModel"], ["presentation", "date", "id", "startDate", 3, "ionChange", "ngModelChange", "firstDayOfWeek", "value", "ngModel"], ["presentation", "date", "id", "endDate", 3, "ngModelChange", "firstDayOfWeek", "value", "ngModel"], [4, "ngFor", "ngForOf"], ["color", "danger", "slot", "start", "name", "trash", "size", "medium", 3, "click"], ["color", "primary", "slot", "start", "name", "copy", "size", "medium", 3, "click"], ["slot", "end"], [2, "width", "60%"], [2, "width", "30%"], [2, "width", "40%"], ["animated", "", 2, "width", "10%"], ["animated", "", 2, "width", "60%"]], template: function HelferAddPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 2)(1, "ion-toolbar")(2, "ion-buttons", 3)(3, "ion-button", 4);
    \u0275\u0275listener("click", function HelferAddPage_Template_ion_button_click_3_listener() {
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
    \u0275\u0275elementStart(9, "ion-buttons", 5)(10, "ion-button", 6);
    \u0275\u0275listener("click", function HelferAddPage_Template_ion_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.createEvent());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "ion-content")(14, "ion-header", 7)(15, "ion-toolbar")(16, "ion-title", 8);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "ion-list", 9);
    \u0275\u0275template(20, HelferAddPage_div_20_Template, 2, 1, "div", 10);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementStart(22, "ion-item")(23, "ion-input", 11);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function HelferAddPage_Template_ion_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.event.name, $event) || (ctx.event.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "ion-item")(26, "ion-textarea", 12);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function HelferAddPage_Template_ion_textarea_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.event.description, $event) || (ctx.event.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "ion-list", 9)(29, "ion-item")(30, "ion-input", 12);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function HelferAddPage_Template_ion_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.event.location, $event) || (ctx.event.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "ion-item")(33, "ion-input", 12);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function HelferAddPage_Template_ion_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.event.streetAndNumber, $event) || (ctx.event.streetAndNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "ion-item")(36, "ion-input", 12);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function HelferAddPage_Template_ion_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.event.postalCode, $event) || (ctx.event.postalCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "ion-item")(39, "ion-input", 12);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function HelferAddPage_Template_ion_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.event.city, $event) || (ctx.event.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "ion-list", 9)(42, "ion-item")(43, "ion-input", 13);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function HelferAddPage_Template_ion_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.event.link_web, $event) || (ctx.event.link_web = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "ion-item")(47, "ion-input", 13);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function HelferAddPage_Template_ion_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.event.link_poll, $event) || (ctx.event.link_poll = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "ion-list", 9)(51, "ion-item", 14)(52, "ion-label", 15);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "ion-datetime-button", 16);
    \u0275\u0275elementStart(56, "ion-modal", 17);
    \u0275\u0275template(57, HelferAddPage_ng_template_57_Template, 1, 2, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "ion-item", 18)(59, "ion-label", 15);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "ion-datetime-button", 19);
    \u0275\u0275elementStart(63, "ion-modal", 17);
    \u0275\u0275template(64, HelferAddPage_ng_template_64_Template, 1, 2, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "ion-item", 20)(66, "ion-label", 21);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "ion-datetime-button", 22);
    \u0275\u0275elementStart(70, "ion-modal", 17);
    \u0275\u0275template(71, HelferAddPage_ng_template_71_Template, 1, 3, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "ion-item", 23)(73, "ion-label", 21);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(76, "ion-datetime-button", 24);
    \u0275\u0275elementStart(77, "ion-modal", 17);
    \u0275\u0275template(78, HelferAddPage_ng_template_78_Template, 1, 3, "ng-template");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "ion-list", 25)(80, "ion-list-header")(81, "ion-label");
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "ion-button", 4);
    \u0275\u0275listener("click", function HelferAddPage_Template_ion_button_click_84_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addSchicht());
    });
    \u0275\u0275text(85, "hinzuf\xFCgen");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(86, HelferAddPage_ng_container_86_Template, 2, 1, "ng-container", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(87, HelferAddPage_ng_template_87_Template, 7, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(89, HelferAddPage_ng_template_89_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const schichtenTemplate_r12 = \u0275\u0275reference(88);
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 48, "common.close"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 50, "helfer-add.new__helper_event"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 52, "common.create"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 54, "helfer-add.new__helper_event"));
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(21, 56, ctx.clubAdminList$));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("value", ctx.event.name);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(24, 58, "common.name"));
    \u0275\u0275twoWayProperty("ngModel", ctx.event.name);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("value", ctx.event.description);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(27, 60, "common.description"));
    \u0275\u0275twoWayProperty("ngModel", ctx.event.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("value", ctx.event.location);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(31, 62, "common.location"));
    \u0275\u0275twoWayProperty("ngModel", ctx.event.location);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("value", ctx.event.streetAndNumber);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(34, 64, "common.street__house_number"));
    \u0275\u0275twoWayProperty("ngModel", ctx.event.streetAndNumber);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("value", ctx.event.postalCode);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(37, 66, "common.postal__code"));
    \u0275\u0275twoWayProperty("ngModel", ctx.event.postalCode);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("value", ctx.event.city);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(40, 68, "common.locality"));
    \u0275\u0275twoWayProperty("ngModel", ctx.event.city);
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("value", ctx.event.link_web);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(44, 70, "common.link__web"));
    \u0275\u0275twoWayProperty("ngModel", ctx.event.link_web);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(45, 72, "common.link__placeholder"));
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("value", ctx.event.link_poll);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(48, 74, "common.link__poll"));
    \u0275\u0275twoWayProperty("ngModel", ctx.event.link_poll);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(49, 76, "common.link__placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(54, 78, "common.start__event"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(61, 80, "common.end__event"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(68, 82, "common.start__date"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(75, 84, "common.end__date"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(83, 86, "helfer.schichten"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.event.schichten.length > 0)("ngIfElse", schichtenTemplate_r12);
  }
}, dependencies: [NgForOf, NgIf, IonBadge, IonButton, IonButtons, IonContent, IonDatetime, IonDatetimeButton, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonSelect, IonSelectOption, IonSkeletonText, IonTextarea, IonTitle, IonToolbar, IonModal, SelectValueAccessorDirective, TextValueAccessorDirective, NgControlStatus, NgModel, AsyncPipe, TranslatePipe], encapsulation: 2 });
var HelferAddPage = _HelferAddPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HelferAddPage, { className: "HelferAddPage", filePath: "src/app/pages/helfer/helfer-add/helfer-add.page.ts", lineNumber: 18 });
})();

export {
  HelferAddPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9oZWxmZXIvaGVsZmVyLWFkZC9oZWxmZXItYWRkLnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9oZWxmZXIvaGVsZmVyLWFkZC9oZWxmZXItYWRkLnBhZ2UuaHRtbCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBbGVydENvbnRyb2xsZXIsIE1vZGFsQ29udHJvbGxlciwgTmF2UGFyYW1zLCBUb2FzdENvbnRyb2xsZXIgfSBmcm9tIFwiQGlvbmljL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBjYXRjaEVycm9yLCBtYXAgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQ2x1YiB9IGZyb20gXCJzcmMvYXBwL21vZGVscy9jbHViXCI7XG5pbXBvcnQgeyBIZWxmZXJFdmVudCwgU2NoaWNodCB9IGZyb20gXCJzcmMvYXBwL21vZGVscy9ldmVudFwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlL2V2ZW50LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLWhlbGZlci1hZGRcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hlbGZlci1hZGQucGFnZS5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hlbGZlci1hZGQucGFnZS5zY3NzXCJdLFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIEhlbGZlckFkZFBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoXCJkYXRhXCIpIGV2ZW50Q29weTogSGVsZmVyRXZlbnQ7XG4gIGV2ZW50OiBIZWxmZXJFdmVudDtcbiAgdXNlcjogVXNlcjtcblxuICBjbHViQWRtaW5MaXN0JDogT2JzZXJ2YWJsZTxDbHViW10+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZSxcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgdG9hc3RDb250cm9sbGVyOiBUb2FzdENvbnRyb2xsZXIsXG5cbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByZWFkb25seSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmYlNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICBwcml2YXRlIGFsZXJ0Q29udHJvbGxlcjogQWxlcnRDb250cm9sbGVyLFxuICAgIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtc1xuICApIHtcbiAgICB0aGlzLmV2ZW50ID0ge1xuICAgICAgaWQ6IFwiXCIsXG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG5cbiAgICAgIGxvY2F0aW9uOiBcIlwiLFxuICAgICAgc3RyZWV0QW5kTnVtYmVyOiBcIlwiLFxuICAgICAgcG9zdGFsQ29kZTogXCJcIixcbiAgICAgIGNpdHk6IFwiXCIsXG5cbiAgICAgIGRhdGU6IFRpbWVzdGFtcC5mcm9tRGF0ZShuZXcgRGF0ZSgpKSxcblxuICAgICAgdGltZUZyb206IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIHRpbWVUbzogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuXG4gICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcblxuICAgICAgLyp0ZWFtSWQ6IFwiXCIsXG4gICAgICB0ZWFtTmFtZTogXCJcIixcbiAgICAgIGxpZ2E6IFwiXCIsKi9cbiAgICAgIGxpbmtfcG9sbDogXCJcIiwgXG4gICAgICBsaW5rX3dlYjogXCJcIixcbiAgICAgIFxuICAgICAgY2x1YklkOiBcIlwiLFxuICAgICAgY2x1Yk5hbWU6IFwiXCIsXG5cblxuICAgICAgc2NoaWNodGVuOiA8YW55PltdLFxuXG4gICAgICBzdGF0dXM6IHRydWUsXG4gICAgICBhdHRlbmRlZXM6IFtdLFxuICAgICAgY291bnRBdHRlbmRlZXM6IDAsXG4gICAgICBjb3VudE5lZWRlZDogMCxcbiAgICAgIGNsb3NlZEV2ZW50OiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmV2ZW50Q29weSA9IHRoaXMubmF2UGFyYW1zLmdldChcImRhdGFcIik7XG4gICAgaWYgKHRoaXMuZXZlbnRDb3B5LmlkKSB7XG4gICAgICB0aGlzLmV2ZW50ID0gdGhpcy5ldmVudENvcHk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmV2ZW50KTtcblxuXG4gICAgICAvLyBUT0RPIFJFQUQgU0NISUNIVEVOLCBpZiBhdmFpbGFibGVcblxuICAgIH1cblxuICAgIGlmICghdGhpcy5ldmVudC5zY2hpY2h0ZW4pIHtcbiAgICAgIHRoaXMuZXZlbnQuc2NoaWNodGVuID0gPGFueT5bXTtcbiAgICB9XG5cbiAgICB0aGlzLmNsdWJBZG1pbkxpc3QkID0gdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1YkFkbWluTGlzdCgpLnBpcGUoXG4gICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuZXZlbnQuY2x1YklkID0gZGF0YVswXS5pZDtcbiAgICAgICAgICB0aGlzLmV2ZW50LmNsdWJOYW1lID0gZGF0YVswXS5uYW1lO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gY2x1YiBhZG1pbnMgZm91bmQuXCIpO1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDbHViIEFkbWluIEVycm9yIGluIGRhdGEgZmV0Y2hpbmc6XCIsIGVycik7XG4gICAgICAgIHJldHVybiBbXTsgLy8gUmV0dXJuIGFuIGVtcHR5IGFycmF5IHRvIGhhbmRsZSB0aGUgZXJyb3IgZ3JhY2VmdWxseVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cbiAgfVxuXG4gIGFzeW5jIGNsb3NlKCkge1xuICAgIHJldHVybiB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKG51bGwsIFwiY2xvc2VcIik7XG4gIH1cblxuICBhc3luYyBkZWxldGVTY2hpY2h0KHNjaGljaHQ6IFNjaGljaHQpIHtcbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBoZWFkZXI6IFwiU2NoaWNodCBsw7ZzY2hlblwiLFxuICAgICAgbWVzc2FnZTogXCJNw7ZjaHRlbiBTaWUgZGllc2UgU2NoaWNodCB3aXJrbGljaCBsw7ZzY2hlbj9cIixcbiAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiQWJicmVjaGVuXCIsXG4gICAgICAgICAgcm9sZTogXCJjYW5jZWxcIixcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkzDtnNjaGVuIGFiZ2Vicm9jaGVuXCIpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkzDtnNjaGVuXCIsXG4gICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMw7ZzY2hlbiBiZXN0w6R0aWd0XCIpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmV2ZW50LnNjaGljaHRlbi5maW5kSW5kZXgoKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0LmlkID09PSBzY2hpY2h0LmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgIHRoaXMuZXZlbnQuc2NoaWNodGVuLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XG4gICBcbiAgfVxuXG4gIGFzeW5jIGNvcHlTY2hpY2h0KHNjaGljaHQ6IFNjaGljaHQpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmV2ZW50LnRpbWVUbyk7XG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiBcIlNjaGljaHQgZXJzdGVsbGVuXCIsXG4gICAgICBzdWJIZWFkZXI6IFwiIFwiLFxuICAgICAgbWVzc2FnZTogXCJFaW5lIG5ldWUgSGVsZmVyc2NoaWNodCBlcnN0ZWxsZW4uXCIsXG4gICAgICBpbnB1dHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcIm5hbWVcIixcbiAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgICB2YWx1ZTogc2NoaWNodC5uYW1lLFxuICAgICAgICAgIGxhYmVsOiBcIkJlc2NocmVpYnVuZ1wiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkJlc2NocmVpYnVuZ1wiLFxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwiY291bnRcIixcbiAgICAgICAgICBuYW1lOiBcImNvdW50TmVlZGVkXCIsXG4gICAgICAgICAgdmFsdWU6IHNjaGljaHQuY291bnROZWVkZWQsXG4gICAgICAgICAgbGFiZWw6IFwiQW56YWhsIEhlbGZlclwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkFuemFobCBIZWxmZXJcIixcbiAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwicG9pbnRzXCIsXG4gICAgICAgICAgbmFtZTogXCJwb2ludHNcIixcbiAgICAgICAgICB2YWx1ZTogc2NoaWNodC5wb2ludHMsXG4gICAgICAgICAgbGFiZWw6IFwiQW56YWhsIEhlbGZlcnB1bmt0ZVwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkFuemFobCBIZWxmZXJwdW5rdGVcIixcbiAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgIFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwidGltZUZyb21cIixcbiAgICAgICAgICBuYW1lOiBcInRpbWVGcm9tXCIsXG4gICAgICAgICAgdmFsdWU6IHNjaGljaHQudGltZUZyb20sXG4gICAgICAgICAgbGFiZWw6IFwiWmVpdCB2b25cIixcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJaZWl0IHZvblwiLFxuICAgICAgICAgIHR5cGU6IFwidGltZVwiLFxuXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCJ0aW1lVG9cIixcbiAgICAgICAgICBuYW1lOiBcInRpbWVUb1wiLFxuICAgICAgICAgIHZhbHVlOiBzY2hpY2h0LnRpbWVUbyxcbiAgICAgICAgICBsYWJlbDogXCJaZWl0IGJpc1wiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlplaXQgYmlzXCIsXG4gICAgICAgICAgdHlwZTogXCJ0aW1lXCIsXG5cbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBidXR0b25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkFiYnJlY2hlblwiLFxuICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWJicmVjaGVuXCIpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkhpbnp1ZsO8Z2VuXCIsXG4gICAgICAgICAgaGFuZGxlcjogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5ldmVudC5zY2hpY2h0ZW4ucHVzaCh7XG4gICAgICAgICAgICAgIGlkOiB0aGlzLmV2ZW50LnNjaGljaHRlbi5sZW5ndGggKyAxLFxuICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuICAgIGFsZXJ0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIGVkaXRTY2hpY2h0KHNjaGljaHQ6IFNjaGljaHQpIHtcbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBoZWFkZXI6IFwiU2NoaWNodCBiZWFyYmVpdGVuXCIsXG4gICAgICBzdWJIZWFkZXI6IFwiIFwiLFxuICAgICAgbWVzc2FnZTogXCJFaW5lIEhlbGZlcnNjaGljaHQgYmVhcmJlaXRlbi5cIixcbiAgICAgIGlucHV0czogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwibmFtZVwiLFxuICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICAgIGxhYmVsOiBcIkJlc2NocmVpYnVuZ1wiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkJlc2NocmVpYnVuZ1wiLFxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIHZhbHVlOiBzY2hpY2h0Lm5hbWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCJjb3VudFwiLFxuICAgICAgICAgIG5hbWU6IFwiY291bnROZWVkZWRcIixcbiAgICAgICAgICBsYWJlbDogXCJBbnphaGwgSGVsZmVyXCIsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQW56YWhsIEhlbGZlclwiLFxuICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgdmFsdWU6IHNjaGljaHQuY291bnROZWVkZWQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCJwb2ludHNcIixcbiAgICAgICAgICBuYW1lOiBcInBvaW50c1wiLFxuICAgICAgICAgIGxhYmVsOiBcIkFuemFobCBIZWxmZXJwdW5rdGVcIixcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCIxXCIsXG4gICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICB2YWx1ZTogc2NoaWNodC5wb2ludHMsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCJ0aW1lRnJvbVwiLFxuICAgICAgICAgIG5hbWU6IFwidGltZUZyb21cIixcbiAgICAgICAgICBsYWJlbDogXCJaZWl0IHZvblwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlplaXQgdm9uXCIsXG4gICAgICAgICAgdHlwZTogXCJ0aW1lXCIsXG4gICAgICAgICAgdmFsdWU6IHNjaGljaHQudGltZUZyb20sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCJ0aW1lVG9cIixcbiAgICAgICAgICBuYW1lOiBcInRpbWVUb1wiLFxuICAgICAgICAgIGxhYmVsOiBcIlplaXQgYmlzXCIsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiWmVpdCBiaXNcIixcbiAgICAgICAgICB0eXBlOiBcInRpbWVcIixcbiAgICAgICAgICB2YWx1ZTogc2NoaWNodC50aW1lVG8sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJBYmJyZWNoZW5cIixcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFiYnJlY2hlblwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJTcGVpY2hlcm5cIixcbiAgICAgICAgICBoYW5kbGVyOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldmVudC5zY2hpY2h0ZW4uZmluZEluZGV4KChvYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5pZCA9PT0gc2NoaWNodC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICB0aGlzLmV2ZW50LnNjaGljaHRlbltpbmRleF0gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IHNjaGljaHQuaWQsXG4gICAgICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIGFkZFNjaGljaHQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5ldmVudC50aW1lVG8pO1xuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIGhlYWRlcjogXCJTY2hpY2h0IGVyc3RlbGxlblwiLFxuICAgICAgc3ViSGVhZGVyOiBcIiBcIixcbiAgICAgIG1lc3NhZ2U6IFwiRWluZSBuZXVlIEhlbGZlcnNjaGljaHQgZXJzdGVsbGVuLlwiLFxuICAgICAgaW5wdXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCJuYW1lXCIsXG4gICAgICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICAgICAgbGFiZWw6IFwiQmVzY2hyZWlidW5nXCIsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQmVzY2hyZWlidW5nXCIsXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCJjb3VudFwiLFxuICAgICAgICAgIG5hbWU6IFwiY291bnROZWVkZWRcIixcbiAgICAgICAgICBsYWJlbDogXCJBbnphaGwgSGVsZmVyXCIsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQW56YWhsIEhlbGZlclwiLFxuICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCJwb2ludHNcIixcbiAgICAgICAgICBuYW1lOiBcInBvaW50c1wiLFxuICAgICAgICAgIGxhYmVsOiBcIkFuemFobCBIZWxmZXJwdW5rdGVcIixcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJBbnphaGwgSGVsZmVycHVua3RlXCIsXG4gICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcInRpbWVGcm9tXCIsXG4gICAgICAgICAgbmFtZTogXCJ0aW1lRnJvbVwiLFxuICAgICAgICAgIGxhYmVsOiBcIlplaXQgdm9uXCIsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiWmVpdCB2b25cIixcbiAgICAgICAgICB0eXBlOiBcInRpbWVcIixcbiAgICAgICAgICB2YWx1ZTogdGhpcy5ldmVudC50aW1lRnJvbS5zbGljZSgxMSwgMTYpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwidGltZVRvXCIsXG4gICAgICAgICAgbmFtZTogXCJ0aW1lVG9cIixcbiAgICAgICAgICBsYWJlbDogXCJaZWl0IGJpc1wiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlplaXQgYmlzXCIsXG4gICAgICAgICAgdHlwZTogXCJ0aW1lXCIsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuZXZlbnQudGltZVRvLnNsaWNlKDExLCAxNiksXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJBYmJyZWNoZW5cIixcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFiYnJlY2hlblwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJIaW56dWbDvGdlblwiLFxuICAgICAgICAgIGhhbmRsZXI6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnQuc2NoaWNodGVuLnB1c2goe1xuICAgICAgICAgICAgICBpZDogdGhpcy5ldmVudC5zY2hpY2h0ZW4ubGVuZ3RoICsgMSxcbiAgICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgICAgY291bnQ6IDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZUV2ZW50KCkge1xuICAgIC8vU2V0IEhvdXJzL01pbnV0ZXMgb2YgZW5kRGF0ZSB0byBUaW1lRnJvbSBvZiB0cmFpbmluZ1xuICAgIGNvbnNvbGUubG9nKGBTdGFydCBEYXRlIGJlZm9yZSBjYWxjdWxhdGlvbjogJHt0aGlzLmV2ZW50LnN0YXJ0RGF0ZX1gKTtcbiAgICBjb25zdCBjYWxjdWxhdGVkU3RhcnREYXRlID0gbmV3IERhdGUodGhpcy5ldmVudC5zdGFydERhdGUpO1xuICAgIGNhbGN1bGF0ZWRTdGFydERhdGUuc2V0SG91cnMobmV3IERhdGUodGhpcy5ldmVudC50aW1lRnJvbSkuZ2V0SG91cnMoKSk7XG4gICAgY2FsY3VsYXRlZFN0YXJ0RGF0ZS5zZXRNaW51dGVzKG5ldyBEYXRlKHRoaXMuZXZlbnQudGltZUZyb20pLmdldE1pbnV0ZXMoKSk7XG4gICAgY2FsY3VsYXRlZFN0YXJ0RGF0ZS5zZXRTZWNvbmRzKDApO1xuICAgIGNhbGN1bGF0ZWRTdGFydERhdGUuc2V0TWlsbGlzZWNvbmRzKDApO1xuICAgIHRoaXMuZXZlbnQuc3RhcnREYXRlID0gY2FsY3VsYXRlZFN0YXJ0RGF0ZS50b0lTT1N0cmluZygpO1xuICAgIGNvbnNvbGUubG9nKGBTdGFydCBEYXRlIGFmdGVyIGNhbGN1bGF0aW9uOiAke3RoaXMuZXZlbnQuc3RhcnREYXRlfWApO1xuXG4gICAgY29uc29sZS5sb2coYEVuZCBEYXRlIGJlZm9yZSBjYWxjdWxhdGlvbjogJHt0aGlzLmV2ZW50LmVuZERhdGV9YCk7XG4gICAgY29uc3QgY2FsY3VhbHRlZEVuZERhdGUgPSBuZXcgRGF0ZSh0aGlzLmV2ZW50LmVuZERhdGUpO1xuICAgIGNhbGN1YWx0ZWRFbmREYXRlLnNldEhvdXJzKG5ldyBEYXRlKHRoaXMuZXZlbnQudGltZUZyb20pLmdldEhvdXJzKCkpO1xuICAgIGNhbGN1YWx0ZWRFbmREYXRlLnNldE1pbnV0ZXMobmV3IERhdGUodGhpcy5ldmVudC50aW1lRnJvbSkuZ2V0TWludXRlcygpKTtcbiAgICBjYWxjdWFsdGVkRW5kRGF0ZS5zZXRTZWNvbmRzKDApO1xuICAgIGNhbGN1YWx0ZWRFbmREYXRlLnNldE1pbGxpc2Vjb25kcygwKTtcbiAgICB0aGlzLmV2ZW50LmVuZERhdGUgPSBjYWxjdWFsdGVkRW5kRGF0ZS50b0lTT1N0cmluZygpO1xuICAgIGNvbnNvbGUubG9nKGBFbmQgRGF0ZSBhZnRlciBjYWxjdWxhdGlvbjogJHt0aGlzLmV2ZW50LmVuZERhdGV9YCk7XG5cbiAgICBjb25zdCBjYWxjdWxhdGVkVGltZUZyb20gPSBuZXcgRGF0ZSh0aGlzLmV2ZW50LnRpbWVGcm9tKTtcbiAgICBjYWxjdWxhdGVkVGltZUZyb20uc2V0RGF0ZShuZXcgRGF0ZSh0aGlzLmV2ZW50LnN0YXJ0RGF0ZSkuZ2V0RGF0ZSgpKTtcbiAgICBjYWxjdWxhdGVkVGltZUZyb20uc2V0TW9udGgobmV3IERhdGUodGhpcy5ldmVudC5zdGFydERhdGUpLmdldE1vbnRoKCkpO1xuICAgIGNhbGN1bGF0ZWRUaW1lRnJvbS5zZXRGdWxsWWVhcihcbiAgICAgIG5ldyBEYXRlKHRoaXMuZXZlbnQuc3RhcnREYXRlKS5nZXRGdWxsWWVhcigpXG4gICAgKTtcbiAgICBjYWxjdWxhdGVkVGltZUZyb20uc2V0U2Vjb25kcygwKTtcbiAgICBjYWxjdWxhdGVkVGltZUZyb20uc2V0TWlsbGlzZWNvbmRzKDApO1xuICAgIHRoaXMuZXZlbnQudGltZUZyb20gPSBjYWxjdWxhdGVkVGltZUZyb20udG9JU09TdHJpbmcoKTtcblxuICAgIGNvbnN0IGNhbGN1bGF0ZWRUaW1lVG8gPSBuZXcgRGF0ZSh0aGlzLmV2ZW50LnRpbWVUbyk7XG4gICAgY2FsY3VsYXRlZFRpbWVUby5zZXREYXRlKG5ldyBEYXRlKHRoaXMuZXZlbnQuc3RhcnREYXRlKS5nZXREYXRlKCkpO1xuICAgIGNhbGN1bGF0ZWRUaW1lVG8uc2V0TW9udGgobmV3IERhdGUodGhpcy5ldmVudC5zdGFydERhdGUpLmdldE1vbnRoKCkpO1xuICAgIGNhbGN1bGF0ZWRUaW1lVG8uc2V0RnVsbFllYXIobmV3IERhdGUodGhpcy5ldmVudC5zdGFydERhdGUpLmdldEZ1bGxZZWFyKCkpO1xuICAgIGNhbGN1bGF0ZWRUaW1lVG8uc2V0U2Vjb25kcygwKTtcbiAgICBjYWxjdWxhdGVkVGltZVRvLnNldE1pbGxpc2Vjb25kcygwKTtcbiAgICB0aGlzLmV2ZW50LnRpbWVUbyA9IGNhbGN1bGF0ZWRUaW1lVG8udG9JU09TdHJpbmcoKTtcblxuICAgIHRoaXMuZXZlbnQuZGF0ZSA9IFRpbWVzdGFtcC5mcm9tRGF0ZShuZXcgRGF0ZSh0aGlzLmV2ZW50LnN0YXJ0RGF0ZSkpO1xuXG4gICAgZGVsZXRlIHRoaXMuZXZlbnQuYXR0ZW5kZWVzO1xuXG4gICAgY29uc3QgaGVsZmVyRXZlbnQgPSBhd2FpdCB0aGlzLmV2ZW50U2VydmljZS5zZXRDcmVhdGVIZWxmZXJFdmVudCh0aGlzLmV2ZW50KS5jYXRjaChlID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgICB0aGlzLnRvYXN0QWN0aW9uRXJyb3IoZSk7XG4gICAgfSlcbiAgICBpZiAoaGVsZmVyRXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKGhlbGZlckV2ZW50LmlkKTtcbiAgICAgIHJldHVybiB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKHt9LCBcImNvbmZpcm1cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgYXN5bmMgdG9hc3RBY3Rpb25FcnJvcihlcnJvcikge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gIH1cbiAgY2hhbmdlVGltZUZyb20oZXYpIHtcbiAgICBjb25zb2xlLmxvZyhldi5kZXRhaWwudmFsdWUpO1xuICAgIGlmICh0aGlzLmV2ZW50LnRpbWVGcm9tID4gdGhpcy5ldmVudC50aW1lVG8pIHtcbiAgICAgIHRoaXMuZXZlbnQudGltZVRvID0gdGhpcy5ldmVudC50aW1lRnJvbTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGFydERhdGUoZXYpIHtcbiAgICBjb25zb2xlLmxvZyhldi5kZXRhaWwudmFsdWUpO1xuICAgIGlmICh0aGlzLmV2ZW50LnN0YXJ0RGF0ZSA+IHRoaXMuZXZlbnQuZW5kRGF0ZSkge1xuICAgICAgdGhpcy5ldmVudC5lbmREYXRlID0gdGhpcy5ldmVudC5zdGFydERhdGU7XG4gICAgfVxuICB9XG59XG4iLCAiPGlvbi1oZWFkZXIgW3RyYW5zbHVjZW50XT1cInRydWVcIj5cbiAgPGlvbi10b29sYmFyPlxuICAgIDxpb24tYnV0dG9ucyBzbG90PVwic2Vjb25kYXJ5XCI+XG4gICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwiY2xvc2UoKVwiPnt7XCJjb21tb24uY2xvc2VcIiB8IHRyYW5zbGF0ZX19PC9pb24tYnV0dG9uPlxuICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgPGlvbi10aXRsZT57e1wiaGVsZmVyLWFkZC5uZXdfX2hlbHBlcl9ldmVudFwiIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInByaW1hcnlcIj5cbiAgICAgIDxpb24tYnV0dG9uIHN0cm9uZz1cInRydWVcIiAoY2xpY2spPVwiY3JlYXRlRXZlbnQoKVwiPnt7XCJjb21tb24uY3JlYXRlXCIgfCB0cmFuc2xhdGV9fTwvaW9uLWJ1dHRvbj5cbiAgICA8L2lvbi1idXR0b25zPlxuICA8L2lvbi10b29sYmFyPlxuPC9pb24taGVhZGVyPlxuPGlvbi1jb250ZW50PlxuXG4gIDxpb24taGVhZGVyIGNvbGxhcHNlPVwiY29uZGVuc2VcIj5cbiAgICA8aW9uLXRvb2xiYXI+XG4gICAgICA8aW9uLXRpdGxlIHNpemU9XCJsYXJnZVwiPnt7XCJoZWxmZXItYWRkLm5ld19faGVscGVyX2V2ZW50XCIgfCB0cmFuc2xhdGV9fTwvaW9uLXRpdGxlPlxuICAgIDwvaW9uLXRvb2xiYXI+XG4gIDwvaW9uLWhlYWRlcj5cblxuICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIj5cbiAgICA8ZGl2ICpuZ0lmPVwiY2x1YkFkbWluTGlzdCQgfCBhc3luYyBhcyBjbHViTGlzdFwiPlxuICAgICAgPGlvbi1pdGVtICpuZ0lmPVwiY2x1Ykxpc3QubGVuZ3RoID4gMVwiPlxuICAgICAgICA8aW9uLXNlbGVjdCBbbGFiZWxdPSdcImNvbW1vbi5jbHViXCIgfCB0cmFuc2xhdGUnIGxhYmVsLXBsYWNlbWVudD1cInN0YWNrZWRcIiBbKG5nTW9kZWwpXT1cImV2ZW50LmNsdWJJZFwiXG4gICAgICAgICAgdmFsdWU9XCJ7e2V2ZW50LmNsdWJJZH19XCI+XG4gICAgICAgICAgPGlvbi1zZWxlY3Qtb3B0aW9uICpuZ0Zvcj1cImxldCBjbHViIG9mIGNsdWJMaXN0XCIgdmFsdWU9XCJ7e2NsdWIuaWR9fVwiPnt7Y2x1Yi5uYW1lfX08L2lvbi1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICA8L2lvbi1zZWxlY3Q+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgIDwvZGl2PlxuXG4gICAgPGlvbi1pdGVtPlxuICAgICAgPGlvbi1pbnB1dCBbbGFiZWxdPVwiJ2NvbW1vbi5uYW1lJyB8IHRyYW5zbGF0ZVwiIGxhYmVsLXBsYWNlbWVudD1cInN0YWNrZWRcIiBbKG5nTW9kZWwpXT1cImV2ZW50Lm5hbWVcIlxuICAgICAgICB2YWx1ZT1cInt7ZXZlbnQubmFtZX19XCI+XG4gICAgICA8L2lvbi1pbnB1dD5cbiAgICA8L2lvbi1pdGVtPlxuICAgIDxpb24taXRlbT5cbiAgICAgIDxpb24tdGV4dGFyZWEgW2xhYmVsXT0nXCJjb21tb24uZGVzY3JpcHRpb25cIiB8IHRyYW5zbGF0ZScgbGFiZWwtcGxhY2VtZW50PVwic3RhY2tlZFwiIHZhbHVlPVwie3tldmVudC5kZXNjcmlwdGlvbn19XCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJldmVudC5kZXNjcmlwdGlvblwiPlxuICAgICAgPC9pb24tdGV4dGFyZWE+XG4gICAgPC9pb24taXRlbT5cbiAgPC9pb24tbGlzdD5cbiAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCI+XG4gICAgPGlvbi1pdGVtPlxuICAgICAgPGlvbi1pbnB1dCBbbGFiZWxdPSdcImNvbW1vbi5sb2NhdGlvblwiIHwgdHJhbnNsYXRlJyBsYWJlbC1wbGFjZW1lbnQ9XCJzdGFja2VkXCIgdmFsdWU9XCJ7e2V2ZW50LmxvY2F0aW9ufX1cIlxuICAgICAgICBbKG5nTW9kZWwpXT1cImV2ZW50LmxvY2F0aW9uXCI+XG4gICAgICA8L2lvbi1pbnB1dD5cbiAgICA8L2lvbi1pdGVtPlxuXG4gICAgPGlvbi1pdGVtPlxuICAgICAgPGlvbi1pbnB1dCBbbGFiZWxdPSdcImNvbW1vbi5zdHJlZXRfX2hvdXNlX251bWJlclwiIHwgdHJhbnNsYXRlJyBsYWJlbC1wbGFjZW1lbnQ9XCJzdGFja2VkXCJcbiAgICAgICAgdmFsdWU9XCJ7e2V2ZW50LnN0cmVldEFuZE51bWJlcn19XCIgWyhuZ01vZGVsKV09XCJldmVudC5zdHJlZXRBbmROdW1iZXJcIj5cbiAgICAgIDwvaW9uLWlucHV0PlxuICAgIDwvaW9uLWl0ZW0+XG4gICAgPGlvbi1pdGVtPlxuICAgICAgPGlvbi1pbnB1dCBbbGFiZWxdPSdcImNvbW1vbi5wb3N0YWxfX2NvZGVcIiB8IHRyYW5zbGF0ZScgbGFiZWwtcGxhY2VtZW50PVwic3RhY2tlZFwiIHZhbHVlPVwie3tldmVudC5wb3N0YWxDb2RlfX1cIlxuICAgICAgICBbKG5nTW9kZWwpXT1cImV2ZW50LnBvc3RhbENvZGVcIj5cbiAgICAgIDwvaW9uLWlucHV0PlxuICAgIDwvaW9uLWl0ZW0+XG4gICAgPGlvbi1pdGVtPlxuICAgICAgPGlvbi1pbnB1dCBbbGFiZWxdPVwiJ2NvbW1vbi5sb2NhbGl0eScgfCB0cmFuc2xhdGVcIiBsYWJlbC1wbGFjZW1lbnQ9XCJzdGFja2VkXCIgdmFsdWU9XCJ7e2V2ZW50LmNpdHl9fVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwiZXZlbnQuY2l0eVwiPlxuICAgICAgPC9pb24taW5wdXQ+XG4gICAgPC9pb24taXRlbT5cbiAgPC9pb24tbGlzdD5cblxuICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIj5cbiAgICA8aW9uLWl0ZW0+XG4gICAgICA8aW9uLWlucHV0IFtsYWJlbF09XCInY29tbW9uLmxpbmtfX3dlYicgfCB0cmFuc2xhdGVcIiBsYWJlbC1wbGFjZW1lbnQ9XCJzdGFja2VkXCIgdHlwZT1cInVybFwiXG4gICAgICAgIHZhbHVlPVwie3tldmVudC5saW5rX3dlYn19XCIgWyhuZ01vZGVsKV09XCJldmVudC5saW5rX3dlYlwiIFtwbGFjZWhvbGRlcl09XCInY29tbW9uLmxpbmtfX3BsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZVwiPlxuICAgICAgPC9pb24taW5wdXQ+XG4gICAgPC9pb24taXRlbT5cbiAgICA8aW9uLWl0ZW0+XG4gICAgICA8aW9uLWlucHV0IFtsYWJlbF09XCInY29tbW9uLmxpbmtfX3BvbGwnIHwgdHJhbnNsYXRlXCIgbGFiZWwtcGxhY2VtZW50PVwic3RhY2tlZFwiIHR5cGU9XCJ1cmxcIlxuICAgICAgICB2YWx1ZT1cInt7ZXZlbnQubGlua19wb2xsfX1cIiBbKG5nTW9kZWwpXT1cImV2ZW50LmxpbmtfcG9sbFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCInY29tbW9uLmxpbmtfX3BsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZVwiPlxuICAgICAgPC9pb24taW5wdXQ+XG4gICAgPC9pb24taXRlbT5cbiAgPC9pb24tbGlzdD5cblxuICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIj5cbiAgICA8aW9uLWl0ZW0gaWQ9XCJ0aW1lRnJvbUl0ZW1cIj5cbiAgICAgIDxpb24tbGFiZWwgcG9zaXRpb249XCJcIj5cbiAgICAgICAge3tcImNvbW1vbi5zdGFydF9fZXZlbnRcIiB8IHRyYW5zbGF0ZX19OlxuICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8aW9uLWRhdGV0aW1lLWJ1dHRvbiBzbG90PVwiZW5kXCIgZGF0ZXRpbWU9XCJ0aW1lRnJvbVwiPjwvaW9uLWRhdGV0aW1lLWJ1dHRvbj5cblxuICAgICAgPGlvbi1tb2RhbCBba2VlcENvbnRlbnRzTW91bnRlZF09XCJ0cnVlXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8aW9uLWRhdGV0aW1lIHByZXNlbnRhdGlvbj1cInRpbWVcIiBpZD1cInRpbWVGcm9tXCIgKGlvbkNoYW5nZSk9XCJjaGFuZ2VUaW1lRnJvbSgkZXZlbnQpXCJcbiAgICAgICAgICAgIG1pbnV0ZVZhbHVlcz1cIjAsNSwxMCwxNSwyMCwyNSwzMCwzNSw0MCw0NSw1MCw1NVwiIHZhbHVlPVwie3tldmVudC50aW1lRnJvbX19XCJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZXZlbnQudGltZUZyb21cIj48L2lvbi1kYXRldGltZT5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvaW9uLW1vZGFsPlxuICAgIDwvaW9uLWl0ZW0+XG5cbiAgICA8aW9uLWl0ZW0gaWQ9XCJ0aW1lVG9JdGVtXCI+XG4gICAgICA8aW9uLWxhYmVsIHBvc2l0aW9uPVwiXCI+IHt7XCJjb21tb24uZW5kX19ldmVudFwiIHwgdHJhbnNsYXRlfX06IDwvaW9uLWxhYmVsPlxuICAgICAgPGlvbi1kYXRldGltZS1idXR0b24gc2xvdD1cImVuZFwiIGRhdGV0aW1lPVwidGltZVRvXCI+PC9pb24tZGF0ZXRpbWUtYnV0dG9uPlxuXG4gICAgICA8aW9uLW1vZGFsIFtrZWVwQ29udGVudHNNb3VudGVkXT1cInRydWVcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlPlxuICAgICAgICAgIDxpb24tZGF0ZXRpbWUgcHJlc2VudGF0aW9uPVwidGltZVwiIGlkPVwidGltZVRvXCIgbWludXRlVmFsdWVzPVwiMCw1LDEwLDE1LDIwLDI1LDMwLDM1LDQwLDQ1LDUwLDU1XCJcbiAgICAgICAgICAgIHZhbHVlPVwie3tldmVudC50aW1lVG99fVwiIFsobmdNb2RlbCldPVwiZXZlbnQudGltZVRvXCI+PC9pb24tZGF0ZXRpbWU+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L2lvbi1tb2RhbD5cbiAgICA8L2lvbi1pdGVtPlxuXG4gICAgPGlvbi1pdGVtIGlkPVwic3RhcnREYXRlSXRlbVwiPlxuICAgICAgPGlvbi1sYWJlbCBwb3NpdGlvbj1cImRlZmF1bHRcIj5cbiAgICAgICAge3tcImNvbW1vbi5zdGFydF9fZGF0ZVwiIHwgdHJhbnNsYXRlfX06XG4gICAgICA8L2lvbi1sYWJlbD5cbiAgICAgIDxpb24tZGF0ZXRpbWUtYnV0dG9uIHNsb3Q9XCJlbmRcIiBkYXRldGltZT1cInN0YXJ0RGF0ZVwiPjwvaW9uLWRhdGV0aW1lLWJ1dHRvbj5cblxuICAgICAgPGlvbi1tb2RhbCBba2VlcENvbnRlbnRzTW91bnRlZF09XCJ0cnVlXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8aW9uLWRhdGV0aW1lIFtmaXJzdERheU9mV2Vla109XCIxXCIgKGlvbkNoYW5nZSk9XCJjaGFuZ2VTdGFydERhdGUoJGV2ZW50KVwiIHByZXNlbnRhdGlvbj1cImRhdGVcIiBpZD1cInN0YXJ0RGF0ZVwiXG4gICAgICAgICAgICB2YWx1ZT1cInt7ZXZlbnQuc3RhcnREYXRlfX1cIiBbKG5nTW9kZWwpXT1cImV2ZW50LnN0YXJ0RGF0ZVwiPjwvaW9uLWRhdGV0aW1lPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9pb24tbW9kYWw+XG4gICAgPC9pb24taXRlbT5cblxuICAgIDxpb24taXRlbSBpZD1cImVuZERhdGVJdGVtXCI+XG4gICAgICA8aW9uLWxhYmVsIHBvc2l0aW9uPVwiZGVmYXVsdFwiPlxuICAgICAgICB7e1wiY29tbW9uLmVuZF9fZGF0ZVwiIHwgdHJhbnNsYXRlfX06XG4gICAgICA8L2lvbi1sYWJlbD5cbiAgICAgIDxpb24tZGF0ZXRpbWUtYnV0dG9uIHNsb3Q9XCJlbmRcIiBkYXRldGltZT1cImVuZERhdGVcIj48L2lvbi1kYXRldGltZS1idXR0b24+XG5cbiAgICAgIDxpb24tbW9kYWwgW2tlZXBDb250ZW50c01vdW50ZWRdPVwidHJ1ZVwiPlxuICAgICAgICA8bmctdGVtcGxhdGU+XG4gICAgICAgICAgPGlvbi1kYXRldGltZSBbZmlyc3REYXlPZldlZWtdPVwiMVwiIHByZXNlbnRhdGlvbj1cImRhdGVcIiBpZD1cImVuZERhdGVcIiB2YWx1ZT1cInt7ZXZlbnQuZW5kRGF0ZX19XCJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZXZlbnQuZW5kRGF0ZVwiPjwvaW9uLWRhdGV0aW1lPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9pb24tbW9kYWw+XG4gICAgPC9pb24taXRlbT5cbiAgPC9pb24tbGlzdD5cblxuXG5cbiAgPGlvbi1saXN0IGxpbmVzPVwiZnVsbFwiIFtpbnNldF09XCJ0cnVlXCI+XG4gICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgIDxpb24tbGFiZWw+IHt7XCJoZWxmZXIuc2NoaWNodGVuXCIgfCB0cmFuc2xhdGV9fSA8L2lvbi1sYWJlbD5cbiAgICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJhZGRTY2hpY2h0KClcIj5oaW56dWbDvGdlbjwvaW9uLWJ1dHRvbj5cbiAgICA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZXZlbnQuc2NoaWNodGVuLmxlbmd0aCA+IDA7IGVsc2Ugc2NoaWNodGVuVGVtcGxhdGVcIj5cblxuICAgICAgPGlvbi1pdGVtICpuZ0Zvcj1cImxldCBzY2hpY2h0IG9mIGV2ZW50LnNjaGljaHRlblwiPlxuXG5cbiAgICAgICAgPGlvbi1pY29uIGNvbG9yPVwiZGFuZ2VyXCIgKGNsaWNrKT1cImRlbGV0ZVNjaGljaHQoc2NoaWNodClcIiBzbG90PVwic3RhcnRcIiBuYW1lPVwidHJhc2hcIiBzaXplPVwibWVkaXVtXCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1pY29uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJjb3B5U2NoaWNodChzY2hpY2h0KVwiIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJjb3B5XCIgc2l6ZT1cIm1lZGl1bVwiPjwvaW9uLWljb24+XG5cblxuICAgICAgICA8aW9uLWxhYmVsIChjbGljayk9XCJlZGl0U2NoaWNodChzY2hpY2h0KVwiPlxuICAgICAgICAgIDxoMz57e3NjaGljaHQubmFtZX19PC9oMz5cbiAgICAgICAgICA8aDI+e3tzY2hpY2h0LnRpbWVGcm9tfX0ge3tzY2hpY2h0LnRpbWVUb319PC9oMj5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgIDxpb24tYmFkZ2Ugc2xvdD1cImVuZFwiPnt7c2NoaWNodC5jb3VudE5lZWRlZH19PC9pb24tYmFkZ2U+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2lvbi1saXN0PlxuPC9pb24tY29udGVudD5cblxuPG5nLXRlbXBsYXRlICNzY2hpY2h0ZW5UZW1wbGF0ZT5cbiAgPGlvbi1pdGVtPlxuICAgIDxpb24tbGFiZWw+XG4gICAgICA8aDM+PGlvbi1za2VsZXRvbi10ZXh0IHN0eWxlPVwid2lkdGg6IDYwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+PC9oMz5cbiAgICAgIDxoMj48aW9uLXNrZWxldG9uLXRleHQgc3R5bGU9XCJ3aWR0aDogMzAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD4gPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgc3R5bGU9XCJ3aWR0aDogNDAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD48L2gyPlxuICAgIDwvaW9uLWxhYmVsPlxuXG4gIDwvaW9uLWl0ZW0+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI2xvYWRpbmc+XG4gIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiAxMCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogNjAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbjwvbmctdGVtcGxhdGU+Il0sCiAgIm1hcHBpbmdz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Q0FBQSxRQUFBLFNBQUEsR0FBQSxDQUFBLFVBQUEsUUFBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFlBQUEsVUFBQSxHQUFBLENBQUEsUUFBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsbUJBQUEsV0FBQSxHQUFBLGlCQUFBLFNBQUEsV0FBQSxPQUFBLEdBQUEsQ0FBQSxtQkFBQSxXQUFBLEdBQUEsaUJBQUEsU0FBQSxTQUFBLFNBQUEsR0FBQSxDQUFBLG1CQUFBLFdBQUEsUUFBQSxPQUFBLEdBQUEsaUJBQUEsU0FBQSxTQUFBLFdBQUEsYUFBQSxHQUFBLENBQUEsTUFBQSxjQUFBLEdBQUEsQ0FBQSxZQUFBLEVBQUEsR0FBQSxDQUFBLFFBQUEsT0FBQSxZQUFBLFVBQUEsR0FBQSxDQUFBLEdBQUEscUJBQUEsR0FBQSxDQUFBLE1BQUEsWUFBQSxHQUFBLENBQUEsUUFBQSxPQUFBLFlBQUEsUUFBQSxHQUFBLENBQUEsTUFBQSxlQUFBLEdBQUEsQ0FBQSxZQUFBLFNBQUEsR0FBQSxDQUFBLFFBQUEsT0FBQSxZQUFBLFdBQUEsR0FBQSxDQUFBLE1BQUEsYUFBQSxHQUFBLENBQUEsUUFBQSxPQUFBLFlBQUEsU0FBQSxHQUFBLENBQUEsU0FBQSxRQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxRQUFBLFVBQUEsR0FBQSxDQUFBLEdBQUEsU0FBQSxHQUFBLFNBQUEsU0FBQSxHQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxnQkFBQSxRQUFBLE1BQUEsWUFBQSxnQkFBQSxxQ0FBQSxHQUFBLGFBQUEsaUJBQUEsU0FBQSxTQUFBLEdBQUEsQ0FBQSxnQkFBQSxRQUFBLE1BQUEsVUFBQSxnQkFBQSxxQ0FBQSxHQUFBLGlCQUFBLFNBQUEsU0FBQSxHQUFBLENBQUEsZ0JBQUEsUUFBQSxNQUFBLGFBQUEsR0FBQSxhQUFBLGlCQUFBLGtCQUFBLFNBQUEsU0FBQSxHQUFBLENBQUEsZ0JBQUEsUUFBQSxNQUFBLFdBQUEsR0FBQSxpQkFBQSxrQkFBQSxTQUFB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
