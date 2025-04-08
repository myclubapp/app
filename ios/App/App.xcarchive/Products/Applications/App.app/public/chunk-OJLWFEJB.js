import {
  printIonWarning
} from "./chunk-5HIO5JVM.js";

// node_modules/@ionic/core/dist/esm/data-174ad5e0.js
var isSameDay = (baseParts, compareParts) => {
  return baseParts.month === compareParts.month && baseParts.day === compareParts.day && baseParts.year === compareParts.year;
};
var isBefore = (baseParts, compareParts) => {
  return !!(baseParts.year < compareParts.year || baseParts.year === compareParts.year && baseParts.month < compareParts.month || baseParts.year === compareParts.year && baseParts.month === compareParts.month && baseParts.day !== null && baseParts.day < compareParts.day);
};
var isAfter = (baseParts, compareParts) => {
  return !!(baseParts.year > compareParts.year || baseParts.year === compareParts.year && baseParts.month > compareParts.month || baseParts.year === compareParts.year && baseParts.month === compareParts.month && baseParts.day !== null && baseParts.day > compareParts.day);
};
var warnIfValueOutOfBounds = (value, min, max) => {
  const valueArray = Array.isArray(value) ? value : [value];
  for (const val of valueArray) {
    if (min !== void 0 && isBefore(val, min) || max !== void 0 && isAfter(val, max)) {
      printIonWarning(`The value provided to ion-datetime is out of bounds.

Min: ${JSON.stringify(min)}
Max: ${JSON.stringify(max)}
Value: ${JSON.stringify(value)}`);
      break;
    }
  }
};
var isLeapYear = (year) => {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
};
var getHourCycle = (locale, hourCycle) => {
  if (hourCycle !== void 0) {
    return hourCycle;
  }
  const formatted = new Intl.DateTimeFormat(locale, {
    hour: "numeric"
  });
  const options = formatted.resolvedOptions();
  if (options.hourCycle !== void 0) {
    return options.hourCycle;
  }
  const date = /* @__PURE__ */ new Date("5/18/2021 00:00");
  const parts = formatted.formatToParts(date);
  const hour = parts.find((p) => p.type === "hour");
  if (!hour) {
    throw new Error("Hour value not found from DateTimeFormat");
  }
  switch (hour.value) {
    case "0":
      return "h11";
    case "12":
      return "h12";
    case "00":
      return "h23";
    case "24":
      return "h24";
    default:
      throw new Error(`Invalid hour cycle "${hourCycle}"`);
  }
};
var is24Hour = (hourCycle) => {
  return hourCycle === "h23" || hourCycle === "h24";
};
var getNumDaysInMonth = (month, year) => {
  return month === 4 || month === 6 || month === 9 || month === 11 ? 30 : month === 2 ? isLeapYear(year) ? 29 : 28 : 31;
};
var isMonthFirstLocale = (locale, formatOptions = {
  month: "numeric",
  year: "numeric"
}) => {
  const parts = new Intl.DateTimeFormat(locale, formatOptions).formatToParts(/* @__PURE__ */ new Date());
  return parts[0].type === "month";
};
var isLocaleDayPeriodRTL = (locale) => {
  const parts = new Intl.DateTimeFormat(locale, {
    hour: "numeric"
  }).formatToParts(/* @__PURE__ */ new Date());
  return parts[0].type === "dayPeriod";
};
var ISO_8601_REGEXP = (
  // eslint-disable-next-line no-useless-escape
  /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/
);
var TIME_REGEXP = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
var convertToArrayOfNumbers = (input) => {
  if (input === void 0) {
    return;
  }
  let processedInput = input;
  if (typeof input === "string") {
    processedInput = input.replace(/\[|\]|\s/g, "").split(",");
  }
  let values;
  if (Array.isArray(processedInput)) {
    values = processedInput.map((num) => parseInt(num, 10)).filter(isFinite);
  } else {
    values = [processedInput];
  }
  return values;
};
var getPartsFromCalendarDay = (el) => {
  return {
    month: parseInt(el.getAttribute("data-month"), 10),
    day: parseInt(el.getAttribute("data-day"), 10),
    year: parseInt(el.getAttribute("data-year"), 10),
    dayOfWeek: parseInt(el.getAttribute("data-day-of-week"), 10)
  };
};
function parseDate(val) {
  if (Array.isArray(val)) {
    const parsedArray = [];
    for (const valStr of val) {
      const parsedVal = parseDate(valStr);
      if (!parsedVal) {
        return void 0;
      }
      parsedArray.push(parsedVal);
    }
    return parsedArray;
  }
  let parse = null;
  if (val != null && val !== "") {
    parse = TIME_REGEXP.exec(val);
    if (parse) {
      parse.unshift(void 0, void 0);
      parse[2] = parse[3] = void 0;
    } else {
      parse = ISO_8601_REGEXP.exec(val);
    }
  }
  if (parse === null) {
    printIonWarning(`Unable to parse date string: ${val}. Please provide a valid ISO 8601 datetime string.`);
    return void 0;
  }
  for (let i = 1; i < 8; i++) {
    parse[i] = parse[i] !== void 0 ? parseInt(parse[i], 10) : void 0;
  }
  return {
    year: parse[1],
    month: parse[2],
    day: parse[3],
    hour: parse[4],
    minute: parse[5],
    ampm: parse[4] < 12 ? "am" : "pm"
  };
}
var clampDate = (dateParts, minParts, maxParts) => {
  if (minParts && isBefore(dateParts, minParts)) {
    return minParts;
  } else if (maxParts && isAfter(dateParts, maxParts)) {
    return maxParts;
  }
  return dateParts;
};
var parseAmPm = (hour) => {
  return hour >= 12 ? "pm" : "am";
};
var parseMaxParts = (max, todayParts) => {
  const result = parseDate(max);
  if (result === void 0) {
    return;
  }
  const {
    month,
    day,
    year,
    hour,
    minute
  } = result;
  const yearValue = year !== null && year !== void 0 ? year : todayParts.year;
  const monthValue = month !== null && month !== void 0 ? month : 12;
  return {
    month: monthValue,
    day: day !== null && day !== void 0 ? day : getNumDaysInMonth(monthValue, yearValue),
    /**
     * Passing in "HH:mm" is a valid ISO-8601
     * string, so we just default to the current year
     * in this case.
     */
    year: yearValue,
    hour: hour !== null && hour !== void 0 ? hour : 23,
    minute: minute !== null && minute !== void 0 ? minute : 59
  };
};
var parseMinParts = (min, todayParts) => {
  const result = parseDate(min);
  if (result === void 0) {
    return;
  }
  const {
    month,
    day,
    year,
    hour,
    minute
  } = result;
  return {
    month: month !== null && month !== void 0 ? month : 1,
    day: day !== null && day !== void 0 ? day : 1,
    /**
     * Passing in "HH:mm" is a valid ISO-8601
     * string, so we just default to the current year
     * in this case.
     */
    year: year !== null && year !== void 0 ? year : todayParts.year,
    hour: hour !== null && hour !== void 0 ? hour : 0,
    minute: minute !== null && minute !== void 0 ? minute : 0
  };
};
var twoDigit = (val) => {
  return ("0" + (val !== void 0 ? Math.abs(val) : "0")).slice(-2);
};
var fourDigit = (val) => {
  return ("000" + (val !== void 0 ? Math.abs(val) : "0")).slice(-4);
};
function convertDataToISO(data) {
  if (Array.isArray(data)) {
    return data.map((parts) => convertDataToISO(parts));
  }
  let rtn = "";
  if (data.year !== void 0) {
    rtn = fourDigit(data.year);
    if (data.month !== void 0) {
      rtn += "-" + twoDigit(data.month);
      if (data.day !== void 0) {
        rtn += "-" + twoDigit(data.day);
        if (data.hour !== void 0) {
          rtn += `T${twoDigit(data.hour)}:${twoDigit(data.minute)}:00`;
        }
      }
    }
  } else if (data.hour !== void 0) {
    rtn = twoDigit(data.hour) + ":" + twoDigit(data.minute);
  }
  return rtn;
}
var convert12HourTo24Hour = (hour, ampm) => {
  if (ampm === void 0) {
    return hour;
  }
  if (ampm === "am") {
    if (hour === 12) {
      return 0;
    }
    return hour;
  }
  if (hour === 12) {
    return 12;
  }
  return hour + 12;
};
var getStartOfWeek = (refParts) => {
  const {
    dayOfWeek
  } = refParts;
  if (dayOfWeek === null || dayOfWeek === void 0) {
    throw new Error("No day of week provided");
  }
  return subtractDays(refParts, dayOfWeek);
};
var getEndOfWeek = (refParts) => {
  const {
    dayOfWeek
  } = refParts;
  if (dayOfWeek === null || dayOfWeek === void 0) {
    throw new Error("No day of week provided");
  }
  return addDays(refParts, 6 - dayOfWeek);
};
var getNextDay = (refParts) => {
  return addDays(refParts, 1);
};
var getPreviousDay = (refParts) => {
  return subtractDays(refParts, 1);
};
var getPreviousWeek = (refParts) => {
  return subtractDays(refParts, 7);
};
var getNextWeek = (refParts) => {
  return addDays(refParts, 7);
};
var subtractDays = (refParts, numDays) => {
  const {
    month,
    day,
    year
  } = refParts;
  if (day === null) {
    throw new Error("No day provided");
  }
  const workingParts = {
    month,
    day,
    year
  };
  workingParts.day = day - numDays;
  if (workingParts.day < 1) {
    workingParts.month -= 1;
  }
  if (workingParts.month < 1) {
    workingParts.month = 12;
    workingParts.year -= 1;
  }
  if (workingParts.day < 1) {
    const daysInMonth = getNumDaysInMonth(workingParts.month, workingParts.year);
    workingParts.day = daysInMonth + workingParts.day;
  }
  return workingParts;
};
var addDays = (refParts, numDays) => {
  const {
    month,
    day,
    year
  } = refParts;
  if (day === null) {
    throw new Error("No day provided");
  }
  const workingParts = {
    month,
    day,
    year
  };
  const daysInMonth = getNumDaysInMonth(month, year);
  workingParts.day = day + numDays;
  if (workingParts.day > daysInMonth) {
    workingParts.day -= daysInMonth;
    workingParts.month += 1;
  }
  if (workingParts.month > 12) {
    workingParts.month = 1;
    workingParts.year += 1;
  }
  return workingParts;
};
var getPreviousMonth = (refParts) => {
  const month = refParts.month === 1 ? 12 : refParts.month - 1;
  const year = refParts.month === 1 ? refParts.year - 1 : refParts.year;
  const numDaysInMonth = getNumDaysInMonth(month, year);
  const day = numDaysInMonth < refParts.day ? numDaysInMonth : refParts.day;
  return {
    month,
    year,
    day
  };
};
var getNextMonth = (refParts) => {
  const month = refParts.month === 12 ? 1 : refParts.month + 1;
  const year = refParts.month === 12 ? refParts.year + 1 : refParts.year;
  const numDaysInMonth = getNumDaysInMonth(month, year);
  const day = numDaysInMonth < refParts.day ? numDaysInMonth : refParts.day;
  return {
    month,
    year,
    day
  };
};
var changeYear = (refParts, yearDelta) => {
  const month = refParts.month;
  const year = refParts.year + yearDelta;
  const numDaysInMonth = getNumDaysInMonth(month, year);
  const day = numDaysInMonth < refParts.day ? numDaysInMonth : refParts.day;
  return {
    month,
    year,
    day
  };
};
var getPreviousYear = (refParts) => {
  return changeYear(refParts, -1);
};
var getNextYear = (refParts) => {
  return changeYear(refParts, 1);
};
var getInternalHourValue = (hour, use24Hour, ampm) => {
  if (use24Hour) {
    return hour;
  }
  return convert12HourTo24Hour(hour, ampm);
};
var calculateHourFromAMPM = (currentParts, newAMPM) => {
  const {
    ampm: currentAMPM,
    hour
  } = currentParts;
  let newHour = hour;
  if (currentAMPM === "am" && newAMPM === "pm") {
    newHour = convert12HourTo24Hour(newHour, "pm");
  } else if (currentAMPM === "pm" && newAMPM === "am") {
    newHour = Math.abs(newHour - 12);
  }
  return newHour;
};
var validateParts = (parts, minParts, maxParts) => {
  const {
    month,
    day,
    year
  } = parts;
  const partsCopy = clampDate(Object.assign({}, parts), minParts, maxParts);
  const numDays = getNumDaysInMonth(month, year);
  if (day !== null && numDays < day) {
    partsCopy.day = numDays;
  }
  if (minParts !== void 0 && isSameDay(partsCopy, minParts)) {
    if (partsCopy.hour !== void 0 && minParts.hour !== void 0) {
      if (partsCopy.hour < minParts.hour) {
        partsCopy.hour = minParts.hour;
        partsCopy.minute = minParts.minute;
      } else if (partsCopy.hour === minParts.hour && partsCopy.minute !== void 0 && minParts.minute !== void 0 && partsCopy.minute < minParts.minute) {
        partsCopy.minute = minParts.minute;
      }
    }
  }
  if (maxParts !== void 0 && isSameDay(parts, maxParts)) {
    if (partsCopy.hour !== void 0 && maxParts.hour !== void 0) {
      if (partsCopy.hour > maxParts.hour) {
        partsCopy.hour = maxParts.hour;
        partsCopy.minute = maxParts.minute;
      } else if (partsCopy.hour === maxParts.hour && partsCopy.minute !== void 0 && maxParts.minute !== void 0 && partsCopy.minute > maxParts.minute) {
        partsCopy.minute = maxParts.minute;
      }
    }
  }
  return partsCopy;
};
var getClosestValidDate = ({
  refParts,
  monthValues,
  dayValues,
  yearValues,
  hourValues,
  minuteValues,
  minParts,
  maxParts
}) => {
  const {
    hour,
    minute,
    day,
    month,
    year
  } = refParts;
  const copyParts = Object.assign(Object.assign({}, refParts), {
    dayOfWeek: void 0
  });
  if (yearValues !== void 0) {
    const filteredYears = yearValues.filter((year2) => {
      if (minParts !== void 0 && year2 < minParts.year) {
        return false;
      }
      if (maxParts !== void 0 && year2 > maxParts.year) {
        return false;
      }
      return true;
    });
    copyParts.year = findClosestValue(year, filteredYears);
  }
  if (monthValues !== void 0) {
    const filteredMonths = monthValues.filter((month2) => {
      if (minParts !== void 0 && copyParts.year === minParts.year && month2 < minParts.month) {
        return false;
      }
      if (maxParts !== void 0 && copyParts.year === maxParts.year && month2 > maxParts.month) {
        return false;
      }
      return true;
    });
    copyParts.month = findClosestValue(month, filteredMonths);
  }
  if (day !== null && dayValues !== void 0) {
    const filteredDays = dayValues.filter((day2) => {
      if (minParts !== void 0 && isBefore(Object.assign(Object.assign({}, copyParts), {
        day: day2
      }), minParts)) {
        return false;
      }
      if (maxParts !== void 0 && isAfter(Object.assign(Object.assign({}, copyParts), {
        day: day2
      }), maxParts)) {
        return false;
      }
      return true;
    });
    copyParts.day = findClosestValue(day, filteredDays);
  }
  if (hour !== void 0 && hourValues !== void 0) {
    const filteredHours = hourValues.filter((hour2) => {
      if ((minParts === null || minParts === void 0 ? void 0 : minParts.hour) !== void 0 && isSameDay(copyParts, minParts) && hour2 < minParts.hour) {
        return false;
      }
      if ((maxParts === null || maxParts === void 0 ? void 0 : maxParts.hour) !== void 0 && isSameDay(copyParts, maxParts) && hour2 > maxParts.hour) {
        return false;
      }
      return true;
    });
    copyParts.hour = findClosestValue(hour, filteredHours);
    copyParts.ampm = parseAmPm(copyParts.hour);
  }
  if (minute !== void 0 && minuteValues !== void 0) {
    const filteredMinutes = minuteValues.filter((minute2) => {
      if ((minParts === null || minParts === void 0 ? void 0 : minParts.minute) !== void 0 && isSameDay(copyParts, minParts) && copyParts.hour === minParts.hour && minute2 < minParts.minute) {
        return false;
      }
      if ((maxParts === null || maxParts === void 0 ? void 0 : maxParts.minute) !== void 0 && isSameDay(copyParts, maxParts) && copyParts.hour === maxParts.hour && minute2 > maxParts.minute) {
        return false;
      }
      return true;
    });
    copyParts.minute = findClosestValue(minute, filteredMinutes);
  }
  return copyParts;
};
var findClosestValue = (reference, values) => {
  let closestValue = values[0];
  let rank = Math.abs(closestValue - reference);
  for (let i = 1; i < values.length; i++) {
    const value = values[i];
    const valueRank = Math.abs(value - reference);
    if (valueRank < rank) {
      closestValue = value;
      rank = valueRank;
    }
  }
  return closestValue;
};
var getFormattedDayPeriod = (dayPeriod) => {
  if (dayPeriod === void 0) {
    return "";
  }
  return dayPeriod.toUpperCase();
};
var stripTimeZone = (formatOptions) => {
  return Object.assign(Object.assign({}, formatOptions), {
    /**
     * Setting the time zone to UTC ensures that the value shown is always the
     * same as what was selected and safeguards against older Safari bugs with
     * Intl.DateTimeFormat.
     */
    timeZone: "UTC",
    /**
     * We do not want to display the time zone name
     */
    timeZoneName: void 0
  });
};
var getLocalizedTime = (locale, refParts, hourCycle, formatOptions = {
  hour: "numeric",
  minute: "numeric"
}) => {
  const timeParts = {
    hour: refParts.hour,
    minute: refParts.minute
  };
  if (timeParts.hour === void 0 || timeParts.minute === void 0) {
    return "Invalid Time";
  }
  return new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, stripTimeZone(formatOptions)), {
    /**
     * We use hourCycle here instead of hour12 due to:
     * https://bugs.chromium.org/p/chromium/issues/detail?id=1347316&q=hour12&can=2
     */
    hourCycle
  })).format(/* @__PURE__ */ new Date(convertDataToISO(Object.assign({
    /**
     * JS uses a simplified ISO 8601 format which allows for
     * date-only formats and date-time formats, but not
     * time-only formats: https://tc39.es/ecma262/#sec-date-time-string-format
     * As a result, developers who only pass a time will get
     * an "Invalid Date" error. To account for this, we make sure that
     * year/day/month values are set when passing to new Date().
     * The Intl.DateTimeFormat call above only uses the hour/minute
     * values, so passing these date values should have no impact
     * on the time output.
     */
    year: 2023,
    day: 1,
    month: 1
  }, timeParts)) + "Z"));
};
var addTimePadding = (value) => {
  const valueToString = value.toString();
  if (valueToString.length > 1) {
    return valueToString;
  }
  return `0${valueToString}`;
};
var getFormattedHour = (hour, hourCycle) => {
  if (hour === 0) {
    switch (hourCycle) {
      case "h11":
        return "0";
      case "h12":
        return "12";
      case "h23":
        return "00";
      case "h24":
        return "24";
      default:
        throw new Error(`Invalid hour cycle "${hourCycle}"`);
    }
  }
  const use24Hour = is24Hour(hourCycle);
  if (use24Hour) {
    return addTimePadding(hour);
  }
  return hour.toString();
};
var generateDayAriaLabel = (locale, today, refParts) => {
  if (refParts.day === null) {
    return null;
  }
  const date = getNormalizedDate(refParts);
  const labelString = new Intl.DateTimeFormat(locale, {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  }).format(date);
  return today ? `Today, ${labelString}` : labelString;
};
var getMonthAndYear = (locale, refParts) => {
  const date = getNormalizedDate(refParts);
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  }).format(date);
};
var getDay = (locale, refParts) => {
  return getLocalizedDateTimeParts(locale, refParts, {
    day: "numeric"
  }).find((obj) => obj.type === "day").value;
};
var getYear = (locale, refParts) => {
  return getLocalizedDateTime(locale, refParts, {
    year: "numeric"
  });
};
var getNormalizedDate = (refParts) => {
  var _a, _b, _c;
  const timeString = refParts.hour !== void 0 && refParts.minute !== void 0 ? ` ${refParts.hour}:${refParts.minute}` : "";
  return /* @__PURE__ */ new Date(`${(_a = refParts.month) !== null && _a !== void 0 ? _a : 1}/${(_b = refParts.day) !== null && _b !== void 0 ? _b : 1}/${(_c = refParts.year) !== null && _c !== void 0 ? _c : 2023}${timeString} GMT+0000`);
};
var getLocalizedDateTime = (locale, refParts, options) => {
  const date = getNormalizedDate(refParts);
  return getDateTimeFormat(locale, stripTimeZone(options)).format(date);
};
var getLocalizedDateTimeParts = (locale, refParts, options) => {
  const date = getNormalizedDate(refParts);
  return getDateTimeFormat(locale, options).formatToParts(date);
};
var getDateTimeFormat = (locale, options) => {
  return new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, options), {
    timeZone: "UTC"
  }));
};
var getTodayLabel = (locale) => {
  if ("RelativeTimeFormat" in Intl) {
    const label = new Intl.RelativeTimeFormat(locale, {
      numeric: "auto"
    }).format(0, "day");
    return label.charAt(0).toUpperCase() + label.slice(1);
  } else {
    return "Today";
  }
};
var removeDateTzOffset = (date) => {
  const tzOffset = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() - tzOffset);
  return date;
};
var DATE_AM = removeDateTzOffset(/* @__PURE__ */ new Date("2022T01:00"));
var DATE_PM = removeDateTzOffset(/* @__PURE__ */ new Date("2022T13:00"));
var getLocalizedDayPeriod = (locale, dayPeriod) => {
  const date = dayPeriod === "am" ? DATE_AM : DATE_PM;
  const localizedDayPeriod = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    timeZone: "UTC"
  }).formatToParts(date).find((part) => part.type === "dayPeriod");
  if (localizedDayPeriod) {
    return localizedDayPeriod.value;
  }
  return getFormattedDayPeriod(dayPeriod);
};
var formatValue = (value) => {
  return Array.isArray(value) ? value.join(",") : value;
};
var getToday = () => {
  return removeDateTzOffset(/* @__PURE__ */ new Date()).toISOString();
};
var minutes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
var hour11 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var hour12 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var hour23 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
var hour24 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0];
var getDaysOfWeek = (locale, mode, firstDayOfWeek = 0) => {
  const weekdayFormat = mode === "ios" ? "short" : "narrow";
  const intl = new Intl.DateTimeFormat(locale, {
    weekday: weekdayFormat
  });
  const startDate = /* @__PURE__ */ new Date("11/01/2020");
  const daysOfWeek = [];
  for (let i = firstDayOfWeek; i < firstDayOfWeek + 7; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + i);
    daysOfWeek.push(intl.format(currentDate));
  }
  return daysOfWeek;
};
var getDaysOfMonth = (month, year, firstDayOfWeek) => {
  const numDays = getNumDaysInMonth(month, year);
  const firstOfMonth = (/* @__PURE__ */ new Date(`${month}/1/${year}`)).getDay();
  const offset = firstOfMonth >= firstDayOfWeek ? firstOfMonth - (firstDayOfWeek + 1) : 6 - (firstDayOfWeek - firstOfMonth);
  let days = [];
  for (let i = 1; i <= numDays; i++) {
    days.push({
      day: i,
      dayOfWeek: (offset + i) % 7
    });
  }
  for (let i = 0; i <= offset; i++) {
    days = [{
      day: null,
      dayOfWeek: null
    }, ...days];
  }
  return days;
};
var getHourData = (hourCycle) => {
  switch (hourCycle) {
    case "h11":
      return hour11;
    case "h12":
      return hour12;
    case "h23":
      return hour23;
    case "h24":
      return hour24;
    default:
      throw new Error(`Invalid hour cycle "${hourCycle}"`);
  }
};
var generateTime = (locale, refParts, hourCycle = "h12", minParts, maxParts, hourValues, minuteValues) => {
  const computedHourCycle = getHourCycle(locale, hourCycle);
  const use24Hour = is24Hour(computedHourCycle);
  let processedHours = getHourData(computedHourCycle);
  let processedMinutes = minutes;
  let isAMAllowed = true;
  let isPMAllowed = true;
  if (hourValues) {
    processedHours = processedHours.filter((hour) => hourValues.includes(hour));
  }
  if (minuteValues) {
    processedMinutes = processedMinutes.filter((minute) => minuteValues.includes(minute));
  }
  if (minParts) {
    if (isSameDay(refParts, minParts)) {
      if (minParts.hour !== void 0) {
        processedHours = processedHours.filter((hour) => {
          const convertedHour = refParts.ampm === "pm" ? (hour + 12) % 24 : hour;
          return (use24Hour ? hour : convertedHour) >= minParts.hour;
        });
        isAMAllowed = minParts.hour < 13;
      }
      if (minParts.minute !== void 0) {
        let isPastMinHour = false;
        if (minParts.hour !== void 0 && refParts.hour !== void 0) {
          if (refParts.hour > minParts.hour) {
            isPastMinHour = true;
          }
        }
        processedMinutes = processedMinutes.filter((minute) => {
          if (isPastMinHour) {
            return true;
          }
          return minute >= minParts.minute;
        });
      }
    } else if (isBefore(refParts, minParts)) {
      processedHours = [];
      processedMinutes = [];
      isAMAllowed = isPMAllowed = false;
    }
  }
  if (maxParts) {
    if (isSameDay(refParts, maxParts)) {
      if (maxParts.hour !== void 0) {
        processedHours = processedHours.filter((hour) => {
          const convertedHour = refParts.ampm === "pm" ? (hour + 12) % 24 : hour;
          return (use24Hour ? hour : convertedHour) <= maxParts.hour;
        });
        isPMAllowed = maxParts.hour >= 12;
      }
      if (maxParts.minute !== void 0 && refParts.hour === maxParts.hour) {
        processedMinutes = processedMinutes.filter((minute) => minute <= maxParts.minute);
      }
    } else if (isAfter(refParts, maxParts)) {
      processedHours = [];
      processedMinutes = [];
      isAMAllowed = isPMAllowed = false;
    }
  }
  return {
    hours: processedHours,
    minutes: processedMinutes,
    am: isAMAllowed,
    pm: isPMAllowed
  };
};
var generateMonths = (refParts, forcedDate) => {
  const current = {
    month: refParts.month,
    year: refParts.year,
    day: refParts.day
  };
  if (forcedDate !== void 0 && (refParts.month !== forcedDate.month || refParts.year !== forcedDate.year)) {
    const forced = {
      month: forcedDate.month,
      year: forcedDate.year,
      day: forcedDate.day
    };
    const forcedMonthIsBefore = isBefore(forced, current);
    return forcedMonthIsBefore ? [forced, current, getNextMonth(refParts)] : [getPreviousMonth(refParts), current, forced];
  }
  return [getPreviousMonth(refParts), current, getNextMonth(refParts)];
};
var getMonthColumnData = (locale, refParts, minParts, maxParts, monthValues, formatOptions = {
  month: "long"
}) => {
  const {
    year
  } = refParts;
  const months = [];
  if (monthValues !== void 0) {
    let processedMonths = monthValues;
    if ((maxParts === null || maxParts === void 0 ? void 0 : maxParts.month) !== void 0) {
      processedMonths = processedMonths.filter((month) => month <= maxParts.month);
    }
    if ((minParts === null || minParts === void 0 ? void 0 : minParts.month) !== void 0) {
      processedMonths = processedMonths.filter((month) => month >= minParts.month);
    }
    processedMonths.forEach((processedMonth) => {
      const date = /* @__PURE__ */ new Date(`${processedMonth}/1/${year} GMT+0000`);
      const monthString = new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, formatOptions), {
        timeZone: "UTC"
      })).format(date);
      months.push({
        text: monthString,
        value: processedMonth
      });
    });
  } else {
    const maxMonth = maxParts && maxParts.year === year ? maxParts.month : 12;
    const minMonth = minParts && minParts.year === year ? minParts.month : 1;
    for (let i = minMonth; i <= maxMonth; i++) {
      const date = /* @__PURE__ */ new Date(`${i}/1/${year} GMT+0000`);
      const monthString = new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, formatOptions), {
        timeZone: "UTC"
      })).format(date);
      months.push({
        text: monthString,
        value: i
      });
    }
  }
  return months;
};
var getDayColumnData = (locale, refParts, minParts, maxParts, dayValues, formatOptions = {
  day: "numeric"
}) => {
  const {
    month,
    year
  } = refParts;
  const days = [];
  const numDaysInMonth = getNumDaysInMonth(month, year);
  const maxDay = (maxParts === null || maxParts === void 0 ? void 0 : maxParts.day) !== null && (maxParts === null || maxParts === void 0 ? void 0 : maxParts.day) !== void 0 && maxParts.year === year && maxParts.month === month ? maxParts.day : numDaysInMonth;
  const minDay = (minParts === null || minParts === void 0 ? void 0 : minParts.day) !== null && (minParts === null || minParts === void 0 ? void 0 : minParts.day) !== void 0 && minParts.year === year && minParts.month === month ? minParts.day : 1;
  if (dayValues !== void 0) {
    let processedDays = dayValues;
    processedDays = processedDays.filter((day) => day >= minDay && day <= maxDay);
    processedDays.forEach((processedDay) => {
      const date = /* @__PURE__ */ new Date(`${month}/${processedDay}/${year} GMT+0000`);
      const dayString = new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, formatOptions), {
        timeZone: "UTC"
      })).format(date);
      days.push({
        text: dayString,
        value: processedDay
      });
    });
  } else {
    for (let i = minDay; i <= maxDay; i++) {
      const date = /* @__PURE__ */ new Date(`${month}/${i}/${year} GMT+0000`);
      const dayString = new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, formatOptions), {
        timeZone: "UTC"
      })).format(date);
      days.push({
        text: dayString,
        value: i
      });
    }
  }
  return days;
};
var getYearColumnData = (locale, refParts, minParts, maxParts, yearValues) => {
  var _a, _b;
  let processedYears = [];
  if (yearValues !== void 0) {
    processedYears = yearValues;
    if ((maxParts === null || maxParts === void 0 ? void 0 : maxParts.year) !== void 0) {
      processedYears = processedYears.filter((year) => year <= maxParts.year);
    }
    if ((minParts === null || minParts === void 0 ? void 0 : minParts.year) !== void 0) {
      processedYears = processedYears.filter((year) => year >= minParts.year);
    }
  } else {
    const {
      year
    } = refParts;
    const maxYear = (_a = maxParts === null || maxParts === void 0 ? void 0 : maxParts.year) !== null && _a !== void 0 ? _a : year;
    const minYear = (_b = minParts === null || minParts === void 0 ? void 0 : minParts.year) !== null && _b !== void 0 ? _b : year - 100;
    for (let i = minYear; i <= maxYear; i++) {
      processedYears.push(i);
    }
  }
  return processedYears.map((year) => ({
    text: getYear(locale, {
      year,
      month: refParts.month,
      day: refParts.day
    }),
    value: year
  }));
};
var getAllMonthsInRange = (currentParts, maxParts) => {
  if (currentParts.month === maxParts.month && currentParts.year === maxParts.year) {
    return [currentParts];
  }
  return [currentParts, ...getAllMonthsInRange(getNextMonth(currentParts), maxParts)];
};
var getCombinedDateColumnData = (locale, todayParts, minParts, maxParts, dayValues, monthValues) => {
  let items = [];
  let parts = [];
  let months = getAllMonthsInRange(minParts, maxParts);
  if (monthValues) {
    months = months.filter(({
      month
    }) => monthValues.includes(month));
  }
  months.forEach((monthObject) => {
    const referenceMonth = {
      month: monthObject.month,
      day: null,
      year: monthObject.year
    };
    const monthDays = getDayColumnData(locale, referenceMonth, minParts, maxParts, dayValues, {
      month: "short",
      day: "numeric",
      weekday: "short"
    });
    const dateParts = [];
    const dateColumnItems = [];
    monthDays.forEach((dayObject) => {
      const isToday = isSameDay(Object.assign(Object.assign({}, referenceMonth), {
        day: dayObject.value
      }), todayParts);
      dateColumnItems.push({
        text: isToday ? getTodayLabel(locale) : dayObject.text,
        value: `${referenceMonth.year}-${referenceMonth.month}-${dayObject.value}`
      });
      dateParts.push({
        month: referenceMonth.month,
        year: referenceMonth.year,
        day: dayObject.value
      });
    });
    parts = [...parts, ...dateParts];
    items = [...items, ...dateColumnItems];
  });
  return {
    parts,
    items
  };
};
var getTimeColumnsData = (locale, refParts, hourCycle, minParts, maxParts, allowedHourValues, allowedMinuteValues) => {
  const computedHourCycle = getHourCycle(locale, hourCycle);
  const use24Hour = is24Hour(computedHourCycle);
  const {
    hours,
    minutes: minutes2,
    am,
    pm
  } = generateTime(locale, refParts, computedHourCycle, minParts, maxParts, allowedHourValues, allowedMinuteValues);
  const hoursItems = hours.map((hour) => {
    return {
      text: getFormattedHour(hour, computedHourCycle),
      value: getInternalHourValue(hour, use24Hour, refParts.ampm)
    };
  });
  const minutesItems = minutes2.map((minute) => {
    return {
      text: addTimePadding(minute),
      value: minute
    };
  });
  const dayPeriodItems = [];
  if (am && !use24Hour) {
    dayPeriodItems.push({
      text: getLocalizedDayPeriod(locale, "am"),
      value: "am"
    });
  }
  if (pm && !use24Hour) {
    dayPeriodItems.push({
      text: getLocalizedDayPeriod(locale, "pm"),
      value: "pm"
    });
  }
  return {
    minutesData: minutesItems,
    hoursData: hoursItems,
    dayPeriodData: dayPeriodItems
  };
};

export {
  isSameDay,
  isBefore,
  isAfter,
  warnIfValueOutOfBounds,
  getHourCycle,
  getNumDaysInMonth,
  isMonthFirstLocale,
  isLocaleDayPeriodRTL,
  convertToArrayOfNumbers,
  getPartsFromCalendarDay,
  parseDate,
  clampDate,
  parseAmPm,
  parseMaxParts,
  parseMinParts,
  convertDataToISO,
  getStartOfWeek,
  getEndOfWeek,
  getNextDay,
  getPreviousDay,
  getPreviousWeek,
  getNextWeek,
  getPreviousMonth,
  getNextMonth,
  getPreviousYear,
  getNextYear,
  calculateHourFromAMPM,
  validateParts,
  getClosestValidDate,
  getLocalizedTime,
  generateDayAriaLabel,
  getMonthAndYear,
  getDay,
  getLocalizedDateTime,
  formatValue,
  getToday,
  getDaysOfWeek,
  getDaysOfMonth,
  generateMonths,
  getMonthColumnData,
  getDayColumnData,
  getYearColumnData,
  getCombinedDateColumnData,
  getTimeColumnsData
};
/*! Bundled license information:

@ionic/core/dist/esm/data-174ad5e0.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9kYXRhLTE3NGFkNWUwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyBwIGFzIHByaW50SW9uV2FybmluZyB9IGZyb20gJy4vaW5kZXgtNzM4ZDc1MDQuanMnO1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc2VsZWN0ZWQgZGF5IGlzIGVxdWFsIHRvIHRoZSByZWZlcmVuY2UgZGF5XG4gKi9cbmNvbnN0IGlzU2FtZURheSA9IChiYXNlUGFydHMsIGNvbXBhcmVQYXJ0cykgPT4ge1xuICByZXR1cm4gYmFzZVBhcnRzLm1vbnRoID09PSBjb21wYXJlUGFydHMubW9udGggJiYgYmFzZVBhcnRzLmRheSA9PT0gY29tcGFyZVBhcnRzLmRheSAmJiBiYXNlUGFydHMueWVhciA9PT0gY29tcGFyZVBhcnRzLnllYXI7XG59O1xuLyoqXG4gKiBSZXR1cm5zIHRydWUgaXMgdGhlIHNlbGVjdGVkIGRheSBpcyBiZWZvcmUgdGhlIHJlZmVyZW5jZSBkYXkuXG4gKi9cbmNvbnN0IGlzQmVmb3JlID0gKGJhc2VQYXJ0cywgY29tcGFyZVBhcnRzKSA9PiB7XG4gIHJldHVybiAhIShiYXNlUGFydHMueWVhciA8IGNvbXBhcmVQYXJ0cy55ZWFyIHx8IGJhc2VQYXJ0cy55ZWFyID09PSBjb21wYXJlUGFydHMueWVhciAmJiBiYXNlUGFydHMubW9udGggPCBjb21wYXJlUGFydHMubW9udGggfHwgYmFzZVBhcnRzLnllYXIgPT09IGNvbXBhcmVQYXJ0cy55ZWFyICYmIGJhc2VQYXJ0cy5tb250aCA9PT0gY29tcGFyZVBhcnRzLm1vbnRoICYmIGJhc2VQYXJ0cy5kYXkgIT09IG51bGwgJiYgYmFzZVBhcnRzLmRheSA8IGNvbXBhcmVQYXJ0cy5kYXkpO1xufTtcbi8qKlxuICogUmV0dXJucyB0cnVlIGlzIHRoZSBzZWxlY3RlZCBkYXkgaXMgYWZ0ZXIgdGhlIHJlZmVyZW5jZSBkYXkuXG4gKi9cbmNvbnN0IGlzQWZ0ZXIgPSAoYmFzZVBhcnRzLCBjb21wYXJlUGFydHMpID0+IHtcbiAgcmV0dXJuICEhKGJhc2VQYXJ0cy55ZWFyID4gY29tcGFyZVBhcnRzLnllYXIgfHwgYmFzZVBhcnRzLnllYXIgPT09IGNvbXBhcmVQYXJ0cy55ZWFyICYmIGJhc2VQYXJ0cy5tb250aCA+IGNvbXBhcmVQYXJ0cy5tb250aCB8fCBiYXNlUGFydHMueWVhciA9PT0gY29tcGFyZVBhcnRzLnllYXIgJiYgYmFzZVBhcnRzLm1vbnRoID09PSBjb21wYXJlUGFydHMubW9udGggJiYgYmFzZVBhcnRzLmRheSAhPT0gbnVsbCAmJiBiYXNlUGFydHMuZGF5ID4gY29tcGFyZVBhcnRzLmRheSk7XG59O1xuY29uc3Qgd2FybklmVmFsdWVPdXRPZkJvdW5kcyA9ICh2YWx1ZSwgbWluLCBtYXgpID0+IHtcbiAgY29uc3QgdmFsdWVBcnJheSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xuICBmb3IgKGNvbnN0IHZhbCBvZiB2YWx1ZUFycmF5KSB7XG4gICAgaWYgKG1pbiAhPT0gdW5kZWZpbmVkICYmIGlzQmVmb3JlKHZhbCwgbWluKSB8fCBtYXggIT09IHVuZGVmaW5lZCAmJiBpc0FmdGVyKHZhbCwgbWF4KSkge1xuICAgICAgcHJpbnRJb25XYXJuaW5nKCdUaGUgdmFsdWUgcHJvdmlkZWQgdG8gaW9uLWRhdGV0aW1lIGlzIG91dCBvZiBib3VuZHMuXFxuXFxuJyArIGBNaW46ICR7SlNPTi5zdHJpbmdpZnkobWluKX1cXG5gICsgYE1heDogJHtKU09OLnN0cmluZ2lmeShtYXgpfVxcbmAgKyBgVmFsdWU6ICR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfWApO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgZ2l2ZW4geWVhciBpcyBhXG4gKiBsZWFwIHllYXIuIFJldHVybnMgYHRydWVgIGlmIHllYXJcbiAqIGlzIGEgbGVhcCB5ZWFyLiBSZXR1cm5zIGBmYWxzZWBcbiAqIG90aGVyd2lzZS5cbiAqL1xuY29uc3QgaXNMZWFwWWVhciA9IHllYXIgPT4ge1xuICByZXR1cm4geWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCB8fCB5ZWFyICUgNDAwID09PSAwO1xufTtcbi8qKlxuICogRGV0ZXJtaW5lcyB0aGUgaG91ciBjeWNsZSBmb3IgYSB1c2VyLlxuICogSWYgdGhlIGhvdXIgY3ljbGUgaXMgZXhwbGljaXRseSBkZWZpbmVkLCBqdXN0IHVzZSB0aGF0LlxuICogT3RoZXJ3aXNlLCB3ZSB0cnkgdG8gZGVyaXZlIGl0IGZyb20gZWl0aGVyIHRoZSBzcGVjaWZpZWRcbiAqIGxvY2FsZSBleHRlbnNpb24gdGFncyBvciBmcm9tIEludGwuRGF0ZVRpbWVGb3JtYXQgZGlyZWN0bHkuXG4gKi9cbmNvbnN0IGdldEhvdXJDeWNsZSA9IChsb2NhbGUsIGhvdXJDeWNsZSkgPT4ge1xuICAvKipcbiAgICogSWYgZGV2ZWxvcGVyIGhhcyBleHBsaWNpdGx5IGVuYWJsZWQgMjQtaG91ciB0aW1lXG4gICAqIHRoZW4gcmV0dXJuIGVhcmx5IGFuZCBkbyBub3QgbG9vayBhdCB0aGUgc3lzdGVtIGRlZmF1bHQuXG4gICAqL1xuICBpZiAoaG91ckN5Y2xlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaG91ckN5Y2xlO1xuICB9XG4gIC8qKlxuICAgKiBJZiBob3VyQ3ljbGUgd2FzIG5vdCBzcGVjaWZpZWQsIGNoZWNrIHRoZSBsb2NhbGVcbiAgICogdGhhdCBpcyBzZXQgb24gdGhlIHVzZXIncyBkZXZpY2UuIFdlIGZpcnN0IGNoZWNrIHRoZVxuICAgKiBJbnRsLkRhdGVUaW1lRm9ybWF0IGhvdXJDeWNsZSBvcHRpb24gYXMgZGV2ZWxvcGVycyBjYW4gZW5jb2RlIHRoaXNcbiAgICogb3B0aW9uIGludG8gdGhlIGxvY2FsZSBzdHJpbmcuIEV4YW1wbGU6IGBlbi1VUy11LWhjLWgyM2BcbiAgICovXG4gIGNvbnN0IGZvcm1hdHRlZCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwge1xuICAgIGhvdXI6ICdudW1lcmljJ1xuICB9KTtcbiAgY29uc3Qgb3B0aW9ucyA9IGZvcm1hdHRlZC5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgaWYgKG9wdGlvbnMuaG91ckN5Y2xlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5ob3VyQ3ljbGU7XG4gIH1cbiAgLyoqXG4gICAqIElmIGhvdXJDeWNsZSBpcyBub3Qgc3BlY2lmaWVkIChlaXRoZXIgdGhyb3VnaCBsYWNrXG4gICAqIG9mIGJyb3dzZXIgc3VwcG9ydCBvciBsb2NhbGUgaW5mb3JtYXRpb24pIHRoZW4gZmFsbFxuICAgKiBiYWNrIHRvIHRoaXMgc2xvd2VyIGhvdXJDeWNsZSBjaGVjay5cbiAgICovXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgnNS8xOC8yMDIxIDAwOjAwJyk7XG4gIGNvbnN0IHBhcnRzID0gZm9ybWF0dGVkLmZvcm1hdFRvUGFydHMoZGF0ZSk7XG4gIGNvbnN0IGhvdXIgPSBwYXJ0cy5maW5kKHAgPT4gcC50eXBlID09PSAnaG91cicpO1xuICBpZiAoIWhvdXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0hvdXIgdmFsdWUgbm90IGZvdW5kIGZyb20gRGF0ZVRpbWVGb3JtYXQnKTtcbiAgfVxuICAvKipcbiAgICogTWlkbmlnaHQgZm9yIGgxMSBzdGFydHMgYXQgMDowMGFtXG4gICAqIE1pZG5pZ2h0IGZvciBoMTIgc3RhcnRzIGF0IDEyOjAwYW1cbiAgICogTWlkbmlnaHQgZm9yIGgyMyBzdGFydHMgYXQgMDA6MDBcbiAgICogTWlkbmlnaHQgZm9yIGgyNCBzdGFydHMgYXQgMjQ6MDBcbiAgICovXG4gIHN3aXRjaCAoaG91ci52YWx1ZSkge1xuICAgIGNhc2UgJzAnOlxuICAgICAgcmV0dXJuICdoMTEnO1xuICAgIGNhc2UgJzEyJzpcbiAgICAgIHJldHVybiAnaDEyJztcbiAgICBjYXNlICcwMCc6XG4gICAgICByZXR1cm4gJ2gyMyc7XG4gICAgY2FzZSAnMjQnOlxuICAgICAgcmV0dXJuICdoMjQnO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaG91ciBjeWNsZSBcIiR7aG91ckN5Y2xlfVwiYCk7XG4gIH1cbn07XG4vKipcbiAqIERldGVybWluZSBpZiB0aGUgaG91ciBjeWNsZSB1c2VzIGEgMjQtaG91ciBmb3JtYXQuXG4gKiBSZXR1cm5zIHRydWUgZm9yIGgyMyBhbmQgaDI0LiBSZXR1cm5zIGZhbHNlIG90aGVyd2lzZS5cbiAqIElmIHlvdSBkb24ndCBrbm93IHRoZSBob3VyQ3ljbGUsIHVzZSBnZXRIb3VyQ3ljbGUgYWJvdmVcbiAqIGFuZCBwYXNzIHRoZSByZXN1bHQgaW50byB0aGlzIGZ1bmN0aW9uLlxuICovXG5jb25zdCBpczI0SG91ciA9IGhvdXJDeWNsZSA9PiB7XG4gIHJldHVybiBob3VyQ3ljbGUgPT09ICdoMjMnIHx8IGhvdXJDeWNsZSA9PT0gJ2gyNCc7XG59O1xuLyoqXG4gKiBHaXZlbiBhIGRhdGUgb2JqZWN0LCByZXR1cm5zIHRoZSBudW1iZXJcbiAqIG9mIGRheXMgaW4gdGhhdCBtb250aC5cbiAqIE1vbnRoIHZhbHVlIGJlZ2luIGF0IDEsIG5vdCAwLlxuICogaS5lLiBKYW51YXJ5ID0gbW9udGggMS5cbiAqL1xuY29uc3QgZ2V0TnVtRGF5c0luTW9udGggPSAobW9udGgsIHllYXIpID0+IHtcbiAgcmV0dXJuIG1vbnRoID09PSA0IHx8IG1vbnRoID09PSA2IHx8IG1vbnRoID09PSA5IHx8IG1vbnRoID09PSAxMSA/IDMwIDogbW9udGggPT09IDIgPyBpc0xlYXBZZWFyKHllYXIpID8gMjkgOiAyOCA6IDMxO1xufTtcbi8qKlxuICogQ2VydGFpbiBsb2NhbGVzIGRpc3BsYXkgbW9udGggdGhlbiB5ZWFyIHdoaWxlXG4gKiBvdGhlcnMgZGlzcGxheSB5ZWFyIHRoZW4gbW9udGguXG4gKiBXZSBjYW4gdXNlIEludGwuRGF0ZVRpbWVGb3JtYXQgdG8gZGV0ZXJtaW5lXG4gKiB0aGUgb3JkZXJpbmcgZm9yIGVhY2ggbG9jYWxlLlxuICogVGhlIGZvcm1hdE9wdGlvbnMgcGFyYW0gY2FuIGJlIHVzZWQgdG8gY3VzdG9taXplXG4gKiB3aGljaCBwaWVjZXMgb2YgYSBkYXRlIHRvIGNvbXBhcmUgYWdhaW5zdCB0aGUgbW9udGhcbiAqIHdpdGguIEZvciBleGFtcGxlLCBzb21lIGxvY2FsZXMgcmVuZGVyIGRkL21tL3l5eXlcbiAqIHdoaWxlIG90aGVycyByZW5kZXIgbW0vZGQveXl5eS4gVGhpcyBmdW5jdGlvbiBjYW4gYmVcbiAqIHVzZWQgZm9yIHZhcmlhdGlvbnMgb2YgdGhlIHNhbWUgXCJtb250aCBmaXJzdFwiIGNoZWNrLlxuICovXG5jb25zdCBpc01vbnRoRmlyc3RMb2NhbGUgPSAobG9jYWxlLCBmb3JtYXRPcHRpb25zID0ge1xuICBtb250aDogJ251bWVyaWMnLFxuICB5ZWFyOiAnbnVtZXJpYydcbn0pID0+IHtcbiAgLyoqXG4gICAqIEJ5IHNldHRpbmcgbW9udGggYW5kIHllYXIgd2UgZ3VhcmFudGVlIHRoYXQgb25seVxuICAgKiBtb250aCwgeWVhciwgYW5kIGxpdGVyYWwgKHNsYXNoZXMgJy8nLCBmb3IgZXhhbXBsZSlcbiAgICogdmFsdWVzIGFyZSBpbmNsdWRlZCBpbiB0aGUgZm9ybWF0VG9QYXJ0cyByZXN1bHRzLlxuICAgKlxuICAgKiBUaGUgb3JkZXJpbmcgb2YgdGhlIHBhcnRzIHdpbGwgYmUgZGV0ZXJtaW5lZCBieVxuICAgKiB0aGUgbG9jYWxlLiBTbyBpZiB0aGUgbW9udGggaXMgdGhlIGZpcnN0IHZhbHVlLFxuICAgKiB0aGVuIHdlIGtub3cgbW9udGggc2hvdWxkIGJlIHNob3duIGZpcnN0LiBJZiB0aGVcbiAgICogeWVhciBpcyB0aGUgZmlyc3QgdmFsdWUsIHRoZW4gd2Uga25vdyB5ZWFyIHNob3VsZCBiZSBzaG93biBmaXJzdC5cbiAgICpcbiAgICogVGhpcyBvcmRlcmluZyBjYW4gYmUgY29udHJvbGxlZCBieSBjdXN0b21pemluZyB0aGUgbG9jYWxlIHByb3BlcnR5LlxuICAgKi9cbiAgY29uc3QgcGFydHMgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIGZvcm1hdE9wdGlvbnMpLmZvcm1hdFRvUGFydHMobmV3IERhdGUoKSk7XG4gIHJldHVybiBwYXJ0c1swXS50eXBlID09PSAnbW9udGgnO1xufTtcbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgZ2l2ZW4gbG9jYWxlIGZvcm1hdHMgdGhlIGRheSBwZXJpb2QgKGFtL3BtKSB0byB0aGVcbiAqIGxlZnQgb3IgcmlnaHQgb2YgdGhlIGhvdXIuXG4gKiBAcGFyYW0gbG9jYWxlIFRoZSBsb2NhbGUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGxvY2FsZSBmb3JtYXRzIHRoZSBkYXkgcGVyaW9kIHRvIHRoZSBsZWZ0IG9mIHRoZSBob3VyLlxuICovXG5jb25zdCBpc0xvY2FsZURheVBlcmlvZFJUTCA9IGxvY2FsZSA9PiB7XG4gIGNvbnN0IHBhcnRzID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7XG4gICAgaG91cjogJ251bWVyaWMnXG4gIH0pLmZvcm1hdFRvUGFydHMobmV3IERhdGUoKSk7XG4gIHJldHVybiBwYXJ0c1swXS50eXBlID09PSAnZGF5UGVyaW9kJztcbn07XG5jb25zdCBJU09fODYwMV9SRUdFWFAgPVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4vXihcXGR7NH18WytcXC1dXFxkezZ9KSg/Oi0oXFxkezJ9KSg/Oi0oXFxkezJ9KSk/KT8oPzpUKFxcZHsyfSk6KFxcZHsyfSkoPzo6KFxcZHsyfSkoPzpcXC4oXFxkezN9KSk/KT8oPzooWil8KFsrXFwtXSkoXFxkezJ9KSg/OjooXFxkezJ9KSk/KT8pPyQvO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG5jb25zdCBUSU1FX1JFR0VYUCA9IC9eKChcXGR7Mn0pOihcXGR7Mn0pKD86OihcXGR7Mn0pKD86XFwuKFxcZHszfSkpPyk/KD86KFopfChbK1xcLV0pKFxcZHsyfSkoPzo6KFxcZHsyfSkpPyk/KT8kLztcbi8qKlxuICogVXNlIHRvIGNvbnZlcnQgYSBzdHJpbmcgb2YgY29tbWEgc2VwYXJhdGVkIG51bWJlcnMgb3JcbiAqIGFuIGFycmF5IG9mIG51bWJlcnMsIGFuZCBjbGVhbiB1cCBhbnkgdXNlciBpbnB1dFxuICovXG5jb25zdCBjb252ZXJ0VG9BcnJheU9mTnVtYmVycyA9IGlucHV0ID0+IHtcbiAgaWYgKGlucHV0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IHByb2Nlc3NlZElucHV0ID0gaW5wdXQ7XG4gIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gY29udmVydCB0aGUgc3RyaW5nIHRvIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICAvLyBhdXRvIHJlbW92ZSBhbnkgd2hpdGVzcGFjZSBhbmQgW10gY2hhcmFjdGVyc1xuICAgIHByb2Nlc3NlZElucHV0ID0gaW5wdXQucmVwbGFjZSgvXFxbfFxcXXxcXHMvZywgJycpLnNwbGl0KCcsJyk7XG4gIH1cbiAgbGV0IHZhbHVlcztcbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvY2Vzc2VkSW5wdXQpKSB7XG4gICAgLy8gZW5zdXJlIGVhY2ggdmFsdWUgaXMgYW4gYWN0dWFsIG51bWJlciBpbiB0aGUgcmV0dXJuZWQgYXJyYXlcbiAgICB2YWx1ZXMgPSBwcm9jZXNzZWRJbnB1dC5tYXAobnVtID0+IHBhcnNlSW50KG51bSwgMTApKS5maWx0ZXIoaXNGaW5pdGUpO1xuICB9IGVsc2Uge1xuICAgIHZhbHVlcyA9IFtwcm9jZXNzZWRJbnB1dF07XG4gIH1cbiAgcmV0dXJuIHZhbHVlcztcbn07XG4vKipcbiAqIEV4dHJhY3RzIGRhdGUgaW5mb3JtYXRpb25cbiAqIGZyb20gYSAuY2FsZW5kYXItZGF5IGVsZW1lbnRcbiAqIGludG8gRGF0ZXRpbWVQYXJ0cy5cbiAqL1xuY29uc3QgZ2V0UGFydHNGcm9tQ2FsZW5kYXJEYXkgPSBlbCA9PiB7XG4gIHJldHVybiB7XG4gICAgbW9udGg6IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1tb250aCcpLCAxMCksXG4gICAgZGF5OiBwYXJzZUludChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGF5JyksIDEwKSxcbiAgICB5ZWFyOiBwYXJzZUludChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteWVhcicpLCAxMCksXG4gICAgZGF5T2ZXZWVrOiBwYXJzZUludChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGF5LW9mLXdlZWsnKSwgMTApXG4gIH07XG59O1xuZnVuY3Rpb24gcGFyc2VEYXRlKHZhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgY29uc3QgcGFyc2VkQXJyYXkgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHZhbFN0ciBvZiB2YWwpIHtcbiAgICAgIGNvbnN0IHBhcnNlZFZhbCA9IHBhcnNlRGF0ZSh2YWxTdHIpO1xuICAgICAgLyoqXG4gICAgICAgKiBJZiBhbnkgb2YgdGhlIHZhbHVlcyB3ZXJlbid0IHBhcnNlZCBjb3JyZWN0bHksIGNvbnNpZGVyXG4gICAgICAgKiB0aGUgZW50aXJlIGJhdGNoIGluY29ycmVjdC4gVGhpcyBzaW1wbGlmaWVzIHRoZSB0eXBlXG4gICAgICAgKiBzaWduYXR1cmVzIGJ5IGhhdmluZyBcInVuZGVmaW5lZFwiIGJlIGEgZ2VuZXJhbCBlcnJvciBjYXNlXG4gICAgICAgKiBpbnN0ZWFkIG9mIHJldHVybmluZyAoRGF0ZXRpbWUgfCB1bmRlZmluZWQpW10sIHdoaWNoIGlzXG4gICAgICAgKiBoYXJkZXIgZm9yIFRTIHRvIHBlcmZvcm0gdHlwZSBuYXJyb3dpbmcgb24uXG4gICAgICAgKi9cbiAgICAgIGlmICghcGFyc2VkVmFsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBwYXJzZWRBcnJheS5wdXNoKHBhcnNlZFZhbCk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRBcnJheTtcbiAgfVxuICAvLyBtYW51YWxseSBwYXJzZSBJUzAgY3V6IERhdGUucGFyc2UgY2Fubm90IGJlIHRydXN0ZWRcbiAgLy8gSVNPIDg2MDEgZm9ybWF0OiAxOTk0LTEyLTE1VDEzOjQ3OjIwWlxuICBsZXQgcGFyc2UgPSBudWxsO1xuICBpZiAodmFsICE9IG51bGwgJiYgdmFsICE9PSAnJykge1xuICAgIC8vIHRyeSBwYXJzaW5nIGZvciBqdXN0IHRpbWUgZmlyc3QsIEhIOk1NXG4gICAgcGFyc2UgPSBUSU1FX1JFR0VYUC5leGVjKHZhbCk7XG4gICAgaWYgKHBhcnNlKSB7XG4gICAgICAvLyBhZGp1c3QgdGhlIGFycmF5IHNvIGl0IGZpdHMgbmljZWx5IHdpdGggdGhlIGRhdGV0aW1lIHBhcnNlXG4gICAgICBwYXJzZS51bnNoaWZ0KHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICAgIHBhcnNlWzJdID0gcGFyc2VbM10gPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRyeSBwYXJzaW5nIGZvciBmdWxsIElTTyBkYXRldGltZVxuICAgICAgcGFyc2UgPSBJU09fODYwMV9SRUdFWFAuZXhlYyh2YWwpO1xuICAgIH1cbiAgfVxuICBpZiAocGFyc2UgPT09IG51bGwpIHtcbiAgICAvLyB3YXNuJ3QgYWJsZSB0byBwYXJzZSB0aGUgSVNPIGRhdGV0aW1lXG4gICAgcHJpbnRJb25XYXJuaW5nKGBVbmFibGUgdG8gcGFyc2UgZGF0ZSBzdHJpbmc6ICR7dmFsfS4gUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBJU08gODYwMSBkYXRldGltZSBzdHJpbmcuYCk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICAvLyBlbnN1cmUgYWxsIHRoZSBwYXJzZSB2YWx1ZXMgZXhpc3Qgd2l0aCBhdCBsZWFzdCAwXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgODsgaSsrKSB7XG4gICAgcGFyc2VbaV0gPSBwYXJzZVtpXSAhPT0gdW5kZWZpbmVkID8gcGFyc2VJbnQocGFyc2VbaV0sIDEwKSA6IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBjYW4gYWxzbyBnZXQgc2Vjb25kIGFuZCBtaWxsaXNlY29uZCBmcm9tIHBhcnNlWzZdIGFuZCBwYXJzZVs3XSBpZiBuZWVkZWRcbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBwYXJzZVsxXSxcbiAgICBtb250aDogcGFyc2VbMl0sXG4gICAgZGF5OiBwYXJzZVszXSxcbiAgICBob3VyOiBwYXJzZVs0XSxcbiAgICBtaW51dGU6IHBhcnNlWzVdLFxuICAgIGFtcG06IHBhcnNlWzRdIDwgMTIgPyAnYW0nIDogJ3BtJ1xuICB9O1xufVxuY29uc3QgY2xhbXBEYXRlID0gKGRhdGVQYXJ0cywgbWluUGFydHMsIG1heFBhcnRzKSA9PiB7XG4gIGlmIChtaW5QYXJ0cyAmJiBpc0JlZm9yZShkYXRlUGFydHMsIG1pblBhcnRzKSkge1xuICAgIHJldHVybiBtaW5QYXJ0cztcbiAgfSBlbHNlIGlmIChtYXhQYXJ0cyAmJiBpc0FmdGVyKGRhdGVQYXJ0cywgbWF4UGFydHMpKSB7XG4gICAgcmV0dXJuIG1heFBhcnRzO1xuICB9XG4gIHJldHVybiBkYXRlUGFydHM7XG59O1xuLyoqXG4gKiBQYXJzZXMgYW4gaG91ciBhbmQgcmV0dXJucyBpZiB0aGUgdmFsdWUgaXMgaW4gdGhlIG1vcm5pbmcgKGFtKSBvciBhZnRlcm5vb24gKHBtKS5cbiAqIEBwYXJhbSBob3VyIFRoZSBob3VyIHRvIGZvcm1hdCwgc2hvdWxkIGJlIDAtMjNcbiAqIEByZXR1cm5zIGBwbWAgaWYgdGhlIGhvdXIgaXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIDEyLCBgYW1gIGlmIGxlc3MgdGhhbiAxMi5cbiAqL1xuY29uc3QgcGFyc2VBbVBtID0gaG91ciA9PiB7XG4gIHJldHVybiBob3VyID49IDEyID8gJ3BtJyA6ICdhbSc7XG59O1xuLyoqXG4gKiBUYWtlcyBhIG1heCBkYXRlIHN0cmluZyBhbmQgY3JlYXRlcyBhIERhdGV0aW1lUGFydHNcbiAqIG9iamVjdCwgZmlsbGluZyBpbiBhbnkgbWlzc2luZyBpbmZvcm1hdGlvbi5cbiAqIEZvciBleGFtcGxlLCBtYXg9XCIyMDEyXCIgd291bGQgZmlsbCBpbiB0aGUgbWlzc2luZ1xuICogbW9udGgsIGRheSwgaG91ciwgYW5kIG1pbnV0ZSBpbmZvcm1hdGlvbi5cbiAqL1xuY29uc3QgcGFyc2VNYXhQYXJ0cyA9IChtYXgsIHRvZGF5UGFydHMpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gcGFyc2VEYXRlKG1heCk7XG4gIC8qKlxuICAgKiBJZiBtaW4gd2FzIG5vdCBhIHZhbGlkIGRhdGUgdGhlbiByZXR1cm4gdW5kZWZpbmVkLlxuICAgKi9cbiAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHtcbiAgICBtb250aCxcbiAgICBkYXksXG4gICAgeWVhcixcbiAgICBob3VyLFxuICAgIG1pbnV0ZVxuICB9ID0gcmVzdWx0O1xuICAvKipcbiAgICogV2hlbiBwYXNzaW5nIGluIGBtYXhgIG9yIGBtaW5gLCBkZXZlbG9wZXJzXG4gICAqIGNhbiBwYXNzIGluIGFueSBJU08tODYwMSBzdHJpbmcuIFRoaXMgbWVhbnNcbiAgICogdGhhdCBub3QgYWxsIG9mIHRoZSBkYXRlL3RpbWUgZmllbGRzIGFyZSBkZWZpbmVkLlxuICAgKiBGb3IgZXhhbXBsZSwgcGFzc2luZyBtYXg9XCIyMDEyXCIgaXMgdmFsaWQgZXZlbiB0aG91Z2hcbiAgICogdGhlcmUgaXMgbm8gbW9udGgsIGRheSwgaG91ciwgb3IgbWludXRlIGRhdGEuXG4gICAqIEhvd2V2ZXIsIGFsbCBvZiB0aGlzIGRhdGEgaXMgcmVxdWlyZWQgd2hlbiBjbGFtcGluZyB0aGUgZGF0ZVxuICAgKiBzbyB0aGF0IHRoZSBjb3JyZWN0IGluaXRpYWwgdmFsdWUgY2FuIGJlIHNlbGVjdGVkLiBBcyBhIHJlc3VsdCxcbiAgICogd2UgbmVlZCB0byBmaWxsIGluIGFueSBvbWl0dGVkIGRhdGEgd2l0aCB0aGUgbWluIG9yIG1heCB2YWx1ZXMuXG4gICAqL1xuICBjb25zdCB5ZWFyVmFsdWUgPSB5ZWFyICE9PSBudWxsICYmIHllYXIgIT09IHZvaWQgMCA/IHllYXIgOiB0b2RheVBhcnRzLnllYXI7XG4gIGNvbnN0IG1vbnRoVmFsdWUgPSBtb250aCAhPT0gbnVsbCAmJiBtb250aCAhPT0gdm9pZCAwID8gbW9udGggOiAxMjtcbiAgcmV0dXJuIHtcbiAgICBtb250aDogbW9udGhWYWx1ZSxcbiAgICBkYXk6IGRheSAhPT0gbnVsbCAmJiBkYXkgIT09IHZvaWQgMCA/IGRheSA6IGdldE51bURheXNJbk1vbnRoKG1vbnRoVmFsdWUsIHllYXJWYWx1ZSksXG4gICAgLyoqXG4gICAgICogUGFzc2luZyBpbiBcIkhIOm1tXCIgaXMgYSB2YWxpZCBJU08tODYwMVxuICAgICAqIHN0cmluZywgc28gd2UganVzdCBkZWZhdWx0IHRvIHRoZSBjdXJyZW50IHllYXJcbiAgICAgKiBpbiB0aGlzIGNhc2UuXG4gICAgICovXG4gICAgeWVhcjogeWVhclZhbHVlLFxuICAgIGhvdXI6IGhvdXIgIT09IG51bGwgJiYgaG91ciAhPT0gdm9pZCAwID8gaG91ciA6IDIzLFxuICAgIG1pbnV0ZTogbWludXRlICE9PSBudWxsICYmIG1pbnV0ZSAhPT0gdm9pZCAwID8gbWludXRlIDogNTlcbiAgfTtcbn07XG4vKipcbiAqIFRha2VzIGEgbWluIGRhdGUgc3RyaW5nIGFuZCBjcmVhdGVzIGEgRGF0ZXRpbWVQYXJ0c1xuICogb2JqZWN0LCBmaWxsaW5nIGluIGFueSBtaXNzaW5nIGluZm9ybWF0aW9uLlxuICogRm9yIGV4YW1wbGUsIG1pbj1cIjIwMTJcIiB3b3VsZCBmaWxsIGluIHRoZSBtaXNzaW5nXG4gKiBtb250aCwgZGF5LCBob3VyLCBhbmQgbWludXRlIGluZm9ybWF0aW9uLlxuICovXG5jb25zdCBwYXJzZU1pblBhcnRzID0gKG1pbiwgdG9kYXlQYXJ0cykgPT4ge1xuICBjb25zdCByZXN1bHQgPSBwYXJzZURhdGUobWluKTtcbiAgLyoqXG4gICAqIElmIG1pbiB3YXMgbm90IGEgdmFsaWQgZGF0ZSB0aGVuIHJldHVybiB1bmRlZmluZWQuXG4gICAqL1xuICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qge1xuICAgIG1vbnRoLFxuICAgIGRheSxcbiAgICB5ZWFyLFxuICAgIGhvdXIsXG4gICAgbWludXRlXG4gIH0gPSByZXN1bHQ7XG4gIC8qKlxuICAgKiBXaGVuIHBhc3NpbmcgaW4gYG1heGAgb3IgYG1pbmAsIGRldmVsb3BlcnNcbiAgICogY2FuIHBhc3MgaW4gYW55IElTTy04NjAxIHN0cmluZy4gVGhpcyBtZWFuc1xuICAgKiB0aGF0IG5vdCBhbGwgb2YgdGhlIGRhdGUvdGltZSBmaWVsZHMgYXJlIGRlZmluZWQuXG4gICAqIEZvciBleGFtcGxlLCBwYXNzaW5nIG1heD1cIjIwMTJcIiBpcyB2YWxpZCBldmVuIHRob3VnaFxuICAgKiB0aGVyZSBpcyBubyBtb250aCwgZGF5LCBob3VyLCBvciBtaW51dGUgZGF0YS5cbiAgICogSG93ZXZlciwgYWxsIG9mIHRoaXMgZGF0YSBpcyByZXF1aXJlZCB3aGVuIGNsYW1waW5nIHRoZSBkYXRlXG4gICAqIHNvIHRoYXQgdGhlIGNvcnJlY3QgaW5pdGlhbCB2YWx1ZSBjYW4gYmUgc2VsZWN0ZWQuIEFzIGEgcmVzdWx0LFxuICAgKiB3ZSBuZWVkIHRvIGZpbGwgaW4gYW55IG9taXR0ZWQgZGF0YSB3aXRoIHRoZSBtaW4gb3IgbWF4IHZhbHVlcy5cbiAgICovXG4gIHJldHVybiB7XG4gICAgbW9udGg6IG1vbnRoICE9PSBudWxsICYmIG1vbnRoICE9PSB2b2lkIDAgPyBtb250aCA6IDEsXG4gICAgZGF5OiBkYXkgIT09IG51bGwgJiYgZGF5ICE9PSB2b2lkIDAgPyBkYXkgOiAxLFxuICAgIC8qKlxuICAgICAqIFBhc3NpbmcgaW4gXCJISDptbVwiIGlzIGEgdmFsaWQgSVNPLTg2MDFcbiAgICAgKiBzdHJpbmcsIHNvIHdlIGp1c3QgZGVmYXVsdCB0byB0aGUgY3VycmVudCB5ZWFyXG4gICAgICogaW4gdGhpcyBjYXNlLlxuICAgICAqL1xuICAgIHllYXI6IHllYXIgIT09IG51bGwgJiYgeWVhciAhPT0gdm9pZCAwID8geWVhciA6IHRvZGF5UGFydHMueWVhcixcbiAgICBob3VyOiBob3VyICE9PSBudWxsICYmIGhvdXIgIT09IHZvaWQgMCA/IGhvdXIgOiAwLFxuICAgIG1pbnV0ZTogbWludXRlICE9PSBudWxsICYmIG1pbnV0ZSAhPT0gdm9pZCAwID8gbWludXRlIDogMFxuICB9O1xufTtcbmNvbnN0IHR3b0RpZ2l0ID0gdmFsID0+IHtcbiAgcmV0dXJuICgnMCcgKyAodmFsICE9PSB1bmRlZmluZWQgPyBNYXRoLmFicyh2YWwpIDogJzAnKSkuc2xpY2UoLTIpO1xufTtcbmNvbnN0IGZvdXJEaWdpdCA9IHZhbCA9PiB7XG4gIHJldHVybiAoJzAwMCcgKyAodmFsICE9PSB1bmRlZmluZWQgPyBNYXRoLmFicyh2YWwpIDogJzAnKSkuc2xpY2UoLTQpO1xufTtcbmZ1bmN0aW9uIGNvbnZlcnREYXRhVG9JU08oZGF0YSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgIHJldHVybiBkYXRhLm1hcChwYXJ0cyA9PiBjb252ZXJ0RGF0YVRvSVNPKHBhcnRzKSk7XG4gIH1cbiAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL05PVEUtZGF0ZXRpbWVcbiAgbGV0IHJ0biA9ICcnO1xuICBpZiAoZGF0YS55ZWFyICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBZWVlZXG4gICAgcnRuID0gZm91ckRpZ2l0KGRhdGEueWVhcik7XG4gICAgaWYgKGRhdGEubW9udGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gWVlZWS1NTVxuICAgICAgcnRuICs9ICctJyArIHR3b0RpZ2l0KGRhdGEubW9udGgpO1xuICAgICAgaWYgKGRhdGEuZGF5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gWVlZWS1NTS1ERFxuICAgICAgICBydG4gKz0gJy0nICsgdHdvRGlnaXQoZGF0YS5kYXkpO1xuICAgICAgICBpZiAoZGF0YS5ob3VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBZWVlZLU1NLUREVEhIOm1tOlNTXG4gICAgICAgICAgcnRuICs9IGBUJHt0d29EaWdpdChkYXRhLmhvdXIpfToke3R3b0RpZ2l0KGRhdGEubWludXRlKX06MDBgO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGRhdGEuaG91ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gSEg6bW1cbiAgICBydG4gPSB0d29EaWdpdChkYXRhLmhvdXIpICsgJzonICsgdHdvRGlnaXQoZGF0YS5taW51dGUpO1xuICB9XG4gIHJldHVybiBydG47XG59XG4vKipcbiAqIENvbnZlcnRzIGFuIDEyIGhvdXIgdmFsdWUgdG8gMjQgaG91cnMuXG4gKi9cbmNvbnN0IGNvbnZlcnQxMkhvdXJUbzI0SG91ciA9IChob3VyLCBhbXBtKSA9PiB7XG4gIGlmIChhbXBtID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaG91cjtcbiAgfVxuICAvKipcbiAgICogSWYgQU0gYW5kIDEyYW1cbiAgICogdGhlbiByZXR1cm4gMDA6MDAuXG4gICAqIE90aGVyd2lzZSBqdXN0IHJldHVyblxuICAgKiB0aGUgaG91ciBzaW5jZSBpdCBpc1xuICAgKiBhbHJlYWR5IGluIDI0IGhvdXIgZm9ybWF0LlxuICAgKi9cbiAgaWYgKGFtcG0gPT09ICdhbScpIHtcbiAgICBpZiAoaG91ciA9PT0gMTIpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gaG91cjtcbiAgfVxuICAvKipcbiAgICogSWYgUE0gYW5kIDEycG1cbiAgICoganVzdCByZXR1cm4gMTI6MDBcbiAgICogc2luY2UgaXQgaXMgYWxyZWFkeVxuICAgKiBpbiAyNCBob3VyIGZvcm1hdC5cbiAgICogT3RoZXJ3aXNlIGFkZCAxMiBob3Vyc1xuICAgKiB0byB0aGUgdGltZS5cbiAgICovXG4gIGlmIChob3VyID09PSAxMikge1xuICAgIHJldHVybiAxMjtcbiAgfVxuICByZXR1cm4gaG91ciArIDEyO1xufTtcbmNvbnN0IGdldFN0YXJ0T2ZXZWVrID0gcmVmUGFydHMgPT4ge1xuICBjb25zdCB7XG4gICAgZGF5T2ZXZWVrXG4gIH0gPSByZWZQYXJ0cztcbiAgaWYgKGRheU9mV2VlayA9PT0gbnVsbCB8fCBkYXlPZldlZWsgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gZGF5IG9mIHdlZWsgcHJvdmlkZWQnKTtcbiAgfVxuICByZXR1cm4gc3VidHJhY3REYXlzKHJlZlBhcnRzLCBkYXlPZldlZWspO1xufTtcbmNvbnN0IGdldEVuZE9mV2VlayA9IHJlZlBhcnRzID0+IHtcbiAgY29uc3Qge1xuICAgIGRheU9mV2Vla1xuICB9ID0gcmVmUGFydHM7XG4gIGlmIChkYXlPZldlZWsgPT09IG51bGwgfHwgZGF5T2ZXZWVrID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGRheSBvZiB3ZWVrIHByb3ZpZGVkJyk7XG4gIH1cbiAgcmV0dXJuIGFkZERheXMocmVmUGFydHMsIDYgLSBkYXlPZldlZWspO1xufTtcbmNvbnN0IGdldE5leHREYXkgPSByZWZQYXJ0cyA9PiB7XG4gIHJldHVybiBhZGREYXlzKHJlZlBhcnRzLCAxKTtcbn07XG5jb25zdCBnZXRQcmV2aW91c0RheSA9IHJlZlBhcnRzID0+IHtcbiAgcmV0dXJuIHN1YnRyYWN0RGF5cyhyZWZQYXJ0cywgMSk7XG59O1xuY29uc3QgZ2V0UHJldmlvdXNXZWVrID0gcmVmUGFydHMgPT4ge1xuICByZXR1cm4gc3VidHJhY3REYXlzKHJlZlBhcnRzLCA3KTtcbn07XG5jb25zdCBnZXROZXh0V2VlayA9IHJlZlBhcnRzID0+IHtcbiAgcmV0dXJuIGFkZERheXMocmVmUGFydHMsIDcpO1xufTtcbi8qKlxuICogR2l2ZW4gZGF0ZXRpbWUgcGFydHMsIHN1YnRyYWN0XG4gKiBudW1EYXlzIGZyb20gdGhlIGRhdGUuXG4gKiBSZXR1cm5zIGEgbmV3IERhdGV0aW1lUGFydHMgb2JqZWN0XG4gKiBDdXJyZW50bHkgY2FuIG9ubHkgZ28gYmFja3dhcmQgYXQgbW9zdCAxIG1vbnRoLlxuICovXG5jb25zdCBzdWJ0cmFjdERheXMgPSAocmVmUGFydHMsIG51bURheXMpID0+IHtcbiAgY29uc3Qge1xuICAgIG1vbnRoLFxuICAgIGRheSxcbiAgICB5ZWFyXG4gIH0gPSByZWZQYXJ0cztcbiAgaWYgKGRheSA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gZGF5IHByb3ZpZGVkJyk7XG4gIH1cbiAgY29uc3Qgd29ya2luZ1BhcnRzID0ge1xuICAgIG1vbnRoLFxuICAgIGRheSxcbiAgICB5ZWFyXG4gIH07XG4gIHdvcmtpbmdQYXJ0cy5kYXkgPSBkYXkgLSBudW1EYXlzO1xuICAvKipcbiAgICogSWYgd3JhcHBpbmcgdG8gcHJldmlvdXMgbW9udGhcbiAgICogdXBkYXRlIGRheXMgYW5kIGRlY3JlbWVudCBtb250aFxuICAgKi9cbiAgaWYgKHdvcmtpbmdQYXJ0cy5kYXkgPCAxKSB7XG4gICAgd29ya2luZ1BhcnRzLm1vbnRoIC09IDE7XG4gIH1cbiAgLyoqXG4gICAqIElmIG1vdmluZyB0byBwcmV2aW91cyB5ZWFyLCByZXNldFxuICAgKiBtb250aCB0byBEZWNlbWJlciBhbmQgZGVjcmVtZW50IHllYXJcbiAgICovXG4gIGlmICh3b3JraW5nUGFydHMubW9udGggPCAxKSB7XG4gICAgd29ya2luZ1BhcnRzLm1vbnRoID0gMTI7XG4gICAgd29ya2luZ1BhcnRzLnllYXIgLT0gMTtcbiAgfVxuICAvKipcbiAgICogRGV0ZXJtaW5lIGhvdyBtYW55IGRheXMgYXJlIGluIHRoZSBjdXJyZW50XG4gICAqIG1vbnRoXG4gICAqL1xuICBpZiAod29ya2luZ1BhcnRzLmRheSA8IDEpIHtcbiAgICBjb25zdCBkYXlzSW5Nb250aCA9IGdldE51bURheXNJbk1vbnRoKHdvcmtpbmdQYXJ0cy5tb250aCwgd29ya2luZ1BhcnRzLnllYXIpO1xuICAgIC8qKlxuICAgICAqIFRha2UgbnVtIGRheXMgaW4gbW9udGggYW5kIGFkZCB0aGVcbiAgICAgKiBudW1iZXIgb2YgdW5kZXJmbG93IGRheXMuIFRoaXMgbnVtYmVyIHdpbGxcbiAgICAgKiBiZSBuZWdhdGl2ZS5cbiAgICAgKiBFeGFtcGxlOiAxIHdlZWsgYmVmb3JlIEphbiAyLCAyMDIxIGlzXG4gICAgICogRGVjZW1iZXIgMjYsIDIwMjEgc286XG4gICAgICogMiAtIDcgPSAtNVxuICAgICAqIDMxICsgKC01KSA9IDI2XG4gICAgICovXG4gICAgd29ya2luZ1BhcnRzLmRheSA9IGRheXNJbk1vbnRoICsgd29ya2luZ1BhcnRzLmRheTtcbiAgfVxuICByZXR1cm4gd29ya2luZ1BhcnRzO1xufTtcbi8qKlxuICogR2l2ZW4gZGF0ZXRpbWUgcGFydHMsIGFkZFxuICogbnVtRGF5cyB0byB0aGUgZGF0ZS5cbiAqIFJldHVybnMgYSBuZXcgRGF0ZXRpbWVQYXJ0cyBvYmplY3RcbiAqIEN1cnJlbnRseSBjYW4gb25seSBnbyBmb3J3YXJkIGF0IG1vc3QgMSBtb250aC5cbiAqL1xuY29uc3QgYWRkRGF5cyA9IChyZWZQYXJ0cywgbnVtRGF5cykgPT4ge1xuICBjb25zdCB7XG4gICAgbW9udGgsXG4gICAgZGF5LFxuICAgIHllYXJcbiAgfSA9IHJlZlBhcnRzO1xuICBpZiAoZGF5ID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBkYXkgcHJvdmlkZWQnKTtcbiAgfVxuICBjb25zdCB3b3JraW5nUGFydHMgPSB7XG4gICAgbW9udGgsXG4gICAgZGF5LFxuICAgIHllYXJcbiAgfTtcbiAgY29uc3QgZGF5c0luTW9udGggPSBnZXROdW1EYXlzSW5Nb250aChtb250aCwgeWVhcik7XG4gIHdvcmtpbmdQYXJ0cy5kYXkgPSBkYXkgKyBudW1EYXlzO1xuICAvKipcbiAgICogSWYgd3JhcHBpbmcgdG8gbmV4dCBtb250aFxuICAgKiB1cGRhdGUgZGF5cyBhbmQgaW5jcmVtZW50IG1vbnRoXG4gICAqL1xuICBpZiAod29ya2luZ1BhcnRzLmRheSA+IGRheXNJbk1vbnRoKSB7XG4gICAgd29ya2luZ1BhcnRzLmRheSAtPSBkYXlzSW5Nb250aDtcbiAgICB3b3JraW5nUGFydHMubW9udGggKz0gMTtcbiAgfVxuICAvKipcbiAgICogSWYgbW92aW5nIHRvIG5leHQgeWVhciwgcmVzZXRcbiAgICogbW9udGggdG8gSmFudWFyeSBhbmQgaW5jcmVtZW50IHllYXJcbiAgICovXG4gIGlmICh3b3JraW5nUGFydHMubW9udGggPiAxMikge1xuICAgIHdvcmtpbmdQYXJ0cy5tb250aCA9IDE7XG4gICAgd29ya2luZ1BhcnRzLnllYXIgKz0gMTtcbiAgfVxuICByZXR1cm4gd29ya2luZ1BhcnRzO1xufTtcbi8qKlxuICogR2l2ZW4gRGF0ZXRpbWVQYXJ0cywgZ2VuZXJhdGUgdGhlIHByZXZpb3VzIG1vbnRoLlxuICovXG5jb25zdCBnZXRQcmV2aW91c01vbnRoID0gcmVmUGFydHMgPT4ge1xuICAvKipcbiAgICogSWYgY3VycmVudCBtb250aCBpcyBKYW51YXJ5LCB3cmFwIGJhY2t3YXJkc1xuICAgKiAgdG8gRGVjZW1iZXIgb2YgdGhlIHByZXZpb3VzIHllYXIuXG4gICAqL1xuICBjb25zdCBtb250aCA9IHJlZlBhcnRzLm1vbnRoID09PSAxID8gMTIgOiByZWZQYXJ0cy5tb250aCAtIDE7XG4gIGNvbnN0IHllYXIgPSByZWZQYXJ0cy5tb250aCA9PT0gMSA/IHJlZlBhcnRzLnllYXIgLSAxIDogcmVmUGFydHMueWVhcjtcbiAgY29uc3QgbnVtRGF5c0luTW9udGggPSBnZXROdW1EYXlzSW5Nb250aChtb250aCwgeWVhcik7XG4gIGNvbnN0IGRheSA9IG51bURheXNJbk1vbnRoIDwgcmVmUGFydHMuZGF5ID8gbnVtRGF5c0luTW9udGggOiByZWZQYXJ0cy5kYXk7XG4gIHJldHVybiB7XG4gICAgbW9udGgsXG4gICAgeWVhcixcbiAgICBkYXlcbiAgfTtcbn07XG4vKipcbiAqIEdpdmVuIERhdGV0aW1lUGFydHMsIGdlbmVyYXRlIHRoZSBuZXh0IG1vbnRoLlxuICovXG5jb25zdCBnZXROZXh0TW9udGggPSByZWZQYXJ0cyA9PiB7XG4gIC8qKlxuICAgKiBJZiBjdXJyZW50IG1vbnRoIGlzIERlY2VtYmVyLCB3cmFwIGZvcndhcmRzXG4gICAqICB0byBKYW51YXJ5IG9mIHRoZSBuZXh0IHllYXIuXG4gICAqL1xuICBjb25zdCBtb250aCA9IHJlZlBhcnRzLm1vbnRoID09PSAxMiA/IDEgOiByZWZQYXJ0cy5tb250aCArIDE7XG4gIGNvbnN0IHllYXIgPSByZWZQYXJ0cy5tb250aCA9PT0gMTIgPyByZWZQYXJ0cy55ZWFyICsgMSA6IHJlZlBhcnRzLnllYXI7XG4gIGNvbnN0IG51bURheXNJbk1vbnRoID0gZ2V0TnVtRGF5c0luTW9udGgobW9udGgsIHllYXIpO1xuICBjb25zdCBkYXkgPSBudW1EYXlzSW5Nb250aCA8IHJlZlBhcnRzLmRheSA/IG51bURheXNJbk1vbnRoIDogcmVmUGFydHMuZGF5O1xuICByZXR1cm4ge1xuICAgIG1vbnRoLFxuICAgIHllYXIsXG4gICAgZGF5XG4gIH07XG59O1xuY29uc3QgY2hhbmdlWWVhciA9IChyZWZQYXJ0cywgeWVhckRlbHRhKSA9PiB7XG4gIGNvbnN0IG1vbnRoID0gcmVmUGFydHMubW9udGg7XG4gIGNvbnN0IHllYXIgPSByZWZQYXJ0cy55ZWFyICsgeWVhckRlbHRhO1xuICBjb25zdCBudW1EYXlzSW5Nb250aCA9IGdldE51bURheXNJbk1vbnRoKG1vbnRoLCB5ZWFyKTtcbiAgY29uc3QgZGF5ID0gbnVtRGF5c0luTW9udGggPCByZWZQYXJ0cy5kYXkgPyBudW1EYXlzSW5Nb250aCA6IHJlZlBhcnRzLmRheTtcbiAgcmV0dXJuIHtcbiAgICBtb250aCxcbiAgICB5ZWFyLFxuICAgIGRheVxuICB9O1xufTtcbi8qKlxuICogR2l2ZW4gRGF0ZXRpbWVQYXJ0cywgZ2VuZXJhdGUgdGhlIHByZXZpb3VzIHllYXIuXG4gKi9cbmNvbnN0IGdldFByZXZpb3VzWWVhciA9IHJlZlBhcnRzID0+IHtcbiAgcmV0dXJuIGNoYW5nZVllYXIocmVmUGFydHMsIC0xKTtcbn07XG4vKipcbiAqIEdpdmVuIERhdGV0aW1lUGFydHMsIGdlbmVyYXRlIHRoZSBuZXh0IHllYXIuXG4gKi9cbmNvbnN0IGdldE5leHRZZWFyID0gcmVmUGFydHMgPT4ge1xuICByZXR1cm4gY2hhbmdlWWVhcihyZWZQYXJ0cywgMSk7XG59O1xuLyoqXG4gKiBJZiBQTSwgdGhlbiBpbnRlcm5hbCB2YWx1ZSBzaG91bGRcbiAqIGJlIGNvbnZlcnRlZCB0byAyNC1ociB0aW1lLlxuICogRG9lcyBub3QgYXBwbHkgd2hlbiBwdWJsaWNcbiAqIHZhbHVlcyBhcmUgYWxyZWFkeSAyNC1ociB0aW1lLlxuICovXG5jb25zdCBnZXRJbnRlcm5hbEhvdXJWYWx1ZSA9IChob3VyLCB1c2UyNEhvdXIsIGFtcG0pID0+IHtcbiAgaWYgKHVzZTI0SG91cikge1xuICAgIHJldHVybiBob3VyO1xuICB9XG4gIHJldHVybiBjb252ZXJ0MTJIb3VyVG8yNEhvdXIoaG91ciwgYW1wbSk7XG59O1xuLyoqXG4gKiBVbmxlc3Mgb3RoZXJ3aXNlIHN0YXRlZCwgYWxsIG1vbnRoIHZhbHVlcyBhcmVcbiAqIDEgaW5kZXhlZCBpbnN0ZWFkIG9mIHRoZSB0eXBpY2FsIDAgaW5kZXggaW4gSlMgRGF0ZS5cbiAqIEV4YW1wbGU6XG4gKiAgIEphbnVhcnkgPSBNb250aCAwIHdoZW4gdXNpbmcgSlMgRGF0ZVxuICogICBKYW51YXJ5ID0gTW9udGggMSB3aGVuIHVzaW5nIHRoaXMgZGF0ZXRpbWUgdXRpbFxuICovXG4vKipcbiAqIEdpdmVuIHRoZSBjdXJyZW50IGRhdGV0aW1lIHBhcnRzIGFuZCBhIG5ldyBBTS9QTSB2YWx1ZVxuICogY2FsY3VsYXRlIHdoYXQgdGhlIGhvdXIgc2hvdWxkIGJlIGluIDI0LWhvdXIgdGltZSBmb3JtYXQuXG4gKiBVc2VkIHdoZW4gdG9nZ2xpbmcgdGhlIEFNL1BNIHNlZ21lbnQgc2luY2Ugd2Ugc3RvcmUgb3VyIGhvdXJzXG4gKiBpbiAyNC1ob3VyIHRpbWUgZm9ybWF0IGludGVybmFsbHkuXG4gKi9cbmNvbnN0IGNhbGN1bGF0ZUhvdXJGcm9tQU1QTSA9IChjdXJyZW50UGFydHMsIG5ld0FNUE0pID0+IHtcbiAgY29uc3Qge1xuICAgIGFtcG06IGN1cnJlbnRBTVBNLFxuICAgIGhvdXJcbiAgfSA9IGN1cnJlbnRQYXJ0cztcbiAgbGV0IG5ld0hvdXIgPSBob3VyO1xuICAvKipcbiAgICogSWYgZ29pbmcgZnJvbSBBTSAtLT4gUE0sIG5lZWQgdG8gdXBkYXRlIHRoZVxuICAgKlxuICAgKi9cbiAgaWYgKGN1cnJlbnRBTVBNID09PSAnYW0nICYmIG5ld0FNUE0gPT09ICdwbScpIHtcbiAgICBuZXdIb3VyID0gY29udmVydDEySG91clRvMjRIb3VyKG5ld0hvdXIsICdwbScpO1xuICAgIC8qKlxuICAgICAqIElmIGdvaW5nIGZyb20gUE0gLS0+IEFNXG4gICAgICovXG4gIH0gZWxzZSBpZiAoY3VycmVudEFNUE0gPT09ICdwbScgJiYgbmV3QU1QTSA9PT0gJ2FtJykge1xuICAgIG5ld0hvdXIgPSBNYXRoLmFicyhuZXdIb3VyIC0gMTIpO1xuICB9XG4gIHJldHVybiBuZXdIb3VyO1xufTtcbi8qKlxuICogVXBkYXRlcyBwYXJ0cyB0byBlbnN1cmUgdGhhdCBtb250aCBhbmQgZGF5XG4gKiB2YWx1ZXMgYXJlIHZhbGlkLiBGb3IgZGF5cyB0aGF0IGRvIG5vdCBleGlzdCxcbiAqIG9yIGFyZSBvdXRzaWRlIHRoZSBtaW4vbWF4IGJvdW5kcywgdGhlIGNsb3Nlc3RcbiAqIHZhbGlkIGRheSBpcyB1c2VkLlxuICovXG5jb25zdCB2YWxpZGF0ZVBhcnRzID0gKHBhcnRzLCBtaW5QYXJ0cywgbWF4UGFydHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG1vbnRoLFxuICAgIGRheSxcbiAgICB5ZWFyXG4gIH0gPSBwYXJ0cztcbiAgY29uc3QgcGFydHNDb3B5ID0gY2xhbXBEYXRlKE9iamVjdC5hc3NpZ24oe30sIHBhcnRzKSwgbWluUGFydHMsIG1heFBhcnRzKTtcbiAgY29uc3QgbnVtRGF5cyA9IGdldE51bURheXNJbk1vbnRoKG1vbnRoLCB5ZWFyKTtcbiAgLyoqXG4gICAqIElmIHRoZSBtYXggbnVtYmVyIG9mIGRheXNcbiAgICogaXMgZ3JlYXRlciB0aGFuIHRoZSBkYXkgd2Ugd2FudFxuICAgKiB0byBzZXQsIHVwZGF0ZSB0aGUgRGF0ZXRpbWVQYXJ0c1xuICAgKiBkYXkgZmllbGQgdG8gYmUgdGhlIG1heCBkYXlzLlxuICAgKi9cbiAgaWYgKGRheSAhPT0gbnVsbCAmJiBudW1EYXlzIDwgZGF5KSB7XG4gICAgcGFydHNDb3B5LmRheSA9IG51bURheXM7XG4gIH1cbiAgLyoqXG4gICAqIElmIHZhbHVlIGlzIHNhbWUgZGF5IGFzIG1pbiBkYXksXG4gICAqIG1ha2Ugc3VyZSB0aGUgdGltZSB2YWx1ZSBpcyBpbiBib3VuZHMuXG4gICAqL1xuICBpZiAobWluUGFydHMgIT09IHVuZGVmaW5lZCAmJiBpc1NhbWVEYXkocGFydHNDb3B5LCBtaW5QYXJ0cykpIHtcbiAgICAvKipcbiAgICAgKiBJZiB0aGUgaG91ciBpcyBvdXQgb2YgYm91bmRzLFxuICAgICAqIHVwZGF0ZSBib3RoIHRoZSBob3VyIGFuZCBtaW51dGUuXG4gICAgICogVGhpcyBpcyBkb25lIHNvIHRoYXQgdGhlIG5ldyB0aW1lXG4gICAgICogaXMgY2xvc2VzdCB0byB3aGF0IHRoZSB1c2VyIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIGlmIChwYXJ0c0NvcHkuaG91ciAhPT0gdW5kZWZpbmVkICYmIG1pblBhcnRzLmhvdXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHBhcnRzQ29weS5ob3VyIDwgbWluUGFydHMuaG91cikge1xuICAgICAgICBwYXJ0c0NvcHkuaG91ciA9IG1pblBhcnRzLmhvdXI7XG4gICAgICAgIHBhcnRzQ29weS5taW51dGUgPSBtaW5QYXJ0cy5taW51dGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBvbmx5IHRoZSBtaW51dGUgaXMgb3V0IG9mIGJvdW5kcyxcbiAgICAgICAgICogc2V0IGl0IHRvIHRoZSBtaW4gbWludXRlLlxuICAgICAgICAgKi9cbiAgICAgIH0gZWxzZSBpZiAocGFydHNDb3B5LmhvdXIgPT09IG1pblBhcnRzLmhvdXIgJiYgcGFydHNDb3B5Lm1pbnV0ZSAhPT0gdW5kZWZpbmVkICYmIG1pblBhcnRzLm1pbnV0ZSAhPT0gdW5kZWZpbmVkICYmIHBhcnRzQ29weS5taW51dGUgPCBtaW5QYXJ0cy5taW51dGUpIHtcbiAgICAgICAgcGFydHNDb3B5Lm1pbnV0ZSA9IG1pblBhcnRzLm1pbnV0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIElmIHZhbHVlIGlzIHNhbWUgZGF5IGFzIG1heCBkYXksXG4gICAqIG1ha2Ugc3VyZSB0aGUgdGltZSB2YWx1ZSBpcyBpbiBib3VuZHMuXG4gICAqL1xuICBpZiAobWF4UGFydHMgIT09IHVuZGVmaW5lZCAmJiBpc1NhbWVEYXkocGFydHMsIG1heFBhcnRzKSkge1xuICAgIC8qKlxuICAgICAqIElmIHRoZSBob3VyIGlzIG91dCBvZiBib3VuZHMsXG4gICAgICogdXBkYXRlIGJvdGggdGhlIGhvdXIgYW5kIG1pbnV0ZS5cbiAgICAgKiBUaGlzIGlzIGRvbmUgc28gdGhhdCB0aGUgbmV3IHRpbWVcbiAgICAgKiBpcyBjbG9zZXN0IHRvIHdoYXQgdGhlIHVzZXIgc2VsZWN0ZWQuXG4gICAgICovXG4gICAgaWYgKHBhcnRzQ29weS5ob3VyICE9PSB1bmRlZmluZWQgJiYgbWF4UGFydHMuaG91ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAocGFydHNDb3B5LmhvdXIgPiBtYXhQYXJ0cy5ob3VyKSB7XG4gICAgICAgIHBhcnRzQ29weS5ob3VyID0gbWF4UGFydHMuaG91cjtcbiAgICAgICAgcGFydHNDb3B5Lm1pbnV0ZSA9IG1heFBhcnRzLm1pbnV0ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIG9ubHkgdGhlIG1pbnV0ZSBpcyBvdXQgb2YgYm91bmRzLFxuICAgICAgICAgKiBzZXQgaXQgdG8gdGhlIG1heCBtaW51dGUuXG4gICAgICAgICAqL1xuICAgICAgfSBlbHNlIGlmIChwYXJ0c0NvcHkuaG91ciA9PT0gbWF4UGFydHMuaG91ciAmJiBwYXJ0c0NvcHkubWludXRlICE9PSB1bmRlZmluZWQgJiYgbWF4UGFydHMubWludXRlICE9PSB1bmRlZmluZWQgJiYgcGFydHNDb3B5Lm1pbnV0ZSA+IG1heFBhcnRzLm1pbnV0ZSkge1xuICAgICAgICBwYXJ0c0NvcHkubWludXRlID0gbWF4UGFydHMubWludXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcGFydHNDb3B5O1xufTtcbi8qKlxuICogUmV0dXJucyB0aGUgY2xvc2VzdCBkYXRlIHRvIHJlZlBhcnRzXG4gKiB0aGF0IGFsc28gbWVldHMgdGhlIGNvbnN0cmFpbnRzIG9mXG4gKiB0aGUgKlZhbHVlcyBwYXJhbXMuXG4gKi9cbmNvbnN0IGdldENsb3Nlc3RWYWxpZERhdGUgPSAoe1xuICByZWZQYXJ0cyxcbiAgbW9udGhWYWx1ZXMsXG4gIGRheVZhbHVlcyxcbiAgeWVhclZhbHVlcyxcbiAgaG91clZhbHVlcyxcbiAgbWludXRlVmFsdWVzLFxuICBtaW5QYXJ0cyxcbiAgbWF4UGFydHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGhvdXIsXG4gICAgbWludXRlLFxuICAgIGRheSxcbiAgICBtb250aCxcbiAgICB5ZWFyXG4gIH0gPSByZWZQYXJ0cztcbiAgY29uc3QgY29weVBhcnRzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZWZQYXJ0cyksIHtcbiAgICBkYXlPZldlZWs6IHVuZGVmaW5lZFxuICB9KTtcbiAgaWYgKHllYXJWYWx1ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIEZpbHRlcnMgb3V0IHllYXJzIHRoYXQgYXJlIG91dCBvZiB0aGUgbWluL21heCBib3VuZHNcbiAgICBjb25zdCBmaWx0ZXJlZFllYXJzID0geWVhclZhbHVlcy5maWx0ZXIoeWVhciA9PiB7XG4gICAgICBpZiAobWluUGFydHMgIT09IHVuZGVmaW5lZCAmJiB5ZWFyIDwgbWluUGFydHMueWVhcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAobWF4UGFydHMgIT09IHVuZGVmaW5lZCAmJiB5ZWFyID4gbWF4UGFydHMueWVhcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBjb3B5UGFydHMueWVhciA9IGZpbmRDbG9zZXN0VmFsdWUoeWVhciwgZmlsdGVyZWRZZWFycyk7XG4gIH1cbiAgaWYgKG1vbnRoVmFsdWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBGaWx0ZXJzIG91dCBtb250aHMgdGhhdCBhcmUgb3V0IG9mIHRoZSBtaW4vbWF4IGJvdW5kc1xuICAgIGNvbnN0IGZpbHRlcmVkTW9udGhzID0gbW9udGhWYWx1ZXMuZmlsdGVyKG1vbnRoID0+IHtcbiAgICAgIGlmIChtaW5QYXJ0cyAhPT0gdW5kZWZpbmVkICYmIGNvcHlQYXJ0cy55ZWFyID09PSBtaW5QYXJ0cy55ZWFyICYmIG1vbnRoIDwgbWluUGFydHMubW9udGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKG1heFBhcnRzICE9PSB1bmRlZmluZWQgJiYgY29weVBhcnRzLnllYXIgPT09IG1heFBhcnRzLnllYXIgJiYgbW9udGggPiBtYXhQYXJ0cy5tb250aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBjb3B5UGFydHMubW9udGggPSBmaW5kQ2xvc2VzdFZhbHVlKG1vbnRoLCBmaWx0ZXJlZE1vbnRocyk7XG4gIH1cbiAgLy8gRGF5IGlzIG51bGxhYmxlIGJ1dCBjYW5ub3QgYmUgdW5kZWZpbmVkXG4gIGlmIChkYXkgIT09IG51bGwgJiYgZGF5VmFsdWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBGaWx0ZXJzIG91dCBkYXlzIHRoYXQgYXJlIG91dCBvZiB0aGUgbWluL21heCBib3VuZHNcbiAgICBjb25zdCBmaWx0ZXJlZERheXMgPSBkYXlWYWx1ZXMuZmlsdGVyKGRheSA9PiB7XG4gICAgICBpZiAobWluUGFydHMgIT09IHVuZGVmaW5lZCAmJiBpc0JlZm9yZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvcHlQYXJ0cyksIHtcbiAgICAgICAgZGF5XG4gICAgICB9KSwgbWluUGFydHMpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhQYXJ0cyAhPT0gdW5kZWZpbmVkICYmIGlzQWZ0ZXIoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb3B5UGFydHMpLCB7XG4gICAgICAgIGRheVxuICAgICAgfSksIG1heFBhcnRzKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBjb3B5UGFydHMuZGF5ID0gZmluZENsb3Nlc3RWYWx1ZShkYXksIGZpbHRlcmVkRGF5cyk7XG4gIH1cbiAgaWYgKGhvdXIgIT09IHVuZGVmaW5lZCAmJiBob3VyVmFsdWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBGaWx0ZXJzIG91dCBob3VycyB0aGF0IGFyZSBvdXQgb2YgdGhlIG1pbi9tYXggYm91bmRzXG4gICAgY29uc3QgZmlsdGVyZWRIb3VycyA9IGhvdXJWYWx1ZXMuZmlsdGVyKGhvdXIgPT4ge1xuICAgICAgaWYgKChtaW5QYXJ0cyA9PT0gbnVsbCB8fCBtaW5QYXJ0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWluUGFydHMuaG91cikgIT09IHVuZGVmaW5lZCAmJiBpc1NhbWVEYXkoY29weVBhcnRzLCBtaW5QYXJ0cykgJiYgaG91ciA8IG1pblBhcnRzLmhvdXIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKChtYXhQYXJ0cyA9PT0gbnVsbCB8fCBtYXhQYXJ0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWF4UGFydHMuaG91cikgIT09IHVuZGVmaW5lZCAmJiBpc1NhbWVEYXkoY29weVBhcnRzLCBtYXhQYXJ0cykgJiYgaG91ciA+IG1heFBhcnRzLmhvdXIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgY29weVBhcnRzLmhvdXIgPSBmaW5kQ2xvc2VzdFZhbHVlKGhvdXIsIGZpbHRlcmVkSG91cnMpO1xuICAgIGNvcHlQYXJ0cy5hbXBtID0gcGFyc2VBbVBtKGNvcHlQYXJ0cy5ob3VyKTtcbiAgfVxuICBpZiAobWludXRlICE9PSB1bmRlZmluZWQgJiYgbWludXRlVmFsdWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBGaWx0ZXJzIG91dCBtaW51dGVzIHRoYXQgYXJlIG91dCBvZiB0aGUgbWluL21heCBib3VuZHNcbiAgICBjb25zdCBmaWx0ZXJlZE1pbnV0ZXMgPSBtaW51dGVWYWx1ZXMuZmlsdGVyKG1pbnV0ZSA9PiB7XG4gICAgICBpZiAoKG1pblBhcnRzID09PSBudWxsIHx8IG1pblBhcnRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtaW5QYXJ0cy5taW51dGUpICE9PSB1bmRlZmluZWQgJiYgaXNTYW1lRGF5KGNvcHlQYXJ0cywgbWluUGFydHMpICYmIGNvcHlQYXJ0cy5ob3VyID09PSBtaW5QYXJ0cy5ob3VyICYmIG1pbnV0ZSA8IG1pblBhcnRzLm1pbnV0ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoKG1heFBhcnRzID09PSBudWxsIHx8IG1heFBhcnRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtYXhQYXJ0cy5taW51dGUpICE9PSB1bmRlZmluZWQgJiYgaXNTYW1lRGF5KGNvcHlQYXJ0cywgbWF4UGFydHMpICYmIGNvcHlQYXJ0cy5ob3VyID09PSBtYXhQYXJ0cy5ob3VyICYmIG1pbnV0ZSA+IG1heFBhcnRzLm1pbnV0ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBjb3B5UGFydHMubWludXRlID0gZmluZENsb3Nlc3RWYWx1ZShtaW51dGUsIGZpbHRlcmVkTWludXRlcyk7XG4gIH1cbiAgcmV0dXJuIGNvcHlQYXJ0cztcbn07XG4vKipcbiAqIEZpbmRzIHRoZSB2YWx1ZSBpbiBcInZhbHVlc1wiIHRoYXQgaXNcbiAqIG51bWVyaWNhbGx5IGNsb3Nlc3QgdG8gXCJyZWZlcmVuY2VcIi5cbiAqIFRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IFwidmFsdWVzXCIgaXNcbiAqIGFscmVhZHkgc29ydGVkIGluIGFzY2VuZGluZyBvcmRlci5cbiAqIEBwYXJhbSByZWZlcmVuY2UgVGhlIHJlZmVyZW5jZSBudW1iZXIgdG8gdXNlXG4gKiB3aGVuIGZpbmRpbmcgdGhlIGNsb3Nlc3QgdmFsdWVcbiAqIEBwYXJhbSB2YWx1ZXMgVGhlIGFsbG93ZWQgdmFsdWVzIHRoYXQgd2lsbCBiZVxuICogc2VhcmNoZWQgdG8gZmluZCB0aGUgY2xvc2VzdCB2YWx1ZSB0byBcInJlZmVyZW5jZVwiXG4gKi9cbmNvbnN0IGZpbmRDbG9zZXN0VmFsdWUgPSAocmVmZXJlbmNlLCB2YWx1ZXMpID0+IHtcbiAgbGV0IGNsb3Nlc3RWYWx1ZSA9IHZhbHVlc1swXTtcbiAgbGV0IHJhbmsgPSBNYXRoLmFicyhjbG9zZXN0VmFsdWUgLSByZWZlcmVuY2UpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2ldO1xuICAgIC8qKlxuICAgICAqIFRoaXMgY29kZSBwcmlvcml0aXplcyB0aGUgZmlyc3RcbiAgICAgKiBjbG9zZXN0IHJlc3VsdC4gR2l2ZW4gdHdvIHZhbHVlc1xuICAgICAqIHdpdGggdGhlIHNhbWUgZGlzdGFuY2UgZnJvbSByZWZlcmVuY2UsXG4gICAgICogdGhpcyBjb2RlIHdpbGwgcHJpb3JpdGl6ZSB0aGUgc21hbGxlciBvZlxuICAgICAqIHRoZSB0d28gdmFsdWVzLlxuICAgICAqL1xuICAgIGNvbnN0IHZhbHVlUmFuayA9IE1hdGguYWJzKHZhbHVlIC0gcmVmZXJlbmNlKTtcbiAgICBpZiAodmFsdWVSYW5rIDwgcmFuaykge1xuICAgICAgY2xvc2VzdFZhbHVlID0gdmFsdWU7XG4gICAgICByYW5rID0gdmFsdWVSYW5rO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2xvc2VzdFZhbHVlO1xufTtcbmNvbnN0IGdldEZvcm1hdHRlZERheVBlcmlvZCA9IGRheVBlcmlvZCA9PiB7XG4gIGlmIChkYXlQZXJpb2QgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gZGF5UGVyaW9kLnRvVXBwZXJDYXNlKCk7XG59O1xuLyoqXG4gKiBJbmNsdWRpbmcgdGltZSB6b25lIG9wdGlvbnMgbWF5IGxlYWQgdG8gdGhlIHJlbmRlcmVkIHRleHQgc2hvd2luZyBhXG4gKiBkaWZmZXJlbnQgdGltZSBmcm9tIHdoYXQgd2FzIHNlbGVjdGVkIGluIHRoZSBEYXRldGltZSwgd2hpY2ggY291bGQgY2F1c2VcbiAqIGNvbmZ1c2lvbi5cbiAqL1xuY29uc3Qgc3RyaXBUaW1lWm9uZSA9IGZvcm1hdE9wdGlvbnMgPT4ge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmb3JtYXRPcHRpb25zKSwge1xuICAgIC8qKlxuICAgICAqIFNldHRpbmcgdGhlIHRpbWUgem9uZSB0byBVVEMgZW5zdXJlcyB0aGF0IHRoZSB2YWx1ZSBzaG93biBpcyBhbHdheXMgdGhlXG4gICAgICogc2FtZSBhcyB3aGF0IHdhcyBzZWxlY3RlZCBhbmQgc2FmZWd1YXJkcyBhZ2FpbnN0IG9sZGVyIFNhZmFyaSBidWdzIHdpdGhcbiAgICAgKiBJbnRsLkRhdGVUaW1lRm9ybWF0LlxuICAgICAqL1xuICAgIHRpbWVab25lOiAnVVRDJyxcbiAgICAvKipcbiAgICAgKiBXZSBkbyBub3Qgd2FudCB0byBkaXNwbGF5IHRoZSB0aW1lIHpvbmUgbmFtZVxuICAgICAqL1xuICAgIHRpbWVab25lTmFtZTogdW5kZWZpbmVkXG4gIH0pO1xufTtcbmNvbnN0IGdldExvY2FsaXplZFRpbWUgPSAobG9jYWxlLCByZWZQYXJ0cywgaG91ckN5Y2xlLCBmb3JtYXRPcHRpb25zID0ge1xuICBob3VyOiAnbnVtZXJpYycsXG4gIG1pbnV0ZTogJ251bWVyaWMnXG59KSA9PiB7XG4gIGNvbnN0IHRpbWVQYXJ0cyA9IHtcbiAgICBob3VyOiByZWZQYXJ0cy5ob3VyLFxuICAgIG1pbnV0ZTogcmVmUGFydHMubWludXRlXG4gIH07XG4gIGlmICh0aW1lUGFydHMuaG91ciA9PT0gdW5kZWZpbmVkIHx8IHRpbWVQYXJ0cy5taW51dGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnSW52YWxpZCBUaW1lJztcbiAgfVxuICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0cmlwVGltZVpvbmUoZm9ybWF0T3B0aW9ucykpLCB7XG4gICAgLyoqXG4gICAgICogV2UgdXNlIGhvdXJDeWNsZSBoZXJlIGluc3RlYWQgb2YgaG91cjEyIGR1ZSB0bzpcbiAgICAgKiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMzQ3MzE2JnE9aG91cjEyJmNhbj0yXG4gICAgICovXG4gICAgaG91ckN5Y2xlXG4gIH0pKS5mb3JtYXQobmV3IERhdGUoY29udmVydERhdGFUb0lTTyhPYmplY3QuYXNzaWduKHtcbiAgICAvKipcbiAgICAgKiBKUyB1c2VzIGEgc2ltcGxpZmllZCBJU08gODYwMSBmb3JtYXQgd2hpY2ggYWxsb3dzIGZvclxuICAgICAqIGRhdGUtb25seSBmb3JtYXRzIGFuZCBkYXRlLXRpbWUgZm9ybWF0cywgYnV0IG5vdFxuICAgICAqIHRpbWUtb25seSBmb3JtYXRzOiBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWRhdGUtdGltZS1zdHJpbmctZm9ybWF0XG4gICAgICogQXMgYSByZXN1bHQsIGRldmVsb3BlcnMgd2hvIG9ubHkgcGFzcyBhIHRpbWUgd2lsbCBnZXRcbiAgICAgKiBhbiBcIkludmFsaWQgRGF0ZVwiIGVycm9yLiBUbyBhY2NvdW50IGZvciB0aGlzLCB3ZSBtYWtlIHN1cmUgdGhhdFxuICAgICAqIHllYXIvZGF5L21vbnRoIHZhbHVlcyBhcmUgc2V0IHdoZW4gcGFzc2luZyB0byBuZXcgRGF0ZSgpLlxuICAgICAqIFRoZSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNhbGwgYWJvdmUgb25seSB1c2VzIHRoZSBob3VyL21pbnV0ZVxuICAgICAqIHZhbHVlcywgc28gcGFzc2luZyB0aGVzZSBkYXRlIHZhbHVlcyBzaG91bGQgaGF2ZSBubyBpbXBhY3RcbiAgICAgKiBvbiB0aGUgdGltZSBvdXRwdXQuXG4gICAgICovXG4gICAgeWVhcjogMjAyMyxcbiAgICBkYXk6IDEsXG4gICAgbW9udGg6IDFcbiAgfSwgdGltZVBhcnRzKSkgKyAnWicpKTtcbn07XG4vKipcbiAqIEFkZHMgcGFkZGluZyB0byBhIHRpbWUgdmFsdWUgc29cbiAqIHRoYXQgaXQgaXMgYWx3YXlzIDIgZGlnaXRzLlxuICovXG5jb25zdCBhZGRUaW1lUGFkZGluZyA9IHZhbHVlID0+IHtcbiAgY29uc3QgdmFsdWVUb1N0cmluZyA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gIGlmICh2YWx1ZVRvU3RyaW5nLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZztcbiAgfVxuICByZXR1cm4gYDAke3ZhbHVlVG9TdHJpbmd9YDtcbn07XG4vKipcbiAqIEZvcm1hdHMgMjQgaG91ciB0aW1lcyBzbyB0aGF0XG4gKiBpdCBhbHdheXMgaGFzIDIgZGlnaXRzLiBGb3JcbiAqIDEyIGhvdXIgdGltZXMgaXQgZW5zdXJlcyB0aGF0XG4gKiBob3VyIDAgaXMgZm9ybWF0dGVkIGFzICcxMicuXG4gKi9cbmNvbnN0IGdldEZvcm1hdHRlZEhvdXIgPSAoaG91ciwgaG91ckN5Y2xlKSA9PiB7XG4gIC8qKlxuICAgKiBNaWRuaWdodCBmb3IgaDExIHN0YXJ0cyBhdCAwOjAwYW1cbiAgICogTWlkbmlnaHQgZm9yIGgxMiBzdGFydHMgYXQgMTI6MDBhbVxuICAgKiBNaWRuaWdodCBmb3IgaDIzIHN0YXJ0cyBhdCAwMDowMFxuICAgKiBNaWRuaWdodCBmb3IgaDI0IHN0YXJ0cyBhdCAyNDowMFxuICAgKi9cbiAgaWYgKGhvdXIgPT09IDApIHtcbiAgICBzd2l0Y2ggKGhvdXJDeWNsZSkge1xuICAgICAgY2FzZSAnaDExJzpcbiAgICAgICAgcmV0dXJuICcwJztcbiAgICAgIGNhc2UgJ2gxMic6XG4gICAgICAgIHJldHVybiAnMTInO1xuICAgICAgY2FzZSAnaDIzJzpcbiAgICAgICAgcmV0dXJuICcwMCc7XG4gICAgICBjYXNlICdoMjQnOlxuICAgICAgICByZXR1cm4gJzI0JztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBob3VyIGN5Y2xlIFwiJHtob3VyQ3ljbGV9XCJgKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgdXNlMjRIb3VyID0gaXMyNEhvdXIoaG91ckN5Y2xlKTtcbiAgLyoqXG4gICAqIGgyMyBhbmQgaDI0IHVzZSAyNCBob3VyIHRpbWVzLlxuICAgKi9cbiAgaWYgKHVzZTI0SG91cikge1xuICAgIHJldHVybiBhZGRUaW1lUGFkZGluZyhob3VyKTtcbiAgfVxuICByZXR1cm4gaG91ci50b1N0cmluZygpO1xufTtcbi8qKlxuICogR2VuZXJhdGVzIGFuIGFyaWEtbGFiZWwgdG8gYmUgcmVhZCBieSBzY3JlZW4gcmVhZGVyc1xuICogZ2l2ZW4gYSBsb2NhbCwgYSBkYXRlLCBhbmQgd2hldGhlciBvciBub3QgdGhhdCBkYXRlIGlzXG4gKiB0b2RheSdzIGRhdGUuXG4gKi9cbmNvbnN0IGdlbmVyYXRlRGF5QXJpYUxhYmVsID0gKGxvY2FsZSwgdG9kYXksIHJlZlBhcnRzKSA9PiB7XG4gIGlmIChyZWZQYXJ0cy5kYXkgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvKipcbiAgICogTU0vREQvWVlZWSB3aWxsIHJldHVybiBtaWRuaWdodCBpbiB0aGUgdXNlcidzIHRpbWV6b25lLlxuICAgKi9cbiAgY29uc3QgZGF0ZSA9IGdldE5vcm1hbGl6ZWREYXRlKHJlZlBhcnRzKTtcbiAgY29uc3QgbGFiZWxTdHJpbmcgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHtcbiAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgbW9udGg6ICdsb25nJyxcbiAgICBkYXk6ICdudW1lcmljJyxcbiAgICB0aW1lWm9uZTogJ1VUQydcbiAgfSkuZm9ybWF0KGRhdGUpO1xuICAvKipcbiAgICogSWYgZGF0ZSBpcyB0b2RheSwgcHJlcGVuZCBcIlRvZGF5XCIgc28gc2NyZWVuIHJlYWRlcnMgaW5kaWNhdGVcbiAgICogdGhhdCB0aGUgZGF0ZSBpcyB0b2RheS5cbiAgICovXG4gIHJldHVybiB0b2RheSA/IGBUb2RheSwgJHtsYWJlbFN0cmluZ31gIDogbGFiZWxTdHJpbmc7XG59O1xuLyoqXG4gKiBHaXZlbiBhIGxvY2FsZSBhbmQgYSBkYXRlIG9iamVjdCxcbiAqIHJldHVybiBhIGZvcm1hdHRlZCBzdHJpbmcgdGhhdCBpbmNsdWRlc1xuICogdGhlIG1vbnRoIG5hbWUgYW5kIGZ1bGwgeWVhci5cbiAqIEV4YW1wbGU6IE1heSAyMDIxXG4gKi9cbmNvbnN0IGdldE1vbnRoQW5kWWVhciA9IChsb2NhbGUsIHJlZlBhcnRzKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBnZXROb3JtYWxpemVkRGF0ZShyZWZQYXJ0cyk7XG4gIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHtcbiAgICBtb250aDogJ2xvbmcnLFxuICAgIHllYXI6ICdudW1lcmljJyxcbiAgICB0aW1lWm9uZTogJ1VUQydcbiAgfSkuZm9ybWF0KGRhdGUpO1xufTtcbi8qKlxuICogR2l2ZW4gYSBsb2NhbGUgYW5kIGEgZGF0ZSBvYmplY3QsXG4gKiByZXR1cm4gYSBmb3JtYXR0ZWQgc3RyaW5nIHRoYXQgaW5jbHVkZXNcbiAqIHRoZSBudW1lcmljIGRheS5cbiAqIE5vdGU6IFNvbWUgbGFuZ3VhZ2VzIHdpbGwgYWRkIGxpdGVyYWwgY2hhcmFjdGVyc1xuICogdG8gdGhlIGVuZC4gVGhpcyBmdW5jdGlvbiByZW1vdmVzIHRob3NlIGxpdGVyYWxzLlxuICogRXhhbXBsZTogMjlcbiAqL1xuY29uc3QgZ2V0RGF5ID0gKGxvY2FsZSwgcmVmUGFydHMpID0+IHtcbiAgcmV0dXJuIGdldExvY2FsaXplZERhdGVUaW1lUGFydHMobG9jYWxlLCByZWZQYXJ0cywge1xuICAgIGRheTogJ251bWVyaWMnXG4gIH0pLmZpbmQob2JqID0+IG9iai50eXBlID09PSAnZGF5JykudmFsdWU7XG59O1xuLyoqXG4gKiBHaXZlbiBhIGxvY2FsZSBhbmQgYSBkYXRlIG9iamVjdCxcbiAqIHJldHVybiBhIGZvcm1hdHRlZCBzdHJpbmcgdGhhdCBpbmNsdWRlc1xuICogdGhlIG51bWVyaWMgeWVhci5cbiAqIEV4YW1wbGU6IDIwMjJcbiAqL1xuY29uc3QgZ2V0WWVhciA9IChsb2NhbGUsIHJlZlBhcnRzKSA9PiB7XG4gIHJldHVybiBnZXRMb2NhbGl6ZWREYXRlVGltZShsb2NhbGUsIHJlZlBhcnRzLCB7XG4gICAgeWVhcjogJ251bWVyaWMnXG4gIH0pO1xufTtcbi8qKlxuICogR2l2ZW4gcmVmZXJlbmNlIHBhcnRzLCByZXR1cm4gYSBKUyBEYXRlIG9iamVjdFxuICogd2l0aCBhIG5vcm1hbGl6ZWQgdGltZS5cbiAqL1xuY29uc3QgZ2V0Tm9ybWFsaXplZERhdGUgPSByZWZQYXJ0cyA9PiB7XG4gIHZhciBfYSwgX2IsIF9jO1xuICBjb25zdCB0aW1lU3RyaW5nID0gcmVmUGFydHMuaG91ciAhPT0gdW5kZWZpbmVkICYmIHJlZlBhcnRzLm1pbnV0ZSAhPT0gdW5kZWZpbmVkID8gYCAke3JlZlBhcnRzLmhvdXJ9OiR7cmVmUGFydHMubWludXRlfWAgOiAnJztcbiAgLyoqXG4gICAqIFdlIHVzZSAvIG5vdGF0aW9uIGhlcmUgZm9yIHRoZSBkYXRlXG4gICAqIHNvIHdlIGRvIG5vdCBuZWVkIHRvIGRvIGV4dHJhIHdvcmsgYW5kIHBhZCB2YWx1ZXMgd2l0aCB6ZXJvZXMuXG4gICAqIFZhbHVlcyBzdWNoIGFzIFlZWVktTU0gYXJlIHN0aWxsIHZhbGlkLCBzb1xuICAgKiB3ZSBhZGQgZmFsbGJhY2sgdmFsdWVzIHNvIHdlIHN0aWxsIGdldFxuICAgKiBhIHZhbGlkIGRhdGUgb3RoZXJ3aXNlIHdlIHdpbGwgcGFzcyBpbiBhIHN0cmluZ1xuICAgKiBsaWtlIFwiLy8yMDIzXCIuIFNvbWUgYnJvd3NlcnMsIHN1Y2ggYXMgQ2hyb21lLCB3aWxsXG4gICAqIGFjY291bnQgZm9yIHRoaXMgYW5kIHN0aWxsIHJldHVybiBhIHZhbGlkIGRhdGUuIEhvd2V2ZXIsXG4gICAqIHRoaXMgaXMgbm90IGEgY29uc2lzdGVudCBiZWhhdmlvciBhY3Jvc3MgYWxsIGJyb3dzZXJzLlxuICAgKi9cbiAgcmV0dXJuIG5ldyBEYXRlKGAkeyhfYSA9IHJlZlBhcnRzLm1vbnRoKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAxfS8keyhfYiA9IHJlZlBhcnRzLmRheSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogMX0vJHsoX2MgPSByZWZQYXJ0cy55ZWFyKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAyMDIzfSR7dGltZVN0cmluZ30gR01UKzAwMDBgKTtcbn07XG4vKipcbiAqIEdpdmVuIGEgbG9jYWxlLCBEYXRldGltZVBhcnRzLCBhbmQgb3B0aW9uc1xuICogZm9ybWF0IHRoZSBEYXRldGltZVBhcnRzIGFjY29yZGluZyB0byB0aGUgb3B0aW9uc1xuICogYW5kIGxvY2FsZSBjb21iaW5hdGlvbi4gVGhpcyByZXR1cm5zIGEgc3RyaW5nLiBJZlxuICogeW91IHdhbnQgYW4gYXJyYXkgb2YgdGhlIGluZGl2aWR1YWwgcGllY2VzXG4gKiB0aGF0IG1ha2UgdXAgdGhlIGxvY2FsaXplZCBkYXRlIHN0cmluZywgdXNlXG4gKiBnZXRMb2NhbGl6ZWREYXRlVGltZVBhcnRzLlxuICovXG5jb25zdCBnZXRMb2NhbGl6ZWREYXRlVGltZSA9IChsb2NhbGUsIHJlZlBhcnRzLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBnZXROb3JtYWxpemVkRGF0ZShyZWZQYXJ0cyk7XG4gIHJldHVybiBnZXREYXRlVGltZUZvcm1hdChsb2NhbGUsIHN0cmlwVGltZVpvbmUob3B0aW9ucykpLmZvcm1hdChkYXRlKTtcbn07XG4vKipcbiAqIEdpdmVuIGEgbG9jYWxlLCBEYXRldGltZVBhcnRzLCBhbmQgb3B0aW9uc1xuICogZm9ybWF0IHRoZSBEYXRldGltZVBhcnRzIGFjY29yZGluZyB0byB0aGUgb3B0aW9uc1xuICogYW5kIGxvY2FsZSBjb21iaW5hdGlvbi4gVGhpcyByZXR1cm5zIGFuIGFycmF5IG9mXG4gKiBlYWNoIHBpZWNlIG9mIHRoZSBkYXRlLlxuICovXG5jb25zdCBnZXRMb2NhbGl6ZWREYXRlVGltZVBhcnRzID0gKGxvY2FsZSwgcmVmUGFydHMsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgZGF0ZSA9IGdldE5vcm1hbGl6ZWREYXRlKHJlZlBhcnRzKTtcbiAgcmV0dXJuIGdldERhdGVUaW1lRm9ybWF0KGxvY2FsZSwgb3B0aW9ucykuZm9ybWF0VG9QYXJ0cyhkYXRlKTtcbn07XG4vKipcbiAqIFdyYXBwZXIgZnVuY3Rpb24gZm9yIEludGwuRGF0ZVRpbWVGb3JtYXQuXG4gKiBBbGxvd3MgZGV2ZWxvcGVycyB0byBhcHBseSBhbiBhbGxvd2VkIGZvcm1hdCB0byBEYXRldGltZVBhcnRzLlxuICogVGhpcyBmdW5jdGlvbiBhbHNvIGhhcyBidWlsdCBpbiBzYWZlZ3VhcmRzIGZvciBvbGRlciBicm93c2VyIGJ1Z3NcbiAqIHdpdGggSW50bC5EYXRlVGltZUZvcm1hdC5cbiAqL1xuY29uc3QgZ2V0RGF0ZVRpbWVGb3JtYXQgPSAobG9jYWxlLCBvcHRpb25zKSA9PiB7XG4gIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyksIHtcbiAgICB0aW1lWm9uZTogJ1VUQydcbiAgfSkpO1xufTtcbi8qKlxuICogR2V0cyBhIGxvY2FsaXplZCB2ZXJzaW9uIG9mIFwiVG9kYXlcIlxuICogRmFsbHMgYmFjayB0byBcIlRvZGF5XCIgaW4gRW5nbGlzaCBmb3JcbiAqIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgUmVsYXRpdmVUaW1lRm9ybWF0LlxuICovXG5jb25zdCBnZXRUb2RheUxhYmVsID0gbG9jYWxlID0+IHtcbiAgaWYgKCdSZWxhdGl2ZVRpbWVGb3JtYXQnIGluIEludGwpIHtcbiAgICBjb25zdCBsYWJlbCA9IG5ldyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdChsb2NhbGUsIHtcbiAgICAgIG51bWVyaWM6ICdhdXRvJ1xuICAgIH0pLmZvcm1hdCgwLCAnZGF5Jyk7XG4gICAgcmV0dXJuIGxhYmVsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbGFiZWwuc2xpY2UoMSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICdUb2RheSc7XG4gIH1cbn07XG4vKipcbiAqIFdoZW4gY2FsbGluZyB0b0lTT1N0cmluZygpLCB0aGUgYnJvd3NlclxuICogd2lsbCBjb252ZXJ0IHRoZSBkYXRlIHRvIFVUQyB0aW1lIGJ5IGVpdGhlciBhZGRpbmdcbiAqIG9yIHN1YnRyYWN0aW5nIHRoZSB0aW1lIHpvbmUgb2Zmc2V0LlxuICogVG8gd29yayBhcm91bmQgdGhpcywgd2UgbmVlZCB0byBlaXRoZXIgYWRkXG4gKiBvciBzdWJ0cmFjdCB0aGUgdGltZSB6b25lIG9mZnNldCB0byB0aGUgRGF0ZVxuICogb2JqZWN0IHByaW9yIHRvIGNhbGxpbmcgdG9JU09TdHJpbmcoKS5cbiAqIFRoaXMgYWxsb3dzIHVzIHRvIGdldCBhbiBJU08gc3RyaW5nXG4gKiB0aGF0IGlzIGluIHRoZSB1c2VyJ3MgdGltZSB6b25lLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBUaW1lIHpvbmUgb2Zmc2V0IGlzIDI0MFxuICogTWVhbmluZzogVGhlIGJyb3dzZXIgbmVlZHMgdG8gYWRkIDI0MCBtaW51dGVzXG4gKiB0byB0aGUgRGF0ZSBvYmplY3QgdG8gZ2V0IFVUQyB0aW1lLlxuICogV2hhdCBJb25pYyBkb2VzOiBXZSBzdWJ0cmFjdCAyNDAgbWludXRlc1xuICogZnJvbSB0aGUgRGF0ZSBvYmplY3QuIFRoZSBicm93c2VyIHRoZW4gYWRkc1xuICogMjQwIG1pbnV0ZXMgaW4gdG9JU09TdHJpbmcoKS4gVGhlIHJlc3VsdFxuICogaXMgYSB0aW1lIHRoYXQgaXMgaW4gdGhlIHVzZXIncyB0aW1lIHpvbmVcbiAqIGFuZCBub3QgVVRDLlxuICpcbiAqIE5vdGU6IFNvbWUgdGltZXpvbmVzIGluY2x1ZGUgbWludXRlIGFkanVzdG1lbnRzXG4gKiBzdWNoIGFzIDMwIG9yIDQ1IG1pbnV0ZXMuIFRoaXMgaXMgd2h5IHdlIHVzZSBzZXRNaW51dGVzXG4gKiBpbnN0ZWFkIG9mIHNldEhvdXJzLlxuICogRXhhbXBsZTogSW5kaWEgU3RhbmRhcmQgVGltZVxuICogVGltZXpvbmUgb2Zmc2V0OiAtMzMwID0gLTUuNSBob3Vycy5cbiAqXG4gKiBMaXN0IG9mIHRpbWV6b25lcyB3aXRoIDMwIGFuZCA0NSBtaW51dGUgdGltZXpvbmVzOlxuICogaHR0cHM6Ly93d3cudGltZWFuZGRhdGUuY29tL3RpbWUvdGltZS16b25lcy1pbnRlcmVzdGluZy5odG1sXG4gKi9cbmNvbnN0IHJlbW92ZURhdGVUek9mZnNldCA9IGRhdGUgPT4ge1xuICBjb25zdCB0ek9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgZGF0ZS5zZXRNaW51dGVzKGRhdGUuZ2V0TWludXRlcygpIC0gdHpPZmZzZXQpO1xuICByZXR1cm4gZGF0ZTtcbn07XG5jb25zdCBEQVRFX0FNID0gcmVtb3ZlRGF0ZVR6T2Zmc2V0KG5ldyBEYXRlKCcyMDIyVDAxOjAwJykpO1xuY29uc3QgREFURV9QTSA9IHJlbW92ZURhdGVUek9mZnNldChuZXcgRGF0ZSgnMjAyMlQxMzowMCcpKTtcbi8qKlxuICogRm9ybWF0cyB0aGUgbG9jYWxlJ3Mgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBkYXkgcGVyaW9kIChhbS9wbSkgZm9yIGEgZ2l2ZW5cbiAqIHJlZiBwYXJ0cyBkYXkgcGVyaW9kLlxuICpcbiAqIEBwYXJhbSBsb2NhbGUgVGhlIGxvY2FsZSB0byBmb3JtYXQgdGhlIGRheSBwZXJpb2QgaW4uXG4gKiBAcGFyYW0gdmFsdWUgVGhlIGRhdGUgc3RyaW5nLCBpbiBJU08gZm9ybWF0LlxuICogQHJldHVybnMgVGhlIGxvY2FsaXplZCBkYXkgcGVyaW9kIChhbS9wbSkgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIHZhbHVlLlxuICovXG5jb25zdCBnZXRMb2NhbGl6ZWREYXlQZXJpb2QgPSAobG9jYWxlLCBkYXlQZXJpb2QpID0+IHtcbiAgY29uc3QgZGF0ZSA9IGRheVBlcmlvZCA9PT0gJ2FtJyA/IERBVEVfQU0gOiBEQVRFX1BNO1xuICBjb25zdCBsb2NhbGl6ZWREYXlQZXJpb2QgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHtcbiAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgdGltZVpvbmU6ICdVVEMnXG4gIH0pLmZvcm1hdFRvUGFydHMoZGF0ZSkuZmluZChwYXJ0ID0+IHBhcnQudHlwZSA9PT0gJ2RheVBlcmlvZCcpO1xuICBpZiAobG9jYWxpemVkRGF5UGVyaW9kKSB7XG4gICAgcmV0dXJuIGxvY2FsaXplZERheVBlcmlvZC52YWx1ZTtcbiAgfVxuICByZXR1cm4gZ2V0Rm9ybWF0dGVkRGF5UGVyaW9kKGRheVBlcmlvZCk7XG59O1xuLyoqXG4gKiBGb3JtYXRzIHRoZSBkYXRldGltZSdzIHZhbHVlIHRvIGEgc3RyaW5nLCBmb3IgdXNlIGluIHRoZSBuYXRpdmUgaW5wdXQuXG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBmb3JtYXQsIGVpdGhlciBhbiBJU08gc3RyaW5nIG9yIGFuIGFycmF5IHRoZXJlb2YuXG4gKi9cbmNvbnN0IGZvcm1hdFZhbHVlID0gdmFsdWUgPT4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5qb2luKCcsJykgOiB2YWx1ZTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY3VycmVudCBkYXRlIGFzXG4gKiBhbiBJU08gc3RyaW5nIGluIHRoZSB1c2VyJ3NcbiAqIHRpbWUgem9uZS5cbiAqL1xuY29uc3QgZ2V0VG9kYXkgPSAoKSA9PiB7XG4gIC8qKlxuICAgKiBpb24tZGF0ZXRpbWUgaW50ZW50aW9uYWxseSBkb2VzIG5vdFxuICAgKiBwYXJzZSB0aW1lIHpvbmVzL2RvIGF1dG9tYXRpYyB0aW1lIHpvbmVcbiAgICogY29udmVyc2lvbiB3aGVuIGFjY2VwdGluZyB1c2VyIGlucHV0LlxuICAgKiBIb3dldmVyIHdoZW4gd2UgZ2V0IHRvZGF5J3MgZGF0ZSBzdHJpbmcsXG4gICAqIHdlIHdhbnQgaXQgZm9ybWF0dGVkIHJlbGF0aXZlIHRvIHRoZSB1c2VyJ3NcbiAgICogdGltZSB6b25lLlxuICAgKlxuICAgKiBXaGVuIGNhbGxpbmcgdG9JU09TdHJpbmcoKSwgdGhlIGJyb3dzZXJcbiAgICogd2lsbCBjb252ZXJ0IHRoZSBkYXRlIHRvIFVUQyB0aW1lIGJ5IGVpdGhlciBhZGRpbmdcbiAgICogb3Igc3VidHJhY3RpbmcgdGhlIHRpbWUgem9uZSBvZmZzZXQuXG4gICAqIFRvIHdvcmsgYXJvdW5kIHRoaXMsIHdlIG5lZWQgdG8gZWl0aGVyIGFkZFxuICAgKiBvciBzdWJ0cmFjdCB0aGUgdGltZSB6b25lIG9mZnNldCB0byB0aGUgRGF0ZVxuICAgKiBvYmplY3QgcHJpb3IgdG8gY2FsbGluZyB0b0lTT1N0cmluZygpLlxuICAgKiBUaGlzIGFsbG93cyB1cyB0byBnZXQgYW4gSVNPIHN0cmluZ1xuICAgKiB0aGF0IGlzIGluIHRoZSB1c2VyJ3MgdGltZSB6b25lLlxuICAgKi9cbiAgcmV0dXJuIHJlbW92ZURhdGVUek9mZnNldChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpO1xufTtcbmNvbnN0IG1pbnV0ZXMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwLCAyMSwgMjIsIDIzLCAyNCwgMjUsIDI2LCAyNywgMjgsIDI5LCAzMCwgMzEsIDMyLCAzMywgMzQsIDM1LCAzNiwgMzcsIDM4LCAzOSwgNDAsIDQxLCA0MiwgNDMsIDQ0LCA0NSwgNDYsIDQ3LCA0OCwgNDksIDUwLCA1MSwgNTIsIDUzLCA1NCwgNTUsIDU2LCA1NywgNTgsIDU5XTtcbi8vIGgxMSBob3VyIHN5c3RlbSB1c2VzIDAtMTEuIE1pZG5pZ2h0IHN0YXJ0cyBhdCAwOjAwYW0uXG5jb25zdCBob3VyMTEgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExXTtcbi8vIGgxMiBob3VyIHN5c3RlbSB1c2VzIDAtMTIuIE1pZG5pZ2h0IHN0YXJ0cyBhdCAxMjowMGFtLlxuY29uc3QgaG91cjEyID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMV07XG4vLyBoMjMgaG91ciBzeXN0ZW0gdXNlcyAwLTIzLiBNaWRuaWdodCBzdGFydHMgYXQgMDowMC5cbmNvbnN0IGhvdXIyMyA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjAsIDIxLCAyMiwgMjNdO1xuLy8gaDI0IGhvdXIgc3lzdGVtIHVzZXMgMS0yNC4gTWlkbmlnaHQgc3RhcnRzIGF0IDI0OjAwLlxuY29uc3QgaG91cjI0ID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMCwgMjEsIDIyLCAyMywgMF07XG4vKipcbiAqIEdpdmVuIGEgbG9jYWxlIGFuZCBhIG1vZGUsXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBmb3JtYXR0ZWQgZGF5c1xuICogb2YgdGhlIHdlZWsuIGlPUyBzaG91bGQgZGlzcGxheSBkYXlzXG4gKiBzdWNoIGFzIFwiTW9uXCIgb3IgXCJUdWVcIi5cbiAqIE1EIHNob3VsZCBkaXNwbGF5IGRheXMgc3VjaCBhcyBcIk1cIlxuICogb3IgXCJUXCIuXG4gKi9cbmNvbnN0IGdldERheXNPZldlZWsgPSAobG9jYWxlLCBtb2RlLCBmaXJzdERheU9mV2VlayA9IDApID0+IHtcbiAgLyoqXG4gICAqIE5vdiAxc3QsIDIwMjAgc3RhcnRzIG9uIGEgU3VuZGF5LlxuICAgKiBpb24tZGF0ZXRpbWUgYXNzdW1lcyB3ZWVrcyBzdGFydCBvbiBTdW5kYXksXG4gICAqIGJ1dCBpcyBjb25maWd1cmFibGUgdmlhIGBmaXJzdERheU9mV2Vla2AuXG4gICAqL1xuICBjb25zdCB3ZWVrZGF5Rm9ybWF0ID0gbW9kZSA9PT0gJ2lvcycgPyAnc2hvcnQnIDogJ25hcnJvdyc7XG4gIGNvbnN0IGludGwgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHtcbiAgICB3ZWVrZGF5OiB3ZWVrZGF5Rm9ybWF0XG4gIH0pO1xuICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZSgnMTEvMDEvMjAyMCcpO1xuICBjb25zdCBkYXlzT2ZXZWVrID0gW107XG4gIC8qKlxuICAgKiBGb3IgZWFjaCBkYXkgb2YgdGhlIHdlZWssXG4gICAqIGdldCB0aGUgZGF5IG5hbWUuXG4gICAqL1xuICBmb3IgKGxldCBpID0gZmlyc3REYXlPZldlZWs7IGkgPCBmaXJzdERheU9mV2VlayArIDc7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoc3RhcnREYXRlKTtcbiAgICBjdXJyZW50RGF0ZS5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSArIGkpO1xuICAgIGRheXNPZldlZWsucHVzaChpbnRsLmZvcm1hdChjdXJyZW50RGF0ZSkpO1xuICB9XG4gIHJldHVybiBkYXlzT2ZXZWVrO1xufTtcbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGVcbiAqIGRheXMgaW4gYSBtb250aCBmb3IgYSBnaXZlbiB5ZWFyLiBWYWx1ZXMgYXJlXG4gKiBhbGlnbmVkIHdpdGggYSB3ZWVrIGNhbGVuZGFyIHN0YXJ0aW5nIG9uXG4gKiB0aGUgZmlyc3REYXlPZldlZWsgdmFsdWUgKFN1bmRheSBieSBkZWZhdWx0KVxuICogdXNpbmcgbnVsbCB2YWx1ZXMuXG4gKi9cbmNvbnN0IGdldERheXNPZk1vbnRoID0gKG1vbnRoLCB5ZWFyLCBmaXJzdERheU9mV2VlaykgPT4ge1xuICBjb25zdCBudW1EYXlzID0gZ2V0TnVtRGF5c0luTW9udGgobW9udGgsIHllYXIpO1xuICBjb25zdCBmaXJzdE9mTW9udGggPSBuZXcgRGF0ZShgJHttb250aH0vMS8ke3llYXJ9YCkuZ2V0RGF5KCk7XG4gIC8qKlxuICAgKiBUbyBnZXQgdGhlIGZpcnN0IGRheSBvZiB0aGUgbW9udGggYWxpZ25lZCBvbiB0aGUgY29ycmVjdFxuICAgKiBkYXkgb2YgdGhlIHdlZWssIHdlIG5lZWQgdG8gZGV0ZXJtaW5lIGhvdyBtYW55IFwiZmlsbGVyXCIgZGF5c1xuICAgKiB0byBnZW5lcmF0ZS4gVGhlc2UgZmlsbGVyIGRheXMgYXMgZW1wdHkvZGlzYWJsZWQgYnV0dG9uc1xuICAgKiB0aGF0IGZpbGwgdGhlIHNwYWNlIG9mIHRoZSBkYXlzIG9mIHRoZSB3ZWVrIGJlZm9yZSB0aGUgZmlyc3RcbiAgICogb2YgdGhlIG1vbnRoLlxuICAgKlxuICAgKiBUaGVyZSBhcmUgdHdvIGNhc2VzIGhlcmU6XG4gICAqXG4gICAqIDEuIElmIGZpcnN0T2ZNb250aCA9IDQsIGZpcnN0RGF5T2ZXZWVrID0gMCB0aGVuIHRoZSBvZmZzZXRcbiAgICogaXMgKDQgLSAoMCArIDEpKSA9IDMuIFNpbmNlIHRoZSBvZmZzZXQgbG9vcCBnb2VzIGZyb20gMCB0byAzIGluY2x1c2l2ZSxcbiAgICogdGhpcyB3aWxsIGdlbmVyYXRlIDQgZmlsbGVyIGRheXMgKDAsIDEsIDIsIDMpLCBhbmQgdGhlbiBkYXkgb2Ygd2VlayA0IHdpbGwgaGF2ZVxuICAgKiB0aGUgZmlyc3QgZGF5IG9mIHRoZSBtb250aC5cbiAgICpcbiAgICogMi4gSWYgZmlyc3RPZk1vbnRoID0gMiwgZmlyc3REYXlPZldlZWsgPSA0IHRoZW4gdGhlIG9mZnNldFxuICAgKiBpcyAoNiAtICg0IC0gMikpID0gNC4gU2luY2UgdGhlIG9mZnNldCBsb29wIGdvZXMgZnJvbSAwIHRvIDQgaW5jbHVzaXZlLFxuICAgKiB0aGlzIHdpbGwgZ2VuZXJhdGUgNSBmaWxsZXIgZGF5cyAoMCwgMSwgMiwgMywgNCksIGFuZCB0aGVuIGRheSBvZiB3ZWVrIDUgd2lsbCBoYXZlXG4gICAqIHRoZSBmaXJzdCBkYXkgb2YgdGhlIG1vbnRoLlxuICAgKi9cbiAgY29uc3Qgb2Zmc2V0ID0gZmlyc3RPZk1vbnRoID49IGZpcnN0RGF5T2ZXZWVrID8gZmlyc3RPZk1vbnRoIC0gKGZpcnN0RGF5T2ZXZWVrICsgMSkgOiA2IC0gKGZpcnN0RGF5T2ZXZWVrIC0gZmlyc3RPZk1vbnRoKTtcbiAgbGV0IGRheXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtRGF5czsgaSsrKSB7XG4gICAgZGF5cy5wdXNoKHtcbiAgICAgIGRheTogaSxcbiAgICAgIGRheU9mV2VlazogKG9mZnNldCArIGkpICUgN1xuICAgIH0pO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IG9mZnNldDsgaSsrKSB7XG4gICAgZGF5cyA9IFt7XG4gICAgICBkYXk6IG51bGwsXG4gICAgICBkYXlPZldlZWs6IG51bGxcbiAgICB9LCAuLi5kYXlzXTtcbiAgfVxuICByZXR1cm4gZGF5cztcbn07XG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgb2YgcHJlLWRlZmluZWQgaG91clxuICogdmFsdWVzIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBob3VyQ3ljbGUuXG4gKi9cbmNvbnN0IGdldEhvdXJEYXRhID0gaG91ckN5Y2xlID0+IHtcbiAgc3dpdGNoIChob3VyQ3ljbGUpIHtcbiAgICBjYXNlICdoMTEnOlxuICAgICAgcmV0dXJuIGhvdXIxMTtcbiAgICBjYXNlICdoMTInOlxuICAgICAgcmV0dXJuIGhvdXIxMjtcbiAgICBjYXNlICdoMjMnOlxuICAgICAgcmV0dXJuIGhvdXIyMztcbiAgICBjYXNlICdoMjQnOlxuICAgICAgcmV0dXJuIGhvdXIyNDtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhvdXIgY3ljbGUgXCIke2hvdXJDeWNsZX1cImApO1xuICB9XG59O1xuLyoqXG4gKiBHaXZlbiBhIGxvY2FsLCByZWZlcmVuY2UgZGF0ZXRpbWUgcGFydHMgYW5kIG9wdGlvblxuICogbWF4L21pbiBib3VuZCBkYXRldGltZSBwYXJ0cywgY2FsY3VsYXRlIHRoZSBhY2NlcHRhYmxlXG4gKiBob3VyIGFuZCBtaW51dGUgdmFsdWVzIGFjY29yZGluZyB0byB0aGUgYm91bmRzIGFuZCBsb2NhbGUuXG4gKi9cbmNvbnN0IGdlbmVyYXRlVGltZSA9IChsb2NhbGUsIHJlZlBhcnRzLCBob3VyQ3ljbGUgPSAnaDEyJywgbWluUGFydHMsIG1heFBhcnRzLCBob3VyVmFsdWVzLCBtaW51dGVWYWx1ZXMpID0+IHtcbiAgY29uc3QgY29tcHV0ZWRIb3VyQ3ljbGUgPSBnZXRIb3VyQ3ljbGUobG9jYWxlLCBob3VyQ3ljbGUpO1xuICBjb25zdCB1c2UyNEhvdXIgPSBpczI0SG91cihjb21wdXRlZEhvdXJDeWNsZSk7XG4gIGxldCBwcm9jZXNzZWRIb3VycyA9IGdldEhvdXJEYXRhKGNvbXB1dGVkSG91ckN5Y2xlKTtcbiAgbGV0IHByb2Nlc3NlZE1pbnV0ZXMgPSBtaW51dGVzO1xuICBsZXQgaXNBTUFsbG93ZWQgPSB0cnVlO1xuICBsZXQgaXNQTUFsbG93ZWQgPSB0cnVlO1xuICBpZiAoaG91clZhbHVlcykge1xuICAgIHByb2Nlc3NlZEhvdXJzID0gcHJvY2Vzc2VkSG91cnMuZmlsdGVyKGhvdXIgPT4gaG91clZhbHVlcy5pbmNsdWRlcyhob3VyKSk7XG4gIH1cbiAgaWYgKG1pbnV0ZVZhbHVlcykge1xuICAgIHByb2Nlc3NlZE1pbnV0ZXMgPSBwcm9jZXNzZWRNaW51dGVzLmZpbHRlcihtaW51dGUgPT4gbWludXRlVmFsdWVzLmluY2x1ZGVzKG1pbnV0ZSkpO1xuICB9XG4gIGlmIChtaW5QYXJ0cykge1xuICAgIC8qKlxuICAgICAqIElmIHJlZiBkYXkgaXMgdGhlIHNhbWUgYXMgdGhlXG4gICAgICogbWluaW11bSBhbGxvd2VkIGRheSwgZmlsdGVyIGhvdXIvbWludXRlXG4gICAgICogdmFsdWVzIGFjY29yZGluZyB0byBtaW4gaG91ciBhbmQgbWludXRlLlxuICAgICAqL1xuICAgIGlmIChpc1NhbWVEYXkocmVmUGFydHMsIG1pblBhcnRzKSkge1xuICAgICAgLyoqXG4gICAgICAgKiBVc2VycyBtYXkgbm90IGFsd2F5cyBzZXQgdGhlIGhvdXIvbWludXRlIGZvclxuICAgICAgICogbWluIHZhbHVlIChpLmUuIDIwMjEtMDYtMDIpIHNvIHdlIHNob3VsZCBhbGxvd1xuICAgICAgICogYWxsIGhvdXJzL21pbnV0ZXMgaW4gdGhhdCBjYXNlLlxuICAgICAgICovXG4gICAgICBpZiAobWluUGFydHMuaG91ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb2Nlc3NlZEhvdXJzID0gcHJvY2Vzc2VkSG91cnMuZmlsdGVyKGhvdXIgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZEhvdXIgPSByZWZQYXJ0cy5hbXBtID09PSAncG0nID8gKGhvdXIgKyAxMikgJSAyNCA6IGhvdXI7XG4gICAgICAgICAgcmV0dXJuICh1c2UyNEhvdXIgPyBob3VyIDogY29udmVydGVkSG91cikgPj0gbWluUGFydHMuaG91cjtcbiAgICAgICAgfSk7XG4gICAgICAgIGlzQU1BbGxvd2VkID0gbWluUGFydHMuaG91ciA8IDEzO1xuICAgICAgfVxuICAgICAgaWYgKG1pblBhcnRzLm1pbnV0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbWluaW11bSBtaW51dGUgcmFuZ2Ugc2hvdWxkIG5vdCBiZSBlbmZvcmNlZCB3aGVuXG4gICAgICAgICAqIHRoZSBob3VyIGlzIGdyZWF0ZXIgdGhhbiB0aGUgbWluIGhvdXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEZvciBleGFtcGxlIHdpdGggYSBtaW5pbXVtIHJhbmdlIG9mIDA5OjMwLCB1c2Vyc1xuICAgICAgICAgKiBzaG91bGQgYmUgYWJsZSB0byBzZWxlY3QgMTA6MDAtMTA6MjkgYW5kIGJleW9uZC5cbiAgICAgICAgICovXG4gICAgICAgIGxldCBpc1Bhc3RNaW5Ib3VyID0gZmFsc2U7XG4gICAgICAgIGlmIChtaW5QYXJ0cy5ob3VyICE9PSB1bmRlZmluZWQgJiYgcmVmUGFydHMuaG91ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHJlZlBhcnRzLmhvdXIgPiBtaW5QYXJ0cy5ob3VyKSB7XG4gICAgICAgICAgICBpc1Bhc3RNaW5Ib3VyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzc2VkTWludXRlcyA9IHByb2Nlc3NlZE1pbnV0ZXMuZmlsdGVyKG1pbnV0ZSA9PiB7XG4gICAgICAgICAgaWYgKGlzUGFzdE1pbkhvdXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWludXRlID49IG1pblBhcnRzLm1pbnV0ZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIElmIHJlZiBkYXkgaXMgYmVmb3JlIG1pbmltdW1cbiAgICAgICAqIGRheSBkbyBub3QgcmVuZGVyIGFueSBob3Vycy9taW51dGUgdmFsdWVzXG4gICAgICAgKi9cbiAgICB9IGVsc2UgaWYgKGlzQmVmb3JlKHJlZlBhcnRzLCBtaW5QYXJ0cykpIHtcbiAgICAgIHByb2Nlc3NlZEhvdXJzID0gW107XG4gICAgICBwcm9jZXNzZWRNaW51dGVzID0gW107XG4gICAgICBpc0FNQWxsb3dlZCA9IGlzUE1BbGxvd2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChtYXhQYXJ0cykge1xuICAgIC8qKlxuICAgICAqIElmIHJlZiBkYXkgaXMgdGhlIHNhbWUgYXMgdGhlXG4gICAgICogbWF4aW11bSBhbGxvd2VkIGRheSwgZmlsdGVyIGhvdXIvbWludXRlXG4gICAgICogdmFsdWVzIGFjY29yZGluZyB0byBtYXggaG91ciBhbmQgbWludXRlLlxuICAgICAqL1xuICAgIGlmIChpc1NhbWVEYXkocmVmUGFydHMsIG1heFBhcnRzKSkge1xuICAgICAgLyoqXG4gICAgICAgKiBVc2VycyBtYXkgbm90IGFsd2F5cyBzZXQgdGhlIGhvdXIvbWludXRlIGZvclxuICAgICAgICogbWF4IHZhbHVlIChpLmUuIDIwMjEtMDYtMDIpIHNvIHdlIHNob3VsZCBhbGxvd1xuICAgICAgICogYWxsIGhvdXJzL21pbnV0ZXMgaW4gdGhhdCBjYXNlLlxuICAgICAgICovXG4gICAgICBpZiAobWF4UGFydHMuaG91ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb2Nlc3NlZEhvdXJzID0gcHJvY2Vzc2VkSG91cnMuZmlsdGVyKGhvdXIgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZEhvdXIgPSByZWZQYXJ0cy5hbXBtID09PSAncG0nID8gKGhvdXIgKyAxMikgJSAyNCA6IGhvdXI7XG4gICAgICAgICAgcmV0dXJuICh1c2UyNEhvdXIgPyBob3VyIDogY29udmVydGVkSG91cikgPD0gbWF4UGFydHMuaG91cjtcbiAgICAgICAgfSk7XG4gICAgICAgIGlzUE1BbGxvd2VkID0gbWF4UGFydHMuaG91ciA+PSAxMjtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhQYXJ0cy5taW51dGUgIT09IHVuZGVmaW5lZCAmJiByZWZQYXJ0cy5ob3VyID09PSBtYXhQYXJ0cy5ob3VyKSB7XG4gICAgICAgIC8vIFRoZSBhdmFpbGFibGUgbWludXRlcyBzaG91bGQgb25seSBiZSBmaWx0ZXJlZCB3aGVuIHRoZSBob3VyIGlzIHRoZSBzYW1lIGFzIHRoZSBtYXggaG91ci5cbiAgICAgICAgLy8gRm9yIGV4YW1wbGUgaWYgdGhlIG1heCBob3VyIGlzIDEwOjMwIGFuZCB0aGUgY3VycmVudCBob3VyIGlzIDEwOjAwLFxuICAgICAgICAvLyB1c2VycyBzaG91bGQgYmUgYWJsZSB0byBzZWxlY3QgMDAtMzAgbWludXRlcy5cbiAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgaG91ciBpcyAwOTowMCwgdXNlcnMgc2hvdWxkIGJlIGFibGUgdG8gc2VsZWN0IDAwLTYwIG1pbnV0ZXMuXG4gICAgICAgIHByb2Nlc3NlZE1pbnV0ZXMgPSBwcm9jZXNzZWRNaW51dGVzLmZpbHRlcihtaW51dGUgPT4gbWludXRlIDw9IG1heFBhcnRzLm1pbnV0ZSk7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIElmIHJlZiBkYXkgaXMgYWZ0ZXIgbWluaW11bVxuICAgICAgICogZGF5IGRvIG5vdCByZW5kZXIgYW55IGhvdXJzL21pbnV0ZSB2YWx1ZXNcbiAgICAgICAqL1xuICAgIH0gZWxzZSBpZiAoaXNBZnRlcihyZWZQYXJ0cywgbWF4UGFydHMpKSB7XG4gICAgICBwcm9jZXNzZWRIb3VycyA9IFtdO1xuICAgICAgcHJvY2Vzc2VkTWludXRlcyA9IFtdO1xuICAgICAgaXNBTUFsbG93ZWQgPSBpc1BNQWxsb3dlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIGhvdXJzOiBwcm9jZXNzZWRIb3VycyxcbiAgICBtaW51dGVzOiBwcm9jZXNzZWRNaW51dGVzLFxuICAgIGFtOiBpc0FNQWxsb3dlZCxcbiAgICBwbTogaXNQTUFsbG93ZWRcbiAgfTtcbn07XG4vKipcbiAqIEdpdmVuIERhdGV0aW1lUGFydHMsIGdlbmVyYXRlIHRoZSBwcmV2aW91cyxcbiAqIGN1cnJlbnQsIGFuZCBhbmQgbmV4dCBtb250aHMuXG4gKi9cbmNvbnN0IGdlbmVyYXRlTW9udGhzID0gKHJlZlBhcnRzLCBmb3JjZWREYXRlKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnQgPSB7XG4gICAgbW9udGg6IHJlZlBhcnRzLm1vbnRoLFxuICAgIHllYXI6IHJlZlBhcnRzLnllYXIsXG4gICAgZGF5OiByZWZQYXJ0cy5kYXlcbiAgfTtcbiAgLyoqXG4gICAqIElmIHdlJ3JlIGZvcmNpbmcgYSBtb250aCB0byBhcHBlYXIsIGFuZCBpdCdzIGRpZmZlcmVudCBmcm9tIHRoZSBjdXJyZW50IG1vbnRoLFxuICAgKiBlbnN1cmUgaXQgYXBwZWFycyBieSByZXBsYWNpbmcgdGhlIG5leHQgb3IgcHJldmlvdXMgbW9udGggYXMgYXBwcm9wcmlhdGUuXG4gICAqL1xuICBpZiAoZm9yY2VkRGF0ZSAhPT0gdW5kZWZpbmVkICYmIChyZWZQYXJ0cy5tb250aCAhPT0gZm9yY2VkRGF0ZS5tb250aCB8fCByZWZQYXJ0cy55ZWFyICE9PSBmb3JjZWREYXRlLnllYXIpKSB7XG4gICAgY29uc3QgZm9yY2VkID0ge1xuICAgICAgbW9udGg6IGZvcmNlZERhdGUubW9udGgsXG4gICAgICB5ZWFyOiBmb3JjZWREYXRlLnllYXIsXG4gICAgICBkYXk6IGZvcmNlZERhdGUuZGF5XG4gICAgfTtcbiAgICBjb25zdCBmb3JjZWRNb250aElzQmVmb3JlID0gaXNCZWZvcmUoZm9yY2VkLCBjdXJyZW50KTtcbiAgICByZXR1cm4gZm9yY2VkTW9udGhJc0JlZm9yZSA/IFtmb3JjZWQsIGN1cnJlbnQsIGdldE5leHRNb250aChyZWZQYXJ0cyldIDogW2dldFByZXZpb3VzTW9udGgocmVmUGFydHMpLCBjdXJyZW50LCBmb3JjZWRdO1xuICB9XG4gIHJldHVybiBbZ2V0UHJldmlvdXNNb250aChyZWZQYXJ0cyksIGN1cnJlbnQsIGdldE5leHRNb250aChyZWZQYXJ0cyldO1xufTtcbmNvbnN0IGdldE1vbnRoQ29sdW1uRGF0YSA9IChsb2NhbGUsIHJlZlBhcnRzLCBtaW5QYXJ0cywgbWF4UGFydHMsIG1vbnRoVmFsdWVzLCBmb3JtYXRPcHRpb25zID0ge1xuICBtb250aDogJ2xvbmcnXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICB5ZWFyXG4gIH0gPSByZWZQYXJ0cztcbiAgY29uc3QgbW9udGhzID0gW107XG4gIGlmIChtb250aFZhbHVlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IHByb2Nlc3NlZE1vbnRocyA9IG1vbnRoVmFsdWVzO1xuICAgIGlmICgobWF4UGFydHMgPT09IG51bGwgfHwgbWF4UGFydHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1heFBhcnRzLm1vbnRoKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcm9jZXNzZWRNb250aHMgPSBwcm9jZXNzZWRNb250aHMuZmlsdGVyKG1vbnRoID0+IG1vbnRoIDw9IG1heFBhcnRzLm1vbnRoKTtcbiAgICB9XG4gICAgaWYgKChtaW5QYXJ0cyA9PT0gbnVsbCB8fCBtaW5QYXJ0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWluUGFydHMubW9udGgpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHByb2Nlc3NlZE1vbnRocyA9IHByb2Nlc3NlZE1vbnRocy5maWx0ZXIobW9udGggPT4gbW9udGggPj0gbWluUGFydHMubW9udGgpO1xuICAgIH1cbiAgICBwcm9jZXNzZWRNb250aHMuZm9yRWFjaChwcm9jZXNzZWRNb250aCA9PiB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoYCR7cHJvY2Vzc2VkTW9udGh9LzEvJHt5ZWFyfSBHTVQrMDAwMGApO1xuICAgICAgY29uc3QgbW9udGhTdHJpbmcgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZm9ybWF0T3B0aW9ucyksIHtcbiAgICAgICAgdGltZVpvbmU6ICdVVEMnXG4gICAgICB9KSkuZm9ybWF0KGRhdGUpO1xuICAgICAgbW9udGhzLnB1c2goe1xuICAgICAgICB0ZXh0OiBtb250aFN0cmluZyxcbiAgICAgICAgdmFsdWU6IHByb2Nlc3NlZE1vbnRoXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtYXhNb250aCA9IG1heFBhcnRzICYmIG1heFBhcnRzLnllYXIgPT09IHllYXIgPyBtYXhQYXJ0cy5tb250aCA6IDEyO1xuICAgIGNvbnN0IG1pbk1vbnRoID0gbWluUGFydHMgJiYgbWluUGFydHMueWVhciA9PT0geWVhciA/IG1pblBhcnRzLm1vbnRoIDogMTtcbiAgICBmb3IgKGxldCBpID0gbWluTW9udGg7IGkgPD0gbWF4TW9udGg7IGkrKykge1xuICAgICAgLyoqXG4gICAgICAgKlxuICAgICAgICogVGhlcmUgaXMgYSBidWcgb24gaU9TIDE0IHdoZXJlXG4gICAgICAgKiBJbnRsLkRhdGVUaW1lRm9ybWF0IHRha2VzIGludG8gYWNjb3VudFxuICAgICAgICogdGhlIGxvY2FsIHRpbWV6b25lIG9mZnNldCB3aGVuIGZvcm1hdHRpbmcgZGF0ZXMuXG4gICAgICAgKlxuICAgICAgICogRm9yY2luZyB0aGUgdGltZXpvbmUgdG8gJ1VUQycgZml4ZXMgdGhlIGlzc3VlLiBIb3dldmVyLFxuICAgICAgICogd2Ugc2hvdWxkIGtlZXAgdGhpcyB3b3JrYXJvdW5kIGFzIGl0IGlzIHNhZmVyLiBJbiB0aGUgZXZlbnRcbiAgICAgICAqIHRoaXMgYnJlYWtzIGluIGFub3RoZXIgYnJvd3Nlciwgd2Ugd2lsbCBub3QgYmUgaW1wYWN0ZWRcbiAgICAgICAqIGJlY2F1c2UgYWxsIGRhdGVzIHdpbGwgYmUgaW50ZXJwcmV0ZWQgaW4gVVRDLlxuICAgICAgICpcbiAgICAgICAqIEV4YW1wbGU6XG4gICAgICAgKiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7IG1vbnRoOiAnbG9uZycgfSkuZm9ybWF0KG5ldyBEYXRlKCdTYXQgQXByIDAxIDIwMDYgMDA6MDA6MDAgR01ULTA0MDAgKEVEVCknKSkgLy8gXCJNYXJjaFwiXG4gICAgICAgKiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7IG1vbnRoOiAnbG9uZycsIHRpbWVab25lOiAnVVRDJyB9KS5mb3JtYXQobmV3IERhdGUoJ1NhdCBBcHIgMDEgMjAwNiAwMDowMDowMCBHTVQtMDQwMCAoRURUKScpKSAvLyBcIkFwcmlsXCJcbiAgICAgICAqXG4gICAgICAgKiBJbiBjZXJ0YWluIHRpbWV6b25lcywgaU9TIDE0IHNob3dzIHRoZSB3cm9uZ1xuICAgICAgICogZGF0ZSBmb3IgLnRvVVRDU3RyaW5nKCkuIFRvIGNvbWJhdCB0aGlzLCB3ZVxuICAgICAgICogZm9yY2UgYWxsIG9mIHRoZSB0aW1lem9uZXMgdG8gR01UKzAwMDAgKFVUQykuXG4gICAgICAgKlxuICAgICAgICogRXhhbXBsZTpcbiAgICAgICAqIFRpbWUgWm9uZTogQ2VudHJhbCBFdXJvcGVhbiBTdGFuZGFyZCBUaW1lXG4gICAgICAgKiBuZXcgRGF0ZSgnMS8xLzE5OTInKS50b1VUQ1N0cmluZygpIC8vIFwiVHVlLCAzMSBEZWMgMTk5MSAyMzowMDowMCBHTVRcIlxuICAgICAgICogbmV3IERhdGUoJzEvMS8xOTkyIEdNVCswMDAwJykudG9VVENTdHJpbmcoKSAvLyBcIldlZCwgMDEgSmFuIDE5OTIgMDA6MDA6MDAgR01UXCJcbiAgICAgICAqL1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGAke2l9LzEvJHt5ZWFyfSBHTVQrMDAwMGApO1xuICAgICAgY29uc3QgbW9udGhTdHJpbmcgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZm9ybWF0T3B0aW9ucyksIHtcbiAgICAgICAgdGltZVpvbmU6ICdVVEMnXG4gICAgICB9KSkuZm9ybWF0KGRhdGUpO1xuICAgICAgbW9udGhzLnB1c2goe1xuICAgICAgICB0ZXh0OiBtb250aFN0cmluZyxcbiAgICAgICAgdmFsdWU6IGlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbW9udGhzO1xufTtcbi8qKlxuICogUmV0dXJucyBpbmZvcm1hdGlvbiByZWdhcmRpbmdcbiAqIHNlbGVjdGFibGUgZGF0ZXMgKGkuZSAxc3QsIDJuZCwgM3JkLCBldGMpXG4gKiB3aXRoaW4gYSByZWZlcmVuY2UgbW9udGguXG4gKiBAcGFyYW0gbG9jYWxlIFRoZSBsb2NhbGUgdG8gZm9ybWF0IHRoZSBkYXRlIHdpdGhcbiAqIEBwYXJhbSByZWZQYXJ0cyBUaGUgcmVmZXJlbmNlIG1vbnRoL3llYXIgdG8gZ2VuZXJhdGUgZGF0ZXMgZm9yXG4gKiBAcGFyYW0gbWluUGFydHMgVGhlIG1pbmltdW0gYm91bmQgb24gdGhlIGRhdGUgdGhhdCBjYW4gYmUgcmV0dXJuZWRcbiAqIEBwYXJhbSBtYXhQYXJ0cyBUaGUgbWF4aW11bSBib3VuZCBvbiB0aGUgZGF0ZSB0aGF0IGNhbiBiZSByZXR1cm5lZFxuICogQHBhcmFtIGRheVZhbHVlcyBUaGUgYWxsb3dlZCBkYXRlIHZhbHVlc1xuICogQHJldHVybnMgRGF0ZSBkYXRhIHRvIGJlIHVzZWQgaW4gaW9uLXBpY2tlci1jb2x1bW5cbiAqL1xuY29uc3QgZ2V0RGF5Q29sdW1uRGF0YSA9IChsb2NhbGUsIHJlZlBhcnRzLCBtaW5QYXJ0cywgbWF4UGFydHMsIGRheVZhbHVlcywgZm9ybWF0T3B0aW9ucyA9IHtcbiAgZGF5OiAnbnVtZXJpYydcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIG1vbnRoLFxuICAgIHllYXJcbiAgfSA9IHJlZlBhcnRzO1xuICBjb25zdCBkYXlzID0gW107XG4gIC8qKlxuICAgKiBJZiB3ZSBoYXZlIG1heC9taW4gYm91bmRzIHRoYXQgaW4gdGhlIHNhbWVcbiAgICogbW9udGgveWVhciBhcyB0aGUgcmVmUGFydHMsIHdlIHNob3VsZFxuICAgKiB1c2UgdGhlIGRlZmluZSBkYXkgYXMgdGhlIG1heC9taW4gZGF5LlxuICAgKiBPdGhlcndpc2UsIGZhbGxiYWNrIHRvIHRoZSBtYXgvbWluIGRheXMgaW4gYSBtb250aC5cbiAgICovXG4gIGNvbnN0IG51bURheXNJbk1vbnRoID0gZ2V0TnVtRGF5c0luTW9udGgobW9udGgsIHllYXIpO1xuICBjb25zdCBtYXhEYXkgPSAobWF4UGFydHMgPT09IG51bGwgfHwgbWF4UGFydHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1heFBhcnRzLmRheSkgIT09IG51bGwgJiYgKG1heFBhcnRzID09PSBudWxsIHx8IG1heFBhcnRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtYXhQYXJ0cy5kYXkpICE9PSB1bmRlZmluZWQgJiYgbWF4UGFydHMueWVhciA9PT0geWVhciAmJiBtYXhQYXJ0cy5tb250aCA9PT0gbW9udGggPyBtYXhQYXJ0cy5kYXkgOiBudW1EYXlzSW5Nb250aDtcbiAgY29uc3QgbWluRGF5ID0gKG1pblBhcnRzID09PSBudWxsIHx8IG1pblBhcnRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtaW5QYXJ0cy5kYXkpICE9PSBudWxsICYmIChtaW5QYXJ0cyA9PT0gbnVsbCB8fCBtaW5QYXJ0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWluUGFydHMuZGF5KSAhPT0gdW5kZWZpbmVkICYmIG1pblBhcnRzLnllYXIgPT09IHllYXIgJiYgbWluUGFydHMubW9udGggPT09IG1vbnRoID8gbWluUGFydHMuZGF5IDogMTtcbiAgaWYgKGRheVZhbHVlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IHByb2Nlc3NlZERheXMgPSBkYXlWYWx1ZXM7XG4gICAgcHJvY2Vzc2VkRGF5cyA9IHByb2Nlc3NlZERheXMuZmlsdGVyKGRheSA9PiBkYXkgPj0gbWluRGF5ICYmIGRheSA8PSBtYXhEYXkpO1xuICAgIHByb2Nlc3NlZERheXMuZm9yRWFjaChwcm9jZXNzZWREYXkgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGAke21vbnRofS8ke3Byb2Nlc3NlZERheX0vJHt5ZWFyfSBHTVQrMDAwMGApO1xuICAgICAgY29uc3QgZGF5U3RyaW5nID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZvcm1hdE9wdGlvbnMpLCB7XG4gICAgICAgIHRpbWVab25lOiAnVVRDJ1xuICAgICAgfSkpLmZvcm1hdChkYXRlKTtcbiAgICAgIGRheXMucHVzaCh7XG4gICAgICAgIHRleHQ6IGRheVN0cmluZyxcbiAgICAgICAgdmFsdWU6IHByb2Nlc3NlZERheVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IG1pbkRheTsgaSA8PSBtYXhEYXk7IGkrKykge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGAke21vbnRofS8ke2l9LyR7eWVhcn0gR01UKzAwMDBgKTtcbiAgICAgIGNvbnN0IGRheVN0cmluZyA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmb3JtYXRPcHRpb25zKSwge1xuICAgICAgICB0aW1lWm9uZTogJ1VUQydcbiAgICAgIH0pKS5mb3JtYXQoZGF0ZSk7XG4gICAgICBkYXlzLnB1c2goe1xuICAgICAgICB0ZXh0OiBkYXlTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRheXM7XG59O1xuY29uc3QgZ2V0WWVhckNvbHVtbkRhdGEgPSAobG9jYWxlLCByZWZQYXJ0cywgbWluUGFydHMsIG1heFBhcnRzLCB5ZWFyVmFsdWVzKSA9PiB7XG4gIHZhciBfYSwgX2I7XG4gIGxldCBwcm9jZXNzZWRZZWFycyA9IFtdO1xuICBpZiAoeWVhclZhbHVlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcHJvY2Vzc2VkWWVhcnMgPSB5ZWFyVmFsdWVzO1xuICAgIGlmICgobWF4UGFydHMgPT09IG51bGwgfHwgbWF4UGFydHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1heFBhcnRzLnllYXIpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHByb2Nlc3NlZFllYXJzID0gcHJvY2Vzc2VkWWVhcnMuZmlsdGVyKHllYXIgPT4geWVhciA8PSBtYXhQYXJ0cy55ZWFyKTtcbiAgICB9XG4gICAgaWYgKChtaW5QYXJ0cyA9PT0gbnVsbCB8fCBtaW5QYXJ0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWluUGFydHMueWVhcikgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJvY2Vzc2VkWWVhcnMgPSBwcm9jZXNzZWRZZWFycy5maWx0ZXIoeWVhciA9PiB5ZWFyID49IG1pblBhcnRzLnllYXIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICB5ZWFyXG4gICAgfSA9IHJlZlBhcnRzO1xuICAgIGNvbnN0IG1heFllYXIgPSAoX2EgPSBtYXhQYXJ0cyA9PT0gbnVsbCB8fCBtYXhQYXJ0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWF4UGFydHMueWVhcikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogeWVhcjtcbiAgICBjb25zdCBtaW5ZZWFyID0gKF9iID0gbWluUGFydHMgPT09IG51bGwgfHwgbWluUGFydHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1pblBhcnRzLnllYXIpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IHllYXIgLSAxMDA7XG4gICAgZm9yIChsZXQgaSA9IG1pblllYXI7IGkgPD0gbWF4WWVhcjsgaSsrKSB7XG4gICAgICBwcm9jZXNzZWRZZWFycy5wdXNoKGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcHJvY2Vzc2VkWWVhcnMubWFwKHllYXIgPT4gKHtcbiAgICB0ZXh0OiBnZXRZZWFyKGxvY2FsZSwge1xuICAgICAgeWVhcixcbiAgICAgIG1vbnRoOiByZWZQYXJ0cy5tb250aCxcbiAgICAgIGRheTogcmVmUGFydHMuZGF5XG4gICAgfSksXG4gICAgdmFsdWU6IHllYXJcbiAgfSkpO1xufTtcbi8qKlxuICogR2l2ZW4gYSBzdGFydGluZyBkYXRlIGFuZCBhbiB1cHBlciBib3VuZCxcbiAqIHRoaXMgZnVuY3Rpb25zIHJldHVybnMgYW4gYXJyYXkgb2YgYWxsXG4gKiBtb250aCBvYmplY3RzIGluIHRoYXQgcmFuZ2UuXG4gKi9cbmNvbnN0IGdldEFsbE1vbnRoc0luUmFuZ2UgPSAoY3VycmVudFBhcnRzLCBtYXhQYXJ0cykgPT4ge1xuICBpZiAoY3VycmVudFBhcnRzLm1vbnRoID09PSBtYXhQYXJ0cy5tb250aCAmJiBjdXJyZW50UGFydHMueWVhciA9PT0gbWF4UGFydHMueWVhcikge1xuICAgIHJldHVybiBbY3VycmVudFBhcnRzXTtcbiAgfVxuICByZXR1cm4gW2N1cnJlbnRQYXJ0cywgLi4uZ2V0QWxsTW9udGhzSW5SYW5nZShnZXROZXh0TW9udGgoY3VycmVudFBhcnRzKSwgbWF4UGFydHMpXTtcbn07XG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgcGlja2VyIGl0ZW1zXG4gKiB0aGF0IHJlcHJlc2VudCB0aGUgZGF5cyBpbiBhIG1vbnRoLlxuICogRXhhbXBsZTogXCJUaHUsIEp1biAyXCJcbiAqL1xuY29uc3QgZ2V0Q29tYmluZWREYXRlQ29sdW1uRGF0YSA9IChsb2NhbGUsIHRvZGF5UGFydHMsIG1pblBhcnRzLCBtYXhQYXJ0cywgZGF5VmFsdWVzLCBtb250aFZhbHVlcykgPT4ge1xuICBsZXQgaXRlbXMgPSBbXTtcbiAgbGV0IHBhcnRzID0gW107XG4gIC8qKlxuICAgKiBHZXQgYWxsIG1vbnRoIG9iamVjdHMgZnJvbSB0aGUgbWluIGRhdGVcbiAgICogdG8gdGhlIG1heCBkYXRlLiBOb3RlOiBEbyBub3QgdXNlIGdldE1vbnRoQ29sdW1uRGF0YVxuICAgKiBhcyB0aGF0IGZ1bmN0aW9uIG9ubHkgZ2VuZXJhdGVzIGRhdGVzIHdpdGhpbiBhXG4gICAqIHNpbmdsZSB5ZWFyLlxuICAgKi9cbiAgbGV0IG1vbnRocyA9IGdldEFsbE1vbnRoc0luUmFuZ2UobWluUGFydHMsIG1heFBhcnRzKTtcbiAgLyoqXG4gICAqIEZpbHRlciBvdXQgYW55IGRpc2FsbG93ZWQgbW9udGggdmFsdWVzLlxuICAgKi9cbiAgaWYgKG1vbnRoVmFsdWVzKSB7XG4gICAgbW9udGhzID0gbW9udGhzLmZpbHRlcigoe1xuICAgICAgbW9udGhcbiAgICB9KSA9PiBtb250aFZhbHVlcy5pbmNsdWRlcyhtb250aCkpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgYWxsIG9mIHRoZSBkYXlzIGluIHRoZSBtb250aC5cbiAgICogRnJvbSB0aGVyZSwgZ2VuZXJhdGUgYW4gYXJyYXkgd2hlcmVcbiAgICogZWFjaCBpdGVtIGhhcyB0aGUgbW9udGgsIGRhdGUsIGFuZCBkYXlcbiAgICogb2Ygd29yayBhcyB0aGUgdGV4dC5cbiAgICovXG4gIG1vbnRocy5mb3JFYWNoKG1vbnRoT2JqZWN0ID0+IHtcbiAgICBjb25zdCByZWZlcmVuY2VNb250aCA9IHtcbiAgICAgIG1vbnRoOiBtb250aE9iamVjdC5tb250aCxcbiAgICAgIGRheTogbnVsbCxcbiAgICAgIHllYXI6IG1vbnRoT2JqZWN0LnllYXJcbiAgICB9O1xuICAgIGNvbnN0IG1vbnRoRGF5cyA9IGdldERheUNvbHVtbkRhdGEobG9jYWxlLCByZWZlcmVuY2VNb250aCwgbWluUGFydHMsIG1heFBhcnRzLCBkYXlWYWx1ZXMsIHtcbiAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICB3ZWVrZGF5OiAnc2hvcnQnXG4gICAgfSk7XG4gICAgY29uc3QgZGF0ZVBhcnRzID0gW107XG4gICAgY29uc3QgZGF0ZUNvbHVtbkl0ZW1zID0gW107XG4gICAgbW9udGhEYXlzLmZvckVhY2goZGF5T2JqZWN0ID0+IHtcbiAgICAgIGNvbnN0IGlzVG9kYXkgPSBpc1NhbWVEYXkoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZWZlcmVuY2VNb250aCksIHtcbiAgICAgICAgZGF5OiBkYXlPYmplY3QudmFsdWVcbiAgICAgIH0pLCB0b2RheVBhcnRzKTtcbiAgICAgIC8qKlxuICAgICAgICogVG9kYXkncyBkYXRlIHNob3VsZCByZWFkIGFzIFwiVG9kYXlcIiAobG9jYWxpemVkKVxuICAgICAgICogbm90IHRoZSBhY3R1YWwgZGF0ZSBzdHJpbmdcbiAgICAgICAqL1xuICAgICAgZGF0ZUNvbHVtbkl0ZW1zLnB1c2goe1xuICAgICAgICB0ZXh0OiBpc1RvZGF5ID8gZ2V0VG9kYXlMYWJlbChsb2NhbGUpIDogZGF5T2JqZWN0LnRleHQsXG4gICAgICAgIHZhbHVlOiBgJHtyZWZlcmVuY2VNb250aC55ZWFyfS0ke3JlZmVyZW5jZU1vbnRoLm1vbnRofS0ke2RheU9iamVjdC52YWx1ZX1gXG4gICAgICB9KTtcbiAgICAgIC8qKlxuICAgICAgICogV2hlbiBzZWxlY3RpbmcgYSBkYXRlIGluIHRoZSB3aGVlbCBwaWNrZXJcbiAgICAgICAqIHdlIG5lZWQgYWNjZXNzIHRvIHRoZSByYXcgZGF0ZXRpbWUgcGFydHMgZGF0YS5cbiAgICAgICAqIFRoZSBwaWNrZXIgY29sdW1uIG9ubHkgYWNjZXB0cyB2YWx1ZXMgb2ZcbiAgICAgICAqIHR5cGUgc3RyaW5nIG9yIG51bWJlciwgc28gd2UgbmVlZCB0byByZXR1cm5cbiAgICAgICAqIHR3byBzZXRzIG9mIGRhdGE6IEEgZGF0YSBzZXQgdG8gYmUgcGFzc2VkXG4gICAgICAgKiB0byB0aGUgcGlja2VyIGNvbHVtbiwgYW5kIGEgZGF0YSBzZXQgdG9cbiAgICAgICAqIGJlIHVzZWQgdG8gcmVmZXJlbmNlIHRoZSByYXcgZGF0YSB3aGVuXG4gICAgICAgKiB1cGRhdGluZyB0aGUgcGlja2VyIGNvbHVtbiB2YWx1ZS5cbiAgICAgICAqL1xuICAgICAgZGF0ZVBhcnRzLnB1c2goe1xuICAgICAgICBtb250aDogcmVmZXJlbmNlTW9udGgubW9udGgsXG4gICAgICAgIHllYXI6IHJlZmVyZW5jZU1vbnRoLnllYXIsXG4gICAgICAgIGRheTogZGF5T2JqZWN0LnZhbHVlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBwYXJ0cyA9IFsuLi5wYXJ0cywgLi4uZGF0ZVBhcnRzXTtcbiAgICBpdGVtcyA9IFsuLi5pdGVtcywgLi4uZGF0ZUNvbHVtbkl0ZW1zXTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgcGFydHMsXG4gICAgaXRlbXNcbiAgfTtcbn07XG5jb25zdCBnZXRUaW1lQ29sdW1uc0RhdGEgPSAobG9jYWxlLCByZWZQYXJ0cywgaG91ckN5Y2xlLCBtaW5QYXJ0cywgbWF4UGFydHMsIGFsbG93ZWRIb3VyVmFsdWVzLCBhbGxvd2VkTWludXRlVmFsdWVzKSA9PiB7XG4gIGNvbnN0IGNvbXB1dGVkSG91ckN5Y2xlID0gZ2V0SG91ckN5Y2xlKGxvY2FsZSwgaG91ckN5Y2xlKTtcbiAgY29uc3QgdXNlMjRIb3VyID0gaXMyNEhvdXIoY29tcHV0ZWRIb3VyQ3ljbGUpO1xuICBjb25zdCB7XG4gICAgaG91cnMsXG4gICAgbWludXRlcyxcbiAgICBhbSxcbiAgICBwbVxuICB9ID0gZ2VuZXJhdGVUaW1lKGxvY2FsZSwgcmVmUGFydHMsIGNvbXB1dGVkSG91ckN5Y2xlLCBtaW5QYXJ0cywgbWF4UGFydHMsIGFsbG93ZWRIb3VyVmFsdWVzLCBhbGxvd2VkTWludXRlVmFsdWVzKTtcbiAgY29uc3QgaG91cnNJdGVtcyA9IGhvdXJzLm1hcChob3VyID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogZ2V0Rm9ybWF0dGVkSG91cihob3VyLCBjb21wdXRlZEhvdXJDeWNsZSksXG4gICAgICB2YWx1ZTogZ2V0SW50ZXJuYWxIb3VyVmFsdWUoaG91ciwgdXNlMjRIb3VyLCByZWZQYXJ0cy5hbXBtKVxuICAgIH07XG4gIH0pO1xuICBjb25zdCBtaW51dGVzSXRlbXMgPSBtaW51dGVzLm1hcChtaW51dGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBhZGRUaW1lUGFkZGluZyhtaW51dGUpLFxuICAgICAgdmFsdWU6IG1pbnV0ZVxuICAgIH07XG4gIH0pO1xuICBjb25zdCBkYXlQZXJpb2RJdGVtcyA9IFtdO1xuICBpZiAoYW0gJiYgIXVzZTI0SG91cikge1xuICAgIGRheVBlcmlvZEl0ZW1zLnB1c2goe1xuICAgICAgdGV4dDogZ2V0TG9jYWxpemVkRGF5UGVyaW9kKGxvY2FsZSwgJ2FtJyksXG4gICAgICB2YWx1ZTogJ2FtJ1xuICAgIH0pO1xuICB9XG4gIGlmIChwbSAmJiAhdXNlMjRIb3VyKSB7XG4gICAgZGF5UGVyaW9kSXRlbXMucHVzaCh7XG4gICAgICB0ZXh0OiBnZXRMb2NhbGl6ZWREYXlQZXJpb2QobG9jYWxlLCAncG0nKSxcbiAgICAgIHZhbHVlOiAncG0nXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtaW51dGVzRGF0YTogbWludXRlc0l0ZW1zLFxuICAgIGhvdXJzRGF0YTogaG91cnNJdGVtcyxcbiAgICBkYXlQZXJpb2REYXRhOiBkYXlQZXJpb2RJdGVtc1xuICB9O1xufTtcbmV4cG9ydCB7IGdldE51bURheXNJbk1vbnRoIGFzIEEsIGdldENvbWJpbmVkRGF0ZUNvbHVtbkRhdGEgYXMgQiwgZ2V0TW9udGhDb2x1bW5EYXRhIGFzIEMsIGdldERheUNvbHVtbkRhdGEgYXMgRCwgZ2V0WWVhckNvbHVtbkRhdGEgYXMgRSwgaXNNb250aEZpcnN0TG9jYWxlIGFzIEYsIGdldFRpbWVDb2x1bW5zRGF0YSBhcyBHLCBpc0xvY2FsZURheVBlcmlvZFJUTCBhcyBILCBnZXREYXlzT2ZXZWVrIGFzIEksIGdldE1vbnRoQW5kWWVhciBhcyBKLCBnZXREYXlzT2ZNb250aCBhcyBLLCBnZXRIb3VyQ3ljbGUgYXMgTCwgZ2V0TG9jYWxpemVkVGltZSBhcyBNLCBnZXRMb2NhbGl6ZWREYXRlVGltZSBhcyBOLCBmb3JtYXRWYWx1ZSBhcyBPLCBjbGFtcERhdGUgYXMgUCwgcGFyc2VBbVBtIGFzIFEsIGNhbGN1bGF0ZUhvdXJGcm9tQU1QTSBhcyBSLCBnZXREYXkgYXMgYSwgaXNBZnRlciBhcyBiLCBpc1NhbWVEYXkgYXMgYywgZ2V0UHJldmlvdXNNb250aCBhcyBkLCBnZXROZXh0TW9udGggYXMgZSwgZ2V0UGFydHNGcm9tQ2FsZW5kYXJEYXkgYXMgZiwgZ2VuZXJhdGVEYXlBcmlhTGFiZWwgYXMgZywgZ2V0TmV4dFllYXIgYXMgaCwgaXNCZWZvcmUgYXMgaSwgZ2V0UHJldmlvdXNZZWFyIGFzIGosIGdldEVuZE9mV2VlayBhcyBrLCBnZXRTdGFydE9mV2VlayBhcyBsLCBnZXRQcmV2aW91c0RheSBhcyBtLCBnZXROZXh0RGF5IGFzIG4sIGdldFByZXZpb3VzV2VlayBhcyBvLCBnZXROZXh0V2VlayBhcyBwLCBwYXJzZU1pblBhcnRzIGFzIHEsIHBhcnNlTWF4UGFydHMgYXMgciwgcGFyc2VEYXRlIGFzIHMsIGNvbnZlcnRUb0FycmF5T2ZOdW1iZXJzIGFzIHQsIGNvbnZlcnREYXRhVG9JU08gYXMgdSwgdmFsaWRhdGVQYXJ0cyBhcyB2LCB3YXJuSWZWYWx1ZU91dE9mQm91bmRzIGFzIHcsIGdldFRvZGF5IGFzIHgsIGdldENsb3Nlc3RWYWxpZERhdGUgYXMgeSwgZ2VuZXJhdGVNb250aHMgYXMgeiB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFRQSxJQUFNLFlBQVksQ0FBQyxXQUFXLGlCQUFpQjtBQUM3QyxTQUFPLFVBQVUsVUFBVSxhQUFhLFNBQVMsVUFBVSxRQUFRLGFBQWEsT0FBTyxVQUFVLFNBQVMsYUFBYTtBQUN6SDtBQUlBLElBQU0sV0FBVyxDQUFDLFdBQVcsaUJBQWlCO0FBQzVDLFNBQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxhQUFhLFFBQVEsVUFBVSxTQUFTLGFBQWEsUUFBUSxVQUFVLFFBQVEsYUFBYSxTQUFTLFVBQVUsU0FBUyxhQUFhLFFBQVEsVUFBVSxVQUFVLGFBQWEsU0FBUyxVQUFVLFFBQVEsUUFBUSxVQUFVLE1BQU0sYUFBYTtBQUMzUTtBQUlBLElBQU0sVUFBVSxDQUFDLFdBQVcsaUJBQWlCO0FBQzNDLFNBQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxhQUFhLFFBQVEsVUFBVSxTQUFTLGFBQWEsUUFBUSxVQUFVLFFBQVEsYUFBYSxTQUFTLFVBQVUsU0FBUyxhQUFhLFFBQVEsVUFBVSxV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O0FBQUEsUUFDekUsS0FBSyxVQUFVO0FBQUEsTUFDakIsQ0FBQyxHQUFHLFVBQVU7QUFLZCxzQkFBZ0IsS0FBSztBQUFBLFFBQ25CLE1BQU0sVUFBVSxjQUFjLE1BQU0sSUFBSSxVQUFVO0FBQUEsUUFDbEQsT0FBTyxHQUFHLGVBQWUsSUFBSSxJQUFJLGVBQWUsS0FBSyxJQUFJLFVBQVUsS0FBSztBQUFBLE1BQzFFLENBQUM7QUFXRCxnQkFBVSxLQUFLO0FBQUEsUUFDYixPQUFPLGVBQWU7QUFBQSxRQUN0QixNQUFNLGVBQWU7QUFBQSxRQUNyQixLQUFLLFVBQVU7QUFBQSxNQUNqQixDQUFDO0FBQUEsSUFDSCxDQUFDO0FBQ0QsWUFBUSxDQUFDLEdBQUcsT0FBTyxHQUFHLFNBQVM7QUFDL0IsWUFBUSxDQUFDLEdBQUcsT0FBTyxHQUFHLGVBQWU7QUFBQSxFQUN2QyxDQUFDO0FBQ0QsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUNGO0FBQ0EsSUFBTSxxQkFBcUIsQ0FBQyxRQUFRLFVBQVUsV0FBVyxVQUFVLFVBQVUsbUJBQW1CLHdCQUF3QjtBQUN0SCxRQUFNLG9CQUFvQixhQUFhLFFBQVEsU0FBUztBQUN4RCxRQUFNLFlBQVksU0FBUyxpQkFBaUI7QUFDNUMsUUFBTTtBQUFBLElBQ0o7QUFBQSxJQUNBLFNBQUFDO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGLElBQUksYUFBYSxRQUFRLFVBQVUsbUJBQW1CLFVBQVUsVUFBVSxtQkFBbUIsbUJBQW1CO0FBQ2hILFFBQU0sYUFBYSxNQUFNLElBQUksVUFBUTtBQUNuQyxXQUFPO0FBQUEsTUFDTCxNQUFNLGlCQUFpQixNQUFNLGlCQUFpQjtBQUFBLE1BQzlDLE9BQU8scUJBQXFCLE1BQU0sV0FBVyxTQUFTLElBQUk7QUFBQSxJQUM1RDtBQUFBLEVBQ0YsQ0FBQztBQUNELFFBQU0sZUFBZUEsU0FBUSxJQUFJLFlBQVU7QUFDekMsV0FBTztBQUFBLE1BQ0wsTUFBTSxlQUFlLE1BQU07QUFBQSxNQUMzQixPQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0YsQ0FBQztBQUNELFFBQU0saUJBQWlCLENBQUM7QUFDeEIsTUFBSSxNQUFNLENBQUMsV0FBVztBQUNwQixtQkFBZSxLQUFLO0FBQUEsTUFDbEIsTUFBTSxzQkFBc0IsUUFBUSxJQUFJO0FBQUEsTUFDeEMsT0FBTztBQUFBLElBQ1QsQ0FBQztBQUFBLEVBQ0g7QUFDQSxNQUFJLE1BQU0sQ0FBQyxXQUFXO0FBQ3BCLG1CQUFlLEtBQUs7QUFBQSxNQUNsQixNQUFNLHNCQUFzQixRQUFRLElBQUk7QUFBQSxNQUN4QyxPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQUEsRUFDSDtBQUNBLFNBQU87QUFBQSxJQUNMLGFBQWE7QUFBQSxJQUNiLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxFQUNqQjtBQUNGOyIsIm5hbWVzIjpbInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJtaW51dGVzIl0sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
