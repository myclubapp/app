import {
  CommonModule,
  FormsModule,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonicModule,
  RouterModule,
  TranslateModule,
  TranslatePipe,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PZUQX53K.js";
import "./chunk-JFBLR2DD.js";
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
import "./chunk-LQ2EECYJ.js";

// src/app/pages/onboarding/onboarding-team/onboarding-team.page.ts
var _OnboardingTeamPage = class _OnboardingTeamPage {
  constructor() {
  }
  ngOnInit() {
  }
};
_OnboardingTeamPage.\u0275fac = function OnboardingTeamPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OnboardingTeamPage)();
};
_OnboardingTeamPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OnboardingTeamPage, selectors: [["app-onboarding-team"]], standalone: false, decls: 6, vars: 3, template: function OnboardingTeamPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(5, "ion-content");
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "onboarding-team.onboarding__team"));
  }
}, dependencies: [IonContent, IonHeader, IonTitle, IonToolbar, TranslatePipe], encapsulation: 2 });
var OnboardingTeamPage = _OnboardingTeamPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OnboardingTeamPage, { className: "OnboardingTeamPage", filePath: "src/app/pages/onboarding/onboarding-team/onboarding-team.page.ts", lineNumber: 9 });
})();

// src/app/pages/onboarding/onboarding-team/onboarding-team-routing.module.ts
var routes = [
  {
    path: "",
    component: OnboardingTeamPage
  }
];
var _OnboardingTeamPageRoutingModule = class _OnboardingTeamPageRoutingModule {
};
_OnboardingTeamPageRoutingModule.\u0275fac = function OnboardingTeamPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OnboardingTeamPageRoutingModule)();
};
_OnboardingTeamPageRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _OnboardingTeamPageRoutingModule });
_OnboardingTeamPageRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var OnboardingTeamPageRoutingModule = _OnboardingTeamPageRoutingModule;

// src/app/pages/onboarding/onboarding-team/onboarding-team.module.ts
var _OnboardingTeamPageModule = class _OnboardingTeamPageModule {
};
_OnboardingTeamPageModule.\u0275fac = function OnboardingTeamPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OnboardingTeamPageModule)();
};
_OnboardingTeamPageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _OnboardingTeamPageModule });
_OnboardingTeamPageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  IonicModule,
  OnboardingTeamPageRoutingModule,
  TranslateModule
] });
var OnboardingTeamPageModule = _OnboardingTeamPageModule;
export {
  OnboardingTeamPageModule
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9vbmJvYXJkaW5nL29uYm9hcmRpbmctdGVhbS9vbmJvYXJkaW5nLXRlYW0ucGFnZS50cyIsICJzcmMvYXBwL3BhZ2VzL29uYm9hcmRpbmcvb25ib2FyZGluZy10ZWFtL29uYm9hcmRpbmctdGVhbS5wYWdlLmh0bWwiLCAic3JjL2FwcC9wYWdlcy9vbmJvYXJkaW5nL29uYm9hcmRpbmctdGVhbS9vbmJvYXJkaW5nLXRlYW0tcm91dGluZy5tb2R1bGUudHMiLCAic3JjL2FwcC9wYWdlcy9vbmJvYXJkaW5nL29uYm9hcmRpbmctdGVhbS9vbmJvYXJkaW5nLXRlYW0ubW9kdWxlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1vbmJvYXJkaW5nLXRlYW1cIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL29uYm9hcmRpbmctdGVhbS5wYWdlLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vb25ib2FyZGluZy10ZWFtLnBhZ2Uuc2Nzc1wiXSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nVGVhbVBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIiwgIjxpb24taGVhZGVyPlxuICA8aW9uLXRvb2xiYXI+XG4gICAgPGlvbi10aXRsZT57e1wib25ib2FyZGluZy10ZWFtLm9uYm9hcmRpbmdfX3RlYW1cIiB8IHRyYW5zbGF0ZX19PC9pb24tdGl0bGU+XG4gIDwvaW9uLXRvb2xiYXI+XG48L2lvbi1oZWFkZXI+XG5cbjxpb24tY29udGVudD4gPC9pb24tY29udGVudD5cbiIsICJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgT25ib2FyZGluZ1RlYW1QYWdlIH0gZnJvbSBcIi4vb25ib2FyZGluZy10ZWFtLnBhZ2VcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiBcIlwiLFxuICAgIGNvbXBvbmVudDogT25ib2FyZGluZ1RlYW1QYWdlLFxuICB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdUZWFtUGFnZVJvdXRpbmdNb2R1bGUge31cbiIsICJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gXCJAaW9uaWMvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBPbmJvYXJkaW5nVGVhbVBhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vb25ib2FyZGluZy10ZWFtLXJvdXRpbmcubW9kdWxlXCI7XG5cbmltcG9ydCB7IE9uYm9hcmRpbmdUZWFtUGFnZSB9IGZyb20gXCIuL29uYm9hcmRpbmctdGVhbS5wYWdlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIE9uYm9hcmRpbmdUZWFtUGFnZVJvdXRpbmdNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW09uYm9hcmRpbmdUZWFtUGFnZV0sXG59KVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdUZWFtUGFnZU1vZHVsZSB7fVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUU0sSUFBTyxzQkFBUCxNQUFPLG9CQUFrQjtFQUM3QixjQUFBO0VBQWU7RUFFZixXQUFRO0VBQUk7OzttQ0FIRCxxQkFBa0I7QUFBQTtvRkFBbEIscUJBQWtCLFdBQUEsQ0FBQSxDQUFBLHFCQUFBLENBQUEsR0FBQSxZQUFBLE9BQUEsT0FBQSxHQUFBLE1BQUEsR0FBQSxVQUFBLFNBQUEsNEJBQUEsSUFBQSxLQUFBO0FBQUEsTUFBQSxLQUFBLEdBQUE7QUNSL0IsSUFBQSx5QkFBQSxHQUFBLFlBQUEsRUFBWSxHQUFBLGFBQUEsRUFDRyxHQUFBLFdBQUE7QUFDQSxJQUFBLGlCQUFBLENBQUE7O0FBQWtELElBQUEsdUJBQUEsRUFBWSxFQUM3RDtBQUdoQixJQUFBLG9CQUFBLEdBQUEsYUFBQTs7O0FBSmUsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw0QkFBQSxzQkFBQSxHQUFBLEdBQUEsa0NBQUEsQ0FBQTs7O0FETVQsSUFBTyxxQkFBUDs7NkVBQU8sb0JBQWtCLEVBQUEsV0FBQSxzQkFBQSxVQUFBLG9FQUFBLFlBQUEsRUFBQSxDQUFBO0FBQUEsR0FBQTs7O0FFSC9CLElBQU0sU0FBaUI7RUFDckI7SUFDRSxNQUFNO0lBQ04sV0FBVzs7O0FBUVQsSUFBTyxtQ0FBUCxNQUFPLGlDQUErQjs7O21DQUEvQixrQ0FBK0I7QUFBQTtnR0FBL0IsaUNBQStCLENBQUE7b0dBSGhDLGFBQWEsU0FBUyxNQUFNLEdBQzVCLFlBQVksRUFBQSxDQUFBO0FBRWxCLElBQU8sa0NBQVA7OztBQ0tBLElBQU8sNEJBQVAsTUFBTywwQkFBd0I7OzttQ0FBeEIsMkJBQXdCO0FBQUE7eUZBQXhCLDBCQUF3QixDQUFBOztFQVJqQztFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQWUsRUFBQSxDQUFBO0FBSWIsSUFBTywyQkFBUDsiLAogICJuYW1lcyI6IFtdCn0K
