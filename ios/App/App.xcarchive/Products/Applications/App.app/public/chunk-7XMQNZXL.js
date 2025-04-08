import {
  AppCheckInstances,
  AuthInstances,
  AuthService,
  Component,
  FirebaseApp,
  FirebaseApps,
  FirebaseError,
  Firestore,
  SDK_VERSION,
  VERSION,
  _getProvider,
  _isFirebaseServerApp,
  _registerComponent,
  collection2 as collection,
  collectionData,
  createMockUserToken,
  deleteDoc2 as deleteDoc,
  doc2 as doc,
  docData,
  getApp,
  getDefaultEmulatorHostnameAndPort,
  getModularInstance,
  registerVersion,
  setDoc2 as setDoc,
  updateDoc2 as updateDoc,
  ɵAngularFireSchedulers,
  ɵgetAllInstancesOf,
  ɵgetDefaultInstanceOf,
  ɵzoneWrap
} from "./chunk-AMO7VPPH.js";
import {
  InjectionToken,
  Injector,
  NgModule,
  NgZone,
  Observable,
  Optional,
  concatMap,
  distinct,
  from,
  inject,
  makeEnvironmentProviders,
  map,
  setClassMetadata,
  timer,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-PZUQX53K.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@firebase/storage/dist/index.esm2017.js
var DEFAULT_HOST = "firebasestorage.googleapis.com";
var CONFIG_STORAGE_BUCKET_KEY = "storageBucket";
var DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1e3;
var DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1e3;
var DEFAULT_MIN_SLEEP_TIME_MILLIS = 1e3;
var StorageError = class _StorageError extends FirebaseError {
  /**
   * @param code - A `StorageErrorCode` string to be prefixed with 'storage/' and
   *  added to the end of the message.
   * @param message  - Error message.
   * @param status_ - Corresponding HTTP Status Code
   */
  constructor(code, message, status_ = 0) {
    super(prependCode(code), `Firebase Storage: ${message} (${prependCode(code)})`);
    this.status_ = status_;
    this.customData = {
      serverResponse: null
    };
    this._baseMessage = this.message;
    Object.setPrototypeOf(this, _StorageError.prototype);
  }
  get status() {
    return this.status_;
  }
  set status(status) {
    this.status_ = status;
  }
  /**
   * Compares a `StorageErrorCode` against this error's code, filtering out the prefix.
   */
  _codeEquals(code) {
    return prependCode(code) === this.code;
  }
  /**
   * Optional response message that was added by the server.
   */
  get serverResponse() {
    return this.customData.serverResponse;
  }
  set serverResponse(serverResponse) {
    this.customData.serverResponse = serverResponse;
    if (this.customData.serverResponse) {
      this.message = `${this._baseMessage}
${this.customData.serverResponse}`;
    } else {
      this.message = this._baseMessage;
    }
  }
};
var StorageErrorCode;
(function(StorageErrorCode2) {
  StorageErrorCode2["UNKNOWN"] = "unknown";
  StorageErrorCode2["OBJECT_NOT_FOUND"] = "object-not-found";
  StorageErrorCode2["BUCKET_NOT_FOUND"] = "bucket-not-found";
  StorageErrorCode2["PROJECT_NOT_FOUND"] = "project-not-found";
  StorageErrorCode2["QUOTA_EXCEEDED"] = "quota-exceeded";
  StorageErrorCode2["UNAUTHENTICATED"] = "unauthenticated";
  StorageErrorCode2["UNAUTHORIZED"] = "unauthorized";
  StorageErrorCode2["UNAUTHORIZED_APP"] = "unauthorized-app";
  StorageErrorCode2["RETRY_LIMIT_EXCEEDED"] = "retry-limit-exceeded";
  StorageErrorCode2["INVALID_CHECKSUM"] = "invalid-checksum";
  StorageErrorCode2["CANCELED"] = "canceled";
  StorageErrorCode2["INVALID_EVENT_NAME"] = "invalid-event-name";
  StorageErrorCode2["INVALID_URL"] = "invalid-url";
  StorageErrorCode2["INVALID_DEFAULT_BUCKET"] = "invalid-default-bucket";
  StorageErrorCode2["NO_DEFAULT_BUCKET"] = "no-default-bucket";
  StorageErrorCode2["CANNOT_SLICE_BLOB"] = "cannot-slice-blob";
  StorageErrorCode2["SERVER_FILE_WRONG_SIZE"] = "server-file-wrong-size";
  StorageErrorCode2["NO_DOWNLOAD_URL"] = "no-download-url";
  StorageErrorCode2["INVALID_ARGUMENT"] = "invalid-argument";
  StorageErrorCode2["INVALID_ARGUMENT_COUNT"] = "invalid-argument-count";
  StorageErrorCode2["APP_DELETED"] = "app-deleted";
  StorageErrorCode2["INVALID_ROOT_OPERATION"] = "invalid-root-operation";
  StorageErrorCode2["INVALID_FORMAT"] = "invalid-format";
  StorageErrorCode2["INTERNAL_ERROR"] = "internal-error";
  StorageErrorCode2["UNSUPPORTED_ENVIRONMENT"] = "unsupported-environment";
})(StorageErrorCode || (StorageErrorCode = {}));
function prependCode(code) {
  return "storage/" + code;
}
function unknown() {
  const message = "An unknown error occurred, please check the error payload for server response.";
  return new StorageError(StorageErrorCode.UNKNOWN, message);
}
function objectNotFound(path) {
  return new StorageError(StorageErrorCode.OBJECT_NOT_FOUND, "Object '" + path + "' does not exist.");
}
function quotaExceeded(bucket) {
  return new StorageError(StorageErrorCode.QUOTA_EXCEEDED, "Quota for bucket '" + bucket + "' exceeded, please view quota on https://firebase.google.com/pricing/.");
}
function unauthenticated() {
  const message = "User is not authenticated, please authenticate using Firebase Authentication and try again.";
  return new StorageError(StorageErrorCode.UNAUTHENTICATED, message);
}
function unauthorizedApp() {
  return new StorageError(StorageErrorCode.UNAUTHORIZED_APP, "This app does not have permission to access Firebase Storage on this project.");
}
function unauthorized(path) {
  return new StorageError(StorageErrorCode.UNAUTHORIZED, "User does not have permission to access '" + path + "'.");
}
function retryLimitExceeded() {
  return new StorageError(StorageErrorCode.RETRY_LIMIT_EXCEEDED, "Max retry time for operation exceeded, please try again.");
}
function canceled() {
  return new StorageError(StorageErrorCode.CANCELED, "User canceled the upload/download.");
}
function invalidUrl(url) {
  return new StorageError(StorageErrorCode.INVALID_URL, "Invalid URL '" + url + "'.");
}
function invalidDefaultBucket(bucket) {
  return new StorageError(StorageErrorCode.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + bucket + "'.");
}
function noDefaultBucket() {
  return new StorageError(StorageErrorCode.NO_DEFAULT_BUCKET, "No default bucket found. Did you set the '" + CONFIG_STORAGE_BUCKET_KEY + "' property when initializing the app?");
}
function cannotSliceBlob() {
  return new StorageError(StorageErrorCode.CANNOT_SLICE_BLOB, "Cannot slice blob for upload. Please retry the upload.");
}
function serverFileWrongSize() {
  return new StorageError(StorageErrorCode.SERVER_FILE_WRONG_SIZE, "Server recorded incorrect upload file size, please retry the upload.");
}
function noDownloadURL() {
  return new StorageError(StorageErrorCode.NO_DOWNLOAD_URL, "The given file does not have any download URLs.");
}
function missingPolyFill(polyFill) {
  return new StorageError(StorageErrorCode.UNSUPPORTED_ENVIRONMENT, `${polyFill} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);
}
function invalidArgument(message) {
  return new StorageError(StorageErrorCode.INVALID_ARGUMENT, message);
}
function appDeleted() {
  return new StorageError(StorageErrorCode.APP_DELETED, "The Firebase app was deleted.");
}
function invalidRootOperation(name2) {
  return new StorageError(StorageErrorCode.INVALID_ROOT_OPERATION, "The operation '" + name2 + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");
}
function invalidFormat(format, message) {
  return new StorageError(StorageErrorCode.INVALID_FORMAT, "String does not match format '" + format + "': " + message);
}
function internalError(message) {
  throw new StorageError(StorageErrorCode.INTERNAL_ERROR, "Internal error: " + message);
}
var Location = class _Location {
  constructor(bucket, path) {
    this.bucket = bucket;
    this.path_ = path;
  }
  get path() {
    return this.path_;
  }
  get isRoot() {
    return this.path.length === 0;
  }
  fullServerUrl() {
    const encode = encodeURIComponent;
    return "/b/" + encode(this.bucket) + "/o/" + encode(this.path);
  }
  bucketOnlyServerUrl() {
    const encode = encodeURIComponent;
    return "/b/" + encode(this.bucket) + "/o";
  }
  static makeFromBucketSpec(bucketString, host) {
    let bucketLocation;
    try {
      bucketLocation = _Location.makeFromUrl(bucketString, host);
    } catch (e) {
      return new _Location(bucketString, "");
    }
    if (bucketLocation.path === "") {
      return bucketLocation;
    } else {
      throw invalidDefaultBucket(bucketString);
    }
  }
  static makeFromUrl(url, host) {
    let location = null;
    const bucketDomain = "([A-Za-z0-9.\\-_]+)";
    function gsModify(loc) {
      if (loc.path.charAt(loc.path.length - 1) === "/") {
        loc.path_ = loc.path_.slice(0, -1);
      }
    }
    const gsPath = "(/(.*))?$";
    const gsRegex = new RegExp("^gs://" + bucketDomain + gsPath, "i");
    const gsIndices = {
      bucket: 1,
      path: 3
    };
    function httpModify(loc) {
      loc.path_ = decodeURIComponent(loc.path);
    }
    const version2 = "v[A-Za-z0-9_]+";
    const firebaseStorageHost = host.replace(/[.]/g, "\\.");
    const firebaseStoragePath = "(/([^?#]*).*)?$";
    const firebaseStorageRegExp = new RegExp(`^https?://${firebaseStorageHost}/${version2}/b/${bucketDomain}/o${firebaseStoragePath}`, "i");
    const firebaseStorageIndices = {
      bucket: 1,
      path: 3
    };
    const cloudStorageHost = host === DEFAULT_HOST ? "(?:storage.googleapis.com|storage.cloud.google.com)" : host;
    const cloudStoragePath = "([^?#]*)";
    const cloudStorageRegExp = new RegExp(`^https?://${cloudStorageHost}/${bucketDomain}/${cloudStoragePath}`, "i");
    const cloudStorageIndices = {
      bucket: 1,
      path: 2
    };
    const groups = [{
      regex: gsRegex,
      indices: gsIndices,
      postModify: gsModify
    }, {
      regex: firebaseStorageRegExp,
      indices: firebaseStorageIndices,
      postModify: httpModify
    }, {
      regex: cloudStorageRegExp,
      indices: cloudStorageIndices,
      postModify: httpModify
    }];
    for (let i = 0; i < groups.length; i++) {
      const group = groups[i];
      const captures = group.regex.exec(url);
      if (captures) {
        const bucketValue = captures[group.indices.bucket];
        let pathValue = captures[group.indices.path];
        if (!pathValue) {
          pathValue = "";
        }
        location = new _Location(bucketValue, pathValue);
        group.postModify(location);
        break;
      }
    }
    if (location == null) {
      throw invalidUrl(url);
    }
    return location;
  }
};
var FailRequest = class {
  constructor(error) {
    this.promise_ = Promise.reject(error);
  }
  /** @inheritDoc */
  getPromise() {
    return this.promise_;
  }
  /** @inheritDoc */
  cancel(_appDelete = false) {
  }
};
function start(doRequest, backoffCompleteCb, timeout) {
  let waitSeconds = 1;
  let retryTimeoutId = null;
  let globalTimeoutId = null;
  let hitTimeout = false;
  let cancelState = 0;
  function canceled2() {
    return cancelState === 2;
  }
  let triggeredCallback = false;
  function triggerCallback(...args) {
    if (!triggeredCallback) {
      triggeredCallback = true;
      backoffCompleteCb.apply(null, args);
    }
  }
  function callWithDelay(millis) {
    retryTimeoutId = setTimeout(() => {
      retryTimeoutId = null;
      doRequest(responseHandler, canceled2());
    }, millis);
  }
  function clearGlobalTimeout() {
    if (globalTimeoutId) {
      clearTimeout(globalTimeoutId);
    }
  }
  function responseHandler(success, ...args) {
    if (triggeredCallback) {
      clearGlobalTimeout();
      return;
    }
    if (success) {
      clearGlobalTimeout();
      triggerCallback.call(null, success, ...args);
      return;
    }
    const mustStop = canceled2() || hitTimeout;
    if (mustStop) {
      clearGlobalTimeout();
      triggerCallback.call(null, success, ...args);
      return;
    }
    if (waitSeconds < 64) {
      waitSeconds *= 2;
    }
    let waitMillis;
    if (cancelState === 1) {
      cancelState = 2;
      waitMillis = 0;
    } else {
      waitMillis = (waitSeconds + Math.random()) * 1e3;
    }
    callWithDelay(waitMillis);
  }
  let stopped = false;
  function stop2(wasTimeout) {
    if (stopped) {
      return;
    }
    stopped = true;
    clearGlobalTimeout();
    if (triggeredCallback) {
      return;
    }
    if (retryTimeoutId !== null) {
      if (!wasTimeout) {
        cancelState = 2;
      }
      clearTimeout(retryTimeoutId);
      callWithDelay(0);
    } else {
      if (!wasTimeout) {
        cancelState = 1;
      }
    }
  }
  callWithDelay(0);
  globalTimeoutId = setTimeout(() => {
    hitTimeout = true;
    stop2(true);
  }, timeout);
  return stop2;
}
function stop(id) {
  id(false);
}
function isJustDef(p) {
  return p !== void 0;
}
function isFunction(p) {
  return typeof p === "function";
}
function isNonArrayObject(p) {
  return typeof p === "object" && !Array.isArray(p);
}
function isString(p) {
  return typeof p === "string" || p instanceof String;
}
function isNativeBlob(p) {
  return isNativeBlobDefined() && p instanceof Blob;
}
function isNativeBlobDefined() {
  return typeof Blob !== "undefined";
}
function validateNumber(argument, minValue, maxValue, value) {
  if (value < minValue) {
    throw invalidArgument(`Invalid value for '${argument}'. Expected ${minValue} or greater.`);
  }
  if (value > maxValue) {
    throw invalidArgument(`Invalid value for '${argument}'. Expected ${maxValue} or less.`);
  }
}
function makeUrl(urlPart, host, protocol) {
  let origin = host;
  if (protocol == null) {
    origin = `https://${host}`;
  }
  return `${protocol}://${origin}/v0${urlPart}`;
}
function makeQueryString(params) {
  const encode = encodeURIComponent;
  let queryPart = "?";
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const nextPart = encode(key) + "=" + encode(params[key]);
      queryPart = queryPart + nextPart + "&";
    }
  }
  queryPart = queryPart.slice(0, -1);
  return queryPart;
}
var ErrorCode;
(function(ErrorCode2) {
  ErrorCode2[ErrorCode2["NO_ERROR"] = 0] = "NO_ERROR";
  ErrorCode2[ErrorCode2["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
  ErrorCode2[ErrorCode2["ABORT"] = 2] = "ABORT";
})(ErrorCode || (ErrorCode = {}));
function isRetryStatusCode(status, additionalRetryCodes) {
  const isFiveHundredCode = status >= 500 && status < 600;
  const extraRetryCodes = [
    // Request Timeout: web server didn't receive full request in time.
    408,
    // Too Many Requests: you're getting rate-limited, basically.
    429
  ];
  const isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
  const isAdditionalRetryCode = additionalRetryCodes.indexOf(status) !== -1;
  return isFiveHundredCode || isExtraRetryCode || isAdditionalRetryCode;
}
var NetworkRequest = class {
  constructor(url_, method_, headers_, body_, successCodes_, additionalRetryCodes_, callback_, errorCallback_, timeout_, progressCallback_, connectionFactory_, retry = true) {
    this.url_ = url_;
    this.method_ = method_;
    this.headers_ = headers_;
    this.body_ = body_;
    this.successCodes_ = successCodes_;
    this.additionalRetryCodes_ = additionalRetryCodes_;
    this.callback_ = callback_;
    this.errorCallback_ = errorCallback_;
    this.timeout_ = timeout_;
    this.progressCallback_ = progressCallback_;
    this.connectionFactory_ = connectionFactory_;
    this.retry = retry;
    this.pendingConnection_ = null;
    this.backoffId_ = null;
    this.canceled_ = false;
    this.appDelete_ = false;
    this.promise_ = new Promise((resolve, reject) => {
      this.resolve_ = resolve;
      this.reject_ = reject;
      this.start_();
    });
  }
  /**
   * Actually starts the retry loop.
   */
  start_() {
    const doTheRequest = (backoffCallback, canceled2) => {
      if (canceled2) {
        backoffCallback(false, new RequestEndStatus(false, null, true));
        return;
      }
      const connection = this.connectionFactory_();
      this.pendingConnection_ = connection;
      const progressListener = (progressEvent) => {
        const loaded = progressEvent.loaded;
        const total = progressEvent.lengthComputable ? progressEvent.total : -1;
        if (this.progressCallback_ !== null) {
          this.progressCallback_(loaded, total);
        }
      };
      if (this.progressCallback_ !== null) {
        connection.addUploadProgressListener(progressListener);
      }
      connection.send(this.url_, this.method_, this.body_, this.headers_).then(() => {
        if (this.progressCallback_ !== null) {
          connection.removeUploadProgressListener(progressListener);
        }
        this.pendingConnection_ = null;
        const hitServer = connection.getErrorCode() === ErrorCode.NO_ERROR;
        const status = connection.getStatus();
        if (!hitServer || isRetryStatusCode(status, this.additionalRetryCodes_) && this.retry) {
          const wasCanceled = connection.getErrorCode() === ErrorCode.ABORT;
          backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
          return;
        }
        const successCode = this.successCodes_.indexOf(status) !== -1;
        backoffCallback(true, new RequestEndStatus(successCode, connection));
      });
    };
    const backoffDone = (requestWentThrough, status) => {
      const resolve = this.resolve_;
      const reject = this.reject_;
      const connection = status.connection;
      if (status.wasSuccessCode) {
        try {
          const result = this.callback_(connection, connection.getResponse());
          if (isJustDef(result)) {
            resolve(result);
          } else {
            resolve();
          }
        } catch (e) {
          reject(e);
        }
      } else {
        if (connection !== null) {
          const err = unknown();
          err.serverResponse = connection.getErrorText();
          if (this.errorCallback_) {
            reject(this.errorCallback_(connection, err));
          } else {
            reject(err);
          }
        } else {
          if (status.canceled) {
            const err = this.appDelete_ ? appDeleted() : canceled();
            reject(err);
          } else {
            const err = retryLimitExceeded();
            reject(err);
          }
        }
      }
    };
    if (this.canceled_) {
      backoffDone(false, new RequestEndStatus(false, null, true));
    } else {
      this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
    }
  }
  /** @inheritDoc */
  getPromise() {
    return this.promise_;
  }
  /** @inheritDoc */
  cancel(appDelete) {
    this.canceled_ = true;
    this.appDelete_ = appDelete || false;
    if (this.backoffId_ !== null) {
      stop(this.backoffId_);
    }
    if (this.pendingConnection_ !== null) {
      this.pendingConnection_.abort();
    }
  }
};
var RequestEndStatus = class {
  constructor(wasSuccessCode, connection, canceled2) {
    this.wasSuccessCode = wasSuccessCode;
    this.connection = connection;
    this.canceled = !!canceled2;
  }
};
function addAuthHeader_(headers, authToken) {
  if (authToken !== null && authToken.length > 0) {
    headers["Authorization"] = "Firebase " + authToken;
  }
}
function addVersionHeader_(headers, firebaseVersion) {
  headers["X-Firebase-Storage-Version"] = "webjs/" + (firebaseVersion !== null && firebaseVersion !== void 0 ? firebaseVersion : "AppManager");
}
function addGmpidHeader_(headers, appId) {
  if (appId) {
    headers["X-Firebase-GMPID"] = appId;
  }
}
function addAppCheckHeader_(headers, appCheckToken) {
  if (appCheckToken !== null) {
    headers["X-Firebase-AppCheck"] = appCheckToken;
  }
}
function makeRequest(requestInfo, appId, authToken, appCheckToken, requestFactory, firebaseVersion, retry = true) {
  const queryPart = makeQueryString(requestInfo.urlParams);
  const url = requestInfo.url + queryPart;
  const headers = Object.assign({}, requestInfo.headers);
  addGmpidHeader_(headers, appId);
  addAuthHeader_(headers, authToken);
  addVersionHeader_(headers, firebaseVersion);
  addAppCheckHeader_(headers, appCheckToken);
  return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, requestFactory, retry);
}
function getBlobBuilder() {
  if (typeof BlobBuilder !== "undefined") {
    return BlobBuilder;
  } else if (typeof WebKitBlobBuilder !== "undefined") {
    return WebKitBlobBuilder;
  } else {
    return void 0;
  }
}
function getBlob$1(...args) {
  const BlobBuilder2 = getBlobBuilder();
  if (BlobBuilder2 !== void 0) {
    const bb = new BlobBuilder2();
    for (let i = 0; i < args.length; i++) {
      bb.append(args[i]);
    }
    return bb.getBlob();
  } else {
    if (isNativeBlobDefined()) {
      return new Blob(args);
    } else {
      throw new StorageError(StorageErrorCode.UNSUPPORTED_ENVIRONMENT, "This browser doesn't seem to support creating Blobs");
    }
  }
}
function sliceBlob(blob, start2, end) {
  if (blob.webkitSlice) {
    return blob.webkitSlice(start2, end);
  } else if (blob.mozSlice) {
    return blob.mozSlice(start2, end);
  } else if (blob.slice) {
    return blob.slice(start2, end);
  }
  return null;
}
function decodeBase64(encoded) {
  if (typeof atob === "undefined") {
    throw missingPolyFill("base-64");
  }
  return atob(encoded);
}
var StringFormat = {
  /**
   * Indicates the string should be interpreted "raw", that is, as normal text.
   * The string will be interpreted as UTF-16, then uploaded as a UTF-8 byte
   * sequence.
   * Example: The string 'Hello! \\ud83d\\ude0a' becomes the byte sequence
   * 48 65 6c 6c 6f 21 20 f0 9f 98 8a
   */
  RAW: "raw",
  /**
   * Indicates the string should be interpreted as base64-encoded data.
   * Padding characters (trailing '='s) are optional.
   * Example: The string 'rWmO++E6t7/rlw==' becomes the byte sequence
   * ad 69 8e fb e1 3a b7 bf eb 97
   */
  BASE64: "base64",
  /**
   * Indicates the string should be interpreted as base64url-encoded data.
   * Padding characters (trailing '='s) are optional.
   * Example: The string 'rWmO--E6t7_rlw==' becomes the byte sequence
   * ad 69 8e fb e1 3a b7 bf eb 97
   */
  BASE64URL: "base64url",
  /**
   * Indicates the string is a data URL, such as one obtained from
   * canvas.toDataURL().
   * Example: the string 'data:application/octet-stream;base64,aaaa'
   * becomes the byte sequence
   * 69 a6 9a
   * (the content-type "application/octet-stream" is also applied, but can
   * be overridden in the metadata object).
   */
  DATA_URL: "data_url"
};
var StringData = class {
  constructor(data, contentType) {
    this.data = data;
    this.contentType = contentType || null;
  }
};
function dataFromString(format, stringData) {
  switch (format) {
    case StringFormat.RAW:
      return new StringData(utf8Bytes_(stringData));
    case StringFormat.BASE64:
    case StringFormat.BASE64URL:
      return new StringData(base64Bytes_(format, stringData));
    case StringFormat.DATA_URL:
      return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
  }
  throw unknown();
}
function utf8Bytes_(value) {
  const b = [];
  for (let i = 0; i < value.length; i++) {
    let c = value.charCodeAt(i);
    if (c <= 127) {
      b.push(c);
    } else {
      if (c <= 2047) {
        b.push(192 | c >> 6, 128 | c & 63);
      } else {
        if ((c & 64512) === 55296) {
          const valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;
          if (!valid) {
            b.push(239, 191, 189);
          } else {
            const hi = c;
            const lo = value.charCodeAt(++i);
            c = 65536 | (hi & 1023) << 10 | lo & 1023;
            b.push(240 | c >> 18, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | c & 63);
          }
        } else {
          if ((c & 64512) === 56320) {
            b.push(239, 191, 189);
          } else {
            b.push(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63);
          }
        }
      }
    }
  }
  return new Uint8Array(b);
}
function percentEncodedBytes_(value) {
  let decoded;
  try {
    decoded = decodeURIComponent(value);
  } catch (e) {
    throw invalidFormat(StringFormat.DATA_URL, "Malformed data URL.");
  }
  return utf8Bytes_(decoded);
}
function base64Bytes_(format, value) {
  switch (format) {
    case StringFormat.BASE64: {
      const hasMinus = value.indexOf("-") !== -1;
      const hasUnder = value.indexOf("_") !== -1;
      if (hasMinus || hasUnder) {
        const invalidChar = hasMinus ? "-" : "_";
        throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64url encoded?");
      }
      break;
    }
    case StringFormat.BASE64URL: {
      const hasPlus = value.indexOf("+") !== -1;
      const hasSlash = value.indexOf("/") !== -1;
      if (hasPlus || hasSlash) {
        const invalidChar = hasPlus ? "+" : "/";
        throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
      }
      value = value.replace(/-/g, "+").replace(/_/g, "/");
      break;
    }
  }
  let bytes;
  try {
    bytes = decodeBase64(value);
  } catch (e) {
    if (e.message.includes("polyfill")) {
      throw e;
    }
    throw invalidFormat(format, "Invalid character found");
  }
  const array = new Uint8Array(bytes.length);
  for (let i = 0; i < bytes.length; i++) {
    array[i] = bytes.charCodeAt(i);
  }
  return array;
}
var DataURLParts = class {
  constructor(dataURL) {
    this.base64 = false;
    this.contentType = null;
    const matches = dataURL.match(/^data:([^,]+)?,/);
    if (matches === null) {
      throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
    }
    const middle = matches[1] || null;
    if (middle != null) {
      this.base64 = endsWith(middle, ";base64");
      this.contentType = this.base64 ? middle.substring(0, middle.length - ";base64".length) : middle;
    }
    this.rest = dataURL.substring(dataURL.indexOf(",") + 1);
  }
};
function dataURLBytes_(dataUrl) {
  const parts = new DataURLParts(dataUrl);
  if (parts.base64) {
    return base64Bytes_(StringFormat.BASE64, parts.rest);
  } else {
    return percentEncodedBytes_(parts.rest);
  }
}
function dataURLContentType_(dataUrl) {
  const parts = new DataURLParts(dataUrl);
  return parts.contentType;
}
function endsWith(s, end) {
  const longEnough = s.length >= end.length;
  if (!longEnough) {
    return false;
  }
  return s.substring(s.length - end.length) === end;
}
var FbsBlob = class _FbsBlob {
  constructor(data, elideCopy) {
    let size = 0;
    let blobType = "";
    if (isNativeBlob(data)) {
      this.data_ = data;
      size = data.size;
      blobType = data.type;
    } else if (data instanceof ArrayBuffer) {
      if (elideCopy) {
        this.data_ = new Uint8Array(data);
      } else {
        this.data_ = new Uint8Array(data.byteLength);
        this.data_.set(new Uint8Array(data));
      }
      size = this.data_.length;
    } else if (data instanceof Uint8Array) {
      if (elideCopy) {
        this.data_ = data;
      } else {
        this.data_ = new Uint8Array(data.length);
        this.data_.set(data);
      }
      size = data.length;
    }
    this.size_ = size;
    this.type_ = blobType;
  }
  size() {
    return this.size_;
  }
  type() {
    return this.type_;
  }
  slice(startByte, endByte) {
    if (isNativeBlob(this.data_)) {
      const realBlob = this.data_;
      const sliced = sliceBlob(realBlob, startByte, endByte);
      if (sliced === null) {
        return null;
      }
      return new _FbsBlob(sliced);
    } else {
      const slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
      return new _FbsBlob(slice, true);
    }
  }
  static getBlob(...args) {
    if (isNativeBlobDefined()) {
      const blobby = args.map((val) => {
        if (val instanceof _FbsBlob) {
          return val.data_;
        } else {
          return val;
        }
      });
      return new _FbsBlob(getBlob$1.apply(null, blobby));
    } else {
      const uint8Arrays = args.map((val) => {
        if (isString(val)) {
          return dataFromString(StringFormat.RAW, val).data;
        } else {
          return val.data_;
        }
      });
      let finalLength = 0;
      uint8Arrays.forEach((array) => {
        finalLength += array.byteLength;
      });
      const merged = new Uint8Array(finalLength);
      let index = 0;
      uint8Arrays.forEach((array) => {
        for (let i = 0; i < array.length; i++) {
          merged[index++] = array[i];
        }
      });
      return new _FbsBlob(merged, true);
    }
  }
  uploadData() {
    return this.data_;
  }
};
function jsonObjectOrNull(s) {
  let obj;
  try {
    obj = JSON.parse(s);
  } catch (e) {
    return null;
  }
  if (isNonArrayObject(obj)) {
    return obj;
  } else {
    return null;
  }
}
function parent(path) {
  if (path.length === 0) {
    return null;
  }
  const index = path.lastIndexOf("/");
  if (index === -1) {
    return "";
  }
  const newPath = path.slice(0, index);
  return newPath;
}
function child(path, childPath) {
  const canonicalChildPath = childPath.split("/").filter((component) => component.length > 0).join("/");
  if (path.length === 0) {
    return canonicalChildPath;
  } else {
    return path + "/" + canonicalChildPath;
  }
}
function lastComponent(path) {
  const index = path.lastIndexOf("/", path.length - 2);
  if (index === -1) {
    return path;
  } else {
    return path.slice(index + 1);
  }
}
function noXform_(metadata, value) {
  return value;
}
var Mapping = class {
  constructor(server, local, writable, xform) {
    this.server = server;
    this.local = local || server;
    this.writable = !!writable;
    this.xform = xform || noXform_;
  }
};
var mappings_ = null;
function xformPath(fullPath) {
  if (!isString(fullPath) || fullPath.length < 2) {
    return fullPath;
  } else {
    return lastComponent(fullPath);
  }
}
function getMappings() {
  if (mappings_) {
    return mappings_;
  }
  const mappings = [];
  mappings.push(new Mapping("bucket"));
  mappings.push(new Mapping("generation"));
  mappings.push(new Mapping("metageneration"));
  mappings.push(new Mapping("name", "fullPath", true));
  function mappingsXformPath(_metadata, fullPath) {
    return xformPath(fullPath);
  }
  const nameMapping = new Mapping("name");
  nameMapping.xform = mappingsXformPath;
  mappings.push(nameMapping);
  function xformSize(_metadata, size) {
    if (size !== void 0) {
      return Number(size);
    } else {
      return size;
    }
  }
  const sizeMapping = new Mapping("size");
  sizeMapping.xform = xformSize;
  mappings.push(sizeMapping);
  mappings.push(new Mapping("timeCreated"));
  mappings.push(new Mapping("updated"));
  mappings.push(new Mapping("md5Hash", null, true));
  mappings.push(new Mapping("cacheControl", null, true));
  mappings.push(new Mapping("contentDisposition", null, true));
  mappings.push(new Mapping("contentEncoding", null, true));
  mappings.push(new Mapping("contentLanguage", null, true));
  mappings.push(new Mapping("contentType", null, true));
  mappings.push(new Mapping("metadata", "customMetadata", true));
  mappings_ = mappings;
  return mappings_;
}
function addRef(metadata, service) {
  function generateRef() {
    const bucket = metadata["bucket"];
    const path = metadata["fullPath"];
    const loc = new Location(bucket, path);
    return service._makeStorageReference(loc);
  }
  Object.defineProperty(metadata, "ref", {
    get: generateRef
  });
}
function fromResource(service, resource, mappings) {
  const metadata = {};
  metadata["type"] = "file";
  const len = mappings.length;
  for (let i = 0; i < len; i++) {
    const mapping = mappings[i];
    metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
  }
  addRef(metadata, service);
  return metadata;
}
function fromResourceString(service, resourceString, mappings) {
  const obj = jsonObjectOrNull(resourceString);
  if (obj === null) {
    return null;
  }
  const resource = obj;
  return fromResource(service, resource, mappings);
}
function downloadUrlFromResourceString(metadata, resourceString, host, protocol) {
  const obj = jsonObjectOrNull(resourceString);
  if (obj === null) {
    return null;
  }
  if (!isString(obj["downloadTokens"])) {
    return null;
  }
  const tokens = obj["downloadTokens"];
  if (tokens.length === 0) {
    return null;
  }
  const encode = encodeURIComponent;
  const tokensList = tokens.split(",");
  const urls = tokensList.map((token) => {
    const bucket = metadata["bucket"];
    const path = metadata["fullPath"];
    const urlPart = "/b/" + encode(bucket) + "/o/" + encode(path);
    const base = makeUrl(urlPart, host, protocol);
    const queryString = makeQueryString({
      alt: "media",
      token
    });
    return base + queryString;
  });
  return urls[0];
}
function toResourceString(metadata, mappings) {
  const resource = {};
  const len = mappings.length;
  for (let i = 0; i < len; i++) {
    const mapping = mappings[i];
    if (mapping.writable) {
      resource[mapping.server] = metadata[mapping.local];
    }
  }
  return JSON.stringify(resource);
}
var PREFIXES_KEY = "prefixes";
var ITEMS_KEY = "items";
function fromBackendResponse(service, bucket, resource) {
  const listResult = {
    prefixes: [],
    items: [],
    nextPageToken: resource["nextPageToken"]
  };
  if (resource[PREFIXES_KEY]) {
    for (const path of resource[PREFIXES_KEY]) {
      const pathWithoutTrailingSlash = path.replace(/\/$/, "");
      const reference = service._makeStorageReference(new Location(bucket, pathWithoutTrailingSlash));
      listResult.prefixes.push(reference);
    }
  }
  if (resource[ITEMS_KEY]) {
    for (const item of resource[ITEMS_KEY]) {
      const reference = service._makeStorageReference(new Location(bucket, item["name"]));
      listResult.items.push(reference);
    }
  }
  return listResult;
}
function fromResponseString(service, bucket, resourceString) {
  const obj = jsonObjectOrNull(resourceString);
  if (obj === null) {
    return null;
  }
  const resource = obj;
  return fromBackendResponse(service, bucket, resource);
}
var RequestInfo = class {
  constructor(url, method, handler, timeout) {
    this.url = url;
    this.method = method;
    this.handler = handler;
    this.timeout = timeout;
    this.urlParams = {};
    this.headers = {};
    this.body = null;
    this.errorHandler = null;
    this.progressCallback = null;
    this.successCodes = [200];
    this.additionalRetryCodes = [];
  }
};
function handlerCheck(cndn) {
  if (!cndn) {
    throw unknown();
  }
}
function metadataHandler(service, mappings) {
  function handler(xhr, text) {
    const metadata = fromResourceString(service, text, mappings);
    handlerCheck(metadata !== null);
    return metadata;
  }
  return handler;
}
function listHandler(service, bucket) {
  function handler(xhr, text) {
    const listResult = fromResponseString(service, bucket, text);
    handlerCheck(listResult !== null);
    return listResult;
  }
  return handler;
}
function downloadUrlHandler(service, mappings) {
  function handler(xhr, text) {
    const metadata = fromResourceString(service, text, mappings);
    handlerCheck(metadata !== null);
    return downloadUrlFromResourceString(metadata, text, service.host, service._protocol);
  }
  return handler;
}
function sharedErrorHandler(location) {
  function errorHandler(xhr, err) {
    let newErr;
    if (xhr.getStatus() === 401) {
      if (
        // This exact message string is the only consistent part of the
        // server's error response that identifies it as an App Check error.
        xhr.getErrorText().includes("Firebase App Check token is invalid")
      ) {
        newErr = unauthorizedApp();
      } else {
        newErr = unauthenticated();
      }
    } else {
      if (xhr.getStatus() === 402) {
        newErr = quotaExceeded(location.bucket);
      } else {
        if (xhr.getStatus() === 403) {
          newErr = unauthorized(location.path);
        } else {
          newErr = err;
        }
      }
    }
    newErr.status = xhr.getStatus();
    newErr.serverResponse = err.serverResponse;
    return newErr;
  }
  return errorHandler;
}
function objectErrorHandler(location) {
  const shared = sharedErrorHandler(location);
  function errorHandler(xhr, err) {
    let newErr = shared(xhr, err);
    if (xhr.getStatus() === 404) {
      newErr = objectNotFound(location.path);
    }
    newErr.serverResponse = err.serverResponse;
    return newErr;
  }
  return errorHandler;
}
function getMetadata$2(service, location, mappings) {
  const urlPart = location.fullServerUrl();
  const url = makeUrl(urlPart, service.host, service._protocol);
  const method = "GET";
  const timeout = service.maxOperationRetryTime;
  const requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
  requestInfo.errorHandler = objectErrorHandler(location);
  return requestInfo;
}
function list$2(service, location, delimiter, pageToken, maxResults) {
  const urlParams = {};
  if (location.isRoot) {
    urlParams["prefix"] = "";
  } else {
    urlParams["prefix"] = location.path + "/";
  }
  if (delimiter && delimiter.length > 0) {
    urlParams["delimiter"] = delimiter;
  }
  if (pageToken) {
    urlParams["pageToken"] = pageToken;
  }
  if (maxResults) {
    urlParams["maxResults"] = maxResults;
  }
  const urlPart = location.bucketOnlyServerUrl();
  const url = makeUrl(urlPart, service.host, service._protocol);
  const method = "GET";
  const timeout = service.maxOperationRetryTime;
  const requestInfo = new RequestInfo(url, method, listHandler(service, location.bucket), timeout);
  requestInfo.urlParams = urlParams;
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
function getBytes$1(service, location, maxDownloadSizeBytes) {
  const urlPart = location.fullServerUrl();
  const url = makeUrl(urlPart, service.host, service._protocol) + "?alt=media";
  const method = "GET";
  const timeout = service.maxOperationRetryTime;
  const requestInfo = new RequestInfo(url, method, (_, data) => data, timeout);
  requestInfo.errorHandler = objectErrorHandler(location);
  if (maxDownloadSizeBytes !== void 0) {
    requestInfo.headers["Range"] = `bytes=0-${maxDownloadSizeBytes}`;
    requestInfo.successCodes = [
      200,
      206
      /* Partial Content */
    ];
  }
  return requestInfo;
}
function getDownloadUrl(service, location, mappings) {
  const urlPart = location.fullServerUrl();
  const url = makeUrl(urlPart, service.host, service._protocol);
  const method = "GET";
  const timeout = service.maxOperationRetryTime;
  const requestInfo = new RequestInfo(url, method, downloadUrlHandler(service, mappings), timeout);
  requestInfo.errorHandler = objectErrorHandler(location);
  return requestInfo;
}
function updateMetadata$2(service, location, metadata, mappings) {
  const urlPart = location.fullServerUrl();
  const url = makeUrl(urlPart, service.host, service._protocol);
  const method = "PATCH";
  const body = toResourceString(metadata, mappings);
  const headers = {
    "Content-Type": "application/json; charset=utf-8"
  };
  const timeout = service.maxOperationRetryTime;
  const requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
  requestInfo.headers = headers;
  requestInfo.body = body;
  requestInfo.errorHandler = objectErrorHandler(location);
  return requestInfo;
}
function deleteObject$2(service, location) {
  const urlPart = location.fullServerUrl();
  const url = makeUrl(urlPart, service.host, service._protocol);
  const method = "DELETE";
  const timeout = service.maxOperationRetryTime;
  function handler(_xhr, _text) {
  }
  const requestInfo = new RequestInfo(url, method, handler, timeout);
  requestInfo.successCodes = [200, 204];
  requestInfo.errorHandler = objectErrorHandler(location);
  return requestInfo;
}
function determineContentType_(metadata, blob) {
  return metadata && metadata["contentType"] || blob && blob.type() || "application/octet-stream";
}
function metadataForUpload_(location, blob, metadata) {
  const metadataClone = Object.assign({}, metadata);
  metadataClone["fullPath"] = location.path;
  metadataClone["size"] = blob.size();
  if (!metadataClone["contentType"]) {
    metadataClone["contentType"] = determineContentType_(null, blob);
  }
  return metadataClone;
}
function multipartUpload(service, location, mappings, blob, metadata) {
  const urlPart = location.bucketOnlyServerUrl();
  const headers = {
    "X-Goog-Upload-Protocol": "multipart"
  };
  function genBoundary() {
    let str = "";
    for (let i = 0; i < 2; i++) {
      str = str + Math.random().toString().slice(2);
    }
    return str;
  }
  const boundary = genBoundary();
  headers["Content-Type"] = "multipart/related; boundary=" + boundary;
  const metadata_ = metadataForUpload_(location, blob, metadata);
  const metadataString = toResourceString(metadata_, mappings);
  const preBlobPart = "--" + boundary + "\r\nContent-Type: application/json; charset=utf-8\r\n\r\n" + metadataString + "\r\n--" + boundary + "\r\nContent-Type: " + metadata_["contentType"] + "\r\n\r\n";
  const postBlobPart = "\r\n--" + boundary + "--";
  const body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);
  if (body === null) {
    throw cannotSliceBlob();
  }
  const urlParams = {
    name: metadata_["fullPath"]
  };
  const url = makeUrl(urlPart, service.host, service._protocol);
  const method = "POST";
  const timeout = service.maxUploadRetryTime;
  const requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
  requestInfo.urlParams = urlParams;
  requestInfo.headers = headers;
  requestInfo.body = body.uploadData();
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
var ResumableUploadStatus = class {
  constructor(current, total, finalized, metadata) {
    this.current = current;
    this.total = total;
    this.finalized = !!finalized;
    this.metadata = metadata || null;
  }
};
function checkResumeHeader_(xhr, allowed) {
  let status = null;
  try {
    status = xhr.getResponseHeader("X-Goog-Upload-Status");
  } catch (e) {
    handlerCheck(false);
  }
  const allowedStatus = allowed || ["active"];
  handlerCheck(!!status && allowedStatus.indexOf(status) !== -1);
  return status;
}
function createResumableUpload(service, location, mappings, blob, metadata) {
  const urlPart = location.bucketOnlyServerUrl();
  const metadataForUpload = metadataForUpload_(location, blob, metadata);
  const urlParams = {
    name: metadataForUpload["fullPath"]
  };
  const url = makeUrl(urlPart, service.host, service._protocol);
  const method = "POST";
  const headers = {
    "X-Goog-Upload-Protocol": "resumable",
    "X-Goog-Upload-Command": "start",
    "X-Goog-Upload-Header-Content-Length": `${blob.size()}`,
    "X-Goog-Upload-Header-Content-Type": metadataForUpload["contentType"],
    "Content-Type": "application/json; charset=utf-8"
  };
  const body = toResourceString(metadataForUpload, mappings);
  const timeout = service.maxUploadRetryTime;
  function handler(xhr) {
    checkResumeHeader_(xhr);
    let url2;
    try {
      url2 = xhr.getResponseHeader("X-Goog-Upload-URL");
    } catch (e) {
      handlerCheck(false);
    }
    handlerCheck(isString(url2));
    return url2;
  }
  const requestInfo = new RequestInfo(url, method, handler, timeout);
  requestInfo.urlParams = urlParams;
  requestInfo.headers = headers;
  requestInfo.body = body;
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
function getResumableUploadStatus(service, location, url, blob) {
  const headers = {
    "X-Goog-Upload-Command": "query"
  };
  function handler(xhr) {
    const status = checkResumeHeader_(xhr, ["active", "final"]);
    let sizeString = null;
    try {
      sizeString = xhr.getResponseHeader("X-Goog-Upload-Size-Received");
    } catch (e) {
      handlerCheck(false);
    }
    if (!sizeString) {
      handlerCheck(false);
    }
    const size = Number(sizeString);
    handlerCheck(!isNaN(size));
    return new ResumableUploadStatus(size, blob.size(), status === "final");
  }
  const method = "POST";
  const timeout = service.maxUploadRetryTime;
  const requestInfo = new RequestInfo(url, method, handler, timeout);
  requestInfo.headers = headers;
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
var RESUMABLE_UPLOAD_CHUNK_SIZE = 256 * 1024;
function continueResumableUpload(location, service, url, blob, chunkSize, mappings, status, progressCallback) {
  const status_ = new ResumableUploadStatus(0, 0);
  if (status) {
    status_.current = status.current;
    status_.total = status.total;
  } else {
    status_.current = 0;
    status_.total = blob.size();
  }
  if (blob.size() !== status_.total) {
    throw serverFileWrongSize();
  }
  const bytesLeft = status_.total - status_.current;
  let bytesToUpload = bytesLeft;
  if (chunkSize > 0) {
    bytesToUpload = Math.min(bytesToUpload, chunkSize);
  }
  const startByte = status_.current;
  const endByte = startByte + bytesToUpload;
  let uploadCommand = "";
  if (bytesToUpload === 0) {
    uploadCommand = "finalize";
  } else if (bytesLeft === bytesToUpload) {
    uploadCommand = "upload, finalize";
  } else {
    uploadCommand = "upload";
  }
  const headers = {
    "X-Goog-Upload-Command": uploadCommand,
    "X-Goog-Upload-Offset": `${status_.current}`
  };
  const body = blob.slice(startByte, endByte);
  if (body === null) {
    throw cannotSliceBlob();
  }
  function handler(xhr, text) {
    const uploadStatus = checkResumeHeader_(xhr, ["active", "final"]);
    const newCurrent = status_.current + bytesToUpload;
    const size = blob.size();
    let metadata;
    if (uploadStatus === "final") {
      metadata = metadataHandler(service, mappings)(xhr, text);
    } else {
      metadata = null;
    }
    return new ResumableUploadStatus(newCurrent, size, uploadStatus === "final", metadata);
  }
  const method = "POST";
  const timeout = service.maxUploadRetryTime;
  const requestInfo = new RequestInfo(url, method, handler, timeout);
  requestInfo.headers = headers;
  requestInfo.body = body.uploadData();
  requestInfo.progressCallback = progressCallback || null;
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
var TaskState = {
  /** The task is currently transferring data. */
  RUNNING: "running",
  /** The task was paused by the user. */
  PAUSED: "paused",
  /** The task completed successfully. */
  SUCCESS: "success",
  /** The task was canceled. */
  CANCELED: "canceled",
  /** The task failed with an error. */
  ERROR: "error"
};
function taskStateFromInternalTaskState(state) {
  switch (state) {
    case "running":
    case "pausing":
    case "canceling":
      return TaskState.RUNNING;
    case "paused":
      return TaskState.PAUSED;
    case "success":
      return TaskState.SUCCESS;
    case "canceled":
      return TaskState.CANCELED;
    case "error":
      return TaskState.ERROR;
    default:
      return TaskState.ERROR;
  }
}
var Observer = class {
  constructor(nextOrObserver, error, complete) {
    const asFunctions = isFunction(nextOrObserver) || error != null || complete != null;
    if (asFunctions) {
      this.next = nextOrObserver;
      this.error = error !== null && error !== void 0 ? error : void 0;
      this.complete = complete !== null && complete !== void 0 ? complete : void 0;
    } else {
      const observer = nextOrObserver;
      this.next = observer.next;
      this.error = observer.error;
      this.complete = observer.complete;
    }
  }
};
function async(f) {
  return (...argsToForward) => {
    Promise.resolve().then(() => f(...argsToForward));
  };
}
var textFactoryOverride = null;
var XhrConnection = class {
  constructor() {
    this.sent_ = false;
    this.xhr_ = new XMLHttpRequest();
    this.initXhr();
    this.errorCode_ = ErrorCode.NO_ERROR;
    this.sendPromise_ = new Promise((resolve) => {
      this.xhr_.addEventListener("abort", () => {
        this.errorCode_ = ErrorCode.ABORT;
        resolve();
      });
      this.xhr_.addEventListener("error", () => {
        this.errorCode_ = ErrorCode.NETWORK_ERROR;
        resolve();
      });
      this.xhr_.addEventListener("load", () => {
        resolve();
      });
    });
  }
  send(url, method, body, headers) {
    if (this.sent_) {
      throw internalError("cannot .send() more than once");
    }
    this.sent_ = true;
    this.xhr_.open(method, url, true);
    if (headers !== void 0) {
      for (const key in headers) {
        if (headers.hasOwnProperty(key)) {
          this.xhr_.setRequestHeader(key, headers[key].toString());
        }
      }
    }
    if (body !== void 0) {
      this.xhr_.send(body);
    } else {
      this.xhr_.send();
    }
    return this.sendPromise_;
  }
  getErrorCode() {
    if (!this.sent_) {
      throw internalError("cannot .getErrorCode() before sending");
    }
    return this.errorCode_;
  }
  getStatus() {
    if (!this.sent_) {
      throw internalError("cannot .getStatus() before sending");
    }
    try {
      return this.xhr_.status;
    } catch (e) {
      return -1;
    }
  }
  getResponse() {
    if (!this.sent_) {
      throw internalError("cannot .getResponse() before sending");
    }
    return this.xhr_.response;
  }
  getErrorText() {
    if (!this.sent_) {
      throw internalError("cannot .getErrorText() before sending");
    }
    return this.xhr_.statusText;
  }
  /** Aborts the request. */
  abort() {
    this.xhr_.abort();
  }
  getResponseHeader(header) {
    return this.xhr_.getResponseHeader(header);
  }
  addUploadProgressListener(listener) {
    if (this.xhr_.upload != null) {
      this.xhr_.upload.addEventListener("progress", listener);
    }
  }
  removeUploadProgressListener(listener) {
    if (this.xhr_.upload != null) {
      this.xhr_.upload.removeEventListener("progress", listener);
    }
  }
};
var XhrTextConnection = class extends XhrConnection {
  initXhr() {
    this.xhr_.responseType = "text";
  }
};
function newTextConnection() {
  return textFactoryOverride ? textFactoryOverride() : new XhrTextConnection();
}
var XhrBytesConnection = class extends XhrConnection {
  initXhr() {
    this.xhr_.responseType = "arraybuffer";
  }
};
function newBytesConnection() {
  return new XhrBytesConnection();
}
var XhrBlobConnection = class extends XhrConnection {
  initXhr() {
    this.xhr_.responseType = "blob";
  }
};
function newBlobConnection() {
  return new XhrBlobConnection();
}
var UploadTask = class {
  isExponentialBackoffExpired() {
    return this.sleepTime > this.maxSleepTime;
  }
  /**
   * @param ref - The firebaseStorage.Reference object this task came
   *     from, untyped to avoid cyclic dependencies.
   * @param blob - The blob to upload.
   */
  constructor(ref3, blob, metadata = null) {
    this._transferred = 0;
    this._needToFetchStatus = false;
    this._needToFetchMetadata = false;
    this._observers = [];
    this._error = void 0;
    this._uploadUrl = void 0;
    this._request = void 0;
    this._chunkMultiplier = 1;
    this._resolve = void 0;
    this._reject = void 0;
    this._ref = ref3;
    this._blob = blob;
    this._metadata = metadata;
    this._mappings = getMappings();
    this._resumable = this._shouldDoResumable(this._blob);
    this._state = "running";
    this._errorHandler = (error) => {
      this._request = void 0;
      this._chunkMultiplier = 1;
      if (error._codeEquals(StorageErrorCode.CANCELED)) {
        this._needToFetchStatus = true;
        this.completeTransitions_();
      } else {
        const backoffExpired = this.isExponentialBackoffExpired();
        if (isRetryStatusCode(error.status, [])) {
          if (backoffExpired) {
            error = retryLimitExceeded();
          } else {
            this.sleepTime = Math.max(this.sleepTime * 2, DEFAULT_MIN_SLEEP_TIME_MILLIS);
            this._needToFetchStatus = true;
            this.completeTransitions_();
            return;
          }
        }
        this._error = error;
        this._transition(
          "error"
          /* InternalTaskState.ERROR */
        );
      }
    };
    this._metadataErrorHandler = (error) => {
      this._request = void 0;
      if (error._codeEquals(StorageErrorCode.CANCELED)) {
        this.completeTransitions_();
      } else {
        this._error = error;
        this._transition(
          "error"
          /* InternalTaskState.ERROR */
        );
      }
    };
    this.sleepTime = 0;
    this.maxSleepTime = this._ref.storage.maxUploadRetryTime;
    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
      this._start();
    });
    this._promise.then(null, () => {
    });
  }
  _makeProgressCallback() {
    const sizeBefore = this._transferred;
    return (loaded) => this._updateProgress(sizeBefore + loaded);
  }
  _shouldDoResumable(blob) {
    return blob.size() > 256 * 1024;
  }
  _start() {
    if (this._state !== "running") {
      return;
    }
    if (this._request !== void 0) {
      return;
    }
    if (this._resumable) {
      if (this._uploadUrl === void 0) {
        this._createResumable();
      } else {
        if (this._needToFetchStatus) {
          this._fetchStatus();
        } else {
          if (this._needToFetchMetadata) {
            this._fetchMetadata();
          } else {
            this.pendingTimeout = setTimeout(() => {
              this.pendingTimeout = void 0;
              this._continueUpload();
            }, this.sleepTime);
          }
        }
      }
    } else {
      this._oneShotUpload();
    }
  }
  _resolveToken(callback) {
    Promise.all([this._ref.storage._getAuthToken(), this._ref.storage._getAppCheckToken()]).then(([authToken, appCheckToken]) => {
      switch (this._state) {
        case "running":
          callback(authToken, appCheckToken);
          break;
        case "canceling":
          this._transition(
            "canceled"
            /* InternalTaskState.CANCELED */
          );
          break;
        case "pausing":
          this._transition(
            "paused"
            /* InternalTaskState.PAUSED */
          );
          break;
      }
    });
  }
  // TODO(andysoto): assert false
  _createResumable() {
    this._resolveToken((authToken, appCheckToken) => {
      const requestInfo = createResumableUpload(this._ref.storage, this._ref._location, this._mappings, this._blob, this._metadata);
      const createRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);
      this._request = createRequest;
      createRequest.getPromise().then((url) => {
        this._request = void 0;
        this._uploadUrl = url;
        this._needToFetchStatus = false;
        this.completeTransitions_();
      }, this._errorHandler);
    });
  }
  _fetchStatus() {
    const url = this._uploadUrl;
    this._resolveToken((authToken, appCheckToken) => {
      const requestInfo = getResumableUploadStatus(this._ref.storage, this._ref._location, url, this._blob);
      const statusRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);
      this._request = statusRequest;
      statusRequest.getPromise().then((status) => {
        status = status;
        this._request = void 0;
        this._updateProgress(status.current);
        this._needToFetchStatus = false;
        if (status.finalized) {
          this._needToFetchMetadata = true;
        }
        this.completeTransitions_();
      }, this._errorHandler);
    });
  }
  _continueUpload() {
    const chunkSize = RESUMABLE_UPLOAD_CHUNK_SIZE * this._chunkMultiplier;
    const status = new ResumableUploadStatus(this._transferred, this._blob.size());
    const url = this._uploadUrl;
    this._resolveToken((authToken, appCheckToken) => {
      let requestInfo;
      try {
        requestInfo = continueResumableUpload(this._ref._location, this._ref.storage, url, this._blob, chunkSize, this._mappings, status, this._makeProgressCallback());
      } catch (e) {
        this._error = e;
        this._transition(
          "error"
          /* InternalTaskState.ERROR */
        );
        return;
      }
      const uploadRequest = this._ref.storage._makeRequest(
        requestInfo,
        newTextConnection,
        authToken,
        appCheckToken,
        /*retry=*/
        false
        // Upload requests should not be retried as each retry should be preceded by another query request. Which is handled in this file.
      );
      this._request = uploadRequest;
      uploadRequest.getPromise().then((newStatus) => {
        this._increaseMultiplier();
        this._request = void 0;
        this._updateProgress(newStatus.current);
        if (newStatus.finalized) {
          this._metadata = newStatus.metadata;
          this._transition(
            "success"
            /* InternalTaskState.SUCCESS */
          );
        } else {
          this.completeTransitions_();
        }
      }, this._errorHandler);
    });
  }
  _increaseMultiplier() {
    const currentSize = RESUMABLE_UPLOAD_CHUNK_SIZE * this._chunkMultiplier;
    if (currentSize * 2 < 32 * 1024 * 1024) {
      this._chunkMultiplier *= 2;
    }
  }
  _fetchMetadata() {
    this._resolveToken((authToken, appCheckToken) => {
      const requestInfo = getMetadata$2(this._ref.storage, this._ref._location, this._mappings);
      const metadataRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);
      this._request = metadataRequest;
      metadataRequest.getPromise().then((metadata) => {
        this._request = void 0;
        this._metadata = metadata;
        this._transition(
          "success"
          /* InternalTaskState.SUCCESS */
        );
      }, this._metadataErrorHandler);
    });
  }
  _oneShotUpload() {
    this._resolveToken((authToken, appCheckToken) => {
      const requestInfo = multipartUpload(this._ref.storage, this._ref._location, this._mappings, this._blob, this._metadata);
      const multipartRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);
      this._request = multipartRequest;
      multipartRequest.getPromise().then((metadata) => {
        this._request = void 0;
        this._metadata = metadata;
        this._updateProgress(this._blob.size());
        this._transition(
          "success"
          /* InternalTaskState.SUCCESS */
        );
      }, this._errorHandler);
    });
  }
  _updateProgress(transferred) {
    const old = this._transferred;
    this._transferred = transferred;
    if (this._transferred !== old) {
      this._notifyObservers();
    }
  }
  _transition(state) {
    if (this._state === state) {
      return;
    }
    switch (state) {
      case "canceling":
      case "pausing":
        this._state = state;
        if (this._request !== void 0) {
          this._request.cancel();
        } else if (this.pendingTimeout) {
          clearTimeout(this.pendingTimeout);
          this.pendingTimeout = void 0;
          this.completeTransitions_();
        }
        break;
      case "running":
        const wasPaused = this._state === "paused";
        this._state = state;
        if (wasPaused) {
          this._notifyObservers();
          this._start();
        }
        break;
      case "paused":
        this._state = state;
        this._notifyObservers();
        break;
      case "canceled":
        this._error = canceled();
        this._state = state;
        this._notifyObservers();
        break;
      case "error":
        this._state = state;
        this._notifyObservers();
        break;
      case "success":
        this._state = state;
        this._notifyObservers();
        break;
    }
  }
  completeTransitions_() {
    switch (this._state) {
      case "pausing":
        this._transition(
          "paused"
          /* InternalTaskState.PAUSED */
        );
        break;
      case "canceling":
        this._transition(
          "canceled"
          /* InternalTaskState.CANCELED */
        );
        break;
      case "running":
        this._start();
        break;
    }
  }
  /**
   * A snapshot of the current task state.
   */
  get snapshot() {
    const externalState = taskStateFromInternalTaskState(this._state);
    return {
      bytesTransferred: this._transferred,
      totalBytes: this._blob.size(),
      state: externalState,
      metadata: this._metadata,
      task: this,
      ref: this._ref
    };
  }
  /**
   * Adds a callback for an event.
   * @param type - The type of event to listen for.
   * @param nextOrObserver -
   *     The `next` function, which gets called for each item in
   *     the event stream, or an observer object with some or all of these three
   *     properties (`next`, `error`, `complete`).
   * @param error - A function that gets called with a `StorageError`
   *     if the event stream ends due to an error.
   * @param completed - A function that gets called if the
   *     event stream ends normally.
   * @returns
   *     If only the event argument is passed, returns a function you can use to
   *     add callbacks (see the examples above). If more than just the event
   *     argument is passed, returns a function you can call to unregister the
   *     callbacks.
   */
  on(type, nextOrObserver, error, completed) {
    const observer = new Observer(nextOrObserver || void 0, error || void 0, completed || void 0);
    this._addObserver(observer);
    return () => {
      this._removeObserver(observer);
    };
  }
  /**
   * This object behaves like a Promise, and resolves with its snapshot data
   * when the upload completes.
   * @param onFulfilled - The fulfillment callback. Promise chaining works as normal.
   * @param onRejected - The rejection callback.
   */
  then(onFulfilled, onRejected) {
    return this._promise.then(onFulfilled, onRejected);
  }
  /**
   * Equivalent to calling `then(null, onRejected)`.
   */
  catch(onRejected) {
    return this.then(null, onRejected);
  }
  /**
   * Adds the given observer.
   */
  _addObserver(observer) {
    this._observers.push(observer);
    this._notifyObserver(observer);
  }
  /**
   * Removes the given observer.
   */
  _removeObserver(observer) {
    const i = this._observers.indexOf(observer);
    if (i !== -1) {
      this._observers.splice(i, 1);
    }
  }
  _notifyObservers() {
    this._finishPromise();
    const observers = this._observers.slice();
    observers.forEach((observer) => {
      this._notifyObserver(observer);
    });
  }
  _finishPromise() {
    if (this._resolve !== void 0) {
      let triggered = true;
      switch (taskStateFromInternalTaskState(this._state)) {
        case TaskState.SUCCESS:
          async(this._resolve.bind(null, this.snapshot))();
          break;
        case TaskState.CANCELED:
        case TaskState.ERROR:
          const toCall = this._reject;
          async(toCall.bind(null, this._error))();
          break;
        default:
          triggered = false;
          break;
      }
      if (triggered) {
        this._resolve = void 0;
        this._reject = void 0;
      }
    }
  }
  _notifyObserver(observer) {
    const externalState = taskStateFromInternalTaskState(this._state);
    switch (externalState) {
      case TaskState.RUNNING:
      case TaskState.PAUSED:
        if (observer.next) {
          async(observer.next.bind(observer, this.snapshot))();
        }
        break;
      case TaskState.SUCCESS:
        if (observer.complete) {
          async(observer.complete.bind(observer))();
        }
        break;
      case TaskState.CANCELED:
      case TaskState.ERROR:
        if (observer.error) {
          async(observer.error.bind(observer, this._error))();
        }
        break;
      default:
        if (observer.error) {
          async(observer.error.bind(observer, this._error))();
        }
    }
  }
  /**
   * Resumes a paused task. Has no effect on a currently running or failed task.
   * @returns True if the operation took effect, false if ignored.
   */
  resume() {
    const valid = this._state === "paused" || this._state === "pausing";
    if (valid) {
      this._transition(
        "running"
        /* InternalTaskState.RUNNING */
      );
    }
    return valid;
  }
  /**
   * Pauses a currently running task. Has no effect on a paused or failed task.
   * @returns True if the operation took effect, false if ignored.
   */
  pause() {
    const valid = this._state === "running";
    if (valid) {
      this._transition(
        "pausing"
        /* InternalTaskState.PAUSING */
      );
    }
    return valid;
  }
  /**
   * Cancels a currently running or paused task. Has no effect on a complete or
   * failed task.
   * @returns True if the operation took effect, false if ignored.
   */
  cancel() {
    const valid = this._state === "running" || this._state === "pausing";
    if (valid) {
      this._transition(
        "canceling"
        /* InternalTaskState.CANCELING */
      );
    }
    return valid;
  }
};
var Reference = class _Reference {
  constructor(_service, location) {
    this._service = _service;
    if (location instanceof Location) {
      this._location = location;
    } else {
      this._location = Location.makeFromUrl(location, _service.host);
    }
  }
  /**
   * Returns the URL for the bucket and path this object references,
   *     in the form gs://<bucket>/<object-path>
   * @override
   */
  toString() {
    return "gs://" + this._location.bucket + "/" + this._location.path;
  }
  _newRef(service, location) {
    return new _Reference(service, location);
  }
  /**
   * A reference to the root of this object's bucket.
   */
  get root() {
    const location = new Location(this._location.bucket, "");
    return this._newRef(this._service, location);
  }
  /**
   * The name of the bucket containing this reference's object.
   */
  get bucket() {
    return this._location.bucket;
  }
  /**
   * The full path of this object.
   */
  get fullPath() {
    return this._location.path;
  }
  /**
   * The short name of this object, which is the last component of the full path.
   * For example, if fullPath is 'full/path/image.png', name is 'image.png'.
   */
  get name() {
    return lastComponent(this._location.path);
  }
  /**
   * The `StorageService` instance this `StorageReference` is associated with.
   */
  get storage() {
    return this._service;
  }
  /**
   * A `StorageReference` pointing to the parent location of this `StorageReference`, or null if
   * this reference is the root.
   */
  get parent() {
    const newPath = parent(this._location.path);
    if (newPath === null) {
      return null;
    }
    const location = new Location(this._location.bucket, newPath);
    return new _Reference(this._service, location);
  }
  /**
   * Utility function to throw an error in methods that do not accept a root reference.
   */
  _throwIfRoot(name2) {
    if (this._location.path === "") {
      throw invalidRootOperation(name2);
    }
  }
};
function getBytesInternal(ref3, maxDownloadSizeBytes) {
  ref3._throwIfRoot("getBytes");
  const requestInfo = getBytes$1(ref3.storage, ref3._location, maxDownloadSizeBytes);
  return ref3.storage.makeRequestWithTokens(requestInfo, newBytesConnection).then((bytes) => maxDownloadSizeBytes !== void 0 ? (
    // GCS may not honor the Range header for small files
    bytes.slice(0, maxDownloadSizeBytes)
  ) : bytes);
}
function getBlobInternal(ref3, maxDownloadSizeBytes) {
  ref3._throwIfRoot("getBlob");
  const requestInfo = getBytes$1(ref3.storage, ref3._location, maxDownloadSizeBytes);
  return ref3.storage.makeRequestWithTokens(requestInfo, newBlobConnection).then((blob) => maxDownloadSizeBytes !== void 0 ? (
    // GCS may not honor the Range header for small files
    blob.slice(0, maxDownloadSizeBytes)
  ) : blob);
}
function uploadBytes$1(ref3, data, metadata) {
  ref3._throwIfRoot("uploadBytes");
  const requestInfo = multipartUpload(ref3.storage, ref3._location, getMappings(), new FbsBlob(data, true), metadata);
  return ref3.storage.makeRequestWithTokens(requestInfo, newTextConnection).then((finalMetadata) => {
    return {
      metadata: finalMetadata,
      ref: ref3
    };
  });
}
function uploadBytesResumable$1(ref3, data, metadata) {
  ref3._throwIfRoot("uploadBytesResumable");
  return new UploadTask(ref3, new FbsBlob(data), metadata);
}
function uploadString$1(ref3, value, format = StringFormat.RAW, metadata) {
  ref3._throwIfRoot("uploadString");
  const data = dataFromString(format, value);
  const metadataClone = Object.assign({}, metadata);
  if (metadataClone["contentType"] == null && data.contentType != null) {
    metadataClone["contentType"] = data.contentType;
  }
  return uploadBytes$1(ref3, data.data, metadataClone);
}
function listAll$1(ref3) {
  const accumulator = {
    prefixes: [],
    items: []
  };
  return listAllHelper(ref3, accumulator).then(() => accumulator);
}
function listAllHelper(ref3, accumulator, pageToken) {
  return __async(this, null, function* () {
    const opt = {
      // maxResults is 1000 by default.
      pageToken
    };
    const nextPage = yield list$1(ref3, opt);
    accumulator.prefixes.push(...nextPage.prefixes);
    accumulator.items.push(...nextPage.items);
    if (nextPage.nextPageToken != null) {
      yield listAllHelper(ref3, accumulator, nextPage.nextPageToken);
    }
  });
}
function list$1(ref3, options) {
  if (options != null) {
    if (typeof options.maxResults === "number") {
      validateNumber(
        "options.maxResults",
        /* minValue= */
        1,
        /* maxValue= */
        1e3,
        options.maxResults
      );
    }
  }
  const op = options || {};
  const requestInfo = list$2(
    ref3.storage,
    ref3._location,
    /*delimiter= */
    "/",
    op.pageToken,
    op.maxResults
  );
  return ref3.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
function getMetadata$1(ref3) {
  ref3._throwIfRoot("getMetadata");
  const requestInfo = getMetadata$2(ref3.storage, ref3._location, getMappings());
  return ref3.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
function updateMetadata$1(ref3, metadata) {
  ref3._throwIfRoot("updateMetadata");
  const requestInfo = updateMetadata$2(ref3.storage, ref3._location, metadata, getMappings());
  return ref3.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
function getDownloadURL$1(ref3) {
  ref3._throwIfRoot("getDownloadURL");
  const requestInfo = getDownloadUrl(ref3.storage, ref3._location, getMappings());
  return ref3.storage.makeRequestWithTokens(requestInfo, newTextConnection).then((url) => {
    if (url === null) {
      throw noDownloadURL();
    }
    return url;
  });
}
function deleteObject$1(ref3) {
  ref3._throwIfRoot("deleteObject");
  const requestInfo = deleteObject$2(ref3.storage, ref3._location);
  return ref3.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
function _getChild$1(ref3, childPath) {
  const newPath = child(ref3._location.path, childPath);
  const location = new Location(ref3._location.bucket, newPath);
  return new Reference(ref3.storage, location);
}
function isUrl(path) {
  return /^[A-Za-z]+:\/\//.test(path);
}
function refFromURL(service, url) {
  return new Reference(service, url);
}
function refFromPath(ref3, path) {
  if (ref3 instanceof FirebaseStorageImpl) {
    const service = ref3;
    if (service._bucket == null) {
      throw noDefaultBucket();
    }
    const reference = new Reference(service, service._bucket);
    if (path != null) {
      return refFromPath(reference, path);
    } else {
      return reference;
    }
  } else {
    if (path !== void 0) {
      return _getChild$1(ref3, path);
    } else {
      return ref3;
    }
  }
}
function ref$1(serviceOrRef, pathOrUrl) {
  if (pathOrUrl && isUrl(pathOrUrl)) {
    if (serviceOrRef instanceof FirebaseStorageImpl) {
      return refFromURL(serviceOrRef, pathOrUrl);
    } else {
      throw invalidArgument("To use ref(service, url), the first argument must be a Storage instance.");
    }
  } else {
    return refFromPath(serviceOrRef, pathOrUrl);
  }
}
function extractBucket(host, config) {
  const bucketString = config === null || config === void 0 ? void 0 : config[CONFIG_STORAGE_BUCKET_KEY];
  if (bucketString == null) {
    return null;
  }
  return Location.makeFromBucketSpec(bucketString, host);
}
function connectStorageEmulator$1(storage, host, port, options = {}) {
  storage.host = `${host}:${port}`;
  storage._protocol = "http";
  const {
    mockUserToken
  } = options;
  if (mockUserToken) {
    storage._overrideAuthToken = typeof mockUserToken === "string" ? mockUserToken : createMockUserToken(mockUserToken, storage.app.options.projectId);
  }
}
var FirebaseStorageImpl = class {
  constructor(app, _authProvider, _appCheckProvider, _url, _firebaseVersion) {
    this.app = app;
    this._authProvider = _authProvider;
    this._appCheckProvider = _appCheckProvider;
    this._url = _url;
    this._firebaseVersion = _firebaseVersion;
    this._bucket = null;
    this._host = DEFAULT_HOST;
    this._protocol = "https";
    this._appId = null;
    this._deleted = false;
    this._maxOperationRetryTime = DEFAULT_MAX_OPERATION_RETRY_TIME;
    this._maxUploadRetryTime = DEFAULT_MAX_UPLOAD_RETRY_TIME;
    this._requests = /* @__PURE__ */ new Set();
    if (_url != null) {
      this._bucket = Location.makeFromBucketSpec(_url, this._host);
    } else {
      this._bucket = extractBucket(this._host, this.app.options);
    }
  }
  /**
   * The host string for this service, in the form of `host` or
   * `host:port`.
   */
  get host() {
    return this._host;
  }
  set host(host) {
    this._host = host;
    if (this._url != null) {
      this._bucket = Location.makeFromBucketSpec(this._url, host);
    } else {
      this._bucket = extractBucket(host, this.app.options);
    }
  }
  /**
   * The maximum time to retry uploads in milliseconds.
   */
  get maxUploadRetryTime() {
    return this._maxUploadRetryTime;
  }
  set maxUploadRetryTime(time) {
    validateNumber(
      "time",
      /* minValue=*/
      0,
      /* maxValue= */
      Number.POSITIVE_INFINITY,
      time
    );
    this._maxUploadRetryTime = time;
  }
  /**
   * The maximum time to retry operations other than uploads or downloads in
   * milliseconds.
   */
  get maxOperationRetryTime() {
    return this._maxOperationRetryTime;
  }
  set maxOperationRetryTime(time) {
    validateNumber(
      "time",
      /* minValue=*/
      0,
      /* maxValue= */
      Number.POSITIVE_INFINITY,
      time
    );
    this._maxOperationRetryTime = time;
  }
  _getAuthToken() {
    return __async(this, null, function* () {
      if (this._overrideAuthToken) {
        return this._overrideAuthToken;
      }
      const auth = this._authProvider.getImmediate({
        optional: true
      });
      if (auth) {
        const tokenData = yield auth.getToken();
        if (tokenData !== null) {
          return tokenData.accessToken;
        }
      }
      return null;
    });
  }
  _getAppCheckToken() {
    return __async(this, null, function* () {
      if (_isFirebaseServerApp(this.app) && this.app.settings.appCheckToken) {
        return this.app.settings.appCheckToken;
      }
      const appCheck = this._appCheckProvider.getImmediate({
        optional: true
      });
      if (appCheck) {
        const result = yield appCheck.getToken();
        return result.token;
      }
      return null;
    });
  }
  /**
   * Stop running requests and prevent more from being created.
   */
  _delete() {
    if (!this._deleted) {
      this._deleted = true;
      this._requests.forEach((request) => request.cancel());
      this._requests.clear();
    }
    return Promise.resolve();
  }
  /**
   * Returns a new firebaseStorage.Reference object referencing this StorageService
   * at the given Location.
   */
  _makeStorageReference(loc) {
    return new Reference(this, loc);
  }
  /**
   * @param requestInfo - HTTP RequestInfo object
   * @param authToken - Firebase auth token
   */
  _makeRequest(requestInfo, requestFactory, authToken, appCheckToken, retry = true) {
    if (!this._deleted) {
      const request = makeRequest(requestInfo, this._appId, authToken, appCheckToken, requestFactory, this._firebaseVersion, retry);
      this._requests.add(request);
      request.getPromise().then(() => this._requests.delete(request), () => this._requests.delete(request));
      return request;
    } else {
      return new FailRequest(appDeleted());
    }
  }
  makeRequestWithTokens(requestInfo, requestFactory) {
    return __async(this, null, function* () {
      const [authToken, appCheckToken] = yield Promise.all([this._getAuthToken(), this._getAppCheckToken()]);
      return this._makeRequest(requestInfo, requestFactory, authToken, appCheckToken).getPromise();
    });
  }
};
var name = "@firebase/storage";
var version = "0.13.7";
var STORAGE_TYPE = "storage";
function getBytes(ref3, maxDownloadSizeBytes) {
  ref3 = getModularInstance(ref3);
  return getBytesInternal(ref3, maxDownloadSizeBytes);
}
function uploadBytes(ref3, data, metadata) {
  ref3 = getModularInstance(ref3);
  return uploadBytes$1(ref3, data, metadata);
}
function uploadString(ref3, value, format, metadata) {
  ref3 = getModularInstance(ref3);
  return uploadString$1(ref3, value, format, metadata);
}
function uploadBytesResumable(ref3, data, metadata) {
  ref3 = getModularInstance(ref3);
  return uploadBytesResumable$1(ref3, data, metadata);
}
function getMetadata(ref3) {
  ref3 = getModularInstance(ref3);
  return getMetadata$1(ref3);
}
function updateMetadata(ref3, metadata) {
  ref3 = getModularInstance(ref3);
  return updateMetadata$1(ref3, metadata);
}
function list(ref3, options) {
  ref3 = getModularInstance(ref3);
  return list$1(ref3, options);
}
function listAll(ref3) {
  ref3 = getModularInstance(ref3);
  return listAll$1(ref3);
}
function getDownloadURL(ref3) {
  ref3 = getModularInstance(ref3);
  return getDownloadURL$1(ref3);
}
function deleteObject(ref3) {
  ref3 = getModularInstance(ref3);
  return deleteObject$1(ref3);
}
function ref(serviceOrRef, pathOrUrl) {
  serviceOrRef = getModularInstance(serviceOrRef);
  return ref$1(serviceOrRef, pathOrUrl);
}
function getStorage(app = getApp(), bucketUrl) {
  app = getModularInstance(app);
  const storageProvider = _getProvider(app, STORAGE_TYPE);
  const storageInstance = storageProvider.getImmediate({
    identifier: bucketUrl
  });
  const emulator = getDefaultEmulatorHostnameAndPort("storage");
  if (emulator) {
    connectStorageEmulator(storageInstance, ...emulator);
  }
  return storageInstance;
}
function connectStorageEmulator(storage, host, port, options = {}) {
  connectStorageEmulator$1(storage, host, port, options);
}
function getBlob(ref3, maxDownloadSizeBytes) {
  ref3 = getModularInstance(ref3);
  return getBlobInternal(ref3, maxDownloadSizeBytes);
}
function getStream(ref3, maxDownloadSizeBytes) {
  throw new Error("getStream() is only supported by NodeJS builds");
}
function factory(container, {
  instanceIdentifier: url
}) {
  const app = container.getProvider("app").getImmediate();
  const authProvider = container.getProvider("auth-internal");
  const appCheckProvider = container.getProvider("app-check-internal");
  return new FirebaseStorageImpl(app, authProvider, appCheckProvider, url, SDK_VERSION);
}
function registerStorage() {
  _registerComponent(new Component(
    STORAGE_TYPE,
    factory,
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setMultipleInstances(true));
  registerVersion(name, version, "");
  registerVersion(name, version, "esm2017");
}
registerStorage();

// node_modules/rxfire/storage/index.esm.js
function fromTask(task) {
  return new Observable(function(subscriber) {
    var lastSnapshot = null;
    var complete = false;
    var hasError = false;
    var error = null;
    var emit = function(snapshot) {
      lastSnapshot = snapshot;
      schedule();
    };
    var id = null;
    var schedule = function() {
      if (!id) {
        id = setTimeout(function() {
          id = null;
          if (lastSnapshot) subscriber.next(lastSnapshot);
          if (complete) subscriber.complete();
          if (hasError) subscriber.error(error);
        });
      }
    };
    subscriber.add(function() {
      if (id) clearTimeout(id);
    });
    emit(task.snapshot);
    subscriber.add(task.on("state_changed", emit));
    subscriber.add(from(task).subscribe({
      next: emit,
      error: function(err) {
        hasError = true;
        error = err;
        schedule();
      },
      complete: function() {
        complete = true;
        schedule();
      }
    }));
  });
}
function percentage(task) {
  return fromTask(task).pipe(map(function(snapshot) {
    return {
      progress: snapshot.bytesTransferred / snapshot.totalBytes * 100,
      snapshot
    };
  }));
}

// node_modules/@angular/fire/fesm2022/angular-fire-storage.mjs
var Storage = class {
  constructor(auth) {
    return auth;
  }
};
var STORAGE_PROVIDER_NAME = "storage";
var StorageInstances = class {
  constructor() {
    return \u0275getAllInstancesOf(STORAGE_PROVIDER_NAME);
  }
};
var storageInstance$ = timer(0, 300).pipe(concatMap(() => from(\u0275getAllInstancesOf(STORAGE_PROVIDER_NAME))), distinct());
var PROVIDED_STORAGE_INSTANCES = new InjectionToken("angularfire2.storage-instances");
function defaultStorageInstanceFactory(provided, defaultApp) {
  const defaultStorage = \u0275getDefaultInstanceOf(STORAGE_PROVIDER_NAME, provided, defaultApp);
  return defaultStorage && new Storage(defaultStorage);
}
function storageInstanceFactory(fn) {
  return (zone, injector) => {
    const storage = zone.runOutsideAngular(() => fn(injector));
    return new Storage(storage);
  };
}
var STORAGE_INSTANCES_PROVIDER = {
  provide: StorageInstances,
  deps: [[new Optional(), PROVIDED_STORAGE_INSTANCES]]
};
var DEFAULT_STORAGE_INSTANCE_PROVIDER = {
  provide: Storage,
  useFactory: defaultStorageInstanceFactory,
  deps: [[new Optional(), PROVIDED_STORAGE_INSTANCES], FirebaseApp]
};
var StorageModule = class _StorageModule {
  constructor() {
    registerVersion("angularfire", VERSION.full, "gcs");
  }
  static \u0275fac = function StorageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StorageModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _StorageModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [DEFAULT_STORAGE_INSTANCE_PROVIDER, STORAGE_INSTANCES_PROVIDER]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StorageModule, [{
    type: NgModule,
    args: [{
      providers: [DEFAULT_STORAGE_INSTANCE_PROVIDER, STORAGE_INSTANCES_PROVIDER]
    }]
  }], () => [], null);
})();
function provideStorage(fn, ...deps) {
  registerVersion("angularfire", VERSION.full, "gcs");
  return makeEnvironmentProviders([DEFAULT_STORAGE_INSTANCE_PROVIDER, STORAGE_INSTANCES_PROVIDER, {
    provide: PROVIDED_STORAGE_INSTANCES,
    useFactory: storageInstanceFactory(fn),
    multi: true,
    deps: [
      NgZone,
      Injector,
      \u0275AngularFireSchedulers,
      FirebaseApps,
      // Defensively load Auth first, if provided
      [new Optional(), AuthInstances],
      [new Optional(), AppCheckInstances],
      ...deps
    ]
  }]);
}
var fromTask2 = \u0275zoneWrap(fromTask, true);
var percentage2 = \u0275zoneWrap(percentage, true);
var connectStorageEmulator2 = \u0275zoneWrap(connectStorageEmulator, true);
var deleteObject2 = \u0275zoneWrap(deleteObject, true, 2);
var getBlob2 = \u0275zoneWrap(getBlob, true);
var getBytes2 = \u0275zoneWrap(getBytes, true);
var getDownloadURL2 = \u0275zoneWrap(getDownloadURL, true);
var getMetadata2 = \u0275zoneWrap(getMetadata, true);
var getStorage2 = \u0275zoneWrap(getStorage, true);
var getStream2 = \u0275zoneWrap(getStream, true);
var list2 = \u0275zoneWrap(list, true);
var listAll2 = \u0275zoneWrap(listAll, true);
var ref2 = \u0275zoneWrap(ref, true, 2);
var updateMetadata2 = \u0275zoneWrap(updateMetadata, true, 2);
var uploadBytes2 = \u0275zoneWrap(uploadBytes, true);
var uploadBytesResumable2 = \u0275zoneWrap(uploadBytesResumable, true);
var uploadString2 = \u0275zoneWrap(uploadString, true);

// src/app/services/firebase/user-profile.service.ts
var _UserProfileService = class _UserProfileService {
  constructor(firestore = inject(Firestore), storage, authService) {
    this.firestore = firestore;
    this.storage = storage;
    this.authService = authService;
  }
  addKid(email) {
  }
  removeKid(email) {
  }
  getUserProfile(user) {
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return docData(userProfileRef, { idField: "id" });
  }
  getUserProfileById(userId) {
    const userProfileRef = doc(this.firestore, `userProfile/${userId}`);
    return docData(userProfileRef, { idField: "id" });
  }
  setUserProfilePicture(photo) {
    return __async(this, null, function* () {
      const user = this.authService.auth.currentUser;
      const storageRef = ref2(this.storage, `userProfile/${user.uid}/profilePicture/picture.${photo.format}`);
      yield uploadString2(storageRef, photo.base64String, "base64", {});
      const url = yield getDownloadURL2(storageRef);
      const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
      return updateDoc(userProfileRef, { profilePicture: url });
    });
  }
  setUserProfile(userProfile) {
    const user = this.authService.auth.currentUser;
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return updateDoc(userProfileRef, { userProfile });
  }
  getPushDeviceList() {
    const user = this.authService.auth.currentUser;
    const pushDeviceListRef = collection(this.firestore, `userProfile/${user.uid}/push`);
    return collectionData(pushDeviceListRef, {
      idField: "id"
    });
  }
  addPushSubscriber(sub, deviceId, deviceInfo, token) {
    return __async(this, null, function* () {
      const user = this.authService.auth.currentUser;
      const pushObject = JSON.stringify(sub);
      const userProfileRef = doc(
        this.firestore,
        // `userProfile/${user.uid}/push/${deviceId.identifier}`
        `userProfile/${user.uid}/push/${deviceInfo.model}`
      );
      return setDoc(userProfileRef, {
        identifier: deviceId.identifier,
        token: token || "",
        // Set token for native Web Push
        pushObject: pushObject || "{}",
        // Set token for web push
        model: deviceInfo.model || "",
        operatingSystem: deviceInfo.operatingSystem || "",
        osVersion: deviceInfo.osVersion || "",
        platform: deviceInfo.platform || "",
        // --> set to "Web" for Web Push from Backend or "Native" for Native Push from firebase
        updated: /* @__PURE__ */ new Date()
      });
    });
  }
  deletePushDevice(deviceId) {
    return __async(this, null, function* () {
      const user = this.authService.auth.currentUser;
      const userProfileRef = doc(this.firestore, `userProfile/${user.uid}/push/${deviceId}`);
      return deleteDoc(userProfileRef);
    });
  }
  changeSettingsPush(state) {
    return __async(this, null, function* () {
      const user = this.authService.auth.currentUser;
      const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
      return updateDoc(userProfileRef, { settingsPush: state });
    });
  }
  changeSettingsPushModule(state, module) {
    return __async(this, null, function* () {
      const user = this.authService.auth.currentUser;
      const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
      return updateDoc(userProfileRef, { ["settingsPush" + module]: state });
    });
  }
  changeSettingsEmail(state) {
    return __async(this, null, function* () {
      const user = this.authService.auth.currentUser;
      const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
      return updateDoc(userProfileRef, { settingsEmail: state });
    });
  }
  changeSettingsEmailReporting(state) {
    return __async(this, null, function* () {
      const user = this.authService.auth.currentUser;
      const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
      return updateDoc(userProfileRef, { settingsEmailReporting: state });
    });
  }
  changeProfileAttribute(value, fieldname) {
    const user = this.authService.auth.currentUser;
    const userProfileRef = doc(this.firestore, `userProfile/${user.uid}`);
    return updateDoc(userProfileRef, { [fieldname]: value });
  }
};
_UserProfileService.\u0275fac = function UserProfileService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserProfileService)(\u0275\u0275inject(Firestore), \u0275\u0275inject(Storage), \u0275\u0275inject(AuthService));
};
_UserProfileService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserProfileService, factory: _UserProfileService.\u0275fac, providedIn: "root" });
var UserProfileService = _UserProfileService;

export {
  provideStorage,
  getStorage2 as getStorage,
  UserProfileService
};
/*! Bundled license information:

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2Uvc3RvcmFnZS9kaXN0L2luZGV4LmVzbTIwMTcuanMiLCJub2RlX21vZHVsZXMvcnhmaXJlL3N0b3JhZ2UvaW5kZXguZXNtLmpzIiwibm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2ZpcmUvZmVzbTIwMjIvYW5ndWxhci1maXJlLXN0b3JhZ2UubWpzIiwic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS91c2VyLXByb2ZpbGUuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfaXNGaXJlYmFzZVNlcnZlckFwcCwgX2dldFByb3ZpZGVyLCBnZXRBcHAsIF9yZWdpc3RlckNvbXBvbmVudCwgcmVnaXN0ZXJWZXJzaW9uLCBTREtfVkVSU0lPTiB9IGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHsgRmlyZWJhc2VFcnJvciwgY3JlYXRlTW9ja1VzZXJUb2tlbiwgZ2V0TW9kdWxhckluc3RhbmNlLCBnZXREZWZhdWx0RW11bGF0b3JIb3N0bmFtZUFuZFBvcnQgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogQGZpbGVvdmVydmlldyBDb25zdGFudHMgdXNlZCBpbiB0aGUgRmlyZWJhc2UgU3RvcmFnZSBsaWJyYXJ5LlxuICovXG4vKipcbiAqIERvbWFpbiBuYW1lIGZvciBmaXJlYmFzZSBzdG9yYWdlLlxuICovXG5jb25zdCBERUZBVUxUX0hPU1QgPSAnZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tJztcbi8qKlxuICogVGhlIGtleSBpbiBGaXJlYmFzZSBjb25maWcganNvbiBmb3IgdGhlIHN0b3JhZ2UgYnVja2V0LlxuICovXG5jb25zdCBDT05GSUdfU1RPUkFHRV9CVUNLRVRfS0VZID0gJ3N0b3JhZ2VCdWNrZXQnO1xuLyoqXG4gKiAyIG1pbnV0ZXNcbiAqXG4gKiBUaGUgdGltZW91dCBmb3IgYWxsIG9wZXJhdGlvbnMgZXhjZXB0IHVwbG9hZC5cbiAqL1xuY29uc3QgREVGQVVMVF9NQVhfT1BFUkFUSU9OX1JFVFJZX1RJTUUgPSAyICogNjAgKiAxMDAwO1xuLyoqXG4gKiAxMCBtaW51dGVzXG4gKlxuICogVGhlIHRpbWVvdXQgZm9yIHVwbG9hZC5cbiAqL1xuY29uc3QgREVGQVVMVF9NQVhfVVBMT0FEX1JFVFJZX1RJTUUgPSAxMCAqIDYwICogMTAwMDtcbi8qKlxuICogMSBzZWNvbmRcbiAqL1xuY29uc3QgREVGQVVMVF9NSU5fU0xFRVBfVElNRV9NSUxMSVMgPSAxMDAwO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBBbiBlcnJvciByZXR1cm5lZCBieSB0aGUgRmlyZWJhc2UgU3RvcmFnZSBTREsuXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIFN0b3JhZ2VFcnJvciBleHRlbmRzIEZpcmViYXNlRXJyb3Ige1xuICAvKipcbiAgICogQHBhcmFtIGNvZGUgLSBBIGBTdG9yYWdlRXJyb3JDb2RlYCBzdHJpbmcgdG8gYmUgcHJlZml4ZWQgd2l0aCAnc3RvcmFnZS8nIGFuZFxuICAgKiAgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgbWVzc2FnZS5cbiAgICogQHBhcmFtIG1lc3NhZ2UgIC0gRXJyb3IgbWVzc2FnZS5cbiAgICogQHBhcmFtIHN0YXR1c18gLSBDb3JyZXNwb25kaW5nIEhUVFAgU3RhdHVzIENvZGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvZGUsIG1lc3NhZ2UsIHN0YXR1c18gPSAwKSB7XG4gICAgc3VwZXIocHJlcGVuZENvZGUoY29kZSksIGBGaXJlYmFzZSBTdG9yYWdlOiAke21lc3NhZ2V9ICgke3ByZXBlbmRDb2RlKGNvZGUpfSlgKTtcbiAgICB0aGlzLnN0YXR1c18gPSBzdGF0dXNfO1xuICAgIC8qKlxuICAgICAqIFN0b3JlcyBjdXN0b20gZXJyb3IgZGF0YSB1bmlxdWUgdG8gdGhlIGBTdG9yYWdlRXJyb3JgLlxuICAgICAqL1xuICAgIHRoaXMuY3VzdG9tRGF0YSA9IHtcbiAgICAgIHNlcnZlclJlc3BvbnNlOiBudWxsXG4gICAgfTtcbiAgICB0aGlzLl9iYXNlTWVzc2FnZSA9IHRoaXMubWVzc2FnZTtcbiAgICAvLyBXaXRob3V0IHRoaXMsIGBpbnN0YW5jZW9mIFN0b3JhZ2VFcnJvcmAsIGluIHRlc3RzIGZvciBleGFtcGxlLFxuICAgIC8vIHJldHVybnMgZmFsc2UuXG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFN0b3JhZ2VFcnJvci5wcm90b3R5cGUpO1xuICB9XG4gIGdldCBzdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzXztcbiAgfVxuICBzZXQgc3RhdHVzKHN0YXR1cykge1xuICAgIHRoaXMuc3RhdHVzXyA9IHN0YXR1cztcbiAgfVxuICAvKipcbiAgICogQ29tcGFyZXMgYSBgU3RvcmFnZUVycm9yQ29kZWAgYWdhaW5zdCB0aGlzIGVycm9yJ3MgY29kZSwgZmlsdGVyaW5nIG91dCB0aGUgcHJlZml4LlxuICAgKi9cbiAgX2NvZGVFcXVhbHMoY29kZSkge1xuICAgIHJldHVybiBwcmVwZW5kQ29kZShjb2RlKSA9PT0gdGhpcy5jb2RlO1xuICB9XG4gIC8qKlxuICAgKiBPcHRpb25hbCByZXNwb25zZSBtZXNzYWdlIHRoYXQgd2FzIGFkZGVkIGJ5IHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBnZXQgc2VydmVyUmVzcG9uc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VzdG9tRGF0YS5zZXJ2ZXJSZXNwb25zZTtcbiAgfVxuICBzZXQgc2VydmVyUmVzcG9uc2Uoc2VydmVyUmVzcG9uc2UpIHtcbiAgICB0aGlzLmN1c3RvbURhdGEuc2VydmVyUmVzcG9uc2UgPSBzZXJ2ZXJSZXNwb25zZTtcbiAgICBpZiAodGhpcy5jdXN0b21EYXRhLnNlcnZlclJlc3BvbnNlKSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBgJHt0aGlzLl9iYXNlTWVzc2FnZX1cXG4ke3RoaXMuY3VzdG9tRGF0YS5zZXJ2ZXJSZXNwb25zZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLl9iYXNlTWVzc2FnZTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogQHB1YmxpY1xuICogRXJyb3IgY29kZXMgdGhhdCBjYW4gYmUgYXR0YWNoZWQgdG8gYFN0b3JhZ2VFcnJvcmAgb2JqZWN0cy5cbiAqL1xudmFyIFN0b3JhZ2VFcnJvckNvZGU7XG4oZnVuY3Rpb24gKFN0b3JhZ2VFcnJvckNvZGUpIHtcbiAgLy8gU2hhcmVkIGJldHdlZW4gYWxsIHBsYXRmb3Jtc1xuICBTdG9yYWdlRXJyb3JDb2RlW1wiVU5LTk9XTlwiXSA9IFwidW5rbm93blwiO1xuICBTdG9yYWdlRXJyb3JDb2RlW1wiT0JKRUNUX05PVF9GT1VORFwiXSA9IFwib2JqZWN0LW5vdC1mb3VuZFwiO1xuICBTdG9yYWdlRXJyb3JDb2RlW1wiQlVDS0VUX05PVF9GT1VORFwiXSA9IFwiYnVja2V0LW5vdC1mb3VuZFwiO1xuICBTdG9yYWdlRXJyb3JDb2RlW1wiUFJPSkVDVF9OT1RfRk9VTkRcIl0gPSBcInByb2plY3Qtbm90LWZvdW5kXCI7XG4gIFN0b3JhZ2VFcnJvckNvZGVbXCJRVU9UQV9FWENFRURFRFwiXSA9IFwicXVvdGEtZXhjZWVkZWRcIjtcbiAgU3RvcmFnZUVycm9yQ29kZVtcIlVOQVVUSEVOVElDQVRFRFwiXSA9IFwidW5hdXRoZW50aWNhdGVkXCI7XG4gIFN0b3JhZ2VFcnJvckNvZGVbXCJVTkFVVEhPUklaRURcIl0gPSBcInVuYXV0aG9yaXplZFwiO1xuICBTdG9yYWdlRXJyb3JDb2RlW1wiVU5BVVRIT1JJWkVEX0FQUFwiXSA9IFwidW5hdXRob3JpemVkLWFwcFwiO1xuICBTdG9yYWdlRXJyb3JDb2RlW1wiUkVUUllfTElNSVRfRVhDRUVERURcIl0gPSBcInJldHJ5LWxpbWl0LWV4Y2VlZGVkXCI7XG4gIFN0b3JhZ2VFcnJvckNvZGVbXCJJTlZBTElEX0NIRUNLU1VNXCJdID0gXCJpbnZhbGlkLWNoZWNrc3VtXCI7XG4gIFN0b3JhZ2VFcnJvckNvZGVbXCJDQU5DRUxFRFwiXSA9IFwiY2FuY2VsZWRcIjtcbiAgLy8gSlMgc3BlY2lmaWNcbiAgU3RvcmFnZUVycm9yQ29kZVtcIklOVkFMSURfRVZFTlRfTkFNRVwiXSA9IFwiaW52YWxpZC1ldmVudC1uYW1lXCI7XG4gIFN0b3JhZ2VFcnJvckNvZGVbXCJJTlZBTElEX1VSTFwiXSA9IFwiaW52YWxpZC11cmxcIjtcbiAgU3RvcmFnZUVycm9yQ29kZVtcIklOVkFMSURfREVGQVVMVF9CVUNLRVRcIl0gPSBcImludmFsaWQtZGVmYXVsdC1idWNrZXRcIjtcbiAgU3RvcmFnZUVycm9yQ29kZVtcIk5PX0RFRkFVTFRfQlVDS0VUXCJdID0gXCJuby1kZWZhdWx0LWJ1Y2tldFwiO1xuICBTdG9yYWdlRXJyb3JDb2RlW1wiQ0FOTk9UX1NMSUNFX0JMT0JcIl0gPSBcImNhbm5vdC1zbGljZS1ibG9iXCI7XG4gIFN0b3JhZ2VFcnJvckNvZGVbXCJTRVJWRVJfRklMRV9XUk9OR19TSVpFXCJdID0gXCJzZXJ2ZXItZmlsZS13cm9uZy1zaXplXCI7XG4gIFN0b3JhZ2VFcnJvckNvZGVbXCJOT19ET1dOTE9BRF9VUkxcIl0gPSBcIm5vLWRvd25sb2FkLXVybFwiO1xuICBTdG9yYWdlRXJyb3JDb2RlW1wiSU5WQUxJRF9BUkdVTUVOVFwiXSA9IFwiaW52YWxpZC1hcmd1bWVudFwiO1xuICBTdG9yYWdlRXJyb3JDb2RlW1wiSU5WQUxJRF9BUkdVTUVOVF9DT1VOVFwiXSA9IFwiaW52YWxpZC1hcmd1bWVudC1jb3VudFwiO1xuICBTdG9yYWdlRXJyb3JDb2RlW1wiQVBQX0RFTEVURURcIl0gPSBcImFwcC1kZWxldGVkXCI7XG4gIFN0b3JhZ2VFcnJvckNvZGVbXCJJTlZBTElEX1JPT1RfT1BFUkFUSU9OXCJdID0gXCJpbnZhbGlkLXJvb3Qtb3BlcmF0aW9uXCI7XG4gIFN0b3JhZ2VFcnJvckNvZGVbXCJJTlZBTElEX0ZPUk1BVFwiXSA9IFwiaW52YWxpZC1mb3JtYXRcIjtcbiAgU3RvcmFnZUVycm9yQ29kZVtcIklOVEVSTkFMX0VSUk9SXCJdID0gXCJpbnRlcm5hbC1lcnJvclwiO1xuICBTdG9yYWdlRXJyb3JDb2RlW1wiVU5TVVBQT1JURURfRU5WSVJPTk1FTlRcIl0gPSBcInVuc3VwcG9ydGVkLWVudmlyb25tZW50XCI7XG59KShTdG9yYWdlRXJyb3JDb2RlIHx8IChTdG9yYWdlRXJyb3JDb2RlID0ge30pKTtcbmZ1bmN0aW9uIHByZXBlbmRDb2RlKGNvZGUpIHtcbiAgcmV0dXJuICdzdG9yYWdlLycgKyBjb2RlO1xufVxuZnVuY3Rpb24gdW5rbm93bigpIHtcbiAgY29uc3QgbWVzc2FnZSA9ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLCBwbGVhc2UgY2hlY2sgdGhlIGVycm9yIHBheWxvYWQgZm9yICcgKyAnc2VydmVyIHJlc3BvbnNlLic7XG4gIHJldHVybiBuZXcgU3RvcmFnZUVycm9yKFN0b3JhZ2VFcnJvckNvZGUuVU5LTk9XTiwgbWVzc2FnZSk7XG59XG5mdW5jdGlvbiBvYmplY3ROb3RGb3VuZChwYXRoKSB7XG4gIHJldHVybiBuZXcgU3RvcmFnZUVycm9yKFN0b3JhZ2VFcnJvckNvZGUuT0JKRUNUX05PVF9GT1VORCwgXCJPYmplY3QgJ1wiICsgcGF0aCArIFwiJyBkb2VzIG5vdCBleGlzdC5cIik7XG59XG5mdW5jdGlvbiBxdW90YUV4Y2VlZGVkKGJ1Y2tldCkge1xuICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihTdG9yYWdlRXJyb3JDb2RlLlFVT1RBX0VYQ0VFREVELCBcIlF1b3RhIGZvciBidWNrZXQgJ1wiICsgYnVja2V0ICsgXCInIGV4Y2VlZGVkLCBwbGVhc2UgdmlldyBxdW90YSBvbiBcIiArICdodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vcHJpY2luZy8uJyk7XG59XG5mdW5jdGlvbiB1bmF1dGhlbnRpY2F0ZWQoKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSAnVXNlciBpcyBub3QgYXV0aGVudGljYXRlZCwgcGxlYXNlIGF1dGhlbnRpY2F0ZSB1c2luZyBGaXJlYmFzZSAnICsgJ0F1dGhlbnRpY2F0aW9uIGFuZCB0cnkgYWdhaW4uJztcbiAgcmV0dXJuIG5ldyBTdG9yYWdlRXJyb3IoU3RvcmFnZUVycm9yQ29kZS5VTkFVVEhFTlRJQ0FURUQsIG1lc3NhZ2UpO1xufVxuZnVuY3Rpb24gdW5hdXRob3JpemVkQXBwKCkge1xuICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihTdG9yYWdlRXJyb3JDb2RlLlVOQVVUSE9SSVpFRF9BUFAsICdUaGlzIGFwcCBkb2VzIG5vdCBoYXZlIHBlcm1pc3Npb24gdG8gYWNjZXNzIEZpcmViYXNlIFN0b3JhZ2Ugb24gdGhpcyBwcm9qZWN0LicpO1xufVxuZnVuY3Rpb24gdW5hdXRob3JpemVkKHBhdGgpIHtcbiAgcmV0dXJuIG5ldyBTdG9yYWdlRXJyb3IoU3RvcmFnZUVycm9yQ29kZS5VTkFVVEhPUklaRUQsIFwiVXNlciBkb2VzIG5vdCBoYXZlIHBlcm1pc3Npb24gdG8gYWNjZXNzICdcIiArIHBhdGggKyBcIicuXCIpO1xufVxuZnVuY3Rpb24gcmV0cnlMaW1pdEV4Y2VlZGVkKCkge1xuICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihTdG9yYWdlRXJyb3JDb2RlLlJFVFJZX0xJTUlUX0VYQ0VFREVELCAnTWF4IHJldHJ5IHRpbWUgZm9yIG9wZXJhdGlvbiBleGNlZWRlZCwgcGxlYXNlIHRyeSBhZ2Fpbi4nKTtcbn1cbmZ1bmN0aW9uIGNhbmNlbGVkKCkge1xuICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihTdG9yYWdlRXJyb3JDb2RlLkNBTkNFTEVELCAnVXNlciBjYW5jZWxlZCB0aGUgdXBsb2FkL2Rvd25sb2FkLicpO1xufVxuZnVuY3Rpb24gaW52YWxpZFVybCh1cmwpIHtcbiAgcmV0dXJuIG5ldyBTdG9yYWdlRXJyb3IoU3RvcmFnZUVycm9yQ29kZS5JTlZBTElEX1VSTCwgXCJJbnZhbGlkIFVSTCAnXCIgKyB1cmwgKyBcIicuXCIpO1xufVxuZnVuY3Rpb24gaW52YWxpZERlZmF1bHRCdWNrZXQoYnVja2V0KSB7XG4gIHJldHVybiBuZXcgU3RvcmFnZUVycm9yKFN0b3JhZ2VFcnJvckNvZGUuSU5WQUxJRF9ERUZBVUxUX0JVQ0tFVCwgXCJJbnZhbGlkIGRlZmF1bHQgYnVja2V0ICdcIiArIGJ1Y2tldCArIFwiJy5cIik7XG59XG5mdW5jdGlvbiBub0RlZmF1bHRCdWNrZXQoKSB7XG4gIHJldHVybiBuZXcgU3RvcmFnZUVycm9yKFN0b3JhZ2VFcnJvckNvZGUuTk9fREVGQVVMVF9CVUNLRVQsICdObyBkZWZhdWx0IGJ1Y2tldCAnICsgXCJmb3VuZC4gRGlkIHlvdSBzZXQgdGhlICdcIiArIENPTkZJR19TVE9SQUdFX0JVQ0tFVF9LRVkgKyBcIicgcHJvcGVydHkgd2hlbiBpbml0aWFsaXppbmcgdGhlIGFwcD9cIik7XG59XG5mdW5jdGlvbiBjYW5ub3RTbGljZUJsb2IoKSB7XG4gIHJldHVybiBuZXcgU3RvcmFnZUVycm9yKFN0b3JhZ2VFcnJvckNvZGUuQ0FOTk9UX1NMSUNFX0JMT0IsICdDYW5ub3Qgc2xpY2UgYmxvYiBmb3IgdXBsb2FkLiBQbGVhc2UgcmV0cnkgdGhlIHVwbG9hZC4nKTtcbn1cbmZ1bmN0aW9uIHNlcnZlckZpbGVXcm9uZ1NpemUoKSB7XG4gIHJldHVybiBuZXcgU3RvcmFnZUVycm9yKFN0b3JhZ2VFcnJvckNvZGUuU0VSVkVSX0ZJTEVfV1JPTkdfU0laRSwgJ1NlcnZlciByZWNvcmRlZCBpbmNvcnJlY3QgdXBsb2FkIGZpbGUgc2l6ZSwgcGxlYXNlIHJldHJ5IHRoZSB1cGxvYWQuJyk7XG59XG5mdW5jdGlvbiBub0Rvd25sb2FkVVJMKCkge1xuICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihTdG9yYWdlRXJyb3JDb2RlLk5PX0RPV05MT0FEX1VSTCwgJ1RoZSBnaXZlbiBmaWxlIGRvZXMgbm90IGhhdmUgYW55IGRvd25sb2FkIFVSTHMuJyk7XG59XG5mdW5jdGlvbiBtaXNzaW5nUG9seUZpbGwocG9seUZpbGwpIHtcbiAgcmV0dXJuIG5ldyBTdG9yYWdlRXJyb3IoU3RvcmFnZUVycm9yQ29kZS5VTlNVUFBPUlRFRF9FTlZJUk9OTUVOVCwgYCR7cG9seUZpbGx9IGlzIG1pc3NpbmcuIE1ha2Ugc3VyZSB0byBpbnN0YWxsIHRoZSByZXF1aXJlZCBwb2x5ZmlsbHMuIFNlZSBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy93ZWIvZW52aXJvbm1lbnRzLWpzLXNkayNwb2x5ZmlsbHMgZm9yIG1vcmUgaW5mb3JtYXRpb24uYCk7XG59XG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiBpbnZhbGlkQXJndW1lbnQobWVzc2FnZSkge1xuICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihTdG9yYWdlRXJyb3JDb2RlLklOVkFMSURfQVJHVU1FTlQsIG1lc3NhZ2UpO1xufVxuZnVuY3Rpb24gYXBwRGVsZXRlZCgpIHtcbiAgcmV0dXJuIG5ldyBTdG9yYWdlRXJyb3IoU3RvcmFnZUVycm9yQ29kZS5BUFBfREVMRVRFRCwgJ1RoZSBGaXJlYmFzZSBhcHAgd2FzIGRlbGV0ZWQuJyk7XG59XG4vKipcbiAqIEBwYXJhbSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIG9wZXJhdGlvbiB0aGF0IHdhcyBpbnZhbGlkLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiBpbnZhbGlkUm9vdE9wZXJhdGlvbihuYW1lKSB7XG4gIHJldHVybiBuZXcgU3RvcmFnZUVycm9yKFN0b3JhZ2VFcnJvckNvZGUuSU5WQUxJRF9ST09UX09QRVJBVElPTiwgXCJUaGUgb3BlcmF0aW9uICdcIiArIG5hbWUgKyBcIicgY2Fubm90IGJlIHBlcmZvcm1lZCBvbiBhIHJvb3QgcmVmZXJlbmNlLCBjcmVhdGUgYSBub24tcm9vdCBcIiArIFwicmVmZXJlbmNlIHVzaW5nIGNoaWxkLCBzdWNoIGFzIC5jaGlsZCgnZmlsZS5wbmcnKS5cIik7XG59XG4vKipcbiAqIEBwYXJhbSBmb3JtYXQgLSBUaGUgZm9ybWF0IHRoYXQgd2FzIG5vdCB2YWxpZC5cbiAqIEBwYXJhbSBtZXNzYWdlIC0gQSBtZXNzYWdlIGRlc2NyaWJpbmcgdGhlIGZvcm1hdCB2aW9sYXRpb24uXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRGb3JtYXQoZm9ybWF0LCBtZXNzYWdlKSB7XG4gIHJldHVybiBuZXcgU3RvcmFnZUVycm9yKFN0b3JhZ2VFcnJvckNvZGUuSU5WQUxJRF9GT1JNQVQsIFwiU3RyaW5nIGRvZXMgbm90IG1hdGNoIGZvcm1hdCAnXCIgKyBmb3JtYXQgKyBcIic6IFwiICsgbWVzc2FnZSk7XG59XG4vKipcbiAqIEBwYXJhbSBtZXNzYWdlIC0gQSBtZXNzYWdlIGRlc2NyaWJpbmcgdGhlIGludGVybmFsIGVycm9yLlxuICovXG5mdW5jdGlvbiBpbnRlcm5hbEVycm9yKG1lc3NhZ2UpIHtcbiAgdGhyb3cgbmV3IFN0b3JhZ2VFcnJvcihTdG9yYWdlRXJyb3JDb2RlLklOVEVSTkFMX0VSUk9SLCAnSW50ZXJuYWwgZXJyb3I6ICcgKyBtZXNzYWdlKTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogRmlyZWJhc2UgU3RvcmFnZSBsb2NhdGlvbiBkYXRhLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5jbGFzcyBMb2NhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGJ1Y2tldCwgcGF0aCkge1xuICAgIHRoaXMuYnVja2V0ID0gYnVja2V0O1xuICAgIHRoaXMucGF0aF8gPSBwYXRoO1xuICB9XG4gIGdldCBwYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGhfO1xuICB9XG4gIGdldCBpc1Jvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5sZW5ndGggPT09IDA7XG4gIH1cbiAgZnVsbFNlcnZlclVybCgpIHtcbiAgICBjb25zdCBlbmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnQ7XG4gICAgcmV0dXJuICcvYi8nICsgZW5jb2RlKHRoaXMuYnVja2V0KSArICcvby8nICsgZW5jb2RlKHRoaXMucGF0aCk7XG4gIH1cbiAgYnVja2V0T25seVNlcnZlclVybCgpIHtcbiAgICBjb25zdCBlbmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnQ7XG4gICAgcmV0dXJuICcvYi8nICsgZW5jb2RlKHRoaXMuYnVja2V0KSArICcvbyc7XG4gIH1cbiAgc3RhdGljIG1ha2VGcm9tQnVja2V0U3BlYyhidWNrZXRTdHJpbmcsIGhvc3QpIHtcbiAgICBsZXQgYnVja2V0TG9jYXRpb247XG4gICAgdHJ5IHtcbiAgICAgIGJ1Y2tldExvY2F0aW9uID0gTG9jYXRpb24ubWFrZUZyb21VcmwoYnVja2V0U3RyaW5nLCBob3N0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBOb3QgdmFsaWQgVVJMLCB1c2UgYXMtaXMuIFRoaXMgbGV0cyB5b3UgcHV0IGJhcmUgYnVja2V0IG5hbWVzIGluXG4gICAgICAvLyBjb25maWcuXG4gICAgICByZXR1cm4gbmV3IExvY2F0aW9uKGJ1Y2tldFN0cmluZywgJycpO1xuICAgIH1cbiAgICBpZiAoYnVja2V0TG9jYXRpb24ucGF0aCA9PT0gJycpIHtcbiAgICAgIHJldHVybiBidWNrZXRMb2NhdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgaW52YWxpZERlZmF1bHRCdWNrZXQoYnVja2V0U3RyaW5nKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIG1ha2VGcm9tVXJsKHVybCwgaG9zdCkge1xuICAgIGxldCBsb2NhdGlvbiA9IG51bGw7XG4gICAgY29uc3QgYnVja2V0RG9tYWluID0gJyhbQS1aYS16MC05LlxcXFwtX10rKSc7XG4gICAgZnVuY3Rpb24gZ3NNb2RpZnkobG9jKSB7XG4gICAgICBpZiAobG9jLnBhdGguY2hhckF0KGxvYy5wYXRoLmxlbmd0aCAtIDEpID09PSAnLycpIHtcbiAgICAgICAgbG9jLnBhdGhfID0gbG9jLnBhdGhfLnNsaWNlKDAsIC0xKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZ3NQYXRoID0gJygvKC4qKSk/JCc7XG4gICAgY29uc3QgZ3NSZWdleCA9IG5ldyBSZWdFeHAoJ15nczovLycgKyBidWNrZXREb21haW4gKyBnc1BhdGgsICdpJyk7XG4gICAgY29uc3QgZ3NJbmRpY2VzID0ge1xuICAgICAgYnVja2V0OiAxLFxuICAgICAgcGF0aDogM1xuICAgIH07XG4gICAgZnVuY3Rpb24gaHR0cE1vZGlmeShsb2MpIHtcbiAgICAgIGxvYy5wYXRoXyA9IGRlY29kZVVSSUNvbXBvbmVudChsb2MucGF0aCk7XG4gICAgfVxuICAgIGNvbnN0IHZlcnNpb24gPSAndltBLVphLXowLTlfXSsnO1xuICAgIGNvbnN0IGZpcmViYXNlU3RvcmFnZUhvc3QgPSBob3N0LnJlcGxhY2UoL1suXS9nLCAnXFxcXC4nKTtcbiAgICBjb25zdCBmaXJlYmFzZVN0b3JhZ2VQYXRoID0gJygvKFtePyNdKikuKik/JCc7XG4gICAgY29uc3QgZmlyZWJhc2VTdG9yYWdlUmVnRXhwID0gbmV3IFJlZ0V4cChgXmh0dHBzPzovLyR7ZmlyZWJhc2VTdG9yYWdlSG9zdH0vJHt2ZXJzaW9ufS9iLyR7YnVja2V0RG9tYWlufS9vJHtmaXJlYmFzZVN0b3JhZ2VQYXRofWAsICdpJyk7XG4gICAgY29uc3QgZmlyZWJhc2VTdG9yYWdlSW5kaWNlcyA9IHtcbiAgICAgIGJ1Y2tldDogMSxcbiAgICAgIHBhdGg6IDNcbiAgICB9O1xuICAgIGNvbnN0IGNsb3VkU3RvcmFnZUhvc3QgPSBob3N0ID09PSBERUZBVUxUX0hPU1QgPyAnKD86c3RvcmFnZS5nb29nbGVhcGlzLmNvbXxzdG9yYWdlLmNsb3VkLmdvb2dsZS5jb20pJyA6IGhvc3Q7XG4gICAgY29uc3QgY2xvdWRTdG9yYWdlUGF0aCA9ICcoW14/I10qKSc7XG4gICAgY29uc3QgY2xvdWRTdG9yYWdlUmVnRXhwID0gbmV3IFJlZ0V4cChgXmh0dHBzPzovLyR7Y2xvdWRTdG9yYWdlSG9zdH0vJHtidWNrZXREb21haW59LyR7Y2xvdWRTdG9yYWdlUGF0aH1gLCAnaScpO1xuICAgIGNvbnN0IGNsb3VkU3RvcmFnZUluZGljZXMgPSB7XG4gICAgICBidWNrZXQ6IDEsXG4gICAgICBwYXRoOiAyXG4gICAgfTtcbiAgICBjb25zdCBncm91cHMgPSBbe1xuICAgICAgcmVnZXg6IGdzUmVnZXgsXG4gICAgICBpbmRpY2VzOiBnc0luZGljZXMsXG4gICAgICBwb3N0TW9kaWZ5OiBnc01vZGlmeVxuICAgIH0sIHtcbiAgICAgIHJlZ2V4OiBmaXJlYmFzZVN0b3JhZ2VSZWdFeHAsXG4gICAgICBpbmRpY2VzOiBmaXJlYmFzZVN0b3JhZ2VJbmRpY2VzLFxuICAgICAgcG9zdE1vZGlmeTogaHR0cE1vZGlmeVxuICAgIH0sIHtcbiAgICAgIHJlZ2V4OiBjbG91ZFN0b3JhZ2VSZWdFeHAsXG4gICAgICBpbmRpY2VzOiBjbG91ZFN0b3JhZ2VJbmRpY2VzLFxuICAgICAgcG9zdE1vZGlmeTogaHR0cE1vZGlmeVxuICAgIH1dO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBncm91cCA9IGdyb3Vwc1tpXTtcbiAgICAgIGNvbnN0IGNhcHR1cmVzID0gZ3JvdXAucmVnZXguZXhlYyh1cmwpO1xuICAgICAgaWYgKGNhcHR1cmVzKSB7XG4gICAgICAgIGNvbnN0IGJ1Y2tldFZhbHVlID0gY2FwdHVyZXNbZ3JvdXAuaW5kaWNlcy5idWNrZXRdO1xuICAgICAgICBsZXQgcGF0aFZhbHVlID0gY2FwdHVyZXNbZ3JvdXAuaW5kaWNlcy5wYXRoXTtcbiAgICAgICAgaWYgKCFwYXRoVmFsdWUpIHtcbiAgICAgICAgICBwYXRoVmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBsb2NhdGlvbiA9IG5ldyBMb2NhdGlvbihidWNrZXRWYWx1ZSwgcGF0aFZhbHVlKTtcbiAgICAgICAgZ3JvdXAucG9zdE1vZGlmeShsb2NhdGlvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobG9jYXRpb24gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgaW52YWxpZFVybCh1cmwpO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYXRpb247XG4gIH1cbn1cblxuLyoqXG4gKiBBIHJlcXVlc3Qgd2hvc2UgcHJvbWlzZSBhbHdheXMgZmFpbHMuXG4gKi9cbmNsYXNzIEZhaWxSZXF1ZXN0IHtcbiAgY29uc3RydWN0b3IoZXJyb3IpIHtcbiAgICB0aGlzLnByb21pc2VfID0gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG4gIC8qKiBAaW5oZXJpdERvYyAqL1xuICBnZXRQcm9taXNlKCkge1xuICAgIHJldHVybiB0aGlzLnByb21pc2VfO1xuICB9XG4gIC8qKiBAaW5oZXJpdERvYyAqL1xuICBjYW5jZWwoX2FwcERlbGV0ZSA9IGZhbHNlKSB7fVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBBY2NlcHRzIGEgY2FsbGJhY2sgZm9yIGFuIGFjdGlvbiB0byBwZXJmb3JtIChgZG9SZXF1ZXN0YCksXG4gKiBhbmQgdGhlbiBhIGNhbGxiYWNrIGZvciB3aGVuIHRoZSBiYWNrb2ZmIGhhcyBjb21wbGV0ZWQgKGBiYWNrb2ZmQ29tcGxldGVDYmApLlxuICogVGhlIGNhbGxiYWNrIHNlbnQgdG8gc3RhcnQgcmVxdWlyZXMgYW4gYXJndW1lbnQgdG8gY2FsbCAoYG9uUmVxdWVzdENvbXBsZXRlYCkuXG4gKiBXaGVuIGBzdGFydGAgY2FsbHMgYGRvUmVxdWVzdGAsIGl0IHBhc3NlcyBhIGNhbGxiYWNrIGZvciB3aGVuIHRoZSByZXF1ZXN0IGhhc1xuICogY29tcGxldGVkLCBgb25SZXF1ZXN0Q29tcGxldGVgLiBCYXNlZCBvbiB0aGlzLCB0aGUgYmFja29mZiBjb250aW51ZXMsIHdpdGhcbiAqIGFub3RoZXIgY2FsbCB0byBgZG9SZXF1ZXN0YCBhbmQgdGhlIGFib3ZlIGxvb3AgY29udGludWVzIHVudGlsIHRoZSB0aW1lb3V0XG4gKiBpcyBoaXQsIG9yIGEgc3VjY2Vzc2Z1bCByZXNwb25zZSBvY2N1cnMuXG4gKiBAZGVzY3JpcHRpb25cbiAqIEBwYXJhbSBkb1JlcXVlc3QgQ2FsbGJhY2sgdG8gcGVyZm9ybSByZXF1ZXN0XG4gKiBAcGFyYW0gYmFja29mZkNvbXBsZXRlQ2IgQ2FsbGJhY2sgdG8gY2FsbCB3aGVuIGJhY2tvZmYgaGFzIGJlZW4gY29tcGxldGVkXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0KGRvUmVxdWVzdCxcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5iYWNrb2ZmQ29tcGxldGVDYiwgdGltZW91dCkge1xuICAvLyBUT0RPKGFuZHlzb3RvKTogbWFrZSB0aGlzIGNvZGUgY2xlYW5lciAocHJvYmFibHkgcmVmYWN0b3IgaW50byBhbiBhY3R1YWxcbiAgLy8gdHlwZSBpbnN0ZWFkIG9mIGEgYnVuY2ggb2YgZnVuY3Rpb25zIHdpdGggc3RhdGUgc2hhcmVkIGluIHRoZSBjbG9zdXJlKVxuICBsZXQgd2FpdFNlY29uZHMgPSAxO1xuICAvLyBXb3VsZCB0eXBlIHRoaXMgYXMgXCJudW1iZXJcIiBidXQgdGhhdCBkb2Vzbid0IHdvcmsgZm9yIE5vZGUgc28gwq9cXF8o44OEKV8vwq9cbiAgLy8gVE9ETzogZmluZCBhIHdheSB0byBleGNsdWRlIE5vZGUgdHlwZSBkZWZpbml0aW9uIGZvciBzdG9yYWdlIGJlY2F1c2Ugc3RvcmFnZSBvbmx5IHdvcmtzIGluIGJyb3dzZXJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgbGV0IHJldHJ5VGltZW91dElkID0gbnVsbDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgbGV0IGdsb2JhbFRpbWVvdXRJZCA9IG51bGw7XG4gIGxldCBoaXRUaW1lb3V0ID0gZmFsc2U7XG4gIGxldCBjYW5jZWxTdGF0ZSA9IDA7XG4gIGZ1bmN0aW9uIGNhbmNlbGVkKCkge1xuICAgIHJldHVybiBjYW5jZWxTdGF0ZSA9PT0gMjtcbiAgfVxuICBsZXQgdHJpZ2dlcmVkQ2FsbGJhY2sgPSBmYWxzZTtcbiAgZnVuY3Rpb24gdHJpZ2dlckNhbGxiYWNrKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRyaWdnZXJlZENhbGxiYWNrKSB7XG4gICAgICB0cmlnZ2VyZWRDYWxsYmFjayA9IHRydWU7XG4gICAgICBiYWNrb2ZmQ29tcGxldGVDYi5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY2FsbFdpdGhEZWxheShtaWxsaXMpIHtcbiAgICByZXRyeVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmV0cnlUaW1lb3V0SWQgPSBudWxsO1xuICAgICAgZG9SZXF1ZXN0KHJlc3BvbnNlSGFuZGxlciwgY2FuY2VsZWQoKSk7XG4gICAgfSwgbWlsbGlzKTtcbiAgfVxuICBmdW5jdGlvbiBjbGVhckdsb2JhbFRpbWVvdXQoKSB7XG4gICAgaWYgKGdsb2JhbFRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGdsb2JhbFRpbWVvdXRJZCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHJlc3BvbnNlSGFuZGxlcihzdWNjZXNzLCAuLi5hcmdzKSB7XG4gICAgaWYgKHRyaWdnZXJlZENhbGxiYWNrKSB7XG4gICAgICBjbGVhckdsb2JhbFRpbWVvdXQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIGNsZWFyR2xvYmFsVGltZW91dCgpO1xuICAgICAgdHJpZ2dlckNhbGxiYWNrLmNhbGwobnVsbCwgc3VjY2VzcywgLi4uYXJncyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG11c3RTdG9wID0gY2FuY2VsZWQoKSB8fCBoaXRUaW1lb3V0O1xuICAgIGlmIChtdXN0U3RvcCkge1xuICAgICAgY2xlYXJHbG9iYWxUaW1lb3V0KCk7XG4gICAgICB0cmlnZ2VyQ2FsbGJhY2suY2FsbChudWxsLCBzdWNjZXNzLCAuLi5hcmdzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdhaXRTZWNvbmRzIDwgNjQpIHtcbiAgICAgIC8qIFRPRE8oYW5keXNvdG8pOiBkb24ndCBiYWNrIG9mZiBzbyBxdWlja2x5IGlmIHdlIGtub3cgd2UncmUgb2ZmbGluZS4gKi9cbiAgICAgIHdhaXRTZWNvbmRzICo9IDI7XG4gICAgfVxuICAgIGxldCB3YWl0TWlsbGlzO1xuICAgIGlmIChjYW5jZWxTdGF0ZSA9PT0gMSkge1xuICAgICAgY2FuY2VsU3RhdGUgPSAyO1xuICAgICAgd2FpdE1pbGxpcyA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhaXRNaWxsaXMgPSAod2FpdFNlY29uZHMgKyBNYXRoLnJhbmRvbSgpKSAqIDEwMDA7XG4gICAgfVxuICAgIGNhbGxXaXRoRGVsYXkod2FpdE1pbGxpcyk7XG4gIH1cbiAgbGV0IHN0b3BwZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gc3RvcCh3YXNUaW1lb3V0KSB7XG4gICAgaWYgKHN0b3BwZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3RvcHBlZCA9IHRydWU7XG4gICAgY2xlYXJHbG9iYWxUaW1lb3V0KCk7XG4gICAgaWYgKHRyaWdnZXJlZENhbGxiYWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChyZXRyeVRpbWVvdXRJZCAhPT0gbnVsbCkge1xuICAgICAgaWYgKCF3YXNUaW1lb3V0KSB7XG4gICAgICAgIGNhbmNlbFN0YXRlID0gMjtcbiAgICAgIH1cbiAgICAgIGNsZWFyVGltZW91dChyZXRyeVRpbWVvdXRJZCk7XG4gICAgICBjYWxsV2l0aERlbGF5KDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXdhc1RpbWVvdXQpIHtcbiAgICAgICAgY2FuY2VsU3RhdGUgPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjYWxsV2l0aERlbGF5KDApO1xuICBnbG9iYWxUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBoaXRUaW1lb3V0ID0gdHJ1ZTtcbiAgICBzdG9wKHRydWUpO1xuICB9LCB0aW1lb3V0KTtcbiAgcmV0dXJuIHN0b3A7XG59XG4vKipcbiAqIFN0b3BzIHRoZSByZXRyeSBsb29wIGZyb20gcmVwZWF0aW5nLlxuICogSWYgdGhlIGZ1bmN0aW9uIGlzIGN1cnJlbnRseSBcImluIGJldHdlZW5cIiByZXRyaWVzLCBpdCBpcyBpbnZva2VkIGltbWVkaWF0ZWx5XG4gKiB3aXRoIHRoZSBzZWNvbmQgcGFyYW1ldGVyIGFzIFwidHJ1ZVwiLiBPdGhlcndpc2UsIGl0IHdpbGwgYmUgaW52b2tlZCBvbmNlIG1vcmVcbiAqIGFmdGVyIHRoZSBjdXJyZW50IGludm9jYXRpb24gZmluaXNoZXMgaWZmIHRoZSBjdXJyZW50IGludm9jYXRpb24gd291bGQgaGF2ZVxuICogdHJpZ2dlcmVkIGFub3RoZXIgcmV0cnkuXG4gKi9cbmZ1bmN0aW9uIHN0b3AoaWQpIHtcbiAgaWQoZmFsc2UpO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZnVuY3Rpb24gaXNKdXN0RGVmKHApIHtcbiAgcmV0dXJuIHAgIT09IHZvaWQgMDtcbn1cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHApIHtcbiAgcmV0dXJuIHR5cGVvZiBwID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gaXNOb25BcnJheU9iamVjdChwKSB7XG4gIHJldHVybiB0eXBlb2YgcCA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocCk7XG59XG5mdW5jdGlvbiBpc1N0cmluZyhwKSB7XG4gIHJldHVybiB0eXBlb2YgcCA9PT0gJ3N0cmluZycgfHwgcCBpbnN0YW5jZW9mIFN0cmluZztcbn1cbmZ1bmN0aW9uIGlzTmF0aXZlQmxvYihwKSB7XG4gIHJldHVybiBpc05hdGl2ZUJsb2JEZWZpbmVkKCkgJiYgcCBpbnN0YW5jZW9mIEJsb2I7XG59XG5mdW5jdGlvbiBpc05hdGl2ZUJsb2JEZWZpbmVkKCkge1xuICByZXR1cm4gdHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVOdW1iZXIoYXJndW1lbnQsIG1pblZhbHVlLCBtYXhWYWx1ZSwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlIDwgbWluVmFsdWUpIHtcbiAgICB0aHJvdyBpbnZhbGlkQXJndW1lbnQoYEludmFsaWQgdmFsdWUgZm9yICcke2FyZ3VtZW50fScuIEV4cGVjdGVkICR7bWluVmFsdWV9IG9yIGdyZWF0ZXIuYCk7XG4gIH1cbiAgaWYgKHZhbHVlID4gbWF4VmFsdWUpIHtcbiAgICB0aHJvdyBpbnZhbGlkQXJndW1lbnQoYEludmFsaWQgdmFsdWUgZm9yICcke2FyZ3VtZW50fScuIEV4cGVjdGVkICR7bWF4VmFsdWV9IG9yIGxlc3MuYCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmZ1bmN0aW9uIG1ha2VVcmwodXJsUGFydCwgaG9zdCwgcHJvdG9jb2wpIHtcbiAgbGV0IG9yaWdpbiA9IGhvc3Q7XG4gIGlmIChwcm90b2NvbCA9PSBudWxsKSB7XG4gICAgb3JpZ2luID0gYGh0dHBzOi8vJHtob3N0fWA7XG4gIH1cbiAgcmV0dXJuIGAke3Byb3RvY29sfTovLyR7b3JpZ2lufS92MCR7dXJsUGFydH1gO1xufVxuZnVuY3Rpb24gbWFrZVF1ZXJ5U3RyaW5nKHBhcmFtcykge1xuICBjb25zdCBlbmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnQ7XG4gIGxldCBxdWVyeVBhcnQgPSAnPyc7XG4gIGZvciAoY29uc3Qga2V5IGluIHBhcmFtcykge1xuICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29uc3QgbmV4dFBhcnQgPSBlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZShwYXJhbXNba2V5XSk7XG4gICAgICBxdWVyeVBhcnQgPSBxdWVyeVBhcnQgKyBuZXh0UGFydCArICcmJztcbiAgICB9XG4gIH1cbiAgLy8gQ2hvcCBvZmYgdGhlIGV4dHJhICcmJyBvciAnPycgb24gdGhlIGVuZFxuICBxdWVyeVBhcnQgPSBxdWVyeVBhcnQuc2xpY2UoMCwgLTEpO1xuICByZXR1cm4gcXVlcnlQYXJ0O1xufVxuXG4vKipcbiAqIEVycm9yIGNvZGVzIGZvciByZXF1ZXN0cyBtYWRlIGJ5IHRoZSBYaHJJbyB3cmFwcGVyLlxuICovXG52YXIgRXJyb3JDb2RlO1xuKGZ1bmN0aW9uIChFcnJvckNvZGUpIHtcbiAgRXJyb3JDb2RlW0Vycm9yQ29kZVtcIk5PX0VSUk9SXCJdID0gMF0gPSBcIk5PX0VSUk9SXCI7XG4gIEVycm9yQ29kZVtFcnJvckNvZGVbXCJORVRXT1JLX0VSUk9SXCJdID0gMV0gPSBcIk5FVFdPUktfRVJST1JcIjtcbiAgRXJyb3JDb2RlW0Vycm9yQ29kZVtcIkFCT1JUXCJdID0gMl0gPSBcIkFCT1JUXCI7XG59KShFcnJvckNvZGUgfHwgKEVycm9yQ29kZSA9IHt9KSk7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIyIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIENoZWNrcyB0aGUgc3RhdHVzIGNvZGUgdG8gc2VlIGlmIHRoZSBhY3Rpb24gc2hvdWxkIGJlIHJldHJpZWQuXG4gKlxuICogQHBhcmFtIHN0YXR1cyBDdXJyZW50IEhUVFAgc3RhdHVzIGNvZGUgcmV0dXJuZWQgYnkgc2VydmVyLlxuICogQHBhcmFtIGFkZGl0aW9uYWxSZXRyeUNvZGVzIGFkZGl0aW9uYWwgcmV0cnkgY29kZXMgdG8gY2hlY2sgYWdhaW5zdFxuICovXG5mdW5jdGlvbiBpc1JldHJ5U3RhdHVzQ29kZShzdGF0dXMsIGFkZGl0aW9uYWxSZXRyeUNvZGVzKSB7XG4gIC8vIFRoZSBjb2RlcyBmb3Igd2hpY2ggdG8gcmV0cnkgY2FtZSBmcm9tIHRoaXMgcGFnZTpcbiAgLy8gaHR0cHM6Ly9jbG91ZC5nb29nbGUuY29tL3N0b3JhZ2UvZG9jcy9leHBvbmVudGlhbC1iYWNrb2ZmXG4gIGNvbnN0IGlzRml2ZUh1bmRyZWRDb2RlID0gc3RhdHVzID49IDUwMCAmJiBzdGF0dXMgPCA2MDA7XG4gIGNvbnN0IGV4dHJhUmV0cnlDb2RlcyA9IFtcbiAgLy8gUmVxdWVzdCBUaW1lb3V0OiB3ZWIgc2VydmVyIGRpZG4ndCByZWNlaXZlIGZ1bGwgcmVxdWVzdCBpbiB0aW1lLlxuICA0MDgsXG4gIC8vIFRvbyBNYW55IFJlcXVlc3RzOiB5b3UncmUgZ2V0dGluZyByYXRlLWxpbWl0ZWQsIGJhc2ljYWxseS5cbiAgNDI5XTtcbiAgY29uc3QgaXNFeHRyYVJldHJ5Q29kZSA9IGV4dHJhUmV0cnlDb2Rlcy5pbmRleE9mKHN0YXR1cykgIT09IC0xO1xuICBjb25zdCBpc0FkZGl0aW9uYWxSZXRyeUNvZGUgPSBhZGRpdGlvbmFsUmV0cnlDb2Rlcy5pbmRleE9mKHN0YXR1cykgIT09IC0xO1xuICByZXR1cm4gaXNGaXZlSHVuZHJlZENvZGUgfHwgaXNFeHRyYVJldHJ5Q29kZSB8fCBpc0FkZGl0aW9uYWxSZXRyeUNvZGU7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIEhhbmRsZXMgbmV0d29yayBsb2dpYyBmb3IgYWxsIFN0b3JhZ2UgUmVxdWVzdHMsIGluY2x1ZGluZyBlcnJvciByZXBvcnRpbmcgYW5kXG4gKiByZXRyaWVzIHdpdGggYmFja29mZi5cbiAqXG4gKiBAcGFyYW0gSSAtIHRoZSB0eXBlIG9mIHRoZSBiYWNrZW5kJ3MgbmV0d29yayByZXNwb25zZS5cbiAqIEBwYXJhbSAtIE8gdGhlIG91dHB1dCB0eXBlIHVzZWQgYnkgdGhlIHJlc3Qgb2YgdGhlIFNESy4gVGhlIGNvbnZlcnNpb25cbiAqIGhhcHBlbnMgaW4gdGhlIHNwZWNpZmllZCBgY2FsbGJhY2tfYC5cbiAqL1xuY2xhc3MgTmV0d29ya1JlcXVlc3Qge1xuICBjb25zdHJ1Y3Rvcih1cmxfLCBtZXRob2RfLCBoZWFkZXJzXywgYm9keV8sIHN1Y2Nlc3NDb2Rlc18sIGFkZGl0aW9uYWxSZXRyeUNvZGVzXywgY2FsbGJhY2tfLCBlcnJvckNhbGxiYWNrXywgdGltZW91dF8sIHByb2dyZXNzQ2FsbGJhY2tfLCBjb25uZWN0aW9uRmFjdG9yeV8sIHJldHJ5ID0gdHJ1ZSkge1xuICAgIHRoaXMudXJsXyA9IHVybF87XG4gICAgdGhpcy5tZXRob2RfID0gbWV0aG9kXztcbiAgICB0aGlzLmhlYWRlcnNfID0gaGVhZGVyc187XG4gICAgdGhpcy5ib2R5XyA9IGJvZHlfO1xuICAgIHRoaXMuc3VjY2Vzc0NvZGVzXyA9IHN1Y2Nlc3NDb2Rlc187XG4gICAgdGhpcy5hZGRpdGlvbmFsUmV0cnlDb2Rlc18gPSBhZGRpdGlvbmFsUmV0cnlDb2Rlc187XG4gICAgdGhpcy5jYWxsYmFja18gPSBjYWxsYmFja187XG4gICAgdGhpcy5lcnJvckNhbGxiYWNrXyA9IGVycm9yQ2FsbGJhY2tfO1xuICAgIHRoaXMudGltZW91dF8gPSB0aW1lb3V0XztcbiAgICB0aGlzLnByb2dyZXNzQ2FsbGJhY2tfID0gcHJvZ3Jlc3NDYWxsYmFja187XG4gICAgdGhpcy5jb25uZWN0aW9uRmFjdG9yeV8gPSBjb25uZWN0aW9uRmFjdG9yeV87XG4gICAgdGhpcy5yZXRyeSA9IHJldHJ5O1xuICAgIHRoaXMucGVuZGluZ0Nvbm5lY3Rpb25fID0gbnVsbDtcbiAgICB0aGlzLmJhY2tvZmZJZF8gPSBudWxsO1xuICAgIHRoaXMuY2FuY2VsZWRfID0gZmFsc2U7XG4gICAgdGhpcy5hcHBEZWxldGVfID0gZmFsc2U7XG4gICAgdGhpcy5wcm9taXNlXyA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMucmVzb2x2ZV8gPSByZXNvbHZlO1xuICAgICAgdGhpcy5yZWplY3RfID0gcmVqZWN0O1xuICAgICAgdGhpcy5zdGFydF8oKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQWN0dWFsbHkgc3RhcnRzIHRoZSByZXRyeSBsb29wLlxuICAgKi9cbiAgc3RhcnRfKCkge1xuICAgIGNvbnN0IGRvVGhlUmVxdWVzdCA9IChiYWNrb2ZmQ2FsbGJhY2ssIGNhbmNlbGVkKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsZWQpIHtcbiAgICAgICAgYmFja29mZkNhbGxiYWNrKGZhbHNlLCBuZXcgUmVxdWVzdEVuZFN0YXR1cyhmYWxzZSwgbnVsbCwgdHJ1ZSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjb25uZWN0aW9uID0gdGhpcy5jb25uZWN0aW9uRmFjdG9yeV8oKTtcbiAgICAgIHRoaXMucGVuZGluZ0Nvbm5lY3Rpb25fID0gY29ubmVjdGlvbjtcbiAgICAgIGNvbnN0IHByb2dyZXNzTGlzdGVuZXIgPSBwcm9ncmVzc0V2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgbG9hZGVkID0gcHJvZ3Jlc3NFdmVudC5sb2FkZWQ7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gcHJvZ3Jlc3NFdmVudC5sZW5ndGhDb21wdXRhYmxlID8gcHJvZ3Jlc3NFdmVudC50b3RhbCA6IC0xO1xuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0NhbGxiYWNrXyAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMucHJvZ3Jlc3NDYWxsYmFja18obG9hZGVkLCB0b3RhbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpZiAodGhpcy5wcm9ncmVzc0NhbGxiYWNrXyAhPT0gbnVsbCkge1xuICAgICAgICBjb25uZWN0aW9uLmFkZFVwbG9hZFByb2dyZXNzTGlzdGVuZXIocHJvZ3Jlc3NMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICAvLyBjb25uZWN0aW9uLnNlbmQoKSBuZXZlciByZWplY3RzLCBzbyB3ZSBkb24ndCBuZWVkIHRvIGhhdmUgYSBlcnJvciBoYW5kbGVyIG9yIHVzZSBjYXRjaCBvbiB0aGUgcmV0dXJuZWQgcHJvbWlzZS5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgICAgIGNvbm5lY3Rpb24uc2VuZCh0aGlzLnVybF8sIHRoaXMubWV0aG9kXywgdGhpcy5ib2R5XywgdGhpcy5oZWFkZXJzXykudGhlbigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzQ2FsbGJhY2tfICE9PSBudWxsKSB7XG4gICAgICAgICAgY29ubmVjdGlvbi5yZW1vdmVVcGxvYWRQcm9ncmVzc0xpc3RlbmVyKHByb2dyZXNzTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGVuZGluZ0Nvbm5lY3Rpb25fID0gbnVsbDtcbiAgICAgICAgY29uc3QgaGl0U2VydmVyID0gY29ubmVjdGlvbi5nZXRFcnJvckNvZGUoKSA9PT0gRXJyb3JDb2RlLk5PX0VSUk9SO1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBjb25uZWN0aW9uLmdldFN0YXR1cygpO1xuICAgICAgICBpZiAoIWhpdFNlcnZlciB8fCBpc1JldHJ5U3RhdHVzQ29kZShzdGF0dXMsIHRoaXMuYWRkaXRpb25hbFJldHJ5Q29kZXNfKSAmJiB0aGlzLnJldHJ5KSB7XG4gICAgICAgICAgY29uc3Qgd2FzQ2FuY2VsZWQgPSBjb25uZWN0aW9uLmdldEVycm9yQ29kZSgpID09PSBFcnJvckNvZGUuQUJPUlQ7XG4gICAgICAgICAgYmFja29mZkNhbGxiYWNrKGZhbHNlLCBuZXcgUmVxdWVzdEVuZFN0YXR1cyhmYWxzZSwgbnVsbCwgd2FzQ2FuY2VsZWQpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3VjY2Vzc0NvZGUgPSB0aGlzLnN1Y2Nlc3NDb2Rlc18uaW5kZXhPZihzdGF0dXMpICE9PSAtMTtcbiAgICAgICAgYmFja29mZkNhbGxiYWNrKHRydWUsIG5ldyBSZXF1ZXN0RW5kU3RhdHVzKHN1Y2Nlc3NDb2RlLCBjb25uZWN0aW9uKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0V2VudFRocm91Z2ggLSBUcnVlIGlmIHRoZSByZXF1ZXN0IGV2ZW50dWFsbHkgd2VudFxuICAgICAqICAgICB0aHJvdWdoLCBmYWxzZSBpZiBpdCBoaXQgdGhlIHJldHJ5IGxpbWl0IG9yIHdhcyBjYW5jZWxlZC5cbiAgICAgKi9cbiAgICBjb25zdCBiYWNrb2ZmRG9uZSA9IChyZXF1ZXN0V2VudFRocm91Z2gsIHN0YXR1cykgPT4ge1xuICAgICAgY29uc3QgcmVzb2x2ZSA9IHRoaXMucmVzb2x2ZV87XG4gICAgICBjb25zdCByZWplY3QgPSB0aGlzLnJlamVjdF87XG4gICAgICBjb25zdCBjb25uZWN0aW9uID0gc3RhdHVzLmNvbm5lY3Rpb247XG4gICAgICBpZiAoc3RhdHVzLndhc1N1Y2Nlc3NDb2RlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jYWxsYmFja18oY29ubmVjdGlvbiwgY29ubmVjdGlvbi5nZXRSZXNwb25zZSgpKTtcbiAgICAgICAgICBpZiAoaXNKdXN0RGVmKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNvbm5lY3Rpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBlcnIgPSB1bmtub3duKCk7XG4gICAgICAgICAgZXJyLnNlcnZlclJlc3BvbnNlID0gY29ubmVjdGlvbi5nZXRFcnJvclRleHQoKTtcbiAgICAgICAgICBpZiAodGhpcy5lcnJvckNhbGxiYWNrXykge1xuICAgICAgICAgICAgcmVqZWN0KHRoaXMuZXJyb3JDYWxsYmFja18oY29ubmVjdGlvbiwgZXJyKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc3RhdHVzLmNhbmNlbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnIgPSB0aGlzLmFwcERlbGV0ZV8gPyBhcHBEZWxldGVkKCkgOiBjYW5jZWxlZCgpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGVyciA9IHJldHJ5TGltaXRFeGNlZWRlZCgpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAodGhpcy5jYW5jZWxlZF8pIHtcbiAgICAgIGJhY2tvZmZEb25lKGZhbHNlLCBuZXcgUmVxdWVzdEVuZFN0YXR1cyhmYWxzZSwgbnVsbCwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJhY2tvZmZJZF8gPSBzdGFydChkb1RoZVJlcXVlc3QsIGJhY2tvZmZEb25lLCB0aGlzLnRpbWVvdXRfKTtcbiAgICB9XG4gIH1cbiAgLyoqIEBpbmhlcml0RG9jICovXG4gIGdldFByb21pc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZV87XG4gIH1cbiAgLyoqIEBpbmhlcml0RG9jICovXG4gIGNhbmNlbChhcHBEZWxldGUpIHtcbiAgICB0aGlzLmNhbmNlbGVkXyA9IHRydWU7XG4gICAgdGhpcy5hcHBEZWxldGVfID0gYXBwRGVsZXRlIHx8IGZhbHNlO1xuICAgIGlmICh0aGlzLmJhY2tvZmZJZF8gIT09IG51bGwpIHtcbiAgICAgIHN0b3AodGhpcy5iYWNrb2ZmSWRfKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGVuZGluZ0Nvbm5lY3Rpb25fICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnBlbmRpbmdDb25uZWN0aW9uXy5hYm9ydCgpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHJlc3VsdCBvZiBhIG5ldHdvcmsgcmVxdWVzdC5cbiAqIEBwYXJhbSBvcHRfY2FuY2VsZWQgLSBEZWZhdWx0cyB0byBmYWxzZS5cbiAqL1xuY2xhc3MgUmVxdWVzdEVuZFN0YXR1cyB7XG4gIGNvbnN0cnVjdG9yKHdhc1N1Y2Nlc3NDb2RlLCBjb25uZWN0aW9uLCBjYW5jZWxlZCkge1xuICAgIHRoaXMud2FzU3VjY2Vzc0NvZGUgPSB3YXNTdWNjZXNzQ29kZTtcbiAgICB0aGlzLmNvbm5lY3Rpb24gPSBjb25uZWN0aW9uO1xuICAgIHRoaXMuY2FuY2VsZWQgPSAhIWNhbmNlbGVkO1xuICB9XG59XG5mdW5jdGlvbiBhZGRBdXRoSGVhZGVyXyhoZWFkZXJzLCBhdXRoVG9rZW4pIHtcbiAgaWYgKGF1dGhUb2tlbiAhPT0gbnVsbCAmJiBhdXRoVG9rZW4ubGVuZ3RoID4gMCkge1xuICAgIGhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9ICdGaXJlYmFzZSAnICsgYXV0aFRva2VuO1xuICB9XG59XG5mdW5jdGlvbiBhZGRWZXJzaW9uSGVhZGVyXyhoZWFkZXJzLCBmaXJlYmFzZVZlcnNpb24pIHtcbiAgaGVhZGVyc1snWC1GaXJlYmFzZS1TdG9yYWdlLVZlcnNpb24nXSA9ICd3ZWJqcy8nICsgKGZpcmViYXNlVmVyc2lvbiAhPT0gbnVsbCAmJiBmaXJlYmFzZVZlcnNpb24gIT09IHZvaWQgMCA/IGZpcmViYXNlVmVyc2lvbiA6ICdBcHBNYW5hZ2VyJyk7XG59XG5mdW5jdGlvbiBhZGRHbXBpZEhlYWRlcl8oaGVhZGVycywgYXBwSWQpIHtcbiAgaWYgKGFwcElkKSB7XG4gICAgaGVhZGVyc1snWC1GaXJlYmFzZS1HTVBJRCddID0gYXBwSWQ7XG4gIH1cbn1cbmZ1bmN0aW9uIGFkZEFwcENoZWNrSGVhZGVyXyhoZWFkZXJzLCBhcHBDaGVja1Rva2VuKSB7XG4gIGlmIChhcHBDaGVja1Rva2VuICE9PSBudWxsKSB7XG4gICAgaGVhZGVyc1snWC1GaXJlYmFzZS1BcHBDaGVjayddID0gYXBwQ2hlY2tUb2tlbjtcbiAgfVxufVxuZnVuY3Rpb24gbWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIGFwcElkLCBhdXRoVG9rZW4sIGFwcENoZWNrVG9rZW4sIHJlcXVlc3RGYWN0b3J5LCBmaXJlYmFzZVZlcnNpb24sIHJldHJ5ID0gdHJ1ZSkge1xuICBjb25zdCBxdWVyeVBhcnQgPSBtYWtlUXVlcnlTdHJpbmcocmVxdWVzdEluZm8udXJsUGFyYW1zKTtcbiAgY29uc3QgdXJsID0gcmVxdWVzdEluZm8udXJsICsgcXVlcnlQYXJ0O1xuICBjb25zdCBoZWFkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgcmVxdWVzdEluZm8uaGVhZGVycyk7XG4gIGFkZEdtcGlkSGVhZGVyXyhoZWFkZXJzLCBhcHBJZCk7XG4gIGFkZEF1dGhIZWFkZXJfKGhlYWRlcnMsIGF1dGhUb2tlbik7XG4gIGFkZFZlcnNpb25IZWFkZXJfKGhlYWRlcnMsIGZpcmViYXNlVmVyc2lvbik7XG4gIGFkZEFwcENoZWNrSGVhZGVyXyhoZWFkZXJzLCBhcHBDaGVja1Rva2VuKTtcbiAgcmV0dXJuIG5ldyBOZXR3b3JrUmVxdWVzdCh1cmwsIHJlcXVlc3RJbmZvLm1ldGhvZCwgaGVhZGVycywgcmVxdWVzdEluZm8uYm9keSwgcmVxdWVzdEluZm8uc3VjY2Vzc0NvZGVzLCByZXF1ZXN0SW5mby5hZGRpdGlvbmFsUmV0cnlDb2RlcywgcmVxdWVzdEluZm8uaGFuZGxlciwgcmVxdWVzdEluZm8uZXJyb3JIYW5kbGVyLCByZXF1ZXN0SW5mby50aW1lb3V0LCByZXF1ZXN0SW5mby5wcm9ncmVzc0NhbGxiYWNrLCByZXF1ZXN0RmFjdG9yeSwgcmV0cnkpO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZnVuY3Rpb24gZ2V0QmxvYkJ1aWxkZXIoKSB7XG4gIGlmICh0eXBlb2YgQmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIEJsb2JCdWlsZGVyO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBXZWJLaXRCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gV2ViS2l0QmxvYkJ1aWxkZXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuLyoqXG4gKiBDb25jYXRlbmF0ZXMgb25lIG9yIG1vcmUgdmFsdWVzIHRvZ2V0aGVyIGFuZCBjb252ZXJ0cyB0aGVtIHRvIGEgQmxvYi5cbiAqXG4gKiBAcGFyYW0gYXJncyBUaGUgdmFsdWVzIHRoYXQgd2lsbCBtYWtlIHVwIHRoZSByZXN1bHRpbmcgYmxvYi5cbiAqIEByZXR1cm4gVGhlIGJsb2IuXG4gKi9cbmZ1bmN0aW9uIGdldEJsb2IkMSguLi5hcmdzKSB7XG4gIGNvbnN0IEJsb2JCdWlsZGVyID0gZ2V0QmxvYkJ1aWxkZXIoKTtcbiAgaWYgKEJsb2JCdWlsZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBiYiA9IG5ldyBCbG9iQnVpbGRlcigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYmIuYXBwZW5kKGFyZ3NbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gYmIuZ2V0QmxvYigpO1xuICB9IGVsc2Uge1xuICAgIGlmIChpc05hdGl2ZUJsb2JEZWZpbmVkKCkpIHtcbiAgICAgIHJldHVybiBuZXcgQmxvYihhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFN0b3JhZ2VFcnJvcihTdG9yYWdlRXJyb3JDb2RlLlVOU1VQUE9SVEVEX0VOVklST05NRU5ULCBcIlRoaXMgYnJvd3NlciBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCBjcmVhdGluZyBCbG9ic1wiKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogU2xpY2VzIHRoZSBibG9iLiBUaGUgcmV0dXJuZWQgYmxvYiBjb250YWlucyBkYXRhIGZyb20gdGhlIHN0YXJ0IGJ5dGVcbiAqIChpbmNsdXNpdmUpIHRpbGwgdGhlIGVuZCBieXRlIChleGNsdXNpdmUpLiBOZWdhdGl2ZSBpbmRpY2VzIGNhbm5vdCBiZSB1c2VkLlxuICpcbiAqIEBwYXJhbSBibG9iIFRoZSBibG9iIHRvIGJlIHNsaWNlZC5cbiAqIEBwYXJhbSBzdGFydCBJbmRleCBvZiB0aGUgc3RhcnRpbmcgYnl0ZS5cbiAqIEBwYXJhbSBlbmQgSW5kZXggb2YgdGhlIGVuZGluZyBieXRlLlxuICogQHJldHVybiBUaGUgYmxvYiBzbGljZSBvciBudWxsIGlmIG5vdCBzdXBwb3J0ZWQuXG4gKi9cbmZ1bmN0aW9uIHNsaWNlQmxvYihibG9iLCBzdGFydCwgZW5kKSB7XG4gIGlmIChibG9iLndlYmtpdFNsaWNlKSB7XG4gICAgcmV0dXJuIGJsb2Iud2Via2l0U2xpY2Uoc3RhcnQsIGVuZCk7XG4gIH0gZWxzZSBpZiAoYmxvYi5tb3pTbGljZSkge1xuICAgIHJldHVybiBibG9iLm1velNsaWNlKHN0YXJ0LCBlbmQpO1xuICB9IGVsc2UgaWYgKGJsb2Iuc2xpY2UpIHtcbiAgICByZXR1cm4gYmxvYi5zbGljZShzdGFydCwgZW5kKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKiBDb252ZXJ0cyBhIEJhc2U2NCBlbmNvZGVkIHN0cmluZyB0byBhIGJpbmFyeSBzdHJpbmcuICovXG5mdW5jdGlvbiBkZWNvZGVCYXNlNjQoZW5jb2RlZCkge1xuICBpZiAodHlwZW9mIGF0b2IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgbWlzc2luZ1BvbHlGaWxsKCdiYXNlLTY0Jyk7XG4gIH1cbiAgcmV0dXJuIGF0b2IoZW5jb2RlZCk7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIEFuIGVudW1lcmF0aW9uIG9mIHRoZSBwb3NzaWJsZSBzdHJpbmcgZm9ybWF0cyBmb3IgdXBsb2FkLlxuICogQHB1YmxpY1xuICovXG5jb25zdCBTdHJpbmdGb3JtYXQgPSB7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhlIHN0cmluZyBzaG91bGQgYmUgaW50ZXJwcmV0ZWQgXCJyYXdcIiwgdGhhdCBpcywgYXMgbm9ybWFsIHRleHQuXG4gICAqIFRoZSBzdHJpbmcgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyBVVEYtMTYsIHRoZW4gdXBsb2FkZWQgYXMgYSBVVEYtOCBieXRlXG4gICAqIHNlcXVlbmNlLlxuICAgKiBFeGFtcGxlOiBUaGUgc3RyaW5nICdIZWxsbyEgXFxcXHVkODNkXFxcXHVkZTBhJyBiZWNvbWVzIHRoZSBieXRlIHNlcXVlbmNlXG4gICAqIDQ4IDY1IDZjIDZjIDZmIDIxIDIwIGYwIDlmIDk4IDhhXG4gICAqL1xuICBSQVc6ICdyYXcnLFxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoZSBzdHJpbmcgc2hvdWxkIGJlIGludGVycHJldGVkIGFzIGJhc2U2NC1lbmNvZGVkIGRhdGEuXG4gICAqIFBhZGRpbmcgY2hhcmFjdGVycyAodHJhaWxpbmcgJz0ncykgYXJlIG9wdGlvbmFsLlxuICAgKiBFeGFtcGxlOiBUaGUgc3RyaW5nICdyV21PKytFNnQ3L3Jsdz09JyBiZWNvbWVzIHRoZSBieXRlIHNlcXVlbmNlXG4gICAqIGFkIDY5IDhlIGZiIGUxIDNhIGI3IGJmIGViIDk3XG4gICAqL1xuICBCQVNFNjQ6ICdiYXNlNjQnLFxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoZSBzdHJpbmcgc2hvdWxkIGJlIGludGVycHJldGVkIGFzIGJhc2U2NHVybC1lbmNvZGVkIGRhdGEuXG4gICAqIFBhZGRpbmcgY2hhcmFjdGVycyAodHJhaWxpbmcgJz0ncykgYXJlIG9wdGlvbmFsLlxuICAgKiBFeGFtcGxlOiBUaGUgc3RyaW5nICdyV21PLS1FNnQ3X3Jsdz09JyBiZWNvbWVzIHRoZSBieXRlIHNlcXVlbmNlXG4gICAqIGFkIDY5IDhlIGZiIGUxIDNhIGI3IGJmIGViIDk3XG4gICAqL1xuICBCQVNFNjRVUkw6ICdiYXNlNjR1cmwnLFxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoZSBzdHJpbmcgaXMgYSBkYXRhIFVSTCwgc3VjaCBhcyBvbmUgb2J0YWluZWQgZnJvbVxuICAgKiBjYW52YXMudG9EYXRhVVJMKCkuXG4gICAqIEV4YW1wbGU6IHRoZSBzdHJpbmcgJ2RhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCxhYWFhJ1xuICAgKiBiZWNvbWVzIHRoZSBieXRlIHNlcXVlbmNlXG4gICAqIDY5IGE2IDlhXG4gICAqICh0aGUgY29udGVudC10eXBlIFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIgaXMgYWxzbyBhcHBsaWVkLCBidXQgY2FuXG4gICAqIGJlIG92ZXJyaWRkZW4gaW4gdGhlIG1ldGFkYXRhIG9iamVjdCkuXG4gICAqL1xuICBEQVRBX1VSTDogJ2RhdGFfdXJsJ1xufTtcbmNsYXNzIFN0cmluZ0RhdGEge1xuICBjb25zdHJ1Y3RvcihkYXRhLCBjb250ZW50VHlwZSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlIHx8IG51bGw7XG4gIH1cbn1cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmZ1bmN0aW9uIGRhdGFGcm9tU3RyaW5nKGZvcm1hdCwgc3RyaW5nRGF0YSkge1xuICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgIGNhc2UgU3RyaW5nRm9ybWF0LlJBVzpcbiAgICAgIHJldHVybiBuZXcgU3RyaW5nRGF0YSh1dGY4Qnl0ZXNfKHN0cmluZ0RhdGEpKTtcbiAgICBjYXNlIFN0cmluZ0Zvcm1hdC5CQVNFNjQ6XG4gICAgY2FzZSBTdHJpbmdGb3JtYXQuQkFTRTY0VVJMOlxuICAgICAgcmV0dXJuIG5ldyBTdHJpbmdEYXRhKGJhc2U2NEJ5dGVzXyhmb3JtYXQsIHN0cmluZ0RhdGEpKTtcbiAgICBjYXNlIFN0cmluZ0Zvcm1hdC5EQVRBX1VSTDpcbiAgICAgIHJldHVybiBuZXcgU3RyaW5nRGF0YShkYXRhVVJMQnl0ZXNfKHN0cmluZ0RhdGEpLCBkYXRhVVJMQ29udGVudFR5cGVfKHN0cmluZ0RhdGEpKTtcbiAgICAvLyBkbyBub3RoaW5nXG4gIH1cbiAgLy8gYXNzZXJ0KGZhbHNlKTtcbiAgdGhyb3cgdW5rbm93bigpO1xufVxuZnVuY3Rpb24gdXRmOEJ5dGVzXyh2YWx1ZSkge1xuICBjb25zdCBiID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgYyA9IHZhbHVlLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGMgPD0gMTI3KSB7XG4gICAgICBiLnB1c2goYyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjIDw9IDIwNDcpIHtcbiAgICAgICAgYi5wdXNoKDE5MiB8IGMgPj4gNiwgMTI4IHwgYyAmIDYzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgoYyAmIDY0NTEyKSA9PT0gNTUyOTYpIHtcbiAgICAgICAgICAvLyBUaGUgc3RhcnQgb2YgYSBzdXJyb2dhdGUgcGFpci5cbiAgICAgICAgICBjb25zdCB2YWxpZCA9IGkgPCB2YWx1ZS5sZW5ndGggLSAxICYmICh2YWx1ZS5jaGFyQ29kZUF0KGkgKyAxKSAmIDY0NTEyKSA9PT0gNTYzMjA7XG4gICAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgLy8gVGhlIHNlY29uZCBzdXJyb2dhdGUgd2Fzbid0IHRoZXJlLlxuICAgICAgICAgICAgYi5wdXNoKDIzOSwgMTkxLCAxODkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBoaSA9IGM7XG4gICAgICAgICAgICBjb25zdCBsbyA9IHZhbHVlLmNoYXJDb2RlQXQoKytpKTtcbiAgICAgICAgICAgIGMgPSA2NTUzNiB8IChoaSAmIDEwMjMpIDw8IDEwIHwgbG8gJiAxMDIzO1xuICAgICAgICAgICAgYi5wdXNoKDI0MCB8IGMgPj4gMTgsIDEyOCB8IGMgPj4gMTIgJiA2MywgMTI4IHwgYyA+PiA2ICYgNjMsIDEyOCB8IGMgJiA2Myk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICgoYyAmIDY0NTEyKSA9PT0gNTYzMjApIHtcbiAgICAgICAgICAgIC8vIEludmFsaWQgbG93IHN1cnJvZ2F0ZS5cbiAgICAgICAgICAgIGIucHVzaCgyMzksIDE5MSwgMTg5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYi5wdXNoKDIyNCB8IGMgPj4gMTIsIDEyOCB8IGMgPj4gNiAmIDYzLCAxMjggfCBjICYgNjMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYik7XG59XG5mdW5jdGlvbiBwZXJjZW50RW5jb2RlZEJ5dGVzXyh2YWx1ZSkge1xuICBsZXQgZGVjb2RlZDtcbiAgdHJ5IHtcbiAgICBkZWNvZGVkID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IGludmFsaWRGb3JtYXQoU3RyaW5nRm9ybWF0LkRBVEFfVVJMLCAnTWFsZm9ybWVkIGRhdGEgVVJMLicpO1xuICB9XG4gIHJldHVybiB1dGY4Qnl0ZXNfKGRlY29kZWQpO1xufVxuZnVuY3Rpb24gYmFzZTY0Qnl0ZXNfKGZvcm1hdCwgdmFsdWUpIHtcbiAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICBjYXNlIFN0cmluZ0Zvcm1hdC5CQVNFNjQ6XG4gICAgICB7XG4gICAgICAgIGNvbnN0IGhhc01pbnVzID0gdmFsdWUuaW5kZXhPZignLScpICE9PSAtMTtcbiAgICAgICAgY29uc3QgaGFzVW5kZXIgPSB2YWx1ZS5pbmRleE9mKCdfJykgIT09IC0xO1xuICAgICAgICBpZiAoaGFzTWludXMgfHwgaGFzVW5kZXIpIHtcbiAgICAgICAgICBjb25zdCBpbnZhbGlkQ2hhciA9IGhhc01pbnVzID8gJy0nIDogJ18nO1xuICAgICAgICAgIHRocm93IGludmFsaWRGb3JtYXQoZm9ybWF0LCBcIkludmFsaWQgY2hhcmFjdGVyICdcIiArIGludmFsaWRDaGFyICsgXCInIGZvdW5kOiBpcyBpdCBiYXNlNjR1cmwgZW5jb2RlZD9cIik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgY2FzZSBTdHJpbmdGb3JtYXQuQkFTRTY0VVJMOlxuICAgICAge1xuICAgICAgICBjb25zdCBoYXNQbHVzID0gdmFsdWUuaW5kZXhPZignKycpICE9PSAtMTtcbiAgICAgICAgY29uc3QgaGFzU2xhc2ggPSB2YWx1ZS5pbmRleE9mKCcvJykgIT09IC0xO1xuICAgICAgICBpZiAoaGFzUGx1cyB8fCBoYXNTbGFzaCkge1xuICAgICAgICAgIGNvbnN0IGludmFsaWRDaGFyID0gaGFzUGx1cyA/ICcrJyA6ICcvJztcbiAgICAgICAgICB0aHJvdyBpbnZhbGlkRm9ybWF0KGZvcm1hdCwgXCJJbnZhbGlkIGNoYXJhY3RlciAnXCIgKyBpbnZhbGlkQ2hhciArIFwiJyBmb3VuZDogaXMgaXQgYmFzZTY0IGVuY29kZWQ/XCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgLy8gZG8gbm90aGluZ1xuICB9XG4gIGxldCBieXRlcztcbiAgdHJ5IHtcbiAgICBieXRlcyA9IGRlY29kZUJhc2U2NCh2YWx1ZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZS5tZXNzYWdlLmluY2x1ZGVzKCdwb2x5ZmlsbCcpKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgICB0aHJvdyBpbnZhbGlkRm9ybWF0KGZvcm1hdCwgJ0ludmFsaWQgY2hhcmFjdGVyIGZvdW5kJyk7XG4gIH1cbiAgY29uc3QgYXJyYXkgPSBuZXcgVWludDhBcnJheShieXRlcy5sZW5ndGgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgYXJyYXlbaV0gPSBieXRlcy5jaGFyQ29kZUF0KGkpO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cbmNsYXNzIERhdGFVUkxQYXJ0cyB7XG4gIGNvbnN0cnVjdG9yKGRhdGFVUkwpIHtcbiAgICB0aGlzLmJhc2U2NCA9IGZhbHNlO1xuICAgIHRoaXMuY29udGVudFR5cGUgPSBudWxsO1xuICAgIGNvbnN0IG1hdGNoZXMgPSBkYXRhVVJMLm1hdGNoKC9eZGF0YTooW14sXSspPywvKTtcbiAgICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgaW52YWxpZEZvcm1hdChTdHJpbmdGb3JtYXQuREFUQV9VUkwsIFwiTXVzdCBiZSBmb3JtYXR0ZWQgJ2RhdGE6WzxtZWRpYXR5cGU+XVs7YmFzZTY0XSw8ZGF0YT5cIik7XG4gICAgfVxuICAgIGNvbnN0IG1pZGRsZSA9IG1hdGNoZXNbMV0gfHwgbnVsbDtcbiAgICBpZiAobWlkZGxlICE9IG51bGwpIHtcbiAgICAgIHRoaXMuYmFzZTY0ID0gZW5kc1dpdGgobWlkZGxlLCAnO2Jhc2U2NCcpO1xuICAgICAgdGhpcy5jb250ZW50VHlwZSA9IHRoaXMuYmFzZTY0ID8gbWlkZGxlLnN1YnN0cmluZygwLCBtaWRkbGUubGVuZ3RoIC0gJztiYXNlNjQnLmxlbmd0aCkgOiBtaWRkbGU7XG4gICAgfVxuICAgIHRoaXMucmVzdCA9IGRhdGFVUkwuc3Vic3RyaW5nKGRhdGFVUkwuaW5kZXhPZignLCcpICsgMSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGRhdGFVUkxCeXRlc18oZGF0YVVybCkge1xuICBjb25zdCBwYXJ0cyA9IG5ldyBEYXRhVVJMUGFydHMoZGF0YVVybCk7XG4gIGlmIChwYXJ0cy5iYXNlNjQpIHtcbiAgICByZXR1cm4gYmFzZTY0Qnl0ZXNfKFN0cmluZ0Zvcm1hdC5CQVNFNjQsIHBhcnRzLnJlc3QpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwZXJjZW50RW5jb2RlZEJ5dGVzXyhwYXJ0cy5yZXN0KTtcbiAgfVxufVxuZnVuY3Rpb24gZGF0YVVSTENvbnRlbnRUeXBlXyhkYXRhVXJsKSB7XG4gIGNvbnN0IHBhcnRzID0gbmV3IERhdGFVUkxQYXJ0cyhkYXRhVXJsKTtcbiAgcmV0dXJuIHBhcnRzLmNvbnRlbnRUeXBlO1xufVxuZnVuY3Rpb24gZW5kc1dpdGgocywgZW5kKSB7XG4gIGNvbnN0IGxvbmdFbm91Z2ggPSBzLmxlbmd0aCA+PSBlbmQubGVuZ3RoO1xuICBpZiAoIWxvbmdFbm91Z2gpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHMuc3Vic3RyaW5nKHMubGVuZ3RoIC0gZW5kLmxlbmd0aCkgPT09IGVuZDtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogQHBhcmFtIG9wdF9lbGlkZUNvcHkgLSBJZiB0cnVlLCBkb2Vzbid0IGNvcHkgbXV0YWJsZSBpbnB1dCBkYXRhXG4gKiAgICAgKGUuZy4gVWludDhBcnJheXMpLiBQYXNzIHRydWUgb25seSBpZiB5b3Uga25vdyB0aGUgb2JqZWN0cyB3aWxsIG5vdCBiZVxuICogICAgIG1vZGlmaWVkIGFmdGVyIHRoaXMgYmxvYidzIGNvbnN0cnVjdGlvbi5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY2xhc3MgRmJzQmxvYiB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIGVsaWRlQ29weSkge1xuICAgIGxldCBzaXplID0gMDtcbiAgICBsZXQgYmxvYlR5cGUgPSAnJztcbiAgICBpZiAoaXNOYXRpdmVCbG9iKGRhdGEpKSB7XG4gICAgICB0aGlzLmRhdGFfID0gZGF0YTtcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG4gICAgICBibG9iVHlwZSA9IGRhdGEudHlwZTtcbiAgICB9IGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgaWYgKGVsaWRlQ29weSkge1xuICAgICAgICB0aGlzLmRhdGFfID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRhdGFfID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5ieXRlTGVuZ3RoKTtcbiAgICAgICAgdGhpcy5kYXRhXy5zZXQobmV3IFVpbnQ4QXJyYXkoZGF0YSkpO1xuICAgICAgfVxuICAgICAgc2l6ZSA9IHRoaXMuZGF0YV8ubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgIGlmIChlbGlkZUNvcHkpIHtcbiAgICAgICAgdGhpcy5kYXRhXyA9IGRhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRhdGFfID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5sZW5ndGgpO1xuICAgICAgICB0aGlzLmRhdGFfLnNldChkYXRhKTtcbiAgICAgIH1cbiAgICAgIHNpemUgPSBkYXRhLmxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5zaXplXyA9IHNpemU7XG4gICAgdGhpcy50eXBlXyA9IGJsb2JUeXBlO1xuICB9XG4gIHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZV87XG4gIH1cbiAgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlXztcbiAgfVxuICBzbGljZShzdGFydEJ5dGUsIGVuZEJ5dGUpIHtcbiAgICBpZiAoaXNOYXRpdmVCbG9iKHRoaXMuZGF0YV8pKSB7XG4gICAgICBjb25zdCByZWFsQmxvYiA9IHRoaXMuZGF0YV87XG4gICAgICBjb25zdCBzbGljZWQgPSBzbGljZUJsb2IocmVhbEJsb2IsIHN0YXJ0Qnl0ZSwgZW5kQnl0ZSk7XG4gICAgICBpZiAoc2xpY2VkID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBGYnNCbG9iKHNsaWNlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNsaWNlID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5kYXRhXy5idWZmZXIsIHN0YXJ0Qnl0ZSwgZW5kQnl0ZSAtIHN0YXJ0Qnl0ZSk7XG4gICAgICByZXR1cm4gbmV3IEZic0Jsb2Ioc2xpY2UsIHRydWUpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgZ2V0QmxvYiguLi5hcmdzKSB7XG4gICAgaWYgKGlzTmF0aXZlQmxvYkRlZmluZWQoKSkge1xuICAgICAgY29uc3QgYmxvYmJ5ID0gYXJncy5tYXAodmFsID0+IHtcbiAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEZic0Jsb2IpIHtcbiAgICAgICAgICByZXR1cm4gdmFsLmRhdGFfO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBGYnNCbG9iKGdldEJsb2IkMS5hcHBseShudWxsLCBibG9iYnkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdWludDhBcnJheXMgPSBhcmdzLm1hcCh2YWwgPT4ge1xuICAgICAgICBpZiAoaXNTdHJpbmcodmFsKSkge1xuICAgICAgICAgIHJldHVybiBkYXRhRnJvbVN0cmluZyhTdHJpbmdGb3JtYXQuUkFXLCB2YWwpLmRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQmxvYnMgZG9uJ3QgZXhpc3QsIHNvIHRoaXMgaGFzIHRvIGJlIGEgVWludDhBcnJheS5cbiAgICAgICAgICByZXR1cm4gdmFsLmRhdGFfO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxldCBmaW5hbExlbmd0aCA9IDA7XG4gICAgICB1aW50OEFycmF5cy5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgZmluYWxMZW5ndGggKz0gYXJyYXkuYnl0ZUxlbmd0aDtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgbWVyZ2VkID0gbmV3IFVpbnQ4QXJyYXkoZmluYWxMZW5ndGgpO1xuICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgIHVpbnQ4QXJyYXlzLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbWVyZ2VkW2luZGV4KytdID0gYXJyYXlbaV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBGYnNCbG9iKG1lcmdlZCwgdHJ1ZSk7XG4gICAgfVxuICB9XG4gIHVwbG9hZERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YV87XG4gIH1cbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogUmV0dXJucyB0aGUgT2JqZWN0IHJlc3VsdGluZyBmcm9tIHBhcnNpbmcgdGhlIGdpdmVuIEpTT04sIG9yIG51bGwgaWYgdGhlXG4gKiBnaXZlbiBzdHJpbmcgZG9lcyBub3QgcmVwcmVzZW50IGEgSlNPTiBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGpzb25PYmplY3RPck51bGwocykge1xuICBsZXQgb2JqO1xuICB0cnkge1xuICAgIG9iaiA9IEpTT04ucGFyc2Uocyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoaXNOb25BcnJheU9iamVjdChvYmopKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IENvbnRhaW5zIGhlbHBlciBtZXRob2RzIGZvciBtYW5pcHVsYXRpbmcgcGF0aHMuXG4gKi9cbi8qKlxuICogQHJldHVybiBOdWxsIGlmIHRoZSBwYXRoIGlzIGFscmVhZHkgYXQgdGhlIHJvb3QuXG4gKi9cbmZ1bmN0aW9uIHBhcmVudChwYXRoKSB7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IGluZGV4ID0gcGF0aC5sYXN0SW5kZXhPZignLycpO1xuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGNvbnN0IG5ld1BhdGggPSBwYXRoLnNsaWNlKDAsIGluZGV4KTtcbiAgcmV0dXJuIG5ld1BhdGg7XG59XG5mdW5jdGlvbiBjaGlsZChwYXRoLCBjaGlsZFBhdGgpIHtcbiAgY29uc3QgY2Fub25pY2FsQ2hpbGRQYXRoID0gY2hpbGRQYXRoLnNwbGl0KCcvJykuZmlsdGVyKGNvbXBvbmVudCA9PiBjb21wb25lbnQubGVuZ3RoID4gMCkuam9pbignLycpO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gY2Fub25pY2FsQ2hpbGRQYXRoO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwYXRoICsgJy8nICsgY2Fub25pY2FsQ2hpbGRQYXRoO1xuICB9XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGxhc3QgY29tcG9uZW50IG9mIGEgcGF0aC5cbiAqICcvZm9vL2JhcicgLT4gJ2JhcidcbiAqICcvZm9vL2Jhci9iYXovJyAtPiAnYmF6LydcbiAqICcvYScgLT4gJ2EnXG4gKi9cbmZ1bmN0aW9uIGxhc3RDb21wb25lbnQocGF0aCkge1xuICBjb25zdCBpbmRleCA9IHBhdGgubGFzdEluZGV4T2YoJy8nLCBwYXRoLmxlbmd0aCAtIDIpO1xuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBhdGguc2xpY2UoaW5kZXggKyAxKTtcbiAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZnVuY3Rpb24gbm9YZm9ybV8obWV0YWRhdGEsIHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cbmNsYXNzIE1hcHBpbmcge1xuICBjb25zdHJ1Y3RvcihzZXJ2ZXIsIGxvY2FsLCB3cml0YWJsZSwgeGZvcm0pIHtcbiAgICB0aGlzLnNlcnZlciA9IHNlcnZlcjtcbiAgICB0aGlzLmxvY2FsID0gbG9jYWwgfHwgc2VydmVyO1xuICAgIHRoaXMud3JpdGFibGUgPSAhIXdyaXRhYmxlO1xuICAgIHRoaXMueGZvcm0gPSB4Zm9ybSB8fCBub1hmb3JtXztcbiAgfVxufVxubGV0IG1hcHBpbmdzXyA9IG51bGw7XG5mdW5jdGlvbiB4Zm9ybVBhdGgoZnVsbFBhdGgpIHtcbiAgaWYgKCFpc1N0cmluZyhmdWxsUGF0aCkgfHwgZnVsbFBhdGgubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBmdWxsUGF0aDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGFzdENvbXBvbmVudChmdWxsUGF0aCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldE1hcHBpbmdzKCkge1xuICBpZiAobWFwcGluZ3NfKSB7XG4gICAgcmV0dXJuIG1hcHBpbmdzXztcbiAgfVxuICBjb25zdCBtYXBwaW5ncyA9IFtdO1xuICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCdidWNrZXQnKSk7XG4gIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ2dlbmVyYXRpb24nKSk7XG4gIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ21ldGFnZW5lcmF0aW9uJykpO1xuICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCduYW1lJywgJ2Z1bGxQYXRoJywgdHJ1ZSkpO1xuICBmdW5jdGlvbiBtYXBwaW5nc1hmb3JtUGF0aChfbWV0YWRhdGEsIGZ1bGxQYXRoKSB7XG4gICAgcmV0dXJuIHhmb3JtUGF0aChmdWxsUGF0aCk7XG4gIH1cbiAgY29uc3QgbmFtZU1hcHBpbmcgPSBuZXcgTWFwcGluZygnbmFtZScpO1xuICBuYW1lTWFwcGluZy54Zm9ybSA9IG1hcHBpbmdzWGZvcm1QYXRoO1xuICBtYXBwaW5ncy5wdXNoKG5hbWVNYXBwaW5nKTtcbiAgLyoqXG4gICAqIENvZXJjZXMgdGhlIHNlY29uZCBwYXJhbSB0byBhIG51bWJlciwgaWYgaXQgaXMgZGVmaW5lZC5cbiAgICovXG4gIGZ1bmN0aW9uIHhmb3JtU2l6ZShfbWV0YWRhdGEsIHNpemUpIHtcbiAgICBpZiAoc2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHNpemUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2l6ZTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2l6ZU1hcHBpbmcgPSBuZXcgTWFwcGluZygnc2l6ZScpO1xuICBzaXplTWFwcGluZy54Zm9ybSA9IHhmb3JtU2l6ZTtcbiAgbWFwcGluZ3MucHVzaChzaXplTWFwcGluZyk7XG4gIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ3RpbWVDcmVhdGVkJykpO1xuICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCd1cGRhdGVkJykpO1xuICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCdtZDVIYXNoJywgbnVsbCwgdHJ1ZSkpO1xuICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCdjYWNoZUNvbnRyb2wnLCBudWxsLCB0cnVlKSk7XG4gIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ2NvbnRlbnREaXNwb3NpdGlvbicsIG51bGwsIHRydWUpKTtcbiAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygnY29udGVudEVuY29kaW5nJywgbnVsbCwgdHJ1ZSkpO1xuICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCdjb250ZW50TGFuZ3VhZ2UnLCBudWxsLCB0cnVlKSk7XG4gIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ2NvbnRlbnRUeXBlJywgbnVsbCwgdHJ1ZSkpO1xuICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCdtZXRhZGF0YScsICdjdXN0b21NZXRhZGF0YScsIHRydWUpKTtcbiAgbWFwcGluZ3NfID0gbWFwcGluZ3M7XG4gIHJldHVybiBtYXBwaW5nc187XG59XG5mdW5jdGlvbiBhZGRSZWYobWV0YWRhdGEsIHNlcnZpY2UpIHtcbiAgZnVuY3Rpb24gZ2VuZXJhdGVSZWYoKSB7XG4gICAgY29uc3QgYnVja2V0ID0gbWV0YWRhdGFbJ2J1Y2tldCddO1xuICAgIGNvbnN0IHBhdGggPSBtZXRhZGF0YVsnZnVsbFBhdGgnXTtcbiAgICBjb25zdCBsb2MgPSBuZXcgTG9jYXRpb24oYnVja2V0LCBwYXRoKTtcbiAgICByZXR1cm4gc2VydmljZS5fbWFrZVN0b3JhZ2VSZWZlcmVuY2UobG9jKTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWV0YWRhdGEsICdyZWYnLCB7XG4gICAgZ2V0OiBnZW5lcmF0ZVJlZlxuICB9KTtcbn1cbmZ1bmN0aW9uIGZyb21SZXNvdXJjZShzZXJ2aWNlLCByZXNvdXJjZSwgbWFwcGluZ3MpIHtcbiAgY29uc3QgbWV0YWRhdGEgPSB7fTtcbiAgbWV0YWRhdGFbJ3R5cGUnXSA9ICdmaWxlJztcbiAgY29uc3QgbGVuID0gbWFwcGluZ3MubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgbWFwcGluZyA9IG1hcHBpbmdzW2ldO1xuICAgIG1ldGFkYXRhW21hcHBpbmcubG9jYWxdID0gbWFwcGluZy54Zm9ybShtZXRhZGF0YSwgcmVzb3VyY2VbbWFwcGluZy5zZXJ2ZXJdKTtcbiAgfVxuICBhZGRSZWYobWV0YWRhdGEsIHNlcnZpY2UpO1xuICByZXR1cm4gbWV0YWRhdGE7XG59XG5mdW5jdGlvbiBmcm9tUmVzb3VyY2VTdHJpbmcoc2VydmljZSwgcmVzb3VyY2VTdHJpbmcsIG1hcHBpbmdzKSB7XG4gIGNvbnN0IG9iaiA9IGpzb25PYmplY3RPck51bGwocmVzb3VyY2VTdHJpbmcpO1xuICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgcmVzb3VyY2UgPSBvYmo7XG4gIHJldHVybiBmcm9tUmVzb3VyY2Uoc2VydmljZSwgcmVzb3VyY2UsIG1hcHBpbmdzKTtcbn1cbmZ1bmN0aW9uIGRvd25sb2FkVXJsRnJvbVJlc291cmNlU3RyaW5nKG1ldGFkYXRhLCByZXNvdXJjZVN0cmluZywgaG9zdCwgcHJvdG9jb2wpIHtcbiAgY29uc3Qgb2JqID0ganNvbk9iamVjdE9yTnVsbChyZXNvdXJjZVN0cmluZyk7XG4gIGlmIChvYmogPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoIWlzU3RyaW5nKG9ialsnZG93bmxvYWRUb2tlbnMnXSkpIHtcbiAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgb2JqZWN0cyBhcmUgdXBsb2FkZWQgdGhyb3VnaCBHQ1MgYW5kIHJldHJpZXZlZFxuICAgIC8vIHRocm91Z2ggbGlzdCwgc28gd2UgZG9uJ3Qgd2FudCB0byB0aHJvdyBhbiBFcnJvci5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCB0b2tlbnMgPSBvYmpbJ2Rvd25sb2FkVG9rZW5zJ107XG4gIGlmICh0b2tlbnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgZW5jb2RlID0gZW5jb2RlVVJJQ29tcG9uZW50O1xuICBjb25zdCB0b2tlbnNMaXN0ID0gdG9rZW5zLnNwbGl0KCcsJyk7XG4gIGNvbnN0IHVybHMgPSB0b2tlbnNMaXN0Lm1hcCh0b2tlbiA9PiB7XG4gICAgY29uc3QgYnVja2V0ID0gbWV0YWRhdGFbJ2J1Y2tldCddO1xuICAgIGNvbnN0IHBhdGggPSBtZXRhZGF0YVsnZnVsbFBhdGgnXTtcbiAgICBjb25zdCB1cmxQYXJ0ID0gJy9iLycgKyBlbmNvZGUoYnVja2V0KSArICcvby8nICsgZW5jb2RlKHBhdGgpO1xuICAgIGNvbnN0IGJhc2UgPSBtYWtlVXJsKHVybFBhcnQsIGhvc3QsIHByb3RvY29sKTtcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IG1ha2VRdWVyeVN0cmluZyh7XG4gICAgICBhbHQ6ICdtZWRpYScsXG4gICAgICB0b2tlblxuICAgIH0pO1xuICAgIHJldHVybiBiYXNlICsgcXVlcnlTdHJpbmc7XG4gIH0pO1xuICByZXR1cm4gdXJsc1swXTtcbn1cbmZ1bmN0aW9uIHRvUmVzb3VyY2VTdHJpbmcobWV0YWRhdGEsIG1hcHBpbmdzKSB7XG4gIGNvbnN0IHJlc291cmNlID0ge307XG4gIGNvbnN0IGxlbiA9IG1hcHBpbmdzLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IG1hcHBpbmcgPSBtYXBwaW5nc1tpXTtcbiAgICBpZiAobWFwcGluZy53cml0YWJsZSkge1xuICAgICAgcmVzb3VyY2VbbWFwcGluZy5zZXJ2ZXJdID0gbWV0YWRhdGFbbWFwcGluZy5sb2NhbF07XG4gICAgfVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXNvdXJjZSk7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5jb25zdCBQUkVGSVhFU19LRVkgPSAncHJlZml4ZXMnO1xuY29uc3QgSVRFTVNfS0VZID0gJ2l0ZW1zJztcbmZ1bmN0aW9uIGZyb21CYWNrZW5kUmVzcG9uc2Uoc2VydmljZSwgYnVja2V0LCByZXNvdXJjZSkge1xuICBjb25zdCBsaXN0UmVzdWx0ID0ge1xuICAgIHByZWZpeGVzOiBbXSxcbiAgICBpdGVtczogW10sXG4gICAgbmV4dFBhZ2VUb2tlbjogcmVzb3VyY2VbJ25leHRQYWdlVG9rZW4nXVxuICB9O1xuICBpZiAocmVzb3VyY2VbUFJFRklYRVNfS0VZXSkge1xuICAgIGZvciAoY29uc3QgcGF0aCBvZiByZXNvdXJjZVtQUkVGSVhFU19LRVldKSB7XG4gICAgICBjb25zdCBwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2ggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG4gICAgICBjb25zdCByZWZlcmVuY2UgPSBzZXJ2aWNlLl9tYWtlU3RvcmFnZVJlZmVyZW5jZShuZXcgTG9jYXRpb24oYnVja2V0LCBwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2gpKTtcbiAgICAgIGxpc3RSZXN1bHQucHJlZml4ZXMucHVzaChyZWZlcmVuY2UpO1xuICAgIH1cbiAgfVxuICBpZiAocmVzb3VyY2VbSVRFTVNfS0VZXSkge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiByZXNvdXJjZVtJVEVNU19LRVldKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2UgPSBzZXJ2aWNlLl9tYWtlU3RvcmFnZVJlZmVyZW5jZShuZXcgTG9jYXRpb24oYnVja2V0LCBpdGVtWyduYW1lJ10pKTtcbiAgICAgIGxpc3RSZXN1bHQuaXRlbXMucHVzaChyZWZlcmVuY2UpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbGlzdFJlc3VsdDtcbn1cbmZ1bmN0aW9uIGZyb21SZXNwb25zZVN0cmluZyhzZXJ2aWNlLCBidWNrZXQsIHJlc291cmNlU3RyaW5nKSB7XG4gIGNvbnN0IG9iaiA9IGpzb25PYmplY3RPck51bGwocmVzb3VyY2VTdHJpbmcpO1xuICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgcmVzb3VyY2UgPSBvYmo7XG4gIHJldHVybiBmcm9tQmFja2VuZFJlc3BvbnNlKHNlcnZpY2UsIGJ1Y2tldCwgcmVzb3VyY2UpO1xufVxuXG4vKipcbiAqIENvbnRhaW5zIGEgZnVsbHkgc3BlY2lmaWVkIHJlcXVlc3QuXG4gKlxuICogQHBhcmFtIEkgLSB0aGUgdHlwZSBvZiB0aGUgYmFja2VuZCdzIG5ldHdvcmsgcmVzcG9uc2UuXG4gKiBAcGFyYW0gTyAtIHRoZSBvdXRwdXQgcmVzcG9uc2UgdHlwZSB1c2VkIGJ5IHRoZSByZXN0IG9mIHRoZSBTREsuXG4gKi9cbmNsYXNzIFJlcXVlc3RJbmZvIHtcbiAgY29uc3RydWN0b3IodXJsLCBtZXRob2QsXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSB3aXRoIHdoaWNoIHRvIHJlc29sdmUgdGhlIHJlcXVlc3QncyBwcm9taXNlLiBPbmx5IGNhbGxlZFxuICAgKiBpZiB0aGUgcmVxdWVzdCBpcyBzdWNjZXNzZnVsLiBUaHJvdyBmcm9tIHRoaXMgZnVuY3Rpb24gdG8gcmVqZWN0IHRoZVxuICAgKiByZXR1cm5lZCBSZXF1ZXN0J3MgcHJvbWlzZSB3aXRoIHRoZSB0aHJvd24gZXJyb3IuXG4gICAqIE5vdGU6IFRoZSBYaHJJbyBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbiBtYXkgYmUgcmV1c2VkIGFmdGVyIHRoaXMgY2FsbGJhY2tcbiAgICogcmV0dXJucy4gRG8gbm90IGtlZXAgYSByZWZlcmVuY2UgdG8gaXQgaW4gYW55IHdheS5cbiAgICovXG4gIGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXQ7XG4gICAgdGhpcy51cmxQYXJhbXMgPSB7fTtcbiAgICB0aGlzLmhlYWRlcnMgPSB7fTtcbiAgICB0aGlzLmJvZHkgPSBudWxsO1xuICAgIHRoaXMuZXJyb3JIYW5kbGVyID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2l0aCB0aGUgY3VycmVudCBudW1iZXIgb2YgYnl0ZXMgdXBsb2FkZWQgYW5kIHRvdGFsIHNpemUgKC0xIGlmIG5vdFxuICAgICAqIGNvbXB1dGFibGUpIG9mIHRoZSByZXF1ZXN0IGJvZHkgKGkuZS4gdXNlZCB0byByZXBvcnQgdXBsb2FkIHByb2dyZXNzKS5cbiAgICAgKi9cbiAgICB0aGlzLnByb2dyZXNzQ2FsbGJhY2sgPSBudWxsO1xuICAgIHRoaXMuc3VjY2Vzc0NvZGVzID0gWzIwMF07XG4gICAgdGhpcy5hZGRpdGlvbmFsUmV0cnlDb2RlcyA9IFtdO1xuICB9XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIFRocm93cyB0aGUgVU5LTk9XTiBTdG9yYWdlRXJyb3IgaWYgY25kbiBpcyBmYWxzZS5cbiAqL1xuZnVuY3Rpb24gaGFuZGxlckNoZWNrKGNuZG4pIHtcbiAgaWYgKCFjbmRuKSB7XG4gICAgdGhyb3cgdW5rbm93bigpO1xuICB9XG59XG5mdW5jdGlvbiBtZXRhZGF0YUhhbmRsZXIoc2VydmljZSwgbWFwcGluZ3MpIHtcbiAgZnVuY3Rpb24gaGFuZGxlcih4aHIsIHRleHQpIHtcbiAgICBjb25zdCBtZXRhZGF0YSA9IGZyb21SZXNvdXJjZVN0cmluZyhzZXJ2aWNlLCB0ZXh0LCBtYXBwaW5ncyk7XG4gICAgaGFuZGxlckNoZWNrKG1ldGFkYXRhICE9PSBudWxsKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH1cbiAgcmV0dXJuIGhhbmRsZXI7XG59XG5mdW5jdGlvbiBsaXN0SGFuZGxlcihzZXJ2aWNlLCBidWNrZXQpIHtcbiAgZnVuY3Rpb24gaGFuZGxlcih4aHIsIHRleHQpIHtcbiAgICBjb25zdCBsaXN0UmVzdWx0ID0gZnJvbVJlc3BvbnNlU3RyaW5nKHNlcnZpY2UsIGJ1Y2tldCwgdGV4dCk7XG4gICAgaGFuZGxlckNoZWNrKGxpc3RSZXN1bHQgIT09IG51bGwpO1xuICAgIHJldHVybiBsaXN0UmVzdWx0O1xuICB9XG4gIHJldHVybiBoYW5kbGVyO1xufVxuZnVuY3Rpb24gZG93bmxvYWRVcmxIYW5kbGVyKHNlcnZpY2UsIG1hcHBpbmdzKSB7XG4gIGZ1bmN0aW9uIGhhbmRsZXIoeGhyLCB0ZXh0KSB7XG4gICAgY29uc3QgbWV0YWRhdGEgPSBmcm9tUmVzb3VyY2VTdHJpbmcoc2VydmljZSwgdGV4dCwgbWFwcGluZ3MpO1xuICAgIGhhbmRsZXJDaGVjayhtZXRhZGF0YSAhPT0gbnVsbCk7XG4gICAgcmV0dXJuIGRvd25sb2FkVXJsRnJvbVJlc291cmNlU3RyaW5nKG1ldGFkYXRhLCB0ZXh0LCBzZXJ2aWNlLmhvc3QsIHNlcnZpY2UuX3Byb3RvY29sKTtcbiAgfVxuICByZXR1cm4gaGFuZGxlcjtcbn1cbmZ1bmN0aW9uIHNoYXJlZEVycm9ySGFuZGxlcihsb2NhdGlvbikge1xuICBmdW5jdGlvbiBlcnJvckhhbmRsZXIoeGhyLCBlcnIpIHtcbiAgICBsZXQgbmV3RXJyO1xuICAgIGlmICh4aHIuZ2V0U3RhdHVzKCkgPT09IDQwMSkge1xuICAgICAgaWYgKFxuICAgICAgLy8gVGhpcyBleGFjdCBtZXNzYWdlIHN0cmluZyBpcyB0aGUgb25seSBjb25zaXN0ZW50IHBhcnQgb2YgdGhlXG4gICAgICAvLyBzZXJ2ZXIncyBlcnJvciByZXNwb25zZSB0aGF0IGlkZW50aWZpZXMgaXQgYXMgYW4gQXBwIENoZWNrIGVycm9yLlxuICAgICAgeGhyLmdldEVycm9yVGV4dCgpLmluY2x1ZGVzKCdGaXJlYmFzZSBBcHAgQ2hlY2sgdG9rZW4gaXMgaW52YWxpZCcpKSB7XG4gICAgICAgIG5ld0VyciA9IHVuYXV0aG9yaXplZEFwcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RXJyID0gdW5hdXRoZW50aWNhdGVkKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh4aHIuZ2V0U3RhdHVzKCkgPT09IDQwMikge1xuICAgICAgICBuZXdFcnIgPSBxdW90YUV4Y2VlZGVkKGxvY2F0aW9uLmJ1Y2tldCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeGhyLmdldFN0YXR1cygpID09PSA0MDMpIHtcbiAgICAgICAgICBuZXdFcnIgPSB1bmF1dGhvcml6ZWQobG9jYXRpb24ucGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3RXJyID0gZXJyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIG5ld0Vyci5zdGF0dXMgPSB4aHIuZ2V0U3RhdHVzKCk7XG4gICAgbmV3RXJyLnNlcnZlclJlc3BvbnNlID0gZXJyLnNlcnZlclJlc3BvbnNlO1xuICAgIHJldHVybiBuZXdFcnI7XG4gIH1cbiAgcmV0dXJuIGVycm9ySGFuZGxlcjtcbn1cbmZ1bmN0aW9uIG9iamVjdEVycm9ySGFuZGxlcihsb2NhdGlvbikge1xuICBjb25zdCBzaGFyZWQgPSBzaGFyZWRFcnJvckhhbmRsZXIobG9jYXRpb24pO1xuICBmdW5jdGlvbiBlcnJvckhhbmRsZXIoeGhyLCBlcnIpIHtcbiAgICBsZXQgbmV3RXJyID0gc2hhcmVkKHhociwgZXJyKTtcbiAgICBpZiAoeGhyLmdldFN0YXR1cygpID09PSA0MDQpIHtcbiAgICAgIG5ld0VyciA9IG9iamVjdE5vdEZvdW5kKGxvY2F0aW9uLnBhdGgpO1xuICAgIH1cbiAgICBuZXdFcnIuc2VydmVyUmVzcG9uc2UgPSBlcnIuc2VydmVyUmVzcG9uc2U7XG4gICAgcmV0dXJuIG5ld0VycjtcbiAgfVxuICByZXR1cm4gZXJyb3JIYW5kbGVyO1xufVxuZnVuY3Rpb24gZ2V0TWV0YWRhdGEkMihzZXJ2aWNlLCBsb2NhdGlvbiwgbWFwcGluZ3MpIHtcbiAgY29uc3QgdXJsUGFydCA9IGxvY2F0aW9uLmZ1bGxTZXJ2ZXJVcmwoKTtcbiAgY29uc3QgdXJsID0gbWFrZVVybCh1cmxQYXJ0LCBzZXJ2aWNlLmhvc3QsIHNlcnZpY2UuX3Byb3RvY29sKTtcbiAgY29uc3QgbWV0aG9kID0gJ0dFVCc7XG4gIGNvbnN0IHRpbWVvdXQgPSBzZXJ2aWNlLm1heE9wZXJhdGlvblJldHJ5VGltZTtcbiAgY29uc3QgcmVxdWVzdEluZm8gPSBuZXcgUmVxdWVzdEluZm8odXJsLCBtZXRob2QsIG1ldGFkYXRhSGFuZGxlcihzZXJ2aWNlLCBtYXBwaW5ncyksIHRpbWVvdXQpO1xuICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBvYmplY3RFcnJvckhhbmRsZXIobG9jYXRpb24pO1xuICByZXR1cm4gcmVxdWVzdEluZm87XG59XG5mdW5jdGlvbiBsaXN0JDIoc2VydmljZSwgbG9jYXRpb24sIGRlbGltaXRlciwgcGFnZVRva2VuLCBtYXhSZXN1bHRzKSB7XG4gIGNvbnN0IHVybFBhcmFtcyA9IHt9O1xuICBpZiAobG9jYXRpb24uaXNSb290KSB7XG4gICAgdXJsUGFyYW1zWydwcmVmaXgnXSA9ICcnO1xuICB9IGVsc2Uge1xuICAgIHVybFBhcmFtc1sncHJlZml4J10gPSBsb2NhdGlvbi5wYXRoICsgJy8nO1xuICB9XG4gIGlmIChkZWxpbWl0ZXIgJiYgZGVsaW1pdGVyLmxlbmd0aCA+IDApIHtcbiAgICB1cmxQYXJhbXNbJ2RlbGltaXRlciddID0gZGVsaW1pdGVyO1xuICB9XG4gIGlmIChwYWdlVG9rZW4pIHtcbiAgICB1cmxQYXJhbXNbJ3BhZ2VUb2tlbiddID0gcGFnZVRva2VuO1xuICB9XG4gIGlmIChtYXhSZXN1bHRzKSB7XG4gICAgdXJsUGFyYW1zWydtYXhSZXN1bHRzJ10gPSBtYXhSZXN1bHRzO1xuICB9XG4gIGNvbnN0IHVybFBhcnQgPSBsb2NhdGlvbi5idWNrZXRPbmx5U2VydmVyVXJsKCk7XG4gIGNvbnN0IHVybCA9IG1ha2VVcmwodXJsUGFydCwgc2VydmljZS5ob3N0LCBzZXJ2aWNlLl9wcm90b2NvbCk7XG4gIGNvbnN0IG1ldGhvZCA9ICdHRVQnO1xuICBjb25zdCB0aW1lb3V0ID0gc2VydmljZS5tYXhPcGVyYXRpb25SZXRyeVRpbWU7XG4gIGNvbnN0IHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKHVybCwgbWV0aG9kLCBsaXN0SGFuZGxlcihzZXJ2aWNlLCBsb2NhdGlvbi5idWNrZXQpLCB0aW1lb3V0KTtcbiAgcmVxdWVzdEluZm8udXJsUGFyYW1zID0gdXJsUGFyYW1zO1xuICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBzaGFyZWRFcnJvckhhbmRsZXIobG9jYXRpb24pO1xuICByZXR1cm4gcmVxdWVzdEluZm87XG59XG5mdW5jdGlvbiBnZXRCeXRlcyQxKHNlcnZpY2UsIGxvY2F0aW9uLCBtYXhEb3dubG9hZFNpemVCeXRlcykge1xuICBjb25zdCB1cmxQYXJ0ID0gbG9jYXRpb24uZnVsbFNlcnZlclVybCgpO1xuICBjb25zdCB1cmwgPSBtYWtlVXJsKHVybFBhcnQsIHNlcnZpY2UuaG9zdCwgc2VydmljZS5fcHJvdG9jb2wpICsgJz9hbHQ9bWVkaWEnO1xuICBjb25zdCBtZXRob2QgPSAnR0VUJztcbiAgY29uc3QgdGltZW91dCA9IHNlcnZpY2UubWF4T3BlcmF0aW9uUmV0cnlUaW1lO1xuICBjb25zdCByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgKF8sIGRhdGEpID0+IGRhdGEsIHRpbWVvdXQpO1xuICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBvYmplY3RFcnJvckhhbmRsZXIobG9jYXRpb24pO1xuICBpZiAobWF4RG93bmxvYWRTaXplQnl0ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJlcXVlc3RJbmZvLmhlYWRlcnNbJ1JhbmdlJ10gPSBgYnl0ZXM9MC0ke21heERvd25sb2FkU2l6ZUJ5dGVzfWA7XG4gICAgcmVxdWVzdEluZm8uc3VjY2Vzc0NvZGVzID0gWzIwMCAvKiBPSyAqLywgMjA2IC8qIFBhcnRpYWwgQ29udGVudCAqL107XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3RJbmZvO1xufVxuZnVuY3Rpb24gZ2V0RG93bmxvYWRVcmwoc2VydmljZSwgbG9jYXRpb24sIG1hcHBpbmdzKSB7XG4gIGNvbnN0IHVybFBhcnQgPSBsb2NhdGlvbi5mdWxsU2VydmVyVXJsKCk7XG4gIGNvbnN0IHVybCA9IG1ha2VVcmwodXJsUGFydCwgc2VydmljZS5ob3N0LCBzZXJ2aWNlLl9wcm90b2NvbCk7XG4gIGNvbnN0IG1ldGhvZCA9ICdHRVQnO1xuICBjb25zdCB0aW1lb3V0ID0gc2VydmljZS5tYXhPcGVyYXRpb25SZXRyeVRpbWU7XG4gIGNvbnN0IHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKHVybCwgbWV0aG9kLCBkb3dubG9hZFVybEhhbmRsZXIoc2VydmljZSwgbWFwcGluZ3MpLCB0aW1lb3V0KTtcbiAgcmVxdWVzdEluZm8uZXJyb3JIYW5kbGVyID0gb2JqZWN0RXJyb3JIYW5kbGVyKGxvY2F0aW9uKTtcbiAgcmV0dXJuIHJlcXVlc3RJbmZvO1xufVxuZnVuY3Rpb24gdXBkYXRlTWV0YWRhdGEkMihzZXJ2aWNlLCBsb2NhdGlvbiwgbWV0YWRhdGEsIG1hcHBpbmdzKSB7XG4gIGNvbnN0IHVybFBhcnQgPSBsb2NhdGlvbi5mdWxsU2VydmVyVXJsKCk7XG4gIGNvbnN0IHVybCA9IG1ha2VVcmwodXJsUGFydCwgc2VydmljZS5ob3N0LCBzZXJ2aWNlLl9wcm90b2NvbCk7XG4gIGNvbnN0IG1ldGhvZCA9ICdQQVRDSCc7XG4gIGNvbnN0IGJvZHkgPSB0b1Jlc291cmNlU3RyaW5nKG1ldGFkYXRhLCBtYXBwaW5ncyk7XG4gIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J1xuICB9O1xuICBjb25zdCB0aW1lb3V0ID0gc2VydmljZS5tYXhPcGVyYXRpb25SZXRyeVRpbWU7XG4gIGNvbnN0IHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKHVybCwgbWV0aG9kLCBtZXRhZGF0YUhhbmRsZXIoc2VydmljZSwgbWFwcGluZ3MpLCB0aW1lb3V0KTtcbiAgcmVxdWVzdEluZm8uaGVhZGVycyA9IGhlYWRlcnM7XG4gIHJlcXVlc3RJbmZvLmJvZHkgPSBib2R5O1xuICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBvYmplY3RFcnJvckhhbmRsZXIobG9jYXRpb24pO1xuICByZXR1cm4gcmVxdWVzdEluZm87XG59XG5mdW5jdGlvbiBkZWxldGVPYmplY3QkMihzZXJ2aWNlLCBsb2NhdGlvbikge1xuICBjb25zdCB1cmxQYXJ0ID0gbG9jYXRpb24uZnVsbFNlcnZlclVybCgpO1xuICBjb25zdCB1cmwgPSBtYWtlVXJsKHVybFBhcnQsIHNlcnZpY2UuaG9zdCwgc2VydmljZS5fcHJvdG9jb2wpO1xuICBjb25zdCBtZXRob2QgPSAnREVMRVRFJztcbiAgY29uc3QgdGltZW91dCA9IHNlcnZpY2UubWF4T3BlcmF0aW9uUmV0cnlUaW1lO1xuICBmdW5jdGlvbiBoYW5kbGVyKF94aHIsIF90ZXh0KSB7fVxuICBjb25zdCByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgaGFuZGxlciwgdGltZW91dCk7XG4gIHJlcXVlc3RJbmZvLnN1Y2Nlc3NDb2RlcyA9IFsyMDAsIDIwNF07XG4gIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IG9iamVjdEVycm9ySGFuZGxlcihsb2NhdGlvbik7XG4gIHJldHVybiByZXF1ZXN0SW5mbztcbn1cbmZ1bmN0aW9uIGRldGVybWluZUNvbnRlbnRUeXBlXyhtZXRhZGF0YSwgYmxvYikge1xuICByZXR1cm4gbWV0YWRhdGEgJiYgbWV0YWRhdGFbJ2NvbnRlbnRUeXBlJ10gfHwgYmxvYiAmJiBibG9iLnR5cGUoKSB8fCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbn1cbmZ1bmN0aW9uIG1ldGFkYXRhRm9yVXBsb2FkXyhsb2NhdGlvbiwgYmxvYiwgbWV0YWRhdGEpIHtcbiAgY29uc3QgbWV0YWRhdGFDbG9uZSA9IE9iamVjdC5hc3NpZ24oe30sIG1ldGFkYXRhKTtcbiAgbWV0YWRhdGFDbG9uZVsnZnVsbFBhdGgnXSA9IGxvY2F0aW9uLnBhdGg7XG4gIG1ldGFkYXRhQ2xvbmVbJ3NpemUnXSA9IGJsb2Iuc2l6ZSgpO1xuICBpZiAoIW1ldGFkYXRhQ2xvbmVbJ2NvbnRlbnRUeXBlJ10pIHtcbiAgICBtZXRhZGF0YUNsb25lWydjb250ZW50VHlwZSddID0gZGV0ZXJtaW5lQ29udGVudFR5cGVfKG51bGwsIGJsb2IpO1xuICB9XG4gIHJldHVybiBtZXRhZGF0YUNsb25lO1xufVxuLyoqXG4gKiBQcmVwYXJlIFJlcXVlc3RJbmZvIGZvciB1cGxvYWRzIGFzIENvbnRlbnQtVHlwZTogbXVsdGlwYXJ0LlxuICovXG5mdW5jdGlvbiBtdWx0aXBhcnRVcGxvYWQoc2VydmljZSwgbG9jYXRpb24sIG1hcHBpbmdzLCBibG9iLCBtZXRhZGF0YSkge1xuICBjb25zdCB1cmxQYXJ0ID0gbG9jYXRpb24uYnVja2V0T25seVNlcnZlclVybCgpO1xuICBjb25zdCBoZWFkZXJzID0ge1xuICAgICdYLUdvb2ctVXBsb2FkLVByb3RvY29sJzogJ211bHRpcGFydCdcbiAgfTtcbiAgZnVuY3Rpb24gZ2VuQm91bmRhcnkoKSB7XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICBzdHIgPSBzdHIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH1cbiAgY29uc3QgYm91bmRhcnkgPSBnZW5Cb3VuZGFyeSgpO1xuICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdtdWx0aXBhcnQvcmVsYXRlZDsgYm91bmRhcnk9JyArIGJvdW5kYXJ5O1xuICBjb25zdCBtZXRhZGF0YV8gPSBtZXRhZGF0YUZvclVwbG9hZF8obG9jYXRpb24sIGJsb2IsIG1ldGFkYXRhKTtcbiAgY29uc3QgbWV0YWRhdGFTdHJpbmcgPSB0b1Jlc291cmNlU3RyaW5nKG1ldGFkYXRhXywgbWFwcGluZ3MpO1xuICBjb25zdCBwcmVCbG9iUGFydCA9ICctLScgKyBib3VuZGFyeSArICdcXHJcXG4nICsgJ0NvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFxcclxcblxcclxcbicgKyBtZXRhZGF0YVN0cmluZyArICdcXHJcXG4tLScgKyBib3VuZGFyeSArICdcXHJcXG4nICsgJ0NvbnRlbnQtVHlwZTogJyArIG1ldGFkYXRhX1snY29udGVudFR5cGUnXSArICdcXHJcXG5cXHJcXG4nO1xuICBjb25zdCBwb3N0QmxvYlBhcnQgPSAnXFxyXFxuLS0nICsgYm91bmRhcnkgKyAnLS0nO1xuICBjb25zdCBib2R5ID0gRmJzQmxvYi5nZXRCbG9iKHByZUJsb2JQYXJ0LCBibG9iLCBwb3N0QmxvYlBhcnQpO1xuICBpZiAoYm9keSA9PT0gbnVsbCkge1xuICAgIHRocm93IGNhbm5vdFNsaWNlQmxvYigpO1xuICB9XG4gIGNvbnN0IHVybFBhcmFtcyA9IHtcbiAgICBuYW1lOiBtZXRhZGF0YV9bJ2Z1bGxQYXRoJ11cbiAgfTtcbiAgY29uc3QgdXJsID0gbWFrZVVybCh1cmxQYXJ0LCBzZXJ2aWNlLmhvc3QsIHNlcnZpY2UuX3Byb3RvY29sKTtcbiAgY29uc3QgbWV0aG9kID0gJ1BPU1QnO1xuICBjb25zdCB0aW1lb3V0ID0gc2VydmljZS5tYXhVcGxvYWRSZXRyeVRpbWU7XG4gIGNvbnN0IHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKHVybCwgbWV0aG9kLCBtZXRhZGF0YUhhbmRsZXIoc2VydmljZSwgbWFwcGluZ3MpLCB0aW1lb3V0KTtcbiAgcmVxdWVzdEluZm8udXJsUGFyYW1zID0gdXJsUGFyYW1zO1xuICByZXF1ZXN0SW5mby5oZWFkZXJzID0gaGVhZGVycztcbiAgcmVxdWVzdEluZm8uYm9keSA9IGJvZHkudXBsb2FkRGF0YSgpO1xuICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBzaGFyZWRFcnJvckhhbmRsZXIobG9jYXRpb24pO1xuICByZXR1cm4gcmVxdWVzdEluZm87XG59XG4vKipcbiAqIEBwYXJhbSBjdXJyZW50IFRoZSBudW1iZXIgb2YgYnl0ZXMgdGhhdCBoYXZlIGJlZW4gdXBsb2FkZWQgc28gZmFyLlxuICogQHBhcmFtIHRvdGFsIFRoZSB0b3RhbCBudW1iZXIgb2YgYnl0ZXMgaW4gdGhlIHVwbG9hZC5cbiAqIEBwYXJhbSBvcHRfZmluYWxpemVkIFRydWUgaWYgdGhlIHNlcnZlciBoYXMgZmluaXNoZWQgdGhlIHVwbG9hZC5cbiAqIEBwYXJhbSBvcHRfbWV0YWRhdGEgVGhlIHVwbG9hZCBtZXRhZGF0YSwgc2hvdWxkXG4gKiAgICAgb25seSBiZSBwYXNzZWQgaWYgb3B0X2ZpbmFsaXplZCBpcyB0cnVlLlxuICovXG5jbGFzcyBSZXN1bWFibGVVcGxvYWRTdGF0dXMge1xuICBjb25zdHJ1Y3RvcihjdXJyZW50LCB0b3RhbCwgZmluYWxpemVkLCBtZXRhZGF0YSkge1xuICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnQ7XG4gICAgdGhpcy50b3RhbCA9IHRvdGFsO1xuICAgIHRoaXMuZmluYWxpemVkID0gISFmaW5hbGl6ZWQ7XG4gICAgdGhpcy5tZXRhZGF0YSA9IG1ldGFkYXRhIHx8IG51bGw7XG4gIH1cbn1cbmZ1bmN0aW9uIGNoZWNrUmVzdW1lSGVhZGVyXyh4aHIsIGFsbG93ZWQpIHtcbiAgbGV0IHN0YXR1cyA9IG51bGw7XG4gIHRyeSB7XG4gICAgc3RhdHVzID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdYLUdvb2ctVXBsb2FkLVN0YXR1cycpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaGFuZGxlckNoZWNrKGZhbHNlKTtcbiAgfVxuICBjb25zdCBhbGxvd2VkU3RhdHVzID0gYWxsb3dlZCB8fCBbJ2FjdGl2ZSddO1xuICBoYW5kbGVyQ2hlY2soISFzdGF0dXMgJiYgYWxsb3dlZFN0YXR1cy5pbmRleE9mKHN0YXR1cykgIT09IC0xKTtcbiAgcmV0dXJuIHN0YXR1cztcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJlc3VtYWJsZVVwbG9hZChzZXJ2aWNlLCBsb2NhdGlvbiwgbWFwcGluZ3MsIGJsb2IsIG1ldGFkYXRhKSB7XG4gIGNvbnN0IHVybFBhcnQgPSBsb2NhdGlvbi5idWNrZXRPbmx5U2VydmVyVXJsKCk7XG4gIGNvbnN0IG1ldGFkYXRhRm9yVXBsb2FkID0gbWV0YWRhdGFGb3JVcGxvYWRfKGxvY2F0aW9uLCBibG9iLCBtZXRhZGF0YSk7XG4gIGNvbnN0IHVybFBhcmFtcyA9IHtcbiAgICBuYW1lOiBtZXRhZGF0YUZvclVwbG9hZFsnZnVsbFBhdGgnXVxuICB9O1xuICBjb25zdCB1cmwgPSBtYWtlVXJsKHVybFBhcnQsIHNlcnZpY2UuaG9zdCwgc2VydmljZS5fcHJvdG9jb2wpO1xuICBjb25zdCBtZXRob2QgPSAnUE9TVCc7XG4gIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgJ1gtR29vZy1VcGxvYWQtUHJvdG9jb2wnOiAncmVzdW1hYmxlJyxcbiAgICAnWC1Hb29nLVVwbG9hZC1Db21tYW5kJzogJ3N0YXJ0JyxcbiAgICAnWC1Hb29nLVVwbG9hZC1IZWFkZXItQ29udGVudC1MZW5ndGgnOiBgJHtibG9iLnNpemUoKX1gLFxuICAgICdYLUdvb2ctVXBsb2FkLUhlYWRlci1Db250ZW50LVR5cGUnOiBtZXRhZGF0YUZvclVwbG9hZFsnY29udGVudFR5cGUnXSxcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXG4gIH07XG4gIGNvbnN0IGJvZHkgPSB0b1Jlc291cmNlU3RyaW5nKG1ldGFkYXRhRm9yVXBsb2FkLCBtYXBwaW5ncyk7XG4gIGNvbnN0IHRpbWVvdXQgPSBzZXJ2aWNlLm1heFVwbG9hZFJldHJ5VGltZTtcbiAgZnVuY3Rpb24gaGFuZGxlcih4aHIpIHtcbiAgICBjaGVja1Jlc3VtZUhlYWRlcl8oeGhyKTtcbiAgICBsZXQgdXJsO1xuICAgIHRyeSB7XG4gICAgICB1cmwgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ1gtR29vZy1VcGxvYWQtVVJMJyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaGFuZGxlckNoZWNrKGZhbHNlKTtcbiAgICB9XG4gICAgaGFuZGxlckNoZWNrKGlzU3RyaW5nKHVybCkpO1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgY29uc3QgcmVxdWVzdEluZm8gPSBuZXcgUmVxdWVzdEluZm8odXJsLCBtZXRob2QsIGhhbmRsZXIsIHRpbWVvdXQpO1xuICByZXF1ZXN0SW5mby51cmxQYXJhbXMgPSB1cmxQYXJhbXM7XG4gIHJlcXVlc3RJbmZvLmhlYWRlcnMgPSBoZWFkZXJzO1xuICByZXF1ZXN0SW5mby5ib2R5ID0gYm9keTtcbiAgcmVxdWVzdEluZm8uZXJyb3JIYW5kbGVyID0gc2hhcmVkRXJyb3JIYW5kbGVyKGxvY2F0aW9uKTtcbiAgcmV0dXJuIHJlcXVlc3RJbmZvO1xufVxuLyoqXG4gKiBAcGFyYW0gdXJsIEZyb20gYSBjYWxsIHRvIGZicy5yZXF1ZXN0cy5jcmVhdGVSZXN1bWFibGVVcGxvYWQuXG4gKi9cbmZ1bmN0aW9uIGdldFJlc3VtYWJsZVVwbG9hZFN0YXR1cyhzZXJ2aWNlLCBsb2NhdGlvbiwgdXJsLCBibG9iKSB7XG4gIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgJ1gtR29vZy1VcGxvYWQtQ29tbWFuZCc6ICdxdWVyeSdcbiAgfTtcbiAgZnVuY3Rpb24gaGFuZGxlcih4aHIpIHtcbiAgICBjb25zdCBzdGF0dXMgPSBjaGVja1Jlc3VtZUhlYWRlcl8oeGhyLCBbJ2FjdGl2ZScsICdmaW5hbCddKTtcbiAgICBsZXQgc2l6ZVN0cmluZyA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIHNpemVTdHJpbmcgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ1gtR29vZy1VcGxvYWQtU2l6ZS1SZWNlaXZlZCcpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGhhbmRsZXJDaGVjayhmYWxzZSk7XG4gICAgfVxuICAgIGlmICghc2l6ZVN0cmluZykge1xuICAgICAgLy8gbnVsbCBvciBlbXB0eSBzdHJpbmdcbiAgICAgIGhhbmRsZXJDaGVjayhmYWxzZSk7XG4gICAgfVxuICAgIGNvbnN0IHNpemUgPSBOdW1iZXIoc2l6ZVN0cmluZyk7XG4gICAgaGFuZGxlckNoZWNrKCFpc05hTihzaXplKSk7XG4gICAgcmV0dXJuIG5ldyBSZXN1bWFibGVVcGxvYWRTdGF0dXMoc2l6ZSwgYmxvYi5zaXplKCksIHN0YXR1cyA9PT0gJ2ZpbmFsJyk7XG4gIH1cbiAgY29uc3QgbWV0aG9kID0gJ1BPU1QnO1xuICBjb25zdCB0aW1lb3V0ID0gc2VydmljZS5tYXhVcGxvYWRSZXRyeVRpbWU7XG4gIGNvbnN0IHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKHVybCwgbWV0aG9kLCBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgcmVxdWVzdEluZm8uaGVhZGVycyA9IGhlYWRlcnM7XG4gIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IHNoYXJlZEVycm9ySGFuZGxlcihsb2NhdGlvbik7XG4gIHJldHVybiByZXF1ZXN0SW5mbztcbn1cbi8qKlxuICogQW55IHVwbG9hZHMgdmlhIHRoZSByZXN1bWFibGUgdXBsb2FkIEFQSSBtdXN0IHRyYW5zZmVyIGEgbnVtYmVyIG9mIGJ5dGVzXG4gKiB0aGF0IGlzIGEgbXVsdGlwbGUgb2YgdGhpcyBudW1iZXIuXG4gKi9cbmNvbnN0IFJFU1VNQUJMRV9VUExPQURfQ0hVTktfU0laRSA9IDI1NiAqIDEwMjQ7XG4vKipcbiAqIEBwYXJhbSB1cmwgRnJvbSBhIGNhbGwgdG8gZmJzLnJlcXVlc3RzLmNyZWF0ZVJlc3VtYWJsZVVwbG9hZC5cbiAqIEBwYXJhbSBjaHVua1NpemUgTnVtYmVyIG9mIGJ5dGVzIHRvIHVwbG9hZC5cbiAqIEBwYXJhbSBzdGF0dXMgVGhlIHByZXZpb3VzIHN0YXR1cy5cbiAqICAgICBJZiBub3QgcGFzc2VkIG9yIG51bGwsIHdlIHN0YXJ0IGZyb20gdGhlIGJlZ2lubmluZy5cbiAqIEB0aHJvd3MgZmJzLkVycm9yIElmIHRoZSB1cGxvYWQgaXMgYWxyZWFkeSBjb21wbGV0ZSwgdGhlIHBhc3NlZCBpbiBzdGF0dXNcbiAqICAgICBoYXMgYSBmaW5hbCBzaXplIGluY29uc2lzdGVudCB3aXRoIHRoZSBibG9iLCBvciB0aGUgYmxvYiBjYW5ub3QgYmUgc2xpY2VkXG4gKiAgICAgZm9yIHVwbG9hZC5cbiAqL1xuZnVuY3Rpb24gY29udGludWVSZXN1bWFibGVVcGxvYWQobG9jYXRpb24sIHNlcnZpY2UsIHVybCwgYmxvYiwgY2h1bmtTaXplLCBtYXBwaW5ncywgc3RhdHVzLCBwcm9ncmVzc0NhbGxiYWNrKSB7XG4gIC8vIFRPRE8oYW5keXNvdG8pOiBzdGFuZGFyZGl6ZSBvbiBpbnRlcm5hbCBhc3NlcnRzXG4gIC8vIGFzc2VydCghKG9wdF9zdGF0dXMgJiYgb3B0X3N0YXR1cy5maW5hbGl6ZWQpKTtcbiAgY29uc3Qgc3RhdHVzXyA9IG5ldyBSZXN1bWFibGVVcGxvYWRTdGF0dXMoMCwgMCk7XG4gIGlmIChzdGF0dXMpIHtcbiAgICBzdGF0dXNfLmN1cnJlbnQgPSBzdGF0dXMuY3VycmVudDtcbiAgICBzdGF0dXNfLnRvdGFsID0gc3RhdHVzLnRvdGFsO1xuICB9IGVsc2Uge1xuICAgIHN0YXR1c18uY3VycmVudCA9IDA7XG4gICAgc3RhdHVzXy50b3RhbCA9IGJsb2Iuc2l6ZSgpO1xuICB9XG4gIGlmIChibG9iLnNpemUoKSAhPT0gc3RhdHVzXy50b3RhbCkge1xuICAgIHRocm93IHNlcnZlckZpbGVXcm9uZ1NpemUoKTtcbiAgfVxuICBjb25zdCBieXRlc0xlZnQgPSBzdGF0dXNfLnRvdGFsIC0gc3RhdHVzXy5jdXJyZW50O1xuICBsZXQgYnl0ZXNUb1VwbG9hZCA9IGJ5dGVzTGVmdDtcbiAgaWYgKGNodW5rU2l6ZSA+IDApIHtcbiAgICBieXRlc1RvVXBsb2FkID0gTWF0aC5taW4oYnl0ZXNUb1VwbG9hZCwgY2h1bmtTaXplKTtcbiAgfVxuICBjb25zdCBzdGFydEJ5dGUgPSBzdGF0dXNfLmN1cnJlbnQ7XG4gIGNvbnN0IGVuZEJ5dGUgPSBzdGFydEJ5dGUgKyBieXRlc1RvVXBsb2FkO1xuICBsZXQgdXBsb2FkQ29tbWFuZCA9ICcnO1xuICBpZiAoYnl0ZXNUb1VwbG9hZCA9PT0gMCkge1xuICAgIHVwbG9hZENvbW1hbmQgPSAnZmluYWxpemUnO1xuICB9IGVsc2UgaWYgKGJ5dGVzTGVmdCA9PT0gYnl0ZXNUb1VwbG9hZCkge1xuICAgIHVwbG9hZENvbW1hbmQgPSAndXBsb2FkLCBmaW5hbGl6ZSc7XG4gIH0gZWxzZSB7XG4gICAgdXBsb2FkQ29tbWFuZCA9ICd1cGxvYWQnO1xuICB9XG4gIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgJ1gtR29vZy1VcGxvYWQtQ29tbWFuZCc6IHVwbG9hZENvbW1hbmQsXG4gICAgJ1gtR29vZy1VcGxvYWQtT2Zmc2V0JzogYCR7c3RhdHVzXy5jdXJyZW50fWBcbiAgfTtcbiAgY29uc3QgYm9keSA9IGJsb2Iuc2xpY2Uoc3RhcnRCeXRlLCBlbmRCeXRlKTtcbiAgaWYgKGJvZHkgPT09IG51bGwpIHtcbiAgICB0aHJvdyBjYW5ub3RTbGljZUJsb2IoKTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVyKHhociwgdGV4dCkge1xuICAgIC8vIFRPRE8oYW5keXNvdG8pOiBWZXJpZnkgdGhlIE1ENSBvZiBlYWNoIHVwbG9hZGVkIHJhbmdlOlxuICAgIC8vIHRoZSAneC1yYW5nZS1tZDUnIGhlYWRlciBjb21lcyBiYWNrIHdpdGggc3RhdHVzIGNvZGUgMzA4IHJlc3BvbnNlcy5cbiAgICAvLyBXZSdsbCBvbmx5IGJlIGFibGUgdG8gYmFpbCBvdXQgdGhvdWdoLCBiZWNhdXNlIHlvdSBjYW4ndCByZS11cGxvYWQgYVxuICAgIC8vIHJhbmdlIHRoYXQgeW91IHByZXZpb3VzbHkgdXBsb2FkZWQuXG4gICAgY29uc3QgdXBsb2FkU3RhdHVzID0gY2hlY2tSZXN1bWVIZWFkZXJfKHhociwgWydhY3RpdmUnLCAnZmluYWwnXSk7XG4gICAgY29uc3QgbmV3Q3VycmVudCA9IHN0YXR1c18uY3VycmVudCArIGJ5dGVzVG9VcGxvYWQ7XG4gICAgY29uc3Qgc2l6ZSA9IGJsb2Iuc2l6ZSgpO1xuICAgIGxldCBtZXRhZGF0YTtcbiAgICBpZiAodXBsb2FkU3RhdHVzID09PSAnZmluYWwnKSB7XG4gICAgICBtZXRhZGF0YSA9IG1ldGFkYXRhSGFuZGxlcihzZXJ2aWNlLCBtYXBwaW5ncykoeGhyLCB0ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWV0YWRhdGEgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlc3VtYWJsZVVwbG9hZFN0YXR1cyhuZXdDdXJyZW50LCBzaXplLCB1cGxvYWRTdGF0dXMgPT09ICdmaW5hbCcsIG1ldGFkYXRhKTtcbiAgfVxuICBjb25zdCBtZXRob2QgPSAnUE9TVCc7XG4gIGNvbnN0IHRpbWVvdXQgPSBzZXJ2aWNlLm1heFVwbG9hZFJldHJ5VGltZTtcbiAgY29uc3QgcmVxdWVzdEluZm8gPSBuZXcgUmVxdWVzdEluZm8odXJsLCBtZXRob2QsIGhhbmRsZXIsIHRpbWVvdXQpO1xuICByZXF1ZXN0SW5mby5oZWFkZXJzID0gaGVhZGVycztcbiAgcmVxdWVzdEluZm8uYm9keSA9IGJvZHkudXBsb2FkRGF0YSgpO1xuICByZXF1ZXN0SW5mby5wcm9ncmVzc0NhbGxiYWNrID0gcHJvZ3Jlc3NDYWxsYmFjayB8fCBudWxsO1xuICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBzaGFyZWRFcnJvckhhbmRsZXIobG9jYXRpb24pO1xuICByZXR1cm4gcmVxdWVzdEluZm87XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIEFuIGV2ZW50IHRoYXQgaXMgdHJpZ2dlcmVkIG9uIGEgdGFzay5cbiAqIEBpbnRlcm5hbFxuICovXG5jb25zdCBUYXNrRXZlbnQgPSB7XG4gIC8qKlxuICAgKiBGb3IgdGhpcyBldmVudCxcbiAgICogPHVsPlxuICAgKiAgIDxsaT5UaGUgYG5leHRgIGZ1bmN0aW9uIGlzIHRyaWdnZXJlZCBvbiBwcm9ncmVzcyB1cGRhdGVzIGFuZCB3aGVuIHRoZVxuICAgKiAgICAgICB0YXNrIGlzIHBhdXNlZC9yZXN1bWVkIHdpdGggYW4gYFVwbG9hZFRhc2tTbmFwc2hvdGAgYXMgdGhlIGZpcnN0XG4gICAqICAgICAgIGFyZ3VtZW50LjwvbGk+XG4gICAqICAgPGxpPlRoZSBgZXJyb3JgIGZ1bmN0aW9uIGlzIHRyaWdnZXJlZCBpZiB0aGUgdXBsb2FkIGlzIGNhbmNlbGVkIG9yIGZhaWxzXG4gICAqICAgICAgIGZvciBhbm90aGVyIHJlYXNvbi48L2xpPlxuICAgKiAgIDxsaT5UaGUgYGNvbXBsZXRlYCBmdW5jdGlvbiBpcyB0cmlnZ2VyZWQgaWYgdGhlIHVwbG9hZCBjb21wbGV0ZXNcbiAgICogICAgICAgc3VjY2Vzc2Z1bGx5LjwvbGk+XG4gICAqIDwvdWw+XG4gICAqL1xuICBTVEFURV9DSEFOR0VEOiAnc3RhdGVfY2hhbmdlZCdcbn07XG4vLyB0eXBlIGtleXMgPSBrZXlvZiBUYXNrU3RhdGVcbi8qKlxuICogUmVwcmVzZW50cyB0aGUgY3VycmVudCBzdGF0ZSBvZiBhIHJ1bm5pbmcgdXBsb2FkLlxuICogQGludGVybmFsXG4gKi9cbmNvbnN0IFRhc2tTdGF0ZSA9IHtcbiAgLyoqIFRoZSB0YXNrIGlzIGN1cnJlbnRseSB0cmFuc2ZlcnJpbmcgZGF0YS4gKi9cbiAgUlVOTklORzogJ3J1bm5pbmcnLFxuICAvKiogVGhlIHRhc2sgd2FzIHBhdXNlZCBieSB0aGUgdXNlci4gKi9cbiAgUEFVU0VEOiAncGF1c2VkJyxcbiAgLyoqIFRoZSB0YXNrIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHkuICovXG4gIFNVQ0NFU1M6ICdzdWNjZXNzJyxcbiAgLyoqIFRoZSB0YXNrIHdhcyBjYW5jZWxlZC4gKi9cbiAgQ0FOQ0VMRUQ6ICdjYW5jZWxlZCcsXG4gIC8qKiBUaGUgdGFzayBmYWlsZWQgd2l0aCBhbiBlcnJvci4gKi9cbiAgRVJST1I6ICdlcnJvcidcbn07XG5mdW5jdGlvbiB0YXNrU3RhdGVGcm9tSW50ZXJuYWxUYXNrU3RhdGUoc3RhdGUpIHtcbiAgc3dpdGNoIChzdGF0ZSkge1xuICAgIGNhc2UgXCJydW5uaW5nXCIgLyogSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORyAqLzpcbiAgICBjYXNlIFwicGF1c2luZ1wiIC8qIEludGVybmFsVGFza1N0YXRlLlBBVVNJTkcgKi86XG4gICAgY2FzZSBcImNhbmNlbGluZ1wiIC8qIEludGVybmFsVGFza1N0YXRlLkNBTkNFTElORyAqLzpcbiAgICAgIHJldHVybiBUYXNrU3RhdGUuUlVOTklORztcbiAgICBjYXNlIFwicGF1c2VkXCIgLyogSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0VEICovOlxuICAgICAgcmV0dXJuIFRhc2tTdGF0ZS5QQVVTRUQ7XG4gICAgY2FzZSBcInN1Y2Nlc3NcIiAvKiBJbnRlcm5hbFRhc2tTdGF0ZS5TVUNDRVNTICovOlxuICAgICAgcmV0dXJuIFRhc2tTdGF0ZS5TVUNDRVNTO1xuICAgIGNhc2UgXCJjYW5jZWxlZFwiIC8qIEludGVybmFsVGFza1N0YXRlLkNBTkNFTEVEICovOlxuICAgICAgcmV0dXJuIFRhc2tTdGF0ZS5DQU5DRUxFRDtcbiAgICBjYXNlIFwiZXJyb3JcIiAvKiBJbnRlcm5hbFRhc2tTdGF0ZS5FUlJPUiAqLzpcbiAgICAgIHJldHVybiBUYXNrU3RhdGUuRVJST1I7XG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIFRPRE8oYW5keXNvdG8pOiBhc3NlcnQoZmFsc2UpO1xuICAgICAgcmV0dXJuIFRhc2tTdGF0ZS5FUlJPUjtcbiAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuY2xhc3MgT2JzZXJ2ZXIge1xuICBjb25zdHJ1Y3RvcihuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgY29uc3QgYXNGdW5jdGlvbnMgPSBpc0Z1bmN0aW9uKG5leHRPck9ic2VydmVyKSB8fCBlcnJvciAhPSBudWxsIHx8IGNvbXBsZXRlICE9IG51bGw7XG4gICAgaWYgKGFzRnVuY3Rpb25zKSB7XG4gICAgICB0aGlzLm5leHQgPSBuZXh0T3JPYnNlcnZlcjtcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvciAhPT0gbnVsbCAmJiBlcnJvciAhPT0gdm9pZCAwID8gZXJyb3IgOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGUgIT09IG51bGwgJiYgY29tcGxldGUgIT09IHZvaWQgMCA/IGNvbXBsZXRlIDogdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5leHRPck9ic2VydmVyO1xuICAgICAgdGhpcy5uZXh0ID0gb2JzZXJ2ZXIubmV4dDtcbiAgICAgIHRoaXMuZXJyb3IgPSBvYnNlcnZlci5lcnJvcjtcbiAgICAgIHRoaXMuY29tcGxldGUgPSBvYnNlcnZlci5jb21wbGV0ZTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBmIHdpdGggaXRzIGFyZ3VtZW50cyBhc3luY2hyb25vdXNseSBhcyBhXG4gKiBtaWNyb3Rhc2ssIGkuZS4gYXMgc29vbiBhcyBwb3NzaWJsZSBhZnRlciB0aGUgY3VycmVudCBzY3JpcHQgcmV0dXJucyBiYWNrXG4gKiBpbnRvIGJyb3dzZXIgY29kZS5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmZ1bmN0aW9uIGFzeW5jKGYpIHtcbiAgcmV0dXJuICguLi5hcmdzVG9Gb3J3YXJkKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gZiguLi5hcmdzVG9Gb3J3YXJkKSk7XG4gIH07XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKiogQW4gb3ZlcnJpZGUgZm9yIHRoZSB0ZXh0LWJhc2VkIENvbm5lY3Rpb24uIFVzZWQgaW4gdGVzdHMuICovXG5sZXQgdGV4dEZhY3RvcnlPdmVycmlkZSA9IG51bGw7XG4vKipcbiAqIE5ldHdvcmsgbGF5ZXIgZm9yIGJyb3dzZXJzLiBXZSB1c2UgdGhpcyBpbnN0ZWFkIG9mIGdvb2cubmV0LlhocklvIGJlY2F1c2VcbiAqIGdvb2cubmV0LlhocklvIGlzIGh5dXV1dWdlIGFuZCBkb2Vzbid0IHdvcmsgaW4gUmVhY3QgTmF0aXZlIG9uIEFuZHJvaWQuXG4gKi9cbmNsYXNzIFhockNvbm5lY3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNlbnRfID0gZmFsc2U7XG4gICAgdGhpcy54aHJfID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdGhpcy5pbml0WGhyKCk7XG4gICAgdGhpcy5lcnJvckNvZGVfID0gRXJyb3JDb2RlLk5PX0VSUk9SO1xuICAgIHRoaXMuc2VuZFByb21pc2VfID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLnhocl8uYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZXJyb3JDb2RlXyA9IEVycm9yQ29kZS5BQk9SVDtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnhocl8uYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZXJyb3JDb2RlXyA9IEVycm9yQ29kZS5ORVRXT1JLX0VSUk9SO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMueGhyXy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBzZW5kKHVybCwgbWV0aG9kLCBib2R5LCBoZWFkZXJzKSB7XG4gICAgaWYgKHRoaXMuc2VudF8pIHtcbiAgICAgIHRocm93IGludGVybmFsRXJyb3IoJ2Nhbm5vdCAuc2VuZCgpIG1vcmUgdGhhbiBvbmNlJyk7XG4gICAgfVxuICAgIHRoaXMuc2VudF8gPSB0cnVlO1xuICAgIHRoaXMueGhyXy5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICBpZiAoaGVhZGVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBoZWFkZXJzKSB7XG4gICAgICAgIGlmIChoZWFkZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICB0aGlzLnhocl8uc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XS50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYm9keSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnhocl8uc2VuZChib2R5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy54aHJfLnNlbmQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2VuZFByb21pc2VfO1xuICB9XG4gIGdldEVycm9yQ29kZSgpIHtcbiAgICBpZiAoIXRoaXMuc2VudF8pIHtcbiAgICAgIHRocm93IGludGVybmFsRXJyb3IoJ2Nhbm5vdCAuZ2V0RXJyb3JDb2RlKCkgYmVmb3JlIHNlbmRpbmcnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JDb2RlXztcbiAgfVxuICBnZXRTdGF0dXMoKSB7XG4gICAgaWYgKCF0aGlzLnNlbnRfKSB7XG4gICAgICB0aHJvdyBpbnRlcm5hbEVycm9yKCdjYW5ub3QgLmdldFN0YXR1cygpIGJlZm9yZSBzZW5kaW5nJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy54aHJfLnN0YXR1cztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9XG4gIGdldFJlc3BvbnNlKCkge1xuICAgIGlmICghdGhpcy5zZW50Xykge1xuICAgICAgdGhyb3cgaW50ZXJuYWxFcnJvcignY2Fubm90IC5nZXRSZXNwb25zZSgpIGJlZm9yZSBzZW5kaW5nJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnhocl8ucmVzcG9uc2U7XG4gIH1cbiAgZ2V0RXJyb3JUZXh0KCkge1xuICAgIGlmICghdGhpcy5zZW50Xykge1xuICAgICAgdGhyb3cgaW50ZXJuYWxFcnJvcignY2Fubm90IC5nZXRFcnJvclRleHQoKSBiZWZvcmUgc2VuZGluZycpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy54aHJfLnN0YXR1c1RleHQ7XG4gIH1cbiAgLyoqIEFib3J0cyB0aGUgcmVxdWVzdC4gKi9cbiAgYWJvcnQoKSB7XG4gICAgdGhpcy54aHJfLmFib3J0KCk7XG4gIH1cbiAgZ2V0UmVzcG9uc2VIZWFkZXIoaGVhZGVyKSB7XG4gICAgcmV0dXJuIHRoaXMueGhyXy5nZXRSZXNwb25zZUhlYWRlcihoZWFkZXIpO1xuICB9XG4gIGFkZFVwbG9hZFByb2dyZXNzTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBpZiAodGhpcy54aHJfLnVwbG9hZCAhPSBudWxsKSB7XG4gICAgICB0aGlzLnhocl8udXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgbGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuICByZW1vdmVVcGxvYWRQcm9ncmVzc0xpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgaWYgKHRoaXMueGhyXy51cGxvYWQgIT0gbnVsbCkge1xuICAgICAgdGhpcy54aHJfLnVwbG9hZC5yZW1vdmVFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH1cbn1cbmNsYXNzIFhoclRleHRDb25uZWN0aW9uIGV4dGVuZHMgWGhyQ29ubmVjdGlvbiB7XG4gIGluaXRYaHIoKSB7XG4gICAgdGhpcy54aHJfLnJlc3BvbnNlVHlwZSA9ICd0ZXh0JztcbiAgfVxufVxuZnVuY3Rpb24gbmV3VGV4dENvbm5lY3Rpb24oKSB7XG4gIHJldHVybiB0ZXh0RmFjdG9yeU92ZXJyaWRlID8gdGV4dEZhY3RvcnlPdmVycmlkZSgpIDogbmV3IFhoclRleHRDb25uZWN0aW9uKCk7XG59XG5jbGFzcyBYaHJCeXRlc0Nvbm5lY3Rpb24gZXh0ZW5kcyBYaHJDb25uZWN0aW9uIHtcbiAgaW5pdFhocigpIHtcbiAgICB0aGlzLnhocl8ucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgfVxufVxuZnVuY3Rpb24gbmV3Qnl0ZXNDb25uZWN0aW9uKCkge1xuICByZXR1cm4gbmV3IFhockJ5dGVzQ29ubmVjdGlvbigpO1xufVxuY2xhc3MgWGhyQmxvYkNvbm5lY3Rpb24gZXh0ZW5kcyBYaHJDb25uZWN0aW9uIHtcbiAgaW5pdFhocigpIHtcbiAgICB0aGlzLnhocl8ucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xuICB9XG59XG5mdW5jdGlvbiBuZXdCbG9iQ29ubmVjdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBYaHJCbG9iQ29ubmVjdGlvbigpO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBSZXByZXNlbnRzIGEgYmxvYiBiZWluZyB1cGxvYWRlZC4gQ2FuIGJlIHVzZWQgdG8gcGF1c2UvcmVzdW1lL2NhbmNlbCB0aGVcbiAqIHVwbG9hZCBhbmQgbWFuYWdlIGNhbGxiYWNrcyBmb3IgdmFyaW91cyBldmVudHMuXG4gKiBAaW50ZXJuYWxcbiAqL1xuY2xhc3MgVXBsb2FkVGFzayB7XG4gIGlzRXhwb25lbnRpYWxCYWNrb2ZmRXhwaXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zbGVlcFRpbWUgPiB0aGlzLm1heFNsZWVwVGltZTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHJlZiAtIFRoZSBmaXJlYmFzZVN0b3JhZ2UuUmVmZXJlbmNlIG9iamVjdCB0aGlzIHRhc2sgY2FtZVxuICAgKiAgICAgZnJvbSwgdW50eXBlZCB0byBhdm9pZCBjeWNsaWMgZGVwZW5kZW5jaWVzLlxuICAgKiBAcGFyYW0gYmxvYiAtIFRoZSBibG9iIHRvIHVwbG9hZC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHJlZiwgYmxvYiwgbWV0YWRhdGEgPSBudWxsKSB7XG4gICAgLyoqXG4gICAgICogTnVtYmVyIG9mIGJ5dGVzIHRyYW5zZmVycmVkIHNvIGZhci5cbiAgICAgKi9cbiAgICB0aGlzLl90cmFuc2ZlcnJlZCA9IDA7XG4gICAgdGhpcy5fbmVlZFRvRmV0Y2hTdGF0dXMgPSBmYWxzZTtcbiAgICB0aGlzLl9uZWVkVG9GZXRjaE1ldGFkYXRhID0gZmFsc2U7XG4gICAgdGhpcy5fb2JzZXJ2ZXJzID0gW107XG4gICAgdGhpcy5fZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fdXBsb2FkVXJsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3JlcXVlc3QgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fY2h1bmtNdWx0aXBsaWVyID0gMTtcbiAgICB0aGlzLl9yZXNvbHZlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3JlamVjdCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9yZWYgPSByZWY7XG4gICAgdGhpcy5fYmxvYiA9IGJsb2I7XG4gICAgdGhpcy5fbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICB0aGlzLl9tYXBwaW5ncyA9IGdldE1hcHBpbmdzKCk7XG4gICAgdGhpcy5fcmVzdW1hYmxlID0gdGhpcy5fc2hvdWxkRG9SZXN1bWFibGUodGhpcy5fYmxvYik7XG4gICAgdGhpcy5fc3RhdGUgPSBcInJ1bm5pbmdcIiAvKiBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HICovO1xuICAgIHRoaXMuX2Vycm9ySGFuZGxlciA9IGVycm9yID0+IHtcbiAgICAgIHRoaXMuX3JlcXVlc3QgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jaHVua011bHRpcGxpZXIgPSAxO1xuICAgICAgaWYgKGVycm9yLl9jb2RlRXF1YWxzKFN0b3JhZ2VFcnJvckNvZGUuQ0FOQ0VMRUQpKSB7XG4gICAgICAgIHRoaXMuX25lZWRUb0ZldGNoU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZVRyYW5zaXRpb25zXygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYmFja29mZkV4cGlyZWQgPSB0aGlzLmlzRXhwb25lbnRpYWxCYWNrb2ZmRXhwaXJlZCgpO1xuICAgICAgICBpZiAoaXNSZXRyeVN0YXR1c0NvZGUoZXJyb3Iuc3RhdHVzLCBbXSkpIHtcbiAgICAgICAgICBpZiAoYmFja29mZkV4cGlyZWQpIHtcbiAgICAgICAgICAgIGVycm9yID0gcmV0cnlMaW1pdEV4Y2VlZGVkKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2xlZXBUaW1lID0gTWF0aC5tYXgodGhpcy5zbGVlcFRpbWUgKiAyLCBERUZBVUxUX01JTl9TTEVFUF9USU1FX01JTExJUyk7XG4gICAgICAgICAgICB0aGlzLl9uZWVkVG9GZXRjaFN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlVHJhbnNpdGlvbnNfKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Vycm9yID0gZXJyb3I7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24oXCJlcnJvclwiIC8qIEludGVybmFsVGFza1N0YXRlLkVSUk9SICovKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuX21ldGFkYXRhRXJyb3JIYW5kbGVyID0gZXJyb3IgPT4ge1xuICAgICAgdGhpcy5fcmVxdWVzdCA9IHVuZGVmaW5lZDtcbiAgICAgIGlmIChlcnJvci5fY29kZUVxdWFscyhTdG9yYWdlRXJyb3JDb2RlLkNBTkNFTEVEKSkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlVHJhbnNpdGlvbnNfKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9lcnJvciA9IGVycm9yO1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uKFwiZXJyb3JcIiAvKiBJbnRlcm5hbFRhc2tTdGF0ZS5FUlJPUiAqLyk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNsZWVwVGltZSA9IDA7XG4gICAgdGhpcy5tYXhTbGVlcFRpbWUgPSB0aGlzLl9yZWYuc3RvcmFnZS5tYXhVcGxvYWRSZXRyeVRpbWU7XG4gICAgdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgdGhpcy5fcmVqZWN0ID0gcmVqZWN0O1xuICAgICAgdGhpcy5fc3RhcnQoKTtcbiAgICB9KTtcbiAgICAvLyBQcmV2ZW50IHVuY2F1Z2h0IHJlamVjdGlvbnMgb24gdGhlIGludGVybmFsIHByb21pc2UgZnJvbSBidWJibGluZyBvdXRcbiAgICAvLyB0byB0aGUgdG9wIGxldmVsIHdpdGggYSBkdW1teSBoYW5kbGVyLlxuICAgIHRoaXMuX3Byb21pc2UudGhlbihudWxsLCAoKSA9PiB7fSk7XG4gIH1cbiAgX21ha2VQcm9ncmVzc0NhbGxiYWNrKCkge1xuICAgIGNvbnN0IHNpemVCZWZvcmUgPSB0aGlzLl90cmFuc2ZlcnJlZDtcbiAgICByZXR1cm4gbG9hZGVkID0+IHRoaXMuX3VwZGF0ZVByb2dyZXNzKHNpemVCZWZvcmUgKyBsb2FkZWQpO1xuICB9XG4gIF9zaG91bGREb1Jlc3VtYWJsZShibG9iKSB7XG4gICAgcmV0dXJuIGJsb2Iuc2l6ZSgpID4gMjU2ICogMTAyNDtcbiAgfVxuICBfc3RhcnQoKSB7XG4gICAgaWYgKHRoaXMuX3N0YXRlICE9PSBcInJ1bm5pbmdcIiAvKiBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HICovKSB7XG4gICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgc29tZW9uZSBwYXVzZXMgdXMgaW4gYSByZXN1bWUgY2FsbGJhY2ssIGZvciBleGFtcGxlLlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVxdWVzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXN1bWFibGUpIHtcbiAgICAgIGlmICh0aGlzLl91cGxvYWRVcmwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9jcmVhdGVSZXN1bWFibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLl9uZWVkVG9GZXRjaFN0YXR1cykge1xuICAgICAgICAgIHRoaXMuX2ZldGNoU3RhdHVzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuX25lZWRUb0ZldGNoTWV0YWRhdGEpIHtcbiAgICAgICAgICAgIC8vIEhhcHBlbnMgaWYgd2UgbWlzcyB0aGUgbWV0YWRhdGEgb24gdXBsb2FkIGNvbXBsZXRpb24uXG4gICAgICAgICAgICB0aGlzLl9mZXRjaE1ldGFkYXRhKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgdGhpcy5fY29udGludWVVcGxvYWQoKTtcbiAgICAgICAgICAgIH0sIHRoaXMuc2xlZXBUaW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb25lU2hvdFVwbG9hZCgpO1xuICAgIH1cbiAgfVxuICBfcmVzb2x2ZVRva2VuKGNhbGxiYWNrKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuICAgIFByb21pc2UuYWxsKFt0aGlzLl9yZWYuc3RvcmFnZS5fZ2V0QXV0aFRva2VuKCksIHRoaXMuX3JlZi5zdG9yYWdlLl9nZXRBcHBDaGVja1Rva2VuKCldKS50aGVuKChbYXV0aFRva2VuLCBhcHBDaGVja1Rva2VuXSkgPT4ge1xuICAgICAgc3dpdGNoICh0aGlzLl9zdGF0ZSkge1xuICAgICAgICBjYXNlIFwicnVubmluZ1wiIC8qIEludGVybmFsVGFza1N0YXRlLlJVTk5JTkcgKi86XG4gICAgICAgICAgY2FsbGJhY2soYXV0aFRva2VuLCBhcHBDaGVja1Rva2VuKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImNhbmNlbGluZ1wiIC8qIEludGVybmFsVGFza1N0YXRlLkNBTkNFTElORyAqLzpcbiAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uKFwiY2FuY2VsZWRcIiAvKiBJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxFRCAqLyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJwYXVzaW5nXCIgLyogSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORyAqLzpcbiAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uKFwicGF1c2VkXCIgLyogSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0VEICovKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvLyBUT0RPKGFuZHlzb3RvKTogYXNzZXJ0IGZhbHNlXG4gIF9jcmVhdGVSZXN1bWFibGUoKSB7XG4gICAgdGhpcy5fcmVzb2x2ZVRva2VuKChhdXRoVG9rZW4sIGFwcENoZWNrVG9rZW4pID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3RJbmZvID0gY3JlYXRlUmVzdW1hYmxlVXBsb2FkKHRoaXMuX3JlZi5zdG9yYWdlLCB0aGlzLl9yZWYuX2xvY2F0aW9uLCB0aGlzLl9tYXBwaW5ncywgdGhpcy5fYmxvYiwgdGhpcy5fbWV0YWRhdGEpO1xuICAgICAgY29uc3QgY3JlYXRlUmVxdWVzdCA9IHRoaXMuX3JlZi5zdG9yYWdlLl9tYWtlUmVxdWVzdChyZXF1ZXN0SW5mbywgbmV3VGV4dENvbm5lY3Rpb24sIGF1dGhUb2tlbiwgYXBwQ2hlY2tUb2tlbik7XG4gICAgICB0aGlzLl9yZXF1ZXN0ID0gY3JlYXRlUmVxdWVzdDtcbiAgICAgIGNyZWF0ZVJlcXVlc3QuZ2V0UHJvbWlzZSgpLnRoZW4odXJsID0+IHtcbiAgICAgICAgdGhpcy5fcmVxdWVzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fdXBsb2FkVXJsID0gdXJsO1xuICAgICAgICB0aGlzLl9uZWVkVG9GZXRjaFN0YXR1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbXBsZXRlVHJhbnNpdGlvbnNfKCk7XG4gICAgICB9LCB0aGlzLl9lcnJvckhhbmRsZXIpO1xuICAgIH0pO1xuICB9XG4gIF9mZXRjaFN0YXR1cygpIHtcbiAgICAvLyBUT0RPKGFuZHlzb3RvKTogYXNzZXJ0KHRoaXMudXBsb2FkVXJsXyAhPT0gbnVsbCk7XG4gICAgY29uc3QgdXJsID0gdGhpcy5fdXBsb2FkVXJsO1xuICAgIHRoaXMuX3Jlc29sdmVUb2tlbigoYXV0aFRva2VuLCBhcHBDaGVja1Rva2VuKSA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0SW5mbyA9IGdldFJlc3VtYWJsZVVwbG9hZFN0YXR1cyh0aGlzLl9yZWYuc3RvcmFnZSwgdGhpcy5fcmVmLl9sb2NhdGlvbiwgdXJsLCB0aGlzLl9ibG9iKTtcbiAgICAgIGNvbnN0IHN0YXR1c1JlcXVlc3QgPSB0aGlzLl9yZWYuc3RvcmFnZS5fbWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIG5ld1RleHRDb25uZWN0aW9uLCBhdXRoVG9rZW4sIGFwcENoZWNrVG9rZW4pO1xuICAgICAgdGhpcy5fcmVxdWVzdCA9IHN0YXR1c1JlcXVlc3Q7XG4gICAgICBzdGF0dXNSZXF1ZXN0LmdldFByb21pc2UoKS50aGVuKHN0YXR1cyA9PiB7XG4gICAgICAgIHN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5fcmVxdWVzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fdXBkYXRlUHJvZ3Jlc3Moc3RhdHVzLmN1cnJlbnQpO1xuICAgICAgICB0aGlzLl9uZWVkVG9GZXRjaFN0YXR1cyA9IGZhbHNlO1xuICAgICAgICBpZiAoc3RhdHVzLmZpbmFsaXplZCkge1xuICAgICAgICAgIHRoaXMuX25lZWRUb0ZldGNoTWV0YWRhdGEgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcGxldGVUcmFuc2l0aW9uc18oKTtcbiAgICAgIH0sIHRoaXMuX2Vycm9ySGFuZGxlcik7XG4gICAgfSk7XG4gIH1cbiAgX2NvbnRpbnVlVXBsb2FkKCkge1xuICAgIGNvbnN0IGNodW5rU2l6ZSA9IFJFU1VNQUJMRV9VUExPQURfQ0hVTktfU0laRSAqIHRoaXMuX2NodW5rTXVsdGlwbGllcjtcbiAgICBjb25zdCBzdGF0dXMgPSBuZXcgUmVzdW1hYmxlVXBsb2FkU3RhdHVzKHRoaXMuX3RyYW5zZmVycmVkLCB0aGlzLl9ibG9iLnNpemUoKSk7XG4gICAgLy8gVE9ETyhhbmR5c290byk6IGFzc2VydCh0aGlzLnVwbG9hZFVybF8gIT09IG51bGwpO1xuICAgIGNvbnN0IHVybCA9IHRoaXMuX3VwbG9hZFVybDtcbiAgICB0aGlzLl9yZXNvbHZlVG9rZW4oKGF1dGhUb2tlbiwgYXBwQ2hlY2tUb2tlbikgPT4ge1xuICAgICAgbGV0IHJlcXVlc3RJbmZvO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdEluZm8gPSBjb250aW51ZVJlc3VtYWJsZVVwbG9hZCh0aGlzLl9yZWYuX2xvY2F0aW9uLCB0aGlzLl9yZWYuc3RvcmFnZSwgdXJsLCB0aGlzLl9ibG9iLCBjaHVua1NpemUsIHRoaXMuX21hcHBpbmdzLCBzdGF0dXMsIHRoaXMuX21ha2VQcm9ncmVzc0NhbGxiYWNrKCkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aGlzLl9lcnJvciA9IGU7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24oXCJlcnJvclwiIC8qIEludGVybmFsVGFza1N0YXRlLkVSUk9SICovKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdXBsb2FkUmVxdWVzdCA9IHRoaXMuX3JlZi5zdG9yYWdlLl9tYWtlUmVxdWVzdChyZXF1ZXN0SW5mbywgbmV3VGV4dENvbm5lY3Rpb24sIGF1dGhUb2tlbiwgYXBwQ2hlY2tUb2tlbiwgLypyZXRyeT0qL2ZhbHNlIC8vIFVwbG9hZCByZXF1ZXN0cyBzaG91bGQgbm90IGJlIHJldHJpZWQgYXMgZWFjaCByZXRyeSBzaG91bGQgYmUgcHJlY2VkZWQgYnkgYW5vdGhlciBxdWVyeSByZXF1ZXN0LiBXaGljaCBpcyBoYW5kbGVkIGluIHRoaXMgZmlsZS5cbiAgICAgICk7XG4gICAgICB0aGlzLl9yZXF1ZXN0ID0gdXBsb2FkUmVxdWVzdDtcbiAgICAgIHVwbG9hZFJlcXVlc3QuZ2V0UHJvbWlzZSgpLnRoZW4obmV3U3RhdHVzID0+IHtcbiAgICAgICAgdGhpcy5faW5jcmVhc2VNdWx0aXBsaWVyKCk7XG4gICAgICAgIHRoaXMuX3JlcXVlc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVByb2dyZXNzKG5ld1N0YXR1cy5jdXJyZW50KTtcbiAgICAgICAgaWYgKG5ld1N0YXR1cy5maW5hbGl6ZWQpIHtcbiAgICAgICAgICB0aGlzLl9tZXRhZGF0YSA9IG5ld1N0YXR1cy5tZXRhZGF0YTtcbiAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uKFwic3VjY2Vzc1wiIC8qIEludGVybmFsVGFza1N0YXRlLlNVQ0NFU1MgKi8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29tcGxldGVUcmFuc2l0aW9uc18oKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5fZXJyb3JIYW5kbGVyKTtcbiAgICB9KTtcbiAgfVxuICBfaW5jcmVhc2VNdWx0aXBsaWVyKCkge1xuICAgIGNvbnN0IGN1cnJlbnRTaXplID0gUkVTVU1BQkxFX1VQTE9BRF9DSFVOS19TSVpFICogdGhpcy5fY2h1bmtNdWx0aXBsaWVyO1xuICAgIC8vIE1heCBjaHVuayBzaXplIGlzIDMyTS5cbiAgICBpZiAoY3VycmVudFNpemUgKiAyIDwgMzIgKiAxMDI0ICogMTAyNCkge1xuICAgICAgdGhpcy5fY2h1bmtNdWx0aXBsaWVyICo9IDI7XG4gICAgfVxuICB9XG4gIF9mZXRjaE1ldGFkYXRhKCkge1xuICAgIHRoaXMuX3Jlc29sdmVUb2tlbigoYXV0aFRva2VuLCBhcHBDaGVja1Rva2VuKSA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0SW5mbyA9IGdldE1ldGFkYXRhJDIodGhpcy5fcmVmLnN0b3JhZ2UsIHRoaXMuX3JlZi5fbG9jYXRpb24sIHRoaXMuX21hcHBpbmdzKTtcbiAgICAgIGNvbnN0IG1ldGFkYXRhUmVxdWVzdCA9IHRoaXMuX3JlZi5zdG9yYWdlLl9tYWtlUmVxdWVzdChyZXF1ZXN0SW5mbywgbmV3VGV4dENvbm5lY3Rpb24sIGF1dGhUb2tlbiwgYXBwQ2hlY2tUb2tlbik7XG4gICAgICB0aGlzLl9yZXF1ZXN0ID0gbWV0YWRhdGFSZXF1ZXN0O1xuICAgICAgbWV0YWRhdGFSZXF1ZXN0LmdldFByb21pc2UoKS50aGVuKG1ldGFkYXRhID0+IHtcbiAgICAgICAgdGhpcy5fcmVxdWVzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbihcInN1Y2Nlc3NcIiAvKiBJbnRlcm5hbFRhc2tTdGF0ZS5TVUNDRVNTICovKTtcbiAgICAgIH0sIHRoaXMuX21ldGFkYXRhRXJyb3JIYW5kbGVyKTtcbiAgICB9KTtcbiAgfVxuICBfb25lU2hvdFVwbG9hZCgpIHtcbiAgICB0aGlzLl9yZXNvbHZlVG9rZW4oKGF1dGhUb2tlbiwgYXBwQ2hlY2tUb2tlbikgPT4ge1xuICAgICAgY29uc3QgcmVxdWVzdEluZm8gPSBtdWx0aXBhcnRVcGxvYWQodGhpcy5fcmVmLnN0b3JhZ2UsIHRoaXMuX3JlZi5fbG9jYXRpb24sIHRoaXMuX21hcHBpbmdzLCB0aGlzLl9ibG9iLCB0aGlzLl9tZXRhZGF0YSk7XG4gICAgICBjb25zdCBtdWx0aXBhcnRSZXF1ZXN0ID0gdGhpcy5fcmVmLnN0b3JhZ2UuX21ha2VSZXF1ZXN0KHJlcXVlc3RJbmZvLCBuZXdUZXh0Q29ubmVjdGlvbiwgYXV0aFRva2VuLCBhcHBDaGVja1Rva2VuKTtcbiAgICAgIHRoaXMuX3JlcXVlc3QgPSBtdWx0aXBhcnRSZXF1ZXN0O1xuICAgICAgbXVsdGlwYXJ0UmVxdWVzdC5nZXRQcm9taXNlKCkudGhlbihtZXRhZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuX3JlcXVlc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX21ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVByb2dyZXNzKHRoaXMuX2Jsb2Iuc2l6ZSgpKTtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbihcInN1Y2Nlc3NcIiAvKiBJbnRlcm5hbFRhc2tTdGF0ZS5TVUNDRVNTICovKTtcbiAgICAgIH0sIHRoaXMuX2Vycm9ySGFuZGxlcik7XG4gICAgfSk7XG4gIH1cbiAgX3VwZGF0ZVByb2dyZXNzKHRyYW5zZmVycmVkKSB7XG4gICAgY29uc3Qgb2xkID0gdGhpcy5fdHJhbnNmZXJyZWQ7XG4gICAgdGhpcy5fdHJhbnNmZXJyZWQgPSB0cmFuc2ZlcnJlZDtcbiAgICAvLyBBIHByb2dyZXNzIHVwZGF0ZSBjYW4gbWFrZSB0aGUgXCJ0cmFuc2ZlcnJlZFwiIHZhbHVlIHNtYWxsZXIgKGUuZy4gYVxuICAgIC8vIHBhcnRpYWwgdXBsb2FkIG5vdCBjb21wbGV0ZWQgYnkgc2VydmVyLCBhZnRlciB3aGljaCB0aGUgXCJ0cmFuc2ZlcnJlZFwiXG4gICAgLy8gdmFsdWUgbWF5IHJlc2V0IHRvIHRoZSB2YWx1ZSBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSByZXF1ZXN0KS5cbiAgICBpZiAodGhpcy5fdHJhbnNmZXJyZWQgIT09IG9sZCkge1xuICAgICAgdGhpcy5fbm90aWZ5T2JzZXJ2ZXJzKCk7XG4gICAgfVxuICB9XG4gIF90cmFuc2l0aW9uKHN0YXRlKSB7XG4gICAgaWYgKHRoaXMuX3N0YXRlID09PSBzdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICBjYXNlIFwiY2FuY2VsaW5nXCIgLyogSW50ZXJuYWxUYXNrU3RhdGUuQ0FOQ0VMSU5HICovOlxuICAgICAgY2FzZSBcInBhdXNpbmdcIiAvKiBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HICovOlxuICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTpcbiAgICAgICAgLy8gYXNzZXJ0KHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HIHx8XG4gICAgICAgIC8vICAgICAgICB0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORyk7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgICAgIGlmICh0aGlzLl9yZXF1ZXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLl9yZXF1ZXN0LmNhbmNlbCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVuZGluZ1RpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5wZW5kaW5nVGltZW91dCk7XG4gICAgICAgICAgdGhpcy5wZW5kaW5nVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlVHJhbnNpdGlvbnNfKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicnVubmluZ1wiIC8qIEludGVybmFsVGFza1N0YXRlLlJVTk5JTkcgKi86XG4gICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOlxuICAgICAgICAvLyBhc3NlcnQodGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNFRCB8fFxuICAgICAgICAvLyAgICAgICAgdGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNJTkcpO1xuICAgICAgICBjb25zdCB3YXNQYXVzZWQgPSB0aGlzLl9zdGF0ZSA9PT0gXCJwYXVzZWRcIiAvKiBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTRUQgKi87XG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgICAgIGlmICh3YXNQYXVzZWQpIHtcbiAgICAgICAgICB0aGlzLl9ub3RpZnlPYnNlcnZlcnMoKTtcbiAgICAgICAgICB0aGlzLl9zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInBhdXNlZFwiIC8qIEludGVybmFsVGFza1N0YXRlLlBBVVNFRCAqLzpcbiAgICAgICAgLy8gVE9ETyhhbmR5c290byk6XG4gICAgICAgIC8vIGFzc2VydCh0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORyk7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMuX25vdGlmeU9ic2VydmVycygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJjYW5jZWxlZFwiIC8qIEludGVybmFsVGFza1N0YXRlLkNBTkNFTEVEICovOlxuICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTpcbiAgICAgICAgLy8gYXNzZXJ0KHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTRUQgfHxcbiAgICAgICAgLy8gICAgICAgIHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxJTkcpO1xuICAgICAgICB0aGlzLl9lcnJvciA9IGNhbmNlbGVkKCk7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMuX25vdGlmeU9ic2VydmVycygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJlcnJvclwiIC8qIEludGVybmFsVGFza1N0YXRlLkVSUk9SICovOlxuICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTpcbiAgICAgICAgLy8gYXNzZXJ0KHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HIHx8XG4gICAgICAgIC8vICAgICAgICB0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORyB8fFxuICAgICAgICAvLyAgICAgICAgdGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLkNBTkNFTElORyk7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMuX25vdGlmeU9ic2VydmVycygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzdWNjZXNzXCIgLyogSW50ZXJuYWxUYXNrU3RhdGUuU1VDQ0VTUyAqLzpcbiAgICAgICAgLy8gVE9ETyhhbmR5c290byk6XG4gICAgICAgIC8vIGFzc2VydCh0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORyB8fFxuICAgICAgICAvLyAgICAgICAgdGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNJTkcgfHxcbiAgICAgICAgLy8gICAgICAgIHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxJTkcpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLl9ub3RpZnlPYnNlcnZlcnMoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGNvbXBsZXRlVHJhbnNpdGlvbnNfKCkge1xuICAgIHN3aXRjaCAodGhpcy5fc3RhdGUpIHtcbiAgICAgIGNhc2UgXCJwYXVzaW5nXCIgLyogSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORyAqLzpcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbihcInBhdXNlZFwiIC8qIEludGVybmFsVGFza1N0YXRlLlBBVVNFRCAqLyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImNhbmNlbGluZ1wiIC8qIEludGVybmFsVGFza1N0YXRlLkNBTkNFTElORyAqLzpcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbihcImNhbmNlbGVkXCIgLyogSW50ZXJuYWxUYXNrU3RhdGUuQ0FOQ0VMRUQgKi8pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJydW5uaW5nXCIgLyogSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORyAqLzpcbiAgICAgICAgdGhpcy5fc3RhcnQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBBIHNuYXBzaG90IG9mIHRoZSBjdXJyZW50IHRhc2sgc3RhdGUuXG4gICAqL1xuICBnZXQgc25hcHNob3QoKSB7XG4gICAgY29uc3QgZXh0ZXJuYWxTdGF0ZSA9IHRhc2tTdGF0ZUZyb21JbnRlcm5hbFRhc2tTdGF0ZSh0aGlzLl9zdGF0ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJ5dGVzVHJhbnNmZXJyZWQ6IHRoaXMuX3RyYW5zZmVycmVkLFxuICAgICAgdG90YWxCeXRlczogdGhpcy5fYmxvYi5zaXplKCksXG4gICAgICBzdGF0ZTogZXh0ZXJuYWxTdGF0ZSxcbiAgICAgIG1ldGFkYXRhOiB0aGlzLl9tZXRhZGF0YSxcbiAgICAgIHRhc2s6IHRoaXMsXG4gICAgICByZWY6IHRoaXMuX3JlZlxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYSBjYWxsYmFjayBmb3IgYW4gZXZlbnQuXG4gICAqIEBwYXJhbSB0eXBlIC0gVGhlIHR5cGUgb2YgZXZlbnQgdG8gbGlzdGVuIGZvci5cbiAgICogQHBhcmFtIG5leHRPck9ic2VydmVyIC1cbiAgICogICAgIFRoZSBgbmV4dGAgZnVuY3Rpb24sIHdoaWNoIGdldHMgY2FsbGVkIGZvciBlYWNoIGl0ZW0gaW5cbiAgICogICAgIHRoZSBldmVudCBzdHJlYW0sIG9yIGFuIG9ic2VydmVyIG9iamVjdCB3aXRoIHNvbWUgb3IgYWxsIG9mIHRoZXNlIHRocmVlXG4gICAqICAgICBwcm9wZXJ0aWVzIChgbmV4dGAsIGBlcnJvcmAsIGBjb21wbGV0ZWApLlxuICAgKiBAcGFyYW0gZXJyb3IgLSBBIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWQgd2l0aCBhIGBTdG9yYWdlRXJyb3JgXG4gICAqICAgICBpZiB0aGUgZXZlbnQgc3RyZWFtIGVuZHMgZHVlIHRvIGFuIGVycm9yLlxuICAgKiBAcGFyYW0gY29tcGxldGVkIC0gQSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIGlmIHRoZVxuICAgKiAgICAgZXZlbnQgc3RyZWFtIGVuZHMgbm9ybWFsbHkuXG4gICAqIEByZXR1cm5zXG4gICAqICAgICBJZiBvbmx5IHRoZSBldmVudCBhcmd1bWVudCBpcyBwYXNzZWQsIHJldHVybnMgYSBmdW5jdGlvbiB5b3UgY2FuIHVzZSB0b1xuICAgKiAgICAgYWRkIGNhbGxiYWNrcyAoc2VlIHRoZSBleGFtcGxlcyBhYm92ZSkuIElmIG1vcmUgdGhhbiBqdXN0IHRoZSBldmVudFxuICAgKiAgICAgYXJndW1lbnQgaXMgcGFzc2VkLCByZXR1cm5zIGEgZnVuY3Rpb24geW91IGNhbiBjYWxsIHRvIHVucmVnaXN0ZXIgdGhlXG4gICAqICAgICBjYWxsYmFja3MuXG4gICAqL1xuICBvbih0eXBlLCBuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlZCkge1xuICAgIC8vIE5vdGU6IGB0eXBlYCBpc24ndCBiZWluZyB1c2VkLiBJdHMgdHlwZSBpcyBhbHNvIGluY29ycmVjdC4gVGFza0V2ZW50IHNob3VsZCBub3QgYmUgYSBzdHJpbmcuXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXIobmV4dE9yT2JzZXJ2ZXIgfHwgdW5kZWZpbmVkLCBlcnJvciB8fCB1bmRlZmluZWQsIGNvbXBsZXRlZCB8fCB1bmRlZmluZWQpO1xuICAgIHRoaXMuX2FkZE9ic2VydmVyKG9ic2VydmVyKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdGhpcy5fcmVtb3ZlT2JzZXJ2ZXIob2JzZXJ2ZXIpO1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFRoaXMgb2JqZWN0IGJlaGF2ZXMgbGlrZSBhIFByb21pc2UsIGFuZCByZXNvbHZlcyB3aXRoIGl0cyBzbmFwc2hvdCBkYXRhXG4gICAqIHdoZW4gdGhlIHVwbG9hZCBjb21wbGV0ZXMuXG4gICAqIEBwYXJhbSBvbkZ1bGZpbGxlZCAtIFRoZSBmdWxmaWxsbWVudCBjYWxsYmFjay4gUHJvbWlzZSBjaGFpbmluZyB3b3JrcyBhcyBub3JtYWwuXG4gICAqIEBwYXJhbSBvblJlamVjdGVkIC0gVGhlIHJlamVjdGlvbiBjYWxsYmFjay5cbiAgICovXG4gIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAvLyBUaGVzZSBjYXN0cyBhcmUgbmVlZGVkIHNvIHRoYXQgVHlwZVNjcmlwdCBjYW4gaW5mZXIgdGhlIHR5cGVzIG9mIHRoZVxuICAgIC8vIHJlc3VsdGluZyBQcm9taXNlLlxuICAgIHJldHVybiB0aGlzLl9wcm9taXNlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuICB9XG4gIC8qKlxuICAgKiBFcXVpdmFsZW50IHRvIGNhbGxpbmcgYHRoZW4obnVsbCwgb25SZWplY3RlZClgLlxuICAgKi9cbiAgY2F0Y2gob25SZWplY3RlZCkge1xuICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGdpdmVuIG9ic2VydmVyLlxuICAgKi9cbiAgX2FkZE9ic2VydmVyKG9ic2VydmVyKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgIHRoaXMuX25vdGlmeU9ic2VydmVyKG9ic2VydmVyKTtcbiAgfVxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gb2JzZXJ2ZXIuXG4gICAqL1xuICBfcmVtb3ZlT2JzZXJ2ZXIob2JzZXJ2ZXIpIHtcbiAgICBjb25zdCBpID0gdGhpcy5fb2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpO1xuICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cbiAgX25vdGlmeU9ic2VydmVycygpIHtcbiAgICB0aGlzLl9maW5pc2hQcm9taXNlKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXJzID0gdGhpcy5fb2JzZXJ2ZXJzLnNsaWNlKCk7XG4gICAgb2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgdGhpcy5fbm90aWZ5T2JzZXJ2ZXIob2JzZXJ2ZXIpO1xuICAgIH0pO1xuICB9XG4gIF9maW5pc2hQcm9taXNlKCkge1xuICAgIGlmICh0aGlzLl9yZXNvbHZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCB0cmlnZ2VyZWQgPSB0cnVlO1xuICAgICAgc3dpdGNoICh0YXNrU3RhdGVGcm9tSW50ZXJuYWxUYXNrU3RhdGUodGhpcy5fc3RhdGUpKSB7XG4gICAgICAgIGNhc2UgVGFza1N0YXRlLlNVQ0NFU1M6XG4gICAgICAgICAgYXN5bmModGhpcy5fcmVzb2x2ZS5iaW5kKG51bGwsIHRoaXMuc25hcHNob3QpKSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFRhc2tTdGF0ZS5DQU5DRUxFRDpcbiAgICAgICAgY2FzZSBUYXNrU3RhdGUuRVJST1I6XG4gICAgICAgICAgY29uc3QgdG9DYWxsID0gdGhpcy5fcmVqZWN0O1xuICAgICAgICAgIGFzeW5jKHRvQ2FsbC5iaW5kKG51bGwsIHRoaXMuX2Vycm9yKSkoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0cmlnZ2VyZWQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmICh0cmlnZ2VyZWQpIHtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fcmVqZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBfbm90aWZ5T2JzZXJ2ZXIob2JzZXJ2ZXIpIHtcbiAgICBjb25zdCBleHRlcm5hbFN0YXRlID0gdGFza1N0YXRlRnJvbUludGVybmFsVGFza1N0YXRlKHRoaXMuX3N0YXRlKTtcbiAgICBzd2l0Y2ggKGV4dGVybmFsU3RhdGUpIHtcbiAgICAgIGNhc2UgVGFza1N0YXRlLlJVTk5JTkc6XG4gICAgICBjYXNlIFRhc2tTdGF0ZS5QQVVTRUQ6XG4gICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XG4gICAgICAgICAgYXN5bmMob2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyLCB0aGlzLnNuYXBzaG90KSkoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVGFza1N0YXRlLlNVQ0NFU1M6XG4gICAgICAgIGlmIChvYnNlcnZlci5jb21wbGV0ZSkge1xuICAgICAgICAgIGFzeW5jKG9ic2VydmVyLmNvbXBsZXRlLmJpbmQob2JzZXJ2ZXIpKSgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBUYXNrU3RhdGUuQ0FOQ0VMRUQ6XG4gICAgICBjYXNlIFRhc2tTdGF0ZS5FUlJPUjpcbiAgICAgICAgaWYgKG9ic2VydmVyLmVycm9yKSB7XG4gICAgICAgICAgYXN5bmMob2JzZXJ2ZXIuZXJyb3IuYmluZChvYnNlcnZlciwgdGhpcy5fZXJyb3IpKSgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gVE9ETyhhbmR5c290byk6IGFzc2VydChmYWxzZSk7XG4gICAgICAgIGlmIChvYnNlcnZlci5lcnJvcikge1xuICAgICAgICAgIGFzeW5jKG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIsIHRoaXMuX2Vycm9yKSkoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVzdW1lcyBhIHBhdXNlZCB0YXNrLiBIYXMgbm8gZWZmZWN0IG9uIGEgY3VycmVudGx5IHJ1bm5pbmcgb3IgZmFpbGVkIHRhc2suXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9wZXJhdGlvbiB0b29rIGVmZmVjdCwgZmFsc2UgaWYgaWdub3JlZC5cbiAgICovXG4gIHJlc3VtZSgpIHtcbiAgICBjb25zdCB2YWxpZCA9IHRoaXMuX3N0YXRlID09PSBcInBhdXNlZFwiIC8qIEludGVybmFsVGFza1N0YXRlLlBBVVNFRCAqLyB8fCB0aGlzLl9zdGF0ZSA9PT0gXCJwYXVzaW5nXCIgLyogSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORyAqLztcbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIHRoaXMuX3RyYW5zaXRpb24oXCJydW5uaW5nXCIgLyogSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORyAqLyk7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuICAvKipcbiAgICogUGF1c2VzIGEgY3VycmVudGx5IHJ1bm5pbmcgdGFzay4gSGFzIG5vIGVmZmVjdCBvbiBhIHBhdXNlZCBvciBmYWlsZWQgdGFzay5cbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb3BlcmF0aW9uIHRvb2sgZWZmZWN0LCBmYWxzZSBpZiBpZ25vcmVkLlxuICAgKi9cbiAgcGF1c2UoKSB7XG4gICAgY29uc3QgdmFsaWQgPSB0aGlzLl9zdGF0ZSA9PT0gXCJydW5uaW5nXCIgLyogSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORyAqLztcbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIHRoaXMuX3RyYW5zaXRpb24oXCJwYXVzaW5nXCIgLyogSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORyAqLyk7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuICAvKipcbiAgICogQ2FuY2VscyBhIGN1cnJlbnRseSBydW5uaW5nIG9yIHBhdXNlZCB0YXNrLiBIYXMgbm8gZWZmZWN0IG9uIGEgY29tcGxldGUgb3JcbiAgICogZmFpbGVkIHRhc2suXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9wZXJhdGlvbiB0b29rIGVmZmVjdCwgZmFsc2UgaWYgaWdub3JlZC5cbiAgICovXG4gIGNhbmNlbCgpIHtcbiAgICBjb25zdCB2YWxpZCA9IHRoaXMuX3N0YXRlID09PSBcInJ1bm5pbmdcIiAvKiBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HICovIHx8IHRoaXMuX3N0YXRlID09PSBcInBhdXNpbmdcIiAvKiBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HICovO1xuICAgIGlmICh2YWxpZCkge1xuICAgICAgdGhpcy5fdHJhbnNpdGlvbihcImNhbmNlbGluZ1wiIC8qIEludGVybmFsVGFza1N0YXRlLkNBTkNFTElORyAqLyk7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBQcm92aWRlcyBtZXRob2RzIHRvIGludGVyYWN0IHdpdGggYSBidWNrZXQgaW4gdGhlIEZpcmViYXNlIFN0b3JhZ2Ugc2VydmljZS5cbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIF9sb2NhdGlvbiAtIEFuIGZicy5sb2NhdGlvbiwgb3IgdGhlIFVSTCBhdFxuICogICAgIHdoaWNoIHRvIGJhc2UgdGhpcyBvYmplY3QsIGluIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1zOlxuICogICAgICAgICBnczovLzxidWNrZXQ+LzxvYmplY3QtcGF0aD5cbiAqICAgICAgICAgaHR0cFtzXTovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9cbiAqICAgICAgICAgICAgICAgICAgICAgPGFwaS12ZXJzaW9uPi9iLzxidWNrZXQ+L28vPG9iamVjdC1wYXRoPlxuICogICAgIEFueSBxdWVyeSBvciBmcmFnbWVudCBzdHJpbmdzIHdpbGwgYmUgaWdub3JlZCBpbiB0aGUgaHR0cFtzXVxuICogICAgIGZvcm1hdC4gSWYgbm8gdmFsdWUgaXMgcGFzc2VkLCB0aGUgc3RvcmFnZSBvYmplY3Qgd2lsbCB1c2UgYSBVUkwgYmFzZWQgb25cbiAqICAgICB0aGUgcHJvamVjdCBJRCBvZiB0aGUgYmFzZSBmaXJlYmFzZS5BcHAgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFJlZmVyZW5jZSB7XG4gIGNvbnN0cnVjdG9yKF9zZXJ2aWNlLCBsb2NhdGlvbikge1xuICAgIHRoaXMuX3NlcnZpY2UgPSBfc2VydmljZTtcbiAgICBpZiAobG9jYXRpb24gaW5zdGFuY2VvZiBMb2NhdGlvbikge1xuICAgICAgdGhpcy5fbG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbG9jYXRpb24gPSBMb2NhdGlvbi5tYWtlRnJvbVVybChsb2NhdGlvbiwgX3NlcnZpY2UuaG9zdCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBVUkwgZm9yIHRoZSBidWNrZXQgYW5kIHBhdGggdGhpcyBvYmplY3QgcmVmZXJlbmNlcyxcbiAgICogICAgIGluIHRoZSBmb3JtIGdzOi8vPGJ1Y2tldD4vPG9iamVjdC1wYXRoPlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnZ3M6Ly8nICsgdGhpcy5fbG9jYXRpb24uYnVja2V0ICsgJy8nICsgdGhpcy5fbG9jYXRpb24ucGF0aDtcbiAgfVxuICBfbmV3UmVmKHNlcnZpY2UsIGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIG5ldyBSZWZlcmVuY2Uoc2VydmljZSwgbG9jYXRpb24pO1xuICB9XG4gIC8qKlxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgcm9vdCBvZiB0aGlzIG9iamVjdCdzIGJ1Y2tldC5cbiAgICovXG4gIGdldCByb290KCkge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gbmV3IExvY2F0aW9uKHRoaXMuX2xvY2F0aW9uLmJ1Y2tldCwgJycpO1xuICAgIHJldHVybiB0aGlzLl9uZXdSZWYodGhpcy5fc2VydmljZSwgbG9jYXRpb24pO1xuICB9XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgYnVja2V0IGNvbnRhaW5pbmcgdGhpcyByZWZlcmVuY2UncyBvYmplY3QuXG4gICAqL1xuICBnZXQgYnVja2V0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2NhdGlvbi5idWNrZXQ7XG4gIH1cbiAgLyoqXG4gICAqIFRoZSBmdWxsIHBhdGggb2YgdGhpcyBvYmplY3QuXG4gICAqL1xuICBnZXQgZnVsbFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uLnBhdGg7XG4gIH1cbiAgLyoqXG4gICAqIFRoZSBzaG9ydCBuYW1lIG9mIHRoaXMgb2JqZWN0LCB3aGljaCBpcyB0aGUgbGFzdCBjb21wb25lbnQgb2YgdGhlIGZ1bGwgcGF0aC5cbiAgICogRm9yIGV4YW1wbGUsIGlmIGZ1bGxQYXRoIGlzICdmdWxsL3BhdGgvaW1hZ2UucG5nJywgbmFtZSBpcyAnaW1hZ2UucG5nJy5cbiAgICovXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiBsYXN0Q29tcG9uZW50KHRoaXMuX2xvY2F0aW9uLnBhdGgpO1xuICB9XG4gIC8qKlxuICAgKiBUaGUgYFN0b3JhZ2VTZXJ2aWNlYCBpbnN0YW5jZSB0aGlzIGBTdG9yYWdlUmVmZXJlbmNlYCBpcyBhc3NvY2lhdGVkIHdpdGguXG4gICAqL1xuICBnZXQgc3RvcmFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZTtcbiAgfVxuICAvKipcbiAgICogQSBgU3RvcmFnZVJlZmVyZW5jZWAgcG9pbnRpbmcgdG8gdGhlIHBhcmVudCBsb2NhdGlvbiBvZiB0aGlzIGBTdG9yYWdlUmVmZXJlbmNlYCwgb3IgbnVsbCBpZlxuICAgKiB0aGlzIHJlZmVyZW5jZSBpcyB0aGUgcm9vdC5cbiAgICovXG4gIGdldCBwYXJlbnQoKSB7XG4gICAgY29uc3QgbmV3UGF0aCA9IHBhcmVudCh0aGlzLl9sb2NhdGlvbi5wYXRoKTtcbiAgICBpZiAobmV3UGF0aCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGxvY2F0aW9uID0gbmV3IExvY2F0aW9uKHRoaXMuX2xvY2F0aW9uLmJ1Y2tldCwgbmV3UGF0aCk7XG4gICAgcmV0dXJuIG5ldyBSZWZlcmVuY2UodGhpcy5fc2VydmljZSwgbG9jYXRpb24pO1xuICB9XG4gIC8qKlxuICAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIHRocm93IGFuIGVycm9yIGluIG1ldGhvZHMgdGhhdCBkbyBub3QgYWNjZXB0IGEgcm9vdCByZWZlcmVuY2UuXG4gICAqL1xuICBfdGhyb3dJZlJvb3QobmFtZSkge1xuICAgIGlmICh0aGlzLl9sb2NhdGlvbi5wYXRoID09PSAnJykge1xuICAgICAgdGhyb3cgaW52YWxpZFJvb3RPcGVyYXRpb24obmFtZSk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIERvd25sb2FkIHRoZSBieXRlcyBhdCB0aGUgb2JqZWN0J3MgbG9jYXRpb24uXG4gKiBAcmV0dXJucyBBIFByb21pc2UgY29udGFpbmluZyB0aGUgZG93bmxvYWRlZCBieXRlcy5cbiAqL1xuZnVuY3Rpb24gZ2V0Qnl0ZXNJbnRlcm5hbChyZWYsIG1heERvd25sb2FkU2l6ZUJ5dGVzKSB7XG4gIHJlZi5fdGhyb3dJZlJvb3QoJ2dldEJ5dGVzJyk7XG4gIGNvbnN0IHJlcXVlc3RJbmZvID0gZ2V0Qnl0ZXMkMShyZWYuc3RvcmFnZSwgcmVmLl9sb2NhdGlvbiwgbWF4RG93bmxvYWRTaXplQnl0ZXMpO1xuICByZXR1cm4gcmVmLnN0b3JhZ2UubWFrZVJlcXVlc3RXaXRoVG9rZW5zKHJlcXVlc3RJbmZvLCBuZXdCeXRlc0Nvbm5lY3Rpb24pLnRoZW4oYnl0ZXMgPT4gbWF4RG93bmxvYWRTaXplQnl0ZXMgIT09IHVuZGVmaW5lZCA/XG4gIC8vIEdDUyBtYXkgbm90IGhvbm9yIHRoZSBSYW5nZSBoZWFkZXIgZm9yIHNtYWxsIGZpbGVzXG4gIGJ5dGVzLnNsaWNlKDAsIG1heERvd25sb2FkU2l6ZUJ5dGVzKSA6IGJ5dGVzKTtcbn1cbi8qKlxuICogRG93bmxvYWQgdGhlIGJ5dGVzIGF0IHRoZSBvYmplY3QncyBsb2NhdGlvbi5cbiAqIEByZXR1cm5zIEEgUHJvbWlzZSBjb250YWluaW5nIHRoZSBkb3dubG9hZGVkIGJsb2IuXG4gKi9cbmZ1bmN0aW9uIGdldEJsb2JJbnRlcm5hbChyZWYsIG1heERvd25sb2FkU2l6ZUJ5dGVzKSB7XG4gIHJlZi5fdGhyb3dJZlJvb3QoJ2dldEJsb2InKTtcbiAgY29uc3QgcmVxdWVzdEluZm8gPSBnZXRCeXRlcyQxKHJlZi5zdG9yYWdlLCByZWYuX2xvY2F0aW9uLCBtYXhEb3dubG9hZFNpemVCeXRlcyk7XG4gIHJldHVybiByZWYuc3RvcmFnZS5tYWtlUmVxdWVzdFdpdGhUb2tlbnMocmVxdWVzdEluZm8sIG5ld0Jsb2JDb25uZWN0aW9uKS50aGVuKGJsb2IgPT4gbWF4RG93bmxvYWRTaXplQnl0ZXMgIT09IHVuZGVmaW5lZCA/XG4gIC8vIEdDUyBtYXkgbm90IGhvbm9yIHRoZSBSYW5nZSBoZWFkZXIgZm9yIHNtYWxsIGZpbGVzXG4gIGJsb2Iuc2xpY2UoMCwgbWF4RG93bmxvYWRTaXplQnl0ZXMpIDogYmxvYik7XG59XG4vKipcbiAqIFVwbG9hZHMgZGF0YSB0byB0aGlzIG9iamVjdCdzIGxvY2F0aW9uLlxuICogVGhlIHVwbG9hZCBpcyBub3QgcmVzdW1hYmxlLlxuICpcbiAqIEBwYXJhbSByZWYgLSBTdG9yYWdlUmVmZXJlbmNlIHdoZXJlIGRhdGEgc2hvdWxkIGJlIHVwbG9hZGVkLlxuICogQHBhcmFtIGRhdGEgLSBUaGUgZGF0YSB0byB1cGxvYWQuXG4gKiBAcGFyYW0gbWV0YWRhdGEgLSBNZXRhZGF0YSBmb3IgdGhlIG5ld2x5IHVwbG9hZGVkIGRhdGEuXG4gKiBAcmV0dXJucyBBIFByb21pc2UgY29udGFpbmluZyBhbiBVcGxvYWRSZXN1bHRcbiAqL1xuZnVuY3Rpb24gdXBsb2FkQnl0ZXMkMShyZWYsIGRhdGEsIG1ldGFkYXRhKSB7XG4gIHJlZi5fdGhyb3dJZlJvb3QoJ3VwbG9hZEJ5dGVzJyk7XG4gIGNvbnN0IHJlcXVlc3RJbmZvID0gbXVsdGlwYXJ0VXBsb2FkKHJlZi5zdG9yYWdlLCByZWYuX2xvY2F0aW9uLCBnZXRNYXBwaW5ncygpLCBuZXcgRmJzQmxvYihkYXRhLCB0cnVlKSwgbWV0YWRhdGEpO1xuICByZXR1cm4gcmVmLnN0b3JhZ2UubWFrZVJlcXVlc3RXaXRoVG9rZW5zKHJlcXVlc3RJbmZvLCBuZXdUZXh0Q29ubmVjdGlvbikudGhlbihmaW5hbE1ldGFkYXRhID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbWV0YWRhdGE6IGZpbmFsTWV0YWRhdGEsXG4gICAgICByZWZcbiAgICB9O1xuICB9KTtcbn1cbi8qKlxuICogVXBsb2FkcyBkYXRhIHRvIHRoaXMgb2JqZWN0J3MgbG9jYXRpb24uXG4gKiBUaGUgdXBsb2FkIGNhbiBiZSBwYXVzZWQgYW5kIHJlc3VtZWQsIGFuZCBleHBvc2VzIHByb2dyZXNzIHVwZGF0ZXMuXG4gKiBAcHVibGljXG4gKiBAcGFyYW0gcmVmIC0gU3RvcmFnZVJlZmVyZW5jZSB3aGVyZSBkYXRhIHNob3VsZCBiZSB1cGxvYWRlZC5cbiAqIEBwYXJhbSBkYXRhIC0gVGhlIGRhdGEgdG8gdXBsb2FkLlxuICogQHBhcmFtIG1ldGFkYXRhIC0gTWV0YWRhdGEgZm9yIHRoZSBuZXdseSB1cGxvYWRlZCBkYXRhLlxuICogQHJldHVybnMgQW4gVXBsb2FkVGFza1xuICovXG5mdW5jdGlvbiB1cGxvYWRCeXRlc1Jlc3VtYWJsZSQxKHJlZiwgZGF0YSwgbWV0YWRhdGEpIHtcbiAgcmVmLl90aHJvd0lmUm9vdCgndXBsb2FkQnl0ZXNSZXN1bWFibGUnKTtcbiAgcmV0dXJuIG5ldyBVcGxvYWRUYXNrKHJlZiwgbmV3IEZic0Jsb2IoZGF0YSksIG1ldGFkYXRhKTtcbn1cbi8qKlxuICogVXBsb2FkcyBhIHN0cmluZyB0byB0aGlzIG9iamVjdCdzIGxvY2F0aW9uLlxuICogVGhlIHVwbG9hZCBpcyBub3QgcmVzdW1hYmxlLlxuICogQHB1YmxpY1xuICogQHBhcmFtIHJlZiAtIFN0b3JhZ2VSZWZlcmVuY2Ugd2hlcmUgc3RyaW5nIHNob3VsZCBiZSB1cGxvYWRlZC5cbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSBzdHJpbmcgdG8gdXBsb2FkLlxuICogQHBhcmFtIGZvcm1hdCAtIFRoZSBmb3JtYXQgb2YgdGhlIHN0cmluZyB0byB1cGxvYWQuXG4gKiBAcGFyYW0gbWV0YWRhdGEgLSBNZXRhZGF0YSBmb3IgdGhlIG5ld2x5IHVwbG9hZGVkIHN0cmluZy5cbiAqIEByZXR1cm5zIEEgUHJvbWlzZSBjb250YWluaW5nIGFuIFVwbG9hZFJlc3VsdFxuICovXG5mdW5jdGlvbiB1cGxvYWRTdHJpbmckMShyZWYsIHZhbHVlLCBmb3JtYXQgPSBTdHJpbmdGb3JtYXQuUkFXLCBtZXRhZGF0YSkge1xuICByZWYuX3Rocm93SWZSb290KCd1cGxvYWRTdHJpbmcnKTtcbiAgY29uc3QgZGF0YSA9IGRhdGFGcm9tU3RyaW5nKGZvcm1hdCwgdmFsdWUpO1xuICBjb25zdCBtZXRhZGF0YUNsb25lID0gT2JqZWN0LmFzc2lnbih7fSwgbWV0YWRhdGEpO1xuICBpZiAobWV0YWRhdGFDbG9uZVsnY29udGVudFR5cGUnXSA9PSBudWxsICYmIGRhdGEuY29udGVudFR5cGUgIT0gbnVsbCkge1xuICAgIG1ldGFkYXRhQ2xvbmVbJ2NvbnRlbnRUeXBlJ10gPSBkYXRhLmNvbnRlbnRUeXBlO1xuICB9XG4gIHJldHVybiB1cGxvYWRCeXRlcyQxKHJlZiwgZGF0YS5kYXRhLCBtZXRhZGF0YUNsb25lKTtcbn1cbi8qKlxuICogTGlzdCBhbGwgaXRlbXMgKGZpbGVzKSBhbmQgcHJlZml4ZXMgKGZvbGRlcnMpIHVuZGVyIHRoaXMgc3RvcmFnZSByZWZlcmVuY2UuXG4gKlxuICogVGhpcyBpcyBhIGhlbHBlciBtZXRob2QgZm9yIGNhbGxpbmcgbGlzdCgpIHJlcGVhdGVkbHkgdW50aWwgdGhlcmUgYXJlXG4gKiBubyBtb3JlIHJlc3VsdHMuIFRoZSBkZWZhdWx0IHBhZ2luYXRpb24gc2l6ZSBpcyAxMDAwLlxuICpcbiAqIE5vdGU6IFRoZSByZXN1bHRzIG1heSBub3QgYmUgY29uc2lzdGVudCBpZiBvYmplY3RzIGFyZSBjaGFuZ2VkIHdoaWxlIHRoaXNcbiAqIG9wZXJhdGlvbiBpcyBydW5uaW5nLlxuICpcbiAqIFdhcm5pbmc6IGxpc3RBbGwgbWF5IHBvdGVudGlhbGx5IGNvbnN1bWUgdG9vIG1hbnkgcmVzb3VyY2VzIGlmIHRoZXJlIGFyZVxuICogdG9vIG1hbnkgcmVzdWx0cy5cbiAqIEBwdWJsaWNcbiAqIEBwYXJhbSByZWYgLSBTdG9yYWdlUmVmZXJlbmNlIHRvIGdldCBsaXN0IGZyb20uXG4gKlxuICogQHJldHVybnMgQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhbGwgdGhlIGl0ZW1zIGFuZCBwcmVmaXhlcyB1bmRlclxuICogICAgICB0aGUgY3VycmVudCBzdG9yYWdlIHJlZmVyZW5jZS4gYHByZWZpeGVzYCBjb250YWlucyByZWZlcmVuY2VzIHRvXG4gKiAgICAgIHN1Yi1kaXJlY3RvcmllcyBhbmQgYGl0ZW1zYCBjb250YWlucyByZWZlcmVuY2VzIHRvIG9iamVjdHMgaW4gdGhpc1xuICogICAgICBmb2xkZXIuIGBuZXh0UGFnZVRva2VuYCBpcyBuZXZlciByZXR1cm5lZC5cbiAqL1xuZnVuY3Rpb24gbGlzdEFsbCQxKHJlZikge1xuICBjb25zdCBhY2N1bXVsYXRvciA9IHtcbiAgICBwcmVmaXhlczogW10sXG4gICAgaXRlbXM6IFtdXG4gIH07XG4gIHJldHVybiBsaXN0QWxsSGVscGVyKHJlZiwgYWNjdW11bGF0b3IpLnRoZW4oKCkgPT4gYWNjdW11bGF0b3IpO1xufVxuLyoqXG4gKiBTZXBhcmF0ZWQgZnJvbSBsaXN0QWxsIGJlY2F1c2UgYXN5bmMgZnVuY3Rpb25zIGNhbid0IHVzZSBcImFyZ3VtZW50c1wiLlxuICogQHBhcmFtIHJlZlxuICogQHBhcmFtIGFjY3VtdWxhdG9yXG4gKiBAcGFyYW0gcGFnZVRva2VuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxpc3RBbGxIZWxwZXIocmVmLCBhY2N1bXVsYXRvciwgcGFnZVRva2VuKSB7XG4gIGNvbnN0IG9wdCA9IHtcbiAgICAvLyBtYXhSZXN1bHRzIGlzIDEwMDAgYnkgZGVmYXVsdC5cbiAgICBwYWdlVG9rZW5cbiAgfTtcbiAgY29uc3QgbmV4dFBhZ2UgPSBhd2FpdCBsaXN0JDEocmVmLCBvcHQpO1xuICBhY2N1bXVsYXRvci5wcmVmaXhlcy5wdXNoKC4uLm5leHRQYWdlLnByZWZpeGVzKTtcbiAgYWNjdW11bGF0b3IuaXRlbXMucHVzaCguLi5uZXh0UGFnZS5pdGVtcyk7XG4gIGlmIChuZXh0UGFnZS5uZXh0UGFnZVRva2VuICE9IG51bGwpIHtcbiAgICBhd2FpdCBsaXN0QWxsSGVscGVyKHJlZiwgYWNjdW11bGF0b3IsIG5leHRQYWdlLm5leHRQYWdlVG9rZW4pO1xuICB9XG59XG4vKipcbiAqIExpc3QgaXRlbXMgKGZpbGVzKSBhbmQgcHJlZml4ZXMgKGZvbGRlcnMpIHVuZGVyIHRoaXMgc3RvcmFnZSByZWZlcmVuY2UuXG4gKlxuICogTGlzdCBBUEkgaXMgb25seSBhdmFpbGFibGUgZm9yIEZpcmViYXNlIFJ1bGVzIFZlcnNpb24gMi5cbiAqXG4gKiBHQ1MgaXMgYSBrZXktYmxvYiBzdG9yZS4gRmlyZWJhc2UgU3RvcmFnZSBpbXBvc2VzIHRoZSBzZW1hbnRpYyBvZiAnLydcbiAqIGRlbGltaXRlZCBmb2xkZXIgc3RydWN0dXJlLlxuICogUmVmZXIgdG8gR0NTJ3MgTGlzdCBBUEkgaWYgeW91IHdhbnQgdG8gbGVhcm4gbW9yZS5cbiAqXG4gKiBUbyBhZGhlcmUgdG8gRmlyZWJhc2UgUnVsZXMncyBTZW1hbnRpY3MsIEZpcmViYXNlIFN0b3JhZ2UgZG9lcyBub3RcbiAqIHN1cHBvcnQgb2JqZWN0cyB3aG9zZSBwYXRocyBlbmQgd2l0aCBcIi9cIiBvciBjb250YWluIHR3byBjb25zZWN1dGl2ZVxuICogXCIvXCJzLiBGaXJlYmFzZSBTdG9yYWdlIExpc3QgQVBJIHdpbGwgZmlsdGVyIHRoZXNlIHVuc3VwcG9ydGVkIG9iamVjdHMuXG4gKiBsaXN0KCkgbWF5IGZhaWwgaWYgdGhlcmUgYXJlIHRvbyBtYW55IHVuc3VwcG9ydGVkIG9iamVjdHMgaW4gdGhlIGJ1Y2tldC5cbiAqIEBwdWJsaWNcbiAqXG4gKiBAcGFyYW0gcmVmIC0gU3RvcmFnZVJlZmVyZW5jZSB0byBnZXQgbGlzdCBmcm9tLlxuICogQHBhcmFtIG9wdGlvbnMgLSBTZWUgTGlzdE9wdGlvbnMgZm9yIGRldGFpbHMuXG4gKiBAcmV0dXJucyBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBpdGVtcyBhbmQgcHJlZml4ZXMuXG4gKiAgICAgIGBwcmVmaXhlc2AgY29udGFpbnMgcmVmZXJlbmNlcyB0byBzdWItZm9sZGVycyBhbmQgYGl0ZW1zYFxuICogICAgICBjb250YWlucyByZWZlcmVuY2VzIHRvIG9iamVjdHMgaW4gdGhpcyBmb2xkZXIuIGBuZXh0UGFnZVRva2VuYFxuICogICAgICBjYW4gYmUgdXNlZCB0byBnZXQgdGhlIHJlc3Qgb2YgdGhlIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGxpc3QkMShyZWYsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgIT0gbnVsbCkge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5tYXhSZXN1bHRzID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsaWRhdGVOdW1iZXIoJ29wdGlvbnMubWF4UmVzdWx0cycsIC8qIG1pblZhbHVlPSAqLzEsIC8qIG1heFZhbHVlPSAqLzEwMDAsIG9wdGlvbnMubWF4UmVzdWx0cyk7XG4gICAgfVxuICB9XG4gIGNvbnN0IG9wID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3QgcmVxdWVzdEluZm8gPSBsaXN0JDIocmVmLnN0b3JhZ2UsIHJlZi5fbG9jYXRpb24sIC8qZGVsaW1pdGVyPSAqLycvJywgb3AucGFnZVRva2VuLCBvcC5tYXhSZXN1bHRzKTtcbiAgcmV0dXJuIHJlZi5zdG9yYWdlLm1ha2VSZXF1ZXN0V2l0aFRva2VucyhyZXF1ZXN0SW5mbywgbmV3VGV4dENvbm5lY3Rpb24pO1xufVxuLyoqXG4gKiBBIGBQcm9taXNlYCB0aGF0IHJlc29sdmVzIHdpdGggdGhlIG1ldGFkYXRhIGZvciB0aGlzIG9iamVjdC4gSWYgdGhpc1xuICogb2JqZWN0IGRvZXNuJ3QgZXhpc3Qgb3IgbWV0YWRhdGEgY2Fubm90IGJlIHJldHJpZXZlZCwgdGhlIHByb21pc2UgaXNcbiAqIHJlamVjdGVkLlxuICogQHB1YmxpY1xuICogQHBhcmFtIHJlZiAtIFN0b3JhZ2VSZWZlcmVuY2UgdG8gZ2V0IG1ldGFkYXRhIGZyb20uXG4gKi9cbmZ1bmN0aW9uIGdldE1ldGFkYXRhJDEocmVmKSB7XG4gIHJlZi5fdGhyb3dJZlJvb3QoJ2dldE1ldGFkYXRhJyk7XG4gIGNvbnN0IHJlcXVlc3RJbmZvID0gZ2V0TWV0YWRhdGEkMihyZWYuc3RvcmFnZSwgcmVmLl9sb2NhdGlvbiwgZ2V0TWFwcGluZ3MoKSk7XG4gIHJldHVybiByZWYuc3RvcmFnZS5tYWtlUmVxdWVzdFdpdGhUb2tlbnMocmVxdWVzdEluZm8sIG5ld1RleHRDb25uZWN0aW9uKTtcbn1cbi8qKlxuICogVXBkYXRlcyB0aGUgbWV0YWRhdGEgZm9yIHRoaXMgb2JqZWN0LlxuICogQHB1YmxpY1xuICogQHBhcmFtIHJlZiAtIFN0b3JhZ2VSZWZlcmVuY2UgdG8gdXBkYXRlIG1ldGFkYXRhIGZvci5cbiAqIEBwYXJhbSBtZXRhZGF0YSAtIFRoZSBuZXcgbWV0YWRhdGEgZm9yIHRoZSBvYmplY3QuXG4gKiAgICAgT25seSB2YWx1ZXMgdGhhdCBoYXZlIGJlZW4gZXhwbGljaXRseSBzZXQgd2lsbCBiZSBjaGFuZ2VkLiBFeHBsaWNpdGx5XG4gKiAgICAgc2V0dGluZyBhIHZhbHVlIHRvIG51bGwgd2lsbCByZW1vdmUgdGhlIG1ldGFkYXRhLlxuICogQHJldHVybnMgQSBgUHJvbWlzZWAgdGhhdCByZXNvbHZlc1xuICogICAgIHdpdGggdGhlIG5ldyBtZXRhZGF0YSBmb3IgdGhpcyBvYmplY3QuXG4gKiAgICAgU2VlIGBmaXJlYmFzZVN0b3JhZ2UuUmVmZXJlbmNlLnByb3RvdHlwZS5nZXRNZXRhZGF0YWBcbiAqL1xuZnVuY3Rpb24gdXBkYXRlTWV0YWRhdGEkMShyZWYsIG1ldGFkYXRhKSB7XG4gIHJlZi5fdGhyb3dJZlJvb3QoJ3VwZGF0ZU1ldGFkYXRhJyk7XG4gIGNvbnN0IHJlcXVlc3RJbmZvID0gdXBkYXRlTWV0YWRhdGEkMihyZWYuc3RvcmFnZSwgcmVmLl9sb2NhdGlvbiwgbWV0YWRhdGEsIGdldE1hcHBpbmdzKCkpO1xuICByZXR1cm4gcmVmLnN0b3JhZ2UubWFrZVJlcXVlc3RXaXRoVG9rZW5zKHJlcXVlc3RJbmZvLCBuZXdUZXh0Q29ubmVjdGlvbik7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGRvd25sb2FkIFVSTCBmb3IgdGhlIGdpdmVuIFJlZmVyZW5jZS5cbiAqIEBwdWJsaWNcbiAqIEByZXR1cm5zIEEgYFByb21pc2VgIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZG93bmxvYWRcbiAqICAgICBVUkwgZm9yIHRoaXMgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBnZXREb3dubG9hZFVSTCQxKHJlZikge1xuICByZWYuX3Rocm93SWZSb290KCdnZXREb3dubG9hZFVSTCcpO1xuICBjb25zdCByZXF1ZXN0SW5mbyA9IGdldERvd25sb2FkVXJsKHJlZi5zdG9yYWdlLCByZWYuX2xvY2F0aW9uLCBnZXRNYXBwaW5ncygpKTtcbiAgcmV0dXJuIHJlZi5zdG9yYWdlLm1ha2VSZXF1ZXN0V2l0aFRva2VucyhyZXF1ZXN0SW5mbywgbmV3VGV4dENvbm5lY3Rpb24pLnRoZW4odXJsID0+IHtcbiAgICBpZiAodXJsID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBub0Rvd25sb2FkVVJMKCk7XG4gICAgfVxuICAgIHJldHVybiB1cmw7XG4gIH0pO1xufVxuLyoqXG4gKiBEZWxldGVzIHRoZSBvYmplY3QgYXQgdGhpcyBsb2NhdGlvbi5cbiAqIEBwdWJsaWNcbiAqIEBwYXJhbSByZWYgLSBTdG9yYWdlUmVmZXJlbmNlIGZvciBvYmplY3QgdG8gZGVsZXRlLlxuICogQHJldHVybnMgQSBgUHJvbWlzZWAgdGhhdCByZXNvbHZlcyBpZiB0aGUgZGVsZXRpb24gc3VjY2VlZHMuXG4gKi9cbmZ1bmN0aW9uIGRlbGV0ZU9iamVjdCQxKHJlZikge1xuICByZWYuX3Rocm93SWZSb290KCdkZWxldGVPYmplY3QnKTtcbiAgY29uc3QgcmVxdWVzdEluZm8gPSBkZWxldGVPYmplY3QkMihyZWYuc3RvcmFnZSwgcmVmLl9sb2NhdGlvbik7XG4gIHJldHVybiByZWYuc3RvcmFnZS5tYWtlUmVxdWVzdFdpdGhUb2tlbnMocmVxdWVzdEluZm8sIG5ld1RleHRDb25uZWN0aW9uKTtcbn1cbi8qKlxuICogUmV0dXJucyByZWZlcmVuY2UgZm9yIG9iamVjdCBvYnRhaW5lZCBieSBhcHBlbmRpbmcgYGNoaWxkUGF0aGAgdG8gYHJlZmAuXG4gKlxuICogQHBhcmFtIHJlZiAtIFN0b3JhZ2VSZWZlcmVuY2UgdG8gZ2V0IGNoaWxkIG9mLlxuICogQHBhcmFtIGNoaWxkUGF0aCAtIENoaWxkIHBhdGggZnJvbSBwcm92aWRlZCByZWYuXG4gKiBAcmV0dXJucyBBIHJlZmVyZW5jZSB0byB0aGUgb2JqZWN0IG9idGFpbmVkIGJ5XG4gKiBhcHBlbmRpbmcgY2hpbGRQYXRoLCByZW1vdmluZyBhbnkgZHVwbGljYXRlLCBiZWdpbm5pbmcsIG9yIHRyYWlsaW5nXG4gKiBzbGFzaGVzLlxuICpcbiAqL1xuZnVuY3Rpb24gX2dldENoaWxkJDEocmVmLCBjaGlsZFBhdGgpIHtcbiAgY29uc3QgbmV3UGF0aCA9IGNoaWxkKHJlZi5fbG9jYXRpb24ucGF0aCwgY2hpbGRQYXRoKTtcbiAgY29uc3QgbG9jYXRpb24gPSBuZXcgTG9jYXRpb24ocmVmLl9sb2NhdGlvbi5idWNrZXQsIG5ld1BhdGgpO1xuICByZXR1cm4gbmV3IFJlZmVyZW5jZShyZWYuc3RvcmFnZSwgbG9jYXRpb24pO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZnVuY3Rpb24gaXNVcmwocGF0aCkge1xuICByZXR1cm4gL15bQS1aYS16XSs6XFwvXFwvLy50ZXN0KHBhdGgpO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgZmlyZWJhc2VTdG9yYWdlLlJlZmVyZW5jZSBmb3IgdGhlIGdpdmVuIHVybC5cbiAqL1xuZnVuY3Rpb24gcmVmRnJvbVVSTChzZXJ2aWNlLCB1cmwpIHtcbiAgcmV0dXJuIG5ldyBSZWZlcmVuY2Uoc2VydmljZSwgdXJsKTtcbn1cbi8qKlxuICogUmV0dXJucyBhIGZpcmViYXNlU3RvcmFnZS5SZWZlcmVuY2UgZm9yIHRoZSBnaXZlbiBwYXRoIGluIHRoZSBkZWZhdWx0XG4gKiBidWNrZXQuXG4gKi9cbmZ1bmN0aW9uIHJlZkZyb21QYXRoKHJlZiwgcGF0aCkge1xuICBpZiAocmVmIGluc3RhbmNlb2YgRmlyZWJhc2VTdG9yYWdlSW1wbCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSByZWY7XG4gICAgaWYgKHNlcnZpY2UuX2J1Y2tldCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBub0RlZmF1bHRCdWNrZXQoKTtcbiAgICB9XG4gICAgY29uc3QgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShzZXJ2aWNlLCBzZXJ2aWNlLl9idWNrZXQpO1xuICAgIGlmIChwYXRoICE9IG51bGwpIHtcbiAgICAgIHJldHVybiByZWZGcm9tUGF0aChyZWZlcmVuY2UsIHBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVmZXJlbmNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyByZWYgaXMgYSBSZWZlcmVuY2VcbiAgICBpZiAocGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gX2dldENoaWxkJDEocmVmLCBwYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlZjtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZiQxKHNlcnZpY2VPclJlZiwgcGF0aE9yVXJsKSB7XG4gIGlmIChwYXRoT3JVcmwgJiYgaXNVcmwocGF0aE9yVXJsKSkge1xuICAgIGlmIChzZXJ2aWNlT3JSZWYgaW5zdGFuY2VvZiBGaXJlYmFzZVN0b3JhZ2VJbXBsKSB7XG4gICAgICByZXR1cm4gcmVmRnJvbVVSTChzZXJ2aWNlT3JSZWYsIHBhdGhPclVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGludmFsaWRBcmd1bWVudCgnVG8gdXNlIHJlZihzZXJ2aWNlLCB1cmwpLCB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIFN0b3JhZ2UgaW5zdGFuY2UuJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiByZWZGcm9tUGF0aChzZXJ2aWNlT3JSZWYsIHBhdGhPclVybCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGV4dHJhY3RCdWNrZXQoaG9zdCwgY29uZmlnKSB7XG4gIGNvbnN0IGJ1Y2tldFN0cmluZyA9IGNvbmZpZyA9PT0gbnVsbCB8fCBjb25maWcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbmZpZ1tDT05GSUdfU1RPUkFHRV9CVUNLRVRfS0VZXTtcbiAgaWYgKGJ1Y2tldFN0cmluZyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIExvY2F0aW9uLm1ha2VGcm9tQnVja2V0U3BlYyhidWNrZXRTdHJpbmcsIGhvc3QpO1xufVxuZnVuY3Rpb24gY29ubmVjdFN0b3JhZ2VFbXVsYXRvciQxKHN0b3JhZ2UsIGhvc3QsIHBvcnQsIG9wdGlvbnMgPSB7fSkge1xuICBzdG9yYWdlLmhvc3QgPSBgJHtob3N0fToke3BvcnR9YDtcbiAgc3RvcmFnZS5fcHJvdG9jb2wgPSAnaHR0cCc7XG4gIGNvbnN0IHtcbiAgICBtb2NrVXNlclRva2VuXG4gIH0gPSBvcHRpb25zO1xuICBpZiAobW9ja1VzZXJUb2tlbikge1xuICAgIHN0b3JhZ2UuX292ZXJyaWRlQXV0aFRva2VuID0gdHlwZW9mIG1vY2tVc2VyVG9rZW4gPT09ICdzdHJpbmcnID8gbW9ja1VzZXJUb2tlbiA6IGNyZWF0ZU1vY2tVc2VyVG9rZW4obW9ja1VzZXJUb2tlbiwgc3RvcmFnZS5hcHAub3B0aW9ucy5wcm9qZWN0SWQpO1xuICB9XG59XG4vKipcbiAqIEEgc2VydmljZSB0aGF0IHByb3ZpZGVzIEZpcmViYXNlIFN0b3JhZ2UgUmVmZXJlbmNlIGluc3RhbmNlcy5cbiAqIEBwYXJhbSBvcHRfdXJsIC0gZ3M6Ly8gdXJsIHRvIGEgY3VzdG9tIFN0b3JhZ2UgQnVja2V0XG4gKlxuICogQGludGVybmFsXG4gKi9cbmNsYXNzIEZpcmViYXNlU3RvcmFnZUltcGwge1xuICBjb25zdHJ1Y3RvcihcbiAgLyoqXG4gICAqIEZpcmViYXNlQXBwIGFzc29jaWF0ZWQgd2l0aCB0aGlzIFN0b3JhZ2VTZXJ2aWNlIGluc3RhbmNlLlxuICAgKi9cbiAgYXBwLCBfYXV0aFByb3ZpZGVyLFxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBfYXBwQ2hlY2tQcm92aWRlcixcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgX3VybCwgX2ZpcmViYXNlVmVyc2lvbikge1xuICAgIHRoaXMuYXBwID0gYXBwO1xuICAgIHRoaXMuX2F1dGhQcm92aWRlciA9IF9hdXRoUHJvdmlkZXI7XG4gICAgdGhpcy5fYXBwQ2hlY2tQcm92aWRlciA9IF9hcHBDaGVja1Byb3ZpZGVyO1xuICAgIHRoaXMuX3VybCA9IF91cmw7XG4gICAgdGhpcy5fZmlyZWJhc2VWZXJzaW9uID0gX2ZpcmViYXNlVmVyc2lvbjtcbiAgICB0aGlzLl9idWNrZXQgPSBudWxsO1xuICAgIC8qKlxuICAgICAqIFRoaXMgc3RyaW5nIGNhbiBiZSBpbiB0aGUgZm9ybWF0czpcbiAgICAgKiAtIGhvc3RcbiAgICAgKiAtIGhvc3Q6cG9ydFxuICAgICAqL1xuICAgIHRoaXMuX2hvc3QgPSBERUZBVUxUX0hPU1Q7XG4gICAgdGhpcy5fcHJvdG9jb2wgPSAnaHR0cHMnO1xuICAgIHRoaXMuX2FwcElkID0gbnVsbDtcbiAgICB0aGlzLl9kZWxldGVkID0gZmFsc2U7XG4gICAgdGhpcy5fbWF4T3BlcmF0aW9uUmV0cnlUaW1lID0gREVGQVVMVF9NQVhfT1BFUkFUSU9OX1JFVFJZX1RJTUU7XG4gICAgdGhpcy5fbWF4VXBsb2FkUmV0cnlUaW1lID0gREVGQVVMVF9NQVhfVVBMT0FEX1JFVFJZX1RJTUU7XG4gICAgdGhpcy5fcmVxdWVzdHMgPSBuZXcgU2V0KCk7XG4gICAgaWYgKF91cmwgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fYnVja2V0ID0gTG9jYXRpb24ubWFrZUZyb21CdWNrZXRTcGVjKF91cmwsIHRoaXMuX2hvc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9idWNrZXQgPSBleHRyYWN0QnVja2V0KHRoaXMuX2hvc3QsIHRoaXMuYXBwLm9wdGlvbnMpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogVGhlIGhvc3Qgc3RyaW5nIGZvciB0aGlzIHNlcnZpY2UsIGluIHRoZSBmb3JtIG9mIGBob3N0YCBvclxuICAgKiBgaG9zdDpwb3J0YC5cbiAgICovXG4gIGdldCBob3N0KCkge1xuICAgIHJldHVybiB0aGlzLl9ob3N0O1xuICB9XG4gIHNldCBob3N0KGhvc3QpIHtcbiAgICB0aGlzLl9ob3N0ID0gaG9zdDtcbiAgICBpZiAodGhpcy5fdXJsICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX2J1Y2tldCA9IExvY2F0aW9uLm1ha2VGcm9tQnVja2V0U3BlYyh0aGlzLl91cmwsIGhvc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9idWNrZXQgPSBleHRyYWN0QnVja2V0KGhvc3QsIHRoaXMuYXBwLm9wdGlvbnMpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogVGhlIG1heGltdW0gdGltZSB0byByZXRyeSB1cGxvYWRzIGluIG1pbGxpc2Vjb25kcy5cbiAgICovXG4gIGdldCBtYXhVcGxvYWRSZXRyeVRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heFVwbG9hZFJldHJ5VGltZTtcbiAgfVxuICBzZXQgbWF4VXBsb2FkUmV0cnlUaW1lKHRpbWUpIHtcbiAgICB2YWxpZGF0ZU51bWJlcigndGltZScsIC8qIG1pblZhbHVlPSovMCwgLyogbWF4VmFsdWU9ICovTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLCB0aW1lKTtcbiAgICB0aGlzLl9tYXhVcGxvYWRSZXRyeVRpbWUgPSB0aW1lO1xuICB9XG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSB0aW1lIHRvIHJldHJ5IG9wZXJhdGlvbnMgb3RoZXIgdGhhbiB1cGxvYWRzIG9yIGRvd25sb2FkcyBpblxuICAgKiBtaWxsaXNlY29uZHMuXG4gICAqL1xuICBnZXQgbWF4T3BlcmF0aW9uUmV0cnlUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhPcGVyYXRpb25SZXRyeVRpbWU7XG4gIH1cbiAgc2V0IG1heE9wZXJhdGlvblJldHJ5VGltZSh0aW1lKSB7XG4gICAgdmFsaWRhdGVOdW1iZXIoJ3RpbWUnLCAvKiBtaW5WYWx1ZT0qLzAsIC8qIG1heFZhbHVlPSAqL051bWJlci5QT1NJVElWRV9JTkZJTklUWSwgdGltZSk7XG4gICAgdGhpcy5fbWF4T3BlcmF0aW9uUmV0cnlUaW1lID0gdGltZTtcbiAgfVxuICBhc3luYyBfZ2V0QXV0aFRva2VuKCkge1xuICAgIGlmICh0aGlzLl9vdmVycmlkZUF1dGhUb2tlbikge1xuICAgICAgcmV0dXJuIHRoaXMuX292ZXJyaWRlQXV0aFRva2VuO1xuICAgIH1cbiAgICBjb25zdCBhdXRoID0gdGhpcy5fYXV0aFByb3ZpZGVyLmdldEltbWVkaWF0ZSh7XG4gICAgICBvcHRpb25hbDogdHJ1ZVxuICAgIH0pO1xuICAgIGlmIChhdXRoKSB7XG4gICAgICBjb25zdCB0b2tlbkRhdGEgPSBhd2FpdCBhdXRoLmdldFRva2VuKCk7XG4gICAgICBpZiAodG9rZW5EYXRhICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0b2tlbkRhdGEuYWNjZXNzVG9rZW47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGFzeW5jIF9nZXRBcHBDaGVja1Rva2VuKCkge1xuICAgIGlmIChfaXNGaXJlYmFzZVNlcnZlckFwcCh0aGlzLmFwcCkgJiYgdGhpcy5hcHAuc2V0dGluZ3MuYXBwQ2hlY2tUb2tlbikge1xuICAgICAgcmV0dXJuIHRoaXMuYXBwLnNldHRpbmdzLmFwcENoZWNrVG9rZW47XG4gICAgfVxuICAgIGNvbnN0IGFwcENoZWNrID0gdGhpcy5fYXBwQ2hlY2tQcm92aWRlci5nZXRJbW1lZGlhdGUoe1xuICAgICAgb3B0aW9uYWw6IHRydWVcbiAgICB9KTtcbiAgICBpZiAoYXBwQ2hlY2spIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwcENoZWNrLmdldFRva2VuKCk7XG4gICAgICAvLyBUT0RPOiBXaGF0IGRvIHdlIHdhbnQgdG8gZG8gaWYgdGhlcmUgaXMgYW4gZXJyb3IgZ2V0dGluZyB0aGUgdG9rZW4/XG4gICAgICAvLyBDb250ZXh0OiBhcHBDaGVjay5nZXRUb2tlbigpIHdpbGwgbmV2ZXIgdGhyb3cgZXZlbiBpZiBhbiBlcnJvciBoYXBwZW5lZC4gSW4gdGhlIGVycm9yIGNhc2UsIGEgZHVtbXkgdG9rZW4gd2lsbCBiZVxuICAgICAgLy8gcmV0dXJuZWQgYWxvbmcgd2l0aCBhbiBlcnJvciBmaWVsZCBkZXNjcmliaW5nIHRoZSBlcnJvci4gSW4gZ2VuZXJhbCwgd2Ugc2hvdWxkbid0IGNhcmUgYWJvdXQgdGhlIGVycm9yIGNvbmRpdGlvbiBhbmQganVzdCB1c2VcbiAgICAgIC8vIHRoZSB0b2tlbiAoYWN0dWFsIG9yIGR1bW15KSB0byBzZW5kIHJlcXVlc3RzLlxuICAgICAgcmV0dXJuIHJlc3VsdC50b2tlbjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLyoqXG4gICAqIFN0b3AgcnVubmluZyByZXF1ZXN0cyBhbmQgcHJldmVudCBtb3JlIGZyb20gYmVpbmcgY3JlYXRlZC5cbiAgICovXG4gIF9kZWxldGUoKSB7XG4gICAgaWYgKCF0aGlzLl9kZWxldGVkKSB7XG4gICAgICB0aGlzLl9kZWxldGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3JlcXVlc3RzLmZvckVhY2gocmVxdWVzdCA9PiByZXF1ZXN0LmNhbmNlbCgpKTtcbiAgICAgIHRoaXMuX3JlcXVlc3RzLmNsZWFyKCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIG5ldyBmaXJlYmFzZVN0b3JhZ2UuUmVmZXJlbmNlIG9iamVjdCByZWZlcmVuY2luZyB0aGlzIFN0b3JhZ2VTZXJ2aWNlXG4gICAqIGF0IHRoZSBnaXZlbiBMb2NhdGlvbi5cbiAgICovXG4gIF9tYWtlU3RvcmFnZVJlZmVyZW5jZShsb2MpIHtcbiAgICByZXR1cm4gbmV3IFJlZmVyZW5jZSh0aGlzLCBsb2MpO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0gcmVxdWVzdEluZm8gLSBIVFRQIFJlcXVlc3RJbmZvIG9iamVjdFxuICAgKiBAcGFyYW0gYXV0aFRva2VuIC0gRmlyZWJhc2UgYXV0aCB0b2tlblxuICAgKi9cbiAgX21ha2VSZXF1ZXN0KHJlcXVlc3RJbmZvLCByZXF1ZXN0RmFjdG9yeSwgYXV0aFRva2VuLCBhcHBDaGVja1Rva2VuLCByZXRyeSA9IHRydWUpIHtcbiAgICBpZiAoIXRoaXMuX2RlbGV0ZWQpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBtYWtlUmVxdWVzdChyZXF1ZXN0SW5mbywgdGhpcy5fYXBwSWQsIGF1dGhUb2tlbiwgYXBwQ2hlY2tUb2tlbiwgcmVxdWVzdEZhY3RvcnksIHRoaXMuX2ZpcmViYXNlVmVyc2lvbiwgcmV0cnkpO1xuICAgICAgdGhpcy5fcmVxdWVzdHMuYWRkKHJlcXVlc3QpO1xuICAgICAgLy8gUmVxdWVzdCByZW1vdmVzIGl0c2VsZiBmcm9tIHNldCB3aGVuIGNvbXBsZXRlLlxuICAgICAgcmVxdWVzdC5nZXRQcm9taXNlKCkudGhlbigoKSA9PiB0aGlzLl9yZXF1ZXN0cy5kZWxldGUocmVxdWVzdCksICgpID0+IHRoaXMuX3JlcXVlc3RzLmRlbGV0ZShyZXF1ZXN0KSk7XG4gICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBGYWlsUmVxdWVzdChhcHBEZWxldGVkKCkpO1xuICAgIH1cbiAgfVxuICBhc3luYyBtYWtlUmVxdWVzdFdpdGhUb2tlbnMocmVxdWVzdEluZm8sIHJlcXVlc3RGYWN0b3J5KSB7XG4gICAgY29uc3QgW2F1dGhUb2tlbiwgYXBwQ2hlY2tUb2tlbl0gPSBhd2FpdCBQcm9taXNlLmFsbChbdGhpcy5fZ2V0QXV0aFRva2VuKCksIHRoaXMuX2dldEFwcENoZWNrVG9rZW4oKV0pO1xuICAgIHJldHVybiB0aGlzLl9tYWtlUmVxdWVzdChyZXF1ZXN0SW5mbywgcmVxdWVzdEZhY3RvcnksIGF1dGhUb2tlbiwgYXBwQ2hlY2tUb2tlbikuZ2V0UHJvbWlzZSgpO1xuICB9XG59XG5jb25zdCBuYW1lID0gXCJAZmlyZWJhc2Uvc3RvcmFnZVwiO1xuY29uc3QgdmVyc2lvbiA9IFwiMC4xMy43XCI7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIFR5cGUgY29uc3RhbnQgZm9yIEZpcmViYXNlIFN0b3JhZ2UuXG4gKi9cbmNvbnN0IFNUT1JBR0VfVFlQRSA9ICdzdG9yYWdlJztcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogRG93bmxvYWRzIHRoZSBkYXRhIGF0IHRoZSBvYmplY3QncyBsb2NhdGlvbi4gUmV0dXJucyBhbiBlcnJvciBpZiB0aGUgb2JqZWN0XG4gKiBpcyBub3QgZm91bmQuXG4gKlxuICogVG8gdXNlIHRoaXMgZnVuY3Rpb25hbGl0eSwgeW91IGhhdmUgdG8gd2hpdGVsaXN0IHlvdXIgYXBwJ3Mgb3JpZ2luIGluIHlvdXJcbiAqIENsb3VkIFN0b3JhZ2UgYnVja2V0LiBTZWUgYWxzb1xuICogaHR0cHM6Ly9jbG91ZC5nb29nbGUuY29tL3N0b3JhZ2UvZG9jcy9jb25maWd1cmluZy1jb3JzXG4gKlxuICogQHB1YmxpY1xuICogQHBhcmFtIHJlZiAtIFN0b3JhZ2VSZWZlcmVuY2Ugd2hlcmUgZGF0YSBzaG91bGQgYmUgZG93bmxvYWRlZC5cbiAqIEBwYXJhbSBtYXhEb3dubG9hZFNpemVCeXRlcyAtIElmIHNldCwgdGhlIG1heGltdW0gYWxsb3dlZCBzaXplIGluIGJ5dGVzIHRvXG4gKiByZXRyaWV2ZS5cbiAqIEByZXR1cm5zIEEgUHJvbWlzZSBjb250YWluaW5nIHRoZSBvYmplY3QncyBieXRlc1xuICovXG5mdW5jdGlvbiBnZXRCeXRlcyhyZWYsIG1heERvd25sb2FkU2l6ZUJ5dGVzKSB7XG4gIHJlZiA9IGdldE1vZHVsYXJJbnN0YW5jZShyZWYpO1xuICByZXR1cm4gZ2V0Qnl0ZXNJbnRlcm5hbChyZWYsIG1heERvd25sb2FkU2l6ZUJ5dGVzKTtcbn1cbi8qKlxuICogVXBsb2FkcyBkYXRhIHRvIHRoaXMgb2JqZWN0J3MgbG9jYXRpb24uXG4gKiBUaGUgdXBsb2FkIGlzIG5vdCByZXN1bWFibGUuXG4gKiBAcHVibGljXG4gKiBAcGFyYW0gcmVmIC0ge0BsaW5rIFN0b3JhZ2VSZWZlcmVuY2V9IHdoZXJlIGRhdGEgc2hvdWxkIGJlIHVwbG9hZGVkLlxuICogQHBhcmFtIGRhdGEgLSBUaGUgZGF0YSB0byB1cGxvYWQuXG4gKiBAcGFyYW0gbWV0YWRhdGEgLSBNZXRhZGF0YSBmb3IgdGhlIGRhdGEgdG8gdXBsb2FkLlxuICogQHJldHVybnMgQSBQcm9taXNlIGNvbnRhaW5pbmcgYW4gVXBsb2FkUmVzdWx0XG4gKi9cbmZ1bmN0aW9uIHVwbG9hZEJ5dGVzKHJlZiwgZGF0YSwgbWV0YWRhdGEpIHtcbiAgcmVmID0gZ2V0TW9kdWxhckluc3RhbmNlKHJlZik7XG4gIHJldHVybiB1cGxvYWRCeXRlcyQxKHJlZiwgZGF0YSwgbWV0YWRhdGEpO1xufVxuLyoqXG4gKiBVcGxvYWRzIGEgc3RyaW5nIHRvIHRoaXMgb2JqZWN0J3MgbG9jYXRpb24uXG4gKiBUaGUgdXBsb2FkIGlzIG5vdCByZXN1bWFibGUuXG4gKiBAcHVibGljXG4gKiBAcGFyYW0gcmVmIC0ge0BsaW5rIFN0b3JhZ2VSZWZlcmVuY2V9IHdoZXJlIHN0cmluZyBzaG91bGQgYmUgdXBsb2FkZWQuXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgc3RyaW5nIHRvIHVwbG9hZC5cbiAqIEBwYXJhbSBmb3JtYXQgLSBUaGUgZm9ybWF0IG9mIHRoZSBzdHJpbmcgdG8gdXBsb2FkLlxuICogQHBhcmFtIG1ldGFkYXRhIC0gTWV0YWRhdGEgZm9yIHRoZSBzdHJpbmcgdG8gdXBsb2FkLlxuICogQHJldHVybnMgQSBQcm9taXNlIGNvbnRhaW5pbmcgYW4gVXBsb2FkUmVzdWx0XG4gKi9cbmZ1bmN0aW9uIHVwbG9hZFN0cmluZyhyZWYsIHZhbHVlLCBmb3JtYXQsIG1ldGFkYXRhKSB7XG4gIHJlZiA9IGdldE1vZHVsYXJJbnN0YW5jZShyZWYpO1xuICByZXR1cm4gdXBsb2FkU3RyaW5nJDEocmVmLCB2YWx1ZSwgZm9ybWF0LCBtZXRhZGF0YSk7XG59XG4vKipcbiAqIFVwbG9hZHMgZGF0YSB0byB0aGlzIG9iamVjdCdzIGxvY2F0aW9uLlxuICogVGhlIHVwbG9hZCBjYW4gYmUgcGF1c2VkIGFuZCByZXN1bWVkLCBhbmQgZXhwb3NlcyBwcm9ncmVzcyB1cGRhdGVzLlxuICogQHB1YmxpY1xuICogQHBhcmFtIHJlZiAtIHtAbGluayBTdG9yYWdlUmVmZXJlbmNlfSB3aGVyZSBkYXRhIHNob3VsZCBiZSB1cGxvYWRlZC5cbiAqIEBwYXJhbSBkYXRhIC0gVGhlIGRhdGEgdG8gdXBsb2FkLlxuICogQHBhcmFtIG1ldGFkYXRhIC0gTWV0YWRhdGEgZm9yIHRoZSBkYXRhIHRvIHVwbG9hZC5cbiAqIEByZXR1cm5zIEFuIFVwbG9hZFRhc2tcbiAqL1xuZnVuY3Rpb24gdXBsb2FkQnl0ZXNSZXN1bWFibGUocmVmLCBkYXRhLCBtZXRhZGF0YSkge1xuICByZWYgPSBnZXRNb2R1bGFySW5zdGFuY2UocmVmKTtcbiAgcmV0dXJuIHVwbG9hZEJ5dGVzUmVzdW1hYmxlJDEocmVmLCBkYXRhLCBtZXRhZGF0YSk7XG59XG4vKipcbiAqIEEgYFByb21pc2VgIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbWV0YWRhdGEgZm9yIHRoaXMgb2JqZWN0LiBJZiB0aGlzXG4gKiBvYmplY3QgZG9lc24ndCBleGlzdCBvciBtZXRhZGF0YSBjYW5ub3QgYmUgcmV0cmlldmVkLCB0aGUgcHJvbWlzZSBpc1xuICogcmVqZWN0ZWQuXG4gKiBAcHVibGljXG4gKiBAcGFyYW0gcmVmIC0ge0BsaW5rIFN0b3JhZ2VSZWZlcmVuY2V9IHRvIGdldCBtZXRhZGF0YSBmcm9tLlxuICovXG5mdW5jdGlvbiBnZXRNZXRhZGF0YShyZWYpIHtcbiAgcmVmID0gZ2V0TW9kdWxhckluc3RhbmNlKHJlZik7XG4gIHJldHVybiBnZXRNZXRhZGF0YSQxKHJlZik7XG59XG4vKipcbiAqIFVwZGF0ZXMgdGhlIG1ldGFkYXRhIGZvciB0aGlzIG9iamVjdC5cbiAqIEBwdWJsaWNcbiAqIEBwYXJhbSByZWYgLSB7QGxpbmsgU3RvcmFnZVJlZmVyZW5jZX0gdG8gdXBkYXRlIG1ldGFkYXRhIGZvci5cbiAqIEBwYXJhbSBtZXRhZGF0YSAtIFRoZSBuZXcgbWV0YWRhdGEgZm9yIHRoZSBvYmplY3QuXG4gKiAgICAgT25seSB2YWx1ZXMgdGhhdCBoYXZlIGJlZW4gZXhwbGljaXRseSBzZXQgd2lsbCBiZSBjaGFuZ2VkLiBFeHBsaWNpdGx5XG4gKiAgICAgc2V0dGluZyBhIHZhbHVlIHRvIG51bGwgd2lsbCByZW1vdmUgdGhlIG1ldGFkYXRhLlxuICogQHJldHVybnMgQSBgUHJvbWlzZWAgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBuZXcgbWV0YWRhdGEgZm9yIHRoaXMgb2JqZWN0LlxuICovXG5mdW5jdGlvbiB1cGRhdGVNZXRhZGF0YShyZWYsIG1ldGFkYXRhKSB7XG4gIHJlZiA9IGdldE1vZHVsYXJJbnN0YW5jZShyZWYpO1xuICByZXR1cm4gdXBkYXRlTWV0YWRhdGEkMShyZWYsIG1ldGFkYXRhKTtcbn1cbi8qKlxuICogTGlzdCBpdGVtcyAoZmlsZXMpIGFuZCBwcmVmaXhlcyAoZm9sZGVycykgdW5kZXIgdGhpcyBzdG9yYWdlIHJlZmVyZW5jZS5cbiAqXG4gKiBMaXN0IEFQSSBpcyBvbmx5IGF2YWlsYWJsZSBmb3IgRmlyZWJhc2UgUnVsZXMgVmVyc2lvbiAyLlxuICpcbiAqIEdDUyBpcyBhIGtleS1ibG9iIHN0b3JlLiBGaXJlYmFzZSBTdG9yYWdlIGltcG9zZXMgdGhlIHNlbWFudGljIG9mICcvJ1xuICogZGVsaW1pdGVkIGZvbGRlciBzdHJ1Y3R1cmUuXG4gKiBSZWZlciB0byBHQ1MncyBMaXN0IEFQSSBpZiB5b3Ugd2FudCB0byBsZWFybiBtb3JlLlxuICpcbiAqIFRvIGFkaGVyZSB0byBGaXJlYmFzZSBSdWxlcydzIFNlbWFudGljcywgRmlyZWJhc2UgU3RvcmFnZSBkb2VzIG5vdFxuICogc3VwcG9ydCBvYmplY3RzIHdob3NlIHBhdGhzIGVuZCB3aXRoIFwiL1wiIG9yIGNvbnRhaW4gdHdvIGNvbnNlY3V0aXZlXG4gKiBcIi9cInMuIEZpcmViYXNlIFN0b3JhZ2UgTGlzdCBBUEkgd2lsbCBmaWx0ZXIgdGhlc2UgdW5zdXBwb3J0ZWQgb2JqZWN0cy5cbiAqIGxpc3QoKSBtYXkgZmFpbCBpZiB0aGVyZSBhcmUgdG9vIG1hbnkgdW5zdXBwb3J0ZWQgb2JqZWN0cyBpbiB0aGUgYnVja2V0LlxuICogQHB1YmxpY1xuICpcbiAqIEBwYXJhbSByZWYgLSB7QGxpbmsgU3RvcmFnZVJlZmVyZW5jZX0gdG8gZ2V0IGxpc3QgZnJvbS5cbiAqIEBwYXJhbSBvcHRpb25zIC0gU2VlIHtAbGluayBMaXN0T3B0aW9uc30gZm9yIGRldGFpbHMuXG4gKiBAcmV0dXJucyBBIGBQcm9taXNlYCB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGl0ZW1zIGFuZCBwcmVmaXhlcy5cbiAqICAgICAgYHByZWZpeGVzYCBjb250YWlucyByZWZlcmVuY2VzIHRvIHN1Yi1mb2xkZXJzIGFuZCBgaXRlbXNgXG4gKiAgICAgIGNvbnRhaW5zIHJlZmVyZW5jZXMgdG8gb2JqZWN0cyBpbiB0aGlzIGZvbGRlci4gYG5leHRQYWdlVG9rZW5gXG4gKiAgICAgIGNhbiBiZSB1c2VkIHRvIGdldCB0aGUgcmVzdCBvZiB0aGUgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbGlzdChyZWYsIG9wdGlvbnMpIHtcbiAgcmVmID0gZ2V0TW9kdWxhckluc3RhbmNlKHJlZik7XG4gIHJldHVybiBsaXN0JDEocmVmLCBvcHRpb25zKTtcbn1cbi8qKlxuICogTGlzdCBhbGwgaXRlbXMgKGZpbGVzKSBhbmQgcHJlZml4ZXMgKGZvbGRlcnMpIHVuZGVyIHRoaXMgc3RvcmFnZSByZWZlcmVuY2UuXG4gKlxuICogVGhpcyBpcyBhIGhlbHBlciBtZXRob2QgZm9yIGNhbGxpbmcgbGlzdCgpIHJlcGVhdGVkbHkgdW50aWwgdGhlcmUgYXJlXG4gKiBubyBtb3JlIHJlc3VsdHMuIFRoZSBkZWZhdWx0IHBhZ2luYXRpb24gc2l6ZSBpcyAxMDAwLlxuICpcbiAqIE5vdGU6IFRoZSByZXN1bHRzIG1heSBub3QgYmUgY29uc2lzdGVudCBpZiBvYmplY3RzIGFyZSBjaGFuZ2VkIHdoaWxlIHRoaXNcbiAqIG9wZXJhdGlvbiBpcyBydW5uaW5nLlxuICpcbiAqIFdhcm5pbmc6IGBsaXN0QWxsYCBtYXkgcG90ZW50aWFsbHkgY29uc3VtZSB0b28gbWFueSByZXNvdXJjZXMgaWYgdGhlcmUgYXJlXG4gKiB0b28gbWFueSByZXN1bHRzLlxuICogQHB1YmxpY1xuICogQHBhcmFtIHJlZiAtIHtAbGluayBTdG9yYWdlUmVmZXJlbmNlfSB0byBnZXQgbGlzdCBmcm9tLlxuICpcbiAqIEByZXR1cm5zIEEgYFByb21pc2VgIHRoYXQgcmVzb2x2ZXMgd2l0aCBhbGwgdGhlIGl0ZW1zIGFuZCBwcmVmaXhlcyB1bmRlclxuICogICAgICB0aGUgY3VycmVudCBzdG9yYWdlIHJlZmVyZW5jZS4gYHByZWZpeGVzYCBjb250YWlucyByZWZlcmVuY2VzIHRvXG4gKiAgICAgIHN1Yi1kaXJlY3RvcmllcyBhbmQgYGl0ZW1zYCBjb250YWlucyByZWZlcmVuY2VzIHRvIG9iamVjdHMgaW4gdGhpc1xuICogICAgICBmb2xkZXIuIGBuZXh0UGFnZVRva2VuYCBpcyBuZXZlciByZXR1cm5lZC5cbiAqL1xuZnVuY3Rpb24gbGlzdEFsbChyZWYpIHtcbiAgcmVmID0gZ2V0TW9kdWxhckluc3RhbmNlKHJlZik7XG4gIHJldHVybiBsaXN0QWxsJDEocmVmKTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZG93bmxvYWQgVVJMIGZvciB0aGUgZ2l2ZW4ge0BsaW5rIFN0b3JhZ2VSZWZlcmVuY2V9LlxuICogQHB1YmxpY1xuICogQHBhcmFtIHJlZiAtIHtAbGluayBTdG9yYWdlUmVmZXJlbmNlfSB0byBnZXQgdGhlIGRvd25sb2FkIFVSTCBmb3IuXG4gKiBAcmV0dXJucyBBIGBQcm9taXNlYCB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGRvd25sb2FkXG4gKiAgICAgVVJMIGZvciB0aGlzIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gZ2V0RG93bmxvYWRVUkwocmVmKSB7XG4gIHJlZiA9IGdldE1vZHVsYXJJbnN0YW5jZShyZWYpO1xuICByZXR1cm4gZ2V0RG93bmxvYWRVUkwkMShyZWYpO1xufVxuLyoqXG4gKiBEZWxldGVzIHRoZSBvYmplY3QgYXQgdGhpcyBsb2NhdGlvbi5cbiAqIEBwdWJsaWNcbiAqIEBwYXJhbSByZWYgLSB7QGxpbmsgU3RvcmFnZVJlZmVyZW5jZX0gZm9yIG9iamVjdCB0byBkZWxldGUuXG4gKiBAcmV0dXJucyBBIGBQcm9taXNlYCB0aGF0IHJlc29sdmVzIGlmIHRoZSBkZWxldGlvbiBzdWNjZWVkcy5cbiAqL1xuZnVuY3Rpb24gZGVsZXRlT2JqZWN0KHJlZikge1xuICByZWYgPSBnZXRNb2R1bGFySW5zdGFuY2UocmVmKTtcbiAgcmV0dXJuIGRlbGV0ZU9iamVjdCQxKHJlZik7XG59XG5mdW5jdGlvbiByZWYoc2VydmljZU9yUmVmLCBwYXRoT3JVcmwpIHtcbiAgc2VydmljZU9yUmVmID0gZ2V0TW9kdWxhckluc3RhbmNlKHNlcnZpY2VPclJlZik7XG4gIHJldHVybiByZWYkMShzZXJ2aWNlT3JSZWYsIHBhdGhPclVybCk7XG59XG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiBfZ2V0Q2hpbGQocmVmLCBjaGlsZFBhdGgpIHtcbiAgcmV0dXJuIF9nZXRDaGlsZCQxKHJlZiwgY2hpbGRQYXRoKTtcbn1cbi8qKlxuICogR2V0cyBhIHtAbGluayBGaXJlYmFzZVN0b3JhZ2V9IGluc3RhbmNlIGZvciB0aGUgZ2l2ZW4gRmlyZWJhc2UgYXBwLlxuICogQHB1YmxpY1xuICogQHBhcmFtIGFwcCAtIEZpcmViYXNlIGFwcCB0byBnZXQge0BsaW5rIEZpcmViYXNlU3RvcmFnZX0gaW5zdGFuY2UgZm9yLlxuICogQHBhcmFtIGJ1Y2tldFVybCAtIFRoZSBnczovLyB1cmwgdG8geW91ciBGaXJlYmFzZSBTdG9yYWdlIEJ1Y2tldC5cbiAqIElmIG5vdCBwYXNzZWQsIHVzZXMgdGhlIGFwcCdzIGRlZmF1bHQgU3RvcmFnZSBCdWNrZXQuXG4gKiBAcmV0dXJucyBBIHtAbGluayBGaXJlYmFzZVN0b3JhZ2V9IGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBnZXRTdG9yYWdlKGFwcCA9IGdldEFwcCgpLCBidWNrZXRVcmwpIHtcbiAgYXBwID0gZ2V0TW9kdWxhckluc3RhbmNlKGFwcCk7XG4gIGNvbnN0IHN0b3JhZ2VQcm92aWRlciA9IF9nZXRQcm92aWRlcihhcHAsIFNUT1JBR0VfVFlQRSk7XG4gIGNvbnN0IHN0b3JhZ2VJbnN0YW5jZSA9IHN0b3JhZ2VQcm92aWRlci5nZXRJbW1lZGlhdGUoe1xuICAgIGlkZW50aWZpZXI6IGJ1Y2tldFVybFxuICB9KTtcbiAgY29uc3QgZW11bGF0b3IgPSBnZXREZWZhdWx0RW11bGF0b3JIb3N0bmFtZUFuZFBvcnQoJ3N0b3JhZ2UnKTtcbiAgaWYgKGVtdWxhdG9yKSB7XG4gICAgY29ubmVjdFN0b3JhZ2VFbXVsYXRvcihzdG9yYWdlSW5zdGFuY2UsIC4uLmVtdWxhdG9yKTtcbiAgfVxuICByZXR1cm4gc3RvcmFnZUluc3RhbmNlO1xufVxuLyoqXG4gKiBNb2RpZnkgdGhpcyB7QGxpbmsgRmlyZWJhc2VTdG9yYWdlfSBpbnN0YW5jZSB0byBjb21tdW5pY2F0ZSB3aXRoIHRoZSBDbG91ZCBTdG9yYWdlIGVtdWxhdG9yLlxuICpcbiAqIEBwYXJhbSBzdG9yYWdlIC0gVGhlIHtAbGluayBGaXJlYmFzZVN0b3JhZ2V9IGluc3RhbmNlXG4gKiBAcGFyYW0gaG9zdCAtIFRoZSBlbXVsYXRvciBob3N0IChleDogbG9jYWxob3N0KVxuICogQHBhcmFtIHBvcnQgLSBUaGUgZW11bGF0b3IgcG9ydCAoZXg6IDUwMDEpXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEVtdWxhdG9yIG9wdGlvbnMuIGBvcHRpb25zLm1vY2tVc2VyVG9rZW5gIGlzIHRoZSBtb2NrIGF1dGhcbiAqIHRva2VuIHRvIHVzZSBmb3IgdW5pdCB0ZXN0aW5nIFNlY3VyaXR5IFJ1bGVzLlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBjb25uZWN0U3RvcmFnZUVtdWxhdG9yKHN0b3JhZ2UsIGhvc3QsIHBvcnQsIG9wdGlvbnMgPSB7fSkge1xuICBjb25uZWN0U3RvcmFnZUVtdWxhdG9yJDEoc3RvcmFnZSwgaG9zdCwgcG9ydCwgb3B0aW9ucyk7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIERvd25sb2FkcyB0aGUgZGF0YSBhdCB0aGUgb2JqZWN0J3MgbG9jYXRpb24uIFJldHVybnMgYW4gZXJyb3IgaWYgdGhlIG9iamVjdFxuICogaXMgbm90IGZvdW5kLlxuICpcbiAqIFRvIHVzZSB0aGlzIGZ1bmN0aW9uYWxpdHksIHlvdSBoYXZlIHRvIHdoaXRlbGlzdCB5b3VyIGFwcCdzIG9yaWdpbiBpbiB5b3VyXG4gKiBDbG91ZCBTdG9yYWdlIGJ1Y2tldC4gU2VlIGFsc29cbiAqIGh0dHBzOi8vY2xvdWQuZ29vZ2xlLmNvbS9zdG9yYWdlL2RvY3MvY29uZmlndXJpbmctY29yc1xuICpcbiAqIFRoaXMgQVBJIGlzIG5vdCBhdmFpbGFibGUgaW4gTm9kZS5cbiAqXG4gKiBAcHVibGljXG4gKiBAcGFyYW0gcmVmIC0gU3RvcmFnZVJlZmVyZW5jZSB3aGVyZSBkYXRhIHNob3VsZCBiZSBkb3dubG9hZGVkLlxuICogQHBhcmFtIG1heERvd25sb2FkU2l6ZUJ5dGVzIC0gSWYgc2V0LCB0aGUgbWF4aW11bSBhbGxvd2VkIHNpemUgaW4gYnl0ZXMgdG9cbiAqIHJldHJpZXZlLlxuICogQHJldHVybnMgQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIEJsb2IgY29udGFpbmluZyB0aGUgb2JqZWN0J3MgYnl0ZXNcbiAqL1xuZnVuY3Rpb24gZ2V0QmxvYihyZWYsIG1heERvd25sb2FkU2l6ZUJ5dGVzKSB7XG4gIHJlZiA9IGdldE1vZHVsYXJJbnN0YW5jZShyZWYpO1xuICByZXR1cm4gZ2V0QmxvYkludGVybmFsKHJlZiwgbWF4RG93bmxvYWRTaXplQnl0ZXMpO1xufVxuLyoqXG4gKiBEb3dubG9hZHMgdGhlIGRhdGEgYXQgdGhlIG9iamVjdCdzIGxvY2F0aW9uLiBSYWlzZXMgYW4gZXJyb3IgZXZlbnQgaWYgdGhlXG4gKiBvYmplY3QgaXMgbm90IGZvdW5kLlxuICpcbiAqIFRoaXMgQVBJIGlzIG9ubHkgYXZhaWxhYmxlIGluIE5vZGUuXG4gKlxuICogQHB1YmxpY1xuICogQHBhcmFtIHJlZiAtIFN0b3JhZ2VSZWZlcmVuY2Ugd2hlcmUgZGF0YSBzaG91bGQgYmUgZG93bmxvYWRlZC5cbiAqIEBwYXJhbSBtYXhEb3dubG9hZFNpemVCeXRlcyAtIElmIHNldCwgdGhlIG1heGltdW0gYWxsb3dlZCBzaXplIGluIGJ5dGVzIHRvXG4gKiByZXRyaWV2ZS5cbiAqIEByZXR1cm5zIEEgc3RyZWFtIHdpdGggdGhlIG9iamVjdCdzIGRhdGEgYXMgYnl0ZXNcbiAqL1xuZnVuY3Rpb24gZ2V0U3RyZWFtKHJlZiwgbWF4RG93bmxvYWRTaXplQnl0ZXMpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdnZXRTdHJlYW0oKSBpcyBvbmx5IHN1cHBvcnRlZCBieSBOb2RlSlMgYnVpbGRzJyk7XG59XG5cbi8qKlxuICogQ2xvdWQgU3RvcmFnZSBmb3IgRmlyZWJhc2VcbiAqXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cbiAqL1xuZnVuY3Rpb24gZmFjdG9yeShjb250YWluZXIsIHtcbiAgaW5zdGFuY2VJZGVudGlmaWVyOiB1cmxcbn0pIHtcbiAgY29uc3QgYXBwID0gY29udGFpbmVyLmdldFByb3ZpZGVyKCdhcHAnKS5nZXRJbW1lZGlhdGUoKTtcbiAgY29uc3QgYXV0aFByb3ZpZGVyID0gY29udGFpbmVyLmdldFByb3ZpZGVyKCdhdXRoLWludGVybmFsJyk7XG4gIGNvbnN0IGFwcENoZWNrUHJvdmlkZXIgPSBjb250YWluZXIuZ2V0UHJvdmlkZXIoJ2FwcC1jaGVjay1pbnRlcm5hbCcpO1xuICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUltcGwoYXBwLCBhdXRoUHJvdmlkZXIsIGFwcENoZWNrUHJvdmlkZXIsIHVybCwgU0RLX1ZFUlNJT04pO1xufVxuZnVuY3Rpb24gcmVnaXN0ZXJTdG9yYWdlKCkge1xuICBfcmVnaXN0ZXJDb21wb25lbnQobmV3IENvbXBvbmVudChTVE9SQUdFX1RZUEUsIGZhY3RvcnksIFwiUFVCTElDXCIgLyogQ29tcG9uZW50VHlwZS5QVUJMSUMgKi8pLnNldE11bHRpcGxlSW5zdGFuY2VzKHRydWUpKTtcbiAgLy9SVU5USU1FX0VOViB3aWxsIGJlIHJlcGxhY2VkIGR1cmluZyB0aGUgY29tcGlsYXRpb24gdG8gXCJub2RlXCIgZm9yIG5vZGVqcyBhbmQgYW4gZW1wdHkgc3RyaW5nIGZvciBicm93c2VyXG4gIHJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uLCAnJyk7XG4gIC8vIEJVSUxEX1RBUkdFVCB3aWxsIGJlIHJlcGxhY2VkIGJ5IHZhbHVlcyBsaWtlIGVzbTIwMTcsIGNqczIwMTcsIGV0YyBkdXJpbmcgdGhlIGNvbXBpbGF0aW9uXG4gIHJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uLCAnZXNtMjAxNycpO1xufVxucmVnaXN0ZXJTdG9yYWdlKCk7XG5leHBvcnQgeyBTdG9yYWdlRXJyb3IsIFN0b3JhZ2VFcnJvckNvZGUsIFN0cmluZ0Zvcm1hdCwgRmJzQmxvYiBhcyBfRmJzQmxvYiwgTG9jYXRpb24gYXMgX0xvY2F0aW9uLCBUYXNrRXZlbnQgYXMgX1Rhc2tFdmVudCwgVGFza1N0YXRlIGFzIF9UYXNrU3RhdGUsIFVwbG9hZFRhc2sgYXMgX1VwbG9hZFRhc2ssIGRhdGFGcm9tU3RyaW5nIGFzIF9kYXRhRnJvbVN0cmluZywgX2dldENoaWxkLCBpbnZhbGlkQXJndW1lbnQgYXMgX2ludmFsaWRBcmd1bWVudCwgaW52YWxpZFJvb3RPcGVyYXRpb24gYXMgX2ludmFsaWRSb290T3BlcmF0aW9uLCBjb25uZWN0U3RvcmFnZUVtdWxhdG9yLCBkZWxldGVPYmplY3QsIGdldEJsb2IsIGdldEJ5dGVzLCBnZXREb3dubG9hZFVSTCwgZ2V0TWV0YWRhdGEsIGdldFN0b3JhZ2UsIGdldFN0cmVhbSwgbGlzdCwgbGlzdEFsbCwgcmVmLCB1cGRhdGVNZXRhZGF0YSwgdXBsb2FkQnl0ZXMsIHVwbG9hZEJ5dGVzUmVzdW1hYmxlLCB1cGxvYWRTdHJpbmcgfTtcbiIsImltcG9ydCB7IGdldERvd25sb2FkVVJMIGFzIGdldERvd25sb2FkVVJMJDEsIGdldE1ldGFkYXRhIGFzIGdldE1ldGFkYXRhJDEsIHVwbG9hZEJ5dGVzUmVzdW1hYmxlIGFzIHVwbG9hZEJ5dGVzUmVzdW1hYmxlJDEsIHVwbG9hZFN0cmluZyBhcyB1cGxvYWRTdHJpbmckMSB9IGZyb20gJ2ZpcmViYXNlL3N0b3JhZ2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhcmVSZXBsYXksIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmZ1bmN0aW9uIGZyb21UYXNrKHRhc2spIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgdmFyIGxhc3RTbmFwc2hvdCA9IG51bGw7XG4gICAgdmFyIGNvbXBsZXRlID0gZmFsc2U7XG4gICAgdmFyIGhhc0Vycm9yID0gZmFsc2U7XG4gICAgdmFyIGVycm9yID0gbnVsbDtcbiAgICB2YXIgZW1pdCA9IGZ1bmN0aW9uIChzbmFwc2hvdCkge1xuICAgICAgbGFzdFNuYXBzaG90ID0gc25hcHNob3Q7XG4gICAgICBzY2hlZHVsZSgpO1xuICAgIH07XG4gICAgdmFyIGlkID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBTY2hlZHVsZXMgYW4gYXN5bmMgZXZlbnQgdG8gY2hlY2sgYW5kIGVtaXRcbiAgICAgKiB0aGUgbW9zdCByZWNlbnQgc25hcHNob3QsIGFuZCBjb21wbGV0ZSBvciBlcnJvclxuICAgICAqIGlmIG5lY2Vzc2FyeS5cbiAgICAgKi9cbiAgICB2YXIgc2NoZWR1bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWlkKSB7XG4gICAgICAgIGlkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWQgPSBudWxsO1xuICAgICAgICAgIGlmIChsYXN0U25hcHNob3QpIHN1YnNjcmliZXIubmV4dChsYXN0U25hcHNob3QpO1xuICAgICAgICAgIGlmIChjb21wbGV0ZSkgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgIGlmIChoYXNFcnJvcikgc3Vic2NyaWJlci5lcnJvcihlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgc3Vic2NyaWJlci5hZGQoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gSWYgd2UgaGF2ZSBhbnkgZW1pc3Npb25zIGNoZWNrcyBzY2hlZHVsZWQsIGNhbmNlbCB0aGVtLlxuICAgICAgaWYgKGlkKSBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH0pO1xuICAgIC8vIEVtaXQgdGhlIGluaXRpYWwgc25hcHNob3RcbiAgICBlbWl0KHRhc2suc25hcHNob3QpO1xuICAgIC8vIFRha2UgZWFjaCB1cGRhdGUgYW5kIHNjaGVkdWxlIHRoZW0gdG8gYmUgZW1pdHRlZCAoc2VlIGBlbWl0YClcbiAgICBzdWJzY3JpYmVyLmFkZCh0YXNrLm9uKCdzdGF0ZV9jaGFuZ2VkJywgZW1pdCkpO1xuICAgIC8vIHRhc2sgaXMgYSBwcm9taXNlLCBzbyB3ZSBjYW4gY29udmVydCB0aGF0IHRvIGFuIG9ic2VydmFibGUsXG4gICAgLy8gdGhpcyBpcyBkb25lIGZvciB0aGUgZXJnb25vbWljcyBhcm91bmQgbWFraW5nIHN1cmUgd2UgZG9uJ3RcbiAgICAvLyB0cnkgdG8gcHVzaCBlcnJvcnMgb3IgY29tcGxldGlvbnMgdGhyb3VnaCBjbG9zZWQgc3Vic2NyaWJlcnNcbiAgICBzdWJzY3JpYmVyLmFkZChmcm9tKHRhc2spLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiBlbWl0LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICBlcnJvciA9IGVycjtcbiAgICAgICAgc2NoZWR1bGUoKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIHNjaGVkdWxlKCk7XG4gICAgICB9XG4gICAgfSkpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGdldERvd25sb2FkVVJMKHJlZikge1xuICByZXR1cm4gZnJvbShnZXREb3dubG9hZFVSTCQxKHJlZikpO1xufVxuLy8gVE9ETzogZml4IHN0b3JhZ2UgdHlwaW5nIGluIGZpcmViYXNlLCB0aGVuIGFwcGx5IHRoZSBzYW1lIGZpeCBoZXJlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuZnVuY3Rpb24gZ2V0TWV0YWRhdGEocmVmKSB7XG4gIHJldHVybiBmcm9tKGdldE1ldGFkYXRhJDEocmVmKSk7XG59XG4vLyBNQVJLOiBCcmVha2luZyBjaGFuZ2UgKHJlbmFtaW5nIHB1dCB0byB1cGxvYWRCeXRlc1Jlc3VtYWJsZSlcbmZ1bmN0aW9uIHVwbG9hZEJ5dGVzUmVzdW1hYmxlKHJlZiwgZGF0YSwgbWV0YWRhdGEpIHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgdmFyIHRhc2sgPSB1cGxvYWRCeXRlc1Jlc3VtYWJsZSQxKHJlZiwgZGF0YSwgbWV0YWRhdGEpO1xuICAgIHZhciBzdWJzY3JpcHRpb24gPSBmcm9tVGFzayh0YXNrKS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0YXNrLmNhbmNlbCgpO1xuICAgIH07XG4gIH0pLnBpcGUoc2hhcmVSZXBsYXkoe1xuICAgIGJ1ZmZlclNpemU6IDEsXG4gICAgcmVmQ291bnQ6IHRydWVcbiAgfSkpO1xufVxuLy8gTUFSSzogQnJlYWtpbmcgY2hhbmdlIChyZW5hbWluZyBwdXQgdG8gdXBsb2FkU3RyaW5nKVxuZnVuY3Rpb24gdXBsb2FkU3RyaW5nKHJlZiwgZGF0YSwgZm9ybWF0LCBtZXRhZGF0YSkge1xuICByZXR1cm4gZnJvbSh1cGxvYWRTdHJpbmckMShyZWYsIGRhdGEsIGZvcm1hdCwgbWV0YWRhdGEpKTtcbn1cbmZ1bmN0aW9uIHBlcmNlbnRhZ2UodGFzaykge1xuICByZXR1cm4gZnJvbVRhc2sodGFzaykucGlwZShtYXAoZnVuY3Rpb24gKHNuYXBzaG90KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2dyZXNzOiBzbmFwc2hvdC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcHNob3QudG90YWxCeXRlcyAqIDEwMCxcbiAgICAgIHNuYXBzaG90OiBzbmFwc2hvdFxuICAgIH07XG4gIH0pKTtcbn1cbmV4cG9ydCB7IGZyb21UYXNrLCBnZXREb3dubG9hZFVSTCwgZ2V0TWV0YWRhdGEsIHBlcmNlbnRhZ2UsIHVwbG9hZEJ5dGVzUmVzdW1hYmxlLCB1cGxvYWRTdHJpbmcgfTtcbiIsImltcG9ydCB7IMm1Z2V0QWxsSW5zdGFuY2VzT2YgYXMgX2dldEFsbEluc3RhbmNlc09mLCDJtWdldERlZmF1bHRJbnN0YW5jZU9mIGFzIF9nZXREZWZhdWx0SW5zdGFuY2VPZiwgVkVSU0lPTiwgybVBbmd1bGFyRmlyZVNjaGVkdWxlcnMgYXMgX0FuZ3VsYXJGaXJlU2NoZWR1bGVycywgybV6b25lV3JhcCBhcyBfem9uZVdyYXAgfSBmcm9tICdAYW5ndWxhci9maXJlJztcbmltcG9ydCB7IHRpbWVyLCBmcm9tIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjb25jYXRNYXAsIGRpc3RpbmN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0ICogYXMgaTAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIE5nTW9kdWxlLCBtYWtlRW52aXJvbm1lbnRQcm92aWRlcnMsIE5nWm9uZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpcmViYXNlQXBwLCBGaXJlYmFzZUFwcHMgfSBmcm9tICdAYW5ndWxhci9maXJlL2FwcCc7XG5pbXBvcnQgeyBBcHBDaGVja0luc3RhbmNlcyB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXBwLWNoZWNrJztcbmltcG9ydCB7IEF1dGhJbnN0YW5jZXMgfSBmcm9tICdAYW5ndWxhci9maXJlL2F1dGgnO1xuaW1wb3J0IHsgcmVnaXN0ZXJWZXJzaW9uIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IGZyb21UYXNrIGFzIGZyb21UYXNrJDEsIHBlcmNlbnRhZ2UgYXMgcGVyY2VudGFnZSQxIH0gZnJvbSAncnhmaXJlL3N0b3JhZ2UnO1xuaW1wb3J0IHsgY29ubmVjdFN0b3JhZ2VFbXVsYXRvciBhcyBjb25uZWN0U3RvcmFnZUVtdWxhdG9yJDEsIGRlbGV0ZU9iamVjdCBhcyBkZWxldGVPYmplY3QkMSwgZ2V0QmxvYiBhcyBnZXRCbG9iJDEsIGdldEJ5dGVzIGFzIGdldEJ5dGVzJDEsIGdldERvd25sb2FkVVJMIGFzIGdldERvd25sb2FkVVJMJDEsIGdldE1ldGFkYXRhIGFzIGdldE1ldGFkYXRhJDEsIGdldFN0b3JhZ2UgYXMgZ2V0U3RvcmFnZSQxLCBnZXRTdHJlYW0gYXMgZ2V0U3RyZWFtJDEsIGxpc3QgYXMgbGlzdCQxLCBsaXN0QWxsIGFzIGxpc3RBbGwkMSwgcmVmIGFzIHJlZiQxLCB1cGRhdGVNZXRhZGF0YSBhcyB1cGRhdGVNZXRhZGF0YSQxLCB1cGxvYWRCeXRlcyBhcyB1cGxvYWRCeXRlcyQxLCB1cGxvYWRCeXRlc1Jlc3VtYWJsZSBhcyB1cGxvYWRCeXRlc1Jlc3VtYWJsZSQxLCB1cGxvYWRTdHJpbmcgYXMgdXBsb2FkU3RyaW5nJDEgfSBmcm9tICdmaXJlYmFzZS9zdG9yYWdlJztcbmV4cG9ydCAqIGZyb20gJ2ZpcmViYXNlL3N0b3JhZ2UnO1xuY2xhc3MgU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yKGF1dGgpIHtcbiAgICByZXR1cm4gYXV0aDtcbiAgfVxufVxuY29uc3QgU1RPUkFHRV9QUk9WSURFUl9OQU1FID0gJ3N0b3JhZ2UnO1xuY2xhc3MgU3RvcmFnZUluc3RhbmNlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHJldHVybiBfZ2V0QWxsSW5zdGFuY2VzT2YoU1RPUkFHRV9QUk9WSURFUl9OQU1FKTtcbiAgfVxufVxuY29uc3Qgc3RvcmFnZUluc3RhbmNlJCA9IHRpbWVyKDAsIDMwMCkucGlwZShjb25jYXRNYXAoKCkgPT4gZnJvbShfZ2V0QWxsSW5zdGFuY2VzT2YoU1RPUkFHRV9QUk9WSURFUl9OQU1FKSkpLCBkaXN0aW5jdCgpKTtcbmNvbnN0IFBST1ZJREVEX1NUT1JBR0VfSU5TVEFOQ0VTID0gbmV3IEluamVjdGlvblRva2VuKCdhbmd1bGFyZmlyZTIuc3RvcmFnZS1pbnN0YW5jZXMnKTtcbmZ1bmN0aW9uIGRlZmF1bHRTdG9yYWdlSW5zdGFuY2VGYWN0b3J5KHByb3ZpZGVkLCBkZWZhdWx0QXBwKSB7XG4gIGNvbnN0IGRlZmF1bHRTdG9yYWdlID0gX2dldERlZmF1bHRJbnN0YW5jZU9mKFNUT1JBR0VfUFJPVklERVJfTkFNRSwgcHJvdmlkZWQsIGRlZmF1bHRBcHApO1xuICByZXR1cm4gZGVmYXVsdFN0b3JhZ2UgJiYgbmV3IFN0b3JhZ2UoZGVmYXVsdFN0b3JhZ2UpO1xufVxuZnVuY3Rpb24gc3RvcmFnZUluc3RhbmNlRmFjdG9yeShmbikge1xuICByZXR1cm4gKHpvbmUsIGluamVjdG9yKSA9PiB7XG4gICAgY29uc3Qgc3RvcmFnZSA9IHpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gZm4oaW5qZWN0b3IpKTtcbiAgICByZXR1cm4gbmV3IFN0b3JhZ2Uoc3RvcmFnZSk7XG4gIH07XG59XG5jb25zdCBTVE9SQUdFX0lOU1RBTkNFU19QUk9WSURFUiA9IHtcbiAgcHJvdmlkZTogU3RvcmFnZUluc3RhbmNlcyxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgUFJPVklERURfU1RPUkFHRV9JTlNUQU5DRVNdXVxufTtcbmNvbnN0IERFRkFVTFRfU1RPUkFHRV9JTlNUQU5DRV9QUk9WSURFUiA9IHtcbiAgcHJvdmlkZTogU3RvcmFnZSxcbiAgdXNlRmFjdG9yeTogZGVmYXVsdFN0b3JhZ2VJbnN0YW5jZUZhY3RvcnksXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIFBST1ZJREVEX1NUT1JBR0VfSU5TVEFOQ0VTXSwgRmlyZWJhc2VBcHBdXG59O1xuY2xhc3MgU3RvcmFnZU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHJlZ2lzdGVyVmVyc2lvbignYW5ndWxhcmZpcmUnLCBWRVJTSU9OLmZ1bGwsICdnY3MnKTtcbiAgfVxuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBTdG9yYWdlTW9kdWxlX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBTdG9yYWdlTW9kdWxlKSgpO1xuICB9O1xuICBzdGF0aWMgybVtb2QgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lTmdNb2R1bGUoe1xuICAgIHR5cGU6IFN0b3JhZ2VNb2R1bGVcbiAgfSk7XG4gIHN0YXRpYyDJtWluaiA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVJbmplY3Rvcih7XG4gICAgcHJvdmlkZXJzOiBbREVGQVVMVF9TVE9SQUdFX0lOU1RBTkNFX1BST1ZJREVSLCBTVE9SQUdFX0lOU1RBTkNFU19QUk9WSURFUl1cbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShTdG9yYWdlTW9kdWxlLCBbe1xuICAgIHR5cGU6IE5nTW9kdWxlLFxuICAgIGFyZ3M6IFt7XG4gICAgICBwcm92aWRlcnM6IFtERUZBVUxUX1NUT1JBR0VfSU5TVEFOQ0VfUFJPVklERVIsIFNUT1JBR0VfSU5TVEFOQ0VTX1BST1ZJREVSXVxuICAgIH1dXG4gIH1dLCAoKSA9PiBbXSwgbnVsbCk7XG59KSgpO1xuZnVuY3Rpb24gcHJvdmlkZVN0b3JhZ2UoZm4sIC4uLmRlcHMpIHtcbiAgcmVnaXN0ZXJWZXJzaW9uKCdhbmd1bGFyZmlyZScsIFZFUlNJT04uZnVsbCwgJ2djcycpO1xuICByZXR1cm4gbWFrZUVudmlyb25tZW50UHJvdmlkZXJzKFtERUZBVUxUX1NUT1JBR0VfSU5TVEFOQ0VfUFJPVklERVIsIFNUT1JBR0VfSU5TVEFOQ0VTX1BST1ZJREVSLCB7XG4gICAgcHJvdmlkZTogUFJPVklERURfU1RPUkFHRV9JTlNUQU5DRVMsXG4gICAgdXNlRmFjdG9yeTogc3RvcmFnZUluc3RhbmNlRmFjdG9yeShmbiksXG4gICAgbXVsdGk6IHRydWUsXG4gICAgZGVwczogW05nWm9uZSwgSW5qZWN0b3IsIF9Bbmd1bGFyRmlyZVNjaGVkdWxlcnMsIEZpcmViYXNlQXBwcyxcbiAgICAvLyBEZWZlbnNpdmVseSBsb2FkIEF1dGggZmlyc3QsIGlmIHByb3ZpZGVkXG4gICAgW25ldyBPcHRpb25hbCgpLCBBdXRoSW5zdGFuY2VzXSwgW25ldyBPcHRpb25hbCgpLCBBcHBDaGVja0luc3RhbmNlc10sIC4uLmRlcHNdXG4gIH1dKTtcbn1cblxuLy8gRE8gTk9UIE1PRElGWSwgdGhpcyBmaWxlIGlzIGF1dG9nZW5lcmF0ZWQgYnkgdG9vbHMvYnVpbGQudHNcbmNvbnN0IGZyb21UYXNrID0gX3pvbmVXcmFwKGZyb21UYXNrJDEsIHRydWUpO1xuY29uc3QgcGVyY2VudGFnZSA9IF96b25lV3JhcChwZXJjZW50YWdlJDEsIHRydWUpO1xuXG4vLyBETyBOT1QgTU9ESUZZLCB0aGlzIGZpbGUgaXMgYXV0b2dlbmVyYXRlZCBieSB0b29scy9idWlsZC50c1xuY29uc3QgY29ubmVjdFN0b3JhZ2VFbXVsYXRvciA9IF96b25lV3JhcChjb25uZWN0U3RvcmFnZUVtdWxhdG9yJDEsIHRydWUpO1xuY29uc3QgZGVsZXRlT2JqZWN0ID0gX3pvbmVXcmFwKGRlbGV0ZU9iamVjdCQxLCB0cnVlLCAyKTtcbmNvbnN0IGdldEJsb2IgPSBfem9uZVdyYXAoZ2V0QmxvYiQxLCB0cnVlKTtcbmNvbnN0IGdldEJ5dGVzID0gX3pvbmVXcmFwKGdldEJ5dGVzJDEsIHRydWUpO1xuY29uc3QgZ2V0RG93bmxvYWRVUkwgPSBfem9uZVdyYXAoZ2V0RG93bmxvYWRVUkwkMSwgdHJ1ZSk7XG5jb25zdCBnZXRNZXRhZGF0YSA9IF96b25lV3JhcChnZXRNZXRhZGF0YSQxLCB0cnVlKTtcbmNvbnN0IGdldFN0b3JhZ2UgPSBfem9uZVdyYXAoZ2V0U3RvcmFnZSQxLCB0cnVlKTtcbmNvbnN0IGdldFN0cmVhbSA9IF96b25lV3JhcChnZXRTdHJlYW0kMSwgdHJ1ZSk7XG5jb25zdCBsaXN0ID0gX3pvbmVXcmFwKGxpc3QkMSwgdHJ1ZSk7XG5jb25zdCBsaXN0QWxsID0gX3pvbmVXcmFwKGxpc3RBbGwkMSwgdHJ1ZSk7XG5jb25zdCByZWYgPSBfem9uZVdyYXAocmVmJDEsIHRydWUsIDIpO1xuY29uc3QgdXBkYXRlTWV0YWRhdGEgPSBfem9uZVdyYXAodXBkYXRlTWV0YWRhdGEkMSwgdHJ1ZSwgMik7XG5jb25zdCB1cGxvYWRCeXRlcyA9IF96b25lV3JhcCh1cGxvYWRCeXRlcyQxLCB0cnVlKTtcbmNvbnN0IHVwbG9hZEJ5dGVzUmVzdW1hYmxlID0gX3pvbmVXcmFwKHVwbG9hZEJ5dGVzUmVzdW1hYmxlJDEsIHRydWUpO1xuY29uc3QgdXBsb2FkU3RyaW5nID0gX3pvbmVXcmFwKHVwbG9hZFN0cmluZyQxLCB0cnVlKTtcblxuLyoqXG4gKiBHZW5lcmF0ZWQgYnVuZGxlIGluZGV4LiBEbyBub3QgZWRpdC5cbiAqL1xuXG5leHBvcnQgeyBTdG9yYWdlLCBTdG9yYWdlSW5zdGFuY2VzLCBTdG9yYWdlTW9kdWxlLCBjb25uZWN0U3RvcmFnZUVtdWxhdG9yLCBkZWxldGVPYmplY3QsIGZyb21UYXNrLCBnZXRCbG9iLCBnZXRCeXRlcywgZ2V0RG93bmxvYWRVUkwsIGdldE1ldGFkYXRhLCBnZXRTdG9yYWdlLCBnZXRTdHJlYW0sIGxpc3QsIGxpc3RBbGwsIHBlcmNlbnRhZ2UsIHByb3ZpZGVTdG9yYWdlLCByZWYsIHN0b3JhZ2VJbnN0YW5jZSQsIHVwZGF0ZU1ldGFkYXRhLCB1cGxvYWRCeXRlcywgdXBsb2FkQnl0ZXNSZXN1bWFibGUsIHVwbG9hZFN0cmluZyB9O1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJAYW5ndWxhci9maXJlL2F1dGhcIjtcbmltcG9ydCB7XG4gIEZpcmVzdG9yZSxcbiAgY29sbGVjdGlvbixcbiAgY29sbGVjdGlvbkRhdGEsXG4gIGRvYyxcbiAgZG9jRGF0YSxcbiAgZGVsZXRlRG9jLFxuICB1cGRhdGVEb2MsXG4gIERvY3VtZW50UmVmZXJlbmNlLFxuICBzZXREb2MsXG4gIERvY3VtZW50RGF0YSxcbn0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvZmlyZXN0b3JlXCI7XG5pbXBvcnQge1xuICBTdG9yYWdlLFxuICByZWYsXG4gIHVwbG9hZFN0cmluZyxcbiAgZ2V0RG93bmxvYWRVUkwsXG59IGZyb20gXCJAYW5ndWxhci9maXJlL3N0b3JhZ2VcIjtcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcIi4uLy4uL21vZGVscy91c2VyXCI7XG5pbXBvcnQgeyBQaG90byB9IGZyb20gXCJAY2FwYWNpdG9yL2NhbWVyYVwiO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IERldmljZUlkLCBEZXZpY2VJbmZvIH0gZnJvbSBcIkBjYXBhY2l0b3IvZGV2aWNlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCIsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJQcm9maWxlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmlyZXN0b3JlOiBGaXJlc3RvcmUgPSBpbmplY3QoRmlyZXN0b3JlKSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHN0b3JhZ2U6IFN0b3JhZ2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIGFkZEtpZChlbWFpbDogc3RyaW5nKSB7XG4gICAvKiBjb25zdCB1c2VyID0gdGhpcy5hdXRoU2VydmljZS5hdXRoLmN1cnJlbnRVc2VyO1xuICAgIGNvbnN0IHVzZXJQcm9maWxlUmVmID0gZG9jKHRoaXMuZmlyZXN0b3JlLCBgdXNlclByb2ZpbGUvJHt1c2VyLnVpZH1gKTtcbiAgICByZXR1cm4gdXBkYXRlRG9jKHVzZXJQcm9maWxlUmVmLCB7IGtpZHM6IGVtYWlsIH0pOyovXG4gIH1cblxuICByZW1vdmVLaWQoZW1haWw6IHN0cmluZykge1xuICAgIC8qIGNvbnN0IHVzZXIgPSB0aGlzLmF1dGhTZXJ2aWNlLmF1dGguY3VycmVudFVzZXI7XG4gICAgY29uc3QgdXNlclByb2ZpbGVSZWYgPSBkb2ModGhpcy5maXJlc3RvcmUsIGB1c2VyUHJvZmlsZS8ke3VzZXIudWlkfWApO1xuICAgIHJldHVybiB1cGRhdGVEb2ModXNlclByb2ZpbGVSZWYsIHsga2lkczogZW1haWwgfSk7Ki9cbiAgfVxuXG4gIGdldFVzZXJQcm9maWxlKHVzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPFByb2ZpbGU+IHtcbiAgICBjb25zdCB1c2VyUHJvZmlsZVJlZiA9IGRvYyh0aGlzLmZpcmVzdG9yZSwgYHVzZXJQcm9maWxlLyR7dXNlci51aWR9YCk7XG4gICAgcmV0dXJuIGRvY0RhdGEodXNlclByb2ZpbGVSZWYsIHsgaWRGaWVsZDogXCJpZFwiIH0pIGFzIE9ic2VydmFibGU8UHJvZmlsZT47XG4gIH1cblxuICBnZXRVc2VyUHJvZmlsZUJ5SWQodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2ZpbGU+IHtcbiAgICBjb25zdCB1c2VyUHJvZmlsZVJlZjogRG9jdW1lbnRSZWZlcmVuY2UgPSBkb2MoXG4gICAgICB0aGlzLmZpcmVzdG9yZSxcbiAgICAgIGB1c2VyUHJvZmlsZS8ke3VzZXJJZH1gXG4gICAgKTtcbiAgICAvLyBpZiAodXNlclByb2ZpbGVSZWYuaWQpIHtcbiAgICByZXR1cm4gZG9jRGF0YSh1c2VyUHJvZmlsZVJlZiwgeyBpZEZpZWxkOiBcImlkXCIgfSkgYXMgT2JzZXJ2YWJsZTxQcm9maWxlPjtcbiAgfVxuXG4gIGFzeW5jIHNldFVzZXJQcm9maWxlUGljdHVyZShwaG90bzogUGhvdG8pIHtcbiAgICBjb25zdCB1c2VyID0gdGhpcy5hdXRoU2VydmljZS5hdXRoLmN1cnJlbnRVc2VyO1xuICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSByZWYoXG4gICAgICB0aGlzLnN0b3JhZ2UsXG4gICAgICBgdXNlclByb2ZpbGUvJHt1c2VyLnVpZH0vcHJvZmlsZVBpY3R1cmUvcGljdHVyZS4ke3Bob3RvLmZvcm1hdH1gXG4gICAgKTtcbiAgICBhd2FpdCB1cGxvYWRTdHJpbmcoc3RvcmFnZVJlZiwgcGhvdG8uYmFzZTY0U3RyaW5nLCBcImJhc2U2NFwiLCB7fSk7XG4gICAgY29uc3QgdXJsID0gYXdhaXQgZ2V0RG93bmxvYWRVUkwoc3RvcmFnZVJlZik7XG4gICAgY29uc3QgdXNlclByb2ZpbGVSZWYgPSBkb2ModGhpcy5maXJlc3RvcmUsIGB1c2VyUHJvZmlsZS8ke3VzZXIudWlkfWApO1xuICAgIHJldHVybiB1cGRhdGVEb2ModXNlclByb2ZpbGVSZWYsIHsgcHJvZmlsZVBpY3R1cmU6IHVybCB9KTtcbiAgfVxuXG4gIHNldFVzZXJQcm9maWxlKHVzZXJQcm9maWxlOiBQcm9maWxlKSB7XG4gICAgY29uc3QgdXNlciA9IHRoaXMuYXV0aFNlcnZpY2UuYXV0aC5jdXJyZW50VXNlcjtcbiAgICBjb25zdCB1c2VyUHJvZmlsZVJlZiA9IGRvYyh0aGlzLmZpcmVzdG9yZSwgYHVzZXJQcm9maWxlLyR7dXNlci51aWR9YCk7XG4gICBcbiAgICByZXR1cm4gdXBkYXRlRG9jKHVzZXJQcm9maWxlUmVmLCB7IHVzZXJQcm9maWxlIH0pO1xuICB9XG5cbiAgZ2V0UHVzaERldmljZUxpc3QoKTogT2JzZXJ2YWJsZTxEb2N1bWVudERhdGFbXT4ge1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLmF1dGhTZXJ2aWNlLmF1dGguY3VycmVudFVzZXI7XG4gICAgY29uc3QgcHVzaERldmljZUxpc3RSZWYgPSBjb2xsZWN0aW9uKFxuICAgICAgdGhpcy5maXJlc3RvcmUsXG4gICAgICBgdXNlclByb2ZpbGUvJHt1c2VyLnVpZH0vcHVzaGBcbiAgICApO1xuICAgIHJldHVybiBjb2xsZWN0aW9uRGF0YShwdXNoRGV2aWNlTGlzdFJlZiwge1xuICAgICAgaWRGaWVsZDogXCJpZFwiLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgYWRkUHVzaFN1YnNjcmliZXIoXG4gICAgc3ViOiBQdXNoU3Vic2NyaXB0aW9uLCAvLyBXZWJQdXNoXG4gICAgZGV2aWNlSWQ6IERldmljZUlkLFxuICAgIGRldmljZUluZm86IERldmljZUluZm8sXG4gICAgdG9rZW46IHN0cmluZyAvLyBuYXRpdmVcbiAgKSB7XG4gICAgY29uc3QgdXNlciA9IHRoaXMuYXV0aFNlcnZpY2UuYXV0aC5jdXJyZW50VXNlcjtcbiAgICBjb25zdCBwdXNoT2JqZWN0ID0gSlNPTi5zdHJpbmdpZnkoc3ViKTtcbiAgICBjb25zdCB1c2VyUHJvZmlsZVJlZjogRG9jdW1lbnRSZWZlcmVuY2U8RG9jdW1lbnREYXRhPiA9IGRvYyhcbiAgICAgIHRoaXMuZmlyZXN0b3JlLFxuICAgICAgLy8gYHVzZXJQcm9maWxlLyR7dXNlci51aWR9L3B1c2gvJHtkZXZpY2VJZC5pZGVudGlmaWVyfWBcbiAgICAgIGB1c2VyUHJvZmlsZS8ke3VzZXIudWlkfS9wdXNoLyR7ZGV2aWNlSW5mby5tb2RlbH1gXG4gICAgKTtcblxuICAgIHJldHVybiBzZXREb2ModXNlclByb2ZpbGVSZWYsIHtcbiAgICAgIGlkZW50aWZpZXI6IGRldmljZUlkLmlkZW50aWZpZXIsXG4gICAgICB0b2tlbjogdG9rZW4gfHwgXCJcIiwgLy8gU2V0IHRva2VuIGZvciBuYXRpdmUgV2ViIFB1c2hcbiAgICAgIHB1c2hPYmplY3Q6IHB1c2hPYmplY3QgfHwgXCJ7fVwiLCAvLyBTZXQgdG9rZW4gZm9yIHdlYiBwdXNoXG4gICAgICBtb2RlbDogZGV2aWNlSW5mby5tb2RlbCB8fCBcIlwiLFxuICAgICAgb3BlcmF0aW5nU3lzdGVtOiBkZXZpY2VJbmZvLm9wZXJhdGluZ1N5c3RlbSB8fCBcIlwiLFxuICAgICAgb3NWZXJzaW9uOiBkZXZpY2VJbmZvLm9zVmVyc2lvbiB8fCBcIlwiLFxuICAgICAgcGxhdGZvcm06IGRldmljZUluZm8ucGxhdGZvcm0gfHwgXCJcIiwgLy8gLS0+IHNldCB0byBcIldlYlwiIGZvciBXZWIgUHVzaCBmcm9tIEJhY2tlbmQgb3IgXCJOYXRpdmVcIiBmb3IgTmF0aXZlIFB1c2ggZnJvbSBmaXJlYmFzZVxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoKSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZVB1c2hEZXZpY2UoZGV2aWNlSWQpIHtcbiAgICBjb25zdCB1c2VyID0gdGhpcy5hdXRoU2VydmljZS5hdXRoLmN1cnJlbnRVc2VyO1xuICAgIGNvbnN0IHVzZXJQcm9maWxlUmVmID0gZG9jKFxuICAgICAgdGhpcy5maXJlc3RvcmUsXG4gICAgICBgdXNlclByb2ZpbGUvJHt1c2VyLnVpZH0vcHVzaC8ke2RldmljZUlkfWBcbiAgICApO1xuICAgIHJldHVybiBkZWxldGVEb2ModXNlclByb2ZpbGVSZWYpO1xuICB9XG5cbiAgYXN5bmMgY2hhbmdlU2V0dGluZ3NQdXNoKHN0YXRlOiBib29sZWFuKSB7XG4gICAgY29uc3QgdXNlciA9IHRoaXMuYXV0aFNlcnZpY2UuYXV0aC5jdXJyZW50VXNlcjtcbiAgICBjb25zdCB1c2VyUHJvZmlsZVJlZiA9IGRvYyh0aGlzLmZpcmVzdG9yZSwgYHVzZXJQcm9maWxlLyR7dXNlci51aWR9YCk7XG4gICAgcmV0dXJuIHVwZGF0ZURvYyh1c2VyUHJvZmlsZVJlZiwgeyBzZXR0aW5nc1B1c2g6IHN0YXRlIH0pO1xuICB9XG4gIGFzeW5jIGNoYW5nZVNldHRpbmdzUHVzaE1vZHVsZShzdGF0ZTogYm9vbGVhbiwgbW9kdWxlKSB7XG4gICAgY29uc3QgdXNlciA9IHRoaXMuYXV0aFNlcnZpY2UuYXV0aC5jdXJyZW50VXNlcjtcbiAgICBjb25zdCB1c2VyUHJvZmlsZVJlZiA9IGRvYyh0aGlzLmZpcmVzdG9yZSwgYHVzZXJQcm9maWxlLyR7dXNlci51aWR9YCk7XG4gICAgcmV0dXJuIHVwZGF0ZURvYyh1c2VyUHJvZmlsZVJlZiwgeyBbXCJzZXR0aW5nc1B1c2hcIiArIG1vZHVsZV06IHN0YXRlIH0pO1xuICB9XG5cbiAgYXN5bmMgY2hhbmdlU2V0dGluZ3NFbWFpbChzdGF0ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLmF1dGhTZXJ2aWNlLmF1dGguY3VycmVudFVzZXI7XG4gICAgY29uc3QgdXNlclByb2ZpbGVSZWYgPSBkb2ModGhpcy5maXJlc3RvcmUsIGB1c2VyUHJvZmlsZS8ke3VzZXIudWlkfWApO1xuICAgIHJldHVybiB1cGRhdGVEb2ModXNlclByb2ZpbGVSZWYsIHsgc2V0dGluZ3NFbWFpbDogc3RhdGUgfSk7XG4gIH1cblxuICBhc3luYyBjaGFuZ2VTZXR0aW5nc0VtYWlsUmVwb3J0aW5nKHN0YXRlOiBib29sZWFuKSB7XG4gICAgY29uc3QgdXNlciA9IHRoaXMuYXV0aFNlcnZpY2UuYXV0aC5jdXJyZW50VXNlcjtcbiAgICBjb25zdCB1c2VyUHJvZmlsZVJlZiA9IGRvYyh0aGlzLmZpcmVzdG9yZSwgYHVzZXJQcm9maWxlLyR7dXNlci51aWR9YCk7XG4gICAgcmV0dXJuIHVwZGF0ZURvYyh1c2VyUHJvZmlsZVJlZiwgeyBzZXR0aW5nc0VtYWlsUmVwb3J0aW5nOiBzdGF0ZSB9KTtcbiAgfVxuXG4gIGNoYW5nZVByb2ZpbGVBdHRyaWJ1dGUodmFsdWU6IGFueSwgZmllbGRuYW1lKSB7XG4gICAgY29uc3QgdXNlciA9IHRoaXMuYXV0aFNlcnZpY2UuYXV0aC5jdXJyZW50VXNlcjtcbiAgICBjb25zdCB1c2VyUHJvZmlsZVJlZiA9IGRvYyh0aGlzLmZpcmVzdG9yZSwgYHVzZXJQcm9maWxlLyR7dXNlci51aWR9YCk7XG4gICAgcmV0dXJuIHVwZGF0ZURvYyh1c2VyUHJvZmlsZVJlZiwgeyBbZmllbGRuYW1lXTogdmFsdWUgfSk7XG4gIH1cblxuICAvKlxuICBhc3luYyBjaGFuZ2VMYW5ndWFnZShzdGF0ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgdXNlciA9IHRoaXMuYXV0aFNlcnZpY2UuYXV0aC5jdXJyZW50VXNlcjtcbiAgICBjb25zdCB1c2VyUHJvZmlsZVJlZiA9IGRvYyh0aGlzLmZpcmVzdG9yZSwgYHVzZXJQcm9maWxlLyR7dXNlci51aWR9YCk7XG4gICAgcmV0dXJuIHVwZGF0ZURvYyh1c2VyUHJvZmlsZVJlZiwgeyBsYW5ndWFnZTogc3RhdGUgfSk7XG4gIH1cblxuICBhc3luYyBjaGFuZ2VGYXZUZWFtKHN0YXRlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB1c2VyID0gdGhpcy5hdXRoU2VydmljZS5hdXRoLmN1cnJlbnRVc2VyO1xuICAgIGNvbnN0IHVzZXJQcm9maWxlUmVmID0gZG9jKHRoaXMuZmlyZXN0b3JlLCBgdXNlclByb2ZpbGUvJHt1c2VyLnVpZH1gKTtcbiAgICByZXR1cm4gdXBkYXRlRG9jKHVzZXJQcm9maWxlUmVmLCB7IGZhdlRlYW06IHN0YXRlIH0pO1xuICB9XG5cbiAgYXN5bmMgY2hhbmdlRmF2Q2x1YihzdGF0ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgdXNlciA9IHRoaXMuYXV0aFNlcnZpY2UuYXV0aC5jdXJyZW50VXNlcjtcbiAgICBjb25zdCB1c2VyUHJvZmlsZVJlZiA9IGRvYyh0aGlzLmZpcmVzdG9yZSwgYHVzZXJQcm9maWxlLyR7dXNlci51aWR9YCk7XG4gICAgcmV0dXJuIHVwZGF0ZURvYyh1c2VyUHJvZmlsZVJlZiwgeyBmYXZDbHViOiBzdGF0ZSB9KTtcbiAgfSovXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBLElBQU0sZUFBZTtBQUlyQixJQUFNLDRCQUE0QjtBQU1sQyxJQUFNLG1DQUFtQyxJQUFJLEtBQUs7QUFNbEQsSUFBTSxnQ0FBZ0MsS0FBSyxLQUFLO0FBSWhELElBQU0sZ0NBQWdDO0FBc0J0QyxJQUFNLGVBQU4sTUFBTSxzQkFBcUIsY0FBYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT3ZDLFlBQVksTUFBTSxTQUFTLFVBQVUsR0FBRztBQUN0QyxVQUFNLFlBQVksSUFBSSxHQUFHLHFCQUFxQixPQUFPLEtBQUssWUFBWSxJQUFJLENBQUMsR0FBRztBQUM5RSxTQUFLLFVBQVU7QUFJZixTQUFLLGFBQWE7QUFBQSxNQUNoQixnQkFBZ0I7QUFBQSxJQUNsQjtBQUNBLFNBQUssZUFBZSxLQUFLO0FBR3pCLFdBQU8sZUFBZSxNQUFNLGNBQWEsU0FBUztBQUFBLEVBQ3BEO0FBQUEsRUFDQSxJQUFJLFNBQVM7QUFDWCxXQUFPLEtBQUs7QUFBQSxFQUNkO0FBQUEsRUFDQSxJQUFJLE9BQU8sUUFBUTtBQUNqQixTQUFLLFVBQVU7QUFBQSxFQUNqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSUEsWUFBWSxNQUFNO0FBQ2hCLFdBQU8sWUFBWSxJQUFJLE1BQU0sS0FBSztBQUFBLEVBQ3BDO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJQSxJQUFJLGlCQUFpQjtBQUNuQixXQUFPLEtBQUssV0FBVztBQUFBLEVBQ3pCO0FBQUEsRUFDQSxJQUFJLGVBQWUsZ0JBQWdCO0FBQ2pDLFNBQUssV0FBVyxpQkFBaUI7QUFDakMsUUFBSSxLQUFLLFdBQVcsZ0JBQWdCO0FBQ2xDLFdBQUssVUFBVSxHQUFHLEtBQUssWUFBWTtBQUFBLEVBQUssS0FBSyxXQUFXLGNBQWM7QUFBQSxJQUN4RSxPQUFPO0FBQ0wsV0FBSyxVQUFVLEtBQUs7QUFBQSxJQUN0QjtBQUFBLEVBQ0Y7QUFDRjtBQUtBLElBQUk7QUFBQSxDQUNILFNBQVVBLG1CQUFrQjtBQUUzQixFQUFBQSxrQkFBaUIsU0FBUyxJQUFJO0FBQzlCLEVBQUFBLGtCQUFpQixrQkFBa0IsSUFBSTtBQUN2QyxFQUFBQSxrQkFBaUIsa0JBQWtCLElBQUk7QUFDdkMsRUFBQUEsa0JBQWlCLG1CQUFtQixJQUFJO0FBQ3hDLEVBQUFBLGtCQUFpQixnQkFBZ0IsSUFBSTtBQUNyQyxFQUFBQSxrQkFBaUIsaUJBQWlCLElBQUk7QUFDdEMsRUFBQUEsa0JBQWlCLGNBQWMsSUFBSTtBQUNuQyxFQUFBQSxrQkFBaUIsa0JBQWtCLElBQUk7QUFDdkMsRUFBQUEsa0JBQWlCLHNCQUFzQixJQUFJO0FBQzNDLEVBQUFBLGtCQUFpQixrQkFBa0IsSUFBSTtBQUN2QyxFQUFBQSxrQkFBaUIsVUFBVSxJQUFJO0FBRS9CLEVBQUFBLGtCQUFpQixvQkFBb0IsSUFBSTtBQUN6QyxFQUFBQSxrQkFBaUIsYUFBYSxJQUFJO0FBQ2xDLEVBQUFBLGtCQUFpQix3QkFBd0IsSUFBSTtBQUM3QyxFQUFBQSxrQkFBaUIsbUJBQW1CLElBQUk7QUFDeEMsRUFBQUEsa0JBQWlCLG1CQUFtQixJQUFJO0FBQ3hDLEVBQUFBLGtCQUFpQix3QkFBd0IsSUFBSTtBQUM3QyxFQUFBQSxrQkFBaUIsaUJBQWlCLElBQUk7QUFDdEMsRUFBQUEsa0JBQWlCLGtCQUFrQixJQUFJO0FBQ3ZDLEVBQUFBLGtCQUFpQix3QkFBd0IsSUFBSTtBQUM3QyxFQUFBQSxrQkFBaUIsYUFBYSxJQUFJO0FBQ2xDLEVBQUFBLGtCQUFpQix3QkFBd0IsSUFBSTtBQUM3QyxFQUFBQSxrQkFBaUIsZ0JBQWdCLElBQUk7QUFDckMsRUFBQUEsa0JBQWlCLGdCQUFnQixJQUFJO0FBQ3JDLEVBQUFBLGtCQUFpQix5QkFBeUIsSUFBSTtBQUNoRCxHQUFHLHFCQUFxQixtQkFBbUIsQ0FBQyxFQUFFO0FBQzlDLFNBQVMsWUFBWSxNQUFNO0FBQ3pCLFNBQU8sYUFBYTtBQUN0QjtBQUNBLFNBQVMsVUFBVTtBQUNqQixRQUFNLFVBQVU7QUFDaEIsU0FBTyxJQUFJLGFBQWEsaUJBQWlCLFNBQVMsT0FBTztBQUMzRDtBQUNBLFNBQVMsZUFBZSxNQUFNO0FBQzVCLFNBQU8sSUFBSSxhQUFhLGlCQUFpQixrQkFBa0IsYUFBYSxPQUFPLG1CQUFtQjtBQUNwRztBQUNBLFNBQVMsY0FBYyxRQUFRO0FBQzdCLFNBQU8sSUFBSSxhQUFhLGlCQUFpQixnQkFBZ0IsdUJBQXVCLFNBQVMsd0VBQTZFO0FBQ3hLO0FBQ0EsU0FBUyxrQkFBa0I7QUFDekIsUUFBTSxVQUFVO0FBQ2hCLFNBQU8sSUFBSSxhQUFhLGlCQUFpQixpQkFBaUIsT0FBTztBQUNuRTtBQUNBLFNBQVMsa0JBQWtCO0FBQ3pCLFNBQU8sSUFBSSxhQUFhLGlCQUFpQixrQkFBa0IsK0VBQStFO0FBQzVJO0FBQ0EsU0FBUyxhQUFhLE1BQU07QUFDMUIsU0FBTyxJQUFJLGFBQWEsaUJBQWlCLGNBQWMsOENBQThDLE9BQU8sSUFBSTtBQUNsSDtBQUNBLFNBQVMscUJBQXFCO0FBQzVCLFNBQU8sSUFBSSxhQUFhLGlCQUFpQixzQkFBc0IsMERBQTBEO0FBQzNIO0FBQ0EsU0FBUyxXQUFXO0FBQ2xCLFNBQU8sSUFBSSxhQUFhLGlCQUFpQixVQUFVLG9DQUFvQztBQUN6RjtBQUNBLFNBQVMsV0FBVyxLQUFLO0FBQ3ZCLFNBQU8sSUFBSSxhQUFhLGlCQUFpQixhQUFhLGtCQUFrQixNQUFNLElBQUk7QUFDcEY7QUFDQSxTQUFTLHFCQUFxQixRQUFRO0FBQ3BDLFNBQU8sSUFBSSxhQUFhLGlCQUFpQix3QkFBd0IsNkJBQTZCLFNBQVMsSUFBSTtBQUM3RztBQUNBLFNBQVMsa0JBQWtCO0FBQ3pCLFNBQU8sSUFBSSxhQUFhLGlCQUFpQixtQkFBbUIsK0NBQW9ELDRCQUE0Qix1Q0FBdUM7QUFDckw7QUFDQSxTQUFTLGtCQUFrQjtBQUN6QixTQUFPLElBQUksYUFBYSxpQkFBaUIsbUJBQW1CLHdEQUF3RDtBQUN0SDtBQUNBLFNBQVMsc0JBQXNCO0FBQzdCLFNBQU8sSUFBSSxhQUFhLGlCQUFpQix3QkFBd0Isc0VBQXNFO0FBQ3pJO0FBQ0EsU0FBUyxnQkFBZ0I7QUFDdkIsU0FBTyxJQUFJLGFBQWEsaUJBQWlCLGlCQUFpQixpREFBaUQ7QUFDN0c7QUFDQSxTQUFTLGdCQUFnQixVQUFVO0FBQ2pDLFNBQU8sSUFBSSxhQUFhLGlCQUFpQix5QkFBeUIsR0FBRyxRQUFRLHdKQUF3SjtBQUN2TztBQUlBLFNBQVMsZ0JBQWdCLFNBQVM7QUFDaEMsU0FBTyxJQUFJLGFBQWEsaUJBQWlCLGtCQUFrQixPQUFPO0FBQ3BFO0FBQ0EsU0FBUyxhQUFhO0FBQ3BCLFNBQU8sSUFBSSxhQUFhLGlCQUFpQixhQUFhLCtCQUErQjtBQUN2RjtBQU1BLFNBQVMscUJBQXFCQyxPQUFNO0FBQ2xDLFNBQU8sSUFBSSxhQUFhLGlCQUFpQix3QkFBd0Isb0JBQW9CQSxRQUFPLGlIQUFzSDtBQUNwTjtBQUtBLFNBQVMsY0FBYyxRQUFRLFNBQVM7QUFDdEMsU0FBTyxJQUFJLGFBQWEsaUJBQWlCLGdCQUFnQixtQ0FBbUMsU0FBUyxRQUFRLE9BQU87QUFDdEg7QUFJQSxTQUFTLGNBQWMsU0FBUztBQUM5QixRQUFNLElBQUksYUFBYSxpQkFBaUIsZ0JBQWdCLHFCQUFxQixPQUFPO0FBQ3RGO0FBdUJBLElBQU0sV0FBTixNQUFNLFVBQVM7QUFBQSxFQUNiLFlBQVksUUFBUSxNQUFNO0FBQ3hCLFNBQUssU0FBUztBQUNkLFNBQUssUUFBUTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLElBQUksT0FBTztBQUNULFdBQU8sS0FBSztBQUFBLEVBQ2Q7QUFBQSxFQUNBLElBQUksU0FBUztBQUNYLFdBQU8sS0FBSyxLQUFLLFdBQVc7QUFBQSxFQUM5QjtBQUFBLEVBQ0EsZ0JBQWdCO0FBQ2QsVUFBTSxTQUFTO0FBQ2YsV0FBTyxRQUFRLE9BQU8sS0FBSyxNQUFNLElBQUksUUFBUSxPQUFPLEtBQUssSUFBSTtBQUFBLEVBQy9EO0FBQUEsRUFDQSxzQkFBc0I7QUFDcEIsVUFBTSxTQUFTO0FBQ2YsV0FBTyxRQUFRLE9BQU8sS0FBSyxNQUFNLElBQUk7QUFBQSxFQUN2QztBQUFBLEVBQ0EsT0FBTyxtQkFBbUIsY0FBYyxNQUFNO0FBQzVDLFFBQUk7QUFDSixRQUFJO0FBQ0YsdUJBQWlCLFVBQVMsWUFBWSxjQUFjLElBQUk7QUFBQSxJQUMxRCxTQUFTLEdBQUc7QUFHVixhQUFPLElBQUksVUFBUyxjQUFjLEVBQUU7QUFBQSxJQUN0QztBQUNBLFFBQUksZUFBZSxTQUFTLElBQUk7QUFDOUIsYUFBTztBQUFBLElBQ1QsT0FBTztBQUNMLFlBQU0scUJBQXFCLFlBQVk7QUFBQSxJQUN6QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU8sWUFBWSxLQUFLLE1BQU07QUFDNUIsUUFBSSxXQUFXO0FBQ2YsVUFBTSxlQUFlO0FBQ3JCLGFBQVMsU0FBUyxLQUFLO0FBQ3JCLFVBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxLQUFLLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFDaEQsWUFBSSxRQUFRLElBQUksTUFBTSxNQUFNLEdBQUcsRUFBRTtBQUFBLE1BQ25DO0FBQUEsSUFDRjtBQUNBLFVBQU0sU0FBUztBQUNmLFVBQU0sVUFBVSxJQUFJLE9BQU8sV0FBVyxlQUFlLFFBQVEsR0FBRztBQUNoRSxVQUFNLFlBQVk7QUFBQSxNQUNoQixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsSUFDUjtBQUNBLGFBQVMsV0FBVyxLQUFLO0FBQ3ZCLFVBQUksUUFBUSxtQkFBbUIsSUFBSSxJQUFJO0FBQUEsSUFDekM7QUFDQSxVQUFNQyxXQUFVO0FBQ2hCLFVBQU0sc0JBQXNCLEtBQUssUUFBUSxRQUFRLEtBQUs7QUFDdEQsVUFBTSxzQkFBc0I7QUFDNUIsVUFBTSx3QkFBd0IsSUFBSSxPQUFPLGFBQWEsbUJBQW1CLElBQUlBLFFBQU8sTUFBTSxZQUFZLEtBQUssbUJBQW1CLElBQUksR0FBRztBQUNySSxVQUFNLHlCQUF5QjtBQUFBLE1BQzdCLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxJQUNSO0FBQ0EsVUFBTSxtQkFBbUIsU0FBUyxlQUFlLHdEQUF3RDtBQUN6RyxVQUFNLG1CQUFtQjtBQUN6QixVQUFNLHFCQUFxQixJQUFJLE9BQU8sYUFBYSxnQkFBZ0IsSUFBSSxZQUFZLElBQUksZ0JBQWdCLElBQUksR0FBRztBQUM5RyxVQUFNLHNCQUFzQjtBQUFBLE1BQzFCLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxJQUNSO0FBQ0EsVUFBTSxTQUFTLENBQUM7QUFBQSxNQUNkLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFlBQVk7QUFBQSxJQUNkLEdBQUc7QUFBQSxNQUNELE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFlBQVk7QUFBQSxJQUNkLEdBQUc7QUFBQSxNQUNELE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFlBQVk7QUFBQSxJQUNkLENBQUM7QUFDRCxhQUFTLElBQUksR0FBRyxJQUFJLE9BQU8sUUFBUSxLQUFLO0FBQ3RDLFlBQU0sUUFBUSxPQUFPLENBQUM7QUFDdEIsWUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLEdBQUc7QUFDckMsVUFBSSxVQUFVO0FBQ1osY0FBTSxjQUFjLFNBQVMsTUFBTSxRQUFRLE1BQU07QUFDakQsWUFBSSxZQUFZLFNBQVMsTUFBTSxRQUFRLElBQUk7QUFDM0MsWUFBSSxDQUFDLFdBQVc7QUFDZCxzQkFBWTtBQUFBLFFBQ2Q7QUFDQSxtQkFBVyxJQUFJLFVBQVMsYUFBYSxTQUFTO0FBQzlDLGNBQU0sV0FBVyxRQUFRO0FBQ3pCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFDQSxRQUFJLFlBQVksTUFBTTtBQUNwQixZQUFNLFdBQVcsR0FBRztBQUFBLElBQ3RCO0FBQ0EsV0FBTztBQUFBLEVBQ1Q7QUFDRjtBQUtBLElBQU0sY0FBTixNQUFrQjtBQUFBLEVBQ2hCLFlBQVksT0FBTztBQUNqQixTQUFLLFdBQVcsUUFBUSxPQUFPLEtBQUs7QUFBQSxFQUN0QztBQUFBO0FBQUEsRUFFQSxhQUFhO0FBQ1gsV0FBTyxLQUFLO0FBQUEsRUFDZDtBQUFBO0FBQUEsRUFFQSxPQUFPLGFBQWEsT0FBTztBQUFBLEVBQUM7QUFDOUI7QUE4QkEsU0FBUyxNQUFNLFdBRWYsbUJBQW1CLFNBQVM7QUFHMUIsTUFBSSxjQUFjO0FBSWxCLE1BQUksaUJBQWlCO0FBRXJCLE1BQUksa0JBQWtCO0FBQ3RCLE1BQUksYUFBYTtBQUNqQixNQUFJLGNBQWM7QUFDbEIsV0FBU0MsWUFBVztBQUNsQixXQUFPLGdCQUFnQjtBQUFBLEVBQ3pCO0FBQ0EsTUFBSSxvQkFBb0I7QUFDeEIsV0FBUyxtQkFBbUIsTUFBTTtBQUNoQyxRQUFJLENBQUMsbUJBQW1CO0FBQ3RCLDBCQUFvQjtBQUNwQix3QkFBa0IsTUFBTSxNQUFNLElBQUk7QUFBQSxJQUNwQztBQUFBLEVBQ0Y7QUFDQSxXQUFTLGNBQWMsUUFBUTtBQUM3QixxQkFBaUIsV0FBVyxNQUFNO0FBQ2hDLHVCQUFpQjtBQUNqQixnQkFBVSxpQkFBaUJBLFVBQVMsQ0FBQztBQUFBLElBQ3ZDLEdBQUcsTUFBTTtBQUFBLEVBQ1g7QUFDQSxXQUFTLHFCQUFxQjtBQUM1QixRQUFJLGlCQUFpQjtBQUNuQixtQkFBYSxlQUFlO0FBQUEsSUFDOUI7QUFBQSxFQUNGO0FBQ0EsV0FBUyxnQkFBZ0IsWUFBWSxNQUFNO0FBQ3pDLFFBQUksbUJBQW1CO0FBQ3JCLHlCQUFtQjtBQUNuQjtBQUFBLElBQ0Y7QUFDQSxRQUFJLFNBQVM7QUFDWCx5QkFBbUI7QUFDbkIsc0JBQWdCLEtBQUssTUFBTSxTQUFTLEdBQUcsSUFBSTtBQUMzQztBQUFBLElBQ0Y7QUFDQSxVQUFNLFdBQVdBLFVBQVMsS0FBSztBQUMvQixRQUFJLFVBQVU7QUFDWix5QkFBbUI7QUFDbkIsc0JBQWdCLEtBQUssTUFBTSxTQUFTLEdBQUcsSUFBSTtBQUMzQztBQUFBLElBQ0Y7QUFDQSxRQUFJLGNBQWMsSUFBSTtBQUVwQixxQkFBZTtBQUFBLElBQ2pCO0FBQ0EsUUFBSTtBQUNKLFFBQUksZ0JBQWdCLEdBQUc7QUFDckIsb0JBQWM7QUFDZCxtQkFBYTtBQUFBLElBQ2YsT0FBTztBQUNMLG9CQUFjLGNBQWMsS0FBSyxPQUFPLEtBQUs7QUFBQSxJQUMvQztBQUNBLGtCQUFjLFVBQVU7QUFBQSxFQUMxQjtBQUNBLE1BQUksVUFBVTtBQUNkLFdBQVNDLE1BQUssWUFBWTtBQUN4QixRQUFJLFNBQVM7QUFDWDtBQUFBLElBQ0Y7QUFDQSxjQUFVO0FBQ1YsdUJBQW1CO0FBQ25CLFFBQUksbUJBQW1CO0FBQ3JCO0FBQUEsSUFDRjtBQUNBLFFBQUksbUJBQW1CLE1BQU07QUFDM0IsVUFBSSxDQUFDLFlBQVk7QUFDZixzQkFBYztBQUFBLE1BQ2hCO0FBQ0EsbUJBQWEsY0FBYztBQUMzQixvQkFBYyxDQUFDO0FBQUEsSUFDakIsT0FBTztBQUNMLFVBQUksQ0FBQyxZQUFZO0FBQ2Ysc0JBQWM7QUFBQSxNQUNoQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0EsZ0JBQWMsQ0FBQztBQUNmLG9CQUFrQixXQUFXLE1BQU07QUFDakMsaUJBQWE7QUFDYixJQUFBQSxNQUFLLElBQUk7QUFBQSxFQUNYLEdBQUcsT0FBTztBQUNWLFNBQU9BO0FBQ1Q7QUFRQSxTQUFTLEtBQUssSUFBSTtBQUNoQixLQUFHLEtBQUs7QUFDVjtBQWtCQSxTQUFTLFVBQVUsR0FBRztBQUNwQixTQUFPLE1BQU07QUFDZjtBQUVBLFNBQVMsV0FBVyxHQUFHO0FBQ3JCLFNBQU8sT0FBTyxNQUFNO0FBQ3RCO0FBQ0EsU0FBUyxpQkFBaUIsR0FBRztBQUMzQixTQUFPLE9BQU8sTUFBTSxZQUFZLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDbEQ7QUFDQSxTQUFTLFNBQVMsR0FBRztBQUNuQixTQUFPLE9BQU8sTUFBTSxZQUFZLGFBQWE7QUFDL0M7QUFDQSxTQUFTLGFBQWEsR0FBRztBQUN2QixTQUFPLG9CQUFvQixLQUFLLGFBQWE7QUFDL0M7QUFDQSxTQUFTLHNCQUFzQjtBQUM3QixTQUFPLE9BQU8sU0FBUztBQUN6QjtBQUNBLFNBQVMsZUFBZSxVQUFVLFVBQVUsVUFBVSxPQUFPO0FBQzNELE1BQUksUUFBUSxVQUFVO0FBQ3BCLFVBQU0sZ0JBQWdCLHNCQUFzQixRQUFRLGVBQWUsUUFBUSxjQUFjO0FBQUEsRUFDM0Y7QUFDQSxNQUFJLFFBQVEsVUFBVTtBQUNwQixVQUFNLGdCQUFnQixzQkFBc0IsUUFBUSxlQUFlLFFBQVEsV0FBVztBQUFBLEVBQ3hGO0FBQ0Y7QUFrQkEsU0FBUyxRQUFRLFNBQVMsTUFBTSxVQUFVO0FBQ3hDLE1BQUksU0FBUztBQUNiLE1BQUksWUFBWSxNQUFNO0FBQ3BCLGFBQVMsV0FBVyxJQUFJO0FBQUEsRUFDMUI7QUFDQSxTQUFPLEdBQUcsUUFBUSxNQUFNLE1BQU0sTUFBTSxPQUFPO0FBQzdDO0FBQ0EsU0FBUyxnQkFBZ0IsUUFBUTtBQUMvQixRQUFNLFNBQVM7QUFDZixNQUFJLFlBQVk7QUFDaEIsYUFBVyxPQUFPLFFBQVE7QUFDeEIsUUFBSSxPQUFPLGVBQWUsR0FBRyxHQUFHO0FBQzlCLFlBQU0sV0FBVyxPQUFPLEdBQUcsSUFBSSxNQUFNLE9BQU8sT0FBTyxHQUFHLENBQUM7QUFDdkQsa0JBQVksWUFBWSxXQUFXO0FBQUEsSUFDckM7QUFBQSxFQUNGO0FBRUEsY0FBWSxVQUFVLE1BQU0sR0FBRyxFQUFFO0FBQ2pDLFNBQU87QUFDVDtBQUtBLElBQUk7QUFBQSxDQUNILFNBQVVDLFlBQVc7QUFDcEIsRUFBQUEsV0FBVUEsV0FBVSxVQUFVLElBQUksQ0FBQyxJQUFJO0FBQ3ZDLEVBQUFBLFdBQVVBLFdBQVUsZUFBZSxJQUFJLENBQUMsSUFBSTtBQUM1QyxFQUFBQSxXQUFVQSxXQUFVLE9BQU8sSUFBSSxDQUFDLElBQUk7QUFDdEMsR0FBRyxjQUFjLFlBQVksQ0FBQyxFQUFFO0FBd0JoQyxTQUFTLGtCQUFrQixRQUFRLHNCQUFzQjtBQUd2RCxRQUFNLG9CQUFvQixVQUFVLE9BQU8sU0FBUztBQUNwRCxRQUFNLGtCQUFrQjtBQUFBO0FBQUEsSUFFeEI7QUFBQTtBQUFBLElBRUE7QUFBQSxFQUFHO0FBQ0gsUUFBTSxtQkFBbUIsZ0JBQWdCLFFBQVEsTUFBTSxNQUFNO0FBQzdELFFBQU0sd0JBQXdCLHFCQUFxQixRQUFRLE1BQU0sTUFBTTtBQUN2RSxTQUFPLHFCQUFxQixvQkFBb0I7QUFDbEQ7QUEwQkEsSUFBTSxpQkFBTixNQUFxQjtBQUFBLEVBQ25CLFlBQVksTUFBTSxTQUFTLFVBQVUsT0FBTyxlQUFlLHVCQUF1QixXQUFXLGdCQUFnQixVQUFVLG1CQUFtQixvQkFBb0IsUUFBUSxNQUFNO0FBQzFLLFNBQUssT0FBTztBQUNaLFNBQUssVUFBVTtBQUNmLFNBQUssV0FBVztBQUNoQixTQUFLLFFBQVE7QUFDYixTQUFLLGdCQUFnQjtBQUNyQixTQUFLLHdCQUF3QjtBQUM3QixTQUFLLFlBQVk7QUFDakIsU0FBSyxpQkFBaUI7QUFDdEIsU0FBSyxXQUFXO0FBQ2hCLFNBQUssb0JBQW9CO0FBQ3pCLFNBQUsscUJBQXFCO0FBQzFCLFNBQUssUUFBUTtBQUNiLFNBQUsscUJBQXFCO0FBQzFCLFNBQUssYUFBYTtBQUNsQixTQUFLLFlBQVk7QUFDakIsU0FBSyxhQUFhO0FBQ2xCLFNBQUssV0FBVyxJQUFJLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFDL0MsV0FBSyxXQUFXO0FBQ2hCLFdBQUssVUFBVTtBQUNmLFdBQUssT0FBTztBQUFBLElBQ2QsQ0FBQztBQUFBLEVBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlBLFNBQVM7QUFDUCxVQUFNLGVBQWUsQ0FBQyxpQkFBaUJGLGNBQWE7QUFDbEQsVUFBSUEsV0FBVTtBQUNaLHdCQUFnQixPQUFPLElBQUksaUJBQWlCLE9BQU8sTUFBTSxJQUFJLENBQUM7QUFDOUQ7QUFBQSxNQUNGO0FBQ0EsWUFBTSxhQUFhLEtBQUssbUJBQW1CO0FBQzNDLFdBQUsscUJBQXFCO0FBQzFCLFlBQU0sbUJBQW1CLG1CQUFpQjtBQUN4QyxjQUFNLFNBQVMsY0FBYztBQUM3QixjQUFNLFFBQVEsY0FBYyxtQkFBbUIsY0FBYyxRQUFRO0FBQ3JFLFlBQUksS0FBSyxzQkFBc0IsTUFBTTtBQUNuQyxlQUFLLGtCQUFrQixRQUFRLEtBQUs7QUFBQSxRQUN0QztBQUFBLE1BQ0Y7QUFDQSxVQUFJLEtBQUssc0JBQXNCLE1BQU07QUFDbkMsbUJBQVcsMEJBQTBCLGdCQUFnQjtBQUFBLE1BQ3ZEO0FBR0EsaUJBQVcsS0FBSyxLQUFLLE1BQU0sS0FBSyxTQUFTLEtBQUssT0FBTyxLQUFLLFFBQVEsRUFBRSxLQUFLLE1BQU07QUFDN0UsWUFBSSxLQUFLLHNCQUFzQixNQUFNO0FBQ25DLHFCQUFXLDZCQUE2QixnQkFBZ0I7QUFBQSxRQUMxRDtBQUNBLGFBQUsscUJBQXFCO0FBQzFCLGNBQU0sWUFBWSxXQUFXLGFBQWEsTUFBTSxVQUFVO0FBQzFELGNBQU0sU0FBUyxXQUFXLFVBQVU7QUFDcEMsWUFBSSxDQUFDLGFBQWEsa0JBQWtCLFFBQVEsS0FBSyxxQkFBcUIsS0FBSyxLQUFLLE9BQU87QUFDckYsZ0JBQU0sY0FBYyxXQUFXLGFBQWEsTUFBTSxVQUFVO0FBQzVELDBCQUFnQixPQUFPLElBQUksaUJBQWlCLE9BQU8sTUFBTSxXQUFXLENBQUM7QUFDckU7QUFBQSxRQUNGO0FBQ0EsY0FBTSxjQUFjLEtBQUssY0FBYyxRQUFRLE1BQU0sTUFBTTtBQUMzRCx3QkFBZ0IsTUFBTSxJQUFJLGlCQUFpQixhQUFhLFVBQVUsQ0FBQztBQUFBLE1BQ3JFLENBQUM7QUFBQSxJQUNIO0FBS0EsVUFBTSxjQUFjLENBQUMsb0JBQW9CLFdBQVc7QUFDbEQsWUFBTSxVQUFVLEtBQUs7QUFDckIsWUFBTSxTQUFTLEtBQUs7QUFDcEIsWUFBTSxhQUFhLE9BQU87QUFDMUIsVUFBSSxPQUFPLGdCQUFnQjtBQUN6QixZQUFJO0FBQ0YsZ0JBQU0sU0FBUyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksQ0FBQztBQUNsRSxjQUFJLFVBQVUsTUFBTSxHQUFHO0FBQ3JCLG9CQUFRLE1BQU07QUFBQSxVQUNoQixPQUFPO0FBQ0wsb0JBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRixTQUFTLEdBQUc7QUFDVixpQkFBTyxDQUFDO0FBQUEsUUFDVjtBQUFBLE1BQ0YsT0FBTztBQUNMLFlBQUksZUFBZSxNQUFNO0FBQ3ZCLGdCQUFNLE1BQU0sUUFBUTtBQUNwQixjQUFJLGlCQUFpQixXQUFXLGFBQWE7QUFDN0MsY0FBSSxLQUFLLGdCQUFnQjtBQUN2QixtQkFBTyxLQUFLLGVBQWUsWUFBWSxHQUFHLENBQUM7QUFBQSxVQUM3QyxPQUFPO0FBQ0wsbUJBQU8sR0FBRztBQUFBLFVBQ1o7QUFBQSxRQUNGLE9BQU87QUFDTCxjQUFJLE9BQU8sVUFBVTtBQUNuQixrQkFBTSxNQUFNLEtBQUssYUFBYSxXQUFXLElBQUksU0FBUztBQUN0RCxtQkFBTyxHQUFHO0FBQUEsVUFDWixPQUFPO0FBQ0wsa0JBQU0sTUFBTSxtQkFBbUI7QUFDL0IsbUJBQU8sR0FBRztBQUFBLFVBQ1o7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFDQSxRQUFJLEtBQUssV0FBVztBQUNsQixrQkFBWSxPQUFPLElBQUksaUJBQWlCLE9BQU8sTUFBTSxJQUFJLENBQUM7QUFBQSxJQUM1RCxPQUFPO0FBQ0wsV0FBSyxhQUFhLE1BQU0sY0FBYyxhQUFhLEtBQUssUUFBUTtBQUFBLElBQ2xFO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxhQUFhO0FBQ1gsV0FBTyxLQUFLO0FBQUEsRUFDZDtBQUFBO0FBQUEsRUFFQSxPQUFPLFdBQVc7QUFDaEIsU0FBSyxZQUFZO0FBQ2pCLFNBQUssYUFBYSxhQUFhO0FBQy9CLFFBQUksS0FBSyxlQUFlLE1BQU07QUFDNUIsV0FBSyxLQUFLLFVBQVU7QUFBQSxJQUN0QjtBQUNBLFFBQUksS0FBSyx1QkFBdUIsTUFBTTtBQUNwQyxXQUFLLG1CQUFtQixNQUFNO0FBQUEsSUFDaEM7QUFBQSxFQUNGO0FBQ0Y7QUFLQSxJQUFNLG1CQUFOLE1BQXVCO0FBQUEsRUFDckIsWUFBWSxnQkFBZ0IsWUFBWUEsV0FBVTtBQUNoRCxTQUFLLGlCQUFpQjtBQUN0QixTQUFLLGFBQWE7QUFDbEIsU0FBSyxXQUFXLENBQUMsQ0FBQ0E7QUFBQSxFQUNwQjtBQUNGO0FBQ0EsU0FBUyxlQUFlLFNBQVMsV0FBVztBQUMxQyxNQUFJLGNBQWMsUUFBUSxVQUFVLFNBQVMsR0FBRztBQUM5QyxZQUFRLGVBQWUsSUFBSSxjQUFjO0FBQUEsRUFDM0M7QUFDRjtBQUNBLFNBQVMsa0JBQWtCLFNBQVMsaUJBQWlCO0FBQ25ELFVBQVEsNEJBQTRCLElBQUksWUFBWSxvQkFBb0IsUUFBUSxvQkFBb0IsU0FBUyxrQkFBa0I7QUFDakk7QUFDQSxTQUFTLGdCQUFnQixTQUFTLE9BQU87QUFDdkMsTUFBSSxPQUFPO0FBQ1QsWUFBUSxrQkFBa0IsSUFBSTtBQUFBLEVBQ2hDO0FBQ0Y7QUFDQSxTQUFTLG1CQUFtQixTQUFTLGVBQWU7QUFDbEQsTUFBSSxrQkFBa0IsTUFBTTtBQUMxQixZQUFRLHFCQUFxQixJQUFJO0FBQUEsRUFDbkM7QUFDRjtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sV0FBVyxlQUFlLGdCQUFnQixpQkFBaUIsUUFBUSxNQUFNO0FBQ2hILFFBQU0sWUFBWSxnQkFBZ0IsWUFBWSxTQUFTO0FBQ3ZELFFBQU0sTUFBTSxZQUFZLE1BQU07QUFDOUIsUUFBTSxVQUFVLE9BQU8sT0FBTyxDQUFDLEdBQUcsWUFBWSxPQUFPO0FBQ3JELGtCQUFnQixTQUFTLEtBQUs7QUFDOUIsaUJBQWUsU0FBUyxTQUFTO0FBQ2pDLG9CQUFrQixTQUFTLGVBQWU7QUFDMUMscUJBQW1CLFNBQVMsYUFBYTtBQUN6QyxTQUFPLElBQUksZUFBZSxLQUFLLFlBQVksUUFBUSxTQUFTLFlBQVksTUFBTSxZQUFZLGNBQWMsWUFBWSxzQkFBc0IsWUFBWSxTQUFTLFlBQVksY0FBYyxZQUFZLFNBQVMsWUFBWSxrQkFBa0IsZ0JBQWdCLEtBQUs7QUFDblE7QUFrQkEsU0FBUyxpQkFBaUI7QUFDeEIsTUFBSSxPQUFPLGdCQUFnQixhQUFhO0FBQ3RDLFdBQU87QUFBQSxFQUNULFdBQVcsT0FBTyxzQkFBc0IsYUFBYTtBQUNuRCxXQUFPO0FBQUEsRUFDVCxPQUFPO0FBQ0wsV0FBTztBQUFBLEVBQ1Q7QUFDRjtBQU9BLFNBQVMsYUFBYSxNQUFNO0FBQzFCLFFBQU1HLGVBQWMsZUFBZTtBQUNuQyxNQUFJQSxpQkFBZ0IsUUFBVztBQUM3QixVQUFNLEtBQUssSUFBSUEsYUFBWTtBQUMzQixhQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxLQUFLO0FBQ3BDLFNBQUcsT0FBTyxLQUFLLENBQUMsQ0FBQztBQUFBLElBQ25CO0FBQ0EsV0FBTyxHQUFHLFFBQVE7QUFBQSxFQUNwQixPQUFPO0FBQ0wsUUFBSSxvQkFBb0IsR0FBRztBQUN6QixhQUFPLElBQUksS0FBSyxJQUFJO0FBQUEsSUFDdEIsT0FBTztBQUNMLFlBQU0sSUFBSSxhQUFhLGlCQUFpQix5QkFBeUIscURBQXFEO0FBQUEsSUFDeEg7QUFBQSxFQUNGO0FBQ0Y7QUFVQSxTQUFTLFVBQVUsTUFBTUMsUUFBTyxLQUFLO0FBQ25DLE1BQUksS0FBSyxhQUFhO0FBQ3BCLFdBQU8sS0FBSyxZQUFZQSxRQUFPLEdBQUc7QUFBQSxFQUNwQyxXQUFXLEtBQUssVUFBVTtBQUN4QixXQUFPLEtBQUssU0FBU0EsUUFBTyxHQUFHO0FBQUEsRUFDakMsV0FBVyxLQUFLLE9BQU87QUFDckIsV0FBTyxLQUFLLE1BQU1BLFFBQU8sR0FBRztBQUFBLEVBQzlCO0FBQ0EsU0FBTztBQUNUO0FBbUJBLFNBQVMsYUFBYSxTQUFTO0FBQzdCLE1BQUksT0FBTyxTQUFTLGFBQWE7QUFDL0IsVUFBTSxnQkFBZ0IsU0FBUztBQUFBLEVBQ2pDO0FBQ0EsU0FBTyxLQUFLLE9BQU87QUFDckI7QUFzQkEsSUFBTSxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFuQixLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPTCxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPUixXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFVWCxVQUFVO0FBQ1o7QUFDQSxJQUFNLGFBQU4sTUFBaUI7QUFBQSxFQUNmLFlBQVksTUFBTSxhQUFhO0FBQzdCLFNBQUssT0FBTztBQUNaLFNBQUssY0FBYyxlQUFlO0FBQUEsRUFDcEM7QUFDRjtBQUlBLFNBQVMsZUFBZSxRQUFRLFlBQVk7QUFDMUMsVUFBUSxRQUFRO0FBQUEsSUFDZCxLQUFLLGFBQWE7QUFDaEIsYUFBTyxJQUFJLFdBQVcsV0FBVyxVQUFVLENBQUM7QUFBQSxJQUM5QyxLQUFLLGFBQWE7QUFBQSxJQUNsQixLQUFLLGFBQWE7QUFDaEIsYUFBTyxJQUFJLFdBQVcsYUFBYSxRQUFRLFVBQVUsQ0FBQztBQUFBLElBQ3hELEtBQUssYUFBYTtBQUNoQixhQUFPLElBQUksV0FBVyxjQUFjLFVBQVUsR0FBRyxvQkFBb0IsVUFBVSxDQUFDO0FBQUEsRUFFcEY7QUFFQSxRQUFNLFFBQVE7QUFDaEI7QUFDQSxTQUFTLFdBQVcsT0FBTztBQUN6QixRQUFNLElBQUksQ0FBQztBQUNYLFdBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUs7QUFDckMsUUFBSSxJQUFJLE1BQU0sV0FBVyxDQUFDO0FBQzFCLFFBQUksS0FBSyxLQUFLO0FBQ1osUUFBRSxLQUFLLENBQUM7QUFBQSxJQUNWLE9BQU87QUFDTCxVQUFJLEtBQUssTUFBTTtBQUNiLFVBQUUsS0FBSyxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksRUFBRTtBQUFBLE1BQ25DLE9BQU87QUFDTCxhQUFLLElBQUksV0FBVyxPQUFPO0FBRXpCLGdCQUFNLFFBQVEsSUFBSSxNQUFNLFNBQVMsTUFBTSxNQUFNLFdBQVcsSUFBSSxDQUFDLElBQUksV0FBVztBQUM1RSxjQUFJLENBQUMsT0FBTztBQUVWLGNBQUUsS0FBSyxLQUFLLEtBQUssR0FBRztBQUFBLFVBQ3RCLE9BQU87QUFDTCxrQkFBTSxLQUFLO0FBQ1gsa0JBQU0sS0FBSyxNQUFNLFdBQVcsRUFBRSxDQUFDO0FBQy9CLGdCQUFJLFNBQVMsS0FBSyxTQUFTLEtBQUssS0FBSztBQUNyQyxjQUFFLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxLQUFLLEtBQUssSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sSUFBSSxFQUFFO0FBQUEsVUFDM0U7QUFBQSxRQUNGLE9BQU87QUFDTCxlQUFLLElBQUksV0FBVyxPQUFPO0FBRXpCLGNBQUUsS0FBSyxLQUFLLEtBQUssR0FBRztBQUFBLFVBQ3RCLE9BQU87QUFDTCxjQUFFLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxLQUFLLElBQUksSUFBSSxNQUFNLElBQUksRUFBRTtBQUFBLFVBQ3ZEO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNBLFNBQU8sSUFBSSxXQUFXLENBQUM7QUFDekI7QUFDQSxTQUFTLHFCQUFxQixPQUFPO0FBQ25DLE1BQUk7QUFDSixNQUFJO0FBQ0YsY0FBVSxtQkFBbUIsS0FBSztBQUFBLEVBQ3BDLFNBQVMsR0FBRztBQUNWLFVBQU0sY0FBYyxhQUFhLFVBQVUscUJBQXFCO0FBQUEsRUFDbEU7QUFDQSxTQUFPLFdBQVcsT0FBTztBQUMzQjtBQUNBLFNBQVMsYUFBYSxRQUFRLE9BQU87QUFDbkMsVUFBUSxRQUFRO0FBQUEsSUFDZCxLQUFLLGFBQWEsUUFDaEI7QUFDRSxZQUFNLFdBQVcsTUFBTSxRQUFRLEdBQUcsTUFBTTtBQUN4QyxZQUFNLFdBQVcsTUFBTSxRQUFRLEdBQUcsTUFBTTtBQUN4QyxVQUFJLFlBQVksVUFBVTtBQUN4QixjQUFNLGNBQWMsV0FBVyxNQUFNO0FBQ3JDLGNBQU0sY0FBYyxRQUFRLHdCQUF3QixjQUFjLG1DQUFtQztBQUFBLE1BQ3ZHO0FBQ0E7QUFBQSxJQUNGO0FBQUEsSUFDRixLQUFLLGFBQWEsV0FDaEI7QUFDRSxZQUFNLFVBQVUsTUFBTSxRQUFRLEdBQUcsTUFBTTtBQUN2QyxZQUFNLFdBQVcsTUFBTSxRQUFRLEdBQUcsTUFBTTtBQUN4QyxVQUFJLFdBQVcsVUFBVTtBQUN2QixjQUFNLGNBQWMsVUFBVSxNQUFNO0FBQ3BDLGNBQU0sY0FBYyxRQUFRLHdCQUF3QixjQUFjLGdDQUFnQztBQUFBLE1BQ3BHO0FBQ0EsY0FBUSxNQUFNLFFBQVEsTUFBTSxHQUFHLEVBQUUsUUFBUSxNQUFNLEdBQUc7QUFDbEQ7QUFBQSxJQUNGO0FBQUEsRUFFSjtBQUNBLE1BQUk7QUFDSixNQUFJO0FBQ0YsWUFBUSxhQUFhLEtBQUs7QUFBQSxFQUM1QixTQUFTLEdBQUc7QUFDVixRQUFJLEVBQUUsUUFBUSxTQUFTLFVBQVUsR0FBRztBQUNsQyxZQUFNO0FBQUEsSUFDUjtBQUNBLFVBQU0sY0FBYyxRQUFRLHlCQUF5QjtBQUFBLEVBQ3ZEO0FBQ0EsUUFBTSxRQUFRLElBQUksV0FBVyxNQUFNLE1BQU07QUFDekMsV0FBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztBQUNyQyxVQUFNLENBQUMsSUFBSSxNQUFNLFdBQVcsQ0FBQztBQUFBLEVBQy9CO0FBQ0EsU0FBTztBQUNUO0FBQ0EsSUFBTSxlQUFOLE1BQW1CO0FBQUEsRUFDakIsWUFBWSxTQUFTO0FBQ25CLFNBQUssU0FBUztBQUNkLFNBQUssY0FBYztBQUNuQixVQUFNLFVBQVUsUUFBUSxNQUFNLGlCQUFpQjtBQUMvQyxRQUFJLFlBQVksTUFBTTtBQUNwQixZQUFNLGNBQWMsYUFBYSxVQUFVLHVEQUF1RDtBQUFBLElBQ3BHO0FBQ0EsVUFBTSxTQUFTLFFBQVEsQ0FBQyxLQUFLO0FBQzdCLFFBQUksVUFBVSxNQUFNO0FBQ2xCLFdBQUssU0FBUyxTQUFTLFFBQVEsU0FBUztBQUN4QyxXQUFLLGNBQWMsS0FBSyxTQUFTLE9BQU8sVUFBVSxHQUFHLE9BQU8sU0FBUyxVQUFVLE1BQU0sSUFBSTtBQUFBLElBQzNGO0FBQ0EsU0FBSyxPQUFPLFFBQVEsVUFBVSxRQUFRLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFBQSxFQUN4RDtBQUNGO0FBQ0EsU0FBUyxjQUFjLFNBQVM7QUFDOUIsUUFBTSxRQUFRLElBQUksYUFBYSxPQUFPO0FBQ3RDLE1BQUksTUFBTSxRQUFRO0FBQ2hCLFdBQU8sYUFBYSxhQUFhLFFBQVEsTUFBTSxJQUFJO0FBQUEsRUFDckQsT0FBTztBQUNMLFdBQU8scUJBQXFCLE1BQU0sSUFBSTtBQUFBLEVBQ3hDO0FBQ0Y7QUFDQSxTQUFTLG9CQUFvQixTQUFTO0FBQ3BDLFFBQU0sUUFBUSxJQUFJLGFBQWEsT0FBTztBQUN0QyxTQUFPLE1BQU07QUFDZjtBQUNBLFNBQVMsU0FBUyxHQUFHLEtBQUs7QUFDeEIsUUFBTSxhQUFhLEVBQUUsVUFBVSxJQUFJO0FBQ25DLE1BQUksQ0FBQyxZQUFZO0FBQ2YsV0FBTztBQUFBLEVBQ1Q7QUFDQSxTQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsSUFBSSxNQUFNLE1BQU07QUFDaEQ7QUF5QkEsSUFBTSxVQUFOLE1BQU0sU0FBUTtBQUFBLEVBQ1osWUFBWSxNQUFNLFdBQVc7QUFDM0IsUUFBSSxPQUFPO0FBQ1gsUUFBSSxXQUFXO0FBQ2YsUUFBSSxhQUFhLElBQUksR0FBRztBQUN0QixXQUFLLFFBQVE7QUFDYixhQUFPLEtBQUs7QUFDWixpQkFBVyxLQUFLO0FBQUEsSUFDbEIsV0FBVyxnQkFBZ0IsYUFBYTtBQUN0QyxVQUFJLFdBQVc7QUFDYixhQUFLLFFBQVEsSUFBSSxXQUFXLElBQUk7QUFBQSxNQUNsQyxPQUFPO0FBQ0wsYUFBSyxRQUFRLElBQUksV0FBVyxLQUFLLFVBQVU7QUFDM0MsYUFBSyxNQUFNLElBQUksSUFBSSxXQUFXLElBQUksQ0FBQztBQUFBLE1BQ3JDO0FBQ0EsYUFBTyxLQUFLLE1BQU07QUFBQSxJQUNwQixXQUFXLGdCQUFnQixZQUFZO0FBQ3JDLFVBQUksV0FBVztBQUNiLGFBQUssUUFBUTtBQUFBLE1BQ2YsT0FBTztBQUNMLGFBQUssUUFBUSxJQUFJLFdBQVcsS0FBSyxNQUFNO0FBQ3ZDLGFBQUssTUFBTSxJQUFJLElBQUk7QUFBQSxNQUNyQjtBQUNBLGFBQU8sS0FBSztBQUFBLElBQ2Q7QUFDQSxTQUFLLFFBQVE7QUFDYixTQUFLLFFBQVE7QUFBQSxFQUNmO0FBQUEsRUFDQSxPQUFPO0FBQ0wsV0FBTyxLQUFLO0FBQUEsRUFDZDtBQUFBLEVBQ0EsT0FBTztBQUNMLFdBQU8sS0FBSztBQUFBLEVBQ2Q7QUFBQSxFQUNBLE1BQU0sV0FBVyxTQUFTO0FBQ3hCLFFBQUksYUFBYSxLQUFLLEtBQUssR0FBRztBQUM1QixZQUFNLFdBQVcsS0FBSztBQUN0QixZQUFNLFNBQVMsVUFBVSxVQUFVLFdBQVcsT0FBTztBQUNyRCxVQUFJLFdBQVcsTUFBTTtBQUNuQixlQUFPO0FBQUEsTUFDVDtBQUNBLGFBQU8sSUFBSSxTQUFRLE1BQU07QUFBQSxJQUMzQixPQUFPO0FBQ0wsWUFBTSxRQUFRLElBQUksV0FBVyxLQUFLLE1BQU0sUUFBUSxXQUFXLFVBQVUsU0FBUztBQUM5RSxhQUFPLElBQUksU0FBUSxPQUFPLElBQUk7QUFBQSxJQUNoQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU8sV0FBVyxNQUFNO0FBQ3RCLFFBQUksb0JBQW9CLEdBQUc7QUFDekIsWUFBTSxTQUFTLEtBQUssSUFBSSxTQUFPO0FBQzdCLFlBQUksZUFBZSxVQUFTO0FBQzFCLGlCQUFPLElBQUk7QUFBQSxRQUNiLE9BQU87QUFDTCxpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGLENBQUM7QUFDRCxhQUFPLElBQUksU0FBUSxVQUFVLE1BQU0sTUFBTSxNQUFNLENBQUM7QUFBQSxJQUNsRCxPQUFPO0FBQ0wsWUFBTSxjQUFjLEtBQUssSUFBSSxTQUFPO0FBQ2xDLFlBQUksU0FBUyxHQUFHLEdBQUc7QUFDakIsaUJBQU8sZUFBZSxhQUFhLEtBQUssR0FBRyxFQUFFO0FBQUEsUUFDL0MsT0FBTztBQUVMLGlCQUFPLElBQUk7QUFBQSxRQUNiO0FBQUEsTUFDRixDQUFDO0FBQ0QsVUFBSSxjQUFjO0FBQ2xCLGtCQUFZLFFBQVEsV0FBUztBQUMzQix1QkFBZSxNQUFNO0FBQUEsTUFDdkIsQ0FBQztBQUNELFlBQU0sU0FBUyxJQUFJLFdBQVcsV0FBVztBQUN6QyxVQUFJLFFBQVE7QUFDWixrQkFBWSxRQUFRLFdBQVM7QUFDM0IsaUJBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUs7QUFDckMsaUJBQU8sT0FBTyxJQUFJLE1BQU0sQ0FBQztBQUFBLFFBQzNCO0FBQUEsTUFDRixDQUFDO0FBQ0QsYUFBTyxJQUFJLFNBQVEsUUFBUSxJQUFJO0FBQUEsSUFDakM7QUFBQSxFQUNGO0FBQUEsRUFDQSxhQUFhO0FBQ1gsV0FBTyxLQUFLO0FBQUEsRUFDZDtBQUNGO0FBc0JBLFNBQVMsaUJBQWlCLEdBQUc7QUFDM0IsTUFBSTtBQUNKLE1BQUk7QUFDRixVQUFNLEtBQUssTUFBTSxDQUFDO0FBQUEsRUFDcEIsU0FBUyxHQUFHO0FBQ1YsV0FBTztBQUFBLEVBQ1Q7QUFDQSxNQUFJLGlCQUFpQixHQUFHLEdBQUc7QUFDekIsV0FBTztBQUFBLEVBQ1QsT0FBTztBQUNMLFdBQU87QUFBQSxFQUNUO0FBQ0Y7QUF3QkEsU0FBUyxPQUFPLE1BQU07QUFDcEIsTUFBSSxLQUFLLFdBQVcsR0FBRztBQUNyQixXQUFPO0FBQUEsRUFDVDtBQUNBLFFBQU0sUUFBUSxLQUFLLFlBQVksR0FBRztBQUNsQyxNQUFJLFVBQVUsSUFBSTtBQUNoQixXQUFPO0FBQUEsRUFDVDtBQUNBLFFBQU0sVUFBVSxLQUFLLE1BQU0sR0FBRyxLQUFLO0FBQ25DLFNBQU87QUFDVDtBQUNBLFNBQVMsTUFBTSxNQUFNLFdBQVc7QUFDOUIsUUFBTSxxQkFBcUIsVUFBVSxNQUFNLEdBQUcsRUFBRSxPQUFPLGVBQWEsVUFBVSxTQUFTLENBQUMsRUFBRSxLQUFLLEdBQUc7QUFDbEcsTUFBSSxLQUFLLFdBQVcsR0FBRztBQUNyQixXQUFPO0FBQUEsRUFDVCxPQUFPO0FBQ0wsV0FBTyxPQUFPLE1BQU07QUFBQSxFQUN0QjtBQUNGO0FBT0EsU0FBUyxjQUFjLE1BQU07QUFDM0IsUUFBTSxRQUFRLEtBQUssWUFBWSxLQUFLLEtBQUssU0FBUyxDQUFDO0FBQ25ELE1BQUksVUFBVSxJQUFJO0FBQ2hCLFdBQU87QUFBQSxFQUNULE9BQU87QUFDTCxXQUFPLEtBQUssTUFBTSxRQUFRLENBQUM7QUFBQSxFQUM3QjtBQUNGO0FBa0JBLFNBQVMsU0FBUyxVQUFVLE9BQU87QUFDakMsU0FBTztBQUNUO0FBQ0EsSUFBTSxVQUFOLE1BQWM7QUFBQSxFQUNaLFlBQVksUUFBUSxPQUFPLFVBQVUsT0FBTztBQUMxQyxTQUFLLFNBQVM7QUFDZCxTQUFLLFFBQVEsU0FBUztBQUN0QixTQUFLLFdBQVcsQ0FBQyxDQUFDO0FBQ2xCLFNBQUssUUFBUSxTQUFTO0FBQUEsRUFDeEI7QUFDRjtBQUNBLElBQUksWUFBWTtBQUNoQixTQUFTLFVBQVUsVUFBVTtBQUMzQixNQUFJLENBQUMsU0FBUyxRQUFRLEtBQUssU0FBUyxTQUFTLEdBQUc7QUFDOUMsV0FBTztBQUFBLEVBQ1QsT0FBTztBQUNMLFdBQU8sY0FBYyxRQUFRO0FBQUEsRUFDL0I7QUFDRjtBQUNBLFNBQVMsY0FBYztBQUNyQixNQUFJLFdBQVc7QUFDYixXQUFPO0FBQUEsRUFDVDtBQUNBLFFBQU0sV0FBVyxDQUFDO0FBQ2xCLFdBQVMsS0FBSyxJQUFJLFFBQVEsUUFBUSxDQUFDO0FBQ25DLFdBQVMsS0FBSyxJQUFJLFFBQVEsWUFBWSxDQUFDO0FBQ3ZDLFdBQVMsS0FBSyxJQUFJLFFBQVEsZ0JBQWdCLENBQUM7QUFDM0MsV0FBUyxLQUFLLElBQUksUUFBUSxRQUFRLFlBQVksSUFBSSxDQUFDO0FBQ25ELFdBQVMsa0JBQWtCLFdBQVcsVUFBVTtBQUM5QyxXQUFPLFVBQVUsUUFBUTtBQUFBLEVBQzNCO0FBQ0EsUUFBTSxjQUFjLElBQUksUUFBUSxNQUFNO0FBQ3RDLGNBQVksUUFBUTtBQUNwQixXQUFTLEtBQUssV0FBVztBQUl6QixXQUFTLFVBQVUsV0FBVyxNQUFNO0FBQ2xDLFFBQUksU0FBUyxRQUFXO0FBQ3RCLGFBQU8sT0FBTyxJQUFJO0FBQUEsSUFDcEIsT0FBTztBQUNMLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUNBLFFBQU0sY0FBYyxJQUFJLFFBQVEsTUFBTTtBQUN0QyxjQUFZLFFBQVE7QUFDcEIsV0FBUyxLQUFLLFdBQVc7QUFDekIsV0FBUyxLQUFLLElBQUksUUFBUSxhQUFhLENBQUM7QUFDeEMsV0FBUyxLQUFLLElBQUksUUFBUSxTQUFTLENBQUM7QUFDcEMsV0FBUyxLQUFLLElBQUksUUFBUSxXQUFXLE1BQU0sSUFBSSxDQUFDO0FBQ2hELFdBQVMsS0FBSyxJQUFJLFFBQVEsZ0JBQWdCLE1BQU0sSUFBSSxDQUFDO0FBQ3JELFdBQVMsS0FBSyxJQUFJLFFBQVEsc0JBQXNCLE1BQU0sSUFBSSxDQUFDO0FBQzNELFdBQVMsS0FBSyxJQUFJLFFBQVEsbUJBQW1CLE1BQU0sSUFBSSxDQUFDO0FBQ3hELFdBQVMsS0FBSyxJQUFJLFFBQVEsbUJBQW1CLE1BQU0sSUFBSSxDQUFDO0FBQ3hELFdBQVMsS0FBSyxJQUFJLFFBQVEsZUFBZSxNQUFNLElBQUksQ0FBQztBQUNwRCxXQUFTLEtBQUssSUFBSSxRQUFRLFlBQVksa0JBQWtCLElBQUksQ0FBQztBQUM3RCxjQUFZO0FBQ1osU0FBTztBQUNUO0FBQ0EsU0FBUyxPQUFPLFVBQVUsU0FBUztBQUNqQyxXQUFTLGNBQWM7QUFDckIsVUFBTSxTQUFTLFNBQVMsUUFBUTtBQUNoQyxVQUFNLE9BQU8sU0FBUyxVQUFVO0FBQ2hDLFVBQU0sTUFBTSxJQUFJLFNBQVMsUUFBUSxJQUFJO0FBQ3JDLFdBQU8sUUFBUSxzQkFBc0IsR0FBRztBQUFBLEVBQzFDO0FBQ0EsU0FBTyxlQUFlLFVBQVUsT0FBTztBQUFBLElBQ3JDLEtBQUs7QUFBQSxFQUNQLENBQUM7QUFDSDtBQUNBLFNBQVMsYUFBYSxTQUFTLFVBQVUsVUFBVTtBQUNqRCxRQUFNLFdBQVcsQ0FBQztBQUNsQixXQUFTLE1BQU0sSUFBSTtBQUNuQixRQUFNLE1BQU0sU0FBUztBQUNyQixXQUFTLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSztBQUM1QixVQUFNLFVBQVUsU0FBUyxDQUFDO0FBQzFCLGFBQVMsUUFBUSxLQUFLLElBQUksUUFBUSxNQUFNLFVBQVUsU0FBUyxRQUFRLE1BQU0sQ0FBQztBQUFBLEVBQzVFO0FBQ0EsU0FBTyxVQUFVLE9BQU87QUFDeEIsU0FBTztBQUNUO0FBQ0EsU0FBUyxtQkFBbUIsU0FBUyxnQkFBZ0IsVUFBVTtBQUM3RCxRQUFNLE1BQU0saUJBQWlCLGNBQWM7QUFDM0MsTUFBSSxRQUFRLE1BQU07QUFDaEIsV0FBTztBQUFBLEVBQ1Q7QUFDQSxRQUFNLFdBQVc7QUFDakIsU0FBTyxhQUFhLFNBQVMsVUFBVSxRQUFRO0FBQ2pEO0FBQ0EsU0FBUyw4QkFBOEIsVUFBVSxnQkFBZ0IsTUFBTSxVQUFVO0FBQy9FLFFBQU0sTUFBTSxpQkFBaUIsY0FBYztBQUMzQyxNQUFJLFFBQVEsTUFBTTtBQUNoQixXQUFPO0FBQUEsRUFDVDtBQUNBLE1BQUksQ0FBQyxTQUFTLElBQUksZ0JBQWdCLENBQUMsR0FBRztBQUdwQyxXQUFPO0FBQUEsRUFDVDtBQUNBLFFBQU0sU0FBUyxJQUFJLGdCQUFnQjtBQUNuQyxNQUFJLE9BQU8sV0FBVyxHQUFHO0FBQ3ZCLFdBQU87QUFBQSxFQUNUO0FBQ0EsUUFBTSxTQUFTO0FBQ2YsUUFBTSxhQUFhLE9BQU8sTUFBTSxHQUFHO0FBQ25DLFFBQU0sT0FBTyxXQUFXLElBQUksV0FBUztBQUNuQyxVQUFNLFNBQVMsU0FBUyxRQUFRO0FBQ2hDLFVBQU0sT0FBTyxTQUFTLFVBQVU7QUFDaEMsVUFBTSxVQUFVLFFBQVEsT0FBTyxNQUFNLElBQUksUUFBUSxPQUFPLElBQUk7QUFDNUQsVUFBTSxPQUFPLFFBQVEsU0FBUyxNQUFNLFFBQVE7QUFDNUMsVUFBTSxjQUFjLGdCQUFnQjtBQUFBLE1BQ2xDLEtBQUs7QUFBQSxNQUNMO0FBQUEsSUFDRixDQUFDO0FBQ0QsV0FBTyxPQUFPO0FBQUEsRUFDaEIsQ0FBQztBQUNELFNBQU8sS0FBSyxDQUFDO0FBQ2Y7QUFDQSxTQUFTLGlCQUFpQixVQUFVLFVBQVU7QUFDNUMsUUFBTSxXQUFXLENBQUM7QUFDbEIsUUFBTSxNQUFNLFNBQVM7QUFDckIsV0FBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDNUIsVUFBTSxVQUFVLFNBQVMsQ0FBQztBQUMxQixRQUFJLFFBQVEsVUFBVTtBQUNwQixlQUFTLFFBQVEsTUFBTSxJQUFJLFNBQVMsUUFBUSxLQUFLO0FBQUEsSUFDbkQ7QUFBQSxFQUNGO0FBQ0EsU0FBTyxLQUFLLFVBQVUsUUFBUTtBQUNoQztBQWtCQSxJQUFNLGVBQWU7QUFDckIsSUFBTSxZQUFZO0FBQ2xCLFNBQVMsb0JBQW9CLFNBQVMsUUFBUSxVQUFVO0FBQ3RELFFBQU0sYUFBYTtBQUFBLElBQ2pCLFVBQVUsQ0FBQztBQUFBLElBQ1gsT0FBTyxDQUFDO0FBQUEsSUFDUixlQUFlLFNBQVMsZUFBZTtBQUFBLEVBQ3pDO0FBQ0EsTUFBSSxTQUFTLFlBQVksR0FBRztBQUMxQixlQUFXLFFBQVEsU0FBUyxZQUFZLEdBQUc7QUFDekMsWUFBTSwyQkFBMkIsS0FBSyxRQUFRLE9BQU8sRUFBRTtBQUN2RCxZQUFNLFlBQVksUUFBUSxzQkFBc0IsSUFBSSxTQUFTLFFBQVEsd0JBQXdCLENBQUM7QUFDOUYsaUJBQVcsU0FBUyxLQUFLLFNBQVM7QUFBQSxJQUNwQztBQUFBLEVBQ0Y7QUFDQSxNQUFJLFNBQVMsU0FBUyxHQUFHO0FBQ3ZCLGVBQVcsUUFBUSxTQUFTLFNBQVMsR0FBRztBQUN0QyxZQUFNLFlBQVksUUFBUSxzQkFBc0IsSUFBSSxTQUFTLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQztBQUNsRixpQkFBVyxNQUFNLEtBQUssU0FBUztBQUFBLElBQ2pDO0FBQUEsRUFDRjtBQUNBLFNBQU87QUFDVDtBQUNBLFNBQVMsbUJBQW1CLFNBQVMsUUFBUSxnQkFBZ0I7QUFDM0QsUUFBTSxNQUFNLGlCQUFpQixjQUFjO0FBQzNDLE1BQUksUUFBUSxNQUFNO0FBQ2hCLFdBQU87QUFBQSxFQUNUO0FBQ0EsUUFBTSxXQUFXO0FBQ2pCLFNBQU8sb0JBQW9CLFNBQVMsUUFBUSxRQUFRO0FBQ3REO0FBUUEsSUFBTSxjQUFOLE1BQWtCO0FBQUEsRUFDaEIsWUFBWSxLQUFLLFFBUWpCLFNBQVMsU0FBUztBQUNoQixTQUFLLE1BQU07QUFDWCxTQUFLLFNBQVM7QUFDZCxTQUFLLFVBQVU7QUFDZixTQUFLLFVBQVU7QUFDZixTQUFLLFlBQVksQ0FBQztBQUNsQixTQUFLLFVBQVUsQ0FBQztBQUNoQixTQUFLLE9BQU87QUFDWixTQUFLLGVBQWU7QUFLcEIsU0FBSyxtQkFBbUI7QUFDeEIsU0FBSyxlQUFlLENBQUMsR0FBRztBQUN4QixTQUFLLHVCQUF1QixDQUFDO0FBQUEsRUFDL0I7QUFDRjtBQXFCQSxTQUFTLGFBQWEsTUFBTTtBQUMxQixNQUFJLENBQUMsTUFBTTtBQUNULFVBQU0sUUFBUTtBQUFBLEVBQ2hCO0FBQ0Y7QUFDQSxTQUFTLGdCQUFnQixTQUFTLFVBQVU7QUFDMUMsV0FBUyxRQUFRLEtBQUssTUFBTTtBQUMxQixVQUFNLFdBQVcsbUJBQW1CLFNBQVMsTUFBTSxRQUFRO0FBQzNELGlCQUFhLGFBQWEsSUFBSTtBQUM5QixXQUFPO0FBQUEsRUFDVDtBQUNBLFNBQU87QUFDVDtBQUNBLFNBQVMsWUFBWSxTQUFTLFFBQVE7QUFDcEMsV0FBUyxRQUFRLEtBQUssTUFBTTtBQUMxQixVQUFNLGFBQWEsbUJBQW1CLFNBQVMsUUFBUSxJQUFJO0FBQzNELGlCQUFhLGVBQWUsSUFBSTtBQUNoQyxXQUFPO0FBQUEsRUFDVDtBQUNBLFNBQU87QUFDVDtBQUNBLFNBQVMsbUJBQW1CLFNBQVMsVUFBVTtBQUM3QyxXQUFTLFFBQVEsS0FBSyxNQUFNO0FBQzFCLFVBQU0sV0FBVyxtQkFBbUIsU0FBUyxNQUFNLFFBQVE7QUFDM0QsaUJBQWEsYUFBYSxJQUFJO0FBQzlCLFdBQU8sOEJBQThCLFVBQVUsTUFBTSxRQUFRLE1BQU0sUUFBUSxTQUFTO0FBQUEsRUFDdEY7QUFDQSxTQUFPO0FBQ1Q7QUFDQSxTQUFTLG1CQUFtQixVQUFVO0FBQ3BDLFdBQVMsYUFBYSxLQUFLLEtBQUs7QUFDOUIsUUFBSTtBQUNKLFFBQUksSUFBSSxVQUFVLE1BQU0sS0FBSztBQUMzQjtBQUFBO0FBQUE7QUFBQSxRQUdBLElBQUksYUFBYSxFQUFFLFNBQVMscUNBQXFDO0FBQUEsUUFBRztBQUNsRSxpQkFBUyxnQkFBZ0I7QUFBQSxNQUMzQixPQUFPO0FBQ0wsaUJBQVMsZ0JBQWdCO0FBQUEsTUFDM0I7QUFBQSxJQUNGLE9BQU87QUFDTCxVQUFJLElBQUksVUFBVSxNQUFNLEtBQUs7QUFDM0IsaUJBQVMsY0FBYyxTQUFTLE1BQU07QUFBQSxNQUN4QyxPQUFPO0FBQ0wsWUFBSSxJQUFJLFVBQVUsTUFBTSxLQUFLO0FBQzNCLG1CQUFTLGFBQWEsU0FBUyxJQUFJO0FBQUEsUUFDckMsT0FBTztBQUNMLG1CQUFTO0FBQUEsUUFDWDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQ0EsV0FBTyxTQUFTLElBQUksVUFBVTtBQUM5QixXQUFPLGlCQUFpQixJQUFJO0FBQzVCLFdBQU87QUFBQSxFQUNUO0FBQ0EsU0FBTztBQUNUO0FBQ0EsU0FBUyxtQkFBbUIsVUFBVTtBQUNwQyxRQUFNLFNBQVMsbUJBQW1CLFFBQVE7QUFDMUMsV0FBUyxhQUFhLEtBQUssS0FBSztBQUM5QixRQUFJLFNBQVMsT0FBTyxLQUFLLEdBQUc7QUFDNUIsUUFBSSxJQUFJLFVBQVUsTUFBTSxLQUFLO0FBQzNCLGVBQVMsZUFBZSxTQUFTLElBQUk7QUFBQSxJQUN2QztBQUNBLFdBQU8saUJBQWlCLElBQUk7QUFDNUIsV0FBTztBQUFBLEVBQ1Q7QUFDQSxTQUFPO0FBQ1Q7QUFDQSxTQUFTLGNBQWMsU0FBUyxVQUFVLFVBQVU7QUFDbEQsUUFBTSxVQUFVLFNBQVMsY0FBYztBQUN2QyxRQUFNLE1BQU0sUUFBUSxTQUFTLFFBQVEsTUFBTSxRQUFRLFNBQVM7QUFDNUQsUUFBTSxTQUFTO0FBQ2YsUUFBTSxVQUFVLFFBQVE7QUFDeEIsUUFBTSxjQUFjLElBQUksWUFBWSxLQUFLLFFBQVEsZ0JBQWdCLFNBQVMsUUFBUSxHQUFHLE9BQU87QUFDNUYsY0FBWSxlQUFlLG1CQUFtQixRQUFRO0FBQ3RELFNBQU87QUFDVDtBQUNBLFNBQVMsT0FBTyxTQUFTLFVBQVUsV0FBVyxXQUFXLFlBQVk7QUFDbkUsUUFBTSxZQUFZLENBQUM7QUFDbkIsTUFBSSxTQUFTLFFBQVE7QUFDbkIsY0FBVSxRQUFRLElBQUk7QUFBQSxFQUN4QixPQUFPO0FBQ0wsY0FBVSxRQUFRLElBQUksU0FBUyxPQUFPO0FBQUEsRUFDeEM7QUFDQSxNQUFJLGFBQWEsVUFBVSxTQUFTLEdBQUc7QUFDckMsY0FBVSxXQUFXLElBQUk7QUFBQSxFQUMzQjtBQUNBLE1BQUksV0FBVztBQUNiLGNBQVUsV0FBVyxJQUFJO0FBQUEsRUFDM0I7QUFDQSxNQUFJLFlBQVk7QUFDZCxjQUFVLFlBQVksSUFBSTtBQUFBLEVBQzVCO0FBQ0EsUUFBTSxVQUFVLFNBQVMsb0JBQW9CO0FBQzdDLFFBQU0sTUFBTSxRQUFRLFNBQVMsUUFBUSxNQUFNLFFBQVEsU0FBUztBQUM1RCxRQUFNLFNBQVM7QUFDZixRQUFNLFVBQVUsUUFBUTtBQUN4QixRQUFNLGNBQWMsSUFBSSxZQUFZLEtBQUssUUFBUSxZQUFZLFNBQVMsU0FBUyxNQUFNLEdBQUcsT0FBTztBQUMvRixjQUFZLFlBQVk7QUFDeEIsY0FBWSxlQUFlLG1CQUFtQixRQUFRO0FBQ3RELFNBQU87QUFDVDtBQUNBLFNBQVMsV0FBVyxTQUFTLFVBQVUsc0JBQXNCO0FBQzNELFFBQU0sVUFBVSxTQUFTLGNBQWM7QUFDdkMsUUFBTSxNQUFNLFFBQVEsU0FBUyxRQUFRLE1BQU0sUUFBUSxTQUFTLElBQUk7QUFDaEUsUUFBTSxTQUFTO0FBQ2YsUUFBTSxVQUFVLFFBQVE7QUFDeEIsUUFBTSxjQUFjLElBQUksWUFBWSxLQUFLLFFBQVEsQ0FBQyxHQUFHLFNBQVMsTUFBTSxPQUFPO0FBQzNFLGNBQVksZUFBZSxtQkFBbUIsUUFBUTtBQUN0RCxNQUFJLHlCQUF5QixRQUFXO0FBQ3RDLGdCQUFZLFFBQVEsT0FBTyxJQUFJLFdBQVcsb0JBQW9CO0FBQzlELGdCQUFZLGVBQWU7QUFBQSxNQUFDO0FBQUEsTUFBYztBQUFBO0FBQUEsSUFBeUI7QUFBQSxFQUNyRTtBQUNBLFNBQU87QUFDVDtBQUNBLFNBQVMsZUFBZSxTQUFTLFVBQVUsVUFBVTtBQUNuRCxRQUFNLFVBQVUsU0FBUyxjQUFjO0FBQ3ZDLFFBQU0sTUFBTSxRQUFRLFNBQVMsUUFBUSxNQUFNLFFBQVEsU0FBUztBQUM1RCxRQUFNLFNBQVM7QUFDZixRQUFNLFVBQVUsUUFBUTtBQUN4QixRQUFNLGNBQWMsSUFBSSxZQUFZLEtBQUssUUFBUSxtQkFBbUIsU0FBUyxRQUFRLEdBQUcsT0FBTztBQUMvRixjQUFZLGVBQWUsbUJBQW1CLFFBQVE7QUFDdEQsU0FBTztBQUNUO0FBQ0EsU0FBUyxpQkFBaUIsU0FBUyxVQUFVLFVBQVUsVUFBVTtBQUMvRCxRQUFNLFVBQVUsU0FBUyxjQUFjO0FBQ3ZDLFFBQU0sTUFBTSxRQUFRLFNBQVMsUUFBUSxNQUFNLFFBQVEsU0FBUztBQUM1RCxRQUFNLFNBQVM7QUFDZixRQUFNLE9BQU8saUJBQWlCLFVBQVUsUUFBUTtBQUNoRCxRQUFNLFVBQVU7QUFBQSxJQUNkLGdCQUFnQjtBQUFBLEVBQ2xCO0FBQ0EsUUFBTSxVQUFVLFFBQVE7QUFDeEIsUUFBTSxjQUFjLElBQUksWUFBWSxLQUFLLFFBQVEsZ0JBQWdCLFNBQVMsUUFBUSxHQUFHLE9BQU87QUFDNUYsY0FBWSxVQUFVO0FBQ3RCLGNBQVksT0FBTztBQUNuQixjQUFZLGVBQWUsbUJBQW1CLFFBQVE7QUFDdEQsU0FBTztBQUNUO0FBQ0EsU0FBUyxlQUFlLFNBQVMsVUFBVTtBQUN6QyxRQUFNLFVBQVUsU0FBUyxjQUFjO0FBQ3ZDLFFBQU0sTUFBTSxRQUFRLFNBQVMsUUFBUSxNQUFNLFFBQVEsU0FBUztBQUM1RCxRQUFNLFNBQVM7QUFDZixRQUFNLFVBQVUsUUFBUTtBQUN4QixXQUFTLFFBQVEsTUFBTSxPQUFPO0FBQUEsRUFBQztBQUMvQixRQUFNLGNBQWMsSUFBSSxZQUFZLEtBQUssUUFBUSxTQUFTLE9BQU87QUFDakUsY0FBWSxlQUFlLENBQUMsS0FBSyxHQUFHO0FBQ3BDLGNBQVksZUFBZSxtQkFBbUIsUUFBUTtBQUN0RCxTQUFPO0FBQ1Q7QUFDQSxTQUFTLHNCQUFzQixVQUFVLE1BQU07QUFDN0MsU0FBTyxZQUFZLFNBQVMsYUFBYSxLQUFLLFFBQVEsS0FBSyxLQUFLLEtBQUs7QUFDdkU7QUFDQSxTQUFTLG1CQUFtQixVQUFVLE1BQU0sVUFBVTtBQUNwRCxRQUFNLGdCQUFnQixPQUFPLE9BQU8sQ0FBQyxHQUFHLFFBQVE7QUFDaEQsZ0JBQWMsVUFBVSxJQUFJLFNBQVM7QUFDckMsZ0JBQWMsTUFBTSxJQUFJLEtBQUssS0FBSztBQUNsQyxNQUFJLENBQUMsY0FBYyxhQUFhLEdBQUc7QUFDakMsa0JBQWMsYUFBYSxJQUFJLHNCQUFzQixNQUFNLElBQUk7QUFBQSxFQUNqRTtBQUNBLFNBQU87QUFDVDtBQUlBLFNBQVMsZ0JBQWdCLFNBQVMsVUFBVSxVQUFVLE1BQU0sVUFBVTtBQUNwRSxRQUFNLFVBQVUsU0FBUyxvQkFBb0I7QUFDN0MsUUFBTSxVQUFVO0FBQUEsSUFDZCwwQkFBMEI7QUFBQSxFQUM1QjtBQUNBLFdBQVMsY0FBYztBQUNyQixRQUFJLE1BQU07QUFDVixhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixZQUFNLE1BQU0sS0FBSyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQztBQUFBLElBQzlDO0FBQ0EsV0FBTztBQUFBLEVBQ1Q7QUFDQSxRQUFNLFdBQVcsWUFBWTtBQUM3QixVQUFRLGNBQWMsSUFBSSxpQ0FBaUM7QUFDM0QsUUFBTSxZQUFZLG1CQUFtQixVQUFVLE1BQU0sUUFBUTtBQUM3RCxRQUFNLGlCQUFpQixpQkFBaUIsV0FBVyxRQUFRO0FBQzNELFFBQU0sY0FBYyxPQUFPLFdBQVcsOERBQW1FLGlCQUFpQixXQUFXLFdBQVcsdUJBQTRCLFVBQVUsYUFBYSxJQUFJO0FBQ3ZNLFFBQU0sZUFBZSxXQUFXLFdBQVc7QUFDM0MsUUFBTSxPQUFPLFFBQVEsUUFBUSxhQUFhLE1BQU0sWUFBWTtBQUM1RCxNQUFJLFNBQVMsTUFBTTtBQUNqQixVQUFNLGdCQUFnQjtBQUFBLEVBQ3hCO0FBQ0EsUUFBTSxZQUFZO0FBQUEsSUFDaEIsTUFBTSxVQUFVLFVBQVU7QUFBQSxFQUM1QjtBQUNBLFFBQU0sTUFBTSxRQUFRLFNBQVMsUUFBUSxNQUFNLFFBQVEsU0FBUztBQUM1RCxRQUFNLFNBQVM7QUFDZixRQUFNLFVBQVUsUUFBUTtBQUN4QixRQUFNLGNBQWMsSUFBSSxZQUFZLEtBQUssUUFBUSxnQkFBZ0IsU0FBUyxRQUFRLEdBQUcsT0FBTztBQUM1RixjQUFZLFlBQVk7QUFDeEIsY0FBWSxVQUFVO0FBQ3RCLGNBQVksT0FBTyxLQUFLLFdBQVc7QUFDbkMsY0FBWSxlQUFlLG1CQUFtQixRQUFRO0FBQ3RELFNBQU87QUFDVDtBQVFBLElBQU0sd0JBQU4sTUFBNEI7QUFBQSxFQUMxQixZQUFZLFNBQVMsT0FBTyxXQUFXLFVBQVU7QUFDL0MsU0FBSyxVQUFVO0FBQ2YsU0FBSyxRQUFRO0FBQ2IsU0FBSyxZQUFZLENBQUMsQ0FBQztBQUNuQixTQUFLLFdBQVcsWUFBWTtBQUFBLEVBQzlCO0FBQ0Y7QUFDQSxTQUFTLG1CQUFtQixLQUFLLFNBQVM7QUFDeEMsTUFBSSxTQUFTO0FBQ2IsTUFBSTtBQUNGLGFBQVMsSUFBSSxrQkFBa0Isc0JBQXNCO0FBQUEsRUFDdkQsU0FBUyxHQUFHO0FBQ1YsaUJBQWEsS0FBSztBQUFBLEVBQ3BCO0FBQ0EsUUFBTSxnQkFBZ0IsV0FBVyxDQUFDLFFBQVE7QUFDMUMsZUFBYSxDQUFDLENBQUMsVUFBVSxjQUFjLFFBQVEsTUFBTSxNQUFNLEVBQUU7QUFDN0QsU0FBTztBQUNUO0FBQ0EsU0FBUyxzQkFBc0IsU0FBUyxVQUFVLFVBQVUsTUFBTSxVQUFVO0FBQzFFLFFBQU0sVUFBVSxTQUFTLG9CQUFvQjtBQUM3QyxRQUFNLG9CQUFvQixtQkFBbUIsVUFBVSxNQUFNLFFBQVE7QUFDckUsUUFBTSxZQUFZO0FBQUEsSUFDaEIsTUFBTSxrQkFBa0IsVUFBVTtBQUFBLEVBQ3BDO0FBQ0EsUUFBTSxNQUFNLFFBQVEsU0FBUyxRQUFRLE1BQU0sUUFBUSxTQUFTO0FBQzVELFFBQU0sU0FBUztBQUNmLFFBQU0sVUFBVTtBQUFBLElBQ2QsMEJBQTBCO0FBQUEsSUFDMUIseUJBQXlCO0FBQUEsSUFDekIsdUNBQXVDLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBQSxJQUNyRCxxQ0FBcUMsa0JBQWtCLGFBQWE7QUFBQSxJQUNwRSxnQkFBZ0I7QUFBQSxFQUNsQjtBQUNBLFFBQU0sT0FBTyxpQkFBaUIsbUJBQW1CLFFBQVE7QUFDekQsUUFBTSxVQUFVLFFBQVE7QUFDeEIsV0FBUyxRQUFRLEtBQUs7QUFDcEIsdUJBQW1CLEdBQUc7QUFDdEIsUUFBSUM7QUFDSixRQUFJO0FBQ0YsTUFBQUEsT0FBTSxJQUFJLGtCQUFrQixtQkFBbUI7QUFBQSxJQUNqRCxTQUFTLEdBQUc7QUFDVixtQkFBYSxLQUFLO0FBQUEsSUFDcEI7QUFDQSxpQkFBYSxTQUFTQSxJQUFHLENBQUM7QUFDMUIsV0FBT0E7QUFBQSxFQUNUO0FBQ0EsUUFBTSxjQUFjLElBQUksWUFBWSxLQUFLLFFBQVEsU0FBUyxPQUFPO0FBQ2pFLGNBQVksWUFBWTtBQUN4QixjQUFZLFVBQVU7QUFDdEIsY0FBWSxPQUFPO0FBQ25CLGNBQVksZUFBZSxtQkFBbUIsUUFBUTtBQUN0RCxTQUFPO0FBQ1Q7QUFJQSxTQUFTLHlCQUF5QixTQUFTLFVBQVUsS0FBSyxNQUFNO0FBQzlELFFBQU0sVUFBVTtBQUFBLElBQ2QseUJBQXlCO0FBQUEsRUFDM0I7QUFDQSxXQUFTLFFBQVEsS0FBSztBQUNwQixVQUFNLFNBQVMsbUJBQW1CLEtBQUssQ0FBQyxVQUFVLE9BQU8sQ0FBQztBQUMxRCxRQUFJLGFBQWE7QUFDakIsUUFBSTtBQUNGLG1CQUFhLElBQUksa0JBQWtCLDZCQUE2QjtBQUFBLElBQ2xFLFNBQVMsR0FBRztBQUNWLG1CQUFhLEtBQUs7QUFBQSxJQUNwQjtBQUNBLFFBQUksQ0FBQyxZQUFZO0FBRWYsbUJBQWEsS0FBSztBQUFBLElBQ3BCO0FBQ0EsVUFBTSxPQUFPLE9BQU8sVUFBVTtBQUM5QixpQkFBYSxDQUFDLE1BQU0sSUFBSSxDQUFDO0FBQ3pCLFdBQU8sSUFBSSxzQkFBc0IsTUFBTSxLQUFLLEtBQUssR0FBRyxXQUFXLE9BQU87QUFBQSxFQUN4RTtBQUNBLFFBQU0sU0FBUztBQUNmLFFBQU0sVUFBVSxRQUFRO0FBQ3hCLFFBQU0sY0FBYyxJQUFJLFlBQVksS0FBSyxRQUFRLFNBQVMsT0FBTztBQUNqRSxjQUFZLFVBQVU7QUFDdEIsY0FBWSxlQUFlLG1CQUFtQixRQUFRO0FBQ3RELFNBQU87QUFDVDtBQUtBLElBQU0sOEJBQThCLE1BQU07QUFVMUMsU0FBUyx3QkFBd0IsVUFBVSxTQUFTLEtBQUssTUFBTSxXQUFXLFVBQVUsUUFBUSxrQkFBa0I7QUFHNUcsUUFBTSxVQUFVLElBQUksc0JBQXNCLEdBQUcsQ0FBQztBQUM5QyxNQUFJLFFBQVE7QUFDVixZQUFRLFVBQVUsT0FBTztBQUN6QixZQUFRLFFBQVEsT0FBTztBQUFBLEVBQ3pCLE9BQU87QUFDTCxZQUFRLFVBQVU7QUFDbEIsWUFBUSxRQUFRLEtBQUssS0FBSztBQUFBLEVBQzVCO0FBQ0EsTUFBSSxLQUFLLEtBQUssTUFBTSxRQUFRLE9BQU87QUFDakMsVUFBTSxvQkFBb0I7QUFBQSxFQUM1QjtBQUNBLFFBQU0sWUFBWSxRQUFRLFFBQVEsUUFBUTtBQUMxQyxNQUFJLGdCQUFnQjtBQUNwQixNQUFJLFlBQVksR0FBRztBQUNqQixvQkFBZ0IsS0FBSyxJQUFJLGVBQWUsU0FBUztBQUFBLEVBQ25EO0FBQ0EsUUFBTSxZQUFZLFFBQVE7QUFDMUIsUUFBTSxVQUFVLFlBQVk7QUFDNUIsTUFBSSxnQkFBZ0I7QUFDcEIsTUFBSSxrQkFBa0IsR0FBRztBQUN2QixvQkFBZ0I7QUFBQSxFQUNsQixXQUFXLGNBQWMsZUFBZTtBQUN0QyxvQkFBZ0I7QUFBQSxFQUNsQixPQUFPO0FBQ0wsb0JBQWdCO0FBQUEsRUFDbEI7QUFDQSxRQUFNLFVBQVU7QUFBQSxJQUNkLHlCQUF5QjtBQUFBLElBQ3pCLHdCQUF3QixHQUFHLFFBQVEsT0FBTztBQUFBLEVBQzVDO0FBQ0EsUUFBTSxPQUFPLEtBQUssTUFBTSxXQUFXLE9BQU87QUFDMUMsTUFBSSxTQUFTLE1BQU07QUFDakIsVUFBTSxnQkFBZ0I7QUFBQSxFQUN4QjtBQUNBLFdBQVMsUUFBUSxLQUFLLE1BQU07QUFLMUIsVUFBTSxlQUFlLG1CQUFtQixLQUFLLENBQUMsVUFBVSxPQUFPLENBQUM7QUFDaEUsVUFBTSxhQUFhLFFBQVEsVUFBVTtBQUNyQyxVQUFNLE9BQU8sS0FBSyxLQUFLO0FBQ3ZCLFFBQUk7QUFDSixRQUFJLGlCQUFpQixTQUFTO0FBQzVCLGlCQUFXLGdCQUFnQixTQUFTLFFBQVEsRUFBRSxLQUFLLElBQUk7QUFBQSxJQUN6RCxPQUFPO0FBQ0wsaUJBQVc7QUFBQSxJQUNiO0FBQ0EsV0FBTyxJQUFJLHNCQUFzQixZQUFZLE1BQU0saUJBQWlCLFNBQVMsUUFBUTtBQUFBLEVBQ3ZGO0FBQ0EsUUFBTSxTQUFTO0FBQ2YsUUFBTSxVQUFVLFFBQVE7QUFDeEIsUUFBTSxjQUFjLElBQUksWUFBWSxLQUFLLFFBQVEsU0FBUyxPQUFPO0FBQ2pFLGNBQVksVUFBVTtBQUN0QixjQUFZLE9BQU8sS0FBSyxXQUFXO0FBQ25DLGNBQVksbUJBQW1CLG9CQUFvQjtBQUNuRCxjQUFZLGVBQWUsbUJBQW1CLFFBQVE7QUFDdEQsU0FBTztBQUNUO0FBMENBLElBQU0sWUFBWTtBQUFBO0FBQUEsRUFFaEIsU0FBUztBQUFBO0FBQUEsRUFFVCxRQUFRO0FBQUE7QUFBQSxFQUVSLFNBQVM7QUFBQTtBQUFBLEVBRVQsVUFBVTtBQUFBO0FBQUEsRUFFVixPQUFPO0FBQ1Q7QUFDQSxTQUFTLCtCQUErQixPQUFPO0FBQzdDLFVBQVEsT0FBTztBQUFBLElBQ2IsS0FBSztBQUFBLElBQ0wsS0FBSztBQUFBLElBQ0wsS0FBSztBQUNILGFBQU8sVUFBVTtBQUFBLElBQ25CLEtBQUs7QUFDSCxhQUFPLFVBQVU7QUFBQSxJQUNuQixLQUFLO0FBQ0gsYUFBTyxVQUFVO0FBQUEsSUFDbkIsS0FBSztBQUNILGFBQU8sVUFBVTtBQUFBLElBQ25CLEtBQUs7QUFDSCxhQUFPLFVBQVU7QUFBQSxJQUNuQjtBQUVFLGFBQU8sVUFBVTtBQUFBLEVBQ3JCO0FBQ0Y7QUFrQkEsSUFBTSxXQUFOLE1BQWU7QUFBQSxFQUNiLFlBQVksZ0JBQWdCLE9BQU8sVUFBVTtBQUMzQyxVQUFNLGNBQWMsV0FBVyxjQUFjLEtBQUssU0FBUyxRQUFRLFlBQVk7QUFDL0UsUUFBSSxhQUFhO0FBQ2YsV0FBSyxPQUFPO0FBQ1osV0FBSyxRQUFRLFVBQVUsUUFBUSxVQUFVLFNBQVMsUUFBUTtBQUMxRCxXQUFLLFdBQVcsYUFBYSxRQUFRLGFBQWEsU0FBUyxXQUFXO0FBQUEsSUFDeEUsT0FBTztBQUNMLFlBQU0sV0FBVztBQUNqQixXQUFLLE9BQU8sU0FBUztBQUNyQixXQUFLLFFBQVEsU0FBUztBQUN0QixXQUFLLFdBQVcsU0FBUztBQUFBLElBQzNCO0FBQUEsRUFDRjtBQUNGO0FBd0JBLFNBQVMsTUFBTSxHQUFHO0FBQ2hCLFNBQU8sSUFBSSxrQkFBa0I7QUFFM0IsWUFBUSxRQUFRLEVBQUUsS0FBSyxNQUFNLEVBQUUsR0FBRyxhQUFhLENBQUM7QUFBQSxFQUNsRDtBQUNGO0FBbUJBLElBQUksc0JBQXNCO0FBSzFCLElBQU0sZ0JBQU4sTUFBb0I7QUFBQSxFQUNsQixjQUFjO0FBQ1osU0FBSyxRQUFRO0FBQ2IsU0FBSyxPQUFPLElBQUksZUFBZTtBQUMvQixTQUFLLFFBQVE7QUFDYixTQUFLLGFBQWEsVUFBVTtBQUM1QixTQUFLLGVBQWUsSUFBSSxRQUFRLGFBQVc7QUFDekMsV0FBSyxLQUFLLGlCQUFpQixTQUFTLE1BQU07QUFDeEMsYUFBSyxhQUFhLFVBQVU7QUFDNUIsZ0JBQVE7QUFBQSxNQUNWLENBQUM7QUFDRCxXQUFLLEtBQUssaUJBQWlCLFNBQVMsTUFBTTtBQUN4QyxhQUFLLGFBQWEsVUFBVTtBQUM1QixnQkFBUTtBQUFBLE1BQ1YsQ0FBQztBQUNELFdBQUssS0FBSyxpQkFBaUIsUUFBUSxNQUFNO0FBQ3ZDLGdCQUFRO0FBQUEsTUFDVixDQUFDO0FBQUEsSUFDSCxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsS0FBSyxLQUFLLFFBQVEsTUFBTSxTQUFTO0FBQy9CLFFBQUksS0FBSyxPQUFPO0FBQ2QsWUFBTSxjQUFjLCtCQUErQjtBQUFBLElBQ3JEO0FBQ0EsU0FBSyxRQUFRO0FBQ2IsU0FBSyxLQUFLLEtBQUssUUFBUSxLQUFLLElBQUk7QUFDaEMsUUFBSSxZQUFZLFFBQVc7QUFDekIsaUJBQVcsT0FBTyxTQUFTO0FBQ3pCLFlBQUksUUFBUSxlQUFlLEdBQUcsR0FBRztBQUMvQixlQUFLLEtBQUssaUJBQWlCLEtBQUssUUFBUSxHQUFHLEVBQUUsU0FBUyxDQUFDO0FBQUEsUUFDekQ7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUNBLFFBQUksU0FBUyxRQUFXO0FBQ3RCLFdBQUssS0FBSyxLQUFLLElBQUk7QUFBQSxJQUNyQixPQUFPO0FBQ0wsV0FBSyxLQUFLLEtBQUs7QUFBQSxJQUNqQjtBQUNBLFdBQU8sS0FBSztBQUFBLEVBQ2Q7QUFBQSxFQUNBLGVBQWU7QUFDYixRQUFJLENBQUMsS0FBSyxPQUFPO0FBQ2YsWUFBTSxjQUFjLHVDQUF1QztBQUFBLElBQzdEO0FBQ0EsV0FBTyxLQUFLO0FBQUEsRUFDZDtBQUFBLEVBQ0EsWUFBWTtBQUNWLFFBQUksQ0FBQyxLQUFLLE9BQU87QUFDZixZQUFNLGNBQWMsb0NBQW9DO0FBQUEsSUFDMUQ7QUFDQSxRQUFJO0FBQ0YsYUFBTyxLQUFLLEtBQUs7QUFBQSxJQUNuQixTQUFTLEdBQUc7QUFDVixhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGNBQWM7QUFDWixRQUFJLENBQUMsS0FBSyxPQUFPO0FBQ2YsWUFBTSxjQUFjLHNDQUFzQztBQUFBLElBQzVEO0FBQ0EsV0FBTyxLQUFLLEtBQUs7QUFBQSxFQUNuQjtBQUFBLEVBQ0EsZUFBZTtBQUNiLFFBQUksQ0FBQyxLQUFLLE9BQU87QUFDZixZQUFNLGNBQWMsdUNBQXVDO0FBQUEsSUFDN0Q7QUFDQSxXQUFPLEtBQUssS0FBSztBQUFBLEVBQ25CO0FBQUE7QUFBQSxFQUVBLFFBQVE7QUFDTixTQUFLLEtBQUssTUFBTTtBQUFBLEVBQ2xCO0FBQUEsRUFDQSxrQkFBa0IsUUFBUTtBQUN4QixXQUFPLEtBQUssS0FBSyxrQkFBa0IsTUFBTTtBQUFBLEVBQzNDO0FBQUEsRUFDQSwwQkFBMEIsVUFBVTtBQUNsQyxRQUFJLEtBQUssS0FBSyxVQUFVLE1BQU07QUFDNUIsV0FBSyxLQUFLLE9BQU8saUJBQWlCLFlBQVksUUFBUTtBQUFBLElBQ3hEO0FBQUEsRUFDRjtBQUFBLEVBQ0EsNkJBQTZCLFVBQVU7QUFDckMsUUFBSSxLQUFLLEtBQUssVUFBVSxNQUFNO0FBQzVCLFdBQUssS0FBSyxPQUFPLG9CQUFvQixZQUFZLFFBQVE7QUFBQSxJQUMzRDtBQUFBLEVBQ0Y7QUFDRjtBQUNBLElBQU0sb0JBQU4sY0FBZ0MsY0FBYztBQUFBLEVBQzVDLFVBQVU7QUFDUixTQUFLLEtBQUssZUFBZTtBQUFBLEVBQzNCO0FBQ0Y7QUFDQSxTQUFTLG9CQUFvQjtBQUMzQixTQUFPLHNCQUFzQixvQkFBb0IsSUFBSSxJQUFJLGtCQUFrQjtBQUM3RTtBQUNBLElBQU0scUJBQU4sY0FBaUMsY0FBYztBQUFBLEVBQzdDLFVBQVU7QUFDUixTQUFLLEtBQUssZUFBZTtBQUFBLEVBQzNCO0FBQ0Y7QUFDQSxTQUFTLHFCQUFxQjtBQUM1QixTQUFPLElBQUksbUJBQW1CO0FBQ2hDO0FBQ0EsSUFBTSxvQkFBTixjQUFnQyxjQUFjO0FBQUEsRUFDNUMsVUFBVTtBQUNSLFNBQUssS0FBSyxlQUFlO0FBQUEsRUFDM0I7QUFDRjtBQUNBLFNBQVMsb0JBQW9CO0FBQzNCLFNBQU8sSUFBSSxrQkFBa0I7QUFDL0I7QUF1QkEsSUFBTSxhQUFOLE1BQWlCO0FBQUEsRUFDZiw4QkFBOEI7QUFDNUIsV0FBTyxLQUFLLFlBQVksS0FBSztBQUFBLEVBQy9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsWUFBWUMsTUFBSyxNQUFNLFdBQVcsTUFBTTtBQUl0QyxTQUFLLGVBQWU7QUFDcEIsU0FBSyxxQkFBcUI7QUFDMUIsU0FBSyx1QkFBdUI7QUFDNUIsU0FBSyxhQUFhLENBQUM7QUFDbkIsU0FBSyxTQUFTO0FBQ2QsU0FBSyxhQUFhO0FBQ2xCLFNBQUssV0FBVztBQUNoQixTQUFLLG1CQUFtQjtBQUN4QixTQUFLLFdBQVc7QUFDaEIsU0FBSyxVQUFVO0FBQ2YsU0FBSyxPQUFPQTtBQUNaLFNBQUssUUFBUTtBQUNiLFNBQUssWUFBWTtBQUNqQixTQUFLLFlBQVksWUFBWTtBQUM3QixTQUFLLGFBQWEsS0FBSyxtQkFBbUIsS0FBSyxLQUFLO0FBQ3BELFNBQUssU0FBUztBQUNkLFNBQUssZ0JBQWdCLFdBQVM7QUFDNUIsV0FBSyxXQUFXO0FBQ2hCLFdBQUssbUJBQW1CO0FBQ3hCLFVBQUksTUFBTSxZQUFZLGlCQUFpQixRQUFRLEdBQUc7QUFDaEQsYUFBSyxxQkFBcUI7QUFDMUIsYUFBSyxxQkFBcUI7QUFBQSxNQUM1QixPQUFPO0FBQ0wsY0FBTSxpQkFBaUIsS0FBSyw0QkFBNEI7QUFDeEQsWUFBSSxrQkFBa0IsTUFBTSxRQUFRLENBQUMsQ0FBQyxHQUFHO0FBQ3ZDLGNBQUksZ0JBQWdCO0FBQ2xCLG9CQUFRLG1CQUFtQjtBQUFBLFVBQzdCLE9BQU87QUFDTCxpQkFBSyxZQUFZLEtBQUssSUFBSSxLQUFLLFlBQVksR0FBRyw2QkFBNkI7QUFDM0UsaUJBQUsscUJBQXFCO0FBQzFCLGlCQUFLLHFCQUFxQjtBQUMxQjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQ0EsYUFBSyxTQUFTO0FBQ2QsYUFBSztBQUFBLFVBQVk7QUFBQTtBQUFBLFFBQXFDO0FBQUEsTUFDeEQ7QUFBQSxJQUNGO0FBQ0EsU0FBSyx3QkFBd0IsV0FBUztBQUNwQyxXQUFLLFdBQVc7QUFDaEIsVUFBSSxNQUFNLFlBQVksaUJBQWlCLFFBQVEsR0FBRztBQUNoRCxhQUFLLHFCQUFxQjtBQUFBLE1BQzVCLE9BQU87QUFDTCxhQUFLLFNBQVM7QUFDZCxhQUFLO0FBQUEsVUFBWTtBQUFBO0FBQUEsUUFBcUM7QUFBQSxNQUN4RDtBQUFBLElBQ0Y7QUFDQSxTQUFLLFlBQVk7QUFDakIsU0FBSyxlQUFlLEtBQUssS0FBSyxRQUFRO0FBQ3RDLFNBQUssV0FBVyxJQUFJLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFDL0MsV0FBSyxXQUFXO0FBQ2hCLFdBQUssVUFBVTtBQUNmLFdBQUssT0FBTztBQUFBLElBQ2QsQ0FBQztBQUdELFNBQUssU0FBUyxLQUFLLE1BQU0sTUFBTTtBQUFBLElBQUMsQ0FBQztBQUFBLEVBQ25DO0FBQUEsRUFDQSx3QkFBd0I7QUFDdEIsVUFBTSxhQUFhLEtBQUs7QUFDeEIsV0FBTyxZQUFVLEtBQUssZ0JBQWdCLGFBQWEsTUFBTTtBQUFBLEVBQzNEO0FBQUEsRUFDQSxtQkFBbUIsTUFBTTtBQUN2QixXQUFPLEtBQUssS0FBSyxJQUFJLE1BQU07QUFBQSxFQUM3QjtBQUFBLEVBQ0EsU0FBUztBQUNQLFFBQUksS0FBSyxXQUFXLFdBQTJDO0FBRTdEO0FBQUEsSUFDRjtBQUNBLFFBQUksS0FBSyxhQUFhLFFBQVc7QUFDL0I7QUFBQSxJQUNGO0FBQ0EsUUFBSSxLQUFLLFlBQVk7QUFDbkIsVUFBSSxLQUFLLGVBQWUsUUFBVztBQUNqQyxhQUFLLGlCQUFpQjtBQUFBLE1BQ3hCLE9BQU87QUFDTCxZQUFJLEtBQUssb0JBQW9CO0FBQzNCLGVBQUssYUFBYTtBQUFBLFFBQ3BCLE9BQU87QUFDTCxjQUFJLEtBQUssc0JBQXNCO0FBRTdCLGlCQUFLLGVBQWU7QUFBQSxVQUN0QixPQUFPO0FBQ0wsaUJBQUssaUJBQWlCLFdBQVcsTUFBTTtBQUNyQyxtQkFBSyxpQkFBaUI7QUFDdEIsbUJBQUssZ0JBQWdCO0FBQUEsWUFDdkIsR0FBRyxLQUFLLFNBQVM7QUFBQSxVQUNuQjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixPQUFPO0FBQ0wsV0FBSyxlQUFlO0FBQUEsSUFDdEI7QUFBQSxFQUNGO0FBQUEsRUFDQSxjQUFjLFVBQVU7QUFFdEIsWUFBUSxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsY0FBYyxHQUFHLEtBQUssS0FBSyxRQUFRLGtCQUFrQixDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxXQUFXLGFBQWEsTUFBTTtBQUMzSCxjQUFRLEtBQUssUUFBUTtBQUFBLFFBQ25CLEtBQUs7QUFDSCxtQkFBUyxXQUFXLGFBQWE7QUFDakM7QUFBQSxRQUNGLEtBQUs7QUFDSCxlQUFLO0FBQUEsWUFBWTtBQUFBO0FBQUEsVUFBMkM7QUFDNUQ7QUFBQSxRQUNGLEtBQUs7QUFDSCxlQUFLO0FBQUEsWUFBWTtBQUFBO0FBQUEsVUFBdUM7QUFDeEQ7QUFBQSxNQUNKO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBO0FBQUEsRUFFQSxtQkFBbUI7QUFDakIsU0FBSyxjQUFjLENBQUMsV0FBVyxrQkFBa0I7QUFDL0MsWUFBTSxjQUFjLHNCQUFzQixLQUFLLEtBQUssU0FBUyxLQUFLLEtBQUssV0FBVyxLQUFLLFdBQVcsS0FBSyxPQUFPLEtBQUssU0FBUztBQUM1SCxZQUFNLGdCQUFnQixLQUFLLEtBQUssUUFBUSxhQUFhLGFBQWEsbUJBQW1CLFdBQVcsYUFBYTtBQUM3RyxXQUFLLFdBQVc7QUFDaEIsb0JBQWMsV0FBVyxFQUFFLEtBQUssU0FBTztBQUNyQyxhQUFLLFdBQVc7QUFDaEIsYUFBSyxhQUFhO0FBQ2xCLGFBQUsscUJBQXFCO0FBQzFCLGFBQUsscUJBQXFCO0FBQUEsTUFDNUIsR0FBRyxLQUFLLGFBQWE7QUFBQSxJQUN2QixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsZUFBZTtBQUViLFVBQU0sTUFBTSxLQUFLO0FBQ2pCLFNBQUssY0FBYyxDQUFDLFdBQVcsa0JBQWtCO0FBQy9DLFlBQU0sY0FBYyx5QkFBeUIsS0FBSyxLQUFLLFNBQVMsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUs7QUFDcEcsWUFBTSxnQkFBZ0IsS0FBSyxLQUFLLFFBQVEsYUFBYSxhQUFhLG1CQUFtQixXQUFXLGFBQWE7QUFDN0csV0FBSyxXQUFXO0FBQ2hCLG9CQUFjLFdBQVcsRUFBRSxLQUFLLFlBQVU7QUFDeEMsaUJBQVM7QUFDVCxhQUFLLFdBQVc7QUFDaEIsYUFBSyxnQkFBZ0IsT0FBTyxPQUFPO0FBQ25DLGFBQUsscUJBQXFCO0FBQzFCLFlBQUksT0FBTyxXQUFXO0FBQ3BCLGVBQUssdUJBQXVCO0FBQUEsUUFDOUI7QUFDQSxhQUFLLHFCQUFxQjtBQUFBLE1BQzVCLEdBQUcsS0FBSyxhQUFhO0FBQUEsSUFDdkIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLGtCQUFrQjtBQUNoQixVQUFNLFlBQVksOEJBQThCLEtBQUs7QUFDckQsVUFBTSxTQUFTLElBQUksc0JBQXNCLEtBQUssY0FBYyxLQUFLLE1BQU0sS0FBSyxDQUFDO0FBRTdFLFVBQU0sTUFBTSxLQUFLO0FBQ2pCLFNBQUssY0FBYyxDQUFDLFdBQVcsa0JBQWtCO0FBQy9DLFVBQUk7QUFDSixVQUFJO0FBQ0Ysc0JBQWMsd0JBQXdCLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxTQUFTLEtBQUssS0FBSyxPQUFPLFdBQVcsS0FBSyxXQUFXLFFBQVEsS0FBSyxzQkFBc0IsQ0FBQztBQUFBLE1BQ2hLLFNBQVMsR0FBRztBQUNWLGFBQUssU0FBUztBQUNkLGFBQUs7QUFBQSxVQUFZO0FBQUE7QUFBQSxRQUFxQztBQUN0RDtBQUFBLE1BQ0Y7QUFDQSxZQUFNLGdCQUFnQixLQUFLLEtBQUssUUFBUTtBQUFBLFFBQWE7QUFBQSxRQUFhO0FBQUEsUUFBbUI7QUFBQSxRQUFXO0FBQUE7QUFBQSxRQUF5QjtBQUFBO0FBQUEsTUFDekg7QUFDQSxXQUFLLFdBQVc7QUFDaEIsb0JBQWMsV0FBVyxFQUFFLEtBQUssZUFBYTtBQUMzQyxhQUFLLG9CQUFvQjtBQUN6QixhQUFLLFdBQVc7QUFDaEIsYUFBSyxnQkFBZ0IsVUFBVSxPQUFPO0FBQ3RDLFlBQUksVUFBVSxXQUFXO0FBQ3ZCLGVBQUssWUFBWSxVQUFVO0FBQzNCLGVBQUs7QUFBQSxZQUFZO0FBQUE7QUFBQSxVQUF5QztBQUFBLFFBQzVELE9BQU87QUFDTCxlQUFLLHFCQUFxQjtBQUFBLFFBQzVCO0FBQUEsTUFDRixHQUFHLEtBQUssYUFBYTtBQUFBLElBQ3ZCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxzQkFBc0I7QUFDcEIsVUFBTSxjQUFjLDhCQUE4QixLQUFLO0FBRXZELFFBQUksY0FBYyxJQUFJLEtBQUssT0FBTyxNQUFNO0FBQ3RDLFdBQUssb0JBQW9CO0FBQUEsSUFDM0I7QUFBQSxFQUNGO0FBQUEsRUFDQSxpQkFBaUI7QUFDZixTQUFLLGNBQWMsQ0FBQyxXQUFXLGtCQUFrQjtBQUMvQyxZQUFNLGNBQWMsY0FBYyxLQUFLLEtBQUssU0FBUyxLQUFLLEtBQUssV0FBVyxLQUFLLFNBQVM7QUFDeEYsWUFBTSxrQkFBa0IsS0FBSyxLQUFLLFFBQVEsYUFBYSxhQUFhLG1CQUFtQixXQUFXLGFBQWE7QUFDL0csV0FBSyxXQUFXO0FBQ2hCLHNCQUFnQixXQUFXLEVBQUUsS0FBSyxjQUFZO0FBQzVDLGFBQUssV0FBVztBQUNoQixhQUFLLFlBQVk7QUFDakIsYUFBSztBQUFBLFVBQVk7QUFBQTtBQUFBLFFBQXlDO0FBQUEsTUFDNUQsR0FBRyxLQUFLLHFCQUFxQjtBQUFBLElBQy9CLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxpQkFBaUI7QUFDZixTQUFLLGNBQWMsQ0FBQyxXQUFXLGtCQUFrQjtBQUMvQyxZQUFNLGNBQWMsZ0JBQWdCLEtBQUssS0FBSyxTQUFTLEtBQUssS0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLLE9BQU8sS0FBSyxTQUFTO0FBQ3RILFlBQU0sbUJBQW1CLEtBQUssS0FBSyxRQUFRLGFBQWEsYUFBYSxtQkFBbUIsV0FBVyxhQUFhO0FBQ2hILFdBQUssV0FBVztBQUNoQix1QkFBaUIsV0FBVyxFQUFFLEtBQUssY0FBWTtBQUM3QyxhQUFLLFdBQVc7QUFDaEIsYUFBSyxZQUFZO0FBQ2pCLGFBQUssZ0JBQWdCLEtBQUssTUFBTSxLQUFLLENBQUM7QUFDdEMsYUFBSztBQUFBLFVBQVk7QUFBQTtBQUFBLFFBQXlDO0FBQUEsTUFDNUQsR0FBRyxLQUFLLGFBQWE7QUFBQSxJQUN2QixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsZ0JBQWdCLGFBQWE7QUFDM0IsVUFBTSxNQUFNLEtBQUs7QUFDakIsU0FBSyxlQUFlO0FBSXBCLFFBQUksS0FBSyxpQkFBaUIsS0FBSztBQUM3QixXQUFLLGlCQUFpQjtBQUFBLElBQ3hCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsWUFBWSxPQUFPO0FBQ2pCLFFBQUksS0FBSyxXQUFXLE9BQU87QUFDekI7QUFBQSxJQUNGO0FBQ0EsWUFBUSxPQUFPO0FBQUEsTUFDYixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBSUgsYUFBSyxTQUFTO0FBQ2QsWUFBSSxLQUFLLGFBQWEsUUFBVztBQUMvQixlQUFLLFNBQVMsT0FBTztBQUFBLFFBQ3ZCLFdBQVcsS0FBSyxnQkFBZ0I7QUFDOUIsdUJBQWEsS0FBSyxjQUFjO0FBQ2hDLGVBQUssaUJBQWlCO0FBQ3RCLGVBQUsscUJBQXFCO0FBQUEsUUFDNUI7QUFDQTtBQUFBLE1BQ0YsS0FBSztBQUlILGNBQU0sWUFBWSxLQUFLLFdBQVc7QUFDbEMsYUFBSyxTQUFTO0FBQ2QsWUFBSSxXQUFXO0FBQ2IsZUFBSyxpQkFBaUI7QUFDdEIsZUFBSyxPQUFPO0FBQUEsUUFDZDtBQUNBO0FBQUEsTUFDRixLQUFLO0FBR0gsYUFBSyxTQUFTO0FBQ2QsYUFBSyxpQkFBaUI7QUFDdEI7QUFBQSxNQUNGLEtBQUs7QUFJSCxhQUFLLFNBQVMsU0FBUztBQUN2QixhQUFLLFNBQVM7QUFDZCxhQUFLLGlCQUFpQjtBQUN0QjtBQUFBLE1BQ0YsS0FBSztBQUtILGFBQUssU0FBUztBQUNkLGFBQUssaUJBQWlCO0FBQ3RCO0FBQUEsTUFDRixLQUFLO0FBS0gsYUFBSyxTQUFTO0FBQ2QsYUFBSyxpQkFBaUI7QUFDdEI7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUFBLEVBQ0EsdUJBQXVCO0FBQ3JCLFlBQVEsS0FBSyxRQUFRO0FBQUEsTUFDbkIsS0FBSztBQUNILGFBQUs7QUFBQSxVQUFZO0FBQUE7QUFBQSxRQUF1QztBQUN4RDtBQUFBLE1BQ0YsS0FBSztBQUNILGFBQUs7QUFBQSxVQUFZO0FBQUE7QUFBQSxRQUEyQztBQUM1RDtBQUFBLE1BQ0YsS0FBSztBQUNILGFBQUssT0FBTztBQUNaO0FBQUEsSUFDSjtBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlBLElBQUksV0FBVztBQUNiLFVBQU0sZ0JBQWdCLCtCQUErQixLQUFLLE1BQU07QUFDaEUsV0FBTztBQUFBLE1BQ0wsa0JBQWtCLEtBQUs7QUFBQSxNQUN2QixZQUFZLEtBQUssTUFBTSxLQUFLO0FBQUEsTUFDNUIsT0FBTztBQUFBLE1BQ1AsVUFBVSxLQUFLO0FBQUEsTUFDZixNQUFNO0FBQUEsTUFDTixLQUFLLEtBQUs7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWtCQSxHQUFHLE1BQU0sZ0JBQWdCLE9BQU8sV0FBVztBQUV6QyxVQUFNLFdBQVcsSUFBSSxTQUFTLGtCQUFrQixRQUFXLFNBQVMsUUFBVyxhQUFhLE1BQVM7QUFDckcsU0FBSyxhQUFhLFFBQVE7QUFDMUIsV0FBTyxNQUFNO0FBQ1gsV0FBSyxnQkFBZ0IsUUFBUTtBQUFBLElBQy9CO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsS0FBSyxhQUFhLFlBQVk7QUFHNUIsV0FBTyxLQUFLLFNBQVMsS0FBSyxhQUFhLFVBQVU7QUFBQSxFQUNuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSUEsTUFBTSxZQUFZO0FBQ2hCLFdBQU8sS0FBSyxLQUFLLE1BQU0sVUFBVTtBQUFBLEVBQ25DO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJQSxhQUFhLFVBQVU7QUFDckIsU0FBSyxXQUFXLEtBQUssUUFBUTtBQUM3QixTQUFLLGdCQUFnQixRQUFRO0FBQUEsRUFDL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlBLGdCQUFnQixVQUFVO0FBQ3hCLFVBQU0sSUFBSSxLQUFLLFdBQVcsUUFBUSxRQUFRO0FBQzFDLFFBQUksTUFBTSxJQUFJO0FBQ1osV0FBSyxXQUFXLE9BQU8sR0FBRyxDQUFDO0FBQUEsSUFDN0I7QUFBQSxFQUNGO0FBQUEsRUFDQSxtQkFBbUI7QUFDakIsU0FBSyxlQUFlO0FBQ3BCLFVBQU0sWUFBWSxLQUFLLFdBQVcsTUFBTTtBQUN4QyxjQUFVLFFBQVEsY0FBWTtBQUM1QixXQUFLLGdCQUFnQixRQUFRO0FBQUEsSUFDL0IsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLGlCQUFpQjtBQUNmLFFBQUksS0FBSyxhQUFhLFFBQVc7QUFDL0IsVUFBSSxZQUFZO0FBQ2hCLGNBQVEsK0JBQStCLEtBQUssTUFBTSxHQUFHO0FBQUEsUUFDbkQsS0FBSyxVQUFVO0FBQ2IsZ0JBQU0sS0FBSyxTQUFTLEtBQUssTUFBTSxLQUFLLFFBQVEsR0FBRztBQUMvQztBQUFBLFFBQ0YsS0FBSyxVQUFVO0FBQUEsUUFDZixLQUFLLFVBQVU7QUFDYixnQkFBTSxTQUFTLEtBQUs7QUFDcEIsZ0JBQU0sT0FBTyxLQUFLLE1BQU0sS0FBSyxNQUFNLEdBQUc7QUFDdEM7QUFBQSxRQUNGO0FBQ0Usc0JBQVk7QUFDWjtBQUFBLE1BQ0o7QUFDQSxVQUFJLFdBQVc7QUFDYixhQUFLLFdBQVc7QUFDaEIsYUFBSyxVQUFVO0FBQUEsTUFDakI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsZ0JBQWdCLFVBQVU7QUFDeEIsVUFBTSxnQkFBZ0IsK0JBQStCLEtBQUssTUFBTTtBQUNoRSxZQUFRLGVBQWU7QUFBQSxNQUNyQixLQUFLLFVBQVU7QUFBQSxNQUNmLEtBQUssVUFBVTtBQUNiLFlBQUksU0FBUyxNQUFNO0FBQ2pCLGdCQUFNLFNBQVMsS0FBSyxLQUFLLFVBQVUsS0FBSyxRQUFRLEdBQUc7QUFBQSxRQUNyRDtBQUNBO0FBQUEsTUFDRixLQUFLLFVBQVU7QUFDYixZQUFJLFNBQVMsVUFBVTtBQUNyQixnQkFBTSxTQUFTLFNBQVMsS0FBSyxRQUFRLEdBQUc7QUFBQSxRQUMxQztBQUNBO0FBQUEsTUFDRixLQUFLLFVBQVU7QUFBQSxNQUNmLEtBQUssVUFBVTtBQUNiLFlBQUksU0FBUyxPQUFPO0FBQ2xCLGdCQUFNLFNBQVMsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEdBQUc7QUFBQSxRQUNwRDtBQUNBO0FBQUEsTUFDRjtBQUVFLFlBQUksU0FBUyxPQUFPO0FBQ2xCLGdCQUFNLFNBQVMsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEdBQUc7QUFBQSxRQUNwRDtBQUFBLElBQ0o7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFNBQVM7QUFDUCxVQUFNLFFBQVEsS0FBSyxXQUFXLFlBQTJDLEtBQUssV0FBVztBQUN6RixRQUFJLE9BQU87QUFDVCxXQUFLO0FBQUEsUUFBWTtBQUFBO0FBQUEsTUFBeUM7QUFBQSxJQUM1RDtBQUNBLFdBQU87QUFBQSxFQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFFBQVE7QUFDTixVQUFNLFFBQVEsS0FBSyxXQUFXO0FBQzlCLFFBQUksT0FBTztBQUNULFdBQUs7QUFBQSxRQUFZO0FBQUE7QUFBQSxNQUF5QztBQUFBLElBQzVEO0FBQ0EsV0FBTztBQUFBLEVBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxTQUFTO0FBQ1AsVUFBTSxRQUFRLEtBQUssV0FBVyxhQUE2QyxLQUFLLFdBQVc7QUFDM0YsUUFBSSxPQUFPO0FBQ1QsV0FBSztBQUFBLFFBQVk7QUFBQTtBQUFBLE1BQTZDO0FBQUEsSUFDaEU7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUNGO0FBOEJBLElBQU0sWUFBTixNQUFNLFdBQVU7QUFBQSxFQUNkLFlBQVksVUFBVSxVQUFVO0FBQzlCLFNBQUssV0FBVztBQUNoQixRQUFJLG9CQUFvQixVQUFVO0FBQ2hDLFdBQUssWUFBWTtBQUFBLElBQ25CLE9BQU87QUFDTCxXQUFLLFlBQVksU0FBUyxZQUFZLFVBQVUsU0FBUyxJQUFJO0FBQUEsSUFDL0Q7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsV0FBVztBQUNULFdBQU8sVUFBVSxLQUFLLFVBQVUsU0FBUyxNQUFNLEtBQUssVUFBVTtBQUFBLEVBQ2hFO0FBQUEsRUFDQSxRQUFRLFNBQVMsVUFBVTtBQUN6QixXQUFPLElBQUksV0FBVSxTQUFTLFFBQVE7QUFBQSxFQUN4QztBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSUEsSUFBSSxPQUFPO0FBQ1QsVUFBTSxXQUFXLElBQUksU0FBUyxLQUFLLFVBQVUsUUFBUSxFQUFFO0FBQ3ZELFdBQU8sS0FBSyxRQUFRLEtBQUssVUFBVSxRQUFRO0FBQUEsRUFDN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlBLElBQUksU0FBUztBQUNYLFdBQU8sS0FBSyxVQUFVO0FBQUEsRUFDeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlBLElBQUksV0FBVztBQUNiLFdBQU8sS0FBSyxVQUFVO0FBQUEsRUFDeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsSUFBSSxPQUFPO0FBQ1QsV0FBTyxjQUFjLEtBQUssVUFBVSxJQUFJO0FBQUEsRUFDMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlBLElBQUksVUFBVTtBQUNaLFdBQU8sS0FBSztBQUFBLEVBQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsSUFBSSxTQUFTO0FBQ1gsVUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLElBQUk7QUFDMUMsUUFBSSxZQUFZLE1BQU07QUFDcEIsYUFBTztBQUFBLElBQ1Q7QUFDQSxVQUFNLFdBQVcsSUFBSSxTQUFTLEtBQUssVUFBVSxRQUFRLE9BQU87QUFDNUQsV0FBTyxJQUFJLFdBQVUsS0FBSyxVQUFVLFFBQVE7QUFBQSxFQUM5QztBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSUEsYUFBYUMsT0FBTTtBQUNqQixRQUFJLEtBQUssVUFBVSxTQUFTLElBQUk7QUFDOUIsWUFBTSxxQkFBcUJBLEtBQUk7QUFBQSxJQUNqQztBQUFBLEVBQ0Y7QUFDRjtBQUtBLFNBQVMsaUJBQWlCRCxNQUFLLHNCQUFzQjtBQUNuRCxFQUFBQSxLQUFJLGFBQWEsVUFBVTtBQUMzQixRQUFNLGNBQWMsV0FBV0EsS0FBSSxTQUFTQSxLQUFJLFdBQVcsb0JBQW9CO0FBQy9FLFNBQU9BLEtBQUksUUFBUSxzQkFBc0IsYUFBYSxrQkFBa0IsRUFBRSxLQUFLLFdBQVMseUJBQXlCO0FBQUE7QUFBQSxJQUVqSCxNQUFNLE1BQU0sR0FBRyxvQkFBb0I7QUFBQSxNQUFJLEtBQUs7QUFDOUM7QUFLQSxTQUFTLGdCQUFnQkEsTUFBSyxzQkFBc0I7QUFDbEQsRUFBQUEsS0FBSSxhQUFhLFNBQVM7QUFDMUIsUUFBTSxjQUFjLFdBQVdBLEtBQUksU0FBU0EsS0FBSSxXQUFXLG9CQUFvQjtBQUMvRSxTQUFPQSxLQUFJLFFBQVEsc0JBQXNCLGFBQWEsaUJBQWlCLEVBQUUsS0FBSyxVQUFRLHlCQUF5QjtBQUFBO0FBQUEsSUFFL0csS0FBSyxNQUFNLEdBQUcsb0JBQW9CO0FBQUEsTUFBSSxJQUFJO0FBQzVDO0FBVUEsU0FBUyxjQUFjQSxNQUFLLE1BQU0sVUFBVTtBQUMxQyxFQUFBQSxLQUFJLGFBQWEsYUFBYTtBQUM5QixRQUFNLGNBQWMsZ0JBQWdCQSxLQUFJLFNBQVNBLEtBQUksV0FBVyxZQUFZLEdBQUcsSUFBSSxRQUFRLE1BQU0sSUFBSSxHQUFHLFFBQVE7QUFDaEgsU0FBT0EsS0FBSSxRQUFRLHNCQUFzQixhQUFhLGlCQUFpQixFQUFFLEtBQUssbUJBQWlCO0FBQzdGLFdBQU87QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLEtBQUFBO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQztBQUNIO0FBVUEsU0FBUyx1QkFBdUJBLE1BQUssTUFBTSxVQUFVO0FBQ25ELEVBQUFBLEtBQUksYUFBYSxzQkFBc0I7QUFDdkMsU0FBTyxJQUFJLFdBQVdBLE1BQUssSUFBSSxRQUFRLElBQUksR0FBRyxRQUFRO0FBQ3hEO0FBV0EsU0FBUyxlQUFlQSxNQUFLLE9BQU8sU0FBUyxhQUFhLEtBQUssVUFBVTtBQUN2RSxFQUFBQSxLQUFJLGFBQWEsY0FBYztBQUMvQixRQUFNLE9BQU8sZUFBZSxRQUFRLEtBQUs7QUFDekMsUUFBTSxnQkFBZ0IsT0FBTyxPQUFPLENBQUMsR0FBRyxRQUFRO0FBQ2hELE1BQUksY0FBYyxhQUFhLEtBQUssUUFBUSxLQUFLLGVBQWUsTUFBTTtBQUNwRSxrQkFBYyxhQUFhLElBQUksS0FBSztBQUFBLEVBQ3RDO0FBQ0EsU0FBTyxjQUFjQSxNQUFLLEtBQUssTUFBTSxhQUFhO0FBQ3BEO0FBb0JBLFNBQVMsVUFBVUEsTUFBSztBQUN0QixRQUFNLGNBQWM7QUFBQSxJQUNsQixVQUFVLENBQUM7QUFBQSxJQUNYLE9BQU8sQ0FBQztBQUFBLEVBQ1Y7QUFDQSxTQUFPLGNBQWNBLE1BQUssV0FBVyxFQUFFLEtBQUssTUFBTSxXQUFXO0FBQy9EO0FBT0EsU0FBZSxjQUFjQSxNQUFLLGFBQWEsV0FBVztBQUFBO0FBQ3hELFVBQU0sTUFBTTtBQUFBO0FBQUEsTUFFVjtBQUFBLElBQ0Y7QUFDQSxVQUFNLFdBQVcsTUFBTSxPQUFPQSxNQUFLLEdBQUc7QUFDdEMsZ0JBQVksU0FBUyxLQUFLLEdBQUcsU0FBUyxRQUFRO0FBQzlDLGdCQUFZLE1BQU0sS0FBSyxHQUFHLFNBQVMsS0FBSztBQUN4QyxRQUFJLFNBQVMsaUJBQWlCLE1BQU07QUFDbEMsWUFBTSxjQUFjQSxNQUFLLGFBQWEsU0FBUyxhQUFhO0FBQUEsSUFDOUQ7QUFBQSxFQUNGO0FBQUE7QUF1QkEsU0FBUyxPQUFPQSxNQUFLLFNBQVM7QUFDNUIsTUFBSSxXQUFXLE1BQU07QUFDbkIsUUFBSSxPQUFPLFFBQVEsZUFBZSxVQUFVO0FBQzFDO0FBQUEsUUFBZTtBQUFBO0FBQUEsUUFBcUM7QUFBQTtBQUFBLFFBQWtCO0FBQUEsUUFBTSxRQUFRO0FBQUEsTUFBVTtBQUFBLElBQ2hHO0FBQUEsRUFDRjtBQUNBLFFBQU0sS0FBSyxXQUFXLENBQUM7QUFDdkIsUUFBTSxjQUFjO0FBQUEsSUFBT0EsS0FBSTtBQUFBLElBQVNBLEtBQUk7QUFBQTtBQUFBLElBQTBCO0FBQUEsSUFBSyxHQUFHO0FBQUEsSUFBVyxHQUFHO0FBQUEsRUFBVTtBQUN0RyxTQUFPQSxLQUFJLFFBQVEsc0JBQXNCLGFBQWEsaUJBQWlCO0FBQ3pFO0FBUUEsU0FBUyxjQUFjQSxNQUFLO0FBQzFCLEVBQUFBLEtBQUksYUFBYSxhQUFhO0FBQzlCLFFBQU0sY0FBYyxjQUFjQSxLQUFJLFNBQVNBLEtBQUksV0FBVyxZQUFZLENBQUM7QUFDM0UsU0FBT0EsS0FBSSxRQUFRLHNCQUFzQixhQUFhLGlCQUFpQjtBQUN6RTtBQVlBLFNBQVMsaUJBQWlCQSxNQUFLLFVBQVU7QUFDdkMsRUFBQUEsS0FBSSxhQUFhLGdCQUFnQjtBQUNqQyxRQUFNLGNBQWMsaUJBQWlCQSxLQUFJLFNBQVNBLEtBQUksV0FBVyxVQUFVLFlBQVksQ0FBQztBQUN4RixTQUFPQSxLQUFJLFFBQVEsc0JBQXNCLGFBQWEsaUJBQWlCO0FBQ3pFO0FBT0EsU0FBUyxpQkFBaUJBLE1BQUs7QUFDN0IsRUFBQUEsS0FBSSxhQUFhLGdCQUFnQjtBQUNqQyxRQUFNLGNBQWMsZUFBZUEsS0FBSSxTQUFTQSxLQUFJLFdBQVcsWUFBWSxDQUFDO0FBQzVFLFNBQU9BLEtBQUksUUFBUSxzQkFBc0IsYUFBYSxpQkFBaUIsRUFBRSxLQUFLLFNBQU87QUFDbkYsUUFBSSxRQUFRLE1BQU07QUFDaEIsWUFBTSxjQUFjO0FBQUEsSUFDdEI7QUFDQSxXQUFPO0FBQUEsRUFDVCxDQUFDO0FBQ0g7QUFPQSxTQUFTLGVBQWVBLE1BQUs7QUFDM0IsRUFBQUEsS0FBSSxhQUFhLGNBQWM7QUFDL0IsUUFBTSxjQUFjLGVBQWVBLEtBQUksU0FBU0EsS0FBSSxTQUFTO0FBQzdELFNBQU9BLEtBQUksUUFBUSxzQkFBc0IsYUFBYSxpQkFBaUI7QUFDekU7QUFXQSxTQUFTLFlBQVlBLE1BQUssV0FBVztBQUNuQyxRQUFNLFVBQVUsTUFBTUEsS0FBSSxVQUFVLE1BQU0sU0FBUztBQUNuRCxRQUFNLFdBQVcsSUFBSSxTQUFTQSxLQUFJLFVBQVUsUUFBUSxPQUFPO0FBQzNELFNBQU8sSUFBSSxVQUFVQSxLQUFJLFNBQVMsUUFBUTtBQUM1QztBQWtCQSxTQUFTLE1BQU0sTUFBTTtBQUNuQixTQUFPLGtCQUFrQixLQUFLLElBQUk7QUFDcEM7QUFJQSxTQUFTLFdBQVcsU0FBUyxLQUFLO0FBQ2hDLFNBQU8sSUFBSSxVQUFVLFNBQVMsR0FBRztBQUNuQztBQUtBLFNBQVMsWUFBWUEsTUFBSyxNQUFNO0FBQzlCLE1BQUlBLGdCQUFlLHFCQUFxQjtBQUN0QyxVQUFNLFVBQVVBO0FBQ2hCLFFBQUksUUFBUSxXQUFXLE1BQU07QUFDM0IsWUFBTSxnQkFBZ0I7QUFBQSxJQUN4QjtBQUNBLFVBQU0sWUFBWSxJQUFJLFVBQVUsU0FBUyxRQUFRLE9BQU87QUFDeEQsUUFBSSxRQUFRLE1BQU07QUFDaEIsYUFBTyxZQUFZLFdBQVcsSUFBSTtBQUFBLElBQ3BDLE9BQU87QUFDTCxhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0YsT0FBTztBQUVMLFFBQUksU0FBUyxRQUFXO0FBQ3RCLGFBQU8sWUFBWUEsTUFBSyxJQUFJO0FBQUEsSUFDOUIsT0FBTztBQUNMLGFBQU9BO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFDRjtBQUNBLFNBQVMsTUFBTSxjQUFjLFdBQVc7QUFDdEMsTUFBSSxhQUFhLE1BQU0sU0FBUyxHQUFHO0FBQ2pDLFFBQUksd0JBQXdCLHFCQUFxQjtBQUMvQyxhQUFPLFdBQVcsY0FBYyxTQUFTO0FBQUEsSUFDM0MsT0FBTztBQUNMLFlBQU0sZ0JBQWdCLDBFQUEwRTtBQUFBLElBQ2xHO0FBQUEsRUFDRixPQUFPO0FBQ0wsV0FBTyxZQUFZLGNBQWMsU0FBUztBQUFBLEVBQzVDO0FBQ0Y7QUFDQSxTQUFTLGNBQWMsTUFBTSxRQUFRO0FBQ25DLFFBQU0sZUFBZSxXQUFXLFFBQVEsV0FBVyxTQUFTLFNBQVMsT0FBTyx5QkFBeUI7QUFDckcsTUFBSSxnQkFBZ0IsTUFBTTtBQUN4QixXQUFPO0FBQUEsRUFDVDtBQUNBLFNBQU8sU0FBUyxtQkFBbUIsY0FBYyxJQUFJO0FBQ3ZEO0FBQ0EsU0FBUyx5QkFBeUIsU0FBUyxNQUFNLE1BQU0sVUFBVSxDQUFDLEdBQUc7QUFDbkUsVUFBUSxPQUFPLEdBQUcsSUFBSSxJQUFJLElBQUk7QUFDOUIsVUFBUSxZQUFZO0FBQ3BCLFFBQU07QUFBQSxJQUNKO0FBQUEsRUFDRixJQUFJO0FBQ0osTUFBSSxlQUFlO0FBQ2pCLFlBQVEscUJBQXFCLE9BQU8sa0JBQWtCLFdBQVcsZ0JBQWdCLG9CQUFvQixlQUFlLFFBQVEsSUFBSSxRQUFRLFNBQVM7QUFBQSxFQUNuSjtBQUNGO0FBT0EsSUFBTSxzQkFBTixNQUEwQjtBQUFBLEVBQ3hCLFlBSUEsS0FBSyxlQUlMLG1CQUlBLE1BQU0sa0JBQWtCO0FBQ3RCLFNBQUssTUFBTTtBQUNYLFNBQUssZ0JBQWdCO0FBQ3JCLFNBQUssb0JBQW9CO0FBQ3pCLFNBQUssT0FBTztBQUNaLFNBQUssbUJBQW1CO0FBQ3hCLFNBQUssVUFBVTtBQU1mLFNBQUssUUFBUTtBQUNiLFNBQUssWUFBWTtBQUNqQixTQUFLLFNBQVM7QUFDZCxTQUFLLFdBQVc7QUFDaEIsU0FBSyx5QkFBeUI7QUFDOUIsU0FBSyxzQkFBc0I7QUFDM0IsU0FBSyxZQUFZLG9CQUFJLElBQUk7QUFDekIsUUFBSSxRQUFRLE1BQU07QUFDaEIsV0FBSyxVQUFVLFNBQVMsbUJBQW1CLE1BQU0sS0FBSyxLQUFLO0FBQUEsSUFDN0QsT0FBTztBQUNMLFdBQUssVUFBVSxjQUFjLEtBQUssT0FBTyxLQUFLLElBQUksT0FBTztBQUFBLElBQzNEO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxJQUFJLE9BQU87QUFDVCxXQUFPLEtBQUs7QUFBQSxFQUNkO0FBQUEsRUFDQSxJQUFJLEtBQUssTUFBTTtBQUNiLFNBQUssUUFBUTtBQUNiLFFBQUksS0FBSyxRQUFRLE1BQU07QUFDckIsV0FBSyxVQUFVLFNBQVMsbUJBQW1CLEtBQUssTUFBTSxJQUFJO0FBQUEsSUFDNUQsT0FBTztBQUNMLFdBQUssVUFBVSxjQUFjLE1BQU0sS0FBSyxJQUFJLE9BQU87QUFBQSxJQUNyRDtBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlBLElBQUkscUJBQXFCO0FBQ3ZCLFdBQU8sS0FBSztBQUFBLEVBQ2Q7QUFBQSxFQUNBLElBQUksbUJBQW1CLE1BQU07QUFDM0I7QUFBQSxNQUFlO0FBQUE7QUFBQSxNQUFzQjtBQUFBO0FBQUEsTUFBa0IsT0FBTztBQUFBLE1BQW1CO0FBQUEsSUFBSTtBQUNyRixTQUFLLHNCQUFzQjtBQUFBLEVBQzdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLElBQUksd0JBQXdCO0FBQzFCLFdBQU8sS0FBSztBQUFBLEVBQ2Q7QUFBQSxFQUNBLElBQUksc0JBQXNCLE1BQU07QUFDOUI7QUFBQSxNQUFlO0FBQUE7QUFBQSxNQUFzQjtBQUFBO0FBQUEsTUFBa0IsT0FBTztBQUFBLE1BQW1CO0FBQUEsSUFBSTtBQUNyRixTQUFLLHlCQUF5QjtBQUFBLEVBQ2hDO0FBQUEsRUFDTSxnQkFBZ0I7QUFBQTtBQUNwQixVQUFJLEtBQUssb0JBQW9CO0FBQzNCLGVBQU8sS0FBSztBQUFBLE1BQ2Q7QUFDQSxZQUFNLE9BQU8sS0FBSyxjQUFjLGFBQWE7QUFBQSxRQUMzQyxVQUFVO0FBQUEsTUFDWixDQUFDO0FBQ0QsVUFBSSxNQUFNO0FBQ1IsY0FBTSxZQUFZLE1BQU0sS0FBSyxTQUFTO0FBQ3RDLFlBQUksY0FBYyxNQUFNO0FBQ3RCLGlCQUFPLFVBQVU7QUFBQSxRQUNuQjtBQUFBLE1BQ0Y7QUFDQSxhQUFPO0FBQUEsSUFDVDtBQUFBO0FBQUEsRUFDTSxvQkFBb0I7QUFBQTtBQUN4QixVQUFJLHFCQUFxQixLQUFLLEdBQUcsS0FBSyxLQUFLLElBQUksU0FBUyxlQUFlO0FBQ3JFLGVBQU8sS0FBSyxJQUFJLFNBQVM7QUFBQSxNQUMzQjtBQUNBLFlBQU0sV0FBVyxLQUFLLGtCQUFrQixhQUFhO0FBQUEsUUFDbkQsVUFBVTtBQUFBLE1BQ1osQ0FBQztBQUNELFVBQUksVUFBVTtBQUNaLGNBQU0sU0FBUyxNQUFNLFNBQVMsU0FBUztBQUt2QyxlQUFPLE9BQU87QUFBQSxNQUNoQjtBQUNBLGFBQU87QUFBQSxJQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlBLFVBQVU7QUFDUixRQUFJLENBQUMsS0FBSyxVQUFVO0FBQ2xCLFdBQUssV0FBVztBQUNoQixXQUFLLFVBQVUsUUFBUSxhQUFXLFFBQVEsT0FBTyxDQUFDO0FBQ2xELFdBQUssVUFBVSxNQUFNO0FBQUEsSUFDdkI7QUFDQSxXQUFPLFFBQVEsUUFBUTtBQUFBLEVBQ3pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLHNCQUFzQixLQUFLO0FBQ3pCLFdBQU8sSUFBSSxVQUFVLE1BQU0sR0FBRztBQUFBLEVBQ2hDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLGFBQWEsYUFBYSxnQkFBZ0IsV0FBVyxlQUFlLFFBQVEsTUFBTTtBQUNoRixRQUFJLENBQUMsS0FBSyxVQUFVO0FBQ2xCLFlBQU0sVUFBVSxZQUFZLGFBQWEsS0FBSyxRQUFRLFdBQVcsZUFBZSxnQkFBZ0IsS0FBSyxrQkFBa0IsS0FBSztBQUM1SCxXQUFLLFVBQVUsSUFBSSxPQUFPO0FBRTFCLGNBQVEsV0FBVyxFQUFFLEtBQUssTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLEdBQUcsTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLENBQUM7QUFDcEcsYUFBTztBQUFBLElBQ1QsT0FBTztBQUNMLGFBQU8sSUFBSSxZQUFZLFdBQVcsQ0FBQztBQUFBLElBQ3JDO0FBQUEsRUFDRjtBQUFBLEVBQ00sc0JBQXNCLGFBQWEsZ0JBQWdCO0FBQUE7QUFDdkQsWUFBTSxDQUFDLFdBQVcsYUFBYSxJQUFJLE1BQU0sUUFBUSxJQUFJLENBQUMsS0FBSyxjQUFjLEdBQUcsS0FBSyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3JHLGFBQU8sS0FBSyxhQUFhLGFBQWEsZ0JBQWdCLFdBQVcsYUFBYSxFQUFFLFdBQVc7QUFBQSxJQUM3RjtBQUFBO0FBQ0Y7QUFDQSxJQUFNLE9BQU87QUFDYixJQUFNLFVBQVU7QUFxQmhCLElBQU0sZUFBZTtBQWdDckIsU0FBUyxTQUFTQSxNQUFLLHNCQUFzQjtBQUMzQyxFQUFBQSxPQUFNLG1CQUFtQkEsSUFBRztBQUM1QixTQUFPLGlCQUFpQkEsTUFBSyxvQkFBb0I7QUFDbkQ7QUFVQSxTQUFTLFlBQVlBLE1BQUssTUFBTSxVQUFVO0FBQ3hDLEVBQUFBLE9BQU0sbUJBQW1CQSxJQUFHO0FBQzVCLFNBQU8sY0FBY0EsTUFBSyxNQUFNLFFBQVE7QUFDMUM7QUFXQSxTQUFTLGFBQWFBLE1BQUssT0FBTyxRQUFRLFVBQVU7QUFDbEQsRUFBQUEsT0FBTSxtQkFBbUJBLElBQUc7QUFDNUIsU0FBTyxlQUFlQSxNQUFLLE9BQU8sUUFBUSxRQUFRO0FBQ3BEO0FBVUEsU0FBUyxxQkFBcUJBLE1BQUssTUFBTSxVQUFVO0FBQ2pELEVBQUFBLE9BQU0sbUJBQW1CQSxJQUFHO0FBQzVCLFNBQU8sdUJBQXVCQSxNQUFLLE1BQU0sUUFBUTtBQUNuRDtBQVFBLFNBQVMsWUFBWUEsTUFBSztBQUN4QixFQUFBQSxPQUFNLG1CQUFtQkEsSUFBRztBQUM1QixTQUFPLGNBQWNBLElBQUc7QUFDMUI7QUFVQSxTQUFTLGVBQWVBLE1BQUssVUFBVTtBQUNyQyxFQUFBQSxPQUFNLG1CQUFtQkEsSUFBRztBQUM1QixTQUFPLGlCQUFpQkEsTUFBSyxRQUFRO0FBQ3ZDO0FBdUJBLFNBQVMsS0FBS0EsTUFBSyxTQUFTO0FBQzFCLEVBQUFBLE9BQU0sbUJBQW1CQSxJQUFHO0FBQzVCLFNBQU8sT0FBT0EsTUFBSyxPQUFPO0FBQzVCO0FBb0JBLFNBQVMsUUFBUUEsTUFBSztBQUNwQixFQUFBQSxPQUFNLG1CQUFtQkEsSUFBRztBQUM1QixTQUFPLFVBQVVBLElBQUc7QUFDdEI7QUFRQSxTQUFTLGVBQWVBLE1BQUs7QUFDM0IsRUFBQUEsT0FBTSxtQkFBbUJBLElBQUc7QUFDNUIsU0FBTyxpQkFBaUJBLElBQUc7QUFDN0I7QUFPQSxTQUFTLGFBQWFBLE1BQUs7QUFDekIsRUFBQUEsT0FBTSxtQkFBbUJBLElBQUc7QUFDNUIsU0FBTyxlQUFlQSxJQUFHO0FBQzNCO0FBQ0EsU0FBUyxJQUFJLGNBQWMsV0FBVztBQUNwQyxpQkFBZSxtQkFBbUIsWUFBWTtBQUM5QyxTQUFPLE1BQU0sY0FBYyxTQUFTO0FBQ3RDO0FBZUEsU0FBUyxXQUFXLE1BQU0sT0FBTyxHQUFHLFdBQVc7QUFDN0MsUUFBTSxtQkFBbUIsR0FBRztBQUM1QixRQUFNLGtCQUFrQixhQUFhLEtBQUssWUFBWTtBQUN0RCxRQUFNLGtCQUFrQixnQkFBZ0IsYUFBYTtBQUFBLElBQ25ELFlBQVk7QUFBQSxFQUNkLENBQUM7QUFDRCxRQUFNLFdBQVcsa0NBQWtDLFNBQVM7QUFDNUQsTUFBSSxVQUFVO0FBQ1osMkJBQXVCLGlCQUFpQixHQUFHLFFBQVE7QUFBQSxFQUNyRDtBQUNBLFNBQU87QUFDVDtBQVdBLFNBQVMsdUJBQXVCLFNBQVMsTUFBTSxNQUFNLFVBQVUsQ0FBQyxHQUFHO0FBQ2pFLDJCQUF5QixTQUFTLE1BQU0sTUFBTSxPQUFPO0FBQ3ZEO0FBa0NBLFNBQVMsUUFBUUUsTUFBSyxzQkFBc0I7QUFDMUMsRUFBQUEsT0FBTSxtQkFBbUJBLElBQUc7QUFDNUIsU0FBTyxnQkFBZ0JBLE1BQUssb0JBQW9CO0FBQ2xEO0FBYUEsU0FBUyxVQUFVQSxNQUFLLHNCQUFzQjtBQUM1QyxRQUFNLElBQUksTUFBTSxnREFBZ0Q7QUFDbEU7QUFPQSxTQUFTLFFBQVEsV0FBVztBQUFBLEVBQzFCLG9CQUFvQjtBQUN0QixHQUFHO0FBQ0QsUUFBTSxNQUFNLFVBQVUsWUFBWSxLQUFLLEVBQUUsYUFBYTtBQUN0RCxRQUFNLGVBQWUsVUFBVSxZQUFZLGVBQWU7QUFDMUQsUUFBTSxtQkFBbUIsVUFBVSxZQUFZLG9CQUFvQjtBQUNuRSxTQUFPLElBQUksb0JBQW9CLEtBQUssY0FBYyxrQkFBa0IsS0FBSyxXQUFXO0FBQ3RGO0FBQ0EsU0FBUyxrQkFBa0I7QUFDekIscUJBQW1CLElBQUk7QUFBQSxJQUFVO0FBQUEsSUFBYztBQUFBLElBQVM7QUFBQTtBQUFBLEVBQW1DLEVBQUUscUJBQXFCLElBQUksQ0FBQztBQUV2SCxrQkFBZ0IsTUFBTSxTQUFTLEVBQUU7QUFFakMsa0JBQWdCLE1BQU0sU0FBUyxTQUFTO0FBQzFDO0FBQ0EsZ0JBQWdCOzs7QUN0OEdoQixTQUFTLFNBQVMsTUFBTTtBQUN0QixTQUFPLElBQUksV0FBVyxTQUFVLFlBQVk7QUFDMUMsUUFBSSxlQUFlO0FBQ25CLFFBQUksV0FBVztBQUNmLFFBQUksV0FBVztBQUNmLFFBQUksUUFBUTtBQUNaLFFBQUksT0FBTyxTQUFVLFVBQVU7QUFDN0IscUJBQWU7QUFDZixlQUFTO0FBQUEsSUFDWDtBQUNBLFFBQUksS0FBSztBQU1ULFFBQUksV0FBVyxXQUFZO0FBQ3pCLFVBQUksQ0FBQyxJQUFJO0FBQ1AsYUFBSyxXQUFXLFdBQVk7QUFDMUIsZUFBSztBQUNMLGNBQUksYUFBYyxZQUFXLEtBQUssWUFBWTtBQUM5QyxjQUFJLFNBQVUsWUFBVyxTQUFTO0FBQ2xDLGNBQUksU0FBVSxZQUFXLE1BQU0sS0FBSztBQUFBLFFBQ3RDLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUNBLGVBQVcsSUFBSSxXQUFZO0FBRXpCLFVBQUksR0FBSSxjQUFhLEVBQUU7QUFBQSxJQUN6QixDQUFDO0FBRUQsU0FBSyxLQUFLLFFBQVE7QUFFbEIsZUFBVyxJQUFJLEtBQUssR0FBRyxpQkFBaUIsSUFBSSxDQUFDO0FBSTdDLGVBQVcsSUFBSSxLQUFLLElBQUksRUFBRSxVQUFVO0FBQUEsTUFDbEMsTUFBTTtBQUFBLE1BQ04sT0FBTyxTQUFVLEtBQUs7QUFDcEIsbUJBQVc7QUFDWCxnQkFBUTtBQUNSLGlCQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsVUFBVSxXQUFZO0FBQ3BCLG1CQUFXO0FBQ1gsaUJBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRixDQUFDLENBQUM7QUFBQSxFQUNKLENBQUM7QUFDSDtBQTJCQSxTQUFTLFdBQVcsTUFBTTtBQUN4QixTQUFPLFNBQVMsSUFBSSxFQUFFLEtBQUssSUFBSSxTQUFVLFVBQVU7QUFDakQsV0FBTztBQUFBLE1BQ0wsVUFBVSxTQUFTLG1CQUFtQixTQUFTLGFBQWE7QUFBQSxNQUM1RDtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUMsQ0FBQztBQUNKOzs7QUMzRUEsSUFBTSxVQUFOLE1BQWM7QUFBQSxFQUNaLFlBQVksTUFBTTtBQUNoQixXQUFPO0FBQUEsRUFDVDtBQUNGO0FBQ0EsSUFBTSx3QkFBd0I7QUFDOUIsSUFBTSxtQkFBTixNQUF1QjtBQUFBLEVBQ3JCLGNBQWM7QUFDWixXQUFPLHdCQUFtQixxQkFBcUI7QUFBQSxFQUNqRDtBQUNGO0FBQ0EsSUFBTSxtQkFBbUIsTUFBTSxHQUFHLEdBQUcsRUFBRSxLQUFLLFVBQVUsTUFBTSxLQUFLLHdCQUFtQixxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO0FBQ3hILElBQU0sNkJBQTZCLElBQUksZUFBZSxnQ0FBZ0M7QUFDdEYsU0FBUyw4QkFBOEIsVUFBVSxZQUFZO0FBQzNELFFBQU0saUJBQWlCLDJCQUFzQix1QkFBdUIsVUFBVSxVQUFVO0FBQ3hGLFNBQU8sa0JBQWtCLElBQUksUUFBUSxjQUFjO0FBQ3JEO0FBQ0EsU0FBUyx1QkFBdUIsSUFBSTtBQUNsQyxTQUFPLENBQUMsTUFBTSxhQUFhO0FBQ3pCLFVBQU0sVUFBVSxLQUFLLGtCQUFrQixNQUFNLEdBQUcsUUFBUSxDQUFDO0FBQ3pELFdBQU8sSUFBSSxRQUFRLE9BQU87QUFBQSxFQUM1QjtBQUNGO0FBQ0EsSUFBTSw2QkFBNkI7QUFBQSxFQUNqQyxTQUFTO0FBQUEsRUFDVCxNQUFNLENBQUMsQ0FBQyxJQUFJLFNBQVMsR0FBRywwQkFBMEIsQ0FBQztBQUNyRDtBQUNBLElBQU0sb0NBQW9DO0FBQUEsRUFDeEMsU0FBUztBQUFBLEVBQ1QsWUFBWTtBQUFBLEVBQ1osTUFBTSxDQUFDLENBQUMsSUFBSSxTQUFTLEdBQUcsMEJBQTBCLEdBQUcsV0FBVztBQUNsRTtBQUNBLElBQU0sZ0JBQU4sTUFBTSxlQUFjO0FBQUEsRUFDbEIsY0FBYztBQUNaLG9CQUFnQixlQUFlLFFBQVEsTUFBTSxLQUFLO0FBQUEsRUFDcEQ7QUFBQSxFQUNBLE9BQU8sWUFBTyxTQUFTLHNCQUFzQixtQkFBbUI7QUFDOUQsV0FBTyxLQUFLLHFCQUFxQixnQkFBZTtBQUFBLEVBQ2xEO0FBQUEsRUFDQSxPQUFPLFlBQXNCLGdCQUFHLDJCQUFpQjtBQUFBLElBQy9DLE1BQU07QUFBQSxFQUNSLENBQUM7QUFBQSxFQUNELE9BQU8sWUFBc0IsZ0JBQUcsMkJBQWlCO0FBQUEsSUFDL0MsV0FBVyxDQUFDLG1DQUFtQywwQkFBMEI7QUFBQSxFQUMzRSxDQUFDO0FBQ0g7QUFBQSxDQUNDLE1BQU07QUFDTCxHQUFDLE9BQU8sY0FBYyxlQUFlLGNBQWlCLGlCQUFrQixlQUFlLENBQUM7QUFBQSxJQUN0RixNQUFNO0FBQUEsSUFDTixNQUFNLENBQUM7QUFBQSxNQUNMLFdBQVcsQ0FBQyxtQ0FBbUMsMEJBQTBCO0FBQUEsSUFDM0UsQ0FBQztBQUFBLEVBQ0gsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUk7QUFDcEIsR0FBRztBQUNILFNBQVMsZUFBZSxPQUFPLE1BQU07QUFDbkMsa0JBQWdCLGVBQWUsUUFBUSxNQUFNLEtBQUs7QUFDbEQsU0FBTyx5QkFBeUIsQ0FBQyxtQ0FBbUMsNEJBQTRCO0FBQUEsSUFDOUYsU0FBUztBQUFBLElBQ1QsWUFBWSx1QkFBdUIsRUFBRTtBQUFBLElBQ3JDLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxNQUFDO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUF3QjtBQUFBO0FBQUEsTUFFakQsQ0FBQyxJQUFJLFNBQVMsR0FBRyxhQUFhO0FBQUEsTUFBRyxDQUFDLElBQUksU0FBUyxHQUFHLGlCQUFpQjtBQUFBLE1BQUcsR0FBRztBQUFBLElBQUk7QUFBQSxFQUMvRSxDQUFDLENBQUM7QUFDSjtBQUdBLElBQU1DLFlBQVcsZUFBVSxVQUFZLElBQUk7QUFDM0MsSUFBTUMsY0FBYSxlQUFVLFlBQWMsSUFBSTtBQUcvQyxJQUFNQywwQkFBeUIsZUFBVSx3QkFBMEIsSUFBSTtBQUN2RSxJQUFNQyxnQkFBZSxlQUFVLGNBQWdCLE1BQU0sQ0FBQztBQUN0RCxJQUFNQyxXQUFVLGVBQVUsU0FBVyxJQUFJO0FBQ3pDLElBQU1DLFlBQVcsZUFBVSxVQUFZLElBQUk7QUFDM0MsSUFBTUMsa0JBQWlCLGVBQVUsZ0JBQWtCLElBQUk7QUFDdkQsSUFBTUMsZUFBYyxlQUFVLGFBQWUsSUFBSTtBQUNqRCxJQUFNQyxjQUFhLGVBQVUsWUFBYyxJQUFJO0FBQy9DLElBQU1DLGFBQVksZUFBVSxXQUFhLElBQUk7QUFDN0MsSUFBTUMsUUFBTyxlQUFVLE1BQVEsSUFBSTtBQUNuQyxJQUFNQyxXQUFVLGVBQVUsU0FBVyxJQUFJO0FBQ3pDLElBQU1DLE9BQU0sZUFBVSxLQUFPLE1BQU0sQ0FBQztBQUNwQyxJQUFNQyxrQkFBaUIsZUFBVSxnQkFBa0IsTUFBTSxDQUFDO0FBQzFELElBQU1DLGVBQWMsZUFBVSxhQUFlLElBQUk7QUFDakQsSUFBTUMsd0JBQXVCLGVBQVUsc0JBQXdCLElBQUk7QUFDbkUsSUFBTUMsZ0JBQWUsZUFBVSxjQUFnQixJQUFJOzs7QUNqRTdDLElBQU8sc0JBQVAsTUFBTyxvQkFBa0I7RUFDN0IsWUFDVSxZQUF1QixPQUFPLFNBQVMsR0FDOUIsU0FDQSxhQUF3QjtBQUZqQyxTQUFBLFlBQUE7QUFDUyxTQUFBLFVBQUE7QUFDQSxTQUFBLGNBQUE7RUFDaEI7RUFFSCxPQUFPLE9BQWE7RUFJcEI7RUFFQSxVQUFVLE9BQWE7RUFJdkI7RUFFQSxlQUFlLE1BQVU7QUFDdkIsVUFBTSxpQkFBaUIsSUFBSSxLQUFLLFdBQVcsZUFBZSxLQUFLLEdBQUcsRUFBRTtBQUNwRSxXQUFPLFFBQVEsZ0JBQWdCLEVBQUUsU0FBUyxLQUFJLENBQUU7RUFDbEQ7RUFFQSxtQkFBbUIsUUFBYztBQUMvQixVQUFNLGlCQUFvQyxJQUN4QyxLQUFLLFdBQ0wsZUFBZSxNQUFNLEVBQUU7QUFHekIsV0FBTyxRQUFRLGdCQUFnQixFQUFFLFNBQVMsS0FBSSxDQUFFO0VBQ2xEO0VBRU0sc0JBQXNCLE9BQVk7O0FBQ3RDLFlBQU0sT0FBTyxLQUFLLFlBQVksS0FBSztBQUNuQyxZQUFNLGFBQWFDLEtBQ2pCLEtBQUssU0FDTCxlQUFlLEtBQUssR0FBRywyQkFBMkIsTUFBTSxNQUFNLEVBQUU7QUFFbEUsWUFBTUMsY0FBYSxZQUFZLE1BQU0sY0FBYyxVQUFVLENBQUEsQ0FBRTtBQUMvRCxZQUFNLE1BQU0sTUFBTUMsZ0JBQWUsVUFBVTtBQUMzQyxZQUFNLGlCQUFpQixJQUFJLEtBQUssV0FBVyxlQUFlLEtBQUssR0FBRyxFQUFFO0FBQ3BFLGFBQU8sVUFBVSxnQkFBZ0IsRUFBRSxnQkFBZ0IsSUFBRyxDQUFFO0lBQzFEOztFQUVBLGVBQWUsYUFBb0I7QUFDakMsVUFBTSxPQUFPLEtBQUssWUFBWSxLQUFLO0FBQ25DLFVBQU0saUJBQWlCLElBQUksS0FBSyxXQUFXLGVBQWUsS0FBSyxHQUFHLEVBQUU7QUFFcEUsV0FBTyxVQUFVLGdCQUFnQixFQUFFLFlBQVcsQ0FBRTtFQUNsRDtFQUVBLG9CQUFpQjtBQUNmLFVBQU0sT0FBTyxLQUFLLFlBQVksS0FBSztBQUNuQyxVQUFNLG9CQUFvQixXQUN4QixLQUFLLFdBQ0wsZUFBZSxLQUFLLEdBQUcsT0FBTztBQUVoQyxXQUFPLGVBQWUsbUJBQW1CO01BQ3ZDLFNBQVM7S0FDVjtFQUNIO0VBRU0sa0JBQ0osS0FDQSxVQUNBLFlBQ0E7O0FBRUEsWUFBTSxPQUFPLEtBQUssWUFBWSxLQUFLO0FBQ25DLFlBQU0sYUFBYSxLQUFLLFVBQVUsR0FBRztBQUNyQyxZQUFNLGlCQUFrRDtRQUN0RCxLQUFLOztRQUVMLGVBQWUsS0FBSyxHQUFHLFNBQVMsV0FBVyxLQUFLO01BQUU7QUFHcEQsYUFBTyxPQUFPLGdCQUFnQjtRQUM1QixZQUFZLFNBQVM7UUFDckIsT0FBTyxTQUFTOztRQUNoQixZQUFZLGNBQWM7O1FBQzFCLE9BQU8sV0FBVyxTQUFTO1FBQzNCLGlCQUFpQixXQUFXLG1CQUFtQjtRQUMvQyxXQUFXLFdBQVcsYUFBYTtRQUNuQyxVQUFVLFdBQVcsWUFBWTs7UUFDakMsU0FBUyxvQkFBSSxLQUFJO09BQ2xCO0lBQ0g7O0VBRU0saUJBQWlCLFVBQVE7O0FBQzdCLFlBQU0sT0FBTyxLQUFLLFlBQVksS0FBSztBQUNuQyxZQUFNLGlCQUFpQixJQUNyQixLQUFLLFdBQ0wsZUFBZSxLQUFLLEdBQUcsU0FBUyxRQUFRLEVBQUU7QUFFNUMsYUFBTyxVQUFVLGNBQWM7SUFDakM7O0VBRU0sbUJBQW1CLE9BQWM7O0FBQ3JDLFlBQU0sT0FBTyxLQUFLLFlBQVksS0FBSztBQUNuQyxZQUFNLGlCQUFpQixJQUFJLEtBQUssV0FBVyxlQUFlLEtBQUssR0FBRyxFQUFFO0FBQ3BFLGFBQU8sVUFBVSxnQkFBZ0IsRUFBRSxjQUFjLE1BQUssQ0FBRTtJQUMxRDs7RUFDTSx5QkFBeUIsT0FBZ0IsUUFBTTs7QUFDbkQsWUFBTSxPQUFPLEtBQUssWUFBWSxLQUFLO0FBQ25DLFlBQU0saUJBQWlCLElBQUksS0FBSyxXQUFXLGVBQWUsS0FBSyxHQUFHLEVBQUU7QUFDcEUsYUFBTyxVQUFVLGdCQUFnQixFQUFFLENBQUMsaUJBQWlCLE1BQU0sR0FBRyxNQUFLLENBQUU7SUFDdkU7O0VBRU0sb0JBQW9CLE9BQWM7O0FBQ3RDLFlBQU0sT0FBTyxLQUFLLFlBQVksS0FBSztBQUNuQyxZQUFNLGlCQUFpQixJQUFJLEtBQUssV0FBVyxlQUFlLEtBQUssR0FBRyxFQUFFO0FBQ3BFLGFBQU8sVUFBVSxnQkFBZ0IsRUFBRSxlQUFlLE1BQUssQ0FBRTtJQUMzRDs7RUFFTSw2QkFBNkIsT0FBYzs7QUFDL0MsWUFBTSxPQUFPLEtBQUssWUFBWSxLQUFLO0FBQ25DLFlBQU0saUJBQWlCLElBQUksS0FBSyxXQUFXLGVBQWUsS0FBSyxHQUFHLEVBQUU7QUFDcEUsYUFBTyxVQUFVLGdCQUFnQixFQUFFLHdCQUF3QixNQUFLLENBQUU7SUFDcEU7O0VBRUEsdUJBQXVCLE9BQVksV0FBUztBQUMxQyxVQUFNLE9BQU8sS0FBSyxZQUFZLEtBQUs7QUFDbkMsVUFBTSxpQkFBaUIsSUFBSSxLQUFLLFdBQVcsZUFBZSxLQUFLLEdBQUcsRUFBRTtBQUNwRSxXQUFPLFVBQVUsZ0JBQWdCLEVBQUUsQ0FBQyxTQUFTLEdBQUcsTUFBSyxDQUFFO0VBQ3pEOzs7bUNBN0hXLHFCQUFrQixtQkFBQSxTQUFBLEdBQUEsbUJBQUEsT0FBQSxHQUFBLG1CQUFBLFdBQUEsQ0FBQTtBQUFBO3VGQUFsQixxQkFBa0IsU0FBbEIsb0JBQWtCLFdBQUEsWUFGakIsT0FBTSxDQUFBO0FBRWQsSUFBTyxxQkFBUDsiLCJuYW1lcyI6WyJTdG9yYWdlRXJyb3JDb2RlIiwibmFtZSIsInZlcnNpb24iLCJjYW5jZWxlZCIsInN0b3AiLCJFcnJvckNvZGUiLCJCbG9iQnVpbGRlciIsInN0YXJ0IiwidXJsIiwicmVmIiwibmFtZSIsInJlZiIsImZyb21UYXNrIiwicGVyY2VudGFnZSIsImNvbm5lY3RTdG9yYWdlRW11bGF0b3IiLCJkZWxldGVPYmplY3QiLCJnZXRCbG9iIiwiZ2V0Qnl0ZXMiLCJnZXREb3dubG9hZFVSTCIsImdldE1ldGFkYXRhIiwiZ2V0U3RvcmFnZSIsImdldFN0cmVhbSIsImxpc3QiLCJsaXN0QWxsIiwicmVmIiwidXBkYXRlTWV0YWRhdGEiLCJ1cGxvYWRCeXRlcyIsInVwbG9hZEJ5dGVzUmVzdW1hYmxlIiwidXBsb2FkU3RyaW5nIiwicmVmIiwidXBsb2FkU3RyaW5nIiwiZ2V0RG93bmxvYWRVUkwiXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyXX0=
