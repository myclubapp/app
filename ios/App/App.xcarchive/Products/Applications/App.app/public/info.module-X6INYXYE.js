import {
  package_default
} from "./chunk-WJRCWONJ.js";
import {
  Device
} from "./chunk-54VO2CGW.js";
import {
  Browser
} from "./chunk-3ABWPIXG.js";
import {
  CommonModule,
  FormsModule,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
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
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-PZUQX53K.js";
import "./chunk-JFBLR2DD.js";
import "./chunk-YB7CDXXA.js";
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
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// src/app/pages/info/info.page.ts
var _InfoPage = class _InfoPage {
  constructor() {
    this.appVersion = package_default.version;
    this.buildNumber = package_default.buildNumber;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.deviceId = yield Device.getId();
      this.deviceInfo = yield Device.getInfo();
    });
  }
  openTCSite() {
    return __async(this, null, function* () {
      yield Browser.open({ url: "https://my-club.app/terms-and-conditions-de/" });
    });
  }
  openPPSite() {
    return __async(this, null, function* () {
      yield Browser.open({ url: "https://my-club.app/privacy-policy-de/" });
    });
  }
};
_InfoPage.\u0275fac = function InfoPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InfoPage)();
};
_InfoPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfoPage, selectors: [["app-info"]], standalone: false, decls: 37, vars: 24, consts: [[3, "translucent"], ["slot", "start"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], ["lines", "full", 3, "inset"], ["type", "button", "detail", "true", 3, "click"], ["slot", "start", "name", "business-outline"], ["slot", "start", "name", "finger-print-outline"], ["slot", "start", "color", "primary", "name", "heart-outline"], ["src", "./../../../assets/sms.png", "alt", "Swiss Made Software Logo"], ["slot", "start", "name", "code-outline"]], template: function InfoPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
    \u0275\u0275element(3, "ion-menu-button");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-title");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "ion-content", 2)(8, "ion-header", 3)(9, "ion-toolbar")(10, "ion-title", 4);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "ion-list", 5)(14, "ion-item", 6);
    \u0275\u0275listener("click", function InfoPage_Template_ion_item_click_14_listener() {
      return ctx.openTCSite();
    });
    \u0275\u0275element(15, "ion-icon", 7);
    \u0275\u0275elementStart(16, "ion-label");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "ion-item", 6);
    \u0275\u0275listener("click", function InfoPage_Template_ion_item_click_19_listener() {
      return ctx.openPPSite();
    });
    \u0275\u0275element(20, "ion-icon", 8);
    \u0275\u0275elementStart(21, "ion-label");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "ion-list", 5)(25, "ion-item");
    \u0275\u0275element(26, "ion-icon", 9);
    \u0275\u0275elementStart(27, "ion-label");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "ion-item");
    \u0275\u0275element(31, "ion-img", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "ion-item");
    \u0275\u0275element(33, "ion-icon", 11);
    \u0275\u0275elementStart(34, "ion-label");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 12, "info.information"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 14, "info.information"));
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 16, "info.terms__and_conditions"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 18, "info.privacy__policy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 20, "info.info_description"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(36, 22, "info.app__version"), " ", ctx.appVersion, "(", ctx.buildNumber, ") ");
  }
}, dependencies: [IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonMenuButton, IonTitle, IonToolbar, TranslatePipe], styles: ["\n\nion-img[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 200px;\n}\n/*# sourceMappingURL=info.page.css.map */"] });
var InfoPage = _InfoPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfoPage, { className: "InfoPage", filePath: "src/app/pages/info/info.page.ts", lineNumber: 12 });
})();

// src/app/pages/info/info-routing.module.ts
var routes = [
  {
    path: "",
    component: InfoPage
  }
];
var _InfoPageRoutingModule = class _InfoPageRoutingModule {
};
_InfoPageRoutingModule.\u0275fac = function InfoPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InfoPageRoutingModule)();
};
_InfoPageRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _InfoPageRoutingModule });
_InfoPageRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var InfoPageRoutingModule = _InfoPageRoutingModule;

// src/app/pages/info/info.module.ts
var _InfoPageModule = class _InfoPageModule {
};
_InfoPageModule.\u0275fac = function InfoPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InfoPageModule)();
};
_InfoPageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _InfoPageModule });
_InfoPageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  IonicModule,
  InfoPageRoutingModule,
  TranslateModule
] });
var InfoPageModule = _InfoPageModule;
export {
  InfoPageModule
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9pbmZvL2luZm8ucGFnZS50cyIsICJzcmMvYXBwL3BhZ2VzL2luZm8vaW5mby5wYWdlLmh0bWwiLCAic3JjL2FwcC9wYWdlcy9pbmZvL2luZm8tcm91dGluZy5tb2R1bGUudHMiLCAic3JjL2FwcC9wYWdlcy9pbmZvL2luZm8ubW9kdWxlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGV2aWNlLCBEZXZpY2VJZCwgRGV2aWNlSW5mbyB9IGZyb20gJ0BjYXBhY2l0b3IvZGV2aWNlJztcbmltcG9ydCB7IEJyb3dzZXIsIE9wZW5PcHRpb25z4oCLIH0gZnJvbSAnQGNhcGFjaXRvci9icm93c2VyJztcbmltcG9ydCBwYWNrYWdlanNvbiBmcm9tIFwiLi8uLi8uLi8uLi8uLi9wYWNrYWdlLmpzb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtaW5mbycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2luZm8ucGFnZS5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9pbmZvLnBhZ2Uuc2NzcyddLFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIEluZm9QYWdlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgYXBwVmVyc2lvbjogc3RyaW5nID0gcGFja2FnZWpzb24udmVyc2lvbjtcbiAgcHVibGljIGJ1aWxkTnVtYmVyOiBzdHJpbmcgPSBwYWNrYWdlanNvbi5idWlsZE51bWJlcjtcbiAgZGV2aWNlSWQ6IERldmljZUlkO1xuICBkZXZpY2VJbmZvOiBEZXZpY2VJbmZvO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kZXZpY2VJZCA9IGF3YWl0IERldmljZS5nZXRJZCgpO1xuICAgIHRoaXMuZGV2aWNlSW5mbyA9IGF3YWl0IERldmljZS5nZXRJbmZvKCk7XG4gIH1cblxuICBhc3luYyBvcGVuVENTaXRlKCkge1xuICAgIGF3YWl0IEJyb3dzZXIub3Blbih7IHVybDogJ2h0dHBzOi8vbXktY2x1Yi5hcHAvdGVybXMtYW5kLWNvbmRpdGlvbnMtZGUvJyB9KTtcbiAgfTtcblxuICBhc3luYyBvcGVuUFBTaXRlKCkge1xuICAgIGF3YWl0IEJyb3dzZXIub3Blbih7IHVybDogJ2h0dHBzOi8vbXktY2x1Yi5hcHAvcHJpdmFjeS1wb2xpY3ktZGUvJywgIH0pO1xuICB9O1xuXG59XG4iLCAiPGlvbi1oZWFkZXIgW3RyYW5zbHVjZW50XT1cInRydWVcIj5cbiAgPGlvbi10b29sYmFyPlxuICAgIDxpb24tYnV0dG9ucyBzbG90PVwic3RhcnRcIj5cbiAgICAgIDxpb24tbWVudS1idXR0b24+PC9pb24tbWVudS1idXR0b24+XG4gICAgPC9pb24tYnV0dG9ucz5cbiAgICA8aW9uLXRpdGxlPnt7XCJpbmZvLmluZm9ybWF0aW9uXCIgfCB0cmFuc2xhdGV9fTwvaW9uLXRpdGxlPlxuICA8L2lvbi10b29sYmFyPlxuPC9pb24taGVhZGVyPlxuXG48aW9uLWNvbnRlbnQgW2Z1bGxzY3JlZW5dPVwidHJ1ZVwiPlxuICA8aW9uLWhlYWRlciBjb2xsYXBzZT1cImNvbmRlbnNlXCI+XG4gICAgPGlvbi10b29sYmFyPlxuICAgICAgPGlvbi10aXRsZSBzaXplPVwibGFyZ2VcIj57e1wiaW5mby5pbmZvcm1hdGlvblwiIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgICA8L2lvbi10b29sYmFyPlxuICA8L2lvbi1oZWFkZXI+XG5cblxuICA8aW9uLWxpc3QgbGluZXM9XCJmdWxsXCIgW2luc2V0XT1cInRydWVcIj5cbiAgICA8aW9uLWl0ZW0gdHlwZT1cImJ1dHRvblwiIGRldGFpbD1cInRydWVcIiAoY2xpY2spPVwib3BlblRDU2l0ZSgpXCI+XG4gICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cImJ1c2luZXNzLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAge3tcImluZm8udGVybXNfX2FuZF9jb25kaXRpb25zXCIgfCB0cmFuc2xhdGV9fVxuICAgICAgPC9pb24tbGFiZWw+XG4gICAgPC9pb24taXRlbT5cblxuICAgIDxpb24taXRlbSB0eXBlPVwiYnV0dG9uXCIgZGV0YWlsPVwidHJ1ZVwiIChjbGljayk9XCJvcGVuUFBTaXRlKClcIj5cbiAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwiZmluZ2VyLXByaW50LW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAge3tcImluZm8ucHJpdmFjeV9fcG9saWN5XCIgfCB0cmFuc2xhdGV9fVxuICAgICAgPC9pb24tbGFiZWw+XG4gICAgPC9pb24taXRlbT5cblxuICA8L2lvbi1saXN0PlxuXG4gIDxpb24tbGlzdCBsaW5lcz1cImZ1bGxcIiBbaW5zZXRdPVwidHJ1ZVwiPlxuXG4gICAgPGlvbi1pdGVtPlxuICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIGNvbG9yPVwicHJpbWFyeVwiIG5hbWU9XCJoZWFydC1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgIHt7XCJpbmZvLmluZm9fZGVzY3JpcHRpb25cIiB8IHRyYW5zbGF0ZX19XG4gICAgICA8L2lvbi1sYWJlbD5cbiAgICA8L2lvbi1pdGVtPlxuXG4gICAgPGlvbi1pdGVtPlxuICAgICAgPGlvbi1pbWcgc3JjPVwiLi8uLi8uLi8uLi9hc3NldHMvc21zLnBuZ1wiIGFsdD1cIlN3aXNzIE1hZGUgU29mdHdhcmUgTG9nb1wiPjwvaW9uLWltZz5cbiAgICA8L2lvbi1pdGVtPlxuXG4gICAgPGlvbi1pdGVtPlxuICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJjb2RlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAge3tcImluZm8uYXBwX192ZXJzaW9uXCIgfCB0cmFuc2xhdGV9fSB7e2FwcFZlcnNpb259fSh7e2J1aWxkTnVtYmVyfX0pXG4gICAgICA8L2lvbi1sYWJlbD5cbiAgICA8L2lvbi1pdGVtPlxuICA8L2lvbi1saXN0PlxuXG5cbjwvaW9uLWNvbnRlbnQ+IiwgImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEluZm9QYWdlIH0gZnJvbSAnLi9pbmZvLnBhZ2UnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogSW5mb1BhZ2VcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEluZm9QYWdlUm91dGluZ01vZHVsZSB7fVxuIiwgImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBJbmZvUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2luZm8tcm91dGluZy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBJbmZvUGFnZSB9IGZyb20gJy4vaW5mby5wYWdlJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIEluZm9QYWdlUm91dGluZ01vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbSW5mb1BhZ2VdXG59KVxuZXhwb3J0IGNsYXNzIEluZm9QYWdlTW9kdWxlIHt9XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdNLElBQU8sWUFBUCxNQUFPLFVBQVE7RUFPbkIsY0FBQTtBQUxPLFNBQUEsYUFBcUIsZ0JBQVk7QUFDakMsU0FBQSxjQUFzQixnQkFBWTtFQUl6QjtFQUVWLFdBQVE7O0FBQ1osV0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFLO0FBQ2xDLFdBQUssYUFBYSxNQUFNLE9BQU8sUUFBTztJQUN4Qzs7RUFFTSxhQUFVOztBQUNkLFlBQU0sUUFBUSxLQUFLLEVBQUUsS0FBSywrQ0FBOEMsQ0FBRTtJQUM1RTs7RUFFTSxhQUFVOztBQUNkLFlBQU0sUUFBUSxLQUFLLEVBQUUsS0FBSyx5Q0FBd0MsQ0FBSTtJQUN4RTs7OzttQ0FwQlcsV0FBUTtBQUFBOzBFQUFSLFdBQVEsV0FBQSxDQUFBLENBQUEsVUFBQSxDQUFBLEdBQUEsWUFBQSxPQUFBLE9BQUEsSUFBQSxNQUFBLElBQUEsUUFBQSxDQUFBLENBQUEsR0FBQSxhQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsR0FBQSxDQUFBLEdBQUEsWUFBQSxHQUFBLENBQUEsWUFBQSxVQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsR0FBQSxDQUFBLFNBQUEsUUFBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsVUFBQSxVQUFBLFFBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsUUFBQSxrQkFBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFFBQUEsc0JBQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxTQUFBLFdBQUEsUUFBQSxlQUFBLEdBQUEsQ0FBQSxPQUFBLDZCQUFBLE9BQUEsMEJBQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxRQUFBLGNBQUEsQ0FBQSxHQUFBLFVBQUEsU0FBQSxrQkFBQSxJQUFBLEtBQUE7QUFBQSxNQUFBLEtBQUEsR0FBQTtBQ1hyQixJQUFBLHlCQUFBLEdBQUEsY0FBQSxDQUFBLEVBQWlDLEdBQUEsYUFBQSxFQUNsQixHQUFBLGVBQUEsQ0FBQTtBQUVULElBQUEsb0JBQUEsR0FBQSxpQkFBQTtBQUNGLElBQUEsdUJBQUE7QUFDQSxJQUFBLHlCQUFBLEdBQUEsV0FBQTtBQUFXLElBQUEsaUJBQUEsQ0FBQTs7QUFBa0MsSUFBQSx1QkFBQSxFQUFZLEVBQzdDO0FBR2hCLElBQUEseUJBQUEsR0FBQSxlQUFBLENBQUEsRUFBaUMsR0FBQSxjQUFBLENBQUEsRUFDQyxHQUFBLGFBQUEsRUFDakIsSUFBQSxhQUFBLENBQUE7QUFDYSxJQUFBLGlCQUFBLEVBQUE7O0FBQWtDLElBQUEsdUJBQUEsRUFBWSxFQUMxRDtBQUloQixJQUFBLHlCQUFBLElBQUEsWUFBQSxDQUFBLEVBQXNDLElBQUEsWUFBQSxDQUFBO0FBQ0UsSUFBQSxxQkFBQSxTQUFBLFNBQUEsK0NBQUE7QUFBQSxhQUFTLElBQUEsV0FBQTtJQUFZLENBQUE7QUFDekQsSUFBQSxvQkFBQSxJQUFBLFlBQUEsQ0FBQTtBQUNBLElBQUEseUJBQUEsSUFBQSxXQUFBO0FBQ0UsSUFBQSxpQkFBQSxFQUFBOztBQUNGLElBQUEsdUJBQUEsRUFBWTtBQUdkLElBQUEseUJBQUEsSUFBQSxZQUFBLENBQUE7QUFBc0MsSUFBQSxxQkFBQSxTQUFBLFNBQUEsK0NBQUE7QUFBQSxhQUFTLElBQUEsV0FBQTtJQUFZLENBQUE7QUFDekQsSUFBQSxvQkFBQSxJQUFBLFlBQUEsQ0FBQTtBQUNBLElBQUEseUJBQUEsSUFBQSxXQUFBO0FBQ0UsSUFBQSxpQkFBQSxFQUFBOztBQUNGLElBQUEsdUJBQUEsRUFBWSxFQUNIO0FBSWIsSUFBQSx5QkFBQSxJQUFBLFlBQUEsQ0FBQSxFQUFzQyxJQUFBLFVBQUE7QUFHbEMsSUFBQSxvQkFBQSxJQUFBLFlBQUEsQ0FBQTtBQUNBLElBQUEseUJBQUEsSUFBQSxXQUFBO0FBQ0UsSUFBQSxpQkFBQSxFQUFBOztBQUNGLElBQUEsdUJBQUEsRUFBWTtBQUdkLElBQUEseUJBQUEsSUFBQSxVQUFBO0FBQ0UsSUFBQSxvQkFBQSxJQUFBLFdBQUEsRUFBQTtBQUNGLElBQUEsdUJBQUE7QUFFQSxJQUFBLHlCQUFBLElBQUEsVUFBQTtBQUNFLElBQUEsb0JBQUEsSUFBQSxZQUFBLEVBQUE7QUFDQSxJQUFBLHlCQUFBLElBQUEsV0FBQTtBQUNFLElBQUEsaUJBQUEsRUFBQTs7QUFDRixJQUFBLHVCQUFBLEVBQVksRUFDSCxFQUNGOzs7QUFyREQsSUFBQSxxQkFBQSxlQUFBLElBQUE7QUFLRyxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLEdBQUEsSUFBQSxrQkFBQSxDQUFBO0FBSUYsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxjQUFBLElBQUE7QUFHaUIsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw0QkFBQSxzQkFBQSxJQUFBLElBQUEsa0JBQUEsQ0FBQTtBQUtMLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEscUJBQUEsU0FBQSxJQUFBO0FBSWpCLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNkJBQUEsS0FBQSxzQkFBQSxJQUFBLElBQUEsNEJBQUEsR0FBQSxHQUFBO0FBT0EsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw2QkFBQSxLQUFBLHNCQUFBLElBQUEsSUFBQSxzQkFBQSxHQUFBLEdBQUE7QUFNaUIsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxTQUFBLElBQUE7QUFLakIsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw2QkFBQSxLQUFBLHNCQUFBLElBQUEsSUFBQSx1QkFBQSxHQUFBLEdBQUE7QUFXQSxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDZCQUFBLEtBQUEsc0JBQUEsSUFBQSxJQUFBLG1CQUFBLEdBQUEsS0FBQSxJQUFBLFlBQUEsS0FBQSxJQUFBLGFBQUEsSUFBQTs7O0FEdkNGLElBQU8sV0FBUDs7NkVBQU8sVUFBUSxFQUFBLFdBQUEsWUFBQSxVQUFBLG1DQUFBLFlBQUEsR0FBQSxDQUFBO0FBQUEsR0FBQTs7O0FFTnJCLElBQU0sU0FBaUI7RUFDckI7SUFDRSxNQUFNO0lBQ04sV0FBVzs7O0FBUVQsSUFBTyx5QkFBUCxNQUFPLHVCQUFxQjs7O21DQUFyQix3QkFBcUI7QUFBQTtzRkFBckIsdUJBQXFCLENBQUE7MEZBSHRCLGFBQWEsU0FBUyxNQUFNLEdBQzVCLFlBQVksRUFBQSxDQUFBO0FBRWxCLElBQU8sd0JBQVA7OztBQ0tBLElBQU8sa0JBQVAsTUFBTyxnQkFBYzs7O21DQUFkLGlCQUFjO0FBQUE7K0VBQWQsZ0JBQWMsQ0FBQTs7RUFSdkI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUFlLEVBQUEsQ0FBQTtBQUliLElBQU8saUJBQVA7IiwKICAibmFtZXMiOiBbXQp9Cg==
