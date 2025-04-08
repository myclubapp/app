import {
  HelferPunktePage
} from "./chunk-VO6647VF.js";
import "./chunk-3HMFG4JN.js";
import {
  Device
} from "./chunk-54VO2CGW.js";
import "./chunk-TPIQQKTH.js";
import "./chunk-WS5FEPJJ.js";
import {
  PushNotifications
} from "./chunk-IILXOVOO.js";
import "./chunk-3ABWPIXG.js";
import "./chunk-REWK7CTI.js";
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
  BooleanValueAccessorDirective,
  CommonModule,
  FormsModule,
  IonAccordion,
  IonAccordionGroup,
  IonAlert,
  IonAvatar,
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
  IonMenuButton,
  IonModal,
  IonNote,
  IonRouterOutlet,
  IonSelect,
  IonSelectOption,
  IonSpinner,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
  IonicModule,
  LoadingController,
  MenuController,
  ModalController,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Router,
  RouterModule,
  SelectValueAccessorDirective,
  TextValueAccessorDirective,
  ToastController,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  catchError,
  lastValueFrom,
  of,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵpropertyInterpolate3,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PZUQX53K.js";
import "./chunk-JFBLR2DD.js";
import {
  CapacitorException,
  WebPlugin,
  registerPlugin
} from "./chunk-YB7CDXXA.js";
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

// node_modules/@capacitor/camera/dist/esm/definitions.js
var CameraSource;
(function(CameraSource2) {
  CameraSource2["Prompt"] = "PROMPT";
  CameraSource2["Camera"] = "CAMERA";
  CameraSource2["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function(CameraDirection2) {
  CameraDirection2["Rear"] = "REAR";
  CameraDirection2["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function(CameraResultType2) {
  CameraResultType2["Uri"] = "uri";
  CameraResultType2["Base64"] = "base64";
  CameraResultType2["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));

// node_modules/@capacitor/camera/dist/esm/web.js
var CameraWeb = class extends WebPlugin {
  getPhoto(options) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => __async(this, null, function* () {
        if (options.webUseInput || options.source === CameraSource.Photos) {
          this.fileInputExperience(options, resolve, reject);
        } else if (options.source === CameraSource.Prompt) {
          let actionSheet = document.querySelector("pwa-action-sheet");
          if (!actionSheet) {
            actionSheet = document.createElement("pwa-action-sheet");
            document.body.appendChild(actionSheet);
          }
          actionSheet.header = options.promptLabelHeader || "Photo";
          actionSheet.cancelable = false;
          actionSheet.options = [{
            title: options.promptLabelPhoto || "From Photos"
          }, {
            title: options.promptLabelPicture || "Take Picture"
          }];
          actionSheet.addEventListener("onSelection", (e) => __async(this, null, function* () {
            const selection = e.detail;
            if (selection === 0) {
              this.fileInputExperience(options, resolve, reject);
            } else {
              this.cameraExperience(options, resolve, reject);
            }
          }));
        } else {
          this.cameraExperience(options, resolve, reject);
        }
      }));
    });
  }
  pickImages(_options) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => __async(this, null, function* () {
        this.multipleFileInputExperience(resolve, reject);
      }));
    });
  }
  cameraExperience(options, resolve, reject) {
    return __async(this, null, function* () {
      if (customElements.get("pwa-camera-modal")) {
        const cameraModal = document.createElement("pwa-camera-modal");
        cameraModal.facingMode = options.direction === CameraDirection.Front ? "user" : "environment";
        document.body.appendChild(cameraModal);
        try {
          yield cameraModal.componentOnReady();
          cameraModal.addEventListener("onPhoto", (e) => __async(this, null, function* () {
            const photo = e.detail;
            if (photo === null) {
              reject(new CapacitorException("User cancelled photos app"));
            } else if (photo instanceof Error) {
              reject(photo);
            } else {
              resolve(yield this._getCameraPhoto(photo, options));
            }
            cameraModal.dismiss();
            document.body.removeChild(cameraModal);
          }));
          cameraModal.present();
        } catch (e) {
          this.fileInputExperience(options, resolve, reject);
        }
      } else {
        console.error(`Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements.`);
        this.fileInputExperience(options, resolve, reject);
      }
    });
  }
  fileInputExperience(options, resolve, reject) {
    let input = document.querySelector("#_capacitor-camera-input");
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    if (!input) {
      input = document.createElement("input");
      input.id = "_capacitor-camera-input";
      input.type = "file";
      input.hidden = true;
      document.body.appendChild(input);
      input.addEventListener("change", (_e) => {
        const file = input.files[0];
        let format = "jpeg";
        if (file.type === "image/png") {
          format = "png";
        } else if (file.type === "image/gif") {
          format = "gif";
        }
        if (options.resultType === "dataUrl" || options.resultType === "base64") {
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            if (options.resultType === "dataUrl") {
              resolve({
                dataUrl: reader.result,
                format
              });
            } else if (options.resultType === "base64") {
              const b64 = reader.result.split(",")[1];
              resolve({
                base64String: b64,
                format
              });
            }
            cleanup();
          });
          reader.readAsDataURL(file);
        } else {
          resolve({
            webPath: URL.createObjectURL(file),
            format
          });
          cleanup();
        }
      });
      input.addEventListener("cancel", (_e) => {
        reject(new CapacitorException("User cancelled photos app"));
        cleanup();
      });
    }
    input.accept = "image/*";
    input.capture = true;
    if (options.source === CameraSource.Photos || options.source === CameraSource.Prompt) {
      input.removeAttribute("capture");
    } else if (options.direction === CameraDirection.Front) {
      input.capture = "user";
    } else if (options.direction === CameraDirection.Rear) {
      input.capture = "environment";
    }
    input.click();
  }
  multipleFileInputExperience(resolve, reject) {
    let input = document.querySelector("#_capacitor-camera-input-multiple");
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    if (!input) {
      input = document.createElement("input");
      input.id = "_capacitor-camera-input-multiple";
      input.type = "file";
      input.hidden = true;
      input.multiple = true;
      document.body.appendChild(input);
      input.addEventListener("change", (_e) => {
        const photos = [];
        for (let i = 0; i < input.files.length; i++) {
          const file = input.files[i];
          let format = "jpeg";
          if (file.type === "image/png") {
            format = "png";
          } else if (file.type === "image/gif") {
            format = "gif";
          }
          photos.push({
            webPath: URL.createObjectURL(file),
            format
          });
        }
        resolve({
          photos
        });
        cleanup();
      });
      input.addEventListener("cancel", (_e) => {
        reject(new CapacitorException("User cancelled photos app"));
        cleanup();
      });
    }
    input.accept = "image/*";
    input.click();
  }
  _getCameraPhoto(photo, options) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      const format = photo.type.split("/")[1];
      if (options.resultType === "uri") {
        resolve({
          webPath: URL.createObjectURL(photo),
          format,
          saved: false
        });
      } else {
        reader.readAsDataURL(photo);
        reader.onloadend = () => {
          const r = reader.result;
          if (options.resultType === "dataUrl") {
            resolve({
              dataUrl: r,
              format,
              saved: false
            });
          } else {
            resolve({
              base64String: r.split(",")[1],
              format,
              saved: false
            });
          }
        };
        reader.onerror = (e) => {
          reject(e);
        };
      }
    });
  }
  checkPermissions() {
    return __async(this, null, function* () {
      if (typeof navigator === "undefined" || !navigator.permissions) {
        throw this.unavailable("Permissions API not available in this browser");
      }
      try {
        const permission = yield window.navigator.permissions.query({
          name: "camera"
        });
        return {
          camera: permission.state,
          photos: "granted"
        };
      } catch (_a) {
        throw this.unavailable("Camera permissions are not available in this browser");
      }
    });
  }
  requestPermissions() {
    return __async(this, null, function* () {
      throw this.unimplemented("Not implemented on web.");
    });
  }
  pickLimitedLibraryPhotos() {
    return __async(this, null, function* () {
      throw this.unavailable("Not implemented on web.");
    });
  }
  getLimitedLibraryPhotos() {
    return __async(this, null, function* () {
      throw this.unavailable("Not implemented on web.");
    });
  }
};
var Camera = new CameraWeb();

// node_modules/@capacitor/camera/dist/esm/index.js
var Camera2 = registerPlugin("Camera", {
  web: () => new CameraWeb()
});

// src/app/pages/profile/profile.page.ts
var _c0 = () => ({ autocomplete: "email" });
var _c1 = (a0, a1) => ({ name: "email", type: "email", placeholder: a0, attributes: a1 });
var _c2 = (a0) => [a0];
function ProfilePage_ng_container_13_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 60);
    \u0275\u0275listener("ionChange", function ProfilePage_ng_container_13_ng_template_26_Template_ion_datetime_ionChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDateChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate("value", ctx_r1.localDateString);
    \u0275\u0275property("firstDayOfWeek", 1);
  }
}
function ProfilePage_ng_container_13_ng_container_68_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-list", 9)(2, "ion-list-header")(3, "ion-label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-item", 61);
    \u0275\u0275listener("click", function ProfilePage_ng_container_13_ng_container_68_ng_container_1_Template_ion_item_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openHelferPunkte());
    });
    \u0275\u0275element(7, "ion-icon", 62);
    \u0275\u0275elementStart(8, "ion-label");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "profile.diverses"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "common.helper_points"), " ");
  }
}
function ProfilePage_ng_container_13_ng_container_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProfilePage_ng_container_13_ng_container_68_ng_container_1_Template, 11, 7, "ng-container", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const clubList_r6 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.enableHelferEvents(clubList_r6));
  }
}
function ProfilePage_ng_container_13_ion_icon_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 63);
  }
}
function ProfilePage_ng_container_13_ion_icon_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 64);
  }
}
function ProfilePage_ng_container_13_ion_note_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-note", 65);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "profile.push__message__deactivate"), "");
  }
}
function ProfilePage_ng_container_13_ion_icon_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 66);
  }
}
function ProfilePage_ng_container_13_ion_icon_143_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 67);
  }
}
function ProfilePage_ng_container_13_ion_item_166_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 72);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "profile.kids.verified"));
  }
}
function ProfilePage_ng_container_13_ion_item_166_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 73);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "profile.kids.pending"));
  }
}
function ProfilePage_ng_container_13_ion_item_166_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-label")(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProfilePage_ng_container_13_ion_item_166_p_4_Template, 3, 3, "p", 68)(5, ProfilePage_ng_container_13_ion_item_166_p_5_Template, 3, 3, "p", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-button", 70);
    \u0275\u0275listener("click", function ProfilePage_ng_container_13_ion_item_166_Template_ion_button_click_6_listener() {
      const kid_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeKid(kid_r8.email));
    });
    \u0275\u0275element(7, "ion-icon", 71);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const kid_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(kid_r8.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", kid_r8.verified);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !kid_r8.verified);
  }
}
function ProfilePage_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-list", 9)(2, "ion-list-header")(3, "ion-label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-item")(7, "ion-avatar", 4);
    \u0275\u0275element(8, "img", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "ion-label");
    \u0275\u0275elementStart(10, "ion-button", 11);
    \u0275\u0275listener("click", function ProfilePage_ng_container_13_Template_ion_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.takePicture());
    });
    \u0275\u0275element(11, "ion-icon", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "ion-item")(13, "ion-input", 13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275listener("ionChange", function ProfilePage_ng_container_13_Template_ion_input_ionChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.profileChange($event, "firstName"));
    });
    \u0275\u0275twoWayListener("ngModelChange", function ProfilePage_ng_container_13_Template_ion_input_ngModelChange_13_listener($event) {
      const userProfile_r3 = \u0275\u0275restoreView(_r1).ngIf;
      \u0275\u0275twoWayBindingSet(userProfile_r3.firstName, $event) || (userProfile_r3.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "ion-item")(17, "ion-input", 13);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275listener("ionChange", function ProfilePage_ng_container_13_Template_ion_input_ionChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.profileChange($event, "lastName"));
    });
    \u0275\u0275twoWayListener("ngModelChange", function ProfilePage_ng_container_13_Template_ion_input_ngModelChange_17_listener($event) {
      const userProfile_r3 = \u0275\u0275restoreView(_r1).ngIf;
      \u0275\u0275twoWayBindingSet(userProfile_r3.lastName, $event) || (userProfile_r3.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "ion-item", 14)(21, "ion-label", 15);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "ion-datetime-button", 16);
    \u0275\u0275elementStart(25, "ion-modal", 17);
    \u0275\u0275template(26, ProfilePage_ng_container_13_ng_template_26_Template, 1, 2, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "ion-item")(28, "ion-select", 18);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ProfilePage_ng_container_13_Template_ion_select_ngModelChange_28_listener($event) {
      const userProfile_r3 = \u0275\u0275restoreView(_r1).ngIf;
      \u0275\u0275twoWayBindingSet(userProfile_r3.language, $event) || (userProfile_r3.language = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function ProfilePage_ng_container_13_Template_ion_select_ionChange_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.profileChange($event, "language"));
    });
    \u0275\u0275elementStart(33, "ion-select-option", 19);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ion-select-option", 20);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "ion-select-option", 21);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "ion-select-option", 22);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "ion-list", 9)(46, "ion-list-header")(47, "ion-label");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "ion-item")(51, "ion-input", 23);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ProfilePage_ng_container_13_Template_ion_input_ngModelChange_51_listener($event) {
      const userProfile_r3 = \u0275\u0275restoreView(_r1).ngIf;
      \u0275\u0275twoWayBindingSet(userProfile_r3.phonenumber, $event) || (userProfile_r3.phonenumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function ProfilePage_ng_container_13_Template_ion_input_ionChange_51_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.profileChange($event, "phonenumber"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "ion-item", 24);
    \u0275\u0275element(55, "ion-input", 25);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "ion-alert", 26);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementStart(61, "ion-item", 27);
    \u0275\u0275element(62, "ion-input", 28);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(65, "ion-alert", 29);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(68, ProfilePage_ng_container_13_ng_container_68_Template, 2, 1, "ng-container", 8);
    \u0275\u0275pipe(69, "async");
    \u0275\u0275elementStart(70, "ion-list", 9)(71, "ion-list-header")(72, "ion-label");
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "ion-accordion-group")(76, "ion-accordion", 30)(77, "ion-item", 31);
    \u0275\u0275element(78, "ion-icon", 32);
    \u0275\u0275elementStart(79, "ion-label");
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 33)(83, "ion-item");
    \u0275\u0275template(84, ProfilePage_ng_container_13_ion_icon_84_Template, 1, 0, "ion-icon", 34)(85, ProfilePage_ng_container_13_ion_icon_85_Template, 1, 0, "ion-icon", 35);
    \u0275\u0275elementStart(86, "ion-toggle", 36);
    \u0275\u0275pipe(87, "translate");
    \u0275\u0275listener("ionChange", function ProfilePage_ng_container_13_Template_ion_toggle_ionChange_86_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePush($event));
    });
    \u0275\u0275elementStart(88, "ion-label");
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(91, ProfilePage_ng_container_13_ion_note_91_Template, 3, 3, "ion-note", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "ion-item", 38);
    \u0275\u0275element(93, "ion-icon", 39);
    \u0275\u0275elementStart(94, "ion-toggle", 40);
    \u0275\u0275pipe(95, "translate");
    \u0275\u0275listener("ionChange", function ProfilePage_ng_container_13_Template_ion_toggle_ionChange_94_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePushModule($event, "News"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "ion-label");
    \u0275\u0275text(97);
    \u0275\u0275pipe(98, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "ion-item", 38);
    \u0275\u0275element(100, "ion-icon", 41);
    \u0275\u0275elementStart(101, "ion-toggle", 40);
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275listener("ionChange", function ProfilePage_ng_container_13_Template_ion_toggle_ionChange_101_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePushModule($event, "NewsVerband"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "ion-label");
    \u0275\u0275text(104);
    \u0275\u0275pipe(105, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "ion-item", 38);
    \u0275\u0275element(107, "ion-icon", 42);
    \u0275\u0275elementStart(108, "ion-toggle", 40);
    \u0275\u0275pipe(109, "translate");
    \u0275\u0275listener("ionChange", function ProfilePage_ng_container_13_Template_ion_toggle_ionChange_108_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePushModule($event, "Training"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "ion-label");
    \u0275\u0275text(111);
    \u0275\u0275pipe(112, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "ion-item", 38);
    \u0275\u0275element(114, "ion-icon", 43);
    \u0275\u0275elementStart(115, "ion-toggle", 40);
    \u0275\u0275pipe(116, "translate");
    \u0275\u0275listener("ionChange", function ProfilePage_ng_container_13_Template_ion_toggle_ionChange_115_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePushModule($event, "Championship"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "ion-label");
    \u0275\u0275text(118);
    \u0275\u0275pipe(119, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "ion-item", 38);
    \u0275\u0275element(121, "ion-icon", 44);
    \u0275\u0275elementStart(122, "ion-toggle", 40);
    \u0275\u0275pipe(123, "translate");
    \u0275\u0275listener("ionChange", function ProfilePage_ng_container_13_Template_ion_toggle_ionChange_122_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePushModule($event, "Event"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "ion-label");
    \u0275\u0275text(125);
    \u0275\u0275pipe(126, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "ion-item", 38);
    \u0275\u0275element(128, "ion-icon", 45);
    \u0275\u0275elementStart(129, "ion-toggle", 40);
    \u0275\u0275pipe(130, "translate");
    \u0275\u0275listener("ionChange", function ProfilePage_ng_container_13_Template_ion_toggle_ionChange_129_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePushModule($event, "Helfer"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "ion-label");
    \u0275\u0275text(132);
    \u0275\u0275pipe(133, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(134, "ion-accordion", 46)(135, "ion-item", 31);
    \u0275\u0275element(136, "ion-icon", 47);
    \u0275\u0275elementStart(137, "ion-label");
    \u0275\u0275text(138);
    \u0275\u0275pipe(139, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(140, "div", 33)(141, "ion-item");
    \u0275\u0275template(142, ProfilePage_ng_container_13_ion_icon_142_Template, 1, 0, "ion-icon", 48)(143, ProfilePage_ng_container_13_ion_icon_143_Template, 1, 0, "ion-icon", 49);
    \u0275\u0275elementStart(144, "ion-toggle", 50);
    \u0275\u0275pipe(145, "translate");
    \u0275\u0275listener("ionChange", function ProfilePage_ng_container_13_Template_ion_toggle_ionChange_144_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleEmail($event));
    });
    \u0275\u0275elementStart(146, "ion-label");
    \u0275\u0275text(147);
    \u0275\u0275pipe(148, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(149, "ion-item");
    \u0275\u0275element(150, "ion-icon", 51);
    \u0275\u0275elementStart(151, "ion-toggle", 52);
    \u0275\u0275pipe(152, "translate");
    \u0275\u0275listener("ionChange", function ProfilePage_ng_container_13_Template_ion_toggle_ionChange_151_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleEmailReporting($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "ion-label");
    \u0275\u0275text(154);
    \u0275\u0275pipe(155, "translate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(156, "div", 53)(157, "ion-button", 54);
    \u0275\u0275listener("click", function ProfilePage_ng_container_13_Template_ion_button_click_157_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteProfile());
    });
    \u0275\u0275element(158, "ion-icon", 55);
    \u0275\u0275text(159);
    \u0275\u0275pipe(160, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(161, "ion-list", 9)(162, "ion-list-header")(163, "ion-label");
    \u0275\u0275text(164);
    \u0275\u0275pipe(165, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(166, ProfilePage_ng_container_13_ion_item_166_Template, 8, 3, "ion-item", 56);
    \u0275\u0275elementStart(167, "ion-item", 57);
    \u0275\u0275element(168, "ion-icon", 58);
    \u0275\u0275elementStart(169, "ion-label");
    \u0275\u0275text(170);
    \u0275\u0275pipe(171, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(172, "ion-alert", 59);
    \u0275\u0275pipe(173, "translate");
    \u0275\u0275pipe(174, "translate");
    \u0275\u0275pipe(175, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const userProfile_r3 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 116, "profile.generally"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("alt", userProfile_r3.firstName);
    \u0275\u0275propertyInterpolate("src", userProfile_r3.profilePicture, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275propertyInterpolate("value", userProfile_r3.firstName);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(14, 118, "common.first__name"));
    \u0275\u0275twoWayProperty("ngModel", userProfile_r3.firstName);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(15, 120, "common.first__name"));
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("value", userProfile_r3.lastName);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(18, 122, "common.last__name"));
    \u0275\u0275twoWayProperty("ngModel", userProfile_r3.lastName);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(19, 124, "common.last__name"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 126, "profile.birthdate"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(29, 128, "profile.language"));
    \u0275\u0275twoWayProperty("ngModel", userProfile_r3.language);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(30, 130, "profile.select__language"))("cancelText", \u0275\u0275pipeBind1(31, 132, "common.cancel"))("okText", \u0275\u0275pipeBind1(32, 134, "common.save"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 136, "common.language__german"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 138, "common.language__french"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 140, "common.language__italian"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 142, "common.language__english"));
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 144, "profile.contact__information"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("value", userProfile_r3.phonenumber);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(52, 146, "profile.phonenumber"));
    \u0275\u0275twoWayProperty("ngModel", userProfile_r3.phonenumber);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(53, 148, "profile.phonenumber"));
    \u0275\u0275advance(4);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(56, 150, "profile.email"))("value", userProfile_r3.email);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(57, 152, "profile.email"));
    \u0275\u0275advance(3);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(59, 154, "profile.change_email_header"))("message", \u0275\u0275pipeBind1(60, 156, "profile.change_email_message"))("buttons", ctx_r1.alertButtonsEmail)("inputs", ctx_r1.alertInputsEmail);
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate3("value", "", userProfile_r3.streetAndNumber, " ", userProfile_r3.postalcode, " ", userProfile_r3.city, "");
    \u0275\u0275property("label", \u0275\u0275pipeBind1(63, 158, "profile.address"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(64, 160, "profile.address"));
    \u0275\u0275advance(3);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(66, 162, "profile.change_address_header"))("message", \u0275\u0275pipeBind1(67, 164, "profile.change_address_message"))("buttons", ctx_r1.alertButtonsAddress)("inputs", ctx_r1.alertInputsAddress);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(69, 166, ctx_r1.clubList$));
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(74, 168, "profile.notifications"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(81, 170, "profile.push__message"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", userProfile_r3.settingsPush);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !userProfile_r3.settingsPush);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("value", userProfile_r3 == null ? null : userProfile_r3.settingsPush);
    \u0275\u0275property("checked", userProfile_r3.settingsPush)("enableOnOffLabels", true);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(87, 172, "profile.push__message"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(90, 174, "profile.push__message__activate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", userProfile_r3.settingsPush);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("disabled", !userProfile_r3.settingsPush);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("value", userProfile_r3 == null ? null : userProfile_r3.settingsPushNews);
    \u0275\u0275property("checked", userProfile_r3.settingsPushNews)("enableOnOffLabels", true);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(95, 176, "common.news"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(98, 178, "common.news"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("disabled", !userProfile_r3.settingsPush);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("value", userProfile_r3 == null ? null : userProfile_r3.settingsPushNewsVerband);
    \u0275\u0275property("checked", userProfile_r3.settingsPushNewsVerband)("enableOnOffLabels", true);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(102, 180, "common.newsVerband"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(105, 182, "common.newsVerband"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("disabled", !userProfile_r3.settingsPush);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("value", userProfile_r3 == null ? null : userProfile_r3.settingsPushTraining);
    \u0275\u0275property("checked", userProfile_r3.settingsPushTraining)("enableOnOffLabels", true);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(109, 184, "common.training"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(112, 186, "common.training"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("disabled", !userProfile_r3.settingsPush);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("value", userProfile_r3 == null ? null : userProfile_r3.settingsPushChampionship);
    \u0275\u0275property("checked", userProfile_r3.settingsPushChampionship)("enableOnOffLabels", true);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(116, 188, "common.championship"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(119, 190, "common.championship"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("disabled", !userProfile_r3.settingsPush);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("value", userProfile_r3 == null ? null : userProfile_r3.settingsPushEvent);
    \u0275\u0275property("checked", userProfile_r3.settingsPushEvent)("enableOnOffLabels", true);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(123, 192, "common.events"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(126, 194, "common.events"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("disabled", !userProfile_r3.settingsPush);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("value", userProfile_r3 == null ? null : userProfile_r3.settingsPushHelfer);
    \u0275\u0275property("checked", userProfile_r3.settingsPushHelfer)("enableOnOffLabels", true);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(130, 196, "common.helper"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(133, 198, "common.helper"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(139, 200, "profile.email__messages"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", userProfile_r3.settingsEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !userProfile_r3.settingsEmail);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("value", userProfile_r3 == null ? null : userProfile_r3.settingsEmail);
    \u0275\u0275property("checked", userProfile_r3.settingsEmail)("enableOnOffLabels", true);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(145, 202, "profile.email__messages"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(148, 204, "profile.email__messages"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("value", userProfile_r3 == null ? null : userProfile_r3.settingsEmailReporting);
    \u0275\u0275property("checked", userProfile_r3.settingsEmailReporting)("enableOnOffLabels", true);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(152, 206, "profile.email__messages_report"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(155, 208, "profile.email__messages_report"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(160, 210, "profile.delete__profile"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(165, 212, "profile.kids"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", userProfile_r3.kids);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(171, 214, "profile.kids.add"));
    \u0275\u0275advance(2);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(173, 216, "profile.kids.add_header"))("message", \u0275\u0275pipeBind1(174, 218, "profile.kids.add_message"))("buttons", ctx_r1.kidAlertButtons)("inputs", \u0275\u0275pureFunction1(226, _c2, \u0275\u0275pureFunction2(223, _c1, \u0275\u0275pipeBind1(175, 220, "profile.kids.email_placeholder"), \u0275\u0275pureFunction0(222, _c0))));
  }
}
function ProfilePage_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 74);
  }
}
function ProfilePage_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "common.loading"), " ");
  }
}
function ProfilePage_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "common.loading"), " ");
  }
}
var _ProfilePage = class _ProfilePage {
  constructor(authService, fbService, profileService, toastController, loadingController, router, menuCtrl, alertController, translate, modalCtrl, routerOutlet) {
    this.authService = authService;
    this.fbService = fbService;
    this.profileService = profileService;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.router = router;
    this.menuCtrl = menuCtrl;
    this.alertController = alertController;
    this.translate = translate;
    this.modalCtrl = modalCtrl;
    this.routerOutlet = routerOutlet;
    this.alertButtonsEmail = [];
    this.alertInputsEmail = [];
    this.alertButtonsAddress = [];
    this.alertInputsAddress = [];
    this.VAPID_PUBLIC_KEY = "BFSCppXa1OPCktrYhZN3GfX5gKI00al-eNykBwk3rmHRwjfrGeo3JXaTPP_0EGQ01Ik_Ubc2dzvvFQmOc3GvXsY";
    this.kidAlertButtons = [
      {
        text: this.translate.instant("common.cancel"),
        role: "cancel"
      },
      {
        text: this.translate.instant("common.add"),
        role: "confirm",
        handler: (data) => {
          this.addKid(data.email);
        }
      }
    ];
    this.menuCtrl.enable(true, "menu");
  }
  ngOnInit() {
    return __async(this, null, function* () {
      console.log("ngOnInit");
      this.userProfile$ = this.getUserProfile();
      this.deviceId = yield Device.getId();
      this.deviceInfo = yield Device.getInfo();
      this.clubList$ = this.fbService.getClubList();
    });
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
    this.profileSubscription = this.userProfile$.subscribe((profile) => __async(this, null, function* () {
      if (profile) {
        this.setupAlerts(profile);
      }
    }));
  }
  enableHelferEvents(clubList) {
    return clubList && clubList.some((club) => club.hasFeatureHelferEvent == true);
  }
  setupAlerts(profile) {
    this.alertInputsEmail = [
      {
        label: this.translate.instant("profile.change_email_old_label"),
        placeholder: this.translate.instant("profile.change_email_old_label"),
        name: "oldEmail",
        type: "email",
        value: profile.email
      },
      {
        label: this.translate.instant("profile.change_email_new_label"),
        placeholder: this.translate.instant("profile.change_email_new_label"),
        name: "newEmail",
        type: "email"
      }
    ];
    this.alertButtonsEmail = [
      {
        text: this.translate.instant("common.cancel"),
        role: "destructive",
        handler: (data) => {
          console.log(data);
        }
      },
      {
        text: this.translate.instant("common.save"),
        handler: (data) => __async(this, null, function* () {
          console.log(data);
          if (data.oldEmail !== data.newEmail && data.oldEmail.length > 0 && data.newEmail.length > 0) {
            try {
              const verifyEmail = yield this.authService.verifyBeforeUpdateEmail(data.newEmail);
              console.log(verifyEmail);
              const updatedProfile = yield this.profileChange({ detail: { value: data.newEmail } }, "email");
              yield this.authService.logout();
            } catch (e) {
              if (e.code == "auth/operation-not-allowed") {
                console.log(e.message);
              } else if (e.code == "auth/requires-recent-login") {
                alert("bitte ausloggen und nochmals probieren.");
              } else {
                console.log(JSON.stringify(e));
              }
            }
          } else {
            console.log("error");
          }
        })
      }
    ];
    this.alertInputsAddress = [
      {
        label: this.translate.instant("profile.change_address_streetandnumber"),
        placeholder: this.translate.instant("profile.change_address_streetandnumber"),
        name: "streetAndNumber",
        type: "text",
        value: profile.streetAndNumber
      },
      {
        label: this.translate.instant("profile.change_address_postalcode"),
        placeholder: this.translate.instant("profile.change_address_postalcode"),
        name: "postalcode",
        type: "number",
        value: profile.postalcode
      },
      {
        label: this.translate.instant("profile.change_address_city"),
        placeholder: this.translate.instant("profile.change_address_city"),
        name: "city",
        type: "text",
        value: profile.city
      }
    ];
    this.alertButtonsAddress = [
      {
        text: this.translate.instant("common.cancel"),
        role: "destructive",
        handler: (data) => {
          console.log(data);
        }
      },
      {
        text: this.translate.instant("common.save"),
        role: "",
        handler: (data) => __async(this, null, function* () {
          console.log(data);
          yield this.profileChange({ detail: { value: data.city } }, "city");
          yield this.profileChange({ detail: { value: data.postalcode } }, "postalcode");
          yield this.profileChange({ detail: { value: data.streetAndNumber } }, "streetAndNumber");
        })
      }
    ];
  }
  ngOnDestroy() {
    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }
  }
  showPicture(imageUrl) {
    return __async(this, null, function* () {
      const alert2 = yield this.alertController.create({
        header: yield lastValueFrom(this.translate.get("profile.profile_picture")),
        message: `<img src="${imageUrl}" alt="Profilbild" style="width: 100%; max-width: 300px; height: auto;">`,
        buttons: [{
          text: yield lastValueFrom(this.translate.get("common.close")),
          role: "cancel"
        }],
        cssClass: "profile-picture-alert"
      });
      yield alert2.present();
    });
  }
  getUserProfile() {
    return this.authService.getUser$().pipe(switchMap((user) => {
      if (!user || !user.uid) {
        console.log("No user found");
        return of(null);
      }
      return this.profileService.getUserProfile(user).pipe(tap((profile) => {
        if (profile && profile.dateOfBirth) {
          this.localDateString = this.convertToLocalDateString(profile.dateOfBirth.toDate());
        } else {
          this.localDateString = "1970-01-01T00:00:00.000Z";
        }
      }));
    }), catchError((err) => {
      console.error("Error fetching user profile", err);
      return of(null);
    }));
  }
  convertToLocalDateString(date) {
    const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 6e4);
    return localDate.toISOString();
  }
  getClubRequestList() {
  }
  getTeamRequestList() {
  }
  getPushDeviceList() {
  }
  onDateChange(event) {
    return __async(this, null, function* () {
      event.detail.value = Timestamp.fromDate(new Date(event.detail.value));
      this.profileChange(event, "dateOfBirth");
    });
  }
  takePicture() {
    return __async(this, null, function* () {
      const loading = yield this.loadingController.create({
        message: yield lastValueFrom(this.translate.get("profile.profile_pic__uploaded")),
        showBackdrop: true,
        backdropDismiss: false,
        translucent: true,
        spinner: "circular"
      });
      const image = yield Camera2.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Base64,
        correctOrientation: true,
        height: 400,
        width: 400,
        direction: CameraDirection.Front
      });
      loading.present();
      yield this.profileService.setUserProfilePicture(image);
      loading.dismiss();
      yield this.presentToastTakePicture();
    });
  }
  deleteClubRequest(request) {
    return __async(this, null, function* () {
      yield this.fbService.deleteUserClubRequest(request.id, this.user.uid);
      yield this.presentToast();
      this.getClubRequestList();
    });
  }
  deleteTeamRequest(request) {
    return __async(this, null, function* () {
      yield this.fbService.deleteUserTeamRequest(request.id, this.user.uid);
      yield this.presentToast();
      this.getTeamRequestList();
    });
  }
  deleteProfile() {
    return __async(this, null, function* () {
      const alert2 = yield this.alertController.create({
        message: yield lastValueFrom(this.translate.get("profile.delete_profile__confirm")),
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
              yield this.authService.deleteProfile().catch((error) => {
                this.presentErrorDeleteProfile();
              });
              yield this.presentDeleteProfile();
              yield this.router.navigateByUrl("/logout");
            })
          }
        ]
      });
      alert2.present();
    });
  }
  openHelferPunkte() {
    return __async(this, null, function* () {
      console.log("openHelferPunkte");
      const modal = yield this.modalCtrl.create({
        component: HelferPunktePage,
        // presentingElement: await this.modalCtrl.getTop(),
        presentingElement: this.routerOutlet.nativeEl,
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          data: this.user
        }
      });
      modal.present();
      const { data, role } = yield modal.onWillDismiss();
      if (role === "confirm") {
      }
    });
  }
  presentToast() {
    return __async(this, null, function* () {
      const toast = yield this.toastController.create({
        message: yield lastValueFrom(this.translate.get("profile.request_success__deleted")),
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
  presentToastTakePicture() {
    return __async(this, null, function* () {
      const toast = yield this.toastController.create({
        message: yield lastValueFrom(this.translate.get("profile.success__profile_pic_changed")),
        duration: 1500,
        position: "top",
        color: "success"
      });
      yield toast.present();
    });
  }
  togglePush(event) {
    return __async(this, null, function* () {
      yield this.profileService.changeSettingsPush(event.detail.checked);
      if (event.detail.checked) {
        if (this.deviceInfo.platform == "android" || this.deviceInfo.platform == "ios") {
          this.registerPushDevice();
        } else {
          console.log("implement web push");
        }
      } else {
        console.log("disable push");
      }
      this.toastActionSaved();
    });
  }
  togglePushModule(event, module) {
    return __async(this, null, function* () {
      yield this.profileService.changeSettingsPushModule(event.detail.checked, module);
      this.toastActionSaved();
    });
  }
  toggleEmail(event) {
    return __async(this, null, function* () {
      yield this.profileService.changeSettingsEmail(event.detail.checked);
      console.log("email");
      this.toastActionSaved();
    });
  }
  toggleEmailReporting(event) {
    return __async(this, null, function* () {
      yield this.profileService.changeSettingsEmailReporting(event.detail.checked);
      console.log("email");
      this.toastActionSaved();
    });
  }
  deletePushDevice(id) {
    return __async(this, null, function* () {
      yield this.profileService.deletePushDevice(id);
      yield this.toastActionSaved();
    });
  }
  registerPushDevice() {
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === "granted") {
        PushNotifications.register();
      } else {
      }
    });
  }
  /* WEB PUSH STUFF
  
    async askForPush() {
      if (this.swPush.isEnabled) {
        // Push is available
        this.alertAskForPush();
      } else {
        this.alertPushNotSupported();
      }
    }
    async alertPushNotSupported() {
      const alert = await this.alertController.create({
        header: await lastValueFrom(
          this.translate.get("profile.error__push_notification_not_available")
        ),
        message: await lastValueFrom(
          this.translate.get(
            "profile.error_device_not_support_push_notifications"
          )
        ),
        buttons: [{ text: await lastValueFrom(this.translate.get("common.ok")) }],
      });
      alert.present();
    }
    async alertAskForPush() {
      const alert = await this.alertController.create({
        header: await lastValueFrom(
          this.translate.get("profile.push__notifications")
        ),
        message: await lastValueFrom(
          this.translate.get("profile.push_notification__permission_desc")
        ),
        buttons: [
          {
            text: await lastValueFrom(this.translate.get("common.yes")),
            handler: () => {
              this.subscribeToNotifications();
            },
          },
          { text: await lastValueFrom(this.translate.get("common.no")) },
        ],
      });
      alert.present();
    }
  
    async subscribeToNotifications() {
      try {
        const sub: PushSubscription = await this.swPush.requestSubscription({
          serverPublicKey: this.VAPID_PUBLIC_KEY,
        });
        console.log(sub.toJSON());
        if (sub && this.deviceId) {
          const profileUpdate = await this.profileService
            .addPushSubscriber(sub, this.deviceId, this.deviceInfo, "")
            .catch((err) => {
              console.error("Could not subscribe to notifications", err);
              this.errorPushMessageEnable("Could not subscribe to notifications");
            });
          this.toastActionSaved();
        } else {
          console.log("error push token register");
          this.errorPushMessageEnable(
            await lastValueFrom(this.translate.get("profile.error_push_token"))
          );
        }
      } catch (err) {
        console.log(err);
        this.alertPushNotSupported();
      }
    }*/
  presentDeleteProfile() {
    return __async(this, null, function* () {
      const toast = yield this.toastController.create({
        message: yield lastValueFrom(this.translate.get("profile.success__profile_deleted")),
        duration: 1500,
        position: "top",
        color: "danger"
      });
      yield toast.present();
    });
  }
  presentErrorDeleteProfile() {
    return __async(this, null, function* () {
      const toast = yield this.toastController.create({
        message: yield lastValueFrom(this.translate.get("profile.error__while_deleting_msg")),
        duration: 1500,
        position: "top",
        color: "danger"
      });
      yield toast.present();
    });
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
  profileChange(event, fieldname) {
    return __async(this, null, function* () {
      console.log(event);
      yield this.profileService.changeProfileAttribute(event.detail.value, fieldname);
      if (fieldname == "language") {
        this.translate.use(event.detail.value);
      }
    });
  }
  addKid(email) {
    return __async(this, null, function* () {
      try {
        yield this.profileService.addKid(email);
        yield this.presentToast();
      } catch (error) {
        yield this.presentToast();
      }
    });
  }
  removeKid(email) {
    return __async(this, null, function* () {
      try {
        yield this.profileService.removeKid(email);
        yield this.presentToast();
      } catch (error) {
        yield this.presentToast();
      }
    });
  }
};
_ProfilePage.\u0275fac = function ProfilePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProfilePage)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(UserProfileService), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MenuController), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(IonRouterOutlet));
};
_ProfilePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfilePage, selectors: [["app-profile"]], standalone: false, decls: 21, vars: 11, consts: [["loading", ""], ["loadingClub", ""], ["loadingTeams", ""], [3, "translucent"], ["slot", "start"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], [4, "ngIf"], ["lines", "full", 3, "inset"], [3, "alt", "src"], ["slot", "end", 3, "click"], ["slot", "icon-only", "name", "camera"], ["labelPlacement", "stacked", 3, "ionChange", "ngModelChange", "label", "ngModel", "value"], ["id", "dateOfBirthItem"], ["position", ""], ["slot", "end", "datetime", "dateOfBirth"], [3, "keepContentsMounted"], ["aria-label", "'profile.language' | translate", 3, "ngModelChange", "ionChange", "label", "ngModel", "placeholder", "cancelText", "okText"], ["value", "de"], ["value", "fr"], ["value", "it"], ["value", "en"], ["labelPlacement", "stacked", "tel", "", 3, "ngModelChange", "ionChange", "label", "ngModel", "value"], ["id", "present-alert-email", "detail", "true"], ["labelPlacement", "stacked", "type", "email", "readonly", "", 3, "label", "value"], ["trigger", "present-alert-email", 3, "header", "message", "buttons", "inputs"], ["id", "present-alert-address", "detail", "true"], ["labelPlacement", "stacked", 3, "label", "value"], ["trigger", "present-alert-address", 3, "header", "message", "buttons", "inputs"], ["value", "settingsPush"], ["slot", "header"], ["slot", "start", "color", "primary", "name", "notifications-outline"], ["slot", "content"], ["slot", "start", "color", "success", "name", "notifications-circle", 4, "ngIf"], ["slot", "start", "color", "danger", "name", "notifications-off-circle", 4, "ngIf"], [3, "ionChange", "value", "checked", "enableOnOffLabels"], ["class", "ion-text-wrap", "color", "medium", 4, "ngIf"], [3, "disabled"], ["size", "small", "slot", "start", "name", "newspaper-outline"], ["labelPlacement", "start", "slot", "end", 3, "ionChange", "value", "checked", "enableOnOffLabels"], ["size", "small", "slot", "start", "name", "newspaper"], ["size", "small", "slot", "start", "name", "barbell-outline"], ["size", "small", "slot", "start", "name", "trophy-outline"], ["size", "small", "slot", "start", "name", "calendar-outline"], ["size", "small", "slot", "start", "name", "help-buoy-outline"], ["value", "settingsEmail"], ["slot", "start", "color", "secondary", "name", "mail-outline"], ["slot", "start", "color", "success", "name", "mail", 4, "ngIf"], ["slot", "start", "color", "danger", "name", "mail-outline", 4, "ngIf"], ["color", "secondary", 3, "ionChange", "value", "checked", "enableOnOffLabels"], ["slot", "start", "size", "small", "name", "analytics"], ["color", "secondary", "labelPlacement", "start", "slot", "end", 3, "ionChange", "value", "checked", "enableOnOffLabels"], [1, "ion-padding"], ["fill", "outline", "expand", "block", "color", "danger", 3, "click"], ["slot", "start", "name", "trash"], [4, "ngFor", "ngForOf"], ["id", "add-kid-alert", "detail", "true"], ["slot", "start", "name", "person-add-outline"], ["trigger", "add-kid-alert", 3, "header", "message", "buttons", "inputs"], ["presentation", "date", "id", "dateOfBirth", 3, "ionChange", "firstDayOfWeek", "value"], ["detail", "true", 3, "click"], ["name", "help-buoy-outline", "slot", "start"], ["slot", "start", "color", "success", "name", "notifications-circle"], ["slot", "start", "color", "danger", "name", "notifications-off-circle"], ["color", "medium", 1, "ion-text-wrap"], ["slot", "start", "color", "success", "name", "mail"], ["slot", "start", "color", "danger", "name", "mail-outline"], ["color", "success", 4, "ngIf"], ["color", "warning", 4, "ngIf"], ["slot", "end", "color", "danger", 3, "click"], ["slot", "icon-only", "name", "trash"], ["color", "success"], ["color", "warning"], ["name", "bubbles"]], template: function ProfilePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 3)(1, "ion-toolbar")(2, "ion-buttons", 4);
    \u0275\u0275element(3, "ion-menu-button");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-title");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "ion-content", 5)(8, "ion-header", 6)(9, "ion-toolbar")(10, "ion-title", 7);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, ProfilePage_ng_container_13_Template, 176, 228, "ng-container", 8);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ProfilePage_ng_template_15_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(17, ProfilePage_ng_template_17_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(19, ProfilePage_ng_template_19_Template, 3, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "common.profile"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, "common.profile"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(14, 9, ctx.userProfile$));
  }
}, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, IonAccordion, IonAccordionGroup, IonAlert, IonAvatar, IonButton, IonButtons, IonContent, IonDatetime, IonDatetimeButton, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonMenuButton, IonNote, IonSelect, IonSelectOption, IonSpinner, IonText, IonTitle, IonToggle, IonToolbar, IonModal, BooleanValueAccessorDirective, SelectValueAccessorDirective, TextValueAccessorDirective, AsyncPipe, TranslatePipe], styles: ["\n\nion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 36px;\n}\n.profile-picture-alert[_ngcontent-%COMP%] {\n  --max-width: 90%;\n  --width: 340px;\n}\n.profile-picture-alert[_ngcontent-%COMP%]   .alert-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n}\n.profile-picture-alert[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=profile.page.css.map */"] });
var ProfilePage = _ProfilePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfilePage, { className: "ProfilePage", filePath: "src/app/pages/profile/profile.page.ts", lineNumber: 59 });
})();

// src/app/pages/profile/profile-routing.module.ts
var routes = [
  {
    path: "",
    component: ProfilePage
  }
];
var _ProfilePageRoutingModule = class _ProfilePageRoutingModule {
};
_ProfilePageRoutingModule.\u0275fac = function ProfilePageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProfilePageRoutingModule)();
};
_ProfilePageRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProfilePageRoutingModule });
_ProfilePageRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var ProfilePageRoutingModule = _ProfilePageRoutingModule;

// src/app/pages/profile/profile.module.ts
var _ProfilePageModule = class _ProfilePageModule {
};
_ProfilePageModule.\u0275fac = function ProfilePageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProfilePageModule)();
};
_ProfilePageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProfilePageModule });
_ProfilePageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, FormsModule, IonicModule, ProfilePageRoutingModule, TranslateModule] });
var ProfilePageModule = _ProfilePageModule;
export {
  ProfilePageModule
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL2NhbWVyYS9kaXN0L2VzbS9kZWZpbml0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL2NhbWVyYS9kaXN0L2VzbS93ZWIuanMiLCJub2RlX21vZHVsZXMvQGNhcGFjaXRvci9jYW1lcmEvZGlzdC9lc20vaW5kZXguanMiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnRzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5odG1sIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUtcm91dGluZy5tb2R1bGUudHMiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBDYW1lcmFTb3VyY2U7XG4oZnVuY3Rpb24gKENhbWVyYVNvdXJjZSkge1xuICAvKipcbiAgICogUHJvbXB0cyB0aGUgdXNlciB0byBzZWxlY3QgZWl0aGVyIHRoZSBwaG90byBhbGJ1bSBvciB0YWtlIGEgcGhvdG8uXG4gICAqL1xuICBDYW1lcmFTb3VyY2VbXCJQcm9tcHRcIl0gPSBcIlBST01QVFwiO1xuICAvKipcbiAgICogVGFrZSBhIG5ldyBwaG90byB1c2luZyB0aGUgY2FtZXJhLlxuICAgKi9cbiAgQ2FtZXJhU291cmNlW1wiQ2FtZXJhXCJdID0gXCJDQU1FUkFcIjtcbiAgLyoqXG4gICAqIFBpY2sgYW4gZXhpc3RpbmcgcGhvdG8gZnJvbSB0aGUgZ2FsbGVyeSBvciBwaG90byBhbGJ1bS5cbiAgICovXG4gIENhbWVyYVNvdXJjZVtcIlBob3Rvc1wiXSA9IFwiUEhPVE9TXCI7XG59KShDYW1lcmFTb3VyY2UgfHwgKENhbWVyYVNvdXJjZSA9IHt9KSk7XG5leHBvcnQgdmFyIENhbWVyYURpcmVjdGlvbjtcbihmdW5jdGlvbiAoQ2FtZXJhRGlyZWN0aW9uKSB7XG4gIENhbWVyYURpcmVjdGlvbltcIlJlYXJcIl0gPSBcIlJFQVJcIjtcbiAgQ2FtZXJhRGlyZWN0aW9uW1wiRnJvbnRcIl0gPSBcIkZST05UXCI7XG59KShDYW1lcmFEaXJlY3Rpb24gfHwgKENhbWVyYURpcmVjdGlvbiA9IHt9KSk7XG5leHBvcnQgdmFyIENhbWVyYVJlc3VsdFR5cGU7XG4oZnVuY3Rpb24gKENhbWVyYVJlc3VsdFR5cGUpIHtcbiAgQ2FtZXJhUmVzdWx0VHlwZVtcIlVyaVwiXSA9IFwidXJpXCI7XG4gIENhbWVyYVJlc3VsdFR5cGVbXCJCYXNlNjRcIl0gPSBcImJhc2U2NFwiO1xuICBDYW1lcmFSZXN1bHRUeXBlW1wiRGF0YVVybFwiXSA9IFwiZGF0YVVybFwiO1xufSkoQ2FtZXJhUmVzdWx0VHlwZSB8fCAoQ2FtZXJhUmVzdWx0VHlwZSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBXZWJQbHVnaW4sIENhcGFjaXRvckV4Y2VwdGlvbiB9IGZyb20gJ0BjYXBhY2l0b3IvY29yZSc7XG5pbXBvcnQgeyBDYW1lcmFTb3VyY2UsIENhbWVyYURpcmVjdGlvbiB9IGZyb20gJy4vZGVmaW5pdGlvbnMnO1xuZXhwb3J0IGNsYXNzIENhbWVyYVdlYiBleHRlbmRzIFdlYlBsdWdpbiB7XG4gIGFzeW5jIGdldFBob3RvKG9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXN5bmMtcHJvbWlzZS1leGVjdXRvclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy53ZWJVc2VJbnB1dCB8fCBvcHRpb25zLnNvdXJjZSA9PT0gQ2FtZXJhU291cmNlLlBob3Rvcykge1xuICAgICAgICB0aGlzLmZpbGVJbnB1dEV4cGVyaWVuY2Uob3B0aW9ucywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5zb3VyY2UgPT09IENhbWVyYVNvdXJjZS5Qcm9tcHQpIHtcbiAgICAgICAgbGV0IGFjdGlvblNoZWV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHdhLWFjdGlvbi1zaGVldCcpO1xuICAgICAgICBpZiAoIWFjdGlvblNoZWV0KSB7XG4gICAgICAgICAgYWN0aW9uU2hlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwd2EtYWN0aW9uLXNoZWV0Jyk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhY3Rpb25TaGVldCk7XG4gICAgICAgIH1cbiAgICAgICAgYWN0aW9uU2hlZXQuaGVhZGVyID0gb3B0aW9ucy5wcm9tcHRMYWJlbEhlYWRlciB8fCAnUGhvdG8nO1xuICAgICAgICBhY3Rpb25TaGVldC5jYW5jZWxhYmxlID0gZmFsc2U7XG4gICAgICAgIGFjdGlvblNoZWV0Lm9wdGlvbnMgPSBbe1xuICAgICAgICAgIHRpdGxlOiBvcHRpb25zLnByb21wdExhYmVsUGhvdG8gfHwgJ0Zyb20gUGhvdG9zJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdGl0bGU6IG9wdGlvbnMucHJvbXB0TGFiZWxQaWN0dXJlIHx8ICdUYWtlIFBpY3R1cmUnXG4gICAgICAgIH1dO1xuICAgICAgICBhY3Rpb25TaGVldC5hZGRFdmVudExpc3RlbmVyKCdvblNlbGVjdGlvbicsIGFzeW5jIGUgPT4ge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGUuZGV0YWlsO1xuICAgICAgICAgIGlmIChzZWxlY3Rpb24gPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlsZUlucHV0RXhwZXJpZW5jZShvcHRpb25zLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhbWVyYUV4cGVyaWVuY2Uob3B0aW9ucywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYW1lcmFFeHBlcmllbmNlKG9wdGlvbnMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgcGlja0ltYWdlcyhfb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hc3luYy1wcm9taXNlLWV4ZWN1dG9yXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMubXVsdGlwbGVGaWxlSW5wdXRFeHBlcmllbmNlKHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgY2FtZXJhRXhwZXJpZW5jZShvcHRpb25zLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoY3VzdG9tRWxlbWVudHMuZ2V0KCdwd2EtY2FtZXJhLW1vZGFsJykpIHtcbiAgICAgIGNvbnN0IGNhbWVyYU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHdhLWNhbWVyYS1tb2RhbCcpO1xuICAgICAgY2FtZXJhTW9kYWwuZmFjaW5nTW9kZSA9IG9wdGlvbnMuZGlyZWN0aW9uID09PSBDYW1lcmFEaXJlY3Rpb24uRnJvbnQgPyAndXNlcicgOiAnZW52aXJvbm1lbnQnO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW1lcmFNb2RhbCk7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBjYW1lcmFNb2RhbC5jb21wb25lbnRPblJlYWR5KCk7XG4gICAgICAgIGNhbWVyYU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ29uUGhvdG8nLCBhc3luYyBlID0+IHtcbiAgICAgICAgICBjb25zdCBwaG90byA9IGUuZGV0YWlsO1xuICAgICAgICAgIGlmIChwaG90byA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBDYXBhY2l0b3JFeGNlcHRpb24oJ1VzZXIgY2FuY2VsbGVkIHBob3RvcyBhcHAnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChwaG90byBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZWplY3QocGhvdG8pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKGF3YWl0IHRoaXMuX2dldENhbWVyYVBob3RvKHBob3RvLCBvcHRpb25zKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhbWVyYU1vZGFsLmRpc21pc3MoKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNhbWVyYU1vZGFsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNhbWVyYU1vZGFsLnByZXNlbnQoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhpcy5maWxlSW5wdXRFeHBlcmllbmNlKG9wdGlvbnMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFVuYWJsZSB0byBsb2FkIFBXQSBFbGVtZW50ICdwd2EtY2FtZXJhLW1vZGFsJy4gU2VlIHRoZSBkb2NzOiBodHRwczovL2NhcGFjaXRvcmpzLmNvbS9kb2NzL3dlYi9wd2EtZWxlbWVudHMuYCk7XG4gICAgICB0aGlzLmZpbGVJbnB1dEV4cGVyaWVuY2Uob3B0aW9ucywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9XG4gIH1cbiAgZmlsZUlucHV0RXhwZXJpZW5jZShvcHRpb25zLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX2NhcGFjaXRvci1jYW1lcmEtaW5wdXQnKTtcbiAgICBjb25zdCBjbGVhbnVwID0gKCkgPT4ge1xuICAgICAgdmFyIF9hO1xuICAgICAgKF9hID0gaW5wdXQucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZUNoaWxkKGlucHV0KTtcbiAgICB9O1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlucHV0LmlkID0gJ19jYXBhY2l0b3ItY2FtZXJhLWlucHV0JztcbiAgICAgIGlucHV0LnR5cGUgPSAnZmlsZSc7XG4gICAgICBpbnB1dC5oaWRkZW4gPSB0cnVlO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBfZSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBpbnB1dC5maWxlc1swXTtcbiAgICAgICAgbGV0IGZvcm1hdCA9ICdqcGVnJztcbiAgICAgICAgaWYgKGZpbGUudHlwZSA9PT0gJ2ltYWdlL3BuZycpIHtcbiAgICAgICAgICBmb3JtYXQgPSAncG5nJztcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLnR5cGUgPT09ICdpbWFnZS9naWYnKSB7XG4gICAgICAgICAgZm9ybWF0ID0gJ2dpZic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMucmVzdWx0VHlwZSA9PT0gJ2RhdGFVcmwnIHx8IG9wdGlvbnMucmVzdWx0VHlwZSA9PT0gJ2Jhc2U2NCcpIHtcbiAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMucmVzdWx0VHlwZSA9PT0gJ2RhdGFVcmwnKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIGRhdGFVcmw6IHJlYWRlci5yZXN1bHQsXG4gICAgICAgICAgICAgICAgZm9ybWF0XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnJlc3VsdFR5cGUgPT09ICdiYXNlNjQnKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGI2NCA9IHJlYWRlci5yZXN1bHQuc3BsaXQoJywnKVsxXTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgYmFzZTY0U3RyaW5nOiBiNjQsXG4gICAgICAgICAgICAgICAgZm9ybWF0XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgd2ViUGF0aDogVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSxcbiAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbmNlbCcsIF9lID0+IHtcbiAgICAgICAgcmVqZWN0KG5ldyBDYXBhY2l0b3JFeGNlcHRpb24oJ1VzZXIgY2FuY2VsbGVkIHBob3RvcyBhcHAnKSk7XG4gICAgICAgIGNsZWFudXAoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpbnB1dC5hY2NlcHQgPSAnaW1hZ2UvKic7XG4gICAgaW5wdXQuY2FwdHVyZSA9IHRydWU7XG4gICAgaWYgKG9wdGlvbnMuc291cmNlID09PSBDYW1lcmFTb3VyY2UuUGhvdG9zIHx8IG9wdGlvbnMuc291cmNlID09PSBDYW1lcmFTb3VyY2UuUHJvbXB0KSB7XG4gICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2NhcHR1cmUnKTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGlyZWN0aW9uID09PSBDYW1lcmFEaXJlY3Rpb24uRnJvbnQpIHtcbiAgICAgIGlucHV0LmNhcHR1cmUgPSAndXNlcic7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmRpcmVjdGlvbiA9PT0gQ2FtZXJhRGlyZWN0aW9uLlJlYXIpIHtcbiAgICAgIGlucHV0LmNhcHR1cmUgPSAnZW52aXJvbm1lbnQnO1xuICAgIH1cbiAgICBpbnB1dC5jbGljaygpO1xuICB9XG4gIG11bHRpcGxlRmlsZUlucHV0RXhwZXJpZW5jZShyZXNvbHZlLCByZWplY3QpIHtcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX2NhcGFjaXRvci1jYW1lcmEtaW5wdXQtbXVsdGlwbGUnKTtcbiAgICBjb25zdCBjbGVhbnVwID0gKCkgPT4ge1xuICAgICAgdmFyIF9hO1xuICAgICAgKF9hID0gaW5wdXQucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZUNoaWxkKGlucHV0KTtcbiAgICB9O1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlucHV0LmlkID0gJ19jYXBhY2l0b3ItY2FtZXJhLWlucHV0LW11bHRpcGxlJztcbiAgICAgIGlucHV0LnR5cGUgPSAnZmlsZSc7XG4gICAgICBpbnB1dC5oaWRkZW4gPSB0cnVlO1xuICAgICAgaW5wdXQubXVsdGlwbGUgPSB0cnVlO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBfZSA9PiB7XG4gICAgICAgIGNvbnN0IHBob3RvcyA9IFtdO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1mb3Itb2ZcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGZpbGUgPSBpbnB1dC5maWxlc1tpXTtcbiAgICAgICAgICBsZXQgZm9ybWF0ID0gJ2pwZWcnO1xuICAgICAgICAgIGlmIChmaWxlLnR5cGUgPT09ICdpbWFnZS9wbmcnKSB7XG4gICAgICAgICAgICBmb3JtYXQgPSAncG5nJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGZpbGUudHlwZSA9PT0gJ2ltYWdlL2dpZicpIHtcbiAgICAgICAgICAgIGZvcm1hdCA9ICdnaWYnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwaG90b3MucHVzaCh7XG4gICAgICAgICAgICB3ZWJQYXRoOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpLFxuICAgICAgICAgICAgZm9ybWF0OiBmb3JtYXRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICBwaG90b3NcbiAgICAgICAgfSk7XG4gICAgICAgIGNsZWFudXAoKTtcbiAgICAgIH0pO1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2FuY2VsJywgX2UgPT4ge1xuICAgICAgICByZWplY3QobmV3IENhcGFjaXRvckV4Y2VwdGlvbignVXNlciBjYW5jZWxsZWQgcGhvdG9zIGFwcCcpKTtcbiAgICAgICAgY2xlYW51cCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlucHV0LmFjY2VwdCA9ICdpbWFnZS8qJztcbiAgICBpbnB1dC5jbGljaygpO1xuICB9XG4gIF9nZXRDYW1lcmFQaG90byhwaG90bywgb3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgY29uc3QgZm9ybWF0ID0gcGhvdG8udHlwZS5zcGxpdCgnLycpWzFdO1xuICAgICAgaWYgKG9wdGlvbnMucmVzdWx0VHlwZSA9PT0gJ3VyaScpIHtcbiAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgd2ViUGF0aDogVVJMLmNyZWF0ZU9iamVjdFVSTChwaG90byksXG4gICAgICAgICAgZm9ybWF0OiBmb3JtYXQsXG4gICAgICAgICAgc2F2ZWQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwocGhvdG8pO1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHIgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICAgIGlmIChvcHRpb25zLnJlc3VsdFR5cGUgPT09ICdkYXRhVXJsJykge1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIGRhdGFVcmw6IHIsXG4gICAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0LFxuICAgICAgICAgICAgICBzYXZlZDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgYmFzZTY0U3RyaW5nOiByLnNwbGl0KCcsJylbMV0sXG4gICAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0LFxuICAgICAgICAgICAgICBzYXZlZDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSBlID0+IHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgY2hlY2tQZXJtaXNzaW9ucygpIHtcbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcgfHwgIW5hdmlnYXRvci5wZXJtaXNzaW9ucykge1xuICAgICAgdGhyb3cgdGhpcy51bmF2YWlsYWJsZSgnUGVybWlzc2lvbnMgQVBJIG5vdCBhdmFpbGFibGUgaW4gdGhpcyBicm93c2VyJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUGVybWlzc2lvbnMvcXVlcnlcbiAgICAgIC8vIHRoZSBzcGVjaWZpYyBwZXJtaXNzaW9ucyB0aGF0IGFyZSBzdXBwb3J0ZWQgdmFyaWVzIGFtb25nIGJyb3dzZXJzIHRoYXQgaW1wbGVtZW50IHRoZVxuICAgICAgLy8gcGVybWlzc2lvbnMgQVBJLCBzbyB3ZSBuZWVkIGEgdHJ5L2NhdGNoIGluIGNhc2UgJ2NhbWVyYScgaXMgaW52YWxpZFxuICAgICAgY29uc3QgcGVybWlzc2lvbiA9IGF3YWl0IHdpbmRvdy5uYXZpZ2F0b3IucGVybWlzc2lvbnMucXVlcnkoe1xuICAgICAgICBuYW1lOiAnY2FtZXJhJ1xuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjYW1lcmE6IHBlcm1pc3Npb24uc3RhdGUsXG4gICAgICAgIHBob3RvczogJ2dyYW50ZWQnXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKF9hKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuYXZhaWxhYmxlKCdDYW1lcmEgcGVybWlzc2lvbnMgYXJlIG5vdCBhdmFpbGFibGUgaW4gdGhpcyBicm93c2VyJyk7XG4gICAgfVxuICB9XG4gIGFzeW5jIHJlcXVlc3RQZXJtaXNzaW9ucygpIHtcbiAgICB0aHJvdyB0aGlzLnVuaW1wbGVtZW50ZWQoJ05vdCBpbXBsZW1lbnRlZCBvbiB3ZWIuJyk7XG4gIH1cbiAgYXN5bmMgcGlja0xpbWl0ZWRMaWJyYXJ5UGhvdG9zKCkge1xuICAgIHRocm93IHRoaXMudW5hdmFpbGFibGUoJ05vdCBpbXBsZW1lbnRlZCBvbiB3ZWIuJyk7XG4gIH1cbiAgYXN5bmMgZ2V0TGltaXRlZExpYnJhcnlQaG90b3MoKSB7XG4gICAgdGhyb3cgdGhpcy51bmF2YWlsYWJsZSgnTm90IGltcGxlbWVudGVkIG9uIHdlYi4nKTtcbiAgfVxufVxuY29uc3QgQ2FtZXJhID0gbmV3IENhbWVyYVdlYigpO1xuZXhwb3J0IHsgQ2FtZXJhIH07XG4iLCJpbXBvcnQgeyByZWdpc3RlclBsdWdpbiB9IGZyb20gJ0BjYXBhY2l0b3IvY29yZSc7XG5pbXBvcnQgeyBDYW1lcmFXZWIgfSBmcm9tICcuL3dlYic7XG5jb25zdCBDYW1lcmEgPSByZWdpc3RlclBsdWdpbignQ2FtZXJhJywge1xuICB3ZWI6ICgpID0+IG5ldyBDYW1lcmFXZWIoKVxufSk7XG5leHBvcnQgKiBmcm9tICcuL2RlZmluaXRpb25zJztcbmV4cG9ydCB7IENhbWVyYSB9O1xuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBjb21iaW5lTGF0ZXN0LFxuICBsYXN0VmFsdWVGcm9tLFxuICBPYnNlcnZhYmxlLFxuICBvZixcbiAgU3Vic2NyaXB0aW9uLFxufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgRGV2aWNlLCBEZXZpY2VJZCwgRGV2aWNlSW5mbyB9IGZyb20gXCJAY2FwYWNpdG9yL2RldmljZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJAYW5ndWxhci9maXJlL2F1dGhcIjtcbmltcG9ydCB7IFB1c2hOb3RpZmljYXRpb25zIH0gZnJvbSBcIkBjYXBhY2l0b3IvcHVzaC1ub3RpZmljYXRpb25zXCI7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCJzcmMvYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuXG4vLyBQdXNoXG4vLyBpbXBvcnQgeyBTd1B1c2ggfSBmcm9tIFwiQGFuZ3VsYXIvc2VydmljZS13b3JrZXJcIjtcblxuLy8gbW9kZWxzXG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcInNyYy9hcHAvbW9kZWxzL3VzZXJcIjtcblxuLy8gQ2FwYWNpdG9yXG5pbXBvcnQge1xuICBDYW1lcmEsXG4gIENhbWVyYURpcmVjdGlvbixcbiAgQ2FtZXJhUmVzdWx0VHlwZSxcbiAgUGhvdG8sXG59IGZyb20gXCJAY2FwYWNpdG9yL2NhbWVyYVwiO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvZmlyZWJhc2UvdXNlci1wcm9maWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHN3aXRjaE1hcCwgdGFrZSwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQge1xuICBBbGVydENvbnRyb2xsZXIsXG4gIElvblJvdXRlck91dGxldCxcbiAgTG9hZGluZ0NvbnRyb2xsZXIsXG4gIE1lbnVDb250cm9sbGVyLFxuICBNb2RhbENvbnRyb2xsZXIsXG4gIFRvYXN0Q29udHJvbGxlcixcbn0gZnJvbSBcIkBpb25pYy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcbmltcG9ydCB7IFRlYW0gfSBmcm9tIFwic3JjL2FwcC9tb2RlbHMvdGVhbVwiO1xuaW1wb3J0IHsgQ2x1YiB9IGZyb20gXCJzcmMvYXBwL21vZGVscy9jbHViXCI7XG5pbXBvcnQgeyBIZWxmZXJQdW5rdGVQYWdlIH0gZnJvbSBcIi4uL2hlbGZlci9oZWxmZXItcHVua3RlL2hlbGZlci1wdW5rdGUucGFnZVwiO1xuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtcHJvZmlsZVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcHJvZmlsZS5wYWdlLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vcHJvZmlsZS5wYWdlLnNjc3NcIl0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgUHJvZmlsZVBhZ2UgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHVzZXJQcm9maWxlJDogT2JzZXJ2YWJsZTxQcm9maWxlPjtcbiAgXG4gIHByb2ZpbGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuXG4gIHRlYW1MaXN0JDogT2JzZXJ2YWJsZTxUZWFtW10+O1xuICBjbHViTGlzdCQ6IE9ic2VydmFibGU8Q2x1YltdPjtcblxuICB1c2VyJDogT2JzZXJ2YWJsZTxVc2VyPjtcbiAgdXNlcjogVXNlcjtcblxuICBwdWJsaWMgYWxlcnRCdXR0b25zRW1haWwgPSBbXTtcbiAgcHVibGljIGFsZXJ0SW5wdXRzRW1haWwgPSBbXTtcbiAgcHVibGljIGFsZXJ0QnV0dG9uc0FkZHJlc3MgPSBbXTtcbiAgcHVibGljIGFsZXJ0SW5wdXRzQWRkcmVzcz0gW107XG5cbiAgcHJpdmF0ZSByZWFkb25seSBWQVBJRF9QVUJMSUNfS0VZID1cbiAgICBcIkJGU0NwcFhhMU9QQ2t0clloWk4zR2ZYNWdLSTAwYWwtZU55a0J3azNybUhSd2pmckdlbzNKWGFUUFBfMEVHUTAxSWtfVWJjMmR6dnZGUW1PYzNHdlhzWVwiO1xuICBkZXZpY2VJZDogRGV2aWNlSWQ7XG4gIGRldmljZUluZm86IERldmljZUluZm87XG4gIGxvY2FsRGF0ZVN0cmluZzogc3RyaW5nO1xuXG4gIGtpZEFsZXJ0QnV0dG9ucyA9IFtcbiAgICB7XG4gICAgICB0ZXh0OiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdjb21tb24uY2FuY2VsJyksXG4gICAgICByb2xlOiAnY2FuY2VsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ2NvbW1vbi5hZGQnKSxcbiAgICAgIHJvbGU6ICdjb25maXJtJyxcbiAgICAgIGhhbmRsZXI6IChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkS2lkKGRhdGEuZW1haWwpO1xuICAgICAgfSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIHByaXZhdGUgcmVhZG9ubHkgc3dQdXNoOiBTd1B1c2gsXG4gICAgcHJpdmF0ZSByZWFkb25seSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBmYlNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByb2ZpbGVTZXJ2aWNlOiBVc2VyUHJvZmlsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSB0b2FzdENvbnRyb2xsZXI6IFRvYXN0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxvYWRpbmdDb250cm9sbGVyOiBMb2FkaW5nQ29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbWVudUN0cmw6IE1lbnVDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYWxlcnRDb250cm9sbGVyOiBBbGVydENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlck91dGxldDogSW9uUm91dGVyT3V0bGV0LFxuICApIHtcbiAgICB0aGlzLm1lbnVDdHJsLmVuYWJsZSh0cnVlLCBcIm1lbnVcIik7XG4gIH1cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIm5nT25Jbml0XCIpO1xuICAgIHRoaXMudXNlclByb2ZpbGUkID0gdGhpcy5nZXRVc2VyUHJvZmlsZSgpO1xuXG4gICAgdGhpcy5kZXZpY2VJZCA9IGF3YWl0IERldmljZS5nZXRJZCgpO1xuICAgIHRoaXMuZGV2aWNlSW5mbyA9IGF3YWl0IERldmljZS5nZXRJbmZvKCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5kZXZpY2VJbmZvKTtcblxuICAgIHRoaXMuY2x1Ykxpc3QkID0gdGhpcy5mYlNlcnZpY2UuZ2V0Q2x1Ykxpc3QoKTtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKFwibmdBZnRlclZpZXdJbml0IGNhbGxlZFwiKTtcblxuICAgIHRoaXMucHJvZmlsZVN1YnNjcmlwdGlvbiA9IHRoaXMudXNlclByb2ZpbGUkLnN1YnNjcmliZShhc3luYyBwcm9maWxlID0+IHtcbiAgICAgIGlmIChwcm9maWxlKSB7XG4gICAgICAgIHRoaXMuc2V0dXBBbGVydHMocHJvZmlsZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBlbmFibGVIZWxmZXJFdmVudHMoY2x1Ykxpc3QpIHtcbiAgICByZXR1cm4gY2x1Ykxpc3QgJiYgY2x1Ykxpc3Quc29tZShjbHViID0+IGNsdWIuaGFzRmVhdHVyZUhlbGZlckV2ZW50ID09IHRydWUpO1xuICB9XG4gIHNldHVwQWxlcnRzKHByb2ZpbGU6IFByb2ZpbGUpIHtcbiAgICB0aGlzLmFsZXJ0SW5wdXRzRW1haWwgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KFwicHJvZmlsZS5jaGFuZ2VfZW1haWxfb2xkX2xhYmVsXCIpLFxuICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy50cmFuc2xhdGUuaW5zdGFudChcInByb2ZpbGUuY2hhbmdlX2VtYWlsX29sZF9sYWJlbFwiKSxcbiAgICAgICAgbmFtZTogXCJvbGRFbWFpbFwiLFxuICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgIHZhbHVlOiBwcm9maWxlLmVtYWlsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogdGhpcy50cmFuc2xhdGUuaW5zdGFudChcInByb2ZpbGUuY2hhbmdlX2VtYWlsX25ld19sYWJlbFwiKSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoXCJwcm9maWxlLmNoYW5nZV9lbWFpbF9uZXdfbGFiZWxcIiksXG4gICAgICAgIG5hbWU6IFwibmV3RW1haWxcIixcbiAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgdGhpcy5hbGVydEJ1dHRvbnNFbWFpbCA9IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogdGhpcy50cmFuc2xhdGUuaW5zdGFudChcImNvbW1vbi5jYW5jZWxcIiksXG4gICAgICAgIHJvbGU6IFwiZGVzdHJ1Y3RpdmVcIixcbiAgICAgICAgaGFuZGxlcjogKGRhdGEpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoXCJjb21tb24uc2F2ZVwiKSxcbiAgICAgICAgaGFuZGxlcjogYXN5bmMgKGRhdGEpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBpZiAoZGF0YS5vbGRFbWFpbCAhPT0gZGF0YS5uZXdFbWFpbCAmJiBkYXRhLm9sZEVtYWlsLmxlbmd0aCA+IDAgJiYgZGF0YS5uZXdFbWFpbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJpZnlFbWFpbCA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UudmVyaWZ5QmVmb3JlVXBkYXRlRW1haWwoZGF0YS5uZXdFbWFpbCk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZlcmlmeUVtYWlsKTtcbiAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZFByb2ZpbGUgPSBhd2FpdCB0aGlzLnByb2ZpbGVDaGFuZ2UoXG4gICAgICAgICAgICAgICAgeyBkZXRhaWw6IHsgdmFsdWU6IGRhdGEubmV3RW1haWwgfSB9LFxuICAgICAgICAgICAgICAgIFwiZW1haWxcIlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBpZiAoZS5jb2RlID09IFwiYXV0aC9vcGVyYXRpb24tbm90LWFsbG93ZWRcIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09IFwiYXV0aC9yZXF1aXJlcy1yZWNlbnQtbG9naW5cIikge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiYml0dGUgYXVzbG9nZ2VuIHVuZCBub2NobWFscyBwcm9iaWVyZW4uXCIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIHRoaXMuYWxlcnRJbnB1dHNBZGRyZXNzID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogdGhpcy50cmFuc2xhdGUuaW5zdGFudChcInByb2ZpbGUuY2hhbmdlX2FkZHJlc3Nfc3RyZWV0YW5kbnVtYmVyXCIpLFxuICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy50cmFuc2xhdGUuaW5zdGFudChcInByb2ZpbGUuY2hhbmdlX2FkZHJlc3Nfc3RyZWV0YW5kbnVtYmVyXCIpLFxuICAgICAgICBuYW1lOiBcInN0cmVldEFuZE51bWJlclwiLFxuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgdmFsdWU6IHByb2ZpbGUuc3RyZWV0QW5kTnVtYmVyLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoXCJwcm9maWxlLmNoYW5nZV9hZGRyZXNzX3Bvc3RhbGNvZGVcIiksXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KFwicHJvZmlsZS5jaGFuZ2VfYWRkcmVzc19wb3N0YWxjb2RlXCIpLFxuICAgICAgICBuYW1lOiBcInBvc3RhbGNvZGVcIixcbiAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgdmFsdWU6IHByb2ZpbGUucG9zdGFsY29kZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KFwicHJvZmlsZS5jaGFuZ2VfYWRkcmVzc19jaXR5XCIpLFxuICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy50cmFuc2xhdGUuaW5zdGFudChcInByb2ZpbGUuY2hhbmdlX2FkZHJlc3NfY2l0eVwiKSxcbiAgICAgICAgbmFtZTogXCJjaXR5XCIsXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICB2YWx1ZTogcHJvZmlsZS5jaXR5LFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgdGhpcy5hbGVydEJ1dHRvbnNBZGRyZXNzID0gW1xuICAgICAge1xuICAgICAgICB0ZXh0OiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KFwiY29tbW9uLmNhbmNlbFwiKSxcbiAgICAgICAgcm9sZTogXCJkZXN0cnVjdGl2ZVwiLFxuICAgICAgICBoYW5kbGVyOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogdGhpcy50cmFuc2xhdGUuaW5zdGFudChcImNvbW1vbi5zYXZlXCIpLFxuICAgICAgICByb2xlOiBcIlwiLFxuICAgICAgICBoYW5kbGVyOiBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIGF3YWl0IHRoaXMucHJvZmlsZUNoYW5nZSh7IGRldGFpbDogeyB2YWx1ZTogZGF0YS5jaXR5IH0gfSwgXCJjaXR5XCIpO1xuICAgICAgICAgIGF3YWl0IHRoaXMucHJvZmlsZUNoYW5nZSh7IGRldGFpbDogeyB2YWx1ZTogZGF0YS5wb3N0YWxjb2RlIH0gfSwgXCJwb3N0YWxjb2RlXCIpO1xuICAgICAgICAgIGF3YWl0IHRoaXMucHJvZmlsZUNoYW5nZSh7IGRldGFpbDogeyB2YWx1ZTogZGF0YS5zdHJlZXRBbmROdW1iZXIgfSB9LCBcInN0cmVldEFuZE51bWJlclwiKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG5cbiAgbmdPbkRlc3Ryb3koKSB7IFxuICAgIGlmICh0aGlzLnByb2ZpbGVTdWJzY3JpcHRpb24pe1xuICAgICAgdGhpcy5wcm9maWxlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc2hvd1BpY3R1cmUoaW1hZ2VVcmw6IHN0cmluZykge1xuICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgaGVhZGVyOiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldCgncHJvZmlsZS5wcm9maWxlX3BpY3R1cmUnKSksXG4gICAgbWVzc2FnZTogYDxpbWcgc3JjPVwiJHtpbWFnZVVybH1cIiBhbHQ9XCJQcm9maWxiaWxkXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgbWF4LXdpZHRoOiAzMDBweDsgaGVpZ2h0OiBhdXRvO1wiPmAsXG4gICAgYnV0dG9uczogW3tcbiAgICAgIHRleHQ6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KCdjb21tb24uY2xvc2UnKSksXG4gICAgICByb2xlOiAnY2FuY2VsJ1xuICAgIH1dLFxuICAgIGNzc0NsYXNzOiAncHJvZmlsZS1waWN0dXJlLWFsZXJ0J1xuICB9KTtcblxuICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XG59XG5cbiAgZ2V0VXNlclByb2ZpbGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvLyBSZXBsYWNlICdhbnknIHdpdGggdGhlIGFjdHVhbCB0eXBlIG9mIHRoZSB1c2VyIHByb2ZpbGVcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyJCgpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHVzZXI6IFVzZXIpID0+IHtcbiAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLnVpZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gdXNlciBmb3VuZFwiKTtcbiAgICAgICAgICByZXR1cm4gb2YobnVsbCk7IC8vIFJldHVybiBudWxsIG9yIGFwcHJvcHJpYXRlIGRlZmF1bHQgdmFsdWUgaWYgdXNlciBpcyBub3QgbG9nZ2VkIGluXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsZVNlcnZpY2UuZ2V0VXNlclByb2ZpbGUodXNlcikucGlwZShcbiAgICAgICAgICB0YXAoKHByb2ZpbGU6IFByb2ZpbGUpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9maWxlICYmIHByb2ZpbGUuZGF0ZU9mQmlydGgpIHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbERhdGVTdHJpbmcgPSB0aGlzLmNvbnZlcnRUb0xvY2FsRGF0ZVN0cmluZyhwcm9maWxlLmRhdGVPZkJpcnRoLnRvRGF0ZSgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxEYXRlU3RyaW5nID0gJzE5NzAtMDEtMDFUMDA6MDA6MDAuMDAwWidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXIgcHJvZmlsZVwiLCBlcnIpO1xuICAgICAgICByZXR1cm4gb2YobnVsbCk7IC8vIEhhbmRsZSB0aGUgZXJyb3IgYW5kIHJldHVybiBhIGRlZmF1bHQgdmFsdWVcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICBjb252ZXJ0VG9Mb2NhbERhdGVTdHJpbmcoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgY29uc3QgbG9jYWxEYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgLSAoZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApKTtcbiAgICByZXR1cm4gbG9jYWxEYXRlLnRvSVNPU3RyaW5nKCk7XG4gIH1cbiAgZ2V0Q2x1YlJlcXVlc3RMaXN0KCkgeyB9XG4gIGdldFRlYW1SZXF1ZXN0TGlzdCgpIHsgfVxuICBnZXRQdXNoRGV2aWNlTGlzdCgpIHsgfVxuXG4gIGFzeW5jIG9uRGF0ZUNoYW5nZShldmVudDogQ3VzdG9tRXZlbnQpIHtcblxuICAgIGV2ZW50LmRldGFpbC52YWx1ZSA9IFRpbWVzdGFtcC5mcm9tRGF0ZShuZXcgRGF0ZShldmVudC5kZXRhaWwudmFsdWUpKVxuXG4gICAgdGhpcy5wcm9maWxlQ2hhbmdlKGV2ZW50LCBcImRhdGVPZkJpcnRoXCIpO1xuXG4gIH1cblxuXG4gIGFzeW5jIHRha2VQaWN0dXJlKCkge1xuICAgIGNvbnN0IGxvYWRpbmcgPSBhd2FpdCB0aGlzLmxvYWRpbmdDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoXCJwcm9maWxlLnByb2ZpbGVfcGljX191cGxvYWRlZFwiKVxuICAgICAgKSxcbiAgICAgIHNob3dCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGJhY2tkcm9wRGlzbWlzczogZmFsc2UsXG4gICAgICB0cmFuc2x1Y2VudDogdHJ1ZSxcbiAgICAgIHNwaW5uZXI6IFwiY2lyY3VsYXJcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IGltYWdlOiBQaG90byA9IGF3YWl0IENhbWVyYS5nZXRQaG90byh7XG4gICAgICBxdWFsaXR5OiA5MCxcbiAgICAgIGFsbG93RWRpdGluZzogdHJ1ZSxcbiAgICAgIHJlc3VsdFR5cGU6IENhbWVyYVJlc3VsdFR5cGUuQmFzZTY0LFxuICAgICAgY29ycmVjdE9yaWVudGF0aW9uOiB0cnVlLFxuICAgICAgaGVpZ2h0OiA0MDAsXG4gICAgICB3aWR0aDogNDAwLFxuICAgICAgZGlyZWN0aW9uOiBDYW1lcmFEaXJlY3Rpb24uRnJvbnQsXG4gICAgfSk7XG5cbiAgICBsb2FkaW5nLnByZXNlbnQoKTtcbiAgICAvLyBpbWFnZS53ZWJQYXRoIHdpbGwgY29udGFpbiBhIHBhdGggdGhhdCBjYW4gYmUgc2V0IGFzIGFuIGltYWdlIHNyYy5cbiAgICAvLyBZb3UgY2FuIGFjY2VzcyB0aGUgb3JpZ2luYWwgZmlsZSB1c2luZyBpbWFnZS5wYXRoLCB3aGljaCBjYW4gYmVcbiAgICAvLyBwYXNzZWQgdG8gdGhlIEZpbGVzeXN0ZW0gQVBJIHRvIHJlYWQgdGhlIHJhdyBkYXRhIG9mIHRoZSBpbWFnZSxcbiAgICAvLyBpZiBkZXNpcmVkIChvciBwYXNzIHJlc3VsdFR5cGU6IENhbWVyYVJlc3VsdFR5cGUuQmFzZTY0IHRvIGdldFBob3RvKVxuICAgIC8vIHZhciBpbWFnZVVybCA9IGltYWdlLmJhc2U2NFN0cmluZztcbiAgICAvLyBjb25zb2xlLmxvZyhpbWFnZSk7XG5cbiAgICAvLyBjb25zdCB1c2VyOiBVc2VyID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5nZXRVc2VyKCk7XG4gICAgYXdhaXQgdGhpcy5wcm9maWxlU2VydmljZS5zZXRVc2VyUHJvZmlsZVBpY3R1cmUoaW1hZ2UpO1xuICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgIGF3YWl0IHRoaXMucHJlc2VudFRvYXN0VGFrZVBpY3R1cmUoKTtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZUNsdWJSZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICBhd2FpdCB0aGlzLmZiU2VydmljZS5kZWxldGVVc2VyQ2x1YlJlcXVlc3QocmVxdWVzdC5pZCwgdGhpcy51c2VyLnVpZCk7XG4gICAgYXdhaXQgdGhpcy5wcmVzZW50VG9hc3QoKTtcbiAgICB0aGlzLmdldENsdWJSZXF1ZXN0TGlzdCgpO1xuICB9XG4gIGFzeW5jIGRlbGV0ZVRlYW1SZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICBhd2FpdCB0aGlzLmZiU2VydmljZS5kZWxldGVVc2VyVGVhbVJlcXVlc3QocmVxdWVzdC5pZCwgdGhpcy51c2VyLnVpZCk7XG4gICAgYXdhaXQgdGhpcy5wcmVzZW50VG9hc3QoKTtcbiAgICB0aGlzLmdldFRlYW1SZXF1ZXN0TGlzdCgpO1xuICB9XG4gIGFzeW5jIGRlbGV0ZVByb2ZpbGUoKSB7XG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KFwicHJvZmlsZS5kZWxldGVfcHJvZmlsZV9fY29uZmlybVwiKVxuICAgICAgKSxcbiAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHJvbGU6IFwiZGVzdHJ1Y3RpdmVcIixcbiAgICAgICAgICB0ZXh0OiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5ub1wiKSksXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZWluXCIpO1xuICAgICAgICAgICAgdGhpcy5wcmVzZW50Q2FuY2VsVG9hc3QoKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24ueWVzXCIpKSxcbiAgICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmRlbGV0ZVByb2ZpbGUoKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wcmVzZW50RXJyb3JEZWxldGVQcm9maWxlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucHJlc2VudERlbGV0ZVByb2ZpbGUoKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvbG9nb3V0XCIpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgXG4gICAgICBdLFxuICAgIH0pO1xuICAgIGFsZXJ0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIG9wZW5IZWxmZXJQdW5rdGUoKSB7XG4gICAgY29uc29sZS5sb2coXCJvcGVuSGVsZmVyUHVua3RlXCIpO1xuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbEN0cmwuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogSGVsZmVyUHVua3RlUGFnZSxcbiAgICAgIC8vIHByZXNlbnRpbmdFbGVtZW50OiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5nZXRUb3AoKSxcbiAgICAgIHByZXNlbnRpbmdFbGVtZW50OiB0aGlzLnJvdXRlck91dGxldC5uYXRpdmVFbCxcbiAgICAgIGNhbkRpc21pc3M6IHRydWUsXG4gICAgICBzaG93QmFja2Ryb3A6IHRydWUsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBkYXRhOiB0aGlzLnVzZXIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIG1vZGFsLnByZXNlbnQoKTtcblxuICAgIGNvbnN0IHsgZGF0YSwgcm9sZSB9ID0gYXdhaXQgbW9kYWwub25XaWxsRGlzbWlzcygpO1xuXG4gICAgaWYgKHJvbGUgPT09IFwiY29uZmlybVwiKSB7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcHJlc2VudFRvYXN0KCkge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20oXG4gICAgICAgIHRoaXMudHJhbnNsYXRlLmdldChcInByb2ZpbGUucmVxdWVzdF9zdWNjZXNzX19kZWxldGVkXCIpXG4gICAgICApLFxuICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIixcbiAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICB9KTtcblxuICAgIGF3YWl0IHRvYXN0LnByZXNlbnQoKTtcbiAgfVxuICBhc3luYyBwcmVzZW50Q2FuY2VsVG9hc3QoKSB7XG4gICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KFwib25ib2FyZGluZy53YXJuaW5nX19hY3Rpb25fY2FuY2VsZWRcIilcbiAgICAgICksXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gIH1cbiAgYXN5bmMgcHJlc2VudFRvYXN0VGFrZVBpY3R1cmUoKSB7XG4gICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KFwicHJvZmlsZS5zdWNjZXNzX19wcm9maWxlX3BpY19jaGFuZ2VkXCIpXG4gICAgICApLFxuICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIixcbiAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICB9KTtcblxuICAgIGF3YWl0IHRvYXN0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIHRvZ2dsZVB1c2goZXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgYXdhaXQgdGhpcy5wcm9maWxlU2VydmljZS5jaGFuZ2VTZXR0aW5nc1B1c2goZXZlbnQuZGV0YWlsLmNoZWNrZWQpO1xuXG4gICAgaWYgKGV2ZW50LmRldGFpbC5jaGVja2VkKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZGV2aWNlSW5mby5wbGF0Zm9ybSA9PSBcImFuZHJvaWRcIiB8fFxuICAgICAgICB0aGlzLmRldmljZUluZm8ucGxhdGZvcm0gPT0gXCJpb3NcIlxuICAgICAgKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJQdXNoRGV2aWNlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcImltcGxlbWVudCB3ZWIgcHVzaFwiKTtcbiAgICAgICAgLy8gdGhpcy5hbGVydEFza0ZvclB1c2goKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJkaXNhYmxlIHB1c2hcIik7XG4gICAgfVxuICAgIHRoaXMudG9hc3RBY3Rpb25TYXZlZCgpO1xuICB9XG4gIGFzeW5jIHRvZ2dsZVB1c2hNb2R1bGUoZXZlbnQsIG1vZHVsZSkge1xuICAgIGF3YWl0IHRoaXMucHJvZmlsZVNlcnZpY2UuY2hhbmdlU2V0dGluZ3NQdXNoTW9kdWxlKFxuICAgICAgZXZlbnQuZGV0YWlsLmNoZWNrZWQsXG4gICAgICBtb2R1bGVcbiAgICApO1xuICAgIHRoaXMudG9hc3RBY3Rpb25TYXZlZCgpO1xuICB9XG5cbiAgYXN5bmMgdG9nZ2xlRW1haWwoZXZlbnQpIHtcbiAgICBhd2FpdCB0aGlzLnByb2ZpbGVTZXJ2aWNlLmNoYW5nZVNldHRpbmdzRW1haWwoZXZlbnQuZGV0YWlsLmNoZWNrZWQpO1xuICAgIGNvbnNvbGUubG9nKFwiZW1haWxcIik7XG4gICAgdGhpcy50b2FzdEFjdGlvblNhdmVkKCk7XG4gIH1cblxuICBhc3luYyB0b2dnbGVFbWFpbFJlcG9ydGluZyhldmVudCkge1xuICAgIGF3YWl0IHRoaXMucHJvZmlsZVNlcnZpY2UuY2hhbmdlU2V0dGluZ3NFbWFpbFJlcG9ydGluZyhcbiAgICAgIGV2ZW50LmRldGFpbC5jaGVja2VkXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhcImVtYWlsXCIpO1xuICAgIHRoaXMudG9hc3RBY3Rpb25TYXZlZCgpO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlUHVzaERldmljZShpZCkge1xuICAgIGF3YWl0IHRoaXMucHJvZmlsZVNlcnZpY2UuZGVsZXRlUHVzaERldmljZShpZCk7XG4gICAgYXdhaXQgdGhpcy50b2FzdEFjdGlvblNhdmVkKCk7XG4gIH1cblxuICByZWdpc3RlclB1c2hEZXZpY2UoKSB7XG4gICAgUHVzaE5vdGlmaWNhdGlvbnMucmVxdWVzdFBlcm1pc3Npb25zKCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0LnJlY2VpdmUgPT09IFwiZ3JhbnRlZFwiKSB7XG4gICAgICAgIC8vIFJlZ2lzdGVyIHdpdGggQXBwbGUgLyBHb29nbGUgdG8gcmVjZWl2ZSBwdXNoIHZpYSBBUE5TL0ZDTVxuICAgICAgICBQdXNoTm90aWZpY2F0aW9ucy5yZWdpc3RlcigpO1xuICAgICAgICAvLyAtLT4gdGhpcyBzaG91bGQgdHJpZ2dlciBsaXN0ZW5lciBpbiBhcHAuY29tcG9uZW50LnRzIHRvIHNhdmUgdG9rZW5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNob3cgc29tZSBlcnJvclxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyogV0VCIFBVU0ggU1RVRkZcblxuICBhc3luYyBhc2tGb3JQdXNoKCkge1xuICAgIGlmICh0aGlzLnN3UHVzaC5pc0VuYWJsZWQpIHtcbiAgICAgIC8vIFB1c2ggaXMgYXZhaWxhYmxlXG4gICAgICB0aGlzLmFsZXJ0QXNrRm9yUHVzaCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFsZXJ0UHVzaE5vdFN1cHBvcnRlZCgpO1xuICAgIH1cbiAgfVxuICBhc3luYyBhbGVydFB1c2hOb3RTdXBwb3J0ZWQoKSB7XG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoXCJwcm9maWxlLmVycm9yX19wdXNoX25vdGlmaWNhdGlvbl9ub3RfYXZhaWxhYmxlXCIpXG4gICAgICApLFxuICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KFxuICAgICAgICAgIFwicHJvZmlsZS5lcnJvcl9kZXZpY2Vfbm90X3N1cHBvcnRfcHVzaF9ub3RpZmljYXRpb25zXCJcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIGJ1dHRvbnM6IFt7IHRleHQ6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLm9rXCIpKSB9XSxcbiAgICB9KTtcbiAgICBhbGVydC5wcmVzZW50KCk7XG4gIH1cbiAgYXN5bmMgYWxlcnRBc2tGb3JQdXNoKCkge1xuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIGhlYWRlcjogYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KFwicHJvZmlsZS5wdXNoX19ub3RpZmljYXRpb25zXCIpXG4gICAgICApLFxuICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KFwicHJvZmlsZS5wdXNoX25vdGlmaWNhdGlvbl9fcGVybWlzc2lvbl9kZXNjXCIpXG4gICAgICApLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24ueWVzXCIpKSxcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZVRvTm90aWZpY2F0aW9ucygpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHsgdGV4dDogYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJjb21tb24ubm9cIikpIH0sXG4gICAgICBdLFxuICAgIH0pO1xuICAgIGFsZXJ0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIHN1YnNjcmliZVRvTm90aWZpY2F0aW9ucygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3ViOiBQdXNoU3Vic2NyaXB0aW9uID0gYXdhaXQgdGhpcy5zd1B1c2gucmVxdWVzdFN1YnNjcmlwdGlvbih7XG4gICAgICAgIHNlcnZlclB1YmxpY0tleTogdGhpcy5WQVBJRF9QVUJMSUNfS0VZLFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhzdWIudG9KU09OKCkpO1xuICAgICAgaWYgKHN1YiAmJiB0aGlzLmRldmljZUlkKSB7XG4gICAgICAgIGNvbnN0IHByb2ZpbGVVcGRhdGUgPSBhd2FpdCB0aGlzLnByb2ZpbGVTZXJ2aWNlXG4gICAgICAgICAgLmFkZFB1c2hTdWJzY3JpYmVyKHN1YiwgdGhpcy5kZXZpY2VJZCwgdGhpcy5kZXZpY2VJbmZvLCBcIlwiKVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IHN1YnNjcmliZSB0byBub3RpZmljYXRpb25zXCIsIGVycik7XG4gICAgICAgICAgICB0aGlzLmVycm9yUHVzaE1lc3NhZ2VFbmFibGUoXCJDb3VsZCBub3Qgc3Vic2NyaWJlIHRvIG5vdGlmaWNhdGlvbnNcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudG9hc3RBY3Rpb25TYXZlZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBwdXNoIHRva2VuIHJlZ2lzdGVyXCIpO1xuICAgICAgICB0aGlzLmVycm9yUHVzaE1lc3NhZ2VFbmFibGUoXG4gICAgICAgICAgYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZS5nZXQoXCJwcm9maWxlLmVycm9yX3B1c2hfdG9rZW5cIikpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgdGhpcy5hbGVydFB1c2hOb3RTdXBwb3J0ZWQoKTtcbiAgICB9XG4gIH0qL1xuICBhc3luYyBwcmVzZW50RGVsZXRlUHJvZmlsZSgpIHtcbiAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQoXCJwcm9maWxlLnN1Y2Nlc3NfX3Byb2ZpbGVfZGVsZXRlZFwiKVxuICAgICAgKSxcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgICBjb2xvcjogXCJkYW5nZXJcIixcbiAgICB9KTtcblxuICAgIGF3YWl0IHRvYXN0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIHByZXNlbnRFcnJvckRlbGV0ZVByb2ZpbGUoKSB7XG4gICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KFwicHJvZmlsZS5lcnJvcl9fd2hpbGVfZGVsZXRpbmdfbXNnXCIpXG4gICAgICApLFxuICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIixcbiAgICAgIGNvbG9yOiBcImRhbmdlclwiLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgdG9hc3QucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgdG9hc3RBY3Rpb25TYXZlZCgpIHtcbiAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlLmdldChcImNvbW1vbi5zdWNjZXNzX19zYXZlZFwiKSksXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwic3VjY2Vzc1wiLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgdG9hc3QucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgcHJvZmlsZUNoYW5nZShldmVudCwgZmllbGRuYW1lKSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIGF3YWl0IHRoaXMucHJvZmlsZVNlcnZpY2UuY2hhbmdlUHJvZmlsZUF0dHJpYnV0ZShcbiAgICAgIGV2ZW50LmRldGFpbC52YWx1ZSxcbiAgICAgIGZpZWxkbmFtZVxuICAgICk7XG4gICAgaWYgKGZpZWxkbmFtZSA9PSAnbGFuZ3VhZ2UnKXtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LmRldGFpbC52YWx1ZSlcbiAgICAgIHRoaXMudHJhbnNsYXRlLnVzZShldmVudC5kZXRhaWwudmFsdWUpO1xuICAgIH1cbiAgfSBcbiAgXG4gIGFzeW5jIGFkZEtpZChlbWFpbDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIEhpZXIgTG9naWsgenVtIFNlbmRlbiBkZXIgVmVyaWZpemllcnVuZ3MtRS1NYWlsIGltcGxlbWVudGllcmVuXG4gICAgICBhd2FpdCB0aGlzLnByb2ZpbGVTZXJ2aWNlLmFkZEtpZChlbWFpbCk7XG4gICAgICBhd2FpdCB0aGlzLnByZXNlbnRUb2FzdCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhd2FpdCB0aGlzLnByZXNlbnRUb2FzdCgpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlbW92ZUtpZChlbWFpbDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMucHJvZmlsZVNlcnZpY2UucmVtb3ZlS2lkKGVtYWlsKTtcbiAgICAgIGF3YWl0IHRoaXMucHJlc2VudFRvYXN0KCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGF3YWl0IHRoaXMucHJlc2VudFRvYXN0KCk7XG4gICAgfVxuICB9XG59XG4iLCI8aW9uLWhlYWRlciBbdHJhbnNsdWNlbnRdPVwidHJ1ZVwiPlxuICA8aW9uLXRvb2xiYXI+XG4gICAgPGlvbi1idXR0b25zIHNsb3Q9XCJzdGFydFwiPlxuICAgICAgPGlvbi1tZW51LWJ1dHRvbj48L2lvbi1tZW51LWJ1dHRvbj5cbiAgICA8L2lvbi1idXR0b25zPlxuICAgIDxpb24tdGl0bGU+e3snY29tbW9uLnByb2ZpbGUnIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgPC9pb24tdG9vbGJhcj5cbjwvaW9uLWhlYWRlcj5cblxuPGlvbi1jb250ZW50IFtmdWxsc2NyZWVuXT1cInRydWVcIj5cbiAgPGlvbi1oZWFkZXIgY29sbGFwc2U9XCJjb25kZW5zZVwiPlxuICAgIDxpb24tdG9vbGJhcj5cbiAgICAgIDxpb24tdGl0bGUgc2l6ZT1cImxhcmdlXCI+e3snY29tbW9uLnByb2ZpbGUnIHwgdHJhbnNsYXRlfX08L2lvbi10aXRsZT5cbiAgICA8L2lvbi10b29sYmFyPlxuICA8L2lvbi1oZWFkZXI+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInVzZXJQcm9maWxlJCB8IGFzeW5jIGFzIHVzZXJQcm9maWxlXCI+XG4gICAgPGlvbi1saXN0IGxpbmVzPVwiZnVsbFwiIFtpbnNldF09XCJ0cnVlXCI+XG4gICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICA8aW9uLWxhYmVsPiB7e1wicHJvZmlsZS5nZW5lcmFsbHlcIiB8IHRyYW5zbGF0ZX19IDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1hdmF0YXIgc2xvdD1cInN0YXJ0XCI+XG4gICAgICAgICAgPGltZyBhbHQ9XCJ7e3VzZXJQcm9maWxlLmZpcnN0TmFtZX19XCIgc3JjPVwie3t1c2VyUHJvZmlsZS5wcm9maWxlUGljdHVyZX19XCIgLz5cbiAgICAgICAgPC9pb24tYXZhdGFyPlxuICAgICAgICA8aW9uLWxhYmVsPjwvaW9uLWxhYmVsPlxuICAgICAgICA8IS0tPGlvbi1idXR0b24gc2xvdD1cImVuZFwiIChjbGljayk9XCJzaG93UGljdHVyZSh1c2VyUHJvZmlsZS5wcm9maWxlUGljdHVyZSlcIj5cbiAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJleHBhbmRcIj48L2lvbi1pY29uPlxuICAgICAgICA8L2lvbi1idXR0b24+LS0+XG4gICAgICAgIDxpb24tYnV0dG9uIHNsb3Q9XCJlbmRcIiAoY2xpY2spPVwidGFrZVBpY3R1cmUoKVwiPlxuICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cImNhbWVyYVwiPjwvaW9uLWljb24+XG4gICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1pbnB1dCBsYWJlbFBsYWNlbWVudD1cInN0YWNrZWRcIiBbbGFiZWxdPSdcImNvbW1vbi5maXJzdF9fbmFtZVwiIHwgdHJhbnNsYXRlJ1xuICAgICAgICAgIGF0dHIuYXJpYS1sYWJlbD0ne3tcImNvbW1vbi5maXJzdF9fbmFtZVwiIHwgdHJhbnNsYXRlfX0nIChpb25DaGFuZ2UpPVwicHJvZmlsZUNoYW5nZSgkZXZlbnQsICdmaXJzdE5hbWUnKVwiXG4gICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyUHJvZmlsZS5maXJzdE5hbWVcIiB2YWx1ZT1cInt7dXNlclByb2ZpbGUuZmlyc3ROYW1lfX1cIj5cbiAgICAgICAgPC9pb24taW5wdXQ+XG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24taW5wdXQgbGFiZWxQbGFjZW1lbnQ9XCJzdGFja2VkXCIgW2xhYmVsXT0nXCJjb21tb24ubGFzdF9fbmFtZVwiIHwgdHJhbnNsYXRlJ1xuICAgICAgICAgIGF0dHIuYXJpYS1sYWJlbD0ne3tcImNvbW1vbi5sYXN0X19uYW1lXCIgfCB0cmFuc2xhdGV9fScgKGlvbkNoYW5nZSk9XCJwcm9maWxlQ2hhbmdlKCRldmVudCwgJ2xhc3ROYW1lJylcIlxuICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlclByb2ZpbGUubGFzdE5hbWVcIiB2YWx1ZT1cInt7dXNlclByb2ZpbGUubGFzdE5hbWV9fVwiPlxuICAgICAgICA8L2lvbi1pbnB1dD5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDwhLS08aW9uLWl0ZW0+XG4gICAgICAgIDxpb24taW5wdXQgbGFiZWxQbGFjZW1lbnQ9XCJzdGFja2VkXCIgW2xhYmVsXT0nXCJwcm9maWxlLmJpcnRoZGF0ZVwiIHwgdHJhbnNsYXRlJ1xuICAgICAgICAgIGF0dHIuYXJpYS1sYWJlbD0ne3tcInByb2ZpbGUuYmlydGhkYXRlXCIgfCB0cmFuc2xhdGV9fSdcbiAgICAgICAgICB2YWx1ZT1cInt7dXNlclByb2ZpbGUuZGF0ZU9mQmlydGgudG9EYXRlKCkgfCBkYXRlOidkZC5NTS5ZWVlZICd9fVwiPlxuICAgICAgICA8L2lvbi1pbnB1dD5cbiAgICAgIDwvaW9uLWl0ZW0+LS0+XG5cbiAgICAgIDxpb24taXRlbSBpZD1cImRhdGVPZkJpcnRoSXRlbVwiPlxuICAgICAgICA8aW9uLWxhYmVsIHBvc2l0aW9uPVwiXCI+XG4gICAgICAgICAge3tcInByb2ZpbGUuYmlydGhkYXRlXCIgfCB0cmFuc2xhdGV9fTpcbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgIDxpb24tZGF0ZXRpbWUtYnV0dG9uIHNsb3Q9XCJlbmRcIiBkYXRldGltZT1cImRhdGVPZkJpcnRoXCI+PC9pb24tZGF0ZXRpbWUtYnV0dG9uPlxuXG4gICAgICAgIDxpb24tbW9kYWwgW2tlZXBDb250ZW50c01vdW50ZWRdPVwidHJ1ZVwiPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxpb24tZGF0ZXRpbWUgKGlvbkNoYW5nZSk9XCJvbkRhdGVDaGFuZ2UoJGV2ZW50KVwiIFtmaXJzdERheU9mV2Vla109XCIxXCIgcHJlc2VudGF0aW9uPVwiZGF0ZVwiIGlkPVwiZGF0ZU9mQmlydGhcIlxuICAgICAgICAgICAgICB2YWx1ZT1cInt7bG9jYWxEYXRlU3RyaW5nfX1cIj48L2lvbi1kYXRldGltZT5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2lvbi1tb2RhbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1zZWxlY3QgYXJpYS1sYWJlbD1cIidwcm9maWxlLmxhbmd1YWdlJyB8IHRyYW5zbGF0ZVwiIFtsYWJlbF09XCIncHJvZmlsZS5sYW5ndWFnZScgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlclByb2ZpbGUubGFuZ3VhZ2VcIiAoaW9uQ2hhbmdlKT1cInByb2ZpbGVDaGFuZ2UoJGV2ZW50LCAnbGFuZ3VhZ2UnKVwiXG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidwcm9maWxlLnNlbGVjdF9fbGFuZ3VhZ2UnIHwgdHJhbnNsYXRlXCIgW2NhbmNlbFRleHRdPVwiJ2NvbW1vbi5jYW5jZWwnIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgICBbb2tUZXh0XT1cIidjb21tb24uc2F2ZScgfCB0cmFuc2xhdGVcIj5cbiAgICAgICAgICA8aW9uLXNlbGVjdC1vcHRpb24gdmFsdWU9XCJkZVwiPnt7XCJjb21tb24ubGFuZ3VhZ2VfX2dlcm1hblwiIHwgdHJhbnNsYXRlfX08L2lvbi1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICAgIDxpb24tc2VsZWN0LW9wdGlvbiB2YWx1ZT1cImZyXCI+e3tcImNvbW1vbi5sYW5ndWFnZV9fZnJlbmNoXCIgfCB0cmFuc2xhdGV9fTwvaW9uLXNlbGVjdC1vcHRpb24+XG4gICAgICAgICAgPGlvbi1zZWxlY3Qtb3B0aW9uIHZhbHVlPVwiaXRcIj57e1wiY29tbW9uLmxhbmd1YWdlX19pdGFsaWFuXCIgfCB0cmFuc2xhdGV9fTwvaW9uLXNlbGVjdC1vcHRpb24+XG4gICAgICAgICAgPGlvbi1zZWxlY3Qtb3B0aW9uIHZhbHVlPVwiZW5cIj57e1wiY29tbW9uLmxhbmd1YWdlX19lbmdsaXNoXCIgfCB0cmFuc2xhdGV9fTwvaW9uLXNlbGVjdC1vcHRpb24+XG4gICAgICAgIDwvaW9uLXNlbGVjdD5cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgPC9pb24tbGlzdD5cbiAgICA8aW9uLWxpc3QgbGluZXM9XCJmdWxsXCIgW2luc2V0XT1cInRydWVcIj5cbiAgICAgIDxpb24tbGlzdC1oZWFkZXI+XG4gICAgICAgIDxpb24tbGFiZWw+IHt7IFwicHJvZmlsZS5jb250YWN0X19pbmZvcm1hdGlvblwiIHwgdHJhbnNsYXRlfX0gPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1saXN0LWhlYWRlcj5cblxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWlucHV0IGxhYmVsUGxhY2VtZW50PVwic3RhY2tlZFwiIFtsYWJlbF09J1wicHJvZmlsZS5waG9uZW51bWJlclwiIHwgdHJhbnNsYXRlJ1xuICAgICAgICAgIGF0dHIuYXJpYS1sYWJlbD0ne3tcInByb2ZpbGUucGhvbmVudW1iZXJcIiB8IHRyYW5zbGF0ZX19JyBbKG5nTW9kZWwpXT1cInVzZXJQcm9maWxlLnBob25lbnVtYmVyXCIgdGVsXG4gICAgICAgICAgdmFsdWU9XCJ7e3VzZXJQcm9maWxlLnBob25lbnVtYmVyfX1cIiAoaW9uQ2hhbmdlKT1cInByb2ZpbGVDaGFuZ2UoJGV2ZW50LCAncGhvbmVudW1iZXInKVwiPlxuICAgICAgICA8L2lvbi1pbnB1dD5cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICA8IS0tXG4gICAgICA8aW9uLWl0ZW0gZGV0YWlsPVwidHJ1ZVwiIChjbGljayk9XCJjaGFuZ2VFbWFpbCh1c2VyUHJvZmlsZS5lbWFpbClcIj5cbiAgICAgICAgPGlvbi1pbnB1dCBsYWJlbFBsYWNlbWVudD1cInN0YWNrZWRcIiBbbGFiZWxdPSdcInByb2ZpbGUuZW1haWxcIiB8IHRyYW5zbGF0ZScgZW1haWxcbiAgICAgICAgICBhdHRyLmFyaWEtbGFiZWw9J3t7XCJwcm9maWxlLmVtYWlsXCIgfCB0cmFuc2xhdGV9fScgcmVhZG9ubHkgWyhuZ01vZGVsKV09XCJ1c2VyUHJvZmlsZS5lbWFpbFwiXG4gICAgICAgICAgdmFsdWU9XCJ7e3VzZXJQcm9maWxlLmVtYWlsfX1cIj5cbiAgICAgICAgPC9pb24taW5wdXQ+XG4gICAgICA8L2lvbi1pdGVtPiAtLT5cblxuICAgICAgPGlvbi1pdGVtIGlkPVwicHJlc2VudC1hbGVydC1lbWFpbFwiIGRldGFpbD1cInRydWVcIj5cbiAgICAgICAgPGlvbi1pbnB1dCBsYWJlbFBsYWNlbWVudD1cInN0YWNrZWRcIiBbbGFiZWxdPSdcInByb2ZpbGUuZW1haWxcIiB8IHRyYW5zbGF0ZScgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICBhdHRyLmFyaWEtbGFiZWw9J3t7XCJwcm9maWxlLmVtYWlsXCIgfCB0cmFuc2xhdGV9fScgcmVhZG9ubHkgW3ZhbHVlXT1cInVzZXJQcm9maWxlLmVtYWlsXCI+XG4gICAgICAgIDwvaW9uLWlucHV0PlxuICAgICAgPC9pb24taXRlbT5cblxuICAgICAgPGlvbi1hbGVydCB0cmlnZ2VyPVwicHJlc2VudC1hbGVydC1lbWFpbFwiIFtoZWFkZXJdPSdcInByb2ZpbGUuY2hhbmdlX2VtYWlsX2hlYWRlclwiIHwgdHJhbnNsYXRlJ1xuICAgICAgICBbbWVzc2FnZV09J1wicHJvZmlsZS5jaGFuZ2VfZW1haWxfbWVzc2FnZVwiIHwgdHJhbnNsYXRlJyBbYnV0dG9uc109XCJhbGVydEJ1dHRvbnNFbWFpbFwiXG4gICAgICAgIFtpbnB1dHNdPVwiYWxlcnRJbnB1dHNFbWFpbFwiPjwvaW9uLWFsZXJ0PlxuXG5cbiAgICAgIDwhLS08aW9uLWl0ZW0gKGNsaWNrKT1cImNoYW5nZUFkZHJlc3ModXNlclByb2ZpbGUpXCIgZGV0YWlsPVwidHJ1ZVwiPlxuICAgICAgICA8aW9uLWlucHV0IGxhYmVsUGxhY2VtZW50PVwic3RhY2tlZFwiIFtsYWJlbF09J1wicHJvZmlsZS5hZGRyZXNzXCIgfCB0cmFuc2xhdGUnXG4gICAgICAgICAgYXR0ci5hcmlhLWxhYmVsPSd7e1wicHJvZmlsZS5hZGRyZXNzXCIgfCB0cmFuc2xhdGV9fSdcbiAgICAgICAgICB2YWx1ZT1cInt7dXNlclByb2ZpbGUuc3RyZWV0QW5kTnVtYmVyfX0sIHt7dXNlclByb2ZpbGUucG9zdGFsY29kZX19IHt7dXNlclByb2ZpbGUuY2l0eX19XCI+XG4gICAgICAgIDwvaW9uLWlucHV0PlxuICAgICAgPC9pb24taXRlbT4tLT5cblxuICAgICAgPGlvbi1pdGVtIGlkPVwicHJlc2VudC1hbGVydC1hZGRyZXNzXCIgZGV0YWlsPVwidHJ1ZVwiPlxuICAgICAgICA8aW9uLWlucHV0IGxhYmVsUGxhY2VtZW50PVwic3RhY2tlZFwiIFtsYWJlbF09J1wicHJvZmlsZS5hZGRyZXNzXCIgfCB0cmFuc2xhdGUnXG4gICAgICAgICAgYXR0ci5hcmlhLWxhYmVsPSd7e1wicHJvZmlsZS5hZGRyZXNzXCIgfCB0cmFuc2xhdGV9fSdcbiAgICAgICAgICB2YWx1ZT1cInt7dXNlclByb2ZpbGUuc3RyZWV0QW5kTnVtYmVyfX0ge3t1c2VyUHJvZmlsZS5wb3N0YWxjb2RlfX0ge3t1c2VyUHJvZmlsZS5jaXR5fX1cIj5cbiAgICAgICAgPC9pb24taW5wdXQ+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgICAgPGlvbi1hbGVydCB0cmlnZ2VyPVwicHJlc2VudC1hbGVydC1hZGRyZXNzXCIgW2hlYWRlcl09J1wicHJvZmlsZS5jaGFuZ2VfYWRkcmVzc19oZWFkZXJcIiB8IHRyYW5zbGF0ZSdcbiAgICAgICAgW21lc3NhZ2VdPSdcInByb2ZpbGUuY2hhbmdlX2FkZHJlc3NfbWVzc2FnZVwiIHwgdHJhbnNsYXRlJyBbYnV0dG9uc109XCJhbGVydEJ1dHRvbnNBZGRyZXNzXCJcbiAgICAgICAgW2lucHV0c109XCJhbGVydElucHV0c0FkZHJlc3NcIj48L2lvbi1hbGVydD5cblxuICAgIDwvaW9uLWxpc3Q+XG5cbiAgICA8IS0tPGlvbi1saXN0IGxpbmVzPVwiZnVsbFwiIFtpbnNldF09XCJ0cnVlXCI+XG4gICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICA8aW9uLWxhYmVsPiB7eyBcInByb2ZpbGUuc3BvcnRcIiB8IHRyYW5zbGF0ZX19IDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1pbnB1dCBsYWJlbFBsYWNlbWVudD1cInN0YWNrZWRcIiBbbGFiZWxdPSdcInByb2ZpbGUubGljZW5zZV9fbnVtYmVyXCIgfCB0cmFuc2xhdGUnXG4gICAgICAgICAgYXR0ci5hcmlhLWxhYmVsPSd7e1wicHJvZmlsZS5saWNlbnNlX19udW1iZXJcIiB8IHRyYW5zbGF0ZX19J1xuICAgICAgICAgIChpb25DaGFuZ2UpPVwicHJvZmlsZUNoYW5nZSgkZXZlbnQsICdsaWNlbnNlTnVtYmVyJylcIiBbKG5nTW9kZWwpXT1cInVzZXJQcm9maWxlLmxpY2Vuc2VOdW1iZXJcIlxuICAgICAgICAgIHZhbHVlPVwie3t1c2VyUHJvZmlsZS5saWNlbnNlTnVtYmVyfX1cIj5cbiAgICAgICAgPC9pb24taW5wdXQ+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgIDwvaW9uLWxpc3Q+LS0+XG5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbHViTGlzdCQgfCBhc3luYyBhcyBjbHViTGlzdFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVuYWJsZUhlbGZlckV2ZW50cyhjbHViTGlzdClcIj5cbiAgICAgICAgPGlvbi1saXN0IGxpbmVzPVwiZnVsbFwiIFtpbnNldF09XCJ0cnVlXCI+XG4gICAgICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgICAgIDxpb24tbGFiZWw+IHt7IFwicHJvZmlsZS5kaXZlcnNlc1wiIHwgdHJhbnNsYXRlfX0gPC9pb24tbGFiZWw+XG4gICAgICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG5cblxuICAgICAgICAgIDxpb24taXRlbSBkZXRhaWw9XCJ0cnVlXCIgKGNsaWNrKT1cIm9wZW5IZWxmZXJQdW5rdGUoKVwiPlxuICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJoZWxwLWJ1b3ktb3V0bGluZVwiIHNsb3Q9XCJzdGFydFwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8aW9uLWxhYmVsPiB7eyBcImNvbW1vbi5oZWxwZXJfcG9pbnRzXCIgfCB0cmFuc2xhdGV9fSA8L2lvbi1sYWJlbD5cbiAgICAgICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICAgIDwvaW9uLWxpc3Q+XG5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPCEtLVxuICAgIDxpb24tbGlzdCAqbmdJZj1cImNsdWJSZXF1ZXN0TGlzdC5sZW5ndGggPiAwXCIgbGluZXM9XCJmdWxsXCIgW2luc2V0XT1cInRydWVcIj5cbiAgICAgIDxpb24tbGlzdC1oZWFkZXI+XG4gICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAge3sgXCJwcm9maWxlLm9wZW5fX2NsdWJfaW5xdWlyeVwiIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICAgIDxpb24taXRlbSAqbmdGb3I9XCJsZXQgcmVxdWVzdCBvZiBjbHViUmVxdWVzdExpc3RcIj5cbiAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICB7e3JlcXVlc3QubmFtZX19XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICA8aW9uLWJ1dHRvbiBjb2xvcj1cImRhbmdlclwiIChjbGljayk9XCJkZWxldGVDbHViUmVxdWVzdChyZXF1ZXN0KVwiIHNsb3Q9XCJlbmRcIj5cbiAgICAgICAgICA8aW9uLWljb24gaWNvbi1vbmx5IG5hbWU9XCJ0cmFzaFwiPjwvaW9uLWljb24+XG4gICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgPC9pb24tbGlzdD4tLT5cblxuICAgIDwhLS08aW9uLWxpc3QgKm5nSWY9XCJ0ZWFtUmVxdWVzdExpc3QubGVuZ3RoID4gMFwiIGxpbmVzPVwiZnVsbFwiIFtpbnNldF09XCJ0cnVlXCI+XG4gICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgIHt7XCJwcm9maWxlLm9wZW5fX3RlYW1fcmVxdWVzdFwiIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICAgIDxpb24taXRlbSAqbmdGb3I9XCJsZXQgcmVxdWVzdCBvZiB0ZWFtUmVxdWVzdExpc3RcIj5cbiAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICB7e3JlcXVlc3QubGlnYX19IHt7cmVxdWVzdC5uYW1lfX1cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgIDxpb24tYnV0dG9uIGNvbG9yPVwiZGFuZ2VyXCIgKGNsaWNrKT1cImRlbGV0ZVRlYW1SZXF1ZXN0KHJlcXVlc3QpXCIgc2xvdD1cImVuZFwiPlxuICAgICAgICAgIDxpb24taWNvbiBpY29uLW9ubHkgbmFtZT1cInRyYXNoXCI+PC9pb24taWNvbj5cbiAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24taXRlbT5cbiAgICA8L2lvbi1saXN0Pi0tPlxuICAgIDxpb24tbGlzdCBsaW5lcz1cImZ1bGxcIiBbaW5zZXRdPVwidHJ1ZVwiPlxuICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgPGlvbi1sYWJlbD4ge3tcInByb2ZpbGUubm90aWZpY2F0aW9uc1wiIHwgdHJhbnNsYXRlfX0gPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICAgIDwhLS1cbiAgICAgPGlvbi1pdGVtPlxuICAgICAgIDxpb24tbGFiZWwgcG9zaXRpb249XCJzdGFja2VkXCI+IE1laW5lIEdlcsOkdGUgSWQgPC9pb24tbGFiZWw+XG4gICAgICAgPGlvbi1pbnB1dCByZWFkb25seSB2YWx1ZT1cInt7ZGV2aWNlSWQudXVpZH19XCI+PC9pb24taW5wdXQ+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgIC0tPlxuICAgICAgPGlvbi1hY2NvcmRpb24tZ3JvdXA+XG4gICAgICAgIDxpb24tYWNjb3JkaW9uIHZhbHVlPVwic2V0dGluZ3NQdXNoXCI+XG4gICAgICAgICAgPGlvbi1pdGVtIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBjb2xvcj1cInByaW1hcnlcIiBuYW1lPVwibm90aWZpY2F0aW9ucy1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDxpb24tbGFiZWw+IHt7XCJwcm9maWxlLnB1c2hfX21lc3NhZ2VcIiB8IHRyYW5zbGF0ZX19IDwvaW9uLWxhYmVsPlxuICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgPGRpdiBzbG90PVwiY29udGVudFwiPlxuICAgICAgICAgICAgPGlvbi1pdGVtPlxuICAgICAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJ1c2VyUHJvZmlsZS5zZXR0aW5nc1B1c2hcIiBzbG90PVwic3RhcnRcIiBjb2xvcj1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJub3RpZmljYXRpb25zLWNpcmNsZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgIDxpb24taWNvbiAqbmdJZj1cIiF1c2VyUHJvZmlsZS5zZXR0aW5nc1B1c2hcIiBzbG90PVwic3RhcnRcIiBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5vdGlmaWNhdGlvbnMtb2ZmLWNpcmNsZVwiPjwvaW9uLWljb24+XG5cbiAgICAgICAgICAgICAgPGlvbi10b2dnbGUgYXR0ci5hcmlhLWxhYmVsPSd7e1wicHJvZmlsZS5wdXNoX19tZXNzYWdlXCIgfCB0cmFuc2xhdGV9fSdcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dXNlclByb2ZpbGU/LnNldHRpbmdzUHVzaH19XCIgW2NoZWNrZWRdPVwidXNlclByb2ZpbGUuc2V0dGluZ3NQdXNoXCIgW2VuYWJsZU9uT2ZmTGFiZWxzXT1cInRydWVcIlxuICAgICAgICAgICAgICAgIChpb25DaGFuZ2UpPVwidG9nZ2xlUHVzaCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIHt7XCJwcm9maWxlLnB1c2hfX21lc3NhZ2VfX2FjdGl2YXRlXCIgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgIDxpb24tbm90ZSBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIiAqbmdJZj1cInVzZXJQcm9maWxlLnNldHRpbmdzUHVzaFwiIGNvbG9yPVwibWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICB7e1wicHJvZmlsZS5wdXNoX19tZXNzYWdlX19kZWFjdGl2YXRlXCIgfFxuICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlfX08L2lvbi1ub3RlPlxuXG4gICAgICAgICAgICAgIDwvaW9uLXRvZ2dsZT5cblxuICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICAgIDxpb24taXRlbSBkaXNhYmxlZD1cInt7IXVzZXJQcm9maWxlLnNldHRpbmdzUHVzaH19XCI+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBzaXplPVwic21hbGxcIiBzbG90PVwic3RhcnRcIiBuYW1lPVwibmV3c3BhcGVyLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8aW9uLXRvZ2dsZSBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIgYXR0ci5hcmlhLWxhYmVsPSd7e1wiY29tbW9uLm5ld3NcIiB8IHRyYW5zbGF0ZX19J1xuICAgICAgICAgICAgICAgIHZhbHVlPVwie3t1c2VyUHJvZmlsZT8uc2V0dGluZ3NQdXNoTmV3c319XCIgc2xvdD1cImVuZFwiIFtjaGVja2VkXT1cInVzZXJQcm9maWxlLnNldHRpbmdzUHVzaE5ld3NcIlxuICAgICAgICAgICAgICAgIFtlbmFibGVPbk9mZkxhYmVsc109XCJ0cnVlXCIgKGlvbkNoYW5nZSk9XCJ0b2dnbGVQdXNoTW9kdWxlKCRldmVudCwgJ05ld3MnKVwiPjwvaW9uLXRvZ2dsZT5cbiAgICAgICAgICAgICAgPGlvbi1sYWJlbD4ge3tcImNvbW1vbi5uZXdzXCIgfCB0cmFuc2xhdGV9fSA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgICAgICAgIDwhLS0gVE9ETyBBREQgQ0hFQ0sgRk9SIENMVUItLT5cbiAgICAgICAgICAgIDxpb24taXRlbSBkaXNhYmxlZD1cInt7IXVzZXJQcm9maWxlLnNldHRpbmdzUHVzaH19XCI+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBzaXplPVwic21hbGxcIiBzbG90PVwic3RhcnRcIiBuYW1lPVwibmV3c3BhcGVyXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgPGlvbi10b2dnbGUgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiIGF0dHIuYXJpYS1sYWJlbD0ne3tcImNvbW1vbi5uZXdzVmVyYmFuZFwiIHwgdHJhbnNsYXRlfX0nXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3VzZXJQcm9maWxlPy5zZXR0aW5nc1B1c2hOZXdzVmVyYmFuZH19XCIgc2xvdD1cImVuZFwiXG4gICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwidXNlclByb2ZpbGUuc2V0dGluZ3NQdXNoTmV3c1ZlcmJhbmRcIiBbZW5hYmxlT25PZmZMYWJlbHNdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgKGlvbkNoYW5nZSk9XCJ0b2dnbGVQdXNoTW9kdWxlKCRldmVudCwgJ05ld3NWZXJiYW5kJylcIj48L2lvbi10b2dnbGU+XG4gICAgICAgICAgICAgIDxpb24tbGFiZWw+IHt7XCJjb21tb24ubmV3c1ZlcmJhbmRcIiB8IHRyYW5zbGF0ZX19IDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgPC9pb24taXRlbT5cblxuICAgICAgICAgICAgPGlvbi1pdGVtIGRpc2FibGVkPVwie3shdXNlclByb2ZpbGUuc2V0dGluZ3NQdXNofX1cIj5cbiAgICAgICAgICAgICAgPGlvbi1pY29uIHNpemU9XCJzbWFsbFwiIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJiYXJiZWxsLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8aW9uLXRvZ2dsZSBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCIgYXR0ci5hcmlhLWxhYmVsPSd7e1wiY29tbW9uLnRyYWluaW5nXCIgfCB0cmFuc2xhdGV9fSdcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dXNlclByb2ZpbGU/LnNldHRpbmdzUHVzaFRyYWluaW5nfX1cIiBzbG90PVwiZW5kXCIgW2NoZWNrZWRdPVwidXNlclByb2ZpbGUuc2V0dGluZ3NQdXNoVHJhaW5pbmdcIlxuICAgICAgICAgICAgICAgIFtlbmFibGVPbk9mZkxhYmVsc109XCJ0cnVlXCIgKGlvbkNoYW5nZSk9XCJ0b2dnbGVQdXNoTW9kdWxlKCRldmVudCwgJ1RyYWluaW5nJylcIj48L2lvbi10b2dnbGU+XG4gICAgICAgICAgICAgIDxpb24tbGFiZWw+IHt7XCJjb21tb24udHJhaW5pbmdcIiB8IHRyYW5zbGF0ZX19IDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgPC9pb24taXRlbT5cblxuICAgICAgICAgICAgPGlvbi1pdGVtIGRpc2FibGVkPVwie3shdXNlclByb2ZpbGUuc2V0dGluZ3NQdXNofX1cIj5cbiAgICAgICAgICAgICAgPGlvbi1pY29uIHNpemU9XCJzbWFsbFwiIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJ0cm9waHktb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgIDxpb24tdG9nZ2xlIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIiBhdHRyLmFyaWEtbGFiZWw9J3t7XCJjb21tb24uY2hhbXBpb25zaGlwXCIgfCB0cmFuc2xhdGV9fSdcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dXNlclByb2ZpbGU/LnNldHRpbmdzUHVzaENoYW1waW9uc2hpcH19XCIgc2xvdD1cImVuZFwiXG4gICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwidXNlclByb2ZpbGUuc2V0dGluZ3NQdXNoQ2hhbXBpb25zaGlwXCIgW2VuYWJsZU9uT2ZmTGFiZWxzXT1cInRydWVcIlxuICAgICAgICAgICAgICAgIChpb25DaGFuZ2UpPVwidG9nZ2xlUHVzaE1vZHVsZSgkZXZlbnQsICdDaGFtcGlvbnNoaXAnKVwiPjwvaW9uLXRvZ2dsZT5cbiAgICAgICAgICAgICAgPGlvbi1sYWJlbD4ge3tcImNvbW1vbi5jaGFtcGlvbnNoaXBcIiB8IHRyYW5zbGF0ZX19IDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgPC9pb24taXRlbT5cblxuICAgICAgICAgICAgPGlvbi1pdGVtIGRpc2FibGVkPVwie3shdXNlclByb2ZpbGUuc2V0dGluZ3NQdXNofX1cIj5cbiAgICAgICAgICAgICAgPGlvbi1pY29uIHNpemU9XCJzbWFsbFwiIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJjYWxlbmRhci1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgPGlvbi10b2dnbGUgbGFiZWxQbGFjZW1lbnQ9XCJzdGFydFwiIGF0dHIuYXJpYS1sYWJlbD0ne3tcImNvbW1vbi5ldmVudHNcIiB8IHRyYW5zbGF0ZX19J1xuICAgICAgICAgICAgICAgIHZhbHVlPVwie3t1c2VyUHJvZmlsZT8uc2V0dGluZ3NQdXNoRXZlbnR9fVwiIHNsb3Q9XCJlbmRcIiBbY2hlY2tlZF09XCJ1c2VyUHJvZmlsZS5zZXR0aW5nc1B1c2hFdmVudFwiXG4gICAgICAgICAgICAgICAgW2VuYWJsZU9uT2ZmTGFiZWxzXT1cInRydWVcIiAoaW9uQ2hhbmdlKT1cInRvZ2dsZVB1c2hNb2R1bGUoJGV2ZW50LCAnRXZlbnQnKVwiPjwvaW9uLXRvZ2dsZT5cbiAgICAgICAgICAgICAgPGlvbi1sYWJlbD4ge3tcImNvbW1vbi5ldmVudHNcIiB8IHRyYW5zbGF0ZX19IDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgPC9pb24taXRlbT5cblxuICAgICAgICAgICAgPGlvbi1pdGVtIGRpc2FibGVkPVwie3shdXNlclByb2ZpbGUuc2V0dGluZ3NQdXNofX1cIj5cbiAgICAgICAgICAgICAgPGlvbi1pY29uIHNpemU9XCJzbWFsbFwiIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJoZWxwLWJ1b3ktb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgIDxpb24tdG9nZ2xlIGxhYmVsUGxhY2VtZW50PVwic3RhcnRcIiBhdHRyLmFyaWEtbGFiZWw9J3t7XCJjb21tb24uaGVscGVyXCIgfCB0cmFuc2xhdGV9fSdcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dXNlclByb2ZpbGU/LnNldHRpbmdzUHVzaEhlbGZlcn19XCIgc2xvdD1cImVuZFwiIFtjaGVja2VkXT1cInVzZXJQcm9maWxlLnNldHRpbmdzUHVzaEhlbGZlclwiXG4gICAgICAgICAgICAgICAgW2VuYWJsZU9uT2ZmTGFiZWxzXT1cInRydWVcIiAoaW9uQ2hhbmdlKT1cInRvZ2dsZVB1c2hNb2R1bGUoJGV2ZW50LCAnSGVsZmVyJylcIj48L2lvbi10b2dnbGU+XG4gICAgICAgICAgICAgIDxpb24tbGFiZWw+IHt7XCJjb21tb24uaGVscGVyXCIgfCB0cmFuc2xhdGV9fSA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaW9uLWFjY29yZGlvbj5cblxuICAgICAgICA8aW9uLWFjY29yZGlvbiB2YWx1ZT1cInNldHRpbmdzRW1haWxcIj5cbiAgICAgICAgICA8aW9uLWl0ZW0gc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgbmFtZT1cIm1haWwtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8aW9uLWxhYmVsPiB7e1wicHJvZmlsZS5lbWFpbF9fbWVzc2FnZXNcIiB8IHRyYW5zbGF0ZX19IDwvaW9uLWxhYmVsPlxuICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgPGRpdiBzbG90PVwiY29udGVudFwiPlxuICAgICAgICAgICAgPGlvbi1pdGVtPlxuICAgICAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCJ1c2VyUHJvZmlsZS5zZXR0aW5nc0VtYWlsXCIgc2xvdD1cInN0YXJ0XCIgY29sb3I9XCJzdWNjZXNzXCIgbmFtZT1cIm1haWxcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8aW9uLWljb24gKm5nSWY9XCIhdXNlclByb2ZpbGUuc2V0dGluZ3NFbWFpbFwiIHNsb3Q9XCJzdGFydFwiIGNvbG9yPVwiZGFuZ2VyXCIgbmFtZT1cIm1haWwtb3V0bGluZVwiPjwvaW9uLWljb24+XG5cbiAgICAgICAgICAgICAgPGlvbi10b2dnbGUgY29sb3I9XCJzZWNvbmRhcnlcIiBhdHRyLmFyaWEtbGFiZWw9J3t7XCJwcm9maWxlLmVtYWlsX19tZXNzYWdlc1wiIHwgdHJhbnNsYXRlfX0nXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3VzZXJQcm9maWxlPy5zZXR0aW5nc0VtYWlsfX1cIiBbY2hlY2tlZF09XCJ1c2VyUHJvZmlsZS5zZXR0aW5nc0VtYWlsXCIgW2VuYWJsZU9uT2ZmTGFiZWxzXT1cInRydWVcIlxuICAgICAgICAgICAgICAgIChpb25DaGFuZ2UpPVwidG9nZ2xlRW1haWwoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgIDxpb24tbGFiZWw+IHt7XCJwcm9maWxlLmVtYWlsX19tZXNzYWdlc1wiIHwgdHJhbnNsYXRlfX0gPC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgIDwvaW9uLXRvZ2dsZT5cbiAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICA8aW9uLWl0ZW0+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBzaXplPVwic21hbGxcIiBuYW1lPVwiYW5hbHl0aWNzXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgPGlvbi10b2dnbGUgY29sb3I9XCJzZWNvbmRhcnlcIiBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCJcbiAgICAgICAgICAgICAgICBhdHRyLmFyaWEtbGFiZWw9J3t7XCJwcm9maWxlLmVtYWlsX19tZXNzYWdlc19yZXBvcnRcIiB8IHRyYW5zbGF0ZX19J1xuICAgICAgICAgICAgICAgIHZhbHVlPVwie3t1c2VyUHJvZmlsZT8uc2V0dGluZ3NFbWFpbFJlcG9ydGluZ319XCIgc2xvdD1cImVuZFwiXG4gICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwidXNlclByb2ZpbGUuc2V0dGluZ3NFbWFpbFJlcG9ydGluZ1wiIFtlbmFibGVPbk9mZkxhYmVsc109XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAoaW9uQ2hhbmdlKT1cInRvZ2dsZUVtYWlsUmVwb3J0aW5nKCRldmVudClcIj48L2lvbi10b2dnbGU+XG4gICAgICAgICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgICAgICAge3tcInByb2ZpbGUuZW1haWxfX21lc3NhZ2VzX3JlcG9ydFwiIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2lvbi1hY2NvcmRpb24+XG4gICAgICA8L2lvbi1hY2NvcmRpb24tZ3JvdXA+XG4gICAgPC9pb24tbGlzdD5cblxuICAgIDwhLS0gPGlvbi1saXN0IGxpbmVzPVwiZnVsbFwiIFtpbnNldF09XCJ0cnVlXCI+XG4gICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICB7e1wicHJvZmlsZS5wdXNoX19ub3RpZmljYXRpb25zXCIgfCB0cmFuc2xhdGV9fVxuICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG4gICAgICA8aW9uLWFjY29yZGlvbi1ncm91cCAqbmdJZj1cInB1c2hEZXZpY2VMaXN0Lmxlbmd0aCA+IDBcIj5cbiAgICAgICAgPGlvbi1hY2NvcmRpb24gdmFsdWU9XCJwdXNoRGV2aWNlTGlzdFwiPlxuICAgICAgICAgIDxpb24taXRlbSBzbG90PVwiaGVhZGVyXCIgY29sb3I9XCJsaWdodFwiPlxuICAgICAgICAgICAgPGlvbi1sYWJlbD57e1wicHJvZmlsZS5wdXNoX19ub3RpZmljYXRpb25zX2RldmljZXNcIiB8IHRyYW5zbGF0ZX19PC9pb24tbGFiZWw+XG4gICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW9uLXBhZGRpbmdcIiBzbG90PVwiY29udGVudFwiPlxuICAgICAgICAgICAgPGlvbi1saXN0PlxuICAgICAgICAgICAgICA8aW9uLWl0ZW0gKm5nRm9yPVwibGV0IGRldmljZSBvZiBwdXNoRGV2aWNlTGlzdFwiPlxuICAgICAgICAgICAgICAgIDxpb24taW5wdXQgbGFiZWxQbGFjZW1lbnQ9XCJzdGFja2VkXCIgbGFiZWw9XCJNb2RlbCB7e2RldmljZT8ubW9kZWx9fVwiIGFyaWEtbGFiZWw9XCJkZXZpY2U/Lm1vZGVsXCIgcmVhZG9ubHlcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiSWQ6IHt7ZGV2aWNlPy5pZH19XCI+PC9pb24taW5wdXQ+XG4gICAgICAgICAgICAgICAgPGlvbi1idXR0b24gY29sb3I9XCJkYW5nZXJcIiAoY2xpY2spPVwiZGVsZXRlUHVzaERldmljZShkZXZpY2UuaWQpXCI+XG4gICAgICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJ0cmFzaFwiPiA8L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8aW9uLWJhZGdlIHNsb3Q9XCJlbmRcIiAqbmdJZj1cImRldmljZS5pZD09ZGV2aWNlSWQuaWRlbnRpZmllclwiPnt7XCJwcm9maWxlLmN1cnJlbnRfX2RldmljZVwiIHxcbiAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZX19PC9pb24tYmFkZ2U+XG4gICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICA8L2lvbi1saXN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2lvbi1hY2NvcmRpb24+XG4gICAgICA8L2lvbi1hY2NvcmRpb24tZ3JvdXA+XG5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cInJlZ2lzdGVyRGV2aWNlKClcIj4ge3tcInByb2ZpbGUucHVzaF9fcmVnaXN0ZXJhdGlvblwiIHwgdHJhbnNsYXRlfX0gPC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24taXRlbT5cbiAgICA8L2lvbi1saXN0Pi0tPlxuICAgIDwhLS0gPGlvbi1pdGVtPlxuICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cInJlZ2lzdGVyRGV2aWNlKClcIj4ge3tcInByb2ZpbGUucHVzaF9fcmVnaXN0ZXJhdGlvblwiIHwgdHJhbnNsYXRlfX0gPC9pb24tYnV0dG9uPlxuICAgIDwvaW9uLWl0ZW0+IC0tPlxuXG4gICAgPCEtLTxpb24tbGlzdCBsaW5lcz1cImZ1bGxcIiBbaW5zZXRdPVwidHJ1ZVwiPlxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWxhYmVsIGNvbG9yPVwiZGFuZ2VyXCI+e3sncHJvZmlsZS5kZWxldGVfX3Byb2ZpbGUnIHwgdHJhbnNsYXRlfX08L2lvbi1sYWJlbD5cbiAgICAgICAgPGlvbi1idXR0b24gc2xvdD1cImVuZFwiIGNvbG9yPVwiZGFuZ2VyXCIgKGNsaWNrKT1cImRlbGV0ZVByb2ZpbGUoKVwiPlxuICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cInRyYXNoXCI+IDwvaW9uLWljb24+XG4gICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICA8L2lvbi1saXN0Pi0tPlxuICAgIDxkaXYgY2xhc3M9XCJpb24tcGFkZGluZ1wiPlxuICAgICAgPGlvbi1idXR0b24gZmlsbD1cIm91dGxpbmVcIiBleHBhbmQ9XCJibG9ja1wiIGNvbG9yPVwiZGFuZ2VyXCIgKGNsaWNrKT1cImRlbGV0ZVByb2ZpbGUoKVwiPlxuICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cInRyYXNoXCI+PC9pb24taWNvbj5cbiAgICAgICAge3sncHJvZmlsZS5kZWxldGVfX3Byb2ZpbGUnIHwgdHJhbnNsYXRlfX1cbiAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDxpb24tbGlzdCBsaW5lcz1cImZ1bGxcIiBbaW5zZXRdPVwidHJ1ZVwiPlxuICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgPGlvbi1sYWJlbD4ge3tcInByb2ZpbGUua2lkc1wiIHwgdHJhbnNsYXRlfX0gPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1saXN0LWhlYWRlcj5cblxuICAgICAgPGlvbi1pdGVtICpuZ0Zvcj1cImxldCBraWQgb2YgdXNlclByb2ZpbGUua2lkc1wiPlxuICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgIDxoMj57e2tpZC5lbWFpbH19PC9oMj5cbiAgICAgICAgICA8cCAqbmdJZj1cImtpZC52ZXJpZmllZFwiIGNvbG9yPVwic3VjY2Vzc1wiPnt7XCJwcm9maWxlLmtpZHMudmVyaWZpZWRcIiB8IHRyYW5zbGF0ZX19PC9wPlxuICAgICAgICAgIDxwICpuZ0lmPVwiIWtpZC52ZXJpZmllZFwiIGNvbG9yPVwid2FybmluZ1wiPnt7XCJwcm9maWxlLmtpZHMucGVuZGluZ1wiIHwgdHJhbnNsYXRlfX08L3A+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICA8aW9uLWJ1dHRvbiBzbG90PVwiZW5kXCIgY29sb3I9XCJkYW5nZXJcIiAoY2xpY2spPVwicmVtb3ZlS2lkKGtpZC5lbWFpbClcIj5cbiAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJ0cmFzaFwiPjwvaW9uLWljb24+XG4gICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDxpb24taXRlbSBpZD1cImFkZC1raWQtYWxlcnRcIiBkZXRhaWw9XCJ0cnVlXCI+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwicGVyc29uLWFkZC1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbD57e1wicHJvZmlsZS5raWRzLmFkZFwiIHwgdHJhbnNsYXRlfX08L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDxpb24tYWxlcnQgdHJpZ2dlcj1cImFkZC1raWQtYWxlcnRcIlxuICAgICAgICBbaGVhZGVyXT0nXCJwcm9maWxlLmtpZHMuYWRkX2hlYWRlclwiIHwgdHJhbnNsYXRlJ1xuICAgICAgICBbbWVzc2FnZV09J1wicHJvZmlsZS5raWRzLmFkZF9tZXNzYWdlXCIgfCB0cmFuc2xhdGUnXG4gICAgICAgIFtidXR0b25zXT1cImtpZEFsZXJ0QnV0dG9uc1wiXG4gICAgICAgIFtpbnB1dHNdPVwiW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdlbWFpbCcsXG4gICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdwcm9maWxlLmtpZHMuZW1haWxfcGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlLFxuICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICBhdXRvY29tcGxldGU6ICdlbWFpbCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cIj5cbiAgICAgIDwvaW9uLWFsZXJ0PlxuICAgIDwvaW9uLWxpc3Q+XG4gIDwvbmctY29udGFpbmVyPlxuXG5cbiAgPCEtLSBcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNsdWJMaXN0JCB8IGFzeW5jIGFzIGNsdWJMaXN0OyBlbHNlIGxvYWRpbmdDbHViXCI+XG4gICAgPGlvbi1saXN0PlxuICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICBNZWluZSBDbHVic1xuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgPGlvbi1idXR0b24+XG4gICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwiYWRkXCI+PC9pb24taWNvbj5cbiAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG4gICAgICA8aW9uLWl0ZW0gKm5nRm9yPVwibGV0IGNsdWIgb2YgY2x1Ykxpc3RcIj5cbiAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICB7e2NsdWIuaWR9fVxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgPGlvbi1idXR0b24gc2xvdD1cImVuZFwiPlxuICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgIGNvbG9yPVwiZGFuZ2VyXCIgbmFtZT1cInJlbW92ZS1jaXJjbGUtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgPC9pb24tbGlzdD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRlYW1MaXN0JCB8IGFzeW5jIGFzIHRlYW1MaXN0OyBlbHNlIGxvYWRpbmdUZWFtc1wiPlxuICAgIDxpb24tbGlzdD5cbiAgICAgIDxpb24tbGlzdC1oZWFkZXI+XG4gICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgTWVpbmUgVGVhbXNcbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgIDxpb24tYnV0dG9uID5cbiAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJhZGRcIj48L2lvbi1pY29uPlxuICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICAgIDxpb24taXRlbSAqbmdGb3I9XCJsZXQgdGVhbSBvZiB0ZWFtTGlzdFwiPlxuICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAge3t0ZWFtLmlkfX1cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgIDxpb24tYnV0dG9uIHNsb3Q9XCJlbmRcIj5cbiAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiICAgY29sb3I9XCJkYW5nZXJcIiBuYW1lPVwicmVtb3ZlLWNpcmNsZS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24taXRlbT5cbiAgICA8L2lvbi1saXN0PlxuICA8L25nLWNvbnRhaW5lcj5cbi0tPlxuPC9pb24tY29udGVudD5cbjxuZy10ZW1wbGF0ZSAjbG9hZGluZz5cbiAgPCEtLSBCdWJibGVzIC0tPlxuICA8aW9uLXNwaW5uZXIgbmFtZT1cImJ1YmJsZXNcIj48L2lvbi1zcGlubmVyPlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNsb2FkaW5nQ2x1Yj5cbiAgPGlvbi10ZXh0PiB7e1wiY29tbW9uLmxvYWRpbmdcIiB8IHRyYW5zbGF0ZX19IDwvaW9uLXRleHQ+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI2xvYWRpbmdUZWFtcz5cbiAgPGlvbi10ZXh0PiB7e1wiY29tbW9uLmxvYWRpbmdcIiB8IHRyYW5zbGF0ZX19IDwvaW9uLXRleHQ+XG48L25nLXRlbXBsYXRlPiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFByb2ZpbGVQYWdlIH0gZnJvbSAnLi9wcm9maWxlLnBhZ2UnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogUHJvZmlsZVBhZ2VcbiAgfVxuXVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9maWxlUGFnZVJvdXRpbmdNb2R1bGUge31cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBQcm9maWxlUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3Byb2ZpbGUtcm91dGluZy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBQcm9maWxlUGFnZSB9IGZyb20gJy4vcHJvZmlsZS5wYWdlJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgSW9uaWNNb2R1bGUsIFByb2ZpbGVQYWdlUm91dGluZ01vZHVsZSwgVHJhbnNsYXRlTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJvZmlsZVBhZ2VdXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVQYWdlTW9kdWxlIHt9XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQUk7QUFBQSxDQUNWLFNBQVVBLGVBQWM7QUFJdkIsRUFBQUEsY0FBYSxRQUFRLElBQUk7QUFJekIsRUFBQUEsY0FBYSxRQUFRLElBQUk7QUFJekIsRUFBQUEsY0FBYSxRQUFRLElBQUk7QUFDM0IsR0FBRyxpQkFBaUIsZUFBZSxDQUFDLEVBQUU7QUFDL0IsSUFBSTtBQUFBLENBQ1YsU0FBVUMsa0JBQWlCO0FBQzFCLEVBQUFBLGlCQUFnQixNQUFNLElBQUk7QUFDMUIsRUFBQUEsaUJBQWdCLE9BQU8sSUFBSTtBQUM3QixHQUFHLG9CQUFvQixrQkFBa0Is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QSxHQUFBLENBQUEsU0FBQSxRQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxPQUFBLEtBQUEsR0FBQSxDQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxRQUFBLFFBQUEsR0FBQSxDQUFBLGtCQUFBLFdBQUEsR0FBQSxhQUFBLGlCQUFBLFNBQUEsV0FBQSxPQUFBLEdBQUEsQ0FBQSxNQUFBLGlCQUFBLEdBQUEsQ0FBQSxZQUFBLEVBQUEsR0FBQSxDQUFBLFFBQUEsT0FBQSxZQUFBLGFBQUEsR0FBQSxDQUFBLEdBQUEscUJBQUEsR0FBQSxDQUFBLGNBQUEsa0NBQUEsR0FBQSxpQkFBQSxhQUFBLFNBQUEsV0FBQSxlQUFBLGNBQUEsUUFBQSxHQUFBLENBQUEsU0FBQSxJQUFBLEdBQUEsQ0FBQSxTQUFBLElBQUEsR0FBQSxDQUFBLFNBQUEsSUFBQSxHQUFBLENBQUEsU0FBQSxJQUFBLEdBQUEsQ0FBQSxrQkFBQSxXQUFBLE9BQUEsSUFBQSxHQUFBLGlCQUFBLGFBQUEsU0FBQSxXQUFBLE9BQUEsR0FBQSxDQUFBLE1BQUEsdUJBQUEsVUFBQSxNQUFBLEdBQUEsQ0FBQSxrQkFBQSxXQUFBLFFBQUEsU0FBQSxZQUFBLElBQUEsR0FBQSxTQUFBLE9BQUEsR0FBQSxDQUFBLFdBQUEsdUJBQUEsR0FBQSxVQUFBLFdBQUEsV0FBQSxRQUFBLEdBQUEsQ0FBQSxNQUFBLHlCQUFBLFVBQUEsTUFBQSxHQUFBLENBQUEsa0JBQUEsV0FBQSxHQUFBLFNBQUEsT0FBQSxHQUFBLENBQUEsV0FBQSx5QkFBQSxHQUFBLFVBQUEsV0FBQSxXQUFBLFFBQUEsR0FBQSxDQUFBLFNBQUEsY0FBQSxHQUFBLENBQUEsUUFBQSxRQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsU0FBQSxXQUFBLFFBQUEsdUJBQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFNBQUEsV0FBQSxRQUFBLHdCQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFNBQUEsVUFBQSxRQUFBLDRCQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxhQUFBLFNBQUEsV0FBQSxtQkFBQSxHQUFBLENBQUEsU0FBQSxpQkFBQSxTQUFBLFVBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBLFVBQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxRQUFBLFNBQUEsUUFBQSxtQkFBQSxHQUFBLENBQUEsa0JBQUEsU0FBQSxRQUFBLE9BQUEsR0FBQSxhQUFBLFNBQUEsV0FBQSxtQkFBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFFBQUEsU0FBQSxRQUFBLFdBQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxRQUFBLFNBQUEsUUFBQSxpQkFBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFFBQUEsU0FBQSxRQUFBLGdCQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsUUFBQSxTQUFBLFFBQUEsa0JBQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxRQUFBLFNBQUEsUUFBQSxtQkFBQSxHQUFBLENBQUEsU0FBQSxlQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsU0FBQSxhQUFBLFFBQUEsY0FBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFNBQUEsV0FBQSxRQUFBLFFBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsU0FBQSxVQUFBLFFBQUEsZ0JBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLGFBQUEsR0FBQSxhQUFBLFNBQUEsV0FBQSxtQkFBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFFBQUEsU0FBQSxRQUFBLFdBQUEsR0FBQSxDQUFBLFNBQUEsYUFBQSxrQkFBQSxTQUFBLFFBQUEsT0FBQSxHQUFBLGFBQUEsU0FBQSxXQUFBLG1CQUFBLEdBQUEsQ0FBQSxHQUFBLGFBQUEsR0FBQSxDQUFBLFFBQUEsV0FBQSxVQUFBLFNBQUEsU0FBQSxVQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFFBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxTQUFBLFNBQUEsR0FBQSxDQUFBLE1BQUEsaUJBQUEsVUFBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsUUFBQSxvQkFBQSxHQUFBLENBQUEsV0FBQSxpQkFBQSxHQUFBLFVBQUEsV0FBQSxXQUFBLFFBQUEsR0FBQSxDQUFBLGdCQUFBLFFBQUEsTUFBQSxlQUFBLEdBQUEsYUFBQSxrQkFBQSxPQUFBLEdBQUEsQ0FBQSxVQUFBLFFBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLHFCQUFBLFFBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFNBQUEsV0FBQSxRQUFBLHNCQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsU0FBQSxVQUFBLFFBQUEsMEJBQUEsR0FBQSxDQUFBLFNBQUEsVUFBQSxHQUFBLGVBQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxTQUFBLFdBQUEsUUFBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsU0FBQSxVQUFBLFFBQUEsY0FBQSxHQUFBLENBQUEsU0FBQSxXQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsU0FBQSxXQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxPQUFBLFNBQUEsVUFBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsYUFBQSxRQUFBLE9BQUEsR0FBQSxDQUFBLFNBQUEsU0FBQSxHQUFBLENBQUEsU0FBQSxTQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsQ0FBQSxHQUFBLFVBQUEsU0FBQSxxQkFBQSxJQUFBLEtBQUE7QUFBQSxNQUFBLEtBQUEsR0FBQTtBQzFEeEIsSUFBQSx5QkFBQSxHQUFBLGNBQUEsQ0FBQSxFQUFpQyxHQUFBLGFBQUEsRUFDbEIsR0FBQSxlQUFBLENBQUE7QUFFVCxJQUFBLG9CQUFBLEdBQUEsaUJBQUE7QUFDRixJQUFBLHVCQUFBO0FBQ0EsSUFBQSx5QkFBQSxHQUFBLFdBQUE7QUFBVyxJQUFBLGlCQUFBLENBQUE7O0FBQWdDLElBQUEsdUJBQUEsRUFBWSxFQUMzQztBQUdoQixJQUFBLHlCQUFBLEdBQUEsZUFBQSxDQUFBLEVBQWlDLEdBQUEsY0FBQSxDQUFBLEVBQ0MsR0FBQSxhQUFBLEVBQ2pCLElBQUEsYUFBQSxDQUFBO0FBQ2EsSUFBQSxpQkFBQSxFQUFBOztBQUFnQyxJQUFBLHVCQUFBLEVBQVksRUFDeEQ7QUFHaEIsSUFBQSxxQkFBQSxJQUFBLHNDQUFBLEtBQUEsS0FBQSxnQkFBQSxDQUFBOztBQWliRixJQUFBLHVCQUFBO0FBQ0EsSUFBQSxxQkFBQSxJQUFBLHFDQUFBLEdBQUEsR0FBQSxlQUFBLE1BQUEsR0FBQSxnQ0FBQSxFQUFzQixJQUFBLHFDQUFBLEdBQUEsR0FBQSxlQUFBLE1BQUEsR0FBQSxnQ0FBQSxFQUtJLElBQUEscUNBQUEsR0FBQSxHQUFBLGVBQUEsTUFBQSxHQUFBLGdDQUFBOzs7QUF2Y2QsSUFBQSxxQkFBQSxlQUFBLElBQUE7QUFLRyxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLEdBQUEsR0FBQSxnQkFBQSxDQUFBO0FBSUYsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxjQUFBLElBQUE7QUFHaUIsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw0QkFBQSxzQkFBQSxJQUFBLEdBQUEsZ0JBQUEsQ0FBQTtBQUliLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxzQkFBQSxJQUFBLEdBQUEsSUFBQSxZQUFBLENBQUE7OztBRDBDWCxJQUFPLGNBQVA7OzZFQUFPLGFBQVcsRUFBQSxXQUFBLGVBQUEsVUFBQSx5Q0FBQSxZQUFBLEdBQUEsQ0FBQTtBQUFBLEdBQUE7OztBRXJEeEIsSUFBTSxTQUFpQjtFQUNyQjtJQUNFLE1BQU07SUFDTixXQUFXOzs7QUFRVCxJQUFPLDRCQUFQLE1BQU8sMEJBQXdCOzs7bUNBQXhCLDJCQUF3QjtBQUFBO3lGQUF4QiwwQkFBd0IsQ0FBQTs2RkFIekIsYUFBYSxTQUFTLE1BQU0sR0FDNUIsWUFBWSxFQUFBLENBQUE7QUFFbEIsSUFBTywyQkFBUDs7O0FDREEsSUFBTyxxQkFBUCxNQUFPLG1CQUFpQjs7O21DQUFqQixvQkFBaUI7QUFBQTtrRkFBakIsbUJBQWlCLENBQUE7c0ZBSGxCLGNBQWMsYUFBYSxhQUFhLDBCQUEwQixlQUFlLEVBQUEsQ0FBQTtBQUd2RixJQUFPLG9CQUFQOyIsIm5hbWVzIjpbIkNhbWVyYVNvdXJjZSIsIkNhbWVyYURpcmVjdGlvbiIsIkNhbWVyYVJlc3VsdFR5cGUiLCJDYW1lcmEiLCJhbGVydCIsIkNhbWVyYSJdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxLDJdfQ==
