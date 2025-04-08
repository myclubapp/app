import {
  ChampionshipPage
} from "./chunk-IHJSXIQX.js";
import {
  TeamExercisesPage,
  TrainingsPage
} from "./chunk-MS3JJYL5.js";
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
  ChangeDetectorRef,
  DatePipe,
  IonAvatar,
  IonBadge,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
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
  IonNote,
  IonSearchbar,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
  ModalController,
  NavParams,
  NgForOf,
  NgIf,
  NumericValueAccessorDirective,
  TextValueAccessorDirective,
  ToastController,
  TranslatePipe,
  TranslateService,
  catchError,
  combineLatest,
  debounceTime,
  first,
  forkJoin,
  lastValueFrom,
  map,
  of,
  startWith,
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-LQ2EECYJ.js";

// src/app/pages/team-admin-list/team-admin-list.page.ts
function TeamAdminListPage_ng_container_0_ng_container_3_ng_container_1_ion_buttons_1_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 5);
    \u0275\u0275listener("click", function TeamAdminListPage_ng_container_0_ng_container_3_ng_container_1_ion_buttons_1_ion_button_1_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(5);
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
function TeamAdminListPage_ng_container_0_ng_container_3_ng_container_1_ion_buttons_1_ion_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 5);
    \u0275\u0275listener("click", function TeamAdminListPage_ng_container_0_ng_container_3_ng_container_1_ion_buttons_1_ion_button_2_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(5);
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
function TeamAdminListPage_ng_container_0_ng_container_3_ng_container_1_ion_buttons_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-buttons", 12);
    \u0275\u0275template(1, TeamAdminListPage_ng_container_0_ng_container_3_ng_container_1_ion_buttons_1_ion_button_1_Template, 3, 3, "ion-button", 13)(2, TeamAdminListPage_ng_container_0_ng_container_3_ng_container_1_ion_buttons_1_ion_button_2_Template, 3, 3, "ion-button", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.allowEdit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.allowEdit);
  }
}
function TeamAdminListPage_ng_container_0_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamAdminListPage_ng_container_0_ng_container_3_ng_container_1_ion_buttons_1_Template, 3, 2, "ion-buttons", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r5 = ctx.ngIf;
    const teamAdminList_r6 = \u0275\u0275nextContext().ngIf;
    const team_r7 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isTeamAdmin(teamAdminList_r6, team_r7.id) || ctx_r2.isClubAdmin(clubAdminList_r5, team_r7.clubId));
  }
}
function TeamAdminListPage_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamAdminListPage_ng_container_0_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 3);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r2.clubAdminList$));
  }
}
function TeamAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_ion_item_sliding_1_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-icon", 23);
    \u0275\u0275listener("click", function TeamAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_ion_item_sliding_1_ion_icon_2_Template_ion_icon_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const member_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.deleteTeamAdmin(member_r10));
    });
    \u0275\u0275elementEnd();
  }
}
function TeamAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_ion_item_sliding_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 24);
  }
}
function TeamAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_ion_item_sliding_1_img_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 25);
  }
  if (rf & 2) {
    const member_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275propertyInterpolate("src", member_r10 == null ? null : member_r10.profilePicture, \u0275\u0275sanitizeUrl);
  }
}
function TeamAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_ion_item_sliding_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding")(1, "ion-item", 17);
    \u0275\u0275template(2, TeamAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_ion_item_sliding_1_ion_icon_2_Template, 1, 0, "ion-icon", 18);
    \u0275\u0275elementStart(3, "ion-avatar", 19);
    \u0275\u0275template(4, TeamAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_ion_item_sliding_1_img_4_Template, 1, 0, "img", 20)(5, TeamAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_ion_item_sliding_1_img_5_Template, 1, 1, "img", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-label", 22);
    \u0275\u0275listener("click", function TeamAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_ion_item_sliding_1_Template_ion_label_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const member_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openMember(member_r10));
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const member_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.allowEdit == true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !member_r10.profilePicture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r10.profilePicture);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", member_r10.firstName, " ", member_r10.lastName, " ");
  }
}
function TeamAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_ion_item_sliding_1_Template, 8, 5, "ion-item-sliding", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const member_r10 = ctx.$implicit;
    const groupBy_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r10.groupBy == groupBy_r11);
  }
}
function TeamAdminListPage_ng_container_0_ion_list_20_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-item-divider", 16)(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, TeamAdminListPage_ng_container_0_ion_list_20_ng_container_2_ng_container_4_Template, 2, 1, "ng-container", 15);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const groupBy_r11 = ctx.$implicit;
    const teamAdminList_r12 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", groupBy_r11, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", teamAdminList_r12);
  }
}
function TeamAdminListPage_ng_container_0_ion_list_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 14)(1, "ion-item-group");
    \u0275\u0275template(2, TeamAdminListPage_ng_container_0_ion_list_20_ng_container_2_Template, 5, 2, "ng-container", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.groupArray);
  }
}
function TeamAdminListPage_ng_container_0_ng_container_22_ng_container_1_ion_fab_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-fab", 27)(1, "ion-fab-button", 5);
    \u0275\u0275listener("click", function TeamAdminListPage_ng_container_0_ng_container_22_ng_container_1_ion_fab_1_Template_ion_fab_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.addAdministratorToTeam());
    });
    \u0275\u0275element(2, "ion-icon", 28);
    \u0275\u0275elementEnd()();
  }
}
function TeamAdminListPage_ng_container_0_ng_container_22_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamAdminListPage_ng_container_0_ng_container_22_ng_container_1_ion_fab_1_Template, 3, 0, "ion-fab", 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r14 = ctx.ngIf;
    const teamAdminList_r15 = \u0275\u0275nextContext().ngIf;
    const team_r7 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isTeamAdmin(teamAdminList_r15, team_r7.id) || ctx_r2.isClubAdmin(clubAdminList_r14, team_r7.clubId));
  }
}
function TeamAdminListPage_ng_container_0_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamAdminListPage_ng_container_0_ng_container_22_ng_container_1_Template, 2, 1, "ng-container", 3);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r2.clubAdminList$));
  }
}
function TeamAdminListPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-header", 2)(2, "ion-toolbar");
    \u0275\u0275template(3, TeamAdminListPage_ng_container_0_ng_container_3_Template, 3, 3, "ng-container", 3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementStart(5, "ion-title");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-buttons", 4)(9, "ion-button", 5);
    \u0275\u0275listener("click", function TeamAdminListPage_ng_container_0_Template_ion_button_click_9_listener() {
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
    \u0275\u0275listener("ionChange", function TeamAdminListPage_ng_container_0_Template_ion_searchbar_ionChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, TeamAdminListPage_ng_container_0_ion_list_20_Template, 3, 2, "ion-list", 10);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275template(22, TeamAdminListPage_ng_container_0_ng_container_22_Template, 3, 3, "ng-container", 3);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(4, 10, ctx_r2.teamAdminList$));
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
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(21, 20, ctx_r2.filteredTeamAdmins$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(23, 22, ctx_r2.teamAdminList$));
  }
}
function TeamAdminListPage_ng_template_2_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-item-divider", 16)(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const groupBy_r17 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", groupBy_r17, " ");
  }
}
function TeamAdminListPage_ng_template_2_ng_container_20_ng_container_1_ion_fab_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-fab", 27)(1, "ion-fab-button", 5);
    \u0275\u0275listener("click", function TeamAdminListPage_ng_template_2_ng_container_20_ng_container_1_ion_fab_1_Template_ion_fab_button_click_1_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.addAdministratorToTeam());
    });
    \u0275\u0275element(2, "ion-icon", 28);
    \u0275\u0275elementEnd()();
  }
}
function TeamAdminListPage_ng_template_2_ng_container_20_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamAdminListPage_ng_template_2_ng_container_20_ng_container_1_ion_fab_1_Template, 3, 0, "ion-fab", 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r19 = ctx.ngIf;
    const teamAdminList_r20 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isTeamAdmin(teamAdminList_r20, ctx_r2.team.id) || ctx_r2.isClubAdmin(clubAdminList_r19, ctx_r2.team.clubId));
  }
}
function TeamAdminListPage_ng_template_2_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamAdminListPage_ng_template_2_ng_container_20_ng_container_1_Template, 2, 1, "ng-container", 3);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r2.clubAdminList$));
  }
}
function TeamAdminListPage_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 2)(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-buttons", 4)(6, "ion-button", 5);
    \u0275\u0275listener("click", function TeamAdminListPage_ng_template_2_Template_ion_button_click_6_listener() {
      \u0275\u0275restoreView(_r16);
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
    \u0275\u0275elementStart(15, "ion-searchbar", 9);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("ionChange", function TeamAdminListPage_ng_template_2_Template_ion_searchbar_ionChange_15_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ion-list", 14)(18, "ion-item-group");
    \u0275\u0275template(19, TeamAdminListPage_ng_template_2_ng_container_19_Template, 4, 1, "ng-container", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, TeamAdminListPage_ng_template_2_ng_container_20_Template, 3, 3, "ng-container", 3);
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
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(21, 18, ctx_r2.teamAdminList$));
  }
}
var _TeamAdminListPage = class _TeamAdminListPage {
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
    this.team = this.navParams.get("team");
    if (this.team.roles && this.team.roles.lenght > 0) {
    } else {
      this.team.roles = [];
    }
    this.team$ = this.fbService.getTeamRef(this.team.id);
    this.initializeTeamAdmins();
    this.teamAdminList$ = this.fbService.getTeamAdminList();
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
  initializeTeamAdmins() {
    this.groupArray = [];
    this.teamAdmins$ = this.fbService.getTeamAdminRefs(this.team.id).pipe(
      // tap(() => console.log("Fetching team admins")),
      switchMap((members) => {
        if (members.length === 0) {
          console.log("No team admins found.");
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
        console.error("Error fetching Team admins:", err);
        return of([]);
      })
    );
    this.filteredTeamAdmins$ = combineLatest([this.teamAdmins$, this.searchTerm]).pipe(debounceTime(300), map(([admins, term]) => {
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
  isTeamAdmin(teamAdminList, teamId) {
    return teamAdminList && teamAdminList.some((team) => team.id === teamId);
  }
  isClubAdmin(clubAdminList, clubId) {
    return clubAdminList && clubAdminList.some((club) => club.id === clubId);
  }
  addAdministratorToTeam() {
    return __async(this, null, function* () {
      if (!this.team || !this.team.clubId) {
        console.error("No valid team or team reference found.");
        return;
      }
      try {
        console.log("Fetching members for team ID:", this.team.id);
        const members = yield lastValueFrom(this.fbService.getTeamMemberRefs(this.team.id).pipe(
          first()
          // Takes the first emitted value then completes
        ));
        console.log("Members fetched:", members.length);
        if (!members.length) {
          console.log("No team members found.");
          return;
        }
        const profiles = yield Promise.all(members.map((member) => lastValueFrom(this.userProfileService.getUserProfileById(member.id).pipe(
          first(),
          //tap(profiles=>console.log(profiles)),
          catchError((err) => {
            console.error(`Error fetching profile for ${member.id}:`, err);
            return of(__spreadProps(__spreadValues({}, member), { firstName: "Unknown", lastName: "Unknown" }));
          })
        ))));
        const filteredProfiles = profiles.filter((profile) => profile !== void 0);
        console.log(filteredProfiles);
        const newTeamMembers = this.filterNewTeamMembers(filteredProfiles, yield lastValueFrom(this.teamAdmins$.pipe(take(1))));
        console.log(newTeamMembers);
        const memberSelectOptions = this.prepareMemberSelectOptions(newTeamMembers);
        console.log(memberSelectOptions);
        if (memberSelectOptions.length > 0) {
          yield this.showAddMemberAlert(memberSelectOptions);
        } else {
          console.log("No new members available to add.");
        }
      } catch (err) {
        console.error("Error in addMemberToTeam:", err);
      }
    });
  }
  filterNewTeamMembers(profiles, teamMembers) {
    return profiles.filter((member) => !teamMembers.some((teamMember) => teamMember.id === member.id));
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
  showAddMemberAlert(memberSelect) {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: yield lastValueFrom(this.translate.get("common.addMember")),
        inputs: memberSelect,
        buttons: [
          {
            text: yield lastValueFrom(this.translate.get("common.cancel")),
            role: "cancel",
            handler: () => console.log("Cancel clicked")
          },
          {
            text: yield lastValueFrom(this.translate.get("common.add")),
            handler: (selectedMembers) => {
              selectedMembers.forEach((memberId) => {
                console.log(memberId);
                this.approveTeamAdminRequest(this.team.id, memberId);
              });
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  /*
    addAdministratorToTeam() {
      if (!this.team || !this.team.id) {
        console.error('No valid team or team reference found.');
        return; // Exit if no valid team ID is found
      }
  
      // Combine the fetching of team members and current team admins
      const fetchTeamAndAdmins$ = combineLatest([
        this.fbService.getTeamMemberRefs(this.team.id),
        this.teamAdmins$
      ]).pipe(
  
        switchMap(([members, teamAdmins]) => {
          if (members.length === 0) {
            console.log('No team members found.');
            return of([]); // Return empty array if no members
          }
  
          const profiles$ = members.map(member =>
            this.userProfileService.getUserProfileById(member.id).pipe(
              catchError(() => of({ ...member, firstName: 'Unknown', lastName: 'Unknown' })) // Provide fallback data
            )
          );
  
          return combineLatest(profiles$).pipe(
     
            map(profiles => profiles.filter(profile => profile !== undefined)),
            map(profiles => this.filterNewAdmins(profiles, teamAdmins)),
            map(filteredMembers => this.prepareMemberSelectOptions(filteredMembers))
          );
        }),
        catchError(err => {
          console.error('Error fetching team and team admins:', err);
          return of([]); // Handle errors by returning an empty array
        })
      );
  
      fetchTeamAndAdmins$.subscribe(async adminSelect => {
        if (adminSelect.length > 0) {
          await this.showAddAdminAlert(adminSelect); // Present the alert with admin selections
        } else {
          console.log('No new administrators available to add.');
        }
      });
    }
  
    filterNewAdmins(profiles, teamAdmins) {
      return profiles.filter(member =>
        !teamAdmins.some(admin => admin.id === member.id)
      );
    }
    prepareMemberSelectOptions(filteredMembers) {
      // Sort members alphabetically by firstName, then by lastName
      const sortedMembers = filteredMembers.sort((a, b) => {
        const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
        const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
        return nameA.localeCompare(nameB);
      });
  
      // Map sorted members to checkbox options
      return sortedMembers.map(member => ({
        type: 'checkbox',
        name: member.id,
        label: `${member.firstName} ${member.lastName}`,
        value: member.id,
        checked: false,
      }));
    }
    async showAddAdminAlert(adminSelect) {
      const alert = await this.alertCtrl.create({
        header: await lastValueFrom(this.translate.get("common.addAdministrator")),
        inputs: adminSelect,
        buttons: [
          {
            text: await lastValueFrom(this.translate.get("common.cancel")),
            role: 'cancel',
            handler: () => console.log('Cancel clicked'),
          },
          {
            text: await lastValueFrom(this.translate.get("common.add")),
            handler: (selectedAdmins) => {
              selectedAdmins.forEach(adminId => {
                this.approveTeamAdminRequest(this.team.id, adminId); // Adjusted to admin-specific approval
              });
            },
          },
        ],
      });
      await alert.present();
    }*/
  approveTeamAdminRequest(teamId, adminId) {
    return __async(this, null, function* () {
      yield this.fbService.addTeamAdmin(teamId, adminId).then(() => {
        this.toastActionSaved();
      }).catch((err) => {
        this.toastActionError(err);
      });
    });
  }
  deleteTeamAdmin(member) {
    return __async(this, null, function* () {
      try {
        yield this.fbService.deleteTeamAdmin(this.team.id, member.id);
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
        message: yield lastValueFrom(this.translate.get("team.action__canceled")),
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
      return yield this.modalCtrl.dismiss(this.team, "confirm");
    });
  }
};
_TeamAdminListPage.\u0275fac = function TeamAdminListPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TeamAdminListPage)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(NavParams), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(UserProfileService), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(TranslateService));
};
_TeamAdminListPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamAdminListPage, selectors: [["app-team-admin-list"]], inputs: { team: "team" }, standalone: false, decls: 4, vars: 4, consts: [["loading", ""], [4, "ngIf", "ngIfElse"], [3, "translucent"], [4, "ngIf"], ["slot", "primary"], [3, "click"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], ["animated", "true", "search-icon", "search-circle", 3, "ionChange", "debounce", "placeholder"], [3, "inset", 4, "ngIf"], ["slot", "secondary", 4, "ngIf"], ["slot", "secondary"], [3, "click", 4, "ngIf"], [3, "inset"], [4, "ngFor", "ngForOf"], ["color", "light"], ["detail", "true"], ["slot", "icon-only", "color", "danger", "slot", "start", "name", "trash", 3, "click", 4, "ngIf"], ["slot", "start"], ["alt", "Silhouette of a person's head", "src", "https://ionicframework.com/docs/img/demos/avatar.svg", 4, "ngIf"], [3, "src", 4, "ngIf"], [1, "ion-text-wrap", 3, "click"], ["slot", "icon-only", "color", "danger", "slot", "start", "name", "trash", 3, "click"], ["alt", "Silhouette of a person's head", "src", "https://ionicframework.com/docs/img/demos/avatar.svg"], [3, "src"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["name", "add-outline"]], template: function TeamAdminListPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TeamAdminListPage_ng_container_0_Template, 24, 24, "ng-container", 1);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275template(2, TeamAdminListPage_ng_template_2_Template, 22, 20, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const loading_r21 = \u0275\u0275reference(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 2, ctx.team$))("ngIfElse", loading_r21);
  }
}, dependencies: [NgForOf, NgIf, IonAvatar, IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemGroup, IonItemSliding, IonLabel, IonList, IonSearchbar, IonTitle, IonToolbar, TextValueAccessorDirective, AsyncPipe, TranslatePipe], encapsulation: 2 });
var TeamAdminListPage = _TeamAdminListPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamAdminListPage, { className: "TeamAdminListPage", filePath: "src/app/pages/team-admin-list/team-admin-list.page.ts", lineNumber: 42 });
})();

// src/app/pages/team-member-list/team-member-list.page.ts
function TeamMemberListPage_ng_container_0_ng_container_3_ng_container_1_ion_buttons_1_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 6);
    \u0275\u0275listener("click", function TeamMemberListPage_ng_container_0_ng_container_3_ng_container_1_ion_buttons_1_ion_button_1_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(5);
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
function TeamMemberListPage_ng_container_0_ng_container_3_ng_container_1_ion_buttons_1_ion_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 6);
    \u0275\u0275listener("click", function TeamMemberListPage_ng_container_0_ng_container_3_ng_container_1_ion_buttons_1_ion_button_2_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(5);
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
function TeamMemberListPage_ng_container_0_ng_container_3_ng_container_1_ion_buttons_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-buttons", 15);
    \u0275\u0275template(1, TeamMemberListPage_ng_container_0_ng_container_3_ng_container_1_ion_buttons_1_ion_button_1_Template, 3, 3, "ion-button", 16)(2, TeamMemberListPage_ng_container_0_ng_container_3_ng_container_1_ion_buttons_1_ion_button_2_Template, 3, 3, "ion-button", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.allowEdit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.allowEdit);
  }
}
function TeamMemberListPage_ng_container_0_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamMemberListPage_ng_container_0_ng_container_3_ng_container_1_ion_buttons_1_Template, 3, 2, "ion-buttons", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r5 = ctx.ngIf;
    const teamAdminList_r6 = \u0275\u0275nextContext().ngIf;
    const team_r7 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isTeamAdmin(teamAdminList_r6, team_r7.id) || ctx_r2.isClubAdmin(clubAdminList_r5, team_r7.clubId));
  }
}
function TeamMemberListPage_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamMemberListPage_ng_container_0_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 4);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r2.clubAdminList$));
  }
}
function TeamMemberListPage_ng_container_0_ng_container_21_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 18);
    \u0275\u0275listener("click", function TeamMemberListPage_ng_container_0_ng_container_21_ion_button_1_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addRole());
    });
    \u0275\u0275text(1, " hinzuf\xFCgen ");
    \u0275\u0275element(2, "ion-icon", 19);
    \u0275\u0275elementEnd();
  }
}
function TeamMemberListPage_ng_container_0_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamMemberListPage_ng_container_0_ng_container_21_ion_button_1_Template, 3, 0, "ion-button", 17);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const teamAdminList_r9 = ctx.ngIf;
    const team_r7 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isTeamAdmin(teamAdminList_r9, team_r7.id));
  }
}
function TeamMemberListPage_ng_container_0_ion_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 18);
    \u0275\u0275listener("click", function TeamMemberListPage_ng_container_0_ion_button_23_Template_ion_button_click_0_listener() {
      const role_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setFilter(role_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r11, " ");
  }
}
function TeamMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ng_container_2_ion_item_options_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-options", 31)(1, "ion-item-option", 32);
    \u0275\u0275listener("click", function TeamMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ng_container_2_ion_item_options_1_Template_ion_item_option_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      \u0275\u0275nextContext(2);
      const item_r14 = \u0275\u0275reference(1);
      const member_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.changeRoleOfMember(item_r14, member_r15));
    });
    \u0275\u0275element(2, "ion-icon", 33);
    \u0275\u0275elementEnd()();
  }
}
function TeamMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ng_container_2_ion_item_options_1_Template, 3, 0, "ion-item-options", 30);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const teamAdminList_r16 = ctx.ngIf;
    const team_r7 = \u0275\u0275nextContext(5).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isTeamAdmin(teamAdminList_r16, team_r7.id));
  }
}
function TeamMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-icon", 34);
    \u0275\u0275listener("click", function TeamMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ion_icon_5_Template_ion_icon_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const member_r15 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.deleteTeamMember(member_r15));
    });
    \u0275\u0275elementEnd();
  }
}
function TeamMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_img_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 35);
  }
}
function TeamMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_img_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 36);
  }
  if (rf & 2) {
    const member_r15 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275propertyInterpolate("src", member_r15 == null ? null : member_r15.profilePicture, \u0275\u0275sanitizeUrl);
  }
}
function TeamMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ion_badge_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r18);
  }
}
function TeamMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 1);
    \u0275\u0275template(2, TeamMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementStart(4, "ion-item", 23);
    \u0275\u0275template(5, TeamMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ion_icon_5_Template, 1, 0, "ion-icon", 24);
    \u0275\u0275elementStart(6, "ion-avatar", 25);
    \u0275\u0275listener("click", function TeamMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_Template_ion_avatar_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const member_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openMember(member_r15));
    });
    \u0275\u0275template(7, TeamMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_img_7_Template, 1, 0, "img", 26)(8, TeamMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_img_8_Template, 1, 1, "img", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ion-label", 28);
    \u0275\u0275listener("click", function TeamMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_Template_ion_label_click_9_listener() {
      \u0275\u0275restoreView(_r12);
      const member_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openMember(member_r15));
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, TeamMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_ion_badge_11_Template, 2, 1, "ion-badge", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 7, ctx_r2.teamAdminList$));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.allowEdit == true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !member_r15.profilePicture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r15.profilePicture);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", member_r15.firstName, " ", member_r15.lastName, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", member_r15.roles);
  }
}
function TeamMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_ion_item_sliding_1_Template, 12, 9, "ion-item-sliding", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const member_r15 = ctx.$implicit;
    const groupBy_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r15.groupBy == groupBy_r19);
  }
}
function TeamMemberListPage_ng_container_0_ion_list_24_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-item-divider", 22)(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, TeamMemberListPage_ng_container_0_ion_list_24_ng_container_2_ng_container_4_Template, 2, 1, "ng-container", 21);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const groupBy_r19 = ctx.$implicit;
    const teamMemberList_r20 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", groupBy_r19, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", teamMemberList_r20);
  }
}
function TeamMemberListPage_ng_container_0_ion_list_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 20)(1, "ion-item-group");
    \u0275\u0275template(2, TeamMemberListPage_ng_container_0_ion_list_24_ng_container_2_Template, 5, 2, "ng-container", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.groupArray);
  }
}
function TeamMemberListPage_ng_container_0_ng_container_26_ng_container_1_ion_fab_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-fab", 39)(1, "ion-fab-button", 6);
    \u0275\u0275listener("click", function TeamMemberListPage_ng_container_0_ng_container_26_ng_container_1_ion_fab_1_Template_ion_fab_button_click_1_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.addMemberToTeam());
    });
    \u0275\u0275element(2, "ion-icon", 40);
    \u0275\u0275elementEnd()();
  }
}
function TeamMemberListPage_ng_container_0_ng_container_26_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamMemberListPage_ng_container_0_ng_container_26_ng_container_1_ion_fab_1_Template, 3, 0, "ion-fab", 38);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r22 = ctx.ngIf;
    const teamAdminList_r23 = \u0275\u0275nextContext().ngIf;
    const team_r7 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isTeamAdmin(teamAdminList_r23, team_r7.id) || ctx_r2.isClubAdmin(clubAdminList_r22, team_r7.clubId));
  }
}
function TeamMemberListPage_ng_container_0_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamMemberListPage_ng_container_0_ng_container_26_ng_container_1_Template, 2, 1, "ng-container", 4);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r2.clubAdminList$));
  }
}
function TeamMemberListPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-header", 3)(2, "ion-toolbar");
    \u0275\u0275template(3, TeamMemberListPage_ng_container_0_ng_container_3_Template, 3, 3, "ng-container", 4);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementStart(5, "ion-title");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-buttons", 5)(9, "ion-button", 6);
    \u0275\u0275listener("click", function TeamMemberListPage_ng_container_0_Template_ion_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "ion-content", 7)(13, "ion-header", 8)(14, "ion-toolbar")(15, "ion-title", 9);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "ion-searchbar", 10);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275listener("ionChange", function TeamMemberListPage_ng_container_0_Template_ion_searchbar_ionChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 11);
    \u0275\u0275template(21, TeamMemberListPage_ng_container_0_ng_container_21_Template, 2, 1, "ng-container", 4);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275template(23, TeamMemberListPage_ng_container_0_ion_button_23_Template, 2, 1, "ion-button", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, TeamMemberListPage_ng_container_0_ion_list_24_Template, 3, 2, "ion-list", 13);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275template(26, TeamMemberListPage_ng_container_0_ng_container_26_Template, 3, 3, "ng-container", 4);
    \u0275\u0275pipe(27, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const team_r7 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(4, 13, ctx_r2.teamAdminList$));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 15, "common.members"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 17, "common.close"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 19, "common.members"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(19, 21, "common.searchfield"));
    \u0275\u0275property("debounce", 1e3)("value", ctx_r2.searchTerm.value);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(22, 23, ctx_r2.teamAdminList$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", team_r7["roles"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(25, 25, ctx_r2.filteredTeamMembers$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(27, 27, ctx_r2.teamAdminList$));
  }
}
function TeamMemberListPage_ng_template_2_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-item-divider", 22)(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const groupBy_r25 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", groupBy_r25, " ");
  }
}
function TeamMemberListPage_ng_template_2_ng_container_20_ng_container_1_ion_fab_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-fab", 39)(1, "ion-fab-button", 6);
    \u0275\u0275listener("click", function TeamMemberListPage_ng_template_2_ng_container_20_ng_container_1_ion_fab_1_Template_ion_fab_button_click_1_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.addMemberToTeam());
    });
    \u0275\u0275element(2, "ion-icon", 40);
    \u0275\u0275elementEnd()();
  }
}
function TeamMemberListPage_ng_template_2_ng_container_20_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamMemberListPage_ng_template_2_ng_container_20_ng_container_1_ion_fab_1_Template, 3, 0, "ion-fab", 38);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r27 = ctx.ngIf;
    const teamAdminList_r28 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isTeamAdmin(teamAdminList_r28, ctx_r2.team.id) || ctx_r2.isClubAdmin(clubAdminList_r27, ctx_r2.team.clubId));
  }
}
function TeamMemberListPage_ng_template_2_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamMemberListPage_ng_template_2_ng_container_20_ng_container_1_Template, 2, 1, "ng-container", 4);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r2.clubAdminList$));
  }
}
function TeamMemberListPage_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 3)(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-buttons", 5)(6, "ion-button", 6);
    \u0275\u0275listener("click", function TeamMemberListPage_ng_template_2_Template_ion_button_click_6_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "ion-content", 7)(10, "ion-header", 8)(11, "ion-toolbar")(12, "ion-title", 9);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "ion-searchbar", 41);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("ionChange", function TeamMemberListPage_ng_template_2_Template_ion_searchbar_ionChange_15_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ion-list", 20)(18, "ion-item-group");
    \u0275\u0275template(19, TeamMemberListPage_ng_template_2_ng_container_19_Template, 4, 1, "ng-container", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, TeamMemberListPage_ng_template_2_ng_container_20_Template, 3, 3, "ng-container", 4);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 10, "common.members"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 12, "common.close"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 14, "common.members"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(16, 16, "common.searchfield"));
    \u0275\u0275property("debounce", 1e3);
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.groupArray);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(21, 18, ctx_r2.teamAdminList$));
  }
}
var _TeamMemberListPage = class _TeamMemberListPage {
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
    this.team = this.navParams.get("team");
    if (this.team.roles && this.team.roles.lenght > 0) {
    } else {
      this.team.roles = [];
    }
    this.team$ = this.fbService.getTeamRef(this.team.id);
    this.initializeTeamMembers();
    this.teamAdminList$ = this.fbService.getTeamAdminList();
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
        message: "Erstelle eine neue Rolle f\xFCr dein Team.",
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
                this.team$.pipe(take(1)).subscribe((team) => {
                  if (team && team.roles) {
                    team.roles.push(data.role);
                    this.fbService.addTeamRole(team.id, team.roles).then(() => {
                      console.log("Role added successfully");
                    }).catch((error) => {
                      console.error("Failed to add role", error);
                    });
                  } else {
                    this.fbService.addTeamRole(team.id, [data.role]).then(() => {
                      console.log("Role added successfully");
                    }).catch((error) => {
                      console.error("Failed to add role", error);
                    });
                    console.error("Team data is missing or invalid");
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
      this.team$.pipe(take(1)).subscribe((team) => __async(this, null, function* () {
        for (const role of team.roles) {
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
                this.fbService.addTeamMemberRole(team.id, member.id, data).then(() => {
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
  initializeTeamMembers() {
    this.groupArray = [];
    this.teamMembers$ = this.fbService.getTeamMemberRefs(this.team.id).pipe(
      // tap(() => console.log("Fetching team members")),
      switchMap((members) => {
        if (members.length === 0) {
          console.log("No team members found.");
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
        console.error("Error fetching Tean members:", err);
        return of([]);
      })
    );
    this.filteredTeamMembers$ = combineLatest([this.teamMembers$, this.searchTerm]).pipe(debounceTime(300), map(([members, term]) => {
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
    this.searchTerm.next(searchTerm);
  }
  isTeamAdmin(teamAdminList, teamId) {
    return teamAdminList && teamAdminList.some((team) => team.id === teamId);
  }
  isClubAdmin(teamAdminList, teamId) {
    return teamAdminList && teamAdminList.some((team) => team.id === teamId);
  }
  addMemberToTeam() {
    return __async(this, null, function* () {
      if (!this.team || !this.team.clubId) {
        console.error("No valid team or team reference found.");
        return;
      }
      try {
        console.log("Fetching members for club ID:", this.team.clubId);
        const members = yield lastValueFrom(this.fbService.getClubMemberRefs(this.team.clubId).pipe(
          first()
          // Takes the first emitted value then completes
        ));
        console.log("Members fetched:", members.length);
        if (!members.length) {
          console.log("No team members found.");
          return;
        }
        const profiles = yield Promise.all(members.map((member) => lastValueFrom(this.userProfileService.getUserProfileById(member.id).pipe(
          first(),
          //tap(profiles=>console.log(profiles)),
          catchError((err) => {
            console.error(`Error fetching profile for ${member.id}:`, err);
            return of(__spreadProps(__spreadValues({}, member), { firstName: "Unknown", lastName: "Unknown" }));
          })
        ))));
        const filteredProfiles = profiles.filter((profile) => profile !== void 0);
        console.log(filteredProfiles);
        const newTeamMembers = this.filterNewTeamMembers(filteredProfiles, yield lastValueFrom(this.teamMembers$.pipe(take(1))));
        console.log(newTeamMembers);
        const memberSelectOptions = this.prepareMemberSelectOptions(newTeamMembers);
        console.log(memberSelectOptions);
        if (memberSelectOptions.length > 0) {
          yield this.showAddMemberAlert(memberSelectOptions);
        } else {
          console.log("No new members available to add.");
        }
      } catch (err) {
        console.error("Error in addMemberToTeam:", err);
      }
    });
  }
  filterNewTeamMembers(profiles, teamMembers) {
    return profiles.filter((member) => !teamMembers.some((teamMember) => teamMember.id === member.id));
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
  showAddMemberAlert(memberSelect) {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: yield lastValueFrom(this.translate.get("common.addMember")),
        inputs: memberSelect,
        buttons: [
          {
            text: yield lastValueFrom(this.translate.get("common.cancel")),
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked"), this.toastActionCanceled();
            }
          },
          {
            text: yield lastValueFrom(this.translate.get("common.add")),
            handler: (selectedMembers) => {
              selectedMembers.forEach((memberId) => {
                console.log(memberId);
                this.approveTeamRequest(this.team.id, memberId);
              });
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  approveTeamRequest(teamId, memberId) {
    return __async(this, null, function* () {
      yield this.fbService.approveUserTeamRequest(teamId, memberId).then(() => {
        this.toastActionSaved();
      }).catch((err) => {
        this.toastActionError(err);
      });
    });
  }
  deleteTeamMember(member) {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        message: yield lastValueFrom(this.translate.get("team-member-list.delete_member__confirm")),
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
                yield this.fbService.deleteTeamMember(this.team.id, member.id);
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
          teamId: this.team.id,
          clubId: this.team.clubId
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
        message: yield lastValueFrom(this.translate.get("team.action__canceled")),
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
      return yield this.modalCtrl.dismiss(this.team, "confirm");
    });
  }
};
_TeamMemberListPage.\u0275fac = function TeamMemberListPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TeamMemberListPage)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(NavParams), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(UserProfileService), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(TranslateService));
};
_TeamMemberListPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamMemberListPage, selectors: [["app-team-member-list"]], inputs: { team: "team" }, standalone: false, decls: 4, vars: 4, consts: [["loading", ""], ["item", ""], [4, "ngIf", "ngIfElse"], [3, "translucent"], [4, "ngIf"], ["slot", "primary"], [3, "click"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], ["animated", "true", "search-icon", "search-circle", 3, "ionChange", "debounce", "value", "placeholder"], [1, "ion-padding"], ["shape", "round", "size", "small", 3, "click", 4, "ngFor", "ngForOf"], [3, "inset", 4, "ngIf"], ["slot", "secondary", 4, "ngIf"], ["slot", "secondary"], [3, "click", 4, "ngIf"], ["shape", "round", "size", "small", 3, "click", 4, "ngIf"], ["shape", "round", "size", "small", 3, "click"], ["slot", "start", "name", "add-circle-outline"], [3, "inset"], [4, "ngFor", "ngForOf"], ["color", "light"], ["detail", "true"], ["slot", "icon-only", "color", "danger", "slot", "start", "name", "trash", 3, "click", 4, "ngIf"], ["slot", "start", 3, "click"], ["alt", "Silhouette of a person's head", "src", "https://ionicframework.com/docs/img/demos/avatar.svg", 4, "ngIf"], [3, "src", 4, "ngIf"], [1, "ion-text-wrap", 3, "click"], ["slot", "end", 4, "ngFor", "ngForOf"], ["side", "end", 4, "ngIf"], ["side", "end"], ["color", "primary", 3, "click"], ["slot", "icon-only", "name", "pricetags-outline"], ["slot", "icon-only", "color", "danger", "slot", "start", "name", "trash", 3, "click"], ["alt", "Silhouette of a person's head", "src", "https://ionicframework.com/docs/img/demos/avatar.svg"], [3, "src"], ["slot", "end"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["name", "add-outline"], ["animated", "true", "search-icon", "search-circle", 3, "ionChange", "debounce", "placeholder"]], template: function TeamMemberListPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TeamMemberListPage_ng_container_0_Template, 28, 29, "ng-container", 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275template(2, TeamMemberListPage_ng_template_2_Template, 22, 20, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const loading_r29 = \u0275\u0275reference(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 2, ctx.team$))("ngIfElse", loading_r29);
  }
}, dependencies: [NgForOf, NgIf, IonAvatar, IonBadge, IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonSearchbar, IonTitle, IonToolbar, TextValueAccessorDirective, AsyncPipe, TranslatePipe], encapsulation: 2 });
var TeamMemberListPage = _TeamMemberListPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamMemberListPage, { className: "TeamMemberListPage", filePath: "src/app/pages/team-member-list/team-member-list.page.ts", lineNumber: 42 });
})();

// src/app/pages/team/team-detail/team.page.ts
function TeamPage_ng_container_0_ng_container_43_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 12);
    \u0275\u0275listener("click", function TeamPage_ng_container_0_ng_container_43_ion_item_1_Template_ion_item_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openTeamGames());
    });
    \u0275\u0275element(1, "ion-icon", 21);
    \u0275\u0275elementStart(2, "ion-label");
    \u0275\u0275text(3, " Meisterschaftspiele ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "ion-note", 11);
    \u0275\u0275elementEnd();
  }
}
function TeamPage_ng_container_0_ng_container_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamPage_ng_container_0_ng_container_43_ion_item_1_Template, 5, 0, "ion-item", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubList_r4 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.enableChampionship(clubList_r4));
  }
}
function TeamPage_ng_container_0_ng_container_45_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-list", 23)(1, "ion-item", 12);
    \u0275\u0275listener("click", function TeamPage_ng_container_0_ng_container_45_ion_list_1_Template_ion_item_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openTeamTrainingExercise());
    });
    \u0275\u0275element(2, "ion-icon", 15);
    \u0275\u0275elementStart(3, "ion-label");
    \u0275\u0275text(4, "\xDCbungen");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("inset", true);
  }
}
function TeamPage_ng_container_0_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamPage_ng_container_0_ng_container_45_ion_list_1_Template, 5, 1, "ion-list", 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubList_r6 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.enableTrainingExercise(clubList_r6));
  }
}
function TeamPage_ng_container_0_ng_container_47_ng_container_1_ion_list_1_ng_container_7_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275element(1, "ion-icon", 21);
    \u0275\u0275elementStart(2, "ion-input", 27);
    \u0275\u0275listener("ionInput", function TeamPage_ng_container_0_ng_container_47_ng_container_1_ion_list_1_ng_container_7_ion_item_1_Template_ion_input_ionInput_2_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.onInput($event, "championshipThreshold"));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r9 = \u0275\u0275nextContext(5).ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", team_r9.championshipThreshold);
  }
}
function TeamPage_ng_container_0_ng_container_47_ng_container_1_ion_list_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamPage_ng_container_0_ng_container_47_ng_container_1_ion_list_1_ng_container_7_ion_item_1_Template, 3, 1, "ion-item", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubList_r10 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.enableChampionship(clubList_r10));
  }
}
function TeamPage_ng_container_0_ng_container_47_ng_container_1_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-list", 9)(1, "ion-list-header")(2, "ion-label");
    \u0275\u0275text(3, " Grenzwerte f\xFCr Abmeldungen ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ion-item");
    \u0275\u0275element(5, "ion-icon", 15);
    \u0275\u0275elementStart(6, "ion-input", 26);
    \u0275\u0275listener("ionInput", function TeamPage_ng_container_0_ng_container_47_ng_container_1_ion_list_1_Template_ion_input_ionInput_6_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onInput($event, "trainingThreshold"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, TeamPage_ng_container_0_ng_container_47_ng_container_1_ion_list_1_ng_container_7_Template, 2, 1, "ng-container", 16);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const team_r9 = \u0275\u0275nextContext(3).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", team_r9.trainingThreshold);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(8, 3, ctx_r1.clubList$));
  }
}
function TeamPage_ng_container_0_ng_container_47_ng_container_1_ion_note_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-note", 28);
    \u0275\u0275text(1, " Anzahl Stunden vor Beginn des Spiels, Trainings oder Veranstaltung");
    \u0275\u0275elementEnd();
  }
}
function TeamPage_ng_container_0_ng_container_47_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamPage_ng_container_0_ng_container_47_ng_container_1_ion_list_1_Template, 9, 5, "ion-list", 24)(2, TeamPage_ng_container_0_ng_container_47_ng_container_1_ion_note_2_Template, 2, 0, "ion-note", 25);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r11 = ctx.ngIf;
    const teamAdminList_r12 = \u0275\u0275nextContext().ngIf;
    const team_r9 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTeamAdmin(teamAdminList_r12, team_r9.id) || ctx_r1.isClubAdmin(clubAdminList_r11, team_r9.clubId));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTeamAdmin(teamAdminList_r12, team_r9.id) || ctx_r1.isClubAdmin(clubAdminList_r11, team_r9.clubId));
  }
}
function TeamPage_ng_container_0_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamPage_ng_container_0_ng_container_47_ng_container_1_Template, 3, 2, "ng-container", 16);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r1.clubAdminList$));
  }
}
function TeamPage_ng_container_0_ion_item_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275element(1, "ion-icon", 29);
    \u0275\u0275elementStart(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r9 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", team_r9.liga, " ");
  }
}
function TeamPage_ng_container_0_ion_item_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275element(1, "ion-icon", 30);
    \u0275\u0275elementStart(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r9 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", team_r9.portrait, " ");
  }
}
function TeamPage_ng_container_0_ion_item_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275element(1, "ion-icon", 31);
    \u0275\u0275elementStart(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r9 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", team_r9.info, " ");
  }
}
function TeamPage_ng_container_0_ion_item_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275element(1, "ion-icon", 32);
    \u0275\u0275elementStart(2, "ion-label", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-button", 34);
    \u0275\u0275listener("click", function TeamPage_ng_container_0_ion_item_57_Template_ion_button_click_4_listener() {
      \u0275\u0275restoreView(_r13);
      const team_r9 = \u0275\u0275nextContext().ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openUrl(team_r9.website));
    });
    \u0275\u0275element(5, "ion-icon", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r9 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", team_r9.website, " ");
  }
}
function TeamPage_ng_container_0_ng_container_68_ng_container_1_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 37);
    \u0275\u0275listener("click", function TeamPage_ng_container_0_ng_container_68_ng_container_1_ion_button_1_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deleteTeam());
    });
    \u0275\u0275element(1, "ion-icon", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "team.delete"), " ");
  }
}
function TeamPage_ng_container_0_ng_container_68_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamPage_ng_container_0_ng_container_68_ng_container_1_ion_button_1_Template, 4, 3, "ion-button", 36);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubAdminList_r15 = ctx.ngIf;
    const teamAdminList_r16 = \u0275\u0275nextContext().ngIf;
    const team_r9 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTeamAdmin(teamAdminList_r16, team_r9.id) || ctx_r1.isClubAdmin(clubAdminList_r15, team_r9.clubId));
  }
}
function TeamPage_ng_container_0_ng_container_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeamPage_ng_container_0_ng_container_68_ng_container_1_Template, 2, 1, "ng-container", 16);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r1.clubAdminList$));
  }
}
function TeamPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-header", 3)(2, "ion-toolbar")(3, "ion-title");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-buttons", 4)(6, "ion-button", 5);
    \u0275\u0275listener("click", function TeamPage_ng_container_0_Template_ion_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "ion-content", 6)(10, "ion-header", 7)(11, "ion-toolbar")(12, "ion-title", 8);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "ion-list", 9)(15, "ion-list-header")(16, "ion-label");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "ion-item");
    \u0275\u0275element(20, "ion-icon", 10);
    \u0275\u0275elementStart(21, "ion-label");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ion-note", 11);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "ion-item", 12);
    \u0275\u0275listener("click", function TeamPage_ng_container_0_Template_ion_item_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openMemberList());
    });
    \u0275\u0275element(27, "ion-icon", 13);
    \u0275\u0275elementStart(28, "ion-label");
    \u0275\u0275text(29, " Mitglieder ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ion-note", 11);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "ion-item", 12);
    \u0275\u0275listener("click", function TeamPage_ng_container_0_Template_ion_item_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAdminList());
    });
    \u0275\u0275element(33, "ion-icon", 14);
    \u0275\u0275elementStart(34, "ion-label");
    \u0275\u0275text(35, " Administratoren ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ion-note", 11);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "ion-item", 12);
    \u0275\u0275listener("click", function TeamPage_ng_container_0_Template_ion_item_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTeamTrainings());
    });
    \u0275\u0275element(39, "ion-icon", 15);
    \u0275\u0275elementStart(40, "ion-label");
    \u0275\u0275text(41, " Trainings ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "ion-note", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, TeamPage_ng_container_0_ng_container_43_Template, 2, 1, "ng-container", 16);
    \u0275\u0275pipe(44, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(45, TeamPage_ng_container_0_ng_container_45_Template, 2, 1, "ng-container", 16);
    \u0275\u0275pipe(46, "async");
    \u0275\u0275template(47, TeamPage_ng_container_0_ng_container_47_Template, 3, 3, "ng-container", 16);
    \u0275\u0275pipe(48, "async");
    \u0275\u0275elementStart(49, "ion-list", 9)(50, "ion-list-header")(51, "ion-label");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(54, TeamPage_ng_container_0_ion_item_54_Template, 4, 1, "ion-item", 16)(55, TeamPage_ng_container_0_ion_item_55_Template, 4, 1, "ion-item", 16)(56, TeamPage_ng_container_0_ion_item_56_Template, 4, 1, "ion-item", 16)(57, TeamPage_ng_container_0_ion_item_57_Template, 6, 1, "ion-item", 16);
    \u0275\u0275elementStart(58, "ion-item");
    \u0275\u0275element(59, "ion-icon", 17);
    \u0275\u0275elementStart(60, "ion-label");
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "ion-item");
    \u0275\u0275element(63, "ion-icon", 18);
    \u0275\u0275elementStart(64, "ion-note");
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div", 19);
    \u0275\u0275template(68, TeamPage_ng_container_0_ng_container_68_Template, 3, 3, "ng-container", 16);
    \u0275\u0275pipe(69, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const team_r9 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(team_r9 == null ? null : team_r9.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 23, "common.close"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(team_r9.name);
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 25, "common.manage_members"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 27, "common.average__age"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", team_r9.averageAge, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(team_r9["teamMembers"].length);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(team_r9["teamAdmins"].length);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(44, 29, ctx_r1.clubList$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(46, 31, ctx_r1.clubList$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(48, 33, ctx_r1.teamAdminList$));
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 35, "common.details"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", team_r9.liga);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", team_r9.portrait);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", team_r9.info);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", team_r9.website);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", team_r9.type, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(66, 37, team_r9.updated, "dd.MM.YYYY HH:mm"), " Uhr");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(69, 40, ctx_r1.teamAdminList$));
  }
}
function TeamPage_ng_template_2_Template(rf, ctx) {
}
function TeamPage_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header", 3)(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275element(3, "ion-skeleton-text", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 4)(5, "ion-button", 5);
    \u0275\u0275listener("click", function TeamPage_ng_template_4_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "ion-content", 6)(9, "ion-header", 7)(10, "ion-toolbar")(11, "ion-title", 8);
    \u0275\u0275element(12, "ion-skeleton-text", 39);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "common.close"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("animated", true);
  }
}
var _TeamPage = class _TeamPage {
  constructor(modalCtrl, navParams, alertCtrl, toastController, userProfileService, fbService, authService, cdr, translate) {
    this.modalCtrl = modalCtrl;
    this.navParams = navParams;
    this.alertCtrl = alertCtrl;
    this.toastController = toastController;
    this.userProfileService = userProfileService;
    this.fbService = fbService;
    this.authService = authService;
    this.cdr = cdr;
    this.translate = translate;
    this.allowEdit = false;
  }
  ngOnInit() {
    this.team = this.navParams.get("data");
    this.team$ = of(this.team);
    this.team$ = this.getTeam(this.team.id);
    this.clubList$ = this.fbService.getClubList();
    this.clubAdminList$ = this.fbService.getClubAdminList();
    this.teamAdminList$ = this.fbService.getTeamAdminList();
  }
  isClubAdmin(clubAdminList, clubId) {
    return clubAdminList && clubAdminList.some((club) => club.id === clubId);
  }
  isTeamAdmin(teamAdminList, teamId) {
    return teamAdminList && teamAdminList.some((team) => team.id === teamId);
  }
  ngOnDestroy() {
  }
  enableTrainingExercise(clubList) {
    return clubList && clubList.some((club) => club.hasFeatureTrainingExercise == true) && clubList.some((club) => this.team.clubId == club.id);
  }
  enableChampionship(clubList) {
    return clubList && clubList.some((club) => club.hasFeatureChampionship == true) && clubList.some((club) => this.team.clubId == club.id);
  }
  deleteTeam() {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        message: yield lastValueFrom(this.translate.get("team.delete_team__confirm")),
        buttons: [
          {
            text: yield lastValueFrom(this.translate.get("common.no")),
            role: "destructive",
            handler: () => {
              console.log("nein");
              this.presentCancelToast();
            }
          },
          {
            text: yield lastValueFrom(this.translate.get("common.yes")),
            handler: () => __async(this, null, function* () {
              yield this.fbService.deleteTeam(this.team.id);
              this.close();
            })
          }
        ]
      });
      alert.present();
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
          training: { teamId: this.team.id, clubId: this.team.clubId }
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
  getTeam(teamId) {
    const calculateAge = (dateOfBirth) => {
      const birthday = new Date(dateOfBirth.seconds * 1e3);
      const ageDifMs = Date.now() - birthday.getTime();
      const ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    return this.authService.getUser$().pipe(take(1), tap((user) => {
      if (!user)
        throw new Error("User not found");
    }), switchMap(() => this.fbService.getTeamRef(teamId)), switchMap((team) => {
      if (!team)
        return of(null);
      return combineLatest({
        teamMembers: this.fbService.getTeamMemberRefs(teamId),
        teamAdmins: this.fbService.getTeamAdminRefs(teamId),
        teamRequests: this.fbService.getTeamRequestRefs(teamId)
      }).pipe(switchMap(({ teamMembers, teamAdmins, teamRequests }) => {
        const memberProfiles$ = teamMembers.map((member) => this.userProfileService.getUserProfileById(member.id).pipe(take(1), catchError(() => of(__spreadProps(__spreadValues({}, member), { firstName: "Unknown", lastName: "Unknown" })))));
        const adminProfiles$ = teamAdmins.map((admin) => this.userProfileService.getUserProfileById(admin.id).pipe(take(1), catchError(() => of(__spreadProps(__spreadValues({}, admin), { firstName: "Unknown", lastName: "Unknown" })))));
        const teamRequests$ = teamRequests.map((request) => this.userProfileService.getUserProfileById(request.id).pipe(take(1), catchError(() => of(__spreadProps(__spreadValues({}, request), { firstName: "Unknown", lastName: "Unknown" })))));
        return forkJoin({
          teamMembers: forkJoin(memberProfiles$).pipe(startWith([])),
          teamAdmins: forkJoin(adminProfiles$).pipe(startWith([])),
          teamRequests: forkJoin(teamRequests$).pipe(startWith([]))
        }).pipe(map(({ teamMembers: teamMembers2, teamAdmins: teamAdmins2, teamRequests: teamRequests2 }) => ({
          teamMembers: teamMembers2.filter((member) => member !== void 0),
          // Filter out undefined
          teamAdmins: teamAdmins2.filter((admin) => admin !== void 0),
          // Filter out undefined
          teamRequests: teamRequests2.filter((request) => request !== void 0)
          // Filter out undefined
        })));
      }), map(({ teamMembers, teamAdmins, teamRequests }) => {
        const ages = teamMembers.map((member) => member.hasOwnProperty("dateOfBirth") ? calculateAge(member.dateOfBirth) : 0).filter((age) => age > 0);
        const averageAge = ages.length > 0 ? ages.reduce((a, b) => a + b, 0) / ages.length : 0;
        return __spreadProps(__spreadValues({}, team), {
          updated: Timestamp.fromMillis(team.updated.seconds * 1e3).toDate().toISOString(),
          averageAge: averageAge.toFixed(1),
          // Keep two decimal places
          teamMembers,
          teamAdmins,
          teamRequests
        });
      }));
    }), catchError((err) => {
      this.toastActionError(err);
      console.error("Error in getTeamWithMembersAndAdmins:", err.message);
      return of(null);
    }));
  }
  openUrl(url) {
    return __async(this, null, function* () {
      Browser.open({
        url
      });
    });
  }
  openMemberList() {
    return __async(this, null, function* () {
      console.log("open Team Member List");
      const modal = yield this.modalCtrl.create({
        component: TeamMemberListPage,
        presentingElement: yield this.modalCtrl.getTop(),
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          team: this.team
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
      console.log("open Team Admin ");
      const modal = yield this.modalCtrl.create({
        component: TeamAdminListPage,
        presentingElement: yield this.modalCtrl.getTop(),
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          team: this.team
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
  openTeamTrainings() {
    return __async(this, null, function* () {
      console.log("open Team Trainings ");
      const modal = yield this.modalCtrl.create({
        component: TrainingsPage,
        presentingElement: yield this.modalCtrl.getTop(),
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          team: this.team,
          isModal: true
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
  openTeamGames() {
    return __async(this, null, function* () {
      console.log("open Team Games ");
      const modal = yield this.modalCtrl.create({
        component: ChampionshipPage,
        presentingElement: yield this.modalCtrl.getTop(),
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          team: this.team,
          isModal: true
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
  approveTeamRequest(request) {
    return __async(this, null, function* () {
      console.log(request);
      yield this.fbService.approveUserTeamRequest(request.teamId, request.id).then(() => {
        this.toastActionSaved();
      }).catch((err) => {
        this.toastActionError(err);
      });
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
  addMember() {
    this.team$.pipe(
      take(1),
      // Take only the first emission
      tap((team) => console.log("Team:", team)),
      switchMap((team) => {
        if (!team || !team.clubRef || !team.clubRef.id)
          return of(null);
        return this.fbService.getClubMemberRefs(team.clubRef.id).pipe(switchMap((members) => {
          if (!members.length)
            return of([]);
          const memberDetails$ = members.map((member) => this.userProfileService.getUserProfileById(member.id).pipe(take(1), catchError(() => of(__spreadProps(__spreadValues({}, member), { firstName: "Unknown", lastName: "Unknown" })))));
          return combineLatest(memberDetails$);
        }), map((memberProfiles) => memberProfiles.filter((member) => member !== void 0)), map((memberProfiles) => memberProfiles.filter((member) => !team.teamMembers.find((element) => element.id === member.id))), map((filteredMembers) => filteredMembers.map((member) => ({
          type: "checkbox",
          name: member.id,
          label: `${member.firstName} ${member.lastName}`,
          value: member,
          checked: false
        }))));
      }),
      catchError((err) => {
        console.error("Error in addMember:", err);
        return of(null);
      })
    ).subscribe((memberSelect) => __async(this, null, function* () {
      if (memberSelect && memberSelect.length > 0) {
        const alert = yield this.alertCtrl.create({
          header: "Administrator hinzuf\xFCgen",
          inputs: memberSelect,
          buttons: [
            {
              text: "Abbrechen",
              handler: () => console.log("Cancel clicked")
            },
            {
              text: "Hinzuf\xFCgen",
              handler: (teamMemberList) => {
                console.log(teamMemberList);
                for (const member of teamMemberList) {
                  this.approveTeamRequest({ teamId: this.team.id, id: member.id });
                }
              }
            }
          ]
        });
        yield alert.present();
      }
    }));
  }
  addAdministrator() {
    return __async(this, null, function* () {
      try {
        const team = yield lastValueFrom(this.team$.pipe(take(1)));
        let memberSelect = [];
        team.teamMembers.forEach((member) => {
          if (!team.teamAdmins.find((element) => element.id === member.id)) {
            memberSelect.push({
              type: "checkbox",
              name: member.id,
              label: `${member.firstName} ${member.lastName}`,
              value: member,
              checked: false
            });
          }
        });
        if (memberSelect.length > 0) {
          const alert = yield this.alertCtrl.create({
            header: "Administrator hinzuf\xFCgen",
            inputs: memberSelect,
            buttons: [
              {
                text: "Abbrechen",
                role: "cancel",
                handler: () => console.log("Cancel clicked")
              },
              {
                text: "Hinzuf\xFCgen",
                handler: (data) => {
                  console.log("Selected Data:", data);
                }
              }
            ]
          });
          yield alert.present();
        } else {
          console.log("No eligible members to add as administrators.");
        }
      } catch (error) {
        console.error("Error in adding administrator:", error);
      }
    });
  }
  onInput(ev, fieldname) {
    console.log(ev.detail.value);
    this.fbService.setTeamThreshold(this.team.id, fieldname, ev.detail.value);
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
  presentCancelToast() {
    return __async(this, null, function* () {
      const toast = yield this.toastController.create({
        message: yield lastValueFrom(this.translate.get("onboarding.warning__action_canceled")),
        duration: 1500,
        position: "top",
        color: "danger"
      });
      yield toast.present();
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
  edit() {
    if (this.allowEdit) {
      this.allowEdit = false;
    } else {
      this.allowEdit = true;
    }
  }
  close() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(null, "close");
    });
  }
  confirm() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(this.team, "confirm");
    });
  }
};
_TeamPage.\u0275fac = function TeamPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TeamPage)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(NavParams), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(UserProfileService), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(TranslateService));
};
_TeamPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamPage, selectors: [["app-team"]], inputs: { team: [0, "data", "team"] }, standalone: false, decls: 6, vars: 4, consts: [["noRequests", ""], ["header", ""], [4, "ngIf", "ngIfElse"], [3, "translucent"], ["slot", "primary"], [3, "click"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], ["lines", "full", 3, "inset"], ["name", "stats-chart-outline", "slot", "start"], ["slot", "end"], ["detail", "true", 3, "click"], ["name", "people-circle-outline", "slot", "start"], ["name", "shield-half-outline", "slot", "start"], ["name", "barbell-outline", "slot", "start"], [4, "ngIf"], ["name", "heart-circle-outline", "slot", "start"], ["name", "time", "slot", "start", "color", "medium"], [1, "ion-padding"], ["detail", "true", 3, "click", 4, "ngIf"], ["name", "trophy-outline", "slot", "start"], ["lines", "none", 3, "inset", 4, "ngIf"], ["lines", "none", 3, "inset"], ["lines", "full", 3, "inset", 4, "ngIf"], ["color", "medium", "style", "display:block", "class", "ion-margin-horizontal ion-padding-horizontal ion-text-wrap", 4, "ngIf"], ["labelPlacement", "fixed", "label", "Training", "type", "number", 3, "ionInput", "value"], ["labelPlacement", "fixed", "label", "Meisterschaft", "type", "number", 3, "ionInput", "value"], ["color", "medium", 1, "ion-margin-horizontal", "ion-padding-horizontal", "ion-text-wrap", 2, "display", "block"], ["name", "trophy", "slot", "start"], ["name", "information-outline", "slot", "start"], ["name", "information-circle-outline", "slot", "start"], ["name", "globe-outline", "slot", "start"], [1, "ion-text-wrap"], ["fill", "clear", 3, "click"], ["slot", "icon-only", "name", "open-outline"], ["fill", "outline", "expand", "block", "color", "danger", 3, "click", 4, "ngIf"], ["fill", "outline", "expand", "block", "color", "danger", 3, "click"], ["slot", "start", "name", "trash"], [2, "width", "60%", 3, "animated"]], template: function TeamPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TeamPage_ng_container_0_Template, 70, 42, "ng-container", 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275template(2, TeamPage_ng_template_2_Template, 0, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, TeamPage_ng_template_4_Template, 13, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const header_r18 = \u0275\u0275reference(5);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 2, ctx.team$))("ngIfElse", header_r18);
  }
}, dependencies: [NgIf, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonNote, IonSkeletonText, IonTitle, IonToolbar, NumericValueAccessorDirective, AsyncPipe, DatePipe, TranslatePipe], styles: ["\n\nion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 36px;\n}\n/*# sourceMappingURL=team.page.css.map */"] });
var TeamPage = _TeamPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamPage, { className: "TeamPage", filePath: "src/app/pages/team/team-detail/team.page.ts", lineNumber: 57 });
})();

export {
  TeamPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy90ZWFtLWFkbWluLWxpc3QvdGVhbS1hZG1pbi1saXN0LnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy90ZWFtLWFkbWluLWxpc3QvdGVhbS1hZG1pbi1saXN0LnBhZ2UuaHRtbCIsICJzcmMvYXBwL3BhZ2VzL3RlYW0tbWVtYmVyLWxpc3QvdGVhbS1tZW1iZXItbGlzdC5wYWdlLnRzIiwgInNyYy9hcHAvcGFnZXMvdGVhbS1tZW1iZXItbGlzdC90ZWFtLW1lbWJlci1saXN0LnBhZ2UuaHRtbCIsICJzcmMvYXBwL3BhZ2VzL3RlYW0vdGVhbS1kZXRhaWwvdGVhbS5wYWdlLnRzIiwgInNyYy9hcHAvcGFnZXMvdGVhbS90ZWFtLWRldGFpbC90ZWFtLnBhZ2UuaHRtbCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgQWxlcnRDb250cm9sbGVyLFxuICBNb2RhbENvbnRyb2xsZXIsXG4gIE5hdlBhcmFtcyxcbiAgVG9hc3RDb250cm9sbGVyLFxuICBJb25MaXN0LFxufSBmcm9tIFwiQGlvbmljL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuaW1wb3J0IHtcbiAgQmVoYXZpb3JTdWJqZWN0LFxuICBPYnNlcnZhYmxlLFxuICBTdWJzY3JpcHRpb24sXG4gIGNhdGNoRXJyb3IsXG4gIGNvbWJpbmVMYXRlc3QsXG4gIGRlYm91bmNlVGltZSxcbiAgZmluYWxpemUsXG4gIGZpcnN0LFxuICBmb3JrSm9pbixcbiAgbGFzdFZhbHVlRnJvbSxcbiAgbWFwLFxuICBvZixcbiAgc3RhcnRXaXRoLFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZVNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS91c2VyLXByb2ZpbGUuc2VydmljZVwiO1xuaW1wb3J0IHsgTWVtYmVyUGFnZSB9IGZyb20gXCIuLi9tZW1iZXIvbWVtYmVyLnBhZ2VcIjtcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwic3JjL2FwcC9tb2RlbHMvdXNlclwiO1xuaW1wb3J0IHsgVGVhbSB9IGZyb20gXCJzcmMvYXBwL21vZGVscy90ZWFtXCI7XG5pbXBvcnQgeyBDbHViIH0gZnJvbSBcInNyYy9hcHAvbW9kZWxzL2NsdWJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtdGVhbS1hZG1pbi1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGVhbS1hZG1pbi1saXN0LnBhZ2UuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdGVhbS1hZG1pbi1saXN0LnBhZ2Uuc2NzcyddLFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIFRlYW1BZG1pbkxpc3RQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KFwidGVhbVwiKSB0ZWFtOiBhbnk7XG4gIHRlYW0kOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgYWxsb3dFZGl0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgZ3JvdXBBcnJheSA9IFtdO1xuXG4gIHRlYW1BZG1pbkxpc3QkOiBPYnNlcnZhYmxlPFRlYW1bXT47XG4gIGNsdWJBZG1pbkxpc3QkOiBPYnNlcnZhYmxlPENsdWJbXT47XG5cbiAgdGVhbUFkbWlucyQ6IE9ic2VydmFibGU8YW55W10+OyAvLyBPYnNlcnZhYmxlIGZvciB0aGUgZnVsbCBsaXN0IG9mIG1lbWJlcnNcbiAgZmlsdGVyZWRUZWFtQWRtaW5zJDogT2JzZXJ2YWJsZTxhbnlbXT47IC8vIE9ic2VydmFibGUgZm9yIGZpbHRlcmVkIHJlc3VsdHNcbiAgc2VhcmNoVGVybSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7ICAvLyBJbml0aWFsaXplZCB3aXRoIGFuIGVtcHR5IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYWxlcnRDdHJsOiBBbGVydENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSB0b2FzdEN0cmw6IFRvYXN0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHVzZXJQcm9maWxlU2VydmljZTogVXNlclByb2ZpbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmJTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRlYW0gPSB0aGlzLm5hdlBhcmFtcy5nZXQoXCJ0ZWFtXCIpO1xuICAgIGlmICh0aGlzLnRlYW0ucm9sZXMgJiYgdGhpcy50ZWFtLnJvbGVzLmxlbmdodCA+IDApIHtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRlYW0ucm9sZXMgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLnRlYW0kID0gdGhpcy5mYlNlcnZpY2UuZ2V0VGVhbVJlZih0aGlzLnRlYW0uaWQpO1xuXG4gICAgdGhpcy5pbml0aWFsaXplVGVhbUFkbWlucygpO1xuXG4gICAgdGhpcy50ZWFtQWRtaW5MaXN0JCA9IHRoaXMuZmJTZXJ2aWNlLmdldFRlYW1BZG1pbkxpc3QoKTtcbiAgICB0aGlzLmNsdWJBZG1pbkxpc3QkID0gdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1YkFkbWluTGlzdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG5cbiAgfVxuXG4gIGVkaXQoKSB7XG5cbiAgICBpZiAodGhpcy5hbGxvd0VkaXQpIHtcbiAgICAgIHRoaXMuYWxsb3dFZGl0ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWxsb3dFZGl0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpbml0aWFsaXplVGVhbUFkbWlucygpIHtcbiAgICB0aGlzLmdyb3VwQXJyYXkgPSBbXTsgIC8vIEluaXRpYWxpemUgb3IgY2xlYXIgdGhlIGdyb3VwIGFycmF5XG5cbiAgICB0aGlzLnRlYW1BZG1pbnMkID0gdGhpcy5mYlNlcnZpY2UuZ2V0VGVhbUFkbWluUmVmcyh0aGlzLnRlYW0uaWQpLnBpcGUoXG4gICAgICAvLyB0YXAoKCkgPT4gY29uc29sZS5sb2coXCJGZXRjaGluZyB0ZWFtIGFkbWluc1wiKSksXG4gICAgICBzd2l0Y2hNYXAobWVtYmVycyA9PiB7XG4gICAgICAgIGlmIChtZW1iZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gdGVhbSBhZG1pbnMgZm91bmQuXCIpO1xuICAgICAgICAgIHRoaXMuZ3JvdXBBcnJheSA9IFtdO1xuICAgICAgICAgIHJldHVybiBvZihbXSk7IC8vIEVtaXQgYW4gZW1wdHkgYXJyYXkgdG8ga2VlcCB0aGUgb2JzZXJ2YWJsZSBhbGl2ZVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2ZpbGVzJCA9IG1lbWJlcnMubWFwKG1lbWJlciA9PlxuICAgICAgICAgIHRoaXMudXNlclByb2ZpbGVTZXJ2aWNlLmdldFVzZXJQcm9maWxlQnlJZChtZW1iZXIuaWQpLnBpcGUoXG4gICAgICAgICAgICBtYXAocHJvZmlsZSA9PiAoe1xuICAgICAgICAgICAgICAuLi5tZW1iZXIsIC8vIFNwcmVhZCBtZW1iZXIgdG8gcmV0YWluIGFsbCBvcmlnaW5hbCBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgIC4uLnByb2ZpbGUsIC8vIFNwcmVhZCBwcm9maWxlIHRvIG92ZXJ3cml0ZSBhbmQgYWRkIHByb2ZpbGUgYXR0cmlidXRlc1xuICAgICAgICAgICAgICBmaXJzdE5hbWU6IHByb2ZpbGUuZmlyc3ROYW1lIHx8IFwiVW5rbm93blwiLFxuICAgICAgICAgICAgICBsYXN0TmFtZTogcHJvZmlsZS5sYXN0TmFtZSB8fCBcIlVua25vd25cIixcbiAgICAgICAgICAgICAgcm9sZXM6IG1lbWJlci5yb2xlcyB8fCBbXVxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZih7XG4gICAgICAgICAgICAgIC4uLm1lbWJlcixcbiAgICAgICAgICAgICAgZmlyc3ROYW1lOiBcIlVua25vd25cIixcbiAgICAgICAgICAgICAgbGFzdE5hbWU6IFwiVW5rbm93blwiLFxuICAgICAgICAgICAgICByb2xlczogbWVtYmVyLnJvbGVzIHx8ICBbXSAvLyBFbnN1cmUgcm9sZSBvciBvdGhlciBhdHRyaWJ1dGVzIGFyZSBpbmNsdWRlZCBldmVuIGluIGVycm9yXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KHByb2ZpbGVzJCkucGlwZShcbiAgICAgICAgICBtYXAocHJvZmlsZXMgPT4gcHJvZmlsZXNcbiAgICAgICAgICAgIC5maWx0ZXIocHJvZmlsZSA9PiBwcm9maWxlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5maXJzdE5hbWUubG9jYWxlQ29tcGFyZShiLmZpcnN0TmFtZSkpXG4gICAgICAgICAgICAubWFwKHByb2ZpbGUgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBncm91cEJ5Q2hhciA9IHByb2ZpbGUuZmlyc3ROYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICBpZiAoIXRoaXMuZ3JvdXBBcnJheS5pbmNsdWRlcyhncm91cEJ5Q2hhcikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwQXJyYXkucHVzaChncm91cEJ5Q2hhcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcm9maWxlLFxuICAgICAgICAgICAgICAgIGdyb3VwQnk6IGdyb3VwQnlDaGFyLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIFRlYW0gYWRtaW5zOlwiLCBlcnIpO1xuICAgICAgICByZXR1cm4gb2YoW10pOyAvLyBFbWl0IGFuIGVtcHR5IGFycmF5IG9uIGVycm9yXG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgdGhpcy5maWx0ZXJlZFRlYW1BZG1pbnMkID0gY29tYmluZUxhdGVzdChbdGhpcy50ZWFtQWRtaW5zJCwgdGhpcy5zZWFyY2hUZXJtXSkucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgzMDApLFxuICAgICAgbWFwKChbYWRtaW5zLCB0ZXJtXSkgPT4ge1xuICAgICAgICBpZiAoIXRlcm0pIHJldHVybiBhZG1pbnM7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBhZG1pbnMuZmlsdGVyKGFkbWluID0+XG4gICAgICAgICAgYWRtaW4uZmlyc3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGVybS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIGFkbWluLmxhc3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGVybS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIGFkbWluLnJvbGVzLmZpbmQocm9sZT0+cm9sZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm0udG9Mb3dlckNhc2UoKSkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZDtcbiAgICAgIH0pLFxuICAgICAgbWFwKGZpbHRlcmVkID0+IHtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBncm91cEFycmF5XG4gICAgICAgIHRoaXMuZ3JvdXBBcnJheSA9IFtdO1xuICAgICAgICBmaWx0ZXJlZC5mb3JFYWNoKGFkbWluID0+IHtcbiAgICAgICAgICBjb25zdCBncm91cEJ5Q2hhciA9IGFkbWluLmZpcnN0TmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICBpZiAoIXRoaXMuZ3JvdXBBcnJheS5pbmNsdWRlcyhncm91cEJ5Q2hhcikpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBBcnJheS5wdXNoKGdyb3VwQnlDaGFyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmlsdGVyZWQ7XG4gICAgICB9KSxcbiAgICAgIHRhcChmaWx0ZXJlZCA9PiBjb25zb2xlLmxvZyhcIkZpbHRlcmVkIGFkbWluczpcIiwgZmlsdGVyZWQubGVuZ3RoKSksXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmaWx0ZXJpbmcgYWRtaW5zOlwiLCBlcnIpO1xuICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBzZWFyY2hUZXJtID0gZXZlbnQuZGV0YWlsLnZhbHVlIHx8ICcnO1xuICAgIGNvbnNvbGUubG9nKCdIYW5kbGluZyBTZWFyY2ggRXZlbnQ6Jywgc2VhcmNoVGVybSk7XG4gICAgdGhpcy5zZWFyY2hUZXJtLm5leHQoc2VhcmNoVGVybS50cmltKCkpOyAvLyBUcmltIGFuZCB1cGRhdGUgdGhlIHNlYXJjaCB0ZXJtXG4gIH1cblxuICBpc1RlYW1BZG1pbih0ZWFtQWRtaW5MaXN0OiBhbnlbXSwgdGVhbUlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGVhbUFkbWluTGlzdCAmJiB0ZWFtQWRtaW5MaXN0LnNvbWUodGVhbSA9PiB0ZWFtLmlkID09PSB0ZWFtSWQpO1xuICB9XG5cbiAgaXNDbHViQWRtaW4oY2x1YkFkbWluTGlzdDogYW55W10sIGNsdWJJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNsdWJBZG1pbkxpc3QgJiYgY2x1YkFkbWluTGlzdC5zb21lKGNsdWIgPT4gY2x1Yi5pZCA9PT0gY2x1YklkKTtcbiAgfVxuICBhc3luYyBhZGRBZG1pbmlzdHJhdG9yVG9UZWFtKCkge1xuICAgIGlmICghdGhpcy50ZWFtIHx8ICF0aGlzLnRlYW0uY2x1YklkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdObyB2YWxpZCB0ZWFtIG9yIHRlYW0gcmVmZXJlbmNlIGZvdW5kLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKCdGZXRjaGluZyBtZW1iZXJzIGZvciB0ZWFtIElEOicsIHRoaXMudGVhbS5pZCk7XG4gICAgICBjb25zdCBtZW1iZXJzID0gYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgICAgdGhpcy5mYlNlcnZpY2UuZ2V0VGVhbU1lbWJlclJlZnModGhpcy50ZWFtLmlkKS5waXBlKFxuICAgICAgICAgIGZpcnN0KCkgIC8vIFRha2VzIHRoZSBmaXJzdCBlbWl0dGVkIHZhbHVlIHRoZW4gY29tcGxldGVzXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZygnTWVtYmVycyBmZXRjaGVkOicsIG1lbWJlcnMubGVuZ3RoKTtcbiAgXG4gICAgICBpZiAoIW1lbWJlcnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdObyB0ZWFtIG1lbWJlcnMgZm91bmQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgXG4gICAgICBjb25zdCBwcm9maWxlcyA9IGF3YWl0IFByb21pc2UuYWxsKG1lbWJlcnMubWFwKG1lbWJlciA9PlxuICAgICAgICBsYXN0VmFsdWVGcm9tKHRoaXMudXNlclByb2ZpbGVTZXJ2aWNlLmdldFVzZXJQcm9maWxlQnlJZChtZW1iZXIuaWQpLnBpcGUoXG4gICAgICAgICAgZmlyc3QoKSxcbiAgICAgICAgICAvL3RhcChwcm9maWxlcz0+Y29uc29sZS5sb2cocHJvZmlsZXMpKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBmZXRjaGluZyBwcm9maWxlIGZvciAke21lbWJlci5pZH06YCwgZXJyKTtcbiAgICAgICAgICAgIHJldHVybiBvZih7IC4uLm1lbWJlciwgZmlyc3ROYW1lOiAnVW5rbm93bicsIGxhc3ROYW1lOiAnVW5rbm93bicgfSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKSlcbiAgICAgICkpO1xuICBcbiAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZmlsZXMgPSBwcm9maWxlcy5maWx0ZXIocHJvZmlsZSA9PiBwcm9maWxlICE9PSB1bmRlZmluZWQpO1xuICAgICAgY29uc29sZS5sb2coZmlsdGVyZWRQcm9maWxlcylcbiAgICAgIGNvbnN0IG5ld1RlYW1NZW1iZXJzID0gdGhpcy5maWx0ZXJOZXdUZWFtTWVtYmVycyhmaWx0ZXJlZFByb2ZpbGVzLCBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudGVhbUFkbWlucyQucGlwZSh0YWtlKDEpKSkpO1xuICAgICAgY29uc29sZS5sb2cobmV3VGVhbU1lbWJlcnMpXG4gICAgICBjb25zdCBtZW1iZXJTZWxlY3RPcHRpb25zID0gdGhpcy5wcmVwYXJlTWVtYmVyU2VsZWN0T3B0aW9ucyhuZXdUZWFtTWVtYmVycyk7XG4gICAgICBjb25zb2xlLmxvZyhtZW1iZXJTZWxlY3RPcHRpb25zKSAgXG4gICAgICBpZiAobWVtYmVyU2VsZWN0T3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc2hvd0FkZE1lbWJlckFsZXJ0KG1lbWJlclNlbGVjdE9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vIG5ldyBtZW1iZXJzIGF2YWlsYWJsZSB0byBhZGQuJyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBhZGRNZW1iZXJUb1RlYW06JywgZXJyKTtcbiAgICB9XG4gIH1cbiAgXG4gIGZpbHRlck5ld1RlYW1NZW1iZXJzKHByb2ZpbGVzLCB0ZWFtTWVtYmVycykge1xuICAgIHJldHVybiBwcm9maWxlcy5maWx0ZXIobWVtYmVyID0+XG4gICAgICAhdGVhbU1lbWJlcnMuc29tZSh0ZWFtTWVtYmVyID0+IHRlYW1NZW1iZXIuaWQgPT09IG1lbWJlci5pZClcbiAgICApO1xuICB9XG5cbiAgcHJlcGFyZU1lbWJlclNlbGVjdE9wdGlvbnMoZmlsdGVyZWRNZW1iZXJzKSB7XG4gICAgLy8gU29ydCBtZW1iZXJzIGFscGhhYmV0aWNhbGx5IGJ5IGZpcnN0TmFtZSwgdGhlbiBieSBsYXN0TmFtZVxuICAgIGNvbnN0IHNvcnRlZE1lbWJlcnMgPSBmaWx0ZXJlZE1lbWJlcnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgbmFtZUEgPSBgJHthLmZpcnN0TmFtZX0gJHthLmxhc3ROYW1lfWAudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IG5hbWVCID0gYCR7Yi5maXJzdE5hbWV9ICR7Yi5sYXN0TmFtZX1gLnRvTG93ZXJDYXNlKCk7XG4gICAgICByZXR1cm4gbmFtZUEubG9jYWxlQ29tcGFyZShuYW1lQik7XG4gICAgfSk7XG5cbiAgICAvLyBNYXAgc29ydGVkIG1lbWJlcnMgdG8gY2hlY2tib3ggb3B0aW9uc1xuICAgIHJldHVybiBzb3J0ZWRNZW1iZXJzLm1hcChtZW1iZXIgPT4gKHtcbiAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICBuYW1lOiBtZW1iZXIuaWQsXG4gICAgICBsYWJlbDogYCR7bWVtYmVyLmZpcnN0TmFtZX0gJHttZW1iZXIubGFzdE5hbWV9YCxcbiAgICAgIHZhbHVlOiBtZW1iZXIuaWQsXG4gICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICB9KSk7XG4gIH1cblxuICBhc3luYyBzaG93QWRkTWVtYmVyQWxlcnQobWVtYmVyU2VsZWN0KSB7XG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5hZGRNZW1iZXJcIikpLFxuICAgICAgaW5wdXRzOiBtZW1iZXJTZWxlY3QsXG4gICAgICBidXR0b25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5jYW5jZWxcIikpLFxuICAgICAgICAgIHJvbGU6ICdjYW5jZWwnLFxuICAgICAgICAgIGhhbmRsZXI6ICgpID0+IGNvbnNvbGUubG9nKCdDYW5jZWwgY2xpY2tlZCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uYWRkXCIpKSxcbiAgICAgICAgICBoYW5kbGVyOiAoc2VsZWN0ZWRNZW1iZXJzKSA9PiB7XG4gICAgICAgICAgICBzZWxlY3RlZE1lbWJlcnMuZm9yRWFjaChtZW1iZXJJZCA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lbWJlcklkKVxuICAgICAgICAgICAgICB0aGlzLmFwcHJvdmVUZWFtQWRtaW5SZXF1ZXN0KHRoaXMudGVhbS5pZCwgbWVtYmVySWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xuICB9XG5cbi8qXG4gIGFkZEFkbWluaXN0cmF0b3JUb1RlYW0oKSB7XG4gICAgaWYgKCF0aGlzLnRlYW0gfHwgIXRoaXMudGVhbS5pZCkge1xuICAgICAgY29uc29sZS5lcnJvcignTm8gdmFsaWQgdGVhbSBvciB0ZWFtIHJlZmVyZW5jZSBmb3VuZC4nKTtcbiAgICAgIHJldHVybjsgLy8gRXhpdCBpZiBubyB2YWxpZCB0ZWFtIElEIGlzIGZvdW5kXG4gICAgfVxuXG4gICAgLy8gQ29tYmluZSB0aGUgZmV0Y2hpbmcgb2YgdGVhbSBtZW1iZXJzIGFuZCBjdXJyZW50IHRlYW0gYWRtaW5zXG4gICAgY29uc3QgZmV0Y2hUZWFtQW5kQWRtaW5zJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5mYlNlcnZpY2UuZ2V0VGVhbU1lbWJlclJlZnModGhpcy50ZWFtLmlkKSxcbiAgICAgIHRoaXMudGVhbUFkbWlucyRcbiAgICBdKS5waXBlKFxuXG4gICAgICBzd2l0Y2hNYXAoKFttZW1iZXJzLCB0ZWFtQWRtaW5zXSkgPT4ge1xuICAgICAgICBpZiAobWVtYmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTm8gdGVhbSBtZW1iZXJzIGZvdW5kLicpO1xuICAgICAgICAgIHJldHVybiBvZihbXSk7IC8vIFJldHVybiBlbXB0eSBhcnJheSBpZiBubyBtZW1iZXJzXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9maWxlcyQgPSBtZW1iZXJzLm1hcChtZW1iZXIgPT5cbiAgICAgICAgICB0aGlzLnVzZXJQcm9maWxlU2VydmljZS5nZXRVc2VyUHJvZmlsZUJ5SWQobWVtYmVyLmlkKS5waXBlKFxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZih7IC4uLm1lbWJlciwgZmlyc3ROYW1lOiAnVW5rbm93bicsIGxhc3ROYW1lOiAnVW5rbm93bicgfSkpIC8vIFByb3ZpZGUgZmFsbGJhY2sgZGF0YVxuICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdChwcm9maWxlcyQpLnBpcGUoXG4gICBcbiAgICAgICAgICBtYXAocHJvZmlsZXMgPT4gcHJvZmlsZXMuZmlsdGVyKHByb2ZpbGUgPT4gcHJvZmlsZSAhPT0gdW5kZWZpbmVkKSksXG4gICAgICAgICAgbWFwKHByb2ZpbGVzID0+IHRoaXMuZmlsdGVyTmV3QWRtaW5zKHByb2ZpbGVzLCB0ZWFtQWRtaW5zKSksXG4gICAgICAgICAgbWFwKGZpbHRlcmVkTWVtYmVycyA9PiB0aGlzLnByZXBhcmVNZW1iZXJTZWxlY3RPcHRpb25zKGZpbHRlcmVkTWVtYmVycykpXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdGVhbSBhbmQgdGVhbSBhZG1pbnM6JywgZXJyKTtcbiAgICAgICAgcmV0dXJuIG9mKFtdKTsgLy8gSGFuZGxlIGVycm9ycyBieSByZXR1cm5pbmcgYW4gZW1wdHkgYXJyYXlcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGZldGNoVGVhbUFuZEFkbWlucyQuc3Vic2NyaWJlKGFzeW5jIGFkbWluU2VsZWN0ID0+IHtcbiAgICAgIGlmIChhZG1pblNlbGVjdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc2hvd0FkZEFkbWluQWxlcnQoYWRtaW5TZWxlY3QpOyAvLyBQcmVzZW50IHRoZSBhbGVydCB3aXRoIGFkbWluIHNlbGVjdGlvbnNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBuZXcgYWRtaW5pc3RyYXRvcnMgYXZhaWxhYmxlIHRvIGFkZC4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZpbHRlck5ld0FkbWlucyhwcm9maWxlcywgdGVhbUFkbWlucykge1xuICAgIHJldHVybiBwcm9maWxlcy5maWx0ZXIobWVtYmVyID0+XG4gICAgICAhdGVhbUFkbWlucy5zb21lKGFkbWluID0+IGFkbWluLmlkID09PSBtZW1iZXIuaWQpXG4gICAgKTtcbiAgfVxuICBwcmVwYXJlTWVtYmVyU2VsZWN0T3B0aW9ucyhmaWx0ZXJlZE1lbWJlcnMpIHtcbiAgICAvLyBTb3J0IG1lbWJlcnMgYWxwaGFiZXRpY2FsbHkgYnkgZmlyc3ROYW1lLCB0aGVuIGJ5IGxhc3ROYW1lXG4gICAgY29uc3Qgc29ydGVkTWVtYmVycyA9IGZpbHRlcmVkTWVtYmVycy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBuYW1lQSA9IGAke2EuZmlyc3ROYW1lfSAke2EubGFzdE5hbWV9YC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY29uc3QgbmFtZUIgPSBgJHtiLmZpcnN0TmFtZX0gJHtiLmxhc3ROYW1lfWAudG9Mb3dlckNhc2UoKTtcbiAgICAgIHJldHVybiBuYW1lQS5sb2NhbGVDb21wYXJlKG5hbWVCKTtcbiAgICB9KTtcblxuICAgIC8vIE1hcCBzb3J0ZWQgbWVtYmVycyB0byBjaGVja2JveCBvcHRpb25zXG4gICAgcmV0dXJuIHNvcnRlZE1lbWJlcnMubWFwKG1lbWJlciA9PiAoe1xuICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIG5hbWU6IG1lbWJlci5pZCxcbiAgICAgIGxhYmVsOiBgJHttZW1iZXIuZmlyc3ROYW1lfSAke21lbWJlci5sYXN0TmFtZX1gLFxuICAgICAgdmFsdWU6IG1lbWJlci5pZCxcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIH0pKTtcbiAgfVxuICBhc3luYyBzaG93QWRkQWRtaW5BbGVydChhZG1pblNlbGVjdCkge1xuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydEN0cmwuY3JlYXRlKHtcbiAgICAgIGhlYWRlcjogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uYWRkQWRtaW5pc3RyYXRvclwiKSksXG4gICAgICBpbnB1dHM6IGFkbWluU2VsZWN0LFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uY2FuY2VsXCIpKSxcbiAgICAgICAgICByb2xlOiAnY2FuY2VsJyxcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiBjb25zb2xlLmxvZygnQ2FuY2VsIGNsaWNrZWQnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLmFkZFwiKSksXG4gICAgICAgICAgaGFuZGxlcjogKHNlbGVjdGVkQWRtaW5zKSA9PiB7XG4gICAgICAgICAgICBzZWxlY3RlZEFkbWlucy5mb3JFYWNoKGFkbWluSWQgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmFwcHJvdmVUZWFtQWRtaW5SZXF1ZXN0KHRoaXMudGVhbS5pZCwgYWRtaW5JZCk7IC8vIEFkanVzdGVkIHRvIGFkbWluLXNwZWNpZmljIGFwcHJvdmFsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XG4gIH0qL1xuXG4gIGFzeW5jIGFwcHJvdmVUZWFtQWRtaW5SZXF1ZXN0KHRlYW1JZCwgYWRtaW5JZCkge1xuICAgIGF3YWl0IHRoaXMuZmJTZXJ2aWNlLmFkZFRlYW1BZG1pbih0ZWFtSWQsIGFkbWluSWQpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy50b2FzdEFjdGlvblNhdmVkKCk7XG4gICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMudG9hc3RBY3Rpb25FcnJvcihlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuXG4gIGFzeW5jIGRlbGV0ZVRlYW1BZG1pbihtZW1iZXIpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5mYlNlcnZpY2UuZGVsZXRlVGVhbUFkbWluKHRoaXMudGVhbS5pZCwgbWVtYmVyLmlkKTtcbiAgICAgIGF3YWl0IHRoaXMudG9hc3RBY3Rpb25TYXZlZCgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMudG9hc3RBY3Rpb25FcnJvcihlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBvcGVuTWVtYmVyKG1lbWJlcjogUHJvZmlsZSkge1xuICAgIGNvbnNvbGUubG9nKFwib3Blbk1lbWJlclwiKTtcbiAgICBjb25zdCBtb2RhbCA9IGF3YWl0IHRoaXMubW9kYWxDdHJsLmNyZWF0ZSh7XG4gICAgICBjb21wb25lbnQ6IE1lbWJlclBhZ2UsXG4gICAgICBwcmVzZW50aW5nRWxlbWVudDogYXdhaXQgdGhpcy5tb2RhbEN0cmwuZ2V0VG9wKCksXG4gICAgICBjYW5EaXNtaXNzOiB0cnVlLFxuICAgICAgc2hvd0JhY2tkcm9wOiB0cnVlLFxuICAgICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgZGF0YTogbWVtYmVyLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBtb2RhbC5wcmVzZW50KCk7XG5cbiAgICBjb25zdCB7IGRhdGEsIHJvbGUgfSA9IGF3YWl0IG1vZGFsLm9uV2lsbERpc21pc3MoKTtcblxuICAgIGlmIChyb2xlID09PSBcImNvbmZpcm1cIikge1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHRvYXN0QWN0aW9uU2F2ZWQoKSB7XG4gICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uc3VjY2Vzc19fc2F2ZWRcIikpLFxuICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIixcbiAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICB9KTtcblxuICAgIGF3YWl0IHRvYXN0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIHRvYXN0QWN0aW9uQ2FuY2VsZWQoKSB7XG4gICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJ0ZWFtLmFjdGlvbl9fY2FuY2VsZWRcIikpLFxuICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIixcbiAgICAgIGNvbG9yOiBcImRhbmdlclwiLFxuICAgIH0pO1xuICAgIGF3YWl0IHRvYXN0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIHRvYXN0QWN0aW9uRXJyb3IoZXJyb3IpIHtcbiAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDdHJsLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIixcbiAgICAgIGNvbG9yOiBcImRhbmdlclwiLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgdG9hc3QucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgY2xvc2UoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kYWxDdHJsLmRpc21pc3MobnVsbCwgXCJjbG9zZVwiKTtcbiAgfVxuXG4gIGFzeW5jIGNvbmZpcm0oKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kYWxDdHJsLmRpc21pc3ModGhpcy50ZWFtLCBcImNvbmZpcm1cIik7XG4gIH1cbn1cbiIsICI8bmctY29udGFpbmVyICpuZ0lmPVwidGVhbSQgfCBhc3luYyBhcyB0ZWFtOyBlbHNlIGxvYWRpbmdcIj5cbiAgPGlvbi1oZWFkZXIgW3RyYW5zbHVjZW50XT1cInRydWVcIj5cbiAgICA8aW9uLXRvb2xiYXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGVhbUFkbWluTGlzdCQgfCBhc3luYyBhcyB0ZWFtQWRtaW5MaXN0XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbHViQWRtaW5MaXN0JCB8IGFzeW5jIGFzIGNsdWJBZG1pbkxpc3RcIj5cbiAgICAgICAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAqbmdJZj1cImlzVGVhbUFkbWluKHRlYW1BZG1pbkxpc3QsIHRlYW0uaWQpIHx8IGlzQ2x1YkFkbWluKGNsdWJBZG1pbkxpc3QsIHRlYW0uY2x1YklkKVwiPlxuICAgICAgICAgICAgPGlvbi1idXR0b24gKm5nSWY9XCIhYWxsb3dFZGl0XCIgKGNsaWNrKT1cImVkaXQoKVwiPnt7XCJjb21tb24uZWRpdFwiIHwgdHJhbnNsYXRlfX08L2lvbi1idXR0b24+XG4gICAgICAgICAgICA8aW9uLWJ1dHRvbiAqbmdJZj1cImFsbG93RWRpdFwiIChjbGljayk9XCJlZGl0KClcIj57e1wiY29tbW9uLmRvbmVcIiB8IHRyYW5zbGF0ZX19PC9pb24tYnV0dG9uPlxuICAgICAgICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8aW9uLXRpdGxlPnt7XCJjb21tb24uYWRtaW5zXCIgfCB0cmFuc2xhdGV9fTwvaW9uLXRpdGxlPlxuICAgICAgPGlvbi1idXR0b25zIHNsb3Q9XCJwcmltYXJ5XCI+XG4gICAgICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJjbG9zZSgpXCI+e3tcImNvbW1vbi5jbG9zZVwiIHwgdHJhbnNsYXRlfX08L2lvbi1idXR0b24+XG4gICAgICA8L2lvbi1idXR0b25zPlxuICAgIDwvaW9uLXRvb2xiYXI+XG4gIDwvaW9uLWhlYWRlcj5cblxuICA8aW9uLWNvbnRlbnQgW2Z1bGxzY3JlZW5dPVwidHJ1ZVwiPlxuICAgIDxpb24taGVhZGVyIGNvbGxhcHNlPVwiY29uZGVuc2VcIj5cbiAgICAgIDxpb24tdG9vbGJhcj5cbiAgICAgICAgPGlvbi10aXRsZSBzaXplPVwibGFyZ2VcIj57e1wiY29tbW9uLmFkbWluc1wiIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgICAgIDwvaW9uLXRvb2xiYXI+XG4gICAgPC9pb24taGVhZGVyPlxuXG4gICAgPGlvbi1zZWFyY2hiYXIgW2RlYm91bmNlXT1cIjEwMDBcIiAoaW9uQ2hhbmdlKT1cImhhbmRsZVNlYXJjaCgkZXZlbnQpXCIgYW5pbWF0ZWQ9XCJ0cnVlXCIgc2VhcmNoLWljb249XCJzZWFyY2gtY2lyY2xlXCJcbiAgICBwbGFjZWhvbGRlcj0ne3tcImNvbW1vbi5zZWFyY2hmaWVsZFwiIHwgdHJhbnNsYXRlfX0nPjwvaW9uLXNlYXJjaGJhcj5cblxuICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIiAqbmdJZj1cImZpbHRlcmVkVGVhbUFkbWlucyQgfCBhc3luYyBhcyB0ZWFtQWRtaW5MaXN0XCI+XG4gICAgPGlvbi1pdGVtLWdyb3VwPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZ3JvdXBCeSBvZiBncm91cEFycmF5XCI+XG4gICAgICAgIDxpb24taXRlbS1kaXZpZGVyIGNvbG9yPVwibGlnaHRcIj5cbiAgICAgICAgICA8aW9uLWxhYmVsPiB7e2dyb3VwQnl9fSA8L2lvbi1sYWJlbD5cbiAgICAgICAgPC9pb24taXRlbS1kaXZpZGVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtZW1iZXIgb2YgdGVhbUFkbWluTGlzdFwiPlxuXG4gICAgICAgICAgPGlvbi1pdGVtLXNsaWRpbmcgKm5nSWY9XCJtZW1iZXIuZ3JvdXBCeSA9PSBncm91cEJ5XCI+XG4gICAgICAgICAgICA8aW9uLWl0ZW0gZGV0YWlsPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJhbGxvd0VkaXQ9PXRydWVcIiBzbG90PVwiaWNvbi1vbmx5XCIgY29sb3I9XCJkYW5nZXJcIiBzbG90PVwic3RhcnRcIiBuYW1lPVwidHJhc2hcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkZWxldGVUZWFtQWRtaW4obWVtYmVyKVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgIDxpb24tYXZhdGFyIHNsb3Q9XCJzdGFydFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgKm5nSWY9XCIhbWVtYmVyLnByb2ZpbGVQaWN0dXJlXCIgYWx0PVwiU2lsaG91ZXR0ZSBvZiBhIHBlcnNvbidzIGhlYWRcIlxuICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9pbWcvZGVtb3MvYXZhdGFyLnN2Z1wiIC8+XG4gICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cIm1lbWJlci5wcm9maWxlUGljdHVyZVwiIHNyYz1cInt7bWVtYmVyPy5wcm9maWxlUGljdHVyZX19XCIgLz5cbiAgICAgICAgICAgICAgPC9pb24tYXZhdGFyPlxuICAgICAgICAgICAgICA8aW9uLWxhYmVsIGNsYXNzPVwiaW9uLXRleHQtd3JhcFwiIChjbGljayk9XCJvcGVuTWVtYmVyKG1lbWJlcilcIj5cbiAgICAgICAgICAgICAgICB7e21lbWJlci5maXJzdE5hbWV9fSB7e21lbWJlci5sYXN0TmFtZX19XG4gICAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICA8L2lvbi1pdGVtLXNsaWRpbmc+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9pb24taXRlbS1ncm91cD5cbiAgPC9pb24tbGlzdD5cblxuICA8bmctY29udGFpbmVyICpuZ0lmPVwidGVhbUFkbWluTGlzdCQgfCBhc3luYyBhcyB0ZWFtQWRtaW5MaXN0XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNsdWJBZG1pbkxpc3QkIHwgYXN5bmMgYXMgY2x1YkFkbWluTGlzdFwiPlxuICAgICAgPGlvbi1mYWIgKm5nSWY9XCJpc1RlYW1BZG1pbih0ZWFtQWRtaW5MaXN0LCB0ZWFtLmlkKSB8fCBpc0NsdWJBZG1pbihjbHViQWRtaW5MaXN0LCB0ZWFtLmNsdWJJZClcIlxuICAgICAgICB2ZXJ0aWNhbD1cImJvdHRvbVwiIGhvcml6b250YWw9XCJlbmRcIiBzbG90PVwiZml4ZWRcIj5cbiAgICAgICAgPGlvbi1mYWItYnV0dG9uIChjbGljayk9XCJhZGRBZG1pbmlzdHJhdG9yVG9UZWFtKClcIj5cbiAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImFkZC1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPC9pb24tZmFiLWJ1dHRvbj5cbiAgICAgIDwvaW9uLWZhYj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG48L2lvbi1jb250ZW50PlxuPC9uZy1jb250YWluZXI+XG5cblxuXG48bmctdGVtcGxhdGUgI2xvYWRpbmc+XG4gIDxpb24taGVhZGVyIFt0cmFuc2x1Y2VudF09XCJ0cnVlXCI+XG4gICAgPGlvbi10b29sYmFyPlxuXG4gICAgICA8aW9uLXRpdGxlPnt7XCJjb21tb24uYWRtaW5zXCIgfCB0cmFuc2xhdGV9fTwvaW9uLXRpdGxlPlxuICAgICAgPGlvbi1idXR0b25zIHNsb3Q9XCJwcmltYXJ5XCI+XG4gICAgICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJjbG9zZSgpXCI+e3tcImNvbW1vbi5jbG9zZVwiIHwgdHJhbnNsYXRlfX08L2lvbi1idXR0b24+XG4gICAgICA8L2lvbi1idXR0b25zPlxuICAgIDwvaW9uLXRvb2xiYXI+XG4gIDwvaW9uLWhlYWRlcj5cblxuICA8aW9uLWNvbnRlbnQgW2Z1bGxzY3JlZW5dPVwidHJ1ZVwiPlxuICAgIDxpb24taGVhZGVyIGNvbGxhcHNlPVwiY29uZGVuc2VcIj5cbiAgICAgIDxpb24tdG9vbGJhcj5cbiAgICAgICAgPGlvbi10aXRsZSBzaXplPVwibGFyZ2VcIj57e1wiY29tbW9uLmFkbWluc1wiIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgICAgIDwvaW9uLXRvb2xiYXI+XG4gICAgPC9pb24taGVhZGVyPlxuXG4gICAgPGlvbi1zZWFyY2hiYXIgW2RlYm91bmNlXT1cIjEwMDBcIiAoaW9uQ2hhbmdlKT1cImhhbmRsZVNlYXJjaCgkZXZlbnQpXCIgYW5pbWF0ZWQ9XCJ0cnVlXCIgc2VhcmNoLWljb249XCJzZWFyY2gtY2lyY2xlXCJcbiAgICAgIHBsYWNlaG9sZGVyPSd7e1wiY29tbW9uLnNlYXJjaGZpZWxkXCIgfCB0cmFuc2xhdGV9fSc+PC9pb24tc2VhcmNoYmFyPlxuXG4gICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCI+XG4gICAgICA8IS0tIDxpb24tbGlzdC1oZWFkZXI+XG4gICAgICAgIDxpb24tbGFiZWw+IHt7XCJjb21tb24ubWVtYmVyc1wiIHwgdHJhbnNsYXRlfX0gPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1saXN0LWhlYWRlcj4tLT5cbiAgICAgIDxpb24taXRlbS1ncm91cD5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZ3JvdXBCeSBvZiBncm91cEFycmF5XCI+XG4gICAgICAgICAgPGlvbi1pdGVtLWRpdmlkZXIgY29sb3I9XCJsaWdodFwiPlxuICAgICAgICAgICAgPGlvbi1sYWJlbD4ge3tncm91cEJ5fX0gPC9pb24tbGFiZWw+XG4gICAgICAgICAgPC9pb24taXRlbS1kaXZpZGVyPlxuXG5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L2lvbi1pdGVtLWdyb3VwPlxuICAgIDwvaW9uLWxpc3Q+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRlYW1BZG1pbkxpc3QkIHwgYXN5bmMgYXMgdGVhbUFkbWluTGlzdFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNsdWJBZG1pbkxpc3QkIHwgYXN5bmMgYXMgY2x1YkFkbWluTGlzdFwiPlxuICAgICAgICA8aW9uLWZhYiAqbmdJZj1cImlzVGVhbUFkbWluKHRlYW1BZG1pbkxpc3QsIHRlYW0uaWQpIHx8IGlzQ2x1YkFkbWluKGNsdWJBZG1pbkxpc3QsIHRlYW0uY2x1YklkKVwiXG4gICAgICAgICAgdmVydGljYWw9XCJib3R0b21cIiBob3Jpem9udGFsPVwiZW5kXCIgc2xvdD1cImZpeGVkXCI+XG4gICAgICAgICAgPGlvbi1mYWItYnV0dG9uIChjbGljayk9XCJhZGRBZG1pbmlzdHJhdG9yVG9UZWFtKClcIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiYWRkLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDwvaW9uLWZhYi1idXR0b24+XG4gICAgICAgIDwvaW9uLWZhYj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2lvbi1jb250ZW50PlxuXG5cbjwvbmctdGVtcGxhdGU+IiwgImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIEFsZXJ0Q29udHJvbGxlcixcbiAgTW9kYWxDb250cm9sbGVyLFxuICBOYXZQYXJhbXMsXG4gIFRvYXN0Q29udHJvbGxlcixcbiAgSW9uTGlzdCxcbiAgSW9uSXRlbVNsaWRpbmcsXG59IGZyb20gXCJAaW9uaWMvYW5ndWxhclwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5pbXBvcnQge1xuICBCZWhhdmlvclN1YmplY3QsXG4gIE9ic2VydmFibGUsXG4gIFN1YnNjcmlwdGlvbixcbiAgY2F0Y2hFcnJvcixcbiAgY29tYmluZUxhdGVzdCxcbiAgZGVib3VuY2VUaW1lLFxuICBmaXJzdCxcbiAgZm9ya0pvaW4sXG4gIGxhc3RWYWx1ZUZyb20sXG4gIG1hcCxcbiAgb2YsXG4gIHN0YXJ0V2l0aCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG59IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvZmlyZWJhc2UvdXNlci1wcm9maWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IE1lbWJlclBhZ2UgfSBmcm9tIFwiLi4vbWVtYmVyL21lbWJlci5wYWdlXCI7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcInNyYy9hcHAvbW9kZWxzL3VzZXJcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgVGVhbSB9IGZyb20gXCJzcmMvYXBwL21vZGVscy90ZWFtXCI7XG5pbXBvcnQgeyBDbHViIH0gZnJvbSBcInNyYy9hcHAvbW9kZWxzL2NsdWJcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLXRlYW0tbWVtYmVyLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90ZWFtLW1lbWJlci1saXN0LnBhZ2UuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdGVhbS1tZW1iZXItbGlzdC5wYWdlLnNjc3MnXSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBUZWFtTWVtYmVyTGlzdFBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoXCJ0ZWFtXCIpIHRlYW06IGFueTtcbiAgdGVhbSQ6IE9ic2VydmFibGU8YW55PjtcblxuICBhbGxvd0VkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZ3JvdXBBcnJheSA9IFtdO1xuXG4gIHRlYW1BZG1pbkxpc3QkOiBPYnNlcnZhYmxlPFRlYW1bXT47XG4gIGNsdWJBZG1pbkxpc3QkOiBPYnNlcnZhYmxlPENsdWJbXT47XG5cbiAgdGVhbU1lbWJlcnMkOiBPYnNlcnZhYmxlPGFueVtdPjsgLy8gT2JzZXJ2YWJsZSBmb3IgdGhlIGZ1bGwgbGlzdCBvZiBtZW1iZXJzXG4gIGZpbHRlcmVkVGVhbU1lbWJlcnMkOiBPYnNlcnZhYmxlPGFueVtdPjsgLy8gT2JzZXJ2YWJsZSBmb3IgZmlsdGVyZWQgcmVzdWx0c1xuICBzZWFyY2hUZXJtID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTsgIC8vIEluaXRpYWxpemVkIHdpdGggYW4gZW1wdHkgc3RyaW5nXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsXG4gICAgcHJpdmF0ZSByZWFkb25seSBhbGVydEN0cmw6IEFsZXJ0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvYXN0Q3RybDogVG9hc3RDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXNlclByb2ZpbGVTZXJ2aWNlOiBVc2VyUHJvZmlsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBmYlNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFsZXJ0Q29udHJvbGxlcjogQWxlcnRDb250cm9sbGVyLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50ZWFtID0gdGhpcy5uYXZQYXJhbXMuZ2V0KFwidGVhbVwiKTtcbiAgICBpZiAodGhpcy50ZWFtLnJvbGVzICYmIHRoaXMudGVhbS5yb2xlcy5sZW5naHQgPiAwKSB7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZWFtLnJvbGVzID0gW107XG4gICAgfVxuXG4gICAgdGhpcy50ZWFtJCA9IHRoaXMuZmJTZXJ2aWNlLmdldFRlYW1SZWYodGhpcy50ZWFtLmlkKTtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZVRlYW1NZW1iZXJzKCk7XG5cbiAgICB0aGlzLnRlYW1BZG1pbkxpc3QkID0gdGhpcy5mYlNlcnZpY2UuZ2V0VGVhbUFkbWluTGlzdCgpO1xuICAgIHRoaXMuY2x1YkFkbWluTGlzdCQgPSB0aGlzLmZiU2VydmljZS5nZXRDbHViQWRtaW5MaXN0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcblxuICB9XG5cbiAgZWRpdCgpIHtcblxuICAgIGlmICh0aGlzLmFsbG93RWRpdCkge1xuICAgICAgdGhpcy5hbGxvd0VkaXQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbGxvd0VkaXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGFkZFJvbGUoKSB7XG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiBcIk5ldWUgUm9sbGUgaGluenVmw7xnZW5cIixcbiAgICAgIG1lc3NhZ2U6IFwiRXJzdGVsbGUgZWluZSBuZXVlIFJvbGxlIGbDvHIgZGVpbiBUZWFtLlwiLFxuICAgICAgaW5wdXRzOiBbe1xuICAgICAgICBuYW1lOiBcInJvbGVcIixcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlZvcnN0YW5kLCBTcG9ydGNoZWYsLi4uXCIsXG4gICAgICAgIGlkOiBcInJvbGVcIlxuICAgICAgfV0sXG4gICAgICBidXR0b25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5jYW5jZWxcIikpLFxuICAgICAgICAgIGhhbmRsZXI6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbmNlbGxlZFwiLCBkYXRhKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJvbGU6IFwiY2FuY2VsXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5va1wiKSksXG4gICAgICAgICAgaGFuZGxlcjogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhLnJvbGUudHJpbSgpKSB7ICAvLyBDaGVjayBpZiB0aGUgcm9sZSBpcyBub3QganVzdCBlbXB0eSBzcGFjZXNcbiAgICAgICAgICAgICAgdGhpcy50ZWFtJC5waXBlKFxuICAgICAgICAgICAgICAgIHRha2UoMSlcbiAgICAgICAgICAgICAgKS5zdWJzY3JpYmUodGVhbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRlYW0gJiYgdGVhbS5yb2xlcykge1xuICAgICAgICAgICAgICAgICAgdGVhbS5yb2xlcy5wdXNoKGRhdGEucm9sZSk7XG4gICAgICAgICAgICAgICAgICB0aGlzLmZiU2VydmljZS5hZGRUZWFtUm9sZSh0ZWFtLmlkLCB0ZWFtLnJvbGVzKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSb2xlIGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBhZGQgcm9sZVwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5mYlNlcnZpY2UuYWRkVGVhbVJvbGUodGVhbS5pZCwgW2RhdGEucm9sZV0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJvbGUgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGFkZCByb2xlXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRlYW0gZGF0YSBpcyBtaXNzaW5nIG9yIGludmFsaWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgY2hhbmdlUm9sZU9mTWVtYmVyKHNsaWRpbmdJdGVtOiBJb25JdGVtU2xpZGluZywgbWVtYmVyKSB7XG4gICAgc2xpZGluZ0l0ZW0uY2xvc2VPcGVuZWQoKTtcblxuICAgIGxldCBhbGVydElucHV0cyA9IFtdO1xuICAgIHRoaXMudGVhbSQucGlwZShcbiAgICAgIHRha2UoMSlcbiAgICApLnN1YnNjcmliZShhc3luYyB0ZWFtID0+IHtcbiAgICAgIGZvciAoY29uc3Qgcm9sZSBvZiB0ZWFtLnJvbGVzKSB7XG4gICAgICAgIGFsZXJ0SW5wdXRzLnB1c2goe1xuICAgICAgICAgIGxhYmVsOiByb2xlLFxuICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgdmFsdWU6IHJvbGUsXG4gICAgICAgICAgY2hlY2tlZDogbWVtYmVyLnJvbGVzLmZpbmQobWVtYmVyUm9sZSA9PiBtZW1iZXJSb2xlID09IHJvbGUpXG4gICAgICAgIH0sKVxuICAgICAgfVxuXG5cbiAgICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydEN0cmwuY3JlYXRlKHtcbiAgICAgICAgaGVhZGVyOiBcIlJvbGxlbiB2b24gTWl0Z2xpZWQgYmVhcmJlaXRlblwiLFxuICAgICAgICBpbnB1dHM6IGFsZXJ0SW5wdXRzLFxuICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uY2FuY2VsXCIpKSxcbiAgICAgICAgICAgIGhhbmRsZXI6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FuY2VsbGVkXCIsIGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJvbGU6IFwiY2FuY2VsXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5va1wiKSksXG4gICAgICAgICAgICBoYW5kbGVyOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICB0aGlzLmZiU2VydmljZS5hZGRUZWFtTWVtYmVyUm9sZSh0ZWFtLmlkLCBtZW1iZXIuaWQsIGRhdGEpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUm9sZSBhZGRlZCBzdWNjZXNzZnVsbHlcIik7XG4gICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGFkZCByb2xlXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgfSk7XG5cbiAgICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcbiAgICB9KVxuICB9XG5cblxuICBzZXRGaWx0ZXIocm9sZSkge1xuICAgIHRoaXMuaGFuZGxlU2VhcmNoKHsgZGV0YWlsOiB7IHZhbHVlOiByb2xlIH0gfSlcbiAgfVxuXG5cbiAgaW5pdGlhbGl6ZVRlYW1NZW1iZXJzKCkge1xuICAgIHRoaXMuZ3JvdXBBcnJheSA9IFtdOyAgLy8gSW5pdGlhbGl6ZSBvciBjbGVhciB0aGUgZ3JvdXAgYXJyYXlcblxuICAgIHRoaXMudGVhbU1lbWJlcnMkID0gdGhpcy5mYlNlcnZpY2UuZ2V0VGVhbU1lbWJlclJlZnModGhpcy50ZWFtLmlkKS5waXBlKFxuICAgICAgLy8gdGFwKCgpID0+IGNvbnNvbGUubG9nKFwiRmV0Y2hpbmcgdGVhbSBtZW1iZXJzXCIpKSxcbiAgICAgIHN3aXRjaE1hcChtZW1iZXJzID0+IHtcbiAgICAgICAgaWYgKG1lbWJlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJObyB0ZWFtIG1lbWJlcnMgZm91bmQuXCIpO1xuICAgICAgICAgIHRoaXMuZ3JvdXBBcnJheSA9IFtdO1xuICAgICAgICAgIHJldHVybiBvZihbXSk7IC8vIEVtaXQgYW4gZW1wdHkgYXJyYXkgdG8ga2VlcCB0aGUgb2JzZXJ2YWJsZSBhbGl2ZVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2ZpbGVzJCA9IG1lbWJlcnMubWFwKG1lbWJlciA9PlxuICAgICAgICAgIHRoaXMudXNlclByb2ZpbGVTZXJ2aWNlLmdldFVzZXJQcm9maWxlQnlJZChtZW1iZXIuaWQpLnBpcGUoXG4gICAgICAgICAgICBtYXAocHJvZmlsZSA9PiAoe1xuICAgICAgICAgICAgICAuLi5tZW1iZXIsIC8vIFNwcmVhZCBtZW1iZXIgdG8gcmV0YWluIGFsbCBvcmlnaW5hbCBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgIC4uLnByb2ZpbGUsIC8vIFNwcmVhZCBwcm9maWxlIHRvIG92ZXJ3cml0ZSBhbmQgYWRkIHByb2ZpbGUgYXR0cmlidXRlc1xuICAgICAgICAgICAgICBmaXJzdE5hbWU6IHByb2ZpbGUuZmlyc3ROYW1lIHx8IFwiVW5rbm93blwiLFxuICAgICAgICAgICAgICBsYXN0TmFtZTogcHJvZmlsZS5sYXN0TmFtZSB8fCBcIlVua25vd25cIixcbiAgICAgICAgICAgICAgcm9sZXM6IG1lbWJlci5yb2xlcyB8fCBbXVxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZih7XG4gICAgICAgICAgICAgIC4uLm1lbWJlcixcbiAgICAgICAgICAgICAgZmlyc3ROYW1lOiBcIlVua25vd25cIixcbiAgICAgICAgICAgICAgbGFzdE5hbWU6IFwiVW5rbm93blwiLFxuICAgICAgICAgICAgICByb2xlczogbWVtYmVyLnJvbGVzIHx8IFtdIC8vIEVuc3VyZSByb2xlIG9yIG90aGVyIGF0dHJpYnV0ZXMgYXJlIGluY2x1ZGVkIGV2ZW4gaW4gZXJyb3JcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QocHJvZmlsZXMkKS5waXBlKFxuICAgICAgICAgIG1hcChwcm9maWxlcyA9PiBwcm9maWxlc1xuICAgICAgICAgICAgLmZpbHRlcihwcm9maWxlID0+IHByb2ZpbGUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmZpcnN0TmFtZS5sb2NhbGVDb21wYXJlKGIuZmlyc3ROYW1lKSlcbiAgICAgICAgICAgIC5tYXAocHJvZmlsZSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGdyb3VwQnlDaGFyID0gcHJvZmlsZS5maXJzdE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5ncm91cEFycmF5LmluY2x1ZGVzKGdyb3VwQnlDaGFyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXBBcnJheS5wdXNoKGdyb3VwQnlDaGFyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByb2ZpbGUsXG4gICAgICAgICAgICAgICAgZ3JvdXBCeTogZ3JvdXBCeUNoYXIsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgVGVhbiBtZW1iZXJzOlwiLCBlcnIpO1xuICAgICAgICByZXR1cm4gb2YoW10pOyAvLyBFbWl0IGFuIGVtcHR5IGFycmF5IG9uIGVycm9yXG4gICAgICB9KSxcbiAgICAgIC8vIHNoYXJlUmVwbGF5KDEpIC8vIENhY2hlIHRoZSBsYXRlc3QgdmFsdWUgZm9yIG5ldyBzdWJzY3JpYmVyc1xuICAgICk7XG5cblxuICAgIHRoaXMuZmlsdGVyZWRUZWFtTWVtYmVycyQgPSBjb21iaW5lTGF0ZXN0KFt0aGlzLnRlYW1NZW1iZXJzJCwgdGhpcy5zZWFyY2hUZXJtXSkucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgzMDApLFxuICAgICAgbWFwKChbbWVtYmVycywgdGVybV0pID0+IHtcbiAgICAgICAgaWYgKCF0ZXJtKSByZXR1cm4gbWVtYmVycztcblxuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IG1lbWJlcnMuZmlsdGVyKG1lbWJlciA9PlxuICAgICAgICAgIG1lbWJlci5maXJzdE5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXJtLnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgICAgbWVtYmVyLmxhc3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGVybS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIG1lbWJlci5yb2xlcy5maW5kKHJvbGUgPT4gcm9sZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm0udG9Mb3dlckNhc2UoKSkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZDtcbiAgICAgIH0pLFxuICAgICAgbWFwKGZpbHRlcmVkID0+IHtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBncm91cEFycmF5XG4gICAgICAgIHRoaXMuZ3JvdXBBcnJheSA9IFtdO1xuICAgICAgICBmaWx0ZXJlZC5mb3JFYWNoKG1lbWJlciA9PiB7XG4gICAgICAgICAgY29uc3QgZ3JvdXBCeUNoYXIgPSBtZW1iZXIuZmlyc3ROYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIGlmICghdGhpcy5ncm91cEFycmF5LmluY2x1ZGVzKGdyb3VwQnlDaGFyKSkge1xuICAgICAgICAgICAgdGhpcy5ncm91cEFycmF5LnB1c2goZ3JvdXBCeUNoYXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZDtcbiAgICAgIH0pLFxuICAgICAgdGFwKGZpbHRlcmVkID0+IGNvbnNvbGUubG9nKFwiRmlsdGVyZWQgbWVtYmVyczpcIiwgZmlsdGVyZWQubGVuZ3RoKSksXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmaWx0ZXJpbmcgbWVtYmVyczpcIiwgZXJyKTtcbiAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaChldmVudDogYW55KSB7XG4gICAgY29uc3Qgc2VhcmNoVGVybSA9IGV2ZW50LmRldGFpbC52YWx1ZSB8fCAnJztcbiAgICB0aGlzLnNlYXJjaFRlcm0ubmV4dChzZWFyY2hUZXJtKTsgLy8gVXBkYXRlIHRoZSBCZWhhdmlvclN1YmplY3Qgd2l0aCB0aGUgbmV3IHNlYXJjaCB0ZXJtXG4gIH1cblxuICBpc1RlYW1BZG1pbih0ZWFtQWRtaW5MaXN0OiBhbnlbXSwgdGVhbUlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGVhbUFkbWluTGlzdCAmJiB0ZWFtQWRtaW5MaXN0LnNvbWUodGVhbSA9PiB0ZWFtLmlkID09PSB0ZWFtSWQpO1xuICB9XG5cbiAgaXNDbHViQWRtaW4odGVhbUFkbWluTGlzdDogYW55W10sIHRlYW1JZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRlYW1BZG1pbkxpc3QgJiYgdGVhbUFkbWluTGlzdC5zb21lKHRlYW0gPT4gdGVhbS5pZCA9PT0gdGVhbUlkKTtcbiAgfVxuXG4gIGFzeW5jIGFkZE1lbWJlclRvVGVhbSgpIHtcbiAgICBpZiAoIXRoaXMudGVhbSB8fCAhdGhpcy50ZWFtLmNsdWJJZCkge1xuICAgICAgY29uc29sZS5lcnJvcignTm8gdmFsaWQgdGVhbSBvciB0ZWFtIHJlZmVyZW5jZSBmb3VuZC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIFxuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZygnRmV0Y2hpbmcgbWVtYmVycyBmb3IgY2x1YiBJRDonLCB0aGlzLnRlYW0uY2x1YklkKTtcbiAgICAgIGNvbnN0IG1lbWJlcnMgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgICB0aGlzLmZiU2VydmljZS5nZXRDbHViTWVtYmVyUmVmcyh0aGlzLnRlYW0uY2x1YklkKS5waXBlKFxuICAgICAgICAgIGZpcnN0KCkgIC8vIFRha2VzIHRoZSBmaXJzdCBlbWl0dGVkIHZhbHVlIHRoZW4gY29tcGxldGVzXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZygnTWVtYmVycyBmZXRjaGVkOicsIG1lbWJlcnMubGVuZ3RoKTtcbiAgXG4gICAgICBpZiAoIW1lbWJlcnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdObyB0ZWFtIG1lbWJlcnMgZm91bmQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgXG4gICAgICBjb25zdCBwcm9maWxlcyA9IGF3YWl0IFByb21pc2UuYWxsKG1lbWJlcnMubWFwKG1lbWJlciA9PlxuICAgICAgICBsYXN0VmFsdWVGcm9tKHRoaXMudXNlclByb2ZpbGVTZXJ2aWNlLmdldFVzZXJQcm9maWxlQnlJZChtZW1iZXIuaWQpLnBpcGUoXG4gICAgICAgICAgZmlyc3QoKSxcbiAgICAgICAgICAvL3RhcChwcm9maWxlcz0+Y29uc29sZS5sb2cocHJvZmlsZXMpKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBmZXRjaGluZyBwcm9maWxlIGZvciAke21lbWJlci5pZH06YCwgZXJyKTtcbiAgICAgICAgICAgIHJldHVybiBvZih7IC4uLm1lbWJlciwgZmlyc3ROYW1lOiAnVW5rbm93bicsIGxhc3ROYW1lOiAnVW5rbm93bicgfSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKSlcbiAgICAgICkpO1xuICBcbiAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZmlsZXMgPSBwcm9maWxlcy5maWx0ZXIocHJvZmlsZSA9PiBwcm9maWxlICE9PSB1bmRlZmluZWQpO1xuICAgICAgY29uc29sZS5sb2coZmlsdGVyZWRQcm9maWxlcylcbiAgICAgIGNvbnN0IG5ld1RlYW1NZW1iZXJzID0gdGhpcy5maWx0ZXJOZXdUZWFtTWVtYmVycyhmaWx0ZXJlZFByb2ZpbGVzLCBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudGVhbU1lbWJlcnMkLnBpcGUodGFrZSgxKSkpKTtcbiAgICAgIGNvbnNvbGUubG9nKG5ld1RlYW1NZW1iZXJzKVxuICAgICAgY29uc3QgbWVtYmVyU2VsZWN0T3B0aW9ucyA9IHRoaXMucHJlcGFyZU1lbWJlclNlbGVjdE9wdGlvbnMobmV3VGVhbU1lbWJlcnMpO1xuICAgICAgY29uc29sZS5sb2cobWVtYmVyU2VsZWN0T3B0aW9ucykgIFxuICAgICAgaWYgKG1lbWJlclNlbGVjdE9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCB0aGlzLnNob3dBZGRNZW1iZXJBbGVydChtZW1iZXJTZWxlY3RPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBuZXcgbWVtYmVycyBhdmFpbGFibGUgdG8gYWRkLicpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYWRkTWVtYmVyVG9UZWFtOicsIGVycik7XG4gICAgfVxuICB9XG4gIFxuICBmaWx0ZXJOZXdUZWFtTWVtYmVycyhwcm9maWxlcywgdGVhbU1lbWJlcnMpIHtcbiAgICByZXR1cm4gcHJvZmlsZXMuZmlsdGVyKG1lbWJlciA9PlxuICAgICAgIXRlYW1NZW1iZXJzLnNvbWUodGVhbU1lbWJlciA9PiB0ZWFtTWVtYmVyLmlkID09PSBtZW1iZXIuaWQpXG4gICAgKTtcbiAgfVxuXG4gIHByZXBhcmVNZW1iZXJTZWxlY3RPcHRpb25zKGZpbHRlcmVkTWVtYmVycykge1xuICAgIC8vIFNvcnQgbWVtYmVycyBhbHBoYWJldGljYWxseSBieSBmaXJzdE5hbWUsIHRoZW4gYnkgbGFzdE5hbWVcbiAgICBjb25zdCBzb3J0ZWRNZW1iZXJzID0gZmlsdGVyZWRNZW1iZXJzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IG5hbWVBID0gYCR7YS5maXJzdE5hbWV9ICR7YS5sYXN0TmFtZX1gLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCBuYW1lQiA9IGAke2IuZmlyc3ROYW1lfSAke2IubGFzdE5hbWV9YC50b0xvd2VyQ2FzZSgpO1xuICAgICAgcmV0dXJuIG5hbWVBLmxvY2FsZUNvbXBhcmUobmFtZUIpO1xuICAgIH0pO1xuXG4gICAgLy8gTWFwIHNvcnRlZCBtZW1iZXJzIHRvIGNoZWNrYm94IG9wdGlvbnNcbiAgICByZXR1cm4gc29ydGVkTWVtYmVycy5tYXAobWVtYmVyID0+ICh7XG4gICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgbmFtZTogbWVtYmVyLmlkLFxuICAgICAgbGFiZWw6IGAke21lbWJlci5maXJzdE5hbWV9ICR7bWVtYmVyLmxhc3ROYW1lfWAsXG4gICAgICB2YWx1ZTogbWVtYmVyLmlkLFxuICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgfSkpO1xuICB9XG5cbiAgYXN5bmMgc2hvd0FkZE1lbWJlckFsZXJ0KG1lbWJlclNlbGVjdCkge1xuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydEN0cmwuY3JlYXRlKHtcbiAgICAgIGhlYWRlcjogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uYWRkTWVtYmVyXCIpKSxcbiAgICAgIGlucHV0czogbWVtYmVyU2VsZWN0LFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uY2FuY2VsXCIpKSxcbiAgICAgICAgICByb2xlOiAnY2FuY2VsJyxcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FuY2VsIGNsaWNrZWQnKSxcbiAgICAgICAgICAgIHRoaXMudG9hc3RBY3Rpb25DYW5jZWxlZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uYWRkXCIpKSxcbiAgICAgICAgICBoYW5kbGVyOiAoc2VsZWN0ZWRNZW1iZXJzKSA9PiB7XG4gICAgICAgICAgICBzZWxlY3RlZE1lbWJlcnMuZm9yRWFjaChtZW1iZXJJZCA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lbWJlcklkKVxuICAgICAgICAgICAgICB0aGlzLmFwcHJvdmVUZWFtUmVxdWVzdCh0aGlzLnRlYW0uaWQsIG1lbWJlcklkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcbiAgfVxuXG5cbiAgYXN5bmMgYXBwcm92ZVRlYW1SZXF1ZXN0KHRlYW1JZCwgbWVtYmVySWQpIHtcbiAgIFxuICAgIGF3YWl0IHRoaXMuZmJTZXJ2aWNlLmFwcHJvdmVVc2VyVGVhbVJlcXVlc3QodGVhbUlkLCBtZW1iZXJJZCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnRvYXN0QWN0aW9uU2F2ZWQoKTtcbiAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdGhpcy50b2FzdEFjdGlvbkVycm9yKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG5cblxuXG5cbiAgYXN5bmMgZGVsZXRlVGVhbU1lbWJlcihtZW1iZXIpIHtcbiAgIFxuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20oXG4gICAgICAgIHRoaXMudHJhbnNsYXRlLmdldChcInRlYW0tbWVtYmVyLWxpc3QuZGVsZXRlX21lbWJlcl9fY29uZmlybVwiKVxuICAgICAgKSxcbiAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHJvbGU6IFwiZGVzdHJ1Y3RpdmVcIixcbiAgICAgICAgICB0ZXh0OiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5ub1wiKSksXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZWluXCIpO1xuICAgICAgICAgICAgdGhpcy5wcmVzZW50Q2FuY2VsVG9hc3QoKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24ueWVzXCIpKSxcbiAgICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmJTZXJ2aWNlLmRlbGV0ZVRlYW1NZW1iZXIodGhpcy50ZWFtLmlkLCBtZW1iZXIuaWQpO1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnRvYXN0QWN0aW9uU2F2ZWQoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgdGhpcy50b2FzdEFjdGlvbkVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgIF0sXG4gICAgfSk7XG4gICAgYWxlcnQucHJlc2VudCgpO1xuXG5cblxuICB9XG5cblxuICBhc3luYyBvcGVuTWVtYmVyKG1lbWJlcjogUHJvZmlsZSkge1xuICAgIGNvbnNvbGUubG9nKFwib3Blbk1lbWJlclwiKTtcbiAgICBjb25zdCBtb2RhbCA9IGF3YWl0IHRoaXMubW9kYWxDdHJsLmNyZWF0ZSh7XG4gICAgICBjb21wb25lbnQ6IE1lbWJlclBhZ2UsXG4gICAgICBwcmVzZW50aW5nRWxlbWVudDogYXdhaXQgdGhpcy5tb2RhbEN0cmwuZ2V0VG9wKCksXG4gICAgICBjYW5EaXNtaXNzOiB0cnVlLFxuICAgICAgc2hvd0JhY2tkcm9wOiB0cnVlLFxuICAgICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgZGF0YTogbWVtYmVyLFxuICAgICAgICB0ZWFtSWQ6IHRoaXMudGVhbS5pZCxcbiAgICAgICAgY2x1YklkOiB0aGlzLnRlYW0uY2x1YklkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBtb2RhbC5wcmVzZW50KCk7XG5cbiAgICBjb25zdCB7IGRhdGEsIHJvbGUgfSA9IGF3YWl0IG1vZGFsLm9uV2lsbERpc21pc3MoKTtcblxuICAgIGlmIChyb2xlID09PSBcImNvbmZpcm1cIikge1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHRvYXN0QWN0aW9uU2F2ZWQoKSB7XG4gICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24uc3VjY2Vzc19fc2F2ZWRcIikpLFxuICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIixcbiAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICB9KTtcblxuICAgIGF3YWl0IHRvYXN0LnByZXNlbnQoKTtcbiAgfVxuICBhc3luYyBwcmVzZW50Q2FuY2VsVG9hc3QoKSB7XG4gICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KFwib25ib2FyZGluZy53YXJuaW5nX19hY3Rpb25fY2FuY2VsZWRcIilcbiAgICAgICksXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gIH1cbiAgYXN5bmMgdG9hc3RBY3Rpb25DYW5jZWxlZCgpIHtcbiAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDdHJsLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcInRlYW0uYWN0aW9uX19jYW5jZWxlZFwiKSksXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgfSk7XG4gICAgYXdhaXQgdG9hc3QucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgdG9hc3RBY3Rpb25FcnJvcihlcnJvcikge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdEN0cmwuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gIH1cblxuICBhc3luYyBjbG9zZSgpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RhbEN0cmwuZGlzbWlzcyhudWxsLCBcImNsb3NlXCIpO1xuICB9XG5cbiAgYXN5bmMgY29uZmlybSgpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5tb2RhbEN0cmwuZGlzbWlzcyh0aGlzLnRlYW0sIFwiY29uZmlybVwiKTtcbiAgfVxufVxuIiwgIjxuZy1jb250YWluZXIgKm5nSWY9XCJ0ZWFtJCB8IGFzeW5jIGFzIHRlYW07IGVsc2UgbG9hZGluZ1wiPlxuICA8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxuICAgIDxpb24tdG9vbGJhcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0ZWFtQWRtaW5MaXN0JCB8IGFzeW5jIGFzIHRlYW1BZG1pbkxpc3RcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNsdWJBZG1pbkxpc3QkIHwgYXN5bmMgYXMgY2x1YkFkbWluTGlzdFwiPlxuICAgICAgICAgIDxpb24tYnV0dG9ucyBzbG90PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICpuZ0lmPVwiaXNUZWFtQWRtaW4odGVhbUFkbWluTGlzdCwgdGVhbS5pZCkgfHzCoGlzQ2x1YkFkbWluKGNsdWJBZG1pbkxpc3QsIHRlYW0uY2x1YklkKVwiPlxuICAgICAgICAgICAgPGlvbi1idXR0b24gKm5nSWY9XCIhYWxsb3dFZGl0XCIgKGNsaWNrKT1cImVkaXQoKVwiPnt7XCJjb21tb24uZWRpdFwiIHwgdHJhbnNsYXRlfX08L2lvbi1idXR0b24+XG4gICAgICAgICAgICA8aW9uLWJ1dHRvbiAqbmdJZj1cImFsbG93RWRpdFwiIChjbGljayk9XCJlZGl0KClcIj57e1wiY29tbW9uLmRvbmVcIiB8IHRyYW5zbGF0ZX19PC9pb24tYnV0dG9uPlxuICAgICAgICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8aW9uLXRpdGxlPnt7XCJjb21tb24ubWVtYmVyc1wiIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgICAgIDxpb24tYnV0dG9ucyBzbG90PVwicHJpbWFyeVwiPlxuICAgICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwiY2xvc2UoKVwiPnt7XCJjb21tb24uY2xvc2VcIiB8IHRyYW5zbGF0ZX19PC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24tYnV0dG9ucz5cbiAgICA8L2lvbi10b29sYmFyPlxuICA8L2lvbi1oZWFkZXI+XG5cbiAgPGlvbi1jb250ZW50IFtmdWxsc2NyZWVuXT1cInRydWVcIj5cbiAgICA8aW9uLWhlYWRlciBjb2xsYXBzZT1cImNvbmRlbnNlXCI+XG4gICAgICA8aW9uLXRvb2xiYXI+XG4gICAgICAgIDxpb24tdGl0bGUgc2l6ZT1cImxhcmdlXCI+e3tcImNvbW1vbi5tZW1iZXJzXCIgfCB0cmFuc2xhdGV9fTwvaW9uLXRpdGxlPlxuICAgICAgPC9pb24tdG9vbGJhcj5cbiAgICA8L2lvbi1oZWFkZXI+XG5cblxuICAgIDxpb24tc2VhcmNoYmFyIFtkZWJvdW5jZV09XCIxMDAwXCIgKGlvbkNoYW5nZSk9XCJoYW5kbGVTZWFyY2goJGV2ZW50KVwiIGFuaW1hdGVkPVwidHJ1ZVwiIHNlYXJjaC1pY29uPVwic2VhcmNoLWNpcmNsZVwiXG4gICAgICBbdmFsdWVdPVwic2VhcmNoVGVybS52YWx1ZVwiIHBsYWNlaG9sZGVyPSd7e1wiY29tbW9uLnNlYXJjaGZpZWxkXCIgfCB0cmFuc2xhdGV9fSc+PC9pb24tc2VhcmNoYmFyPlxuXG4gICAgPGRpdiBjbGFzcz1cImlvbi1wYWRkaW5nXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGVhbUFkbWluTGlzdCQgfCBhc3luYyBhcyB0ZWFtQWRtaW5MaXN0XCI+XG4gICAgICAgIDxpb24tYnV0dG9uICpuZ0lmPVwiaXNUZWFtQWRtaW4odGVhbUFkbWluTGlzdCwgdGVhbS5pZClcIiBzaGFwZT1cInJvdW5kXCIgc2l6ZT1cInNtYWxsXCIgKGNsaWNrKT1cImFkZFJvbGUoKVwiPlxuICAgICAgICAgIGhpbnp1ZsO8Z2VuXG4gICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJhZGQtY2lyY2xlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJzZXRGaWx0ZXIocm9sZSlcIiBzaGFwZT1cInJvdW5kXCIgc2l6ZT1cInNtYWxsXCIgKm5nRm9yPVwibGV0IHJvbGUgb2YgdGVhbVsncm9sZXMnXVwiPlxuICAgICAgICB7e3JvbGV9fVxuICAgICAgPC9pb24tYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCIgKm5nSWY9XCJmaWx0ZXJlZFRlYW1NZW1iZXJzJCB8IGFzeW5jIGFzIHRlYW1NZW1iZXJMaXN0XCI+XG4gICAgICA8aW9uLWl0ZW0tZ3JvdXA+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGdyb3VwQnkgb2YgZ3JvdXBBcnJheVwiPlxuICAgICAgICAgIDxpb24taXRlbS1kaXZpZGVyIGNvbG9yPVwibGlnaHRcIj5cbiAgICAgICAgICAgIDxpb24tbGFiZWw+IHt7Z3JvdXBCeX19IDwvaW9uLWxhYmVsPlxuICAgICAgICAgIDwvaW9uLWl0ZW0tZGl2aWRlcj5cblxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG1lbWJlciBvZiB0ZWFtTWVtYmVyTGlzdFwiPlxuXG4gICAgICAgICAgICA8aW9uLWl0ZW0tc2xpZGluZyAjaXRlbSAqbmdJZj1cIm1lbWJlci5ncm91cEJ5ID09IGdyb3VwQnlcIj5cblxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGVhbUFkbWluTGlzdCQgfCBhc3luYyBhcyB0ZWFtQWRtaW5MaXN0XCI+XG4gICAgICAgICAgICAgICAgPGlvbi1pdGVtLW9wdGlvbnMgKm5nSWY9XCJpc1RlYW1BZG1pbih0ZWFtQWRtaW5MaXN0LCB0ZWFtLmlkKVwiIHNpZGU9XCJlbmRcIj5cbiAgICAgICAgICAgICAgICAgIDxpb24taXRlbS1vcHRpb24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImNoYW5nZVJvbGVPZk1lbWJlcihpdGVtLCBtZW1iZXIpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cInByaWNldGFncy1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9ucz5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgPGlvbi1pdGVtIGRldGFpbD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJhbGxvd0VkaXQ9PXRydWVcIiBzbG90PVwiaWNvbi1vbmx5XCIgY29sb3I9XCJkYW5nZXJcIiBzbG90PVwic3RhcnRcIiBuYW1lPVwidHJhc2hcIlxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImRlbGV0ZVRlYW1NZW1iZXIobWVtYmVyKVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgICAgPGlvbi1hdmF0YXIgc2xvdD1cInN0YXJ0XCIgKGNsaWNrKT1cIm9wZW5NZW1iZXIobWVtYmVyKVwiPlxuICAgICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cIiFtZW1iZXIucHJvZmlsZVBpY3R1cmVcIiBhbHQ9XCJTaWxob3VldHRlIG9mIGEgcGVyc29uJ3MgaGVhZFwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvaW1nL2RlbW9zL2F2YXRhci5zdmdcIiAvPlxuICAgICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cIm1lbWJlci5wcm9maWxlUGljdHVyZVwiIHNyYz1cInt7bWVtYmVyPy5wcm9maWxlUGljdHVyZX19XCIgLz5cbiAgICAgICAgICAgICAgICA8L2lvbi1hdmF0YXI+XG4gICAgICAgICAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIiAoY2xpY2spPVwib3Blbk1lbWJlcihtZW1iZXIpXCI+e3ttZW1iZXIuZmlyc3ROYW1lfX1cbiAgICAgICAgICAgICAgICAgIHt7bWVtYmVyLmxhc3ROYW1lfX08L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW9uLWJhZGdlICpuZ0Zvcj1cImxldCByb2xlIG9mIG1lbWJlci5yb2xlc1wiIHNsb3Q9XCJlbmRcIj57e3JvbGV9fTwvaW9uLWJhZGdlPlxuICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgICAgPC9pb24taXRlbS1zbGlkaW5nPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvaW9uLWl0ZW0tZ3JvdXA+XG4gICAgPC9pb24tbGlzdD5cblxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRlYW1BZG1pbkxpc3QkIHwgYXN5bmMgYXMgdGVhbUFkbWluTGlzdFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNsdWJBZG1pbkxpc3QkIHwgYXN5bmMgYXMgY2x1YkFkbWluTGlzdFwiPlxuICAgICAgICA8aW9uLWZhYiAqbmdJZj1cImlzVGVhbUFkbWluKHRlYW1BZG1pbkxpc3QsIHRlYW0uaWQpIHx8wqBpc0NsdWJBZG1pbihjbHViQWRtaW5MaXN0LCB0ZWFtLmNsdWJJZClcIlxuICAgICAgICAgIHZlcnRpY2FsPVwiYm90dG9tXCIgaG9yaXpvbnRhbD1cImVuZFwiIHNsb3Q9XCJmaXhlZFwiPlxuICAgICAgICAgIDxpb24tZmFiLWJ1dHRvbiAoY2xpY2spPVwiYWRkTWVtYmVyVG9UZWFtKClcIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiYWRkLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDwvaW9uLWZhYi1idXR0b24+XG4gICAgICAgIDwvaW9uLWZhYj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2lvbi1jb250ZW50PlxuPC9uZy1jb250YWluZXI+XG5cblxuXG48bmctdGVtcGxhdGUgI2xvYWRpbmc+XG4gIDxpb24taGVhZGVyIFt0cmFuc2x1Y2VudF09XCJ0cnVlXCI+XG4gICAgPGlvbi10b29sYmFyPlxuXG4gICAgICA8aW9uLXRpdGxlPnt7XCJjb21tb24ubWVtYmVyc1wiIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgICAgIDxpb24tYnV0dG9ucyBzbG90PVwicHJpbWFyeVwiPlxuICAgICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwiY2xvc2UoKVwiPnt7XCJjb21tb24uY2xvc2VcIiB8IHRyYW5zbGF0ZX19PC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24tYnV0dG9ucz5cbiAgICA8L2lvbi10b29sYmFyPlxuICA8L2lvbi1oZWFkZXI+XG5cbiAgPGlvbi1jb250ZW50IFtmdWxsc2NyZWVuXT1cInRydWVcIj5cbiAgICA8aW9uLWhlYWRlciBjb2xsYXBzZT1cImNvbmRlbnNlXCI+XG4gICAgICA8aW9uLXRvb2xiYXI+XG4gICAgICAgIDxpb24tdGl0bGUgc2l6ZT1cImxhcmdlXCI+e3tcImNvbW1vbi5tZW1iZXJzXCIgfCB0cmFuc2xhdGV9fTwvaW9uLXRpdGxlPlxuICAgICAgPC9pb24tdG9vbGJhcj5cbiAgICA8L2lvbi1oZWFkZXI+XG5cbiAgICA8aW9uLXNlYXJjaGJhciBbZGVib3VuY2VdPVwiMTAwMFwiIChpb25DaGFuZ2UpPVwiaGFuZGxlU2VhcmNoKCRldmVudClcIiBhbmltYXRlZD1cInRydWVcIiBzZWFyY2gtaWNvbj1cInNlYXJjaC1jaXJjbGVcIlxuICAgICAgcGxhY2Vob2xkZXI9J3t7XCJjb21tb24uc2VhcmNoZmllbGRcIiB8IHRyYW5zbGF0ZX19Jz48L2lvbi1zZWFyY2hiYXI+XG5cbiAgICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIj5cblxuICAgICAgPGlvbi1pdGVtLWdyb3VwPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBncm91cEJ5IG9mIGdyb3VwQXJyYXlcIj5cbiAgICAgICAgICA8aW9uLWl0ZW0tZGl2aWRlciBjb2xvcj1cImxpZ2h0XCI+XG4gICAgICAgICAgICA8aW9uLWxhYmVsPiB7e2dyb3VwQnl9fSA8L2lvbi1sYWJlbD5cbiAgICAgICAgICA8L2lvbi1pdGVtLWRpdmlkZXI+XG5cblxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvaW9uLWl0ZW0tZ3JvdXA+XG4gICAgPC9pb24tbGlzdD5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGVhbUFkbWluTGlzdCQgfCBhc3luYyBhcyB0ZWFtQWRtaW5MaXN0XCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2x1YkFkbWluTGlzdCQgfCBhc3luYyBhcyBjbHViQWRtaW5MaXN0XCI+XG4gICAgICAgIDxpb24tZmFiICpuZ0lmPVwiaXNUZWFtQWRtaW4odGVhbUFkbWluTGlzdCwgdGVhbS5pZCkgfHzCoGlzQ2x1YkFkbWluKGNsdWJBZG1pbkxpc3QsIHRlYW0uY2x1YklkKVwiXG4gICAgICAgICAgdmVydGljYWw9XCJib3R0b21cIiBob3Jpem9udGFsPVwiZW5kXCIgc2xvdD1cImZpeGVkXCI+XG4gICAgICAgICAgPGlvbi1mYWItYnV0dG9uIChjbGljayk9XCJhZGRNZW1iZXJUb1RlYW0oKVwiPlxuICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJhZGQtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgPC9pb24tZmFiLWJ1dHRvbj5cbiAgICAgICAgPC9pb24tZmFiPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvaW9uLWNvbnRlbnQ+XG5cblxuPC9uZy10ZW1wbGF0ZT4iLCAiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBBbGVydENvbnRyb2xsZXIsXG4gIE1vZGFsQ29udHJvbGxlcixcbiAgTmF2UGFyYW1zLFxuICBUb2FzdENvbnRyb2xsZXIsXG59IGZyb20gXCJAaW9uaWMvYW5ndWxhclwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkJlaGF2aW9yT3B0aW9ucyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7XG4gIE9ic2VydmFibGUsXG4gIFN1YnNjcmlwdGlvbixcbiAgY2F0Y2hFcnJvcixcbiAgY29tYmluZUxhdGVzdCxcbiAgY29uY2F0LFxuICBjb25jYXRBbGwsXG4gIGNvbmNhdE1hcCxcbiAgZGVmYXVsdElmRW1wdHksXG4gIGZpbmFsaXplLFxuICBmb3JrSm9pbixcbiAgZnJvbSxcbiAgbGFzdFZhbHVlRnJvbSxcbiAgbWFwLFxuICBtZXJnZSxcbiAgbWVyZ2VNYXAsXG4gIG9mLFxuICBzaGFyZVJlcGxheSxcbiAgc3RhcnRXaXRoLFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbiAgdGltZW91dCxcbiAgdG9BcnJheSxcbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IEJyb3dzZXIgfSBmcm9tIFwiQGNhcGFjaXRvci9icm93c2VyXCI7XG5pbXBvcnQgeyBUZWFtIH0gZnJvbSBcInNyYy9hcHAvbW9kZWxzL3RlYW1cIjtcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwic3JjL2FwcC9tb2RlbHMvdXNlclwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFVzZXJQcm9maWxlU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2ZpcmViYXNlL3VzZXItcHJvZmlsZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBNZW1iZXJQYWdlIH0gZnJvbSBcIi4uLy4uL21lbWJlci9tZW1iZXIucGFnZVwiO1xuaW1wb3J0IHsgVGVhbUFkbWluTGlzdFBhZ2UgfSBmcm9tIFwiLi4vLi4vdGVhbS1hZG1pbi1saXN0L3RlYW0tYWRtaW4tbGlzdC5wYWdlXCI7XG5pbXBvcnQgeyBUZWFtTWVtYmVyTGlzdFBhZ2UgfSBmcm9tIFwiLi4vLi4vdGVhbS1tZW1iZXItbGlzdC90ZWFtLW1lbWJlci1saXN0LnBhZ2VcIjtcbmltcG9ydCB7IFRpbWVzdGFtcCB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IENsdWIgfSBmcm9tIFwic3JjL2FwcC9tb2RlbHMvY2x1YlwiO1xuaW1wb3J0IHsgVGVhbUV4ZXJjaXNlc1BhZ2UgfSBmcm9tIFwiLi4vdGVhbS1leGVyY2lzZXMvdGVhbS1leGVyY2lzZXMucGFnZVwiO1xuaW1wb3J0IHsgQ2hhbXBpb25zaGlwUGFnZSB9IGZyb20gXCIuLi8uLi9jaGFtcGlvbnNoaXAvY2hhbXBpb25zaGlwL2NoYW1waW9uc2hpcC5wYWdlXCI7XG5pbXBvcnQgeyBUcmFpbmluZ3NQYWdlIH0gZnJvbSBcIi4uLy4uL3RyYWluaW5nL3RyYWluaW5ncy90cmFpbmluZ3MucGFnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtdGVhbVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdGVhbS5wYWdlLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vdGVhbS5wYWdlLnNjc3NcIl0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgVGVhbVBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoXCJkYXRhXCIpIHRlYW06IFRlYW07XG5cbiAgdGVhbSQ6IE9ic2VydmFibGU8YW55PjtcblxuICBhbGxvd0VkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBtZW1iZXJMaXN0JDogT2JzZXJ2YWJsZTxQcm9maWxlW10+O1xuICBhZG1pbkxpc3QkOiBPYnNlcnZhYmxlPFByb2ZpbGVbXT47XG4gIHJlcXVlc3RMaXN0JDogT2JzZXJ2YWJsZTxQcm9maWxlW10+O1xuXG4gIGNsdWJMaXN0JDogT2JzZXJ2YWJsZTxDbHViW10+O1xuICBjbHViQWRtaW5MaXN0JDogT2JzZXJ2YWJsZTxDbHViW10+O1xuICB0ZWFtQWRtaW5MaXN0JDogT2JzZXJ2YWJsZTxDbHViW10+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgLy8gcHJpdmF0ZSByZWFkb25seSByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsXG4gICAgcHJpdmF0ZSByZWFkb25seSBhbGVydEN0cmw6IEFsZXJ0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvYXN0Q29udHJvbGxlcjogVG9hc3RDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXNlclByb2ZpbGVTZXJ2aWNlOiBVc2VyUHJvZmlsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBmYlNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRlYW0gPSB0aGlzLm5hdlBhcmFtcy5nZXQoXCJkYXRhXCIpO1xuICAgIHRoaXMudGVhbSQgPSBvZih0aGlzLnRlYW0pO1xuXG4gICAgdGhpcy50ZWFtJCA9IHRoaXMuZ2V0VGVhbSh0aGlzLnRlYW0uaWQpO1xuICAgIC8vIFRPRE8gR0VUIENMVUIgQkFTRUQgT04gVEVBTVxuICAgIHRoaXMuY2x1Ykxpc3QkID0gdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1Ykxpc3QoKTtcbiAgICB0aGlzLmNsdWJBZG1pbkxpc3QkID0gdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1YkFkbWluTGlzdCgpO1xuICAgIHRoaXMudGVhbUFkbWluTGlzdCQgPSB0aGlzLmZiU2VydmljZS5nZXRUZWFtQWRtaW5MaXN0KCk7XG4gIH1cbiAgaXNDbHViQWRtaW4oY2x1YkFkbWluTGlzdDogYW55W10sIGNsdWJJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNsdWJBZG1pbkxpc3QgJiYgY2x1YkFkbWluTGlzdC5zb21lKGNsdWIgPT4gY2x1Yi5pZCA9PT0gY2x1YklkKTtcbiAgfVxuICBpc1RlYW1BZG1pbih0ZWFtQWRtaW5MaXN0OiBhbnlbXSwgdGVhbUlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0ZWFtQWRtaW5MaXN0LCB0ZWFtSWQpXG4gICAgcmV0dXJuIHRlYW1BZG1pbkxpc3QgJiYgdGVhbUFkbWluTGlzdC5zb21lKHRlYW0gPT4gdGVhbS5pZCA9PT0gdGVhbUlkKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuXG4gIH1cbiAgZW5hYmxlVHJhaW5pbmdFeGVyY2lzZShjbHViTGlzdCkge1xuICAgIHJldHVybiBjbHViTGlzdCAmJiBjbHViTGlzdC5zb21lKGNsdWIgPT4gY2x1Yi5oYXNGZWF0dXJlVHJhaW5pbmdFeGVyY2lzZSA9PSB0cnVlKSAmJiBjbHViTGlzdC5zb21lKGNsdWIgPT4gdGhpcy50ZWFtLmNsdWJJZCA9PSBjbHViLmlkKTtcbiAgfVxuICBlbmFibGVDaGFtcGlvbnNoaXAoY2x1Ykxpc3QpIHtcbiAgICByZXR1cm4gY2x1Ykxpc3QgJiYgY2x1Ykxpc3Quc29tZShjbHViID0+IGNsdWIuaGFzRmVhdHVyZUNoYW1waW9uc2hpcCA9PSB0cnVlKSAmJiBjbHViTGlzdC5zb21lKGNsdWIgPT4gdGhpcy50ZWFtLmNsdWJJZCA9PSBjbHViLmlkKTtcbiAgfVxuXG5cbiAgYXN5bmMgZGVsZXRlVGVhbSgpIHtcblxuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydEN0cmwuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20oXG4gICAgICAgIHRoaXMudHJhbnNsYXRlLmdldChcInRlYW0uZGVsZXRlX3RlYW1fX2NvbmZpcm1cIilcbiAgICAgICksXG4gICAgICBidXR0b25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5ub1wiKSksXG4gICAgICAgICAgcm9sZTogXCJkZXN0cnVjdGl2ZVwiLFxuICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmVpblwiKTtcbiAgICAgICAgICAgIHRoaXMucHJlc2VudENhbmNlbFRvYXN0KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLnllc1wiKSksXG4gICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mYlNlcnZpY2UuZGVsZXRlVGVhbSh0aGlzLnRlYW0uaWQpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgIF0sXG4gICAgfSk7XG4gICAgYWxlcnQucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgb3BlblRlYW1UcmFpbmluZ0V4ZXJjaXNlKCkge1xuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbEN0cmwuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogVGVhbUV4ZXJjaXNlc1BhZ2UsXG4gICAgICBwcmVzZW50aW5nRWxlbWVudDogYXdhaXQgdGhpcy5tb2RhbEN0cmwuZ2V0VG9wKCksXG4gICAgICBjYW5EaXNtaXNzOiB0cnVlLFxuICAgICAgc2hvd0JhY2tkcm9wOiB0cnVlLFxuICAgICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgdHJhaW5pbmc6IHsgdGVhbUlkOiB0aGlzLnRlYW0uaWQsIGNsdWJJZDogdGhpcy50ZWFtLmNsdWJJZCB9XG4gICAgICB9LFxuICAgIH0pO1xuICAgIG1vZGFsLnByZXNlbnQoKTtcblxuICAgIGNvbnN0IHsgZGF0YSwgcm9sZSB9ID0gYXdhaXQgbW9kYWwub25XaWxsRGlzbWlzcygpO1xuXG4gICAgaWYgKHJvbGUgPT09IFwiY29uZmlybVwiKSB7XG4gICAgfVxuXG4gIH1cbiAgZ2V0VGVhbSh0ZWFtSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IGNhbGN1bGF0ZUFnZSA9IChkYXRlT2ZCaXJ0aCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJEb0I6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0ZU9mQmlydGgpKTtcbiAgICAgIGNvbnN0IGJpcnRoZGF5ID0gbmV3IERhdGUoZGF0ZU9mQmlydGguc2Vjb25kcyAqIDEwMDApO1xuICAgICAgY29uc3QgYWdlRGlmTXMgPSBEYXRlLm5vdygpIC0gYmlydGhkYXkuZ2V0VGltZSgpO1xuICAgICAgY29uc3QgYWdlRGF0ZSA9IG5ldyBEYXRlKGFnZURpZk1zKTsgLy8gbWlsaXNlY29uZHMgZnJvbSBlcG9jaFxuICAgICAgcmV0dXJuIE1hdGguYWJzKGFnZURhdGUuZ2V0VVRDRnVsbFllYXIoKSAtIDE5NzApO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyJCgpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgdGFwKCh1c2VyKSA9PiB7XG4gICAgICAgIC8vIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBub3QgZm91bmRcIik7XG4gICAgICB9KSxcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLmZiU2VydmljZS5nZXRUZWFtUmVmKHRlYW1JZCkpLFxuICAgICAgc3dpdGNoTWFwKCh0ZWFtKSA9PiB7XG4gICAgICAgIGlmICghdGVhbSkgcmV0dXJuIG9mKG51bGwpO1xuICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdCh7XG4gICAgICAgICAgdGVhbU1lbWJlcnM6IHRoaXMuZmJTZXJ2aWNlLmdldFRlYW1NZW1iZXJSZWZzKHRlYW1JZCksXG4gICAgICAgICAgdGVhbUFkbWluczogdGhpcy5mYlNlcnZpY2UuZ2V0VGVhbUFkbWluUmVmcyh0ZWFtSWQpLFxuICAgICAgICAgIHRlYW1SZXF1ZXN0czogdGhpcy5mYlNlcnZpY2UuZ2V0VGVhbVJlcXVlc3RSZWZzKHRlYW1JZCksXG4gICAgICAgIH0pLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKCh7IHRlYW1NZW1iZXJzLCB0ZWFtQWRtaW5zLCB0ZWFtUmVxdWVzdHMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVtYmVyUHJvZmlsZXMkID0gdGVhbU1lbWJlcnMubWFwKChtZW1iZXIpID0+XG4gICAgICAgICAgICAgIHRoaXMudXNlclByb2ZpbGVTZXJ2aWNlLmdldFVzZXJQcm9maWxlQnlJZChtZW1iZXIuaWQpLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+XG4gICAgICAgICAgICAgICAgICBvZih7IC4uLm1lbWJlciwgZmlyc3ROYW1lOiBcIlVua25vd25cIiwgbGFzdE5hbWU6IFwiVW5rbm93blwiIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgYWRtaW5Qcm9maWxlcyQgPSB0ZWFtQWRtaW5zLm1hcCgoYWRtaW4pID0+XG4gICAgICAgICAgICAgIHRoaXMudXNlclByb2ZpbGVTZXJ2aWNlLmdldFVzZXJQcm9maWxlQnlJZChhZG1pbi5pZCkucGlwZShcbiAgICAgICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT5cbiAgICAgICAgICAgICAgICAgIG9mKHsgLi4uYWRtaW4sIGZpcnN0TmFtZTogXCJVbmtub3duXCIsIGxhc3ROYW1lOiBcIlVua25vd25cIiB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHRlYW1SZXF1ZXN0cyQgPSB0ZWFtUmVxdWVzdHMubWFwKChyZXF1ZXN0KSA9PlxuICAgICAgICAgICAgICB0aGlzLnVzZXJQcm9maWxlU2VydmljZS5nZXRVc2VyUHJvZmlsZUJ5SWQocmVxdWVzdC5pZCkucGlwZShcbiAgICAgICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT5cbiAgICAgICAgICAgICAgICAgIG9mKHsgLi4ucmVxdWVzdCwgZmlyc3ROYW1lOiBcIlVua25vd25cIiwgbGFzdE5hbWU6IFwiVW5rbm93blwiIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIGZvcmtKb2luKHtcbiAgICAgICAgICAgICAgdGVhbU1lbWJlcnM6IGZvcmtKb2luKG1lbWJlclByb2ZpbGVzJCkucGlwZShzdGFydFdpdGgoW10pKSxcbiAgICAgICAgICAgICAgdGVhbUFkbWluczogZm9ya0pvaW4oYWRtaW5Qcm9maWxlcyQpLnBpcGUoc3RhcnRXaXRoKFtdKSksXG4gICAgICAgICAgICAgIHRlYW1SZXF1ZXN0czogZm9ya0pvaW4odGVhbVJlcXVlc3RzJCkucGlwZShzdGFydFdpdGgoW10pKSxcbiAgICAgICAgICAgIH0pLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgoeyB0ZWFtTWVtYmVycywgdGVhbUFkbWlucywgdGVhbVJlcXVlc3RzIH0pID0+ICh7XG4gICAgICAgICAgICAgICAgdGVhbU1lbWJlcnM6IHRlYW1NZW1iZXJzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgIChtZW1iZXIpID0+IG1lbWJlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgKSwgLy8gRmlsdGVyIG91dCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB0ZWFtQWRtaW5zOiB0ZWFtQWRtaW5zLmZpbHRlcigoYWRtaW4pID0+IGFkbWluICE9PSB1bmRlZmluZWQpLCAvLyBGaWx0ZXIgb3V0IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIHRlYW1SZXF1ZXN0czogdGVhbVJlcXVlc3RzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgIChyZXF1ZXN0KSA9PiByZXF1ZXN0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICApLCAvLyBGaWx0ZXIgb3V0IHVuZGVmaW5lZFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWFwKCh7IHRlYW1NZW1iZXJzLCB0ZWFtQWRtaW5zLCB0ZWFtUmVxdWVzdHMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWdlcyA9IHRlYW1NZW1iZXJzXG4gICAgICAgICAgICAgIC5tYXAoKG1lbWJlcikgPT5cbiAgICAgICAgICAgICAgICBtZW1iZXIuaGFzT3duUHJvcGVydHkoXCJkYXRlT2ZCaXJ0aFwiKVxuICAgICAgICAgICAgICAgICAgPyBjYWxjdWxhdGVBZ2UobWVtYmVyLmRhdGVPZkJpcnRoKVxuICAgICAgICAgICAgICAgICAgOiAwXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLmZpbHRlcigoYWdlKSA9PiBhZ2UgPiAwKTsgLy8gRmlsdGVyIG91dCBpbnZhbGlkIG9yICdVbmtub3duJyBhZ2VzXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhZ2VzKTtcblxuICAgICAgICAgICAgY29uc3QgYXZlcmFnZUFnZSA9XG4gICAgICAgICAgICAgIGFnZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgID8gYWdlcy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKSAvIGFnZXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgOiAwOyAvLyBDYWxjdWxhdGUgYXZlcmFnZSBvciBzZXQgdG8gMCBpZiBubyB2YWxpZCBhZ2VzXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi50ZWFtLFxuICAgICAgICAgICAgICB1cGRhdGVkOiBUaW1lc3RhbXAuZnJvbU1pbGxpcyh0ZWFtLnVwZGF0ZWQuc2Vjb25kcyAqIDEwMDApLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgIGF2ZXJhZ2VBZ2U6IGF2ZXJhZ2VBZ2UudG9GaXhlZCgxKSwgLy8gS2VlcCB0d28gZGVjaW1hbCBwbGFjZXNcbiAgICAgICAgICAgICAgdGVhbU1lbWJlcnMsXG4gICAgICAgICAgICAgIHRlYW1BZG1pbnMsXG4gICAgICAgICAgICAgIHRlYW1SZXF1ZXN0cyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMudG9hc3RBY3Rpb25FcnJvcihlcnIpO1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gZ2V0VGVhbVdpdGhNZW1iZXJzQW5kQWRtaW5zOlwiLCBlcnIubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIG9wZW5VcmwodXJsOiBzdHJpbmcpIHtcbiAgICBCcm93c2VyLm9wZW4oe1xuICAgICAgdXJsOiB1cmxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIG9wZW5NZW1iZXJMaXN0KCkge1xuICAgIGNvbnNvbGUubG9nKFwib3BlbiBUZWFtIE1lbWJlciBMaXN0XCIpO1xuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbEN0cmwuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogVGVhbU1lbWJlckxpc3RQYWdlLFxuICAgICAgcHJlc2VudGluZ0VsZW1lbnQ6IGF3YWl0IHRoaXMubW9kYWxDdHJsLmdldFRvcCgpLFxuICAgICAgY2FuRGlzbWlzczogdHJ1ZSxcbiAgICAgIHNob3dCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIHRlYW06IHRoaXMudGVhbVxuICAgICAgfSxcbiAgICB9KTtcbiAgICBtb2RhbC5wcmVzZW50KCk7XG5cbiAgICBjb25zdCB7IGRhdGEsIHJvbGUgfSA9IGF3YWl0IG1vZGFsLm9uV2lsbERpc21pc3MoKTtcblxuICAgIGlmIChyb2xlID09PSBcImNvbmZpcm1cIikge1xuICAgIH1cbiAgfVxuXG5cbiAgYXN5bmMgb3BlbkFkbWluTGlzdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIm9wZW4gVGVhbSBBZG1pbiBcIik7XG4gICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoe1xuICAgICAgY29tcG9uZW50OiBUZWFtQWRtaW5MaXN0UGFnZSxcbiAgICAgIHByZXNlbnRpbmdFbGVtZW50OiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5nZXRUb3AoKSxcbiAgICAgIGNhbkRpc21pc3M6IHRydWUsXG4gICAgICBzaG93QmFja2Ryb3A6IHRydWUsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICB0ZWFtOiB0aGlzLnRlYW1cbiAgICAgIH0sXG4gICAgfSk7XG4gICAgbW9kYWwucHJlc2VudCgpO1xuXG4gICAgY29uc3QgeyBkYXRhLCByb2xlIH0gPSBhd2FpdCBtb2RhbC5vbldpbGxEaXNtaXNzKCk7XG5cbiAgICBpZiAocm9sZSA9PT0gXCJjb25maXJtXCIpIHtcbiAgICB9XG4gIH1cblxuICBhc3luYyBvcGVuVGVhbVRyYWluaW5ncygpIHtcblxuICAgIC8qY29uc3QgbmF2T25ib2FyZGluZ0NsdWIgPSBhd2FpdCB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvdC90cmFpbmluZycpO1xuICAgIGlmIChuYXZPbmJvYXJkaW5nQ2x1Yikge1xuICAgICAgY29uc29sZS5sb2coJ05hdmlnYXRpb24gc3VjY2VzcyB0byBvbmJvYXJkaW5nIENsdWIgUGFnZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdOYXZpZ2F0aW9uIEVSUk9SIHRvIG9uYm9hcmRpbmcgQ2x1YiBQYWdlJyk7XG4gICAgfSovXG4gICAgXG4gICAgY29uc29sZS5sb2coXCJvcGVuIFRlYW0gVHJhaW5pbmdzIFwiKTtcbiAgICBjb25zdCBtb2RhbCA9IGF3YWl0IHRoaXMubW9kYWxDdHJsLmNyZWF0ZSh7XG4gICAgICBjb21wb25lbnQ6IFRyYWluaW5nc1BhZ2UsXG4gICAgICBwcmVzZW50aW5nRWxlbWVudDogYXdhaXQgdGhpcy5tb2RhbEN0cmwuZ2V0VG9wKCksXG4gICAgICBjYW5EaXNtaXNzOiB0cnVlLFxuICAgICAgc2hvd0JhY2tkcm9wOiB0cnVlLFxuICAgICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgdGVhbTogdGhpcy50ZWFtLFxuICAgICAgICBpc01vZGFsOiB0cnVlXG4gICAgICB9LFxuICAgIH0pO1xuICAgIG1vZGFsLnByZXNlbnQoKTtcblxuICAgIGNvbnN0IHsgZGF0YSwgcm9sZSB9ID0gYXdhaXQgbW9kYWwub25XaWxsRGlzbWlzcygpO1xuXG4gICAgaWYgKHJvbGUgPT09IFwiY29uZmlybVwiKSB7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb3BlblRlYW1HYW1lcygpIHtcbiAgICBjb25zb2xlLmxvZyhcIm9wZW4gVGVhbSBHYW1lcyBcIik7XG4gICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoe1xuICAgICAgY29tcG9uZW50OiBDaGFtcGlvbnNoaXBQYWdlLFxuICAgICAgcHJlc2VudGluZ0VsZW1lbnQ6IGF3YWl0IHRoaXMubW9kYWxDdHJsLmdldFRvcCgpLFxuICAgICAgY2FuRGlzbWlzczogdHJ1ZSxcbiAgICAgIHNob3dCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIHRlYW06IHRoaXMudGVhbSxcbiAgICAgICAgaXNNb2RhbDogdHJ1ZVxuICAgICAgfSxcbiAgICB9KTtcbiAgICBtb2RhbC5wcmVzZW50KCk7XG5cbiAgICBjb25zdCB7IGRhdGEsIHJvbGUgfSA9IGF3YWl0IG1vZGFsLm9uV2lsbERpc21pc3MoKTtcblxuICAgIGlmIChyb2xlID09PSBcImNvbmZpcm1cIikge1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGFwcHJvdmVUZWFtUmVxdWVzdChyZXF1ZXN0KSB7XG4gICAgY29uc29sZS5sb2cocmVxdWVzdCk7XG4gICAgYXdhaXQgdGhpcy5mYlNlcnZpY2UuYXBwcm92ZVVzZXJUZWFtUmVxdWVzdChyZXF1ZXN0LnRlYW1JZCwgcmVxdWVzdC5pZCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnRvYXN0QWN0aW9uU2F2ZWQoKTtcbiAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdGhpcy50b2FzdEFjdGlvbkVycm9yKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIG9wZW5NZW1iZXIobWVtYmVyOiBQcm9maWxlKSB7XG4gICAgY29uc29sZS5sb2coXCJvcGVuTWVtYmVyXCIpO1xuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbEN0cmwuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogTWVtYmVyUGFnZSxcbiAgICAgIHByZXNlbnRpbmdFbGVtZW50OiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5nZXRUb3AoKSxcbiAgICAgIGNhbkRpc21pc3M6IHRydWUsXG4gICAgICBzaG93QmFja2Ryb3A6IHRydWUsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBkYXRhOiBtZW1iZXIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIG1vZGFsLnByZXNlbnQoKTtcblxuICAgIGNvbnN0IHsgZGF0YSwgcm9sZSB9ID0gYXdhaXQgbW9kYWwub25XaWxsRGlzbWlzcygpO1xuXG4gICAgaWYgKHJvbGUgPT09IFwiY29uZmlybVwiKSB7XG4gICAgfVxuICB9XG4gIGFkZE1lbWJlcigpIHtcbiAgICB0aGlzLnRlYW0kLnBpcGUoXG4gICAgICB0YWtlKDEpLCAvLyBUYWtlIG9ubHkgdGhlIGZpcnN0IGVtaXNzaW9uXG4gICAgICB0YXAodGVhbSA9PiBjb25zb2xlLmxvZygnVGVhbTonLCB0ZWFtKSksXG4gICAgICBzd2l0Y2hNYXAodGVhbSA9PiB7XG4gICAgICAgIC8vIElmIHRlYW0gZG9lcyBub3QgZXhpc3Qgb3IgdGhlcmUgYXJlIG5vIHRlYW0gbWVtYmVycywgY29tcGxldGUgdGhlIHN0cmVhbVxuICAgICAgICBpZiAoIXRlYW0gfHwgIXRlYW0uY2x1YlJlZiB8fCAhdGVhbS5jbHViUmVmLmlkKSByZXR1cm4gb2YobnVsbCk7XG5cbiAgICAgICAgLy8gRmV0Y2ggY2x1YiBtZW1iZXJzXG4gICAgICAgIHJldHVybiB0aGlzLmZiU2VydmljZS5nZXRDbHViTWVtYmVyUmVmcyh0ZWFtLmNsdWJSZWYuaWQpLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKG1lbWJlcnMgPT4ge1xuICAgICAgICAgICAgaWYgKCFtZW1iZXJzLmxlbmd0aCkgcmV0dXJuIG9mKFtdKTtcblxuICAgICAgICAgICAgLy8gRmV0Y2ggZWFjaCBtZW1iZXIncyB1c2VyIHByb2ZpbGVcbiAgICAgICAgICAgIGNvbnN0IG1lbWJlckRldGFpbHMkID0gbWVtYmVycy5tYXAobWVtYmVyID0+XG4gICAgICAgICAgICAgIHRoaXMudXNlclByb2ZpbGVTZXJ2aWNlLmdldFVzZXJQcm9maWxlQnlJZChtZW1iZXIuaWQpLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+XG4gICAgICAgICAgICAgICAgICBvZih7IC4uLm1lbWJlciwgZmlyc3ROYW1lOiAnVW5rbm93bicsIGxhc3ROYW1lOiAnVW5rbm93bicgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KG1lbWJlckRldGFpbHMkKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtYXAobWVtYmVyUHJvZmlsZXMgPT5cbiAgICAgICAgICAgIG1lbWJlclByb2ZpbGVzLmZpbHRlcihtZW1iZXIgPT4gbWVtYmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBtYXAobWVtYmVyUHJvZmlsZXMgPT4gbWVtYmVyUHJvZmlsZXMuZmlsdGVyKG1lbWJlciA9PlxuICAgICAgICAgICAgIXRlYW0udGVhbU1lbWJlcnMuZmluZChlbGVtZW50ID0+IGVsZW1lbnQuaWQgPT09IG1lbWJlci5pZClcbiAgICAgICAgICApKSxcbiAgICAgICAgICBtYXAoZmlsdGVyZWRNZW1iZXJzID0+IGZpbHRlcmVkTWVtYmVycy5tYXAobWVtYmVyID0+ICh7XG4gICAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgbmFtZTogbWVtYmVyLmlkLFxuICAgICAgICAgICAgbGFiZWw6IGAke21lbWJlci5maXJzdE5hbWV9ICR7bWVtYmVyLmxhc3ROYW1lfWAsXG4gICAgICAgICAgICB2YWx1ZTogbWVtYmVyLFxuICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgfSkpKVxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGFkZE1lbWJlcjonLCBlcnIpO1xuICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICB9KVxuICAgICkuc3Vic2NyaWJlKGFzeW5jIChtZW1iZXJTZWxlY3Q6IGFueSkgPT4ge1xuICAgICAgaWYgKG1lbWJlclNlbGVjdCAmJiBtZW1iZXJTZWxlY3QubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XG4gICAgICAgICAgaGVhZGVyOiAnQWRtaW5pc3RyYXRvciBoaW56dWbDvGdlbicsXG4gICAgICAgICAgaW5wdXRzOiBtZW1iZXJTZWxlY3QsXG4gICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQWJicmVjaGVuJyxcbiAgICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4gY29uc29sZS5sb2coJ0NhbmNlbCBjbGlja2VkJyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnSGluenVmw7xnZW4nLFxuICAgICAgICAgICAgICBoYW5kbGVyOiAodGVhbU1lbWJlckxpc3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZWFtTWVtYmVyTGlzdCk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBtZW1iZXIgb2YgdGVhbU1lbWJlckxpc3QpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuYXBwcm92ZVRlYW1SZXF1ZXN0KHsgdGVhbUlkOiB0aGlzLnRlYW0uaWQsIGlkOiBtZW1iZXIuaWQgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICBhc3luYyBhZGRBZG1pbmlzdHJhdG9yKCkge1xuICAgIHRyeSB7XG4gICAgICAvLyBGZXRjaCB0aGUgdGVhbSBkYXRhXG4gICAgICBjb25zdCB0ZWFtID0gYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRlYW0kLnBpcGUodGFrZSgxKSkpO1xuXG4gICAgICBsZXQgbWVtYmVyU2VsZWN0ID0gW107XG5cbiAgICAgIC8vIEJ1aWxkaW5nIHRoZSBzZWxlY3Rpb24gbGlzdCBmb3IgdGhlIGFsZXJ0XG4gICAgICB0ZWFtLnRlYW1NZW1iZXJzLmZvckVhY2goKG1lbWJlcikgPT4ge1xuICAgICAgICBpZiAoIXRlYW0udGVhbUFkbWlucy5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LmlkID09PSBtZW1iZXIuaWQpKSB7XG4gICAgICAgICAgbWVtYmVyU2VsZWN0LnB1c2goe1xuICAgICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgICAgbmFtZTogbWVtYmVyLmlkLFxuICAgICAgICAgICAgbGFiZWw6IGAke21lbWJlci5maXJzdE5hbWV9ICR7bWVtYmVyLmxhc3ROYW1lfWAsXG4gICAgICAgICAgICB2YWx1ZTogbWVtYmVyLFxuICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBEaXNwbGF5IHRoZSBhbGVydCB3aXRoIHNlbGVjdGFibGUgbWVtYmVyc1xuICAgICAgaWYgKG1lbWJlclNlbGVjdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydEN0cmwuY3JlYXRlKHtcbiAgICAgICAgICBoZWFkZXI6IFwiQWRtaW5pc3RyYXRvciBoaW56dWbDvGdlblwiLFxuICAgICAgICAgIGlucHV0czogbWVtYmVyU2VsZWN0LFxuICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJBYmJyZWNoZW5cIixcbiAgICAgICAgICAgICAgcm9sZTogJ2NhbmNlbCcsXG4gICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IGNvbnNvbGUubG9nKFwiQ2FuY2VsIGNsaWNrZWRcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIkhpbnp1ZsO8Z2VuXCIsXG4gICAgICAgICAgICAgIGhhbmRsZXI6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3RlZCBEYXRhOlwiLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAvLyBIZXJlIHlvdSBjb3VsZCBhZGQgeW91ciBsb2dpYyB0byBoYW5kbGUgdGhlIGFkZGluZyBvZiBzZWxlY3RlZCBhZG1pbmlzdHJhdG9yc1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBlbGlnaWJsZSBtZW1iZXJzIHRvIGFkZCBhcyBhZG1pbmlzdHJhdG9ycy5cIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBhZGRpbmcgYWRtaW5pc3RyYXRvcjpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5wdXQoZXYsIGZpZWxkbmFtZSl7XG4gICAgY29uc29sZS5sb2coZXYuZGV0YWlsLnZhbHVlKTtcbiAgICB0aGlzLmZiU2VydmljZS5zZXRUZWFtVGhyZXNob2xkKHRoaXMudGVhbS5pZCwgZmllbGRuYW1lLCBldi5kZXRhaWwudmFsdWUpXG4gIH1cblxuICBhc3luYyB0b2FzdEFjdGlvblNhdmVkKCkge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLnN1Y2Nlc3NfX3NhdmVkXCIpKSxcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgICBjb2xvcjogXCJzdWNjZXNzXCIsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gIH1cbiAgYXN5bmMgcHJlc2VudENhbmNlbFRvYXN0KCkge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20oXG4gICAgICAgIHRoaXMudHJhbnNsYXRlLmdldChcIm9uYm9hcmRpbmcud2FybmluZ19fYWN0aW9uX2NhbmNlbGVkXCIpXG4gICAgICApLFxuICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIixcbiAgICAgIGNvbG9yOiBcImRhbmdlclwiLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgdG9hc3QucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgdG9hc3RBY3Rpb25FcnJvcihlcnJvcikge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gIH1cblxuICBlZGl0KCkge1xuICAgIGlmICh0aGlzLmFsbG93RWRpdCkge1xuICAgICAgdGhpcy5hbGxvd0VkaXQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbGxvd0VkaXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNsb3NlKCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKG51bGwsIFwiY2xvc2VcIik7XG4gIH1cblxuICBhc3luYyBjb25maXJtKCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKHRoaXMudGVhbSwgXCJjb25maXJtXCIpO1xuICB9XG59XG4iLCAiPG5nLWNvbnRhaW5lciAqbmdJZj1cInRlYW0kIHwgYXN5bmMgYXMgdGVhbTsgZWxzZSBoZWFkZXJcIj5cbiAgPGlvbi1oZWFkZXIgW3RyYW5zbHVjZW50XT1cInRydWVcIj5cbiAgICA8aW9uLXRvb2xiYXI+XG4gICAgICA8IS0tPGlvbi1idXR0b25zIHNsb3Q9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgPGlvbi1idXR0b24gKm5nSWY9XCIhYWxsb3dFZGl0XCIgKGNsaWNrKT1cImVkaXQoKVwiXG4gICAgICAgICAgPnt7XCJjb21tb24uZWRpdFwiIHwgdHJhbnNsYXRlfX08L2lvbi1idXR0b25cbiAgICAgICAgPlxuICAgICAgICA8aW9uLWJ1dHRvbiAqbmdJZj1cImFsbG93RWRpdFwiIChjbGljayk9XCJlZGl0KClcIlxuICAgICAgICAgID57e1wiY29tbW9uLmRvbmVcIiB8IHRyYW5zbGF0ZX19PC9pb24tYnV0dG9uXG4gICAgICAgID5cbiAgICAgIDwvaW9uLWJ1dHRvbnM+LS0+XG4gICAgICA8aW9uLXRpdGxlPnt7dGVhbT8ubmFtZX19PC9pb24tdGl0bGU+XG4gICAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInByaW1hcnlcIj5cbiAgICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cImNsb3NlKClcIj57e1wiY29tbW9uLmNsb3NlXCIgfCB0cmFuc2xhdGV9fTwvaW9uLWJ1dHRvbj5cbiAgICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgPC9pb24tdG9vbGJhcj5cbiAgPC9pb24taGVhZGVyPlxuXG4gIDxpb24tY29udGVudCBbZnVsbHNjcmVlbl09XCJ0cnVlXCI+XG4gICAgPGlvbi1oZWFkZXIgY29sbGFwc2U9XCJjb25kZW5zZVwiPlxuICAgICAgPGlvbi10b29sYmFyPlxuICAgICAgICA8aW9uLXRpdGxlIHNpemU9XCJsYXJnZVwiPnt7dGVhbS5uYW1lfX08L2lvbi10aXRsZT5cbiAgICAgIDwvaW9uLXRvb2xiYXI+XG4gICAgPC9pb24taGVhZGVyPlxuXG4gICAgPGlvbi1saXN0IGxpbmVzPVwiZnVsbFwiIFtpbnNldF09XCJ0cnVlXCI+XG4gICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICA8aW9uLWxhYmVsPiB7eyBcImNvbW1vbi5tYW5hZ2VfbWVtYmVyc1wiIHwgdHJhbnNsYXRlfX0gPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1saXN0LWhlYWRlcj5cblxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWljb24gbmFtZT1cInN0YXRzLWNoYXJ0LW91dGxpbmVcIiBzbG90PVwic3RhcnRcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsPiB7e1wiY29tbW9uLmF2ZXJhZ2VfX2FnZVwiIHwgdHJhbnNsYXRlfX0gPC9pb24tbGFiZWw+XG4gICAgICAgIDxpb24tbm90ZSBzbG90PVwiZW5kXCI+IHt7dGVhbS5hdmVyYWdlQWdlfX08L2lvbi1ub3RlPlxuICAgICAgPC9pb24taXRlbT5cblxuICAgICAgPGlvbi1pdGVtIGRldGFpbD1cInRydWVcIiAoY2xpY2spPVwib3Blbk1lbWJlckxpc3QoKVwiPlxuICAgICAgICA8aW9uLWljb24gbmFtZT1cInBlb3BsZS1jaXJjbGUtb3V0bGluZVwiIHNsb3Q9XCJzdGFydFwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbGFiZWw+IE1pdGdsaWVkZXIgPC9pb24tbGFiZWw+XG4gICAgICAgIDxpb24tbm90ZSBzbG90PVwiZW5kXCI+e3t0ZWFtWyd0ZWFtTWVtYmVycyddLmxlbmd0aH19PC9pb24tbm90ZT5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDxpb24taXRlbSBkZXRhaWw9XCJ0cnVlXCIgKGNsaWNrKT1cIm9wZW5BZG1pbkxpc3QoKVwiPlxuICAgICAgICA8aW9uLWljb24gbmFtZT1cInNoaWVsZC1oYWxmLW91dGxpbmVcIiBzbG90PVwic3RhcnRcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsPiBBZG1pbmlzdHJhdG9yZW4gPC9pb24tbGFiZWw+XG4gICAgICAgIDxpb24tbm90ZSBzbG90PVwiZW5kXCI+e3t0ZWFtWyd0ZWFtQWRtaW5zJ10ubGVuZ3RofX08L2lvbi1ub3RlPlxuICAgICAgPC9pb24taXRlbT5cblxuICAgICAgPGlvbi1pdGVtIGRldGFpbD1cInRydWVcIiAoY2xpY2spPVwib3BlblRlYW1UcmFpbmluZ3MoKVwiPlxuICAgICAgICA8aW9uLWljb24gbmFtZT1cImJhcmJlbGwtb3V0bGluZVwiIHNsb3Q9XCJzdGFydFwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbGFiZWw+IFRyYWluaW5ncyA8L2lvbi1sYWJlbD5cbiAgICAgICAgPGlvbi1ub3RlIHNsb3Q9XCJlbmRcIj48L2lvbi1ub3RlPlxuICAgICAgPC9pb24taXRlbT5cblxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNsdWJMaXN0JCB8IGFzeW5jIGFzIGNsdWJMaXN0XCI+XG4gICAgICAgIDxpb24taXRlbSAqbmdJZj1cImVuYWJsZUNoYW1waW9uc2hpcChjbHViTGlzdClcIiBkZXRhaWw9XCJ0cnVlXCIgKGNsaWNrKT1cIm9wZW5UZWFtR2FtZXMoKVwiPlxuICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwidHJvcGh5LW91dGxpbmVcIiBzbG90PVwic3RhcnRcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDxpb24tbGFiZWw+IE1laXN0ZXJzY2hhZnRzcGllbGUgPC9pb24tbGFiZWw+XG4gICAgICAgICAgPGlvbi1ub3RlIHNsb3Q9XCJlbmRcIj48L2lvbi1ub3RlPlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8L2lvbi1saXN0PlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNsdWJMaXN0JCB8IGFzeW5jIGFzIGNsdWJMaXN0XCI+XG4gICAgICA8aW9uLWxpc3QgKm5nSWY9XCJlbmFibGVUcmFpbmluZ0V4ZXJjaXNlKGNsdWJMaXN0KVwiIFtpbnNldF09XCJ0cnVlXCIgbGluZXM9XCJub25lXCI+XG4gICAgICAgIDxpb24taXRlbSAoY2xpY2spPVwib3BlblRlYW1UcmFpbmluZ0V4ZXJjaXNlKClcIiBkZXRhaWw9XCJ0cnVlXCI+XG4gICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJiYXJiZWxsLW91dGxpbmVcIiBzbG90PVwic3RhcnRcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDxpb24tbGFiZWw+w5xidW5nZW48L2lvbi1sYWJlbD5cbiAgICAgICAgPC9pb24taXRlbT5cbiAgICAgIDwvaW9uLWxpc3Q+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGVhbUFkbWluTGlzdCQgfCBhc3luYyBhcyB0ZWFtQWRtaW5MaXN0XCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2x1YkFkbWluTGlzdCQgfCBhc3luYyBhcyBjbHViQWRtaW5MaXN0XCI+XG4gICAgICAgIDxpb24tbGlzdCAqbmdJZj1cImlzVGVhbUFkbWluKHRlYW1BZG1pbkxpc3QsIHRlYW0uaWQpIHx8IGlzQ2x1YkFkbWluKGNsdWJBZG1pbkxpc3QsIHRlYW0uY2x1YklkKVwiIGxpbmVzPVwiZnVsbFwiXG4gICAgICAgICAgW2luc2V0XT1cInRydWVcIj5cbiAgICAgICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICAgICAgPGlvbi1sYWJlbD4gR3Jlbnp3ZXJ0ZSBmw7xyIEFibWVsZHVuZ2VuIDwvaW9uLWxhYmVsPlxuICAgICAgICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICAgIDxpb24taXRlbT5cbiAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiYmFyYmVsbC1vdXRsaW5lXCIgc2xvdD1cInN0YXJ0XCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDxpb24taW5wdXQgbGFiZWxQbGFjZW1lbnQ9XCJmaXhlZFwiIGxhYmVsPVwiVHJhaW5pbmdcIiB0eXBlPVwibnVtYmVyXCIgW3ZhbHVlXT1cInRlYW0udHJhaW5pbmdUaHJlc2hvbGRcIlxuICAgICAgICAgICAgICAoaW9uSW5wdXQpPVwib25JbnB1dCgkZXZlbnQsICd0cmFpbmluZ1RocmVzaG9sZCcpXCI+PC9pb24taW5wdXQ+XG4gICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2x1Ykxpc3QkIHwgYXN5bmMgYXMgY2x1Ykxpc3RcIj5cbiAgICAgICAgICAgIDxpb24taXRlbSAqbmdJZj1cImVuYWJsZUNoYW1waW9uc2hpcChjbHViTGlzdClcIj5cbiAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJ0cm9waHktb3V0bGluZVwiIHNsb3Q9XCJzdGFydFwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgIDxpb24taW5wdXQgbGFiZWxQbGFjZW1lbnQ9XCJmaXhlZFwiIGxhYmVsPVwiTWVpc3RlcnNjaGFmdFwiIHR5cGU9XCJudW1iZXJcIiBbdmFsdWVdPVwidGVhbS5jaGFtcGlvbnNoaXBUaHJlc2hvbGRcIlxuICAgICAgICAgICAgICAgIChpb25JbnB1dCk9XCJvbklucHV0KCRldmVudCwgJ2NoYW1waW9uc2hpcFRocmVzaG9sZCcpXCI+PC9pb24taW5wdXQ+XG4gICAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2lvbi1saXN0PlxuICAgICAgICA8aW9uLW5vdGUgKm5nSWY9XCJpc1RlYW1BZG1pbih0ZWFtQWRtaW5MaXN0LCB0ZWFtLmlkKSB8fCBpc0NsdWJBZG1pbihjbHViQWRtaW5MaXN0LCB0ZWFtLmNsdWJJZClcIiBjb2xvcj1cIm1lZGl1bVwiXG4gICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OmJsb2NrXCIgY2xhc3M9XCJpb24tbWFyZ2luLWhvcml6b250YWwgaW9uLXBhZGRpbmctaG9yaXpvbnRhbCBpb24tdGV4dC13cmFwXCI+XG4gICAgICAgICAgQW56YWhsIFN0dW5kZW4gdm9yIEJlZ2lubiBkZXMgU3BpZWxzLCBUcmFpbmluZ3Mgb2RlciBWZXJhbnN0YWx0dW5nPC9pb24tbm90ZT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPGlvbi1saXN0IGxpbmVzPVwiZnVsbFwiIFtpbnNldF09XCJ0cnVlXCI+XG4gICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICA8aW9uLWxhYmVsPiB7eyBcImNvbW1vbi5kZXRhaWxzXCIgfCB0cmFuc2xhdGV9fSA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxuXG4gICAgICA8aW9uLWl0ZW0gKm5nSWY9XCJ0ZWFtLmxpZ2FcIj5cbiAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJ0cm9waHlcIiBzbG90PVwic3RhcnRcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsPiB7e3RlYW0ubGlnYX19IDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cbiAgICAgIDxpb24taXRlbSAqbmdJZj1cInRlYW0ucG9ydHJhaXRcIj5cbiAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJpbmZvcm1hdGlvbi1vdXRsaW5lXCIgc2xvdD1cInN0YXJ0XCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbD4ge3t0ZWFtLnBvcnRyYWl0fX0gPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgICAgPGlvbi1pdGVtICpuZ0lmPVwidGVhbS5pbmZvXCI+XG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwiaW5mb3JtYXRpb24tY2lyY2xlLW91dGxpbmVcIiBzbG90PVwic3RhcnRcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsPiB7e3RlYW0uaW5mb319IDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cbiAgICAgIDxpb24taXRlbSAqbmdJZj1cInRlYW0ud2Vic2l0ZVwiPlxuICAgICAgICA8aW9uLWljb24gbmFtZT1cImdsb2JlLW91dGxpbmVcIiBzbG90PVwic3RhcnRcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsIGNsYXNzPVwiaW9uLXRleHQtd3JhcFwiPiB7e3RlYW0ud2Vic2l0ZX19IDwvaW9uLWxhYmVsPlxuICAgICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwib3BlblVybCh0ZWFtLndlYnNpdGUpXCIgZmlsbD1cImNsZWFyXCI+XG4gICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwib3Blbi1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24taXRlbT5cblxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWljb24gbmFtZT1cImhlYXJ0LWNpcmNsZS1vdXRsaW5lXCIgc2xvdD1cInN0YXJ0XCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbD4ge3t0ZWFtLnR5cGV9fSA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwidGltZVwiIHNsb3Q9XCJzdGFydFwiIGNvbG9yPVwibWVkaXVtXCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1ub3RlPiB7e3RlYW0udXBkYXRlZCB8IGRhdGU6J2RkLk1NLllZWVkgSEg6bW0nfX0gVWhyPC9pb24tbm90ZT5cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICA8IS0tPGlvbi1pdGVtID5cbiAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJrZXlcIiBzbG90PVwic3RhcnRcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsPiB7e3RlYW0uYXBpS2V5fX0gPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPi0tPlxuICAgIDwvaW9uLWxpc3Q+XG5cblxuXG4gICAgPGRpdiBjbGFzcz1cImlvbi1wYWRkaW5nXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGVhbUFkbWluTGlzdCQgfCBhc3luYyBhcyB0ZWFtQWRtaW5MaXN0XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbHViQWRtaW5MaXN0JCB8IGFzeW5jIGFzIGNsdWJBZG1pbkxpc3RcIj5cbiAgICAgICAgICA8aW9uLWJ1dHRvbiAqbmdJZj1cImlzVGVhbUFkbWluKHRlYW1BZG1pbkxpc3QsIHRlYW0uaWQpIHx8IGlzQ2x1YkFkbWluKGNsdWJBZG1pbkxpc3QsIHRlYW0uY2x1YklkKVwiXG4gICAgICAgICAgICBmaWxsPVwib3V0bGluZVwiIGV4cGFuZD1cImJsb2NrXCIgY29sb3I9XCJkYW5nZXJcIiAoY2xpY2spPVwiZGVsZXRlVGVhbSgpXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cInRyYXNoXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIHt7IFwidGVhbS5kZWxldGVcIiB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIiAqbmdJZj1cInRlYW1bJ3RlYW1SZXF1ZXN0cyddLmxlbmd0aCA+IDBcIj5cbiAgICAgIDxpb24tbGlzdC1oZWFkZXI+XG4gICAgICAgIDxpb24tbGFiZWw+IHt7XCJjb21tb24ucmVxdWVzdHNcIiB8IHRyYW5zbGF0ZX19IDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG4gICAgICA8aW9uLWl0ZW0gKm5nRm9yPVwibGV0IHJlcXVlc3Qgb2YgdGVhbVsndGVhbVJlcXVlc3RzJ11cIiBkZXRhaWw9XCJ0cnVlXCI+XG4gICAgICAgIDxpb24tYXZhdGFyIHNsb3Q9XCJzdGFydFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwie3tyZXF1ZXN0Py5wcm9maWxlUGljdHVyZX19XCIgLz5cbiAgICAgICAgPC9pb24tYXZhdGFyPlxuICAgICAgICA8aW9uLWxhYmVsIChjbGljayk9XCJvcGVuTWVtYmVyKHJlcXVlc3QpXCJcbiAgICAgICAgICA+e3tyZXF1ZXN0LmZpcnN0TmFtZX19IHt7cmVxdWVzdC5sYXN0TmFtZX19PC9pb24tbGFiZWxcbiAgICAgICAgPlxuICAgICAgICA8aW9uLWxhYmVsPiB7e3JlcXVlc3Q/LmVtYWlsfX0gPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgIDwvaW9uLWxpc3Q+LS0+XG5cbiAgICA8IS0tXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJyZXF1ZXN0TGlzdCQgfCBhc3luYyBhcyByZXF1ZXN0czsgZWxzZSBub1JlcXVlc3RzXCI+XG4gICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCIgKm5nSWY9XCJyZXF1ZXN0cy5sZW5ndGggPiAwXCI+XG4gICAgICA8aW9uLWxpc3QtaGVhZGVyPiBBbmZyYWdlbiA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICAgIDxpb24taXRlbSAqbmdGb3I9XCJsZXQgcmVxdWVzdCBvZiByZXF1ZXN0c1wiPlxuICAgICAgICA8aW9uLWF2YXRhciBzbG90PVwic3RhcnRcIj5cbiAgICAgICAgICA8aW1nIFtzcmNdPVwicmVxdWVzdD8ucHJvZmlsZVBpY3R1cmVcIiAvPlxuICAgICAgICA8L2lvbi1hdmF0YXI+XG4gICAgICAgIDxpb24tbGFiZWw+IHt7cmVxdWVzdD8uZmlyc3ROYW1lfX0ge3tyZXF1ZXN0Py5sYXN0TmFtZX19IDwvaW9uLWxhYmVsPlxuICAgICAgICA8aW9uLWJ1dHRvbiBjb2xvcj1cImRhbmdlclwiIChjbGljayk9XCJkZWxldGVUZWFtUmVxdWVzdChyZXF1ZXN0KVwiIHNsb3Q9XCJlbmRcIj5cbiAgICAgICAgICA8aW9uLWljb24gaWNvbi1vbmx5IG5hbWU9XCJ0cmFzaFwiPjwvaW9uLWljb24+XG4gICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgICAgPGlvbi1idXR0b24gY29sb3I9XCJzdWNjZXNzXCIgKGNsaWNrKT1cImFwcHJvdmVUZWFtUmVxdWVzdChyZXF1ZXN0KVwiIHNsb3Q9XCJlbmRcIj5cbiAgICAgICAgICA8aW9uLWljb24gaWNvbi1vbmx5IG5hbWU9XCJjaGVja21hcmstb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgPC9pb24tbGlzdD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCI+XG4gICAgPGlvbi1saXN0LWhlYWRlcj4gTWl0Z2xpZWRlciA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICA8aW9uLWl0ZW0gKm5nRm9yPVwibGV0IG1lbWJlciBvZiBtZW1iZXJMaXN0JCB8IGFzeW5jXCI+XG4gICAgICBcbiAgICAgIDxpb24taWNvblxuICAgICAgKm5nSWY9XCJhbGxvd0VkaXQgPT09IHRydWVcIlxuICAgICAgc2xvdD1cImljb24tb25seVwiXG4gICAgICBjb2xvcj1cImRhbmdlclwiXG4gICAgICBzbG90PVwic3RhcnRcIlxuICAgICAgKGNsaWNrKT1cInJlbW92ZU1lbWJlcihtZW1iZXIpXCJcbiAgICAgIG5hbWU9XCJwZXJzb24tcmVtb3ZlLW91dGxpbmVcIlxuICAgID48L2lvbi1pY29uPlxuICAgICAgXG4gICAgICA8aW9uLWF2YXRhciBzbG90PVwic3RhcnRcIj5cbiAgICAgICAgPGltZyBzcmM9XCJ7e21lbWJlcj8ucHJvZmlsZVBpY3R1cmV9fVwiIC8+XG4gICAgICA8L2lvbi1hdmF0YXI+XG4gICAgICA8aW9uLWxhYmVsPiB7e21lbWJlcj8uZmlyc3ROYW1lfX0ge3ttZW1iZXI/Lmxhc3ROYW1lfX0gPC9pb24tbGFiZWw+XG4gICAgPC9pb24taXRlbT5cbiAgPC9pb24tbGlzdD5cblxuICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIj5cbiAgICA8aW9uLWxpc3QtaGVhZGVyPiBBZG1pbmlzdHJhdG9yZW4gPC9pb24tbGlzdC1oZWFkZXI+XG4gICAgPGlvbi1pdGVtICpuZ0Zvcj1cImxldCBhZG1pbiBvZiBhZG1pbkxpc3QkIHwgYXN5bmNcIj5cbiAgICAgIDxpb24taWNvblxuICAgICAgKm5nSWY9XCJhbGxvd0VkaXQgPT09IHRydWVcIlxuICAgICAgc2xvdD1cImljb24tb25seVwiXG4gICAgICBjb2xvcj1cImRhbmdlclwiXG4gICAgICBzbG90PVwic3RhcnRcIlxuICAgICAgbmFtZT1cInBlcnNvbi1yZW1vdmVcIlxuICAgID48L2lvbi1pY29uPlxuICAgICAgPGlvbi1hdmF0YXIgc2xvdD1cInN0YXJ0XCI+XG4gICAgICAgIDxpbWcgc3JjPVwie3thZG1pbj8ucHJvZmlsZVBpY3R1cmV9fVwiIC8+XG4gICAgICA8L2lvbi1hdmF0YXI+XG4gICAgICA8aW9uLWxhYmVsPiB7e2FkbWluPy5maXJzdE5hbWV9fSB7e2FkbWluPy5sYXN0TmFtZX19IDwvaW9uLWxhYmVsPlxuICAgIDwvaW9uLWl0ZW0+XG4gIDwvaW9uLWxpc3Q+XG4gIC0tPlxuICAgIDwhLS0gZmFiIHBsYWNlZCB0byB0aGUgYm90dG9tIGVuZCBcbiAgPGlvbi1mYWIgdmVydGljYWw9XCJib3R0b21cIiBob3Jpem9udGFsPVwiZW5kXCIgc2xvdD1cImZpeGVkXCI+XG4gICAgPGlvbi1mYWItYnV0dG9uIChjbGljayk9XCJhZGRUZWFtTWVtYmVyKClcIj5cbiAgICAgIDxpb24taWNvbiBuYW1lPVwiYWRkLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgIDwvaW9uLWZhYi1idXR0b24+XG4gIDwvaW9uLWZhYj4tLT5cbiAgPC9pb24tY29udGVudD5cbjwvbmctY29udGFpbmVyPlxuPG5nLXRlbXBsYXRlICNub1JlcXVlc3RzPlxuICA8IS0tIFlvdSBjYW4gcHV0IGFueSBwbGFjZWhvbGRlciBvciBtZXNzYWdlIGhlcmUgaWYgbmVlZGVkIHdoZW4gdGhlcmUgYXJlIG5vIHJlcXVlc3RzIC0tPlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjaGVhZGVyPlxuICA8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxuICAgIDxpb24tdG9vbGJhcj5cbiAgICAgIDxpb24tdGl0bGU+PGlvbi1za2VsZXRvbi10ZXh0IFthbmltYXRlZF09XCJ0cnVlXCIgc3R5bGU9XCJ3aWR0aDogNjAlO1wiPjwvaW9uLXNrZWxldG9uLXRleHQ+PC9pb24tdGl0bGU+XG4gICAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInByaW1hcnlcIj5cbiAgICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cImNsb3NlKClcIj57e1wiY29tbW9uLmNsb3NlXCIgfCB0cmFuc2xhdGV9fTwvaW9uLWJ1dHRvbj5cbiAgICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgPC9pb24tdG9vbGJhcj5cbiAgPC9pb24taGVhZGVyPlxuXG4gIDxpb24tY29udGVudCBbZnVsbHNjcmVlbl09XCJ0cnVlXCI+XG4gICAgPGlvbi1oZWFkZXIgY29sbGFwc2U9XCJjb25kZW5zZVwiPlxuICAgICAgPGlvbi10b29sYmFyPlxuICAgICAgICA8aW9uLXRpdGxlIHNpemU9XCJsYXJnZVwiPjxpb24tc2tlbGV0b24tdGV4dCBbYW5pbWF0ZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA2MCU7XCI+PC9pb24tc2tlbGV0b24tdGV4dD48L2lvbi10aXRsZT5cbiAgICAgIDwvaW9uLXRvb2xiYXI+XG4gICAgPC9pb24taGVhZGVyPlxuICA8L2lvbi1jb250ZW50PlxuXG5cbjwvbmctdGVtcGxhdGU+Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ09ZLElBQUEseUJBQUEsR0FBQSxjQUFBLENBQUE7QUFBK0IsSUFBQSxxQkFBQSxTQUFBLFNBQUEsaUlBQUE7QUFBQSxNQUFBLHdCQUFBLEdBQUE7QUFBQSxZQUFBLFNBQUEsd0JBQUEsQ0FBQTtBQUFBLGFBQUEsc0JBQVMsT0FBQSxLQUFBLENBQU07SUFBQSxDQUFBO0FBQUUsSUFBQSxpQkFBQSxDQUFBOztBQUE2QixJQUFBLHVCQUFBOzs7QUFBN0IsSUFBQSxvQkFBQTtBQUFBLElBQUEsNEJBQUEsc0JBQUEsR0FBQSxHQUFBLGFBQUEsQ0FBQTs7Ozs7O0FBQ2hELElBQUEseUJBQUEsR0FBQSxjQUFBLENBQUE7QUFBOEIsSUFBQSxxQkFBQSxTQUFBLFNBQUEsaUlBQUE7QUFBQSxNQUFBLHdCQUFBLEdBQUE7QUFBQSxZQUFBLFNBQUEsd0JBQUEsQ0FBQTtBQUFBLGFBQUEsc0JBQVMsT0FBQSxLQUFBLENBQU07SUFBQSxDQUFBO0FBQUUsSUFBQSxpQkFBQSxDQUFBOztBQUE2QixJQUFBLHVCQUFBOzs7QUFBN0IsSUFBQSxvQkFBQTtBQUFBLElBQUEsNEJBQUEsc0JBQUEsR0FBQSxHQUFBLGFBQUEsQ0FBQTs7Ozs7QUFIakQsSUFBQSx5QkFBQSxHQUFBLGVBQUEsRUFBQTtBQUVFLElBQUEscUJBQUEsR0FBQSxvR0FBQSxHQUFBLEdBQUEsY0FBQSxFQUFBLEVBQWdELEdBQUEsb0dBQUEsR0FBQSxHQUFBLGNBQUEsRUFBQTtBQUVsRCxJQUFBLHVCQUFBOzs7O0FBRmUsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxDQUFBLE9BQUEsU0FBQTtBQUNBLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsT0FBQSxTQUFBOzs7OztBQUpqQixJQUFBLGtDQUFBLENBQUE7QUFDRSxJQUFBLHFCQUFBLEdBQUEsdUZBQUEsR0FBQSxHQUFBLGVBQUEsRUFBQTs7Ozs7Ozs7QUFDRyxJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLE9BQUEsWUFBQSxrQkFBQSxRQUFBLEVBQUEsS0FBQSxPQUFBLFlBQUEsa0JBQUEsUUFBQSxNQUFBLENBQUE7Ozs7O0FBSFAsSUFBQSxrQ0FBQSxDQUFBO0FBQ0UsSUFBQSxxQkFBQSxHQUFBLHlFQUFBLEdBQUEsR0FBQSxnQkFBQSxDQUFBOzs7Ozs7QUFBZSxJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLHNCQUFBLEdBQUEsR0FBQSxPQUFBLGNBQUEsQ0FBQTs7Ozs7O0FBbUNULElBQUEseUJBQUEsR0FBQSxZQUFBLEVBQUE7QUFDRSxJQUFBLHFCQUFBLFNBQUEsU0FBQSw4SUFBQTtBQUFBLE1BQUEsd0JBQUEsR0FBQTtBQUFBLFlBQUEsYUFBQSx3QkFBQSxDQUFBLEVBQUE7QUFBQSxZQUFBLFNBQUEsd0JBQUEsQ0FBQTtBQUFBLGFBQUEsc0JBQVMsT0FBQSxnQkFBQSxVQUFBLENBQXVCO0lBQUEsQ0FBQTtBQUFFLElBQUEsdUJBQUE7Ozs7O0FBRWxDLElBQUEsb0JBQUEsR0FBQSxPQUFBLEVBQUE7Ozs7O0FBRUEsSUFBQSxvQkFBQSxHQUFBLE9BQUEsRUFBQTs7OztBQUFtQyxJQUFBLGdDQUFBLE9BQUEsY0FBQSxPQUFBLE9BQUEsV0FBQSxnQkFBQSx1QkFBQTs7Ozs7O0FBUHpDLElBQUEseUJBQUEsR0FBQSxrQkFBQSxFQUFvRCxHQUFBLFlBQUEsRUFBQTtBQUVoRCxJQUFBLHFCQUFBLEdBQUEsbUhBQUEsR0FBQSxHQUFBLFlBQUEsRUFBQTtBQUVBLElBQUEseUJBQUEsR0FBQSxjQUFBLEVBQUE7QUFDRSxJQUFBLHFCQUFBLEdBQUEsOEdBQUEsR0FBQSxHQUFBLE9BQUEsRUFBQSxFQUMrRCxHQUFBLDhHQUFBLEdBQUEsR0FBQSxPQUFBLEVBQUE7QUFFakUsSUFBQSx1QkFBQTtBQUNBLElBQUEseUJBQUEsR0FBQSxhQUFBLEVBQUE7QUFBaUMsSUFBQSxxQkFBQSxTQUFBLFNBQUEsb0lBQUE7QUFBQSxNQUFBLHdCQUFBLEdBQUE7QUFBQSxZQUFBLGFBQUEsd0JBQUEsRUFBQTtBQUFBLFlBQUEsU0FBQSx3QkFBQSxDQUFBO0FBQUEsYUFBQSxzQkFBUyxPQUFBLFdBQUEsVUFBQSxDQUFrQjtJQUFBLENBQUE7QUFDMUQsSUFBQSxpQkFBQSxDQUFBO0FBQ0YsSUFBQSx1QkFBQSxFQUFZLEVBQ0g7Ozs7O0FBVkUsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLE9BQUEsYUFBQSxJQUFBO0FBR0gsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLENBQUEsV0FBQSxjQUFBO0FBRUEsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxXQUFBLGNBQUE7QUFHTixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDZCQUFBLEtBQUEsV0FBQSxXQUFBLEtBQUEsV0FBQSxVQUFBLEdBQUE7Ozs7O0FBWlIsSUFBQSxrQ0FBQSxDQUFBO0FBRUUsSUFBQSxxQkFBQSxHQUFBLHdHQUFBLEdBQUEsR0FBQSxvQkFBQSxDQUFBOzs7Ozs7QUFBbUIsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxXQUFBLFdBQUEsV0FBQTs7Ozs7QUFOdkIsSUFBQSxrQ0FBQSxDQUFBO0FBQ0UsSUFBQSx5QkFBQSxHQUFBLG9CQUFBLEVBQUEsRUFBZ0MsR0FBQSxXQUFBO0FBQ2xCLElBQUEsaUJBQUEsQ0FBQTtBQUFZLElBQUEsdUJBQUEsRUFBWTtBQUV0QyxJQUFBLHFCQUFBLEdBQUEscUZBQUEsR0FBQSxHQUFBLGdCQUFBLEVBQUE7Ozs7OztBQUZjLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNkJBQUEsS0FBQSxhQUFBLEdBQUE7QUFFbUIsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsV0FBQSxpQkFBQTs7Ozs7QUFOdkMsSUFBQSx5QkFBQSxHQUFBLFlBQUEsRUFBQSxFQUE4RSxHQUFBLGdCQUFBO0FBRTFFLElBQUEscUJBQUEsR0FBQSxzRUFBQSxHQUFBLEdBQUEsZ0JBQUEsRUFBQTtBQXNCRixJQUFBLHVCQUFBLEVBQWlCOzs7O0FBeEJULElBQUEscUJBQUEsU0FBQSxJQUFBO0FBRTRCLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEscUJBQUEsV0FBQSxPQUFBLFVBQUE7Ozs7OztBQTJCbEMsSUFBQSx5QkFBQSxHQUFBLFdBQUEsRUFBQSxFQUNrRCxHQUFBLGtCQUFBLENBQUE7QUFDaEMsSUFBQSxxQkFBQSxTQUFBLFNBQUEscUhBQUE7QUFBQSxNQUFBLHdCQUFBLElBQUE7QUFBQSxZQUFBLFNBQUEsd0JBQUEsQ0FBQTtBQUFBLGFBQUEsc0JBQVMsT0FBQSx1QkFBQSxDQUF3QjtJQUFBLENBQUE7QUFDL0MsSUFBQSxvQkFBQSxHQUFBLFlBQUEsRUFBQTtBQUNGLElBQUEsdUJBQUEsRUFBaUI7Ozs7O0FBTHJCLElBQUEsa0NBQUEsQ0FBQTtBQUNFLElBQUEscUJBQUEsR0FBQSxvRkFBQSxHQUFBLEdBQUEsV0FBQSxFQUFBOzs7Ozs7OztBQUFVLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsT0FBQSxZQUFBLG1CQUFBLFFBQUEsRUFBQSxLQUFBLE9BQUEsWUFBQSxtQkFBQSxRQUFBLE1BQUEsQ0FBQTs7Ozs7QUFGZCxJQUFBLGtDQUFBLENBQUE7QUFDRSxJQUFBLHFCQUFBLEdBQUEsMEVBQUEsR0FBQSxHQUFBLGdCQUFBLENBQUE7Ozs7OztBQUFlLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsc0JBQUEsR0FBQSxHQUFBLE9BQUEsY0FBQSxDQUFBOzs7Ozs7QUF6RG5CLElBQUEsa0NBQUEsQ0FBQTtBQUNFLElBQUEseUJBQUEsR0FBQSxjQUFBLENBQUEsRUFBaUMsR0FBQSxhQUFBO0FBRTdCLElBQUEscUJBQUEsR0FBQSwwREFBQSxHQUFBLEdBQUEsZ0JBQUEsQ0FBQTs7QUFTQSxJQUFBLHlCQUFBLEdBQUEsV0FBQTtBQUFXLElBQUEsaUJBQUEsQ0FBQTs7QUFBK0IsSUFBQSx1QkFBQTtBQUMxQyxJQUFBLHlCQUFBLEdBQUEsZUFBQSxDQUFBLEVBQTRCLEdBQUEsY0FBQSxDQUFBO0FBQ2QsSUFBQSxxQkFBQSxTQUFBLFNBQUEsd0VBQUE7QUFBQSxNQUFBLHdCQUFBLEdBQUE7QUFBQSxZQUFBLFNBQUEsd0JBQUE7QUFBQSxhQUFBLHNCQUFTLE9BQUEsTUFBQSxDQUFPO0lBQUEsQ0FBQTtBQUFFLElBQUEsaUJBQUEsRUFBQTs7QUFBOEIsSUFBQSx1QkFBQSxFQUFhLEVBQzdELEVBQ0Y7QUFHaEIsSUFBQSx5QkFBQSxJQUFBLGVBQUEsQ0FBQSxFQUFpQyxJQUFBLGNBQUEsQ0FBQSxFQUNDLElBQUEsYUFBQSxFQUNqQixJQUFBLGFBQUEsQ0FBQTtBQUNhLElBQUEsaUJBQUEsRUFBQTs7QUFBK0IsSUFBQSx1QkFBQSxFQUFZLEVBQ3ZEO0FBR2hCLElBQUEseUJBQUEsSUFBQSxpQkFBQSxDQUFBOztBQUFpQyxJQUFBLHFCQUFBLGFBQUEsU0FBQSw4RUFBQSxRQUFBO0FBQUEsTUFBQSx3QkFBQSxHQUFBO0FBQUEsWUFBQSxTQUFBLHdCQUFBO0FBQUEsYUFBQSxzQkFBYSxPQUFBLGFBQUEsTUFBQSxDQUFvQjtJQUFBLENBQUE7QUFDZixJQUFBLHVCQUFBO0FBRXJELElBQUEscUJBQUEsSUFBQSx1REFBQSxHQUFBLEdBQUEsWUFBQSxFQUFBOztBQTJCQSxJQUFBLHFCQUFBLElBQUEsMkRBQUEsR0FBQSxHQUFBLGdCQUFBLENBQUE7O0FBVUYsSUFBQSx1QkFBQTs7Ozs7QUFqRWMsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsZUFBQSxJQUFBO0FBRU8sSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLHNCQUFBLEdBQUEsSUFBQSxPQUFBLGNBQUEsQ0FBQTtBQVNKLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNEJBQUEsc0JBQUEsR0FBQSxJQUFBLGVBQUEsQ0FBQTtBQUVxQixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLElBQUEsSUFBQSxjQUFBLENBQUE7QUFLdkIsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxjQUFBLElBQUE7QUFHaUIsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw0QkFBQSxzQkFBQSxJQUFBLElBQUEsZUFBQSxDQUFBO0FBSzVCLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsZ0NBQUEsZUFBQSxzQkFBQSxJQUFBLElBQUEsb0JBQUEsQ0FBQTtBQURlLElBQUEscUJBQUEsWUFBQSxHQUFBO0FBR1MsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLHNCQUFBLElBQUEsSUFBQSxPQUFBLG1CQUFBLENBQUE7QUEyQlgsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLHNCQUFBLElBQUEsSUFBQSxPQUFBLGNBQUEsQ0FBQTs7Ozs7QUF5Q1QsSUFBQSxrQ0FBQSxDQUFBO0FBQ0UsSUFBQSx5QkFBQSxHQUFBLG9CQUFBLEVBQUEsRUFBZ0MsR0FBQSxXQUFBO0FBQ2xCLElBQUEsaUJBQUEsQ0FBQTtBQUFZLElBQUEsdUJBQUEsRUFBWTs7Ozs7QUFBeEIsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw2QkFBQSxLQUFBLGFBQUEsR0FBQTs7Ozs7O0FBU2hCLElBQUEseUJBQUEsR0FBQSxXQUFBLEVBQUEsRUFDa0QsR0FBQSxrQkFBQSxDQUFBO0FBQ2hDLElBQUEscUJBQUEsU0FBQSxTQUFBLG9IQUFBO0FBQUEsTUFBQSx3QkFBQSxJQUFBO0FBQUEsWUFBQSxTQUFBLHdCQUFBLENBQUE7QUFBQSxhQUFBLHNCQUFTLE9BQUEsdUJBQUEsQ0FBd0I7SUFBQSxDQUFBO0FBQy9DLElBQUEsb0JBQUEsR0FBQSxZQUFBLEVBQUE7QUFDRixJQUFBLHVCQUFBLEVBQWlCOzs7OztBQUxyQixJQUFBLGtDQUFBLENBQUE7QUFDRSxJQUFBLHFCQUFBLEdBQUEsbUZBQUEsR0FBQSxHQUFBLFdBQUEsRUFBQTs7Ozs7OztBQUFVLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsT0FBQSxZQUFBLG1CQUFBLE9BQUEsS0FBQSxFQUFBLEtBQUEsT0FBQSxZQUFBLG1CQUFBLE9BQUEsS0FBQSxNQUFBLENBQUE7Ozs7O0FBRmQsSUFBQSxrQ0FBQSxDQUFBO0FBQ0UsSUFBQSxxQkFBQSxHQUFBLHlFQUFBLEdBQUEsR0FBQSxnQkFBQSxDQUFBOzs7Ozs7QUFBZSxJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLHNCQUFBLEdBQUEsR0FBQSxPQUFBLGNBQUEsQ0FBQTs7Ozs7O0FBbkNuQixJQUFBLHlCQUFBLEdBQUEsY0FBQSxDQUFBLEVBQWlDLEdBQUEsYUFBQSxFQUNsQixHQUFBLFdBQUE7QUFFQSxJQUFBLGlCQUFBLENBQUE7O0FBQStCLElBQUEsdUJBQUE7QUFDMUMsSUFBQSx5QkFBQSxHQUFBLGVBQUEsQ0FBQSxFQUE0QixHQUFBLGNBQUEsQ0FBQTtBQUNkLElBQUEscUJBQUEsU0FBQSxTQUFBLHVFQUFBO0FBQUEsTUFBQSx3QkFBQSxJQUFBO0FBQUEsWUFBQSxTQUFBLHdCQUFBO0FBQUEsYUFBQSxzQkFBUyxPQUFBLE1BQUEsQ0FBTztJQUFBLENBQUE7QUFBRSxJQUFBLGlCQUFBLENBQUE7O0FBQThCLElBQUEsdUJBQUEsRUFBYSxFQUM3RCxFQUNGO0FBR2hCLElBQUEseUJBQUEsR0FBQSxlQUFBLENBQUEsRUFBaUMsSUFBQSxjQUFBLENBQUEsRUFDQyxJQUFBLGFBQUEsRUFDakIsSUFBQSxhQUFBLENBQUE7QUFDYSxJQUFBLGlCQUFBLEVBQUE7O0FBQStCLElBQUEsdUJBQUEsRUFBWSxFQUN2RDtBQUdoQixJQUFBLHlCQUFBLElBQUEsaUJBQUEsQ0FBQTs7QUFBaUMsSUFBQSxxQkFBQSxhQUFBLFNBQUEsNkVBQUEsUUFBQTtBQUFBLE1BQUEsd0JBQUEsSUFBQTtBQUFBLFlBQUEsU0FBQSx3QkFBQTtBQUFBLGFBQUEsc0JBQWEsT0FBQSxhQUFBLE1BQUEsQ0FBb0I7SUFBQSxDQUFBO0FBQ2IsSUFBQSx1QkFBQTtBQUVyRCxJQUFBLHlCQUFBLElBQUEsWUFBQSxFQUFBLEVBQXlCLElBQUEsZ0JBQUE7QUFLckIsSUFBQSxxQkFBQSxJQUFBLDBEQUFBLEdBQUEsR0FBQSxnQkFBQSxFQUFBO0FBT0YsSUFBQSx1QkFBQSxFQUFpQjtBQUVuQixJQUFBLHFCQUFBLElBQUEsMERBQUEsR0FBQSxHQUFBLGdCQUFBLENBQUE7O0FBVUYsSUFBQSx1QkFBQTs7OztBQTVDWSxJQUFBLHFCQUFBLGVBQUEsSUFBQTtBQUdHLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNEJBQUEsc0JBQUEsR0FBQSxJQUFBLGVBQUEsQ0FBQTtBQUVxQixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLEdBQUEsSUFBQSxjQUFBLENBQUE7QUFLdkIsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxjQUFBLElBQUE7QUFHaUIsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw0QkFBQSxzQkFBQSxJQUFBLElBQUEsZUFBQSxDQUFBO0FBSzFCLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsZ0NBQUEsZUFBQSxzQkFBQSxJQUFBLElBQUEsb0JBQUEsQ0FBQTtBQURhLElBQUEscUJBQUEsWUFBQSxHQUFBO0FBR0wsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxTQUFBLElBQUE7QUFLNEIsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxXQUFBLE9BQUEsVUFBQTtBQVN2QixJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLHNCQUFBLElBQUEsSUFBQSxPQUFBLGNBQUEsQ0FBQTs7O0FEakViLElBQU8scUJBQVAsTUFBTyxtQkFBaUI7RUFlNUIsWUFDbUIsV0FDVixXQUNVLFdBQ0EsV0FDQSxvQkFDQSxXQUNBLGFBQ1QsV0FBMkI7QUFQbEIsU0FBQSxZQUFBO0FBQ1YsU0FBQSxZQUFBO0FBQ1UsU0FBQSxZQUFBO0FBQ0EsU0FBQSxZQUFBO0FBQ0EsU0FBQSxxQkFBQTtBQUNBLFNBQUEsWUFBQTtBQUNBLFNBQUEsY0FBQTtBQUNULFNBQUEsWUFBQTtBQW5CVixTQUFBLFlBQXFCO0FBRXJCLFNBQUEsYUFBYSxDQUFBO0FBT2IsU0FBQSxhQUFhLElBQUksZ0JBQXdCLEVBQUU7RUFXdkM7RUFFSixXQUFRO0FBQ04sU0FBSyxPQUFPLEtBQUssVUFBVSxJQUFJLE1BQU07QUFDckMsUUFBSSxLQUFLLEtBQUssU0FBUyxLQUFLLEtBQUssTUFBTSxTQUFTLEdBQUc7SUFFbkQsT0FBTztBQUNMLFdBQUssS0FBSyxRQUFRLENBQUE7SUFDcEI7QUFFQSxTQUFLLFFBQVEsS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLEVBQUU7QUFFbkQsU0FBSyxxQkFBb0I7QUFFekIsU0FBSyxpQkFBaUIsS0FBSyxVQUFVLGlCQUFnQjtBQUNyRCxTQUFLLGlCQUFpQixLQUFLLFVBQVUsaUJBQWdCO0VBQ3ZEO0VBRUEsY0FBVztFQUVYO0VBRUEsT0FBSTtBQUVGLFFBQUksS0FBSyxXQUFXO0FBQ2xCLFdBQUssWUFBWTtJQUNuQixPQUFPO0FBQ0wsV0FBSyxZQUFZO0lBQ25CO0VBQ0Y7RUFFQSx1QkFBb0I7QUFDbEIsU0FBSyxhQUFhLENBQUE7QUFFbEIsU0FBSyxjQUFjLEtBQUssVUFBVSxpQkFBaUIsS0FBSyxLQUFLLEVBQUUsRUFBRTs7TUFFL0QsVUFBVSxhQUFVO0FBQ2xCLFlBQUksUUFBUSxXQUFXLEdBQUc7QUFDeEIsa0JBQVEsSUFBSSx1QkFBdUI7QUFDbkMsZUFBSyxhQUFhLENBQUE7QUFDbEIsaUJBQU8sR0FBRyxDQUFBLENBQUU7UUFDZDtBQUNBLGNBQU0sWUFBWSxRQUFRLElBQUksWUFDNUIsS0FBSyxtQkFBbUIsbUJBQW1CLE9BQU8sRUFBRSxFQUFFLEtBQ3BELElBQUksYUFBWSxnREFDWCxTQUNBLFVBRlc7O1VBR2QsV0FBVyxRQUFRLGFBQWE7VUFDaEMsVUFBVSxRQUFRLFlBQVk7VUFDOUIsT0FBTyxPQUFPLFNBQVMsQ0FBQTtVQUN2QixHQUNGLFdBQVcsTUFBTSxHQUFHLGlDQUNmLFNBRGU7VUFFbEIsV0FBVztVQUNYLFVBQVU7VUFDVixPQUFPLE9BQU8sU0FBVSxDQUFBOztVQUN6QixDQUFDLENBQUMsQ0FDSjtBQUVILGVBQU8sY0FBYyxTQUFTLEVBQUUsS0FDOUIsSUFBSSxjQUFZLFNBQ2IsT0FBTyxhQUFXLFlBQVksTUFBUyxFQUN2QyxLQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsVUFBVSxjQUFjLEVBQUUsU0FBUyxDQUFDLEVBQ3JELElBQUksYUFBVTtBQUNiLGdCQUFNLGNBQWMsUUFBUSxVQUFVLE9BQU8sQ0FBQyxFQUFFLFlBQVc7QUFDM0QsY0FBSSxDQUFDLEtBQUssV0FBVyxTQUFTLFdBQVcsR0FBRztBQUMxQyxpQkFBSyxXQUFXLEtBQUssV0FBVztVQUNsQztBQUNBLGlCQUFPLGlDQUNGLFVBREU7WUFFTCxTQUFTOztRQUViLENBQUMsQ0FBQyxDQUNIO01BRUwsQ0FBQztNQUNELFdBQVcsU0FBTTtBQUNmLGdCQUFRLE1BQU0sK0JBQStCLEdBQUc7QUFDaEQsZUFBTyxHQUFHLENBQUEsQ0FBRTtNQUNkLENBQUM7SUFBQztBQUdKLFNBQUssc0JBQXNCLGNBQWMsQ0FBQyxLQUFLLGFBQWEsS0FBSyxVQUFVLENBQUMsRUFBRSxLQUM1RSxhQUFhLEdBQUcsR0FDaEIsSUFBSSxDQUFDLENBQUMsUUFBUSxJQUFJLE1BQUs7QUFDckIsVUFBSSxDQUFDO0FBQU0sZUFBTztBQUVsQixZQUFNLFdBQVcsT0FBTyxPQUFPLFdBQzdCLE1BQU0sVUFBVSxZQUFXLEVBQUcsU0FBUyxLQUFLLFlBQVcsQ0FBRSxLQUN6RCxNQUFNLFNBQVMsWUFBVyxFQUFHLFNBQVMsS0FBSyxZQUFXLENBQUUsS0FDeEQsTUFBTSxNQUFNLEtBQUssVUFBTSxLQUFLLFlBQVcsRUFBRyxTQUFTLEtBQUssWUFBVyxDQUFFLENBQUMsQ0FBQztBQUV6RSxhQUFPO0lBQ1QsQ0FBQyxHQUNELElBQUksY0FBVztBQUViLFdBQUssYUFBYSxDQUFBO0FBQ2xCLGVBQVMsUUFBUSxXQUFRO0FBQ3ZCLGNBQU0sY0FBYyxNQUFNLFVBQVUsT0FBTyxDQUFDLEVBQUUsWUFBVztBQUN6RCxZQUFJLENBQUMsS0FBSyxXQUFXLFNBQVMsV0FBVyxHQUFHO0FBQzFDLGVBQUssV0FBVyxLQUFLLFdBQVc7UUFDbEM7TUFDRixDQUFDO0FBQ0QsYUFBTztJQUNULENBQUMsR0FDRCxJQUFJLGNBQVksUUFBUSxJQUFJLG9CQUFvQixTQUFTLE1BQU0sQ0FBQyxHQUNoRSxXQUFXLFNBQU07QUFDZixjQUFRLE1BQU0sMkJBQTJCLEdBQUc7QUFDNUMsYUFBTyxHQUFHLENBQUEsQ0FBRTtJQUNkLENBQUMsQ0FBQztFQUVOO0VBRUEsYUFBYSxPQUFVO0FBQ3JCLFVBQU0sYUFBYSxNQUFNLE9BQU8sU0FBUztBQUN6QyxZQUFRLElBQUksMEJBQTBCLFVBQVU7QUFDaEQsU0FBSyxXQUFXLEtBQUssV0FBVyxLQUFJLENBQUU7RUFDeEM7RUFFQSxZQUFZLGVBQXNCLFFBQWM7QUFDOUMsV0FBTyxpQkFBaUIsY0FBYyxLQUFLLFVBQVEsS0FBSyxPQUFPLE1BQU07RUFDdkU7RUFFQSxZQUFZLGVBQXNCLFFBQWM7QUFDOUMsV0FBTyxpQkFBaUIsY0FBYyxLQUFLLFVBQVEsS0FBSyxPQUFPLE1BQU07RUFDdkU7RUFDTSx5QkFBc0I7O0FBQzFCLFVBQUksQ0FBQyxLQUFLLFFBQVEsQ0FBQyxLQUFLLEtBQUssUUFBUTtBQUNuQyxnQkFBUSxNQUFNLHdDQUF3QztBQUN0RDtNQUNGO0FBRUEsVUFBSTtBQUNGLGdCQUFRLElBQUksaUNBQWlDLEtBQUssS0FBSyxFQUFFO0FBQ3pELGNBQU0sVUFBVSxNQUFNLGNBQ3BCLEtBQUssVUFBVSxrQkFBa0IsS0FBSyxLQUFLLEVBQUUsRUFBRTtVQUM3QyxNQUFLOztTQUNOO0FBRUgsZ0JBQVEsSUFBSSxvQkFBb0IsUUFBUSxNQUFNO0FBRTlDLFlBQUksQ0FBQyxRQUFRLFFBQVE7QUFDbkIsa0JBQVEsSUFBSSx3QkFBd0I7QUFDcEM7UUFDRjtBQUVBLGNBQU0sV0FBVyxNQUFNLFFBQVEsSUFBSSxRQUFRLElBQUksWUFDN0MsY0FBYyxLQUFLLG1CQUFtQixtQkFBbUIsT0FBTyxFQUFFLEVBQUU7VUFDbEUsTUFBSzs7VUFFTCxXQUFXLFNBQU07QUFDZixvQkFBUSxNQUFNLDhCQUE4QixPQUFPLEVBQUUsS0FBSyxHQUFHO0FBQzdELG1CQUFPLEdBQUcsaUNBQUssU0FBTCxFQUFhLFdBQVcsV0FBVyxVQUFVLFVBQVMsRUFBRTtVQUNwRSxDQUFDO1FBQUMsQ0FDSCxDQUFDLENBQ0g7QUFFRCxjQUFNLG1CQUFtQixTQUFTLE9BQU8sYUFBVyxZQUFZLE1BQVM7QUFDekUsZ0JBQVEsSUFBSSxnQkFBZ0I7QUFDNUIsY0FBTSxpQkFBaUIsS0FBSyxxQkFBcUIsa0JBQWtCLE1BQU0sY0FBYyxLQUFLLFlBQVksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEgsZ0JBQVEsSUFBSSxjQUFjO0FBQzFCLGNBQU0sc0JBQXNCLEtBQUssMkJBQTJCLGNBQWM7QUFDMUUsZ0JBQVEsSUFBSSxtQkFBbUI7QUFDL0IsWUFBSSxvQkFBb0IsU0FBUyxHQUFHO0FBQ2xDLGdCQUFNLEtBQUssbUJBQW1CLG1CQUFtQjtRQUNuRCxPQUFPO0FBQ0wsa0JBQVEsSUFBSSxrQ0FBa0M7UUFDaEQ7TUFDRixTQUFTLEtBQUs7QUFDWixnQkFBUSxNQUFNLDZCQUE2QixHQUFHO01BQ2hEO0lBQ0Y7O0VBRUEscUJBQXFCLFVBQVUsYUFBVztBQUN4QyxXQUFPLFNBQVMsT0FBTyxZQUNyQixDQUFDLFlBQVksS0FBSyxnQkFBYyxXQUFXLE9BQU8sT0FBTyxFQUFFLENBQUM7RUFFaEU7RUFFQSwyQkFBMkIsaUJBQWU7QUFFeEMsVUFBTSxnQkFBZ0IsZ0JBQWdCLEtBQUssQ0FBQyxHQUFHLE1BQUs7QUFDbEQsWUFBTSxRQUFRLEdBQUcsRUFBRSxTQUFTLElBQUksRUFBRSxRQUFRLEdBQUcsWUFBVztBQUN4RCxZQUFNLFFBQVEsR0FBRyxFQUFFLFNBQVMsSUFBSSxFQUFFLFFBQVEsR0FBRyxZQUFXO0FBQ3hELGFBQU8sTUFBTSxjQUFjLEtBQUs7SUFDbEMsQ0FBQztBQUdELFdBQU8sY0FBYyxJQUFJLGFBQVc7TUFDbEMsTUFBTTtNQUNOLE1BQU0sT0FBTztNQUNiLE9BQU8sR0FBRyxPQUFPLFNBQVMsSUFBSSxPQUFPLFFBQVE7TUFDN0MsT0FBTyxPQUFPO01BQ2QsU0FBUztNQUNUO0VBQ0o7RUFFTSxtQkFBbUIsY0FBWTs7QUFDbkMsWUFBTSxRQUFRLE1BQU0sS0FBSyxVQUFVLE9BQU87UUFDeEMsUUFBUSxNQUFNLGNBQWMsS0FBSyxVQUFVLElBQUksa0JBQWtCLENBQUM7UUFDbEUsUUFBUTtRQUNSLFNBQVM7VUFDUDtZQUNFLE1BQU0sTUFBTSxjQUFjLEtBQUssVUFBVSxJQUFJLGVBQWUsQ0FBQztZQUM3RCxNQUFNO1lBQ04sU0FBUyxNQUFNLFFBQVEsSUFBSSxnQkFBZ0I7O1VBRTdDO1lBQ0UsTUFBTSxNQUFNLGNBQWMsS0FBSyxVQUFVLElBQUksWUFBWSxDQUFDO1lBQzFELFNBQVMsQ0FBQyxvQkFBbUI7QUFDM0IsOEJBQWdCLFFBQVEsY0FBVztBQUNqQyx3QkFBUSxJQUFJLFFBQVE7QUFDcEIscUJBQUssd0JBQXdCLEtBQUssS0FBSyxJQUFJLFFBQVE7Y0FDckQsQ0FBQztZQUNIOzs7T0FHTDtBQUNELFlBQU0sTUFBTSxRQUFPO0lBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE4Rk0sd0JBQXdCLFFBQVEsU0FBTzs7QUFDM0MsWUFBTSxLQUFLLFVBQVUsYUFBYSxRQUFRLE9BQU8sRUFBRSxLQUFLLE1BQUs7QUFDM0QsYUFBSyxpQkFBZ0I7TUFDdkIsQ0FBQyxFQUNFLE1BQU0sQ0FBQyxRQUFPO0FBQ2IsYUFBSyxpQkFBaUIsR0FBRztNQUMzQixDQUFDO0lBQ0w7O0VBR00sZ0JBQWdCLFFBQU07O0FBQzFCLFVBQUk7QUFDRixjQUFNLEtBQUssVUFBVSxnQkFBZ0IsS0FBSyxLQUFLLElBQUksT0FBTyxFQUFFO0FBQzVELGNBQU0sS0FBSyxpQkFBZ0I7TUFDN0IsU0FBUyxHQUFHO0FBQ1YsYUFBSyxpQkFBaUIsQ0FBQztNQUN6QjtJQUNGOztFQUVNLFdBQVcsUUFBZTs7QUFDOUIsY0FBUSxJQUFJLFlBQVk7QUFDeEIsWUFBTSxRQUFRLE1BQU0sS0FBSyxVQUFVLE9BQU87UUFDeEMsV0FBVztRQUNYLG1CQUFtQixNQUFNLEtBQUssVUFBVSxPQUFNO1FBQzlDLFlBQVk7UUFDWixjQUFjO1FBQ2QsZ0JBQWdCO1VBQ2QsTUFBTTs7T0FFVDtBQUNELFlBQU0sUUFBTztBQUViLFlBQU0sRUFBRSxNQUFNLEtBQUksSUFBSyxNQUFNLE1BQU0sY0FBYTtBQUVoRCxVQUFJLFNBQVMsV0FBVztNQUN4QjtJQUNGOztFQUVNLG1CQUFnQjs7QUFDcEIsWUFBTSxRQUFRLE1BQU0sS0FBSyxVQUFVLE9BQU87UUFDeEMsU0FBUyxNQUFNLGNBQWMsS0FBSyxVQUFVLElBQUksdUJBQXVCLENBQUM7UUFDeEUsVUFBVTtRQUNWLFVBQVU7UUFDVixPQUFPO09BQ1I7QUFFRCxZQUFNLE1BQU0sUUFBTztJQUNyQjs7RUFFTSxzQkFBbUI7O0FBQ3ZCLFlBQU0sUUFBUSxNQUFNLEtBQUssVUFBVSxPQUFPO1FBQ3hDLFNBQVMsTUFBTSxjQUFjLEtBQUssVUFBVSxJQUFJLHVCQUF1QixDQUFDO1FBQ3hFLFVBQVU7UUFDVixVQUFVO1FBQ1YsT0FBTztPQUNSO0FBQ0QsWUFBTSxNQUFNLFFBQU87SUFDckI7O0VBRU0saUJBQWlCLE9BQUs7O0FBQzFCLFlBQU0sUUFBUSxNQUFNLEtBQUssVUFBVSxPQUFPO1FBQ3hDLFNBQVMsTUFBTTtRQUNmLFVBQVU7UUFDVixVQUFVO1FBQ1YsT0FBTztPQUNSO0FBRUQsWUFBTSxNQUFNLFFBQU87SUFDckI7O0VBRU0sUUFBSzs7QUFDVCxhQUFPLE1BQU0sS0FBSyxVQUFVLFFBQVEsTUFBTSxPQUFPO0lBQ25EOztFQUVNLFVBQU87O0FBQ1gsYUFBTyxNQUFNLEtBQUssVUFBVSxRQUFRLEtBQUssTUFBTSxTQUFTO0lBQzFEOzs7O21DQTdaVyxvQkFBaUIsNEJBQUEsZUFBQSxHQUFBLDRCQUFBLFNBQUEsR0FBQSw0QkFBQSxlQUFBLEdBQUEsNEJBQUEsZUFBQSxHQUFBLDRCQUFBLGtCQUFBLEdBQUEsNEJBQUEsZUFBQSxHQUFBLDRCQUFBLFdBQUEsR0FBQSw0QkFBQSxnQkFBQSxDQUFBO0FBQUE7bUZBQWpCLG9CQUFpQixXQUFBLENBQUEsQ0FBQSxxQkFBQSxDQUFBLEdBQUEsUUFBQSxFQUFBLE1BQUEsT0FBQSxHQUFBLFlBQUEsT0FBQSxPQUFBLEdBQUEsTUFBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLFdBQUEsRUFBQSxHQUFBLENBQUEsR0FBQSxRQUFBLFVBQUEsR0FBQSxDQUFBLEdBQUEsYUFBQSxHQUFBLENBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxZQUFBLEdBQUEsQ0FBQSxZQUFBLFVBQUEsR0FBQSxDQUFBLFFBQUEsT0FBQSxHQUFBLENBQUEsWUFBQSxRQUFBLGVBQUEsaUJBQUEsR0FBQSxhQUFBLFlBQUEsYUFBQSxHQUFBLENBQUEsR0FBQSxTQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxhQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxXQUFBLEdBQUEsQ0FBQSxHQUFBLFNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLEdBQUEsU0FBQSxTQUFBLEdBQUEsQ0FBQSxTQUFBLE9BQUEsR0FBQSxDQUFBLFVBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFNBQUEsVUFBQSxRQUFBLFNBQUEsUUFBQSxTQUFBLEdBQUEsU0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsT0FBQSxHQUFBLENBQUEsT0FBQSxpQ0FBQSxPQUFBLHdEQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxpQkFBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxTQUFBLFVBQUEsUUFBQSxTQUFBLFFBQUEsU0FBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLE9BQUEsaUNBQUEsT0FBQSxzREFBQSxHQUFBLENBQUEsR0FBQSxLQUFBLEdBQUEsQ0FBQSxZQUFBLFVBQUEsY0FBQSxPQUFBLFFBQUEsU0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFlBQUEsVUFBQSxjQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsQ0FBQSxHQUFBLFVBQUEsU0FBQSwyQkFBQSxJQUFBLEtBQUE7QUFBQSxNQUFBLEtBQUEsR0FBQTtBQ3pDOUIsSUFBQSxxQkFBQSxHQUFBLDJDQUFBLElBQUEsSUFBQSxnQkFBQSxDQUFBOztBQXVFQSxJQUFBLHFCQUFBLEdBQUEsMENBQUEsSUFBQSxJQUFBLGVBQUEsTUFBQSxHQUFBLGdDQUFBOzs7O0FBdkVlLElBQUEscUJBQUEsUUFBQSxzQkFBQSxHQUFBLEdBQUEsSUFBQSxLQUFBLENBQUEsRUFBb0IsWUFBQSxXQUFBOzs7QUR5QzdCLElBQU8sb0JBQVA7OzZFQUFPLG1CQUFpQixFQUFBLFdBQUEscUJBQUEsVUFBQSx5REFBQSxZQUFBLEdBQUEsQ0FBQTtBQUFBLEdBQUE7Ozs7OztBR2xDbEIsSUFBQSx5QkFBQSxHQUFBLGNBQUEsQ0FBQTtBQUErQixJQUFBLHFCQUFBLFNBQUEsU0FBQSxrSUFBQTtBQUFBLE1BQUEsd0JBQUEsR0FBQTtBQUFBLFlBQUEsU0FBQSx3QkFBQSxDQUFBO0FBQUEsYUFBQSxzQkFBUyxPQUFBLEtBQUEsQ0FBTTtJQUFBLENBQUE7QUFBRSxJQUFBLGlCQUFBLENBQUE7O0FBQTZCLElBQUEsdUJBQUE7OztBQUE3QixJQUFBLG9CQUFBO0FBQUEsSUFBQSw0QkFBQSxzQkFBQSxHQUFBLEdBQUEsYUFBQSxDQUFBOzs7Ozs7QUFDaEQsSUFBQSx5QkFBQSxHQUFBLGNBQUEsQ0FBQTtBQUE4QixJQUFBLHFCQUFBLFNBQUEsU0FBQSxrSUFBQTtBQUFBLE1BQUEsd0JBQUEsR0FBQTtBQUFBLFlBQUEsU0FBQSx3QkFBQSxDQUFBO0FBQUEsYUFBQSxzQkFBUyxPQUFBLEtBQUEsQ0FBTTtJQUFBLENBQUE7QUFBRSxJQUFBLGlCQUFBLENBQUE7O0FBQTZCLElBQUEsdUJBQUE7OztBQUE3QixJQUFBLG9CQUFBO0FBQUEsSUFBQSw0QkFBQSxzQkFBQSxHQUFBLEdBQUEsYUFBQSxDQUFBOzs7OztBQUhqRCxJQUFBLHlCQUFBLEdBQUEsZUFBQSxFQUFBO0FBRUUsSUFBQSxxQkFBQSxHQUFBLHFHQUFBLEdBQUEsR0FBQSxjQUFBLEVBQUEsRUFBZ0QsR0FBQSxxR0FBQSxHQUFBLEdBQUEsY0FBQSxFQUFBO0FBRWxELElBQUEsdUJBQUE7Ozs7QUFGZSxJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLENBQUEsT0FBQSxTQUFBO0FBQ0EsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxPQUFBLFNBQUE7Ozs7O0FBSmpCLElBQUEsa0NBQUEsQ0FBQTtBQUNFLElBQUEscUJBQUEsR0FBQSx3RkFBQSxHQUFBLEdBQUEsZUFBQSxFQUFBOzs7Ozs7OztBQUNHLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsT0FBQSxZQUFBLGtCQUFBLFFBQUEsRUFBQSxLQUFBLE9BQUEsWUFBQSxrQkFBQSxRQUFBLE1BQUEsQ0FBQTs7Ozs7QUFIUCxJQUFBLGtDQUFBLENBQUE7QUFDRSxJQUFBLHFCQUFBLEdBQUEsMEVBQUEsR0FBQSxHQUFBLGdCQUFBLENBQUE7Ozs7OztBQUFlLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsc0JBQUEsR0FBQSxHQUFBLE9BQUEsY0FBQSxDQUFBOzs7Ozs7QUE0QmYsSUFBQSx5QkFBQSxHQUFBLGNBQUEsRUFBQTtBQUFtRixJQUFBLHFCQUFBLFNBQUEsU0FBQSxzR0FBQTtBQUFBLE1BQUEsd0JBQUEsR0FBQTtBQUFBLFlBQUEsU0FBQSx3QkFBQSxDQUFBO0FBQUEsYUFBQSxzQkFBUyxPQUFBLFFBQUEsQ0FBUztJQUFBLENBQUE7QUFDbkcsSUFBQSxpQkFBQSxHQUFBLGlCQUFBO0FBQ0EsSUFBQSxvQkFBQSxHQUFBLFlBQUEsRUFBQTtBQUNGLElBQUEsdUJBQUE7Ozs7O0FBSkYsSUFBQSxrQ0FBQSxDQUFBO0FBQ0UsSUFBQSxxQkFBQSxHQUFBLHlFQUFBLEdBQUEsR0FBQSxjQUFBLEVBQUE7Ozs7Ozs7QUFBYSxJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLE9BQUEsWUFBQSxrQkFBQSxRQUFBLEVBQUEsQ0FBQTs7Ozs7O0FBS2YsSUFBQSx5QkFBQSxHQUFBLGNBQUEsRUFBQTtBQUFZLElBQUEscUJBQUEsU0FBQSxTQUFBLHVGQUFBO0FBQUEsWUFBQSxXQUFBLHdCQUFBLElBQUEsRUFBQTtBQUFBLFlBQUEsU0FBQSx3QkFBQSxDQUFBO0FBQUEsYUFBQSxzQkFBUyxPQUFBLFVBQUEsUUFBQSxDQUFlO0lBQUEsQ0FBQTtBQUNsQyxJQUFBLGlCQUFBLENBQUE7QUFDRixJQUFBLHVCQUFBOzs7O0FBREUsSUFBQSxvQkFBQTtBQUFBLElBQUEsNkJBQUEsS0FBQSxVQUFBLEdBQUE7Ozs7OztBQWdCUSxJQUFBLHlCQUFBLEdBQUEsb0JBQUEsRUFBQSxFQUF5RSxHQUFBLG1CQUFBLEVBQUE7QUFDdEMsSUFBQSxxQkFBQSxTQUFBLFNBQUEsNktBQUE7QUFBQSxNQUFBLHdCQUFBLElBQUE7QUFBQSxNQUFBLHdCQUFBLENBQUE7QUFBQSxZQUFBLFdBQUEsc0JBQUEsQ0FBQTtBQUFBLFlBQUEsYUFBQSx3QkFBQSxFQUFBO0FBQUEsWUFBQSxTQUFBLHdCQUFBLENBQUE7QUFBQSxhQUFBLHNCQUFTLE9BQUEsbUJBQUEsVUFBQSxVQUFBLENBQWdDO0lBQUEsQ0FBQTtBQUN4RSxJQUFBLG9CQUFBLEdBQUEsWUFBQSxFQUFBO0FBQ0YsSUFBQSx1QkFBQSxFQUFrQjs7Ozs7QUFKdEIsSUFBQSxrQ0FBQSxDQUFBO0FBQ0UsSUFBQSxxQkFBQSxHQUFBLDJJQUFBLEdBQUEsR0FBQSxvQkFBQSxFQUFBOzs7Ozs7O0FBQW1CLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsT0FBQSxZQUFBLG1CQUFBLFFBQUEsRUFBQSxDQUFBOzs7Ozs7QUFRbkIsSUFBQSx5QkFBQSxHQUFBLFlBQUEsRUFBQTtBQUNFLElBQUEscUJBQUEsU0FBQSxTQUFBLCtJQUFBO0FBQUEsTUFBQSx3QkFBQSxJQUFBO0FBQUEsWUFBQSxhQUFBLHdCQUFBLENBQUEsRUFBQTtBQUFBLFlBQUEsU0FBQSx3QkFBQSxDQUFBO0FBQUEsYUFBQSxzQkFBUyxPQUFBLGlCQUFBLFVBQUEsQ0FBd0I7SUFBQSxDQUFBO0FBQUUsSUFBQSx1QkFBQTs7Ozs7QUFFbkMsSUFBQSxvQkFBQSxHQUFBLE9BQUEsRUFBQTs7Ozs7QUFFQSxJQUFBLG9CQUFBLEdBQUEsT0FBQSxFQUFBOzs7O0FBQW1DLElBQUEsZ0NBQUEsT0FBQSxjQUFBLE9BQUEsT0FBQSxXQUFBLGdCQUFBLHVCQUFBOzs7OztBQUlyQyxJQUFBLHlCQUFBLEdBQUEsYUFBQSxFQUFBO0FBQXdELElBQUEsaUJBQUEsQ0FBQTtBQUFRLElBQUEsdUJBQUE7Ozs7QUFBUixJQUFBLG9CQUFBO0FBQUEsSUFBQSw0QkFBQSxRQUFBOzs7Ozs7QUFwQjVELElBQUEseUJBQUEsR0FBQSxvQkFBQSxNQUFBLENBQUE7QUFFRSxJQUFBLHFCQUFBLEdBQUEsd0hBQUEsR0FBQSxHQUFBLGdCQUFBLENBQUE7O0FBUUEsSUFBQSx5QkFBQSxHQUFBLFlBQUEsRUFBQTtBQUNFLElBQUEscUJBQUEsR0FBQSxvSEFBQSxHQUFBLEdBQUEsWUFBQSxFQUFBO0FBRUEsSUFBQSx5QkFBQSxHQUFBLGNBQUEsRUFBQTtBQUF5QixJQUFBLHFCQUFBLFNBQUEsU0FBQSxzSUFBQTtBQUFBLE1BQUEsd0JBQUEsSUFBQTtBQUFBLFlBQUEsYUFBQSx3QkFBQSxFQUFBO0FBQUEsWUFBQSxTQUFBLHdCQUFBLENBQUE7QUFBQSxhQUFBLHNCQUFTLE9BQUEsV0FBQSxVQUFBLENBQWtCO0lBQUEsQ0FBQTtBQUNsRCxJQUFBLHFCQUFBLEdBQUEsK0dBQUEsR0FBQSxHQUFBLE9BQUEsRUFBQSxFQUMrRCxHQUFBLCtHQUFBLEdBQUEsR0FBQSxPQUFBLEVBQUE7QUFFakUsSUFBQSx1QkFBQTtBQUNBLElBQUEseUJBQUEsR0FBQSxhQUFBLEVBQUE7QUFBaUMsSUFBQSxxQkFBQSxTQUFBLFNBQUEscUlBQUE7QUFBQSxNQUFBLHdCQUFBLElBQUE7QUFBQSxZQUFBLGFBQUEsd0JBQUEsRUFBQTtBQUFBLFlBQUEsU0FBQSx3QkFBQSxDQUFBO0FBQUEsYUFBQSxzQkFBUyxPQUFBLFdBQUEsVUFBQSxDQUFrQjtJQUFBLENBQUE7QUFBRSxJQUFBLGlCQUFBLEVBQUE7QUFDekMsSUFBQSx1QkFBQTtBQUNyQixJQUFBLHFCQUFBLElBQUEsc0hBQUEsR0FBQSxHQUFBLGFBQUEsRUFBQTtBQUNGLElBQUEsdUJBQUEsRUFBVzs7Ozs7QUFuQkksSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLHNCQUFBLEdBQUEsR0FBQSxPQUFBLGNBQUEsQ0FBQTtBQVNGLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxPQUFBLGFBQUEsSUFBQTtBQUdILElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxDQUFBLFdBQUEsY0FBQTtBQUVBLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsV0FBQSxjQUFBO0FBRXNELElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNkJBQUEsSUFBQSxXQUFBLFdBQUEsS0FBQSxXQUFBLFVBQUEsRUFBQTtBQUVsQyxJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxXQUFBLFdBQUEsS0FBQTs7Ozs7QUF0QmxDLElBQUEsa0NBQUEsQ0FBQTtBQUVFLElBQUEscUJBQUEsR0FBQSx5R0FBQSxJQUFBLEdBQUEsb0JBQUEsQ0FBQTs7Ozs7O0FBQXlCLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsV0FBQSxXQUFBLFdBQUE7Ozs7O0FBUDdCLElBQUEsa0NBQUEsQ0FBQTtBQUNFLElBQUEseUJBQUEsR0FBQSxvQkFBQSxFQUFBLEVBQWdDLEdBQUEsV0FBQTtBQUNsQixJQUFBLGlCQUFBLENBQUE7QUFBWSxJQUFBLHVCQUFBLEVBQVk7QUFHdEMsSUFBQSxxQkFBQSxHQUFBLHNGQUFBLEdBQUEsR0FBQSxnQkFBQSxFQUFBOzs7Ozs7QUFIYyxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDZCQUFBLEtBQUEsYUFBQSxHQUFBO0FBR21CLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFdBQUEsa0JBQUE7Ozs7O0FBUHZDLElBQUEseUJBQUEsR0FBQSxZQUFBLEVBQUEsRUFBZ0YsR0FBQSxnQkFBQTtBQUU1RSxJQUFBLHFCQUFBLEdBQUEsdUVBQUEsR0FBQSxHQUFBLGdCQUFBLEVBQUE7QUFnQ0YsSUFBQSx1QkFBQSxFQUFpQjs7OztBQWxDVCxJQUFBLHFCQUFBLFNBQUEsSUFBQTtBQUU0QixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLHFCQUFBLFdBQUEsT0FBQSxVQUFBOzs7Ozs7QUFzQ2xDLElBQUEseUJBQUEsR0FBQSxXQUFBLEVBQUEsRUFDa0QsR0FBQSxrQkFBQSxDQUFBO0FBQ2hDLElBQUEscUJBQUEsU0FBQSxTQUFBLHNIQUFBO0FBQUEsTUFBQSx3QkFBQSxJQUFBO0FBQUEsWUFBQSxTQUFBLHdCQUFBLENBQUE7QUFBQSxhQUFBLHNCQUFTLE9BQUEsZ0JBQUEsQ0FBaUI7SUFBQSxDQUFBO0FBQ3hDLElBQUEsb0JBQUEsR0FBQSxZQUFBLEVBQUE7QUFDRixJQUFBLHVCQUFBLEVBQWlCOzs7OztBQUxyQixJQUFBLGtDQUFBLENBQUE7QUFDRSxJQUFBLHFCQUFBLEdBQUEscUZBQUEsR0FBQSxHQUFBLFdBQUEsRUFBQTs7Ozs7Ozs7QUFBVSxJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLE9BQUEsWUFBQSxtQkFBQSxRQUFBLEVBQUEsS0FBQSxPQUFBLFlBQUEsbUJBQUEsUUFBQSxNQUFBLENBQUE7Ozs7O0FBRmQsSUFBQSxrQ0FBQSxDQUFBO0FBQ0UsSUFBQSxxQkFBQSxHQUFBLDJFQUFBLEdBQUEsR0FBQSxnQkFBQSxDQUFBOzs7Ozs7QUFBZSxJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLHNCQUFBLEdBQUEsR0FBQSxPQUFBLGNBQUEsQ0FBQTs7Ozs7O0FBakZyQixJQUFBLGtDQUFBLENBQUE7QUFDRSxJQUFBLHlCQUFBLEdBQUEsY0FBQSxDQUFBLEVBQWlDLEdBQUEsYUFBQTtBQUU3QixJQUFBLHFCQUFBLEdBQUEsMkRBQUEsR0FBQSxHQUFBLGdCQUFBLENBQUE7O0FBU0EsSUFBQSx5QkFBQSxHQUFBLFdBQUE7QUFBVyxJQUFBLGlCQUFBLENBQUE7O0FBQWdDLElBQUEsdUJBQUE7QUFDM0MsSUFBQSx5QkFBQSxHQUFBLGVBQUEsQ0FBQSxFQUE0QixHQUFBLGNBQUEsQ0FBQTtBQUNkLElBQUEscUJBQUEsU0FBQSxTQUFBLHlFQUFBO0FBQUEsTUFBQSx3QkFBQSxHQUFBO0FBQUEsWUFBQSxTQUFBLHdCQUFBO0FBQUEsYUFBQSxzQkFBUyxPQUFBLE1BQUEsQ0FBTztJQUFBLENBQUE7QUFBRSxJQUFBLGlCQUFBLEVBQUE7O0FBQThCLElBQUEsdUJBQUEsRUFBYSxFQUM3RCxFQUNGO0FBR2hCLElBQUEseUJBQUEsSUFBQSxlQUFBLENBQUEsRUFBaUMsSUFBQSxjQUFBLENBQUEsRUFDQyxJQUFBLGFBQUEsRUFDakIsSUFBQSxhQUFBLENBQUE7QUFDYSxJQUFBLGlCQUFBLEVBQUE7O0FBQWdDLElBQUEsdUJBQUEsRUFBWSxFQUN4RDtBQUloQixJQUFBLHlCQUFBLElBQUEsaUJBQUEsRUFBQTs7QUFBaUMsSUFBQSxxQkFBQSxhQUFBLFNBQUEsK0VBQUEsUUFBQTtBQUFBLE1BQUEsd0JBQUEsR0FBQTtBQUFBLFlBQUEsU0FBQSx3QkFBQTtBQUFBLGFBQUEsc0JBQWEsT0FBQSxhQUFBLE1BQUEsQ0FBb0I7SUFBQSxDQUFBO0FBQ2MsSUFBQSx1QkFBQTtBQUVoRixJQUFBLHlCQUFBLElBQUEsT0FBQSxFQUFBO0FBQ0UsSUFBQSxxQkFBQSxJQUFBLDREQUFBLEdBQUEsR0FBQSxnQkFBQSxDQUFBOztBQU1BLElBQUEscUJBQUEsSUFBQSwwREFBQSxHQUFBLEdBQUEsY0FBQSxFQUFBO0FBR0YsSUFBQSx1QkFBQTtBQUVBLElBQUEscUJBQUEsSUFBQSx3REFBQSxHQUFBLEdBQUEsWUFBQSxFQUFBOztBQXNDQSxJQUFBLHFCQUFBLElBQUEsNERBQUEsR0FBQSxHQUFBLGdCQUFBLENBQUE7O0FBVUYsSUFBQSx1QkFBQTs7Ozs7O0FBekZZLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLGVBQUEsSUFBQTtBQUVPLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxzQkFBQSxHQUFBLElBQUEsT0FBQSxjQUFBLENBQUE7QUFTSixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLEdBQUEsSUFBQSxnQkFBQSxDQUFBO0FBRXFCLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNEJBQUEsc0JBQUEsSUFBQSxJQUFBLGNBQUEsQ0FBQTtBQUt2QixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLHFCQUFBLGNBQUEsSUFBQTtBQUdpQixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLElBQUEsSUFBQSxnQkFBQSxDQUFBO0FBTUMsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxnQ0FBQSxlQUFBLHNCQUFBLElBQUEsSUFBQSxvQkFBQSxDQUFBO0FBRGQsSUFBQSxxQkFBQSxZQUFBLEdBQUEsRUFBaUIsU0FBQSxPQUFBLFdBQUEsS0FBQTtBQUlmLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxzQkFBQSxJQUFBLElBQUEsT0FBQSxjQUFBLENBQUE7QUFNbUUsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxXQUFBLFFBQUEsT0FBQSxDQUFBO0FBSzFELElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsc0JBQUEsSUFBQSxJQUFBLE9BQUEsb0JBQUEsQ0FBQTtBQXNDWCxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsc0JBQUEsSUFBQSxJQUFBLE9BQUEsY0FBQSxDQUFBOzs7OztBQXVDWCxJQUFBLGtDQUFBLENBQUE7QUFDRSxJQUFBLHlCQUFBLEdBQUEsb0JBQUEsRUFBQSxFQUFnQyxHQUFBLFdBQUE7QUFDbEIsSUFBQSxpQkFBQSxDQUFBO0FBQVksSUFBQSx1QkFBQSxFQUFZOzs7OztBQUF4QixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDZCQUFBLEtBQUEsYUFBQSxHQUFBOzs7Ozs7QUFTaEIsSUFBQSx5QkFBQSxHQUFBLFdBQUEsRUFBQSxFQUNrRCxHQUFBLGtCQUFBLENBQUE7QUFDaEMsSUFBQSxxQkFBQSxTQUFBLFNBQUEscUhBQUE7QUFBQSxNQUFBLHdCQUFBLElBQUE7QUFBQSxZQUFBLFNBQUEsd0JBQUEsQ0FBQTtBQUFBLGFBQUEsc0JBQVMsT0FBQSxnQkFBQSxDQUFpQjtJQUFBLENBQUE7QUFDeEMsSUFBQSxvQkFBQSxHQUFBLFlBQUEsRUFBQTtBQUNGLElBQUEsdUJBQUEsRUFBaUI7Ozs7O0FBTHJCLElBQUEsa0NBQUEsQ0FBQTtBQUNFLElBQUEscUJBQUEsR0FBQSxvRkFBQSxHQUFBLEdBQUEsV0FBQSxFQUFBOzs7Ozs7O0FBQVUsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxPQUFBLFlBQUEsbUJBQUEsT0FBQSxLQUFBLEVBQUEsS0FBQSxPQUFBLFlBQUEsbUJBQUEsT0FBQSxLQUFBLE1BQUEsQ0FBQTs7Ozs7QUFGZCxJQUFBLGtDQUFBLENBQUE7QUFDRSxJQUFBLHFCQUFBLEdBQUEsMEVBQUEsR0FBQSxHQUFBLGdCQUFBLENBQUE7Ozs7OztBQUFlLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsc0JBQUEsR0FBQSxHQUFBLE9BQUEsY0FBQSxDQUFBOzs7Ozs7QUFqQ25CLElBQUEseUJBQUEsR0FBQSxjQUFBLENBQUEsRUFBaUMsR0FBQSxhQUFBLEVBQ2xCLEdBQUEsV0FBQTtBQUVBLElBQUEsaUJBQUEsQ0FBQTs7QUFBZ0MsSUFBQSx1QkFBQTtBQUMzQyxJQUFBLHlCQUFBLEdBQUEsZUFBQSxDQUFBLEVBQTRCLEdBQUEsY0FBQSxDQUFBO0FBQ2QsSUFBQSxxQkFBQSxTQUFBLFNBQUEsd0VBQUE7QUFBQSxNQUFBLHdCQUFBLElBQUE7QUFBQSxZQUFBLFNBQUEsd0JBQUE7QUFBQSxhQUFBLHNCQUFTLE9BQUEsTUFBQSxDQUFPO0lBQUEsQ0FBQTtBQUFFLElBQUEsaUJBQUEsQ0FBQTs7QUFBOEIsSUFBQSx1QkFBQSxFQUFhLEVBQzdELEVBQ0Y7QUFHaEIsSUFBQSx5QkFBQSxHQUFBLGVBQUEsQ0FBQSxFQUFpQyxJQUFBLGNBQUEsQ0FBQSxFQUNDLElBQUEsYUFBQSxFQUNqQixJQUFBLGFBQUEsQ0FBQTtBQUNhLElBQUEsaUJBQUEsRUFBQTs7QUFBZ0MsSUFBQSx1QkFBQSxFQUFZLEVBQ3hEO0FBR2hCLElBQUEseUJBQUEsSUFBQSxpQkFBQSxFQUFBOztBQUFpQyxJQUFBLHFCQUFBLGFBQUEsU0FBQSw4RUFBQSxRQUFBO0FBQUEsTUFBQSx3QkFBQSxJQUFBO0FBQUEsWUFBQSxTQUFBLHdCQUFBO0FBQUEsYUFBQSxzQkFBYSxPQUFBLGFBQUEsTUFBQSxDQUFvQjtJQUFBLENBQUE7QUFDYixJQUFBLHVCQUFBO0FBRXJELElBQUEseUJBQUEsSUFBQSxZQUFBLEVBQUEsRUFBeUIsSUFBQSxnQkFBQTtBQUdyQixJQUFBLHFCQUFBLElBQUEsMkRBQUEsR0FBQSxHQUFBLGdCQUFBLEVBQUE7QUFPRixJQUFBLHVCQUFBLEVBQWlCO0FBRW5CLElBQUEscUJBQUEsSUFBQSwyREFBQSxHQUFBLEdBQUEsZ0JBQUEsQ0FBQTs7QUFVRixJQUFBLHVCQUFBOzs7O0FBMUNZLElBQUEscUJBQUEsZUFBQSxJQUFBO0FBR0csSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw0QkFBQSxzQkFBQSxHQUFBLElBQUEsZ0JBQUEsQ0FBQTtBQUVxQixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLEdBQUEsSUFBQSxjQUFBLENBQUE7QUFLdkIsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxjQUFBLElBQUE7QUFHaUIsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw0QkFBQSxzQkFBQSxJQUFBLElBQUEsZ0JBQUEsQ0FBQTtBQUsxQixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLGdDQUFBLGVBQUEsc0JBQUEsSUFBQSxJQUFBLG9CQUFBLENBQUE7QUFEYSxJQUFBLHFCQUFBLFlBQUEsR0FBQTtBQUdMLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEscUJBQUEsU0FBQSxJQUFBO0FBRzRCLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEscUJBQUEsV0FBQSxPQUFBLFVBQUE7QUFTdkIsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxzQkFBQSxJQUFBLElBQUEsT0FBQSxjQUFBLENBQUE7OztBRHZGYixJQUFPLHNCQUFQLE1BQU8sb0JBQWtCO0VBYzdCLFlBQ21CLFdBQ1YsV0FDVSxXQUNBLFdBQ0Esb0JBQ0EsV0FDQSxhQUNBLGlCQUNULFdBQTJCO0FBUmxCLFNBQUEsWUFBQTtBQUNWLFNBQUEsWUFBQTtBQUNVLFNBQUEsWUFBQTtBQUNBLFNBQUEsWUFBQTtBQUNBLFNBQUEscUJBQUE7QUFDQSxTQUFBLFlBQUE7QUFDQSxTQUFBLGNBQUE7QUFDQSxTQUFBLGtCQUFBO0FBQ1QsU0FBQSxZQUFBO0FBbkJWLFNBQUEsWUFBcUI7QUFDckIsU0FBQSxhQUFhLENBQUE7QUFPYixTQUFBLGFBQWEsSUFBSSxnQkFBd0IsRUFBRTtFQVl2QztFQUVKLFdBQVE7QUFDTixTQUFLLE9BQU8sS0FBSyxVQUFVLElBQUksTUFBTTtBQUNyQyxRQUFJLEtBQUssS0FBSyxTQUFTLEtBQUssS0FBSyxNQUFNLFNBQVMsR0FBRztJQUVuRCxPQUFPO0FBQ0wsV0FBSyxLQUFLLFFBQVEsQ0FBQTtJQUNwQjtBQUVBLFNBQUssUUFBUSxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssRUFBRTtBQUVuRCxTQUFLLHNCQUFxQjtBQUUxQixTQUFLLGlCQUFpQixLQUFLLFVBQVUsaUJBQWdCO0FBQ3JELFNBQUssaUJBQWlCLEtBQUssVUFBVSxpQkFBZ0I7RUFDdkQ7RUFFQSxjQUFXO0VBRVg7RUFFQSxPQUFJO0FBRUYsUUFBSSxLQUFLLFdBQVc7QUFDbEIsV0FBSyxZQUFZO0lBQ25CLE9BQU87QUFDTCxXQUFLLFlBQVk7SUFDbkI7RUFDRjtFQUVNLFVBQU87O0FBQ1gsWUFBTSxRQUFRLE1BQU0sS0FBSyxVQUFVLE9BQU87UUFDeEMsUUFBUTtRQUNSLFNBQVM7UUFDVCxRQUFRLENBQUM7VUFDUCxNQUFNO1VBQ04sT0FBTztVQUNQLGFBQWE7VUFDYixJQUFJO1NBQ0w7UUFDRCxTQUFTO1VBQ1A7WUFDRSxNQUFNLE1BQU0sY0FBYyxLQUFLLFVBQVUsSUFBSSxlQUFlLENBQUM7WUFDN0QsU0FBUyxDQUFDLFNBQVE7QUFDaEIsc0JBQVEsSUFBSSxhQUFhLElBQUk7WUFDL0I7WUFDQSxNQUFNOztVQUVSO1lBQ0UsTUFBTSxNQUFNLGNBQWMsS0FBSyxVQUFVLElBQUksV0FBVyxDQUFDO1lBQ3pELFNBQVMsQ0FBQyxTQUFRO0FBQ2hCLGtCQUFJLEtBQUssS0FBSyxLQUFJLEdBQUk7QUFDcEIscUJBQUssTUFBTSxLQUNULEtBQUssQ0FBQyxDQUFDLEVBQ1AsVUFBVSxVQUFPO0FBQ2pCLHNCQUFJLFFBQVEsS0FBSyxPQUFPO0FBQ3RCLHlCQUFLLE1BQU0sS0FBSyxLQUFLLElBQUk7QUFDekIseUJBQUssVUFBVSxZQUFZLEtBQUssSUFBSSxLQUFLLEtBQUssRUFBRSxLQUFLLE1BQUs7QUFDeEQsOEJBQVEsSUFBSSx5QkFBeUI7b0JBQ3ZDLENBQUMsRUFBRSxNQUFNLFdBQVE7QUFDZiw4QkFBUSxNQUFNLHNCQUFzQixLQUFLO29CQUMzQyxDQUFDO2tCQUNILE9BQU87QUFDTCx5QkFBSyxVQUFVLFlBQVksS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRSxLQUFLLE1BQUs7QUFDekQsOEJBQVEsSUFBSSx5QkFBeUI7b0JBQ3ZDLENBQUMsRUFBRSxNQUFNLFdBQVE7QUFDZiw4QkFBUSxNQUFNLHNCQUFzQixLQUFLO29CQUMzQyxDQUFDO0FBQ0QsNEJBQVEsTUFBTSxpQ0FBaUM7a0JBQ2pEO2dCQUNGLENBQUM7Y0FDSDtZQUNGOzs7T0FHTDtBQUVELFlBQU0sTUFBTSxRQUFPO0lBQ3JCOztFQUVNLG1CQUFtQixhQUE2QixRQUFNOztBQUMxRCxrQkFBWSxZQUFXO0FBRXZCLFVBQUksY0FBYyxDQUFBO0FBQ2xCLFdBQUssTUFBTSxLQUNULEtBQUssQ0FBQyxDQUFDLEVBQ1AsVUFBVSxDQUFNLFNBQU87QUFDdkIsbUJBQVcsUUFBUSxLQUFLLE9BQU87QUFDN0Isc0JBQVksS0FBSztZQUNmLE9BQU87WUFDUCxNQUFNO1lBQ04sT0FBTztZQUNQLFNBQVMsT0FBTyxNQUFNLEtBQUssZ0JBQWMsY0FBYyxJQUFJO1dBQzVEO1FBQ0g7QUFHQSxjQUFNLFFBQVEsTUFBTSxLQUFLLFVBQVUsT0FBTztVQUN4QyxRQUFRO1VBQ1IsUUFBUTtVQUNSLFNBQVM7WUFDUDtjQUNFLE1BQU0sTUFBTSxjQUFjLEtBQUssVUFBVSxJQUFJLGVBQWUsQ0FBQztjQUM3RCxTQUFTLENBQUMsU0FBUTtBQUNoQix3QkFBUSxJQUFJLGFBQWEsSUFBSTtjQUMvQjtjQUNBLE1BQU07O1lBRVI7Y0FDRSxNQUFNLE1BQU0sY0FBYyxLQUFLLFVBQVUsSUFBSSxXQUFXLENBQUM7Y0FDekQsU0FBUyxDQUFDLFNBQVE7QUFDaEIsd0JBQVEsSUFBSSxJQUFJO0FBQ2hCLHFCQUFLLFVBQVUsa0JBQWtCLEtBQUssSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFLEtBQUssTUFBSztBQUNuRSwwQkFBUSxJQUFJLHlCQUF5QjtnQkFDdkMsQ0FBQyxFQUFFLE1BQU0sV0FBUTtBQUNmLDBCQUFRLE1BQU0sc0JBQXNCLEtBQUs7Z0JBQzNDLENBQUM7Y0FFSDs7O1NBR0w7QUFFRCxjQUFNLE1BQU0sUUFBTztNQUNyQixFQUFDO0lBQ0g7O0VBR0EsVUFBVSxNQUFJO0FBQ1osU0FBSyxhQUFhLEVBQUUsUUFBUSxFQUFFLE9BQU8sS0FBSSxFQUFFLENBQUU7RUFDL0M7RUFHQSx3QkFBcUI7QUFDbkIsU0FBSyxhQUFhLENBQUE7QUFFbEIsU0FBSyxlQUFlLEtBQUssVUFBVSxrQkFBa0IsS0FBSyxLQUFLLEVBQUUsRUFBRTs7TUFFakUsVUFBVSxhQUFVO0FBQ2xCLFlBQUksUUFBUSxXQUFXLEdBQUc7QUFDeEIsa0JBQVEsSUFBSSx3QkFBd0I7QUFDcEMsZUFBSyxhQUFhLENBQUE7QUFDbEIsaUJBQU8sR0FBRyxDQUFBLENBQUU7UUFDZDtBQUNBLGNBQU0sWUFBWSxRQUFRLElBQUksWUFDNUIsS0FBSyxtQkFBbUIsbUJBQW1CLE9BQU8sRUFBRSxFQUFFLEtBQ3BELElBQUksYUFBWSxnREFDWCxTQUNBLFVBRlc7O1VBR2QsV0FBVyxRQUFRLGFBQWE7VUFDaEMsVUFBVSxRQUFRLFlBQVk7VUFDOUIsT0FBTyxPQUFPLFNBQVMsQ0FBQTtVQUN2QixHQUNGLFdBQVcsTUFBTSxHQUFHLGlDQUNmLFNBRGU7VUFFbEIsV0FBVztVQUNYLFVBQVU7VUFDVixPQUFPLE9BQU8sU0FBUyxDQUFBOztVQUN4QixDQUFDLENBQUMsQ0FDSjtBQUVILGVBQU8sY0FBYyxTQUFTLEVBQUUsS0FDOUIsSUFBSSxjQUFZLFNBQ2IsT0FBTyxhQUFXLFlBQVksTUFBUyxFQUN2QyxLQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsVUFBVSxjQUFjLEVBQUUsU0FBUyxDQUFDLEVBQ3JELElBQUksYUFBVTtBQUNiLGdCQUFNLGNBQWMsUUFBUSxVQUFVLE9BQU8sQ0FBQyxFQUFFLFlBQVc7QUFDM0QsY0FBSSxDQUFDLEtBQUssV0FBVyxTQUFTLFdBQVcsR0FBRztBQUMxQyxpQkFBSyxXQUFXLEtBQUssV0FBVztVQUNsQztBQUNBLGlCQUFPLGlDQUNGLFVBREU7WUFFTCxTQUFTOztRQUViLENBQUMsQ0FBQyxDQUNIO01BRUwsQ0FBQztNQUNELFdBQVcsU0FBTTtBQUNmLGdCQUFRLE1BQU0sZ0NBQWdDLEdBQUc7QUFDakQsZUFBTyxHQUFHLENBQUEsQ0FBRTtNQUNkLENBQUM7SUFBQztBQUtKLFNBQUssdUJBQXVCLGNBQWMsQ0FBQyxLQUFLLGNBQWMsS0FBSyxVQUFVLENBQUMsRUFBRSxLQUM5RSxhQUFhLEdBQUcsR0FDaEIsSUFBSSxDQUFDLENBQUMsU0FBUyxJQUFJLE1BQUs7QUFDdEIsVUFBSSxDQUFDO0FBQU0sZUFBTztBQUVsQixZQUFNLFdBQVcsUUFBUSxPQUFPLFlBQzlCLE9BQU8sVUFBVSxZQUFXLEVBQUcsU0FBUyxLQUFLLFlBQVcsQ0FBRSxLQUMxRCxPQUFPLFNBQVMsWUFBVyxFQUFHLFNBQVMsS0FBSyxZQUFXLENBQUUsS0FDekQsT0FBTyxNQUFNLEtBQUssVUFBUSxLQUFLLFlBQVcsRUFBRyxTQUFTLEtBQUssWUFBVyxDQUFFLENBQUMsQ0FBQztBQUU1RSxhQUFPO0lBQ1QsQ0FBQyxHQUNELElBQUksY0FBVztBQUViLFdBQUssYUFBYSxDQUFBO0FBQ2xCLGVBQVMsUUFBUSxZQUFTO0FBQ3hCLGNBQU0sY0FBYyxPQUFPLFVBQVUsT0FBTyxDQUFDLEVBQUUsWUFBVztBQUMxRCxZQUFJLENBQUMsS0FBSyxXQUFXLFNBQVMsV0FBVyxHQUFHO0FBQzFDLGVBQUssV0FBVyxLQUFLLFdBQVc7UUFDbEM7TUFDRixDQUFDO0FBQ0QsYUFBTztJQUNULENBQUMsR0FDRCxJQUFJLGNBQVksUUFBUSxJQUFJLHFCQUFxQixTQUFTLE1BQU0sQ0FBQyxHQUNqRSxXQUFXLFNBQU07QUFDZixjQUFRLE1BQU0sNEJBQTRCLEdBQUc7QUFDN0MsYUFBTyxHQUFHLENBQUEsQ0FBRTtJQUNkLENBQUMsQ0FBQztFQUVOO0VBRUEsYUFBYSxPQUFVO0FBQ3JCLFVBQU0sYUFBYSxNQUFNLE9BQU8sU0FBUztBQUN6QyxTQUFLLFdBQVcsS0FBSyxVQUFVO0VBQ2pDO0VBRUEsWUFBWSxlQUFzQixRQUFjO0FBQzlDLFdBQU8saUJBQWlCLGNBQWMsS0FBSyxVQUFRLEtBQUssT0FBTyxNQUFNO0VBQ3ZFO0VBRUEsWUFBWSxlQUFzQixRQUFjO0FBQzlDLFdBQU8saUJBQWlCLGNBQWMsS0FBSyxVQUFRLEtBQUssT0FBTyxNQUFNO0VBQ3ZFO0VBRU0sa0JBQWU7O0FBQ25CLFVBQUksQ0FBQyxLQUFLLFFBQVEsQ0FBQyxLQUFLLEtBQUssUUFBUTtBQUNuQyxnQkFBUSxNQUFNLHdDQUF3QztBQUN0RDtNQUNGO0FBRUEsVUFBSTtBQUNGLGdCQUFRLElBQUksaUNBQWlDLEtBQUssS0FBSyxNQUFNO0FBQzdELGNBQU0sVUFBVSxNQUFNLGNBQ3BCLEtBQUssVUFBVSxrQkFBa0IsS0FBSyxLQUFLLE1BQU0sRUFBRTtVQUNqRCxNQUFLOztTQUNOO0FBRUgsZ0JBQVEsSUFBSSxvQkFBb0IsUUFBUSxNQUFNO0FBRTlDLFlBQUksQ0FBQyxRQUFRLFFBQVE7QUFDbkIsa0JBQVEsSUFBSSx3QkFBd0I7QUFDcEM7UUFDRjtBQUVBLGNBQU0sV0FBVyxNQUFNLFFBQVEsSUFBSSxRQUFRLElBQUksWUFDN0MsY0FBYyxLQUFLLG1CQUFtQixtQkFBbUIsT0FBTyxFQUFFLEVBQUU7VUFDbEUsTUFBSzs7VUFFTCxXQUFXLFNBQU07QUFDZixvQkFBUSxNQUFNLDhCQUE4QixPQUFPLEVBQUUsS0FBSyxHQUFHO0FBQzdELG1CQUFPLEdBQUcsaUNBQUssU0FBTCxFQUFhLFdBQVcsV0FBVyxVQUFVLFVBQVMsRUFBRTtVQUNwRSxDQUFDO1FBQUMsQ0FDSCxDQUFDLENBQ0g7QUFFRCxjQUFNLG1CQUFtQixTQUFTLE9BQU8sYUFBVyxZQUFZLE1BQVM7QUFDekUsZ0JBQVEsSUFBSSxnQkFBZ0I7QUFDNUIsY0FBTSxpQkFBaUIsS0FBSyxxQkFBcUIsa0JBQWtCLE1BQU0sY0FBYyxLQUFLLGFBQWEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkgsZ0JBQVEsSUFBSSxjQUFjO0FBQzFCLGNBQU0sc0JBQXNCLEtBQUssMkJBQTJCLGNBQWM7QUFDMUUsZ0JBQVEsSUFBSSxtQkFBbUI7QUFDL0IsWUFBSSxvQkFBb0IsU0FBUyxHQUFHO0FBQ2xDLGdCQUFNLEtBQUssbUJBQW1CLG1CQUFtQjtRQUNuRCxPQUFPO0FBQ0wsa0JBQVEsSUFBSSxrQ0FBa0M7UUFDaEQ7TUFDRixTQUFTLEtBQUs7QUFDWixnQkFBUSxNQUFNLDZCQUE2QixHQUFHO01BQ2hEO0lBQ0Y7O0VBRUEscUJBQXFCLFVBQVUsYUFBVztBQUN4QyxXQUFPLFNBQVMsT0FBTyxZQUNyQixDQUFDLFlBQVksS0FBSyxnQkFBYyxXQUFXLE9BQU8sT0FBTyxFQUFFLENBQUM7RUFFaEU7RUFFQSwyQkFBMkIsaUJBQWU7QUFFeEMsVUFBTSxnQkFBZ0IsZ0JBQWdCLEtBQUssQ0FBQyxHQUFHLE1BQUs7QUFDbEQsWUFBTSxRQUFRLEdBQUcsRUFBRSxTQUFTLElBQUksRUFBRSxRQUFRLEdBQUcsWUFBVztBQUN4RCxZQUFNLFFBQVEsR0FBRyxFQUFFLFNBQVMsSUFBSSxFQUFFLFFBQVEsR0FBRyxZQUFXO0FBQ3hELGFBQU8sTUFBTSxjQUFjLEtBQUs7SUFDbEMsQ0FBQztBQUdELFdBQU8sY0FBYyxJQUFJLGFBQVc7TUFDbEMsTUFBTTtNQUNOLE1BQU0sT0FBTztNQUNiLE9BQU8sR0FBRyxPQUFPLFNBQVMsSUFBSSxPQUFPLFFBQVE7TUFDN0MsT0FBTyxPQUFPO01BQ2QsU0FBUztNQUNUO0VBQ0o7RUFFTSxtQkFBbUIsY0FBWTs7QUFDbkMsWUFBTSxRQUFRLE1BQU0sS0FBSyxVQUFVLE9BQU87UUFDeEMsUUFBUSxNQUFNLGNBQWMsS0FBSyxVQUFVLElBQUksa0JBQWtCLENBQUM7UUFDbEUsUUFBUTtRQUNSLFNBQVM7VUFDUDtZQUNFLE1BQU0sTUFBTSxjQUFjLEtBQUssVUFBVSxJQUFJLGVBQWUsQ0FBQztZQUM3RCxNQUFNO1lBQ04sU0FBUyxNQUFLO0FBQ1osc0JBQVEsSUFBSSxnQkFBZ0IsR0FDNUIsS0FBSyxvQkFBbUI7WUFDMUI7O1VBR0Y7WUFDRSxNQUFNLE1BQU0sY0FBYyxLQUFLLFVBQVUsSUFBSSxZQUFZLENBQUM7WUFDMUQsU0FBUyxDQUFDLG9CQUFtQjtBQUMzQiw4QkFBZ0IsUUFBUSxjQUFXO0FBQ2pDLHdCQUFRLElBQUksUUFBUTtBQUNwQixxQkFBSyxtQkFBbUIsS0FBSyxLQUFLLElBQUksUUFBUTtjQUNoRCxDQUFDO1lBQ0g7OztPQUdMO0FBQ0QsWUFBTSxNQUFNLFFBQU87SUFDckI7O0VBR00sbUJBQW1CLFFBQVEsVUFBUTs7QUFFdkMsWUFBTSxLQUFLLFVBQVUsdUJBQXVCLFFBQVEsUUFBUSxFQUFFLEtBQUssTUFBSztBQUN0RSxhQUFLLGlCQUFnQjtNQUN2QixDQUFDLEVBQ0UsTUFBTSxDQUFDLFFBQU87QUFDYixhQUFLLGlCQUFpQixHQUFHO01BQzNCLENBQUM7SUFDTDs7RUFNTSxpQkFBaUIsUUFBTTs7QUFFM0IsWUFBTSxRQUFRLE1BQU0sS0FBSyxnQkFBZ0IsT0FBTztRQUM5QyxTQUFTLE1BQU0sY0FDYixLQUFLLFVBQVUsSUFBSSx5Q0FBeUMsQ0FBQztRQUUvRCxTQUFTO1VBQ1A7WUFDRSxNQUFNO1lBQ04sTUFBTSxNQUFNLGNBQWMsS0FBSyxVQUFVLElBQUksV0FBVyxDQUFDO1lBQ3pELFNBQVMsTUFBSztBQUNaLHNCQUFRLElBQUksTUFBTTtBQUNsQixtQkFBSyxtQkFBa0I7WUFDekI7O1VBRUY7WUFDRSxNQUFNLE1BQU0sY0FBYyxLQUFLLFVBQVUsSUFBSSxZQUFZLENBQUM7WUFDMUQsU0FBUyxNQUFXO0FBRWxCLGtCQUFJO0FBQ0Ysc0JBQU0sS0FBSyxVQUFVLGlCQUFpQixLQUFLLEtBQUssSUFBSSxPQUFPLEVBQUU7QUFDN0Qsc0JBQU0sS0FBSyxpQkFBZ0I7Y0FDN0IsU0FBUyxHQUFHO0FBQ1YscUJBQUssaUJBQWlCLENBQUM7Y0FDekI7WUFDRjs7O09BSUw7QUFDRCxZQUFNLFFBQU87SUFJZjs7RUFHTSxXQUFXLFFBQWU7O0FBQzlCLGNBQVEsSUFBSSxZQUFZO0FBQ3hCLFlBQU0sUUFBUSxNQUFNLEtBQUssVUFBVSxPQUFPO1FBQ3hDLFdBQVc7UUFDWCxtQkFBbUIsTUFBTSxLQUFLLFVBQVUsT0FBTTtRQUM5QyxZQUFZO1FBQ1osY0FBYztRQUNkLGdCQUFnQjtVQUNkLE1BQU07VUFDTixRQUFRLEtBQUssS0FBSztVQUNsQixRQUFRLEtBQUssS0FBSzs7T0FFckI7QUFDRCxZQUFNLFFBQU87QUFFYixZQUFNLEVBQUUsTUFBTSxLQUFJLElBQUssTUFBTSxNQUFNLGNBQWE7QUFFaEQsVUFBSSxTQUFTLFdBQVc7TUFDeEI7SUFDRjs7RUFFTSxtQkFBZ0I7O0FBQ3BCLFlBQU0sUUFBUSxNQUFNLEtBQUssVUFBVSxPQUFPO1FBQ3hDLFNBQVMsTUFBTSxjQUFjLEtBQUssVUFBVSxJQUFJLHVCQUF1QixDQUFDO1FBQ3hFLFVBQVU7UUFDVixVQUFVO1FBQ1YsT0FBTztPQUNSO0FBRUQsWUFBTSxNQUFNLFFBQU87SUFDckI7O0VBQ00scUJBQWtCOztBQUN0QixZQUFNLFFBQVEsTUFBTSxLQUFLLFVBQVUsT0FBTztRQUN4QyxTQUFTLE1BQU0sY0FDYixLQUFLLFVBQVUsSUFBSSxxQ0FBcUMsQ0FBQztRQUUzRCxVQUFVO1FBQ1YsVUFBVTtRQUNWLE9BQU87T0FDUjtBQUVELFlBQU0sTUFBTSxRQUFPO0lBQ3JCOztFQUNNLHNCQUFtQjs7QUFDdkIsWUFBTSxRQUFRLE1BQU0sS0FBSyxVQUFVLE9BQU87UUFDeEMsU0FBUyxNQUFNLGNBQWMsS0FBSyxVQUFVLElBQUksdUJBQXVCLENBQUM7UUFDeEUsVUFBVTtRQUNWLFVBQVU7UUFDVixPQUFPO09BQ1I7QUFDRCxZQUFNLE1BQU0sUUFBTztJQUNyQjs7RUFFTSxpQkFBaUIsT0FBSzs7QUFDMUIsWUFBTSxRQUFRLE1BQU0sS0FBSyxVQUFVLE9BQU87UUFDeEMsU0FBUyxNQUFNO1FBQ2YsVUFBVTtRQUNWLFVBQVU7UUFDVixPQUFPO09BQ1I7QUFFRCxZQUFNLE1BQU0sUUFBTztJQUNyQjs7RUFFTSxRQUFLOztBQUNULGFBQU8sTUFBTSxLQUFLLFVBQVUsUUFBUSxNQUFNLE9BQU87SUFDbkQ7O0VBRU0sVUFBTzs7QUFDWCxhQUFPLE1BQU0sS0FBSyxVQUFVLFFBQVEsS0FBSyxNQUFNLFNBQVM7SUFDMUQ7Ozs7bUNBNWRXLHFCQUFrQiw0QkFBQSxlQUFBLEdBQUEsNEJBQUEsU0FBQSxHQUFBLDRCQUFBLGVBQUEsR0FBQSw0QkFBQSxlQUFBLEdBQUEsNEJBQUEsa0JBQUEsR0FBQSw0QkFBQSxlQUFBLEdBQUEsNEJBQUEsV0FBQSxHQUFBLDRCQUFBLGVBQUEsR0FBQSw0QkFBQSxnQkFBQSxDQUFBO0FBQUE7b0ZBQWxCLHFCQUFrQixXQUFBLENBQUEsQ0FBQSxzQkFBQSxDQUFBLEdBQUEsUUFBQSxFQUFBLE1BQUEsT0FBQSxHQUFBLFlBQUEsT0FBQSxPQUFBLEdBQUEsTUFBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLFdBQUEsRUFBQSxHQUFBLENBQUEsUUFBQSxFQUFBLEdBQUEsQ0FBQSxHQUFBLFFBQUEsVUFBQSxHQUFBLENBQUEsR0FBQSxhQUFBLEdBQUEsQ0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxHQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLFlBQUEsR0FBQSxDQUFBLFlBQUEsVUFBQSxHQUFBLENBQUEsUUFBQSxPQUFBLEdBQUEsQ0FBQSxZQUFBLFFBQUEsZUFBQSxpQkFBQSxHQUFBLGFBQUEsWUFBQSxTQUFBLGFBQUEsR0FBQSxDQUFBLEdBQUEsYUFBQSxHQUFBLENBQUEsU0FBQSxTQUFBLFFBQUEsU0FBQSxHQUFBLFNBQUEsR0FBQSxTQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsU0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsV0FBQSxHQUFBLENBQUEsR0FBQSxTQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsU0FBQSxTQUFBLFFBQUEsU0FBQSxHQUFBLFNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLFNBQUEsUUFBQSxTQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFFBQUEsb0JBQUEsR0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxTQUFBLFNBQUEsR0FBQSxDQUFBLFNBQUEsT0FBQSxHQUFBLENBQUEsVUFBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsU0FBQSxVQUFBLFFBQUEsU0FBQSxRQUFBLFNBQUEsR0FBQSxTQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxTQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsT0FBQSxpQ0FBQSxPQUFBLHdEQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxpQkFBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsT0FBQSxHQUFBLFNBQUEsU0FBQSxHQUFBLENBQUEsUUFBQSxPQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxLQUFBLEdBQUEsQ0FBQSxTQUFBLFdBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsUUFBQSxtQkFBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFNBQUEsVUFBQSxRQUFBLFNBQUEsUUFBQSxTQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsT0FBQSxpQ0FBQSxPQUFBLHNEQUFBLEdBQUEsQ0FBQSxHQUFBLEtBQUEsR0FBQSxDQUFBLFFBQUEsS0FBQSxHQUFBLENBQUEsWUFBQSxVQUFBLGNBQUEsT0FBQSxRQUFBLFNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxZQUFBLFVBQUEsY0FBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxhQUFBLEdBQUEsQ0FBQSxZQUFBLFFBQUEsZUFBQSxpQkFBQSxHQUFBLGFBQUEsWUFBQSxhQUFBLENBQUEsR0FBQSxVQUFBLFNBQUEsNEJBQUEsSUFB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QUFBO0FBSUwsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsU0FBQSxJQUFBO0FBRVAsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw2QkFBQSxLQUFBLHNCQUFBLElBQUEsSUFBQSx1QkFBQSxHQUFBLEdBQUE7QUFLQSxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDZCQUFBLEtBQUEsc0JBQUEsSUFBQSxJQUFBLHFCQUFBLEdBQUEsR0FBQTtBQUNVLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNkJBQUEsS0FBQSxRQUFBLFlBQUEsRUFBQTtBQU1ELElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNEJBQUEsUUFBQSxhQUFBLEVBQUEsTUFBQTtBQU1BLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNEJBQUEsUUFBQSxZQUFBLEVBQUEsTUFBQTtBQVNSLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxzQkFBQSxJQUFBLElBQUEsT0FBQSxTQUFBLENBQUE7QUFVRixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsc0JBQUEsSUFBQSxJQUFBLE9BQUEsU0FBQSxDQUFBO0FBU0EsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLHNCQUFBLElBQUEsSUFBQSxPQUFBLGNBQUEsQ0FBQTtBQTBCUSxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLHFCQUFBLFNBQUEsSUFBQTtBQUVQLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNkJBQUEsS0FBQSxzQkFBQSxJQUFBLElBQUEsZ0JBQUEsR0FBQSxHQUFBO0FBR0gsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLFFBQUEsSUFBQTtBQUlBLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsUUFBQSxRQUFBO0FBSUEsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxRQUFBLElBQUE7QUFJQSxJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLFFBQUEsT0FBQTtB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Q0FBQSxVQUFBLEVBQUEsR0FBQSxDQUFBLEdBQUEsUUFBQSxVQUFBLEdBQUEsQ0FBQSxHQUFBLGFBQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxHQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLFlBQUEsR0FBQSxDQUFBLFlBQUEsVUFBQSxHQUFBLENBQUEsUUFBQSxPQUFBLEdBQUEsQ0FBQSxTQUFBLFFBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLHVCQUFBLFFBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxLQUFBLEdBQUEsQ0FBQSxVQUFBLFFBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLHlCQUFBLFFBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSx1QkFBQSxRQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsbUJBQUEsUUFBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFFBQUEsd0JBQUEsUUFBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLFFBQUEsUUFBQSxTQUFBLFNBQUEsUUFBQSxHQUFBLENBQUEsR0FBQSxhQUFBLEdBQUEsQ0FBQSxVQUFBLFFBQUEsR0FBQSxTQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxrQkFBQSxRQUFBLE9BQUEsR0FBQSxDQUFBLFNBQUEsUUFBQSxHQUFBLFNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLFFBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxTQUFBLFFBQUEsR0FBQSxTQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsU0FBQSxVQUFBLFNBQUEsaUJBQUEsU0FBQSw4REFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLGtCQUFBLFNBQUEsU0FBQSxZQUFBLFFBQUEsVUFBQSxHQUFBLFlBQUEsT0FBQSxHQUFBLENBQUEsa0JBQUEsU0FBQSxTQUFBLGlCQUFBLFFBQUEsVUFBQSxHQUFBLFlBQUEsT0FBQSxHQUFBLENBQUEsU0FBQSxVQUFBLEdBQUEseUJBQUEsMEJBQUEsaUJBQUEsR0FBQSxXQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsVUFBQSxRQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsdUJBQUEsUUFBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLDhCQUFBLFFBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxpQkFBQSxRQUFBLE9BQUEsR0FBQSxDQUFBLEdBQUEsZUFBQSxHQUFBLENBQUEsUUFBQSxTQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxhQUFBLFFBQUEsY0FBQSxHQUFBLENBQUEsUUFBQSxXQUFBLFVBQUEsU0FBQSxTQUFBLFVBQUEsR0FBQSxTQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxXQUFBLFVBQUEsU0FBQSxTQUFBLFVBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsUUFBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLFNBQUEsT0FBQSxHQUFBLFVBQUEsQ0FBQSxHQUFBLFVBQUEsU0FBQSxrQkFBQSxJQUFBLEtBQUE7QUFBQSxNQUFBLEtBQUEsR0FBQTtBQ3hEckIsSUFBQSxxQkFBQSxHQUFBLGtDQUFBLElBQUEsSUFBQSxnQkFBQSxDQUFBOztBQXVPQSxJQUFBLHFCQUFBLEdBQUEsaUNBQUEsR0FBQSxHQUFBLGVBQUEsTUFBQSxHQUFBLGdDQUFBLEVBQXlCLEdBQUEsaUNBQUEsSUFBQSxHQUFBLGVBQUEsTUFBQSxHQUFBLGdDQUFBOzs7O0FBdk9WLElBQUEscUJBQUEsUUFBQSxzQkFBQSxHQUFBLEdBQUEsSUFBQSxLQUFBLENBQUEsRUFBb0IsWUFBQSxVQUFBOzs7QUR3RDdCLElBQU8sV0FBUDs7NkVBQU8sVUFBUSxFQUFBLFdBQUEsWUFBQSxVQUFBLCtDQUFBLFlBQUEsR0FBQSxDQUFBO0FBQUEsR0FBQTsiLAogICJuYW1lcyI6IFsidGVhbU1lbWJlcnMiLCAidGVhbUFkbWlucyIsICJ0ZWFtUmVxdWVzdHMiXQp9Cg==
