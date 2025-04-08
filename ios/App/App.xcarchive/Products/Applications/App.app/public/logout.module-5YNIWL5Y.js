import {
  CommonModule,
  FormsModule,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonRow,
  IonText,
  IonicModule,
  MenuController,
  ReactiveFormsModule,
  RouterLink,
  RouterLinkDelegateDirective,
  RouterModule,
  TranslateModule,
  TranslatePipe,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpropertyInterpolate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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

// src/app/pages/auth/logout/logout.page.ts
var _LogoutPage = class _LogoutPage {
  constructor(menuCtrl) {
    this.menuCtrl = menuCtrl;
    this.menuCtrl.enable(false, "menu");
  }
  ngOnInit() {
    this.menuCtrl.enable(false, "menu");
  }
};
_LogoutPage.\u0275fac = function LogoutPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LogoutPage)(\u0275\u0275directiveInject(MenuController));
};
_LogoutPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LogoutPage, selectors: [["app-logout"]], standalone: false, decls: 18, vars: 9, consts: [[1, "ion-no-padding", 2, "height", "100vh"], [2, "height", "100%"], ["size-md", "6", "size-lg", "5", 2, "display", "flex", "align-items", "center", "justify-content", "center"], [1, "ion-no-margin", 2, "max-width", "500px", "width", "100%"], ["src", "assets/logo_trans.png", "alt", "Logo", 2, "max-height", "100px", "max-width", "100px"], ["routerLink", "/login", 1, "ion-text-primary"], ["size-md", "6", "size-lg", "7", 1, "ion-hide-md-down", 2, "padding", "0"], ["src", "assets/bg/mountain-3.jpg", 2, "height", "100%", "width", "100%", "object-fit", "cover", 3, "alt"]], template: function LogoutPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-grid", 0)(2, "ion-row", 1)(3, "ion-col", 2)(4, "ion-card", 3)(5, "ion-card-content");
    \u0275\u0275element(6, "ion-img", 4);
    \u0275\u0275elementStart(7, "ion-card-title");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ion-text")(11, "p")(12, "ion-router-link", 5);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(15, "ion-col", 6);
    \u0275\u0275element(16, "ion-img", 7);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 3, "logout.logout__success"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 5, "logout.back_to__login"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("alt", \u0275\u0275pipeBind1(17, 7, "backgroud_image__alt"));
  }
}, dependencies: [IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonGrid, IonImg, IonRow, IonText, RouterLinkDelegateDirective, RouterLink, TranslatePipe], styles: ["\n\nion-list[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\nion-card-title[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important;\n}\n/*# sourceMappingURL=logout.page.css.map */"] });
var LogoutPage = _LogoutPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LogoutPage, { className: "LogoutPage", filePath: "src/app/pages/auth/logout/logout.page.ts", lineNumber: 10 });
})();

// src/app/pages/auth/logout/logout-routing.module.ts
var routes = [
  {
    path: "",
    component: LogoutPage
  }
];
var _LogoutPageRoutingModule = class _LogoutPageRoutingModule {
};
_LogoutPageRoutingModule.\u0275fac = function LogoutPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LogoutPageRoutingModule)();
};
_LogoutPageRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LogoutPageRoutingModule });
_LogoutPageRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var LogoutPageRoutingModule = _LogoutPageRoutingModule;

// src/app/pages/auth/logout/logout.module.ts
var _LogoutPageModule = class _LogoutPageModule {
};
_LogoutPageModule.\u0275fac = function LogoutPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LogoutPageModule)();
};
_LogoutPageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LogoutPageModule });
_LogoutPageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  IonicModule,
  LogoutPageRoutingModule,
  TranslateModule
] });
var LogoutPageModule = _LogoutPageModule;
export {
  LogoutPageModule
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9hdXRoL2xvZ291dC9sb2dvdXQucGFnZS50cyIsICJzcmMvYXBwL3BhZ2VzL2F1dGgvbG9nb3V0L2xvZ291dC5wYWdlLmh0bWwiLCAic3JjL2FwcC9wYWdlcy9hdXRoL2xvZ291dC9sb2dvdXQtcm91dGluZy5tb2R1bGUudHMiLCAic3JjL2FwcC9wYWdlcy9hdXRoL2xvZ291dC9sb2dvdXQubW9kdWxlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVudUNvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWxvZ291dCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvZ291dC5wYWdlLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2xvZ291dC5wYWdlLnNjc3MnXSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBMb2dvdXRQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IgKHB1YmxpYyBtZW51Q3RybDogTWVudUNvbnRyb2xsZXIpIHtcbiAgICB0aGlzLm1lbnVDdHJsLmVuYWJsZShmYWxzZSwgJ21lbnUnKTtcbiAgfVxuXG4gIG5nT25Jbml0ICgpIHtcbiAgICB0aGlzLm1lbnVDdHJsLmVuYWJsZShmYWxzZSwgJ21lbnUnKTtcbiAgfVxufVxuIiwgIjxpb24tY29udGVudD5cblxuICA8aW9uLWdyaWQgY2xhc3M9XCJpb24tbm8tcGFkZGluZ1wiIHN0eWxlPVwiaGVpZ2h0OiAxMDB2aDtcIj5cbiAgICA8aW9uLXJvdyBzdHlsZT1cImhlaWdodDogMTAwJTtcIj5cbiAgICAgIDwhLS0gTG9nb3V0IE1lc3NhZ2UgQ29sdW1uIC0tPlxuICAgICAgPGlvbi1jb2wgc2l6ZS1tZD1cIjZcIiBzaXplLWxnPVwiNVwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XG4gICAgICAgIDxpb24tY2FyZCBjbGFzcz1cImlvbi1uby1tYXJnaW5cIiBzdHlsZT1cIm1heC13aWR0aDogNTAwcHg7IHdpZHRoOiAxMDAlO1wiPlxuICAgICAgICAgIDxpb24tY2FyZC1jb250ZW50PlxuICAgICAgICAgICAgPGlvbi1pbWcgc3JjPVwiYXNzZXRzL2xvZ29fdHJhbnMucG5nXCIgYWx0PVwiTG9nb1wiIHN0eWxlPVwibWF4LWhlaWdodDogMTAwcHg7IG1heC13aWR0aDogMTAwcHg7XCI+PC9pb24taW1nPlxuICAgICAgICAgICAgPGlvbi1jYXJkLXRpdGxlPnt7XCJsb2dvdXQubG9nb3V0X19zdWNjZXNzXCJ8dHJhbnNsYXRlfX08L2lvbi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgPGlvbi10ZXh0PlxuXG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxpb24tcm91dGVyLWxpbmsgcm91dGVyTGluaz1cIi9sb2dpblwiIGNsYXNzPVwiaW9uLXRleHQtcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAge3tcImxvZ291dC5iYWNrX3RvX19sb2dpblwifHRyYW5zbGF0ZX19XG4gICAgICAgICAgICAgICAgPC9pb24tcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvaW9uLXRleHQ+XG4gICAgICAgICAgPC9pb24tY2FyZC1jb250ZW50PlxuICAgICAgICA8L2lvbi1jYXJkPlxuICAgICAgPC9pb24tY29sPlxuICAgICAgPCEtLSBJbWFnZSBDb2x1bW4gLS0+XG4gICAgICA8aW9uLWNvbCBzaXplLW1kPVwiNlwiIHNpemUtbGc9XCI3XCIgc3R5bGU9XCJwYWRkaW5nOiAwO1wiIGNsYXNzPVwiaW9uLWhpZGUtbWQtZG93blwiPlxuICAgICAgICA8aW9uLWltZyBzcmM9XCJhc3NldHMvYmcvbW91bnRhaW4tMy5qcGdcIiBhbHQ9XCJ7eydiYWNrZ3JvdWRfaW1hZ2VfX2FsdCd8dHJhbnNsYXRlfX1cIlxuICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgb2JqZWN0LWZpdDogY292ZXI7XCI+XG4gICAgICAgIDwvaW9uLWltZz5cbiAgICAgIDwvaW9uLWNvbD5cbiAgICA8L2lvbi1yb3c+XG4gIDwvaW9uLWdyaWQ+XG5cblxuICA8IS0tXG4gIDxkaXYgY2xhc3M9XCJtaW4taC1zY3JlZW4gYmctd2hpdGUgZmxleFwiPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZmxleC0xIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgcHktMTIgcHgtNCBzbTpweC02IGxnOmZsZXgtbm9uZSBsZzpweC0yMCB4bDpweC0yNFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cIm14LWF1dG8gdy1mdWxsIG1heC13LXNtIGxnOnctOTZcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cGljdHVyZT5cbiAgICAgICAgICAgIDxzb3VyY2VcbiAgICAgICAgICAgICAgc3Jjc2V0PVwiYXNzZXRzL2xvZ29fdHJhbnMucG5nXCJcbiAgICAgICAgICAgICAgbWVkaWE9XCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c291cmNlXG4gICAgICAgICAgICAgIHNyY3NldD1cImFzc2V0cy9sb2dvX3RyYW5zLnBuZ1wiXG4gICAgICAgICAgICAgIG1lZGlhPVwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodClcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJoLTEyIHctYXV0b1wiIHNyYz1cImFzc2V0cy9sb2dvX3RyYW5zLnBuZ1wiIGFsdD1cIkxvZ29cIiAvPlxuICAgICAgICAgIDwvcGljdHVyZT5cblxuICAgICAgICAgIDxoMiBjbGFzcz1cIm10LTYgdGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAge3tcImxvZ291dC5sb2dvdXRfX3N1Y2Nlc3NcInx0cmFuc2xhdGV9fVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtdC0yIHRleHQtc20gdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgcm91dGVyTGluaz1cIi9sb2dpblwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9udC1tZWRpdW0gdGV4dC1teWNsdWJsaWdodCBob3Zlcjp0ZXh0LW15Y2x1YmRhcmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7e1wibG9nb3V0LmJhY2tfdG9fX2xvZ2luXCJ8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJoaWRkZW4gbGc6YmxvY2sgcmVsYXRpdmUgdy0wIGZsZXgtMVwiPlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzcz1cImFic29sdXRlIGluc2V0LTAgaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICBzcmM9XCJhc3NldHMvYmcvbW91bnRhaW4tMy5qcGdcIlxuICAgICAgICBbYWx0XT0nXCJiYWNrZ3JvdWRfaW1hZ2VfX2FsdFwifHRyYW5zbGF0ZSdcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2Pi0tPlxuPC9pb24tY29udGVudD4iLCAiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTG9nb3V0UGFnZSB9IGZyb20gJy4vbG9nb3V0LnBhZ2UnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogTG9nb3V0UGFnZVxuICB9XG5dXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIExvZ291dFBhZ2VSb3V0aW5nTW9kdWxlIHt9XG4iLCAiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmltcG9ydCB7IExvZ291dFBhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9sb2dvdXQtcm91dGluZy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBMb2dvdXRQYWdlIH0gZnJvbSAnLi9sb2dvdXQucGFnZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIExvZ291dFBhZ2VSb3V0aW5nTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTG9nb3V0UGFnZV1cbn0pXG5leHBvcnQgY2xhc3MgTG9nb3V0UGFnZU1vZHVsZSB7fVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU00sSUFBTyxjQUFQLE1BQU8sWUFBVTtFQUNyQixZQUFvQixVQUF3QjtBQUF4QixTQUFBLFdBQUE7QUFDbEIsU0FBSyxTQUFTLE9BQU8sT0FBTyxNQUFNO0VBQ3BDO0VBRUEsV0FBUTtBQUNOLFNBQUssU0FBUyxPQUFPLE9BQU8sTUFBTTtFQUNwQzs7O21DQVBXLGFBQVUsNEJBQUEsY0FBQSxDQUFBO0FBQUE7NEVBQVYsYUFBVSxXQUFBLENBQUEsQ0FBQSxZQUFBLENBQUEsR0FBQSxZQUFBLE9BQUEsT0FBQSxJQUFBLE1BQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxHQUFBLGtCQUFBLEdBQUEsVUFBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLFVBQUEsTUFBQSxHQUFBLENBQUEsV0FBQSxLQUFBLFdBQUEsS0FBQSxHQUFBLFdBQUEsUUFBQSxlQUFBLFVBQUEsbUJBQUEsUUFBQSxHQUFBLENBQUEsR0FBQSxpQkFBQSxHQUFBLGFBQUEsU0FBQSxTQUFBLE1BQUEsR0FBQSxDQUFBLE9BQUEseUJBQUEsT0FBQSxRQUFBLEdBQUEsY0FBQSxTQUFBLGFBQUEsT0FBQSxHQUFBLENBQUEsY0FBQSxVQUFBLEdBQUEsa0JBQUEsR0FBQSxDQUFBLFdBQUEsS0FBQSxXQUFBLEtBQUEsR0FBQSxvQkFBQSxHQUFBLFdBQUEsR0FBQSxHQUFBLENBQUEsT0FBQSw0QkFBQSxHQUFBLFVBQUEsUUFBQSxTQUFBLFFBQUEsY0FBQSxTQUFBLEdBQUEsS0FBQSxDQUFBLEdBQUEsVUFBQSxTQUFBLG9CQUFBLElBQUEsS0FBQTtBQUFBLE1BQUEsS0FBQSxHQUFBO0FDVHZCLElBQUEseUJBQUEsR0FBQSxhQUFBLEVBQWEsR0FBQSxZQUFBLENBQUEsRUFFNkMsR0FBQSxXQUFBLENBQUEsRUFDdkIsR0FBQSxXQUFBLENBQUEsRUFFeUUsR0FBQSxZQUFBLENBQUEsRUFDN0IsR0FBQSxrQkFBQTtBQUVuRSxJQUFBLG9CQUFBLEdBQUEsV0FBQSxDQUFBO0FBQ0EsSUFBQSx5QkFBQSxHQUFBLGdCQUFBO0FBQWdCLElBQUEsaUJBQUEsQ0FBQTs7QUFBc0MsSUFBQSx1QkFBQTtBQUN0RCxJQUFBLHlCQUFBLElBQUEsVUFBQSxFQUFVLElBQUEsR0FBQSxFQUVMLElBQUEsbUJBQUEsQ0FBQTtBQUVDLElBQUEsaUJBQUEsRUFBQTs7QUFDRixJQUFBLHVCQUFBLEVBQWtCLEVBQ2hCLEVBQ0ssRUFDTSxFQUNWO0FBR2IsSUFBQSx5QkFBQSxJQUFBLFdBQUEsQ0FBQTtBQUNFLElBQUEsb0JBQUEsSUFBQSxXQUFBLENBQUE7O0FBR0YsSUFBQSx1QkFBQSxFQUFVLEVBQ0YsRUFDRDs7O0FBbkJlLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNEJBQUEsc0JBQUEsR0FBQSxHQUFBLHdCQUFBLENBQUE7QUFLVixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDZCQUFBLEtBQUEsc0JBQUEsSUFBQSxHQUFBLHVCQUFBLEdBQUEsR0FBQTtBQVM4QixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLGdDQUFBLE9BQUEsc0JBQUEsSUFBQSxHQUFBLHNCQUFBLENBQUE7OztBRGQxQyxJQUFPLGFBQVA7OzZFQUFPLFlBQVUsRUFBQSxXQUFBLGNBQUEsVUFBQSw0Q0FBQSxZQUFBLEdBQUEsQ0FBQTtBQUFBLEdBQUE7OztBRUp2QixJQUFNLFNBQWlCO0VBQ3JCO0lBQ0UsTUFBTTtJQUNOLFdBQVc7OztBQVFULElBQU8sMkJBQVAsTUFBTyx5QkFBdUI7OzttQ0FBdkIsMEJBQXVCO0FBQUE7d0ZBQXZCLHlCQUF1QixDQUFBOzRGQUh4QixhQUFhLFNBQVMsTUFBTSxHQUM1QixZQUFZLEVBQUEsQ0FBQTtBQUVsQixJQUFPLDBCQUFQOzs7QUNLQSxJQUFPLG9CQUFQLE1BQU8sa0JBQWdCOzs7bUNBQWhCLG1CQUFnQjtBQUFBO2lGQUFoQixrQkFBZ0IsQ0FBQTs7RUFUekI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQWUsRUFBQSxDQUFBO0FBSWIsSUFBTyxtQkFBUDsiLAogICJuYW1lcyI6IFtdCn0K
