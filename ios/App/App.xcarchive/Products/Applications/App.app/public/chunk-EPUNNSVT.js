import {
  Auth,
  Component,
  ErrorFactory,
  FirebaseError,
  Logger,
  VERSION,
  _getProvider,
  _registerComponent,
  areCookiesEnabled,
  calculateBackoffMillis,
  deepEqual,
  getApp,
  getModularInstance,
  isBrowserExtension,
  isIndexedDBAvailable,
  openDB,
  registerVersion,
  user,
  validateIndexedDBOpenable
} from "./chunk-AMO7VPPH.js";
import {
  Injectable,
  NgModule,
  Router,
  map,
  of,
  pipe,
  setClassMetadata,
  switchMap,
  take,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-PZUQX53K.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@angular/fire/fesm2022/angular-fire-auth-guard.mjs
var loggedIn = map((user2) => !!user2);
var AuthGuard = class _AuthGuard {
  router;
  auth;
  constructor(router, auth) {
    this.router = router;
    this.auth = auth;
  }
  canActivate = (next, state) => {
    const authPipeFactory = next.data.authGuardPipe || (() => loggedIn);
    return user(this.auth).pipe(take(1), authPipeFactory(next, state), map((can) => {
      if (typeof can === "boolean") {
        return can;
      } else if (Array.isArray(can)) {
        return this.router.createUrlTree(can);
      } else {
        return this.router.parseUrl(can);
      }
    }));
  };
  static \u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(Router), \u0275\u0275inject(Auth));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AuthGuard,
    factory: _AuthGuard.\u0275fac,
    providedIn: "any"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{
    type: Router
  }, {
    type: Auth
  }], null);
})();
var isNotAnonymous = map((user2) => !!user2 && !user2.isAnonymous);
var idTokenResult = switchMap((user2) => user2 ? user2.getIdTokenResult() : of(null));
var emailVerified = map((user2) => !!user2 && user2.emailVerified);
var customClaims = pipe(idTokenResult, map((idTokenResult2) => idTokenResult2 ? idTokenResult2.claims : []));
var redirectUnauthorizedTo = (redirect) => pipe(loggedIn, map((loggedIn2) => loggedIn2 || redirect));
var AuthGuardModule = class _AuthGuardModule {
  constructor() {
    registerVersion("angularfire", VERSION.full, "auth-guard");
  }
  static \u0275fac = function AuthGuardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthGuardModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AuthGuardModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [AuthGuard]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuardModule, [{
    type: NgModule,
    args: [{
      providers: [AuthGuard]
    }]
  }], () => [], null);
})();

// node_modules/@firebase/installations/dist/esm/index.esm2017.js
var name = "@firebase/installations";
var version = "0.6.13";
var PENDING_TIMEOUT_MS = 1e4;
var PACKAGE_VERSION = `w:${version}`;
var INTERNAL_AUTH_VERSION = "FIS_v2";
var INSTALLATIONS_API_URL = "https://firebaseinstallations.googleapis.com/v1";
var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1e3;
var SERVICE = "installations";
var SERVICE_NAME = "Installations";
var ERROR_DESCRIPTION_MAP = {
  [
    "missing-app-config-values"
    /* ErrorCode.MISSING_APP_CONFIG_VALUES */
  ]: 'Missing App configuration value: "{$valueName}"',
  [
    "not-registered"
    /* ErrorCode.NOT_REGISTERED */
  ]: "Firebase Installation is not registered.",
  [
    "installation-not-found"
    /* ErrorCode.INSTALLATION_NOT_FOUND */
  ]: "Firebase Installation not found.",
  [
    "request-failed"
    /* ErrorCode.REQUEST_FAILED */
  ]: '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
  [
    "app-offline"
    /* ErrorCode.APP_OFFLINE */
  ]: "Could not process request. Application offline.",
  [
    "delete-pending-registration"
    /* ErrorCode.DELETE_PENDING_REGISTRATION */
  ]: "Can't delete installation while there is a pending registration request."
};
var ERROR_FACTORY = new ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
function isServerError(error) {
  return error instanceof FirebaseError && error.code.includes(
    "request-failed"
    /* ErrorCode.REQUEST_FAILED */
  );
}
function getInstallationsEndpoint({
  projectId
}) {
  return `${INSTALLATIONS_API_URL}/projects/${projectId}/installations`;
}
function extractAuthTokenInfoFromResponse(response) {
  return {
    token: response.token,
    requestStatus: 2,
    expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
    creationTime: Date.now()
  };
}
function getErrorFromResponse(requestName, response) {
  return __async(this, null, function* () {
    const responseJson = yield response.json();
    const errorData = responseJson.error;
    return ERROR_FACTORY.create("request-failed", {
      requestName,
      serverCode: errorData.code,
      serverMessage: errorData.message,
      serverStatus: errorData.status
    });
  });
}
function getHeaders({
  apiKey
}) {
  return new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-goog-api-key": apiKey
  });
}
function getHeadersWithAuth(appConfig, {
  refreshToken
}) {
  const headers = getHeaders(appConfig);
  headers.append("Authorization", getAuthorizationHeader(refreshToken));
  return headers;
}
function retryIfServerError(fn) {
  return __async(this, null, function* () {
    const result = yield fn();
    if (result.status >= 500 && result.status < 600) {
      return fn();
    }
    return result;
  });
}
function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
  return Number(responseExpiresIn.replace("s", "000"));
}
function getAuthorizationHeader(refreshToken) {
  return `${INTERNAL_AUTH_VERSION} ${refreshToken}`;
}
function createInstallationRequest(_0, _1) {
  return __async(this, arguments, function* ({
    appConfig,
    heartbeatServiceProvider
  }, {
    fid
  }) {
    const endpoint = getInstallationsEndpoint(appConfig);
    const headers = getHeaders(appConfig);
    const heartbeatService = heartbeatServiceProvider.getImmediate({
      optional: true
    });
    if (heartbeatService) {
      const heartbeatsHeader = yield heartbeatService.getHeartbeatsHeader();
      if (heartbeatsHeader) {
        headers.append("x-firebase-client", heartbeatsHeader);
      }
    }
    const body = {
      fid,
      authVersion: INTERNAL_AUTH_VERSION,
      appId: appConfig.appId,
      sdkVersion: PACKAGE_VERSION
    };
    const request = {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    };
    const response = yield retryIfServerError(() => fetch(endpoint, request));
    if (response.ok) {
      const responseValue = yield response.json();
      const registeredInstallationEntry = {
        fid: responseValue.fid || fid,
        registrationStatus: 2,
        refreshToken: responseValue.refreshToken,
        authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
      };
      return registeredInstallationEntry;
    } else {
      throw yield getErrorFromResponse("Create Installation", response);
    }
  });
}
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
function bufferToBase64UrlSafe(array) {
  const b64 = btoa(String.fromCharCode(...array));
  return b64.replace(/\+/g, "-").replace(/\//g, "_");
}
var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
var INVALID_FID = "";
function generateFid() {
  try {
    const fidByteArray = new Uint8Array(17);
    const crypto = self.crypto || self.msCrypto;
    crypto.getRandomValues(fidByteArray);
    fidByteArray[0] = 112 + fidByteArray[0] % 16;
    const fid = encode(fidByteArray);
    return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
  } catch (_a) {
    return INVALID_FID;
  }
}
function encode(fidByteArray) {
  const b64String = bufferToBase64UrlSafe(fidByteArray);
  return b64String.substr(0, 22);
}
function getKey(appConfig) {
  return `${appConfig.appName}!${appConfig.appId}`;
}
var fidChangeCallbacks = /* @__PURE__ */ new Map();
function fidChanged(appConfig, fid) {
  const key = getKey(appConfig);
  callFidChangeCallbacks(key, fid);
  broadcastFidChange(key, fid);
}
function callFidChangeCallbacks(key, fid) {
  const callbacks = fidChangeCallbacks.get(key);
  if (!callbacks) {
    return;
  }
  for (const callback of callbacks) {
    callback(fid);
  }
}
function broadcastFidChange(key, fid) {
  const channel = getBroadcastChannel();
  if (channel) {
    channel.postMessage({
      key,
      fid
    });
  }
  closeBroadcastChannel();
}
var broadcastChannel = null;
function getBroadcastChannel() {
  if (!broadcastChannel && "BroadcastChannel" in self) {
    broadcastChannel = new BroadcastChannel("[Firebase] FID Change");
    broadcastChannel.onmessage = (e) => {
      callFidChangeCallbacks(e.data.key, e.data.fid);
    };
  }
  return broadcastChannel;
}
function closeBroadcastChannel() {
  if (fidChangeCallbacks.size === 0 && broadcastChannel) {
    broadcastChannel.close();
    broadcastChannel = null;
  }
}
var DATABASE_NAME = "firebase-installations-database";
var DATABASE_VERSION = 1;
var OBJECT_STORE_NAME = "firebase-installations-store";
var dbPromise = null;
function getDbPromise() {
  if (!dbPromise) {
    dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
      upgrade: (db, oldVersion) => {
        switch (oldVersion) {
          case 0:
            db.createObjectStore(OBJECT_STORE_NAME);
        }
      }
    });
  }
  return dbPromise;
}
function set(appConfig, value) {
  return __async(this, null, function* () {
    const key = getKey(appConfig);
    const db = yield getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, "readwrite");
    const objectStore = tx.objectStore(OBJECT_STORE_NAME);
    const oldValue = yield objectStore.get(key);
    yield objectStore.put(value, key);
    yield tx.done;
    if (!oldValue || oldValue.fid !== value.fid) {
      fidChanged(appConfig, value.fid);
    }
    return value;
  });
}
function remove(appConfig) {
  return __async(this, null, function* () {
    const key = getKey(appConfig);
    const db = yield getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, "readwrite");
    yield tx.objectStore(OBJECT_STORE_NAME).delete(key);
    yield tx.done;
  });
}
function update(appConfig, updateFn) {
  return __async(this, null, function* () {
    const key = getKey(appConfig);
    const db = yield getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, "readwrite");
    const store = tx.objectStore(OBJECT_STORE_NAME);
    const oldValue = yield store.get(key);
    const newValue = updateFn(oldValue);
    if (newValue === void 0) {
      yield store.delete(key);
    } else {
      yield store.put(newValue, key);
    }
    yield tx.done;
    if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
      fidChanged(appConfig, newValue.fid);
    }
    return newValue;
  });
}
function getInstallationEntry(installations) {
  return __async(this, null, function* () {
    let registrationPromise;
    const installationEntry = yield update(installations.appConfig, (oldEntry) => {
      const installationEntry2 = updateOrCreateInstallationEntry(oldEntry);
      const entryWithPromise = triggerRegistrationIfNecessary(installations, installationEntry2);
      registrationPromise = entryWithPromise.registrationPromise;
      return entryWithPromise.installationEntry;
    });
    if (installationEntry.fid === INVALID_FID) {
      return {
        installationEntry: yield registrationPromise
      };
    }
    return {
      installationEntry,
      registrationPromise
    };
  });
}
function updateOrCreateInstallationEntry(oldEntry) {
  const entry = oldEntry || {
    fid: generateFid(),
    registrationStatus: 0
    /* RequestStatus.NOT_STARTED */
  };
  return clearTimedOutRequest(entry);
}
function triggerRegistrationIfNecessary(installations, installationEntry) {
  if (installationEntry.registrationStatus === 0) {
    if (!navigator.onLine) {
      const registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create(
        "app-offline"
        /* ErrorCode.APP_OFFLINE */
      ));
      return {
        installationEntry,
        registrationPromise: registrationPromiseWithError
      };
    }
    const inProgressEntry = {
      fid: installationEntry.fid,
      registrationStatus: 1,
      registrationTime: Date.now()
    };
    const registrationPromise = registerInstallation(installations, inProgressEntry);
    return {
      installationEntry: inProgressEntry,
      registrationPromise
    };
  } else if (installationEntry.registrationStatus === 1) {
    return {
      installationEntry,
      registrationPromise: waitUntilFidRegistration(installations)
    };
  } else {
    return {
      installationEntry
    };
  }
}
function registerInstallation(installations, installationEntry) {
  return __async(this, null, function* () {
    try {
      const registeredInstallationEntry = yield createInstallationRequest(installations, installationEntry);
      return set(installations.appConfig, registeredInstallationEntry);
    } catch (e) {
      if (isServerError(e) && e.customData.serverCode === 409) {
        yield remove(installations.appConfig);
      } else {
        yield set(installations.appConfig, {
          fid: installationEntry.fid,
          registrationStatus: 0
          /* RequestStatus.NOT_STARTED */
        });
      }
      throw e;
    }
  });
}
function waitUntilFidRegistration(installations) {
  return __async(this, null, function* () {
    let entry = yield updateInstallationRequest(installations.appConfig);
    while (entry.registrationStatus === 1) {
      yield sleep(100);
      entry = yield updateInstallationRequest(installations.appConfig);
    }
    if (entry.registrationStatus === 0) {
      const {
        installationEntry,
        registrationPromise
      } = yield getInstallationEntry(installations);
      if (registrationPromise) {
        return registrationPromise;
      } else {
        return installationEntry;
      }
    }
    return entry;
  });
}
function updateInstallationRequest(appConfig) {
  return update(appConfig, (oldEntry) => {
    if (!oldEntry) {
      throw ERROR_FACTORY.create(
        "installation-not-found"
        /* ErrorCode.INSTALLATION_NOT_FOUND */
      );
    }
    return clearTimedOutRequest(oldEntry);
  });
}
function clearTimedOutRequest(entry) {
  if (hasInstallationRequestTimedOut(entry)) {
    return {
      fid: entry.fid,
      registrationStatus: 0
      /* RequestStatus.NOT_STARTED */
    };
  }
  return entry;
}
function hasInstallationRequestTimedOut(installationEntry) {
  return installationEntry.registrationStatus === 1 && installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now();
}
function generateAuthTokenRequest(_0, _1) {
  return __async(this, arguments, function* ({
    appConfig,
    heartbeatServiceProvider
  }, installationEntry) {
    const endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
    const headers = getHeadersWithAuth(appConfig, installationEntry);
    const heartbeatService = heartbeatServiceProvider.getImmediate({
      optional: true
    });
    if (heartbeatService) {
      const heartbeatsHeader = yield heartbeatService.getHeartbeatsHeader();
      if (heartbeatsHeader) {
        headers.append("x-firebase-client", heartbeatsHeader);
      }
    }
    const body = {
      installation: {
        sdkVersion: PACKAGE_VERSION,
        appId: appConfig.appId
      }
    };
    const request = {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    };
    const response = yield retryIfServerError(() => fetch(endpoint, request));
    if (response.ok) {
      const responseValue = yield response.json();
      const completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
      return completedAuthToken;
    } else {
      throw yield getErrorFromResponse("Generate Auth Token", response);
    }
  });
}
function getGenerateAuthTokenEndpoint(appConfig, {
  fid
}) {
  return `${getInstallationsEndpoint(appConfig)}/${fid}/authTokens:generate`;
}
function refreshAuthToken(installations, forceRefresh = false) {
  return __async(this, null, function* () {
    let tokenPromise;
    const entry = yield update(installations.appConfig, (oldEntry) => {
      if (!isEntryRegistered(oldEntry)) {
        throw ERROR_FACTORY.create(
          "not-registered"
          /* ErrorCode.NOT_REGISTERED */
        );
      }
      const oldAuthToken = oldEntry.authToken;
      if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
        return oldEntry;
      } else if (oldAuthToken.requestStatus === 1) {
        tokenPromise = waitUntilAuthTokenRequest(installations, forceRefresh);
        return oldEntry;
      } else {
        if (!navigator.onLine) {
          throw ERROR_FACTORY.create(
            "app-offline"
            /* ErrorCode.APP_OFFLINE */
          );
        }
        const inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
        tokenPromise = fetchAuthTokenFromServer(installations, inProgressEntry);
        return inProgressEntry;
      }
    });
    const authToken = tokenPromise ? yield tokenPromise : entry.authToken;
    return authToken;
  });
}
function waitUntilAuthTokenRequest(installations, forceRefresh) {
  return __async(this, null, function* () {
    let entry = yield updateAuthTokenRequest(installations.appConfig);
    while (entry.authToken.requestStatus === 1) {
      yield sleep(100);
      entry = yield updateAuthTokenRequest(installations.appConfig);
    }
    const authToken = entry.authToken;
    if (authToken.requestStatus === 0) {
      return refreshAuthToken(installations, forceRefresh);
    } else {
      return authToken;
    }
  });
}
function updateAuthTokenRequest(appConfig) {
  return update(appConfig, (oldEntry) => {
    if (!isEntryRegistered(oldEntry)) {
      throw ERROR_FACTORY.create(
        "not-registered"
        /* ErrorCode.NOT_REGISTERED */
      );
    }
    const oldAuthToken = oldEntry.authToken;
    if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
      return Object.assign(Object.assign({}, oldEntry), {
        authToken: {
          requestStatus: 0
          /* RequestStatus.NOT_STARTED */
        }
      });
    }
    return oldEntry;
  });
}
function fetchAuthTokenFromServer(installations, installationEntry) {
  return __async(this, null, function* () {
    try {
      const authToken = yield generateAuthTokenRequest(installations, installationEntry);
      const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), {
        authToken
      });
      yield set(installations.appConfig, updatedInstallationEntry);
      return authToken;
    } catch (e) {
      if (isServerError(e) && (e.customData.serverCode === 401 || e.customData.serverCode === 404)) {
        yield remove(installations.appConfig);
      } else {
        const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), {
          authToken: {
            requestStatus: 0
            /* RequestStatus.NOT_STARTED */
          }
        });
        yield set(installations.appConfig, updatedInstallationEntry);
      }
      throw e;
    }
  });
}
function isEntryRegistered(installationEntry) {
  return installationEntry !== void 0 && installationEntry.registrationStatus === 2;
}
function isAuthTokenValid(authToken) {
  return authToken.requestStatus === 2 && !isAuthTokenExpired(authToken);
}
function isAuthTokenExpired(authToken) {
  const now = Date.now();
  return now < authToken.creationTime || authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER;
}
function makeAuthTokenRequestInProgressEntry(oldEntry) {
  const inProgressAuthToken = {
    requestStatus: 1,
    requestTime: Date.now()
  };
  return Object.assign(Object.assign({}, oldEntry), {
    authToken: inProgressAuthToken
  });
}
function hasAuthTokenRequestTimedOut(authToken) {
  return authToken.requestStatus === 1 && authToken.requestTime + PENDING_TIMEOUT_MS < Date.now();
}
function getId(installations) {
  return __async(this, null, function* () {
    const installationsImpl = installations;
    const {
      installationEntry,
      registrationPromise
    } = yield getInstallationEntry(installationsImpl);
    if (registrationPromise) {
      registrationPromise.catch(console.error);
    } else {
      refreshAuthToken(installationsImpl).catch(console.error);
    }
    return installationEntry.fid;
  });
}
function getToken(installations, forceRefresh = false) {
  return __async(this, null, function* () {
    const installationsImpl = installations;
    yield completeInstallationRegistration(installationsImpl);
    const authToken = yield refreshAuthToken(installationsImpl, forceRefresh);
    return authToken.token;
  });
}
function completeInstallationRegistration(installations) {
  return __async(this, null, function* () {
    const {
      registrationPromise
    } = yield getInstallationEntry(installations);
    if (registrationPromise) {
      yield registrationPromise;
    }
  });
}
function extractAppConfig(app) {
  if (!app || !app.options) {
    throw getMissingValueError("App Configuration");
  }
  if (!app.name) {
    throw getMissingValueError("App Name");
  }
  const configKeys = ["projectId", "apiKey", "appId"];
  for (const keyName of configKeys) {
    if (!app.options[keyName]) {
      throw getMissingValueError(keyName);
    }
  }
  return {
    appName: app.name,
    projectId: app.options.projectId,
    apiKey: app.options.apiKey,
    appId: app.options.appId
  };
}
function getMissingValueError(valueName) {
  return ERROR_FACTORY.create("missing-app-config-values", {
    valueName
  });
}
var INSTALLATIONS_NAME = "installations";
var INSTALLATIONS_NAME_INTERNAL = "installations-internal";
var publicFactory = (container) => {
  const app = container.getProvider("app").getImmediate();
  const appConfig = extractAppConfig(app);
  const heartbeatServiceProvider = _getProvider(app, "heartbeat");
  const installationsImpl = {
    app,
    appConfig,
    heartbeatServiceProvider,
    _delete: () => Promise.resolve()
  };
  return installationsImpl;
};
var internalFactory = (container) => {
  const app = container.getProvider("app").getImmediate();
  const installations = _getProvider(app, INSTALLATIONS_NAME).getImmediate();
  const installationsInternal = {
    getId: () => getId(installations),
    getToken: (forceRefresh) => getToken(installations, forceRefresh)
  };
  return installationsInternal;
};
function registerInstallations() {
  _registerComponent(new Component(
    INSTALLATIONS_NAME,
    publicFactory,
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ));
  _registerComponent(new Component(
    INSTALLATIONS_NAME_INTERNAL,
    internalFactory,
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ));
}
registerInstallations();
registerVersion(name, version);
registerVersion(name, version, "esm2017");

// node_modules/@firebase/analytics/dist/esm/index.esm2017.js
var ANALYTICS_TYPE = "analytics";
var GA_FID_KEY = "firebase_id";
var ORIGIN_KEY = "origin";
var FETCH_TIMEOUT_MILLIS = 60 * 1e3;
var DYNAMIC_CONFIG_URL = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig";
var GTAG_URL = "https://www.googletagmanager.com/gtag/js";
var logger = new Logger("@firebase/analytics");
var ERRORS = {
  [
    "already-exists"
    /* AnalyticsError.ALREADY_EXISTS */
  ]: "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
  [
    "already-initialized"
    /* AnalyticsError.ALREADY_INITIALIZED */
  ]: "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.",
  [
    "already-initialized-settings"
    /* AnalyticsError.ALREADY_INITIALIZED_SETTINGS */
  ]: "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
  [
    "interop-component-reg-failed"
    /* AnalyticsError.INTEROP_COMPONENT_REG_FAILED */
  ]: "Firebase Analytics Interop Component failed to instantiate: {$reason}",
  [
    "invalid-analytics-context"
    /* AnalyticsError.INVALID_ANALYTICS_CONTEXT */
  ]: "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
  [
    "indexeddb-unavailable"
    /* AnalyticsError.INDEXEDDB_UNAVAILABLE */
  ]: "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
  [
    "fetch-throttle"
    /* AnalyticsError.FETCH_THROTTLE */
  ]: "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
  [
    "config-fetch-failed"
    /* AnalyticsError.CONFIG_FETCH_FAILED */
  ]: "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
  [
    "no-api-key"
    /* AnalyticsError.NO_API_KEY */
  ]: 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
  [
    "no-app-id"
    /* AnalyticsError.NO_APP_ID */
  ]: 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
  [
    "no-client-id"
    /* AnalyticsError.NO_CLIENT_ID */
  ]: 'The "client_id" field is empty.',
  [
    "invalid-gtag-resource"
    /* AnalyticsError.INVALID_GTAG_RESOURCE */
  ]: "Trusted Types detected an invalid gtag resource: {$gtagURL}."
};
var ERROR_FACTORY2 = new ErrorFactory("analytics", "Analytics", ERRORS);
function createGtagTrustedTypesScriptURL(url) {
  if (!url.startsWith(GTAG_URL)) {
    const err = ERROR_FACTORY2.create("invalid-gtag-resource", {
      gtagURL: url
    });
    logger.warn(err.message);
    return "";
  }
  return url;
}
function promiseAllSettled(promises) {
  return Promise.all(promises.map((promise) => promise.catch((e) => e)));
}
function createTrustedTypesPolicy(policyName, policyOptions) {
  let trustedTypesPolicy;
  if (window.trustedTypes) {
    trustedTypesPolicy = window.trustedTypes.createPolicy(policyName, policyOptions);
  }
  return trustedTypesPolicy;
}
function insertScriptTag(dataLayerName2, measurementId) {
  const trustedTypesPolicy = createTrustedTypesPolicy("firebase-js-sdk-policy", {
    createScriptURL: createGtagTrustedTypesScriptURL
  });
  const script = document.createElement("script");
  const gtagScriptURL = `${GTAG_URL}?l=${dataLayerName2}&id=${measurementId}`;
  script.src = trustedTypesPolicy ? trustedTypesPolicy === null || trustedTypesPolicy === void 0 ? void 0 : trustedTypesPolicy.createScriptURL(gtagScriptURL) : gtagScriptURL;
  script.async = true;
  document.head.appendChild(script);
}
function getOrCreateDataLayer(dataLayerName2) {
  let dataLayer = [];
  if (Array.isArray(window[dataLayerName2])) {
    dataLayer = window[dataLayerName2];
  } else {
    window[dataLayerName2] = dataLayer;
  }
  return dataLayer;
}
function gtagOnConfig(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, measurementId, gtagParams) {
  return __async(this, null, function* () {
    const correspondingAppId = measurementIdToAppId2[measurementId];
    try {
      if (correspondingAppId) {
        yield initializationPromisesMap2[correspondingAppId];
      } else {
        const dynamicConfigResults = yield promiseAllSettled(dynamicConfigPromisesList2);
        const foundConfig = dynamicConfigResults.find((config) => config.measurementId === measurementId);
        if (foundConfig) {
          yield initializationPromisesMap2[foundConfig.appId];
        }
      }
    } catch (e) {
      logger.error(e);
    }
    gtagCore("config", measurementId, gtagParams);
  });
}
function gtagOnEvent(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementId, gtagParams) {
  return __async(this, null, function* () {
    try {
      let initializationPromisesToWaitFor = [];
      if (gtagParams && gtagParams["send_to"]) {
        let gaSendToList = gtagParams["send_to"];
        if (!Array.isArray(gaSendToList)) {
          gaSendToList = [gaSendToList];
        }
        const dynamicConfigResults = yield promiseAllSettled(dynamicConfigPromisesList2);
        for (const sendToId of gaSendToList) {
          const foundConfig = dynamicConfigResults.find((config) => config.measurementId === sendToId);
          const initializationPromise = foundConfig && initializationPromisesMap2[foundConfig.appId];
          if (initializationPromise) {
            initializationPromisesToWaitFor.push(initializationPromise);
          } else {
            initializationPromisesToWaitFor = [];
            break;
          }
        }
      }
      if (initializationPromisesToWaitFor.length === 0) {
        initializationPromisesToWaitFor = Object.values(initializationPromisesMap2);
      }
      yield Promise.all(initializationPromisesToWaitFor);
      gtagCore("event", measurementId, gtagParams || {});
    } catch (e) {
      logger.error(e);
    }
  });
}
function wrapGtag(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2) {
  function gtagWrapper(command, ...args) {
    return __async(this, null, function* () {
      try {
        if (command === "event") {
          const [measurementId, gtagParams] = args;
          yield gtagOnEvent(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementId, gtagParams);
        } else if (command === "config") {
          const [measurementId, gtagParams] = args;
          yield gtagOnConfig(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, measurementId, gtagParams);
        } else if (command === "consent") {
          const [consentAction, gtagParams] = args;
          gtagCore("consent", consentAction, gtagParams);
        } else if (command === "get") {
          const [measurementId, fieldName, callback] = args;
          gtagCore("get", measurementId, fieldName, callback);
        } else if (command === "set") {
          const [customParams] = args;
          gtagCore("set", customParams);
        } else {
          gtagCore(command, ...args);
        }
      } catch (e) {
        logger.error(e);
      }
    });
  }
  return gtagWrapper;
}
function wrapOrCreateGtag(initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, dataLayerName2, gtagFunctionName) {
  let gtagCore = function(..._args) {
    window[dataLayerName2].push(arguments);
  };
  if (window[gtagFunctionName] && typeof window[gtagFunctionName] === "function") {
    gtagCore = window[gtagFunctionName];
  }
  window[gtagFunctionName] = wrapGtag(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2);
  return {
    gtagCore,
    wrappedGtag: window[gtagFunctionName]
  };
}
function findGtagScriptOnPage(dataLayerName2) {
  const scriptTags = window.document.getElementsByTagName("script");
  for (const tag of Object.values(scriptTags)) {
    if (tag.src && tag.src.includes(GTAG_URL) && tag.src.includes(dataLayerName2)) {
      return tag;
    }
  }
  return null;
}
var LONG_RETRY_FACTOR = 30;
var BASE_INTERVAL_MILLIS = 1e3;
var RetryData = class {
  constructor(throttleMetadata = {}, intervalMillis = BASE_INTERVAL_MILLIS) {
    this.throttleMetadata = throttleMetadata;
    this.intervalMillis = intervalMillis;
  }
  getThrottleMetadata(appId) {
    return this.throttleMetadata[appId];
  }
  setThrottleMetadata(appId, metadata) {
    this.throttleMetadata[appId] = metadata;
  }
  deleteThrottleMetadata(appId) {
    delete this.throttleMetadata[appId];
  }
};
var defaultRetryData = new RetryData();
function getHeaders2(apiKey) {
  return new Headers({
    Accept: "application/json",
    "x-goog-api-key": apiKey
  });
}
function fetchDynamicConfig(appFields) {
  return __async(this, null, function* () {
    var _a;
    const {
      appId,
      apiKey
    } = appFields;
    const request = {
      method: "GET",
      headers: getHeaders2(apiKey)
    };
    const appUrl = DYNAMIC_CONFIG_URL.replace("{app-id}", appId);
    const response = yield fetch(appUrl, request);
    if (response.status !== 200 && response.status !== 304) {
      let errorMessage = "";
      try {
        const jsonResponse = yield response.json();
        if ((_a = jsonResponse.error) === null || _a === void 0 ? void 0 : _a.message) {
          errorMessage = jsonResponse.error.message;
        }
      } catch (_ignored) {
      }
      throw ERROR_FACTORY2.create("config-fetch-failed", {
        httpStatus: response.status,
        responseMessage: errorMessage
      });
    }
    return response.json();
  });
}
function fetchDynamicConfigWithRetry(_0) {
  return __async(this, arguments, function* (app, retryData = defaultRetryData, timeoutMillis) {
    const {
      appId,
      apiKey,
      measurementId
    } = app.options;
    if (!appId) {
      throw ERROR_FACTORY2.create(
        "no-app-id"
        /* AnalyticsError.NO_APP_ID */
      );
    }
    if (!apiKey) {
      if (measurementId) {
        return {
          measurementId,
          appId
        };
      }
      throw ERROR_FACTORY2.create(
        "no-api-key"
        /* AnalyticsError.NO_API_KEY */
      );
    }
    const throttleMetadata = retryData.getThrottleMetadata(appId) || {
      backoffCount: 0,
      throttleEndTimeMillis: Date.now()
    };
    const signal = new AnalyticsAbortSignal();
    setTimeout(() => __async(this, null, function* () {
      signal.abort();
    }), timeoutMillis !== void 0 ? timeoutMillis : FETCH_TIMEOUT_MILLIS);
    return attemptFetchDynamicConfigWithRetry({
      appId,
      apiKey,
      measurementId
    }, throttleMetadata, signal, retryData);
  });
}
function attemptFetchDynamicConfigWithRetry(_0, _1, _2) {
  return __async(this, arguments, function* (appFields, {
    throttleEndTimeMillis,
    backoffCount
  }, signal, retryData = defaultRetryData) {
    var _a;
    const {
      appId,
      measurementId
    } = appFields;
    try {
      yield setAbortableTimeout(signal, throttleEndTimeMillis);
    } catch (e) {
      if (measurementId) {
        logger.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${measurementId} provided in the "measurementId" field in the local Firebase config. [${e === null || e === void 0 ? void 0 : e.message}]`);
        return {
          appId,
          measurementId
        };
      }
      throw e;
    }
    try {
      const response = yield fetchDynamicConfig(appFields);
      retryData.deleteThrottleMetadata(appId);
      return response;
    } catch (e) {
      const error = e;
      if (!isRetriableError(error)) {
        retryData.deleteThrottleMetadata(appId);
        if (measurementId) {
          logger.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${measurementId} provided in the "measurementId" field in the local Firebase config. [${error === null || error === void 0 ? void 0 : error.message}]`);
          return {
            appId,
            measurementId
          };
        } else {
          throw e;
        }
      }
      const backoffMillis = Number((_a = error === null || error === void 0 ? void 0 : error.customData) === null || _a === void 0 ? void 0 : _a.httpStatus) === 503 ? calculateBackoffMillis(backoffCount, retryData.intervalMillis, LONG_RETRY_FACTOR) : calculateBackoffMillis(backoffCount, retryData.intervalMillis);
      const throttleMetadata = {
        throttleEndTimeMillis: Date.now() + backoffMillis,
        backoffCount: backoffCount + 1
      };
      retryData.setThrottleMetadata(appId, throttleMetadata);
      logger.debug(`Calling attemptFetch again in ${backoffMillis} millis`);
      return attemptFetchDynamicConfigWithRetry(appFields, throttleMetadata, signal, retryData);
    }
  });
}
function setAbortableTimeout(signal, throttleEndTimeMillis) {
  return new Promise((resolve, reject) => {
    const backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
    const timeout = setTimeout(resolve, backoffMillis);
    signal.addEventListener(() => {
      clearTimeout(timeout);
      reject(ERROR_FACTORY2.create("fetch-throttle", {
        throttleEndTimeMillis
      }));
    });
  });
}
function isRetriableError(e) {
  if (!(e instanceof FirebaseError) || !e.customData) {
    return false;
  }
  const httpStatus = Number(e.customData["httpStatus"]);
  return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
}
var AnalyticsAbortSignal = class {
  constructor() {
    this.listeners = [];
  }
  addEventListener(listener) {
    this.listeners.push(listener);
  }
  abort() {
    this.listeners.forEach((listener) => listener());
  }
};
var defaultEventParametersForInit;
function logEvent$1(gtagFunction, initializationPromise, eventName, eventParams, options) {
  return __async(this, null, function* () {
    if (options && options.global) {
      gtagFunction("event", eventName, eventParams);
      return;
    } else {
      const measurementId = yield initializationPromise;
      const params = Object.assign(Object.assign({}, eventParams), {
        "send_to": measurementId
      });
      gtagFunction("event", eventName, params);
    }
  });
}
function setCurrentScreen$1(gtagFunction, initializationPromise, screenName, options) {
  return __async(this, null, function* () {
    if (options && options.global) {
      gtagFunction("set", {
        "screen_name": screenName
      });
      return Promise.resolve();
    } else {
      const measurementId = yield initializationPromise;
      gtagFunction("config", measurementId, {
        update: true,
        "screen_name": screenName
      });
    }
  });
}
function setUserId$1(gtagFunction, initializationPromise, id, options) {
  return __async(this, null, function* () {
    if (options && options.global) {
      gtagFunction("set", {
        "user_id": id
      });
      return Promise.resolve();
    } else {
      const measurementId = yield initializationPromise;
      gtagFunction("config", measurementId, {
        update: true,
        "user_id": id
      });
    }
  });
}
function setUserProperties$1(gtagFunction, initializationPromise, properties, options) {
  return __async(this, null, function* () {
    if (options && options.global) {
      const flatProperties = {};
      for (const key of Object.keys(properties)) {
        flatProperties[`user_properties.${key}`] = properties[key];
      }
      gtagFunction("set", flatProperties);
      return Promise.resolve();
    } else {
      const measurementId = yield initializationPromise;
      gtagFunction("config", measurementId, {
        update: true,
        "user_properties": properties
      });
    }
  });
}
function internalGetGoogleAnalyticsClientId(gtagFunction, initializationPromise) {
  return __async(this, null, function* () {
    const measurementId = yield initializationPromise;
    return new Promise((resolve, reject) => {
      gtagFunction("get", measurementId, "client_id", (clientId) => {
        if (!clientId) {
          reject(ERROR_FACTORY2.create(
            "no-client-id"
            /* AnalyticsError.NO_CLIENT_ID */
          ));
        }
        resolve(clientId);
      });
    });
  });
}
function setAnalyticsCollectionEnabled$1(initializationPromise, enabled) {
  return __async(this, null, function* () {
    const measurementId = yield initializationPromise;
    window[`ga-disable-${measurementId}`] = !enabled;
  });
}
var defaultConsentSettingsForInit;
function _setConsentDefaultForInit(consentSettings) {
  defaultConsentSettingsForInit = consentSettings;
}
function _setDefaultEventParametersForInit(customParams) {
  defaultEventParametersForInit = customParams;
}
function validateIndexedDB() {
  return __async(this, null, function* () {
    if (!isIndexedDBAvailable()) {
      logger.warn(ERROR_FACTORY2.create("indexeddb-unavailable", {
        errorInfo: "IndexedDB is not available in this environment."
      }).message);
      return false;
    } else {
      try {
        yield validateIndexedDBOpenable();
      } catch (e) {
        logger.warn(ERROR_FACTORY2.create("indexeddb-unavailable", {
          errorInfo: e === null || e === void 0 ? void 0 : e.toString()
        }).message);
        return false;
      }
    }
    return true;
  });
}
function _initializeAnalytics(app, dynamicConfigPromisesList2, measurementIdToAppId2, installations, gtagCore, dataLayerName2, options) {
  return __async(this, null, function* () {
    var _a;
    const dynamicConfigPromise = fetchDynamicConfigWithRetry(app);
    dynamicConfigPromise.then((config) => {
      measurementIdToAppId2[config.measurementId] = config.appId;
      if (app.options.measurementId && config.measurementId !== app.options.measurementId) {
        logger.warn(`The measurement ID in the local Firebase config (${app.options.measurementId}) does not match the measurement ID fetched from the server (${config.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`);
      }
    }).catch((e) => logger.error(e));
    dynamicConfigPromisesList2.push(dynamicConfigPromise);
    const fidPromise = validateIndexedDB().then((envIsValid) => {
      if (envIsValid) {
        return installations.getId();
      } else {
        return void 0;
      }
    });
    const [dynamicConfig, fid] = yield Promise.all([dynamicConfigPromise, fidPromise]);
    if (!findGtagScriptOnPage(dataLayerName2)) {
      insertScriptTag(dataLayerName2, dynamicConfig.measurementId);
    }
    if (defaultConsentSettingsForInit) {
      gtagCore("consent", "default", defaultConsentSettingsForInit);
      _setConsentDefaultForInit(void 0);
    }
    gtagCore("js", /* @__PURE__ */ new Date());
    const configProperties = (_a = options === null || options === void 0 ? void 0 : options.config) !== null && _a !== void 0 ? _a : {};
    configProperties[ORIGIN_KEY] = "firebase";
    configProperties.update = true;
    if (fid != null) {
      configProperties[GA_FID_KEY] = fid;
    }
    gtagCore("config", dynamicConfig.measurementId, configProperties);
    if (defaultEventParametersForInit) {
      gtagCore("set", defaultEventParametersForInit);
      _setDefaultEventParametersForInit(void 0);
    }
    return dynamicConfig.measurementId;
  });
}
var AnalyticsService = class {
  constructor(app) {
    this.app = app;
  }
  _delete() {
    delete initializationPromisesMap[this.app.options.appId];
    return Promise.resolve();
  }
};
var initializationPromisesMap = {};
var dynamicConfigPromisesList = [];
var measurementIdToAppId = {};
var dataLayerName = "dataLayer";
var gtagName = "gtag";
var gtagCoreFunction;
var wrappedGtagFunction;
var globalInitDone = false;
function settings(options) {
  if (globalInitDone) {
    throw ERROR_FACTORY2.create(
      "already-initialized"
      /* AnalyticsError.ALREADY_INITIALIZED */
    );
  }
  if (options.dataLayerName) {
    dataLayerName = options.dataLayerName;
  }
  if (options.gtagName) {
    gtagName = options.gtagName;
  }
}
function warnOnBrowserContextMismatch() {
  const mismatchedEnvMessages = [];
  if (isBrowserExtension()) {
    mismatchedEnvMessages.push("This is a browser extension environment.");
  }
  if (!areCookiesEnabled()) {
    mismatchedEnvMessages.push("Cookies are not available.");
  }
  if (mismatchedEnvMessages.length > 0) {
    const details = mismatchedEnvMessages.map((message, index) => `(${index + 1}) ${message}`).join(" ");
    const err = ERROR_FACTORY2.create("invalid-analytics-context", {
      errorInfo: details
    });
    logger.warn(err.message);
  }
}
function factory(app, installations, options) {
  warnOnBrowserContextMismatch();
  const appId = app.options.appId;
  if (!appId) {
    throw ERROR_FACTORY2.create(
      "no-app-id"
      /* AnalyticsError.NO_APP_ID */
    );
  }
  if (!app.options.apiKey) {
    if (app.options.measurementId) {
      logger.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${app.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);
    } else {
      throw ERROR_FACTORY2.create(
        "no-api-key"
        /* AnalyticsError.NO_API_KEY */
      );
    }
  }
  if (initializationPromisesMap[appId] != null) {
    throw ERROR_FACTORY2.create("already-exists", {
      id: appId
    });
  }
  if (!globalInitDone) {
    getOrCreateDataLayer(dataLayerName);
    const {
      wrappedGtag,
      gtagCore
    } = wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagName);
    wrappedGtagFunction = wrappedGtag;
    gtagCoreFunction = gtagCore;
    globalInitDone = true;
  }
  initializationPromisesMap[appId] = _initializeAnalytics(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCoreFunction, dataLayerName, options);
  const analyticsInstance = new AnalyticsService(app);
  return analyticsInstance;
}
function getAnalytics(app = getApp()) {
  app = getModularInstance(app);
  const analyticsProvider = _getProvider(app, ANALYTICS_TYPE);
  if (analyticsProvider.isInitialized()) {
    return analyticsProvider.getImmediate();
  }
  return initializeAnalytics(app);
}
function initializeAnalytics(app, options = {}) {
  const analyticsProvider = _getProvider(app, ANALYTICS_TYPE);
  if (analyticsProvider.isInitialized()) {
    const existingInstance = analyticsProvider.getImmediate();
    if (deepEqual(options, analyticsProvider.getOptions())) {
      return existingInstance;
    } else {
      throw ERROR_FACTORY2.create(
        "already-initialized"
        /* AnalyticsError.ALREADY_INITIALIZED */
      );
    }
  }
  const analyticsInstance = analyticsProvider.initialize({
    options
  });
  return analyticsInstance;
}
function isSupported() {
  return __async(this, null, function* () {
    if (isBrowserExtension()) {
      return false;
    }
    if (!areCookiesEnabled()) {
      return false;
    }
    if (!isIndexedDBAvailable()) {
      return false;
    }
    try {
      const isDBOpenable = yield validateIndexedDBOpenable();
      return isDBOpenable;
    } catch (error) {
      return false;
    }
  });
}
function setCurrentScreen(analyticsInstance, screenName, options) {
  analyticsInstance = getModularInstance(analyticsInstance);
  setCurrentScreen$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], screenName, options).catch((e) => logger.error(e));
}
function getGoogleAnalyticsClientId(analyticsInstance) {
  return __async(this, null, function* () {
    analyticsInstance = getModularInstance(analyticsInstance);
    return internalGetGoogleAnalyticsClientId(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId]);
  });
}
function setUserId(analyticsInstance, id, options) {
  analyticsInstance = getModularInstance(analyticsInstance);
  setUserId$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], id, options).catch((e) => logger.error(e));
}
function setUserProperties(analyticsInstance, properties, options) {
  analyticsInstance = getModularInstance(analyticsInstance);
  setUserProperties$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], properties, options).catch((e) => logger.error(e));
}
function setAnalyticsCollectionEnabled(analyticsInstance, enabled) {
  analyticsInstance = getModularInstance(analyticsInstance);
  setAnalyticsCollectionEnabled$1(initializationPromisesMap[analyticsInstance.app.options.appId], enabled).catch((e) => logger.error(e));
}
function setDefaultEventParameters(customParams) {
  if (wrappedGtagFunction) {
    wrappedGtagFunction("set", customParams);
  } else {
    _setDefaultEventParametersForInit(customParams);
  }
}
function logEvent(analyticsInstance, eventName, eventParams, options) {
  analyticsInstance = getModularInstance(analyticsInstance);
  logEvent$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], eventName, eventParams, options).catch((e) => logger.error(e));
}
function setConsent(consentSettings) {
  if (wrappedGtagFunction) {
    wrappedGtagFunction("consent", "update", consentSettings);
  } else {
    _setConsentDefaultForInit(consentSettings);
  }
}
var name2 = "@firebase/analytics";
var version2 = "0.10.12";
function registerAnalytics() {
  _registerComponent(new Component(
    ANALYTICS_TYPE,
    (container, {
      options: analyticsOptions
    }) => {
      const app = container.getProvider("app").getImmediate();
      const installations = container.getProvider("installations-internal").getImmediate();
      return factory(app, installations, analyticsOptions);
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ));
  _registerComponent(new Component(
    "analytics-internal",
    internalFactory2,
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ));
  registerVersion(name2, version2);
  registerVersion(name2, version2, "esm2017");
  function internalFactory2(container) {
    try {
      const analytics = container.getProvider(ANALYTICS_TYPE).getImmediate();
      return {
        logEvent: (eventName, eventParams, options) => logEvent(analytics, eventName, eventParams, options)
      };
    } catch (e) {
      throw ERROR_FACTORY2.create("interop-component-reg-failed", {
        reason: e
      });
    }
  }
}
registerAnalytics();

export {
  AuthGuard,
  emailVerified,
  redirectUnauthorizedTo,
  settings,
  getAnalytics,
  initializeAnalytics,
  isSupported,
  setCurrentScreen,
  getGoogleAnalyticsClientId,
  setUserId,
  setUserProperties,
  setAnalyticsCollectionEnabled,
  setDefaultEventParameters,
  logEvent,
  setConsent
};
/*! Bundled license information:

@firebase/installations/dist/esm/index.esm2017.js:
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

@firebase/installations/dist/esm/index.esm2017.js:
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

@firebase/installations/dist/esm/index.esm2017.js:
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

@firebase/installations/dist/esm/index.esm2017.js:
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

@firebase/installations/dist/esm/index.esm2017.js:
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

@firebase/installations/dist/esm/index.esm2017.js:
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

@firebase/analytics/dist/esm/index.esm2017.js:
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
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AYW5ndWxhci9maXJlL2Zlc20yMDIyL2FuZ3VsYXItZmlyZS1hdXRoLWd1YXJkLm1qcyIsIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9kaXN0L2VzbS9pbmRleC5lc20yMDE3LmpzIiwibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hbmFseXRpY3MvZGlzdC9lc20vaW5kZXguZXNtMjAxNy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBpMCBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBpMiBmcm9tICdAYW5ndWxhci9maXJlL2F1dGgnO1xuaW1wb3J0IHsgdXNlciB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XG5pbXBvcnQgKiBhcyBpMSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgb2YsIHBpcGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZSwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVkVSU0lPTiB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUnO1xuaW1wb3J0IHsgcmVnaXN0ZXJWZXJzaW9uIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcbmNvbnN0IGxvZ2dlZEluID0gbWFwKHVzZXIgPT4gISF1c2VyKTtcbmNsYXNzIEF1dGhHdWFyZCB7XG4gIHJvdXRlcjtcbiAgYXV0aDtcbiAgY29uc3RydWN0b3Iocm91dGVyLCBhdXRoKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgfVxuICBjYW5BY3RpdmF0ZSA9IChuZXh0LCBzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGF1dGhQaXBlRmFjdG9yeSA9IG5leHQuZGF0YS5hdXRoR3VhcmRQaXBlIHx8ICgoKSA9PiBsb2dnZWRJbik7XG4gICAgcmV0dXJuIHVzZXIodGhpcy5hdXRoKS5waXBlKHRha2UoMSksIGF1dGhQaXBlRmFjdG9yeShuZXh0LCBzdGF0ZSksIG1hcChjYW4gPT4ge1xuICAgICAgaWYgKHR5cGVvZiBjYW4gPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gY2FuO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNhbikpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLmNyZWF0ZVVybFRyZWUoY2FuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRPRE8oRWRyaWNDaGFuMDMpOiBBZGQgdGVzdHNcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLnBhcnNlVXJsKGNhbik7XG4gICAgICB9XG4gICAgfSkpO1xuICB9O1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBBdXRoR3VhcmRfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IEF1dGhHdWFyZCkoaTAuybXJtWluamVjdChpMS5Sb3V0ZXIpLCBpMC7Jtcm1aW5qZWN0KGkyLkF1dGgpKTtcbiAgfTtcbiAgc3RhdGljIMm1cHJvdiA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVJbmplY3RhYmxlKHtcbiAgICB0b2tlbjogQXV0aEd1YXJkLFxuICAgIGZhY3Rvcnk6IEF1dGhHdWFyZC7JtWZhYyxcbiAgICBwcm92aWRlZEluOiAnYW55J1xuICB9KTtcbn1cbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKEF1dGhHdWFyZCwgW3tcbiAgICB0eXBlOiBJbmplY3RhYmxlLFxuICAgIGFyZ3M6IFt7XG4gICAgICBwcm92aWRlZEluOiAnYW55J1xuICAgIH1dXG4gIH1dLCAoKSA9PiBbe1xuICAgIHR5cGU6IGkxLlJvdXRlclxuICB9LCB7XG4gICAgdHlwZTogaTIuQXV0aFxuICB9XSwgbnVsbCk7XG59KSgpO1xuY29uc3QgY2FuQWN0aXZhdGUgPSBwaXBlID0+ICh7XG4gIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxcbiAgZGF0YToge1xuICAgIGF1dGhHdWFyZFBpcGU6IHBpcGVcbiAgfVxufSk7XG5jb25zdCBpc05vdEFub255bW91cyA9IG1hcCh1c2VyID0+ICEhdXNlciAmJiAhdXNlci5pc0Fub255bW91cyk7XG5jb25zdCBpZFRva2VuUmVzdWx0ID0gc3dpdGNoTWFwKHVzZXIgPT4gdXNlciA/IHVzZXIuZ2V0SWRUb2tlblJlc3VsdCgpIDogb2YobnVsbCkpO1xuY29uc3QgZW1haWxWZXJpZmllZCA9IG1hcCh1c2VyID0+ICEhdXNlciAmJiB1c2VyLmVtYWlsVmVyaWZpZWQpO1xuY29uc3QgY3VzdG9tQ2xhaW1zID0gcGlwZShpZFRva2VuUmVzdWx0LCBtYXAoaWRUb2tlblJlc3VsdCA9PiBpZFRva2VuUmVzdWx0ID8gaWRUb2tlblJlc3VsdC5jbGFpbXMgOiBbXSkpO1xuY29uc3QgaGFzQ3VzdG9tQ2xhaW0gPVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuY2xhaW0gPT4gcGlwZShjdXN0b21DbGFpbXMsIG1hcChjbGFpbXMgPT4gY2xhaW1zLmhhc093blByb3BlcnR5KGNsYWltKSkpO1xuY29uc3QgcmVkaXJlY3RVbmF1dGhvcml6ZWRUbyA9IHJlZGlyZWN0ID0+IHBpcGUobG9nZ2VkSW4sIG1hcChsb2dnZWRJbiA9PiBsb2dnZWRJbiB8fCByZWRpcmVjdCkpO1xuY29uc3QgcmVkaXJlY3RMb2dnZWRJblRvID0gcmVkaXJlY3QgPT4gcGlwZShsb2dnZWRJbiwgbWFwKGxvZ2dlZEluID0+IGxvZ2dlZEluICYmIHJlZGlyZWN0IHx8IHRydWUpKTtcbmNsYXNzIEF1dGhHdWFyZE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHJlZ2lzdGVyVmVyc2lvbignYW5ndWxhcmZpcmUnLCBWRVJTSU9OLmZ1bGwsICdhdXRoLWd1YXJkJyk7XG4gIH1cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gQXV0aEd1YXJkTW9kdWxlX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBBdXRoR3VhcmRNb2R1bGUpKCk7XG4gIH07XG4gIHN0YXRpYyDJtW1vZCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVOZ01vZHVsZSh7XG4gICAgdHlwZTogQXV0aEd1YXJkTW9kdWxlXG4gIH0pO1xuICBzdGF0aWMgybVpbmogPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lSW5qZWN0b3Ioe1xuICAgIHByb3ZpZGVyczogW0F1dGhHdWFyZF1cbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShBdXRoR3VhcmRNb2R1bGUsIFt7XG4gICAgdHlwZTogTmdNb2R1bGUsXG4gICAgYXJnczogW3tcbiAgICAgIHByb3ZpZGVyczogW0F1dGhHdWFyZF1cbiAgICB9XVxuICB9XSwgKCkgPT4gW10sIG51bGwpO1xufSkoKTtcblxuLyoqXG4gKiBHZW5lcmF0ZWQgYnVuZGxlIGluZGV4LiBEbyBub3QgZWRpdC5cbiAqL1xuXG5leHBvcnQgeyBBdXRoR3VhcmQsIEF1dGhHdWFyZE1vZHVsZSwgY2FuQWN0aXZhdGUsIGN1c3RvbUNsYWltcywgZW1haWxWZXJpZmllZCwgaGFzQ3VzdG9tQ2xhaW0sIGlkVG9rZW5SZXN1bHQsIGlzTm90QW5vbnltb3VzLCBsb2dnZWRJbiwgcmVkaXJlY3RMb2dnZWRJblRvLCByZWRpcmVjdFVuYXV0aG9yaXplZFRvIH07XG4iLCJpbXBvcnQgeyBfZ2V0UHJvdmlkZXIsIGdldEFwcCwgX3JlZ2lzdGVyQ29tcG9uZW50LCByZWdpc3RlclZlcnNpb24gfSBmcm9tICdAZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0BmaXJlYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgRXJyb3JGYWN0b3J5LCBGaXJlYmFzZUVycm9yIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuaW1wb3J0IHsgb3BlbkRCIH0gZnJvbSAnaWRiJztcbmNvbnN0IG5hbWUgPSBcIkBmaXJlYmFzZS9pbnN0YWxsYXRpb25zXCI7XG5jb25zdCB2ZXJzaW9uID0gXCIwLjYuMTNcIjtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmNvbnN0IFBFTkRJTkdfVElNRU9VVF9NUyA9IDEwMDAwO1xuY29uc3QgUEFDS0FHRV9WRVJTSU9OID0gYHc6JHt2ZXJzaW9ufWA7XG5jb25zdCBJTlRFUk5BTF9BVVRIX1ZFUlNJT04gPSAnRklTX3YyJztcbmNvbnN0IElOU1RBTExBVElPTlNfQVBJX1VSTCA9ICdodHRwczovL2ZpcmViYXNlaW5zdGFsbGF0aW9ucy5nb29nbGVhcGlzLmNvbS92MSc7XG5jb25zdCBUT0tFTl9FWFBJUkFUSU9OX0JVRkZFUiA9IDYwICogNjAgKiAxMDAwOyAvLyBPbmUgaG91clxuY29uc3QgU0VSVklDRSA9ICdpbnN0YWxsYXRpb25zJztcbmNvbnN0IFNFUlZJQ0VfTkFNRSA9ICdJbnN0YWxsYXRpb25zJztcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmNvbnN0IEVSUk9SX0RFU0NSSVBUSU9OX01BUCA9IHtcbiAgW1wibWlzc2luZy1hcHAtY29uZmlnLXZhbHVlc1wiIC8qIEVycm9yQ29kZS5NSVNTSU5HX0FQUF9DT05GSUdfVkFMVUVTICovXTogJ01pc3NpbmcgQXBwIGNvbmZpZ3VyYXRpb24gdmFsdWU6IFwieyR2YWx1ZU5hbWV9XCInLFxuICBbXCJub3QtcmVnaXN0ZXJlZFwiIC8qIEVycm9yQ29kZS5OT1RfUkVHSVNURVJFRCAqL106ICdGaXJlYmFzZSBJbnN0YWxsYXRpb24gaXMgbm90IHJlZ2lzdGVyZWQuJyxcbiAgW1wiaW5zdGFsbGF0aW9uLW5vdC1mb3VuZFwiIC8qIEVycm9yQ29kZS5JTlNUQUxMQVRJT05fTk9UX0ZPVU5EICovXTogJ0ZpcmViYXNlIEluc3RhbGxhdGlvbiBub3QgZm91bmQuJyxcbiAgW1wicmVxdWVzdC1mYWlsZWRcIiAvKiBFcnJvckNvZGUuUkVRVUVTVF9GQUlMRUQgKi9dOiAneyRyZXF1ZXN0TmFtZX0gcmVxdWVzdCBmYWlsZWQgd2l0aCBlcnJvciBcInskc2VydmVyQ29kZX0geyRzZXJ2ZXJTdGF0dXN9OiB7JHNlcnZlck1lc3NhZ2V9XCInLFxuICBbXCJhcHAtb2ZmbGluZVwiIC8qIEVycm9yQ29kZS5BUFBfT0ZGTElORSAqL106ICdDb3VsZCBub3QgcHJvY2VzcyByZXF1ZXN0LiBBcHBsaWNhdGlvbiBvZmZsaW5lLicsXG4gIFtcImRlbGV0ZS1wZW5kaW5nLXJlZ2lzdHJhdGlvblwiIC8qIEVycm9yQ29kZS5ERUxFVEVfUEVORElOR19SRUdJU1RSQVRJT04gKi9dOiBcIkNhbid0IGRlbGV0ZSBpbnN0YWxsYXRpb24gd2hpbGUgdGhlcmUgaXMgYSBwZW5kaW5nIHJlZ2lzdHJhdGlvbiByZXF1ZXN0LlwiXG59O1xuY29uc3QgRVJST1JfRkFDVE9SWSA9IG5ldyBFcnJvckZhY3RvcnkoU0VSVklDRSwgU0VSVklDRV9OQU1FLCBFUlJPUl9ERVNDUklQVElPTl9NQVApO1xuLyoqIFJldHVybnMgdHJ1ZSBpZiBlcnJvciBpcyBhIEZpcmViYXNlRXJyb3IgdGhhdCBpcyBiYXNlZCBvbiBhbiBlcnJvciBmcm9tIHRoZSBzZXJ2ZXIuICovXG5mdW5jdGlvbiBpc1NlcnZlckVycm9yKGVycm9yKSB7XG4gIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIEZpcmViYXNlRXJyb3IgJiYgZXJyb3IuY29kZS5pbmNsdWRlcyhcInJlcXVlc3QtZmFpbGVkXCIgLyogRXJyb3JDb2RlLlJFUVVFU1RfRkFJTEVEICovKTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmZ1bmN0aW9uIGdldEluc3RhbGxhdGlvbnNFbmRwb2ludCh7XG4gIHByb2plY3RJZFxufSkge1xuICByZXR1cm4gYCR7SU5TVEFMTEFUSU9OU19BUElfVVJMfS9wcm9qZWN0cy8ke3Byb2plY3RJZH0vaW5zdGFsbGF0aW9uc2A7XG59XG5mdW5jdGlvbiBleHRyYWN0QXV0aFRva2VuSW5mb0Zyb21SZXNwb25zZShyZXNwb25zZSkge1xuICByZXR1cm4ge1xuICAgIHRva2VuOiByZXNwb25zZS50b2tlbixcbiAgICByZXF1ZXN0U3RhdHVzOiAyIC8qIFJlcXVlc3RTdGF0dXMuQ09NUExFVEVEICovLFxuICAgIGV4cGlyZXNJbjogZ2V0RXhwaXJlc0luRnJvbVJlc3BvbnNlRXhwaXJlc0luKHJlc3BvbnNlLmV4cGlyZXNJbiksXG4gICAgY3JlYXRpb25UaW1lOiBEYXRlLm5vdygpXG4gIH07XG59XG5hc3luYyBmdW5jdGlvbiBnZXRFcnJvckZyb21SZXNwb25zZShyZXF1ZXN0TmFtZSwgcmVzcG9uc2UpIHtcbiAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBlcnJvckRhdGEgPSByZXNwb25zZUpzb24uZXJyb3I7XG4gIHJldHVybiBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcInJlcXVlc3QtZmFpbGVkXCIgLyogRXJyb3JDb2RlLlJFUVVFU1RfRkFJTEVEICovLCB7XG4gICAgcmVxdWVzdE5hbWUsXG4gICAgc2VydmVyQ29kZTogZXJyb3JEYXRhLmNvZGUsXG4gICAgc2VydmVyTWVzc2FnZTogZXJyb3JEYXRhLm1lc3NhZ2UsXG4gICAgc2VydmVyU3RhdHVzOiBlcnJvckRhdGEuc3RhdHVzXG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0SGVhZGVycyh7XG4gIGFwaUtleVxufSkge1xuICByZXR1cm4gbmV3IEhlYWRlcnMoe1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ3gtZ29vZy1hcGkta2V5JzogYXBpS2V5XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0SGVhZGVyc1dpdGhBdXRoKGFwcENvbmZpZywge1xuICByZWZyZXNoVG9rZW5cbn0pIHtcbiAgY29uc3QgaGVhZGVycyA9IGdldEhlYWRlcnMoYXBwQ29uZmlnKTtcbiAgaGVhZGVycy5hcHBlbmQoJ0F1dGhvcml6YXRpb24nLCBnZXRBdXRob3JpemF0aW9uSGVhZGVyKHJlZnJlc2hUb2tlbikpO1xuICByZXR1cm4gaGVhZGVycztcbn1cbi8qKlxuICogQ2FsbHMgdGhlIHBhc3NlZCBpbiBmZXRjaCB3cmFwcGVyIGFuZCByZXR1cm5zIHRoZSByZXNwb25zZS5cbiAqIElmIHRoZSByZXR1cm5lZCByZXNwb25zZSBoYXMgYSBzdGF0dXMgb2YgNXh4LCByZS1ydW5zIHRoZSBmdW5jdGlvbiBvbmNlIGFuZFxuICogcmV0dXJucyB0aGUgcmVzcG9uc2UuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJldHJ5SWZTZXJ2ZXJFcnJvcihmbikge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmbigpO1xuICBpZiAocmVzdWx0LnN0YXR1cyA+PSA1MDAgJiYgcmVzdWx0LnN0YXR1cyA8IDYwMCkge1xuICAgIC8vIEludGVybmFsIFNlcnZlciBFcnJvci4gUmV0cnkgcmVxdWVzdC5cbiAgICByZXR1cm4gZm4oKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZ2V0RXhwaXJlc0luRnJvbVJlc3BvbnNlRXhwaXJlc0luKHJlc3BvbnNlRXhwaXJlc0luKSB7XG4gIC8vIFRoaXMgd29ya3MgYmVjYXVzZSB0aGUgc2VydmVyIHdpbGwgbmV2ZXIgcmVzcG9uZCB3aXRoIGZyYWN0aW9ucyBvZiBhIHNlY29uZC5cbiAgcmV0dXJuIE51bWJlcihyZXNwb25zZUV4cGlyZXNJbi5yZXBsYWNlKCdzJywgJzAwMCcpKTtcbn1cbmZ1bmN0aW9uIGdldEF1dGhvcml6YXRpb25IZWFkZXIocmVmcmVzaFRva2VuKSB7XG4gIHJldHVybiBgJHtJTlRFUk5BTF9BVVRIX1ZFUlNJT059ICR7cmVmcmVzaFRva2VufWA7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVJbnN0YWxsYXRpb25SZXF1ZXN0KHtcbiAgYXBwQ29uZmlnLFxuICBoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXJcbn0sIHtcbiAgZmlkXG59KSB7XG4gIGNvbnN0IGVuZHBvaW50ID0gZ2V0SW5zdGFsbGF0aW9uc0VuZHBvaW50KGFwcENvbmZpZyk7XG4gIGNvbnN0IGhlYWRlcnMgPSBnZXRIZWFkZXJzKGFwcENvbmZpZyk7XG4gIC8vIElmIGhlYXJ0YmVhdCBzZXJ2aWNlIGV4aXN0cywgYWRkIHRoZSBoZWFydGJlYXQgc3RyaW5nIHRvIHRoZSBoZWFkZXIuXG4gIGNvbnN0IGhlYXJ0YmVhdFNlcnZpY2UgPSBoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIuZ2V0SW1tZWRpYXRlKHtcbiAgICBvcHRpb25hbDogdHJ1ZVxuICB9KTtcbiAgaWYgKGhlYXJ0YmVhdFNlcnZpY2UpIHtcbiAgICBjb25zdCBoZWFydGJlYXRzSGVhZGVyID0gYXdhaXQgaGVhcnRiZWF0U2VydmljZS5nZXRIZWFydGJlYXRzSGVhZGVyKCk7XG4gICAgaWYgKGhlYXJ0YmVhdHNIZWFkZXIpIHtcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCd4LWZpcmViYXNlLWNsaWVudCcsIGhlYXJ0YmVhdHNIZWFkZXIpO1xuICAgIH1cbiAgfVxuICBjb25zdCBib2R5ID0ge1xuICAgIGZpZCxcbiAgICBhdXRoVmVyc2lvbjogSU5URVJOQUxfQVVUSF9WRVJTSU9OLFxuICAgIGFwcElkOiBhcHBDb25maWcuYXBwSWQsXG4gICAgc2RrVmVyc2lvbjogUEFDS0FHRV9WRVJTSU9OXG4gIH07XG4gIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVycyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxuICB9O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJldHJ5SWZTZXJ2ZXJFcnJvcigoKSA9PiBmZXRjaChlbmRwb2ludCwgcmVxdWVzdCkpO1xuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICBjb25zdCByZXNwb25zZVZhbHVlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IHJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeSA9IHtcbiAgICAgIGZpZDogcmVzcG9uc2VWYWx1ZS5maWQgfHwgZmlkLFxuICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzOiAyIC8qIFJlcXVlc3RTdGF0dXMuQ09NUExFVEVEICovLFxuICAgICAgcmVmcmVzaFRva2VuOiByZXNwb25zZVZhbHVlLnJlZnJlc2hUb2tlbixcbiAgICAgIGF1dGhUb2tlbjogZXh0cmFjdEF1dGhUb2tlbkluZm9Gcm9tUmVzcG9uc2UocmVzcG9uc2VWYWx1ZS5hdXRoVG9rZW4pXG4gICAgfTtcbiAgICByZXR1cm4gcmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5O1xuICB9IGVsc2Uge1xuICAgIHRocm93IGF3YWl0IGdldEVycm9yRnJvbVJlc3BvbnNlKCdDcmVhdGUgSW5zdGFsbGF0aW9uJywgcmVzcG9uc2UpO1xuICB9XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKiogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciBnaXZlbiB0aW1lIHBhc3Nlcy4gKi9cbmZ1bmN0aW9uIHNsZWVwKG1zKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5mdW5jdGlvbiBidWZmZXJUb0Jhc2U2NFVybFNhZmUoYXJyYXkpIHtcbiAgY29uc3QgYjY0ID0gYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLmFycmF5KSk7XG4gIHJldHVybiBiNjQucmVwbGFjZSgvXFwrL2csICctJykucmVwbGFjZSgvXFwvL2csICdfJyk7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5jb25zdCBWQUxJRF9GSURfUEFUVEVSTiA9IC9eW2NkZWZdW1xcdy1dezIxfSQvO1xuY29uc3QgSU5WQUxJRF9GSUQgPSAnJztcbi8qKlxuICogR2VuZXJhdGVzIGEgbmV3IEZJRCB1c2luZyByYW5kb20gdmFsdWVzIGZyb20gV2ViIENyeXB0byBBUEkuXG4gKiBSZXR1cm5zIGFuIGVtcHR5IHN0cmluZyBpZiBGSUQgZ2VuZXJhdGlvbiBmYWlscyBmb3IgYW55IHJlYXNvbi5cbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVGaWQoKSB7XG4gIHRyeSB7XG4gICAgLy8gQSB2YWxpZCBGSUQgaGFzIGV4YWN0bHkgMjIgYmFzZTY0IGNoYXJhY3RlcnMsIHdoaWNoIGlzIDEzMiBiaXRzLCBvciAxNi41XG4gICAgLy8gYnl0ZXMuIG91ciBpbXBsZW1lbnRhdGlvbiBnZW5lcmF0ZXMgYSAxNyBieXRlIGFycmF5IGluc3RlYWQuXG4gICAgY29uc3QgZmlkQnl0ZUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoMTcpO1xuICAgIGNvbnN0IGNyeXB0byA9IHNlbGYuY3J5cHRvIHx8IHNlbGYubXNDcnlwdG87XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhmaWRCeXRlQXJyYXkpO1xuICAgIC8vIFJlcGxhY2UgdGhlIGZpcnN0IDQgcmFuZG9tIGJpdHMgd2l0aCB0aGUgY29uc3RhbnQgRklEIGhlYWRlciBvZiAwYjAxMTEuXG4gICAgZmlkQnl0ZUFycmF5WzBdID0gMGIwMTExMDAwMCArIGZpZEJ5dGVBcnJheVswXSAlIDBiMDAwMTAwMDA7XG4gICAgY29uc3QgZmlkID0gZW5jb2RlKGZpZEJ5dGVBcnJheSk7XG4gICAgcmV0dXJuIFZBTElEX0ZJRF9QQVRURVJOLnRlc3QoZmlkKSA/IGZpZCA6IElOVkFMSURfRklEO1xuICB9IGNhdGNoIChfYSkge1xuICAgIC8vIEZJRCBnZW5lcmF0aW9uIGVycm9yZWRcbiAgICByZXR1cm4gSU5WQUxJRF9GSUQ7XG4gIH1cbn1cbi8qKiBDb252ZXJ0cyBhIEZJRCBVaW50OEFycmF5IHRvIGEgYmFzZTY0IHN0cmluZyByZXByZXNlbnRhdGlvbi4gKi9cbmZ1bmN0aW9uIGVuY29kZShmaWRCeXRlQXJyYXkpIHtcbiAgY29uc3QgYjY0U3RyaW5nID0gYnVmZmVyVG9CYXNlNjRVcmxTYWZlKGZpZEJ5dGVBcnJheSk7XG4gIC8vIFJlbW92ZSB0aGUgMjNyZCBjaGFyYWN0ZXIgdGhhdCB3YXMgYWRkZWQgYmVjYXVzZSBvZiB0aGUgZXh0cmEgNCBiaXRzIGF0IHRoZVxuICAvLyBlbmQgb2Ygb3VyIDE3IGJ5dGUgYXJyYXksIGFuZCB0aGUgJz0nIHBhZGRpbmcuXG4gIHJldHVybiBiNjRTdHJpbmcuc3Vic3RyKDAsIDIyKTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKiBSZXR1cm5zIGEgc3RyaW5nIGtleSB0aGF0IGNhbiBiZSB1c2VkIHRvIGlkZW50aWZ5IHRoZSBhcHAuICovXG5mdW5jdGlvbiBnZXRLZXkoYXBwQ29uZmlnKSB7XG4gIHJldHVybiBgJHthcHBDb25maWcuYXBwTmFtZX0hJHthcHBDb25maWcuYXBwSWR9YDtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmNvbnN0IGZpZENoYW5nZUNhbGxiYWNrcyA9IG5ldyBNYXAoKTtcbi8qKlxuICogQ2FsbHMgdGhlIG9uSWRDaGFuZ2UgY2FsbGJhY2tzIHdpdGggdGhlIG5ldyBGSUQgdmFsdWUsIGFuZCBicm9hZGNhc3RzIHRoZVxuICogY2hhbmdlIHRvIG90aGVyIHRhYnMuXG4gKi9cbmZ1bmN0aW9uIGZpZENoYW5nZWQoYXBwQ29uZmlnLCBmaWQpIHtcbiAgY29uc3Qga2V5ID0gZ2V0S2V5KGFwcENvbmZpZyk7XG4gIGNhbGxGaWRDaGFuZ2VDYWxsYmFja3Moa2V5LCBmaWQpO1xuICBicm9hZGNhc3RGaWRDaGFuZ2Uoa2V5LCBmaWQpO1xufVxuZnVuY3Rpb24gYWRkQ2FsbGJhY2soYXBwQ29uZmlnLCBjYWxsYmFjaykge1xuICAvLyBPcGVuIHRoZSBicm9hZGNhc3QgY2hhbm5lbCBpZiBpdCdzIG5vdCBhbHJlYWR5IG9wZW4sXG4gIC8vIHRvIGJlIGFibGUgdG8gbGlzdGVuIHRvIGNoYW5nZSBldmVudHMgZnJvbSBvdGhlciB0YWJzLlxuICBnZXRCcm9hZGNhc3RDaGFubmVsKCk7XG4gIGNvbnN0IGtleSA9IGdldEtleShhcHBDb25maWcpO1xuICBsZXQgY2FsbGJhY2tTZXQgPSBmaWRDaGFuZ2VDYWxsYmFja3MuZ2V0KGtleSk7XG4gIGlmICghY2FsbGJhY2tTZXQpIHtcbiAgICBjYWxsYmFja1NldCA9IG5ldyBTZXQoKTtcbiAgICBmaWRDaGFuZ2VDYWxsYmFja3Muc2V0KGtleSwgY2FsbGJhY2tTZXQpO1xuICB9XG4gIGNhbGxiYWNrU2V0LmFkZChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiByZW1vdmVDYWxsYmFjayhhcHBDb25maWcsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGtleSA9IGdldEtleShhcHBDb25maWcpO1xuICBjb25zdCBjYWxsYmFja1NldCA9IGZpZENoYW5nZUNhbGxiYWNrcy5nZXQoa2V5KTtcbiAgaWYgKCFjYWxsYmFja1NldCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjYWxsYmFja1NldC5kZWxldGUoY2FsbGJhY2spO1xuICBpZiAoY2FsbGJhY2tTZXQuc2l6ZSA9PT0gMCkge1xuICAgIGZpZENoYW5nZUNhbGxiYWNrcy5kZWxldGUoa2V5KTtcbiAgfVxuICAvLyBDbG9zZSBicm9hZGNhc3QgY2hhbm5lbCBpZiB0aGVyZSBhcmUgbm8gbW9yZSBjYWxsYmFja3MuXG4gIGNsb3NlQnJvYWRjYXN0Q2hhbm5lbCgpO1xufVxuZnVuY3Rpb24gY2FsbEZpZENoYW5nZUNhbGxiYWNrcyhrZXksIGZpZCkge1xuICBjb25zdCBjYWxsYmFja3MgPSBmaWRDaGFuZ2VDYWxsYmFja3MuZ2V0KGtleSk7XG4gIGlmICghY2FsbGJhY2tzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgY2FsbGJhY2tzKSB7XG4gICAgY2FsbGJhY2soZmlkKTtcbiAgfVxufVxuZnVuY3Rpb24gYnJvYWRjYXN0RmlkQ2hhbmdlKGtleSwgZmlkKSB7XG4gIGNvbnN0IGNoYW5uZWwgPSBnZXRCcm9hZGNhc3RDaGFubmVsKCk7XG4gIGlmIChjaGFubmVsKSB7XG4gICAgY2hhbm5lbC5wb3N0TWVzc2FnZSh7XG4gICAgICBrZXksXG4gICAgICBmaWRcbiAgICB9KTtcbiAgfVxuICBjbG9zZUJyb2FkY2FzdENoYW5uZWwoKTtcbn1cbmxldCBicm9hZGNhc3RDaGFubmVsID0gbnVsbDtcbi8qKiBPcGVucyBhbmQgcmV0dXJucyBhIEJyb2FkY2FzdENoYW5uZWwgaWYgaXQgaXMgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyLiAqL1xuZnVuY3Rpb24gZ2V0QnJvYWRjYXN0Q2hhbm5lbCgpIHtcbiAgaWYgKCFicm9hZGNhc3RDaGFubmVsICYmICdCcm9hZGNhc3RDaGFubmVsJyBpbiBzZWxmKSB7XG4gICAgYnJvYWRjYXN0Q2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKCdbRmlyZWJhc2VdIEZJRCBDaGFuZ2UnKTtcbiAgICBicm9hZGNhc3RDaGFubmVsLm9ubWVzc2FnZSA9IGUgPT4ge1xuICAgICAgY2FsbEZpZENoYW5nZUNhbGxiYWNrcyhlLmRhdGEua2V5LCBlLmRhdGEuZmlkKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBicm9hZGNhc3RDaGFubmVsO1xufVxuZnVuY3Rpb24gY2xvc2VCcm9hZGNhc3RDaGFubmVsKCkge1xuICBpZiAoZmlkQ2hhbmdlQ2FsbGJhY2tzLnNpemUgPT09IDAgJiYgYnJvYWRjYXN0Q2hhbm5lbCkge1xuICAgIGJyb2FkY2FzdENoYW5uZWwuY2xvc2UoKTtcbiAgICBicm9hZGNhc3RDaGFubmVsID0gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuY29uc3QgREFUQUJBU0VfTkFNRSA9ICdmaXJlYmFzZS1pbnN0YWxsYXRpb25zLWRhdGFiYXNlJztcbmNvbnN0IERBVEFCQVNFX1ZFUlNJT04gPSAxO1xuY29uc3QgT0JKRUNUX1NUT1JFX05BTUUgPSAnZmlyZWJhc2UtaW5zdGFsbGF0aW9ucy1zdG9yZSc7XG5sZXQgZGJQcm9taXNlID0gbnVsbDtcbmZ1bmN0aW9uIGdldERiUHJvbWlzZSgpIHtcbiAgaWYgKCFkYlByb21pc2UpIHtcbiAgICBkYlByb21pc2UgPSBvcGVuREIoREFUQUJBU0VfTkFNRSwgREFUQUJBU0VfVkVSU0lPTiwge1xuICAgICAgdXBncmFkZTogKGRiLCBvbGRWZXJzaW9uKSA9PiB7XG4gICAgICAgIC8vIFdlIGRvbid0IHVzZSAnYnJlYWsnIGluIHRoaXMgc3dpdGNoIHN0YXRlbWVudCwgdGhlIGZhbGwtdGhyb3VnaFxuICAgICAgICAvLyBiZWhhdmlvciBpcyB3aGF0IHdlIHdhbnQsIGJlY2F1c2UgaWYgdGhlcmUgYXJlIG11bHRpcGxlIHZlcnNpb25zIGJldHdlZW5cbiAgICAgICAgLy8gdGhlIG9sZCB2ZXJzaW9uIGFuZCB0aGUgY3VycmVudCB2ZXJzaW9uLCB3ZSB3YW50IEFMTCB0aGUgbWlncmF0aW9uc1xuICAgICAgICAvLyB0aGF0IGNvcnJlc3BvbmQgdG8gdGhvc2UgdmVyc2lvbnMgdG8gcnVuLCBub3Qgb25seSB0aGUgbGFzdCBvbmUuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LWNhc2VcbiAgICAgICAgc3dpdGNoIChvbGRWZXJzaW9uKSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoT0JKRUNUX1NUT1JFX05BTUUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGRiUHJvbWlzZTtcbn1cbi8qKiBBc3NpZ25zIG9yIG92ZXJ3cml0ZXMgdGhlIHJlY29yZCBmb3IgdGhlIGdpdmVuIGtleSB3aXRoIHRoZSBnaXZlbiB2YWx1ZS4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldChhcHBDb25maWcsIHZhbHVlKSB7XG4gIGNvbnN0IGtleSA9IGdldEtleShhcHBDb25maWcpO1xuICBjb25zdCBkYiA9IGF3YWl0IGdldERiUHJvbWlzZSgpO1xuICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKE9CSkVDVF9TVE9SRV9OQU1FLCAncmVhZHdyaXRlJyk7XG4gIGNvbnN0IG9iamVjdFN0b3JlID0gdHgub2JqZWN0U3RvcmUoT0JKRUNUX1NUT1JFX05BTUUpO1xuICBjb25zdCBvbGRWYWx1ZSA9IGF3YWl0IG9iamVjdFN0b3JlLmdldChrZXkpO1xuICBhd2FpdCBvYmplY3RTdG9yZS5wdXQodmFsdWUsIGtleSk7XG4gIGF3YWl0IHR4LmRvbmU7XG4gIGlmICghb2xkVmFsdWUgfHwgb2xkVmFsdWUuZmlkICE9PSB2YWx1ZS5maWQpIHtcbiAgICBmaWRDaGFuZ2VkKGFwcENvbmZpZywgdmFsdWUuZmlkKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG4vKiogUmVtb3ZlcyByZWNvcmQocykgZnJvbSB0aGUgb2JqZWN0U3RvcmUgdGhhdCBtYXRjaCB0aGUgZ2l2ZW4ga2V5LiAqL1xuYXN5bmMgZnVuY3Rpb24gcmVtb3ZlKGFwcENvbmZpZykge1xuICBjb25zdCBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcbiAgY29uc3QgZGIgPSBhd2FpdCBnZXREYlByb21pc2UoKTtcbiAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihPQkpFQ1RfU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScpO1xuICBhd2FpdCB0eC5vYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSkuZGVsZXRlKGtleSk7XG4gIGF3YWl0IHR4LmRvbmU7XG59XG4vKipcbiAqIEF0b21pY2FsbHkgdXBkYXRlcyBhIHJlY29yZCB3aXRoIHRoZSByZXN1bHQgb2YgdXBkYXRlRm4sIHdoaWNoIGdldHNcbiAqIGNhbGxlZCB3aXRoIHRoZSBjdXJyZW50IHZhbHVlLiBJZiBuZXdWYWx1ZSBpcyB1bmRlZmluZWQsIHRoZSByZWNvcmQgaXNcbiAqIGRlbGV0ZWQgaW5zdGVhZC5cbiAqIEByZXR1cm4gVXBkYXRlZCB2YWx1ZVxuICovXG5hc3luYyBmdW5jdGlvbiB1cGRhdGUoYXBwQ29uZmlnLCB1cGRhdGVGbikge1xuICBjb25zdCBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcbiAgY29uc3QgZGIgPSBhd2FpdCBnZXREYlByb21pc2UoKTtcbiAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihPQkpFQ1RfU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScpO1xuICBjb25zdCBzdG9yZSA9IHR4Lm9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FKTtcbiAgY29uc3Qgb2xkVmFsdWUgPSBhd2FpdCBzdG9yZS5nZXQoa2V5KTtcbiAgY29uc3QgbmV3VmFsdWUgPSB1cGRhdGVGbihvbGRWYWx1ZSk7XG4gIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXdhaXQgc3RvcmUuZGVsZXRlKGtleSk7XG4gIH0gZWxzZSB7XG4gICAgYXdhaXQgc3RvcmUucHV0KG5ld1ZhbHVlLCBrZXkpO1xuICB9XG4gIGF3YWl0IHR4LmRvbmU7XG4gIGlmIChuZXdWYWx1ZSAmJiAoIW9sZFZhbHVlIHx8IG9sZFZhbHVlLmZpZCAhPT0gbmV3VmFsdWUuZmlkKSkge1xuICAgIGZpZENoYW5nZWQoYXBwQ29uZmlnLCBuZXdWYWx1ZS5maWQpO1xuICB9XG4gIHJldHVybiBuZXdWYWx1ZTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogVXBkYXRlcyBhbmQgcmV0dXJucyB0aGUgSW5zdGFsbGF0aW9uRW50cnkgZnJvbSB0aGUgZGF0YWJhc2UuXG4gKiBBbHNvIHRyaWdnZXJzIGEgcmVnaXN0cmF0aW9uIHJlcXVlc3QgaWYgaXQgaXMgbmVjZXNzYXJ5IGFuZCBwb3NzaWJsZS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0SW5zdGFsbGF0aW9uRW50cnkoaW5zdGFsbGF0aW9ucykge1xuICBsZXQgcmVnaXN0cmF0aW9uUHJvbWlzZTtcbiAgY29uc3QgaW5zdGFsbGF0aW9uRW50cnkgPSBhd2FpdCB1cGRhdGUoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcsIG9sZEVudHJ5ID0+IHtcbiAgICBjb25zdCBpbnN0YWxsYXRpb25FbnRyeSA9IHVwZGF0ZU9yQ3JlYXRlSW5zdGFsbGF0aW9uRW50cnkob2xkRW50cnkpO1xuICAgIGNvbnN0IGVudHJ5V2l0aFByb21pc2UgPSB0cmlnZ2VyUmVnaXN0cmF0aW9uSWZOZWNlc3NhcnkoaW5zdGFsbGF0aW9ucywgaW5zdGFsbGF0aW9uRW50cnkpO1xuICAgIHJlZ2lzdHJhdGlvblByb21pc2UgPSBlbnRyeVdpdGhQcm9taXNlLnJlZ2lzdHJhdGlvblByb21pc2U7XG4gICAgcmV0dXJuIGVudHJ5V2l0aFByb21pc2UuaW5zdGFsbGF0aW9uRW50cnk7XG4gIH0pO1xuICBpZiAoaW5zdGFsbGF0aW9uRW50cnkuZmlkID09PSBJTlZBTElEX0ZJRCkge1xuICAgIC8vIEZJRCBnZW5lcmF0aW9uIGZhaWxlZC4gV2FpdGluZyBmb3IgdGhlIEZJRCBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgcmV0dXJuIHtcbiAgICAgIGluc3RhbGxhdGlvbkVudHJ5OiBhd2FpdCByZWdpc3RyYXRpb25Qcm9taXNlXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGluc3RhbGxhdGlvbkVudHJ5LFxuICAgIHJlZ2lzdHJhdGlvblByb21pc2VcbiAgfTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBJbnN0YWxsYXRpb24gRW50cnkgaWYgb25lIGRvZXMgbm90IGV4aXN0LlxuICogQWxzbyBjbGVhcnMgdGltZWQgb3V0IHBlbmRpbmcgcmVxdWVzdHMuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZU9yQ3JlYXRlSW5zdGFsbGF0aW9uRW50cnkob2xkRW50cnkpIHtcbiAgY29uc3QgZW50cnkgPSBvbGRFbnRyeSB8fCB7XG4gICAgZmlkOiBnZW5lcmF0ZUZpZCgpLFxuICAgIHJlZ2lzdHJhdGlvblN0YXR1czogMCAvKiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEICovXG4gIH07XG4gIHJldHVybiBjbGVhclRpbWVkT3V0UmVxdWVzdChlbnRyeSk7XG59XG4vKipcbiAqIElmIHRoZSBGaXJlYmFzZSBJbnN0YWxsYXRpb24gaXMgbm90IHJlZ2lzdGVyZWQgeWV0LCB0aGlzIHdpbGwgdHJpZ2dlciB0aGVcbiAqIHJlZ2lzdHJhdGlvbiBhbmQgcmV0dXJuIGFuIEluUHJvZ3Jlc3NJbnN0YWxsYXRpb25FbnRyeS5cbiAqXG4gKiBJZiByZWdpc3RyYXRpb25Qcm9taXNlIGRvZXMgbm90IGV4aXN0LCB0aGUgaW5zdGFsbGF0aW9uRW50cnkgaXMgZ3VhcmFudGVlZFxuICogdG8gYmUgcmVnaXN0ZXJlZC5cbiAqL1xuZnVuY3Rpb24gdHJpZ2dlclJlZ2lzdHJhdGlvbklmTmVjZXNzYXJ5KGluc3RhbGxhdGlvbnMsIGluc3RhbGxhdGlvbkVudHJ5KSB7XG4gIGlmIChpbnN0YWxsYXRpb25FbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IDAgLyogUmVxdWVzdFN0YXR1cy5OT1RfU1RBUlRFRCAqLykge1xuICAgIGlmICghbmF2aWdhdG9yLm9uTGluZSkge1xuICAgICAgLy8gUmVnaXN0cmF0aW9uIHJlcXVpcmVkIGJ1dCBhcHAgaXMgb2ZmbGluZS5cbiAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvblByb21pc2VXaXRoRXJyb3IgPSBQcm9taXNlLnJlamVjdChFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImFwcC1vZmZsaW5lXCIgLyogRXJyb3JDb2RlLkFQUF9PRkZMSU5FICovKSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbnN0YWxsYXRpb25FbnRyeSxcbiAgICAgICAgcmVnaXN0cmF0aW9uUHJvbWlzZTogcmVnaXN0cmF0aW9uUHJvbWlzZVdpdGhFcnJvclxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gVHJ5IHJlZ2lzdGVyaW5nLiBDaGFuZ2Ugc3RhdHVzIHRvIElOX1BST0dSRVNTLlxuICAgIGNvbnN0IGluUHJvZ3Jlc3NFbnRyeSA9IHtcbiAgICAgIGZpZDogaW5zdGFsbGF0aW9uRW50cnkuZmlkLFxuICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzOiAxIC8qIFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MgKi8sXG4gICAgICByZWdpc3RyYXRpb25UaW1lOiBEYXRlLm5vdygpXG4gICAgfTtcbiAgICBjb25zdCByZWdpc3RyYXRpb25Qcm9taXNlID0gcmVnaXN0ZXJJbnN0YWxsYXRpb24oaW5zdGFsbGF0aW9ucywgaW5Qcm9ncmVzc0VudHJ5KTtcbiAgICByZXR1cm4ge1xuICAgICAgaW5zdGFsbGF0aW9uRW50cnk6IGluUHJvZ3Jlc3NFbnRyeSxcbiAgICAgIHJlZ2lzdHJhdGlvblByb21pc2VcbiAgICB9O1xuICB9IGVsc2UgaWYgKGluc3RhbGxhdGlvbkVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gMSAvKiBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTICovKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluc3RhbGxhdGlvbkVudHJ5LFxuICAgICAgcmVnaXN0cmF0aW9uUHJvbWlzZTogd2FpdFVudGlsRmlkUmVnaXN0cmF0aW9uKGluc3RhbGxhdGlvbnMpXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5zdGFsbGF0aW9uRW50cnlcbiAgICB9O1xuICB9XG59XG4vKiogVGhpcyB3aWxsIGJlIGV4ZWN1dGVkIG9ubHkgb25jZSBmb3IgZWFjaCBuZXcgRmlyZWJhc2UgSW5zdGFsbGF0aW9uLiAqL1xuYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJJbnN0YWxsYXRpb24oaW5zdGFsbGF0aW9ucywgaW5zdGFsbGF0aW9uRW50cnkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnkgPSBhd2FpdCBjcmVhdGVJbnN0YWxsYXRpb25SZXF1ZXN0KGluc3RhbGxhdGlvbnMsIGluc3RhbGxhdGlvbkVudHJ5KTtcbiAgICByZXR1cm4gc2V0KGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnLCByZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGlzU2VydmVyRXJyb3IoZSkgJiYgZS5jdXN0b21EYXRhLnNlcnZlckNvZGUgPT09IDQwOSkge1xuICAgICAgLy8gU2VydmVyIHJldHVybmVkIGEgXCJGSUQgY2Fubm90IGJlIHVzZWRcIiBlcnJvci5cbiAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IElEIG5leHQgdGltZS5cbiAgICAgIGF3YWl0IHJlbW92ZShpbnN0YWxsYXRpb25zLmFwcENvbmZpZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlZ2lzdHJhdGlvbiBmYWlsZWQuIFNldCBGSUQgYXMgbm90IHJlZ2lzdGVyZWQuXG4gICAgICBhd2FpdCBzZXQoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcsIHtcbiAgICAgICAgZmlkOiBpbnN0YWxsYXRpb25FbnRyeS5maWQsXG4gICAgICAgIHJlZ2lzdHJhdGlvblN0YXR1czogMCAvKiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEICovXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhyb3cgZTtcbiAgfVxufVxuLyoqIENhbGwgaWYgRklEIHJlZ2lzdHJhdGlvbiBpcyBwZW5kaW5nIGluIGFub3RoZXIgcmVxdWVzdC4gKi9cbmFzeW5jIGZ1bmN0aW9uIHdhaXRVbnRpbEZpZFJlZ2lzdHJhdGlvbihpbnN0YWxsYXRpb25zKSB7XG4gIC8vIFVuZm9ydHVuYXRlbHksIHRoZXJlIGlzIG5vIHdheSBvZiByZWxpYWJseSBvYnNlcnZpbmcgd2hlbiBhIHZhbHVlIGluXG4gIC8vIEluZGV4ZWREQiBjaGFuZ2VzICh5ZXQsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9pbmRleGVkLWRiLW9ic2VydmVycyksXG4gIC8vIHNvIHdlIG5lZWQgdG8gcG9sbC5cbiAgbGV0IGVudHJ5ID0gYXdhaXQgdXBkYXRlSW5zdGFsbGF0aW9uUmVxdWVzdChpbnN0YWxsYXRpb25zLmFwcENvbmZpZyk7XG4gIHdoaWxlIChlbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IDEgLyogUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUyAqLykge1xuICAgIC8vIGNyZWF0ZUluc3RhbGxhdGlvbiByZXF1ZXN0IHN0aWxsIGluIHByb2dyZXNzLlxuICAgIGF3YWl0IHNsZWVwKDEwMCk7XG4gICAgZW50cnkgPSBhd2FpdCB1cGRhdGVJbnN0YWxsYXRpb25SZXF1ZXN0KGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnKTtcbiAgfVxuICBpZiAoZW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAwIC8qIFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURUQgKi8pIHtcbiAgICAvLyBUaGUgcmVxdWVzdCB0aW1lZCBvdXQgb3IgZmFpbGVkIGluIGEgZGlmZmVyZW50IGNhbGwuIFRyeSBhZ2Fpbi5cbiAgICBjb25zdCB7XG4gICAgICBpbnN0YWxsYXRpb25FbnRyeSxcbiAgICAgIHJlZ2lzdHJhdGlvblByb21pc2VcbiAgICB9ID0gYXdhaXQgZ2V0SW5zdGFsbGF0aW9uRW50cnkoaW5zdGFsbGF0aW9ucyk7XG4gICAgaWYgKHJlZ2lzdHJhdGlvblByb21pc2UpIHtcbiAgICAgIHJldHVybiByZWdpc3RyYXRpb25Qcm9taXNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBubyByZWdpc3RyYXRpb25Qcm9taXNlLCBlbnRyeSBpcyByZWdpc3RlcmVkLlxuICAgICAgcmV0dXJuIGluc3RhbGxhdGlvbkVudHJ5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZW50cnk7XG59XG4vKipcbiAqIENhbGxlZCBvbmx5IGlmIHRoZXJlIGlzIGEgQ3JlYXRlSW5zdGFsbGF0aW9uIHJlcXVlc3QgaW4gcHJvZ3Jlc3MuXG4gKlxuICogVXBkYXRlcyB0aGUgSW5zdGFsbGF0aW9uRW50cnkgaW4gdGhlIERCIGJhc2VkIG9uIHRoZSBzdGF0dXMgb2YgdGhlXG4gKiBDcmVhdGVJbnN0YWxsYXRpb24gcmVxdWVzdC5cbiAqXG4gKiBSZXR1cm5zIHRoZSB1cGRhdGVkIEluc3RhbGxhdGlvbkVudHJ5LlxuICovXG5mdW5jdGlvbiB1cGRhdGVJbnN0YWxsYXRpb25SZXF1ZXN0KGFwcENvbmZpZykge1xuICByZXR1cm4gdXBkYXRlKGFwcENvbmZpZywgb2xkRW50cnkgPT4ge1xuICAgIGlmICghb2xkRW50cnkpIHtcbiAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiaW5zdGFsbGF0aW9uLW5vdC1mb3VuZFwiIC8qIEVycm9yQ29kZS5JTlNUQUxMQVRJT05fTk9UX0ZPVU5EICovKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsZWFyVGltZWRPdXRSZXF1ZXN0KG9sZEVudHJ5KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBjbGVhclRpbWVkT3V0UmVxdWVzdChlbnRyeSkge1xuICBpZiAoaGFzSW5zdGFsbGF0aW9uUmVxdWVzdFRpbWVkT3V0KGVudHJ5KSkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWQ6IGVudHJ5LmZpZCxcbiAgICAgIHJlZ2lzdHJhdGlvblN0YXR1czogMCAvKiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEICovXG4gICAgfTtcbiAgfVxuICByZXR1cm4gZW50cnk7XG59XG5mdW5jdGlvbiBoYXNJbnN0YWxsYXRpb25SZXF1ZXN0VGltZWRPdXQoaW5zdGFsbGF0aW9uRW50cnkpIHtcbiAgcmV0dXJuIGluc3RhbGxhdGlvbkVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gMSAvKiBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTICovICYmIGluc3RhbGxhdGlvbkVudHJ5LnJlZ2lzdHJhdGlvblRpbWUgKyBQRU5ESU5HX1RJTUVPVVRfTVMgPCBEYXRlLm5vdygpO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVBdXRoVG9rZW5SZXF1ZXN0KHtcbiAgYXBwQ29uZmlnLFxuICBoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXJcbn0sIGluc3RhbGxhdGlvbkVudHJ5KSB7XG4gIGNvbnN0IGVuZHBvaW50ID0gZ2V0R2VuZXJhdGVBdXRoVG9rZW5FbmRwb2ludChhcHBDb25maWcsIGluc3RhbGxhdGlvbkVudHJ5KTtcbiAgY29uc3QgaGVhZGVycyA9IGdldEhlYWRlcnNXaXRoQXV0aChhcHBDb25maWcsIGluc3RhbGxhdGlvbkVudHJ5KTtcbiAgLy8gSWYgaGVhcnRiZWF0IHNlcnZpY2UgZXhpc3RzLCBhZGQgdGhlIGhlYXJ0YmVhdCBzdHJpbmcgdG8gdGhlIGhlYWRlci5cbiAgY29uc3QgaGVhcnRiZWF0U2VydmljZSA9IGhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlci5nZXRJbW1lZGlhdGUoe1xuICAgIG9wdGlvbmFsOiB0cnVlXG4gIH0pO1xuICBpZiAoaGVhcnRiZWF0U2VydmljZSkge1xuICAgIGNvbnN0IGhlYXJ0YmVhdHNIZWFkZXIgPSBhd2FpdCBoZWFydGJlYXRTZXJ2aWNlLmdldEhlYXJ0YmVhdHNIZWFkZXIoKTtcbiAgICBpZiAoaGVhcnRiZWF0c0hlYWRlcikge1xuICAgICAgaGVhZGVycy5hcHBlbmQoJ3gtZmlyZWJhc2UtY2xpZW50JywgaGVhcnRiZWF0c0hlYWRlcik7XG4gICAgfVxuICB9XG4gIGNvbnN0IGJvZHkgPSB7XG4gICAgaW5zdGFsbGF0aW9uOiB7XG4gICAgICBzZGtWZXJzaW9uOiBQQUNLQUdFX1ZFUlNJT04sXG4gICAgICBhcHBJZDogYXBwQ29uZmlnLmFwcElkXG4gICAgfVxuICB9O1xuICBjb25zdCByZXF1ZXN0ID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnMsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcbiAgfTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXRyeUlmU2VydmVyRXJyb3IoKCkgPT4gZmV0Y2goZW5kcG9pbnQsIHJlcXVlc3QpKTtcbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgY29uc3QgcmVzcG9uc2VWYWx1ZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBjb21wbGV0ZWRBdXRoVG9rZW4gPSBleHRyYWN0QXV0aFRva2VuSW5mb0Zyb21SZXNwb25zZShyZXNwb25zZVZhbHVlKTtcbiAgICByZXR1cm4gY29tcGxldGVkQXV0aFRva2VuO1xuICB9IGVsc2Uge1xuICAgIHRocm93IGF3YWl0IGdldEVycm9yRnJvbVJlc3BvbnNlKCdHZW5lcmF0ZSBBdXRoIFRva2VuJywgcmVzcG9uc2UpO1xuICB9XG59XG5mdW5jdGlvbiBnZXRHZW5lcmF0ZUF1dGhUb2tlbkVuZHBvaW50KGFwcENvbmZpZywge1xuICBmaWRcbn0pIHtcbiAgcmV0dXJuIGAke2dldEluc3RhbGxhdGlvbnNFbmRwb2ludChhcHBDb25maWcpfS8ke2ZpZH0vYXV0aFRva2VuczpnZW5lcmF0ZWA7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIFJldHVybnMgYSB2YWxpZCBhdXRoZW50aWNhdGlvbiB0b2tlbiBmb3IgdGhlIGluc3RhbGxhdGlvbi4gR2VuZXJhdGVzIGEgbmV3XG4gKiB0b2tlbiBpZiBvbmUgZG9lc24ndCBleGlzdCwgaXMgZXhwaXJlZCBvciBhYm91dCB0byBleHBpcmUuXG4gKlxuICogU2hvdWxkIG9ubHkgYmUgY2FsbGVkIGlmIHRoZSBGaXJlYmFzZSBJbnN0YWxsYXRpb24gaXMgcmVnaXN0ZXJlZC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcmVmcmVzaEF1dGhUb2tlbihpbnN0YWxsYXRpb25zLCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBsZXQgdG9rZW5Qcm9taXNlO1xuICBjb25zdCBlbnRyeSA9IGF3YWl0IHVwZGF0ZShpbnN0YWxsYXRpb25zLmFwcENvbmZpZywgb2xkRW50cnkgPT4ge1xuICAgIGlmICghaXNFbnRyeVJlZ2lzdGVyZWQob2xkRW50cnkpKSB7XG4gICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm5vdC1yZWdpc3RlcmVkXCIgLyogRXJyb3JDb2RlLk5PVF9SRUdJU1RFUkVEICovKTtcbiAgICB9XG4gICAgY29uc3Qgb2xkQXV0aFRva2VuID0gb2xkRW50cnkuYXV0aFRva2VuO1xuICAgIGlmICghZm9yY2VSZWZyZXNoICYmIGlzQXV0aFRva2VuVmFsaWQob2xkQXV0aFRva2VuKSkge1xuICAgICAgLy8gVGhlcmUgaXMgYSB2YWxpZCB0b2tlbiBpbiB0aGUgREIuXG4gICAgICByZXR1cm4gb2xkRW50cnk7XG4gICAgfSBlbHNlIGlmIChvbGRBdXRoVG9rZW4ucmVxdWVzdFN0YXR1cyA9PT0gMSAvKiBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTICovKSB7XG4gICAgICAvLyBUaGVyZSBhbHJlYWR5IGlzIGEgdG9rZW4gcmVxdWVzdCBpbiBwcm9ncmVzcy5cbiAgICAgIHRva2VuUHJvbWlzZSA9IHdhaXRVbnRpbEF1dGhUb2tlblJlcXVlc3QoaW5zdGFsbGF0aW9ucywgZm9yY2VSZWZyZXNoKTtcbiAgICAgIHJldHVybiBvbGRFbnRyeTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm8gdG9rZW4gb3IgdG9rZW4gZXhwaXJlZC5cbiAgICAgIGlmICghbmF2aWdhdG9yLm9uTGluZSkge1xuICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImFwcC1vZmZsaW5lXCIgLyogRXJyb3JDb2RlLkFQUF9PRkZMSU5FICovKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGluUHJvZ3Jlc3NFbnRyeSA9IG1ha2VBdXRoVG9rZW5SZXF1ZXN0SW5Qcm9ncmVzc0VudHJ5KG9sZEVudHJ5KTtcbiAgICAgIHRva2VuUHJvbWlzZSA9IGZldGNoQXV0aFRva2VuRnJvbVNlcnZlcihpbnN0YWxsYXRpb25zLCBpblByb2dyZXNzRW50cnkpO1xuICAgICAgcmV0dXJuIGluUHJvZ3Jlc3NFbnRyeTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBhdXRoVG9rZW4gPSB0b2tlblByb21pc2UgPyBhd2FpdCB0b2tlblByb21pc2UgOiBlbnRyeS5hdXRoVG9rZW47XG4gIHJldHVybiBhdXRoVG9rZW47XG59XG4vKipcbiAqIENhbGwgb25seSBpZiBGSUQgaXMgcmVnaXN0ZXJlZCBhbmQgQXV0aCBUb2tlbiByZXF1ZXN0IGlzIGluIHByb2dyZXNzLlxuICpcbiAqIFdhaXRzIHVudGlsIHRoZSBjdXJyZW50IHBlbmRpbmcgcmVxdWVzdCBmaW5pc2hlcy4gSWYgdGhlIHJlcXVlc3QgdGltZXMgb3V0LFxuICogdHJpZXMgb25jZSBpbiB0aGlzIHRocmVhZCBhcyB3ZWxsLlxuICovXG5hc3luYyBmdW5jdGlvbiB3YWl0VW50aWxBdXRoVG9rZW5SZXF1ZXN0KGluc3RhbGxhdGlvbnMsIGZvcmNlUmVmcmVzaCkge1xuICAvLyBVbmZvcnR1bmF0ZWx5LCB0aGVyZSBpcyBubyB3YXkgb2YgcmVsaWFibHkgb2JzZXJ2aW5nIHdoZW4gYSB2YWx1ZSBpblxuICAvLyBJbmRleGVkREIgY2hhbmdlcyAoeWV0LCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvaW5kZXhlZC1kYi1vYnNlcnZlcnMpLFxuICAvLyBzbyB3ZSBuZWVkIHRvIHBvbGwuXG4gIGxldCBlbnRyeSA9IGF3YWl0IHVwZGF0ZUF1dGhUb2tlblJlcXVlc3QoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcpO1xuICB3aGlsZSAoZW50cnkuYXV0aFRva2VuLnJlcXVlc3RTdGF0dXMgPT09IDEgLyogUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUyAqLykge1xuICAgIC8vIGdlbmVyYXRlQXV0aFRva2VuIHN0aWxsIGluIHByb2dyZXNzLlxuICAgIGF3YWl0IHNsZWVwKDEwMCk7XG4gICAgZW50cnkgPSBhd2FpdCB1cGRhdGVBdXRoVG9rZW5SZXF1ZXN0KGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnKTtcbiAgfVxuICBjb25zdCBhdXRoVG9rZW4gPSBlbnRyeS5hdXRoVG9rZW47XG4gIGlmIChhdXRoVG9rZW4ucmVxdWVzdFN0YXR1cyA9PT0gMCAvKiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEICovKSB7XG4gICAgLy8gVGhlIHJlcXVlc3QgdGltZWQgb3V0IG9yIGZhaWxlZCBpbiBhIGRpZmZlcmVudCBjYWxsLiBUcnkgYWdhaW4uXG4gICAgcmV0dXJuIHJlZnJlc2hBdXRoVG9rZW4oaW5zdGFsbGF0aW9ucywgZm9yY2VSZWZyZXNoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXV0aFRva2VuO1xuICB9XG59XG4vKipcbiAqIENhbGxlZCBvbmx5IGlmIHRoZXJlIGlzIGEgR2VuZXJhdGVBdXRoVG9rZW4gcmVxdWVzdCBpbiBwcm9ncmVzcy5cbiAqXG4gKiBVcGRhdGVzIHRoZSBJbnN0YWxsYXRpb25FbnRyeSBpbiB0aGUgREIgYmFzZWQgb24gdGhlIHN0YXR1cyBvZiB0aGVcbiAqIEdlbmVyYXRlQXV0aFRva2VuIHJlcXVlc3QuXG4gKlxuICogUmV0dXJucyB0aGUgdXBkYXRlZCBJbnN0YWxsYXRpb25FbnRyeS5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlQXV0aFRva2VuUmVxdWVzdChhcHBDb25maWcpIHtcbiAgcmV0dXJuIHVwZGF0ZShhcHBDb25maWcsIG9sZEVudHJ5ID0+IHtcbiAgICBpZiAoIWlzRW50cnlSZWdpc3RlcmVkKG9sZEVudHJ5KSkge1xuICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJub3QtcmVnaXN0ZXJlZFwiIC8qIEVycm9yQ29kZS5OT1RfUkVHSVNURVJFRCAqLyk7XG4gICAgfVxuICAgIGNvbnN0IG9sZEF1dGhUb2tlbiA9IG9sZEVudHJ5LmF1dGhUb2tlbjtcbiAgICBpZiAoaGFzQXV0aFRva2VuUmVxdWVzdFRpbWVkT3V0KG9sZEF1dGhUb2tlbikpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9sZEVudHJ5KSwge1xuICAgICAgICBhdXRoVG9rZW46IHtcbiAgICAgICAgICByZXF1ZXN0U3RhdHVzOiAwIC8qIFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURUQgKi9cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvbGRFbnRyeTtcbiAgfSk7XG59XG5hc3luYyBmdW5jdGlvbiBmZXRjaEF1dGhUb2tlbkZyb21TZXJ2ZXIoaW5zdGFsbGF0aW9ucywgaW5zdGFsbGF0aW9uRW50cnkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhdXRoVG9rZW4gPSBhd2FpdCBnZW5lcmF0ZUF1dGhUb2tlblJlcXVlc3QoaW5zdGFsbGF0aW9ucywgaW5zdGFsbGF0aW9uRW50cnkpO1xuICAgIGNvbnN0IHVwZGF0ZWRJbnN0YWxsYXRpb25FbnRyeSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgaW5zdGFsbGF0aW9uRW50cnkpLCB7XG4gICAgICBhdXRoVG9rZW5cbiAgICB9KTtcbiAgICBhd2FpdCBzZXQoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcsIHVwZGF0ZWRJbnN0YWxsYXRpb25FbnRyeSk7XG4gICAgcmV0dXJuIGF1dGhUb2tlbjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChpc1NlcnZlckVycm9yKGUpICYmIChlLmN1c3RvbURhdGEuc2VydmVyQ29kZSA9PT0gNDAxIHx8IGUuY3VzdG9tRGF0YS5zZXJ2ZXJDb2RlID09PSA0MDQpKSB7XG4gICAgICAvLyBTZXJ2ZXIgcmV0dXJuZWQgYSBcIkZJRCBub3QgZm91bmRcIiBvciBhIFwiSW52YWxpZCBhdXRoZW50aWNhdGlvblwiIGVycm9yLlxuICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgSUQgbmV4dCB0aW1lLlxuICAgICAgYXdhaXQgcmVtb3ZlKGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXBkYXRlZEluc3RhbGxhdGlvbkVudHJ5ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBpbnN0YWxsYXRpb25FbnRyeSksIHtcbiAgICAgICAgYXV0aFRva2VuOiB7XG4gICAgICAgICAgcmVxdWVzdFN0YXR1czogMCAvKiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEICovXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYXdhaXQgc2V0KGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnLCB1cGRhdGVkSW5zdGFsbGF0aW9uRW50cnkpO1xuICAgIH1cbiAgICB0aHJvdyBlO1xuICB9XG59XG5mdW5jdGlvbiBpc0VudHJ5UmVnaXN0ZXJlZChpbnN0YWxsYXRpb25FbnRyeSkge1xuICByZXR1cm4gaW5zdGFsbGF0aW9uRW50cnkgIT09IHVuZGVmaW5lZCAmJiBpbnN0YWxsYXRpb25FbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IDIgLyogUmVxdWVzdFN0YXR1cy5DT01QTEVURUQgKi87XG59XG5mdW5jdGlvbiBpc0F1dGhUb2tlblZhbGlkKGF1dGhUb2tlbikge1xuICByZXR1cm4gYXV0aFRva2VuLnJlcXVlc3RTdGF0dXMgPT09IDIgLyogUmVxdWVzdFN0YXR1cy5DT01QTEVURUQgKi8gJiYgIWlzQXV0aFRva2VuRXhwaXJlZChhdXRoVG9rZW4pO1xufVxuZnVuY3Rpb24gaXNBdXRoVG9rZW5FeHBpcmVkKGF1dGhUb2tlbikge1xuICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICByZXR1cm4gbm93IDwgYXV0aFRva2VuLmNyZWF0aW9uVGltZSB8fCBhdXRoVG9rZW4uY3JlYXRpb25UaW1lICsgYXV0aFRva2VuLmV4cGlyZXNJbiA8IG5vdyArIFRPS0VOX0VYUElSQVRJT05fQlVGRkVSO1xufVxuLyoqIFJldHVybnMgYW4gdXBkYXRlZCBJbnN0YWxsYXRpb25FbnRyeSB3aXRoIGFuIEluUHJvZ3Jlc3NBdXRoVG9rZW4uICovXG5mdW5jdGlvbiBtYWtlQXV0aFRva2VuUmVxdWVzdEluUHJvZ3Jlc3NFbnRyeShvbGRFbnRyeSkge1xuICBjb25zdCBpblByb2dyZXNzQXV0aFRva2VuID0ge1xuICAgIHJlcXVlc3RTdGF0dXM6IDEgLyogUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUyAqLyxcbiAgICByZXF1ZXN0VGltZTogRGF0ZS5ub3coKVxuICB9O1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBvbGRFbnRyeSksIHtcbiAgICBhdXRoVG9rZW46IGluUHJvZ3Jlc3NBdXRoVG9rZW5cbiAgfSk7XG59XG5mdW5jdGlvbiBoYXNBdXRoVG9rZW5SZXF1ZXN0VGltZWRPdXQoYXV0aFRva2VuKSB7XG4gIHJldHVybiBhdXRoVG9rZW4ucmVxdWVzdFN0YXR1cyA9PT0gMSAvKiBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTICovICYmIGF1dGhUb2tlbi5yZXF1ZXN0VGltZSArIFBFTkRJTkdfVElNRU9VVF9NUyA8IERhdGUubm93KCk7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIENyZWF0ZXMgYSBGaXJlYmFzZSBJbnN0YWxsYXRpb24gaWYgdGhlcmUgaXNuJ3Qgb25lIGZvciB0aGUgYXBwIGFuZFxuICogcmV0dXJucyB0aGUgSW5zdGFsbGF0aW9uIElELlxuICogQHBhcmFtIGluc3RhbGxhdGlvbnMgLSBUaGUgYEluc3RhbGxhdGlvbnNgIGluc3RhbmNlLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0SWQoaW5zdGFsbGF0aW9ucykge1xuICBjb25zdCBpbnN0YWxsYXRpb25zSW1wbCA9IGluc3RhbGxhdGlvbnM7XG4gIGNvbnN0IHtcbiAgICBpbnN0YWxsYXRpb25FbnRyeSxcbiAgICByZWdpc3RyYXRpb25Qcm9taXNlXG4gIH0gPSBhd2FpdCBnZXRJbnN0YWxsYXRpb25FbnRyeShpbnN0YWxsYXRpb25zSW1wbCk7XG4gIGlmIChyZWdpc3RyYXRpb25Qcm9taXNlKSB7XG4gICAgcmVnaXN0cmF0aW9uUHJvbWlzZS5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiB0aGUgaW5zdGFsbGF0aW9uIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCwgdXBkYXRlIHRoZSBhdXRoZW50aWNhdGlvblxuICAgIC8vIHRva2VuIGlmIG5lZWRlZC5cbiAgICByZWZyZXNoQXV0aFRva2VuKGluc3RhbGxhdGlvbnNJbXBsKS5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfVxuICByZXR1cm4gaW5zdGFsbGF0aW9uRW50cnkuZmlkO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBSZXR1cm5zIGEgRmlyZWJhc2UgSW5zdGFsbGF0aW9ucyBhdXRoIHRva2VuLCBpZGVudGlmeWluZyB0aGUgY3VycmVudFxuICogRmlyZWJhc2UgSW5zdGFsbGF0aW9uLlxuICogQHBhcmFtIGluc3RhbGxhdGlvbnMgLSBUaGUgYEluc3RhbGxhdGlvbnNgIGluc3RhbmNlLlxuICogQHBhcmFtIGZvcmNlUmVmcmVzaCAtIEZvcmNlIHJlZnJlc2ggcmVnYXJkbGVzcyBvZiB0b2tlbiBleHBpcmF0aW9uLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0VG9rZW4oaW5zdGFsbGF0aW9ucywgZm9yY2VSZWZyZXNoID0gZmFsc2UpIHtcbiAgY29uc3QgaW5zdGFsbGF0aW9uc0ltcGwgPSBpbnN0YWxsYXRpb25zO1xuICBhd2FpdCBjb21wbGV0ZUluc3RhbGxhdGlvblJlZ2lzdHJhdGlvbihpbnN0YWxsYXRpb25zSW1wbCk7XG4gIC8vIEF0IHRoaXMgcG9pbnQgd2UgZWl0aGVyIGhhdmUgYSBSZWdpc3RlcmVkIEluc3RhbGxhdGlvbiBpbiB0aGUgREIsIG9yIHdlJ3ZlXG4gIC8vIGFscmVhZHkgdGhyb3duIGFuIGVycm9yLlxuICBjb25zdCBhdXRoVG9rZW4gPSBhd2FpdCByZWZyZXNoQXV0aFRva2VuKGluc3RhbGxhdGlvbnNJbXBsLCBmb3JjZVJlZnJlc2gpO1xuICByZXR1cm4gYXV0aFRva2VuLnRva2VuO1xufVxuYXN5bmMgZnVuY3Rpb24gY29tcGxldGVJbnN0YWxsYXRpb25SZWdpc3RyYXRpb24oaW5zdGFsbGF0aW9ucykge1xuICBjb25zdCB7XG4gICAgcmVnaXN0cmF0aW9uUHJvbWlzZVxuICB9ID0gYXdhaXQgZ2V0SW5zdGFsbGF0aW9uRW50cnkoaW5zdGFsbGF0aW9ucyk7XG4gIGlmIChyZWdpc3RyYXRpb25Qcm9taXNlKSB7XG4gICAgLy8gQSBjcmVhdGVJbnN0YWxsYXRpb24gcmVxdWVzdCBpcyBpbiBwcm9ncmVzcy4gV2FpdCB1bnRpbCBpdCBmaW5pc2hlcy5cbiAgICBhd2FpdCByZWdpc3RyYXRpb25Qcm9taXNlO1xuICB9XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5hc3luYyBmdW5jdGlvbiBkZWxldGVJbnN0YWxsYXRpb25SZXF1ZXN0KGFwcENvbmZpZywgaW5zdGFsbGF0aW9uRW50cnkpIHtcbiAgY29uc3QgZW5kcG9pbnQgPSBnZXREZWxldGVFbmRwb2ludChhcHBDb25maWcsIGluc3RhbGxhdGlvbkVudHJ5KTtcbiAgY29uc3QgaGVhZGVycyA9IGdldEhlYWRlcnNXaXRoQXV0aChhcHBDb25maWcsIGluc3RhbGxhdGlvbkVudHJ5KTtcbiAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIGhlYWRlcnNcbiAgfTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXRyeUlmU2VydmVyRXJyb3IoKCkgPT4gZmV0Y2goZW5kcG9pbnQsIHJlcXVlc3QpKTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IGF3YWl0IGdldEVycm9yRnJvbVJlc3BvbnNlKCdEZWxldGUgSW5zdGFsbGF0aW9uJywgcmVzcG9uc2UpO1xuICB9XG59XG5mdW5jdGlvbiBnZXREZWxldGVFbmRwb2ludChhcHBDb25maWcsIHtcbiAgZmlkXG59KSB7XG4gIHJldHVybiBgJHtnZXRJbnN0YWxsYXRpb25zRW5kcG9pbnQoYXBwQ29uZmlnKX0vJHtmaWR9YDtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogRGVsZXRlcyB0aGUgRmlyZWJhc2UgSW5zdGFsbGF0aW9uIGFuZCBhbGwgYXNzb2NpYXRlZCBkYXRhLlxuICogQHBhcmFtIGluc3RhbGxhdGlvbnMgLSBUaGUgYEluc3RhbGxhdGlvbnNgIGluc3RhbmNlLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW5zdGFsbGF0aW9ucyhpbnN0YWxsYXRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICBhcHBDb25maWdcbiAgfSA9IGluc3RhbGxhdGlvbnM7XG4gIGNvbnN0IGVudHJ5ID0gYXdhaXQgdXBkYXRlKGFwcENvbmZpZywgb2xkRW50cnkgPT4ge1xuICAgIGlmIChvbGRFbnRyeSAmJiBvbGRFbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IDAgLyogUmVxdWVzdFN0YXR1cy5OT1RfU1RBUlRFRCAqLykge1xuICAgICAgLy8gRGVsZXRlIHRoZSB1bnJlZ2lzdGVyZWQgZW50cnkgd2l0aG91dCBzZW5kaW5nIGEgZGVsZXRlSW5zdGFsbGF0aW9uIHJlcXVlc3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gb2xkRW50cnk7XG4gIH0pO1xuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoZW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAxIC8qIFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MgKi8pIHtcbiAgICAgIC8vIENhbid0IGRlbGV0ZSB3aGlsZSB0cnlpbmcgdG8gcmVnaXN0ZXIuXG4gICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImRlbGV0ZS1wZW5kaW5nLXJlZ2lzdHJhdGlvblwiIC8qIEVycm9yQ29kZS5ERUxFVEVfUEVORElOR19SRUdJU1RSQVRJT04gKi8pO1xuICAgIH0gZWxzZSBpZiAoZW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAyIC8qIFJlcXVlc3RTdGF0dXMuQ09NUExFVEVEICovKSB7XG4gICAgICBpZiAoIW5hdmlnYXRvci5vbkxpbmUpIHtcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJhcHAtb2ZmbGluZVwiIC8qIEVycm9yQ29kZS5BUFBfT0ZGTElORSAqLyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCBkZWxldGVJbnN0YWxsYXRpb25SZXF1ZXN0KGFwcENvbmZpZywgZW50cnkpO1xuICAgICAgICBhd2FpdCByZW1vdmUoYXBwQ29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogU2V0cyBhIG5ldyBjYWxsYmFjayB0aGF0IHdpbGwgZ2V0IGNhbGxlZCB3aGVuIEluc3RhbGxhdGlvbiBJRCBjaGFuZ2VzLlxuICogUmV0dXJucyBhbiB1bnN1YnNjcmliZSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVtb3ZlIHRoZSBjYWxsYmFjayB3aGVuIGNhbGxlZC5cbiAqIEBwYXJhbSBpbnN0YWxsYXRpb25zIC0gVGhlIGBJbnN0YWxsYXRpb25zYCBpbnN0YW5jZS5cbiAqIEBwYXJhbSBjYWxsYmFjayAtIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgd2hlbiBGSUQgY2hhbmdlcy5cbiAqIEByZXR1cm5zIEEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgY2FsbGVkIHRvIHVuc3Vic2NyaWJlLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gb25JZENoYW5nZShpbnN0YWxsYXRpb25zLCBjYWxsYmFjaykge1xuICBjb25zdCB7XG4gICAgYXBwQ29uZmlnXG4gIH0gPSBpbnN0YWxsYXRpb25zO1xuICBhZGRDYWxsYmFjayhhcHBDb25maWcsIGNhbGxiYWNrKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICByZW1vdmVDYWxsYmFjayhhcHBDb25maWcsIGNhbGxiYWNrKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB7QGxpbmsgSW5zdGFsbGF0aW9uc30gYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlblxuICoge0BsaW5rIEBmaXJlYmFzZS9hcHAjRmlyZWJhc2VBcHB9IGluc3RhbmNlLlxuICogQHBhcmFtIGFwcCAtIFRoZSB7QGxpbmsgQGZpcmViYXNlL2FwcCNGaXJlYmFzZUFwcH0gaW5zdGFuY2UuXG4gKlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBnZXRJbnN0YWxsYXRpb25zKGFwcCA9IGdldEFwcCgpKSB7XG4gIGNvbnN0IGluc3RhbGxhdGlvbnNJbXBsID0gX2dldFByb3ZpZGVyKGFwcCwgJ2luc3RhbGxhdGlvbnMnKS5nZXRJbW1lZGlhdGUoKTtcbiAgcmV0dXJuIGluc3RhbGxhdGlvbnNJbXBsO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZnVuY3Rpb24gZXh0cmFjdEFwcENvbmZpZyhhcHApIHtcbiAgaWYgKCFhcHAgfHwgIWFwcC5vcHRpb25zKSB7XG4gICAgdGhyb3cgZ2V0TWlzc2luZ1ZhbHVlRXJyb3IoJ0FwcCBDb25maWd1cmF0aW9uJyk7XG4gIH1cbiAgaWYgKCFhcHAubmFtZSkge1xuICAgIHRocm93IGdldE1pc3NpbmdWYWx1ZUVycm9yKCdBcHAgTmFtZScpO1xuICB9XG4gIC8vIFJlcXVpcmVkIGFwcCBjb25maWcga2V5c1xuICBjb25zdCBjb25maWdLZXlzID0gWydwcm9qZWN0SWQnLCAnYXBpS2V5JywgJ2FwcElkJ107XG4gIGZvciAoY29uc3Qga2V5TmFtZSBvZiBjb25maWdLZXlzKSB7XG4gICAgaWYgKCFhcHAub3B0aW9uc1trZXlOYW1lXSkge1xuICAgICAgdGhyb3cgZ2V0TWlzc2luZ1ZhbHVlRXJyb3Ioa2V5TmFtZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgYXBwTmFtZTogYXBwLm5hbWUsXG4gICAgcHJvamVjdElkOiBhcHAub3B0aW9ucy5wcm9qZWN0SWQsXG4gICAgYXBpS2V5OiBhcHAub3B0aW9ucy5hcGlLZXksXG4gICAgYXBwSWQ6IGFwcC5vcHRpb25zLmFwcElkXG4gIH07XG59XG5mdW5jdGlvbiBnZXRNaXNzaW5nVmFsdWVFcnJvcih2YWx1ZU5hbWUpIHtcbiAgcmV0dXJuIEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwibWlzc2luZy1hcHAtY29uZmlnLXZhbHVlc1wiIC8qIEVycm9yQ29kZS5NSVNTSU5HX0FQUF9DT05GSUdfVkFMVUVTICovLCB7XG4gICAgdmFsdWVOYW1lXG4gIH0pO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuY29uc3QgSU5TVEFMTEFUSU9OU19OQU1FID0gJ2luc3RhbGxhdGlvbnMnO1xuY29uc3QgSU5TVEFMTEFUSU9OU19OQU1FX0lOVEVSTkFMID0gJ2luc3RhbGxhdGlvbnMtaW50ZXJuYWwnO1xuY29uc3QgcHVibGljRmFjdG9yeSA9IGNvbnRhaW5lciA9PiB7XG4gIGNvbnN0IGFwcCA9IGNvbnRhaW5lci5nZXRQcm92aWRlcignYXBwJykuZ2V0SW1tZWRpYXRlKCk7XG4gIC8vIFRocm93cyBpZiBhcHAgaXNuJ3QgY29uZmlndXJlZCBwcm9wZXJseS5cbiAgY29uc3QgYXBwQ29uZmlnID0gZXh0cmFjdEFwcENvbmZpZyhhcHApO1xuICBjb25zdCBoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIgPSBfZ2V0UHJvdmlkZXIoYXBwLCAnaGVhcnRiZWF0Jyk7XG4gIGNvbnN0IGluc3RhbGxhdGlvbnNJbXBsID0ge1xuICAgIGFwcCxcbiAgICBhcHBDb25maWcsXG4gICAgaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyLFxuICAgIF9kZWxldGU6ICgpID0+IFByb21pc2UucmVzb2x2ZSgpXG4gIH07XG4gIHJldHVybiBpbnN0YWxsYXRpb25zSW1wbDtcbn07XG5jb25zdCBpbnRlcm5hbEZhY3RvcnkgPSBjb250YWluZXIgPT4ge1xuICBjb25zdCBhcHAgPSBjb250YWluZXIuZ2V0UHJvdmlkZXIoJ2FwcCcpLmdldEltbWVkaWF0ZSgpO1xuICAvLyBJbnRlcm5hbCBGSVMgaW5zdGFuY2UgcmVsaWVzIG9uIHB1YmxpYyBGSVMgaW5zdGFuY2UuXG4gIGNvbnN0IGluc3RhbGxhdGlvbnMgPSBfZ2V0UHJvdmlkZXIoYXBwLCBJTlNUQUxMQVRJT05TX05BTUUpLmdldEltbWVkaWF0ZSgpO1xuICBjb25zdCBpbnN0YWxsYXRpb25zSW50ZXJuYWwgPSB7XG4gICAgZ2V0SWQ6ICgpID0+IGdldElkKGluc3RhbGxhdGlvbnMpLFxuICAgIGdldFRva2VuOiBmb3JjZVJlZnJlc2ggPT4gZ2V0VG9rZW4oaW5zdGFsbGF0aW9ucywgZm9yY2VSZWZyZXNoKVxuICB9O1xuICByZXR1cm4gaW5zdGFsbGF0aW9uc0ludGVybmFsO1xufTtcbmZ1bmN0aW9uIHJlZ2lzdGVySW5zdGFsbGF0aW9ucygpIHtcbiAgX3JlZ2lzdGVyQ29tcG9uZW50KG5ldyBDb21wb25lbnQoSU5TVEFMTEFUSU9OU19OQU1FLCBwdWJsaWNGYWN0b3J5LCBcIlBVQkxJQ1wiIC8qIENvbXBvbmVudFR5cGUuUFVCTElDICovKSk7XG4gIF9yZWdpc3RlckNvbXBvbmVudChuZXcgQ29tcG9uZW50KElOU1RBTExBVElPTlNfTkFNRV9JTlRFUk5BTCwgaW50ZXJuYWxGYWN0b3J5LCBcIlBSSVZBVEVcIiAvKiBDb21wb25lbnRUeXBlLlBSSVZBVEUgKi8pKTtcbn1cblxuLyoqXG4gKiBUaGUgRmlyZWJhc2UgSW5zdGFsbGF0aW9ucyBXZWIgU0RLLlxuICogVGhpcyBTREsgZG9lcyBub3Qgd29yayBpbiBhIE5vZGUuanMgZW52aXJvbm1lbnQuXG4gKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cbnJlZ2lzdGVySW5zdGFsbGF0aW9ucygpO1xucmVnaXN0ZXJWZXJzaW9uKG5hbWUsIHZlcnNpb24pO1xuLy8gQlVJTERfVEFSR0VUIHdpbGwgYmUgcmVwbGFjZWQgYnkgdmFsdWVzIGxpa2UgZXNtMjAxNywgY2pzMjAxNywgZXRjIGR1cmluZyB0aGUgY29tcGlsYXRpb25cbnJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uLCAnZXNtMjAxNycpO1xuZXhwb3J0IHsgZGVsZXRlSW5zdGFsbGF0aW9ucywgZ2V0SWQsIGdldEluc3RhbGxhdGlvbnMsIGdldFRva2VuLCBvbklkQ2hhbmdlIH07XG4iLCJpbXBvcnQgeyBfZ2V0UHJvdmlkZXIsIGdldEFwcCwgX3JlZ2lzdGVyQ29tcG9uZW50LCByZWdpc3RlclZlcnNpb24gfSBmcm9tICdAZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJ0BmaXJlYmFzZS9sb2dnZXInO1xuaW1wb3J0IHsgRXJyb3JGYWN0b3J5LCBjYWxjdWxhdGVCYWNrb2ZmTWlsbGlzLCBGaXJlYmFzZUVycm9yLCBpc0luZGV4ZWREQkF2YWlsYWJsZSwgdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSwgaXNCcm93c2VyRXh0ZW5zaW9uLCBhcmVDb29raWVzRW5hYmxlZCwgZ2V0TW9kdWxhckluc3RhbmNlLCBkZWVwRXF1YWwgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcbmltcG9ydCAnQGZpcmViYXNlL2luc3RhbGxhdGlvbnMnO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBUeXBlIGNvbnN0YW50IGZvciBGaXJlYmFzZSBBbmFseXRpY3MuXG4gKi9cbmNvbnN0IEFOQUxZVElDU19UWVBFID0gJ2FuYWx5dGljcyc7XG4vLyBLZXkgdG8gYXR0YWNoIEZJRCB0byBpbiBndGFnIHBhcmFtcy5cbmNvbnN0IEdBX0ZJRF9LRVkgPSAnZmlyZWJhc2VfaWQnO1xuY29uc3QgT1JJR0lOX0tFWSA9ICdvcmlnaW4nO1xuY29uc3QgRkVUQ0hfVElNRU9VVF9NSUxMSVMgPSA2MCAqIDEwMDA7XG5jb25zdCBEWU5BTUlDX0NPTkZJR19VUkwgPSAnaHR0cHM6Ly9maXJlYmFzZS5nb29nbGVhcGlzLmNvbS92MWFscGhhL3Byb2plY3RzLy0vYXBwcy97YXBwLWlkfS93ZWJDb25maWcnO1xuY29uc3QgR1RBR19VUkwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcyc7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdAZmlyZWJhc2UvYW5hbHl0aWNzJyk7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5jb25zdCBFUlJPUlMgPSB7XG4gIFtcImFscmVhZHktZXhpc3RzXCIgLyogQW5hbHl0aWNzRXJyb3IuQUxSRUFEWV9FWElTVFMgKi9dOiAnQSBGaXJlYmFzZSBBbmFseXRpY3MgaW5zdGFuY2Ugd2l0aCB0aGUgYXBwSWQgeyRpZH0gJyArICcgYWxyZWFkeSBleGlzdHMuICcgKyAnT25seSBvbmUgRmlyZWJhc2UgQW5hbHl0aWNzIGluc3RhbmNlIGNhbiBiZSBjcmVhdGVkIGZvciBlYWNoIGFwcElkLicsXG4gIFtcImFscmVhZHktaW5pdGlhbGl6ZWRcIiAvKiBBbmFseXRpY3NFcnJvci5BTFJFQURZX0lOSVRJQUxJWkVEICovXTogJ2luaXRpYWxpemVBbmFseXRpY3MoKSBjYW5ub3QgYmUgY2FsbGVkIGFnYWluIHdpdGggZGlmZmVyZW50IG9wdGlvbnMgdGhhbiB0aG9zZSAnICsgJ2l0IHdhcyBpbml0aWFsbHkgY2FsbGVkIHdpdGguIEl0IGNhbiBiZSBjYWxsZWQgYWdhaW4gd2l0aCB0aGUgc2FtZSBvcHRpb25zIHRvICcgKyAncmV0dXJuIHRoZSBleGlzdGluZyBpbnN0YW5jZSwgb3IgZ2V0QW5hbHl0aWNzKCkgY2FuIGJlIHVzZWQgJyArICd0byBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGFscmVhZHktaW5pdGlhbGl6ZWQgaW5zdGFuY2UuJyxcbiAgW1wiYWxyZWFkeS1pbml0aWFsaXplZC1zZXR0aW5nc1wiIC8qIEFuYWx5dGljc0Vycm9yLkFMUkVBRFlfSU5JVElBTElaRURfU0VUVElOR1MgKi9dOiAnRmlyZWJhc2UgQW5hbHl0aWNzIGhhcyBhbHJlYWR5IGJlZW4gaW5pdGlhbGl6ZWQuJyArICdzZXR0aW5ncygpIG11c3QgYmUgY2FsbGVkIGJlZm9yZSBpbml0aWFsaXppbmcgYW55IEFuYWx5dGljcyBpbnN0YW5jZScgKyAnb3IgaXQgd2lsbCBoYXZlIG5vIGVmZmVjdC4nLFxuICBbXCJpbnRlcm9wLWNvbXBvbmVudC1yZWctZmFpbGVkXCIgLyogQW5hbHl0aWNzRXJyb3IuSU5URVJPUF9DT01QT05FTlRfUkVHX0ZBSUxFRCAqL106ICdGaXJlYmFzZSBBbmFseXRpY3MgSW50ZXJvcCBDb21wb25lbnQgZmFpbGVkIHRvIGluc3RhbnRpYXRlOiB7JHJlYXNvbn0nLFxuICBbXCJpbnZhbGlkLWFuYWx5dGljcy1jb250ZXh0XCIgLyogQW5hbHl0aWNzRXJyb3IuSU5WQUxJRF9BTkFMWVRJQ1NfQ09OVEVYVCAqL106ICdGaXJlYmFzZSBBbmFseXRpY3MgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGVudmlyb25tZW50LiAnICsgJ1dyYXAgaW5pdGlhbGl6YXRpb24gb2YgYW5hbHl0aWNzIGluIGFuYWx5dGljcy5pc1N1cHBvcnRlZCgpICcgKyAndG8gcHJldmVudCBpbml0aWFsaXphdGlvbiBpbiB1bnN1cHBvcnRlZCBlbnZpcm9ubWVudHMuIERldGFpbHM6IHskZXJyb3JJbmZvfScsXG4gIFtcImluZGV4ZWRkYi11bmF2YWlsYWJsZVwiIC8qIEFuYWx5dGljc0Vycm9yLklOREVYRUREQl9VTkFWQUlMQUJMRSAqL106ICdJbmRleGVkREIgdW5hdmFpbGFibGUgb3IgcmVzdHJpY3RlZCBpbiB0aGlzIGVudmlyb25tZW50LiAnICsgJ1dyYXAgaW5pdGlhbGl6YXRpb24gb2YgYW5hbHl0aWNzIGluIGFuYWx5dGljcy5pc1N1cHBvcnRlZCgpICcgKyAndG8gcHJldmVudCBpbml0aWFsaXphdGlvbiBpbiB1bnN1cHBvcnRlZCBlbnZpcm9ubWVudHMuIERldGFpbHM6IHskZXJyb3JJbmZvfScsXG4gIFtcImZldGNoLXRocm90dGxlXCIgLyogQW5hbHl0aWNzRXJyb3IuRkVUQ0hfVEhST1RUTEUgKi9dOiAnVGhlIGNvbmZpZyBmZXRjaCByZXF1ZXN0IHRpbWVkIG91dCB3aGlsZSBpbiBhbiBleHBvbmVudGlhbCBiYWNrb2ZmIHN0YXRlLicgKyAnIFVuaXggdGltZXN0YW1wIGluIG1pbGxpc2Vjb25kcyB3aGVuIGZldGNoIHJlcXVlc3QgdGhyb3R0bGluZyBlbmRzOiB7JHRocm90dGxlRW5kVGltZU1pbGxpc30uJyxcbiAgW1wiY29uZmlnLWZldGNoLWZhaWxlZFwiIC8qIEFuYWx5dGljc0Vycm9yLkNPTkZJR19GRVRDSF9GQUlMRUQgKi9dOiAnRHluYW1pYyBjb25maWcgZmV0Y2ggZmFpbGVkOiBbeyRodHRwU3RhdHVzfV0geyRyZXNwb25zZU1lc3NhZ2V9JyxcbiAgW1wibm8tYXBpLWtleVwiIC8qIEFuYWx5dGljc0Vycm9yLk5PX0FQSV9LRVkgKi9dOiAnVGhlIFwiYXBpS2V5XCIgZmllbGQgaXMgZW1wdHkgaW4gdGhlIGxvY2FsIEZpcmViYXNlIGNvbmZpZy4gRmlyZWJhc2UgQW5hbHl0aWNzIHJlcXVpcmVzIHRoaXMgZmllbGQgdG8nICsgJ2NvbnRhaW4gYSB2YWxpZCBBUEkga2V5LicsXG4gIFtcIm5vLWFwcC1pZFwiIC8qIEFuYWx5dGljc0Vycm9yLk5PX0FQUF9JRCAqL106ICdUaGUgXCJhcHBJZFwiIGZpZWxkIGlzIGVtcHR5IGluIHRoZSBsb2NhbCBGaXJlYmFzZSBjb25maWcuIEZpcmViYXNlIEFuYWx5dGljcyByZXF1aXJlcyB0aGlzIGZpZWxkIHRvJyArICdjb250YWluIGEgdmFsaWQgYXBwIElELicsXG4gIFtcIm5vLWNsaWVudC1pZFwiIC8qIEFuYWx5dGljc0Vycm9yLk5PX0NMSUVOVF9JRCAqL106ICdUaGUgXCJjbGllbnRfaWRcIiBmaWVsZCBpcyBlbXB0eS4nLFxuICBbXCJpbnZhbGlkLWd0YWctcmVzb3VyY2VcIiAvKiBBbmFseXRpY3NFcnJvci5JTlZBTElEX0dUQUdfUkVTT1VSQ0UgKi9dOiAnVHJ1c3RlZCBUeXBlcyBkZXRlY3RlZCBhbiBpbnZhbGlkIGd0YWcgcmVzb3VyY2U6IHskZ3RhZ1VSTH0uJ1xufTtcbmNvbnN0IEVSUk9SX0ZBQ1RPUlkgPSBuZXcgRXJyb3JGYWN0b3J5KCdhbmFseXRpY3MnLCAnQW5hbHl0aWNzJywgRVJST1JTKTtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogVmVyaWZpZXMgYW5kIGNyZWF0ZXMgYSBUcnVzdGVkU2NyaXB0VVJMLlxuICovXG5mdW5jdGlvbiBjcmVhdGVHdGFnVHJ1c3RlZFR5cGVzU2NyaXB0VVJMKHVybCkge1xuICBpZiAoIXVybC5zdGFydHNXaXRoKEdUQUdfVVJMKSkge1xuICAgIGNvbnN0IGVyciA9IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiaW52YWxpZC1ndGFnLXJlc291cmNlXCIgLyogQW5hbHl0aWNzRXJyb3IuSU5WQUxJRF9HVEFHX1JFU09VUkNFICovLCB7XG4gICAgICBndGFnVVJMOiB1cmxcbiAgICB9KTtcbiAgICBsb2dnZXIud2FybihlcnIubWVzc2FnZSk7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiB1cmw7XG59XG4vKipcbiAqIE1ha2VzaGlmdCBwb2x5ZmlsbCBmb3IgUHJvbWlzZS5hbGxTZXR0bGVkKCkuIFJlc29sdmVzIHdoZW4gYWxsIHByb21pc2VzXG4gKiBoYXZlIGVpdGhlciByZXNvbHZlZCBvciByZWplY3RlZC5cbiAqXG4gKiBAcGFyYW0gcHJvbWlzZXMgQXJyYXkgb2YgcHJvbWlzZXMgdG8gd2FpdCBmb3IuXG4gKi9cbmZ1bmN0aW9uIHByb21pc2VBbGxTZXR0bGVkKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcy5tYXAocHJvbWlzZSA9PiBwcm9taXNlLmNhdGNoKGUgPT4gZSkpKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIFRydXN0ZWRUeXBlUG9saWN5IG9iamVjdCB0aGF0IGltcGxlbWVudHMgdGhlIHJ1bGVzIHBhc3NlZCBhcyBwb2xpY3lPcHRpb25zLlxuICpcbiAqIEBwYXJhbSBwb2xpY3lOYW1lIEEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIG5hbWUgb2YgdGhlIHBvbGljeVxuICogQHBhcmFtIHBvbGljeU9wdGlvbnMgT2JqZWN0IGNvbnRhaW5pbmcgaW1wbGVtZW50YXRpb25zIG9mIGluc3RhbmNlIG1ldGhvZHMgZm9yIFRydXN0ZWRUeXBlc1BvbGljeSwgc2VlIHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvVHJ1c3RlZFR5cGVQb2xpY3kjaW5zdGFuY2VfbWV0aG9kc1xuICogfCB0aGUgVHJ1c3RlZFR5cGVQb2xpY3kgcmVmZXJlbmNlIGRvY3VtZW50YXRpb259LlxuICovXG5mdW5jdGlvbiBjcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kocG9saWN5TmFtZSwgcG9saWN5T3B0aW9ucykge1xuICAvLyBDcmVhdGUgYSBUcnVzdGVkVHlwZXMgcG9saWN5IHRoYXQgd2UgY2FuIHVzZSBmb3IgdXBkYXRpbmcgc3JjXG4gIC8vIHByb3BlcnRpZXNcbiAgbGV0IHRydXN0ZWRUeXBlc1BvbGljeTtcbiAgaWYgKHdpbmRvdy50cnVzdGVkVHlwZXMpIHtcbiAgICB0cnVzdGVkVHlwZXNQb2xpY3kgPSB3aW5kb3cudHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeShwb2xpY3lOYW1lLCBwb2xpY3lPcHRpb25zKTtcbiAgfVxuICByZXR1cm4gdHJ1c3RlZFR5cGVzUG9saWN5O1xufVxuLyoqXG4gKiBJbnNlcnRzIGd0YWcgc2NyaXB0IHRhZyBpbnRvIHRoZSBwYWdlIHRvIGFzeW5jaHJvbm91c2x5IGRvd25sb2FkIGd0YWcuXG4gKiBAcGFyYW0gZGF0YUxheWVyTmFtZSBOYW1lIG9mIGRhdGFsYXllciAobW9zdCBvZnRlbiB0aGUgZGVmYXVsdCwgXCJfZGF0YUxheWVyXCIpLlxuICovXG5mdW5jdGlvbiBpbnNlcnRTY3JpcHRUYWcoZGF0YUxheWVyTmFtZSwgbWVhc3VyZW1lbnRJZCkge1xuICBjb25zdCB0cnVzdGVkVHlwZXNQb2xpY3kgPSBjcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3koJ2ZpcmViYXNlLWpzLXNkay1wb2xpY3knLCB7XG4gICAgY3JlYXRlU2NyaXB0VVJMOiBjcmVhdGVHdGFnVHJ1c3RlZFR5cGVzU2NyaXB0VVJMXG4gIH0pO1xuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgLy8gV2UgYXJlIG5vdCBwcm92aWRpbmcgYW4gYW5hbHl0aWNzSWQgaW4gdGhlIFVSTCBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgYSBgcGFnZV92aWV3YFxuICAvLyB3aXRob3V0IGZpZC4gV2Ugd2lsbCBpbml0aWFsaXplIGdhLWlkIHVzaW5nIGd0YWcgKGNvbmZpZykgY29tbWFuZCB0b2dldGhlciB3aXRoIGZpZC5cbiAgY29uc3QgZ3RhZ1NjcmlwdFVSTCA9IGAke0dUQUdfVVJMfT9sPSR7ZGF0YUxheWVyTmFtZX0maWQ9JHttZWFzdXJlbWVudElkfWA7XG4gIHNjcmlwdC5zcmMgPSB0cnVzdGVkVHlwZXNQb2xpY3kgPyB0cnVzdGVkVHlwZXNQb2xpY3kgPT09IG51bGwgfHwgdHJ1c3RlZFR5cGVzUG9saWN5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlU2NyaXB0VVJMKGd0YWdTY3JpcHRVUkwpIDogZ3RhZ1NjcmlwdFVSTDtcbiAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufVxuLyoqXG4gKiBHZXQgcmVmZXJlbmNlIHRvLCBvciBjcmVhdGUsIGdsb2JhbCBkYXRhbGF5ZXIuXG4gKiBAcGFyYW0gZGF0YUxheWVyTmFtZSBOYW1lIG9mIGRhdGFsYXllciAobW9zdCBvZnRlbiB0aGUgZGVmYXVsdCwgXCJfZGF0YUxheWVyXCIpLlxuICovXG5mdW5jdGlvbiBnZXRPckNyZWF0ZURhdGFMYXllcihkYXRhTGF5ZXJOYW1lKSB7XG4gIC8vIENoZWNrIGZvciBleGlzdGluZyBkYXRhTGF5ZXIgYW5kIGNyZWF0ZSBpZiBuZWVkZWQuXG4gIGxldCBkYXRhTGF5ZXIgPSBbXTtcbiAgaWYgKEFycmF5LmlzQXJyYXkod2luZG93W2RhdGFMYXllck5hbWVdKSkge1xuICAgIGRhdGFMYXllciA9IHdpbmRvd1tkYXRhTGF5ZXJOYW1lXTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3dbZGF0YUxheWVyTmFtZV0gPSBkYXRhTGF5ZXI7XG4gIH1cbiAgcmV0dXJuIGRhdGFMYXllcjtcbn1cbi8qKlxuICogV3JhcHBlZCBndGFnIGxvZ2ljIHdoZW4gZ3RhZyBpcyBjYWxsZWQgd2l0aCAnY29uZmlnJyBjb21tYW5kLlxuICpcbiAqIEBwYXJhbSBndGFnQ29yZSBCYXNpYyBndGFnIGZ1bmN0aW9uIHRoYXQganVzdCBhcHBlbmRzIHRvIGRhdGFMYXllci5cbiAqIEBwYXJhbSBpbml0aWFsaXphdGlvblByb21pc2VzTWFwIE1hcCBvZiBhcHBJZHMgdG8gdGhlaXIgaW5pdGlhbGl6YXRpb24gcHJvbWlzZXMuXG4gKiBAcGFyYW0gZHluYW1pY0NvbmZpZ1Byb21pc2VzTGlzdCBBcnJheSBvZiBkeW5hbWljIGNvbmZpZyBmZXRjaCBwcm9taXNlcy5cbiAqIEBwYXJhbSBtZWFzdXJlbWVudElkVG9BcHBJZCBNYXAgb2YgR0EgbWVhc3VyZW1lbnRJRHMgdG8gY29ycmVzcG9uZGluZyBGaXJlYmFzZSBhcHBJZC5cbiAqIEBwYXJhbSBtZWFzdXJlbWVudElkIEdBIE1lYXN1cmVtZW50IElEIHRvIHNldCBjb25maWcgZm9yLlxuICogQHBhcmFtIGd0YWdQYXJhbXMgR3RhZyBjb25maWcgcGFyYW1zIHRvIHNldC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ3RhZ09uQ29uZmlnKGd0YWdDb3JlLCBpbml0aWFsaXphdGlvblByb21pc2VzTWFwLCBkeW5hbWljQ29uZmlnUHJvbWlzZXNMaXN0LCBtZWFzdXJlbWVudElkVG9BcHBJZCwgbWVhc3VyZW1lbnRJZCwgZ3RhZ1BhcmFtcykge1xuICAvLyBJZiBjb25maWcgaXMgYWxyZWFkeSBmZXRjaGVkLCB3ZSBrbm93IHRoZSBhcHBJZCBhbmQgY2FuIHVzZSBpdCB0byBsb29rIHVwIHdoYXQgRklEIHByb21pc2Ugd2VcbiAgLy8vIGFyZSB3YWl0aW5nIGZvciwgYW5kIHdhaXQgb25seSBvbiB0aGF0IG9uZS5cbiAgY29uc3QgY29ycmVzcG9uZGluZ0FwcElkID0gbWVhc3VyZW1lbnRJZFRvQXBwSWRbbWVhc3VyZW1lbnRJZF07XG4gIHRyeSB7XG4gICAgaWYgKGNvcnJlc3BvbmRpbmdBcHBJZCkge1xuICAgICAgYXdhaXQgaW5pdGlhbGl6YXRpb25Qcm9taXNlc01hcFtjb3JyZXNwb25kaW5nQXBwSWRdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiBjb25maWcgaXMgbm90IGZldGNoZWQgeWV0LCB3YWl0IGZvciBhbGwgY29uZmlncyAod2UgZG9uJ3Qga25vdyB3aGljaCBvbmUgd2UgbmVlZCkgYW5kXG4gICAgICAvLyBmaW5kIHRoZSBhcHBJZCAoaWYgYW55KSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgbWVhc3VyZW1lbnRJZC4gSWYgdGhlcmUgaXMgb25lLCB3YWl0IG9uXG4gICAgICAvLyB0aGF0IGFwcElkJ3MgaW5pdGlhbGl6YXRpb24gcHJvbWlzZS4gSWYgdGhlcmUgaXMgbm9uZSwgcHJvbWlzZSByZXNvbHZlcyBhbmQgZ3RhZ1xuICAgICAgLy8gY2FsbCBnb2VzIHRocm91Z2guXG4gICAgICBjb25zdCBkeW5hbWljQ29uZmlnUmVzdWx0cyA9IGF3YWl0IHByb21pc2VBbGxTZXR0bGVkKGR5bmFtaWNDb25maWdQcm9taXNlc0xpc3QpO1xuICAgICAgY29uc3QgZm91bmRDb25maWcgPSBkeW5hbWljQ29uZmlnUmVzdWx0cy5maW5kKGNvbmZpZyA9PiBjb25maWcubWVhc3VyZW1lbnRJZCA9PT0gbWVhc3VyZW1lbnRJZCk7XG4gICAgICBpZiAoZm91bmRDb25maWcpIHtcbiAgICAgICAgYXdhaXQgaW5pdGlhbGl6YXRpb25Qcm9taXNlc01hcFtmb3VuZENvbmZpZy5hcHBJZF07XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgbG9nZ2VyLmVycm9yKGUpO1xuICB9XG4gIGd0YWdDb3JlKFwiY29uZmlnXCIgLyogR3RhZ0NvbW1hbmQuQ09ORklHICovLCBtZWFzdXJlbWVudElkLCBndGFnUGFyYW1zKTtcbn1cbi8qKlxuICogV3JhcHBlZCBndGFnIGxvZ2ljIHdoZW4gZ3RhZyBpcyBjYWxsZWQgd2l0aCAnZXZlbnQnIGNvbW1hbmQuXG4gKlxuICogQHBhcmFtIGd0YWdDb3JlIEJhc2ljIGd0YWcgZnVuY3Rpb24gdGhhdCBqdXN0IGFwcGVuZHMgdG8gZGF0YUxheWVyLlxuICogQHBhcmFtIGluaXRpYWxpemF0aW9uUHJvbWlzZXNNYXAgTWFwIG9mIGFwcElkcyB0byB0aGVpciBpbml0aWFsaXphdGlvbiBwcm9taXNlcy5cbiAqIEBwYXJhbSBkeW5hbWljQ29uZmlnUHJvbWlzZXNMaXN0IEFycmF5IG9mIGR5bmFtaWMgY29uZmlnIGZldGNoIHByb21pc2VzLlxuICogQHBhcmFtIG1lYXN1cmVtZW50SWQgR0EgTWVhc3VyZW1lbnQgSUQgdG8gbG9nIGV2ZW50IHRvLlxuICogQHBhcmFtIGd0YWdQYXJhbXMgUGFyYW1zIHRvIGxvZyB3aXRoIHRoaXMgZXZlbnQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGd0YWdPbkV2ZW50KGd0YWdDb3JlLCBpbml0aWFsaXphdGlvblByb21pc2VzTWFwLCBkeW5hbWljQ29uZmlnUHJvbWlzZXNMaXN0LCBtZWFzdXJlbWVudElkLCBndGFnUGFyYW1zKSB7XG4gIHRyeSB7XG4gICAgbGV0IGluaXRpYWxpemF0aW9uUHJvbWlzZXNUb1dhaXRGb3IgPSBbXTtcbiAgICAvLyBJZiB0aGVyZSdzIGEgJ3NlbmRfdG8nIHBhcmFtLCBjaGVjayBpZiBhbnkgSUQgc3BlY2lmaWVkIG1hdGNoZXNcbiAgICAvLyBhbiBpbml0aWFsaXplSWRzKCkgcHJvbWlzZSB3ZSBhcmUgd2FpdGluZyBmb3IuXG4gICAgaWYgKGd0YWdQYXJhbXMgJiYgZ3RhZ1BhcmFtc1snc2VuZF90byddKSB7XG4gICAgICBsZXQgZ2FTZW5kVG9MaXN0ID0gZ3RhZ1BhcmFtc1snc2VuZF90byddO1xuICAgICAgLy8gTWFrZSBpdCBhbiBhcnJheSBpZiBpcyBpc24ndCwgc28gaXQgY2FuIGJlIGRlYWx0IHdpdGggdGhlIHNhbWUgd2F5LlxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGdhU2VuZFRvTGlzdCkpIHtcbiAgICAgICAgZ2FTZW5kVG9MaXN0ID0gW2dhU2VuZFRvTGlzdF07XG4gICAgICB9XG4gICAgICAvLyBDaGVja2luZyAnc2VuZF90bycgZmllbGRzIHJlcXVpcmVzIGhhdmluZyBhbGwgbWVhc3VyZW1lbnQgSUQgcmVzdWx0cyBiYWNrIGZyb21cbiAgICAgIC8vIHRoZSBkeW5hbWljIGNvbmZpZyBmZXRjaC5cbiAgICAgIGNvbnN0IGR5bmFtaWNDb25maWdSZXN1bHRzID0gYXdhaXQgcHJvbWlzZUFsbFNldHRsZWQoZHluYW1pY0NvbmZpZ1Byb21pc2VzTGlzdCk7XG4gICAgICBmb3IgKGNvbnN0IHNlbmRUb0lkIG9mIGdhU2VuZFRvTGlzdCkge1xuICAgICAgICAvLyBBbnkgZmV0Y2hlZCBkeW5hbWljIG1lYXN1cmVtZW50IElEIHRoYXQgbWF0Y2hlcyB0aGlzICdzZW5kX3RvJyBJRFxuICAgICAgICBjb25zdCBmb3VuZENvbmZpZyA9IGR5bmFtaWNDb25maWdSZXN1bHRzLmZpbmQoY29uZmlnID0+IGNvbmZpZy5tZWFzdXJlbWVudElkID09PSBzZW5kVG9JZCk7XG4gICAgICAgIGNvbnN0IGluaXRpYWxpemF0aW9uUHJvbWlzZSA9IGZvdW5kQ29uZmlnICYmIGluaXRpYWxpemF0aW9uUHJvbWlzZXNNYXBbZm91bmRDb25maWcuYXBwSWRdO1xuICAgICAgICBpZiAoaW5pdGlhbGl6YXRpb25Qcm9taXNlKSB7XG4gICAgICAgICAgaW5pdGlhbGl6YXRpb25Qcm9taXNlc1RvV2FpdEZvci5wdXNoKGluaXRpYWxpemF0aW9uUHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRm91bmQgYW4gaXRlbSBpbiAnc2VuZF90bycgdGhhdCBpcyBub3QgYXNzb2NpYXRlZFxuICAgICAgICAgIC8vIGRpcmVjdGx5IHdpdGggYW4gRklELCBwb3NzaWJseSBhIGdyb3VwLiAgRW1wdHkgdGhpcyBhcnJheSxcbiAgICAgICAgICAvLyBleGl0IHRoZSBsb29wIGVhcmx5LCBhbmQgbGV0IGl0IGdldCBwb3B1bGF0ZWQgYmVsb3cuXG4gICAgICAgICAgaW5pdGlhbGl6YXRpb25Qcm9taXNlc1RvV2FpdEZvciA9IFtdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFRoaXMgd2lsbCBiZSB1bnBvcHVsYXRlZCBpZiB0aGVyZSB3YXMgbm8gJ3NlbmRfdG8nIGZpZWxkICwgb3JcbiAgICAvLyBpZiBub3QgYWxsIGVudHJpZXMgaW4gdGhlICdzZW5kX3RvJyBmaWVsZCBjb3VsZCBiZSBtYXBwZWQgdG9cbiAgICAvLyBhIEZJRC4gSW4gdGhlc2UgY2FzZXMsIHdhaXQgb24gYWxsIHBlbmRpbmcgaW5pdGlhbGl6YXRpb24gcHJvbWlzZXMuXG4gICAgaWYgKGluaXRpYWxpemF0aW9uUHJvbWlzZXNUb1dhaXRGb3IubGVuZ3RoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzICovXG4gICAgICBpbml0aWFsaXphdGlvblByb21pc2VzVG9XYWl0Rm9yID0gT2JqZWN0LnZhbHVlcyhpbml0aWFsaXphdGlvblByb21pc2VzTWFwKTtcbiAgICB9XG4gICAgLy8gUnVuIGNvcmUgZ3RhZyBmdW5jdGlvbiB3aXRoIGFyZ3MgYWZ0ZXIgYWxsIHJlbGV2YW50IGluaXRpYWxpemF0aW9uXG4gICAgLy8gcHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkLlxuICAgIGF3YWl0IFByb21pc2UuYWxsKGluaXRpYWxpemF0aW9uUHJvbWlzZXNUb1dhaXRGb3IpO1xuICAgIC8vIFdvcmthcm91bmQgZm9yIGh0dHA6Ly9iLzE0MTM3MDQ0OSAtIHRoaXJkIGFyZ3VtZW50IGNhbm5vdCBiZSB1bmRlZmluZWQuXG4gICAgZ3RhZ0NvcmUoXCJldmVudFwiIC8qIEd0YWdDb21tYW5kLkVWRU5UICovLCBtZWFzdXJlbWVudElkLCBndGFnUGFyYW1zIHx8IHt9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGxvZ2dlci5lcnJvcihlKTtcbiAgfVxufVxuLyoqXG4gKiBXcmFwcyBhIHN0YW5kYXJkIGd0YWcgZnVuY3Rpb24gd2l0aCBleHRyYSBjb2RlIHRvIHdhaXQgZm9yIGNvbXBsZXRpb24gb2ZcbiAqIHJlbGV2YW50IGluaXRpYWxpemF0aW9uIHByb21pc2VzIGJlZm9yZSBzZW5kaW5nIHJlcXVlc3RzLlxuICpcbiAqIEBwYXJhbSBndGFnQ29yZSBCYXNpYyBndGFnIGZ1bmN0aW9uIHRoYXQganVzdCBhcHBlbmRzIHRvIGRhdGFMYXllci5cbiAqIEBwYXJhbSBpbml0aWFsaXphdGlvblByb21pc2VzTWFwIE1hcCBvZiBhcHBJZHMgdG8gdGhlaXIgaW5pdGlhbGl6YXRpb24gcHJvbWlzZXMuXG4gKiBAcGFyYW0gZHluYW1pY0NvbmZpZ1Byb21pc2VzTGlzdCBBcnJheSBvZiBkeW5hbWljIGNvbmZpZyBmZXRjaCBwcm9taXNlcy5cbiAqIEBwYXJhbSBtZWFzdXJlbWVudElkVG9BcHBJZCBNYXAgb2YgR0EgbWVhc3VyZW1lbnRJRHMgdG8gY29ycmVzcG9uZGluZyBGaXJlYmFzZSBhcHBJZC5cbiAqL1xuZnVuY3Rpb24gd3JhcEd0YWcoZ3RhZ0NvcmUsXG4vKipcbiAqIEFsbG93cyB3cmFwcGVkIGd0YWcgY2FsbHMgdG8gd2FpdCBvbiB3aGljaGV2ZXIgaW5pdGlhbGl6YXRpb24gcHJvbWlzZXMgYXJlIHJlcXVpcmVkLFxuICogZGVwZW5kaW5nIG9uIHRoZSBjb250ZW50cyBvZiB0aGUgZ3RhZyBwYXJhbXMnIGBzZW5kX3RvYCBmaWVsZCwgaWYgYW55LlxuICovXG5pbml0aWFsaXphdGlvblByb21pc2VzTWFwLFxuLyoqXG4gKiBXcmFwcGVkIGd0YWcgY2FsbHMgc29tZXRpbWVzIHJlcXVpcmUgYWxsIGR5bmFtaWMgY29uZmlnIGZldGNoZXMgdG8gaGF2ZSByZXR1cm5lZFxuICogYmVmb3JlIGRldGVybWluaW5nIHdoYXQgaW5pdGlhbGl6YXRpb24gcHJvbWlzZXMgKHdoaWNoIGluY2x1ZGUgRklEcykgdG8gd2FpdCBmb3IuXG4gKi9cbmR5bmFtaWNDb25maWdQcm9taXNlc0xpc3QsXG4vKipcbiAqIFdyYXBwZWQgZ3RhZyBjb25maWcgY2FsbHMgY2FuIG5hcnJvdyBkb3duIHdoaWNoIGluaXRpYWxpemF0aW9uIHByb21pc2UgKHdpdGggRklEKVxuICogdG8gd2FpdCBmb3IgaWYgdGhlIG1lYXN1cmVtZW50SWQgaXMgYWxyZWFkeSBmZXRjaGVkLCBieSBnZXR0aW5nIHRoZSBjb3JyZXNwb25kaW5nIGFwcElkLFxuICogd2hpY2ggaXMgdGhlIGtleSBmb3IgdGhlIGluaXRpYWxpemF0aW9uIHByb21pc2VzIG1hcC5cbiAqL1xubWVhc3VyZW1lbnRJZFRvQXBwSWQpIHtcbiAgLyoqXG4gICAqIFdyYXBwZXIgYXJvdW5kIGd0YWcgdGhhdCBlbnN1cmVzIEZJRCBpcyBzZW50IHdpdGggZ3RhZyBjYWxscy5cbiAgICogQHBhcmFtIGNvbW1hbmQgR3RhZyBjb21tYW5kIHR5cGUuXG4gICAqIEBwYXJhbSBpZE9yTmFtZU9yUGFyYW1zIE1lYXN1cmVtZW50IElEIGlmIGNvbW1hbmQgaXMgRVZFTlQvQ09ORklHLCBwYXJhbXMgaWYgY29tbWFuZCBpcyBTRVQuXG4gICAqIEBwYXJhbSBndGFnUGFyYW1zIFBhcmFtcyBpZiBldmVudCBpcyBFVkVOVC9DT05GSUcuXG4gICAqL1xuICBhc3luYyBmdW5jdGlvbiBndGFnV3JhcHBlcihjb21tYW5kLCAuLi5hcmdzKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIElmIGV2ZW50LCBjaGVjayB0aGF0IHJlbGV2YW50IGluaXRpYWxpemF0aW9uIHByb21pc2VzIGhhdmUgY29tcGxldGVkLlxuICAgICAgaWYgKGNvbW1hbmQgPT09IFwiZXZlbnRcIiAvKiBHdGFnQ29tbWFuZC5FVkVOVCAqLykge1xuICAgICAgICBjb25zdCBbbWVhc3VyZW1lbnRJZCwgZ3RhZ1BhcmFtc10gPSBhcmdzO1xuICAgICAgICAvLyBJZiBFVkVOVCwgc2Vjb25kIGFyZyBtdXN0IGJlIG1lYXN1cmVtZW50SWQuXG4gICAgICAgIGF3YWl0IGd0YWdPbkV2ZW50KGd0YWdDb3JlLCBpbml0aWFsaXphdGlvblByb21pc2VzTWFwLCBkeW5hbWljQ29uZmlnUHJvbWlzZXNMaXN0LCBtZWFzdXJlbWVudElkLCBndGFnUGFyYW1zKTtcbiAgICAgIH0gZWxzZSBpZiAoY29tbWFuZCA9PT0gXCJjb25maWdcIiAvKiBHdGFnQ29tbWFuZC5DT05GSUcgKi8pIHtcbiAgICAgICAgY29uc3QgW21lYXN1cmVtZW50SWQsIGd0YWdQYXJhbXNdID0gYXJncztcbiAgICAgICAgLy8gSWYgQ09ORklHLCBzZWNvbmQgYXJnIG11c3QgYmUgbWVhc3VyZW1lbnRJZC5cbiAgICAgICAgYXdhaXQgZ3RhZ09uQ29uZmlnKGd0YWdDb3JlLCBpbml0aWFsaXphdGlvblByb21pc2VzTWFwLCBkeW5hbWljQ29uZmlnUHJvbWlzZXNMaXN0LCBtZWFzdXJlbWVudElkVG9BcHBJZCwgbWVhc3VyZW1lbnRJZCwgZ3RhZ1BhcmFtcyk7XG4gICAgICB9IGVsc2UgaWYgKGNvbW1hbmQgPT09IFwiY29uc2VudFwiIC8qIEd0YWdDb21tYW5kLkNPTlNFTlQgKi8pIHtcbiAgICAgICAgY29uc3QgW2NvbnNlbnRBY3Rpb24sIGd0YWdQYXJhbXNdID0gYXJncztcbiAgICAgICAgLy8gY29uc2VudEFjdGlvbiBjYW4gYmUgb25lIG9mICdkZWZhdWx0JyBvciAndXBkYXRlJy5cbiAgICAgICAgZ3RhZ0NvcmUoXCJjb25zZW50XCIgLyogR3RhZ0NvbW1hbmQuQ09OU0VOVCAqLywgY29uc2VudEFjdGlvbiwgZ3RhZ1BhcmFtcyk7XG4gICAgICB9IGVsc2UgaWYgKGNvbW1hbmQgPT09IFwiZ2V0XCIgLyogR3RhZ0NvbW1hbmQuR0VUICovKSB7XG4gICAgICAgIGNvbnN0IFttZWFzdXJlbWVudElkLCBmaWVsZE5hbWUsIGNhbGxiYWNrXSA9IGFyZ3M7XG4gICAgICAgIGd0YWdDb3JlKFwiZ2V0XCIgLyogR3RhZ0NvbW1hbmQuR0VUICovLCBtZWFzdXJlbWVudElkLCBmaWVsZE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgIH0gZWxzZSBpZiAoY29tbWFuZCA9PT0gXCJzZXRcIiAvKiBHdGFnQ29tbWFuZC5TRVQgKi8pIHtcbiAgICAgICAgY29uc3QgW2N1c3RvbVBhcmFtc10gPSBhcmdzO1xuICAgICAgICAvLyBJZiBTRVQsIHNlY29uZCBhcmcgbXVzdCBiZSBwYXJhbXMuXG4gICAgICAgIGd0YWdDb3JlKFwic2V0XCIgLyogR3RhZ0NvbW1hbmQuU0VUICovLCBjdXN0b21QYXJhbXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3RhZ0NvcmUoY29tbWFuZCwgLi4uYXJncyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nZ2VyLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZ3RhZ1dyYXBwZXI7XG59XG4vKipcbiAqIENyZWF0ZXMgZ2xvYmFsIGd0YWcgZnVuY3Rpb24gb3Igd3JhcHMgZXhpc3Rpbmcgb25lIGlmIGZvdW5kLlxuICogVGhpcyB3cmFwcGVkIGZ1bmN0aW9uIGF0dGFjaGVzIEZpcmViYXNlIGluc3RhbmNlIElEIChGSUQpIHRvIGd0YWcgJ2NvbmZpZycgYW5kXG4gKiAnZXZlbnQnIGNhbGxzIHRoYXQgYmVsb25nIHRvIHRoZSBHQUlEIGFzc29jaWF0ZWQgd2l0aCB0aGlzIEZpcmViYXNlIGluc3RhbmNlLlxuICpcbiAqIEBwYXJhbSBpbml0aWFsaXphdGlvblByb21pc2VzTWFwIE1hcCBvZiBhcHBJZHMgdG8gdGhlaXIgaW5pdGlhbGl6YXRpb24gcHJvbWlzZXMuXG4gKiBAcGFyYW0gZHluYW1pY0NvbmZpZ1Byb21pc2VzTGlzdCBBcnJheSBvZiBkeW5hbWljIGNvbmZpZyBmZXRjaCBwcm9taXNlcy5cbiAqIEBwYXJhbSBtZWFzdXJlbWVudElkVG9BcHBJZCBNYXAgb2YgR0EgbWVhc3VyZW1lbnRJRHMgdG8gY29ycmVzcG9uZGluZyBGaXJlYmFzZSBhcHBJZC5cbiAqIEBwYXJhbSBkYXRhTGF5ZXJOYW1lIE5hbWUgb2YgZ2xvYmFsIEdBIGRhdGFsYXllciBhcnJheS5cbiAqIEBwYXJhbSBndGFnRnVuY3Rpb25OYW1lIE5hbWUgb2YgZ2xvYmFsIGd0YWcgZnVuY3Rpb24gKFwiZ3RhZ1wiIGlmIG5vdCB1c2VyLXNwZWNpZmllZCkuXG4gKi9cbmZ1bmN0aW9uIHdyYXBPckNyZWF0ZUd0YWcoaW5pdGlhbGl6YXRpb25Qcm9taXNlc01hcCwgZHluYW1pY0NvbmZpZ1Byb21pc2VzTGlzdCwgbWVhc3VyZW1lbnRJZFRvQXBwSWQsIGRhdGFMYXllck5hbWUsIGd0YWdGdW5jdGlvbk5hbWUpIHtcbiAgLy8gQ3JlYXRlIGEgYmFzaWMgY29yZSBndGFnIGZ1bmN0aW9uXG4gIGxldCBndGFnQ29yZSA9IGZ1bmN0aW9uICguLi5fYXJncykge1xuICAgIC8vIE11c3QgcHVzaCBJQXJndW1lbnRzIG9iamVjdCwgbm90IGFuIGFycmF5LlxuICAgIHdpbmRvd1tkYXRhTGF5ZXJOYW1lXS5wdXNoKGFyZ3VtZW50cyk7XG4gIH07XG4gIC8vIFJlcGxhY2UgaXQgd2l0aCBleGlzdGluZyBvbmUgaWYgZm91bmRcbiAgaWYgKHdpbmRvd1tndGFnRnVuY3Rpb25OYW1lXSAmJiB0eXBlb2Ygd2luZG93W2d0YWdGdW5jdGlvbk5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGd0YWdDb3JlID0gd2luZG93W2d0YWdGdW5jdGlvbk5hbWVdO1xuICB9XG4gIHdpbmRvd1tndGFnRnVuY3Rpb25OYW1lXSA9IHdyYXBHdGFnKGd0YWdDb3JlLCBpbml0aWFsaXphdGlvblByb21pc2VzTWFwLCBkeW5hbWljQ29uZmlnUHJvbWlzZXNMaXN0LCBtZWFzdXJlbWVudElkVG9BcHBJZCk7XG4gIHJldHVybiB7XG4gICAgZ3RhZ0NvcmUsXG4gICAgd3JhcHBlZEd0YWc6IHdpbmRvd1tndGFnRnVuY3Rpb25OYW1lXVxuICB9O1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzY3JpcHQgdGFnIGluIHRoZSBET00gbWF0Y2hpbmcgYm90aCB0aGUgZ3RhZyB1cmwgcGF0dGVyblxuICogYW5kIHRoZSBwcm92aWRlZCBkYXRhIGxheWVyIG5hbWUuXG4gKi9cbmZ1bmN0aW9uIGZpbmRHdGFnU2NyaXB0T25QYWdlKGRhdGFMYXllck5hbWUpIHtcbiAgY29uc3Qgc2NyaXB0VGFncyA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG4gIGZvciAoY29uc3QgdGFnIG9mIE9iamVjdC52YWx1ZXMoc2NyaXB0VGFncykpIHtcbiAgICBpZiAodGFnLnNyYyAmJiB0YWcuc3JjLmluY2x1ZGVzKEdUQUdfVVJMKSAmJiB0YWcuc3JjLmluY2x1ZGVzKGRhdGFMYXllck5hbWUpKSB7XG4gICAgICByZXR1cm4gdGFnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogQmFja29mZiBmYWN0b3IgZm9yIDUwMyBlcnJvcnMsIHdoaWNoIHdlIHdhbnQgdG8gYmUgY29uc2VydmF0aXZlIGFib3V0XG4gKiB0byBhdm9pZCBvdmVybG9hZGluZyBzZXJ2ZXJzLiBFYWNoIHJldHJ5IGludGVydmFsIHdpbGwgYmVcbiAqIEJBU0VfSU5URVJWQUxfTUlMTElTICogTE9OR19SRVRSWV9GQUNUT1IgXiByZXRyeUNvdW50LCBzbyB0aGUgc2Vjb25kIG9uZVxuICogd2lsbCBiZSB+MzAgc2Vjb25kcyAod2l0aCBmdXp6aW5nKS5cbiAqL1xuY29uc3QgTE9OR19SRVRSWV9GQUNUT1IgPSAzMDtcbi8qKlxuICogQmFzZSB3YWl0IGludGVydmFsIHRvIG11bHRpcGxpZWQgYnkgYmFja29mZkZhY3Rvcl5iYWNrb2ZmQ291bnQuXG4gKi9cbmNvbnN0IEJBU0VfSU5URVJWQUxfTUlMTElTID0gMTAwMDtcbi8qKlxuICogU3R1YmJhYmxlIHJldHJ5IGRhdGEgc3RvcmFnZSBjbGFzcy5cbiAqL1xuY2xhc3MgUmV0cnlEYXRhIHtcbiAgY29uc3RydWN0b3IodGhyb3R0bGVNZXRhZGF0YSA9IHt9LCBpbnRlcnZhbE1pbGxpcyA9IEJBU0VfSU5URVJWQUxfTUlMTElTKSB7XG4gICAgdGhpcy50aHJvdHRsZU1ldGFkYXRhID0gdGhyb3R0bGVNZXRhZGF0YTtcbiAgICB0aGlzLmludGVydmFsTWlsbGlzID0gaW50ZXJ2YWxNaWxsaXM7XG4gIH1cbiAgZ2V0VGhyb3R0bGVNZXRhZGF0YShhcHBJZCkge1xuICAgIHJldHVybiB0aGlzLnRocm90dGxlTWV0YWRhdGFbYXBwSWRdO1xuICB9XG4gIHNldFRocm90dGxlTWV0YWRhdGEoYXBwSWQsIG1ldGFkYXRhKSB7XG4gICAgdGhpcy50aHJvdHRsZU1ldGFkYXRhW2FwcElkXSA9IG1ldGFkYXRhO1xuICB9XG4gIGRlbGV0ZVRocm90dGxlTWV0YWRhdGEoYXBwSWQpIHtcbiAgICBkZWxldGUgdGhpcy50aHJvdHRsZU1ldGFkYXRhW2FwcElkXTtcbiAgfVxufVxuY29uc3QgZGVmYXVsdFJldHJ5RGF0YSA9IG5ldyBSZXRyeURhdGEoKTtcbi8qKlxuICogU2V0IEdFVCByZXF1ZXN0IGhlYWRlcnMuXG4gKiBAcGFyYW0gYXBpS2V5IEFwcCBBUEkga2V5LlxuICovXG5mdW5jdGlvbiBnZXRIZWFkZXJzKGFwaUtleSkge1xuICByZXR1cm4gbmV3IEhlYWRlcnMoe1xuICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICd4LWdvb2ctYXBpLWtleSc6IGFwaUtleVxuICB9KTtcbn1cbi8qKlxuICogRmV0Y2hlcyBkeW5hbWljIGNvbmZpZyBmcm9tIGJhY2tlbmQuXG4gKiBAcGFyYW0gYXBwIEZpcmViYXNlIGFwcCB0byBmZXRjaCBjb25maWcgZm9yLlxuICovXG5hc3luYyBmdW5jdGlvbiBmZXRjaER5bmFtaWNDb25maWcoYXBwRmllbGRzKSB7XG4gIHZhciBfYTtcbiAgY29uc3Qge1xuICAgIGFwcElkLFxuICAgIGFwaUtleVxuICB9ID0gYXBwRmllbGRzO1xuICBjb25zdCByZXF1ZXN0ID0ge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczogZ2V0SGVhZGVycyhhcGlLZXkpXG4gIH07XG4gIGNvbnN0IGFwcFVybCA9IERZTkFNSUNfQ09ORklHX1VSTC5yZXBsYWNlKCd7YXBwLWlkfScsIGFwcElkKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcHBVcmwsIHJlcXVlc3QpO1xuICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzICE9PSAzMDQpIHtcbiAgICBsZXQgZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFRyeSB0byBnZXQgYW55IGVycm9yIG1lc3NhZ2UgdGV4dCBmcm9tIHNlcnZlciByZXNwb25zZS5cbiAgICAgIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGlmICgoX2EgPSBqc29uUmVzcG9uc2UuZXJyb3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5tZXNzYWdlKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZSA9IGpzb25SZXNwb25zZS5lcnJvci5tZXNzYWdlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKF9pZ25vcmVkKSB7fVxuICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiY29uZmlnLWZldGNoLWZhaWxlZFwiIC8qIEFuYWx5dGljc0Vycm9yLkNPTkZJR19GRVRDSF9GQUlMRUQgKi8sIHtcbiAgICAgIGh0dHBTdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlTWVzc2FnZTogZXJyb3JNZXNzYWdlXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cbi8qKlxuICogRmV0Y2hlcyBkeW5hbWljIGNvbmZpZyBmcm9tIGJhY2tlbmQsIHJldHJ5aW5nIGlmIGZhaWxlZC5cbiAqIEBwYXJhbSBhcHAgRmlyZWJhc2UgYXBwIHRvIGZldGNoIGNvbmZpZyBmb3IuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRHluYW1pY0NvbmZpZ1dpdGhSZXRyeShhcHAsXG4vLyByZXRyeURhdGEgYW5kIHRpbWVvdXRNaWxsaXMgYXJlIHBhcmFtZXRlcml6ZWQgdG8gYWxsb3cgcGFzc2luZyBhIGRpZmZlcmVudCB2YWx1ZSBmb3IgdGVzdGluZy5cbnJldHJ5RGF0YSA9IGRlZmF1bHRSZXRyeURhdGEsIHRpbWVvdXRNaWxsaXMpIHtcbiAgY29uc3Qge1xuICAgIGFwcElkLFxuICAgIGFwaUtleSxcbiAgICBtZWFzdXJlbWVudElkXG4gIH0gPSBhcHAub3B0aW9ucztcbiAgaWYgKCFhcHBJZCkge1xuICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwibm8tYXBwLWlkXCIgLyogQW5hbHl0aWNzRXJyb3IuTk9fQVBQX0lEICovKTtcbiAgfVxuICBpZiAoIWFwaUtleSkge1xuICAgIGlmIChtZWFzdXJlbWVudElkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZWFzdXJlbWVudElkLFxuICAgICAgICBhcHBJZFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJuby1hcGkta2V5XCIgLyogQW5hbHl0aWNzRXJyb3IuTk9fQVBJX0tFWSAqLyk7XG4gIH1cbiAgY29uc3QgdGhyb3R0bGVNZXRhZGF0YSA9IHJldHJ5RGF0YS5nZXRUaHJvdHRsZU1ldGFkYXRhKGFwcElkKSB8fCB7XG4gICAgYmFja29mZkNvdW50OiAwLFxuICAgIHRocm90dGxlRW5kVGltZU1pbGxpczogRGF0ZS5ub3coKVxuICB9O1xuICBjb25zdCBzaWduYWwgPSBuZXcgQW5hbHl0aWNzQWJvcnRTaWduYWwoKTtcbiAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgLy8gTm90ZSBhIHZlcnkgbG93IGRlbGF5LCBlZyA8IDEwbXMsIGNhbiBlbGFwc2UgYmVmb3JlIGxpc3RlbmVycyBhcmUgaW5pdGlhbGl6ZWQuXG4gICAgc2lnbmFsLmFib3J0KCk7XG4gIH0sIHRpbWVvdXRNaWxsaXMgIT09IHVuZGVmaW5lZCA/IHRpbWVvdXRNaWxsaXMgOiBGRVRDSF9USU1FT1VUX01JTExJUyk7XG4gIHJldHVybiBhdHRlbXB0RmV0Y2hEeW5hbWljQ29uZmlnV2l0aFJldHJ5KHtcbiAgICBhcHBJZCxcbiAgICBhcGlLZXksXG4gICAgbWVhc3VyZW1lbnRJZFxuICB9LCB0aHJvdHRsZU1ldGFkYXRhLCBzaWduYWwsIHJldHJ5RGF0YSk7XG59XG4vKipcbiAqIFJ1bnMgb25lIHJldHJ5IGF0dGVtcHQuXG4gKiBAcGFyYW0gYXBwRmllbGRzIE5lY2Vzc2FyeSBhcHAgY29uZmlnIGZpZWxkcy5cbiAqIEBwYXJhbSB0aHJvdHRsZU1ldGFkYXRhIE9uZ29pbmcgbWV0YWRhdGEgdG8gZGV0ZXJtaW5lIHRocm90dGxpbmcgdGltZXMuXG4gKiBAcGFyYW0gc2lnbmFsIEFib3J0IHNpZ25hbC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXR0ZW1wdEZldGNoRHluYW1pY0NvbmZpZ1dpdGhSZXRyeShhcHBGaWVsZHMsIHtcbiAgdGhyb3R0bGVFbmRUaW1lTWlsbGlzLFxuICBiYWNrb2ZmQ291bnRcbn0sIHNpZ25hbCwgcmV0cnlEYXRhID0gZGVmYXVsdFJldHJ5RGF0YSAvLyBmb3IgdGVzdGluZ1xuKSB7XG4gIHZhciBfYTtcbiAgY29uc3Qge1xuICAgIGFwcElkLFxuICAgIG1lYXN1cmVtZW50SWRcbiAgfSA9IGFwcEZpZWxkcztcbiAgLy8gU3RhcnRzIHdpdGggYSAocG90ZW50aWFsbHkgemVybykgdGltZW91dCB0byBzdXBwb3J0IHJlc3VtcHRpb24gZnJvbSBzdG9yZWQgc3RhdGUuXG4gIC8vIEVuc3VyZXMgdGhlIHRocm90dGxlIGVuZCB0aW1lIGlzIGhvbm9yZWQgaWYgdGhlIGxhc3QgYXR0ZW1wdCB0aW1lZCBvdXQuXG4gIC8vIE5vdGUgdGhlIFNESyB3aWxsIG5ldmVyIG1ha2UgYSByZXF1ZXN0IGlmIHRoZSBmZXRjaCB0aW1lb3V0IGV4cGlyZXMgYXQgdGhpcyBwb2ludC5cbiAgdHJ5IHtcbiAgICBhd2FpdCBzZXRBYm9ydGFibGVUaW1lb3V0KHNpZ25hbCwgdGhyb3R0bGVFbmRUaW1lTWlsbGlzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChtZWFzdXJlbWVudElkKSB7XG4gICAgICBsb2dnZXIud2FybihgVGltZWQgb3V0IGZldGNoaW5nIHRoaXMgRmlyZWJhc2UgYXBwJ3MgbWVhc3VyZW1lbnQgSUQgZnJvbSB0aGUgc2VydmVyLmAgKyBgIEZhbGxpbmcgYmFjayB0byB0aGUgbWVhc3VyZW1lbnQgSUQgJHttZWFzdXJlbWVudElkfWAgKyBgIHByb3ZpZGVkIGluIHRoZSBcIm1lYXN1cmVtZW50SWRcIiBmaWVsZCBpbiB0aGUgbG9jYWwgRmlyZWJhc2UgY29uZmlnLiBbJHtlID09PSBudWxsIHx8IGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGUubWVzc2FnZX1dYCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhcHBJZCxcbiAgICAgICAgbWVhc3VyZW1lbnRJZFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhyb3cgZTtcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hEeW5hbWljQ29uZmlnKGFwcEZpZWxkcyk7XG4gICAgLy8gTm90ZSB0aGUgU0RLIG9ubHkgY2xlYXJzIHRocm90dGxlIHN0YXRlIGlmIHJlc3BvbnNlIGlzIHN1Y2Nlc3Mgb3Igbm9uLXJldHJpYWJsZS5cbiAgICByZXRyeURhdGEuZGVsZXRlVGhyb3R0bGVNZXRhZGF0YShhcHBJZCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc3QgZXJyb3IgPSBlO1xuICAgIGlmICghaXNSZXRyaWFibGVFcnJvcihlcnJvcikpIHtcbiAgICAgIHJldHJ5RGF0YS5kZWxldGVUaHJvdHRsZU1ldGFkYXRhKGFwcElkKTtcbiAgICAgIGlmIChtZWFzdXJlbWVudElkKSB7XG4gICAgICAgIGxvZ2dlci53YXJuKGBGYWlsZWQgdG8gZmV0Y2ggdGhpcyBGaXJlYmFzZSBhcHAncyBtZWFzdXJlbWVudCBJRCBmcm9tIHRoZSBzZXJ2ZXIuYCArIGAgRmFsbGluZyBiYWNrIHRvIHRoZSBtZWFzdXJlbWVudCBJRCAke21lYXN1cmVtZW50SWR9YCArIGAgcHJvdmlkZWQgaW4gdGhlIFwibWVhc3VyZW1lbnRJZFwiIGZpZWxkIGluIHRoZSBsb2NhbCBGaXJlYmFzZSBjb25maWcuIFske2Vycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5tZXNzYWdlfV1gKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBhcHBJZCxcbiAgICAgICAgICBtZWFzdXJlbWVudElkXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBiYWNrb2ZmTWlsbGlzID0gTnVtYmVyKChfYSA9IGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5jdXN0b21EYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaHR0cFN0YXR1cykgPT09IDUwMyA/IGNhbGN1bGF0ZUJhY2tvZmZNaWxsaXMoYmFja29mZkNvdW50LCByZXRyeURhdGEuaW50ZXJ2YWxNaWxsaXMsIExPTkdfUkVUUllfRkFDVE9SKSA6IGNhbGN1bGF0ZUJhY2tvZmZNaWxsaXMoYmFja29mZkNvdW50LCByZXRyeURhdGEuaW50ZXJ2YWxNaWxsaXMpO1xuICAgIC8vIEluY3JlbWVudHMgYmFja29mZiBzdGF0ZS5cbiAgICBjb25zdCB0aHJvdHRsZU1ldGFkYXRhID0ge1xuICAgICAgdGhyb3R0bGVFbmRUaW1lTWlsbGlzOiBEYXRlLm5vdygpICsgYmFja29mZk1pbGxpcyxcbiAgICAgIGJhY2tvZmZDb3VudDogYmFja29mZkNvdW50ICsgMVxuICAgIH07XG4gICAgLy8gUGVyc2lzdHMgc3RhdGUuXG4gICAgcmV0cnlEYXRhLnNldFRocm90dGxlTWV0YWRhdGEoYXBwSWQsIHRocm90dGxlTWV0YWRhdGEpO1xuICAgIGxvZ2dlci5kZWJ1ZyhgQ2FsbGluZyBhdHRlbXB0RmV0Y2ggYWdhaW4gaW4gJHtiYWNrb2ZmTWlsbGlzfSBtaWxsaXNgKTtcbiAgICByZXR1cm4gYXR0ZW1wdEZldGNoRHluYW1pY0NvbmZpZ1dpdGhSZXRyeShhcHBGaWVsZHMsIHRocm90dGxlTWV0YWRhdGEsIHNpZ25hbCwgcmV0cnlEYXRhKTtcbiAgfVxufVxuLyoqXG4gKiBTdXBwb3J0cyB3YWl0aW5nIG9uIGEgYmFja29mZiBieTpcbiAqXG4gKiA8dWw+XG4gKiAgIDxsaT5Qcm9taXNpZnlpbmcgc2V0VGltZW91dCwgc28gd2UgY2FuIHNldCBhIHRpbWVvdXQgaW4gb3VyIFByb21pc2UgY2hhaW48L2xpPlxuICogICA8bGk+TGlzdGVuaW5nIG9uIGEgc2lnbmFsIGJ1cyBmb3IgYWJvcnQgZXZlbnRzLCBqdXN0IGxpa2UgdGhlIEZldGNoIEFQSTwvbGk+XG4gKiAgIDxsaT5GYWlsaW5nIGluIHRoZSBzYW1lIHdheSB0aGUgRmV0Y2ggQVBJIGZhaWxzLCBzbyB0aW1pbmcgb3V0IGEgbGl2ZSByZXF1ZXN0IGFuZCBhIHRocm90dGxlZFxuICogICAgICAgcmVxdWVzdCBhcHBlYXIgdGhlIHNhbWUuPC9saT5cbiAqIDwvdWw+XG4gKlxuICogPHA+VmlzaWJsZSBmb3IgdGVzdGluZy5cbiAqL1xuZnVuY3Rpb24gc2V0QWJvcnRhYmxlVGltZW91dChzaWduYWwsIHRocm90dGxlRW5kVGltZU1pbGxpcykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vIERlcml2ZXMgYmFja29mZiBmcm9tIGdpdmVuIGVuZCB0aW1lLCBub3JtYWxpemluZyBuZWdhdGl2ZSBudW1iZXJzIHRvIHplcm8uXG4gICAgY29uc3QgYmFja29mZk1pbGxpcyA9IE1hdGgubWF4KHRocm90dGxlRW5kVGltZU1pbGxpcyAtIERhdGUubm93KCksIDApO1xuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KHJlc29sdmUsIGJhY2tvZmZNaWxsaXMpO1xuICAgIC8vIEFkZHMgbGlzdGVuZXIsIHJhdGhlciB0aGFuIHNldHMgb25hYm9ydCwgYmVjYXVzZSBzaWduYWwgaXMgYSBzaGFyZWQgb2JqZWN0LlxuICAgIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIC8vIElmIHRoZSByZXF1ZXN0IGNvbXBsZXRlcyBiZWZvcmUgdGhpcyB0aW1lb3V0LCB0aGUgcmVqZWN0aW9uIGhhcyBubyBlZmZlY3QuXG4gICAgICByZWplY3QoRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJmZXRjaC10aHJvdHRsZVwiIC8qIEFuYWx5dGljc0Vycm9yLkZFVENIX1RIUk9UVExFICovLCB7XG4gICAgICAgIHRocm90dGxlRW5kVGltZU1pbGxpc1xuICAgICAgfSkpO1xuICAgIH0pO1xuICB9KTtcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB7QGxpbmsgRXJyb3J9IGluZGljYXRlcyBhIGZldGNoIHJlcXVlc3QgbWF5IHN1Y2NlZWQgbGF0ZXIuXG4gKi9cbmZ1bmN0aW9uIGlzUmV0cmlhYmxlRXJyb3IoZSkge1xuICBpZiAoIShlIGluc3RhbmNlb2YgRmlyZWJhc2VFcnJvcikgfHwgIWUuY3VzdG9tRGF0YSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBVc2VzIHN0cmluZyBpbmRleCBkZWZpbmVkIGJ5IEVycm9yRGF0YSwgd2hpY2ggRmlyZWJhc2VFcnJvciBpbXBsZW1lbnRzLlxuICBjb25zdCBodHRwU3RhdHVzID0gTnVtYmVyKGUuY3VzdG9tRGF0YVsnaHR0cFN0YXR1cyddKTtcbiAgcmV0dXJuIGh0dHBTdGF0dXMgPT09IDQyOSB8fCBodHRwU3RhdHVzID09PSA1MDAgfHwgaHR0cFN0YXR1cyA9PT0gNTAzIHx8IGh0dHBTdGF0dXMgPT09IDUwNDtcbn1cbi8qKlxuICogU2hpbXMgYSBtaW5pbWFsIEFib3J0U2lnbmFsIChjb3BpZWQgZnJvbSBSZW1vdGUgQ29uZmlnKS5cbiAqXG4gKiA8cD5BYm9ydENvbnRyb2xsZXIncyBBYm9ydFNpZ25hbCBjb252ZW5pZW50bHkgZGVjb3VwbGVzIGZldGNoIHRpbWVvdXQgbG9naWMgZnJvbSBvdGhlciBhc3BlY3RzXG4gKiBvZiBuZXR3b3JraW5nLCBzdWNoIGFzIHJldHJpZXMuIEZpcmViYXNlIGRvZXNuJ3QgdXNlIEFib3J0Q29udHJvbGxlciBlbm91Z2ggdG8ganVzdGlmeSBhXG4gKiBwb2x5ZmlsbCByZWNvbW1lbmRhdGlvbiwgbGlrZSB3ZSBkbyB3aXRoIHRoZSBGZXRjaCBBUEksIGJ1dCB0aGlzIG1pbmltYWwgc2hpbSBjYW4gZWFzaWx5IGJlXG4gKiBzd2FwcGVkIG91dCBpZi93aGVuIHdlIGRvLlxuICovXG5jbGFzcyBBbmFseXRpY3NBYm9ydFNpZ25hbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gIH1cbiAgYWRkRXZlbnRMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICB9XG4gIGFib3J0KCkge1xuICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4gbGlzdGVuZXIoKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogRXZlbnQgcGFyYW1ldGVycyB0byBzZXQgb24gJ2d0YWcnIGR1cmluZyBpbml0aWFsaXphdGlvbi5cbiAqL1xubGV0IGRlZmF1bHRFdmVudFBhcmFtZXRlcnNGb3JJbml0O1xuLyoqXG4gKiBMb2dzIGFuIGFuYWx5dGljcyBldmVudCB0aHJvdWdoIHRoZSBGaXJlYmFzZSBTREsuXG4gKlxuICogQHBhcmFtIGd0YWdGdW5jdGlvbiBXcmFwcGVkIGd0YWcgZnVuY3Rpb24gdGhhdCB3YWl0cyBmb3IgZmlkIHRvIGJlIHNldCBiZWZvcmUgc2VuZGluZyBhbiBldmVudFxuICogQHBhcmFtIGV2ZW50TmFtZSBHb29nbGUgQW5hbHl0aWNzIGV2ZW50IG5hbWUsIGNob29zZSBmcm9tIHN0YW5kYXJkIGxpc3Qgb3IgdXNlIGEgY3VzdG9tIHN0cmluZy5cbiAqIEBwYXJhbSBldmVudFBhcmFtcyBBbmFseXRpY3MgZXZlbnQgcGFyYW1ldGVycy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbG9nRXZlbnQkMShndGFnRnVuY3Rpb24sIGluaXRpYWxpemF0aW9uUHJvbWlzZSwgZXZlbnROYW1lLCBldmVudFBhcmFtcywgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdsb2JhbCkge1xuICAgIGd0YWdGdW5jdGlvbihcImV2ZW50XCIgLyogR3RhZ0NvbW1hbmQuRVZFTlQgKi8sIGV2ZW50TmFtZSwgZXZlbnRQYXJhbXMpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtZWFzdXJlbWVudElkID0gYXdhaXQgaW5pdGlhbGl6YXRpb25Qcm9taXNlO1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZXZlbnRQYXJhbXMpLCB7XG4gICAgICAnc2VuZF90byc6IG1lYXN1cmVtZW50SWRcbiAgICB9KTtcbiAgICBndGFnRnVuY3Rpb24oXCJldmVudFwiIC8qIEd0YWdDb21tYW5kLkVWRU5UICovLCBldmVudE5hbWUsIHBhcmFtcyk7XG4gIH1cbn1cbi8qKlxuICogU2V0IHNjcmVlbl9uYW1lIHBhcmFtZXRlciBmb3IgdGhpcyBHb29nbGUgQW5hbHl0aWNzIElELlxuICpcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgbG9nRXZlbnR9IHdpdGggYGV2ZW50TmFtZWAgYXMgJ3NjcmVlbl92aWV3JyBhbmQgYWRkIHJlbGV2YW50IGBldmVudFBhcmFtc2AuXG4gKiBTZWUge0BsaW5rIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2FuYWx5dGljcy9zY3JlZW52aWV3cyB8IFRyYWNrIFNjcmVlbnZpZXdzfS5cbiAqXG4gKiBAcGFyYW0gZ3RhZ0Z1bmN0aW9uIFdyYXBwZWQgZ3RhZyBmdW5jdGlvbiB0aGF0IHdhaXRzIGZvciBmaWQgdG8gYmUgc2V0IGJlZm9yZSBzZW5kaW5nIGFuIGV2ZW50XG4gKiBAcGFyYW0gc2NyZWVuTmFtZSBTY3JlZW4gbmFtZSBzdHJpbmcgdG8gc2V0LlxuICovXG5hc3luYyBmdW5jdGlvbiBzZXRDdXJyZW50U2NyZWVuJDEoZ3RhZ0Z1bmN0aW9uLCBpbml0aWFsaXphdGlvblByb21pc2UsIHNjcmVlbk5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nbG9iYWwpIHtcbiAgICBndGFnRnVuY3Rpb24oXCJzZXRcIiAvKiBHdGFnQ29tbWFuZC5TRVQgKi8sIHtcbiAgICAgICdzY3JlZW5fbmFtZSc6IHNjcmVlbk5hbWVcbiAgICB9KTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbWVhc3VyZW1lbnRJZCA9IGF3YWl0IGluaXRpYWxpemF0aW9uUHJvbWlzZTtcbiAgICBndGFnRnVuY3Rpb24oXCJjb25maWdcIiAvKiBHdGFnQ29tbWFuZC5DT05GSUcgKi8sIG1lYXN1cmVtZW50SWQsIHtcbiAgICAgIHVwZGF0ZTogdHJ1ZSxcbiAgICAgICdzY3JlZW5fbmFtZSc6IHNjcmVlbk5hbWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBTZXQgdXNlcl9pZCBwYXJhbWV0ZXIgZm9yIHRoaXMgR29vZ2xlIEFuYWx5dGljcyBJRC5cbiAqXG4gKiBAcGFyYW0gZ3RhZ0Z1bmN0aW9uIFdyYXBwZWQgZ3RhZyBmdW5jdGlvbiB0aGF0IHdhaXRzIGZvciBmaWQgdG8gYmUgc2V0IGJlZm9yZSBzZW5kaW5nIGFuIGV2ZW50XG4gKiBAcGFyYW0gaWQgVXNlciBJRCBzdHJpbmcgdG8gc2V0XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldFVzZXJJZCQxKGd0YWdGdW5jdGlvbiwgaW5pdGlhbGl6YXRpb25Qcm9taXNlLCBpZCwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdsb2JhbCkge1xuICAgIGd0YWdGdW5jdGlvbihcInNldFwiIC8qIEd0YWdDb21tYW5kLlNFVCAqLywge1xuICAgICAgJ3VzZXJfaWQnOiBpZFxuICAgIH0pO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtZWFzdXJlbWVudElkID0gYXdhaXQgaW5pdGlhbGl6YXRpb25Qcm9taXNlO1xuICAgIGd0YWdGdW5jdGlvbihcImNvbmZpZ1wiIC8qIEd0YWdDb21tYW5kLkNPTkZJRyAqLywgbWVhc3VyZW1lbnRJZCwge1xuICAgICAgdXBkYXRlOiB0cnVlLFxuICAgICAgJ3VzZXJfaWQnOiBpZFxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIFNldCBhbGwgb3RoZXIgdXNlciBwcm9wZXJ0aWVzIG90aGVyIHRoYW4gdXNlcl9pZCBhbmQgc2NyZWVuX25hbWUuXG4gKlxuICogQHBhcmFtIGd0YWdGdW5jdGlvbiBXcmFwcGVkIGd0YWcgZnVuY3Rpb24gdGhhdCB3YWl0cyBmb3IgZmlkIHRvIGJlIHNldCBiZWZvcmUgc2VuZGluZyBhbiBldmVudFxuICogQHBhcmFtIHByb3BlcnRpZXMgTWFwIG9mIHVzZXIgcHJvcGVydGllcyB0byBzZXRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2V0VXNlclByb3BlcnRpZXMkMShndGFnRnVuY3Rpb24sIGluaXRpYWxpemF0aW9uUHJvbWlzZSwgcHJvcGVydGllcywgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdsb2JhbCkge1xuICAgIGNvbnN0IGZsYXRQcm9wZXJ0aWVzID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocHJvcGVydGllcykpIHtcbiAgICAgIC8vIHVzZSBkb3Qgbm90YXRpb24gZm9yIG1lcmdlIGJlaGF2aW9yIGluIGd0YWcuanNcbiAgICAgIGZsYXRQcm9wZXJ0aWVzW2B1c2VyX3Byb3BlcnRpZXMuJHtrZXl9YF0gPSBwcm9wZXJ0aWVzW2tleV07XG4gICAgfVxuICAgIGd0YWdGdW5jdGlvbihcInNldFwiIC8qIEd0YWdDb21tYW5kLlNFVCAqLywgZmxhdFByb3BlcnRpZXMpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtZWFzdXJlbWVudElkID0gYXdhaXQgaW5pdGlhbGl6YXRpb25Qcm9taXNlO1xuICAgIGd0YWdGdW5jdGlvbihcImNvbmZpZ1wiIC8qIEd0YWdDb21tYW5kLkNPTkZJRyAqLywgbWVhc3VyZW1lbnRJZCwge1xuICAgICAgdXBkYXRlOiB0cnVlLFxuICAgICAgJ3VzZXJfcHJvcGVydGllcyc6IHByb3BlcnRpZXNcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBSZXRyaWV2ZXMgYSB1bmlxdWUgR29vZ2xlIEFuYWx5dGljcyBpZGVudGlmaWVyIGZvciB0aGUgd2ViIGNsaWVudC5cbiAqIFNlZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2dhNC9yZWZlcmVuY2UvY29uZmlnI2NsaWVudF9pZCB8IGNsaWVudF9pZH0uXG4gKlxuICogQHBhcmFtIGd0YWdGdW5jdGlvbiBXcmFwcGVkIGd0YWcgZnVuY3Rpb24gdGhhdCB3YWl0cyBmb3IgZmlkIHRvIGJlIHNldCBiZWZvcmUgc2VuZGluZyBhbiBldmVudFxuICovXG5hc3luYyBmdW5jdGlvbiBpbnRlcm5hbEdldEdvb2dsZUFuYWx5dGljc0NsaWVudElkKGd0YWdGdW5jdGlvbiwgaW5pdGlhbGl6YXRpb25Qcm9taXNlKSB7XG4gIGNvbnN0IG1lYXN1cmVtZW50SWQgPSBhd2FpdCBpbml0aWFsaXphdGlvblByb21pc2U7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZ3RhZ0Z1bmN0aW9uKFwiZ2V0XCIgLyogR3RhZ0NvbW1hbmQuR0VUICovLCBtZWFzdXJlbWVudElkLCAnY2xpZW50X2lkJywgY2xpZW50SWQgPT4ge1xuICAgICAgaWYgKCFjbGllbnRJZCkge1xuICAgICAgICByZWplY3QoRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJuby1jbGllbnQtaWRcIiAvKiBBbmFseXRpY3NFcnJvci5OT19DTElFTlRfSUQgKi8pKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoY2xpZW50SWQpO1xuICAgIH0pO1xuICB9KTtcbn1cbi8qKlxuICogU2V0IHdoZXRoZXIgY29sbGVjdGlvbiBpcyBlbmFibGVkIGZvciB0aGlzIElELlxuICpcbiAqIEBwYXJhbSBlbmFibGVkIElmIHRydWUsIGNvbGxlY3Rpb24gaXMgZW5hYmxlZCBmb3IgdGhpcyBJRC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2V0QW5hbHl0aWNzQ29sbGVjdGlvbkVuYWJsZWQkMShpbml0aWFsaXphdGlvblByb21pc2UsIGVuYWJsZWQpIHtcbiAgY29uc3QgbWVhc3VyZW1lbnRJZCA9IGF3YWl0IGluaXRpYWxpemF0aW9uUHJvbWlzZTtcbiAgd2luZG93W2BnYS1kaXNhYmxlLSR7bWVhc3VyZW1lbnRJZH1gXSA9ICFlbmFibGVkO1xufVxuLyoqXG4gKiBDb25zZW50IHBhcmFtZXRlcnMgdG8gZGVmYXVsdCB0byBkdXJpbmcgJ2d0YWcnIGluaXRpYWxpemF0aW9uLlxuICovXG5sZXQgZGVmYXVsdENvbnNlbnRTZXR0aW5nc0ZvckluaXQ7XG4vKipcbiAqIFNldHMgdGhlIHZhcmlhYmxlIHtAbGluayBkZWZhdWx0Q29uc2VudFNldHRpbmdzRm9ySW5pdH0gZm9yIHVzZSBpbiB0aGUgaW5pdGlhbGl6YXRpb24gb2ZcbiAqIGFuYWx5dGljcy5cbiAqXG4gKiBAcGFyYW0gY29uc2VudFNldHRpbmdzIE1hcHMgdGhlIGFwcGxpY2FibGUgZW5kIHVzZXIgY29uc2VudCBzdGF0ZSBmb3IgZ3RhZy5qcy5cbiAqL1xuZnVuY3Rpb24gX3NldENvbnNlbnREZWZhdWx0Rm9ySW5pdChjb25zZW50U2V0dGluZ3MpIHtcbiAgZGVmYXVsdENvbnNlbnRTZXR0aW5nc0ZvckluaXQgPSBjb25zZW50U2V0dGluZ3M7XG59XG4vKipcbiAqIFNldHMgdGhlIHZhcmlhYmxlIGBkZWZhdWx0RXZlbnRQYXJhbWV0ZXJzRm9ySW5pdGAgZm9yIHVzZSBpbiB0aGUgaW5pdGlhbGl6YXRpb24gb2ZcbiAqIGFuYWx5dGljcy5cbiAqXG4gKiBAcGFyYW0gY3VzdG9tUGFyYW1zIEFueSBjdXN0b20gcGFyYW1zIHRoZSB1c2VyIG1heSBwYXNzIHRvIGd0YWcuanMuXG4gKi9cbmZ1bmN0aW9uIF9zZXREZWZhdWx0RXZlbnRQYXJhbWV0ZXJzRm9ySW5pdChjdXN0b21QYXJhbXMpIHtcbiAgZGVmYXVsdEV2ZW50UGFyYW1ldGVyc0ZvckluaXQgPSBjdXN0b21QYXJhbXM7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5hc3luYyBmdW5jdGlvbiB2YWxpZGF0ZUluZGV4ZWREQigpIHtcbiAgaWYgKCFpc0luZGV4ZWREQkF2YWlsYWJsZSgpKSB7XG4gICAgbG9nZ2VyLndhcm4oRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJpbmRleGVkZGItdW5hdmFpbGFibGVcIiAvKiBBbmFseXRpY3NFcnJvci5JTkRFWEVEREJfVU5BVkFJTEFCTEUgKi8sIHtcbiAgICAgIGVycm9ySW5mbzogJ0luZGV4ZWREQiBpcyBub3QgYXZhaWxhYmxlIGluIHRoaXMgZW52aXJvbm1lbnQuJ1xuICAgIH0pLm1lc3NhZ2UpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZ2dlci53YXJuKEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiaW5kZXhlZGRiLXVuYXZhaWxhYmxlXCIgLyogQW5hbHl0aWNzRXJyb3IuSU5ERVhFRERCX1VOQVZBSUxBQkxFICovLCB7XG4gICAgICAgIGVycm9ySW5mbzogZSA9PT0gbnVsbCB8fCBlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlLnRvU3RyaW5nKClcbiAgICAgIH0pLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgYW5hbHl0aWNzIGluc3RhbmNlIGluIGd0YWcuanMgYnkgY2FsbGluZyBjb25maWcgY29tbWFuZCB3aXRoIGZpZC5cbiAqXG4gKiBOT1RFOiBXZSBjb21iaW5lIGFuYWx5dGljcyBpbml0aWFsaXphdGlvbiBhbmQgc2V0dGluZyBmaWQgdG9nZXRoZXIgYmVjYXVzZSB3ZSB3YW50IGZpZCB0byBiZVxuICogcGFydCBvZiB0aGUgYHBhZ2Vfdmlld2AgZXZlbnQgdGhhdCdzIHNlbnQgZHVyaW5nIHRoZSBpbml0aWFsaXphdGlvblxuICogQHBhcmFtIGFwcCBGaXJlYmFzZSBhcHBcbiAqIEBwYXJhbSBndGFnQ29yZSBUaGUgZ3RhZyBmdW5jdGlvbiB0aGF0J3Mgbm90IHdyYXBwZWQuXG4gKiBAcGFyYW0gZHluYW1pY0NvbmZpZ1Byb21pc2VzTGlzdCBBcnJheSBvZiBhbGwgZHluYW1pYyBjb25maWcgcHJvbWlzZXMuXG4gKiBAcGFyYW0gbWVhc3VyZW1lbnRJZFRvQXBwSWQgTWFwcyBtZWFzdXJlbWVudElEIHRvIGFwcElELlxuICogQHBhcmFtIGluc3RhbGxhdGlvbnMgX0ZpcmViYXNlSW5zdGFsbGF0aW9uc0ludGVybmFsIGluc3RhbmNlLlxuICpcbiAqIEByZXR1cm5zIE1lYXN1cmVtZW50IElELlxuICovXG5hc3luYyBmdW5jdGlvbiBfaW5pdGlhbGl6ZUFuYWx5dGljcyhhcHAsIGR5bmFtaWNDb25maWdQcm9taXNlc0xpc3QsIG1lYXN1cmVtZW50SWRUb0FwcElkLCBpbnN0YWxsYXRpb25zLCBndGFnQ29yZSwgZGF0YUxheWVyTmFtZSwgb3B0aW9ucykge1xuICB2YXIgX2E7XG4gIGNvbnN0IGR5bmFtaWNDb25maWdQcm9taXNlID0gZmV0Y2hEeW5hbWljQ29uZmlnV2l0aFJldHJ5KGFwcCk7XG4gIC8vIE9uY2UgZmV0Y2hlZCwgbWFwIG1lYXN1cmVtZW50SWRzIHRvIGFwcElkLCBmb3IgZWFzZSBvZiBsb29rdXAgaW4gd3JhcHBlZCBndGFnIGZ1bmN0aW9uLlxuICBkeW5hbWljQ29uZmlnUHJvbWlzZS50aGVuKGNvbmZpZyA9PiB7XG4gICAgbWVhc3VyZW1lbnRJZFRvQXBwSWRbY29uZmlnLm1lYXN1cmVtZW50SWRdID0gY29uZmlnLmFwcElkO1xuICAgIGlmIChhcHAub3B0aW9ucy5tZWFzdXJlbWVudElkICYmIGNvbmZpZy5tZWFzdXJlbWVudElkICE9PSBhcHAub3B0aW9ucy5tZWFzdXJlbWVudElkKSB7XG4gICAgICBsb2dnZXIud2FybihgVGhlIG1lYXN1cmVtZW50IElEIGluIHRoZSBsb2NhbCBGaXJlYmFzZSBjb25maWcgKCR7YXBwLm9wdGlvbnMubWVhc3VyZW1lbnRJZH0pYCArIGAgZG9lcyBub3QgbWF0Y2ggdGhlIG1lYXN1cmVtZW50IElEIGZldGNoZWQgZnJvbSB0aGUgc2VydmVyICgke2NvbmZpZy5tZWFzdXJlbWVudElkfSkuYCArIGAgVG8gZW5zdXJlIGFuYWx5dGljcyBldmVudHMgYXJlIGFsd2F5cyBzZW50IHRvIHRoZSBjb3JyZWN0IEFuYWx5dGljcyBwcm9wZXJ0eSxgICsgYCB1cGRhdGUgdGhlYCArIGAgbWVhc3VyZW1lbnQgSUQgZmllbGQgaW4gdGhlIGxvY2FsIGNvbmZpZyBvciByZW1vdmUgaXQgZnJvbSB0aGUgbG9jYWwgY29uZmlnLmApO1xuICAgIH1cbiAgfSkuY2F0Y2goZSA9PiBsb2dnZXIuZXJyb3IoZSkpO1xuICAvLyBBZGQgdG8gbGlzdCB0byB0cmFjayBzdGF0ZSBvZiBhbGwgZHluYW1pYyBjb25maWcgcHJvbWlzZXMuXG4gIGR5bmFtaWNDb25maWdQcm9taXNlc0xpc3QucHVzaChkeW5hbWljQ29uZmlnUHJvbWlzZSk7XG4gIGNvbnN0IGZpZFByb21pc2UgPSB2YWxpZGF0ZUluZGV4ZWREQigpLnRoZW4oZW52SXNWYWxpZCA9PiB7XG4gICAgaWYgKGVudklzVmFsaWQpIHtcbiAgICAgIHJldHVybiBpbnN0YWxsYXRpb25zLmdldElkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgW2R5bmFtaWNDb25maWcsIGZpZF0gPSBhd2FpdCBQcm9taXNlLmFsbChbZHluYW1pY0NvbmZpZ1Byb21pc2UsIGZpZFByb21pc2VdKTtcbiAgLy8gRGV0ZWN0IGlmIHVzZXIgaGFzIGFscmVhZHkgcHV0IHRoZSBndGFnIDxzY3JpcHQ+IHRhZyBvbiB0aGlzIHBhZ2Ugd2l0aCB0aGUgcGFzc2VkIGluXG4gIC8vIGRhdGEgbGF5ZXIgbmFtZS5cbiAgaWYgKCFmaW5kR3RhZ1NjcmlwdE9uUGFnZShkYXRhTGF5ZXJOYW1lKSkge1xuICAgIGluc2VydFNjcmlwdFRhZyhkYXRhTGF5ZXJOYW1lLCBkeW5hbWljQ29uZmlnLm1lYXN1cmVtZW50SWQpO1xuICB9XG4gIC8vIERldGVjdHMgaWYgdGhlcmUgYXJlIGNvbnNlbnQgc2V0dGluZ3MgdGhhdCBuZWVkIHRvIGJlIGNvbmZpZ3VyZWQuXG4gIGlmIChkZWZhdWx0Q29uc2VudFNldHRpbmdzRm9ySW5pdCkge1xuICAgIGd0YWdDb3JlKFwiY29uc2VudFwiIC8qIEd0YWdDb21tYW5kLkNPTlNFTlQgKi8sICdkZWZhdWx0JywgZGVmYXVsdENvbnNlbnRTZXR0aW5nc0ZvckluaXQpO1xuICAgIF9zZXRDb25zZW50RGVmYXVsdEZvckluaXQodW5kZWZpbmVkKTtcbiAgfVxuICAvLyBUaGlzIGNvbW1hbmQgaW5pdGlhbGl6ZXMgZ3RhZy5qcyBhbmQgb25seSBuZWVkcyB0byBiZSBjYWxsZWQgb25jZSBmb3IgdGhlIGVudGlyZSB3ZWIgYXBwLFxuICAvLyBidXQgc2luY2UgaXQgaXMgaWRlbXBvdGVudCwgd2UgY2FuIGNhbGwgaXQgbXVsdGlwbGUgdGltZXMuXG4gIC8vIFdlIGtlZXAgaXQgdG9nZXRoZXIgd2l0aCBvdGhlciBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgYmV0dGVyIGNvZGUgc3RydWN0dXJlLlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBndGFnQ29yZSgnanMnLCBuZXcgRGF0ZSgpKTtcbiAgLy8gVXNlciBjb25maWcgYWRkZWQgZmlyc3QuIFdlIGRvbid0IHdhbnQgdXNlcnMgdG8gYWNjaWRlbnRhbGx5IG92ZXJ3cml0ZVxuICAvLyBiYXNlIEZpcmViYXNlIGNvbmZpZyBwcm9wZXJ0aWVzLlxuICBjb25zdCBjb25maWdQcm9wZXJ0aWVzID0gKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmNvbmZpZykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDoge307XG4gIC8vIGd1YXJkIGFnYWluc3QgZGV2ZWxvcGVycyBhY2NpZGVudGFsbHkgc2V0dGluZyBwcm9wZXJ0aWVzIHdpdGggcHJlZml4IGBmaXJlYmFzZV9gXG4gIGNvbmZpZ1Byb3BlcnRpZXNbT1JJR0lOX0tFWV0gPSAnZmlyZWJhc2UnO1xuICBjb25maWdQcm9wZXJ0aWVzLnVwZGF0ZSA9IHRydWU7XG4gIGlmIChmaWQgIT0gbnVsbCkge1xuICAgIGNvbmZpZ1Byb3BlcnRpZXNbR0FfRklEX0tFWV0gPSBmaWQ7XG4gIH1cbiAgLy8gSXQgc2hvdWxkIGJlIHRoZSBmaXJzdCBjb25maWcgY29tbWFuZCBjYWxsZWQgb24gdGhpcyBHQS1JRFxuICAvLyBJbml0aWFsaXplIHRoaXMgR0EtSUQgYW5kIHNldCBGSUQgb24gaXQgdXNpbmcgdGhlIGd0YWcgY29uZmlnIEFQSS5cbiAgLy8gTm90ZTogVGhpcyB3aWxsIHRyaWdnZXIgYSBwYWdlX3ZpZXcgZXZlbnQgdW5sZXNzICdzZW5kX3BhZ2VfdmlldycgaXMgc2V0IHRvIGZhbHNlIGluXG4gIC8vIGBjb25maWdQcm9wZXJ0aWVzYC5cbiAgZ3RhZ0NvcmUoXCJjb25maWdcIiAvKiBHdGFnQ29tbWFuZC5DT05GSUcgKi8sIGR5bmFtaWNDb25maWcubWVhc3VyZW1lbnRJZCwgY29uZmlnUHJvcGVydGllcyk7XG4gIC8vIERldGVjdHMgaWYgdGhlcmUgaXMgZGF0YSB0aGF0IHdpbGwgYmUgc2V0IG9uIGV2ZXJ5IGV2ZW50IGxvZ2dlZCBmcm9tIHRoZSBTREsuXG4gIGlmIChkZWZhdWx0RXZlbnRQYXJhbWV0ZXJzRm9ySW5pdCkge1xuICAgIGd0YWdDb3JlKFwic2V0XCIgLyogR3RhZ0NvbW1hbmQuU0VUICovLCBkZWZhdWx0RXZlbnRQYXJhbWV0ZXJzRm9ySW5pdCk7XG4gICAgX3NldERlZmF1bHRFdmVudFBhcmFtZXRlcnNGb3JJbml0KHVuZGVmaW5lZCk7XG4gIH1cbiAgcmV0dXJuIGR5bmFtaWNDb25maWcubWVhc3VyZW1lbnRJZDtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogQW5hbHl0aWNzIFNlcnZpY2UgY2xhc3MuXG4gKi9cbmNsYXNzIEFuYWx5dGljc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihhcHApIHtcbiAgICB0aGlzLmFwcCA9IGFwcDtcbiAgfVxuICBfZGVsZXRlKCkge1xuICAgIGRlbGV0ZSBpbml0aWFsaXphdGlvblByb21pc2VzTWFwW3RoaXMuYXBwLm9wdGlvbnMuYXBwSWRdO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxufVxuLyoqXG4gKiBNYXBzIGFwcElkIHRvIGZ1bGwgaW5pdGlhbGl6YXRpb24gcHJvbWlzZS4gV3JhcHBlZCBndGFnIGNhbGxzIG11c3Qgd2FpdCBvblxuICogYWxsIG9yIHNvbWUgb2YgdGhlc2UsIGRlcGVuZGluZyBvbiB0aGUgY2FsbCdzIGBzZW5kX3RvYCBwYXJhbSBhbmQgdGhlIHN0YXR1c1xuICogb2YgdGhlIGR5bmFtaWMgY29uZmlnIGZldGNoZXMgKHNlZSBiZWxvdykuXG4gKi9cbmxldCBpbml0aWFsaXphdGlvblByb21pc2VzTWFwID0ge307XG4vKipcbiAqIExpc3Qgb2YgZHluYW1pYyBjb25maWcgZmV0Y2ggcHJvbWlzZXMuIEluIGNlcnRhaW4gY2FzZXMsIHdyYXBwZWQgZ3RhZyBjYWxsc1xuICogd2FpdCBvbiBhbGwgdGhlc2UgdG8gYmUgY29tcGxldGUgaW4gb3JkZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGNhbiBzZWxlY3RpdmVseVxuICogd2FpdCBmb3Igb25seSBjZXJ0YWluIGluaXRpYWxpemF0aW9uIChGSUQpIHByb21pc2VzIG9yIGlmIGl0IG11c3Qgd2FpdCBmb3IgYWxsLlxuICovXG5sZXQgZHluYW1pY0NvbmZpZ1Byb21pc2VzTGlzdCA9IFtdO1xuLyoqXG4gKiBNYXBzIGZldGNoZWQgbWVhc3VyZW1lbnRJZHMgdG8gYXBwSWQuIFBvcHVsYXRlZCB3aGVuIHRoZSBhcHAncyBkeW5hbWljIGNvbmZpZ1xuICogZmV0Y2ggY29tcGxldGVzLiBJZiBhbHJlYWR5IHBvcHVsYXRlZCwgZ3RhZyBjb25maWcgY2FsbHMgY2FuIHVzZSB0aGlzIHRvXG4gKiBzZWxlY3RpdmVseSB3YWl0IGZvciBvbmx5IHRoaXMgYXBwJ3MgaW5pdGlhbGl6YXRpb24gcHJvbWlzZSAoRklEKSBpbnN0ZWFkIG9mIGFsbFxuICogaW5pdGlhbGl6YXRpb24gcHJvbWlzZXMuXG4gKi9cbmNvbnN0IG1lYXN1cmVtZW50SWRUb0FwcElkID0ge307XG4vKipcbiAqIE5hbWUgZm9yIHdpbmRvdyBnbG9iYWwgZGF0YSBsYXllciBhcnJheSB1c2VkIGJ5IEdBOiBkZWZhdWx0cyB0byAnZGF0YUxheWVyJy5cbiAqL1xubGV0IGRhdGFMYXllck5hbWUgPSAnZGF0YUxheWVyJztcbi8qKlxuICogTmFtZSBmb3Igd2luZG93IGdsb2JhbCBndGFnIGZ1bmN0aW9uIHVzZWQgYnkgR0E6IGRlZmF1bHRzIHRvICdndGFnJy5cbiAqL1xubGV0IGd0YWdOYW1lID0gJ2d0YWcnO1xuLyoqXG4gKiBSZXByb2R1Y3Rpb24gb2Ygc3RhbmRhcmQgZ3RhZyBmdW5jdGlvbiBvciByZWZlcmVuY2UgdG8gZXhpc3RpbmdcbiAqIGd0YWcgZnVuY3Rpb24gb24gd2luZG93IG9iamVjdC5cbiAqL1xubGV0IGd0YWdDb3JlRnVuY3Rpb247XG4vKipcbiAqIFdyYXBwZXIgYXJvdW5kIGd0YWcgZnVuY3Rpb24gdGhhdCBlbnN1cmVzIEZJRCBpcyBzZW50IHdpdGggYWxsXG4gKiByZWxldmFudCBldmVudCBhbmQgY29uZmlnIGNhbGxzLlxuICovXG5sZXQgd3JhcHBlZEd0YWdGdW5jdGlvbjtcbi8qKlxuICogRmxhZyB0byBlbnN1cmUgcGFnZSBpbml0aWFsaXphdGlvbiBzdGVwcyAoY3JlYXRpb24gb3Igd3JhcHBpbmcgb2ZcbiAqIGRhdGFMYXllciBhbmQgZ3RhZyBzY3JpcHQpIGFyZSBvbmx5IHJ1biBvbmNlIHBlciBwYWdlIGxvYWQuXG4gKi9cbmxldCBnbG9iYWxJbml0RG9uZSA9IGZhbHNlO1xuLyoqXG4gKiBDb25maWd1cmVzIEZpcmViYXNlIEFuYWx5dGljcyB0byB1c2UgY3VzdG9tIGBndGFnYCBvciBgZGF0YUxheWVyYCBuYW1lcy5cbiAqIEludGVuZGVkIHRvIGJlIHVzZWQgaWYgYGd0YWcuanNgIHNjcmlwdCBoYXMgYmVlbiBpbnN0YWxsZWQgb25cbiAqIHRoaXMgcGFnZSBpbmRlcGVuZGVudGx5IG9mIEZpcmViYXNlIEFuYWx5dGljcywgYW5kIGlzIHVzaW5nIG5vbi1kZWZhdWx0XG4gKiBuYW1lcyBmb3IgZWl0aGVyIHRoZSBgZ3RhZ2AgZnVuY3Rpb24gb3IgZm9yIGBkYXRhTGF5ZXJgLlxuICogTXVzdCBiZSBjYWxsZWQgYmVmb3JlIGNhbGxpbmcgYGdldEFuYWx5dGljcygpYCBvciBpdCB3b24ndFxuICogaGF2ZSBhbnkgZWZmZWN0LlxuICpcbiAqIEBwdWJsaWNcbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEN1c3RvbSBndGFnIGFuZCBkYXRhTGF5ZXIgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIHNldHRpbmdzKG9wdGlvbnMpIHtcbiAgaWYgKGdsb2JhbEluaXREb25lKSB7XG4gICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJhbHJlYWR5LWluaXRpYWxpemVkXCIgLyogQW5hbHl0aWNzRXJyb3IuQUxSRUFEWV9JTklUSUFMSVpFRCAqLyk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuZGF0YUxheWVyTmFtZSkge1xuICAgIGRhdGFMYXllck5hbWUgPSBvcHRpb25zLmRhdGFMYXllck5hbWU7XG4gIH1cbiAgaWYgKG9wdGlvbnMuZ3RhZ05hbWUpIHtcbiAgICBndGFnTmFtZSA9IG9wdGlvbnMuZ3RhZ05hbWU7XG4gIH1cbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIG5vIGVudmlyb25tZW50IG1pc21hdGNoIGlzIGZvdW5kLlxuICogSWYgZW52aXJvbm1lbnQgbWlzbWF0Y2hlcyBhcmUgZm91bmQsIHRocm93cyBhbiBJTlZBTElEX0FOQUxZVElDU19DT05URVhUXG4gKiBlcnJvciB0aGF0IGFsc28gbGlzdHMgZGV0YWlscyBmb3IgZWFjaCBtaXNtYXRjaCBmb3VuZC5cbiAqL1xuZnVuY3Rpb24gd2Fybk9uQnJvd3NlckNvbnRleHRNaXNtYXRjaCgpIHtcbiAgY29uc3QgbWlzbWF0Y2hlZEVudk1lc3NhZ2VzID0gW107XG4gIGlmIChpc0Jyb3dzZXJFeHRlbnNpb24oKSkge1xuICAgIG1pc21hdGNoZWRFbnZNZXNzYWdlcy5wdXNoKCdUaGlzIGlzIGEgYnJvd3NlciBleHRlbnNpb24gZW52aXJvbm1lbnQuJyk7XG4gIH1cbiAgaWYgKCFhcmVDb29raWVzRW5hYmxlZCgpKSB7XG4gICAgbWlzbWF0Y2hlZEVudk1lc3NhZ2VzLnB1c2goJ0Nvb2tpZXMgYXJlIG5vdCBhdmFpbGFibGUuJyk7XG4gIH1cbiAgaWYgKG1pc21hdGNoZWRFbnZNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgZGV0YWlscyA9IG1pc21hdGNoZWRFbnZNZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiBgKCR7aW5kZXggKyAxfSkgJHttZXNzYWdlfWApLmpvaW4oJyAnKTtcbiAgICBjb25zdCBlcnIgPSBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImludmFsaWQtYW5hbHl0aWNzLWNvbnRleHRcIiAvKiBBbmFseXRpY3NFcnJvci5JTlZBTElEX0FOQUxZVElDU19DT05URVhUICovLCB7XG4gICAgICBlcnJvckluZm86IGRldGFpbHNcbiAgICB9KTtcbiAgICBsb2dnZXIud2FybihlcnIubWVzc2FnZSk7XG4gIH1cbn1cbi8qKlxuICogQW5hbHl0aWNzIGluc3RhbmNlIGZhY3RvcnkuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gZmFjdG9yeShhcHAsIGluc3RhbGxhdGlvbnMsIG9wdGlvbnMpIHtcbiAgd2Fybk9uQnJvd3NlckNvbnRleHRNaXNtYXRjaCgpO1xuICBjb25zdCBhcHBJZCA9IGFwcC5vcHRpb25zLmFwcElkO1xuICBpZiAoIWFwcElkKSB7XG4gICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJuby1hcHAtaWRcIiAvKiBBbmFseXRpY3NFcnJvci5OT19BUFBfSUQgKi8pO1xuICB9XG4gIGlmICghYXBwLm9wdGlvbnMuYXBpS2V5KSB7XG4gICAgaWYgKGFwcC5vcHRpb25zLm1lYXN1cmVtZW50SWQpIHtcbiAgICAgIGxvZ2dlci53YXJuKGBUaGUgXCJhcGlLZXlcIiBmaWVsZCBpcyBlbXB0eSBpbiB0aGUgbG9jYWwgRmlyZWJhc2UgY29uZmlnLiBUaGlzIGlzIG5lZWRlZCB0byBmZXRjaCB0aGUgbGF0ZXN0YCArIGAgbWVhc3VyZW1lbnQgSUQgZm9yIHRoaXMgRmlyZWJhc2UgYXBwLiBGYWxsaW5nIGJhY2sgdG8gdGhlIG1lYXN1cmVtZW50IElEICR7YXBwLm9wdGlvbnMubWVhc3VyZW1lbnRJZH1gICsgYCBwcm92aWRlZCBpbiB0aGUgXCJtZWFzdXJlbWVudElkXCIgZmllbGQgaW4gdGhlIGxvY2FsIEZpcmViYXNlIGNvbmZpZy5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJuby1hcGkta2V5XCIgLyogQW5hbHl0aWNzRXJyb3IuTk9fQVBJX0tFWSAqLyk7XG4gICAgfVxuICB9XG4gIGlmIChpbml0aWFsaXphdGlvblByb21pc2VzTWFwW2FwcElkXSAhPSBudWxsKSB7XG4gICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJhbHJlYWR5LWV4aXN0c1wiIC8qIEFuYWx5dGljc0Vycm9yLkFMUkVBRFlfRVhJU1RTICovLCB7XG4gICAgICBpZDogYXBwSWRcbiAgICB9KTtcbiAgfVxuICBpZiAoIWdsb2JhbEluaXREb25lKSB7XG4gICAgLy8gU3RlcHMgaGVyZSBzaG91bGQgb25seSBiZSBkb25lIG9uY2UgcGVyIHBhZ2U6IGNyZWF0aW9uIG9yIHdyYXBwaW5nXG4gICAgLy8gb2YgZGF0YUxheWVyIGFuZCBnbG9iYWwgZ3RhZyBmdW5jdGlvbi5cbiAgICBnZXRPckNyZWF0ZURhdGFMYXllcihkYXRhTGF5ZXJOYW1lKTtcbiAgICBjb25zdCB7XG4gICAgICB3cmFwcGVkR3RhZyxcbiAgICAgIGd0YWdDb3JlXG4gICAgfSA9IHdyYXBPckNyZWF0ZUd0YWcoaW5pdGlhbGl6YXRpb25Qcm9taXNlc01hcCwgZHluYW1pY0NvbmZpZ1Byb21pc2VzTGlzdCwgbWVhc3VyZW1lbnRJZFRvQXBwSWQsIGRhdGFMYXllck5hbWUsIGd0YWdOYW1lKTtcbiAgICB3cmFwcGVkR3RhZ0Z1bmN0aW9uID0gd3JhcHBlZEd0YWc7XG4gICAgZ3RhZ0NvcmVGdW5jdGlvbiA9IGd0YWdDb3JlO1xuICAgIGdsb2JhbEluaXREb25lID0gdHJ1ZTtcbiAgfVxuICAvLyBBc3luYyBidXQgbm9uLWJsb2NraW5nLlxuICAvLyBUaGlzIG1hcCByZWZsZWN0cyB0aGUgY29tcGxldGlvbiBzdGF0ZSBvZiBhbGwgcHJvbWlzZXMgZm9yIGVhY2ggYXBwSWQuXG4gIGluaXRpYWxpemF0aW9uUHJvbWlzZXNNYXBbYXBwSWRdID0gX2luaXRpYWxpemVBbmFseXRpY3MoYXBwLCBkeW5hbWljQ29uZmlnUHJvbWlzZXNMaXN0LCBtZWFzdXJlbWVudElkVG9BcHBJZCwgaW5zdGFsbGF0aW9ucywgZ3RhZ0NvcmVGdW5jdGlvbiwgZGF0YUxheWVyTmFtZSwgb3B0aW9ucyk7XG4gIGNvbnN0IGFuYWx5dGljc0luc3RhbmNlID0gbmV3IEFuYWx5dGljc1NlcnZpY2UoYXBwKTtcbiAgcmV0dXJuIGFuYWx5dGljc0luc3RhbmNlO1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG4vKipcbiAqIFJldHVybnMgYW4ge0BsaW5rIEFuYWx5dGljc30gaW5zdGFuY2UgZm9yIHRoZSBnaXZlbiBhcHAuXG4gKlxuICogQHB1YmxpY1xuICpcbiAqIEBwYXJhbSBhcHAgLSBUaGUge0BsaW5rIEBmaXJlYmFzZS9hcHAjRmlyZWJhc2VBcHB9IHRvIHVzZS5cbiAqL1xuZnVuY3Rpb24gZ2V0QW5hbHl0aWNzKGFwcCA9IGdldEFwcCgpKSB7XG4gIGFwcCA9IGdldE1vZHVsYXJJbnN0YW5jZShhcHApO1xuICAvLyBEZXBlbmRlbmNpZXNcbiAgY29uc3QgYW5hbHl0aWNzUHJvdmlkZXIgPSBfZ2V0UHJvdmlkZXIoYXBwLCBBTkFMWVRJQ1NfVFlQRSk7XG4gIGlmIChhbmFseXRpY3NQcm92aWRlci5pc0luaXRpYWxpemVkKCkpIHtcbiAgICByZXR1cm4gYW5hbHl0aWNzUHJvdmlkZXIuZ2V0SW1tZWRpYXRlKCk7XG4gIH1cbiAgcmV0dXJuIGluaXRpYWxpemVBbmFseXRpY3MoYXBwKTtcbn1cbi8qKlxuICogUmV0dXJucyBhbiB7QGxpbmsgQW5hbHl0aWNzfSBpbnN0YW5jZSBmb3IgdGhlIGdpdmVuIGFwcC5cbiAqXG4gKiBAcHVibGljXG4gKlxuICogQHBhcmFtIGFwcCAtIFRoZSB7QGxpbmsgQGZpcmViYXNlL2FwcCNGaXJlYmFzZUFwcH0gdG8gdXNlLlxuICovXG5mdW5jdGlvbiBpbml0aWFsaXplQW5hbHl0aWNzKGFwcCwgb3B0aW9ucyA9IHt9KSB7XG4gIC8vIERlcGVuZGVuY2llc1xuICBjb25zdCBhbmFseXRpY3NQcm92aWRlciA9IF9nZXRQcm92aWRlcihhcHAsIEFOQUxZVElDU19UWVBFKTtcbiAgaWYgKGFuYWx5dGljc1Byb3ZpZGVyLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgIGNvbnN0IGV4aXN0aW5nSW5zdGFuY2UgPSBhbmFseXRpY3NQcm92aWRlci5nZXRJbW1lZGlhdGUoKTtcbiAgICBpZiAoZGVlcEVxdWFsKG9wdGlvbnMsIGFuYWx5dGljc1Byb3ZpZGVyLmdldE9wdGlvbnMoKSkpIHtcbiAgICAgIHJldHVybiBleGlzdGluZ0luc3RhbmNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImFscmVhZHktaW5pdGlhbGl6ZWRcIiAvKiBBbmFseXRpY3NFcnJvci5BTFJFQURZX0lOSVRJQUxJWkVEICovKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgYW5hbHl0aWNzSW5zdGFuY2UgPSBhbmFseXRpY3NQcm92aWRlci5pbml0aWFsaXplKHtcbiAgICBvcHRpb25zXG4gIH0pO1xuICByZXR1cm4gYW5hbHl0aWNzSW5zdGFuY2U7XG59XG4vKipcbiAqIFRoaXMgaXMgYSBwdWJsaWMgc3RhdGljIG1ldGhvZCBwcm92aWRlZCB0byB1c2VycyB0aGF0IHdyYXBzIGZvdXIgZGlmZmVyZW50IGNoZWNrczpcbiAqXG4gKiAxLiBDaGVjayBpZiBpdCdzIG5vdCBhIGJyb3dzZXIgZXh0ZW5zaW9uIGVudmlyb25tZW50LlxuICogMi4gQ2hlY2sgaWYgY29va2llcyBhcmUgZW5hYmxlZCBpbiBjdXJyZW50IGJyb3dzZXIuXG4gKiAzLiBDaGVjayBpZiBJbmRleGVkREIgaXMgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyIGVudmlyb25tZW50LlxuICogNC4gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgYnJvd3NlciBjb250ZXh0IGlzIHZhbGlkIGZvciB1c2luZyBgSW5kZXhlZERCLm9wZW4oKWAuXG4gKlxuICogQHB1YmxpY1xuICpcbiAqL1xuYXN5bmMgZnVuY3Rpb24gaXNTdXBwb3J0ZWQoKSB7XG4gIGlmIChpc0Jyb3dzZXJFeHRlbnNpb24oKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoIWFyZUNvb2tpZXNFbmFibGVkKCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKCFpc0luZGV4ZWREQkF2YWlsYWJsZSgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgaXNEQk9wZW5hYmxlID0gYXdhaXQgdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSgpO1xuICAgIHJldHVybiBpc0RCT3BlbmFibGU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4vKipcbiAqIFVzZSBndGFnIGBjb25maWdgIGNvbW1hbmQgdG8gc2V0IGBzY3JlZW5fbmFtZWAuXG4gKlxuICogQHB1YmxpY1xuICpcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgbG9nRXZlbnR9IHdpdGggYGV2ZW50TmFtZWAgYXMgJ3NjcmVlbl92aWV3JyBhbmQgYWRkIHJlbGV2YW50IGBldmVudFBhcmFtc2AuXG4gKiBTZWUge0BsaW5rIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2FuYWx5dGljcy9zY3JlZW52aWV3cyB8IFRyYWNrIFNjcmVlbnZpZXdzfS5cbiAqXG4gKiBAcGFyYW0gYW5hbHl0aWNzSW5zdGFuY2UgLSBUaGUge0BsaW5rIEFuYWx5dGljc30gaW5zdGFuY2UuXG4gKiBAcGFyYW0gc2NyZWVuTmFtZSAtIFNjcmVlbiBuYW1lIHRvIHNldC5cbiAqL1xuZnVuY3Rpb24gc2V0Q3VycmVudFNjcmVlbihhbmFseXRpY3NJbnN0YW5jZSwgc2NyZWVuTmFtZSwgb3B0aW9ucykge1xuICBhbmFseXRpY3NJbnN0YW5jZSA9IGdldE1vZHVsYXJJbnN0YW5jZShhbmFseXRpY3NJbnN0YW5jZSk7XG4gIHNldEN1cnJlbnRTY3JlZW4kMSh3cmFwcGVkR3RhZ0Z1bmN0aW9uLCBpbml0aWFsaXphdGlvblByb21pc2VzTWFwW2FuYWx5dGljc0luc3RhbmNlLmFwcC5vcHRpb25zLmFwcElkXSwgc2NyZWVuTmFtZSwgb3B0aW9ucykuY2F0Y2goZSA9PiBsb2dnZXIuZXJyb3IoZSkpO1xufVxuLyoqXG4gKiBSZXRyaWV2ZXMgYSB1bmlxdWUgR29vZ2xlIEFuYWx5dGljcyBpZGVudGlmaWVyIGZvciB0aGUgd2ViIGNsaWVudC5cbiAqIFNlZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2dhNC9yZWZlcmVuY2UvY29uZmlnI2NsaWVudF9pZCB8IGNsaWVudF9pZH0uXG4gKlxuICogQHB1YmxpY1xuICpcbiAqIEBwYXJhbSBhcHAgLSBUaGUge0BsaW5rIEBmaXJlYmFzZS9hcHAjRmlyZWJhc2VBcHB9IHRvIHVzZS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0R29vZ2xlQW5hbHl0aWNzQ2xpZW50SWQoYW5hbHl0aWNzSW5zdGFuY2UpIHtcbiAgYW5hbHl0aWNzSW5zdGFuY2UgPSBnZXRNb2R1bGFySW5zdGFuY2UoYW5hbHl0aWNzSW5zdGFuY2UpO1xuICByZXR1cm4gaW50ZXJuYWxHZXRHb29nbGVBbmFseXRpY3NDbGllbnRJZCh3cmFwcGVkR3RhZ0Z1bmN0aW9uLCBpbml0aWFsaXphdGlvblByb21pc2VzTWFwW2FuYWx5dGljc0luc3RhbmNlLmFwcC5vcHRpb25zLmFwcElkXSk7XG59XG4vKipcbiAqIFVzZSBndGFnIGBjb25maWdgIGNvbW1hbmQgdG8gc2V0IGB1c2VyX2lkYC5cbiAqXG4gKiBAcHVibGljXG4gKlxuICogQHBhcmFtIGFuYWx5dGljc0luc3RhbmNlIC0gVGhlIHtAbGluayBBbmFseXRpY3N9IGluc3RhbmNlLlxuICogQHBhcmFtIGlkIC0gVXNlciBJRCB0byBzZXQuXG4gKi9cbmZ1bmN0aW9uIHNldFVzZXJJZChhbmFseXRpY3NJbnN0YW5jZSwgaWQsIG9wdGlvbnMpIHtcbiAgYW5hbHl0aWNzSW5zdGFuY2UgPSBnZXRNb2R1bGFySW5zdGFuY2UoYW5hbHl0aWNzSW5zdGFuY2UpO1xuICBzZXRVc2VySWQkMSh3cmFwcGVkR3RhZ0Z1bmN0aW9uLCBpbml0aWFsaXphdGlvblByb21pc2VzTWFwW2FuYWx5dGljc0luc3RhbmNlLmFwcC5vcHRpb25zLmFwcElkXSwgaWQsIG9wdGlvbnMpLmNhdGNoKGUgPT4gbG9nZ2VyLmVycm9yKGUpKTtcbn1cbi8qKlxuICogVXNlIGd0YWcgYGNvbmZpZ2AgY29tbWFuZCB0byBzZXQgYWxsIHBhcmFtcyBzcGVjaWZpZWQuXG4gKlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBzZXRVc2VyUHJvcGVydGllcyhhbmFseXRpY3NJbnN0YW5jZSwgcHJvcGVydGllcywgb3B0aW9ucykge1xuICBhbmFseXRpY3NJbnN0YW5jZSA9IGdldE1vZHVsYXJJbnN0YW5jZShhbmFseXRpY3NJbnN0YW5jZSk7XG4gIHNldFVzZXJQcm9wZXJ0aWVzJDEod3JhcHBlZEd0YWdGdW5jdGlvbiwgaW5pdGlhbGl6YXRpb25Qcm9taXNlc01hcFthbmFseXRpY3NJbnN0YW5jZS5hcHAub3B0aW9ucy5hcHBJZF0sIHByb3BlcnRpZXMsIG9wdGlvbnMpLmNhdGNoKGUgPT4gbG9nZ2VyLmVycm9yKGUpKTtcbn1cbi8qKlxuICogU2V0cyB3aGV0aGVyIEdvb2dsZSBBbmFseXRpY3MgY29sbGVjdGlvbiBpcyBlbmFibGVkIGZvciB0aGlzIGFwcCBvbiB0aGlzIGRldmljZS5cbiAqIFNldHMgZ2xvYmFsIGB3aW5kb3dbJ2dhLWRpc2FibGUtYW5hbHl0aWNzSWQnXSA9IHRydWU7YFxuICpcbiAqIEBwdWJsaWNcbiAqXG4gKiBAcGFyYW0gYW5hbHl0aWNzSW5zdGFuY2UgLSBUaGUge0BsaW5rIEFuYWx5dGljc30gaW5zdGFuY2UuXG4gKiBAcGFyYW0gZW5hYmxlZCAtIElmIHRydWUsIGVuYWJsZXMgY29sbGVjdGlvbiwgaWYgZmFsc2UsIGRpc2FibGVzIGl0LlxuICovXG5mdW5jdGlvbiBzZXRBbmFseXRpY3NDb2xsZWN0aW9uRW5hYmxlZChhbmFseXRpY3NJbnN0YW5jZSwgZW5hYmxlZCkge1xuICBhbmFseXRpY3NJbnN0YW5jZSA9IGdldE1vZHVsYXJJbnN0YW5jZShhbmFseXRpY3NJbnN0YW5jZSk7XG4gIHNldEFuYWx5dGljc0NvbGxlY3Rpb25FbmFibGVkJDEoaW5pdGlhbGl6YXRpb25Qcm9taXNlc01hcFthbmFseXRpY3NJbnN0YW5jZS5hcHAub3B0aW9ucy5hcHBJZF0sIGVuYWJsZWQpLmNhdGNoKGUgPT4gbG9nZ2VyLmVycm9yKGUpKTtcbn1cbi8qKlxuICogQWRkcyBkYXRhIHRoYXQgd2lsbCBiZSBzZXQgb24gZXZlcnkgZXZlbnQgbG9nZ2VkIGZyb20gdGhlIFNESywgaW5jbHVkaW5nIGF1dG9tYXRpYyBvbmVzLlxuICogV2l0aCBndGFnJ3MgXCJzZXRcIiBjb21tYW5kLCB0aGUgdmFsdWVzIHBhc3NlZCBwZXJzaXN0IG9uIHRoZSBjdXJyZW50IHBhZ2UgYW5kIGFyZSBwYXNzZWQgd2l0aFxuICogYWxsIHN1YnNlcXVlbnQgZXZlbnRzLlxuICogQHB1YmxpY1xuICogQHBhcmFtIGN1c3RvbVBhcmFtcyAtIEFueSBjdXN0b20gcGFyYW1zIHRoZSB1c2VyIG1heSBwYXNzIHRvIGd0YWcuanMuXG4gKi9cbmZ1bmN0aW9uIHNldERlZmF1bHRFdmVudFBhcmFtZXRlcnMoY3VzdG9tUGFyYW1zKSB7XG4gIC8vIENoZWNrIGlmIHJlZmVyZW5jZSB0byBleGlzdGluZyBndGFnIGZ1bmN0aW9uIG9uIHdpbmRvdyBvYmplY3QgZXhpc3RzXG4gIGlmICh3cmFwcGVkR3RhZ0Z1bmN0aW9uKSB7XG4gICAgd3JhcHBlZEd0YWdGdW5jdGlvbihcInNldFwiIC8qIEd0YWdDb21tYW5kLlNFVCAqLywgY3VzdG9tUGFyYW1zKTtcbiAgfSBlbHNlIHtcbiAgICBfc2V0RGVmYXVsdEV2ZW50UGFyYW1ldGVyc0ZvckluaXQoY3VzdG9tUGFyYW1zKTtcbiAgfVxufVxuLyoqXG4gKiBTZW5kcyBhIEdvb2dsZSBBbmFseXRpY3MgZXZlbnQgd2l0aCBnaXZlbiBgZXZlbnRQYXJhbXNgLiBUaGlzIG1ldGhvZFxuICogYXV0b21hdGljYWxseSBhc3NvY2lhdGVzIHRoaXMgbG9nZ2VkIGV2ZW50IHdpdGggdGhpcyBGaXJlYmFzZSB3ZWJcbiAqIGFwcCBpbnN0YW5jZSBvbiB0aGlzIGRldmljZS5cbiAqIExpc3Qgb2Ygb2ZmaWNpYWwgZXZlbnQgcGFyYW1ldGVycyBjYW4gYmUgZm91bmQgaW4gdGhlIGd0YWcuanNcbiAqIHJlZmVyZW5jZSBkb2N1bWVudGF0aW9uOlxuICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2d0YWdqcy9yZWZlcmVuY2UvZ2E0LWV2ZW50c1xuICogfCB0aGUgR0E0IHJlZmVyZW5jZSBkb2N1bWVudGF0aW9ufS5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGxvZ0V2ZW50KGFuYWx5dGljc0luc3RhbmNlLCBldmVudE5hbWUsIGV2ZW50UGFyYW1zLCBvcHRpb25zKSB7XG4gIGFuYWx5dGljc0luc3RhbmNlID0gZ2V0TW9kdWxhckluc3RhbmNlKGFuYWx5dGljc0luc3RhbmNlKTtcbiAgbG9nRXZlbnQkMSh3cmFwcGVkR3RhZ0Z1bmN0aW9uLCBpbml0aWFsaXphdGlvblByb21pc2VzTWFwW2FuYWx5dGljc0luc3RhbmNlLmFwcC5vcHRpb25zLmFwcElkXSwgZXZlbnROYW1lLCBldmVudFBhcmFtcywgb3B0aW9ucykuY2F0Y2goZSA9PiBsb2dnZXIuZXJyb3IoZSkpO1xufVxuLyoqXG4gKiBTZXRzIHRoZSBhcHBsaWNhYmxlIGVuZCB1c2VyIGNvbnNlbnQgc3RhdGUgZm9yIHRoaXMgd2ViIGFwcCBhY3Jvc3MgYWxsIGd0YWcgcmVmZXJlbmNlcyBvbmNlXG4gKiBGaXJlYmFzZSBBbmFseXRpY3MgaXMgaW5pdGlhbGl6ZWQuXG4gKlxuICogVXNlIHRoZSB7QGxpbmsgQ29uc2VudFNldHRpbmdzfSB0byBzcGVjaWZ5IGluZGl2aWR1YWwgY29uc2VudCB0eXBlIHZhbHVlcy4gQnkgZGVmYXVsdCBjb25zZW50XG4gKiB0eXBlcyBhcmUgc2V0IHRvIFwiZ3JhbnRlZFwiLlxuICogQHB1YmxpY1xuICogQHBhcmFtIGNvbnNlbnRTZXR0aW5ncyAtIE1hcHMgdGhlIGFwcGxpY2FibGUgZW5kIHVzZXIgY29uc2VudCBzdGF0ZSBmb3IgZ3RhZy5qcy5cbiAqL1xuZnVuY3Rpb24gc2V0Q29uc2VudChjb25zZW50U2V0dGluZ3MpIHtcbiAgLy8gQ2hlY2sgaWYgcmVmZXJlbmNlIHRvIGV4aXN0aW5nIGd0YWcgZnVuY3Rpb24gb24gd2luZG93IG9iamVjdCBleGlzdHNcbiAgaWYgKHdyYXBwZWRHdGFnRnVuY3Rpb24pIHtcbiAgICB3cmFwcGVkR3RhZ0Z1bmN0aW9uKFwiY29uc2VudFwiIC8qIEd0YWdDb21tYW5kLkNPTlNFTlQgKi8sICd1cGRhdGUnLCBjb25zZW50U2V0dGluZ3MpO1xuICB9IGVsc2Uge1xuICAgIF9zZXRDb25zZW50RGVmYXVsdEZvckluaXQoY29uc2VudFNldHRpbmdzKTtcbiAgfVxufVxuY29uc3QgbmFtZSA9IFwiQGZpcmViYXNlL2FuYWx5dGljc1wiO1xuY29uc3QgdmVyc2lvbiA9IFwiMC4xMC4xMlwiO1xuXG4vKipcbiAqIFRoZSBGaXJlYmFzZSBBbmFseXRpY3MgV2ViIFNESy5cbiAqIFRoaXMgU0RLIGRvZXMgbm90IHdvcmsgaW4gYSBOb2RlLmpzIGVudmlyb25tZW50LlxuICpcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICovXG5mdW5jdGlvbiByZWdpc3RlckFuYWx5dGljcygpIHtcbiAgX3JlZ2lzdGVyQ29tcG9uZW50KG5ldyBDb21wb25lbnQoQU5BTFlUSUNTX1RZUEUsIChjb250YWluZXIsIHtcbiAgICBvcHRpb25zOiBhbmFseXRpY3NPcHRpb25zXG4gIH0pID0+IHtcbiAgICAvLyBnZXRJbW1lZGlhdGUgZm9yIEZpcmViYXNlQXBwIHdpbGwgYWx3YXlzIHN1Y2NlZWRcbiAgICBjb25zdCBhcHAgPSBjb250YWluZXIuZ2V0UHJvdmlkZXIoJ2FwcCcpLmdldEltbWVkaWF0ZSgpO1xuICAgIGNvbnN0IGluc3RhbGxhdGlvbnMgPSBjb250YWluZXIuZ2V0UHJvdmlkZXIoJ2luc3RhbGxhdGlvbnMtaW50ZXJuYWwnKS5nZXRJbW1lZGlhdGUoKTtcbiAgICByZXR1cm4gZmFjdG9yeShhcHAsIGluc3RhbGxhdGlvbnMsIGFuYWx5dGljc09wdGlvbnMpO1xuICB9LCBcIlBVQkxJQ1wiIC8qIENvbXBvbmVudFR5cGUuUFVCTElDICovKSk7XG4gIF9yZWdpc3RlckNvbXBvbmVudChuZXcgQ29tcG9uZW50KCdhbmFseXRpY3MtaW50ZXJuYWwnLCBpbnRlcm5hbEZhY3RvcnksIFwiUFJJVkFURVwiIC8qIENvbXBvbmVudFR5cGUuUFJJVkFURSAqLykpO1xuICByZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbik7XG4gIC8vIEJVSUxEX1RBUkdFVCB3aWxsIGJlIHJlcGxhY2VkIGJ5IHZhbHVlcyBsaWtlIGVzbTIwMTcsIGNqczIwMTcsIGV0YyBkdXJpbmcgdGhlIGNvbXBpbGF0aW9uXG4gIHJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uLCAnZXNtMjAxNycpO1xuICBmdW5jdGlvbiBpbnRlcm5hbEZhY3RvcnkoY29udGFpbmVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFuYWx5dGljcyA9IGNvbnRhaW5lci5nZXRQcm92aWRlcihBTkFMWVRJQ1NfVFlQRSkuZ2V0SW1tZWRpYXRlKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2dFdmVudDogKGV2ZW50TmFtZSwgZXZlbnRQYXJhbXMsIG9wdGlvbnMpID0+IGxvZ0V2ZW50KGFuYWx5dGljcywgZXZlbnROYW1lLCBldmVudFBhcmFtcywgb3B0aW9ucylcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJpbnRlcm9wLWNvbXBvbmVudC1yZWctZmFpbGVkXCIgLyogQW5hbHl0aWNzRXJyb3IuSU5URVJPUF9DT01QT05FTlRfUkVHX0ZBSUxFRCAqLywge1xuICAgICAgICByZWFzb246IGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxucmVnaXN0ZXJBbmFseXRpY3MoKTtcbmV4cG9ydCB7IGdldEFuYWx5dGljcywgZ2V0R29vZ2xlQW5hbHl0aWNzQ2xpZW50SWQsIGluaXRpYWxpemVBbmFseXRpY3MsIGlzU3VwcG9ydGVkLCBsb2dFdmVudCwgc2V0QW5hbHl0aWNzQ29sbGVjdGlvbkVuYWJsZWQsIHNldENvbnNlbnQsIHNldEN1cnJlbnRTY3JlZW4sIHNldERlZmF1bHRFdmVudFBhcmFtZXRlcnMsIHNldFVzZXJJZCwgc2V0VXNlclByb3BlcnRpZXMsIHNldHRpbmdzIH07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsSUFBTSxXQUFXLElBQUksQ0FBQUEsVUFBUSxDQUFDLENBQUNBLEtBQUk7QUFDbkMsSUFBTSxZQUFOLE1BQU0sV0FBVTtBQUFBLEVBQ2Q7QUFBQSxFQUNBO0FBQUEsRUFDQSxZQUFZLFFBQVEsTUFBTTtBQUN4QixTQUFLLFNBQVM7QUFDZCxTQUFLLE9BQU87QUFBQSxFQUNkO0FBQUEsRUFDQSxjQUFjLENBQUMsTUFBTSxVQUFVO0FBQzdCLFVBQU0sa0JBQWtCLEtBQUssS0FBSyxrQkFBa0IsTUFBTTtBQUMxRCxXQUFPLEtBQUssS0FBSyxJQUFJLEVBQUUsS0FBSyxLQUFLLENBQUMsR0FBRyxnQkFBZ0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxTQUFPO0FBQzVFLFVBQUksT0FBTyxRQUFRLFdBQVc7QUFDNUIsZUFBTztBQUFBLE1BQ1QsV0FBVyxNQUFNLFFBQVEsR0FBRyxHQUFHO0FBQzdCLGVBQU8sS0FBSyxPQUFPLGNBQWMsR0FBRztBQUFBLE1BQ3RDLE9BQU87QUFFTCxlQUFPLEtBQUssT0FBTyxTQUFTLEdBQUc7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LFNBQVM7QUFDcEUsc0JBQW9CLG1CQUFtQixpQkFBaUI7QUFDeEQsYUFBVyxxQkFBcUIsMEJBQTBCLGtCQUFrQixJQUFJLFFBQVEsS0FBSyxHQUFHLFdBQVcsYUFBYSxPQUFPLEVBQUUsTUFBTSxPQUFLLE9BQU8sTUFBTSxDQUFDLENBQUM7QUFDN0o7QUFVQSxTQUFTLFdBQVcsaUJBQWlCO0FBRW5DLE1BQUkscUJBQXFCO0FBQ3ZCLHdCQUFvQixXQUFxQyxVQUFVLGVBQWU7QUFBQSxFQUNwRixPQUFPO0FBQ0wsOEJBQTBCLGVBQWU7QUFBQSxFQUMzQztBQUNGO0FBQ0EsSUFBTU0sUUFBTztBQUNiLElBQU1DLFdBQVU7QUFRaEIsU0FBUyxvQkFBb0I7QUFDM0IscUJBQW1CLElBQUk7QUFBQSxJQUFVO0FBQUEsSUFBZ0IsQ0FBQyxXQUFXO0FBQUEsTUFDM0QsU0FBUztBQUFBLElBQ1gsTUFBTTtBQUVKLFlBQU0sTUFBTSxVQUFVLFlBQVksS0FBSyxFQUFFLGFBQWE7QUFDdEQsWUFBTSxnQkFBZ0IsVUFBVSxZQUFZLHdCQUF3QixFQUFFLGFBQWE7QUFDbkYsYUFBTyxRQUFRLEtBQUssZUFBZSxnQkFBZ0I7QUFBQSxJQUNyRDtBQUFBLElBQUc7QUFBQTtBQUFBLEVBQW1DLENBQUM7QUFDdkMscUJBQW1CLElBQUk7QUFBQSxJQUFVO0FBQUEsSUFBc0JDO0FBQUEsSUFBaUI7QUFBQTtBQUFBLEVBQXFDLENBQUM7QUFDOUcsa0JBQWdCRixPQUFNQyxRQUFPO0FBRTdCLGtCQUFnQkQsT0FBTUMsVUFBUyxTQUFTO0FBQ3hDLFdBQVNDLGlCQUFnQixXQUFXO0FBQ2xDLFFBQUk7QUFDRixZQUFNLFlBQVksVUFBVSxZQUFZLGNBQWMsRUFBRSxhQUFhO0FBQ3JFLGFBQU87QUFBQSxRQUNMLFVBQVUsQ0FBQyxXQUFXLGFBQWEsWUFBWSxTQUFTLFdBQVcsV0FBVyxhQUFhLE9BQU87QUFBQSxNQUNwRztBQUFBLElBQ0YsU0FBUyxHQUFHO0FBQ1YsWUFBTVIsZUFBYyxPQUFPLGdDQUFrRjtBQUFBLFFBQzNHLFFBQVE7QUFBQSxNQUNWLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUNGO0FBQ0Esa0JBQWtCOyIsIm5hbWVzIjpbInVzZXIiLCJ1c2VyIiwiaWRUb2tlblJlc3VsdCIsImxvZ2dlZEluIiwiaW5zdGFsbGF0aW9uRW50cnkiLCJFUlJPUl9GQUNUT1JZIiwiZGF0YUxheWVyTmFtZSIsImluaXRpYWxpemF0aW9uUHJvbWlzZXNNYXAiLCJkeW5hbWljQ29uZmlnUHJvbWlzZXNMaXN0IiwibWVhc3VyZW1lbnRJZFRvQXBwSWQiLCJnZXRIZWFkZXJzIiwibmFtZSIsInZlcnNpb24iLCJpbnRlcm5hbEZhY3RvcnkiXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyXX0=
