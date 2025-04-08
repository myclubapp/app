import {
  forceUpdate,
  getElement,
  h,
  registerInstance
} from "./chunk-HFNYFWXL.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/pwa-elements/dist/esm/pwa-camera.entry.js
var ImageCapture = window.ImageCapture;
if (typeof ImageCapture === "undefined") {
  ImageCapture = class {
    /**
     * TODO https://www.w3.org/TR/image-capture/#constructors
     *
     * @param {MediaStreamTrack} videoStreamTrack - A MediaStreamTrack of the 'video' kind
     */
    constructor(videoStreamTrack) {
      if (videoStreamTrack.kind !== "video") throw new DOMException("NotSupportedError");
      this._videoStreamTrack = videoStreamTrack;
      if (!("readyState" in this._videoStreamTrack)) {
        this._videoStreamTrack.readyState = "live";
      }
      this._previewStream = new MediaStream([videoStreamTrack]);
      this.videoElement = document.createElement("video");
      this.videoElementPlaying = new Promise((resolve) => {
        this.videoElement.addEventListener("playing", resolve);
      });
      if (HTMLMediaElement) {
        this.videoElement.srcObject = this._previewStream;
      } else {
        this.videoElement.src = URL.createObjectURL(this._previewStream);
      }
      this.videoElement.muted = true;
      this.videoElement.setAttribute("playsinline", "");
      this.videoElement.play();
      this.canvasElement = document.createElement("canvas");
      this.canvas2dContext = this.canvasElement.getContext("2d");
    }
    /**
     * https://w3c.github.io/mediacapture-image/index.html#dom-imagecapture-videostreamtrack
     * @return {MediaStreamTrack} The MediaStreamTrack passed into the constructor
     */
    get videoStreamTrack() {
      return this._videoStreamTrack;
    }
    /**
     * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-getphotocapabilities
     * @return {Promise<PhotoCapabilities>} Fulfilled promise with
     * [PhotoCapabilities](https://www.w3.org/TR/image-capture/#idl-def-photocapabilities)
     * object on success, rejected promise on failure
     */
    getPhotoCapabilities() {
      return new Promise(function executorGPC(resolve, reject) {
        const MediaSettingsRange = {
          current: 0,
          min: 0,
          max: 0
        };
        resolve({
          exposureCompensation: MediaSettingsRange,
          exposureMode: "none",
          fillLightMode: ["none"],
          focusMode: "none",
          imageHeight: MediaSettingsRange,
          imageWidth: MediaSettingsRange,
          iso: MediaSettingsRange,
          redEyeReduction: false,
          whiteBalanceMode: "none",
          zoom: MediaSettingsRange
        });
        reject(new DOMException("OperationError"));
      });
    }
    /**
     * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-setoptions
     * @param {Object} photoSettings - Photo settings dictionary, https://www.w3.org/TR/image-capture/#idl-def-photosettings
     * @return {Promise<void>} Fulfilled promise on success, rejected promise on failure
     */
    setOptions(_photoSettings = {}) {
      return new Promise(function executorSO(_resolve, _reject) {
      });
    }
    /**
     * TODO
     * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-takephoto
     * @return {Promise<Blob>} Fulfilled promise with [Blob](https://www.w3.org/TR/FileAPI/#blob)
     * argument on success; rejected promise on failure
     */
    takePhoto() {
      const self = this;
      return new Promise(function executorTP(resolve, reject) {
        if (self._videoStreamTrack.readyState !== "live") {
          return reject(new DOMException("InvalidStateError"));
        }
        self.videoElementPlaying.then(() => {
          try {
            self.canvasElement.width = self.videoElement.videoWidth;
            self.canvasElement.height = self.videoElement.videoHeight;
            self.canvas2dContext.drawImage(self.videoElement, 0, 0);
            self.canvasElement.toBlob(resolve);
          } catch (error) {
            reject(new DOMException("UnknownError"));
          }
        });
      });
    }
    /**
     * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-grabframe
     * @return {Promise<ImageBitmap>} Fulfilled promise with
     * [ImageBitmap](https://www.w3.org/TR/html51/webappapis.html#webappapis-images)
     * argument on success; rejected promise on failure
     */
    grabFrame() {
      const self = this;
      return new Promise(function executorGF(resolve, reject) {
        if (self._videoStreamTrack.readyState !== "live") {
          return reject(new DOMException("InvalidStateError"));
        }
        self.videoElementPlaying.then(() => {
          try {
            self.canvasElement.width = self.videoElement.videoWidth;
            self.canvasElement.height = self.videoElement.videoHeight;
            self.canvas2dContext.drawImage(self.videoElement, 0, 0);
            resolve(window.createImageBitmap(self.canvasElement));
          } catch (error) {
            reject(new DOMException("UnknownError"));
          }
        });
      });
    }
  };
}
window.ImageCapture = ImageCapture;
var cameraCss = ":host{--header-height:4em;--footer-height:9em;--header-height-landscape:3em;--footer-height-landscape:6em;--shutter-size:6em;--icon-size-header:1.5em;--icon-size-footer:2.5em;--margin-size-header:1.5em;--margin-size-footer:2.0em;font-family:-apple-system, BlinkMacSystemFont,\n    \u201CSegoe UI\u201D, \u201CRoboto\u201D, \u201CDroid Sans\u201D, \u201CHelvetica Neue\u201D, sans-serif;display:block;width:100%;height:100%}.items{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;width:100%;height:100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.items .item{-ms-flex:1;flex:1;text-align:center}.items .item:first-child{text-align:left}.items .item:last-child{text-align:right}.camera-wrapper{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.camera-header{color:white;background-color:black;height:var(--header-height)}.camera-header .items{padding:var(--margin-size-header)}.camera-footer{position:relative;color:white;background-color:black;height:var(--footer-height)}.camera-footer .items{padding:var(--margin-size-footer)}@media (max-height: 375px){.camera-header{--header-height:var(--header-height-landscape)}.camera-footer{--footer-height:var(--footer-height-landscape)}.camera-footer .shutter{--shutter-size:4em}}.camera-video{position:relative;-ms-flex:1;flex:1;overflow:hidden;background-color:black}video{width:100%;height:100%;max-height:100%;min-height:100%;-o-object-fit:cover;object-fit:cover;background-color:black}.pick-image{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;left:var(--margin-size-footer);top:0;height:100%;width:var(--icon-size-footer);color:white}.pick-image input{visibility:hidden}.pick-image svg{cursor:pointer;fill:white;width:var(--icon-size-footer);height:var(--icon-size-footer)}.shutter{position:absolute;left:50%;top:50%;width:var(--shutter-size);height:var(--shutter-size);margin-top:calc(var(--shutter-size) / -2);margin-left:calc(var(--shutter-size) / -2);border-radius:100%;background-color:#c6cdd8;padding:12px;-webkit-box-sizing:border-box;box-sizing:border-box}.shutter:active .shutter-button{background-color:#9da9bb}.shutter-button{background-color:white;border-radius:100%;width:100%;height:100%}.rotate{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;right:var(--margin-size-footer);top:0;height:100%;width:var(--icon-size-footer);color:white}.rotate img{width:var(--icon-size-footer);height:var(--icon-size-footer)}.shutter-overlay{z-index:5;position:absolute;width:100%;height:100%;background-color:black}.error{width:100%;height:100%;color:white;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.no-device{background-color:black;-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:white}.no-device label{cursor:pointer;background:#fff;border-radius:6px;padding:6px 8px;color:black}.no-device input{visibility:hidden;height:0;margin-top:16px}.accept{background-color:black;-ms-flex:1;flex:1;overflow:hidden}.accept .accept-image{width:100%;height:100%;max-height:100%;background-position:center center;background-size:cover;background-repeat:no-repeat}.close img{cursor:pointer;width:var(--icon-size-header);height:var(--icon-size-header)}.flash img{width:var(--icon-size-header);height:var(--icon-size-header)}.accept-use img{width:var(--icon-size-footer);height:var(--icon-size-footer)}.accept-cancel img{width:var(--icon-size-footer);height:var(--icon-size-footer)}.offscreen-image-render{top:0;left:0;visibility:hidden;pointer-events:none;width:100%;height:100%}";
var CameraPWA = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hasMultipleCameras = false;
    this.hasFlash = false;
    this.flashModes = [];
    this.flashMode = "off";
    this.handlePickFile = (_e) => {
    };
    this.handleShutterClick = (_e) => {
      console.debug("shutter click");
      this.capture();
    };
    this.handleRotateClick = (_e) => {
      this.rotate();
    };
    this.handleClose = (_e) => {
      this.handlePhoto && this.handlePhoto(null);
    };
    this.handleFlashClick = (_e) => {
      this.cycleFlash();
    };
    this.handleCancelPhoto = (_e) => {
      const track = this.stream && this.stream.getTracks()[0];
      let c = track && track.getConstraints();
      this.photo = null;
      this.photoSrc = null;
      if (c) {
        this.initCamera({
          video: {
            facingMode: c.facingMode
          }
        });
      } else {
        this.initCamera();
      }
    };
    this.handleAcceptPhoto = (_e) => {
      this.handlePhoto && this.handlePhoto(this.photo);
    };
    this.handleFileInputChange = (e) => __async(this, null, function* () {
      const input = e.target;
      const file = input.files[0];
      try {
        const orientation = yield this.getOrientation(file);
        console.debug("Got orientation", orientation);
        this.photoOrientation = orientation;
      } catch (e2) {
      }
      this.handlePhoto && this.handlePhoto(file);
    });
    this.handleVideoMetadata = (e) => {
      console.debug("Video metadata", e);
    };
    this.facingMode = "user";
    this.handlePhoto = void 0;
    this.hidePicker = false;
    this.handleNoDeviceError = void 0;
    this.noDevicesText = "No camera found";
    this.noDevicesButtonText = "Choose image";
    this.photo = void 0;
    this.photoSrc = void 0;
    this.showShutterOverlay = false;
    this.flashIndex = 0;
    this.hasCamera = null;
    this.rotation = 0;
    this.deviceError = null;
  }
  componentDidLoad() {
    return __async(this, null, function* () {
      this.defaultConstraints = {
        video: {
          facingMode: this.facingMode
        }
      };
      yield this.queryDevices();
      yield this.initCamera();
    });
  }
  disconnectedCallback() {
    this.stopStream();
    this.photoSrc && URL.revokeObjectURL(this.photoSrc);
  }
  hasImageCapture() {
    return "ImageCapture" in window;
  }
  /**
   * Query the list of connected devices and figure out how many video inputs we have.
   */
  queryDevices() {
    return __async(this, null, function* () {
      try {
        const devices = yield navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter((d) => d.kind == "videoinput");
        this.hasCamera = !!videoDevices.length;
        this.hasMultipleCameras = videoDevices.length > 1;
      } catch (e) {
        this.deviceError = e;
      }
    });
  }
  initCamera(constraints) {
    return __async(this, null, function* () {
      if (!constraints) {
        constraints = this.defaultConstraints;
      }
      try {
        const stream = yield navigator.mediaDevices.getUserMedia(Object.assign({
          video: true,
          audio: false
        }, constraints));
        this.initStream(stream);
      } catch (e) {
        this.deviceError = e;
        this.handleNoDeviceError && this.handleNoDeviceError(e);
      }
    });
  }
  initStream(stream) {
    return __async(this, null, function* () {
      this.stream = stream;
      this.videoElement.srcObject = stream;
      if (this.hasImageCapture()) {
        this.imageCapture = new window.ImageCapture(stream.getVideoTracks()[0]);
        yield this.initPhotoCapabilities(this.imageCapture);
      } else {
        this.deviceError = "No image capture";
        this.handleNoDeviceError && this.handleNoDeviceError();
      }
      forceUpdate(this.el);
    });
  }
  initPhotoCapabilities(imageCapture) {
    return __async(this, null, function* () {
      const c = yield imageCapture.getPhotoCapabilities();
      if (c.fillLightMode && c.fillLightMode.length > 1) {
        this.flashModes = c.fillLightMode.map((m) => m);
        if (this.flashMode) {
          this.flashMode = this.flashModes[this.flashModes.indexOf(this.flashMode)] || "off";
          this.flashIndex = this.flashModes.indexOf(this.flashMode) || 0;
        } else {
          this.flashIndex = 0;
        }
      }
    });
  }
  stopStream() {
    if (this.videoElement) {
      this.videoElement.srcObject = null;
    }
    this.stream && this.stream.getTracks().forEach((track) => track.stop());
  }
  capture() {
    return __async(this, null, function* () {
      if (this.hasImageCapture()) {
        try {
          const photo = yield this.imageCapture.takePhoto({
            fillLightMode: this.flashModes.length > 1 ? this.flashMode : void 0
          });
          yield this.flashScreen();
          this.promptAccept(photo);
        } catch (e) {
          console.error("Unable to take photo!", e);
        }
      }
      this.stopStream();
    });
  }
  promptAccept(photo) {
    return __async(this, null, function* () {
      this.photo = photo;
      const orientation = yield this.getOrientation(photo);
      console.debug("Got orientation", orientation);
      this.photoOrientation = orientation;
      if (orientation) {
        switch (orientation) {
          case 1:
          case 2:
            this.rotation = 0;
            break;
          case 3:
          case 4:
            this.rotation = 180;
            break;
          case 5:
          case 6:
            this.rotation = 90;
            break;
          case 7:
          case 8:
            this.rotation = 270;
            break;
        }
      }
      this.photoSrc = URL.createObjectURL(photo);
    });
  }
  getOrientation(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const view = new DataView(event.target.result);
        if (view.getUint16(0, false) !== 65496) {
          return resolve(-2);
        }
        const length = view.byteLength;
        let offset = 2;
        while (offset < length) {
          const marker = view.getUint16(offset, false);
          offset += 2;
          if (marker === 65505) {
            if (view.getUint32(offset += 2, false) !== 1165519206) {
              return resolve(-1);
            }
            const little = view.getUint16(offset += 6, false) === 18761;
            offset += view.getUint32(offset + 4, little);
            const tags = view.getUint16(offset, little);
            offset += 2;
            for (let i = 0; i < tags; i++) {
              if (view.getUint16(offset + i * 12, little) === 274) {
                return resolve(view.getUint16(offset + i * 12 + 8, little));
              }
            }
          } else if ((marker & 65280) !== 65280) {
            break;
          } else {
            offset += view.getUint16(offset, false);
          }
        }
        return resolve(-1);
      };
      reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
    });
  }
  rotate() {
    this.stopStream();
    const track = this.stream && this.stream.getTracks()[0];
    if (!track) {
      return;
    }
    let c = track.getConstraints();
    let facingMode = c.facingMode;
    if (!facingMode) {
      let c2 = track.getCapabilities();
      if (c2.facingMode) {
        facingMode = c2.facingMode[0];
      }
    }
    if (facingMode === "environment") {
      this.initCamera({
        video: {
          facingMode: "user"
        }
      });
    } else {
      this.initCamera({
        video: {
          facingMode: "environment"
        }
      });
    }
  }
  setFlashMode(mode) {
    console.debug("New flash mode: ", mode);
    this.flashMode = mode;
  }
  cycleFlash() {
    if (this.flashModes.length > 0) {
      this.flashIndex = (this.flashIndex + 1) % this.flashModes.length;
      this.setFlashMode(this.flashModes[this.flashIndex]);
    }
  }
  flashScreen() {
    return __async(this, null, function* () {
      return new Promise((resolve, _reject) => {
        this.showShutterOverlay = true;
        setTimeout(() => {
          this.showShutterOverlay = false;
          resolve();
        }, 100);
      });
    });
  }
  iconExit() {
    return `data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M402.2,134L378,109.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L139.6,109.8 c-1.6-1.6-4.1-1.6-5.7,0L109.8,134c-1.6,1.6-1.6,4.1,0,5.7l113.5,113.5c1.6,1.6,1.6,4.1,0,5.7L109.8,372.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l113.5-113.5c1.6-1.6,4.1-1.6,5.7,0l113.5,113.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l113.5-113.5C403.7,138.1,403.7,135.5,402.2,134z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;
  }
  iconPhotos() {
    return h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "512",
      viewBox: "0 0 512 512"
    }, h("path", {
      d: "M450.29,112H142c-34,0-62,27.51-62,61.33V418.67C80,452.49,108,480,142,480H450c34,0,62-26.18,62-60V173.33C512,139.51,484.32,112,450.29,112Zm-77.15,61.34a46,46,0,1,1-46.28,46A46.19,46.19,0,0,1,373.14,173.33Zm-231.55,276c-17,0-29.86-13.75-29.86-30.66V353.85l90.46-80.79a46.54,46.54,0,0,1,63.44,1.83L328.27,337l-113,112.33ZM480,418.67a30.67,30.67,0,0,1-30.71,30.66H259L376.08,333a46.24,46.24,0,0,1,59.44-.16L480,370.59Z"
    }), h("path", {
      d: "M384,32H64A64,64,0,0,0,0,96V352a64.11,64.11,0,0,0,48,62V152a72,72,0,0,1,72-72H446A64.11,64.11,0,0,0,384,32Z"
    }));
  }
  iconConfirm() {
    return `data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%232CD865' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_1_'%3E%3Cg%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M208,301.4l-55.4-55.5c-1.5-1.5-4-1.6-5.6-0.1l-23.4,22.3c-1.6,1.6-1.7,4.1-0.1,5.7l81.6,81.4 c3.1,3.1,8.2,3.1,11.3,0l171.8-171.7c1.6-1.6,1.6-4.2-0.1-5.7l-23.4-22.3c-1.6-1.5-4.1-1.5-5.6,0.1L213.7,301.4 C212.1,303,209.6,303,208,301.4z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;
  }
  iconReverseCamera() {
    return `data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M352,0H160C72,0,0,72,0,160v192c0,88,72,160,160,160h192c88,0,160-72,160-160V160C512,72,440,0,352,0z M356.7,365.8l-3.7,3.3c-27,23.2-61.4,35.9-96.8,35.9c-72.4,0-135.8-54.7-147-125.6c-0.3-1.9-2-3.3-3.9-3.3H64 c-3.3,0-5.2-3.8-3.2-6.4l61.1-81.4c1.6-2.1,4.7-2.1,6.4-0.1l63.3,81.4c2,2.6,0.2,6.5-3.2,6.5h-40.6c-2.5,0-4.5,2.4-3.9,4.8 c11.5,51.5,59.2,90.6,112.4,90.6c26.4,0,51.8-9.7,73.7-27.9l3.1-2.5c1.6-1.3,3.9-1.1,5.3,0.3l18.5,18.6 C358.5,361.6,358.4,364.3,356.7,365.8z M451.4,245.6l-61,83.5c-1.6,2.2-4.8,2.2-6.4,0.1l-63.3-83.3c-2-2.6-0.1-6.4,3.2-6.4h40.8 c2.5,0,4.4-2.3,3.9-4.8c-5.1-24.2-17.8-46.5-36.5-63.7c-21.2-19.4-48.2-30.1-76-30.1c-26.5,0-52.6,9.7-73.7,27.3l-3.1,2.5 c-1.6,1.3-3.9,1.2-5.4-0.3l-18.5-18.5c-1.6-1.6-1.5-4.3,0.2-5.9l3.5-3.1c27-23.2,61.4-35.9,96.8-35.9c38,0,73.9,13.7,101.2,38.7 c23.2,21.1,40.3,55.2,45.7,90.1c0.3,1.9,1.9,3.4,3.9,3.4h41.3C451.4,239.2,453.3,243,451.4,245.6z'/%3E%3C/g%3E%3C/svg%3E`;
  }
  iconRetake() {
    return `data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%23727A87' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M394.2,142L370,117.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L147.6,117.8 c-1.6-1.6-4.1-1.6-5.7,0L117.8,142c-1.6,1.6-1.6,4.1,0,5.7l105.5,105.5c1.6,1.6,1.6,4.1,0,5.7L117.8,364.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l105.5-105.5c1.6-1.6,4.1-1.6,5.7,0l105.5,105.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l105.5-105.5C395.7,146.1,395.7,143.5,394.2,142z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;
  }
  iconFlashOff() {
    return `data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M498,483.7L42.3,28L14,56.4l149.8,149.8L91,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9c1.6,0,2.7,1.3,2.4,2.7 L197.6,507c-1,4.4,5.8,6.9,8.9,3.2l118.6-142.8L469.6,512L498,483.7z'/%3E%3Cpath class='st0' d='M449,218.2c2.5-3,0.1-7.2-3.9-7.2H301.2c-1.6,0-2.7-1.3-2.4-2.7L342.4,5c1-4.4-5.8-6.9-8.9-3.2L214.9,144.6 l161.3,161.3L449,218.2z'/%3E%3C/g%3E%3C/svg%3E`;
  }
  iconFlashOn() {
    return `data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3C/svg%3E`;
  }
  iconFlashAuto() {
    return `data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3Cg%3E%3Cpath class='st0' d='M321.3,186l74-186H438l74,186h-43.5l-11.9-32.5h-80.9l-12,32.5H321.3z M415.8,47.9l-27.2,70.7h54.9l-27.2-70.7 H415.8z'/%3E%3C/g%3E%3C/svg%3E`;
  }
  render() {
    const acceptStyles = {};
    return h("div", {
      class: "camera-wrapper"
    }, h("div", {
      class: "camera-header"
    }, h("section", {
      class: "items"
    }, h("div", {
      class: "item close",
      onClick: (e) => this.handleClose(e)
    }, h("img", {
      src: this.iconExit()
    })), h("div", {
      class: "item flash",
      onClick: (e) => this.handleFlashClick(e)
    }, this.flashModes.length > 0 && h("div", null, this.flashMode == "off" ? h("img", {
      src: this.iconFlashOff()
    }) : "", this.flashMode == "auto" ? h("img", {
      src: this.iconFlashAuto()
    }) : "", this.flashMode == "flash" ? h("img", {
      src: this.iconFlashOn()
    }) : "")))), (this.hasCamera === false || !!this.deviceError) && h("div", {
      class: "no-device"
    }, h("h2", null, this.noDevicesText), h("label", {
      htmlFor: "_pwa-elements-camera-input"
    }, this.noDevicesButtonText), h("input", {
      type: "file",
      id: "_pwa-elements-camera-input",
      onChange: this.handleFileInputChange,
      accept: "image/*",
      class: "select-file-button"
    })), this.photoSrc ? h("div", {
      class: "accept"
    }, h("div", {
      class: "accept-image",
      style: Object.assign({
        backgroundImage: `url(${this.photoSrc})`
      }, acceptStyles)
    })) : h("div", {
      class: "camera-video"
    }, this.showShutterOverlay && h("div", {
      class: "shutter-overlay"
    }), this.hasImageCapture() ? h("video", {
      ref: (el) => this.videoElement = el,
      onLoadedMetaData: this.handleVideoMetadata,
      autoplay: true,
      playsinline: true
    }) : h("canvas", {
      ref: (el) => this.canvasElement = el,
      width: "100%",
      height: "100%"
    }), h("canvas", {
      class: "offscreen-image-render",
      ref: (e) => this.offscreenCanvas = e,
      width: "100%",
      height: "100%"
    })), this.hasCamera && h("div", {
      class: "camera-footer"
    }, !this.photo ? [!this.hidePicker && h("div", {
      class: "pick-image",
      onClick: this.handlePickFile
    }, h("label", {
      htmlFor: "_pwa-elements-file-pick"
    }, this.iconPhotos()), h("input", {
      type: "file",
      id: "_pwa-elements-file-pick",
      onChange: this.handleFileInputChange,
      accept: "image/*",
      class: "pick-image-button"
    })), h("div", {
      class: "shutter",
      onClick: this.handleShutterClick
    }, h("div", {
      class: "shutter-button"
    })), h("div", {
      class: "rotate",
      onClick: this.handleRotateClick
    }, h("img", {
      src: this.iconReverseCamera()
    }))] : h("section", {
      class: "items"
    }, h("div", {
      class: "item accept-cancel",
      onClick: (e) => this.handleCancelPhoto(e)
    }, h("img", {
      src: this.iconRetake()
    })), h("div", {
      class: "item accept-use",
      onClick: (e) => this.handleAcceptPhoto(e)
    }, h("img", {
      src: this.iconConfirm()
    })))));
  }
  static get assetsDirs() {
    return ["icons"];
  }
  get el() {
    return getElement(this);
  }
};
CameraPWA.style = cameraCss;
export {
  CameraPWA as pwa_camera
};
/*! Bundled license information:

@ionic/pwa-elements/dist/esm/pwa-camera.entry.js:
  (**
   * MediaStream ImageCapture polyfill
   *
   * @license
   * Copyright 2018 Google Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvcHdhLWVsZW1lbnRzL2Rpc3QvZXNtL3B3YS1jYW1lcmEuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBmIGFzIGZvcmNlVXBkYXRlLCBoLCBnIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LTFjNWM0N2I0LmpzJztcblxuLyoqXG4gKiBNZWRpYVN0cmVhbSBJbWFnZUNhcHR1cmUgcG9seWZpbGxcbiAqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5sZXQgSW1hZ2VDYXB0dXJlID0gd2luZG93LkltYWdlQ2FwdHVyZTtcbmlmICh0eXBlb2YgSW1hZ2VDYXB0dXJlID09PSAndW5kZWZpbmVkJykge1xuICBJbWFnZUNhcHR1cmUgPSBjbGFzcyB7XG4gICAgLyoqXG4gICAgICogVE9ETyBodHRwczovL3d3dy53My5vcmcvVFIvaW1hZ2UtY2FwdHVyZS8jY29uc3RydWN0b3JzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01lZGlhU3RyZWFtVHJhY2t9IHZpZGVvU3RyZWFtVHJhY2sgLSBBIE1lZGlhU3RyZWFtVHJhY2sgb2YgdGhlICd2aWRlbycga2luZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZpZGVvU3RyZWFtVHJhY2spIHtcbiAgICAgIGlmICh2aWRlb1N0cmVhbVRyYWNrLmtpbmQgIT09ICd2aWRlbycpIHRocm93IG5ldyBET01FeGNlcHRpb24oJ05vdFN1cHBvcnRlZEVycm9yJyk7XG4gICAgICB0aGlzLl92aWRlb1N0cmVhbVRyYWNrID0gdmlkZW9TdHJlYW1UcmFjaztcbiAgICAgIGlmICghKCdyZWFkeVN0YXRlJyBpbiB0aGlzLl92aWRlb1N0cmVhbVRyYWNrKSkge1xuICAgICAgICAvLyBQb2x5ZmlsbCBmb3IgRmlyZWZveFxuICAgICAgICB0aGlzLl92aWRlb1N0cmVhbVRyYWNrLnJlYWR5U3RhdGUgPSAnbGl2ZSc7XG4gICAgICB9XG4gICAgICAvLyBNZWRpYVN0cmVhbSBjb25zdHJ1Y3RvciBub3QgYXZhaWxhYmxlIHVudGlsIENocm9tZSA1NSAtIGh0dHBzOi8vd3d3LmNocm9tZXN0YXR1cy5jb20vZmVhdHVyZS81OTEyMTcyNTQ2NzUyNTEyXG4gICAgICB0aGlzLl9wcmV2aWV3U3RyZWFtID0gbmV3IE1lZGlhU3RyZWFtKFt2aWRlb1N0cmVhbVRyYWNrXSk7XG4gICAgICB0aGlzLnZpZGVvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgICB0aGlzLnZpZGVvRWxlbWVudFBsYXlpbmcgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGxheWluZycsIHJlc29sdmUpO1xuICAgICAgfSk7XG4gICAgICBpZiAoSFRNTE1lZGlhRWxlbWVudCkge1xuICAgICAgICB0aGlzLnZpZGVvRWxlbWVudC5zcmNPYmplY3QgPSB0aGlzLl9wcmV2aWV3U3RyZWFtOyAvLyBTYWZhcmkgMTEgZG9lc24ndCBhbGxvdyB1c2Ugb2YgY3JlYXRlT2JqZWN0VVJMIGZvciBNZWRpYVN0cmVhbVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLl9wcmV2aWV3U3RyZWFtKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmlkZW9FbGVtZW50Lm11dGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMudmlkZW9FbGVtZW50LnNldEF0dHJpYnV0ZSgncGxheXNpbmxpbmUnLCAnJyk7IC8vIFJlcXVpcmVkIGJ5IFNhZmFyaSBvbiBpT1MgMTEuIFNlZSBodHRwczovL3dlYmtpdC5vcmcvYmxvZy82Nzg0XG4gICAgICB0aGlzLnZpZGVvRWxlbWVudC5wbGF5KCk7XG4gICAgICB0aGlzLmNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIC8vIFRPRE8gRmlyZWZveCBoYXMgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL09mZnNjcmVlbkNhbnZhc1xuICAgICAgdGhpcy5jYW52YXMyZENvbnRleHQgPSB0aGlzLmNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogaHR0cHM6Ly93M2MuZ2l0aHViLmlvL21lZGlhY2FwdHVyZS1pbWFnZS9pbmRleC5odG1sI2RvbS1pbWFnZWNhcHR1cmUtdmlkZW9zdHJlYW10cmFja1xuICAgICAqIEByZXR1cm4ge01lZGlhU3RyZWFtVHJhY2t9IFRoZSBNZWRpYVN0cmVhbVRyYWNrIHBhc3NlZCBpbnRvIHRoZSBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGdldCB2aWRlb1N0cmVhbVRyYWNrKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZpZGVvU3RyZWFtVHJhY2s7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEltcGxlbWVudHMgaHR0cHM6Ly93d3cudzMub3JnL1RSL2ltYWdlLWNhcHR1cmUvI2RvbS1pbWFnZWNhcHR1cmUtZ2V0cGhvdG9jYXBhYmlsaXRpZXNcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFBob3RvQ2FwYWJpbGl0aWVzPn0gRnVsZmlsbGVkIHByb21pc2Ugd2l0aFxuICAgICAqIFtQaG90b0NhcGFiaWxpdGllc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL2ltYWdlLWNhcHR1cmUvI2lkbC1kZWYtcGhvdG9jYXBhYmlsaXRpZXMpXG4gICAgICogb2JqZWN0IG9uIHN1Y2Nlc3MsIHJlamVjdGVkIHByb21pc2Ugb24gZmFpbHVyZVxuICAgICAqL1xuICAgIGdldFBob3RvQ2FwYWJpbGl0aWVzKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGV4ZWN1dG9yR1BDKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAvLyBUT0RPIHNlZSBodHRwczovL2dpdGh1Yi5jb20vdzNjL21lZGlhY2FwdHVyZS1pbWFnZS9pc3N1ZXMvOTdcbiAgICAgICAgY29uc3QgTWVkaWFTZXR0aW5nc1JhbmdlID0ge1xuICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogMFxuICAgICAgICB9O1xuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICBleHBvc3VyZUNvbXBlbnNhdGlvbjogTWVkaWFTZXR0aW5nc1JhbmdlLFxuICAgICAgICAgIGV4cG9zdXJlTW9kZTogJ25vbmUnLFxuICAgICAgICAgIGZpbGxMaWdodE1vZGU6IFsnbm9uZSddLFxuICAgICAgICAgIGZvY3VzTW9kZTogJ25vbmUnLFxuICAgICAgICAgIGltYWdlSGVpZ2h0OiBNZWRpYVNldHRpbmdzUmFuZ2UsXG4gICAgICAgICAgaW1hZ2VXaWR0aDogTWVkaWFTZXR0aW5nc1JhbmdlLFxuICAgICAgICAgIGlzbzogTWVkaWFTZXR0aW5nc1JhbmdlLFxuICAgICAgICAgIHJlZEV5ZVJlZHVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgd2hpdGVCYWxhbmNlTW9kZTogJ25vbmUnLFxuICAgICAgICAgIHpvb206IE1lZGlhU2V0dGluZ3NSYW5nZVxuICAgICAgICB9KTtcbiAgICAgICAgcmVqZWN0KG5ldyBET01FeGNlcHRpb24oJ09wZXJhdGlvbkVycm9yJykpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEltcGxlbWVudHMgaHR0cHM6Ly93d3cudzMub3JnL1RSL2ltYWdlLWNhcHR1cmUvI2RvbS1pbWFnZWNhcHR1cmUtc2V0b3B0aW9uc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwaG90b1NldHRpbmdzIC0gUGhvdG8gc2V0dGluZ3MgZGljdGlvbmFyeSwgaHR0cHM6Ly93d3cudzMub3JnL1RSL2ltYWdlLWNhcHR1cmUvI2lkbC1kZWYtcGhvdG9zZXR0aW5nc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59IEZ1bGZpbGxlZCBwcm9taXNlIG9uIHN1Y2Nlc3MsIHJlamVjdGVkIHByb21pc2Ugb24gZmFpbHVyZVxuICAgICAqL1xuICAgIHNldE9wdGlvbnMoX3Bob3RvU2V0dGluZ3MgPSB7fSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGV4ZWN1dG9yU08oX3Jlc29sdmUsIF9yZWplY3QpIHtcbiAgICAgICAgLy8gVE9ET1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRPRE9cbiAgICAgKiBJbXBsZW1lbnRzIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9pbWFnZS1jYXB0dXJlLyNkb20taW1hZ2VjYXB0dXJlLXRha2VwaG90b1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8QmxvYj59IEZ1bGZpbGxlZCBwcm9taXNlIHdpdGggW0Jsb2JdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9GaWxlQVBJLyNibG9iKVxuICAgICAqIGFyZ3VtZW50IG9uIHN1Y2Nlc3M7IHJlamVjdGVkIHByb21pc2Ugb24gZmFpbHVyZVxuICAgICAqL1xuICAgIHRha2VQaG90bygpIHtcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGV4ZWN1dG9yVFAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIGBJZiB0aGUgcmVhZHlTdGF0ZSBvZiB0aGUgTWVkaWFTdHJlYW1UcmFjayBwcm92aWRlZCBpbiB0aGUgY29uc3RydWN0b3IgaXMgbm90IGxpdmUsXG4gICAgICAgIC8vIHJldHVybiBhIHByb21pc2UgcmVqZWN0ZWQgd2l0aCBhIG5ldyBET01FeGNlcHRpb24gd2hvc2UgbmFtZSBpcyBcIkludmFsaWRTdGF0ZUVycm9yXCIuYFxuICAgICAgICBpZiAoc2VsZi5fdmlkZW9TdHJlYW1UcmFjay5yZWFkeVN0YXRlICE9PSAnbGl2ZScpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBET01FeGNlcHRpb24oJ0ludmFsaWRTdGF0ZUVycm9yJykpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYudmlkZW9FbGVtZW50UGxheWluZy50aGVuKCgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2VsZi5jYW52YXNFbGVtZW50LndpZHRoID0gc2VsZi52aWRlb0VsZW1lbnQudmlkZW9XaWR0aDtcbiAgICAgICAgICAgIHNlbGYuY2FudmFzRWxlbWVudC5oZWlnaHQgPSBzZWxmLnZpZGVvRWxlbWVudC52aWRlb0hlaWdodDtcbiAgICAgICAgICAgIHNlbGYuY2FudmFzMmRDb250ZXh0LmRyYXdJbWFnZShzZWxmLnZpZGVvRWxlbWVudCwgMCwgMCk7XG4gICAgICAgICAgICBzZWxmLmNhbnZhc0VsZW1lbnQudG9CbG9iKHJlc29sdmUpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZWplY3QobmV3IERPTUV4Y2VwdGlvbignVW5rbm93bkVycm9yJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW1wbGVtZW50cyBodHRwczovL3d3dy53My5vcmcvVFIvaW1hZ2UtY2FwdHVyZS8jZG9tLWltYWdlY2FwdHVyZS1ncmFiZnJhbWVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPEltYWdlQml0bWFwPn0gRnVsZmlsbGVkIHByb21pc2Ugd2l0aFxuICAgICAqIFtJbWFnZUJpdG1hcF0oaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1MS93ZWJhcHBhcGlzLmh0bWwjd2ViYXBwYXBpcy1pbWFnZXMpXG4gICAgICogYXJndW1lbnQgb24gc3VjY2VzczsgcmVqZWN0ZWQgcHJvbWlzZSBvbiBmYWlsdXJlXG4gICAgICovXG4gICAgZ3JhYkZyYW1lKCkge1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZXhlY3V0b3JHRihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gYElmIHRoZSByZWFkeVN0YXRlIG9mIHRoZSBNZWRpYVN0cmVhbVRyYWNrIHByb3ZpZGVkIGluIHRoZSBjb25zdHJ1Y3RvciBpcyBub3QgbGl2ZSxcbiAgICAgICAgLy8gcmV0dXJuIGEgcHJvbWlzZSByZWplY3RlZCB3aXRoIGEgbmV3IERPTUV4Y2VwdGlvbiB3aG9zZSBuYW1lIGlzIFwiSW52YWxpZFN0YXRlRXJyb3JcIi5gXG4gICAgICAgIGlmIChzZWxmLl92aWRlb1N0cmVhbVRyYWNrLnJlYWR5U3RhdGUgIT09ICdsaXZlJykge1xuICAgICAgICAgIHJldHVybiByZWplY3QobmV3IERPTUV4Y2VwdGlvbignSW52YWxpZFN0YXRlRXJyb3InKSk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi52aWRlb0VsZW1lbnRQbGF5aW5nLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZWxmLmNhbnZhc0VsZW1lbnQud2lkdGggPSBzZWxmLnZpZGVvRWxlbWVudC52aWRlb1dpZHRoO1xuICAgICAgICAgICAgc2VsZi5jYW52YXNFbGVtZW50LmhlaWdodCA9IHNlbGYudmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgICAgICAgICAgc2VsZi5jYW52YXMyZENvbnRleHQuZHJhd0ltYWdlKHNlbGYudmlkZW9FbGVtZW50LCAwLCAwKTtcbiAgICAgICAgICAgIC8vIFRPRE8gcG9seWZpbGwgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ltYWdlQml0bWFwRmFjdG9yaWVzL2NyZWF0ZUltYWdlQml0bWFwIGZvciBJRVxuICAgICAgICAgICAgcmVzb2x2ZSh3aW5kb3cuY3JlYXRlSW1hZ2VCaXRtYXAoc2VsZi5jYW52YXNFbGVtZW50KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRE9NRXhjZXB0aW9uKCdVbmtub3duRXJyb3InKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cbndpbmRvdy5JbWFnZUNhcHR1cmUgPSBJbWFnZUNhcHR1cmU7XG5jb25zdCBjYW1lcmFDc3MgPSBcIjpob3N0ey0taGVhZGVyLWhlaWdodDo0ZW07LS1mb290ZXItaGVpZ2h0OjllbTstLWhlYWRlci1oZWlnaHQtbGFuZHNjYXBlOjNlbTstLWZvb3Rlci1oZWlnaHQtbGFuZHNjYXBlOjZlbTstLXNodXR0ZXItc2l6ZTo2ZW07LS1pY29uLXNpemUtaGVhZGVyOjEuNWVtOy0taWNvbi1zaXplLWZvb3RlcjoyLjVlbTstLW1hcmdpbi1zaXplLWhlYWRlcjoxLjVlbTstLW1hcmdpbi1zaXplLWZvb3RlcjoyLjBlbTtmb250LWZhbWlseTotYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXFxuICAgIOKAnFNlZ29lIFVJ4oCdLCDigJxSb2JvdG/igJ0sIOKAnERyb2lkIFNhbnPigJ0sIOKAnEhlbHZldGljYSBOZXVl4oCdLCBzYW5zLXNlcmlmO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uaXRlbXN7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5pdGVtcyAuaXRlbXstbXMtZmxleDoxO2ZsZXg6MTt0ZXh0LWFsaWduOmNlbnRlcn0uaXRlbXMgLml0ZW06Zmlyc3QtY2hpbGR7dGV4dC1hbGlnbjpsZWZ0fS5pdGVtcyAuaXRlbTpsYXN0LWNoaWxke3RleHQtYWxpZ246cmlnaHR9LmNhbWVyYS13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LmNhbWVyYS1oZWFkZXJ7Y29sb3I6d2hpdGU7YmFja2dyb3VuZC1jb2xvcjpibGFjaztoZWlnaHQ6dmFyKC0taGVhZGVyLWhlaWdodCl9LmNhbWVyYS1oZWFkZXIgLml0ZW1ze3BhZGRpbmc6dmFyKC0tbWFyZ2luLXNpemUtaGVhZGVyKX0uY2FtZXJhLWZvb3Rlcntwb3NpdGlvbjpyZWxhdGl2ZTtjb2xvcjp3aGl0ZTtiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO2hlaWdodDp2YXIoLS1mb290ZXItaGVpZ2h0KX0uY2FtZXJhLWZvb3RlciAuaXRlbXN7cGFkZGluZzp2YXIoLS1tYXJnaW4tc2l6ZS1mb290ZXIpfUBtZWRpYSAobWF4LWhlaWdodDogMzc1cHgpey5jYW1lcmEtaGVhZGVyey0taGVhZGVyLWhlaWdodDp2YXIoLS1oZWFkZXItaGVpZ2h0LWxhbmRzY2FwZSl9LmNhbWVyYS1mb290ZXJ7LS1mb290ZXItaGVpZ2h0OnZhcigtLWZvb3Rlci1oZWlnaHQtbGFuZHNjYXBlKX0uY2FtZXJhLWZvb3RlciAuc2h1dHRlcnstLXNodXR0ZXItc2l6ZTo0ZW19fS5jYW1lcmEtdmlkZW97cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MTtmbGV4OjE7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQtY29sb3I6YmxhY2t9dmlkZW97d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXgtaGVpZ2h0OjEwMCU7bWluLWhlaWdodDoxMDAlOy1vLW9iamVjdC1maXQ6Y292ZXI7b2JqZWN0LWZpdDpjb3ZlcjtiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrfS5waWNrLWltYWdle2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7cG9zaXRpb246YWJzb2x1dGU7bGVmdDp2YXIoLS1tYXJnaW4tc2l6ZS1mb290ZXIpO3RvcDowO2hlaWdodDoxMDAlO3dpZHRoOnZhcigtLWljb24tc2l6ZS1mb290ZXIpO2NvbG9yOndoaXRlfS5waWNrLWltYWdlIGlucHV0e3Zpc2liaWxpdHk6aGlkZGVufS5waWNrLWltYWdlIHN2Z3tjdXJzb3I6cG9pbnRlcjtmaWxsOndoaXRlO3dpZHRoOnZhcigtLWljb24tc2l6ZS1mb290ZXIpO2hlaWdodDp2YXIoLS1pY29uLXNpemUtZm9vdGVyKX0uc2h1dHRlcntwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTt0b3A6NTAlO3dpZHRoOnZhcigtLXNodXR0ZXItc2l6ZSk7aGVpZ2h0OnZhcigtLXNodXR0ZXItc2l6ZSk7bWFyZ2luLXRvcDpjYWxjKHZhcigtLXNodXR0ZXItc2l6ZSkgLyAtMik7bWFyZ2luLWxlZnQ6Y2FsYyh2YXIoLS1zaHV0dGVyLXNpemUpIC8gLTIpO2JvcmRlci1yYWRpdXM6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiNjNmNkZDg7cGFkZGluZzoxMnB4Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uc2h1dHRlcjphY3RpdmUgLnNodXR0ZXItYnV0dG9ue2JhY2tncm91bmQtY29sb3I6IzlkYTliYn0uc2h1dHRlci1idXR0b257YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtib3JkZXItcmFkaXVzOjEwMCU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0ucm90YXRle2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6dmFyKC0tbWFyZ2luLXNpemUtZm9vdGVyKTt0b3A6MDtoZWlnaHQ6MTAwJTt3aWR0aDp2YXIoLS1pY29uLXNpemUtZm9vdGVyKTtjb2xvcjp3aGl0ZX0ucm90YXRlIGltZ3t3aWR0aDp2YXIoLS1pY29uLXNpemUtZm9vdGVyKTtoZWlnaHQ6dmFyKC0taWNvbi1zaXplLWZvb3Rlcil9LnNodXR0ZXItb3ZlcmxheXt6LWluZGV4OjU7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrfS5lcnJvcnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2NvbG9yOndoaXRlO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn0ubm8tZGV2aWNle2JhY2tncm91bmQtY29sb3I6YmxhY2s7LW1zLWZsZXg6MTtmbGV4OjE7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2NvbG9yOndoaXRlfS5uby1kZXZpY2UgbGFiZWx7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6NnB4O3BhZGRpbmc6NnB4IDhweDtjb2xvcjpibGFja30ubm8tZGV2aWNlIGlucHV0e3Zpc2liaWxpdHk6aGlkZGVuO2hlaWdodDowO21hcmdpbi10b3A6MTZweH0uYWNjZXB0e2JhY2tncm91bmQtY29sb3I6YmxhY2s7LW1zLWZsZXg6MTtmbGV4OjE7b3ZlcmZsb3c6aGlkZGVufS5hY2NlcHQgLmFjY2VwdC1pbWFnZXt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21heC1oZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBjZW50ZXI7YmFja2dyb3VuZC1zaXplOmNvdmVyO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdH0uY2xvc2UgaW1ne2N1cnNvcjpwb2ludGVyO3dpZHRoOnZhcigtLWljb24tc2l6ZS1oZWFkZXIpO2hlaWdodDp2YXIoLS1pY29uLXNpemUtaGVhZGVyKX0uZmxhc2ggaW1ne3dpZHRoOnZhcigtLWljb24tc2l6ZS1oZWFkZXIpO2hlaWdodDp2YXIoLS1pY29uLXNpemUtaGVhZGVyKX0uYWNjZXB0LXVzZSBpbWd7d2lkdGg6dmFyKC0taWNvbi1zaXplLWZvb3Rlcik7aGVpZ2h0OnZhcigtLWljb24tc2l6ZS1mb290ZXIpfS5hY2NlcHQtY2FuY2VsIGltZ3t3aWR0aDp2YXIoLS1pY29uLXNpemUtZm9vdGVyKTtoZWlnaHQ6dmFyKC0taWNvbi1zaXplLWZvb3Rlcil9Lm9mZnNjcmVlbi1pbWFnZS1yZW5kZXJ7dG9wOjA7bGVmdDowO3Zpc2liaWxpdHk6aGlkZGVuO3BvaW50ZXItZXZlbnRzOm5vbmU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX1cIjtcbmNvbnN0IENhbWVyYVBXQSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgLy8gV2hldGhlciB0aGUgZGV2aWNlIGhhcyBtdWx0aXBsZSBjYW1lcmFzIChmcm9udC9iYWNrKVxuICAgIHRoaXMuaGFzTXVsdGlwbGVDYW1lcmFzID0gZmFsc2U7XG4gICAgLy8gV2hldGhlciB0aGUgZGV2aWNlIGhhcyBmbGFzaCBzdXBwb3J0XG4gICAgdGhpcy5oYXNGbGFzaCA9IGZhbHNlO1xuICAgIC8vIEZsYXNoIG1vZGVzIGZvciBjYW1lcmFcbiAgICB0aGlzLmZsYXNoTW9kZXMgPSBbXTtcbiAgICAvLyBDdXJyZW50IGZsYXNoIG1vZGVcbiAgICB0aGlzLmZsYXNoTW9kZSA9ICdvZmYnO1xuICAgIHRoaXMuaGFuZGxlUGlja0ZpbGUgPSBfZSA9PiB7fTtcbiAgICB0aGlzLmhhbmRsZVNodXR0ZXJDbGljayA9IF9lID0+IHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ3NodXR0ZXIgY2xpY2snKTtcbiAgICAgIHRoaXMuY2FwdHVyZSgpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVSb3RhdGVDbGljayA9IF9lID0+IHtcbiAgICAgIHRoaXMucm90YXRlKCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNsb3NlID0gX2UgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVQaG90byAmJiB0aGlzLmhhbmRsZVBob3RvKG51bGwpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVGbGFzaENsaWNrID0gX2UgPT4ge1xuICAgICAgdGhpcy5jeWNsZUZsYXNoKCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNhbmNlbFBob3RvID0gX2UgPT4ge1xuICAgICAgY29uc3QgdHJhY2sgPSB0aGlzLnN0cmVhbSAmJiB0aGlzLnN0cmVhbS5nZXRUcmFja3MoKVswXTtcbiAgICAgIGxldCBjID0gdHJhY2sgJiYgdHJhY2suZ2V0Q29uc3RyYWludHMoKTtcbiAgICAgIHRoaXMucGhvdG8gPSBudWxsO1xuICAgICAgdGhpcy5waG90b1NyYyA9IG51bGw7XG4gICAgICBpZiAoYykge1xuICAgICAgICB0aGlzLmluaXRDYW1lcmEoe1xuICAgICAgICAgIHZpZGVvOiB7XG4gICAgICAgICAgICBmYWNpbmdNb2RlOiBjLmZhY2luZ01vZGVcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbml0Q2FtZXJhKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUFjY2VwdFBob3RvID0gX2UgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVQaG90byAmJiB0aGlzLmhhbmRsZVBob3RvKHRoaXMucGhvdG8pO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVGaWxlSW5wdXRDaGFuZ2UgPSBhc3luYyBlID0+IHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZS50YXJnZXQ7XG4gICAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXNbMF07XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IGF3YWl0IHRoaXMuZ2V0T3JpZW50YXRpb24oZmlsZSk7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ0dvdCBvcmllbnRhdGlvbicsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgdGhpcy5waG90b09yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgdGhpcy5oYW5kbGVQaG90byAmJiB0aGlzLmhhbmRsZVBob3RvKGZpbGUpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVWaWRlb01ldGFkYXRhID0gZSA9PiB7XG4gICAgICBjb25zb2xlLmRlYnVnKCdWaWRlbyBtZXRhZGF0YScsIGUpO1xuICAgIH07XG4gICAgdGhpcy5mYWNpbmdNb2RlID0gJ3VzZXInO1xuICAgIHRoaXMuaGFuZGxlUGhvdG8gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oaWRlUGlja2VyID0gZmFsc2U7XG4gICAgdGhpcy5oYW5kbGVOb0RldmljZUVycm9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubm9EZXZpY2VzVGV4dCA9ICdObyBjYW1lcmEgZm91bmQnO1xuICAgIHRoaXMubm9EZXZpY2VzQnV0dG9uVGV4dCA9ICdDaG9vc2UgaW1hZ2UnO1xuICAgIHRoaXMucGhvdG8gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5waG90b1NyYyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNob3dTaHV0dGVyT3ZlcmxheSA9IGZhbHNlO1xuICAgIHRoaXMuZmxhc2hJbmRleCA9IDA7XG4gICAgdGhpcy5oYXNDYW1lcmEgPSBudWxsO1xuICAgIHRoaXMucm90YXRpb24gPSAwO1xuICAgIHRoaXMuZGV2aWNlRXJyb3IgPSBudWxsO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgdGhpcy5kZWZhdWx0Q29uc3RyYWludHMgPSB7XG4gICAgICB2aWRlbzoge1xuICAgICAgICBmYWNpbmdNb2RlOiB0aGlzLmZhY2luZ01vZGVcbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIEZpZ3VyZSBvdXQgaG93IG1hbnkgY2FtZXJhcyB3ZSBoYXZlXG4gICAgYXdhaXQgdGhpcy5xdWVyeURldmljZXMoKTtcbiAgICAvLyBJbml0aWFsaXplIHRoZSBjYW1lcmFcbiAgICBhd2FpdCB0aGlzLmluaXRDYW1lcmEoKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnN0b3BTdHJlYW0oKTtcbiAgICB0aGlzLnBob3RvU3JjICYmIFVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5waG90b1NyYyk7XG4gIH1cbiAgaGFzSW1hZ2VDYXB0dXJlKCkge1xuICAgIHJldHVybiAnSW1hZ2VDYXB0dXJlJyBpbiB3aW5kb3c7XG4gIH1cbiAgLyoqXG4gICAqIFF1ZXJ5IHRoZSBsaXN0IG9mIGNvbm5lY3RlZCBkZXZpY2VzIGFuZCBmaWd1cmUgb3V0IGhvdyBtYW55IHZpZGVvIGlucHV0cyB3ZSBoYXZlLlxuICAgKi9cbiAgYXN5bmMgcXVlcnlEZXZpY2VzKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkZXZpY2VzID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCk7XG4gICAgICBjb25zdCB2aWRlb0RldmljZXMgPSBkZXZpY2VzLmZpbHRlcihkID0+IGQua2luZCA9PSAndmlkZW9pbnB1dCcpO1xuICAgICAgdGhpcy5oYXNDYW1lcmEgPSAhIXZpZGVvRGV2aWNlcy5sZW5ndGg7XG4gICAgICB0aGlzLmhhc011bHRpcGxlQ2FtZXJhcyA9IHZpZGVvRGV2aWNlcy5sZW5ndGggPiAxO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuZGV2aWNlRXJyb3IgPSBlO1xuICAgIH1cbiAgfVxuICBhc3luYyBpbml0Q2FtZXJhKGNvbnN0cmFpbnRzKSB7XG4gICAgaWYgKCFjb25zdHJhaW50cykge1xuICAgICAgY29uc3RyYWludHMgPSB0aGlzLmRlZmF1bHRDb25zdHJhaW50cztcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICB2aWRlbzogdHJ1ZSxcbiAgICAgICAgYXVkaW86IGZhbHNlXG4gICAgICB9LCBjb25zdHJhaW50cykpO1xuICAgICAgdGhpcy5pbml0U3RyZWFtKHN0cmVhbSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5kZXZpY2VFcnJvciA9IGU7XG4gICAgICB0aGlzLmhhbmRsZU5vRGV2aWNlRXJyb3IgJiYgdGhpcy5oYW5kbGVOb0RldmljZUVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBhc3luYyBpbml0U3RyZWFtKHN0cmVhbSkge1xuICAgIHRoaXMuc3RyZWFtID0gc3RyZWFtO1xuICAgIHRoaXMudmlkZW9FbGVtZW50LnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICBpZiAodGhpcy5oYXNJbWFnZUNhcHR1cmUoKSkge1xuICAgICAgdGhpcy5pbWFnZUNhcHR1cmUgPSBuZXcgd2luZG93LkltYWdlQ2FwdHVyZShzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXSk7XG4gICAgICBhd2FpdCB0aGlzLmluaXRQaG90b0NhcGFiaWxpdGllcyh0aGlzLmltYWdlQ2FwdHVyZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGV2aWNlRXJyb3IgPSAnTm8gaW1hZ2UgY2FwdHVyZSc7XG4gICAgICB0aGlzLmhhbmRsZU5vRGV2aWNlRXJyb3IgJiYgdGhpcy5oYW5kbGVOb0RldmljZUVycm9yKCk7XG4gICAgfVxuICAgIC8vIEFsd2F5cyByZS1yZW5kZXJcbiAgICBmb3JjZVVwZGF0ZSh0aGlzLmVsKTtcbiAgfVxuICBhc3luYyBpbml0UGhvdG9DYXBhYmlsaXRpZXMoaW1hZ2VDYXB0dXJlKSB7XG4gICAgY29uc3QgYyA9IGF3YWl0IGltYWdlQ2FwdHVyZS5nZXRQaG90b0NhcGFiaWxpdGllcygpO1xuICAgIGlmIChjLmZpbGxMaWdodE1vZGUgJiYgYy5maWxsTGlnaHRNb2RlLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMuZmxhc2hNb2RlcyA9IGMuZmlsbExpZ2h0TW9kZS5tYXAobSA9PiBtKTtcbiAgICAgIC8vIFRyeSB0byByZWNhbGwgdGhlIGN1cnJlbnQgZmxhc2ggbW9kZVxuICAgICAgaWYgKHRoaXMuZmxhc2hNb2RlKSB7XG4gICAgICAgIHRoaXMuZmxhc2hNb2RlID0gdGhpcy5mbGFzaE1vZGVzW3RoaXMuZmxhc2hNb2Rlcy5pbmRleE9mKHRoaXMuZmxhc2hNb2RlKV0gfHwgJ29mZic7XG4gICAgICAgIHRoaXMuZmxhc2hJbmRleCA9IHRoaXMuZmxhc2hNb2Rlcy5pbmRleE9mKHRoaXMuZmxhc2hNb2RlKSB8fCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mbGFzaEluZGV4ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3RvcFN0cmVhbSgpIHtcbiAgICBpZiAodGhpcy52aWRlb0VsZW1lbnQpIHtcbiAgICAgIHRoaXMudmlkZW9FbGVtZW50LnNyY09iamVjdCA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuc3RyZWFtICYmIHRoaXMuc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2godHJhY2sgPT4gdHJhY2suc3RvcCgpKTtcbiAgfVxuICBhc3luYyBjYXB0dXJlKCkge1xuICAgIGlmICh0aGlzLmhhc0ltYWdlQ2FwdHVyZSgpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwaG90byA9IGF3YWl0IHRoaXMuaW1hZ2VDYXB0dXJlLnRha2VQaG90byh7XG4gICAgICAgICAgZmlsbExpZ2h0TW9kZTogdGhpcy5mbGFzaE1vZGVzLmxlbmd0aCA+IDEgPyB0aGlzLmZsYXNoTW9kZSA6IHVuZGVmaW5lZFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgdGhpcy5mbGFzaFNjcmVlbigpO1xuICAgICAgICB0aGlzLnByb21wdEFjY2VwdChwaG90byk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byB0YWtlIHBob3RvIScsIGUpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnN0b3BTdHJlYW0oKTtcbiAgfVxuICBhc3luYyBwcm9tcHRBY2NlcHQocGhvdG8pIHtcbiAgICB0aGlzLnBob3RvID0gcGhvdG87XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBhd2FpdCB0aGlzLmdldE9yaWVudGF0aW9uKHBob3RvKTtcbiAgICBjb25zb2xlLmRlYnVnKCdHb3Qgb3JpZW50YXRpb24nLCBvcmllbnRhdGlvbik7XG4gICAgdGhpcy5waG90b09yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgaWYgKG9yaWVudGF0aW9uKSB7XG4gICAgICBzd2l0Y2ggKG9yaWVudGF0aW9uKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRoaXMucm90YXRpb24gPSAwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0aGlzLnJvdGF0aW9uID0gMTgwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICB0aGlzLnJvdGF0aW9uID0gOTA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIHRoaXMucm90YXRpb24gPSAyNzA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucGhvdG9TcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHBob3RvKTtcbiAgfVxuICBnZXRPcmllbnRhdGlvbihmaWxlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgRGF0YVZpZXcoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgIGlmICh2aWV3LmdldFVpbnQxNigwLCBmYWxzZSkgIT09IDB4RkZEOCkge1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKC0yKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsZW5ndGggPSB2aWV3LmJ5dGVMZW5ndGg7XG4gICAgICAgIGxldCBvZmZzZXQgPSAyO1xuICAgICAgICB3aGlsZSAob2Zmc2V0IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgbWFya2VyID0gdmlldy5nZXRVaW50MTYob2Zmc2V0LCBmYWxzZSk7XG4gICAgICAgICAgb2Zmc2V0ICs9IDI7XG4gICAgICAgICAgaWYgKG1hcmtlciA9PT0gMHhGRkUxKSB7XG4gICAgICAgICAgICBpZiAodmlldy5nZXRVaW50MzIob2Zmc2V0ICs9IDIsIGZhbHNlKSAhPT0gMHg0NTc4Njk2Nikge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsaXR0bGUgPSB2aWV3LmdldFVpbnQxNihvZmZzZXQgKz0gNiwgZmFsc2UpID09PSAweDQ5NDk7XG4gICAgICAgICAgICBvZmZzZXQgKz0gdmlldy5nZXRVaW50MzIob2Zmc2V0ICsgNCwgbGl0dGxlKTtcbiAgICAgICAgICAgIGNvbnN0IHRhZ3MgPSB2aWV3LmdldFVpbnQxNihvZmZzZXQsIGxpdHRsZSk7XG4gICAgICAgICAgICBvZmZzZXQgKz0gMjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFnczsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmICh2aWV3LmdldFVpbnQxNihvZmZzZXQgKyBpICogMTIsIGxpdHRsZSkgPT09IDB4MDExMikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHZpZXcuZ2V0VWludDE2KG9mZnNldCArIGkgKiAxMiArIDgsIGxpdHRsZSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICgobWFya2VyICYgMHhGRjAwKSAhPT0gMHhGRjAwKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2Zmc2V0ICs9IHZpZXcuZ2V0VWludDE2KG9mZnNldCwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSgtMSk7XG4gICAgICB9O1xuICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUuc2xpY2UoMCwgNjQgKiAxMDI0KSk7XG4gICAgfSk7XG4gIH1cbiAgcm90YXRlKCkge1xuICAgIHRoaXMuc3RvcFN0cmVhbSgpO1xuICAgIGNvbnN0IHRyYWNrID0gdGhpcy5zdHJlYW0gJiYgdGhpcy5zdHJlYW0uZ2V0VHJhY2tzKClbMF07XG4gICAgaWYgKCF0cmFjaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgYyA9IHRyYWNrLmdldENvbnN0cmFpbnRzKCk7XG4gICAgbGV0IGZhY2luZ01vZGUgPSBjLmZhY2luZ01vZGU7XG4gICAgaWYgKCFmYWNpbmdNb2RlKSB7XG4gICAgICBsZXQgYyA9IHRyYWNrLmdldENhcGFiaWxpdGllcygpO1xuICAgICAgaWYgKGMuZmFjaW5nTW9kZSkge1xuICAgICAgICBmYWNpbmdNb2RlID0gYy5mYWNpbmdNb2RlWzBdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZmFjaW5nTW9kZSA9PT0gJ2Vudmlyb25tZW50Jykge1xuICAgICAgdGhpcy5pbml0Q2FtZXJhKHtcbiAgICAgICAgdmlkZW86IHtcbiAgICAgICAgICBmYWNpbmdNb2RlOiAndXNlcidcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdENhbWVyYSh7XG4gICAgICAgIHZpZGVvOiB7XG4gICAgICAgICAgZmFjaW5nTW9kZTogJ2Vudmlyb25tZW50J1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgc2V0Rmxhc2hNb2RlKG1vZGUpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdOZXcgZmxhc2ggbW9kZTogJywgbW9kZSk7XG4gICAgdGhpcy5mbGFzaE1vZGUgPSBtb2RlO1xuICB9XG4gIGN5Y2xlRmxhc2goKSB7XG4gICAgaWYgKHRoaXMuZmxhc2hNb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmZsYXNoSW5kZXggPSAodGhpcy5mbGFzaEluZGV4ICsgMSkgJSB0aGlzLmZsYXNoTW9kZXMubGVuZ3RoO1xuICAgICAgdGhpcy5zZXRGbGFzaE1vZGUodGhpcy5mbGFzaE1vZGVzW3RoaXMuZmxhc2hJbmRleF0pO1xuICAgIH1cbiAgfVxuICBhc3luYyBmbGFzaFNjcmVlbigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIF9yZWplY3QpID0+IHtcbiAgICAgIHRoaXMuc2hvd1NodXR0ZXJPdmVybGF5ID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNob3dTaHV0dGVyT3ZlcmxheSA9IGZhbHNlO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCAxMDApO1xuICAgIH0pO1xuICB9XG4gIGljb25FeGl0KCkge1xuICAgIHJldHVybiBgZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB2ZXJzaW9uPScxLjEnIGlkPSdMYXllcl8xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4PScwcHgnIHk9JzBweCcgdmlld0JveD0nMCAwIDUxMiA1MTInIGVuYWJsZS1iYWNrZ3JvdW5kPSduZXcgMCAwIDUxMiA1MTInIHhtbDpzcGFjZT0ncHJlc2VydmUnJTNFJTNDZyBpZD0nSWNvbl81XyclM0UlM0NnJTNFJTNDcGF0aCBmaWxsPSclMjNGRkZGRkYnIGQ9J000MDIuMiwxMzRMMzc4LDEwOS44Yy0xLjYtMS42LTQuMS0xLjYtNS43LDBMMjU4LjgsMjIzLjRjLTEuNiwxLjYtNC4xLDEuNi01LjcsMEwxMzkuNiwxMDkuOCBjLTEuNi0xLjYtNC4xLTEuNi01LjcsMEwxMDkuOCwxMzRjLTEuNiwxLjYtMS42LDQuMSwwLDUuN2wxMTMuNSwxMTMuNWMxLjYsMS42LDEuNiw0LjEsMCw1LjdMMTA5LjgsMzcyLjRjLTEuNiwxLjYtMS42LDQuMSwwLDUuNyBsMjQuMSwyNC4xYzEuNiwxLjYsNC4xLDEuNiw1LjcsMGwxMTMuNS0xMTMuNWMxLjYtMS42LDQuMS0xLjYsNS43LDBsMTEzLjUsMTEzLjVjMS42LDEuNiw0LjEsMS42LDUuNywwbDI0LjEtMjQuMSBjMS42LTEuNiwxLjYtNC4xLDAtNS43TDI4OC42LDI1OC44Yy0xLjYtMS42LTEuNi00LjEsMC01LjdsMTEzLjUtMTEzLjVDNDAzLjcsMTM4LjEsNDAzLjcsMTM1LjUsNDAyLjIsMTM0eicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VgO1xuICB9XG4gIGljb25QaG90b3MoKSB7XG4gICAgcmV0dXJuIGgoXCJzdmdcIiwge1xuICAgICAgeG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG4gICAgICB3aWR0aDogJzUxMicsXG4gICAgICBoZWlnaHQ6ICc1MTInLFxuICAgICAgdmlld0JveDogJzAgMCA1MTIgNTEyJ1xuICAgIH0sIGgoXCJwYXRoXCIsIHtcbiAgICAgIGQ6ICdNNDUwLjI5LDExMkgxNDJjLTM0LDAtNjIsMjcuNTEtNjIsNjEuMzNWNDE4LjY3QzgwLDQ1Mi40OSwxMDgsNDgwLDE0Miw0ODBINDUwYzM0LDAsNjItMjYuMTgsNjItNjBWMTczLjMzQzUxMiwxMzkuNTEsNDg0LjMyLDExMiw0NTAuMjksMTEyWm0tNzcuMTUsNjEuMzRhNDYsNDYsMCwxLDEtNDYuMjgsNDZBNDYuMTksNDYuMTksMCwwLDEsMzczLjE0LDE3My4zM1ptLTIzMS41NSwyNzZjLTE3LDAtMjkuODYtMTMuNzUtMjkuODYtMzAuNjZWMzUzLjg1bDkwLjQ2LTgwLjc5YTQ2LjU0LDQ2LjU0LDAsMCwxLDYzLjQ0LDEuODNMMzI4LjI3LDMzN2wtMTEzLDExMi4zM1pNNDgwLDQxOC42N2EzMC42NywzMC42NywwLDAsMS0zMC43MSwzMC42NkgyNTlMMzc2LjA4LDMzM2E0Ni4yNCw0Ni4yNCwwLDAsMSw1OS40NC0uMTZMNDgwLDM3MC41OVonXG4gICAgfSksIGgoXCJwYXRoXCIsIHtcbiAgICAgIGQ6ICdNMzg0LDMySDY0QTY0LDY0LDAsMCwwLDAsOTZWMzUyYTY0LjExLDY0LjExLDAsMCwwLDQ4LDYyVjE1MmE3Miw3MiwwLDAsMSw3Mi03Mkg0NDZBNjQuMTEsNjQuMTEsMCwwLDAsMzg0LDMyWidcbiAgICB9KSk7XG4gIH1cbiAgaWNvbkNvbmZpcm0oKSB7XG4gICAgcmV0dXJuIGBkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHZlcnNpb249JzEuMScgaWQ9J0xheWVyXzEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHg9JzBweCcgeT0nMHB4JyB2aWV3Qm94PScwIDAgNTEyIDUxMicgZW5hYmxlLWJhY2tncm91bmQ9J25ldyAwIDAgNTEyIDUxMicgeG1sOnNwYWNlPSdwcmVzZXJ2ZSclM0UlM0NjaXJjbGUgZmlsbD0nJTIzMkNEODY1JyBjeD0nMjU2JyBjeT0nMjU2JyByPScyNTYnLyUzRSUzQ2cgaWQ9J0ljb25fMV8nJTNFJTNDZyUzRSUzQ2clM0UlM0NwYXRoIGZpbGw9JyUyM0ZGRkZGRicgZD0nTTIwOCwzMDEuNGwtNTUuNC01NS41Yy0xLjUtMS41LTQtMS42LTUuNi0wLjFsLTIzLjQsMjIuM2MtMS42LDEuNi0xLjcsNC4xLTAuMSw1LjdsODEuNiw4MS40IGMzLjEsMy4xLDguMiwzLjEsMTEuMywwbDE3MS44LTE3MS43YzEuNi0xLjYsMS42LTQuMi0wLjEtNS43bC0yMy40LTIyLjNjLTEuNi0xLjUtNC4xLTEuNS01LjYsMC4xTDIxMy43LDMwMS40IEMyMTIuMSwzMDMsMjA5LjYsMzAzLDIwOCwzMDEuNHonLyUzRSUzQy9nJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VgO1xuICB9XG4gIGljb25SZXZlcnNlQ2FtZXJhKCkge1xuICAgIHJldHVybiBgZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB2ZXJzaW9uPScxLjEnIGlkPSdMYXllcl8xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4PScwcHgnIHk9JzBweCcgdmlld0JveD0nMCAwIDUxMiA1MTInIGVuYWJsZS1iYWNrZ3JvdW5kPSduZXcgMCAwIDUxMiA1MTInIHhtbDpzcGFjZT0ncHJlc2VydmUnJTNFJTNDZyUzRSUzQ3BhdGggZmlsbD0nJTIzRkZGRkZGJyBkPSdNMzUyLDBIMTYwQzcyLDAsMCw3MiwwLDE2MHYxOTJjMCw4OCw3MiwxNjAsMTYwLDE2MGgxOTJjODgsMCwxNjAtNzIsMTYwLTE2MFYxNjBDNTEyLDcyLDQ0MCwwLDM1MiwweiBNMzU2LjcsMzY1LjhsLTMuNywzLjNjLTI3LDIzLjItNjEuNCwzNS45LTk2LjgsMzUuOWMtNzIuNCwwLTEzNS44LTU0LjctMTQ3LTEyNS42Yy0wLjMtMS45LTItMy4zLTMuOS0zLjNINjQgYy0zLjMsMC01LjItMy44LTMuMi02LjRsNjEuMS04MS40YzEuNi0yLjEsNC43LTIuMSw2LjQtMC4xbDYzLjMsODEuNGMyLDIuNiwwLjIsNi41LTMuMiw2LjVoLTQwLjZjLTIuNSwwLTQuNSwyLjQtMy45LDQuOCBjMTEuNSw1MS41LDU5LjIsOTAuNiwxMTIuNCw5MC42YzI2LjQsMCw1MS44LTkuNyw3My43LTI3LjlsMy4xLTIuNWMxLjYtMS4zLDMuOS0xLjEsNS4zLDAuM2wxOC41LDE4LjYgQzM1OC41LDM2MS42LDM1OC40LDM2NC4zLDM1Ni43LDM2NS44eiBNNDUxLjQsMjQ1LjZsLTYxLDgzLjVjLTEuNiwyLjItNC44LDIuMi02LjQsMC4xbC02My4zLTgzLjNjLTItMi42LTAuMS02LjQsMy4yLTYuNGg0MC44IGMyLjUsMCw0LjQtMi4zLDMuOS00LjhjLTUuMS0yNC4yLTE3LjgtNDYuNS0zNi41LTYzLjdjLTIxLjItMTkuNC00OC4yLTMwLjEtNzYtMzAuMWMtMjYuNSwwLTUyLjYsOS43LTczLjcsMjcuM2wtMy4xLDIuNSBjLTEuNiwxLjMtMy45LDEuMi01LjQtMC4zbC0xOC41LTE4LjVjLTEuNi0xLjYtMS41LTQuMywwLjItNS45bDMuNS0zLjFjMjctMjMuMiw2MS40LTM1LjksOTYuOC0zNS45YzM4LDAsNzMuOSwxMy43LDEwMS4yLDM4LjcgYzIzLjIsMjEuMSw0MC4zLDU1LjIsNDUuNyw5MC4xYzAuMywxLjksMS45LDMuNCwzLjksMy40aDQxLjNDNDUxLjQsMjM5LjIsNDUzLjMsMjQzLDQ1MS40LDI0NS42eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFYDtcbiAgfVxuICBpY29uUmV0YWtlKCkge1xuICAgIHJldHVybiBgZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB2ZXJzaW9uPScxLjEnIGlkPSdMYXllcl8xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4PScwcHgnIHk9JzBweCcgdmlld0JveD0nMCAwIDUxMiA1MTInIGVuYWJsZS1iYWNrZ3JvdW5kPSduZXcgMCAwIDUxMiA1MTInIHhtbDpzcGFjZT0ncHJlc2VydmUnJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzcyN0E4NycgY3g9JzI1NicgY3k9JzI1Nicgcj0nMjU2Jy8lM0UlM0NnIGlkPSdJY29uXzVfJyUzRSUzQ2clM0UlM0NwYXRoIGZpbGw9JyUyM0ZGRkZGRicgZD0nTTM5NC4yLDE0MkwzNzAsMTE3LjhjLTEuNi0xLjYtNC4xLTEuNi01LjcsMEwyNTguOCwyMjMuNGMtMS42LDEuNi00LjEsMS42LTUuNywwTDE0Ny42LDExNy44IGMtMS42LTEuNi00LjEtMS42LTUuNywwTDExNy44LDE0MmMtMS42LDEuNi0xLjYsNC4xLDAsNS43bDEwNS41LDEwNS41YzEuNiwxLjYsMS42LDQuMSwwLDUuN0wxMTcuOCwzNjQuNGMtMS42LDEuNi0xLjYsNC4xLDAsNS43IGwyNC4xLDI0LjFjMS42LDEuNiw0LjEsMS42LDUuNywwbDEwNS41LTEwNS41YzEuNi0xLjYsNC4xLTEuNiw1LjcsMGwxMDUuNSwxMDUuNWMxLjYsMS42LDQuMSwxLjYsNS43LDBsMjQuMS0yNC4xIGMxLjYtMS42LDEuNi00LjEsMC01LjdMMjg4LjYsMjU4LjhjLTEuNi0xLjYtMS42LTQuMSwwLTUuN2wxMDUuNS0xMDUuNUMzOTUuNywxNDYuMSwzOTUuNywxNDMuNSwzOTQuMiwxNDJ6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRWA7XG4gIH1cbiAgaWNvbkZsYXNoT2ZmKCkge1xuICAgIHJldHVybiBgZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB2ZXJzaW9uPScxLjEnIGlkPSdMYXllcl8xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4PScwcHgnIHk9JzBweCcgdmlld0JveD0nMCAwIDUxMiA1MTInIHN0eWxlPSdlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7JyB4bWw6c3BhY2U9J3ByZXNlcnZlJyUzRSUzQ3N0eWxlIHR5cGU9J3RleHQvY3NzJyUzRSAuc3QwJTdCZmlsbDolMjNGRkZGRkY7JTdEJTBBJTNDL3N0eWxlJTNFJTNDZyUzRSUzQ3BhdGggY2xhc3M9J3N0MCcgZD0nTTQ5OCw0ODMuN0w0Mi4zLDI4TDE0LDU2LjRsMTQ5LjgsMTQ5LjhMOTEsMjkzLjhjLTIuNSwzLTAuMSw3LjIsMy45LDcuMmgxNDMuOWMxLjYsMCwyLjcsMS4zLDIuNCwyLjcgTDE5Ny42LDUwN2MtMSw0LjQsNS44LDYuOSw4LjksMy4ybDExOC42LTE0Mi44TDQ2OS42LDUxMkw0OTgsNDgzLjd6Jy8lM0UlM0NwYXRoIGNsYXNzPSdzdDAnIGQ9J000NDksMjE4LjJjMi41LTMsMC4xLTcuMi0zLjktNy4ySDMwMS4yYy0xLjYsMC0yLjctMS4zLTIuNC0yLjdMMzQyLjQsNWMxLTQuNC01LjgtNi45LTguOS0zLjJMMjE0LjksMTQ0LjYgbDE2MS4zLDE2MS4zTDQ0OSwyMTguMnonLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRWA7XG4gIH1cbiAgaWNvbkZsYXNoT24oKSB7XG4gICAgcmV0dXJuIGBkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHZlcnNpb249JzEuMScgaWQ9J0xheWVyXzEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHg9JzBweCcgeT0nMHB4JyB2aWV3Qm94PScwIDAgNTEyIDUxMicgc3R5bGU9J2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsnIHhtbDpzcGFjZT0ncHJlc2VydmUnJTNFJTNDc3R5bGUgdHlwZT0ndGV4dC9jc3MnJTNFIC5zdDAlN0JmaWxsOiUyM0ZGRkZGRjslN0QlMEElM0Mvc3R5bGUlM0UlM0NwYXRoIGNsYXNzPSdzdDAnIGQ9J00yODcuMiwyMTFjLTEuNiwwLTIuNy0xLjMtMi40LTIuN0wzMjguNCw1YzEtNC40LTUuOC02LjktOC45LTMuMkw3NywyOTMuOGMtMi41LDMtMC4xLDcuMiwzLjksNy4yaDE0My45IGMxLjYsMCwyLjcsMS4zLDIuNCwyLjdMMTgzLjYsNTA3Yy0xLDQuNCw1LjgsNi45LDguOSwzLjJsMjQyLjUtMjkyYzIuNS0zLDAuMS03LjItMy45LTcuMkwyODcuMiwyMTFMMjg3LjIsMjExeicvJTNFJTNDL3N2ZyUzRWA7XG4gIH1cbiAgaWNvbkZsYXNoQXV0bygpIHtcbiAgICByZXR1cm4gYGRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgdmVyc2lvbj0nMS4xJyBpZD0nTGF5ZXJfMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeD0nMHB4JyB5PScwcHgnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyBzdHlsZT0nZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOycgeG1sOnNwYWNlPSdwcmVzZXJ2ZSclM0UlM0NzdHlsZSB0eXBlPSd0ZXh0L2NzcyclM0UgLnN0MCU3QmZpbGw6JTIzRkZGRkZGOyU3RCUwQSUzQy9zdHlsZSUzRSUzQ3BhdGggY2xhc3M9J3N0MCcgZD0nTTI4Ny4yLDIxMWMtMS42LDAtMi43LTEuMy0yLjQtMi43TDMyOC40LDVjMS00LjQtNS44LTYuOS04LjktMy4yTDc3LDI5My44Yy0yLjUsMy0wLjEsNy4yLDMuOSw3LjJoMTQzLjkgYzEuNiwwLDIuNywxLjMsMi40LDIuN0wxODMuNiw1MDdjLTEsNC40LDUuOCw2LjksOC45LDMuMmwyNDIuNS0yOTJjMi41LTMsMC4xLTcuMi0zLjktNy4yTDI4Ny4yLDIxMUwyODcuMiwyMTF6Jy8lM0UlM0NnJTNFJTNDcGF0aCBjbGFzcz0nc3QwJyBkPSdNMzIxLjMsMTg2bDc0LTE4Nkg0MzhsNzQsMTg2aC00My41bC0xMS45LTMyLjVoLTgwLjlsLTEyLDMyLjVIMzIxLjN6IE00MTUuOCw0Ny45bC0yNy4yLDcwLjdoNTQuOWwtMjcuMi03MC43IEg0MTUuOHonLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRWA7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNvbnN0IGFjY2VwdFN0eWxlcyA9IHsgdHJhbnNmb3JtOiBgcm90YXRlKCR7LXRoaXMucm90YXRpb259ZGVnKWAgfTtcbiAgICBjb25zdCBhY2NlcHRTdHlsZXMgPSB7fTtcbiAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJjYW1lcmEtd3JhcHBlclwiXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJjYW1lcmEtaGVhZGVyXCJcbiAgICB9LCBoKFwic2VjdGlvblwiLCB7XG4gICAgICBjbGFzczogXCJpdGVtc1wiXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJpdGVtIGNsb3NlXCIsXG4gICAgICBvbkNsaWNrOiBlID0+IHRoaXMuaGFuZGxlQ2xvc2UoZSlcbiAgICB9LCBoKFwiaW1nXCIsIHtcbiAgICAgIHNyYzogdGhpcy5pY29uRXhpdCgpXG4gICAgfSkpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcIml0ZW0gZmxhc2hcIixcbiAgICAgIG9uQ2xpY2s6IGUgPT4gdGhpcy5oYW5kbGVGbGFzaENsaWNrKGUpXG4gICAgfSwgdGhpcy5mbGFzaE1vZGVzLmxlbmd0aCA+IDAgJiYgaChcImRpdlwiLCBudWxsLCB0aGlzLmZsYXNoTW9kZSA9PSAnb2ZmJyA/IGgoXCJpbWdcIiwge1xuICAgICAgc3JjOiB0aGlzLmljb25GbGFzaE9mZigpXG4gICAgfSkgOiAnJywgdGhpcy5mbGFzaE1vZGUgPT0gJ2F1dG8nID8gaChcImltZ1wiLCB7XG4gICAgICBzcmM6IHRoaXMuaWNvbkZsYXNoQXV0bygpXG4gICAgfSkgOiAnJywgdGhpcy5mbGFzaE1vZGUgPT0gJ2ZsYXNoJyA/IGgoXCJpbWdcIiwge1xuICAgICAgc3JjOiB0aGlzLmljb25GbGFzaE9uKClcbiAgICB9KSA6ICcnKSkpKSwgKHRoaXMuaGFzQ2FtZXJhID09PSBmYWxzZSB8fCAhIXRoaXMuZGV2aWNlRXJyb3IpICYmIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwibm8tZGV2aWNlXCJcbiAgICB9LCBoKFwiaDJcIiwgbnVsbCwgdGhpcy5ub0RldmljZXNUZXh0KSwgaChcImxhYmVsXCIsIHtcbiAgICAgIGh0bWxGb3I6IFwiX3B3YS1lbGVtZW50cy1jYW1lcmEtaW5wdXRcIlxuICAgIH0sIHRoaXMubm9EZXZpY2VzQnV0dG9uVGV4dCksIGgoXCJpbnB1dFwiLCB7XG4gICAgICB0eXBlOiBcImZpbGVcIixcbiAgICAgIGlkOiBcIl9wd2EtZWxlbWVudHMtY2FtZXJhLWlucHV0XCIsXG4gICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVGaWxlSW5wdXRDaGFuZ2UsXG4gICAgICBhY2NlcHQ6IFwiaW1hZ2UvKlwiLFxuICAgICAgY2xhc3M6IFwic2VsZWN0LWZpbGUtYnV0dG9uXCJcbiAgICB9KSksIHRoaXMucGhvdG9TcmMgPyBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImFjY2VwdFwiXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJhY2NlcHQtaW1hZ2VcIixcbiAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7dGhpcy5waG90b1NyY30pYFxuICAgICAgfSwgYWNjZXB0U3R5bGVzKVxuICAgIH0pKSA6IGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiY2FtZXJhLXZpZGVvXCJcbiAgICB9LCB0aGlzLnNob3dTaHV0dGVyT3ZlcmxheSAmJiBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcInNodXR0ZXItb3ZlcmxheVwiXG4gICAgfSksIHRoaXMuaGFzSW1hZ2VDYXB0dXJlKCkgPyBoKFwidmlkZW9cIiwge1xuICAgICAgcmVmOiBlbCA9PiB0aGlzLnZpZGVvRWxlbWVudCA9IGVsLFxuICAgICAgb25Mb2FkZWRNZXRhRGF0YTogdGhpcy5oYW5kbGVWaWRlb01ldGFkYXRhLFxuICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICBwbGF5c2lubGluZTogdHJ1ZVxuICAgIH0pIDogaChcImNhbnZhc1wiLCB7XG4gICAgICByZWY6IGVsID0+IHRoaXMuY2FudmFzRWxlbWVudCA9IGVsLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIlxuICAgIH0pLCBoKFwiY2FudmFzXCIsIHtcbiAgICAgIGNsYXNzOiBcIm9mZnNjcmVlbi1pbWFnZS1yZW5kZXJcIixcbiAgICAgIHJlZjogZSA9PiB0aGlzLm9mZnNjcmVlbkNhbnZhcyA9IGUsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgfSkpLCB0aGlzLmhhc0NhbWVyYSAmJiBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImNhbWVyYS1mb290ZXJcIlxuICAgIH0sICF0aGlzLnBob3RvID8gWyF0aGlzLmhpZGVQaWNrZXIgJiYgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJwaWNrLWltYWdlXCIsXG4gICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZVBpY2tGaWxlXG4gICAgfSwgaChcImxhYmVsXCIsIHtcbiAgICAgIGh0bWxGb3I6IFwiX3B3YS1lbGVtZW50cy1maWxlLXBpY2tcIlxuICAgIH0sIHRoaXMuaWNvblBob3RvcygpKSwgaChcImlucHV0XCIsIHtcbiAgICAgIHR5cGU6IFwiZmlsZVwiLFxuICAgICAgaWQ6IFwiX3B3YS1lbGVtZW50cy1maWxlLXBpY2tcIixcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUZpbGVJbnB1dENoYW5nZSxcbiAgICAgIGFjY2VwdDogXCJpbWFnZS8qXCIsXG4gICAgICBjbGFzczogXCJwaWNrLWltYWdlLWJ1dHRvblwiXG4gICAgfSkpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcInNodXR0ZXJcIixcbiAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlU2h1dHRlckNsaWNrXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJzaHV0dGVyLWJ1dHRvblwiXG4gICAgfSkpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcInJvdGF0ZVwiLFxuICAgICAgb25DbGljazogdGhpcy5oYW5kbGVSb3RhdGVDbGlja1xuICAgIH0sIGgoXCJpbWdcIiwge1xuICAgICAgc3JjOiB0aGlzLmljb25SZXZlcnNlQ2FtZXJhKClcbiAgICB9KSldIDogaChcInNlY3Rpb25cIiwge1xuICAgICAgY2xhc3M6IFwiaXRlbXNcIlxuICAgIH0sIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiaXRlbSBhY2NlcHQtY2FuY2VsXCIsXG4gICAgICBvbkNsaWNrOiBlID0+IHRoaXMuaGFuZGxlQ2FuY2VsUGhvdG8oZSlcbiAgICB9LCBoKFwiaW1nXCIsIHtcbiAgICAgIHNyYzogdGhpcy5pY29uUmV0YWtlKClcbiAgICB9KSksIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiaXRlbSBhY2NlcHQtdXNlXCIsXG4gICAgICBvbkNsaWNrOiBlID0+IHRoaXMuaGFuZGxlQWNjZXB0UGhvdG8oZSlcbiAgICB9LCBoKFwiaW1nXCIsIHtcbiAgICAgIHNyYzogdGhpcy5pY29uQ29uZmlybSgpXG4gICAgfSkpKSkpO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHtcbiAgICByZXR1cm4gW1wiaWNvbnNcIl07XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG59O1xuQ2FtZXJhUFdBLnN0eWxlID0gY2FtZXJhQ3NzO1xuZXhwb3J0IHsgQ2FtZXJhUFdBIGFzIHB3YV9jYW1lcmEgfTsi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
