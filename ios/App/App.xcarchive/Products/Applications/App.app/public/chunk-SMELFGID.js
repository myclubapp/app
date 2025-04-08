import {
  ChampionshipService,
  LineupPage
} from "./chunk-NVBRLDNC.js";
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
  AuthService
} from "./chunk-AMO7VPPH.js";
import {
  AlertController,
  AsyncPipe,
  ChangeDetectorRef,
  IonAccordion,
  IonAccordionGroup,
  IonAvatar,
  IonBadge,
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonListHeader,
  IonSkeletonText,
  ModalController,
  NavParams,
  NgForOf,
  NgIf,
  Platform,
  ToastController,
  TranslatePipe,
  TranslateService,
  catchError,
  forkJoin,
  lastValueFrom,
  map,
  of,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
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
  ɵɵviewQuery
} from "./chunk-PZUQX53K.js";
import {
  CapacitorGoogleMaps,
  LatLngBounds,
  MapType
} from "./chunk-BK6XZVAH.js";
import {
  Capacitor,
  registerPlugin
} from "./chunk-YB7CDXXA.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-LQ2EECYJ.js";

// src/environments/environment.ts
var environment = {
  firebase: {
    projectId: "myclubmanagement",
    appId: "1:631527568360:web:ce837471207da281fc6a5d",
    databaseURL: "https://myclubmanagement.firebaseio.com",
    storageBucket: "myclubmanagement.appspot.com",
    locationId: "europe-west6",
    apiKey: "AIzaSyCG9_CYSbjzuvJsC0P6SOYQ7_jGN0Q2E5k",
    authDomain: "myclubmanagement.firebaseapp.com",
    messagingSenderId: "631527568360"
  },
  production: false,
  googleMapsApiKey: "AIzaSyAM5x9P0syj9qtxUmFs98nW0B967xo52Fw"
};

// node_modules/@capacitor/google-maps/dist/esm/map.js
var MapCustomElement = class extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = "";
    if (Capacitor.getPlatform() == "ios") {
      this.style.overflow = "scroll";
      this.style["-webkit-overflow-scrolling"] = "touch";
      const overflowDiv = document.createElement("div");
      overflowDiv.style.height = "200%";
      this.appendChild(overflowDiv);
    }
  }
};
customElements.define("capacitor-google-map", MapCustomElement);
var GoogleMap = class _GoogleMap {
  constructor(id) {
    this.element = null;
    this.resizeObserver = null;
    this.handleScrollEvent = () => this.updateMapBounds();
    this.id = id;
  }
  /**
   * Creates a new instance of a Google Map
   * @param options
   * @param callback
   * @returns GoogleMap
   */
  static create(options, callback) {
    return __async(this, null, function* () {
      const newMap = new _GoogleMap(options.id);
      if (!options.element) {
        throw new Error("container element is required");
      }
      if (options.config.androidLiteMode === void 0) {
        options.config.androidLiteMode = false;
      }
      newMap.element = options.element;
      newMap.element.dataset.internalId = options.id;
      const elementBounds = yield _GoogleMap.getElementBounds(options.element);
      options.config.width = elementBounds.width;
      options.config.height = elementBounds.height;
      options.config.x = elementBounds.x;
      options.config.y = elementBounds.y;
      options.config.devicePixelRatio = window.devicePixelRatio;
      if (Capacitor.getPlatform() == "android") {
        newMap.initScrolling();
      }
      if (Capacitor.isNativePlatform()) {
        options.element = {};
        const getMapBounds = () => {
          var _a, _b;
          const mapRect = (_b = (_a = newMap.element) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) !== null && _b !== void 0 ? _b : {};
          return {
            x: mapRect.x,
            y: mapRect.y,
            width: mapRect.width,
            height: mapRect.height
          };
        };
        const onDisplay = () => {
          CapacitorGoogleMaps.onDisplay({
            id: newMap.id,
            mapBounds: getMapBounds()
          });
        };
        const onResize = () => {
          CapacitorGoogleMaps.onResize({
            id: newMap.id,
            mapBounds: getMapBounds()
          });
        };
        const ionicPage = newMap.element.closest(".ion-page");
        if (Capacitor.getPlatform() === "ios" && ionicPage) {
          ionicPage.addEventListener("ionViewWillEnter", () => {
            setTimeout(() => {
              onDisplay();
            }, 100);
          });
          ionicPage.addEventListener("ionViewDidEnter", () => {
            setTimeout(() => {
              onDisplay();
            }, 100);
          });
        }
        const lastState = {
          width: elementBounds.width,
          height: elementBounds.height,
          isHidden: false
        };
        newMap.resizeObserver = new ResizeObserver(() => {
          if (newMap.element != null) {
            const mapRect = newMap.element.getBoundingClientRect();
            const isHidden = mapRect.width === 0 && mapRect.height === 0;
            if (!isHidden) {
              if (lastState.isHidden) {
                if (Capacitor.getPlatform() === "ios" && !ionicPage) {
                  onDisplay();
                }
              } else if (lastState.width !== mapRect.width || lastState.height !== mapRect.height) {
                onResize();
              }
            }
            lastState.width = mapRect.width;
            lastState.height = mapRect.height;
            lastState.isHidden = isHidden;
          }
        });
        newMap.resizeObserver.observe(newMap.element);
      }
      yield new Promise((resolve, reject) => {
        setTimeout(() => __async(this, null, function* () {
          try {
            yield CapacitorGoogleMaps.create(options);
            resolve(void 0);
          } catch (err) {
            reject(err);
          }
        }), 200);
      });
      if (callback) {
        const onMapReadyListener = yield CapacitorGoogleMaps.addListener("onMapReady", (data) => {
          if (data.mapId == newMap.id) {
            callback(data);
            onMapReadyListener.remove();
          }
        });
      }
      return newMap;
    });
  }
  static getElementBounds(element) {
    return __async(this, null, function* () {
      return new Promise((resolve) => {
        let elementBounds = element.getBoundingClientRect();
        if (elementBounds.width == 0) {
          let retries = 0;
          const boundsInterval = setInterval(function() {
            if (elementBounds.width == 0 && retries < 30) {
              elementBounds = element.getBoundingClientRect();
              retries++;
            } else {
              if (retries == 30) {
                console.warn("Map size could not be determined");
              }
              clearInterval(boundsInterval);
              resolve(elementBounds);
            }
          }, 100);
        } else {
          resolve(elementBounds);
        }
      });
    });
  }
  /**
   * Enable touch events on native map
   *
   * @returns void
   */
  enableTouch() {
    return __async(this, null, function* () {
      return CapacitorGoogleMaps.enableTouch({
        id: this.id
      });
    });
  }
  /**
   * Disable touch events on native map
   *
   * @returns void
   */
  disableTouch() {
    return __async(this, null, function* () {
      return CapacitorGoogleMaps.disableTouch({
        id: this.id
      });
    });
  }
  /**
   * Enable marker clustering
   *
   * @param minClusterSize - The minimum number of markers that can be clustered together.
   * @defaultValue 4
   *
   * @returns void
   */
  enableClustering(minClusterSize) {
    return __async(this, null, function* () {
      return CapacitorGoogleMaps.enableClustering({
        id: this.id,
        minClusterSize
      });
    });
  }
  /**
   * Disable marker clustering
   *
   * @returns void
   */
  disableClustering() {
    return __async(this, null, function* () {
      return CapacitorGoogleMaps.disableClustering({
        id: this.id
      });
    });
  }
  /**
   * Adds a marker to the map
   *
   * @param marker
   * @returns created marker id
   */
  addMarker(marker) {
    return __async(this, null, function* () {
      const res = yield CapacitorGoogleMaps.addMarker({
        id: this.id,
        marker
      });
      return res.id;
    });
  }
  /**
   * Adds multiple markers to the map
   *
   * @param markers
   * @returns array of created marker IDs
   */
  addMarkers(markers) {
    return __async(this, null, function* () {
      const res = yield CapacitorGoogleMaps.addMarkers({
        id: this.id,
        markers
      });
      return res.ids;
    });
  }
  /**
   * Remove marker from the map
   *
   * @param id id of the marker to remove from the map
   * @returns
   */
  removeMarker(id) {
    return __async(this, null, function* () {
      return CapacitorGoogleMaps.removeMarker({
        id: this.id,
        markerId: id
      });
    });
  }
  /**
   * Remove markers from the map
   *
   * @param ids array of ids to remove from the map
   * @returns
   */
  removeMarkers(ids) {
    return __async(this, null, function* () {
      return CapacitorGoogleMaps.removeMarkers({
        id: this.id,
        markerIds: ids
      });
    });
  }
  addPolygons(polygons) {
    return __async(this, null, function* () {
      const res = yield CapacitorGoogleMaps.addPolygons({
        id: this.id,
        polygons
      });
      return res.ids;
    });
  }
  addPolylines(polylines) {
    return __async(this, null, function* () {
      const res = yield CapacitorGoogleMaps.addPolylines({
        id: this.id,
        polylines
      });
      return res.ids;
    });
  }
  removePolygons(ids) {
    return __async(this, null, function* () {
      return CapacitorGoogleMaps.removePolygons({
        id: this.id,
        polygonIds: ids
      });
    });
  }
  addCircles(circles) {
    return __async(this, null, function* () {
      const res = yield CapacitorGoogleMaps.addCircles({
        id: this.id,
        circles
      });
      return res.ids;
    });
  }
  removeCircles(ids) {
    return __async(this, null, function* () {
      return CapacitorGoogleMaps.removeCircles({
        id: this.id,
        circleIds: ids
      });
    });
  }
  removePolylines(ids) {
    return __async(this, null, function* () {
      return CapacitorGoogleMaps.removePolylines({
        id: this.id,
        polylineIds: ids
      });
    });
  }
  /**
   * Destroy the current instance of the map
   */
  destroy() {
    return __async(this, null, function* () {
      var _a;
      if (Capacitor.getPlatform() == "android") {
        this.disableScrolling();
      }
      if (Capacitor.isNativePlatform()) {
        (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
      }
      this.removeAllMapListeners();
      return CapacitorGoogleMaps.destroy({
        id: this.id
      });
    });
  }
  /**
   * Update the map camera configuration
   *
   * @param config
   * @returns
   */
  setCamera(config) {
    return __async(this, null, function* () {
      return CapacitorGoogleMaps.setCamera({
        id: this.id,
        config
      });
    });
  }
  getMapType() {
    return __async(this, null, function* () {
      const {
        type
      } = yield CapacitorGoogleMaps.getMapType({
        id: this.id
      });
      return MapType[type];
    });
  }
  /**
   * Sets the type of map tiles that should be displayed.
   *
   * @param mapType
   * @returns
   */
  setMapType(mapType) {
    return __async(this, null, function* () {
      return CapacitorGoogleMaps.setMapType({
        id: this.id,
        mapType
      });
    });
  }
  /**
   * Sets whether indoor maps are shown, where available.
   *
   * @param enabled
   * @returns
   */
  enableIndoorMaps(enabled) {
    return __async(this, null, function* () {
      return CapacitorGoogleMaps.enableIndoorMaps({
        id: this.id,
        enabled
      });
    });
  }
  /**
   * Controls whether the map is drawing traffic data, if available.
   *
   * @param enabled
   * @returns
   */
  enableTrafficLayer(enabled) {
    return __async(this, null, function* () {
      return CapacitorGoogleMaps.enableTrafficLayer({
        id: this.id,
        enabled
      });
    });
  }
  /**
   * Show accessibility elements for overlay objects, such as Marker and Polyline.
   *
   * Only available on iOS.
   *
   * @param enabled
   * @returns
   */
  enableAccessibilityElements(enabled) {
    return __async(this, null, function* () {
      return CapacitorGoogleMaps.enableAccessibilityElements({
        id: this.id,
        enabled
      });
    });
  }
  /**
   * Set whether the My Location dot and accuracy circle is enabled.
   *
   * @param enabled
   * @returns
   */
  enableCurrentLocation(enabled) {
    return __async(this, null, function* () {
      return CapacitorGoogleMaps.enableCurrentLocation({
        id: this.id,
        enabled
      });
    });
  }
  /**
   * Set padding on the 'visible' region of the view.
   *
   * @param padding
   * @returns
   */
  setPadding(padding) {
    return __async(this, null, function* () {
      return CapacitorGoogleMaps.setPadding({
        id: this.id,
        padding
      });
    });
  }
  /**
   * Get the map's current viewport latitude and longitude bounds.
   *
   * @returns {LatLngBounds}
   */
  getMapBounds() {
    return __async(this, null, function* () {
      return new LatLngBounds(yield CapacitorGoogleMaps.getMapBounds({
        id: this.id
      }));
    });
  }
  fitBounds(bounds, padding) {
    return __async(this, null, function* () {
      return CapacitorGoogleMaps.fitBounds({
        id: this.id,
        bounds,
        padding
      });
    });
  }
  initScrolling() {
    const ionContents = document.getElementsByTagName("ion-content");
    for (let i = 0; i < ionContents.length; i++) {
      ionContents[i].scrollEvents = true;
    }
    window.addEventListener("ionScroll", this.handleScrollEvent);
    window.addEventListener("scroll", this.handleScrollEvent);
    window.addEventListener("resize", this.handleScrollEvent);
    if (screen.orientation) {
      screen.orientation.addEventListener("change", () => {
        setTimeout(this.updateMapBounds, 500);
      });
    } else {
      window.addEventListener("orientationchange", () => {
        setTimeout(this.updateMapBounds, 500);
      });
    }
  }
  disableScrolling() {
    window.removeEventListener("ionScroll", this.handleScrollEvent);
    window.removeEventListener("scroll", this.handleScrollEvent);
    window.removeEventListener("resize", this.handleScrollEvent);
    if (screen.orientation) {
      screen.orientation.removeEventListener("change", () => {
        setTimeout(this.updateMapBounds, 1e3);
      });
    } else {
      window.removeEventListener("orientationchange", () => {
        setTimeout(this.updateMapBounds, 1e3);
      });
    }
  }
  updateMapBounds() {
    if (this.element) {
      const mapRect = this.element.getBoundingClientRect();
      CapacitorGoogleMaps.onScroll({
        id: this.id,
        mapBounds: {
          x: mapRect.x,
          y: mapRect.y,
          width: mapRect.width,
          height: mapRect.height
        }
      });
    }
  }
  /*
  private findContainerElement(): HTMLElement | null {
    if (!this.element) {
      return null;
    }
       let parentElement = this.element.parentElement;
    while (parentElement !== null) {
      if (window.getComputedStyle(parentElement).overflowY !== 'hidden') {
        return parentElement;
      }
         parentElement = parentElement.parentElement;
    }
       return null;
  }
  */
  /**
   * Set the event listener on the map for 'onCameraIdle' events.
   *
   * @param callback
   * @returns
   */
  setOnCameraIdleListener(callback) {
    return __async(this, null, function* () {
      if (this.onCameraIdleListener) {
        this.onCameraIdleListener.remove();
      }
      if (callback) {
        this.onCameraIdleListener = yield CapacitorGoogleMaps.addListener("onCameraIdle", this.generateCallback(callback));
      } else {
        this.onCameraIdleListener = void 0;
      }
    });
  }
  /**
   * Set the event listener on the map for 'onBoundsChanged' events.
   *
   * @param callback
   * @returns
   */
  setOnBoundsChangedListener(callback) {
    return __async(this, null, function* () {
      if (this.onBoundsChangedListener) {
        this.onBoundsChangedListener.remove();
      }
      if (callback) {
        this.onBoundsChangedListener = yield CapacitorGoogleMaps.addListener("onBoundsChanged", this.generateCallback(callback));
      } else {
        this.onBoundsChangedListener = void 0;
      }
    });
  }
  /**
   * Set the event listener on the map for 'onCameraMoveStarted' events.
   *
   * @param callback
   * @returns
   */
  setOnCameraMoveStartedListener(callback) {
    return __async(this, null, function* () {
      if (this.onCameraMoveStartedListener) {
        this.onCameraMoveStartedListener.remove();
      }
      if (callback) {
        this.onCameraMoveStartedListener = yield CapacitorGoogleMaps.addListener("onCameraMoveStarted", this.generateCallback(callback));
      } else {
        this.onCameraMoveStartedListener = void 0;
      }
    });
  }
  /**
   * Set the event listener on the map for 'onClusterClick' events.
   *
   * @param callback
   * @returns
   */
  setOnClusterClickListener(callback) {
    return __async(this, null, function* () {
      if (this.onClusterClickListener) {
        this.onClusterClickListener.remove();
      }
      if (callback) {
        this.onClusterClickListener = yield CapacitorGoogleMaps.addListener("onClusterClick", this.generateCallback(callback));
      } else {
        this.onClusterClickListener = void 0;
      }
    });
  }
  /**
   * Set the event listener on the map for 'onClusterInfoWindowClick' events.
   *
   * @param callback
   * @returns
   */
  setOnClusterInfoWindowClickListener(callback) {
    return __async(this, null, function* () {
      if (this.onClusterInfoWindowClickListener) {
        this.onClusterInfoWindowClickListener.remove();
      }
      if (callback) {
        this.onClusterInfoWindowClickListener = yield CapacitorGoogleMaps.addListener("onClusterInfoWindowClick", this.generateCallback(callback));
      } else {
        this.onClusterInfoWindowClickListener = void 0;
      }
    });
  }
  /**
   * Set the event listener on the map for 'onInfoWindowClick' events.
   *
   * @param callback
   * @returns
   */
  setOnInfoWindowClickListener(callback) {
    return __async(this, null, function* () {
      if (this.onInfoWindowClickListener) {
        this.onInfoWindowClickListener.remove();
      }
      if (callback) {
        this.onInfoWindowClickListener = yield CapacitorGoogleMaps.addListener("onInfoWindowClick", this.generateCallback(callback));
      } else {
        this.onInfoWindowClickListener = void 0;
      }
    });
  }
  /**
   * Set the event listener on the map for 'onMapClick' events.
   *
   * @param callback
   * @returns
   */
  setOnMapClickListener(callback) {
    return __async(this, null, function* () {
      if (this.onMapClickListener) {
        this.onMapClickListener.remove();
      }
      if (callback) {
        this.onMapClickListener = yield CapacitorGoogleMaps.addListener("onMapClick", this.generateCallback(callback));
      } else {
        this.onMapClickListener = void 0;
      }
    });
  }
  /**
   * Set the event listener on the map for 'onPolygonClick' events.
   *
   * @param callback
   * @returns
   */
  setOnPolygonClickListener(callback) {
    return __async(this, null, function* () {
      if (this.onPolygonClickListener) {
        this.onPolygonClickListener.remove();
      }
      if (callback) {
        this.onPolygonClickListener = yield CapacitorGoogleMaps.addListener("onPolygonClick", this.generateCallback(callback));
      } else {
        this.onPolygonClickListener = void 0;
      }
    });
  }
  /**
   * Set the event listener on the map for 'onCircleClick' events.
   *
   * @param callback
   * @returns
   */
  setOnCircleClickListener(callback) {
    return __async(this, null, function* () {
      if (this.onCircleClickListener) [this.onCircleClickListener.remove()];
      if (callback) {
        this.onCircleClickListener = yield CapacitorGoogleMaps.addListener("onCircleClick", this.generateCallback(callback));
      } else {
        this.onCircleClickListener = void 0;
      }
    });
  }
  /**
   * Set the event listener on the map for 'onMarkerClick' events.
   *
   * @param callback
   * @returns
   */
  setOnMarkerClickListener(callback) {
    return __async(this, null, function* () {
      if (this.onMarkerClickListener) {
        this.onMarkerClickListener.remove();
      }
      if (callback) {
        this.onMarkerClickListener = yield CapacitorGoogleMaps.addListener("onMarkerClick", this.generateCallback(callback));
      } else {
        this.onMarkerClickListener = void 0;
      }
    });
  }
  /**
   * Set the event listener on the map for 'onPolylineClick' events.
   *
   * @param callback
   * @returns
   */
  setOnPolylineClickListener(callback) {
    return __async(this, null, function* () {
      if (this.onPolylineClickListener) {
        this.onPolylineClickListener.remove();
      }
      if (callback) {
        this.onPolylineClickListener = yield CapacitorGoogleMaps.addListener("onPolylineClick", this.generateCallback(callback));
      } else {
        this.onPolylineClickListener = void 0;
      }
    });
  }
  /**
   * Set the event listener on the map for 'onMarkerDragStart' events.
   *
   * @param callback
   * @returns
   */
  setOnMarkerDragStartListener(callback) {
    return __async(this, null, function* () {
      if (this.onMarkerDragStartListener) {
        this.onMarkerDragStartListener.remove();
      }
      if (callback) {
        this.onMarkerDragStartListener = yield CapacitorGoogleMaps.addListener("onMarkerDragStart", this.generateCallback(callback));
      } else {
        this.onMarkerDragStartListener = void 0;
      }
    });
  }
  /**
   * Set the event listener on the map for 'onMarkerDrag' events.
   *
   * @param callback
   * @returns
   */
  setOnMarkerDragListener(callback) {
    return __async(this, null, function* () {
      if (this.onMarkerDragListener) {
        this.onMarkerDragListener.remove();
      }
      if (callback) {
        this.onMarkerDragListener = yield CapacitorGoogleMaps.addListener("onMarkerDrag", this.generateCallback(callback));
      } else {
        this.onMarkerDragListener = void 0;
      }
    });
  }
  /**
   * Set the event listener on the map for 'onMarkerDragEnd' events.
   *
   * @param callback
   * @returns
   */
  setOnMarkerDragEndListener(callback) {
    return __async(this, null, function* () {
      if (this.onMarkerDragEndListener) {
        this.onMarkerDragEndListener.remove();
      }
      if (callback) {
        this.onMarkerDragEndListener = yield CapacitorGoogleMaps.addListener("onMarkerDragEnd", this.generateCallback(callback));
      } else {
        this.onMarkerDragEndListener = void 0;
      }
    });
  }
  /**
   * Set the event listener on the map for 'onMyLocationButtonClick' events.
   *
   * @param callback
   * @returns
   */
  setOnMyLocationButtonClickListener(callback) {
    return __async(this, null, function* () {
      if (this.onMyLocationButtonClickListener) {
        this.onMyLocationButtonClickListener.remove();
      }
      if (callback) {
        this.onMyLocationButtonClickListener = yield CapacitorGoogleMaps.addListener("onMyLocationButtonClick", this.generateCallback(callback));
      } else {
        this.onMyLocationButtonClickListener = void 0;
      }
    });
  }
  /**
   * Set the event listener on the map for 'onMyLocationClick' events.
   *
   * @param callback
   * @returns
   */
  setOnMyLocationClickListener(callback) {
    return __async(this, null, function* () {
      if (this.onMyLocationClickListener) {
        this.onMyLocationClickListener.remove();
      }
      if (callback) {
        this.onMyLocationClickListener = yield CapacitorGoogleMaps.addListener("onMyLocationClick", this.generateCallback(callback));
      } else {
        this.onMyLocationClickListener = void 0;
      }
    });
  }
  /**
   * Remove all event listeners on the map.
   *
   * @param callback
   * @returns
   */
  removeAllMapListeners() {
    return __async(this, null, function* () {
      if (this.onBoundsChangedListener) {
        this.onBoundsChangedListener.remove();
        this.onBoundsChangedListener = void 0;
      }
      if (this.onCameraIdleListener) {
        this.onCameraIdleListener.remove();
        this.onCameraIdleListener = void 0;
      }
      if (this.onCameraMoveStartedListener) {
        this.onCameraMoveStartedListener.remove();
        this.onCameraMoveStartedListener = void 0;
      }
      if (this.onClusterClickListener) {
        this.onClusterClickListener.remove();
        this.onClusterClickListener = void 0;
      }
      if (this.onClusterInfoWindowClickListener) {
        this.onClusterInfoWindowClickListener.remove();
        this.onClusterInfoWindowClickListener = void 0;
      }
      if (this.onInfoWindowClickListener) {
        this.onInfoWindowClickListener.remove();
        this.onInfoWindowClickListener = void 0;
      }
      if (this.onMapClickListener) {
        this.onMapClickListener.remove();
        this.onMapClickListener = void 0;
      }
      if (this.onPolylineClickListener) {
        this.onPolylineClickListener.remove();
        this.onPolylineClickListener = void 0;
      }
      if (this.onMarkerClickListener) {
        this.onMarkerClickListener.remove();
        this.onMarkerClickListener = void 0;
      }
      if (this.onPolygonClickListener) {
        this.onPolygonClickListener.remove();
        this.onPolygonClickListener = void 0;
      }
      if (this.onCircleClickListener) {
        this.onCircleClickListener.remove();
        this.onCircleClickListener = void 0;
      }
      if (this.onMarkerDragStartListener) {
        this.onMarkerDragStartListener.remove();
        this.onMarkerDragStartListener = void 0;
      }
      if (this.onMarkerDragListener) {
        this.onMarkerDragListener.remove();
        this.onMarkerDragListener = void 0;
      }
      if (this.onMarkerDragEndListener) {
        this.onMarkerDragEndListener.remove();
        this.onMarkerDragEndListener = void 0;
      }
      if (this.onMyLocationButtonClickListener) {
        this.onMyLocationButtonClickListener.remove();
        this.onMyLocationButtonClickListener = void 0;
      }
      if (this.onMyLocationClickListener) {
        this.onMyLocationClickListener.remove();
        this.onMyLocationClickListener = void 0;
      }
    });
  }
  generateCallback(callback) {
    const mapId = this.id;
    return (data) => {
      if (data.mapId == mapId) {
        callback(data);
      }
    };
  }
};

// node_modules/@capacitor/synapse/dist/synapse.mjs
function s(t) {
  t.CapacitorUtils.Synapse = new Proxy({}, {
    get(e, o) {
      return new Proxy({}, {
        get(w, r) {
          return (c, p, n) => {
            const i = t.Capacitor.Plugins[o];
            if (i === void 0) {
              n(new Error(`Capacitor plugin ${o} not found`));
              return;
            }
            if (typeof i[r] != "function") {
              n(new Error(`Method ${r} not found in Capacitor plugin ${o}`));
              return;
            }
            (() => __async(this, null, function* () {
              try {
                const a = yield i[r](c);
                p(a);
              } catch (a) {
                n(a);
              }
            }))();
          };
        }
      });
    }
  });
}
function u(t) {
  t.CapacitorUtils.Synapse = new Proxy({}, {
    get(e, o) {
      return t.cordova.plugins[o];
    }
  });
}
function y(t = false) {
  window.CapacitorUtils = window.CapacitorUtils || {}, window.Capacitor !== void 0 && !t ? s(window) : window.cordova !== void 0 && u(window);
}

// node_modules/@capacitor/geolocation/dist/esm/index.js
var Geolocation = registerPlugin("Geolocation", {
  web: () => import("./web-W6PRZLZN.js").then((m) => new m.GeolocationWeb())
});
y();

// src/app/pages/championship/championship-detail/championship-detail.page.ts
var _c0 = ["map"];
var _c1 = () => ["yes"];
function ChampionshipDetailPage_ng_container_0_capacitor_google_map_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "capacitor-google-map", null, 2);
  }
}
function ChampionshipDetailPage_ng_container_0_ion_item_29_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-icon", 23);
    \u0275\u0275listener("click", function ChampionshipDetailPage_ng_container_0_ion_item_29_ion_icon_5_Template_ion_icon_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const game_r4 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openMaps(game_r4));
    });
    \u0275\u0275elementEnd();
  }
}
function ChampionshipDetailPage_ng_container_0_ion_item_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275element(1, "ion-icon", 21);
    \u0275\u0275elementStart(2, "ion-label", 13)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, ChampionshipDetailPage_ng_container_0_ion_item_29_ion_icon_5_Template, 1, 0, "ion-icon", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const game_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", game_r4.location, " ", game_r4.city, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r4.longitude);
  }
}
function ChampionshipDetailPage_ng_container_0_ion_item_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275element(1, "ion-icon", 24);
    \u0275\u0275elementStart(2, "ion-label", 13)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(game_r4.result);
  }
}
function ChampionshipDetailPage_ng_container_0_ion_item_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275element(1, "ion-icon", 25);
    \u0275\u0275elementStart(2, "ion-label", 13)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", game_r4.referee1, " ", game_r4.referee2, "");
  }
}
function ChampionshipDetailPage_ng_container_0_ion_item_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275element(1, "ion-icon", 26);
    \u0275\u0275elementStart(2, "ion-label", 13)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(game_r4.spectators);
  }
}
function ChampionshipDetailPage_ng_container_0_ion_list_38_ng_container_5_ion_fab_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-fab-button", 32);
    \u0275\u0275listener("click", function ChampionshipDetailPage_ng_container_0_ion_list_38_ng_container_5_ion_fab_button_1_Template_ion_fab_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const game_r4 = \u0275\u0275nextContext(3).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggle(true, game_r4));
    });
    \u0275\u0275element(1, "ion-icon", 33);
    \u0275\u0275elementEnd();
  }
}
function ChampionshipDetailPage_ng_container_0_ion_list_38_ng_container_5_ion_fab_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-fab-button", 34);
    \u0275\u0275listener("click", function ChampionshipDetailPage_ng_container_0_ion_list_38_ng_container_5_ion_fab_button_2_Template_ion_fab_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const game_r4 = \u0275\u0275nextContext(3).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggle(true, game_r4));
    });
    \u0275\u0275element(1, "ion-icon", 35);
    \u0275\u0275elementEnd();
  }
}
function ChampionshipDetailPage_ng_container_0_ion_list_38_ng_container_5_ion_fab_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-fab-button", 36);
    \u0275\u0275listener("click", function ChampionshipDetailPage_ng_container_0_ion_list_38_ng_container_5_ion_fab_button_3_Template_ion_fab_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const game_r4 = \u0275\u0275nextContext(3).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggle(false, game_r4));
    });
    \u0275\u0275element(1, "ion-icon", 37);
    \u0275\u0275elementEnd();
  }
}
function ChampionshipDetailPage_ng_container_0_ion_list_38_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChampionshipDetailPage_ng_container_0_ion_list_38_ng_container_5_ion_fab_button_1_Template, 2, 0, "ion-fab-button", 29)(2, ChampionshipDetailPage_ng_container_0_ion_list_38_ng_container_5_ion_fab_button_2_Template, 2, 0, "ion-fab-button", 30)(3, ChampionshipDetailPage_ng_container_0_ion_list_38_ng_container_5_ion_fab_button_3_Template, 2, 0, "ion-fab-button", 31);
    \u0275\u0275elementStart(4, "ion-label");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const game_r4 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r4.status === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r4.status === false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r4.status === true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "common.my__status"));
  }
}
function ChampionshipDetailPage_ng_container_0_ion_list_38_ng_container_6_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275element(1, "ion-icon", 38);
    \u0275\u0275elementStart(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-button", 39);
    \u0275\u0275listener("click", function ChampionshipDetailPage_ng_container_0_ion_list_38_ng_container_6_ion_item_1_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const game_r4 = \u0275\u0275nextContext(3).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAll(true, game_r4));
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const game_r4 = \u0275\u0275nextContext(3).ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(4, 3, "common.noreply"), ": ", game_r4["unrespondedMembers"].length, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "common.alle_anmelden"));
  }
}
function ChampionshipDetailPage_ng_container_0_ion_list_38_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChampionshipDetailPage_ng_container_0_ion_list_38_ng_container_6_ion_item_1_Template, 8, 7, "ion-item", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const teamAdminList_r9 = ctx.ngIf;
    const game_r4 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r4["unrespondedMembers"].length > 0 && ctx_r1.isTeamAdmin(teamAdminList_r9, game_r4.teamId));
  }
}
function ChampionshipDetailPage_ng_container_0_ion_list_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 27)(1, "ion-list-header");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-item", 28);
    \u0275\u0275template(5, ChampionshipDetailPage_ng_container_0_ion_list_38_ng_container_5_Template, 7, 6, "ng-container", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ChampionshipDetailPage_ng_container_0_ion_list_38_ng_container_6_Template, 2, 1, "ng-container", 8);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const game_r4 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    const loadingStatus_r10 = \u0275\u0275reference(3);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "common.attendances__absences"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", game_r4.hasOwnProperty("status"))("ngIfElse", loadingStatus_r10);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(7, 7, ctx_r1.teamAdminList$));
  }
}
function ChampionshipDetailPage_ng_container_0_ion_accordion_41_ion_item_sliding_8_ion_badge_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r13);
  }
}
function ChampionshipDetailPage_ng_container_0_ion_accordion_41_ion_item_sliding_8_ng_container_7_ion_item_options_1_ion_item_option_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-option", 53);
    \u0275\u0275listener("click", function ChampionshipDetailPage_ng_container_0_ion_accordion_41_ion_item_sliding_8_ng_container_7_ion_item_options_1_ion_item_option_1_Template_ion_item_option_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const member_r12 = \u0275\u0275nextContext(3).$implicit;
      const item_r15 = \u0275\u0275reference(1);
      const game_r4 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleItem(item_r15, true, game_r4, member_r12.id));
    });
    \u0275\u0275element(1, "ion-icon", 54);
    \u0275\u0275elementEnd();
  }
}
function ChampionshipDetailPage_ng_container_0_ion_accordion_41_ion_item_sliding_8_ng_container_7_ion_item_options_1_ion_item_option_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-option", 55);
    \u0275\u0275listener("click", function ChampionshipDetailPage_ng_container_0_ion_accordion_41_ion_item_sliding_8_ng_container_7_ion_item_options_1_ion_item_option_2_Template_ion_item_option_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const member_r12 = \u0275\u0275nextContext(3).$implicit;
      const item_r15 = \u0275\u0275reference(1);
      const game_r4 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleItem(item_r15, false, game_r4, member_r12.id));
    });
    \u0275\u0275element(1, "ion-icon", 56);
    \u0275\u0275elementEnd();
  }
}
function ChampionshipDetailPage_ng_container_0_ion_accordion_41_ion_item_sliding_8_ng_container_7_ion_item_options_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item-options", 50);
    \u0275\u0275template(1, ChampionshipDetailPage_ng_container_0_ion_accordion_41_ion_item_sliding_8_ng_container_7_ion_item_options_1_ion_item_option_1_Template, 2, 0, "ion-item-option", 51)(2, ChampionshipDetailPage_ng_container_0_ion_accordion_41_ion_item_sliding_8_ng_container_7_ion_item_options_1_ion_item_option_2_Template, 2, 0, "ion-item-option", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r12.status === false || member_r12.status === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r12.status === true || member_r12.status === null);
  }
}
function ChampionshipDetailPage_ng_container_0_ion_accordion_41_ion_item_sliding_8_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChampionshipDetailPage_ng_container_0_ion_accordion_41_ion_item_sliding_8_ng_container_7_ion_item_options_1_Template, 3, 2, "ion-item-options", 49);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const teamAdminList_r17 = ctx.ngIf;
    const game_r4 = \u0275\u0275nextContext(3).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTeamAdmin(teamAdminList_r17, game_r4.teamId));
  }
}
function ChampionshipDetailPage_ng_container_0_ion_accordion_41_ion_item_sliding_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 3)(2, "ion-item", 44);
    \u0275\u0275element(3, "ion-icon", 45);
    \u0275\u0275elementStart(4, "ion-label", 46);
    \u0275\u0275listener("click", function ChampionshipDetailPage_ng_container_0_ion_accordion_41_ion_item_sliding_8_Template_ion_label_click_4_listener() {
      const member_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openMember(member_r12));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ChampionshipDetailPage_ng_container_0_ion_accordion_41_ion_item_sliding_8_ion_badge_6_Template, 2, 1, "ion-badge", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ChampionshipDetailPage_ng_container_0_ion_accordion_41_ion_item_sliding_8_ng_container_7_Template, 2, 1, "ng-container", 8);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", member_r12.firstName, " ", member_r12.lastName, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", member_r12.roles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(8, 4, ctx_r1.teamAdminList$));
  }
}
function ChampionshipDetailPage_ng_container_0_ion_accordion_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-accordion", 40);
    \u0275\u0275text(1, "> ");
    \u0275\u0275elementStart(2, "ion-item", 41)(3, "ion-label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 42)(7, "ion-list");
    \u0275\u0275template(8, ChampionshipDetailPage_ng_container_0_ion_accordion_41_ion_item_sliding_8_Template, 9, 6, "ion-item-sliding", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 3, "common.present"), ": ", game_r4["attendeeListTrue"].length, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", game_r4["attendeeListTrue"]);
  }
}
function ChampionshipDetailPage_ng_container_0_ion_accordion_42_ion_item_sliding_8_ion_badge_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r20);
  }
}
function ChampionshipDetailPage_ng_container_0_ion_accordion_42_ion_item_sliding_8_ng_container_7_ion_item_options_1_ion_item_option_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-option", 53);
    \u0275\u0275listener("click", function ChampionshipDetailPage_ng_container_0_ion_accordion_42_ion_item_sliding_8_ng_container_7_ion_item_options_1_ion_item_option_1_Template_ion_item_option_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const member_r19 = \u0275\u0275nextContext(3).$implicit;
      const item_r22 = \u0275\u0275reference(1);
      const game_r4 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleItem(item_r22, true, game_r4, member_r19.id));
    });
    \u0275\u0275element(1, "ion-icon", 54);
    \u0275\u0275elementEnd();
  }
}
function ChampionshipDetailPage_ng_container_0_ion_accordion_42_ion_item_sliding_8_ng_container_7_ion_item_options_1_ion_item_option_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-option", 55);
    \u0275\u0275listener("click", function ChampionshipDetailPage_ng_container_0_ion_accordion_42_ion_item_sliding_8_ng_container_7_ion_item_options_1_ion_item_option_2_Template_ion_item_option_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const member_r19 = \u0275\u0275nextContext(3).$implicit;
      const item_r22 = \u0275\u0275reference(1);
      const game_r4 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleItem(item_r22, false, game_r4, member_r19.id));
    });
    \u0275\u0275element(1, "ion-icon", 56);
    \u0275\u0275elementEnd();
  }
}
function ChampionshipDetailPage_ng_container_0_ion_accordion_42_ion_item_sliding_8_ng_container_7_ion_item_options_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item-options", 50);
    \u0275\u0275template(1, ChampionshipDetailPage_ng_container_0_ion_accordion_42_ion_item_sliding_8_ng_container_7_ion_item_options_1_ion_item_option_1_Template, 2, 0, "ion-item-option", 51)(2, ChampionshipDetailPage_ng_container_0_ion_accordion_42_ion_item_sliding_8_ng_container_7_ion_item_options_1_ion_item_option_2_Template, 2, 0, "ion-item-option", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r19 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r19.status === false || member_r19.status === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r19.status === true || member_r19.status === null);
  }
}
function ChampionshipDetailPage_ng_container_0_ion_accordion_42_ion_item_sliding_8_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChampionshipDetailPage_ng_container_0_ion_accordion_42_ion_item_sliding_8_ng_container_7_ion_item_options_1_Template, 3, 2, "ion-item-options", 49);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const teamAdminList_r24 = ctx.ngIf;
    const game_r4 = \u0275\u0275nextContext(3).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTeamAdmin(teamAdminList_r24, game_r4.teamId));
  }
}
function ChampionshipDetailPage_ng_container_0_ion_accordion_42_ion_item_sliding_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 3)(2, "ion-item", 44);
    \u0275\u0275element(3, "ion-icon", 58);
    \u0275\u0275elementStart(4, "ion-label", 46);
    \u0275\u0275listener("click", function ChampionshipDetailPage_ng_container_0_ion_accordion_42_ion_item_sliding_8_Template_ion_label_click_4_listener() {
      const member_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openMember(member_r19));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ChampionshipDetailPage_ng_container_0_ion_accordion_42_ion_item_sliding_8_ion_badge_6_Template, 2, 1, "ion-badge", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ChampionshipDetailPage_ng_container_0_ion_accordion_42_ion_item_sliding_8_ng_container_7_Template, 2, 1, "ng-container", 8);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r19 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", member_r19.firstName, " ", member_r19.lastName, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", member_r19.roles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(8, 4, ctx_r1.teamAdminList$));
  }
}
function ChampionshipDetailPage_ng_container_0_ion_accordion_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-accordion", 57);
    \u0275\u0275text(1, "> ");
    \u0275\u0275elementStart(2, "ion-item", 41)(3, "ion-label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 42)(7, "ion-list");
    \u0275\u0275template(8, ChampionshipDetailPage_ng_container_0_ion_accordion_42_ion_item_sliding_8_Template, 9, 6, "ion-item-sliding", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 3, "common.absent"), ": ", game_r4["attendeeListFalse"].length, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", game_r4["attendeeListFalse"]);
  }
}
function ChampionshipDetailPage_ng_container_0_ion_accordion_43_ion_item_sliding_7_ion_badge_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r27 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r27);
  }
}
function ChampionshipDetailPage_ng_container_0_ion_accordion_43_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-option", 53);
    \u0275\u0275listener("click", function ChampionshipDetailPage_ng_container_0_ion_accordion_43_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_1_Template_ion_item_option_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const member_r26 = \u0275\u0275nextContext(3).$implicit;
      const item_r29 = \u0275\u0275reference(1);
      const game_r4 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleItem(item_r29, true, game_r4, member_r26.id));
    });
    \u0275\u0275element(1, "ion-icon", 54);
    \u0275\u0275elementEnd();
  }
}
function ChampionshipDetailPage_ng_container_0_ion_accordion_43_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-option", 55);
    \u0275\u0275listener("click", function ChampionshipDetailPage_ng_container_0_ion_accordion_43_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_2_Template_ion_item_option_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const member_r26 = \u0275\u0275nextContext(3).$implicit;
      const item_r29 = \u0275\u0275reference(1);
      const game_r4 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleItem(item_r29, false, game_r4, member_r26.id));
    });
    \u0275\u0275element(1, "ion-icon", 56);
    \u0275\u0275elementEnd();
  }
}
function ChampionshipDetailPage_ng_container_0_ion_accordion_43_ion_item_sliding_7_ng_container_7_ion_item_options_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item-options", 50);
    \u0275\u0275template(1, ChampionshipDetailPage_ng_container_0_ion_accordion_43_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_1_Template, 2, 0, "ion-item-option", 51)(2, ChampionshipDetailPage_ng_container_0_ion_accordion_43_ion_item_sliding_7_ng_container_7_ion_item_options_1_ion_item_option_2_Template, 2, 0, "ion-item-option", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r26 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r26.status === false || member_r26.status === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r26.status === true || member_r26.status === null);
  }
}
function ChampionshipDetailPage_ng_container_0_ion_accordion_43_ion_item_sliding_7_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChampionshipDetailPage_ng_container_0_ion_accordion_43_ion_item_sliding_7_ng_container_7_ion_item_options_1_Template, 3, 2, "ion-item-options", 49);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const teamAdminList_r31 = ctx.ngIf;
    const game_r4 = \u0275\u0275nextContext(3).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTeamAdmin(teamAdminList_r31, game_r4.teamId));
  }
}
function ChampionshipDetailPage_ng_container_0_ion_accordion_43_ion_item_sliding_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding", null, 3)(2, "ion-item", 44);
    \u0275\u0275element(3, "ion-icon", 38);
    \u0275\u0275elementStart(4, "ion-label", 46);
    \u0275\u0275listener("click", function ChampionshipDetailPage_ng_container_0_ion_accordion_43_ion_item_sliding_7_Template_ion_label_click_4_listener() {
      const member_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openMember(member_r26));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ChampionshipDetailPage_ng_container_0_ion_accordion_43_ion_item_sliding_7_ion_badge_6_Template, 2, 1, "ion-badge", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ChampionshipDetailPage_ng_container_0_ion_accordion_43_ion_item_sliding_7_ng_container_7_Template, 2, 1, "ng-container", 8);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r26 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", member_r26.firstName, " ", member_r26.lastName, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", member_r26.roles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(8, 4, ctx_r1.teamAdminList$));
  }
}
function ChampionshipDetailPage_ng_container_0_ion_accordion_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-accordion", 59)(1, "ion-item", 41)(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 42)(6, "ion-list");
    \u0275\u0275template(7, ChampionshipDetailPage_ng_container_0_ion_accordion_43_ion_item_sliding_7_Template, 9, 6, "ion-item-sliding", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const game_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(4, 3, "common.noreply"), ": ", game_r4["unrespondedMembers"].length, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", game_r4["unrespondedMembers"]);
  }
}
function ChampionshipDetailPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-content")(2, "ion-fab", 5)(3, "ion-fab-button", 6);
    \u0275\u0275listener("click", function ChampionshipDetailPage_ng_container_0_Template_ion_fab_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275element(4, "ion-icon", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, ChampionshipDetailPage_ng_container_0_capacitor_google_map_5_Template, 2, 0, "capacitor-google-map", 8);
    \u0275\u0275elementStart(6, "ion-list", 9)(7, "ion-item")(8, "ion-avatar", 10);
    \u0275\u0275element(9, "img", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ion-label")(11, "h2");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "ion-item")(14, "ion-avatar", 10);
    \u0275\u0275element(15, "img", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "ion-label")(17, "h2");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "ion-item");
    \u0275\u0275element(20, "ion-icon", 12);
    \u0275\u0275elementStart(21, "ion-label", 13)(22, "h2");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "ion-item");
    \u0275\u0275element(25, "ion-icon", 14);
    \u0275\u0275elementStart(26, "ion-label")(27, "h2");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(29, ChampionshipDetailPage_ng_container_0_ion_item_29_Template, 6, 3, "ion-item", 8);
    \u0275\u0275elementStart(30, "ion-item");
    \u0275\u0275element(31, "ion-icon", 15);
    \u0275\u0275elementStart(32, "ion-label", 13)(33, "h2");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(35, ChampionshipDetailPage_ng_container_0_ion_item_35_Template, 5, 1, "ion-item", 8)(36, ChampionshipDetailPage_ng_container_0_ion_item_36_Template, 5, 2, "ion-item", 8)(37, ChampionshipDetailPage_ng_container_0_ion_item_37_Template, 5, 1, "ion-item", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, ChampionshipDetailPage_ng_container_0_ion_list_38_Template, 8, 9, "ion-list", 16);
    \u0275\u0275elementStart(39, "ion-list", 9)(40, "ion-accordion-group", 17);
    \u0275\u0275template(41, ChampionshipDetailPage_ng_container_0_ion_accordion_41_Template, 9, 5, "ion-accordion", 18)(42, ChampionshipDetailPage_ng_container_0_ion_accordion_42_Template, 9, 5, "ion-accordion", 19)(43, ChampionshipDetailPage_ng_container_0_ion_accordion_43_Template, 8, 5, "ion-accordion", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const game_r4 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", game_r4.latitude && game_r4.longitude && !ctx_r1.platform.is("android"));
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("src", game_r4.teamHomeLogo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r4.teamHome);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("src", game_r4.teamAwayLogo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r4.teamAway);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(game_r4.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", game_r4.date, " ", game_r4.time, " Uhr");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r4.location);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", game_r4.liga, " ", game_r4.teamName, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r4.result && game_r4.result != "0:0(0:0)");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r4.referee1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r4.spectators && game_r4.spectators != "0");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFuture);
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("multiple", true)("value", \u0275\u0275pureFunction0(22, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r4["attendeeListTrue"].length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r4["attendeeListFalse"].length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", game_r4["unrespondedMembers"].length > 0);
  }
}
function ChampionshipDetailPage_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-skeleton-text", 60)(1, "ion-skeleton-text", 61);
  }
}
function ChampionshipDetailPage_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-fab", 5)(2, "ion-fab-button", 62);
    \u0275\u0275element(3, "ion-icon", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 63);
    \u0275\u0275element(5, "ion-skeleton-text", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-list", 9)(7, "ion-item")(8, "ion-avatar", 10);
    \u0275\u0275element(9, "ion-skeleton-text", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ion-label");
    \u0275\u0275element(11, "ion-skeleton-text", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "ion-item")(13, "ion-avatar", 10);
    \u0275\u0275element(14, "ion-skeleton-text", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ion-label");
    \u0275\u0275element(16, "ion-skeleton-text", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "ion-item");
    \u0275\u0275element(18, "ion-icon", 12);
    \u0275\u0275elementStart(19, "ion-label", 13);
    \u0275\u0275element(20, "ion-skeleton-text", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "ion-item");
    \u0275\u0275element(22, "ion-icon", 14);
    \u0275\u0275elementStart(23, "ion-label");
    \u0275\u0275element(24, "ion-skeleton-text", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "ion-item");
    \u0275\u0275element(26, "ion-icon", 21);
    \u0275\u0275elementStart(27, "ion-label", 13);
    \u0275\u0275element(28, "ion-skeleton-text", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "ion-icon", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ion-item");
    \u0275\u0275element(31, "ion-icon", 15);
    \u0275\u0275elementStart(32, "ion-label");
    \u0275\u0275element(33, "ion-skeleton-text", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "ion-item");
    \u0275\u0275element(35, "ion-icon", 24);
    \u0275\u0275elementStart(36, "ion-label");
    \u0275\u0275element(37, "ion-skeleton-text", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "ion-item");
    \u0275\u0275element(39, "ion-icon", 25);
    \u0275\u0275elementStart(40, "ion-label");
    \u0275\u0275element(41, "ion-skeleton-text", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "ion-item");
    \u0275\u0275element(43, "ion-icon", 26);
    \u0275\u0275elementStart(44, "ion-label");
    \u0275\u0275element(45, "ion-skeleton-text", 73);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "ion-list", 27)(47, "ion-list-header");
    \u0275\u0275element(48, "ion-skeleton-text", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "ion-item");
    \u0275\u0275element(50, "ion-skeleton-text", 75);
    \u0275\u0275elementStart(51, "ion-label");
    \u0275\u0275element(52, "ion-skeleton-text", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "ion-item");
    \u0275\u0275element(54, "ion-icon", 77);
    \u0275\u0275elementStart(55, "ion-label");
    \u0275\u0275element(56, "ion-skeleton-text", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "ion-skeleton-text", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "ion-list", 9)(59, "ion-accordion-group", 17)(60, "ion-accordion", 40)(61, "ion-item", 41)(62, "ion-label");
    \u0275\u0275element(63, "ion-skeleton-text", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 42)(65, "ion-list")(66, "ion-item");
    \u0275\u0275element(67, "ion-icon", 81);
    \u0275\u0275elementStart(68, "ion-label");
    \u0275\u0275element(69, "ion-skeleton-text", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275element(70, "ion-skeleton-text", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "ion-item");
    \u0275\u0275element(72, "ion-icon", 81);
    \u0275\u0275elementStart(73, "ion-label");
    \u0275\u0275element(74, "ion-skeleton-text", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "ion-skeleton-text", 82);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(76, "ion-accordion", 57)(77, "ion-item", 41)(78, "ion-label");
    \u0275\u0275element(79, "ion-skeleton-text", 83);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(80, "ion-accordion", 59)(81, "ion-item", 41)(82, "ion-label");
    \u0275\u0275element(83, "ion-skeleton-text", 74);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(40);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(12);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("multiple", true)("value", \u0275\u0275pureFunction0(5, _c1));
  }
}
var _ChampionshipDetailPage = class _ChampionshipDetailPage {
  constructor(modalCtrl, platform, navParams, userProfileService, alertCtrl, championshipService, toastController, authService, fbService, cdr, translate) {
    this.modalCtrl = modalCtrl;
    this.platform = platform;
    this.navParams = navParams;
    this.userProfileService = userProfileService;
    this.alertCtrl = alertCtrl;
    this.championshipService = championshipService;
    this.toastController = toastController;
    this.authService = authService;
    this.fbService = fbService;
    this.cdr = cdr;
    this.translate = translate;
    this.mode = "yes";
    this.teamAdminList$ = this.fbService.getTeamAdminList();
  }
  ngOnInit() {
    this.game = this.navParams.get("data");
    this.game$ = this.getGame(this.game.teamId, this.game.id);
    this.geolocationPermission();
  }
  geolocationPermission() {
    return __async(this, null, function* () {
      console.log("\xDCberpr\xFCfe Standort-Berechtigungen...");
      try {
        const permission = yield Geolocation.checkPermissions();
        console.log("Aktueller Berechtigungsstatus:", permission.location, permission.coarseLocation);
        switch (permission.location) {
          case "granted":
            console.log("Standort-Berechtigung bereits erteilt");
            return true;
          case "prompt":
          case "prompt-with-rationale":
            console.log("Frage Standort-Berechtigung an");
            const newPermission = yield Geolocation.requestPermissions();
            return newPermission.location === "granted";
          case "denied":
            console.log("Standort-Berechtigung verweigert");
            yield this.showLocationPermissionAlert();
            return false;
          default:
            console.log("Unbekannter Berechtigungsstatus");
            return false;
        }
      } catch (e) {
        console.error("Fehler bei der Berechtigungsabfrage:", e);
        return false;
      }
    });
  }
  showLocationPermissionAlert() {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "Standort-Berechtigung ben\xF6tigt",
        message: "Um die Karte und Navigationsfunktionen nutzen zu k\xF6nnen, wird Zugriff auf Ihren Standort ben\xF6tigt. Bitte aktivieren Sie die Standort-Berechtigung in den Einstellungen.",
        buttons: ["OK"]
      });
      yield alert.present();
    });
  }
  isTeamAdmin(teamAdminList, teamId) {
    return teamAdminList && teamAdminList.some((team) => team.id === teamId);
  }
  ionViewDidEnter() {
    this.game$.pipe(take(1)).subscribe((game) => {
      console.log(">> game", game);
      if (!this.newMap && game) {
        console.log("setMap");
        if (!this.newMap)
          this.setMap();
      } else {
        console.log("MAP ERROR?");
      }
    });
  }
  ngOnDestroy() {
    if (this.newMap) {
      this.newMap.destroy();
    }
  }
  // ng
  getGame(teamId, gameId) {
    return this.authService.getUser$().pipe(take(1), tap((user) => {
      this.user = user;
      if (!user)
        throw new Error("User not found");
    }), switchMap(() => this.championshipService.getTeamGameRef(teamId, gameId)), switchMap((game) => {
      if (!game)
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
              return this.championshipService.getTeamGameAttendeesRef(teamId, gameId).pipe(map((attendees) => {
                const attendeeDetails = attendees.map((attendee) => {
                  const detail = teamMembersWithDetails.find((member) => member.id === attendee.id);
                  return detail ? __spreadProps(__spreadValues({}, detail), { status: attendee.status }) : null;
                }).filter((item) => item !== null);
                const attendeeListTrue = attendeeDetails.filter((att) => att.status === true).sort((a, b) => a.firstName.localeCompare(b.firstName));
                const attendeeListFalse = attendeeDetails.filter((att) => att.status === false).sort((a, b) => a.firstName.localeCompare(b.firstName));
                const respondedIds = new Set(attendeeDetails.map((att) => att.id));
                const unrespondedMembers = teamMembersWithDetails.filter((member) => !respondedIds.has(member.id)).map((member) => __spreadProps(__spreadValues({}, member), { status: null })).sort((a, b) => a.firstName.localeCompare(b.firstName));
                const userAttendee = attendeeDetails.find((att) => att.id === this.user.uid);
                const status = userAttendee ? userAttendee.status : null;
                return __spreadProps(__spreadValues({}, game), {
                  team,
                  // Add team details here
                  teamId,
                  attendees: attendeeDetails,
                  attendeeListTrue,
                  attendeeListFalse,
                  unrespondedMembers,
                  status
                });
              }), catchError((err) => {
                console.error("Error fetching attendees:", err);
                return of(__spreadProps(__spreadValues({}, game), {
                  team,
                  // Add team details here
                  teamId,
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
          return of(__spreadProps(__spreadValues({}, game), {
            team,
            // Add team details here
            teamId,
            attendees: [],
            attendeeListTrue: [],
            attendeeListFalse: [],
            unrespondedMembers: [],
            status: null
          }));
        }));
      }));
    }), catchError((err) => {
      console.error("Error in getGameWithAttendees:", err);
      return of(null);
    }));
  }
  toggleAll(status, game) {
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
              for (let member of game["unrespondedMembers"]) {
                console.log(`Set Status ${status} for user ${this.user.uid} and team ${this.game.teamId} and game ${game.id}`);
                yield this.championshipService.setTeamGameAttendeeStatusAdmin(status, this.game.teamId, game.id, member.id).catch((e) => {
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
  toggle(status, game) {
    return __async(this, null, function* () {
      console.log(`Set Status ${status} for user ${this.user.uid} and team ${game.teamId} and game ${game.id}`);
      console.log(game);
      const newStartDate = game.dateTime.toDate();
      newStartDate.setHours(Number(game.time.substring(0, 2)));
      console.log(newStartDate);
      console.log("Grenzwert ");
      const championshipTreshold = game.team.championshipThreshold || 0;
      console.log(championshipTreshold);
      if (newStartDate.getTime() - (/* @__PURE__ */ new Date()).getTime() < 1e3 * 60 * 60 * championshipTreshold && status == false && championshipTreshold) {
        console.log("too late");
        yield this.tooLateToggle();
      } else {
        yield this.championshipService.setTeamGameAttendeeStatus(status, game.teamId, game.id);
        this.presentToast();
      }
    });
  }
  toggleItem(slidingItem, status, game, memberId) {
    return __async(this, null, function* () {
      slidingItem.closeOpened();
      console.log(`Set Status ${status} for user ${memberId} and team ${game.teamId} and game ${game.id}`);
      yield this.championshipService.setTeamGameAttendeeStatusAdmin(status, game.teamId, game.id, memberId);
      this.presentToast();
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
  close() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(null, "close");
    });
  }
  confirm() {
    return __async(this, null, function* () {
      return yield this.modalCtrl.dismiss(this.game, "confirm");
    });
  }
  setMap() {
    return __async(this, null, function* () {
      if (this.mapRef == void 0 || this.mapRef == null) {
        return;
      }
      console.log("setMap");
      this.newMap = yield GoogleMap.create({
        id: "my-map-" + this.game.id,
        // Unique identifier for this map instance
        element: this.mapRef.nativeElement,
        // mapRef, // reference to the capacitor-google-map element
        apiKey: environment.googleMapsApiKey,
        // Your Google Maps API Key
        config: {
          center: {
            // The initial position to be rendered by the map
            lat: Number(this.game.latitude),
            lng: Number(this.game.longitude)
          },
          zoom: 12
          // The initial zoom level to be rendered by the map
        }
      });
      this.newMap.addMarker({
        title: `${this.game.location} in ${this.game.city}`,
        coordinate: {
          lat: Number(this.game.latitude),
          lng: Number(this.game.longitude)
        },
        snippet: `${this.game.location} in ${this.game.city}`
      });
      try {
        this.coordinates = yield Geolocation.getCurrentPosition();
        if (this.coordinates.coords.latitude && this.coordinates.coords.longitude) {
          this.newMap.addMarker({
            title: "Meine Position",
            coordinate: {
              lat: this.coordinates.coords.latitude,
              lng: this.coordinates.coords.longitude
            },
            isFlat: true,
            snippet: "Meine Position"
          });
        }
      } catch (e) {
        console.log("no coordinates on map");
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
  openLineup(game) {
    return __async(this, null, function* () {
      const modal = yield this.modalCtrl.create({
        component: LineupPage,
        presentingElement: yield this.modalCtrl.getTop(),
        canDismiss: true,
        showBackdrop: true,
        componentProps: {
          data: game
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
  openMaps(game) {
    return __async(this, null, function* () {
      const coordinates = yield Geolocation.getCurrentPosition();
      if (coordinates.coords.longitude && coordinates.coords.latitude) {
        Browser.open({
          url: "https://www.google.com/maps/dir/?api=1&destination=" + game.latitude + "," + game.longitude + "&origin=" + coordinates.coords.latitude + "," + coordinates.coords.longitude
        }).catch((e) => {
          console.log(e);
        });
      } else {
        Browser.open({
          url: "https://www.google.com/maps/dir/?api=1&destination=" + game.latitude + "," + game.longitude
        }).catch((e) => {
          console.log(e);
        });
      }
    });
  }
};
_ChampionshipDetailPage.\u0275fac = function ChampionshipDetailPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChampionshipDetailPage)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(NavParams), \u0275\u0275directiveInject(UserProfileService), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ChampionshipService), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FirebaseService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(TranslateService));
};
_ChampionshipDetailPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChampionshipDetailPage, selectors: [["app-championship-detail"]], viewQuery: function ChampionshipDetailPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mapRef = _t.first);
  }
}, inputs: { game: [0, "data", "game"], isFuture: "isFuture" }, standalone: false, decls: 6, vars: 4, consts: [["loadingStatus", ""], ["loading", ""], ["map", ""], ["item", ""], [4, "ngIf", "ngIfElse"], ["vertical", "top", "horizontal", "end"], ["size", "small", 3, "click"], ["name", "close", "size", "small"], [4, "ngIf"], [3, "inset"], ["slot", "start"], [3, "src"], ["slot", "start", "name", "home-outline"], [1, "ion-text-wrap"], ["slot", "start", "name", "calendar-outline"], ["slot", "start", "name", "trophy-outline"], ["lines", "none", 3, "inset", 4, "ngIf"], [3, "multiple", "value"], ["value", "yes", 4, "ngIf"], ["value", "no", 4, "ngIf"], ["value", "null", 4, "ngIf"], ["slot", "start", "name", "location-outline"], ["color", "primary", "slot", "end", "name", "map-outline", 3, "click", 4, "ngIf"], ["color", "primary", "slot", "end", "name", "map-outline", 3, "click"], ["slot", "start", "name", "podium-outline"], ["slot", "start", "name", "person-circle-outline"], ["slot", "start", "name", "people-outline"], ["lines", "none", 3, "inset"], [1, "myclubStatus"], ["size", "small", "color", "warning", "slot", "start", 3, "click", 4, "ngIf"], ["size", "small", "color", "danger", "slot", "start", 3, "click", 4, "ngIf"], ["size", "small", "color", "success", "slot", "start", 3, "click", 4, "ngIf"], ["size", "small", "color", "warning", "slot", "start", 3, "click"], ["name", "help-circle"], ["size", "small", "color", "danger", "slot", "start", 3, "click"], ["name", "close-circle"], ["size", "small", "color", "success", "slot", "start", 3, "click"], ["name", "checkmark-circle"], ["color", "warning", "slot", "start", "name", "help-circle"], ["fill", "clear", "slot", "end", 3, "click"], ["value", "yes"], ["slot", "header", "color", "light"], ["slot", "content"], [4, "ngFor", "ngForOf"], ["detail", "true"], ["color", "success", "slot", "start", "name", "checkmark-circle"], [3, "click"], ["slot", "end", 4, "ngFor", "ngForOf"], ["slot", "end"], ["side", "end", 4, "ngIf"], ["side", "end"], ["color", "success", 3, "click", 4, "ngIf"], ["color", "danger", 3, "click", 4, "ngIf"], ["color", "success", 3, "click"], ["slot", "icon-only", "name", "checkmark-circle"], ["color", "danger", 3, "click"], ["slot", "icon-only", "name", "close-circle"], ["value", "no"], ["color", "danger", "slot", "start", "name", "close-circle"], ["value", "null"], ["animated", "", 2, "width", "10%"], ["animated", "", 2, "width", "60%"], ["size", "small"], [2, "width", "100%", "height", "200px", "background", "#e0e0e0"], ["animated", "", 2, "width", "100%", "height", "100%"], ["animated", ""], ["animated", "", 2, "width", "70%"], ["animated", "", 2, "width", "85%"], ["animated", "", 2, "width", "40%"], ["slot", "end", "name", "map-outline"], ["animated", "", 2, "width", "50%"], ["animated", "", 2, "width", "30%"], ["animated", "", 2, "width", "65%"], ["animated", "", 2, "width", "25%"], ["animated", "", 2, "width", "140px"], ["animated", "", "slot", "start", 2, "width", "40px", "height", "40px", "border-radius", "50%"], ["animated", "", 2, "width", "100px"], ["slot", "start", "name", "help-circle"], ["animated", "", 2, "width", "120px"], ["slot", "end", "animated", "", 2, "width", "80px"], ["animated", "", 2, "width", "150px"], ["slot", "start", "name", "checkmark-circle"], ["slot", "end", "animated", "", 2, "width", "40px"], ["animated", "", 2, "width", "130px"]], template: function ChampionshipDetailPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ChampionshipDetailPage_ng_container_0_Template, 44, 23, "ng-container", 4);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275template(2, ChampionshipDetailPage_ng_template_2_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, ChampionshipDetailPage_ng_template_4_Template, 84, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const loading_r32 = \u0275\u0275reference(5);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 2, ctx.game$))("ngIfElse", loading_r32);
  }
}, dependencies: [NgForOf, NgIf, IonAccordion, IonAccordionGroup, IonAvatar, IonBadge, IonButton, IonContent, IonFab, IonFabButton, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonSkeletonText, AsyncPipe, TranslatePipe], styles: ["\n\ncapacitor-google-map[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 300px;\n  z-index: 1;\n}\nion-fab[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 32px;\n  right: 16px;\n}\n/*# sourceMappingURL=championship-detail.page.css.map */"] });
var ChampionshipDetailPage = _ChampionshipDetailPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChampionshipDetailPage, { className: "ChampionshipDetailPage", filePath: "src/app/pages/championship/championship-detail/championship-detail.page.ts", lineNumber: 47 });
})();

export {
  environment,
  ChampionshipDetailPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQudHMiLCJub2RlX21vZHVsZXMvQGNhcGFjaXRvci9nb29nbGUtbWFwcy9kaXN0L2VzbS9tYXAuanMiLCJub2RlX21vZHVsZXMvQGNhcGFjaXRvci9zeW5hcHNlL2Rpc3Qvc3luYXBzZS5tanMiLCJub2RlX21vZHVsZXMvQGNhcGFjaXRvci9nZW9sb2NhdGlvbi9kaXN0L2VzbS9pbmRleC5qcyIsInNyYy9hcHAvcGFnZXMvY2hhbXBpb25zaGlwL2NoYW1waW9uc2hpcC1kZXRhaWwvY2hhbXBpb25zaGlwLWRldGFpbC5wYWdlLnRzIiwic3JjL2FwcC9wYWdlcy9jaGFtcGlvbnNoaXAvY2hhbXBpb25zaGlwLWRldGFpbC9jaGFtcGlvbnNoaXAtZGV0YWlsLnBhZ2UuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgY2FuIGJlIHJlcGxhY2VkIGR1cmluZyBidWlsZCBieSB1c2luZyB0aGUgYGZpbGVSZXBsYWNlbWVudHNgIGFycmF5LlxuLy8gYG5nIGJ1aWxkIC0tcHJvZGAgcmVwbGFjZXMgYGVudmlyb25tZW50LnRzYCB3aXRoIGBlbnZpcm9ubWVudC5wcm9kLnRzYC5cbi8vIFRoZSBsaXN0IG9mIGZpbGUgcmVwbGFjZW1lbnRzIGNhbiBiZSBmb3VuZCBpbiBgYW5ndWxhci5qc29uYC5cblxuZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xuICBmaXJlYmFzZToge1xuICAgIHByb2plY3RJZDogJ215Y2x1Ym1hbmFnZW1lbnQnLFxuICAgIGFwcElkOiAnMTo2MzE1Mjc1NjgzNjA6d2ViOmNlODM3NDcxMjA3ZGEyODFmYzZhNWQnLFxuICAgIGRhdGFiYXNlVVJMOiAnaHR0cHM6Ly9teWNsdWJtYW5hZ2VtZW50LmZpcmViYXNlaW8uY29tJyxcbiAgICBzdG9yYWdlQnVja2V0OiAnbXljbHVibWFuYWdlbWVudC5hcHBzcG90LmNvbScsXG4gICAgbG9jYXRpb25JZDogJ2V1cm9wZS13ZXN0NicsXG4gICAgYXBpS2V5OiAnQUl6YVN5Q0c5X0NZU2JqenV2SnNDMFA2U09ZUTdfakdOMFEyRTVrJyxcbiAgICBhdXRoRG9tYWluOiAnbXljbHVibWFuYWdlbWVudC5maXJlYmFzZWFwcC5jb20nLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiAnNjMxNTI3NTY4MzYwJyxcbiAgfSxcbiAgcHJvZHVjdGlvbjogZmFsc2UsXG4gIGdvb2dsZU1hcHNBcGlLZXk6IFwiQUl6YVN5QU01eDlQMHN5ajlxdHhVbUZzOThuVzBCOTY3eG81MkZ3XCIsXG59O1xuXG4vKlxuICogRm9yIGVhc2llciBkZWJ1Z2dpbmcgaW4gZGV2ZWxvcG1lbnQgbW9kZSwgeW91IGNhbiBpbXBvcnQgdGhlIGZvbGxvd2luZyBmaWxlXG4gKiB0byBpZ25vcmUgem9uZSByZWxhdGVkIGVycm9yIHN0YWNrIGZyYW1lcyBzdWNoIGFzIGB6b25lLnJ1bmAsIGB6b25lRGVsZWdhdGUuaW52b2tlVGFza2AuXG4gKlxuICogVGhpcyBpbXBvcnQgc2hvdWxkIGJlIGNvbW1lbnRlZCBvdXQgaW4gcHJvZHVjdGlvbiBtb2RlIGJlY2F1c2UgaXQgd2lsbCBoYXZlIGEgbmVnYXRpdmUgaW1wYWN0XG4gKiBvbiBwZXJmb3JtYW5jZSBpZiBhbiBlcnJvciBpcyB0aHJvd24uXG4gKi9cbi8vIGltcG9ydCAnem9uZS5qcy9kaXN0L3pvbmUtZXJyb3InOyAgLy8gSW5jbHVkZWQgd2l0aCBBbmd1bGFyIENMSS5cbiIsImltcG9ydCB7IENhcGFjaXRvciB9IGZyb20gJ0BjYXBhY2l0b3IvY29yZSc7XG5pbXBvcnQgeyBMYXRMbmdCb3VuZHMsIE1hcFR5cGUgfSBmcm9tICcuL2RlZmluaXRpb25zJztcbmltcG9ydCB7IENhcGFjaXRvckdvb2dsZU1hcHMgfSBmcm9tICcuL2ltcGxlbWVudGF0aW9uJztcbmNsYXNzIE1hcEN1c3RvbUVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pbm5lckhUTUwgPSAnJztcbiAgICBpZiAoQ2FwYWNpdG9yLmdldFBsYXRmb3JtKCkgPT0gJ2lvcycpIHtcbiAgICAgIHRoaXMuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICAgIHRoaXMuc3R5bGVbJy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nJ10gPSAndG91Y2gnO1xuICAgICAgY29uc3Qgb3ZlcmZsb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG92ZXJmbG93RGl2LnN0eWxlLmhlaWdodCA9ICcyMDAlJztcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGQob3ZlcmZsb3dEaXYpO1xuICAgIH1cbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjYXBhY2l0b3ItZ29vZ2xlLW1hcCcsIE1hcEN1c3RvbUVsZW1lbnQpO1xuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcCB7XG4gIGNvbnN0cnVjdG9yKGlkKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbnVsbDtcbiAgICB0aGlzLmhhbmRsZVNjcm9sbEV2ZW50ID0gKCkgPT4gdGhpcy51cGRhdGVNYXBCb3VuZHMoKTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgYSBHb29nbGUgTWFwXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKiBAcmV0dXJucyBHb29nbGVNYXBcbiAgICovXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBjb25zdCBuZXdNYXAgPSBuZXcgR29vZ2xlTWFwKG9wdGlvbnMuaWQpO1xuICAgIGlmICghb3B0aW9ucy5lbGVtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbnRhaW5lciBlbGVtZW50IGlzIHJlcXVpcmVkJyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmNvbmZpZy5hbmRyb2lkTGl0ZU1vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9ucy5jb25maWcuYW5kcm9pZExpdGVNb2RlID0gZmFsc2U7XG4gICAgfVxuICAgIG5ld01hcC5lbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50O1xuICAgIG5ld01hcC5lbGVtZW50LmRhdGFzZXQuaW50ZXJuYWxJZCA9IG9wdGlvbnMuaWQ7XG4gICAgY29uc3QgZWxlbWVudEJvdW5kcyA9IGF3YWl0IEdvb2dsZU1hcC5nZXRFbGVtZW50Qm91bmRzKG9wdGlvbnMuZWxlbWVudCk7XG4gICAgb3B0aW9ucy5jb25maWcud2lkdGggPSBlbGVtZW50Qm91bmRzLndpZHRoO1xuICAgIG9wdGlvbnMuY29uZmlnLmhlaWdodCA9IGVsZW1lbnRCb3VuZHMuaGVpZ2h0O1xuICAgIG9wdGlvbnMuY29uZmlnLnggPSBlbGVtZW50Qm91bmRzLng7XG4gICAgb3B0aW9ucy5jb25maWcueSA9IGVsZW1lbnRCb3VuZHMueTtcbiAgICBvcHRpb25zLmNvbmZpZy5kZXZpY2VQaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgaWYgKENhcGFjaXRvci5nZXRQbGF0Zm9ybSgpID09ICdhbmRyb2lkJykge1xuICAgICAgbmV3TWFwLmluaXRTY3JvbGxpbmcoKTtcbiAgICB9XG4gICAgaWYgKENhcGFjaXRvci5pc05hdGl2ZVBsYXRmb3JtKCkpIHtcbiAgICAgIG9wdGlvbnMuZWxlbWVudCA9IHt9O1xuICAgICAgY29uc3QgZ2V0TWFwQm91bmRzID0gKCkgPT4ge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCBtYXBSZWN0ID0gKF9iID0gKF9hID0gbmV3TWFwLmVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDoge307XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeDogbWFwUmVjdC54LFxuICAgICAgICAgIHk6IG1hcFJlY3QueSxcbiAgICAgICAgICB3aWR0aDogbWFwUmVjdC53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IG1hcFJlY3QuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgY29uc3Qgb25EaXNwbGF5ID0gKCkgPT4ge1xuICAgICAgICBDYXBhY2l0b3JHb29nbGVNYXBzLm9uRGlzcGxheSh7XG4gICAgICAgICAgaWQ6IG5ld01hcC5pZCxcbiAgICAgICAgICBtYXBCb3VuZHM6IGdldE1hcEJvdW5kcygpXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IG9uUmVzaXplID0gKCkgPT4ge1xuICAgICAgICBDYXBhY2l0b3JHb29nbGVNYXBzLm9uUmVzaXplKHtcbiAgICAgICAgICBpZDogbmV3TWFwLmlkLFxuICAgICAgICAgIG1hcEJvdW5kczogZ2V0TWFwQm91bmRzKClcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgY29uc3QgaW9uaWNQYWdlID0gbmV3TWFwLmVsZW1lbnQuY2xvc2VzdCgnLmlvbi1wYWdlJyk7XG4gICAgICBpZiAoQ2FwYWNpdG9yLmdldFBsYXRmb3JtKCkgPT09ICdpb3MnICYmIGlvbmljUGFnZSkge1xuICAgICAgICBpb25pY1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignaW9uVmlld1dpbGxFbnRlcicsICgpID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG9uRGlzcGxheSgpO1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpb25pY1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignaW9uVmlld0RpZEVudGVyJywgKCkgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgb25EaXNwbGF5KCk7XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBjb25zdCBsYXN0U3RhdGUgPSB7XG4gICAgICAgIHdpZHRoOiBlbGVtZW50Qm91bmRzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGVsZW1lbnRCb3VuZHMuaGVpZ2h0LFxuICAgICAgICBpc0hpZGRlbjogZmFsc2VcbiAgICAgIH07XG4gICAgICBuZXdNYXAucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICBpZiAobmV3TWFwLmVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IG1hcFJlY3QgPSBuZXdNYXAuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBjb25zdCBpc0hpZGRlbiA9IG1hcFJlY3Qud2lkdGggPT09IDAgJiYgbWFwUmVjdC5oZWlnaHQgPT09IDA7XG4gICAgICAgICAgaWYgKCFpc0hpZGRlbikge1xuICAgICAgICAgICAgaWYgKGxhc3RTdGF0ZS5pc0hpZGRlbikge1xuICAgICAgICAgICAgICBpZiAoQ2FwYWNpdG9yLmdldFBsYXRmb3JtKCkgPT09ICdpb3MnICYmICFpb25pY1BhZ2UpIHtcbiAgICAgICAgICAgICAgICBvbkRpc3BsYXkoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChsYXN0U3RhdGUud2lkdGggIT09IG1hcFJlY3Qud2lkdGggfHwgbGFzdFN0YXRlLmhlaWdodCAhPT0gbWFwUmVjdC5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgb25SZXNpemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGFzdFN0YXRlLndpZHRoID0gbWFwUmVjdC53aWR0aDtcbiAgICAgICAgICBsYXN0U3RhdGUuaGVpZ2h0ID0gbWFwUmVjdC5oZWlnaHQ7XG4gICAgICAgICAgbGFzdFN0YXRlLmlzSGlkZGVuID0gaXNIaWRkZW47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgbmV3TWFwLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUobmV3TWFwLmVsZW1lbnQpO1xuICAgIH1cbiAgICAvLyBzbWFsbCBkZWxheSB0byBhbGxvdyBmb3IgaU9TIFdLV2ViVmlldyB0byBzZXR1cCBjb3JyZXNwb25kaW5nIGVsZW1lbnQgc3ViLXNjcm9sbCB2aWV3cyA/Pz9cbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCBDYXBhY2l0b3JHb29nbGVNYXBzLmNyZWF0ZShvcHRpb25zKTtcbiAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICB9LCAyMDApO1xuICAgIH0pO1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY29uc3Qgb25NYXBSZWFkeUxpc3RlbmVyID0gYXdhaXQgQ2FwYWNpdG9yR29vZ2xlTWFwcy5hZGRMaXN0ZW5lcignb25NYXBSZWFkeScsIGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5tYXBJZCA9PSBuZXdNYXAuaWQpIHtcbiAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICBvbk1hcFJlYWR5TGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3TWFwO1xuICB9XG4gIHN0YXRpYyBhc3luYyBnZXRFbGVtZW50Qm91bmRzKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBsZXQgZWxlbWVudEJvdW5kcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBpZiAoZWxlbWVudEJvdW5kcy53aWR0aCA9PSAwKSB7XG4gICAgICAgIGxldCByZXRyaWVzID0gMDtcbiAgICAgICAgY29uc3QgYm91bmRzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGVsZW1lbnRCb3VuZHMud2lkdGggPT0gMCAmJiByZXRyaWVzIDwgMzApIHtcbiAgICAgICAgICAgIGVsZW1lbnRCb3VuZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgcmV0cmllcysrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocmV0cmllcyA9PSAzMCkge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ01hcCBzaXplIGNvdWxkIG5vdCBiZSBkZXRlcm1pbmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGJvdW5kc0ludGVydmFsKTtcbiAgICAgICAgICAgIHJlc29sdmUoZWxlbWVudEJvdW5kcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShlbGVtZW50Qm91bmRzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogRW5hYmxlIHRvdWNoIGV2ZW50cyBvbiBuYXRpdmUgbWFwXG4gICAqXG4gICAqIEByZXR1cm5zIHZvaWRcbiAgICovXG4gIGFzeW5jIGVuYWJsZVRvdWNoKCkge1xuICAgIHJldHVybiBDYXBhY2l0b3JHb29nbGVNYXBzLmVuYWJsZVRvdWNoKHtcbiAgICAgIGlkOiB0aGlzLmlkXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIERpc2FibGUgdG91Y2ggZXZlbnRzIG9uIG5hdGl2ZSBtYXBcbiAgICpcbiAgICogQHJldHVybnMgdm9pZFxuICAgKi9cbiAgYXN5bmMgZGlzYWJsZVRvdWNoKCkge1xuICAgIHJldHVybiBDYXBhY2l0b3JHb29nbGVNYXBzLmRpc2FibGVUb3VjaCh7XG4gICAgICBpZDogdGhpcy5pZFxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBFbmFibGUgbWFya2VyIGNsdXN0ZXJpbmdcbiAgICpcbiAgICogQHBhcmFtIG1pbkNsdXN0ZXJTaXplIC0gVGhlIG1pbmltdW0gbnVtYmVyIG9mIG1hcmtlcnMgdGhhdCBjYW4gYmUgY2x1c3RlcmVkIHRvZ2V0aGVyLlxuICAgKiBAZGVmYXVsdFZhbHVlIDRcbiAgICpcbiAgICogQHJldHVybnMgdm9pZFxuICAgKi9cbiAgYXN5bmMgZW5hYmxlQ2x1c3RlcmluZyhtaW5DbHVzdGVyU2l6ZSkge1xuICAgIHJldHVybiBDYXBhY2l0b3JHb29nbGVNYXBzLmVuYWJsZUNsdXN0ZXJpbmcoe1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBtaW5DbHVzdGVyU2l6ZVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBEaXNhYmxlIG1hcmtlciBjbHVzdGVyaW5nXG4gICAqXG4gICAqIEByZXR1cm5zIHZvaWRcbiAgICovXG4gIGFzeW5jIGRpc2FibGVDbHVzdGVyaW5nKCkge1xuICAgIHJldHVybiBDYXBhY2l0b3JHb29nbGVNYXBzLmRpc2FibGVDbHVzdGVyaW5nKHtcbiAgICAgIGlkOiB0aGlzLmlkXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYSBtYXJrZXIgdG8gdGhlIG1hcFxuICAgKlxuICAgKiBAcGFyYW0gbWFya2VyXG4gICAqIEByZXR1cm5zIGNyZWF0ZWQgbWFya2VyIGlkXG4gICAqL1xuICBhc3luYyBhZGRNYXJrZXIobWFya2VyKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2FwYWNpdG9yR29vZ2xlTWFwcy5hZGRNYXJrZXIoe1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBtYXJrZXJcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzLmlkO1xuICB9XG4gIC8qKlxuICAgKiBBZGRzIG11bHRpcGxlIG1hcmtlcnMgdG8gdGhlIG1hcFxuICAgKlxuICAgKiBAcGFyYW0gbWFya2Vyc1xuICAgKiBAcmV0dXJucyBhcnJheSBvZiBjcmVhdGVkIG1hcmtlciBJRHNcbiAgICovXG4gIGFzeW5jIGFkZE1hcmtlcnMobWFya2Vycykge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IENhcGFjaXRvckdvb2dsZU1hcHMuYWRkTWFya2Vycyh7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIG1hcmtlcnNcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzLmlkcztcbiAgfVxuICAvKipcbiAgICogUmVtb3ZlIG1hcmtlciBmcm9tIHRoZSBtYXBcbiAgICpcbiAgICogQHBhcmFtIGlkIGlkIG9mIHRoZSBtYXJrZXIgdG8gcmVtb3ZlIGZyb20gdGhlIG1hcFxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgYXN5bmMgcmVtb3ZlTWFya2VyKGlkKSB7XG4gICAgcmV0dXJuIENhcGFjaXRvckdvb2dsZU1hcHMucmVtb3ZlTWFya2VyKHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgbWFya2VySWQ6IGlkXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFJlbW92ZSBtYXJrZXJzIGZyb20gdGhlIG1hcFxuICAgKlxuICAgKiBAcGFyYW0gaWRzIGFycmF5IG9mIGlkcyB0byByZW1vdmUgZnJvbSB0aGUgbWFwXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBhc3luYyByZW1vdmVNYXJrZXJzKGlkcykge1xuICAgIHJldHVybiBDYXBhY2l0b3JHb29nbGVNYXBzLnJlbW92ZU1hcmtlcnMoe1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBtYXJrZXJJZHM6IGlkc1xuICAgIH0pO1xuICB9XG4gIGFzeW5jIGFkZFBvbHlnb25zKHBvbHlnb25zKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgQ2FwYWNpdG9yR29vZ2xlTWFwcy5hZGRQb2x5Z29ucyh7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHBvbHlnb25zXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcy5pZHM7XG4gIH1cbiAgYXN5bmMgYWRkUG9seWxpbmVzKHBvbHlsaW5lcykge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IENhcGFjaXRvckdvb2dsZU1hcHMuYWRkUG9seWxpbmVzKHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgcG9seWxpbmVzXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcy5pZHM7XG4gIH1cbiAgYXN5bmMgcmVtb3ZlUG9seWdvbnMoaWRzKSB7XG4gICAgcmV0dXJuIENhcGFjaXRvckdvb2dsZU1hcHMucmVtb3ZlUG9seWdvbnMoe1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBwb2x5Z29uSWRzOiBpZHNcbiAgICB9KTtcbiAgfVxuICBhc3luYyBhZGRDaXJjbGVzKGNpcmNsZXMpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBDYXBhY2l0b3JHb29nbGVNYXBzLmFkZENpcmNsZXMoe1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBjaXJjbGVzXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcy5pZHM7XG4gIH1cbiAgYXN5bmMgcmVtb3ZlQ2lyY2xlcyhpZHMpIHtcbiAgICByZXR1cm4gQ2FwYWNpdG9yR29vZ2xlTWFwcy5yZW1vdmVDaXJjbGVzKHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgY2lyY2xlSWRzOiBpZHNcbiAgICB9KTtcbiAgfVxuICBhc3luYyByZW1vdmVQb2x5bGluZXMoaWRzKSB7XG4gICAgcmV0dXJuIENhcGFjaXRvckdvb2dsZU1hcHMucmVtb3ZlUG9seWxpbmVzKHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgcG9seWxpbmVJZHM6IGlkc1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBjdXJyZW50IGluc3RhbmNlIG9mIHRoZSBtYXBcbiAgICovXG4gIGFzeW5jIGRlc3Ryb3koKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChDYXBhY2l0b3IuZ2V0UGxhdGZvcm0oKSA9PSAnYW5kcm9pZCcpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVNjcm9sbGluZygpO1xuICAgIH1cbiAgICBpZiAoQ2FwYWNpdG9yLmlzTmF0aXZlUGxhdGZvcm0oKSkge1xuICAgICAgKF9hID0gdGhpcy5yZXNpemVPYnNlcnZlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxNYXBMaXN0ZW5lcnMoKTtcbiAgICByZXR1cm4gQ2FwYWNpdG9yR29vZ2xlTWFwcy5kZXN0cm95KHtcbiAgICAgIGlkOiB0aGlzLmlkXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgbWFwIGNhbWVyYSBjb25maWd1cmF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICogQHJldHVybnNcbiAgICovXG4gIGFzeW5jIHNldENhbWVyYShjb25maWcpIHtcbiAgICByZXR1cm4gQ2FwYWNpdG9yR29vZ2xlTWFwcy5zZXRDYW1lcmEoe1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBjb25maWdcbiAgICB9KTtcbiAgfVxuICBhc3luYyBnZXRNYXBUeXBlKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHR5cGVcbiAgICB9ID0gYXdhaXQgQ2FwYWNpdG9yR29vZ2xlTWFwcy5nZXRNYXBUeXBlKHtcbiAgICAgIGlkOiB0aGlzLmlkXG4gICAgfSk7XG4gICAgcmV0dXJuIE1hcFR5cGVbdHlwZV07XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgdGhlIHR5cGUgb2YgbWFwIHRpbGVzIHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZC5cbiAgICpcbiAgICogQHBhcmFtIG1hcFR5cGVcbiAgICogQHJldHVybnNcbiAgICovXG4gIGFzeW5jIHNldE1hcFR5cGUobWFwVHlwZSkge1xuICAgIHJldHVybiBDYXBhY2l0b3JHb29nbGVNYXBzLnNldE1hcFR5cGUoe1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBtYXBUeXBlXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgd2hldGhlciBpbmRvb3IgbWFwcyBhcmUgc2hvd24sIHdoZXJlIGF2YWlsYWJsZS5cbiAgICpcbiAgICogQHBhcmFtIGVuYWJsZWRcbiAgICogQHJldHVybnNcbiAgICovXG4gIGFzeW5jIGVuYWJsZUluZG9vck1hcHMoZW5hYmxlZCkge1xuICAgIHJldHVybiBDYXBhY2l0b3JHb29nbGVNYXBzLmVuYWJsZUluZG9vck1hcHMoe1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBlbmFibGVkXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIENvbnRyb2xzIHdoZXRoZXIgdGhlIG1hcCBpcyBkcmF3aW5nIHRyYWZmaWMgZGF0YSwgaWYgYXZhaWxhYmxlLlxuICAgKlxuICAgKiBAcGFyYW0gZW5hYmxlZFxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgYXN5bmMgZW5hYmxlVHJhZmZpY0xheWVyKGVuYWJsZWQpIHtcbiAgICByZXR1cm4gQ2FwYWNpdG9yR29vZ2xlTWFwcy5lbmFibGVUcmFmZmljTGF5ZXIoe1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBlbmFibGVkXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFNob3cgYWNjZXNzaWJpbGl0eSBlbGVtZW50cyBmb3Igb3ZlcmxheSBvYmplY3RzLCBzdWNoIGFzIE1hcmtlciBhbmQgUG9seWxpbmUuXG4gICAqXG4gICAqIE9ubHkgYXZhaWxhYmxlIG9uIGlPUy5cbiAgICpcbiAgICogQHBhcmFtIGVuYWJsZWRcbiAgICogQHJldHVybnNcbiAgICovXG4gIGFzeW5jIGVuYWJsZUFjY2Vzc2liaWxpdHlFbGVtZW50cyhlbmFibGVkKSB7XG4gICAgcmV0dXJuIENhcGFjaXRvckdvb2dsZU1hcHMuZW5hYmxlQWNjZXNzaWJpbGl0eUVsZW1lbnRzKHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgZW5hYmxlZFxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgd2hldGhlciB0aGUgTXkgTG9jYXRpb24gZG90IGFuZCBhY2N1cmFjeSBjaXJjbGUgaXMgZW5hYmxlZC5cbiAgICpcbiAgICogQHBhcmFtIGVuYWJsZWRcbiAgICogQHJldHVybnNcbiAgICovXG4gIGFzeW5jIGVuYWJsZUN1cnJlbnRMb2NhdGlvbihlbmFibGVkKSB7XG4gICAgcmV0dXJuIENhcGFjaXRvckdvb2dsZU1hcHMuZW5hYmxlQ3VycmVudExvY2F0aW9uKHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgZW5hYmxlZFxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgcGFkZGluZyBvbiB0aGUgJ3Zpc2libGUnIHJlZ2lvbiBvZiB0aGUgdmlldy5cbiAgICpcbiAgICogQHBhcmFtIHBhZGRpbmdcbiAgICogQHJldHVybnNcbiAgICovXG4gIGFzeW5jIHNldFBhZGRpbmcocGFkZGluZykge1xuICAgIHJldHVybiBDYXBhY2l0b3JHb29nbGVNYXBzLnNldFBhZGRpbmcoe1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBwYWRkaW5nXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCB0aGUgbWFwJ3MgY3VycmVudCB2aWV3cG9ydCBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIGJvdW5kcy5cbiAgICpcbiAgICogQHJldHVybnMge0xhdExuZ0JvdW5kc31cbiAgICovXG4gIGFzeW5jIGdldE1hcEJvdW5kcygpIHtcbiAgICByZXR1cm4gbmV3IExhdExuZ0JvdW5kcyhhd2FpdCBDYXBhY2l0b3JHb29nbGVNYXBzLmdldE1hcEJvdW5kcyh7XG4gICAgICBpZDogdGhpcy5pZFxuICAgIH0pKTtcbiAgfVxuICBhc3luYyBmaXRCb3VuZHMoYm91bmRzLCBwYWRkaW5nKSB7XG4gICAgcmV0dXJuIENhcGFjaXRvckdvb2dsZU1hcHMuZml0Qm91bmRzKHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgYm91bmRzLFxuICAgICAgcGFkZGluZ1xuICAgIH0pO1xuICB9XG4gIGluaXRTY3JvbGxpbmcoKSB7XG4gICAgY29uc3QgaW9uQ29udGVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW9uLWNvbnRlbnQnKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1mb3Itb2ZcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlvbkNvbnRlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpb25Db250ZW50c1tpXS5zY3JvbGxFdmVudHMgPSB0cnVlO1xuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaW9uU2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGxFdmVudCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsRXZlbnQpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVNjcm9sbEV2ZW50KTtcbiAgICBpZiAoc2NyZWVuLm9yaWVudGF0aW9uKSB7XG4gICAgICBzY3JlZW4ub3JpZW50YXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KHRoaXMudXBkYXRlTWFwQm91bmRzLCA1MDApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnVwZGF0ZU1hcEJvdW5kcywgNTAwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBkaXNhYmxlU2Nyb2xsaW5nKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdpb25TY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbEV2ZW50KTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGxFdmVudCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlU2Nyb2xsRXZlbnQpO1xuICAgIGlmIChzY3JlZW4ub3JpZW50YXRpb24pIHtcbiAgICAgIHNjcmVlbi5vcmllbnRhdGlvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy51cGRhdGVNYXBCb3VuZHMsIDEwMDApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnVwZGF0ZU1hcEJvdW5kcywgMTAwMCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlTWFwQm91bmRzKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IG1hcFJlY3QgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBDYXBhY2l0b3JHb29nbGVNYXBzLm9uU2Nyb2xsKHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIG1hcEJvdW5kczoge1xuICAgICAgICAgIHg6IG1hcFJlY3QueCxcbiAgICAgICAgICB5OiBtYXBSZWN0LnksXG4gICAgICAgICAgd2lkdGg6IG1hcFJlY3Qud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBtYXBSZWN0LmhlaWdodFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLypcbiAgcHJpdmF0ZSBmaW5kQ29udGFpbmVyRWxlbWVudCgpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgIGlmICghdGhpcy5lbGVtZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgICAgbGV0IHBhcmVudEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB3aGlsZSAocGFyZW50RWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudEVsZW1lbnQpLm92ZXJmbG93WSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG4gICAgICB9XG4gICAgICAgICBwYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAqL1xuICAvKipcbiAgICogU2V0IHRoZSBldmVudCBsaXN0ZW5lciBvbiB0aGUgbWFwIGZvciAnb25DYW1lcmFJZGxlJyBldmVudHMuXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgYXN5bmMgc2V0T25DYW1lcmFJZGxlTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICBpZiAodGhpcy5vbkNhbWVyYUlkbGVMaXN0ZW5lcikge1xuICAgICAgdGhpcy5vbkNhbWVyYUlkbGVMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICB9XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uQ2FtZXJhSWRsZUxpc3RlbmVyID0gYXdhaXQgQ2FwYWNpdG9yR29vZ2xlTWFwcy5hZGRMaXN0ZW5lcignb25DYW1lcmFJZGxlJywgdGhpcy5nZW5lcmF0ZUNhbGxiYWNrKGNhbGxiYWNrKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25DYW1lcmFJZGxlTGlzdGVuZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTZXQgdGhlIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBtYXAgZm9yICdvbkJvdW5kc0NoYW5nZWQnIGV2ZW50cy5cbiAgICpcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBhc3luYyBzZXRPbkJvdW5kc0NoYW5nZWRMaXN0ZW5lcihjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLm9uQm91bmRzQ2hhbmdlZExpc3RlbmVyKSB7XG4gICAgICB0aGlzLm9uQm91bmRzQ2hhbmdlZExpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub25Cb3VuZHNDaGFuZ2VkTGlzdGVuZXIgPSBhd2FpdCBDYXBhY2l0b3JHb29nbGVNYXBzLmFkZExpc3RlbmVyKCdvbkJvdW5kc0NoYW5nZWQnLCB0aGlzLmdlbmVyYXRlQ2FsbGJhY2soY2FsbGJhY2spKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkJvdW5kc0NoYW5nZWRMaXN0ZW5lciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNldCB0aGUgZXZlbnQgbGlzdGVuZXIgb24gdGhlIG1hcCBmb3IgJ29uQ2FtZXJhTW92ZVN0YXJ0ZWQnIGV2ZW50cy5cbiAgICpcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBhc3luYyBzZXRPbkNhbWVyYU1vdmVTdGFydGVkTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICBpZiAodGhpcy5vbkNhbWVyYU1vdmVTdGFydGVkTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMub25DYW1lcmFNb3ZlU3RhcnRlZExpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub25DYW1lcmFNb3ZlU3RhcnRlZExpc3RlbmVyID0gYXdhaXQgQ2FwYWNpdG9yR29vZ2xlTWFwcy5hZGRMaXN0ZW5lcignb25DYW1lcmFNb3ZlU3RhcnRlZCcsIHRoaXMuZ2VuZXJhdGVDYWxsYmFjayhjYWxsYmFjaykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uQ2FtZXJhTW92ZVN0YXJ0ZWRMaXN0ZW5lciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNldCB0aGUgZXZlbnQgbGlzdGVuZXIgb24gdGhlIG1hcCBmb3IgJ29uQ2x1c3RlckNsaWNrJyBldmVudHMuXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgYXN5bmMgc2V0T25DbHVzdGVyQ2xpY2tMaXN0ZW5lcihjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLm9uQ2x1c3RlckNsaWNrTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMub25DbHVzdGVyQ2xpY2tMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICB9XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uQ2x1c3RlckNsaWNrTGlzdGVuZXIgPSBhd2FpdCBDYXBhY2l0b3JHb29nbGVNYXBzLmFkZExpc3RlbmVyKCdvbkNsdXN0ZXJDbGljaycsIHRoaXMuZ2VuZXJhdGVDYWxsYmFjayhjYWxsYmFjaykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uQ2x1c3RlckNsaWNrTGlzdGVuZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTZXQgdGhlIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBtYXAgZm9yICdvbkNsdXN0ZXJJbmZvV2luZG93Q2xpY2snIGV2ZW50cy5cbiAgICpcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBhc3luYyBzZXRPbkNsdXN0ZXJJbmZvV2luZG93Q2xpY2tMaXN0ZW5lcihjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLm9uQ2x1c3RlckluZm9XaW5kb3dDbGlja0xpc3RlbmVyKSB7XG4gICAgICB0aGlzLm9uQ2x1c3RlckluZm9XaW5kb3dDbGlja0xpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub25DbHVzdGVySW5mb1dpbmRvd0NsaWNrTGlzdGVuZXIgPSBhd2FpdCBDYXBhY2l0b3JHb29nbGVNYXBzLmFkZExpc3RlbmVyKCdvbkNsdXN0ZXJJbmZvV2luZG93Q2xpY2snLCB0aGlzLmdlbmVyYXRlQ2FsbGJhY2soY2FsbGJhY2spKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkNsdXN0ZXJJbmZvV2luZG93Q2xpY2tMaXN0ZW5lciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNldCB0aGUgZXZlbnQgbGlzdGVuZXIgb24gdGhlIG1hcCBmb3IgJ29uSW5mb1dpbmRvd0NsaWNrJyBldmVudHMuXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgYXN5bmMgc2V0T25JbmZvV2luZG93Q2xpY2tMaXN0ZW5lcihjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLm9uSW5mb1dpbmRvd0NsaWNrTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMub25JbmZvV2luZG93Q2xpY2tMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICB9XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uSW5mb1dpbmRvd0NsaWNrTGlzdGVuZXIgPSBhd2FpdCBDYXBhY2l0b3JHb29nbGVNYXBzLmFkZExpc3RlbmVyKCdvbkluZm9XaW5kb3dDbGljaycsIHRoaXMuZ2VuZXJhdGVDYWxsYmFjayhjYWxsYmFjaykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uSW5mb1dpbmRvd0NsaWNrTGlzdGVuZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTZXQgdGhlIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBtYXAgZm9yICdvbk1hcENsaWNrJyBldmVudHMuXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgYXN5bmMgc2V0T25NYXBDbGlja0xpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMub25NYXBDbGlja0xpc3RlbmVyKSB7XG4gICAgICB0aGlzLm9uTWFwQ2xpY2tMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICB9XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uTWFwQ2xpY2tMaXN0ZW5lciA9IGF3YWl0IENhcGFjaXRvckdvb2dsZU1hcHMuYWRkTGlzdGVuZXIoJ29uTWFwQ2xpY2snLCB0aGlzLmdlbmVyYXRlQ2FsbGJhY2soY2FsbGJhY2spKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbk1hcENsaWNrTGlzdGVuZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTZXQgdGhlIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBtYXAgZm9yICdvblBvbHlnb25DbGljaycgZXZlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICogQHJldHVybnNcbiAgICovXG4gIGFzeW5jIHNldE9uUG9seWdvbkNsaWNrTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICBpZiAodGhpcy5vblBvbHlnb25DbGlja0xpc3RlbmVyKSB7XG4gICAgICB0aGlzLm9uUG9seWdvbkNsaWNrTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgfVxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgdGhpcy5vblBvbHlnb25DbGlja0xpc3RlbmVyID0gYXdhaXQgQ2FwYWNpdG9yR29vZ2xlTWFwcy5hZGRMaXN0ZW5lcignb25Qb2x5Z29uQ2xpY2snLCB0aGlzLmdlbmVyYXRlQ2FsbGJhY2soY2FsbGJhY2spKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vblBvbHlnb25DbGlja0xpc3RlbmVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogU2V0IHRoZSBldmVudCBsaXN0ZW5lciBvbiB0aGUgbWFwIGZvciAnb25DaXJjbGVDbGljaycgZXZlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICogQHJldHVybnNcbiAgICovXG4gIGFzeW5jIHNldE9uQ2lyY2xlQ2xpY2tMaXN0ZW5lcihjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLm9uQ2lyY2xlQ2xpY2tMaXN0ZW5lcikgW3RoaXMub25DaXJjbGVDbGlja0xpc3RlbmVyLnJlbW92ZSgpXTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub25DaXJjbGVDbGlja0xpc3RlbmVyID0gYXdhaXQgQ2FwYWNpdG9yR29vZ2xlTWFwcy5hZGRMaXN0ZW5lcignb25DaXJjbGVDbGljaycsIHRoaXMuZ2VuZXJhdGVDYWxsYmFjayhjYWxsYmFjaykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uQ2lyY2xlQ2xpY2tMaXN0ZW5lciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNldCB0aGUgZXZlbnQgbGlzdGVuZXIgb24gdGhlIG1hcCBmb3IgJ29uTWFya2VyQ2xpY2snIGV2ZW50cy5cbiAgICpcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBhc3luYyBzZXRPbk1hcmtlckNsaWNrTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICBpZiAodGhpcy5vbk1hcmtlckNsaWNrTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMub25NYXJrZXJDbGlja0xpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub25NYXJrZXJDbGlja0xpc3RlbmVyID0gYXdhaXQgQ2FwYWNpdG9yR29vZ2xlTWFwcy5hZGRMaXN0ZW5lcignb25NYXJrZXJDbGljaycsIHRoaXMuZ2VuZXJhdGVDYWxsYmFjayhjYWxsYmFjaykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uTWFya2VyQ2xpY2tMaXN0ZW5lciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNldCB0aGUgZXZlbnQgbGlzdGVuZXIgb24gdGhlIG1hcCBmb3IgJ29uUG9seWxpbmVDbGljaycgZXZlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICogQHJldHVybnNcbiAgICovXG4gIGFzeW5jIHNldE9uUG9seWxpbmVDbGlja0xpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMub25Qb2x5bGluZUNsaWNrTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMub25Qb2x5bGluZUNsaWNrTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgfVxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgdGhpcy5vblBvbHlsaW5lQ2xpY2tMaXN0ZW5lciA9IGF3YWl0IENhcGFjaXRvckdvb2dsZU1hcHMuYWRkTGlzdGVuZXIoJ29uUG9seWxpbmVDbGljaycsIHRoaXMuZ2VuZXJhdGVDYWxsYmFjayhjYWxsYmFjaykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uUG9seWxpbmVDbGlja0xpc3RlbmVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogU2V0IHRoZSBldmVudCBsaXN0ZW5lciBvbiB0aGUgbWFwIGZvciAnb25NYXJrZXJEcmFnU3RhcnQnIGV2ZW50cy5cbiAgICpcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBhc3luYyBzZXRPbk1hcmtlckRyYWdTdGFydExpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMub25NYXJrZXJEcmFnU3RhcnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5vbk1hcmtlckRyYWdTdGFydExpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub25NYXJrZXJEcmFnU3RhcnRMaXN0ZW5lciA9IGF3YWl0IENhcGFjaXRvckdvb2dsZU1hcHMuYWRkTGlzdGVuZXIoJ29uTWFya2VyRHJhZ1N0YXJ0JywgdGhpcy5nZW5lcmF0ZUNhbGxiYWNrKGNhbGxiYWNrKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25NYXJrZXJEcmFnU3RhcnRMaXN0ZW5lciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNldCB0aGUgZXZlbnQgbGlzdGVuZXIgb24gdGhlIG1hcCBmb3IgJ29uTWFya2VyRHJhZycgZXZlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICogQHJldHVybnNcbiAgICovXG4gIGFzeW5jIHNldE9uTWFya2VyRHJhZ0xpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMub25NYXJrZXJEcmFnTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMub25NYXJrZXJEcmFnTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgfVxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgdGhpcy5vbk1hcmtlckRyYWdMaXN0ZW5lciA9IGF3YWl0IENhcGFjaXRvckdvb2dsZU1hcHMuYWRkTGlzdGVuZXIoJ29uTWFya2VyRHJhZycsIHRoaXMuZ2VuZXJhdGVDYWxsYmFjayhjYWxsYmFjaykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uTWFya2VyRHJhZ0xpc3RlbmVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogU2V0IHRoZSBldmVudCBsaXN0ZW5lciBvbiB0aGUgbWFwIGZvciAnb25NYXJrZXJEcmFnRW5kJyBldmVudHMuXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgYXN5bmMgc2V0T25NYXJrZXJEcmFnRW5kTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICBpZiAodGhpcy5vbk1hcmtlckRyYWdFbmRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5vbk1hcmtlckRyYWdFbmRMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICB9XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uTWFya2VyRHJhZ0VuZExpc3RlbmVyID0gYXdhaXQgQ2FwYWNpdG9yR29vZ2xlTWFwcy5hZGRMaXN0ZW5lcignb25NYXJrZXJEcmFnRW5kJywgdGhpcy5nZW5lcmF0ZUNhbGxiYWNrKGNhbGxiYWNrKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25NYXJrZXJEcmFnRW5kTGlzdGVuZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTZXQgdGhlIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBtYXAgZm9yICdvbk15TG9jYXRpb25CdXR0b25DbGljaycgZXZlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICogQHJldHVybnNcbiAgICovXG4gIGFzeW5jIHNldE9uTXlMb2NhdGlvbkJ1dHRvbkNsaWNrTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICBpZiAodGhpcy5vbk15TG9jYXRpb25CdXR0b25DbGlja0xpc3RlbmVyKSB7XG4gICAgICB0aGlzLm9uTXlMb2NhdGlvbkJ1dHRvbkNsaWNrTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgfVxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgdGhpcy5vbk15TG9jYXRpb25CdXR0b25DbGlja0xpc3RlbmVyID0gYXdhaXQgQ2FwYWNpdG9yR29vZ2xlTWFwcy5hZGRMaXN0ZW5lcignb25NeUxvY2F0aW9uQnV0dG9uQ2xpY2snLCB0aGlzLmdlbmVyYXRlQ2FsbGJhY2soY2FsbGJhY2spKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbk15TG9jYXRpb25CdXR0b25DbGlja0xpc3RlbmVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogU2V0IHRoZSBldmVudCBsaXN0ZW5lciBvbiB0aGUgbWFwIGZvciAnb25NeUxvY2F0aW9uQ2xpY2snIGV2ZW50cy5cbiAgICpcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBhc3luYyBzZXRPbk15TG9jYXRpb25DbGlja0xpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMub25NeUxvY2F0aW9uQ2xpY2tMaXN0ZW5lcikge1xuICAgICAgdGhpcy5vbk15TG9jYXRpb25DbGlja0xpc3RlbmVyLnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub25NeUxvY2F0aW9uQ2xpY2tMaXN0ZW5lciA9IGF3YWl0IENhcGFjaXRvckdvb2dsZU1hcHMuYWRkTGlzdGVuZXIoJ29uTXlMb2NhdGlvbkNsaWNrJywgdGhpcy5nZW5lcmF0ZUNhbGxiYWNrKGNhbGxiYWNrKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25NeUxvY2F0aW9uQ2xpY2tMaXN0ZW5lciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzIG9uIHRoZSBtYXAuXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgYXN5bmMgcmVtb3ZlQWxsTWFwTGlzdGVuZXJzKCkge1xuICAgIGlmICh0aGlzLm9uQm91bmRzQ2hhbmdlZExpc3RlbmVyKSB7XG4gICAgICB0aGlzLm9uQm91bmRzQ2hhbmdlZExpc3RlbmVyLnJlbW92ZSgpO1xuICAgICAgdGhpcy5vbkJvdW5kc0NoYW5nZWRMaXN0ZW5lciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHRoaXMub25DYW1lcmFJZGxlTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMub25DYW1lcmFJZGxlTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICB0aGlzLm9uQ2FtZXJhSWRsZUxpc3RlbmVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5vbkNhbWVyYU1vdmVTdGFydGVkTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMub25DYW1lcmFNb3ZlU3RhcnRlZExpc3RlbmVyLnJlbW92ZSgpO1xuICAgICAgdGhpcy5vbkNhbWVyYU1vdmVTdGFydGVkTGlzdGVuZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLm9uQ2x1c3RlckNsaWNrTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMub25DbHVzdGVyQ2xpY2tMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICAgIHRoaXMub25DbHVzdGVyQ2xpY2tMaXN0ZW5lciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHRoaXMub25DbHVzdGVySW5mb1dpbmRvd0NsaWNrTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMub25DbHVzdGVySW5mb1dpbmRvd0NsaWNrTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICB0aGlzLm9uQ2x1c3RlckluZm9XaW5kb3dDbGlja0xpc3RlbmVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5vbkluZm9XaW5kb3dDbGlja0xpc3RlbmVyKSB7XG4gICAgICB0aGlzLm9uSW5mb1dpbmRvd0NsaWNrTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICB0aGlzLm9uSW5mb1dpbmRvd0NsaWNrTGlzdGVuZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLm9uTWFwQ2xpY2tMaXN0ZW5lcikge1xuICAgICAgdGhpcy5vbk1hcENsaWNrTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICB0aGlzLm9uTWFwQ2xpY2tMaXN0ZW5lciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHRoaXMub25Qb2x5bGluZUNsaWNrTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMub25Qb2x5bGluZUNsaWNrTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICB0aGlzLm9uUG9seWxpbmVDbGlja0xpc3RlbmVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5vbk1hcmtlckNsaWNrTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMub25NYXJrZXJDbGlja0xpc3RlbmVyLnJlbW92ZSgpO1xuICAgICAgdGhpcy5vbk1hcmtlckNsaWNrTGlzdGVuZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLm9uUG9seWdvbkNsaWNrTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMub25Qb2x5Z29uQ2xpY2tMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICAgIHRoaXMub25Qb2x5Z29uQ2xpY2tMaXN0ZW5lciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHRoaXMub25DaXJjbGVDbGlja0xpc3RlbmVyKSB7XG4gICAgICB0aGlzLm9uQ2lyY2xlQ2xpY2tMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICAgIHRoaXMub25DaXJjbGVDbGlja0xpc3RlbmVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5vbk1hcmtlckRyYWdTdGFydExpc3RlbmVyKSB7XG4gICAgICB0aGlzLm9uTWFya2VyRHJhZ1N0YXJ0TGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICB0aGlzLm9uTWFya2VyRHJhZ1N0YXJ0TGlzdGVuZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLm9uTWFya2VyRHJhZ0xpc3RlbmVyKSB7XG4gICAgICB0aGlzLm9uTWFya2VyRHJhZ0xpc3RlbmVyLnJlbW92ZSgpO1xuICAgICAgdGhpcy5vbk1hcmtlckRyYWdMaXN0ZW5lciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHRoaXMub25NYXJrZXJEcmFnRW5kTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMub25NYXJrZXJEcmFnRW5kTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICB0aGlzLm9uTWFya2VyRHJhZ0VuZExpc3RlbmVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5vbk15TG9jYXRpb25CdXR0b25DbGlja0xpc3RlbmVyKSB7XG4gICAgICB0aGlzLm9uTXlMb2NhdGlvbkJ1dHRvbkNsaWNrTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICB0aGlzLm9uTXlMb2NhdGlvbkJ1dHRvbkNsaWNrTGlzdGVuZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLm9uTXlMb2NhdGlvbkNsaWNrTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMub25NeUxvY2F0aW9uQ2xpY2tMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICAgIHRoaXMub25NeUxvY2F0aW9uQ2xpY2tMaXN0ZW5lciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgZ2VuZXJhdGVDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIGNvbnN0IG1hcElkID0gdGhpcy5pZDtcbiAgICByZXR1cm4gZGF0YSA9PiB7XG4gICAgICBpZiAoZGF0YS5tYXBJZCA9PSBtYXBJZCkge1xuICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iLCJmdW5jdGlvbiBzKHQpIHtcbiAgdC5DYXBhY2l0b3JVdGlscy5TeW5hcHNlID0gbmV3IFByb3h5KHt9LCB7XG4gICAgZ2V0KGUsIG8pIHtcbiAgICAgIHJldHVybiBuZXcgUHJveHkoe30sIHtcbiAgICAgICAgZ2V0KHcsIHIpIHtcbiAgICAgICAgICByZXR1cm4gKGMsIHAsIG4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSB0LkNhcGFjaXRvci5QbHVnaW5zW29dO1xuICAgICAgICAgICAgaWYgKGkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICBuKG5ldyBFcnJvcihgQ2FwYWNpdG9yIHBsdWdpbiAke299IG5vdCBmb3VuZGApKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpW3JdICE9IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICBuKG5ldyBFcnJvcihgTWV0aG9kICR7cn0gbm90IGZvdW5kIGluIENhcGFjaXRvciBwbHVnaW4gJHtvfWApKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhID0gYXdhaXQgaVtyXShjKTtcbiAgICAgICAgICAgICAgICBwKGEpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChhKSB7XG4gICAgICAgICAgICAgICAgbihhKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gdSh0KSB7XG4gIHQuQ2FwYWNpdG9yVXRpbHMuU3luYXBzZSA9IG5ldyBQcm94eSh7fSwge1xuICAgIGdldChlLCBvKSB7XG4gICAgICByZXR1cm4gdC5jb3Jkb3ZhLnBsdWdpbnNbb107XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHkodCA9ICExKSB7XG4gIHdpbmRvdy5DYXBhY2l0b3JVdGlscyA9IHdpbmRvdy5DYXBhY2l0b3JVdGlscyB8fCB7fSwgd2luZG93LkNhcGFjaXRvciAhPT0gdm9pZCAwICYmICF0ID8gcyh3aW5kb3cpIDogd2luZG93LmNvcmRvdmEgIT09IHZvaWQgMCAmJiB1KHdpbmRvdyk7XG59XG5leHBvcnQgeyB5IGFzIGV4cG9zZVN5bmFwc2UgfTsiLCJpbXBvcnQgeyByZWdpc3RlclBsdWdpbiB9IGZyb20gJ0BjYXBhY2l0b3IvY29yZSc7XG5pbXBvcnQgeyBleHBvc2VTeW5hcHNlIH0gZnJvbSAnQGNhcGFjaXRvci9zeW5hcHNlJztcbmNvbnN0IEdlb2xvY2F0aW9uID0gcmVnaXN0ZXJQbHVnaW4oJ0dlb2xvY2F0aW9uJywge1xuICB3ZWI6ICgpID0+IGltcG9ydCgnLi93ZWInKS50aGVuKG0gPT4gbmV3IG0uR2VvbG9jYXRpb25XZWIoKSlcbn0pO1xuZXhwb3NlU3luYXBzZSgpO1xuZXhwb3J0ICogZnJvbSAnLi9kZWZpbml0aW9ucyc7XG5leHBvcnQgeyBHZW9sb2NhdGlvbiB9O1xuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgQWxlcnRDb250cm9sbGVyLFxuICBJb25JdGVtU2xpZGluZyxcbiAgTW9kYWxDb250cm9sbGVyLFxuICAvLyBOYXZDb250cm9sbGVyLFxuICBOYXZQYXJhbXMsXG4gIFRvYXN0Q29udHJvbGxlcixcbiAgUGxhdGZvcm0sXG59IGZyb20gXCJAaW9uaWMvYW5ndWxhclwiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJzcmMvYXBwL21vZGVscy9nYW1lXCI7XG5pbXBvcnQgeyBHb29nbGVNYXAgfSBmcm9tIFwiQGNhcGFjaXRvci9nb29nbGUtbWFwc1wiO1xuaW1wb3J0IHsgQnJvd3NlciB9IGZyb20gXCJAY2FwYWNpdG9yL2Jyb3dzZXJcIjtcbmltcG9ydCB7XG4gIEdlb2xvY2F0aW9uLFxuICBQZXJtaXNzaW9uU3RhdHVzLFxuICBQb3NpdGlvbixcbn0gZnJvbSBcIkBjYXBhY2l0b3IvZ2VvbG9jYXRpb25cIjtcbmltcG9ydCB7IENoYW1waW9uc2hpcFNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS9jaGFtcGlvbnNoaXAuc2VydmljZVwiO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgZm9ya0pvaW4sIGxhc3RWYWx1ZUZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvYXV0aFwiO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAsIHRha2UsIHRhcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvZmlyZWJhc2UvdXNlci1wcm9maWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSBcInNyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnRcIjtcbi8vIGltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5pbXBvcnQgeyBMaW5ldXBQYWdlIH0gZnJvbSBcIi4uL2xpbmV1cC9saW5ldXAucGFnZVwiO1xuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gXCJzcmMvYXBwL21vZGVscy91c2VyXCI7XG5pbXBvcnQgeyBNZW1iZXJQYWdlIH0gZnJvbSBcIi4uLy4uL21lbWJlci9tZW1iZXIucGFnZVwiO1xuaW1wb3J0IHsgRmlyZWJhc2VTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgVGVhbSB9IGZyb20gXCJzcmMvYXBwL21vZGVscy90ZWFtXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtY2hhbXBpb25zaGlwLWRldGFpbFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NoYW1waW9uc2hpcC1kZXRhaWwucGFnZS5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jaGFtcGlvbnNoaXAtZGV0YWlsLnBhZ2Uuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgQ2hhbXBpb25zaGlwRGV0YWlsUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dChcImRhdGFcIikgZ2FtZTogR2FtZTtcbiAgQElucHV0KFwiaXNGdXR1cmVcIikgaXNGdXR1cmU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZChcIm1hcFwiKVxuICBtYXBSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICBuZXdNYXA6IEdvb2dsZU1hcDtcblxuICBnYW1lJDogT2JzZXJ2YWJsZTxHYW1lPjtcblxuICBtb2RlID0gXCJ5ZXNcIjtcblxuICAvLyAgIHVzZXIkOiBPYnNlcnZhYmxlPFVzZXI+O1xuICB1c2VyOiBVc2VyO1xuXG4gIGNvb3JkaW5hdGVzOiBQb3NpdGlvbjtcbiAgdGVhbUFkbWluTGlzdCQ6IE9ic2VydmFibGU8VGVhbVtdPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vZGFsQ3RybDogTW9kYWxDb250cm9sbGVyLFxuICAgIHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBuYXZQYXJhbXM6IE5hdlBhcmFtcyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHVzZXJQcm9maWxlU2VydmljZTogVXNlclByb2ZpbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYWxlcnRDdHJsOiBBbGVydENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjaGFtcGlvbnNoaXBTZXJ2aWNlOiBDaGFtcGlvbnNoaXBTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdG9hc3RDb250cm9sbGVyOiBUb2FzdENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBmYlNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2VcbiAgKSB7XG4gICAgLy8gIHRoaXMuc2V0TWFwKCk7XG4gICAgdGhpcy50ZWFtQWRtaW5MaXN0JCA9IHRoaXMuZmJTZXJ2aWNlLmdldFRlYW1BZG1pbkxpc3QoKTtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nYW1lID0gdGhpcy5uYXZQYXJhbXMuZ2V0KFwiZGF0YVwiKTtcbiAgICB0aGlzLmdhbWUkID0gdGhpcy5nZXRHYW1lKHRoaXMuZ2FtZS50ZWFtSWQsIHRoaXMuZ2FtZS5pZCk7XG5cbiAgICB0aGlzLmdlb2xvY2F0aW9uUGVybWlzc2lvbigpO1xuXG4gIH1cblxuICBhc3luYyBnZW9sb2NhdGlvblBlcm1pc3Npb24oKSB7XG4gICAgY29uc29sZS5sb2coXCLDnGJlcnByw7xmZSBTdGFuZG9ydC1CZXJlY2h0aWd1bmdlbi4uLlwiKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGVybWlzc2lvbjogUGVybWlzc2lvblN0YXR1cyA9IGF3YWl0IEdlb2xvY2F0aW9uLmNoZWNrUGVybWlzc2lvbnMoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQWt0dWVsbGVyIEJlcmVjaHRpZ3VuZ3NzdGF0dXM6XCIsIHBlcm1pc3Npb24ubG9jYXRpb24sIHBlcm1pc3Npb24uY29hcnNlTG9jYXRpb24pO1xuXG4gICAgICBzd2l0Y2ggKHBlcm1pc3Npb24ubG9jYXRpb24pIHtcbiAgICAgICAgY2FzZSAnZ3JhbnRlZCc6XG4gICAgICAgICAgY29uc29sZS5sb2coXCJTdGFuZG9ydC1CZXJlY2h0aWd1bmcgYmVyZWl0cyBlcnRlaWx0XCIpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgIGNhc2UgJ3Byb21wdCc6XG4gICAgICAgIGNhc2UgJ3Byb21wdC13aXRoLXJhdGlvbmFsZSc6XG4gICAgICAgICAgY29uc29sZS5sb2coXCJGcmFnZSBTdGFuZG9ydC1CZXJlY2h0aWd1bmcgYW5cIik7XG4gICAgICAgICAgY29uc3QgbmV3UGVybWlzc2lvbiA9IGF3YWl0IEdlb2xvY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9ucygpO1xuICAgICAgICAgIHJldHVybiBuZXdQZXJtaXNzaW9uLmxvY2F0aW9uID09PSAnZ3JhbnRlZCc7XG5cbiAgICAgICAgY2FzZSAnZGVuaWVkJzpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlN0YW5kb3J0LUJlcmVjaHRpZ3VuZyB2ZXJ3ZWlnZXJ0XCIpO1xuICAgICAgICAgIC8vIEhpZXIga8O2bm50ZSBtYW4gZWluZW4gQWxlcnQgYW56ZWlnZW4sIGRlciBlcmtsw6RydCwgd2FydW0gZGllIEFwcFxuICAgICAgICAgIC8vIFN0YW5kb3J0LUJlcmVjaHRpZ3VuZ2VuIGJlbsO2dGlndCB1bmQgd2llIG1hbiBzaWUgaW4gZGVuIEVpbnN0ZWxsdW5nZW4gYWt0aXZpZXJlbiBrYW5uXG4gICAgICAgICAgYXdhaXQgdGhpcy5zaG93TG9jYXRpb25QZXJtaXNzaW9uQWxlcnQoKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlVuYmVrYW5udGVyIEJlcmVjaHRpZ3VuZ3NzdGF0dXNcIik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGZWhsZXIgYmVpIGRlciBCZXJlY2h0aWd1bmdzYWJmcmFnZTpcIiwgZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzaG93TG9jYXRpb25QZXJtaXNzaW9uQWxlcnQoKSB7XG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiAnU3RhbmRvcnQtQmVyZWNodGlndW5nIGJlbsO2dGlndCcsXG4gICAgICBtZXNzYWdlOiAnVW0gZGllIEthcnRlIHVuZCBOYXZpZ2F0aW9uc2Z1bmt0aW9uZW4gbnV0emVuIHp1IGvDtm5uZW4sIHdpcmQgWnVncmlmZiBhdWYgSWhyZW4gU3RhbmRvcnQgYmVuw7Z0aWd0LiBCaXR0ZSBha3RpdmllcmVuIFNpZSBkaWUgU3RhbmRvcnQtQmVyZWNodGlndW5nIGluIGRlbiBFaW5zdGVsbHVuZ2VuLicsXG4gICAgICBidXR0b25zOiBbJ09LJ11cbiAgICB9KTtcbiAgICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XG4gIH1cblxuICBpc1RlYW1BZG1pbih0ZWFtQWRtaW5MaXN0OiBhbnlbXSwgdGVhbUlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0ZWFtQWRtaW5MaXN0LCB0ZWFtSWQpXG4gICAgcmV0dXJuIHRlYW1BZG1pbkxpc3QgJiYgdGVhbUFkbWluTGlzdC5zb21lKHRlYW0gPT4gdGVhbS5pZCA9PT0gdGVhbUlkKTtcbiAgfVxuXG4gIGlvblZpZXdEaWRFbnRlcigpIHtcbiAgICB0aGlzLmdhbWUkLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKGdhbWUgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCI+PiBnYW1lXCIsIGdhbWUpO1xuICAgICAgaWYgKCF0aGlzLm5ld01hcCAmJiBnYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0TWFwXCIpO1xuXG4gICAgICAgIGlmICghdGhpcy5uZXdNYXApIHRoaXMuc2V0TWFwKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1BUCBFUlJPUj9cIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLm5ld01hcCkge1xuICAgICAgdGhpcy5uZXdNYXAuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuICAvLyBuZ1xuICBnZXRHYW1lKHRlYW1JZDogc3RyaW5nLCBnYW1lSWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzZXIkKCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICB0YXAoKHVzZXIpID0+IHtcbiAgICAgICAgLy8gdGhpcy5zZXRNYXAoKTtcbiAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIG5vdCBmb3VuZFwiKTtcbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuY2hhbXBpb25zaGlwU2VydmljZS5nZXRUZWFtR2FtZVJlZih0ZWFtSWQsIGdhbWVJZCkpLFxuICAgICAgc3dpdGNoTWFwKChnYW1lKSA9PiB7XG4gICAgICAgIGlmICghZ2FtZSkgcmV0dXJuIG9mKG51bGwpO1xuXG4gICAgICAgIC8vIEZldGNoIHRlYW0gZGV0YWlsc1xuICAgICAgICByZXR1cm4gdGhpcy5mYlNlcnZpY2UuZ2V0VGVhbVJlZih0ZWFtSWQpLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKHRlYW0gPT4ge1xuICAgICAgICAgICAgaWYgKCF0ZWFtKSByZXR1cm4gb2YobnVsbCk7XG5cblxuICAgICAgICAgICAgLy8gRmV0Y2ggYWxsIHRlYW0gbWVtYmVycyBmaXJzdFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmJTZXJ2aWNlLmdldFRlYW1NZW1iZXJSZWZzKHRlYW1JZCkucGlwZShcbiAgICAgICAgICAgICAgc3dpdGNoTWFwKHRlYW1NZW1iZXJzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZWFtTWVtYmVyUHJvZmlsZXMkID0gdGVhbU1lbWJlcnMubWFwKG1lbWJlciA9PlxuICAgICAgICAgICAgICAgICAgdGhpcy51c2VyUHJvZmlsZVNlcnZpY2UuZ2V0VXNlclByb2ZpbGVCeUlkKG1lbWJlci5pZCkucGlwZShcbiAgICAgICAgICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgICAgICAgICAgbWFwKHByb2ZpbGUgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5tZW1iZXIsIC8vIFNwcmVhZCBtZW1iZXIgdG8gcmV0YWluIGFsbCBvcmlnaW5hbCBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgICAgICAgLi4ucHJvZmlsZSwgLy8gU3ByZWFkIHByb2ZpbGUgdG8gb3ZlcndyaXRlIGFuZCBhZGQgcHJvZmlsZSBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBwcm9maWxlLmZpcnN0TmFtZSB8fCBcIlVua25vd25cIixcbiAgICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZTogcHJvZmlsZS5sYXN0TmFtZSB8fCBcIlVua25vd25cIixcbiAgICAgICAgICAgICAgICAgICAgICByb2xlczogbWVtYmVyLnJvbGVzIHx8IFtdXG4gICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBGYWlsZWQgdG8gZmV0Y2ggcHJvZmlsZSBmb3IgdGVhbSBtZW1iZXIgJHttZW1iZXIuaWR9OmAsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHsgLi4ubWVtYmVyLCBmaXJzdE5hbWU6IFwiVW5rbm93blwiLCBsYXN0TmFtZTogXCJVbmtub3duXCIsIHJvbGVzOiBtZW1iZXIucm9sZXMgfHwgW10sIHN0YXR1czogbnVsbCB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIC8vIEZldGNoIGFsbCBhdHRlbmRlZXMgbmV4dFxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JrSm9pbih0ZWFtTWVtYmVyUHJvZmlsZXMkKS5waXBlKFxuICAgICAgICAgICAgICAgICAgbWFwKHRlYW1NZW1iZXJzV2l0aERldGFpbHMgPT4gdGVhbU1lbWJlcnNXaXRoRGV0YWlscy5maWx0ZXIobWVtYmVyID0+IG1lbWJlciAhPT0gdW5kZWZpbmVkKSksIC8vIEZpbHRlcmluZyBvdXQgdW5kZWZpbmVkIGVudHJpZXNcbiAgICAgICAgICAgICAgICAgIHN3aXRjaE1hcCh0ZWFtTWVtYmVyc1dpdGhEZXRhaWxzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbXBpb25zaGlwU2VydmljZS5nZXRUZWFtR2FtZUF0dGVuZGVlc1JlZih0ZWFtSWQsIGdhbWVJZCkucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICBtYXAoYXR0ZW5kZWVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dGVuZGVlRGV0YWlscyA9IGF0dGVuZGVlcy5tYXAoYXR0ZW5kZWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWwgPSB0ZWFtTWVtYmVyc1dpdGhEZXRhaWxzLmZpbmQobWVtYmVyID0+IG1lbWJlci5pZCA9PT0gYXR0ZW5kZWUuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGV0YWlsID8geyAuLi5kZXRhaWwsIHN0YXR1czogYXR0ZW5kZWUuc3RhdHVzIH0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gbnVsbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dGVuZGVlTGlzdFRydWUgPSBhdHRlbmRlZURldGFpbHMuZmlsdGVyKGF0dCA9PiBhdHQuc3RhdHVzID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5maXJzdE5hbWUubG9jYWxlQ29tcGFyZShiLmZpcnN0TmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0ZW5kZWVMaXN0RmFsc2UgPSBhdHRlbmRlZURldGFpbHMuZmlsdGVyKGF0dCA9PiBhdHQuc3RhdHVzID09PSBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuZmlyc3ROYW1lLmxvY2FsZUNvbXBhcmUoYi5maXJzdE5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbmRlZElkcyA9IG5ldyBTZXQoYXR0ZW5kZWVEZXRhaWxzLm1hcChhdHQgPT4gYXR0LmlkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNb2RpZnkgaGVyZSB0byBhZGQgJ3N0YXR1czogbnVsbCcgZm9yIGVhY2ggdW5yZXNwb25kZWQgbWVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bnJlc3BvbmRlZE1lbWJlcnMgPSB0ZWFtTWVtYmVyc1dpdGhEZXRhaWxzLmZpbHRlcihtZW1iZXIgPT4gIXJlc3BvbmRlZElkcy5oYXMobWVtYmVyLmlkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChtZW1iZXIgPT4gKHsgLi4ubWVtYmVyLCBzdGF0dXM6IG51bGwgfSkpLnNvcnQoKGEsIGIpID0+IGEuZmlyc3ROYW1lLmxvY2FsZUNvbXBhcmUoYi5maXJzdE5hbWUpKTsgLy8gRW5zdXJpbmcgJ3N0YXR1czogbnVsbCcgaXMgZXhwbGljaXRseSBzZXRcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlckF0dGVuZGVlID0gYXR0ZW5kZWVEZXRhaWxzLmZpbmQoYXR0ID0+IGF0dC5pZCA9PT0gdGhpcy51c2VyLnVpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSB1c2VyQXR0ZW5kZWUgPyB1c2VyQXR0ZW5kZWUuc3RhdHVzIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmdhbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0sIC8vIEFkZCB0ZWFtIGRldGFpbHMgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtSWQ6IHRlYW1JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVzOiBhdHRlbmRlZURldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlTGlzdFRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlTGlzdEZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB1bnJlc3BvbmRlZE1lbWJlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGF0dGVuZGVlczpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvZih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmdhbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0sIC8vIEFkZCB0ZWFtIGRldGFpbHMgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtSWQ6IHRlYW1JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW5kZWVMaXN0VHJ1ZTogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVuZGVlTGlzdEZhbHNlOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5yZXNwb25kZWRNZW1iZXJzOiB0ZWFtTWVtYmVyc1dpdGhEZXRhaWxzLmZpbHRlcihtZW1iZXIgPT4gbWVtYmVyICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAobWVtYmVyID0+ICh7IC4uLm1lbWJlciwgc3RhdHVzOiBudWxsIH0pKSwgLy8gQWxzbyBlbnN1cmUgJ3N0YXR1czogbnVsbCcgaGVyZSBmb3IgY29uc2lzdGVuY3lcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdGVhbSBtZW1iZXJzOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvZih7XG4gICAgICAgICAgICAgICAgICAuLi5nYW1lLFxuICAgICAgICAgICAgICAgICAgdGVhbSwgLy8gQWRkIHRlYW0gZGV0YWlscyBoZXJlXG4gICAgICAgICAgICAgICAgICB0ZWFtSWQ6IHRlYW1JZCxcbiAgICAgICAgICAgICAgICAgIGF0dGVuZGVlczogW10sXG4gICAgICAgICAgICAgICAgICBhdHRlbmRlZUxpc3RUcnVlOiBbXSxcbiAgICAgICAgICAgICAgICAgIGF0dGVuZGVlTGlzdEZhbHNlOiBbXSxcbiAgICAgICAgICAgICAgICAgIHVucmVzcG9uZGVkTWVtYmVyczogW10sXG4gICAgICAgICAgICAgICAgICBzdGF0dXM6IG51bGxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gZ2V0R2FtZVdpdGhBdHRlbmRlZXM6XCIsIGVycik7XG4gICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICBhc3luYyB0b2dnbGVBbGwoc3RhdHVzOiBib29sZWFuLCBnYW1lOiBHYW1lKSB7XG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogXCJTb2xsZW4gYWxsZSBhbmdlbWVsZGV0IHdlcmRlbj9cIixcbiAgICAgIGhlYWRlcjogXCJBbGxlIGFubWVsZGVuXCIsXG4gICAgICBidXR0b25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIk5laW5cIixcbiAgICAgICAgICByb2xlOiBcImNhbmNlbFwiLFxuICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcblxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHJvbGU6IFwiXCIsXG4gICAgICAgICAgdGV4dDogXCJPS1wiLFxuICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IG1lbWJlciBvZiBnYW1lWyd1bnJlc3BvbmRlZE1lbWJlcnMnXSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBgU2V0IFN0YXR1cyAke3N0YXR1c30gZm9yIHVzZXIgJHt0aGlzLnVzZXIudWlkfSBhbmQgdGVhbSAke3RoaXMuZ2FtZS50ZWFtSWR9IGFuZCBnYW1lICR7Z2FtZS5pZH1gXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMuY2hhbXBpb25zaGlwU2VydmljZS5zZXRUZWFtR2FtZUF0dGVuZGVlU3RhdHVzQWRtaW4oXG4gICAgICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS50ZWFtSWQsXG4gICAgICAgICAgICAgICAgZ2FtZS5pZCxcbiAgICAgICAgICAgICAgICBtZW1iZXIuaWQsXG4gICAgICAgICAgICAgICkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvYXN0QWN0aW9uRXJyb3IoZSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByZXNlbnRUb2FzdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgXVxuICAgIH0pXG4gICAgYWxlcnQucHJlc2VudCgpO1xuXG4gIH1cblxuICBhc3luYyB0b2dnbGUoc3RhdHVzOiBib29sZWFuLCBnYW1lOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBTZXQgU3RhdHVzICR7c3RhdHVzfSBmb3IgdXNlciAke3RoaXMudXNlci51aWR9IGFuZCB0ZWFtICR7Z2FtZS50ZWFtSWR9IGFuZCBnYW1lICR7Z2FtZS5pZH1gXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhnYW1lKVxuICAgIGNvbnN0IG5ld1N0YXJ0RGF0ZSA9IGdhbWUuZGF0ZVRpbWUudG9EYXRlKCk7XG4gICAgbmV3U3RhcnREYXRlLnNldEhvdXJzKE51bWJlcihnYW1lLnRpbWUuc3Vic3RyaW5nKDAsIDIpKSk7XG4gICAgY29uc29sZS5sb2cobmV3U3RhcnREYXRlKTtcblxuICAgIC8vIEdldCB0ZWFtIHRocmVzaG9sZCB2aWEgdHJhaW5pbmcudGVhbUlkXG4gICAgY29uc29sZS5sb2coXCJHcmVuendlcnQgXCIpXG4gICAgY29uc3QgY2hhbXBpb25zaGlwVHJlc2hvbGQgPSBnYW1lLnRlYW0uY2hhbXBpb25zaGlwVGhyZXNob2xkIHx8IDA7XG4gICAgY29uc29sZS5sb2coY2hhbXBpb25zaGlwVHJlc2hvbGQpO1xuICAgIC8vIFZlcnDDpHRldGUgQWJtZWxkdW5nP1xuICAgIGlmICgoKG5ld1N0YXJ0RGF0ZS5nZXRUaW1lKCkgLSBuZXcgRGF0ZSgpLmdldFRpbWUoKSkgPCAoMTAwMCAqIDYwICogNjAgKiBjaGFtcGlvbnNoaXBUcmVzaG9sZCkpICYmIHN0YXR1cyA9PSBmYWxzZSAmJiBjaGFtcGlvbnNoaXBUcmVzaG9sZCkge1xuICAgICAgY29uc29sZS5sb2coXCJ0b28gbGF0ZVwiKTtcbiAgICAgIGF3YWl0IHRoaXMudG9vTGF0ZVRvZ2dsZSgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE9LXG4gICAgICBhd2FpdCB0aGlzLmNoYW1waW9uc2hpcFNlcnZpY2Uuc2V0VGVhbUdhbWVBdHRlbmRlZVN0YXR1cyhcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBnYW1lLnRlYW1JZCxcbiAgICAgICAgZ2FtZS5pZFxuICAgICAgKTtcbiAgICAgIHRoaXMucHJlc2VudFRvYXN0KCk7XG4gICAgfVxuXG4gIH1cbiAgYXN5bmMgdG9nZ2xlSXRlbShcbiAgICBzbGlkaW5nSXRlbTogSW9uSXRlbVNsaWRpbmcsXG4gICAgc3RhdHVzOiBib29sZWFuLFxuICAgIGdhbWU6IEdhbWUsXG4gICAgbWVtYmVySWQ6IHN0cmluZyxcbiAgKSB7XG4gICAgc2xpZGluZ0l0ZW0uY2xvc2VPcGVuZWQoKTtcblxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYFNldCBTdGF0dXMgJHtzdGF0dXN9IGZvciB1c2VyICR7bWVtYmVySWR9IGFuZCB0ZWFtICR7Z2FtZS50ZWFtSWR9IGFuZCBnYW1lICR7Z2FtZS5pZH1gXG4gICAgKTtcbiAgICBhd2FpdCB0aGlzLmNoYW1waW9uc2hpcFNlcnZpY2Uuc2V0VGVhbUdhbWVBdHRlbmRlZVN0YXR1c0FkbWluKFxuICAgICAgc3RhdHVzLFxuICAgICAgZ2FtZS50ZWFtSWQsXG4gICAgICBnYW1lLmlkLFxuICAgICAgbWVtYmVySWQsXG4gICAgKTtcbiAgICB0aGlzLnByZXNlbnRUb2FzdCgpO1xuICB9XG5cbiAgYXN5bmMgdG9hc3RBY3Rpb25FcnJvcihlcnJvcikge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgICAgY29sb3I6IFwiZGFuZ2VyXCIsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XG4gIH1cbiAgYXN5bmMgcHJlc2VudFRvYXN0KCkge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy50cmFuc2xhdGUuZ2V0KFwiY29tbW9uLnN1Y2Nlc3NfX3NhdmVkXCIpKSxcbiAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgfSk7XG4gICAgdG9hc3QucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgY2xvc2UoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubW9kYWxDdHJsLmRpc21pc3MobnVsbCwgXCJjbG9zZVwiKTtcbiAgICAvLyB0aGlzLm5hdkNvbnRyb2xsZXIucG9wKCk7XG4gIH1cblxuICBhc3luYyBjb25maXJtKCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKHRoaXMuZ2FtZSwgXCJjb25maXJtXCIpO1xuICAgIC8qdGhpcy5uYXZDb250cm9sbGVyLm5hdmlnYXRlQmFjayhcImNoYW1waW9uc2hpcFwiLCB7XG4gICAgICBzdGF0ZToge1xuICAgICAgICByb2xlOiBcImNvbmZpcm1cIixcbiAgICAgICAgZGF0YTogdGhpcy5nYW1lLFxuICAgICAgfSxcbiAgICB9KTsqL1xuICB9XG5cbiAgYXN5bmMgc2V0TWFwKCkge1xuICAgIC8vIGlmKHRoaXMubWFwUmVmID09IG51bGwpIHtcbiAgICAvLyAgIHJldHVybjtcbiAgICAvLyB9XG4gICAgaWYgKHRoaXMubWFwUmVmID09IHVuZGVmaW5lZCB8fCB0aGlzLm1hcFJlZiA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwic2V0TWFwXCIpO1xuICAgIHRoaXMubmV3TWFwID0gYXdhaXQgR29vZ2xlTWFwLmNyZWF0ZSh7XG4gICAgICBpZDogXCJteS1tYXAtXCIgKyB0aGlzLmdhbWUuaWQsIC8vIFVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGlzIG1hcCBpbnN0YW5jZVxuICAgICAgZWxlbWVudDogdGhpcy5tYXBSZWYubmF0aXZlRWxlbWVudCwgLy8gbWFwUmVmLCAvLyByZWZlcmVuY2UgdG8gdGhlIGNhcGFjaXRvci1nb29nbGUtbWFwIGVsZW1lbnRcbiAgICAgIGFwaUtleTogZW52aXJvbm1lbnQuZ29vZ2xlTWFwc0FwaUtleSwgLy8gWW91ciBHb29nbGUgTWFwcyBBUEkgS2V5XG4gICAgICBjb25maWc6IHtcbiAgICAgICAgY2VudGVyOiB7XG4gICAgICAgICAgLy8gVGhlIGluaXRpYWwgcG9zaXRpb24gdG8gYmUgcmVuZGVyZWQgYnkgdGhlIG1hcFxuICAgICAgICAgIGxhdDogTnVtYmVyKHRoaXMuZ2FtZS5sYXRpdHVkZSksXG4gICAgICAgICAgbG5nOiBOdW1iZXIodGhpcy5nYW1lLmxvbmdpdHVkZSksXG4gICAgICAgIH0sXG4gICAgICAgIHpvb206IDEyLCAvLyBUaGUgaW5pdGlhbCB6b29tIGxldmVsIHRvIGJlIHJlbmRlcmVkIGJ5IHRoZSBtYXBcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBhd2FpdCB0aGlzLm5ld01hcC5lbmFibGVDdXJyZW50TG9jYXRpb24odHJ1ZSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJhZGQgTWFya2VyXCIpO1xuICAgIHRoaXMubmV3TWFwLmFkZE1hcmtlcih7XG4gICAgICB0aXRsZTogYCR7dGhpcy5nYW1lLmxvY2F0aW9ufSBpbiAke3RoaXMuZ2FtZS5jaXR5fWAsXG4gICAgICBjb29yZGluYXRlOiB7XG4gICAgICAgIGxhdDogTnVtYmVyKHRoaXMuZ2FtZS5sYXRpdHVkZSksXG4gICAgICAgIGxuZzogTnVtYmVyKHRoaXMuZ2FtZS5sb25naXR1ZGUpLFxuICAgICAgfSxcbiAgICAgIHNuaXBwZXQ6IGAke3RoaXMuZ2FtZS5sb2NhdGlvbn0gaW4gJHt0aGlzLmdhbWUuY2l0eX1gLFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBhd2FpdCBHZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKTtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcy5jb29yZHMubGF0aXR1ZGUgJiZcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcy5jb29yZHMubG9uZ2l0dWRlXG4gICAgICApIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJhZGQgTWFya2VyIHdpdGggY3VycmVudCBwb3NpdGlvblwiKTtcbiAgICAgICAgdGhpcy5uZXdNYXAuYWRkTWFya2VyKHtcbiAgICAgICAgICB0aXRsZTogXCJNZWluZSBQb3NpdGlvblwiLFxuICAgICAgICAgIGNvb3JkaW5hdGU6IHtcbiAgICAgICAgICAgIGxhdDogdGhpcy5jb29yZGluYXRlcy5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgICBsbmc6IHRoaXMuY29vcmRpbmF0ZXMuY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzRmxhdDogdHJ1ZSxcbiAgICAgICAgICBzbmlwcGV0OiBcIk1laW5lIFBvc2l0aW9uXCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibm8gY29vcmRpbmF0ZXMgb24gbWFwXCIpO1xuICAgIH1cbiAgfVxuICBhc3luYyBvcGVuTWVtYmVyKG1lbWJlcjogUHJvZmlsZSkge1xuICAgIGNvbnNvbGUubG9nKFwib3Blbk1lbWJlclwiKTtcbiAgICBjb25zdCBtb2RhbCA9IGF3YWl0IHRoaXMubW9kYWxDdHJsLmNyZWF0ZSh7XG4gICAgICBjb21wb25lbnQ6IE1lbWJlclBhZ2UsXG4gICAgICBwcmVzZW50aW5nRWxlbWVudDogYXdhaXQgdGhpcy5tb2RhbEN0cmwuZ2V0VG9wKCksXG4gICAgICBjYW5EaXNtaXNzOiB0cnVlLFxuICAgICAgc2hvd0JhY2tkcm9wOiB0cnVlLFxuICAgICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgZGF0YTogbWVtYmVyLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBtb2RhbC5wcmVzZW50KCk7XG5cbiAgICBjb25zdCB7IGRhdGEsIHJvbGUgfSA9IGF3YWl0IG1vZGFsLm9uV2lsbERpc21pc3MoKTtcblxuICAgIGlmIChyb2xlID09PSBcImNvbmZpcm1cIikge1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9wZW5MaW5ldXAoZ2FtZTogR2FtZSkge1xuICAgIC8vIGNvbnN0IHByZXNlbnRpbmdFbGVtZW50ID0gYXdhaXQgdGhpcy5tb2RhbEN0cmwuZ2V0VG9wKCk7XG4gICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoe1xuICAgICAgY29tcG9uZW50OiBMaW5ldXBQYWdlLFxuICAgICAgcHJlc2VudGluZ0VsZW1lbnQ6IGF3YWl0IHRoaXMubW9kYWxDdHJsLmdldFRvcCgpLFxuICAgICAgY2FuRGlzbWlzczogdHJ1ZSxcbiAgICAgIHNob3dCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIGRhdGE6IGdhbWUsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIG1vZGFsLnByZXNlbnQoKTtcblxuICAgIGNvbnN0IHsgZGF0YSwgcm9sZSB9ID0gYXdhaXQgbW9kYWwub25XaWxsRGlzbWlzcygpO1xuXG4gICAgaWYgKHJvbGUgPT09IFwiY29uZmlybVwiKSB7XG4gICAgfVxuICB9XG4gIGFzeW5jIHRvb0xhdGVUb2dnbGUoKSB7XG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiBcIkFibWVsZGVuIG5pY2h0IG3DtmdsaWNoXCIsXG4gICAgICBtZXNzYWdlOiBcIkJpdHRlIG1lbGRlIGRpY2ggZGlyZWt0IGJlaW0gVHJhaW5lcnRlYW0gdW0gZGljaCBhYnp1bWVsZGVuXCIsXG4gICAgICBidXR0b25zOiBbe1xuICAgICAgICByb2xlOiBcIlwiLFxuICAgICAgICB0ZXh0OiBcIk9LXCIsXG4gICAgICAgIGhhbmRsZXI6IChkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9KVxuICAgIGFsZXJ0LnByZXNlbnQoKVxuICB9XG5cbiAgYXN5bmMgb3Blbk1hcHMoZ2FtZTogR2FtZSkge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gYXdhaXQgR2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKCk7XG4gICAgaWYgKGNvb3JkaW5hdGVzLmNvb3Jkcy5sb25naXR1ZGUgJiYgY29vcmRpbmF0ZXMuY29vcmRzLmxhdGl0dWRlKSB7XG4gICAgICBCcm93c2VyLm9wZW4oe1xuICAgICAgICB1cmw6XG4gICAgICAgICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZGlyLz9hcGk9MSZkZXN0aW5hdGlvbj1cIiArXG4gICAgICAgICAgZ2FtZS5sYXRpdHVkZSArXG4gICAgICAgICAgXCIsXCIgK1xuICAgICAgICAgIGdhbWUubG9uZ2l0dWRlICtcbiAgICAgICAgICBcIiZvcmlnaW49XCIgK1xuICAgICAgICAgIGNvb3JkaW5hdGVzLmNvb3Jkcy5sYXRpdHVkZSArXG4gICAgICAgICAgXCIsXCIgK1xuICAgICAgICAgIGNvb3JkaW5hdGVzLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgQnJvd3Nlci5vcGVuKHtcbiAgICAgICAgdXJsOlxuICAgICAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2Rpci8/YXBpPTEmZGVzdGluYXRpb249XCIgK1xuICAgICAgICAgIGdhbWUubGF0aXR1ZGUgK1xuICAgICAgICAgIFwiLFwiICtcbiAgICAgICAgICBnYW1lLmxvbmdpdHVkZSxcbiAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiZ2FtZSQgfCBhc3luYyBhcyBnYW1lOyBlbHNlIGxvYWRpbmdcIj5cbiAgPCEtLTxpb24taGVhZGVyIFt0cmFuc2x1Y2VudF09XCJ0cnVlXCI+XG4gICAgPGlvbi10b29sYmFyPlxuICAgICAgPGlvbi10aXRsZT48L2lvbi10aXRsZT5cbiAgICAgIDxpb24tYnV0dG9ucyBzbG90PVwicHJpbWFyeVwiPlxuICAgICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwiY2xvc2UoKVwiPnt7XCJjb21tb24uY2xvc2VcIiB8IHRyYW5zbGF0ZX19PC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24tYnV0dG9ucz5cbiAgICA8L2lvbi10b29sYmFyPlxuICA8L2lvbi1oZWFkZXI+LS0+XG5cbiAgPCEtLSBjbGFzcz1cImlvbi1wYWRkaW5nXCIgLS0+XG4gIDxpb24tY29udGVudD5cbiAgICBcbiAgICA8aW9uLWZhYiB2ZXJ0aWNhbD1cInRvcFwiIGhvcml6b250YWw9XCJlbmRcIj5cbiAgICAgIDxpb24tZmFiLWJ1dHRvbiBzaXplPVwic21hbGxcIiAoY2xpY2spPVwiY2xvc2UoKVwiPlxuICAgICAgICA8aW9uLWljb24gbmFtZT1cImNsb3NlXCIgc2l6ZT1cInNtYWxsXCI+PC9pb24taWNvbj5cbiAgICAgIDwvaW9uLWZhYi1idXR0b24+XG4gICAgPC9pb24tZmFiPlxuICAgIDxjYXBhY2l0b3ItZ29vZ2xlLW1hcCAjbWFwICpuZ0lmPVwiZ2FtZS5sYXRpdHVkZSAmJiBnYW1lLmxvbmdpdHVkZSAmJiAhcGxhdGZvcm0uaXMoJ2FuZHJvaWQnKVwiPjwvY2FwYWNpdG9yLWdvb2dsZS1tYXA+XG4gICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCI+XG5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1hdmF0YXIgc2xvdD1cInN0YXJ0XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJ7e2dhbWUudGVhbUhvbWVMb2dvfX1cIiAvPlxuICAgICAgICA8L2lvbi1hdmF0YXI+XG4gICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgPGgyPnt7Z2FtZS50ZWFtSG9tZX19PC9oMj5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWF2YXRhciBzbG90PVwic3RhcnRcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cInt7Z2FtZS50ZWFtQXdheUxvZ299fVwiIC8+XG4gICAgICAgIDwvaW9uLWF2YXRhcj5cbiAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICA8aDI+e3tnYW1lLnRlYW1Bd2F5fX08L2gyPlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwiaG9tZS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj5cbiAgICAgICAgICA8aDI+e3tnYW1lLmRlc2NyaXB0aW9ufX08L2gyPlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJjYWxlbmRhci1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICA8aDI+e3tnYW1lLmRhdGV9fSB7e2dhbWUudGltZX19IFVocjwvaDI+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cblxuICAgICAgPGlvbi1pdGVtICpuZ0lmPVwiZ2FtZS5sb2NhdGlvblwiPlxuICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cImxvY2F0aW9uLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsIGNsYXNzPVwiaW9uLXRleHQtd3JhcFwiPlxuICAgICAgICAgIDxoMj57e2dhbWUubG9jYXRpb259fSB7e2dhbWUuY2l0eX19PC9oMj5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgIDxpb24taWNvbiAqbmdJZj1cImdhbWUubG9uZ2l0dWRlXCIgY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm9wZW5NYXBzKGdhbWUpXCIgc2xvdD1cImVuZFwiIG5hbWU9XCJtYXAtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwidHJvcGh5LW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsIGNsYXNzPVwiaW9uLXRleHQtd3JhcFwiPlxuICAgICAgICAgIDxoMj57e2dhbWUubGlnYX19IHt7Z2FtZS50ZWFtTmFtZX19PC9oMj5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8aW9uLWl0ZW0gKm5nSWY9XCJnYW1lLnJlc3VsdCAmJiBnYW1lLnJlc3VsdCAhPSAnMDowKDA6MCknXCI+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwicG9kaXVtLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsIGNsYXNzPVwiaW9uLXRleHQtd3JhcFwiPlxuICAgICAgICAgIDxoMj57e2dhbWUucmVzdWx0fX08L2gyPlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDxpb24taXRlbSAqbmdJZj1cImdhbWUucmVmZXJlZTFcIj5cbiAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJwZXJzb24tY2lyY2xlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsIGNsYXNzPVwiaW9uLXRleHQtd3JhcFwiPlxuICAgICAgICAgIDxoMj57e2dhbWUucmVmZXJlZTF9fSB7e2dhbWUucmVmZXJlZTJ9fTwvaDI+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cblxuICAgICAgPGlvbi1pdGVtICpuZ0lmPVwiZ2FtZS5zcGVjdGF0b3JzICYmIGdhbWUuc3BlY3RhdG9ycyAhPSAnMCcgXCI+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwicGVvcGxlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsIGNsYXNzPVwiaW9uLXRleHQtd3JhcFwiPlxuICAgICAgICAgIDxoMj57e2dhbWUuc3BlY3RhdG9yc319PC9oMj5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgIDwvaW9uLWxpc3Q+XG4gICAgPCEtLVxuICAgICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCIgbGluZXM9XCJub25lXCI+XG4gICAgICAgIDxpb24taXRlbSAoY2xpY2spPVwib3BlbkxpbmV1cChnYW1lKVwiIGRldGFpbD1cInRydWVcIj4gTGluZXVwIDwvaW9uLWl0ZW0+XG4gICAgICA8L2lvbi1saXN0PlxuICAgIC0tPlxuXG4gICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCIgbGluZXM9XCJub25lXCIgKm5nSWY9XCJpc0Z1dHVyZVwiPlxuICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAge3tcImNvbW1vbi5hdHRlbmRhbmNlc19fYWJzZW5jZXNcIiB8IHRyYW5zbGF0ZX19XG4gICAgICA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICAgIDxpb24taXRlbSBjbGFzcz1cIm15Y2x1YlN0YXR1c1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ2FtZS5oYXNPd25Qcm9wZXJ0eSgnc3RhdHVzJyk7IGVsc2UgbG9hZGluZ1N0YXR1c1wiPlxuICAgICAgICAgIDxpb24tZmFiLWJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlKHRydWUsIGdhbWUpXCIgc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJ3YXJuaW5nXCIgc2xvdD1cInN0YXJ0XCJcbiAgICAgICAgICAgICpuZ0lmPVwiZ2FtZS5zdGF0dXMgPT09IG51bGxcIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiaGVscC1jaXJjbGVcIj4gPC9pb24taWNvbj5cbiAgICAgICAgICA8L2lvbi1mYWItYnV0dG9uPlxuXG4gICAgICAgICAgPGlvbi1mYWItYnV0dG9uIChjbGljayk9XCJ0b2dnbGUodHJ1ZSwgZ2FtZSlcIiBzaXplPVwic21hbGxcIiBjb2xvcj1cImRhbmdlclwiIHNsb3Q9XCJzdGFydFwiXG4gICAgICAgICAgICAqbmdJZj1cImdhbWUuc3RhdHVzID09PSBmYWxzZVwiPlxuICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjbG9zZS1jaXJjbGVcIj4gPC9pb24taWNvbj5cbiAgICAgICAgICA8L2lvbi1mYWItYnV0dG9uPlxuXG4gICAgICAgICAgPGlvbi1mYWItYnV0dG9uIChjbGljayk9XCJ0b2dnbGUoZmFsc2UsIGdhbWUpXCIgc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJzdWNjZXNzXCIgc2xvdD1cInN0YXJ0XCJcbiAgICAgICAgICAgICpuZ0lmPVwiZ2FtZS5zdGF0dXMgPT09IHRydWVcIj5cbiAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiY2hlY2ttYXJrLWNpcmNsZVwiPiA8L2lvbi1pY29uPlxuICAgICAgICAgIDwvaW9uLWZhYi1idXR0b24+XG5cbiAgICAgICAgICA8aW9uLWxhYmVsPnt7XCJjb21tb24ubXlfX3N0YXR1c1wiIHwgdHJhbnNsYXRlfX08L2lvbi1sYWJlbD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRlYW1BZG1pbkxpc3QkIHwgYXN5bmMgYXMgdGVhbUFkbWluTGlzdFwiPlxuICAgICAgICA8aW9uLWl0ZW0gKm5nSWY9XCJnYW1lWyd1bnJlc3BvbmRlZE1lbWJlcnMnXS5sZW5ndGggPiAwICYmIGlzVGVhbUFkbWluKHRlYW1BZG1pbkxpc3QsIGdhbWUudGVhbUlkKVwiPlxuICAgICAgICAgIDxpb24taWNvbiBjb2xvcj1cIndhcm5pbmdcIiBzbG90PVwic3RhcnRcIiBuYW1lPVwiaGVscC1jaXJjbGVcIj5cbiAgICAgICAgICA8L2lvbi1pY29uPlxuICAgICAgICAgIDxpb24tbGFiZWw+e3tcImNvbW1vbi5ub3JlcGx5XCIgfCB0cmFuc2xhdGV9fToge3tnYW1lWyd1bnJlc3BvbmRlZE1lbWJlcnMnXS5sZW5ndGh9fTwvaW9uLWxhYmVsPlxuXG4gICAgICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgICAgIGZpbGw9XCJjbGVhclwiIHNsb3Q9XCJlbmRcIiAoY2xpY2spPVwidG9nZ2xlQWxsKHRydWUsIGdhbWUpXCI+e3tcImNvbW1vbi5hbGxlX2FubWVsZGVuXCIgfFxuICAgICAgICAgICAgdHJhbnNsYXRlfX08L2lvbi1idXR0b24+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG5cblxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9pb24tbGlzdD5cblxuICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiPlxuICAgICAgPGlvbi1hY2NvcmRpb24tZ3JvdXAgW211bHRpcGxlXT1cInRydWVcIiBbdmFsdWVdPVwiWyd5ZXMnXVwiPlxuICAgICAgICA8aW9uLWFjY29yZGlvbiB2YWx1ZT1cInllc1wiICpuZ0lmPVwiZ2FtZVsnYXR0ZW5kZWVMaXN0VHJ1ZSddLmxlbmd0aCA+IDBcIj4+XG4gICAgICAgICAgPGlvbi1pdGVtIHNsb3Q9XCJoZWFkZXJcIiBjb2xvcj1cImxpZ2h0XCI+XG4gICAgICAgICAgICA8aW9uLWxhYmVsPnt7XCJjb21tb24ucHJlc2VudFwiIHwgdHJhbnNsYXRlfX06XG4gICAgICAgICAgICAgIHt7Z2FtZVsnYXR0ZW5kZWVMaXN0VHJ1ZSddLmxlbmd0aH19PC9pb24tbGFiZWw+XG4gICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8IS0tIGNsYXNzPVwiaW9uLXBhZGRpbmdcIi0tPlxuICAgICAgICAgICAgPGlvbi1saXN0PlxuICAgICAgICAgICAgICA8aW9uLWl0ZW0tc2xpZGluZyAjaXRlbSAqbmdGb3I9XCJsZXQgbWVtYmVyIG9mIGdhbWVbJ2F0dGVuZGVlTGlzdFRydWUnXVwiPlxuICAgICAgICAgICAgICAgIDxpb24taXRlbSBkZXRhaWw9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8aW9uLWljb24gY29sb3I9XCJzdWNjZXNzXCIgc2xvdD1cInN0YXJ0XCIgbmFtZT1cImNoZWNrbWFyay1jaXJjbGVcIj5cbiAgICAgICAgICAgICAgICAgIDwvaW9uLWljb24+XG5cbiAgICAgICAgICAgICAgICAgIDxpb24tbGFiZWwgKGNsaWNrKT1cIm9wZW5NZW1iZXIobWVtYmVyKVwiPnt7bWVtYmVyLmZpcnN0TmFtZX19IHt7bWVtYmVyLmxhc3ROYW1lfX08L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpb24tYmFkZ2UgKm5nRm9yPVwibGV0IHJvbGUgb2YgbWVtYmVyLnJvbGVzXCIgc2xvdD1cImVuZFwiPnt7cm9sZX19PC9pb24tYmFkZ2U+XG4gICAgICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGVhbUFkbWluTGlzdCQgfCBhc3luYyBhcyB0ZWFtQWRtaW5MaXN0XCI+XG4gICAgICAgICAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9ucyAqbmdJZj1cImlzVGVhbUFkbWluKHRlYW1BZG1pbkxpc3QsIGdhbWUudGVhbUlkKVwiIHNpZGU9XCJlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlvbi1pdGVtLW9wdGlvbiBjb2xvcj1cInN1Y2Nlc3NcIiAqbmdJZj1cIm1lbWJlci5zdGF0dXMgPT09IGZhbHNlIHx8IG1lbWJlci5zdGF0dXMgPT09IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVJdGVtKGl0ZW0sIHRydWUsIGdhbWUsIG1lbWJlci5pZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJjaGVja21hcmstY2lyY2xlXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9pb24taXRlbS1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxpb24taXRlbS1vcHRpb24gY29sb3I9XCJkYW5nZXJcIiAqbmdJZj1cIm1lbWJlci5zdGF0dXMgPT09IHRydWUgfHwgbWVtYmVyLnN0YXR1cyA9PT0gbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZUl0ZW0oaXRlbSwgZmFsc2UsIGdhbWUsIG1lbWJlci5pZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJjbG9zZS1jaXJjbGVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9ucz5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9pb24taXRlbS1zbGlkaW5nPlxuICAgICAgICAgICAgPC9pb24tbGlzdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9pb24tYWNjb3JkaW9uPlxuICAgICAgICA8aW9uLWFjY29yZGlvbiB2YWx1ZT1cIm5vXCIgKm5nSWY9XCJnYW1lWydhdHRlbmRlZUxpc3RGYWxzZSddLmxlbmd0aCA+IDBcIj4+XG4gICAgICAgICAgPGlvbi1pdGVtIHNsb3Q9XCJoZWFkZXJcIiBjb2xvcj1cImxpZ2h0XCI+XG4gICAgICAgICAgICA8aW9uLWxhYmVsPnt7XCJjb21tb24uYWJzZW50XCIgfCB0cmFuc2xhdGV9fTpcbiAgICAgICAgICAgICAge3tnYW1lWydhdHRlbmRlZUxpc3RGYWxzZSddLmxlbmd0aH19PC9pb24tbGFiZWw+XG4gICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8IS0tIGNsYXNzPVwiaW9uLXBhZGRpbmdcIi0tPlxuICAgICAgICAgICAgPGlvbi1saXN0PlxuICAgICAgICAgICAgICA8aW9uLWl0ZW0tc2xpZGluZyAjaXRlbSAqbmdGb3I9XCJsZXQgbWVtYmVyIG9mIGdhbWVbJ2F0dGVuZGVlTGlzdEZhbHNlJ11cIj5cbiAgICAgICAgICAgICAgICA8aW9uLWl0ZW0gZGV0YWlsPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIGNvbG9yPVwiZGFuZ2VyXCIgc2xvdD1cInN0YXJ0XCIgbmFtZT1cImNsb3NlLWNpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgPC9pb24taWNvbj5cbiAgICAgICAgICAgICAgICAgIDxpb24tbGFiZWwgKGNsaWNrKT1cIm9wZW5NZW1iZXIobWVtYmVyKVwiPnt7bWVtYmVyLmZpcnN0TmFtZX19IHt7bWVtYmVyLmxhc3ROYW1lfX08L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpb24tYmFkZ2UgKm5nRm9yPVwibGV0IHJvbGUgb2YgbWVtYmVyLnJvbGVzXCIgc2xvdD1cImVuZFwiPnt7cm9sZX19PC9pb24tYmFkZ2U+XG4gICAgICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGVhbUFkbWluTGlzdCQgfCBhc3luYyBhcyB0ZWFtQWRtaW5MaXN0XCI+XG4gICAgICAgICAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9ucyAqbmdJZj1cImlzVGVhbUFkbWluKHRlYW1BZG1pbkxpc3QsIGdhbWUudGVhbUlkKVwiIHNpZGU9XCJlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlvbi1pdGVtLW9wdGlvbiBjb2xvcj1cInN1Y2Nlc3NcIiAqbmdJZj1cIm1lbWJlci5zdGF0dXMgPT09IGZhbHNlIHx8IG1lbWJlci5zdGF0dXMgPT09IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVJdGVtKGl0ZW0sIHRydWUsIGdhbWUsIG1lbWJlci5pZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJjaGVja21hcmstY2lyY2xlXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9pb24taXRlbS1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxpb24taXRlbS1vcHRpb24gY29sb3I9XCJkYW5nZXJcIiAqbmdJZj1cIm1lbWJlci5zdGF0dXMgPT09IHRydWUgfHwgbWVtYmVyLnN0YXR1cyA9PT0gbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZUl0ZW0oaXRlbSwgZmFsc2UsIGdhbWUsIG1lbWJlci5pZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJjbG9zZS1jaXJjbGVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9ucz5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9pb24taXRlbS1zbGlkaW5nPlxuICAgICAgICAgICAgPC9pb24tbGlzdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9pb24tYWNjb3JkaW9uPlxuICAgICAgICA8aW9uLWFjY29yZGlvbiB2YWx1ZT1cIm51bGxcIiAqbmdJZj1cImdhbWVbJ3VucmVzcG9uZGVkTWVtYmVycyddLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICA8aW9uLWl0ZW0gc2xvdD1cImhlYWRlclwiIGNvbG9yPVwibGlnaHRcIj5cbiAgICAgICAgICAgIDxpb24tbGFiZWw+e3tcImNvbW1vbi5ub3JlcGx5XCIgfCB0cmFuc2xhdGV9fTpcbiAgICAgICAgICAgICAge3tnYW1lWyd1bnJlc3BvbmRlZE1lbWJlcnMnXS5sZW5ndGh9fTwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgPCEtLTxuZy1jb250YWluZXIgKm5nSWY9XCJ0ZWFtQWRtaW5MaXN0JCB8IGFzeW5jIGFzIHRlYW1BZG1pbkxpc3RcIj5cbiAgICAgICAgICAgICAgPGlvbi1idXR0b24gKm5nSWY9XCJnYW1lWyd1bnJlc3BvbmRlZE1lbWJlcnMnXS5sZW5ndGggPiAwICYmIGlzVGVhbUFkbWluKHRlYW1BZG1pbkxpc3QsIGdhbWUudGVhbUlkKVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImNsZWFyXCIgc2xvdD1cImVuZFwiIChjbGljayk9XCJ0b2dnbGVBbGwodHJ1ZSwgZ2FtZSlcIj57e1wiY29tbW9uLmFsbGVfYW5tZWxkZW5cIiB8XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlfX08L2lvbi1idXR0b24+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj4tLT5cbiAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgIDxkaXYgc2xvdD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDwhLS0gY2xhc3M9XCJpb24tcGFkZGluZ1wiLS0+XG4gICAgICAgICAgICA8aW9uLWxpc3Q+XG4gICAgICAgICAgICAgIDxpb24taXRlbS1zbGlkaW5nICNpdGVtICpuZ0Zvcj1cImxldCBtZW1iZXIgb2YgZ2FtZVsndW5yZXNwb25kZWRNZW1iZXJzJ11cIj5cblxuICAgICAgICAgICAgICAgIDxpb24taXRlbSBkZXRhaWw9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8aW9uLWljb24gY29sb3I9XCJ3YXJuaW5nXCIgc2xvdD1cInN0YXJ0XCIgbmFtZT1cImhlbHAtY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICA8L2lvbi1pY29uPlxuXG4gICAgICAgICAgICAgICAgICA8aW9uLWxhYmVsIChjbGljayk9XCJvcGVuTWVtYmVyKG1lbWJlcilcIj57e21lbWJlci5maXJzdE5hbWV9fSB7e21lbWJlci5sYXN0TmFtZX19PC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW9uLWJhZGdlICpuZ0Zvcj1cImxldCByb2xlIG9mIG1lbWJlci5yb2xlc1wiIHNsb3Q9XCJlbmRcIj57e3JvbGV9fTwvaW9uLWJhZGdlPlxuICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRlYW1BZG1pbkxpc3QkIHwgYXN5bmMgYXMgdGVhbUFkbWluTGlzdFwiPlxuICAgICAgICAgICAgICAgICAgPGlvbi1pdGVtLW9wdGlvbnMgKm5nSWY9XCJpc1RlYW1BZG1pbih0ZWFtQWRtaW5MaXN0LCBnYW1lLnRlYW1JZClcIiBzaWRlPVwiZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpb24taXRlbS1vcHRpb24gY29sb3I9XCJzdWNjZXNzXCIgKm5nSWY9XCJtZW1iZXIuc3RhdHVzID09PSBmYWxzZSB8fCBtZW1iZXIuc3RhdHVzID09PSBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlSXRlbShpdGVtLCB0cnVlLCBnYW1lLCBtZW1iZXIuaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwiY2hlY2ttYXJrLWNpcmNsZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8aW9uLWl0ZW0tb3B0aW9uIGNvbG9yPVwiZGFuZ2VyXCIgKm5nSWY9XCJtZW1iZXIuc3RhdHVzID09PSB0cnVlIHx8IG1lbWJlci5zdGF0dXMgPT09IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVJdGVtKGl0ZW0sIGZhbHNlLCBnYW1lLCBtZW1iZXIuaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwiY2xvc2UtY2lyY2xlXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9pb24taXRlbS1vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbnM+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvaW9uLWl0ZW0tc2xpZGluZz5cbiAgICAgICAgICAgIDwvaW9uLWxpc3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaW9uLWFjY29yZGlvbj5cbiAgICAgIDwvaW9uLWFjY29yZGlvbi1ncm91cD5cbiAgICA8L2lvbi1saXN0PlxuICA8L2lvbi1jb250ZW50PlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy10ZW1wbGF0ZSAjbG9hZGluZ1N0YXR1cz5cbiAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDEwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA2MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuPC9uZy10ZW1wbGF0ZT5cblxuPCEtLSBHYW1lIERldGFpbHMgU2tlbGV0b24gLS0+XG48bmctdGVtcGxhdGUgI2xvYWRpbmc+XG4gIDxpb24tY29udGVudD5cbiAgICA8IS0tIEZBQiBCdXR0b24gLS0+XG4gICAgPGlvbi1mYWIgdmVydGljYWw9XCJ0b3BcIiBob3Jpem9udGFsPVwiZW5kXCI+XG4gICAgICA8aW9uLWZhYi1idXR0b24gc2l6ZT1cInNtYWxsXCI+XG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwiY2xvc2VcIiBzaXplPVwic21hbGxcIj48L2lvbi1pY29uPlxuICAgICAgPC9pb24tZmFiLWJ1dHRvbj5cbiAgICA8L2lvbi1mYWI+XG5cbiAgICA8IS0tIE1hcCBQbGFjZWhvbGRlciAtLT5cbiAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogMjAwcHg7IGJhY2tncm91bmQ6ICNlMGUwZTA7XCI+XG4gICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gVGVhbXMgYW5kIEdhbWUgSW5mbyAtLT5cbiAgICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIj5cbiAgICAgIDwhLS0gSG9tZSBUZWFtIC0tPlxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWF2YXRhciBzbG90PVwic3RhcnRcIj5cbiAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQ+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgPC9pb24tYXZhdGFyPlxuICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA2MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDwhLS0gQXdheSBUZWFtIC0tPlxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWF2YXRhciBzbG90PVwic3RhcnRcIj5cbiAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQ+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgPC9pb24tYXZhdGFyPlxuICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA3MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDwhLS0gRGVzY3JpcHRpb24gLS0+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwiaG9tZS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj5cbiAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogODUlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8IS0tIERhdGUgJiBUaW1lIC0tPlxuICAgICAgPGlvbi1pdGVtPlxuICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cImNhbGVuZGFyLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA0MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDwhLS0gTG9jYXRpb24gLS0+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwibG9jYXRpb24tb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbGFiZWwgY2xhc3M9XCJpb24tdGV4dC13cmFwXCI+XG4gICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDcwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICA8aW9uLWljb24gc2xvdD1cImVuZFwiIG5hbWU9XCJtYXAtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICA8IS0tIExlYWd1ZS9Db21wZXRpdGlvbiAtLT5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJ0cm9waHktb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDUwJVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cblxuICAgICAgPCEtLSBSZXN1bHQgLS0+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwicG9kaXVtLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiAzMCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDwhLS0gUmVmZXJlZSAtLT5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJwZXJzb24tY2lyY2xlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA2NSVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgIDwhLS0gU3BlY3RhdG9ycyAtLT5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJwZW9wbGUtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDI1JVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cbiAgICA8L2lvbi1saXN0PlxuXG4gICAgPCEtLSBBdHRlbmRhbmNlIFNlY3Rpb24gLS0+XG4gICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCIgbGluZXM9XCJub25lXCI+XG4gICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogMTQwcHhcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzbG90PVwic3RhcnRcIiBzdHlsZT1cIndpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IGJvcmRlci1yYWRpdXM6IDUwJVwiPlxuICAgICAgICA8L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiAxMDBweFwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJoZWxwLWNpcmNsZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDEyMHB4XCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBzbG90PVwiZW5kXCIgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogODBweFwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgIDwvaW9uLWxpc3Q+XG5cbiAgICA8IS0tIEF0dGVuZGFuY2UgTGlzdHMgLS0+XG4gICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCI+XG4gICAgICA8aW9uLWFjY29yZGlvbi1ncm91cCBbbXVsdGlwbGVdPVwidHJ1ZVwiIFt2YWx1ZV09XCJbJ3llcyddXCI+XG4gICAgICAgIDwhLS0gUHJlc2VudCAtLT5cbiAgICAgICAgPGlvbi1hY2NvcmRpb24gdmFsdWU9XCJ5ZXNcIj5cbiAgICAgICAgICA8aW9uLWl0ZW0gc2xvdD1cImhlYWRlclwiIGNvbG9yPVwibGlnaHRcIj5cbiAgICAgICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiAxNTBweFwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgIDxkaXYgc2xvdD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxpb24tbGlzdD5cbiAgICAgICAgICAgICAgPGlvbi1pdGVtPlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwiY2hlY2ttYXJrLWNpcmNsZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBhbmltYXRlZCBzdHlsZT1cIndpZHRoOiA2MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBzbG90PVwiZW5kXCIgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogNDBweFwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICAgIDxpb24taXRlbT5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cImNoZWNrbWFyay1jaXJjbGVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogNzAlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgc2xvdD1cImVuZFwiIGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDQwcHhcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgICAgPC9pb24tbGlzdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9pb24tYWNjb3JkaW9uPlxuXG4gICAgICAgIDwhLS0gQWJzZW50IC0tPlxuICAgICAgICA8aW9uLWFjY29yZGlvbiB2YWx1ZT1cIm5vXCI+XG4gICAgICAgICAgPGlvbi1pdGVtIHNsb3Q9XCJoZWFkZXJcIiBjb2xvcj1cImxpZ2h0XCI+XG4gICAgICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHQgYW5pbWF0ZWQgc3R5bGU9XCJ3aWR0aDogMTMwcHhcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgPC9pb24tYWNjb3JkaW9uPlxuXG4gICAgICAgIDwhLS0gTm8gUmVwbHkgLS0+XG4gICAgICAgIDxpb24tYWNjb3JkaW9uIHZhbHVlPVwibnVsbFwiPlxuICAgICAgICAgIDxpb24taXRlbSBzbG90PVwiaGVhZGVyXCIgY29sb3I9XCJsaWdodFwiPlxuICAgICAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IGFuaW1hdGVkIHN0eWxlPVwid2lkdGg6IDE0MHB4XCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgIDwvaW9uLWFjY29yZGlvbj5cbiAgICAgIDwvaW9uLWFjY29yZGlvbi1ncm91cD5cbiAgICA8L2lvbi1saXN0PlxuICA8L2lvbi1jb250ZW50PlxuPC9uZy10ZW1wbGF0ZT4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJTyxJQUFNLGNBQWM7RUFDekIsVUFBVTtJQUNSLFdBQVc7SUFDWCxPQUFPO0lBQ1AsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osUUFBUTtJQUNSLFlBQVk7SUFDWixtQkFBbUI7O0VBRXJCLFlBQVk7RUFDWixrQkFBa0I7Ozs7QUNicEIsSUFBTSxtQkFBTixjQUErQixZQUFZO0FBQUEsRUFDekMsY0FBYztBQUNaLFVBQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxvQkFBb0I7QUFDbEIsU0FBSyxZQUFZO0FBQ2pCLFFBQUksVUFBVSxZQUFZLEtBQUssT0FBTztBQUNwQyxXQUFLLE1BQU0sV0FBVztBQUN0QixXQUFLLE1BQU0sNEJBQTRCLElBQUk7QUFDM0MsWUFBTSxjQUFjLFNBQVMsY0FBYyxLQUFLO0FBQ2hELGtCQUFZLE1BQU0sU0FBUztBQUMzQixXQUFLLFlBQVksV0FBVztBQUFBLElBQzlCO0FBQUEsRUFDRjtBQUNGO0FBQ0EsZUFBZSxPQUFPLHdCQUF3QixnQkFBZ0I7QUFDdkQsSUFBTSxZQUFOLE1BQU0sV0FBVTtBQUFBLEVBQ3JCLFlBQVksSUFBSTtBQUNkLFNBQUssVUFBVTtBQUNmLFNBQUssaUJBQWlCO0FBQ3RCLFNBQUssb0JBQW9CLE1BQU0sS0FBSyxnQkFBZ0I7QUFDcEQsU0FBSyxLQUFLO0FBQUEsRUFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsT0FBYSxPQUFPLFNBQVMsVUFBVTtBQUFBO0FBQ3JDLFlBQU0sU0FBUyxJQUFJLFdBQVUsUUFBUSxFQUFFO0FBQ3ZDLFVBQUksQ0FBQyxRQUFRLFNBQVM7QUFDcEIsY0FBTSxJQUFJLE1BQU0sK0JBQStCO0FBQUEsTUFDakQ7QUFDQSxVQUFJLFFBQVEsT0FBTyxvQkFBb0IsUUFBVztBQUNoRCxnQkFBUSxPQUFPLGtCQUFrQjtBQUFBLE1BQ25DO0FBQ0EsYUFBTyxVQUFVLFFBQVE7QUFDekIsYUFBTyxRQUFRLFFBQVEsYUFBYSxRQUFRO0FBQzVDLFlBQU0sZ0JBQWdCLE1BQU0sV0FBVSxpQkFBaUIsUUFBUSxPQUFPO0FBQ3RFLGNBQVEsT0FBTyxRQUFRLGNBQWM7QUFDckMsY0FBUSxPQUFPLFNBQVMsY0FBYztBQUN0QyxjQUFRLE9BQU8sSUFBSSxjQUFjO0FBQ2pDLGNBQVEsT0FBTyxJQUFJLGNBQWM7QUFDakMsY0FBUSxPQUFPLG1CQUFtQixPQUFPO0FBQ3pDLFVBQUksVUFBVSxZQUFZLEtBQUssV0FBVztBQUN4QyxlQUFPLGNBQWM7QUFBQSxNQUN2QjtBQUNBLFVBQUksVUFBVSxpQkFBaUIsR0FBRztBQUNoQyxnQkFBUSxVQUFVLENBQUM7QUFDbkIsY0FBTSxlQUFlLE1BQU07QUFDekIsY0FBSSxJQUFJO0FBQ1IsZ0JBQU0sV0FBVyxNQUFNLEtBQUssT0FBTyxhQUFhLFFBQVEsT0FBTyxTQUFTLFNBQVMsR0FBRyxzQkFBc0IsT0FBTyxRQUFRLE9BQU8sU0FBUyxLQUFLLENBQUM7QUFDL0ksaUJBQU87QUFBQSxZQUNMLEdBQUcsUUFBUTtBQUFBLFlBQ1gsR0FBRyxRQUFRO0FBQUEsWUFDWCxPQUFPLFFBQVE7QUFBQSxZQUNmLFFBQVEsUUFBUTtBQUFBLFVBQ2xCO0FBQUEsUUFDRjtBQUNBLGNBQU0sWUFBWSxNQUFNO0FBQ3RCLDhCQUFvQixVQUFVO0FBQUEsWUFDNUIsSUFBSSxPQUFPO0FBQUEsWUFDWCxXQUFXLGFBQWE7QUFBQSxVQUMxQixDQUFDO0FBQUEsUUFDSDtBQUNBLGNBQU0sV0FBVyxNQUFNO0FBQ3JCLDhCQUFvQixTQUFTO0FBQUEsWUFDM0IsSUFBSSxPQUFPO0FBQUEsWUFDWCxXQUFXLGFBQWE7QUFBQSxVQUMxQixDQUFDO0FBQUEsUUFDSDtBQUNBLGNBQU0sWUFBWSxPQUFPLFFBQVEsUUFBUSxXQUFXO0FBQ3BELFlBQUksVUFBVSxZQUFZLE1BQU0sU0FBUyxXQUFXO0FBQ2xELG9CQUFVLGlCQUFpQixvQkFBb0IsTUFBTTtBQUNuRCx1QkFBVyxNQUFNO0FBQ2Ysd0JBQVU7QUFBQSxZQUNaLEdBQUcsR0FBRztBQUFBLFVBQ1IsQ0FBQztBQUNELG9CQUFVLGlCQUFpQixtQkFBbUIsTUFBTTtBQUNsRCx1QkFBVyxNQUFNO0FBQ2Ysd0JBQVU7QUFBQSxZQUNaLEdBQUcsR0FBRztBQUFBLFVBQ1IsQ0FBQztBQUFBLFFBQ0g7QUFDQSxjQUFNLFlBQVk7QUFBQSxVQUNoQixPQUFPLGNBQWM7QUFBQSxVQUNyQixRQUFRLGNBQWM7QUFBQSxVQUN0QixVQUFVO0FBQUEsUUFDWjtBQUNBLGVBQU8saUJBQWlCLElBQUksZUFBZSxNQUFNO0FBQy9DLGNBQUksT0FBTyxXQUFXLE1BQU07QUFDMUIsa0JBQU0sVUFBVSxPQUFPLFFBQVEsc0JBQXNCO0FBQ3JELGtCQUFNLFdBQVcsUUFBUSxVQUFVLEtBQUssUUFBUSxXQUFXO0FBQzNELGdCQUFJLENBQUMsVUFBVTtBQUNiLGtCQUFJLFVBQVUsVUFBVTtBQUN0QixvQkFBSSxVQUFVLFlBQVksTUFBTSxTQUFTLENBQUMsV0FBVztBQUNuRCw0QkFBVTtBQUFBLGdCQUNaO0FBQUEsY0FDRixXQUFXLFVBQVUsVUFBVSxRQUFRLFNBQVMsVUFBVSxXQUFXLFFBQVEsUUFBUTtBQUNuRix5QkFBUztBQUFBLGNBQ1g7QUFBQSxZQUNGO0FBQ0Esc0JBQVUsUUFBUSxRQUFRO0FBQzFCLHNCQUFVLFNBQVMsUUFBUTtBQUMzQixzQkFBVSxXQUFXO0FBQUEsVUFDdkI7QUFBQSxRQUNGLENBQUM7QUFDRCxlQUFPLGVBQWUsUUFBUSxPQUFPLE9BQU87QUFBQSxNQUM5QztBQUVBLFlBQU0sSUFBSSxRQUFRLENBQUMsU0FBUyxXQUFXO0FBQ3JDLG1CQUFXLE1BQVk7QUFDckIsY0FBSTtBQUNGLGtCQUFNLG9CQUFvQixPQUFPLE9BQU87QUFDeEMsb0JBQVEsTUFBUztBQUFBLFVBQ25CLFNBQVMsS0FBSztBQUNaLG1CQUFPLEdBQUc7QUFBQSxVQUNaO0FBQUEsUUFDRixJQUFHLEdBQUc7QUFBQSxNQUNSLENBQUM7QUFDRCxVQUFJLFVBQVU7QUFDWixjQUFNLHFCQUFxQixNQUFNLG9CQUFvQixZQUFZLGNBQWMsVUFBUTtBQUNyRixjQUFJLEtBQUssU0FBUyxPQUFPLElBQUk7QUFDM0IscUJBQVMsSUFBSTtBQUNiLCtCQUFtQixPQUFPO0FBQUEsVUFDNUI7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBQ0EsYUFBTztBQUFBLElBQ1Q7QUFBQTtBQUFBLEVBQ0EsT0FBYSxpQkFBaUIsU0FBUztBQUFBO0FBQ3JDLGFBQU8sSUFBSSxRQUFRLGFBQVc7QUFDNUIsWUFBSSxnQkFBZ0IsUUFBUSxzQkFBc0I7QUFDbEQsWUFBSSxjQUFjLFNBQVMsR0FBRztBQUM1QixjQUFJLFVBQVU7QUFDZCxnQkFBTSxpQkFBaUIsWUFBWSxXQUFZO0FBQzdDLGdCQUFJLGNBQWMsU0FBUyxLQUFLLFVBQVUsSUFBSTtBQUM1Qyw4QkFBZ0IsUUFBUSxzQkFBc0I7QUFDOUM7QUFBQSxZQUNGLE9BQU87QUFDTCxrQkFBSSxXQUFXLElBQUk7QUFDakIsd0JBQVEsS0FBSyxrQ0FBa0M7QUFBQSxjQUNqRDtBQUNBLDRCQUFjLGNBQWM7QUFDNUIsc0JBQVEsYUFBYTtBQUFBLFlBQ3ZCO0FBQUEsVUFDRixHQUFHLEdBQUc7QUFBQSxRQUNSLE9BQU87QUFDTCxrQkFBUSxhQUFhO0FBQUEsUUFDdkI7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNTSxjQUFjO0FBQUE7QUFDbEIsYUFBTyxvQkFBb0IsWUFBWTtBQUFBLFFBQ3JDLElBQUksS0FBSztBQUFBLE1BQ1gsQ0FBQztBQUFBLElBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1NLGVBQWU7QUFBQTtBQUNuQixhQUFPLG9CQUFvQixhQUFhO0FBQUEsUUFDdEMsSUFBSSxLQUFLO0FBQUEsTUFDWCxDQUFDO0FBQUEsSUFDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBU00saUJBQWlCLGdCQUFnQjtBQUFBO0FBQ3JDLGFBQU8sb0JBQW9CLGlCQUFpQjtBQUFBLFFBQzFDLElBQUksS0FBSztBQUFBLFFBQ1Q7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNTSxvQkFBb0I7QUFBQTtBQUN4QixhQUFPLG9CQUFvQixrQkFBa0I7QUFBQSxRQUMzQyxJQUFJLEtBQUs7QUFBQSxNQUNYLENBQUM7QUFBQSxJQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9NLFVBQVUsUUFBUTtBQUFBO0FBQ3RCLFlBQU0sTUFBTSxNQUFNLG9CQUFvQixVQUFVO0FBQUEsUUFDOUMsSUFBSSxLQUFLO0FBQUEsUUFDVDtBQUFBLE1BQ0YsQ0FBQztBQUNELGFBQU8sSUFBSTtBQUFBLElBQ2I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT00sV0FBVyxTQUFTO0FBQUE7QUFDeEIsWUFBTSxNQUFNLE1BQU0sb0JBQW9CLFdBQVc7QUFBQSxRQUMvQyxJQUFJLEtBQUs7QUFBQSxRQUNUO0FBQUEsTUFDRixDQUFDO0FBQ0QsYUFBTyxJQUFJO0FBQUEsSUFDYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPTSxhQUFhLElBQUk7QUFBQTtBQUNyQixhQUFPLG9CQUFvQixhQUFhO0FBQUEsUUFDdEMsSUFBSSxLQUFLO0FBQUEsUUFDVCxVQUFVO0FBQUEsTUFDWixDQUFDO0FBQUEsSUFDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPTSxjQUFjLEtBQUs7QUFBQTtBQUN2QixhQUFPLG9CQUFvQixjQUFjO0FBQUEsUUFDdkMsSUFBSSxLQUFLO0FBQUEsUUFDVCxXQUFXO0FBQUEsTUFDYixDQUFDO0FBQUEsSUFDSDtBQUFBO0FBQUEsRUFDTSxZQUFZLFVBQVU7QUFBQTtBQUMxQixZQUFNLE1BQU0sTUFBTSxvQkFBb0IsWUFBWTtBQUFBLFFBQ2hELElBQUksS0FBSztBQUFBLFFBQ1Q7QUFBQSxNQUNGLENBQUM7QUFDRCxhQUFPLElBQUk7QUFBQSxJQUNiO0FBQUE7QUFBQSxFQUNNLGFBQWEsV0FBVztBQUFBO0FBQzVCLFlBQU0sTUFBTSxNQUFNLG9CQUFvQixhQUFhO0FBQUEsUUFDakQsSUFBSSxLQUFLO0FBQUEsUUFDVDtBQUFBLE1BQ0YsQ0FBQztBQUNELGFBQU8sSUFBSTtBQUFBLElBQ2I7QUFBQTtBQUFBLEVBQ00sZUFBZSxLQUFLO0FBQUE7QUFDeEIsYUFBTyxvQkFBb0IsZUFBZTtBQUFBLFFBQ3hDLElBQUksS0FBSztBQUFBLFFBQ1QsWUFBWTtBQUFBLE1BQ2QsQ0FBQztBQUFBLElBQ0g7QUFBQTtBQUFBLEVBQ00sV0FBVyxTQUFTO0FBQUE7QUFDeEIsWUFBTSxNQUFNLE1BQU0sb0JBQW9CLFdBQVc7QUFBQSxRQUMvQyxJQUFJLEtBQUs7QUFBQSxRQUNUO0FBQUEsTUFDRixDQUFDO0FBQ0QsYUFBTyxJQUFJO0FBQUEsSUFDYjtBQUFBO0FBQUEsRUFDTSxjQUFjLEtBQUs7QUFBQTtBQUN2QixhQUFPLG9CQUFvQixjQUFjO0FBQUEsUUFDdkMsSUFBSSxLQUFLO0FBQUEsUUFDVCxXQUFXO0FBQUEsTUFDYixDQUFDO0FBQUEsSUFDSDtBQUFBO0FBQUEsRUFDTSxnQkFBZ0IsS0FBSztBQUFBO0FBQ3pCLGFBQU8sb0JBQW9CLGdCQUFnQjtBQUFBLFFBQ3pDLElBQUksS0FBSztBQUFBLFFBQ1QsYUFBYTtBQUFBLE1BQ2YsQ0FBQztBQUFBLElBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSU0sVUFBVTtBQUFBO0FBQ2QsVUFBSTtBQUNKLFVBQUksVUFBVSxZQUFZLEtBQUssV0FBVztBQUN4QyxhQUFLLGlCQUFpQjtBQUFBLE1BQ3hCO0FBQ0EsVUFBSSxVQUFVLGlCQUFpQixHQUFHO0FBQ2hDLFNBQUMsS0FBSyxLQUFLLG9CQUFvQixRQUFRLE9BQU8sU0FBUyxTQUFTLEdBQUcsV0FBVztBQUFBLE1BQ2hGO0FBQ0EsV0FBSyxzQkFBc0I7QUFDM0IsYUFBTyxvQkFBb0IsUUFBUTtBQUFBLFFBQ2pDLElBQUksS0FBSztBQUFBLE1BQ1gsQ0FBQztBQUFBLElBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT00sVUFBVSxRQUFRO0FBQUE7QUFDdEIsYUFBTyxvQkFBb0IsVUFBVTtBQUFBLFFBQ25DLElBQUksS0FBSztBQUFBLFFBQ1Q7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUE7QUFBQSxFQUNNLGFBQWE7QUFBQTtBQUNqQixZQUFNO0FBQUEsUUFDSjtBQUFBLE1BQ0YsSUFBSSxNQUFNLG9CQUFvQixXQUFXO0FBQUEsUUFDdkMsSUFBSSxLQUFLO0FBQUEsTUFDWCxDQUFDO0FBQ0QsYUFBTyxRQUFRLElBQUk7QUFBQSxJQUNyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPTSxXQUFXLFNBQVM7QUFBQTtBQUN4QixhQUFPLG9CQUFvQixXQUFXO0FBQUEsUUFDcEMsSUFBSSxLQUFLO0FBQUEsUUFDVDtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT00saUJBQWlCLFNBQVM7QUFBQTtBQUM5QixhQUFPLG9CQUFvQixpQkFBaUI7QUFBQSxRQUMxQyxJQUFJLEtBQUs7QUFBQSxRQUNUO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPTSxtQkFBbUIsU0FBUztBQUFBO0FBQ2hDLGFBQU8sb0JBQW9CLG1CQUFtQjtBQUFBLFFBQzVDLElBQUksS0FBSztBQUFBLFFBQ1Q7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFTTSw0QkFBNEIsU0FBUztBQUFBO0FBQ3pDLGFBQU8sb0JBQW9CLDRCQUE0QjtBQUFBLFFBQ3JELElBQUksS0FBSztBQUFBLFFBQ1Q7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9NLHNCQUFzQixTQUFTO0FBQUE7QUFDbkMsYUFBTyxvQkFBb0Isc0JBQXNCO0FBQUEsUUFDL0MsSUFBSSxLQUFLO0FBQUEsUUFDVDtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT00sV0FBVyxTQUFTO0FBQUE7QUFDeEIsYUFBTyxvQkFBb0IsV0FBVztBQUFBLFFBQ3BDLElBQUksS0FBSztBQUFBLFFBQ1Q7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNTSxlQUFlO0FBQUE7QUFDbkIsYUFBTyxJQUFJLGFBQWEsTUFBTSxvQkFBb0IsYUFBYTtBQUFBLFFBQzdELElBQUksS0FBSztBQUFBLE1BQ1gsQ0FBQyxDQUFDO0FBQUEsSUFDSjtBQUFBO0FBQUEsRUFDTSxVQUFVLFFBQVEsU0FBUztBQUFBO0FBQy9CLGFBQU8sb0JBQW9CLFVBQVU7QUFBQSxRQUNuQyxJQUFJLEtBQUs7QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQTtBQUFBLEVBQ0EsZ0JBQWdCO0FBQ2QsVUFBTSxjQUFjLFNBQVMscUJBQXFCLGFBQWE7QUFFL0QsYUFBUyxJQUFJLEdBQUcsSUFBSSxZQUFZLFFBQVEsS0FBSztBQUMzQyxrQkFBWSxDQUFDLEVBQUUsZUFBZTtBQUFBLElBQ2hDO0FBQ0EsV0FBTyxpQkFBaUIsYUFBYSxLQUFLLGlCQUFpQjtBQUMzRCxXQUFPLGlCQUFpQixVQUFVLEtBQUssaUJBQWlCO0FBQ3hELFdBQU8saUJBQWlCLFVBQVUsS0FBSyxpQkFBaUI7QUFDeEQsUUFBSSxPQUFPLGFBQWE7QUFDdEIsYUFBTyxZQUFZLGlCQUFpQixVQUFVLE1BQU07QUFDbEQsbUJBQVcsS0FBSyxpQkFBaUIsR0FBRztBQUFBLE1BQ3RDLENBQUM7QUFBQSxJQUNILE9BQU87QUFDTCxhQUFPLGlCQUFpQixxQkFBcUIsTUFBTTtBQUNqRCxtQkFBVyxLQUFLLGlCQUFpQixHQUFHO0FBQUEsTUFDdEMsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQUEsRUFDQSxtQkFBbUI7QUFDakIsV0FBTyxvQkFBb0IsYUFBYSxLQUFLLGlCQUFpQjtBQUM5RCxXQUFPLG9CQUFvQixVQUFVLEtBQUssaUJBQWlCO0FBQzNELFdBQU8sb0JBQW9CLFVBQVUsS0FBSyxpQkFBaUI7QUFDM0QsUUFBSSxPQUFPLGFBQWE7QUFDdEIsYUFBTyxZQUFZLG9CQUFvQixVQUFVLE1BQU07QUFDckQsbUJBQVcsS0FBSyxpQkFBaUIsR0FBSTtBQUFBLE1BQ3ZDLENBQUM7QUFBQSxJQUNILE9BQU87QUFDTCxhQUFPLG9CQUFvQixxQkFBcUIsTUFBTTtBQUNwRCxtQkFBVyxLQUFLLGlCQUFpQixHQUFJO0FBQUEsTUFDdkMsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQUEsRUFDQSxrQkFBa0I7QUFDaEIsUUFBSSxLQUFLLFNBQVM7QUFDaEIsWUFBTSxVQUFVLEtBQUssUUFBUSxzQkFBc0I7QUFDbkQsMEJBQW9CLFNBQVM7QUFBQSxRQUMzQixJQUFJLEtBQUs7QUFBQSxRQUNULFdBQVc7QUFBQSxVQUNULEdBQUcsUUFBUTtBQUFBLFVBQ1gsR0FBRyxRQUFRO0FBQUEsVUFDWCxPQUFPLFFBQVE7QUFBQSxVQUNmLFFBQVEsUUFBUTtBQUFBLFFBQ2xCO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQXNCTSx3QkFBd0IsVUFBVTtBQUFBO0FBQ3RDLFVBQUksS0FBSyxzQkFBc0I7QUFDN0IsYUFBSyxxQkFBcUIsT0FBTztBQUFBLE1BQ25DO0FBQ0EsVUFBSSxVQUFVO0FBQ1osYUFBSyx1QkFBdUIsTUFBTSxvQkFBb0IsWUFBWSxnQkFBZ0IsS0FBSyxpQkFBaUIsUUFBUSxDQUFDO0FBQUEsTUFDbkgsT0FBTztBQUNMLGFBQUssdUJBQXVCO0FBQUEsTUFDOUI7QUFBQSxJQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9NLDJCQUEyQixVQUFVO0FBQUE7QUFDekMsVUFBSSxLQUFLLHlCQUF5QjtBQUNoQyxhQUFLLHdCQUF3QixPQUFPO0FBQUEsTUFDdEM7QUFDQSxVQUFJLFVBQVU7QUFDWixhQUFLLDBCQUEwQixNQUFNLG9CQUFvQixZQUFZLG1CQUFtQixLQUFLLGlCQUFpQixRQUFRLENBQUM7QUFBQSxNQUN6SCxPQUFPO0FBQ0wsYUFBSywwQkFBMEI7QUFBQSxNQUNqQztBQUFBLElBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT00sK0JBQStCLFVBQVU7QUFBQTtBQUM3QyxVQUFJLEtBQUssNkJBQTZCO0FBQ3BDLGFBQUssNEJBQTRCLE9BQU87QUFBQSxNQUMxQztBQUNBLFVBQUksVUFBVTtBQUNaLGFBQUssOEJBQThCLE1BQU0sb0JBQW9CLFlBQVksdUJBQXVCLEtBQUssaUJBQWlCLFFBQVEsQ0FBQztBQUFBLE1BQ2pJLE9BQU87QUFDTCxhQUFLLDhCQUE4QjtBQUFBLE1BQ3JDO0FBQUEsSUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPTSwwQkFBMEIsVUFBVTtBQUFBO0FBQ3hDLFVBQUksS0FBSyx3QkFBd0I7QUFDL0IsYUFBSyx1QkFBdUIsT0FBTztBQUFBLE1BQ3JDO0FBQ0EsVUFBSSxVQUFVO0FBQ1osYUFBSyx5QkFBeUIsTUFBTSxvQkFBb0IsWUFBWSxrQkFBa0IsS0FBSyxpQkFBaUIsUUFBUSxDQUFDO0FBQUEsTUFDdkgsT0FBTztBQUNMLGFBQUsseUJBQXlCO0FBQUEsTUFDaEM7QUFBQSxJQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9NLG9DQUFvQyxVQUFVO0FBQUE7QUFDbEQsVUFBSSxLQUFLLGtDQUFrQztBQUN6QyxhQUFLLGlDQUFpQyxPQUFPO0FBQUEsTUFDL0M7QUFDQSxVQUFJLFVBQVU7QUFDWixhQUFLLG1DQUFtQyxNQUFNLG9CQUFvQixZQUFZLDRCQUE0QixLQUFLLGlCQUFpQixRQUFRLENBQUM7QUFBQSxNQUMzSSxPQUFPO0FBQ0wsYUFBSyxtQ0FBbUM7QUFBQSxNQUMxQztBQUFBLElBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT00sNkJBQTZCLFVBQVU7QUFBQTtBQUMzQyxVQUFJLEtBQUssMkJBQTJCO0FBQ2xDLGFBQUssMEJBQTBCLE9BQU87QUFBQSxNQUN4QztBQUNBLFVBQUksVUFBVTtBQUNaLGFBQUssNEJBQTRCLE1BQU0sb0JBQW9CLFlBQVkscUJBQXFCLEtBQUssaUJBQWlCLFFBQVEsQ0FBQztBQUFBLE1BQzdILE9BQU87QUFDTCxhQUFLLDRCQUE0QjtBQUFBLE1BQ25DO0FBQUEsSUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPTSxzQkFBc0IsVUFBVTtBQUFBO0FBQ3BDLFVBQUksS0FBSyxvQkFBb0I7QUFDM0IsYUFBSyxtQkFBbUIsT0FBTztBQUFBLE1BQ2pDO0FBQ0EsVUFBSSxVQUFVO0FBQ1osYUFBSyxxQkFBcUIsTUFBTSxvQkFBb0IsWUFBWSxjQUFjLEtBQUssaUJBQWlCLFFBQVEsQ0FBQztBQUFBLE1BQy9HLE9BQU87QUFDTCxhQUFLLHFCQUFxQjtBQUFBLE1BQzVCO0FBQUEsSUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPTSwwQkFBMEIsVUFBVTtBQUFBO0FBQ3hDLFVBQUksS0FBSyx3QkFBd0I7QUFDL0IsYUFBSyx1QkFBdUIsT0FBTztBQUFBLE1BQ3JDO0FBQ0EsVUFBSSxVQUFVO0FBQ1osYUFBSyx5QkFBeUIsTUFBTSxvQkFBb0IsWUFBWSxrQkFBa0IsS0FBSyxpQkFBaUIsUUFBUSxDQUFDO0FBQUEsTUFDdkgsT0FBTztBQUNMLGFBQUsseUJBQXlCO0FBQUEsTUFDaEM7QUFBQSxJQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9NLHlCQUF5QixVQUFVO0FBQUE7QUFDdkMsVUFBSSxLQUFLLHNCQUF1QixFQUFDLEtBQUssc0JBQXNCLE9BQU8sQ0FBQztBQUNwRSxVQUFJLFVBQVU7QUFDWixhQUFLLHdCQUF3QixNQUFNLG9CQUFvQixZQUFZLGlCQUFpQixLQUFLLGlCQUFpQixRQUFRLENBQUM7QUFBQSxNQUNySCxPQUFPO0FBQ0wsYUFBSyx3QkFBd0I7QUFBQSxNQUMvQjtBQUFBLElBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT00seUJBQXlCLFVBQVU7QUFBQTtBQUN2QyxVQUFJLEtBQUssdUJBQXVCO0FBQzlCLGFBQUssc0JBQXNCLE9BQU87QUFBQSxNQUNwQztBQUNBLFVBQUksVUFBVTtBQUNaLGFBQUssd0JBQXdCLE1BQU0sb0JBQW9CLFlBQVksaUJBQWlCLEtBQUssaUJBQWlCLFFBQVEsQ0FBQztBQUFBLE1BQ3JILE9BQU87QUFDTCxhQUFLLHdCQUF3QjtBQUFBLE1BQy9CO0FBQUEsSUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPTSwyQkFBMkIsVUFBVTtBQUFBO0FBQ3pDLFVBQUksS0FBSyx5QkFBeUI7QUFDaEMsYUFBSyx3QkFBd0IsT0FBTztBQUFBLE1BQ3RDO0FBQ0EsVUFBSSxVQUFVO0FBQ1osYUFBSywwQkFBMEIsTUFBTSxvQkFBb0IsWUFBWSxtQkFBbUIsS0FBSyxpQkFBaUIsUUFBUSxDQUFDO0FBQUEsTUFDekgsT0FBTztBQUNMLGFBQUssMEJBQTBCO0FBQUEsTUFDakM7QUFBQSxJQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9NLDZCQUE2QixVQUFVO0FBQUE7QUFDM0MsVUFBSSxLQUFLLDJCQUEyQjtBQUNsQyxhQUFLLDBCQUEwQixPQUFPO0FBQUEsTUFDeEM7QUFDQSxVQUFJLFVBQVU7QUFDWixhQUFLLDRCQUE0QixNQUFNLG9CQUFvQixZQUFZLHFCQUFxQixLQUFLLGlCQUFpQixRQUFRLENBQUM7QUFBQSxNQUM3SCxPQUFPO0FBQ0wsYUFBSyw0QkFBNEI7QUFBQSxNQUNuQztBQUFBLElBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT00sd0JBQXdCLFVBQVU7QUFBQTtBQUN0QyxVQUFJLEtBQUssc0JBQXNCO0FBQzdCLGFBQUsscUJBQXFCLE9BQU87QUFBQSxNQUNuQztBQUNBLFVBQUksVUFBVTtBQUNaLGFBQUssdUJBQXVCLE1BQU0sb0JBQW9CLFlBQVksZ0JBQWdCLEtBQUssaUJBQWlCLFFBQVEsQ0FBQztBQUFBLE1BQ25ILE9BQU87QUFDTCxhQUFLLHVCQUF1QjtBQUFBLE1BQzlCO0FBQUEsSUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPTSwyQkFBMkIsVUFBVTtBQUFBO0FBQ3pDLFVBQUksS0FBSyx5QkFBeUI7QUFDaEMsYUFBSyx3QkFBd0IsT0FBTztBQUFBLE1BQ3RDO0FBQ0EsVUFBSSxVQUFVO0FBQ1osYUFBSywwQkFBMEIsTUFBTSxvQkFBb0IsWUFBWSxtQkFBbUIsS0FBSyxpQkFBaUIsUUFBUSxDQUFDO0FBQUEsTUFDekgsT0FBTztBQUNMLGFBQUssMEJBQTBCO0FBQUEsTUFDakM7QUFBQSxJQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9NLG1DQUFtQyxVQUFVO0FBQUE7QUFDakQsVUFBSSxLQUFLLGlDQUFpQztBQUN4QyxhQUFLLGdDQUFnQyxPQUFPO0FBQUEsTUFDOUM7QUFDQSxVQUFJLFVBQVU7QUFDWixhQUFLLGtDQUFrQyxNQUFNLG9CQUFvQixZQUFZLDJCQUEyQixLQUFLLGlCQUFpQixRQUFRLENBQUM7QUFBQSxNQUN6SSxPQUFPO0FBQ0wsYUFBSyxrQ0FBa0M7QUFBQSxNQUN6QztBQUFBLElBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT00sNkJBQTZCLFVBQVU7QUFBQTtBQUMzQyxVQUFJLEtBQUssMkJBQTJCO0FBQ2xDLGFBQUssMEJBQTBCLE9BQU87QUFBQSxNQUN4QztBQUNBLFVBQUksVUFBVTtBQUNaLGFBQUssNEJBQTRCLE1BQU0sb0JBQW9CLFlBQVkscUJBQXFCLEtBQUssaUJBQWlCLFFBQVEsQ0FBQztBQUFBLE1BQzdILE9BQU87QUFDTCxhQUFLLDRCQUE0QjtBQUFBLE1BQ25DO0FBQUEsSUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPTSx3QkFBd0I7QUFBQTtBQUM1QixVQUFJLEtBQUsseUJBQXlCO0FBQ2hDLGFBQUssd0JBQXdCLE9BQU87QUFDcEMsYUFBSywwQkFBMEI7QUFBQSxNQUNqQztBQUNBLFVBQUksS0FBSyxzQkFBc0I7QUFDN0IsYUFBSyxxQkFBcUIsT0FBTztBQUNqQyxhQUFLLHVCQUF1QjtBQUFBLE1BQzlCO0FBQ0EsVUFBSSxLQUFLLDZCQUE2QjtBQUNwQyxhQUFLLDRCQUE0QixPQUFPO0FBQ3hDLGFBQUssOEJBQThCO0FBQUEsTUFDckM7QUFDQSxVQUFJLEtBQUssd0JBQXdCO0FBQy9CLGFBQUssdUJBQXVCLE9BQU87QUFDbkMsYUFBSyx5QkFBeUI7QUFBQSxNQUNoQztBQUNBLFVBQUksS0FBSyxrQ0FBa0M7QUFDekMsYUFBSyxpQ0FBaUMsT0FBTztBQUM3QyxhQUFLLG1DQUFtQztBQUFBLE1BQzFDO0FBQ0EsVUFBSSxLQUFLLDJCQUEyQjtBQUNsQyxhQUFLLDBCQUEwQixPQUFPO0FBQ3RDLGFBQUssNEJBQTRCO0FBQUEsTUFDbkM7QUFDQSxVQUFJLEtBQUssb0JBQW9CO0FBQzNCLGFBQUssbUJBQW1CLE9BQU87QUFDL0IsYUFBSyxxQkFBcUI7QUFBQSxNQUM1QjtBQUNBLFVBQUksS0FBSyx5QkFBeUI7QUFDaEMsYUFBSyx3QkFBd0IsT0FBTztBQUNwQyxhQUFLLDBCQUEwQjtBQUFBLE1BQ2pDO0FBQ0EsVUFBSSxLQUFLLHVCQUF1QjtBQUM5QixhQUFLLHNCQUFzQixPQUFPO0FBQ2xDLGFBQUssd0JBQXdCO0FBQUEsTUFDL0I7QUFDQSxVQUFJLEtBQUssd0JBQXdCO0FBQy9CLGFBQUssdUJBQXVCLE9BQU87QUFDbkMsYUFBSyx5QkFBeUI7QUFBQSxNQUNoQztBQUNBLFVBQUksS0FBSyx1QkFBdUI7QUFDOUIsYUFBSyxzQkFBc0IsT0FBTztBQUNsQyxhQUFLLHdCQUF3QjtBQUFBLE1BQy9CO0FBQ0EsVUFBSSxLQUFLLDJCQUEyQjtBQUNsQyxhQUFLLDBCQUEwQixPQUFPO0FBQ3RDLGFBQUssNEJBQTRCO0FBQUEsTUFDbkM7QUFDQSxVQUFJLEtBQUssc0JBQXNCO0FBQzdCLGFBQUsscUJBQXFCLE9BQU87QUFDakMsYUFBSyx1QkFBdUI7QUFBQSxNQUM5QjtBQUNBLFVBQUksS0FBSyx5QkFBeUI7QUFDaEMsYUFBSyx3QkFBd0IsT0FBTztBQUNwQyxhQUFLLDBCQUEwQjtBQUFBLE1BQ2pDO0FBQ0EsVUFBSSxLQUFLLGlDQUFpQztBQUN4QyxhQUFLLGdDQUFnQyxPQUFPO0FBQzVDLGFBQUssa0NBQWtDO0FBQUEsTUFDekM7QUFDQSxVQUFJLEtBQUssMkJBQTJCO0FBQ2xDLGFBQUssMEJBQTBCLE9BQU87QUFDdEMsYUFBSyw0QkFBNEI7QUFBQSxNQUNuQztBQUFBLElBQ0Y7QUFBQTtBQUFBLEVBQ0EsaUJBQWlCLFVBQVU7QUFDekIsVUFBTSxRQUFRLEtBQUs7QUFDbkIsV0FBTyxVQUFRO0FBQ2IsVUFBSSxLQUFLLFNBQVMsT0FBTztBQUN2QixpQkFBUyxJQUFJO0FBQUEsTUFDZjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7OztBQzV5QkEsU0FBUyxFQUFFLEdBQUc7QUFDWixJQUFFLGVBQWUsVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHO0FBQUEsSUFDdkMsSUFBSSxHQUFHLEdBQUc7QUFDUixhQUFPLElBQUksTUFBTSxDQUFDLEdBQUc7QUFBQSxRQUNuQixJQUFJLEdBQUcsR0FBRztBQUNSLGlCQUFPLENBQUMsR0FBRyxHQUFHLE1BQU07QUFDbEIsa0JBQU0sSUFBSSxFQUFFLFVBQVUsUUFBUSxDQUFDO0FBQy9CLGdCQUFJLE1BQU0sUUFBUTtBQUNoQixnQkFBRSxJQUFJLE1BQU0sb0JBQW9CLENBQUMsWUFBWSxDQUFDO0FBQzlDO0FBQUEsWUFDRjtBQUNBLGdCQUFJLE9BQU8sRUFBRSxDQUFDLEtBQUssWUFBWTtBQUM3QixnQkFBRSxJQUFJLE1BQU0sVUFBVSxDQUFDLGtDQUFrQyxDQUFDLEVBQUUsQ0FBQztBQUM3RDtBQUFBLFlBQ0Y7QUFDQSxhQUFDLE1BQVk7QUFDWCxrQkFBSTtBQUNGLHNCQUFNLElBQUksTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQ3RCLGtCQUFFLENBQUM7QUFBQSxjQUNMLFNBQVMsR0FBRztBQUNWLGtCQUFFLENBQUM7QUFBQSxjQUNMO0FBQUEsWUFDRixJQUFHO0FBQUEsVUFDTDtBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFDQSxTQUFTLEVBQUUsR0FBRztBQUNaLElBQUUsZUFBZSxVQUFVLElBQUksTUFBTSxDQUFDLEdBQUc7QUFBQSxJQUN2QyxJQUFJLEdBQUcsR0FBRztBQUNSLGFBQU8sRUFBRSxRQUFRLFFBQVEsQ0FBQztBQUFBLElBQzVCO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFDQSxTQUFTLEVBQUUsSUFBSSxPQUFJO0FBQ2pCLFNBQU8saUJBQWlCLE9BQU8sa0JBQWtCLENBQUMsR0FBRyxPQUFPLGNBQWMsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLElBQUksT0FBTyxZQUFZLFVBQVUsRUFBRSxNQUFNO0FBQzVJOzs7QUNwQ0EsSUFBTSxjQUFjLGVBQWUsZUFBZTtBQUFBLEVBQ2hELEtBQUssTUFBTSxPQUFPLG1CQUFPLEVBQUUsS0FBSyxPQUFLLElBQUksRUFBRSxlQUFlLENBQUM7QUFDN0QsQ0FBQztBQUNELEVBQWM7Ozs7Ozs7QUVhVixJQUFBLG9CQUFBLEdBQUEsd0JBQUEsTUFBQSxDQUFBOzs7Ozs7QUFzQ0ksSUFBQSx5QkFBQSxHQUFBLFlBQUEsRUFBQTtBQUFpRCxJQUFBLHFCQUFBLFNBQUEsU0FBQSxrR0FBQTtBQUFBLE1BQUEsd0JBQUEsR0FBQTtBQUFBLFlBQUEsVUFBQSx3QkFBQSxDQUFBLEVBQUE7QUFBQSxZQUFBLFNBQUEsd0JBQUE7QUFBQSxhQUFBLHNCQUFTLE9BQUEsU0FBQSxPQUFBLENBQWM7SUFBQSxDQUFBO0FBQWdDLElBQUEsdUJBQUE7Ozs7O0FBTDFHLElBQUEseUJBQUEsR0FBQSxVQUFBO0FBQ0UsSUFBQSxvQkFBQSxHQUFBLFlBQUEsRUFBQTtBQUNBLElBQUEseUJBQUEsR0FBQSxhQUFBLEVBQUEsRUFBaUMsR0FBQSxJQUFBO0FBQzNCLElBQUEsaUJBQUEsQ0FBQTtBQUErQixJQUFBLHVCQUFBLEVBQUs7QUFFMUMsSUFBQSxxQkFBQSxHQUFBLHVFQUFBLEdBQUEsR0FBQSxZQUFBLEVBQUE7QUFDRixJQUFBLHVCQUFBOzs7O0FBSFEsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw2QkFBQSxJQUFBLFFBQUEsVUFBQSxLQUFBLFFBQUEsTUFBQSxFQUFBO0FBRUssSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxRQUFBLFNBQUE7Ozs7O0FBVWIsSUFBQSx5QkFBQSxHQUFBLFVBQUE7QUFDRSxJQUFBLG9CQUFBLEdBQUEsWUFBQSxFQUFBO0FBQ0EsSUFBQSx5QkFBQSxHQUFBLGFBQUEsRUFBQSxFQUFpQyxHQUFBLElBQUE7QUFDM0IsSUFBQSxpQkFBQSxDQUFBO0FBQWUsSUFBQSx1QkFBQSxFQUFLLEVBQ2Q7Ozs7QUFETixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLFFBQUEsTUFBQTs7Ozs7QUFJUixJQUFBLHlCQUFBLEdBQUEsVUFBQTtBQUNFLElBQUEsb0JBQUEsR0FBQSxZQUFBLEVBQUE7QUFDQSxJQUFBLHlCQUFBLEdBQUEsYUFBQSxFQUFBLEVBQWlDLEdBQUEsSUFBQTtBQUMzQixJQUFBLGlCQUFBLENBQUE7QUFBbUMsSUFBQSx1QkFBQSxFQUFLLEVBQ2xDOzs7O0FBRE4sSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw2QkFBQSxJQUFBLFFBQUEsVUFBQSxLQUFBLFFBQUEsVUFBQSxFQUFBOzs7OztBQUlSLElBQUEseUJBQUEsR0FBQSxVQUFBO0FBQ0UsSUFBQSxvQkFBQSxHQUFBLFlBQUEsRUFBQTtBQUNBLElBQUEseUJBQUEsR0FBQSxhQUFBLEVBQUEsRUFBaUMsR0FBQSxJQUFBO0FBQzNCLElBQUEsaUJBQUEsQ0FBQTtBQUFtQixJQUFBLHVCQUFBLEVBQUssRUFDbEI7Ozs7QUFETixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLFFBQUEsVUFBQTs7Ozs7O0FBZ0JKLElBQUEseUJBQUEsR0FBQSxrQkFBQSxFQUFBO0FBQWdCLElBQUEscUJBQUEsU0FBQSxTQUFBLDZIQUFBO0FBQUEsTUFBQSx3QkFBQSxHQUFBO0FBQUEsWUFBQSxVQUFBLHdCQUFBLENBQUEsRUFBQTtBQUFBLFlBQUEsU0FBQSx3QkFBQTtBQUFBLGFBQUEsc0JBQVMsT0FBQSxPQUFPLE1BQUksT0FBQSxDQUFPO0lBQUEsQ0FBQTtBQUV6QyxJQUFBLG9CQUFBLEdBQUEsWUFBQSxFQUFBO0FBQ0YsSUFBQSx1QkFBQTs7Ozs7O0FBRUEsSUFBQSx5QkFBQSxHQUFBLGtCQUFBLEVBQUE7QUFBZ0IsSUFBQSxxQkFBQSxTQUFBLFNBQUEsNkhBQUE7QUFBQSxNQUFBLHdCQUFBLEdBQUE7QUFBQSxZQUFBLFVBQUEsd0JBQUEsQ0FBQSxFQUFBO0FBQUEsWUFBQSxTQUFBLHdCQUFBO0FBQUEsYUFBQSxzQkFBUyxPQUFBLE9BQU8sTUFBSSxPQUFBLENBQU87SUFBQSxDQUFBO0FBRXpDLElBQUEsb0JBQUEsR0FBQSxZQUFBLEVBQUE7QUFDRixJQUFBLHVCQUFBOzs7Ozs7QUFFQSxJQUFBLHlCQUFBLEdBQUEsa0JBQUEsRUFBQTtBQUFnQixJQUFBLHFCQUFBLFNBQUEsU0FBQSw2SEFBQTtBQUFBLE1BQUEsd0JBQUEsR0FBQTtBQUFBLFlBQUEsVUFBQSx3QkFBQSxDQUFBLEVBQUE7QUFBQSxZQUFBLFNBQUEsd0JBQUE7QUFBQSxhQUFBLHNCQUFTLE9BQUEsT0FBTyxPQUFLLE9BQUEsQ0FBTztJQUFBLENBQUE7QUFFMUMsSUFBQSxvQkFBQSxHQUFBLFlBQUEsRUFBQTtBQUNGLElBQUEsdUJBQUE7Ozs7O0FBZEYsSUFBQSxrQ0FBQSxDQUFBO0FBQ0UsSUFBQSxxQkFBQSxHQUFBLDRGQUFBLEdBQUEsR0FBQSxrQkFBQSxFQUFBLEVBQytCLEdBQUEsNEZBQUEsR0FBQSxHQUFBLGtCQUFBLEVBQUEsRUFLQyxHQUFBLDRGQUFBLEdBQUEsR0FBQSxrQkFBQSxFQUFBO0FBU2hDLElBQUEseUJBQUEsR0FBQSxXQUFBO0FBQVcsSUFBQSxpQkFBQSxDQUFBOztBQUFtQyxJQUFBLHVCQUFBOzs7OztBQWQzQyxJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLFFBQUEsV0FBQSxJQUFBO0FBS0EsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxRQUFBLFdBQUEsS0FBQTtBQUtBLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsUUFBQSxXQUFBLElBQUE7QUFJUSxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLEdBQUEsR0FBQSxtQkFBQSxDQUFBOzs7Ozs7QUFJYixJQUFBLHlCQUFBLEdBQUEsVUFBQTtBQUNFLElBQUEsb0JBQUEsR0FBQSxZQUFBLEVBQUE7QUFFQSxJQUFBLHlCQUFBLEdBQUEsV0FBQTtBQUFXLElBQUEsaUJBQUEsQ0FBQTs7QUFBdUUsSUFBQSx1QkFBQTtBQUVsRixJQUFBLHlCQUFBLEdBQUEsY0FBQSxFQUFBO0FBQzBCLElBQUEscUJBQUEsU0FBQSxTQUFBLG1IQUFBO0FBQUEsTUFBQSx3QkFBQSxHQUFBO0FBQUEsWUFBQSxVQUFBLHdCQUFBLENBQUEsRUFBQTtBQUFBLFlBQUEsU0FBQSx3QkFBQTtBQUFBLGFBQUEsc0JBQVMsT0FBQSxVQUFVLE1BQUksT0FBQSxDQUFPO0lBQUEsQ0FBQTtBQUFFLElBQUEsaUJBQUEsQ0FBQTs7QUFDN0MsSUFBQSx1QkFBQSxFQUFhOzs7O0FBSmYsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw2QkFBQSxJQUFBLHNCQUFBLEdBQUEsR0FBQSxnQkFBQSxHQUFBLE1BQUEsUUFBQSxvQkFBQSxFQUFBLFFBQUEsRUFBQTtBQUcrQyxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLEdBQUEsR0FBQSxzQkFBQSxDQUFBOzs7OztBQVA5RCxJQUFBLGtDQUFBLENBQUE7QUFDRSxJQUFBLHFCQUFBLEdBQUEsc0ZBQUEsR0FBQSxHQUFBLFlBQUEsQ0FBQTs7Ozs7OztBQUFXLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsUUFBQSxvQkFBQSxFQUFBLFNBQUEsS0FBQSxPQUFBLFlBQUEsa0JBQUEsUUFBQSxNQUFBLENBQUE7Ozs7O0FBekJmLElBQUEseUJBQUEsR0FBQSxZQUFBLEVBQUEsRUFBdUQsR0FBQSxpQkFBQTtBQUVuRCxJQUFBLGlCQUFBLENBQUE7O0FBQ0YsSUFBQSx1QkFBQTtBQUNBLElBQUEseUJBQUEsR0FBQSxZQUFBLEVBQUE7QUFDRSxJQUFBLHFCQUFBLEdBQUEsMkVBQUEsR0FBQSxHQUFBLGdCQUFBLENBQUE7QUFrQkYsSUFBQSx1QkFBQTtBQUNBLElBQUEscUJBQUEsR0FBQSwyRUFBQSxHQUFBLEdBQUEsZ0JBQUEsQ0FBQTs7QUFhRixJQUFBLHVCQUFBOzs7Ozs7QUFyQ1UsSUFBQSxxQkFBQSxTQUFBLElBQUE7QUFFTixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDZCQUFBLEtBQUEsc0JBQUEsR0FBQSxHQUFBLDhCQUFBLEdBQUEsR0FBQTtBQUdlLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxRQUFBLGVBQUEsUUFBQSxDQUFBLEVBQXFDLFlBQUEsaUJBQUE7QUFtQnZDLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsc0JBQUEsR0FBQSxHQUFBLE9BQUEsY0FBQSxDQUFBOzs7OztBQStCSCxJQUFBLHlCQUFBLEdBQUEsYUFBQSxFQUFBO0FBQXdELElBQUEsaUJBQUEsQ0FBQTtBQUFRLElBQUEsdUJBQUE7Ozs7QUFBUixJQUFBLG9CQUFBO0FBQUEsSUFBQSw0QkFBQSxRQUFBOzs7Ozs7QUFJdEQsSUFBQSx5QkFBQSxHQUFBLG1CQUFBLEVBQUE7QUFDRSxJQUFBLHFCQUFBLFNBQUEsU0FBQSwwS0FBQTtBQUFBLE1BQUEsd0JBQUEsSUFBQTtBQUFBLFlBQUEsYUFBQSx3QkFBQSxDQUFBLEVBQUE7QUFBQSxZQUFBLFdBQUEsc0JBQUEsQ0FBQTtBQUFBLFlBQUEsVUFBQSx3QkFBQSxDQUFBLEVBQUE7QUFBQSxZQUFBLFNBQUEsd0JBQUE7QUFBQSxhQUFBLHNCQUFTLE9BQUEsV0FBQSxVQUFpQixNQUFJLFNBQUEsV0FBQSxFQUFBLENBQWtCO0lBQUEsQ0FBQTtBQUNoRCxJQUFBLG9CQUFBLEdBQUEsWUFBQSxFQUFBO0FBQ0YsSUFBQSx1QkFBQTs7Ozs7O0FBQ0EsSUFBQSx5QkFBQSxHQUFBLG1CQUFBLEVBQUE7QUFDRSxJQUFBLHFCQUFBLFNBQUEsU0FBQSwwS0FBQTtBQUFBLE1BQUEsd0JBQUEsSUFBQTtBQUFBLFlBQUEsYUFBQSx3QkFBQSxDQUFBLEVBQUE7QUFBQSxZQUFBLFdBQUEsc0JBQUEsQ0FBQTtBQUFBLFlBQUEsVUFBQSx3QkFBQSxDQUFBLEVBQUE7QUFBQSxZQUFBLFNBQUEsd0JBQUE7QUFBQSxhQUFBLHNCQUFTLE9BQUEsV0FBQSxVQUFpQixPQUFLLFNBQUEsV0FBQSxFQUFBLENBQWtCO0lBQUEsQ0FBQTtBQUNqRCxJQUFBLG9CQUFBLEdBQUEsWUFBQSxFQUFBO0FBQ0YsSUFBQSx1QkFBQTs7Ozs7QUFSRixJQUFBLHlCQUFBLEdBQUEsb0JBQUEsRUFBQTtBQUNFLElBQUEscUJBQUEsR0FBQSx3SUFBQSxHQUFBLEdBQUEsbUJBQUEsRUFBQSxFQUNvRCxHQUFBLHdJQUFBLEdBQUEsR0FBQSxtQkFBQSxFQUFBO0FBT3RELElBQUEsdUJBQUE7Ozs7QUFSb0MsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxXQUFBLFdBQUEsU0FBQSxXQUFBLFdBQUEsSUFBQTtBQUlELElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsV0FBQSxXQUFBLFFBQUEsV0FBQSxXQUFBLElBQUE7Ozs7O0FBTnJDLElBQUEsa0NBQUEsQ0FBQTtBQUNFLElBQUEscUJBQUEsR0FBQSxzSEFBQSxHQUFBLEdBQUEsb0JBQUEsRUFBQTs7Ozs7OztBQUFtQixJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLE9BQUEsWUFBQSxtQkFBQSxRQUFBLE1BQUEsQ0FBQTs7Ozs7O0FBVHZCLElBQUEseUJBQUEsR0FBQSxvQkFBQSxNQUFBLENBQUEsRUFBd0UsR0FBQSxZQUFBLEVBQUE7QUFFcEUsSUFBQSxvQkFBQSxHQUFBLFlBQUEsRUFBQTtBQUdBLElBQUEseUJBQUEsR0FBQSxhQUFBLEVBQUE7QUFBVyxJQUFBLHFCQUFBLFNBQUEsU0FBQSxnSEFBQTtBQUFBLFlBQUEsYUFBQSx3QkFBQSxJQUFBLEVBQUE7QUFBQSxZQUFBLFNBQUEsd0JBQUEsQ0FBQTtBQUFBLGFBQUEsc0JBQVMsT0FBQSxXQUFBLFVBQUEsQ0FBa0I7SUFBQSxDQUFBO0FBQUUsSUFBQSxpQkFBQSxDQUFBO0FBQXdDLElBQUEsdUJBQUE7QUFDaEYsSUFBQSxxQkFBQSxHQUFBLGdHQUFBLEdBQUEsR0FBQSxhQUFBLEVBQUE7QUFDRixJQUFBLHVCQUFBO0FBQ0EsSUFBQSxxQkFBQSxHQUFBLG1HQUFBLEdBQUEsR0FBQSxnQkFBQSxDQUFBOztBQVlGLElBQUEsdUJBQUE7Ozs7O0FBZjRDLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNkJBQUEsSUFBQSxXQUFBLFdBQUEsS0FBQSxXQUFBLFVBQUEsRUFBQTtBQUNaLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFdBQUEsV0FBQSxLQUFBO0FBRWYsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxzQkFBQSxHQUFBLEdBQUEsT0FBQSxjQUFBLENBQUE7Ozs7O0FBaEJ2QixJQUFBLHlCQUFBLEdBQUEsaUJBQUEsRUFBQTtBQUF1RSxJQUFBLGlCQUFBLEdBQUEsSUFBQTtBQUNyRSxJQUFBLHlCQUFBLEdBQUEsWUFBQSxFQUFBLEVBQXNDLEdBQUEsV0FBQTtBQUN6QixJQUFBLGlCQUFBLENBQUE7O0FBQzBCLElBQUEsdUJBQUEsRUFBWTtBQUVuRCxJQUFBLHlCQUFBLEdBQUEsT0FBQSxFQUFBLEVBQW9CLEdBQUEsVUFBQTtBQUdoQixJQUFBLHFCQUFBLEdBQUEsb0ZBQUEsR0FBQSxHQUFBLG9CQUFBLEVBQUE7QUFxQkYsSUFBQSx1QkFBQSxFQUFXLEVBQ1A7Ozs7QUE1Qk8sSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw2QkFBQSxJQUFBLHNCQUFBLEdBQUEsR0FBQSxnQkFBQSxHQUFBLE1BQUEsUUFBQSxrQkFBQSxFQUFBLFFBQUEsRUFBQTtBQU1rQyxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLHFCQUFBLFdBQUEsUUFBQSxrQkFBQSxDQUFBOzs7OztBQXFDdkMsSUFBQSx5QkFBQSxHQUFBLGFBQUEsRUFBQTtBQUF3RCxJQUFBLGlCQUFBLENBQUE7QUFBUSxJQUFBLHVCQUFBOzs7O0FBQVIsSUFBQSxvQkFBQTtBQUFBLElBQUEsNEJBQUEsUUFBQTs7Ozs7O0FBSXRELElBQUEseUJBQUEsR0FBQSxtQkFBQSxFQUFBO0FBQ0UsSUFBQSxxQkFBQSxTQUFBLFNBQUEsMEtBQUE7QUFBQSxNQUFBLHdCQUFBLElBQUE7QUFBQSxZQUFBLGFBQUEsd0JBQUEsQ0FBQSxFQUFBO0FBQUEsWUFBQSxXQUFBLHNCQUFBLENBQUE7QUFBQSxZQUFBLFVBQUEsd0JBQUEsQ0FBQSxFQUFBO0FBQUEsWUFBQSxTQUFBLHdCQUFBO0FBQUEsYUFBQSxzQkFBUyxPQUFBLFdBQUEsVUFBaUIsTUFBSSxTQUFBLFdBQUEsRUFBQSxDQUFrQjtJQUFBLENBQUE7QUFDaEQsSUFBQSxvQkFBQSxHQUFBLFlBQUEsRUFBQTtBQUNGLElBQUEsdUJBQUE7Ozs7OztBQUNBLElBQUEseUJBQUEsR0FBQSxtQkFBQSxFQUFBO0FBQ0UsSUFBQSxxQkFBQSxTQUFBLFNBQUEsMEtBQUE7QUFBQSxNQUFBLHdCQUFBLElBQUE7QUFBQSxZQUFBLGFBQUEsd0JBQUEsQ0FBQSxFQUFBO0FBQUEsWUFBQSxXQUFBLHNCQUFBLENBQUE7QUFBQSxZQUFBLFVBQUEsd0JBQUEsQ0FBQSxFQUFBO0FBQUEsWUFBQSxTQUFBLHdCQUFBO0FBQUEsYUFBQSxzQkFBUyxPQUFBLFdBQUEsVUFBaUIsT0FBSyxTQUFBLFdBQUEsRUFBQSxDQUFrQjtJQUFBLENBQUE7QUFDakQsSUFBQSxvQkFBQSxHQUFBLFlBQUEsRUFBQTtBQUNGLElBQUEsdUJBQUE7Ozs7O0FBUkYsSUFBQSx5QkFBQSxHQUFBLG9CQUFBLEVBQUE7QUFDRSxJQUFBLHFCQUFBLEdBQUEsd0lBQUEsR0FBQSxHQUFBLG1CQUFBLEVBQUEsRUFDb0QsR0FBQSx3SUFBQSxHQUFBLEdBQUEsbUJBQUEsRUFBQTtBQU90RCxJQUFBLHVCQUFBOzs7O0FBUm9DLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsV0FBQSxXQUFBLFNBQUEsV0FBQSxXQUFBLElBQUE7QUFJRCxJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLFdBQUEsV0FBQSxRQUFBLFdBQUEsV0FBQSxJQUFBOzs7OztBQU5yQyxJQUFBLGtDQUFBLENBQUE7QUFDRSxJQUFBLHFCQUFBLEdBQUEsc0hBQUEsR0FBQSxHQUFBLG9CQUFBLEVBQUE7Ozs7Ozs7QUFBbUIsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxPQUFBLFlBQUEsbUJBQUEsUUFBQSxNQUFBLENBQUE7Ozs7OztBQVJ2QixJQUFBLHlCQUFBLEdBQUEsb0JBQUEsTUFBQSxDQUFBLEVBQXlFLEdBQUEsWUFBQSxFQUFBO0FBRXJFLElBQUEsb0JBQUEsR0FBQSxZQUFBLEVBQUE7QUFFQSxJQUFBLHlCQUFBLEdBQUEsYUFBQSxFQUFBO0FBQVcsSUFBQSxxQkFBQSxTQUFBLFNBQUEsZ0hBQUE7QUFBQSxZQUFBLGFBQUEsd0JBQUEsSUFBQSxFQUFBO0FBQUEsWUFBQSxTQUFBLHdCQUFBLENBQUE7QUFBQSxhQUFBLHNCQUFTLE9BQUEsV0FBQSxVQUFBLENBQWtCO0lBQUEsQ0FBQTtBQUFFLElBQUEsaUJBQUEsQ0FBQTtBQUF3QyxJQUFBLHVCQUFBO0FBQ2hGLElBQUEscUJBQUEsR0FBQSxnR0FBQSxHQUFBLEdBQUEsYUFBQSxFQUFBO0FBQ0YsSUFBQSx1QkFBQTtBQUNBLElBQUEscUJBQUEsR0FBQSxtR0FBQSxHQUFBLEdBQUEsZ0JBQUEsQ0FBQTs7QUFZRixJQUFBLHVCQUFBOzs7OztBQWY0QyxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDZCQUFBLElBQUEsV0FBQSxXQUFBLEtBQUEsV0FBQSxVQUFBLEVBQUE7QUFDWixJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxXQUFBLFdBQUEsS0FBQTtBQUVmLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsc0JBQUEsR0FBQSxHQUFBLE9BQUEsY0FBQSxDQUFBOzs7OztBQWZ2QixJQUFBLHlCQUFBLEdBQUEsaUJBQUEsRUFBQTtBQUF1RSxJQUFBLGlCQUFBLEdBQUEsSUFBQTtBQUNyRSxJQUFBLHlCQUFBLEdBQUEsWUFBQSxFQUFBLEVBQXNDLEdBQUEsV0FBQTtBQUN6QixJQUFBLGlCQUFBLENBQUE7O0FBQzJCLElBQUEsdUJBQUEsRUFBWTtBQUVwRCxJQUFBLHlCQUFBLEdBQUEsT0FBQSxFQUFBLEVBQW9CLEdBQUEsVUFBQTtBQUdoQixJQUFBLHFCQUFBLEdBQUEsb0ZBQUEsR0FBQSxHQUFBLG9CQUFBLEVBQUE7QUFvQkYsSUFBQSx1QkFBQSxFQUFXLEVBQ1A7Ozs7QUEzQk8sSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw2QkFBQSxJQUFBLHNCQUFBLEdBQUEsR0FBQSxlQUFBLEdBQUEsTUFBQSxRQUFBLG1CQUFBLEVBQUEsUUFBQSxFQUFBO0FBTWtDLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEscUJBQUEsV0FBQSxRQUFBLG1CQUFBLENBQUE7Ozs7O0FBMkN2QyxJQUFBLHlCQUFBLEdBQUEsYUFBQSxFQUFBO0FBQXdELElBQUEsaUJBQUEsQ0FBQTtBQUFRLElBQUEsdUJBQUE7Ozs7QUFBUixJQUFBLG9CQUFBO0FBQUEsSUFBQSw0QkFBQSxRQUFBOzs7Ozs7QUFJdEQsSUFBQSx5QkFBQSxHQUFBLG1CQUFBLEVBQUE7QUFDRSxJQUFBLHFCQUFBLFNBQUEsU0FBQSwwS0FBQTtBQUFBLE1BQUEsd0JBQUEsSUFBQTtBQUFBLFlBQUEsYUFBQSx3QkFBQSxDQUFBLEVBQUE7QUFBQSxZQUFBLFdBQUEsc0JBQUEsQ0FBQTtBQUFBLFlBQUEsVUFBQSx3QkFBQSxDQUFBLEVBQUE7QUFBQSxZQUFBLFNBQUEsd0JBQUE7QUFBQSxhQUFBLHNCQUFTLE9BQUEsV0FBQSxVQUFpQixNQUFJLFNBQUEsV0FBQSxFQUFBLENBQWtCO0lBQUEsQ0FBQTtBQUNoRCxJQUFBLG9CQUFBLEdBQUEsWUFBQSxFQUFBO0FBQ0YsSUFBQSx1QkFBQTs7Ozs7O0FBQ0EsSUFBQSx5QkFBQSxHQUFBLG1CQUFBLEVBQUE7QUFDRSxJQUFBLHFCQUFBLFNBQUEsU0FBQSwwS0FBQTtBQUFBLE1BQUEsd0JBQUEsSUFBQTtBQUFBLFlBQUEsYUFBQSx3QkFBQSxDQUFBLEVBQUE7QUFBQSxZQUFBLFdBQUEsc0JBQUEsQ0FBQTtBQUFBLFlBQUEsVUFBQSx3QkFBQSxDQUFBLEVBQUE7QUFBQSxZQUFBLFNBQUEsd0JBQUE7QUFBQSxhQUFBLHNCQUFTLE9BQUEsV0FBQSxVQUFpQixPQUFLLFNBQUEsV0FBQSxFQUFBLENBQWtCO0lBQUEsQ0FBQTtBQUNqRCxJQUFBLG9CQUFBLEdBQUEsWUFBQSxFQUFBO0FBQ0YsSUFBQSx1QkFBQTs7Ozs7QUFSRixJQUFBLHlCQUFBLEdBQUEsb0JBQUEsRUFBQTtBQUNFLElBQUEscUJBQUEsR0FBQSx3SUFBQSxHQUFBLEdBQUEsbUJBQUEsRUFBQSxFQUNvRCxHQUFBLHdJQUFBLEdBQUEsR0FBQSxtQkFBQSxFQUFBO0FBT3RELElBQUEsdUJBQUE7Ozs7QUFSb0MsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxXQUFBLFdBQUEsU0FBQSxXQUFBLFdBQUEsSUFBQTtBQUlELElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsV0FBQSxXQUFBLFFBQUEsV0FBQSxXQUFBLElBQUE7Ozs7O0FBTnJDLElBQUEsa0NBQUEsQ0FBQTtBQUNFLElBQUEscUJBQUEsR0FBQSxzSEFBQSxHQUFBLEdBQUEsb0JBQUEsRUFBQTs7Ozs7OztBQUFtQixJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLE9BQUEsWUFBQSxtQkFBQSxRQUFBLE1BQUEsQ0FBQTs7Ozs7O0FBVnZCLElBQUEseUJBQUEsR0FBQSxvQkFBQSxNQUFBLENBQUEsRUFBMEUsR0FBQSxZQUFBLEVBQUE7QUFHdEUsSUFBQSxvQkFBQSxHQUFBLFlBQUEsRUFBQTtBQUdBLElBQUEseUJBQUEsR0FBQSxhQUFBLEVBQUE7QUFBVyxJQUFBLHFCQUFBLFNBQUEsU0FBQSxnSEFBQTtBQUFBLFlBQUEsYUFBQSx3QkFBQSxJQUFBLEVBQUE7QUFBQSxZQUFBLFNBQUEsd0JBQUEsQ0FBQTtBQUFBLGFBQUEsc0JBQVMsT0FBQSxXQUFBLFVBQUEsQ0FBa0I7SUFBQSxDQUFBO0FBQUUsSUFBQSxpQkFBQSxDQUFBO0FBQXdDLElBQUEsdUJBQUE7QUFDaEYsSUFBQSxxQkFBQSxHQUFBLGdHQUFBLEdBQUEsR0FBQSxhQUFBLEVBQUE7QUFDRixJQUFBLHVCQUFBO0FBQ0EsSUFBQSxxQkFBQSxHQUFBLG1HQUFBLEdBQUEsR0FBQSxnQkFBQSxDQUFBOztBQVlGLElBQUEsdUJBQUE7Ozs7O0FBZjRDLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNkJBQUEsSUFBQSxXQUFBLFdBQUEsS0FBQSxXQUFBLFVBQUEsRUFBQTtBQUNaLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFdBQUEsV0FBQSxLQUFBO0FBRWYsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxzQkFBQSxHQUFBLEdBQUEsT0FBQSxjQUFBLENBQUE7Ozs7O0FBdEJ2QixJQUFBLHlCQUFBLEdBQUEsaUJBQUEsRUFBQSxFQUEwRSxHQUFBLFlBQUEsRUFBQSxFQUNsQyxHQUFBLFdBQUE7QUFDekIsSUFBQSxpQkFBQSxDQUFBOztBQUM0QixJQUFBLHVCQUFBLEVBQVk7QUFPckQsSUFBQSx5QkFBQSxHQUFBLE9BQUEsRUFBQSxFQUFvQixHQUFBLFVBQUE7QUFHaEIsSUFBQSxxQkFBQSxHQUFBLG9GQUFBLEdBQUEsR0FBQSxvQkFBQSxFQUFBO0FBc0JGLElBQUEsdUJBQUEsRUFBVyxFQUNQOzs7O0FBbENPLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNkJBQUEsSUFBQSxzQkFBQSxHQUFBLEdBQUEsZ0JBQUEsR0FBQSxNQUFBLFFBQUEsb0JBQUEsRUFBQSxRQUFBLEVBQUE7QUFXa0MsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxXQUFBLFFBQUEsb0JBQUEsQ0FBQTs7Ozs7O0FBbE56RCxJQUFBLGtDQUFBLENBQUE7QUFXRSxJQUFBLHlCQUFBLEdBQUEsYUFBQSxFQUFhLEdBQUEsV0FBQSxDQUFBLEVBRThCLEdBQUEsa0JBQUEsQ0FBQTtBQUNWLElBQUEscUJBQUEsU0FBQSxTQUFBLGlGQUFBO0FBQUEsTUFBQSx3QkFBQSxHQUFBO0FBQUEsWUFBQSxTQUFBLHdCQUFBO0FBQUEsYUFBQSxzQkFBUyxPQUFBLE1BQUEsQ0FBTztJQUFBLENBQUE7QUFDM0MsSUFBQSxvQkFBQSxHQUFBLFlBQUEsQ0FBQTtBQUNGLElBQUEsdUJBQUEsRUFBaUI7QUFFbkIsSUFBQSxxQkFBQSxHQUFBLHVFQUFBLEdBQUEsR0FBQSx3QkFBQSxDQUFBO0FBQ0EsSUFBQSx5QkFBQSxHQUFBLFlBQUEsQ0FBQSxFQUF5QixHQUFBLFVBQUEsRUFFYixHQUFBLGNBQUEsRUFBQTtBQUVOLElBQUEsb0JBQUEsR0FBQSxPQUFBLEVBQUE7QUFDRixJQUFBLHVCQUFBO0FBQ0EsSUFBQSx5QkFBQSxJQUFBLFdBQUEsRUFBVyxJQUFBLElBQUE7QUFDTCxJQUFBLGlCQUFBLEVBQUE7QUFBaUIsSUFBQSx1QkFBQSxFQUFLLEVBQ2hCO0FBRWQsSUFBQSx5QkFBQSxJQUFBLFVBQUEsRUFBVSxJQUFBLGNBQUEsRUFBQTtBQUVOLElBQUEsb0JBQUEsSUFBQSxPQUFBLEVBQUE7QUFDRixJQUFBLHVCQUFBO0FBQ0EsSUFBQSx5QkFBQSxJQUFBLFdBQUEsRUFBVyxJQUFBLElBQUE7QUFDTCxJQUFBLGlCQUFBLEVBQUE7QUFBaUIsSUFBQSx1QkFBQSxFQUFLLEVBQ2hCO0FBRWQsSUFBQSx5QkFBQSxJQUFBLFVBQUE7QUFDRSxJQUFBLG9CQUFBLElBQUEsWUFBQSxFQUFBO0FBQ0EsSUFBQSx5QkFBQSxJQUFBLGFBQUEsRUFBQSxFQUFpQyxJQUFBLElBQUE7QUFDM0IsSUFBQSxpQkFBQSxFQUFBO0FBQW9CLElBQUEsdUJBQUEsRUFBSyxFQUNuQjtBQUdkLElBQUEseUJBQUEsSUFBQSxVQUFBO0FBQ0UsSUFBQSxvQkFBQSxJQUFBLFlBQUEsRUFBQTtBQUNBLElBQUEseUJBQUEsSUFBQSxXQUFBLEVBQVcsSUFBQSxJQUFBO0FBQ0wsSUFBQSxpQkFBQSxFQUFBO0FBQStCLElBQUEsdUJBQUEsRUFBSyxFQUM5QjtBQUdkLElBQUEscUJBQUEsSUFBQSw0REFBQSxHQUFBLEdBQUEsWUFBQSxDQUFBO0FBUUEsSUFBQSx5QkFBQSxJQUFBLFVBQUE7QUFDRSxJQUFBLG9CQUFBLElBQUEsWUFBQSxFQUFBO0FBQ0EsSUFBQSx5QkFBQSxJQUFBLGFBQUEsRUFBQSxFQUFpQyxJQUFBLElBQUE7QUFDM0IsSUFBQSxpQkFBQSxFQUFBO0FBQStCLElBQUEsdUJBQUEsRUFBSyxFQUM5QjtBQUdkLElBQUEscUJBQUEsSUFBQSw0REFBQSxHQUFBLEdBQUEsWUFBQSxDQUFBLEVBQTJELElBQUEsNERBQUEsR0FBQSxHQUFBLFlBQUEsQ0FBQSxFQU8zQixJQUFBLDREQUFBLEdBQUEsR0FBQSxZQUFBLENBQUE7QUFhbEMsSUFBQSx1QkFBQTtBQU9BLElBQUEscUJBQUEsSUFBQSw0REFBQSxHQUFBLEdBQUEsWUFBQSxFQUFBO0FBdUNBLElBQUEseUJBQUEsSUFBQSxZQUFBLENBQUEsRUFBeUIsSUFBQSx1QkFBQSxFQUFBO0FBRXJCLElBQUEscUJBQUEsSUFBQSxpRUFBQSxHQUFBLEdBQUEsaUJBQUEsRUFBQSxFQUF1RSxJQUFBLGlFQUFBLEdBQUEsR0FBQSxpQkFBQSxFQUFBLEVBZ0NBLElBQUEsaUVBQUEsR0FBQSxHQUFBLGlCQUFBLEVBQUE7QUFxRXpFLElBQUEsdUJBQUEsRUFBc0IsRUFDYjs7Ozs7O0FBMU5pQixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsUUFBQSxZQUFBLFFBQUEsYUFBQSxDQUFBLE9BQUEsU0FBQSxHQUFBLFNBQUEsQ0FBQTtBQUNsQixJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxTQUFBLElBQUE7QUFJQyxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLGdDQUFBLE9BQUEsUUFBQSxjQUFBLHVCQUFBO0FBR0QsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw0QkFBQSxRQUFBLFFBQUE7QUFLQyxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLGdDQUFBLE9BQUEsUUFBQSxjQUFBLHVCQUFBO0FBR0QsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw0QkFBQSxRQUFBLFFBQUE7QUFNQSxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLFFBQUEsV0FBQTtBQU9BLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNkJBQUEsSUFBQSxRQUFBLE1BQUEsS0FBQSxRQUFBLE1BQUEsTUFBQTtBQUlHLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsUUFBQSxRQUFBO0FBV0gsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw2QkFBQSxJQUFBLFFBQUEsTUFBQSxLQUFBLFFBQUEsVUFBQSxFQUFBO0FBSUcsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxRQUFBLFVBQUEsUUFBQSxVQUFBLFVBQUE7QUFPQSxJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLFFBQUEsUUFBQTtBQU9BLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsUUFBQSxjQUFBLFFBQUEsY0FBQSxHQUFBO0FBYTBCLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsT0FBQSxRQUFBO0FBdUM3QixJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxTQUFBLElBQUE7QUFDYSxJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxZQUFBLElBQUEsRUFBaUIsU0FBQSwwQkFBQSxJQUFBLEdBQUEsQ0FBQTtBQUNSLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsUUFBQSxrQkFBQSxFQUFBLFNBQUEsQ0FBQTtBQWdDRCxJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLFFBQUEsbUJBQUEsRUFBQSxTQUFBLENBQUE7QUErQkUsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxRQUFBLG9CQUFBLEVBQUEsU0FBQSxDQUFBOzs7OztBQTRDbkMsSUFBQSxvQkFBQSxHQUFBLHFCQUFBLEVBQUEsRUFBbUUsR0FBQSxxQkFBQSxFQUFBOzs7OztBQU1uRSxJQUFBLHlCQUFBLEdBQUEsYUFBQSxFQUFhLEdBQUEsV0FBQSxDQUFBLEVBRThCLEdBQUEsa0JBQUEsRUFBQTtBQUVyQyxJQUFBLG9CQUFBLEdBQUEsWUFBQSxDQUFBO0FBQ0YsSUFBQSx1QkFBQSxFQUFpQjtBQUluQixJQUFBLHlCQUFBLEdBQUEsT0FBQSxFQUFBO0FBQ0UsSUFBQSxvQkFBQSxHQUFBLHFCQUFBLEVBQUE7QUFDRixJQUFBLHVCQUFBO0FBR0EsSUFBQSx5QkFBQSxHQUFBLFlBQUEsQ0FBQSxFQUF5QixHQUFBLFVBQUEsRUFFYixHQUFBLGNBQUEsRUFBQTtBQUVOLElBQUEsb0JBQUEsR0FBQSxxQkFBQSxFQUFBO0FBQ0YsSUFBQSx1QkFBQTtBQUNBLElBQUEseUJBQUEsSUFBQSxXQUFBO0FBQ0UsSUFBQSxvQkFBQSxJQUFBLHFCQUFBLEVBQUE7QUFDRixJQUFBLHVCQUFBLEVBQVk7QUFJZCxJQUFBLHlCQUFBLElBQUEsVUFBQSxFQUFVLElBQUEsY0FBQSxFQUFBO0FBRU4sSUFBQSxvQkFBQSxJQUFBLHFCQUFBLEVBQUE7QUFDRixJQUFBLHVCQUFBO0FBQ0EsSUFBQSx5QkFBQSxJQUFBLFdBQUE7QUFDRSxJQUFBLG9CQUFBLElBQUEscUJBQUEsRUFBQTtBQUNGLElBQUEsdUJBQUEsRUFBWTtBQUlkLElBQUEseUJBQUEsSUFBQSxVQUFBO0FBQ0UsSUFBQSxvQkFBQSxJQUFBLFlBQUEsRUFBQTtBQUNBLElBQUEseUJBQUEsSUFBQSxhQUFBLEVBQUE7QUFDRSxJQUFBLG9CQUFBLElBQUEscUJBQUEsRUFBQTtBQUNGLElBQUEsdUJBQUEsRUFBWTtBQUlkLElBQUEseUJBQUEsSUFBQSxVQUFBO0FBQ0UsSUFBQSxvQkFBQSxJQUFBLFlBQUEsRUFBQTtBQUNBLElBQUEseUJBQUEsSUFBQSxXQUFBO0FBQ0UsSUFBQSxvQkFBQSxJQUFBLHFCQUFBLEVBQUE7QUFDRixJQUFBLHVCQUFBLEVBQVk7QUFJZCxJQUFBLHlCQUFBLElBQUEsVUFBQTtBQUNFLElBQUEsb0JBQUEsSUFBQSxZQUFBLEVBQUE7QUFDQSxJQUFBLHlCQUFBLElBQUEsYUFBQSxFQUFBO0FBQ0UsSUFBQSxvQkFBQSxJQUFBLHFCQUFBLEVBQUE7QUFDRixJQUFBLHVCQUFBO0FBQ0EsSUFBQSxvQkFBQSxJQUFBLFlBQUEsRUFBQTtBQUNGLElBQUEsdUJBQUE7QUFHQSxJQUFBLHlCQUFBLElBQUEsVUFBQTtBQUNFLElBQUEsb0JBQUEsSUFBQSxZQUFBLEVBQUE7QUFDQSxJQUFBLHlCQUFBLElBQUEsV0FBQTtBQUNFLElBQUEsb0JBQUEsSUFBQSxxQkFBQSxFQUFBO0FBQ0YsSUFBQSx1QkFBQSxFQUFZO0FBSWQsSUFBQSx5QkFBQSxJQUFBLFVBQUE7QUFDRSxJQUFBLG9CQUFBLElBQUEsWUFBQSxFQUFBO0FBQ0EsSUFBQSx5QkFBQSxJQUFBLFdBQUE7QUFDRSxJQUFBLG9CQUFBLElBQUEscUJBQUEsRUFBQTtBQUNGLElBQUEsdUJBQUEsRUFBWTtBQUlkLElBQUEseUJBQUEsSUFBQSxVQUFBO0FBQ0UsSUFBQSxvQkFBQSxJQUFBLFlBQUEsRUFBQTtBQUNBLElBQUEseUJBQUEsSUFBQSxXQUFBO0FBQ0UsSUFBQSxvQkFBQSxJQUFBLHFCQUFBLEVBQUE7QUFDRixJQUFBLHVCQUFBLEVBQVk7QUFJZCxJQUFBLHlCQUFBLElBQUEsVUFBQTtBQUNFLElBQUEsb0JBQUEsSUFBQSxZQUFBLEVBQUE7QUFDQSxJQUFBLHlCQUFBLElBQUEsV0FBQTtBQUNFLElBQUEsb0JBQUEsSUFBQSxxQkFBQSxFQUFBO0FBQ0YsSUFBQSx1QkFBQSxFQUFZLEVBQ0g7QUFJYixJQUFBLHlCQUFBLElBQUEsWUFBQSxFQUFB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Q3hDLFFBQVE7UUFDUixTQUFTO1FBQ1QsU0FBUyxDQUFDO1VBQ1IsTUFBTTtVQUNOLE1BQU07VUFDTixTQUFTLENBQUMsU0FBUTtBQUNoQixvQkFBUSxJQUFJLElBQUk7VUFDbEI7U0FDRDtPQUNGO0FBQ0QsWUFBTSxRQUFPO0lBQ2Y7O0VBRU0sU0FBUyxNQUFVOztBQUN2QixZQUFNLGNBQWMsTUFBTSxZQUFZLG1CQUFrQjtBQUN4RCxVQUFJLFlBQVksT0FBTyxhQUFhLFlBQVksT0FBTyxVQUFVO0FBQy9ELGdCQUFRLEtBQUs7VUFDWCxLQUNFLHdEQUNBLEtBQUssV0FDTCxNQUNBLEtBQUssWUFDTCxhQUNBLFlBQVksT0FBTyxXQUNuQixNQUNBLFlBQVksT0FBTztTQUN0QixFQUFFLE1BQU0sT0FBSTtBQUNYLGtCQUFRLElBQUksQ0FBQztRQUNmLENBQUM7TUFDSCxPQUFPO0FBQ0wsZ0JBQVEsS0FBSztVQUNYLEtBQ0Usd0RBQ0EsS0FBSyxXQUNMLE1BQ0EsS0FBSztTQUNSLEVBQUUsTUFBTSxPQUFJO0FBQ1gsa0JBQVEsSUFBSSxDQUFDO1FBQ2YsQ0FBQztNQUNIO0lBQ0Y7Ozs7bUNBaGVXLHlCQUFzQiw0QkFBQSxlQUFBLEdBQUEsNEJBQUEsUUFBQSxHQUFBLDRCQUFBLFNBQUEsR0FBQSw0QkFBQSxrQkFBQSxHQUFBLDRCQUFBLGVBQUEsR0FBQSw0QkFBQSxtQkFBQSxHQUFBLDRCQUFBLGVBQUEsR0FBQSw0QkFBQSxXQUFBLEdBQUEsNEJBQUEsZUFBQSxHQUFBLDRCQUFBLGlCQUFBLEdBQUEsNEJBQUEsZ0JBQUEsQ0FBQTtBQUFBO3dGQUF0Qix5QkFBc0IsV0FBQSxDQUFBLENBQUEseUJBQUEsQ0FBQSxHQUFBLFdBQUEsU0FBQSw2QkFBQSxJQUFBLEtBQUE7QUFBQSxNQUFBLEtBQUEsR0FBQTs7Ozs7Ozs7O0FDOUNuQyxJQUFBLHFCQUFBLEdBQUEsZ0RBQUEsSUFBQSxJQUFBLGdCQUFBLENBQUE7O0FBZ1BBLElBQUEscUJBQUEsR0FBQSwrQ0FBQSxHQUFBLEdBQUEsZUFBQSxNQUFBLEdBQUEsZ0NBQUEsRUFBNEIsR0FBQSwrQ0FBQSxJQUFBLEdBQUEsZUFBQSxNQUFBLEdBQUEsZ0NBQUE7Ozs7QUFoUGIsSUFBQSxxQkFBQSxRQUFBLHNCQUFBLEdBQUEsR0FBQSxJQUFBLEtBQUEsQ0FBQSxFQUFvQixZQUFBLFdBQUE7OztBRDhDN0IsSUFBTyx5QkFBUDs7NkVBQU8sd0JBQXNCLEVBQUEsV0FBQSwwQkFBQSxVQUFBLDhFQUFBLFlBQUEsR0FBQSxDQUFBO0FBQUEsR0FBQTsiLCJuYW1lcyI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlsxLDIsM119
