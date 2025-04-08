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

// src/app/pages/follow/follow.page.ts
var _FollowPage = class _FollowPage {
  constructor() {
  }
  ngOnInit() {
  }
};
_FollowPage.\u0275fac = function FollowPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FollowPage)();
};
_FollowPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FollowPage, selectors: [["app-follow"]], standalone: false, decls: 6, vars: 3, template: function FollowPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(5, "ion-content");
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "follow.follow"));
  }
}, dependencies: [IonContent, IonHeader, IonTitle, IonToolbar, TranslatePipe], encapsulation: 2 });
var FollowPage = _FollowPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FollowPage, { className: "FollowPage", filePath: "src/app/pages/follow/follow.page.ts", lineNumber: 9 });
})();

// src/app/pages/follow/follow-routing.module.ts
var routes = [
  {
    path: "",
    component: FollowPage
  }
];
var _FollowPageRoutingModule = class _FollowPageRoutingModule {
};
_FollowPageRoutingModule.\u0275fac = function FollowPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FollowPageRoutingModule)();
};
_FollowPageRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FollowPageRoutingModule });
_FollowPageRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var FollowPageRoutingModule = _FollowPageRoutingModule;

// src/app/pages/follow/follow.module.ts
var _FollowPageModule = class _FollowPageModule {
};
_FollowPageModule.\u0275fac = function FollowPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FollowPageModule)();
};
_FollowPageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FollowPageModule });
_FollowPageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, FormsModule, IonicModule, FollowPageRoutingModule, TranslateModule] });
var FollowPageModule = _FollowPageModule;
export {
  FollowPageModule
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9mb2xsb3cvZm9sbG93LnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9mb2xsb3cvZm9sbG93LnBhZ2UuaHRtbCIsICJzcmMvYXBwL3BhZ2VzL2ZvbGxvdy9mb2xsb3ctcm91dGluZy5tb2R1bGUudHMiLCAic3JjL2FwcC9wYWdlcy9mb2xsb3cvZm9sbG93Lm1vZHVsZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtZm9sbG93JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZm9sbG93LnBhZ2UuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZm9sbG93LnBhZ2Uuc2NzcyddLFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIEZvbGxvd1BhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gIG5nT25Jbml0ICgpIHt9XG59XG4iLCAiPGlvbi1oZWFkZXI+XG4gIDxpb24tdG9vbGJhcj5cbiAgICA8aW9uLXRpdGxlPnt7XCJmb2xsb3cuZm9sbG93XCJ8dHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgPC9pb24tdG9vbGJhcj5cbjwvaW9uLWhlYWRlcj5cblxuPGlvbi1jb250ZW50PiA8L2lvbi1jb250ZW50PlxuIiwgImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEZvbGxvd1BhZ2UgfSBmcm9tICcuL2ZvbGxvdy5wYWdlJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IEZvbGxvd1BhZ2VcbiAgfVxuXVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBGb2xsb3dQYWdlUm91dGluZ01vZHVsZSB7fVxuIiwgImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBGb2xsb3dQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vZm9sbG93LXJvdXRpbmcubW9kdWxlJztcblxuaW1wb3J0IHsgRm9sbG93UGFnZSB9IGZyb20gJy4vZm9sbG93LnBhZ2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBJb25pY01vZHVsZSwgRm9sbG93UGFnZVJvdXRpbmdNb2R1bGUsIFRyYW5zbGF0ZU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0ZvbGxvd1BhZ2VdXG59KVxuZXhwb3J0IGNsYXNzIEZvbGxvd1BhZ2VNb2R1bGUge31cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFNLElBQU8sY0FBUCxNQUFPLFlBQVU7RUFDckIsY0FBQTtFQUFnQjtFQUVoQixXQUFRO0VBQUs7OzttQ0FIRixhQUFVO0FBQUE7NEVBQVYsYUFBVSxXQUFBLENBQUEsQ0FBQSxZQUFBLENBQUEsR0FBQSxZQUFBLE9BQUEsT0FBQSxHQUFBLE1BQUEsR0FBQSxVQUFBLFNBQUEsb0JBQUEsSUFBQSxLQUFBO0FBQUEsTUFBQSxLQUFBLEdBQUE7QUNSdkIsSUFBQSx5QkFBQSxHQUFBLFlBQUEsRUFBWSxHQUFBLGFBQUEsRUFDRyxHQUFBLFdBQUE7QUFDQSxJQUFBLGlCQUFBLENBQUE7O0FBQTZCLElBQUEsdUJBQUEsRUFBWSxFQUN4QztBQUdoQixJQUFBLG9CQUFBLEdBQUEsYUFBQTs7O0FBSmUsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw0QkFBQSxzQkFBQSxHQUFBLEdBQUEsZUFBQSxDQUFBOzs7QURNVCxJQUFPLGFBQVA7OzZFQUFPLFlBQVUsRUFBQSxXQUFBLGNBQUEsVUFBQSx1Q0FBQSxZQUFBLEVBQUEsQ0FBQTtBQUFBLEdBQUE7OztBRUh2QixJQUFNLFNBQWlCO0VBQ3JCO0lBQ0UsTUFBTTtJQUNOLFdBQVc7OztBQVFULElBQU8sMkJBQVAsTUFBTyx5QkFBdUI7OzttQ0FBdkIsMEJBQXVCO0FBQUE7d0ZBQXZCLHlCQUF1QixDQUFBOzRGQUh4QixhQUFhLFNBQVMsTUFBTSxHQUM1QixZQUFZLEVBQUEsQ0FBQTtBQUVsQixJQUFPLDBCQUFQOzs7QUNEQSxJQUFPLG9CQUFQLE1BQU8sa0JBQWdCOzs7bUNBQWhCLG1CQUFnQjtBQUFBO2lGQUFoQixrQkFBZ0IsQ0FBQTtxRkFIakIsY0FBYyxhQUFhLGFBQWEseUJBQXlCLGVBQWUsRUFBQSxDQUFBO0FBR3RGLElBQU8sbUJBQVA7IiwKICAibmFtZXMiOiBbXQp9Cg==
