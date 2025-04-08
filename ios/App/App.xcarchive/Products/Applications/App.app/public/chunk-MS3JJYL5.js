import {
  MyClubAppWidget
} from "./chunk-YLSEXBCU.js";
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
  Firestore,
  Timestamp,
  addDoc,
  collection,
  collection2,
  collectionData,
  deleteDoc,
  doc,
  doc2,
  docData,
  limit2 as limit,
  orderBy,
  query,
  query2,
  setDoc,
  setDoc2,
  updateDoc,
  where,
  where2
} from "./chunk-AMO7VPPH.js";
import {
  ActivatedRoute,
  AlertController,
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectorRef,
  DatePipe,
  IonAccordion,
  IonAccordionGroup,
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
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonModal,
  IonNote,
  IonReorder,
  IonReorderGroup,
  IonRow,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonSkeletonText,
  IonText,
  IonTextarea,
  IonThumbnail,
  IonTitle,
  IonToolbar,
  MenuController,
  ModalController,
  NavParams,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Platform,
  Router,
  SelectValueAccessorDirective,
  TextValueAccessorDirective,
  ToastController,
  TranslatePipe,
  TranslateService,
  catchError,
  combineLatest,
  debounceTime,
  forkJoin,
  inject,
  lastValueFrom,
  map,
  mergeMap,
  of,
  shareReplay,
  startWith,
  switchMap,
  take,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
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
  ɵɵsanitizeUrl,
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

// src/app/services/firebase/training.service.ts
var _TrainingService = class _TrainingService {
  constructor(firestore = inject(Firestore), authService, fbService) {
    this.firestore = firestore;
    this.authService = authService;
    this.fbService = fbService;
    this.teamList = [];
  }
  setCreateTraining(training) {
    return __async(this, null, function* () {
      const user = this.authService.auth.currentUser;
      return addDoc(collection2(this.firestore, `userProfile/${user.uid}/trainings`), training);
    });
  }
  getTeamTrainingRef(teamId, trainingId) {
    const gameRef = doc2(this.firestore, `teams/${teamId}/trainings/${trainingId}`);
    return docData(gameRef, { idField: "id" });
  }
  /* TEAM TrainingS */
  getTeamTrainingsRefs(teamId) {
    console.log(`Read Team Trainings List Ref ${teamId}`);
    const trainingsRefList = collection2(this.firestore, `teams/${teamId}/trainings`);
    const q = query2(trainingsRefList, where2(
      "date",
      // date = endDate
      ">=",
      Timestamp.fromDate(new Date(Date.now() - 1e3 * 3600 * 1))
      // 1 Hour after training ends
    ), orderBy("date", "asc"));
    return collectionData(q, { idField: "id" });
  }
  // PAST 20 Entries
  getTeamTrainingsPastRefs(teamId) {
    const trainingsRefList = collection2(this.firestore, `teams/${teamId}/trainings`);
    const q = query2(trainingsRefList, where2(
      "date",
      //  date = endDate of training
      "<",
      Timestamp.fromDate(new Date(Date.now()))
      // sofort als "vergangen" anzeigen
    ), orderBy("date", "desc"), limit(20));
    return collectionData(q, { idField: "id" });
  }
  /* CLUB TrainingS
  getClubTrainingsRef(clubId: string): Observable<Training> {
    const trainingsRefList = collection(
      this.firestore,
      `club/${clubId}/trainings`
    );
    return collectionData(trainingsRefList, {
      idField: "id",
    }) as unknown as Observable<Training>;
  } */
  /* TEAM TrainingS ATTENDEES */
  getTeamTrainingsAttendeesRef(teamId, trainingId) {
    const attendeesRefList = collection2(this.firestore, `teams/${teamId}/trainings/${trainingId}/attendees`);
    return collectionData(attendeesRefList, {
      idField: "id"
    });
  }
  /* TEAM TrainingS ATTENDEE Status */
  setTeamTrainingAttendeeStatus(status, teamId, trainingId) {
    return __async(this, null, function* () {
      const user = this.authService.auth.currentUser;
      const statusRef = doc2(this.firestore, `teams/${teamId}/trainings/${trainingId}/attendees/${user.uid}`);
      return yield setDoc2(statusRef, { status });
    });
  }
  setTeamTrainingAttendeeStatusAdmin(status, teamId, trainingId, memberId) {
    return __async(this, null, function* () {
      const statusRef = doc2(this.firestore, `teams/${teamId}/trainings/${trainingId}/attendees/${memberId}`);
      return yield setDoc2(statusRef, { status });
    });
  }
  deleteTeamTraining(teamId, trainingId) {
    const gameRef = doc2(this.firestore, `teams/${teamId}/trainings/${trainingId}`);
    return deleteDoc(gameRef);
  }
};
_TrainingService.\u0275fac = function TrainingService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrainingService)(\u0275\u0275inject(Firestore), \u0275\u0275inject(AuthService), \u0275\u0275inject(FirebaseService));
};
_TrainingService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TrainingService, factory: _TrainingService.\u0275fac, providedIn: "root" });
var TrainingService = _TrainingService;

// src/app/pages/training/training-create/training-create.page.ts
function TrainingCreatePage_div_20_ion_item_1_ion_select_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const team_r4 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", team_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(team_r4.name);
  }
}
function TrainingCreatePage_div_20_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-select", 10);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function TrainingCreatePage_div_20_ion_item_1_Template_ion_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.training.teamId, $event) || (ctx_r2.training.teamId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(3, TrainingCreatePage_div_20_ion_item_1_ion_select_option_3_Template, 2, 2, "ion-select-option", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const teamList_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("value", ctx_r2.training.teamId);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 4, "training-create.team"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.training.teamId);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", teamList_r5);
  }
}
function TrainingCreatePage_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, TrainingCreatePage_div_20_ion_item_1_Template, 4, 6, "ion-item", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const teamList_r5 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", teamList_r5.length > 1);
  }
}
function TrainingCreatePage_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 31);
    \u0275\u0275listener("ionChange", function TrainingCreatePage_ng_template_71_Template_ion_datetime_ionChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeStartDate($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function TrainingCreatePage_ng_template_71_Template_ion_datetime_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.training.startDate, $event) || (ctx_r2.training.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("firstDayOfWeek", 1)("value", ctx_r2.training.startDate);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.training.startDate);
  }
}
function TrainingCreatePage_ng_template_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 32);
    \u0275\u0275twoWayListener("ngModelChange", function TrainingCreatePage_ng_template_78_Template_ion_datetime_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.training.endDate, $event) || (ctx_r2.training.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275propertyInterpolate("value", ctx_r2.training.endDate);
    \u0275\u0275property("firstDayOfWeek", 1);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.training.endDate);
  }
}
function TrainingCreatePage_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 33);
    \u0275\u0275listener("ionChange", function TrainingCreatePage_ng_template_85_Template_ion_datetime_ionChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeTimeFrom($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function TrainingCreatePage_ng_template_85_Template_ion_datetime_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.training.timeFrom, $event) || (ctx_r2.training.timeFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275propertyInterpolate("value", ctx_r2.training.timeFrom);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.training.timeFrom);
  }
}
function TrainingCreatePage_ng_template_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 34);
    \u0275\u0275twoWayListener("ngModelChange", function TrainingCreatePage_ng_template_92_Template_ion_datetime_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.training.timeTo, $event) || (ctx_r2.training.timeTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275propertyInterpolate("value", ctx_r2.training.timeTo);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.training.timeTo);
  }
}
function TrainingCreatePage_ng_template_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-skeleton-text", 35)(1, "ion-skeleton-text", 36);
  }
}
var _TrainingCreatePage = class _TrainingCreatePage {
  constructor(modalCtrl, trainingService, authService, toastController, fbService, navParams) {
    this.modalCtrl = modalCtrl;
    this.trainingService = trainingService;
    this.authService = authService;
    this.toastController = toastController;
    this.fbService = fbService;
    this.navParams = navParams;
    const now = /* @__PURE__ */ new Date();
    const utcNow = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), 0, 0));
    this.training = {
      id: "",
      name: "",
      description: "",
      location: "",
      streetAndNumber: "",
      postalCode: "",
      city: "",
      date: Timestamp.fromDate(/* @__PURE__ */ new Date()),
      timeFrom: utcNow.toISOString(),
      timeTo: utcNow.toISOString(),
      startDate: utcNow.toISOString(),
      endDate: utcNow.toISOString(),
      repeatFrequency: "W",
      repeatAmount: "1",
      teamId: "",
      teamName: "",
      liga: "",
      status: true,
      attendees: [],
      exercises: [],
      countAttendees: 0
    };
  }
  ngOnInit() {
    this.trainingCopy = this.navParams.get("data");
    console.log(this.trainingCopy);
    if (this.trainingCopy.id) {
      this.training = this.trainingCopy;
      const now = /* @__PURE__ */ new Date();
      this.training.timeFrom = now.toISOString();
      this.training.timeTo = now.toISOString();
      this.training.startDate = now.toISOString();
      this.training.endDate = now.toISOString();
    }
    this.teamAdminList$ = this.fbService.getTeamAdminList();
    this.teamAdminList$.forEach((teamList) => {
      this.training.teamId = teamList[0].id;
      this.training.teamName = teamList[0].name;
    });
  }
  ngOnDestroy() {
  }
  changeTimeFrom(ev) {
  }
  // In your component:
  /*getLocalTimeFrom(): string {
    if (!this.training.timeFrom) return '';
    
    // Convert UTC to local time for display
    const date = new Date(this.training.timeFrom);
    return new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes()
    ).toISOString();
  }*/
  changeStartDate(ev) {
  }
  close() {
    return __async(this, null, function* () {
      return this.modalCtrl.dismiss(null, "close");
    });
  }
  combineDateAndTime(dateValue, timeValue) {
    let dateObj = dateValue;
    if (!(dateValue instanceof Date)) {
      dateObj = new Date(dateValue);
    }
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const day = dateObj.getDate();
    let hours = 0, minutes = 0, seconds = 0;
    if (typeof timeValue === "string") {
      if (timeValue.includes("T")) {
        const timeObj = new Date(timeValue);
        hours = timeObj.getHours();
        minutes = timeObj.getMinutes();
        seconds = timeObj.getSeconds();
      } else {
        const timeParts = timeValue.split(":");
        hours = parseInt(timeParts[0], 10) || 0;
        minutes = parseInt(timeParts[1], 10) || 0;
        seconds = parseInt(timeParts[2], 10) || 0;
      }
    } else if (timeValue instanceof Date) {
      hours = timeValue.getHours();
      minutes = timeValue.getMinutes();
      seconds = timeValue.getSeconds();
    }
    const combinedDateTime = new Date(year, month, day, hours, minutes, seconds);
    return combinedDateTime;
  }
  createTraining() {
    return __async(this, null, function* () {
      console.log(`Start Date before calculation: ${this.training.startDate}`);
      console.log(`Start Time before calculation: ${this.training.timeFrom}`);
      console.log(`End Date before calculation: ${this.training.endDate}`);
      console.log(`End Time before calculation: ${this.training.timeTo}`);
      const combinedStartDateTime = this.combineDateAndTime(
        this.training.startDate,
        this.training.timeFrom
        // ISO format: "2025-03-03T21:00:00"
      );
      const combinedEndDateTime = this.combineDateAndTime(
        this.training.endDate,
        this.training.timeTo
        // ISO format: "2025-03-03T21:00:00"
      );
      this.training.startDate = combinedStartDateTime.toISOString();
      this.training.timeFrom = combinedStartDateTime.toISOString();
      this.training.endDate = combinedEndDateTime.toISOString();
      this.training.timeTo = combinedEndDateTime.toISOString();
      console.log(`Start Date after calculation: ${this.training.startDate}`);
      console.log(`Start Time after calculation: ${this.training.timeFrom}`);
      console.log(`End Date after calculation: ${this.training.endDate}`);
      console.log(`End Time after calculation: ${this.training.timeTo}`);
      delete this.training.attendees;
      const training = yield this.trainingService.setCreateTraining(this.training).catch((e) => {
        console.log(e.message);
        this.toastActionError(e);
      });
      if (training) {
        console.log(training.id);
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
};
_TrainingCreatePage.\u0275fac = function TrainingCreatePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrainingCreatePage)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(TrainingService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(NavParams));
};
_TrainingCreatePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrainingCreatePage, selectors: [["app-training-create"]], inputs: { trainingCopy: [0, "data", "trainingCopy"] }, standalone: false, decls: 95, vars: 84, consts: [["loading", ""], [3, "translucent"], ["slot", "secondary"], [3, "click"], ["slot", "primary"], ["strong", "true", 3, "click"], ["collapse", "condense"], ["size", "large"], [3, "inset"], [4, "ngIf"], ["label-placement", "stacked", 3, "ngModelChange", "label", "ngModel", "value"], ["label-placement", "stacked", 3, "ngModelChange", "label", "value", "ngModel"], ["value", "D"], ["value", "W"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["id", "startDateItem"], ["position", "default"], ["slot", "end", "datetime", "startDate"], [3, "keepContentsMounted"], ["id", "endDateItem"], ["slot", "end", "datetime", "endDate"], ["id", "timeFromItem"], ["position", ""], ["slot", "end", "datetime", "timeFrom"], ["id", "timeToItem"], ["slot", "end", "datetime", "timeTo"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["presentation", "date", "id", "startDate", 3, "ionChange", "ngModelChange", "firstDayOfWeek", "value", "ngModel"], ["presentation", "date", "id", "endDate", 3, "ngModelChange", "firstDayOfWeek", "ngModel", "value"], ["presentation", "time", "id", "timeFrom", "minuteValues", "0,5,10,15,20,25,30,35,40,45,50,55", 3, "ionChange", "ngModelChange", "value", "ngModel"], ["presentation", "time", "id", "timeTo", "minuteValues", "0,5,10,15,20,25,30,35,40,45,50,55", 3, "ngModelChange", "value", "ngModel"], ["animated", "", 2, "width", "10%"], ["animated", "", 2, "width", "60%"]], template: function TrainingCreatePage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 1)(1, "ion-toolbar")(2, "ion-buttons", 2)(3, "ion-button", 3);
    \u0275\u0275listener("click", function TrainingCreatePage_Template_ion_button_click_3_listener() {
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
    \u0275\u0275listener("click", function TrainingCreatePage_Template_ion_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.createTraining());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "ion-content")(14, "ion-header", 6)(15, "ion-toolbar")(16, "ion-title", 7);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "ion-list", 8);
    \u0275\u0275template(20, TrainingCreatePage_div_20_Template, 2, 1, "div", 9);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementStart(22, "ion-item")(23, "ion-input", 10);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function TrainingCreatePage_Template_ion_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.training.name, $event) || (ctx.training.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "ion-item")(26, "ion-textarea", 11);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function TrainingCreatePage_Template_ion_textarea_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.training.description, $event) || (ctx.training.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "ion-list", 8)(29, "ion-item")(30, "ion-input", 11);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function TrainingCreatePage_Template_ion_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.training.location, $event) || (ctx.training.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "ion-item")(33, "ion-input", 11);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function TrainingCreatePage_Template_ion_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.training.streetAndNumber, $event) || (ctx.training.streetAndNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "ion-item")(36, "ion-input", 11);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function TrainingCreatePage_Template_ion_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.training.postalCode, $event) || (ctx.training.postalCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "ion-item")(39, "ion-input", 11);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function TrainingCreatePage_Template_ion_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.training.city, $event) || (ctx.training.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "ion-list", 8)(42, "ion-list-header")(43, "ion-label");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "ion-item")(47, "ion-select", 11);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function TrainingCreatePage_Template_ion_select_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.training.repeatFrequency, $event) || (ctx.training.repeatFrequency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(49, "ion-select-option", 12);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "ion-select-option", 13);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "ion-select", 11);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function TrainingCreatePage_Template_ion_select_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.training.repeatAmount, $event) || (ctx.training.repeatAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(57, "ion-select-option", 14);
    \u0275\u0275text(58, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "ion-select-option", 15);
    \u0275\u0275text(60, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "ion-select-option", 16);
    \u0275\u0275text(62, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "ion-select-option", 17);
    \u0275\u0275text(64, "4");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "ion-item", 18)(66, "ion-label", 19);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "ion-datetime-button", 20);
    \u0275\u0275elementStart(70, "ion-modal", 21);
    \u0275\u0275template(71, TrainingCreatePage_ng_template_71_Template, 1, 3, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "ion-item", 22)(73, "ion-label", 19);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(76, "ion-datetime-button", 23);
    \u0275\u0275elementStart(77, "ion-modal", 21);
    \u0275\u0275template(78, TrainingCreatePage_ng_template_78_Template, 1, 3, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "ion-item", 24)(80, "ion-label", 25);
    \u0275\u0275text(81);
    \u0275\u0275pipe(82, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(83, "ion-datetime-button", 26);
    \u0275\u0275elementStart(84, "ion-modal", 21);
    \u0275\u0275template(85, TrainingCreatePage_ng_template_85_Template, 1, 2, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "ion-item", 27)(87, "ion-label", 25);
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(90, "ion-datetime-button", 28);
    \u0275\u0275elementStart(91, "ion-modal", 21);
    \u0275\u0275template(92, TrainingCreatePage_ng_template_92_Template, 1, 2, "ng-template");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(93, TrainingCreatePage_ng_template_93_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 44, "common.close"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 46, "training-create.new__training"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 48, "common.create"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 50, "training-create.new__training"));
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(21, 52, ctx.teamAdminList$));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("value", ctx.training.name);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(24, 54, "common.name"));
    \u0275\u0275twoWayProperty("ngModel", ctx.training.name);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("value", ctx.training.description);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(27, 56, "common.description"));
    \u0275\u0275twoWayProperty("ngModel", ctx.training.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("value", ctx.training.location);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(31, 58, "common.location"));
    \u0275\u0275twoWayProperty("ngModel", ctx.training.location);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("value", ctx.training.streetAndNumber);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(34, 60, "common.street__house_number"));
    \u0275\u0275twoWayProperty("ngModel", ctx.training.streetAndNumber);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("value", ctx.training.postalCode);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(37, 62, "common.postal__code"));
    \u0275\u0275twoWayProperty("ngModel", ctx.training.postalCode);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("value", ctx.training.city);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(40, 64, "common.locality"));
    \u0275\u0275twoWayProperty("ngModel", ctx.training.city);
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 66, "training-create.series__settings"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("value", ctx.training.repeatFrequency);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(48, 68, "training-create.repeat"));
    \u0275\u0275twoWayProperty("ngModel", ctx.training.repeatFrequency);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 70, "training-create.daily"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 72, "training-create.weekly"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("value", ctx.training.repeatAmount);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(56, 74, "common.all"));
    \u0275\u0275twoWayProperty("ngModel", ctx.training.repeatAmount);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(68, 76, "training-create.first__training"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(75, 78, "training-create.last__training"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(82, 80, "training-create.start__training"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(89, 82, "training-create.end__training"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("keepContentsMounted", true);
  }
}, dependencies: [NgForOf, NgIf, IonButton, IonButtons, IonContent, IonDatetime, IonDatetimeButton, IonHeader, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonSelect, IonSelectOption, IonSkeletonText, IonTextarea, IonTitle, IonToolbar, IonModal, SelectValueAccessorDirective, TextValueAccessorDirective, NgControlStatus, NgModel, AsyncPipe, TranslatePipe], encapsulation: 2 });
var TrainingCreatePage = _TrainingCreatePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrainingCreatePage, { className: "TrainingCreatePage", filePath: "src/app/pages/training/training-create/training-create.page.ts", lineNumber: 32 });
})();

// src/app/services/firebase/exercise.service.ts
var _ExerciseService = class _ExerciseService {
  constructor(firestore = inject(Firestore)) {
    this.firestore = firestore;
  }
  getExerciseRef() {
    const exercisesRef = doc(this.firestore, `exercises`);
    return docData(exercisesRef, { idField: "id" });
  }
  getExerciseRefs(type) {
    const exercisesRefList = collection(this.firestore, `exercises`);
    const q = query(exercisesRefList, where("type", "==", type));
    return collectionData(q, {
      idField: "id"
    });
  }
  getTeamExerciseRefs(teamId) {
    const exercisesRefList = collection(this.firestore, `teams/${teamId}/exercises`);
    return collectionData(exercisesRefList, {
      idField: "id"
    });
  }
  getTeamTrainingExerciseRefs(teamId, trainingId) {
    const exercisesRefList = collection(this.firestore, `teams/${teamId}/trainings/${trainingId}/exercises`);
    const q = query(exercisesRefList, orderBy("order", "asc"));
    return collectionData(q, {
      idField: "id"
    });
  }
  addTeamTrainingExercise(teamId, trainingId, exercise) {
    return setDoc(doc(this.firestore, `teams/${teamId}/trainings/${trainingId}/exercises/${exercise.id}`), exercise);
  }
  addTeamExercise(teamId, exercise) {
    return setDoc(doc(this.firestore, `teams/${teamId}/exercises/${exercise.id}`), exercise);
  }
  removeTeamTrainingExercise(teamId, trainingId, exercise) {
    const exercisesRef = doc(this.firestore, `teams/${teamId}/trainings/${trainingId}/exercises/${exercise.id}`);
    return deleteDoc(exercisesRef);
  }
  removeTeamExercise(teamId, exercise) {
    const exercisesRef = doc(this.firestore, `teams/${teamId}/exercises/${exercise.id}`);
    return deleteDoc(exercisesRef);
  }
  updateTeamTrainingExerciseOrder(teamId, trainingId, exerciseId, order) {
    const exerciseRef = doc(this.firestore, `teams/${teamId}/trainings/${trainingId}/exercises/${exerciseId}`);
    return updateDoc(exerciseRef, { order });
  }
};
_ExerciseService.\u0275fac = function ExerciseService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExerciseService)(\u0275\u0275inject(Firestore));
};
_ExerciseService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExerciseService, factory: _ExerciseService.\u0275fac, providedIn: "root" });
var ExerciseService = _ExerciseService;

// src/app/pages/team/team-exercises/team-exercises.page.ts
function TeamExercisesPage_ion_list_13_ion_item_sliding_4_ion_item_option_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-option", 20)(1, "ion-icon", 21);
    \u0275\u0275listener("click", function TeamExercisesPage_ion_list_13_ion_item_sliding_4_ion_item_option_3_Template_ion_icon_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const exercise_r4 = \u0275\u0275nextContext().$implicit;
      const item_r5 = \u0275\u0275reference(1);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.addExercise(item_r5, exercise_r4));
    });
    \u0275\u0275elementEnd()();
  }
}
function TeamExercisesPage_ion_list_13_ion_item_sliding_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 1)(2, "ion-item-options", 11);
    \u0275\u0275template(3, TeamExercisesPage_ion_list_13_ion_item_sliding_4_ion_item_option_3_Template, 2, 0, "ion-item-option", 12);
    \u0275\u0275elementStart(4, "ion-item-option", 13)(5, "ion-icon", 14);
    \u0275\u0275listener("click", function TeamExercisesPage_ion_list_13_ion_item_sliding_4_Template_ion_icon_click_5_listener() {
      const exercise_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const item_r5 = \u0275\u0275reference(1);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.removeTeamExercise(item_r5, exercise_r4));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "ion-item", 15)(7, "ion-thumbnail", 16);
    \u0275\u0275listener("click", function TeamExercisesPage_ion_list_13_ion_item_sliding_4_Template_ion_thumbnail_click_7_listener() {
      const exercise_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.openExercise(exercise_r4));
    });
    \u0275\u0275element(8, "img", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ion-label", 18);
    \u0275\u0275listener("click", function TeamExercisesPage_ion_list_13_ion_item_sliding_4_Template_ion_label_click_9_listener() {
      const exercise_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.openExercise(exercise_r4));
    });
    \u0275\u0275elementStart(10, "h2");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h3");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ion-text", 19)(15, "h3");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const exercise_r4 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r5.training.id);
    \u0275\u0275advance(5);
    \u0275\u0275propertyInterpolate("alt", exercise_r4.title);
    \u0275\u0275propertyInterpolate("src", exercise_r4.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(exercise_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exercise_r4.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(exercise_r4.category);
  }
}
function TeamExercisesPage_ion_list_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 9)(1, "ion-list-header")(2, "ion-label");
    \u0275\u0275text(3, "Team Favoriten");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, TeamExercisesPage_ion_list_13_ion_item_sliding_4_Template, 17, 6, "ion-item-sliding", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const teamExerciseList_r7 = ctx.ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", teamExerciseList_r7);
  }
}
function TeamExercisesPage_ion_list_15_ion_item_sliding_5_ion_item_option_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-option", 20)(1, "ion-icon", 21);
    \u0275\u0275listener("click", function TeamExercisesPage_ion_list_15_ion_item_sliding_5_ion_item_option_3_Template_ion_icon_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const exercise_r11 = \u0275\u0275nextContext().$implicit;
      const item_r12 = \u0275\u0275reference(1);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.addExercise(item_r12, exercise_r11));
    });
    \u0275\u0275elementEnd()();
  }
}
function TeamExercisesPage_ion_list_15_ion_item_sliding_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 1)(2, "ion-item-options", 11);
    \u0275\u0275template(3, TeamExercisesPage_ion_list_15_ion_item_sliding_5_ion_item_option_3_Template, 2, 0, "ion-item-option", 12);
    \u0275\u0275elementStart(4, "ion-item-option", 19)(5, "ion-icon", 23);
    \u0275\u0275listener("click", function TeamExercisesPage_ion_list_15_ion_item_sliding_5_Template_ion_icon_click_5_listener() {
      const exercise_r11 = \u0275\u0275restoreView(_r9).$implicit;
      const item_r12 = \u0275\u0275reference(1);
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.addTeamExercise(item_r12, exercise_r11));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "ion-item", 15)(7, "ion-thumbnail", 16);
    \u0275\u0275listener("click", function TeamExercisesPage_ion_list_15_ion_item_sliding_5_Template_ion_thumbnail_click_7_listener() {
      const exercise_r11 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.openExercise(exercise_r11));
    });
    \u0275\u0275element(8, "img", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ion-label", 18);
    \u0275\u0275listener("click", function TeamExercisesPage_ion_list_15_ion_item_sliding_5_Template_ion_label_click_9_listener() {
      const exercise_r11 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.openExercise(exercise_r11));
    });
    \u0275\u0275elementStart(10, "h2");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h3");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ion-text", 19)(15, "h3");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const exercise_r11 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r5.training.id);
    \u0275\u0275advance(5);
    \u0275\u0275propertyInterpolate("alt", exercise_r11.title);
    \u0275\u0275propertyInterpolate("src", exercise_r11.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(exercise_r11.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exercise_r11.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(exercise_r11.category);
  }
}
function TeamExercisesPage_ion_list_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-list", 9)(1, "ion-list-header")(2, "ion-label");
    \u0275\u0275text(3, "Auswahl von \xDCbungen");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ion-searchbar", 22);
    \u0275\u0275listener("ionInput", function TeamExercisesPage_ion_list_15_Template_ion_searchbar_ionInput_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.handleSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, TeamExercisesPage_ion_list_15_ion_item_sliding_5_Template, 17, 6, "ion-item-sliding", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const exerciseListTemplate_r13 = ctx.ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275property("debounce", 500);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", exerciseListTemplate_r13);
  }
}
function TeamExercisesPage_ng_template_17_ion_list_0_ion_col_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-col", 26)(1, "ion-card")(2, "ion-card-header")(3, "ion-card-subtitle");
    \u0275\u0275element(4, "ion-skeleton-text", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-card-title");
    \u0275\u0275element(6, "ion-skeleton-text", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-card-content");
    \u0275\u0275element(8, "ion-skeleton-text", 28)(9, "ion-skeleton-text", 27)(10, "ion-skeleton-text", 28)(11, "ion-skeleton-text", 27)(12, "ion-skeleton-text", 28);
    \u0275\u0275elementEnd()()();
  }
}
function TeamExercisesPage_ng_template_17_ion_list_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list")(1, "ion-grid")(2, "ion-row");
    \u0275\u0275template(3, TeamExercisesPage_ng_template_17_ion_list_0_ion_col_3_Template, 13, 0, "ion-col", 25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r5.skeleton);
  }
}
function TeamExercisesPage_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TeamExercisesPage_ng_template_17_ion_list_0_Template, 4, 1, "ion-list", 24);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const loading_r14 = \u0275\u0275reference(18);
    \u0275\u0275property("ngIf", loading_r14);
  }
}
var _TeamExercisesPage = class _TeamExercisesPage {
  constructor(navParams, toastCtrl, fbService, translate, exerciseService, modalCtrl) {
    this.navParams = navParams;
    this.toastCtrl = toastCtrl;
    this.fbService = fbService;
    this.translate = translate;
    this.exerciseService = exerciseService;
    this.modalCtrl = modalCtrl;
    this.skeleton = new Array(12);
    this.searchTerm = new BehaviorSubject("");
  }
  ngOnInit() {
    this.training = this.navParams.get("training");
    console.log(">>>", this.training);
    this.exerciseList$ = this.fbService.getTeamRef(this.training.teamId).pipe(
      take(1),
      // Take only the first emission to prevent multiple subscriptions
      switchMap((team) => {
        if (!team || !team.type) {
          console.error("Team data is incomplete or missing.");
          return of2([]);
        }
        if (team.type === "Club") {
          return this.fbService.getClubRef(this.training.clubId).pipe(take(1), switchMap((club) => {
            if (!club || !club.type) {
              console.error("Club data is incomplete or missing.");
              return of2([]);
            }
            return this.exerciseService.getExerciseRefs(club.type);
          }));
        }
        return this.exerciseService.getExerciseRefs(team.type);
      }),
      catchError((err) => {
        console.error("Error fetching exercises:", err);
        return [];
      })
    );
    this.filteredExerciseList$ = this.searchTerm.pipe(debounceTime(300), startWith(""), switchMap((term) => this.filterExercises(term)));
    this.teamExerciseList$ = this.fetchTeamExercises();
  }
  ngOnDestroy() {
  }
  fetchTeamExercises() {
    return this.exerciseService.getTeamExerciseRefs(this.training.teamId).pipe(
      map((exercises) => exercises || []),
      // Safeguard to ensure it always maps to an array
      catchError((err) => {
        console.error("Error fetching team exercises:", err);
        this.toastActionError(err);
        return of2([]);
      }),
      startWith([])
    );
  }
  filterExercises(term) {
    return this.exerciseList$.pipe(map((items) => items.filter((element) => element.title.toLowerCase().includes(term.toLowerCase()) || element.description.toLowerCase().includes(term.toLowerCase()))));
  }
  handleSearch(event) {
    const searchTerm = event.detail.value || "";
    this.searchTerm.next(searchTerm);
  }
  displayError(err) {
    this.toastCtrl.create({
      header: this.translate.instant("common.error"),
      message: err.message || "An error occurred",
      color: "danger",
      buttons: [{ text: this.translate.instant("common.ok"), role: "cancel" }]
    }).then((alert) => alert.present());
  }
  addExercise(slidingItem, exercise) {
    return __async(this, null, function* () {
      slidingItem.closeOpened();
      exercise["order"] = 0;
      try {
        yield this.exerciseService.addTeamTrainingExercise(this.training.teamId, this.training.id, exercise);
        this.toastActionSaved();
      } catch (err) {
        console.log(err);
      }
    });
  }
  addTeamExercise(slidingItem, exercise) {
    return __async(this, null, function* () {
      slidingItem.closeOpened();
      exercise["order"] = 0;
      try {
        yield this.exerciseService.addTeamExercise(this.training.teamId, exercise);
        this.toastActionSaved();
      } catch (err) {
        console.log(err);
      }
    });
  }
  removeTeamExercise(slidingItem, exercise) {
    slidingItem.closeOpened();
    try {
      this.exerciseService.removeTeamExercise(this.training.teamId, exercise);
      this.toastActionCanceled();
    } catch (err) {
      console.log(err);
    }
  }
  openExercise(exercise) {
    Browser.open({
      url: exercise.link
    });
  }
  toastActionSaved() {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: yield lastValueFrom(this.translate.get("common.success__exercise_added")),
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
        message: yield lastValueFrom(this.translate.get("common.success__exercise_deleted")),
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
      return yield this.modalCtrl.dismiss(null, "confirm");
    });
  }
};
_TeamExercisesPage.\u0275fac = function TeamExercisesPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TeamExercisesPage)(\u0275\u0275directiveInject(NavParams), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ExerciseService), \u0275\u0275directiveInject(ModalController));
};
_TeamExercisesPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamExercisesPage, selectors: [["app-team-exercises"]], inputs: { training: "training" }, standalone: false, decls: 19, vars: 13, consts: [["loading", ""], ["item", ""], [3, "translucent"], ["slot", "primary"], [3, "click"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], ["lines", "full", 4, "ngIf", "ngIfElse"], ["lines", "full"], [4, "ngFor", "ngForOf"], ["side", "start"], ["color", "success", 4, "ngIf"], ["color", "danger"], ["slot", "icon-only", "name", "star", 3, "click"], ["type", "button", "detail", "true"], ["slot", "start", 3, "click"], [3, "alt", "src"], [1, "ion-text-wrap", 3, "click"], ["color", "primary"], ["color", "success"], ["slot", "icon-only", "name", "checkmark-circle", 3, "click"], ["animated", "true", "placeholder", "Passspiel", "show-clear-button", "focus", 3, "ionInput", "debounce"], ["slot", "icon-only", "name", "star-outline", 3, "click"], [4, "ngIf"], ["size-lg", "4", "size-md", "6", "size-sm", "6", "size", "12", 4, "ngFor", "ngForOf"], ["size-lg", "4", "size-md", "6", "size-sm", "6", "size", "12"], ["animated", "", 2, "width", "60%"], ["animated", "", 2, "width", "80%"]], template: function TeamExercisesPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 2)(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3, "Vorlagen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 3)(5, "ion-button", 4);
    \u0275\u0275listener("click", function TeamExercisesPage_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.close());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "ion-content", 5)(9, "ion-header", 6)(10, "ion-toolbar")(11, "ion-title", 7);
    \u0275\u0275text(12, " Vorlagen ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, TeamExercisesPage_ion_list_13_Template, 5, 1, "ion-list", 8);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275template(15, TeamExercisesPage_ion_list_15_Template, 6, 2, "ion-list", 8);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, TeamExercisesPage_ng_template_17_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const loading_r14 = \u0275\u0275reference(18);
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "common.close"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(14, 9, ctx.teamExerciseList$))("ngIfElse", loading_r14);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(16, 11, ctx.filteredExerciseList$))("ngIfElse", loading_r14);
  }
}, dependencies: [NgForOf, NgIf, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonRow, IonSearchbar, IonSkeletonText, IonText, IonThumbnail, IonTitle, IonToolbar, TextValueAccessorDirective, AsyncPipe, TranslatePipe], encapsulation: 2 });
var TeamExercisesPage = _TeamExercisesPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamExercisesPage, { className: "TeamExercisesPage", filePath: "src/app/pages/team/team-exercises/team-exercises.page.ts", lineNumber: 16 });
})();
function of2(arg0) {
  throw new Error("Function not implemented.");
}

// src/app/pages/training/training-exercises/training-exercises.page.ts
function TrainingExercisesPage_ng_container_2_ion_buttons_1_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 5);
    \u0275\u0275listener("click", function TrainingExercisesPage_ng_container_2_ion_buttons_1_ion_button_1_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
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
function TrainingExercisesPage_ng_container_2_ion_buttons_1_ion_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 5);
    \u0275\u0275listener("click", function TrainingExercisesPage_ng_container_2_ion_buttons_1_ion_button_2_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
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
function TrainingExercisesPage_ng_container_2_ion_buttons_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-buttons", 11);
    \u0275\u0275template(1, TrainingExercisesPage_ng_container_2_ion_buttons_1_ion_button_1_Template, 3, 3, "ion-button", 12)(2, TrainingExercisesPage_ng_container_2_ion_buttons_1_ion_button_2_Template, 3, 3, "ion-button", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.allowEdit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.allowEdit);
  }
}
function TrainingExercisesPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TrainingExercisesPage_ng_container_2_ion_buttons_1_Template, 3, 2, "ion-buttons", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const teamAdminList_r5 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isTeamAdmin(teamAdminList_r5, ctx_r2.training.teamId));
  }
}
function TrainingExercisesPage_ng_container_15_ion_list_1_ion_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 5);
    \u0275\u0275listener("click", function TrainingExercisesPage_ng_container_15_ion_list_1_ion_button_5_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openTeamTrainingExercise());
    });
    \u0275\u0275text(1, " hinzuf\xFCgen ");
    \u0275\u0275elementEnd();
  }
}
function TrainingExercisesPage_ng_container_15_ion_list_1_ion_item_sliding_7_ion_item_options_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-options", 23)(1, "ion-item-option", 24);
    \u0275\u0275listener("click", function TrainingExercisesPage_ng_container_15_ion_list_1_ion_item_sliding_7_ion_item_options_2_Template_ion_item_option_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const exercise_r11 = \u0275\u0275nextContext().$implicit;
      const item_r12 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeExercise(item_r12, exercise_r11));
    });
    \u0275\u0275element(2, "ion-icon", 25);
    \u0275\u0275elementEnd()();
  }
}
function TrainingExercisesPage_ng_container_15_ion_list_1_ion_item_sliding_7_ion_reorder_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-reorder", 26);
  }
}
function TrainingExercisesPage_ng_container_15_ion_list_1_ion_item_sliding_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 1);
    \u0275\u0275template(2, TrainingExercisesPage_ng_container_15_ion_list_1_ion_item_sliding_7_ion_item_options_2_Template, 3, 0, "ion-item-options", 17);
    \u0275\u0275elementStart(3, "ion-item", 18)(4, "ion-thumbnail", 19);
    \u0275\u0275element(5, "img", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-label", 21);
    \u0275\u0275listener("click", function TrainingExercisesPage_ng_container_15_ion_list_1_ion_item_sliding_7_Template_ion_label_click_6_listener() {
      const exercise_r11 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openExercise(exercise_r11));
    });
    \u0275\u0275elementStart(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h3");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, TrainingExercisesPage_ng_container_15_ion_list_1_ion_item_sliding_7_ion_reorder_13_Template, 1, 0, "ion-reorder", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const exercise_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.allowEdit);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("alt", exercise_r11.title);
    \u0275\u0275propertyInterpolate("src", exercise_r11.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(exercise_r11.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exercise_r11.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exercise_r11.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.allowEdit == true);
  }
}
function TrainingExercisesPage_ng_container_15_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-list", 14)(1, "ion-list-header")(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, TrainingExercisesPage_ng_container_15_ion_list_1_ion_button_5_Template, 2, 0, "ion-button", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-reorder-group", 15);
    \u0275\u0275listener("ionItemReorder", function TrainingExercisesPage_ng_container_15_ion_list_1_Template_ion_reorder_group_ionItemReorder_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const teamTrainingExerciseList_r8 = \u0275\u0275nextContext().ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleReorder($event, teamTrainingExerciseList_r8));
    });
    \u0275\u0275template(7, TrainingExercisesPage_ng_container_15_ion_list_1_ion_item_sliding_7_Template, 14, 7, "ion-item-sliding", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const teamTrainingExerciseList_r8 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Training vom: ", \u0275\u0275pipeBind2(4, 5, ctx_r2.training.date.toDate(), "dd.MM.YYYY "), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.allowEdit);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", false);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", teamTrainingExerciseList_r8)("ngForTrackBy", ctx_r2.trackItems);
  }
}
function TrainingExercisesPage_ng_container_15_ion_list_2_ion_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 5);
    \u0275\u0275listener("click", function TrainingExercisesPage_ng_container_15_ion_list_2_ion_button_4_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openTeamTrainingExercise());
    });
    \u0275\u0275text(1, " hinzuf\xFCgen ");
    \u0275\u0275elementEnd();
  }
}
function TrainingExercisesPage_ng_container_15_ion_list_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 14)(1, "ion-list-header")(2, "ion-label");
    \u0275\u0275text(3, " Training vom: ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TrainingExercisesPage_ng_container_15_ion_list_2_ion_button_4_Template, 2, 0, "ion-button", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-item")(6, "ion-note");
    \u0275\u0275text(7, " Keine \xDCbungen vorhanden ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.allowEdit);
  }
}
function TrainingExercisesPage_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TrainingExercisesPage_ng_container_15_ion_list_1_Template, 8, 8, "ion-list", 13)(2, TrainingExercisesPage_ng_container_15_ion_list_2_Template, 8, 1, "ion-list", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const teamTrainingExerciseList_r8 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", teamTrainingExerciseList_r8.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", teamTrainingExerciseList_r8.length == 0);
  }
}
function TrainingExercisesPage_ng_template_17_ion_list_0_ion_col_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-col", 28)(1, "ion-card")(2, "ion-card-header")(3, "ion-card-subtitle");
    \u0275\u0275element(4, "ion-skeleton-text", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-card-title");
    \u0275\u0275element(6, "ion-skeleton-text", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-card-content");
    \u0275\u0275element(8, "ion-skeleton-text", 30)(9, "ion-skeleton-text", 29)(10, "ion-skeleton-text", 30)(11, "ion-skeleton-text", 29)(12, "ion-skeleton-text", 30);
    \u0275\u0275elementEnd()()();
  }
}
function TrainingExercisesPage_ng_template_17_ion_list_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list")(1, "ion-grid")(2, "ion-row");
    \u0275\u0275template(3, TrainingExercisesPage_ng_template_17_ion_list_0_ion_col_3_Template, 13, 0, "ion-col", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.skeleton);
  }
}
function TrainingExercisesPage_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TrainingExercisesPage_ng_template_17_ion_list_0_Template, 4, 1, "ion-list", 3);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const loading_r14 = \u0275\u0275reference(18);
    \u0275\u0275property("ngIf", loading_r14);
  }
}
var _TrainingExercisesPage = class _TrainingExercisesPage {
  constructor(navParams, exerciseService, modalCtrl, fbService, toastCtrl, translate) {
    this.navParams = navParams;
    this.exerciseService = exerciseService;
    this.modalCtrl = modalCtrl;
    this.fbService = fbService;
    this.toastCtrl = toastCtrl;
    this.translate = translate;
    this.skeleton = new Array(12);
    this.allowEdit = false;
    this.teamAdminList$ = this.fbService.getTeamAdminList();
  }
  isTeamAdmin(teamAdminList, teamId) {
    return teamAdminList && teamAdminList.some((team) => team.id === teamId);
  }
  ngOnInit() {
    this.training = this.navParams.get("training");
    this.teamTrainingExerciseList$ = this.exerciseService.getTeamTrainingExerciseRefs(this.training.teamId, this.training.id);
  }
  ngOnDestroy() {
  }
  handleReorder(ev, list) {
    console.log("Dragged from index", ev.detail.from, "to", ev.detail.to);
    const newList = ev.detail.complete(list);
    let index = 0;
    for (const element of newList) {
      this.exerciseService.updateTeamTrainingExerciseOrder(this.training.teamId, this.training.id, element.id, index);
      index++;
    }
  }
  handleSearch(event) {
    console.log(event.detail.value);
    this.exerciseListTemplate$ = this.exerciseListTemplateBackup$.pipe(take(1), map((items) => {
      return items.filter((element) => element.title.toLowerCase().includes(event.detail.value.toLowerCase()));
    }));
  }
  edit() {
    if (this.allowEdit) {
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }
  removeExercise(slidingItem, exercise) {
    slidingItem.closeOpened();
    this.exerciseService.removeTeamTrainingExercise(this.training.teamId, this.training.id, exercise);
    this.toastActionCanceled();
  }
  trackItems(index, itemNumber) {
    return itemNumber;
  }
  openExercise(exercise) {
    Browser.open({
      url: exercise.link
    });
  }
  openTeamTrainingExercise() {
    return __async(this, null, function* () {
      const modal = yield this.modalCtrl.create({
        component: TeamExercisesPage,
        presentingElement: yield this.modalCtrl.getTop(),
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          training: this.training
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
        message: yield lastValueFrom(this.translate.get("common.success__exercise_deleted")),
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
      return yield this.modalCtrl.dismiss(null, "confirm");
    });
  }
};
_TrainingExercisesPage.\u0275fac = function TrainingExercisesPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrainingExercisesPage)(\u0275\u0275directiveInject(NavParams), \u0275\u0275directiveInject(ExerciseService), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(TranslateService));
};
_TrainingExercisesPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrainingExercisesPage, selectors: [["app-training-exercises"]], inputs: { training: "training" }, standalone: false, decls: 19, vars: 12, consts: [["loading", ""], ["item", ""], [3, "translucent"], [4, "ngIf"], ["slot", "primary"], [3, "click"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], [4, "ngIf", "ngIfElse"], ["slot", "secondary", 4, "ngIf"], ["slot", "secondary"], [3, "click", 4, "ngIf"], ["lines", "full", 4, "ngIf"], ["lines", "full"], [3, "ionItemReorder", "disabled"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["side", "start", 4, "ngIf"], ["type", "button", "detail", "true"], ["slot", "start"], [3, "alt", "src"], [1, "ion-text-wrap", 3, "click"], ["slot", "end", 4, "ngIf"], ["side", "start"], ["color", "danger", 3, "click"], ["slot", "icon-only", "name", "trash"], ["slot", "end"], ["size-lg", "4", "size-md", "6", "size-sm", "6", "size", "12", 4, "ngFor", "ngForOf"], ["size-lg", "4", "size-md", "6", "size-sm", "6", "size", "12"], ["animated", "", 2, "width", "60%"], ["animated", "", 2, "width", "80%"]], template: function TrainingExercisesPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 2)(1, "ion-toolbar");
    \u0275\u0275template(2, TrainingExercisesPage_ng_container_2_Template, 2, 1, "ng-container", 3);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementStart(4, "ion-title");
    \u0275\u0275text(5, "\xDCbungen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-buttons", 4)(7, "ion-button", 5);
    \u0275\u0275listener("click", function TrainingExercisesPage_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.close());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "ion-content", 6)(11, "ion-header", 7)(12, "ion-toolbar")(13, "ion-title", 8);
    \u0275\u0275text(14, " \xDCbungen ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, TrainingExercisesPage_ng_container_15_Template, 3, 2, "ng-container", 9);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, TrainingExercisesPage_ng_template_17_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const loading_r14 = \u0275\u0275reference(18);
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 6, ctx.teamAdminList$));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "common.close"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(16, 10, ctx.teamTrainingExerciseList$))("ngIfElse", loading_r14);
  }
}, dependencies: [NgForOf, NgIf, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonNote, IonReorder, IonReorderGroup, IonRow, IonSkeletonText, IonThumbnail, IonTitle, IonToolbar, AsyncPipe, DatePipe, TranslatePipe], encapsulation: 2 });
var TrainingExercisesPage = _TrainingExercisesPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrainingExercisesPage, { className: "TrainingExercisesPage", filePath: "src/app/pages/training/training-exercises/training-exercises.page.ts", lineNumber: 18 });
})();

// src/app/pages/training/training-detail/training-detail.page.ts
var _c0 = () => ["yes"];
function TrainingDetailPage_ng_container_0_ng_container_45_ion_list_1_ng_container_4_ion_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const exerciseList_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", exerciseList_r4.length, " ");
  }
}
function TrainingDetailPage_ng_container_0_ng_container_45_ion_list_1_ng_container_4_ion_note_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-note");
    \u0275\u0275text(1, " Keine \xDCbungen vorhanden ");
    \u0275\u0275elementEnd();
  }
}
function TrainingDetailPage_ng_container_0_ng_container_45_ion_list_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TrainingDetailPage_ng_container_0_ng_container_45_ion_list_1_ng_container_4_ion_badge_1_Template, 2, 1, "ion-badge", 24)(2, TrainingDetailPage_ng_container_0_ng_container_45_ion_list_1_ng_container_4_ion_note_2_Template, 2, 0, "ion-note", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const exerciseList_r4 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", exerciseList_r4.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", exerciseList_r4.length == 0);
  }
}
function TrainingDetailPage_ng_container_0_ng_container_45_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-list", 22)(1, "ion-item", 23);
    \u0275\u0275listener("click", function TrainingDetailPage_ng_container_0_ng_container_45_ion_list_1_Template_ion_item_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openTrainingExerciseModal());
    });
    \u0275\u0275elementStart(2, "ion-label");
    \u0275\u0275text(3, "\xDCbungen");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TrainingDetailPage_ng_container_0_ng_container_45_ion_list_1_ng_container_4_Template, 3, 2, "ng-container", 16);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(5, 2, ctx_r1.exerciseList$));
  }
}
function TrainingDetailPage_ng_container_0_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TrainingDetailPage_ng_container_0_ng_container_45_ion_list_1_Template, 6, 4, "ion-list", 17);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubList_r5 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.enableTrainingExercise(clubList_r5));
  }
}
function TrainingDetailPage_ng_container_0_ion_list_47_ng_container_5_ion_fab_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-fab-button", 30);
    \u0275\u0275listener("click", function TrainingDetailPage_ng_container_0_ion_list_47_ng_container_5_ion_fab_button_1_Template_ion_fab_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const training_r7 = \u0275\u0275nextContext(3).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggle(true, training_r7));
    });
    \u0275\u0275element(1, "ion-icon", 31);
    \u0275\u0275elementEnd();
  }
}
function TrainingDetailPage_ng_container_0_ion_list_47_ng_container_5_ion_fab_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-fab-button", 32);
    \u0275\u0275listener("click", function TrainingDetailPage_ng_container_0_ion_list_47_ng_container_5_ion_fab_button_2_Template_ion_fab_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const training_r7 = \u0275\u0275nextContext(3).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggle(true, training_r7));
    });
    \u0275\u0275element(1, "ion-icon", 33);
    \u0275\u0275elementEnd();
  }
}
function TrainingDetailPage_ng_container_0_ion_list_47_ng_container_5_ion_fab_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-fab-button", 34);
    \u0275\u0275listener("click", function TrainingDetailPage_ng_container_0_ion_list_47_ng_container_5_ion_fab_button_3_Template_ion_fab_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const training_r7 = \u0275\u0275nextContext(3).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggle(false, training_r7));
    });
    \u0275\u0275element(1, "ion-icon", 35);
    \u0275\u0275elementEnd();
  }
}
function TrainingDetailPage_ng_container_0_ion_list_47_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TrainingDetailPage_ng_container_0_ion_list_47_ng_container_5_ion_fab_button_1_Template, 2, 0, "ion-fab-button", 27)(2, TrainingDetailPage_ng_container_0_ion_list_47_ng_container_5_ion_fab_button_2_Template, 2, 0, "ion-fab-button", 28)(3, TrainingDetailPage_ng_container_0_ion_list_47_ng_container_5_ion_fab_button_3_Template, 2, 0, "ion-fab-button", 29);
    \u0275\u0275elementStart(4, "ion-label");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const training_r7 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", training_r7.status === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", training_r7.status === false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", training_r7.status === true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "common.my__status"));
  }
}
function TrainingDetailPage_ng_container_0_ion_list_47_ng_container_6_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275element(1, "ion-icon", 36);
    \u0275\u0275elementStart(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-button", 37);
    \u0275\u0275listener("click", function TrainingDetailPage_ng_container_0_ion_list_47_ng_container_6_ion_item_1_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const training_r7 = \u0275\u0275nextContext(3).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAll(true, training_r7));
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const training_r7 = \u0275\u0275nextContext(3).ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(4, 3, "common.noreply"), ": ", training_r7["unrespondedMembers"].length, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "common.alle_anmelden"), "");
  }
}
function TrainingDetailPage_ng_container_0_ion_list_47_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TrainingDetailPage_ng_container_0_ion_list_47_ng_container_6_ion_item_1_Template, 8, 7, "ion-item", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const teamAdminList_r11 = ctx.ngIf;
    const training_r7 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", training_r7["unrespondedMembers"].length > 0 && ctx_r1.isTeamAdmin(teamAdminList_r11, training_r7.teamId));
  }
}
function TrainingDetailPage_ng_container_0_ion_list_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 22)(1, "ion-list-header");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-item", 26);
    \u0275\u0275template(5, TrainingDetailPage_ng_container_0_ion_list_47_ng_container_5_Template, 7, 6, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TrainingDetailPage_ng_container_0_ion_list_47_ng_container_6_Template, 2, 1, "ng-container", 16);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const training_r7 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    const loadingStatus_r12 = \u0275\u0275reference(3);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "common.attendances__absences"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", training_r7.hasOwnProperty("status"))("ngIfElse", loadingStatus_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(7, 7, ctx_r1.teamAdminList$));
  }
}
function TrainingDetailPage_ng_container_0_ion_accordion_50_ion_item_sliding_7_ion_badge_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r15);
  }
}
function TrainingDetailPage_ng_container_0_ion_accordion_50_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-option", 49);
    \u0275\u0275listener("click", function TrainingDetailPage_ng_container_0_ion_accordion_50_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_1_Template_ion_item_option_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const member_r14 = \u0275\u0275nextContext(3).$implicit;
      const item_r17 = \u0275\u0275reference(1);
      const training_r7 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleItem(item_r17, true, training_r7, member_r14.id));
    });
    \u0275\u0275element(1, "ion-icon", 50);
    \u0275\u0275elementEnd();
  }
}
function TrainingDetailPage_ng_container_0_ion_accordion_50_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-option", 51);
    \u0275\u0275listener("click", function TrainingDetailPage_ng_container_0_ion_accordion_50_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_2_Template_ion_item_option_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const member_r14 = \u0275\u0275nextContext(3).$implicit;
      const item_r17 = \u0275\u0275reference(1);
      const training_r7 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleItem(item_r17, false, training_r7, member_r14.id));
    });
    \u0275\u0275element(1, "ion-icon", 52);
    \u0275\u0275elementEnd();
  }
}
function TrainingDetailPage_ng_container_0_ion_accordion_50_ion_item_sliding_7_ng_container_7_ion_item_options_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item-options", 46);
    \u0275\u0275template(1, TrainingDetailPage_ng_container_0_ion_accordion_50_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_1_Template, 2, 0, "ion-item-option", 47)(2, TrainingDetailPage_ng_container_0_ion_accordion_50_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_2_Template, 2, 0, "ion-item-option", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r14.status === false || member_r14.status === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r14.status === true || member_r14.status === null);
  }
}
function TrainingDetailPage_ng_container_0_ion_accordion_50_ion_item_sliding_7_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TrainingDetailPage_ng_container_0_ion_accordion_50_ion_item_sliding_7_ng_container_7_ion_item_options_1_Template, 3, 2, "ion-item-options", 45);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const teamAdminList_r19 = ctx.ngIf;
    const training_r7 = \u0275\u0275nextContext(3).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTeamAdmin(teamAdminList_r19, training_r7.teamId));
  }
}
function TrainingDetailPage_ng_container_0_ion_accordion_50_ion_item_sliding_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 2)(2, "ion-item", 42);
    \u0275\u0275element(3, "ion-icon", 43);
    \u0275\u0275elementStart(4, "ion-label", 6);
    \u0275\u0275listener("click", function TrainingDetailPage_ng_container_0_ion_accordion_50_ion_item_sliding_7_Template_ion_label_click_4_listener() {
      const member_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openMember(member_r14));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TrainingDetailPage_ng_container_0_ion_accordion_50_ion_item_sliding_7_ion_badge_6_Template, 2, 1, "ion-badge", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TrainingDetailPage_ng_container_0_ion_accordion_50_ion_item_sliding_7_ng_container_7_Template, 2, 1, "ng-container", 16);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", member_r14.firstName, " ", member_r14.lastName, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", member_r14.roles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(8, 4, ctx_r1.teamAdminList$));
  }
}
function TrainingDetailPage_ng_container_0_ion_accordion_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-accordion", 38)(1, "ion-item", 39)(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 40)(6, "ion-list");
    \u0275\u0275template(7, TrainingDetailPage_ng_container_0_ion_accordion_50_ion_item_sliding_7_Template, 9, 6, "ion-item-sliding", 41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const training_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(4, 3, "common.present"), ": ", training_r7["attendeeListTrue"].length, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", training_r7["attendeeListTrue"]);
  }
}
function TrainingDetailPage_ng_container_0_ion_accordion_51_ion_item_sliding_7_ion_badge_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r22 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r22);
  }
}
function TrainingDetailPage_ng_container_0_ion_accordion_51_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-option", 49);
    \u0275\u0275listener("click", function TrainingDetailPage_ng_container_0_ion_accordion_51_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_1_Template_ion_item_option_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const member_r21 = \u0275\u0275nextContext(3).$implicit;
      const item_r24 = \u0275\u0275reference(1);
      const training_r7 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleItem(item_r24, true, training_r7, member_r21.id));
    });
    \u0275\u0275element(1, "ion-icon", 50);
    \u0275\u0275elementEnd();
  }
}
function TrainingDetailPage_ng_container_0_ion_accordion_51_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-option", 51);
    \u0275\u0275listener("click", function TrainingDetailPage_ng_container_0_ion_accordion_51_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_2_Template_ion_item_option_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const member_r21 = \u0275\u0275nextContext(3).$implicit;
      const item_r24 = \u0275\u0275reference(1);
      const training_r7 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleItem(item_r24, false, training_r7, member_r21.id));
    });
    \u0275\u0275element(1, "ion-icon", 52);
    \u0275\u0275elementEnd();
  }
}
function TrainingDetailPage_ng_container_0_ion_accordion_51_ion_item_sliding_7_ng_container_7_ion_item_options_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item-options", 46);
    \u0275\u0275template(1, TrainingDetailPage_ng_container_0_ion_accordion_51_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_1_Template, 2, 0, "ion-item-option", 47)(2, TrainingDetailPage_ng_container_0_ion_accordion_51_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_2_Template, 2, 0, "ion-item-option", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r21 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r21.status === false || member_r21.status === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r21.status === true || member_r21.status === null);
  }
}
function TrainingDetailPage_ng_container_0_ion_accordion_51_ion_item_sliding_7_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TrainingDetailPage_ng_container_0_ion_accordion_51_ion_item_sliding_7_ng_container_7_ion_item_options_1_Template, 3, 2, "ion-item-options", 45);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const teamAdminList_r26 = ctx.ngIf;
    const training_r7 = \u0275\u0275nextContext(3).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTeamAdmin(teamAdminList_r26, training_r7.teamId));
  }
}
function TrainingDetailPage_ng_container_0_ion_accordion_51_ion_item_sliding_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 2)(2, "ion-item", 42);
    \u0275\u0275element(3, "ion-icon", 54);
    \u0275\u0275elementStart(4, "ion-label", 6);
    \u0275\u0275listener("click", function TrainingDetailPage_ng_container_0_ion_accordion_51_ion_item_sliding_7_Template_ion_label_click_4_listener() {
      const member_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openMember(member_r21));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TrainingDetailPage_ng_container_0_ion_accordion_51_ion_item_sliding_7_ion_badge_6_Template, 2, 1, "ion-badge", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TrainingDetailPage_ng_container_0_ion_accordion_51_ion_item_sliding_7_ng_container_7_Template, 2, 1, "ng-container", 16);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", member_r21.firstName, " ", member_r21.lastName, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", member_r21.roles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(8, 4, ctx_r1.teamAdminList$));
  }
}
function TrainingDetailPage_ng_container_0_ion_accordion_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-accordion", 53)(1, "ion-item", 39)(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 40)(6, "ion-list");
    \u0275\u0275template(7, TrainingDetailPage_ng_container_0_ion_accordion_51_ion_item_sliding_7_Template, 9, 6, "ion-item-sliding", 41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const training_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(4, 3, "common.absent"), ": ", training_r7["attendeeListFalse"].length, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", training_r7["attendeeListFalse"]);
  }
}
function TrainingDetailPage_ng_container_0_ion_accordion_52_ion_item_sliding_7_ion_badge_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r29 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r29);
  }
}
function TrainingDetailPage_ng_container_0_ion_accordion_52_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-option", 49);
    \u0275\u0275listener("click", function TrainingDetailPage_ng_container_0_ion_accordion_52_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_1_Template_ion_item_option_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const member_r28 = \u0275\u0275nextContext(3).$implicit;
      const item_r31 = \u0275\u0275reference(1);
      const training_r7 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleItem(item_r31, true, training_r7, member_r28.id));
    });
    \u0275\u0275element(1, "ion-icon", 50);
    \u0275\u0275elementEnd();
  }
}
function TrainingDetailPage_ng_container_0_ion_accordion_52_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-option", 51);
    \u0275\u0275listener("click", function TrainingDetailPage_ng_container_0_ion_accordion_52_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_2_Template_ion_item_option_click_0_listener() {
      \u0275\u0275restoreView(_r32);
      const member_r28 = \u0275\u0275nextContext(3).$implicit;
      const item_r31 = \u0275\u0275reference(1);
      const training_r7 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleItem(item_r31, false, training_r7, member_r28.id));
    });
    \u0275\u0275element(1, "ion-icon", 52);
    \u0275\u0275elementEnd();
  }
}
function TrainingDetailPage_ng_container_0_ion_accordion_52_ion_item_sliding_7_ng_container_7_ion_item_options_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item-options", 46);
    \u0275\u0275template(1, TrainingDetailPage_ng_container_0_ion_accordion_52_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_1_Template, 2, 0, "ion-item-option", 47)(2, TrainingDetailPage_ng_container_0_ion_accordion_52_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_2_Template, 2, 0, "ion-item-option", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r28 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r28.status === false || member_r28.status === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r28.status === true || member_r28.status === null);
  }
}
function TrainingDetailPage_ng_container_0_ion_accordion_52_ion_item_sliding_7_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TrainingDetailPage_ng_container_0_ion_accordion_52_ion_item_sliding_7_ng_container_7_ion_item_options_1_Template, 3, 2, "ion-item-options", 45);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const teamAdminList_r33 = ctx.ngIf;
    const training_r7 = \u0275\u0275nextContext(3).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTeamAdmin(teamAdminList_r33, training_r7.teamId));
  }
}
function TrainingDetailPage_ng_container_0_ion_accordion_52_ion_item_sliding_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 2)(2, "ion-item", 42);
    \u0275\u0275element(3, "ion-icon", 36);
    \u0275\u0275elementStart(4, "ion-label", 6);
    \u0275\u0275listener("click", function TrainingDetailPage_ng_container_0_ion_accordion_52_ion_item_sliding_7_Template_ion_label_click_4_listener() {
      const member_r28 = \u0275\u0275restoreView(_r27).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openMember(member_r28));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TrainingDetailPage_ng_container_0_ion_accordion_52_ion_item_sliding_7_ion_badge_6_Template, 2, 1, "ion-badge", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TrainingDetailPage_ng_container_0_ion_accordion_52_ion_item_sliding_7_ng_container_7_Template, 2, 1, "ng-container", 16);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r28 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", member_r28.firstName, " ", member_r28.lastName, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", member_r28.roles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(8, 4, ctx_r1.teamAdminList$));
  }
}
function TrainingDetailPage_ng_container_0_ion_accordion_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-accordion", 55)(1, "ion-item", 39)(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 40)(6, "ion-list");
    \u0275\u0275template(7, TrainingDetailPage_ng_container_0_ion_accordion_52_ion_item_sliding_7_Template, 9, 6, "ion-item-sliding", 41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const training_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(4, 3, "common.noreply"), ": ", training_r7["unrespondedMembers"].length, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", training_r7["unrespondedMembers"]);
  }
}
function TrainingDetailPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-header", 4)(2, "ion-toolbar")(3, "ion-title");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-buttons", 5)(7, "ion-button", 6);
    \u0275\u0275listener("click", function TrainingDetailPage_ng_container_0_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "ion-content")(11, "ion-header", 7)(12, "ion-toolbar")(13, "ion-title", 8);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "ion-list", 9)(17, "ion-item");
    \u0275\u0275element(18, "ion-icon", 10);
    \u0275\u0275elementStart(19, "ion-label", 11)(20, "h2");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "ion-item");
    \u0275\u0275element(23, "ion-icon", 12);
    \u0275\u0275elementStart(24, "ion-label")(25, "h2");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275pipe(28, "date");
    \u0275\u0275pipe(29, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "ion-item");
    \u0275\u0275element(31, "ion-icon", 13);
    \u0275\u0275elementStart(32, "ion-label", 11)(33, "h2");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "ion-item");
    \u0275\u0275element(36, "ion-icon", 14);
    \u0275\u0275elementStart(37, "ion-label", 11)(38, "h2");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "ion-item");
    \u0275\u0275element(41, "ion-icon", 15);
    \u0275\u0275elementStart(42, "ion-label", 11)(43, "h2");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(45, TrainingDetailPage_ng_container_0_ng_container_45_Template, 2, 1, "ng-container", 16);
    \u0275\u0275pipe(46, "async");
    \u0275\u0275template(47, TrainingDetailPage_ng_container_0_ion_list_47_Template, 8, 9, "ion-list", 17);
    \u0275\u0275elementStart(48, "ion-list", 9)(49, "ion-accordion-group", 18);
    \u0275\u0275template(50, TrainingDetailPage_ng_container_0_ion_accordion_50_Template, 8, 5, "ion-accordion", 19)(51, TrainingDetailPage_ng_container_0_ion_accordion_51_Template, 8, 5, "ion-accordion", 20)(52, TrainingDetailPage_ng_container_0_ion_accordion_52_Template, 8, 5, "ion-accordion", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const training_r7 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 23, "common.details"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 25, "common.close"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 27, "common.details"));
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(training_r7.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(27, 29, training_r7.date.toDate(), "dd.MM.YYYY "), " ", \u0275\u0275pipeBind2(28, 32, training_r7.timeFrom, "HH:mm"), " Uhr - ", \u0275\u0275pipeBind2(29, 35, training_r7.timeTo, "HH:mm"), " Uhr ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate3("", training_r7.location, " ", training_r7.streetAndNumber, " ", training_r7.city, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", training_r7.liga, " ", training_r7.teamName, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(training_r7.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(46, 38, ctx_r1.clubList$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFuture);
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("multiple", true)("value", \u0275\u0275pureFunction0(40, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", training_r7["attendeeListTrue"].length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", training_r7["attendeeListFalse"].length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", training_r7["unrespondedMembers"].length > 0);
  }
}
function TrainingDetailPage_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-skeleton-text", 56)(1, "ion-skeleton-text", 57);
  }
}
function TrainingDetailPage_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 4)(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275element(3, "ion-skeleton-text", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 5);
    \u0275\u0275element(5, "ion-skeleton-text", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "ion-content")(7, "ion-header", 7)(8, "ion-toolbar")(9, "ion-title", 8);
    \u0275\u0275element(10, "ion-skeleton-text", 60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "ion-list", 9)(12, "ion-item");
    \u0275\u0275element(13, "ion-icon", 10);
    \u0275\u0275elementStart(14, "ion-label", 11);
    \u0275\u0275element(15, "ion-skeleton-text", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "ion-item");
    \u0275\u0275element(17, "ion-icon", 12);
    \u0275\u0275elementStart(18, "ion-label");
    \u0275\u0275element(19, "ion-skeleton-text", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "ion-item");
    \u0275\u0275element(21, "ion-icon", 13);
    \u0275\u0275elementStart(22, "ion-label", 11);
    \u0275\u0275element(23, "ion-skeleton-text", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "ion-item");
    \u0275\u0275element(25, "ion-icon", 14);
    \u0275\u0275elementStart(26, "ion-label", 11);
    \u0275\u0275element(27, "ion-skeleton-text", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "ion-item");
    \u0275\u0275element(29, "ion-icon", 15);
    \u0275\u0275elementStart(30, "ion-label", 11);
    \u0275\u0275element(31, "ion-skeleton-text", 64)(32, "ion-skeleton-text", 57);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "ion-list", 22)(34, "ion-item")(35, "ion-label");
    \u0275\u0275element(36, "ion-skeleton-text", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "ion-skeleton-text", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "ion-list", 22)(39, "ion-list-header");
    \u0275\u0275element(40, "ion-skeleton-text", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ion-item");
    \u0275\u0275element(42, "ion-skeleton-text", 67);
    \u0275\u0275elementStart(43, "ion-label");
    \u0275\u0275element(44, "ion-skeleton-text", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "ion-item");
    \u0275\u0275element(46, "ion-icon", 68);
    \u0275\u0275elementStart(47, "ion-label");
    \u0275\u0275element(48, "ion-skeleton-text", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "ion-skeleton-text", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "ion-list", 9)(51, "ion-accordion-group", 18)(52, "ion-accordion", 38)(53, "ion-item", 39)(54, "ion-label");
    \u0275\u0275element(55, "ion-skeleton-text", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 40)(57, "ion-list")(58, "ion-item");
    \u0275\u0275element(59, "ion-icon", 71);
    \u0275\u0275elementStart(60, "ion-label");
    \u0275\u0275element(61, "ion-skeleton-text", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "ion-skeleton-text", 72)(63, "ion-skeleton-text", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "ion-item");
    \u0275\u0275element(65, "ion-icon", 71);
    \u0275\u0275elementStart(66, "ion-label");
    \u0275\u0275element(67, "ion-skeleton-text", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "ion-skeleton-text", 73);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(69, "ion-accordion", 53)(70, "ion-item", 39)(71, "ion-label");
    \u0275\u0275element(72, "ion-skeleton-text", 74);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "ion-accordion", 55)(74, "ion-item", 39)(75, "ion-label");
    \u0275\u0275element(76, "ion-skeleton-text", 66);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(11);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(22);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(12);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("multiple", true)("value", \u0275\u0275pureFunction0(7, _c0));
  }
}
var _TrainingDetailPage = class _TrainingDetailPage {
  constructor(modalCtrl, navParams, platform, userProfileService, fbService, trainingService, toastController, alertCtrl, authService, translate, exerciseService) {
    this.modalCtrl = modalCtrl;
    this.navParams = navParams;
    this.platform = platform;
    this.userProfileService = userProfileService;
    this.fbService = fbService;
    this.trainingService = trainingService;
    this.toastController = toastController;
    this.alertCtrl = alertCtrl;
    this.authService = authService;
    this.translate = translate;
    this.exerciseService = exerciseService;
    this.mode = "yes";
  }
  ngOnInit() {
    this.training = this.navParams.get("data");
    this.training$ = this.getTraining(this.training.teamId, this.training.id);
    this.exerciseList$ = this.exerciseService.getTeamTrainingExerciseRefs(this.training.teamId, this.training.id);
    this.clubList$ = this.fbService.getClubList();
    this.teamAdminList$ = this.fbService.getTeamAdminList();
  }
  ionViewDidEnter() {
  }
  ngOnDestroy() {
  }
  isTeamAdmin(teamAdminList, teamId) {
    return teamAdminList && teamAdminList.some((team) => team.id === teamId);
  }
  enableTrainingExercise(clubList) {
    return clubList && clubList.some((club) => club.hasFeatureTrainingExercise == true);
  }
  getTraining(teamId, trainingId) {
    return this.authService.getUser$().pipe(take(1), tap((user) => {
      this.user = user;
      if (!user)
        throw new Error("User not found");
    }), switchMap(() => this.trainingService.getTeamTrainingRef(teamId, trainingId)), switchMap((training) => {
      if (!training)
        return of(null);
      return this.fbService.getTeamRef(teamId).pipe(switchMap((team) => {
        if (!team)
          return of(null);
        return this.fbService.getTeamMemberRefs(teamId).pipe(switchMap((teamMembers) => {
          const teamMemberProfiles$ = teamMembers.map((member) => this.userProfileService.getUserProfileById(member.id).pipe(take(1), map((profile) => __spreadProps(__spreadValues(__spreadValues({}, member), profile), {
            // Spread profile to overwrite and add profile attributes
            firstName: profile.firstName || "Unknown",
            lastName: profile.lastName || "Unknown",
            roles: member.roles || []
          })), catchError((err) => {
            console.log(`Failed to fetch profile for team member ${member.id}:`, err);
            return of(__spreadProps(__spreadValues({}, member), { firstName: "Unknown", lastName: "Unknown", roles: member.roles || [], status: null }));
          })));
          return forkJoin(teamMemberProfiles$).pipe(
            map((teamMembersWithDetails) => teamMembersWithDetails.filter((member) => member !== void 0)),
            // Filtering out undefined entries
            switchMap((teamMembersWithDetails) => {
              return this.trainingService.getTeamTrainingsAttendeesRef(teamId, trainingId).pipe(map((attendees) => {
                const attendeeDetails = attendees.map((attendee) => {
                  const detail = teamMembersWithDetails.find((member) => member && member.id === attendee.id);
                  return detail ? __spreadProps(__spreadValues({}, detail), { status: attendee.status }) : null;
                }).filter((item) => item !== null);
                const attendeeListTrue = attendeeDetails.filter((att) => att.status === true).sort((a, b) => a.firstName.localeCompare(b.firstName));
                const attendeeListFalse = attendeeDetails.filter((att) => att.status === false).sort((a, b) => a.firstName.localeCompare(b.firstName));
                const respondedIds = new Set(attendeeDetails.map((att) => att.id));
                const unrespondedMembers = teamMembersWithDetails.filter((member) => !respondedIds.has(member.id)).map((member) => __spreadProps(__spreadValues({}, member), { status: null })).sort((a, b) => a.firstName.localeCompare(b.firstName));
                const userAttendee = attendeeDetails.find((att) => att.id === this.user.uid);
                const status = userAttendee ? userAttendee.status : null;
                return __spreadProps(__spreadValues({}, training), {
                  team,
                  // Add team details here
                  attendees: attendeeDetails,
                  attendeeListTrue,
                  attendeeListFalse,
                  unrespondedMembers,
                  status
                });
              }), catchError((err) => {
                console.error("Error fetching attendees:", err);
                return of(__spreadProps(__spreadValues({}, training), {
                  team,
                  // Add team details here
                  attendees: [],
                  attendeeListTrue: [],
                  attendeeListFalse: [],
                  unrespondedMembers: teamMembersWithDetails.filter((member) => member !== null).map((member) => __spreadProps(__spreadValues({}, member), { status: null })),
                  // Also ensure 'status: null' here for consistency
                  status: null
                }));
              }));
            })
          );
        }), catchError((err) => {
          console.error("Error fetching team members:", err);
          return of(__spreadProps(__spreadValues({}, training), {
            team,
            // Add team details here
            attendees: [],
            attendeeListTrue: [],
            attendeeListFalse: [],
            unrespondedMembers: [],
            status: null
          }));
        }));
      }));
    }), catchError((err) => {
      console.error("Error in getTrainingWithAttendees:", err);
      return of(null);
    }));
  }
  toggleAll(status, training) {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        message: "Sollen alle angemeldet werden?",
        header: "Alle anmelden",
        buttons: [
          {
            text: "Nein",
            role: "cancel",
            handler: () => {
            }
          },
          {
            role: "",
            text: "OK",
            handler: () => __async(this, null, function* () {
              for (let member of training["unrespondedMembers"]) {
                console.log(`Set Status ${status} for user ${this.user.uid} and team ${this.training.teamId} and training ${training.id}`);
                yield this.trainingService.setTeamTrainingAttendeeStatusAdmin(status, this.training.teamId, training.id, member.id).catch((e) => {
                  console.log(e.message);
                  this.toastActionError(e);
                });
              }
              this.presentToast();
            })
          }
        ]
      });
      alert.present();
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
  toggle(status, training) {
    return __async(this, null, function* () {
      console.log(`Set Status ${status} for user ${this.user.uid} and team ${training.teamId} and training ${training.id}`);
      const newStartDate = training.date.toDate();
      newStartDate.setHours(Number(training.timeFrom.substring(0, 2)));
      console.log("Grenzwert ");
      const trainingThreshold = training.team.trainingThreshold || 0;
      console.log(trainingThreshold);
      if (newStartDate.getTime() - (/* @__PURE__ */ new Date()).getTime() < 1e3 * 60 * 60 * trainingThreshold && status == false && trainingThreshold) {
        console.log("too late");
        yield this.tooLateToggle();
      } else {
        yield this.trainingService.setTeamTrainingAttendeeStatus(status, training.teamId, training.id);
        this.presentToast();
      }
    });
  }
  toggleItem(slidingItem, status, training, memberId) {
    return __async(this, null, function* () {
      slidingItem.closeOpened();
      console.log(`Set Status ${status} for user ${memberId} and team ${training.teamId} and training ${training.id}`);
      yield this.trainingService.setTeamTrainingAttendeeStatusAdmin(status, training.teamId, training.id, memberId);
      this.presentToast();
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
  openTrainingExerciseModal() {
    return __async(this, null, function* () {
      const modal = yield this.modalCtrl.create({
        component: TrainingExercisesPage,
        presentingElement: yield this.modalCtrl.getTop(),
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          training: this.training
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
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
  close() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(null, "close");
    });
  }
  confirm() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(this.training, "confirm");
    });
  }
};
_TrainingDetailPage.\u0275fac = function TrainingDetailPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrainingDetailPage)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(NavParams), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(UserProfileService), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(TrainingService), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ExerciseService));
};
_TrainingDetailPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrainingDetailPage, selectors: [["app-training-detail"]], inputs: { training: [0, "data", "training"], isFuture: "isFuture" }, standalone: false, decls: 6, vars: 4, consts: [["loadingStatus", ""], ["loading", ""], ["item", ""], [4, "ngIf", "ngIfElse"], [3, "translucent"], ["slot", "primary"], [3, "click"], ["collapse", "condense"], ["size", "large"], [3, "inset"], ["slot", "start", "name", "home-outline"], [1, "ion-text-wrap"], ["slot", "start", "name", "calendar-outline"], ["slot", "start", "name", "location-outline"], ["slot", "start", "name", "trophy-outline"], ["slot", "start", "name", "information-circle-outline"], [4, "ngIf"], ["lines", "none", 3, "inset", 4, "ngIf"], [3, "multiple", "value"], ["value", "yes", 4, "ngIf"], ["value", "no", 4, "ngIf"], ["value", "null", 4, "ngIf"], ["lines", "none", 3, "inset"], ["detail", "true", 3, "click"], ["slot", "end", 4, "ngIf"], ["slot", "end"], [1, "myclubStatus"], ["size", "small", "color", "warning", "slot", "start", 3, "click", 4, "ngIf"], ["size", "small", "color", "danger", "slot", "start", 3, "click", 4, "ngIf"], ["size", "small", "color", "success", "slot", "start", 3, "click", 4, "ngIf"], ["size", "small", "color", "warning", "slot", "start", 3, "click"], ["name", "help-circle"], ["size", "small", "color", "danger", "slot", "start", 3, "click"], ["name", "close-circle"], ["size", "small", "color", "success", "slot", "start", 3, "click"], ["name", "checkmark-circle"], ["color", "warning", "slot", "start", "name", "help-circle"], ["fill", "clear", 3, "click"], ["value", "yes"], ["slot", "header", "color", "light"], ["slot", "content"], [4, "ngFor", "ngForOf"], ["detail", "true"], ["color", "success", "slot", "start", "name", "checkmark-circle"], ["slot", "end", 4, "ngFor", "ngForOf"], ["side", "end", 4, "ngIf"], ["side", "end"], ["color", "success", 3, "click", 4, "ngIf"], ["color", "danger", 3, "click", 4, "ngIf"], ["color", "success", 3, "click"], ["slot", "icon-only", "name", "checkmark-circle"], ["color", "danger", 3, "click"], ["slot", "icon-only", "name", "close-circle"], ["value", "no"], ["color", "danger", "slot", "start", "name", "close-circle"], ["value", "null"], ["animated", "", 2, "width", "10%"], ["animated", "", 2, "width", "60%"], ["animated", "", 2, "width", "100px"], ["animated", "", 2, "width", "80px", "height", "20px", "margin", "0 10px"], ["animated", "", 2, "width", "150px"], ["animated", "", 2, "width", "70%"], ["animated", "", 2, "width", "85%"], ["animated", "", 2, "width", "90%"], ["animated", "", 2, "width", "80%"], ["slot", "end", "animated", "", 2, "width", "40px", "margin-right", "16px"], ["animated", "", 2, "width", "140px"], ["animated", "", "slot", "start", 2, "width", "40px", "height", "40px", "border-radius", "50%"], ["slot", "start", "name", "help-circle"], ["animated", "", 2, "width", "120px"], ["slot", "end", "animated", "", 2, "width", "80px"], ["slot", "start", "name", "checkmark-circle"], ["slot", "end", 2, "width", "60px", "margin", "0 8px"], ["slot", "end", 2, "width", "60px"], ["animated", "", 2, "width", "130px"]], template: function TrainingDetailPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TrainingDetailPage_ng_container_0_Template, 53, 41, "ng-container", 3);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275template(2, TrainingDetailPage_ng_template_2_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, TrainingDetailPage_ng_template_4_Template, 77, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const loading_r34 = \u0275\u0275reference(5);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 2, ctx.training$))("ngIfElse", loading_r34);
  }
}, dependencies: [NgForOf, NgIf, IonAccordion, IonAccordionGroup, IonBadge, IonButton, IonButtons, IonContent, IonFabButton, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonNote, IonSkeletonText, IonTitle, IonToolbar, AsyncPipe, DatePipe, TranslatePipe], encapsulation: 2 });
var TrainingDetailPage = _TrainingDetailPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrainingDetailPage, { className: "TrainingDetailPage", filePath: "src/app/pages/training/training-detail/training-detail.page.ts", lineNumber: 39 });
})();

// src/app/pages/training/trainings/trainings.page.ts
function TrainingsPage_ion_menu_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-menu-button");
  }
}
function TrainingsPage_ion_buttons_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-buttons", 10)(1, "ion-button", 11);
    \u0275\u0275listener("click", function TrainingsPage_ion_buttons_7_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "common.close"));
  }
}
function TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-icon", 29);
    \u0275\u0275listener("click", function TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_ion_icon_3_Template_ion_icon_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const training_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggle(true, training_r6));
    });
    \u0275\u0275elementEnd();
  }
}
function TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-icon", 30);
    \u0275\u0275listener("click", function TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_ion_icon_4_Template_ion_icon_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const training_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggle(true, training_r6));
    });
    \u0275\u0275elementEnd();
  }
}
function TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-icon", 31);
    \u0275\u0275listener("click", function TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_ion_icon_5_Template_ion_icon_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const training_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggle(false, training_r6));
    });
    \u0275\u0275elementEnd();
  }
}
function TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_h3_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3")(1, "ion-badge", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const training_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", training_r6.exercises.length, " \xDCbungen vorhanden");
  }
}
function TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_ion_item_option_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-option", 33);
    \u0275\u0275listener("click", function TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_ion_item_option_25_Template_ion_item_option_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const training_r6 = \u0275\u0275nextContext().$implicit;
      const item_r10 = \u0275\u0275reference(1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleItem(item_r10, true, training_r6));
    });
    \u0275\u0275element(1, "ion-icon", 34);
    \u0275\u0275elementEnd();
  }
}
function TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_ion_item_option_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-option", 35);
    \u0275\u0275listener("click", function TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_ion_item_option_26_Template_ion_item_option_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const training_r6 = \u0275\u0275nextContext().$implicit;
      const item_r10 = \u0275\u0275reference(1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleItem(item_r10, false, training_r6));
    });
    \u0275\u0275element(1, "ion-icon", 36);
    \u0275\u0275elementEnd();
  }
}
function TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_ng_container_27_ion_item_options_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-options", 38)(1, "ion-item-option", 39);
    \u0275\u0275listener("click", function TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_ng_container_27_ion_item_options_1_Template_ion_item_option_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const training_r6 = \u0275\u0275nextContext(2).$implicit;
      const item_r10 = \u0275\u0275reference(1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.copyTraining(item_r10, training_r6));
    });
    \u0275\u0275element(2, "ion-icon", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-item-option", 35);
    \u0275\u0275listener("click", function TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_ng_container_27_ion_item_options_1_Template_ion_item_option_click_3_listener() {
      \u0275\u0275restoreView(_r12);
      const training_r6 = \u0275\u0275nextContext(2).$implicit;
      const item_r10 = \u0275\u0275reference(1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteTraining(item_r10, training_r6));
    });
    \u0275\u0275element(4, "ion-icon", 41);
    \u0275\u0275elementEnd()();
  }
}
function TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_ng_container_27_ion_item_options_1_Template, 5, 0, "ion-item-options", 37);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const teamAdminList_r13 = ctx.ngIf;
    const training_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTeamAdmin(teamAdminList_r13, training_r6.teamId));
  }
}
function TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 1)(2, "ion-item", 18);
    \u0275\u0275template(3, TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_ion_icon_3_Template, 1, 0, "ion-icon", 19)(4, TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_ion_icon_4_Template, 1, 0, "ion-icon", 20)(5, TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_ion_icon_5_Template, 1, 0, "ion-icon", 21);
    \u0275\u0275elementStart(6, "ion-label", 11);
    \u0275\u0275listener("click", function TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_Template_ion_label_click_6_listener() {
      const training_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openTrainingDetailModal(training_r6, true));
    });
    \u0275\u0275elementStart(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h3");
    \u0275\u0275element(10, "ion-icon", 22);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275pipe(13, "date");
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h3");
    \u0275\u0275element(16, "ion-icon", 23);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "h3");
    \u0275\u0275element(19, "ion-icon", 24);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_h3_21_Template, 3, 1, "h3", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ion-badge", 25);
    \u0275\u0275listener("click", function TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_Template_ion_badge_click_22_listener() {
      const training_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openTrainingDetailModal(training_r6, true));
    });
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "ion-item-options", 26);
    \u0275\u0275template(25, TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_ion_item_option_25_Template, 2, 0, "ion-item-option", 27)(26, TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_ion_item_option_26_Template, 2, 0, "ion-item-option", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_ng_container_27_Template, 2, 1, "ng-container", 4);
    \u0275\u0275pipe(28, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const training_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", training_r6.status === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", training_r6.status === false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", training_r6.status === true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(training_r6.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(12, 17, training_r6.date.toDate(), "dd.MM.YYYY "), " ", \u0275\u0275pipeBind2(13, 20, training_r6.timeFrom, "HH:mm"), " Uhr - ", \u0275\u0275pipeBind2(14, 23, training_r6.timeTo, "HH:mm"), " Uhr ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3(" ", training_r6.location, " ", training_r6.streetAndNumber, " ", training_r6.city, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", training_r6.liga, " ", training_r6.teamName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", training_r6.exercises.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(training_r6.countAttendees);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", training_r6.status === false || training_r6.status === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", training_r6.status === true || training_r6.status === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(28, 26, ctx_r1.teamAdminList$));
  }
}
function TrainingsPage_ng_container_14_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-list", 14)(1, "ion-list-header")(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-button", 15);
    \u0275\u0275listener("click", function TrainingsPage_ng_container_14_ion_list_1_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleAll());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-item")(9, "ion-label", 3)(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "ion-label", 16)(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, TrainingsPage_ng_container_14_ion_list_1_ion_item_sliding_17_Template, 29, 28, "ion-item-sliding", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trainingList_r14 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "training.upcomming__training"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "common.alle_anmelden"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, "common.status"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 11, "common.participant"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", trainingList_r14);
  }
}
function TrainingsPage_ng_container_14_ion_list_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 42)(1, "ion-list-header")(2, "ion-label");
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "training.upcomming__training"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "training.no_training__found"), " ");
  }
}
function TrainingsPage_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TrainingsPage_ng_container_14_ion_list_1_Template, 18, 13, "ion-list", 12)(2, TrainingsPage_ng_container_14_ion_list_2_Template, 9, 6, "ion-list", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const trainingList_r14 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", trainingList_r14.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", trainingList_r14.length == 0);
  }
}
function TrainingsPage_ng_container_16_ion_list_1_ion_item_sliding_14_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 46);
  }
}
function TrainingsPage_ng_container_16_ion_list_1_ion_item_sliding_14_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 47);
  }
}
function TrainingsPage_ng_container_16_ion_list_1_ion_item_sliding_14_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 48);
  }
}
function TrainingsPage_ng_container_16_ion_list_1_ion_item_sliding_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 1)(2, "ion-item", 18);
    \u0275\u0275template(3, TrainingsPage_ng_container_16_ion_list_1_ion_item_sliding_14_ion_icon_3_Template, 1, 0, "ion-icon", 43)(4, TrainingsPage_ng_container_16_ion_list_1_ion_item_sliding_14_ion_icon_4_Template, 1, 0, "ion-icon", 44)(5, TrainingsPage_ng_container_16_ion_list_1_ion_item_sliding_14_ion_icon_5_Template, 1, 0, "ion-icon", 45);
    \u0275\u0275elementStart(6, "ion-label", 11);
    \u0275\u0275listener("click", function TrainingsPage_ng_container_16_ion_list_1_ion_item_sliding_14_Template_ion_label_click_6_listener() {
      const training_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openTrainingDetailModal(training_r16, false));
    });
    \u0275\u0275elementStart(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h3");
    \u0275\u0275element(10, "ion-icon", 23);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h3");
    \u0275\u0275element(13, "ion-icon", 22);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275pipe(16, "date");
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "h3");
    \u0275\u0275element(19, "ion-icon", 24);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "ion-badge", 25);
    \u0275\u0275listener("click", function TrainingsPage_ng_container_16_ion_list_1_ion_item_sliding_14_Template_ion_badge_click_21_listener() {
      const training_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openTrainingDetailModal(training_r16, false));
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "ion-item-options", 38)(24, "ion-item-option", 39);
    \u0275\u0275listener("click", function TrainingsPage_ng_container_16_ion_list_1_ion_item_sliding_14_Template_ion_item_option_click_24_listener() {
      const training_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const item_r17 = \u0275\u0275reference(1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.copyTraining(item_r17, training_r16));
    });
    \u0275\u0275element(25, "ion-icon", 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const training_r16 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", training_r16.status === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", training_r16.status === false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", training_r16.status === true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(training_r16.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", training_r16.location, " ", training_r16.streetAndNumber, " ", training_r16.city, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(15, 13, training_r16.date.toDate(), "dd.MM.YYYY "), " ", \u0275\u0275pipeBind2(16, 16, training_r16.timeFrom, "HH:mm"), " Uhr - ", \u0275\u0275pipeBind2(17, 19, training_r16.timeTo, "HH:mm"), " Uhr ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", training_r16.liga, " ", training_r16.teamName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(training_r16.countAttendees);
  }
}
function TrainingsPage_ng_container_16_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 14)(1, "ion-list-header")(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-item")(6, "ion-label", 3)(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ion-label", 16)(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, TrainingsPage_ng_container_16_ion_list_1_ion_item_sliding_14_Template, 26, 22, "ion-item-sliding", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trainingListPast_r18 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "training.past__training"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, "common.status"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 8, "common.participant"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", trainingListPast_r18);
  }
}
function TrainingsPage_ng_container_16_ion_list_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 42)(1, "ion-list-header")(2, "ion-label");
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "training.past__training"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "training.no_training__found"), " ");
  }
}
function TrainingsPage_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TrainingsPage_ng_container_16_ion_list_1_Template, 15, 10, "ion-list", 12)(2, TrainingsPage_ng_container_16_ion_list_2_Template, 9, 6, "ion-list", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const trainingListPast_r18 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", trainingListPast_r18.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", trainingListPast_r18.length == 0);
  }
}
function TrainingsPage_ng_container_18_ion_fab_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-fab", 50)(1, "ion-fab-button", 11);
    \u0275\u0275listener("click", function TrainingsPage_ng_container_18_ion_fab_1_Template_ion_fab_button_click_1_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openTrainingCreateModal());
    });
    \u0275\u0275element(2, "ion-icon", 51);
    \u0275\u0275elementEnd()();
  }
}
function TrainingsPage_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TrainingsPage_ng_container_18_ion_fab_1_Template, 3, 0, "ion-fab", 49);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const teamAdminList_r20 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", teamAdminList_r20.length > 0);
  }
}
function TrainingsPage_ng_template_20_ion_col_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-col", 53)(1, "ion-card")(2, "ion-card-header")(3, "ion-card-subtitle");
    \u0275\u0275element(4, "ion-skeleton-text", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-card-title");
    \u0275\u0275element(6, "ion-skeleton-text", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-card-content");
    \u0275\u0275element(8, "ion-skeleton-text", 55)(9, "ion-skeleton-text", 54)(10, "ion-skeleton-text", 55)(11, "ion-skeleton-text", 54)(12, "ion-skeleton-text", 55);
    \u0275\u0275elementEnd()()();
  }
}
function TrainingsPage_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list")(1, "ion-grid")(2, "ion-row");
    \u0275\u0275template(3, TrainingsPage_ng_template_20_ion_col_3_Template, 13, 0, "ion-col", 52);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.skeleton);
  }
}
var _TrainingsPage = class _TrainingsPage {
  // teamList$: Observable<Team[]>;
  // filterList: any[] = [];
  // filterValue: string = "";
  // private teamFilterSubscription: Subscription;
  // trainingListBackup$: Observable<Training[]>;
  // trainingListPastBackup$: Observable<Training[]>;
  // trainingListBackupSub: Subscription;
  // trainingListPastBackupSub: Subscription;
  constructor(toastController, modalController, authService, fbService, trainingService, menuCtrl, alertCtrl, cdr, translate, router, activatedRoute, exerciseService) {
    this.toastController = toastController;
    this.modalController = modalController;
    this.authService = authService;
    this.fbService = fbService;
    this.trainingService = trainingService;
    this.menuCtrl = menuCtrl;
    this.alertCtrl = alertCtrl;
    this.cdr = cdr;
    this.translate = translate;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.exerciseService = exerciseService;
    this.skeleton = new Array(12);
    this.menuCtrl.enable(true, "menu");
  }
  ngOnInit() {
    this.trainingList$ = this.getTeamTraining();
    this.trainingListPast$ = this.getTeamTrainingPast();
    this.teamAdminList$ = this.fbService.getTeamAdminList();
    this.handleNavigationData();
    this.subscription = this.trainingList$.pipe(tap((trainings) => __async(this, null, function* () {
      const training = trainings[0];
      console.log("Widget Value for Key=nextTraining: ", training == null ? void 0 : training.name);
      try {
        yield MyClubAppWidget.setItem({ key: "nextTraining", value: training == null ? void 0 : training.name, group: "group.app.myclub.default" });
      } catch (error) {
        console.error("Widget Error setItem: ", error);
      }
      try {
        yield MyClubAppWidget.reloadAllTimelines();
        yield MyClubAppWidget.reloadTimelines({ ofKind: "AppWidget" });
      } catch (error) {
        console.error("Widget Error reloadTimelines: ", error);
      }
    }))).subscribe();
  }
  ngOnDestroy() {
    if (this.activatedRouteSub) {
      this.activatedRouteSub.unsubscribe();
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  isTeamAdmin(teamAdminList, teamId) {
    return teamAdminList && teamAdminList.some((team) => team.id === teamId);
  }
  close() {
    return __async(this, null, function* () {
      return yield this.modalController.dismiss(null, "close");
    });
  }
  handleNavigationData() {
    this.activatedRouteSub = this.activatedRoute.url.subscribe((data) => {
      if (this.router.getCurrentNavigation().extras && this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state["type"] === "training") {
        const pushData = this.router.getCurrentNavigation().extras.state;
        console.log("PUSHDATA " + pushData);
        let training = {
          id: pushData["id"],
          name: "",
          description: "",
          location: "",
          streetAndNumber: "",
          postalCode: "",
          city: "",
          date: Timestamp.now(),
          timeFrom: "",
          timeTo: "",
          startDate: "",
          endDate: "",
          repeatAmount: "",
          repeatFrequency: "",
          teamId: pushData["teamId"],
          teamName: "",
          liga: "",
          status: false,
          countAttendees: 0,
          attendees: void 0,
          exercises: void 0
        };
        this.openTrainingDetailModal(training, true);
      } else {
        console.log("no data");
      }
    });
  }
  getTeamTraining() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user)
          return of([]);
        return this.fbService.getUserTeamRefs(user);
      }),
      // tap((teams) => console.log("Teams:", teams)),
      mergeMap((teams) => {
        if (this.team && this.team.id) {
          teams.push({ id: this.team.id });
        } else if (teams.length === 0) {
          return of([]);
        }
        ;
        const relevantTeams = this.team && this.team.id ? teams.filter((team) => team.id === this.team.id) : teams;
        const teamMembersMap$ = combineLatest(relevantTeams.map((team) => this.fbService.getTeamMemberRefs(team.id).pipe(map((members) => ({ teamId: team.id, members }))))).pipe(
          map((teamMembers) => teamMembers.reduce((acc, curr) => {
            acc[curr.teamId] = curr.members;
            return acc;
          }, {})),
          shareReplay(1)
          // Cache das Ergebnis
        );
        return combineLatest([
          teamMembersMap$,
          combineLatest(relevantTeams.map((team) => {
            return this.trainingService.getTeamTrainingsRefs(team.id).pipe(
              // ... existing training service code ...
              switchMap((teamTrainings) => {
                if (teamTrainings.length === 0)
                  return of([]);
                return combineLatest(teamTrainings.map((training) => combineLatest([
                  this.trainingService.getTeamTrainingsAttendeesRef(team.id, training.id),
                  this.exerciseService.getTeamTrainingExerciseRefs(team.id, training.id),
                  this.fbService.getTeamRef(team.id),
                  of(team.id)
                  // Übergebe die teamId statt erneut Members zu laden
                ]).pipe(map(([attendees, exercises, teamDetails, teamId]) => ({
                  training,
                  attendees,
                  exercises,
                  teamDetails,
                  teamId
                })))));
              })
            );
          }))
        ]).pipe(map(([teamMembersMap, teamsTrainings]) => {
          const flattenedTrainings = teamsTrainings.flat();
          return flattenedTrainings.map((item) => {
            var _a;
            const teamMembers = teamMembersMap[item.teamId] || [];
            const validAttendees = item.attendees.filter((att) => att.status === true && teamMembers.some((member) => member.id === att.id));
            return __spreadProps(__spreadValues({}, item.training), {
              attendees: item.attendees,
              exercises: item.exercises,
              team: item.teamDetails || {},
              status: ((_a = item.attendees.find((att) => att.id == this.user.uid)) == null ? void 0 : _a.status) ?? null,
              countAttendees: validAttendees.length,
              teamId: item.teamId
            });
          });
        }), map((allTrainings) => allTrainings.sort((a, b) => Timestamp.fromMillis(a.startDate).seconds - Timestamp.fromMillis(b.startDate).seconds)));
      }),
      catchError((err) => {
        console.error("Error in getTeamTrainingsUpcoming:", err);
        return of([]);
      })
    );
  }
  getTeamTrainingPast() {
    return this.authService.getUser$().pipe(take(1), tap((user) => {
      this.user = user;
    }), switchMap((user) => {
      if (!user)
        return of([]);
      return this.fbService.getUserTeamRefs(user);
    }), mergeMap((teams) => {
      if (this.team && this.team.id) {
        teams.push({ id: this.team.id });
      } else if (teams.length === 0) {
        return of([]);
      }
      ;
      const relevantTeams = this.team && this.team.id ? teams.filter((team) => team.id === this.team.id) : teams;
      const teamMembersMap$ = combineLatest(relevantTeams.map((team) => this.fbService.getTeamMemberRefs(team.id).pipe(map((members) => ({ teamId: team.id, members }))))).pipe(map((teamMembers) => teamMembers.reduce((acc, curr) => {
        acc[curr.teamId] = curr.members;
        return acc;
      }, {})), shareReplay(1));
      return combineLatest([
        teamMembersMap$,
        combineLatest(relevantTeams.map((team) => {
          return this.trainingService.getTeamTrainingsPastRefs(team.id).pipe(catchError((err) => {
            console.error("Permission error in fetching getTeamTrainingsRefs:", team.id, err);
            return of([]);
          }), switchMap((teamTrainings) => {
            if (teamTrainings.length === 0)
              return of([]);
            return combineLatest(teamTrainings.map((training) => combineLatest([
              this.trainingService.getTeamTrainingsAttendeesRef(team.id, training.id).pipe(catchError((err) => {
                console.error("Permission error in fetching getTeamTrainingsAttendeesRef:", err);
                return of([]);
              })),
              this.exerciseService.getTeamTrainingExerciseRefs(team.id, training.id).pipe(catchError((err) => {
                console.error("Permission error in fetching getTeamTrainingExerciseRefs:", err);
                return of([]);
              })),
              this.fbService.getTeamRef(team.id).pipe(catchError((err) => {
                console.error("Permission error in fetching getTeamRef:", err);
                return of({});
              })),
              of(team.id)
              // Übergebe die teamId statt erneut Members zu laden
            ]).pipe(map(([attendees, exercises, teamDetails, teamId]) => ({
              training,
              attendees,
              exercises,
              teamDetails,
              teamId
            })))));
          }));
        }))
      ]).pipe(map(([teamMembersMap, teamsTrainings]) => {
        const flattenedTrainings = teamsTrainings.flat();
        return flattenedTrainings.map((item) => {
          var _a;
          const teamMembers = teamMembersMap[item.teamId] || [];
          const validAttendees = item.attendees.filter((att) => att.status === true && teamMembers.some((member) => member.id === att.id));
          return __spreadProps(__spreadValues({}, item.training), {
            attendees: item.attendees,
            exercises: item.exercises,
            team: item.teamDetails || {},
            status: ((_a = item.attendees.find((att) => att.id == this.user.uid)) == null ? void 0 : _a.status) ?? null,
            countAttendees: validAttendees.length,
            teamId: item.teamId
          });
        });
      }), map((allTrainings) => allTrainings.sort((b, a) => Timestamp.fromMillis(a.startDate).seconds - Timestamp.fromMillis(b.startDate).seconds)));
    }), catchError((err) => {
      console.error("Error in getTeamTrainingsUpcoming:", err);
      return of([]);
    }));
  }
  openTrainingDetailModal(training, isFuture) {
    return __async(this, null, function* () {
      const modal = yield this.modalController.create({
        component: TrainingDetailPage,
        presentingElement: yield this.modalController.getTop(),
        // presentingElement: this.routerOutlet.nativeEl,
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          data: training,
          isFuture
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
  openTrainingCreateModal() {
    return __async(this, null, function* () {
      const modal = yield this.modalController.create({
        component: TrainingCreatePage,
        // presentingElement: this.routerOutlet.nativeEl,
        presentingElement: yield this.modalController.getTop(),
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
  copyTraining(slidingItem, training) {
    return __async(this, null, function* () {
      slidingItem.closeOpened();
      const modal = yield this.modalController.create({
        component: TrainingCreatePage,
        // presentingElement: this.routerOutlet.nativeEl,
        presentingElement: yield this.modalController.getTop(),
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          data: training
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
  deleteTraining(slidingItem, training) {
    return __async(this, null, function* () {
      slidingItem.closeOpened();
      yield this.trainingService.deleteTeamTraining(training.teamId, training.id);
      const toast = yield this.toastController.create({
        message: yield lastValueFrom(this.translate.get("common.success__training_deleted")),
        color: "danger",
        duration: 1500,
        position: "top"
      });
      toast.present();
    });
  }
  toggleAll() {
    return __async(this, null, function* () {
      try {
        const trainingList = yield lastValueFrom(this.trainingList$.pipe(take(1)));
        for (const training of trainingList) {
          console.log(`Set Status true for user ${this.user.uid} and team ${training.teamId} and training ${training.id}`);
          yield this.trainingService.setTeamTrainingAttendeeStatus(true, training.teamId, training.id);
        }
        yield this.presentToast();
      } catch (error) {
        console.error("Error during toggleAll operation:", error);
      }
    });
  }
  toggle(status, training) {
    return __async(this, null, function* () {
      console.log(`Set Status ${status} for user ${this.user.uid} and team ${training.teamId} and training ${training.id}`);
      const newStartDate = training.date.toDate();
      newStartDate.setHours(Number(training.timeFrom.substring(0, 2)));
      console.log("Grenzwert ");
      const trainingThreshold = training.team.trainingThreshold || 0;
      console.log(trainingThreshold);
      if (newStartDate.getTime() - (/* @__PURE__ */ new Date()).getTime() < 1e3 * 60 * 60 * trainingThreshold && status == false && trainingThreshold) {
        console.log("too late");
        yield this.tooLateToggle();
      } else {
        yield this.trainingService.setTeamTrainingAttendeeStatus(status, training.teamId, training.id);
        this.presentToast();
      }
    });
  }
  toggleItem(slidingItem, status, training) {
    return __async(this, null, function* () {
      slidingItem.closeOpened();
      console.log(`Set Status ${status} for user ${this.user.uid} and team ${training.teamId} and training ${training.id}`);
      const newStartDate = training.date.toDate();
      newStartDate.setHours(Number(training.timeFrom.substring(0, 2)));
      console.log("Grenzwert ");
      const trainingThreshold = training.team.trainingThreshold || 0;
      console.log(trainingThreshold);
      if (newStartDate.getTime() - (/* @__PURE__ */ new Date()).getTime() < 1e3 * 60 * 60 * trainingThreshold && status == false && trainingThreshold) {
        console.log("too late");
        yield this.tooLateToggle();
      } else {
        yield this.trainingService.setTeamTrainingAttendeeStatus(status, training.teamId, training.id);
        this.presentToast();
      }
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
};
_TrainingsPage.\u0275fac = function TrainingsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrainingsPage)(\u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(TrainingService), \u0275\u0275directiveInject(MenuController), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ExerciseService));
};
_TrainingsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrainingsPage, selectors: [["app-trainings"]], inputs: { team: "team", isModal: "isModal" }, standalone: false, decls: 22, vars: 21, consts: [["loading", ""], ["item", ""], [3, "translucent"], ["slot", "start"], [4, "ngIf"], ["slot", "primary", 4, "ngIf"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], [4, "ngIf", "ngIfElse"], ["slot", "primary"], [3, "click"], ["lines", "full", 4, "ngIf"], ["class", "ion-padding", 4, "ngIf"], ["lines", "full"], ["size", "small", "fill", "clear", 3, "click"], ["slot", "end"], [4, "ngFor", "ngForOf"], ["type", "button", "detail", "true"], ["slot", "icon-only", "color", "warning", "slot", "start", "name", "help-circle", 3, "click", 4, "ngIf"], ["slot", "icon-only", "color", "danger", "slot", "start", "name", "close-circle", 3, "click", 4, "ngIf"], ["slot", "icon-only", "color", "success", "slot", "start", "name", "checkmark-circle", 3, "click", 4, "ngIf"], ["slot", "icon-only", "name", "calendar-outline"], ["slot", "icon-only", "name", "location-outline"], ["slot", "icon-only", "name", "trophy-outline"], ["slot", "end", "color", "primary", 3, "click"], ["side", "start"], ["color", "success", 3, "click", 4, "ngIf"], ["color", "danger", 3, "click", 4, "ngIf"], ["slot", "icon-only", "color", "warning", "slot", "start", "name", "help-circle", 3, "click"], ["slot", "icon-only", "color", "danger", "slot", "start", "name", "close-circle", 3, "click"], ["slot", "icon-only", "color", "success", "slot", "start", "name", "checkmark-circle", 3, "click"], ["color", "light"], ["color", "success", 3, "click"], ["slot", "icon-only", "name", "checkmark-circle"], ["color", "danger", 3, "click"], ["slot", "icon-only", "name", "close-circle"], ["side", "end", 4, "ngIf"], ["side", "end"], ["color", "medium", 3, "click"], ["slot", "icon-only", "name", "copy-outline"], ["slot", "icon-only", "name", "trash"], [1, "ion-padding"], ["slot", "icon-only", "color", "warning", "slot", "start", "name", "help-circle", 4, "ngIf"], ["slot", "icon-only", "color", "danger", "slot", "start", "name", "close-circle", 4, "ngIf"], ["slot", "icon-only", "color", "success", "slot", "start", "name", "checkmark-circle", 4, "ngIf"], ["slot", "icon-only", "color", "warning", "slot", "start", "name", "help-circle"], ["slot", "icon-only", "color", "danger", "slot", "start", "name", "close-circle"], ["slot", "icon-only", "color", "success", "slot", "start", "name", "checkmark-circle"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["name", "add-outline"], ["size-lg", "4", "size-md", "6", "size-sm", "6", "size", "12", 4, "ngFor", "ngForOf"], ["size-lg", "4", "size-md", "6", "size-sm", "6", "size", "12"], ["animated", "", 2, "width", "60%"], ["animated", "", 2, "width", "80%"]], template: function TrainingsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 2)(1, "ion-toolbar")(2, "ion-buttons", 3);
    \u0275\u0275template(3, TrainingsPage_ion_menu_button_3_Template, 1, 0, "ion-menu-button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-title");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TrainingsPage_ion_buttons_7_Template, 4, 3, "ion-buttons", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-content", 6)(9, "ion-header", 7)(10, "ion-toolbar")(11, "ion-title", 8);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, TrainingsPage_ng_container_14_Template, 3, 2, "ng-container", 9);
    \u0275\u0275pipe(15, "async");
    \u0275\u0275template(16, TrainingsPage_ng_container_16_Template, 3, 2, "ng-container", 9);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275template(18, TrainingsPage_ng_container_18_Template, 2, 1, "ng-container", 4);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, TrainingsPage_ng_template_20_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const loading_r21 = \u0275\u0275reference(21);
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx.isModal);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 11, "common.training"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.isModal);
    \u0275\u0275advance();
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 13, "common.training"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(15, 15, ctx.trainingList$))("ngIfElse", loading_r21);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(17, 17, ctx.trainingListPast$))("ngIfElse", loading_r21);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(19, 19, ctx.teamAdminList$));
  }
}, dependencies: [NgForOf, NgIf, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonMenuButton, IonNote, IonRow, IonSkeletonText, IonTitle, IonToolbar, AsyncPipe, DatePipe, TranslatePipe], encapsulation: 2 });
var TrainingsPage = _TrainingsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrainingsPage, { className: "TrainingsPage", filePath: "src/app/pages/training/trainings/trainings.page.ts", lineNumber: 48 });
})();

export {
  TeamExercisesPage,
  TrainingsPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS90cmFpbmluZy5zZXJ2aWNlLnRzIiwgInNyYy9hcHAvcGFnZXMvdHJhaW5pbmcvdHJhaW5pbmctY3JlYXRlL3RyYWluaW5nLWNyZWF0ZS5wYWdlLnRzIiwgInNyYy9hcHAvcGFnZXMvdHJhaW5pbmcvdHJhaW5pbmctY3JlYXRlL3RyYWluaW5nLWNyZWF0ZS5wYWdlLmh0bWwiLCAic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS9leGVyY2lzZS5zZXJ2aWNlLnRzIiwgInNyYy9hcHAvcGFnZXMvdGVhbS90ZWFtLWV4ZXJjaXNlcy90ZWFtLWV4ZXJjaXNlcy5wYWdlLnRzIiwgInNyYy9hcHAvcGFnZXMvdGVhbS90ZWFtLWV4ZXJjaXNlcy90ZWFtLWV4ZXJjaXNlcy5wYWdlLmh0bWwiLCAic3JjL2FwcC9wYWdlcy90cmFpbmluZy90cmFpbmluZy1leGVyY2lzZXMvdHJhaW5pbmctZXhlcmNpc2VzLnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy90cmFpbmluZy90cmFpbmluZy1leGVyY2lzZXMvdHJhaW5pbmctZXhlcmNpc2VzLnBhZ2UuaHRtbCIsICJzcmMvYXBwL3BhZ2VzL3RyYWluaW5nL3RyYWluaW5nLWRldGFpbC90cmFpbmluZy1kZXRhaWwucGFnZS50cyIsICJzcmMvYXBwL3BhZ2VzL3RyYWluaW5nL3RyYWluaW5nLWRldGFpbC90cmFpbmluZy1kZXRhaWwucGFnZS5odG1sIiwgInNyYy9hcHAvcGFnZXMvdHJhaW5pbmcvdHJhaW5pbmdzL3RyYWluaW5ncy5wYWdlLnRzIiwgInNyYy9hcHAvcGFnZXMvdHJhaW5pbmcvdHJhaW5pbmdzL3RyYWluaW5ncy5wYWdlLmh0bWwiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBsaW1pdCxcbiAgVGltZXN0YW1wLFxuICBGaXJlc3RvcmUsXG4gIGFkZERvYyxcbiAgY29sbGVjdGlvbixcbiAgY29sbGVjdGlvbkRhdGEsXG4gIGRvYyxcbiAgc2V0RG9jLFxuICBxdWVyeSxcbiAgd2hlcmUsXG4gIGRvY0RhdGEsXG59IGZyb20gXCJAYW5ndWxhci9maXJlL2ZpcmVzdG9yZVwiO1xuXG4vLyBpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvY29tcGF0L2FwcCc7XG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxuICBTdWJzY3JpcHRpb24sXG59IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUcmFpbmluZyB9IGZyb20gXCJzcmMvYXBwL21vZGVscy90cmFpbmluZ1wiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4uL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IGRlbGV0ZURvYywgb3JkZXJCeSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgY2xhc3MgVHJhaW5pbmdTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICB0ZWFtTGlzdDogYW55W10gPSBbXTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmaXJlc3RvcmU6IEZpcmVzdG9yZSA9IGluamVjdChGaXJlc3RvcmUpLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmJTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2VcbiAgKSB7fVxuXG4gIGFzeW5jIHNldENyZWF0ZVRyYWluaW5nKHRyYWluaW5nOiBUcmFpbmluZykge1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLmF1dGhTZXJ2aWNlLmF1dGguY3VycmVudFVzZXI7XG4gICAgLy8gY29uc29sZS5sb2coXCJ0cmFpbmluZ1wiKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0cmFpbmluZyk7XG4gICAgcmV0dXJuIGFkZERvYyhcbiAgICAgIGNvbGxlY3Rpb24odGhpcy5maXJlc3RvcmUsIGB1c2VyUHJvZmlsZS8ke3VzZXIudWlkfS90cmFpbmluZ3NgKSxcbiAgICAgIHRyYWluaW5nXG4gICAgKTtcbiAgfVxuXG4gIGdldFRlYW1UcmFpbmluZ1JlZih0ZWFtSWQ6IHN0cmluZywgdHJhaW5pbmdJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxUcmFpbmluZz4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGBSZWFkIFRlYW0gR2FtZXMgQXR0ZW5kZWVzIExpc3QgUmVmICR7dGVhbUlkfSB3aXRoIGdhbWUgJHtnYW1lSWR9YClcbiAgICBjb25zdCBnYW1lUmVmID0gZG9jKFxuICAgICAgdGhpcy5maXJlc3RvcmUsXG4gICAgICBgdGVhbXMvJHt0ZWFtSWR9L3RyYWluaW5ncy8ke3RyYWluaW5nSWR9YFxuICAgICk7XG4gICAgcmV0dXJuIGRvY0RhdGEoZ2FtZVJlZiwgeyBpZEZpZWxkOiBcImlkXCIgfSkgYXMgT2JzZXJ2YWJsZTxUcmFpbmluZz47XG4gIH1cblxuICAvKiBURUFNIFRyYWluaW5nUyAqL1xuICBnZXRUZWFtVHJhaW5pbmdzUmVmcyh0ZWFtSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VHJhaW5pbmdbXT4ge1xuICAgIGNvbnNvbGUubG9nKGBSZWFkIFRlYW0gVHJhaW5pbmdzIExpc3QgUmVmICR7dGVhbUlkfWApXG4gICAgY29uc3QgdHJhaW5pbmdzUmVmTGlzdCA9IGNvbGxlY3Rpb24oXG4gICAgICB0aGlzLmZpcmVzdG9yZSxcbiAgICAgIGB0ZWFtcy8ke3RlYW1JZH0vdHJhaW5pbmdzYFxuICAgICk7XG4gICAgY29uc3QgcSA9IHF1ZXJ5KFxuICAgICAgdHJhaW5pbmdzUmVmTGlzdCxcbiAgICAgIHdoZXJlKFxuICAgICAgICBcImRhdGVcIiwgLy8gZGF0ZSA9IGVuZERhdGVcbiAgICAgICAgXCI+PVwiLFxuICAgICAgICBUaW1lc3RhbXAuZnJvbURhdGUobmV3IERhdGUoRGF0ZS5ub3coKSAtIDEwMDAgKiAzNjAwICAqIDEpKSAvLyAxIEhvdXIgYWZ0ZXIgdHJhaW5pbmcgZW5kc1xuICAgICAgKVxuICAgICAgLG9yZGVyQnkoXCJkYXRlXCIsIFwiYXNjXCIpLFxuICAgICk7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb25EYXRhKHEsIHsgaWRGaWVsZDogXCJpZFwiIH0pIGFzIHVua25vd24gYXMgT2JzZXJ2YWJsZTxcbiAgICAgIFRyYWluaW5nW11cbiAgICA+O1xuICB9XG5cbiAgLy8gUEFTVCAyMCBFbnRyaWVzXG4gIGdldFRlYW1UcmFpbmluZ3NQYXN0UmVmcyh0ZWFtSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VHJhaW5pbmdbXT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGBSZWFkIFRlYW0gVHJhaW5pbmdzIExpc3QgUmVmICR7dGVhbUlkfWApXG4gICAgY29uc3QgdHJhaW5pbmdzUmVmTGlzdCA9IGNvbGxlY3Rpb24oXG4gICAgICB0aGlzLmZpcmVzdG9yZSxcbiAgICAgIGB0ZWFtcy8ke3RlYW1JZH0vdHJhaW5pbmdzYFxuICAgICk7XG4gICAgY29uc3QgcSA9IHF1ZXJ5KFxuICAgICAgdHJhaW5pbmdzUmVmTGlzdCxcbiAgICAgIHdoZXJlKFxuICAgICAgICBcImRhdGVcIiwgLy8gIGRhdGUgPSBlbmREYXRlIG9mIHRyYWluaW5nXG4gICAgICAgIFwiPFwiLFxuICAgICAgICBUaW1lc3RhbXAuZnJvbURhdGUobmV3IERhdGUoRGF0ZS5ub3coKSkpIC8vIHNvZm9ydCBhbHMgXCJ2ZXJnYW5nZW5cIiBhbnplaWdlblxuICAgICAgKSxcbiAgICAgIG9yZGVyQnkoXCJkYXRlXCIsIFwiZGVzY1wiKSxcbiAgICAgIGxpbWl0KDIwKSBcbiAgICApOyBcbiAgICByZXR1cm4gY29sbGVjdGlvbkRhdGEocSwgeyBpZEZpZWxkOiBcImlkXCIgfSkgYXMgdW5rbm93biBhcyBPYnNlcnZhYmxlPFxuICAgICAgVHJhaW5pbmdbXVxuICAgID47XG4gIH1cblxuICAvKiBDTFVCIFRyYWluaW5nU1xuICBnZXRDbHViVHJhaW5pbmdzUmVmKGNsdWJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxUcmFpbmluZz4ge1xuICAgIGNvbnN0IHRyYWluaW5nc1JlZkxpc3QgPSBjb2xsZWN0aW9uKFxuICAgICAgdGhpcy5maXJlc3RvcmUsXG4gICAgICBgY2x1Yi8ke2NsdWJJZH0vdHJhaW5pbmdzYFxuICAgICk7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb25EYXRhKHRyYWluaW5nc1JlZkxpc3QsIHtcbiAgICAgIGlkRmllbGQ6IFwiaWRcIixcbiAgICB9KSBhcyB1bmtub3duIGFzIE9ic2VydmFibGU8VHJhaW5pbmc+O1xuICB9ICovXG5cbiAgLyogVEVBTSBUcmFpbmluZ1MgQVRURU5ERUVTICovXG4gIGdldFRlYW1UcmFpbmluZ3NBdHRlbmRlZXNSZWYoXG4gICAgdGVhbUlkOiBzdHJpbmcsXG4gICAgdHJhaW5pbmdJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhgUmVhZCBUZWFtIFRyYWluaW5ncyBBdHRlbmRlZXMgTGlzdCBSZWYgJHt0ZWFtSWR9IHdpdGggVHJhaW5pbmcgJHt0cmFpbmluZ0lkfWApXG4gICAgY29uc3QgYXR0ZW5kZWVzUmVmTGlzdCA9IGNvbGxlY3Rpb24oXG4gICAgICB0aGlzLmZpcmVzdG9yZSxcbiAgICAgIGB0ZWFtcy8ke3RlYW1JZH0vdHJhaW5pbmdzLyR7dHJhaW5pbmdJZH0vYXR0ZW5kZWVzYFxuICAgICk7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb25EYXRhKGF0dGVuZGVlc1JlZkxpc3QsIHtcbiAgICAgIGlkRmllbGQ6IFwiaWRcIixcbiAgICB9KSBhcyB1bmtub3duIGFzIE9ic2VydmFibGU8YW55W10+O1xuICB9XG5cbiAgLyogVEVBTSBUcmFpbmluZ1MgQVRURU5ERUUgU3RhdHVzICovXG4gIGFzeW5jIHNldFRlYW1UcmFpbmluZ0F0dGVuZGVlU3RhdHVzKFxuICAgIHN0YXR1czogYm9vbGVhbixcbiAgICB0ZWFtSWQ6IHN0cmluZyxcbiAgICB0cmFpbmluZ0lkOiBzdHJpbmdcbiAgKSB7XG4gICAgY29uc3QgdXNlciA9IHRoaXMuYXV0aFNlcnZpY2UuYXV0aC5jdXJyZW50VXNlcjtcbiAgICBjb25zdCBzdGF0dXNSZWYgPSBkb2MoXG4gICAgICB0aGlzLmZpcmVzdG9yZSxcbiAgICAgIGB0ZWFtcy8ke3RlYW1JZH0vdHJhaW5pbmdzLyR7dHJhaW5pbmdJZH0vYXR0ZW5kZWVzLyR7dXNlci51aWR9YFxuICAgICk7XG4gICAgcmV0dXJuIGF3YWl0IHNldERvYyhzdGF0dXNSZWYsIHsgc3RhdHVzIH0pO1xuICB9XG5cbiAgYXN5bmMgc2V0VGVhbVRyYWluaW5nQXR0ZW5kZWVTdGF0dXNBZG1pbihcbiAgICBzdGF0dXM6IGJvb2xlYW4sXG4gICAgdGVhbUlkOiBzdHJpbmcsXG4gICAgdHJhaW5pbmdJZDogc3RyaW5nLFxuICAgIG1lbWJlcklkOiBzdHJpbmcsXG4gICkge1xuICAgIGNvbnN0IHN0YXR1c1JlZiA9IGRvYyhcbiAgICAgIHRoaXMuZmlyZXN0b3JlLFxuICAgICAgYHRlYW1zLyR7dGVhbUlkfS90cmFpbmluZ3MvJHt0cmFpbmluZ0lkfS9hdHRlbmRlZXMvJHttZW1iZXJJZH1gXG4gICAgKTtcbiAgICByZXR1cm4gYXdhaXQgc2V0RG9jKHN0YXR1c1JlZiwgeyBzdGF0dXMgfSk7XG4gIH1cblxuICBkZWxldGVUZWFtVHJhaW5pbmcodGVhbUlkOiBzdHJpbmcsIHRyYWluaW5nSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IGdhbWVSZWYgPSBkb2MoXG4gICAgICB0aGlzLmZpcmVzdG9yZSxcbiAgICAgIGB0ZWFtcy8ke3RlYW1JZH0vdHJhaW5pbmdzLyR7dHJhaW5pbmdJZH1gXG4gICAgKTtcbiAgICByZXR1cm4gZGVsZXRlRG9jKGdhbWVSZWYpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsQ29udHJvbGxlciwgTmF2UGFyYW1zLCBUb2FzdENvbnRyb2xsZXIgfSBmcm9tIFwiQGlvbmljL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbiAgU3Vic2NyaXB0aW9uLFxuICBjYXRjaEVycm9yLFxuICBjb25jYXRNYXAsXG4gIGRlZmF1bHRJZkVtcHR5LFxuICBmaW5hbGl6ZSxcbiAgZm9ya0pvaW4sXG4gIGZyb20sXG4gIG1hcCxcbiAgb2YsXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbiAgdGFwLFxufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgVGVhbSB9IGZyb20gXCJzcmMvYXBwL21vZGVscy90ZWFtXCI7XG5pbXBvcnQgeyBUcmFpbmluZyB9IGZyb20gXCJzcmMvYXBwL21vZGVscy90cmFpbmluZ1wiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRyYWluaW5nU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlL3RyYWluaW5nLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC10cmFpbmluZy1jcmVhdGVcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi90cmFpbmluZy1jcmVhdGUucGFnZS5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi90cmFpbmluZy1jcmVhdGUucGFnZS5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBUcmFpbmluZ0NyZWF0ZVBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoXCJkYXRhXCIpIHRyYWluaW5nQ29weTogVHJhaW5pbmc7XG4gIHRyYWluaW5nOiBUcmFpbmluZztcbiAgdXNlciQ6IE9ic2VydmFibGU8VXNlcj47XG5cbiAgdGVhbUFkbWluTGlzdCQ6IE9ic2VydmFibGU8VGVhbVtdPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vZGFsQ3RybDogTW9kYWxDb250cm9sbGVyLFxuICAgIHByaXZhdGUgdHJhaW5pbmdTZXJ2aWNlOiBUcmFpbmluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvYXN0Q29udHJvbGxlcjogVG9hc3RDb250cm9sbGVyLFxuXG4gICAgcHJpdmF0ZSBmYlNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXNcbiAgKSB7XG5cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHV0Y05vdyA9IG5ldyBEYXRlKERhdGUuVVRDKFxuICAgICAgbm93LmdldFVUQ0Z1bGxZZWFyKCksXG4gICAgICBub3cuZ2V0VVRDTW9udGgoKSxcbiAgICAgIG5vdy5nZXRVVENEYXRlKCksXG4gICAgICBub3cuZ2V0VVRDSG91cnMoKSxcbiAgICAgIG5vdy5nZXRVVENNaW51dGVzKCksXG4gICAgICAwLFxuICAgICAgMFxuICAgICkpO1xuXG4gICAgdGhpcy50cmFpbmluZyA9IHtcbiAgICAgIGlkOiBcIlwiLFxuICAgICAgbmFtZTogXCJcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuXG4gICAgICBsb2NhdGlvbjogXCJcIixcbiAgICAgIHN0cmVldEFuZE51bWJlcjogXCJcIixcbiAgICAgIHBvc3RhbENvZGU6IFwiXCIsXG4gICAgICBjaXR5OiBcIlwiLFxuXG4gICAgICBkYXRlOiBUaW1lc3RhbXAuZnJvbURhdGUobmV3IERhdGUoKSksXG5cbiAgICAgIHRpbWVGcm9tOiB1dGNOb3cudG9JU09TdHJpbmcoKSxcbiAgICAgIHRpbWVUbzogdXRjTm93LnRvSVNPU3RyaW5nKCksXG4gICAgICBzdGFydERhdGU6IHV0Y05vdy50b0lTT1N0cmluZygpLFxuICAgICAgZW5kRGF0ZTogdXRjTm93LnRvSVNPU3RyaW5nKCksXG5cbiAgICAgIHJlcGVhdEZyZXF1ZW5jeTogXCJXXCIsXG4gICAgICByZXBlYXRBbW91bnQ6IFwiMVwiLFxuXG4gICAgICB0ZWFtSWQ6IFwiXCIsXG4gICAgICB0ZWFtTmFtZTogXCJcIixcbiAgICAgIGxpZ2E6IFwiXCIsXG5cbiAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgIGF0dGVuZGVlczogW10sXG4gICAgICBleGVyY2lzZXM6IFtdLFxuICAgICAgY291bnRBdHRlbmRlZXM6IDAsXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudHJhaW5pbmdDb3B5ID0gdGhpcy5uYXZQYXJhbXMuZ2V0KFwiZGF0YVwiKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRyYWluaW5nQ29weSk7XG4gICAgaWYgKHRoaXMudHJhaW5pbmdDb3B5LmlkKSB7XG4gICAgICB0aGlzLnRyYWluaW5nID0gdGhpcy50cmFpbmluZ0NvcHk7XG5cblxuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIC8qY29uc3QgdXRjTm93ID0gbmV3IERhdGUoRGF0ZS5VVEMoXG4gICAgICAgIG5vdy5nZXRVVENGdWxsWWVhcigpLFxuICAgICAgICBub3cuZ2V0VVRDTW9udGgoKSxcbiAgICAgICAgbm93LmdldFVUQ0RhdGUoKSxcbiAgICAgICAgbm93LmdldFVUQ0hvdXJzKCksXG4gICAgICAgIG5vdy5nZXRVVENNaW51dGVzKCksXG4gICAgICAgIDAsXG4gICAgICAgIDBcbiAgICAgICkpOyovXG4gICAgICB0aGlzLnRyYWluaW5nLnRpbWVGcm9tID0gbm93LnRvSVNPU3RyaW5nKCk7XG4gICAgICB0aGlzLnRyYWluaW5nLnRpbWVUbyA9IG5vdy50b0lTT1N0cmluZygpO1xuICAgICAgdGhpcy50cmFpbmluZy5zdGFydERhdGUgPSBub3cudG9JU09TdHJpbmcoKTtcbiAgICAgIHRoaXMudHJhaW5pbmcuZW5kRGF0ZSA9IG5vdy50b0lTT1N0cmluZygpO1xuXG4gICAgfVxuXG5cbiAgICB0aGlzLnRlYW1BZG1pbkxpc3QkID0gdGhpcy5mYlNlcnZpY2UuZ2V0VGVhbUFkbWluTGlzdCgpO1xuICAgIHRoaXMudGVhbUFkbWluTGlzdCQuZm9yRWFjaCgodGVhbUxpc3QpID0+IHtcbiAgICAgIHRoaXMudHJhaW5pbmcudGVhbUlkID0gdGVhbUxpc3RbMF0uaWQ7XG4gICAgICB0aGlzLnRyYWluaW5nLnRlYW1OYW1lID0gdGVhbUxpc3RbMF0ubmFtZTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQgeyB9XG5cbiAgY2hhbmdlVGltZUZyb20oZXYpIHtcbiAgICAvKmNvbnNvbGUubG9nKFwiY2hhbmdlVGltZUZyb20gbG9jYWwgdGltZTogXCIgKyBldi5kZXRhaWwudmFsdWUpO1xuXG4gICAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGV2LmRldGFpbC52YWx1ZSk7XG5cbiAgICAvLyBMb2thbGUgWmVpdCBiZWliZWhhbHRlblxuICAgIHRoaXMudHJhaW5pbmcudGltZUZyb20gPSBuZXcgRGF0ZShEYXRlLlVUQyhcbiAgICAgIG5ld0RhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIG5ld0RhdGUuZ2V0TW9udGgoKSxcbiAgICAgIG5ld0RhdGUuZ2V0RGF0ZSgpLFxuICAgICAgbmV3RGF0ZS5nZXRIb3VycygpLCAgICAvLyBIaWVyIHZlcndlbmRlbiB3aXIgZ2V0SG91cnMgc3RhdHQgZ2V0VVRDSG91cnNcbiAgICAgIG5ld0RhdGUuZ2V0TWludXRlcygpLFxuICAgICAgMCxcbiAgICAgIDBcbiAgICApKS50b0lTT1N0cmluZygpO1xuXG4gICAgaWYgKHRoaXMudHJhaW5pbmcudGltZUZyb20gPiB0aGlzLnRyYWluaW5nLnRpbWVUbykge1xuICAgICAgdGhpcy50cmFpbmluZy50aW1lVG8gPSB0aGlzLnRyYWluaW5nLnRpbWVGcm9tO1xuICAgIH0qL1xuICB9XG4gIC8vIEluIHlvdXIgY29tcG9uZW50OlxuICAvKmdldExvY2FsVGltZUZyb20oKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMudHJhaW5pbmcudGltZUZyb20pIHJldHVybiAnJztcbiAgICBcbiAgICAvLyBDb252ZXJ0IFVUQyB0byBsb2NhbCB0aW1lIGZvciBkaXNwbGF5XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMudHJhaW5pbmcudGltZUZyb20pO1xuICAgIHJldHVybiBuZXcgRGF0ZShcbiAgICAgICAgZGF0ZS5nZXRVVENGdWxsWWVhcigpLFxuICAgICAgICBkYXRlLmdldFVUQ01vbnRoKCksXG4gICAgICAgIGRhdGUuZ2V0VVRDRGF0ZSgpLFxuICAgICAgICBkYXRlLmdldFVUQ0hvdXJzKCksXG4gICAgICAgIGRhdGUuZ2V0VVRDTWludXRlcygpXG4gICAgKS50b0lTT1N0cmluZygpO1xuICB9Ki9cblxuXG4gIGNoYW5nZVN0YXJ0RGF0ZShldikge1xuICAgIC8qY29uc29sZS5sb2coXCJjaGFuZ2VTdGFydERhdGUgXCIgKyBldi5kZXRhaWwudmFsdWUpO1xuICAgIGlmICh0aGlzLnRyYWluaW5nLnN0YXJ0RGF0ZSA+IHRoaXMudHJhaW5pbmcuZW5kRGF0ZSkge1xuICAgICAgdGhpcy50cmFpbmluZy5lbmREYXRlID0gdGhpcy50cmFpbmluZy5zdGFydERhdGU7XG4gICAgfSovXG4gIH1cblxuICBhc3luYyBjbG9zZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RhbEN0cmwuZGlzbWlzcyhudWxsLCBcImNsb3NlXCIpO1xuICB9XG5cbiAgY29tYmluZURhdGVBbmRUaW1lKGRhdGVWYWx1ZSwgdGltZVZhbHVlKSB7XG4gICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgaW5wdXRzIG1pZ2h0IGJlIHN0cmluZ3NcbiAgICBsZXQgZGF0ZU9iaiA9IGRhdGVWYWx1ZTtcbiAgICBpZiAoIShkYXRlVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgZGF0ZU9iaiA9IG5ldyBEYXRlKGRhdGVWYWx1ZSk7XG4gICAgfVxuICAgIFxuICAgIC8vIEdldCB0aGUgZGF0ZSBwb3J0aW9uICh5ZWFyLCBtb250aCwgZGF5KVxuICAgIGNvbnN0IHllYXIgPSBkYXRlT2JqLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGggPSBkYXRlT2JqLmdldE1vbnRoKCk7XG4gICAgY29uc3QgZGF5ID0gZGF0ZU9iai5nZXREYXRlKCk7XG4gICAgXG4gICAgLy8gUGFyc2UgdGhlIHRpbWUgc3RyaW5nIChoYW5kbGluZyBJU08gZm9ybWF0IGxpa2UgXCIyMDI1LTAzLTAzVDIxOjAwOjAwXCIpXG4gICAgbGV0IGhvdXJzID0gMCwgbWludXRlcyA9IDAsIHNlY29uZHMgPSAwO1xuICAgIFxuICAgIGlmICh0eXBlb2YgdGltZVZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gQ2hlY2sgaWYgaXQncyBJU08gZm9ybWF0IHdpdGggXCJUXCIgc2VwYXJhdG9yXG4gICAgICBpZiAodGltZVZhbHVlLmluY2x1ZGVzKCdUJykpIHtcbiAgICAgICAgLy8gUGFyc2UgSVNPIGZvcm1hdCAoMjAyNS0wMy0wM1QyMTowMDowMClcbiAgICAgICAgY29uc3QgdGltZU9iaiA9IG5ldyBEYXRlKHRpbWVWYWx1ZSk7XG4gICAgICAgIGhvdXJzID0gdGltZU9iai5nZXRIb3VycygpO1xuICAgICAgICBtaW51dGVzID0gdGltZU9iai5nZXRNaW51dGVzKCk7XG4gICAgICAgIHNlY29uZHMgPSB0aW1lT2JqLmdldFNlY29uZHMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZhbGxiYWNrIHRvIG9yaWdpbmFsIHBhcnNpbmcgZm9yIFwiSEg6TU06U1NcIiBmb3JtYXRcbiAgICAgICAgY29uc3QgdGltZVBhcnRzID0gdGltZVZhbHVlLnNwbGl0KCc6Jyk7XG4gICAgICAgIGhvdXJzID0gcGFyc2VJbnQodGltZVBhcnRzWzBdLCAxMCkgfHwgMDtcbiAgICAgICAgbWludXRlcyA9IHBhcnNlSW50KHRpbWVQYXJ0c1sxXSwgMTApIHx8IDA7XG4gICAgICAgIHNlY29uZHMgPSBwYXJzZUludCh0aW1lUGFydHNbMl0sIDEwKSB8fCAwO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGltZVZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgaG91cnMgPSB0aW1lVmFsdWUuZ2V0SG91cnMoKTtcbiAgICAgIG1pbnV0ZXMgPSB0aW1lVmFsdWUuZ2V0TWludXRlcygpO1xuICAgICAgc2Vjb25kcyA9IHRpbWVWYWx1ZS5nZXRTZWNvbmRzKCk7XG4gICAgfVxuICAgIFxuICAgIC8vIENyZWF0ZSBhIG5ldyBkYXRlIHdpdGggY29tYmluZWQgZGF0ZSBhbmQgdGltZVxuICAgIGNvbnN0IGNvbWJpbmVkRGF0ZVRpbWUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5LCBob3VycywgbWludXRlcywgc2Vjb25kcyk7XG4gICAgcmV0dXJuIGNvbWJpbmVkRGF0ZVRpbWU7XG4gIH1cbiAgXG5cbiAgYXN5bmMgY3JlYXRlVHJhaW5pbmcoKSB7XG4gICAgY29uc29sZS5sb2coYFN0YXJ0IERhdGUgYmVmb3JlIGNhbGN1bGF0aW9uOiAke3RoaXMudHJhaW5pbmcuc3RhcnREYXRlfWApO1xuICAgIGNvbnNvbGUubG9nKGBTdGFydCBUaW1lIGJlZm9yZSBjYWxjdWxhdGlvbjogJHt0aGlzLnRyYWluaW5nLnRpbWVGcm9tfWApO1xuXG4gICAgY29uc29sZS5sb2coYEVuZCBEYXRlIGJlZm9yZSBjYWxjdWxhdGlvbjogJHt0aGlzLnRyYWluaW5nLmVuZERhdGV9YCk7XG4gICAgY29uc29sZS5sb2coYEVuZCBUaW1lIGJlZm9yZSBjYWxjdWxhdGlvbjogJHt0aGlzLnRyYWluaW5nLnRpbWVUb31gKTtcblxuICAvLyBDb21iaW5lIHN0YXJ0IGRhdGUgd2l0aCB0aW1lIGZyb21cbiAgY29uc3QgY29tYmluZWRTdGFydERhdGVUaW1lID0gdGhpcy5jb21iaW5lRGF0ZUFuZFRpbWUoXG4gICAgdGhpcy50cmFpbmluZy5zdGFydERhdGUsXG4gICAgdGhpcy50cmFpbmluZy50aW1lRnJvbSAgLy8gSVNPIGZvcm1hdDogXCIyMDI1LTAzLTAzVDIxOjAwOjAwXCJcbiAgKTtcbiAgXG4gIC8vIENvbWJpbmUgZW5kIGRhdGUgd2l0aCB0aW1lIHRvXG4gIGNvbnN0IGNvbWJpbmVkRW5kRGF0ZVRpbWUgPSB0aGlzLmNvbWJpbmVEYXRlQW5kVGltZShcbiAgICB0aGlzLnRyYWluaW5nLmVuZERhdGUsXG4gICAgdGhpcy50cmFpbmluZy50aW1lVG8gICAgLy8gSVNPIGZvcm1hdDogXCIyMDI1LTAzLTAzVDIxOjAwOjAwXCJcbiAgKTtcblxuICAgIC8vIE9yIGlmIHlvdSB3YW50IHRvIHVwZGF0ZSB0aGUgb3JpZ2luYWwgZmllbGRzOlxuICAgIHRoaXMudHJhaW5pbmcuc3RhcnREYXRlID0gY29tYmluZWRTdGFydERhdGVUaW1lLnRvSVNPU3RyaW5nKCk7XG4gICAgdGhpcy50cmFpbmluZy50aW1lRnJvbSA9IGNvbWJpbmVkU3RhcnREYXRlVGltZS50b0lTT1N0cmluZygpO1xuICAgIFxuICAgIHRoaXMudHJhaW5pbmcuZW5kRGF0ZSA9IGNvbWJpbmVkRW5kRGF0ZVRpbWUudG9JU09TdHJpbmcoKTtcbiAgICB0aGlzLnRyYWluaW5nLnRpbWVUbyA9IGNvbWJpbmVkRW5kRGF0ZVRpbWUudG9JU09TdHJpbmcoKTtcblxuXG4gICAgY29uc29sZS5sb2coYFN0YXJ0IERhdGUgYWZ0ZXIgY2FsY3VsYXRpb246ICR7dGhpcy50cmFpbmluZy5zdGFydERhdGV9YCk7XG4gICAgY29uc29sZS5sb2coYFN0YXJ0IFRpbWUgYWZ0ZXIgY2FsY3VsYXRpb246ICR7dGhpcy50cmFpbmluZy50aW1lRnJvbX1gKTtcblxuICAgIGNvbnNvbGUubG9nKGBFbmQgRGF0ZSBhZnRlciBjYWxjdWxhdGlvbjogJHt0aGlzLnRyYWluaW5nLmVuZERhdGV9YCk7XG4gICAgY29uc29sZS5sb2coYEVuZCBUaW1lIGFmdGVyIGNhbGN1bGF0aW9uOiAke3RoaXMudHJhaW5pbmcudGltZVRvfWApO1xuXG4gICAgZGVsZXRlIHRoaXMudHJhaW5pbmcuYXR0ZW5kZWVzO1xuXG4gICAgY29uc3QgdHJhaW5pbmcgPSBhd2FpdCB0aGlzLnRyYWluaW5nU2VydmljZS5zZXRDcmVhdGVUcmFpbmluZyh0aGlzLnRyYWluaW5nKS5jYXRjaChlID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgICB0aGlzLnRvYXN0QWN0aW9uRXJyb3IoZSk7XG4gICAgfSk7XG5cbiAgICBpZiAodHJhaW5pbmcpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRyYWluaW5nLmlkKTtcbiAgICAgIHJldHVybiB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKHt9LCBcImNvbmZpcm1cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBhc3luYyB0b2FzdEFjdGlvbkVycm9yKGVycm9yKSB7XG4gICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgICBjb2xvcjogXCJkYW5nZXJcIixcbiAgICB9KTtcblxuICAgIGF3YWl0IHRvYXN0LnByZXNlbnQoKTtcbiAgfVxuXG59XG4iLCAiPGlvbi1oZWFkZXIgW3RyYW5zbHVjZW50XT1cInRydWVcIj5cbiAgPGlvbi10b29sYmFyPlxuICAgIDxpb24tYnV0dG9ucyBzbG90PVwic2Vjb25kYXJ5XCI+XG4gICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwiY2xvc2UoKVwiPnt7XCJjb21tb24uY2xvc2VcIiB8IHRyYW5zbGF0ZX19PC9pb24tYnV0dG9uPlxuICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgPGlvbi10aXRsZT57e1widHJhaW5pbmctY3JlYXRlLm5ld19fdHJhaW5pbmdcIiB8IHRyYW5zbGF0ZX19PC9pb24tdGl0bGU+XG4gICAgPGlvbi1idXR0b25zIHNsb3Q9XCJwcmltYXJ5XCI+XG4gICAgICA8aW9uLWJ1dHRvbiBzdHJvbmc9XCJ0cnVlXCIgKGNsaWNrKT1cImNyZWF0ZVRyYWluaW5nKClcIj57e1wiY29tbW9uLmNyZWF0ZVwiIHwgdHJhbnNsYXRlfX08L2lvbi1idXR0b24+XG4gICAgPC9pb24tYnV0dG9ucz5cbiAgPC9pb24tdG9vbGJhcj5cbjwvaW9uLWhlYWRlcj5cbjxpb24tY29udGVudD5cblxuICA8aW9uLWhlYWRlciBjb2xsYXBzZT1cImNvbmRlbnNlXCI+XG4gICAgPGlvbi10b29sYmFyPlxuICAgICAgPGlvbi10aXRsZSBzaXplPVwibGFyZ2VcIj57e1widHJhaW5pbmctY3JlYXRlLm5ld19fdHJhaW5pbmdcIiB8IHRyYW5zbGF0ZX19PC9pb24tdGl0bGU+XG4gICAgPC9pb24tdG9vbGJhcj5cbiAgPC9pb24taGVhZGVyPlxuXG4gIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiPlxuICAgIDxkaXYgKm5nSWY9XCJ0ZWFtQWRtaW5MaXN0JCB8IGFzeW5jIGFzIHRlYW1MaXN0XCI+XG4gICAgICA8aW9uLWl0ZW0gKm5nSWY9XCJ0ZWFtTGlzdC5sZW5ndGggPiAxXCI+XG4gICAgICAgIDxpb24tc2VsZWN0IFtsYWJlbF09XCIndHJhaW5pbmctY3JlYXRlLnRlYW0nIHwgdHJhbnNsYXRlXCIgbGFiZWwtcGxhY2VtZW50PVwic3RhY2tlZFwiIFsobmdNb2RlbCldPVwidHJhaW5pbmcudGVhbUlkXCJcbiAgICAgICAgICB2YWx1ZT1cInt7dHJhaW5pbmcudGVhbUlkfX1cIj5cbiAgICAgICAgICA8aW9uLXNlbGVjdC1vcHRpb24gKm5nRm9yPVwibGV0IHRlYW0gb2YgdGVhbUxpc3RcIiB2YWx1ZT1cInt7dGVhbS5pZH19XCI+e3t0ZWFtLm5hbWV9fTwvaW9uLXNlbGVjdC1vcHRpb24+XG4gICAgICAgIDwvaW9uLXNlbGVjdD5cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIDxpb24taXRlbT5cbiAgICAgIDxpb24tc2VsZWN0IFtsYWJlbF09XCIndHJhaW5pbmctY3JlYXRlLnRlYW0nIHwgdHJhbnNsYXRlXCIgbGFiZWwtcGxhY2VtZW50PVwic3RhY2tlZFwiIFsobmdNb2RlbCldPVwidHJhaW5pbmcudGVhbUlkXCJcbiAgICAgICAgdmFsdWU9XCJ7e3RyYWluaW5nLnRlYW1JZH19XCI+XG4gICAgICAgIDxpb24tc2VsZWN0LW9wdGlvbiAqbmdGb3I9XCJsZXQgdGVhbSBvZiB0ZWFtTGlzdFwiIHZhbHVlPVwie3t0ZWFtLmlkfX1cIj57e3RlYW0ubmFtZX19PC9pb24tc2VsZWN0LW9wdGlvbj5cbiAgICAgIDwvaW9uLXNlbGVjdD5cbiAgICA8L2lvbi1pdGVtPi0tPlxuXG4gICAgPGlvbi1pdGVtPlxuICAgICAgPGlvbi1pbnB1dCBbbGFiZWxdPVwiJ2NvbW1vbi5uYW1lJyB8IHRyYW5zbGF0ZVwiIGxhYmVsLXBsYWNlbWVudD1cInN0YWNrZWRcIiBbKG5nTW9kZWwpXT1cInRyYWluaW5nLm5hbWVcIlxuICAgICAgICB2YWx1ZT1cInt7dHJhaW5pbmcubmFtZX19XCI+XG4gICAgICA8L2lvbi1pbnB1dD5cbiAgICA8L2lvbi1pdGVtPlxuICAgIDxpb24taXRlbT5cbiAgICAgIDxpb24tdGV4dGFyZWEgW2xhYmVsXT0nXCJjb21tb24uZGVzY3JpcHRpb25cIiB8IHRyYW5zbGF0ZScgbGFiZWwtcGxhY2VtZW50PVwic3RhY2tlZFwiXG4gICAgICAgIHZhbHVlPVwie3t0cmFpbmluZy5kZXNjcmlwdGlvbn19XCIgWyhuZ01vZGVsKV09XCJ0cmFpbmluZy5kZXNjcmlwdGlvblwiPlxuICAgICAgPC9pb24tdGV4dGFyZWE+XG4gICAgPC9pb24taXRlbT5cbiAgPC9pb24tbGlzdD5cbiAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCI+XG4gICAgPGlvbi1pdGVtPlxuICAgICAgPGlvbi1pbnB1dCBbbGFiZWxdPSdcImNvbW1vbi5sb2NhdGlvblwiIHwgdHJhbnNsYXRlJyBsYWJlbC1wbGFjZW1lbnQ9XCJzdGFja2VkXCJcbiAgICAgICAgdmFsdWU9XCJ7e3RyYWluaW5nLmxvY2F0aW9ufX1cIiBbKG5nTW9kZWwpXT1cInRyYWluaW5nLmxvY2F0aW9uXCI+XG4gICAgICA8L2lvbi1pbnB1dD5cbiAgICA8L2lvbi1pdGVtPlxuICAgIDxpb24taXRlbT5cbiAgICAgIDxpb24taW5wdXQgW2xhYmVsXT0nXCJjb21tb24uc3RyZWV0X19ob3VzZV9udW1iZXJcIiB8IHRyYW5zbGF0ZScgbGFiZWwtcGxhY2VtZW50PVwic3RhY2tlZFwiXG4gICAgICAgIHZhbHVlPVwie3t0cmFpbmluZy5zdHJlZXRBbmROdW1iZXJ9fVwiIFsobmdNb2RlbCldPVwidHJhaW5pbmcuc3RyZWV0QW5kTnVtYmVyXCI+XG4gICAgICA8L2lvbi1pbnB1dD5cbiAgICA8L2lvbi1pdGVtPlxuICAgIDxpb24taXRlbT5cbiAgICAgIDxpb24taW5wdXQgW2xhYmVsXT0nXCJjb21tb24ucG9zdGFsX19jb2RlXCIgfCB0cmFuc2xhdGUnIGxhYmVsLXBsYWNlbWVudD1cInN0YWNrZWRcIiB2YWx1ZT1cInt7dHJhaW5pbmcucG9zdGFsQ29kZX19XCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJ0cmFpbmluZy5wb3N0YWxDb2RlXCI+XG4gICAgICA8L2lvbi1pbnB1dD5cbiAgICA8L2lvbi1pdGVtPlxuICAgIDxpb24taXRlbT5cbiAgICAgIDxpb24taW5wdXQgW2xhYmVsXT0nXCJjb21tb24ubG9jYWxpdHlcIiB8IHRyYW5zbGF0ZScgbGFiZWwtcGxhY2VtZW50PVwic3RhY2tlZFwiIHZhbHVlPVwie3t0cmFpbmluZy5jaXR5fX1cIlxuICAgICAgICBbKG5nTW9kZWwpXT1cInRyYWluaW5nLmNpdHlcIj5cbiAgICAgIDwvaW9uLWlucHV0PlxuICAgIDwvaW9uLWl0ZW0+XG4gIDwvaW9uLWxpc3Q+XG5cbiAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCI+XG4gICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgIHt7XCJ0cmFpbmluZy1jcmVhdGUuc2VyaWVzX19zZXR0aW5nc1wiIHwgdHJhbnNsYXRlfX1cbiAgICAgIDwvaW9uLWxhYmVsPlxuICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxuXG4gICAgPGlvbi1pdGVtPlxuICAgICAgPGlvbi1zZWxlY3QgW2xhYmVsXT1cIid0cmFpbmluZy1jcmVhdGUucmVwZWF0JyB8IHRyYW5zbGF0ZVwiIGxhYmVsLXBsYWNlbWVudD1cInN0YWNrZWRcIlxuICAgICAgICB2YWx1ZT1cInt7dHJhaW5pbmcucmVwZWF0RnJlcXVlbmN5fX1cIiBbKG5nTW9kZWwpXT1cInRyYWluaW5nLnJlcGVhdEZyZXF1ZW5jeVwiPlxuICAgICAgICA8aW9uLXNlbGVjdC1vcHRpb24gdmFsdWU9XCJEXCI+e3tcInRyYWluaW5nLWNyZWF0ZS5kYWlseVwiIHwgdHJhbnNsYXRlfX08L2lvbi1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICA8aW9uLXNlbGVjdC1vcHRpb24gdmFsdWU9XCJXXCI+e3tcInRyYWluaW5nLWNyZWF0ZS53ZWVrbHlcIiB8IHRyYW5zbGF0ZX19PC9pb24tc2VsZWN0LW9wdGlvbj5cbiAgICAgIDwvaW9uLXNlbGVjdD5cbiAgICAgIDxpb24tc2VsZWN0IFtsYWJlbF09XCInY29tbW9uLmFsbCcgfCB0cmFuc2xhdGVcIiBsYWJlbC1wbGFjZW1lbnQ9XCJzdGFja2VkXCIgdmFsdWU9XCJ7e3RyYWluaW5nLnJlcGVhdEFtb3VudH19XCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJ0cmFpbmluZy5yZXBlYXRBbW91bnRcIj5cbiAgICAgICAgPGlvbi1zZWxlY3Qtb3B0aW9uIHZhbHVlPVwiMVwiPjE8L2lvbi1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICA8aW9uLXNlbGVjdC1vcHRpb24gdmFsdWU9XCIyXCI+MjwvaW9uLXNlbGVjdC1vcHRpb24+XG4gICAgICAgIDxpb24tc2VsZWN0LW9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9pb24tc2VsZWN0LW9wdGlvbj5cbiAgICAgICAgPGlvbi1zZWxlY3Qtb3B0aW9uIHZhbHVlPVwiNFwiPjQ8L2lvbi1zZWxlY3Qtb3B0aW9uPlxuICAgICAgPC9pb24tc2VsZWN0PlxuICAgIDwvaW9uLWl0ZW0+XG4gICAgPGlvbi1pdGVtIGlkPVwic3RhcnREYXRlSXRlbVwiPlxuICAgICAgPGlvbi1sYWJlbCBwb3NpdGlvbj1cImRlZmF1bHRcIj5cbiAgICAgICAge3tcInRyYWluaW5nLWNyZWF0ZS5maXJzdF9fdHJhaW5pbmdcIiB8IHRyYW5zbGF0ZX19OlxuICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8aW9uLWRhdGV0aW1lLWJ1dHRvbiBzbG90PVwiZW5kXCIgZGF0ZXRpbWU9XCJzdGFydERhdGVcIj48L2lvbi1kYXRldGltZS1idXR0b24+XG5cbiAgICAgIDxpb24tbW9kYWwgW2tlZXBDb250ZW50c01vdW50ZWRdPVwidHJ1ZVwiPlxuICAgICAgICA8bmctdGVtcGxhdGU+XG4gICAgICAgICAgPGlvbi1kYXRldGltZSBbZmlyc3REYXlPZldlZWtdPVwiMVwiIChpb25DaGFuZ2UpPVwiY2hhbmdlU3RhcnREYXRlKCRldmVudClcIiBwcmVzZW50YXRpb249XCJkYXRlXCIgaWQ9XCJzdGFydERhdGVcIlxuICAgICAgICAgICAgW3ZhbHVlXT1cInRyYWluaW5nLnN0YXJ0RGF0ZVwiIFsobmdNb2RlbCldPVwidHJhaW5pbmcuc3RhcnREYXRlXCI+PC9pb24tZGF0ZXRpbWU+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L2lvbi1tb2RhbD5cbiAgICA8L2lvbi1pdGVtPlxuXG4gICAgPGlvbi1pdGVtIGlkPVwiZW5kRGF0ZUl0ZW1cIj5cbiAgICAgIDxpb24tbGFiZWwgcG9zaXRpb249XCJkZWZhdWx0XCI+XG4gICAgICAgIHt7XCJ0cmFpbmluZy1jcmVhdGUubGFzdF9fdHJhaW5pbmdcIiB8IHRyYW5zbGF0ZX19OlxuICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8aW9uLWRhdGV0aW1lLWJ1dHRvbiBzbG90PVwiZW5kXCIgZGF0ZXRpbWU9XCJlbmREYXRlXCI+PC9pb24tZGF0ZXRpbWUtYnV0dG9uPlxuXG4gICAgICA8aW9uLW1vZGFsIFtrZWVwQ29udGVudHNNb3VudGVkXT1cInRydWVcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlPlxuICAgICAgICAgIDxpb24tZGF0ZXRpbWUgW2ZpcnN0RGF5T2ZXZWVrXT1cIjFcIiBwcmVzZW50YXRpb249XCJkYXRlXCIgaWQ9XCJlbmREYXRlXCIgWyhuZ01vZGVsKV09XCJ0cmFpbmluZy5lbmREYXRlXCIgdmFsdWU9XCJ7e3RyYWluaW5nLmVuZERhdGV9fVwiPlxuICAgICAgICAgIDwvaW9uLWRhdGV0aW1lPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9pb24tbW9kYWw+XG4gICAgPC9pb24taXRlbT5cbiAgICA8aW9uLWl0ZW0gaWQ9XCJ0aW1lRnJvbUl0ZW1cIj5cbiAgICAgIDxpb24tbGFiZWwgcG9zaXRpb249XCJcIj5cbiAgICAgICAge3tcInRyYWluaW5nLWNyZWF0ZS5zdGFydF9fdHJhaW5pbmdcIiB8IHRyYW5zbGF0ZX19OlxuICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8aW9uLWRhdGV0aW1lLWJ1dHRvbiBzbG90PVwiZW5kXCIgZGF0ZXRpbWU9XCJ0aW1lRnJvbVwiPjwvaW9uLWRhdGV0aW1lLWJ1dHRvbj5cblxuICAgICAgPGlvbi1tb2RhbCBba2VlcENvbnRlbnRzTW91bnRlZF09XCJ0cnVlXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8aW9uLWRhdGV0aW1lIHByZXNlbnRhdGlvbj1cInRpbWVcIiBpZD1cInRpbWVGcm9tXCIgKGlvbkNoYW5nZSk9XCJjaGFuZ2VUaW1lRnJvbSgkZXZlbnQpXCJcbiAgICAgICAgICAgIG1pbnV0ZVZhbHVlcz1cIjAsNSwxMCwxNSwyMCwyNSwzMCwzNSw0MCw0NSw1MCw1NVwiIHZhbHVlPVwie3t0cmFpbmluZy50aW1lRnJvbX19XCIgWyhuZ01vZGVsKV09XCJ0cmFpbmluZy50aW1lRnJvbVwiPlxuICAgICAgICAgIDwvaW9uLWRhdGV0aW1lPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9pb24tbW9kYWw+XG4gICAgPC9pb24taXRlbT5cblxuICAgIDxpb24taXRlbSBpZD1cInRpbWVUb0l0ZW1cIj5cbiAgICAgIDxpb24tbGFiZWwgcG9zaXRpb249XCJcIj5cbiAgICAgICAge3tcInRyYWluaW5nLWNyZWF0ZS5lbmRfX3RyYWluaW5nXCIgfCB0cmFuc2xhdGV9fTpcbiAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgPGlvbi1kYXRldGltZS1idXR0b24gc2xvdD1cImVuZFwiIGRhdGV0aW1lPVwidGltZVRvXCI+PC9pb24tZGF0ZXRpbWUtYnV0dG9uPlxuXG4gICAgICA8aW9uLW1vZGFsIFtrZWVwQ29udGVudHNNb3VudGVkXT1cInRydWVcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlPlxuICAgICAgICAgIDxpb24tZGF0ZXRpbWUgcHJlc2VudGF0aW9uPVwidGltZVwiIGlkPVwidGltZVRvXCIgbWludXRlVmFsdWVzPVwiMCw1LDEwLDE1LDIwLDI1LDMwLDM1LDQwLDQ1LDUwLDU1XCJcbiAgICAgICAgICAgIHZhbHVlPVwie3t0cmFpbmluZy50aW1lVG99fVwiIFsobmdNb2RlbCldPVwidHJhaW5pbmcudGltZVRvXCI+PC9pb24tZGF0ZXRpbWU+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L2lvbi1tb2RhbD5cbiAgICA8L2lvbi1pdGVtPlxuICA8L2lvbi1saXN0PlxuPC9pb24tY29udGVudD5cblxuPG5nLXRlbXBsYXRlICNsb2FkaW5nPlxuICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogMTAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDYwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG48L25nLXRlbXBsYXRlPiIsICJpbXBvcnQgeyBJbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpcmVzdG9yZSwgY29sbGVjdGlvbkRhdGEsIGRvY0RhdGEgfSBmcm9tICdAYW5ndWxhci9maXJlL2ZpcmVzdG9yZSc7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBkZWxldGVEb2MsIGRvYywgb3JkZXJCeSwgcXVlcnksIHNldERvYywgdXBkYXRlRG9jLCB3aGVyZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEV4ZXJjaXNlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBmaXJlc3RvcmU6IEZpcmVzdG9yZSA9IGluamVjdChGaXJlc3RvcmUpLFxuICApIHsgfVxuXG4gIGdldEV4ZXJjaXNlUmVmKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgZXhlcmNpc2VzUmVmID0gZG9jKHRoaXMuZmlyZXN0b3JlLCBgZXhlcmNpc2VzYCk7XG4gICAgcmV0dXJuIGRvY0RhdGEoZXhlcmNpc2VzUmVmLCB7IGlkRmllbGQ6IFwiaWRcIiB9KSBhcyBPYnNlcnZhYmxlPGFueT47XG4gIH1cblxuICBnZXRFeGVyY2lzZVJlZnModHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIGNvbnN0IGV4ZXJjaXNlc1JlZkxpc3QgPSBjb2xsZWN0aW9uKHRoaXMuZmlyZXN0b3JlLCBgZXhlcmNpc2VzYCk7XG4gICAgY29uc3QgcSA9IHF1ZXJ5KFxuICAgICAgZXhlcmNpc2VzUmVmTGlzdCxcbiAgICAgIHdoZXJlKFxuICAgICAgICBcInR5cGVcIixcbiAgICAgICAgXCI9PVwiLFxuICAgICAgICB0eXBlXG4gICAgICApXG4gICAgKVxuXG4gICAgcmV0dXJuIGNvbGxlY3Rpb25EYXRhKHEsIHtcbiAgICAgIGlkRmllbGQ6IFwiaWRcIixcbiAgICB9KSBhcyBPYnNlcnZhYmxlPGFueVtdPjtcbiAgfVxuXG5cbiAgZ2V0VGVhbUV4ZXJjaXNlUmVmcyh0ZWFtSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBjb25zdCBleGVyY2lzZXNSZWZMaXN0ID0gY29sbGVjdGlvbih0aGlzLmZpcmVzdG9yZSwgYHRlYW1zLyR7dGVhbUlkfS9leGVyY2lzZXNgKTtcblxuICAgIHJldHVybiBjb2xsZWN0aW9uRGF0YShleGVyY2lzZXNSZWZMaXN0LCB7XG4gICAgICBpZEZpZWxkOiBcImlkXCIsXG4gICAgfSkgYXMgT2JzZXJ2YWJsZTxhbnlbXT47XG4gIH1cbiAgZ2V0VGVhbVRyYWluaW5nRXhlcmNpc2VSZWZzKHRlYW1JZDogc3RyaW5nLCB0cmFpbmluZ0lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgY29uc3QgZXhlcmNpc2VzUmVmTGlzdCA9IGNvbGxlY3Rpb24odGhpcy5maXJlc3RvcmUsIGB0ZWFtcy8ke3RlYW1JZH0vdHJhaW5pbmdzLyR7dHJhaW5pbmdJZH0vZXhlcmNpc2VzYCk7XG4gICAgY29uc3QgcSA9IHF1ZXJ5KFxuICAgICAgZXhlcmNpc2VzUmVmTGlzdCxcbiAgICAgIG9yZGVyQnkoXG4gICAgICAgIFwib3JkZXJcIixcbiAgICAgICAgXCJhc2NcIlxuICAgICAgKVxuICAgIClcbiAgICByZXR1cm4gY29sbGVjdGlvbkRhdGEocSwge1xuICAgICAgaWRGaWVsZDogXCJpZFwiLFxuICAgIH0pIGFzIE9ic2VydmFibGU8YW55W10+O1xuICB9XG5cbiAgYWRkVGVhbVRyYWluaW5nRXhlcmNpc2UodGVhbUlkLCB0cmFpbmluZ0lkLCBleGVyY2lzZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRlYW1JZCwgdHJhaW5pbmdJZCwgZXhlcmNpc2UuaWQpXG4gICAgcmV0dXJuIHNldERvYyhcbiAgICAgIGRvYyh0aGlzLmZpcmVzdG9yZSwgYHRlYW1zLyR7dGVhbUlkfS90cmFpbmluZ3MvJHt0cmFpbmluZ0lkfS9leGVyY2lzZXMvJHtleGVyY2lzZS5pZH1gKSxcbiAgICAgIGV4ZXJjaXNlXG4gICAgKTtcbiAgfVxuICBhZGRUZWFtRXhlcmNpc2UodGVhbUlkLCBleGVyY2lzZSkge1xuICAgIHJldHVybiBzZXREb2MoXG4gICAgICBkb2ModGhpcy5maXJlc3RvcmUsIGB0ZWFtcy8ke3RlYW1JZH0vZXhlcmNpc2VzLyR7ZXhlcmNpc2UuaWR9YCksXG4gICAgICBleGVyY2lzZVxuICAgICk7XG4gIH1cbiAgcmVtb3ZlVGVhbVRyYWluaW5nRXhlcmNpc2UodGVhbUlkLCB0cmFpbmluZ0lkLCBleGVyY2lzZSkge1xuICAgIGNvbnN0IGV4ZXJjaXNlc1JlZiA9IGRvYyh0aGlzLmZpcmVzdG9yZSwgYHRlYW1zLyR7dGVhbUlkfS90cmFpbmluZ3MvJHt0cmFpbmluZ0lkfS9leGVyY2lzZXMvJHtleGVyY2lzZS5pZH1gKTtcbiAgICByZXR1cm4gZGVsZXRlRG9jKGV4ZXJjaXNlc1JlZik7XG4gIH1cbiAgcmVtb3ZlVGVhbUV4ZXJjaXNlKHRlYW1JZCwgZXhlcmNpc2UpIHtcbiAgICBjb25zdCBleGVyY2lzZXNSZWYgPSBkb2ModGhpcy5maXJlc3RvcmUsIGB0ZWFtcy8ke3RlYW1JZH0vZXhlcmNpc2VzLyR7ZXhlcmNpc2UuaWR9YCk7XG4gICAgcmV0dXJuIGRlbGV0ZURvYyhleGVyY2lzZXNSZWYpO1xuICB9XG5cbiAgdXBkYXRlVGVhbVRyYWluaW5nRXhlcmNpc2VPcmRlcih0ZWFtSWQsIHRyYWluaW5nSWQsIGV4ZXJjaXNlSWQsIG9yZGVyKSB7XG4gICAgY29uc3QgZXhlcmNpc2VSZWYgPSBkb2ModGhpcy5maXJlc3RvcmUsIGB0ZWFtcy8ke3RlYW1JZH0vdHJhaW5pbmdzLyR7dHJhaW5pbmdJZH0vZXhlcmNpc2VzLyR7ZXhlcmNpc2VJZH1gKTtcbiAgICByZXR1cm4gdXBkYXRlRG9jKGV4ZXJjaXNlUmVmLCB7IG9yZGVyOiBvcmRlciB9KTtcbiAgfVxuXG59XG4iLCAiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJyb3dzZXIgfSBmcm9tIFwiQGNhcGFjaXRvci9icm93c2VyXCI7XG5pbXBvcnQgeyBBbGVydENvbnRyb2xsZXIsIElvbkl0ZW1TbGlkaW5nLCBJdGVtUmVvcmRlckV2ZW50RGV0YWlsLCBNb2RhbENvbnRyb2xsZXIsIE5hdlBhcmFtcywgVG9hc3RDb250cm9sbGVyIH0gZnJvbSBcIkBpb25pYy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgY2F0Y2hFcnJvciwgZGVib3VuY2VUaW1lLCBkZWZhdWx0SWZFbXB0eSwgZmlsdGVyLCBmaXJzdCwgbGFzdFZhbHVlRnJvbSwgbWFwLCBwaXBlLCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBUcmFpbmluZyB9IGZyb20gXCJzcmMvYXBwL21vZGVscy90cmFpbmluZ1wiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgRXhlcmNpc2VTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvZmlyZWJhc2UvZXhlcmNpc2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtdGVhbS1leGVyY2lzZXNcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3RlYW0tZXhlcmNpc2VzLnBhZ2UuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi90ZWFtLWV4ZXJjaXNlcy5wYWdlLnNjc3NcIl0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgVGVhbUV4ZXJjaXNlc1BhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoXCJ0cmFpbmluZ1wiKSB0cmFpbmluZzogYW55O1xuXG4gIGV4ZXJjaXNlTGlzdCQ6IE9ic2VydmFibGU8YW55W10+O1xuICBmaWx0ZXJlZEV4ZXJjaXNlTGlzdCQ6IE9ic2VydmFibGU8YW55W10+O1xuICBcbiAgdGVhbUV4ZXJjaXNlTGlzdCQ6IE9ic2VydmFibGU8YW55W10+XG5cbiAgc2tlbGV0b24gPSBuZXcgQXJyYXkoMTIpO1xuICBzZWFyY2hUZXJtID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTsgIC8vIEluaXRpYWxpemVkIHdpdGggYW4gZW1wdHkgc3RyaW5nXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLFxuICAgIHB1YmxpYyB0b2FzdEN0cmw6IFRvYXN0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZiU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZXhlcmNpc2VTZXJ2aWNlOiBFeGVyY2lzZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcixcbiAgKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudHJhaW5pbmcgPSB0aGlzLm5hdlBhcmFtcy5nZXQoXCJ0cmFpbmluZ1wiKTtcbiAgICBjb25zb2xlLmxvZyhcIj4+PlwiLCB0aGlzLnRyYWluaW5nKVxuICAgIFxuXG4gICAgdGhpcy5leGVyY2lzZUxpc3QkID0gdGhpcy5mYlNlcnZpY2UuZ2V0VGVhbVJlZih0aGlzLnRyYWluaW5nLnRlYW1JZCkucGlwZShcbiAgICAgIHRha2UoMSksICAvLyBUYWtlIG9ubHkgdGhlIGZpcnN0IGVtaXNzaW9uIHRvIHByZXZlbnQgbXVsdGlwbGUgc3Vic2NyaXB0aW9uc1xuICAgICAgc3dpdGNoTWFwKHRlYW0gPT4ge1xuICAgICAgICBpZiAoIXRlYW0gfHwgIXRlYW0udHlwZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RlYW0gZGF0YSBpcyBpbmNvbXBsZXRlIG9yIG1pc3NpbmcuJyk7XG4gICAgICAgICAgcmV0dXJuIG9mKFtdKTsgIC8vIFJldHVybiBhbiBlbXB0eSBvYnNlcnZhYmxlIGFycmF5IGlmIG5vIHR5cGUgaXMgZm91bmRcbiAgICAgICAgfVxuICAgICAgICBpZiAodGVhbS50eXBlID09PSAnQ2x1YicpIHtcbiAgICAgICAgICAvLyBXZW5uIFRlYW0tVHlwICdDbHViJyBpc3QsIGhvbGUgZGVuIFR5cCB2b20gQ2x1YlxuICAgICAgICAgIHJldHVybiB0aGlzLmZiU2VydmljZS5nZXRDbHViUmVmKHRoaXMudHJhaW5pbmcuY2x1YklkKS5waXBlKFxuICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcChjbHViID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFjbHViIHx8ICFjbHViLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDbHViIGRhdGEgaXMgaW5jb21wbGV0ZSBvciBtaXNzaW5nLicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhlcmNpc2VTZXJ2aWNlLmdldEV4ZXJjaXNlUmVmcyhjbHViLnR5cGUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBBbnNvbnN0ZW4gdmVyd2VuZGUgZGVuIFRlYW0tVHlwXG4gICAgICAgIHJldHVybiB0aGlzLmV4ZXJjaXNlU2VydmljZS5nZXRFeGVyY2lzZVJlZnModGVhbS50eXBlKTtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBleGVyY2lzZXM6JywgZXJyKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAvLyByZXR1cm4gb2YoW10pOyAgLy8gSGFuZGxlIGVycm9ycyBieSByZXR1cm5pbmcgYW4gZW1wdHkgYXJyYXlcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIHRoaXMuZXhlcmNpc2VMaXN0JCA9IHRoaXMuZXhlcmNpc2VTZXJ2aWNlLmdldEV4ZXJjaXNlUmVmcyhcInN3aXNzdW5paG9ja2V5XCIpXG5cbiAgICB0aGlzLmZpbHRlcmVkRXhlcmNpc2VMaXN0JCA9IHRoaXMuc2VhcmNoVGVybS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDMwMCksXG4gICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgc3dpdGNoTWFwKHRlcm0gPT4gdGhpcy5maWx0ZXJFeGVyY2lzZXModGVybSkpXG4gICAgKTtcblxuICAgIHRoaXMudGVhbUV4ZXJjaXNlTGlzdCQgPSB0aGlzLmZldGNoVGVhbUV4ZXJjaXNlcygpIGFzIE9ic2VydmFibGU8YW55W10+O1xuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuXG4gIH1cblxuICBmZXRjaFRlYW1FeGVyY2lzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhlcmNpc2VTZXJ2aWNlLmdldFRlYW1FeGVyY2lzZVJlZnModGhpcy50cmFpbmluZy50ZWFtSWQpLnBpcGUoXG4gICAgICBtYXAoZXhlcmNpc2VzID0+IGV4ZXJjaXNlcyB8fCBbXSksICAvLyBTYWZlZ3VhcmQgdG8gZW5zdXJlIGl0IGFsd2F5cyBtYXBzIHRvIGFuIGFycmF5XG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0ZWFtIGV4ZXJjaXNlczpcIiwgZXJyKTtcbiAgICAgICAgdGhpcy50b2FzdEFjdGlvbkVycm9yKGVycik7XG4gICAgICAgIHJldHVybiBvZihbXSk7ICAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgb24gZXJyb3JcbiAgICAgIH0pLFxuICAgICAgc3RhcnRXaXRoKFtdKSwgIC8vIEltbWVkaWF0ZWx5IHN0YXJ0IHdpdGggYW4gZW1wdHkgYXJyYXkgdG8gZW5zdXJlIGFuIGVtaXNzaW9uXG4gICAgKTtcbiAgfVxuXG4gIGZpbHRlckV4ZXJjaXNlcyh0ZXJtOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5leGVyY2lzZUxpc3QkLnBpcGUoXG4gICAgICBtYXAoaXRlbXMgPT4gaXRlbXMuZmlsdGVyKGVsZW1lbnQgPT5cbiAgICAgICAgZWxlbWVudC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm0udG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgZWxlbWVudC5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm0udG9Mb3dlckNhc2UoKSlcbiAgICAgICkpXG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaChldmVudDogQ3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCBzZWFyY2hUZXJtID0gZXZlbnQuZGV0YWlsLnZhbHVlIHx8ICcnO1xuICAgIHRoaXMuc2VhcmNoVGVybS5uZXh0KHNlYXJjaFRlcm0pO1xuICB9XG5cbiAgZGlzcGxheUVycm9yKGVycjogYW55KSB7XG4gICAgdGhpcy50b2FzdEN0cmwuY3JlYXRlKHtcbiAgICAgIGhlYWRlcjogdGhpcy50cmFuc2xhdGUuaW5zdGFudChcImNvbW1vbi5lcnJvclwiKSxcbiAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlIHx8ICdBbiBlcnJvciBvY2N1cnJlZCcsXG4gICAgICBjb2xvcjogXCJkYW5nZXJcIixcbiAgICAgIGJ1dHRvbnM6IFt7IHRleHQ6IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoXCJjb21tb24ub2tcIiksIHJvbGU6IFwiY2FuY2VsXCIgfV0sXG4gICAgfSkudGhlbihhbGVydCA9PiBhbGVydC5wcmVzZW50KCkpO1xuICB9XG5cblxuICBhc3luYyBhZGRFeGVyY2lzZShzbGlkaW5nSXRlbTogSW9uSXRlbVNsaWRpbmcsIGV4ZXJjaXNlKSB7XG4gICAgc2xpZGluZ0l0ZW0uY2xvc2VPcGVuZWQoKTtcbiAgICBleGVyY2lzZVtcIm9yZGVyXCJdID0gMDtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5leGVyY2lzZVNlcnZpY2UuYWRkVGVhbVRyYWluaW5nRXhlcmNpc2UodGhpcy50cmFpbmluZy50ZWFtSWQsIHRoaXMudHJhaW5pbmcuaWQsIGV4ZXJjaXNlKVxuICAgICAgdGhpcy50b2FzdEFjdGlvblNhdmVkKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxuICB9XG4gIGFzeW5jIGFkZFRlYW1FeGVyY2lzZShzbGlkaW5nSXRlbTogSW9uSXRlbVNsaWRpbmcsIGV4ZXJjaXNlKSB7XG4gICAgc2xpZGluZ0l0ZW0uY2xvc2VPcGVuZWQoKTtcbiAgICBleGVyY2lzZVtcIm9yZGVyXCJdID0gMDtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5leGVyY2lzZVNlcnZpY2UuYWRkVGVhbUV4ZXJjaXNlKHRoaXMudHJhaW5pbmcudGVhbUlkLCBleGVyY2lzZSlcbiAgICAgIHRoaXMudG9hc3RBY3Rpb25TYXZlZCgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cblxuICB9XG4gIHJlbW92ZVRlYW1FeGVyY2lzZShzbGlkaW5nSXRlbTogSW9uSXRlbVNsaWRpbmcsIGV4ZXJjaXNlKSB7XG4gICAgc2xpZGluZ0l0ZW0uY2xvc2VPcGVuZWQoKTtcbiAgICB0cnkge1xuXG4gICAgICB0aGlzLmV4ZXJjaXNlU2VydmljZS5yZW1vdmVUZWFtRXhlcmNpc2UodGhpcy50cmFpbmluZy50ZWFtSWQsIGV4ZXJjaXNlKVxuICAgICAgdGhpcy50b2FzdEFjdGlvbkNhbmNlbGVkKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxuICB9XG5cbiAgb3BlbkV4ZXJjaXNlKGV4ZXJjaXNlKSB7XG4gICAgQnJvd3Nlci5vcGVuKHtcbiAgICAgIHVybDogZXhlcmNpc2UubGlua1xuICAgIH0pXG4gIH1cblxuICBhc3luYyB0b2FzdEFjdGlvblNhdmVkKCkge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdEN0cmwuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLnN1Y2Nlc3NfX2V4ZXJjaXNlX2FkZGVkXCIpKSxcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgICBjb2xvcjogXCJzdWNjZXNzXCIsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gIH1cblxuICBhc3luYyB0b2FzdEFjdGlvbkNhbmNlbGVkKCkge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdEN0cmwuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLnN1Y2Nlc3NfX2V4ZXJjaXNlX2RlbGV0ZWRcIikpLFxuICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIixcbiAgICAgIGNvbG9yOiBcImRhbmdlclwiLFxuICAgIH0pO1xuICAgIGF3YWl0IHRvYXN0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIHRvYXN0QWN0aW9uRXJyb3IoZXJyb3IpIHtcbiAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDdHJsLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIixcbiAgICAgIGNvbG9yOiBcImRhbmdlclwiLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgdG9hc3QucHJlc2VudCgpO1xuICB9XG4gIGFzeW5jIGNsb3NlKCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKG51bGwsIFwiY2xvc2VcIik7XG4gIH1cblxuICBhc3luYyBjb25maXJtKCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKG51bGwsIFwiY29uZmlybVwiKTtcbiAgfVxuXG59XG5mdW5jdGlvbiBvZihhcmcwOiB1bmRlZmluZWRbXSk6IGFueSB7XG4gIHRocm93IG5ldyBFcnJvcihcIkZ1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZC5cIik7XG59XG5cbiIsICI8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxuICA8aW9uLXRvb2xiYXI+XG4gICAgPGlvbi10aXRsZT5Wb3JsYWdlbjwvaW9uLXRpdGxlPlxuICAgIDxpb24tYnV0dG9ucyBzbG90PVwicHJpbWFyeVwiPlxuICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cImNsb3NlKClcIj57e1wiY29tbW9uLmNsb3NlXCIgfCB0cmFuc2xhdGV9fTwvaW9uLWJ1dHRvbj5cbiAgICA8L2lvbi1idXR0b25zPlxuICA8L2lvbi10b29sYmFyPlxuPC9pb24taGVhZGVyPlxuXG48aW9uLWNvbnRlbnQgW2Z1bGxzY3JlZW5dPVwidHJ1ZVwiPlxuICA8aW9uLWhlYWRlciBjb2xsYXBzZT1cImNvbmRlbnNlXCI+XG4gICAgPGlvbi10b29sYmFyPlxuICAgICAgPGlvbi10aXRsZSBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgVm9ybGFnZW5cbiAgICAgIDwvaW9uLXRpdGxlPlxuICAgIDwvaW9uLXRvb2xiYXI+XG4gIDwvaW9uLWhlYWRlcj5cblxuICA8aW9uLWxpc3QgKm5nSWY9XCJ0ZWFtRXhlcmNpc2VMaXN0JCB8IGFzeW5jIGFzIHRlYW1FeGVyY2lzZUxpc3Q7IGVsc2UgbG9hZGluZ1wiIGxpbmVzPVwiZnVsbFwiPlxuICAgIDxpb24tbGlzdC1oZWFkZXI+XG4gICAgICA8aW9uLWxhYmVsPlRlYW0gRmF2b3JpdGVuPC9pb24tbGFiZWw+XG4gICAgPC9pb24tbGlzdC1oZWFkZXI+XG5cbiAgICA8aW9uLWl0ZW0tc2xpZGluZyAjaXRlbSAqbmdGb3I9XCJsZXQgZXhlcmNpc2Ugb2YgdGVhbUV4ZXJjaXNlTGlzdFwiPlxuICAgICAgPGlvbi1pdGVtLW9wdGlvbnMgc2lkZT1cInN0YXJ0XCI+XG4gICAgICAgIDxpb24taXRlbS1vcHRpb24gKm5nSWY9XCJ0cmFpbmluZy5pZFwiIGNvbG9yPVwic3VjY2Vzc1wiPlxuICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cImNoZWNrbWFyay1jaXJjbGVcIiAoY2xpY2spPVwiYWRkRXhlcmNpc2UoaXRlbSwgZXhlcmNpc2UpXCI+PC9pb24taWNvbj5cbiAgICAgICAgPC9pb24taXRlbS1vcHRpb24+XG4gICAgICAgIDxpb24taXRlbS1vcHRpb24gY29sb3I9XCJkYW5nZXJcIj5cbiAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJzdGFyXCIgKGNsaWNrKT1cInJlbW92ZVRlYW1FeGVyY2lzZShpdGVtLCBleGVyY2lzZSlcIj48L2lvbi1pY29uPlxuICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbj5cbiAgICAgIDwvaW9uLWl0ZW0tb3B0aW9ucz5cblxuICAgICAgPGlvbi1pdGVtIHR5cGU9XCJidXR0b25cIiBkZXRhaWw9XCJ0cnVlXCI+XG4gICAgICAgIDxpb24tdGh1bWJuYWlsIHNsb3Q9XCJzdGFydFwiIChjbGljayk9XCJvcGVuRXhlcmNpc2UoZXhlcmNpc2UpXCI+XG4gICAgICAgICAgPGltZyBhbHQ9XCJ7e2V4ZXJjaXNlLnRpdGxlfX1cIiBzcmM9XCJ7e2V4ZXJjaXNlLmltYWdlfX1cIiAvPlxuICAgICAgICA8L2lvbi10aHVtYm5haWw+XG4gICAgICAgIDxpb24tbGFiZWwgY2xhc3M9XCJpb24tdGV4dC13cmFwXCIgKGNsaWNrKT1cIm9wZW5FeGVyY2lzZShleGVyY2lzZSlcIj5cbiAgICAgICAgICA8aDI+e3tleGVyY2lzZS50aXRsZX19PC9oMj5cbiAgICAgICAgICA8aDM+e3tleGVyY2lzZS5kZXNjcmlwdGlvbn19PC9oMz5cbiAgICAgICAgICA8aW9uLXRleHQgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICA8aDM+e3tleGVyY2lzZS5jYXRlZ29yeX19PC9oMz5cbiAgICAgICAgICA8L2lvbi10ZXh0PlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICA8L2lvbi1pdGVtLXNsaWRpbmc+XG4gIDwvaW9uLWxpc3Q+XG5cblxuXG4gIDxpb24tbGlzdCAqbmdJZj1cImZpbHRlcmVkRXhlcmNpc2VMaXN0JCB8IGFzeW5jIGFzIGV4ZXJjaXNlTGlzdFRlbXBsYXRlOyBlbHNlIGxvYWRpbmdcIiBsaW5lcz1cImZ1bGxcIj5cbiAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgPGlvbi1sYWJlbD5BdXN3YWhsIHZvbiDDnGJ1bmdlbjwvaW9uLWxhYmVsPlxuICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxuXG4gICAgPGlvbi1zZWFyY2hiYXIgW2RlYm91bmNlXT1cIjUwMFwiIGFuaW1hdGVkPVwidHJ1ZVwiIChpb25JbnB1dCk9XCJoYW5kbGVTZWFyY2goJGV2ZW50KVwiIHBsYWNlaG9sZGVyPVwiUGFzc3NwaWVsXCJcbiAgICAgIHNob3ctY2xlYXItYnV0dG9uPVwiZm9jdXNcIj48L2lvbi1zZWFyY2hiYXI+XG5cbiAgICA8aW9uLWl0ZW0tc2xpZGluZyAjaXRlbSAqbmdGb3I9XCJsZXQgZXhlcmNpc2Ugb2YgZXhlcmNpc2VMaXN0VGVtcGxhdGVcIj5cbiAgICAgIDxpb24taXRlbS1vcHRpb25zIHNpZGU9XCJzdGFydFwiPlxuICAgICAgICA8aW9uLWl0ZW0tb3B0aW9uICpuZ0lmPVwidHJhaW5pbmcuaWRcIiBjb2xvcj1cInN1Y2Nlc3NcIj5cbiAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJjaGVja21hcmstY2lyY2xlXCIgKGNsaWNrKT1cImFkZEV4ZXJjaXNlKGl0ZW0sIGV4ZXJjaXNlKVwiPjwvaW9uLWljb24+XG4gICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9uPlxuICAgICAgICA8aW9uLWl0ZW0tb3B0aW9uIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cInN0YXItb3V0bGluZVwiIChjbGljayk9XCJhZGRUZWFtRXhlcmNpc2UoaXRlbSwgZXhlcmNpc2UpXCI+PC9pb24taWNvbj5cbiAgICAgICAgPC9pb24taXRlbS1vcHRpb24+XG4gICAgICA8L2lvbi1pdGVtLW9wdGlvbnM+XG4gICAgICA8aW9uLWl0ZW0gdHlwZT1cImJ1dHRvblwiIGRldGFpbD1cInRydWVcIj5cbiAgICAgICAgPGlvbi10aHVtYm5haWwgc2xvdD1cInN0YXJ0XCIgKGNsaWNrKT1cIm9wZW5FeGVyY2lzZShleGVyY2lzZSlcIj5cbiAgICAgICAgICA8aW1nIGFsdD1cInt7ZXhlcmNpc2UudGl0bGV9fVwiIHNyYz1cInt7ZXhlcmNpc2UuaW1hZ2V9fVwiIC8+XG4gICAgICAgIDwvaW9uLXRodW1ibmFpbD5cbiAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIiAoY2xpY2spPVwib3BlbkV4ZXJjaXNlKGV4ZXJjaXNlKVwiPlxuICAgICAgICAgIDxoMj57e2V4ZXJjaXNlLnRpdGxlfX08L2gyPlxuICAgICAgICAgIDxoMz57e2V4ZXJjaXNlLmRlc2NyaXB0aW9ufX08L2gzPlxuICAgICAgICAgIDxpb24tdGV4dCBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgIDxoMz57e2V4ZXJjaXNlLmNhdGVnb3J5fX08L2gzPlxuICAgICAgICAgIDwvaW9uLXRleHQ+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cbiAgICA8L2lvbi1pdGVtLXNsaWRpbmc+XG4gIDwvaW9uLWxpc3Q+XG5cblxuXG5cbjwvaW9uLWNvbnRlbnQ+XG5cbjxuZy10ZW1wbGF0ZSAjbG9hZGluZz5cbiAgPGlvbi1saXN0ICpuZ0lmPVwibG9hZGluZ1wiPlxuICAgIDxpb24tZ3JpZD5cbiAgICAgIDxpb24tcm93PlxuICAgICAgICA8aW9uLWNvbCBzaXplLWxnPVwiNFwiIHNpemUtbWQ9XCI2XCIgc2l6ZS1zbT1cIjZcIiBzaXplPVwiMTJcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBza2VsZXRvblwiPlxuICAgICAgICAgIDxpb24tY2FyZD5cbiAgICAgICAgICAgIDxpb24tY2FyZC1oZWFkZXI+XG4gICAgICAgICAgICAgIDxpb24tY2FyZC1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogNjAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPC9pb24tY2FyZC1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgPGlvbi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA4MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgICA8L2lvbi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgPC9pb24tY2FyZC1oZWFkZXI+XG5cbiAgICAgICAgICAgIDxpb24tY2FyZC1jb250ZW50PlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogODAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDYwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA4MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogNjAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDgwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICA8L2lvbi1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgPC9pb24tY2FyZD5cbiAgICAgICAgPC9pb24tY29sPlxuICAgICAgPC9pb24tcm93PlxuICAgIDwvaW9uLWdyaWQ+XG4gIDwvaW9uLWxpc3Q+XG48L25nLXRlbXBsYXRlPiIsICJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQnJvd3NlciB9IGZyb20gXCJAY2FwYWNpdG9yL2Jyb3dzZXJcIjtcbmltcG9ydCB7IElvbkl0ZW1TbGlkaW5nLCBJdGVtUmVvcmRlckV2ZW50RGV0YWlsLCBNb2RhbENvbnRyb2xsZXIsIE5hdlBhcmFtcywgVG9hc3RDb250cm9sbGVyIH0gZnJvbSBcIkBpb25pYy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmaWx0ZXIsIGZpcnN0LCBsYXN0VmFsdWVGcm9tLCBtYXAsIHBpcGUsIHRha2UgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgVHJhaW5pbmcgfSBmcm9tIFwic3JjL2FwcC9tb2RlbHMvdHJhaW5pbmdcIjtcbmltcG9ydCB7IEV4ZXJjaXNlU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlL2V4ZXJjaXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRlYW1FeGVyY2lzZXNQYWdlIH0gZnJvbSBcIi4uLy4uL3RlYW0vdGVhbS1leGVyY2lzZXMvdGVhbS1leGVyY2lzZXMucGFnZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5pbXBvcnQgeyBUZWFtIH0gZnJvbSBcInNyYy9hcHAvbW9kZWxzL3RlYW1cIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLXRyYWluaW5nLWV4ZXJjaXNlc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdHJhaW5pbmctZXhlcmNpc2VzLnBhZ2UuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi90cmFpbmluZy1leGVyY2lzZXMucGFnZS5zY3NzXCJdLFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIFRyYWluaW5nRXhlcmNpc2VzUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dChcInRyYWluaW5nXCIpIHRyYWluaW5nOiBUcmFpbmluZztcblxuICBleGVyY2lzZUxpc3RUZW1wbGF0ZSQ6IE9ic2VydmFibGU8YW55W10+O1xuICBleGVyY2lzZUxpc3RUZW1wbGF0ZUJhY2t1cCQ6IE9ic2VydmFibGU8YW55W10+O1xuXG4gIHRlYW1FeGVyY2lzZUxpc3QkOiBPYnNlcnZhYmxlPGFueVtdPjtcbiAgdGVhbVRyYWluaW5nRXhlcmNpc2VMaXN0JDogT2JzZXJ2YWJsZTxhbnlbXT47XG5cbiAgc2tlbGV0b24gPSBuZXcgQXJyYXkoMTIpO1xuXG4gIGFsbG93RWRpdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHRlYW1BZG1pbkxpc3QkOiBPYnNlcnZhYmxlPFRlYW1bXT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLFxuICAgIHByaXZhdGUgZXhlcmNpc2VTZXJ2aWNlOiBFeGVyY2lzZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZiU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgIHB1YmxpYyB0b2FzdEN0cmw6IFRvYXN0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy50ZWFtQWRtaW5MaXN0JCA9IHRoaXMuZmJTZXJ2aWNlLmdldFRlYW1BZG1pbkxpc3QoKTtcblxuICB9XG4gIGlzVGVhbUFkbWluKHRlYW1BZG1pbkxpc3Q6IGFueVtdLCB0ZWFtSWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0ZWFtQWRtaW5MaXN0ICYmIHRlYW1BZG1pbkxpc3Quc29tZSh0ZWFtID0+IHRlYW0uaWQgPT09IHRlYW1JZCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRyYWluaW5nID0gdGhpcy5uYXZQYXJhbXMuZ2V0KFwidHJhaW5pbmdcIik7XG4gICAgdGhpcy50ZWFtVHJhaW5pbmdFeGVyY2lzZUxpc3QkID0gdGhpcy5leGVyY2lzZVNlcnZpY2UuZ2V0VGVhbVRyYWluaW5nRXhlcmNpc2VSZWZzKHRoaXMudHJhaW5pbmcudGVhbUlkLCB0aGlzLnRyYWluaW5nLmlkKTtcblxuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICBcbiAgfVxuICBoYW5kbGVSZW9yZGVyKGV2OiBDdXN0b21FdmVudDxJdGVtUmVvcmRlckV2ZW50RGV0YWlsPiwgbGlzdCkge1xuICAgIC8vIFRoZSBgZnJvbWAgYW5kIGB0b2AgcHJvcGVydGllcyBjb250YWluIHRoZSBpbmRleCBvZiB0aGUgaXRlbVxuICAgIC8vIHdoZW4gdGhlIGRyYWcgc3RhcnRlZCBhbmQgZW5kZWQsIHJlc3BlY3RpdmVseVxuICAgIGNvbnNvbGUubG9nKCdEcmFnZ2VkIGZyb20gaW5kZXgnLCBldi5kZXRhaWwuZnJvbSwgJ3RvJywgZXYuZGV0YWlsLnRvKTtcblxuICAgIC8vIEZpbmlzaCB0aGUgcmVvcmRlciBhbmQgcG9zaXRpb24gdGhlIGl0ZW0gaW4gdGhlIERPTSBiYXNlZCBvblxuICAgIC8vIHdoZXJlIHRoZSBnZXN0dXJlIGVuZGVkLiBUaGlzIG1ldGhvZCBjYW4gYWxzbyBiZSBjYWxsZWQgZGlyZWN0bHlcbiAgICAvLyBieSB0aGUgcmVvcmRlciBncm91cFxuICAgIGNvbnN0IG5ld0xpc3QgPSBldi5kZXRhaWwuY29tcGxldGUobGlzdCk7XG5cbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBuZXdMaXN0KXtcbiAgICAgIHRoaXMuZXhlcmNpc2VTZXJ2aWNlLnVwZGF0ZVRlYW1UcmFpbmluZ0V4ZXJjaXNlT3JkZXIodGhpcy50cmFpbmluZy50ZWFtSWQsdGhpcy50cmFpbmluZy5pZCwgZWxlbWVudC5pZCwgaW5kZXgpO1xuICAgIFxuICAgICAgaW5kZXgrKztcbiAgICB9XG5cblxuICB9XG4gIGhhbmRsZVNlYXJjaChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LmRldGFpbC52YWx1ZSk7XG5cbiAgICB0aGlzLmV4ZXJjaXNlTGlzdFRlbXBsYXRlJCA9IHRoaXMuZXhlcmNpc2VMaXN0VGVtcGxhdGVCYWNrdXAkLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgbWFwKGl0ZW1zID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhldmVudC5kZXRhaWwudmFsdWUudG9Mb3dlckNhc2UoKSkpO1xuICAgICAgfSlcbiAgICApXG4gIH1cblxuICBlZGl0KCkge1xuICAgIGlmICh0aGlzLmFsbG93RWRpdCkge1xuICAgICAgdGhpcy5hbGxvd0VkaXQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbGxvd0VkaXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUV4ZXJjaXNlKHNsaWRpbmdJdGVtOiBJb25JdGVtU2xpZGluZywgZXhlcmNpc2Upe1xuICAgIHNsaWRpbmdJdGVtLmNsb3NlT3BlbmVkKCk7XG4gICAgdGhpcy5leGVyY2lzZVNlcnZpY2UucmVtb3ZlVGVhbVRyYWluaW5nRXhlcmNpc2UodGhpcy50cmFpbmluZy50ZWFtSWQsdGhpcy50cmFpbmluZy5pZCwgZXhlcmNpc2UpO1xuICAgIHRoaXMudG9hc3RBY3Rpb25DYW5jZWxlZCgpO1xuICB9XG5cbiAgdHJhY2tJdGVtcyhpbmRleDogbnVtYmVyLCBpdGVtTnVtYmVyKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJ0cmFja0l0ZW1zIGJ5IGluZGV4IFwiICsgaW5kZXgpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwidHJhY2tJdGVtcyBieSBpdGVtbnVtYmVyIFwiICsgSlNPTi5zdHJpbmdpZnkoaXRlbU51bWJlcikpO1xuICAgIHJldHVybiBpdGVtTnVtYmVyO1xuICB9XG5cbiAgb3BlbkV4ZXJjaXNlKGV4ZXJjaXNlKSB7XG4gICAgQnJvd3Nlci5vcGVuKHtcbiAgICAgIHVybDogZXhlcmNpc2UubGlua1xuICAgIH0pXG4gIH1cblxuICBhc3luYyBvcGVuVGVhbVRyYWluaW5nRXhlcmNpc2UoKXtcbiAgICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbEN0cmwuY3JlYXRlKHtcbiAgICAgICAgY29tcG9uZW50OiBUZWFtRXhlcmNpc2VzUGFnZSxcbiAgICAgICAgcHJlc2VudGluZ0VsZW1lbnQ6IGF3YWl0IHRoaXMubW9kYWxDdHJsLmdldFRvcCgpLFxuICAgICAgICBjYW5EaXNtaXNzOiB0cnVlLFxuICAgICAgICBzaG93QmFja2Ryb3A6IHRydWUsXG4gICAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgICAgdHJhaW5pbmc6IHRoaXMudHJhaW5pbmdcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgbW9kYWwucHJlc2VudCgpO1xuICBcbiAgICAgIGNvbnN0IHsgZGF0YSwgcm9sZSB9ID0gYXdhaXQgbW9kYWwub25XaWxsRGlzbWlzcygpO1xuICBcbiAgICAgIGlmIChyb2xlID09PSBcImNvbmZpcm1cIikge1xuICAgICAgfVxuICBcbiAgfVxuXG4gIGFzeW5jIHRvYXN0QWN0aW9uU2F2ZWQoKSB7XG4gICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uc3VjY2Vzc19fc2F2ZWRcIikpLFxuICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIixcbiAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICB9KTtcblxuICAgIGF3YWl0IHRvYXN0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIHRvYXN0QWN0aW9uQ2FuY2VsZWQoKSB7XG4gICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uc3VjY2Vzc19fZXhlcmNpc2VfZGVsZXRlZFwiKSksXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgfSk7XG4gICAgYXdhaXQgdG9hc3QucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgdG9hc3RBY3Rpb25FcnJvcihlcnJvcikge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdEN0cmwuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gIH1cbiAgYXN5bmMgY2xvc2UoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kYWxDdHJsLmRpc21pc3MobnVsbCwgXCJjbG9zZVwiKTtcbiAgfVxuXG4gIGFzeW5jIGNvbmZpcm0oKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kYWxDdHJsLmRpc21pc3MobnVsbCwgXCJjb25maXJtXCIpO1xuICB9XG5cbn1cbiIsICI8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxuICA8aW9uLXRvb2xiYXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRlYW1BZG1pbkxpc3QkIHwgYXN5bmMgYXMgdGVhbUFkbWluTGlzdFwiPlxuICAgICAgPGlvbi1idXR0b25zICpuZ0lmPVwiaXNUZWFtQWRtaW4odGVhbUFkbWluTGlzdCwgdHJhaW5pbmcudGVhbUlkKVwiIHNsb3Q9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgPGlvbi1idXR0b24gKm5nSWY9XCIhYWxsb3dFZGl0XCIgKGNsaWNrKT1cImVkaXQoKVwiPnt7XCJjb21tb24uZWRpdFwiIHwgdHJhbnNsYXRlfX08L2lvbi1idXR0b24+XG4gICAgICAgIDxpb24tYnV0dG9uICpuZ0lmPVwiYWxsb3dFZGl0XCIgKGNsaWNrKT1cImVkaXQoKVwiPnt7XCJjb21tb24uZG9uZVwiIHwgdHJhbnNsYXRlfX08L2lvbi1idXR0b24+XG4gICAgICA8L2lvbi1idXR0b25zPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxpb24tdGl0bGU+w5xidW5nZW48L2lvbi10aXRsZT5cbiAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInByaW1hcnlcIj5cbiAgICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJjbG9zZSgpXCI+e3tcImNvbW1vbi5jbG9zZVwiIHwgdHJhbnNsYXRlfX08L2lvbi1idXR0b24+XG4gICAgPC9pb24tYnV0dG9ucz5cbiAgPC9pb24tdG9vbGJhcj5cblxuPC9pb24taGVhZGVyPlxuXG48aW9uLWNvbnRlbnQgW2Z1bGxzY3JlZW5dPVwidHJ1ZVwiPlxuICA8aW9uLWhlYWRlciBjb2xsYXBzZT1cImNvbmRlbnNlXCI+XG4gICAgPGlvbi10b29sYmFyPlxuICAgICAgPGlvbi10aXRsZSBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgw5xidW5nZW5cbiAgICAgIDwvaW9uLXRpdGxlPlxuICAgIDwvaW9uLXRvb2xiYXI+XG4gIDwvaW9uLWhlYWRlcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRlYW1UcmFpbmluZ0V4ZXJjaXNlTGlzdCQgfCBhc3luYyBhcyB0ZWFtVHJhaW5pbmdFeGVyY2lzZUxpc3Q7IGVsc2UgbG9hZGluZ1wiPlxuICAgIDxpb24tbGlzdCAqbmdJZj1cInRlYW1UcmFpbmluZ0V4ZXJjaXNlTGlzdC5sZW5ndGggPiAwXCIgbGluZXM9XCJmdWxsXCI+XG4gICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgIFRyYWluaW5nIHZvbToge3t0cmFpbmluZy5kYXRlLnRvRGF0ZSgpIHwgZGF0ZTonZGQuTU0uWVlZWSAnfX1cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgIDxpb24tYnV0dG9uICpuZ0lmPVwiYWxsb3dFZGl0XCIgKGNsaWNrKT1cIm9wZW5UZWFtVHJhaW5pbmdFeGVyY2lzZSgpXCI+XG4gICAgICAgICAgaGluenVmw7xnZW5cbiAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG5cbiAgICAgIDxpb24tcmVvcmRlci1ncm91cCBbZGlzYWJsZWRdPVwiZmFsc2VcIiAoaW9uSXRlbVJlb3JkZXIpPVwiaGFuZGxlUmVvcmRlcigkYW55KCRldmVudCksIHRlYW1UcmFpbmluZ0V4ZXJjaXNlTGlzdClcIj5cbiAgICAgICAgPGlvbi1pdGVtLXNsaWRpbmcgI2l0ZW0gKm5nRm9yPVwibGV0IGV4ZXJjaXNlIG9mIHRlYW1UcmFpbmluZ0V4ZXJjaXNlTGlzdDsgdHJhY2tCeTogdHJhY2tJdGVtc1wiPlxuICAgICAgICAgIDxpb24taXRlbS1vcHRpb25zICpuZ0lmPVwiYWxsb3dFZGl0XCIgc2lkZT1cInN0YXJ0XCI+XG4gICAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9uICBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlRXhlcmNpc2UoaXRlbSwgZXhlcmNpc2UpXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJ0cmFzaFwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbj5cbiAgICAgICAgPC9pb24taXRlbS1vcHRpb25zPlxuICAgICAgICA8aW9uLWl0ZW0gdHlwZT1cImJ1dHRvblwiIGRldGFpbD1cInRydWVcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDxpb24tdGh1bWJuYWlsIHNsb3Q9XCJzdGFydFwiPlxuICAgICAgICAgICAgPGltZyBhbHQ9XCJ7e2V4ZXJjaXNlLnRpdGxlfX1cIiBzcmM9XCJ7e2V4ZXJjaXNlLmltYWdlfX1cIiAvPlxuICAgICAgICAgIDwvaW9uLXRodW1ibmFpbD5cbiAgICAgICAgICA8aW9uLWxhYmVsICBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIiAoY2xpY2spPVwib3BlbkV4ZXJjaXNlKGV4ZXJjaXNlKVwiPlxuICAgICAgICAgICAgPGgyPnt7ZXhlcmNpc2UudGl0bGV9fTwvaDI+XG4gICAgICAgICAgICA8aDM+e3tleGVyY2lzZS5jYXRlZ29yeX19PC9oMz5cbiAgICAgICAgICAgIDxoMz57e2V4ZXJjaXNlLmRlc2NyaXB0aW9ufX08L2gzPlxuICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgIDxpb24tcmVvcmRlciAqbmdJZj1cImFsbG93RWRpdD09dHJ1ZVwiIHNsb3Q9XCJlbmRcIj48L2lvbi1yZW9yZGVyPlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICA8L2lvbi1pdGVtLXNsaWRpbmc+XG4gICAgICA8L2lvbi1yZW9yZGVyLWdyb3VwPlxuICAgIDwvaW9uLWxpc3Q+XG4gICAgPGlvbi1saXN0ICpuZ0lmPVwidGVhbVRyYWluaW5nRXhlcmNpc2VMaXN0Lmxlbmd0aCA9PSAwXCIgbGluZXM9XCJmdWxsXCI+XG4gICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgIFRyYWluaW5nIHZvbTpcbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgIDxpb24tYnV0dG9uICpuZ0lmPVwiYWxsb3dFZGl0XCIgKGNsaWNrKT1cIm9wZW5UZWFtVHJhaW5pbmdFeGVyY2lzZSgpXCI+XG4gICAgICAgICAgaGluenVmw7xnZW5cbiAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24tbm90ZT5cbiAgICAgICAgICBLZWluZSDDnGJ1bmdlbiB2b3JoYW5kZW5cbiAgICAgICAgPC9pb24tbm90ZT5cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgPC9pb24tbGlzdD5cbiAgPC9uZy1jb250YWluZXI+XG48L2lvbi1jb250ZW50PlxuXG48bmctdGVtcGxhdGUgI2xvYWRpbmc+XG4gIDxpb24tbGlzdCAqbmdJZj1cImxvYWRpbmdcIj5cbiAgICA8aW9uLWdyaWQ+XG4gICAgICA8aW9uLXJvdz5cbiAgICAgICAgPGlvbi1jb2wgc2l6ZS1sZz1cIjRcIiBzaXplLW1kPVwiNlwiIHNpemUtc209XCI2XCIgc2l6ZT1cIjEyXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2tlbGV0b25cIj5cbiAgICAgICAgICA8aW9uLWNhcmQ+XG4gICAgICAgICAgICA8aW9uLWNhcmQtaGVhZGVyPlxuICAgICAgICAgICAgICA8aW9uLWNhcmQtc3VidGl0bGU+XG4gICAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDYwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDwvaW9uLWNhcmQtc3VidGl0bGU+XG4gICAgICAgICAgICAgIDxpb24tY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogODAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPC9pb24tY2FyZC10aXRsZT5cbiAgICAgICAgICAgIDwvaW9uLWNhcmQtaGVhZGVyPlxuXG4gICAgICAgICAgICA8aW9uLWNhcmQtY29udGVudD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDgwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA2MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogODAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDYwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA4MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgPC9pb24tY2FyZC1jb250ZW50PlxuICAgICAgICAgIDwvaW9uLWNhcmQ+XG4gICAgICAgIDwvaW9uLWNvbD5cbiAgICAgIDwvaW9uLXJvdz5cbiAgICA8L2lvbi1ncmlkPlxuICA8L2lvbi1saXN0PlxuPC9uZy10ZW1wbGF0ZT4iLCAiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBbGVydENvbnRyb2xsZXIsIElvbkl0ZW1TbGlkaW5nLCBNb2RhbENvbnRyb2xsZXIsIE5hdlBhcmFtcywgVG9hc3RDb250cm9sbGVyIH0gZnJvbSBcIkBpb25pYy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5cbmltcG9ydCB7XG4gIE9ic2VydmFibGUsXG4gIFN1YnNjcmlwdGlvbixcbiAgY2F0Y2hFcnJvcixcbiAgY29tYmluZUxhdGVzdCxcbiAgZGVmYXVsdElmRW1wdHksXG4gIGZvcmtKb2luLFxuICBsYXN0VmFsdWVGcm9tLFxuICBtYXAsXG4gIG9mLFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IFRyYWluaW5nIH0gZnJvbSBcInNyYy9hcHAvbW9kZWxzL3RyYWluaW5nXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgVHJhaW5pbmdTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvZmlyZWJhc2UvdHJhaW5pbmcuc2VydmljZVwiO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvZmlyZWJhc2UvdXNlci1wcm9maWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRyYWluaW5nRXhlcmNpc2VzUGFnZSB9IGZyb20gXCIuLi90cmFpbmluZy1leGVyY2lzZXMvdHJhaW5pbmctZXhlcmNpc2VzLnBhZ2VcIjtcbmltcG9ydCB7IE1lbWJlclBhZ2UgfSBmcm9tIFwiLi4vLi4vbWVtYmVyL21lbWJlci5wYWdlXCI7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcInNyYy9hcHAvbW9kZWxzL3VzZXJcIjtcbmltcG9ydCB7IEV4ZXJjaXNlU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlL2V4ZXJjaXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRlYW0gfSBmcm9tIFwic3JjL2FwcC9tb2RlbHMvdGVhbVwiO1xuaW1wb3J0IHsgQ2x1YiB9IGZyb20gXCJzcmMvYXBwL21vZGVscy9jbHViXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC10cmFpbmluZy1kZXRhaWxcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3RyYWluaW5nLWRldGFpbC5wYWdlLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vdHJhaW5pbmctZGV0YWlsLnBhZ2Uuc2Nzc1wiXSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBUcmFpbmluZ0RldGFpbFBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoXCJkYXRhXCIpIHRyYWluaW5nOiBUcmFpbmluZztcbiAgQElucHV0KFwiaXNGdXR1cmVcIikgaXNGdXR1cmU6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBiYWNrQnV0dG9uU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgdHJhaW5pbmckOiBPYnNlcnZhYmxlPGFueT47XG4gIGV4ZXJjaXNlTGlzdCQ6IE9ic2VydmFibGU8YW55W10+O1xuXG4gIG1vZGUgPSBcInllc1wiO1xuXG4gIHVzZXIkOiBPYnNlcnZhYmxlPFVzZXI+O1xuICB1c2VyOiBVc2VyO1xuICB0ZWFtQWRtaW5MaXN0JDogT2JzZXJ2YWJsZTxUZWFtW10+O1xuICBjbHViTGlzdCQ6IE9ic2VydmFibGU8Q2x1YltdPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vZGFsQ3RybDogTW9kYWxDb250cm9sbGVyLFxuICAgIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcyxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHVzZXJQcm9maWxlU2VydmljZTogVXNlclByb2ZpbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmJTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSB0cmFpbmluZ1NlcnZpY2U6IFRyYWluaW5nU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvYXN0Q29udHJvbGxlcjogVG9hc3RDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYWxlcnRDdHJsOiBBbGVydENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBleGVyY2lzZVNlcnZpY2U6IEV4ZXJjaXNlU2VydmljZSxcbiAgKSB7XG5cblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50cmFpbmluZyA9IHRoaXMubmF2UGFyYW1zLmdldChcImRhdGFcIik7XG4gICAgdGhpcy50cmFpbmluZyQgPSB0aGlzLmdldFRyYWluaW5nKHRoaXMudHJhaW5pbmcudGVhbUlkLCB0aGlzLnRyYWluaW5nLmlkKTtcbiAgICB0aGlzLmV4ZXJjaXNlTGlzdCQgPSB0aGlzLmV4ZXJjaXNlU2VydmljZS5nZXRUZWFtVHJhaW5pbmdFeGVyY2lzZVJlZnModGhpcy50cmFpbmluZy50ZWFtSWQsIHRoaXMudHJhaW5pbmcuaWQpO1xuXG4gICAgdGhpcy5jbHViTGlzdCQgPSB0aGlzLmZiU2VydmljZS5nZXRDbHViTGlzdCgpO1xuICAgIHRoaXMudGVhbUFkbWluTGlzdCQgPSB0aGlzLmZiU2VydmljZS5nZXRUZWFtQWRtaW5MaXN0KCk7XG5cbiAgfVxuXG4gIGlvblZpZXdEaWRFbnRlcigpIHtcblxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgXG4gIH1cblxuICBpc1RlYW1BZG1pbih0ZWFtQWRtaW5MaXN0OiBhbnlbXSwgdGVhbUlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGVhbUFkbWluTGlzdCAmJiB0ZWFtQWRtaW5MaXN0LnNvbWUodGVhbSA9PiB0ZWFtLmlkID09PSB0ZWFtSWQpO1xuICB9XG4gIGVuYWJsZVRyYWluaW5nRXhlcmNpc2UoY2x1Ykxpc3QpIHtcbiAgICByZXR1cm4gY2x1Ykxpc3QgJiYgY2x1Ykxpc3Quc29tZShjbHViID0+IGNsdWIuaGFzRmVhdHVyZVRyYWluaW5nRXhlcmNpc2UgPT0gdHJ1ZSk7XG4gIH1cblxuICBnZXRUcmFpbmluZyh0ZWFtSWQ6IHN0cmluZywgdHJhaW5pbmdJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlciQoKS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHRhcCgodXNlcikgPT4ge1xuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBFcnJvcihcIlVzZXIgbm90IGZvdW5kXCIpO1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy50cmFpbmluZ1NlcnZpY2UuZ2V0VGVhbVRyYWluaW5nUmVmKHRlYW1JZCwgdHJhaW5pbmdJZCkpLFxuICAgICAgc3dpdGNoTWFwKCh0cmFpbmluZykgPT4ge1xuICAgICAgICBpZiAoIXRyYWluaW5nKSByZXR1cm4gb2YobnVsbCk7XG5cbiAgICAgICAgLy8gRmV0Y2ggdGVhbSBkZXRhaWxzXG4gICAgICAgIHJldHVybiB0aGlzLmZiU2VydmljZS5nZXRUZWFtUmVmKHRlYW1JZCkucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAodGVhbSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRlYW0pIHJldHVybiBvZihudWxsKTtcblxuICAgICAgICAgICAgLy8gRmV0Y2ggYWxsIHRlYW0gbWVtYmVycyBmaXJzdFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmJTZXJ2aWNlLmdldFRlYW1NZW1iZXJSZWZzKHRlYW1JZCkucGlwZShcbiAgICAgICAgICAgICAgc3dpdGNoTWFwKHRlYW1NZW1iZXJzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZWFtTWVtYmVyUHJvZmlsZXMkID0gdGVhbU1lbWJlcnMubWFwKG1lbWJlciA9PlxuICAgICAgICAgICAgICAgICAgdGhpcy51c2VyUHJvZmlsZVNlcnZpY2UuZ2V0VXNlclByb2ZpbGVCeUlkKG1lbWJlci5pZCkucGlwZShcbiAgICAgICAgICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgICAgICAgICAgbWFwKHByb2ZpbGUgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5tZW1iZXIsIC8vIFNwcmVhZCBtZW1iZXIgdG8gcmV0YWluIGFsbCBvcmlnaW5hbCBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgICAgICAgLi4ucHJvZmlsZSwgLy8gU3ByZWFkIHByb2ZpbGUgdG8gb3ZlcndyaXRlIGFuZCBhZGQgcHJvZmlsZSBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBwcm9maWxlLmZpcnN0TmFtZSB8fCBcIlVua25vd25cIixcbiAgICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZTogcHJvZmlsZS5sYXN0TmFtZSB8fCBcIlVua25vd25cIixcbiAgICAgICAgICAgICAgICAgICAgICByb2xlczogbWVtYmVyLnJvbGVzIHx8IFtdXG4gICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBGYWlsZWQgdG8gZmV0Y2ggcHJvZmlsZSBmb3IgdGVhbSBtZW1iZXIgJHttZW1iZXIuaWR9OmAsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHsgLi4ubWVtYmVyLCBmaXJzdE5hbWU6IFwiVW5rbm93blwiLCBsYXN0TmFtZTogXCJVbmtub3duXCIsIHJvbGVzOiBtZW1iZXIucm9sZXMgfHwgW10sIHN0YXR1czogbnVsbCB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIC8vIEZldGNoIGFsbCBhdHRlbmRlZXMgbmV4dFxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JrSm9pbih0ZWFtTWVtYmVyUHJvZmlsZXMkKS5waXBlKFxuICAgICAgICAgICAgICAgICAgbWFwKHRlYW1NZW1iZXJzV2l0aERldGFpbHMgPT4gdGVhbU1lbWJlcnNXaXRoRGV0YWlscy5maWx0ZXIobWVtYmVyID0+IG1lbWJlciAhPT0gdW5kZWZpbmVkKSksIC8vIEZpbHRlcmluZyBvdXQgdW5kZWZpbmVkIGVudHJpZXNcbiAgICAgICAgICAgICAgICAgIHN3aXRjaE1hcCh0ZWFtTWVtYmVyc1dpdGhEZXRhaWxzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhaW5pbmdTZXJ2aWNlLmdldFRlYW1UcmFpbmluZ3NBdHRlbmRlZXNSZWYodGVhbUlkLCB0cmFpbmluZ0lkKS5waXBlKFxuICAgICAgICAgICAgICAgICAgICAgIG1hcChhdHRlbmRlZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0ZW5kZWVEZXRhaWxzID0gYXR0ZW5kZWVzLm1hcChhdHRlbmRlZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbCA9IHRlYW1NZW1iZXJzV2l0aERldGFpbHMuZmluZChtZW1iZXIgPT4gbWVtYmVyICYmIG1lbWJlci5pZCA9PT0gYXR0ZW5kZWUuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGV0YWlsID8geyAuLi5kZXRhaWwsIHN0YXR1czogYXR0ZW5kZWUuc3RhdHVzIH0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gbnVsbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dGVuZGVlTGlzdFRydWUgPSBhdHRlbmRlZURldGFpbHMuZmlsdGVyKGF0dCA9PiBhdHQuc3RhdHVzID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5maXJzdE5hbWUubG9jYWxlQ29tcGFyZShiLmZpcnN0TmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0ZW5kZWVMaXN0RmFsc2UgPSBhdHRlbmRlZURldGFpbHMuZmlsdGVyKGF0dCA9PiBhdHQuc3RhdHVzID09PSBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuZmlyc3ROYW1lLmxvY2FsZUNvbXBhcmUoYi5maXJzdE5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbmRlZElkcyA9IG5ldyBTZXQoYXR0ZW5kZWVEZXRhaWxzLm1hcChhdHQgPT4gYXR0LmlkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNb2RpZnkgaGVyZSB0byBhZGQgJ3N0YXR1czogbnVsbCcgZm9yIGVhY2ggdW5yZXNwb25kZWQgbWVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bnJlc3BvbmRlZE1lbWJlcnMgPSB0ZWFtTWVtYmVyc1dpdGhEZXRhaWxzLmZpbHRlcihtZW1iZXIgPT4gIXJlc3BvbmRlZElkcy5oYXMobWVtYmVyLmlkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChtZW1iZXIgPT4gKHsgLi4ubWVtYmVyLCBzdGF0dXM6IG51bGwgfSkpLnNvcnQoKGEsIGIpID0+IGEuZmlyc3ROYW1lLmxvY2FsZUNvbXBhcmUoYi5maXJzdE5hbWUpKTsgLy8gRW5zdXJpbmcgJ3N0YXR1czogbnVsbCcgaXMgZXhwbGljaXRseSBzZXRcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlckF0dGVuZGVlID0gYXR0ZW5kZWVEZXRhaWxzLmZpbmQoYXR0ID0+IGF0dC5pZCA9PT0gdGhpcy51c2VyLnVpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSB1c2VyQXR0ZW5kZWUgPyB1c2VyQXR0ZW5kZWUuc3RhdHVzIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRyYWluaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLCAvLyBBZGQgdGVhbSBkZXRhaWxzIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVzOiBhdHRlbmRlZURldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlTGlzdFRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlTGlzdEZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB1bnJlc3BvbmRlZE1lbWJlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGF0dGVuZGVlczpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvZih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRyYWluaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLCAvLyBBZGQgdGVhbSBkZXRhaWxzIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVMaXN0VHJ1ZTogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlTGlzdEZhbHNlOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5yZXNwb25kZWRNZW1iZXJzOiB0ZWFtTWVtYmVyc1dpdGhEZXRhaWxzLmZpbHRlcihtZW1iZXIgPT4gbWVtYmVyICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAobWVtYmVyID0+ICh7IC4uLm1lbWJlciwgc3RhdHVzOiBudWxsIH0pKSwgLy8gQWxzbyBlbnN1cmUgJ3N0YXR1czogbnVsbCcgaGVyZSBmb3IgY29uc2lzdGVuY3lcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0ZWFtIG1lbWJlcnM6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHtcbiAgICAgICAgICAgICAgICAgIC4uLnRyYWluaW5nLFxuICAgICAgICAgICAgICAgICAgdGVhbSwgLy8gQWRkIHRlYW0gZGV0YWlscyBoZXJlXG4gICAgICAgICAgICAgICAgICBhdHRlbmRlZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVMaXN0VHJ1ZTogW10sXG4gICAgICAgICAgICAgICAgICBhdHRlbmRlZUxpc3RGYWxzZTogW10sXG4gICAgICAgICAgICAgICAgICB1bnJlc3BvbmRlZE1lbWJlcnM6IFtdLFxuICAgICAgICAgICAgICAgICAgc3RhdHVzOiBudWxsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGdldFRyYWluaW5nV2l0aEF0dGVuZGVlczpcIiwgZXJyKTtcbiAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgdG9nZ2xlQWxsKHN0YXR1czogYm9vbGVhbiwgdHJhaW5pbmc6IFRyYWluaW5nKSB7XG5cbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiBcIlNvbGxlbiBhbGxlIGFuZ2VtZWxkZXQgd2VyZGVuP1wiLFxuICAgICAgaGVhZGVyOiBcIkFsbGUgYW5tZWxkZW5cIixcbiAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiTmVpblwiLFxuICAgICAgICAgIHJvbGU6IFwiY2FuY2VsXCIsXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcm9sZTogXCJcIixcbiAgICAgICAgICB0ZXh0OiBcIk9LXCIsXG4gICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgbWVtYmVyIG9mIHRyYWluaW5nWyd1bnJlc3BvbmRlZE1lbWJlcnMnXSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBgU2V0IFN0YXR1cyAke3N0YXR1c30gZm9yIHVzZXIgJHt0aGlzLnVzZXIudWlkfSBhbmQgdGVhbSAke3RoaXMudHJhaW5pbmcudGVhbUlkfSBhbmQgdHJhaW5pbmcgJHt0cmFpbmluZy5pZH1gXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMudHJhaW5pbmdTZXJ2aWNlLnNldFRlYW1UcmFpbmluZ0F0dGVuZGVlU3RhdHVzQWRtaW4oXG4gICAgICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgICAgIHRoaXMudHJhaW5pbmcudGVhbUlkLFxuICAgICAgICAgICAgICAgIHRyYWluaW5nLmlkLFxuICAgICAgICAgICAgICAgIG1lbWJlci5pZCxcbiAgICAgICAgICAgICAgKS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMudG9hc3RBY3Rpb25FcnJvcihlKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJlc2VudFRvYXN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICBdXG4gICAgfSlcbiAgICBhbGVydC5wcmVzZW50KCk7XG5cblxuICB9XG5cbiAgYXN5bmMgdG9hc3RBY3Rpb25FcnJvcihlcnJvcikge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gIH1cblxuXG4gIGFzeW5jIHRvZ2dsZShzdGF0dXM6IGJvb2xlYW4sIHRyYWluaW5nOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBTZXQgU3RhdHVzICR7c3RhdHVzfSBmb3IgdXNlciAke3RoaXMudXNlci51aWR9IGFuZCB0ZWFtICR7dHJhaW5pbmcudGVhbUlkfSBhbmQgdHJhaW5pbmcgJHt0cmFpbmluZy5pZH1gXG4gICAgKTtcbiAgICBjb25zdCBuZXdTdGFydERhdGUgPSB0cmFpbmluZy5kYXRlLnRvRGF0ZSgpO1xuICAgIG5ld1N0YXJ0RGF0ZS5zZXRIb3VycyhOdW1iZXIodHJhaW5pbmcudGltZUZyb20uc3Vic3RyaW5nKDAsIDIpKSk7XG4gICAgLy8gY29uc29sZS5sb2cobmV3U3RhcnREYXRlKTtcblxuICAgIC8vIEdldCB0ZWFtIHRocmVzaG9sZCB2aWEgdHJhaW5pbmcudGVhbUlkXG4gICAgY29uc29sZS5sb2coXCJHcmVuendlcnQgXCIpXG4gICAgY29uc3QgdHJhaW5pbmdUaHJlc2hvbGQgPSB0cmFpbmluZy50ZWFtLnRyYWluaW5nVGhyZXNob2xkIHx8IDA7XG4gICAgY29uc29sZS5sb2codHJhaW5pbmdUaHJlc2hvbGQpO1xuICAgIC8vIFZlcnDDpHRldGUgQWJtZWxkdW5nP1xuICAgIGlmICgoKG5ld1N0YXJ0RGF0ZS5nZXRUaW1lKCkgLSBuZXcgRGF0ZSgpLmdldFRpbWUoKSkgPCAoMTAwMCAqIDYwICogNjAgKiB0cmFpbmluZ1RocmVzaG9sZCkpICYmIHN0YXR1cyA9PSBmYWxzZSAmJiB0cmFpbmluZ1RocmVzaG9sZCkge1xuICAgICAgY29uc29sZS5sb2coXCJ0b28gbGF0ZVwiKTtcbiAgICAgIGF3YWl0IHRoaXMudG9vTGF0ZVRvZ2dsZSgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE9LXG4gICAgICBhd2FpdCB0aGlzLnRyYWluaW5nU2VydmljZS5zZXRUZWFtVHJhaW5pbmdBdHRlbmRlZVN0YXR1cyhcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICB0cmFpbmluZy50ZWFtSWQsXG4gICAgICAgIHRyYWluaW5nLmlkXG4gICAgICApO1xuICAgICAgdGhpcy5wcmVzZW50VG9hc3QoKTtcbiAgICB9XG5cbiAgfVxuICBhc3luYyB0b2dnbGVJdGVtKFxuICAgIHNsaWRpbmdJdGVtOiBJb25JdGVtU2xpZGluZyxcbiAgICBzdGF0dXM6IGJvb2xlYW4sXG4gICAgdHJhaW5pbmc6IFRyYWluaW5nLFxuICAgIG1lbWJlcklkOiBzdHJpbmcsXG4gICkge1xuICAgIHNsaWRpbmdJdGVtLmNsb3NlT3BlbmVkKCk7XG5cbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBTZXQgU3RhdHVzICR7c3RhdHVzfSBmb3IgdXNlciAke21lbWJlcklkfSBhbmQgdGVhbSAke3RyYWluaW5nLnRlYW1JZH0gYW5kIHRyYWluaW5nICR7dHJhaW5pbmcuaWR9YFxuICAgICk7XG4gICAgYXdhaXQgdGhpcy50cmFpbmluZ1NlcnZpY2Uuc2V0VGVhbVRyYWluaW5nQXR0ZW5kZWVTdGF0dXNBZG1pbihcbiAgICAgIHN0YXR1cyxcbiAgICAgIHRyYWluaW5nLnRlYW1JZCxcbiAgICAgIHRyYWluaW5nLmlkLFxuICAgICAgbWVtYmVySWQsXG4gICAgKTtcbiAgICB0aGlzLnByZXNlbnRUb2FzdCgpO1xuICB9XG5cbiAgYXN5bmMgcHJlc2VudFRvYXN0KCkge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLnN1Y2Nlc3NfX3NhdmVkXCIpKSxcbiAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgfSk7XG4gICAgdG9hc3QucHJlc2VudCgpO1xuICB9XG4gIGFzeW5jIG9wZW5NZW1iZXIobWVtYmVyOiBQcm9maWxlKSB7XG4gICAgY29uc29sZS5sb2coXCJvcGVuTWVtYmVyXCIpO1xuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbEN0cmwuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogTWVtYmVyUGFnZSxcbiAgICAgIHByZXNlbnRpbmdFbGVtZW50OiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5nZXRUb3AoKSxcbiAgICAgIGNhbkRpc21pc3M6IHRydWUsXG4gICAgICBzaG93QmFja2Ryb3A6IHRydWUsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBkYXRhOiBtZW1iZXIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIG1vZGFsLnByZXNlbnQoKTtcblxuICAgIGNvbnN0IHsgZGF0YSwgcm9sZSB9ID0gYXdhaXQgbW9kYWwub25XaWxsRGlzbWlzcygpO1xuXG4gICAgaWYgKHJvbGUgPT09IFwiY29uZmlybVwiKSB7XG4gICAgfVxuICB9XG4gIGFzeW5jIG9wZW5UcmFpbmluZ0V4ZXJjaXNlTW9kYWwoKSB7XG4gICAgLy8gY29uc3QgcHJlc2VudGluZ0VsZW1lbnQgPSBhd2FpdCB0aGlzLm1vZGFsQ3RybC5nZXRUb3AoKTtcbiAgICBjb25zdCBtb2RhbCA9IGF3YWl0IHRoaXMubW9kYWxDdHJsLmNyZWF0ZSh7XG4gICAgICBjb21wb25lbnQ6IFRyYWluaW5nRXhlcmNpc2VzUGFnZSxcbiAgICAgIHByZXNlbnRpbmdFbGVtZW50OiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5nZXRUb3AoKSxcbiAgICAgIGNhbkRpc21pc3M6IHRydWUsXG4gICAgICBzaG93QmFja2Ryb3A6IHRydWUsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICB0cmFpbmluZzogdGhpcy50cmFpbmluZ1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBtb2RhbC5wcmVzZW50KCk7XG5cbiAgICBjb25zdCB7IGRhdGEsIHJvbGUgfSA9IGF3YWl0IG1vZGFsLm9uV2lsbERpc21pc3MoKTtcblxuICAgIGlmIChyb2xlID09PSBcImNvbmZpcm1cIikge1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHRvb0xhdGVUb2dnbGUoKSB7XG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiBcIkFibWVsZGVuIG5pY2h0IG3DtmdsaWNoXCIsXG4gICAgICBtZXNzYWdlOiBcIkJpdHRlIG1lbGRlIGRpY2ggZGlyZWt0IGJlaW0gVHJhaW5lcnRlYW0gdW0gZGljaCBhYnp1bWVsZGVuXCIsXG4gICAgICBidXR0b25zOiBbe1xuICAgICAgICByb2xlOiBcIlwiLFxuICAgICAgICB0ZXh0OiBcIk9LXCIsXG4gICAgICAgIGhhbmRsZXI6IChkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9KVxuICAgIGFsZXJ0LnByZXNlbnQoKVxuICB9XG5cbiAgYXN5bmMgY2xvc2UoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kYWxDdHJsLmRpc21pc3MobnVsbCwgXCJjbG9zZVwiKTtcbiAgfVxuXG4gIGFzeW5jIGNvbmZpcm0oKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kYWxDdHJsLmRpc21pc3ModGhpcy50cmFpbmluZywgXCJjb25maXJtXCIpO1xuICB9XG59XG5cblxuIiwgIjxuZy1jb250YWluZXIgKm5nSWY9XCJ0cmFpbmluZyQgfCBhc3luYyBhcyB0cmFpbmluZzsgZWxzZSBsb2FkaW5nXCI+XG4gIDxpb24taGVhZGVyIFt0cmFuc2x1Y2VudF09XCJ0cnVlXCI+XG4gICAgPGlvbi10b29sYmFyPlxuICAgICAgPGlvbi10aXRsZT57e1wiY29tbW9uLmRldGFpbHNcIiB8IHRyYW5zbGF0ZX19PC9pb24tdGl0bGU+XG4gICAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInByaW1hcnlcIj5cbiAgICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cImNsb3NlKClcIj57e1wiY29tbW9uLmNsb3NlXCIgfCB0cmFuc2xhdGV9fTwvaW9uLWJ1dHRvbj5cbiAgICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgPC9pb24tdG9vbGJhcj5cbiAgPC9pb24taGVhZGVyPlxuICA8IS0tIGNsYXNzPVwiaW9uLXBhZGRpbmdcIiAtLT5cblxuICA8aW9uLWNvbnRlbnQ+XG4gICAgPGlvbi1oZWFkZXIgY29sbGFwc2U9XCJjb25kZW5zZVwiPlxuICAgICAgPGlvbi10b29sYmFyPlxuICAgICAgICA8aW9uLXRpdGxlIHNpemU9XCJsYXJnZVwiPnt7XCJjb21tb24uZGV0YWlsc1wiIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgICAgIDwvaW9uLXRvb2xiYXI+XG4gICAgPC9pb24taGVhZGVyPlxuXG5cblxuICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiPlxuXG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwiaG9tZS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj5cbiAgICAgICAgICA8aDI+e3t0cmFpbmluZy5uYW1lfX08L2gyPlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJjYWxlbmRhci1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICB7e3RyYWluaW5nLmRhdGUudG9EYXRlKCkgfCBkYXRlOidkZC5NTS5ZWVlZICd9fSB7e3RyYWluaW5nLnRpbWVGcm9tXG4gICAgICAgICAgICB8IGRhdGU6J0hIOm1tJ319IFVociAtIHt7dHJhaW5pbmcudGltZVRvIHwgZGF0ZTonSEg6bW0nfX0gVWhyXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwibG9jYXRpb24tb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbGFiZWwgY2xhc3M9XCJpb24tdGV4dC13cmFwXCI+XG4gICAgICAgICAgPGgyPnt7dHJhaW5pbmcubG9jYXRpb259fSB7e3RyYWluaW5nLnN0cmVldEFuZE51bWJlcn19IHt7dHJhaW5pbmcuY2l0eX19PC9oMj5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwidHJvcGh5LW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsIGNsYXNzPVwiaW9uLXRleHQtd3JhcFwiPlxuICAgICAgICAgIDxoMj57e3RyYWluaW5nLmxpZ2F9fSB7e3RyYWluaW5nLnRlYW1OYW1lfX08L2gyPlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJpbmZvcm1hdGlvbi1jaXJjbGUtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbGFiZWwgY2xhc3M9XCJpb24tdGV4dC13cmFwXCI+XG4gICAgICAgICAgPGgyPnt7dHJhaW5pbmcuZGVzY3JpcHRpb259fTwvaDI+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cbiAgICA8L2lvbi1saXN0PlxuXG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2x1Ykxpc3QkIHwgYXN5bmMgYXMgY2x1Ykxpc3RcIj5cbiAgICAgIDxpb24tbGlzdCAqbmdJZj1cImVuYWJsZVRyYWluaW5nRXhlcmNpc2UoY2x1Ykxpc3QpXCIgW2luc2V0XT1cInRydWVcIiBsaW5lcz1cIm5vbmVcIj5cbiAgICAgICAgPGlvbi1pdGVtIChjbGljayk9XCJvcGVuVHJhaW5pbmdFeGVyY2lzZU1vZGFsKClcIiBkZXRhaWw9XCJ0cnVlXCI+XG4gICAgICAgICAgPGlvbi1sYWJlbD7DnGJ1bmdlbjwvaW9uLWxhYmVsPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJleGVyY2lzZUxpc3QkIHwgYXN5bmMgYXMgZXhlcmNpc2VMaXN0XCI+XG4gICAgICAgICAgICA8aW9uLWJhZGdlICpuZ0lmPVwiZXhlcmNpc2VMaXN0Lmxlbmd0aCA+IDBcIiBzbG90PVwiZW5kXCI+XG4gICAgICAgICAgICAgIHt7ZXhlcmNpc2VMaXN0Lmxlbmd0aH19XG4gICAgICAgICAgICA8L2lvbi1iYWRnZT5cbiAgICAgICAgICAgIDxpb24tbm90ZSAqbmdJZj1cImV4ZXJjaXNlTGlzdC5sZW5ndGggPT0gMFwiPlxuICAgICAgICAgICAgICBLZWluZSDDnGJ1bmdlbiB2b3JoYW5kZW5cbiAgICAgICAgICAgIDwvaW9uLW5vdGU+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICA8L2lvbi1saXN0PlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCIgbGluZXM9XCJub25lXCIgKm5nSWY9XCJpc0Z1dHVyZVwiPlxuICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAge3tcImNvbW1vbi5hdHRlbmRhbmNlc19fYWJzZW5jZXNcIiB8IHRyYW5zbGF0ZX19XG4gICAgICA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICAgIDxpb24taXRlbSBjbGFzcz1cIm15Y2x1YlN0YXR1c1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidHJhaW5pbmcuaGFzT3duUHJvcGVydHkoJ3N0YXR1cycpOyBlbHNlIGxvYWRpbmdTdGF0dXNcIj5cbiAgICAgICAgICA8aW9uLWZhYi1idXR0b24gKGNsaWNrKT1cInRvZ2dsZSh0cnVlLCB0cmFpbmluZylcIiBzaXplPVwic21hbGxcIiBjb2xvcj1cIndhcm5pbmdcIiBzbG90PVwic3RhcnRcIlxuICAgICAgICAgICAgKm5nSWY9XCJ0cmFpbmluZy5zdGF0dXMgPT09IG51bGxcIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiaGVscC1jaXJjbGVcIj4gPC9pb24taWNvbj5cbiAgICAgICAgICA8L2lvbi1mYWItYnV0dG9uPlxuXG4gICAgICAgICAgPGlvbi1mYWItYnV0dG9uIChjbGljayk9XCJ0b2dnbGUodHJ1ZSwgdHJhaW5pbmcpXCIgc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkYW5nZXJcIiBzbG90PVwic3RhcnRcIlxuICAgICAgICAgICAgKm5nSWY9XCJ0cmFpbmluZy5zdGF0dXMgPT09IGZhbHNlXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImNsb3NlLWNpcmNsZVwiPiA8L2lvbi1pY29uPlxuICAgICAgICAgIDwvaW9uLWZhYi1idXR0b24+XG5cbiAgICAgICAgICA8aW9uLWZhYi1idXR0b24gKGNsaWNrKT1cInRvZ2dsZShmYWxzZSwgdHJhaW5pbmcpXCIgc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJzdWNjZXNzXCIgc2xvdD1cInN0YXJ0XCJcbiAgICAgICAgICAgICpuZ0lmPVwidHJhaW5pbmcuc3RhdHVzID09PSB0cnVlXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImNoZWNrbWFyay1jaXJjbGVcIj4gPC9pb24taWNvbj5cbiAgICAgICAgICA8L2lvbi1mYWItYnV0dG9uPlxuXG4gICAgICAgICAgPGlvbi1sYWJlbD57e1wiY29tbW9uLm15X19zdGF0dXNcIiB8IHRyYW5zbGF0ZX19PC9pb24tbGFiZWw+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9pb24taXRlbT5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0ZWFtQWRtaW5MaXN0JCB8IGFzeW5jIGFzIHRlYW1BZG1pbkxpc3RcIj5cbiAgICAgICAgPGlvbi1pdGVtICpuZ0lmPVwidHJhaW5pbmdbJ3VucmVzcG9uZGVkTWVtYmVycyddLmxlbmd0aCA+IDAgJiYgaXNUZWFtQWRtaW4odGVhbUFkbWluTGlzdCwgdHJhaW5pbmcudGVhbUlkKVwiPlxuICAgICAgICAgIDxpb24taWNvbiBjb2xvcj1cIndhcm5pbmdcIiBzbG90PVwic3RhcnRcIiBuYW1lPVwiaGVscC1jaXJjbGVcIj5cbiAgICAgICAgICA8L2lvbi1pY29uPlxuICAgICAgICAgIDxpb24tbGFiZWw+e3tcImNvbW1vbi5ub3JlcGx5XCIgfCB0cmFuc2xhdGV9fToge3t0cmFpbmluZ1sndW5yZXNwb25kZWRNZW1iZXJzJ10ubGVuZ3RofX08L2lvbi1sYWJlbD5cblxuICAgICAgICAgIDxpb24tYnV0dG9uIGZpbGw9XCJjbGVhclwiIChjbGljayk9XCJ0b2dnbGVBbGwodHJ1ZSwgdHJhaW5pbmcpXCI+IHt7XCJjb21tb24uYWxsZV9hbm1lbGRlblwiIHxcbiAgICAgICAgICAgIHRyYW5zbGF0ZX19PC9pb24tYnV0dG9uPlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9pb24tbGlzdD5cblxuICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiPlxuICAgICAgPGlvbi1hY2NvcmRpb24tZ3JvdXAgW211bHRpcGxlXT1cInRydWVcIiBbdmFsdWVdPVwiWyd5ZXMnXVwiPlxuICAgICAgICA8aW9uLWFjY29yZGlvbiB2YWx1ZT1cInllc1wiICpuZ0lmPVwidHJhaW5pbmdbJ2F0dGVuZGVlTGlzdFRydWUnXS5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgPGlvbi1pdGVtIHNsb3Q9XCJoZWFkZXJcIiBjb2xvcj1cImxpZ2h0XCI+XG4gICAgICAgICAgICA8aW9uLWxhYmVsPnt7XCJjb21tb24ucHJlc2VudFwiIHwgdHJhbnNsYXRlfX06XG4gICAgICAgICAgICAgIHt7dHJhaW5pbmdbJ2F0dGVuZGVlTGlzdFRydWUnXS5sZW5ndGh9fTwvaW9uLWxhYmVsPlxuICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgPGRpdiBzbG90PVwiY29udGVudFwiPlxuICAgICAgICAgICAgPCEtLSBjbGFzcz1cImlvbi1wYWRkaW5nXCItLT5cbiAgICAgICAgICAgIDxpb24tbGlzdD5cbiAgICAgICAgICAgICAgPGlvbi1pdGVtLXNsaWRpbmcgI2l0ZW0gKm5nRm9yPVwibGV0IG1lbWJlciBvZiB0cmFpbmluZ1snYXR0ZW5kZWVMaXN0VHJ1ZSddXCI+XG4gICAgICAgICAgICAgICAgPGlvbi1pdGVtIGRldGFpbD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBjb2xvcj1cInN1Y2Nlc3NcIiBzbG90PVwic3RhcnRcIiBuYW1lPVwiY2hlY2ttYXJrLWNpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgPC9pb24taWNvbj5cblxuICAgICAgICAgICAgICAgICAgPGlvbi1sYWJlbCAoY2xpY2spPVwib3Blbk1lbWJlcihtZW1iZXIpXCI+e3ttZW1iZXIuZmlyc3ROYW1lfX0ge3ttZW1iZXIubGFzdE5hbWV9fTwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlvbi1iYWRnZSAqbmdGb3I9XCJsZXQgcm9sZSBvZiBtZW1iZXIucm9sZXNcIiBzbG90PVwiZW5kXCI+e3tyb2xlfX08L2lvbi1iYWRnZT5cbiAgICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0ZWFtQWRtaW5MaXN0JCB8IGFzeW5jIGFzIHRlYW1BZG1pbkxpc3RcIj5cbiAgICAgICAgICAgICAgICAgIDxpb24taXRlbS1vcHRpb25zICpuZ0lmPVwiaXNUZWFtQWRtaW4odGVhbUFkbWluTGlzdCwgdHJhaW5pbmcudGVhbUlkKVwiIHNpZGU9XCJlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlvbi1pdGVtLW9wdGlvbiBjb2xvcj1cInN1Y2Nlc3NcIiAqbmdJZj1cIm1lbWJlci5zdGF0dXMgPT09IGZhbHNlIHx8IG1lbWJlci5zdGF0dXMgPT09IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVJdGVtKGl0ZW0sIHRydWUsIHRyYWluaW5nLCBtZW1iZXIuaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwiY2hlY2ttYXJrLWNpcmNsZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9uIGNvbG9yPVwiZGFuZ2VyXCIgKm5nSWY9XCJtZW1iZXIuc3RhdHVzID09PSB0cnVlIHx8IG1lbWJlci5zdGF0dXMgPT09IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVJdGVtKGl0ZW0sIGZhbHNlLCB0cmFpbmluZywgbWVtYmVyLmlkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cImNsb3NlLWNpcmNsZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9pb24taXRlbS1vcHRpb25zPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L2lvbi1pdGVtLXNsaWRpbmc+XG4gICAgICAgICAgICA8L2lvbi1saXN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2lvbi1hY2NvcmRpb24+XG4gICAgICAgIDxpb24tYWNjb3JkaW9uIHZhbHVlPVwibm9cIiAqbmdJZj1cInRyYWluaW5nWydhdHRlbmRlZUxpc3RGYWxzZSddLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICA8aW9uLWl0ZW0gc2xvdD1cImhlYWRlclwiIGNvbG9yPVwibGlnaHRcIj5cbiAgICAgICAgICAgIDxpb24tbGFiZWw+e3tcImNvbW1vbi5hYnNlbnRcIiB8IHRyYW5zbGF0ZX19OlxuICAgICAgICAgICAgICB7e3RyYWluaW5nWydhdHRlbmRlZUxpc3RGYWxzZSddLmxlbmd0aH19PC9pb24tbGFiZWw+XG4gICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8IS0tIGNsYXNzPVwiaW9uLXBhZGRpbmdcIi0tPlxuICAgICAgICAgICAgPGlvbi1saXN0PlxuICAgICAgICAgICAgICA8aW9uLWl0ZW0tc2xpZGluZyAjaXRlbSAqbmdGb3I9XCJsZXQgbWVtYmVyIG9mIHRyYWluaW5nWydhdHRlbmRlZUxpc3RGYWxzZSddXCI+XG4gICAgICAgICAgICAgICAgPGlvbi1pdGVtIGRldGFpbD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBjb2xvcj1cImRhbmdlclwiIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJjbG9zZS1jaXJjbGVcIj5cbiAgICAgICAgICAgICAgICAgIDwvaW9uLWljb24+XG5cbiAgICAgICAgICAgICAgICAgIDxpb24tbGFiZWwgKGNsaWNrKT1cIm9wZW5NZW1iZXIobWVtYmVyKVwiPnt7bWVtYmVyLmZpcnN0TmFtZX19IHt7bWVtYmVyLmxhc3ROYW1lfX08L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpb24tYmFkZ2UgKm5nRm9yPVwibGV0IHJvbGUgb2YgbWVtYmVyLnJvbGVzXCIgc2xvdD1cImVuZFwiPnt7cm9sZX19PC9pb24tYmFkZ2U+XG4gICAgICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGVhbUFkbWluTGlzdCQgfCBhc3luYyBhcyB0ZWFtQWRtaW5MaXN0XCI+XG4gICAgICAgICAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9ucyAqbmdJZj1cImlzVGVhbUFkbWluKHRlYW1BZG1pbkxpc3QsIHRyYWluaW5nLnRlYW1JZClcIiBzaWRlPVwiZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpb24taXRlbS1vcHRpb24gY29sb3I9XCJzdWNjZXNzXCIgKm5nSWY9XCJtZW1iZXIuc3RhdHVzID09PSBmYWxzZSB8fCBtZW1iZXIuc3RhdHVzID09PSBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlSXRlbShpdGVtLCB0cnVlLCB0cmFpbmluZywgbWVtYmVyLmlkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cImNoZWNrbWFyay1jaXJjbGVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPGlvbi1pdGVtLW9wdGlvbiBjb2xvcj1cImRhbmdlclwiICpuZ0lmPVwibWVtYmVyLnN0YXR1cyA9PT0gdHJ1ZSB8fCBtZW1iZXIuc3RhdHVzID09PSBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlSXRlbShpdGVtLCBmYWxzZSwgdHJhaW5pbmcsIG1lbWJlci5pZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJjbG9zZS1jaXJjbGVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9ucz5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9pb24taXRlbS1zbGlkaW5nPlxuICAgICAgICAgICAgPC9pb24tbGlzdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9pb24tYWNjb3JkaW9uPlxuICAgICAgICA8aW9uLWFjY29yZGlvbiB2YWx1ZT1cIm51bGxcIiAqbmdJZj1cInRyYWluaW5nWyd1bnJlc3BvbmRlZE1lbWJlcnMnXS5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgPGlvbi1pdGVtIHNsb3Q9XCJoZWFkZXJcIiBjb2xvcj1cImxpZ2h0XCI+XG4gICAgICAgICAgICA8aW9uLWxhYmVsPnt7XCJjb21tb24ubm9yZXBseVwiIHwgdHJhbnNsYXRlfX06XG4gICAgICAgICAgICAgIHt7dHJhaW5pbmdbJ3VucmVzcG9uZGVkTWVtYmVycyddLmxlbmd0aH19PC9pb24tbGFiZWw+XG4gICAgICAgICAgICA8IS0tICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRlYW1BZG1pbkxpc3QkIHwgYXN5bmMgYXMgdGVhbUFkbWluTGlzdFwiPlxuICAgICAgICAgICAgICA8aW9uLWJ1dHRvblxuICAgICAgICAgICAgICAgICpuZ0lmPVwidHJhaW5pbmdbJ3VucmVzcG9uZGVkTWVtYmVycyddLmxlbmd0aCA+IDAgJiYgaXNUZWFtQWRtaW4odGVhbUFkbWluTGlzdCwgdHJhaW5pbmcudGVhbUlkKVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImNsZWFyXCIgc2xvdD1cImVuZFwiIChjbGljayk9XCJ0b2dnbGVBbGwodHJ1ZSwgdHJhaW5pbmcpXCI+IHt7XCJjb21tb24uYWxsZV9hbm1lbGRlblwiIHxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGV9fTwvaW9uLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPi0tPlxuICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgPGRpdiBzbG90PVwiY29udGVudFwiPlxuICAgICAgICAgICAgPCEtLSBjbGFzcz1cImlvbi1wYWRkaW5nXCItLT5cbiAgICAgICAgICAgIDxpb24tbGlzdD5cbiAgICAgICAgICAgICAgPGlvbi1pdGVtLXNsaWRpbmcgI2l0ZW0gKm5nRm9yPVwibGV0IG1lbWJlciBvZiB0cmFpbmluZ1sndW5yZXNwb25kZWRNZW1iZXJzJ11cIj5cbiAgICAgICAgICAgICAgICA8aW9uLWl0ZW0gZGV0YWlsPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIGNvbG9yPVwid2FybmluZ1wiIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJoZWxwLWNpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgPC9pb24taWNvbj5cblxuICAgICAgICAgICAgICAgICAgPGlvbi1sYWJlbCAoY2xpY2spPVwib3Blbk1lbWJlcihtZW1iZXIpXCI+e3ttZW1iZXIuZmlyc3ROYW1lfX0ge3ttZW1iZXIubGFzdE5hbWV9fTwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlvbi1iYWRnZSAqbmdGb3I9XCJsZXQgcm9sZSBvZiBtZW1iZXIucm9sZXNcIiBzbG90PVwiZW5kXCI+e3tyb2xlfX08L2lvbi1iYWRnZT5cbiAgICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0ZWFtQWRtaW5MaXN0JCB8IGFzeW5jIGFzIHRlYW1BZG1pbkxpc3RcIj5cbiAgICAgICAgICAgICAgICAgIDxpb24taXRlbS1vcHRpb25zICpuZ0lmPVwiaXNUZWFtQWRtaW4odGVhbUFkbWluTGlzdCwgdHJhaW5pbmcudGVhbUlkKVwiIHNpZGU9XCJlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlvbi1pdGVtLW9wdGlvbiBjb2xvcj1cInN1Y2Nlc3NcIiAqbmdJZj1cIm1lbWJlci5zdGF0dXMgPT09IGZhbHNlIHx8IG1lbWJlci5zdGF0dXMgPT09IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVJdGVtKGl0ZW0sIHRydWUsIHRyYWluaW5nLCBtZW1iZXIuaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwiY2hlY2ttYXJrLWNpcmNsZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9uIGNvbG9yPVwiZGFuZ2VyXCIgKm5nSWY9XCJtZW1iZXIuc3RhdHVzID09PSB0cnVlIHx8IG1lbWJlci5zdGF0dXMgPT09IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVJdGVtKGl0ZW0sIGZhbHNlLCB0cmFpbmluZywgbWVtYmVyLmlkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cImNsb3NlLWNpcmNsZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9pb24taXRlbS1vcHRpb25zPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L2lvbi1pdGVtLXNsaWRpbmc+XG5cbiAgICAgICAgICAgIDwvaW9uLWxpc3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaW9uLWFjY29yZGlvbj5cbiAgICAgIDwvaW9uLWFjY29yZGlvbi1ncm91cD5cbiAgICA8L2lvbi1saXN0PlxuICA8L2lvbi1jb250ZW50PlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy10ZW1wbGF0ZSAjbG9hZGluZ1N0YXR1cz5cbiAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDEwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA2MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuPC9uZy10ZW1wbGF0ZT5cblxuPCEtLSBUcmFpbmluZyBEZXRhaWxzIFNrZWxldG9uIC0tPlxuPG5nLXRlbXBsYXRlICNsb2FkaW5nPlxuICA8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxuICAgIDxpb24tdG9vbGJhcj5cbiAgICAgIDxpb24tdGl0bGU+XG4gICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiAxMDBweFwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICA8L2lvbi10aXRsZT5cbiAgICAgIDxpb24tYnV0dG9ucyBzbG90PVwicHJpbWFyeVwiPlxuICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogODBweDsgaGVpZ2h0OiAyMHB4OyBtYXJnaW46IDAgMTBweDtcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgPC9pb24tYnV0dG9ucz5cbiAgICA8L2lvbi10b29sYmFyPlxuICA8L2lvbi1oZWFkZXI+XG5cbiAgPGlvbi1jb250ZW50PlxuICAgIDxpb24taGVhZGVyIGNvbGxhcHNlPVwiY29uZGVuc2VcIj5cbiAgICAgIDxpb24tdG9vbGJhcj5cbiAgICAgICAgPGlvbi10aXRsZSBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogMTUwcHhcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICA8L2lvbi10aXRsZT5cbiAgICAgIDwvaW9uLXRvb2xiYXI+XG4gICAgPC9pb24taGVhZGVyPlxuXG4gICAgPCEtLSBUcmFpbmluZyBEZXRhaWxzIExpc3QgLS0+XG4gICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCI+XG4gICAgICA8IS0tIFRyYWluaW5nIE5hbWUgLS0+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwiaG9tZS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj5cbiAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogNzAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8IS0tIERhdGUgYW5kIFRpbWUgLS0+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwiY2FsZW5kYXItb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDg1JVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cblxuICAgICAgPCEtLSBMb2NhdGlvbiAtLT5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJsb2NhdGlvbi1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj5cbiAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogOTAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8IS0tIFRlYW0vTGVhZ3VlIC0tPlxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cInRyb3BoeS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj5cbiAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogNjAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8IS0tIERlc2NyaXB0aW9uIC0tPlxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cImluZm9ybWF0aW9uLWNpcmNsZS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj5cbiAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogODAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogNjAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgIDwvaW9uLWxpc3Q+XG5cbiAgICA8IS0tIEV4ZXJjaXNlcyBTZWN0aW9uIC0tPlxuICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiIGxpbmVzPVwibm9uZVwiPlxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiAxMDBweFwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgc2xvdD1cImVuZFwiIGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDQwcHg7IG1hcmdpbi1yaWdodDogMTZweFwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgIDwvaW9uLWxpc3Q+XG5cbiAgICA8IS0tIEF0dGVuZGFuY2UgU2VjdGlvbiAtLT5cbiAgICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIiBsaW5lcz1cIm5vbmVcIj5cbiAgICAgIDxpb24tbGlzdC1oZWFkZXI+XG4gICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiAxNDBweFwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICAgIFxuICAgICAgPCEtLSBNeSBTdGF0dXMgLS0+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzbG90PVwic3RhcnRcIiBzdHlsZT1cIndpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IGJvcmRlci1yYWRpdXM6IDUwJVwiPlxuICAgICAgICA8L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiAxMDBweFwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cblxuICAgICAgPCEtLSBObyBSZXBseSBDb3VudCB3aXRoIEFjdGlvbiAtLT5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJoZWxwLWNpcmNsZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDEyMHB4XCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBzbG90PVwiZW5kXCIgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogODBweFwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgIDwvaW9uLWxpc3Q+XG5cbiAgICA8IS0tIEF0dGVuZGFuY2UgTGlzdHMgLS0+XG4gICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCI+XG4gICAgICA8aW9uLWFjY29yZGlvbi1ncm91cCBbbXVsdGlwbGVdPVwidHJ1ZVwiIFt2YWx1ZV09XCJbJ3llcyddXCI+XG4gICAgICAgIDwhLS0gUHJlc2VudCAtLT5cbiAgICAgICAgPGlvbi1hY2NvcmRpb24gdmFsdWU9XCJ5ZXNcIj5cbiAgICAgICAgICA8aW9uLWl0ZW0gc2xvdD1cImhlYWRlclwiIGNvbG9yPVwibGlnaHRcIj5cbiAgICAgICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiAxNTBweFwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgIDxkaXYgc2xvdD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxpb24tbGlzdD5cbiAgICAgICAgICAgICAgPCEtLSBQcmVzZW50IE1lbWJlcnMgLS0+XG4gICAgICAgICAgICAgIDxpb24taXRlbT5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cImNoZWNrbWFyay1jaXJjbGVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogNjAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgc2xvdD1cImVuZFwiIHN0eWxlPVwid2lkdGg6IDYwcHg7IG1hcmdpbjogMCA4cHhcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBzbG90PVwiZW5kXCIgc3R5bGU9XCJ3aWR0aDogNjBweFwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICAgIDxpb24taXRlbT5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cImNoZWNrbWFyay1jaXJjbGVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogNzAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgc2xvdD1cImVuZFwiIHN0eWxlPVwid2lkdGg6IDYwcHhcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgICAgPC9pb24tbGlzdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9pb24tYWNjb3JkaW9uPlxuXG4gICAgICAgIDwhLS0gQWJzZW50IC0tPlxuICAgICAgICA8aW9uLWFjY29yZGlvbiB2YWx1ZT1cIm5vXCI+XG4gICAgICAgICAgPGlvbi1pdGVtIHNsb3Q9XCJoZWFkZXJcIiBjb2xvcj1cImxpZ2h0XCI+XG4gICAgICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogMTMwcHhcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgPC9pb24tYWNjb3JkaW9uPlxuXG4gICAgICAgIDwhLS0gTm8gUmVwbHkgLS0+XG4gICAgICAgIDxpb24tYWNjb3JkaW9uIHZhbHVlPVwibnVsbFwiPlxuICAgICAgICAgIDxpb24taXRlbSBzbG90PVwiaGVhZGVyXCIgY29sb3I9XCJsaWdodFwiPlxuICAgICAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDE0MHB4XCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgIDwvaW9uLWFjY29yZGlvbj5cbiAgICAgIDwvaW9uLWFjY29yZGlvbi1ncm91cD5cbiAgICA8L2lvbi1saXN0PlxuICA8L2lvbi1jb250ZW50PlxuPC9uZy10ZW1wbGF0ZT4iLCAiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNeUNsdWJBcHBXaWRnZXQgfSBmcm9tICdteWNsdWItd2lkZ2V0LXBsdWdpbic7XG5pbXBvcnQge1xuICBBbGVydENvbnRyb2xsZXIsXG4gIElvbkl0ZW1TbGlkaW5nLFxuICBJb25Sb3V0ZXJPdXRsZXQsXG4gIC8vIElvblJvdXRlck91dGxldCxcbiAgTWVudUNvbnRyb2xsZXIsXG4gIE1vZGFsQ29udHJvbGxlcixcbiAgVG9hc3RDb250cm9sbGVyLFxufSBmcm9tIFwiQGlvbmljL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9hdXRoXCI7XG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxuICBTdWJzY3JpcHRpb24sXG4gIGNhdGNoRXJyb3IsXG4gIGNvbWJpbmVMYXRlc3QsXG4gIGZpcnN0LFxuICBsYXN0VmFsdWVGcm9tLFxuICBtYXAsXG4gIG1lcmdlTWFwLFxuICBvZixcbiAgc2hhcmVSZXBsYXksXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbiAgdGFwLFxufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgVHJhaW5pbmcgfSBmcm9tIFwic3JjL2FwcC9tb2RlbHMvdHJhaW5pbmdcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUcmFpbmluZ1NlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS90cmFpbmluZy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUcmFpbmluZ0NyZWF0ZVBhZ2UgfSBmcm9tIFwiLi4vdHJhaW5pbmctY3JlYXRlL3RyYWluaW5nLWNyZWF0ZS5wYWdlXCI7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBUcmFpbmluZ0RldGFpbFBhZ2UgfSBmcm9tIFwiLi4vdHJhaW5pbmctZGV0YWlsL3RyYWluaW5nLWRldGFpbC5wYWdlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcbmltcG9ydCB7IFRlYW0gfSBmcm9tIFwic3JjL2FwcC9tb2RlbHMvdGVhbVwiO1xuLy8gaW1wb3J0IHsgRmlsdGVyU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2ZpbHRlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRXhlcmNpc2VTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvZmlyZWJhc2UvZXhlcmNpc2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2x1YiB9IGZyb20gXCJzcmMvYXBwL21vZGVscy9jbHViXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC10cmFpbmluZ3NcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3RyYWluaW5ncy5wYWdlLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vdHJhaW5pbmdzLnBhZ2Uuc2Nzc1wiXSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBUcmFpbmluZ3NQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KFwidGVhbVwiKSB0ZWFtOiBUZWFtO1xuICBASW5wdXQoXCJpc01vZGFsXCIpIGlzTW9kYWw6IGJvb2xlYW47XG4gIHNrZWxldG9uID0gbmV3IEFycmF5KDEyKTtcblxuICB1c2VyOiBVc2VyO1xuICB1c2VyJDogT2JzZXJ2YWJsZTxVc2VyPjtcblxuICB0cmFpbmluZ0xpc3QkOiBPYnNlcnZhYmxlPFRyYWluaW5nW10+O1xuICB0cmFpbmluZ0xpc3RQYXN0JDogT2JzZXJ2YWJsZTxUcmFpbmluZ1tdPjtcblxuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuXG4gIHRlYW1BZG1pbkxpc3QkOiBPYnNlcnZhYmxlPFRlYW1bXT47XG4gIGFjdGl2YXRlZFJvdXRlU3ViOiBTdWJzY3JpcHRpb247XG4gIC8vIHRlYW1MaXN0JDogT2JzZXJ2YWJsZTxUZWFtW10+O1xuICAvLyBmaWx0ZXJMaXN0OiBhbnlbXSA9IFtdO1xuICAvLyBmaWx0ZXJWYWx1ZTogc3RyaW5nID0gXCJcIjtcbiAgLy8gcHJpdmF0ZSB0ZWFtRmlsdGVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIC8vIHRyYWluaW5nTGlzdEJhY2t1cCQ6IE9ic2VydmFibGU8VHJhaW5pbmdbXT47XG4gIC8vIHRyYWluaW5nTGlzdFBhc3RCYWNrdXAkOiBPYnNlcnZhYmxlPFRyYWluaW5nW10+O1xuXG4gIC8vIHRyYWluaW5nTGlzdEJhY2t1cFN1YjogU3Vic2NyaXB0aW9uO1xuICAvLyB0cmFpbmluZ0xpc3RQYXN0QmFja3VwU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHRvYXN0Q29udHJvbGxlcjogVG9hc3RDb250cm9sbGVyLFxuICAgIC8vIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyT3V0bGV0OiBJb25Sb3V0ZXJPdXRsZXQsXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2RhbENvbnRyb2xsZXI6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZiU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdHJhaW5pbmdTZXJ2aWNlOiBUcmFpbmluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBtZW51Q3RybDogTWVudUNvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBhbGVydEN0cmw6IEFsZXJ0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgLy8gcHJpdmF0ZSBmaWx0ZXJTZXJ2aWNlOiBGaWx0ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBleGVyY2lzZVNlcnZpY2U6IEV4ZXJjaXNlU2VydmljZVxuICApIHtcbiAgICB0aGlzLm1lbnVDdHJsLmVuYWJsZSh0cnVlLCBcIm1lbnVcIik7XG5cblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gREFUQVxuICAgIHRoaXMudHJhaW5pbmdMaXN0JCA9IHRoaXMuZ2V0VGVhbVRyYWluaW5nKCk7XG4gICAgdGhpcy50cmFpbmluZ0xpc3RQYXN0JCA9IHRoaXMuZ2V0VGVhbVRyYWluaW5nUGFzdCgpO1xuICAgIC8vIENSRUFURVxuICAgIHRoaXMudGVhbUFkbWluTGlzdCQgPSB0aGlzLmZiU2VydmljZS5nZXRUZWFtQWRtaW5MaXN0KCk7XG5cbiAgICB0aGlzLmhhbmRsZU5hdmlnYXRpb25EYXRhKCk7XG5cblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy50cmFpbmluZ0xpc3QkLnBpcGUoXG4gICAgICB0YXAoYXN5bmMgKHRyYWluaW5ncykgPT4ge1xuICAgICAgICBjb25zdCB0cmFpbmluZyA9IHRyYWluaW5nc1swXTtcbiAgICAgICAgY29uc29sZS5sb2coJ1dpZGdldCBWYWx1ZSBmb3IgS2V5PW5leHRUcmFpbmluZzogJywgdHJhaW5pbmc/Lm5hbWUpO1xuICAgICAgICAvLyBNeUNsdWJBcHBXaWRnZXQuZWNobyh7IHZhbHVlOiBldmVudC5uYW1lIH0pO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgTXlDbHViQXBwV2lkZ2V0LnNldEl0ZW0oeyBrZXk6ICduZXh0VHJhaW5pbmcnLCB2YWx1ZTogdHJhaW5pbmc/Lm5hbWUsIGdyb3VwOiAnZ3JvdXAuYXBwLm15Y2x1Yi5kZWZhdWx0JyB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdXaWRnZXQgRXJyb3Igc2V0SXRlbTogJywgZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCBNeUNsdWJBcHBXaWRnZXQucmVsb2FkQWxsVGltZWxpbmVzKCk7XG4gICAgICAgICAgYXdhaXQgTXlDbHViQXBwV2lkZ2V0LnJlbG9hZFRpbWVsaW5lcyh7IG9mS2luZDogJ0FwcFdpZGdldCcgfSk7XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdXaWRnZXQgRXJyb3IgcmVsb2FkVGltZWxpbmVzOiAnLCBlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgfSlcbiAgICApLnN1YnNjcmliZSgpO1xuXG5cbiAgfVxuXG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZhdGVkUm91dGVTdWIpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGVTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG5cbiAgaXNUZWFtQWRtaW4odGVhbUFkbWluTGlzdDogYW55W10sIHRlYW1JZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgLy8gY29uc29sZS5sb2codGVhbUFkbWluTGlzdCwgdGVhbUlkKVxuICAgIHJldHVybiB0ZWFtQWRtaW5MaXN0ICYmIHRlYW1BZG1pbkxpc3Quc29tZSh0ZWFtID0+IHRlYW0uaWQgPT09IHRlYW1JZCk7XG4gIH1cblxuXG4gIGFzeW5jIGNsb3NlKCkge1xuXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kYWxDb250cm9sbGVyLmRpc21pc3MobnVsbCwgXCJjbG9zZVwiKTtcbiAgfVxuICBoYW5kbGVOYXZpZ2F0aW9uRGF0YSgpIHtcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlU3ViID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS51cmwuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgaWYgKHRoaXMucm91dGVyLmdldEN1cnJlbnROYXZpZ2F0aW9uKCkuZXh0cmFzICYmIHRoaXMucm91dGVyLmdldEN1cnJlbnROYXZpZ2F0aW9uKCkuZXh0cmFzLnN0YXRlICYmIHRoaXMucm91dGVyLmdldEN1cnJlbnROYXZpZ2F0aW9uKCkuZXh0cmFzLnN0YXRlW1widHlwZVwiXSA9PT0gXCJ0cmFpbmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IHB1c2hEYXRhID0gdGhpcy5yb3V0ZXIuZ2V0Q3VycmVudE5hdmlnYXRpb24oKS5leHRyYXMuc3RhdGU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUFVTSERBVEEgXCIgKyBwdXNoRGF0YSk7XG4gICAgICAgIGxldCB0cmFpbmluZzogVHJhaW5pbmcgPSB7XG4gICAgICAgICAgaWQ6IHB1c2hEYXRhW1wiaWRcIl0sXG4gICAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgICBsb2NhdGlvbjogXCJcIixcbiAgICAgICAgICBzdHJlZXRBbmROdW1iZXI6IFwiXCIsXG4gICAgICAgICAgcG9zdGFsQ29kZTogXCJcIixcbiAgICAgICAgICBjaXR5OiBcIlwiLFxuICAgICAgICAgIGRhdGU6IFRpbWVzdGFtcC5ub3coKSxcbiAgICAgICAgICB0aW1lRnJvbTogXCJcIixcbiAgICAgICAgICB0aW1lVG86IFwiXCIsXG4gICAgICAgICAgc3RhcnREYXRlOiBcIlwiLFxuICAgICAgICAgIGVuZERhdGU6IFwiXCIsXG4gICAgICAgICAgcmVwZWF0QW1vdW50OiBcIlwiLFxuICAgICAgICAgIHJlcGVhdEZyZXF1ZW5jeTogXCJcIixcbiAgICAgICAgICB0ZWFtSWQ6IHB1c2hEYXRhW1widGVhbUlkXCJdLFxuICAgICAgICAgIHRlYW1OYW1lOiBcIlwiLFxuICAgICAgICAgIGxpZ2E6IFwiXCIsXG4gICAgICAgICAgc3RhdHVzOiBmYWxzZSxcbiAgICAgICAgICBjb3VudEF0dGVuZGVlczogMCxcbiAgICAgICAgICBhdHRlbmRlZXM6IHVuZGVmaW5lZCxcbiAgICAgICAgICBleGVyY2lzZXM6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vcGVuVHJhaW5pbmdEZXRhaWxNb2RhbCh0cmFpbmluZywgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGRhdGFcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRUZWFtVHJhaW5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlciQoKS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHRhcCgodXNlcikgPT4ge1xuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKHVzZXIpID0+IHtcbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gb2YoW10pO1xuICAgICAgICByZXR1cm4gdGhpcy5mYlNlcnZpY2UuZ2V0VXNlclRlYW1SZWZzKHVzZXIpO1xuICAgICAgfSksXG4gICAgICAvLyB0YXAoKHRlYW1zKSA9PiBjb25zb2xlLmxvZyhcIlRlYW1zOlwiLCB0ZWFtcykpLFxuICAgICAgbWVyZ2VNYXAoKHRlYW1zKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnRlYW0gJiYgdGhpcy50ZWFtLmlkKSB7XG4gICAgICAgICAgdGVhbXMucHVzaCh7IGlkOiB0aGlzLnRlYW0uaWQgfSlcbiAgICAgICAgfSBlbHNlIGlmICh0ZWFtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gb2YoW10pXG4gICAgICAgIH07XG4gICAgICBcbiAgICAgICAgY29uc3QgcmVsZXZhbnRUZWFtcyA9IHRoaXMudGVhbSAmJiB0aGlzLnRlYW0uaWQgPyB0ZWFtcy5maWx0ZXIodGVhbSA9PiB0ZWFtLmlkID09PSB0aGlzLnRlYW0uaWQpIDogdGVhbXM7XG4gICAgICAgIFxuICAgICAgICAvLyBIb2xlIFRlYW0tTWl0Z2xpZWRlciBlaW5tYWxpZyBwcm8gVGVhbVxuICAgICAgICBjb25zdCB0ZWFtTWVtYmVyc01hcCQgPSBjb21iaW5lTGF0ZXN0KFxuICAgICAgICAgIHJlbGV2YW50VGVhbXMubWFwKHRlYW0gPT4gXG4gICAgICAgICAgICB0aGlzLmZiU2VydmljZS5nZXRUZWFtTWVtYmVyUmVmcyh0ZWFtLmlkKS5waXBlKFxuICAgICAgICAgICAgICBtYXAobWVtYmVycyA9PiAoeyB0ZWFtSWQ6IHRlYW0uaWQsIG1lbWJlcnMgfSkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApLnBpcGUoXG4gICAgICAgICAgbWFwKHRlYW1NZW1iZXJzID0+IFxuICAgICAgICAgICAgdGVhbU1lbWJlcnMucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcbiAgICAgICAgICAgICAgYWNjW2N1cnIudGVhbUlkXSA9IGN1cnIubWVtYmVycztcbiAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH0sIHt9KVxuICAgICAgICAgICksXG4gICAgICAgICAgc2hhcmVSZXBsYXkoMSkgLy8gQ2FjaGUgZGFzIEVyZ2VibmlzXG4gICAgICAgICk7XG4gICAgICBcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICAgIHRlYW1NZW1iZXJzTWFwJCxcbiAgICAgICAgICBjb21iaW5lTGF0ZXN0KFxuICAgICAgICAgICAgcmVsZXZhbnRUZWFtcy5tYXAoKHRlYW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhaW5pbmdTZXJ2aWNlLmdldFRlYW1UcmFpbmluZ3NSZWZzKHRlYW0uaWQpLnBpcGUoXG4gICAgICAgICAgICAgICAgLy8gLi4uIGV4aXN0aW5nIHRyYWluaW5nIHNlcnZpY2UgY29kZSAuLi5cbiAgICAgICAgICAgICAgICBzd2l0Y2hNYXAoKHRlYW1UcmFpbmluZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICh0ZWFtVHJhaW5pbmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFxuICAgICAgICAgICAgICAgICAgICB0ZWFtVHJhaW5pbmdzLm1hcCgodHJhaW5pbmcpID0+IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhaW5pbmdTZXJ2aWNlLmdldFRlYW1UcmFpbmluZ3NBdHRlbmRlZXNSZWYodGVhbS5pZCwgdHJhaW5pbmcuaWQpLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhlcmNpc2VTZXJ2aWNlLmdldFRlYW1UcmFpbmluZ0V4ZXJjaXNlUmVmcyh0ZWFtLmlkLCB0cmFpbmluZy5pZCksXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5mYlNlcnZpY2UuZ2V0VGVhbVJlZih0ZWFtLmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICBvZih0ZWFtLmlkKSwgLy8gw5xiZXJnZWJlIGRpZSB0ZWFtSWQgc3RhdHQgZXJuZXV0IE1lbWJlcnMgenUgbGFkZW5cbiAgICAgICAgICAgICAgICAgICAgXSkucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICBtYXAoKFthdHRlbmRlZXMsIGV4ZXJjaXNlcywgdGVhbURldGFpbHMsIHRlYW1JZF0pID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFpbmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1EZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbUlkXG4gICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICBdKS5waXBlKFxuICAgICAgICAgIG1hcCgoW3RlYW1NZW1iZXJzTWFwLCB0ZWFtc1RyYWluaW5nc10pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZsYXR0ZW5lZFRyYWluaW5ncyA9IHRlYW1zVHJhaW5pbmdzLmZsYXQoKTtcbiAgICAgICAgICAgIHJldHVybiBmbGF0dGVuZWRUcmFpbmluZ3MubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0ZWFtTWVtYmVycyA9IHRlYW1NZW1iZXJzTWFwW2l0ZW0udGVhbUlkXSB8fCBbXTtcbiAgICAgICAgICAgICAgY29uc3QgdmFsaWRBdHRlbmRlZXMgPSBpdGVtLmF0dGVuZGVlcy5maWx0ZXIoKGF0dCkgPT5cbiAgICAgICAgICAgICAgICBhdHQuc3RhdHVzID09PSB0cnVlICYmXG4gICAgICAgICAgICAgICAgdGVhbU1lbWJlcnMuc29tZShtZW1iZXIgPT4gbWVtYmVyLmlkID09PSBhdHQuaWQpXG4gICAgICAgICAgICAgICk7XG4gIFxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLml0ZW0udHJhaW5pbmcsXG4gICAgICAgICAgICAgICAgYXR0ZW5kZWVzOiBpdGVtLmF0dGVuZGVlcyxcbiAgICAgICAgICAgICAgICBleGVyY2lzZXM6IGl0ZW0uZXhlcmNpc2VzLFxuICAgICAgICAgICAgICAgIHRlYW06IGl0ZW0udGVhbURldGFpbHMgfHwge30sXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBpdGVtLmF0dGVuZGVlcy5maW5kKChhdHQpID0+IGF0dC5pZCA9PSB0aGlzLnVzZXIudWlkKT8uc3RhdHVzID8/IG51bGwsXG4gICAgICAgICAgICAgICAgY291bnRBdHRlbmRlZXM6IHZhbGlkQXR0ZW5kZWVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICB0ZWFtSWQ6IGl0ZW0udGVhbUlkLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWFwKChhbGxUcmFpbmluZ3MpID0+IFxuICAgICAgICAgICAgYWxsVHJhaW5pbmdzLnNvcnQoKGEsIGIpID0+IFxuICAgICAgICAgICAgICBUaW1lc3RhbXAuZnJvbU1pbGxpcyhhLnN0YXJ0RGF0ZSkuc2Vjb25kcyAtIFRpbWVzdGFtcC5mcm9tTWlsbGlzKGIuc3RhcnREYXRlKS5zZWNvbmRzXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGdldFRlYW1UcmFpbmluZ3NVcGNvbWluZzpcIiwgZXJyKTtcbiAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldFRlYW1UcmFpbmluZ1Bhc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlciQoKS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHRhcCgodXNlcikgPT4ge1xuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKHVzZXIpID0+IHtcbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gb2YoW10pO1xuICAgICAgICByZXR1cm4gdGhpcy5mYlNlcnZpY2UuZ2V0VXNlclRlYW1SZWZzKHVzZXIpO1xuICAgICAgfSksXG4gICAgICBtZXJnZU1hcCgodGVhbXMpID0+IHtcbiAgICAgICAgaWYgKHRoaXMudGVhbSAmJiB0aGlzLnRlYW0uaWQpIHtcbiAgICAgICAgICB0ZWFtcy5wdXNoKHsgaWQ6IHRoaXMudGVhbS5pZCB9KVxuICAgICAgICB9IGVsc2UgaWYgKHRlYW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBvZihbXSlcbiAgICAgICAgfTtcbiAgXG4gICAgICAgIGNvbnN0IHJlbGV2YW50VGVhbXMgPSB0aGlzLnRlYW0gJiYgdGhpcy50ZWFtLmlkID8gdGVhbXMuZmlsdGVyKHRlYW0gPT4gdGVhbS5pZCA9PT0gdGhpcy50ZWFtLmlkKSA6IHRlYW1zO1xuICAgICAgICBcbiAgICAgICAgLy8gSG9sZSBUZWFtLU1pdGdsaWVkZXIgZWlubWFsaWcgcHJvIFRlYW1cbiAgICAgICAgY29uc3QgdGVhbU1lbWJlcnNNYXAkID0gY29tYmluZUxhdGVzdChcbiAgICAgICAgICByZWxldmFudFRlYW1zLm1hcCh0ZWFtID0+IFxuICAgICAgICAgICAgdGhpcy5mYlNlcnZpY2UuZ2V0VGVhbU1lbWJlclJlZnModGVhbS5pZCkucGlwZShcbiAgICAgICAgICAgICAgbWFwKG1lbWJlcnMgPT4gKHsgdGVhbUlkOiB0ZWFtLmlkLCBtZW1iZXJzIH0pKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKS5waXBlKFxuICAgICAgICAgIG1hcCh0ZWFtTWVtYmVycyA9PiBcbiAgICAgICAgICAgIHRlYW1NZW1iZXJzLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgICAgICAgICAgIGFjY1tjdXJyLnRlYW1JZF0gPSBjdXJyLm1lbWJlcnM7XG4gICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCB7fSlcbiAgICAgICAgICApLFxuICAgICAgICAgIHNoYXJlUmVwbGF5KDEpXG4gICAgICAgICk7XG4gIFxuICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICAgICAgdGVhbU1lbWJlcnNNYXAkLFxuICAgICAgICAgIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgICAgICByZWxldmFudFRlYW1zLm1hcCgodGVhbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFpbmluZ1NlcnZpY2UuZ2V0VGVhbVRyYWluaW5nc1Bhc3RSZWZzKHRlYW0uaWQpLnBpcGUoXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUGVybWlzc2lvbiBlcnJvciBpbiBmZXRjaGluZyBnZXRUZWFtVHJhaW5pbmdzUmVmczpcIiwgdGVhbS5pZCwgZXJyKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgc3dpdGNoTWFwKCh0ZWFtVHJhaW5pbmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAodGVhbVRyYWluaW5ncy5sZW5ndGggPT09IDApIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgICAgICAgICAgICAgICAgdGVhbVRyYWluaW5ncy5tYXAoKHRyYWluaW5nKSA9PiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYWluaW5nU2VydmljZS5nZXRUZWFtVHJhaW5pbmdzQXR0ZW5kZWVzUmVmKHRlYW0uaWQsIHRyYWluaW5nLmlkKS5waXBlKFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQZXJtaXNzaW9uIGVycm9yIGluIGZldGNoaW5nIGdldFRlYW1UcmFpbmluZ3NBdHRlbmRlZXNSZWY6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhlcmNpc2VTZXJ2aWNlLmdldFRlYW1UcmFpbmluZ0V4ZXJjaXNlUmVmcyh0ZWFtLmlkLCB0cmFpbmluZy5pZCkucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUGVybWlzc2lvbiBlcnJvciBpbiBmZXRjaGluZyBnZXRUZWFtVHJhaW5pbmdFeGVyY2lzZVJlZnM6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmJTZXJ2aWNlLmdldFRlYW1SZWYodGVhbS5pZCkucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUGVybWlzc2lvbiBlcnJvciBpbiBmZXRjaGluZyBnZXRUZWFtUmVmOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2Yoe30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBvZih0ZWFtLmlkKSwgLy8gw5xiZXJnZWJlIGRpZSB0ZWFtSWQgc3RhdHQgZXJuZXV0IE1lbWJlcnMgenUgbGFkZW5cbiAgICAgICAgICAgICAgICAgICAgXSkucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICBtYXAoKFthdHRlbmRlZXMsIGV4ZXJjaXNlcywgdGVhbURldGFpbHMsIHRlYW1JZF0pID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFpbmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1EZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbUlkXG4gICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICBdKS5waXBlKFxuICAgICAgICAgIG1hcCgoW3RlYW1NZW1iZXJzTWFwLCB0ZWFtc1RyYWluaW5nc10pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZsYXR0ZW5lZFRyYWluaW5ncyA9IHRlYW1zVHJhaW5pbmdzLmZsYXQoKTtcbiAgICAgICAgICAgIHJldHVybiBmbGF0dGVuZWRUcmFpbmluZ3MubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0ZWFtTWVtYmVycyA9IHRlYW1NZW1iZXJzTWFwW2l0ZW0udGVhbUlkXSB8fCBbXTtcbiAgICAgICAgICAgICAgY29uc3QgdmFsaWRBdHRlbmRlZXMgPSBpdGVtLmF0dGVuZGVlcy5maWx0ZXIoKGF0dCkgPT5cbiAgICAgICAgICAgICAgICBhdHQuc3RhdHVzID09PSB0cnVlICYmXG4gICAgICAgICAgICAgICAgdGVhbU1lbWJlcnMuc29tZShtZW1iZXIgPT4gbWVtYmVyLmlkID09PSBhdHQuaWQpXG4gICAgICAgICAgICAgICk7XG4gIFxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLml0ZW0udHJhaW5pbmcsXG4gICAgICAgICAgICAgICAgYXR0ZW5kZWVzOiBpdGVtLmF0dGVuZGVlcyxcbiAgICAgICAgICAgICAgICBleGVyY2lzZXM6IGl0ZW0uZXhlcmNpc2VzLFxuICAgICAgICAgICAgICAgIHRlYW06IGl0ZW0udGVhbURldGFpbHMgfHwge30sXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBpdGVtLmF0dGVuZGVlcy5maW5kKChhdHQpID0+IGF0dC5pZCA9PSB0aGlzLnVzZXIudWlkKT8uc3RhdHVzID8/IG51bGwsXG4gICAgICAgICAgICAgICAgY291bnRBdHRlbmRlZXM6IHZhbGlkQXR0ZW5kZWVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICB0ZWFtSWQ6IGl0ZW0udGVhbUlkLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWFwKChhbGxUcmFpbmluZ3MpID0+IFxuICAgICAgICAgICAgYWxsVHJhaW5pbmdzLnNvcnQoKGIsIGEpID0+IFxuICAgICAgICAgICAgICBUaW1lc3RhbXAuZnJvbU1pbGxpcyhhLnN0YXJ0RGF0ZSkuc2Vjb25kcyAtIFRpbWVzdGFtcC5mcm9tTWlsbGlzKGIuc3RhcnREYXRlKS5zZWNvbmRzXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGdldFRlYW1UcmFpbmluZ3NVcGNvbWluZzpcIiwgZXJyKTtcbiAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIG9wZW5UcmFpbmluZ0RldGFpbE1vZGFsKHRyYWluaW5nOiBUcmFpbmluZywgaXNGdXR1cmU6IGJvb2xlYW4pIHtcbiAgICAvLyBjb25zdCBwcmVzZW50aW5nRWxlbWVudCA9IGF3YWl0IHRoaXMubW9kYWxDdHJsLmdldFRvcCgpO1xuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogVHJhaW5pbmdEZXRhaWxQYWdlLFxuICAgICAgcHJlc2VudGluZ0VsZW1lbnQ6IGF3YWl0IHRoaXMubW9kYWxDb250cm9sbGVyLmdldFRvcCgpLFxuICAgICAgLy8gcHJlc2VudGluZ0VsZW1lbnQ6IHRoaXMucm91dGVyT3V0bGV0Lm5hdGl2ZUVsLFxuICAgICAgY2FuRGlzbWlzczogdHJ1ZSxcbiAgICAgIHNob3dCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIGRhdGE6IHRyYWluaW5nLFxuICAgICAgICBpc0Z1dHVyZTogaXNGdXR1cmUsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIG1vZGFsLnByZXNlbnQoKTtcblxuICAgIGNvbnN0IHsgZGF0YSwgcm9sZSB9ID0gYXdhaXQgbW9kYWwub25XaWxsRGlzbWlzcygpO1xuXG4gICAgaWYgKHJvbGUgPT09IFwiY29uZmlybVwiKSB7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb3BlblRyYWluaW5nQ3JlYXRlTW9kYWwoKSB7XG4gICAgLy8gY29uc3QgcHJlc2VudGluZ0VsZW1lbnQgPSBhd2FpdCB0aGlzLm1vZGFsQ3RybC5nZXRUb3AoKTtcbiAgICBjb25zdCBtb2RhbCA9IGF3YWl0IHRoaXMubW9kYWxDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBjb21wb25lbnQ6IFRyYWluaW5nQ3JlYXRlUGFnZSxcbiAgICAgIC8vIHByZXNlbnRpbmdFbGVtZW50OiB0aGlzLnJvdXRlck91dGxldC5uYXRpdmVFbCxcbiAgICAgIHByZXNlbnRpbmdFbGVtZW50OiBhd2FpdCB0aGlzLm1vZGFsQ29udHJvbGxlci5nZXRUb3AoKSxcbiAgICAgIGNhbkRpc21pc3M6IHRydWUsXG4gICAgICBzaG93QmFja2Ryb3A6IHRydWUsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBkYXRhOiBcIlwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBtb2RhbC5wcmVzZW50KCk7XG5cbiAgICBjb25zdCB7IGRhdGEsIHJvbGUgfSA9IGF3YWl0IG1vZGFsLm9uV2lsbERpc21pc3MoKTtcblxuICAgIGlmIChyb2xlID09PSBcImNvbmZpcm1cIikge1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNvcHlUcmFpbmluZyhzbGlkaW5nSXRlbTogSW9uSXRlbVNsaWRpbmcsIHRyYWluaW5nKSB7XG4gICAgc2xpZGluZ0l0ZW0uY2xvc2VPcGVuZWQoKTtcblxuICAgIC8vIGNvbnN0IHByZXNlbnRpbmdFbGVtZW50ID0gYXdhaXQgdGhpcy5tb2RhbEN0cmwuZ2V0VG9wKCk7XG4gICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgY29tcG9uZW50OiBUcmFpbmluZ0NyZWF0ZVBhZ2UsXG4gICAgICAvLyBwcmVzZW50aW5nRWxlbWVudDogdGhpcy5yb3V0ZXJPdXRsZXQubmF0aXZlRWwsXG4gICAgICBwcmVzZW50aW5nRWxlbWVudDogYXdhaXQgdGhpcy5tb2RhbENvbnRyb2xsZXIuZ2V0VG9wKCksXG4gICAgICBjYW5EaXNtaXNzOiB0cnVlLFxuICAgICAgc2hvd0JhY2tkcm9wOiB0cnVlLFxuICAgICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgZGF0YTogdHJhaW5pbmcsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIG1vZGFsLnByZXNlbnQoKTtcblxuICAgIGNvbnN0IHsgZGF0YSwgcm9sZSB9ID0gYXdhaXQgbW9kYWwub25XaWxsRGlzbWlzcygpO1xuXG4gICAgaWYgKHJvbGUgPT09IFwiY29uZmlybVwiKSB7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZGVsZXRlVHJhaW5pbmcoc2xpZGluZ0l0ZW06IElvbkl0ZW1TbGlkaW5nLCB0cmFpbmluZykge1xuICAgIHNsaWRpbmdJdGVtLmNsb3NlT3BlbmVkKCk7XG4gICAgYXdhaXQgdGhpcy50cmFpbmluZ1NlcnZpY2UuZGVsZXRlVGVhbVRyYWluaW5nKHRyYWluaW5nLnRlYW1JZCwgdHJhaW5pbmcuaWQpO1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLnN1Y2Nlc3NfX3RyYWluaW5nX2RlbGV0ZWRcIikpLFxuICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgIH0pO1xuICAgIHRvYXN0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIHRvZ2dsZUFsbCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdHJhaW5pbmdMaXN0ID0gYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYWluaW5nTGlzdCQucGlwZSh0YWtlKDEpKSk7XG5cbiAgICAgIGZvciAoY29uc3QgdHJhaW5pbmcgb2YgdHJhaW5pbmdMaXN0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTZXQgU3RhdHVzIHRydWUgZm9yIHVzZXIgJHt0aGlzLnVzZXIudWlkfSBhbmQgdGVhbSAke3RyYWluaW5nLnRlYW1JZH0gYW5kIHRyYWluaW5nICR7dHJhaW5pbmcuaWR9YCk7XG4gICAgICAgIGF3YWl0IHRoaXMudHJhaW5pbmdTZXJ2aWNlLnNldFRlYW1UcmFpbmluZ0F0dGVuZGVlU3RhdHVzKFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgdHJhaW5pbmcudGVhbUlkLFxuICAgICAgICAgIHRyYWluaW5nLmlkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBhd2FpdCB0aGlzLnByZXNlbnRUb2FzdCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZHVyaW5nIHRvZ2dsZUFsbCBvcGVyYXRpb246XCIsIGVycm9yKTtcbiAgICAgIC8vIE9wdGlvbmFsbHkgaGFuZGxlIHRoZSBlcnJvciwgZS5nLiwgc2hvdyBhbiBlcnJvciBtZXNzYWdlXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgdG9nZ2xlKHN0YXR1czogYm9vbGVhbiwgdHJhaW5pbmc6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYFNldCBTdGF0dXMgJHtzdGF0dXN9IGZvciB1c2VyICR7dGhpcy51c2VyLnVpZH0gYW5kIHRlYW0gJHt0cmFpbmluZy50ZWFtSWR9IGFuZCB0cmFpbmluZyAke3RyYWluaW5nLmlkfWBcbiAgICApO1xuICAgIGNvbnN0IG5ld1N0YXJ0RGF0ZSA9IHRyYWluaW5nLmRhdGUudG9EYXRlKCk7XG4gICAgbmV3U3RhcnREYXRlLnNldEhvdXJzKE51bWJlcih0cmFpbmluZy50aW1lRnJvbS5zdWJzdHJpbmcoMCwgMikpKTtcbiAgICAvLyBjb25zb2xlLmxvZyhuZXdTdGFydERhdGUpO1xuXG4gICAgLy8gR2V0IHRlYW0gdGhyZXNob2xkIHZpYSB0cmFpbmluZy50ZWFtSWRcbiAgICBjb25zb2xlLmxvZyhcIkdyZW56d2VydCBcIilcbiAgICBjb25zdCB0cmFpbmluZ1RocmVzaG9sZCA9IHRyYWluaW5nLnRlYW0udHJhaW5pbmdUaHJlc2hvbGQgfHwgMDtcbiAgICBjb25zb2xlLmxvZyh0cmFpbmluZ1RocmVzaG9sZCk7XG4gICAgLy8gVmVycMOkdGV0ZSBBYm1lbGR1bmc/XG4gICAgaWYgKCgobmV3U3RhcnREYXRlLmdldFRpbWUoKSAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpKSA8ICgxMDAwICogNjAgKiA2MCAqIHRyYWluaW5nVGhyZXNob2xkKSkgJiYgc3RhdHVzID09IGZhbHNlICYmIHRyYWluaW5nVGhyZXNob2xkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInRvbyBsYXRlXCIpO1xuICAgICAgYXdhaXQgdGhpcy50b29MYXRlVG9nZ2xlKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT0tcbiAgICAgIGF3YWl0IHRoaXMudHJhaW5pbmdTZXJ2aWNlLnNldFRlYW1UcmFpbmluZ0F0dGVuZGVlU3RhdHVzKFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIHRyYWluaW5nLnRlYW1JZCxcbiAgICAgICAgdHJhaW5pbmcuaWRcbiAgICAgICk7XG4gICAgICB0aGlzLnByZXNlbnRUb2FzdCgpO1xuICAgIH1cblxuICB9XG5cbiAgYXN5bmMgdG9nZ2xlSXRlbShcbiAgICBzbGlkaW5nSXRlbTogSW9uSXRlbVNsaWRpbmcsXG4gICAgc3RhdHVzOiBib29sZWFuLFxuICAgIHRyYWluaW5nOiBhbnlcbiAgKSB7XG4gICAgc2xpZGluZ0l0ZW0uY2xvc2VPcGVuZWQoKTtcblxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYFNldCBTdGF0dXMgJHtzdGF0dXN9IGZvciB1c2VyICR7dGhpcy51c2VyLnVpZH0gYW5kIHRlYW0gJHt0cmFpbmluZy50ZWFtSWR9IGFuZCB0cmFpbmluZyAke3RyYWluaW5nLmlkfWBcbiAgICApO1xuICAgIGNvbnN0IG5ld1N0YXJ0RGF0ZSA9IHRyYWluaW5nLmRhdGUudG9EYXRlKCk7XG4gICAgbmV3U3RhcnREYXRlLnNldEhvdXJzKE51bWJlcih0cmFpbmluZy50aW1lRnJvbS5zdWJzdHJpbmcoMCwgMikpKTtcbiAgICAvLyBjb25zb2xlLmxvZyhuZXdTdGFydERhdGUpO1xuXG4gICAgLy8gR2V0IHRlYW0gdGhyZXNob2xkIHZpYSB0cmFpbmluZy50ZWFtSWRcbiAgICBjb25zb2xlLmxvZyhcIkdyZW56d2VydCBcIilcbiAgICBjb25zdCB0cmFpbmluZ1RocmVzaG9sZCA9IHRyYWluaW5nLnRlYW0udHJhaW5pbmdUaHJlc2hvbGQgfHwgMDtcbiAgICBjb25zb2xlLmxvZyh0cmFpbmluZ1RocmVzaG9sZCk7XG4gICAgLy8gVmVycMOkdGV0ZSBBYm1lbGR1bmc/XG4gICAgaWYgKCgobmV3U3RhcnREYXRlLmdldFRpbWUoKSAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpKSA8ICgxMDAwICogNjAgKiA2MCAqIHRyYWluaW5nVGhyZXNob2xkKSkgJiYgc3RhdHVzID09IGZhbHNlICYmIHRyYWluaW5nVGhyZXNob2xkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInRvbyBsYXRlXCIpO1xuICAgICAgYXdhaXQgdGhpcy50b29MYXRlVG9nZ2xlKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT0tcbiAgICAgIGF3YWl0IHRoaXMudHJhaW5pbmdTZXJ2aWNlLnNldFRlYW1UcmFpbmluZ0F0dGVuZGVlU3RhdHVzKFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIHRyYWluaW5nLnRlYW1JZCxcbiAgICAgICAgdHJhaW5pbmcuaWRcbiAgICAgICk7XG4gICAgICB0aGlzLnByZXNlbnRUb2FzdCgpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHByZXNlbnRUb2FzdCgpIHtcbiAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5zdWNjZXNzX19zYXZlZFwiKSksXG4gICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgIH0pO1xuICAgIHRvYXN0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIHRvb0xhdGVUb2dnbGUoKSB7XG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiBcIkFibWVsZGVuIG5pY2h0IG3DtmdsaWNoXCIsXG4gICAgICBtZXNzYWdlOiBcIkJpdHRlIG1lbGRlIGRpY2ggZGlyZWt0IGJlaW0gVHJhaW5lcnRlYW0gdW0gZGljaCBhYnp1bWVsZGVuXCIsXG4gICAgICBidXR0b25zOiBbe1xuICAgICAgICByb2xlOiBcIlwiLFxuICAgICAgICB0ZXh0OiBcIk9LXCIsXG4gICAgICAgIGhhbmRsZXI6IChkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9KVxuICAgIGFsZXJ0LnByZXNlbnQoKVxuICB9XG5cbn1cbiIsICI8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxuICA8aW9uLXRvb2xiYXI+XG4gICAgPGlvbi1idXR0b25zIHNsb3Q9XCJzdGFydFwiPlxuICAgICAgPGlvbi1tZW51LWJ1dHRvbiAqbmdJZj1cIiFpc01vZGFsXCI+PC9pb24tbWVudS1idXR0b24+XG4gICAgPC9pb24tYnV0dG9ucz5cbiAgICA8aW9uLXRpdGxlPiB7e1wiY29tbW9uLnRyYWluaW5nXCIgfCB0cmFuc2xhdGV9fTwvaW9uLXRpdGxlPlxuICAgIDxpb24tYnV0dG9ucyAqbmdJZj1cImlzTW9kYWxcIiBzbG90PVwicHJpbWFyeVwiPlxuICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cImNsb3NlKClcIj57e1wiY29tbW9uLmNsb3NlXCIgfCB0cmFuc2xhdGV9fTwvaW9uLWJ1dHRvbj5cbiAgICA8L2lvbi1idXR0b25zPlxuICAgIDwhLS08aW9uLWJ1dHRvbnMgc2xvdD1cImVuZFwiPlxuICAgICAgPGlvbi1idXR0b24gaWQ9XCJ0cmFpbmluZ01vcmVCdXR0b25cIj5cbiAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwiZWxsaXBzaXMtaG9yaXpvbnRhbC1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgIDxpb24tcG9wb3ZlciB0cmlnZ2VyPVwidHJhaW5pbmdNb3JlQnV0dG9uXCIgc2l6ZT1cImF1dG9cIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlPlxuICAgICAgICAgIDxpb24tY29udGVudCBjbGFzcz1cImlvbi1wYWRkaW5nXCI+XG4gICAgICAgICAgICA8aW9uLWxpc3Q+XG4gICAgICAgICAgICAgIDxpb24tbGlzdC1oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGlvbi1ub3RlPlxuICAgICAgICAgICAgICAgICAgQWxsZSBUcmFpbmluZ3NcbiAgICAgICAgICAgICAgICA8L2lvbi1ub3RlPlxuICAgICAgICAgICAgICA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgICAgICAgPGlvbi1pdGVtIHR5cGU9XCJidXR0b25cIiBkZXRhaWw9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJjaGVja21hcmstY2lyY2xlXCIgY29sb3I9XCJzdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgPC9pb24taWNvbj5cbiAgICAgICAgICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgenVzYWdlblxuICAgICAgICAgICAgICAgIDwvaW9uLWxhYmVsPjwvaW9uLWl0ZW0+XG4gICAgICAgICAgICAgIDxpb24taXRlbSB0eXBlPVwiYnV0dG9uXCIgZGV0YWlsPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwiY2xvc2UtY2lyY2xlXCIgY29sb3I9XCJkYW5nZXJcIj5cbiAgICAgICAgICAgICAgICA8L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgICAgICAgICBhYnNhZ2VuXG4gICAgICAgICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICA8L2lvbi1saXN0PlxuICAgICAgICAgICAgPGlvbi1saXN0PlxuICAgICAgICAgICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxpb24tbm90ZT5cbiAgICAgICAgICAgICAgICAgIEFkbWluaXN0cmF0aW9uXG4gICAgICAgICAgICAgICAgPC9pb24tbm90ZT5cbiAgICAgICAgICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG5cbiAgICAgICAgICAgICAgPGlvbi1pdGVtIHR5cGU9XCJidXR0b25cIiBkZXRhaWw9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJjbG91ZC1kb3dubG9hZC1vdXRsaW5lXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgPC9pb24taWNvbj5cbiAgICAgICAgICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgSiZTIEV4cG9ydFxuICAgICAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICAgICAgICA8L2lvbi1saXN0PlxuICAgICAgICAgIDwvaW9uLWNvbnRlbnQ+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L2lvbi1wb3BvdmVyPlxuICAgIDwvaW9uLWJ1dHRvbnM+LS0+XG4gICAgPCEtLTxpb24tYnV0dG9ucyBzbG90PVwiZW5kXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGVhbUxpc3QkIHwgYXN5bmMgYXMgdGVhbUxpc3RcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRlYW1MaXN0Lmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICA8aW9uLWJ1dHRvbiAqbmdJZj1cIiFmaWx0ZXJWYWx1ZVwiIChjbGljayk9XCJvcGVuRmlsdGVyKCRldmVudClcIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cImZpbHRlclwiPjwvaW9uLWljb24+XG4gICAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgICAgIDxpb24tYnV0dG9uICpuZ0lmPVwiZmlsdGVyVmFsdWVcIiAoY2xpY2spPVwib3BlbkZpbHRlcigkZXZlbnQpXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJmaWx0ZXItY2lyY2xlXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9pb24tYnV0dG9ucz4tLT5cbiAgPC9pb24tdG9vbGJhcj5cbjwvaW9uLWhlYWRlcj5cblxuPGlvbi1jb250ZW50IFtmdWxsc2NyZWVuXT1cInRydWVcIj5cbiAgPGlvbi1oZWFkZXIgY29sbGFwc2U9XCJjb25kZW5zZVwiPlxuICAgIDxpb24tdG9vbGJhcj5cbiAgICAgIDxpb24tdGl0bGUgc2l6ZT1cImxhcmdlXCI+e3tcImNvbW1vbi50cmFpbmluZ1wiIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cblxuICAgIDwvaW9uLXRvb2xiYXI+XG4gIDwvaW9uLWhlYWRlcj5cblxuICA8bmctY29udGFpbmVyICpuZ0lmPVwidHJhaW5pbmdMaXN0JCB8IGFzeW5jIGFzIHRyYWluaW5nTGlzdDsgZWxzZSBsb2FkaW5nXCI+XG4gICAgPGlvbi1saXN0ICpuZ0lmPVwidHJhaW5pbmdMaXN0Lmxlbmd0aCA+IDBcIiBsaW5lcz1cImZ1bGxcIj5cbiAgICAgIDxpb24tbGlzdC1oZWFkZXI+XG4gICAgICAgIDxpb24tbGFiZWw+e3tcInRyYWluaW5nLnVwY29tbWluZ19fdHJhaW5pbmdcIiB8IHRyYW5zbGF0ZX19PC9pb24tbGFiZWw+XG4gICAgICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJ0b2dnbGVBbGwoKVwiIHNpemU9XCJzbWFsbFwiIGZpbGw9XCJjbGVhclwiPiB7e1wiY29tbW9uLmFsbGVfYW5tZWxkZW5cIiB8IHRyYW5zbGF0ZX19PC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24tbGFiZWwgc2xvdD1cInN0YXJ0XCI+XG4gICAgICAgICAgPHA+e3tcImNvbW1vbi5zdGF0dXNcIiB8IHRyYW5zbGF0ZX19PC9wPlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgPGlvbi1sYWJlbCBzbG90PVwiZW5kXCI+XG4gICAgICAgICAgPHA+e3tcImNvbW1vbi5wYXJ0aWNpcGFudFwiIHwgdHJhbnNsYXRlfX08L3A+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cbiAgICAgIDxpb24taXRlbS1zbGlkaW5nICNpdGVtICpuZ0Zvcj1cImxldCB0cmFpbmluZyBvZiB0cmFpbmluZ0xpc3RcIj5cbiAgICAgICAgPGlvbi1pdGVtIHR5cGU9XCJidXR0b25cIiBkZXRhaWw9XCJ0cnVlXCI+XG4gICAgICAgICAgPGlvbi1pY29uICpuZ0lmPVwidHJhaW5pbmcuc3RhdHVzID09PSBudWxsXCIgc2xvdD1cImljb24tb25seVwiIGNvbG9yPVwid2FybmluZ1wiIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJoZWxwLWNpcmNsZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlKHRydWUsIHRyYWluaW5nKVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgPGlvbi1pY29uICpuZ0lmPVwidHJhaW5pbmcuc3RhdHVzID09PSBmYWxzZVwiIHNsb3Q9XCJpY29uLW9ubHlcIiBjb2xvcj1cImRhbmdlclwiIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJjbG9zZS1jaXJjbGVcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZSggdHJ1ZSwgdHJhaW5pbmcpXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJ0cmFpbmluZy5zdGF0dXMgPT09IHRydWVcIiBzbG90PVwiaWNvbi1vbmx5XCIgY29sb3I9XCJzdWNjZXNzXCIgc2xvdD1cInN0YXJ0XCJcbiAgICAgICAgICAgIG5hbWU9XCJjaGVja21hcmstY2lyY2xlXCIgKGNsaWNrKT1cInRvZ2dsZShmYWxzZSwgdHJhaW5pbmcpXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8aW9uLWxhYmVsIChjbGljayk9XCJvcGVuVHJhaW5pbmdEZXRhaWxNb2RhbCh0cmFpbmluZywgdHJ1ZSlcIj5cbiAgICAgICAgICAgIDxoMj57e3RyYWluaW5nLm5hbWV9fTwvaDI+XG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cImNhbGVuZGFyLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICB7e3RyYWluaW5nLmRhdGUudG9EYXRlKCkgfCBkYXRlOidkZC5NTS5ZWVlZICd9fVxuICAgICAgICAgICAgICB7e3RyYWluaW5nLnRpbWVGcm9tIHwgZGF0ZTonSEg6bW0nfX0gVWhyIC0ge3t0cmFpbmluZy50aW1lVG8gfFxuICAgICAgICAgICAgICBkYXRlOidISDptbSd9fSBVaHJcbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cImxvY2F0aW9uLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICB7e3RyYWluaW5nLmxvY2F0aW9ufX0ge3t0cmFpbmluZy5zdHJlZXRBbmROdW1iZXJ9fSB7e3RyYWluaW5nLmNpdHl9fVxuICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJ0cm9waHktb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgIHt7dHJhaW5pbmcubGlnYX19IHt7dHJhaW5pbmcudGVhbU5hbWV9fVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxoMyAqbmdJZj1cInRyYWluaW5nLmV4ZXJjaXNlcy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgIDxpb24tYmFkZ2UgY29sb3I9XCJsaWdodFwiPnt7dHJhaW5pbmcuZXhlcmNpc2VzLmxlbmd0aH19IMOcYnVuZ2VuIHZvcmhhbmRlbjwvaW9uLWJhZGdlPlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICA8aW9uLWJhZGdlIHNsb3Q9XCJlbmRcIiAoY2xpY2spPVwib3BlblRyYWluaW5nRGV0YWlsTW9kYWwodHJhaW5pbmcsdHJ1ZSlcIiBjb2xvcj1cInByaW1hcnlcIj57e3RyYWluaW5nLmNvdW50QXR0ZW5kZWVzfX08L2lvbi1iYWRnZT5cblxuICAgICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICAgIDxpb24taXRlbS1vcHRpb25zIHNpZGU9XCJzdGFydFwiPlxuICAgICAgICAgIDxpb24taXRlbS1vcHRpb24gY29sb3I9XCJzdWNjZXNzXCIgKm5nSWY9XCJ0cmFpbmluZy5zdGF0dXMgPT09IGZhbHNlIHx8IHRyYWluaW5nLnN0YXR1cyA9PT0gbnVsbFwiXG4gICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlSXRlbShpdGVtLCB0cnVlLCB0cmFpbmluZylcIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cImNoZWNrbWFyay1jaXJjbGVcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9uPlxuICAgICAgICAgIDxpb24taXRlbS1vcHRpb24gY29sb3I9XCJkYW5nZXJcIiAqbmdJZj1cInRyYWluaW5nLnN0YXR1cyA9PT0gdHJ1ZSB8fCB0cmFpbmluZy5zdGF0dXMgPT09IG51bGxcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZUl0ZW0oaXRlbSwgZmFsc2UsIHRyYWluaW5nKVwiPlxuICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwiY2xvc2UtY2lyY2xlXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbj5cbiAgICAgICAgPC9pb24taXRlbS1vcHRpb25zPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0ZWFtQWRtaW5MaXN0JCB8IGFzeW5jIGFzIHRlYW1BZG1pbkxpc3RcIj5cbiAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9ucyBzaWRlPVwiZW5kXCIgKm5nSWY9XCJpc1RlYW1BZG1pbih0ZWFtQWRtaW5MaXN0LCB0cmFpbmluZy50ZWFtSWQpXCI+XG4gICAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9uIGNvbG9yPVwibWVkaXVtXCIgKGNsaWNrKT1cImNvcHlUcmFpbmluZyhpdGVtLCB0cmFpbmluZylcIj5cbiAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwiY29weS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9uPlxuICAgICAgICAgICAgPGlvbi1pdGVtLW9wdGlvbiBjb2xvcj1cImRhbmdlclwiIChjbGljayk9XCJkZWxldGVUcmFpbmluZyhpdGVtLCB0cmFpbmluZylcIj5cbiAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwidHJhc2hcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPC9pb24taXRlbS1vcHRpb24+XG4gICAgICAgICAgPC9pb24taXRlbS1vcHRpb25zPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvaW9uLWl0ZW0tc2xpZGluZz5cbiAgICA8L2lvbi1saXN0PlxuXG4gICAgPGlvbi1saXN0IGNsYXNzPVwiaW9uLXBhZGRpbmdcIiAqbmdJZj1cInRyYWluaW5nTGlzdC5sZW5ndGg9PTBcIj5cbiAgICAgIDxpb24tbGlzdC1oZWFkZXI+XG4gICAgICAgIDxpb24tbGFiZWw+e3tcInRyYWluaW5nLnVwY29tbWluZ19fdHJhaW5pbmdcIiB8IHRyYW5zbGF0ZX19PC9pb24tbGFiZWw+XG4gICAgICAgXG4gICAgICA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1ub3RlPiB7e1widHJhaW5pbmcubm9fdHJhaW5pbmdfX2ZvdW5kXCIgfCB0cmFuc2xhdGV9fSA8L2lvbi1ub3RlPlxuICAgICAgPC9pb24taXRlbT5cbiAgICA8L2lvbi1saXN0PlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8bmctY29udGFpbmVyICpuZ0lmPVwidHJhaW5pbmdMaXN0UGFzdCQgfCBhc3luYyBhcyB0cmFpbmluZ0xpc3RQYXN0OyBlbHNlIGxvYWRpbmdcIj5cbiAgICA8aW9uLWxpc3QgKm5nSWY9XCJ0cmFpbmluZ0xpc3RQYXN0Lmxlbmd0aCA+IDBcIiBsaW5lcz1cImZ1bGxcIj5cbiAgICAgIDxpb24tbGlzdC1oZWFkZXI+XG4gICAgICAgIDxpb24tbGFiZWw+e3tcInRyYWluaW5nLnBhc3RfX3RyYWluaW5nXCIgfCB0cmFuc2xhdGV9fTwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24tbGFiZWwgc2xvdD1cInN0YXJ0XCI+XG4gICAgICAgICAgPHA+e3tcImNvbW1vbi5zdGF0dXNcIiB8IHRyYW5zbGF0ZX19PC9wPlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgPGlvbi1sYWJlbCBzbG90PVwiZW5kXCI+XG4gICAgICAgICAgPHA+e3tcImNvbW1vbi5wYXJ0aWNpcGFudFwiIHwgdHJhbnNsYXRlfX08L3A+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cbiAgICAgIDxpb24taXRlbS1zbGlkaW5nICNpdGVtICpuZ0Zvcj1cImxldCB0cmFpbmluZyBvZiB0cmFpbmluZ0xpc3RQYXN0XCI+XG4gICAgICAgIDxpb24taXRlbSB0eXBlPVwiYnV0dG9uXCIgZGV0YWlsPVwidHJ1ZVwiPlxuICAgICAgICAgIDxpb24taWNvbiAqbmdJZj1cInRyYWluaW5nLnN0YXR1cyA9PT0gbnVsbFwiIHNsb3Q9XCJpY29uLW9ubHlcIiBjb2xvcj1cIndhcm5pbmdcIiBzbG90PVwic3RhcnRcIlxuICAgICAgICAgICAgbmFtZT1cImhlbHAtY2lyY2xlXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJ0cmFpbmluZy5zdGF0dXMgPT09IGZhbHNlXCIgc2xvdD1cImljb24tb25seVwiIGNvbG9yPVwiZGFuZ2VyXCIgc2xvdD1cInN0YXJ0XCJcbiAgICAgICAgICAgIG5hbWU9XCJjbG9zZS1jaXJjbGVcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDxpb24taWNvbiAqbmdJZj1cInRyYWluaW5nLnN0YXR1cyA9PT0gdHJ1ZVwiIHNsb3Q9XCJpY29uLW9ubHlcIiBjb2xvcj1cInN1Y2Nlc3NcIiBzbG90PVwic3RhcnRcIlxuICAgICAgICAgICAgbmFtZT1cImNoZWNrbWFyay1jaXJjbGVcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDxpb24tbGFiZWwgKGNsaWNrKT1cIm9wZW5UcmFpbmluZ0RldGFpbE1vZGFsKHRyYWluaW5nLCBmYWxzZSlcIj5cbiAgICAgICAgICAgIDxoMj57e3RyYWluaW5nLm5hbWV9fTwvaDI+XG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cImxvY2F0aW9uLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICB7e3RyYWluaW5nLmxvY2F0aW9ufX0ge3t0cmFpbmluZy5zdHJlZXRBbmROdW1iZXJ9fSB7e3RyYWluaW5nLmNpdHl9fVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwiY2FsZW5kYXItb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgIHt7dHJhaW5pbmcuZGF0ZS50b0RhdGUoKSB8IGRhdGU6J2RkLk1NLllZWVkgJ319XG4gICAgICAgICAgICAgIHt7dHJhaW5pbmcudGltZUZyb20gfCBkYXRlOidISDptbSd9fSBVaHIgLSB7e3RyYWluaW5nLnRpbWVUbyB8XG4gICAgICAgICAgICAgIGRhdGU6J0hIOm1tJ319IFVoclxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwidHJvcGh5LW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICB7e3RyYWluaW5nLmxpZ2F9fSB7e3RyYWluaW5nLnRlYW1OYW1lfX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgPGlvbi1iYWRnZSBzbG90PVwiZW5kXCIgKGNsaWNrKT1cIm9wZW5UcmFpbmluZ0RldGFpbE1vZGFsKHRyYWluaW5nLGZhbHNlKVwiIGNvbG9yPVwicHJpbWFyeVwiPnt7dHJhaW5pbmcuY291bnRBdHRlbmRlZXN9fTwvaW9uLWJhZGdlPlxuXG4gICAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgICAgPGlvbi1pdGVtLW9wdGlvbnMgc2lkZT1cImVuZFwiPlxuICAgICAgICAgIDxpb24taXRlbS1vcHRpb24gY29sb3I9XCJtZWRpdW1cIiAoY2xpY2spPVwiY29weVRyYWluaW5nKGl0ZW0sIHRyYWluaW5nKVwiPlxuICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwiY29weS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbj5cbiAgICAgICAgPC9pb24taXRlbS1vcHRpb25zPlxuICAgICAgPC9pb24taXRlbS1zbGlkaW5nPlxuICAgIDwvaW9uLWxpc3Q+XG5cbiAgICA8aW9uLWxpc3QgY2xhc3M9XCJpb24tcGFkZGluZ1wiICpuZ0lmPVwidHJhaW5pbmdMaXN0UGFzdC5sZW5ndGg9PTBcIj5cbiAgICAgIDxpb24tbGlzdC1oZWFkZXI+XG4gICAgICAgIDxpb24tbGFiZWw+e3tcInRyYWluaW5nLnBhc3RfX3RyYWluaW5nXCIgfCB0cmFuc2xhdGV9fTwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24tbm90ZT4ge3tcInRyYWluaW5nLm5vX3RyYWluaW5nX19mb3VuZFwiIHwgdHJhbnNsYXRlfX0gPC9pb24tbm90ZT5cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgPC9pb24tbGlzdD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRlYW1BZG1pbkxpc3QkIHwgYXN5bmMgYXMgdGVhbUFkbWluTGlzdFwiPlxuICAgIDxpb24tZmFiICpuZ0lmPVwidGVhbUFkbWluTGlzdC5sZW5ndGggPiAwXCIgdmVydGljYWw9XCJib3R0b21cIiBob3Jpem9udGFsPVwiZW5kXCIgc2xvdD1cImZpeGVkXCI+XG4gICAgICA8aW9uLWZhYi1idXR0b24gKGNsaWNrKT1cIm9wZW5UcmFpbmluZ0NyZWF0ZU1vZGFsKClcIj5cbiAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJhZGQtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICA8L2lvbi1mYWItYnV0dG9uPlxuICAgIDwvaW9uLWZhYj5cbiAgPC9uZy1jb250YWluZXI+XG48L2lvbi1jb250ZW50PlxuXG48bmctdGVtcGxhdGUgI2xvYWRpbmc+XG4gIDxpb24tbGlzdD5cbiAgICA8aW9uLWdyaWQ+XG4gICAgICA8aW9uLXJvdz5cbiAgICAgICAgPGlvbi1jb2wgc2l6ZS1sZz1cIjRcIiBzaXplLW1kPVwiNlwiIHNpemUtc209XCI2XCIgc2l6ZT1cIjEyXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2tlbGV0b25cIj5cbiAgICAgICAgICA8aW9uLWNhcmQ+XG4gICAgICAgICAgICA8aW9uLWNhcmQtaGVhZGVyPlxuICAgICAgICAgICAgICA8aW9uLWNhcmQtc3VidGl0bGU+XG4gICAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDYwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDwvaW9uLWNhcmQtc3VidGl0bGU+XG4gICAgICAgICAgICAgIDxpb24tY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogODAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPC9pb24tY2FyZC10aXRsZT5cbiAgICAgICAgICAgIDwvaW9uLWNhcmQtaGVhZGVyPlxuXG4gICAgICAgICAgICA8aW9uLWNhcmQtY29udGVudD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDgwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA2MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogODAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDYwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA4MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgPC9pb24tY2FyZC1jb250ZW50PlxuICAgICAgICAgIDwvaW9uLWNhcmQ+XG4gICAgICAgIDwvaW9uLWNvbD5cbiAgICAgIDwvaW9uLXJvdz5cbiAgICA8L2lvbi1ncmlkPlxuICA8L2lvbi1saXN0PlxuPC9uZy10ZW1wbGF0ZT4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Qk0sSUFBTyxtQkFBUCxNQUFPLGlCQUFlO0VBSTFCLFlBQ1UsWUFBdUIsT0FBTyxTQUFTLEdBQzlCLGFBQ0EsV0FBMEI7QUFGbkMsU0FBQSxZQUFBO0FBQ1MsU0FBQSxjQUFBO0FBQ0EsU0FBQSxZQUFBO0FBSm5CLFNBQUEsV0FBa0IsQ0FBQTtFQUtmO0VBRUcsa0JBQWtCLFVBQWtCOztB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QSxHQUFBLDRCQUFBLGtCQUFBLEdBQUEsNEJBQUEsZUFBQSxHQUFBLDRCQUFBLGVBQUEsR0FBQSw0QkFBQSxlQUFBLEdBQUEsNEJBQUEsZUFBQSxHQUFBLDRCQUFBLFdBQUEsR0FBQSw0QkFBQSxnQkFBQSxHQUFBLDRCQUFBLGVBQUEsQ0FBQTtBQUFBO29GQUFsQixxQkFBa0IsV0FBQSxDQUFBLENBQUEscUJBQUEsQ0FBQSxHQUFBLFFBQUEsRUFBQSxVQUFBLENBQUEsR0FBQSxRQUFBLFVBQUEsR0FBQSxVQUFBLFdBQUEsR0FBQSxZQUFBLE9BQUEsT0FBQSxHQUFBLE1BQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxpQkFBQSxFQUFBLEdBQUEsQ0FBQSxXQUFBLEVBQUEsR0FBQSxDQUFBLFFBQUEsRUFBQSxHQUFBLENBQUEsR0FBQSxRQUFBLFVBQUEsR0FBQSxDQUFBLEdBQUEsYUFBQSxHQUFBLENBQUEsUUFBQSxTQUFBLEdBQUEsQ0FBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFlBQUEsVUFBQSxHQUFBLENBQUEsUUFBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxRQUFBLGNBQUEsR0FBQSxDQUFBLEdBQUEsZUFBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFFBQUEsa0JBQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxRQUFBLGtCQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsUUFBQSxnQkFBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFFBQUEsNEJBQUEsR0FBQSxDQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsU0FBQSxRQUFBLEdBQUEsU0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLEdBQUEsWUFBQSxPQUFBLEdBQUEsQ0FBQSxTQUFBLE9BQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLE1BQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLFFBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLFFBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxVQUFBLFFBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLEtBQUEsR0FBQSxDQUFBLEdBQUEsY0FBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFNBQUEsV0FBQSxRQUFBLFNBQUEsR0FBQSxTQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFNBQUEsVUFBQSxRQUFBLFNBQUEsR0FBQSxTQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFNBQUEsV0FBQSxRQUFBLFNBQUEsR0FBQSxTQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFNBQUEsV0FBQSxRQUFBLFNBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxTQUFBLFVBQUEsUUFBQSxTQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxjQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsU0FBQSxXQUFBLFFBQUEsU0FBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsa0JBQUEsR0FBQSxDQUFBLFNBQUEsV0FBQSxRQUFBLFNBQUEsUUFBQSxhQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxTQUFBLEtBQUEsR0FBQSxDQUFBLFFBQUEsVUFBQSxTQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxHQUFBLENBQUEsR0FBQSxTQUFBLFNBQUEsR0FBQSxDQUFBLFVBQUEsTUFBQSxHQUFBLENBQUEsU0FBQSxXQUFBLFFBQUEsU0FBQSxRQUFBLGtCQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsR0FBQSxTQUFBLFNBQUEsR0FBQSxDQUFBLFFBQUEsT0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsS0FBQSxHQUFBLENBQUEsU0FBQSxXQUFBLEdBQUEsU0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFNBQUEsVUFBQSxHQUFBLFNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLFdBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsUUFBQSxrQkFBQSxHQUFBLENBQUEsU0FBQSxVQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFFBQUEsY0FBQSxHQUFBLENBQUEsU0FBQSxJQUFBLEdBQUEsQ0FBQSxTQUFBLFVBQUEsUUFBQSxTQUFBLFFBQUEsY0FBQSxHQUFBLENBQUEsU0FBQSxNQUFBLEdBQUEsQ0FBQSxZQUFBLElBQUEsR0FBQSxTQUFBLEtBQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxHQUFBLFNBQUEsS0FBQSxHQUFBLENBQUEsWUFBQSxJQUFBLEdBQUEsU0FBQSxPQUFBLEdBQUEsQ0FBQSxZQUFBLElBQUEsR0FBQSxTQUFBLFFBQUEsVUFBQSxRQUFBLFVBQUEsUUFBQSxHQUFBLENBQUEsWUFBQSxJQUFBLEdBQUEsU0FBQSxPQUFBLEdBQUEsQ0FBQSxZQUFBLElBQUEsR0FBQSxTQUFBLEtBQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxHQUFBLFNBQUEsS0FBQSxHQUFBLENBQUEsWUFBQSxJQUFBLEdBQUEsU0FBQSxLQUFBLEdBQUEsQ0FBQSxZQUFBLElBQUEsR0FBQSxTQUFBLEtBQUEsR0FBQSxDQUFBLFFBQUEsT0FBQSxZQUFBLElBQUEsR0FBQSxTQUFBLFFBQUEsZ0JBQUEsTUFBQSxHQUFBLENBQUEsWUFBQSxJQUFBLEdBQUEsU0FBQSxPQUFBLEdBQUEsQ0FBQSxZQUFBLElBQUEsUUFBQSxTQUFBLEdBQUEsU0FBQSxRQUFBLFVBQUEsUUFBQSxpQkFBQSxLQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsUUFBQSxhQUFBLEdBQUEsQ0FBQSxZQUFBLElBQUEsR0FBQSxTQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsT0FBQSxZQUFBLElBQUEsR0FBQSxTQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxRQUFBLGtCQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsR0FBQSxTQUFBLFFBQUEsVUFBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsR0FBQSxTQUFBLE1BQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxHQUFBLFNBQUEsT0FBQSxDQUFBLEdB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VUFBQSxRQUFBLFNBQUEsUUFBQSxnQkFBQSxHQUFBLFNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsU0FBQSxXQUFBLFFBQUEsU0FBQSxRQUFBLG9CQUFBLEdBQUEsU0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxRQUFBLGtCQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsUUFBQSxrQkFBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFFBQUEsZ0JBQUEsR0FBQSxDQUFBLFFBQUEsT0FBQSxTQUFBLFdBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsR0FBQSxDQUFBLFNBQUEsV0FBQSxHQUFBLFNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLFVBQUEsR0FBQSxTQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFNBQUEsV0FBQSxRQUFBLFNBQUEsUUFBQSxlQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFNBQUEsVUFBQSxRQUFBLFNBQUEsUUFBQSxnQkFBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxTQUFBLFdBQUEsUUFBQSxTQUFBLFFBQUEsb0JBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxTQUFBLE9BQUEsR0FBQSxDQUFBLFNBQUEsV0FBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxRQUFBLGtCQUFBLEdBQUEsQ0FBQSxTQUFBLFVBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsUUFBQSxjQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLEtBQUEsR0FBQSxDQUFBLFNBQUEsVUFBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxRQUFBLGNBQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxRQUFBLE9BQUEsR0FBQSxDQUFBLEdBQUEsYUFBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFNBQUEsV0FBQSxRQUFBLFNBQUEsUUFBQSxlQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFNBQUEsVUFBQSxRQUFBLFNBQUEsUUFBQSxnQkFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxTQUFBLFdBQUEsUUFBQSxTQUFBLFFBQUEsb0JBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsU0FBQSxXQUFBLFFBQUEsU0FBQSxRQUFBLGFBQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxTQUFBLFVBQUEsUUFBQSxTQUFBLFFBQUEsY0FBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFNBQUEsV0FBQSxRQUFBLFNBQUEsUUFBQSxrQkFBQSxHQUFBLENBQUEsWUFBQSxVQUFBLGNBQUEsT0FBQSxRQUFBLFNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxZQUFBLFVBQUEsY0FBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxhQUFBLEdBQUEsQ0FBQSxXQUFBLEtBQUEsV0FBQSxLQUFBLFdBQUEsS0FBQSxRQUFBLE1BQUEsR0FBQSxTQUFBLFNBQUEsR0FBQSxDQUFBLFdBQUEsS0FBQSxXQUFBLEtBQUEsV0FBQSxLQUFBLFFBQUEsSUFBQSxHQUFBLENBQUEsWUFBQSxJQUFBLEdBQUEsU0FBQSxLQUFBLEdBQUEsQ0FBQSxZQUFBLElBQUEsR0FBQSxTQUFBLEtBQUEsQ0FBQSxHQUFBLFVBQUEsU0FBQSx1QkFBQSxJQUFBLEtBQUE7QUFBQSxNQUFBLEtBQUEsR0FBQTtBQy9DMUIsSUFBQSx5QkFBQSxHQUFBLGNBQUEsQ0FBQSxFQUFpQyxHQUFBLGFBQUEsRUFDbEIsR0FBQSxlQUFBLENBQUE7QUFFVCxJQUFBLHFCQUFBLEdBQUEsMENBQUEsR0FBQSxHQUFBLG1CQUFBLENBQUE7QUFDRixJQUFBLHVCQUFBO0FBQ0EsSUFBQSx5QkFBQSxHQUFBLFdBQUE7QUFBWSxJQUFBLGlCQUFBLENBQUE7O0FBQWlDLElBQUEsdUJBQUE7QUFDN0MsSUFBQSxxQkFBQSxHQUFBLHNDQUFBLEdBQUEsR0FBQSxlQUFBLENBQUE7QUE4REYsSUFBQSx1QkFBQSxFQUFjO0FBR2hCLElBQUEseUJBQUEsR0FBQSxlQUFBLENBQUEsRUFBaUMsR0FBQSxjQUFBLENBQUEsRUFDQyxJQUFBLGFBQUEsRUFDakIsSUFBQSxhQUFBLENBQUE7QUFDYSxJQUFBLGlCQUFBLEVBQUE7O0FBQWlDLElBQUEsdUJBQUEsRUFBWSxFQUV6RDtBQUdoQixJQUFBLHFCQUFBLElBQUEsd0NBQUEsR0FBQSxHQUFBLGdCQUFBLENBQUE7O0FBa0ZBLElBQUEscUJBQUEsSUFBQSx3Q0FBQSxHQUFBLEdBQUEsZ0JBQUEsQ0FBQTs7QUE0REEsSUFBQSxxQkFBQSxJQUFBLHdDQUFBLEdBQUEsR0FBQSxnQkFBQSxDQUFBOztBQU9GLElBQUEsdUJBQUE7QUFFQSxJQUFBLHFCQUFBLElBQUEsdUNBQUEsR0FBQSxHQUFBLGVBQUEsTUFBQSxHQUFBLGdDQUFBOzs7O0FBdE9ZLElBQUEscUJBQUEsZUFBQSxJQUFBO0FBR1ksSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLENBQUEsSUFBQSxPQUFBO0FBRVIsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw2QkFBQSxLQUFBLHNCQUFBLEdBQUEsSUFBQSxpQkFBQSxHQUFBLEVBQUE7QUFDRSxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsSUFBQSxPQUFBO0FBaUVMLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLGNBQUEsSUFBQTtBQUdpQixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLElBQUEsSUFBQSxpQkFBQSxDQUFBO0FBS2IsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLHNCQUFBLElBQUEsSUFBQSxJQUFBLGFBQUEsQ0FBQSxFQUE0QixZQUFBLFdBQUE7QUFrRjVCLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxzQkFBQSxJQUFBLElBQUEsSUFBQSxpQkFBQSxDQUFBLEVBQWdDLFlBQUEsV0FBQTtBQTREaEMsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLHNCQUFBLElBQUEsSUFBQSxJQUFBLGNBQUEsQ0FBQTs7O0FEOUtYLElBQU8sZ0JBQVA7OzZFQUFPLGVBQWEsRUFBQSxXQUFBLGlCQUFBLFVBQUEsc0RBQUEsWUFBQSxHQUFBLENBQUE7QUFBQSxHQUFBOyIsCiAgIm5hbWVzIjogWyJjb2xsZWN0aW9uIiwgImRvYyIsICJxdWVyeSIsICJ3aGVyZSIsICJzZXREb2MiLCAib2YiXQp9Cg==
