// src/zone-flags.ts
window.__Zone_disable_customElements = true;

// node_modules/zone.js/fesm2015/zone.js
var global = globalThis;
function __symbol__(name) {
  const symbolPrefix = global["__Zone_symbol_prefix"] || "__zone_symbol__";
  return symbolPrefix + name;
}
function initZone() {
  const performance = global["performance"];
  function mark(name) {
    performance && performance["mark"] && performance["mark"](name);
  }
  function performanceMeasure(name, label) {
    performance && performance["measure"] && performance["measure"](name, label);
  }
  mark("Zone");
  const _ZoneImpl = class _ZoneImpl {
    static assertZonePatched() {
      if (global["Promise"] !== patches["ZoneAwarePromise"]) {
        throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)");
      }
    }
    static get root() {
      let zone = _ZoneImpl.current;
      while (zone.parent) {
        zone = zone.parent;
      }
      return zone;
    }
    static get current() {
      return _currentZoneFrame.zone;
    }
    static get currentTask() {
      return _currentTask;
    }
    // tslint:disable-next-line:require-internal-with-underscore
    static __load_patch(name, fn, ignoreDuplicate = false) {
      if (patches.hasOwnProperty(name)) {
        const checkDuplicate = global[__symbol__("forceDuplicateZoneCheck")] === true;
        if (!ignoreDuplicate && checkDuplicate) {
          throw Error("Already loaded patch: " + name);
        }
      } else if (!global["__Zone_disable_" + name]) {
        const perfName = "Zone:" + name;
        mark(perfName);
        patches[name] = fn(global, _ZoneImpl, _api);
        performanceMeasure(perfName, perfName);
      }
    }
    get parent() {
      return this._parent;
    }
    get name() {
      return this._name;
    }
    constructor(parent, zoneSpec) {
      this._parent = parent;
      this._name = zoneSpec ? zoneSpec.name || "unnamed" : "<root>";
      this._properties = zoneSpec && zoneSpec.properties || {};
      this._zoneDelegate = new _ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
    }
    get(key) {
      const zone = this.getZoneWith(key);
      if (zone) return zone._properties[key];
    }
    getZoneWith(key) {
      let current = this;
      while (current) {
        if (current._properties.hasOwnProperty(key)) {
          return current;
        }
        current = current._parent;
      }
      return null;
    }
    fork(zoneSpec) {
      if (!zoneSpec) throw new Error("ZoneSpec required!");
      return this._zoneDelegate.fork(this, zoneSpec);
    }
    wrap(callback, source) {
      if (typeof callback !== "function") {
        throw new Error("Expecting function got: " + callback);
      }
      const _callback = this._zoneDelegate.intercept(this, callback, source);
      const zone = this;
      return function() {
        return zone.runGuarded(_callback, this, arguments, source);
      };
    }
    run(callback, applyThis, applyArgs, source) {
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runGuarded(callback, applyThis = null, applyArgs, source) {
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runTask(task, applyThis, applyArgs) {
      if (task.zone != this) {
        throw new Error("A task can only be run in the zone of creation! (Creation: " + (task.zone || NO_ZONE).name + "; Execution: " + this.name + ")");
      }
      const zoneTask = task;
      const {
        type,
        data: {
          isPeriodic = false,
          isRefreshable = false
        } = {}
      } = task;
      if (task.state === notScheduled && (type === eventTask || type === macroTask)) {
        return;
      }
      const reEntryGuard = task.state != running;
      reEntryGuard && zoneTask._transitionTo(running, scheduled);
      const previousTask = _currentTask;
      _currentTask = zoneTask;
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        if (type == macroTask && task.data && !isPeriodic && !isRefreshable) {
          task.cancelFn = void 0;
        }
        try {
          return this._zoneDelegate.invokeTask(this, zoneTask, applyThis, applyArgs);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        const state = task.state;
        if (state !== notScheduled && state !== unknown) {
          if (type == eventTask || isPeriodic || isRefreshable && state === scheduling) {
            reEntryGuard && zoneTask._transitionTo(scheduled, running, scheduling);
          } else {
            const zoneDelegates = zoneTask._zoneDelegates;
            this._updateTaskCount(zoneTask, -1);
            reEntryGuard && zoneTask._transitionTo(notScheduled, running, notScheduled);
            if (isRefreshable) {
              zoneTask._zoneDelegates = zoneDelegates;
            }
          }
        }
        _currentZoneFrame = _currentZoneFrame.parent;
        _currentTask = previousTask;
      }
    }
    scheduleTask(task) {
      if (task.zone && task.zone !== this) {
        let newZone = this;
        while (newZone) {
          if (newZone === task.zone) {
            throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
          }
          newZone = newZone.parent;
        }
      }
      task._transitionTo(scheduling, notScheduled);
      const zoneDelegates = [];
      task._zoneDelegates = zoneDelegates;
      task._zone = this;
      try {
        task = this._zoneDelegate.scheduleTask(this, task);
      } catch (err) {
        task._transitionTo(unknown, scheduling, notScheduled);
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      if (task._zoneDelegates === zoneDelegates) {
        this._updateTaskCount(task, 1);
      }
      if (task.state == scheduling) {
        task._transitionTo(scheduled, scheduling);
      }
      return task;
    }
    scheduleMicroTask(source, callback, data, customSchedule) {
      return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, void 0));
    }
    scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
    }
    scheduleEventTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
    }
    cancelTask(task) {
      if (task.zone != this) throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (task.zone || NO_ZONE).name + "; Execution: " + this.name + ")");
      if (task.state !== scheduled && task.state !== running) {
        return;
      }
      task._transitionTo(canceling, scheduled, running);
      try {
        this._zoneDelegate.cancelTask(this, task);
      } catch (err) {
        task._transitionTo(unknown, canceling);
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      this._updateTaskCount(task, -1);
      task._transitionTo(notScheduled, canceling);
      task.runCount = -1;
      return task;
    }
    _updateTaskCount(task, count) {
      const zoneDelegates = task._zoneDelegates;
      if (count == -1) {
        task._zoneDelegates = null;
      }
      for (let i = 0; i < zoneDelegates.length; i++) {
        zoneDelegates[i]._updateTaskCount(task.type, count);
      }
    }
  };
  _ZoneImpl.__symbol__ = __symbol__;
  let ZoneImpl = _ZoneImpl;
  const DELEGATE_ZS = {
    name: "",
    onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
    onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
    onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
    onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
  };
  class _ZoneDelegate {
    get zone() {
      return this._zone;
    }
    constructor(zone, parentDelegate, zoneSpec) {
      this._taskCounts = {
        "microTask": 0,
        "macroTask": 0,
        "eventTask": 0
      };
      this._zone = zone;
      this._parentDelegate = parentDelegate;
      this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
      this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
      this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this._zone : parentDelegate._forkCurrZone);
      this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
      this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
      this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this._zone : parentDelegate._interceptCurrZone);
      this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
      this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
      this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this._zone : parentDelegate._invokeCurrZone);
      this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
      this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
      this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this._zone : parentDelegate._handleErrorCurrZone);
      this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
      this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
      this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this._zone : parentDelegate._scheduleTaskCurrZone);
      this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
      this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
      this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this._zone : parentDelegate._invokeTaskCurrZone);
      this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
      this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
      this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this._zone : parentDelegate._cancelTaskCurrZone);
      this._hasTaskZS = null;
      this._hasTaskDlgt = null;
      this._hasTaskDlgtOwner = null;
      this._hasTaskCurrZone = null;
      const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
      const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
      if (zoneSpecHasTask || parentHasTask) {
        this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
        this._hasTaskDlgt = parentDelegate;
        this._hasTaskDlgtOwner = this;
        this._hasTaskCurrZone = this._zone;
        if (!zoneSpec.onScheduleTask) {
          this._scheduleTaskZS = DELEGATE_ZS;
          this._scheduleTaskDlgt = parentDelegate;
          this._scheduleTaskCurrZone = this._zone;
        }
        if (!zoneSpec.onInvokeTask) {
          this._invokeTaskZS = DELEGATE_ZS;
          this._invokeTaskDlgt = parentDelegate;
          this._invokeTaskCurrZone = this._zone;
        }
        if (!zoneSpec.onCancelTask) {
          this._cancelTaskZS = DELEGATE_ZS;
          this._cancelTaskDlgt = parentDelegate;
          this._cancelTaskCurrZone = this._zone;
        }
      }
    }
    fork(targetZone, zoneSpec) {
      return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new ZoneImpl(targetZone, zoneSpec);
    }
    intercept(targetZone, callback, source) {
      return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
    }
    invoke(targetZone, callback, applyThis, applyArgs, source) {
      return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
    }
    handleError(targetZone, error) {
      return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
    }
    scheduleTask(targetZone, task) {
      let returnTask = task;
      if (this._scheduleTaskZS) {
        if (this._hasTaskZS) {
          returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
        }
        returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
        if (!returnTask) returnTask = task;
      } else {
        if (task.scheduleFn) {
          task.scheduleFn(task);
        } else if (task.type == microTask) {
          scheduleMicroTask(task);
        } else {
          throw new Error("Task is missing scheduleFn.");
        }
      }
      return returnTask;
    }
    invokeTask(targetZone, task, applyThis, applyArgs) {
      return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
    }
    cancelTask(targetZone, task) {
      let value;
      if (this._cancelTaskZS) {
        value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
      } else {
        if (!task.cancelFn) {
          throw Error("Task is not cancelable");
        }
        value = task.cancelFn(task);
      }
      return value;
    }
    hasTask(targetZone, isEmpty) {
      try {
        this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
      } catch (err) {
        this.handleError(targetZone, err);
      }
    }
    // tslint:disable-next-line:require-internal-with-underscore
    _updateTaskCount(type, count) {
      const counts = this._taskCounts;
      const prev = counts[type];
      const next = counts[type] = prev + count;
      if (next < 0) {
        throw new Error("More tasks executed then were scheduled.");
      }
      if (prev == 0 || next == 0) {
        const isEmpty = {
          microTask: counts["microTask"] > 0,
          macroTask: counts["macroTask"] > 0,
          eventTask: counts["eventTask"] > 0,
          change: type
        };
        this.hasTask(this._zone, isEmpty);
      }
    }
  }
  class ZoneTask {
    constructor(type, source, callback, options, scheduleFn, cancelFn) {
      this._zone = null;
      this.runCount = 0;
      this._zoneDelegates = null;
      this._state = "notScheduled";
      this.type = type;
      this.source = source;
      this.data = options;
      this.scheduleFn = scheduleFn;
      this.cancelFn = cancelFn;
      if (!callback) {
        throw new Error("callback is not defined");
      }
      this.callback = callback;
      const self2 = this;
      if (type === eventTask && options && options.useG) {
        this.invoke = ZoneTask.invokeTask;
      } else {
        this.invoke = function() {
          return ZoneTask.invokeTask.call(global, self2, this, arguments);
        };
      }
    }
    static invokeTask(task, target, args) {
      if (!task) {
        task = this;
      }
      _numberOfNestedTaskFrames++;
      try {
        task.runCount++;
        return task.zone.runTask(task, target, args);
      } finally {
        if (_numberOfNestedTaskFrames == 1) {
          drainMicroTaskQueue();
        }
        _numberOfNestedTaskFrames--;
      }
    }
    get zone() {
      return this._zone;
    }
    get state() {
      return this._state;
    }
    cancelScheduleRequest() {
      this._transitionTo(notScheduled, scheduling);
    }
    // tslint:disable-next-line:require-internal-with-underscore
    _transitionTo(toState, fromState1, fromState2) {
      if (this._state === fromState1 || this._state === fromState2) {
        this._state = toState;
        if (toState == notScheduled) {
          this._zoneDelegates = null;
        }
      } else {
        throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? " or '" + fromState2 + "'" : ""}, was '${this._state}'.`);
      }
    }
    toString() {
      if (this.data && typeof this.data.handleId !== "undefined") {
        return this.data.handleId.toString();
      } else {
        return Object.prototype.toString.call(this);
      }
    }
    // add toJSON method to prevent cyclic error when
    // call JSON.stringify(zoneTask)
    toJSON() {
      return {
        type: this.type,
        state: this.state,
        source: this.source,
        zone: this.zone.name,
        runCount: this.runCount
      };
    }
  }
  const symbolSetTimeout = __symbol__("setTimeout");
  const symbolPromise = __symbol__("Promise");
  const symbolThen = __symbol__("then");
  let _microTaskQueue = [];
  let _isDrainingMicrotaskQueue = false;
  let nativeMicroTaskQueuePromise;
  function nativeScheduleMicroTask(func) {
    if (!nativeMicroTaskQueuePromise) {
      if (global[symbolPromise]) {
        nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
      }
    }
    if (nativeMicroTaskQueuePromise) {
      let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
      if (!nativeThen) {
        nativeThen = nativeMicroTaskQueuePromise["then"];
      }
      nativeThen.call(nativeMicroTaskQueuePromise, func);
    } else {
      global[symbolSetTimeout](func, 0);
    }
  }
  function scheduleMicroTask(task) {
    if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
      nativeScheduleMicroTask(drainMicroTaskQueue);
    }
    task && _microTaskQueue.push(task);
  }
  function drainMicroTaskQueue() {
    if (!_isDrainingMicrotaskQueue) {
      _isDrainingMicrotaskQueue = true;
      while (_microTaskQueue.length) {
        const queue = _microTaskQueue;
        _microTaskQueue = [];
        for (let i = 0; i < queue.length; i++) {
          const task = queue[i];
          try {
            task.zone.runTask(task, null, null);
          } catch (error) {
            _api.onUnhandledError(error);
          }
        }
      }
      _api.microtaskDrainDone();
      _isDrainingMicrotaskQueue = false;
    }
  }
  const NO_ZONE = {
    name: "NO ZONE"
  };
  const notScheduled = "notScheduled", scheduling = "scheduling", scheduled = "scheduled", running = "running", canceling = "canceling", unknown = "unknown";
  const microTask = "microTask", macroTask = "macroTask", eventTask = "eventTask";
  const patches = {};
  const _api = {
    symbol: __symbol__,
    currentZoneFrame: () => _currentZoneFrame,
    onUnhandledError: noop,
    microtaskDrainDone: noop,
    scheduleMicroTask,
    showUncaughtError: () => !ZoneImpl[__symbol__("ignoreConsoleErrorUncaughtError")],
    patchEventTarget: () => [],
    patchOnProperties: noop,
    patchMethod: () => noop,
    bindArguments: () => [],
    patchThen: () => noop,
    patchMacroTask: () => noop,
    patchEventPrototype: () => noop,
    isIEOrEdge: () => false,
    getGlobalObjects: () => void 0,
    ObjectDefineProperty: () => noop,
    ObjectGetOwnPropertyDescriptor: () => void 0,
    ObjectCreate: () => void 0,
    ArraySlice: () => [],
    patchClass: () => noop,
    wrapWithCurrentZone: () => noop,
    filterProperties: () => [],
    attachOriginToPatched: () => noop,
    _redefineProperty: () => noop,
    patchCallbacks: () => noop,
    nativeScheduleMicroTask
  };
  let _currentZoneFrame = {
    parent: null,
    zone: new ZoneImpl(null, null)
  };
  let _currentTask = null;
  let _numberOfNestedTaskFrames = 0;
  function noop() {
  }
  performanceMeasure("Zone", "Zone");
  return ZoneImpl;
}
function loadZone() {
  const global2 = globalThis;
  const checkDuplicate = global2[__symbol__("forceDuplicateZoneCheck")] === true;
  if (global2["Zone"] && (checkDuplicate || typeof global2["Zone"].__symbol__ !== "function")) {
    throw new Error("Zone already loaded.");
  }
  global2["Zone"] ?? (global2["Zone"] = initZone());
  return global2["Zone"];
}
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ObjectDefineProperty = Object.defineProperty;
var ObjectGetPrototypeOf = Object.getPrototypeOf;
var ObjectCreate = Object.create;
var ArraySlice = Array.prototype.slice;
var ADD_EVENT_LISTENER_STR = "addEventListener";
var REMOVE_EVENT_LISTENER_STR = "removeEventListener";
var ZONE_SYMBOL_ADD_EVENT_LISTENER = __symbol__(ADD_EVENT_LISTENER_STR);
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = __symbol__(REMOVE_EVENT_LISTENER_STR);
var TRUE_STR = "true";
var FALSE_STR = "false";
var ZONE_SYMBOL_PREFIX = __symbol__("");
function wrapWithCurrentZone(callback, source) {
  return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
  return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = __symbol__;
var isWindowExists = typeof window !== "undefined";
var internalWindow = isWindowExists ? window : void 0;
var _global = isWindowExists && internalWindow || globalThis;
var REMOVE_ATTRIBUTE = "removeAttribute";
function bindArguments(args, source) {
  for (let i = args.length - 1; i >= 0; i--) {
    if (typeof args[i] === "function") {
      args[i] = wrapWithCurrentZone(args[i], source + "_" + i);
    }
  }
  return args;
}
function patchPrototype(prototype, fnNames) {
  const source = prototype.constructor["name"];
  for (let i = 0; i < fnNames.length; i++) {
    const name = fnNames[i];
    const delegate = prototype[name];
    if (delegate) {
      const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
      if (!isPropertyWritable(prototypeDesc)) {
        continue;
      }
      prototype[name] = ((delegate2) => {
        const patched = function() {
          return delegate2.apply(this, bindArguments(arguments, source + "." + name));
        };
        attachOriginToPatched(patched, delegate2);
        return patched;
      })(delegate);
    }
  }
}
function isPropertyWritable(propertyDesc) {
  if (!propertyDesc) {
    return true;
  }
  if (propertyDesc.writable === false) {
    return false;
  }
  return !(typeof propertyDesc.get === "function" && typeof propertyDesc.set === "undefined");
}
var isWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
var isNode = !("nw" in _global) && typeof _global.process !== "undefined" && _global.process.toString() === "[object process]";
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow["HTMLElement"]);
var isMix = typeof _global.process !== "undefined" && _global.process.toString() === "[object process]" && !isWebWorker && !!(isWindowExists && internalWindow["HTMLElement"]);
var zoneSymbolEventNames$1 = {};
var enableBeforeunloadSymbol = zoneSymbol("enable_beforeunload");
var wrapFn = function(event) {
  event = event || _global.event;
  if (!event) {
    return;
  }
  let eventNameSymbol = zoneSymbolEventNames$1[event.type];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[event.type] = zoneSymbol("ON_PROPERTY" + event.type);
  }
  const target = this || event.target || _global;
  const listener = target[eventNameSymbol];
  let result;
  if (isBrowser && target === internalWindow && event.type === "error") {
    const errorEvent = event;
    result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
    if (result === true) {
      event.preventDefault();
    }
  } else {
    result = listener && listener.apply(this, arguments);
    if (
      // https://github.com/angular/angular/issues/47579
      // https://www.w3.org/TR/2011/WD-html5-20110525/history.html#beforeunloadevent
      // This is the only specific case we should check for. The spec defines that the
      // `returnValue` attribute represents the message to show the user. When the event
      // is created, this attribute must be set to the empty string.
      event.type === "beforeunload" && // To prevent any breaking changes resulting from this change, given that
      // it was already causing a significant number of failures in G3, we have hidden
      // that behavior behind a global configuration flag. Consumers can enable this
      // flag explicitly if they want the `beforeunload` event to be handled as defined
      // in the specification.
      _global[enableBeforeunloadSymbol] && // The IDL event definition is `attribute DOMString returnValue`, so we check whether
      // `typeof result` is a string.
      typeof result === "string"
    ) {
      event.returnValue = result;
    } else if (result != void 0 && !result) {
      event.preventDefault();
    }
  }
  return result;
};
function patchProperty(obj, prop, prototype) {
  let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
  if (!desc && prototype) {
    const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
    if (prototypeDesc) {
      desc = {
        enumerable: true,
        configurable: true
      };
    }
  }
  if (!desc || !desc.configurable) {
    return;
  }
  const onPropPatchedSymbol = zoneSymbol("on" + prop + "patched");
  if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
    return;
  }
  delete desc.writable;
  delete desc.value;
  const originalDescGet = desc.get;
  const originalDescSet = desc.set;
  const eventName = prop.slice(2);
  let eventNameSymbol = zoneSymbolEventNames$1[eventName];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[eventName] = zoneSymbol("ON_PROPERTY" + eventName);
  }
  desc.set = function(newValue) {
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return;
    }
    const previousValue = target[eventNameSymbol];
    if (typeof previousValue === "function") {
      target.removeEventListener(eventName, wrapFn);
    }
    originalDescSet && originalDescSet.call(target, null);
    target[eventNameSymbol] = newValue;
    if (typeof newValue === "function") {
      target.addEventListener(eventName, wrapFn, false);
    }
  };
  desc.get = function() {
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return null;
    }
    const listener = target[eventNameSymbol];
    if (listener) {
      return listener;
    } else if (originalDescGet) {
      let value = originalDescGet.call(this);
      if (value) {
        desc.set.call(this, value);
        if (typeof target[REMOVE_ATTRIBUTE] === "function") {
          target.removeAttribute(prop);
        }
        return value;
      }
    }
    return null;
  };
  ObjectDefineProperty(obj, prop, desc);
  obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
  if (properties) {
    for (let i = 0; i < properties.length; i++) {
      patchProperty(obj, "on" + properties[i], prototype);
    }
  } else {
    const onProperties = [];
    for (const prop in obj) {
      if (prop.slice(0, 2) == "on") {
        onProperties.push(prop);
      }
    }
    for (let j = 0; j < onProperties.length; j++) {
      patchProperty(obj, onProperties[j], prototype);
    }
  }
}
var originalInstanceKey = zoneSymbol("originalInstance");
function patchClass(className) {
  const OriginalClass = _global[className];
  if (!OriginalClass) return;
  _global[zoneSymbol(className)] = OriginalClass;
  _global[className] = function() {
    const a = bindArguments(arguments, className);
    switch (a.length) {
      case 0:
        this[originalInstanceKey] = new OriginalClass();
        break;
      case 1:
        this[originalInstanceKey] = new OriginalClass(a[0]);
        break;
      case 2:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
        break;
      case 3:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
        break;
      case 4:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
        break;
      default:
        throw new Error("Arg list too long.");
    }
  };
  attachOriginToPatched(_global[className], OriginalClass);
  const instance = new OriginalClass(function() {
  });
  let prop;
  for (prop in instance) {
    if (className === "XMLHttpRequest" && prop === "responseBlob") continue;
    (function(prop2) {
      if (typeof instance[prop2] === "function") {
        _global[className].prototype[prop2] = function() {
          return this[originalInstanceKey][prop2].apply(this[originalInstanceKey], arguments);
        };
      } else {
        ObjectDefineProperty(_global[className].prototype, prop2, {
          set: function(fn) {
            if (typeof fn === "function") {
              this[originalInstanceKey][prop2] = wrapWithCurrentZone(fn, className + "." + prop2);
              attachOriginToPatched(this[originalInstanceKey][prop2], fn);
            } else {
              this[originalInstanceKey][prop2] = fn;
            }
          },
          get: function() {
            return this[originalInstanceKey][prop2];
          }
        });
      }
    })(prop);
  }
  for (prop in OriginalClass) {
    if (prop !== "prototype" && OriginalClass.hasOwnProperty(prop)) {
      _global[className][prop] = OriginalClass[prop];
    }
  }
}
function patchMethod(target, name, patchFn) {
  let proto = target;
  while (proto && !proto.hasOwnProperty(name)) {
    proto = ObjectGetPrototypeOf(proto);
  }
  if (!proto && target[name]) {
    proto = target;
  }
  const delegateName = zoneSymbol(name);
  let delegate = null;
  if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
    delegate = proto[delegateName] = proto[name];
    const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
    if (isPropertyWritable(desc)) {
      const patchDelegate = patchFn(delegate, delegateName, name);
      proto[name] = function() {
        return patchDelegate(this, arguments);
      };
      attachOriginToPatched(proto[name], delegate);
    }
  }
  return delegate;
}
function patchMacroTask(obj, funcName, metaCreator) {
  let setNative = null;
  function scheduleTask(task) {
    const data = task.data;
    data.args[data.cbIdx] = function() {
      task.invoke.apply(this, arguments);
    };
    setNative.apply(data.target, data.args);
    return task;
  }
  setNative = patchMethod(obj, funcName, (delegate) => function(self2, args) {
    const meta = metaCreator(self2, args);
    if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === "function") {
      return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
    } else {
      return delegate.apply(self2, args);
    }
  });
}
function attachOriginToPatched(patched, original) {
  patched[zoneSymbol("OriginalDelegate")] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIE() {
  try {
    const ua = internalWindow.navigator.userAgent;
    if (ua.indexOf("MSIE ") !== -1 || ua.indexOf("Trident/") !== -1) {
      return true;
    }
  } catch (error) {
  }
  return false;
}
function isIEOrEdge() {
  if (isDetectedIEOrEdge) {
    return ieOrEdge;
  }
  isDetectedIEOrEdge = true;
  try {
    const ua = internalWindow.navigator.userAgent;
    if (ua.indexOf("MSIE ") !== -1 || ua.indexOf("Trident/") !== -1 || ua.indexOf("Edge/") !== -1) {
      ieOrEdge = true;
    }
  } catch (error) {
  }
  return ieOrEdge;
}
function isFunction(value) {
  return typeof value === "function";
}
function isNumber(value) {
  return typeof value === "number";
}
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    const options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
  useG: true
};
var zoneSymbolEventNames = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = new RegExp("^" + ZONE_SYMBOL_PREFIX + "(\\w+)(true|false)$");
var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol("propagationStopped");
function prepareEventNames(eventName, eventNameToString) {
  const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
  const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
  const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
  const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
  zoneSymbolEventNames[eventName] = {};
  zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
  zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
}
function patchEventTarget(_global2, api, apis, patchOptions) {
  const ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
  const REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
  const LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || "eventListeners";
  const REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || "removeAllListeners";
  const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
  const ADD_EVENT_LISTENER_SOURCE = "." + ADD_EVENT_LISTENER + ":";
  const PREPEND_EVENT_LISTENER = "prependListener";
  const PREPEND_EVENT_LISTENER_SOURCE = "." + PREPEND_EVENT_LISTENER + ":";
  const invokeTask = function(task, target, event) {
    if (task.isRemoved) {
      return;
    }
    const delegate = task.callback;
    if (typeof delegate === "object" && delegate.handleEvent) {
      task.callback = (event2) => delegate.handleEvent(event2);
      task.originalDelegate = delegate;
    }
    let error;
    try {
      task.invoke(task, target, [event]);
    } catch (err) {
      error = err;
    }
    const options = task.options;
    if (options && typeof options === "object" && options.once) {
      const delegate2 = task.originalDelegate ? task.originalDelegate : task.callback;
      target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate2, options);
    }
    return error;
  };
  function globalCallback(context, event, isCapture) {
    event = event || _global2.event;
    if (!event) {
      return;
    }
    const target = context || event.target || _global2;
    const tasks = target[zoneSymbolEventNames[event.type][isCapture ? TRUE_STR : FALSE_STR]];
    if (tasks) {
      const errors = [];
      if (tasks.length === 1) {
        const err = invokeTask(tasks[0], target, event);
        err && errors.push(err);
      } else {
        const copyTasks = tasks.slice();
        for (let i = 0; i < copyTasks.length; i++) {
          if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
            break;
          }
          const err = invokeTask(copyTasks[i], target, event);
          err && errors.push(err);
        }
      }
      if (errors.length === 1) {
        throw errors[0];
      } else {
        for (let i = 0; i < errors.length; i++) {
          const err = errors[i];
          api.nativeScheduleMicroTask(() => {
            throw err;
          });
        }
      }
    }
  }
  const globalZoneAwareCallback = function(event) {
    return globalCallback(this, event, false);
  };
  const globalZoneAwareCaptureCallback = function(event) {
    return globalCallback(this, event, true);
  };
  function patchEventTargetMethods(obj, patchOptions2) {
    if (!obj) {
      return false;
    }
    let useGlobalCallback = true;
    if (patchOptions2 && patchOptions2.useG !== void 0) {
      useGlobalCallback = patchOptions2.useG;
    }
    const validateHandler = patchOptions2 && patchOptions2.vh;
    let checkDuplicate = true;
    if (patchOptions2 && patchOptions2.chkDup !== void 0) {
      checkDuplicate = patchOptions2.chkDup;
    }
    let returnTarget = false;
    if (patchOptions2 && patchOptions2.rt !== void 0) {
      returnTarget = patchOptions2.rt;
    }
    let proto = obj;
    while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
      proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && obj[ADD_EVENT_LISTENER]) {
      proto = obj;
    }
    if (!proto) {
      return false;
    }
    if (proto[zoneSymbolAddEventListener]) {
      return false;
    }
    const eventNameToString = patchOptions2 && patchOptions2.eventNameToString;
    const taskData = {};
    const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
    const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
    const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
    const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
    let nativePrependEventListener;
    if (patchOptions2 && patchOptions2.prepend) {
      nativePrependEventListener = proto[zoneSymbol(patchOptions2.prepend)] = proto[patchOptions2.prepend];
    }
    function buildEventListenerOptions(options, passive) {
      if (!passiveSupported && typeof options === "object" && options) {
        return !!options.capture;
      }
      if (!passiveSupported || !passive) {
        return options;
      }
      if (typeof options === "boolean") {
        return {
          capture: options,
          passive: true
        };
      }
      if (!options) {
        return {
          passive: true
        };
      }
      if (typeof options === "object" && options.passive !== false) {
        return {
          ...options,
          passive: true
        };
      }
      return options;
    }
    const customScheduleGlobal = function(task) {
      if (taskData.isExisting) {
        return;
      }
      return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
    };
    const customCancelGlobal = function(task) {
      if (!task.isRemoved) {
        const symbolEventNames = zoneSymbolEventNames[task.eventName];
        let symbolEventName;
        if (symbolEventNames) {
          symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
        }
        const existingTasks = symbolEventName && task.target[symbolEventName];
        if (existingTasks) {
          for (let i = 0; i < existingTasks.length; i++) {
            const existingTask = existingTasks[i];
            if (existingTask === task) {
              existingTasks.splice(i, 1);
              task.isRemoved = true;
              if (task.removeAbortListener) {
                task.removeAbortListener();
                task.removeAbortListener = null;
              }
              if (existingTasks.length === 0) {
                task.allRemoved = true;
                task.target[symbolEventName] = null;
              }
              break;
            }
          }
        }
      }
      if (!task.allRemoved) {
        return;
      }
      return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
    };
    const customScheduleNonGlobal = function(task) {
      return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customSchedulePrepend = function(task) {
      return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customCancelNonGlobal = function(task) {
      return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
    };
    const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
    const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
    const compareTaskCallbackVsDelegate = function(task, delegate) {
      const typeOfDelegate = typeof delegate;
      return typeOfDelegate === "function" && task.callback === delegate || typeOfDelegate === "object" && task.originalDelegate === delegate;
    };
    const compare = patchOptions2 && patchOptions2.diff ? patchOptions2.diff : compareTaskCallbackVsDelegate;
    const unpatchedEvents = Zone[zoneSymbol("UNPATCHED_EVENTS")];
    const passiveEvents = _global2[zoneSymbol("PASSIVE_EVENTS")];
    function copyEventListenerOptions(options) {
      if (typeof options === "object" && options !== null) {
        const newOptions = {
          ...options
        };
        if (options.signal) {
          newOptions.signal = options.signal;
        }
        return newOptions;
      }
      return options;
    }
    const makeAddListener = function(nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget2 = false, prepend = false) {
      return function() {
        const target = this || _global2;
        let eventName = arguments[0];
        if (patchOptions2 && patchOptions2.transferEventName) {
          eventName = patchOptions2.transferEventName(eventName);
        }
        let delegate = arguments[1];
        if (!delegate) {
          return nativeListener.apply(this, arguments);
        }
        if (isNode && eventName === "uncaughtException") {
          return nativeListener.apply(this, arguments);
        }
        let isHandleEvent = false;
        if (typeof delegate !== "function") {
          if (!delegate.handleEvent) {
            return nativeListener.apply(this, arguments);
          }
          isHandleEvent = true;
        }
        if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
          return;
        }
        const passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
        const options = copyEventListenerOptions(buildEventListenerOptions(arguments[2], passive));
        const signal = options == null ? void 0 : options.signal;
        if (signal == null ? void 0 : signal.aborted) {
          return;
        }
        if (unpatchedEvents) {
          for (let i = 0; i < unpatchedEvents.length; i++) {
            if (eventName === unpatchedEvents[i]) {
              if (passive) {
                return nativeListener.call(target, eventName, delegate, options);
              } else {
                return nativeListener.apply(this, arguments);
              }
            }
          }
        }
        const capture = !options ? false : typeof options === "boolean" ? true : options.capture;
        const once = options && typeof options === "object" ? options.once : false;
        const zone = Zone.current;
        let symbolEventNames = zoneSymbolEventNames[eventName];
        if (!symbolEventNames) {
          prepareEventNames(eventName, eventNameToString);
          symbolEventNames = zoneSymbolEventNames[eventName];
        }
        const symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
        let existingTasks = target[symbolEventName];
        let isExisting = false;
        if (existingTasks) {
          isExisting = true;
          if (checkDuplicate) {
            for (let i = 0; i < existingTasks.length; i++) {
              if (compare(existingTasks[i], delegate)) {
                return;
              }
            }
          }
        } else {
          existingTasks = target[symbolEventName] = [];
        }
        let source;
        const constructorName = target.constructor["name"];
        const targetSource = globalSources[constructorName];
        if (targetSource) {
          source = targetSource[eventName];
        }
        if (!source) {
          source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
        }
        taskData.options = options;
        if (once) {
          taskData.options.once = false;
        }
        taskData.target = target;
        taskData.capture = capture;
        taskData.eventName = eventName;
        taskData.isExisting = isExisting;
        const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : void 0;
        if (data) {
          data.taskData = taskData;
        }
        if (signal) {
          taskData.options.signal = void 0;
        }
        const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
        if (signal) {
          taskData.options.signal = signal;
          const onAbort = () => task.zone.cancelTask(task);
          nativeListener.call(signal, "abort", onAbort, {
            once: true
          });
          task.removeAbortListener = () => signal.removeEventListener("abort", onAbort);
        }
        taskData.target = null;
        if (data) {
          data.taskData = null;
        }
        if (once) {
          taskData.options.once = true;
        }
        if (!(!passiveSupported && typeof task.options === "boolean")) {
          task.options = options;
        }
        task.target = target;
        task.capture = capture;
        task.eventName = eventName;
        if (isHandleEvent) {
          task.originalDelegate = delegate;
        }
        if (!prepend) {
          existingTasks.push(task);
        } else {
          existingTasks.unshift(task);
        }
        if (returnTarget2) {
          return target;
        }
      };
    };
    proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
    if (nativePrependEventListener) {
      proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
    }
    proto[REMOVE_EVENT_LISTENER] = function() {
      const target = this || _global2;
      let eventName = arguments[0];
      if (patchOptions2 && patchOptions2.transferEventName) {
        eventName = patchOptions2.transferEventName(eventName);
      }
      const options = arguments[2];
      const capture = !options ? false : typeof options === "boolean" ? true : options.capture;
      const delegate = arguments[1];
      if (!delegate) {
        return nativeRemoveEventListener.apply(this, arguments);
      }
      if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
        return;
      }
      const symbolEventNames = zoneSymbolEventNames[eventName];
      let symbolEventName;
      if (symbolEventNames) {
        symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
      }
      const existingTasks = symbolEventName && target[symbolEventName];
      if (existingTasks) {
        for (let i = 0; i < existingTasks.length; i++) {
          const existingTask = existingTasks[i];
          if (compare(existingTask, delegate)) {
            existingTasks.splice(i, 1);
            existingTask.isRemoved = true;
            if (existingTasks.length === 0) {
              existingTask.allRemoved = true;
              target[symbolEventName] = null;
              if (!capture && typeof eventName === "string") {
                const onPropertySymbol = ZONE_SYMBOL_PREFIX + "ON_PROPERTY" + eventName;
                target[onPropertySymbol] = null;
              }
            }
            existingTask.zone.cancelTask(existingTask);
            if (returnTarget) {
              return target;
            }
            return;
          }
        }
      }
      return nativeRemoveEventListener.apply(this, arguments);
    };
    proto[LISTENERS_EVENT_LISTENER] = function() {
      const target = this || _global2;
      let eventName = arguments[0];
      if (patchOptions2 && patchOptions2.transferEventName) {
        eventName = patchOptions2.transferEventName(eventName);
      }
      const listeners = [];
      const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
        listeners.push(delegate);
      }
      return listeners;
    };
    proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function() {
      const target = this || _global2;
      let eventName = arguments[0];
      if (!eventName) {
        const keys = Object.keys(target);
        for (let i = 0; i < keys.length; i++) {
          const prop = keys[i];
          const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
          let evtName = match && match[1];
          if (evtName && evtName !== "removeListener") {
            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
          }
        }
        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, "removeListener");
      } else {
        if (patchOptions2 && patchOptions2.transferEventName) {
          eventName = patchOptions2.transferEventName(eventName);
        }
        const symbolEventNames = zoneSymbolEventNames[eventName];
        if (symbolEventNames) {
          const symbolEventName = symbolEventNames[FALSE_STR];
          const symbolCaptureEventName = symbolEventNames[TRUE_STR];
          const tasks = target[symbolEventName];
          const captureTasks = target[symbolCaptureEventName];
          if (tasks) {
            const removeTasks = tasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
          if (captureTasks) {
            const removeTasks = captureTasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
        }
      }
      if (returnTarget) {
        return this;
      }
    };
    attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
    attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
    if (nativeRemoveAllListeners) {
      attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
    }
    if (nativeListeners) {
      attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
    }
    return true;
  }
  let results = [];
  for (let i = 0; i < apis.length; i++) {
    results[i] = patchEventTargetMethods(apis[i], patchOptions);
  }
  return results;
}
function findEventTasks(target, eventName) {
  if (!eventName) {
    const foundTasks = [];
    for (let prop in target) {
      const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
      let evtName = match && match[1];
      if (evtName && (!eventName || evtName === eventName)) {
        const tasks = target[prop];
        if (tasks) {
          for (let i = 0; i < tasks.length; i++) {
            foundTasks.push(tasks[i]);
          }
        }
      }
    }
    return foundTasks;
  }
  let symbolEventName = zoneSymbolEventNames[eventName];
  if (!symbolEventName) {
    prepareEventNames(eventName);
    symbolEventName = zoneSymbolEventNames[eventName];
  }
  const captureFalseTasks = target[symbolEventName[FALSE_STR]];
  const captureTrueTasks = target[symbolEventName[TRUE_STR]];
  if (!captureFalseTasks) {
    return captureTrueTasks ? captureTrueTasks.slice() : [];
  } else {
    return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
  }
}
function patchEventPrototype(global2, api) {
  const Event = global2["Event"];
  if (Event && Event.prototype) {
    api.patchMethod(Event.prototype, "stopImmediatePropagation", (delegate) => function(self2, args) {
      self2[IMMEDIATE_PROPAGATION_SYMBOL] = true;
      delegate && delegate.apply(self2, args);
    });
  }
}
function patchQueueMicrotask(global2, api) {
  api.patchMethod(global2, "queueMicrotask", (delegate) => {
    return function(self2, args) {
      Zone.current.scheduleMicroTask("queueMicrotask", args[0]);
    };
  });
}
var taskSymbol = zoneSymbol("zoneTask");
function patchTimer(window2, setName, cancelName, nameSuffix) {
  let setNative = null;
  let clearNative = null;
  setName += nameSuffix;
  cancelName += nameSuffix;
  const tasksByHandleId = {};
  function scheduleTask(task) {
    const data = task.data;
    data.args[0] = function() {
      return task.invoke.apply(this, arguments);
    };
    const handleOrId = setNative.apply(window2, data.args);
    if (isNumber(handleOrId)) {
      data.handleId = handleOrId;
    } else {
      data.handle = handleOrId;
      data.isRefreshable = isFunction(handleOrId.refresh);
    }
    return task;
  }
  function clearTask(task) {
    const {
      handle,
      handleId
    } = task.data;
    return clearNative.call(window2, handle ?? handleId);
  }
  setNative = patchMethod(window2, setName, (delegate) => function(self2, args) {
    if (isFunction(args[0])) {
      const options = {
        isRefreshable: false,
        isPeriodic: nameSuffix === "Interval",
        delay: nameSuffix === "Timeout" || nameSuffix === "Interval" ? args[1] || 0 : void 0,
        args
      };
      const callback = args[0];
      args[0] = function timer() {
        try {
          return callback.apply(this, arguments);
        } finally {
          const {
            handle: handle2,
            handleId: handleId2,
            isPeriodic: isPeriodic2,
            isRefreshable: isRefreshable2
          } = options;
          if (!isPeriodic2 && !isRefreshable2) {
            if (handleId2) {
              delete tasksByHandleId[handleId2];
            } else if (handle2) {
              handle2[taskSymbol] = null;
            }
          }
        }
      };
      const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
      if (!task) {
        return task;
      }
      const {
        handleId,
        handle,
        isRefreshable,
        isPeriodic
      } = task.data;
      if (handleId) {
        tasksByHandleId[handleId] = task;
      } else if (handle) {
        handle[taskSymbol] = task;
        if (isRefreshable && !isPeriodic) {
          const originalRefresh = handle.refresh;
          handle.refresh = function() {
            const {
              zone,
              state
            } = task;
            if (state === "notScheduled") {
              task._state = "scheduled";
              zone._updateTaskCount(task, 1);
            } else if (state === "running") {
              task._state = "scheduling";
            }
            return originalRefresh.call(this);
          };
        }
      }
      return handle ?? handleId ?? task;
    } else {
      return delegate.apply(window2, args);
    }
  });
  clearNative = patchMethod(window2, cancelName, (delegate) => function(self2, args) {
    const id = args[0];
    let task;
    if (isNumber(id)) {
      task = tasksByHandleId[id];
      delete tasksByHandleId[id];
    } else {
      task = id == null ? void 0 : id[taskSymbol];
      if (task) {
        id[taskSymbol] = null;
      } else {
        task = id;
      }
    }
    if (task == null ? void 0 : task.type) {
      if (task.cancelFn) {
        task.zone.cancelTask(task);
      }
    } else {
      delegate.apply(window2, args);
    }
  });
}
function patchCustomElements(_global2, api) {
  const {
    isBrowser: isBrowser2,
    isMix: isMix2
  } = api.getGlobalObjects();
  if (!isBrowser2 && !isMix2 || !_global2["customElements"] || !("customElements" in _global2)) {
    return;
  }
  const callbacks = ["connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback", "formAssociatedCallback", "formDisabledCallback", "formResetCallback", "formStateRestoreCallback"];
  api.patchCallbacks(api, _global2.customElements, "customElements", "define", callbacks);
}
function eventTargetPatch(_global2, api) {
  if (Zone[api.symbol("patchEventTarget")]) {
    return;
  }
  const {
    eventNames,
    zoneSymbolEventNames: zoneSymbolEventNames2,
    TRUE_STR: TRUE_STR2,
    FALSE_STR: FALSE_STR2,
    ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX2
  } = api.getGlobalObjects();
  for (let i = 0; i < eventNames.length; i++) {
    const eventName = eventNames[i];
    const falseEventName = eventName + FALSE_STR2;
    const trueEventName = eventName + TRUE_STR2;
    const symbol = ZONE_SYMBOL_PREFIX2 + falseEventName;
    const symbolCapture = ZONE_SYMBOL_PREFIX2 + trueEventName;
    zoneSymbolEventNames2[eventName] = {};
    zoneSymbolEventNames2[eventName][FALSE_STR2] = symbol;
    zoneSymbolEventNames2[eventName][TRUE_STR2] = symbolCapture;
  }
  const EVENT_TARGET = _global2["EventTarget"];
  if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
    return;
  }
  api.patchEventTarget(_global2, api, [EVENT_TARGET && EVENT_TARGET.prototype]);
  return true;
}
function patchEvent(global2, api) {
  api.patchEventPrototype(global2, api);
}
function filterProperties(target, onProperties, ignoreProperties) {
  if (!ignoreProperties || ignoreProperties.length === 0) {
    return onProperties;
  }
  const tip = ignoreProperties.filter((ip) => ip.target === target);
  if (!tip || tip.length === 0) {
    return onProperties;
  }
  const targetIgnoreProperties = tip[0].ignoreProperties;
  return onProperties.filter((op) => targetIgnoreProperties.indexOf(op) === -1);
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
  if (!target) {
    return;
  }
  const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
  patchOnProperties(target, filteredProperties, prototype);
}
function getOnEventNames(target) {
  return Object.getOwnPropertyNames(target).filter((name) => name.startsWith("on") && name.length > 2).map((name) => name.substring(2));
}
function propertyDescriptorPatch(api, _global2) {
  if (isNode && !isMix) {
    return;
  }
  if (Zone[api.symbol("patchEvents")]) {
    return;
  }
  const ignoreProperties = _global2["__Zone_ignore_on_properties"];
  let patchTargets = [];
  if (isBrowser) {
    const internalWindow2 = window;
    patchTargets = patchTargets.concat(["Document", "SVGElement", "Element", "HTMLElement", "HTMLBodyElement", "HTMLMediaElement", "HTMLFrameSetElement", "HTMLFrameElement", "HTMLIFrameElement", "HTMLMarqueeElement", "Worker"]);
    const ignoreErrorProperties = isIE() ? [{
      target: internalWindow2,
      ignoreProperties: ["error"]
    }] : [];
    patchFilteredProperties(internalWindow2, getOnEventNames(internalWindow2), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow2));
  }
  patchTargets = patchTargets.concat(["XMLHttpRequest", "XMLHttpRequestEventTarget", "IDBIndex", "IDBRequest", "IDBOpenDBRequest", "IDBDatabase", "IDBTransaction", "IDBCursor", "WebSocket"]);
  for (let i = 0; i < patchTargets.length; i++) {
    const target = _global2[patchTargets[i]];
    target && target.prototype && patchFilteredProperties(target.prototype, getOnEventNames(target.prototype), ignoreProperties);
  }
}
function patchBrowser(Zone2) {
  Zone2.__load_patch("legacy", (global2) => {
    const legacyPatch = global2[Zone2.__symbol__("legacyPatch")];
    if (legacyPatch) {
      legacyPatch();
    }
  });
  Zone2.__load_patch("timers", (global2) => {
    const set = "set";
    const clear = "clear";
    patchTimer(global2, set, clear, "Timeout");
    patchTimer(global2, set, clear, "Interval");
    patchTimer(global2, set, clear, "Immediate");
  });
  Zone2.__load_patch("requestAnimationFrame", (global2) => {
    patchTimer(global2, "request", "cancel", "AnimationFrame");
    patchTimer(global2, "mozRequest", "mozCancel", "AnimationFrame");
    patchTimer(global2, "webkitRequest", "webkitCancel", "AnimationFrame");
  });
  Zone2.__load_patch("blocking", (global2, Zone3) => {
    const blockingMethods = ["alert", "prompt", "confirm"];
    for (let i = 0; i < blockingMethods.length; i++) {
      const name = blockingMethods[i];
      patchMethod(global2, name, (delegate, symbol, name2) => {
        return function(s, args) {
          return Zone3.current.run(delegate, global2, args, name2);
        };
      });
    }
  });
  Zone2.__load_patch("EventTarget", (global2, Zone3, api) => {
    patchEvent(global2, api);
    eventTargetPatch(global2, api);
    const XMLHttpRequestEventTarget = global2["XMLHttpRequestEventTarget"];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
      api.patchEventTarget(global2, api, [XMLHttpRequestEventTarget.prototype]);
    }
  });
  Zone2.__load_patch("MutationObserver", (global2, Zone3, api) => {
    patchClass("MutationObserver");
    patchClass("WebKitMutationObserver");
  });
  Zone2.__load_patch("IntersectionObserver", (global2, Zone3, api) => {
    patchClass("IntersectionObserver");
  });
  Zone2.__load_patch("FileReader", (global2, Zone3, api) => {
    patchClass("FileReader");
  });
  Zone2.__load_patch("on_property", (global2, Zone3, api) => {
    propertyDescriptorPatch(api, global2);
  });
  Zone2.__load_patch("customElements", (global2, Zone3, api) => {
    patchCustomElements(global2, api);
  });
  Zone2.__load_patch("XHR", (global2, Zone3) => {
    patchXHR(global2);
    const XHR_TASK = zoneSymbol("xhrTask");
    const XHR_SYNC = zoneSymbol("xhrSync");
    const XHR_LISTENER = zoneSymbol("xhrListener");
    const XHR_SCHEDULED = zoneSymbol("xhrScheduled");
    const XHR_URL = zoneSymbol("xhrURL");
    const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol("xhrErrorBeforeScheduled");
    function patchXHR(window2) {
      const XMLHttpRequest = window2["XMLHttpRequest"];
      if (!XMLHttpRequest) {
        return;
      }
      const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
      function findPendingTask(target) {
        return target[XHR_TASK];
      }
      let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
      let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      if (!oriAddListener) {
        const XMLHttpRequestEventTarget = window2["XMLHttpRequestEventTarget"];
        if (XMLHttpRequestEventTarget) {
          const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
          oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }
      }
      const READY_STATE_CHANGE = "readystatechange";
      const SCHEDULED = "scheduled";
      function scheduleTask(task) {
        const data = task.data;
        const target = data.target;
        target[XHR_SCHEDULED] = false;
        target[XHR_ERROR_BEFORE_SCHEDULED] = false;
        const listener = target[XHR_LISTENER];
        if (!oriAddListener) {
          oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }
        if (listener) {
          oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
        }
        const newListener = target[XHR_LISTENER] = () => {
          if (target.readyState === target.DONE) {
            if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
              const loadTasks = target[Zone3.__symbol__("loadfalse")];
              if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
                const oriInvoke = task.invoke;
                task.invoke = function() {
                  const loadTasks2 = target[Zone3.__symbol__("loadfalse")];
                  for (let i = 0; i < loadTasks2.length; i++) {
                    if (loadTasks2[i] === task) {
                      loadTasks2.splice(i, 1);
                    }
                  }
                  if (!data.aborted && task.state === SCHEDULED) {
                    oriInvoke.call(task);
                  }
                };
                loadTasks.push(task);
              } else {
                task.invoke();
              }
            } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
              target[XHR_ERROR_BEFORE_SCHEDULED] = true;
            }
          }
        };
        oriAddListener.call(target, READY_STATE_CHANGE, newListener);
        const storedTask = target[XHR_TASK];
        if (!storedTask) {
          target[XHR_TASK] = task;
        }
        sendNative.apply(target, data.args);
        target[XHR_SCHEDULED] = true;
        return task;
      }
      function placeholderCallback() {
      }
      function clearTask(task) {
        const data = task.data;
        data.aborted = true;
        return abortNative.apply(data.target, data.args);
      }
      const openNative = patchMethod(XMLHttpRequestPrototype, "open", () => function(self2, args) {
        self2[XHR_SYNC] = args[2] == false;
        self2[XHR_URL] = args[1];
        return openNative.apply(self2, args);
      });
      const XMLHTTPREQUEST_SOURCE = "XMLHttpRequest.send";
      const fetchTaskAborting = zoneSymbol("fetchTaskAborting");
      const fetchTaskScheduling = zoneSymbol("fetchTaskScheduling");
      const sendNative = patchMethod(XMLHttpRequestPrototype, "send", () => function(self2, args) {
        if (Zone3.current[fetchTaskScheduling] === true) {
          return sendNative.apply(self2, args);
        }
        if (self2[XHR_SYNC]) {
          return sendNative.apply(self2, args);
        } else {
          const options = {
            target: self2,
            url: self2[XHR_URL],
            isPeriodic: false,
            args,
            aborted: false
          };
          const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
          if (self2 && self2[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) {
            task.invoke();
          }
        }
      });
      const abortNative = patchMethod(XMLHttpRequestPrototype, "abort", () => function(self2, args) {
        const task = findPendingTask(self2);
        if (task && typeof task.type == "string") {
          if (task.cancelFn == null || task.data && task.data.aborted) {
            return;
          }
          task.zone.cancelTask(task);
        } else if (Zone3.current[fetchTaskAborting] === true) {
          return abortNative.apply(self2, args);
        }
      });
    }
  });
  Zone2.__load_patch("geolocation", (global2) => {
    if (global2["navigator"] && global2["navigator"].geolocation) {
      patchPrototype(global2["navigator"].geolocation, ["getCurrentPosition", "watchPosition"]);
    }
  });
  Zone2.__load_patch("PromiseRejectionEvent", (global2, Zone3) => {
    function findPromiseRejectionHandler(evtName) {
      return function(e) {
        const eventTasks = findEventTasks(global2, evtName);
        eventTasks.forEach((eventTask) => {
          const PromiseRejectionEvent = global2["PromiseRejectionEvent"];
          if (PromiseRejectionEvent) {
            const evt = new PromiseRejectionEvent(evtName, {
              promise: e.promise,
              reason: e.rejection
            });
            eventTask.invoke(evt);
          }
        });
      };
    }
    if (global2["PromiseRejectionEvent"]) {
      Zone3[zoneSymbol("unhandledPromiseRejectionHandler")] = findPromiseRejectionHandler("unhandledrejection");
      Zone3[zoneSymbol("rejectionHandledHandler")] = findPromiseRejectionHandler("rejectionhandled");
    }
  });
  Zone2.__load_patch("queueMicrotask", (global2, Zone3, api) => {
    patchQueueMicrotask(global2, api);
  });
}
function patchPromise(Zone2) {
  Zone2.__load_patch("ZoneAwarePromise", (global2, Zone3, api) => {
    const ObjectGetOwnPropertyDescriptor2 = Object.getOwnPropertyDescriptor;
    const ObjectDefineProperty2 = Object.defineProperty;
    function readableObjectToString(obj) {
      if (obj && obj.toString === Object.prototype.toString) {
        const className = obj.constructor && obj.constructor.name;
        return (className ? className : "") + ": " + JSON.stringify(obj);
      }
      return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    const __symbol__2 = api.symbol;
    const _uncaughtPromiseErrors = [];
    const isDisableWrappingUncaughtPromiseRejection = global2[__symbol__2("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")] !== false;
    const symbolPromise = __symbol__2("Promise");
    const symbolThen = __symbol__2("then");
    const creationTrace = "__creationTrace__";
    api.onUnhandledError = (e) => {
      if (api.showUncaughtError()) {
        const rejection = e && e.rejection;
        if (rejection) {
          console.error("Unhandled Promise rejection:", rejection instanceof Error ? rejection.message : rejection, "; Zone:", e.zone.name, "; Task:", e.task && e.task.source, "; Value:", rejection, rejection instanceof Error ? rejection.stack : void 0);
        } else {
          console.error(e);
        }
      }
    };
    api.microtaskDrainDone = () => {
      while (_uncaughtPromiseErrors.length) {
        const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
        try {
          uncaughtPromiseError.zone.runGuarded(() => {
            if (uncaughtPromiseError.throwOriginal) {
              throw uncaughtPromiseError.rejection;
            }
            throw uncaughtPromiseError;
          });
        } catch (error) {
          handleUnhandledRejection(error);
        }
      }
    };
    const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__2("unhandledPromiseRejectionHandler");
    function handleUnhandledRejection(e) {
      api.onUnhandledError(e);
      try {
        const handler = Zone3[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
        if (typeof handler === "function") {
          handler.call(this, e);
        }
      } catch (err) {
      }
    }
    function isThenable(value) {
      return value && value.then;
    }
    function forwardResolution(value) {
      return value;
    }
    function forwardRejection(rejection) {
      return ZoneAwarePromise.reject(rejection);
    }
    const symbolState = __symbol__2("state");
    const symbolValue = __symbol__2("value");
    const symbolFinally = __symbol__2("finally");
    const symbolParentPromiseValue = __symbol__2("parentPromiseValue");
    const symbolParentPromiseState = __symbol__2("parentPromiseState");
    const source = "Promise.then";
    const UNRESOLVED = null;
    const RESOLVED = true;
    const REJECTED = false;
    const REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
      return (v) => {
        try {
          resolvePromise(promise, state, v);
        } catch (err) {
          resolvePromise(promise, false, err);
        }
      };
    }
    const once = function() {
      let wasCalled = false;
      return function wrapper(wrappedFunction) {
        return function() {
          if (wasCalled) {
            return;
          }
          wasCalled = true;
          wrappedFunction.apply(null, arguments);
        };
      };
    };
    const TYPE_ERROR = "Promise resolved with itself";
    const CURRENT_TASK_TRACE_SYMBOL = __symbol__2("currentTaskTrace");
    function resolvePromise(promise, state, value) {
      const onceWrapper = once();
      if (promise === value) {
        throw new TypeError(TYPE_ERROR);
      }
      if (promise[symbolState] === UNRESOLVED) {
        let then = null;
        try {
          if (typeof value === "object" || typeof value === "function") {
            then = value && value.then;
          }
        } catch (err) {
          onceWrapper(() => {
            resolvePromise(promise, false, err);
          })();
          return promise;
        }
        if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
          clearRejectedNoCatch(value);
          resolvePromise(promise, value[symbolState], value[symbolValue]);
        } else if (state !== REJECTED && typeof then === "function") {
          try {
            then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
          } catch (err) {
            onceWrapper(() => {
              resolvePromise(promise, false, err);
            })();
          }
        } else {
          promise[symbolState] = state;
          const queue = promise[symbolValue];
          promise[symbolValue] = value;
          if (promise[symbolFinally] === symbolFinally) {
            if (state === RESOLVED) {
              promise[symbolState] = promise[symbolParentPromiseState];
              promise[symbolValue] = promise[symbolParentPromiseValue];
            }
          }
          if (state === REJECTED && value instanceof Error) {
            const trace = Zone3.currentTask && Zone3.currentTask.data && Zone3.currentTask.data[creationTrace];
            if (trace) {
              ObjectDefineProperty2(value, CURRENT_TASK_TRACE_SYMBOL, {
                configurable: true,
                enumerable: false,
                writable: true,
                value: trace
              });
            }
          }
          for (let i = 0; i < queue.length; ) {
            scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
          }
          if (queue.length == 0 && state == REJECTED) {
            promise[symbolState] = REJECTED_NO_CATCH;
            let uncaughtPromiseError = value;
            try {
              throw new Error("Uncaught (in promise): " + readableObjectToString(value) + (value && value.stack ? "\n" + value.stack : ""));
            } catch (err) {
              uncaughtPromiseError = err;
            }
            if (isDisableWrappingUncaughtPromiseRejection) {
              uncaughtPromiseError.throwOriginal = true;
            }
            uncaughtPromiseError.rejection = value;
            uncaughtPromiseError.promise = promise;
            uncaughtPromiseError.zone = Zone3.current;
            uncaughtPromiseError.task = Zone3.currentTask;
            _uncaughtPromiseErrors.push(uncaughtPromiseError);
            api.scheduleMicroTask();
          }
        }
      }
      return promise;
    }
    const REJECTION_HANDLED_HANDLER = __symbol__2("rejectionHandledHandler");
    function clearRejectedNoCatch(promise) {
      if (promise[symbolState] === REJECTED_NO_CATCH) {
        try {
          const handler = Zone3[REJECTION_HANDLED_HANDLER];
          if (handler && typeof handler === "function") {
            handler.call(this, {
              rejection: promise[symbolValue],
              promise
            });
          }
        } catch (err) {
        }
        promise[symbolState] = REJECTED;
        for (let i = 0; i < _uncaughtPromiseErrors.length; i++) {
          if (promise === _uncaughtPromiseErrors[i].promise) {
            _uncaughtPromiseErrors.splice(i, 1);
          }
        }
      }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
      clearRejectedNoCatch(promise);
      const promiseState = promise[symbolState];
      const delegate = promiseState ? typeof onFulfilled === "function" ? onFulfilled : forwardResolution : typeof onRejected === "function" ? onRejected : forwardRejection;
      zone.scheduleMicroTask(source, () => {
        try {
          const parentPromiseValue = promise[symbolValue];
          const isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
          if (isFinallyPromise) {
            chainPromise[symbolParentPromiseValue] = parentPromiseValue;
            chainPromise[symbolParentPromiseState] = promiseState;
          }
          const value = zone.run(delegate, void 0, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
          resolvePromise(chainPromise, true, value);
        } catch (error) {
          resolvePromise(chainPromise, false, error);
        }
      }, chainPromise);
    }
    const ZONE_AWARE_PROMISE_TO_STRING = "function ZoneAwarePromise() { [native code] }";
    const noop = function() {
    };
    const AggregateError = global2.AggregateError;
    class ZoneAwarePromise {
      static toString() {
        return ZONE_AWARE_PROMISE_TO_STRING;
      }
      static resolve(value) {
        if (value instanceof ZoneAwarePromise) {
          return value;
        }
        return resolvePromise(new this(null), RESOLVED, value);
      }
      static reject(error) {
        return resolvePromise(new this(null), REJECTED, error);
      }
      static withResolvers() {
        const result = {};
        result.promise = new ZoneAwarePromise((res, rej) => {
          result.resolve = res;
          result.reject = rej;
        });
        return result;
      }
      static any(values) {
        if (!values || typeof values[Symbol.iterator] !== "function") {
          return Promise.reject(new AggregateError([], "All promises were rejected"));
        }
        const promises = [];
        let count = 0;
        try {
          for (let v of values) {
            count++;
            promises.push(ZoneAwarePromise.resolve(v));
          }
        } catch (err) {
          return Promise.reject(new AggregateError([], "All promises were rejected"));
        }
        if (count === 0) {
          return Promise.reject(new AggregateError([], "All promises were rejected"));
        }
        let finished = false;
        const errors = [];
        return new ZoneAwarePromise((resolve, reject) => {
          for (let i = 0; i < promises.length; i++) {
            promises[i].then((v) => {
              if (finished) {
                return;
              }
              finished = true;
              resolve(v);
            }, (err) => {
              errors.push(err);
              count--;
              if (count === 0) {
                finished = true;
                reject(new AggregateError(errors, "All promises were rejected"));
              }
            });
          }
        });
      }
      static race(values) {
        let resolve;
        let reject;
        let promise = new this((res, rej) => {
          resolve = res;
          reject = rej;
        });
        function onResolve(value) {
          resolve(value);
        }
        function onReject(error) {
          reject(error);
        }
        for (let value of values) {
          if (!isThenable(value)) {
            value = this.resolve(value);
          }
          value.then(onResolve, onReject);
        }
        return promise;
      }
      static all(values) {
        return ZoneAwarePromise.allWithCallback(values);
      }
      static allSettled(values) {
        const P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
        return P.allWithCallback(values, {
          thenCallback: (value) => ({
            status: "fulfilled",
            value
          }),
          errorCallback: (err) => ({
            status: "rejected",
            reason: err
          })
        });
      }
      static allWithCallback(values, callback) {
        let resolve;
        let reject;
        let promise = new this((res, rej) => {
          resolve = res;
          reject = rej;
        });
        let unresolvedCount = 2;
        let valueIndex = 0;
        const resolvedValues = [];
        for (let value of values) {
          if (!isThenable(value)) {
            value = this.resolve(value);
          }
          const curValueIndex = valueIndex;
          try {
            value.then((value2) => {
              resolvedValues[curValueIndex] = callback ? callback.thenCallback(value2) : value2;
              unresolvedCount--;
              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }
            }, (err) => {
              if (!callback) {
                reject(err);
              } else {
                resolvedValues[curValueIndex] = callback.errorCallback(err);
                unresolvedCount--;
                if (unresolvedCount === 0) {
                  resolve(resolvedValues);
                }
              }
            });
          } catch (thenErr) {
            reject(thenErr);
          }
          unresolvedCount++;
          valueIndex++;
        }
        unresolvedCount -= 2;
        if (unresolvedCount === 0) {
          resolve(resolvedValues);
        }
        return promise;
      }
      constructor(executor) {
        const promise = this;
        if (!(promise instanceof ZoneAwarePromise)) {
          throw new Error("Must be an instanceof Promise.");
        }
        promise[symbolState] = UNRESOLVED;
        promise[symbolValue] = [];
        try {
          const onceWrapper = once();
          executor && executor(onceWrapper(makeResolver(promise, RESOLVED)), onceWrapper(makeResolver(promise, REJECTED)));
        } catch (error) {
          resolvePromise(promise, false, error);
        }
      }
      get [Symbol.toStringTag]() {
        return "Promise";
      }
      get [Symbol.species]() {
        return ZoneAwarePromise;
      }
      then(onFulfilled, onRejected) {
        var _a;
        let C = (_a = this.constructor) == null ? void 0 : _a[Symbol.species];
        if (!C || typeof C !== "function") {
          C = this.constructor || ZoneAwarePromise;
        }
        const chainPromise = new C(noop);
        const zone = Zone3.current;
        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
        }
        return chainPromise;
      }
      catch(onRejected) {
        return this.then(null, onRejected);
      }
      finally(onFinally) {
        var _a;
        let C = (_a = this.constructor) == null ? void 0 : _a[Symbol.species];
        if (!C || typeof C !== "function") {
          C = ZoneAwarePromise;
        }
        const chainPromise = new C(noop);
        chainPromise[symbolFinally] = symbolFinally;
        const zone = Zone3.current;
        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
        }
        return chainPromise;
      }
    }
    ZoneAwarePromise["resolve"] = ZoneAwarePromise.resolve;
    ZoneAwarePromise["reject"] = ZoneAwarePromise.reject;
    ZoneAwarePromise["race"] = ZoneAwarePromise.race;
    ZoneAwarePromise["all"] = ZoneAwarePromise.all;
    const NativePromise = global2[symbolPromise] = global2["Promise"];
    global2["Promise"] = ZoneAwarePromise;
    const symbolThenPatched = __symbol__2("thenPatched");
    function patchThen(Ctor) {
      const proto = Ctor.prototype;
      const prop = ObjectGetOwnPropertyDescriptor2(proto, "then");
      if (prop && (prop.writable === false || !prop.configurable)) {
        return;
      }
      const originalThen = proto.then;
      proto[symbolThen] = originalThen;
      Ctor.prototype.then = function(onResolve, onReject) {
        const wrapped = new ZoneAwarePromise((resolve, reject) => {
          originalThen.call(this, resolve, reject);
        });
        return wrapped.then(onResolve, onReject);
      };
      Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    function zoneify(fn) {
      return function(self2, args) {
        let resultPromise = fn.apply(self2, args);
        if (resultPromise instanceof ZoneAwarePromise) {
          return resultPromise;
        }
        let ctor = resultPromise.constructor;
        if (!ctor[symbolThenPatched]) {
          patchThen(ctor);
        }
        return resultPromise;
      };
    }
    if (NativePromise) {
      patchThen(NativePromise);
      patchMethod(global2, "fetch", (delegate) => zoneify(delegate));
    }
    Promise[Zone3.__symbol__("uncaughtPromiseErrors")] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
  });
}
function patchToString(Zone2) {
  Zone2.__load_patch("toString", (global2) => {
    const originalFunctionToString = Function.prototype.toString;
    const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol("OriginalDelegate");
    const PROMISE_SYMBOL = zoneSymbol("Promise");
    const ERROR_SYMBOL = zoneSymbol("Error");
    const newFunctionToString = function toString() {
      if (typeof this === "function") {
        const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
        if (originalDelegate) {
          if (typeof originalDelegate === "function") {
            return originalFunctionToString.call(originalDelegate);
          } else {
            return Object.prototype.toString.call(originalDelegate);
          }
        }
        if (this === Promise) {
          const nativePromise = global2[PROMISE_SYMBOL];
          if (nativePromise) {
            return originalFunctionToString.call(nativePromise);
          }
        }
        if (this === Error) {
          const nativeError = global2[ERROR_SYMBOL];
          if (nativeError) {
            return originalFunctionToString.call(nativeError);
          }
        }
      }
      return originalFunctionToString.call(this);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    const originalObjectToString = Object.prototype.toString;
    const PROMISE_OBJECT_TO_STRING = "[object Promise]";
    Object.prototype.toString = function() {
      if (typeof Promise === "function" && this instanceof Promise) {
        return PROMISE_OBJECT_TO_STRING;
      }
      return originalObjectToString.call(this);
    };
  });
}
function patchCallbacks(api, target, targetName, method, callbacks) {
  const symbol = Zone.__symbol__(method);
  if (target[symbol]) {
    return;
  }
  const nativeDelegate = target[symbol] = target[method];
  target[method] = function(name, opts, options) {
    if (opts && opts.prototype) {
      callbacks.forEach(function(callback) {
        const source = `${targetName}.${method}::` + callback;
        const prototype = opts.prototype;
        try {
          if (prototype.hasOwnProperty(callback)) {
            const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
            if (descriptor && descriptor.value) {
              descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
              api._redefineProperty(opts.prototype, callback, descriptor);
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          } else if (prototype[callback]) {
            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
          }
        } catch {
        }
      });
    }
    return nativeDelegate.call(target, name, opts, options);
  };
  api.attachOriginToPatched(target[method], nativeDelegate);
}
function patchUtil(Zone2) {
  Zone2.__load_patch("util", (global2, Zone3, api) => {
    const eventNames = getOnEventNames(global2);
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask;
    const SYMBOL_BLACK_LISTED_EVENTS = Zone3.__symbol__("BLACK_LISTED_EVENTS");
    const SYMBOL_UNPATCHED_EVENTS = Zone3.__symbol__("UNPATCHED_EVENTS");
    if (global2[SYMBOL_UNPATCHED_EVENTS]) {
      global2[SYMBOL_BLACK_LISTED_EVENTS] = global2[SYMBOL_UNPATCHED_EVENTS];
    }
    if (global2[SYMBOL_BLACK_LISTED_EVENTS]) {
      Zone3[SYMBOL_BLACK_LISTED_EVENTS] = Zone3[SYMBOL_UNPATCHED_EVENTS] = global2[SYMBOL_BLACK_LISTED_EVENTS];
    }
    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = Object.defineProperty;
    api.patchCallbacks = patchCallbacks;
    api.getGlobalObjects = () => ({
      globalSources,
      zoneSymbolEventNames,
      eventNames,
      isBrowser,
      isMix,
      isNode,
      TRUE_STR,
      FALSE_STR,
      ZONE_SYMBOL_PREFIX,
      ADD_EVENT_LISTENER_STR,
      REMOVE_EVENT_LISTENER_STR
    });
  });
}
function patchCommon(Zone2) {
  patchPromise(Zone2);
  patchToString(Zone2);
  patchUtil(Zone2);
}
var Zone$1 = loadZone();
patchCommon(Zone$1);
patchBrowser(Zone$1);

// node_modules/@angular/localize/fesm2022/localize-DRpJxdeL.mjs
var BLOCK_MARKER$1 = ":";
var Endian;
(function(Endian2) {
  Endian2[Endian2["Little"] = 0] = "Little";
  Endian2[Endian2["Big"] = 1] = "Big";
})(Endian || (Endian = {}));
function findEndOfBlock(cooked, raw) {
  for (let cookedIndex = 1, rawIndex = 1; cookedIndex < cooked.length; cookedIndex++, rawIndex++) {
    if (raw[rawIndex] === "\\") {
      rawIndex++;
    } else if (cooked[cookedIndex] === BLOCK_MARKER$1) {
      return cookedIndex;
    }
  }
  throw new Error(`Unterminated $localize metadata block in "${raw}".`);
}
var $localize = function(messageParts, ...expressions) {
  if ($localize.translate) {
    const translation = $localize.translate(messageParts, expressions);
    messageParts = translation[0];
    expressions = translation[1];
  }
  let message = stripBlock(messageParts[0], messageParts.raw[0]);
  for (let i = 1; i < messageParts.length; i++) {
    message += expressions[i - 1] + stripBlock(messageParts[i], messageParts.raw[i]);
  }
  return message;
};
var BLOCK_MARKER = ":";
function stripBlock(messagePart, rawMessagePart) {
  return rawMessagePart.charAt(0) === BLOCK_MARKER ? messagePart.substring(findEndOfBlock(messagePart, rawMessagePart) + 1) : messagePart;
}

// node_modules/@angular/localize/fesm2022/init.mjs
globalThis.$localize = $localize;
/*! Bundled license information:

zone.js/fesm2015/zone.js:
  (**
   * @license Angular v<unknown>
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/localize/fesm2022/localize-DRpJxdeL.mjs:
  (**
   * @license Angular v19.2.5
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/localize/fesm2022/init.mjs:
  (**
   * @license Angular v19.2.5
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy96b25lLWZsYWdzLnRzIiwibm9kZV9tb2R1bGVzL3pvbmUuanMvZmVzbTIwMTUvem9uZS5qcyIsIm5vZGVfbW9kdWxlcy9AYW5ndWxhci9sb2NhbGl6ZS9mZXNtMjAyMi9sb2NhbGl6ZS1EUnBKeGRlTC5tanMiLCJub2RlX21vZHVsZXMvQGFuZ3VsYXIvbG9jYWxpemUvZmVzbTIwMjIvaW5pdC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQcmV2ZW50cyBBbmd1bGFyIGNoYW5nZSBkZXRlY3Rpb24gZnJvbVxuICogcnVubmluZyB3aXRoIGNlcnRhaW4gV2ViIENvbXBvbmVudCBjYWxsYmFja3NcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4od2luZG93IGFzIGFueSkuX19ab25lX2Rpc2FibGVfY3VzdG9tRWxlbWVudHMgPSB0cnVlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBsaWNlbnNlIEFuZ3VsYXIgdjx1bmtub3duPlxuICogKGMpIDIwMTAtMjAyNCBHb29nbGUgTExDLiBodHRwczovL2FuZ3VsYXIuaW8vXG4gKiBMaWNlbnNlOiBNSVRcbiAqL1xuY29uc3QgZ2xvYmFsID0gZ2xvYmFsVGhpcztcbi8vIF9fWm9uZV9zeW1ib2xfcHJlZml4IGdsb2JhbCBjYW4gYmUgdXNlZCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCB6b25lXG4vLyBzeW1ib2wgcHJlZml4IHdpdGggYSBjdXN0b20gb25lIGlmIG5lZWRlZC5cbmZ1bmN0aW9uIF9fc3ltYm9sX18obmFtZSkge1xuICBjb25zdCBzeW1ib2xQcmVmaXggPSBnbG9iYWxbJ19fWm9uZV9zeW1ib2xfcHJlZml4J10gfHwgJ19fem9uZV9zeW1ib2xfXyc7XG4gIHJldHVybiBzeW1ib2xQcmVmaXggKyBuYW1lO1xufVxuZnVuY3Rpb24gaW5pdFpvbmUoKSB7XG4gIGNvbnN0IHBlcmZvcm1hbmNlID0gZ2xvYmFsWydwZXJmb3JtYW5jZSddO1xuICBmdW5jdGlvbiBtYXJrKG5hbWUpIHtcbiAgICBwZXJmb3JtYW5jZSAmJiBwZXJmb3JtYW5jZVsnbWFyayddICYmIHBlcmZvcm1hbmNlWydtYXJrJ10obmFtZSk7XG4gIH1cbiAgZnVuY3Rpb24gcGVyZm9ybWFuY2VNZWFzdXJlKG5hbWUsIGxhYmVsKSB7XG4gICAgcGVyZm9ybWFuY2UgJiYgcGVyZm9ybWFuY2VbJ21lYXN1cmUnXSAmJiBwZXJmb3JtYW5jZVsnbWVhc3VyZSddKG5hbWUsIGxhYmVsKTtcbiAgfVxuICBtYXJrKCdab25lJyk7XG4gIGNsYXNzIFpvbmVJbXBsIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmVxdWlyZS1pbnRlcm5hbC13aXRoLXVuZGVyc2NvcmVcbiAgICBzdGF0aWMge1xuICAgICAgdGhpcy5fX3N5bWJvbF9fID0gX19zeW1ib2xfXztcbiAgICB9XG4gICAgc3RhdGljIGFzc2VydFpvbmVQYXRjaGVkKCkge1xuICAgICAgaWYgKGdsb2JhbFsnUHJvbWlzZSddICE9PSBwYXRjaGVzWydab25lQXdhcmVQcm9taXNlJ10pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lLmpzIGhhcyBkZXRlY3RlZCB0aGF0IFpvbmVBd2FyZVByb21pc2UgYCh3aW5kb3d8Z2xvYmFsKS5Qcm9taXNlYCAnICsgJ2hhcyBiZWVuIG92ZXJ3cml0dGVuLlxcbicgKyAnTW9zdCBsaWtlbHkgY2F1c2UgaXMgdGhhdCBhIFByb21pc2UgcG9seWZpbGwgaGFzIGJlZW4gbG9hZGVkICcgKyAnYWZ0ZXIgWm9uZS5qcyAoUG9seWZpbGxpbmcgUHJvbWlzZSBhcGkgaXMgbm90IG5lY2Vzc2FyeSB3aGVuIHpvbmUuanMgaXMgbG9hZGVkLiAnICsgJ0lmIHlvdSBtdXN0IGxvYWQgb25lLCBkbyBzbyBiZWZvcmUgbG9hZGluZyB6b25lLmpzLiknKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGdldCByb290KCkge1xuICAgICAgbGV0IHpvbmUgPSBab25lSW1wbC5jdXJyZW50O1xuICAgICAgd2hpbGUgKHpvbmUucGFyZW50KSB7XG4gICAgICAgIHpvbmUgPSB6b25lLnBhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB6b25lO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGN1cnJlbnQoKSB7XG4gICAgICByZXR1cm4gX2N1cnJlbnRab25lRnJhbWUuem9uZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBjdXJyZW50VGFzaygpIHtcbiAgICAgIHJldHVybiBfY3VycmVudFRhc2s7XG4gICAgfVxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyZXF1aXJlLWludGVybmFsLXdpdGgtdW5kZXJzY29yZVxuICAgIHN0YXRpYyBfX2xvYWRfcGF0Y2gobmFtZSwgZm4sIGlnbm9yZUR1cGxpY2F0ZSA9IGZhbHNlKSB7XG4gICAgICBpZiAocGF0Y2hlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAvLyBgY2hlY2tEdXBsaWNhdGVgIG9wdGlvbiBpcyBkZWZpbmVkIGZyb20gZ2xvYmFsIHZhcmlhYmxlXG4gICAgICAgIC8vIHNvIGl0IHdvcmtzIGZvciBhbGwgbW9kdWxlcy5cbiAgICAgICAgLy8gYGlnbm9yZUR1cGxpY2F0ZWAgY2FuIHdvcmsgZm9yIHRoZSBzcGVjaWZpZWQgbW9kdWxlXG4gICAgICAgIGNvbnN0IGNoZWNrRHVwbGljYXRlID0gZ2xvYmFsW19fc3ltYm9sX18oJ2ZvcmNlRHVwbGljYXRlWm9uZUNoZWNrJyldID09PSB0cnVlO1xuICAgICAgICBpZiAoIWlnbm9yZUR1cGxpY2F0ZSAmJiBjaGVja0R1cGxpY2F0ZSkge1xuICAgICAgICAgIHRocm93IEVycm9yKCdBbHJlYWR5IGxvYWRlZCBwYXRjaDogJyArIG5hbWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFnbG9iYWxbJ19fWm9uZV9kaXNhYmxlXycgKyBuYW1lXSkge1xuICAgICAgICBjb25zdCBwZXJmTmFtZSA9ICdab25lOicgKyBuYW1lO1xuICAgICAgICBtYXJrKHBlcmZOYW1lKTtcbiAgICAgICAgcGF0Y2hlc1tuYW1lXSA9IGZuKGdsb2JhbCwgWm9uZUltcGwsIF9hcGkpO1xuICAgICAgICBwZXJmb3JtYW5jZU1lYXN1cmUocGVyZk5hbWUsIHBlcmZOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHBhcmVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gICAgfVxuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgem9uZVNwZWMpIHtcbiAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICAgIHRoaXMuX25hbWUgPSB6b25lU3BlYyA/IHpvbmVTcGVjLm5hbWUgfHwgJ3VubmFtZWQnIDogJzxyb290Pic7XG4gICAgICB0aGlzLl9wcm9wZXJ0aWVzID0gem9uZVNwZWMgJiYgem9uZVNwZWMucHJvcGVydGllcyB8fCB7fTtcbiAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZSA9IG5ldyBfWm9uZURlbGVnYXRlKHRoaXMsIHRoaXMuX3BhcmVudCAmJiB0aGlzLl9wYXJlbnQuX3pvbmVEZWxlZ2F0ZSwgem9uZVNwZWMpO1xuICAgIH1cbiAgICBnZXQoa2V5KSB7XG4gICAgICBjb25zdCB6b25lID0gdGhpcy5nZXRab25lV2l0aChrZXkpO1xuICAgICAgaWYgKHpvbmUpIHJldHVybiB6b25lLl9wcm9wZXJ0aWVzW2tleV07XG4gICAgfVxuICAgIGdldFpvbmVXaXRoKGtleSkge1xuICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzO1xuICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgaWYgKGN1cnJlbnQuX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Ll9wYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZm9yayh6b25lU3BlYykge1xuICAgICAgaWYgKCF6b25lU3BlYykgdGhyb3cgbmV3IEVycm9yKCdab25lU3BlYyByZXF1aXJlZCEnKTtcbiAgICAgIHJldHVybiB0aGlzLl96b25lRGVsZWdhdGUuZm9yayh0aGlzLCB6b25lU3BlYyk7XG4gICAgfVxuICAgIHdyYXAoY2FsbGJhY2ssIHNvdXJjZSkge1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGluZyBmdW5jdGlvbiBnb3Q6ICcgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICBjb25zdCBfY2FsbGJhY2sgPSB0aGlzLl96b25lRGVsZWdhdGUuaW50ZXJjZXB0KHRoaXMsIGNhbGxiYWNrLCBzb3VyY2UpO1xuICAgICAgY29uc3Qgem9uZSA9IHRoaXM7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gem9uZS5ydW5HdWFyZGVkKF9jYWxsYmFjaywgdGhpcywgYXJndW1lbnRzLCBzb3VyY2UpO1xuICAgICAgfTtcbiAgICB9XG4gICAgcnVuKGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKSB7XG4gICAgICBfY3VycmVudFpvbmVGcmFtZSA9IHtcbiAgICAgICAgcGFyZW50OiBfY3VycmVudFpvbmVGcmFtZSxcbiAgICAgICAgem9uZTogdGhpc1xuICAgICAgfTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0aGlzLl96b25lRGVsZWdhdGUuaW52b2tlKHRoaXMsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9jdXJyZW50Wm9uZUZyYW1lID0gX2N1cnJlbnRab25lRnJhbWUucGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBydW5HdWFyZGVkKGNhbGxiYWNrLCBhcHBseVRoaXMgPSBudWxsLCBhcHBseUFyZ3MsIHNvdXJjZSkge1xuICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSB7XG4gICAgICAgIHBhcmVudDogX2N1cnJlbnRab25lRnJhbWUsXG4gICAgICAgIHpvbmU6IHRoaXNcbiAgICAgIH07XG4gICAgICB0cnkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl96b25lRGVsZWdhdGUuaW52b2tlKHRoaXMsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBpZiAodGhpcy5fem9uZURlbGVnYXRlLmhhbmRsZUVycm9yKHRoaXMsIGVycm9yKSkge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBfY3VycmVudFpvbmVGcmFtZSA9IF9jdXJyZW50Wm9uZUZyYW1lLnBhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgcnVuVGFzayh0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykge1xuICAgICAgaWYgKHRhc2suem9uZSAhPSB0aGlzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQSB0YXNrIGNhbiBvbmx5IGJlIHJ1biBpbiB0aGUgem9uZSBvZiBjcmVhdGlvbiEgKENyZWF0aW9uOiAnICsgKHRhc2suem9uZSB8fCBOT19aT05FKS5uYW1lICsgJzsgRXhlY3V0aW9uOiAnICsgdGhpcy5uYW1lICsgJyknKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHpvbmVUYXNrID0gdGFzaztcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzc3OCwgc29tZXRpbWVzIGV2ZW50VGFza1xuICAgICAgLy8gd2lsbCBydW4gaW4gbm90U2NoZWR1bGVkKGNhbmNlbGVkKSBzdGF0ZSwgd2Ugc2hvdWxkIG5vdCB0cnkgdG9cbiAgICAgIC8vIHJ1biBzdWNoIGtpbmQgb2YgdGFzayBidXQganVzdCByZXR1cm5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGlzUGVyaW9kaWMgPSBmYWxzZSxcbiAgICAgICAgICBpc1JlZnJlc2hhYmxlID0gZmFsc2VcbiAgICAgICAgfSA9IHt9XG4gICAgICB9ID0gdGFzaztcbiAgICAgIGlmICh0YXNrLnN0YXRlID09PSBub3RTY2hlZHVsZWQgJiYgKHR5cGUgPT09IGV2ZW50VGFzayB8fCB0eXBlID09PSBtYWNyb1Rhc2spKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlRW50cnlHdWFyZCA9IHRhc2suc3RhdGUgIT0gcnVubmluZztcbiAgICAgIHJlRW50cnlHdWFyZCAmJiB6b25lVGFzay5fdHJhbnNpdGlvblRvKHJ1bm5pbmcsIHNjaGVkdWxlZCk7XG4gICAgICBjb25zdCBwcmV2aW91c1Rhc2sgPSBfY3VycmVudFRhc2s7XG4gICAgICBfY3VycmVudFRhc2sgPSB6b25lVGFzaztcbiAgICAgIF9jdXJyZW50Wm9uZUZyYW1lID0ge1xuICAgICAgICBwYXJlbnQ6IF9jdXJyZW50Wm9uZUZyYW1lLFxuICAgICAgICB6b25lOiB0aGlzXG4gICAgICB9O1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGUgPT0gbWFjcm9UYXNrICYmIHRhc2suZGF0YSAmJiAhaXNQZXJpb2RpYyAmJiAhaXNSZWZyZXNoYWJsZSkge1xuICAgICAgICAgIHRhc2suY2FuY2VsRm4gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmludm9rZVRhc2sodGhpcywgem9uZVRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBpZiAodGhpcy5fem9uZURlbGVnYXRlLmhhbmRsZUVycm9yKHRoaXMsIGVycm9yKSkge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICAvLyBpZiB0aGUgdGFzaydzIHN0YXRlIGlzIG5vdFNjaGVkdWxlZCBvciB1bmtub3duLCB0aGVuIGl0IGhhcyBhbHJlYWR5IGJlZW4gY2FuY2VsbGVkXG4gICAgICAgIC8vIHdlIHNob3VsZCBub3QgcmVzZXQgdGhlIHN0YXRlIHRvIHNjaGVkdWxlZFxuICAgICAgICBjb25zdCBzdGF0ZSA9IHRhc2suc3RhdGU7XG4gICAgICAgIGlmIChzdGF0ZSAhPT0gbm90U2NoZWR1bGVkICYmIHN0YXRlICE9PSB1bmtub3duKSB7XG4gICAgICAgICAgaWYgKHR5cGUgPT0gZXZlbnRUYXNrIHx8IGlzUGVyaW9kaWMgfHwgaXNSZWZyZXNoYWJsZSAmJiBzdGF0ZSA9PT0gc2NoZWR1bGluZykge1xuICAgICAgICAgICAgcmVFbnRyeUd1YXJkICYmIHpvbmVUYXNrLl90cmFuc2l0aW9uVG8oc2NoZWR1bGVkLCBydW5uaW5nLCBzY2hlZHVsaW5nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgem9uZURlbGVnYXRlcyA9IHpvbmVUYXNrLl96b25lRGVsZWdhdGVzO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlVGFza0NvdW50KHpvbmVUYXNrLCAtMSk7XG4gICAgICAgICAgICByZUVudHJ5R3VhcmQgJiYgem9uZVRhc2suX3RyYW5zaXRpb25Ubyhub3RTY2hlZHVsZWQsIHJ1bm5pbmcsIG5vdFNjaGVkdWxlZCk7XG4gICAgICAgICAgICBpZiAoaXNSZWZyZXNoYWJsZSkge1xuICAgICAgICAgICAgICB6b25lVGFzay5fem9uZURlbGVnYXRlcyA9IHpvbmVEZWxlZ2F0ZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9jdXJyZW50Wm9uZUZyYW1lID0gX2N1cnJlbnRab25lRnJhbWUucGFyZW50O1xuICAgICAgICBfY3VycmVudFRhc2sgPSBwcmV2aW91c1Rhc2s7XG4gICAgICB9XG4gICAgfVxuICAgIHNjaGVkdWxlVGFzayh0YXNrKSB7XG4gICAgICBpZiAodGFzay56b25lICYmIHRhc2suem9uZSAhPT0gdGhpcykge1xuICAgICAgICAvLyBjaGVjayBpZiB0aGUgdGFzayB3YXMgcmVzY2hlZHVsZWQsIHRoZSBuZXdab25lXG4gICAgICAgIC8vIHNob3VsZCBub3QgYmUgdGhlIGNoaWxkcmVuIG9mIHRoZSBvcmlnaW5hbCB6b25lXG4gICAgICAgIGxldCBuZXdab25lID0gdGhpcztcbiAgICAgICAgd2hpbGUgKG5ld1pvbmUpIHtcbiAgICAgICAgICBpZiAobmV3Wm9uZSA9PT0gdGFzay56b25lKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgY2FuIG5vdCByZXNjaGVkdWxlIHRhc2sgdG8gJHt0aGlzLm5hbWV9IHdoaWNoIGlzIGRlc2NlbmRhbnRzIG9mIHRoZSBvcmlnaW5hbCB6b25lICR7dGFzay56b25lLm5hbWV9YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5ld1pvbmUgPSBuZXdab25lLnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGFzay5fdHJhbnNpdGlvblRvKHNjaGVkdWxpbmcsIG5vdFNjaGVkdWxlZCk7XG4gICAgICBjb25zdCB6b25lRGVsZWdhdGVzID0gW107XG4gICAgICB0YXNrLl96b25lRGVsZWdhdGVzID0gem9uZURlbGVnYXRlcztcbiAgICAgIHRhc2suX3pvbmUgPSB0aGlzO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGFzayA9IHRoaXMuX3pvbmVEZWxlZ2F0ZS5zY2hlZHVsZVRhc2sodGhpcywgdGFzayk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gc2hvdWxkIHNldCB0YXNrJ3Mgc3RhdGUgdG8gdW5rbm93biB3aGVuIHNjaGVkdWxlVGFzayB0aHJvdyBlcnJvclxuICAgICAgICAvLyBiZWNhdXNlIHRoZSBlcnIgbWF5IGZyb20gcmVzY2hlZHVsZSwgc28gdGhlIGZyb21TdGF0ZSBtYXliZSBub3RTY2hlZHVsZWRcbiAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKHVua25vd24sIHNjaGVkdWxpbmcsIG5vdFNjaGVkdWxlZCk7XG4gICAgICAgIC8vIFRPRE86IEBKaWFMaVBhc3Npb24sIHNob3VsZCB3ZSBjaGVjayB0aGUgcmVzdWx0IGZyb20gaGFuZGxlRXJyb3I/XG4gICAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZS5oYW5kbGVFcnJvcih0aGlzLCBlcnIpO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgICBpZiAodGFzay5fem9uZURlbGVnYXRlcyA9PT0gem9uZURlbGVnYXRlcykge1xuICAgICAgICAvLyB3ZSBoYXZlIHRvIGNoZWNrIGJlY2F1c2UgaW50ZXJuYWxseSB0aGUgZGVsZWdhdGUgY2FuIHJlc2NoZWR1bGUgdGhlIHRhc2suXG4gICAgICAgIHRoaXMuX3VwZGF0ZVRhc2tDb3VudCh0YXNrLCAxKTtcbiAgICAgIH1cbiAgICAgIGlmICh0YXNrLnN0YXRlID09IHNjaGVkdWxpbmcpIHtcbiAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKHNjaGVkdWxlZCwgc2NoZWR1bGluZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFzaztcbiAgICB9XG4gICAgc2NoZWR1bGVNaWNyb1Rhc2soc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlVGFzayhuZXcgWm9uZVRhc2sobWljcm9UYXNrLCBzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgdW5kZWZpbmVkKSk7XG4gICAgfVxuICAgIHNjaGVkdWxlTWFjcm9UYXNrKHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlVGFzayhuZXcgWm9uZVRhc2sobWFjcm9UYXNrLCBzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSk7XG4gICAgfVxuICAgIHNjaGVkdWxlRXZlbnRUYXNrKHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlVGFzayhuZXcgWm9uZVRhc2soZXZlbnRUYXNrLCBzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSk7XG4gICAgfVxuICAgIGNhbmNlbFRhc2sodGFzaykge1xuICAgICAgaWYgKHRhc2suem9uZSAhPSB0aGlzKSB0aHJvdyBuZXcgRXJyb3IoJ0EgdGFzayBjYW4gb25seSBiZSBjYW5jZWxsZWQgaW4gdGhlIHpvbmUgb2YgY3JlYXRpb24hIChDcmVhdGlvbjogJyArICh0YXNrLnpvbmUgfHwgTk9fWk9ORSkubmFtZSArICc7IEV4ZWN1dGlvbjogJyArIHRoaXMubmFtZSArICcpJyk7XG4gICAgICBpZiAodGFzay5zdGF0ZSAhPT0gc2NoZWR1bGVkICYmIHRhc2suc3RhdGUgIT09IHJ1bm5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGFzay5fdHJhbnNpdGlvblRvKGNhbmNlbGluZywgc2NoZWR1bGVkLCBydW5uaW5nKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZS5jYW5jZWxUYXNrKHRoaXMsIHRhc2spO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIGlmIGVycm9yIG9jY3VycyB3aGVuIGNhbmNlbFRhc2ssIHRyYW5zaXQgdGhlIHN0YXRlIHRvIHVua25vd25cbiAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKHVua25vd24sIGNhbmNlbGluZyk7XG4gICAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZS5oYW5kbGVFcnJvcih0aGlzLCBlcnIpO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgICB0aGlzLl91cGRhdGVUYXNrQ291bnQodGFzaywgLTEpO1xuICAgICAgdGFzay5fdHJhbnNpdGlvblRvKG5vdFNjaGVkdWxlZCwgY2FuY2VsaW5nKTtcbiAgICAgIHRhc2sucnVuQ291bnQgPSAtMTtcbiAgICAgIHJldHVybiB0YXNrO1xuICAgIH1cbiAgICBfdXBkYXRlVGFza0NvdW50KHRhc2ssIGNvdW50KSB7XG4gICAgICBjb25zdCB6b25lRGVsZWdhdGVzID0gdGFzay5fem9uZURlbGVnYXRlcztcbiAgICAgIGlmIChjb3VudCA9PSAtMSkge1xuICAgICAgICB0YXNrLl96b25lRGVsZWdhdGVzID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgem9uZURlbGVnYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB6b25lRGVsZWdhdGVzW2ldLl91cGRhdGVUYXNrQ291bnQodGFzay50eXBlLCBjb3VudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0IERFTEVHQVRFX1pTID0ge1xuICAgIG5hbWU6ICcnLFxuICAgIG9uSGFzVGFzazogKGRlbGVnYXRlLCBfLCB0YXJnZXQsIGhhc1Rhc2tTdGF0ZSkgPT4gZGVsZWdhdGUuaGFzVGFzayh0YXJnZXQsIGhhc1Rhc2tTdGF0ZSksXG4gICAgb25TY2hlZHVsZVRhc2s6IChkZWxlZ2F0ZSwgXywgdGFyZ2V0LCB0YXNrKSA9PiBkZWxlZ2F0ZS5zY2hlZHVsZVRhc2sodGFyZ2V0LCB0YXNrKSxcbiAgICBvbkludm9rZVRhc2s6IChkZWxlZ2F0ZSwgXywgdGFyZ2V0LCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykgPT4gZGVsZWdhdGUuaW52b2tlVGFzayh0YXJnZXQsIHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKSxcbiAgICBvbkNhbmNlbFRhc2s6IChkZWxlZ2F0ZSwgXywgdGFyZ2V0LCB0YXNrKSA9PiBkZWxlZ2F0ZS5jYW5jZWxUYXNrKHRhcmdldCwgdGFzaylcbiAgfTtcbiAgY2xhc3MgX1pvbmVEZWxlZ2F0ZSB7XG4gICAgZ2V0IHpvbmUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fem9uZTtcbiAgICB9XG4gICAgY29uc3RydWN0b3Ioem9uZSwgcGFyZW50RGVsZWdhdGUsIHpvbmVTcGVjKSB7XG4gICAgICB0aGlzLl90YXNrQ291bnRzID0ge1xuICAgICAgICAnbWljcm9UYXNrJzogMCxcbiAgICAgICAgJ21hY3JvVGFzayc6IDAsXG4gICAgICAgICdldmVudFRhc2snOiAwXG4gICAgICB9O1xuICAgICAgdGhpcy5fem9uZSA9IHpvbmU7XG4gICAgICB0aGlzLl9wYXJlbnREZWxlZ2F0ZSA9IHBhcmVudERlbGVnYXRlO1xuICAgICAgdGhpcy5fZm9ya1pTID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjICYmIHpvbmVTcGVjLm9uRm9yayA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2ZvcmtaUyk7XG4gICAgICB0aGlzLl9mb3JrRGxndCA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkZvcmsgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9mb3JrRGxndCk7XG4gICAgICB0aGlzLl9mb3JrQ3VyclpvbmUgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25Gb3JrID8gdGhpcy5fem9uZSA6IHBhcmVudERlbGVnYXRlLl9mb3JrQ3VyclpvbmUpO1xuICAgICAgdGhpcy5faW50ZXJjZXB0WlMgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnRlcmNlcHQgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9pbnRlcmNlcHRaUyk7XG4gICAgICB0aGlzLl9pbnRlcmNlcHREbGd0ID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW50ZXJjZXB0ID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5faW50ZXJjZXB0RGxndCk7XG4gICAgICB0aGlzLl9pbnRlcmNlcHRDdXJyWm9uZSA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludGVyY2VwdCA/IHRoaXMuX3pvbmUgOiBwYXJlbnREZWxlZ2F0ZS5faW50ZXJjZXB0Q3VyclpvbmUpO1xuICAgICAgdGhpcy5faW52b2tlWlMgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2UgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VaUyk7XG4gICAgICB0aGlzLl9pbnZva2VEbGd0ID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlRGxndCk7XG4gICAgICB0aGlzLl9pbnZva2VDdXJyWm9uZSA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZSA/IHRoaXMuX3pvbmUgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlQ3VyclpvbmUpO1xuICAgICAgdGhpcy5faGFuZGxlRXJyb3JaUyA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkhhbmRsZUVycm9yID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5faGFuZGxlRXJyb3JaUyk7XG4gICAgICB0aGlzLl9oYW5kbGVFcnJvckRsZ3QgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25IYW5kbGVFcnJvciA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2hhbmRsZUVycm9yRGxndCk7XG4gICAgICB0aGlzLl9oYW5kbGVFcnJvckN1cnJab25lID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSGFuZGxlRXJyb3IgPyB0aGlzLl96b25lIDogcGFyZW50RGVsZWdhdGUuX2hhbmRsZUVycm9yQ3VyclpvbmUpO1xuICAgICAgdGhpcy5fc2NoZWR1bGVUYXNrWlMgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25TY2hlZHVsZVRhc2sgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9zY2hlZHVsZVRhc2taUyk7XG4gICAgICB0aGlzLl9zY2hlZHVsZVRhc2tEbGd0ID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uU2NoZWR1bGVUYXNrID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5fc2NoZWR1bGVUYXNrRGxndCk7XG4gICAgICB0aGlzLl9zY2hlZHVsZVRhc2tDdXJyWm9uZSA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vblNjaGVkdWxlVGFzayA/IHRoaXMuX3pvbmUgOiBwYXJlbnREZWxlZ2F0ZS5fc2NoZWR1bGVUYXNrQ3VyclpvbmUpO1xuICAgICAgdGhpcy5faW52b2tlVGFza1pTID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlVGFzayA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZVRhc2taUyk7XG4gICAgICB0aGlzLl9pbnZva2VUYXNrRGxndCA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZVRhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VUYXNrRGxndCk7XG4gICAgICB0aGlzLl9pbnZva2VUYXNrQ3VyclpvbmUgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2VUYXNrID8gdGhpcy5fem9uZSA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VUYXNrQ3VyclpvbmUpO1xuICAgICAgdGhpcy5fY2FuY2VsVGFza1pTID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uQ2FuY2VsVGFzayA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2NhbmNlbFRhc2taUyk7XG4gICAgICB0aGlzLl9jYW5jZWxUYXNrRGxndCA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkNhbmNlbFRhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9jYW5jZWxUYXNrRGxndCk7XG4gICAgICB0aGlzLl9jYW5jZWxUYXNrQ3VyclpvbmUgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25DYW5jZWxUYXNrID8gdGhpcy5fem9uZSA6IHBhcmVudERlbGVnYXRlLl9jYW5jZWxUYXNrQ3VyclpvbmUpO1xuICAgICAgdGhpcy5faGFzVGFza1pTID0gbnVsbDtcbiAgICAgIHRoaXMuX2hhc1Rhc2tEbGd0ID0gbnVsbDtcbiAgICAgIHRoaXMuX2hhc1Rhc2tEbGd0T3duZXIgPSBudWxsO1xuICAgICAgdGhpcy5faGFzVGFza0N1cnJab25lID0gbnVsbDtcbiAgICAgIGNvbnN0IHpvbmVTcGVjSGFzVGFzayA9IHpvbmVTcGVjICYmIHpvbmVTcGVjLm9uSGFzVGFzaztcbiAgICAgIGNvbnN0IHBhcmVudEhhc1Rhc2sgPSBwYXJlbnREZWxlZ2F0ZSAmJiBwYXJlbnREZWxlZ2F0ZS5faGFzVGFza1pTO1xuICAgICAgaWYgKHpvbmVTcGVjSGFzVGFzayB8fCBwYXJlbnRIYXNUYXNrKSB7XG4gICAgICAgIC8vIElmIHdlIG5lZWQgdG8gcmVwb3J0IGhhc1Rhc2ssIHRoYW4gdGhpcyBaUyBuZWVkcyB0byBkbyByZWYgY291bnRpbmcgb24gdGFza3MuIEluIHN1Y2hcbiAgICAgICAgLy8gYSBjYXNlIGFsbCB0YXNrIHJlbGF0ZWQgaW50ZXJjZXB0b3JzIG11c3QgZ28gdGhyb3VnaCB0aGlzIFpELiBXZSBjYW4ndCBzaG9ydCBjaXJjdWl0IGl0LlxuICAgICAgICB0aGlzLl9oYXNUYXNrWlMgPSB6b25lU3BlY0hhc1Rhc2sgPyB6b25lU3BlYyA6IERFTEVHQVRFX1pTO1xuICAgICAgICB0aGlzLl9oYXNUYXNrRGxndCA9IHBhcmVudERlbGVnYXRlO1xuICAgICAgICB0aGlzLl9oYXNUYXNrRGxndE93bmVyID0gdGhpcztcbiAgICAgICAgdGhpcy5faGFzVGFza0N1cnJab25lID0gdGhpcy5fem9uZTtcbiAgICAgICAgaWYgKCF6b25lU3BlYy5vblNjaGVkdWxlVGFzaykge1xuICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza1pTID0gREVMRUdBVEVfWlM7XG4gICAgICAgICAgdGhpcy5fc2NoZWR1bGVUYXNrRGxndCA9IHBhcmVudERlbGVnYXRlO1xuICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza0N1cnJab25lID0gdGhpcy5fem9uZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXpvbmVTcGVjLm9uSW52b2tlVGFzaykge1xuICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2taUyA9IERFTEVHQVRFX1pTO1xuICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2tEbGd0ID0gcGFyZW50RGVsZWdhdGU7XG4gICAgICAgICAgdGhpcy5faW52b2tlVGFza0N1cnJab25lID0gdGhpcy5fem9uZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXpvbmVTcGVjLm9uQ2FuY2VsVGFzaykge1xuICAgICAgICAgIHRoaXMuX2NhbmNlbFRhc2taUyA9IERFTEVHQVRFX1pTO1xuICAgICAgICAgIHRoaXMuX2NhbmNlbFRhc2tEbGd0ID0gcGFyZW50RGVsZWdhdGU7XG4gICAgICAgICAgdGhpcy5fY2FuY2VsVGFza0N1cnJab25lID0gdGhpcy5fem9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3JrKHRhcmdldFpvbmUsIHpvbmVTcGVjKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZm9ya1pTID8gdGhpcy5fZm9ya1pTLm9uRm9yayh0aGlzLl9mb3JrRGxndCwgdGhpcy56b25lLCB0YXJnZXRab25lLCB6b25lU3BlYykgOiBuZXcgWm9uZUltcGwodGFyZ2V0Wm9uZSwgem9uZVNwZWMpO1xuICAgIH1cbiAgICBpbnRlcmNlcHQodGFyZ2V0Wm9uZSwgY2FsbGJhY2ssIHNvdXJjZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2ludGVyY2VwdFpTID8gdGhpcy5faW50ZXJjZXB0WlMub25JbnRlcmNlcHQodGhpcy5faW50ZXJjZXB0RGxndCwgdGhpcy5faW50ZXJjZXB0Q3VyclpvbmUsIHRhcmdldFpvbmUsIGNhbGxiYWNrLCBzb3VyY2UpIDogY2FsbGJhY2s7XG4gICAgfVxuICAgIGludm9rZSh0YXJnZXRab25lLCBjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZVpTID8gdGhpcy5faW52b2tlWlMub25JbnZva2UodGhpcy5faW52b2tlRGxndCwgdGhpcy5faW52b2tlQ3VyclpvbmUsIHRhcmdldFpvbmUsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKSA6IGNhbGxiYWNrLmFwcGx5KGFwcGx5VGhpcywgYXBwbHlBcmdzKTtcbiAgICB9XG4gICAgaGFuZGxlRXJyb3IodGFyZ2V0Wm9uZSwgZXJyb3IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvclpTID8gdGhpcy5faGFuZGxlRXJyb3JaUy5vbkhhbmRsZUVycm9yKHRoaXMuX2hhbmRsZUVycm9yRGxndCwgdGhpcy5faGFuZGxlRXJyb3JDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpIDogdHJ1ZTtcbiAgICB9XG4gICAgc2NoZWR1bGVUYXNrKHRhcmdldFpvbmUsIHRhc2spIHtcbiAgICAgIGxldCByZXR1cm5UYXNrID0gdGFzaztcbiAgICAgIGlmICh0aGlzLl9zY2hlZHVsZVRhc2taUykge1xuICAgICAgICBpZiAodGhpcy5faGFzVGFza1pTKSB7XG4gICAgICAgICAgcmV0dXJuVGFzay5fem9uZURlbGVnYXRlcy5wdXNoKHRoaXMuX2hhc1Rhc2tEbGd0T3duZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVyblRhc2sgPSB0aGlzLl9zY2hlZHVsZVRhc2taUy5vblNjaGVkdWxlVGFzayh0aGlzLl9zY2hlZHVsZVRhc2tEbGd0LCB0aGlzLl9zY2hlZHVsZVRhc2tDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgdGFzayk7XG4gICAgICAgIGlmICghcmV0dXJuVGFzaykgcmV0dXJuVGFzayA9IHRhc2s7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGFzay5zY2hlZHVsZUZuKSB7XG4gICAgICAgICAgdGFzay5zY2hlZHVsZUZuKHRhc2spO1xuICAgICAgICB9IGVsc2UgaWYgKHRhc2sudHlwZSA9PSBtaWNyb1Rhc2spIHtcbiAgICAgICAgICBzY2hlZHVsZU1pY3JvVGFzayh0YXNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Rhc2sgaXMgbWlzc2luZyBzY2hlZHVsZUZuLicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0dXJuVGFzaztcbiAgICB9XG4gICAgaW52b2tlVGFzayh0YXJnZXRab25lLCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykge1xuICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZVRhc2taUyA/IHRoaXMuX2ludm9rZVRhc2taUy5vbkludm9rZVRhc2sodGhpcy5faW52b2tlVGFza0RsZ3QsIHRoaXMuX2ludm9rZVRhc2tDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgdGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpIDogdGFzay5jYWxsYmFjay5hcHBseShhcHBseVRoaXMsIGFwcGx5QXJncyk7XG4gICAgfVxuICAgIGNhbmNlbFRhc2sodGFyZ2V0Wm9uZSwgdGFzaykge1xuICAgICAgbGV0IHZhbHVlO1xuICAgICAgaWYgKHRoaXMuX2NhbmNlbFRhc2taUykge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuX2NhbmNlbFRhc2taUy5vbkNhbmNlbFRhc2sodGhpcy5fY2FuY2VsVGFza0RsZ3QsIHRoaXMuX2NhbmNlbFRhc2tDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgdGFzayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXRhc2suY2FuY2VsRm4pIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcignVGFzayBpcyBub3QgY2FuY2VsYWJsZScpO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0gdGFzay5jYW5jZWxGbih0YXNrKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaGFzVGFzayh0YXJnZXRab25lLCBpc0VtcHR5KSB7XG4gICAgICAvLyBoYXNUYXNrIHNob3VsZCBub3QgdGhyb3cgZXJyb3Igc28gb3RoZXIgWm9uZURlbGVnYXRlXG4gICAgICAvLyBjYW4gc3RpbGwgdHJpZ2dlciBoYXNUYXNrIGNhbGxiYWNrXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9oYXNUYXNrWlMgJiYgdGhpcy5faGFzVGFza1pTLm9uSGFzVGFzayh0aGlzLl9oYXNUYXNrRGxndCwgdGhpcy5faGFzVGFza0N1cnJab25lLCB0YXJnZXRab25lLCBpc0VtcHR5KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aGlzLmhhbmRsZUVycm9yKHRhcmdldFpvbmUsIGVycik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyZXF1aXJlLWludGVybmFsLXdpdGgtdW5kZXJzY29yZVxuICAgIF91cGRhdGVUYXNrQ291bnQodHlwZSwgY291bnQpIHtcbiAgICAgIGNvbnN0IGNvdW50cyA9IHRoaXMuX3Rhc2tDb3VudHM7XG4gICAgICBjb25zdCBwcmV2ID0gY291bnRzW3R5cGVdO1xuICAgICAgY29uc3QgbmV4dCA9IGNvdW50c1t0eXBlXSA9IHByZXYgKyBjb3VudDtcbiAgICAgIGlmIChuZXh0IDwgMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01vcmUgdGFza3MgZXhlY3V0ZWQgdGhlbiB3ZXJlIHNjaGVkdWxlZC4nKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcmV2ID09IDAgfHwgbmV4dCA9PSAwKSB7XG4gICAgICAgIGNvbnN0IGlzRW1wdHkgPSB7XG4gICAgICAgICAgbWljcm9UYXNrOiBjb3VudHNbJ21pY3JvVGFzayddID4gMCxcbiAgICAgICAgICBtYWNyb1Rhc2s6IGNvdW50c1snbWFjcm9UYXNrJ10gPiAwLFxuICAgICAgICAgIGV2ZW50VGFzazogY291bnRzWydldmVudFRhc2snXSA+IDAsXG4gICAgICAgICAgY2hhbmdlOiB0eXBlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFzVGFzayh0aGlzLl96b25lLCBpc0VtcHR5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2xhc3MgWm9uZVRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIHNvdXJjZSwgY2FsbGJhY2ssIG9wdGlvbnMsIHNjaGVkdWxlRm4sIGNhbmNlbEZuKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmVxdWlyZS1pbnRlcm5hbC13aXRoLXVuZGVyc2NvcmVcbiAgICAgIHRoaXMuX3pvbmUgPSBudWxsO1xuICAgICAgdGhpcy5ydW5Db3VudCA9IDA7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmVxdWlyZS1pbnRlcm5hbC13aXRoLXVuZGVyc2NvcmVcbiAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZXMgPSBudWxsO1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnJlcXVpcmUtaW50ZXJuYWwtd2l0aC11bmRlcnNjb3JlXG4gICAgICB0aGlzLl9zdGF0ZSA9ICdub3RTY2hlZHVsZWQnO1xuICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5kYXRhID0gb3B0aW9ucztcbiAgICAgIHRoaXMuc2NoZWR1bGVGbiA9IHNjaGVkdWxlRm47XG4gICAgICB0aGlzLmNhbmNlbEZuID0gY2FuY2VsRm47XG4gICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgLy8gVE9ETzogQEppYUxpUGFzc2lvbiBvcHRpb25zIHNob3VsZCBoYXZlIGludGVyZmFjZVxuICAgICAgaWYgKHR5cGUgPT09IGV2ZW50VGFzayAmJiBvcHRpb25zICYmIG9wdGlvbnMudXNlRykge1xuICAgICAgICB0aGlzLmludm9rZSA9IFpvbmVUYXNrLmludm9rZVRhc2s7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmludm9rZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gWm9uZVRhc2suaW52b2tlVGFzay5jYWxsKGdsb2JhbCwgc2VsZiwgdGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGludm9rZVRhc2sodGFzaywgdGFyZ2V0LCBhcmdzKSB7XG4gICAgICBpZiAoIXRhc2spIHtcbiAgICAgICAgdGFzayA9IHRoaXM7XG4gICAgICB9XG4gICAgICBfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzKys7XG4gICAgICB0cnkge1xuICAgICAgICB0YXNrLnJ1bkNvdW50Kys7XG4gICAgICAgIHJldHVybiB0YXNrLnpvbmUucnVuVGFzayh0YXNrLCB0YXJnZXQsIGFyZ3MpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMgPT0gMSkge1xuICAgICAgICAgIGRyYWluTWljcm9UYXNrUXVldWUoKTtcbiAgICAgICAgfVxuICAgICAgICBfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzLS07XG4gICAgICB9XG4gICAgfVxuICAgIGdldCB6b25lKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3pvbmU7XG4gICAgfVxuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9XG4gICAgY2FuY2VsU2NoZWR1bGVSZXF1ZXN0KCkge1xuICAgICAgdGhpcy5fdHJhbnNpdGlvblRvKG5vdFNjaGVkdWxlZCwgc2NoZWR1bGluZyk7XG4gICAgfVxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyZXF1aXJlLWludGVybmFsLXdpdGgtdW5kZXJzY29yZVxuICAgIF90cmFuc2l0aW9uVG8odG9TdGF0ZSwgZnJvbVN0YXRlMSwgZnJvbVN0YXRlMikge1xuICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBmcm9tU3RhdGUxIHx8IHRoaXMuX3N0YXRlID09PSBmcm9tU3RhdGUyKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gdG9TdGF0ZTtcbiAgICAgICAgaWYgKHRvU3RhdGUgPT0gbm90U2NoZWR1bGVkKSB7XG4gICAgICAgICAgdGhpcy5fem9uZURlbGVnYXRlcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0aGlzLnR5cGV9ICcke3RoaXMuc291cmNlfSc6IGNhbiBub3QgdHJhbnNpdGlvbiB0byAnJHt0b1N0YXRlfScsIGV4cGVjdGluZyBzdGF0ZSAnJHtmcm9tU3RhdGUxfScke2Zyb21TdGF0ZTIgPyBcIiBvciAnXCIgKyBmcm9tU3RhdGUyICsgXCInXCIgOiAnJ30sIHdhcyAnJHt0aGlzLl9zdGF0ZX0nLmApO1xuICAgICAgfVxuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgIGlmICh0aGlzLmRhdGEgJiYgdHlwZW9mIHRoaXMuZGF0YS5oYW5kbGVJZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5oYW5kbGVJZC50b1N0cmluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gYWRkIHRvSlNPTiBtZXRob2QgdG8gcHJldmVudCBjeWNsaWMgZXJyb3Igd2hlblxuICAgIC8vIGNhbGwgSlNPTi5zdHJpbmdpZnkoem9uZVRhc2spXG4gICAgdG9KU09OKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgICAgem9uZTogdGhpcy56b25lLm5hbWUsXG4gICAgICAgIHJ1bkNvdW50OiB0aGlzLnJ1bkNvdW50XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vLyAgTUlDUk9UQVNLIFFVRVVFXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgY29uc3Qgc3ltYm9sU2V0VGltZW91dCA9IF9fc3ltYm9sX18oJ3NldFRpbWVvdXQnKTtcbiAgY29uc3Qgc3ltYm9sUHJvbWlzZSA9IF9fc3ltYm9sX18oJ1Byb21pc2UnKTtcbiAgY29uc3Qgc3ltYm9sVGhlbiA9IF9fc3ltYm9sX18oJ3RoZW4nKTtcbiAgbGV0IF9taWNyb1Rhc2tRdWV1ZSA9IFtdO1xuICBsZXQgX2lzRHJhaW5pbmdNaWNyb3Rhc2tRdWV1ZSA9IGZhbHNlO1xuICBsZXQgbmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlO1xuICBmdW5jdGlvbiBuYXRpdmVTY2hlZHVsZU1pY3JvVGFzayhmdW5jKSB7XG4gICAgaWYgKCFuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2UpIHtcbiAgICAgIGlmIChnbG9iYWxbc3ltYm9sUHJvbWlzZV0pIHtcbiAgICAgICAgbmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlID0gZ2xvYmFsW3N5bWJvbFByb21pc2VdLnJlc29sdmUoMCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2UpIHtcbiAgICAgIGxldCBuYXRpdmVUaGVuID0gbmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlW3N5bWJvbFRoZW5dO1xuICAgICAgaWYgKCFuYXRpdmVUaGVuKSB7XG4gICAgICAgIC8vIG5hdGl2ZSBQcm9taXNlIGlzIG5vdCBwYXRjaGFibGUsIHdlIG5lZWQgdG8gdXNlIGB0aGVuYCBkaXJlY3RseVxuICAgICAgICAvLyBpc3N1ZSAxMDc4XG4gICAgICAgIG5hdGl2ZVRoZW4gPSBuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2VbJ3RoZW4nXTtcbiAgICAgIH1cbiAgICAgIG5hdGl2ZVRoZW4uY2FsbChuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2UsIGZ1bmMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnbG9iYWxbc3ltYm9sU2V0VGltZW91dF0oZnVuYywgMCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHNjaGVkdWxlTWljcm9UYXNrKHRhc2spIHtcbiAgICAvLyBpZiB3ZSBhcmUgbm90IHJ1bm5pbmcgaW4gYW55IHRhc2ssIGFuZCB0aGVyZSBoYXMgbm90IGJlZW4gYW55dGhpbmcgc2NoZWR1bGVkXG4gICAgLy8gd2UgbXVzdCBib290c3RyYXAgdGhlIGluaXRpYWwgdGFzayBjcmVhdGlvbiBieSBtYW51YWxseSBzY2hlZHVsaW5nIHRoZSBkcmFpblxuICAgIGlmIChfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzID09PSAwICYmIF9taWNyb1Rhc2tRdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIFdlIGFyZSBub3QgcnVubmluZyBpbiBUYXNrLCBzbyB3ZSBuZWVkIHRvIGtpY2tzdGFydCB0aGUgbWljcm90YXNrIHF1ZXVlLlxuICAgICAgbmF0aXZlU2NoZWR1bGVNaWNyb1Rhc2soZHJhaW5NaWNyb1Rhc2tRdWV1ZSk7XG4gICAgfVxuICAgIHRhc2sgJiYgX21pY3JvVGFza1F1ZXVlLnB1c2godGFzayk7XG4gIH1cbiAgZnVuY3Rpb24gZHJhaW5NaWNyb1Rhc2tRdWV1ZSgpIHtcbiAgICBpZiAoIV9pc0RyYWluaW5nTWljcm90YXNrUXVldWUpIHtcbiAgICAgIF9pc0RyYWluaW5nTWljcm90YXNrUXVldWUgPSB0cnVlO1xuICAgICAgd2hpbGUgKF9taWNyb1Rhc2tRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgcXVldWUgPSBfbWljcm9UYXNrUXVldWU7XG4gICAgICAgIF9taWNyb1Rhc2tRdWV1ZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgdGFzayA9IHF1ZXVlW2ldO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0YXNrLnpvbmUucnVuVGFzayh0YXNrLCBudWxsLCBudWxsKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgX2FwaS5vblVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF9hcGkubWljcm90YXNrRHJhaW5Eb25lKCk7XG4gICAgICBfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8vICBCT09UU1RSQVBcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBjb25zdCBOT19aT05FID0ge1xuICAgIG5hbWU6ICdOTyBaT05FJ1xuICB9O1xuICBjb25zdCBub3RTY2hlZHVsZWQgPSAnbm90U2NoZWR1bGVkJyxcbiAgICBzY2hlZHVsaW5nID0gJ3NjaGVkdWxpbmcnLFxuICAgIHNjaGVkdWxlZCA9ICdzY2hlZHVsZWQnLFxuICAgIHJ1bm5pbmcgPSAncnVubmluZycsXG4gICAgY2FuY2VsaW5nID0gJ2NhbmNlbGluZycsXG4gICAgdW5rbm93biA9ICd1bmtub3duJztcbiAgY29uc3QgbWljcm9UYXNrID0gJ21pY3JvVGFzaycsXG4gICAgbWFjcm9UYXNrID0gJ21hY3JvVGFzaycsXG4gICAgZXZlbnRUYXNrID0gJ2V2ZW50VGFzayc7XG4gIGNvbnN0IHBhdGNoZXMgPSB7fTtcbiAgY29uc3QgX2FwaSA9IHtcbiAgICBzeW1ib2w6IF9fc3ltYm9sX18sXG4gICAgY3VycmVudFpvbmVGcmFtZTogKCkgPT4gX2N1cnJlbnRab25lRnJhbWUsXG4gICAgb25VbmhhbmRsZWRFcnJvcjogbm9vcCxcbiAgICBtaWNyb3Rhc2tEcmFpbkRvbmU6IG5vb3AsXG4gICAgc2NoZWR1bGVNaWNyb1Rhc2s6IHNjaGVkdWxlTWljcm9UYXNrLFxuICAgIHNob3dVbmNhdWdodEVycm9yOiAoKSA9PiAhWm9uZUltcGxbX19zeW1ib2xfXygnaWdub3JlQ29uc29sZUVycm9yVW5jYXVnaHRFcnJvcicpXSxcbiAgICBwYXRjaEV2ZW50VGFyZ2V0OiAoKSA9PiBbXSxcbiAgICBwYXRjaE9uUHJvcGVydGllczogbm9vcCxcbiAgICBwYXRjaE1ldGhvZDogKCkgPT4gbm9vcCxcbiAgICBiaW5kQXJndW1lbnRzOiAoKSA9PiBbXSxcbiAgICBwYXRjaFRoZW46ICgpID0+IG5vb3AsXG4gICAgcGF0Y2hNYWNyb1Rhc2s6ICgpID0+IG5vb3AsXG4gICAgcGF0Y2hFdmVudFByb3RvdHlwZTogKCkgPT4gbm9vcCxcbiAgICBpc0lFT3JFZGdlOiAoKSA9PiBmYWxzZSxcbiAgICBnZXRHbG9iYWxPYmplY3RzOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgT2JqZWN0RGVmaW5lUHJvcGVydHk6ICgpID0+IG5vb3AsXG4gICAgT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgT2JqZWN0Q3JlYXRlOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgQXJyYXlTbGljZTogKCkgPT4gW10sXG4gICAgcGF0Y2hDbGFzczogKCkgPT4gbm9vcCxcbiAgICB3cmFwV2l0aEN1cnJlbnRab25lOiAoKSA9PiBub29wLFxuICAgIGZpbHRlclByb3BlcnRpZXM6ICgpID0+IFtdLFxuICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZDogKCkgPT4gbm9vcCxcbiAgICBfcmVkZWZpbmVQcm9wZXJ0eTogKCkgPT4gbm9vcCxcbiAgICBwYXRjaENhbGxiYWNrczogKCkgPT4gbm9vcCxcbiAgICBuYXRpdmVTY2hlZHVsZU1pY3JvVGFzazogbmF0aXZlU2NoZWR1bGVNaWNyb1Rhc2tcbiAgfTtcbiAgbGV0IF9jdXJyZW50Wm9uZUZyYW1lID0ge1xuICAgIHBhcmVudDogbnVsbCxcbiAgICB6b25lOiBuZXcgWm9uZUltcGwobnVsbCwgbnVsbClcbiAgfTtcbiAgbGV0IF9jdXJyZW50VGFzayA9IG51bGw7XG4gIGxldCBfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzID0gMDtcbiAgZnVuY3Rpb24gbm9vcCgpIHt9XG4gIHBlcmZvcm1hbmNlTWVhc3VyZSgnWm9uZScsICdab25lJyk7XG4gIHJldHVybiBab25lSW1wbDtcbn1cbmZ1bmN0aW9uIGxvYWRab25lKCkge1xuICAvLyBpZiBnbG9iYWxbJ1pvbmUnXSBhbHJlYWR5IGV4aXN0cyAobWF5YmUgem9uZS5qcyB3YXMgYWxyZWFkeSBsb2FkZWQgb3JcbiAgLy8gc29tZSBvdGhlciBsaWIgYWxzbyByZWdpc3RlcmVkIGEgZ2xvYmFsIG9iamVjdCBuYW1lZCBab25lKSwgd2UgbWF5IG5lZWRcbiAgLy8gdG8gdGhyb3cgYW4gZXJyb3IsIGJ1dCBzb21ldGltZXMgdXNlciBtYXkgbm90IHdhbnQgdGhpcyBlcnJvci5cbiAgLy8gRm9yIGV4YW1wbGUsXG4gIC8vIHdlIGhhdmUgdHdvIHdlYiBwYWdlcywgcGFnZTEgaW5jbHVkZXMgem9uZS5qcywgcGFnZTIgZG9lc24ndC5cbiAgLy8gYW5kIHRoZSAxc3QgdGltZSB1c2VyIGxvYWQgcGFnZTEgYW5kIHBhZ2UyLCBldmVyeXRoaW5nIHdvcmsgZmluZSxcbiAgLy8gYnV0IHdoZW4gdXNlciBsb2FkIHBhZ2UyIGFnYWluLCBlcnJvciBvY2N1cnMgYmVjYXVzZSBnbG9iYWxbJ1pvbmUnXSBhbHJlYWR5IGV4aXN0cy5cbiAgLy8gc28gd2UgYWRkIGEgZmxhZyB0byBsZXQgdXNlciBjaG9vc2Ugd2hldGhlciB0byB0aHJvdyB0aGlzIGVycm9yIG9yIG5vdC5cbiAgLy8gQnkgZGVmYXVsdCwgaWYgZXhpc3RpbmcgWm9uZSBpcyBmcm9tIHpvbmUuanMsIHdlIHdpbGwgbm90IHRocm93IHRoZSBlcnJvci5cbiAgY29uc3QgZ2xvYmFsID0gZ2xvYmFsVGhpcztcbiAgY29uc3QgY2hlY2tEdXBsaWNhdGUgPSBnbG9iYWxbX19zeW1ib2xfXygnZm9yY2VEdXBsaWNhdGVab25lQ2hlY2snKV0gPT09IHRydWU7XG4gIGlmIChnbG9iYWxbJ1pvbmUnXSAmJiAoY2hlY2tEdXBsaWNhdGUgfHwgdHlwZW9mIGdsb2JhbFsnWm9uZSddLl9fc3ltYm9sX18gIT09ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdab25lIGFscmVhZHkgbG9hZGVkLicpO1xuICB9XG4gIC8vIEluaXRpYWxpemUgZ2xvYmFsIGBab25lYCBjb25zdGFudC5cbiAgZ2xvYmFsWydab25lJ10gPz89IGluaXRab25lKCk7XG4gIHJldHVybiBnbG9iYWxbJ1pvbmUnXTtcbn1cblxuLyoqXG4gKiBTdXBwcmVzcyBjbG9zdXJlIGNvbXBpbGVyIGVycm9ycyBhYm91dCB1bmtub3duICdab25lJyB2YXJpYWJsZVxuICogQGZpbGVvdmVydmlld1xuICogQHN1cHByZXNzIHt1bmRlZmluZWRWYXJzLGdsb2JhbFRoaXMsbWlzc2luZ1JlcXVpcmV9XG4gKi9cbi8vIGlzc3VlICM5ODksIHRvIHJlZHVjZSBidW5kbGUgc2l6ZSwgdXNlIHNob3J0IG5hbWVcbi8qKiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICovXG5jb25zdCBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuLyoqIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAqL1xuY29uc3QgT2JqZWN0RGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4vKiogT2JqZWN0LmdldFByb3RvdHlwZU9mICovXG5jb25zdCBPYmplY3RHZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbi8qKiBPYmplY3QuY3JlYXRlICovXG5jb25zdCBPYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuLyoqIEFycmF5LnByb3RvdHlwZS5zbGljZSAqL1xuY29uc3QgQXJyYXlTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbi8qKiBhZGRFdmVudExpc3RlbmVyIHN0cmluZyBjb25zdCAqL1xuY29uc3QgQUREX0VWRU5UX0xJU1RFTkVSX1NUUiA9ICdhZGRFdmVudExpc3RlbmVyJztcbi8qKiByZW1vdmVFdmVudExpc3RlbmVyIHN0cmluZyBjb25zdCAqL1xuY29uc3QgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUiA9ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbi8qKiB6b25lU3ltYm9sIGFkZEV2ZW50TGlzdGVuZXIgKi9cbmNvbnN0IFpPTkVfU1lNQk9MX0FERF9FVkVOVF9MSVNURU5FUiA9IF9fc3ltYm9sX18oQUREX0VWRU5UX0xJU1RFTkVSX1NUUik7XG4vKiogem9uZVN5bWJvbCByZW1vdmVFdmVudExpc3RlbmVyICovXG5jb25zdCBaT05FX1NZTUJPTF9SRU1PVkVfRVZFTlRfTElTVEVORVIgPSBfX3N5bWJvbF9fKFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIpO1xuLyoqIHRydWUgc3RyaW5nIGNvbnN0ICovXG5jb25zdCBUUlVFX1NUUiA9ICd0cnVlJztcbi8qKiBmYWxzZSBzdHJpbmcgY29uc3QgKi9cbmNvbnN0IEZBTFNFX1NUUiA9ICdmYWxzZSc7XG4vKiogWm9uZSBzeW1ib2wgcHJlZml4IHN0cmluZyBjb25zdC4gKi9cbmNvbnN0IFpPTkVfU1lNQk9MX1BSRUZJWCA9IF9fc3ltYm9sX18oJycpO1xuZnVuY3Rpb24gd3JhcFdpdGhDdXJyZW50Wm9uZShjYWxsYmFjaywgc291cmNlKSB7XG4gIHJldHVybiBab25lLmN1cnJlbnQud3JhcChjYWxsYmFjaywgc291cmNlKTtcbn1cbmZ1bmN0aW9uIHNjaGVkdWxlTWFjcm9UYXNrV2l0aEN1cnJlbnRab25lKHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpIHtcbiAgcmV0dXJuIFpvbmUuY3VycmVudC5zY2hlZHVsZU1hY3JvVGFzayhzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKTtcbn1cbmNvbnN0IHpvbmVTeW1ib2wgPSBfX3N5bWJvbF9fO1xuY29uc3QgaXNXaW5kb3dFeGlzdHMgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbmNvbnN0IGludGVybmFsV2luZG93ID0gaXNXaW5kb3dFeGlzdHMgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG5jb25zdCBfZ2xvYmFsID0gaXNXaW5kb3dFeGlzdHMgJiYgaW50ZXJuYWxXaW5kb3cgfHwgZ2xvYmFsVGhpcztcbmNvbnN0IFJFTU9WRV9BVFRSSUJVVEUgPSAncmVtb3ZlQXR0cmlidXRlJztcbmZ1bmN0aW9uIGJpbmRBcmd1bWVudHMoYXJncywgc291cmNlKSB7XG4gIGZvciAobGV0IGkgPSBhcmdzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKHR5cGVvZiBhcmdzW2ldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzW2ldID0gd3JhcFdpdGhDdXJyZW50Wm9uZShhcmdzW2ldLCBzb3VyY2UgKyAnXycgKyBpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFyZ3M7XG59XG5mdW5jdGlvbiBwYXRjaFByb3RvdHlwZShwcm90b3R5cGUsIGZuTmFtZXMpIHtcbiAgY29uc3Qgc291cmNlID0gcHJvdG90eXBlLmNvbnN0cnVjdG9yWyduYW1lJ107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZm5OYW1lcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5hbWUgPSBmbk5hbWVzW2ldO1xuICAgIGNvbnN0IGRlbGVnYXRlID0gcHJvdG90eXBlW25hbWVdO1xuICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgY29uc3QgcHJvdG90eXBlRGVzYyA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIG5hbWUpO1xuICAgICAgaWYgKCFpc1Byb3BlcnR5V3JpdGFibGUocHJvdG90eXBlRGVzYykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBwcm90b3R5cGVbbmFtZV0gPSAoZGVsZWdhdGUgPT4ge1xuICAgICAgICBjb25zdCBwYXRjaGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseSh0aGlzLCBiaW5kQXJndW1lbnRzKGFyZ3VtZW50cywgc291cmNlICsgJy4nICsgbmFtZSkpO1xuICAgICAgICB9O1xuICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocGF0Y2hlZCwgZGVsZWdhdGUpO1xuICAgICAgICByZXR1cm4gcGF0Y2hlZDtcbiAgICAgIH0pKGRlbGVnYXRlKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGlzUHJvcGVydHlXcml0YWJsZShwcm9wZXJ0eURlc2MpIHtcbiAgaWYgKCFwcm9wZXJ0eURlc2MpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAocHJvcGVydHlEZXNjLndyaXRhYmxlID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gISh0eXBlb2YgcHJvcGVydHlEZXNjLmdldCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcHJvcGVydHlEZXNjLnNldCA9PT0gJ3VuZGVmaW5lZCcpO1xufVxuY29uc3QgaXNXZWJXb3JrZXIgPSB0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZTtcbi8vIE1ha2Ugc3VyZSB0byBhY2Nlc3MgYHByb2Nlc3NgIHRocm91Z2ggYF9nbG9iYWxgIHNvIHRoYXQgV2ViUGFjayBkb2VzIG5vdCBhY2NpZGVudGFsbHkgYnJvd3NlcmlmeVxuLy8gdGhpcyBjb2RlLlxuY29uc3QgaXNOb2RlID0gISgnbncnIGluIF9nbG9iYWwpICYmIHR5cGVvZiBfZ2xvYmFsLnByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIF9nbG9iYWwucHJvY2Vzcy50b1N0cmluZygpID09PSAnW29iamVjdCBwcm9jZXNzXSc7XG5jb25zdCBpc0Jyb3dzZXIgPSAhaXNOb2RlICYmICFpc1dlYldvcmtlciAmJiAhIShpc1dpbmRvd0V4aXN0cyAmJiBpbnRlcm5hbFdpbmRvd1snSFRNTEVsZW1lbnQnXSk7XG4vLyB3ZSBhcmUgaW4gZWxlY3Ryb24gb2YgbncsIHNvIHdlIGFyZSBib3RoIGJyb3dzZXIgYW5kIG5vZGVqc1xuLy8gTWFrZSBzdXJlIHRvIGFjY2VzcyBgcHJvY2Vzc2AgdGhyb3VnaCBgX2dsb2JhbGAgc28gdGhhdCBXZWJQYWNrIGRvZXMgbm90IGFjY2lkZW50YWxseSBicm93c2VyaWZ5XG4vLyB0aGlzIGNvZGUuXG5jb25zdCBpc01peCA9IHR5cGVvZiBfZ2xvYmFsLnByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIF9nbG9iYWwucHJvY2Vzcy50b1N0cmluZygpID09PSAnW29iamVjdCBwcm9jZXNzXScgJiYgIWlzV2ViV29ya2VyICYmICEhKGlzV2luZG93RXhpc3RzICYmIGludGVybmFsV2luZG93WydIVE1MRWxlbWVudCddKTtcbmNvbnN0IHpvbmVTeW1ib2xFdmVudE5hbWVzJDEgPSB7fTtcbmNvbnN0IGVuYWJsZUJlZm9yZXVubG9hZFN5bWJvbCA9IHpvbmVTeW1ib2woJ2VuYWJsZV9iZWZvcmV1bmxvYWQnKTtcbmNvbnN0IHdyYXBGbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy85MTEsIGluIElFLCBzb21ldGltZXNcbiAgLy8gZXZlbnQgd2lsbCBiZSB1bmRlZmluZWQsIHNvIHdlIG5lZWQgdG8gdXNlIHdpbmRvdy5ldmVudFxuICBldmVudCA9IGV2ZW50IHx8IF9nbG9iYWwuZXZlbnQ7XG4gIGlmICghZXZlbnQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGV2ZW50TmFtZVN5bWJvbCA9IHpvbmVTeW1ib2xFdmVudE5hbWVzJDFbZXZlbnQudHlwZV07XG4gIGlmICghZXZlbnROYW1lU3ltYm9sKSB7XG4gICAgZXZlbnROYW1lU3ltYm9sID0gem9uZVN5bWJvbEV2ZW50TmFtZXMkMVtldmVudC50eXBlXSA9IHpvbmVTeW1ib2woJ09OX1BST1BFUlRZJyArIGV2ZW50LnR5cGUpO1xuICB9XG4gIGNvbnN0IHRhcmdldCA9IHRoaXMgfHwgZXZlbnQudGFyZ2V0IHx8IF9nbG9iYWw7XG4gIGNvbnN0IGxpc3RlbmVyID0gdGFyZ2V0W2V2ZW50TmFtZVN5bWJvbF07XG4gIGxldCByZXN1bHQ7XG4gIGlmIChpc0Jyb3dzZXIgJiYgdGFyZ2V0ID09PSBpbnRlcm5hbFdpbmRvdyAmJiBldmVudC50eXBlID09PSAnZXJyb3InKSB7XG4gICAgLy8gd2luZG93Lm9uZXJyb3IgaGF2ZSBkaWZmZXJlbnQgc2lnbmF0dXJlXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0dsb2JhbEV2ZW50SGFuZGxlcnMvb25lcnJvciN3aW5kb3cub25lcnJvclxuICAgIC8vIGFuZCBvbmVycm9yIGNhbGxiYWNrIHdpbGwgcHJldmVudCBkZWZhdWx0IHdoZW4gY2FsbGJhY2sgcmV0dXJuIHRydWVcbiAgICBjb25zdCBlcnJvckV2ZW50ID0gZXZlbnQ7XG4gICAgcmVzdWx0ID0gbGlzdGVuZXIgJiYgbGlzdGVuZXIuY2FsbCh0aGlzLCBlcnJvckV2ZW50Lm1lc3NhZ2UsIGVycm9yRXZlbnQuZmlsZW5hbWUsIGVycm9yRXZlbnQubGluZW5vLCBlcnJvckV2ZW50LmNvbG5vLCBlcnJvckV2ZW50LmVycm9yKTtcbiAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBsaXN0ZW5lciAmJiBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmIChcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy80NzU3OVxuICAgIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDExL1dELWh0bWw1LTIwMTEwNTI1L2hpc3RvcnkuaHRtbCNiZWZvcmV1bmxvYWRldmVudFxuICAgIC8vIFRoaXMgaXMgdGhlIG9ubHkgc3BlY2lmaWMgY2FzZSB3ZSBzaG91bGQgY2hlY2sgZm9yLiBUaGUgc3BlYyBkZWZpbmVzIHRoYXQgdGhlXG4gICAgLy8gYHJldHVyblZhbHVlYCBhdHRyaWJ1dGUgcmVwcmVzZW50cyB0aGUgbWVzc2FnZSB0byBzaG93IHRoZSB1c2VyLiBXaGVuIHRoZSBldmVudFxuICAgIC8vIGlzIGNyZWF0ZWQsIHRoaXMgYXR0cmlidXRlIG11c3QgYmUgc2V0IHRvIHRoZSBlbXB0eSBzdHJpbmcuXG4gICAgZXZlbnQudHlwZSA9PT0gJ2JlZm9yZXVubG9hZCcgJiZcbiAgICAvLyBUbyBwcmV2ZW50IGFueSBicmVha2luZyBjaGFuZ2VzIHJlc3VsdGluZyBmcm9tIHRoaXMgY2hhbmdlLCBnaXZlbiB0aGF0XG4gICAgLy8gaXQgd2FzIGFscmVhZHkgY2F1c2luZyBhIHNpZ25pZmljYW50IG51bWJlciBvZiBmYWlsdXJlcyBpbiBHMywgd2UgaGF2ZSBoaWRkZW5cbiAgICAvLyB0aGF0IGJlaGF2aW9yIGJlaGluZCBhIGdsb2JhbCBjb25maWd1cmF0aW9uIGZsYWcuIENvbnN1bWVycyBjYW4gZW5hYmxlIHRoaXNcbiAgICAvLyBmbGFnIGV4cGxpY2l0bHkgaWYgdGhleSB3YW50IHRoZSBgYmVmb3JldW5sb2FkYCBldmVudCB0byBiZSBoYW5kbGVkIGFzIGRlZmluZWRcbiAgICAvLyBpbiB0aGUgc3BlY2lmaWNhdGlvbi5cbiAgICBfZ2xvYmFsW2VuYWJsZUJlZm9yZXVubG9hZFN5bWJvbF0gJiZcbiAgICAvLyBUaGUgSURMIGV2ZW50IGRlZmluaXRpb24gaXMgYGF0dHJpYnV0ZSBET01TdHJpbmcgcmV0dXJuVmFsdWVgLCBzbyB3ZSBjaGVjayB3aGV0aGVyXG4gICAgLy8gYHR5cGVvZiByZXN1bHRgIGlzIGEgc3RyaW5nLlxuICAgIHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IHJlc3VsdDtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCAhPSB1bmRlZmluZWQgJiYgIXJlc3VsdCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5mdW5jdGlvbiBwYXRjaFByb3BlcnR5KG9iaiwgcHJvcCwgcHJvdG90eXBlKSB7XG4gIGxldCBkZXNjID0gT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgcHJvcCk7XG4gIGlmICghZGVzYyAmJiBwcm90b3R5cGUpIHtcbiAgICAvLyB3aGVuIHBhdGNoIHdpbmRvdyBvYmplY3QsIHVzZSBwcm90b3R5cGUgdG8gY2hlY2sgcHJvcCBleGlzdCBvciBub3RcbiAgICBjb25zdCBwcm90b3R5cGVEZXNjID0gT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwgcHJvcCk7XG4gICAgaWYgKHByb3RvdHlwZURlc2MpIHtcbiAgICAgIGRlc2MgPSB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgLy8gaWYgdGhlIGRlc2NyaXB0b3Igbm90IGV4aXN0cyBvciBpcyBub3QgY29uZmlndXJhYmxlXG4gIC8vIGp1c3QgcmV0dXJuXG4gIGlmICghZGVzYyB8fCAhZGVzYy5jb25maWd1cmFibGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgb25Qcm9wUGF0Y2hlZFN5bWJvbCA9IHpvbmVTeW1ib2woJ29uJyArIHByb3AgKyAncGF0Y2hlZCcpO1xuICBpZiAob2JqLmhhc093blByb3BlcnR5KG9uUHJvcFBhdGNoZWRTeW1ib2wpICYmIG9ialtvblByb3BQYXRjaGVkU3ltYm9sXSkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBBIHByb3BlcnR5IGRlc2NyaXB0b3IgY2Fubm90IGhhdmUgZ2V0dGVyL3NldHRlciBhbmQgYmUgd3JpdGFibGVcbiAgLy8gZGVsZXRpbmcgdGhlIHdyaXRhYmxlIGFuZCB2YWx1ZSBwcm9wZXJ0aWVzIGF2b2lkcyB0aGlzIGVycm9yOlxuICAvL1xuICAvLyBUeXBlRXJyb3I6IHByb3BlcnR5IGRlc2NyaXB0b3JzIG11c3Qgbm90IHNwZWNpZnkgYSB2YWx1ZSBvciBiZSB3cml0YWJsZSB3aGVuIGFcbiAgLy8gZ2V0dGVyIG9yIHNldHRlciBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgZGVsZXRlIGRlc2Mud3JpdGFibGU7XG4gIGRlbGV0ZSBkZXNjLnZhbHVlO1xuICBjb25zdCBvcmlnaW5hbERlc2NHZXQgPSBkZXNjLmdldDtcbiAgY29uc3Qgb3JpZ2luYWxEZXNjU2V0ID0gZGVzYy5zZXQ7XG4gIC8vIHNsaWNlKDIpIGN1eiAnb25jbGljaycgLT4gJ2NsaWNrJywgZXRjXG4gIGNvbnN0IGV2ZW50TmFtZSA9IHByb3Auc2xpY2UoMik7XG4gIGxldCBldmVudE5hbWVTeW1ib2wgPSB6b25lU3ltYm9sRXZlbnROYW1lcyQxW2V2ZW50TmFtZV07XG4gIGlmICghZXZlbnROYW1lU3ltYm9sKSB7XG4gICAgZXZlbnROYW1lU3ltYm9sID0gem9uZVN5bWJvbEV2ZW50TmFtZXMkMVtldmVudE5hbWVdID0gem9uZVN5bWJvbCgnT05fUFJPUEVSVFknICsgZXZlbnROYW1lKTtcbiAgfVxuICBkZXNjLnNldCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgIC8vIGluIHNvbWUgb2Ygd2luZG93cydzIG9ucHJvcGVydHkgY2FsbGJhY2ssIHRoaXMgaXMgdW5kZWZpbmVkXG4gICAgLy8gc28gd2UgbmVlZCB0byBjaGVjayBpdFxuICAgIGxldCB0YXJnZXQgPSB0aGlzO1xuICAgIGlmICghdGFyZ2V0ICYmIG9iaiA9PT0gX2dsb2JhbCkge1xuICAgICAgdGFyZ2V0ID0gX2dsb2JhbDtcbiAgICB9XG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHRhcmdldFtldmVudE5hbWVTeW1ib2xdO1xuICAgIGlmICh0eXBlb2YgcHJldmlvdXNWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB3cmFwRm4pO1xuICAgIH1cbiAgICAvLyBpc3N1ZSAjOTc4LCB3aGVuIG9ubG9hZCBoYW5kbGVyIHdhcyBhZGRlZCBiZWZvcmUgbG9hZGluZyB6b25lLmpzXG4gICAgLy8gd2Ugc2hvdWxkIHJlbW92ZSBpdCB3aXRoIG9yaWdpbmFsRGVzY1NldFxuICAgIG9yaWdpbmFsRGVzY1NldCAmJiBvcmlnaW5hbERlc2NTZXQuY2FsbCh0YXJnZXQsIG51bGwpO1xuICAgIHRhcmdldFtldmVudE5hbWVTeW1ib2xdID0gbmV3VmFsdWU7XG4gICAgaWYgKHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB3cmFwRm4sIGZhbHNlKTtcbiAgICB9XG4gIH07XG4gIC8vIFRoZSBnZXR0ZXIgd291bGQgcmV0dXJuIHVuZGVmaW5lZCBmb3IgdW5hc3NpZ25lZCBwcm9wZXJ0aWVzIGJ1dCB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBhblxuICAvLyB1bmFzc2lnbmVkIHByb3BlcnR5IGlzIG51bGxcbiAgZGVzYy5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gaW4gc29tZSBvZiB3aW5kb3dzJ3Mgb25wcm9wZXJ0eSBjYWxsYmFjaywgdGhpcyBpcyB1bmRlZmluZWRcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGNoZWNrIGl0XG4gICAgbGV0IHRhcmdldCA9IHRoaXM7XG4gICAgaWYgKCF0YXJnZXQgJiYgb2JqID09PSBfZ2xvYmFsKSB7XG4gICAgICB0YXJnZXQgPSBfZ2xvYmFsO1xuICAgIH1cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGxpc3RlbmVyID0gdGFyZ2V0W2V2ZW50TmFtZVN5bWJvbF07XG4gICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgfSBlbHNlIGlmIChvcmlnaW5hbERlc2NHZXQpIHtcbiAgICAgIC8vIHJlc3VsdCB3aWxsIGJlIG51bGwgd2hlbiB1c2UgaW5saW5lIGV2ZW50IGF0dHJpYnV0ZSxcbiAgICAgIC8vIHN1Y2ggYXMgPGJ1dHRvbiBvbmNsaWNrPVwiZnVuYygpO1wiPk9LPC9idXR0b24+XG4gICAgICAvLyBiZWNhdXNlIHRoZSBvbmNsaWNrIGZ1bmN0aW9uIGlzIGludGVybmFsIHJhdyB1bmNvbXBpbGVkIGhhbmRsZXJcbiAgICAgIC8vIHRoZSBvbmNsaWNrIHdpbGwgYmUgZXZhbHVhdGVkIHdoZW4gZmlyc3QgdGltZSBldmVudCB3YXMgdHJpZ2dlcmVkIG9yXG4gICAgICAvLyB0aGUgcHJvcGVydHkgaXMgYWNjZXNzZWQsIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzUyNVxuICAgICAgLy8gc28gd2Ugc2hvdWxkIHVzZSBvcmlnaW5hbCBuYXRpdmUgZ2V0IHRvIHJldHJpZXZlIHRoZSBoYW5kbGVyXG4gICAgICBsZXQgdmFsdWUgPSBvcmlnaW5hbERlc2NHZXQuY2FsbCh0aGlzKTtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBkZXNjLnNldC5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRbUkVNT1ZFX0FUVFJJQlVURV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG4gIE9iamVjdERlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYyk7XG4gIG9ialtvblByb3BQYXRjaGVkU3ltYm9sXSA9IHRydWU7XG59XG5mdW5jdGlvbiBwYXRjaE9uUHJvcGVydGllcyhvYmosIHByb3BlcnRpZXMsIHByb3RvdHlwZSkge1xuICBpZiAocHJvcGVydGllcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgcGF0Y2hQcm9wZXJ0eShvYmosICdvbicgKyBwcm9wZXJ0aWVzW2ldLCBwcm90b3R5cGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBvblByb3BlcnRpZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gb2JqKSB7XG4gICAgICBpZiAocHJvcC5zbGljZSgwLCAyKSA9PSAnb24nKSB7XG4gICAgICAgIG9uUHJvcGVydGllcy5wdXNoKHByb3ApO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG9uUHJvcGVydGllcy5sZW5ndGg7IGorKykge1xuICAgICAgcGF0Y2hQcm9wZXJ0eShvYmosIG9uUHJvcGVydGllc1tqXSwgcHJvdG90eXBlKTtcbiAgICB9XG4gIH1cbn1cbmNvbnN0IG9yaWdpbmFsSW5zdGFuY2VLZXkgPSB6b25lU3ltYm9sKCdvcmlnaW5hbEluc3RhbmNlJyk7XG4vLyB3cmFwIHNvbWUgbmF0aXZlIEFQSSBvbiBgd2luZG93YFxuZnVuY3Rpb24gcGF0Y2hDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgT3JpZ2luYWxDbGFzcyA9IF9nbG9iYWxbY2xhc3NOYW1lXTtcbiAgaWYgKCFPcmlnaW5hbENsYXNzKSByZXR1cm47XG4gIC8vIGtlZXAgb3JpZ2luYWwgY2xhc3MgaW4gZ2xvYmFsXG4gIF9nbG9iYWxbem9uZVN5bWJvbChjbGFzc05hbWUpXSA9IE9yaWdpbmFsQ2xhc3M7XG4gIF9nbG9iYWxbY2xhc3NOYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBhID0gYmluZEFyZ3VtZW50cyhhcmd1bWVudHMsIGNsYXNzTmFtZSk7XG4gICAgc3dpdGNoIChhLmxlbmd0aCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdLCBhWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdLCBhWzFdLCBhWzJdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdLCBhWzFdLCBhWzJdLCBhWzNdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FyZyBsaXN0IHRvbyBsb25nLicpO1xuICAgIH1cbiAgfTtcbiAgLy8gYXR0YWNoIG9yaWdpbmFsIGRlbGVnYXRlIHRvIHBhdGNoZWQgZnVuY3Rpb25cbiAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKF9nbG9iYWxbY2xhc3NOYW1lXSwgT3JpZ2luYWxDbGFzcyk7XG4gIGNvbnN0IGluc3RhbmNlID0gbmV3IE9yaWdpbmFsQ2xhc3MoZnVuY3Rpb24gKCkge30pO1xuICBsZXQgcHJvcDtcbiAgZm9yIChwcm9wIGluIGluc3RhbmNlKSB7XG4gICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTQ0NzIxXG4gICAgaWYgKGNsYXNzTmFtZSA9PT0gJ1hNTEh0dHBSZXF1ZXN0JyAmJiBwcm9wID09PSAncmVzcG9uc2VCbG9iJykgY29udGludWU7XG4gICAgKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICBpZiAodHlwZW9mIGluc3RhbmNlW3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIF9nbG9iYWxbY2xhc3NOYW1lXS5wcm90b3R5cGVbcHJvcF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF0uYXBwbHkodGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSwgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdERlZmluZVByb3BlcnR5KF9nbG9iYWxbY2xhc3NOYW1lXS5wcm90b3R5cGUsIHByb3AsIHtcbiAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdID0gd3JhcFdpdGhDdXJyZW50Wm9uZShmbiwgY2xhc3NOYW1lICsgJy4nICsgcHJvcCk7XG4gICAgICAgICAgICAgIC8vIGtlZXAgY2FsbGJhY2sgaW4gd3JhcHBlZCBmdW5jdGlvbiBzbyB3ZSBjYW5cbiAgICAgICAgICAgICAgLy8gdXNlIGl0IGluIEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyB0byByZXR1cm5cbiAgICAgICAgICAgICAgLy8gdGhlIG5hdGl2ZSBvbmUuXG4gICAgICAgICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZCh0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdLCBmbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdID0gZm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkocHJvcCk7XG4gIH1cbiAgZm9yIChwcm9wIGluIE9yaWdpbmFsQ2xhc3MpIHtcbiAgICBpZiAocHJvcCAhPT0gJ3Byb3RvdHlwZScgJiYgT3JpZ2luYWxDbGFzcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgX2dsb2JhbFtjbGFzc05hbWVdW3Byb3BdID0gT3JpZ2luYWxDbGFzc1twcm9wXTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHBhdGNoTWV0aG9kKHRhcmdldCwgbmFtZSwgcGF0Y2hGbikge1xuICBsZXQgcHJvdG8gPSB0YXJnZXQ7XG4gIHdoaWxlIChwcm90byAmJiAhcHJvdG8uaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICBwcm90byA9IE9iamVjdEdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgfVxuICBpZiAoIXByb3RvICYmIHRhcmdldFtuYW1lXSkge1xuICAgIC8vIHNvbWVob3cgd2UgZGlkIG5vdCBmaW5kIGl0LCBidXQgd2UgY2FuIHNlZSBpdC4gVGhpcyBoYXBwZW5zIG9uIElFIGZvciBXaW5kb3cgcHJvcGVydGllcy5cbiAgICBwcm90byA9IHRhcmdldDtcbiAgfVxuICBjb25zdCBkZWxlZ2F0ZU5hbWUgPSB6b25lU3ltYm9sKG5hbWUpO1xuICBsZXQgZGVsZWdhdGUgPSBudWxsO1xuICBpZiAocHJvdG8gJiYgKCEoZGVsZWdhdGUgPSBwcm90b1tkZWxlZ2F0ZU5hbWVdKSB8fCAhcHJvdG8uaGFzT3duUHJvcGVydHkoZGVsZWdhdGVOYW1lKSkpIHtcbiAgICBkZWxlZ2F0ZSA9IHByb3RvW2RlbGVnYXRlTmFtZV0gPSBwcm90b1tuYW1lXTtcbiAgICAvLyBjaGVjayB3aGV0aGVyIHByb3RvW25hbWVdIGlzIHdyaXRhYmxlXG4gICAgLy8gc29tZSBwcm9wZXJ0eSBpcyByZWFkb25seSBpbiBzYWZhcmksIHN1Y2ggYXMgSHRtbENhbnZhc0VsZW1lbnQucHJvdG90eXBlLnRvQmxvYlxuICAgIGNvbnN0IGRlc2MgPSBwcm90byAmJiBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIG5hbWUpO1xuICAgIGlmIChpc1Byb3BlcnR5V3JpdGFibGUoZGVzYykpIHtcbiAgICAgIGNvbnN0IHBhdGNoRGVsZWdhdGUgPSBwYXRjaEZuKGRlbGVnYXRlLCBkZWxlZ2F0ZU5hbWUsIG5hbWUpO1xuICAgICAgcHJvdG9bbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXRjaERlbGVnYXRlKHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHByb3RvW25hbWVdLCBkZWxlZ2F0ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWxlZ2F0ZTtcbn1cbi8vIFRPRE86IEBKaWFMaVBhc3Npb24sIHN1cHBvcnQgY2FuY2VsIHRhc2sgbGF0ZXIgaWYgbmVjZXNzYXJ5XG5mdW5jdGlvbiBwYXRjaE1hY3JvVGFzayhvYmosIGZ1bmNOYW1lLCBtZXRhQ3JlYXRvcikge1xuICBsZXQgc2V0TmF0aXZlID0gbnVsbDtcbiAgZnVuY3Rpb24gc2NoZWR1bGVUYXNrKHRhc2spIHtcbiAgICBjb25zdCBkYXRhID0gdGFzay5kYXRhO1xuICAgIGRhdGEuYXJnc1tkYXRhLmNiSWR4XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRhc2suaW52b2tlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICBzZXROYXRpdmUuYXBwbHkoZGF0YS50YXJnZXQsIGRhdGEuYXJncyk7XG4gICAgcmV0dXJuIHRhc2s7XG4gIH1cbiAgc2V0TmF0aXZlID0gcGF0Y2hNZXRob2Qob2JqLCBmdW5jTmFtZSwgZGVsZWdhdGUgPT4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICBjb25zdCBtZXRhID0gbWV0YUNyZWF0b3Ioc2VsZiwgYXJncyk7XG4gICAgaWYgKG1ldGEuY2JJZHggPj0gMCAmJiB0eXBlb2YgYXJnc1ttZXRhLmNiSWR4XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHNjaGVkdWxlTWFjcm9UYXNrV2l0aEN1cnJlbnRab25lKG1ldGEubmFtZSwgYXJnc1ttZXRhLmNiSWR4XSwgbWV0YSwgc2NoZWR1bGVUYXNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2F1c2UgYW4gZXJyb3IgYnkgY2FsbGluZyBpdCBkaXJlY3RseS5cbiAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHBhdGNoZWQsIG9yaWdpbmFsKSB7XG4gIHBhdGNoZWRbem9uZVN5bWJvbCgnT3JpZ2luYWxEZWxlZ2F0ZScpXSA9IG9yaWdpbmFsO1xufVxubGV0IGlzRGV0ZWN0ZWRJRU9yRWRnZSA9IGZhbHNlO1xubGV0IGllT3JFZGdlID0gZmFsc2U7XG5mdW5jdGlvbiBpc0lFKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHVhID0gaW50ZXJuYWxXaW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICBpZiAodWEuaW5kZXhPZignTVNJRSAnKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignVHJpZGVudC8nKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzSUVPckVkZ2UoKSB7XG4gIGlmIChpc0RldGVjdGVkSUVPckVkZ2UpIHtcbiAgICByZXR1cm4gaWVPckVkZ2U7XG4gIH1cbiAgaXNEZXRlY3RlZElFT3JFZGdlID0gdHJ1ZTtcbiAgdHJ5IHtcbiAgICBjb25zdCB1YSA9IGludGVybmFsV2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgaWYgKHVhLmluZGV4T2YoJ01TSUUgJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ1RyaWRlbnQvJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0VkZ2UvJykgIT09IC0xKSB7XG4gICAgICBpZU9yRWRnZSA9IHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge31cbiAgcmV0dXJuIGllT3JFZGdlO1xufVxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICogQHN1cHByZXNzIHttaXNzaW5nUmVxdWlyZX1cbiAqL1xuLy8gTm90ZSB0aGF0IHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzIGFyZSBub3cgc3VwcG9ydGVkIGJ5IG1vc3QgbW9kZXJuIGJyb3dzZXJzLFxuLy8gaW5jbHVkaW5nIENocm9tZSwgRmlyZWZveCwgU2FmYXJpLCBhbmQgRWRnZS4gVGhlcmUncyBhIHBlbmRpbmcgY2hhbmdlIHRoYXRcbi8vIHdvdWxkIHJlbW92ZSBzdXBwb3J0IGZvciBsZWdhY3kgYnJvd3NlcnMgYnkgem9uZS5qcy4gUmVtb3ZpbmcgYHBhc3NpdmVTdXBwb3J0ZWRgXG4vLyBmcm9tIHRoZSBjb2RlYmFzZSB3aWxsIHJlZHVjZSB0aGUgZmluYWwgY29kZSBzaXplIGZvciBleGlzdGluZyBhcHBzIHRoYXQgc3RpbGwgdXNlIHpvbmUuanMuXG5sZXQgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcGFzc2l2ZVN1cHBvcnRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gTm90ZTogV2UgcGFzcyB0aGUgYG9wdGlvbnNgIG9iamVjdCBhcyB0aGUgZXZlbnQgaGFuZGxlciB0b28uIFRoaXMgaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGVcbiAgICAvLyBzaWduYXR1cmUgb2YgYGFkZEV2ZW50TGlzdGVuZXJgIG9yIGByZW1vdmVFdmVudExpc3RlbmVyYCBidXQgZW5hYmxlcyB1cyB0byByZW1vdmUgdGhlIGhhbmRsZXJcbiAgICAvLyB3aXRob3V0IGFuIGFjdHVhbCBoYW5kbGVyLlxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xuICB9XG59XG4vLyBhbiBpZGVudGlmaWVyIHRvIHRlbGwgWm9uZVRhc2sgZG8gbm90IGNyZWF0ZSBhIG5ldyBpbnZva2UgY2xvc3VyZVxuY29uc3QgT1BUSU1JWkVEX1pPTkVfRVZFTlRfVEFTS19EQVRBID0ge1xuICB1c2VHOiB0cnVlXG59O1xuY29uc3Qgem9uZVN5bWJvbEV2ZW50TmFtZXMgPSB7fTtcbmNvbnN0IGdsb2JhbFNvdXJjZXMgPSB7fTtcbmNvbnN0IEVWRU5UX05BTUVfU1lNQk9MX1JFR1ggPSBuZXcgUmVnRXhwKCdeJyArIFpPTkVfU1lNQk9MX1BSRUZJWCArICcoXFxcXHcrKSh0cnVlfGZhbHNlKSQnKTtcbmNvbnN0IElNTUVESUFURV9QUk9QQUdBVElPTl9TWU1CT0wgPSB6b25lU3ltYm9sKCdwcm9wYWdhdGlvblN0b3BwZWQnKTtcbmZ1bmN0aW9uIHByZXBhcmVFdmVudE5hbWVzKGV2ZW50TmFtZSwgZXZlbnROYW1lVG9TdHJpbmcpIHtcbiAgY29uc3QgZmFsc2VFdmVudE5hbWUgPSAoZXZlbnROYW1lVG9TdHJpbmcgPyBldmVudE5hbWVUb1N0cmluZyhldmVudE5hbWUpIDogZXZlbnROYW1lKSArIEZBTFNFX1NUUjtcbiAgY29uc3QgdHJ1ZUV2ZW50TmFtZSA9IChldmVudE5hbWVUb1N0cmluZyA/IGV2ZW50TmFtZVRvU3RyaW5nKGV2ZW50TmFtZSkgOiBldmVudE5hbWUpICsgVFJVRV9TVFI7XG4gIGNvbnN0IHN5bWJvbCA9IFpPTkVfU1lNQk9MX1BSRUZJWCArIGZhbHNlRXZlbnROYW1lO1xuICBjb25zdCBzeW1ib2xDYXB0dXJlID0gWk9ORV9TWU1CT0xfUFJFRklYICsgdHJ1ZUV2ZW50TmFtZTtcbiAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXSA9IHt9O1xuICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdW0ZBTFNFX1NUUl0gPSBzeW1ib2w7XG4gIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV1bVFJVRV9TVFJdID0gc3ltYm9sQ2FwdHVyZTtcbn1cbmZ1bmN0aW9uIHBhdGNoRXZlbnRUYXJnZXQoX2dsb2JhbCwgYXBpLCBhcGlzLCBwYXRjaE9wdGlvbnMpIHtcbiAgY29uc3QgQUREX0VWRU5UX0xJU1RFTkVSID0gcGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5hZGQgfHwgQUREX0VWRU5UX0xJU1RFTkVSX1NUUjtcbiAgY29uc3QgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSID0gcGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5ybSB8fCBSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSO1xuICBjb25zdCBMSVNURU5FUlNfRVZFTlRfTElTVEVORVIgPSBwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLmxpc3RlbmVycyB8fCAnZXZlbnRMaXN0ZW5lcnMnO1xuICBjb25zdCBSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUiA9IHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMucm1BbGwgfHwgJ3JlbW92ZUFsbExpc3RlbmVycyc7XG4gIGNvbnN0IHpvbmVTeW1ib2xBZGRFdmVudExpc3RlbmVyID0gem9uZVN5bWJvbChBRERfRVZFTlRfTElTVEVORVIpO1xuICBjb25zdCBBRERfRVZFTlRfTElTVEVORVJfU09VUkNFID0gJy4nICsgQUREX0VWRU5UX0xJU1RFTkVSICsgJzonO1xuICBjb25zdCBQUkVQRU5EX0VWRU5UX0xJU1RFTkVSID0gJ3ByZXBlbmRMaXN0ZW5lcic7XG4gIGNvbnN0IFBSRVBFTkRfRVZFTlRfTElTVEVORVJfU09VUkNFID0gJy4nICsgUFJFUEVORF9FVkVOVF9MSVNURU5FUiArICc6JztcbiAgY29uc3QgaW52b2tlVGFzayA9IGZ1bmN0aW9uICh0YXNrLCB0YXJnZXQsIGV2ZW50KSB7XG4gICAgLy8gZm9yIGJldHRlciBwZXJmb3JtYW5jZSwgY2hlY2sgaXNSZW1vdmVkIHdoaWNoIGlzIHNldFxuICAgIC8vIGJ5IHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICBpZiAodGFzay5pc1JlbW92ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGVsZWdhdGUgPSB0YXNrLmNhbGxiYWNrO1xuICAgIGlmICh0eXBlb2YgZGVsZWdhdGUgPT09ICdvYmplY3QnICYmIGRlbGVnYXRlLmhhbmRsZUV2ZW50KSB7XG4gICAgICAvLyBjcmVhdGUgdGhlIGJpbmQgdmVyc2lvbiBvZiBoYW5kbGVFdmVudCB3aGVuIGludm9rZVxuICAgICAgdGFzay5jYWxsYmFjayA9IGV2ZW50ID0+IGRlbGVnYXRlLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgIHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgIH1cbiAgICAvLyBpbnZva2Ugc3RhdGljIHRhc2suaW52b2tlXG4gICAgLy8gbmVlZCB0byB0cnkvY2F0Y2ggZXJyb3IgaGVyZSwgb3RoZXJ3aXNlLCB0aGUgZXJyb3IgaW4gb25lIGV2ZW50IGxpc3RlbmVyXG4gICAgLy8gd2lsbCBicmVhayB0aGUgZXhlY3V0aW9ucyBvZiB0aGUgb3RoZXIgZXZlbnQgbGlzdGVuZXJzLiBBbHNvIGVycm9yIHdpbGxcbiAgICAvLyBub3QgcmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lciB3aGVuIGBvbmNlYCBvcHRpb25zIGlzIHRydWUuXG4gICAgbGV0IGVycm9yO1xuICAgIHRyeSB7XG4gICAgICB0YXNrLmludm9rZSh0YXNrLCB0YXJnZXQsIFtldmVudF0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZXJyb3IgPSBlcnI7XG4gICAgfVxuICAgIGNvbnN0IG9wdGlvbnMgPSB0YXNrLm9wdGlvbnM7XG4gICAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmIG9wdGlvbnMub25jZSkge1xuICAgICAgLy8gaWYgb3B0aW9ucy5vbmNlIGlzIHRydWUsIGFmdGVyIGludm9rZSBvbmNlIHJlbW92ZSBsaXN0ZW5lciBoZXJlXG4gICAgICAvLyBvbmx5IGJyb3dzZXIgbmVlZCB0byBkbyB0aGlzLCBub2RlanMgZXZlbnRFbWl0dGVyIHdpbGwgY2FsIHJlbW92ZUxpc3RlbmVyXG4gICAgICAvLyBpbnNpZGUgRXZlbnRFbWl0dGVyLm9uY2VcbiAgICAgIGNvbnN0IGRlbGVnYXRlID0gdGFzay5vcmlnaW5hbERlbGVnYXRlID8gdGFzay5vcmlnaW5hbERlbGVnYXRlIDogdGFzay5jYWxsYmFjaztcbiAgICAgIHRhcmdldFtSRU1PVkVfRVZFTlRfTElTVEVORVJdLmNhbGwodGFyZ2V0LCBldmVudC50eXBlLCBkZWxlZ2F0ZSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiBlcnJvcjtcbiAgfTtcbiAgZnVuY3Rpb24gZ2xvYmFsQ2FsbGJhY2soY29udGV4dCwgZXZlbnQsIGlzQ2FwdHVyZSkge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzkxMSwgaW4gSUUsIHNvbWV0aW1lc1xuICAgIC8vIGV2ZW50IHdpbGwgYmUgdW5kZWZpbmVkLCBzbyB3ZSBuZWVkIHRvIHVzZSB3aW5kb3cuZXZlbnRcbiAgICBldmVudCA9IGV2ZW50IHx8IF9nbG9iYWwuZXZlbnQ7XG4gICAgaWYgKCFldmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBldmVudC50YXJnZXQgaXMgbmVlZGVkIGZvciBTYW1zdW5nIFRWIGFuZCBTb3VyY2VCdWZmZXJcbiAgICAvLyB8fCBnbG9iYWwgaXMgbmVlZGVkIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzE5MFxuICAgIGNvbnN0IHRhcmdldCA9IGNvbnRleHQgfHwgZXZlbnQudGFyZ2V0IHx8IF9nbG9iYWw7XG4gICAgY29uc3QgdGFza3MgPSB0YXJnZXRbem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnQudHlwZV1baXNDYXB0dXJlID8gVFJVRV9TVFIgOiBGQUxTRV9TVFJdXTtcbiAgICBpZiAodGFza3MpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IFtdO1xuICAgICAgLy8gaW52b2tlIGFsbCB0YXNrcyB3aGljaCBhdHRhY2hlZCB0byBjdXJyZW50IHRhcmdldCB3aXRoIGdpdmVuIGV2ZW50LnR5cGUgYW5kIGNhcHR1cmUgPSBmYWxzZVxuICAgICAgLy8gZm9yIHBlcmZvcm1hbmNlIGNvbmNlcm4sIGlmIHRhc2subGVuZ3RoID09PSAxLCBqdXN0IGludm9rZVxuICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBlcnIgPSBpbnZva2VUYXNrKHRhc2tzWzBdLCB0YXJnZXQsIGV2ZW50KTtcbiAgICAgICAgZXJyICYmIGVycm9ycy5wdXNoKGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy84MzZcbiAgICAgICAgLy8gY29weSB0aGUgdGFza3MgYXJyYXkgYmVmb3JlIGludm9rZSwgdG8gYXZvaWRcbiAgICAgICAgLy8gdGhlIGNhbGxiYWNrIHdpbGwgcmVtb3ZlIGl0c2VsZiBvciBvdGhlciBsaXN0ZW5lclxuICAgICAgICBjb25zdCBjb3B5VGFza3MgPSB0YXNrcy5zbGljZSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvcHlUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChldmVudCAmJiBldmVudFtJTU1FRElBVEVfUFJPUEFHQVRJT05fU1lNQk9MXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGVyciA9IGludm9rZVRhc2soY29weVRhc2tzW2ldLCB0YXJnZXQsIGV2ZW50KTtcbiAgICAgICAgICBlcnIgJiYgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gU2luY2UgdGhlcmUgaXMgb25seSBvbmUgZXJyb3IsIHdlIGRvbid0IG5lZWQgdG8gc2NoZWR1bGUgbWljcm9UYXNrXG4gICAgICAvLyB0byB0aHJvdyB0aGUgZXJyb3IuXG4gICAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0aHJvdyBlcnJvcnNbMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGVyciA9IGVycm9yc1tpXTtcbiAgICAgICAgICBhcGkubmF0aXZlU2NoZWR1bGVNaWNyb1Rhc2soKCkgPT4ge1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGdsb2JhbCBzaGFyZWQgem9uZUF3YXJlQ2FsbGJhY2sgdG8gaGFuZGxlIGFsbCBldmVudCBjYWxsYmFjayB3aXRoIGNhcHR1cmUgPSBmYWxzZVxuICBjb25zdCBnbG9iYWxab25lQXdhcmVDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiBnbG9iYWxDYWxsYmFjayh0aGlzLCBldmVudCwgZmFsc2UpO1xuICB9O1xuICAvLyBnbG9iYWwgc2hhcmVkIHpvbmVBd2FyZUNhbGxiYWNrIHRvIGhhbmRsZSBhbGwgZXZlbnQgY2FsbGJhY2sgd2l0aCBjYXB0dXJlID0gdHJ1ZVxuICBjb25zdCBnbG9iYWxab25lQXdhcmVDYXB0dXJlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4gZ2xvYmFsQ2FsbGJhY2sodGhpcywgZXZlbnQsIHRydWUpO1xuICB9O1xuICBmdW5jdGlvbiBwYXRjaEV2ZW50VGFyZ2V0TWV0aG9kcyhvYmosIHBhdGNoT3B0aW9ucykge1xuICAgIGlmICghb2JqKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCB1c2VHbG9iYWxDYWxsYmFjayA9IHRydWU7XG4gICAgaWYgKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMudXNlRyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB1c2VHbG9iYWxDYWxsYmFjayA9IHBhdGNoT3B0aW9ucy51c2VHO1xuICAgIH1cbiAgICBjb25zdCB2YWxpZGF0ZUhhbmRsZXIgPSBwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnZoO1xuICAgIGxldCBjaGVja0R1cGxpY2F0ZSA9IHRydWU7XG4gICAgaWYgKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMuY2hrRHVwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoZWNrRHVwbGljYXRlID0gcGF0Y2hPcHRpb25zLmNoa0R1cDtcbiAgICB9XG4gICAgbGV0IHJldHVyblRhcmdldCA9IGZhbHNlO1xuICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVyblRhcmdldCA9IHBhdGNoT3B0aW9ucy5ydDtcbiAgICB9XG4gICAgbGV0IHByb3RvID0gb2JqO1xuICAgIHdoaWxlIChwcm90byAmJiAhcHJvdG8uaGFzT3duUHJvcGVydHkoQUREX0VWRU5UX0xJU1RFTkVSKSkge1xuICAgICAgcHJvdG8gPSBPYmplY3RHZXRQcm90b3R5cGVPZihwcm90byk7XG4gICAgfVxuICAgIGlmICghcHJvdG8gJiYgb2JqW0FERF9FVkVOVF9MSVNURU5FUl0pIHtcbiAgICAgIC8vIHNvbWVob3cgd2UgZGlkIG5vdCBmaW5kIGl0LCBidXQgd2UgY2FuIHNlZSBpdC4gVGhpcyBoYXBwZW5zIG9uIElFIGZvciBXaW5kb3cgcHJvcGVydGllcy5cbiAgICAgIHByb3RvID0gb2JqO1xuICAgIH1cbiAgICBpZiAoIXByb3RvKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwcm90b1t6b25lU3ltYm9sQWRkRXZlbnRMaXN0ZW5lcl0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgZXZlbnROYW1lVG9TdHJpbmcgPSBwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLmV2ZW50TmFtZVRvU3RyaW5nO1xuICAgIC8vIFdlIHVzZSBhIHNoYXJlZCBnbG9iYWwgYHRhc2tEYXRhYCB0byBwYXNzIGRhdGEgZm9yIGBzY2hlZHVsZUV2ZW50VGFza2AsXG4gICAgLy8gZWxpbWluYXRpbmcgdGhlIG5lZWQgdG8gY3JlYXRlIGEgbmV3IG9iamVjdCBzb2xlbHkgZm9yIHBhc3NpbmcgZGF0YS5cbiAgICAvLyBXQVJOSU5HOiBUaGlzIG9iamVjdCBoYXMgYSBzdGF0aWMgbGlmZXRpbWUsIG1lYW5pbmcgaXQgaXMgbm90IGNyZWF0ZWRcbiAgICAvLyBlYWNoIHRpbWUgYGFkZEV2ZW50TGlzdGVuZXJgIGlzIGNhbGxlZC4gSXQgaXMgaW5zdGFudGlhdGVkIG9ubHkgb25jZVxuICAgIC8vIGFuZCBjYXB0dXJlZCBieSByZWZlcmVuY2UgaW5zaWRlIHRoZSBgYWRkRXZlbnRMaXN0ZW5lcmAgYW5kXG4gICAgLy8gYHJlbW92ZUV2ZW50TGlzdGVuZXJgIGZ1bmN0aW9ucy4gRG8gbm90IGFkZCBhbnkgbmV3IHByb3BlcnRpZXMgdG8gdGhpc1xuICAgIC8vIG9iamVjdCwgYXMgZG9pbmcgc28gd291bGQgbmVjZXNzaXRhdGUgbWFpbnRhaW5pbmcgdGhlIGluZm9ybWF0aW9uXG4gICAgLy8gYmV0d2VlbiBgYWRkRXZlbnRMaXN0ZW5lcmAgY2FsbHMuXG4gICAgY29uc3QgdGFza0RhdGEgPSB7fTtcbiAgICBjb25zdCBuYXRpdmVBZGRFdmVudExpc3RlbmVyID0gcHJvdG9bem9uZVN5bWJvbEFkZEV2ZW50TGlzdGVuZXJdID0gcHJvdG9bQUREX0VWRU5UX0xJU1RFTkVSXTtcbiAgICBjb25zdCBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyID0gcHJvdG9bem9uZVN5bWJvbChSRU1PVkVfRVZFTlRfTElTVEVORVIpXSA9IHByb3RvW1JFTU9WRV9FVkVOVF9MSVNURU5FUl07XG4gICAgY29uc3QgbmF0aXZlTGlzdGVuZXJzID0gcHJvdG9bem9uZVN5bWJvbChMSVNURU5FUlNfRVZFTlRfTElTVEVORVIpXSA9IHByb3RvW0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl07XG4gICAgY29uc3QgbmF0aXZlUmVtb3ZlQWxsTGlzdGVuZXJzID0gcHJvdG9bem9uZVN5bWJvbChSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUildID0gcHJvdG9bUkVNT1ZFX0FMTF9MSVNURU5FUlNfRVZFTlRfTElTVEVORVJdO1xuICAgIGxldCBuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lcjtcbiAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5wcmVwZW5kKSB7XG4gICAgICBuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lciA9IHByb3RvW3pvbmVTeW1ib2wocGF0Y2hPcHRpb25zLnByZXBlbmQpXSA9IHByb3RvW3BhdGNoT3B0aW9ucy5wcmVwZW5kXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyB1dGlsIGZ1bmN0aW9uIHdpbGwgYnVpbGQgYW4gb3B0aW9uIG9iamVjdCB3aXRoIHBhc3NpdmUgb3B0aW9uXG4gICAgICogdG8gaGFuZGxlIGFsbCBwb3NzaWJsZSBpbnB1dCBmcm9tIHRoZSB1c2VyLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGJ1aWxkRXZlbnRMaXN0ZW5lck9wdGlvbnMob3B0aW9ucywgcGFzc2l2ZSkge1xuICAgICAgaWYgKCFwYXNzaXZlU3VwcG9ydGVkICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyAmJiBvcHRpb25zKSB7XG4gICAgICAgIC8vIGRvZXNuJ3Qgc3VwcG9ydCBwYXNzaXZlIGJ1dCB1c2VyIHdhbnQgdG8gcGFzcyBhbiBvYmplY3QgYXMgb3B0aW9ucy5cbiAgICAgICAgLy8gdGhpcyB3aWxsIG5vdCB3b3JrIG9uIHNvbWUgb2xkIGJyb3dzZXIsIHNvIHdlIGp1c3QgcGFzcyBhIGJvb2xlYW5cbiAgICAgICAgLy8gYXMgdXNlQ2FwdHVyZSBwYXJhbWV0ZXJcbiAgICAgICAgcmV0dXJuICEhb3B0aW9ucy5jYXB0dXJlO1xuICAgICAgfVxuICAgICAgaWYgKCFwYXNzaXZlU3VwcG9ydGVkIHx8ICFwYXNzaXZlKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjYXB0dXJlOiBvcHRpb25zLFxuICAgICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgJiYgb3B0aW9ucy5wYXNzaXZlICE9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuICAgIGNvbnN0IGN1c3RvbVNjaGVkdWxlR2xvYmFsID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFscmVhZHkgYSB0YXNrIGZvciB0aGUgZXZlbnROYW1lICsgY2FwdHVyZSxcbiAgICAgIC8vIGp1c3QgcmV0dXJuLCBiZWNhdXNlIHdlIHVzZSB0aGUgc2hhcmVkIGdsb2JhbFpvbmVBd2FyZUNhbGxiYWNrIGhlcmUuXG4gICAgICBpZiAodGFza0RhdGEuaXNFeGlzdGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm4gbmF0aXZlQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRhc2tEYXRhLnRhcmdldCwgdGFza0RhdGEuZXZlbnROYW1lLCB0YXNrRGF0YS5jYXB0dXJlID8gZ2xvYmFsWm9uZUF3YXJlQ2FwdHVyZUNhbGxiYWNrIDogZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2ssIHRhc2tEYXRhLm9wdGlvbnMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW4gdGhlIGNvbnRleHQgb2YgZXZlbnRzIGFuZCBsaXN0ZW5lcnMsIHRoaXMgZnVuY3Rpb24gd2lsbCBiZVxuICAgICAqIGNhbGxlZCBhdCB0aGUgZW5kIGJ5IGBjYW5jZWxUYXNrYCwgd2hpY2gsIGluIHR1cm4sIGNhbGxzIGB0YXNrLmNhbmNlbEZuYC5cbiAgICAgKiBDYW5jZWxsaW5nIGEgdGFzayBpcyBwcmltYXJpbHkgdXNlZCB0byByZW1vdmUgZXZlbnQgbGlzdGVuZXJzIGZyb21cbiAgICAgKiB0aGUgdGFzayB0YXJnZXQuXG4gICAgICovXG4gICAgY29uc3QgY3VzdG9tQ2FuY2VsR2xvYmFsID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgIC8vIGlmIHRhc2sgaXMgbm90IG1hcmtlZCBhcyBpc1JlbW92ZWQsIHRoaXMgY2FsbCBpcyBkaXJlY3RseVxuICAgICAgLy8gZnJvbSBab25lLnByb3RvdHlwZS5jYW5jZWxUYXNrLCB3ZSBzaG91bGQgcmVtb3ZlIHRoZSB0YXNrXG4gICAgICAvLyBmcm9tIHRhc2tzTGlzdCBvZiB0YXJnZXQgZmlyc3RcbiAgICAgIGlmICghdGFzay5pc1JlbW92ZWQpIHtcbiAgICAgICAgY29uc3Qgc3ltYm9sRXZlbnROYW1lcyA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW3Rhc2suZXZlbnROYW1lXTtcbiAgICAgICAgbGV0IHN5bWJvbEV2ZW50TmFtZTtcbiAgICAgICAgaWYgKHN5bWJvbEV2ZW50TmFtZXMpIHtcbiAgICAgICAgICBzeW1ib2xFdmVudE5hbWUgPSBzeW1ib2xFdmVudE5hbWVzW3Rhc2suY2FwdHVyZSA/IFRSVUVfU1RSIDogRkFMU0VfU1RSXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBleGlzdGluZ1Rhc2tzID0gc3ltYm9sRXZlbnROYW1lICYmIHRhc2sudGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV07XG4gICAgICAgIGlmIChleGlzdGluZ1Rhc2tzKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleGlzdGluZ1Rhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1Rhc2sgPSBleGlzdGluZ1Rhc2tzW2ldO1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nVGFzayA9PT0gdGFzaykge1xuICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgLy8gc2V0IGlzUmVtb3ZlZCB0byBkYXRhIGZvciBmYXN0ZXIgaW52b2tlVGFzayBjaGVja1xuICAgICAgICAgICAgICB0YXNrLmlzUmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGlmICh0YXNrLnJlbW92ZUFib3J0TGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICB0YXNrLnJlbW92ZUFib3J0TGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICB0YXNrLnJlbW92ZUFib3J0TGlzdGVuZXIgPSBudWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGFsbCB0YXNrcyBmb3IgdGhlIGV2ZW50TmFtZSArIGNhcHR1cmUgaGF2ZSBnb25lLFxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBnbG9iYWxab25lQXdhcmVDYWxsYmFjayBhbmQgcmVtb3ZlIHRoZSB0YXNrIGNhY2hlIGZyb20gdGFyZ2V0XG4gICAgICAgICAgICAgICAgdGFzay5hbGxSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0YXNrLnRhcmdldFtzeW1ib2xFdmVudE5hbWVdID0gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGlmIGFsbCB0YXNrcyBmb3IgdGhlIGV2ZW50TmFtZSArIGNhcHR1cmUgaGF2ZSBnb25lLFxuICAgICAgLy8gd2Ugd2lsbCByZWFsbHkgcmVtb3ZlIHRoZSBnbG9iYWwgZXZlbnQgY2FsbGJhY2ssXG4gICAgICAvLyBpZiBub3QsIHJldHVyblxuICAgICAgaWYgKCF0YXNrLmFsbFJlbW92ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIuY2FsbCh0YXNrLnRhcmdldCwgdGFzay5ldmVudE5hbWUsIHRhc2suY2FwdHVyZSA/IGdsb2JhbFpvbmVBd2FyZUNhcHR1cmVDYWxsYmFjayA6IGdsb2JhbFpvbmVBd2FyZUNhbGxiYWNrLCB0YXNrLm9wdGlvbnMpO1xuICAgIH07XG4gICAgY29uc3QgY3VzdG9tU2NoZWR1bGVOb25HbG9iYWwgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgcmV0dXJuIG5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0YXNrRGF0YS50YXJnZXQsIHRhc2tEYXRhLmV2ZW50TmFtZSwgdGFzay5pbnZva2UsIHRhc2tEYXRhLm9wdGlvbnMpO1xuICAgIH07XG4gICAgY29uc3QgY3VzdG9tU2NoZWR1bGVQcmVwZW5kID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgIHJldHVybiBuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lci5jYWxsKHRhc2tEYXRhLnRhcmdldCwgdGFza0RhdGEuZXZlbnROYW1lLCB0YXNrLmludm9rZSwgdGFza0RhdGEub3B0aW9ucyk7XG4gICAgfTtcbiAgICBjb25zdCBjdXN0b21DYW5jZWxOb25HbG9iYWwgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgcmV0dXJuIG5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIuY2FsbCh0YXNrLnRhcmdldCwgdGFzay5ldmVudE5hbWUsIHRhc2suaW52b2tlLCB0YXNrLm9wdGlvbnMpO1xuICAgIH07XG4gICAgY29uc3QgY3VzdG9tU2NoZWR1bGUgPSB1c2VHbG9iYWxDYWxsYmFjayA/IGN1c3RvbVNjaGVkdWxlR2xvYmFsIDogY3VzdG9tU2NoZWR1bGVOb25HbG9iYWw7XG4gICAgY29uc3QgY3VzdG9tQ2FuY2VsID0gdXNlR2xvYmFsQ2FsbGJhY2sgPyBjdXN0b21DYW5jZWxHbG9iYWwgOiBjdXN0b21DYW5jZWxOb25HbG9iYWw7XG4gICAgY29uc3QgY29tcGFyZVRhc2tDYWxsYmFja1ZzRGVsZWdhdGUgPSBmdW5jdGlvbiAodGFzaywgZGVsZWdhdGUpIHtcbiAgICAgIGNvbnN0IHR5cGVPZkRlbGVnYXRlID0gdHlwZW9mIGRlbGVnYXRlO1xuICAgICAgcmV0dXJuIHR5cGVPZkRlbGVnYXRlID09PSAnZnVuY3Rpb24nICYmIHRhc2suY2FsbGJhY2sgPT09IGRlbGVnYXRlIHx8IHR5cGVPZkRlbGVnYXRlID09PSAnb2JqZWN0JyAmJiB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPT09IGRlbGVnYXRlO1xuICAgIH07XG4gICAgY29uc3QgY29tcGFyZSA9IHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMuZGlmZiA/IHBhdGNoT3B0aW9ucy5kaWZmIDogY29tcGFyZVRhc2tDYWxsYmFja1ZzRGVsZWdhdGU7XG4gICAgY29uc3QgdW5wYXRjaGVkRXZlbnRzID0gWm9uZVt6b25lU3ltYm9sKCdVTlBBVENIRURfRVZFTlRTJyldO1xuICAgIGNvbnN0IHBhc3NpdmVFdmVudHMgPSBfZ2xvYmFsW3pvbmVTeW1ib2woJ1BBU1NJVkVfRVZFTlRTJyldO1xuICAgIGZ1bmN0aW9uIGNvcHlFdmVudExpc3RlbmVyT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmIG9wdGlvbnMgIT09IG51bGwpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBkZXN0cnVjdHVyZSB0aGUgdGFyZ2V0IGBvcHRpb25zYCBvYmplY3Qgc2luY2UgaXQgbWF5XG4gICAgICAgIC8vIGJlIGZyb3plbiBvciBzZWFsZWQgKHBvc3NpYmx5IHByb3ZpZGVkIGltcGxpY2l0bHkgYnkgYSB0aGlyZC1wYXJ0eVxuICAgICAgICAvLyBsaWJyYXJ5KSwgb3IgaXRzIHByb3BlcnRpZXMgbWF5IGJlIHJlYWRvbmx5LlxuICAgICAgICBjb25zdCBuZXdPcHRpb25zID0ge1xuICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgfTtcbiAgICAgICAgLy8gVGhlIGBzaWduYWxgIG9wdGlvbiB3YXMgcmVjZW50bHkgaW50cm9kdWNlZCwgd2hpY2ggY2F1c2VkIHJlZ3Jlc3Npb25zIGluXG4gICAgICAgIC8vIHRoaXJkLXBhcnR5IHNjZW5hcmlvcyB3aGVyZSBgQWJvcnRDb250cm9sbGVyYCB3YXMgZGlyZWN0bHkgcHJvdmlkZWQgdG9cbiAgICAgICAgLy8gYGFkZEV2ZW50TGlzdGVuZXJgIGFzIG9wdGlvbnMuIEZvciBpbnN0YW5jZSwgaW4gY2FzZXMgbGlrZVxuICAgICAgICAvLyBgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNhbGxiYWNrLCBhYm9ydENvbnRyb2xsZXJJbnN0YW5jZSlgLFxuICAgICAgICAvLyB3aGljaCBpcyB2YWxpZCBiZWNhdXNlIGBBYm9ydENvbnRyb2xsZXJgIGluY2x1ZGVzIGEgYHNpZ25hbGAgZ2V0dGVyLCBzcHJlYWRpbmdcbiAgICAgICAgLy8gYHsuLi5vcHRpb25zfWAgd291bGRuJ3QgY29weSB0aGUgYHNpZ25hbGAuIEFkZGl0aW9uYWxseSwgdXNpbmcgYE9iamVjdC5jcmVhdGVgXG4gICAgICAgIC8vIGlzbid0IGZlYXNpYmxlIHNpbmNlIGBBYm9ydENvbnRyb2xsZXJgIGlzIGEgYnVpbHQtaW4gb2JqZWN0IHR5cGUsIGFuZCBhdHRlbXB0aW5nXG4gICAgICAgIC8vIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3QgZGlyZWN0bHkgd2l0aCBpdCBhcyB0aGUgcHJvdG90eXBlIG1pZ2h0IHJlc3VsdCBpblxuICAgICAgICAvLyB1bmV4cGVjdGVkIGJlaGF2aW9yLlxuICAgICAgICBpZiAob3B0aW9ucy5zaWduYWwpIHtcbiAgICAgICAgICBuZXdPcHRpb25zLnNpZ25hbCA9IG9wdGlvbnMuc2lnbmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdPcHRpb25zO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuICAgIGNvbnN0IG1ha2VBZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYXRpdmVMaXN0ZW5lciwgYWRkU291cmNlLCBjdXN0b21TY2hlZHVsZUZuLCBjdXN0b21DYW5jZWxGbiwgcmV0dXJuVGFyZ2V0ID0gZmFsc2UsIHByZXBlbmQgPSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcyB8fCBfZ2xvYmFsO1xuICAgICAgICBsZXQgZXZlbnROYW1lID0gYXJndW1lbnRzWzBdO1xuICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZSkge1xuICAgICAgICAgIGV2ZW50TmFtZSA9IHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZShldmVudE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBkZWxlZ2F0ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgaWYgKCFkZWxlZ2F0ZSkge1xuICAgICAgICAgIHJldHVybiBuYXRpdmVMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05vZGUgJiYgZXZlbnROYW1lID09PSAndW5jYXVnaHRFeGNlcHRpb24nKSB7XG4gICAgICAgICAgLy8gZG9uJ3QgcGF0Y2ggdW5jYXVnaHRFeGNlcHRpb24gb2Ygbm9kZWpzIHRvIHByZXZlbnQgZW5kbGVzcyBsb29wXG4gICAgICAgICAgcmV0dXJuIG5hdGl2ZUxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZG9uJ3QgY3JlYXRlIHRoZSBiaW5kIGRlbGVnYXRlIGZ1bmN0aW9uIGZvciBoYW5kbGVFdmVudFxuICAgICAgICAvLyBjYXNlIGhlcmUgdG8gaW1wcm92ZSBhZGRFdmVudExpc3RlbmVyIHBlcmZvcm1hbmNlXG4gICAgICAgIC8vIHdlIHdpbGwgY3JlYXRlIHRoZSBiaW5kIGRlbGVnYXRlIHdoZW4gaW52b2tlXG4gICAgICAgIGxldCBpc0hhbmRsZUV2ZW50ID0gZmFsc2U7XG4gICAgICAgIGlmICh0eXBlb2YgZGVsZWdhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpZiAoIWRlbGVnYXRlLmhhbmRsZUV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gbmF0aXZlTGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXNIYW5kbGVFdmVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbGlkYXRlSGFuZGxlciAmJiAhdmFsaWRhdGVIYW5kbGVyKG5hdGl2ZUxpc3RlbmVyLCBkZWxlZ2F0ZSwgdGFyZ2V0LCBhcmd1bWVudHMpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhc3NpdmUgPSBwYXNzaXZlU3VwcG9ydGVkICYmICEhcGFzc2l2ZUV2ZW50cyAmJiBwYXNzaXZlRXZlbnRzLmluZGV4T2YoZXZlbnROYW1lKSAhPT0gLTE7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjb3B5RXZlbnRMaXN0ZW5lck9wdGlvbnMoYnVpbGRFdmVudExpc3RlbmVyT3B0aW9ucyhhcmd1bWVudHNbMl0sIHBhc3NpdmUpKTtcbiAgICAgICAgY29uc3Qgc2lnbmFsID0gb3B0aW9ucz8uc2lnbmFsO1xuICAgICAgICBpZiAoc2lnbmFsPy5hYm9ydGVkKSB7XG4gICAgICAgICAgLy8gdGhlIHNpZ25hbCBpcyBhbiBhYm9ydGVkIG9uZSwganVzdCByZXR1cm4gd2l0aG91dCBhdHRhY2hpbmcgdGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodW5wYXRjaGVkRXZlbnRzKSB7XG4gICAgICAgICAgLy8gY2hlY2sgdW5wYXRjaGVkIGxpc3RcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVucGF0Y2hlZEV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gdW5wYXRjaGVkRXZlbnRzW2ldKSB7XG4gICAgICAgICAgICAgIGlmIChwYXNzaXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZUxpc3RlbmVyLmNhbGwodGFyZ2V0LCBldmVudE5hbWUsIGRlbGVnYXRlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlTGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYXB0dXJlID0gIW9wdGlvbnMgPyBmYWxzZSA6IHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicgPyB0cnVlIDogb3B0aW9ucy5jYXB0dXJlO1xuICAgICAgICBjb25zdCBvbmNlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLm9uY2UgOiBmYWxzZTtcbiAgICAgICAgY29uc3Qgem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgbGV0IHN5bWJvbEV2ZW50TmFtZXMgPSB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdO1xuICAgICAgICBpZiAoIXN5bWJvbEV2ZW50TmFtZXMpIHtcbiAgICAgICAgICBwcmVwYXJlRXZlbnROYW1lcyhldmVudE5hbWUsIGV2ZW50TmFtZVRvU3RyaW5nKTtcbiAgICAgICAgICBzeW1ib2xFdmVudE5hbWVzID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzeW1ib2xFdmVudE5hbWUgPSBzeW1ib2xFdmVudE5hbWVzW2NhcHR1cmUgPyBUUlVFX1NUUiA6IEZBTFNFX1NUUl07XG4gICAgICAgIGxldCBleGlzdGluZ1Rhc2tzID0gdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV07XG4gICAgICAgIGxldCBpc0V4aXN0aW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChleGlzdGluZ1Rhc2tzKSB7XG4gICAgICAgICAgLy8gYWxyZWFkeSBoYXZlIHRhc2sgcmVnaXN0ZXJlZFxuICAgICAgICAgIGlzRXhpc3RpbmcgPSB0cnVlO1xuICAgICAgICAgIGlmIChjaGVja0R1cGxpY2F0ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleGlzdGluZ1Rhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChjb21wYXJlKGV4aXN0aW5nVGFza3NbaV0sIGRlbGVnYXRlKSkge1xuICAgICAgICAgICAgICAgIC8vIHNhbWUgY2FsbGJhY2ssIHNhbWUgY2FwdHVyZSwgc2FtZSBldmVudCBuYW1lLCBqdXN0IHJldHVyblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBleGlzdGluZ1Rhc2tzID0gdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc291cmNlO1xuICAgICAgICBjb25zdCBjb25zdHJ1Y3Rvck5hbWUgPSB0YXJnZXQuY29uc3RydWN0b3JbJ25hbWUnXTtcbiAgICAgICAgY29uc3QgdGFyZ2V0U291cmNlID0gZ2xvYmFsU291cmNlc1tjb25zdHJ1Y3Rvck5hbWVdO1xuICAgICAgICBpZiAodGFyZ2V0U291cmNlKSB7XG4gICAgICAgICAgc291cmNlID0gdGFyZ2V0U291cmNlW2V2ZW50TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgICBzb3VyY2UgPSBjb25zdHJ1Y3Rvck5hbWUgKyBhZGRTb3VyY2UgKyAoZXZlbnROYW1lVG9TdHJpbmcgPyBldmVudE5hbWVUb1N0cmluZyhldmVudE5hbWUpIDogZXZlbnROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJbiB0aGUgY29kZSBiZWxvdywgYG9wdGlvbnNgIHNob3VsZCBubyBsb25nZXIgYmUgcmVhc3NpZ25lZDsgaW5zdGVhZCwgaXRcbiAgICAgICAgLy8gc2hvdWxkIG9ubHkgYmUgbXV0YXRlZC4gVGhpcyBpcyBiZWNhdXNlIHdlIHBhc3MgdGhhdCBvYmplY3QgdG8gdGhlIG5hdGl2ZVxuICAgICAgICAvLyBgYWRkRXZlbnRMaXN0ZW5lcmAuXG4gICAgICAgIC8vIEl0J3MgZ2VuZXJhbGx5IHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgc2FtZSBvYmplY3QgcmVmZXJlbmNlIGZvciBvcHRpb25zLlxuICAgICAgICAvLyBUaGlzIGVuc3VyZXMgY29uc2lzdGVuY3kgYW5kIGF2b2lkcyBwb3RlbnRpYWwgaXNzdWVzLlxuICAgICAgICB0YXNrRGF0YS5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgaWYgKG9uY2UpIHtcbiAgICAgICAgICAvLyBXaGVuIHVzaW5nIGBhZGRFdmVudExpc3RlbmVyYCB3aXRoIHRoZSBgb25jZWAgb3B0aW9uLCB3ZSBkb24ndCBwYXNzXG4gICAgICAgICAgLy8gdGhlIGBvbmNlYCBvcHRpb24gZGlyZWN0bHkgdG8gdGhlIG5hdGl2ZSBgYWRkRXZlbnRMaXN0ZW5lcmAgbWV0aG9kLlxuICAgICAgICAgIC8vIEluc3RlYWQsIHdlIGtlZXAgdGhlIGBvbmNlYCBzZXR0aW5nIGFuZCBoYW5kbGUgaXQgb3Vyc2VsdmVzLlxuICAgICAgICAgIHRhc2tEYXRhLm9wdGlvbnMub25jZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRhc2tEYXRhLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGFza0RhdGEuY2FwdHVyZSA9IGNhcHR1cmU7XG4gICAgICAgIHRhc2tEYXRhLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICAgICAgdGFza0RhdGEuaXNFeGlzdGluZyA9IGlzRXhpc3Rpbmc7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB1c2VHbG9iYWxDYWxsYmFjayA/IE9QVElNSVpFRF9aT05FX0VWRU5UX1RBU0tfREFUQSA6IHVuZGVmaW5lZDtcbiAgICAgICAgLy8ga2VlcCB0YXNrRGF0YSBpbnRvIGRhdGEgdG8gYWxsb3cgb25TY2hlZHVsZUV2ZW50VGFzayB0byBhY2Nlc3MgdGhlIHRhc2sgaW5mb3JtYXRpb25cbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLnRhc2tEYXRhID0gdGFza0RhdGE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpZ25hbCkge1xuICAgICAgICAgIC8vIFdoZW4gdXNpbmcgYGFkZEV2ZW50TGlzdGVuZXJgIHdpdGggdGhlIGBzaWduYWxgIG9wdGlvbiwgd2UgZG9uJ3QgcGFzc1xuICAgICAgICAgIC8vIHRoZSBgc2lnbmFsYCBvcHRpb24gZGlyZWN0bHkgdG8gdGhlIG5hdGl2ZSBgYWRkRXZlbnRMaXN0ZW5lcmAgbWV0aG9kLlxuICAgICAgICAgIC8vIEluc3RlYWQsIHdlIGtlZXAgdGhlIGBzaWduYWxgIHNldHRpbmcgYW5kIGhhbmRsZSBpdCBvdXJzZWx2ZXMuXG4gICAgICAgICAgdGFza0RhdGEub3B0aW9ucy5zaWduYWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIGBzY2hlZHVsZUV2ZW50VGFza2AgZnVuY3Rpb24gd2lsbCB1bHRpbWF0ZWx5IGNhbGwgYGN1c3RvbVNjaGVkdWxlR2xvYmFsYCxcbiAgICAgICAgLy8gd2hpY2ggaW4gdHVybiBjYWxscyB0aGUgbmF0aXZlIGBhZGRFdmVudExpc3RlbmVyYC4gVGhpcyBpcyB3aHkgYHRhc2tEYXRhLm9wdGlvbnNgXG4gICAgICAgIC8vIGlzIHVwZGF0ZWQgYmVmb3JlIHNjaGVkdWxpbmcgdGhlIHRhc2ssIGFzIGBjdXN0b21TY2hlZHVsZUdsb2JhbGAgdXNlc1xuICAgICAgICAvLyBgdGFza0RhdGEub3B0aW9uc2AgdG8gcGFzcyBpdCB0byB0aGUgbmF0aXZlIGBhZGRFdmVudExpc3RlbmVyYC5cbiAgICAgICAgY29uc3QgdGFzayA9IHpvbmUuc2NoZWR1bGVFdmVudFRhc2soc291cmNlLCBkZWxlZ2F0ZSwgZGF0YSwgY3VzdG9tU2NoZWR1bGVGbiwgY3VzdG9tQ2FuY2VsRm4pO1xuICAgICAgICBpZiAoc2lnbmFsKSB7XG4gICAgICAgICAgLy8gYWZ0ZXIgdGFzayBpcyBzY2hlZHVsZWQsIHdlIG5lZWQgdG8gc3RvcmUgdGhlIHNpZ25hbCBiYWNrIHRvIHRhc2sub3B0aW9uc1xuICAgICAgICAgIHRhc2tEYXRhLm9wdGlvbnMuc2lnbmFsID0gc2lnbmFsO1xuICAgICAgICAgIC8vIFdyYXBwaW5nIGB0YXNrYCBpbiBhIHdlYWsgcmVmZXJlbmNlIHdvdWxkIG5vdCBwcmV2ZW50IG1lbW9yeSBsZWFrcy4gV2VhayByZWZlcmVuY2VzIGFyZVxuICAgICAgICAgIC8vIHByaW1hcmlseSB1c2VkIGZvciBwcmV2ZW50aW5nIHN0cm9uZyByZWZlcmVuY2VzIGN5Y2xlcy4gYG9uQWJvcnRgIGlzIGFsd2F5cyByZWFjaGFibGVcbiAgICAgICAgICAvLyBhcyBpdCdzIGFuIGV2ZW50IGxpc3RlbmVyLCBzbyBpdHMgY2xvc3VyZSByZXRhaW5zIGEgc3Ryb25nIHJlZmVyZW5jZSB0byB0aGUgYHRhc2tgLlxuICAgICAgICAgIGNvbnN0IG9uQWJvcnQgPSAoKSA9PiB0YXNrLnpvbmUuY2FuY2VsVGFzayh0YXNrKTtcbiAgICAgICAgICBuYXRpdmVMaXN0ZW5lci5jYWxsKHNpZ25hbCwgJ2Fib3J0Jywgb25BYm9ydCwge1xuICAgICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gcmVtb3ZlIHRoZSBgYWJvcnRgIGxpc3RlbmVyIHdoZW4gdGhlIGV2ZW50IGxpc3RlbmVyIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQsXG4gICAgICAgICAgLy8gYXMgaXQgY3JlYXRlcyBhIGNsb3N1cmUgdGhhdCBjYXB0dXJlcyBgdGFza2AuIFRoaXMgY2xvc3VyZSByZXRhaW5zIGEgcmVmZXJlbmNlIHRvIHRoZVxuICAgICAgICAgIC8vIGB0YXNrYCBvYmplY3QgZXZlbiBhZnRlciBpdCBnb2VzIG91dCBvZiBzY29wZSwgcHJldmVudGluZyBgdGFza2AgZnJvbSBiZWluZyBnYXJiYWdlXG4gICAgICAgICAgLy8gY29sbGVjdGVkLlxuICAgICAgICAgIHRhc2sucmVtb3ZlQWJvcnRMaXN0ZW5lciA9ICgpID0+IHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQWJvcnQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNob3VsZCBjbGVhciB0YXNrRGF0YS50YXJnZXQgdG8gYXZvaWQgbWVtb3J5IGxlYWtcbiAgICAgICAgLy8gaXNzdWUsIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIwNDQyXG4gICAgICAgIHRhc2tEYXRhLnRhcmdldCA9IG51bGw7XG4gICAgICAgIC8vIG5lZWQgdG8gY2xlYXIgdXAgdGFza0RhdGEgYmVjYXVzZSBpdCBpcyBhIGdsb2JhbCBvYmplY3RcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLnRhc2tEYXRhID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBoYXZlIHRvIHNhdmUgdGhvc2UgaW5mb3JtYXRpb24gdG8gdGFzayBpbiBjYXNlXG4gICAgICAgIC8vIGFwcGxpY2F0aW9uIG1heSBjYWxsIHRhc2suem9uZS5jYW5jZWxUYXNrKCkgZGlyZWN0bHlcbiAgICAgICAgaWYgKG9uY2UpIHtcbiAgICAgICAgICB0YXNrRGF0YS5vcHRpb25zLm9uY2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKCFwYXNzaXZlU3VwcG9ydGVkICYmIHR5cGVvZiB0YXNrLm9wdGlvbnMgPT09ICdib29sZWFuJykpIHtcbiAgICAgICAgICAvLyBpZiBub3Qgc3VwcG9ydCBwYXNzaXZlLCBhbmQgd2UgcGFzcyBhbiBvcHRpb24gb2JqZWN0XG4gICAgICAgICAgLy8gdG8gYWRkRXZlbnRMaXN0ZW5lciwgd2Ugc2hvdWxkIHNhdmUgdGhlIG9wdGlvbnMgdG8gdGFza1xuICAgICAgICAgIHRhc2sub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgdGFzay50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRhc2suY2FwdHVyZSA9IGNhcHR1cmU7XG4gICAgICAgIHRhc2suZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgICAgICBpZiAoaXNIYW5kbGVFdmVudCkge1xuICAgICAgICAgIC8vIHNhdmUgb3JpZ2luYWwgZGVsZWdhdGUgZm9yIGNvbXBhcmUgdG8gY2hlY2sgZHVwbGljYXRlXG4gICAgICAgICAgdGFzay5vcmlnaW5hbERlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcmVwZW5kKSB7XG4gICAgICAgICAgZXhpc3RpbmdUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGV4aXN0aW5nVGFza3MudW5zaGlmdCh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmV0dXJuVGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICAgIHByb3RvW0FERF9FVkVOVF9MSVNURU5FUl0gPSBtYWtlQWRkTGlzdGVuZXIobmF0aXZlQWRkRXZlbnRMaXN0ZW5lciwgQUREX0VWRU5UX0xJU1RFTkVSX1NPVVJDRSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCwgcmV0dXJuVGFyZ2V0KTtcbiAgICBpZiAobmF0aXZlUHJlcGVuZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHByb3RvW1BSRVBFTkRfRVZFTlRfTElTVEVORVJdID0gbWFrZUFkZExpc3RlbmVyKG5hdGl2ZVByZXBlbmRFdmVudExpc3RlbmVyLCBQUkVQRU5EX0VWRU5UX0xJU1RFTkVSX1NPVVJDRSwgY3VzdG9tU2NoZWR1bGVQcmVwZW5kLCBjdXN0b21DYW5jZWwsIHJldHVyblRhcmdldCwgdHJ1ZSk7XG4gICAgfVxuICAgIHByb3RvW1JFTU9WRV9FVkVOVF9MSVNURU5FUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzIHx8IF9nbG9iYWw7XG4gICAgICBsZXQgZXZlbnROYW1lID0gYXJndW1lbnRzWzBdO1xuICAgICAgaWYgKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMudHJhbnNmZXJFdmVudE5hbWUpIHtcbiAgICAgICAgZXZlbnROYW1lID0gcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKGV2ZW50TmFtZSk7XG4gICAgICB9XG4gICAgICBjb25zdCBvcHRpb25zID0gYXJndW1lbnRzWzJdO1xuICAgICAgY29uc3QgY2FwdHVyZSA9ICFvcHRpb25zID8gZmFsc2UgOiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Jvb2xlYW4nID8gdHJ1ZSA6IG9wdGlvbnMuY2FwdHVyZTtcbiAgICAgIGNvbnN0IGRlbGVnYXRlID0gYXJndW1lbnRzWzFdO1xuICAgICAgaWYgKCFkZWxlZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgaWYgKHZhbGlkYXRlSGFuZGxlciAmJiAhdmFsaWRhdGVIYW5kbGVyKG5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIsIGRlbGVnYXRlLCB0YXJnZXQsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3ltYm9sRXZlbnROYW1lcyA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gICAgICBsZXQgc3ltYm9sRXZlbnROYW1lO1xuICAgICAgaWYgKHN5bWJvbEV2ZW50TmFtZXMpIHtcbiAgICAgICAgc3ltYm9sRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1tjYXB0dXJlID8gVFJVRV9TVFIgOiBGQUxTRV9TVFJdO1xuICAgICAgfVxuICAgICAgY29uc3QgZXhpc3RpbmdUYXNrcyA9IHN5bWJvbEV2ZW50TmFtZSAmJiB0YXJnZXRbc3ltYm9sRXZlbnROYW1lXTtcbiAgICAgIC8vIGBleGlzdGluZ1Rhc2tzYCBtYXkgbm90IGV4aXN0IGlmIHRoZSBgYWRkRXZlbnRMaXN0ZW5lcmAgd2FzIGNhbGxlZCBiZWZvcmVcbiAgICAgIC8vIGl0IHdhcyBwYXRjaGVkIGJ5IHpvbmUuanMuIFBsZWFzZSByZWZlciB0byB0aGUgYXR0YWNoZWQgaXNzdWUgZm9yXG4gICAgICAvLyBjbGFyaWZpY2F0aW9uLCBwYXJ0aWN1bGFybHkgYWZ0ZXIgdGhlIGBpZmAgY29uZGl0aW9uLCBiZWZvcmUgY2FsbGluZ1xuICAgICAgLy8gdGhlIG5hdGl2ZSBgcmVtb3ZlRXZlbnRMaXN0ZW5lcmAuXG4gICAgICBpZiAoZXhpc3RpbmdUYXNrcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4aXN0aW5nVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBleGlzdGluZ1Rhc2sgPSBleGlzdGluZ1Rhc2tzW2ldO1xuICAgICAgICAgIGlmIChjb21wYXJlKGV4aXN0aW5nVGFzaywgZGVsZWdhdGUpKSB7XG4gICAgICAgICAgICBleGlzdGluZ1Rhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIC8vIHNldCBpc1JlbW92ZWQgdG8gZGF0YSBmb3IgZmFzdGVyIGludm9rZVRhc2sgY2hlY2tcbiAgICAgICAgICAgIGV4aXN0aW5nVGFzay5pc1JlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nVGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIC8vIGFsbCB0YXNrcyBmb3IgdGhlIGV2ZW50TmFtZSArIGNhcHR1cmUgaGF2ZSBnb25lLFxuICAgICAgICAgICAgICAvLyByZW1vdmUgZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2sgYW5kIHJlbW92ZSB0aGUgdGFzayBjYWNoZSBmcm9tIHRhcmdldFxuICAgICAgICAgICAgICBleGlzdGluZ1Rhc2suYWxsUmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHRhcmdldFtzeW1ib2xFdmVudE5hbWVdID0gbnVsbDtcbiAgICAgICAgICAgICAgLy8gaW4gdGhlIHRhcmdldCwgd2UgaGF2ZSBhbiBldmVudCBsaXN0ZW5lciB3aGljaCBpcyBhZGRlZCBieSBvbl9wcm9wZXJ0eVxuICAgICAgICAgICAgICAvLyBzdWNoIGFzIHRhcmdldC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7fSwgc28gd2UgbmVlZCB0byBjbGVhciB0aGlzIGludGVybmFsXG4gICAgICAgICAgICAgIC8vIHByb3BlcnR5IHRvbyBpZiBhbGwgZGVsZWdhdGVzIHdpdGggY2FwdHVyZT1mYWxzZSB3ZXJlIHJlbW92ZWRcbiAgICAgICAgICAgICAgLy8gaHR0cHM6Ly8gZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzMxNjQzXG4gICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzU0NTgxXG4gICAgICAgICAgICAgIGlmICghY2FwdHVyZSAmJiB0eXBlb2YgZXZlbnROYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9uUHJvcGVydHlTeW1ib2wgPSBaT05FX1NZTUJPTF9QUkVGSVggKyAnT05fUFJPUEVSVFknICsgZXZlbnROYW1lO1xuICAgICAgICAgICAgICAgIHRhcmdldFtvblByb3BlcnR5U3ltYm9sXSA9IG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEluIGFsbCBvdGhlciBjb25kaXRpb25zLCB3aGVuIGBhZGRFdmVudExpc3RlbmVyYCBpcyBjYWxsZWQgYWZ0ZXIgYmVpbmdcbiAgICAgICAgICAgIC8vIHBhdGNoZWQgYnkgem9uZS5qcywgd2Ugd291bGQgYWx3YXlzIGZpbmQgYW4gZXZlbnQgdGFzayBvbiB0aGUgYEV2ZW50VGFyZ2V0YC5cbiAgICAgICAgICAgIC8vIFRoaXMgd2lsbCB0cmlnZ2VyIGBjYW5jZWxGbmAgb24gdGhlIGBleGlzdGluZ1Rhc2tgLCBsZWFkaW5nIHRvIGBjdXN0b21DYW5jZWxHbG9iYWxgLFxuICAgICAgICAgICAgLy8gd2hpY2ggdWx0aW1hdGVseSByZW1vdmVzIGFuIGV2ZW50IGxpc3RlbmVyIGFuZCBjbGVhbnMgdXAgdGhlIGFib3J0IGxpc3RlbmVyXG4gICAgICAgICAgICAvLyAoaWYgYW4gYEFib3J0U2lnbmFsYCB3YXMgcHJvdmlkZWQgd2hlbiBzY2hlZHVsaW5nIGEgdGFzaykuXG4gICAgICAgICAgICBleGlzdGluZ1Rhc2suem9uZS5jYW5jZWxUYXNrKGV4aXN0aW5nVGFzayk7XG4gICAgICAgICAgICBpZiAocmV0dXJuVGFyZ2V0KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy85MzBcbiAgICAgIC8vIFdlIG1heSBlbmNvdW50ZXIgYSBzaXR1YXRpb24gd2hlcmUgdGhlIGBhZGRFdmVudExpc3RlbmVyYCB3YXNcbiAgICAgIC8vIGNhbGxlZCBvbiB0aGUgZXZlbnQgdGFyZ2V0IGJlZm9yZSB6b25lLmpzIGlzIGxvYWRlZCwgcmVzdWx0aW5nXG4gICAgICAvLyBpbiBubyB0YXNrIGJlaW5nIHN0b3JlZCBvbiB0aGUgZXZlbnQgdGFyZ2V0IGR1ZSB0byBpdHMgaW52b2NhdGlvblxuICAgICAgLy8gb2YgdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbi4gSW4gdGhpcyBzY2VuYXJpbywgd2Ugc2ltcGx5IG5lZWQgdG9cbiAgICAgIC8vIGludm9rZSB0aGUgbmF0aXZlIGByZW1vdmVFdmVudExpc3RlbmVyYC5cbiAgICAgIHJldHVybiBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICBwcm90b1tMSVNURU5FUlNfRVZFTlRfTElTVEVORVJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcyB8fCBfZ2xvYmFsO1xuICAgICAgbGV0IGV2ZW50TmFtZSA9IGFyZ3VtZW50c1swXTtcbiAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKSB7XG4gICAgICAgIGV2ZW50TmFtZSA9IHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZShldmVudE5hbWUpO1xuICAgICAgfVxuICAgICAgY29uc3QgbGlzdGVuZXJzID0gW107XG4gICAgICBjb25zdCB0YXNrcyA9IGZpbmRFdmVudFRhc2tzKHRhcmdldCwgZXZlbnROYW1lVG9TdHJpbmcgPyBldmVudE5hbWVUb1N0cmluZyhldmVudE5hbWUpIDogZXZlbnROYW1lKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFzayA9IHRhc2tzW2ldO1xuICAgICAgICBsZXQgZGVsZWdhdGUgPSB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPyB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgOiB0YXNrLmNhbGxiYWNrO1xuICAgICAgICBsaXN0ZW5lcnMucHVzaChkZWxlZ2F0ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGlzdGVuZXJzO1xuICAgIH07XG4gICAgcHJvdG9bUkVNT1ZFX0FMTF9MSVNURU5FUlNfRVZFTlRfTElTVEVORVJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcyB8fCBfZ2xvYmFsO1xuICAgICAgbGV0IGV2ZW50TmFtZSA9IGFyZ3VtZW50c1swXTtcbiAgICAgIGlmICghZXZlbnROYW1lKSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0YXJnZXQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBwcm9wID0ga2V5c1tpXTtcbiAgICAgICAgICBjb25zdCBtYXRjaCA9IEVWRU5UX05BTUVfU1lNQk9MX1JFR1guZXhlYyhwcm9wKTtcbiAgICAgICAgICBsZXQgZXZ0TmFtZSA9IG1hdGNoICYmIG1hdGNoWzFdO1xuICAgICAgICAgIC8vIGluIG5vZGVqcyBFdmVudEVtaXR0ZXIsIHJlbW92ZUxpc3RlbmVyIGV2ZW50IGlzXG4gICAgICAgICAgLy8gdXNlZCBmb3IgbW9uaXRvcmluZyB0aGUgcmVtb3ZlTGlzdGVuZXIgY2FsbCxcbiAgICAgICAgICAvLyBzbyBqdXN0IGtlZXAgcmVtb3ZlTGlzdGVuZXIgZXZlbnRMaXN0ZW5lciB1bnRpbFxuICAgICAgICAgIC8vIGFsbCBvdGhlciBldmVudExpc3RlbmVycyBhcmUgcmVtb3ZlZFxuICAgICAgICAgIGlmIChldnROYW1lICYmIGV2dE5hbWUgIT09ICdyZW1vdmVMaXN0ZW5lcicpIHtcbiAgICAgICAgICAgIHRoaXNbUkVNT1ZFX0FMTF9MSVNURU5FUlNfRVZFTlRfTElTVEVORVJdLmNhbGwodGhpcywgZXZ0TmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHJlbW92ZSByZW1vdmVMaXN0ZW5lciBsaXN0ZW5lciBmaW5hbGx5XG4gICAgICAgIHRoaXNbUkVNT1ZFX0FMTF9MSVNURU5FUlNfRVZFTlRfTElTVEVORVJdLmNhbGwodGhpcywgJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZSkge1xuICAgICAgICAgIGV2ZW50TmFtZSA9IHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZShldmVudE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN5bWJvbEV2ZW50TmFtZXMgPSB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdO1xuICAgICAgICBpZiAoc3ltYm9sRXZlbnROYW1lcykge1xuICAgICAgICAgIGNvbnN0IHN5bWJvbEV2ZW50TmFtZSA9IHN5bWJvbEV2ZW50TmFtZXNbRkFMU0VfU1RSXTtcbiAgICAgICAgICBjb25zdCBzeW1ib2xDYXB0dXJlRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1tUUlVFX1NUUl07XG4gICAgICAgICAgY29uc3QgdGFza3MgPSB0YXJnZXRbc3ltYm9sRXZlbnROYW1lXTtcbiAgICAgICAgICBjb25zdCBjYXB0dXJlVGFza3MgPSB0YXJnZXRbc3ltYm9sQ2FwdHVyZUV2ZW50TmFtZV07XG4gICAgICAgICAgaWYgKHRhc2tzKSB7XG4gICAgICAgICAgICBjb25zdCByZW1vdmVUYXNrcyA9IHRhc2tzLnNsaWNlKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbW92ZVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSByZW1vdmVUYXNrc1tpXTtcbiAgICAgICAgICAgICAgbGV0IGRlbGVnYXRlID0gdGFzay5vcmlnaW5hbERlbGVnYXRlID8gdGFzay5vcmlnaW5hbERlbGVnYXRlIDogdGFzay5jYWxsYmFjaztcbiAgICAgICAgICAgICAgdGhpc1tSRU1PVkVfRVZFTlRfTElTVEVORVJdLmNhbGwodGhpcywgZXZlbnROYW1lLCBkZWxlZ2F0ZSwgdGFzay5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNhcHR1cmVUYXNrcykge1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlVGFza3MgPSBjYXB0dXJlVGFza3Muc2xpY2UoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVtb3ZlVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgY29uc3QgdGFzayA9IHJlbW92ZVRhc2tzW2ldO1xuICAgICAgICAgICAgICBsZXQgZGVsZWdhdGUgPSB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPyB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgOiB0YXNrLmNhbGxiYWNrO1xuICAgICAgICAgICAgICB0aGlzW1JFTU9WRV9FVkVOVF9MSVNURU5FUl0uY2FsbCh0aGlzLCBldmVudE5hbWUsIGRlbGVnYXRlLCB0YXNrLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJldHVyblRhcmdldCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIGZvciBuYXRpdmUgdG9TdHJpbmcgcGF0Y2hcbiAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocHJvdG9bQUREX0VWRU5UX0xJU1RFTkVSXSwgbmF0aXZlQWRkRXZlbnRMaXN0ZW5lcik7XG4gICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHByb3RvW1JFTU9WRV9FVkVOVF9MSVNURU5FUl0sIG5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIpO1xuICAgIGlmIChuYXRpdmVSZW1vdmVBbGxMaXN0ZW5lcnMpIHtcbiAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwcm90b1tSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0sIG5hdGl2ZVJlbW92ZUFsbExpc3RlbmVycyk7XG4gICAgfVxuICAgIGlmIChuYXRpdmVMaXN0ZW5lcnMpIHtcbiAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwcm90b1tMSVNURU5FUlNfRVZFTlRfTElTVEVORVJdLCBuYXRpdmVMaXN0ZW5lcnMpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBsZXQgcmVzdWx0cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFwaXMubGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHRzW2ldID0gcGF0Y2hFdmVudFRhcmdldE1ldGhvZHMoYXBpc1tpXSwgcGF0Y2hPcHRpb25zKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0cztcbn1cbmZ1bmN0aW9uIGZpbmRFdmVudFRhc2tzKHRhcmdldCwgZXZlbnROYW1lKSB7XG4gIGlmICghZXZlbnROYW1lKSB7XG4gICAgY29uc3QgZm91bmRUYXNrcyA9IFtdO1xuICAgIGZvciAobGV0IHByb3AgaW4gdGFyZ2V0KSB7XG4gICAgICBjb25zdCBtYXRjaCA9IEVWRU5UX05BTUVfU1lNQk9MX1JFR1guZXhlYyhwcm9wKTtcbiAgICAgIGxldCBldnROYW1lID0gbWF0Y2ggJiYgbWF0Y2hbMV07XG4gICAgICBpZiAoZXZ0TmFtZSAmJiAoIWV2ZW50TmFtZSB8fCBldnROYW1lID09PSBldmVudE5hbWUpKSB7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gdGFyZ2V0W3Byb3BdO1xuICAgICAgICBpZiAodGFza3MpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3VuZFRhc2tzLnB1c2godGFza3NbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZm91bmRUYXNrcztcbiAgfVxuICBsZXQgc3ltYm9sRXZlbnROYW1lID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgaWYgKCFzeW1ib2xFdmVudE5hbWUpIHtcbiAgICBwcmVwYXJlRXZlbnROYW1lcyhldmVudE5hbWUpO1xuICAgIHN5bWJvbEV2ZW50TmFtZSA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gIH1cbiAgY29uc3QgY2FwdHVyZUZhbHNlVGFza3MgPSB0YXJnZXRbc3ltYm9sRXZlbnROYW1lW0ZBTFNFX1NUUl1dO1xuICBjb25zdCBjYXB0dXJlVHJ1ZVRhc2tzID0gdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZVtUUlVFX1NUUl1dO1xuICBpZiAoIWNhcHR1cmVGYWxzZVRhc2tzKSB7XG4gICAgcmV0dXJuIGNhcHR1cmVUcnVlVGFza3MgPyBjYXB0dXJlVHJ1ZVRhc2tzLnNsaWNlKCkgOiBbXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY2FwdHVyZVRydWVUYXNrcyA/IGNhcHR1cmVGYWxzZVRhc2tzLmNvbmNhdChjYXB0dXJlVHJ1ZVRhc2tzKSA6IGNhcHR1cmVGYWxzZVRhc2tzLnNsaWNlKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHBhdGNoRXZlbnRQcm90b3R5cGUoZ2xvYmFsLCBhcGkpIHtcbiAgY29uc3QgRXZlbnQgPSBnbG9iYWxbJ0V2ZW50J107XG4gIGlmIChFdmVudCAmJiBFdmVudC5wcm90b3R5cGUpIHtcbiAgICBhcGkucGF0Y2hNZXRob2QoRXZlbnQucHJvdG90eXBlLCAnc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uJywgZGVsZWdhdGUgPT4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgIHNlbGZbSU1NRURJQVRFX1BST1BBR0FUSU9OX1NZTUJPTF0gPSB0cnVlO1xuICAgICAgLy8gd2UgbmVlZCB0byBjYWxsIHRoZSBuYXRpdmUgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uXG4gICAgICAvLyBpbiBjYXNlIGluIHNvbWUgaHlicmlkIGFwcGxpY2F0aW9uLCBzb21lIHBhcnQgb2ZcbiAgICAgIC8vIGFwcGxpY2F0aW9uIHdpbGwgYmUgY29udHJvbGxlZCBieSB6b25lLCBzb21lIGFyZSBub3RcbiAgICAgIGRlbGVnYXRlICYmIGRlbGVnYXRlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICogQHN1cHByZXNzIHttaXNzaW5nUmVxdWlyZX1cbiAqL1xuZnVuY3Rpb24gcGF0Y2hRdWV1ZU1pY3JvdGFzayhnbG9iYWwsIGFwaSkge1xuICBhcGkucGF0Y2hNZXRob2QoZ2xvYmFsLCAncXVldWVNaWNyb3Rhc2snLCBkZWxlZ2F0ZSA9PiB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICBab25lLmN1cnJlbnQuc2NoZWR1bGVNaWNyb1Rhc2soJ3F1ZXVlTWljcm90YXNrJywgYXJnc1swXSk7XG4gICAgfTtcbiAgfSk7XG59XG5cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICogQHN1cHByZXNzIHttaXNzaW5nUmVxdWlyZX1cbiAqL1xuY29uc3QgdGFza1N5bWJvbCA9IHpvbmVTeW1ib2woJ3pvbmVUYXNrJyk7XG5mdW5jdGlvbiBwYXRjaFRpbWVyKHdpbmRvdywgc2V0TmFtZSwgY2FuY2VsTmFtZSwgbmFtZVN1ZmZpeCkge1xuICBsZXQgc2V0TmF0aXZlID0gbnVsbDtcbiAgbGV0IGNsZWFyTmF0aXZlID0gbnVsbDtcbiAgc2V0TmFtZSArPSBuYW1lU3VmZml4O1xuICBjYW5jZWxOYW1lICs9IG5hbWVTdWZmaXg7XG4gIGNvbnN0IHRhc2tzQnlIYW5kbGVJZCA9IHt9O1xuICBmdW5jdGlvbiBzY2hlZHVsZVRhc2sodGFzaykge1xuICAgIGNvbnN0IGRhdGEgPSB0YXNrLmRhdGE7XG4gICAgZGF0YS5hcmdzWzBdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRhc2suaW52b2tlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVPcklkID0gc2V0TmF0aXZlLmFwcGx5KHdpbmRvdywgZGF0YS5hcmdzKTtcbiAgICAvLyBXaGxpc3Qgb24gTm9kZS5qcyB3aGVuIGdldCBjYW4gdGhlIElEIGJ5IHVzaW5nIGBbU3ltYm9sLnRvUHJpbWl0aXZlXSgpYCB3ZSBkb1xuICAgIC8vIHRvIHRoaXMgc28gdGhhdCB3ZSBkbyBub3QgY2F1c2UgcG90ZW50YWxseSBsZWFrcyB3aGVuIHVzaW5nIGBzZXRUaW1lb3V0YFxuICAgIC8vIHNpbmNlIHRoaXMgY2FuIGJlIHBlcmlvZGljIHdoZW4gdXNpbmcgYC5yZWZyZXNoYC5cbiAgICBpZiAoaXNOdW1iZXIoaGFuZGxlT3JJZCkpIHtcbiAgICAgIGRhdGEuaGFuZGxlSWQgPSBoYW5kbGVPcklkO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLmhhbmRsZSA9IGhhbmRsZU9ySWQ7XG4gICAgICAvLyBPbiBOb2RlLmpzIGEgdGltZW91dCBhbmQgaW50ZXJ2YWwgY2FuIGJlIHJlc3RhcnRlZCBvdmVyIGFuZCBvdmVyIGFnYWluIGJ5IHVzaW5nIHRoZSBgLnJlZnJlc2hgIG1ldGhvZC5cbiAgICAgIGRhdGEuaXNSZWZyZXNoYWJsZSA9IGlzRnVuY3Rpb24oaGFuZGxlT3JJZC5yZWZyZXNoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhc2s7XG4gIH1cbiAgZnVuY3Rpb24gY2xlYXJUYXNrKHRhc2spIHtcbiAgICBjb25zdCB7XG4gICAgICBoYW5kbGUsXG4gICAgICBoYW5kbGVJZFxuICAgIH0gPSB0YXNrLmRhdGE7XG4gICAgcmV0dXJuIGNsZWFyTmF0aXZlLmNhbGwod2luZG93LCBoYW5kbGUgPz8gaGFuZGxlSWQpO1xuICB9XG4gIHNldE5hdGl2ZSA9IHBhdGNoTWV0aG9kKHdpbmRvdywgc2V0TmFtZSwgZGVsZWdhdGUgPT4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihhcmdzWzBdKSkge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgaXNSZWZyZXNoYWJsZTogZmFsc2UsXG4gICAgICAgIGlzUGVyaW9kaWM6IG5hbWVTdWZmaXggPT09ICdJbnRlcnZhbCcsXG4gICAgICAgIGRlbGF5OiBuYW1lU3VmZml4ID09PSAnVGltZW91dCcgfHwgbmFtZVN1ZmZpeCA9PT0gJ0ludGVydmFsJyA/IGFyZ3NbMV0gfHwgMCA6IHVuZGVmaW5lZCxcbiAgICAgICAgYXJnczogYXJnc1xuICAgICAgfTtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gYXJnc1swXTtcbiAgICAgIGFyZ3NbMF0gPSBmdW5jdGlvbiB0aW1lcigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAvLyBpc3N1ZS05MzQsIHRhc2sgd2lsbCBiZSBjYW5jZWxsZWRcbiAgICAgICAgICAvLyBldmVuIGl0IGlzIGEgcGVyaW9kaWMgdGFzayBzdWNoIGFzXG4gICAgICAgICAgLy8gc2V0SW50ZXJ2YWxcbiAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy80MDM4N1xuICAgICAgICAgIC8vIENsZWFudXAgdGFza3NCeUhhbmRsZUlkIHNob3VsZCBiZSBoYW5kbGVkIGJlZm9yZSBzY2hlZHVsZVRhc2tcbiAgICAgICAgICAvLyBTaW5jZSBzb21lIHpvbmVTcGVjIG1heSBpbnRlcmNlcHQgYW5kIGRvZXNuJ3QgdHJpZ2dlclxuICAgICAgICAgIC8vIHNjaGVkdWxlRm4oc2NoZWR1bGVUYXNrKSBwcm92aWRlZCBoZXJlLlxuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGhhbmRsZSxcbiAgICAgICAgICAgIGhhbmRsZUlkLFxuICAgICAgICAgICAgaXNQZXJpb2RpYyxcbiAgICAgICAgICAgIGlzUmVmcmVzaGFibGVcbiAgICAgICAgICB9ID0gb3B0aW9ucztcbiAgICAgICAgICBpZiAoIWlzUGVyaW9kaWMgJiYgIWlzUmVmcmVzaGFibGUpIHtcbiAgICAgICAgICAgIGlmIChoYW5kbGVJZCkge1xuICAgICAgICAgICAgICAvLyBpbiBub24tbm9kZWpzIGVudiwgd2UgcmVtb3ZlIHRpbWVySWRcbiAgICAgICAgICAgICAgLy8gZnJvbSBsb2NhbCBjYWNoZVxuICAgICAgICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZUlkW2hhbmRsZUlkXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlKSB7XG4gICAgICAgICAgICAgIC8vIE5vZGUgcmV0dXJucyBjb21wbGV4IG9iamVjdHMgYXMgaGFuZGxlSWRzXG4gICAgICAgICAgICAgIC8vIHdlIHJlbW92ZSB0YXNrIHJlZmVyZW5jZSBmcm9tIHRpbWVyIG9iamVjdFxuICAgICAgICAgICAgICBoYW5kbGVbdGFza1N5bWJvbF0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHRhc2sgPSBzY2hlZHVsZU1hY3JvVGFza1dpdGhDdXJyZW50Wm9uZShzZXROYW1lLCBhcmdzWzBdLCBvcHRpb25zLCBzY2hlZHVsZVRhc2ssIGNsZWFyVGFzayk7XG4gICAgICBpZiAoIXRhc2spIHtcbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICB9XG4gICAgICAvLyBOb2RlLmpzIG11c3QgYWRkaXRpb25hbGx5IHN1cHBvcnQgdGhlIHJlZiBhbmQgdW5yZWYgZnVuY3Rpb25zLlxuICAgICAgY29uc3Qge1xuICAgICAgICBoYW5kbGVJZCxcbiAgICAgICAgaGFuZGxlLFxuICAgICAgICBpc1JlZnJlc2hhYmxlLFxuICAgICAgICBpc1BlcmlvZGljXG4gICAgICB9ID0gdGFzay5kYXRhO1xuICAgICAgaWYgKGhhbmRsZUlkKSB7XG4gICAgICAgIC8vIGZvciBub24gbm9kZWpzIGVudiwgd2Ugc2F2ZSBoYW5kbGVJZDogdGFza1xuICAgICAgICAvLyBtYXBwaW5nIGluIGxvY2FsIGNhY2hlIGZvciBjbGVhclRpbWVvdXRcbiAgICAgICAgdGFza3NCeUhhbmRsZUlkW2hhbmRsZUlkXSA9IHRhc2s7XG4gICAgICB9IGVsc2UgaWYgKGhhbmRsZSkge1xuICAgICAgICAvLyBmb3Igbm9kZWpzIGVudiwgd2Ugc2F2ZSB0YXNrXG4gICAgICAgIC8vIHJlZmVyZW5jZSBpbiB0aW1lcklkIE9iamVjdCBmb3IgY2xlYXJUaW1lb3V0XG4gICAgICAgIGhhbmRsZVt0YXNrU3ltYm9sXSA9IHRhc2s7XG4gICAgICAgIGlmIChpc1JlZnJlc2hhYmxlICYmICFpc1BlcmlvZGljKSB7XG4gICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZWZyZXNoID0gaGFuZGxlLnJlZnJlc2g7XG4gICAgICAgICAgaGFuZGxlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIHpvbmUsXG4gICAgICAgICAgICAgIHN0YXRlXG4gICAgICAgICAgICB9ID0gdGFzaztcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gJ25vdFNjaGVkdWxlZCcpIHtcbiAgICAgICAgICAgICAgdGFzay5fc3RhdGUgPSAnc2NoZWR1bGVkJztcbiAgICAgICAgICAgICAgem9uZS5fdXBkYXRlVGFza0NvdW50KHRhc2ssIDEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gJ3J1bm5pbmcnKSB7XG4gICAgICAgICAgICAgIHRhc2suX3N0YXRlID0gJ3NjaGVkdWxpbmcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVmcmVzaC5jYWxsKHRoaXMpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBoYW5kbGUgPz8gaGFuZGxlSWQgPz8gdGFzaztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2F1c2UgYW4gZXJyb3IgYnkgY2FsbGluZyBpdCBkaXJlY3RseS5cbiAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseSh3aW5kb3csIGFyZ3MpO1xuICAgIH1cbiAgfSk7XG4gIGNsZWFyTmF0aXZlID0gcGF0Y2hNZXRob2Qod2luZG93LCBjYW5jZWxOYW1lLCBkZWxlZ2F0ZSA9PiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgIGNvbnN0IGlkID0gYXJnc1swXTtcbiAgICBsZXQgdGFzaztcbiAgICBpZiAoaXNOdW1iZXIoaWQpKSB7XG4gICAgICAvLyBub24gbm9kZWpzIGVudi5cbiAgICAgIHRhc2sgPSB0YXNrc0J5SGFuZGxlSWRbaWRdO1xuICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVJZFtpZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vZGVqcyBlbnYgPz8gb3RoZXIgZW52aXJvbm1lbnRzLlxuICAgICAgdGFzayA9IGlkPy5bdGFza1N5bWJvbF07XG4gICAgICBpZiAodGFzaykge1xuICAgICAgICBpZFt0YXNrU3ltYm9sXSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrID0gaWQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0YXNrPy50eXBlKSB7XG4gICAgICBpZiAodGFzay5jYW5jZWxGbikge1xuICAgICAgICAvLyBEbyBub3QgY2FuY2VsIGFscmVhZHkgY2FuY2VsZWQgZnVuY3Rpb25zXG4gICAgICAgIHRhc2suem9uZS5jYW5jZWxUYXNrKHRhc2spO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjYXVzZSBhbiBlcnJvciBieSBjYWxsaW5nIGl0IGRpcmVjdGx5LlxuICAgICAgZGVsZWdhdGUuYXBwbHkod2luZG93LCBhcmdzKTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gcGF0Y2hDdXN0b21FbGVtZW50cyhfZ2xvYmFsLCBhcGkpIHtcbiAgY29uc3Qge1xuICAgIGlzQnJvd3NlcixcbiAgICBpc01peFxuICB9ID0gYXBpLmdldEdsb2JhbE9iamVjdHMoKTtcbiAgaWYgKCFpc0Jyb3dzZXIgJiYgIWlzTWl4IHx8ICFfZ2xvYmFsWydjdXN0b21FbGVtZW50cyddIHx8ICEoJ2N1c3RvbUVsZW1lbnRzJyBpbiBfZ2xvYmFsKSkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9jdXN0b20tZWxlbWVudHMuaHRtbCNjb25jZXB0LWN1c3RvbS1lbGVtZW50LWRlZmluaXRpb24tbGlmZWN5Y2xlLWNhbGxiYWNrc1xuICBjb25zdCBjYWxsYmFja3MgPSBbJ2Nvbm5lY3RlZENhbGxiYWNrJywgJ2Rpc2Nvbm5lY3RlZENhbGxiYWNrJywgJ2Fkb3B0ZWRDYWxsYmFjaycsICdhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2snLCAnZm9ybUFzc29jaWF0ZWRDYWxsYmFjaycsICdmb3JtRGlzYWJsZWRDYWxsYmFjaycsICdmb3JtUmVzZXRDYWxsYmFjaycsICdmb3JtU3RhdGVSZXN0b3JlQ2FsbGJhY2snXTtcbiAgYXBpLnBhdGNoQ2FsbGJhY2tzKGFwaSwgX2dsb2JhbC5jdXN0b21FbGVtZW50cywgJ2N1c3RvbUVsZW1lbnRzJywgJ2RlZmluZScsIGNhbGxiYWNrcyk7XG59XG5mdW5jdGlvbiBldmVudFRhcmdldFBhdGNoKF9nbG9iYWwsIGFwaSkge1xuICBpZiAoWm9uZVthcGkuc3ltYm9sKCdwYXRjaEV2ZW50VGFyZ2V0JyldKSB7XG4gICAgLy8gRXZlbnRUYXJnZXQgaXMgYWxyZWFkeSBwYXRjaGVkLlxuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7XG4gICAgZXZlbnROYW1lcyxcbiAgICB6b25lU3ltYm9sRXZlbnROYW1lcyxcbiAgICBUUlVFX1NUUixcbiAgICBGQUxTRV9TVFIsXG4gICAgWk9ORV9TWU1CT0xfUFJFRklYXG4gIH0gPSBhcGkuZ2V0R2xvYmFsT2JqZWN0cygpO1xuICAvLyAgcHJlZGVmaW5lIGFsbCBfX3pvbmVfc3ltYm9sX18gKyBldmVudE5hbWUgKyB0cnVlL2ZhbHNlIHN0cmluZ1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBldmVudE5hbWUgPSBldmVudE5hbWVzW2ldO1xuICAgIGNvbnN0IGZhbHNlRXZlbnROYW1lID0gZXZlbnROYW1lICsgRkFMU0VfU1RSO1xuICAgIGNvbnN0IHRydWVFdmVudE5hbWUgPSBldmVudE5hbWUgKyBUUlVFX1NUUjtcbiAgICBjb25zdCBzeW1ib2wgPSBaT05FX1NZTUJPTF9QUkVGSVggKyBmYWxzZUV2ZW50TmFtZTtcbiAgICBjb25zdCBzeW1ib2xDYXB0dXJlID0gWk9ORV9TWU1CT0xfUFJFRklYICsgdHJ1ZUV2ZW50TmFtZTtcbiAgICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdID0ge307XG4gICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXVtGQUxTRV9TVFJdID0gc3ltYm9sO1xuICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV1bVFJVRV9TVFJdID0gc3ltYm9sQ2FwdHVyZTtcbiAgfVxuICBjb25zdCBFVkVOVF9UQVJHRVQgPSBfZ2xvYmFsWydFdmVudFRhcmdldCddO1xuICBpZiAoIUVWRU5UX1RBUkdFVCB8fCAhRVZFTlRfVEFSR0VULnByb3RvdHlwZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBhcGkucGF0Y2hFdmVudFRhcmdldChfZ2xvYmFsLCBhcGksIFtFVkVOVF9UQVJHRVQgJiYgRVZFTlRfVEFSR0VULnByb3RvdHlwZV0pO1xuICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHBhdGNoRXZlbnQoZ2xvYmFsLCBhcGkpIHtcbiAgYXBpLnBhdGNoRXZlbnRQcm90b3R5cGUoZ2xvYmFsLCBhcGkpO1xufVxuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBzdXBwcmVzcyB7Z2xvYmFsVGhpc31cbiAqL1xuZnVuY3Rpb24gZmlsdGVyUHJvcGVydGllcyh0YXJnZXQsIG9uUHJvcGVydGllcywgaWdub3JlUHJvcGVydGllcykge1xuICBpZiAoIWlnbm9yZVByb3BlcnRpZXMgfHwgaWdub3JlUHJvcGVydGllcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gb25Qcm9wZXJ0aWVzO1xuICB9XG4gIGNvbnN0IHRpcCA9IGlnbm9yZVByb3BlcnRpZXMuZmlsdGVyKGlwID0+IGlwLnRhcmdldCA9PT0gdGFyZ2V0KTtcbiAgaWYgKCF0aXAgfHwgdGlwLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvblByb3BlcnRpZXM7XG4gIH1cbiAgY29uc3QgdGFyZ2V0SWdub3JlUHJvcGVydGllcyA9IHRpcFswXS5pZ25vcmVQcm9wZXJ0aWVzO1xuICByZXR1cm4gb25Qcm9wZXJ0aWVzLmZpbHRlcihvcCA9PiB0YXJnZXRJZ25vcmVQcm9wZXJ0aWVzLmluZGV4T2Yob3ApID09PSAtMSk7XG59XG5mdW5jdGlvbiBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyh0YXJnZXQsIG9uUHJvcGVydGllcywgaWdub3JlUHJvcGVydGllcywgcHJvdG90eXBlKSB7XG4gIC8vIGNoZWNrIHdoZXRoZXIgdGFyZ2V0IGlzIGF2YWlsYWJsZSwgc29tZXRpbWVzIHRhcmdldCB3aWxsIGJlIHVuZGVmaW5lZFxuICAvLyBiZWNhdXNlIGRpZmZlcmVudCBicm93c2VyIG9yIHNvbWUgM3JkIHBhcnR5IHBsdWdpbi5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZmlsdGVyZWRQcm9wZXJ0aWVzID0gZmlsdGVyUHJvcGVydGllcyh0YXJnZXQsIG9uUHJvcGVydGllcywgaWdub3JlUHJvcGVydGllcyk7XG4gIHBhdGNoT25Qcm9wZXJ0aWVzKHRhcmdldCwgZmlsdGVyZWRQcm9wZXJ0aWVzLCBwcm90b3R5cGUpO1xufVxuLyoqXG4gKiBHZXQgYWxsIGV2ZW50IG5hbWUgcHJvcGVydGllcyB3aGljaCB0aGUgZXZlbnQgbmFtZSBzdGFydHNXaXRoIGBvbmBcbiAqIGZyb20gdGhlIHRhcmdldCBvYmplY3QgaXRzZWxmLCBpbmhlcml0ZWQgcHJvcGVydGllcyBhcmUgbm90IGNvbnNpZGVyZWQuXG4gKi9cbmZ1bmN0aW9uIGdldE9uRXZlbnROYW1lcyh0YXJnZXQpIHtcbiAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCkuZmlsdGVyKG5hbWUgPT4gbmFtZS5zdGFydHNXaXRoKCdvbicpICYmIG5hbWUubGVuZ3RoID4gMikubWFwKG5hbWUgPT4gbmFtZS5zdWJzdHJpbmcoMikpO1xufVxuZnVuY3Rpb24gcHJvcGVydHlEZXNjcmlwdG9yUGF0Y2goYXBpLCBfZ2xvYmFsKSB7XG4gIGlmIChpc05vZGUgJiYgIWlzTWl4KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChab25lW2FwaS5zeW1ib2woJ3BhdGNoRXZlbnRzJyldKSB7XG4gICAgLy8gZXZlbnRzIGFyZSBhbHJlYWR5IGJlZW4gcGF0Y2hlZCBieSBsZWdhY3kgcGF0Y2guXG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGlnbm9yZVByb3BlcnRpZXMgPSBfZ2xvYmFsWydfX1pvbmVfaWdub3JlX29uX3Byb3BlcnRpZXMnXTtcbiAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgd2UgY2FuIHBhdGNoIHRoZSBkZXNjcmlwdG9yOiAgQ2hyb21lICYgRmlyZWZveFxuICBsZXQgcGF0Y2hUYXJnZXRzID0gW107XG4gIGlmIChpc0Jyb3dzZXIpIHtcbiAgICBjb25zdCBpbnRlcm5hbFdpbmRvdyA9IHdpbmRvdztcbiAgICBwYXRjaFRhcmdldHMgPSBwYXRjaFRhcmdldHMuY29uY2F0KFsnRG9jdW1lbnQnLCAnU1ZHRWxlbWVudCcsICdFbGVtZW50JywgJ0hUTUxFbGVtZW50JywgJ0hUTUxCb2R5RWxlbWVudCcsICdIVE1MTWVkaWFFbGVtZW50JywgJ0hUTUxGcmFtZVNldEVsZW1lbnQnLCAnSFRNTEZyYW1lRWxlbWVudCcsICdIVE1MSUZyYW1lRWxlbWVudCcsICdIVE1MTWFycXVlZUVsZW1lbnQnLCAnV29ya2VyJ10pO1xuICAgIGNvbnN0IGlnbm9yZUVycm9yUHJvcGVydGllcyA9IGlzSUUoKSA/IFt7XG4gICAgICB0YXJnZXQ6IGludGVybmFsV2luZG93LFxuICAgICAgaWdub3JlUHJvcGVydGllczogWydlcnJvciddXG4gICAgfV0gOiBbXTtcbiAgICAvLyBpbiBJRS9FZGdlLCBvblByb3Agbm90IGV4aXN0IGluIHdpbmRvdyBvYmplY3QsIGJ1dCBpbiBXaW5kb3dQcm90b3R5cGVcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIHBhc3MgV2luZG93UHJvdG90eXBlIHRvIGNoZWNrIG9uUHJvcCBleGlzdCBvciBub3RcbiAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhpbnRlcm5hbFdpbmRvdywgZ2V0T25FdmVudE5hbWVzKGludGVybmFsV2luZG93KSwgaWdub3JlUHJvcGVydGllcyA/IGlnbm9yZVByb3BlcnRpZXMuY29uY2F0KGlnbm9yZUVycm9yUHJvcGVydGllcykgOiBpZ25vcmVQcm9wZXJ0aWVzLCBPYmplY3RHZXRQcm90b3R5cGVPZihpbnRlcm5hbFdpbmRvdykpO1xuICB9XG4gIHBhdGNoVGFyZ2V0cyA9IHBhdGNoVGFyZ2V0cy5jb25jYXQoWydYTUxIdHRwUmVxdWVzdCcsICdYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0JywgJ0lEQkluZGV4JywgJ0lEQlJlcXVlc3QnLCAnSURCT3BlbkRCUmVxdWVzdCcsICdJREJEYXRhYmFzZScsICdJREJUcmFuc2FjdGlvbicsICdJREJDdXJzb3InLCAnV2ViU29ja2V0J10pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGNoVGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHRhcmdldCA9IF9nbG9iYWxbcGF0Y2hUYXJnZXRzW2ldXTtcbiAgICB0YXJnZXQgJiYgdGFyZ2V0LnByb3RvdHlwZSAmJiBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyh0YXJnZXQucHJvdG90eXBlLCBnZXRPbkV2ZW50TmFtZXModGFyZ2V0LnByb3RvdHlwZSksIGlnbm9yZVByb3BlcnRpZXMpO1xuICB9XG59XG5cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICogQHN1cHByZXNzIHttaXNzaW5nUmVxdWlyZX1cbiAqL1xuZnVuY3Rpb24gcGF0Y2hCcm93c2VyKFpvbmUpIHtcbiAgWm9uZS5fX2xvYWRfcGF0Y2goJ2xlZ2FjeScsIGdsb2JhbCA9PiB7XG4gICAgY29uc3QgbGVnYWN5UGF0Y2ggPSBnbG9iYWxbWm9uZS5fX3N5bWJvbF9fKCdsZWdhY3lQYXRjaCcpXTtcbiAgICBpZiAobGVnYWN5UGF0Y2gpIHtcbiAgICAgIGxlZ2FjeVBhdGNoKCk7XG4gICAgfVxuICB9KTtcbiAgWm9uZS5fX2xvYWRfcGF0Y2goJ3RpbWVycycsIGdsb2JhbCA9PiB7XG4gICAgY29uc3Qgc2V0ID0gJ3NldCc7XG4gICAgY29uc3QgY2xlYXIgPSAnY2xlYXInO1xuICAgIHBhdGNoVGltZXIoZ2xvYmFsLCBzZXQsIGNsZWFyLCAnVGltZW91dCcpO1xuICAgIHBhdGNoVGltZXIoZ2xvYmFsLCBzZXQsIGNsZWFyLCAnSW50ZXJ2YWwnKTtcbiAgICBwYXRjaFRpbWVyKGdsb2JhbCwgc2V0LCBjbGVhciwgJ0ltbWVkaWF0ZScpO1xuICB9KTtcbiAgWm9uZS5fX2xvYWRfcGF0Y2goJ3JlcXVlc3RBbmltYXRpb25GcmFtZScsIGdsb2JhbCA9PiB7XG4gICAgcGF0Y2hUaW1lcihnbG9iYWwsICdyZXF1ZXN0JywgJ2NhbmNlbCcsICdBbmltYXRpb25GcmFtZScpO1xuICAgIHBhdGNoVGltZXIoZ2xvYmFsLCAnbW96UmVxdWVzdCcsICdtb3pDYW5jZWwnLCAnQW5pbWF0aW9uRnJhbWUnKTtcbiAgICBwYXRjaFRpbWVyKGdsb2JhbCwgJ3dlYmtpdFJlcXVlc3QnLCAnd2Via2l0Q2FuY2VsJywgJ0FuaW1hdGlvbkZyYW1lJyk7XG4gIH0pO1xuICBab25lLl9fbG9hZF9wYXRjaCgnYmxvY2tpbmcnLCAoZ2xvYmFsLCBab25lKSA9PiB7XG4gICAgY29uc3QgYmxvY2tpbmdNZXRob2RzID0gWydhbGVydCcsICdwcm9tcHQnLCAnY29uZmlybSddO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2tpbmdNZXRob2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBuYW1lID0gYmxvY2tpbmdNZXRob2RzW2ldO1xuICAgICAgcGF0Y2hNZXRob2QoZ2xvYmFsLCBuYW1lLCAoZGVsZWdhdGUsIHN5bWJvbCwgbmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHMsIGFyZ3MpIHtcbiAgICAgICAgICByZXR1cm4gWm9uZS5jdXJyZW50LnJ1bihkZWxlZ2F0ZSwgZ2xvYmFsLCBhcmdzLCBuYW1lKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIFpvbmUuX19sb2FkX3BhdGNoKCdFdmVudFRhcmdldCcsIChnbG9iYWwsIFpvbmUsIGFwaSkgPT4ge1xuICAgIHBhdGNoRXZlbnQoZ2xvYmFsLCBhcGkpO1xuICAgIGV2ZW50VGFyZ2V0UGF0Y2goZ2xvYmFsLCBhcGkpO1xuICAgIC8vIHBhdGNoIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQncyBhZGRFdmVudExpc3RlbmVyL3JlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICBjb25zdCBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0ID0gZ2xvYmFsWydYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0J107XG4gICAgaWYgKFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQgJiYgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldC5wcm90b3R5cGUpIHtcbiAgICAgIGFwaS5wYXRjaEV2ZW50VGFyZ2V0KGdsb2JhbCwgYXBpLCBbWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldC5wcm90b3R5cGVdKTtcbiAgICB9XG4gIH0pO1xuICBab25lLl9fbG9hZF9wYXRjaCgnTXV0YXRpb25PYnNlcnZlcicsIChnbG9iYWwsIFpvbmUsIGFwaSkgPT4ge1xuICAgIHBhdGNoQ2xhc3MoJ011dGF0aW9uT2JzZXJ2ZXInKTtcbiAgICBwYXRjaENsYXNzKCdXZWJLaXRNdXRhdGlvbk9ic2VydmVyJyk7XG4gIH0pO1xuICBab25lLl9fbG9hZF9wYXRjaCgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInLCAoZ2xvYmFsLCBab25lLCBhcGkpID0+IHtcbiAgICBwYXRjaENsYXNzKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicpO1xuICB9KTtcbiAgWm9uZS5fX2xvYWRfcGF0Y2goJ0ZpbGVSZWFkZXInLCAoZ2xvYmFsLCBab25lLCBhcGkpID0+IHtcbiAgICBwYXRjaENsYXNzKCdGaWxlUmVhZGVyJyk7XG4gIH0pO1xuICBab25lLl9fbG9hZF9wYXRjaCgnb25fcHJvcGVydHknLCAoZ2xvYmFsLCBab25lLCBhcGkpID0+IHtcbiAgICBwcm9wZXJ0eURlc2NyaXB0b3JQYXRjaChhcGksIGdsb2JhbCk7XG4gIH0pO1xuICBab25lLl9fbG9hZF9wYXRjaCgnY3VzdG9tRWxlbWVudHMnLCAoZ2xvYmFsLCBab25lLCBhcGkpID0+IHtcbiAgICBwYXRjaEN1c3RvbUVsZW1lbnRzKGdsb2JhbCwgYXBpKTtcbiAgfSk7XG4gIFpvbmUuX19sb2FkX3BhdGNoKCdYSFInLCAoZ2xvYmFsLCBab25lKSA9PiB7XG4gICAgLy8gVHJlYXQgWE1MSHR0cFJlcXVlc3QgYXMgYSBtYWNyb3Rhc2suXG4gICAgcGF0Y2hYSFIoZ2xvYmFsKTtcbiAgICBjb25zdCBYSFJfVEFTSyA9IHpvbmVTeW1ib2woJ3hoclRhc2snKTtcbiAgICBjb25zdCBYSFJfU1lOQyA9IHpvbmVTeW1ib2woJ3hoclN5bmMnKTtcbiAgICBjb25zdCBYSFJfTElTVEVORVIgPSB6b25lU3ltYm9sKCd4aHJMaXN0ZW5lcicpO1xuICAgIGNvbnN0IFhIUl9TQ0hFRFVMRUQgPSB6b25lU3ltYm9sKCd4aHJTY2hlZHVsZWQnKTtcbiAgICBjb25zdCBYSFJfVVJMID0gem9uZVN5bWJvbCgneGhyVVJMJyk7XG4gICAgY29uc3QgWEhSX0VSUk9SX0JFRk9SRV9TQ0hFRFVMRUQgPSB6b25lU3ltYm9sKCd4aHJFcnJvckJlZm9yZVNjaGVkdWxlZCcpO1xuICAgIGZ1bmN0aW9uIHBhdGNoWEhSKHdpbmRvdykge1xuICAgICAgY29uc3QgWE1MSHR0cFJlcXVlc3QgPSB3aW5kb3dbJ1hNTEh0dHBSZXF1ZXN0J107XG4gICAgICBpZiAoIVhNTEh0dHBSZXF1ZXN0KSB7XG4gICAgICAgIC8vIFhNTEh0dHBSZXF1ZXN0IGlzIG5vdCBhdmFpbGFibGUgaW4gc2VydmljZSB3b3JrZXJcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUgPSBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGU7XG4gICAgICBmdW5jdGlvbiBmaW5kUGVuZGluZ1Rhc2sodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0YXJnZXRbWEhSX1RBU0tdO1xuICAgICAgfVxuICAgICAgbGV0IG9yaUFkZExpc3RlbmVyID0gWE1MSHR0cFJlcXVlc3RQcm90b3R5cGVbWk9ORV9TWU1CT0xfQUREX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgIGxldCBvcmlSZW1vdmVMaXN0ZW5lciA9IFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlW1pPTkVfU1lNQk9MX1JFTU9WRV9FVkVOVF9MSVNURU5FUl07XG4gICAgICBpZiAoIW9yaUFkZExpc3RlbmVyKSB7XG4gICAgICAgIGNvbnN0IFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQgPSB3aW5kb3dbJ1hNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQnXTtcbiAgICAgICAgaWYgKFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQpIHtcbiAgICAgICAgICBjb25zdCBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0UHJvdG90eXBlID0gWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldC5wcm90b3R5cGU7XG4gICAgICAgICAgb3JpQWRkTGlzdGVuZXIgPSBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0UHJvdG90eXBlW1pPTkVfU1lNQk9MX0FERF9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgICAgb3JpUmVtb3ZlTGlzdGVuZXIgPSBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0UHJvdG90eXBlW1pPTkVfU1lNQk9MX1JFTU9WRV9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IFJFQURZX1NUQVRFX0NIQU5HRSA9ICdyZWFkeXN0YXRlY2hhbmdlJztcbiAgICAgIGNvbnN0IFNDSEVEVUxFRCA9ICdzY2hlZHVsZWQnO1xuICAgICAgZnVuY3Rpb24gc2NoZWR1bGVUYXNrKHRhc2spIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRhc2suZGF0YTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZGF0YS50YXJnZXQ7XG4gICAgICAgIHRhcmdldFtYSFJfU0NIRURVTEVEXSA9IGZhbHNlO1xuICAgICAgICB0YXJnZXRbWEhSX0VSUk9SX0JFRk9SRV9TQ0hFRFVMRURdID0gZmFsc2U7XG4gICAgICAgIC8vIHJlbW92ZSBleGlzdGluZyBldmVudCBsaXN0ZW5lclxuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IHRhcmdldFtYSFJfTElTVEVORVJdO1xuICAgICAgICBpZiAoIW9yaUFkZExpc3RlbmVyKSB7XG4gICAgICAgICAgb3JpQWRkTGlzdGVuZXIgPSB0YXJnZXRbWk9ORV9TWU1CT0xfQUREX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgICBvcmlSZW1vdmVMaXN0ZW5lciA9IHRhcmdldFtaT05FX1NZTUJPTF9SRU1PVkVfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICAgIG9yaVJlbW92ZUxpc3RlbmVyLmNhbGwodGFyZ2V0LCBSRUFEWV9TVEFURV9DSEFOR0UsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdMaXN0ZW5lciA9IHRhcmdldFtYSFJfTElTVEVORVJdID0gKCkgPT4ge1xuICAgICAgICAgIGlmICh0YXJnZXQucmVhZHlTdGF0ZSA9PT0gdGFyZ2V0LkRPTkUpIHtcbiAgICAgICAgICAgIC8vIHNvbWV0aW1lcyBvbiBzb21lIGJyb3dzZXJzIFhNTEh0dHBSZXF1ZXN0IHdpbGwgZmlyZSBvbnJlYWR5c3RhdGVjaGFuZ2Ugd2l0aFxuICAgICAgICAgICAgLy8gcmVhZHlTdGF0ZT00IG11bHRpcGxlIHRpbWVzLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIHRhc2sgc3RhdGUgaGVyZVxuICAgICAgICAgICAgaWYgKCFkYXRhLmFib3J0ZWQgJiYgdGFyZ2V0W1hIUl9TQ0hFRFVMRURdICYmIHRhc2suc3RhdGUgPT09IFNDSEVEVUxFRCkge1xuICAgICAgICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSB4aHIgaGFzIHJlZ2lzdGVyZWQgb25sb2FkIGxpc3RlbmVyXG4gICAgICAgICAgICAgIC8vIGlmIHRoYXQgaXMgdGhlIGNhc2UsIHRoZSB0YXNrIHNob3VsZCBpbnZva2UgYWZ0ZXIgYWxsXG4gICAgICAgICAgICAgIC8vIG9ubG9hZCBsaXN0ZW5lcnMgZmluaXNoLlxuICAgICAgICAgICAgICAvLyBBbHNvIGlmIHRoZSByZXF1ZXN0IGZhaWxlZCB3aXRob3V0IHJlc3BvbnNlIChzdGF0dXMgPSAwKSwgdGhlIGxvYWQgZXZlbnQgaGFuZGxlclxuICAgICAgICAgICAgICAvLyB3aWxsIG5vdCBiZSB0cmlnZ2VyZWQsIGluIHRoYXQgY2FzZSwgd2Ugc2hvdWxkIGFsc28gaW52b2tlIHRoZSBwbGFjZWhvbGRlciBjYWxsYmFja1xuICAgICAgICAgICAgICAvLyB0byBjbG9zZSB0aGUgWE1MSHR0cFJlcXVlc3Q6OnNlbmQgbWFjcm9UYXNrLlxuICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8zODc5NVxuICAgICAgICAgICAgICBjb25zdCBsb2FkVGFza3MgPSB0YXJnZXRbWm9uZS5fX3N5bWJvbF9fKCdsb2FkZmFsc2UnKV07XG4gICAgICAgICAgICAgIGlmICh0YXJnZXQuc3RhdHVzICE9PSAwICYmIGxvYWRUYXNrcyAmJiBsb2FkVGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaUludm9rZSA9IHRhc2suaW52b2tlO1xuICAgICAgICAgICAgICAgIHRhc2suaW52b2tlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgLy8gbmVlZCB0byBsb2FkIHRoZSB0YXNrcyBhZ2FpbiwgYmVjYXVzZSBpbiBvdGhlclxuICAgICAgICAgICAgICAgICAgLy8gbG9hZCBsaXN0ZW5lciwgdGhleSBtYXkgcmVtb3ZlIHRoZW1zZWx2ZXNcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRUYXNrcyA9IHRhcmdldFtab25lLl9fc3ltYm9sX18oJ2xvYWRmYWxzZScpXTtcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9hZFRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2FkVGFza3NbaV0gPT09IHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkVGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuYWJvcnRlZCAmJiB0YXNrLnN0YXRlID09PSBTQ0hFRFVMRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpSW52b2tlLmNhbGwodGFzayk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsb2FkVGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXNrLmludm9rZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFkYXRhLmFib3J0ZWQgJiYgdGFyZ2V0W1hIUl9TQ0hFRFVMRURdID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAvLyBlcnJvciBvY2N1cnMgd2hlbiB4aHIuc2VuZCgpXG4gICAgICAgICAgICAgIHRhcmdldFtYSFJfRVJST1JfQkVGT1JFX1NDSEVEVUxFRF0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgb3JpQWRkTGlzdGVuZXIuY2FsbCh0YXJnZXQsIFJFQURZX1NUQVRFX0NIQU5HRSwgbmV3TGlzdGVuZXIpO1xuICAgICAgICBjb25zdCBzdG9yZWRUYXNrID0gdGFyZ2V0W1hIUl9UQVNLXTtcbiAgICAgICAgaWYgKCFzdG9yZWRUYXNrKSB7XG4gICAgICAgICAgdGFyZ2V0W1hIUl9UQVNLXSA9IHRhc2s7XG4gICAgICAgIH1cbiAgICAgICAgc2VuZE5hdGl2ZS5hcHBseSh0YXJnZXQsIGRhdGEuYXJncyk7XG4gICAgICAgIHRhcmdldFtYSFJfU0NIRURVTEVEXSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gcGxhY2Vob2xkZXJDYWxsYmFjaygpIHt9XG4gICAgICBmdW5jdGlvbiBjbGVhclRhc2sodGFzaykge1xuICAgICAgICBjb25zdCBkYXRhID0gdGFzay5kYXRhO1xuICAgICAgICAvLyBOb3RlIC0gaWRlYWxseSwgd2Ugd291bGQgY2FsbCBkYXRhLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyIGhlcmUsIGJ1dCBpdCdzIHRvbyBsYXRlXG4gICAgICAgIC8vIHRvIHByZXZlbnQgaXQgZnJvbSBmaXJpbmcuIFNvIGluc3RlYWQsIHdlIHN0b3JlIGluZm8gZm9yIHRoZSBldmVudCBsaXN0ZW5lci5cbiAgICAgICAgZGF0YS5hYm9ydGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGFib3J0TmF0aXZlLmFwcGx5KGRhdGEudGFyZ2V0LCBkYXRhLmFyZ3MpO1xuICAgICAgfVxuICAgICAgY29uc3Qgb3Blbk5hdGl2ZSA9IHBhdGNoTWV0aG9kKFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlLCAnb3BlbicsICgpID0+IGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgIHNlbGZbWEhSX1NZTkNdID0gYXJnc1syXSA9PSBmYWxzZTtcbiAgICAgICAgc2VsZltYSFJfVVJMXSA9IGFyZ3NbMV07XG4gICAgICAgIHJldHVybiBvcGVuTmF0aXZlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBYTUxIVFRQUkVRVUVTVF9TT1VSQ0UgPSAnWE1MSHR0cFJlcXVlc3Quc2VuZCc7XG4gICAgICBjb25zdCBmZXRjaFRhc2tBYm9ydGluZyA9IHpvbmVTeW1ib2woJ2ZldGNoVGFza0Fib3J0aW5nJyk7XG4gICAgICBjb25zdCBmZXRjaFRhc2tTY2hlZHVsaW5nID0gem9uZVN5bWJvbCgnZmV0Y2hUYXNrU2NoZWR1bGluZycpO1xuICAgICAgY29uc3Qgc2VuZE5hdGl2ZSA9IHBhdGNoTWV0aG9kKFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlLCAnc2VuZCcsICgpID0+IGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgIGlmIChab25lLmN1cnJlbnRbZmV0Y2hUYXNrU2NoZWR1bGluZ10gPT09IHRydWUpIHtcbiAgICAgICAgICAvLyBhIGZldGNoIGlzIHNjaGVkdWxpbmcsIHNvIHdlIGFyZSB1c2luZyB4aHIgdG8gcG9seWZpbGwgZmV0Y2hcbiAgICAgICAgICAvLyBhbmQgYmVjYXVzZSB3ZSBhbHJlYWR5IHNjaGVkdWxlIG1hY3JvVGFzayBmb3IgZmV0Y2gsIHdlIHNob3VsZFxuICAgICAgICAgIC8vIG5vdCBzY2hlZHVsZSBhIG1hY3JvVGFzayBmb3IgeGhyIGFnYWluXG4gICAgICAgICAgcmV0dXJuIHNlbmROYXRpdmUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGZbWEhSX1NZTkNdKSB7XG4gICAgICAgICAgLy8gaWYgdGhlIFhIUiBpcyBzeW5jIHRoZXJlIGlzIG5vIHRhc2sgdG8gc2NoZWR1bGUsIGp1c3QgZXhlY3V0ZSB0aGUgY29kZS5cbiAgICAgICAgICByZXR1cm4gc2VuZE5hdGl2ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGFyZ2V0OiBzZWxmLFxuICAgICAgICAgICAgdXJsOiBzZWxmW1hIUl9VUkxdLFxuICAgICAgICAgICAgaXNQZXJpb2RpYzogZmFsc2UsXG4gICAgICAgICAgICBhcmdzOiBhcmdzLFxuICAgICAgICAgICAgYWJvcnRlZDogZmFsc2VcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnN0IHRhc2sgPSBzY2hlZHVsZU1hY3JvVGFza1dpdGhDdXJyZW50Wm9uZShYTUxIVFRQUkVRVUVTVF9TT1VSQ0UsIHBsYWNlaG9sZGVyQ2FsbGJhY2ssIG9wdGlvbnMsIHNjaGVkdWxlVGFzaywgY2xlYXJUYXNrKTtcbiAgICAgICAgICBpZiAoc2VsZiAmJiBzZWxmW1hIUl9FUlJPUl9CRUZPUkVfU0NIRURVTEVEXSA9PT0gdHJ1ZSAmJiAhb3B0aW9ucy5hYm9ydGVkICYmIHRhc2suc3RhdGUgPT09IFNDSEVEVUxFRCkge1xuICAgICAgICAgICAgLy8geGhyIHJlcXVlc3QgdGhyb3cgZXJyb3Igd2hlbiBzZW5kXG4gICAgICAgICAgICAvLyB3ZSBzaG91bGQgaW52b2tlIHRhc2sgaW5zdGVhZCBvZiBsZWF2aW5nIGEgc2NoZWR1bGVkXG4gICAgICAgICAgICAvLyBwZW5kaW5nIG1hY3JvVGFza1xuICAgICAgICAgICAgdGFzay5pbnZva2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgYWJvcnROYXRpdmUgPSBwYXRjaE1ldGhvZChYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgJ2Fib3J0JywgKCkgPT4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgY29uc3QgdGFzayA9IGZpbmRQZW5kaW5nVGFzayhzZWxmKTtcbiAgICAgICAgaWYgKHRhc2sgJiYgdHlwZW9mIHRhc2sudHlwZSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgIC8vIElmIHRoZSBYSFIgaGFzIGFscmVhZHkgY29tcGxldGVkLCBkbyBub3RoaW5nLlxuICAgICAgICAgIC8vIElmIHRoZSBYSFIgaGFzIGFscmVhZHkgYmVlbiBhYm9ydGVkLCBkbyBub3RoaW5nLlxuICAgICAgICAgIC8vIEZpeCAjNTY5LCBjYWxsIGFib3J0IG11bHRpcGxlIHRpbWVzIGJlZm9yZSBkb25lIHdpbGwgY2F1c2VcbiAgICAgICAgICAvLyBtYWNyb1Rhc2sgdGFzayBjb3VudCBiZSBuZWdhdGl2ZSBudW1iZXJcbiAgICAgICAgICBpZiAodGFzay5jYW5jZWxGbiA9PSBudWxsIHx8IHRhc2suZGF0YSAmJiB0YXNrLmRhdGEuYWJvcnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YXNrLnpvbmUuY2FuY2VsVGFzayh0YXNrKTtcbiAgICAgICAgfSBlbHNlIGlmIChab25lLmN1cnJlbnRbZmV0Y2hUYXNrQWJvcnRpbmddID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gdGhlIGFib3J0IGlzIGNhbGxlZCBmcm9tIGZldGNoIHBvbHlmaWxsLCB3ZSBuZWVkIHRvIGNhbGwgbmF0aXZlIGFib3J0IG9mIFhIUi5cbiAgICAgICAgICByZXR1cm4gYWJvcnROYXRpdmUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSBhcmUgdHJ5aW5nIHRvIGFib3J0IGFuIFhIUiB3aGljaCBoYXMgbm90IHlldCBiZWVuIHNlbnQsIHNvIHRoZXJlIGlzIG5vXG4gICAgICAgIC8vIHRhc2tcbiAgICAgICAgLy8gdG8gY2FuY2VsLiBEbyBub3RoaW5nLlxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgWm9uZS5fX2xvYWRfcGF0Y2goJ2dlb2xvY2F0aW9uJywgZ2xvYmFsID0+IHtcbiAgICAvLy8gR0VPX0xPQ0FUSU9OXG4gICAgaWYgKGdsb2JhbFsnbmF2aWdhdG9yJ10gJiYgZ2xvYmFsWyduYXZpZ2F0b3InXS5nZW9sb2NhdGlvbikge1xuICAgICAgcGF0Y2hQcm90b3R5cGUoZ2xvYmFsWyduYXZpZ2F0b3InXS5nZW9sb2NhdGlvbiwgWydnZXRDdXJyZW50UG9zaXRpb24nLCAnd2F0Y2hQb3NpdGlvbiddKTtcbiAgICB9XG4gIH0pO1xuICBab25lLl9fbG9hZF9wYXRjaCgnUHJvbWlzZVJlamVjdGlvbkV2ZW50JywgKGdsb2JhbCwgWm9uZSkgPT4ge1xuICAgIC8vIGhhbmRsZSB1bmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb25cbiAgICBmdW5jdGlvbiBmaW5kUHJvbWlzZVJlamVjdGlvbkhhbmRsZXIoZXZ0TmFtZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50VGFza3MgPSBmaW5kRXZlbnRUYXNrcyhnbG9iYWwsIGV2dE5hbWUpO1xuICAgICAgICBldmVudFRhc2tzLmZvckVhY2goZXZlbnRUYXNrID0+IHtcbiAgICAgICAgICAvLyB3aW5kb3dzIGhhcyBhZGRlZCB1bmhhbmRsZWRyZWplY3Rpb24gZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICAvLyB0cmlnZ2VyIHRoZSBldmVudCBsaXN0ZW5lclxuICAgICAgICAgIGNvbnN0IFByb21pc2VSZWplY3Rpb25FdmVudCA9IGdsb2JhbFsnUHJvbWlzZVJlamVjdGlvbkV2ZW50J107XG4gICAgICAgICAgaWYgKFByb21pc2VSZWplY3Rpb25FdmVudCkge1xuICAgICAgICAgICAgY29uc3QgZXZ0ID0gbmV3IFByb21pc2VSZWplY3Rpb25FdmVudChldnROYW1lLCB7XG4gICAgICAgICAgICAgIHByb21pc2U6IGUucHJvbWlzZSxcbiAgICAgICAgICAgICAgcmVhc29uOiBlLnJlamVjdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBldmVudFRhc2suaW52b2tlKGV2dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChnbG9iYWxbJ1Byb21pc2VSZWplY3Rpb25FdmVudCddKSB7XG4gICAgICBab25lW3pvbmVTeW1ib2woJ3VuaGFuZGxlZFByb21pc2VSZWplY3Rpb25IYW5kbGVyJyldID0gZmluZFByb21pc2VSZWplY3Rpb25IYW5kbGVyKCd1bmhhbmRsZWRyZWplY3Rpb24nKTtcbiAgICAgIFpvbmVbem9uZVN5bWJvbCgncmVqZWN0aW9uSGFuZGxlZEhhbmRsZXInKV0gPSBmaW5kUHJvbWlzZVJlamVjdGlvbkhhbmRsZXIoJ3JlamVjdGlvbmhhbmRsZWQnKTtcbiAgICB9XG4gIH0pO1xuICBab25lLl9fbG9hZF9wYXRjaCgncXVldWVNaWNyb3Rhc2snLCAoZ2xvYmFsLCBab25lLCBhcGkpID0+IHtcbiAgICBwYXRjaFF1ZXVlTWljcm90YXNrKGdsb2JhbCwgYXBpKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBwYXRjaFByb21pc2UoWm9uZSkge1xuICBab25lLl9fbG9hZF9wYXRjaCgnWm9uZUF3YXJlUHJvbWlzZScsIChnbG9iYWwsIFpvbmUsIGFwaSkgPT4ge1xuICAgIGNvbnN0IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICAgY29uc3QgT2JqZWN0RGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4gICAgZnVuY3Rpb24gcmVhZGFibGVPYmplY3RUb1N0cmluZyhvYmopIHtcbiAgICAgIGlmIChvYmogJiYgb2JqLnRvU3RyaW5nID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgcmV0dXJuIChjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJykgKyAnOiAnICsgSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmogPyBvYmoudG9TdHJpbmcoKSA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xuICAgIH1cbiAgICBjb25zdCBfX3N5bWJvbF9fID0gYXBpLnN5bWJvbDtcbiAgICBjb25zdCBfdW5jYXVnaHRQcm9taXNlRXJyb3JzID0gW107XG4gICAgY29uc3QgaXNEaXNhYmxlV3JhcHBpbmdVbmNhdWdodFByb21pc2VSZWplY3Rpb24gPSBnbG9iYWxbX19zeW1ib2xfXygnRElTQUJMRV9XUkFQUElOR19VTkNBVUdIVF9QUk9NSVNFX1JFSkVDVElPTicpXSAhPT0gZmFsc2U7XG4gICAgY29uc3Qgc3ltYm9sUHJvbWlzZSA9IF9fc3ltYm9sX18oJ1Byb21pc2UnKTtcbiAgICBjb25zdCBzeW1ib2xUaGVuID0gX19zeW1ib2xfXygndGhlbicpO1xuICAgIGNvbnN0IGNyZWF0aW9uVHJhY2UgPSAnX19jcmVhdGlvblRyYWNlX18nO1xuICAgIGFwaS5vblVuaGFuZGxlZEVycm9yID0gZSA9PiB7XG4gICAgICBpZiAoYXBpLnNob3dVbmNhdWdodEVycm9yKCkpIHtcbiAgICAgICAgY29uc3QgcmVqZWN0aW9uID0gZSAmJiBlLnJlamVjdGlvbjtcbiAgICAgICAgaWYgKHJlamVjdGlvbikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBQcm9taXNlIHJlamVjdGlvbjonLCByZWplY3Rpb24gaW5zdGFuY2VvZiBFcnJvciA/IHJlamVjdGlvbi5tZXNzYWdlIDogcmVqZWN0aW9uLCAnOyBab25lOicsIGUuem9uZS5uYW1lLCAnOyBUYXNrOicsIGUudGFzayAmJiBlLnRhc2suc291cmNlLCAnOyBWYWx1ZTonLCByZWplY3Rpb24sIHJlamVjdGlvbiBpbnN0YW5jZW9mIEVycm9yID8gcmVqZWN0aW9uLnN0YWNrIDogdW5kZWZpbmVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBhcGkubWljcm90YXNrRHJhaW5Eb25lID0gKCkgPT4ge1xuICAgICAgd2hpbGUgKF91bmNhdWdodFByb21pc2VFcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHVuY2F1Z2h0UHJvbWlzZUVycm9yID0gX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5zaGlmdCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yLnpvbmUucnVuR3VhcmRlZCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodW5jYXVnaHRQcm9taXNlRXJyb3IudGhyb3dPcmlnaW5hbCkge1xuICAgICAgICAgICAgICB0aHJvdyB1bmNhdWdodFByb21pc2VFcnJvci5yZWplY3Rpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyB1bmNhdWdodFByb21pc2VFcnJvcjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBoYW5kbGVVbmhhbmRsZWRSZWplY3Rpb24oZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBVTkhBTkRMRURfUFJPTUlTRV9SRUpFQ1RJT05fSEFORExFUl9TWU1CT0wgPSBfX3N5bWJvbF9fKCd1bmhhbmRsZWRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcicpO1xuICAgIGZ1bmN0aW9uIGhhbmRsZVVuaGFuZGxlZFJlamVjdGlvbihlKSB7XG4gICAgICBhcGkub25VbmhhbmRsZWRFcnJvcihlKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBab25lW1VOSEFORExFRF9QUk9NSVNFX1JFSkVDVElPTl9IQU5ETEVSX1NZTUJPTF07XG4gICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgIH1cbiAgICBmdW5jdGlvbiBpc1RoZW5hYmxlKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUudGhlbjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZm9yd2FyZFJlc29sdXRpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZm9yd2FyZFJlamVjdGlvbihyZWplY3Rpb24pIHtcbiAgICAgIHJldHVybiBab25lQXdhcmVQcm9taXNlLnJlamVjdChyZWplY3Rpb24pO1xuICAgIH1cbiAgICBjb25zdCBzeW1ib2xTdGF0ZSA9IF9fc3ltYm9sX18oJ3N0YXRlJyk7XG4gICAgY29uc3Qgc3ltYm9sVmFsdWUgPSBfX3N5bWJvbF9fKCd2YWx1ZScpO1xuICAgIGNvbnN0IHN5bWJvbEZpbmFsbHkgPSBfX3N5bWJvbF9fKCdmaW5hbGx5Jyk7XG4gICAgY29uc3Qgc3ltYm9sUGFyZW50UHJvbWlzZVZhbHVlID0gX19zeW1ib2xfXygncGFyZW50UHJvbWlzZVZhbHVlJyk7XG4gICAgY29uc3Qgc3ltYm9sUGFyZW50UHJvbWlzZVN0YXRlID0gX19zeW1ib2xfXygncGFyZW50UHJvbWlzZVN0YXRlJyk7XG4gICAgY29uc3Qgc291cmNlID0gJ1Byb21pc2UudGhlbic7XG4gICAgY29uc3QgVU5SRVNPTFZFRCA9IG51bGw7XG4gICAgY29uc3QgUkVTT0xWRUQgPSB0cnVlO1xuICAgIGNvbnN0IFJFSkVDVEVEID0gZmFsc2U7XG4gICAgY29uc3QgUkVKRUNURURfTk9fQ0FUQ0ggPSAwO1xuICAgIGZ1bmN0aW9uIG1ha2VSZXNvbHZlcihwcm9taXNlLCBzdGF0ZSkge1xuICAgICAgcmV0dXJuIHYgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIHN0YXRlLCB2KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgZmFsc2UsIGVycik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRG8gbm90IHJldHVybiB2YWx1ZSBvciB5b3Ugd2lsbCBicmVhayB0aGUgUHJvbWlzZSBzcGVjLlxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgb25jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCB3YXNDYWxsZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiB3cmFwcGVyKHdyYXBwZWRGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh3YXNDYWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgd2FzQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB3cmFwcGVkRnVuY3Rpb24uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfTtcbiAgICBjb25zdCBUWVBFX0VSUk9SID0gJ1Byb21pc2UgcmVzb2x2ZWQgd2l0aCBpdHNlbGYnO1xuICAgIGNvbnN0IENVUlJFTlRfVEFTS19UUkFDRV9TWU1CT0wgPSBfX3N5bWJvbF9fKCdjdXJyZW50VGFza1RyYWNlJyk7XG4gICAgLy8gUHJvbWlzZSBSZXNvbHV0aW9uXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgc3RhdGUsIHZhbHVlKSB7XG4gICAgICBjb25zdCBvbmNlV3JhcHBlciA9IG9uY2UoKTtcbiAgICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFRZUEVfRVJST1IpO1xuICAgICAgfVxuICAgICAgaWYgKHByb21pc2Vbc3ltYm9sU3RhdGVdID09PSBVTlJFU09MVkVEKSB7XG4gICAgICAgIC8vIHNob3VsZCBvbmx5IGdldCB2YWx1ZS50aGVuIG9uY2UgYmFzZWQgb24gcHJvbWlzZSBzcGVjLlxuICAgICAgICBsZXQgdGhlbiA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGVuID0gdmFsdWUgJiYgdmFsdWUudGhlbjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIG9uY2VXcmFwcGVyKCgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIGZhbHNlLCBlcnIpO1xuICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKHZhbHVlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSkge1xuICAgICAgICBpZiAoc3RhdGUgIT09IFJFSkVDVEVEICYmIHZhbHVlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eShzeW1ib2xTdGF0ZSkgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoc3ltYm9sVmFsdWUpICYmIHZhbHVlW3N5bWJvbFN0YXRlXSAhPT0gVU5SRVNPTFZFRCkge1xuICAgICAgICAgIGNsZWFyUmVqZWN0ZWROb0NhdGNoKHZhbHVlKTtcbiAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCB2YWx1ZVtzeW1ib2xTdGF0ZV0sIHZhbHVlW3N5bWJvbFZhbHVlXSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgIT09IFJFSkVDVEVEICYmIHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgb25jZVdyYXBwZXIobWFrZVJlc29sdmVyKHByb21pc2UsIHN0YXRlKSksIG9uY2VXcmFwcGVyKG1ha2VSZXNvbHZlcihwcm9taXNlLCBmYWxzZSkpKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIG9uY2VXcmFwcGVyKCgpID0+IHtcbiAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgZmFsc2UsIGVycik7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IHN0YXRlO1xuICAgICAgICAgIGNvbnN0IHF1ZXVlID0gcHJvbWlzZVtzeW1ib2xWYWx1ZV07XG4gICAgICAgICAgcHJvbWlzZVtzeW1ib2xWYWx1ZV0gPSB2YWx1ZTtcbiAgICAgICAgICBpZiAocHJvbWlzZVtzeW1ib2xGaW5hbGx5XSA9PT0gc3ltYm9sRmluYWxseSkge1xuICAgICAgICAgICAgLy8gdGhlIHByb21pc2UgaXMgZ2VuZXJhdGVkIGJ5IFByb21pc2UucHJvdG90eXBlLmZpbmFsbHlcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gUkVTT0xWRUQpIHtcbiAgICAgICAgICAgICAgLy8gdGhlIHN0YXRlIGlzIHJlc29sdmVkLCBzaG91bGQgaWdub3JlIHRoZSB2YWx1ZVxuICAgICAgICAgICAgICAvLyBhbmQgdXNlIHBhcmVudCBwcm9taXNlIHZhbHVlXG4gICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gcHJvbWlzZVtzeW1ib2xQYXJlbnRQcm9taXNlU3RhdGVdO1xuICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFZhbHVlXSA9IHByb21pc2Vbc3ltYm9sUGFyZW50UHJvbWlzZVZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gcmVjb3JkIHRhc2sgaW5mb3JtYXRpb24gaW4gdmFsdWUgd2hlbiBlcnJvciBvY2N1cnMsIHNvIHdlIGNhblxuICAgICAgICAgIC8vIGRvIHNvbWUgYWRkaXRpb25hbCB3b3JrIHN1Y2ggYXMgcmVuZGVyIGxvbmdTdGFja1RyYWNlXG4gICAgICAgICAgaWYgKHN0YXRlID09PSBSRUpFQ1RFRCAmJiB2YWx1ZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiBsb25nU3RhY2tUcmFjZVpvbmUgaXMgaGVyZVxuICAgICAgICAgICAgY29uc3QgdHJhY2UgPSBab25lLmN1cnJlbnRUYXNrICYmIFpvbmUuY3VycmVudFRhc2suZGF0YSAmJiBab25lLmN1cnJlbnRUYXNrLmRhdGFbY3JlYXRpb25UcmFjZV07XG4gICAgICAgICAgICBpZiAodHJhY2UpIHtcbiAgICAgICAgICAgICAgLy8gb25seSBrZWVwIHRoZSBsb25nIHN0YWNrIHRyYWNlIGludG8gZXJyb3Igd2hlbiBpbiBsb25nU3RhY2tUcmFjZVpvbmVcbiAgICAgICAgICAgICAgT2JqZWN0RGVmaW5lUHJvcGVydHkodmFsdWUsIENVUlJFTlRfVEFTS19UUkFDRV9TWU1CT0wsIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRyYWNlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDspIHtcbiAgICAgICAgICAgIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0KHByb21pc2UsIHF1ZXVlW2krK10sIHF1ZXVlW2krK10sIHF1ZXVlW2krK10sIHF1ZXVlW2krK10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID09IDAgJiYgc3RhdGUgPT0gUkVKRUNURUQpIHtcbiAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gUkVKRUNURURfTk9fQ0FUQ0g7XG4gICAgICAgICAgICBsZXQgdW5jYXVnaHRQcm9taXNlRXJyb3IgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIC8vIEhlcmUgd2UgdGhyb3dzIGEgbmV3IEVycm9yIHRvIHByaW50IG1vcmUgcmVhZGFibGUgZXJyb3IgbG9nXG4gICAgICAgICAgICAgIC8vIGFuZCBpZiB0aGUgdmFsdWUgaXMgbm90IGFuIGVycm9yLCB6b25lLmpzIGJ1aWxkcyBhbiBgRXJyb3JgXG4gICAgICAgICAgICAgIC8vIE9iamVjdCBoZXJlIHRvIGF0dGFjaCB0aGUgc3RhY2sgaW5mb3JtYXRpb24uXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5jYXVnaHQgKGluIHByb21pc2UpOiAnICsgcmVhZGFibGVPYmplY3RUb1N0cmluZyh2YWx1ZSkgKyAodmFsdWUgJiYgdmFsdWUuc3RhY2sgPyAnXFxuJyArIHZhbHVlLnN0YWNrIDogJycpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICB1bmNhdWdodFByb21pc2VFcnJvciA9IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0Rpc2FibGVXcmFwcGluZ1VuY2F1Z2h0UHJvbWlzZVJlamVjdGlvbikge1xuICAgICAgICAgICAgICAvLyBJZiBkaXNhYmxlIHdyYXBwaW5nIHVuY2F1Z2h0IHByb21pc2UgcmVqZWN0XG4gICAgICAgICAgICAgIC8vIHVzZSB0aGUgdmFsdWUgaW5zdGVhZCBvZiB3cmFwcGluZyBpdC5cbiAgICAgICAgICAgICAgdW5jYXVnaHRQcm9taXNlRXJyb3IudGhyb3dPcmlnaW5hbCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bmNhdWdodFByb21pc2VFcnJvci5yZWplY3Rpb24gPSB2YWx1ZTtcbiAgICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yLnByb21pc2UgPSBwcm9taXNlO1xuICAgICAgICAgICAgdW5jYXVnaHRQcm9taXNlRXJyb3Iuem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yLnRhc2sgPSBab25lLmN1cnJlbnRUYXNrO1xuICAgICAgICAgICAgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5wdXNoKHVuY2F1Z2h0UHJvbWlzZUVycm9yKTtcbiAgICAgICAgICAgIGFwaS5zY2hlZHVsZU1pY3JvVGFzaygpOyAvLyB0byBtYWtlIHN1cmUgdGhhdCBpdCBpcyBydW5uaW5nXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBSZXNvbHZpbmcgYW4gYWxyZWFkeSByZXNvbHZlZCBwcm9taXNlIGlzIGEgbm9vcC5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBjb25zdCBSRUpFQ1RJT05fSEFORExFRF9IQU5ETEVSID0gX19zeW1ib2xfXygncmVqZWN0aW9uSGFuZGxlZEhhbmRsZXInKTtcbiAgICBmdW5jdGlvbiBjbGVhclJlamVjdGVkTm9DYXRjaChwcm9taXNlKSB7XG4gICAgICBpZiAocHJvbWlzZVtzeW1ib2xTdGF0ZV0gPT09IFJFSkVDVEVEX05PX0NBVENIKSB7XG4gICAgICAgIC8vIGlmIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIG5vIGNhdGNoIHN0YXR1c1xuICAgICAgICAvLyBhbmQgcXVldWUubGVuZ3RoID4gMCwgbWVhbnMgdGhlcmUgaXMgYSBlcnJvciBoYW5kbGVyXG4gICAgICAgIC8vIGhlcmUgdG8gaGFuZGxlIHRoZSByZWplY3RlZCBwcm9taXNlLCB3ZSBzaG91bGQgdHJpZ2dlclxuICAgICAgICAvLyB3aW5kb3dzLnJlamVjdGlvbmhhbmRsZWQgZXZlbnRIYW5kbGVyIG9yIG5vZGVqcyByZWplY3Rpb25IYW5kbGVkXG4gICAgICAgIC8vIGV2ZW50SGFuZGxlclxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBab25lW1JFSkVDVElPTl9IQU5ETEVEX0hBTkRMRVJdO1xuICAgICAgICAgIGlmIChoYW5kbGVyICYmIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywge1xuICAgICAgICAgICAgICByZWplY3Rpb246IHByb21pc2Vbc3ltYm9sVmFsdWVdLFxuICAgICAgICAgICAgICBwcm9taXNlOiBwcm9taXNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgcHJvbWlzZVtzeW1ib2xTdGF0ZV0gPSBSRUpFQ1RFRDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfdW5jYXVnaHRQcm9taXNlRXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHByb21pc2UgPT09IF91bmNhdWdodFByb21pc2VFcnJvcnNbaV0ucHJvbWlzZSkge1xuICAgICAgICAgICAgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0KHByb21pc2UsIHpvbmUsIGNoYWluUHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIGNsZWFyUmVqZWN0ZWROb0NhdGNoKHByb21pc2UpO1xuICAgICAgY29uc3QgcHJvbWlzZVN0YXRlID0gcHJvbWlzZVtzeW1ib2xTdGF0ZV07XG4gICAgICBjb25zdCBkZWxlZ2F0ZSA9IHByb21pc2VTdGF0ZSA/IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogZm9yd2FyZFJlc29sdXRpb24gOiB0eXBlb2Ygb25SZWplY3RlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uUmVqZWN0ZWQgOiBmb3J3YXJkUmVqZWN0aW9uO1xuICAgICAgem9uZS5zY2hlZHVsZU1pY3JvVGFzayhzb3VyY2UsICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBwYXJlbnRQcm9taXNlVmFsdWUgPSBwcm9taXNlW3N5bWJvbFZhbHVlXTtcbiAgICAgICAgICBjb25zdCBpc0ZpbmFsbHlQcm9taXNlID0gISFjaGFpblByb21pc2UgJiYgc3ltYm9sRmluYWxseSA9PT0gY2hhaW5Qcm9taXNlW3N5bWJvbEZpbmFsbHldO1xuICAgICAgICAgIGlmIChpc0ZpbmFsbHlQcm9taXNlKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgcHJvbWlzZSBpcyBnZW5lcmF0ZWQgZnJvbSBmaW5hbGx5IGNhbGwsIGtlZXAgcGFyZW50IHByb21pc2UncyBzdGF0ZSBhbmQgdmFsdWVcbiAgICAgICAgICAgIGNoYWluUHJvbWlzZVtzeW1ib2xQYXJlbnRQcm9taXNlVmFsdWVdID0gcGFyZW50UHJvbWlzZVZhbHVlO1xuICAgICAgICAgICAgY2hhaW5Qcm9taXNlW3N5bWJvbFBhcmVudFByb21pc2VTdGF0ZV0gPSBwcm9taXNlU3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHNob3VsZCBub3QgcGFzcyB2YWx1ZSB0byBmaW5hbGx5IGNhbGxiYWNrXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB6b25lLnJ1bihkZWxlZ2F0ZSwgdW5kZWZpbmVkLCBpc0ZpbmFsbHlQcm9taXNlICYmIGRlbGVnYXRlICE9PSBmb3J3YXJkUmVqZWN0aW9uICYmIGRlbGVnYXRlICE9PSBmb3J3YXJkUmVzb2x1dGlvbiA/IFtdIDogW3BhcmVudFByb21pc2VWYWx1ZV0pO1xuICAgICAgICAgIHJlc29sdmVQcm9taXNlKGNoYWluUHJvbWlzZSwgdHJ1ZSwgdmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIGlmIGVycm9yIG9jY3Vycywgc2hvdWxkIGFsd2F5cyByZXR1cm4gdGhpcyBlcnJvclxuICAgICAgICAgIHJlc29sdmVQcm9taXNlKGNoYWluUHJvbWlzZSwgZmFsc2UsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSwgY2hhaW5Qcm9taXNlKTtcbiAgICB9XG4gICAgY29uc3QgWk9ORV9BV0FSRV9QUk9NSVNFX1RPX1NUUklORyA9ICdmdW5jdGlvbiBab25lQXdhcmVQcm9taXNlKCkgeyBbbmF0aXZlIGNvZGVdIH0nO1xuICAgIGNvbnN0IG5vb3AgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBjb25zdCBBZ2dyZWdhdGVFcnJvciA9IGdsb2JhbC5BZ2dyZWdhdGVFcnJvcjtcbiAgICBjbGFzcyBab25lQXdhcmVQcm9taXNlIHtcbiAgICAgIHN0YXRpYyB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFpPTkVfQVdBUkVfUFJPTUlTRV9UT19TVFJJTkc7XG4gICAgICB9XG4gICAgICBzdGF0aWMgcmVzb2x2ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZShuZXcgdGhpcyhudWxsKSwgUkVTT0xWRUQsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHN0YXRpYyByZWplY3QoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlKG5ldyB0aGlzKG51bGwpLCBSRUpFQ1RFRCwgZXJyb3IpO1xuICAgICAgfVxuICAgICAgc3RhdGljIHdpdGhSZXNvbHZlcnMoKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgICAgICByZXN1bHQucHJvbWlzZSA9IG5ldyBab25lQXdhcmVQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgIHJlc3VsdC5yZXNvbHZlID0gcmVzO1xuICAgICAgICAgIHJlc3VsdC5yZWplY3QgPSByZWo7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgc3RhdGljIGFueSh2YWx1ZXMpIHtcbiAgICAgICAgaWYgKCF2YWx1ZXMgfHwgdHlwZW9mIHZhbHVlc1tTeW1ib2wuaXRlcmF0b3JdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBBZ2dyZWdhdGVFcnJvcihbXSwgJ0FsbCBwcm9taXNlcyB3ZXJlIHJlamVjdGVkJykpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yIChsZXQgdiBvZiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFpvbmVBd2FyZVByb21pc2UucmVzb2x2ZSh2KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEFnZ3JlZ2F0ZUVycm9yKFtdLCAnQWxsIHByb21pc2VzIHdlcmUgcmVqZWN0ZWQnKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBBZ2dyZWdhdGVFcnJvcihbXSwgJ0FsbCBwcm9taXNlcyB3ZXJlIHJlamVjdGVkJykpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBlcnJvcnMgPSBbXTtcbiAgICAgICAgcmV0dXJuIG5ldyBab25lQXdhcmVQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb21pc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwcm9taXNlc1tpXS50aGVuKHYgPT4ge1xuICAgICAgICAgICAgICBpZiAoZmluaXNoZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICByZXNvbHZlKHYpO1xuICAgICAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgICAgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgQWdncmVnYXRlRXJyb3IoZXJyb3JzLCAnQWxsIHByb21pc2VzIHdlcmUgcmVqZWN0ZWQnKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBzdGF0aWMgcmFjZSh2YWx1ZXMpIHtcbiAgICAgICAgbGV0IHJlc29sdmU7XG4gICAgICAgIGxldCByZWplY3Q7XG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IHRoaXMoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSA9IHJlcztcbiAgICAgICAgICByZWplY3QgPSByZWo7XG4gICAgICAgIH0pO1xuICAgICAgICBmdW5jdGlvbiBvblJlc29sdmUodmFsdWUpIHtcbiAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvblJlamVjdChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICAgICAgaWYgKCFpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJlc29sdmUodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YWx1ZS50aGVuKG9uUmVzb2x2ZSwgb25SZWplY3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgICAgc3RhdGljIGFsbCh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIFpvbmVBd2FyZVByb21pc2UuYWxsV2l0aENhbGxiYWNrKHZhbHVlcyk7XG4gICAgICB9XG4gICAgICBzdGF0aWMgYWxsU2V0dGxlZCh2YWx1ZXMpIHtcbiAgICAgICAgY29uc3QgUCA9IHRoaXMgJiYgdGhpcy5wcm90b3R5cGUgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlID8gdGhpcyA6IFpvbmVBd2FyZVByb21pc2U7XG4gICAgICAgIHJldHVybiBQLmFsbFdpdGhDYWxsYmFjayh2YWx1ZXMsIHtcbiAgICAgICAgICB0aGVuQ2FsbGJhY2s6IHZhbHVlID0+ICh7XG4gICAgICAgICAgICBzdGF0dXM6ICdmdWxmaWxsZWQnLFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlcnJvckNhbGxiYWNrOiBlcnIgPT4gKHtcbiAgICAgICAgICAgIHN0YXR1czogJ3JlamVjdGVkJyxcbiAgICAgICAgICAgIHJlYXNvbjogZXJyXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBzdGF0aWMgYWxsV2l0aENhbGxiYWNrKHZhbHVlcywgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHJlc29sdmU7XG4gICAgICAgIGxldCByZWplY3Q7XG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IHRoaXMoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSA9IHJlcztcbiAgICAgICAgICByZWplY3QgPSByZWo7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBTdGFydCBhdCAyIHRvIHByZXZlbnQgcHJlbWF0dXJlbHkgcmVzb2x2aW5nIGlmIC50aGVuIGlzIGNhbGxlZCBpbW1lZGlhdGVseS5cbiAgICAgICAgbGV0IHVucmVzb2x2ZWRDb3VudCA9IDI7XG4gICAgICAgIGxldCB2YWx1ZUluZGV4ID0gMDtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICAgICAgaWYgKCFpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJlc29sdmUodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBjdXJWYWx1ZUluZGV4ID0gdmFsdWVJbmRleDtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFsdWUudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgIHJlc29sdmVkVmFsdWVzW2N1clZhbHVlSW5kZXhdID0gY2FsbGJhY2sgPyBjYWxsYmFjay50aGVuQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgICAgICAgICAgIHVucmVzb2x2ZWRDb3VudC0tO1xuICAgICAgICAgICAgICBpZiAodW5yZXNvbHZlZENvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNvbHZlZFZhbHVlcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGVyciA9PiB7XG4gICAgICAgICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlZFZhbHVlc1tjdXJWYWx1ZUluZGV4XSA9IGNhbGxiYWNrLmVycm9yQ2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICB1bnJlc29sdmVkQ291bnQtLTtcbiAgICAgICAgICAgICAgICBpZiAodW5yZXNvbHZlZENvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc29sdmVkVmFsdWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gY2F0Y2ggKHRoZW5FcnIpIHtcbiAgICAgICAgICAgIHJlamVjdCh0aGVuRXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdW5yZXNvbHZlZENvdW50Kys7XG4gICAgICAgICAgdmFsdWVJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1ha2UgdGhlIHVucmVzb2x2ZWRDb3VudCB6ZXJvLWJhc2VkIGFnYWluLlxuICAgICAgICB1bnJlc29sdmVkQ291bnQgLT0gMjtcbiAgICAgICAgaWYgKHVucmVzb2x2ZWRDb3VudCA9PT0gMCkge1xuICAgICAgICAgIHJlc29sdmUocmVzb2x2ZWRWYWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgICAgY29uc3RydWN0b3IoZXhlY3V0b3IpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXM7XG4gICAgICAgIGlmICghKHByb21pc2UgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBiZSBhbiBpbnN0YW5jZW9mIFByb21pc2UuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvbWlzZVtzeW1ib2xTdGF0ZV0gPSBVTlJFU09MVkVEO1xuICAgICAgICBwcm9taXNlW3N5bWJvbFZhbHVlXSA9IFtdOyAvLyBxdWV1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBvbmNlV3JhcHBlciA9IG9uY2UoKTtcbiAgICAgICAgICBleGVjdXRvciAmJiBleGVjdXRvcihvbmNlV3JhcHBlcihtYWtlUmVzb2x2ZXIocHJvbWlzZSwgUkVTT0xWRUQpKSwgb25jZVdyYXBwZXIobWFrZVJlc29sdmVyKHByb21pc2UsIFJFSkVDVEVEKSkpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIGZhbHNlLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuICdQcm9taXNlJztcbiAgICAgIH1cbiAgICAgIGdldCBbU3ltYm9sLnNwZWNpZXNdKCkge1xuICAgICAgICByZXR1cm4gWm9uZUF3YXJlUHJvbWlzZTtcbiAgICAgIH1cbiAgICAgIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgLy8gV2UgbXVzdCByZWFkIGBTeW1ib2wuc3BlY2llc2Agc2FmZWx5IGJlY2F1c2UgYHRoaXNgIG1heSBiZSBhbnl0aGluZy4gRm9yIGluc3RhbmNlLCBgdGhpc2BcbiAgICAgICAgLy8gbWF5IGJlIGFuIG9iamVjdCB3aXRob3V0IGEgcHJvdG90eXBlIChjcmVhdGVkIHRocm91Z2ggYE9iamVjdC5jcmVhdGUobnVsbClgKTsgdGh1c1xuICAgICAgICAvLyBgdGhpcy5jb25zdHJ1Y3RvcmAgd2lsbCBiZSB1bmRlZmluZWQuIE9uZSBvZiB0aGUgdXNlIGNhc2VzIGlzIFN5c3RlbUpTIGNyZWF0aW5nXG4gICAgICAgIC8vIHByb3RvdHlwZS1sZXNzIG9iamVjdHMgKG1vZHVsZXMpIHZpYSBgT2JqZWN0LmNyZWF0ZShudWxsKWAuIFRoZSBTeXN0ZW1KUyBjcmVhdGVzIGFuIGVtcHR5XG4gICAgICAgIC8vIG9iamVjdCBhbmQgY29waWVzIHByb21pc2UgcHJvcGVydGllcyBpbnRvIHRoYXQgb2JqZWN0ICh3aXRoaW4gdGhlIGBnZXRPckNyZWF0ZUxvYWRgXG4gICAgICAgIC8vIGZ1bmN0aW9uKS4gVGhlIHpvbmUuanMgdGhlbiBjaGVja3MgaWYgdGhlIHJlc29sdmVkIHZhbHVlIGhhcyB0aGUgYHRoZW5gIG1ldGhvZCBhbmRcbiAgICAgICAgLy8gaW52b2tlcyBpdCB3aXRoIHRoZSBgdmFsdWVgIGNvbnRleHQuIE90aGVyd2lzZSwgdGhpcyB3aWxsIHRocm93IGFuIGVycm9yOiBgVHlwZUVycm9yOlxuICAgICAgICAvLyBDYW5ub3QgcmVhZCBwcm9wZXJ0aWVzIG9mIHVuZGVmaW5lZCAocmVhZGluZyAnU3ltYm9sKFN5bWJvbC5zcGVjaWVzKScpYC5cbiAgICAgICAgbGV0IEMgPSB0aGlzLmNvbnN0cnVjdG9yPy5bU3ltYm9sLnNwZWNpZXNdO1xuICAgICAgICBpZiAoIUMgfHwgdHlwZW9mIEMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBDID0gdGhpcy5jb25zdHJ1Y3RvciB8fCBab25lQXdhcmVQcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoYWluUHJvbWlzZSA9IG5ldyBDKG5vb3ApO1xuICAgICAgICBjb25zdCB6b25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgICBpZiAodGhpc1tzeW1ib2xTdGF0ZV0gPT0gVU5SRVNPTFZFRCkge1xuICAgICAgICAgIHRoaXNbc3ltYm9sVmFsdWVdLnB1c2goem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2NoZWR1bGVSZXNvbHZlT3JSZWplY3QodGhpcywgem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYWluUHJvbWlzZTtcbiAgICAgIH1cbiAgICAgIGNhdGNoKG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbiAgICAgIH1cbiAgICAgIGZpbmFsbHkob25GaW5hbGx5KSB7XG4gICAgICAgIC8vIFNlZSBjb21tZW50IG9uIHRoZSBjYWxsIHRvIGB0aGVuYCBhYm91dCB3aHkgdGhlZSBgU3ltYm9sLnNwZWNpZXNgIGlzIHNhZmVseSBhY2Nlc3NlZC5cbiAgICAgICAgbGV0IEMgPSB0aGlzLmNvbnN0cnVjdG9yPy5bU3ltYm9sLnNwZWNpZXNdO1xuICAgICAgICBpZiAoIUMgfHwgdHlwZW9mIEMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBDID0gWm9uZUF3YXJlUHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaGFpblByb21pc2UgPSBuZXcgQyhub29wKTtcbiAgICAgICAgY2hhaW5Qcm9taXNlW3N5bWJvbEZpbmFsbHldID0gc3ltYm9sRmluYWxseTtcbiAgICAgICAgY29uc3Qgem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgaWYgKHRoaXNbc3ltYm9sU3RhdGVdID09IFVOUkVTT0xWRUQpIHtcbiAgICAgICAgICB0aGlzW3N5bWJvbFZhbHVlXS5wdXNoKHpvbmUsIGNoYWluUHJvbWlzZSwgb25GaW5hbGx5LCBvbkZpbmFsbHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0KHRoaXMsIHpvbmUsIGNoYWluUHJvbWlzZSwgb25GaW5hbGx5LCBvbkZpbmFsbHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFpblByb21pc2U7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFByb3RlY3QgYWdhaW5zdCBhZ2dyZXNzaXZlIG9wdGltaXplcnMgZHJvcHBpbmcgc2VlbWluZ2x5IHVudXNlZCBwcm9wZXJ0aWVzLlxuICAgIC8vIEUuZy4gQ2xvc3VyZSBDb21waWxlciBpbiBhZHZhbmNlZCBtb2RlLlxuICAgIFpvbmVBd2FyZVByb21pc2VbJ3Jlc29sdmUnXSA9IFpvbmVBd2FyZVByb21pc2UucmVzb2x2ZTtcbiAgICBab25lQXdhcmVQcm9taXNlWydyZWplY3QnXSA9IFpvbmVBd2FyZVByb21pc2UucmVqZWN0O1xuICAgIFpvbmVBd2FyZVByb21pc2VbJ3JhY2UnXSA9IFpvbmVBd2FyZVByb21pc2UucmFjZTtcbiAgICBab25lQXdhcmVQcm9taXNlWydhbGwnXSA9IFpvbmVBd2FyZVByb21pc2UuYWxsO1xuICAgIGNvbnN0IE5hdGl2ZVByb21pc2UgPSBnbG9iYWxbc3ltYm9sUHJvbWlzZV0gPSBnbG9iYWxbJ1Byb21pc2UnXTtcbiAgICBnbG9iYWxbJ1Byb21pc2UnXSA9IFpvbmVBd2FyZVByb21pc2U7XG4gICAgY29uc3Qgc3ltYm9sVGhlblBhdGNoZWQgPSBfX3N5bWJvbF9fKCd0aGVuUGF0Y2hlZCcpO1xuICAgIGZ1bmN0aW9uIHBhdGNoVGhlbihDdG9yKSB7XG4gICAgICBjb25zdCBwcm90byA9IEN0b3IucHJvdG90eXBlO1xuICAgICAgY29uc3QgcHJvcCA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgJ3RoZW4nKTtcbiAgICAgIGlmIChwcm9wICYmIChwcm9wLndyaXRhYmxlID09PSBmYWxzZSB8fCAhcHJvcC5jb25maWd1cmFibGUpKSB7XG4gICAgICAgIC8vIGNoZWNrIEN0b3IucHJvdG90eXBlLnRoZW4gcHJvcGVydHlEZXNjcmlwdG9yIGlzIHdyaXRhYmxlIG9yIG5vdFxuICAgICAgICAvLyBpbiBtZXRlb3IgZW52LCB3cml0YWJsZSBpcyBmYWxzZSwgd2Ugc2hvdWxkIGlnbm9yZSBzdWNoIGNhc2VcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgb3JpZ2luYWxUaGVuID0gcHJvdG8udGhlbjtcbiAgICAgIC8vIEtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cbiAgICAgIHByb3RvW3N5bWJvbFRoZW5dID0gb3JpZ2luYWxUaGVuO1xuICAgICAgQ3Rvci5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvblJlc29sdmUsIG9uUmVqZWN0KSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZWQgPSBuZXcgWm9uZUF3YXJlUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgb3JpZ2luYWxUaGVuLmNhbGwodGhpcywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB3cmFwcGVkLnRoZW4ob25SZXNvbHZlLCBvblJlamVjdCk7XG4gICAgICB9O1xuICAgICAgQ3RvcltzeW1ib2xUaGVuUGF0Y2hlZF0gPSB0cnVlO1xuICAgIH1cbiAgICBhcGkucGF0Y2hUaGVuID0gcGF0Y2hUaGVuO1xuICAgIGZ1bmN0aW9uIHpvbmVpZnkoZm4pIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICBsZXQgcmVzdWx0UHJvbWlzZSA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICBpZiAocmVzdWx0UHJvbWlzZSBpbnN0YW5jZW9mIFpvbmVBd2FyZVByb21pc2UpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3RvciA9IHJlc3VsdFByb21pc2UuY29uc3RydWN0b3I7XG4gICAgICAgIGlmICghY3RvcltzeW1ib2xUaGVuUGF0Y2hlZF0pIHtcbiAgICAgICAgICBwYXRjaFRoZW4oY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoTmF0aXZlUHJvbWlzZSkge1xuICAgICAgcGF0Y2hUaGVuKE5hdGl2ZVByb21pc2UpO1xuICAgICAgcGF0Y2hNZXRob2QoZ2xvYmFsLCAnZmV0Y2gnLCBkZWxlZ2F0ZSA9PiB6b25laWZ5KGRlbGVnYXRlKSk7XG4gICAgfVxuICAgIC8vIFRoaXMgaXMgbm90IHBhcnQgb2YgcHVibGljIEFQSSwgYnV0IGl0IGlzIHVzZWZ1bCBmb3IgdGVzdHMsIHNvIHdlIGV4cG9zZSBpdC5cbiAgICBQcm9taXNlW1pvbmUuX19zeW1ib2xfXygndW5jYXVnaHRQcm9taXNlRXJyb3JzJyldID0gX3VuY2F1Z2h0UHJvbWlzZUVycm9ycztcbiAgICByZXR1cm4gWm9uZUF3YXJlUHJvbWlzZTtcbiAgfSk7XG59XG5mdW5jdGlvbiBwYXRjaFRvU3RyaW5nKFpvbmUpIHtcbiAgLy8gb3ZlcnJpZGUgRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nIHRvIG1ha2Ugem9uZS5qcyBwYXRjaGVkIGZ1bmN0aW9uXG4gIC8vIGxvb2sgbGlrZSBuYXRpdmUgZnVuY3Rpb25cbiAgWm9uZS5fX2xvYWRfcGF0Y2goJ3RvU3RyaW5nJywgZ2xvYmFsID0+IHtcbiAgICAvLyBwYXRjaCBGdW5jLnByb3RvdHlwZS50b1N0cmluZyB0byBsZXQgdGhlbSBsb29rIGxpa2UgbmF0aXZlXG4gICAgY29uc3Qgb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuICAgIGNvbnN0IE9SSUdJTkFMX0RFTEVHQVRFX1NZTUJPTCA9IHpvbmVTeW1ib2woJ09yaWdpbmFsRGVsZWdhdGUnKTtcbiAgICBjb25zdCBQUk9NSVNFX1NZTUJPTCA9IHpvbmVTeW1ib2woJ1Byb21pc2UnKTtcbiAgICBjb25zdCBFUlJPUl9TWU1CT0wgPSB6b25lU3ltYm9sKCdFcnJvcicpO1xuICAgIGNvbnN0IG5ld0Z1bmN0aW9uVG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCBvcmlnaW5hbERlbGVnYXRlID0gdGhpc1tPUklHSU5BTF9ERUxFR0FURV9TWU1CT0xdO1xuICAgICAgICBpZiAob3JpZ2luYWxEZWxlZ2F0ZSkge1xuICAgICAgICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxEZWxlZ2F0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZy5jYWxsKG9yaWdpbmFsRGVsZWdhdGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9yaWdpbmFsRGVsZWdhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcyA9PT0gUHJvbWlzZSkge1xuICAgICAgICAgIGNvbnN0IG5hdGl2ZVByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV9TWU1CT0xdO1xuICAgICAgICAgIGlmIChuYXRpdmVQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nLmNhbGwobmF0aXZlUHJvbWlzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzID09PSBFcnJvcikge1xuICAgICAgICAgIGNvbnN0IG5hdGl2ZUVycm9yID0gZ2xvYmFsW0VSUk9SX1NZTUJPTF07XG4gICAgICAgICAgaWYgKG5hdGl2ZUVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nLmNhbGwobmF0aXZlRXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZy5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgbmV3RnVuY3Rpb25Ub1N0cmluZ1tPUklHSU5BTF9ERUxFR0FURV9TWU1CT0xdID0gb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nO1xuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG5ld0Z1bmN0aW9uVG9TdHJpbmc7XG4gICAgLy8gcGF0Y2ggT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyB0byBsZXQgdGhlbSBsb29rIGxpa2UgbmF0aXZlXG4gICAgY29uc3Qgb3JpZ2luYWxPYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gICAgY29uc3QgUFJPTUlTRV9PQkpFQ1RfVE9fU1RSSU5HID0gJ1tvYmplY3QgUHJvbWlzZV0nO1xuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodHlwZW9mIFByb21pc2UgPT09ICdmdW5jdGlvbicgJiYgdGhpcyBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIFBST01JU0VfT0JKRUNUX1RPX1NUUklORztcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcmlnaW5hbE9iamVjdFRvU3RyaW5nLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgfSk7XG59XG5mdW5jdGlvbiBwYXRjaENhbGxiYWNrcyhhcGksIHRhcmdldCwgdGFyZ2V0TmFtZSwgbWV0aG9kLCBjYWxsYmFja3MpIHtcbiAgY29uc3Qgc3ltYm9sID0gWm9uZS5fX3N5bWJvbF9fKG1ldGhvZCk7XG4gIGlmICh0YXJnZXRbc3ltYm9sXSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBuYXRpdmVEZWxlZ2F0ZSA9IHRhcmdldFtzeW1ib2xdID0gdGFyZ2V0W21ldGhvZF07XG4gIHRhcmdldFttZXRob2RdID0gZnVuY3Rpb24gKG5hbWUsIG9wdHMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0cyAmJiBvcHRzLnByb3RvdHlwZSkge1xuICAgICAgY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IGAke3RhcmdldE5hbWV9LiR7bWV0aG9kfTo6YCArIGNhbGxiYWNrO1xuICAgICAgICBjb25zdCBwcm90b3R5cGUgPSBvcHRzLnByb3RvdHlwZTtcbiAgICAgICAgLy8gTm90ZTogdGhlIGBwYXRjaENhbGxiYWNrc2AgaXMgdXNlZCBmb3IgcGF0Y2hpbmcgdGhlIGBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnRgIGFuZFxuICAgICAgICAvLyBgY3VzdG9tRWxlbWVudHMuZGVmaW5lYC4gV2UgZXhwbGljaXRseSB3cmFwIHRoZSBwYXRjaGluZyBjb2RlIGludG8gdHJ5LWNhdGNoIHNpbmNlXG4gICAgICAgIC8vIGNhbGxiYWNrcyBtYXkgYmUgYWxyZWFkeSBwYXRjaGVkIGJ5IG90aGVyIHdlYiBjb21wb25lbnRzIGZyYW1ld29ya3MgKGUuZy4gTFdDKSwgYW5kIHRoZXlcbiAgICAgICAgLy8gbWFrZSB0aG9zZSBwcm9wZXJ0aWVzIG5vbi13cml0YWJsZS4gVGhpcyBtZWFucyB0aGF0IHBhdGNoaW5nIGNhbGxiYWNrIHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgLy8gYGNhbm5vdCBhc3NpZ24gdG8gcmVhZC1vbmx5IHByb3BlcnR5YC4gU2VlIHRoaXMgY29kZSBhcyBhbiBleGFtcGxlOlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc2FsZXNmb3JjZS9sd2MvYmxvYi9tYXN0ZXIvcGFja2FnZXMvQGx3Yy9lbmdpbmUtY29yZS9zcmMvZnJhbWV3b3JrL2Jhc2UtYnJpZGdlLWVsZW1lbnQudHMjTDE4MC1MMTg2XG4gICAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gc3RvcCB0aGUgYXBwbGljYXRpb24gcmVuZGVyaW5nIGlmIHdlIGNvdWxkbid0IHBhdGNoIHNvbWVcbiAgICAgICAgLy8gY2FsbGJhY2ssIGUuZy4gYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBhcGkuT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZSkge1xuICAgICAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gYXBpLndyYXBXaXRoQ3VycmVudFpvbmUoZGVzY3JpcHRvci52YWx1ZSwgc291cmNlKTtcbiAgICAgICAgICAgICAgYXBpLl9yZWRlZmluZVByb3BlcnR5KG9wdHMucHJvdG90eXBlLCBjYWxsYmFjaywgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3RvdHlwZVtjYWxsYmFja10pIHtcbiAgICAgICAgICAgICAgcHJvdG90eXBlW2NhbGxiYWNrXSA9IGFwaS53cmFwV2l0aEN1cnJlbnRab25lKHByb3RvdHlwZVtjYWxsYmFja10sIHNvdXJjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChwcm90b3R5cGVbY2FsbGJhY2tdKSB7XG4gICAgICAgICAgICBwcm90b3R5cGVbY2FsbGJhY2tdID0gYXBpLndyYXBXaXRoQ3VycmVudFpvbmUocHJvdG90eXBlW2NhbGxiYWNrXSwgc291cmNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8vIE5vdGU6IHdlIGxlYXZlIHRoZSBjYXRjaCBibG9jayBlbXB0eSBzaW5jZSB0aGVyZSdzIG5vIHdheSB0byBoYW5kbGUgdGhlIGVycm9yIHJlbGF0ZWRcbiAgICAgICAgICAvLyB0byBub24td3JpdGFibGUgcHJvcGVydHkuXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmF0aXZlRGVsZWdhdGUuY2FsbCh0YXJnZXQsIG5hbWUsIG9wdHMsIG9wdGlvbnMpO1xuICB9O1xuICBhcGkuYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHRhcmdldFttZXRob2RdLCBuYXRpdmVEZWxlZ2F0ZSk7XG59XG5mdW5jdGlvbiBwYXRjaFV0aWwoWm9uZSkge1xuICBab25lLl9fbG9hZF9wYXRjaCgndXRpbCcsIChnbG9iYWwsIFpvbmUsIGFwaSkgPT4ge1xuICAgIC8vIENvbGxlY3QgbmF0aXZlIGV2ZW50IG5hbWVzIGJ5IGxvb2tpbmcgYXQgcHJvcGVydGllc1xuICAgIC8vIG9uIHRoZSBnbG9iYWwgbmFtZXNwYWNlLCBlLmcuICdvbmNsaWNrJy5cbiAgICBjb25zdCBldmVudE5hbWVzID0gZ2V0T25FdmVudE5hbWVzKGdsb2JhbCk7XG4gICAgYXBpLnBhdGNoT25Qcm9wZXJ0aWVzID0gcGF0Y2hPblByb3BlcnRpZXM7XG4gICAgYXBpLnBhdGNoTWV0aG9kID0gcGF0Y2hNZXRob2Q7XG4gICAgYXBpLmJpbmRBcmd1bWVudHMgPSBiaW5kQXJndW1lbnRzO1xuICAgIGFwaS5wYXRjaE1hY3JvVGFzayA9IHBhdGNoTWFjcm9UYXNrO1xuICAgIC8vIEluIGVhcmxpZXIgdmVyc2lvbiBvZiB6b25lLmpzICg8MC45LjApLCB3ZSB1c2UgZW52IG5hbWUgYF9fem9uZV9zeW1ib2xfX0JMQUNLX0xJU1RFRF9FVkVOVFNgXG4gICAgLy8gdG8gZGVmaW5lIHdoaWNoIGV2ZW50cyB3aWxsIG5vdCBiZSBwYXRjaGVkIGJ5IGBab25lLmpzYC4gSW4gbmV3ZXIgdmVyc2lvbiAoPj0wLjkuMCksIHdlXG4gICAgLy8gY2hhbmdlIHRoZSBlbnYgbmFtZSB0byBgX196b25lX3N5bWJvbF9fVU5QQVRDSEVEX0VWRU5UU2AgdG8ga2VlcCB0aGUgbmFtZSBjb25zaXN0ZW50IHdpdGhcbiAgICAvLyBhbmd1bGFyIHJlcG8uIFRoZSAgYF9fem9uZV9zeW1ib2xfX0JMQUNLX0xJU1RFRF9FVkVOVFNgIGlzIGRlcHJlY2F0ZWQsIGJ1dCBpdCBpcyBzdGlsbCBiZVxuICAgIC8vIHN1cHBvcnRlZCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAgY29uc3QgU1lNQk9MX0JMQUNLX0xJU1RFRF9FVkVOVFMgPSBab25lLl9fc3ltYm9sX18oJ0JMQUNLX0xJU1RFRF9FVkVOVFMnKTtcbiAgICBjb25zdCBTWU1CT0xfVU5QQVRDSEVEX0VWRU5UUyA9IFpvbmUuX19zeW1ib2xfXygnVU5QQVRDSEVEX0VWRU5UUycpO1xuICAgIGlmIChnbG9iYWxbU1lNQk9MX1VOUEFUQ0hFRF9FVkVOVFNdKSB7XG4gICAgICBnbG9iYWxbU1lNQk9MX0JMQUNLX0xJU1RFRF9FVkVOVFNdID0gZ2xvYmFsW1NZTUJPTF9VTlBBVENIRURfRVZFTlRTXTtcbiAgICB9XG4gICAgaWYgKGdsb2JhbFtTWU1CT0xfQkxBQ0tfTElTVEVEX0VWRU5UU10pIHtcbiAgICAgIFpvbmVbU1lNQk9MX0JMQUNLX0xJU1RFRF9FVkVOVFNdID0gWm9uZVtTWU1CT0xfVU5QQVRDSEVEX0VWRU5UU10gPSBnbG9iYWxbU1lNQk9MX0JMQUNLX0xJU1RFRF9FVkVOVFNdO1xuICAgIH1cbiAgICBhcGkucGF0Y2hFdmVudFByb3RvdHlwZSA9IHBhdGNoRXZlbnRQcm90b3R5cGU7XG4gICAgYXBpLnBhdGNoRXZlbnRUYXJnZXQgPSBwYXRjaEV2ZW50VGFyZ2V0O1xuICAgIGFwaS5pc0lFT3JFZGdlID0gaXNJRU9yRWRnZTtcbiAgICBhcGkuT2JqZWN0RGVmaW5lUHJvcGVydHkgPSBPYmplY3REZWZpbmVQcm9wZXJ0eTtcbiAgICBhcGkuT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAgIGFwaS5PYmplY3RDcmVhdGUgPSBPYmplY3RDcmVhdGU7XG4gICAgYXBpLkFycmF5U2xpY2UgPSBBcnJheVNsaWNlO1xuICAgIGFwaS5wYXRjaENsYXNzID0gcGF0Y2hDbGFzcztcbiAgICBhcGkud3JhcFdpdGhDdXJyZW50Wm9uZSA9IHdyYXBXaXRoQ3VycmVudFpvbmU7XG4gICAgYXBpLmZpbHRlclByb3BlcnRpZXMgPSBmaWx0ZXJQcm9wZXJ0aWVzO1xuICAgIGFwaS5hdHRhY2hPcmlnaW5Ub1BhdGNoZWQgPSBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQ7XG4gICAgYXBpLl9yZWRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuICAgIGFwaS5wYXRjaENhbGxiYWNrcyA9IHBhdGNoQ2FsbGJhY2tzO1xuICAgIGFwaS5nZXRHbG9iYWxPYmplY3RzID0gKCkgPT4gKHtcbiAgICAgIGdsb2JhbFNvdXJjZXMsXG4gICAgICB6b25lU3ltYm9sRXZlbnROYW1lcyxcbiAgICAgIGV2ZW50TmFtZXMsXG4gICAgICBpc0Jyb3dzZXIsXG4gICAgICBpc01peCxcbiAgICAgIGlzTm9kZSxcbiAgICAgIFRSVUVfU1RSLFxuICAgICAgRkFMU0VfU1RSLFxuICAgICAgWk9ORV9TWU1CT0xfUFJFRklYLFxuICAgICAgQUREX0VWRU5UX0xJU1RFTkVSX1NUUixcbiAgICAgIFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFJcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBwYXRjaENvbW1vbihab25lKSB7XG4gIHBhdGNoUHJvbWlzZShab25lKTtcbiAgcGF0Y2hUb1N0cmluZyhab25lKTtcbiAgcGF0Y2hVdGlsKFpvbmUpO1xufVxuY29uc3QgWm9uZSQxID0gbG9hZFpvbmUoKTtcbnBhdGNoQ29tbW9uKFpvbmUkMSk7XG5wYXRjaEJyb3dzZXIoWm9uZSQxKTsiLCIvKipcbiAqIEBsaWNlbnNlIEFuZ3VsYXIgdjE5LjIuNVxuICogKGMpIDIwMTAtMjAyNSBHb29nbGUgTExDLiBodHRwczovL2FuZ3VsYXIuaW8vXG4gKiBMaWNlbnNlOiBNSVRcbiAqL1xuXG4vKipcbiAqIFRoZSBjaGFyYWN0ZXIgdXNlZCB0byBtYXJrIHRoZSBzdGFydCBhbmQgZW5kIG9mIGEgXCJibG9ja1wiIGluIGEgYCRsb2NhbGl6ZWAgdGFnZ2VkIHN0cmluZy5cbiAqIEEgYmxvY2sgY2FuIGluZGljYXRlIG1ldGFkYXRhIGFib3V0IHRoZSBtZXNzYWdlIG9yIHNwZWNpZnkgYSBuYW1lIG9mIGEgcGxhY2Vob2xkZXIgZm9yIGFcbiAqIHN1YnN0aXR1dGlvbiBleHByZXNzaW9ucy5cbiAqXG4gKiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGB0c1xuICogJGxvY2FsaXplYEhlbGxvLCAke3RpdGxlfTp0aXRsZTohYDtcbiAqICRsb2NhbGl6ZWA6bWVhbmluZ3xkZXNjcmlwdGlvbkBAaWQ6c291cmNlIG1lc3NhZ2UgdGV4dGA7XG4gKiBgYGBcbiAqL1xuY29uc3QgQkxPQ0tfTUFSS0VSJDEgPSAnOic7XG4vKipcbiAqIFRoZSBtYXJrZXIgdXNlZCB0byBzZXBhcmF0ZSBhIG1lc3NhZ2UncyBcIm1lYW5pbmdcIiBmcm9tIGl0cyBcImRlc2NyaXB0aW9uXCIgaW4gYSBtZXRhZGF0YSBibG9jay5cbiAqXG4gKiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGB0c1xuICogJGxvY2FsaXplIGA6Y29ycmVjdHxJbmRpY2F0ZXMgdGhhdCB0aGUgdXNlciBnb3QgdGhlIGFuc3dlciBjb3JyZWN0OiBSaWdodCFgO1xuICogJGxvY2FsaXplIGA6bW92ZW1lbnR8QnV0dG9uIGxhYmVsIGZvciBtb3ZpbmcgdG8gdGhlIHJpZ2h0OiBSaWdodCFgO1xuICogYGBgXG4gKi9cbmNvbnN0IE1FQU5JTkdfU0VQQVJBVE9SID0gJ3wnO1xuLyoqXG4gKiBUaGUgbWFya2VyIHVzZWQgdG8gc2VwYXJhdGUgYSBtZXNzYWdlJ3MgY3VzdG9tIFwiaWRcIiBmcm9tIGl0cyBcImRlc2NyaXB0aW9uXCIgaW4gYSBtZXRhZGF0YSBibG9jay5cbiAqXG4gKiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGB0c1xuICogJGxvY2FsaXplIGA6QSB3ZWxjb21lIG1lc3NhZ2Ugb24gdGhlIGhvbWUgcGFnZUBAbXlBcHAtaG9tZXBhZ2Utd2VsY29tZTogV2VsY29tZSFgO1xuICogYGBgXG4gKi9cbmNvbnN0IElEX1NFUEFSQVRPUiA9ICdAQCc7XG4vKipcbiAqIFRoZSBtYXJrZXIgdXNlZCB0byBzZXBhcmF0ZSBsZWdhY3kgbWVzc2FnZSBpZHMgZnJvbSB0aGUgcmVzdCBvZiBhIG1ldGFkYXRhIGJsb2NrLlxuICpcbiAqIEZvciBleGFtcGxlOlxuICpcbiAqIGBgYHRzXG4gKiAkbG9jYWxpemUgYDpAQGN1c3RvbS1pZOKQnzJkZjY0NzY3Y2Q4OTVhOGZhYmUzZTE4Yjk0YjViNmI2ZjllMmUzZjA6IFdlbGNvbWUhYDtcbiAqIGBgYFxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIGNoYXJhY3RlciBpcyB0aGUgXCJzeW1ib2wgZm9yIHRoZSB1bml0IHNlcGFyYXRvclwiICjikJ8pIG5vdCB0aGUgXCJ1bml0IHNlcGFyYXRvclxuICogY2hhcmFjdGVyXCIgaXRzZWxmLCBzaW5jZSB0aGF0IGhhcyBubyB2aXN1YWwgcmVwcmVzZW50YXRpb24uIFNlZSBodHRwczovL2dyYXBoZW1pY2EuY29tLyVFMiU5MCU5Ri5cbiAqXG4gKiBIZXJlIGlzIHNvbWUgYmFja2dyb3VuZCBmb3IgdGhlIG9yaWdpbmFsIFwidW5pdCBzZXBhcmF0b3IgY2hhcmFjdGVyXCI6XG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy84Njk1MTE4L3doYXRzLXRoZS1maWxlLWdyb3VwLXJlY29yZC11bml0LXNlcGFyYXRvci1jb250cm9sLWNoYXJhY3RlcnMtYW5kLWl0cy11c2FnZVxuICovXG5jb25zdCBMRUdBQ1lfSURfSU5ESUNBVE9SID0gJ1xcdTI0MUYnO1xuXG4vKipcbiAqIEEgbGF6aWx5IGNyZWF0ZWQgVGV4dEVuY29kZXIgaW5zdGFuY2UgZm9yIGNvbnZlcnRpbmcgc3RyaW5ncyBpbnRvIFVURi04IGJ5dGVzXG4gKi9cbmxldCB0ZXh0RW5jb2Rlcjtcbi8qKlxuICogQ29tcHV0ZSB0aGUgZmluZ2VycHJpbnQgb2YgdGhlIGdpdmVuIHN0cmluZ1xuICpcbiAqIFRoZSBvdXRwdXQgaXMgNjQgYml0IG51bWJlciBlbmNvZGVkIGFzIGEgZGVjaW1hbCBzdHJpbmdcbiAqXG4gKiBiYXNlZCBvbjpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvY2xvc3VyZS1jb21waWxlci9ibG9iL21hc3Rlci9zcmMvY29tL2dvb2dsZS9qYXZhc2NyaXB0L2pzY29tcC9Hb29nbGVKc01lc3NhZ2VJZEdlbmVyYXRvci5qYXZhXG4gKi9cbmZ1bmN0aW9uIGZpbmdlcnByaW50KHN0cikge1xuICB0ZXh0RW5jb2RlciA/Pz0gbmV3IFRleHRFbmNvZGVyKCk7XG4gIGNvbnN0IHV0ZjggPSB0ZXh0RW5jb2Rlci5lbmNvZGUoc3RyKTtcbiAgY29uc3QgdmlldyA9IG5ldyBEYXRhVmlldyh1dGY4LmJ1ZmZlciwgdXRmOC5ieXRlT2Zmc2V0LCB1dGY4LmJ5dGVMZW5ndGgpO1xuICBsZXQgaGkgPSBoYXNoMzIodmlldywgdXRmOC5sZW5ndGgsIDApO1xuICBsZXQgbG8gPSBoYXNoMzIodmlldywgdXRmOC5sZW5ndGgsIDEwMjA3Mik7XG4gIGlmIChoaSA9PSAwICYmIChsbyA9PSAwIHx8IGxvID09IDEpKSB7XG4gICAgaGkgPSBoaSBeIDB4MTMwZjliZWY7XG4gICAgbG8gPSBsbyBeIC0xODAxNDEwMjY0O1xuICB9XG4gIHJldHVybiBCaWdJbnQuYXNVaW50TigzMiwgQmlnSW50KGhpKSkgPDwgQmlnSW50KDMyKSB8IEJpZ0ludC5hc1VpbnROKDMyLCBCaWdJbnQobG8pKTtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVNc2dJZChtc2csIG1lYW5pbmcgPSAnJykge1xuICBsZXQgbXNnRmluZ2VycHJpbnQgPSBmaW5nZXJwcmludChtc2cpO1xuICBpZiAobWVhbmluZykge1xuICAgIC8vIFJvdGF0ZSB0aGUgNjQtYml0IG1lc3NhZ2UgZmluZ2VycHJpbnQgb25lIGJpdCB0byB0aGUgbGVmdCBhbmQgdGhlbiBhZGQgdGhlIG1lYW5pbmdcbiAgICAvLyBmaW5nZXJwcmludC5cbiAgICBtc2dGaW5nZXJwcmludCA9IEJpZ0ludC5hc1VpbnROKDY0LCBtc2dGaW5nZXJwcmludCA8PCBCaWdJbnQoMSkpIHwgbXNnRmluZ2VycHJpbnQgPj4gQmlnSW50KDYzKSAmIEJpZ0ludCgxKTtcbiAgICBtc2dGaW5nZXJwcmludCArPSBmaW5nZXJwcmludChtZWFuaW5nKTtcbiAgfVxuICByZXR1cm4gQmlnSW50LmFzVWludE4oNjMsIG1zZ0ZpbmdlcnByaW50KS50b1N0cmluZygpO1xufVxuZnVuY3Rpb24gaGFzaDMyKHZpZXcsIGxlbmd0aCwgYykge1xuICBsZXQgYSA9IDB4OWUzNzc5YjksXG4gICAgYiA9IDB4OWUzNzc5Yjk7XG4gIGxldCBpbmRleCA9IDA7XG4gIGNvbnN0IGVuZCA9IGxlbmd0aCAtIDEyO1xuICBmb3IgKDsgaW5kZXggPD0gZW5kOyBpbmRleCArPSAxMikge1xuICAgIGEgKz0gdmlldy5nZXRVaW50MzIoaW5kZXgsIHRydWUpO1xuICAgIGIgKz0gdmlldy5nZXRVaW50MzIoaW5kZXggKyA0LCB0cnVlKTtcbiAgICBjICs9IHZpZXcuZ2V0VWludDMyKGluZGV4ICsgOCwgdHJ1ZSk7XG4gICAgY29uc3QgcmVzID0gbWl4KGEsIGIsIGMpO1xuICAgIGEgPSByZXNbMF0sIGIgPSByZXNbMV0sIGMgPSByZXNbMl07XG4gIH1cbiAgY29uc3QgcmVtYWluZGVyID0gbGVuZ3RoIC0gaW5kZXg7XG4gIC8vIHRoZSBmaXJzdCBieXRlIG9mIGMgaXMgcmVzZXJ2ZWQgZm9yIHRoZSBsZW5ndGhcbiAgYyArPSBsZW5ndGg7XG4gIGlmIChyZW1haW5kZXIgPj0gNCkge1xuICAgIGEgKz0gdmlldy5nZXRVaW50MzIoaW5kZXgsIHRydWUpO1xuICAgIGluZGV4ICs9IDQ7XG4gICAgaWYgKHJlbWFpbmRlciA+PSA4KSB7XG4gICAgICBiICs9IHZpZXcuZ2V0VWludDMyKGluZGV4LCB0cnVlKTtcbiAgICAgIGluZGV4ICs9IDQ7XG4gICAgICAvLyBQYXJ0aWFsIDMyLWJpdCB3b3JkIGZvciBjXG4gICAgICBpZiAocmVtYWluZGVyID49IDkpIHtcbiAgICAgICAgYyArPSB2aWV3LmdldFVpbnQ4KGluZGV4KyspIDw8IDg7XG4gICAgICB9XG4gICAgICBpZiAocmVtYWluZGVyID49IDEwKSB7XG4gICAgICAgIGMgKz0gdmlldy5nZXRVaW50OChpbmRleCsrKSA8PCAxNjtcbiAgICAgIH1cbiAgICAgIGlmIChyZW1haW5kZXIgPT09IDExKSB7XG4gICAgICAgIGMgKz0gdmlldy5nZXRVaW50OChpbmRleCsrKSA8PCAyNDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUGFydGlhbCAzMi1iaXQgd29yZCBmb3IgYlxuICAgICAgaWYgKHJlbWFpbmRlciA+PSA1KSB7XG4gICAgICAgIGIgKz0gdmlldy5nZXRVaW50OChpbmRleCsrKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZW1haW5kZXIgPj0gNikge1xuICAgICAgICBiICs9IHZpZXcuZ2V0VWludDgoaW5kZXgrKykgPDwgODtcbiAgICAgIH1cbiAgICAgIGlmIChyZW1haW5kZXIgPT09IDcpIHtcbiAgICAgICAgYiArPSB2aWV3LmdldFVpbnQ4KGluZGV4KyspIDw8IDE2O1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBQYXJ0aWFsIDMyLWJpdCB3b3JkIGZvciBhXG4gICAgaWYgKHJlbWFpbmRlciA+PSAxKSB7XG4gICAgICBhICs9IHZpZXcuZ2V0VWludDgoaW5kZXgrKyk7XG4gICAgfVxuICAgIGlmIChyZW1haW5kZXIgPj0gMikge1xuICAgICAgYSArPSB2aWV3LmdldFVpbnQ4KGluZGV4KyspIDw8IDg7XG4gICAgfVxuICAgIGlmIChyZW1haW5kZXIgPT09IDMpIHtcbiAgICAgIGEgKz0gdmlldy5nZXRVaW50OChpbmRleCsrKSA8PCAxNjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1peChhLCBiLCBjKVsyXTtcbn1cbmZ1bmN0aW9uIG1peChhLCBiLCBjKSB7XG4gIGEgLT0gYjtcbiAgYSAtPSBjO1xuICBhIF49IGMgPj4+IDEzO1xuICBiIC09IGM7XG4gIGIgLT0gYTtcbiAgYiBePSBhIDw8IDg7XG4gIGMgLT0gYTtcbiAgYyAtPSBiO1xuICBjIF49IGIgPj4+IDEzO1xuICBhIC09IGI7XG4gIGEgLT0gYztcbiAgYSBePSBjID4+PiAxMjtcbiAgYiAtPSBjO1xuICBiIC09IGE7XG4gIGIgXj0gYSA8PCAxNjtcbiAgYyAtPSBhO1xuICBjIC09IGI7XG4gIGMgXj0gYiA+Pj4gNTtcbiAgYSAtPSBiO1xuICBhIC09IGM7XG4gIGEgXj0gYyA+Pj4gMztcbiAgYiAtPSBjO1xuICBiIC09IGE7XG4gIGIgXj0gYSA8PCAxMDtcbiAgYyAtPSBhO1xuICBjIC09IGI7XG4gIGMgXj0gYiA+Pj4gMTU7XG4gIHJldHVybiBbYSwgYiwgY107XG59XG4vLyBVdGlsc1xudmFyIEVuZGlhbjtcbihmdW5jdGlvbiAoRW5kaWFuKSB7XG4gIEVuZGlhbltFbmRpYW5bXCJMaXR0bGVcIl0gPSAwXSA9IFwiTGl0dGxlXCI7XG4gIEVuZGlhbltFbmRpYW5bXCJCaWdcIl0gPSAxXSA9IFwiQmlnXCI7XG59KShFbmRpYW4gfHwgKEVuZGlhbiA9IHt9KSk7XG5cbi8vIFRoaXMgbW9kdWxlIHNwZWNpZmllciBpcyBpbnRlbnRpb25hbGx5IGEgcmVsYXRpdmUgcGF0aCB0byBhbGxvdyBidW5kbGluZyB0aGUgY29kZSBkaXJlY3RseVxuLy8gaW50byB0aGUgcGFja2FnZS5cbi8vIEBuZ19wYWNrYWdlOiBpZ25vcmUtY3Jvc3MtcmVwby1pbXBvcnRcbi8qKlxuICogUGFyc2UgYSBgJGxvY2FsaXplYCB0YWdnZWQgc3RyaW5nIGludG8gYSBzdHJ1Y3R1cmUgdGhhdCBjYW4gYmUgdXNlZCBmb3IgdHJhbnNsYXRpb24gb3JcbiAqIGV4dHJhY3Rpb24uXG4gKlxuICogU2VlIGBQYXJzZWRNZXNzYWdlYCBmb3IgYW4gZXhhbXBsZS5cbiAqL1xuZnVuY3Rpb24gcGFyc2VNZXNzYWdlKG1lc3NhZ2VQYXJ0cywgZXhwcmVzc2lvbnMsIGxvY2F0aW9uLCBtZXNzYWdlUGFydExvY2F0aW9ucywgZXhwcmVzc2lvbkxvY2F0aW9ucyA9IFtdKSB7XG4gIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB7fTtcbiAgY29uc3Qgc3Vic3RpdHV0aW9uTG9jYXRpb25zID0ge307XG4gIGNvbnN0IGFzc29jaWF0ZWRNZXNzYWdlSWRzID0ge307XG4gIGNvbnN0IG1ldGFkYXRhID0gcGFyc2VNZXRhZGF0YShtZXNzYWdlUGFydHNbMF0sIG1lc3NhZ2VQYXJ0cy5yYXdbMF0pO1xuICBjb25zdCBjbGVhbmVkTWVzc2FnZVBhcnRzID0gW21ldGFkYXRhLnRleHRdO1xuICBjb25zdCBwbGFjZWhvbGRlck5hbWVzID0gW107XG4gIGxldCBtZXNzYWdlU3RyaW5nID0gbWV0YWRhdGEudGV4dDtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBtZXNzYWdlUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB7XG4gICAgICBtZXNzYWdlUGFydCxcbiAgICAgIHBsYWNlaG9sZGVyTmFtZSA9IGNvbXB1dGVQbGFjZWhvbGRlck5hbWUoaSksXG4gICAgICBhc3NvY2lhdGVkTWVzc2FnZUlkXG4gICAgfSA9IHBhcnNlUGxhY2Vob2xkZXIobWVzc2FnZVBhcnRzW2ldLCBtZXNzYWdlUGFydHMucmF3W2ldKTtcbiAgICBtZXNzYWdlU3RyaW5nICs9IGB7JCR7cGxhY2Vob2xkZXJOYW1lfX0ke21lc3NhZ2VQYXJ0fWA7XG4gICAgaWYgKGV4cHJlc3Npb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnNbcGxhY2Vob2xkZXJOYW1lXSA9IGV4cHJlc3Npb25zW2kgLSAxXTtcbiAgICAgIHN1YnN0aXR1dGlvbkxvY2F0aW9uc1twbGFjZWhvbGRlck5hbWVdID0gZXhwcmVzc2lvbkxvY2F0aW9uc1tpIC0gMV07XG4gICAgfVxuICAgIHBsYWNlaG9sZGVyTmFtZXMucHVzaChwbGFjZWhvbGRlck5hbWUpO1xuICAgIGlmIChhc3NvY2lhdGVkTWVzc2FnZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFzc29jaWF0ZWRNZXNzYWdlSWRzW3BsYWNlaG9sZGVyTmFtZV0gPSBhc3NvY2lhdGVkTWVzc2FnZUlkO1xuICAgIH1cbiAgICBjbGVhbmVkTWVzc2FnZVBhcnRzLnB1c2gobWVzc2FnZVBhcnQpO1xuICB9XG4gIGNvbnN0IG1lc3NhZ2VJZCA9IG1ldGFkYXRhLmN1c3RvbUlkIHx8IGNvbXB1dGVNc2dJZChtZXNzYWdlU3RyaW5nLCBtZXRhZGF0YS5tZWFuaW5nIHx8ICcnKTtcbiAgY29uc3QgbGVnYWN5SWRzID0gbWV0YWRhdGEubGVnYWN5SWRzID8gbWV0YWRhdGEubGVnYWN5SWRzLmZpbHRlcihpZCA9PiBpZCAhPT0gbWVzc2FnZUlkKSA6IFtdO1xuICByZXR1cm4ge1xuICAgIGlkOiBtZXNzYWdlSWQsXG4gICAgbGVnYWN5SWRzLFxuICAgIHN1YnN0aXR1dGlvbnMsXG4gICAgc3Vic3RpdHV0aW9uTG9jYXRpb25zLFxuICAgIHRleHQ6IG1lc3NhZ2VTdHJpbmcsXG4gICAgY3VzdG9tSWQ6IG1ldGFkYXRhLmN1c3RvbUlkLFxuICAgIG1lYW5pbmc6IG1ldGFkYXRhLm1lYW5pbmcgfHwgJycsXG4gICAgZGVzY3JpcHRpb246IG1ldGFkYXRhLmRlc2NyaXB0aW9uIHx8ICcnLFxuICAgIG1lc3NhZ2VQYXJ0czogY2xlYW5lZE1lc3NhZ2VQYXJ0cyxcbiAgICBtZXNzYWdlUGFydExvY2F0aW9ucyxcbiAgICBwbGFjZWhvbGRlck5hbWVzLFxuICAgIGFzc29jaWF0ZWRNZXNzYWdlSWRzLFxuICAgIGxvY2F0aW9uXG4gIH07XG59XG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBtZXNzYWdlIHBhcnQgKGBjb29rZWRgICsgYHJhd2ApIHRvIGV4dHJhY3QgdGhlIG1lc3NhZ2UgbWV0YWRhdGEgZnJvbSB0aGUgdGV4dC5cbiAqXG4gKiBJZiB0aGUgbWVzc2FnZSBwYXJ0IGhhcyBhIG1ldGFkYXRhIGJsb2NrIHRoaXMgZnVuY3Rpb24gd2lsbCBleHRyYWN0IHRoZSBgbWVhbmluZ2AsXG4gKiBgZGVzY3JpcHRpb25gLCBgY3VzdG9tSWRgIGFuZCBgbGVnYWN5SWRgIChpZiBwcm92aWRlZCkgZnJvbSB0aGUgYmxvY2suIFRoZXNlIG1ldGFkYXRhIHByb3BlcnRpZXNcbiAqIGFyZSBzZXJpYWxpemVkIGluIHRoZSBzdHJpbmcgZGVsaW1pdGVkIGJ5IGB8YCwgYEBAYCBhbmQgYOKQn2AgcmVzcGVjdGl2ZWx5LlxuICpcbiAqIChOb3RlIHRoYXQgYOKQn2AgaXMgdGhlIGBMRUdBQ1lfSURfSU5ESUNBVE9SYCAtIHNlZSBgY29uc3RhbnRzLnRzYC4pXG4gKlxuICogRm9yIGV4YW1wbGU6XG4gKlxuICogYGBgdHNcbiAqIGA6bWVhbmluZ3xkZXNjcmlwdGlvbkBAY3VzdG9tLWlkOmBcbiAqIGA6bWVhbmluZ3xAQGN1c3RvbS1pZDpgXG4gKiBgOm1lYW5pbmd8ZGVzY3JpcHRpb246YFxuICogYDpkZXNjcmlwdGlvbkBAY3VzdG9tLWlkOmBcbiAqIGA6bWVhbmluZ3w6YFxuICogYDpkZXNjcmlwdGlvbjpgXG4gKiBgOkBAY3VzdG9tLWlkOmBcbiAqIGA6bWVhbmluZ3xkZXNjcmlwdGlvbkBAY3VzdG9tLWlk4pCfbGVnYWN5LWlkLTHikJ9sZWdhY3ktaWQtMjpgXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29va2VkIFRoZSBjb29rZWQgdmVyc2lvbiBvZiB0aGUgbWVzc2FnZSBwYXJ0IHRvIHBhcnNlLlxuICogQHBhcmFtIHJhdyBUaGUgcmF3IHZlcnNpb24gb2YgdGhlIG1lc3NhZ2UgcGFydCB0byBwYXJzZS5cbiAqIEByZXR1cm5zIEEgb2JqZWN0IGNvbnRhaW5pbmcgYW55IG1ldGFkYXRhIHRoYXQgd2FzIHBhcnNlZCBmcm9tIHRoZSBtZXNzYWdlIHBhcnQuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlTWV0YWRhdGEoY29va2VkLCByYXcpIHtcbiAgY29uc3Qge1xuICAgIHRleHQ6IG1lc3NhZ2VTdHJpbmcsXG4gICAgYmxvY2tcbiAgfSA9IHNwbGl0QmxvY2soY29va2VkLCByYXcpO1xuICBpZiAoYmxvY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBtZXNzYWdlU3RyaW5nXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBbbWVhbmluZ0Rlc2NBbmRJZCwgLi4ubGVnYWN5SWRzXSA9IGJsb2NrLnNwbGl0KExFR0FDWV9JRF9JTkRJQ0FUT1IpO1xuICAgIGNvbnN0IFttZWFuaW5nQW5kRGVzYywgY3VzdG9tSWRdID0gbWVhbmluZ0Rlc2NBbmRJZC5zcGxpdChJRF9TRVBBUkFUT1IsIDIpO1xuICAgIGxldCBbbWVhbmluZywgZGVzY3JpcHRpb25dID0gbWVhbmluZ0FuZERlc2Muc3BsaXQoTUVBTklOR19TRVBBUkFUT1IsIDIpO1xuICAgIGlmIChkZXNjcmlwdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZXNjcmlwdGlvbiA9IG1lYW5pbmc7XG4gICAgICBtZWFuaW5nID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoZGVzY3JpcHRpb24gPT09ICcnKSB7XG4gICAgICBkZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IG1lc3NhZ2VTdHJpbmcsXG4gICAgICBtZWFuaW5nLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBjdXN0b21JZCxcbiAgICAgIGxlZ2FjeUlkc1xuICAgIH07XG4gIH1cbn1cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIG1lc3NhZ2UgcGFydCAoYGNvb2tlZGAgKyBgcmF3YCkgdG8gZXh0cmFjdCBhbnkgcGxhY2Vob2xkZXIgbWV0YWRhdGEgZnJvbSB0aGVcbiAqIHRleHQuXG4gKlxuICogSWYgdGhlIG1lc3NhZ2UgcGFydCBoYXMgYSBtZXRhZGF0YSBibG9jayB0aGlzIGZ1bmN0aW9uIHdpbGwgZXh0cmFjdCB0aGUgYHBsYWNlaG9sZGVyTmFtZWAgYW5kXG4gKiBgYXNzb2NpYXRlZE1lc3NhZ2VJZGAgKGlmIHByb3ZpZGVkKSBmcm9tIHRoZSBibG9jay5cbiAqXG4gKiBUaGVzZSBtZXRhZGF0YSBwcm9wZXJ0aWVzIGFyZSBzZXJpYWxpemVkIGluIHRoZSBzdHJpbmcgZGVsaW1pdGVkIGJ5IGBAQGAuXG4gKlxuICogRm9yIGV4YW1wbGU6XG4gKlxuICogYGBgdHNcbiAqIGA6cGxhY2Vob2xkZXItbmFtZUBAYXNzb2NpYXRlZC1pZDpgXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29va2VkIFRoZSBjb29rZWQgdmVyc2lvbiBvZiB0aGUgbWVzc2FnZSBwYXJ0IHRvIHBhcnNlLlxuICogQHBhcmFtIHJhdyBUaGUgcmF3IHZlcnNpb24gb2YgdGhlIG1lc3NhZ2UgcGFydCB0byBwYXJzZS5cbiAqIEByZXR1cm5zIEEgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG1ldGFkYXRhIChgcGxhY2Vob2xkZXJOYW1lYCBhbmQgYGFzc29jaWF0ZWRNZXNzYWdlSWRgKSBvZiB0aGVcbiAqICAgICBwcmVjZWRpbmcgcGxhY2Vob2xkZXIsIGFsb25nIHdpdGggdGhlIHN0YXRpYyB0ZXh0IHRoYXQgZm9sbG93cy5cbiAqL1xuZnVuY3Rpb24gcGFyc2VQbGFjZWhvbGRlcihjb29rZWQsIHJhdykge1xuICBjb25zdCB7XG4gICAgdGV4dDogbWVzc2FnZVBhcnQsXG4gICAgYmxvY2tcbiAgfSA9IHNwbGl0QmxvY2soY29va2VkLCByYXcpO1xuICBpZiAoYmxvY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlUGFydFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgW3BsYWNlaG9sZGVyTmFtZSwgYXNzb2NpYXRlZE1lc3NhZ2VJZF0gPSBibG9jay5zcGxpdChJRF9TRVBBUkFUT1IpO1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlUGFydCxcbiAgICAgIHBsYWNlaG9sZGVyTmFtZSxcbiAgICAgIGFzc29jaWF0ZWRNZXNzYWdlSWRcbiAgICB9O1xuICB9XG59XG4vKipcbiAqIFNwbGl0IGEgbWVzc2FnZSBwYXJ0IChgY29va2VkYCArIGByYXdgKSBpbnRvIGFuIG9wdGlvbmFsIGRlbGltaXRlZCBcImJsb2NrXCIgb2ZmIHRoZSBmcm9udCBhbmQgdGhlXG4gKiByZXN0IG9mIHRoZSB0ZXh0IG9mIHRoZSBtZXNzYWdlIHBhcnQuXG4gKlxuICogQmxvY2tzIGFwcGVhciBhdCB0aGUgc3RhcnQgb2YgbWVzc2FnZSBwYXJ0cy4gVGhleSBhcmUgZGVsaW1pdGVkIGJ5IGEgY29sb24gYDpgIGNoYXJhY3RlciBhdCB0aGVcbiAqIHN0YXJ0IGFuZCBlbmQgb2YgdGhlIGJsb2NrLlxuICpcbiAqIElmIHRoZSBibG9jayBpcyBpbiB0aGUgZmlyc3QgbWVzc2FnZSBwYXJ0IHRoZW4gaXQgd2lsbCBiZSBtZXRhZGF0YSBhYm91dCB0aGUgd2hvbGUgbWVzc2FnZTpcbiAqIG1lYW5pbmcsIGRlc2NyaXB0aW9uLCBpZC4gIE90aGVyd2lzZSBpdCB3aWxsIGJlIG1ldGFkYXRhIGFib3V0IHRoZSBpbW1lZGlhdGVseSBwcmVjZWRpbmdcbiAqIHN1YnN0aXR1dGlvbjogcGxhY2Vob2xkZXIgbmFtZS5cbiAqXG4gKiBTaW5jZSBibG9ja3MgYXJlIG9wdGlvbmFsLCBpdCBpcyBwb3NzaWJsZSB0aGF0IHRoZSBjb250ZW50IG9mIGEgbWVzc2FnZSBibG9jayBhY3R1YWxseSBzdGFydHNcbiAqIHdpdGggYSBibG9jayBtYXJrZXIuIEluIHRoaXMgY2FzZSB0aGUgbWFya2VyIG11c3QgYmUgZXNjYXBlZCBgXFw6YC5cbiAqXG4gKiBAcGFyYW0gY29va2VkIFRoZSBjb29rZWQgdmVyc2lvbiBvZiB0aGUgbWVzc2FnZSBwYXJ0IHRvIHBhcnNlLlxuICogQHBhcmFtIHJhdyBUaGUgcmF3IHZlcnNpb24gb2YgdGhlIG1lc3NhZ2UgcGFydCB0byBwYXJzZS5cbiAqIEByZXR1cm5zIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBgdGV4dGAgb2YgdGhlIG1lc3NhZ2UgcGFydCBhbmQgdGhlIHRleHQgb2YgdGhlIGBibG9ja2AsIGlmIGl0XG4gKiBleGlzdHMuXG4gKiBAdGhyb3dzIGFuIGVycm9yIGlmIHRoZSBgYmxvY2tgIGlzIHVudGVybWluYXRlZFxuICovXG5mdW5jdGlvbiBzcGxpdEJsb2NrKGNvb2tlZCwgcmF3KSB7XG4gIGlmIChyYXcuY2hhckF0KDApICE9PSBCTE9DS19NQVJLRVIkMSkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBjb29rZWRcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGVuZE9mQmxvY2sgPSBmaW5kRW5kT2ZCbG9jayhjb29rZWQsIHJhdyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJsb2NrOiBjb29rZWQuc3Vic3RyaW5nKDEsIGVuZE9mQmxvY2spLFxuICAgICAgdGV4dDogY29va2VkLnN1YnN0cmluZyhlbmRPZkJsb2NrICsgMSlcbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiBjb21wdXRlUGxhY2Vob2xkZXJOYW1lKGluZGV4KSB7XG4gIHJldHVybiBpbmRleCA9PT0gMSA/ICdQSCcgOiBgUEhfJHtpbmRleCAtIDF9YDtcbn1cbi8qKlxuICogRmluZCB0aGUgZW5kIG9mIGEgXCJtYXJrZWQgYmxvY2tcIiBpbmRpY2F0ZWQgYnkgdGhlIGZpcnN0IG5vbi1lc2NhcGVkIGNvbG9uLlxuICpcbiAqIEBwYXJhbSBjb29rZWQgVGhlIGNvb2tlZCBzdHJpbmcgKHdoZXJlIGVzY2FwZWQgY2hhcnMgaGF2ZSBiZWVuIHByb2Nlc3NlZClcbiAqIEBwYXJhbSByYXcgVGhlIHJhdyBzdHJpbmcgKHdoZXJlIGVzY2FwZSBzZXF1ZW5jZXMgYXJlIHN0aWxsIGluIHBsYWNlKVxuICpcbiAqIEByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZW5kIG9mIGJsb2NrIG1hcmtlclxuICogQHRocm93cyBhbiBlcnJvciBpZiB0aGUgYmxvY2sgaXMgdW50ZXJtaW5hdGVkXG4gKi9cbmZ1bmN0aW9uIGZpbmRFbmRPZkJsb2NrKGNvb2tlZCwgcmF3KSB7XG4gIGZvciAobGV0IGNvb2tlZEluZGV4ID0gMSwgcmF3SW5kZXggPSAxOyBjb29rZWRJbmRleCA8IGNvb2tlZC5sZW5ndGg7IGNvb2tlZEluZGV4KyssIHJhd0luZGV4KyspIHtcbiAgICBpZiAocmF3W3Jhd0luZGV4XSA9PT0gJ1xcXFwnKSB7XG4gICAgICByYXdJbmRleCsrO1xuICAgIH0gZWxzZSBpZiAoY29va2VkW2Nvb2tlZEluZGV4XSA9PT0gQkxPQ0tfTUFSS0VSJDEpIHtcbiAgICAgIHJldHVybiBjb29rZWRJbmRleDtcbiAgICB9XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGBVbnRlcm1pbmF0ZWQgJGxvY2FsaXplIG1ldGFkYXRhIGJsb2NrIGluIFwiJHtyYXd9XCIuYCk7XG59XG5cbi8qKlxuICogVGFnIGEgdGVtcGxhdGUgbGl0ZXJhbCBzdHJpbmcgZm9yIGxvY2FsaXphdGlvbi5cbiAqXG4gKiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGB0c1xuICogJGxvY2FsaXplIGBzb21lIHN0cmluZyB0byBsb2NhbGl6ZWBcbiAqIGBgYFxuICpcbiAqICoqUHJvdmlkaW5nIG1lYW5pbmcsIGRlc2NyaXB0aW9uIGFuZCBpZCoqXG4gKlxuICogWW91IGNhbiBvcHRpb25hbGx5IHNwZWNpZnkgb25lIG9yIG1vcmUgb2YgYG1lYW5pbmdgLCBgZGVzY3JpcHRpb25gIGFuZCBgaWRgIGZvciBhIGxvY2FsaXplZFxuICogc3RyaW5nIGJ5IHByZS1wZW5kaW5nIGl0IHdpdGggYSBjb2xvbiBkZWxpbWl0ZWQgYmxvY2sgb2YgdGhlIGZvcm06XG4gKlxuICogYGBgdHNcbiAqICRsb2NhbGl6ZWA6bWVhbmluZ3xkZXNjcmlwdGlvbkBAaWQ6c291cmNlIG1lc3NhZ2UgdGV4dGA7XG4gKlxuICogJGxvY2FsaXplYDptZWFuaW5nfDpzb3VyY2UgbWVzc2FnZSB0ZXh0YDtcbiAqICRsb2NhbGl6ZWA6ZGVzY3JpcHRpb246c291cmNlIG1lc3NhZ2UgdGV4dGA7XG4gKiAkbG9jYWxpemVgOkBAaWQ6c291cmNlIG1lc3NhZ2UgdGV4dGA7XG4gKiBgYGBcbiAqXG4gKiBUaGlzIGZvcm1hdCBpcyB0aGUgc2FtZSBhcyB0aGF0IHVzZWQgZm9yIGBpMThuYCBtYXJrZXJzIGluIEFuZ3VsYXIgdGVtcGxhdGVzLiBTZWUgdGhlXG4gKiBbQW5ndWxhciBpMThuIGd1aWRlXShndWlkZS9pMThuL3ByZXBhcmUjbWFyay10ZXh0LWluLWNvbXBvbmVudC10ZW1wbGF0ZSkuXG4gKlxuICogKipOYW1pbmcgcGxhY2Vob2xkZXJzKipcbiAqXG4gKiBJZiB0aGUgdGVtcGxhdGUgbGl0ZXJhbCBzdHJpbmcgY29udGFpbnMgZXhwcmVzc2lvbnMsIHRoZW4gdGhlIGV4cHJlc3Npb25zIHdpbGwgYmUgYXV0b21hdGljYWxseVxuICogYXNzb2NpYXRlZCB3aXRoIHBsYWNlaG9sZGVyIG5hbWVzIGZvciB5b3UuXG4gKlxuICogRm9yIGV4YW1wbGU6XG4gKlxuICogYGBgdHNcbiAqICRsb2NhbGl6ZSBgSGkgJHtuYW1lfSEgVGhlcmUgYXJlICR7aXRlbXMubGVuZ3RofSBpdGVtcy5gO1xuICogYGBgXG4gKlxuICogd2lsbCBnZW5lcmF0ZSBhIG1lc3NhZ2Utc291cmNlIG9mIGBIaSB7JFBIfSEgVGhlcmUgYXJlIHskUEhfMX0gaXRlbXNgLlxuICpcbiAqIFRoZSByZWNvbW1lbmRlZCBwcmFjdGljZSBpcyB0byBuYW1lIHRoZSBwbGFjZWhvbGRlciBhc3NvY2lhdGVkIHdpdGggZWFjaCBleHByZXNzaW9uIHRob3VnaC5cbiAqXG4gKiBEbyB0aGlzIGJ5IHByb3ZpZGluZyB0aGUgcGxhY2Vob2xkZXIgbmFtZSB3cmFwcGVkIGluIGA6YCBjaGFyYWN0ZXJzIGRpcmVjdGx5IGFmdGVyIHRoZVxuICogZXhwcmVzc2lvbi4gVGhlc2UgcGxhY2Vob2xkZXIgbmFtZXMgYXJlIHN0cmlwcGVkIG91dCBvZiB0aGUgcmVuZGVyZWQgbG9jYWxpemVkIHN0cmluZy5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgdG8gbmFtZSB0aGUgYGl0ZW1zLmxlbmd0aGAgZXhwcmVzc2lvbiBwbGFjZWhvbGRlciBgaXRlbUNvdW50YCB5b3Ugd3JpdGU6XG4gKlxuICogYGBgdHNcbiAqICRsb2NhbGl6ZSBgVGhlcmUgYXJlICR7aXRlbXMubGVuZ3RofTppdGVtQ291bnQ6IGl0ZW1zYDtcbiAqIGBgYFxuICpcbiAqICoqRXNjYXBpbmcgY29sb24gbWFya2VycyoqXG4gKlxuICogSWYgeW91IG5lZWQgdG8gdXNlIGEgYDpgIGNoYXJhY3RlciBkaXJlY3RseSBhdCB0aGUgc3RhcnQgb2YgYSB0YWdnZWQgc3RyaW5nIHRoYXQgaGFzIG5vXG4gKiBtZXRhZGF0YSBibG9jaywgb3IgZGlyZWN0bHkgYWZ0ZXIgYSBzdWJzdGl0dXRpb24gZXhwcmVzc2lvbiB0aGF0IGhhcyBubyBuYW1lIHlvdSBtdXN0IGVzY2FwZVxuICogdGhlIGA6YCBieSBwcmVjZWRpbmcgaXQgd2l0aCBhIGJhY2tzbGFzaDpcbiAqXG4gKiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGB0c1xuICogLy8gbWVzc2FnZSBoYXMgYSBtZXRhZGF0YSBibG9jayBzbyBubyBuZWVkIHRvIGVzY2FwZSBjb2xvblxuICogJGxvY2FsaXplIGA6c29tZSBkZXNjcmlwdGlvbjo6dGhpcyBtZXNzYWdlIHN0YXJ0cyB3aXRoIGEgY29sb24gKDopYDtcbiAqIC8vIG5vIG1ldGFkYXRhIGJsb2NrIHNvIHRoZSBjb2xvbiBtdXN0IGJlIGVzY2FwZWRcbiAqICRsb2NhbGl6ZSBgXFw6dGhpcyBtZXNzYWdlIHN0YXJ0cyB3aXRoIGEgY29sb24gKDopYDtcbiAqIGBgYFxuICpcbiAqIGBgYHRzXG4gKiAvLyBuYW1lZCBzdWJzdGl0dXRpb24gc28gbm8gbmVlZCB0byBlc2NhcGUgY29sb25cbiAqICRsb2NhbGl6ZSBgJHtsYWJlbH06bGFiZWw6OiAke31gXG4gKiAvLyBhbm9ueW1vdXMgc3Vic3RpdHV0aW9uIHNvIGNvbG9uIG11c3QgYmUgZXNjYXBlZFxuICogJGxvY2FsaXplIGAke2xhYmVsfVxcOiAke31gXG4gKiBgYGBcbiAqXG4gKiAqKlByb2Nlc3NpbmcgbG9jYWxpemVkIHN0cmluZ3M6KipcbiAqXG4gKiBUaGVyZSBhcmUgdGhyZWUgc2NlbmFyaW9zOlxuICpcbiAqICogKipjb21waWxlLXRpbWUgaW5saW5pbmcqKjogdGhlIGAkbG9jYWxpemVgIHRhZyBpcyB0cmFuc2Zvcm1lZCBhdCBjb21waWxlIHRpbWUgYnkgYVxuICogdHJhbnNwaWxlciwgcmVtb3ZpbmcgdGhlIHRhZyBhbmQgcmVwbGFjaW5nIHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIHN0cmluZyB3aXRoIGEgdHJhbnNsYXRlZFxuICogbGl0ZXJhbCBzdHJpbmcgZnJvbSBhIGNvbGxlY3Rpb24gb2YgdHJhbnNsYXRpb25zIHByb3ZpZGVkIHRvIHRoZSB0cmFuc3BpbGF0aW9uIHRvb2wuXG4gKlxuICogKiAqKnJ1bi10aW1lIGV2YWx1YXRpb24qKjogdGhlIGAkbG9jYWxpemVgIHRhZyBpcyBhIHJ1bi10aW1lIGZ1bmN0aW9uIHRoYXQgcmVwbGFjZXMgYW5kXG4gKiByZW9yZGVycyB0aGUgcGFydHMgKHN0YXRpYyBzdHJpbmdzIGFuZCBleHByZXNzaW9ucykgb2YgdGhlIHRlbXBsYXRlIGxpdGVyYWwgc3RyaW5nIHdpdGggc3RyaW5nc1xuICogZnJvbSBhIGNvbGxlY3Rpb24gb2YgdHJhbnNsYXRpb25zIGxvYWRlZCBhdCBydW4tdGltZS5cbiAqXG4gKiAqICoqcGFzcy10aHJvdWdoIGV2YWx1YXRpb24qKjogdGhlIGAkbG9jYWxpemVgIHRhZyBpcyBhIHJ1bi10aW1lIGZ1bmN0aW9uIHRoYXQgc2ltcGx5IGV2YWx1YXRlc1xuICogdGhlIG9yaWdpbmFsIHRlbXBsYXRlIGxpdGVyYWwgc3RyaW5nIHdpdGhvdXQgYXBwbHlpbmcgYW55IHRyYW5zbGF0aW9ucyB0byB0aGUgcGFydHMuIFRoaXNcbiAqIHZlcnNpb24gaXMgdXNlZCBkdXJpbmcgZGV2ZWxvcG1lbnQgb3Igd2hlcmUgdGhlcmUgaXMgbm8gbmVlZCB0byB0cmFuc2xhdGUgdGhlIGxvY2FsaXplZFxuICogdGVtcGxhdGUgbGl0ZXJhbHMuXG4gKlxuICogQHBhcmFtIG1lc3NhZ2VQYXJ0cyBhIGNvbGxlY3Rpb24gb2YgdGhlIHN0YXRpYyBwYXJ0cyBvZiB0aGUgdGVtcGxhdGUgc3RyaW5nLlxuICogQHBhcmFtIGV4cHJlc3Npb25zIGEgY29sbGVjdGlvbiBvZiB0aGUgdmFsdWVzIG9mIGVhY2ggcGxhY2Vob2xkZXIgaW4gdGhlIHRlbXBsYXRlIHN0cmluZy5cbiAqIEByZXR1cm5zIHRoZSB0cmFuc2xhdGVkIHN0cmluZywgd2l0aCB0aGUgYG1lc3NhZ2VQYXJ0c2AgYW5kIGBleHByZXNzaW9uc2AgaW50ZXJsZWF2ZWQgdG9nZXRoZXIuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5jb25zdCAkbG9jYWxpemUgPSBmdW5jdGlvbiAobWVzc2FnZVBhcnRzLCAuLi5leHByZXNzaW9ucykge1xuICBpZiAoJGxvY2FsaXplLnRyYW5zbGF0ZSkge1xuICAgIC8vIERvbid0IHVzZSBhcnJheSBleHBhbnNpb24gaGVyZSB0byBhdm9pZCB0aGUgY29tcGlsZXIgYWRkaW5nIGBfX3JlYWQoKWAgaGVscGVyIHVubmVjZXNzYXJpbHkuXG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSAkbG9jYWxpemUudHJhbnNsYXRlKG1lc3NhZ2VQYXJ0cywgZXhwcmVzc2lvbnMpO1xuICAgIG1lc3NhZ2VQYXJ0cyA9IHRyYW5zbGF0aW9uWzBdO1xuICAgIGV4cHJlc3Npb25zID0gdHJhbnNsYXRpb25bMV07XG4gIH1cbiAgbGV0IG1lc3NhZ2UgPSBzdHJpcEJsb2NrKG1lc3NhZ2VQYXJ0c1swXSwgbWVzc2FnZVBhcnRzLnJhd1swXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbWVzc2FnZVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgbWVzc2FnZSArPSBleHByZXNzaW9uc1tpIC0gMV0gKyBzdHJpcEJsb2NrKG1lc3NhZ2VQYXJ0c1tpXSwgbWVzc2FnZVBhcnRzLnJhd1tpXSk7XG4gIH1cbiAgcmV0dXJuIG1lc3NhZ2U7XG59O1xuY29uc3QgQkxPQ0tfTUFSS0VSID0gJzonO1xuLyoqXG4gKiBTdHJpcCBhIGRlbGltaXRlZCBcImJsb2NrXCIgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIGBtZXNzYWdlUGFydGAsIGlmIGl0IGlzIGZvdW5kLlxuICpcbiAqIElmIGEgbWFya2VyIGNoYXJhY3RlciAoOikgYWN0dWFsbHkgYXBwZWFycyBpbiB0aGUgY29udGVudCBhdCB0aGUgc3RhcnQgb2YgYSB0YWdnZWQgc3RyaW5nIG9yXG4gKiBhZnRlciBhIHN1YnN0aXR1dGlvbiBleHByZXNzaW9uLCB3aGVyZSBhIGJsb2NrIGhhcyBub3QgYmVlbiBwcm92aWRlZCB0aGUgY2hhcmFjdGVyIG11c3QgYmVcbiAqIGVzY2FwZWQgd2l0aCBhIGJhY2tzbGFzaCwgYFxcOmAuIFRoaXMgZnVuY3Rpb24gY2hlY2tzIGZvciB0aGlzIGJ5IGxvb2tpbmcgYXQgdGhlIGByYXdgXG4gKiBtZXNzYWdlUGFydCwgd2hpY2ggc2hvdWxkIHN0aWxsIGNvbnRhaW4gdGhlIGJhY2tzbGFzaC5cbiAqXG4gKiBAcGFyYW0gbWVzc2FnZVBhcnQgVGhlIGNvb2tlZCBtZXNzYWdlIHBhcnQgdG8gcHJvY2Vzcy5cbiAqIEBwYXJhbSByYXdNZXNzYWdlUGFydCBUaGUgcmF3IG1lc3NhZ2UgcGFydCB0byBjaGVjay5cbiAqIEByZXR1cm5zIHRoZSBtZXNzYWdlIHBhcnQgd2l0aCB0aGUgcGxhY2Vob2xkZXIgbmFtZSBzdHJpcHBlZCwgaWYgZm91bmQuXG4gKiBAdGhyb3dzIGFuIGVycm9yIGlmIHRoZSBibG9jayBpcyB1bnRlcm1pbmF0ZWRcbiAqL1xuZnVuY3Rpb24gc3RyaXBCbG9jayhtZXNzYWdlUGFydCwgcmF3TWVzc2FnZVBhcnQpIHtcbiAgcmV0dXJuIHJhd01lc3NhZ2VQYXJ0LmNoYXJBdCgwKSA9PT0gQkxPQ0tfTUFSS0VSID8gbWVzc2FnZVBhcnQuc3Vic3RyaW5nKGZpbmRFbmRPZkJsb2NrKG1lc3NhZ2VQYXJ0LCByYXdNZXNzYWdlUGFydCkgKyAxKSA6IG1lc3NhZ2VQYXJ0O1xufVxuZXhwb3J0IHsgJGxvY2FsaXplIGFzICQsIEJMT0NLX01BUktFUiQxIGFzIEIsIHBhcnNlTWV0YWRhdGEgYXMgYSwgY29tcHV0ZU1zZ0lkIGFzIGMsIGZpbmRFbmRPZkJsb2NrIGFzIGYsIHBhcnNlTWVzc2FnZSBhcyBwLCBzcGxpdEJsb2NrIGFzIHMgfTtcbiIsIi8qKlxuICogQGxpY2Vuc2UgQW5ndWxhciB2MTkuMi41XG4gKiAoYykgMjAxMC0yMDI1IEdvb2dsZSBMTEMuIGh0dHBzOi8vYW5ndWxhci5pby9cbiAqIExpY2Vuc2U6IE1JVFxuICovXG5cbmltcG9ydCB7ICQgYXMgJGxvY2FsaXplIH0gZnJvbSAnLi9sb2NhbGl6ZS1EUnBKeGRlTC5tanMnO1xuXG4vLyBBdHRhY2ggJGxvY2FsaXplIHRvIHRoZSBnbG9iYWwgY29udGV4dCwgYXMgYSBzaWRlLWVmZmVjdCBvZiB0aGlzIG1vZHVsZS5cbmdsb2JhbFRoaXMuJGxvY2FsaXplID0gJGxvY2FsaXplO1xuZXhwb3J0IHsgJGxvY2FsaXplIH07XG4iXSwibWFwcGluZ3MiOiI7QUFLQyxPQUFlLGdDQUFnQzs7O0FDRWhELElBQU0sU0FBUztBQUdmLFNBQVMsV0FBVyxNQUFNO0FBQ3hCLFFBQU0sZUFBZSxPQUFPLHNCQUFzQixLQUFLO0FBQ3ZELFNBQU8sZUFBZTtBQUN4QjtBQUNBLFNBQVMsV0FBVztBQUNsQixRQUFNLGNBQWMsT0FBTyxhQUFhO0FBQ3hDLFdBQVMsS0FBSyxNQUFNO0FBQ2xCLG1CQUFlLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxFQUFFLElBQUk7QUFBQSxFQUNoRTtBQUNBLFdBQVMsbUJBQW1CLE1BQU0sT0FBTztBQUN2QyxtQkFBZSxZQUFZLFNBQVMsS0FBSyxZQUFZLFNBQVMsRUFBRSxNQUFNLEtBQUs7QUFBQSxFQUM3RTtBQUNBLE9BQUssTUFBTTtBQUNYLFFBQU0sWUFBTixNQUFNLFVBQVM7QUFBQSxJQUtiLE9BQU8sb0JBQW9CO0FBQ3pCLFVBQUksT0FBTyxTQUFTLE1B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QztBQUM1QixrQkFBYyxZQUFZLENBQUM7QUFBQSxFQUM3QjtBQUNBLE1BQUksVUFBVSxXQUFXLGFBQWEsQ0FBQyxHQUFHLGFBQWEsSUFBSSxDQUFDLENBQUM7QUFDN0QsV0FBUyxJQUFJLEdBQUcsSUFBSSxhQUFhLFFBQVEsS0FBSztBQUM1QyxlQUFXLFlBQVksSUFBSSxDQUFDLElBQUksV0FBVyxhQUFhLENBQUMsR0FBRyxhQUFhLElBQUksQ0FBQyxDQUFDO0FBQUEsRUFDakY7QUFDQSxTQUFPO0FBQ1Q7QUFDQSxJQUFNLGVBQWU7QUFjckIsU0FBUyxXQUFXLGFBQWEsZ0JBQWdCO0FBQy9DLFNBQU8sZUFBZSxPQUFPLENBQUMsTUFBTSxlQUFlLFlBQVksVUFBVSxlQUFlLGFBQWEsY0FBYyxJQUFJLENBQUMsSUFBSTtBQUM5SDs7O0FDcGZBLFdBQVcsWUFBWTsiLCJuYW1lcyI6WyJzZWxmIiwiZ2xvYmFsIiwiZGVsZWdhdGUiLCJwcm9wIiwiX2dsb2JhbCIsImV2ZW50IiwicGF0Y2hPcHRpb25zIiwicmV0dXJuVGFyZ2V0Iiwid2luZG93IiwiaGFuZGxlIiwiaGFuZGxlSWQiLCJpc1BlcmlvZGljIiwiaXNSZWZyZXNoYWJsZSIsImlzQnJvd3NlciIsImlzTWl4Iiwiem9uZVN5bWJvbEV2ZW50TmFtZXMiLCJUUlVFX1NUUiIsIkZBTFNFX1NUUiIsIlpPTkVfU1lNQk9MX1BSRUZJWCIsImludGVybmFsV2luZG93IiwiWm9uZSIsIm5hbWUiLCJsb2FkVGFza3MiLCJPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJPYmplY3REZWZpbmVQcm9wZXJ0eSIsIl9fc3ltYm9sX18iLCJ2YWx1ZSIsIkVuZGlhbiJdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMSwyLDNdfQ==
