import {
  UserProfileService
} from "./chunk-7XMQNZXL.js";
import {
  FirebaseService
} from "./chunk-RMTOAZGR.js";
import {
  AlertController,
  AsyncPipe,
  DatePipe,
  IonAlert,
  IonAvatar,
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
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
  ModalController,
  NavParams,
  NgForOf,
  NgIf,
  ToastController,
  TranslatePipe,
  TranslateService,
  catchError,
  combineLatest,
  lastValueFrom,
  map,
  of,
  switchMap,
  take,
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
  ɵɵpropertyInterpolate2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PZUQX53K.js";
import {
  WebPlugin,
  registerPlugin
} from "./chunk-YB7CDXXA.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@capacitor/clipboard/dist/esm/web.js
var ClipboardWeb = class extends WebPlugin {
  write(options) {
    return __async(this, null, function* () {
      if (typeof navigator === "undefined" || !navigator.clipboard) {
        throw this.unavailable("Clipboard API not available in this browser");
      }
      if (options.string !== void 0) {
        yield this.writeText(options.string);
      } else if (options.url) {
        yield this.writeText(options.url);
      } else if (options.image) {
        if (typeof ClipboardItem !== "undefined") {
          try {
            const blob = yield (yield fetch(options.image)).blob();
            const clipboardItemInput = new ClipboardItem({
              [blob.type]: blob
            });
            yield navigator.clipboard.write([clipboardItemInput]);
          } catch (err) {
            throw new Error("Failed to write image");
          }
        } else {
          throw this.unavailable("Writing images to the clipboard is not supported in this browser");
        }
      } else {
        throw new Error("Nothing to write");
      }
    });
  }
  read() {
    return __async(this, null, function* () {
      if (typeof navigator === "undefined" || !navigator.clipboard) {
        throw this.unavailable("Clipboard API not available in this browser");
      }
      if (typeof ClipboardItem !== "undefined") {
        try {
          const clipboardItems = yield navigator.clipboard.read();
          const type = clipboardItems[0].types[0];
          const clipboardBlob = yield clipboardItems[0].getType(type);
          const data = yield this._getBlobData(clipboardBlob, type);
          return {
            value: data,
            type
          };
        } catch (err) {
          return this.readText();
        }
      } else {
        return this.readText();
      }
    });
  }
  readText() {
    return __async(this, null, function* () {
      if (typeof navigator === "undefined" || !navigator.clipboard || !navigator.clipboard.readText) {
        throw this.unavailable("Reading from clipboard not supported in this browser");
      }
      const text = yield navigator.clipboard.readText();
      return {
        value: text,
        type: "text/plain"
      };
    });
  }
  writeText(text) {
    return __async(this, null, function* () {
      if (typeof navigator === "undefined" || !navigator.clipboard || !navigator.clipboard.writeText) {
        throw this.unavailable("Writting to clipboard not supported in this browser");
      }
      yield navigator.clipboard.writeText(text);
    });
  }
  _getBlobData(clipboardBlob, type) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      if (type.includes("image")) {
        reader.readAsDataURL(clipboardBlob);
      } else {
        reader.readAsText(clipboardBlob);
      }
      reader.onloadend = () => {
        const r = reader.result;
        resolve(r);
      };
      reader.onerror = (e) => {
        reject(e);
      };
    });
  }
};

// node_modules/@capacitor/clipboard/dist/esm/index.js
var Clipboard = registerPlugin("Clipboard", {
  web: () => new ClipboardWeb()
});

// src/app/pages/member/member.page.ts
function MemberPage_ng_container_14_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
}
function MemberPage_ng_container_14_img_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 17);
  }
  if (rf & 2) {
    const userProfile_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275propertyInterpolate2("alt", "", userProfile_r3.firstName, " ", userProfile_r3.lastName, "");
    \u0275\u0275propertyInterpolate("src", userProfile_r3.profilePicture, \u0275\u0275sanitizeUrl);
  }
}
function MemberPage_ng_container_14_ion_item_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275element(1, "ion-icon", 18);
    \u0275\u0275elementStart(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-icon", 13);
    \u0275\u0275listener("click", function MemberPage_ng_container_14_ion_item_13_Template_ion_icon_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const userProfile_r3 = \u0275\u0275nextContext().ngIf;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copy(userProfile_r3.phonenumber));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const userProfile_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(userProfile_r3.phonenumber);
  }
}
function MemberPage_ng_container_14_ng_container_14_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275element(1, "ion-icon", 19);
    \u0275\u0275elementStart(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-icon", 13);
    \u0275\u0275listener("click", function MemberPage_ng_container_14_ng_container_14_ion_item_1_Template_ion_icon_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const userProfile_r3 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copy(userProfile_r3.dateOfBirth));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const userProfile_r3 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, userProfile_r3.dateOfBirth == null ? null : userProfile_r3.dateOfBirth.toDate(), "dd.MM.YYYY "), " ");
  }
}
function MemberPage_ng_container_14_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MemberPage_ng_container_14_ng_container_14_ion_item_1_Template, 6, 4, "ion-item", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const userProfile_r3 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isRequest && userProfile_r3.dateOfBirth);
  }
}
function MemberPage_ng_container_14_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "ion-button", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "ion-alert", 22);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementStart(8, "ion-button", 23);
    \u0275\u0275listener("click", function MemberPage_ng_container_14_div_16_Template_ion_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const userProfile_r3 = \u0275\u0275nextContext().ngIf;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteClubRequest(userProfile_r3));
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "common.approve_request"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(5, 8, "club.request_approve_header"))("subHeader", \u0275\u0275pipeBind1(6, 10, "club.request_approve_subheader"))("message", \u0275\u0275pipeBind1(7, 12, "club.request_add_user_to_club"))("buttons", ctx_r3.alertButtonsApproveClub);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 14, "common.delete_request"), " ");
  }
}
function MemberPage_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-list", 8)(2, "ion-item")(3, "ion-avatar", 9);
    \u0275\u0275template(4, MemberPage_ng_container_14_img_4_Template, 1, 0, "img", 10)(5, MemberPage_ng_container_14_img_5_Template, 1, 4, "img", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-label");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-item");
    \u0275\u0275element(9, "ion-icon", 12);
    \u0275\u0275elementStart(10, "ion-label");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-icon", 13);
    \u0275\u0275listener("click", function MemberPage_ng_container_14_Template_ion_icon_click_12_listener() {
      const userProfile_r3 = \u0275\u0275restoreView(_r2).ngIf;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copy(userProfile_r3.email));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, MemberPage_ng_container_14_ion_item_13_Template, 5, 1, "ion-item", 14)(14, MemberPage_ng_container_14_ng_container_14_Template, 2, 1, "ng-container", 14);
    \u0275\u0275pipe(15, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, MemberPage_ng_container_14_div_16_Template, 11, 16, "div", 15);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const userProfile_r3 = ctx.ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !userProfile_r3.profilePicture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", userProfile_r3.profilePicture);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", userProfile_r3.firstName, " ", userProfile_r3.lastName, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(userProfile_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r3.isRequest && userProfile_r3.phonenumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(15, 9, ctx_r3.isAdmin$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.isRequest);
  }
}
function MemberPage_ng_template_16_ion_list_0_ion_col_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-col", 25)(1, "ion-card")(2, "ion-card-header")(3, "ion-card-subtitle");
    \u0275\u0275element(4, "ion-skeleton-text", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-card-title");
    \u0275\u0275element(6, "ion-skeleton-text", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-card-content");
    \u0275\u0275element(8, "ion-skeleton-text", 27)(9, "ion-skeleton-text", 26)(10, "ion-skeleton-text", 27)(11, "ion-skeleton-text", 26)(12, "ion-skeleton-text", 27);
    \u0275\u0275elementEnd()()();
  }
}
function MemberPage_ng_template_16_ion_list_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list")(1, "ion-grid")(2, "ion-row");
    \u0275\u0275template(3, MemberPage_ng_template_16_ion_list_0_ion_col_3_Template, 13, 0, "ion-col", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.skeleton);
  }
}
function MemberPage_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MemberPage_ng_template_16_ion_list_0_Template, 4, 1, "ion-list", 14);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const loading_r8 = \u0275\u0275reference(17);
    \u0275\u0275property("ngIf", loading_r8);
  }
}
var _MemberPage = class _MemberPage {
  constructor(modalCtrl, alertCtrl, toastCtrl, profileService, fbService, navParams, translate) {
    this.modalCtrl = modalCtrl;
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.profileService = profileService;
    this.fbService = fbService;
    this.navParams = navParams;
    this.translate = translate;
    this.skeleton = new Array(12);
    this.alertTeamSelection = [];
    this.alertButtonsApproveClub = [];
  }
  ngOnInit() {
    this.isRequest = this.navParams.get("isRequest");
    this.clubId = this.navParams.get("clubId");
    this.teamId = this.navParams.get("teamId");
    this.userProfile = this.navParams.get("data");
    this.userProfile$ = this.getUserProfile(this.userProfile.id);
    this.setupAlerts();
    this.clubAdminList$ = this.fbService.getClubAdminList();
    this.teamAdminList$ = this.fbService.getTeamAdminList();
    this.isAdmin$ = combineLatest([this.teamAdminList$, this.clubAdminList$]).pipe(map(([teamAdminList, clubAdminList]) => {
      return this.isTeamAdmin(teamAdminList, this.teamId) || this.isClubAdmin(clubAdminList, this.clubId);
    }));
  }
  ngOnDestroy() {
  }
  isClubAdmin(clubAdminList, clubId) {
    return clubAdminList && clubAdminList.some((club) => club.id === clubId);
  }
  isTeamAdmin(teamAdminList, teamId) {
    return teamAdminList && teamAdminList.some((team) => team.id === teamId);
  }
  copy(value) {
    return __async(this, null, function* () {
      yield Clipboard.write({
        string: value
      });
      this.toastActionClipboard();
    });
  }
  getUserProfile(id) {
    return this.profileService.getUserProfileById(id);
  }
  setupAlerts() {
    this.alertButtonsApproveClub = [
      {
        text: this.translate.instant("common.cancel"),
        role: "destructive",
        handler: () => {
          console.log("Cancel operation");
          this.toastActionCanceled();
          this.close();
        }
      },
      {
        text: this.translate.instant("common.add"),
        handler: () => this.handleAddMember()
      }
    ];
  }
  handleAddMember() {
    return __async(this, null, function* () {
      try {
        yield this.fbService.approveUserClubRequest(this.clubId, this.userProfile.id);
        const message = yield lastValueFrom(this.translate.get("club.success__user_added"));
        const toast = yield this.toastCtrl.create({
          message,
          color: "success",
          duration: 1500,
          position: "top"
        });
        yield toast.present();
        this.getTeamAndClubTeamsAsAdmin();
        this.close();
      } catch (error) {
        console.error("Failed to add member:", error);
      }
    });
  }
  getTeamAndClubTeamsAsAdmin() {
    return __async(this, null, function* () {
      const teamAdmins$ = this.getUserTeamAdminList();
      const clubTeams$ = this.getUserClubTeamList();
      try {
        const [teamAdmins, clubTeams] = yield lastValueFrom(combineLatest([teamAdmins$, clubTeams$]).pipe(take(1)));
        console.log(teamAdmins, clubTeams);
        const teams = [...teamAdmins, ...clubTeams].filter((team, index, self) => index === self.findIndex((t) => t.id === team.id));
        yield this.prepareAlertForTeams(teams);
      } catch (error) {
        console.error("Error combining team data:", error);
      }
    });
  }
  /*
    getTeamAndClubTeamsAsAdmin() {
      const teamAdmins$ = this.getUserTeamAdminList();
      const clubTeams$ = this.getUserClubTeamList();
  
      this.teamAdminListSubscription = combineLatest([teamAdmins$, clubTeams$]).pipe(
        tap(([teamAdmins, clubTeams]) => { console.log(teamAdmins, clubTeams) }),
        map(([teamAdmins, clubTeams]) => [...teamAdmins, ...clubTeams].filter(
          (team, index, self) => index === self.findIndex(t => t.id === team.id)
        )),
        tap(teams => this.prepareAlertForTeams(teams)),
        catchError(error => {
          console.error('Error combining team data:', error);
          return of([]);
        })
      ).subscribe(data => {
        // this.teamAdminList = data;
      });
    }*/
  getUserTeamAdminList() {
    return this.fbService.getTeamAdminListByClubId(this.clubId).pipe(take(1), catchError((error) => {
      console.error("Failed to fetch direct admin teams", error);
      return of([]);
    }));
  }
  getUserClubTeamList() {
    return this.fbService.getClubAdminListByClubId(this.clubId).pipe(take(1), switchMap((clubs) => clubs.length ? this.fetchTeamsForClubs(clubs) : of([])), catchError((error) => {
      console.error("Failed to fetch clubs or club teams", error);
      return of([]);
    }));
  }
  fetchTeamsForClubs(clubs) {
    return combineLatest(clubs.map((club) => this.fbService.getClubTeamList(club.id))).pipe(map((teamsList) => teamsList.flat()));
  }
  prepareAlertForTeams(teams) {
    return __async(this, null, function* () {
      console.log("prepareAlertForTeams teams: " + teams);
      if (!teams.length) {
        console.log("No teams found for alert preparation.");
        return;
      }
      const alert = yield this.alertCtrl.create({
        header: yield lastValueFrom(this.translate.get("club.select_team_header")),
        subHeader: yield lastValueFrom(this.translate.get("club.select_team_subheader")),
        inputs: teams.map((team) => ({
          label: team.name,
          type: "checkbox",
          value: team.id,
          checked: false
        })),
        buttons: this.getAlertButtons(teams)
      });
      yield alert.present();
    });
  }
  getAlertButtons(teams) {
    return [
      {
        text: this.translate.instant("common.cancel"),
        role: "destructive",
        handler: () => {
          console.log("Alert canceled");
          this.toastActionCanceled();
        }
      },
      {
        text: this.translate.instant("common.add"),
        handler: (data) => {
          this.addTeams(data);
          this.toastActionSaved();
        }
      }
    ];
  }
  addTeams(teams) {
    return __async(this, null, function* () {
      console.log(teams);
      for (const team of teams) {
        console.log("add user " + this.userProfile.id + " to team: " + team);
        yield this.fbService.approveUserTeamRequest(team, this.userProfile.id);
      }
      console.log("Teams added");
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
  deleteClubRequest(user) {
    return __async(this, null, function* () {
      console.log(user);
      yield this.fbService.deleteUserClubRequest(this.clubId, user.id);
      yield this.toastActionRequestDeleted();
      this.close();
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
  toastActionClipboard() {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: yield lastValueFrom(this.translate.get("common.success__copy")),
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
  toastActionRequestDeleted() {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message: yield lastValueFrom(this.translate.get("club.action__request_deleted")),
        duration: 1500,
        position: "top",
        color: "danger"
      });
      yield toast.present();
    });
  }
};
_MemberPage.\u0275fac = function MemberPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MemberPage)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(UserProfileService), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(NavParams), \u0275\u0275directiveInject(TranslateService));
};
_MemberPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MemberPage, selectors: [["app-member"]], inputs: { userProfile: [0, "data", "userProfile"], isRequest: "isRequest", clubId: "clubId", teamId: "teamId" }, standalone: false, decls: 18, vars: 12, consts: [["loading", ""], [3, "translucent"], ["slot", "primary"], [3, "click"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], [4, "ngIf", "ngIfElse"], ["lines", "full", 3, "inset"], ["slot", "start"], ["alt", "Silhouette of a person's head", "src", "https://ionicframework.com/docs/img/demos/avatar.svg", 4, "ngIf"], [3, "alt", "src", 4, "ngIf"], ["slot", "start", "name", "mail"], ["size", "small", "color", "primary", "name", "copy-outline", "slot", "end", 3, "click"], [4, "ngIf"], ["class", "ion-padding", 4, "ngIf"], ["alt", "Silhouette of a person's head", "src", "https://ionicframework.com/docs/img/demos/avatar.svg"], [3, "alt", "src"], ["slot", "start", "name", "call"], ["slot", "start", "name", "calendar"], [1, "ion-padding"], ["expand", "block", "color", "success", "id", "present-alert-approve"], ["trigger", "present-alert-approve", 3, "header", "subHeader", "message", "buttons"], ["fill", "outline", "expand", "block", "color", "danger", 3, "click"], ["size-lg", "4", "size-md", "6", "size-sm", "6", "size", "12", 4, "ngFor", "ngForOf"], ["size-lg", "4", "size-md", "6", "size-sm", "6", "size", "12"], ["animated", "", 2, "width", "60%"], ["animated", "", 2, "width", "80%"]], template: function MemberPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 1)(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3, "Member");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 2)(5, "ion-button", 3);
    \u0275\u0275listener("click", function MemberPage_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.close());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "ion-content", 4)(9, "ion-header", 5)(10, "ion-toolbar")(11, "ion-title", 6);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, MemberPage_ng_container_14_Template, 17, 11, "ng-container", 7);
    \u0275\u0275pipe(15, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, MemberPage_ng_template_16_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const loading_r8 = \u0275\u0275reference(17);
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "common.close"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 8, "common.member"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(15, 10, ctx.userProfile$))("ngIfElse", loading_r8);
  }
}, dependencies: [NgForOf, NgIf, IonAlert, IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonRow, IonSkeletonText, IonTitle, IonToolbar, AsyncPipe, DatePipe, TranslatePipe], encapsulation: 2 });
var MemberPage = _MemberPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MemberPage, { className: "MemberPage", filePath: "src/app/pages/member/member.page.ts", lineNumber: 33 });
})();

export {
  MemberPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL2NsaXBib2FyZC9kaXN0L2VzbS93ZWIuanMiLCJub2RlX21vZHVsZXMvQGNhcGFjaXRvci9jbGlwYm9hcmQvZGlzdC9lc20vaW5kZXguanMiLCJzcmMvYXBwL3BhZ2VzL21lbWJlci9tZW1iZXIucGFnZS50cyIsInNyYy9hcHAvcGFnZXMvbWVtYmVyL21lbWJlci5wYWdlLmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2ViUGx1Z2luIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcbmV4cG9ydCBjbGFzcyBDbGlwYm9hcmRXZWIgZXh0ZW5kcyBXZWJQbHVnaW4ge1xuICBhc3luYyB3cml0ZShvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnIHx8ICFuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuYXZhaWxhYmxlKCdDbGlwYm9hcmQgQVBJIG5vdCBhdmFpbGFibGUgaW4gdGhpcyBicm93c2VyJyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnN0cmluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhd2FpdCB0aGlzLndyaXRlVGV4dChvcHRpb25zLnN0cmluZyk7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnVybCkge1xuICAgICAgYXdhaXQgdGhpcy53cml0ZVRleHQob3B0aW9ucy51cmwpO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5pbWFnZSkge1xuICAgICAgaWYgKHR5cGVvZiBDbGlwYm9hcmRJdGVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCAoYXdhaXQgZmV0Y2gob3B0aW9ucy5pbWFnZSkpLmJsb2IoKTtcbiAgICAgICAgICBjb25zdCBjbGlwYm9hcmRJdGVtSW5wdXQgPSBuZXcgQ2xpcGJvYXJkSXRlbSh7XG4gICAgICAgICAgICBbYmxvYi50eXBlXTogYmxvYlxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGUoW2NsaXBib2FyZEl0ZW1JbnB1dF0pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byB3cml0ZSBpbWFnZScpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyB0aGlzLnVuYXZhaWxhYmxlKCdXcml0aW5nIGltYWdlcyB0byB0aGUgY2xpcGJvYXJkIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90aGluZyB0byB3cml0ZScpO1xuICAgIH1cbiAgfVxuICBhc3luYyByZWFkKCkge1xuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yID09PSAndW5kZWZpbmVkJyB8fCAhbmF2aWdhdG9yLmNsaXBib2FyZCkge1xuICAgICAgdGhyb3cgdGhpcy51bmF2YWlsYWJsZSgnQ2xpcGJvYXJkIEFQSSBub3QgYXZhaWxhYmxlIGluIHRoaXMgYnJvd3NlcicpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIENsaXBib2FyZEl0ZW0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjbGlwYm9hcmRJdGVtcyA9IGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQucmVhZCgpO1xuICAgICAgICBjb25zdCB0eXBlID0gY2xpcGJvYXJkSXRlbXNbMF0udHlwZXNbMF07XG4gICAgICAgIGNvbnN0IGNsaXBib2FyZEJsb2IgPSBhd2FpdCBjbGlwYm9hcmRJdGVtc1swXS5nZXRUeXBlKHR5cGUpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5fZ2V0QmxvYkRhdGEoY2xpcGJvYXJkQmxvYiwgdHlwZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IGRhdGEsXG4gICAgICAgICAgdHlwZVxuICAgICAgICB9O1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRUZXh0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJlYWRUZXh0KCk7XG4gICAgfVxuICB9XG4gIGFzeW5jIHJlYWRUZXh0KCkge1xuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yID09PSAndW5kZWZpbmVkJyB8fCAhbmF2aWdhdG9yLmNsaXBib2FyZCB8fCAhbmF2aWdhdG9yLmNsaXBib2FyZC5yZWFkVGV4dCkge1xuICAgICAgdGhyb3cgdGhpcy51bmF2YWlsYWJsZSgnUmVhZGluZyBmcm9tIGNsaXBib2FyZCBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcicpO1xuICAgIH1cbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC5yZWFkVGV4dCgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdGV4dCxcbiAgICAgIHR5cGU6ICd0ZXh0L3BsYWluJ1xuICAgIH07XG4gIH1cbiAgYXN5bmMgd3JpdGVUZXh0KHRleHQpIHtcbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcgfHwgIW5hdmlnYXRvci5jbGlwYm9hcmQgfHwgIW5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KSB7XG4gICAgICB0aHJvdyB0aGlzLnVuYXZhaWxhYmxlKCdXcml0dGluZyB0byBjbGlwYm9hcmQgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInKTtcbiAgICB9XG4gICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG4gIH1cbiAgX2dldEJsb2JEYXRhKGNsaXBib2FyZEJsb2IsIHR5cGUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIGlmICh0eXBlLmluY2x1ZGVzKCdpbWFnZScpKSB7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGNsaXBib2FyZEJsb2IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoY2xpcGJvYXJkQmxvYik7XG4gICAgICB9XG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgIH07XG4gICAgICByZWFkZXIub25lcnJvciA9IGUgPT4ge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyByZWdpc3RlclBsdWdpbiB9IGZyb20gJ0BjYXBhY2l0b3IvY29yZSc7XG5pbXBvcnQgeyBDbGlwYm9hcmRXZWIgfSBmcm9tICcuL3dlYic7XG5jb25zdCBDbGlwYm9hcmQgPSByZWdpc3RlclBsdWdpbignQ2xpcGJvYXJkJywge1xuICB3ZWI6ICgpID0+IG5ldyBDbGlwYm9hcmRXZWIoKVxufSk7XG5leHBvcnQgKiBmcm9tICcuL2RlZmluaXRpb25zJztcbmV4cG9ydCB7IENsaXBib2FyZCB9O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFsZXJ0Q29udHJvbGxlciwgQWxlcnRJbnB1dCwgTW9kYWxDb250cm9sbGVyLCBOYXZQYXJhbXMsIFRvYXN0Q29udHJvbGxlciB9IGZyb20gXCJAaW9uaWMvYW5ndWxhclwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5pbXBvcnQgeyBDbGlwYm9hcmQgfSBmcm9tICdAY2FwYWNpdG9yL2NsaXBib2FyZCc7XG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxuICBTdWJzY3JpcHRpb24sXG4gIGNhdGNoRXJyb3IsXG4gIGNvbWJpbmVMYXRlc3QsXG4gIGZpbmFsaXplLFxuICBmaXJzdCxcbiAgZm9ya0pvaW4sXG4gIGxhc3RWYWx1ZUZyb20sXG4gIG1hcCxcbiAgb2YsXG4gIHN0YXJ0V2l0aCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG59IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBUZWFtIH0gZnJvbSBcInNyYy9hcHAvbW9kZWxzL3RlYW1cIjtcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwic3JjL2FwcC9tb2RlbHMvdXNlclwiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvZmlyZWJhc2UvdXNlci1wcm9maWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IENsdWIgfSBmcm9tIFwic3JjL2FwcC9tb2RlbHMvY2x1YlwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtbWVtYmVyXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9tZW1iZXIucGFnZS5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL21lbWJlci5wYWdlLnNjc3NcIl0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgTWVtYmVyUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dChcImRhdGFcIikgdXNlclByb2ZpbGU6IFByb2ZpbGU7XG4gIEBJbnB1dChcImlzUmVxdWVzdFwiKSBpc1JlcXVlc3Q6IGJvb2xlYW47XG4gIEBJbnB1dChcImNsdWJJZFwiKSBjbHViSWQ6IHN0cmluZztcbiAgQElucHV0KFwidGVhbUlkXCIpIHRlYW1JZDogc3RyaW5nO1xuICB1c2VyUHJvZmlsZSQ6IE9ic2VydmFibGU8UHJvZmlsZT47XG4gIHNrZWxldG9uID0gbmV3IEFycmF5KDEyKTtcblxuICB0ZWFtQWRtaW5MaXN0JDogT2JzZXJ2YWJsZTxUZWFtW10+O1xuICBjbHViQWRtaW5MaXN0JDogT2JzZXJ2YWJsZTxDbHViW10+O1xuICBpc0FkbWluJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBhbGVydFRlYW1TZWxlY3Rpb24gPSBbXTtcblxuICBhbGVydEJ1dHRvbnNBcHByb3ZlQ2x1YiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBhbGVydEN0cmw6IEFsZXJ0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvYXN0Q3RybDogVG9hc3RDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJvZmlsZVNlcnZpY2U6IFVzZXJQcm9maWxlU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZiU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgbmF2UGFyYW1zOiBOYXZQYXJhbXMsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzUmVxdWVzdCA9IHRoaXMubmF2UGFyYW1zLmdldChcImlzUmVxdWVzdFwiKTtcbiAgICB0aGlzLmNsdWJJZCA9IHRoaXMubmF2UGFyYW1zLmdldChcImNsdWJJZFwiKTtcbiAgICB0aGlzLnRlYW1JZCA9IHRoaXMubmF2UGFyYW1zLmdldChcInRlYW1JZFwiKTtcbiAgICB0aGlzLnVzZXJQcm9maWxlID0gdGhpcy5uYXZQYXJhbXMuZ2V0KFwiZGF0YVwiKTtcbiAgICAvLyB0aGlzLnVzZXJQcm9maWxlJCA9IG9mKHRoaXMudXNlclByb2ZpbGUpO1xuICAgIHRoaXMudXNlclByb2ZpbGUkID0gdGhpcy5nZXRVc2VyUHJvZmlsZSh0aGlzLnVzZXJQcm9maWxlLmlkKTtcblxuICAgIHRoaXMuc2V0dXBBbGVydHMoKTtcblxuICAgIHRoaXMuY2x1YkFkbWluTGlzdCQgPSB0aGlzLmZiU2VydmljZS5nZXRDbHViQWRtaW5MaXN0KCk7XG4gICAgdGhpcy50ZWFtQWRtaW5MaXN0JCA9IHRoaXMuZmJTZXJ2aWNlLmdldFRlYW1BZG1pbkxpc3QoKTtcblxuICAgIHRoaXMuaXNBZG1pbiQgPSBjb21iaW5lTGF0ZXN0KFt0aGlzLnRlYW1BZG1pbkxpc3QkLCB0aGlzLmNsdWJBZG1pbkxpc3QkXSkucGlwZShcbiAgICAgIG1hcCgoW3RlYW1BZG1pbkxpc3QsIGNsdWJBZG1pbkxpc3RdKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVGVhbUFkbWluKHRlYW1BZG1pbkxpc3QsIHRoaXMudGVhbUlkKSB8fCB0aGlzLmlzQ2x1YkFkbWluKGNsdWJBZG1pbkxpc3QsIHRoaXMuY2x1YklkKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuXG4gIH1cblxuICBpc0NsdWJBZG1pbihjbHViQWRtaW5MaXN0OiBhbnlbXSwgY2x1YklkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY2x1YkFkbWluTGlzdCAmJiBjbHViQWRtaW5MaXN0LnNvbWUoY2x1YiA9PiBjbHViLmlkID09PSBjbHViSWQpO1xuICB9XG5cbiAgaXNUZWFtQWRtaW4odGVhbUFkbWluTGlzdDogYW55W10sIHRlYW1JZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRlYW1BZG1pbkxpc3QgJiYgdGVhbUFkbWluTGlzdC5zb21lKHRlYW0gPT4gdGVhbS5pZCA9PT0gdGVhbUlkKTtcbiAgfVxuICBhc3luYyBjb3B5KHZhbHVlKSB7XG4gICAgYXdhaXQgQ2xpcGJvYXJkLndyaXRlKHtcbiAgICAgIHN0cmluZzogdmFsdWVcbiAgICB9KTtcbiAgICB0aGlzLnRvYXN0QWN0aW9uQ2xpcGJvYXJkKCk7XG4gIH1cblxuICBnZXRVc2VyUHJvZmlsZShpZCkge1xuICAgIHJldHVybiB0aGlzLnByb2ZpbGVTZXJ2aWNlLmdldFVzZXJQcm9maWxlQnlJZChpZCk7XG4gIH1cblxuICBzZXR1cEFsZXJ0cygpIHtcbiAgICB0aGlzLmFsZXJ0QnV0dG9uc0FwcHJvdmVDbHViID0gW1xuICAgICAge1xuICAgICAgICB0ZXh0OiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KFwiY29tbW9uLmNhbmNlbFwiKSxcbiAgICAgICAgcm9sZTogXCJkZXN0cnVjdGl2ZVwiLFxuICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJDYW5jZWwgb3BlcmF0aW9uXCIpO1xuICAgICAgICAgIHRoaXMudG9hc3RBY3Rpb25DYW5jZWxlZCgpO1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoXCJjb21tb24uYWRkXCIpLFxuICAgICAgICBoYW5kbGVyOiAoKSA9PiB0aGlzLmhhbmRsZUFkZE1lbWJlcigpLFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbiAgYXN5bmMgaGFuZGxlQWRkTWVtYmVyKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmZiU2VydmljZS5hcHByb3ZlVXNlckNsdWJSZXF1ZXN0KHRoaXMuY2x1YklkLCB0aGlzLnVzZXJQcm9maWxlLmlkKTtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNsdWIuc3VjY2Vzc19fdXNlcl9hZGRlZFwiKSk7XG4gICAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDdHJsLmNyZWF0ZSh7XG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgfSk7XG4gICAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gICAgICB0aGlzLmdldFRlYW1BbmRDbHViVGVhbXNBc0FkbWluKCk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBhZGQgbWVtYmVyOicsIGVycm9yKTtcbiAgICAgIC8vIGhhbmRsZSBlcnJvcnMsIHBlcmhhcHMgc2hvdyBhbiBlcnJvciB0b2FzdFxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFRlYW1BbmRDbHViVGVhbXNBc0FkbWluKCkge1xuICAgIGNvbnN0IHRlYW1BZG1pbnMkID0gdGhpcy5nZXRVc2VyVGVhbUFkbWluTGlzdCgpO1xuICAgIGNvbnN0IGNsdWJUZWFtcyQgPSB0aGlzLmdldFVzZXJDbHViVGVhbUxpc3QoKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBbdGVhbUFkbWlucywgY2x1YlRlYW1zXSA9IGF3YWl0IGxhc3RWYWx1ZUZyb20oY29tYmluZUxhdGVzdChbdGVhbUFkbWlucyQsIGNsdWJUZWFtcyRdKS5waXBlKHRha2UoMSkpKTtcbiAgICAgIGNvbnNvbGUubG9nKHRlYW1BZG1pbnMsIGNsdWJUZWFtcyk7XG5cbiAgICAgIGNvbnN0IHRlYW1zID0gWy4uLnRlYW1BZG1pbnMsIC4uLmNsdWJUZWFtc10uZmlsdGVyKFxuICAgICAgICAodGVhbSwgaW5kZXgsIHNlbGYpID0+IGluZGV4ID09PSBzZWxmLmZpbmRJbmRleCh0ID0+IHQuaWQgPT09IHRlYW0uaWQpXG4gICAgICApO1xuXG4gICAgICBhd2FpdCB0aGlzLnByZXBhcmVBbGVydEZvclRlYW1zKHRlYW1zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY29tYmluaW5nIHRlYW0gZGF0YTonLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICBnZXRUZWFtQW5kQ2x1YlRlYW1zQXNBZG1pbigpIHtcbiAgICAgIGNvbnN0IHRlYW1BZG1pbnMkID0gdGhpcy5nZXRVc2VyVGVhbUFkbWluTGlzdCgpO1xuICAgICAgY29uc3QgY2x1YlRlYW1zJCA9IHRoaXMuZ2V0VXNlckNsdWJUZWFtTGlzdCgpO1xuICBcbiAgICAgIHRoaXMudGVhbUFkbWluTGlzdFN1YnNjcmlwdGlvbiA9IGNvbWJpbmVMYXRlc3QoW3RlYW1BZG1pbnMkLCBjbHViVGVhbXMkXSkucGlwZShcbiAgICAgICAgdGFwKChbdGVhbUFkbWlucywgY2x1YlRlYW1zXSkgPT4geyBjb25zb2xlLmxvZyh0ZWFtQWRtaW5zLCBjbHViVGVhbXMpIH0pLFxuICAgICAgICBtYXAoKFt0ZWFtQWRtaW5zLCBjbHViVGVhbXNdKSA9PiBbLi4udGVhbUFkbWlucywgLi4uY2x1YlRlYW1zXS5maWx0ZXIoXG4gICAgICAgICAgKHRlYW0sIGluZGV4LCBzZWxmKSA9PiBpbmRleCA9PT0gc2VsZi5maW5kSW5kZXgodCA9PiB0LmlkID09PSB0ZWFtLmlkKVxuICAgICAgICApKSxcbiAgICAgICAgdGFwKHRlYW1zID0+IHRoaXMucHJlcGFyZUFsZXJ0Rm9yVGVhbXModGVhbXMpKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY29tYmluaW5nIHRlYW0gZGF0YTonLCBlcnJvcik7XG4gICAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgfSlcbiAgICAgICkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAvLyB0aGlzLnRlYW1BZG1pbkxpc3QgPSBkYXRhO1xuICAgICAgfSk7XG4gICAgfSovXG5cbiAgZ2V0VXNlclRlYW1BZG1pbkxpc3QoKSB7XG4gICAgLy8gR2V0IGFsbCBUZWFtcywgd2hlcmUgdXNlciBpcyBUZWFtIEFkbWluLCBidXQgb25seSBmb3IgZ2l2ZW4gY2x1YlxuICAgIHJldHVybiB0aGlzLmZiU2VydmljZS5nZXRUZWFtQWRtaW5MaXN0QnlDbHViSWQodGhpcy5jbHViSWQpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggZGlyZWN0IGFkbWluIHRlYW1zXCIsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldFVzZXJDbHViVGVhbUxpc3QoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1YkFkbWluTGlzdEJ5Q2x1YklkKHRoaXMuY2x1YklkKS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHN3aXRjaE1hcChjbHVicyA9PiBjbHVicy5sZW5ndGggPyB0aGlzLmZldGNoVGVhbXNGb3JDbHVicyhjbHVicykgOiBvZihbXSkpLFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggY2x1YnMgb3IgY2x1YiB0ZWFtc1wiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBmZXRjaFRlYW1zRm9yQ2x1YnMoY2x1YnMpIHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgIGNsdWJzLm1hcChjbHViID0+IHRoaXMuZmJTZXJ2aWNlLmdldENsdWJUZWFtTGlzdChjbHViLmlkKSlcbiAgICApLnBpcGUobWFwKCh0ZWFtc0xpc3Q6IGFueSkgPT4gdGVhbXNMaXN0LmZsYXQoKSkpO1xuICB9XG5cbiAgYXN5bmMgcHJlcGFyZUFsZXJ0Rm9yVGVhbXModGVhbXMpIHtcbiAgICBjb25zb2xlLmxvZyhcInByZXBhcmVBbGVydEZvclRlYW1zIHRlYW1zOiBcIiArIHRlYW1zKVxuICAgIGlmICghdGVhbXMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vIHRlYW1zIGZvdW5kIGZvciBhbGVydCBwcmVwYXJhdGlvbi5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNsdWIuc2VsZWN0X3RlYW1faGVhZGVyXCIpKSxcbiAgICAgIHN1YkhlYWRlcjogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjbHViLnNlbGVjdF90ZWFtX3N1YmhlYWRlclwiKSksXG4gICAgICBpbnB1dHM6IHRlYW1zLm1hcCh0ZWFtID0+ICh7XG4gICAgICAgIGxhYmVsOiB0ZWFtLm5hbWUsXG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgIHZhbHVlOiB0ZWFtLmlkLFxuICAgICAgICBjaGVja2VkOiBmYWxzZVxuICAgICAgfSkpLFxuICAgICAgYnV0dG9uczogdGhpcy5nZXRBbGVydEJ1dHRvbnModGVhbXMpLFxuICAgIH0pO1xuICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGdldEFsZXJ0QnV0dG9ucyh0ZWFtcykge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoXCJjb21tb24uY2FuY2VsXCIpLFxuICAgICAgICByb2xlOiBcImRlc3RydWN0aXZlXCIsXG4gICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFsZXJ0IGNhbmNlbGVkXCIpO1xuICAgICAgICAgIHRoaXMudG9hc3RBY3Rpb25DYW5jZWxlZCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KFwiY29tbW9uLmFkZFwiKSxcbiAgICAgICAgaGFuZGxlcjogKGRhdGEpID0+IHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgdGhpcy5hZGRUZWFtcyhkYXRhKTtcbiAgICAgICAgICB0aGlzLnRvYXN0QWN0aW9uU2F2ZWQoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbiAgYXN5bmMgYWRkVGVhbXModGVhbXMpIHtcbiAgICBjb25zb2xlLmxvZyh0ZWFtcyk7XG4gICAgZm9yIChjb25zdCB0ZWFtIG9mIHRlYW1zKSB7XG4gICAgICAvLyBBZGQgdXNlciB0byB0ZWFtXG4gICAgICBjb25zb2xlLmxvZyhcImFkZCB1c2VyIFwiICsgdGhpcy51c2VyUHJvZmlsZS5pZCArIFwiIHRvIHRlYW06IFwiICsgdGVhbSk7XG4gICAgICBhd2FpdCB0aGlzLmZiU2VydmljZS5hcHByb3ZlVXNlclRlYW1SZXF1ZXN0KHRlYW0sIHRoaXMudXNlclByb2ZpbGUuaWQpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIlRlYW1zIGFkZGVkXCIpO1xuICB9XG5cbiAgYXN5bmMgY2xvc2UoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kYWxDdHJsLmRpc21pc3MobnVsbCwgXCJjbG9zZVwiKTtcbiAgICAvLyB0aGlzLm5hdkNvbnRyb2xsZXIucG9wKCk7XG4gIH1cblxuICBhc3luYyBjb25maXJtKCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKG51bGwsIFwiY29uZmlybVwiKTtcbiAgICAvKnRoaXMubmF2Q29udHJvbGxlci5uYXZpZ2F0ZUJhY2soXCJjaGFtcGlvbnNoaXBcIiwge1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgcm9sZTogXCJjb25maXJtXCIsXG4gICAgICAgIGRhdGE6IHRoaXMuZ2FtZSxcbiAgICAgIH0sXG4gICAgfSk7Ki9cbiAgfVxuXG5cbiAgYXN5bmMgZGVsZXRlQ2x1YlJlcXVlc3QodXNlcikge1xuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgIGF3YWl0IHRoaXMuZmJTZXJ2aWNlLmRlbGV0ZVVzZXJDbHViUmVxdWVzdCh0aGlzLmNsdWJJZCwgdXNlci5pZCk7XG4gICAgYXdhaXQgdGhpcy50b2FzdEFjdGlvblJlcXVlc3REZWxldGVkKCk7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgYXN5bmMgdG9hc3RBY3Rpb25TYXZlZCgpIHtcbiAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDdHJsLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5zdWNjZXNzX19zYXZlZFwiKSksXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwic3VjY2Vzc1wiLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgdG9hc3QucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgdG9hc3RBY3Rpb25DbGlwYm9hcmQoKSB7XG4gICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uc3VjY2Vzc19fY29weVwiKSksXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwic3VjY2Vzc1wiLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgdG9hc3QucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgdG9hc3RBY3Rpb25DYW5jZWxlZCgpIHtcbiAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDdHJsLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5hY3Rpb25fX2NhbmNlbGVkXCIpKSxcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgICBjb2xvcjogXCJkYW5nZXJcIixcbiAgICB9KTtcbiAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gIH1cblxuICBhc3luYyB0b2FzdEFjdGlvblJlcXVlc3REZWxldGVkKCkge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdEN0cmwuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY2x1Yi5hY3Rpb25fX3JlcXVlc3RfZGVsZXRlZFwiKSksXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgfSk7XG4gICAgYXdhaXQgdG9hc3QucHJlc2VudCgpO1xuICB9XG5cbn1cbiIsIjxpb24taGVhZGVyIFt0cmFuc2x1Y2VudF09XCJ0cnVlXCI+XG4gIDxpb24tdG9vbGJhcj5cbiAgICA8aW9uLXRpdGxlPk1lbWJlcjwvaW9uLXRpdGxlPlxuICAgIDxpb24tYnV0dG9ucyBzbG90PVwicHJpbWFyeVwiPlxuICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cImNsb3NlKClcIj57e1wiY29tbW9uLmNsb3NlXCIgfCB0cmFuc2xhdGV9fTwvaW9uLWJ1dHRvbj5cbiAgICA8L2lvbi1idXR0b25zPlxuICA8L2lvbi10b29sYmFyPlxuPC9pb24taGVhZGVyPlxuXG48aW9uLWNvbnRlbnQgW2Z1bGxzY3JlZW5dPVwidHJ1ZVwiPlxuICA8aW9uLWhlYWRlciBjb2xsYXBzZT1cImNvbmRlbnNlXCI+XG4gICAgPGlvbi10b29sYmFyPlxuICAgICAgPGlvbi10aXRsZSBzaXplPVwibGFyZ2VcIj57e1wiY29tbW9uLm1lbWJlclwiIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgICA8L2lvbi10b29sYmFyPlxuICA8L2lvbi1oZWFkZXI+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInVzZXJQcm9maWxlJCB8IGFzeW5jIGFzIHVzZXJQcm9maWxlOyBlbHNlIGxvYWRpbmdcIj5cbiAgICA8aW9uLWxpc3QgbGluZXM9XCJmdWxsXCIgW2luc2V0XT1cInRydWVcIj5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1hdmF0YXIgc2xvdD1cInN0YXJ0XCI+XG4gICAgICAgICAgPGltZyAqbmdJZj1cIiF1c2VyUHJvZmlsZS5wcm9maWxlUGljdHVyZVwiIGFsdD1cIlNpbGhvdWV0dGUgb2YgYSBwZXJzb24ncyBoZWFkXCJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvaW1nL2RlbW9zL2F2YXRhci5zdmdcIiAvPlxuICAgICAgICAgIDxpbWcgKm5nSWY9XCJ1c2VyUHJvZmlsZS5wcm9maWxlUGljdHVyZVwiIGFsdD1cInt7dXNlclByb2ZpbGUuZmlyc3ROYW1lfX0ge3t1c2VyUHJvZmlsZS5sYXN0TmFtZX19XCJcbiAgICAgICAgICAgIHNyYz1cInt7dXNlclByb2ZpbGUucHJvZmlsZVBpY3R1cmV9fVwiIC8+XG4gICAgICAgIDwvaW9uLWF2YXRhcj5cblxuICAgICAgICA8aW9uLWxhYmVsPnt7dXNlclByb2ZpbGUuZmlyc3ROYW1lfX0ge3t1c2VyUHJvZmlsZS5sYXN0TmFtZX19PC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cIm1haWxcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsPnt7dXNlclByb2ZpbGUuZW1haWx9fTwvaW9uLWxhYmVsPlxuICAgICAgICA8aW9uLWljb24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCIgbmFtZT1cImNvcHktb3V0bGluZVwiIHNsb3Q9XCJlbmRcIlxuICAgICAgICAgIChjbGljayk9XCJjb3B5KHVzZXJQcm9maWxlLmVtYWlsKVwiPjwvaW9uLWljb24+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgICAgPGlvbi1pdGVtICpuZ0lmPVwiIWlzUmVxdWVzdCAmJiB1c2VyUHJvZmlsZS5waG9uZW51bWJlclwiPlxuICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cImNhbGxcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsPnt7dXNlclByb2ZpbGUucGhvbmVudW1iZXJ9fTwvaW9uLWxhYmVsPlxuICAgICAgICA8aW9uLWljb24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCIgbmFtZT1cImNvcHktb3V0bGluZVwiIHNsb3Q9XCJlbmRcIlxuICAgICAgICAgIChjbGljayk9XCJjb3B5KHVzZXJQcm9maWxlLnBob25lbnVtYmVyKVwiPjwvaW9uLWljb24+XG4gICAgICA8L2lvbi1pdGVtPlxuXG5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0FkbWluJCB8IGFzeW5jXCI+XG4gICAgICAgIDxpb24taXRlbSAqbmdJZj1cIiFpc1JlcXVlc3QgJiYgdXNlclByb2ZpbGUuZGF0ZU9mQmlydGhcIj5cbiAgICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cImNhbGVuZGFyXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgICAge3sgdXNlclByb2ZpbGUuZGF0ZU9mQmlydGg/LnRvRGF0ZSgpIHwgZGF0ZTogJ2RkLk1NLllZWVkgJyB9fVxuICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgIDxpb24taWNvblxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBuYW1lPVwiY29weS1vdXRsaW5lXCJcbiAgICAgICAgICAgIHNsb3Q9XCJlbmRcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImNvcHkodXNlclByb2ZpbGUuZGF0ZU9mQmlydGgpXCJcbiAgICAgICAgICA+PC9pb24taWNvbj5cbiAgICAgICAgPC9pb24taXRlbT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPC9pb24tbGlzdD5cblxuICAgIDxkaXYgY2xhc3M9XCJpb24tcGFkZGluZ1wiICpuZ0lmPVwiaXNSZXF1ZXN0XCI+XG4gICAgICA8aW9uLWJ1dHRvbiBleHBhbmQ9XCJibG9ja1wiIGNvbG9yPVwic3VjY2Vzc1wiIGlkPVwicHJlc2VudC1hbGVydC1hcHByb3ZlXCI+XG4gICAgICAgIHt7IFwiY29tbW9uLmFwcHJvdmVfcmVxdWVzdFwiIHwgdHJhbnNsYXRlfX1cbiAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgIDxpb24tYWxlcnQgdHJpZ2dlcj1cInByZXNlbnQtYWxlcnQtYXBwcm92ZVwiIFtoZWFkZXJdPVwiJ2NsdWIucmVxdWVzdF9hcHByb3ZlX2hlYWRlcicgfCB0cmFuc2xhdGVcIlxuICAgICAgICBbc3ViSGVhZGVyXT1cIidjbHViLnJlcXVlc3RfYXBwcm92ZV9zdWJoZWFkZXInIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgW21lc3NhZ2VdPVwiJ2NsdWIucmVxdWVzdF9hZGRfdXNlcl90b19jbHViJyB8IHRyYW5zbGF0ZVwiIFtidXR0b25zXT1cImFsZXJ0QnV0dG9uc0FwcHJvdmVDbHViXCI+PC9pb24tYWxlcnQ+XG5cbiAgICAgIDxpb24tYnV0dG9uIGZpbGw9XCJvdXRsaW5lXCIgZXhwYW5kPVwiYmxvY2tcIiBjb2xvcj1cImRhbmdlclwiIChjbGljayk9XCJkZWxldGVDbHViUmVxdWVzdCh1c2VyUHJvZmlsZSlcIj5cbiAgICAgICAge3sgXCJjb21tb24uZGVsZXRlX3JlcXVlc3RcIiB8IHRyYW5zbGF0ZX19XG4gICAgICA8L2lvbi1idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgPC9uZy1jb250YWluZXI+XG5cbjwvaW9uLWNvbnRlbnQ+XG5cbjxuZy10ZW1wbGF0ZSAjbG9hZGluZz5cbiAgPGlvbi1saXN0ICpuZ0lmPVwibG9hZGluZ1wiPlxuICAgIDxpb24tZ3JpZD5cbiAgICAgIDxpb24tcm93PlxuICAgICAgICA8aW9uLWNvbCBzaXplLWxnPVwiNFwiIHNpemUtbWQ9XCI2XCIgc2l6ZS1zbT1cIjZcIiBzaXplPVwiMTJcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBza2VsZXRvblwiPlxuICAgICAgICAgIDxpb24tY2FyZD5cbiAgICAgICAgICAgIDxpb24tY2FyZC1oZWFkZXI+XG4gICAgICAgICAgICAgIDxpb24tY2FyZC1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogNjAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPC9pb24tY2FyZC1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgPGlvbi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA4MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgICA8L2lvbi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgPC9pb24tY2FyZC1oZWFkZXI+XG5cbiAgICAgICAgICAgIDxpb24tY2FyZC1jb250ZW50PlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogODAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDYwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA4MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogNjAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDgwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICA8L2lvbi1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgPC9pb24tY2FyZD5cbiAgICAgICAgPC9pb24tY29sPlxuICAgICAgPC9pb24tcm93PlxuICAgIDwvaW9uLWdyaWQ+XG4gIDwvaW9uLWxpc3Q+XG48L25nLXRlbXBsYXRlPiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNLGVBQU4sY0FBMkIsVUFBVTtBQUFBLEVBQ3BDLE1BQU0sU0FBUztBQUFBO0FBQ25CLFVBQUksT0FBTyxjQUFjLGVBQWUsQ0FBQyxVQUFVLFdBQVc7QUFDNUQsY0FBTSxLQUFLLFlBQVksNkNBQTZDO0FBQUEsTUFDdEU7QUFDQSxVQUFJLFFBQVEsV0FBVyxRQUFXO0FBQ2hDLGNBQU0sS0FBSyxVQUFVLFFBQVEsTUFBTTtBQUFBLE1BQ3JDLFdBQVcsUUFBUSxLQUFLO0FBQ3RCLGNBQU0sS0FBSyxVQUFVLFFBQVEsR0FBRztBQUFBLE1BQ2xDLFdBQVcsUUFBUSxPQUFPO0FBQ3hCLFlBQUksT0FBTyxrQkFBa0IsYUFBYTtBQUN4QyxjQUFJO0FBQ0Ysa0JBQU0sT0FBTyxPQUFPLE1BQU0sTUFBTSxRQUFRLEtBQUssR0FBRyxLQUFLO0FBQ3JELGtCQUFNLHFCQUFxQixJQUFJLGNBQWM7QUFBQSxjQUMzQyxDQUFDLEtBQUssSUFBSSxHQUFHO0FBQUEsWUFDZixDQUFDO0FBQ0Qsa0JBQU0sVUFBVSxVQUFVLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztBQUFBLFVBQ3RELFNBQVMsS0FBSztBQUNaLGtCQUFNLElBQUksTUFBTSx1QkFBdUI7QUFBQSxVQUN6QztBQUFBLFFBQ0YsT0FBTztBQUNMLGdCQUFNLEtBQUssWUFBWSxrRUFBa0U7QUFBQSxRQUMzRjtBQUFBLE1BQ0YsT0FBTztBQUNMLGNBQU0sSUFBSSxNQUFNLGtCQUFrQjtBQUFBLE1BQ3BDO0FBQUEsSUFDRjtBQUFBO0FBQUEsRUFDTSxPQUFPO0FBQUE7QUFDWCxVQUFJLE9B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
