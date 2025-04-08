import {
  calculateHourFromAMPM,
  clampDate,
  convertDataToISO,
  convertToArrayOfNumbers,
  formatValue,
  generateDayAriaLabel,
  generateMonths,
  getClosestValidDate,
  getCombinedDateColumnData,
  getDay,
  getDayColumnData,
  getDaysOfMonth,
  getDaysOfWeek,
  getEndOfWeek,
  getHourCycle,
  getLocalizedDateTime,
  getLocalizedTime,
  getMonthAndYear,
  getMonthColumnData,
  getNextDay,
  getNextMonth,
  getNextWeek,
  getNextYear,
  getNumDaysInMonth,
  getPartsFromCalendarDay,
  getPreviousDay,
  getPreviousMonth,
  getPreviousWeek,
  getPreviousYear,
  getStartOfWeek,
  getTimeColumnsData,
  getToday,
  getYearColumnData,
  isAfter,
  isBefore,
  isLocaleDayPeriodRTL,
  isMonthFirstLocale,
  isSameDay,
  parseAmPm,
  parseDate,
  parseMaxParts,
  parseMinParts,
  validateParts,
  warnIfValueOutOfBounds
} from "./chunk-OJLWFEJB.js";
import {
  startFocusVisible
} from "./chunk-7V6MPOSH.js";
import {
  isRTL
} from "./chunk-V6KMHBLJ.js";
import {
  caretDownSharp,
  caretUpSharp,
  chevronBack,
  chevronDown,
  chevronForward
} from "./chunk-Y2OY2WAF.js";
import {
  hapticSelectionChanged,
  hapticSelectionEnd,
  hapticSelectionStart
} from "./chunk-3XAIP4YB.js";
import {
  createLockController
} from "./chunk-OISKRTRF.js";
import "./chunk-UPH3BB7G.js";
import {
  BACKDROP,
  createDelegateController,
  createTriggerController,
  dismiss,
  eventMethod,
  isCancel,
  prepareOverlay,
  present,
  safeCall,
  setOverlayId
} from "./chunk-HYGHPGGJ.js";
import {
  createAnimation
} from "./chunk-BKPN4S4N.js";
import "./chunk-U6MFTC2E.js";
import {
  createColorClasses,
  getClassMap
} from "./chunk-QQMTNXUN.js";
import {
  printIonError,
  printIonWarning
} from "./chunk-5HIO5JVM.js";
import {
  clamp,
  getElementRoot,
  raf,
  renderHiddenInput
} from "./chunk-RRWPYKYY.js";
import "./chunk-F4BDZKIT.js";
import "./chunk-QVGABGEB.js";
import "./chunk-JYOJD2RE.js";
import {
  getIonMode
} from "./chunk-5IJ3YEPD.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance,
  writeTask
} from "./chunk-T7BCX42A.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js
var isYearDisabled = (refYear, minParts, maxParts) => {
  if (minParts && minParts.year > refYear) {
    return true;
  }
  if (maxParts && maxParts.year < refYear) {
    return true;
  }
  return false;
};
var isDayDisabled = (refParts, minParts, maxParts, dayValues) => {
  if (refParts.day === null) {
    return true;
  }
  if (dayValues !== void 0 && !dayValues.includes(refParts.day)) {
    return true;
  }
  if (minParts && isBefore(refParts, minParts)) {
    return true;
  }
  if (maxParts && isAfter(refParts, maxParts)) {
    return true;
  }
  return false;
};
var getCalendarDayState = (locale, refParts, activeParts, todayParts, minParts, maxParts, dayValues) => {
  const activePartsArray = Array.isArray(activeParts) ? activeParts : [activeParts];
  const isActive = activePartsArray.find((parts) => isSameDay(refParts, parts)) !== void 0;
  const isToday = isSameDay(refParts, todayParts);
  const disabled = isDayDisabled(refParts, minParts, maxParts, dayValues);
  return {
    disabled,
    isActive,
    isToday,
    ariaSelected: isActive ? "true" : null,
    ariaLabel: generateDayAriaLabel(locale, isToday, refParts),
    text: refParts.day != null ? getDay(locale, refParts) : null
  };
};
var isMonthDisabled = (refParts, {
  minParts,
  maxParts
}) => {
  if (isYearDisabled(refParts.year, minParts, maxParts)) {
    return true;
  }
  if (minParts && isBefore(refParts, minParts) || maxParts && isAfter(refParts, maxParts)) {
    return true;
  }
  return false;
};
var isPrevMonthDisabled = (refParts, minParts, maxParts) => {
  const prevMonth = Object.assign(Object.assign({}, getPreviousMonth(refParts)), {
    day: null
  });
  return isMonthDisabled(prevMonth, {
    minParts,
    maxParts
  });
};
var isNextMonthDisabled = (refParts, maxParts) => {
  const nextMonth = Object.assign(Object.assign({}, getNextMonth(refParts)), {
    day: null
  });
  return isMonthDisabled(nextMonth, {
    maxParts
  });
};
var getHighlightStyles = (highlightedDates, dateIsoString, el) => {
  if (Array.isArray(highlightedDates)) {
    const dateStringWithoutTime = dateIsoString.split("T")[0];
    const matchingHighlight = highlightedDates.find((hd) => hd.date === dateStringWithoutTime);
    if (matchingHighlight) {
      return {
        textColor: matchingHighlight.textColor,
        backgroundColor: matchingHighlight.backgroundColor
      };
    }
  } else {
    try {
      return highlightedDates(dateIsoString);
    } catch (e) {
      printIonError("Exception thrown from provided `highlightedDates` callback. Please check your function and try again.", el, e);
    }
  }
  return void 0;
};
var warnIfTimeZoneProvided = (el, formatOptions) => {
  var _a, _b, _c, _d;
  if (((_a = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.date) === null || _a === void 0 ? void 0 : _a.timeZone) || ((_b = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.date) === null || _b === void 0 ? void 0 : _b.timeZoneName) || ((_c = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time) === null || _c === void 0 ? void 0 : _c.timeZone) || ((_d = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time) === null || _d === void 0 ? void 0 : _d.timeZoneName)) {
    printIonWarning('Datetime: "timeZone" and "timeZoneName" are not supported in "formatOptions".', el);
  }
};
var checkForPresentationFormatMismatch = (el, presentation, formatOptions) => {
  if (!formatOptions) return;
  switch (presentation) {
    case "date":
    case "month-year":
    case "month":
    case "year":
      if (formatOptions.date === void 0) {
        printIonWarning(`Datetime: The '${presentation}' presentation requires a date object in formatOptions.`, el);
      }
      break;
    case "time":
      if (formatOptions.time === void 0) {
        printIonWarning(`Datetime: The 'time' presentation requires a time object in formatOptions.`, el);
      }
      break;
    case "date-time":
    case "time-date":
      if (formatOptions.date === void 0 && formatOptions.time === void 0) {
        printIonWarning(`Datetime: The '${presentation}' presentation requires either a date or time object (or both) in formatOptions.`, el);
      }
      break;
  }
};
var datetimeIosCss = ':host{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background:var(--background);overflow:hidden}:host(.datetime-size-fixed){width:auto;height:auto}:host(.datetime-size-fixed:not(.datetime-prefer-wheel)){max-width:350px}:host(.datetime-size-fixed.datetime-prefer-wheel){min-width:350px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .wheel-order-year-first .day-column{-ms-flex-order:3;order:3;text-align:end}:host .wheel-order-year-first .month-column{-ms-flex-order:2;order:2;text-align:end}:host .wheel-order-year-first .year-column{-ms-flex-order:1;order:1;text-align:start}:host .datetime-calendar,:host .datetime-year{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-flow:column;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:-ms-flexbox;display:flex}:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}:host(.month-year-picker-open) .datetime-footer{display:none}:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled) .calendar-days-of-week,:host(.datetime-disabled) .datetime-time{opacity:0.4}:host(.datetime-readonly){pointer-events:none;}:host(.datetime-readonly) .calendar-action-buttons,:host(.datetime-readonly) .calendar-body,:host(.datetime-readonly) .datetime-year{pointer-events:initial}:host(.datetime-readonly) .calendar-day[disabled]:not(.calendar-day-constrained),:host(.datetime-readonly) .datetime-action-buttons ion-button[disabled]{opacity:1}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.datetime-action-buttons .datetime-action-buttons-container{display:-ms-flexbox;display:flex}:host .calendar-action-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons ion-button{--background:transparent}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}.calendar-days-of-week .day-of-week{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}:host .calendar-body{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;scroll-snap-align:start;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}:host .calendar-body .calendar-month-disabled{scroll-snap-align:none}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr)}:host .calendar-day-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:0;min-height:0;overflow:visible}.calendar-day{border-radius:50%;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;font-family:var(--ion-font-family, inherit);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:0}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}.calendar-day:focus{background:rgba(var(--ion-color-base-rgb), 0.2);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2);box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2)}:host .datetime-time{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .time-body{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;display:-ms-flexbox;display:flex;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons .calendar-month-year-toggle{color:var(--ion-color-base)}.calendar-month-year{min-width:0}.calendar-month-year-toggle{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;position:relative;border:0;outline:none;background:transparent;cursor:pointer;z-index:1}.calendar-month-year-toggle::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:-1}.calendar-month-year-toggle.ion-focused::after{background:currentColor}.calendar-month-year-toggle:disabled{opacity:0.3;pointer-events:none}.calendar-month-year-toggle ion-icon{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0}.calendar-month-year-toggle #toggle-wrapper{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}ion-picker{--highlight-background:var(--wheel-highlight-background);--highlight-border-radius:var(--wheel-highlight-border-radius);--fade-background-rgb:var(--wheel-fade-background-rgb)}:host{--background:var(--ion-color-light, #f4f5f8);--background-rgb:var(--ion-color-light-rgb, 244, 245, 248);--title-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}:host(.datetime-presentation-date-time:not(.datetime-prefer-wheel)),:host(.datetime-presentation-time-date:not(.datetime-prefer-wheel)),:host(.datetime-presentation-date:not(.datetime-prefer-wheel)){min-height:350px}:host .datetime-header{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:16px;padding-bottom:16px;border-bottom:0.55px solid var(--ion-color-step-200, var(--ion-background-color-step-200, #cccccc));font-size:min(0.875rem, 22.4px)}:host .datetime-header .datetime-title{color:var(--title-color)}:host .datetime-header .datetime-selected-date{margin-top:10px}.calendar-month-year-toggle{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;min-height:44px;font-size:min(1rem, 25.6px);font-weight:600}.calendar-month-year-toggle.ion-focused::after{opacity:0.15}.calendar-month-year-toggle #toggle-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:10px;margin-bottom:10px}:host .calendar-action-buttons .calendar-month-year-toggle ion-icon,:host .calendar-action-buttons ion-buttons ion-button{color:var(--ion-color-base)}:host .calendar-action-buttons ion-buttons{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:0}:host .calendar-action-buttons ion-buttons ion-button{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host .calendar-days-of-week{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0;color:var(--ion-color-step-300, var(--ion-text-color-step-700, #b3b3b3));font-size:min(0.75rem, 19.2px);font-weight:600;line-height:24px;text-transform:uppercase}@supports (border-radius: mod(1px, 1px)){.calendar-days-of-week .day-of-week{width:clamp(20px, calc(mod(min(1rem, 24px), 24px) * 10), 100%);height:24px;overflow:hidden}.calendar-day{border-radius:max(8px, mod(min(1rem, 24px), 24px) * 10)}}@supports ((border-radius: mod(1px, 1px)) and (background: -webkit-named-image(apple-pay-logo-black)) and (not (contain-intrinsic-size: none))) or (not (border-radius: mod(1px, 1px))){.calendar-days-of-week .day-of-week{width:auto;height:auto;overflow:initial}.calendar-day{border-radius:32px}}:host .calendar-body .calendar-month .calendar-month-grid{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;-ms-flex-align:center;align-items:center;height:calc(100% - 16px)}:host .calendar-day-wrapper{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;height:0;min-height:1rem}:host .calendar-day{width:40px;min-width:40px;height:40px;font-size:min(1.25rem, 32px)}.calendar-day.calendar-day-active{background:rgba(var(--ion-color-base-rgb), 0.2);font-size:min(1.375rem, 35.2px)}:host .calendar-day.calendar-day-today{color:var(--ion-color-base)}:host .calendar-day.calendar-day-active{color:var(--ion-color-base);font-weight:600}:host .calendar-day.calendar-day-today.calendar-day-active{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host .datetime-time{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:8px;padding-bottom:16px;font-size:min(1rem, 25.6px)}:host .datetime-time .time-header{font-weight:600}:host .datetime-buttons{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;border-top:0.55px solid var(--ion-color-step-200, var(--ion-background-color-step-200, #cccccc))}:host .datetime-buttons ::slotted(ion-buttons),:host .datetime-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}:host .datetime-action-buttons{width:100%}';
var IonDatetimeIosStyle0 = datetimeIosCss;
var datetimeMdCss = ':host{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background:var(--background);overflow:hidden}:host(.datetime-size-fixed){width:auto;height:auto}:host(.datetime-size-fixed:not(.datetime-prefer-wheel)){max-width:350px}:host(.datetime-size-fixed.datetime-prefer-wheel){min-width:350px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .wheel-order-year-first .day-column{-ms-flex-order:3;order:3;text-align:end}:host .wheel-order-year-first .month-column{-ms-flex-order:2;order:2;text-align:end}:host .wheel-order-year-first .year-column{-ms-flex-order:1;order:1;text-align:start}:host .datetime-calendar,:host .datetime-year{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-flow:column;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:-ms-flexbox;display:flex}:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}:host(.month-year-picker-open) .datetime-footer{display:none}:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled) .calendar-days-of-week,:host(.datetime-disabled) .datetime-time{opacity:0.4}:host(.datetime-readonly){pointer-events:none;}:host(.datetime-readonly) .calendar-action-buttons,:host(.datetime-readonly) .calendar-body,:host(.datetime-readonly) .datetime-year{pointer-events:initial}:host(.datetime-readonly) .calendar-day[disabled]:not(.calendar-day-constrained),:host(.datetime-readonly) .datetime-action-buttons ion-button[disabled]{opacity:1}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.datetime-action-buttons .datetime-action-buttons-container{display:-ms-flexbox;display:flex}:host .calendar-action-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons ion-button{--background:transparent}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}.calendar-days-of-week .day-of-week{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}:host .calendar-body{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;scroll-snap-align:start;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}:host .calendar-body .calendar-month-disabled{scroll-snap-align:none}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr)}:host .calendar-day-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:0;min-height:0;overflow:visible}.calendar-day{border-radius:50%;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;font-family:var(--ion-font-family, inherit);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:0}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}.calendar-day:focus{background:rgba(var(--ion-color-base-rgb), 0.2);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2);box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2)}:host .datetime-time{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .time-body{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;display:-ms-flexbox;display:flex;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons .calendar-month-year-toggle{color:var(--ion-color-base)}.calendar-month-year{min-width:0}.calendar-month-year-toggle{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;position:relative;border:0;outline:none;background:transparent;cursor:pointer;z-index:1}.calendar-month-year-toggle::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:-1}.calendar-month-year-toggle.ion-focused::after{background:currentColor}.calendar-month-year-toggle:disabled{opacity:0.3;pointer-events:none}.calendar-month-year-toggle ion-icon{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0}.calendar-month-year-toggle #toggle-wrapper{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}ion-picker{--highlight-background:var(--wheel-highlight-background);--highlight-border-radius:var(--wheel-highlight-border-radius);--fade-background-rgb:var(--wheel-fade-background-rgb)}:host{--background:var(--ion-color-step-100, var(--ion-background-color-step-100, #ffffff));--title-color:var(--ion-color-contrast)}:host .datetime-header{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:20px;background:var(--ion-color-base);color:var(--title-color)}:host .datetime-header .datetime-title{font-size:0.75rem;text-transform:uppercase}:host .datetime-header .datetime-selected-date{margin-top:30px;font-size:2.125rem}:host .calendar-action-buttons ion-button{--color:var(--ion-color-step-650, var(--ion-text-color-step-350, #595959))}.calendar-month-year-toggle{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:12px;padding-bottom:12px;min-height:48px;background:transparent;color:var(--ion-color-step-650, var(--ion-text-color-step-350, #595959));z-index:1}.calendar-month-year-toggle.ion-focused::after{opacity:0.04}.calendar-month-year-toggle ion-ripple-effect{color:currentColor}@media (any-hover: hover){.calendar-month-year-toggle.ion-activatable:not(.ion-focused):hover::after{background:currentColor;opacity:0.04}}:host .calendar-days-of-week{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:0px;padding-bottom:0px;color:var(--ion-color-step-500, var(--ion-text-color-step-500, gray));font-size:0.875rem;line-height:36px}:host .calendar-body .calendar-month .calendar-month-grid{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:4px;padding-bottom:4px;grid-template-rows:repeat(6, 1fr)}:host .calendar-day{width:42px;min-width:42px;height:42px;font-size:0.875rem}:host .calendar-day.calendar-day-today{border:1px solid var(--ion-color-base);color:var(--ion-color-base)}:host .calendar-day.calendar-day-active{color:var(--ion-color-contrast)}.calendar-day.calendar-day-active{border:1px solid var(--ion-color-base);background:var(--ion-color-base)}:host .datetime-time{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:8px;padding-bottom:8px}:host .time-header{color:var(--ion-color-step-650, var(--ion-text-color-step-350, #595959))}:host(.datetime-presentation-month) .datetime-year,:host(.datetime-presentation-year) .datetime-year,:host(.datetime-presentation-month-year) .datetime-year{margin-top:20px;margin-bottom:20px}:host .datetime-buttons{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:10px;padding-bottom:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}';
var IonDatetimeMdStyle0 = datetimeMdCss;
var Datetime = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionCancel = createEvent(this, "ionCancel", 7);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionValueChange = createEvent(this, "ionValueChange", 7);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.ionStyle = createEvent(this, "ionStyle", 7);
    this.ionRender = createEvent(this, "ionRender", 7);
    this.inputId = `ion-dt-${datetimeIds++}`;
    this.prevPresentation = null;
    this.warnIfIncorrectValueUsage = () => {
      const {
        multiple,
        value
      } = this;
      if (!multiple && Array.isArray(value)) {
        printIonWarning(`ion-datetime was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".

  Value Passed: [${value.map((v) => `'${v}'`).join(", ")}]
`, this.el);
      }
    };
    this.setValue = (value) => {
      this.value = value;
      this.ionChange.emit({
        value
      });
    };
    this.getActivePartsWithFallback = () => {
      var _a;
      const {
        defaultParts
      } = this;
      return (_a = this.getActivePart()) !== null && _a !== void 0 ? _a : defaultParts;
    };
    this.getActivePart = () => {
      const {
        activeParts
      } = this;
      return Array.isArray(activeParts) ? activeParts[0] : activeParts;
    };
    this.closeParentOverlay = (role) => {
      const popoverOrModal = this.el.closest("ion-modal, ion-popover");
      if (popoverOrModal) {
        popoverOrModal.dismiss(void 0, role);
      }
    };
    this.setWorkingParts = (parts) => {
      this.workingParts = Object.assign({}, parts);
    };
    this.setActiveParts = (parts, removeDate = false) => {
      if (this.readonly) {
        return;
      }
      const {
        multiple,
        minParts,
        maxParts,
        activeParts
      } = this;
      const validatedParts = validateParts(parts, minParts, maxParts);
      this.setWorkingParts(validatedParts);
      if (multiple) {
        const activePartsArray = Array.isArray(activeParts) ? activeParts : [activeParts];
        if (removeDate) {
          this.activeParts = activePartsArray.filter((p) => !isSameDay(p, validatedParts));
        } else {
          this.activeParts = [...activePartsArray, validatedParts];
        }
      } else {
        this.activeParts = Object.assign({}, validatedParts);
      }
      const hasSlottedButtons = this.el.querySelector('[slot="buttons"]') !== null;
      if (hasSlottedButtons || this.showDefaultButtons) {
        return;
      }
      this.confirm();
    };
    this.initializeKeyboardListeners = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const root = this.el.shadowRoot;
      const currentMonth = calendarBodyRef.querySelector(".calendar-month:nth-of-type(2)");
      const checkCalendarBodyFocus = (ev) => {
        var _a;
        const record = ev[0];
        if (((_a = record.oldValue) === null || _a === void 0 ? void 0 : _a.includes("ion-focused")) || !calendarBodyRef.classList.contains("ion-focused")) {
          return;
        }
        this.focusWorkingDay(currentMonth);
      };
      const mo = new MutationObserver(checkCalendarBodyFocus);
      mo.observe(calendarBodyRef, {
        attributeFilter: ["class"],
        attributeOldValue: true
      });
      this.destroyKeyboardMO = () => {
        mo === null || mo === void 0 ? void 0 : mo.disconnect();
      };
      calendarBodyRef.addEventListener("keydown", (ev) => {
        const activeElement = root.activeElement;
        if (!activeElement || !activeElement.classList.contains("calendar-day")) {
          return;
        }
        const parts = getPartsFromCalendarDay(activeElement);
        let partsToFocus;
        switch (ev.key) {
          case "ArrowDown":
            ev.preventDefault();
            partsToFocus = getNextWeek(parts);
            break;
          case "ArrowUp":
            ev.preventDefault();
            partsToFocus = getPreviousWeek(parts);
            break;
          case "ArrowRight":
            ev.preventDefault();
            partsToFocus = getNextDay(parts);
            break;
          case "ArrowLeft":
            ev.preventDefault();
            partsToFocus = getPreviousDay(parts);
            break;
          case "Home":
            ev.preventDefault();
            partsToFocus = getStartOfWeek(parts);
            break;
          case "End":
            ev.preventDefault();
            partsToFocus = getEndOfWeek(parts);
            break;
          case "PageUp":
            ev.preventDefault();
            partsToFocus = ev.shiftKey ? getPreviousYear(parts) : getPreviousMonth(parts);
            break;
          case "PageDown":
            ev.preventDefault();
            partsToFocus = ev.shiftKey ? getNextYear(parts) : getNextMonth(parts);
            break;
          /**
           * Do not preventDefault here
           * as we do not want to override other
           * browser defaults such as pressing Enter/Space
           * to select a day.
           */
          default:
            return;
        }
        if (isDayDisabled(partsToFocus, this.minParts, this.maxParts)) {
          return;
        }
        this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), partsToFocus));
        requestAnimationFrame(() => this.focusWorkingDay(currentMonth));
      });
    };
    this.focusWorkingDay = (currentMonth) => {
      const padding = currentMonth.querySelectorAll(".calendar-day-padding");
      const {
        day
      } = this.workingParts;
      if (day === null) {
        return;
      }
      const dayEl = currentMonth.querySelector(`.calendar-day-wrapper:nth-of-type(${padding.length + day}) .calendar-day`);
      if (dayEl) {
        dayEl.focus();
      }
    };
    this.processMinParts = () => {
      const {
        min,
        defaultParts
      } = this;
      if (min === void 0) {
        this.minParts = void 0;
        return;
      }
      this.minParts = parseMinParts(min, defaultParts);
    };
    this.processMaxParts = () => {
      const {
        max,
        defaultParts
      } = this;
      if (max === void 0) {
        this.maxParts = void 0;
        return;
      }
      this.maxParts = parseMaxParts(max, defaultParts);
    };
    this.initializeCalendarListener = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const months = calendarBodyRef.querySelectorAll(".calendar-month");
      const startMonth = months[0];
      const workingMonth = months[1];
      const endMonth = months[2];
      const mode = getIonMode(this);
      const needsiOSRubberBandFix = mode === "ios" && typeof navigator !== "undefined" && navigator.maxTouchPoints > 1;
      writeTask(() => {
        calendarBodyRef.scrollLeft = startMonth.clientWidth * (isRTL(this.el) ? -1 : 1);
        const getChangedMonth = (parts) => {
          const box = calendarBodyRef.getBoundingClientRect();
          const condition = isRTL(this.el) ? calendarBodyRef.scrollLeft >= -2 : calendarBodyRef.scrollLeft <= 2;
          const month = condition ? startMonth : endMonth;
          const monthBox = month.getBoundingClientRect();
          if (Math.abs(monthBox.x - box.x) > 2) return;
          const {
            forceRenderDate
          } = this;
          if (forceRenderDate !== void 0) {
            return {
              month: forceRenderDate.month,
              year: forceRenderDate.year,
              day: forceRenderDate.day
            };
          }
          if (month === startMonth) {
            return getPreviousMonth(parts);
          } else if (month === endMonth) {
            return getNextMonth(parts);
          } else {
            return;
          }
        };
        const updateActiveMonth = () => {
          if (needsiOSRubberBandFix) {
            calendarBodyRef.style.removeProperty("pointer-events");
            appliediOSRubberBandFix = false;
          }
          const newDate = getChangedMonth(this.workingParts);
          if (!newDate) return;
          const {
            month,
            day,
            year
          } = newDate;
          if (isMonthDisabled({
            month,
            year,
            day: null
          }, {
            minParts: Object.assign(Object.assign({}, this.minParts), {
              day: null
            }),
            maxParts: Object.assign(Object.assign({}, this.maxParts), {
              day: null
            })
          })) {
            return;
          }
          calendarBodyRef.style.setProperty("overflow", "hidden");
          writeTask(() => {
            this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), {
              month,
              day,
              year
            }));
            calendarBodyRef.scrollLeft = workingMonth.clientWidth * (isRTL(this.el) ? -1 : 1);
            calendarBodyRef.style.removeProperty("overflow");
            if (this.resolveForceDateScrolling) {
              this.resolveForceDateScrolling();
            }
          });
        };
        let scrollTimeout;
        let appliediOSRubberBandFix = false;
        const scrollCallback = () => {
          if (scrollTimeout) {
            clearTimeout(scrollTimeout);
          }
          if (!appliediOSRubberBandFix && needsiOSRubberBandFix) {
            calendarBodyRef.style.setProperty("pointer-events", "none");
            appliediOSRubberBandFix = true;
          }
          scrollTimeout = setTimeout(updateActiveMonth, 50);
        };
        calendarBodyRef.addEventListener("scroll", scrollCallback);
        this.destroyCalendarListener = () => {
          calendarBodyRef.removeEventListener("scroll", scrollCallback);
        };
      });
    };
    this.destroyInteractionListeners = () => {
      const {
        destroyCalendarListener,
        destroyKeyboardMO
      } = this;
      if (destroyCalendarListener !== void 0) {
        destroyCalendarListener();
      }
      if (destroyKeyboardMO !== void 0) {
        destroyKeyboardMO();
      }
    };
    this.processValue = (value) => {
      const hasValue = value !== null && value !== void 0 && value !== "" && (!Array.isArray(value) || value.length > 0);
      const valueToProcess = hasValue ? parseDate(value) : this.defaultParts;
      const {
        minParts,
        maxParts,
        workingParts,
        el
      } = this;
      this.warnIfIncorrectValueUsage();
      if (!valueToProcess) {
        return;
      }
      if (hasValue) {
        warnIfValueOutOfBounds(valueToProcess, minParts, maxParts);
      }
      const singleValue = Array.isArray(valueToProcess) ? valueToProcess[0] : valueToProcess;
      const targetValue = clampDate(singleValue, minParts, maxParts);
      const {
        month,
        day,
        year,
        hour,
        minute
      } = targetValue;
      const ampm = parseAmPm(hour);
      if (hasValue) {
        if (Array.isArray(valueToProcess)) {
          this.activeParts = [...valueToProcess];
        } else {
          this.activeParts = {
            month,
            day,
            year,
            hour,
            minute,
            ampm
          };
        }
      } else {
        this.activeParts = [];
      }
      const didChangeMonth = month !== void 0 && month !== workingParts.month || year !== void 0 && year !== workingParts.year;
      const bodyIsVisible = el.classList.contains("datetime-ready");
      const {
        isGridStyle,
        showMonthAndYear
      } = this;
      let areAllSelectedDatesInSameMonth = true;
      if (Array.isArray(valueToProcess)) {
        const firstMonth = valueToProcess[0].month;
        for (const date of valueToProcess) {
          if (date.month !== firstMonth) {
            areAllSelectedDatesInSameMonth = false;
            break;
          }
        }
      }
      if (areAllSelectedDatesInSameMonth) {
        if (isGridStyle && didChangeMonth && bodyIsVisible && !showMonthAndYear) {
          this.animateToDate(targetValue);
        } else {
          this.setWorkingParts({
            month,
            day,
            year,
            hour,
            minute,
            ampm
          });
        }
      }
    };
    this.animateToDate = (targetValue) => __async(this, null, function* () {
      const {
        workingParts
      } = this;
      this.forceRenderDate = targetValue;
      const forceDateScrollingPromise = new Promise((resolve) => {
        this.resolveForceDateScrolling = resolve;
      });
      const targetMonthIsBefore = isBefore(targetValue, workingParts);
      targetMonthIsBefore ? this.prevMonth() : this.nextMonth();
      yield forceDateScrollingPromise;
      this.resolveForceDateScrolling = void 0;
      this.forceRenderDate = void 0;
    });
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.hasValue = () => {
      return this.value != null;
    };
    this.nextMonth = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const nextMonth = calendarBodyRef.querySelector(".calendar-month:last-of-type");
      if (!nextMonth) {
        return;
      }
      const left = nextMonth.offsetWidth * 2;
      calendarBodyRef.scrollTo({
        top: 0,
        left: left * (isRTL(this.el) ? -1 : 1),
        behavior: "smooth"
      });
    };
    this.prevMonth = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const prevMonth = calendarBodyRef.querySelector(".calendar-month:first-of-type");
      if (!prevMonth) {
        return;
      }
      calendarBodyRef.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    };
    this.toggleMonthAndYearView = () => {
      this.showMonthAndYear = !this.showMonthAndYear;
    };
    this.showMonthAndYear = false;
    this.activeParts = [];
    this.workingParts = {
      month: 5,
      day: 28,
      year: 2021,
      hour: 13,
      minute: 52,
      ampm: "pm"
    };
    this.isTimePopoverOpen = false;
    this.forceRenderDate = void 0;
    this.color = "primary";
    this.name = this.inputId;
    this.disabled = false;
    this.formatOptions = void 0;
    this.readonly = false;
    this.isDateEnabled = void 0;
    this.min = void 0;
    this.max = void 0;
    this.presentation = "date-time";
    this.cancelText = "Cancel";
    this.doneText = "Done";
    this.clearText = "Clear";
    this.yearValues = void 0;
    this.monthValues = void 0;
    this.dayValues = void 0;
    this.hourValues = void 0;
    this.minuteValues = void 0;
    this.locale = "default";
    this.firstDayOfWeek = 0;
    this.titleSelectedDatesFormatter = void 0;
    this.multiple = false;
    this.highlightedDates = void 0;
    this.value = void 0;
    this.showDefaultTitle = false;
    this.showDefaultButtons = false;
    this.showClearButton = false;
    this.showDefaultTimeLabel = true;
    this.hourCycle = void 0;
    this.size = "fixed";
    this.preferWheel = false;
  }
  formatOptionsChanged() {
    const {
      el,
      formatOptions,
      presentation
    } = this;
    checkForPresentationFormatMismatch(el, presentation, formatOptions);
    warnIfTimeZoneProvided(el, formatOptions);
  }
  disabledChanged() {
    this.emitStyle();
  }
  minChanged() {
    this.processMinParts();
  }
  maxChanged() {
    this.processMaxParts();
  }
  presentationChanged() {
    const {
      el,
      formatOptions,
      presentation
    } = this;
    checkForPresentationFormatMismatch(el, presentation, formatOptions);
  }
  get isGridStyle() {
    const {
      presentation,
      preferWheel
    } = this;
    const hasDatePresentation = presentation === "date" || presentation === "date-time" || presentation === "time-date";
    return hasDatePresentation && !preferWheel;
  }
  yearValuesChanged() {
    this.parsedYearValues = convertToArrayOfNumbers(this.yearValues);
  }
  monthValuesChanged() {
    this.parsedMonthValues = convertToArrayOfNumbers(this.monthValues);
  }
  dayValuesChanged() {
    this.parsedDayValues = convertToArrayOfNumbers(this.dayValues);
  }
  hourValuesChanged() {
    this.parsedHourValues = convertToArrayOfNumbers(this.hourValues);
  }
  minuteValuesChanged() {
    this.parsedMinuteValues = convertToArrayOfNumbers(this.minuteValues);
  }
  /**
   * Update the datetime value when the value changes
   */
  valueChanged() {
    return __async(this, null, function* () {
      const {
        value
      } = this;
      if (this.hasValue()) {
        this.processValue(value);
      }
      this.emitStyle();
      this.ionValueChange.emit({
        value
      });
    });
  }
  /**
   * Confirms the selected datetime value, updates the
   * `value` property, and optionally closes the popover
   * or modal that the datetime was presented in.
   */
  confirm(closeOverlay = false) {
    return __async(this, null, function* () {
      const {
        isCalendarPicker,
        activeParts,
        preferWheel,
        workingParts
      } = this;
      if (activeParts !== void 0 || !isCalendarPicker) {
        const activePartsIsArray = Array.isArray(activeParts);
        if (activePartsIsArray && activeParts.length === 0) {
          if (preferWheel) {
            this.setValue(convertDataToISO(workingParts));
          } else {
            this.setValue(void 0);
          }
        } else {
          this.setValue(convertDataToISO(activeParts));
        }
      }
      if (closeOverlay) {
        this.closeParentOverlay(CONFIRM_ROLE);
      }
    });
  }
  /**
   * Resets the internal state of the datetime but does not update the value.
   * Passing a valid ISO-8601 string will reset the state of the component to the provided date.
   * If no value is provided, the internal state will be reset to the clamped value of the min, max and today.
   */
  reset(startDate) {
    return __async(this, null, function* () {
      this.processValue(startDate);
    });
  }
  /**
   * Emits the ionCancel event and
   * optionally closes the popover
   * or modal that the datetime was
   * presented in.
   */
  cancel(closeOverlay = false) {
    return __async(this, null, function* () {
      this.ionCancel.emit();
      if (closeOverlay) {
        this.closeParentOverlay(CANCEL_ROLE);
      }
    });
  }
  get isCalendarPicker() {
    const {
      presentation
    } = this;
    return presentation === "date" || presentation === "date-time" || presentation === "time-date";
  }
  connectedCallback() {
    this.clearFocusVisible = startFocusVisible(this.el).destroy;
  }
  disconnectedCallback() {
    if (this.clearFocusVisible) {
      this.clearFocusVisible();
      this.clearFocusVisible = void 0;
    }
  }
  initializeListeners() {
    this.initializeCalendarListener();
    this.initializeKeyboardListeners();
  }
  componentDidLoad() {
    const {
      el,
      intersectionTrackerRef
    } = this;
    const visibleCallback = (entries) => {
      const ev = entries[0];
      if (!ev.isIntersecting) {
        return;
      }
      this.initializeListeners();
      writeTask(() => {
        this.el.classList.add("datetime-ready");
      });
    };
    const visibleIO = new IntersectionObserver(visibleCallback, {
      threshold: 0.01,
      root: el
    });
    raf(() => visibleIO === null || visibleIO === void 0 ? void 0 : visibleIO.observe(intersectionTrackerRef));
    const hiddenCallback = (entries) => {
      const ev = entries[0];
      if (ev.isIntersecting) {
        return;
      }
      this.destroyInteractionListeners();
      this.showMonthAndYear = false;
      writeTask(() => {
        this.el.classList.remove("datetime-ready");
      });
    };
    const hiddenIO = new IntersectionObserver(hiddenCallback, {
      threshold: 0,
      root: el
    });
    raf(() => hiddenIO === null || hiddenIO === void 0 ? void 0 : hiddenIO.observe(intersectionTrackerRef));
    const root = getElementRoot(this.el);
    root.addEventListener("ionFocus", (ev) => ev.stopPropagation());
    root.addEventListener("ionBlur", (ev) => ev.stopPropagation());
  }
  /**
   * When the presentation is changed, all calendar content is recreated,
   * so we need to re-init behavior with the new elements.
   */
  componentDidRender() {
    const {
      presentation,
      prevPresentation,
      calendarBodyRef,
      minParts,
      preferWheel,
      forceRenderDate
    } = this;
    const hasCalendarGrid = !preferWheel && ["date-time", "time-date", "date"].includes(presentation);
    if (minParts !== void 0 && hasCalendarGrid && calendarBodyRef) {
      const workingMonth = calendarBodyRef.querySelector(".calendar-month:nth-of-type(1)");
      if (workingMonth && forceRenderDate === void 0) {
        calendarBodyRef.scrollLeft = workingMonth.clientWidth * (isRTL(this.el) ? -1 : 1);
      }
    }
    if (prevPresentation === null) {
      this.prevPresentation = presentation;
      return;
    }
    if (presentation === prevPresentation) {
      return;
    }
    this.prevPresentation = presentation;
    this.destroyInteractionListeners();
    this.initializeListeners();
    this.showMonthAndYear = false;
    raf(() => {
      this.ionRender.emit();
    });
  }
  componentWillLoad() {
    const {
      el,
      formatOptions,
      highlightedDates,
      multiple,
      presentation,
      preferWheel
    } = this;
    if (multiple) {
      if (presentation !== "date") {
        printIonWarning('Multiple date selection is only supported for presentation="date".', el);
      }
      if (preferWheel) {
        printIonWarning('Multiple date selection is not supported with preferWheel="true".', el);
      }
    }
    if (highlightedDates !== void 0) {
      if (presentation !== "date" && presentation !== "date-time" && presentation !== "time-date") {
        printIonWarning("The highlightedDates property is only supported with the date, date-time, and time-date presentations.", el);
      }
      if (preferWheel) {
        printIonWarning('The highlightedDates property is not supported with preferWheel="true".', el);
      }
    }
    if (formatOptions) {
      checkForPresentationFormatMismatch(el, presentation, formatOptions);
      warnIfTimeZoneProvided(el, formatOptions);
    }
    const hourValues = this.parsedHourValues = convertToArrayOfNumbers(this.hourValues);
    const minuteValues = this.parsedMinuteValues = convertToArrayOfNumbers(this.minuteValues);
    const monthValues = this.parsedMonthValues = convertToArrayOfNumbers(this.monthValues);
    const yearValues = this.parsedYearValues = convertToArrayOfNumbers(this.yearValues);
    const dayValues = this.parsedDayValues = convertToArrayOfNumbers(this.dayValues);
    const todayParts = this.todayParts = parseDate(getToday());
    this.processMinParts();
    this.processMaxParts();
    this.defaultParts = getClosestValidDate({
      refParts: todayParts,
      monthValues,
      dayValues,
      yearValues,
      hourValues,
      minuteValues,
      minParts: this.minParts,
      maxParts: this.maxParts
    });
    this.processValue(this.value);
    this.emitStyle();
  }
  emitStyle() {
    this.ionStyle.emit({
      interactive: true,
      datetime: true,
      "interactive-disabled": this.disabled
    });
  }
  /**
   * Universal render methods
   * These are pieces of datetime that
   * are rendered independently of presentation.
   */
  renderFooter() {
    const {
      disabled,
      readonly,
      showDefaultButtons,
      showClearButton
    } = this;
    const isButtonDisabled = disabled || readonly;
    const hasSlottedButtons = this.el.querySelector('[slot="buttons"]') !== null;
    if (!hasSlottedButtons && !showDefaultButtons && !showClearButton) {
      return;
    }
    const clearButtonClick = () => {
      this.reset();
      this.setValue(void 0);
    };
    return h("div", {
      class: "datetime-footer"
    }, h("div", {
      class: "datetime-buttons"
    }, h("div", {
      class: {
        ["datetime-action-buttons"]: true,
        ["has-clear-button"]: this.showClearButton
      }
    }, h("slot", {
      name: "buttons"
    }, h("ion-buttons", null, showDefaultButtons && h("ion-button", {
      id: "cancel-button",
      color: this.color,
      onClick: () => this.cancel(true),
      disabled: isButtonDisabled
    }, this.cancelText), h("div", {
      class: "datetime-action-buttons-container"
    }, showClearButton && h("ion-button", {
      id: "clear-button",
      color: this.color,
      onClick: () => clearButtonClick(),
      disabled: isButtonDisabled
    }, this.clearText), showDefaultButtons && h("ion-button", {
      id: "confirm-button",
      color: this.color,
      onClick: () => this.confirm(true),
      disabled: isButtonDisabled
    }, this.doneText)))))));
  }
  /**
   * Wheel picker render methods
   */
  renderWheelPicker(forcePresentation = this.presentation) {
    const renderArray = forcePresentation === "time-date" ? [this.renderTimePickerColumns(forcePresentation), this.renderDatePickerColumns(forcePresentation)] : [this.renderDatePickerColumns(forcePresentation), this.renderTimePickerColumns(forcePresentation)];
    return h("ion-picker", null, renderArray);
  }
  renderDatePickerColumns(forcePresentation) {
    return forcePresentation === "date-time" || forcePresentation === "time-date" ? this.renderCombinedDatePickerColumn() : this.renderIndividualDatePickerColumns(forcePresentation);
  }
  renderCombinedDatePickerColumn() {
    const {
      defaultParts,
      disabled,
      workingParts,
      locale,
      minParts,
      maxParts,
      todayParts,
      isDateEnabled
    } = this;
    const activePart = this.getActivePartsWithFallback();
    const monthsToRender = generateMonths(workingParts);
    const lastMonth = monthsToRender[monthsToRender.length - 1];
    monthsToRender[0].day = 1;
    lastMonth.day = getNumDaysInMonth(lastMonth.month, lastMonth.year);
    const min = minParts !== void 0 && isAfter(minParts, monthsToRender[0]) ? minParts : monthsToRender[0];
    const max = maxParts !== void 0 && isBefore(maxParts, lastMonth) ? maxParts : lastMonth;
    const result = getCombinedDateColumnData(locale, todayParts, min, max, this.parsedDayValues, this.parsedMonthValues);
    let items = result.items;
    const parts = result.parts;
    if (isDateEnabled) {
      items = items.map((itemObject, index) => {
        const referenceParts = parts[index];
        let disabled2;
        try {
          disabled2 = !isDateEnabled(convertDataToISO(referenceParts));
        } catch (e) {
          printIonError("Exception thrown from provided `isDateEnabled` function. Please check your function and try again.", e);
        }
        return Object.assign(Object.assign({}, itemObject), {
          disabled: disabled2
        });
      });
    }
    const todayString = workingParts.day !== null ? `${workingParts.year}-${workingParts.month}-${workingParts.day}` : `${defaultParts.year}-${defaultParts.month}-${defaultParts.day}`;
    return h("ion-picker-column", {
      "aria-label": "Select a date",
      class: "date-column",
      color: this.color,
      disabled,
      value: todayString,
      onIonChange: (ev) => {
        const {
          value
        } = ev.detail;
        const findPart = parts.find(({
          month,
          day,
          year
        }) => value === `${year}-${month}-${day}`);
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), findPart));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), findPart));
        ev.stopPropagation();
      }
    }, items.map((item) => h("ion-picker-column-option", {
      part: item.value === todayString ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART,
      key: item.value,
      disabled: item.disabled,
      value: item.value
    }, item.text)));
  }
  renderIndividualDatePickerColumns(forcePresentation) {
    const {
      workingParts,
      isDateEnabled
    } = this;
    const shouldRenderMonths = forcePresentation !== "year" && forcePresentation !== "time";
    const months = shouldRenderMonths ? getMonthColumnData(this.locale, workingParts, this.minParts, this.maxParts, this.parsedMonthValues) : [];
    const shouldRenderDays = forcePresentation === "date";
    let days = shouldRenderDays ? getDayColumnData(this.locale, workingParts, this.minParts, this.maxParts, this.parsedDayValues) : [];
    if (isDateEnabled) {
      days = days.map((dayObject) => {
        const {
          value
        } = dayObject;
        const valueNum = typeof value === "string" ? parseInt(value) : value;
        const referenceParts = {
          month: workingParts.month,
          day: valueNum,
          year: workingParts.year
        };
        let disabled;
        try {
          disabled = !isDateEnabled(convertDataToISO(referenceParts));
        } catch (e) {
          printIonError("Exception thrown from provided `isDateEnabled` function. Please check your function and try again.", e);
        }
        return Object.assign(Object.assign({}, dayObject), {
          disabled
        });
      });
    }
    const shouldRenderYears = forcePresentation !== "month" && forcePresentation !== "time";
    const years = shouldRenderYears ? getYearColumnData(this.locale, this.defaultParts, this.minParts, this.maxParts, this.parsedYearValues) : [];
    const showMonthFirst = isMonthFirstLocale(this.locale, {
      month: "numeric",
      day: "numeric"
    });
    let renderArray = [];
    if (showMonthFirst) {
      renderArray = [this.renderMonthPickerColumn(months), this.renderDayPickerColumn(days), this.renderYearPickerColumn(years)];
    } else {
      renderArray = [this.renderDayPickerColumn(days), this.renderMonthPickerColumn(months), this.renderYearPickerColumn(years)];
    }
    return renderArray;
  }
  renderDayPickerColumn(days) {
    var _a;
    if (days.length === 0) {
      return [];
    }
    const {
      disabled,
      workingParts
    } = this;
    const activePart = this.getActivePartsWithFallback();
    const pickerColumnValue = (_a = workingParts.day !== null ? workingParts.day : this.defaultParts.day) !== null && _a !== void 0 ? _a : void 0;
    return h("ion-picker-column", {
      "aria-label": "Select a day",
      class: "day-column",
      color: this.color,
      disabled,
      value: pickerColumnValue,
      onIonChange: (ev) => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          day: ev.detail.value
        }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), {
          day: ev.detail.value
        }));
        ev.stopPropagation();
      }
    }, days.map((day) => h("ion-picker-column-option", {
      part: day.value === pickerColumnValue ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART,
      key: day.value,
      disabled: day.disabled,
      value: day.value
    }, day.text)));
  }
  renderMonthPickerColumn(months) {
    if (months.length === 0) {
      return [];
    }
    const {
      disabled,
      workingParts
    } = this;
    const activePart = this.getActivePartsWithFallback();
    return h("ion-picker-column", {
      "aria-label": "Select a month",
      class: "month-column",
      color: this.color,
      disabled,
      value: workingParts.month,
      onIonChange: (ev) => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          month: ev.detail.value
        }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), {
          month: ev.detail.value
        }));
        ev.stopPropagation();
      }
    }, months.map((month) => h("ion-picker-column-option", {
      part: month.value === workingParts.month ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART,
      key: month.value,
      disabled: month.disabled,
      value: month.value
    }, month.text)));
  }
  renderYearPickerColumn(years) {
    if (years.length === 0) {
      return [];
    }
    const {
      disabled,
      workingParts
    } = this;
    const activePart = this.getActivePartsWithFallback();
    return h("ion-picker-column", {
      "aria-label": "Select a year",
      class: "year-column",
      color: this.color,
      disabled,
      value: workingParts.year,
      onIonChange: (ev) => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          year: ev.detail.value
        }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), {
          year: ev.detail.value
        }));
        ev.stopPropagation();
      }
    }, years.map((year) => h("ion-picker-column-option", {
      part: year.value === workingParts.year ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART,
      key: year.value,
      disabled: year.disabled,
      value: year.value
    }, year.text)));
  }
  renderTimePickerColumns(forcePresentation) {
    if (["date", "month", "month-year", "year"].includes(forcePresentation)) {
      return [];
    }
    const activePart = this.getActivePart();
    const userHasSelectedDate = activePart !== void 0;
    const {
      hoursData,
      minutesData,
      dayPeriodData
    } = getTimeColumnsData(this.locale, this.workingParts, this.hourCycle, userHasSelectedDate ? this.minParts : void 0, userHasSelectedDate ? this.maxParts : void 0, this.parsedHourValues, this.parsedMinuteValues);
    return [this.renderHourPickerColumn(hoursData), this.renderMinutePickerColumn(minutesData), this.renderDayPeriodPickerColumn(dayPeriodData)];
  }
  renderHourPickerColumn(hoursData) {
    const {
      disabled,
      workingParts
    } = this;
    if (hoursData.length === 0) return [];
    const activePart = this.getActivePartsWithFallback();
    return h("ion-picker-column", {
      "aria-label": "Select an hour",
      color: this.color,
      disabled,
      value: activePart.hour,
      numericInput: true,
      onIonChange: (ev) => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          hour: ev.detail.value
        }));
        this.setActiveParts(Object.assign(Object.assign({}, this.getActivePartsWithFallback()), {
          hour: ev.detail.value
        }));
        ev.stopPropagation();
      }
    }, hoursData.map((hour) => h("ion-picker-column-option", {
      part: hour.value === activePart.hour ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART,
      key: hour.value,
      disabled: hour.disabled,
      value: hour.value
    }, hour.text)));
  }
  renderMinutePickerColumn(minutesData) {
    const {
      disabled,
      workingParts
    } = this;
    if (minutesData.length === 0) return [];
    const activePart = this.getActivePartsWithFallback();
    return h("ion-picker-column", {
      "aria-label": "Select a minute",
      color: this.color,
      disabled,
      value: activePart.minute,
      numericInput: true,
      onIonChange: (ev) => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          minute: ev.detail.value
        }));
        this.setActiveParts(Object.assign(Object.assign({}, this.getActivePartsWithFallback()), {
          minute: ev.detail.value
        }));
        ev.stopPropagation();
      }
    }, minutesData.map((minute) => h("ion-picker-column-option", {
      part: minute.value === activePart.minute ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART,
      key: minute.value,
      disabled: minute.disabled,
      value: minute.value
    }, minute.text)));
  }
  renderDayPeriodPickerColumn(dayPeriodData) {
    const {
      disabled,
      workingParts
    } = this;
    if (dayPeriodData.length === 0) {
      return [];
    }
    const activePart = this.getActivePartsWithFallback();
    const isDayPeriodRTL = isLocaleDayPeriodRTL(this.locale);
    return h("ion-picker-column", {
      "aria-label": "Select a day period",
      style: isDayPeriodRTL ? {
        order: "-1"
      } : {},
      color: this.color,
      disabled,
      value: activePart.ampm,
      onIonChange: (ev) => {
        const hour = calculateHourFromAMPM(workingParts, ev.detail.value);
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          ampm: ev.detail.value,
          hour
        }));
        this.setActiveParts(Object.assign(Object.assign({}, this.getActivePartsWithFallback()), {
          ampm: ev.detail.value,
          hour
        }));
        ev.stopPropagation();
      }
    }, dayPeriodData.map((dayPeriod) => h("ion-picker-column-option", {
      part: dayPeriod.value === activePart.ampm ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART,
      key: dayPeriod.value,
      disabled: dayPeriod.disabled,
      value: dayPeriod.value
    }, dayPeriod.text)));
  }
  renderWheelView(forcePresentation) {
    const {
      locale
    } = this;
    const showMonthFirst = isMonthFirstLocale(locale);
    const columnOrder = showMonthFirst ? "month-first" : "year-first";
    return h("div", {
      class: {
        [`wheel-order-${columnOrder}`]: true
      }
    }, this.renderWheelPicker(forcePresentation));
  }
  /**
   * Grid Render Methods
   */
  renderCalendarHeader(mode) {
    const {
      disabled
    } = this;
    const expandedIcon = mode === "ios" ? chevronDown : caretUpSharp;
    const collapsedIcon = mode === "ios" ? chevronForward : caretDownSharp;
    const prevMonthDisabled = disabled || isPrevMonthDisabled(this.workingParts, this.minParts, this.maxParts);
    const nextMonthDisabled = disabled || isNextMonthDisabled(this.workingParts, this.maxParts);
    const hostDir = this.el.getAttribute("dir") || void 0;
    return h("div", {
      class: "calendar-header"
    }, h("div", {
      class: "calendar-action-buttons"
    }, h("div", {
      class: "calendar-month-year"
    }, h("button", {
      class: {
        "calendar-month-year-toggle": true,
        "ion-activatable": true,
        "ion-focusable": true
      },
      part: "month-year-button",
      disabled,
      "aria-label": this.showMonthAndYear ? "Hide year picker" : "Show year picker",
      onClick: () => this.toggleMonthAndYearView()
    }, h("span", {
      id: "toggle-wrapper"
    }, getMonthAndYear(this.locale, this.workingParts), h("ion-icon", {
      "aria-hidden": "true",
      icon: this.showMonthAndYear ? expandedIcon : collapsedIcon,
      lazy: false,
      flipRtl: true
    })), mode === "md" && h("ion-ripple-effect", null))), h("div", {
      class: "calendar-next-prev"
    }, h("ion-buttons", null, h("ion-button", {
      "aria-label": "Previous month",
      disabled: prevMonthDisabled,
      onClick: () => this.prevMonth()
    }, h("ion-icon", {
      dir: hostDir,
      "aria-hidden": "true",
      slot: "icon-only",
      icon: chevronBack,
      lazy: false,
      flipRtl: true
    })), h("ion-button", {
      "aria-label": "Next month",
      disabled: nextMonthDisabled,
      onClick: () => this.nextMonth()
    }, h("ion-icon", {
      dir: hostDir,
      "aria-hidden": "true",
      slot: "icon-only",
      icon: chevronForward,
      lazy: false,
      flipRtl: true
    }))))), h("div", {
      class: "calendar-days-of-week",
      "aria-hidden": "true"
    }, getDaysOfWeek(this.locale, mode, this.firstDayOfWeek % 7).map((d) => {
      return h("div", {
        class: "day-of-week"
      }, d);
    })));
  }
  renderMonth(month, year) {
    const {
      disabled,
      readonly
    } = this;
    const yearAllowed = this.parsedYearValues === void 0 || this.parsedYearValues.includes(year);
    const monthAllowed = this.parsedMonthValues === void 0 || this.parsedMonthValues.includes(month);
    const isCalMonthDisabled = !yearAllowed || !monthAllowed;
    const isDatetimeDisabled = disabled || readonly;
    const swipeDisabled = disabled || isMonthDisabled({
      month,
      year,
      day: null
    }, {
      // The day is not used when checking if a month is disabled.
      // Users should be able to access the min or max month, even if the
      // min/max date is out of bounds (e.g. min is set to Feb 15, Feb should not be disabled).
      minParts: Object.assign(Object.assign({}, this.minParts), {
        day: null
      }),
      maxParts: Object.assign(Object.assign({}, this.maxParts), {
        day: null
      })
    });
    const isWorkingMonth = this.workingParts.month === month && this.workingParts.year === year;
    const activePart = this.getActivePartsWithFallback();
    return h("div", {
      "aria-hidden": !isWorkingMonth ? "true" : null,
      class: {
        "calendar-month": true,
        // Prevents scroll snap swipe gestures for months outside of the min/max bounds
        "calendar-month-disabled": !isWorkingMonth && swipeDisabled
      }
    }, h("div", {
      class: "calendar-month-grid"
    }, getDaysOfMonth(month, year, this.firstDayOfWeek % 7).map((dateObject, index) => {
      const {
        day,
        dayOfWeek
      } = dateObject;
      const {
        el,
        highlightedDates,
        isDateEnabled,
        multiple
      } = this;
      const referenceParts = {
        month,
        day,
        year
      };
      const isCalendarPadding = day === null;
      const {
        isActive,
        isToday,
        ariaLabel,
        ariaSelected,
        disabled: isDayDisabled2,
        text
      } = getCalendarDayState(this.locale, referenceParts, this.activeParts, this.todayParts, this.minParts, this.maxParts, this.parsedDayValues);
      const dateIsoString = convertDataToISO(referenceParts);
      let isCalDayDisabled = isCalMonthDisabled || isDayDisabled2;
      if (!isCalDayDisabled && isDateEnabled !== void 0) {
        try {
          isCalDayDisabled = !isDateEnabled(dateIsoString);
        } catch (e) {
          printIonError("Exception thrown from provided `isDateEnabled` function. Please check your function and try again.", el, e);
        }
      }
      const isCalDayConstrained = isCalDayDisabled && isDatetimeDisabled;
      const isButtonDisabled = isCalDayDisabled || isDatetimeDisabled;
      let dateStyle = void 0;
      if (highlightedDates !== void 0 && !isActive && day !== null) {
        dateStyle = getHighlightStyles(highlightedDates, dateIsoString, el);
      }
      let dateParts = void 0;
      if (!isCalendarPadding) {
        dateParts = `calendar-day${isActive ? " active" : ""}${isToday ? " today" : ""}${isCalDayDisabled ? " disabled" : ""}`;
      }
      return h("div", {
        class: "calendar-day-wrapper"
      }, h("button", {
        // We need to use !important for the inline styles here because
        // otherwise the CSS shadow parts will override these styles.
        // See https://github.com/WICG/webcomponents/issues/847
        // Both the CSS shadow parts and highlightedDates styles are
        // provided by the developer, but highlightedDates styles should
        // always take priority.
        ref: (el2) => {
          if (el2) {
            el2.style.setProperty("color", `${dateStyle ? dateStyle.textColor : ""}`, "important");
            el2.style.setProperty("background-color", `${dateStyle ? dateStyle.backgroundColor : ""}`, "important");
          }
        },
        tabindex: "-1",
        "data-day": day,
        "data-month": month,
        "data-year": year,
        "data-index": index,
        "data-day-of-week": dayOfWeek,
        disabled: isButtonDisabled,
        class: {
          "calendar-day-padding": isCalendarPadding,
          "calendar-day": true,
          "calendar-day-active": isActive,
          "calendar-day-constrained": isCalDayConstrained,
          "calendar-day-today": isToday
        },
        part: dateParts,
        "aria-hidden": isCalendarPadding ? "true" : null,
        "aria-selected": ariaSelected,
        "aria-label": ariaLabel,
        onClick: () => {
          if (isCalendarPadding) {
            return;
          }
          this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), {
            month,
            day,
            year
          }));
          if (multiple) {
            this.setActiveParts({
              month,
              day,
              year
            }, isActive);
          } else {
            this.setActiveParts(Object.assign(Object.assign({}, activePart), {
              month,
              day,
              year
            }));
          }
        }
      }, text));
    })));
  }
  renderCalendarBody() {
    return h("div", {
      class: "calendar-body ion-focusable",
      ref: (el) => this.calendarBodyRef = el,
      tabindex: "0"
    }, generateMonths(this.workingParts, this.forceRenderDate).map(({
      month,
      year
    }) => {
      return this.renderMonth(month, year);
    }));
  }
  renderCalendar(mode) {
    return h("div", {
      class: "datetime-calendar",
      key: "datetime-calendar"
    }, this.renderCalendarHeader(mode), this.renderCalendarBody());
  }
  renderTimeLabel() {
    const hasSlottedTimeLabel = this.el.querySelector('[slot="time-label"]') !== null;
    if (!hasSlottedTimeLabel && !this.showDefaultTimeLabel) {
      return;
    }
    return h("slot", {
      name: "time-label"
    }, "Time");
  }
  renderTimeOverlay() {
    const {
      disabled,
      hourCycle,
      isTimePopoverOpen,
      locale,
      formatOptions
    } = this;
    const computedHourCycle = getHourCycle(locale, hourCycle);
    const activePart = this.getActivePartsWithFallback();
    return [h("div", {
      class: "time-header"
    }, this.renderTimeLabel()), h("button", {
      class: {
        "time-body": true,
        "time-body-active": isTimePopoverOpen
      },
      part: `time-button${isTimePopoverOpen ? " active" : ""}`,
      "aria-expanded": "false",
      "aria-haspopup": "true",
      disabled,
      onClick: (ev) => __async(this, null, function* () {
        const {
          popoverRef
        } = this;
        if (popoverRef) {
          this.isTimePopoverOpen = true;
          popoverRef.present(new CustomEvent("ionShadowTarget", {
            detail: {
              ionShadowTarget: ev.target
            }
          }));
          yield popoverRef.onWillDismiss();
          this.isTimePopoverOpen = false;
        }
      })
    }, getLocalizedTime(locale, activePart, computedHourCycle, formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time)), h("ion-popover", {
      alignment: "center",
      translucent: true,
      overlayIndex: 1,
      arrow: false,
      onWillPresent: (ev) => {
        const cols = ev.target.querySelectorAll("ion-picker-column");
        cols.forEach((col) => col.scrollActiveItemIntoView());
      },
      style: {
        "--offset-y": "-10px",
        "--min-width": "fit-content"
      },
      // Allow native browser keyboard events to support up/down/home/end key
      // navigation within the time picker.
      keyboardEvents: true,
      ref: (el) => this.popoverRef = el
    }, this.renderWheelPicker("time"))];
  }
  getHeaderSelectedDateText() {
    var _a;
    const {
      activeParts,
      formatOptions,
      multiple,
      titleSelectedDatesFormatter
    } = this;
    const isArray = Array.isArray(activeParts);
    let headerText;
    if (multiple && isArray && activeParts.length !== 1) {
      headerText = `${activeParts.length} days`;
      if (titleSelectedDatesFormatter !== void 0) {
        try {
          headerText = titleSelectedDatesFormatter(convertDataToISO(activeParts));
        } catch (e) {
          printIonError("Exception in provided `titleSelectedDatesFormatter`: ", e);
        }
      }
    } else {
      headerText = getLocalizedDateTime(this.locale, this.getActivePartsWithFallback(), (_a = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.date) !== null && _a !== void 0 ? _a : {
        weekday: "short",
        month: "short",
        day: "numeric"
      });
    }
    return headerText;
  }
  renderHeader(showExpandedHeader = true) {
    const hasSlottedTitle = this.el.querySelector('[slot="title"]') !== null;
    if (!hasSlottedTitle && !this.showDefaultTitle) {
      return;
    }
    return h("div", {
      class: "datetime-header"
    }, h("div", {
      class: "datetime-title"
    }, h("slot", {
      name: "title"
    }, "Select Date")), showExpandedHeader && h("div", {
      class: "datetime-selected-date"
    }, this.getHeaderSelectedDateText()));
  }
  /**
   * Render time picker inside of datetime.
   * Do not pass color prop to segment on
   * iOS mode. MD segment has been customized and
   * should take on the color prop, but iOS
   * should just be the default segment.
   */
  renderTime() {
    const {
      presentation
    } = this;
    const timeOnlyPresentation = presentation === "time";
    return h("div", {
      class: "datetime-time"
    }, timeOnlyPresentation ? this.renderWheelPicker() : this.renderTimeOverlay());
  }
  /**
   * Renders the month/year picker that is
   * displayed on the calendar grid.
   * The .datetime-year class has additional
   * styles that let us show/hide the
   * picker when the user clicks on the
   * toggle in the calendar header.
   */
  renderCalendarViewMonthYearPicker() {
    return h("div", {
      class: "datetime-year"
    }, this.renderWheelView("month-year"));
  }
  /**
   * Render entry point
   * All presentation types are rendered from here.
   */
  renderDatetime(mode) {
    const {
      presentation,
      preferWheel
    } = this;
    const hasWheelVariant = presentation === "date" || presentation === "date-time" || presentation === "time-date";
    if (preferWheel && hasWheelVariant) {
      return [this.renderHeader(false), this.renderWheelView(), this.renderFooter()];
    }
    switch (presentation) {
      case "date-time":
        return [this.renderHeader(), this.renderCalendar(mode), this.renderCalendarViewMonthYearPicker(), this.renderTime(), this.renderFooter()];
      case "time-date":
        return [this.renderHeader(), this.renderTime(), this.renderCalendar(mode), this.renderCalendarViewMonthYearPicker(), this.renderFooter()];
      case "time":
        return [this.renderHeader(false), this.renderTime(), this.renderFooter()];
      case "month":
      case "month-year":
      case "year":
        return [this.renderHeader(false), this.renderWheelView(), this.renderFooter()];
      default:
        return [this.renderHeader(), this.renderCalendar(mode), this.renderCalendarViewMonthYearPicker(), this.renderFooter()];
    }
  }
  render() {
    const {
      name,
      value,
      disabled,
      el,
      color,
      readonly,
      showMonthAndYear,
      preferWheel,
      presentation,
      size,
      isGridStyle
    } = this;
    const mode = getIonMode(this);
    const isMonthAndYearPresentation = presentation === "year" || presentation === "month" || presentation === "month-year";
    const shouldShowMonthAndYear = showMonthAndYear || isMonthAndYearPresentation;
    const monthYearPickerOpen = showMonthAndYear && !isMonthAndYearPresentation;
    const hasDatePresentation = presentation === "date" || presentation === "date-time" || presentation === "time-date";
    const hasWheelVariant = hasDatePresentation && preferWheel;
    renderHiddenInput(true, el, name, formatValue(value), disabled);
    return h(Host, {
      key: "08d429533a09c600b936ad1e022658051c765595",
      "aria-disabled": disabled ? "true" : null,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      class: Object.assign({}, createColorClasses(color, {
        [mode]: true,
        ["datetime-readonly"]: readonly,
        ["datetime-disabled"]: disabled,
        "show-month-and-year": shouldShowMonthAndYear,
        "month-year-picker-open": monthYearPickerOpen,
        [`datetime-presentation-${presentation}`]: true,
        [`datetime-size-${size}`]: true,
        [`datetime-prefer-wheel`]: hasWheelVariant,
        [`datetime-grid`]: isGridStyle
      }))
    }, h("div", {
      key: "f4ff0fcd1e059767a7ef14fcc76ebfd55d23a97b",
      class: "intersection-tracker",
      ref: (el2) => this.intersectionTrackerRef = el2
    }), this.renderDatetime(mode));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "formatOptions": ["formatOptionsChanged"],
      "disabled": ["disabledChanged"],
      "min": ["minChanged"],
      "max": ["maxChanged"],
      "presentation": ["presentationChanged"],
      "yearValues": ["yearValuesChanged"],
      "monthValues": ["monthValuesChanged"],
      "dayValues": ["dayValuesChanged"],
      "hourValues": ["hourValuesChanged"],
      "minuteValues": ["minuteValuesChanged"],
      "value": ["valueChanged"]
    };
  }
};
var datetimeIds = 0;
var CANCEL_ROLE = "datetime-cancel";
var CONFIRM_ROLE = "datetime-confirm";
var WHEEL_ITEM_PART = "wheel-item";
var WHEEL_ITEM_ACTIVE_PART = `active`;
Datetime.style = {
  ios: IonDatetimeIosStyle0,
  md: IonDatetimeMdStyle0
};
var iosEnterAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]);
  wrapperAnimation.addElement(baseEl.querySelector(".picker-wrapper")).fromTo("transform", "translateY(100%)", "translateY(0%)");
  return baseAnimation.addElement(baseEl).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
};
var iosLeaveAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0.01);
  wrapperAnimation.addElement(baseEl.querySelector(".picker-wrapper")).fromTo("transform", "translateY(0%)", "translateY(100%)");
  return baseAnimation.addElement(baseEl).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
};
var pickerIosCss = ".sc-ion-picker-legacy-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.sc-ion-picker-legacy-ios-h{inset-inline-start:0}.overlay-hidden.sc-ion-picker-legacy-ios-h{display:none}.picker-wrapper.sc-ion-picker-legacy-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-legacy-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-legacy-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-legacy-ios:active,.picker-button.sc-ion-picker-legacy-ios:focus{outline:none}.picker-columns.sc-ion-picker-legacy-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-legacy-ios,.picker-below-highlight.sc-ion-picker-legacy-ios{display:none;pointer-events:none}.sc-ion-picker-legacy-ios-h{--background:var(--ion-background-color, #fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-legacy-ios{display:-ms-flexbox;display:flex;height:44px;border-bottom:0.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-legacy-ios{-ms-flex:1;flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-legacy-ios:last-child .picker-button.sc-ion-picker-legacy-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-legacy-ios:first-child{font-weight:normal;text-align:start}.picker-button.sc-ion-picker-legacy-ios,.picker-button.ion-activated.sc-ion-picker-legacy-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #0054e9);font-size:16px}.picker-columns.sc-ion-picker-legacy-ios{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-above-highlight.sc-ion-picker-legacy-ios{top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:10}.picker-above-highlight.sc-ion-picker-legacy-ios{inset-inline-start:0}.picker-below-highlight.sc-ion-picker-legacy-ios{top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:11}.picker-below-highlight.sc-ion-picker-legacy-ios{inset-inline-start:0}";
var IonPickerLegacyIosStyle0 = pickerIosCss;
var pickerMdCss = ".sc-ion-picker-legacy-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.sc-ion-picker-legacy-md-h{inset-inline-start:0}.overlay-hidden.sc-ion-picker-legacy-md-h{display:none}.picker-wrapper.sc-ion-picker-legacy-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-legacy-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-legacy-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-legacy-md:active,.picker-button.sc-ion-picker-legacy-md:focus{outline:none}.picker-columns.sc-ion-picker-legacy-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-legacy-md,.picker-below-highlight.sc-ion-picker-legacy-md{display:none;pointer-events:none}.sc-ion-picker-legacy-md-h{--background:var(--ion-background-color, #fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-legacy-md{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-legacy-md,.picker-button.ion-activated.sc-ion-picker-legacy-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #0054e9);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}.picker-columns.sc-ion-picker-legacy-md{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-above-highlight.sc-ion-picker-legacy-md{top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to bottom, var(--ion-background-color, #fff) 20%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:10}.picker-above-highlight.sc-ion-picker-legacy-md{inset-inline-start:0}.picker-below-highlight.sc-ion-picker-legacy-md{top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to top, var(--ion-background-color, #fff) 30%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:11}.picker-below-highlight.sc-ion-picker-legacy-md{inset-inline-start:0}";
var IonPickerLegacyMdStyle0 = pickerMdCss;
var Picker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.didPresent = createEvent(this, "ionPickerDidPresent", 7);
    this.willPresent = createEvent(this, "ionPickerWillPresent", 7);
    this.willDismiss = createEvent(this, "ionPickerWillDismiss", 7);
    this.didDismiss = createEvent(this, "ionPickerDidDismiss", 7);
    this.didPresentShorthand = createEvent(this, "didPresent", 7);
    this.willPresentShorthand = createEvent(this, "willPresent", 7);
    this.willDismissShorthand = createEvent(this, "willDismiss", 7);
    this.didDismissShorthand = createEvent(this, "didDismiss", 7);
    this.delegateController = createDelegateController(this);
    this.lockController = createLockController();
    this.triggerController = createTriggerController();
    this.onBackdropTap = () => {
      this.dismiss(void 0, BACKDROP);
    };
    this.dispatchCancelHandler = (ev) => {
      const role = ev.detail.role;
      if (isCancel(role)) {
        const cancelButton = this.buttons.find((b) => b.role === "cancel");
        this.callButtonHandler(cancelButton);
      }
    };
    this.presented = false;
    this.overlayIndex = void 0;
    this.delegate = void 0;
    this.hasController = false;
    this.keyboardClose = true;
    this.enterAnimation = void 0;
    this.leaveAnimation = void 0;
    this.buttons = [];
    this.columns = [];
    this.cssClass = void 0;
    this.duration = 0;
    this.showBackdrop = true;
    this.backdropDismiss = true;
    this.animated = true;
    this.htmlAttributes = void 0;
    this.isOpen = false;
    this.trigger = void 0;
  }
  onIsOpenChange(newValue, oldValue) {
    if (newValue === true && oldValue === false) {
      this.present();
    } else if (newValue === false && oldValue === true) {
      this.dismiss();
    }
  }
  triggerChanged() {
    const {
      trigger,
      el,
      triggerController
    } = this;
    if (trigger) {
      triggerController.addClickListener(el, trigger);
    }
  }
  connectedCallback() {
    prepareOverlay(this.el);
    this.triggerChanged();
  }
  disconnectedCallback() {
    this.triggerController.removeClickListener();
  }
  componentWillLoad() {
    var _a;
    if (!((_a = this.htmlAttributes) === null || _a === void 0 ? void 0 : _a.id)) {
      setOverlayId(this.el);
    }
  }
  componentDidLoad() {
    printIonWarning("ion-picker-legacy and ion-picker-legacy-column have been deprecated in favor of new versions of the ion-picker and ion-picker-column components. These new components display inline with your page content allowing for more presentation flexibility than before.", this.el);
    if (this.isOpen === true) {
      raf(() => this.present());
    }
    this.triggerChanged();
  }
  /**
   * Present the picker overlay after it has been created.
   */
  present() {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      yield this.delegateController.attachViewToDom();
      yield present(this, "pickerEnter", iosEnterAnimation, iosEnterAnimation, void 0);
      if (this.duration > 0) {
        this.durationTimeout = setTimeout(() => this.dismiss(), this.duration);
      }
      unlock();
    });
  }
  /**
   * Dismiss the picker overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the picker.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the picker.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  dismiss(data, role) {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      if (this.durationTimeout) {
        clearTimeout(this.durationTimeout);
      }
      const dismissed = yield dismiss(this, data, role, "pickerLeave", iosLeaveAnimation, iosLeaveAnimation);
      if (dismissed) {
        this.delegateController.removeViewFromDom();
      }
      unlock();
      return dismissed;
    });
  }
  /**
   * Returns a promise that resolves when the picker did dismiss.
   */
  onDidDismiss() {
    return eventMethod(this.el, "ionPickerDidDismiss");
  }
  /**
   * Returns a promise that resolves when the picker will dismiss.
   */
  onWillDismiss() {
    return eventMethod(this.el, "ionPickerWillDismiss");
  }
  /**
   * Get the column that matches the specified name.
   *
   * @param name The name of the column.
   */
  getColumn(name) {
    return Promise.resolve(this.columns.find((column) => column.name === name));
  }
  buttonClick(button) {
    return __async(this, null, function* () {
      const role = button.role;
      if (isCancel(role)) {
        return this.dismiss(void 0, role);
      }
      const shouldDismiss = yield this.callButtonHandler(button);
      if (shouldDismiss) {
        return this.dismiss(this.getSelected(), button.role);
      }
      return Promise.resolve();
    });
  }
  callButtonHandler(button) {
    return __async(this, null, function* () {
      if (button) {
        const rtn = yield safeCall(button.handler, this.getSelected());
        if (rtn === false) {
          return false;
        }
      }
      return true;
    });
  }
  getSelected() {
    const selected = {};
    this.columns.forEach((col, index) => {
      const selectedColumn = col.selectedIndex !== void 0 ? col.options[col.selectedIndex] : void 0;
      selected[col.name] = {
        text: selectedColumn ? selectedColumn.text : void 0,
        value: selectedColumn ? selectedColumn.value : void 0,
        columnIndex: index
      };
    });
    return selected;
  }
  render() {
    const {
      htmlAttributes
    } = this;
    const mode = getIonMode(this);
    return h(Host, Object.assign({
      key: "dc03f252e3b59a94bc7132c953d2d3b36b62237e",
      "aria-modal": "true",
      tabindex: "-1"
    }, htmlAttributes, {
      style: {
        zIndex: `${2e4 + this.overlayIndex}`
      },
      class: Object.assign({
        [mode]: true,
        // Used internally for styling
        [`picker-${mode}`]: true,
        "overlay-hidden": true
      }, getClassMap(this.cssClass)),
      onIonBackdropTap: this.onBackdropTap,
      onIonPickerWillDismiss: this.dispatchCancelHandler
    }), h("ion-backdrop", {
      key: "bdabe9c82c41f96da5dafb1a0aa0854fa7e7ec93",
      visible: this.showBackdrop,
      tappable: this.backdropDismiss
    }), h("div", {
      key: "1380e0c8989153b425674753764f12f253f4a738",
      tabindex: "0",
      "aria-hidden": "true"
    }), h("div", {
      key: "edec769bbc0993d003852d0bf1123e6e2332ebbe",
      class: "picker-wrapper ion-overlay-wrapper",
      role: "dialog"
    }, h("div", {
      key: "b82c67ff47aa9412a6ff8f3b2e6230b855e92c51",
      class: "picker-toolbar"
    }, this.buttons.map((b) => h("div", {
      class: buttonWrapperClass(b)
    }, h("button", {
      type: "button",
      onClick: () => this.buttonClick(b),
      class: buttonClass(b)
    }, b.text)))), h("div", {
      key: "76485b643387f36b6b3d5f85e4d072fa18e68552",
      class: "picker-columns"
    }, h("div", {
      key: "99268217263feb5285db1b1acd48fd0e4d5f0e7b",
      class: "picker-above-highlight"
    }), this.presented && this.columns.map((c) => h("ion-picker-legacy-column", {
      col: c
    })), h("div", {
      key: "2dd7e488bc4e9695094f0758567e626e0bb5979d",
      class: "picker-below-highlight"
    }))), h("div", {
      key: "8b2f3ae798a4ddcdd4e2716ebba1de797e446ac4",
      tabindex: "0",
      "aria-hidden": "true"
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "isOpen": ["onIsOpenChange"],
      "trigger": ["triggerChanged"]
    };
  }
};
var buttonWrapperClass = (button) => {
  return {
    [`picker-toolbar-${button.role}`]: button.role !== void 0,
    "picker-toolbar-button": true
  };
};
var buttonClass = (button) => {
  return Object.assign({
    "picker-button": true,
    "ion-activatable": true
  }, getClassMap(button.cssClass));
};
Picker.style = {
  ios: IonPickerLegacyIosStyle0,
  md: IonPickerLegacyMdStyle0
};
var pickerColumnIosCss = ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}.picker-opt{inset-inline-start:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px;pointer-events:none}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:20px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}:host-context([dir=rtl]) .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){.picker-opt:dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}";
var IonPickerLegacyColumnIosStyle0 = pickerColumnIosCss;
var pickerColumnMdCss = ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}.picker-opt{inset-inline-start:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-prefix,.picker-suffix,.picker-opt.picker-opt-selected{color:var(--ion-color-primary, #0054e9)}";
var IonPickerLegacyColumnMdStyle0 = pickerColumnMdCss;
var PickerColumnCmp = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionPickerColChange = createEvent(this, "ionPickerColChange", 7);
    this.optHeight = 0;
    this.rotateFactor = 0;
    this.scaleFactor = 1;
    this.velocity = 0;
    this.y = 0;
    this.noAnimate = true;
    this.colDidChange = false;
    this.col = void 0;
  }
  colChanged() {
    this.colDidChange = true;
  }
  connectedCallback() {
    return __async(this, null, function* () {
      let pickerRotateFactor = 0;
      let pickerScaleFactor = 0.81;
      const mode = getIonMode(this);
      if (mode === "ios") {
        pickerRotateFactor = -0.46;
        pickerScaleFactor = 1;
      }
      this.rotateFactor = pickerRotateFactor;
      this.scaleFactor = pickerScaleFactor;
      this.gesture = (yield import("./index-39782642-6UBMS4CD.js")).createGesture({
        el: this.el,
        gestureName: "picker-swipe",
        gesturePriority: 100,
        threshold: 0,
        passive: false,
        onStart: (ev) => this.onStart(ev),
        onMove: (ev) => this.onMove(ev),
        onEnd: (ev) => this.onEnd(ev)
      });
      this.gesture.enable();
      this.tmrId = setTimeout(() => {
        this.noAnimate = false;
        this.refresh(true);
      }, 250);
    });
  }
  componentDidLoad() {
    this.onDomChange();
  }
  componentDidUpdate() {
    if (this.colDidChange) {
      this.onDomChange(true, false);
      this.colDidChange = false;
    }
  }
  disconnectedCallback() {
    if (this.rafId !== void 0) cancelAnimationFrame(this.rafId);
    if (this.tmrId) clearTimeout(this.tmrId);
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
  }
  emitColChange() {
    this.ionPickerColChange.emit(this.col);
  }
  setSelected(selectedIndex, duration) {
    const y = selectedIndex > -1 ? -(selectedIndex * this.optHeight) : 0;
    this.velocity = 0;
    if (this.rafId !== void 0) cancelAnimationFrame(this.rafId);
    this.update(y, duration, true);
    this.emitColChange();
  }
  update(y, duration, saveY) {
    if (!this.optsEl) {
      return;
    }
    let translateY = 0;
    let translateZ = 0;
    const {
      col,
      rotateFactor
    } = this;
    const prevSelected = col.selectedIndex;
    const selectedIndex = col.selectedIndex = this.indexForY(-y);
    const durationStr = duration === 0 ? "" : duration + "ms";
    const scaleStr = `scale(${this.scaleFactor})`;
    const children = this.optsEl.children;
    for (let i = 0; i < children.length; i++) {
      const button = children[i];
      const opt = col.options[i];
      const optOffset = i * this.optHeight + y;
      let transform = "";
      if (rotateFactor !== 0) {
        const rotateX = optOffset * rotateFactor;
        if (Math.abs(rotateX) <= 90) {
          translateY = 0;
          translateZ = 90;
          transform = `rotateX(${rotateX}deg) `;
        } else {
          translateY = -9999;
        }
      } else {
        translateZ = 0;
        translateY = optOffset;
      }
      const selected = selectedIndex === i;
      transform += `translate3d(0px,${translateY}px,${translateZ}px) `;
      if (this.scaleFactor !== 1 && !selected) {
        transform += scaleStr;
      }
      if (this.noAnimate) {
        opt.duration = 0;
        button.style.transitionDuration = "";
      } else if (duration !== opt.duration) {
        opt.duration = duration;
        button.style.transitionDuration = durationStr;
      }
      if (transform !== opt.transform) {
        opt.transform = transform;
      }
      button.style.transform = transform;
      opt.selected = selected;
      if (selected) {
        button.classList.add(PICKER_OPT_SELECTED);
      } else {
        button.classList.remove(PICKER_OPT_SELECTED);
      }
    }
    this.col.prevSelected = prevSelected;
    if (saveY) {
      this.y = y;
    }
    if (this.lastIndex !== selectedIndex) {
      hapticSelectionChanged();
      this.lastIndex = selectedIndex;
    }
  }
  decelerate() {
    if (this.velocity !== 0) {
      this.velocity *= DECELERATION_FRICTION;
      this.velocity = this.velocity > 0 ? Math.max(this.velocity, 1) : Math.min(this.velocity, -1);
      let y = this.y + this.velocity;
      if (y > this.minY) {
        y = this.minY;
        this.velocity = 0;
      } else if (y < this.maxY) {
        y = this.maxY;
        this.velocity = 0;
      }
      this.update(y, 0, true);
      const notLockedIn = Math.round(y) % this.optHeight !== 0 || Math.abs(this.velocity) > 1;
      if (notLockedIn) {
        this.rafId = requestAnimationFrame(() => this.decelerate());
      } else {
        this.velocity = 0;
        this.emitColChange();
        hapticSelectionEnd();
      }
    } else if (this.y % this.optHeight !== 0) {
      const currentPos = Math.abs(this.y % this.optHeight);
      this.velocity = currentPos > this.optHeight / 2 ? 1 : -1;
      this.decelerate();
    }
  }
  indexForY(y) {
    return Math.min(Math.max(Math.abs(Math.round(y / this.optHeight)), 0), this.col.options.length - 1);
  }
  onStart(detail) {
    if (detail.event.cancelable) {
      detail.event.preventDefault();
    }
    detail.event.stopPropagation();
    hapticSelectionStart();
    if (this.rafId !== void 0) cancelAnimationFrame(this.rafId);
    const options = this.col.options;
    let minY = options.length - 1;
    let maxY = 0;
    for (let i = 0; i < options.length; i++) {
      if (!options[i].disabled) {
        minY = Math.min(minY, i);
        maxY = Math.max(maxY, i);
      }
    }
    this.minY = -(minY * this.optHeight);
    this.maxY = -(maxY * this.optHeight);
  }
  onMove(detail) {
    if (detail.event.cancelable) {
      detail.event.preventDefault();
    }
    detail.event.stopPropagation();
    let y = this.y + detail.deltaY;
    if (y > this.minY) {
      y = Math.pow(y, 0.8);
      this.bounceFrom = y;
    } else if (y < this.maxY) {
      y += Math.pow(this.maxY - y, 0.9);
      this.bounceFrom = y;
    } else {
      this.bounceFrom = 0;
    }
    this.update(y, 0, false);
  }
  onEnd(detail) {
    if (this.bounceFrom > 0) {
      this.update(this.minY, 100, true);
      this.emitColChange();
      return;
    } else if (this.bounceFrom < 0) {
      this.update(this.maxY, 100, true);
      this.emitColChange();
      return;
    }
    this.velocity = clamp(-MAX_PICKER_SPEED, detail.velocityY * 23, MAX_PICKER_SPEED);
    if (this.velocity === 0 && detail.deltaY === 0) {
      const opt = detail.event.target.closest(".picker-opt");
      if (opt === null || opt === void 0 ? void 0 : opt.hasAttribute("opt-index")) {
        this.setSelected(parseInt(opt.getAttribute("opt-index"), 10), TRANSITION_DURATION);
      }
    } else {
      this.y += detail.deltaY;
      if (Math.abs(detail.velocityY) < 0.05) {
        const isScrollingUp = detail.deltaY > 0;
        const optHeightFraction = Math.abs(this.y) % this.optHeight / this.optHeight;
        if (isScrollingUp && optHeightFraction > 0.5) {
          this.velocity = Math.abs(this.velocity) * -1;
        } else if (!isScrollingUp && optHeightFraction <= 0.5) {
          this.velocity = Math.abs(this.velocity);
        }
      }
      this.decelerate();
    }
  }
  refresh(forceRefresh, animated) {
    var _a;
    let min = this.col.options.length - 1;
    let max = 0;
    const options = this.col.options;
    for (let i = 0; i < options.length; i++) {
      if (!options[i].disabled) {
        min = Math.min(min, i);
        max = Math.max(max, i);
      }
    }
    if (this.velocity !== 0) {
      return;
    }
    const selectedIndex = clamp(min, (_a = this.col.selectedIndex) !== null && _a !== void 0 ? _a : 0, max);
    if (this.col.prevSelected !== selectedIndex || forceRefresh) {
      const y = selectedIndex * this.optHeight * -1;
      const duration = animated ? TRANSITION_DURATION : 0;
      this.velocity = 0;
      this.update(y, duration, true);
    }
  }
  onDomChange(forceRefresh, animated) {
    const colEl = this.optsEl;
    if (colEl) {
      this.optHeight = colEl.firstElementChild ? colEl.firstElementChild.clientHeight : 0;
    }
    this.refresh(forceRefresh, animated);
  }
  render() {
    const col = this.col;
    const mode = getIonMode(this);
    return h(Host, {
      key: "88a3c9397c9ac92dd814074c8ae6ecf8e3420a2c",
      class: Object.assign({
        [mode]: true,
        "picker-col": true,
        "picker-opts-left": this.col.align === "left",
        "picker-opts-right": this.col.align === "right"
      }, getClassMap(col.cssClass)),
      style: {
        "max-width": this.col.columnWidth
      }
    }, col.prefix && h("div", {
      key: "4491a705d15337e6f45f3cf6fd21af5242474729",
      class: "picker-prefix",
      style: {
        width: col.prefixWidth
      }
    }, col.prefix), h("div", {
      key: "b0dd4b7a7a4c1edc4b73e7fb134ac85264072365",
      class: "picker-opts",
      style: {
        maxWidth: col.optionsWidth
      },
      ref: (el) => this.optsEl = el
    }, col.options.map((o, index) => h("button", {
      "aria-label": o.ariaLabel,
      class: {
        "picker-opt": true,
        "picker-opt-disabled": !!o.disabled
      },
      "opt-index": index
    }, o.text))), col.suffix && h("div", {
      key: "c16419ce6481d60fc3ba6b8d102a4edf0ede02aa",
      class: "picker-suffix",
      style: {
        width: col.suffixWidth
      }
    }, col.suffix));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "col": ["colChanged"]
    };
  }
};
var PICKER_OPT_SELECTED = "picker-opt-selected";
var DECELERATION_FRICTION = 0.97;
var MAX_PICKER_SPEED = 90;
var TRANSITION_DURATION = 150;
PickerColumnCmp.style = {
  ios: IonPickerLegacyColumnIosStyle0,
  md: IonPickerLegacyColumnMdStyle0
};
export {
  Datetime as ion_datetime,
  Picker as ion_picker_legacy,
  PickerColumnCmp as ion_picker_legacy_column
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-datetime_3.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tZGF0ZXRpbWVfMy5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCB3IGFzIHdyaXRlVGFzaywgaCwgZSBhcyBIb3N0LCBmIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LTUyN2I5ZTM0LmpzJztcbmltcG9ydCB7IHN0YXJ0Rm9jdXNWaXNpYmxlIH0gZnJvbSAnLi9mb2N1cy12aXNpYmxlLWRkNDBkNjlmLmpzJztcbmltcG9ydCB7IHIgYXMgcmFmLCBkIGFzIHJlbmRlckhpZGRlbklucHV0LCBnIGFzIGdldEVsZW1lbnRSb290LCBqIGFzIGNsYW1wIH0gZnJvbSAnLi9oZWxwZXJzLTc4ZWZlZWMzLmpzJztcbmltcG9ydCB7IGEgYXMgcHJpbnRJb25FcnJvciwgcCBhcyBwcmludElvbldhcm5pbmcgfSBmcm9tICcuL2luZGV4LTczOGQ3NTA0LmpzJztcbmltcG9ydCB7IGkgYXMgaXNSVEwgfSBmcm9tICcuL2Rpci1iYWJlYWJlYi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcywgZyBhcyBnZXRDbGFzc01hcCB9IGZyb20gJy4vdGhlbWUtMDFmM2YyOWMuanMnO1xuaW1wb3J0IHsgYyBhcyBjaGV2cm9uQmFjaywgbyBhcyBjaGV2cm9uRm9yd2FyZCwgbCBhcyBjaGV2cm9uRG93biwgcCBhcyBjYXJldFVwU2hhcnAsIHEgYXMgY2FyZXREb3duU2hhcnAgfSBmcm9tICcuL2luZGV4LWUyY2YyY2ViLmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLWNhODZjZjMyLmpzJztcbmltcG9ydCB7IGcgYXMgZ2VuZXJhdGVEYXlBcmlhTGFiZWwsIGEgYXMgZ2V0RGF5LCBpIGFzIGlzQmVmb3JlLCBiIGFzIGlzQWZ0ZXIsIGMgYXMgaXNTYW1lRGF5LCBkIGFzIGdldFByZXZpb3VzTW9udGgsIGUgYXMgZ2V0TmV4dE1vbnRoLCB2IGFzIHZhbGlkYXRlUGFydHMsIGYgYXMgZ2V0UGFydHNGcm9tQ2FsZW5kYXJEYXksIGggYXMgZ2V0TmV4dFllYXIsIGogYXMgZ2V0UHJldmlvdXNZZWFyLCBrIGFzIGdldEVuZE9mV2VlaywgbCBhcyBnZXRTdGFydE9mV2VlaywgbSBhcyBnZXRQcmV2aW91c0RheSwgbiBhcyBnZXROZXh0RGF5LCBvIGFzIGdldFByZXZpb3VzV2VlaywgcCBhcyBnZXROZXh0V2VlaywgcSBhcyBwYXJzZU1pblBhcnRzLCByIGFzIHBhcnNlTWF4UGFydHMsIHMgYXMgcGFyc2VEYXRlLCB3IGFzIHdhcm5JZlZhbHVlT3V0T2ZCb3VuZHMsIHQgYXMgY29udmVydFRvQXJyYXlPZk51bWJlcnMsIHUgYXMgY29udmVydERhdGFUb0lTTywgeCBhcyBnZXRUb2RheSwgeSBhcyBnZXRDbG9zZXN0VmFsaWREYXRlLCB6IGFzIGdlbmVyYXRlTW9udGhzLCBBIGFzIGdldE51bURheXNJbk1vbnRoLCBCIGFzIGdldENvbWJpbmVkRGF0ZUNvbHVtbkRhdGEsIEMgYXMgZ2V0TW9udGhDb2x1bW5EYXRhLCBEIGFzIGdldERheUNvbHVtbkRhdGEsIEUgYXMgZ2V0WWVhckNvbHVtbkRhdGEsIEYgYXMgaXNNb250aEZpcnN0TG9jYWxlLCBHIGFzIGdldFRpbWVDb2x1bW5zRGF0YSwgSCBhcyBpc0xvY2FsZURheVBlcmlvZFJUTCwgSSBhcyBnZXREYXlzT2ZXZWVrLCBKIGFzIGdldE1vbnRoQW5kWWVhciwgSyBhcyBnZXREYXlzT2ZNb250aCwgTCBhcyBnZXRIb3VyQ3ljbGUsIE0gYXMgZ2V0TG9jYWxpemVkVGltZSwgTiBhcyBnZXRMb2NhbGl6ZWREYXRlVGltZSwgTyBhcyBmb3JtYXRWYWx1ZSwgUCBhcyBjbGFtcERhdGUsIFEgYXMgcGFyc2VBbVBtLCBSIGFzIGNhbGN1bGF0ZUhvdXJGcm9tQU1QTSB9IGZyb20gJy4vZGF0YS0xNzRhZDVlMC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUxvY2tDb250cm9sbGVyIH0gZnJvbSAnLi9sb2NrLWNvbnRyb2xsZXItMzE2OTI4YmUuanMnO1xuaW1wb3J0IHsgZCBhcyBjcmVhdGVEZWxlZ2F0ZUNvbnRyb2xsZXIsIGUgYXMgY3JlYXRlVHJpZ2dlckNvbnRyb2xsZXIsIEIgYXMgQkFDS0RST1AsIGkgYXMgaXNDYW5jZWwsIGogYXMgcHJlcGFyZU92ZXJsYXksIGsgYXMgc2V0T3ZlcmxheUlkLCBmIGFzIHByZXNlbnQsIGcgYXMgZGlzbWlzcywgaCBhcyBldmVudE1ldGhvZCwgcyBhcyBzYWZlQ2FsbCB9IGZyb20gJy4vb3ZlcmxheXMtNDFhNWQ1MWIuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi1lYWI1YTRjYS5qcyc7XG5pbXBvcnQgeyBiIGFzIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQsIGggYXMgaGFwdGljU2VsZWN0aW9uRW5kLCBhIGFzIGhhcHRpY1NlbGVjdGlvblN0YXJ0IH0gZnJvbSAnLi9oYXB0aWMtYWMxNjRlNGMuanMnO1xuaW1wb3J0ICcuL2luZGV4LWE1ZDUwZGFmLmpzJztcbmltcG9ydCAnLi9oYXJkd2FyZS1iYWNrLWJ1dHRvbi04NjQxMDFhMy5qcyc7XG5pbXBvcnQgJy4vZnJhbWV3b3JrLWRlbGVnYXRlLTJlZWExNzYzLmpzJztcbmltcG9ydCAnLi9nZXN0dXJlLWNvbnRyb2xsZXItMzE0YTU0ZjYuanMnO1xuaW1wb3J0ICcuL2NhcGFjaXRvci01OTM5NWNiZC5qcyc7XG5jb25zdCBpc1llYXJEaXNhYmxlZCA9IChyZWZZZWFyLCBtaW5QYXJ0cywgbWF4UGFydHMpID0+IHtcbiAgaWYgKG1pblBhcnRzICYmIG1pblBhcnRzLnllYXIgPiByZWZZZWFyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKG1heFBhcnRzICYmIG1heFBhcnRzLnllYXIgPCByZWZZZWFyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgZ2l2ZW4gZGF5IHNob3VsZFxuICogbm90IGJlIGludGVyYWN0aXZlIGFjY29yZGluZyB0byBpdHMgdmFsdWUsXG4gKiBvciB0aGUgbWF4L21pbiBkYXRlcy5cbiAqL1xuY29uc3QgaXNEYXlEaXNhYmxlZCA9IChyZWZQYXJ0cywgbWluUGFydHMsIG1heFBhcnRzLCBkYXlWYWx1ZXMpID0+IHtcbiAgLyoqXG4gICAqIElmIHRoaXMgaXMgYSBmaWxsZXIgZGF0ZSAoaS5lLiBwYWRkaW5nKVxuICAgKiB0aGVuIHRoZSBkYXRlIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgaWYgKHJlZlBhcnRzLmRheSA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBJZiB1c2VyIHBhc3NlZCBpbiBhIGxpc3Qgb2YgYWNjZXB0YWJsZSBkYXkgdmFsdWVzXG4gICAqIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBkYXRlIHdlIGFyZSBsb29raW5nXG4gICAqIGF0IGlzIGluIHRoaXMgYXJyYXkuXG4gICAqL1xuICBpZiAoZGF5VmFsdWVzICE9PSB1bmRlZmluZWQgJiYgIWRheVZhbHVlcy5pbmNsdWRlcyhyZWZQYXJ0cy5kYXkpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIEdpdmVuIGEgbWluIGRhdGUsIHBlcmZvcm0gdGhlIGZvbGxvd2luZ1xuICAgKiBjaGVja3MuIElmIGFueSBvZiB0aGVtIGFyZSB0cnVlLCB0aGVuIHRoZVxuICAgKiBkYXkgc2hvdWxkIGJlIGRpc2FibGVkOlxuICAgKiAxLiBJcyB0aGUgY3VycmVudCB5ZWFyIDwgdGhlIG1pbiBhbGxvd2VkIHllYXI/XG4gICAqIDIuIElzIHRoZSBjdXJyZW50IHllYXIgPT09IG1pbiBhbGxvd2VkIHllYXIsXG4gICAqIGJ1dCB0aGUgY3VycmVudCBtb250aCA8IHRoZSBtaW4gYWxsb3dlZCBtb250aD9cbiAgICogMy4gSXMgdGhlIGN1cnJlbnQgeWVhciA9PT0gbWluIGFsbG93ZWQgeWVhciwgdGhlXG4gICAqIGN1cnJlbnQgbW9udGggPT09IG1pbiBhbGxvdyBtb250aCwgYnV0IHRoZSBjdXJyZW50XG4gICAqIGRheSA8IHRoZSBtaW4gYWxsb3dlZCBkYXk/XG4gICAqL1xuICBpZiAobWluUGFydHMgJiYgaXNCZWZvcmUocmVmUGFydHMsIG1pblBhcnRzKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBHaXZlbiBhIG1heCBkYXRlLCBwZXJmb3JtIHRoZSBmb2xsb3dpbmdcbiAgICogY2hlY2tzLiBJZiBhbnkgb2YgdGhlbSBhcmUgdHJ1ZSwgdGhlbiB0aGVcbiAgICogZGF5IHNob3VsZCBiZSBkaXNhYmxlZDpcbiAgICogMS4gSXMgdGhlIGN1cnJlbnQgeWVhciA+IHRoZSBtYXggYWxsb3dlZCB5ZWFyP1xuICAgKiAyLiBJcyB0aGUgY3VycmVudCB5ZWFyID09PSBtYXggYWxsb3dlZCB5ZWFyLFxuICAgKiBidXQgdGhlIGN1cnJlbnQgbW9udGggPiB0aGUgbWF4IGFsbG93ZWQgbW9udGg/XG4gICAqIDMuIElzIHRoZSBjdXJyZW50IHllYXIgPT09IG1heCBhbGxvd2VkIHllYXIsIHRoZVxuICAgKiBjdXJyZW50IG1vbnRoID09PSBtYXggYWxsb3cgbW9udGgsIGJ1dCB0aGUgY3VycmVudFxuICAgKiBkYXkgPiB0aGUgbWF4IGFsbG93ZWQgZGF5P1xuICAgKi9cbiAgaWYgKG1heFBhcnRzICYmIGlzQWZ0ZXIocmVmUGFydHMsIG1heFBhcnRzKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBJZiBub25lIG9mIHRoZXNlIGNoZWNrc1xuICAgKiBwYXNzZWQgdGhlbiB0aGUgZGF0ZSBzaG91bGRcbiAgICogYmUgaW50ZXJhY3RpdmUuXG4gICAqL1xuICByZXR1cm4gZmFsc2U7XG59O1xuLyoqXG4gKiBHaXZlbiBhIGxvY2FsZSwgYSBkYXRlLCB0aGUgc2VsZWN0ZWQgZGF0ZShzKSwgYW5kIHRvZGF5J3MgZGF0ZSxcbiAqIGdlbmVyYXRlIHRoZSBzdGF0ZSBmb3IgYSBnaXZlbiBjYWxlbmRhciBkYXkgYnV0dG9uLlxuICovXG5jb25zdCBnZXRDYWxlbmRhckRheVN0YXRlID0gKGxvY2FsZSwgcmVmUGFydHMsIGFjdGl2ZVBhcnRzLCB0b2RheVBhcnRzLCBtaW5QYXJ0cywgbWF4UGFydHMsIGRheVZhbHVlcykgPT4ge1xuICAvKipcbiAgICogYWN0aXZlUGFydHMgc2lnbmFscyB3aGF0IGRheShzKSBhcmUgY3VycmVudGx5IHNlbGVjdGVkIGluIHRoZSBkYXRldGltZS5cbiAgICogSWYgbXVsdGlwbGU9XCJ0cnVlXCIsIHRoaXMgd2lsbCBiZSBhbiBhcnJheSwgYnV0IHRoZSBsb2dpYyBpbiB0aGlzIHV0aWxcbiAgICogaXMgdGhlIHNhbWUgd2hldGhlciB3ZSBoYXZlIG9uZSBzZWxlY3RlZCBkYXkgb3IgbWFueSBiZWNhdXNlIHdlJ3JlIG9ubHlcbiAgICogY2FsY3VsYXRpbmcgdGhlIHN0YXRlIGZvciBvbmUgYnV0dG9uLiBTbywgd2UgdHJlYXQgYSBzaW5nbGUgYWN0aXZlUGFydHMgdmFsdWVcbiAgICogdGhlIHNhbWUgYXMgYW4gYXJyYXkgb2YgbGVuZ3RoIG9uZS5cbiAgICovXG4gIGNvbnN0IGFjdGl2ZVBhcnRzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjdGl2ZVBhcnRzKSA/IGFjdGl2ZVBhcnRzIDogW2FjdGl2ZVBhcnRzXTtcbiAgLyoqXG4gICAqIFRoZSBkYXkgYnV0dG9uIGlzIGFjdGl2ZSBpZiBpdCBpcyBzZWxlY3RlZCwgb3IgaW4gb3RoZXIgd29yZHMsIGlmIHJlZlBhcnRzXG4gICAqIG1hdGNoZXMgYXQgbGVhc3Qgb25lIHNlbGVjdGVkIGRhdGUuXG4gICAqL1xuICBjb25zdCBpc0FjdGl2ZSA9IGFjdGl2ZVBhcnRzQXJyYXkuZmluZChwYXJ0cyA9PiBpc1NhbWVEYXkocmVmUGFydHMsIHBhcnRzKSkgIT09IHVuZGVmaW5lZDtcbiAgY29uc3QgaXNUb2RheSA9IGlzU2FtZURheShyZWZQYXJ0cywgdG9kYXlQYXJ0cyk7XG4gIGNvbnN0IGRpc2FibGVkID0gaXNEYXlEaXNhYmxlZChyZWZQYXJ0cywgbWluUGFydHMsIG1heFBhcnRzLCBkYXlWYWx1ZXMpO1xuICAvKipcbiAgICogTm90ZSB0aGF0IHdlIGFsd2F5cyByZXR1cm4gb25lIG9iamVjdCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgYWN0aXZlUGFydHNcbiAgICogd2FzIGFuIGFycmF5LCBzaW5jZSB3ZSBwYXJlIGRvd24gdG8gb25lIHZhbHVlIGZvciBpc0FjdGl2ZS5cbiAgICovXG4gIHJldHVybiB7XG4gICAgZGlzYWJsZWQsXG4gICAgaXNBY3RpdmUsXG4gICAgaXNUb2RheSxcbiAgICBhcmlhU2VsZWN0ZWQ6IGlzQWN0aXZlID8gJ3RydWUnIDogbnVsbCxcbiAgICBhcmlhTGFiZWw6IGdlbmVyYXRlRGF5QXJpYUxhYmVsKGxvY2FsZSwgaXNUb2RheSwgcmVmUGFydHMpLFxuICAgIHRleHQ6IHJlZlBhcnRzLmRheSAhPSBudWxsID8gZ2V0RGF5KGxvY2FsZSwgcmVmUGFydHMpIDogbnVsbFxuICB9O1xufTtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG1vbnRoIGlzIGRpc2FibGVkIGdpdmVuIHRoZVxuICogY3VycmVudCBkYXRlIHZhbHVlIGFuZCBtaW4vbWF4IGRhdGUgY29uc3RyYWludHMuXG4gKi9cbmNvbnN0IGlzTW9udGhEaXNhYmxlZCA9IChyZWZQYXJ0cywge1xuICBtaW5QYXJ0cyxcbiAgbWF4UGFydHNcbn0pID0+IHtcbiAgLy8gSWYgdGhlIHllYXIgaXMgZGlzYWJsZWQgdGhlbiB0aGUgbW9udGggaXMgZGlzYWJsZWQuXG4gIGlmIChpc1llYXJEaXNhYmxlZChyZWZQYXJ0cy55ZWFyLCBtaW5QYXJ0cywgbWF4UGFydHMpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy8gSWYgdGhlIGRhdGUgdmFsdWUgaXMgYmVmb3JlIHRoZSBtaW4gZGF0ZSwgdGhlbiB0aGUgbW9udGggaXMgZGlzYWJsZWQuXG4gIC8vIElmIHRoZSBkYXRlIHZhbHVlIGlzIGFmdGVyIHRoZSBtYXggZGF0ZSwgdGhlbiB0aGUgbW9udGggaXMgZGlzYWJsZWQuXG4gIGlmIChtaW5QYXJ0cyAmJiBpc0JlZm9yZShyZWZQYXJ0cywgbWluUGFydHMpIHx8IG1heFBhcnRzICYmIGlzQWZ0ZXIocmVmUGFydHMsIG1heFBhcnRzKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG4vKipcbiAqIEdpdmVuIGEgd29ya2luZyBkYXRlLCBhbiBvcHRpb25hbCBtaW5pbXVtIGRhdGUgcmFuZ2UsXG4gKiBhbmQgYW4gb3B0aW9uYWwgbWF4aW11bSBkYXRlIHJhbmdlOyBkZXRlcm1pbmUgaWYgdGhlXG4gKiBwcmV2aW91cyBuYXZpZ2F0aW9uIGJ1dHRvbiBpcyBkaXNhYmxlZC5cbiAqL1xuY29uc3QgaXNQcmV2TW9udGhEaXNhYmxlZCA9IChyZWZQYXJ0cywgbWluUGFydHMsIG1heFBhcnRzKSA9PiB7XG4gIGNvbnN0IHByZXZNb250aCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZ2V0UHJldmlvdXNNb250aChyZWZQYXJ0cykpLCB7XG4gICAgZGF5OiBudWxsXG4gIH0pO1xuICByZXR1cm4gaXNNb250aERpc2FibGVkKHByZXZNb250aCwge1xuICAgIG1pblBhcnRzLFxuICAgIG1heFBhcnRzXG4gIH0pO1xufTtcbi8qKlxuICogR2l2ZW4gYSB3b3JraW5nIGRhdGUgYW5kIGEgbWF4aW11bSBkYXRlIHJhbmdlLFxuICogZGV0ZXJtaW5lIGlmIHRoZSBuZXh0IG5hdmlnYXRpb24gYnV0dG9uIGlzIGRpc2FibGVkLlxuICovXG5jb25zdCBpc05leHRNb250aERpc2FibGVkID0gKHJlZlBhcnRzLCBtYXhQYXJ0cykgPT4ge1xuICBjb25zdCBuZXh0TW9udGggPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdldE5leHRNb250aChyZWZQYXJ0cykpLCB7XG4gICAgZGF5OiBudWxsXG4gIH0pO1xuICByZXR1cm4gaXNNb250aERpc2FibGVkKG5leHRNb250aCwge1xuICAgIG1heFBhcnRzXG4gIH0pO1xufTtcbi8qKlxuICogR2l2ZW4gdGhlIHZhbHVlIG9mIHRoZSBoaWdobGlnaHRlZERhdGVzIHByb3BlcnR5XG4gKiBhbmQgYW4gSVNPIHN0cmluZywgcmV0dXJuIHRoZSBzdHlsZXMgdG8gdXNlIGZvclxuICogdGhhdCBkYXRlLCBvciB1bmRlZmluZWQgaWYgbm9uZSBhcmUgZm91bmQuXG4gKi9cbmNvbnN0IGdldEhpZ2hsaWdodFN0eWxlcyA9IChoaWdobGlnaHRlZERhdGVzLCBkYXRlSXNvU3RyaW5nLCBlbCkgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShoaWdobGlnaHRlZERhdGVzKSkge1xuICAgIGNvbnN0IGRhdGVTdHJpbmdXaXRob3V0VGltZSA9IGRhdGVJc29TdHJpbmcuc3BsaXQoJ1QnKVswXTtcbiAgICBjb25zdCBtYXRjaGluZ0hpZ2hsaWdodCA9IGhpZ2hsaWdodGVkRGF0ZXMuZmluZChoZCA9PiBoZC5kYXRlID09PSBkYXRlU3RyaW5nV2l0aG91dFRpbWUpO1xuICAgIGlmIChtYXRjaGluZ0hpZ2hsaWdodCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dENvbG9yOiBtYXRjaGluZ0hpZ2hsaWdodC50ZXh0Q29sb3IsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbWF0Y2hpbmdIaWdobGlnaHQuYmFja2dyb3VuZENvbG9yXG4gICAgICB9O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvKipcbiAgICAgKiBXcmFwIGluIGEgdHJ5LWNhdGNoIHRvIHByZXZlbnQgZXhjZXB0aW9ucyBpbiB0aGUgdXNlcidzIGZ1bmN0aW9uXG4gICAgICogZnJvbSBpbnRlcnJ1cHRpbmcgdGhlIGNhbGVuZGFyJ3MgcmVuZGVyaW5nLlxuICAgICAqL1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gaGlnaGxpZ2h0ZWREYXRlcyhkYXRlSXNvU3RyaW5nKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBwcmludElvbkVycm9yKCdFeGNlcHRpb24gdGhyb3duIGZyb20gcHJvdmlkZWQgYGhpZ2hsaWdodGVkRGF0ZXNgIGNhbGxiYWNrLiBQbGVhc2UgY2hlY2sgeW91ciBmdW5jdGlvbiBhbmQgdHJ5IGFnYWluLicsIGVsLCBlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbi8qKlxuICogSWYgYSB0aW1lIHpvbmUgaXMgcHJvdmlkZWQgaW4gdGhlIGZvcm1hdCBvcHRpb25zLCB0aGUgcmVuZGVyZWQgdGV4dCBjb3VsZFxuICogZGlmZmVyIGZyb20gd2hhdCB3YXMgc2VsZWN0ZWQgaW4gdGhlIERhdGV0aW1lLCB3aGljaCBjb3VsZCBjYXVzZVxuICogY29uZnVzaW9uLlxuICovXG5jb25zdCB3YXJuSWZUaW1lWm9uZVByb3ZpZGVkID0gKGVsLCBmb3JtYXRPcHRpb25zKSA9PiB7XG4gIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgaWYgKCgoX2EgPSBmb3JtYXRPcHRpb25zID09PSBudWxsIHx8IGZvcm1hdE9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZvcm1hdE9wdGlvbnMuZGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRpbWVab25lKSB8fCAoKF9iID0gZm9ybWF0T3B0aW9ucyA9PT0gbnVsbCB8fCBmb3JtYXRPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtYXRPcHRpb25zLmRhdGUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50aW1lWm9uZU5hbWUpIHx8ICgoX2MgPSBmb3JtYXRPcHRpb25zID09PSBudWxsIHx8IGZvcm1hdE9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZvcm1hdE9wdGlvbnMudGltZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnRpbWVab25lKSB8fCAoKF9kID0gZm9ybWF0T3B0aW9ucyA9PT0gbnVsbCB8fCBmb3JtYXRPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtYXRPcHRpb25zLnRpbWUpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC50aW1lWm9uZU5hbWUpKSB7XG4gICAgcHJpbnRJb25XYXJuaW5nKCdEYXRldGltZTogXCJ0aW1lWm9uZVwiIGFuZCBcInRpbWVab25lTmFtZVwiIGFyZSBub3Qgc3VwcG9ydGVkIGluIFwiZm9ybWF0T3B0aW9uc1wiLicsIGVsKTtcbiAgfVxufTtcbmNvbnN0IGNoZWNrRm9yUHJlc2VudGF0aW9uRm9ybWF0TWlzbWF0Y2ggPSAoZWwsIHByZXNlbnRhdGlvbiwgZm9ybWF0T3B0aW9ucykgPT4ge1xuICAvLyBmb3JtYXRPcHRpb25zIGlzIG5vdCByZXF1aXJlZFxuICBpZiAoIWZvcm1hdE9wdGlvbnMpIHJldHVybjtcbiAgLy8gSWYgZm9ybWF0T3B0aW9ucyBpcyBwcm92aWRlZCwgdGhlIGRhdGUgYW5kL29yIHRpbWUgb2JqZWN0cyBhcmUgcmVxdWlyZWQsIGRlcGVuZGluZyBvbiB0aGUgcHJlc2VudGF0aW9uXG4gIHN3aXRjaCAocHJlc2VudGF0aW9uKSB7XG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgY2FzZSAnbW9udGgteWVhcic6XG4gICAgY2FzZSAnbW9udGgnOlxuICAgIGNhc2UgJ3llYXInOlxuICAgICAgaWYgKGZvcm1hdE9wdGlvbnMuZGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByaW50SW9uV2FybmluZyhgRGF0ZXRpbWU6IFRoZSAnJHtwcmVzZW50YXRpb259JyBwcmVzZW50YXRpb24gcmVxdWlyZXMgYSBkYXRlIG9iamVjdCBpbiBmb3JtYXRPcHRpb25zLmAsIGVsKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RpbWUnOlxuICAgICAgaWYgKGZvcm1hdE9wdGlvbnMudGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByaW50SW9uV2FybmluZyhgRGF0ZXRpbWU6IFRoZSAndGltZScgcHJlc2VudGF0aW9uIHJlcXVpcmVzIGEgdGltZSBvYmplY3QgaW4gZm9ybWF0T3B0aW9ucy5gLCBlbCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkYXRlLXRpbWUnOlxuICAgIGNhc2UgJ3RpbWUtZGF0ZSc6XG4gICAgICBpZiAoZm9ybWF0T3B0aW9ucy5kYXRlID09PSB1bmRlZmluZWQgJiYgZm9ybWF0T3B0aW9ucy50aW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJpbnRJb25XYXJuaW5nKGBEYXRldGltZTogVGhlICcke3ByZXNlbnRhdGlvbn0nIHByZXNlbnRhdGlvbiByZXF1aXJlcyBlaXRoZXIgYSBkYXRlIG9yIHRpbWUgb2JqZWN0IChvciBib3RoKSBpbiBmb3JtYXRPcHRpb25zLmAsIGVsKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9XG59O1xuY29uc3QgZGF0ZXRpbWVJb3NDc3MgPSBcIjpob3N0e2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uO2ZsZXgtZmxvdzpjb2x1bW47YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtvdmVyZmxvdzpoaWRkZW59Omhvc3QoLmRhdGV0aW1lLXNpemUtZml4ZWQpe3dpZHRoOmF1dG87aGVpZ2h0OmF1dG99Omhvc3QoLmRhdGV0aW1lLXNpemUtZml4ZWQ6bm90KC5kYXRldGltZS1wcmVmZXItd2hlZWwpKXttYXgtd2lkdGg6MzUwcHh9Omhvc3QoLmRhdGV0aW1lLXNpemUtZml4ZWQuZGF0ZXRpbWUtcHJlZmVyLXdoZWVsKXttaW4td2lkdGg6MzUwcHg7bWF4LXdpZHRoOi13ZWJraXQtbWF4LWNvbnRlbnQ7bWF4LXdpZHRoOi1tb3otbWF4LWNvbnRlbnQ7bWF4LXdpZHRoOm1heC1jb250ZW50fTpob3N0KC5kYXRldGltZS1zaXplLWNvdmVyKXt3aWR0aDoxMDAlfTpob3N0IC5jYWxlbmRhci1ib2R5LDpob3N0IC5kYXRldGltZS15ZWFye29wYWNpdHk6MH06aG9zdCg6bm90KC5kYXRldGltZS1yZWFkeSkpIC5kYXRldGltZS15ZWFye3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLmRhdGV0aW1lLXJlYWR5KSAuY2FsZW5kYXItYm9keXtvcGFjaXR5OjF9Omhvc3QoLmRhdGV0aW1lLXJlYWR5KSAuZGF0ZXRpbWUteWVhcntkaXNwbGF5Om5vbmU7b3BhY2l0eToxfTpob3N0IC53aGVlbC1vcmRlci15ZWFyLWZpcnN0IC5kYXktY29sdW1uey1tcy1mbGV4LW9yZGVyOjM7b3JkZXI6Mzt0ZXh0LWFsaWduOmVuZH06aG9zdCAud2hlZWwtb3JkZXIteWVhci1maXJzdCAubW9udGgtY29sdW1uey1tcy1mbGV4LW9yZGVyOjI7b3JkZXI6Mjt0ZXh0LWFsaWduOmVuZH06aG9zdCAud2hlZWwtb3JkZXIteWVhci1maXJzdCAueWVhci1jb2x1bW57LW1zLWZsZXgtb3JkZXI6MTtvcmRlcjoxO3RleHQtYWxpZ246c3RhcnR9Omhvc3QgLmRhdGV0aW1lLWNhbGVuZGFyLDpob3N0IC5kYXRldGltZS15ZWFye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4OjEgMSBhdXRvO2ZsZXg6MSAxIGF1dG87LW1zLWZsZXgtZmxvdzpjb2x1bW47ZmxleC1mbG93OmNvbHVtbn06aG9zdCguc2hvdy1tb250aC1hbmQteWVhcikgLmRhdGV0aW1lLXllYXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9Omhvc3QoLnNob3ctbW9udGgtYW5kLXllYXIpIC5jYWxlbmRhci1uZXh0LXByZXYsOmhvc3QoLnNob3ctbW9udGgtYW5kLXllYXIpIC5jYWxlbmRhci1kYXlzLW9mLXdlZWssOmhvc3QoLnNob3ctbW9udGgtYW5kLXllYXIpIC5jYWxlbmRhci1ib2R5LDpob3N0KC5zaG93LW1vbnRoLWFuZC15ZWFyKSAuZGF0ZXRpbWUtdGltZXtkaXNwbGF5Om5vbmV9Omhvc3QoLm1vbnRoLXllYXItcGlja2VyLW9wZW4pIC5kYXRldGltZS1mb290ZXJ7ZGlzcGxheTpub25lfTpob3N0KC5kYXRldGltZS1kaXNhYmxlZCl7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCguZGF0ZXRpbWUtZGlzYWJsZWQpIC5jYWxlbmRhci1kYXlzLW9mLXdlZWssOmhvc3QoLmRhdGV0aW1lLWRpc2FibGVkKSAuZGF0ZXRpbWUtdGltZXtvcGFjaXR5OjAuNH06aG9zdCguZGF0ZXRpbWUtcmVhZG9ubHkpe3BvaW50ZXItZXZlbnRzOm5vbmU7fTpob3N0KC5kYXRldGltZS1yZWFkb25seSkgLmNhbGVuZGFyLWFjdGlvbi1idXR0b25zLDpob3N0KC5kYXRldGltZS1yZWFkb25seSkgLmNhbGVuZGFyLWJvZHksOmhvc3QoLmRhdGV0aW1lLXJlYWRvbmx5KSAuZGF0ZXRpbWUteWVhcntwb2ludGVyLWV2ZW50czppbml0aWFsfTpob3N0KC5kYXRldGltZS1yZWFkb25seSkgLmNhbGVuZGFyLWRheVtkaXNhYmxlZF06bm90KC5jYWxlbmRhci1kYXktY29uc3RyYWluZWQpLDpob3N0KC5kYXRldGltZS1yZWFkb25seSkgLmRhdGV0aW1lLWFjdGlvbi1idXR0b25zIGlvbi1idXR0b25bZGlzYWJsZWRde29wYWNpdHk6MX06aG9zdCAuZGF0ZXRpbWUtaGVhZGVyIC5kYXRldGltZS10aXRsZXt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW59Omhvc3QgLmRhdGV0aW1lLWFjdGlvbi1idXR0b25zLmhhcy1jbGVhci1idXR0b257d2lkdGg6MTAwJX06aG9zdCAuZGF0ZXRpbWUtYWN0aW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbnN7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5kYXRldGltZS1hY3Rpb24tYnV0dG9ucyAuZGF0ZXRpbWUtYWN0aW9uLWJ1dHRvbnMtY29udGFpbmVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fTpob3N0IC5jYWxlbmRhci1hY3Rpb24tYnV0dG9uc3tkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Omhvc3QgLmNhbGVuZGFyLWFjdGlvbi1idXR0b25zIGlvbi1idXR0b257LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50fTpob3N0IC5jYWxlbmRhci1kYXlzLW9mLXdlZWt7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoNywgMWZyKTt0ZXh0LWFsaWduOmNlbnRlcn0uY2FsZW5kYXItZGF5cy1vZi13ZWVrIC5kYXktb2Ytd2Vla3std2Via2l0LW1hcmdpbi1zdGFydDphdXRvO21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0bzstd2Via2l0LW1hcmdpbi1lbmQ6YXV0bzttYXJnaW4taW5saW5lLWVuZDphdXRvO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9Omhvc3QgLmNhbGVuZGFyLWJvZHl7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTstd2Via2l0LXNjcm9sbC1zbmFwLXR5cGU6eCBtYW5kYXRvcnk7LW1zLXNjcm9sbC1zbmFwLXR5cGU6eCBtYW5kYXRvcnk7c2Nyb2xsLXNuYXAtdHlwZTp4IG1hbmRhdG9yeTtvdmVyZmxvdy14OnNjcm9sbDtvdmVyZmxvdy15OmhpZGRlbjtzY3JvbGxiYXItd2lkdGg6bm9uZTtvdXRsaW5lOm5vbmV9Omhvc3QgLmNhbGVuZGFyLWJvZHkgLmNhbGVuZGFyLW1vbnRoe2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uO2ZsZXgtZmxvdzpjb2x1bW47c2Nyb2xsLXNuYXAtYWxpZ246c3RhcnQ7c2Nyb2xsLXNuYXAtc3RvcDphbHdheXM7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowO3dpZHRoOjEwMCV9Omhvc3QgLmNhbGVuZGFyLWJvZHkgLmNhbGVuZGFyLW1vbnRoLWRpc2FibGVke3Njcm9sbC1zbmFwLWFsaWduOm5vbmV9Omhvc3QgLmNhbGVuZGFyLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFye2Rpc3BsYXk6bm9uZX06aG9zdCAuY2FsZW5kYXItYm9keSAuY2FsZW5kYXItbW9udGgtZ3JpZHtkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCg3LCAxZnIpfTpob3N0IC5jYWxlbmRhci1kYXktd3JhcHBlcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWluLXdpZHRoOjA7bWluLWhlaWdodDowO292ZXJmbG93OnZpc2libGV9LmNhbGVuZGFyLWRheXtib3JkZXItcmFkaXVzOjUwJTstd2Via2l0LXBhZGRpbmctc3RhcnQ6MHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjBweDstd2Via2l0LXBhZGRpbmctZW5kOjBweDtwYWRkaW5nLWlubGluZS1lbmQ6MHB4O3BhZGRpbmctdG9wOjBweDtwYWRkaW5nLWJvdHRvbTowcHg7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MHB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MHB4Oy13ZWJraXQtbWFyZ2luLWVuZDowcHg7bWFyZ2luLWlubGluZS1lbmQ6MHB4O21hcmdpbi10b3A6MHB4O21hcmdpbi1ib3R0b206MHB4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtib3JkZXI6bm9uZTtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDpub25lO2NvbG9yOmN1cnJlbnRDb2xvcjtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpO2N1cnNvcjpwb2ludGVyOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTt6LWluZGV4OjB9Omhvc3QgLmNhbGVuZGFyLWRheVtkaXNhYmxlZF17cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjAuNH0uY2FsZW5kYXItZGF5OmZvY3Vze2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLCAwLjIpOy13ZWJraXQtYm94LXNoYWRvdzowcHggMHB4IDBweCA0cHggcmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLCAwLjIpO2JveC1zaGFkb3c6MHB4IDBweCAwcHggNHB4IHJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwgMC4yKX06aG9zdCAuZGF0ZXRpbWUtdGltZXtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Omhvc3QoLmRhdGV0aW1lLXByZXNlbnRhdGlvbi10aW1lKSAuZGF0ZXRpbWUtdGltZXtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowfTpob3N0IGlvbi1wb3BvdmVyey0taGVpZ2h0OjIwMHB4fTpob3N0IC50aW1lLWhlYWRlcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfTpob3N0IC50aW1lLWJvZHl7Ym9yZGVyLXJhZGl1czo4cHg7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjEycHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTJweDstd2Via2l0LXBhZGRpbmctZW5kOjEycHg7cGFkZGluZy1pbmxpbmUtZW5kOjEycHg7cGFkZGluZy10b3A6NnB4O3BhZGRpbmctYm90dG9tOjZweDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtib3JkZXI6bm9uZTtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zdGVwLTMwMCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0zMDAsICNlZGVlZjApKTtjb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9Omhvc3QgLnRpbWUtYm9keS1hY3RpdmV7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5pbi1pdGVtKXtwb3NpdGlvbjpzdGF0aWN9Omhvc3QoLnNob3ctbW9udGgtYW5kLXllYXIpIC5jYWxlbmRhci1hY3Rpb24tYnV0dG9ucyAuY2FsZW5kYXItbW9udGgteWVhci10b2dnbGV7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfS5jYWxlbmRhci1tb250aC15ZWFye21pbi13aWR0aDowfS5jYWxlbmRhci1tb250aC15ZWFyLXRvZ2dsZXtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1pbmRlbnQ6aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0O3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlcjowO291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2N1cnNvcjpwb2ludGVyO3otaW5kZXg6MX0uY2FsZW5kYXItbW9udGgteWVhci10b2dnbGU6OmFmdGVye2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO2NvbnRlbnQ6XFxcIlxcXCI7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IDE1bXMgbGluZWFyLCBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyO3RyYW5zaXRpb246b3BhY2l0eSAxNW1zIGxpbmVhciwgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjt6LWluZGV4Oi0xfS5jYWxlbmRhci1tb250aC15ZWFyLXRvZ2dsZS5pb24tZm9jdXNlZDo6YWZ0ZXJ7YmFja2dyb3VuZDpjdXJyZW50Q29sb3J9LmNhbGVuZGFyLW1vbnRoLXllYXItdG9nZ2xlOmRpc2FibGVke29wYWNpdHk6MC4zO3BvaW50ZXItZXZlbnRzOm5vbmV9LmNhbGVuZGFyLW1vbnRoLXllYXItdG9nZ2xlIGlvbi1pY29uey13ZWJraXQtcGFkZGluZy1zdGFydDo0cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6NHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MDtwYWRkaW5nLWlubGluZS1lbmQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowfS5jYWxlbmRhci1tb250aC15ZWFyLXRvZ2dsZSAjdG9nZ2xlLXdyYXBwZXJ7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3g7ZGlzcGxheTppbmxpbmUtZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfWlvbi1waWNrZXJ7LS1oaWdobGlnaHQtYmFja2dyb3VuZDp2YXIoLS13aGVlbC1oaWdobGlnaHQtYmFja2dyb3VuZCk7LS1oaWdobGlnaHQtYm9yZGVyLXJhZGl1czp2YXIoLS13aGVlbC1oaWdobGlnaHQtYm9yZGVyLXJhZGl1cyk7LS1mYWRlLWJhY2tncm91bmQtcmdiOnZhcigtLXdoZWVsLWZhZGUtYmFja2dyb3VuZC1yZ2IpfTpob3N0ey0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItbGlnaHQsICNmNGY1ZjgpOy0tYmFja2dyb3VuZC1yZ2I6dmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiwgMjQ0LCAyNDUsIDI0OCk7LS10aXRsZS1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNDAwLCAjNjY2NjY2KSl9Omhvc3QoLmRhdGV0aW1lLXByZXNlbnRhdGlvbi1kYXRlLXRpbWU6bm90KC5kYXRldGltZS1wcmVmZXItd2hlZWwpKSw6aG9zdCguZGF0ZXRpbWUtcHJlc2VudGF0aW9uLXRpbWUtZGF0ZTpub3QoLmRhdGV0aW1lLXByZWZlci13aGVlbCkpLDpob3N0KC5kYXRldGltZS1wcmVzZW50YXRpb24tZGF0ZTpub3QoLmRhdGV0aW1lLXByZWZlci13aGVlbCkpe21pbi1oZWlnaHQ6MzUwcHh9Omhvc3QgLmRhdGV0aW1lLWhlYWRlcnstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweDtwYWRkaW5nLXRvcDoxNnB4O3BhZGRpbmctYm90dG9tOjE2cHg7Ym9yZGVyLWJvdHRvbTowLjU1cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjAwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTIwMCwgI2NjY2NjYykpO2ZvbnQtc2l6ZTptaW4oMC44NzVyZW0sIDIyLjRweCl9Omhvc3QgLmRhdGV0aW1lLWhlYWRlciAuZGF0ZXRpbWUtdGl0bGV7Y29sb3I6dmFyKC0tdGl0bGUtY29sb3IpfTpob3N0IC5kYXRldGltZS1oZWFkZXIgLmRhdGV0aW1lLXNlbGVjdGVkLWRhdGV7bWFyZ2luLXRvcDoxMHB4fS5jYWxlbmRhci1tb250aC15ZWFyLXRvZ2dsZXstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweDtwYWRkaW5nLXRvcDowcHg7cGFkZGluZy1ib3R0b206MHB4O21pbi1oZWlnaHQ6NDRweDtmb250LXNpemU6bWluKDFyZW0sIDI1LjZweCk7Zm9udC13ZWlnaHQ6NjAwfS5jYWxlbmRhci1tb250aC15ZWFyLXRvZ2dsZS5pb24tZm9jdXNlZDo6YWZ0ZXJ7b3BhY2l0eTowLjE1fS5jYWxlbmRhci1tb250aC15ZWFyLXRvZ2dsZSAjdG9nZ2xlLXdyYXBwZXJ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjA7LXdlYmtpdC1tYXJnaW4tZW5kOjhweDttYXJnaW4taW5saW5lLWVuZDo4cHg7bWFyZ2luLXRvcDoxMHB4O21hcmdpbi1ib3R0b206MTBweH06aG9zdCAuY2FsZW5kYXItYWN0aW9uLWJ1dHRvbnMgLmNhbGVuZGFyLW1vbnRoLXllYXItdG9nZ2xlIGlvbi1pY29uLDpob3N0IC5jYWxlbmRhci1hY3Rpb24tYnV0dG9ucyBpb24tYnV0dG9ucyBpb24tYnV0dG9ue2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCAuY2FsZW5kYXItYWN0aW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbnN7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTowfTpob3N0IC5jYWxlbmRhci1hY3Rpb24tYnV0dG9ucyBpb24tYnV0dG9ucyBpb24tYnV0dG9ue21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH06aG9zdCAuY2FsZW5kYXItZGF5cy1vZi13ZWVrey13ZWJraXQtcGFkZGluZy1zdGFydDo4cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6OHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6OHB4O3BhZGRpbmctaW5saW5lLWVuZDo4cHg7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTMwMCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC03MDAsICNiM2IzYjMpKTtmb250LXNpemU6bWluKDAuNzVyZW0sIDE5LjJweCk7Zm9udC13ZWlnaHQ6NjAwO2xpbmUtaGVpZ2h0OjI0cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfUBzdXBwb3J0cyAoYm9yZGVyLXJhZGl1czogbW9kKDFweCwgMXB4KSl7LmNhbGVuZGFyLWRheXMtb2Ytd2VlayAuZGF5LW9mLXdlZWt7d2lkdGg6Y2xhbXAoMjBweCwgY2FsYyhtb2QobWluKDFyZW0sIDI0cHgpLCAyNHB4KSAqIDEwKSwgMTAwJSk7aGVpZ2h0OjI0cHg7b3ZlcmZsb3c6aGlkZGVufS5jYWxlbmRhci1kYXl7Ym9yZGVyLXJhZGl1czptYXgoOHB4LCBtb2QobWluKDFyZW0sIDI0cHgpLCAyNHB4KSAqIDEwKX19QHN1cHBvcnRzICgoYm9yZGVyLXJhZGl1czogbW9kKDFweCwgMXB4KSkgYW5kIChiYWNrZ3JvdW5kOiAtd2Via2l0LW5hbWVkLWltYWdlKGFwcGxlLXBheS1sb2dvLWJsYWNrKSkgYW5kIChub3QgKGNvbnRhaW4taW50cmluc2ljLXNpemU6IG5vbmUpKSkgb3IgKG5vdCAoYm9yZGVyLXJhZGl1czogbW9kKDFweCwgMXB4KSkpey5jYWxlbmRhci1kYXlzLW9mLXdlZWsgLmRheS1vZi13ZWVre3dpZHRoOmF1dG87aGVpZ2h0OmF1dG87b3ZlcmZsb3c6aW5pdGlhbH0uY2FsZW5kYXItZGF5e2JvcmRlci1yYWRpdXM6MzJweH19Omhvc3QgLmNhbGVuZGFyLWJvZHkgLmNhbGVuZGFyLW1vbnRoIC5jYWxlbmRhci1tb250aC1ncmlkey13ZWJraXQtcGFkZGluZy1zdGFydDo4cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6OHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6OHB4O3BhZGRpbmctaW5saW5lLWVuZDo4cHg7cGFkZGluZy10b3A6OHB4O3BhZGRpbmctYm90dG9tOjhweDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2hlaWdodDpjYWxjKDEwMCUgLSAxNnB4KX06aG9zdCAuY2FsZW5kYXItZGF5LXdyYXBwZXJ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjRweDtwYWRkaW5nLWlubGluZS1zdGFydDo0cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo0cHg7cGFkZGluZy1pbmxpbmUtZW5kOjRweDtwYWRkaW5nLXRvcDo0cHg7cGFkZGluZy1ib3R0b206NHB4O2hlaWdodDowO21pbi1oZWlnaHQ6MXJlbX06aG9zdCAuY2FsZW5kYXItZGF5e3dpZHRoOjQwcHg7bWluLXdpZHRoOjQwcHg7aGVpZ2h0OjQwcHg7Zm9udC1zaXplOm1pbigxLjI1cmVtLCAzMnB4KX0uY2FsZW5kYXItZGF5LmNhbGVuZGFyLWRheS1hY3RpdmV7YmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1iYXNlLXJnYiksIDAuMik7Zm9udC1zaXplOm1pbigxLjM3NXJlbSwgMzUuMnB4KX06aG9zdCAuY2FsZW5kYXItZGF5LmNhbGVuZGFyLWRheS10b2RheXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QgLmNhbGVuZGFyLWRheS5jYWxlbmRhci1kYXktYWN0aXZle2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKTtmb250LXdlaWdodDo2MDB9Omhvc3QgLmNhbGVuZGFyLWRheS5jYWxlbmRhci1kYXktdG9kYXkuY2FsZW5kYXItZGF5LWFjdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0IC5kYXRldGltZS10aW1ley13ZWJraXQtcGFkZGluZy1zdGFydDoxNnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxNnB4O3BhZGRpbmctaW5saW5lLWVuZDoxNnB4O3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbToxNnB4O2ZvbnQtc2l6ZTptaW4oMXJlbSwgMjUuNnB4KX06aG9zdCAuZGF0ZXRpbWUtdGltZSAudGltZS1oZWFkZXJ7Zm9udC13ZWlnaHQ6NjAwfTpob3N0IC5kYXRldGltZS1idXR0b25zey13ZWJraXQtcGFkZGluZy1zdGFydDo4cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6OHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6OHB4O3BhZGRpbmctaW5saW5lLWVuZDo4cHg7cGFkZGluZy10b3A6OHB4O3BhZGRpbmctYm90dG9tOjhweDtib3JkZXItdG9wOjAuNTVweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0yMDAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMjAwLCAjY2NjY2NjKSl9Omhvc3QgLmRhdGV0aW1lLWJ1dHRvbnMgOjpzbG90dGVkKGlvbi1idXR0b25zKSw6aG9zdCAuZGF0ZXRpbWUtYnV0dG9ucyBpb24tYnV0dG9uc3tkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn06aG9zdCAuZGF0ZXRpbWUtYWN0aW9uLWJ1dHRvbnN7d2lkdGg6MTAwJX1cIjtcbmNvbnN0IElvbkRhdGV0aW1lSW9zU3R5bGUwID0gZGF0ZXRpbWVJb3NDc3M7XG5jb25zdCBkYXRldGltZU1kQ3NzID0gXCI6aG9zdHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OmNvbHVtbjtmbGV4LWZsb3c6Y29sdW1uO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7b3ZlcmZsb3c6aGlkZGVufTpob3N0KC5kYXRldGltZS1zaXplLWZpeGVkKXt3aWR0aDphdXRvO2hlaWdodDphdXRvfTpob3N0KC5kYXRldGltZS1zaXplLWZpeGVkOm5vdCguZGF0ZXRpbWUtcHJlZmVyLXdoZWVsKSl7bWF4LXdpZHRoOjM1MHB4fTpob3N0KC5kYXRldGltZS1zaXplLWZpeGVkLmRhdGV0aW1lLXByZWZlci13aGVlbCl7bWluLXdpZHRoOjM1MHB4O21heC13aWR0aDotd2Via2l0LW1heC1jb250ZW50O21heC13aWR0aDotbW96LW1heC1jb250ZW50O21heC13aWR0aDptYXgtY29udGVudH06aG9zdCguZGF0ZXRpbWUtc2l6ZS1jb3Zlcil7d2lkdGg6MTAwJX06aG9zdCAuY2FsZW5kYXItYm9keSw6aG9zdCAuZGF0ZXRpbWUteWVhcntvcGFjaXR5OjB9Omhvc3QoOm5vdCguZGF0ZXRpbWUtcmVhZHkpKSAuZGF0ZXRpbWUteWVhcntwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5kYXRldGltZS1yZWFkeSkgLmNhbGVuZGFyLWJvZHl7b3BhY2l0eToxfTpob3N0KC5kYXRldGltZS1yZWFkeSkgLmRhdGV0aW1lLXllYXJ7ZGlzcGxheTpub25lO29wYWNpdHk6MX06aG9zdCAud2hlZWwtb3JkZXIteWVhci1maXJzdCAuZGF5LWNvbHVtbnstbXMtZmxleC1vcmRlcjozO29yZGVyOjM7dGV4dC1hbGlnbjplbmR9Omhvc3QgLndoZWVsLW9yZGVyLXllYXItZmlyc3QgLm1vbnRoLWNvbHVtbnstbXMtZmxleC1vcmRlcjoyO29yZGVyOjI7dGV4dC1hbGlnbjplbmR9Omhvc3QgLndoZWVsLW9yZGVyLXllYXItZmlyc3QgLnllYXItY29sdW1uey1tcy1mbGV4LW9yZGVyOjE7b3JkZXI6MTt0ZXh0LWFsaWduOnN0YXJ0fTpob3N0IC5kYXRldGltZS1jYWxlbmRhciw6aG9zdCAuZGF0ZXRpbWUteWVhcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleDoxIDEgYXV0bztmbGV4OjEgMSBhdXRvOy1tcy1mbGV4LWZsb3c6Y29sdW1uO2ZsZXgtZmxvdzpjb2x1bW59Omhvc3QoLnNob3ctbW9udGgtYW5kLXllYXIpIC5kYXRldGltZS15ZWFye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fTpob3N0KC5zaG93LW1vbnRoLWFuZC15ZWFyKSAuY2FsZW5kYXItbmV4dC1wcmV2LDpob3N0KC5zaG93LW1vbnRoLWFuZC15ZWFyKSAuY2FsZW5kYXItZGF5cy1vZi13ZWVrLDpob3N0KC5zaG93LW1vbnRoLWFuZC15ZWFyKSAuY2FsZW5kYXItYm9keSw6aG9zdCguc2hvdy1tb250aC1hbmQteWVhcikgLmRhdGV0aW1lLXRpbWV7ZGlzcGxheTpub25lfTpob3N0KC5tb250aC15ZWFyLXBpY2tlci1vcGVuKSAuZGF0ZXRpbWUtZm9vdGVye2Rpc3BsYXk6bm9uZX06aG9zdCguZGF0ZXRpbWUtZGlzYWJsZWQpe3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLmRhdGV0aW1lLWRpc2FibGVkKSAuY2FsZW5kYXItZGF5cy1vZi13ZWVrLDpob3N0KC5kYXRldGltZS1kaXNhYmxlZCkgLmRhdGV0aW1lLXRpbWV7b3BhY2l0eTowLjR9Omhvc3QoLmRhdGV0aW1lLXJlYWRvbmx5KXtwb2ludGVyLWV2ZW50czpub25lO306aG9zdCguZGF0ZXRpbWUtcmVhZG9ubHkpIC5jYWxlbmRhci1hY3Rpb24tYnV0dG9ucyw6aG9zdCguZGF0ZXRpbWUtcmVhZG9ubHkpIC5jYWxlbmRhci1ib2R5LDpob3N0KC5kYXRldGltZS1yZWFkb25seSkgLmRhdGV0aW1lLXllYXJ7cG9pbnRlci1ldmVudHM6aW5pdGlhbH06aG9zdCguZGF0ZXRpbWUtcmVhZG9ubHkpIC5jYWxlbmRhci1kYXlbZGlzYWJsZWRdOm5vdCguY2FsZW5kYXItZGF5LWNvbnN0cmFpbmVkKSw6aG9zdCguZGF0ZXRpbWUtcmVhZG9ubHkpIC5kYXRldGltZS1hY3Rpb24tYnV0dG9ucyBpb24tYnV0dG9uW2Rpc2FibGVkXXtvcGFjaXR5OjF9Omhvc3QgLmRhdGV0aW1lLWhlYWRlciAuZGF0ZXRpbWUtdGl0bGV7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVufTpob3N0IC5kYXRldGltZS1hY3Rpb24tYnV0dG9ucy5oYXMtY2xlYXItYnV0dG9ue3dpZHRoOjEwMCV9Omhvc3QgLmRhdGV0aW1lLWFjdGlvbi1idXR0b25zIGlvbi1idXR0b25ze2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn0uZGF0ZXRpbWUtYWN0aW9uLWJ1dHRvbnMgLmRhdGV0aW1lLWFjdGlvbi1idXR0b25zLWNvbnRhaW5lcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH06aG9zdCAuY2FsZW5kYXItYWN0aW9uLWJ1dHRvbnN7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufTpob3N0IC5jYWxlbmRhci1hY3Rpb24tYnV0dG9ucyBpb24tYnV0dG9uey0tYmFja2dyb3VuZDp0cmFuc3BhcmVudH06aG9zdCAuY2FsZW5kYXItZGF5cy1vZi13ZWVre2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDcsIDFmcik7dGV4dC1hbGlnbjpjZW50ZXJ9LmNhbGVuZGFyLWRheXMtb2Ytd2VlayAuZGF5LW9mLXdlZWt7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6YXV0bzttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG87LXdlYmtpdC1tYXJnaW4tZW5kOmF1dG87bWFyZ2luLWlubGluZS1lbmQ6YXV0bzttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfTpob3N0IC5jYWxlbmRhci1ib2R5e2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7LXdlYmtpdC1zY3JvbGwtc25hcC10eXBlOnggbWFuZGF0b3J5Oy1tcy1zY3JvbGwtc25hcC10eXBlOnggbWFuZGF0b3J5O3Njcm9sbC1zbmFwLXR5cGU6eCBtYW5kYXRvcnk7b3ZlcmZsb3cteDpzY3JvbGw7b3ZlcmZsb3cteTpoaWRkZW47c2Nyb2xsYmFyLXdpZHRoOm5vbmU7b3V0bGluZTpub25lfTpob3N0IC5jYWxlbmRhci1ib2R5IC5jYWxlbmRhci1tb250aHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OmNvbHVtbjtmbGV4LWZsb3c6Y29sdW1uO3Njcm9sbC1zbmFwLWFsaWduOnN0YXJ0O3Njcm9sbC1zbmFwLXN0b3A6YWx3YXlzOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDt3aWR0aDoxMDAlfTpob3N0IC5jYWxlbmRhci1ib2R5IC5jYWxlbmRhci1tb250aC1kaXNhYmxlZHtzY3JvbGwtc25hcC1hbGlnbjpub25lfTpob3N0IC5jYWxlbmRhci1ib2R5Ojotd2Via2l0LXNjcm9sbGJhcntkaXNwbGF5Om5vbmV9Omhvc3QgLmNhbGVuZGFyLWJvZHkgLmNhbGVuZGFyLW1vbnRoLWdyaWR7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoNywgMWZyKX06aG9zdCAuY2FsZW5kYXItZGF5LXdyYXBwZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21pbi13aWR0aDowO21pbi1oZWlnaHQ6MDtvdmVyZmxvdzp2aXNpYmxlfS5jYWxlbmRhci1kYXl7Ym9yZGVyLXJhZGl1czo1MCU7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjBweDtwYWRkaW5nLWlubGluZS1zdGFydDowcHg7LXdlYmtpdC1wYWRkaW5nLWVuZDowcHg7cGFkZGluZy1pbmxpbmUtZW5kOjBweDtwYWRkaW5nLXRvcDowcHg7cGFkZGluZy1ib3R0b206MHB4Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjBweDttYXJnaW4taW5saW5lLXN0YXJ0OjBweDstd2Via2l0LW1hcmdpbi1lbmQ6MHB4O21hcmdpbi1pbmxpbmUtZW5kOjBweDttYXJnaW4tdG9wOjBweDttYXJnaW4tYm90dG9tOjBweDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyOm5vbmU7b3V0bGluZTpub25lO2JhY2tncm91bmQ6bm9uZTtjb2xvcjpjdXJyZW50Q29sb3I7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KTtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7ei1pbmRleDowfTpob3N0IC5jYWxlbmRhci1kYXlbZGlzYWJsZWRde3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowLjR9LmNhbGVuZGFyLWRheTpmb2N1c3tiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwgMC4yKTstd2Via2l0LWJveC1zaGFkb3c6MHB4IDBweCAwcHggNHB4IHJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwgMC4yKTtib3gtc2hhZG93OjBweCAwcHggMHB4IDRweCByZ2JhKHZhcigtLWlvbi1jb2xvci1iYXNlLXJnYiksIDAuMil9Omhvc3QgLmRhdGV0aW1lLXRpbWV7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufTpob3N0KC5kYXRldGltZS1wcmVzZW50YXRpb24tdGltZSkgLmRhdGV0aW1lLXRpbWV7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH06aG9zdCBpb24tcG9wb3ZlcnstLWhlaWdodDoyMDBweH06aG9zdCAudGltZS1oZWFkZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn06aG9zdCAudGltZS1ib2R5e2JvcmRlci1yYWRpdXM6OHB4Oy13ZWJraXQtcGFkZGluZy1zdGFydDoxMnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjEycHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxMnB4O3BhZGRpbmctaW5saW5lLWVuZDoxMnB4O3BhZGRpbmctdG9wOjZweDtwYWRkaW5nLWJvdHRvbTo2cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7Ym9yZGVyOm5vbmU7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC0zMDAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMzAwLCAjZWRlZWYwKSk7Y29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfTpob3N0IC50aW1lLWJvZHktYWN0aXZle2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguaW4taXRlbSl7cG9zaXRpb246c3RhdGljfTpob3N0KC5zaG93LW1vbnRoLWFuZC15ZWFyKSAuY2FsZW5kYXItYWN0aW9uLWJ1dHRvbnMgLmNhbGVuZGFyLW1vbnRoLXllYXItdG9nZ2xle2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX0uY2FsZW5kYXItbW9udGgteWVhcnttaW4td2lkdGg6MH0uY2FsZW5kYXItbW9udGgteWVhci10b2dnbGV7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsZXR0ZXItc3BhY2luZzppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtaW5kZW50OmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtwb3NpdGlvbjpyZWxhdGl2ZTtib3JkZXI6MDtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjdXJzb3I6cG9pbnRlcjt6LWluZGV4OjF9LmNhbGVuZGFyLW1vbnRoLXllYXItdG9nZ2xlOjphZnRlcntsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTtjb250ZW50OlxcXCJcXFwiO29wYWNpdHk6MDstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAxNW1zIGxpbmVhciwgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjt0cmFuc2l0aW9uOm9wYWNpdHkgMTVtcyBsaW5lYXIsIGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXI7ei1pbmRleDotMX0uY2FsZW5kYXItbW9udGgteWVhci10b2dnbGUuaW9uLWZvY3VzZWQ6OmFmdGVye2JhY2tncm91bmQ6Y3VycmVudENvbG9yfS5jYWxlbmRhci1tb250aC15ZWFyLXRvZ2dsZTpkaXNhYmxlZHtvcGFjaXR5OjAuMztwb2ludGVyLWV2ZW50czpub25lfS5jYWxlbmRhci1tb250aC15ZWFyLXRvZ2dsZSBpb24taWNvbnstd2Via2l0LXBhZGRpbmctc3RhcnQ6NHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjRweDstd2Via2l0LXBhZGRpbmctZW5kOjA7cGFkZGluZy1pbmxpbmUtZW5kOjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MH0uY2FsZW5kYXItbW9udGgteWVhci10b2dnbGUgI3RvZ2dsZS13cmFwcGVye2Rpc3BsYXk6LW1zLWlubGluZS1mbGV4Ym94O2Rpc3BsYXk6aW5saW5lLWZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn1pb24tcGlja2Vyey0taGlnaGxpZ2h0LWJhY2tncm91bmQ6dmFyKC0td2hlZWwtaGlnaGxpZ2h0LWJhY2tncm91bmQpOy0taGlnaGxpZ2h0LWJvcmRlci1yYWRpdXM6dmFyKC0td2hlZWwtaGlnaGxpZ2h0LWJvcmRlci1yYWRpdXMpOy0tZmFkZS1iYWNrZ3JvdW5kLXJnYjp2YXIoLS13aGVlbC1mYWRlLWJhY2tncm91bmQtcmdiKX06aG9zdHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTEwMCwgI2ZmZmZmZikpOy0tdGl0bGUtY29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdCAuZGF0ZXRpbWUtaGVhZGVyey13ZWJraXQtcGFkZGluZy1zdGFydDoyMHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjIwcHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoyMHB4O3BhZGRpbmctaW5saW5lLWVuZDoyMHB4O3BhZGRpbmctdG9wOjIwcHg7cGFkZGluZy1ib3R0b206MjBweDtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS10aXRsZS1jb2xvcil9Omhvc3QgLmRhdGV0aW1lLWhlYWRlciAuZGF0ZXRpbWUtdGl0bGV7Zm9udC1zaXplOjAuNzVyZW07dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfTpob3N0IC5kYXRldGltZS1oZWFkZXIgLmRhdGV0aW1lLXNlbGVjdGVkLWRhdGV7bWFyZ2luLXRvcDozMHB4O2ZvbnQtc2l6ZToyLjEyNXJlbX06aG9zdCAuY2FsZW5kYXItYWN0aW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbnstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTY1MCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC0zNTAsICM1OTU5NTkpKX0uY2FsZW5kYXItbW9udGgteWVhci10b2dnbGV7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjIwcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MjBweDstd2Via2l0LXBhZGRpbmctZW5kOjE2cHg7cGFkZGluZy1pbmxpbmUtZW5kOjE2cHg7cGFkZGluZy10b3A6MTJweDtwYWRkaW5nLWJvdHRvbToxMnB4O21pbi1oZWlnaHQ6NDhweDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTY1MCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC0zNTAsICM1OTU5NTkpKTt6LWluZGV4OjF9LmNhbGVuZGFyLW1vbnRoLXllYXItdG9nZ2xlLmlvbi1mb2N1c2VkOjphZnRlcntvcGFjaXR5OjAuMDR9LmNhbGVuZGFyLW1vbnRoLXllYXItdG9nZ2xlIGlvbi1yaXBwbGUtZWZmZWN0e2NvbG9yOmN1cnJlbnRDb2xvcn1AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpey5jYWxlbmRhci1tb250aC15ZWFyLXRvZ2dsZS5pb24tYWN0aXZhdGFibGU6bm90KC5pb24tZm9jdXNlZCk6aG92ZXI6OmFmdGVye2JhY2tncm91bmQ6Y3VycmVudENvbG9yO29wYWNpdHk6MC4wNH19Omhvc3QgLmNhbGVuZGFyLWRheXMtb2Ytd2Vla3std2Via2l0LXBhZGRpbmctc3RhcnQ6MTBweDtwYWRkaW5nLWlubGluZS1zdGFydDoxMHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTBweDtwYWRkaW5nLWlubGluZS1lbmQ6MTBweDtwYWRkaW5nLXRvcDowcHg7cGFkZGluZy1ib3R0b206MHB4O2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTUwMCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC01MDAsIGdyYXkpKTtmb250LXNpemU6MC44NzVyZW07bGluZS1oZWlnaHQ6MzZweH06aG9zdCAuY2FsZW5kYXItYm9keSAuY2FsZW5kYXItbW9udGggLmNhbGVuZGFyLW1vbnRoLWdyaWR7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjEwcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTBweDstd2Via2l0LXBhZGRpbmctZW5kOjEwcHg7cGFkZGluZy1pbmxpbmUtZW5kOjEwcHg7cGFkZGluZy10b3A6NHB4O3BhZGRpbmctYm90dG9tOjRweDtncmlkLXRlbXBsYXRlLXJvd3M6cmVwZWF0KDYsIDFmcil9Omhvc3QgLmNhbGVuZGFyLWRheXt3aWR0aDo0MnB4O21pbi13aWR0aDo0MnB4O2hlaWdodDo0MnB4O2ZvbnQtc2l6ZTowLjg3NXJlbX06aG9zdCAuY2FsZW5kYXItZGF5LmNhbGVuZGFyLWRheS10b2RheXtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QgLmNhbGVuZGFyLWRheS5jYWxlbmRhci1kYXktYWN0aXZle2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9LmNhbGVuZGFyLWRheS5jYWxlbmRhci1kYXktYWN0aXZle2JvcmRlcjoxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWJhc2UpO2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0IC5kYXRldGltZS10aW1ley13ZWJraXQtcGFkZGluZy1zdGFydDoxNnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxNnB4O3BhZGRpbmctaW5saW5lLWVuZDoxNnB4O3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHh9Omhvc3QgLnRpbWUtaGVhZGVye2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTY1MCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC0zNTAsICM1OTU5NTkpKX06aG9zdCguZGF0ZXRpbWUtcHJlc2VudGF0aW9uLW1vbnRoKSAuZGF0ZXRpbWUteWVhciw6aG9zdCguZGF0ZXRpbWUtcHJlc2VudGF0aW9uLXllYXIpIC5kYXRldGltZS15ZWFyLDpob3N0KC5kYXRldGltZS1wcmVzZW50YXRpb24tbW9udGgteWVhcikgLmRhdGV0aW1lLXllYXJ7bWFyZ2luLXRvcDoyMHB4O21hcmdpbi1ib3R0b206MjBweH06aG9zdCAuZGF0ZXRpbWUtYnV0dG9uc3std2Via2l0LXBhZGRpbmctc3RhcnQ6MTBweDtwYWRkaW5nLWlubGluZS1zdGFydDoxMHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTBweDtwYWRkaW5nLWlubGluZS1lbmQ6MTBweDtwYWRkaW5nLXRvcDoxMHB4O3BhZGRpbmctYm90dG9tOjEwcHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9XCI7XG5jb25zdCBJb25EYXRldGltZU1kU3R5bGUwID0gZGF0ZXRpbWVNZENzcztcbmNvbnN0IERhdGV0aW1lID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvbkNhbmNlbCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQ2FuY2VsXCIsIDcpO1xuICAgIHRoaXMuaW9uQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DaGFuZ2VcIiwgNyk7XG4gICAgdGhpcy5pb25WYWx1ZUNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uVmFsdWVDaGFuZ2VcIiwgNyk7XG4gICAgdGhpcy5pb25Gb2N1cyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uRm9jdXNcIiwgNyk7XG4gICAgdGhpcy5pb25CbHVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25CbHVyXCIsIDcpO1xuICAgIHRoaXMuaW9uU3R5bGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblN0eWxlXCIsIDcpO1xuICAgIHRoaXMuaW9uUmVuZGVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25SZW5kZXJcIiwgNyk7XG4gICAgdGhpcy5pbnB1dElkID0gYGlvbi1kdC0ke2RhdGV0aW1lSWRzKyt9YDtcbiAgICB0aGlzLnByZXZQcmVzZW50YXRpb24gPSBudWxsO1xuICAgIHRoaXMud2FybklmSW5jb3JyZWN0VmFsdWVVc2FnZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbXVsdGlwbGUsXG4gICAgICAgIHZhbHVlXG4gICAgICB9ID0gdGhpcztcbiAgICAgIGlmICghbXVsdGlwbGUgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdlIGRvIHNvbWUgcHJvY2Vzc2luZyBvbiB0aGUgYHZhbHVlYCBhcnJheSBzb1xuICAgICAgICAgKiB0aGF0IGl0IGxvb2tzIG1vcmUgbGlrZSBhbiBhcnJheSB3aGVuIGxvZ2dlZCB0b1xuICAgICAgICAgKiB0aGUgY29uc29sZS5cbiAgICAgICAgICogRXhhbXBsZSBnaXZlbiBbJ2EnLCAnYiddXG4gICAgICAgICAqIERlZmF1bHQgdG9TdHJpbmcoKSBiZWhhdmlvcjogYSxiXG4gICAgICAgICAqIEN1c3RvbSBiZWhhdmlvcjogWydhJywgJ2InXVxuICAgICAgICAgKi9cbiAgICAgICAgcHJpbnRJb25XYXJuaW5nKGBpb24tZGF0ZXRpbWUgd2FzIHBhc3NlZCBhbiBhcnJheSBvZiB2YWx1ZXMsIGJ1dCBtdWx0aXBsZT1cImZhbHNlXCIuIFRoaXMgaXMgaW5jb3JyZWN0IHVzYWdlIGFuZCBtYXkgcmVzdWx0IGluIHVuZXhwZWN0ZWQgYmVoYXZpb3JzLiBUbyBkaXNtaXNzIHRoaXMgd2FybmluZywgcGFzcyBhIHN0cmluZyB0byB0aGUgXCJ2YWx1ZVwiIHByb3BlcnR5IHdoZW4gbXVsdGlwbGU9XCJmYWxzZVwiLlxuXG4gIFZhbHVlIFBhc3NlZDogWyR7dmFsdWUubWFwKHYgPT4gYCcke3Z9J2ApLmpvaW4oJywgJyl9XVxuYCwgdGhpcy5lbCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNldFZhbHVlID0gdmFsdWUgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5pb25DaGFuZ2UuZW1pdCh7XG4gICAgICAgIHZhbHVlXG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIERhdGV0aW1lUGFydCBpbnRlcmZhY2VcbiAgICAgKiB0byB1c2Ugd2hlbiByZW5kZXJpbmcgYW4gaW5pdGlhbCBzZXQgb2ZcbiAgICAgKiBkYXRhLiBUaGlzIHNob3VsZCBiZSB1c2VkIHdoZW4gcmVuZGVyaW5nIGFuXG4gICAgICogaW50ZXJmYWNlIGluIGFuIGVudmlyb25tZW50IHdoZXJlIHRoZSBgdmFsdWVgXG4gICAgICogbWF5IG5vdCBiZSBzZXQuIFRoaXMgZnVuY3Rpb24gd29ya3NcbiAgICAgKiBieSByZXR1cm5pbmcgdGhlIGZpcnN0IHNlbGVjdGVkIGRhdGUgYW5kIHRoZW5cbiAgICAgKiBmYWxsaW5nIGJhY2sgdG8gZGVmYXVsdFBhcnRzIGlmIG5vIGFjdGl2ZSBkYXRlXG4gICAgICogaXMgc2VsZWN0ZWQuXG4gICAgICovXG4gICAgdGhpcy5nZXRBY3RpdmVQYXJ0c1dpdGhGYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIHZhciBfYTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGVmYXVsdFBhcnRzXG4gICAgICB9ID0gdGhpcztcbiAgICAgIHJldHVybiAoX2EgPSB0aGlzLmdldEFjdGl2ZVBhcnQoKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZGVmYXVsdFBhcnRzO1xuICAgIH07XG4gICAgdGhpcy5nZXRBY3RpdmVQYXJ0ID0gKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBhY3RpdmVQYXJ0c1xuICAgICAgfSA9IHRoaXM7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhY3RpdmVQYXJ0cykgPyBhY3RpdmVQYXJ0c1swXSA6IGFjdGl2ZVBhcnRzO1xuICAgIH07XG4gICAgdGhpcy5jbG9zZVBhcmVudE92ZXJsYXkgPSByb2xlID0+IHtcbiAgICAgIGNvbnN0IHBvcG92ZXJPck1vZGFsID0gdGhpcy5lbC5jbG9zZXN0KCdpb24tbW9kYWwsIGlvbi1wb3BvdmVyJyk7XG4gICAgICBpZiAocG9wb3Zlck9yTW9kYWwpIHtcbiAgICAgICAgcG9wb3Zlck9yTW9kYWwuZGlzbWlzcyh1bmRlZmluZWQsIHJvbGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zZXRXb3JraW5nUGFydHMgPSBwYXJ0cyA9PiB7XG4gICAgICB0aGlzLndvcmtpbmdQYXJ0cyA9IE9iamVjdC5hc3NpZ24oe30sIHBhcnRzKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0QWN0aXZlUGFydHMgPSAocGFydHMsIHJlbW92ZURhdGUgPSBmYWxzZSkgPT4ge1xuICAgICAgLyoqIGlmIHRoZSBkYXRldGltZSBjb21wb25lbnQgaXMgaW4gcmVhZG9ubHkgbW9kZSxcbiAgICAgICAqIGFsbG93IGJyb3dzaW5nIG9mIHRoZSBjYWxlbmRhciB3aXRob3V0IGNoYW5naW5nXG4gICAgICAgKiB0aGUgc2V0IHZhbHVlXG4gICAgICAgKi9cbiAgICAgIGlmICh0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbXVsdGlwbGUsXG4gICAgICAgIG1pblBhcnRzLFxuICAgICAgICBtYXhQYXJ0cyxcbiAgICAgICAgYWN0aXZlUGFydHNcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIHNldHRpbmcgdGhlIGFjdGl2ZSBwYXJ0cywgaXQgaXMgcG9zc2libGVcbiAgICAgICAqIHRvIHNldCBpbnZhbGlkIGRhdGEuIEZvciBleGFtcGxlLFxuICAgICAgICogd2hlbiB1cGRhdGluZyBKYW51YXJ5IDMxIHRvIEZlYnJ1YXJ5LFxuICAgICAgICogRmVicnVhcnkgMzEgZG9lcyBub3QgZXhpc3QuIEFzIGEgcmVzdWx0XG4gICAgICAgKiB3ZSBuZWVkIHRvIHZhbGlkYXRlIHRoZSBhY3RpdmUgcGFydHMgYW5kXG4gICAgICAgKiBlbnN1cmUgdGhhdCB3ZSBhcmUgb25seSBzZXR0aW5nIHZhbGlkIGRhdGVzLlxuICAgICAgICogQWRkaXRpb25hbGx5LCB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgd29ya2luZyBwYXJ0c1xuICAgICAgICogdG9vIGluIHRoZSBldmVudCB0aGF0IHRoZSB2YWxpZGF0ZWQgcGFydHMgYXJlIGRpZmZlcmVudC5cbiAgICAgICAqL1xuICAgICAgY29uc3QgdmFsaWRhdGVkUGFydHMgPSB2YWxpZGF0ZVBhcnRzKHBhcnRzLCBtaW5QYXJ0cywgbWF4UGFydHMpO1xuICAgICAgdGhpcy5zZXRXb3JraW5nUGFydHModmFsaWRhdGVkUGFydHMpO1xuICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVBhcnRzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjdGl2ZVBhcnRzKSA/IGFjdGl2ZVBhcnRzIDogW2FjdGl2ZVBhcnRzXTtcbiAgICAgICAgaWYgKHJlbW92ZURhdGUpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVBhcnRzID0gYWN0aXZlUGFydHNBcnJheS5maWx0ZXIocCA9PiAhaXNTYW1lRGF5KHAsIHZhbGlkYXRlZFBhcnRzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVQYXJ0cyA9IFsuLi5hY3RpdmVQYXJ0c0FycmF5LCB2YWxpZGF0ZWRQYXJ0c107XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWN0aXZlUGFydHMgPSBPYmplY3QuYXNzaWduKHt9LCB2YWxpZGF0ZWRQYXJ0cyk7XG4gICAgICB9XG4gICAgICBjb25zdCBoYXNTbG90dGVkQnV0dG9ucyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignW3Nsb3Q9XCJidXR0b25zXCJdJykgIT09IG51bGw7XG4gICAgICBpZiAoaGFzU2xvdHRlZEJ1dHRvbnMgfHwgdGhpcy5zaG93RGVmYXVsdEJ1dHRvbnMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jb25maXJtKCk7XG4gICAgfTtcbiAgICB0aGlzLmluaXRpYWxpemVLZXlib2FyZExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNhbGVuZGFyQm9keVJlZiA9IHRoaXMuY2FsZW5kYXJCb2R5UmVmO1xuICAgICAgaWYgKCFjYWxlbmRhckJvZHlSZWYpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuZWwuc2hhZG93Um9vdDtcbiAgICAgIC8qKlxuICAgICAgICogR2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBtb250aFxuICAgICAgICogZWxlbWVudCB3ZSBhcmUgY3VycmVudGx5IHZpZXdpbmcuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGN1cnJlbnRNb250aCA9IGNhbGVuZGFyQm9keVJlZi5xdWVyeVNlbGVjdG9yKCcuY2FsZW5kYXItbW9udGg6bnRoLW9mLXR5cGUoMiknKTtcbiAgICAgIC8qKlxuICAgICAgICogV2hlbiBmb2N1c2luZyB0aGUgY2FsZW5kYXIgYm9keSwgd2Ugd2FudCB0byBwYXNzIGZvY3VzXG4gICAgICAgKiB0byB0aGUgd29ya2luZyBkYXksIGJ1dCBvdGhlciBkYXlzIHNob3VsZFxuICAgICAgICogb25seSBiZSBhY2Nlc3NpYmxlIHVzaW5nIHRoZSBhcnJvdyBrZXlzLiBQcmVzc2luZ1xuICAgICAgICogVGFiIHNob3VsZCBqdW1wIGJldHdlZW4gYm9kaWVzIG9mIHNlbGVjdGFibGUgY29udGVudC5cbiAgICAgICAqL1xuICAgICAgY29uc3QgY2hlY2tDYWxlbmRhckJvZHlGb2N1cyA9IGV2ID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCByZWNvcmQgPSBldlswXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGNhbGVuZGFyIGJvZHkgd2FzIGFscmVhZHkgZm9jdXNlZFxuICAgICAgICAgKiB3aGVuIHRoaXMgZmlyZWQgb3IgaWYgdGhlIGNhbGVuZGFyIGJvZHlcbiAgICAgICAgICogaWYgbm90IGN1cnJlbnRseSBmb2N1c2VkLCB3ZSBzaG91bGQgbm90IHJlLWZvY3VzXG4gICAgICAgICAqIHRoZSBpbm5lciBkYXkuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoKChfYSA9IHJlY29yZC5vbGRWYWx1ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmluY2x1ZGVzKCdpb24tZm9jdXNlZCcpKSB8fCAhY2FsZW5kYXJCb2R5UmVmLmNsYXNzTGlzdC5jb250YWlucygnaW9uLWZvY3VzZWQnKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvY3VzV29ya2luZ0RheShjdXJyZW50TW9udGgpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IG1vID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2hlY2tDYWxlbmRhckJvZHlGb2N1cyk7XG4gICAgICBtby5vYnNlcnZlKGNhbGVuZGFyQm9keVJlZiwge1xuICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnY2xhc3MnXSxcbiAgICAgICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kZXN0cm95S2V5Ym9hcmRNTyA9ICgpID0+IHtcbiAgICAgICAgbW8gPT09IG51bGwgfHwgbW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIFdlIG11c3QgdXNlIGtleWRvd24gbm90IGtleXVwIGFzIHdlIHdhbnRcbiAgICAgICAqIHRvIHByZXZlbnQgc2Nyb2xsaW5nIHdoZW4gdXNpbmcgdGhlIGFycm93IGtleXMuXG4gICAgICAgKi9cbiAgICAgIGNhbGVuZGFyQm9keVJlZi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXYgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gcm9vdC5hY3RpdmVFbGVtZW50O1xuICAgICAgICBpZiAoIWFjdGl2ZUVsZW1lbnQgfHwgIWFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYWxlbmRhci1kYXknKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJ0cyA9IGdldFBhcnRzRnJvbUNhbGVuZGFyRGF5KGFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICBsZXQgcGFydHNUb0ZvY3VzO1xuICAgICAgICBzd2l0Y2ggKGV2LmtleSkge1xuICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcGFydHNUb0ZvY3VzID0gZ2V0TmV4dFdlZWsocGFydHMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcGFydHNUb0ZvY3VzID0gZ2V0UHJldmlvdXNXZWVrKHBhcnRzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHBhcnRzVG9Gb2N1cyA9IGdldE5leHREYXkocGFydHMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBwYXJ0c1RvRm9jdXMgPSBnZXRQcmV2aW91c0RheShwYXJ0cyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBwYXJ0c1RvRm9jdXMgPSBnZXRTdGFydE9mV2VlayhwYXJ0cyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdFbmQnOlxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHBhcnRzVG9Gb2N1cyA9IGdldEVuZE9mV2VlayhwYXJ0cyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdQYWdlVXAnOlxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHBhcnRzVG9Gb2N1cyA9IGV2LnNoaWZ0S2V5ID8gZ2V0UHJldmlvdXNZZWFyKHBhcnRzKSA6IGdldFByZXZpb3VzTW9udGgocGFydHMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnUGFnZURvd24nOlxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHBhcnRzVG9Gb2N1cyA9IGV2LnNoaWZ0S2V5ID8gZ2V0TmV4dFllYXIocGFydHMpIDogZ2V0TmV4dE1vbnRoKHBhcnRzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIERvIG5vdCBwcmV2ZW50RGVmYXVsdCBoZXJlXG4gICAgICAgICAgICogYXMgd2UgZG8gbm90IHdhbnQgdG8gb3ZlcnJpZGUgb3RoZXJcbiAgICAgICAgICAgKiBicm93c2VyIGRlZmF1bHRzIHN1Y2ggYXMgcHJlc3NpbmcgRW50ZXIvU3BhY2VcbiAgICAgICAgICAgKiB0byBzZWxlY3QgYSBkYXkuXG4gICAgICAgICAgICovXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdGhlIGRheSB3ZSB3YW50IHRvIG1vdmUgZm9jdXMgdG8gaXNcbiAgICAgICAgICogZGlzYWJsZWQsIGRvIG5vdCBkbyBhbnl0aGluZy5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChpc0RheURpc2FibGVkKHBhcnRzVG9Gb2N1cywgdGhpcy5taW5QYXJ0cywgdGhpcy5tYXhQYXJ0cykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRXb3JraW5nUGFydHMoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLndvcmtpbmdQYXJ0cyksIHBhcnRzVG9Gb2N1cykpO1xuICAgICAgICAvKipcbiAgICAgICAgICogR2l2ZSB2aWV3IGEgY2hhbmNlIHRvIHJlLXJlbmRlclxuICAgICAgICAgKiB0aGVuIG1vdmUgZm9jdXMgdG8gdGhlIG5ldyB3b3JraW5nIGRheVxuICAgICAgICAgKi9cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuZm9jdXNXb3JraW5nRGF5KGN1cnJlbnRNb250aCkpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLmZvY3VzV29ya2luZ0RheSA9IGN1cnJlbnRNb250aCA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIEdldCB0aGUgbnVtYmVyIG9mIHBhZGRpbmcgZGF5cyBzb1xuICAgICAgICogd2Uga25vdyBob3cgbXVjaCB0byBvZmZzZXQgb3VyIG5leHQgc2VsZWN0b3IgYnlcbiAgICAgICAqIHRvIGdyYWIgdGhlIGNvcnJlY3QgY2FsZW5kYXItZGF5IGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHBhZGRpbmcgPSBjdXJyZW50TW9udGgucXVlcnlTZWxlY3RvckFsbCgnLmNhbGVuZGFyLWRheS1wYWRkaW5nJyk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRheVxuICAgICAgfSA9IHRoaXMud29ya2luZ1BhcnRzO1xuICAgICAgaWYgKGRheSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEdldCB0aGUgY2FsZW5kYXIgZGF5IGVsZW1lbnRcbiAgICAgICAqIGFuZCBmb2N1cyBpdC5cbiAgICAgICAqL1xuICAgICAgY29uc3QgZGF5RWwgPSBjdXJyZW50TW9udGgucXVlcnlTZWxlY3RvcihgLmNhbGVuZGFyLWRheS13cmFwcGVyOm50aC1vZi10eXBlKCR7cGFkZGluZy5sZW5ndGggKyBkYXl9KSAuY2FsZW5kYXItZGF5YCk7XG4gICAgICBpZiAoZGF5RWwpIHtcbiAgICAgICAgZGF5RWwuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucHJvY2Vzc01pblBhcnRzID0gKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBtaW4sXG4gICAgICAgIGRlZmF1bHRQYXJ0c1xuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAobWluID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5taW5QYXJ0cyA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5taW5QYXJ0cyA9IHBhcnNlTWluUGFydHMobWluLCBkZWZhdWx0UGFydHMpO1xuICAgIH07XG4gICAgdGhpcy5wcm9jZXNzTWF4UGFydHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1heCxcbiAgICAgICAgZGVmYXVsdFBhcnRzXG4gICAgICB9ID0gdGhpcztcbiAgICAgIGlmIChtYXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm1heFBhcnRzID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm1heFBhcnRzID0gcGFyc2VNYXhQYXJ0cyhtYXgsIGRlZmF1bHRQYXJ0cyk7XG4gICAgfTtcbiAgICB0aGlzLmluaXRpYWxpemVDYWxlbmRhckxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2FsZW5kYXJCb2R5UmVmID0gdGhpcy5jYWxlbmRhckJvZHlSZWY7XG4gICAgICBpZiAoIWNhbGVuZGFyQm9keVJlZikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEZvciBwZXJmb3JtYW5jZSByZWFzb25zLCB3ZSBvbmx5IHJlbmRlciAzXG4gICAgICAgKiBtb250aHMgYXQgYSB0aW1lOiBUaGUgY3VycmVudCBtb250aCwgdGhlIHByZXZpb3VzXG4gICAgICAgKiBtb250aCwgYW5kIHRoZSBuZXh0IG1vbnRoLiBXZSBoYXZlIGEgc2Nyb2xsIGxpc3RlbmVyXG4gICAgICAgKiBvbiB0aGUgY2FsZW5kYXIgYm9keSB0byBhcHBlbmQvcHJlcGVuZCBuZXcgbW9udGhzLlxuICAgICAgICpcbiAgICAgICAqIFdlIGNhbiBkbyB0aGlzIGJlY2F1c2UgU3RlbmNpbCBpcyBzbWFydCBlbm91Z2ggdG8gbm90XG4gICAgICAgKiByZS1jcmVhdGUgdGhlIC5jYWxlbmRhci1tb250aCBjb250YWluZXJzLCBidXQgcmF0aGVyXG4gICAgICAgKiB1cGRhdGUgdGhlIGNvbnRlbnQgd2l0aGluIHRob3NlIGNvbnRhaW5lcnMuXG4gICAgICAgKlxuICAgICAgICogQXMgYW4gYWRkZWQgYm9udXMsIFdlYktpdCBoYXMgc29tZSB0cm91YmxlcyB3aXRoXG4gICAgICAgKiBzY3JvbGwtc25hcC1zdG9wOiBhbHdheXMsIHNvIG5vdCByZW5kZXJpbmcgYWxsIG9mXG4gICAgICAgKiB0aGUgbW9udGhzIGluIGEgcm93IGFsbG93cyB1cyB0byBtb3N0bHkgc2lkZXN0ZXBcbiAgICAgICAqIHRoYXQgaXNzdWUuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IG1vbnRocyA9IGNhbGVuZGFyQm9keVJlZi5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsZW5kYXItbW9udGgnKTtcbiAgICAgIGNvbnN0IHN0YXJ0TW9udGggPSBtb250aHNbMF07XG4gICAgICBjb25zdCB3b3JraW5nTW9udGggPSBtb250aHNbMV07XG4gICAgICBjb25zdCBlbmRNb250aCA9IG1vbnRoc1syXTtcbiAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgY29uc3QgbmVlZHNpT1NSdWJiZXJCYW5kRml4ID0gbW9kZSA9PT0gJ2lvcycgJiYgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMTtcbiAgICAgIC8qKlxuICAgICAgICogQmVmb3JlIHNldHRpbmcgdXAgdGhlIHNjcm9sbCBsaXN0ZW5lcixcbiAgICAgICAqIHNjcm9sbCB0aGUgbWlkZGxlIG1vbnRoIGludG8gdmlldy5cbiAgICAgICAqIHNjcm9sbEludG9WaWV3KCkgd2lsbCBzY3JvbGwgZW50aXJlIHBhZ2VcbiAgICAgICAqIGlmIGVsZW1lbnQgaXMgbm90IGluIHZpZXdwb3J0LiBVc2Ugc2Nyb2xsTGVmdCBpbnN0ZWFkLlxuICAgICAgICovXG4gICAgICB3cml0ZVRhc2soKCkgPT4ge1xuICAgICAgICBjYWxlbmRhckJvZHlSZWYuc2Nyb2xsTGVmdCA9IHN0YXJ0TW9udGguY2xpZW50V2lkdGggKiAoaXNSVEwodGhpcy5lbCkgPyAtMSA6IDEpO1xuICAgICAgICBjb25zdCBnZXRDaGFuZ2VkTW9udGggPSBwYXJ0cyA9PiB7XG4gICAgICAgICAgY29uc3QgYm94ID0gY2FsZW5kYXJCb2R5UmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBpcyBhbGwgdGhlIHdheSB0byB0aGUgbGVmdFxuICAgICAgICAgICAqIHRoZW4gd2UgaGF2ZSBzY3JvbGxlZCB0byB0aGUgcHJldmlvdXMgbW9udGguXG4gICAgICAgICAgICogT3RoZXJ3aXNlLCBhc3N1bWUgdGhhdCB3ZSBoYXZlIHNjcm9sbGVkIHRvIHRoZSBuZXh0XG4gICAgICAgICAgICogbW9udGguIFdlIGhhdmUgYSB0b2xlcmFuY2Ugb2YgMnB4IHRvIGFjY291bnQgZm9yXG4gICAgICAgICAgICogc3ViIHBpeGVsIHJlbmRlcmluZy5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIENoZWNrIGJlbG93IHRoZSBuZXh0IGxpbmUgZW5zdXJlcyB0aGF0IHdlIGRpZCBub3RcbiAgICAgICAgICAgKiBzd2lwZSBhbmQgYWJvcnQgKGkuZS4gd2Ugc3dpcGVkIGJ1dCB3ZSBhcmUgc3RpbGwgb24gdGhlIGN1cnJlbnQgbW9udGgpLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IGlzUlRMKHRoaXMuZWwpID8gY2FsZW5kYXJCb2R5UmVmLnNjcm9sbExlZnQgPj0gLTIgOiBjYWxlbmRhckJvZHlSZWYuc2Nyb2xsTGVmdCA8PSAyO1xuICAgICAgICAgIGNvbnN0IG1vbnRoID0gY29uZGl0aW9uID8gc3RhcnRNb250aCA6IGVuZE1vbnRoO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRoZSBlZGdlIG9mIHRoZSBtb250aCBtdXN0IGJlIGxpbmVkIHVwIHdpdGhcbiAgICAgICAgICAgKiB0aGUgZWRnZSBvZiB0aGUgY2FsZW5kYXIgYm9keSBpbiBvcmRlciBmb3JcbiAgICAgICAgICAgKiB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZS4gT3RoZXJ3aXNlLCBpdFxuICAgICAgICAgICAqIG1heSBiZSB0aGUgY2FzZSB0aGF0IHRoZSB1c2VyIGhhcyBwYXVzZWQgdGhlaXJcbiAgICAgICAgICAgKiBzd2lwZSBvciB0aGUgYnJvd3NlciBoYXMgbm90IGZpbmlzaGVkIHNuYXBwaW5nIHlldC5cbiAgICAgICAgICAgKiBSYXRoZXIgdGhhbiBjaGVjayBpZiB0aGUgeCB2YWx1ZXMgYXJlIGVxdWFsLFxuICAgICAgICAgICAqIHdlIGdpdmUgaXQgYSB0b2xlcmFuY2Ugb2YgMnB4IHRvIGFjY291bnQgZm9yXG4gICAgICAgICAgICogc3ViIHBpeGVsIHJlbmRlcmluZy5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBjb25zdCBtb250aEJveCA9IG1vbnRoLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGlmIChNYXRoLmFicyhtb250aEJveC54IC0gYm94LngpID4gMikgcmV0dXJuO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIHdlJ3JlIGZvcmNlLXJlbmRlcmluZyBhIG1vbnRoLCBhc3N1bWUgd2UndmVcbiAgICAgICAgICAgKiBzY3JvbGxlZCB0byB0aGF0IGFuZCByZXR1cm4gaXQuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBJZiBmb3JjZVJlbmRlckRhdGUgaXMgZXZlciB1c2VkIGluIGEgY29udGV4dCB3aGVyZSB0aGVcbiAgICAgICAgICAgKiBmb3JjZWQgbW9udGggaXMgbm90IGltbWVkaWF0ZWx5IGF1dG8tc2Nyb2xsZWQgdG8sIHRoaXNcbiAgICAgICAgICAgKiBzaG91bGQgYmUgdXBkYXRlZCB0byBhbHNvIGNoZWNrIHdoZXRoZXIgYG1vbnRoYCBoYXMgdGhlXG4gICAgICAgICAgICogc2FtZSBtb250aCBhbmQgeWVhciBhcyB0aGUgZm9yY2VkIGRhdGUuXG4gICAgICAgICAgICovXG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZm9yY2VSZW5kZXJEYXRlXG4gICAgICAgICAgfSA9IHRoaXM7XG4gICAgICAgICAgaWYgKGZvcmNlUmVuZGVyRGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtb250aDogZm9yY2VSZW5kZXJEYXRlLm1vbnRoLFxuICAgICAgICAgICAgICB5ZWFyOiBmb3JjZVJlbmRlckRhdGUueWVhcixcbiAgICAgICAgICAgICAgZGF5OiBmb3JjZVJlbmRlckRhdGUuZGF5XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBGcm9tIGhlcmUsIHdlIGNhbiBkZXRlcm1pbmUgaWYgdGhlIHN0YXJ0XG4gICAgICAgICAgICogbW9udGggb3IgdGhlIGVuZCBtb250aCB3YXMgc2Nyb2xsZWQgaW50byB2aWV3LlxuICAgICAgICAgICAqIElmIG5vIG1vbnRoIHdhcyBjaGFuZ2VkLCB0aGVuIHdlIGNhbiByZXR1cm4gZnJvbVxuICAgICAgICAgICAqIHRoZSBzY3JvbGwgY2FsbGJhY2sgZWFybHkuXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKG1vbnRoID09PSBzdGFydE1vbnRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0UHJldmlvdXNNb250aChwYXJ0cyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtb250aCA9PT0gZW5kTW9udGgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXROZXh0TW9udGgocGFydHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB1cGRhdGVBY3RpdmVNb250aCA9ICgpID0+IHtcbiAgICAgICAgICBpZiAobmVlZHNpT1NSdWJiZXJCYW5kRml4KSB7XG4gICAgICAgICAgICBjYWxlbmRhckJvZHlSZWYuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BvaW50ZXItZXZlbnRzJyk7XG4gICAgICAgICAgICBhcHBsaWVkaU9TUnViYmVyQmFuZEZpeCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJZiB0aGUgbW9udGggZGlkIG5vdCBjaGFuZ2VcbiAgICAgICAgICAgKiB0aGVuIHdlIGNhbiByZXR1cm4gZWFybHkuXG4gICAgICAgICAgICovXG4gICAgICAgICAgY29uc3QgbmV3RGF0ZSA9IGdldENoYW5nZWRNb250aCh0aGlzLndvcmtpbmdQYXJ0cyk7XG4gICAgICAgICAgaWYgKCFuZXdEYXRlKSByZXR1cm47XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgbW9udGgsXG4gICAgICAgICAgICBkYXksXG4gICAgICAgICAgICB5ZWFyXG4gICAgICAgICAgfSA9IG5ld0RhdGU7XG4gICAgICAgICAgaWYgKGlzTW9udGhEaXNhYmxlZCh7XG4gICAgICAgICAgICBtb250aCxcbiAgICAgICAgICAgIHllYXIsXG4gICAgICAgICAgICBkYXk6IG51bGxcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBtaW5QYXJ0czogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLm1pblBhcnRzKSwge1xuICAgICAgICAgICAgICBkYXk6IG51bGxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbWF4UGFydHM6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5tYXhQYXJ0cyksIHtcbiAgICAgICAgICAgICAgZGF5OiBudWxsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFByZXZlbnQgc2Nyb2xsaW5nIGZvciBvdGhlciBicm93c2Vyc1xuICAgICAgICAgICAqIHRvIGdpdmUgdGhlIERPTSB0aW1lIHRvIHVwZGF0ZSBhbmQgdGhlIGNvbnRhaW5lclxuICAgICAgICAgICAqIHRpbWUgdG8gcHJvcGVybHkgc25hcC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBjYWxlbmRhckJvZHlSZWYuc3R5bGUuc2V0UHJvcGVydHkoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFVzZSBhIHdyaXRlVGFzayBoZXJlIHRvIGVuc3VyZVxuICAgICAgICAgICAqIHRoYXQgdGhlIHN0YXRlIGlzIHVwZGF0ZWQgYW5kIHRoZVxuICAgICAgICAgICAqIGNvcnJlY3QgbW9udGggaXMgc2Nyb2xsZWQgaW50byB2aWV3XG4gICAgICAgICAgICogaW4gdGhlIHNhbWUgZnJhbWUuIFRoaXMgaXMgbm90XG4gICAgICAgICAgICogdHlwaWNhbGx5IGEgcHJvYmxlbSBvbiBuZXdlciBkZXZpY2VzXG4gICAgICAgICAgICogYnV0IG9sZGVyL3Nsb3dlciBkZXZpY2UgbWF5IGhhdmUgYSBmbGlja2VyXG4gICAgICAgICAgICogaWYgd2UgZGlkIG5vdCBkbyB0aGlzLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHdyaXRlVGFzaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFdvcmtpbmdQYXJ0cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMud29ya2luZ1BhcnRzKSwge1xuICAgICAgICAgICAgICBtb250aCxcbiAgICAgICAgICAgICAgZGF5OiBkYXksXG4gICAgICAgICAgICAgIHllYXJcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIGNhbGVuZGFyQm9keVJlZi5zY3JvbGxMZWZ0ID0gd29ya2luZ01vbnRoLmNsaWVudFdpZHRoICogKGlzUlRMKHRoaXMuZWwpID8gLTEgOiAxKTtcbiAgICAgICAgICAgIGNhbGVuZGFyQm9keVJlZi5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc29sdmVGb3JjZURhdGVTY3JvbGxpbmcpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlRm9yY2VEYXRlU2Nyb2xsaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIHRoZSBjb250YWluZXIgZmluaXNoZXMgc2Nyb2xsaW5nIHdlXG4gICAgICAgICAqIG5lZWQgdG8gdXBkYXRlIHRoZSBET00gd2l0aCB0aGUgc2VsZWN0ZWQgbW9udGguXG4gICAgICAgICAqL1xuICAgICAgICBsZXQgc2Nyb2xsVGltZW91dDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdlIGRvIG5vdCB3YW50IHRvIGF0dGVtcHQgdG8gc2V0IHBvaW50ZXItZXZlbnRzXG4gICAgICAgICAqIG11bHRpcGxlIHRpbWVzIHdpdGhpbiBhIHNpbmdsZSBzd2lwZSBnZXN0dXJlIGFzXG4gICAgICAgICAqIHRoYXQgYWRkcyB1bm5lY2Vzc2FyeSB3b3JrIHRvIHRoZSBtYWluIHRocmVhZC5cbiAgICAgICAgICovXG4gICAgICAgIGxldCBhcHBsaWVkaU9TUnViYmVyQmFuZEZpeCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBzY3JvbGxDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoc2Nyb2xsVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNjcm9sbFRpbWVvdXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBPbiBpT1MgaXQgaXMgcG9zc2libGUgdG8gcXVpY2tseSBydWJiZXIgYmFuZFxuICAgICAgICAgICAqIHRoZSBzY3JvbGwgYXJlYSBiZWZvcmUgdGhlIHNjcm9sbCB0aW1lb3V0IGhhcyBmaXJlZC5cbiAgICAgICAgICAgKiBUaGlzIHJlc3VsdHMgaW4gdXNlcnMgcmVhY2hpbmcgdGhlIGVuZCBvZiB0aGUgc2Nyb2xsYWJsZVxuICAgICAgICAgICAqIGNvbnRhaW5lciBiZWZvcmUgdGhlIERPTSBoYXMgdXBkYXRlZC5cbiAgICAgICAgICAgKiBCeSBzZXR0aW5nIGBwb2ludGVyLWV2ZW50czogbm9uZWAgd2UgY2FuIGVuc3VyZSB0aGF0XG4gICAgICAgICAgICogc3Vic2VxdWVudCBzd2lwZXMgZG8gbm90IGhhcHBlbiB3aGlsZSB0aGUgY29udGFpbmVyXG4gICAgICAgICAgICogaXMgc25hcHBpbmcuXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKCFhcHBsaWVkaU9TUnViYmVyQmFuZEZpeCAmJiBuZWVkc2lPU1J1YmJlckJhbmRGaXgpIHtcbiAgICAgICAgICAgIGNhbGVuZGFyQm9keVJlZi5zdHlsZS5zZXRQcm9wZXJ0eSgncG9pbnRlci1ldmVudHMnLCAnbm9uZScpO1xuICAgICAgICAgICAgYXBwbGllZGlPU1J1YmJlckJhbmRGaXggPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBXYWl0IH4zIGZyYW1lc1xuICAgICAgICAgIHNjcm9sbFRpbWVvdXQgPSBzZXRUaW1lb3V0KHVwZGF0ZUFjdGl2ZU1vbnRoLCA1MCk7XG4gICAgICAgIH07XG4gICAgICAgIGNhbGVuZGFyQm9keVJlZi5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxDYWxsYmFjayk7XG4gICAgICAgIHRoaXMuZGVzdHJveUNhbGVuZGFyTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgY2FsZW5kYXJCb2R5UmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbENhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xlYW4gdXAgYWxsIGxpc3RlbmVycyBleGNlcHQgZm9yIHRoZSBvdmVybGF5XG4gICAgICogbGlzdGVuZXIuIFRoaXMgaXMgc28gdGhhdCB3ZSBjYW4gcmUtY3JlYXRlIHRoZSBsaXN0ZW5lcnNcbiAgICAgKiBpZiB0aGUgZGF0ZXRpbWUgaGFzIGJlZW4gaGlkZGVuL3ByZXNlbnRlZCBieSBhIG1vZGFsIG9yIHBvcG92ZXIuXG4gICAgICovXG4gICAgdGhpcy5kZXN0cm95SW50ZXJhY3Rpb25MaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRlc3Ryb3lDYWxlbmRhckxpc3RlbmVyLFxuICAgICAgICBkZXN0cm95S2V5Ym9hcmRNT1xuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAoZGVzdHJveUNhbGVuZGFyTGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZXN0cm95Q2FsZW5kYXJMaXN0ZW5lcigpO1xuICAgICAgfVxuICAgICAgaWYgKGRlc3Ryb3lLZXlib2FyZE1PICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVzdHJveUtleWJvYXJkTU8oKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucHJvY2Vzc1ZhbHVlID0gdmFsdWUgPT4ge1xuICAgICAgY29uc3QgaGFzVmFsdWUgPSB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSAnJyAmJiAoIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA+IDApO1xuICAgICAgY29uc3QgdmFsdWVUb1Byb2Nlc3MgPSBoYXNWYWx1ZSA/IHBhcnNlRGF0ZSh2YWx1ZSkgOiB0aGlzLmRlZmF1bHRQYXJ0cztcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbWluUGFydHMsXG4gICAgICAgIG1heFBhcnRzLFxuICAgICAgICB3b3JraW5nUGFydHMsXG4gICAgICAgIGVsXG4gICAgICB9ID0gdGhpcztcbiAgICAgIHRoaXMud2FybklmSW5jb3JyZWN0VmFsdWVVc2FnZSgpO1xuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm4gZWFybHkgaWYgdGhlIHZhbHVlIHdhc24ndCBwYXJzZWQgY29ycmVjdGx5LCBzdWNoIGFzXG4gICAgICAgKiBpZiBhbiBpbXByb3Blcmx5IGZvcm1hdHRlZCBkYXRlIHN0cmluZyB3YXMgcHJvdmlkZWQuXG4gICAgICAgKi9cbiAgICAgIGlmICghdmFsdWVUb1Byb2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBEYXRldGltZSBzaG91bGQgb25seSB3YXJuIG9mIG91dCBvZiBib3VuZHMgdmFsdWVzXG4gICAgICAgKiBpZiBzZXQgYnkgdGhlIHVzZXIuIElmIHRoZSBgdmFsdWVgIGlzIHVuZGVmaW5lZCxcbiAgICAgICAqIHdlIHdpbGwgZGVmYXVsdCB0byB0b2RheSdzIGRhdGUgd2hpY2ggbWF5IGJlIG91dFxuICAgICAgICogb2YgYm91bmRzLiBJbiB0aGlzIGNhc2UsIHRoZSB3YXJuaW5nIG1ha2VzIGl0IGxvb2tcbiAgICAgICAqIGxpa2UgdGhlIGRldmVsb3BlciBkaWQgc29tZXRoaW5nIHdyb25nIHdoaWNoIGlzXG4gICAgICAgKiBub3QgdHJ1ZS5cbiAgICAgICAqL1xuICAgICAgaWYgKGhhc1ZhbHVlKSB7XG4gICAgICAgIHdhcm5JZlZhbHVlT3V0T2ZCb3VuZHModmFsdWVUb1Byb2Nlc3MsIG1pblBhcnRzLCBtYXhQYXJ0cyk7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZXJlIGFyZSBtdWx0aXBsZSB2YWx1ZXMsIHBpY2sgYW4gYXJiaXRyYXJ5IG9uZSB0byBjbGFtcCB0by4gVGhpcyB3YXksXG4gICAgICAgKiBpZiB0aGUgdmFsdWVzIGFyZSBhY3Jvc3MgbW9udGhzLCB3ZSBhbHdheXMgc2hvdyBhdCBsZWFzdCBvbmUgb2YgdGhlbS4gTm90ZVxuICAgICAgICogdGhhdCB0aGUgdmFsdWVzIGRvbid0IG5lY2Vzc2FyaWx5IGhhdmUgdG8gYmUgaW4gb3JkZXIuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHNpbmdsZVZhbHVlID0gQXJyYXkuaXNBcnJheSh2YWx1ZVRvUHJvY2VzcykgPyB2YWx1ZVRvUHJvY2Vzc1swXSA6IHZhbHVlVG9Qcm9jZXNzO1xuICAgICAgY29uc3QgdGFyZ2V0VmFsdWUgPSBjbGFtcERhdGUoc2luZ2xlVmFsdWUsIG1pblBhcnRzLCBtYXhQYXJ0cyk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1vbnRoLFxuICAgICAgICBkYXksXG4gICAgICAgIHllYXIsXG4gICAgICAgIGhvdXIsXG4gICAgICAgIG1pbnV0ZVxuICAgICAgfSA9IHRhcmdldFZhbHVlO1xuICAgICAgY29uc3QgYW1wbSA9IHBhcnNlQW1QbShob3VyKTtcbiAgICAgIC8qKlxuICAgICAgICogU2luY2UgYGFjdGl2ZVBhcnRzYCBpbmRpY2F0ZXMgYSB2YWx1ZSB0aGF0XG4gICAgICAgKiBiZWVuIGV4cGxpY2l0bHkgc2VsZWN0ZWQgZWl0aGVyIGJ5IHRoZVxuICAgICAgICogdXNlciBvciB0aGUgYXBwLCBvbmx5IHVwZGF0ZSBgYWN0aXZlUGFydHNgXG4gICAgICAgKiBpZiB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBpcyBzZXQuXG4gICAgICAgKi9cbiAgICAgIGlmIChoYXNWYWx1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZVRvUHJvY2VzcykpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVBhcnRzID0gWy4uLnZhbHVlVG9Qcm9jZXNzXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVBhcnRzID0ge1xuICAgICAgICAgICAgbW9udGgsXG4gICAgICAgICAgICBkYXksXG4gICAgICAgICAgICB5ZWFyLFxuICAgICAgICAgICAgaG91cixcbiAgICAgICAgICAgIG1pbnV0ZSxcbiAgICAgICAgICAgIGFtcG1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVzZXQgdGhlIGFjdGl2ZSBwYXJ0cyBpZiB0aGUgdmFsdWUgaXMgbm90IHNldC5cbiAgICAgICAgICogVGhpcyB3aWxsIGNsZWFyIHRoZSBzZWxlY3RlZCBjYWxlbmRhciBkYXkgd2hlblxuICAgICAgICAgKiBwZXJmb3JtaW5nIGEgY2xlYXIgYWN0aW9uIG9yIHVzaW5nIHRoZSByZXNldCgpIG1ldGhvZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWN0aXZlUGFydHMgPSBbXTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogT25seSBhbmltYXRlIGlmOlxuICAgICAgICogMS4gV2UncmUgdXNpbmcgZ3JpZCBzdHlsZSAod2hlZWwgc3R5bGUgcGlja2VycyBzaG91bGQganVzdCBqdW1wIHRvIG5ldyB2YWx1ZSlcbiAgICAgICAqIDIuIFRoZSBtb250aCBhbmQvb3IgeWVhciBhY3R1YWxseSBjaGFuZ2VkLCBhbmQgYm90aCBhcmUgZGVmaW5lZCAob3RoZXJ3aXNlIHRoZXJlJ3Mgbm90aGluZyB0byBhbmltYXRlIHRvKVxuICAgICAgICogMy4gVGhlIGNhbGVuZGFyIGJvZHkgaXMgdmlzaWJsZSAocHJldmVudHMgYW5pbWF0aW9uIHdoZW4gaW4gY29sbGFwc2VkIGRhdGV0aW1lLWJ1dHRvbiwgZm9yIGV4YW1wbGUpXG4gICAgICAgKiA0LiBUaGUgbW9udGgveWVhciBwaWNrZXIgaXMgbm90IG9wZW4gKHNpbmNlIHlvdSB3b3VsZG4ndCBzZWUgdGhlIGFuaW1hdGlvbiBhbnl3YXkpXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGRpZENoYW5nZU1vbnRoID0gbW9udGggIT09IHVuZGVmaW5lZCAmJiBtb250aCAhPT0gd29ya2luZ1BhcnRzLm1vbnRoIHx8IHllYXIgIT09IHVuZGVmaW5lZCAmJiB5ZWFyICE9PSB3b3JraW5nUGFydHMueWVhcjtcbiAgICAgIGNvbnN0IGJvZHlJc1Zpc2libGUgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2RhdGV0aW1lLXJlYWR5Jyk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGlzR3JpZFN0eWxlLFxuICAgICAgICBzaG93TW9udGhBbmRZZWFyXG4gICAgICB9ID0gdGhpcztcbiAgICAgIGxldCBhcmVBbGxTZWxlY3RlZERhdGVzSW5TYW1lTW9udGggPSB0cnVlO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVUb1Byb2Nlc3MpKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TW9udGggPSB2YWx1ZVRvUHJvY2Vzc1swXS5tb250aDtcbiAgICAgICAgZm9yIChjb25zdCBkYXRlIG9mIHZhbHVlVG9Qcm9jZXNzKSB7XG4gICAgICAgICAgaWYgKGRhdGUubW9udGggIT09IGZpcnN0TW9udGgpIHtcbiAgICAgICAgICAgIGFyZUFsbFNlbGVjdGVkRGF0ZXNJblNhbWVNb250aCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgZGF0ZSBzZWxlY3RlZFxuICAgICAgICogYW5kIHRoZSBkYXRlcyBhcmVuJ3QgYWxsIGluIHRoZSBzYW1lIG1vbnRoLFxuICAgICAgICogdGhlbiB3ZSBzaG91bGQgbmVpdGhlciBhbmltYXRlIHRvIHRoZSBkYXRlXG4gICAgICAgKiBub3IgdXBkYXRlIHRoZSB3b3JraW5nIHBhcnRzIGJlY2F1c2Ugd2UgZG9cbiAgICAgICAqIG5vdCBrbm93IHdoaWNoIGRhdGUgdGhlIHVzZXIgd2FudHMgdG8gdmlldy5cbiAgICAgICAqL1xuICAgICAgaWYgKGFyZUFsbFNlbGVjdGVkRGF0ZXNJblNhbWVNb250aCkge1xuICAgICAgICBpZiAoaXNHcmlkU3R5bGUgJiYgZGlkQ2hhbmdlTW9udGggJiYgYm9keUlzVmlzaWJsZSAmJiAhc2hvd01vbnRoQW5kWWVhcikge1xuICAgICAgICAgIHRoaXMuYW5pbWF0ZVRvRGF0ZSh0YXJnZXRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogV2Ugb25seSBuZWVkIHRvIGRvIHRoaXMgaWYgd2UgZGlkbid0IGp1c3QgYW5pbWF0ZSB0byBhIG5ldyBtb250aCxcbiAgICAgICAgICAgKiBzaW5jZSB0aGF0IGNhbGxzIHByZXZNb250aC9uZXh0TW9udGggd2hpY2ggY2FsbHMgc2V0V29ya2luZ1BhcnRzIGZvciB1cy5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICB0aGlzLnNldFdvcmtpbmdQYXJ0cyh7XG4gICAgICAgICAgICBtb250aCxcbiAgICAgICAgICAgIGRheSxcbiAgICAgICAgICAgIHllYXIsXG4gICAgICAgICAgICBob3VyLFxuICAgICAgICAgICAgbWludXRlLFxuICAgICAgICAgICAgYW1wbVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmFuaW1hdGVUb0RhdGUgPSBhc3luYyB0YXJnZXRWYWx1ZSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHdvcmtpbmdQYXJ0c1xuICAgICAgfSA9IHRoaXM7XG4gICAgICAvKipcbiAgICAgICAqIFRlbGwgb3RoZXIgcmVuZGVyIGZ1bmN0aW9ucyB0aGF0IHdlIG5lZWQgdG8gZm9yY2UgdGhlXG4gICAgICAgKiB0YXJnZXQgbW9udGggdG8gYXBwZWFyIGluIHBsYWNlIG9mIHRoZSBhY3R1YWwgbmV4dC9wcmV2IG1vbnRoLlxuICAgICAgICogQmVjYXVzZSB0aGlzIGlzIGEgU3RhdGUgdmFyaWFibGUsIGEgcmVyZW5kZXIgd2lsbCBiZSB0cmlnZ2VyZWRcbiAgICAgICAqIGF1dG9tYXRpY2FsbHksIHVwZGF0aW5nIHRoZSByZW5kZXJlZCBtb250aHMuXG4gICAgICAgKi9cbiAgICAgIHRoaXMuZm9yY2VSZW5kZXJEYXRlID0gdGFyZ2V0VmFsdWU7XG4gICAgICAvKipcbiAgICAgICAqIEZsYWcgdGhhdCB3ZSd2ZSBzdGFydGVkIHNjcm9sbGluZyB0byB0aGUgZm9yY2VkIGRhdGUuXG4gICAgICAgKiBUaGUgcmVzb2x2ZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBieSB0aGUgZGF0ZXRpbWUnc1xuICAgICAgICogc2Nyb2xsIGxpc3RlbmVyIHdoZW4gaXQncyBkb25lIHVwZGF0aW5nIGV2ZXJ5dGhpbmcuXG4gICAgICAgKiBUaGlzIGlzIGEgcmVwbGFjZW1lbnQgZm9yIG1ha2luZyBwcmV2L25leHRNb250aCBhc3luYyxcbiAgICAgICAqIHNpbmNlIHRoZSBsb2dpYyB3ZSdyZSB3YWl0aW5nIG9uIGlzIGluIGEgbGlzdGVuZXIuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGZvcmNlRGF0ZVNjcm9sbGluZ1Byb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgdGhpcy5yZXNvbHZlRm9yY2VEYXRlU2Nyb2xsaW5nID0gcmVzb2x2ZTtcbiAgICAgIH0pO1xuICAgICAgLyoqXG4gICAgICAgKiBBbmltYXRlIHNtb290aGx5IHRvIHRoZSBmb3JjZWQgbW9udGguIFRoaXMgd2lsbCBhbHNvIHVwZGF0ZVxuICAgICAgICogd29ya2luZ1BhcnRzIGFuZCBjb3JyZWN0IHRoZSBzdXJyb3VuZGluZyBtb250aHMgZm9yIHVzLlxuICAgICAgICovXG4gICAgICBjb25zdCB0YXJnZXRNb250aElzQmVmb3JlID0gaXNCZWZvcmUodGFyZ2V0VmFsdWUsIHdvcmtpbmdQYXJ0cyk7XG4gICAgICB0YXJnZXRNb250aElzQmVmb3JlID8gdGhpcy5wcmV2TW9udGgoKSA6IHRoaXMubmV4dE1vbnRoKCk7XG4gICAgICBhd2FpdCBmb3JjZURhdGVTY3JvbGxpbmdQcm9taXNlO1xuICAgICAgdGhpcy5yZXNvbHZlRm9yY2VEYXRlU2Nyb2xsaW5nID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5mb3JjZVJlbmRlckRhdGUgPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICB0aGlzLm9uRm9jdXMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmlvbkZvY3VzLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMub25CbHVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5pb25CbHVyLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuaGFzVmFsdWUgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZSAhPSBudWxsO1xuICAgIH07XG4gICAgdGhpcy5uZXh0TW9udGggPSAoKSA9PiB7XG4gICAgICBjb25zdCBjYWxlbmRhckJvZHlSZWYgPSB0aGlzLmNhbGVuZGFyQm9keVJlZjtcbiAgICAgIGlmICghY2FsZW5kYXJCb2R5UmVmKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5leHRNb250aCA9IGNhbGVuZGFyQm9keVJlZi5xdWVyeVNlbGVjdG9yKCcuY2FsZW5kYXItbW9udGg6bGFzdC1vZi10eXBlJyk7XG4gICAgICBpZiAoIW5leHRNb250aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBsZWZ0ID0gbmV4dE1vbnRoLm9mZnNldFdpZHRoICogMjtcbiAgICAgIGNhbGVuZGFyQm9keVJlZi5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogbGVmdCAqIChpc1JUTCh0aGlzLmVsKSA/IC0xIDogMSksXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLnByZXZNb250aCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNhbGVuZGFyQm9keVJlZiA9IHRoaXMuY2FsZW5kYXJCb2R5UmVmO1xuICAgICAgaWYgKCFjYWxlbmRhckJvZHlSZWYpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcHJldk1vbnRoID0gY2FsZW5kYXJCb2R5UmVmLnF1ZXJ5U2VsZWN0b3IoJy5jYWxlbmRhci1tb250aDpmaXJzdC1vZi10eXBlJyk7XG4gICAgICBpZiAoIXByZXZNb250aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjYWxlbmRhckJvZHlSZWYuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLnRvZ2dsZU1vbnRoQW5kWWVhclZpZXcgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNob3dNb250aEFuZFllYXIgPSAhdGhpcy5zaG93TW9udGhBbmRZZWFyO1xuICAgIH07XG4gICAgdGhpcy5zaG93TW9udGhBbmRZZWFyID0gZmFsc2U7XG4gICAgdGhpcy5hY3RpdmVQYXJ0cyA9IFtdO1xuICAgIHRoaXMud29ya2luZ1BhcnRzID0ge1xuICAgICAgbW9udGg6IDUsXG4gICAgICBkYXk6IDI4LFxuICAgICAgeWVhcjogMjAyMSxcbiAgICAgIGhvdXI6IDEzLFxuICAgICAgbWludXRlOiA1MixcbiAgICAgIGFtcG06ICdwbSdcbiAgICB9O1xuICAgIHRoaXMuaXNUaW1lUG9wb3Zlck9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmZvcmNlUmVuZGVyRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbG9yID0gJ3ByaW1hcnknO1xuICAgIHRoaXMubmFtZSA9IHRoaXMuaW5wdXRJZDtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb3JtYXRPcHRpb25zID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmVhZG9ubHkgPSBmYWxzZTtcbiAgICB0aGlzLmlzRGF0ZUVuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW4gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tYXggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wcmVzZW50YXRpb24gPSAnZGF0ZS10aW1lJztcbiAgICB0aGlzLmNhbmNlbFRleHQgPSAnQ2FuY2VsJztcbiAgICB0aGlzLmRvbmVUZXh0ID0gJ0RvbmUnO1xuICAgIHRoaXMuY2xlYXJUZXh0ID0gJ0NsZWFyJztcbiAgICB0aGlzLnllYXJWYWx1ZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tb250aFZhbHVlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRheVZhbHVlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhvdXJWYWx1ZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW51dGVWYWx1ZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2NhbGUgPSAnZGVmYXVsdCc7XG4gICAgdGhpcy5maXJzdERheU9mV2VlayA9IDA7XG4gICAgdGhpcy50aXRsZVNlbGVjdGVkRGF0ZXNGb3JtYXR0ZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tdWx0aXBsZSA9IGZhbHNlO1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWREYXRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2hvd0RlZmF1bHRUaXRsZSA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd0RlZmF1bHRCdXR0b25zID0gZmFsc2U7XG4gICAgdGhpcy5zaG93Q2xlYXJCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLnNob3dEZWZhdWx0VGltZUxhYmVsID0gdHJ1ZTtcbiAgICB0aGlzLmhvdXJDeWNsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNpemUgPSAnZml4ZWQnO1xuICAgIHRoaXMucHJlZmVyV2hlZWwgPSBmYWxzZTtcbiAgfVxuICBmb3JtYXRPcHRpb25zQ2hhbmdlZCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbCxcbiAgICAgIGZvcm1hdE9wdGlvbnMsXG4gICAgICBwcmVzZW50YXRpb25cbiAgICB9ID0gdGhpcztcbiAgICBjaGVja0ZvclByZXNlbnRhdGlvbkZvcm1hdE1pc21hdGNoKGVsLCBwcmVzZW50YXRpb24sIGZvcm1hdE9wdGlvbnMpO1xuICAgIHdhcm5JZlRpbWVab25lUHJvdmlkZWQoZWwsIGZvcm1hdE9wdGlvbnMpO1xuICB9XG4gIGRpc2FibGVkQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICB9XG4gIG1pbkNoYW5nZWQoKSB7XG4gICAgdGhpcy5wcm9jZXNzTWluUGFydHMoKTtcbiAgfVxuICBtYXhDaGFuZ2VkKCkge1xuICAgIHRoaXMucHJvY2Vzc01heFBhcnRzKCk7XG4gIH1cbiAgcHJlc2VudGF0aW9uQ2hhbmdlZCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbCxcbiAgICAgIGZvcm1hdE9wdGlvbnMsXG4gICAgICBwcmVzZW50YXRpb25cbiAgICB9ID0gdGhpcztcbiAgICBjaGVja0ZvclByZXNlbnRhdGlvbkZvcm1hdE1pc21hdGNoKGVsLCBwcmVzZW50YXRpb24sIGZvcm1hdE9wdGlvbnMpO1xuICB9XG4gIGdldCBpc0dyaWRTdHlsZSgpIHtcbiAgICBjb25zdCB7XG4gICAgICBwcmVzZW50YXRpb24sXG4gICAgICBwcmVmZXJXaGVlbFxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGhhc0RhdGVQcmVzZW50YXRpb24gPSBwcmVzZW50YXRpb24gPT09ICdkYXRlJyB8fCBwcmVzZW50YXRpb24gPT09ICdkYXRlLXRpbWUnIHx8IHByZXNlbnRhdGlvbiA9PT0gJ3RpbWUtZGF0ZSc7XG4gICAgcmV0dXJuIGhhc0RhdGVQcmVzZW50YXRpb24gJiYgIXByZWZlcldoZWVsO1xuICB9XG4gIHllYXJWYWx1ZXNDaGFuZ2VkKCkge1xuICAgIHRoaXMucGFyc2VkWWVhclZhbHVlcyA9IGNvbnZlcnRUb0FycmF5T2ZOdW1iZXJzKHRoaXMueWVhclZhbHVlcyk7XG4gIH1cbiAgbW9udGhWYWx1ZXNDaGFuZ2VkKCkge1xuICAgIHRoaXMucGFyc2VkTW9udGhWYWx1ZXMgPSBjb252ZXJ0VG9BcnJheU9mTnVtYmVycyh0aGlzLm1vbnRoVmFsdWVzKTtcbiAgfVxuICBkYXlWYWx1ZXNDaGFuZ2VkKCkge1xuICAgIHRoaXMucGFyc2VkRGF5VmFsdWVzID0gY29udmVydFRvQXJyYXlPZk51bWJlcnModGhpcy5kYXlWYWx1ZXMpO1xuICB9XG4gIGhvdXJWYWx1ZXNDaGFuZ2VkKCkge1xuICAgIHRoaXMucGFyc2VkSG91clZhbHVlcyA9IGNvbnZlcnRUb0FycmF5T2ZOdW1iZXJzKHRoaXMuaG91clZhbHVlcyk7XG4gIH1cbiAgbWludXRlVmFsdWVzQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnBhcnNlZE1pbnV0ZVZhbHVlcyA9IGNvbnZlcnRUb0FycmF5T2ZOdW1iZXJzKHRoaXMubWludXRlVmFsdWVzKTtcbiAgfVxuICAvKipcbiAgICogVXBkYXRlIHRoZSBkYXRldGltZSB2YWx1ZSB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzXG4gICAqL1xuICBhc3luYyB2YWx1ZUNoYW5nZWQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWVcbiAgICB9ID0gdGhpcztcbiAgICBpZiAodGhpcy5oYXNWYWx1ZSgpKSB7XG4gICAgICB0aGlzLnByb2Nlc3NWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgdGhpcy5pb25WYWx1ZUNoYW5nZS5lbWl0KHtcbiAgICAgIHZhbHVlXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIENvbmZpcm1zIHRoZSBzZWxlY3RlZCBkYXRldGltZSB2YWx1ZSwgdXBkYXRlcyB0aGVcbiAgICogYHZhbHVlYCBwcm9wZXJ0eSwgYW5kIG9wdGlvbmFsbHkgY2xvc2VzIHRoZSBwb3BvdmVyXG4gICAqIG9yIG1vZGFsIHRoYXQgdGhlIGRhdGV0aW1lIHdhcyBwcmVzZW50ZWQgaW4uXG4gICAqL1xuICBhc3luYyBjb25maXJtKGNsb3NlT3ZlcmxheSA9IGZhbHNlKSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNDYWxlbmRhclBpY2tlcixcbiAgICAgIGFjdGl2ZVBhcnRzLFxuICAgICAgcHJlZmVyV2hlZWwsXG4gICAgICB3b3JraW5nUGFydHNcbiAgICB9ID0gdGhpcztcbiAgICAvKipcbiAgICAgKiBXZSBvbmx5IHVwZGF0ZSB0aGUgdmFsdWUgaWYgdGhlIHByZXNlbnRhdGlvbiBpcyBub3QgYSBjYWxlbmRhciBwaWNrZXIuXG4gICAgICovXG4gICAgaWYgKGFjdGl2ZVBhcnRzICE9PSB1bmRlZmluZWQgfHwgIWlzQ2FsZW5kYXJQaWNrZXIpIHtcbiAgICAgIGNvbnN0IGFjdGl2ZVBhcnRzSXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWN0aXZlUGFydHMpO1xuICAgICAgaWYgKGFjdGl2ZVBhcnRzSXNBcnJheSAmJiBhY3RpdmVQYXJ0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKHByZWZlcldoZWVsKSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSWYgdGhlIGRhdGV0aW1lIGlzIHVzaW5nIGEgd2hlZWwgcGlja2VyLCBidXQgdGhlXG4gICAgICAgICAgICogYWN0aXZlIHBhcnRzIGFyZSBlbXB0eSwgdGhlbiB0aGUgdXNlciBoYXMgY29uZmlybWVkIHRoZVxuICAgICAgICAgICAqIGluaXRpYWwgdmFsdWUgKHdvcmtpbmcgcGFydHMpIHByZXNlbnRlZCB0byB0aGVtLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHRoaXMuc2V0VmFsdWUoY29udmVydERhdGFUb0lTTyh3b3JraW5nUGFydHMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFZhbHVlKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoY29udmVydERhdGFUb0lTTyhhY3RpdmVQYXJ0cykpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2xvc2VPdmVybGF5KSB7XG4gICAgICB0aGlzLmNsb3NlUGFyZW50T3ZlcmxheShDT05GSVJNX1JPTEUpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVzZXRzIHRoZSBpbnRlcm5hbCBzdGF0ZSBvZiB0aGUgZGF0ZXRpbWUgYnV0IGRvZXMgbm90IHVwZGF0ZSB0aGUgdmFsdWUuXG4gICAqIFBhc3NpbmcgYSB2YWxpZCBJU08tODYwMSBzdHJpbmcgd2lsbCByZXNldCB0aGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCB0byB0aGUgcHJvdmlkZWQgZGF0ZS5cbiAgICogSWYgbm8gdmFsdWUgaXMgcHJvdmlkZWQsIHRoZSBpbnRlcm5hbCBzdGF0ZSB3aWxsIGJlIHJlc2V0IHRvIHRoZSBjbGFtcGVkIHZhbHVlIG9mIHRoZSBtaW4sIG1heCBhbmQgdG9kYXkuXG4gICAqL1xuICBhc3luYyByZXNldChzdGFydERhdGUpIHtcbiAgICB0aGlzLnByb2Nlc3NWYWx1ZShzdGFydERhdGUpO1xuICB9XG4gIC8qKlxuICAgKiBFbWl0cyB0aGUgaW9uQ2FuY2VsIGV2ZW50IGFuZFxuICAgKiBvcHRpb25hbGx5IGNsb3NlcyB0aGUgcG9wb3ZlclxuICAgKiBvciBtb2RhbCB0aGF0IHRoZSBkYXRldGltZSB3YXNcbiAgICogcHJlc2VudGVkIGluLlxuICAgKi9cbiAgYXN5bmMgY2FuY2VsKGNsb3NlT3ZlcmxheSA9IGZhbHNlKSB7XG4gICAgdGhpcy5pb25DYW5jZWwuZW1pdCgpO1xuICAgIGlmIChjbG9zZU92ZXJsYXkpIHtcbiAgICAgIHRoaXMuY2xvc2VQYXJlbnRPdmVybGF5KENBTkNFTF9ST0xFKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGlzQ2FsZW5kYXJQaWNrZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcHJlc2VudGF0aW9uXG4gICAgfSA9IHRoaXM7XG4gICAgcmV0dXJuIHByZXNlbnRhdGlvbiA9PT0gJ2RhdGUnIHx8IHByZXNlbnRhdGlvbiA9PT0gJ2RhdGUtdGltZScgfHwgcHJlc2VudGF0aW9uID09PSAndGltZS1kYXRlJztcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmNsZWFyRm9jdXNWaXNpYmxlID0gc3RhcnRGb2N1c1Zpc2libGUodGhpcy5lbCkuZGVzdHJveTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5jbGVhckZvY3VzVmlzaWJsZSkge1xuICAgICAgdGhpcy5jbGVhckZvY3VzVmlzaWJsZSgpO1xuICAgICAgdGhpcy5jbGVhckZvY3VzVmlzaWJsZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgaW5pdGlhbGl6ZUxpc3RlbmVycygpIHtcbiAgICB0aGlzLmluaXRpYWxpemVDYWxlbmRhckxpc3RlbmVyKCk7XG4gICAgdGhpcy5pbml0aWFsaXplS2V5Ym9hcmRMaXN0ZW5lcnMoKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGVsLFxuICAgICAgaW50ZXJzZWN0aW9uVHJhY2tlclJlZlxuICAgIH0gPSB0aGlzO1xuICAgIC8qKlxuICAgICAqIElmIGEgc2Nyb2xsYWJsZSBlbGVtZW50IGlzIGhpZGRlbiB1c2luZyBgZGlzcGxheTogbm9uZWAsXG4gICAgICogaXQgd2lsbCBub3QgaGF2ZSBhIHNjcm9sbCBoZWlnaHQgbWVhbmluZyB3ZSBjYW5ub3Qgc2Nyb2xsIGVsZW1lbnRzXG4gICAgICogaW50byB2aWV3LiBBcyBhIHJlc3VsdCwgd2Ugd2lsbCBuZWVkIHRvIHdhaXQgZm9yIHRoZSBkYXRldGltZSB0byBiZWNvbWVcbiAgICAgKiB2aXNpYmxlIGlmIHVzZWQgaW5zaWRlIG9mIGEgbW9kYWwgb3IgYSBwb3BvdmVyIG90aGVyd2lzZSB0aGUgc2Nyb2xsYWJsZVxuICAgICAqIGFyZWFzIHdpbGwgbm90IGhhdmUgdGhlIGNvcnJlY3QgdmFsdWVzIHNuYXBwZWQgaW50byBwbGFjZS5cbiAgICAgKi9cbiAgICBjb25zdCB2aXNpYmxlQ2FsbGJhY2sgPSBlbnRyaWVzID0+IHtcbiAgICAgIGNvbnN0IGV2ID0gZW50cmllc1swXTtcbiAgICAgIGlmICghZXYuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5pbml0aWFsaXplTGlzdGVuZXJzKCk7XG4gICAgICAvKipcbiAgICAgICAqIFRPRE8gRlctMjc5MzogRGF0ZXRpbWUgbmVlZHMgYSBmcmFtZSB0byBlbnN1cmUgdGhhdCBpdFxuICAgICAgICogY2FuIHByb3Blcmx5IHNjcm9sbCBjb250ZW50cyBpbnRvIHZpZXcuIEFzIGEgcmVzdWx0XG4gICAgICAgKiB3ZSBoaWRlIHRoZSBzY3JvbGxhYmxlIGNvbnRlbnQgdW50aWwgYWZ0ZXIgdGhhdCBmcmFtZVxuICAgICAgICogc28gdXNlcnMgZG8gbm90IHNlZSB0aGUgY29udGVudCBxdWlja2x5IHNoaWZ0aW5nLiBUaGUgZG93bnNpZGVcbiAgICAgICAqIGlzIHRoYXQgdGhlIGNvbnRlbnQgd2lsbCBwb3AgaW50byB2aWV3IGEgZnJhbWUgYWZ0ZXIuIE1heWJlIHRoZXJlXG4gICAgICAgKiBpcyBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXM/XG4gICAgICAgKi9cbiAgICAgIHdyaXRlVGFzaygoKSA9PiB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnZGF0ZXRpbWUtcmVhZHknKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgdmlzaWJsZUlPID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKHZpc2libGVDYWxsYmFjaywge1xuICAgICAgdGhyZXNob2xkOiAwLjAxLFxuICAgICAgcm9vdDogZWxcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBVc2UgcmFmIHRvIGF2b2lkIGEgcmFjZSBjb25kaXRpb24gYmV0d2VlbiB0aGUgY29tcG9uZW50IGxvYWRpbmcgYW5kXG4gICAgICogaXRzIGRpc3BsYXkgYW5pbWF0aW9uIHN0YXJ0aW5nIChzdWNoIGFzIHdoZW4gc2hvd24gaW4gYSBtb2RhbCkuIFRoaXNcbiAgICAgKiBjb3VsZCBjYXVzZSB0aGUgZGF0ZXRpbWUgdG8gc3RhcnQgYXQgYSB2aXNpYmlsaXR5IG9mIDAsIGVycm9uZW91c2x5XG4gICAgICogdHJpZ2dlcmluZyB0aGUgYGhpZGRlbklPYCBvYnNlcnZlciBiZWxvdy5cbiAgICAgKi9cbiAgICByYWYoKCkgPT4gdmlzaWJsZUlPID09PSBudWxsIHx8IHZpc2libGVJTyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmlzaWJsZUlPLm9ic2VydmUoaW50ZXJzZWN0aW9uVHJhY2tlclJlZikpO1xuICAgIC8qKlxuICAgICAqIFdlIG5lZWQgdG8gY2xlYW4gdXAgbGlzdGVuZXJzIHdoZW4gdGhlIGRhdGV0aW1lIGlzIGhpZGRlblxuICAgICAqIGluIGEgcG9wb3Zlci9tb2RhbCBzbyB0aGF0IHdlIGNhbiBwcm9wZXJseSBzY3JvbGwgY29udGFpbmVyc1xuICAgICAqIGJhY2sgaW50byB2aWV3IGlmIHRoZXkgYXJlIHJlLXByZXNlbnRlZC4gV2hlbiB0aGUgZGF0ZXRpbWUgaXMgaGlkZGVuXG4gICAgICogdGhlIHNjcm9sbCBhcmVhcyBoYXZlIHNjcm9sbCB3aWR0aHMvaGVpZ2h0cyBvZiAwcHgsIHNvIGFueSBzbmFwcGluZ1xuICAgICAqIHdlIGRpZCBvcmlnaW5hbGx5IGhhcyBiZWVuIGxvc3QuXG4gICAgICovXG4gICAgY29uc3QgaGlkZGVuQ2FsbGJhY2sgPSBlbnRyaWVzID0+IHtcbiAgICAgIGNvbnN0IGV2ID0gZW50cmllc1swXTtcbiAgICAgIGlmIChldi5pc0ludGVyc2VjdGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmRlc3Ryb3lJbnRlcmFjdGlvbkxpc3RlbmVycygpO1xuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIGRhdGV0aW1lIGlzIGhpZGRlbiwgd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhhdFxuICAgICAgICogdGhlIG1vbnRoL3llYXIgcGlja2VyIGlzIGNsb3NlZC4gT3RoZXJ3aXNlLFxuICAgICAgICogaXQgd2lsbCBiZSBvcGVuIHdoZW4gdGhlIGRhdGV0aW1lIHJlLWFwcGVhcnNcbiAgICAgICAqIGFuZCB0aGUgc2Nyb2xsIGFyZWEgb2YgdGhlIGNhbGVuZGFyIGdyaWQgd2lsbCBiZSAwLlxuICAgICAgICogQXMgYSByZXN1bHQsIHRoZSB3cm9uZyBtb250aCB3aWxsIGJlIHNob3duLlxuICAgICAgICovXG4gICAgICB0aGlzLnNob3dNb250aEFuZFllYXIgPSBmYWxzZTtcbiAgICAgIHdyaXRlVGFzaygoKSA9PiB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnZGF0ZXRpbWUtcmVhZHknKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgaGlkZGVuSU8gPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaGlkZGVuQ2FsbGJhY2ssIHtcbiAgICAgIHRocmVzaG9sZDogMCxcbiAgICAgIHJvb3Q6IGVsXG4gICAgfSk7XG4gICAgcmFmKCgpID0+IGhpZGRlbklPID09PSBudWxsIHx8IGhpZGRlbklPID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoaWRkZW5JTy5vYnNlcnZlKGludGVyc2VjdGlvblRyYWNrZXJSZWYpKTtcbiAgICAvKipcbiAgICAgKiBEYXRldGltZSB1c2VzIElvbmljIGNvbXBvbmVudHMgdGhhdCBlbWl0XG4gICAgICogaW9uRm9jdXMgYW5kIGlvbkJsdXIuIFRoZXNlIGV2ZW50cyBhcmVcbiAgICAgKiBjb21wb3NlZCBtZWFuaW5nIHRoZXkgd2lsbCBjcm9zc1xuICAgICAqIHRoZSBzaGFkb3cgZG9tIGJvdW5kYXJ5LiBXZSBuZWVkIHRvXG4gICAgICogc3RvcCBwcm9wYWdhdGlvbiBvbiB0aGVzZSBldmVudHMgb3RoZXJ3aXNlXG4gICAgICogZGV2ZWxvcGVycyB3aWxsIHNlZSAyIGlvbkZvY3VzIG9yIDIgaW9uQmx1clxuICAgICAqIGV2ZW50cyBhdCBhIHRpbWUuXG4gICAgICovXG4gICAgY29uc3Qgcm9vdCA9IGdldEVsZW1lbnRSb290KHRoaXMuZWwpO1xuICAgIHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignaW9uRm9jdXMnLCBldiA9PiBldi5zdG9wUHJvcGFnYXRpb24oKSk7XG4gICAgcm9vdC5hZGRFdmVudExpc3RlbmVyKCdpb25CbHVyJywgZXYgPT4gZXYuc3RvcFByb3BhZ2F0aW9uKCkpO1xuICB9XG4gIC8qKlxuICAgKiBXaGVuIHRoZSBwcmVzZW50YXRpb24gaXMgY2hhbmdlZCwgYWxsIGNhbGVuZGFyIGNvbnRlbnQgaXMgcmVjcmVhdGVkLFxuICAgKiBzbyB3ZSBuZWVkIHRvIHJlLWluaXQgYmVoYXZpb3Igd2l0aCB0aGUgbmV3IGVsZW1lbnRzLlxuICAgKi9cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHByZXNlbnRhdGlvbixcbiAgICAgIHByZXZQcmVzZW50YXRpb24sXG4gICAgICBjYWxlbmRhckJvZHlSZWYsXG4gICAgICBtaW5QYXJ0cyxcbiAgICAgIHByZWZlcldoZWVsLFxuICAgICAgZm9yY2VSZW5kZXJEYXRlXG4gICAgfSA9IHRoaXM7XG4gICAgLyoqXG4gICAgICogVE9ETyhGVy0yMTY1KVxuICAgICAqIFJlbW92ZSB0aGlzIHdoZW4gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIzNTk2MCBpcyBmaXhlZC5cbiAgICAgKiBXaGVuIHVzaW5nIGBtaW5gLCB3ZSBhZGQgYHNjcm9sbC1zbmFwLWFsaWduOiBub25lYFxuICAgICAqIHRvIHRoZSBkaXNhYmxlZCBtb250aCBzbyB0aGF0IHVzZXJzIGNhbm5vdCBzY3JvbGwgdG8gaXQuXG4gICAgICogVGhpcyB0cmlnZ2VycyBhIGJ1ZyBpbiBXZWJLaXQgd2hlcmUgdGhlIHNjcm9sbCBwb3NpdGlvbiBpcyByZXNldC5cbiAgICAgKiBTaW5jZSB0aGUgbW9udGggY2hhbmdlIGxvZ2ljIGlzIGhhbmRsZWQgYnkgYSBzY3JvbGwgbGlzdGVuZXIsXG4gICAgICogdGhpcyBjYXVzZXMgdGhlIG1vbnRoIHRvIGNoYW5nZSBsZWFkaW5nIHRvIGBzY3JvbGwtc25hcC1hbGlnbmBcbiAgICAgKiBjaGFuZ2luZyBhZ2FpbiwgdGh1cyBjaGFuZ2luZyB0aGUgc2Nyb2xsIHBvc2l0aW9uIGFnYWluIGFuZCBjYXVzaW5nXG4gICAgICogYW4gaW5maW5pdGUgbG9vcC5cbiAgICAgKiBUaGlzIGlzc3VlIG9ubHkgYXBwbGllcyB0byB0aGUgY2FsZW5kYXIgZ3JpZCwgc28gd2UgY2FuIGRpc2FibGVcbiAgICAgKiBpdCBpZiB0aGUgY2FsZW5kYXIgZ3JpZCBpcyBub3QgYmVpbmcgdXNlZC5cbiAgICAgKi9cbiAgICBjb25zdCBoYXNDYWxlbmRhckdyaWQgPSAhcHJlZmVyV2hlZWwgJiYgWydkYXRlLXRpbWUnLCAndGltZS1kYXRlJywgJ2RhdGUnXS5pbmNsdWRlcyhwcmVzZW50YXRpb24pO1xuICAgIGlmIChtaW5QYXJ0cyAhPT0gdW5kZWZpbmVkICYmIGhhc0NhbGVuZGFyR3JpZCAmJiBjYWxlbmRhckJvZHlSZWYpIHtcbiAgICAgIGNvbnN0IHdvcmtpbmdNb250aCA9IGNhbGVuZGFyQm9keVJlZi5xdWVyeVNlbGVjdG9yKCcuY2FsZW5kYXItbW9udGg6bnRoLW9mLXR5cGUoMSknKTtcbiAgICAgIC8qKlxuICAgICAgICogV2UgbmVlZCB0byBtYWtlIHN1cmUgdGhlIGRhdGV0aW1lIGlzIG5vdCBpbiB0aGUgcHJvY2Vzc1xuICAgICAgICogb2Ygc2Nyb2xsaW5nIHRvIGEgbmV3IGRhdGV0aW1lIHZhbHVlIGlmIHRoZSB2YWx1ZVxuICAgICAgICogaXMgdXBkYXRlZCBwcm9ncmFtbWF0aWNhbGx5LlxuICAgICAgICogT3RoZXJ3aXNlLCB0aGUgZGF0ZXRpbWUgd2lsbCBhcHBlYXIgdG8gbm90IHNjcm9sbCBhdCBhbGwgYmVjYXVzZVxuICAgICAgICogd2UgYXJlIHJlc2V0dGluZyB0aGUgc2Nyb2xsIHBvc2l0aW9uIHRvIHRoZSBjZW50ZXIgb2YgdGhlIHZpZXcuXG4gICAgICAgKiBQcmlvciB0byB0aGUgZGF0ZXRpbWUncyB2YWx1ZSBiZWluZyB1cGRhdGVkIHByb2dyYW1tYXRpY2FsbHksXG4gICAgICAgKiB0aGUgY2FsZW5kYXJCb2R5UmVmIGlzIHNjcm9sbGVkIHN1Y2ggdGhhdCB0aGUgbWlkZGxlIG1vbnRoIGlzIGNlbnRlcmVkXG4gICAgICAgKiBpbiB0aGUgdmlldy4gVGhlIGJlbG93IGNvZGUgdXBkYXRlcyB0aGUgc2Nyb2xsIHBvc2l0aW9uIHNvIHRoZSBtaWRkbGVcbiAgICAgICAqIG1vbnRoIGlzIGFsc28gY2VudGVyZWQgaW4gdGhlIHZpZXcuIFNpbmNlIHRoZSBzY3JvbGwgcG9zaXRpb24gZGlkIG5vdCBjaGFuZ2UsXG4gICAgICAgKiB0aGUgc2Nyb2xsIGNhbGxiYWNrIGluIHRoaXMgZmlsZSBkb2VzIG5vdCBmaXJlLFxuICAgICAgICogYW5kIHRoZSByZXNvbHZlRm9yY2VEYXRlU2Nyb2xsaW5nIHByb21pc2UgbmV2ZXIgcmVzb2x2ZXMuXG4gICAgICAgKi9cbiAgICAgIGlmICh3b3JraW5nTW9udGggJiYgZm9yY2VSZW5kZXJEYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2FsZW5kYXJCb2R5UmVmLnNjcm9sbExlZnQgPSB3b3JraW5nTW9udGguY2xpZW50V2lkdGggKiAoaXNSVEwodGhpcy5lbCkgPyAtMSA6IDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJldlByZXNlbnRhdGlvbiA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5wcmV2UHJlc2VudGF0aW9uID0gcHJlc2VudGF0aW9uO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocHJlc2VudGF0aW9uID09PSBwcmV2UHJlc2VudGF0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJldlByZXNlbnRhdGlvbiA9IHByZXNlbnRhdGlvbjtcbiAgICB0aGlzLmRlc3Ryb3lJbnRlcmFjdGlvbkxpc3RlbmVycygpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUxpc3RlbmVycygpO1xuICAgIC8qKlxuICAgICAqIFRoZSBtb250aC95ZWFyIHBpY2tlciBmcm9tIHRoZSBkYXRlIGludGVyZmFjZVxuICAgICAqIHNob3VsZCBiZSBjbG9zZWQgYXMgaXQgaXMgbm90IGF2YWlsYWJsZSBpbiBub24tZGF0ZVxuICAgICAqIGludGVyZmFjZXMuXG4gICAgICovXG4gICAgdGhpcy5zaG93TW9udGhBbmRZZWFyID0gZmFsc2U7XG4gICAgcmFmKCgpID0+IHtcbiAgICAgIHRoaXMuaW9uUmVuZGVyLmVtaXQoKTtcbiAgICB9KTtcbiAgfVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbCxcbiAgICAgIGZvcm1hdE9wdGlvbnMsXG4gICAgICBoaWdobGlnaHRlZERhdGVzLFxuICAgICAgbXVsdGlwbGUsXG4gICAgICBwcmVzZW50YXRpb24sXG4gICAgICBwcmVmZXJXaGVlbFxuICAgIH0gPSB0aGlzO1xuICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgaWYgKHByZXNlbnRhdGlvbiAhPT0gJ2RhdGUnKSB7XG4gICAgICAgIHByaW50SW9uV2FybmluZygnTXVsdGlwbGUgZGF0ZSBzZWxlY3Rpb24gaXMgb25seSBzdXBwb3J0ZWQgZm9yIHByZXNlbnRhdGlvbj1cImRhdGVcIi4nLCBlbCk7XG4gICAgICB9XG4gICAgICBpZiAocHJlZmVyV2hlZWwpIHtcbiAgICAgICAgcHJpbnRJb25XYXJuaW5nKCdNdWx0aXBsZSBkYXRlIHNlbGVjdGlvbiBpcyBub3Qgc3VwcG9ydGVkIHdpdGggcHJlZmVyV2hlZWw9XCJ0cnVlXCIuJywgZWwpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGlnaGxpZ2h0ZWREYXRlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAocHJlc2VudGF0aW9uICE9PSAnZGF0ZScgJiYgcHJlc2VudGF0aW9uICE9PSAnZGF0ZS10aW1lJyAmJiBwcmVzZW50YXRpb24gIT09ICd0aW1lLWRhdGUnKSB7XG4gICAgICAgIHByaW50SW9uV2FybmluZygnVGhlIGhpZ2hsaWdodGVkRGF0ZXMgcHJvcGVydHkgaXMgb25seSBzdXBwb3J0ZWQgd2l0aCB0aGUgZGF0ZSwgZGF0ZS10aW1lLCBhbmQgdGltZS1kYXRlIHByZXNlbnRhdGlvbnMuJywgZWwpO1xuICAgICAgfVxuICAgICAgaWYgKHByZWZlcldoZWVsKSB7XG4gICAgICAgIHByaW50SW9uV2FybmluZygnVGhlIGhpZ2hsaWdodGVkRGF0ZXMgcHJvcGVydHkgaXMgbm90IHN1cHBvcnRlZCB3aXRoIHByZWZlcldoZWVsPVwidHJ1ZVwiLicsIGVsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZvcm1hdE9wdGlvbnMpIHtcbiAgICAgIGNoZWNrRm9yUHJlc2VudGF0aW9uRm9ybWF0TWlzbWF0Y2goZWwsIHByZXNlbnRhdGlvbiwgZm9ybWF0T3B0aW9ucyk7XG4gICAgICB3YXJuSWZUaW1lWm9uZVByb3ZpZGVkKGVsLCBmb3JtYXRPcHRpb25zKTtcbiAgICB9XG4gICAgY29uc3QgaG91clZhbHVlcyA9IHRoaXMucGFyc2VkSG91clZhbHVlcyA9IGNvbnZlcnRUb0FycmF5T2ZOdW1iZXJzKHRoaXMuaG91clZhbHVlcyk7XG4gICAgY29uc3QgbWludXRlVmFsdWVzID0gdGhpcy5wYXJzZWRNaW51dGVWYWx1ZXMgPSBjb252ZXJ0VG9BcnJheU9mTnVtYmVycyh0aGlzLm1pbnV0ZVZhbHVlcyk7XG4gICAgY29uc3QgbW9udGhWYWx1ZXMgPSB0aGlzLnBhcnNlZE1vbnRoVmFsdWVzID0gY29udmVydFRvQXJyYXlPZk51bWJlcnModGhpcy5tb250aFZhbHVlcyk7XG4gICAgY29uc3QgeWVhclZhbHVlcyA9IHRoaXMucGFyc2VkWWVhclZhbHVlcyA9IGNvbnZlcnRUb0FycmF5T2ZOdW1iZXJzKHRoaXMueWVhclZhbHVlcyk7XG4gICAgY29uc3QgZGF5VmFsdWVzID0gdGhpcy5wYXJzZWREYXlWYWx1ZXMgPSBjb252ZXJ0VG9BcnJheU9mTnVtYmVycyh0aGlzLmRheVZhbHVlcyk7XG4gICAgY29uc3QgdG9kYXlQYXJ0cyA9IHRoaXMudG9kYXlQYXJ0cyA9IHBhcnNlRGF0ZShnZXRUb2RheSgpKTtcbiAgICB0aGlzLnByb2Nlc3NNaW5QYXJ0cygpO1xuICAgIHRoaXMucHJvY2Vzc01heFBhcnRzKCk7XG4gICAgdGhpcy5kZWZhdWx0UGFydHMgPSBnZXRDbG9zZXN0VmFsaWREYXRlKHtcbiAgICAgIHJlZlBhcnRzOiB0b2RheVBhcnRzLFxuICAgICAgbW9udGhWYWx1ZXMsXG4gICAgICBkYXlWYWx1ZXMsXG4gICAgICB5ZWFyVmFsdWVzLFxuICAgICAgaG91clZhbHVlcyxcbiAgICAgIG1pbnV0ZVZhbHVlcyxcbiAgICAgIG1pblBhcnRzOiB0aGlzLm1pblBhcnRzLFxuICAgICAgbWF4UGFydHM6IHRoaXMubWF4UGFydHNcbiAgICB9KTtcbiAgICB0aGlzLnByb2Nlc3NWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICB9XG4gIGVtaXRTdHlsZSgpIHtcbiAgICB0aGlzLmlvblN0eWxlLmVtaXQoe1xuICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICBkYXRldGltZTogdHJ1ZSxcbiAgICAgICdpbnRlcmFjdGl2ZS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWRcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogVW5pdmVyc2FsIHJlbmRlciBtZXRob2RzXG4gICAqIFRoZXNlIGFyZSBwaWVjZXMgb2YgZGF0ZXRpbWUgdGhhdFxuICAgKiBhcmUgcmVuZGVyZWQgaW5kZXBlbmRlbnRseSBvZiBwcmVzZW50YXRpb24uXG4gICAqL1xuICByZW5kZXJGb290ZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWQsXG4gICAgICByZWFkb25seSxcbiAgICAgIHNob3dEZWZhdWx0QnV0dG9ucyxcbiAgICAgIHNob3dDbGVhckJ1dHRvblxuICAgIH0gPSB0aGlzO1xuICAgIC8qKlxuICAgICAqIFRoZSBjYW5jZWwsIGNsZWFyLCBhbmQgY29uZmlybSBidXR0b25zXG4gICAgICogc2hvdWxkIG5vdCBiZSBpbnRlcmFjdGl2ZSBpZiB0aGUgZGF0ZXRpbWVcbiAgICAgKiBpcyBkaXNhYmxlZCBvciByZWFkb25seS5cbiAgICAgKi9cbiAgICBjb25zdCBpc0J1dHRvbkRpc2FibGVkID0gZGlzYWJsZWQgfHwgcmVhZG9ubHk7XG4gICAgY29uc3QgaGFzU2xvdHRlZEJ1dHRvbnMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tzbG90PVwiYnV0dG9uc1wiXScpICE9PSBudWxsO1xuICAgIGlmICghaGFzU2xvdHRlZEJ1dHRvbnMgJiYgIXNob3dEZWZhdWx0QnV0dG9ucyAmJiAhc2hvd0NsZWFyQnV0dG9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNsZWFyQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLnNldFZhbHVlKHVuZGVmaW5lZCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBCeSBkZWZhdWx0IHdlIHJlbmRlciB0d28gYnV0dG9uczpcbiAgICAgKiBDYW5jZWwgLSBEaXNtaXNzZXMgdGhlIGRhdGV0aW1lIGFuZFxuICAgICAqIGRvZXMgbm90IHVwZGF0ZSB0aGUgYHZhbHVlYCBwcm9wLlxuICAgICAqIE9LIC0gRGlzbWlzc2VzIHRoZSBkYXRldGltZSBhbmRcbiAgICAgKiB1cGRhdGVzIHRoZSBgdmFsdWVgIHByb3AuXG4gICAgICovXG4gICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiZGF0ZXRpbWUtZm9vdGVyXCJcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImRhdGV0aW1lLWJ1dHRvbnNcIlxuICAgIH0sIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IHtcbiAgICAgICAgWydkYXRldGltZS1hY3Rpb24tYnV0dG9ucyddOiB0cnVlLFxuICAgICAgICBbJ2hhcy1jbGVhci1idXR0b24nXTogdGhpcy5zaG93Q2xlYXJCdXR0b25cbiAgICAgIH1cbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBuYW1lOiBcImJ1dHRvbnNcIlxuICAgIH0sIGgoXCJpb24tYnV0dG9uc1wiLCBudWxsLCBzaG93RGVmYXVsdEJ1dHRvbnMgJiYgaChcImlvbi1idXR0b25cIiwge1xuICAgICAgaWQ6IFwiY2FuY2VsLWJ1dHRvblwiLFxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmNhbmNlbCh0cnVlKSxcbiAgICAgIGRpc2FibGVkOiBpc0J1dHRvbkRpc2FibGVkXG4gICAgfSwgdGhpcy5jYW5jZWxUZXh0KSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJkYXRldGltZS1hY3Rpb24tYnV0dG9ucy1jb250YWluZXJcIlxuICAgIH0sIHNob3dDbGVhckJ1dHRvbiAmJiBoKFwiaW9uLWJ1dHRvblwiLCB7XG4gICAgICBpZDogXCJjbGVhci1idXR0b25cIixcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgb25DbGljazogKCkgPT4gY2xlYXJCdXR0b25DbGljaygpLFxuICAgICAgZGlzYWJsZWQ6IGlzQnV0dG9uRGlzYWJsZWRcbiAgICB9LCB0aGlzLmNsZWFyVGV4dCksIHNob3dEZWZhdWx0QnV0dG9ucyAmJiBoKFwiaW9uLWJ1dHRvblwiLCB7XG4gICAgICBpZDogXCJjb25maXJtLWJ1dHRvblwiLFxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmNvbmZpcm0odHJ1ZSksXG4gICAgICBkaXNhYmxlZDogaXNCdXR0b25EaXNhYmxlZFxuICAgIH0sIHRoaXMuZG9uZVRleHQpKSkpKSkpO1xuICB9XG4gIC8qKlxuICAgKiBXaGVlbCBwaWNrZXIgcmVuZGVyIG1ldGhvZHNcbiAgICovXG4gIHJlbmRlcldoZWVsUGlja2VyKGZvcmNlUHJlc2VudGF0aW9uID0gdGhpcy5wcmVzZW50YXRpb24pIHtcbiAgICAvKipcbiAgICAgKiBJZiBwcmVzZW50YXRpb249XCJ0aW1lLWRhdGVcIiB3ZSBzd2l0Y2ggdGhlXG4gICAgICogb3JkZXIgb2YgdGhlIHJlbmRlciBhcnJheSBoZXJlIGluc3RlYWQgb2ZcbiAgICAgKiBtYW51YWxseSByZW9yZGVyaW5nIGVhY2ggZGF0ZS90aW1lIHBpY2tlclxuICAgICAqIGNvbHVtbiB3aXRoIENTUy4gVGhpcyBhbGxvd3MgZm9yIGFkZGl0aW9uYWxcbiAgICAgKiBmbGV4aWJpbGl0eSBpZiB3ZSBuZWVkIHRvIHJlbmRlciBzdWJzZXRzXG4gICAgICogb2YgdGhlIGRhdGUvdGltZSBkYXRhIG9yIGRvIGFkZGl0aW9uYWwgb3JkZXJpbmdcbiAgICAgKiB3aXRoaW4gdGhlIGNoaWxkIHJlbmRlciBmdW5jdGlvbnMuXG4gICAgICovXG4gICAgY29uc3QgcmVuZGVyQXJyYXkgPSBmb3JjZVByZXNlbnRhdGlvbiA9PT0gJ3RpbWUtZGF0ZScgPyBbdGhpcy5yZW5kZXJUaW1lUGlja2VyQ29sdW1ucyhmb3JjZVByZXNlbnRhdGlvbiksIHRoaXMucmVuZGVyRGF0ZVBpY2tlckNvbHVtbnMoZm9yY2VQcmVzZW50YXRpb24pXSA6IFt0aGlzLnJlbmRlckRhdGVQaWNrZXJDb2x1bW5zKGZvcmNlUHJlc2VudGF0aW9uKSwgdGhpcy5yZW5kZXJUaW1lUGlja2VyQ29sdW1ucyhmb3JjZVByZXNlbnRhdGlvbildO1xuICAgIHJldHVybiBoKFwiaW9uLXBpY2tlclwiLCBudWxsLCByZW5kZXJBcnJheSk7XG4gIH1cbiAgcmVuZGVyRGF0ZVBpY2tlckNvbHVtbnMoZm9yY2VQcmVzZW50YXRpb24pIHtcbiAgICByZXR1cm4gZm9yY2VQcmVzZW50YXRpb24gPT09ICdkYXRlLXRpbWUnIHx8IGZvcmNlUHJlc2VudGF0aW9uID09PSAndGltZS1kYXRlJyA/IHRoaXMucmVuZGVyQ29tYmluZWREYXRlUGlja2VyQ29sdW1uKCkgOiB0aGlzLnJlbmRlckluZGl2aWR1YWxEYXRlUGlja2VyQ29sdW1ucyhmb3JjZVByZXNlbnRhdGlvbik7XG4gIH1cbiAgcmVuZGVyQ29tYmluZWREYXRlUGlja2VyQ29sdW1uKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRlZmF1bHRQYXJ0cyxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgd29ya2luZ1BhcnRzLFxuICAgICAgbG9jYWxlLFxuICAgICAgbWluUGFydHMsXG4gICAgICBtYXhQYXJ0cyxcbiAgICAgIHRvZGF5UGFydHMsXG4gICAgICBpc0RhdGVFbmFibGVkXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgYWN0aXZlUGFydCA9IHRoaXMuZ2V0QWN0aXZlUGFydHNXaXRoRmFsbGJhY2soKTtcbiAgICAvKipcbiAgICAgKiBCeSBkZWZhdWx0LCBnZW5lcmF0ZSBhIHJhbmdlIG9mIDMgbW9udGhzOlxuICAgICAqIFByZXZpb3VzIG1vbnRoLCBjdXJyZW50IG1vbnRoLCBhbmQgbmV4dCBtb250aFxuICAgICAqL1xuICAgIGNvbnN0IG1vbnRoc1RvUmVuZGVyID0gZ2VuZXJhdGVNb250aHMod29ya2luZ1BhcnRzKTtcbiAgICBjb25zdCBsYXN0TW9udGggPSBtb250aHNUb1JlbmRlclttb250aHNUb1JlbmRlci5sZW5ndGggLSAxXTtcbiAgICAvKipcbiAgICAgKiBFbnN1cmUgdGhhdCB1c2VycyBjYW4gc2VsZWN0IHRoZSBlbnRpcmUgd2luZG93IG9mIGRhdGVzLlxuICAgICAqL1xuICAgIG1vbnRoc1RvUmVuZGVyWzBdLmRheSA9IDE7XG4gICAgbGFzdE1vbnRoLmRheSA9IGdldE51bURheXNJbk1vbnRoKGxhc3RNb250aC5tb250aCwgbGFzdE1vbnRoLnllYXIpO1xuICAgIC8qKlxuICAgICAqIE5hcnJvdyB0aGUgZGF0ZXMgcmVuZGVyZWQgYmFzZWQgb24gbWluL21heCBkYXRlcyAoaWYgYW55KS5cbiAgICAgKiBUaGUgYG1pbmAgZGF0ZSBpcyB1c2VkIGlmIHRoZSBtaW4gaXMgYWZ0ZXIgdGhlIGdlbmVyYXRlZCBtaW4gbW9udGguXG4gICAgICogVGhlIGBtYXhgIGRhdGUgaXMgdXNlZCBpZiB0aGUgbWF4IGlzIGJlZm9yZSB0aGUgZ2VuZXJhdGVkIG1heCBtb250aC5cbiAgICAgKiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgc2xpZGluZyB3aW5kb3cgYWx3YXlzIHN0YXlzIGF0IDMgbW9udGhzXG4gICAgICogYnV0IHN0aWxsIGFsbG93cyBmdXR1cmUgZGF0ZXMgdG8gYmUgbGF6aWx5IHJlbmRlcmVkIGJhc2VkIG9uIGFueSBtaW4vbWF4XG4gICAgICogY29uc3RyYWludHMuXG4gICAgICovXG4gICAgY29uc3QgbWluID0gbWluUGFydHMgIT09IHVuZGVmaW5lZCAmJiBpc0FmdGVyKG1pblBhcnRzLCBtb250aHNUb1JlbmRlclswXSkgPyBtaW5QYXJ0cyA6IG1vbnRoc1RvUmVuZGVyWzBdO1xuICAgIGNvbnN0IG1heCA9IG1heFBhcnRzICE9PSB1bmRlZmluZWQgJiYgaXNCZWZvcmUobWF4UGFydHMsIGxhc3RNb250aCkgPyBtYXhQYXJ0cyA6IGxhc3RNb250aDtcbiAgICBjb25zdCByZXN1bHQgPSBnZXRDb21iaW5lZERhdGVDb2x1bW5EYXRhKGxvY2FsZSwgdG9kYXlQYXJ0cywgbWluLCBtYXgsIHRoaXMucGFyc2VkRGF5VmFsdWVzLCB0aGlzLnBhcnNlZE1vbnRoVmFsdWVzKTtcbiAgICBsZXQgaXRlbXMgPSByZXN1bHQuaXRlbXM7XG4gICAgY29uc3QgcGFydHMgPSByZXN1bHQucGFydHM7XG4gICAgaWYgKGlzRGF0ZUVuYWJsZWQpIHtcbiAgICAgIGl0ZW1zID0gaXRlbXMubWFwKChpdGVtT2JqZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VQYXJ0cyA9IHBhcnRzW2luZGV4XTtcbiAgICAgICAgbGV0IGRpc2FibGVkO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRoZSBgaXNEYXRlRW5hYmxlZGAgaW1wbGVtZW50YXRpb24gaXMgdHJ5LWNhdGNoIHdyYXBwZWRcbiAgICAgICAgICAgKiB0byBwcmV2ZW50IGV4Y2VwdGlvbnMgaW4gdGhlIHVzZXIncyBmdW5jdGlvbiBmcm9tXG4gICAgICAgICAgICogaW50ZXJydXB0aW5nIHRoZSBjYWxlbmRhciByZW5kZXJpbmcuXG4gICAgICAgICAgICovXG4gICAgICAgICAgZGlzYWJsZWQgPSAhaXNEYXRlRW5hYmxlZChjb252ZXJ0RGF0YVRvSVNPKHJlZmVyZW5jZVBhcnRzKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBwcmludElvbkVycm9yKCdFeGNlcHRpb24gdGhyb3duIGZyb20gcHJvdmlkZWQgYGlzRGF0ZUVuYWJsZWRgIGZ1bmN0aW9uLiBQbGVhc2UgY2hlY2sgeW91ciBmdW5jdGlvbiBhbmQgdHJ5IGFnYWluLicsIGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGl0ZW1PYmplY3QpLCB7XG4gICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWYgd2UgaGF2ZSBzZWxlY3RlZCBhIGRheSBhbHJlYWR5LCB0aGVuIGRlZmF1bHQgdGhlIGNvbHVtblxuICAgICAqIHRvIHRoYXQgdmFsdWUuIE90aGVyd2lzZSwgc2V0IGl0IHRvIHRoZSBkZWZhdWx0IGRhdGUuXG4gICAgICovXG4gICAgY29uc3QgdG9kYXlTdHJpbmcgPSB3b3JraW5nUGFydHMuZGF5ICE9PSBudWxsID8gYCR7d29ya2luZ1BhcnRzLnllYXJ9LSR7d29ya2luZ1BhcnRzLm1vbnRofS0ke3dvcmtpbmdQYXJ0cy5kYXl9YCA6IGAke2RlZmF1bHRQYXJ0cy55ZWFyfS0ke2RlZmF1bHRQYXJ0cy5tb250aH0tJHtkZWZhdWx0UGFydHMuZGF5fWA7XG4gICAgcmV0dXJuIGgoXCJpb24tcGlja2VyLWNvbHVtblwiLCB7XG4gICAgICBcImFyaWEtbGFiZWxcIjogXCJTZWxlY3QgYSBkYXRlXCIsXG4gICAgICBjbGFzczogXCJkYXRlLWNvbHVtblwiLFxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICB2YWx1ZTogdG9kYXlTdHJpbmcsXG4gICAgICBvbklvbkNoYW5nZTogZXYgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSA9IGV2LmRldGFpbDtcbiAgICAgICAgY29uc3QgZmluZFBhcnQgPSBwYXJ0cy5maW5kKCh7XG4gICAgICAgICAgbW9udGgsXG4gICAgICAgICAgZGF5LFxuICAgICAgICAgIHllYXJcbiAgICAgICAgfSkgPT4gdmFsdWUgPT09IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWApO1xuICAgICAgICB0aGlzLnNldFdvcmtpbmdQYXJ0cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHdvcmtpbmdQYXJ0cyksIGZpbmRQYXJ0KSk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlUGFydHMoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBhY3RpdmVQYXJ0KSwgZmluZFBhcnQpKTtcbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSwgaXRlbXMubWFwKGl0ZW0gPT4gaChcImlvbi1waWNrZXItY29sdW1uLW9wdGlvblwiLCB7XG4gICAgICBwYXJ0OiBpdGVtLnZhbHVlID09PSB0b2RheVN0cmluZyA/IGAke1dIRUVMX0lURU1fUEFSVH0gJHtXSEVFTF9JVEVNX0FDVElWRV9QQVJUfWAgOiBXSEVFTF9JVEVNX1BBUlQsXG4gICAgICBrZXk6IGl0ZW0udmFsdWUsXG4gICAgICBkaXNhYmxlZDogaXRlbS5kaXNhYmxlZCxcbiAgICAgIHZhbHVlOiBpdGVtLnZhbHVlXG4gICAgfSwgaXRlbS50ZXh0KSkpO1xuICB9XG4gIHJlbmRlckluZGl2aWR1YWxEYXRlUGlja2VyQ29sdW1ucyhmb3JjZVByZXNlbnRhdGlvbikge1xuICAgIGNvbnN0IHtcbiAgICAgIHdvcmtpbmdQYXJ0cyxcbiAgICAgIGlzRGF0ZUVuYWJsZWRcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBzaG91bGRSZW5kZXJNb250aHMgPSBmb3JjZVByZXNlbnRhdGlvbiAhPT0gJ3llYXInICYmIGZvcmNlUHJlc2VudGF0aW9uICE9PSAndGltZSc7XG4gICAgY29uc3QgbW9udGhzID0gc2hvdWxkUmVuZGVyTW9udGhzID8gZ2V0TW9udGhDb2x1bW5EYXRhKHRoaXMubG9jYWxlLCB3b3JraW5nUGFydHMsIHRoaXMubWluUGFydHMsIHRoaXMubWF4UGFydHMsIHRoaXMucGFyc2VkTW9udGhWYWx1ZXMpIDogW107XG4gICAgY29uc3Qgc2hvdWxkUmVuZGVyRGF5cyA9IGZvcmNlUHJlc2VudGF0aW9uID09PSAnZGF0ZSc7XG4gICAgbGV0IGRheXMgPSBzaG91bGRSZW5kZXJEYXlzID8gZ2V0RGF5Q29sdW1uRGF0YSh0aGlzLmxvY2FsZSwgd29ya2luZ1BhcnRzLCB0aGlzLm1pblBhcnRzLCB0aGlzLm1heFBhcnRzLCB0aGlzLnBhcnNlZERheVZhbHVlcykgOiBbXTtcbiAgICBpZiAoaXNEYXRlRW5hYmxlZCkge1xuICAgICAgZGF5cyA9IGRheXMubWFwKGRheU9iamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9ID0gZGF5T2JqZWN0O1xuICAgICAgICBjb25zdCB2YWx1ZU51bSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBwYXJzZUludCh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlUGFydHMgPSB7XG4gICAgICAgICAgbW9udGg6IHdvcmtpbmdQYXJ0cy5tb250aCxcbiAgICAgICAgICBkYXk6IHZhbHVlTnVtLFxuICAgICAgICAgIHllYXI6IHdvcmtpbmdQYXJ0cy55ZWFyXG4gICAgICAgIH07XG4gICAgICAgIGxldCBkaXNhYmxlZDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUaGUgYGlzRGF0ZUVuYWJsZWRgIGltcGxlbWVudGF0aW9uIGlzIHRyeS1jYXRjaCB3cmFwcGVkXG4gICAgICAgICAgICogdG8gcHJldmVudCBleGNlcHRpb25zIGluIHRoZSB1c2VyJ3MgZnVuY3Rpb24gZnJvbVxuICAgICAgICAgICAqIGludGVycnVwdGluZyB0aGUgY2FsZW5kYXIgcmVuZGVyaW5nLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGRpc2FibGVkID0gIWlzRGF0ZUVuYWJsZWQoY29udmVydERhdGFUb0lTTyhyZWZlcmVuY2VQYXJ0cykpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcHJpbnRJb25FcnJvcignRXhjZXB0aW9uIHRocm93biBmcm9tIHByb3ZpZGVkIGBpc0RhdGVFbmFibGVkYCBmdW5jdGlvbi4gUGxlYXNlIGNoZWNrIHlvdXIgZnVuY3Rpb24gYW5kIHRyeSBhZ2Fpbi4nLCBlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXlPYmplY3QpLCB7XG4gICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkUmVuZGVyWWVhcnMgPSBmb3JjZVByZXNlbnRhdGlvbiAhPT0gJ21vbnRoJyAmJiBmb3JjZVByZXNlbnRhdGlvbiAhPT0gJ3RpbWUnO1xuICAgIGNvbnN0IHllYXJzID0gc2hvdWxkUmVuZGVyWWVhcnMgPyBnZXRZZWFyQ29sdW1uRGF0YSh0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0UGFydHMsIHRoaXMubWluUGFydHMsIHRoaXMubWF4UGFydHMsIHRoaXMucGFyc2VkWWVhclZhbHVlcykgOiBbXTtcbiAgICAvKipcbiAgICAgKiBDZXJ0YWluIGxvY2FsZXMgc2hvdyB0aGUgZGF5IGJlZm9yZSB0aGUgbW9udGguXG4gICAgICovXG4gICAgY29uc3Qgc2hvd01vbnRoRmlyc3QgPSBpc01vbnRoRmlyc3RMb2NhbGUodGhpcy5sb2NhbGUsIHtcbiAgICAgIG1vbnRoOiAnbnVtZXJpYycsXG4gICAgICBkYXk6ICdudW1lcmljJ1xuICAgIH0pO1xuICAgIGxldCByZW5kZXJBcnJheSA9IFtdO1xuICAgIGlmIChzaG93TW9udGhGaXJzdCkge1xuICAgICAgcmVuZGVyQXJyYXkgPSBbdGhpcy5yZW5kZXJNb250aFBpY2tlckNvbHVtbihtb250aHMpLCB0aGlzLnJlbmRlckRheVBpY2tlckNvbHVtbihkYXlzKSwgdGhpcy5yZW5kZXJZZWFyUGlja2VyQ29sdW1uKHllYXJzKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlckFycmF5ID0gW3RoaXMucmVuZGVyRGF5UGlja2VyQ29sdW1uKGRheXMpLCB0aGlzLnJlbmRlck1vbnRoUGlja2VyQ29sdW1uKG1vbnRocyksIHRoaXMucmVuZGVyWWVhclBpY2tlckNvbHVtbih5ZWFycyldO1xuICAgIH1cbiAgICByZXR1cm4gcmVuZGVyQXJyYXk7XG4gIH1cbiAgcmVuZGVyRGF5UGlja2VyQ29sdW1uKGRheXMpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKGRheXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkLFxuICAgICAgd29ya2luZ1BhcnRzXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgYWN0aXZlUGFydCA9IHRoaXMuZ2V0QWN0aXZlUGFydHNXaXRoRmFsbGJhY2soKTtcbiAgICBjb25zdCBwaWNrZXJDb2x1bW5WYWx1ZSA9IChfYSA9IHdvcmtpbmdQYXJ0cy5kYXkgIT09IG51bGwgPyB3b3JraW5nUGFydHMuZGF5IDogdGhpcy5kZWZhdWx0UGFydHMuZGF5KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIGgoXCJpb24tcGlja2VyLWNvbHVtblwiLCB7XG4gICAgICBcImFyaWEtbGFiZWxcIjogXCJTZWxlY3QgYSBkYXlcIixcbiAgICAgIGNsYXNzOiBcImRheS1jb2x1bW5cIixcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgdmFsdWU6IHBpY2tlckNvbHVtblZhbHVlLFxuICAgICAgb25Jb25DaGFuZ2U6IGV2ID0+IHtcbiAgICAgICAgdGhpcy5zZXRXb3JraW5nUGFydHMoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB3b3JraW5nUGFydHMpLCB7XG4gICAgICAgICAgZGF5OiBldi5kZXRhaWwudmFsdWVcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVBhcnRzKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgYWN0aXZlUGFydCksIHtcbiAgICAgICAgICBkYXk6IGV2LmRldGFpbC52YWx1ZVxuICAgICAgICB9KSk7XG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH0sIGRheXMubWFwKGRheSA9PiBoKFwiaW9uLXBpY2tlci1jb2x1bW4tb3B0aW9uXCIsIHtcbiAgICAgIHBhcnQ6IGRheS52YWx1ZSA9PT0gcGlja2VyQ29sdW1uVmFsdWUgPyBgJHtXSEVFTF9JVEVNX1BBUlR9ICR7V0hFRUxfSVRFTV9BQ1RJVkVfUEFSVH1gIDogV0hFRUxfSVRFTV9QQVJULFxuICAgICAga2V5OiBkYXkudmFsdWUsXG4gICAgICBkaXNhYmxlZDogZGF5LmRpc2FibGVkLFxuICAgICAgdmFsdWU6IGRheS52YWx1ZVxuICAgIH0sIGRheS50ZXh0KSkpO1xuICB9XG4gIHJlbmRlck1vbnRoUGlja2VyQ29sdW1uKG1vbnRocykge1xuICAgIGlmIChtb250aHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkLFxuICAgICAgd29ya2luZ1BhcnRzXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgYWN0aXZlUGFydCA9IHRoaXMuZ2V0QWN0aXZlUGFydHNXaXRoRmFsbGJhY2soKTtcbiAgICByZXR1cm4gaChcImlvbi1waWNrZXItY29sdW1uXCIsIHtcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIlNlbGVjdCBhIG1vbnRoXCIsXG4gICAgICBjbGFzczogXCJtb250aC1jb2x1bW5cIixcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgdmFsdWU6IHdvcmtpbmdQYXJ0cy5tb250aCxcbiAgICAgIG9uSW9uQ2hhbmdlOiBldiA9PiB7XG4gICAgICAgIHRoaXMuc2V0V29ya2luZ1BhcnRzKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgd29ya2luZ1BhcnRzKSwge1xuICAgICAgICAgIG1vbnRoOiBldi5kZXRhaWwudmFsdWVcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVBhcnRzKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgYWN0aXZlUGFydCksIHtcbiAgICAgICAgICBtb250aDogZXYuZGV0YWlsLnZhbHVlXG4gICAgICAgIH0pKTtcbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSwgbW9udGhzLm1hcChtb250aCA9PiBoKFwiaW9uLXBpY2tlci1jb2x1bW4tb3B0aW9uXCIsIHtcbiAgICAgIHBhcnQ6IG1vbnRoLnZhbHVlID09PSB3b3JraW5nUGFydHMubW9udGggPyBgJHtXSEVFTF9JVEVNX1BBUlR9ICR7V0hFRUxfSVRFTV9BQ1RJVkVfUEFSVH1gIDogV0hFRUxfSVRFTV9QQVJULFxuICAgICAga2V5OiBtb250aC52YWx1ZSxcbiAgICAgIGRpc2FibGVkOiBtb250aC5kaXNhYmxlZCxcbiAgICAgIHZhbHVlOiBtb250aC52YWx1ZVxuICAgIH0sIG1vbnRoLnRleHQpKSk7XG4gIH1cbiAgcmVuZGVyWWVhclBpY2tlckNvbHVtbih5ZWFycykge1xuICAgIGlmICh5ZWFycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWQsXG4gICAgICB3b3JraW5nUGFydHNcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBhY3RpdmVQYXJ0ID0gdGhpcy5nZXRBY3RpdmVQYXJ0c1dpdGhGYWxsYmFjaygpO1xuICAgIHJldHVybiBoKFwiaW9uLXBpY2tlci1jb2x1bW5cIiwge1xuICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiU2VsZWN0IGEgeWVhclwiLFxuICAgICAgY2xhc3M6IFwieWVhci1jb2x1bW5cIixcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgdmFsdWU6IHdvcmtpbmdQYXJ0cy55ZWFyLFxuICAgICAgb25Jb25DaGFuZ2U6IGV2ID0+IHtcbiAgICAgICAgdGhpcy5zZXRXb3JraW5nUGFydHMoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB3b3JraW5nUGFydHMpLCB7XG4gICAgICAgICAgeWVhcjogZXYuZGV0YWlsLnZhbHVlXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVQYXJ0cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGFjdGl2ZVBhcnQpLCB7XG4gICAgICAgICAgeWVhcjogZXYuZGV0YWlsLnZhbHVlXG4gICAgICAgIH0pKTtcbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSwgeWVhcnMubWFwKHllYXIgPT4gaChcImlvbi1waWNrZXItY29sdW1uLW9wdGlvblwiLCB7XG4gICAgICBwYXJ0OiB5ZWFyLnZhbHVlID09PSB3b3JraW5nUGFydHMueWVhciA/IGAke1dIRUVMX0lURU1fUEFSVH0gJHtXSEVFTF9JVEVNX0FDVElWRV9QQVJUfWAgOiBXSEVFTF9JVEVNX1BBUlQsXG4gICAgICBrZXk6IHllYXIudmFsdWUsXG4gICAgICBkaXNhYmxlZDogeWVhci5kaXNhYmxlZCxcbiAgICAgIHZhbHVlOiB5ZWFyLnZhbHVlXG4gICAgfSwgeWVhci50ZXh0KSkpO1xuICB9XG4gIHJlbmRlclRpbWVQaWNrZXJDb2x1bW5zKGZvcmNlUHJlc2VudGF0aW9uKSB7XG4gICAgaWYgKFsnZGF0ZScsICdtb250aCcsICdtb250aC15ZWFyJywgJ3llYXInXS5pbmNsdWRlcyhmb3JjZVByZXNlbnRhdGlvbikpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWYgYSB1c2VyIGhhcyBub3Qgc2VsZWN0ZWQgYSBkYXRlLFxuICAgICAqIHRoZW4gd2Ugc2hvdWxkIHNob3cgYWxsIHRpbWVzLiBJZiB0aGVcbiAgICAgKiB1c2VyIGhhcyBzZWxlY3RlZCBhIGRhdGUgKGV2ZW4gaWYgaXQgaGFzXG4gICAgICogbm90IGJlZW4gY29uZmlybWVkIHlldCksIHdlIHNob3VsZCBhcHBseVxuICAgICAqIHRoZSBtYXggYW5kIG1pbiByZXN0cmljdGlvbnMgc28gdGhhdCB0aGVcbiAgICAgKiB0aW1lIHBpY2tlciBzaG93cyB2YWx1ZXMgdGhhdCBhcmVcbiAgICAgKiBhcHByb3ByaWF0ZSBmb3IgdGhlIHNlbGVjdGVkIGRhdGUuXG4gICAgICovXG4gICAgY29uc3QgYWN0aXZlUGFydCA9IHRoaXMuZ2V0QWN0aXZlUGFydCgpO1xuICAgIGNvbnN0IHVzZXJIYXNTZWxlY3RlZERhdGUgPSBhY3RpdmVQYXJ0ICE9PSB1bmRlZmluZWQ7XG4gICAgY29uc3Qge1xuICAgICAgaG91cnNEYXRhLFxuICAgICAgbWludXRlc0RhdGEsXG4gICAgICBkYXlQZXJpb2REYXRhXG4gICAgfSA9IGdldFRpbWVDb2x1bW5zRGF0YSh0aGlzLmxvY2FsZSwgdGhpcy53b3JraW5nUGFydHMsIHRoaXMuaG91ckN5Y2xlLCB1c2VySGFzU2VsZWN0ZWREYXRlID8gdGhpcy5taW5QYXJ0cyA6IHVuZGVmaW5lZCwgdXNlckhhc1NlbGVjdGVkRGF0ZSA/IHRoaXMubWF4UGFydHMgOiB1bmRlZmluZWQsIHRoaXMucGFyc2VkSG91clZhbHVlcywgdGhpcy5wYXJzZWRNaW51dGVWYWx1ZXMpO1xuICAgIHJldHVybiBbdGhpcy5yZW5kZXJIb3VyUGlja2VyQ29sdW1uKGhvdXJzRGF0YSksIHRoaXMucmVuZGVyTWludXRlUGlja2VyQ29sdW1uKG1pbnV0ZXNEYXRhKSwgdGhpcy5yZW5kZXJEYXlQZXJpb2RQaWNrZXJDb2x1bW4oZGF5UGVyaW9kRGF0YSldO1xuICB9XG4gIHJlbmRlckhvdXJQaWNrZXJDb2x1bW4oaG91cnNEYXRhKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWQsXG4gICAgICB3b3JraW5nUGFydHNcbiAgICB9ID0gdGhpcztcbiAgICBpZiAoaG91cnNEYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuICAgIGNvbnN0IGFjdGl2ZVBhcnQgPSB0aGlzLmdldEFjdGl2ZVBhcnRzV2l0aEZhbGxiYWNrKCk7XG4gICAgcmV0dXJuIGgoXCJpb24tcGlja2VyLWNvbHVtblwiLCB7XG4gICAgICBcImFyaWEtbGFiZWxcIjogXCJTZWxlY3QgYW4gaG91clwiLFxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICB2YWx1ZTogYWN0aXZlUGFydC5ob3VyLFxuICAgICAgbnVtZXJpY0lucHV0OiB0cnVlLFxuICAgICAgb25Jb25DaGFuZ2U6IGV2ID0+IHtcbiAgICAgICAgdGhpcy5zZXRXb3JraW5nUGFydHMoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB3b3JraW5nUGFydHMpLCB7XG4gICAgICAgICAgaG91cjogZXYuZGV0YWlsLnZhbHVlXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVQYXJ0cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZ2V0QWN0aXZlUGFydHNXaXRoRmFsbGJhY2soKSksIHtcbiAgICAgICAgICBob3VyOiBldi5kZXRhaWwudmFsdWVcbiAgICAgICAgfSkpO1xuICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9LCBob3Vyc0RhdGEubWFwKGhvdXIgPT4gaChcImlvbi1waWNrZXItY29sdW1uLW9wdGlvblwiLCB7XG4gICAgICBwYXJ0OiBob3VyLnZhbHVlID09PSBhY3RpdmVQYXJ0LmhvdXIgPyBgJHtXSEVFTF9JVEVNX1BBUlR9ICR7V0hFRUxfSVRFTV9BQ1RJVkVfUEFSVH1gIDogV0hFRUxfSVRFTV9QQVJULFxuICAgICAga2V5OiBob3VyLnZhbHVlLFxuICAgICAgZGlzYWJsZWQ6IGhvdXIuZGlzYWJsZWQsXG4gICAgICB2YWx1ZTogaG91ci52YWx1ZVxuICAgIH0sIGhvdXIudGV4dCkpKTtcbiAgfVxuICByZW5kZXJNaW51dGVQaWNrZXJDb2x1bW4obWludXRlc0RhdGEpIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHdvcmtpbmdQYXJ0c1xuICAgIH0gPSB0aGlzO1xuICAgIGlmIChtaW51dGVzRGF0YS5sZW5ndGggPT09IDApIHJldHVybiBbXTtcbiAgICBjb25zdCBhY3RpdmVQYXJ0ID0gdGhpcy5nZXRBY3RpdmVQYXJ0c1dpdGhGYWxsYmFjaygpO1xuICAgIHJldHVybiBoKFwiaW9uLXBpY2tlci1jb2x1bW5cIiwge1xuICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiU2VsZWN0IGEgbWludXRlXCIsXG4gICAgICBjb2xvcjogdGhpcy5jb2xvcixcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgIHZhbHVlOiBhY3RpdmVQYXJ0Lm1pbnV0ZSxcbiAgICAgIG51bWVyaWNJbnB1dDogdHJ1ZSxcbiAgICAgIG9uSW9uQ2hhbmdlOiBldiA9PiB7XG4gICAgICAgIHRoaXMuc2V0V29ya2luZ1BhcnRzKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgd29ya2luZ1BhcnRzKSwge1xuICAgICAgICAgIG1pbnV0ZTogZXYuZGV0YWlsLnZhbHVlXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVQYXJ0cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZ2V0QWN0aXZlUGFydHNXaXRoRmFsbGJhY2soKSksIHtcbiAgICAgICAgICBtaW51dGU6IGV2LmRldGFpbC52YWx1ZVxuICAgICAgICB9KSk7XG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH0sIG1pbnV0ZXNEYXRhLm1hcChtaW51dGUgPT4gaChcImlvbi1waWNrZXItY29sdW1uLW9wdGlvblwiLCB7XG4gICAgICBwYXJ0OiBtaW51dGUudmFsdWUgPT09IGFjdGl2ZVBhcnQubWludXRlID8gYCR7V0hFRUxfSVRFTV9QQVJUfSAke1dIRUVMX0lURU1fQUNUSVZFX1BBUlR9YCA6IFdIRUVMX0lURU1fUEFSVCxcbiAgICAgIGtleTogbWludXRlLnZhbHVlLFxuICAgICAgZGlzYWJsZWQ6IG1pbnV0ZS5kaXNhYmxlZCxcbiAgICAgIHZhbHVlOiBtaW51dGUudmFsdWVcbiAgICB9LCBtaW51dGUudGV4dCkpKTtcbiAgfVxuICByZW5kZXJEYXlQZXJpb2RQaWNrZXJDb2x1bW4oZGF5UGVyaW9kRGF0YSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkLFxuICAgICAgd29ya2luZ1BhcnRzXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKGRheVBlcmlvZERhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGFjdGl2ZVBhcnQgPSB0aGlzLmdldEFjdGl2ZVBhcnRzV2l0aEZhbGxiYWNrKCk7XG4gICAgY29uc3QgaXNEYXlQZXJpb2RSVEwgPSBpc0xvY2FsZURheVBlcmlvZFJUTCh0aGlzLmxvY2FsZSk7XG4gICAgcmV0dXJuIGgoXCJpb24tcGlja2VyLWNvbHVtblwiLCB7XG4gICAgICBcImFyaWEtbGFiZWxcIjogXCJTZWxlY3QgYSBkYXkgcGVyaW9kXCIsXG4gICAgICBzdHlsZTogaXNEYXlQZXJpb2RSVEwgPyB7XG4gICAgICAgIG9yZGVyOiAnLTEnXG4gICAgICB9IDoge30sXG4gICAgICBjb2xvcjogdGhpcy5jb2xvcixcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgIHZhbHVlOiBhY3RpdmVQYXJ0LmFtcG0sXG4gICAgICBvbklvbkNoYW5nZTogZXYgPT4ge1xuICAgICAgICBjb25zdCBob3VyID0gY2FsY3VsYXRlSG91ckZyb21BTVBNKHdvcmtpbmdQYXJ0cywgZXYuZGV0YWlsLnZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRXb3JraW5nUGFydHMoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB3b3JraW5nUGFydHMpLCB7XG4gICAgICAgICAgYW1wbTogZXYuZGV0YWlsLnZhbHVlLFxuICAgICAgICAgIGhvdXJcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVBhcnRzKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5nZXRBY3RpdmVQYXJ0c1dpdGhGYWxsYmFjaygpKSwge1xuICAgICAgICAgIGFtcG06IGV2LmRldGFpbC52YWx1ZSxcbiAgICAgICAgICBob3VyXG4gICAgICAgIH0pKTtcbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSwgZGF5UGVyaW9kRGF0YS5tYXAoZGF5UGVyaW9kID0+IGgoXCJpb24tcGlja2VyLWNvbHVtbi1vcHRpb25cIiwge1xuICAgICAgcGFydDogZGF5UGVyaW9kLnZhbHVlID09PSBhY3RpdmVQYXJ0LmFtcG0gPyBgJHtXSEVFTF9JVEVNX1BBUlR9ICR7V0hFRUxfSVRFTV9BQ1RJVkVfUEFSVH1gIDogV0hFRUxfSVRFTV9QQVJULFxuICAgICAga2V5OiBkYXlQZXJpb2QudmFsdWUsXG4gICAgICBkaXNhYmxlZDogZGF5UGVyaW9kLmRpc2FibGVkLFxuICAgICAgdmFsdWU6IGRheVBlcmlvZC52YWx1ZVxuICAgIH0sIGRheVBlcmlvZC50ZXh0KSkpO1xuICB9XG4gIHJlbmRlcldoZWVsVmlldyhmb3JjZVByZXNlbnRhdGlvbikge1xuICAgIGNvbnN0IHtcbiAgICAgIGxvY2FsZVxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IHNob3dNb250aEZpcnN0ID0gaXNNb250aEZpcnN0TG9jYWxlKGxvY2FsZSk7XG4gICAgY29uc3QgY29sdW1uT3JkZXIgPSBzaG93TW9udGhGaXJzdCA/ICdtb250aC1maXJzdCcgOiAneWVhci1maXJzdCc7XG4gICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IHtcbiAgICAgICAgW2B3aGVlbC1vcmRlci0ke2NvbHVtbk9yZGVyfWBdOiB0cnVlXG4gICAgICB9XG4gICAgfSwgdGhpcy5yZW5kZXJXaGVlbFBpY2tlcihmb3JjZVByZXNlbnRhdGlvbikpO1xuICB9XG4gIC8qKlxuICAgKiBHcmlkIFJlbmRlciBNZXRob2RzXG4gICAqL1xuICByZW5kZXJDYWxlbmRhckhlYWRlcihtb2RlKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWRcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBleHBhbmRlZEljb24gPSBtb2RlID09PSAnaW9zJyA/IGNoZXZyb25Eb3duIDogY2FyZXRVcFNoYXJwO1xuICAgIGNvbnN0IGNvbGxhcHNlZEljb24gPSBtb2RlID09PSAnaW9zJyA/IGNoZXZyb25Gb3J3YXJkIDogY2FyZXREb3duU2hhcnA7XG4gICAgY29uc3QgcHJldk1vbnRoRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCBpc1ByZXZNb250aERpc2FibGVkKHRoaXMud29ya2luZ1BhcnRzLCB0aGlzLm1pblBhcnRzLCB0aGlzLm1heFBhcnRzKTtcbiAgICBjb25zdCBuZXh0TW9udGhEaXNhYmxlZCA9IGRpc2FibGVkIHx8IGlzTmV4dE1vbnRoRGlzYWJsZWQodGhpcy53b3JraW5nUGFydHMsIHRoaXMubWF4UGFydHMpO1xuICAgIC8vIGRvbid0IHVzZSB0aGUgaW5oZXJpdEF0dHJpYnV0ZXMgdXRpbCBiZWNhdXNlIGl0IHJlbW92ZXMgZGlyIGZyb20gdGhlIGhvc3QsIGFuZCB3ZSBzdGlsbCBuZWVkIHRoYXRcbiAgICBjb25zdCBob3N0RGlyID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2RpcicpIHx8IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJjYWxlbmRhci1oZWFkZXJcIlxuICAgIH0sIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiY2FsZW5kYXItYWN0aW9uLWJ1dHRvbnNcIlxuICAgIH0sIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiY2FsZW5kYXItbW9udGgteWVhclwiXG4gICAgfSwgaChcImJ1dHRvblwiLCB7XG4gICAgICBjbGFzczoge1xuICAgICAgICAnY2FsZW5kYXItbW9udGgteWVhci10b2dnbGUnOiB0cnVlLFxuICAgICAgICAnaW9uLWFjdGl2YXRhYmxlJzogdHJ1ZSxcbiAgICAgICAgJ2lvbi1mb2N1c2FibGUnOiB0cnVlXG4gICAgICB9LFxuICAgICAgcGFydDogXCJtb250aC15ZWFyLWJ1dHRvblwiLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgXCJhcmlhLWxhYmVsXCI6IHRoaXMuc2hvd01vbnRoQW5kWWVhciA/ICdIaWRlIHllYXIgcGlja2VyJyA6ICdTaG93IHllYXIgcGlja2VyJyxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMudG9nZ2xlTW9udGhBbmRZZWFyVmlldygpXG4gICAgfSwgaChcInNwYW5cIiwge1xuICAgICAgaWQ6IFwidG9nZ2xlLXdyYXBwZXJcIlxuICAgIH0sIGdldE1vbnRoQW5kWWVhcih0aGlzLmxvY2FsZSwgdGhpcy53b3JraW5nUGFydHMpLCBoKFwiaW9uLWljb25cIiwge1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIGljb246IHRoaXMuc2hvd01vbnRoQW5kWWVhciA/IGV4cGFuZGVkSWNvbiA6IGNvbGxhcHNlZEljb24sXG4gICAgICBsYXp5OiBmYWxzZSxcbiAgICAgIGZsaXBSdGw6IHRydWVcbiAgICB9KSksIG1vZGUgPT09ICdtZCcgJiYgaChcImlvbi1yaXBwbGUtZWZmZWN0XCIsIG51bGwpKSksIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiY2FsZW5kYXItbmV4dC1wcmV2XCJcbiAgICB9LCBoKFwiaW9uLWJ1dHRvbnNcIiwgbnVsbCwgaChcImlvbi1idXR0b25cIiwge1xuICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiUHJldmlvdXMgbW9udGhcIixcbiAgICAgIGRpc2FibGVkOiBwcmV2TW9udGhEaXNhYmxlZCxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMucHJldk1vbnRoKClcbiAgICB9LCBoKFwiaW9uLWljb25cIiwge1xuICAgICAgZGlyOiBob3N0RGlyLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIHNsb3Q6IFwiaWNvbi1vbmx5XCIsXG4gICAgICBpY29uOiBjaGV2cm9uQmFjayxcbiAgICAgIGxhenk6IGZhbHNlLFxuICAgICAgZmxpcFJ0bDogdHJ1ZVxuICAgIH0pKSwgaChcImlvbi1idXR0b25cIiwge1xuICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiTmV4dCBtb250aFwiLFxuICAgICAgZGlzYWJsZWQ6IG5leHRNb250aERpc2FibGVkLFxuICAgICAgb25DbGljazogKCkgPT4gdGhpcy5uZXh0TW9udGgoKVxuICAgIH0sIGgoXCJpb24taWNvblwiLCB7XG4gICAgICBkaXI6IGhvc3REaXIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgc2xvdDogXCJpY29uLW9ubHlcIixcbiAgICAgIGljb246IGNoZXZyb25Gb3J3YXJkLFxuICAgICAgbGF6eTogZmFsc2UsXG4gICAgICBmbGlwUnRsOiB0cnVlXG4gICAgfSkpKSkpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImNhbGVuZGFyLWRheXMtb2Ytd2Vla1wiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH0sIGdldERheXNPZldlZWsodGhpcy5sb2NhbGUsIG1vZGUsIHRoaXMuZmlyc3REYXlPZldlZWsgJSA3KS5tYXAoZCA9PiB7XG4gICAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzOiBcImRheS1vZi13ZWVrXCJcbiAgICAgIH0sIGQpO1xuICAgIH0pKSk7XG4gIH1cbiAgcmVuZGVyTW9udGgobW9udGgsIHllYXIpIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHJlYWRvbmx5XG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgeWVhckFsbG93ZWQgPSB0aGlzLnBhcnNlZFllYXJWYWx1ZXMgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnBhcnNlZFllYXJWYWx1ZXMuaW5jbHVkZXMoeWVhcik7XG4gICAgY29uc3QgbW9udGhBbGxvd2VkID0gdGhpcy5wYXJzZWRNb250aFZhbHVlcyA9PT0gdW5kZWZpbmVkIHx8IHRoaXMucGFyc2VkTW9udGhWYWx1ZXMuaW5jbHVkZXMobW9udGgpO1xuICAgIGNvbnN0IGlzQ2FsTW9udGhEaXNhYmxlZCA9ICF5ZWFyQWxsb3dlZCB8fCAhbW9udGhBbGxvd2VkO1xuICAgIGNvbnN0IGlzRGF0ZXRpbWVEaXNhYmxlZCA9IGRpc2FibGVkIHx8IHJlYWRvbmx5O1xuICAgIGNvbnN0IHN3aXBlRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCBpc01vbnRoRGlzYWJsZWQoe1xuICAgICAgbW9udGgsXG4gICAgICB5ZWFyLFxuICAgICAgZGF5OiBudWxsXG4gICAgfSwge1xuICAgICAgLy8gVGhlIGRheSBpcyBub3QgdXNlZCB3aGVuIGNoZWNraW5nIGlmIGEgbW9udGggaXMgZGlzYWJsZWQuXG4gICAgICAvLyBVc2VycyBzaG91bGQgYmUgYWJsZSB0byBhY2Nlc3MgdGhlIG1pbiBvciBtYXggbW9udGgsIGV2ZW4gaWYgdGhlXG4gICAgICAvLyBtaW4vbWF4IGRhdGUgaXMgb3V0IG9mIGJvdW5kcyAoZS5nLiBtaW4gaXMgc2V0IHRvIEZlYiAxNSwgRmViIHNob3VsZCBub3QgYmUgZGlzYWJsZWQpLlxuICAgICAgbWluUGFydHM6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5taW5QYXJ0cyksIHtcbiAgICAgICAgZGF5OiBudWxsXG4gICAgICB9KSxcbiAgICAgIG1heFBhcnRzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMubWF4UGFydHMpLCB7XG4gICAgICAgIGRheTogbnVsbFxuICAgICAgfSlcbiAgICB9KTtcbiAgICAvLyBUaGUgd29ya2luZyBtb250aCBzaG91bGQgbmV2ZXIgaGF2ZSBzd2lwZSBkaXNhYmxlZC5cbiAgICAvLyBPdGhlcndpc2UgdGhlIENTUyBzY3JvbGwgc25hcCB3aWxsIG5vdCB3b3JrIGFuZCB0aGUgdXNlclxuICAgIC8vIGNhbiBmcmVlLXNjcm9sbCB0aGUgY2FsZW5kYXIuXG4gICAgY29uc3QgaXNXb3JraW5nTW9udGggPSB0aGlzLndvcmtpbmdQYXJ0cy5tb250aCA9PT0gbW9udGggJiYgdGhpcy53b3JraW5nUGFydHMueWVhciA9PT0geWVhcjtcbiAgICBjb25zdCBhY3RpdmVQYXJ0ID0gdGhpcy5nZXRBY3RpdmVQYXJ0c1dpdGhGYWxsYmFjaygpO1xuICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogIWlzV29ya2luZ01vbnRoID8gJ3RydWUnIDogbnVsbCxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICdjYWxlbmRhci1tb250aCc6IHRydWUsXG4gICAgICAgIC8vIFByZXZlbnRzIHNjcm9sbCBzbmFwIHN3aXBlIGdlc3R1cmVzIGZvciBtb250aHMgb3V0c2lkZSBvZiB0aGUgbWluL21heCBib3VuZHNcbiAgICAgICAgJ2NhbGVuZGFyLW1vbnRoLWRpc2FibGVkJzogIWlzV29ya2luZ01vbnRoICYmIHN3aXBlRGlzYWJsZWRcbiAgICAgIH1cbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImNhbGVuZGFyLW1vbnRoLWdyaWRcIlxuICAgIH0sIGdldERheXNPZk1vbnRoKG1vbnRoLCB5ZWFyLCB0aGlzLmZpcnN0RGF5T2ZXZWVrICUgNykubWFwKChkYXRlT2JqZWN0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkYXksXG4gICAgICAgIGRheU9mV2Vla1xuICAgICAgfSA9IGRhdGVPYmplY3Q7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGVsLFxuICAgICAgICBoaWdobGlnaHRlZERhdGVzLFxuICAgICAgICBpc0RhdGVFbmFibGVkLFxuICAgICAgICBtdWx0aXBsZVxuICAgICAgfSA9IHRoaXM7XG4gICAgICBjb25zdCByZWZlcmVuY2VQYXJ0cyA9IHtcbiAgICAgICAgbW9udGgsXG4gICAgICAgIGRheSxcbiAgICAgICAgeWVhclxuICAgICAgfTtcbiAgICAgIGNvbnN0IGlzQ2FsZW5kYXJQYWRkaW5nID0gZGF5ID09PSBudWxsO1xuICAgICAgY29uc3Qge1xuICAgICAgICBpc0FjdGl2ZSxcbiAgICAgICAgaXNUb2RheSxcbiAgICAgICAgYXJpYUxhYmVsLFxuICAgICAgICBhcmlhU2VsZWN0ZWQsXG4gICAgICAgIGRpc2FibGVkOiBpc0RheURpc2FibGVkLFxuICAgICAgICB0ZXh0XG4gICAgICB9ID0gZ2V0Q2FsZW5kYXJEYXlTdGF0ZSh0aGlzLmxvY2FsZSwgcmVmZXJlbmNlUGFydHMsIHRoaXMuYWN0aXZlUGFydHMsIHRoaXMudG9kYXlQYXJ0cywgdGhpcy5taW5QYXJ0cywgdGhpcy5tYXhQYXJ0cywgdGhpcy5wYXJzZWREYXlWYWx1ZXMpO1xuICAgICAgY29uc3QgZGF0ZUlzb1N0cmluZyA9IGNvbnZlcnREYXRhVG9JU08ocmVmZXJlbmNlUGFydHMpO1xuICAgICAgbGV0IGlzQ2FsRGF5RGlzYWJsZWQgPSBpc0NhbE1vbnRoRGlzYWJsZWQgfHwgaXNEYXlEaXNhYmxlZDtcbiAgICAgIGlmICghaXNDYWxEYXlEaXNhYmxlZCAmJiBpc0RhdGVFbmFibGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUaGUgYGlzRGF0ZUVuYWJsZWRgIGltcGxlbWVudGF0aW9uIGlzIHRyeS1jYXRjaCB3cmFwcGVkXG4gICAgICAgICAgICogdG8gcHJldmVudCBleGNlcHRpb25zIGluIHRoZSB1c2VyJ3MgZnVuY3Rpb24gZnJvbVxuICAgICAgICAgICAqIGludGVycnVwdGluZyB0aGUgY2FsZW5kYXIgcmVuZGVyaW5nLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlzQ2FsRGF5RGlzYWJsZWQgPSAhaXNEYXRlRW5hYmxlZChkYXRlSXNvU3RyaW5nKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHByaW50SW9uRXJyb3IoJ0V4Y2VwdGlvbiB0aHJvd24gZnJvbSBwcm92aWRlZCBgaXNEYXRlRW5hYmxlZGAgZnVuY3Rpb24uIFBsZWFzZSBjaGVjayB5b3VyIGZ1bmN0aW9uIGFuZCB0cnkgYWdhaW4uJywgZWwsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIFNvbWUgZGF5cyBhcmUgY29uc3RyYWluZWQgdGhyb3VnaCBtYXggJiBtaW4gb3IgYWxsb3dlZCBkYXRlc1xuICAgICAgICogYW5kIGFsc28gZGlzYWJsZWQgYmVjYXVzZSB0aGUgY29tcG9uZW50IGlzIHJlYWRvbmx5IG9yIGRpc2FibGVkLlxuICAgICAgICogVGhlc2UgbmVlZCB0byBiZSBkaXNwbGF5ZWQgZGlmZmVyZW50bHkuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGlzQ2FsRGF5Q29uc3RyYWluZWQgPSBpc0NhbERheURpc2FibGVkICYmIGlzRGF0ZXRpbWVEaXNhYmxlZDtcbiAgICAgIGNvbnN0IGlzQnV0dG9uRGlzYWJsZWQgPSBpc0NhbERheURpc2FibGVkIHx8IGlzRGF0ZXRpbWVEaXNhYmxlZDtcbiAgICAgIGxldCBkYXRlU3R5bGUgPSB1bmRlZmluZWQ7XG4gICAgICAvKipcbiAgICAgICAqIEN1c3RvbSBoaWdobGlnaHQgc3R5bGVzIHNob3VsZCBub3Qgb3ZlcnJpZGUgdGhlIHN0eWxlIGZvciBzZWxlY3RlZCBkYXRlcyxcbiAgICAgICAqIG5vciBhcHBseSB0byBcImZpbGxlciBkYXlzXCIgYXQgdGhlIHN0YXJ0IG9mIHRoZSBncmlkLlxuICAgICAgICovXG4gICAgICBpZiAoaGlnaGxpZ2h0ZWREYXRlcyAhPT0gdW5kZWZpbmVkICYmICFpc0FjdGl2ZSAmJiBkYXkgIT09IG51bGwpIHtcbiAgICAgICAgZGF0ZVN0eWxlID0gZ2V0SGlnaGxpZ2h0U3R5bGVzKGhpZ2hsaWdodGVkRGF0ZXMsIGRhdGVJc29TdHJpbmcsIGVsKTtcbiAgICAgIH1cbiAgICAgIGxldCBkYXRlUGFydHMgPSB1bmRlZmluZWQ7XG4gICAgICAvLyBcIkZpbGxlciBkYXlzXCIgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgZ3JpZCBzaG91bGQgbm90IGdldCB0aGUgY2FsZW5kYXIgZGF5XG4gICAgICAvLyBDU1MgcGFydHMgYWRkZWQgdG8gdGhlbVxuICAgICAgaWYgKCFpc0NhbGVuZGFyUGFkZGluZykge1xuICAgICAgICBkYXRlUGFydHMgPSBgY2FsZW5kYXItZGF5JHtpc0FjdGl2ZSA/ICcgYWN0aXZlJyA6ICcnfSR7aXNUb2RheSA/ICcgdG9kYXknIDogJyd9JHtpc0NhbERheURpc2FibGVkID8gJyBkaXNhYmxlZCcgOiAnJ31gO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgICBjbGFzczogXCJjYWxlbmRhci1kYXktd3JhcHBlclwiXG4gICAgICB9LCBoKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byB1c2UgIWltcG9ydGFudCBmb3IgdGhlIGlubGluZSBzdHlsZXMgaGVyZSBiZWNhdXNlXG4gICAgICAgIC8vIG90aGVyd2lzZSB0aGUgQ1NTIHNoYWRvdyBwYXJ0cyB3aWxsIG92ZXJyaWRlIHRoZXNlIHN0eWxlcy5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL3dlYmNvbXBvbmVudHMvaXNzdWVzLzg0N1xuICAgICAgICAvLyBCb3RoIHRoZSBDU1Mgc2hhZG93IHBhcnRzIGFuZCBoaWdobGlnaHRlZERhdGVzIHN0eWxlcyBhcmVcbiAgICAgICAgLy8gcHJvdmlkZWQgYnkgdGhlIGRldmVsb3BlciwgYnV0IGhpZ2hsaWdodGVkRGF0ZXMgc3R5bGVzIHNob3VsZFxuICAgICAgICAvLyBhbHdheXMgdGFrZSBwcmlvcml0eS5cbiAgICAgICAgcmVmOiBlbCA9PiB7XG4gICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnY29sb3InLCBgJHtkYXRlU3R5bGUgPyBkYXRlU3R5bGUudGV4dENvbG9yIDogJyd9YCwgJ2ltcG9ydGFudCcpO1xuICAgICAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCBgJHtkYXRlU3R5bGUgPyBkYXRlU3R5bGUuYmFja2dyb3VuZENvbG9yIDogJyd9YCwgJ2ltcG9ydGFudCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGFiaW5kZXg6IFwiLTFcIixcbiAgICAgICAgXCJkYXRhLWRheVwiOiBkYXksXG4gICAgICAgIFwiZGF0YS1tb250aFwiOiBtb250aCxcbiAgICAgICAgXCJkYXRhLXllYXJcIjogeWVhcixcbiAgICAgICAgXCJkYXRhLWluZGV4XCI6IGluZGV4LFxuICAgICAgICBcImRhdGEtZGF5LW9mLXdlZWtcIjogZGF5T2ZXZWVrLFxuICAgICAgICBkaXNhYmxlZDogaXNCdXR0b25EaXNhYmxlZCxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAnY2FsZW5kYXItZGF5LXBhZGRpbmcnOiBpc0NhbGVuZGFyUGFkZGluZyxcbiAgICAgICAgICAnY2FsZW5kYXItZGF5JzogdHJ1ZSxcbiAgICAgICAgICAnY2FsZW5kYXItZGF5LWFjdGl2ZSc6IGlzQWN0aXZlLFxuICAgICAgICAgICdjYWxlbmRhci1kYXktY29uc3RyYWluZWQnOiBpc0NhbERheUNvbnN0cmFpbmVkLFxuICAgICAgICAgICdjYWxlbmRhci1kYXktdG9kYXknOiBpc1RvZGF5XG4gICAgICAgIH0sXG4gICAgICAgIHBhcnQ6IGRhdGVQYXJ0cyxcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBpc0NhbGVuZGFyUGFkZGluZyA/ICd0cnVlJyA6IG51bGwsXG4gICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBhcmlhU2VsZWN0ZWQsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWwsXG4gICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICBpZiAoaXNDYWxlbmRhclBhZGRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zZXRXb3JraW5nUGFydHMoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLndvcmtpbmdQYXJ0cyksIHtcbiAgICAgICAgICAgIG1vbnRoLFxuICAgICAgICAgICAgZGF5LFxuICAgICAgICAgICAgeWVhclxuICAgICAgICAgIH0pKTtcbiAgICAgICAgICAvLyBtdWx0aXBsZSBvbmx5IG5lZWRzIGRhdGUgaW5mbywgc28gd2UgY2FuIHdpcGUgb3V0IG90aGVyIGZpZWxkcyBsaWtlIHRpbWVcbiAgICAgICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlUGFydHMoe1xuICAgICAgICAgICAgICBtb250aCxcbiAgICAgICAgICAgICAgZGF5LFxuICAgICAgICAgICAgICB5ZWFyXG4gICAgICAgICAgICB9LCBpc0FjdGl2ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlUGFydHMoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBhY3RpdmVQYXJ0KSwge1xuICAgICAgICAgICAgICBtb250aCxcbiAgICAgICAgICAgICAgZGF5LFxuICAgICAgICAgICAgICB5ZWFyXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB0ZXh0KSk7XG4gICAgfSkpKTtcbiAgfVxuICByZW5kZXJDYWxlbmRhckJvZHkoKSB7XG4gICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiY2FsZW5kYXItYm9keSBpb24tZm9jdXNhYmxlXCIsXG4gICAgICByZWY6IGVsID0+IHRoaXMuY2FsZW5kYXJCb2R5UmVmID0gZWwsXG4gICAgICB0YWJpbmRleDogXCIwXCJcbiAgICB9LCBnZW5lcmF0ZU1vbnRocyh0aGlzLndvcmtpbmdQYXJ0cywgdGhpcy5mb3JjZVJlbmRlckRhdGUpLm1hcCgoe1xuICAgICAgbW9udGgsXG4gICAgICB5ZWFyXG4gICAgfSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyTW9udGgobW9udGgsIHllYXIpO1xuICAgIH0pKTtcbiAgfVxuICByZW5kZXJDYWxlbmRhcihtb2RlKSB7XG4gICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiZGF0ZXRpbWUtY2FsZW5kYXJcIixcbiAgICAgIGtleTogXCJkYXRldGltZS1jYWxlbmRhclwiXG4gICAgfSwgdGhpcy5yZW5kZXJDYWxlbmRhckhlYWRlcihtb2RlKSwgdGhpcy5yZW5kZXJDYWxlbmRhckJvZHkoKSk7XG4gIH1cbiAgcmVuZGVyVGltZUxhYmVsKCkge1xuICAgIGNvbnN0IGhhc1Nsb3R0ZWRUaW1lTGFiZWwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tzbG90PVwidGltZS1sYWJlbFwiXScpICE9PSBudWxsO1xuICAgIGlmICghaGFzU2xvdHRlZFRpbWVMYWJlbCAmJiAhdGhpcy5zaG93RGVmYXVsdFRpbWVMYWJlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gaChcInNsb3RcIiwge1xuICAgICAgbmFtZTogXCJ0aW1lLWxhYmVsXCJcbiAgICB9LCBcIlRpbWVcIik7XG4gIH1cbiAgcmVuZGVyVGltZU92ZXJsYXkoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWQsXG4gICAgICBob3VyQ3ljbGUsXG4gICAgICBpc1RpbWVQb3BvdmVyT3BlbixcbiAgICAgIGxvY2FsZSxcbiAgICAgIGZvcm1hdE9wdGlvbnNcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBjb21wdXRlZEhvdXJDeWNsZSA9IGdldEhvdXJDeWNsZShsb2NhbGUsIGhvdXJDeWNsZSk7XG4gICAgY29uc3QgYWN0aXZlUGFydCA9IHRoaXMuZ2V0QWN0aXZlUGFydHNXaXRoRmFsbGJhY2soKTtcbiAgICByZXR1cm4gW2goXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwidGltZS1oZWFkZXJcIlxuICAgIH0sIHRoaXMucmVuZGVyVGltZUxhYmVsKCkpLCBoKFwiYnV0dG9uXCIsIHtcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICd0aW1lLWJvZHknOiB0cnVlLFxuICAgICAgICAndGltZS1ib2R5LWFjdGl2ZSc6IGlzVGltZVBvcG92ZXJPcGVuXG4gICAgICB9LFxuICAgICAgcGFydDogYHRpbWUtYnV0dG9uJHtpc1RpbWVQb3BvdmVyT3BlbiA/ICcgYWN0aXZlJyA6ICcnfWAsXG4gICAgICBcImFyaWEtZXhwYW5kZWRcIjogXCJmYWxzZVwiLFxuICAgICAgXCJhcmlhLWhhc3BvcHVwXCI6IFwidHJ1ZVwiLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgb25DbGljazogYXN5bmMgZXYgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgcG9wb3ZlclJlZlxuICAgICAgICB9ID0gdGhpcztcbiAgICAgICAgaWYgKHBvcG92ZXJSZWYpIHtcbiAgICAgICAgICB0aGlzLmlzVGltZVBvcG92ZXJPcGVuID0gdHJ1ZTtcbiAgICAgICAgICBwb3BvdmVyUmVmLnByZXNlbnQobmV3IEN1c3RvbUV2ZW50KCdpb25TaGFkb3dUYXJnZXQnLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgaW9uU2hhZG93VGFyZ2V0OiBldi50YXJnZXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSk7XG4gICAgICAgICAgYXdhaXQgcG9wb3ZlclJlZi5vbldpbGxEaXNtaXNzKCk7XG4gICAgICAgICAgdGhpcy5pc1RpbWVQb3BvdmVyT3BlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgZ2V0TG9jYWxpemVkVGltZShsb2NhbGUsIGFjdGl2ZVBhcnQsIGNvbXB1dGVkSG91ckN5Y2xlLCBmb3JtYXRPcHRpb25zID09PSBudWxsIHx8IGZvcm1hdE9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZvcm1hdE9wdGlvbnMudGltZSkpLCBoKFwiaW9uLXBvcG92ZXJcIiwge1xuICAgICAgYWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgdHJhbnNsdWNlbnQ6IHRydWUsXG4gICAgICBvdmVybGF5SW5kZXg6IDEsXG4gICAgICBhcnJvdzogZmFsc2UsXG4gICAgICBvbldpbGxQcmVzZW50OiBldiA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcnNlY3Rpb24gT2JzZXJ2ZXJzIGRvIG5vdCBjb25zaXN0ZW50bHkgZmlyZSBiZXR3ZWVuIEJsaW5rIGFuZCBXZWJraXRcbiAgICAgICAgICogd2hlbiB0b2dnbGluZyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgcG9wb3ZlciBhbmQgdHJ5aW5nIHRvIHNjcm9sbCB0aGUgcGlja2VyXG4gICAgICAgICAqIGNvbHVtbiB0byB0aGUgY29ycmVjdCB0aW1lIHZhbHVlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIHdpbGwgY29ycmVjdGx5IHNjcm9sbCB0aGUgZWxlbWVudCBwb3NpdGlvbiB0byB0aGUgY29ycmVjdCB0aW1lIHZhbHVlLFxuICAgICAgICAgKiBiZWZvcmUgdGhlIHBvcG92ZXIgaXMgZnVsbHkgcHJlc2VudGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgY29scyA9IGV2LnRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tcGlja2VyLWNvbHVtbicpO1xuICAgICAgICAvLyBUT0RPIChGVy02MTUpOiBQb3RlbnRpYWxseSByZW1vdmUgdGhpcyB3aGVuIGludGVyc2VjdGlvbiBvYnNlcnZlcnMgYXJlIGZpeGVkIGluIHBpY2tlciBjb2x1bW5cbiAgICAgICAgY29scy5mb3JFYWNoKGNvbCA9PiBjb2wuc2Nyb2xsQWN0aXZlSXRlbUludG9WaWV3KCkpO1xuICAgICAgfSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgICctLW9mZnNldC15JzogJy0xMHB4JyxcbiAgICAgICAgJy0tbWluLXdpZHRoJzogJ2ZpdC1jb250ZW50J1xuICAgICAgfSxcbiAgICAgIC8vIEFsbG93IG5hdGl2ZSBicm93c2VyIGtleWJvYXJkIGV2ZW50cyB0byBzdXBwb3J0IHVwL2Rvd24vaG9tZS9lbmQga2V5XG4gICAgICAvLyBuYXZpZ2F0aW9uIHdpdGhpbiB0aGUgdGltZSBwaWNrZXIuXG4gICAgICBrZXlib2FyZEV2ZW50czogdHJ1ZSxcbiAgICAgIHJlZjogZWwgPT4gdGhpcy5wb3BvdmVyUmVmID0gZWxcbiAgICB9LCB0aGlzLnJlbmRlcldoZWVsUGlja2VyKCd0aW1lJykpXTtcbiAgfVxuICBnZXRIZWFkZXJTZWxlY3RlZERhdGVUZXh0KCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCB7XG4gICAgICBhY3RpdmVQYXJ0cyxcbiAgICAgIGZvcm1hdE9wdGlvbnMsXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIHRpdGxlU2VsZWN0ZWREYXRlc0Zvcm1hdHRlclxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjdGl2ZVBhcnRzKTtcbiAgICBsZXQgaGVhZGVyVGV4dDtcbiAgICBpZiAobXVsdGlwbGUgJiYgaXNBcnJheSAmJiBhY3RpdmVQYXJ0cy5sZW5ndGggIT09IDEpIHtcbiAgICAgIGhlYWRlclRleHQgPSBgJHthY3RpdmVQYXJ0cy5sZW5ndGh9IGRheXNgOyAvLyBkZWZhdWx0L2ZhbGxiYWNrIGZvciBtdWx0aXBsZSBzZWxlY3Rpb25cbiAgICAgIGlmICh0aXRsZVNlbGVjdGVkRGF0ZXNGb3JtYXR0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGhlYWRlclRleHQgPSB0aXRsZVNlbGVjdGVkRGF0ZXNGb3JtYXR0ZXIoY29udmVydERhdGFUb0lTTyhhY3RpdmVQYXJ0cykpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcHJpbnRJb25FcnJvcignRXhjZXB0aW9uIGluIHByb3ZpZGVkIGB0aXRsZVNlbGVjdGVkRGF0ZXNGb3JtYXR0ZXJgOiAnLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgZXhhY3RseSAxIGRheSBzZWxlY3RlZCAobXVsdGlwbGUgc2V0IG9yIG5vdCksIHNob3cgYSBmb3JtYXR0ZWQgdmVyc2lvbiBvZiB0aGF0XG4gICAgICBoZWFkZXJUZXh0ID0gZ2V0TG9jYWxpemVkRGF0ZVRpbWUodGhpcy5sb2NhbGUsIHRoaXMuZ2V0QWN0aXZlUGFydHNXaXRoRmFsbGJhY2soKSwgKF9hID0gZm9ybWF0T3B0aW9ucyA9PT0gbnVsbCB8fCBmb3JtYXRPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtYXRPcHRpb25zLmRhdGUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHtcbiAgICAgICAgd2Vla2RheTogJ3Nob3J0JyxcbiAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgIGRheTogJ251bWVyaWMnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGhlYWRlclRleHQ7XG4gIH1cbiAgcmVuZGVySGVhZGVyKHNob3dFeHBhbmRlZEhlYWRlciA9IHRydWUpIHtcbiAgICBjb25zdCBoYXNTbG90dGVkVGl0bGUgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tzbG90PVwidGl0bGVcIl0nKSAhPT0gbnVsbDtcbiAgICBpZiAoIWhhc1Nsb3R0ZWRUaXRsZSAmJiAhdGhpcy5zaG93RGVmYXVsdFRpdGxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImRhdGV0aW1lLWhlYWRlclwiXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJkYXRldGltZS10aXRsZVwiXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAgbmFtZTogXCJ0aXRsZVwiXG4gICAgfSwgXCJTZWxlY3QgRGF0ZVwiKSksIHNob3dFeHBhbmRlZEhlYWRlciAmJiBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImRhdGV0aW1lLXNlbGVjdGVkLWRhdGVcIlxuICAgIH0sIHRoaXMuZ2V0SGVhZGVyU2VsZWN0ZWREYXRlVGV4dCgpKSk7XG4gIH1cbiAgLyoqXG4gICAqIFJlbmRlciB0aW1lIHBpY2tlciBpbnNpZGUgb2YgZGF0ZXRpbWUuXG4gICAqIERvIG5vdCBwYXNzIGNvbG9yIHByb3AgdG8gc2VnbWVudCBvblxuICAgKiBpT1MgbW9kZS4gTUQgc2VnbWVudCBoYXMgYmVlbiBjdXN0b21pemVkIGFuZFxuICAgKiBzaG91bGQgdGFrZSBvbiB0aGUgY29sb3IgcHJvcCwgYnV0IGlPU1xuICAgKiBzaG91bGQganVzdCBiZSB0aGUgZGVmYXVsdCBzZWdtZW50LlxuICAgKi9cbiAgcmVuZGVyVGltZSgpIHtcbiAgICBjb25zdCB7XG4gICAgICBwcmVzZW50YXRpb25cbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCB0aW1lT25seVByZXNlbnRhdGlvbiA9IHByZXNlbnRhdGlvbiA9PT0gJ3RpbWUnO1xuICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImRhdGV0aW1lLXRpbWVcIlxuICAgIH0sIHRpbWVPbmx5UHJlc2VudGF0aW9uID8gdGhpcy5yZW5kZXJXaGVlbFBpY2tlcigpIDogdGhpcy5yZW5kZXJUaW1lT3ZlcmxheSgpKTtcbiAgfVxuICAvKipcbiAgICogUmVuZGVycyB0aGUgbW9udGgveWVhciBwaWNrZXIgdGhhdCBpc1xuICAgKiBkaXNwbGF5ZWQgb24gdGhlIGNhbGVuZGFyIGdyaWQuXG4gICAqIFRoZSAuZGF0ZXRpbWUteWVhciBjbGFzcyBoYXMgYWRkaXRpb25hbFxuICAgKiBzdHlsZXMgdGhhdCBsZXQgdXMgc2hvdy9oaWRlIHRoZVxuICAgKiBwaWNrZXIgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlXG4gICAqIHRvZ2dsZSBpbiB0aGUgY2FsZW5kYXIgaGVhZGVyLlxuICAgKi9cbiAgcmVuZGVyQ2FsZW5kYXJWaWV3TW9udGhZZWFyUGlja2VyKCkge1xuICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImRhdGV0aW1lLXllYXJcIlxuICAgIH0sIHRoaXMucmVuZGVyV2hlZWxWaWV3KCdtb250aC15ZWFyJykpO1xuICB9XG4gIC8qKlxuICAgKiBSZW5kZXIgZW50cnkgcG9pbnRcbiAgICogQWxsIHByZXNlbnRhdGlvbiB0eXBlcyBhcmUgcmVuZGVyZWQgZnJvbSBoZXJlLlxuICAgKi9cbiAgcmVuZGVyRGF0ZXRpbWUobW9kZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHByZXNlbnRhdGlvbixcbiAgICAgIHByZWZlcldoZWVsXG4gICAgfSA9IHRoaXM7XG4gICAgLyoqXG4gICAgICogQ2VydGFpbiBwcmVzZW50YXRpb24gdHlwZXMgaGF2ZSBzZXBhcmF0ZSBncmlkIGFuZCB3aGVlbCBkaXNwbGF5cy5cbiAgICAgKiBJZiBwcmVmZXJXaGVlbCBpcyB0cnVlIHRoZW4gd2Ugc2hvdWxkIHNob3cgYSB3aGVlbCBwaWNrZXIgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBjb25zdCBoYXNXaGVlbFZhcmlhbnQgPSBwcmVzZW50YXRpb24gPT09ICdkYXRlJyB8fCBwcmVzZW50YXRpb24gPT09ICdkYXRlLXRpbWUnIHx8IHByZXNlbnRhdGlvbiA9PT0gJ3RpbWUtZGF0ZSc7XG4gICAgaWYgKHByZWZlcldoZWVsICYmIGhhc1doZWVsVmFyaWFudCkge1xuICAgICAgcmV0dXJuIFt0aGlzLnJlbmRlckhlYWRlcihmYWxzZSksIHRoaXMucmVuZGVyV2hlZWxWaWV3KCksIHRoaXMucmVuZGVyRm9vdGVyKCldO1xuICAgIH1cbiAgICBzd2l0Y2ggKHByZXNlbnRhdGlvbikge1xuICAgICAgY2FzZSAnZGF0ZS10aW1lJzpcbiAgICAgICAgcmV0dXJuIFt0aGlzLnJlbmRlckhlYWRlcigpLCB0aGlzLnJlbmRlckNhbGVuZGFyKG1vZGUpLCB0aGlzLnJlbmRlckNhbGVuZGFyVmlld01vbnRoWWVhclBpY2tlcigpLCB0aGlzLnJlbmRlclRpbWUoKSwgdGhpcy5yZW5kZXJGb290ZXIoKV07XG4gICAgICBjYXNlICd0aW1lLWRhdGUnOlxuICAgICAgICByZXR1cm4gW3RoaXMucmVuZGVySGVhZGVyKCksIHRoaXMucmVuZGVyVGltZSgpLCB0aGlzLnJlbmRlckNhbGVuZGFyKG1vZGUpLCB0aGlzLnJlbmRlckNhbGVuZGFyVmlld01vbnRoWWVhclBpY2tlcigpLCB0aGlzLnJlbmRlckZvb3RlcigpXTtcbiAgICAgIGNhc2UgJ3RpbWUnOlxuICAgICAgICByZXR1cm4gW3RoaXMucmVuZGVySGVhZGVyKGZhbHNlKSwgdGhpcy5yZW5kZXJUaW1lKCksIHRoaXMucmVuZGVyRm9vdGVyKCldO1xuICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgY2FzZSAnbW9udGgteWVhcic6XG4gICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgcmV0dXJuIFt0aGlzLnJlbmRlckhlYWRlcihmYWxzZSksIHRoaXMucmVuZGVyV2hlZWxWaWV3KCksIHRoaXMucmVuZGVyRm9vdGVyKCldO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFt0aGlzLnJlbmRlckhlYWRlcigpLCB0aGlzLnJlbmRlckNhbGVuZGFyKG1vZGUpLCB0aGlzLnJlbmRlckNhbGVuZGFyVmlld01vbnRoWWVhclBpY2tlcigpLCB0aGlzLnJlbmRlckZvb3RlcigpXTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICB2YWx1ZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZWwsXG4gICAgICBjb2xvcixcbiAgICAgIHJlYWRvbmx5LFxuICAgICAgc2hvd01vbnRoQW5kWWVhcixcbiAgICAgIHByZWZlcldoZWVsLFxuICAgICAgcHJlc2VudGF0aW9uLFxuICAgICAgc2l6ZSxcbiAgICAgIGlzR3JpZFN0eWxlXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgaXNNb250aEFuZFllYXJQcmVzZW50YXRpb24gPSBwcmVzZW50YXRpb24gPT09ICd5ZWFyJyB8fCBwcmVzZW50YXRpb24gPT09ICdtb250aCcgfHwgcHJlc2VudGF0aW9uID09PSAnbW9udGgteWVhcic7XG4gICAgY29uc3Qgc2hvdWxkU2hvd01vbnRoQW5kWWVhciA9IHNob3dNb250aEFuZFllYXIgfHwgaXNNb250aEFuZFllYXJQcmVzZW50YXRpb247XG4gICAgY29uc3QgbW9udGhZZWFyUGlja2VyT3BlbiA9IHNob3dNb250aEFuZFllYXIgJiYgIWlzTW9udGhBbmRZZWFyUHJlc2VudGF0aW9uO1xuICAgIGNvbnN0IGhhc0RhdGVQcmVzZW50YXRpb24gPSBwcmVzZW50YXRpb24gPT09ICdkYXRlJyB8fCBwcmVzZW50YXRpb24gPT09ICdkYXRlLXRpbWUnIHx8IHByZXNlbnRhdGlvbiA9PT0gJ3RpbWUtZGF0ZSc7XG4gICAgY29uc3QgaGFzV2hlZWxWYXJpYW50ID0gaGFzRGF0ZVByZXNlbnRhdGlvbiAmJiBwcmVmZXJXaGVlbDtcbiAgICByZW5kZXJIaWRkZW5JbnB1dCh0cnVlLCBlbCwgbmFtZSwgZm9ybWF0VmFsdWUodmFsdWUpLCBkaXNhYmxlZCk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnMDhkNDI5NTMzYTA5YzYwMGI5MzZhZDFlMDIyNjU4MDUxYzc2NTU5NScsXG4gICAgICBcImFyaWEtZGlzYWJsZWRcIjogZGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsLFxuICAgICAgb25Gb2N1czogdGhpcy5vbkZvY3VzLFxuICAgICAgb25CbHVyOiB0aGlzLm9uQmx1cixcbiAgICAgIGNsYXNzOiBPYmplY3QuYXNzaWduKHt9LCBjcmVhdGVDb2xvckNsYXNzZXMoY29sb3IsIHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICBbJ2RhdGV0aW1lLXJlYWRvbmx5J106IHJlYWRvbmx5LFxuICAgICAgICBbJ2RhdGV0aW1lLWRpc2FibGVkJ106IGRpc2FibGVkLFxuICAgICAgICAnc2hvdy1tb250aC1hbmQteWVhcic6IHNob3VsZFNob3dNb250aEFuZFllYXIsXG4gICAgICAgICdtb250aC15ZWFyLXBpY2tlci1vcGVuJzogbW9udGhZZWFyUGlja2VyT3BlbixcbiAgICAgICAgW2BkYXRldGltZS1wcmVzZW50YXRpb24tJHtwcmVzZW50YXRpb259YF06IHRydWUsXG4gICAgICAgIFtgZGF0ZXRpbWUtc2l6ZS0ke3NpemV9YF06IHRydWUsXG4gICAgICAgIFtgZGF0ZXRpbWUtcHJlZmVyLXdoZWVsYF06IGhhc1doZWVsVmFyaWFudCxcbiAgICAgICAgW2BkYXRldGltZS1ncmlkYF06IGlzR3JpZFN0eWxlXG4gICAgICB9KSlcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJ2Y0ZmYwZmNkMWUwNTk3NjdhN2VmMTRmY2M3NmViZmQ1NWQyM2E5N2InLFxuICAgICAgY2xhc3M6IFwiaW50ZXJzZWN0aW9uLXRyYWNrZXJcIixcbiAgICAgIHJlZjogZWwgPT4gdGhpcy5pbnRlcnNlY3Rpb25UcmFja2VyUmVmID0gZWxcbiAgICB9KSwgdGhpcy5yZW5kZXJEYXRldGltZShtb2RlKSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZm9ybWF0T3B0aW9uc1wiOiBbXCJmb3JtYXRPcHRpb25zQ2hhbmdlZFwiXSxcbiAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdLFxuICAgICAgXCJtaW5cIjogW1wibWluQ2hhbmdlZFwiXSxcbiAgICAgIFwibWF4XCI6IFtcIm1heENoYW5nZWRcIl0sXG4gICAgICBcInByZXNlbnRhdGlvblwiOiBbXCJwcmVzZW50YXRpb25DaGFuZ2VkXCJdLFxuICAgICAgXCJ5ZWFyVmFsdWVzXCI6IFtcInllYXJWYWx1ZXNDaGFuZ2VkXCJdLFxuICAgICAgXCJtb250aFZhbHVlc1wiOiBbXCJtb250aFZhbHVlc0NoYW5nZWRcIl0sXG4gICAgICBcImRheVZhbHVlc1wiOiBbXCJkYXlWYWx1ZXNDaGFuZ2VkXCJdLFxuICAgICAgXCJob3VyVmFsdWVzXCI6IFtcImhvdXJWYWx1ZXNDaGFuZ2VkXCJdLFxuICAgICAgXCJtaW51dGVWYWx1ZXNcIjogW1wibWludXRlVmFsdWVzQ2hhbmdlZFwiXSxcbiAgICAgIFwidmFsdWVcIjogW1widmFsdWVDaGFuZ2VkXCJdXG4gICAgfTtcbiAgfVxufTtcbmxldCBkYXRldGltZUlkcyA9IDA7XG5jb25zdCBDQU5DRUxfUk9MRSA9ICdkYXRldGltZS1jYW5jZWwnO1xuY29uc3QgQ09ORklSTV9ST0xFID0gJ2RhdGV0aW1lLWNvbmZpcm0nO1xuY29uc3QgV0hFRUxfSVRFTV9QQVJUID0gJ3doZWVsLWl0ZW0nO1xuY29uc3QgV0hFRUxfSVRFTV9BQ1RJVkVfUEFSVCA9IGBhY3RpdmVgO1xuRGF0ZXRpbWUuc3R5bGUgPSB7XG4gIGlvczogSW9uRGF0ZXRpbWVJb3NTdHlsZTAsXG4gIG1kOiBJb25EYXRldGltZU1kU3R5bGUwXG59O1xuXG4vKipcbiAqIGlPUyBQaWNrZXIgRW50ZXIgQW5pbWF0aW9uXG4gKi9cbmNvbnN0IGlvc0VudGVyQW5pbWF0aW9uID0gYmFzZUVsID0+IHtcbiAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGJhY2tkcm9wQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKS5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAndmFyKC0tYmFja2Ryb3Atb3BhY2l0eSknKS5iZWZvcmVTdHlsZXMoe1xuICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJ1xuICB9KS5hZnRlckNsZWFyU3R5bGVzKFsncG9pbnRlci1ldmVudHMnXSk7XG4gIHdyYXBwZXJBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLnBpY2tlci13cmFwcGVyJykpLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoMTAwJSknLCAndHJhbnNsYXRlWSgwJSknKTtcbiAgcmV0dXJuIGJhc2VBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwpLmVhc2luZygnY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpJykuZHVyYXRpb24oNDAwKS5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xuXG4vKipcbiAqIGlPUyBQaWNrZXIgTGVhdmUgQW5pbWF0aW9uXG4gKi9cbmNvbnN0IGlvc0xlYXZlQW5pbWF0aW9uID0gYmFzZUVsID0+IHtcbiAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGJhY2tkcm9wQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKS5mcm9tVG8oJ29wYWNpdHknLCAndmFyKC0tYmFja2Ryb3Atb3BhY2l0eSknLCAwLjAxKTtcbiAgd3JhcHBlckFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcucGlja2VyLXdyYXBwZXInKSkuZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgwJSknLCAndHJhbnNsYXRlWSgxMDAlKScpO1xuICByZXR1cm4gYmFzZUFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbCkuZWFzaW5nKCdjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSknKS5kdXJhdGlvbig0MDApLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcbn07XG5jb25zdCBwaWNrZXJJb3NDc3MgPSBcIi5zYy1pb24tcGlja2VyLWxlZ2FjeS1pb3MtaHstLWJvcmRlci1yYWRpdXM6MDstLWJvcmRlci1zdHlsZTpzb2xpZDstLW1pbi13aWR0aDphdXRvOy0td2lkdGg6MTAwJTstLW1heC13aWR0aDo1MDBweDstLW1pbi1oZWlnaHQ6YXV0bzstLW1heC1oZWlnaHQ6YXV0bzstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDt0b3A6MDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3V0bGluZTpub25lO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7Y29udGFpbjpzdHJpY3Q7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6MTAwMX0uc2MtaW9uLXBpY2tlci1sZWdhY3ktaW9zLWh7aW5zZXQtaW5saW5lLXN0YXJ0OjB9Lm92ZXJsYXktaGlkZGVuLnNjLWlvbi1waWNrZXItbGVnYWN5LWlvcy1oe2Rpc3BsYXk6bm9uZX0ucGlja2VyLXdyYXBwZXIuc2MtaW9uLXBpY2tlci1sZWdhY3ktaW9ze2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6YXV0bzttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG87LXdlYmtpdC1tYXJnaW4tZW5kOmF1dG87bWFyZ2luLWlubGluZS1lbmQ6YXV0bzttYXJnaW4tdG9wOmF1dG87bWFyZ2luLWJvdHRvbTphdXRvOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAxMDAlLCAgMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAxMDAlLCAgMCk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbnRhaW46c3RyaWN0O292ZXJmbG93OmhpZGRlbjt6LWluZGV4OjEwfS5waWNrZXItdG9vbGJhci5zYy1pb24tcGlja2VyLWxlZ2FjeS1pb3N7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbnRhaW46c3RyaWN0O3otaW5kZXg6MX0ucGlja2VyLWJ1dHRvbi5zYy1pb24tcGlja2VyLWxlZ2FjeS1pb3N7Ym9yZGVyOjA7Zm9udC1mYW1pbHk6aW5oZXJpdH0ucGlja2VyLWJ1dHRvbi5zYy1pb24tcGlja2VyLWxlZ2FjeS1pb3M6YWN0aXZlLC5waWNrZXItYnV0dG9uLnNjLWlvbi1waWNrZXItbGVnYWN5LWlvczpmb2N1c3tvdXRsaW5lOm5vbmV9LnBpY2tlci1jb2x1bW5zLnNjLWlvbi1waWNrZXItbGVnYWN5LWlvc3tkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbi1ib3R0b206dmFyKC0taW9uLXNhZmUtYXJlYS1ib3R0b20sIDApO2NvbnRhaW46c3RyaWN0O292ZXJmbG93OmhpZGRlbn0ucGlja2VyLWFib3ZlLWhpZ2hsaWdodC5zYy1pb24tcGlja2VyLWxlZ2FjeS1pb3MsLnBpY2tlci1iZWxvdy1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1sZWdhY3ktaW9ze2Rpc3BsYXk6bm9uZTtwb2ludGVyLWV2ZW50czpub25lfS5zYy1pb24tcGlja2VyLWxlZ2FjeS1pb3MtaHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpOy0tYm9yZGVyLXdpZHRoOjFweCAwIDA7LS1ib3JkZXItY29sb3I6dmFyKC0taW9uLWl0ZW0tYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMjUwLCAjYzhjN2NjKSkpKTstLWhlaWdodDoyNjBweDstLWJhY2tkcm9wLW9wYWNpdHk6dmFyKC0taW9uLWJhY2tkcm9wLW9wYWNpdHksIDAuMjYpO2NvbG9yOnZhcigtLWlvbi1pdGVtLWNvbG9yLCB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCkpfS5waWNrZXItdG9vbGJhci5zYy1pb24tcGlja2VyLWxlZ2FjeS1pb3N7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7aGVpZ2h0OjQ0cHg7Ym9yZGVyLWJvdHRvbTowLjU1cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKX0ucGlja2VyLXRvb2xiYXItYnV0dG9uLnNjLWlvbi1waWNrZXItbGVnYWN5LWlvc3stbXMtZmxleDoxO2ZsZXg6MTt0ZXh0LWFsaWduOmVuZH0ucGlja2VyLXRvb2xiYXItYnV0dG9uLnNjLWlvbi1waWNrZXItbGVnYWN5LWlvczpsYXN0LWNoaWxkIC5waWNrZXItYnV0dG9uLnNjLWlvbi1waWNrZXItbGVnYWN5LWlvc3tmb250LXdlaWdodDo2MDB9LnBpY2tlci10b29sYmFyLWJ1dHRvbi5zYy1pb24tcGlja2VyLWxlZ2FjeS1pb3M6Zmlyc3QtY2hpbGR7Zm9udC13ZWlnaHQ6bm9ybWFsO3RleHQtYWxpZ246c3RhcnR9LnBpY2tlci1idXR0b24uc2MtaW9uLXBpY2tlci1sZWdhY3ktaW9zLC5waWNrZXItYnV0dG9uLmlvbi1hY3RpdmF0ZWQuc2MtaW9uLXBpY2tlci1sZWdhY3ktaW9ze21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MWVtO3BhZGRpbmctaW5saW5lLXN0YXJ0OjFlbTstd2Via2l0LXBhZGRpbmctZW5kOjFlbTtwYWRkaW5nLWlubGluZS1lbmQ6MWVtO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtoZWlnaHQ6NDRweDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTtmb250LXNpemU6MTZweH0ucGlja2VyLWNvbHVtbnMuc2MtaW9uLXBpY2tlci1sZWdhY3ktaW9ze2hlaWdodDoyMTVweDstd2Via2l0LXBlcnNwZWN0aXZlOjEwMDBweDtwZXJzcGVjdGl2ZToxMDAwcHh9LnBpY2tlci1hYm92ZS1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1sZWdhY3ktaW9ze3RvcDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAwLCAgOTBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAwLCAgOTBweCk7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDo4MXB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDIwJSwgdmFyKC0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKSksIHRvKHJnYmEodmFyKC0tYmFja2dyb3VuZC1yZ2IsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwgMjU1LCAyNTUsIDI1NSkpLCAwLjgpKSk7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpIDIwJSwgcmdiYSh2YXIoLS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSksIDAuOCkgMTAwJSk7ei1pbmRleDoxMH0ucGlja2VyLWFib3ZlLWhpZ2hsaWdodC5zYy1pb24tcGlja2VyLWxlZ2FjeS1pb3N7aW5zZXQtaW5saW5lLXN0YXJ0OjB9LnBpY2tlci1iZWxvdy1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1sZWdhY3ktaW9ze3RvcDoxMTVweDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgMCwgIDkwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgMCwgIDkwcHgpO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTE5cHg7Ym9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMzAlLCB2YXIoLS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpKSwgdG8ocmdiYSh2YXIoLS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSksIDAuOCkpKTtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byB0b3AsIHZhcigtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSkgMzAlLCByZ2JhKHZhcigtLWJhY2tncm91bmQtcmdiLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpKSwgMC44KSAxMDAlKTt6LWluZGV4OjExfS5waWNrZXItYmVsb3ctaGlnaGxpZ2h0LnNjLWlvbi1waWNrZXItbGVnYWN5LWlvc3tpbnNldC1pbmxpbmUtc3RhcnQ6MH1cIjtcbmNvbnN0IElvblBpY2tlckxlZ2FjeUlvc1N0eWxlMCA9IHBpY2tlcklvc0NzcztcbmNvbnN0IHBpY2tlck1kQ3NzID0gXCIuc2MtaW9uLXBpY2tlci1sZWdhY3ktbWQtaHstLWJvcmRlci1yYWRpdXM6MDstLWJvcmRlci1zdHlsZTpzb2xpZDstLW1pbi13aWR0aDphdXRvOy0td2lkdGg6MTAwJTstLW1heC13aWR0aDo1MDBweDstLW1pbi1oZWlnaHQ6YXV0bzstLW1heC1oZWlnaHQ6YXV0bzstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDt0b3A6MDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3V0bGluZTpub25lO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7Y29udGFpbjpzdHJpY3Q7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6MTAwMX0uc2MtaW9uLXBpY2tlci1sZWdhY3ktbWQtaHtpbnNldC1pbmxpbmUtc3RhcnQ6MH0ub3ZlcmxheS1oaWRkZW4uc2MtaW9uLXBpY2tlci1sZWdhY3ktbWQtaHtkaXNwbGF5Om5vbmV9LnBpY2tlci13cmFwcGVyLnNjLWlvbi1waWNrZXItbGVnYWN5LW1ke2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6YXV0bzttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG87LXdlYmtpdC1tYXJnaW4tZW5kOmF1dG87bWFyZ2luLWlubGluZS1lbmQ6YXV0bzttYXJnaW4tdG9wOmF1dG87bWFyZ2luLWJvdHRvbTphdXRvOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAxMDAlLCAgMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAxMDAlLCAgMCk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbnRhaW46c3RyaWN0O292ZXJmbG93OmhpZGRlbjt6LWluZGV4OjEwfS5waWNrZXItdG9vbGJhci5zYy1pb24tcGlja2VyLWxlZ2FjeS1tZHt3aWR0aDoxMDAlO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29udGFpbjpzdHJpY3Q7ei1pbmRleDoxfS5waWNrZXItYnV0dG9uLnNjLWlvbi1waWNrZXItbGVnYWN5LW1ke2JvcmRlcjowO2ZvbnQtZmFtaWx5OmluaGVyaXR9LnBpY2tlci1idXR0b24uc2MtaW9uLXBpY2tlci1sZWdhY3ktbWQ6YWN0aXZlLC5waWNrZXItYnV0dG9uLnNjLWlvbi1waWNrZXItbGVnYWN5LW1kOmZvY3Vze291dGxpbmU6bm9uZX0ucGlja2VyLWNvbHVtbnMuc2MtaW9uLXBpY2tlci1sZWdhY3ktbWR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW4tYm90dG9tOnZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tLCAwKTtjb250YWluOnN0cmljdDtvdmVyZmxvdzpoaWRkZW59LnBpY2tlci1hYm92ZS1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1sZWdhY3ktbWQsLnBpY2tlci1iZWxvdy1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1sZWdhY3ktbWR7ZGlzcGxheTpub25lO3BvaW50ZXItZXZlbnRzOm5vbmV9LnNjLWlvbi1waWNrZXItbGVnYWN5LW1kLWh7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTstLWJvcmRlci13aWR0aDowLjU1cHggMCAwOy0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTE1MCwgcmdiYSgwLCAwLCAwLCAwLjEzKSkpKSk7LS1oZWlnaHQ6MjYwcHg7LS1iYWNrZHJvcC1vcGFjaXR5OnZhcigtLWlvbi1iYWNrZHJvcC1vcGFjaXR5LCAwLjI2KTtjb2xvcjp2YXIoLS1pb24taXRlbS1jb2xvciwgdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApKX0ucGlja2VyLXRvb2xiYXIuc2MtaW9uLXBpY2tlci1sZWdhY3ktbWR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2hlaWdodDo0NHB4fS5waWNrZXItYnV0dG9uLnNjLWlvbi1waWNrZXItbGVnYWN5LW1kLC5waWNrZXItYnV0dG9uLmlvbi1hY3RpdmF0ZWQuc2MtaW9uLXBpY2tlci1sZWdhY3ktbWR7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowOy13ZWJraXQtcGFkZGluZy1zdGFydDoxLjFlbTtwYWRkaW5nLWlubGluZS1zdGFydDoxLjFlbTstd2Via2l0LXBhZGRpbmctZW5kOjEuMWVtO3BhZGRpbmctaW5saW5lLWVuZDoxLjFlbTtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7aGVpZ2h0OjQ0cHg7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LnBpY2tlci1jb2x1bW5zLnNjLWlvbi1waWNrZXItbGVnYWN5LW1ke2hlaWdodDoyMTZweDstd2Via2l0LXBlcnNwZWN0aXZlOjE4MDBweDtwZXJzcGVjdGl2ZToxODAwcHh9LnBpY2tlci1hYm92ZS1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1sZWdhY3ktbWR7dG9wOjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIDAsICA5MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIDAsICA5MHB4KTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDo4MXB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTE1MCwgcmdiYSgwLCAwLCAwLCAwLjEzKSkpKSk7YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDIwJSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKSwgdG8ocmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpLCAwLjgpKSk7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikgMjAlLCByZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwgMjU1LCAyNTUsIDI1NSksIDAuOCkgMTAwJSk7ei1pbmRleDoxMH0ucGlja2VyLWFib3ZlLWhpZ2hsaWdodC5zYy1pb24tcGlja2VyLWxlZ2FjeS1tZHtpbnNldC1pbmxpbmUtc3RhcnQ6MH0ucGlja2VyLWJlbG93LWhpZ2hsaWdodC5zYy1pb24tcGlja2VyLWxlZ2FjeS1tZHt0b3A6MTE1cHg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIDAsICA5MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIDAsICA5MHB4KTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMTlweDtib3JkZXItdG9wOjFweCBzb2xpZCB2YXIoLS1pb24taXRlbS1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0xNTAsIHJnYmEoMCwgMCwgMCwgMC4xMykpKSkpO2JhY2tncm91bmQ6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgzMCUsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSksIHRvKHJnYmEodmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSwgMC44KSkpO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpIDMwJSwgcmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpLCAwLjgpIDEwMCUpO3otaW5kZXg6MTF9LnBpY2tlci1iZWxvdy1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1sZWdhY3ktbWR7aW5zZXQtaW5saW5lLXN0YXJ0OjB9XCI7XG5jb25zdCBJb25QaWNrZXJMZWdhY3lNZFN0eWxlMCA9IHBpY2tlck1kQ3NzO1xuY29uc3QgUGlja2VyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmRpZFByZXNlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblBpY2tlckRpZFByZXNlbnRcIiwgNyk7XG4gICAgdGhpcy53aWxsUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUGlja2VyV2lsbFByZXNlbnRcIiwgNyk7XG4gICAgdGhpcy53aWxsRGlzbWlzcyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUGlja2VyV2lsbERpc21pc3NcIiwgNyk7XG4gICAgdGhpcy5kaWREaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25QaWNrZXJEaWREaXNtaXNzXCIsIDcpO1xuICAgIHRoaXMuZGlkUHJlc2VudFNob3J0aGFuZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiZGlkUHJlc2VudFwiLCA3KTtcbiAgICB0aGlzLndpbGxQcmVzZW50U2hvcnRoYW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJ3aWxsUHJlc2VudFwiLCA3KTtcbiAgICB0aGlzLndpbGxEaXNtaXNzU2hvcnRoYW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJ3aWxsRGlzbWlzc1wiLCA3KTtcbiAgICB0aGlzLmRpZERpc21pc3NTaG9ydGhhbmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImRpZERpc21pc3NcIiwgNyk7XG4gICAgdGhpcy5kZWxlZ2F0ZUNvbnRyb2xsZXIgPSBjcmVhdGVEZWxlZ2F0ZUNvbnRyb2xsZXIodGhpcyk7XG4gICAgdGhpcy5sb2NrQ29udHJvbGxlciA9IGNyZWF0ZUxvY2tDb250cm9sbGVyKCk7XG4gICAgdGhpcy50cmlnZ2VyQ29udHJvbGxlciA9IGNyZWF0ZVRyaWdnZXJDb250cm9sbGVyKCk7XG4gICAgdGhpcy5vbkJhY2tkcm9wVGFwID0gKCkgPT4ge1xuICAgICAgdGhpcy5kaXNtaXNzKHVuZGVmaW5lZCwgQkFDS0RST1ApO1xuICAgIH07XG4gICAgdGhpcy5kaXNwYXRjaENhbmNlbEhhbmRsZXIgPSBldiA9PiB7XG4gICAgICBjb25zdCByb2xlID0gZXYuZGV0YWlsLnJvbGU7XG4gICAgICBpZiAoaXNDYW5jZWwocm9sZSkpIHtcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gdGhpcy5idXR0b25zLmZpbmQoYiA9PiBiLnJvbGUgPT09ICdjYW5jZWwnKTtcbiAgICAgICAgdGhpcy5jYWxsQnV0dG9uSGFuZGxlcihjYW5jZWxCdXR0b24pO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5wcmVzZW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLm92ZXJsYXlJbmRleCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlbGVnYXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGFzQ29udHJvbGxlciA9IGZhbHNlO1xuICAgIHRoaXMua2V5Ym9hcmRDbG9zZSA9IHRydWU7XG4gICAgdGhpcy5lbnRlckFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxlYXZlQW5pbWF0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYnV0dG9ucyA9IFtdO1xuICAgIHRoaXMuY29sdW1ucyA9IFtdO1xuICAgIHRoaXMuY3NzQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gICAgdGhpcy5zaG93QmFja2Ryb3AgPSB0cnVlO1xuICAgIHRoaXMuYmFja2Ryb3BEaXNtaXNzID0gdHJ1ZTtcbiAgICB0aGlzLmFuaW1hdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmh0bWxBdHRyaWJ1dGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgdGhpcy50cmlnZ2VyID0gdW5kZWZpbmVkO1xuICB9XG4gIG9uSXNPcGVuQ2hhbmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gdHJ1ZSAmJiBvbGRWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMucHJlc2VudCgpO1xuICAgIH0gZWxzZSBpZiAobmV3VmFsdWUgPT09IGZhbHNlICYmIG9sZFZhbHVlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICB9XG4gIH1cbiAgdHJpZ2dlckNoYW5nZWQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdHJpZ2dlcixcbiAgICAgIGVsLFxuICAgICAgdHJpZ2dlckNvbnRyb2xsZXJcbiAgICB9ID0gdGhpcztcbiAgICBpZiAodHJpZ2dlcikge1xuICAgICAgdHJpZ2dlckNvbnRyb2xsZXIuYWRkQ2xpY2tMaXN0ZW5lcihlbCwgdHJpZ2dlcik7XG4gICAgfVxuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHByZXBhcmVPdmVybGF5KHRoaXMuZWwpO1xuICAgIHRoaXMudHJpZ2dlckNoYW5nZWQoKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnRyaWdnZXJDb250cm9sbGVyLnJlbW92ZUNsaWNrTGlzdGVuZXIoKTtcbiAgfVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKCEoKF9hID0gdGhpcy5odG1sQXR0cmlidXRlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlkKSkge1xuICAgICAgc2V0T3ZlcmxheUlkKHRoaXMuZWwpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHByaW50SW9uV2FybmluZygnaW9uLXBpY2tlci1sZWdhY3kgYW5kIGlvbi1waWNrZXItbGVnYWN5LWNvbHVtbiBoYXZlIGJlZW4gZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBuZXcgdmVyc2lvbnMgb2YgdGhlIGlvbi1waWNrZXIgYW5kIGlvbi1waWNrZXItY29sdW1uIGNvbXBvbmVudHMuIFRoZXNlIG5ldyBjb21wb25lbnRzIGRpc3BsYXkgaW5saW5lIHdpdGggeW91ciBwYWdlIGNvbnRlbnQgYWxsb3dpbmcgZm9yIG1vcmUgcHJlc2VudGF0aW9uIGZsZXhpYmlsaXR5IHRoYW4gYmVmb3JlLicsIHRoaXMuZWwpO1xuICAgIC8qKlxuICAgICAqIElmIHBpY2tlciB3YXMgcmVuZGVyZWQgd2l0aCBpc09wZW49XCJ0cnVlXCJcbiAgICAgKiB0aGVuIHdlIHNob3VsZCBvcGVuIHBpY2tlciBpbW1lZGlhdGVseS5cbiAgICAgKi9cbiAgICBpZiAodGhpcy5pc09wZW4gPT09IHRydWUpIHtcbiAgICAgIHJhZigoKSA9PiB0aGlzLnByZXNlbnQoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoZW4gYmluZGluZyB2YWx1ZXMgaW4gZnJhbWV3b3JrcyBzdWNoIGFzIEFuZ3VsYXJcbiAgICAgKiBpdCBpcyBwb3NzaWJsZSBmb3IgdGhlIHZhbHVlIHRvIGJlIHNldCBhZnRlciB0aGUgV2ViIENvbXBvbmVudFxuICAgICAqIGluaXRpYWxpemVzIGJ1dCBiZWZvcmUgdGhlIHZhbHVlIHdhdGNoZXIgaXMgc2V0IHVwIGluIFN0ZW5jaWwuXG4gICAgICogQXMgYSByZXN1bHQsIHRoZSB3YXRjaGVyIGNhbGxiYWNrIG1heSBub3QgYmUgZmlyZWQuXG4gICAgICogV2Ugd29yayBhcm91bmQgdGhpcyBieSBtYW51YWxseSBjYWxsaW5nIHRoZSB3YXRjaGVyXG4gICAgICogY2FsbGJhY2sgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBsb2FkZWQgYW5kIHRoZSB3YXRjaGVyXG4gICAgICogaXMgY29uZmlndXJlZC5cbiAgICAgKi9cbiAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkKCk7XG4gIH1cbiAgLyoqXG4gICAqIFByZXNlbnQgdGhlIHBpY2tlciBvdmVybGF5IGFmdGVyIGl0IGhhcyBiZWVuIGNyZWF0ZWQuXG4gICAqL1xuICBhc3luYyBwcmVzZW50KCkge1xuICAgIGNvbnN0IHVubG9jayA9IGF3YWl0IHRoaXMubG9ja0NvbnRyb2xsZXIubG9jaygpO1xuICAgIGF3YWl0IHRoaXMuZGVsZWdhdGVDb250cm9sbGVyLmF0dGFjaFZpZXdUb0RvbSgpO1xuICAgIGF3YWl0IHByZXNlbnQodGhpcywgJ3BpY2tlckVudGVyJywgaW9zRW50ZXJBbmltYXRpb24sIGlvc0VudGVyQW5pbWF0aW9uLCB1bmRlZmluZWQpO1xuICAgIGlmICh0aGlzLmR1cmF0aW9uID4gMCkge1xuICAgICAgdGhpcy5kdXJhdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGlzbWlzcygpLCB0aGlzLmR1cmF0aW9uKTtcbiAgICB9XG4gICAgdW5sb2NrKCk7XG4gIH1cbiAgLyoqXG4gICAqIERpc21pc3MgdGhlIHBpY2tlciBvdmVybGF5IGFmdGVyIGl0IGhhcyBiZWVuIHByZXNlbnRlZC5cbiAgICpcbiAgICogQHBhcmFtIGRhdGEgQW55IGRhdGEgdG8gZW1pdCBpbiB0aGUgZGlzbWlzcyBldmVudHMuXG4gICAqIEBwYXJhbSByb2xlIFRoZSByb2xlIG9mIHRoZSBlbGVtZW50IHRoYXQgaXMgZGlzbWlzc2luZyB0aGUgcGlja2VyLlxuICAgKiBUaGlzIGNhbiBiZSB1c2VmdWwgaW4gYSBidXR0b24gaGFuZGxlciBmb3IgZGV0ZXJtaW5pbmcgd2hpY2ggYnV0dG9uIHdhc1xuICAgKiBjbGlja2VkIHRvIGRpc21pc3MgdGhlIHBpY2tlci5cbiAgICogU29tZSBleGFtcGxlcyBpbmNsdWRlOiBgYFwiY2FuY2VsXCJgLCBgXCJkZXN0cnVjdGl2ZVwiYCwgXCJzZWxlY3RlZFwiYCwgYW5kIGBcImJhY2tkcm9wXCJgLlxuICAgKi9cbiAgYXN5bmMgZGlzbWlzcyhkYXRhLCByb2xlKSB7XG4gICAgY29uc3QgdW5sb2NrID0gYXdhaXQgdGhpcy5sb2NrQ29udHJvbGxlci5sb2NrKCk7XG4gICAgaWYgKHRoaXMuZHVyYXRpb25UaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kdXJhdGlvblRpbWVvdXQpO1xuICAgIH1cbiAgICBjb25zdCBkaXNtaXNzZWQgPSBhd2FpdCBkaXNtaXNzKHRoaXMsIGRhdGEsIHJvbGUsICdwaWNrZXJMZWF2ZScsIGlvc0xlYXZlQW5pbWF0aW9uLCBpb3NMZWF2ZUFuaW1hdGlvbik7XG4gICAgaWYgKGRpc21pc3NlZCkge1xuICAgICAgdGhpcy5kZWxlZ2F0ZUNvbnRyb2xsZXIucmVtb3ZlVmlld0Zyb21Eb20oKTtcbiAgICB9XG4gICAgdW5sb2NrKCk7XG4gICAgcmV0dXJuIGRpc21pc3NlZDtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBwaWNrZXIgZGlkIGRpc21pc3MuXG4gICAqL1xuICBvbkRpZERpc21pc3MoKSB7XG4gICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25QaWNrZXJEaWREaXNtaXNzJyk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgcGlja2VyIHdpbGwgZGlzbWlzcy5cbiAgICovXG4gIG9uV2lsbERpc21pc3MoKSB7XG4gICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25QaWNrZXJXaWxsRGlzbWlzcycpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgdGhlIGNvbHVtbiB0aGF0IG1hdGNoZXMgdGhlIHNwZWNpZmllZCBuYW1lLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29sdW1uLlxuICAgKi9cbiAgZ2V0Q29sdW1uKG5hbWUpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuY29sdW1ucy5maW5kKGNvbHVtbiA9PiBjb2x1bW4ubmFtZSA9PT0gbmFtZSkpO1xuICB9XG4gIGFzeW5jIGJ1dHRvbkNsaWNrKGJ1dHRvbikge1xuICAgIGNvbnN0IHJvbGUgPSBidXR0b24ucm9sZTtcbiAgICBpZiAoaXNDYW5jZWwocm9sZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmRpc21pc3ModW5kZWZpbmVkLCByb2xlKTtcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkRGlzbWlzcyA9IGF3YWl0IHRoaXMuY2FsbEJ1dHRvbkhhbmRsZXIoYnV0dG9uKTtcbiAgICBpZiAoc2hvdWxkRGlzbWlzcykge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzbWlzcyh0aGlzLmdldFNlbGVjdGVkKCksIGJ1dHRvbi5yb2xlKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG4gIGFzeW5jIGNhbGxCdXR0b25IYW5kbGVyKGJ1dHRvbikge1xuICAgIGlmIChidXR0b24pIHtcbiAgICAgIC8vIGEgaGFuZGxlciBoYXMgYmVlbiBwcm92aWRlZCwgZXhlY3V0ZSBpdFxuICAgICAgLy8gcGFzcyB0aGUgaGFuZGxlciB0aGUgdmFsdWVzIGZyb20gdGhlIGlucHV0c1xuICAgICAgY29uc3QgcnRuID0gYXdhaXQgc2FmZUNhbGwoYnV0dG9uLmhhbmRsZXIsIHRoaXMuZ2V0U2VsZWN0ZWQoKSk7XG4gICAgICBpZiAocnRuID09PSBmYWxzZSkge1xuICAgICAgICAvLyBpZiB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBoYW5kbGVyIGlzIGZhbHNlIHRoZW4gZG8gbm90IGRpc21pc3NcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBnZXRTZWxlY3RlZCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHt9O1xuICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2wsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGNvbC5zZWxlY3RlZEluZGV4ICE9PSB1bmRlZmluZWQgPyBjb2wub3B0aW9uc1tjb2wuc2VsZWN0ZWRJbmRleF0gOiB1bmRlZmluZWQ7XG4gICAgICBzZWxlY3RlZFtjb2wubmFtZV0gPSB7XG4gICAgICAgIHRleHQ6IHNlbGVjdGVkQ29sdW1uID8gc2VsZWN0ZWRDb2x1bW4udGV4dCA6IHVuZGVmaW5lZCxcbiAgICAgICAgdmFsdWU6IHNlbGVjdGVkQ29sdW1uID8gc2VsZWN0ZWRDb2x1bW4udmFsdWUgOiB1bmRlZmluZWQsXG4gICAgICAgIGNvbHVtbkluZGV4OiBpbmRleFxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGh0bWxBdHRyaWJ1dGVzXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmV0dXJuIGgoSG9zdCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICBrZXk6ICdkYzAzZjI1MmUzYjU5YTk0YmM3MTMyYzk1M2QyZDNiMzZiNjIyMzdlJyxcbiAgICAgIFwiYXJpYS1tb2RhbFwiOiBcInRydWVcIixcbiAgICAgIHRhYmluZGV4OiBcIi0xXCJcbiAgICB9LCBodG1sQXR0cmlidXRlcywge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgekluZGV4OiBgJHsyMDAwMCArIHRoaXMub3ZlcmxheUluZGV4fWBcbiAgICAgIH0sXG4gICAgICBjbGFzczogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgLy8gVXNlZCBpbnRlcm5hbGx5IGZvciBzdHlsaW5nXG4gICAgICAgIFtgcGlja2VyLSR7bW9kZX1gXTogdHJ1ZSxcbiAgICAgICAgJ292ZXJsYXktaGlkZGVuJzogdHJ1ZVxuICAgICAgfSwgZ2V0Q2xhc3NNYXAodGhpcy5jc3NDbGFzcykpLFxuICAgICAgb25Jb25CYWNrZHJvcFRhcDogdGhpcy5vbkJhY2tkcm9wVGFwLFxuICAgICAgb25Jb25QaWNrZXJXaWxsRGlzbWlzczogdGhpcy5kaXNwYXRjaENhbmNlbEhhbmRsZXJcbiAgICB9KSwgaChcImlvbi1iYWNrZHJvcFwiLCB7XG4gICAgICBrZXk6ICdiZGFiZTljODJjNDFmOTZkYTVkYWZiMWEwYWEwODU0ZmE3ZTdlYzkzJyxcbiAgICAgIHZpc2libGU6IHRoaXMuc2hvd0JhY2tkcm9wLFxuICAgICAgdGFwcGFibGU6IHRoaXMuYmFja2Ryb3BEaXNtaXNzXG4gICAgfSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnMTM4MGUwYzg5ODkxNTNiNDI1Njc0NzUzNzY0ZjEyZjI1M2Y0YTczOCcsXG4gICAgICB0YWJpbmRleDogXCIwXCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnZWRlYzc2OWJiYzA5OTNkMDAzODUyZDBiZjExMjNlNmUyMzMyZWJiZScsXG4gICAgICBjbGFzczogXCJwaWNrZXItd3JhcHBlciBpb24tb3ZlcmxheS13cmFwcGVyXCIsXG4gICAgICByb2xlOiBcImRpYWxvZ1wiXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICdiODJjNjdmZjQ3YWE5NDEyYTZmZjhmM2IyZTYyMzBiODU1ZTkyYzUxJyxcbiAgICAgIGNsYXNzOiBcInBpY2tlci10b29sYmFyXCJcbiAgICB9LCB0aGlzLmJ1dHRvbnMubWFwKGIgPT4gaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogYnV0dG9uV3JhcHBlckNsYXNzKGIpXG4gICAgfSwgaChcImJ1dHRvblwiLCB7XG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgb25DbGljazogKCkgPT4gdGhpcy5idXR0b25DbGljayhiKSxcbiAgICAgIGNsYXNzOiBidXR0b25DbGFzcyhiKVxuICAgIH0sIGIudGV4dCkpKSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnNzY0ODViNjQzMzg3ZjM2YjZiM2Q1Zjg1ZTRkMDcyZmExOGU2ODU1MicsXG4gICAgICBjbGFzczogXCJwaWNrZXItY29sdW1uc1wiXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICc5OTI2ODIxNzI2M2ZlYjUyODVkYjFiMWFjZDQ4ZmQwZTRkNWYwZTdiJyxcbiAgICAgIGNsYXNzOiBcInBpY2tlci1hYm92ZS1oaWdobGlnaHRcIlxuICAgIH0pLCB0aGlzLnByZXNlbnRlZCAmJiB0aGlzLmNvbHVtbnMubWFwKGMgPT4gaChcImlvbi1waWNrZXItbGVnYWN5LWNvbHVtblwiLCB7XG4gICAgICBjb2w6IGNcbiAgICB9KSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnMmRkN2U0ODhiYzRlOTY5NTA5NGYwNzU4NTY3ZTYyNmUwYmI1OTc5ZCcsXG4gICAgICBjbGFzczogXCJwaWNrZXItYmVsb3ctaGlnaGxpZ2h0XCJcbiAgICB9KSkpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzhiMmYzYWU3OThhNGRkY2RkNGUyNzE2ZWJiYTFkZTc5N2U0NDZhYzQnLFxuICAgICAgdGFiaW5kZXg6IFwiMFwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH0pKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJpc09wZW5cIjogW1wib25Jc09wZW5DaGFuZ2VcIl0sXG4gICAgICBcInRyaWdnZXJcIjogW1widHJpZ2dlckNoYW5nZWRcIl1cbiAgICB9O1xuICB9XG59O1xuY29uc3QgYnV0dG9uV3JhcHBlckNsYXNzID0gYnV0dG9uID0+IHtcbiAgcmV0dXJuIHtcbiAgICBbYHBpY2tlci10b29sYmFyLSR7YnV0dG9uLnJvbGV9YF06IGJ1dHRvbi5yb2xlICE9PSB1bmRlZmluZWQsXG4gICAgJ3BpY2tlci10b29sYmFyLWJ1dHRvbic6IHRydWVcbiAgfTtcbn07XG5jb25zdCBidXR0b25DbGFzcyA9IGJ1dHRvbiA9PiB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHtcbiAgICAncGlja2VyLWJ1dHRvbic6IHRydWUsXG4gICAgJ2lvbi1hY3RpdmF0YWJsZSc6IHRydWVcbiAgfSwgZ2V0Q2xhc3NNYXAoYnV0dG9uLmNzc0NsYXNzKSk7XG59O1xuUGlja2VyLnN0eWxlID0ge1xuICBpb3M6IElvblBpY2tlckxlZ2FjeUlvc1N0eWxlMCxcbiAgbWQ6IElvblBpY2tlckxlZ2FjeU1kU3R5bGUwXG59O1xuY29uc3QgcGlja2VyQ29sdW1uSW9zQ3NzID0gXCIucGlja2VyLWNvbHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleDoxO2ZsZXg6MTstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2hlaWdodDoxMDAlOy13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2NvbnRhaW46Y29udGVudH0ucGlja2VyLW9wdHN7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MTtmbGV4OjE7bWF4LXdpZHRoOjEwMCV9LnBpY2tlci1vcHR7dG9wOjA7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2JvcmRlcjowO3RleHQtYWxpZ246Y2VudGVyO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO2NvbnRhaW46c3RyaWN0O292ZXJmbG93OmhpZGRlbjt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19LnBpY2tlci1vcHR7aW5zZXQtaW5saW5lLXN0YXJ0OjB9LnBpY2tlci1vcHQucGlja2VyLW9wdC1kaXNhYmxlZHtwb2ludGVyLWV2ZW50czpub25lfS5waWNrZXItb3B0LWRpc2FibGVke29wYWNpdHk6MH0ucGlja2VyLW9wdHMtbGVmdHstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5waWNrZXItb3B0cy1yaWdodHstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LnBpY2tlci1vcHQ6YWN0aXZlLC5waWNrZXItb3B0OmZvY3Vze291dGxpbmU6bm9uZX0ucGlja2VyLXByZWZpeHtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleDoxO2ZsZXg6MTt0ZXh0LWFsaWduOmVuZDt3aGl0ZS1zcGFjZTpub3dyYXB9LnBpY2tlci1zdWZmaXh7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MTtmbGV4OjE7dGV4dC1hbGlnbjpzdGFydDt3aGl0ZS1zcGFjZTpub3dyYXB9LnBpY2tlci1jb2x7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjRweDtwYWRkaW5nLWlubGluZS1zdGFydDo0cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo0cHg7cGFkZGluZy1pbmxpbmUtZW5kOjRweDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7LXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7dHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkfS5waWNrZXItcHJlZml4LC5waWNrZXItc3VmZml4LC5waWNrZXItb3B0c3t0b3A6NzdweDstd2Via2l0LXRyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7Y29sb3I6aW5oZXJpdDtmb250LXNpemU6MjBweDtsaW5lLWhlaWdodDo0MnB4O3BvaW50ZXItZXZlbnRzOm5vbmV9LnBpY2tlci1vcHR7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyO2hlaWdodDo0NnB4Oy13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDstd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6aW5oZXJpdDtmb250LXNpemU6MjBweDtsaW5lLWhlaWdodDo0MnB4Oy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47cG9pbnRlci1ldmVudHM6YXV0b306aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnBpY2tlci1vcHR7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcikgY2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKSBjZW50ZXJ9W2Rpcj1ydGxdIC5waWNrZXItb3B0ey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBjZW50ZXIpIGNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcikgY2VudGVyfUBzdXBwb3J0cyBzZWxlY3Rvcig6ZGlyKHJ0bCkpey5waWNrZXItb3B0OmRpcihydGwpey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBjZW50ZXIpIGNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcikgY2VudGVyfX1cIjtcbmNvbnN0IElvblBpY2tlckxlZ2FjeUNvbHVtbklvc1N0eWxlMCA9IHBpY2tlckNvbHVtbklvc0NzcztcbmNvbnN0IHBpY2tlckNvbHVtbk1kQ3NzID0gXCIucGlja2VyLWNvbHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleDoxO2ZsZXg6MTstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2hlaWdodDoxMDAlOy13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2NvbnRhaW46Y29udGVudH0ucGlja2VyLW9wdHN7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MTtmbGV4OjE7bWF4LXdpZHRoOjEwMCV9LnBpY2tlci1vcHR7dG9wOjA7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2JvcmRlcjowO3RleHQtYWxpZ246Y2VudGVyO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO2NvbnRhaW46c3RyaWN0O292ZXJmbG93OmhpZGRlbjt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19LnBpY2tlci1vcHR7aW5zZXQtaW5saW5lLXN0YXJ0OjB9LnBpY2tlci1vcHQucGlja2VyLW9wdC1kaXNhYmxlZHtwb2ludGVyLWV2ZW50czpub25lfS5waWNrZXItb3B0LWRpc2FibGVke29wYWNpdHk6MH0ucGlja2VyLW9wdHMtbGVmdHstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5waWNrZXItb3B0cy1yaWdodHstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LnBpY2tlci1vcHQ6YWN0aXZlLC5waWNrZXItb3B0OmZvY3Vze291dGxpbmU6bm9uZX0ucGlja2VyLXByZWZpeHtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleDoxO2ZsZXg6MTt0ZXh0LWFsaWduOmVuZDt3aGl0ZS1zcGFjZTpub3dyYXB9LnBpY2tlci1zdWZmaXh7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MTtmbGV4OjE7dGV4dC1hbGlnbjpzdGFydDt3aGl0ZS1zcGFjZTpub3dyYXB9LnBpY2tlci1jb2x7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjhweDtwYWRkaW5nLWlubGluZS1zdGFydDo4cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo4cHg7cGFkZGluZy1pbmxpbmUtZW5kOjhweDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7LXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7dHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkfS5waWNrZXItcHJlZml4LC5waWNrZXItc3VmZml4LC5waWNrZXItb3B0c3t0b3A6NzdweDstd2Via2l0LXRyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7Y29sb3I6aW5oZXJpdDtmb250LXNpemU6MjJweDtsaW5lLWhlaWdodDo0MnB4O3BvaW50ZXItZXZlbnRzOm5vbmV9LnBpY2tlci1vcHR7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7aGVpZ2h0OjQzcHg7LXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOmluaGVyaXQ7Zm9udC1zaXplOjIycHg7bGluZS1oZWlnaHQ6NDJweDstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO3BvaW50ZXItZXZlbnRzOmF1dG99LnBpY2tlci1wcmVmaXgsLnBpY2tlci1zdWZmaXgsLnBpY2tlci1vcHQucGlja2VyLW9wdC1zZWxlY3RlZHtjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSl9XCI7XG5jb25zdCBJb25QaWNrZXJMZWdhY3lDb2x1bW5NZFN0eWxlMCA9IHBpY2tlckNvbHVtbk1kQ3NzO1xuY29uc3QgUGlja2VyQ29sdW1uQ21wID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvblBpY2tlckNvbENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUGlja2VyQ29sQ2hhbmdlXCIsIDcpO1xuICAgIHRoaXMub3B0SGVpZ2h0ID0gMDtcbiAgICB0aGlzLnJvdGF0ZUZhY3RvciA9IDA7XG4gICAgdGhpcy5zY2FsZUZhY3RvciA9IDE7XG4gICAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgICB0aGlzLm5vQW5pbWF0ZSA9IHRydWU7XG4gICAgLy8gYGNvbERpZENoYW5nZWAgaXMgYSBmbGFnIHRoYXQgZ2V0cyBzZXQgd2hlbiB0aGUgY29sdW1uIGlzIGNoYW5nZWRcbiAgICAvLyBkeW5hbWljYWxseS4gV2hlbiB0aGlzIGZsYWcgaXMgc2V0LCB0aGUgY29sdW1uIHdpbGwgcmVmcmVzaFxuICAgIC8vIGFmdGVyIHRoZSBjb21wb25lbnQgcmUtcmVuZGVycyB0byBpbmNvcnBvcmF0ZSB0aGUgbmV3IGNvbHVtbiBkYXRhLlxuICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgYHRoaXMucmVmcmVzaGAgcXVlcmllcyBmb3IgdGhlIG9wdGlvbiBlbGVtZW50cyxcbiAgICAvLyBzbyBpdCBuZWVkcyB0byB3YWl0IGZvciB0aGUgbGF0ZXN0IGVsZW1lbnRzIHRvIGJlIGF2YWlsYWJsZSBpbiB0aGUgRE9NLlxuICAgIC8vIEV4OiBjb2x1bW4gaXMgY3JlYXRlZCB3aXRoIDMgb3B0aW9ucy4gVXNlciB1cGRhdGVzIHRoZSBjb2x1bW4gZGF0YVxuICAgIC8vIHRvIGhhdmUgNSBvcHRpb25zLiBUaGUgY29sdW1uIHdpbGwgc3RpbGwgdGhpbmsgaXQgb25seSBoYXMgMyBvcHRpb25zLlxuICAgIHRoaXMuY29sRGlkQ2hhbmdlID0gZmFsc2U7XG4gICAgdGhpcy5jb2wgPSB1bmRlZmluZWQ7XG4gIH1cbiAgY29sQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmNvbERpZENoYW5nZSA9IHRydWU7XG4gIH1cbiAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgbGV0IHBpY2tlclJvdGF0ZUZhY3RvciA9IDA7XG4gICAgbGV0IHBpY2tlclNjYWxlRmFjdG9yID0gMC44MTtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBpZiAobW9kZSA9PT0gJ2lvcycpIHtcbiAgICAgIHBpY2tlclJvdGF0ZUZhY3RvciA9IC0wLjQ2O1xuICAgICAgcGlja2VyU2NhbGVGYWN0b3IgPSAxO1xuICAgIH1cbiAgICB0aGlzLnJvdGF0ZUZhY3RvciA9IHBpY2tlclJvdGF0ZUZhY3RvcjtcbiAgICB0aGlzLnNjYWxlRmFjdG9yID0gcGlja2VyU2NhbGVGYWN0b3I7XG4gICAgdGhpcy5nZXN0dXJlID0gKGF3YWl0IGltcG9ydCgnLi9pbmRleC0zOTc4MjY0Mi5qcycpKS5jcmVhdGVHZXN0dXJlKHtcbiAgICAgIGVsOiB0aGlzLmVsLFxuICAgICAgZ2VzdHVyZU5hbWU6ICdwaWNrZXItc3dpcGUnLFxuICAgICAgZ2VzdHVyZVByaW9yaXR5OiAxMDAsXG4gICAgICB0aHJlc2hvbGQ6IDAsXG4gICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICAgIG9uU3RhcnQ6IGV2ID0+IHRoaXMub25TdGFydChldiksXG4gICAgICBvbk1vdmU6IGV2ID0+IHRoaXMub25Nb3ZlKGV2KSxcbiAgICAgIG9uRW5kOiBldiA9PiB0aGlzLm9uRW5kKGV2KVxuICAgIH0pO1xuICAgIHRoaXMuZ2VzdHVyZS5lbmFibGUoKTtcbiAgICAvLyBPcHRpb25zIGhhdmUgbm90IGJlZW4gaW5pdGlhbGl6ZWQgeWV0XG4gICAgLy8gQW5pbWF0aW9uIG11c3QgYmUgZGlzYWJsZWQgdGhyb3VnaCB0aGUgYG5vQW5pbWF0ZWAgZmxhZ1xuICAgIC8vIE90aGVyd2lzZSwgdGhlIG9wdGlvbnMgd2lsbCByZW5kZXJcbiAgICAvLyBhdCB0aGUgdG9wIG9mIHRoZSBjb2x1bW4gYW5kIHRyYW5zaXRpb24gZG93blxuICAgIHRoaXMudG1ySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubm9BbmltYXRlID0gZmFsc2U7XG4gICAgICAvLyBBZnRlciBpbml0aWFsaXphdGlvbiwgYHJlZnJlc2goKWAgd2lsbCBiZSBjYWxsZWRcbiAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIGFuaW1hdGlvbiB3aWxsIGJlIGVuYWJsZWQuIFRoZSBvcHRpb25zIHdpbGxcbiAgICAgIC8vIGFuaW1hdGUgYXMgdGhleSBhcmUgYmVpbmcgc2VsZWN0ZWQuXG4gICAgICB0aGlzLnJlZnJlc2godHJ1ZSk7XG4gICAgfSwgMjUwKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHRoaXMub25Eb21DaGFuZ2UoKTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgLy8gT3B0aW9ucyBtYXkgaGF2ZSBjaGFuZ2VkIHNpbmNlIGxhc3QgdXBkYXRlLlxuICAgIGlmICh0aGlzLmNvbERpZENoYW5nZSkge1xuICAgICAgLy8gQW5pbWF0aW9uIG11c3QgYmUgZGlzYWJsZWQgdGhyb3VnaCB0aGUgYG9uRG9tQ2hhbmdlYCBwYXJhbWV0ZXIuXG4gICAgICAvLyBPdGhlcndpc2UsIHRoZSByZWNlbnRseSBhZGRlZCBvcHRpb25zIHdpbGwgcmVuZGVyXG4gICAgICAvLyBhdCB0aGUgdG9wIG9mIHRoZSBjb2x1bW4gYW5kIHRyYW5zaXRpb24gZG93blxuICAgICAgdGhpcy5vbkRvbUNoYW5nZSh0cnVlLCBmYWxzZSk7XG4gICAgICB0aGlzLmNvbERpZENoYW5nZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5yYWZJZCAhPT0gdW5kZWZpbmVkKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZklkKTtcbiAgICBpZiAodGhpcy50bXJJZCkgY2xlYXJUaW1lb3V0KHRoaXMudG1ySWQpO1xuICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgIHRoaXMuZ2VzdHVyZS5kZXN0cm95KCk7XG4gICAgICB0aGlzLmdlc3R1cmUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIGVtaXRDb2xDaGFuZ2UoKSB7XG4gICAgdGhpcy5pb25QaWNrZXJDb2xDaGFuZ2UuZW1pdCh0aGlzLmNvbCk7XG4gIH1cbiAgc2V0U2VsZWN0ZWQoc2VsZWN0ZWRJbmRleCwgZHVyYXRpb24pIHtcbiAgICAvLyBpZiB0aGVyZSBpcyBhIHNlbGVjdGVkIGluZGV4LCB0aGVuIGZpZ3VyZSBvdXQgaXQncyB5IHBvc2l0aW9uXG4gICAgLy8gaWYgdGhlcmUgaXNuJ3QgYSBzZWxlY3RlZCBpbmRleCwgdGhlbiBqdXN0IHVzZSB0aGUgdG9wIHkgcG9zaXRpb25cbiAgICBjb25zdCB5ID0gc2VsZWN0ZWRJbmRleCA+IC0xID8gLShzZWxlY3RlZEluZGV4ICogdGhpcy5vcHRIZWlnaHQpIDogMDtcbiAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICAvLyBzZXQgd2hhdCB5IHBvc2l0aW9uIHdlJ3JlIGF0XG4gICAgaWYgKHRoaXMucmFmSWQgIT09IHVuZGVmaW5lZCkgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWZJZCk7XG4gICAgdGhpcy51cGRhdGUoeSwgZHVyYXRpb24sIHRydWUpO1xuICAgIHRoaXMuZW1pdENvbENoYW5nZSgpO1xuICB9XG4gIHVwZGF0ZSh5LCBkdXJhdGlvbiwgc2F2ZVkpIHtcbiAgICBpZiAoIXRoaXMub3B0c0VsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGVuc3VyZSB3ZSd2ZSBnb3QgYSBnb29kIHJvdW5kIG51bWJlciA6KVxuICAgIGxldCB0cmFuc2xhdGVZID0gMDtcbiAgICBsZXQgdHJhbnNsYXRlWiA9IDA7XG4gICAgY29uc3Qge1xuICAgICAgY29sLFxuICAgICAgcm90YXRlRmFjdG9yXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgcHJldlNlbGVjdGVkID0gY29sLnNlbGVjdGVkSW5kZXg7XG4gICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IGNvbC5zZWxlY3RlZEluZGV4ID0gdGhpcy5pbmRleEZvclkoLXkpO1xuICAgIGNvbnN0IGR1cmF0aW9uU3RyID0gZHVyYXRpb24gPT09IDAgPyAnJyA6IGR1cmF0aW9uICsgJ21zJztcbiAgICBjb25zdCBzY2FsZVN0ciA9IGBzY2FsZSgke3RoaXMuc2NhbGVGYWN0b3J9KWA7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLm9wdHNFbC5jaGlsZHJlbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBjaGlsZHJlbltpXTtcbiAgICAgIGNvbnN0IG9wdCA9IGNvbC5vcHRpb25zW2ldO1xuICAgICAgY29uc3Qgb3B0T2Zmc2V0ID0gaSAqIHRoaXMub3B0SGVpZ2h0ICsgeTtcbiAgICAgIGxldCB0cmFuc2Zvcm0gPSAnJztcbiAgICAgIGlmIChyb3RhdGVGYWN0b3IgIT09IDApIHtcbiAgICAgICAgY29uc3Qgcm90YXRlWCA9IG9wdE9mZnNldCAqIHJvdGF0ZUZhY3RvcjtcbiAgICAgICAgaWYgKE1hdGguYWJzKHJvdGF0ZVgpIDw9IDkwKSB7XG4gICAgICAgICAgdHJhbnNsYXRlWSA9IDA7XG4gICAgICAgICAgdHJhbnNsYXRlWiA9IDkwO1xuICAgICAgICAgIHRyYW5zZm9ybSA9IGByb3RhdGVYKCR7cm90YXRlWH1kZWcpIGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJhbnNsYXRlWSA9IC05OTk5O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2xhdGVaID0gMDtcbiAgICAgICAgdHJhbnNsYXRlWSA9IG9wdE9mZnNldDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0ZWRJbmRleCA9PT0gaTtcbiAgICAgIHRyYW5zZm9ybSArPSBgdHJhbnNsYXRlM2QoMHB4LCR7dHJhbnNsYXRlWX1weCwke3RyYW5zbGF0ZVp9cHgpIGA7XG4gICAgICBpZiAodGhpcy5zY2FsZUZhY3RvciAhPT0gMSAmJiAhc2VsZWN0ZWQpIHtcbiAgICAgICAgdHJhbnNmb3JtICs9IHNjYWxlU3RyO1xuICAgICAgfVxuICAgICAgLy8gVXBkYXRlIHRyYW5zaXRpb24gZHVyYXRpb25cbiAgICAgIGlmICh0aGlzLm5vQW5pbWF0ZSkge1xuICAgICAgICBvcHQuZHVyYXRpb24gPSAwO1xuICAgICAgICBidXR0b24uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJyc7XG4gICAgICB9IGVsc2UgaWYgKGR1cmF0aW9uICE9PSBvcHQuZHVyYXRpb24pIHtcbiAgICAgICAgb3B0LmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIGJ1dHRvbi5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvblN0cjtcbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSB0cmFuc2Zvcm1cbiAgICAgIGlmICh0cmFuc2Zvcm0gIT09IG9wdC50cmFuc2Zvcm0pIHtcbiAgICAgICAgb3B0LnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAvKipcbiAgICAgICAqIEVuc3VyZSB0aGF0IHRoZSBzZWxlY3QgY29sdW1uXG4gICAgICAgKiBpdGVtIGhhcyB0aGUgc2VsZWN0ZWQgY2xhc3NcbiAgICAgICAqL1xuICAgICAgb3B0LnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoUElDS0VSX09QVF9TRUxFQ1RFRCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShQSUNLRVJfT1BUX1NFTEVDVEVEKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jb2wucHJldlNlbGVjdGVkID0gcHJldlNlbGVjdGVkO1xuICAgIGlmIChzYXZlWSkge1xuICAgICAgdGhpcy55ID0geTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGFzdEluZGV4ICE9PSBzZWxlY3RlZEluZGV4KSB7XG4gICAgICAvLyBoYXZlIG5vdCBzZXQgYSBsYXN0IGluZGV4IHlldFxuICAgICAgaGFwdGljU2VsZWN0aW9uQ2hhbmdlZCgpO1xuICAgICAgdGhpcy5sYXN0SW5kZXggPSBzZWxlY3RlZEluZGV4O1xuICAgIH1cbiAgfVxuICBkZWNlbGVyYXRlKCkge1xuICAgIGlmICh0aGlzLnZlbG9jaXR5ICE9PSAwKSB7XG4gICAgICAvLyBzdGlsbCBkZWNlbGVyYXRpbmdcbiAgICAgIHRoaXMudmVsb2NpdHkgKj0gREVDRUxFUkFUSU9OX0ZSSUNUSU9OO1xuICAgICAgLy8gZG8gbm90IGxldCBpdCBnbyBzbG93ZXIgdGhhbiBhIHZlbG9jaXR5IG9mIDFcbiAgICAgIHRoaXMudmVsb2NpdHkgPSB0aGlzLnZlbG9jaXR5ID4gMCA/IE1hdGgubWF4KHRoaXMudmVsb2NpdHksIDEpIDogTWF0aC5taW4odGhpcy52ZWxvY2l0eSwgLTEpO1xuICAgICAgbGV0IHkgPSB0aGlzLnkgKyB0aGlzLnZlbG9jaXR5O1xuICAgICAgaWYgKHkgPiB0aGlzLm1pblkpIHtcbiAgICAgICAgLy8gd2hvb3BzLCBpdCdzIHRyeWluZyB0byBzY3JvbGwgdXAgZmFydGhlciB0aGFuIHRoZSBvcHRpb25zIHdlIGhhdmUhXG4gICAgICAgIHkgPSB0aGlzLm1pblk7XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgICAgfSBlbHNlIGlmICh5IDwgdGhpcy5tYXhZKSB7XG4gICAgICAgIC8vIGdhaGgsIGl0J3MgdHJ5aW5nIHRvIHNjcm9sbCBkb3duIGZhcnRoZXIgdGhhbiB3ZSBjYW4hXG4gICAgICAgIHkgPSB0aGlzLm1heFk7XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGUoeSwgMCwgdHJ1ZSk7XG4gICAgICBjb25zdCBub3RMb2NrZWRJbiA9IE1hdGgucm91bmQoeSkgJSB0aGlzLm9wdEhlaWdodCAhPT0gMCB8fCBNYXRoLmFicyh0aGlzLnZlbG9jaXR5KSA+IDE7XG4gICAgICBpZiAobm90TG9ja2VkSW4pIHtcbiAgICAgICAgLy8gaXNuJ3QgbG9ja2VkIGluIHlldCwga2VlcCBkZWNlbGVyYXRpbmcgdW50aWwgaXQgaXNcbiAgICAgICAgdGhpcy5yYWZJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmRlY2VsZXJhdGUoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgdGhpcy5lbWl0Q29sQ2hhbmdlKCk7XG4gICAgICAgIGhhcHRpY1NlbGVjdGlvbkVuZCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy55ICUgdGhpcy5vcHRIZWlnaHQgIT09IDApIHtcbiAgICAgIC8vIG5lZWRzIHRvIHN0aWxsIGdldCBsb2NrZWQgaW50byBhIHBvc2l0aW9uIHNvIG9wdGlvbnMgbGluZSB1cFxuICAgICAgY29uc3QgY3VycmVudFBvcyA9IE1hdGguYWJzKHRoaXMueSAlIHRoaXMub3B0SGVpZ2h0KTtcbiAgICAgIC8vIGNyZWF0ZSBhIHZlbG9jaXR5IGluIHRoZSBkaXJlY3Rpb24gaXQgbmVlZHMgdG8gc2Nyb2xsXG4gICAgICB0aGlzLnZlbG9jaXR5ID0gY3VycmVudFBvcyA+IHRoaXMub3B0SGVpZ2h0IC8gMiA/IDEgOiAtMTtcbiAgICAgIHRoaXMuZGVjZWxlcmF0ZSgpO1xuICAgIH1cbiAgfVxuICBpbmRleEZvclkoeSkge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChNYXRoLmFicyhNYXRoLnJvdW5kKHkgLyB0aGlzLm9wdEhlaWdodCkpLCAwKSwgdGhpcy5jb2wub3B0aW9ucy5sZW5ndGggLSAxKTtcbiAgfVxuICBvblN0YXJ0KGRldGFpbCkge1xuICAgIC8vIFdlIGhhdmUgdG8gcHJldmVudCBkZWZhdWx0IGluIG9yZGVyIHRvIGJsb2NrIHNjcm9sbGluZyB1bmRlciB0aGUgcGlja2VyXG4gICAgLy8gYnV0IHdlIERPIE5PVCBoYXZlIHRvIHN0b3AgcHJvcGFnYXRpb24sIHNpbmNlIHdlIHN0aWxsIHdhbnRcbiAgICAvLyBzb21lIFwiY2xpY2tcIiBldmVudHMgdG8gY2FwdHVyZVxuICAgIGlmIChkZXRhaWwuZXZlbnQuY2FuY2VsYWJsZSkge1xuICAgICAgZGV0YWlsLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGRldGFpbC5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBoYXB0aWNTZWxlY3Rpb25TdGFydCgpO1xuICAgIC8vIHJlc2V0IGV2ZXJ5dGhpbmdcbiAgICBpZiAodGhpcy5yYWZJZCAhPT0gdW5kZWZpbmVkKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZklkKTtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5jb2wub3B0aW9ucztcbiAgICBsZXQgbWluWSA9IG9wdGlvbnMubGVuZ3RoIC0gMTtcbiAgICBsZXQgbWF4WSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIW9wdGlvbnNbaV0uZGlzYWJsZWQpIHtcbiAgICAgICAgbWluWSA9IE1hdGgubWluKG1pblksIGkpO1xuICAgICAgICBtYXhZID0gTWF0aC5tYXgobWF4WSwgaSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubWluWSA9IC0obWluWSAqIHRoaXMub3B0SGVpZ2h0KTtcbiAgICB0aGlzLm1heFkgPSAtKG1heFkgKiB0aGlzLm9wdEhlaWdodCk7XG4gIH1cbiAgb25Nb3ZlKGRldGFpbCkge1xuICAgIGlmIChkZXRhaWwuZXZlbnQuY2FuY2VsYWJsZSkge1xuICAgICAgZGV0YWlsLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGRldGFpbC5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAvLyB1cGRhdGUgdGhlIHNjcm9sbCBwb3NpdGlvbiByZWxhdGl2ZSB0byBwb2ludGVyIHN0YXJ0IHBvc2l0aW9uXG4gICAgbGV0IHkgPSB0aGlzLnkgKyBkZXRhaWwuZGVsdGFZO1xuICAgIGlmICh5ID4gdGhpcy5taW5ZKSB7XG4gICAgICAvLyBzY3JvbGxpbmcgdXAgaGlnaGVyIHRoYW4gc2Nyb2xsIGFyZWFcbiAgICAgIHkgPSBNYXRoLnBvdyh5LCAwLjgpO1xuICAgICAgdGhpcy5ib3VuY2VGcm9tID0geTtcbiAgICB9IGVsc2UgaWYgKHkgPCB0aGlzLm1heFkpIHtcbiAgICAgIC8vIHNjcm9sbGluZyBkb3duIGJlbG93IHNjcm9sbCBhcmVhXG4gICAgICB5ICs9IE1hdGgucG93KHRoaXMubWF4WSAtIHksIDAuOSk7XG4gICAgICB0aGlzLmJvdW5jZUZyb20gPSB5O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJvdW5jZUZyb20gPSAwO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZSh5LCAwLCBmYWxzZSk7XG4gIH1cbiAgb25FbmQoZGV0YWlsKSB7XG4gICAgaWYgKHRoaXMuYm91bmNlRnJvbSA+IDApIHtcbiAgICAgIC8vIGJvdW5jZSBiYWNrIHVwXG4gICAgICB0aGlzLnVwZGF0ZSh0aGlzLm1pblksIDEwMCwgdHJ1ZSk7XG4gICAgICB0aGlzLmVtaXRDb2xDaGFuZ2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm91bmNlRnJvbSA8IDApIHtcbiAgICAgIC8vIGJvdW5jZSBiYWNrIGRvd25cbiAgICAgIHRoaXMudXBkYXRlKHRoaXMubWF4WSwgMTAwLCB0cnVlKTtcbiAgICAgIHRoaXMuZW1pdENvbENoYW5nZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZlbG9jaXR5ID0gY2xhbXAoLU1BWF9QSUNLRVJfU1BFRUQsIGRldGFpbC52ZWxvY2l0eVkgKiAyMywgTUFYX1BJQ0tFUl9TUEVFRCk7XG4gICAgaWYgKHRoaXMudmVsb2NpdHkgPT09IDAgJiYgZGV0YWlsLmRlbHRhWSA9PT0gMCkge1xuICAgICAgY29uc3Qgb3B0ID0gZGV0YWlsLmV2ZW50LnRhcmdldC5jbG9zZXN0KCcucGlja2VyLW9wdCcpO1xuICAgICAgaWYgKG9wdCA9PT0gbnVsbCB8fCBvcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdC5oYXNBdHRyaWJ1dGUoJ29wdC1pbmRleCcpKSB7XG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWQocGFyc2VJbnQob3B0LmdldEF0dHJpYnV0ZSgnb3B0LWluZGV4JyksIDEwKSwgVFJBTlNJVElPTl9EVVJBVElPTik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMueSArPSBkZXRhaWwuZGVsdGFZO1xuICAgICAgaWYgKE1hdGguYWJzKGRldGFpbC52ZWxvY2l0eVkpIDwgMC4wNSkge1xuICAgICAgICBjb25zdCBpc1Njcm9sbGluZ1VwID0gZGV0YWlsLmRlbHRhWSA+IDA7XG4gICAgICAgIGNvbnN0IG9wdEhlaWdodEZyYWN0aW9uID0gTWF0aC5hYnModGhpcy55KSAlIHRoaXMub3B0SGVpZ2h0IC8gdGhpcy5vcHRIZWlnaHQ7XG4gICAgICAgIGlmIChpc1Njcm9sbGluZ1VwICYmIG9wdEhlaWdodEZyYWN0aW9uID4gMC41KSB7XG4gICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IE1hdGguYWJzKHRoaXMudmVsb2NpdHkpICogLTE7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzU2Nyb2xsaW5nVXAgJiYgb3B0SGVpZ2h0RnJhY3Rpb24gPD0gMC41KSB7XG4gICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IE1hdGguYWJzKHRoaXMudmVsb2NpdHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmRlY2VsZXJhdGUoKTtcbiAgICB9XG4gIH1cbiAgcmVmcmVzaChmb3JjZVJlZnJlc2gsIGFuaW1hdGVkKSB7XG4gICAgdmFyIF9hO1xuICAgIGxldCBtaW4gPSB0aGlzLmNvbC5vcHRpb25zLmxlbmd0aCAtIDE7XG4gICAgbGV0IG1heCA9IDA7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY29sLm9wdGlvbnM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIW9wdGlvbnNbaV0uZGlzYWJsZWQpIHtcbiAgICAgICAgbWluID0gTWF0aC5taW4obWluLCBpKTtcbiAgICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCBpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogT25seSB1cGRhdGUgc2VsZWN0ZWQgdmFsdWUgaWYgY29sdW1uIGhhcyBhXG4gICAgICogdmVsb2NpdHkgb2YgMC4gSWYgaXQgZG9lcyBub3QsIHRoZW4gdGhlXG4gICAgICogY29sdW1uIGlzIGFuaW1hdGluZyBtaWdodCBsYW5kIG9uXG4gICAgICogYSB2YWx1ZSBkaWZmZXJlbnQgdGhhbiB0aGUgdmFsdWUgYXRcbiAgICAgKiBzZWxlY3RlZEluZGV4XG4gICAgICovXG4gICAgaWYgKHRoaXMudmVsb2NpdHkgIT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IGNsYW1wKG1pbiwgKF9hID0gdGhpcy5jb2wuc2VsZWN0ZWRJbmRleCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogMCwgbWF4KTtcbiAgICBpZiAodGhpcy5jb2wucHJldlNlbGVjdGVkICE9PSBzZWxlY3RlZEluZGV4IHx8IGZvcmNlUmVmcmVzaCkge1xuICAgICAgY29uc3QgeSA9IHNlbGVjdGVkSW5kZXggKiB0aGlzLm9wdEhlaWdodCAqIC0xO1xuICAgICAgY29uc3QgZHVyYXRpb24gPSBhbmltYXRlZCA/IFRSQU5TSVRJT05fRFVSQVRJT04gOiAwO1xuICAgICAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gICAgICB0aGlzLnVwZGF0ZSh5LCBkdXJhdGlvbiwgdHJ1ZSk7XG4gICAgfVxuICB9XG4gIG9uRG9tQ2hhbmdlKGZvcmNlUmVmcmVzaCwgYW5pbWF0ZWQpIHtcbiAgICBjb25zdCBjb2xFbCA9IHRoaXMub3B0c0VsO1xuICAgIGlmIChjb2xFbCkge1xuICAgICAgLy8gRE9NIFJFQURcbiAgICAgIC8vIFdlIHBlcmZvbSBhIERPTSByZWFkIG92ZXIgYSByZW5kZXJlZCBpdGVtLCB0aGlzIG5lZWRzIHRvIGhhcHBlbiBhZnRlciB0aGUgZmlyc3QgcmVuZGVyIG9yIGFmdGVyIHRoZSB0aGUgY29sdW1uIGhhcyBjaGFuZ2VkXG4gICAgICB0aGlzLm9wdEhlaWdodCA9IGNvbEVsLmZpcnN0RWxlbWVudENoaWxkID8gY29sRWwuZmlyc3RFbGVtZW50Q2hpbGQuY2xpZW50SGVpZ2h0IDogMDtcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoKGZvcmNlUmVmcmVzaCwgYW5pbWF0ZWQpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjb2wgPSB0aGlzLmNvbDtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICc4OGEzYzkzOTdjOWFjOTJkZDgxNDA3NGM4YWU2ZWNmOGUzNDIwYTJjJyxcbiAgICAgIGNsYXNzOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAncGlja2VyLWNvbCc6IHRydWUsXG4gICAgICAgICdwaWNrZXItb3B0cy1sZWZ0JzogdGhpcy5jb2wuYWxpZ24gPT09ICdsZWZ0JyxcbiAgICAgICAgJ3BpY2tlci1vcHRzLXJpZ2h0JzogdGhpcy5jb2wuYWxpZ24gPT09ICdyaWdodCdcbiAgICAgIH0sIGdldENsYXNzTWFwKGNvbC5jc3NDbGFzcykpLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgJ21heC13aWR0aCc6IHRoaXMuY29sLmNvbHVtbldpZHRoXG4gICAgICB9XG4gICAgfSwgY29sLnByZWZpeCAmJiBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzQ0OTFhNzA1ZDE1MzM3ZTZmNDVmM2NmNmZkMjFhZjUyNDI0NzQ3MjknLFxuICAgICAgY2xhc3M6IFwicGlja2VyLXByZWZpeFwiLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgd2lkdGg6IGNvbC5wcmVmaXhXaWR0aFxuICAgICAgfVxuICAgIH0sIGNvbC5wcmVmaXgpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJ2IwZGQ0YjdhN2E0YzFlZGM0YjczZTdmYjEzNGFjODUyNjQwNzIzNjUnLFxuICAgICAgY2xhc3M6IFwicGlja2VyLW9wdHNcIixcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIG1heFdpZHRoOiBjb2wub3B0aW9uc1dpZHRoXG4gICAgICB9LFxuICAgICAgcmVmOiBlbCA9PiB0aGlzLm9wdHNFbCA9IGVsXG4gICAgfSwgY29sLm9wdGlvbnMubWFwKChvLCBpbmRleCkgPT4gaChcImJ1dHRvblwiLCB7XG4gICAgICBcImFyaWEtbGFiZWxcIjogby5hcmlhTGFiZWwsXG4gICAgICBjbGFzczoge1xuICAgICAgICAncGlja2VyLW9wdCc6IHRydWUsXG4gICAgICAgICdwaWNrZXItb3B0LWRpc2FibGVkJzogISFvLmRpc2FibGVkXG4gICAgICB9LFxuICAgICAgXCJvcHQtaW5kZXhcIjogaW5kZXhcbiAgICB9LCBvLnRleHQpKSksIGNvbC5zdWZmaXggJiYgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICdjMTY0MTljZTY0ODFkNjBmYzNiYTZiOGQxMDJhNGVkZjBlZGUwMmFhJyxcbiAgICAgIGNsYXNzOiBcInBpY2tlci1zdWZmaXhcIixcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHdpZHRoOiBjb2wuc3VmZml4V2lkdGhcbiAgICAgIH1cbiAgICB9LCBjb2wuc3VmZml4KSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiY29sXCI6IFtcImNvbENoYW5nZWRcIl1cbiAgICB9O1xuICB9XG59O1xuY29uc3QgUElDS0VSX09QVF9TRUxFQ1RFRCA9ICdwaWNrZXItb3B0LXNlbGVjdGVkJztcbmNvbnN0IERFQ0VMRVJBVElPTl9GUklDVElPTiA9IDAuOTc7XG5jb25zdCBNQVhfUElDS0VSX1NQRUVEID0gOTA7XG5jb25zdCBUUkFOU0lUSU9OX0RVUkFUSU9OID0gMTUwO1xuUGlja2VyQ29sdW1uQ21wLnN0eWxlID0ge1xuICBpb3M6IElvblBpY2tlckxlZ2FjeUNvbHVtbklvc1N0eWxlMCxcbiAgbWQ6IElvblBpY2tlckxlZ2FjeUNvbHVtbk1kU3R5bGUwXG59O1xuZXhwb3J0IHsgRGF0ZXRpbWUgYXMgaW9uX2RhdGV0aW1lLCBQaWNrZXIgYXMgaW9uX3BpY2tlcl9sZWdhY3ksIFBpY2tlckNvbHVtbkNtcCBhcyBpb25fcGlja2VyX2xlZ2FjeV9jb2x1bW4gfTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSxJQUFNLGlCQUFpQixDQUFDLFNBQVMsVUFBVSxhQUFhO0FBQ3RELE1BQUksWUFBWSxTQUFTLE9BQU8sU0FBUztBQUN2QyxXQUFPO0FBQUEsRUFDVDtBQUNBLE1BQUksWUFBWSxTQUFTLE9BQU8sU0FBUztBQUN2QyxXQUFPO0FBQUEsRUFDVDtBQUNBLFNBQU87QUFDVDtBQU1BLElBQU0sZ0JBQWdCLENBQUMsVUFBVSxVQUFVLFVBQVUsY0FBYztBQUtqRSxNQUFJLFNBQVMsUUFBUSxNQUFNO0FBQ3pCLFdBQU87QUFBQSxFQUNUO0FBTUEsTUFBSSxjQUFjLFVBQWEsQ0FBQyxVQUFVLFNBQVMsU0FBUyxHQUFHLEdBQUc7QUFDaEUsV0FBTztBQUFBLEVBQ1Q7QUFZQSxNQUFJLFlBQVksU0FBUyxVQUFVLFFBQVEsR0FBRztBQUM1QyxXQUFPO0FBQUEsRUFDVDtBQVlBLE1BQUksWUFBWSxRQUFRLFVBQVUsUUFBUSxHQUFHO0FBQzNDLFdBQU87QUFBQSxFQUNUO0FBTUEsU0FBTztBQUNUO0FBS0EsSUFBTSxzQkFBc0IsQ0FBQyxRQUFRLFVBQVUsYUFBYSxZQUFZLFVBQVUsVUFBVSxjQUFjO0FBUXhHLFFBQU0sbUJBQW1CLE1BQU0sUUFB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QUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxVQUFVLElBQUk7QUFBQSxNQUNoQjtBQUFBLE1BQ0EsS0FBSyxRQUFNLEtBQUssU0FBUztBQUFBLElBQzNCLEdBQUcsSUFBSSxRQUFRLElBQUksQ0FBQyxHQUFHLFVBQVUsRUFBRSxVQUFVO0FBQUEsTUFDM0MsY0FBYyxFQUFFO0FBQUEsTUFDaEIsT0FBTztBQUFBLFFBQ0wsY0FBYztBQUFBLFFBQ2QsdUJBQXVCLENBQUMsQ0FBQyxFQUFFO0FBQUEsTUFDN0I7QUFBQSxNQUNBLGFBQWE7QUFBQSxJQUNmLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksVUFBVSxFQUFFLE9BQU87QUFBQSxNQUNuQyxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxPQUFPLElBQUk7QUFBQSxNQUNiO0FBQUEsSUFDRixHQUFHLElBQUksTUFBTSxDQUFDO0FBQUEsRUFDaEI7QUFBQSxFQUNBLElBQUksS0FBSztBQUNQLFdBQU8sV0FBVyxJQUFJO0FBQUEsRUFDeEI7QUFBQSxFQUNBLFdBQVcsV0FBVztBQUNwQixXQUFPO0FBQUEsTUFDTCxPQUFPLENBQUMsWUFBWTtBQUFBLElBQ3RCO0FBQUEsRUFDRjtBQUNGO0FBQ0EsSUFBTSxzQkFBc0I7QUFDNUIsSUFBTSx3QkFBd0I7QUFDOUIsSUFBTSxtQkFBbUI7QUFDekIsSUFBTSxzQkFBc0I7QUFDNUIsZ0JBQWdCLFFBQVE7QUFBQSxFQUN0QixLQUFLO0FBQUEsRUFDTCxJQUFJO0FBQ047IiwibmFtZXMiOlsiZGlzYWJsZWQiLCJpc0RheURpc2FibGVkIiwiZWwiXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
