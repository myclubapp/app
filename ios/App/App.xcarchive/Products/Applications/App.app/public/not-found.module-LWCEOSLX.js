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

// src/app/pages/not-found/not-found.page.ts
var _NotFoundPage = class _NotFoundPage {
  constructor() {
  }
  ngOnInit() {
  }
};
_NotFoundPage.\u0275fac = function NotFoundPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NotFoundPage)();
};
_NotFoundPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundPage, selectors: [["app-not-found"]], standalone: false, decls: 6, vars: 3, template: function NotFoundPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(5, "ion-content");
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "not-found.not_found"));
  }
}, dependencies: [IonContent, IonHeader, IonTitle, IonToolbar, TranslatePipe], encapsulation: 2 });
var NotFoundPage = _NotFoundPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundPage, { className: "NotFoundPage", filePath: "src/app/pages/not-found/not-found.page.ts", lineNumber: 9 });
})();

// src/app/pages/not-found/not-found-routing.module.ts
var routes = [
  {
    path: "",
    component: NotFoundPage
  }
];
var _NotFoundPageRoutingModule = class _NotFoundPageRoutingModule {
};
_NotFoundPageRoutingModule.\u0275fac = function NotFoundPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NotFoundPageRoutingModule)();
};
_NotFoundPageRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NotFoundPageRoutingModule });
_NotFoundPageRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var NotFoundPageRoutingModule = _NotFoundPageRoutingModule;

// src/app/pages/not-found/not-found.module.ts
var _NotFoundPageModule = class _NotFoundPageModule {
};
_NotFoundPageModule.\u0275fac = function NotFoundPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NotFoundPageModule)();
};
_NotFoundPageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NotFoundPageModule });
_NotFoundPageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, FormsModule, IonicModule, NotFoundPageRoutingModule, TranslateModule] });
var NotFoundPageModule = _NotFoundPageModule;
export {
  NotFoundPageModule
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9ub3QtZm91bmQvbm90LWZvdW5kLnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9ub3QtZm91bmQvbm90LWZvdW5kLnBhZ2UuaHRtbCIsICJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQtcm91dGluZy5tb2R1bGUudHMiLCAic3JjL2FwcC9wYWdlcy9ub3QtZm91bmQvbm90LWZvdW5kLm1vZHVsZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtbm90LWZvdW5kJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbm90LWZvdW5kLnBhZ2UuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbm90LWZvdW5kLnBhZ2Uuc2NzcyddLFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIE5vdEZvdW5kUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yICgpIHt9XG5cbiAgbmdPbkluaXQgKCkge31cbn1cbiIsICI8aW9uLWhlYWRlcj5cbiAgPGlvbi10b29sYmFyPlxuICAgIDxpb24tdGl0bGU+e3tcIm5vdC1mb3VuZC5ub3RfZm91bmRcIiB8IHRyYW5zbGF0ZX19PC9pb24tdGl0bGU+XG4gIDwvaW9uLXRvb2xiYXI+XG48L2lvbi1oZWFkZXI+XG5cbjxpb24tY29udGVudD4gPC9pb24tY29udGVudD5cbiIsICJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBOb3RGb3VuZFBhZ2UgfSBmcm9tICcuL25vdC1mb3VuZC5wYWdlJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IE5vdEZvdW5kUGFnZVxuICB9XG5dXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE5vdEZvdW5kUGFnZVJvdXRpbmdNb2R1bGUge31cbiIsICJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuaW1wb3J0IHsgTm90Rm91bmRQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vbm90LWZvdW5kLXJvdXRpbmcubW9kdWxlJztcblxuaW1wb3J0IHsgTm90Rm91bmRQYWdlIH0gZnJvbSAnLi9ub3QtZm91bmQucGFnZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIElvbmljTW9kdWxlLCBOb3RGb3VuZFBhZ2VSb3V0aW5nTW9kdWxlLCBUcmFuc2xhdGVNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOb3RGb3VuZFBhZ2VdXG59KVxuZXhwb3J0IGNsYXNzIE5vdEZvdW5kUGFnZU1vZHVsZSB7fVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUU0sSUFBTyxnQkFBUCxNQUFPLGNBQVk7RUFDdkIsY0FBQTtFQUFnQjtFQUVoQixXQUFRO0VBQUs7OzttQ0FIRixlQUFZO0FBQUE7OEVBQVosZUFBWSxXQUFBLENBQUEsQ0FBQSxlQUFBLENBQUEsR0FBQSxZQUFBLE9BQUEsT0FBQSxHQUFBLE1BQUEsR0FBQSxVQUFBLFNBQUEsc0JBQUEsSUFBQSxLQUFBO0FBQUEsTUFBQSxLQUFBLEdBQUE7QUNSekIsSUFBQSx5QkFBQSxHQUFBLFlBQUEsRUFBWSxHQUFBLGFBQUEsRUFDRyxHQUFBLFdBQUE7QUFDQSxJQUFBLGlCQUFBLENBQUE7O0FBQXFDLElBQUEsdUJBQUEsRUFBWSxFQUNoRDtBQUdoQixJQUFBLG9CQUFBLEdBQUEsYUFBQTs7O0FBSmUsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw0QkFBQSxzQkFBQSxHQUFBLEdBQUEscUJBQUEsQ0FBQTs7O0FETVQsSUFBTyxlQUFQOzs2RUFBTyxjQUFZLEVBQUEsV0FBQSxnQkFBQSxVQUFBLDZDQUFBLFlBQUEsRUFBQSxDQUFBO0FBQUEsR0FBQTs7O0FFSHpCLElBQU0sU0FBaUI7RUFDckI7SUFDRSxNQUFNO0lBQ04sV0FBVzs7O0FBUVQsSUFBTyw2QkFBUCxNQUFPLDJCQUF5Qjs7O21DQUF6Qiw0QkFBeUI7QUFBQTswRkFBekIsMkJBQXlCLENBQUE7OEZBSDFCLGFBQWEsU0FBUyxNQUFNLEdBQzVCLFlBQVksRUFBQSxDQUFBO0FBRWxCLElBQU8sNEJBQVA7OztBQ0RBLElBQU8sc0JBQVAsTUFBTyxvQkFBa0I7OzttQ0FBbEIscUJBQWtCO0FBQUE7bUZBQWxCLG9CQUFrQixDQUFBO3VGQUhuQixjQUFjLGFBQWEsYUFBYSwyQkFBMkIsZUFBZSxFQUFBLENBQUE7QUFHeEYsSUFBTyxxQkFBUDsiLAogICJuYW1lcyI6IFtdCn0K
