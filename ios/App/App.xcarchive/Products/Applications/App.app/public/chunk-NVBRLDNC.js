import {
  MemberPage
} from "./chunk-REWK7CTI.js";
import {
  UserProfileService
} from "./chunk-7XMQNZXL.js";
import {
  AuthService,
  Firestore,
  Timestamp,
  collection2 as collection,
  collectionData,
  deleteDoc2 as deleteDoc,
  doc2 as doc,
  docData,
  limit2 as limit,
  orderBy,
  query2 as query,
  setDoc2 as setDoc,
  where2 as where
} from "./chunk-AMO7VPPH.js";
import {
  AsyncPipe,
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
  IonListHeader,
  IonRow,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
  ModalController,
  NavParams,
  NgForOf,
  NgIf,
  TranslatePipe,
  catchError,
  forkJoin,
  inject,
  map,
  of,
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
  ɵɵproperty,
  ɵɵreference,
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

// src/app/services/firebase/championship.service.ts
var _ChampionshipService = class _ChampionshipService {
  constructor(authService, firestore = inject(Firestore)) {
    this.authService = authService;
    this.firestore = firestore;
  }
  /* TEAM GAME */
  getTeamRankingTable(teamId, year) {
    const tableRef = collection(this.firestore, `teams/${teamId}/ranking/${year}/table`);
    return collectionData(tableRef, { idField: "id" });
  }
  getTeamRanking(teamId, year) {
    const tableRef = doc(this.firestore, `teams/${teamId}/ranking/${year}`);
    return docData(tableRef, { idField: "id" });
  }
  getTeamGameRef(teamId, gameId) {
    const gameRef = doc(this.firestore, `teams/${teamId}/games/${gameId}`);
    return docData(gameRef, { idField: "id" });
  }
  /* TEAM GAMES */
  getTeamGamesRefs(teamId) {
    const gamesRefList = collection(this.firestore, `teams/${teamId}/games`);
    const q = query(gamesRefList, where(
      "dateTime",
      ">=",
      Timestamp.fromDate(new Date(Date.now() - 1e3 * 3600 * 2))
      // 2h lang das "alte Spiel" anzeigen
    ), orderBy("dateTime", "asc"));
    return collectionData(q, { idField: "id" });
  }
  // PAST 20 Entries
  getTeamGamesPastRefs(teamId) {
    const gamesRefList = collection(this.firestore, `teams/${teamId}/games`);
    const q = query(gamesRefList, where(
      "dateTime",
      "<",
      Timestamp.fromDate(new Date(Date.now()))
      // sofort in "vergangen" anzeigen
    ), limit(20), orderBy("dateTime", "desc"));
    return collectionData(q, { idField: "id" });
  }
  /* CLUB GAMES */
  getClubGamesRef(clubId) {
    const gamesRefList = collection(this.firestore, `club/${clubId}/games`);
    return collectionData(gamesRefList, {
      idField: "id"
    });
  }
  /* TEAM GAMES ATTENDEES */
  getTeamGameAttendeesRef(teamId, gameId) {
    const attendeesRefList = collection(this.firestore, `teams/${teamId}/games/${gameId}/attendees`);
    return collectionData(attendeesRefList, {
      idField: "id"
    });
  }
  /* SET TEAM GAMES ATTENDEE Status */
  setTeamGameAttendeeStatus(status, teamId, gameId) {
    const user = this.authService.auth.currentUser;
    const statusRef = doc(this.firestore, `teams/${teamId}/games/${gameId}/attendees/${user.uid}`);
    return setDoc(statusRef, { status });
  }
  setTeamGameAttendeeStatusAdmin(status, teamId, gameId, memberId) {
    const statusRef = doc(this.firestore, `teams/${teamId}/games/${gameId}/attendees/${memberId}`);
    return setDoc(statusRef, { status });
  }
  deleteTeamGame(teamId, gameId) {
    const gameRef = doc(this.firestore, `teams/${teamId}/games/${gameId}`);
    const attendeesRefList = collection(this.firestore, `teams/${teamId}/games/${gameId}/attendees`);
    return deleteDoc(gameRef);
  }
};
_ChampionshipService.\u0275fac = function ChampionshipService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChampionshipService)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Firestore));
};
_ChampionshipService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChampionshipService, factory: _ChampionshipService.\u0275fac, providedIn: "root" });
var ChampionshipService = _ChampionshipService;

// src/app/pages/championship/lineup/lineup.page.ts
function LineupPage_ng_container_0_ion_list_18_ion_item_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 11)(1, "ion-icon", 12);
    \u0275\u0275listener("click", function LineupPage_ng_container_0_ion_list_18_ion_item_5_Template_ion_icon_click_1_listener() {
      const member_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addMember(member_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ion-label", 4);
    \u0275\u0275listener("click", function LineupPage_ng_container_0_ion_list_18_ion_item_5_Template_ion_label_click_2_listener() {
      const member_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openMember(member_r4));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", member_r4.firstName, " ", member_r4.lastName, "");
  }
}
function LineupPage_ng_container_0_ion_list_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 9)(1, "ion-list-header")(2, "ion-item");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, LineupPage_ng_container_0_ion_list_18_ion_item_5_Template, 4, 2, "ion-item", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const block_r5 = ctx.$implicit;
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "common.present"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", block_r5["members"]);
  }
}
function LineupPage_ng_container_0_ion_item_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 11)(1, "ion-icon", 12);
    \u0275\u0275listener("click", function LineupPage_ng_container_0_ion_item_24_Template_ion_icon_click_1_listener() {
      const member_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addMember(member_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ion-label", 4);
    \u0275\u0275listener("click", function LineupPage_ng_container_0_ion_item_24_Template_ion_label_click_2_listener() {
      const member_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openMember(member_r7));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", member_r7.firstName, " ", member_r7.lastName, "");
  }
}
function LineupPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-header", 2)(2, "ion-toolbar")(3, "ion-title");
    \u0275\u0275text(4, "Lineup");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-buttons", 3)(6, "ion-button", 4);
    \u0275\u0275listener("click", function LineupPage_ng_container_0_Template_ion_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "ion-content", 5)(10, "ion-header", 6)(11, "ion-toolbar")(12, "ion-title", 7);
    \u0275\u0275text(13, "Lineup");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ion-buttons", 3)(15, "ion-button");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(18, LineupPage_ng_container_0_ion_list_18_Template, 6, 5, "ion-list", 8);
    \u0275\u0275elementStart(19, "ion-list", 9)(20, "ion-list-header")(21, "ion-item");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, LineupPage_ng_container_0_ion_item_24_Template, 4, 2, "ion-item", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const game_r8 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, "common.close"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 10, "common.add"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.blocks);
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 12, "common.present"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", game_r8["attendeeListTrue"]);
  }
}
function LineupPage_ng_template_2_ion_list_0_ion_col_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-col", 14)(1, "ion-card")(2, "ion-card-header")(3, "ion-card-subtitle");
    \u0275\u0275element(4, "ion-skeleton-text", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-card-title");
    \u0275\u0275element(6, "ion-skeleton-text", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-card-content");
    \u0275\u0275element(8, "ion-skeleton-text", 16)(9, "ion-skeleton-text", 15)(10, "ion-skeleton-text", 16)(11, "ion-skeleton-text", 15)(12, "ion-skeleton-text", 16);
    \u0275\u0275elementEnd()()();
  }
}
function LineupPage_ng_template_2_ion_list_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list")(1, "ion-grid")(2, "ion-row");
    \u0275\u0275template(3, LineupPage_ng_template_2_ion_list_0_ion_col_3_Template, 13, 0, "ion-col", 13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.skeleton);
  }
}
function LineupPage_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LineupPage_ng_template_2_ion_list_0_Template, 4, 1, "ion-list", 1);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const loading_r9 = \u0275\u0275reference(3);
    \u0275\u0275property("ngIf", loading_r9);
  }
}
var _LineupPage = class _LineupPage {
  constructor(modalCtrl, userProfileService, authService, navParams, championshipService) {
    this.modalCtrl = modalCtrl;
    this.userProfileService = userProfileService;
    this.authService = authService;
    this.navParams = navParams;
    this.championshipService = championshipService;
    this.skeleton = new Array(12);
    this.blocks = [
      {
        name: "block 1",
        members: []
      }
    ];
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.game = this.navParams.get("data");
      this.game.teamId = this.game.teamRef.id;
      this.game$ = of(this.game);
      this.game$ = this.getGame(this.game.teamRef.id, this.game.id);
    });
  }
  getGame(teamId, gameId) {
    return this.authService.getUser$().pipe(take(1), tap((user) => {
      this.user = user;
      if (!user) {
        console.log("No user found");
        throw new Error("User not found");
      }
    }), switchMap(() => this.championshipService.getTeamGameRef(teamId, gameId)), switchMap((game) => {
      if (!game)
        return of(null);
      return this.championshipService.getTeamGameAttendeesRef(teamId, gameId).pipe(switchMap((attendees) => {
        if (attendees.length === 0) {
          return of(__spreadProps(__spreadValues({}, game), {
            attendees: [],
            attendeeListTrue: [],
            attendeeListFalse: [],
            status: null
          }));
        }
        const attendeeProfiles$ = attendees.map((attendee) => this.userProfileService.getUserProfileById(attendee.id).pipe(
          take(1),
          map((profile) => __spreadValues(__spreadValues({}, profile), attendee)),
          // Combine attendee object with profile
          catchError(() => of(__spreadProps(__spreadValues({}, attendee), {
            firstName: "Unknown",
            lastName: "Unknown"
          })))
        ));
        return forkJoin(attendeeProfiles$).pipe(map((attendeesWithDetails) => {
          var _a;
          return __spreadProps(__spreadValues({}, game), {
            attendees: attendeesWithDetails,
            attendeeListTrue: attendeesWithDetails.filter((e) => e.status == true),
            attendeeListFalse: attendeesWithDetails.filter((e) => e.status == false),
            status: (_a = attendeesWithDetails.find((att) => att.id == this.user.uid)) == null ? void 0 : _a.status
          });
        }));
      }), catchError(() => of(__spreadProps(__spreadValues({}, game), {
        attendees: [],
        status: null
      }))));
    }), catchError((err) => {
      console.error("Error in getTrainingWithAttendees:", err);
      return of(null);
    }));
  }
  addMember(member) {
    console.log("addmember");
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
  handleReorder(ev) {
    console.log("Dragged from index", ev.detail.from, "to", ev.detail.to);
    ev.detail.complete();
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
_LineupPage.\u0275fac = function LineupPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LineupPage)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(UserProfileService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NavParams), \u0275\u0275directiveInject(ChampionshipService));
};
_LineupPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LineupPage, selectors: [["app-lineup"]], inputs: { game: [0, "data", "game"] }, standalone: false, decls: 4, vars: 3, consts: [["loading", ""], [4, "ngIf"], [3, "translucent"], ["slot", "primary"], [3, "click"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], ["lines", "full", 3, "inset", 4, "ngFor", "ngForIndex", "ngForOf"], ["lines", "full", 3, "inset"], ["detail", "true", 4, "ngFor", "ngForOf"], ["detail", "true"], ["color", "primary", "name", "add-circle-outline", "slot", "start", 3, "click"], ["size-lg", "4", "size-md", "6", "size-sm", "6", "size", "12", 4, "ngFor", "ngForOf"], ["size-lg", "4", "size-md", "6", "size-sm", "6", "size", "12"], ["animated", "", 2, "width", "60%"], ["animated", "", 2, "width", "80%"]], template: function LineupPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LineupPage_ng_container_0_Template, 25, 14, "ng-container", 1);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275template(2, LineupPage_ng_template_2_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.game$));
  }
}, dependencies: [NgForOf, NgIf, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonRow, IonSkeletonText, IonTitle, IonToolbar, AsyncPipe, TranslatePipe], encapsulation: 2 });
var LineupPage = _LineupPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LineupPage, { className: "LineupPage", filePath: "src/app/pages/championship/lineup/lineup.page.ts", lineNumber: 31 });
})();

export {
  ChampionshipService,
  LineupPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS9jaGFtcGlvbnNoaXAuc2VydmljZS50cyIsICJzcmMvYXBwL3BhZ2VzL2NoYW1waW9uc2hpcC9saW5ldXAvbGluZXVwLnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9jaGFtcGlvbnNoaXAvbGluZXVwL2xpbmV1cC5wYWdlLmh0bWwiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7XG4gIGxpbWl0LFxuICBUaW1lc3RhbXAsXG4gIEZpcmVzdG9yZSxcbiAgY29sbGVjdGlvbixcbiAgY29sbGVjdGlvbkRhdGEsXG4gIGRvYyxcbiAgZG9jRGF0YSxcbiAgZGVsZXRlRG9jLFxuICBzZXREb2MsXG4gIHF1ZXJ5LFxuICB3aGVyZSxcbn0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBvcmRlckJ5IH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcInNyYy9hcHAvbW9kZWxzL2dhbWVcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uL2F1dGguc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBDaGFtcGlvbnNoaXBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmaXJlc3RvcmU6IEZpcmVzdG9yZSA9IGluamVjdChGaXJlc3RvcmUpKSB7XG5cbiAgfVxuXG4gIC8qIFRFQU0gR0FNRSAqL1xuXG4gIGdldFRlYW1SYW5raW5nVGFibGUodGVhbUlkOiBzdHJpbmcsIHllYXI6IHN0cmluZyk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBjb25zdCB0YWJsZVJlZiA9IGNvbGxlY3Rpb24odGhpcy5maXJlc3RvcmUsIGB0ZWFtcy8ke3RlYW1JZH0vcmFua2luZy8ke3llYXJ9L3RhYmxlYCk7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb25EYXRhKHRhYmxlUmVmLCB7IGlkRmllbGQ6IFwiaWRcIiB9KSBhcyBPYnNlcnZhYmxlPGFueVtdPjtcbiAgfVxuXG4gIGdldFRlYW1SYW5raW5nKHRlYW1JZDogc3RyaW5nLCB5ZWFyOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHRhYmxlUmVmID0gZG9jKHRoaXMuZmlyZXN0b3JlLCBgdGVhbXMvJHt0ZWFtSWR9L3JhbmtpbmcvJHt5ZWFyfWApO1xuICAgIHJldHVybiBkb2NEYXRhKHRhYmxlUmVmLCB7IGlkRmllbGQ6IFwiaWRcIiB9KSBhcyBPYnNlcnZhYmxlPGFueT47XG4gIH1cblxuICBnZXRUZWFtR2FtZVJlZih0ZWFtSWQ6IHN0cmluZywgZ2FtZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdhbWU+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhgUmVhZCBUZWFtIEdhbWVzIEF0dGVuZGVlcyBMaXN0IFJlZiAke3RlYW1JZH0gd2l0aCBnYW1lICR7Z2FtZUlkfWApXG4gICAgY29uc3QgZ2FtZVJlZiA9IGRvYyh0aGlzLmZpcmVzdG9yZSwgYHRlYW1zLyR7dGVhbUlkfS9nYW1lcy8ke2dhbWVJZH1gKTtcbiAgICByZXR1cm4gZG9jRGF0YShnYW1lUmVmLCB7IGlkRmllbGQ6IFwiaWRcIiB9KSBhcyBPYnNlcnZhYmxlPEdhbWU+O1xuICB9XG5cbiAgLyogVEVBTSBHQU1FUyAqL1xuICBnZXRUZWFtR2FtZXNSZWZzKHRlYW1JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxHYW1lW10+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhgUmVhZCBUZWFtIEdhbWVzIExpc3QgUmVmICR7dGVhbUlkfWApXG4gICAgY29uc3QgZ2FtZXNSZWZMaXN0ID0gY29sbGVjdGlvbih0aGlzLmZpcmVzdG9yZSwgYHRlYW1zLyR7dGVhbUlkfS9nYW1lc2ApO1xuICAgIGNvbnN0IHEgPSBxdWVyeShcbiAgICAgIGdhbWVzUmVmTGlzdCxcbiAgICAgIHdoZXJlKFxuICAgICAgICBcImRhdGVUaW1lXCIsXG4gICAgICAgIFwiPj1cIixcbiAgICAgICAgVGltZXN0YW1wLmZyb21EYXRlKG5ldyBEYXRlKERhdGUubm93KCkgLSAxMDAwICogMzYwMCAqIDIpKSAvLyAyaCBsYW5nIGRhcyBcImFsdGUgU3BpZWxcIiBhbnplaWdlblxuICAgICAgKSxcbiAgICAgIG9yZGVyQnkoJ2RhdGVUaW1lJywgJ2FzYycpXG4gICAgKTsgLy8gaGV1dGUgLSAxIFRhZ1xuICAgIHJldHVybiBjb2xsZWN0aW9uRGF0YShxLCB7IGlkRmllbGQ6IFwiaWRcIiB9KSBhcyBPYnNlcnZhYmxlPFxuICAgICAgR2FtZVtdXG4gICAgPjtcbiAgfVxuXG4gIC8vIFBBU1QgMjAgRW50cmllc1xuICBnZXRUZWFtR2FtZXNQYXN0UmVmcyh0ZWFtSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R2FtZVtdPiB7XG4gICAgLy9jb25zb2xlLmxvZyhgUmVhZCBUZWFtIEdhbWVzIExpc3QgUmVmICR7dGVhbUlkfWApXG4gICAgY29uc3QgZ2FtZXNSZWZMaXN0ID0gY29sbGVjdGlvbih0aGlzLmZpcmVzdG9yZSwgYHRlYW1zLyR7dGVhbUlkfS9nYW1lc2ApO1xuICAgIGNvbnN0IHEgPSBxdWVyeShcbiAgICAgIGdhbWVzUmVmTGlzdCxcbiAgICAgIHdoZXJlKFxuICAgICAgICBcImRhdGVUaW1lXCIsXG4gICAgICAgIFwiPFwiLFxuICAgICAgICBUaW1lc3RhbXAuZnJvbURhdGUobmV3IERhdGUoRGF0ZS5ub3coKSkpIC8vIHNvZm9ydCBpbiBcInZlcmdhbmdlblwiIGFuemVpZ2VuXG4gICAgICApLFxuICAgICAgbGltaXQoMjApLFxuICAgICAgb3JkZXJCeSgnZGF0ZVRpbWUnLCAnZGVzYycpXG4gICAgKTsgLy8gaGV1dGUgLSAxIFRhZ1xuICAgIHJldHVybiBjb2xsZWN0aW9uRGF0YShxLCB7IGlkRmllbGQ6IFwiaWRcIiB9KSBhcyBPYnNlcnZhYmxlPFxuICAgICAgR2FtZVtdXG4gICAgPjtcbiAgfVxuXG4gIC8qIENMVUIgR0FNRVMgKi9cbiAgZ2V0Q2x1YkdhbWVzUmVmKGNsdWJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxHYW1lW10+IHtcbiAgICBjb25zdCBnYW1lc1JlZkxpc3QgPSBjb2xsZWN0aW9uKHRoaXMuZmlyZXN0b3JlLCBgY2x1Yi8ke2NsdWJJZH0vZ2FtZXNgKTtcbiAgICByZXR1cm4gY29sbGVjdGlvbkRhdGEoZ2FtZXNSZWZMaXN0LCB7XG4gICAgICBpZEZpZWxkOiBcImlkXCIsXG4gICAgfSkgYXMgT2JzZXJ2YWJsZTxHYW1lW10+O1xuICB9XG5cbiAgLyogVEVBTSBHQU1FUyBBVFRFTkRFRVMgKi9cbiAgZ2V0VGVhbUdhbWVBdHRlbmRlZXNSZWYodGVhbUlkOiBzdHJpbmcsIGdhbWVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGBSZWFkIFRlYW0gR2FtZXMgQXR0ZW5kZWVzIExpc3QgUmVmICR7dGVhbUlkfSB3aXRoIGdhbWUgJHtnYW1lSWR9YClcbiAgICBjb25zdCBhdHRlbmRlZXNSZWZMaXN0ID0gY29sbGVjdGlvbihcbiAgICAgIHRoaXMuZmlyZXN0b3JlLFxuICAgICAgYHRlYW1zLyR7dGVhbUlkfS9nYW1lcy8ke2dhbWVJZH0vYXR0ZW5kZWVzYFxuICAgICk7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb25EYXRhKGF0dGVuZGVlc1JlZkxpc3QsIHtcbiAgICAgIGlkRmllbGQ6IFwiaWRcIixcbiAgICB9KSBhcyBPYnNlcnZhYmxlPGFueVtdPjtcbiAgfVxuXG4gIC8qIFNFVCBURUFNIEdBTUVTIEFUVEVOREVFIFN0YXR1cyAqL1xuICBzZXRUZWFtR2FtZUF0dGVuZGVlU3RhdHVzKFxuICAgIHN0YXR1czogYm9vbGVhbixcbiAgICB0ZWFtSWQ6IHN0cmluZyxcbiAgICBnYW1lSWQ6IHN0cmluZ1xuICApIHtcbiAgICBjb25zdCB1c2VyID0gdGhpcy5hdXRoU2VydmljZS5hdXRoLmN1cnJlbnRVc2VyO1xuICAgIGNvbnN0IHN0YXR1c1JlZiA9IGRvYyhcbiAgICAgIHRoaXMuZmlyZXN0b3JlLFxuICAgICAgYHRlYW1zLyR7dGVhbUlkfS9nYW1lcy8ke2dhbWVJZH0vYXR0ZW5kZWVzLyR7dXNlci51aWR9YFxuICAgICk7XG4gICAgcmV0dXJuIHNldERvYyhzdGF0dXNSZWYsIHsgc3RhdHVzIH0pO1xuICB9XG4gIHNldFRlYW1HYW1lQXR0ZW5kZWVTdGF0dXNBZG1pbihcbiAgICBzdGF0dXM6IGJvb2xlYW4sXG4gICAgdGVhbUlkOiBzdHJpbmcsXG4gICAgZ2FtZUlkOiBzdHJpbmcsXG4gICAgbWVtYmVySWQ6IHN0cmluZyxcbiAgKSB7XG4gICAgY29uc3Qgc3RhdHVzUmVmID0gZG9jKFxuICAgICAgdGhpcy5maXJlc3RvcmUsXG4gICAgICBgdGVhbXMvJHt0ZWFtSWR9L2dhbWVzLyR7Z2FtZUlkfS9hdHRlbmRlZXMvJHttZW1iZXJJZH1gXG4gICAgKTtcbiAgICByZXR1cm4gc2V0RG9jKHN0YXR1c1JlZiwgeyBzdGF0dXMgfSk7XG4gIH1cblxuICBkZWxldGVUZWFtR2FtZSh0ZWFtSWQ6IHN0cmluZywgZ2FtZUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBnYW1lUmVmID0gZG9jKFxuICAgICAgdGhpcy5maXJlc3RvcmUsXG4gICAgICBgdGVhbXMvJHt0ZWFtSWR9L2dhbWVzLyR7Z2FtZUlkfWBcbiAgICApO1xuXG4gICAgY29uc3QgYXR0ZW5kZWVzUmVmTGlzdCA9IGNvbGxlY3Rpb24oXG4gICAgICB0aGlzLmZpcmVzdG9yZSxcbiAgICAgIGB0ZWFtcy8ke3RlYW1JZH0vZ2FtZXMvJHtnYW1lSWR9L2F0dGVuZGVlc2BcbiAgICApO1xuXG4gICAgcmV0dXJuIGRlbGV0ZURvYyhnYW1lUmVmKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBJdGVtUmVvcmRlckV2ZW50RGV0YWlsLFxuICBNb2RhbENvbnRyb2xsZXIsXG4gIE5hdlBhcmFtcyxcbn0gZnJvbSBcIkBpb25pYy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7XG4gIE9ic2VydmFibGUsXG4gIGNhdGNoRXJyb3IsXG4gIGZvcmtKb2luLFxuICBtYXAsXG4gIG9mLFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwic3JjL2FwcC9tb2RlbHMvZ2FtZVwiO1xuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gXCJzcmMvYXBwL21vZGVscy91c2VyXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgQ2hhbXBpb25zaGlwU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlL2NoYW1waW9uc2hpcC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZVNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS91c2VyLXByb2ZpbGUuc2VydmljZVwiO1xuaW1wb3J0IHsgTWVtYmVyUGFnZSB9IGZyb20gXCIuLi8uLi9tZW1iZXIvbWVtYmVyLnBhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLWxpbmV1cFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbGluZXVwLnBhZ2UuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9saW5ldXAucGFnZS5zY3NzXCJdLFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIExpbmV1cFBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoXCJkYXRhXCIpIGdhbWU6IEdhbWU7XG5cbiAgdXNlclByb2ZpbGU6IFByb2ZpbGU7XG5cbiAgc2tlbGV0b24gPSBuZXcgQXJyYXkoMTIpO1xuICBibG9ja3MgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJibG9jayAxXCIsXG4gICAgICBtZW1iZXJzOiBbXSxcbiAgICB9LFxuICBdO1xuXG4gIGdhbWUkOiBPYnNlcnZhYmxlPEdhbWU+O1xuICB1c2VyJDogT2JzZXJ2YWJsZTxVc2VyPjtcbiAgdXNlcjogVXNlcjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHVzZXJQcm9maWxlU2VydmljZTogVXNlclByb2ZpbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgbmF2UGFyYW1zOiBOYXZQYXJhbXMsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjaGFtcGlvbnNoaXBTZXJ2aWNlOiBDaGFtcGlvbnNoaXBTZXJ2aWNlXG4gICkge31cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdhbWUgPSB0aGlzLm5hdlBhcmFtcy5nZXQoXCJkYXRhXCIpO1xuICAgIHRoaXMuZ2FtZS50ZWFtSWQgPSB0aGlzLmdhbWUudGVhbVJlZi5pZDtcbiAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5nYW1lKVxuICAgIHRoaXMuZ2FtZSQgPSBvZih0aGlzLmdhbWUpO1xuICAgIHRoaXMuZ2FtZSQgPSB0aGlzLmdldEdhbWUodGhpcy5nYW1lLnRlYW1SZWYuaWQsIHRoaXMuZ2FtZS5pZCk7XG4gIH1cbiAgZ2V0R2FtZSh0ZWFtSWQ6IHN0cmluZywgZ2FtZUlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyJCgpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgdGFwKCh1c2VyKSA9PiB7XG4gICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gdXNlciBmb3VuZFwiKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5jaGFtcGlvbnNoaXBTZXJ2aWNlLmdldFRlYW1HYW1lUmVmKHRlYW1JZCwgZ2FtZUlkKSksXG4gICAgICBzd2l0Y2hNYXAoKGdhbWUpID0+IHtcbiAgICAgICAgaWYgKCFnYW1lKSByZXR1cm4gb2YobnVsbCk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW1waW9uc2hpcFNlcnZpY2VcbiAgICAgICAgICAuZ2V0VGVhbUdhbWVBdHRlbmRlZXNSZWYodGVhbUlkLCBnYW1lSWQpXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKGF0dGVuZGVlcykgPT4ge1xuICAgICAgICAgICAgICBpZiAoYXR0ZW5kZWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIElmIG5vIGF0dGVuZGVlcywgcmV0dXJuIGV2ZW50IGRhdGEgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICByZXR1cm4gb2Yoe1xuICAgICAgICAgICAgICAgICAgLi4uZ2FtZSxcbiAgICAgICAgICAgICAgICAgIGF0dGVuZGVlczogW10sXG4gICAgICAgICAgICAgICAgICBhdHRlbmRlZUxpc3RUcnVlOiBbXSxcbiAgICAgICAgICAgICAgICAgIGF0dGVuZGVlTGlzdEZhbHNlOiBbXSxcbiAgICAgICAgICAgICAgICAgIHN0YXR1czogbnVsbCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb25zdCBhdHRlbmRlZVByb2ZpbGVzJCA9IGF0dGVuZGVlcy5tYXAoKGF0dGVuZGVlKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMudXNlclByb2ZpbGVTZXJ2aWNlLmdldFVzZXJQcm9maWxlQnlJZChhdHRlbmRlZS5pZCkucGlwZShcbiAgICAgICAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICAgICAgICBtYXAoKHByb2ZpbGUpID0+ICh7IC4uLnByb2ZpbGUsIC4uLmF0dGVuZGVlIH0pKSwgLy8gQ29tYmluZSBhdHRlbmRlZSBvYmplY3Qgd2l0aCBwcm9maWxlXG4gICAgICAgICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+XG4gICAgICAgICAgICAgICAgICAgIG9mKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5hdHRlbmRlZSxcbiAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IFwiVW5rbm93blwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBcIlVua25vd25cIixcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHJldHVybiBmb3JrSm9pbihhdHRlbmRlZVByb2ZpbGVzJCkucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoKGF0dGVuZGVlc1dpdGhEZXRhaWxzKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgLi4uZ2FtZSxcbiAgICAgICAgICAgICAgICAgIGF0dGVuZGVlczogYXR0ZW5kZWVzV2l0aERldGFpbHMsXG4gICAgICAgICAgICAgICAgICBhdHRlbmRlZUxpc3RUcnVlOiBhdHRlbmRlZXNXaXRoRGV0YWlscy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIChlKSA9PiBlLnN0YXR1cyA9PSB0cnVlXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVMaXN0RmFsc2U6IGF0dGVuZGVlc1dpdGhEZXRhaWxzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgKGUpID0+IGUuc3RhdHVzID09IGZhbHNlXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgc3RhdHVzOiBhdHRlbmRlZXNXaXRoRGV0YWlscy5maW5kKFxuICAgICAgICAgICAgICAgICAgICAoYXR0KSA9PiBhdHQuaWQgPT0gdGhpcy51c2VyLnVpZFxuICAgICAgICAgICAgICAgICAgKT8uc3RhdHVzLFxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+XG4gICAgICAgICAgICAgIG9mKHtcbiAgICAgICAgICAgICAgICAuLi5nYW1lLFxuICAgICAgICAgICAgICAgIGF0dGVuZGVlczogW10sXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBudWxsLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gZ2V0VHJhaW5pbmdXaXRoQXR0ZW5kZWVzOlwiLCBlcnIpO1xuICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbiAgYWRkTWVtYmVyKG1lbWJlcjogUHJvZmlsZSkge1xuICAgIGNvbnNvbGUubG9nKFwiYWRkbWVtYmVyXCIpO1xuICB9XG4gIGFzeW5jIG9wZW5NZW1iZXIobWVtYmVyOiBQcm9maWxlKSB7XG4gICAgY29uc29sZS5sb2coXCJvcGVuTWVtYmVyXCIpO1xuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbEN0cmwuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogTWVtYmVyUGFnZSxcbiAgICAgIHByZXNlbnRpbmdFbGVtZW50OiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5nZXRUb3AoKSxcbiAgICAgIGNhbkRpc21pc3M6IHRydWUsXG4gICAgICBzaG93QmFja2Ryb3A6IHRydWUsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBkYXRhOiBtZW1iZXIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIG1vZGFsLnByZXNlbnQoKTtcblxuICAgIGNvbnN0IHsgZGF0YSwgcm9sZSB9ID0gYXdhaXQgbW9kYWwub25XaWxsRGlzbWlzcygpO1xuXG4gICAgaWYgKHJvbGUgPT09IFwiY29uZmlybVwiKSB7XG4gICAgfVxuICB9XG4gIGhhbmRsZVJlb3JkZXIoZXY6IEN1c3RvbUV2ZW50PEl0ZW1SZW9yZGVyRXZlbnREZXRhaWw+KSB7XG4gICAgLy8gVGhlIGBmcm9tYCBhbmQgYHRvYCBwcm9wZXJ0aWVzIGNvbnRhaW4gdGhlIGluZGV4IG9mIHRoZSBpdGVtXG4gICAgLy8gd2hlbiB0aGUgZHJhZyBzdGFydGVkIGFuZCBlbmRlZCwgcmVzcGVjdGl2ZWx5XG4gICAgY29uc29sZS5sb2coXCJEcmFnZ2VkIGZyb20gaW5kZXhcIiwgZXYuZGV0YWlsLmZyb20sIFwidG9cIiwgZXYuZGV0YWlsLnRvKTtcblxuICAgIC8vIEZpbmlzaCB0aGUgcmVvcmRlciBhbmQgcG9zaXRpb24gdGhlIGl0ZW0gaW4gdGhlIERPTSBiYXNlZCBvblxuICAgIC8vIHdoZXJlIHRoZSBnZXN0dXJlIGVuZGVkLiBUaGlzIG1ldGhvZCBjYW4gYWxzbyBiZSBjYWxsZWQgZGlyZWN0bHlcbiAgICAvLyBieSB0aGUgcmVvcmRlciBncm91cFxuICAgIGV2LmRldGFpbC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgYXN5bmMgY2xvc2UoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kYWxDdHJsLmRpc21pc3MobnVsbCwgXCJjbG9zZVwiKTtcbiAgfVxuXG4gIGFzeW5jIGNvbmZpcm0oKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kYWxDdHJsLmRpc21pc3MobnVsbCwgXCJjb25maXJtXCIpO1xuICB9XG59XG4iLCAiPG5nLWNvbnRhaW5lciAqbmdJZj1cImdhbWUkIHwgYXN5bmMgYXMgZ2FtZVwiPlxuICA8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxuICAgIDxpb24tdG9vbGJhcj5cbiAgICAgIDxpb24tdGl0bGU+TGluZXVwPC9pb24tdGl0bGU+XG4gICAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInByaW1hcnlcIj5cbiAgICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cImNsb3NlKClcIlxuICAgICAgICAgID57e1wiY29tbW9uLmNsb3NlXCIgfCB0cmFuc2xhdGV9fTwvaW9uLWJ1dHRvblxuICAgICAgICA+XG4gICAgICA8L2lvbi1idXR0b25zPlxuICAgIDwvaW9uLXRvb2xiYXI+XG4gIDwvaW9uLWhlYWRlcj5cblxuICA8aW9uLWNvbnRlbnQgW2Z1bGxzY3JlZW5dPVwidHJ1ZVwiPlxuICAgIDxpb24taGVhZGVyIGNvbGxhcHNlPVwiY29uZGVuc2VcIj5cbiAgICAgIDxpb24tdG9vbGJhcj5cbiAgICAgICAgPGlvbi10aXRsZSBzaXplPVwibGFyZ2VcIj5MaW5ldXA8L2lvbi10aXRsZT5cbiAgICAgICAgPGlvbi1idXR0b25zIHNsb3Q9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgPGlvbi1idXR0b24+e3tcImNvbW1vbi5hZGRcIiB8IHRyYW5zbGF0ZX19PC9pb24tYnV0dG9uPlxuICAgICAgICA8L2lvbi1idXR0b25zPlxuICAgICAgPC9pb24tdG9vbGJhcj5cbiAgICA8L2lvbi1oZWFkZXI+XG5cbiAgICA8aW9uLWxpc3QgbGluZXM9XCJmdWxsXCIgW2luc2V0XT1cInRydWVcIiAqbmdGb3I9XCJsZXQgYmxvY2sgb2YgYmxvY2tzLCBpbmRleFwiPlxuICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgPGlvbi1pdGVtPiB7e1wiY29tbW9uLnByZXNlbnRcIiB8IHRyYW5zbGF0ZX19IDwvaW9uLWl0ZW0+XG4gICAgICA8L2lvbi1saXN0LWhlYWRlcj5cblxuICAgICAgPGlvbi1pdGVtICpuZ0Zvcj1cImxldCBtZW1iZXIgb2YgYmxvY2tbJ21lbWJlcnMnXVwiIGRldGFpbD1cInRydWVcIj5cbiAgICAgICAgPGlvbi1pY29uXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBuYW1lPVwiYWRkLWNpcmNsZS1vdXRsaW5lXCJcbiAgICAgICAgICAoY2xpY2spPVwiYWRkTWVtYmVyKG1lbWJlcilcIlxuICAgICAgICAgIHNsb3Q9XCJzdGFydFwiXG4gICAgICAgID48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsIChjbGljayk9XCJvcGVuTWVtYmVyKG1lbWJlcilcIlxuICAgICAgICAgID57e21lbWJlci5maXJzdE5hbWV9fSB7e21lbWJlci5sYXN0TmFtZX19PC9pb24tbGFiZWxcbiAgICAgICAgPlxuICAgICAgPC9pb24taXRlbT5cbiAgICA8L2lvbi1saXN0PlxuXG4gICAgPGlvbi1saXN0IGxpbmVzPVwiZnVsbFwiIFtpbnNldF09XCJ0cnVlXCI+XG4gICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICA8aW9uLWl0ZW0+IHt7XCJjb21tb24ucHJlc2VudFwiIHwgdHJhbnNsYXRlfX0gPC9pb24taXRlbT5cbiAgICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxuXG4gICAgICA8aW9uLWl0ZW0gKm5nRm9yPVwibGV0IG1lbWJlciBvZiBnYW1lWydhdHRlbmRlZUxpc3RUcnVlJ11cIiBkZXRhaWw9XCJ0cnVlXCI+XG4gICAgICAgIDxpb24taWNvblxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgbmFtZT1cImFkZC1jaXJjbGUtb3V0bGluZVwiXG4gICAgICAgICAgKGNsaWNrKT1cImFkZE1lbWJlcihtZW1iZXIpXCJcbiAgICAgICAgICBzbG90PVwic3RhcnRcIlxuICAgICAgICA+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbCAoY2xpY2spPVwib3Blbk1lbWJlcihtZW1iZXIpXCJcbiAgICAgICAgICA+e3ttZW1iZXIuZmlyc3ROYW1lfX0ge3ttZW1iZXIubGFzdE5hbWV9fTwvaW9uLWxhYmVsXG4gICAgICAgID5cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgPC9pb24tbGlzdD5cbiAgPC9pb24tY29udGVudD5cbjwvbmctY29udGFpbmVyPlxuXG48bmctdGVtcGxhdGUgI2xvYWRpbmc+XG4gIDxpb24tbGlzdCAqbmdJZj1cImxvYWRpbmdcIj5cbiAgICA8aW9uLWdyaWQ+XG4gICAgICA8aW9uLXJvdz5cbiAgICAgICAgPGlvbi1jb2xcbiAgICAgICAgICBzaXplLWxnPVwiNFwiXG4gICAgICAgICAgc2l6ZS1tZD1cIjZcIlxuICAgICAgICAgIHNpemUtc209XCI2XCJcbiAgICAgICAgICBzaXplPVwiMTJcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNrZWxldG9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpb24tY2FyZD5cbiAgICAgICAgICAgIDxpb24tY2FyZC1oZWFkZXI+XG4gICAgICAgICAgICAgIDxpb24tY2FyZC1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGVkXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA2MCVcIlxuICAgICAgICAgICAgICAgID48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgICA8L2lvbi1jYXJkLXN1YnRpdGxlPlxuICAgICAgICAgICAgICA8aW9uLWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICAgICAgICBhbmltYXRlZFxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogODAlXCJcbiAgICAgICAgICAgICAgICA+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPC9pb24tY2FyZC10aXRsZT5cbiAgICAgICAgICAgIDwvaW9uLWNhcmQtaGVhZGVyPlxuXG4gICAgICAgICAgICA8aW9uLWNhcmQtY29udGVudD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICAgICAgYW5pbWF0ZWRcbiAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA4MCVcIlxuICAgICAgICAgICAgICA+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICAgICAgYW5pbWF0ZWRcbiAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA2MCVcIlxuICAgICAgICAgICAgICA+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICAgICAgYW5pbWF0ZWRcbiAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA4MCVcIlxuICAgICAgICAgICAgICA+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICAgICAgYW5pbWF0ZWRcbiAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA2MCVcIlxuICAgICAgICAgICAgICA+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICAgICAgYW5pbWF0ZWRcbiAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA4MCVcIlxuICAgICAgICAgICAgICA+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgIDwvaW9uLWNhcmQtY29udGVudD5cbiAgICAgICAgICA8L2lvbi1jYXJkPlxuICAgICAgICA8L2lvbi1jb2w+XG4gICAgICA8L2lvbi1yb3c+XG4gICAgPC9pb24tZ3JpZD5cbiAgPC9pb24tbGlzdD5cbjwvbmctdGVtcGxhdGU+XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
