(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js ***!
  \******************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-datetime_3-md.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-datetime_3-md.entry.js ***!
  \**************************************************************************/
/*! exports provided: ion_datetime, ion_picker, ion_picker_column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_datetime", function() { return Datetime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_picker", function() { return Picker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_picker_column", function() { return PickerColumnCmp; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation-af478fe9.js */ "./node_modules/@ionic/core/dist/esm-es5/animation-af478fe9.js");
/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlays-10640d86.js */ "./node_modules/@ionic/core/dist/esm-es5/overlays-10640d86.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");
/* harmony import */ var _haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./haptic-c8f1473e.js */ "./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js");








/**
 * Gets a date value given a format
 * Defaults to the current date if
 * no date given
 */
var getDateValue = function (date, format) {
    var getValue = getValueFromFormat(date, format);
    if (getValue !== undefined) {
        return getValue;
    }
    var defaultDate = parseDate(new Date().toISOString());
    return getValueFromFormat(defaultDate, format);
};
var renderDatetime = function (template, value, locale) {
    if (value === undefined) {
        return undefined;
    }
    var tokens = [];
    var hasText = false;
    FORMAT_KEYS.forEach(function (format, index) {
        if (template.indexOf(format.f) > -1) {
            var token = '{' + index + '}';
            var text = renderTextFormat(format.f, value[format.k], value, locale);
            if (!hasText && text !== undefined && value[format.k] != null) {
                hasText = true;
            }
            tokens.push(token, text || '');
            template = template.replace(format.f, token);
        }
    });
    if (!hasText) {
        return undefined;
    }
    for (var i = 0; i < tokens.length; i += 2) {
        template = template.replace(tokens[i], tokens[i + 1]);
    }
    return template;
};
var renderTextFormat = function (format, value, date, locale) {
    if ((format === FORMAT_DDDD || format === FORMAT_DDD)) {
        try {
            value = (new Date(date.year, date.month - 1, date.day)).getDay();
            if (format === FORMAT_DDDD) {
                return (locale.dayNames ? locale.dayNames : DAY_NAMES)[value];
            }
            return (locale.dayShortNames ? locale.dayShortNames : DAY_SHORT_NAMES)[value];
        }
        catch (e) {
            // ignore
        }
        return undefined;
    }
    if (format === FORMAT_A) {
        return date !== undefined && date.hour !== undefined
            ? (date.hour < 12 ? 'AM' : 'PM')
            : value ? value.toUpperCase() : '';
    }
    if (format === FORMAT_a) {
        return date !== undefined && date.hour !== undefined
            ? (date.hour < 12 ? 'am' : 'pm')
            : value || '';
    }
    if (value == null) {
        return '';
    }
    if (format === FORMAT_YY || format === FORMAT_MM ||
        format === FORMAT_DD || format === FORMAT_HH ||
        format === FORMAT_mm || format === FORMAT_ss) {
        return twoDigit(value);
    }
    if (format === FORMAT_YYYY) {
        return fourDigit(value);
    }
    if (format === FORMAT_MMMM) {
        return (locale.monthNames ? locale.monthNames : MONTH_NAMES)[value - 1];
    }
    if (format === FORMAT_MMM) {
        return (locale.monthShortNames ? locale.monthShortNames : MONTH_SHORT_NAMES)[value - 1];
    }
    if (format === FORMAT_hh || format === FORMAT_h) {
        if (value === 0) {
            return '12';
        }
        if (value > 12) {
            value -= 12;
        }
        if (format === FORMAT_hh && value < 10) {
            return ('0' + value);
        }
    }
    return value.toString();
};
var dateValueRange = function (format, min, max) {
    var opts = [];
    if (format === FORMAT_YYYY || format === FORMAT_YY) {
        // year
        if (max.year === undefined || min.year === undefined) {
            throw new Error('min and max year is undefined');
        }
        for (var i = max.year; i >= min.year; i--) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_MMMM || format === FORMAT_MMM ||
        format === FORMAT_MM || format === FORMAT_M ||
        format === FORMAT_hh || format === FORMAT_h) {
        // month or 12-hour
        for (var i = 1; i < 13; i++) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_DDDD || format === FORMAT_DDD ||
        format === FORMAT_DD || format === FORMAT_D) {
        // day
        for (var i = 1; i < 32; i++) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_HH || format === FORMAT_H) {
        // 24-hour
        for (var i = 0; i < 24; i++) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_mm || format === FORMAT_m) {
        // minutes
        for (var i = 0; i < 60; i++) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_ss || format === FORMAT_s) {
        // seconds
        for (var i = 0; i < 60; i++) {
            opts.push(i);
        }
    }
    else if (format === FORMAT_A || format === FORMAT_a) {
        // AM/PM
        opts.push('am', 'pm');
    }
    return opts;
};
var dateSortValue = function (year, month, day, hour, minute) {
    if (hour === void 0) { hour = 0; }
    if (minute === void 0) { minute = 0; }
    return parseInt("1" + fourDigit(year) + twoDigit(month) + twoDigit(day) + twoDigit(hour) + twoDigit(minute), 10);
};
var dateDataSortValue = function (data) {
    return dateSortValue(data.year, data.month, data.day, data.hour, data.minute);
};
var daysInMonth = function (month, year) {
    return (month === 4 || month === 6 || month === 9 || month === 11) ? 30 : (month === 2) ? isLeapYear(year) ? 29 : 28 : 31;
};
var isLeapYear = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};
var ISO_8601_REGEXP = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
var TIME_REGEXP = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
var parseDate = function (val) {
    // manually parse IS0 cuz Date.parse cannot be trusted
    // ISO 8601 format: 1994-12-15T13:47:20Z
    var parse = null;
    if (val != null && val !== '') {
        // try parsing for just time first, HH:MM
        parse = TIME_REGEXP.exec(val);
        if (parse) {
            // adjust the array so it fits nicely with the datetime parse
            parse.unshift(undefined, undefined);
            parse[2] = parse[3] = undefined;
        }
        else {
            // try parsing for full ISO datetime
            parse = ISO_8601_REGEXP.exec(val);
        }
    }
    if (parse === null) {
        // wasn't able to parse the ISO datetime
        return undefined;
    }
    // ensure all the parse values exist with at least 0
    for (var i = 1; i < 8; i++) {
        parse[i] = parse[i] !== undefined ? parseInt(parse[i], 10) : undefined;
    }
    var tzOffset = 0;
    if (parse[9] && parse[10]) {
        // hours
        tzOffset = parseInt(parse[10], 10) * 60;
        if (parse[11]) {
            // minutes
            tzOffset += parseInt(parse[11], 10);
        }
        if (parse[9] === '-') {
            // + or -
            tzOffset *= -1;
        }
    }
    return {
        year: parse[1],
        month: parse[2],
        day: parse[3],
        hour: parse[4],
        minute: parse[5],
        second: parse[6],
        millisecond: parse[7],
        tzOffset: tzOffset,
    };
};
/**
 * Converts a valid UTC datetime string
 * To the user's local timezone
 * Note: This is not meant for time strings
 * such as "01:47"
 */
var getLocalDateTime = function (dateString) {
    if (dateString === void 0) { dateString = ''; }
    /**
     * If user passed in undefined
     * or null, convert it to the
     * empty string since the rest
     * of this functions expects
     * a string
     */
    if (dateString === undefined || dateString === null) {
        dateString = '';
    }
    /**
     * Ensures that YYYY-MM-DD, YYYY-MM,
     * YYYY-DD, etc does not get affected
     * by timezones and stays on the day/month
     * that the user provided
     */
    if (dateString.length === 10 ||
        dateString.length === 7) {
        dateString += ' ';
    }
    var date = (typeof dateString === 'string' && dateString.length > 0) ? new Date(dateString) : new Date();
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
};
var updateDate = function (existingData, newData) {
    if (!newData || typeof newData === 'string') {
        var localDateTime = getLocalDateTime(newData);
        if (!Number.isNaN(localDateTime.getTime())) {
            newData = localDateTime.toISOString();
        }
    }
    if (newData && newData !== '') {
        if (typeof newData === 'string') {
            // new date is a string, and hopefully in the ISO format
            // convert it to our DatetimeData if a valid ISO
            newData = parseDate(newData);
            if (newData) {
                // successfully parsed the ISO string to our DatetimeData
                Object.assign(existingData, newData);
                return true;
            }
        }
        else if ((newData.year || newData.hour || newData.month || newData.day || newData.minute || newData.second)) {
            // newData is from of a datetime picker's selected values
            // update the existing DatetimeData data with the new values
            // do some magic for 12-hour values
            if (newData.ampm && newData.hour) {
                newData.hour.value = (newData.ampm.value === 'pm')
                    ? (newData.hour.value === 12 ? 12 : newData.hour.value + 12)
                    : (newData.hour.value === 12 ? 0 : newData.hour.value);
            }
            // merge new values from the picker's selection
            // to the existing DatetimeData values
            for (var _i = 0, _a = Object.keys(newData); _i < _a.length; _i++) {
                var key = _a[_i];
                existingData[key] = newData[key].value;
            }
            return true;
        }
        else if (newData.ampm) {
            // Even though in the picker column hour values are between 1 and 12, the hour value is actually normalized
            // to [0, 23] interval. Because of this when changing between AM and PM we have to update the hour so it points
            // to the correct HH hour
            newData.hour = {
                value: newData.hour
                    ? newData.hour.value
                    : (newData.ampm.value === 'pm'
                        ? (existingData.hour < 12 ? existingData.hour + 12 : existingData.hour)
                        : (existingData.hour >= 12 ? existingData.hour - 12 : existingData.hour))
            };
            existingData['hour'] = newData['hour'].value;
            return true;
        }
        // eww, invalid data
        console.warn("Error parsing date: \"" + newData + "\". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime");
    }
    else {
        // blank data, clear everything out
        for (var k in existingData) {
            if (existingData.hasOwnProperty(k)) {
                delete existingData[k];
            }
        }
    }
    return false;
};
var parseTemplate = function (template) {
    var formats = [];
    template = template.replace(/[^\w\s]/gi, ' ');
    FORMAT_KEYS.forEach(function (format) {
        if (format.f.length > 1 && template.indexOf(format.f) > -1 && template.indexOf(format.f + format.f.charAt(0)) < 0) {
            template = template.replace(format.f, ' ' + format.f + ' ');
        }
    });
    var words = template.split(' ').filter(function (w) { return w.length > 0; });
    words.forEach(function (word, i) {
        FORMAT_KEYS.forEach(function (format) {
            if (word === format.f) {
                if (word === FORMAT_A || word === FORMAT_a) {
                    // this format is an am/pm format, so it's an "a" or "A"
                    if ((formats.indexOf(FORMAT_h) < 0 && formats.indexOf(FORMAT_hh) < 0) ||
                        VALID_AMPM_PREFIX.indexOf(words[i - 1]) === -1) {
                        // template does not already have a 12-hour format
                        // or this am/pm format doesn't have a hour, minute, or second format immediately before it
                        // so do not treat this word "a" or "A" as the am/pm format
                        return;
                    }
                }
                formats.push(word);
            }
        });
    });
    return formats;
};
var getValueFromFormat = function (date, format) {
    if (format === FORMAT_A || format === FORMAT_a) {
        return (date.hour < 12 ? 'am' : 'pm');
    }
    if (format === FORMAT_hh || format === FORMAT_h) {
        return (date.hour > 12 ? date.hour - 12 : (date.hour === 0 ? 12 : date.hour));
    }
    return date[convertFormatToKey(format)];
};
var convertFormatToKey = function (format) {
    for (var k in FORMAT_KEYS) {
        if (FORMAT_KEYS[k].f === format) {
            return FORMAT_KEYS[k].k;
        }
    }
    return undefined;
};
var convertDataToISO = function (data) {
    // https://www.w3.org/TR/NOTE-datetime
    var rtn = '';
    if (data.year !== undefined) {
        // YYYY
        rtn = fourDigit(data.year);
        if (data.month !== undefined) {
            // YYYY-MM
            rtn += '-' + twoDigit(data.month);
            if (data.day !== undefined) {
                // YYYY-MM-DD
                rtn += '-' + twoDigit(data.day);
                if (data.hour !== undefined) {
                    // YYYY-MM-DDTHH:mm:SS
                    rtn += "T" + twoDigit(data.hour) + ":" + twoDigit(data.minute) + ":" + twoDigit(data.second);
                    if (data.millisecond > 0) {
                        // YYYY-MM-DDTHH:mm:SS.SSS
                        rtn += '.' + threeDigit(data.millisecond);
                    }
                    if (data.tzOffset === undefined) {
                        // YYYY-MM-DDTHH:mm:SSZ
                        rtn += 'Z';
                    }
                    else {
                        // YYYY-MM-DDTHH:mm:SS+/-HH:mm
                        rtn += (data.tzOffset > 0 ? '+' : '-') + twoDigit(Math.floor(Math.abs(data.tzOffset / 60))) + ':' + twoDigit(data.tzOffset % 60);
                    }
                }
            }
        }
    }
    else if (data.hour !== undefined) {
        // HH:mm
        rtn = twoDigit(data.hour) + ':' + twoDigit(data.minute);
        if (data.second !== undefined) {
            // HH:mm:SS
            rtn += ':' + twoDigit(data.second);
            if (data.millisecond !== undefined) {
                // HH:mm:SS.SSS
                rtn += '.' + threeDigit(data.millisecond);
            }
        }
    }
    return rtn;
};
/**
 * Use to convert a string of comma separated strings or
 * an array of strings, and clean up any user input
 */
var convertToArrayOfStrings = function (input, type) {
    if (input == null) {
        return undefined;
    }
    if (typeof input === 'string') {
        // convert the string to an array of strings
        // auto remove any [] characters
        input = input.replace(/\[|\]/g, '').split(',');
    }
    var values;
    if (Array.isArray(input)) {
        // trim up each string value
        values = input.map(function (val) { return val.toString().trim(); });
    }
    if (values === undefined || values.length === 0) {
        console.warn("Invalid \"" + type + "Names\". Must be an array of strings, or a comma separated string.");
    }
    return values;
};
/**
 * Use to convert a string of comma separated numbers or
 * an array of numbers, and clean up any user input
 */
var convertToArrayOfNumbers = function (input, type) {
    if (typeof input === 'string') {
        // convert the string to an array of strings
        // auto remove any whitespace and [] characters
        input = input.replace(/\[|\]|\s/g, '').split(',');
    }
    var values;
    if (Array.isArray(input)) {
        // ensure each value is an actual number in the returned array
        values = input
            .map(function (num) { return parseInt(num, 10); })
            .filter(isFinite);
    }
    else {
        values = [input];
    }
    if (values.length === 0) {
        console.warn("Invalid \"" + type + "Values\". Must be an array of numbers, or a comma separated string of numbers.");
    }
    return values;
};
var twoDigit = function (val) {
    return ('0' + (val !== undefined ? Math.abs(val) : '0')).slice(-2);
};
var threeDigit = function (val) {
    return ('00' + (val !== undefined ? Math.abs(val) : '0')).slice(-3);
};
var fourDigit = function (val) {
    return ('000' + (val !== undefined ? Math.abs(val) : '0')).slice(-4);
};
var FORMAT_YYYY = 'YYYY';
var FORMAT_YY = 'YY';
var FORMAT_MMMM = 'MMMM';
var FORMAT_MMM = 'MMM';
var FORMAT_MM = 'MM';
var FORMAT_M = 'M';
var FORMAT_DDDD = 'DDDD';
var FORMAT_DDD = 'DDD';
var FORMAT_DD = 'DD';
var FORMAT_D = 'D';
var FORMAT_HH = 'HH';
var FORMAT_H = 'H';
var FORMAT_hh = 'hh';
var FORMAT_h = 'h';
var FORMAT_mm = 'mm';
var FORMAT_m = 'm';
var FORMAT_ss = 'ss';
var FORMAT_s = 's';
var FORMAT_A = 'A';
var FORMAT_a = 'a';
var FORMAT_KEYS = [
    { f: FORMAT_YYYY, k: 'year' },
    { f: FORMAT_MMMM, k: 'month' },
    { f: FORMAT_DDDD, k: 'day' },
    { f: FORMAT_MMM, k: 'month' },
    { f: FORMAT_DDD, k: 'day' },
    { f: FORMAT_YY, k: 'year' },
    { f: FORMAT_MM, k: 'month' },
    { f: FORMAT_DD, k: 'day' },
    { f: FORMAT_HH, k: 'hour' },
    { f: FORMAT_hh, k: 'hour' },
    { f: FORMAT_mm, k: 'minute' },
    { f: FORMAT_ss, k: 'second' },
    { f: FORMAT_M, k: 'month' },
    { f: FORMAT_D, k: 'day' },
    { f: FORMAT_H, k: 'hour' },
    { f: FORMAT_h, k: 'hour' },
    { f: FORMAT_m, k: 'minute' },
    { f: FORMAT_s, k: 'second' },
    { f: FORMAT_A, k: 'ampm' },
    { f: FORMAT_a, k: 'ampm' },
];
var DAY_NAMES = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
var DAY_SHORT_NAMES = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
];
var MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
var MONTH_SHORT_NAMES = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
var VALID_AMPM_PREFIX = [
    FORMAT_hh, FORMAT_h, FORMAT_mm, FORMAT_m, FORMAT_ss, FORMAT_s
];
var Datetime = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.inputId = "ion-dt-" + datetimeIds++;
        this.locale = {};
        this.datetimeMin = {};
        this.datetimeMax = {};
        this.datetimeValue = {};
        this.isExpanded = false;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * If `true`, the user cannot interact with the datetime.
         */
        this.disabled = false;
        /**
         * If `true`, the datetime appears normal but is not interactive.
         */
        this.readonly = false;
        /**
         * The display format of the date and time as text that shows
         * within the item. When the `pickerFormat` input is not used, then the
         * `displayFormat` is used for both display the formatted text, and determining
         * the datetime picker's columns. See the `pickerFormat` input description for
         * more info. Defaults to `MMM D, YYYY`.
         */
        this.displayFormat = 'MMM D, YYYY';
        /**
         * The text to display on the picker's cancel button.
         */
        this.cancelText = 'Cancel';
        /**
         * The text to display on the picker's "Done" button.
         */
        this.doneText = 'Done';
        this.onClick = function () {
            _this.setFocus();
            _this.open();
        };
        this.onFocus = function () {
            _this.ionFocus.emit();
        };
        this.onBlur = function () {
            _this.ionBlur.emit();
        };
        this.ionCancel = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionCancel", 7);
        this.ionChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionChange", 7);
        this.ionFocus = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionFocus", 7);
        this.ionBlur = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionBlur", 7);
        this.ionStyle = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionStyle", 7);
    }
    class_1.prototype.disabledChanged = function () {
        this.emitStyle();
    };
    /**
     * Update the datetime value when the value changes
     */
    class_1.prototype.valueChanged = function () {
        this.updateDatetimeValue(this.value);
        this.emitStyle();
        this.ionChange.emit({
            value: this.value
        });
    };
    class_1.prototype.componentWillLoad = function () {
        // first see if locale names were provided in the inputs
        // then check to see if they're in the config
        // if neither were provided then it will use default English names
        this.locale = {
            // this.locale[type] = convertToArrayOfStrings((this[type] ? this[type] : this.config.get(type), type);
            monthNames: convertToArrayOfStrings(this.monthNames, 'monthNames'),
            monthShortNames: convertToArrayOfStrings(this.monthShortNames, 'monthShortNames'),
            dayNames: convertToArrayOfStrings(this.dayNames, 'dayNames'),
            dayShortNames: convertToArrayOfStrings(this.dayShortNames, 'dayShortNames')
        };
        this.updateDatetimeValue(this.value);
        this.emitStyle();
    };
    /**
     * Opens the datetime overlay.
     */
    class_1.prototype.open = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var pickerOptions, picker;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.disabled || this.isExpanded) {
                            return [2 /*return*/];
                        }
                        pickerOptions = this.generatePickerOptions();
                        return [4 /*yield*/, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["p"].create(pickerOptions)];
                    case 1:
                        picker = _a.sent();
                        this.isExpanded = true;
                        picker.onDidDismiss().then(function () {
                            _this.isExpanded = false;
                            _this.setFocus();
                        });
                        picker.addEventListener('ionPickerColChange', function (event) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var data, colSelectedIndex, colOptions, changeData;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                data = event.detail;
                                colSelectedIndex = data.selectedIndex;
                                colOptions = data.options;
                                changeData = {};
                                changeData[data.name] = {
                                    value: colOptions[colSelectedIndex].value
                                };
                                this.updateDatetimeValue(changeData);
                                picker.columns = this.generateColumns();
                                return [2 /*return*/];
                            });
                        }); });
                        return [4 /*yield*/, picker.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.emitStyle = function () {
        this.ionStyle.emit({
            'interactive': true,
            'datetime': true,
            'has-placeholder': this.placeholder != null,
            'has-value': this.hasValue(),
            'interactive-disabled': this.disabled,
        });
    };
    class_1.prototype.updateDatetimeValue = function (value) {
        updateDate(this.datetimeValue, value);
    };
    class_1.prototype.generatePickerOptions = function () {
        var _this = this;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var pickerOptions = Object.assign(Object.assign({ mode: mode }, this.pickerOptions), { columns: this.generateColumns() });
        // If the user has not passed in picker buttons,
        // add a cancel and ok button to the picker
        var buttons = pickerOptions.buttons;
        if (!buttons || buttons.length === 0) {
            pickerOptions.buttons = [
                {
                    text: this.cancelText,
                    role: 'cancel',
                    handler: function () {
                        _this.updateDatetimeValue(_this.value);
                        _this.ionCancel.emit();
                    }
                },
                {
                    text: this.doneText,
                    handler: function (data) {
                        _this.updateDatetimeValue(data);
                        /**
                         * Prevent convertDataToISO from doing any
                         * kind of transformation based on timezone
                         * This cancels out any change it attempts to make
                         *
                         * Important: Take the timezone offset based on
                         * the date that is currently selected, otherwise
                         * there can be 1 hr difference when dealing w/ DST
                         */
                        var date = new Date(convertDataToISO(_this.datetimeValue));
                        _this.datetimeValue.tzOffset = date.getTimezoneOffset() * -1;
                        _this.value = convertDataToISO(_this.datetimeValue);
                    }
                }
            ];
        }
        return pickerOptions;
    };
    class_1.prototype.generateColumns = function () {
        var _this = this;
        // if a picker format wasn't provided, then fallback
        // to use the display format
        var template = this.pickerFormat || this.displayFormat || DEFAULT_FORMAT;
        if (template.length === 0) {
            return [];
        }
        // make sure we've got up to date sizing information
        this.calcMinMax();
        // does not support selecting by day name
        // automatically remove any day name formats
        template = template.replace('DDDD', '{~}').replace('DDD', '{~}');
        if (template.indexOf('D') === -1) {
            // there is not a day in the template
            // replace the day name with a numeric one if it exists
            template = template.replace('{~}', 'D');
        }
        // make sure no day name replacer is left in the string
        template = template.replace(/{~}/g, '');
        // parse apart the given template into an array of "formats"
        var columns = parseTemplate(template).map(function (format) {
            // loop through each format in the template
            // create a new picker column to build up with data
            var key = convertFormatToKey(format);
            var values;
            // check if they have exact values to use for this date part
            // otherwise use the default date part values
            var self = _this;
            values = self[key + 'Values']
                ? convertToArrayOfNumbers(self[key + 'Values'], key)
                : dateValueRange(format, _this.datetimeMin, _this.datetimeMax);
            var colOptions = values.map(function (val) {
                return {
                    value: val,
                    text: renderTextFormat(format, val, undefined, _this.locale),
                };
            });
            // cool, we've loaded up the columns with options
            // preselect the option for this column
            var optValue = getDateValue(_this.datetimeValue, format);
            var selectedIndex = colOptions.findIndex(function (opt) { return opt.value === optValue; });
            return {
                name: key,
                selectedIndex: selectedIndex >= 0 ? selectedIndex : 0,
                options: colOptions
            };
        });
        // Normalize min/max
        var min = this.datetimeMin;
        var max = this.datetimeMax;
        ['month', 'day', 'hour', 'minute']
            .filter(function (name) { return !columns.find(function (column) { return column.name === name; }); })
            .forEach(function (name) {
            min[name] = 0;
            max[name] = 0;
        });
        return this.validateColumns(divyColumns(columns));
    };
    class_1.prototype.validateColumns = function (columns) {
        var today = new Date();
        var minCompareVal = dateDataSortValue(this.datetimeMin);
        var maxCompareVal = dateDataSortValue(this.datetimeMax);
        var yearCol = columns.find(function (c) { return c.name === 'year'; });
        var selectedYear = today.getFullYear();
        if (yearCol) {
            // default to the first value if the current year doesn't exist in the options
            if (!yearCol.options.find(function (col) { return col.value === today.getFullYear(); })) {
                selectedYear = yearCol.options[0].value;
            }
            var selectedIndex = yearCol.selectedIndex;
            if (selectedIndex !== undefined) {
                var yearOpt = yearCol.options[selectedIndex];
                if (yearOpt) {
                    // they have a selected year value
                    selectedYear = yearOpt.value;
                }
            }
        }
        var selectedMonth = this.validateColumn(columns, 'month', 1, minCompareVal, maxCompareVal, [selectedYear, 0, 0, 0, 0], [selectedYear, 12, 31, 23, 59]);
        var numDaysInMonth = daysInMonth(selectedMonth, selectedYear);
        var selectedDay = this.validateColumn(columns, 'day', 2, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, 0, 0, 0], [selectedYear, selectedMonth, numDaysInMonth, 23, 59]);
        var selectedHour = this.validateColumn(columns, 'hour', 3, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, selectedDay, 0, 0], [selectedYear, selectedMonth, selectedDay, 23, 59]);
        this.validateColumn(columns, 'minute', 4, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, selectedDay, selectedHour, 0], [selectedYear, selectedMonth, selectedDay, selectedHour, 59]);
        return columns;
    };
    class_1.prototype.calcMinMax = function () {
        var todaysYear = new Date().getFullYear();
        if (this.yearValues !== undefined) {
            var years = convertToArrayOfNumbers(this.yearValues, 'year');
            if (this.min === undefined) {
                this.min = Math.min.apply(Math, years).toString();
            }
            if (this.max === undefined) {
                this.max = Math.max.apply(Math, years).toString();
            }
        }
        else {
            if (this.min === undefined) {
                this.min = (todaysYear - 100).toString();
            }
            if (this.max === undefined) {
                this.max = todaysYear.toString();
            }
        }
        var min = this.datetimeMin = parseDate(this.min);
        var max = this.datetimeMax = parseDate(this.max);
        min.year = min.year || todaysYear;
        max.year = max.year || todaysYear;
        min.month = min.month || 1;
        max.month = max.month || 12;
        min.day = min.day || 1;
        max.day = max.day || 31;
        min.hour = min.hour || 0;
        max.hour = max.hour || 23;
        min.minute = min.minute || 0;
        max.minute = max.minute || 59;
        min.second = min.second || 0;
        max.second = max.second || 59;
        // Ensure min/max constraints
        if (min.year > max.year) {
            console.error('min.year > max.year');
            min.year = max.year - 100;
        }
        if (min.year === max.year) {
            if (min.month > max.month) {
                console.error('min.month > max.month');
                min.month = 1;
            }
            else if (min.month === max.month && min.day > max.day) {
                console.error('min.day > max.day');
                min.day = 1;
            }
        }
    };
    class_1.prototype.validateColumn = function (columns, name, index, min, max, lowerBounds, upperBounds) {
        var column = columns.find(function (c) { return c.name === name; });
        if (!column) {
            return 0;
        }
        var lb = lowerBounds.slice();
        var ub = upperBounds.slice();
        var options = column.options;
        var indexMin = options.length - 1;
        var indexMax = 0;
        for (var i = 0; i < options.length; i++) {
            var opts = options[i];
            var value = opts.value;
            lb[index] = opts.value;
            ub[index] = opts.value;
            var disabled = opts.disabled = (value < lowerBounds[index] ||
                value > upperBounds[index] ||
                dateSortValue(ub[0], ub[1], ub[2], ub[3], ub[4]) < min ||
                dateSortValue(lb[0], lb[1], lb[2], lb[3], lb[4]) > max);
            if (!disabled) {
                indexMin = Math.min(indexMin, i);
                indexMax = Math.max(indexMax, i);
            }
        }
        var selectedIndex = column.selectedIndex = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["c"])(indexMin, column.selectedIndex, indexMax);
        var opt = column.options[selectedIndex];
        if (opt) {
            return opt.value;
        }
        return 0;
    };
    Object.defineProperty(class_1.prototype, "text", {
        get: function () {
            // create the text of the formatted data
            var template = this.displayFormat || this.pickerFormat || DEFAULT_FORMAT;
            if (this.value === undefined ||
                this.value === null ||
                this.value.length === 0) {
                return;
            }
            return renderDatetime(template, this.datetimeValue, this.locale);
        },
        enumerable: true,
        configurable: true
    });
    class_1.prototype.hasValue = function () {
        return this.text !== undefined;
    };
    class_1.prototype.setFocus = function () {
        if (this.buttonEl) {
            this.buttonEl.focus();
        }
    };
    class_1.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this, inputId = _b.inputId, text = _b.text, disabled = _b.disabled, readonly = _b.readonly, isExpanded = _b.isExpanded, el = _b.el, placeholder = _b.placeholder;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var labelId = inputId + '-lbl';
        var label = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["f"])(el);
        var addPlaceholderClass = (text === undefined && placeholder != null) ? true : false;
        // If selected text has been passed in, use that first
        // otherwise use the placeholder
        var datetimeText = text === undefined
            ? (placeholder != null ? placeholder : '')
            : text;
        if (label) {
            label.id = labelId;
        }
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["a"])(true, el, this.name, this.value, this.disabled);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onClick: this.onClick, role: "combobox", "aria-disabled": disabled ? 'true' : null, "aria-expanded": "" + isExpanded, "aria-haspopup": "true", "aria-labelledby": labelId, class: (_a = {},
                _a[mode] = true,
                _a['datetime-disabled'] = disabled,
                _a['datetime-readonly'] = readonly,
                _a['datetime-placeholder'] = addPlaceholderClass,
                _a['in-item'] = Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__["h"])('ion-item', el),
                _a) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "datetime-text" }, datetimeText), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: this.disabled, ref: function (btnEl) { return _this.buttonEl = btnEl; } })));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "disabled": ["disabledChanged"],
                "value": ["valueChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family,inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}:host-context([dir=rtl]) .datetime-text,[dir=rtl] .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var divyColumns = function (columns) {
    var columnsWidth = [];
    var col;
    var width;
    for (var i = 0; i < columns.length; i++) {
        col = columns[i];
        columnsWidth.push(0);
        for (var _i = 0, _a = col.options; _i < _a.length; _i++) {
            var option = _a[_i];
            width = option.text.length;
            if (width > columnsWidth[i]) {
                columnsWidth[i] = width;
            }
        }
    }
    if (columnsWidth.length === 2) {
        width = Math.max(columnsWidth[0], columnsWidth[1]);
        columns[0].align = 'right';
        columns[1].align = 'left';
        columns[0].optionsWidth = columns[1].optionsWidth = width * 17 + "px";
    }
    else if (columnsWidth.length === 3) {
        width = Math.max(columnsWidth[0], columnsWidth[2]);
        columns[0].align = 'right';
        columns[1].columnWidth = columnsWidth[1] * 17 + "px";
        columns[0].optionsWidth = columns[2].optionsWidth = width * 17 + "px";
        columns[2].align = 'left';
    }
    return columns;
};
var DEFAULT_FORMAT = 'MMM D, YYYY';
var datetimeIds = 0;
/**
 * iOS Picker Enter Animation
 */
var iosEnterAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.26);
    wrapperAnimation
        .addElement(baseEl.querySelector('.picker-wrapper'))
        .fromTo('transform', 'translateY(100%)', 'translateY(0%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * iOS Picker Leave Animation
 */
var iosLeaveAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.26, 0.01);
    wrapperAnimation
        .addElement(baseEl.querySelector('.picker-wrapper'))
        .fromTo('transform', 'translateY(0%)', 'translateY(100%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
var Picker = /** @class */ (function () {
    function class_2(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        this.presented = false;
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = true;
        /**
         * Array of buttons to be displayed at the top of the picker.
         */
        this.buttons = [];
        /**
         * Array of columns to be displayed in the picker.
         */
        this.columns = [];
        /**
         * Number of milliseconds to wait before dismissing the picker.
         */
        this.duration = 0;
        /**
         * If `true`, a backdrop will be displayed behind the picker.
         */
        this.showBackdrop = true;
        /**
         * If `true`, the picker will be dismissed when the backdrop is clicked.
         */
        this.backdropDismiss = true;
        /**
         * If `true`, the picker will animate.
         */
        this.animated = true;
        this.onBackdropTap = function () {
            var cancelBtn = _this.buttons.find(function (b) { return b.role === 'cancel'; });
            if (cancelBtn) {
                _this.buttonClick(cancelBtn);
            }
            else {
                _this.dismiss();
            }
        };
        Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this.el);
        this.didPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionPickerDidPresent", 7);
        this.willPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionPickerWillPresent", 7);
        this.willDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionPickerWillDismiss", 7);
        this.didDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionPickerDidDismiss", 7);
    }
    /**
     * Present the picker overlay after it has been created.
     */
    class_2.prototype.present = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this, 'pickerEnter', iosEnterAnimation, iosEnterAnimation, undefined)];
                    case 1:
                        _a.sent();
                        if (this.duration > 0) {
                            this.durationTimeout = setTimeout(function () { return _this.dismiss(); }, this.duration);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Dismiss the picker overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the picker.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the picker.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */
    class_2.prototype.dismiss = function (data, role) {
        if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
        }
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["f"])(this, data, role, 'pickerLeave', iosLeaveAnimation, iosLeaveAnimation);
    };
    /**
     * Returns a promise that resolves when the picker did dismiss.
     */
    class_2.prototype.onDidDismiss = function () {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.el, 'ionPickerDidDismiss');
    };
    /**
     * Returns a promise that resolves when the picker will dismiss.
     */
    class_2.prototype.onWillDismiss = function () {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.el, 'ionPickerWillDismiss');
    };
    /**
     * Get the column that matches the specified name.
     *
     * @param name The name of the column.
     */
    class_2.prototype.getColumn = function (name) {
        return Promise.resolve(this.columns.find(function (column) { return column.name === name; }));
    };
    class_2.prototype.buttonClick = function (button) {
        // if (this.disabled) {
        //   return;
        // }
        // keep the time of the most recent button click
        // a handler has been provided, execute it
        // pass the handler the values from the inputs
        var shouldDismiss = Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["s"])(button.handler, this.getSelected()) !== false;
        if (shouldDismiss) {
            return this.dismiss();
        }
        return Promise.resolve(false);
    };
    class_2.prototype.getSelected = function () {
        var selected = {};
        this.columns.forEach(function (col, index) {
            var selectedColumn = col.selectedIndex !== undefined
                ? col.options[col.selectedIndex]
                : undefined;
            selected[col.name] = {
                text: selectedColumn ? selectedColumn.text : undefined,
                value: selectedColumn ? selectedColumn.value : undefined,
                columnIndex: index
            };
        });
        return selected;
    };
    class_2.prototype.render = function () {
        var _a;
        var _this = this;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { "aria-modal": "true", class: Object.assign((_a = {}, _a[mode] = true, 
            // Used internally for styling
            _a["picker-" + mode] = true, _a), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__["g"])(this.cssClass)), style: {
                zIndex: "" + (20000 + this.overlayIndex)
            }, onIonBackdropTap: this.onBackdropTap }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "picker-wrapper", role: "dialog" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "picker-toolbar" }, this.buttons.map(function (b) { return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: buttonWrapperClass(b) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button", { type: "button", onClick: function () { return _this.buttonClick(b); }, class: buttonClass(b) }, b.text))); })), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "picker-columns" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "picker-above-highlight" }), this.presented && this.columns.map(function (c) { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-picker-column", { col: c }); }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "picker-below-highlight" })))));
    };
    Object.defineProperty(class_2.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "style", {
        get: function () { return ".sc-ion-picker-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family,inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}[dir=rtl].sc-ion-picker-md-h, [dir=rtl] .sc-ion-picker-md-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-picker-md-h{display:none}.picker-wrapper.sc-ion-picker-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-wrapper.sc-ion-picker-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-md:active, .picker-button.sc-ion-picker-md:focus{outline:none}.picker-columns.sc-ion-picker-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom,0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-md, .picker-below-highlight.sc-ion-picker-md{display:none;pointer-events:none}.sc-ion-picker-md-h{--background:var(--ion-background-color,#fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))));--height:260px;color:var(--ion-item-color,var(--ion-text-color,#000))}.picker-toolbar.sc-ion-picker-md{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-md, .picker-button.activated.sc-ion-picker-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1.1em;padding-right:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary,#3880ff);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-button.sc-ion-picker-md, .picker-button.activated.sc-ion-picker-md{padding-left:unset;padding-right:unset;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em}}.picker-columns.sc-ion-picker-md{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-above-highlight.sc-ion-picker-md{left:0;top:0;-webkit-transform:translateZ(90px);transform:translateZ(90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));background:-webkit-gradient(linear,left top,left bottom,color-stop(20%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(180deg,var(--ion-background-color,#fff) 20%,rgba(var(--ion-background-color-rgb,255,255,255),.8));z-index:10}[dir=rtl].sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md, [dir=rtl] .sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md, [dir=rtl].sc-ion-picker-md .picker-above-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}.picker-below-highlight.sc-ion-picker-md{left:0;top:115px;-webkit-transform:translateZ(90px);transform:translateZ(90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));background:-webkit-gradient(linear,left bottom,left top,color-stop(30%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(0deg,var(--ion-background-color,#fff) 30%,rgba(var(--ion-background-color-rgb,255,255,255),.8));z-index:11}[dir=rtl].sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md, [dir=rtl] .sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md, [dir=rtl].sc-ion-picker-md .picker-below-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
var buttonWrapperClass = function (button) {
    var _a;
    return _a = {},
        _a["picker-toolbar-" + button.role] = button.role !== undefined,
        _a['picker-toolbar-button'] = true,
        _a;
};
var buttonClass = function (button) {
    return Object.assign({ 'picker-button': true, 'ion-activatable': true }, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__["g"])(button.cssClass));
};
var PickerColumnCmp = /** @class */ (function () {
    function class_3(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.optHeight = 0;
        this.rotateFactor = 0;
        this.scaleFactor = 1;
        this.velocity = 0;
        this.y = 0;
        this.noAnimate = true;
        this.ionPickerColChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionPickerColChange", 7);
    }
    class_3.prototype.colChanged = function () {
        this.refresh();
    };
    class_3.prototype.connectedCallback = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var pickerRotateFactor, pickerScaleFactor, mode, _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        pickerRotateFactor = 0;
                        pickerScaleFactor = 0.81;
                        mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
                        if (mode === 'ios') {
                            pickerRotateFactor = -0.46;
                            pickerScaleFactor = 1;
                        }
                        this.rotateFactor = pickerRotateFactor;
                        this.scaleFactor = pickerScaleFactor;
                        _a = this;
                        return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "./node_modules/@ionic/core/dist/esm-es5/index-624eea58.js"))];
                    case 1:
                        _a.gesture = (_b.sent()).createGesture({
                            el: this.el,
                            gestureName: 'picker-swipe',
                            gesturePriority: 100,
                            threshold: 0,
                            onStart: function (ev) { return _this.onStart(ev); },
                            onMove: function (ev) { return _this.onMove(ev); },
                            onEnd: function (ev) { return _this.onEnd(ev); },
                        });
                        this.gesture.setDisabled(false);
                        this.tmrId = setTimeout(function () {
                            _this.noAnimate = false;
                            _this.refresh(true);
                        }, 250);
                        return [2 /*return*/];
                }
            });
        });
    };
    class_3.prototype.componentDidLoad = function () {
        var colEl = this.optsEl;
        if (colEl) {
            // DOM READ
            // We perfom a DOM read over a rendered item, this needs to happen after the first render
            this.optHeight = (colEl.firstElementChild ? colEl.firstElementChild.clientHeight : 0);
        }
        this.refresh();
    };
    class_3.prototype.disconnectedCallback = function () {
        cancelAnimationFrame(this.rafId);
        clearTimeout(this.tmrId);
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    };
    class_3.prototype.emitColChange = function () {
        this.ionPickerColChange.emit(this.col);
    };
    class_3.prototype.setSelected = function (selectedIndex, duration) {
        // if there is a selected index, then figure out it's y position
        // if there isn't a selected index, then just use the top y position
        var y = (selectedIndex > -1) ? -(selectedIndex * this.optHeight) : 0;
        this.velocity = 0;
        // set what y position we're at
        cancelAnimationFrame(this.rafId);
        this.update(y, duration, true);
        this.emitColChange();
    };
    class_3.prototype.update = function (y, duration, saveY) {
        if (!this.optsEl) {
            return;
        }
        // ensure we've got a good round number :)
        var translateY = 0;
        var translateZ = 0;
        var _a = this, col = _a.col, rotateFactor = _a.rotateFactor;
        var selectedIndex = col.selectedIndex = this.indexForY(-y);
        var durationStr = (duration === 0) ? '' : duration + 'ms';
        var scaleStr = "scale(" + this.scaleFactor + ")";
        var children = this.optsEl.children;
        for (var i = 0; i < children.length; i++) {
            var button = children[i];
            var opt = col.options[i];
            var optOffset = (i * this.optHeight) + y;
            var transform = '';
            if (rotateFactor !== 0) {
                var rotateX = optOffset * rotateFactor;
                if (Math.abs(rotateX) <= 90) {
                    translateY = 0;
                    translateZ = 90;
                    transform = "rotateX(" + rotateX + "deg) ";
                }
                else {
                    translateY = -9999;
                }
            }
            else {
                translateZ = 0;
                translateY = optOffset;
            }
            var selected = selectedIndex === i;
            transform += "translate3d(0px," + translateY + "px," + translateZ + "px) ";
            if (this.scaleFactor !== 1 && !selected) {
                transform += scaleStr;
            }
            // Update transition duration
            if (this.noAnimate) {
                opt.duration = 0;
                button.style.transitionDuration = '';
            }
            else if (duration !== opt.duration) {
                opt.duration = duration;
                button.style.transitionDuration = durationStr;
            }
            // Update transform
            if (transform !== opt.transform) {
                opt.transform = transform;
                button.style.transform = transform;
            }
            // Update selected item
            if (selected !== opt.selected) {
                opt.selected = selected;
                if (selected) {
                    button.classList.add(PICKER_OPT_SELECTED);
                }
                else {
                    button.classList.remove(PICKER_OPT_SELECTED);
                }
            }
        }
        this.col.prevSelected = selectedIndex;
        if (saveY) {
            this.y = y;
        }
        if (this.lastIndex !== selectedIndex) {
            // have not set a last index yet
            Object(_haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_7__["b"])();
            this.lastIndex = selectedIndex;
        }
    };
    class_3.prototype.decelerate = function () {
        var _this = this;
        if (this.velocity !== 0) {
            // still decelerating
            this.velocity *= DECELERATION_FRICTION;
            // do not let it go slower than a velocity of 1
            this.velocity = (this.velocity > 0)
                ? Math.max(this.velocity, 1)
                : Math.min(this.velocity, -1);
            var y = this.y + this.velocity;
            if (y > this.minY) {
                // whoops, it's trying to scroll up farther than the options we have!
                y = this.minY;
                this.velocity = 0;
            }
            else if (y < this.maxY) {
                // gahh, it's trying to scroll down farther than we can!
                y = this.maxY;
                this.velocity = 0;
            }
            this.update(y, 0, true);
            var notLockedIn = (Math.round(y) % this.optHeight !== 0) || (Math.abs(this.velocity) > 1);
            if (notLockedIn) {
                // isn't locked in yet, keep decelerating until it is
                this.rafId = requestAnimationFrame(function () { return _this.decelerate(); });
            }
            else {
                this.velocity = 0;
                this.emitColChange();
            }
        }
        else if (this.y % this.optHeight !== 0) {
            // needs to still get locked into a position so options line up
            var currentPos = Math.abs(this.y % this.optHeight);
            // create a velocity in the direction it needs to scroll
            this.velocity = (currentPos > (this.optHeight / 2) ? 1 : -1);
            this.decelerate();
        }
    };
    class_3.prototype.indexForY = function (y) {
        return Math.min(Math.max(Math.abs(Math.round(y / this.optHeight)), 0), this.col.options.length - 1);
    };
    // TODO should this check disabled?
    class_3.prototype.onStart = function (detail) {
        // We have to prevent default in order to block scrolling under the picker
        // but we DO NOT have to stop propagation, since we still want
        // some "click" events to capture
        detail.event.preventDefault();
        detail.event.stopPropagation();
        // reset everything
        cancelAnimationFrame(this.rafId);
        var options = this.col.options;
        var minY = (options.length - 1);
        var maxY = 0;
        for (var i = 0; i < options.length; i++) {
            if (!options[i].disabled) {
                minY = Math.min(minY, i);
                maxY = Math.max(maxY, i);
            }
        }
        this.minY = -(minY * this.optHeight);
        this.maxY = -(maxY * this.optHeight);
    };
    class_3.prototype.onMove = function (detail) {
        detail.event.preventDefault();
        detail.event.stopPropagation();
        // update the scroll position relative to pointer start position
        var y = this.y + detail.deltaY;
        if (y > this.minY) {
            // scrolling up higher than scroll area
            y = Math.pow(y, 0.8);
            this.bounceFrom = y;
        }
        else if (y < this.maxY) {
            // scrolling down below scroll area
            y += Math.pow(this.maxY - y, 0.9);
            this.bounceFrom = y;
        }
        else {
            this.bounceFrom = 0;
        }
        this.update(y, 0, false);
    };
    class_3.prototype.onEnd = function (detail) {
        if (this.bounceFrom > 0) {
            // bounce back up
            this.update(this.minY, 100, true);
            this.emitColChange();
            return;
        }
        else if (this.bounceFrom < 0) {
            // bounce back down
            this.update(this.maxY, 100, true);
            this.emitColChange();
            return;
        }
        this.velocity = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["c"])(-MAX_PICKER_SPEED, detail.velocityY * 23, MAX_PICKER_SPEED);
        if (this.velocity === 0 && detail.deltaY === 0) {
            var opt = detail.event.target.closest('.picker-opt');
            if (opt && opt.hasAttribute('opt-index')) {
                this.setSelected(parseInt(opt.getAttribute('opt-index'), 10), TRANSITION_DURATION);
            }
        }
        else {
            this.y += detail.deltaY;
            this.decelerate();
        }
    };
    class_3.prototype.refresh = function (forceRefresh) {
        var min = this.col.options.length - 1;
        var max = 0;
        var options = this.col.options;
        for (var i = 0; i < options.length; i++) {
            if (!options[i].disabled) {
                min = Math.min(min, i);
                max = Math.max(max, i);
            }
        }
        /**
         * Only update selected value if column has a
         * velocity of 0. If it does not, then the
         * column is animating might land on
         * a value different than the value at
         * selectedIndex
         */
        if (this.velocity !== 0) {
            return;
        }
        var selectedIndex = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["c"])(min, this.col.selectedIndex || 0, max);
        if (this.col.prevSelected !== selectedIndex || forceRefresh) {
            var y = (selectedIndex * this.optHeight) * -1;
            this.velocity = 0;
            this.update(y, TRANSITION_DURATION, true);
        }
    };
    class_3.prototype.render = function () {
        var _a;
        var _this = this;
        var col = this.col;
        var Button = 'button';
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: (_a = {},
                _a[mode] = true,
                _a['picker-col'] = true,
                _a['picker-opts-left'] = this.col.align === 'left',
                _a['picker-opts-right'] = this.col.align === 'right',
                _a), style: {
                'max-width': this.col.columnWidth
            } }, col.prefix && (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "picker-prefix", style: { width: col.prefixWidth } }, col.prefix)), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "picker-opts", style: { maxWidth: col.optionsWidth }, ref: function (el) { return _this.optsEl = el; } }, col.options.map(function (o, index) { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(Button, { type: "button", class: { 'picker-opt': true, 'picker-opt-disabled': !!o.disabled }, "opt-index": index }, o.text); })), col.suffix && (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "picker-suffix", style: { width: col.suffixWidth } }, col.suffix))));
    };
    Object.defineProperty(class_3.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_3, "watchers", {
        get: function () {
            return {
                "col": ["colChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_3, "style", {
        get: function () { return ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}:host-context([dir=rtl]) .picker-opt,[dir=rtl] .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{text-align:end}.picker-prefix,.picker-suffix{position:relative;-ms-flex:1;flex:1;white-space:nowrap}.picker-suffix{text-align:start}.picker-col{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.picker-opts,.picker-prefix,.picker-suffix{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-opt.picker-opt-selected,.picker-prefix,.picker-suffix{color:var(--ion-color-primary,#3880ff)}"; },
        enumerable: true,
        configurable: true
    });
    return class_3;
}());
var PICKER_OPT_SELECTED = 'picker-opt-selected';
var DECELERATION_FRICTION = 0.97;
var MAX_PICKER_SPEED = 90;
var TRANSITION_DURATION = 150;



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var router;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction)];
            }
        }
        return [2 /*return*/, false];
    });
}); };



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2hhcHRpYy1jOGYxNDczZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1kYXRldGltZV8zLW1kLmVudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUg7Ozs7Ozs7Ozs7Ozs7QUMxQ2pIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUM4RTtBQUMvRjtBQUNpRTtBQUNoQztBQUNrRjtBQUN4RTtBQUNOO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixjQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixlQUFlO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVTtBQUNwQyw0QkFBNEIsWUFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRTtBQUNqSix5QkFBeUIsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUU7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGdCQUFnQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wseURBQXlELHFCQUFxQixFQUFFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyw4QkFBOEIsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDBCQUEwQixFQUFFO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw0QkFBNEI7QUFDakMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSywyQkFBMkI7QUFDaEMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSywwQkFBMEI7QUFDL0IsS0FBSywwQkFBMEI7QUFDL0IsS0FBSywyQkFBMkI7QUFDaEMsS0FBSyx5QkFBeUI7QUFDOUIsS0FBSywwQkFBMEI7QUFDL0IsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyw0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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBc0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLDJCQUEyQixFQUFFO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNrRiIsImZpbGUiOiIxNC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENoZWNrIHRvIHNlZSBpZiB0aGUgSGFwdGljIFBsdWdpbiBpcyBhdmFpbGFibGVcbiAqIEByZXR1cm4gUmV0dXJucyBgdHJ1ZWAgb3IgZmFsc2UgaWYgdGhlIHBsdWdpbiBpcyBhdmFpbGFibGVcbiAqL1xuLyoqXG4gKiBUcmlnZ2VyIGEgc2VsZWN0aW9uIGNoYW5nZWQgaGFwdGljIGV2ZW50LiBHb29kIGZvciBvbmUtdGltZSBldmVudHNcbiAqIChub3QgZm9yIGdlc3R1cmVzKVxuICovXG52YXIgaGFwdGljU2VsZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbmdpbmUgPSB3aW5kb3cuVGFwdGljRW5naW5lO1xuICAgIGlmIChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLnNlbGVjdGlvbigpO1xuICAgIH1cbn07XG4vKipcbiAqIFRlbGwgdGhlIGhhcHRpYyBlbmdpbmUgdGhhdCBhIGdlc3R1cmUgZm9yIGEgc2VsZWN0aW9uIGNoYW5nZSBpcyBzdGFydGluZy5cbiAqL1xudmFyIGhhcHRpY1NlbGVjdGlvblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbmdpbmUgPSB3aW5kb3cuVGFwdGljRW5naW5lO1xuICAgIGlmIChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmdlc3R1cmVTZWxlY3Rpb25TdGFydCgpO1xuICAgIH1cbn07XG4vKipcbiAqIFRlbGwgdGhlIGhhcHRpYyBlbmdpbmUgdGhhdCBhIHNlbGVjdGlvbiBjaGFuZ2VkIGR1cmluZyBhIGdlc3R1cmUuXG4gKi9cbnZhciBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbmdpbmUgPSB3aW5kb3cuVGFwdGljRW5naW5lO1xuICAgIGlmIChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmdlc3R1cmVTZWxlY3Rpb25DaGFuZ2VkKCk7XG4gICAgfVxufTtcbi8qKlxuICogVGVsbCB0aGUgaGFwdGljIGVuZ2luZSB3ZSBhcmUgZG9uZSB3aXRoIGEgZ2VzdHVyZS4gVGhpcyBuZWVkcyB0byBiZVxuICogY2FsbGVkIGxlc3QgcmVzb3VyY2VzIGFyZSBub3QgcHJvcGVybHkgcmVjeWNsZWQuXG4gKi9cbnZhciBoYXB0aWNTZWxlY3Rpb25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVuZ2luZSA9IHdpbmRvdy5UYXB0aWNFbmdpbmU7XG4gICAgaWYgKGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvbkVuZCgpO1xuICAgIH1cbn07XG5leHBvcnQgeyBoYXB0aWNTZWxlY3Rpb25TdGFydCBhcyBhLCBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkIGFzIGIsIGhhcHRpY1NlbGVjdGlvbkVuZCBhcyBjLCBoYXB0aWNTZWxlY3Rpb24gYXMgaCB9O1xuIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBkIGFzIGNyZWF0ZUV2ZW50LCBjIGFzIGdldElvbk1vZGUsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWZlZWVmZjBkLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgYyBhcyBjbGFtcCwgZiBhcyBmaW5kSXRlbUxhYmVsLCBhIGFzIHJlbmRlckhpZGRlbklucHV0IH0gZnJvbSAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tYWY0NzhmZTkuanMnO1xuaW1wb3J0IHsgcCBhcyBwaWNrZXJDb250cm9sbGVyLCBkIGFzIHByZXBhcmVPdmVybGF5LCBlIGFzIHByZXNlbnQsIGYgYXMgZGlzbWlzcywgZyBhcyBldmVudE1ldGhvZCwgcyBhcyBzYWZlQ2FsbCB9IGZyb20gJy4vb3ZlcmxheXMtMTA2NDBkODYuanMnO1xuaW1wb3J0IHsgaCBhcyBob3N0Q29udGV4dCwgZyBhcyBnZXRDbGFzc01hcCB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuaW1wb3J0IHsgYiBhcyBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkIH0gZnJvbSAnLi9oYXB0aWMtYzhmMTQ3M2UuanMnO1xuLyoqXG4gKiBHZXRzIGEgZGF0ZSB2YWx1ZSBnaXZlbiBhIGZvcm1hdFxuICogRGVmYXVsdHMgdG8gdGhlIGN1cnJlbnQgZGF0ZSBpZlxuICogbm8gZGF0ZSBnaXZlblxuICovXG52YXIgZ2V0RGF0ZVZhbHVlID0gZnVuY3Rpb24gKGRhdGUsIGZvcm1hdCkge1xuICAgIHZhciBnZXRWYWx1ZSA9IGdldFZhbHVlRnJvbUZvcm1hdChkYXRlLCBmb3JtYXQpO1xuICAgIGlmIChnZXRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBnZXRWYWx1ZTtcbiAgICB9XG4gICAgdmFyIGRlZmF1bHREYXRlID0gcGFyc2VEYXRlKG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSk7XG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbUZvcm1hdChkZWZhdWx0RGF0ZSwgZm9ybWF0KTtcbn07XG52YXIgcmVuZGVyRGF0ZXRpbWUgPSBmdW5jdGlvbiAodGVtcGxhdGUsIHZhbHVlLCBsb2NhbGUpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGhhc1RleHQgPSBmYWxzZTtcbiAgICBGT1JNQVRfS0VZUy5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtYXQsIGluZGV4KSB7XG4gICAgICAgIGlmICh0ZW1wbGF0ZS5pbmRleE9mKGZvcm1hdC5mKSA+IC0xKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSAneycgKyBpbmRleCArICd9JztcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gcmVuZGVyVGV4dEZvcm1hdChmb3JtYXQuZiwgdmFsdWVbZm9ybWF0LmtdLCB2YWx1ZSwgbG9jYWxlKTtcbiAgICAgICAgICAgIGlmICghaGFzVGV4dCAmJiB0ZXh0ICE9PSB1bmRlZmluZWQgJiYgdmFsdWVbZm9ybWF0LmtdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBoYXNUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuLCB0ZXh0IHx8ICcnKTtcbiAgICAgICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShmb3JtYXQuZiwgdG9rZW4pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFoYXNUZXh0KSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSh0b2tlbnNbaV0sIHRva2Vuc1tpICsgMV0pO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGU7XG59O1xudmFyIHJlbmRlclRleHRGb3JtYXQgPSBmdW5jdGlvbiAoZm9ybWF0LCB2YWx1ZSwgZGF0ZSwgbG9jYWxlKSB7XG4gICAgaWYgKChmb3JtYXQgPT09IEZPUk1BVF9EREREIHx8IGZvcm1hdCA9PT0gRk9STUFUX0RERCkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhbHVlID0gKG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5KSkuZ2V0RGF5KCk7XG4gICAgICAgICAgICBpZiAoZm9ybWF0ID09PSBGT1JNQVRfRERERCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAobG9jYWxlLmRheU5hbWVzID8gbG9jYWxlLmRheU5hbWVzIDogREFZX05BTUVTKVt2YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKGxvY2FsZS5kYXlTaG9ydE5hbWVzID8gbG9jYWxlLmRheVNob3J0TmFtZXMgOiBEQVlfU0hPUlRfTkFNRVMpW3ZhbHVlXTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gRk9STUFUX0EpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUgIT09IHVuZGVmaW5lZCAmJiBkYXRlLmhvdXIgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAoZGF0ZS5ob3VyIDwgMTIgPyAnQU0nIDogJ1BNJylcbiAgICAgICAgICAgIDogdmFsdWUgPyB2YWx1ZS50b1VwcGVyQ2FzZSgpIDogJyc7XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IEZPUk1BVF9hKSB7XG4gICAgICAgIHJldHVybiBkYXRlICE9PSB1bmRlZmluZWQgJiYgZGF0ZS5ob3VyICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gKGRhdGUuaG91ciA8IDEyID8gJ2FtJyA6ICdwbScpXG4gICAgICAgICAgICA6IHZhbHVlIHx8ICcnO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IEZPUk1BVF9ZWSB8fCBmb3JtYXQgPT09IEZPUk1BVF9NTSB8fFxuICAgICAgICBmb3JtYXQgPT09IEZPUk1BVF9ERCB8fCBmb3JtYXQgPT09IEZPUk1BVF9ISCB8fFxuICAgICAgICBmb3JtYXQgPT09IEZPUk1BVF9tbSB8fCBmb3JtYXQgPT09IEZPUk1BVF9zcykge1xuICAgICAgICByZXR1cm4gdHdvRGlnaXQodmFsdWUpO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSBGT1JNQVRfWVlZWSkge1xuICAgICAgICByZXR1cm4gZm91ckRpZ2l0KHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gRk9STUFUX01NTU0pIHtcbiAgICAgICAgcmV0dXJuIChsb2NhbGUubW9udGhOYW1lcyA/IGxvY2FsZS5tb250aE5hbWVzIDogTU9OVEhfTkFNRVMpW3ZhbHVlIC0gMV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IEZPUk1BVF9NTU0pIHtcbiAgICAgICAgcmV0dXJuIChsb2NhbGUubW9udGhTaG9ydE5hbWVzID8gbG9jYWxlLm1vbnRoU2hvcnROYW1lcyA6IE1PTlRIX1NIT1JUX05BTUVTKVt2YWx1ZSAtIDFdO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSBGT1JNQVRfaGggfHwgZm9ybWF0ID09PSBGT1JNQVRfaCkge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnMTInO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA+IDEyKSB7XG4gICAgICAgICAgICB2YWx1ZSAtPSAxMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBGT1JNQVRfaGggJiYgdmFsdWUgPCAxMCkge1xuICAgICAgICAgICAgcmV0dXJuICgnMCcgKyB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG59O1xudmFyIGRhdGVWYWx1ZVJhbmdlID0gZnVuY3Rpb24gKGZvcm1hdCwgbWluLCBtYXgpIHtcbiAgICB2YXIgb3B0cyA9IFtdO1xuICAgIGlmIChmb3JtYXQgPT09IEZPUk1BVF9ZWVlZIHx8IGZvcm1hdCA9PT0gRk9STUFUX1lZKSB7XG4gICAgICAgIC8vIHllYXJcbiAgICAgICAgaWYgKG1heC55ZWFyID09PSB1bmRlZmluZWQgfHwgbWluLnllYXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaW4gYW5kIG1heCB5ZWFyIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSBtYXgueWVhcjsgaSA+PSBtaW4ueWVhcjsgaS0tKSB7XG4gICAgICAgICAgICBvcHRzLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZm9ybWF0ID09PSBGT1JNQVRfTU1NTSB8fCBmb3JtYXQgPT09IEZPUk1BVF9NTU0gfHxcbiAgICAgICAgZm9ybWF0ID09PSBGT1JNQVRfTU0gfHwgZm9ybWF0ID09PSBGT1JNQVRfTSB8fFxuICAgICAgICBmb3JtYXQgPT09IEZPUk1BVF9oaCB8fCBmb3JtYXQgPT09IEZPUk1BVF9oKSB7XG4gICAgICAgIC8vIG1vbnRoIG9yIDEyLWhvdXJcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCAxMzsgaSsrKSB7XG4gICAgICAgICAgICBvcHRzLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZm9ybWF0ID09PSBGT1JNQVRfRERERCB8fCBmb3JtYXQgPT09IEZPUk1BVF9EREQgfHxcbiAgICAgICAgZm9ybWF0ID09PSBGT1JNQVRfREQgfHwgZm9ybWF0ID09PSBGT1JNQVRfRCkge1xuICAgICAgICAvLyBkYXlcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCAzMjsgaSsrKSB7XG4gICAgICAgICAgICBvcHRzLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZm9ybWF0ID09PSBGT1JNQVRfSEggfHwgZm9ybWF0ID09PSBGT1JNQVRfSCkge1xuICAgICAgICAvLyAyNC1ob3VyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgICAgICAgICAgb3B0cy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGZvcm1hdCA9PT0gRk9STUFUX21tIHx8IGZvcm1hdCA9PT0gRk9STUFUX20pIHtcbiAgICAgICAgLy8gbWludXRlc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDYwOyBpKyspIHtcbiAgICAgICAgICAgIG9wdHMucHVzaChpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChmb3JtYXQgPT09IEZPUk1BVF9zcyB8fCBmb3JtYXQgPT09IEZPUk1BVF9zKSB7XG4gICAgICAgIC8vIHNlY29uZHNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2MDsgaSsrKSB7XG4gICAgICAgICAgICBvcHRzLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZm9ybWF0ID09PSBGT1JNQVRfQSB8fCBmb3JtYXQgPT09IEZPUk1BVF9hKSB7XG4gICAgICAgIC8vIEFNL1BNXG4gICAgICAgIG9wdHMucHVzaCgnYW0nLCAncG0nKTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdHM7XG59O1xudmFyIGRhdGVTb3J0VmFsdWUgPSBmdW5jdGlvbiAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlKSB7XG4gICAgaWYgKGhvdXIgPT09IHZvaWQgMCkgeyBob3VyID0gMDsgfVxuICAgIGlmIChtaW51dGUgPT09IHZvaWQgMCkgeyBtaW51dGUgPSAwOyB9XG4gICAgcmV0dXJuIHBhcnNlSW50KFwiMVwiICsgZm91ckRpZ2l0KHllYXIpICsgdHdvRGlnaXQobW9udGgpICsgdHdvRGlnaXQoZGF5KSArIHR3b0RpZ2l0KGhvdXIpICsgdHdvRGlnaXQobWludXRlKSwgMTApO1xufTtcbnZhciBkYXRlRGF0YVNvcnRWYWx1ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGVTb3J0VmFsdWUoZGF0YS55ZWFyLCBkYXRhLm1vbnRoLCBkYXRhLmRheSwgZGF0YS5ob3VyLCBkYXRhLm1pbnV0ZSk7XG59O1xudmFyIGRheXNJbk1vbnRoID0gZnVuY3Rpb24gKG1vbnRoLCB5ZWFyKSB7XG4gICAgcmV0dXJuIChtb250aCA9PT0gNCB8fCBtb250aCA9PT0gNiB8fCBtb250aCA9PT0gOSB8fCBtb250aCA9PT0gMTEpID8gMzAgOiAobW9udGggPT09IDIpID8gaXNMZWFwWWVhcih5ZWFyKSA/IDI5IDogMjggOiAzMTtcbn07XG52YXIgaXNMZWFwWWVhciA9IGZ1bmN0aW9uICh5ZWFyKSB7XG4gICAgcmV0dXJuICh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKSB8fCAoeWVhciAlIDQwMCA9PT0gMCk7XG59O1xudmFyIElTT184NjAxX1JFR0VYUCA9IC9eKFxcZHs0fXxbK1xcLV1cXGR7Nn0pKD86LShcXGR7Mn0pKD86LShcXGR7Mn0pKT8pPyg/OlQoXFxkezJ9KTooXFxkezJ9KSg/OjooXFxkezJ9KSg/OlxcLihcXGR7M30pKT8pPyg/OihaKXwoWytcXC1dKShcXGR7Mn0pKD86OihcXGR7Mn0pKT8pPyk/JC87XG52YXIgVElNRV9SRUdFWFAgPSAvXigoXFxkezJ9KTooXFxkezJ9KSg/OjooXFxkezJ9KSg/OlxcLihcXGR7M30pKT8pPyg/OihaKXwoWytcXC1dKShcXGR7Mn0pKD86OihcXGR7Mn0pKT8pPyk/JC87XG52YXIgcGFyc2VEYXRlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIC8vIG1hbnVhbGx5IHBhcnNlIElTMCBjdXogRGF0ZS5wYXJzZSBjYW5ub3QgYmUgdHJ1c3RlZFxuICAgIC8vIElTTyA4NjAxIGZvcm1hdDogMTk5NC0xMi0xNVQxMzo0NzoyMFpcbiAgICB2YXIgcGFyc2UgPSBudWxsO1xuICAgIGlmICh2YWwgIT0gbnVsbCAmJiB2YWwgIT09ICcnKSB7XG4gICAgICAgIC8vIHRyeSBwYXJzaW5nIGZvciBqdXN0IHRpbWUgZmlyc3QsIEhIOk1NXG4gICAgICAgIHBhcnNlID0gVElNRV9SRUdFWFAuZXhlYyh2YWwpO1xuICAgICAgICBpZiAocGFyc2UpIHtcbiAgICAgICAgICAgIC8vIGFkanVzdCB0aGUgYXJyYXkgc28gaXQgZml0cyBuaWNlbHkgd2l0aCB0aGUgZGF0ZXRpbWUgcGFyc2VcbiAgICAgICAgICAgIHBhcnNlLnVuc2hpZnQodW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgcGFyc2VbMl0gPSBwYXJzZVszXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRyeSBwYXJzaW5nIGZvciBmdWxsIElTTyBkYXRldGltZVxuICAgICAgICAgICAgcGFyc2UgPSBJU09fODYwMV9SRUdFWFAuZXhlYyh2YWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwYXJzZSA9PT0gbnVsbCkge1xuICAgICAgICAvLyB3YXNuJ3QgYWJsZSB0byBwYXJzZSB0aGUgSVNPIGRhdGV0aW1lXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIGVuc3VyZSBhbGwgdGhlIHBhcnNlIHZhbHVlcyBleGlzdCB3aXRoIGF0IGxlYXN0IDBcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IDg7IGkrKykge1xuICAgICAgICBwYXJzZVtpXSA9IHBhcnNlW2ldICE9PSB1bmRlZmluZWQgPyBwYXJzZUludChwYXJzZVtpXSwgMTApIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICB2YXIgdHpPZmZzZXQgPSAwO1xuICAgIGlmIChwYXJzZVs5XSAmJiBwYXJzZVsxMF0pIHtcbiAgICAgICAgLy8gaG91cnNcbiAgICAgICAgdHpPZmZzZXQgPSBwYXJzZUludChwYXJzZVsxMF0sIDEwKSAqIDYwO1xuICAgICAgICBpZiAocGFyc2VbMTFdKSB7XG4gICAgICAgICAgICAvLyBtaW51dGVzXG4gICAgICAgICAgICB0ek9mZnNldCArPSBwYXJzZUludChwYXJzZVsxMV0sIDEwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VbOV0gPT09ICctJykge1xuICAgICAgICAgICAgLy8gKyBvciAtXG4gICAgICAgICAgICB0ek9mZnNldCAqPSAtMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB5ZWFyOiBwYXJzZVsxXSxcbiAgICAgICAgbW9udGg6IHBhcnNlWzJdLFxuICAgICAgICBkYXk6IHBhcnNlWzNdLFxuICAgICAgICBob3VyOiBwYXJzZVs0XSxcbiAgICAgICAgbWludXRlOiBwYXJzZVs1XSxcbiAgICAgICAgc2Vjb25kOiBwYXJzZVs2XSxcbiAgICAgICAgbWlsbGlzZWNvbmQ6IHBhcnNlWzddLFxuICAgICAgICB0ek9mZnNldDogdHpPZmZzZXQsXG4gICAgfTtcbn07XG4vKipcbiAqIENvbnZlcnRzIGEgdmFsaWQgVVRDIGRhdGV0aW1lIHN0cmluZ1xuICogVG8gdGhlIHVzZXIncyBsb2NhbCB0aW1lem9uZVxuICogTm90ZTogVGhpcyBpcyBub3QgbWVhbnQgZm9yIHRpbWUgc3RyaW5nc1xuICogc3VjaCBhcyBcIjAxOjQ3XCJcbiAqL1xudmFyIGdldExvY2FsRGF0ZVRpbWUgPSBmdW5jdGlvbiAoZGF0ZVN0cmluZykge1xuICAgIGlmIChkYXRlU3RyaW5nID09PSB2b2lkIDApIHsgZGF0ZVN0cmluZyA9ICcnOyB9XG4gICAgLyoqXG4gICAgICogSWYgdXNlciBwYXNzZWQgaW4gdW5kZWZpbmVkXG4gICAgICogb3IgbnVsbCwgY29udmVydCBpdCB0byB0aGVcbiAgICAgKiBlbXB0eSBzdHJpbmcgc2luY2UgdGhlIHJlc3RcbiAgICAgKiBvZiB0aGlzIGZ1bmN0aW9ucyBleHBlY3RzXG4gICAgICogYSBzdHJpbmdcbiAgICAgKi9cbiAgICBpZiAoZGF0ZVN0cmluZyA9PT0gdW5kZWZpbmVkIHx8IGRhdGVTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgZGF0ZVN0cmluZyA9ICcnO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbnN1cmVzIHRoYXQgWVlZWS1NTS1ERCwgWVlZWS1NTSxcbiAgICAgKiBZWVlZLURELCBldGMgZG9lcyBub3QgZ2V0IGFmZmVjdGVkXG4gICAgICogYnkgdGltZXpvbmVzIGFuZCBzdGF5cyBvbiB0aGUgZGF5L21vbnRoXG4gICAgICogdGhhdCB0aGUgdXNlciBwcm92aWRlZFxuICAgICAqL1xuICAgIGlmIChkYXRlU3RyaW5nLmxlbmd0aCA9PT0gMTAgfHxcbiAgICAgICAgZGF0ZVN0cmluZy5sZW5ndGggPT09IDcpIHtcbiAgICAgICAgZGF0ZVN0cmluZyArPSAnICc7XG4gICAgfVxuICAgIHZhciBkYXRlID0gKHR5cGVvZiBkYXRlU3RyaW5nID09PSAnc3RyaW5nJyAmJiBkYXRlU3RyaW5nLmxlbmd0aCA+IDApID8gbmV3IERhdGUoZGF0ZVN0cmluZykgOiBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG59O1xudmFyIHVwZGF0ZURhdGUgPSBmdW5jdGlvbiAoZXhpc3RpbmdEYXRhLCBuZXdEYXRhKSB7XG4gICAgaWYgKCFuZXdEYXRhIHx8IHR5cGVvZiBuZXdEYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgbG9jYWxEYXRlVGltZSA9IGdldExvY2FsRGF0ZVRpbWUobmV3RGF0YSk7XG4gICAgICAgIGlmICghTnVtYmVyLmlzTmFOKGxvY2FsRGF0ZVRpbWUuZ2V0VGltZSgpKSkge1xuICAgICAgICAgICAgbmV3RGF0YSA9IGxvY2FsRGF0ZVRpbWUudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobmV3RGF0YSAmJiBuZXdEYXRhICE9PSAnJykge1xuICAgICAgICBpZiAodHlwZW9mIG5ld0RhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAvLyBuZXcgZGF0ZSBpcyBhIHN0cmluZywgYW5kIGhvcGVmdWxseSBpbiB0aGUgSVNPIGZvcm1hdFxuICAgICAgICAgICAgLy8gY29udmVydCBpdCB0byBvdXIgRGF0ZXRpbWVEYXRhIGlmIGEgdmFsaWQgSVNPXG4gICAgICAgICAgICBuZXdEYXRhID0gcGFyc2VEYXRlKG5ld0RhdGEpO1xuICAgICAgICAgICAgaWYgKG5ld0RhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyBzdWNjZXNzZnVsbHkgcGFyc2VkIHRoZSBJU08gc3RyaW5nIHRvIG91ciBEYXRldGltZURhdGFcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGV4aXN0aW5nRGF0YSwgbmV3RGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKG5ld0RhdGEueWVhciB8fCBuZXdEYXRhLmhvdXIgfHwgbmV3RGF0YS5tb250aCB8fCBuZXdEYXRhLmRheSB8fCBuZXdEYXRhLm1pbnV0ZSB8fCBuZXdEYXRhLnNlY29uZCkpIHtcbiAgICAgICAgICAgIC8vIG5ld0RhdGEgaXMgZnJvbSBvZiBhIGRhdGV0aW1lIHBpY2tlcidzIHNlbGVjdGVkIHZhbHVlc1xuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBleGlzdGluZyBEYXRldGltZURhdGEgZGF0YSB3aXRoIHRoZSBuZXcgdmFsdWVzXG4gICAgICAgICAgICAvLyBkbyBzb21lIG1hZ2ljIGZvciAxMi1ob3VyIHZhbHVlc1xuICAgICAgICAgICAgaWYgKG5ld0RhdGEuYW1wbSAmJiBuZXdEYXRhLmhvdXIpIHtcbiAgICAgICAgICAgICAgICBuZXdEYXRhLmhvdXIudmFsdWUgPSAobmV3RGF0YS5hbXBtLnZhbHVlID09PSAncG0nKVxuICAgICAgICAgICAgICAgICAgICA/IChuZXdEYXRhLmhvdXIudmFsdWUgPT09IDEyID8gMTIgOiBuZXdEYXRhLmhvdXIudmFsdWUgKyAxMilcbiAgICAgICAgICAgICAgICAgICAgOiAobmV3RGF0YS5ob3VyLnZhbHVlID09PSAxMiA/IDAgOiBuZXdEYXRhLmhvdXIudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWVyZ2UgbmV3IHZhbHVlcyBmcm9tIHRoZSBwaWNrZXIncyBzZWxlY3Rpb25cbiAgICAgICAgICAgIC8vIHRvIHRoZSBleGlzdGluZyBEYXRldGltZURhdGEgdmFsdWVzXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMobmV3RGF0YSk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBleGlzdGluZ0RhdGFba2V5XSA9IG5ld0RhdGFba2V5XS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5ld0RhdGEuYW1wbSkge1xuICAgICAgICAgICAgLy8gRXZlbiB0aG91Z2ggaW4gdGhlIHBpY2tlciBjb2x1bW4gaG91ciB2YWx1ZXMgYXJlIGJldHdlZW4gMSBhbmQgMTIsIHRoZSBob3VyIHZhbHVlIGlzIGFjdHVhbGx5IG5vcm1hbGl6ZWRcbiAgICAgICAgICAgIC8vIHRvIFswLCAyM10gaW50ZXJ2YWwuIEJlY2F1c2Ugb2YgdGhpcyB3aGVuIGNoYW5naW5nIGJldHdlZW4gQU0gYW5kIFBNIHdlIGhhdmUgdG8gdXBkYXRlIHRoZSBob3VyIHNvIGl0IHBvaW50c1xuICAgICAgICAgICAgLy8gdG8gdGhlIGNvcnJlY3QgSEggaG91clxuICAgICAgICAgICAgbmV3RGF0YS5ob3VyID0ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXdEYXRhLmhvdXJcbiAgICAgICAgICAgICAgICAgICAgPyBuZXdEYXRhLmhvdXIudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgOiAobmV3RGF0YS5hbXBtLnZhbHVlID09PSAncG0nXG4gICAgICAgICAgICAgICAgICAgICAgICA/IChleGlzdGluZ0RhdGEuaG91ciA8IDEyID8gZXhpc3RpbmdEYXRhLmhvdXIgKyAxMiA6IGV4aXN0aW5nRGF0YS5ob3VyKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoZXhpc3RpbmdEYXRhLmhvdXIgPj0gMTIgPyBleGlzdGluZ0RhdGEuaG91ciAtIDEyIDogZXhpc3RpbmdEYXRhLmhvdXIpKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGV4aXN0aW5nRGF0YVsnaG91ciddID0gbmV3RGF0YVsnaG91ciddLnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXd3LCBpbnZhbGlkIGRhdGFcbiAgICAgICAgY29uc29sZS53YXJuKFwiRXJyb3IgcGFyc2luZyBkYXRlOiBcXFwiXCIgKyBuZXdEYXRhICsgXCJcXFwiLiBQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIElTTyA4NjAxIGRhdGV0aW1lIGZvcm1hdDogaHR0cHM6Ly93d3cudzMub3JnL1RSL05PVEUtZGF0ZXRpbWVcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBibGFuayBkYXRhLCBjbGVhciBldmVyeXRoaW5nIG91dFxuICAgICAgICBmb3IgKHZhciBrIGluIGV4aXN0aW5nRGF0YSkge1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nRGF0YS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBleGlzdGluZ0RhdGFba107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbnZhciBwYXJzZVRlbXBsYXRlID0gZnVuY3Rpb24gKHRlbXBsYXRlKSB7XG4gICAgdmFyIGZvcm1hdHMgPSBbXTtcbiAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoL1teXFx3XFxzXS9naSwgJyAnKTtcbiAgICBGT1JNQVRfS0VZUy5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICAgICAgaWYgKGZvcm1hdC5mLmxlbmd0aCA+IDEgJiYgdGVtcGxhdGUuaW5kZXhPZihmb3JtYXQuZikgPiAtMSAmJiB0ZW1wbGF0ZS5pbmRleE9mKGZvcm1hdC5mICsgZm9ybWF0LmYuY2hhckF0KDApKSA8IDApIHtcbiAgICAgICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShmb3JtYXQuZiwgJyAnICsgZm9ybWF0LmYgKyAnICcpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdmFyIHdvcmRzID0gdGVtcGxhdGUuc3BsaXQoJyAnKS5maWx0ZXIoZnVuY3Rpb24gKHcpIHsgcmV0dXJuIHcubGVuZ3RoID4gMDsgfSk7XG4gICAgd29yZHMuZm9yRWFjaChmdW5jdGlvbiAod29yZCwgaSkge1xuICAgICAgICBGT1JNQVRfS0VZUy5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICAgICAgICAgIGlmICh3b3JkID09PSBmb3JtYXQuZikge1xuICAgICAgICAgICAgICAgIGlmICh3b3JkID09PSBGT1JNQVRfQSB8fCB3b3JkID09PSBGT1JNQVRfYSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGZvcm1hdCBpcyBhbiBhbS9wbSBmb3JtYXQsIHNvIGl0J3MgYW4gXCJhXCIgb3IgXCJBXCJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChmb3JtYXRzLmluZGV4T2YoRk9STUFUX2gpIDwgMCAmJiBmb3JtYXRzLmluZGV4T2YoRk9STUFUX2hoKSA8IDApIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBWQUxJRF9BTVBNX1BSRUZJWC5pbmRleE9mKHdvcmRzW2kgLSAxXSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0ZW1wbGF0ZSBkb2VzIG5vdCBhbHJlYWR5IGhhdmUgYSAxMi1ob3VyIGZvcm1hdFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3IgdGhpcyBhbS9wbSBmb3JtYXQgZG9lc24ndCBoYXZlIGEgaG91ciwgbWludXRlLCBvciBzZWNvbmQgZm9ybWF0IGltbWVkaWF0ZWx5IGJlZm9yZSBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gZG8gbm90IHRyZWF0IHRoaXMgd29yZCBcImFcIiBvciBcIkFcIiBhcyB0aGUgYW0vcG0gZm9ybWF0XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9ybWF0cy5wdXNoKHdvcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZm9ybWF0cztcbn07XG52YXIgZ2V0VmFsdWVGcm9tRm9ybWF0ID0gZnVuY3Rpb24gKGRhdGUsIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IEZPUk1BVF9BIHx8IGZvcm1hdCA9PT0gRk9STUFUX2EpIHtcbiAgICAgICAgcmV0dXJuIChkYXRlLmhvdXIgPCAxMiA/ICdhbScgOiAncG0nKTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gRk9STUFUX2hoIHx8IGZvcm1hdCA9PT0gRk9STUFUX2gpIHtcbiAgICAgICAgcmV0dXJuIChkYXRlLmhvdXIgPiAxMiA/IGRhdGUuaG91ciAtIDEyIDogKGRhdGUuaG91ciA9PT0gMCA/IDEyIDogZGF0ZS5ob3VyKSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlW2NvbnZlcnRGb3JtYXRUb0tleShmb3JtYXQpXTtcbn07XG52YXIgY29udmVydEZvcm1hdFRvS2V5ID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIGZvciAodmFyIGsgaW4gRk9STUFUX0tFWVMpIHtcbiAgICAgICAgaWYgKEZPUk1BVF9LRVlTW2tdLmYgPT09IGZvcm1hdCkge1xuICAgICAgICAgICAgcmV0dXJuIEZPUk1BVF9LRVlTW2tdLms7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG52YXIgY29udmVydERhdGFUb0lTTyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL05PVEUtZGF0ZXRpbWVcbiAgICB2YXIgcnRuID0gJyc7XG4gICAgaWYgKGRhdGEueWVhciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIFlZWVlcbiAgICAgICAgcnRuID0gZm91ckRpZ2l0KGRhdGEueWVhcik7XG4gICAgICAgIGlmIChkYXRhLm1vbnRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFlZWVktTU1cbiAgICAgICAgICAgIHJ0biArPSAnLScgKyB0d29EaWdpdChkYXRhLm1vbnRoKTtcbiAgICAgICAgICAgIGlmIChkYXRhLmRheSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gWVlZWS1NTS1ERFxuICAgICAgICAgICAgICAgIHJ0biArPSAnLScgKyB0d29EaWdpdChkYXRhLmRheSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaG91ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFlZWVktTU0tRERUSEg6bW06U1NcbiAgICAgICAgICAgICAgICAgICAgcnRuICs9IFwiVFwiICsgdHdvRGlnaXQoZGF0YS5ob3VyKSArIFwiOlwiICsgdHdvRGlnaXQoZGF0YS5taW51dGUpICsgXCI6XCIgKyB0d29EaWdpdChkYXRhLnNlY29uZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm1pbGxpc2Vjb25kID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gWVlZWS1NTS1ERFRISDptbTpTUy5TU1NcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ0biArPSAnLicgKyB0aHJlZURpZ2l0KGRhdGEubWlsbGlzZWNvbmQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnR6T2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlZWVktTU0tRERUSEg6bW06U1NaXG4gICAgICAgICAgICAgICAgICAgICAgICBydG4gKz0gJ1onO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gWVlZWS1NTS1ERFRISDptbTpTUysvLUhIOm1tXG4gICAgICAgICAgICAgICAgICAgICAgICBydG4gKz0gKGRhdGEudHpPZmZzZXQgPiAwID8gJysnIDogJy0nKSArIHR3b0RpZ2l0KE1hdGguZmxvb3IoTWF0aC5hYnMoZGF0YS50ek9mZnNldCAvIDYwKSkpICsgJzonICsgdHdvRGlnaXQoZGF0YS50ek9mZnNldCAlIDYwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChkYXRhLmhvdXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBISDptbVxuICAgICAgICBydG4gPSB0d29EaWdpdChkYXRhLmhvdXIpICsgJzonICsgdHdvRGlnaXQoZGF0YS5taW51dGUpO1xuICAgICAgICBpZiAoZGF0YS5zZWNvbmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gSEg6bW06U1NcbiAgICAgICAgICAgIHJ0biArPSAnOicgKyB0d29EaWdpdChkYXRhLnNlY29uZCk7XG4gICAgICAgICAgICBpZiAoZGF0YS5taWxsaXNlY29uZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gSEg6bW06U1MuU1NTXG4gICAgICAgICAgICAgICAgcnRuICs9ICcuJyArIHRocmVlRGlnaXQoZGF0YS5taWxsaXNlY29uZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJ0bjtcbn07XG4vKipcbiAqIFVzZSB0byBjb252ZXJ0IGEgc3RyaW5nIG9mIGNvbW1hIHNlcGFyYXRlZCBzdHJpbmdzIG9yXG4gKiBhbiBhcnJheSBvZiBzdHJpbmdzLCBhbmQgY2xlYW4gdXAgYW55IHVzZXIgaW5wdXRcbiAqL1xudmFyIGNvbnZlcnRUb0FycmF5T2ZTdHJpbmdzID0gZnVuY3Rpb24gKGlucHV0LCB0eXBlKSB7XG4gICAgaWYgKGlucHV0ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gY29udmVydCB0aGUgc3RyaW5nIHRvIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICAgICAgLy8gYXV0byByZW1vdmUgYW55IFtdIGNoYXJhY3RlcnNcbiAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9cXFt8XFxdL2csICcnKS5zcGxpdCgnLCcpO1xuICAgIH1cbiAgICB2YXIgdmFsdWVzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgICAvLyB0cmltIHVwIGVhY2ggc3RyaW5nIHZhbHVlXG4gICAgICAgIHZhbHVlcyA9IGlucHV0Lm1hcChmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWwudG9TdHJpbmcoKS50cmltKCk7IH0pO1xuICAgIH1cbiAgICBpZiAodmFsdWVzID09PSB1bmRlZmluZWQgfHwgdmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJJbnZhbGlkIFxcXCJcIiArIHR5cGUgKyBcIk5hbWVzXFxcIi4gTXVzdCBiZSBhbiBhcnJheSBvZiBzdHJpbmdzLCBvciBhIGNvbW1hIHNlcGFyYXRlZCBzdHJpbmcuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xufTtcbi8qKlxuICogVXNlIHRvIGNvbnZlcnQgYSBzdHJpbmcgb2YgY29tbWEgc2VwYXJhdGVkIG51bWJlcnMgb3JcbiAqIGFuIGFycmF5IG9mIG51bWJlcnMsIGFuZCBjbGVhbiB1cCBhbnkgdXNlciBpbnB1dFxuICovXG52YXIgY29udmVydFRvQXJyYXlPZk51bWJlcnMgPSBmdW5jdGlvbiAoaW5wdXQsIHR5cGUpIHtcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBjb252ZXJ0IHRoZSBzdHJpbmcgdG8gYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgICAgICAvLyBhdXRvIHJlbW92ZSBhbnkgd2hpdGVzcGFjZSBhbmQgW10gY2hhcmFjdGVyc1xuICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1xcW3xcXF18XFxzL2csICcnKS5zcGxpdCgnLCcpO1xuICAgIH1cbiAgICB2YXIgdmFsdWVzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgICAvLyBlbnN1cmUgZWFjaCB2YWx1ZSBpcyBhbiBhY3R1YWwgbnVtYmVyIGluIHRoZSByZXR1cm5lZCBhcnJheVxuICAgICAgICB2YWx1ZXMgPSBpbnB1dFxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobnVtKSB7IHJldHVybiBwYXJzZUludChudW0sIDEwKTsgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoaXNGaW5pdGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFsdWVzID0gW2lucHV0XTtcbiAgICB9XG4gICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiSW52YWxpZCBcXFwiXCIgKyB0eXBlICsgXCJWYWx1ZXNcXFwiLiBNdXN0IGJlIGFuIGFycmF5IG9mIG51bWJlcnMsIG9yIGEgY29tbWEgc2VwYXJhdGVkIHN0cmluZyBvZiBudW1iZXJzLlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbn07XG52YXIgdHdvRGlnaXQgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuICgnMCcgKyAodmFsICE9PSB1bmRlZmluZWQgPyBNYXRoLmFicyh2YWwpIDogJzAnKSkuc2xpY2UoLTIpO1xufTtcbnZhciB0aHJlZURpZ2l0ID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiAoJzAwJyArICh2YWwgIT09IHVuZGVmaW5lZCA/IE1hdGguYWJzKHZhbCkgOiAnMCcpKS5zbGljZSgtMyk7XG59O1xudmFyIGZvdXJEaWdpdCA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gKCcwMDAnICsgKHZhbCAhPT0gdW5kZWZpbmVkID8gTWF0aC5hYnModmFsKSA6ICcwJykpLnNsaWNlKC00KTtcbn07XG52YXIgRk9STUFUX1lZWVkgPSAnWVlZWSc7XG52YXIgRk9STUFUX1lZID0gJ1lZJztcbnZhciBGT1JNQVRfTU1NTSA9ICdNTU1NJztcbnZhciBGT1JNQVRfTU1NID0gJ01NTSc7XG52YXIgRk9STUFUX01NID0gJ01NJztcbnZhciBGT1JNQVRfTSA9ICdNJztcbnZhciBGT1JNQVRfRERERCA9ICdEREREJztcbnZhciBGT1JNQVRfREREID0gJ0RERCc7XG52YXIgRk9STUFUX0REID0gJ0REJztcbnZhciBGT1JNQVRfRCA9ICdEJztcbnZhciBGT1JNQVRfSEggPSAnSEgnO1xudmFyIEZPUk1BVF9IID0gJ0gnO1xudmFyIEZPUk1BVF9oaCA9ICdoaCc7XG52YXIgRk9STUFUX2ggPSAnaCc7XG52YXIgRk9STUFUX21tID0gJ21tJztcbnZhciBGT1JNQVRfbSA9ICdtJztcbnZhciBGT1JNQVRfc3MgPSAnc3MnO1xudmFyIEZPUk1BVF9zID0gJ3MnO1xudmFyIEZPUk1BVF9BID0gJ0EnO1xudmFyIEZPUk1BVF9hID0gJ2EnO1xudmFyIEZPUk1BVF9LRVlTID0gW1xuICAgIHsgZjogRk9STUFUX1lZWVksIGs6ICd5ZWFyJyB9LFxuICAgIHsgZjogRk9STUFUX01NTU0sIGs6ICdtb250aCcgfSxcbiAgICB7IGY6IEZPUk1BVF9ERERELCBrOiAnZGF5JyB9LFxuICAgIHsgZjogRk9STUFUX01NTSwgazogJ21vbnRoJyB9LFxuICAgIHsgZjogRk9STUFUX0RERCwgazogJ2RheScgfSxcbiAgICB7IGY6IEZPUk1BVF9ZWSwgazogJ3llYXInIH0sXG4gICAgeyBmOiBGT1JNQVRfTU0sIGs6ICdtb250aCcgfSxcbiAgICB7IGY6IEZPUk1BVF9ERCwgazogJ2RheScgfSxcbiAgICB7IGY6IEZPUk1BVF9ISCwgazogJ2hvdXInIH0sXG4gICAgeyBmOiBGT1JNQVRfaGgsIGs6ICdob3VyJyB9LFxuICAgIHsgZjogRk9STUFUX21tLCBrOiAnbWludXRlJyB9LFxuICAgIHsgZjogRk9STUFUX3NzLCBrOiAnc2Vjb25kJyB9LFxuICAgIHsgZjogRk9STUFUX00sIGs6ICdtb250aCcgfSxcbiAgICB7IGY6IEZPUk1BVF9ELCBrOiAnZGF5JyB9LFxuICAgIHsgZjogRk9STUFUX0gsIGs6ICdob3VyJyB9LFxuICAgIHsgZjogRk9STUFUX2gsIGs6ICdob3VyJyB9LFxuICAgIHsgZjogRk9STUFUX20sIGs6ICdtaW51dGUnIH0sXG4gICAgeyBmOiBGT1JNQVRfcywgazogJ3NlY29uZCcgfSxcbiAgICB7IGY6IEZPUk1BVF9BLCBrOiAnYW1wbScgfSxcbiAgICB7IGY6IEZPUk1BVF9hLCBrOiAnYW1wbScgfSxcbl07XG52YXIgREFZX05BTUVTID0gW1xuICAgICdTdW5kYXknLFxuICAgICdNb25kYXknLFxuICAgICdUdWVzZGF5JyxcbiAgICAnV2VkbmVzZGF5JyxcbiAgICAnVGh1cnNkYXknLFxuICAgICdGcmlkYXknLFxuICAgICdTYXR1cmRheScsXG5dO1xudmFyIERBWV9TSE9SVF9OQU1FUyA9IFtcbiAgICAnU3VuJyxcbiAgICAnTW9uJyxcbiAgICAnVHVlJyxcbiAgICAnV2VkJyxcbiAgICAnVGh1JyxcbiAgICAnRnJpJyxcbiAgICAnU2F0Jyxcbl07XG52YXIgTU9OVEhfTkFNRVMgPSBbXG4gICAgJ0phbnVhcnknLFxuICAgICdGZWJydWFyeScsXG4gICAgJ01hcmNoJyxcbiAgICAnQXByaWwnLFxuICAgICdNYXknLFxuICAgICdKdW5lJyxcbiAgICAnSnVseScsXG4gICAgJ0F1Z3VzdCcsXG4gICAgJ1NlcHRlbWJlcicsXG4gICAgJ09jdG9iZXInLFxuICAgICdOb3ZlbWJlcicsXG4gICAgJ0RlY2VtYmVyJyxcbl07XG52YXIgTU9OVEhfU0hPUlRfTkFNRVMgPSBbXG4gICAgJ0phbicsXG4gICAgJ0ZlYicsXG4gICAgJ01hcicsXG4gICAgJ0FwcicsXG4gICAgJ01heScsXG4gICAgJ0p1bicsXG4gICAgJ0p1bCcsXG4gICAgJ0F1ZycsXG4gICAgJ1NlcCcsXG4gICAgJ09jdCcsXG4gICAgJ05vdicsXG4gICAgJ0RlYycsXG5dO1xudmFyIFZBTElEX0FNUE1fUFJFRklYID0gW1xuICAgIEZPUk1BVF9oaCwgRk9STUFUX2gsIEZPUk1BVF9tbSwgRk9STUFUX20sIEZPUk1BVF9zcywgRk9STUFUX3Ncbl07XG52YXIgRGF0ZXRpbWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMShob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMuaW5wdXRJZCA9IFwiaW9uLWR0LVwiICsgZGF0ZXRpbWVJZHMrKztcbiAgICAgICAgdGhpcy5sb2NhbGUgPSB7fTtcbiAgICAgICAgdGhpcy5kYXRldGltZU1pbiA9IHt9O1xuICAgICAgICB0aGlzLmRhdGV0aW1lTWF4ID0ge307XG4gICAgICAgIHRoaXMuZGF0ZXRpbWVWYWx1ZSA9IHt9O1xuICAgICAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBjb250cm9sLCB3aGljaCBpcyBzdWJtaXR0ZWQgd2l0aCB0aGUgZm9ybSBkYXRhLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5pbnB1dElkO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgZGF0ZXRpbWUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBkYXRldGltZSBhcHBlYXJzIG5vcm1hbCBidXQgaXMgbm90IGludGVyYWN0aXZlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZWFkb25seSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRpc3BsYXkgZm9ybWF0IG9mIHRoZSBkYXRlIGFuZCB0aW1lIGFzIHRleHQgdGhhdCBzaG93c1xuICAgICAgICAgKiB3aXRoaW4gdGhlIGl0ZW0uIFdoZW4gdGhlIGBwaWNrZXJGb3JtYXRgIGlucHV0IGlzIG5vdCB1c2VkLCB0aGVuIHRoZVxuICAgICAgICAgKiBgZGlzcGxheUZvcm1hdGAgaXMgdXNlZCBmb3IgYm90aCBkaXNwbGF5IHRoZSBmb3JtYXR0ZWQgdGV4dCwgYW5kIGRldGVybWluaW5nXG4gICAgICAgICAqIHRoZSBkYXRldGltZSBwaWNrZXIncyBjb2x1bW5zLiBTZWUgdGhlIGBwaWNrZXJGb3JtYXRgIGlucHV0IGRlc2NyaXB0aW9uIGZvclxuICAgICAgICAgKiBtb3JlIGluZm8uIERlZmF1bHRzIHRvIGBNTU0gRCwgWVlZWWAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc3BsYXlGb3JtYXQgPSAnTU1NIEQsIFlZWVknO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRleHQgdG8gZGlzcGxheSBvbiB0aGUgcGlja2VyJ3MgY2FuY2VsIGJ1dHRvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2FuY2VsVGV4dCA9ICdDYW5jZWwnO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRleHQgdG8gZGlzcGxheSBvbiB0aGUgcGlja2VyJ3MgXCJEb25lXCIgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kb25lVGV4dCA9ICdEb25lJztcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuc2V0Rm9jdXMoKTtcbiAgICAgICAgICAgIF90aGlzLm9wZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaW9uRm9jdXMuZW1pdCgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmlvbkJsdXIuZW1pdCgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlvbkNhbmNlbCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQ2FuY2VsXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQ2hhbmdlXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Gb2N1c1wiLCA3KTtcbiAgICAgICAgdGhpcy5pb25CbHVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25CbHVyXCIsIDcpO1xuICAgICAgICB0aGlzLmlvblN0eWxlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TdHlsZVwiLCA3KTtcbiAgICB9XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZGlzYWJsZWRDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBkYXRldGltZSB2YWx1ZSB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUudmFsdWVDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZURhdGV0aW1lVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZmlyc3Qgc2VlIGlmIGxvY2FsZSBuYW1lcyB3ZXJlIHByb3ZpZGVkIGluIHRoZSBpbnB1dHNcbiAgICAgICAgLy8gdGhlbiBjaGVjayB0byBzZWUgaWYgdGhleSdyZSBpbiB0aGUgY29uZmlnXG4gICAgICAgIC8vIGlmIG5laXRoZXIgd2VyZSBwcm92aWRlZCB0aGVuIGl0IHdpbGwgdXNlIGRlZmF1bHQgRW5nbGlzaCBuYW1lc1xuICAgICAgICB0aGlzLmxvY2FsZSA9IHtcbiAgICAgICAgICAgIC8vIHRoaXMubG9jYWxlW3R5cGVdID0gY29udmVydFRvQXJyYXlPZlN0cmluZ3MoKHRoaXNbdHlwZV0gPyB0aGlzW3R5cGVdIDogdGhpcy5jb25maWcuZ2V0KHR5cGUpLCB0eXBlKTtcbiAgICAgICAgICAgIG1vbnRoTmFtZXM6IGNvbnZlcnRUb0FycmF5T2ZTdHJpbmdzKHRoaXMubW9udGhOYW1lcywgJ21vbnRoTmFtZXMnKSxcbiAgICAgICAgICAgIG1vbnRoU2hvcnROYW1lczogY29udmVydFRvQXJyYXlPZlN0cmluZ3ModGhpcy5tb250aFNob3J0TmFtZXMsICdtb250aFNob3J0TmFtZXMnKSxcbiAgICAgICAgICAgIGRheU5hbWVzOiBjb252ZXJ0VG9BcnJheU9mU3RyaW5ncyh0aGlzLmRheU5hbWVzLCAnZGF5TmFtZXMnKSxcbiAgICAgICAgICAgIGRheVNob3J0TmFtZXM6IGNvbnZlcnRUb0FycmF5T2ZTdHJpbmdzKHRoaXMuZGF5U2hvcnROYW1lcywgJ2RheVNob3J0TmFtZXMnKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZURhdGV0aW1lVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBPcGVucyB0aGUgZGF0ZXRpbWUgb3ZlcmxheS5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcGlja2VyT3B0aW9ucywgcGlja2VyO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY2tlck9wdGlvbnMgPSB0aGlzLmdlbmVyYXRlUGlja2VyT3B0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcGlja2VyQ29udHJvbGxlci5jcmVhdGUocGlja2VyT3B0aW9ucyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBwaWNrZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRXhwYW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGlja2VyLm9uRGlkRGlzbWlzcygpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmlzRXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRGb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignaW9uUGlja2VyQ29sQ2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEsIGNvbFNlbGVjdGVkSW5kZXgsIGNvbE9wdGlvbnMsIGNoYW5nZURhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gZXZlbnQuZGV0YWlsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xTZWxlY3RlZEluZGV4ID0gZGF0YS5zZWxlY3RlZEluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xPcHRpb25zID0gZGF0YS5vcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VEYXRhID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZURhdGFbZGF0YS5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjb2xPcHRpb25zW2NvbFNlbGVjdGVkSW5kZXhdLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGF0ZXRpbWVWYWx1ZShjaGFuZ2VEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlja2VyLmNvbHVtbnMgPSB0aGlzLmdlbmVyYXRlQ29sdW1ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBwaWNrZXIucHJlc2VudCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmVtaXRTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pb25TdHlsZS5lbWl0KHtcbiAgICAgICAgICAgICdpbnRlcmFjdGl2ZSc6IHRydWUsXG4gICAgICAgICAgICAnZGF0ZXRpbWUnOiB0cnVlLFxuICAgICAgICAgICAgJ2hhcy1wbGFjZWhvbGRlcic6IHRoaXMucGxhY2Vob2xkZXIgIT0gbnVsbCxcbiAgICAgICAgICAgICdoYXMtdmFsdWUnOiB0aGlzLmhhc1ZhbHVlKCksXG4gICAgICAgICAgICAnaW50ZXJhY3RpdmUtZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnVwZGF0ZURhdGV0aW1lVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdXBkYXRlRGF0ZSh0aGlzLmRhdGV0aW1lVmFsdWUsIHZhbHVlKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmdlbmVyYXRlUGlja2VyT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICB2YXIgcGlja2VyT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IG1vZGU6IG1vZGUgfSwgdGhpcy5waWNrZXJPcHRpb25zKSwgeyBjb2x1bW5zOiB0aGlzLmdlbmVyYXRlQ29sdW1ucygpIH0pO1xuICAgICAgICAvLyBJZiB0aGUgdXNlciBoYXMgbm90IHBhc3NlZCBpbiBwaWNrZXIgYnV0dG9ucyxcbiAgICAgICAgLy8gYWRkIGEgY2FuY2VsIGFuZCBvayBidXR0b24gdG8gdGhlIHBpY2tlclxuICAgICAgICB2YXIgYnV0dG9ucyA9IHBpY2tlck9wdGlvbnMuYnV0dG9ucztcbiAgICAgICAgaWYgKCFidXR0b25zIHx8IGJ1dHRvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBwaWNrZXJPcHRpb25zLmJ1dHRvbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNhbmNlbFRleHQsXG4gICAgICAgICAgICAgICAgICAgIHJvbGU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVEYXRldGltZVZhbHVlKF90aGlzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmlvbkNhbmNlbC5lbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5kb25lVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZURhdGV0aW1lVmFsdWUoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIFByZXZlbnQgY29udmVydERhdGFUb0lTTyBmcm9tIGRvaW5nIGFueVxuICAgICAgICAgICAgICAgICAgICAgICAgICoga2luZCBvZiB0cmFuc2Zvcm1hdGlvbiBiYXNlZCBvbiB0aW1lem9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICogVGhpcyBjYW5jZWxzIG91dCBhbnkgY2hhbmdlIGl0IGF0dGVtcHRzIHRvIG1ha2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBJbXBvcnRhbnQ6IFRha2UgdGhlIHRpbWV6b25lIG9mZnNldCBiYXNlZCBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICogdGhlIGRhdGUgdGhhdCBpcyBjdXJyZW50bHkgc2VsZWN0ZWQsIG90aGVyd2lzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICogdGhlcmUgY2FuIGJlIDEgaHIgZGlmZmVyZW5jZSB3aGVuIGRlYWxpbmcgdy8gRFNUXG4gICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoY29udmVydERhdGFUb0lTTyhfdGhpcy5kYXRldGltZVZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kYXRldGltZVZhbHVlLnR6T2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy52YWx1ZSA9IGNvbnZlcnREYXRhVG9JU08oX3RoaXMuZGF0ZXRpbWVWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwaWNrZXJPcHRpb25zO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZ2VuZXJhdGVDb2x1bW5zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBpZiBhIHBpY2tlciBmb3JtYXQgd2Fzbid0IHByb3ZpZGVkLCB0aGVuIGZhbGxiYWNrXG4gICAgICAgIC8vIHRvIHVzZSB0aGUgZGlzcGxheSBmb3JtYXRcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy5waWNrZXJGb3JtYXQgfHwgdGhpcy5kaXNwbGF5Rm9ybWF0IHx8IERFRkFVTFRfRk9STUFUO1xuICAgICAgICBpZiAodGVtcGxhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlJ3ZlIGdvdCB1cCB0byBkYXRlIHNpemluZyBpbmZvcm1hdGlvblxuICAgICAgICB0aGlzLmNhbGNNaW5NYXgoKTtcbiAgICAgICAgLy8gZG9lcyBub3Qgc3VwcG9ydCBzZWxlY3RpbmcgYnkgZGF5IG5hbWVcbiAgICAgICAgLy8gYXV0b21hdGljYWxseSByZW1vdmUgYW55IGRheSBuYW1lIGZvcm1hdHNcbiAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKCdEREREJywgJ3t+fScpLnJlcGxhY2UoJ0RERCcsICd7fn0nKTtcbiAgICAgICAgaWYgKHRlbXBsYXRlLmluZGV4T2YoJ0QnKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vIHRoZXJlIGlzIG5vdCBhIGRheSBpbiB0aGUgdGVtcGxhdGVcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgdGhlIGRheSBuYW1lIHdpdGggYSBudW1lcmljIG9uZSBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgne359JywgJ0QnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYWtlIHN1cmUgbm8gZGF5IG5hbWUgcmVwbGFjZXIgaXMgbGVmdCBpbiB0aGUgc3RyaW5nXG4gICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgve359L2csICcnKTtcbiAgICAgICAgLy8gcGFyc2UgYXBhcnQgdGhlIGdpdmVuIHRlbXBsYXRlIGludG8gYW4gYXJyYXkgb2YgXCJmb3JtYXRzXCJcbiAgICAgICAgdmFyIGNvbHVtbnMgPSBwYXJzZVRlbXBsYXRlKHRlbXBsYXRlKS5tYXAoZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGVhY2ggZm9ybWF0IGluIHRoZSB0ZW1wbGF0ZVxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IHBpY2tlciBjb2x1bW4gdG8gYnVpbGQgdXAgd2l0aCBkYXRhXG4gICAgICAgICAgICB2YXIga2V5ID0gY29udmVydEZvcm1hdFRvS2V5KGZvcm1hdCk7XG4gICAgICAgICAgICB2YXIgdmFsdWVzO1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhleSBoYXZlIGV4YWN0IHZhbHVlcyB0byB1c2UgZm9yIHRoaXMgZGF0ZSBwYXJ0XG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgdXNlIHRoZSBkZWZhdWx0IGRhdGUgcGFydCB2YWx1ZXNcbiAgICAgICAgICAgIHZhciBzZWxmID0gX3RoaXM7XG4gICAgICAgICAgICB2YWx1ZXMgPSBzZWxmW2tleSArICdWYWx1ZXMnXVxuICAgICAgICAgICAgICAgID8gY29udmVydFRvQXJyYXlPZk51bWJlcnMoc2VsZltrZXkgKyAnVmFsdWVzJ10sIGtleSlcbiAgICAgICAgICAgICAgICA6IGRhdGVWYWx1ZVJhbmdlKGZvcm1hdCwgX3RoaXMuZGF0ZXRpbWVNaW4sIF90aGlzLmRhdGV0aW1lTWF4KTtcbiAgICAgICAgICAgIHZhciBjb2xPcHRpb25zID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVuZGVyVGV4dEZvcm1hdChmb3JtYXQsIHZhbCwgdW5kZWZpbmVkLCBfdGhpcy5sb2NhbGUpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGNvb2wsIHdlJ3ZlIGxvYWRlZCB1cCB0aGUgY29sdW1ucyB3aXRoIG9wdGlvbnNcbiAgICAgICAgICAgIC8vIHByZXNlbGVjdCB0aGUgb3B0aW9uIGZvciB0aGlzIGNvbHVtblxuICAgICAgICAgICAgdmFyIG9wdFZhbHVlID0gZ2V0RGF0ZVZhbHVlKF90aGlzLmRhdGV0aW1lVmFsdWUsIGZvcm1hdCk7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IGNvbE9wdGlvbnMuZmluZEluZGV4KGZ1bmN0aW9uIChvcHQpIHsgcmV0dXJuIG9wdC52YWx1ZSA9PT0gb3B0VmFsdWU7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogc2VsZWN0ZWRJbmRleCA+PSAwID8gc2VsZWN0ZWRJbmRleCA6IDAsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogY29sT3B0aW9uc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIE5vcm1hbGl6ZSBtaW4vbWF4XG4gICAgICAgIHZhciBtaW4gPSB0aGlzLmRhdGV0aW1lTWluO1xuICAgICAgICB2YXIgbWF4ID0gdGhpcy5kYXRldGltZU1heDtcbiAgICAgICAgWydtb250aCcsICdkYXknLCAnaG91cicsICdtaW51dGUnXVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gIWNvbHVtbnMuZmluZChmdW5jdGlvbiAoY29sdW1uKSB7IHJldHVybiBjb2x1bW4ubmFtZSA9PT0gbmFtZTsgfSk7IH0pXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgbWluW25hbWVdID0gMDtcbiAgICAgICAgICAgIG1heFtuYW1lXSA9IDA7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZUNvbHVtbnMoZGl2eUNvbHVtbnMoY29sdW1ucykpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUudmFsaWRhdGVDb2x1bW5zID0gZnVuY3Rpb24gKGNvbHVtbnMpIHtcbiAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIG1pbkNvbXBhcmVWYWwgPSBkYXRlRGF0YVNvcnRWYWx1ZSh0aGlzLmRhdGV0aW1lTWluKTtcbiAgICAgICAgdmFyIG1heENvbXBhcmVWYWwgPSBkYXRlRGF0YVNvcnRWYWx1ZSh0aGlzLmRhdGV0aW1lTWF4KTtcbiAgICAgICAgdmFyIHllYXJDb2wgPSBjb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMubmFtZSA9PT0gJ3llYXInOyB9KTtcbiAgICAgICAgdmFyIHNlbGVjdGVkWWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGlmICh5ZWFyQ29sKSB7XG4gICAgICAgICAgICAvLyBkZWZhdWx0IHRvIHRoZSBmaXJzdCB2YWx1ZSBpZiB0aGUgY3VycmVudCB5ZWFyIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIG9wdGlvbnNcbiAgICAgICAgICAgIGlmICgheWVhckNvbC5vcHRpb25zLmZpbmQoZnVuY3Rpb24gKGNvbCkgeyByZXR1cm4gY29sLnZhbHVlID09PSB0b2RheS5nZXRGdWxsWWVhcigpOyB9KSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkWWVhciA9IHllYXJDb2wub3B0aW9uc1swXS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0geWVhckNvbC5zZWxlY3RlZEluZGV4O1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhciB5ZWFyT3B0ID0geWVhckNvbC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmICh5ZWFyT3B0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXkgaGF2ZSBhIHNlbGVjdGVkIHllYXIgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRZZWFyID0geWVhck9wdC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlbGVjdGVkTW9udGggPSB0aGlzLnZhbGlkYXRlQ29sdW1uKGNvbHVtbnMsICdtb250aCcsIDEsIG1pbkNvbXBhcmVWYWwsIG1heENvbXBhcmVWYWwsIFtzZWxlY3RlZFllYXIsIDAsIDAsIDAsIDBdLCBbc2VsZWN0ZWRZZWFyLCAxMiwgMzEsIDIzLCA1OV0pO1xuICAgICAgICB2YXIgbnVtRGF5c0luTW9udGggPSBkYXlzSW5Nb250aChzZWxlY3RlZE1vbnRoLCBzZWxlY3RlZFllYXIpO1xuICAgICAgICB2YXIgc2VsZWN0ZWREYXkgPSB0aGlzLnZhbGlkYXRlQ29sdW1uKGNvbHVtbnMsICdkYXknLCAyLCBtaW5Db21wYXJlVmFsLCBtYXhDb21wYXJlVmFsLCBbc2VsZWN0ZWRZZWFyLCBzZWxlY3RlZE1vbnRoLCAwLCAwLCAwXSwgW3NlbGVjdGVkWWVhciwgc2VsZWN0ZWRNb250aCwgbnVtRGF5c0luTW9udGgsIDIzLCA1OV0pO1xuICAgICAgICB2YXIgc2VsZWN0ZWRIb3VyID0gdGhpcy52YWxpZGF0ZUNvbHVtbihjb2x1bW5zLCAnaG91cicsIDMsIG1pbkNvbXBhcmVWYWwsIG1heENvbXBhcmVWYWwsIFtzZWxlY3RlZFllYXIsIHNlbGVjdGVkTW9udGgsIHNlbGVjdGVkRGF5LCAwLCAwXSwgW3NlbGVjdGVkWWVhciwgc2VsZWN0ZWRNb250aCwgc2VsZWN0ZWREYXksIDIzLCA1OV0pO1xuICAgICAgICB0aGlzLnZhbGlkYXRlQ29sdW1uKGNvbHVtbnMsICdtaW51dGUnLCA0LCBtaW5Db21wYXJlVmFsLCBtYXhDb21wYXJlVmFsLCBbc2VsZWN0ZWRZZWFyLCBzZWxlY3RlZE1vbnRoLCBzZWxlY3RlZERheSwgc2VsZWN0ZWRIb3VyLCAwXSwgW3NlbGVjdGVkWWVhciwgc2VsZWN0ZWRNb250aCwgc2VsZWN0ZWREYXksIHNlbGVjdGVkSG91ciwgNTldKTtcbiAgICAgICAgcmV0dXJuIGNvbHVtbnM7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jYWxjTWluTWF4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdG9kYXlzWWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgaWYgKHRoaXMueWVhclZhbHVlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgeWVhcnMgPSBjb252ZXJ0VG9BcnJheU9mTnVtYmVycyh0aGlzLnllYXJWYWx1ZXMsICd5ZWFyJyk7XG4gICAgICAgICAgICBpZiAodGhpcy5taW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWluID0gTWF0aC5taW4uYXBwbHkoTWF0aCwgeWVhcnMpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5tYXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF4ID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgeWVhcnMpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5taW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWluID0gKHRvZGF5c1llYXIgLSAxMDApLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5tYXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF4ID0gdG9kYXlzWWVhci50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBtaW4gPSB0aGlzLmRhdGV0aW1lTWluID0gcGFyc2VEYXRlKHRoaXMubWluKTtcbiAgICAgICAgdmFyIG1heCA9IHRoaXMuZGF0ZXRpbWVNYXggPSBwYXJzZURhdGUodGhpcy5tYXgpO1xuICAgICAgICBtaW4ueWVhciA9IG1pbi55ZWFyIHx8IHRvZGF5c1llYXI7XG4gICAgICAgIG1heC55ZWFyID0gbWF4LnllYXIgfHwgdG9kYXlzWWVhcjtcbiAgICAgICAgbWluLm1vbnRoID0gbWluLm1vbnRoIHx8IDE7XG4gICAgICAgIG1heC5tb250aCA9IG1heC5tb250aCB8fCAxMjtcbiAgICAgICAgbWluLmRheSA9IG1pbi5kYXkgfHwgMTtcbiAgICAgICAgbWF4LmRheSA9IG1heC5kYXkgfHwgMzE7XG4gICAgICAgIG1pbi5ob3VyID0gbWluLmhvdXIgfHwgMDtcbiAgICAgICAgbWF4LmhvdXIgPSBtYXguaG91ciB8fCAyMztcbiAgICAgICAgbWluLm1pbnV0ZSA9IG1pbi5taW51dGUgfHwgMDtcbiAgICAgICAgbWF4Lm1pbnV0ZSA9IG1heC5taW51dGUgfHwgNTk7XG4gICAgICAgIG1pbi5zZWNvbmQgPSBtaW4uc2Vjb25kIHx8IDA7XG4gICAgICAgIG1heC5zZWNvbmQgPSBtYXguc2Vjb25kIHx8IDU5O1xuICAgICAgICAvLyBFbnN1cmUgbWluL21heCBjb25zdHJhaW50c1xuICAgICAgICBpZiAobWluLnllYXIgPiBtYXgueWVhcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignbWluLnllYXIgPiBtYXgueWVhcicpO1xuICAgICAgICAgICAgbWluLnllYXIgPSBtYXgueWVhciAtIDEwMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWluLnllYXIgPT09IG1heC55ZWFyKSB7XG4gICAgICAgICAgICBpZiAobWluLm1vbnRoID4gbWF4Lm1vbnRoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignbWluLm1vbnRoID4gbWF4Lm1vbnRoJyk7XG4gICAgICAgICAgICAgICAgbWluLm1vbnRoID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG1pbi5tb250aCA9PT0gbWF4Lm1vbnRoICYmIG1pbi5kYXkgPiBtYXguZGF5KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignbWluLmRheSA+IG1heC5kYXknKTtcbiAgICAgICAgICAgICAgICBtaW4uZGF5ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUudmFsaWRhdGVDb2x1bW4gPSBmdW5jdGlvbiAoY29sdW1ucywgbmFtZSwgaW5kZXgsIG1pbiwgbWF4LCBsb3dlckJvdW5kcywgdXBwZXJCb3VuZHMpIHtcbiAgICAgICAgdmFyIGNvbHVtbiA9IGNvbHVtbnMuZmluZChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5uYW1lID09PSBuYW1lOyB9KTtcbiAgICAgICAgaWYgKCFjb2x1bW4pIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsYiA9IGxvd2VyQm91bmRzLnNsaWNlKCk7XG4gICAgICAgIHZhciB1YiA9IHVwcGVyQm91bmRzLnNsaWNlKCk7XG4gICAgICAgIHZhciBvcHRpb25zID0gY29sdW1uLm9wdGlvbnM7XG4gICAgICAgIHZhciBpbmRleE1pbiA9IG9wdGlvbnMubGVuZ3RoIC0gMTtcbiAgICAgICAgdmFyIGluZGV4TWF4ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgb3B0cyA9IG9wdGlvbnNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBvcHRzLnZhbHVlO1xuICAgICAgICAgICAgbGJbaW5kZXhdID0gb3B0cy52YWx1ZTtcbiAgICAgICAgICAgIHViW2luZGV4XSA9IG9wdHMudmFsdWU7XG4gICAgICAgICAgICB2YXIgZGlzYWJsZWQgPSBvcHRzLmRpc2FibGVkID0gKHZhbHVlIDwgbG93ZXJCb3VuZHNbaW5kZXhdIHx8XG4gICAgICAgICAgICAgICAgdmFsdWUgPiB1cHBlckJvdW5kc1tpbmRleF0gfHxcbiAgICAgICAgICAgICAgICBkYXRlU29ydFZhbHVlKHViWzBdLCB1YlsxXSwgdWJbMl0sIHViWzNdLCB1Yls0XSkgPCBtaW4gfHxcbiAgICAgICAgICAgICAgICBkYXRlU29ydFZhbHVlKGxiWzBdLCBsYlsxXSwgbGJbMl0sIGxiWzNdLCBsYls0XSkgPiBtYXgpO1xuICAgICAgICAgICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGluZGV4TWluID0gTWF0aC5taW4oaW5kZXhNaW4sIGkpO1xuICAgICAgICAgICAgICAgIGluZGV4TWF4ID0gTWF0aC5tYXgoaW5kZXhNYXgsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gY29sdW1uLnNlbGVjdGVkSW5kZXggPSBjbGFtcChpbmRleE1pbiwgY29sdW1uLnNlbGVjdGVkSW5kZXgsIGluZGV4TWF4KTtcbiAgICAgICAgdmFyIG9wdCA9IGNvbHVtbi5vcHRpb25zW3NlbGVjdGVkSW5kZXhdO1xuICAgICAgICBpZiAob3B0KSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcInRleHRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgdGV4dCBvZiB0aGUgZm9ybWF0dGVkIGRhdGFcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMuZGlzcGxheUZvcm1hdCB8fCB0aGlzLnBpY2tlckZvcm1hdCB8fCBERUZBVUxUX0ZPUk1BVDtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyRGF0ZXRpbWUodGVtcGxhdGUsIHRoaXMuZGF0ZXRpbWVWYWx1ZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5oYXNWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dCAhPT0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc2V0Rm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbkVsKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkVsLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLCBpbnB1dElkID0gX2IuaW5wdXRJZCwgdGV4dCA9IF9iLnRleHQsIGRpc2FibGVkID0gX2IuZGlzYWJsZWQsIHJlYWRvbmx5ID0gX2IucmVhZG9ubHksIGlzRXhwYW5kZWQgPSBfYi5pc0V4cGFuZGVkLCBlbCA9IF9iLmVsLCBwbGFjZWhvbGRlciA9IF9iLnBsYWNlaG9sZGVyO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHZhciBsYWJlbElkID0gaW5wdXRJZCArICctbGJsJztcbiAgICAgICAgdmFyIGxhYmVsID0gZmluZEl0ZW1MYWJlbChlbCk7XG4gICAgICAgIHZhciBhZGRQbGFjZWhvbGRlckNsYXNzID0gKHRleHQgPT09IHVuZGVmaW5lZCAmJiBwbGFjZWhvbGRlciAhPSBudWxsKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgLy8gSWYgc2VsZWN0ZWQgdGV4dCBoYXMgYmVlbiBwYXNzZWQgaW4sIHVzZSB0aGF0IGZpcnN0XG4gICAgICAgIC8vIG90aGVyd2lzZSB1c2UgdGhlIHBsYWNlaG9sZGVyXG4gICAgICAgIHZhciBkYXRldGltZVRleHQgPSB0ZXh0ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gKHBsYWNlaG9sZGVyICE9IG51bGwgPyBwbGFjZWhvbGRlciA6ICcnKVxuICAgICAgICAgICAgOiB0ZXh0O1xuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgIGxhYmVsLmlkID0gbGFiZWxJZDtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXJIaWRkZW5JbnB1dCh0cnVlLCBlbCwgdGhpcy5uYW1lLCB0aGlzLnZhbHVlLCB0aGlzLmRpc2FibGVkKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5vbkNsaWNrLCByb2xlOiBcImNvbWJvYm94XCIsIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/ICd0cnVlJyA6IG51bGwsIFwiYXJpYS1leHBhbmRlZFwiOiBcIlwiICsgaXNFeHBhbmRlZCwgXCJhcmlhLWhhc3BvcHVwXCI6IFwidHJ1ZVwiLCBcImFyaWEtbGFiZWxsZWRieVwiOiBsYWJlbElkLCBjbGFzczogKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hWydkYXRldGltZS1kaXNhYmxlZCddID0gZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgX2FbJ2RhdGV0aW1lLXJlYWRvbmx5J10gPSByZWFkb25seSxcbiAgICAgICAgICAgICAgICBfYVsnZGF0ZXRpbWUtcGxhY2Vob2xkZXInXSA9IGFkZFBsYWNlaG9sZGVyQ2xhc3MsXG4gICAgICAgICAgICAgICAgX2FbJ2luLWl0ZW0nXSA9IGhvc3RDb250ZXh0KCdpb24taXRlbScsIGVsKSxcbiAgICAgICAgICAgICAgICBfYSkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImRhdGV0aW1lLXRleHRcIiB9LCBkYXRldGltZVRleHQpLCBoKFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgb25Gb2N1czogdGhpcy5vbkZvY3VzLCBvbkJsdXI6IHRoaXMub25CbHVyLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgcmVmOiBmdW5jdGlvbiAoYnRuRWwpIHsgcmV0dXJuIF90aGlzLmJ1dHRvbkVsID0gYnRuRWw7IH0gfSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEsIFwid2F0Y2hlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZENoYW5nZWRcIl0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBbXCJ2YWx1ZUNoYW5nZWRcIl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIjpob3N0e3BhZGRpbmctbGVmdDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLXJpZ2h0OnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDp2YXIoLS1wYWRkaW5nLXRvcCk7cGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy1ib3R0b20pO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlO21pbi13aWR0aDoxNnB4O21pbi1oZWlnaHQ6MS4yZW07Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjt6LWluZGV4OjJ9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0e3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpfX06aG9zdCguaW4taXRlbSl7cG9zaXRpb246c3RhdGljfTpob3N0KC5kYXRldGltZS1wbGFjZWhvbGRlcil7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpfTpob3N0KC5kYXRldGltZS1kaXNhYmxlZCl7b3BhY2l0eTouMztwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5kYXRldGltZS1yZWFkb25seSl7cG9pbnRlci1ldmVudHM6bm9uZX1idXR0b257bGVmdDowO3RvcDowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlcjowO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO291dGxpbmU6bm9uZX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgYnV0dG9uLFtkaXI9cnRsXSBidXR0b257bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowfWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MH0uZGF0ZXRpbWUtdGV4dHtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDstbXMtZmxleDoxO2ZsZXg6MTttaW4taGVpZ2h0OmluaGVyaXQ7ZGlyZWN0aW9uOmx0cjtvdmVyZmxvdzppbmhlcml0fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuZGF0ZXRpbWUtdGV4dCxbZGlyPXJ0bF0gLmRhdGV0aW1lLXRleHR7ZGlyZWN0aW9uOnJ0bH06aG9zdHstLXBsYWNlaG9sZGVyLWNvbG9yOnZhcigtLWlvbi1wbGFjZWhvbGRlci1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC00MDAsIzk5OSkpOy0tcGFkZGluZy10b3A6MTBweDstLXBhZGRpbmctZW5kOjA7LS1wYWRkaW5nLWJvdHRvbToxMXB4Oy0tcGFkZGluZy1zdGFydDoxNnB4fVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NfMTtcbn0oKSk7XG52YXIgZGl2eUNvbHVtbnMgPSBmdW5jdGlvbiAoY29sdW1ucykge1xuICAgIHZhciBjb2x1bW5zV2lkdGggPSBbXTtcbiAgICB2YXIgY29sO1xuICAgIHZhciB3aWR0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29sID0gY29sdW1uc1tpXTtcbiAgICAgICAgY29sdW1uc1dpZHRoLnB1c2goMCk7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBjb2wub3B0aW9uczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBvcHRpb24gPSBfYVtfaV07XG4gICAgICAgICAgICB3aWR0aCA9IG9wdGlvbi50ZXh0Lmxlbmd0aDtcbiAgICAgICAgICAgIGlmICh3aWR0aCA+IGNvbHVtbnNXaWR0aFtpXSkge1xuICAgICAgICAgICAgICAgIGNvbHVtbnNXaWR0aFtpXSA9IHdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjb2x1bW5zV2lkdGgubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHdpZHRoID0gTWF0aC5tYXgoY29sdW1uc1dpZHRoWzBdLCBjb2x1bW5zV2lkdGhbMV0pO1xuICAgICAgICBjb2x1bW5zWzBdLmFsaWduID0gJ3JpZ2h0JztcbiAgICAgICAgY29sdW1uc1sxXS5hbGlnbiA9ICdsZWZ0JztcbiAgICAgICAgY29sdW1uc1swXS5vcHRpb25zV2lkdGggPSBjb2x1bW5zWzFdLm9wdGlvbnNXaWR0aCA9IHdpZHRoICogMTcgKyBcInB4XCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbHVtbnNXaWR0aC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgd2lkdGggPSBNYXRoLm1heChjb2x1bW5zV2lkdGhbMF0sIGNvbHVtbnNXaWR0aFsyXSk7XG4gICAgICAgIGNvbHVtbnNbMF0uYWxpZ24gPSAncmlnaHQnO1xuICAgICAgICBjb2x1bW5zWzFdLmNvbHVtbldpZHRoID0gY29sdW1uc1dpZHRoWzFdICogMTcgKyBcInB4XCI7XG4gICAgICAgIGNvbHVtbnNbMF0ub3B0aW9uc1dpZHRoID0gY29sdW1uc1syXS5vcHRpb25zV2lkdGggPSB3aWR0aCAqIDE3ICsgXCJweFwiO1xuICAgICAgICBjb2x1bW5zWzJdLmFsaWduID0gJ2xlZnQnO1xuICAgIH1cbiAgICByZXR1cm4gY29sdW1ucztcbn07XG52YXIgREVGQVVMVF9GT1JNQVQgPSAnTU1NIEQsIFlZWVknO1xudmFyIGRhdGV0aW1lSWRzID0gMDtcbi8qKlxuICogaU9TIFBpY2tlciBFbnRlciBBbmltYXRpb25cbiAqL1xudmFyIGlvc0VudGVyQW5pbWF0aW9uID0gZnVuY3Rpb24gKGJhc2VFbCkge1xuICAgIHZhciBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAwLjI2KTtcbiAgICB3cmFwcGVyQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcucGlja2VyLXdyYXBwZXInKSlcbiAgICAgICAgLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoMTAwJSknLCAndHJhbnNsYXRlWSgwJSknKTtcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXG4gICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllciguMzYsLjY2LC4wNCwxKScpXG4gICAgICAgIC5kdXJhdGlvbig0MDApXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xuLyoqXG4gKiBpT1MgUGlja2VyIExlYXZlIEFuaW1hdGlvblxuICovXG52YXIgaW9zTGVhdmVBbmltYXRpb24gPSBmdW5jdGlvbiAoYmFzZUVsKSB7XG4gICAgdmFyIGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIGJhY2tkcm9wQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSlcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMjYsIDAuMDEpO1xuICAgIHdyYXBwZXJBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5waWNrZXItd3JhcHBlcicpKVxuICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgwJSknLCAndHJhbnNsYXRlWSgxMDAlKScpO1xuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbClcbiAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpJylcbiAgICAgICAgLmR1cmF0aW9uKDQwMClcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcbn07XG52YXIgUGlja2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzIoaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLm1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICB0aGlzLnByZXNlbnRlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUga2V5Ym9hcmQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGRpc21pc3NlZCB3aGVuIHRoZSBvdmVybGF5IGlzIHByZXNlbnRlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMua2V5Ym9hcmRDbG9zZSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcnJheSBvZiBidXR0b25zIHRvIGJlIGRpc3BsYXllZCBhdCB0aGUgdG9wIG9mIHRoZSBwaWNrZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFycmF5IG9mIGNvbHVtbnMgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBwaWNrZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmUgZGlzbWlzc2luZyB0aGUgcGlja2VyLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIGEgYmFja2Ryb3Agd2lsbCBiZSBkaXNwbGF5ZWQgYmVoaW5kIHRoZSBwaWNrZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNob3dCYWNrZHJvcCA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBwaWNrZXIgd2lsbCBiZSBkaXNtaXNzZWQgd2hlbiB0aGUgYmFja2Ryb3AgaXMgY2xpY2tlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYmFja2Ryb3BEaXNtaXNzID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHBpY2tlciB3aWxsIGFuaW1hdGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFuaW1hdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkJhY2tkcm9wVGFwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNhbmNlbEJ0biA9IF90aGlzLmJ1dHRvbnMuZmluZChmdW5jdGlvbiAoYikgeyByZXR1cm4gYi5yb2xlID09PSAnY2FuY2VsJzsgfSk7XG4gICAgICAgICAgICBpZiAoY2FuY2VsQnRuKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYnV0dG9uQ2xpY2soY2FuY2VsQnRuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLmRpc21pc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcHJlcGFyZU92ZXJsYXkodGhpcy5lbCk7XG4gICAgICAgIHRoaXMuZGlkUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUGlja2VyRGlkUHJlc2VudFwiLCA3KTtcbiAgICAgICAgdGhpcy53aWxsUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUGlja2VyV2lsbFByZXNlbnRcIiwgNyk7XG4gICAgICAgIHRoaXMud2lsbERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblBpY2tlcldpbGxEaXNtaXNzXCIsIDcpO1xuICAgICAgICB0aGlzLmRpZERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblBpY2tlckRpZERpc21pc3NcIiwgNyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZXNlbnQgdGhlIHBpY2tlciBvdmVybGF5IGFmdGVyIGl0IGhhcyBiZWVuIGNyZWF0ZWQuXG4gICAgICovXG4gICAgY2xhc3NfMi5wcm90b3R5cGUucHJlc2VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgcHJlc2VudCh0aGlzLCAncGlja2VyRW50ZXInLCBpb3NFbnRlckFuaW1hdGlvbiwgaW9zRW50ZXJBbmltYXRpb24sIHVuZGVmaW5lZCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kdXJhdGlvbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmR1cmF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZGlzbWlzcygpOyB9LCB0aGlzLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXNtaXNzIHRoZSBwaWNrZXIgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBwcmVzZW50ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBBbnkgZGF0YSB0byBlbWl0IGluIHRoZSBkaXNtaXNzIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0gcm9sZSBUaGUgcm9sZSBvZiB0aGUgZWxlbWVudCB0aGF0IGlzIGRpc21pc3NpbmcgdGhlIHBpY2tlci5cbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VmdWwgaW4gYSBidXR0b24gaGFuZGxlciBmb3IgZGV0ZXJtaW5pbmcgd2hpY2ggYnV0dG9uIHdhc1xuICAgICAqIGNsaWNrZWQgdG8gZGlzbWlzcyB0aGUgcGlja2VyLlxuICAgICAqIFNvbWUgZXhhbXBsZXMgaW5jbHVkZTogYGBcImNhbmNlbFwiYCwgYFwiZGVzdHJ1Y3RpdmVcImAsIFwic2VsZWN0ZWRcImAsIGFuZCBgXCJiYWNrZHJvcFwiYC5cbiAgICAgKi9cbiAgICBjbGFzc18yLnByb3RvdHlwZS5kaXNtaXNzID0gZnVuY3Rpb24gKGRhdGEsIHJvbGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb25UaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kdXJhdGlvblRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXNtaXNzKHRoaXMsIGRhdGEsIHJvbGUsICdwaWNrZXJMZWF2ZScsIGlvc0xlYXZlQW5pbWF0aW9uLCBpb3NMZWF2ZUFuaW1hdGlvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHBpY2tlciBkaWQgZGlzbWlzcy5cbiAgICAgKi9cbiAgICBjbGFzc18yLnByb3RvdHlwZS5vbkRpZERpc21pc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBldmVudE1ldGhvZCh0aGlzLmVsLCAnaW9uUGlja2VyRGlkRGlzbWlzcycpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBwaWNrZXIgd2lsbCBkaXNtaXNzLlxuICAgICAqL1xuICAgIGNsYXNzXzIucHJvdG90eXBlLm9uV2lsbERpc21pc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBldmVudE1ldGhvZCh0aGlzLmVsLCAnaW9uUGlja2VyV2lsbERpc21pc3MnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY29sdW1uIHRoYXQgbWF0Y2hlcyB0aGUgc3BlY2lmaWVkIG5hbWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29sdW1uLlxuICAgICAqL1xuICAgIGNsYXNzXzIucHJvdG90eXBlLmdldENvbHVtbiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5jb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGNvbHVtbikgeyByZXR1cm4gY29sdW1uLm5hbWUgPT09IG5hbWU7IH0pKTtcbiAgICB9O1xuICAgIGNsYXNzXzIucHJvdG90eXBlLmJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgICAgICAvLyBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAvLyAgIHJldHVybjtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBrZWVwIHRoZSB0aW1lIG9mIHRoZSBtb3N0IHJlY2VudCBidXR0b24gY2xpY2tcbiAgICAgICAgLy8gYSBoYW5kbGVyIGhhcyBiZWVuIHByb3ZpZGVkLCBleGVjdXRlIGl0XG4gICAgICAgIC8vIHBhc3MgdGhlIGhhbmRsZXIgdGhlIHZhbHVlcyBmcm9tIHRoZSBpbnB1dHNcbiAgICAgICAgdmFyIHNob3VsZERpc21pc3MgPSBzYWZlQ2FsbChidXR0b24uaGFuZGxlciwgdGhpcy5nZXRTZWxlY3RlZCgpKSAhPT0gZmFsc2U7XG4gICAgICAgIGlmIChzaG91bGREaXNtaXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfTtcbiAgICBjbGFzc18yLnByb3RvdHlwZS5nZXRTZWxlY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkID0ge307XG4gICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2wsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRDb2x1bW4gPSBjb2wuc2VsZWN0ZWRJbmRleCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyBjb2wub3B0aW9uc1tjb2wuc2VsZWN0ZWRJbmRleF1cbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHNlbGVjdGVkW2NvbC5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBzZWxlY3RlZENvbHVtbiA/IHNlbGVjdGVkQ29sdW1uLnRleHQgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdGVkQ29sdW1uID8gc2VsZWN0ZWRDb2x1bW4udmFsdWUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgY29sdW1uSW5kZXg6IGluZGV4XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkO1xuICAgIH07XG4gICAgY2xhc3NfMi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLW1vZGFsXCI6IFwidHJ1ZVwiLCBjbGFzczogT2JqZWN0LmFzc2lnbigoX2EgPSB7fSwgX2FbbW9kZV0gPSB0cnVlLCBcbiAgICAgICAgICAgIC8vIFVzZWQgaW50ZXJuYWxseSBmb3Igc3R5bGluZ1xuICAgICAgICAgICAgX2FbXCJwaWNrZXItXCIgKyBtb2RlXSA9IHRydWUsIF9hKSwgZ2V0Q2xhc3NNYXAodGhpcy5jc3NDbGFzcykpLCBzdHlsZToge1xuICAgICAgICAgICAgICAgIHpJbmRleDogXCJcIiArICgyMDAwMCArIHRoaXMub3ZlcmxheUluZGV4KVxuICAgICAgICAgICAgfSwgb25Jb25CYWNrZHJvcFRhcDogdGhpcy5vbkJhY2tkcm9wVGFwIH0sIGgoXCJpb24tYmFja2Ryb3BcIiwgeyB2aXNpYmxlOiB0aGlzLnNob3dCYWNrZHJvcCwgdGFwcGFibGU6IHRoaXMuYmFja2Ryb3BEaXNtaXNzIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicGlja2VyLXdyYXBwZXJcIiwgcm9sZTogXCJkaWFsb2dcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicGlja2VyLXRvb2xiYXJcIiB9LCB0aGlzLmJ1dHRvbnMubWFwKGZ1bmN0aW9uIChiKSB7IHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBidXR0b25XcmFwcGVyQ2xhc3MoYikgfSwgaChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmJ1dHRvbkNsaWNrKGIpOyB9LCBjbGFzczogYnV0dG9uQ2xhc3MoYikgfSwgYi50ZXh0KSkpOyB9KSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJwaWNrZXItY29sdW1uc1wiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJwaWNrZXItYWJvdmUtaGlnaGxpZ2h0XCIgfSksIHRoaXMucHJlc2VudGVkICYmIHRoaXMuY29sdW1ucy5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGgoXCJpb24tcGlja2VyLWNvbHVtblwiLCB7IGNvbDogYyB9KTsgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJwaWNrZXItYmVsb3ctaGlnaGxpZ2h0XCIgfSkpKSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzIucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMiwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCIuc2MtaW9uLXBpY2tlci1tZC1oey0tYm9yZGVyLXJhZGl1czowOy0tYm9yZGVyLXN0eWxlOnNvbGlkOy0tbWluLXdpZHRoOmF1dG87LS13aWR0aDoxMDAlOy0tbWF4LXdpZHRoOjUwMHB4Oy0tbWluLWhlaWdodDphdXRvOy0tbWF4LWhlaWdodDphdXRvOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2xlZnQ6MDt0b3A6MDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpO2NvbnRhaW46c3RyaWN0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjEwMDF9W2Rpcj1ydGxdLnNjLWlvbi1waWNrZXItbWQtaCwgW2Rpcj1ydGxdIC5zYy1pb24tcGlja2VyLW1kLWh7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowfS5vdmVybGF5LWhpZGRlbi5zYy1pb24tcGlja2VyLW1kLWh7ZGlzcGxheTpub25lfS5waWNrZXItd3JhcHBlci5zYy1pb24tcGlja2VyLW1ke2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bzttYXJnaW4tdG9wOmF1dG87bWFyZ2luLWJvdHRvbTphdXRvOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOnZhcigtLXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTtoZWlnaHQ6dmFyKC0taGVpZ2h0KTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO21heC1oZWlnaHQ6dmFyKC0tbWF4LWhlaWdodCk7Ym9yZGVyLXdpZHRoOnZhcigtLWJvcmRlci13aWR0aCk7Ym9yZGVyLXN0eWxlOnZhcigtLWJvcmRlci1zdHlsZSk7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcik7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb250YWluOnN0cmljdDtvdmVyZmxvdzpoaWRkZW47ei1pbmRleDoxMH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LnBpY2tlci13cmFwcGVyLnNjLWlvbi1waWNrZXItbWR7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OmF1dG87bWFyZ2luLWlubGluZS1zdGFydDphdXRvOy13ZWJraXQtbWFyZ2luLWVuZDphdXRvO21hcmdpbi1pbmxpbmUtZW5kOmF1dG99fS5waWNrZXItdG9vbGJhci5zYy1pb24tcGlja2VyLW1ke3dpZHRoOjEwMCU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb250YWluOnN0cmljdDt6LWluZGV4OjF9LnBpY2tlci1idXR0b24uc2MtaW9uLXBpY2tlci1tZHtib3JkZXI6MDtmb250LWZhbWlseTppbmhlcml0fS5waWNrZXItYnV0dG9uLnNjLWlvbi1waWNrZXItbWQ6YWN0aXZlLCAucGlja2VyLWJ1dHRvbi5zYy1pb24tcGlja2VyLW1kOmZvY3Vze291dGxpbmU6bm9uZX0ucGlja2VyLWNvbHVtbnMuc2MtaW9uLXBpY2tlci1tZHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbi1ib3R0b206dmFyKC0taW9uLXNhZmUtYXJlYS1ib3R0b20sMCk7Y29udGFpbjpzdHJpY3Q7ZGlyZWN0aW9uOmx0cjtvdmVyZmxvdzpoaWRkZW59LnBpY2tlci1hYm92ZS1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1tZCwgLnBpY2tlci1iZWxvdy1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1tZHtkaXNwbGF5Om5vbmU7cG9pbnRlci1ldmVudHM6bm9uZX0uc2MtaW9uLXBpY2tlci1tZC1oey0tYmFja2dyb3VuZDp2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKTstLWJvcmRlci13aWR0aDowLjU1cHggMCAwOy0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvcix2YXIoLS1pb24tYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCxyZ2JhKDAsMCwwLDAuMTMpKSkpOy0taGVpZ2h0OjI2MHB4O2NvbG9yOnZhcigtLWlvbi1pdGVtLWNvbG9yLHZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApKX0ucGlja2VyLXRvb2xiYXIuc2MtaW9uLXBpY2tlci1tZHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7aGVpZ2h0OjQ0cHh9LnBpY2tlci1idXR0b24uc2MtaW9uLXBpY2tlci1tZCwgLnBpY2tlci1idXR0b24uYWN0aXZhdGVkLnNjLWlvbi1waWNrZXItbWR7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDoxLjFlbTtwYWRkaW5nLXJpZ2h0OjEuMWVtO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtoZWlnaHQ6NDRweDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsucGlja2VyLWJ1dHRvbi5zYy1pb24tcGlja2VyLW1kLCAucGlja2VyLWJ1dHRvbi5hY3RpdmF0ZWQuc2MtaW9uLXBpY2tlci1tZHtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MS4xZW07cGFkZGluZy1pbmxpbmUtc3RhcnQ6MS4xZW07LXdlYmtpdC1wYWRkaW5nLWVuZDoxLjFlbTtwYWRkaW5nLWlubGluZS1lbmQ6MS4xZW19fS5waWNrZXItY29sdW1ucy5zYy1pb24tcGlja2VyLW1ke2hlaWdodDoyMTZweDstd2Via2l0LXBlcnNwZWN0aXZlOjE4MDBweDtwZXJzcGVjdGl2ZToxODAwcHh9LnBpY2tlci1hYm92ZS1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1tZHtsZWZ0OjA7dG9wOjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWig5MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWig5MHB4KTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDo4MXB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvcix2YXIoLS1pb24tYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCxyZ2JhKDAsMCwwLC4xMykpKSk7YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxsZWZ0IGJvdHRvbSxjb2xvci1zdG9wKDIwJSx2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKSksdG8ocmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsMjU1LDI1NSwyNTUpLC44KSkpO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZyx2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKSAyMCUscmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsMjU1LDI1NSwyNTUpLC44KSk7ei1pbmRleDoxMH1bZGlyPXJ0bF0uc2MtaW9uLXBpY2tlci1tZC1oIC5waWNrZXItYWJvdmUtaGlnaGxpZ2h0LnNjLWlvbi1waWNrZXItbWQsIFtkaXI9cnRsXSAuc2MtaW9uLXBpY2tlci1tZC1oIC5waWNrZXItYWJvdmUtaGlnaGxpZ2h0LnNjLWlvbi1waWNrZXItbWQsIFtkaXI9cnRsXS5zYy1pb24tcGlja2VyLW1kIC5waWNrZXItYWJvdmUtaGlnaGxpZ2h0LnNjLWlvbi1waWNrZXItbWR7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowfS5waWNrZXItYmVsb3ctaGlnaGxpZ2h0LnNjLWlvbi1waWNrZXItbWR7bGVmdDowO3RvcDoxMTVweDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDkwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDkwcHgpO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjExOXB4O2JvcmRlci10b3A6MXB4IHNvbGlkIHZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvcix2YXIoLS1pb24tYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCxyZ2JhKDAsMCwwLC4xMykpKSk7YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IGJvdHRvbSxsZWZ0IHRvcCxjb2xvci1zdG9wKDMwJSx2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKSksdG8ocmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsMjU1LDI1NSwyNTUpLC44KSkpO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDBkZWcsdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2ZmZikgMzAlLHJnYmEodmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLDI1NSwyNTUsMjU1KSwuOCkpO3otaW5kZXg6MTF9W2Rpcj1ydGxdLnNjLWlvbi1waWNrZXItbWQtaCAucGlja2VyLWJlbG93LWhpZ2hsaWdodC5zYy1pb24tcGlja2VyLW1kLCBbZGlyPXJ0bF0gLnNjLWlvbi1waWNrZXItbWQtaCAucGlja2VyLWJlbG93LWhpZ2hsaWdodC5zYy1pb24tcGlja2VyLW1kLCBbZGlyPXJ0bF0uc2MtaW9uLXBpY2tlci1tZCAucGlja2VyLWJlbG93LWhpZ2hsaWdodC5zYy1pb24tcGlja2VyLW1ke2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6MH1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzI7XG59KCkpO1xudmFyIGJ1dHRvbldyYXBwZXJDbGFzcyA9IGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIF9hID0ge30sXG4gICAgICAgIF9hW1wicGlja2VyLXRvb2xiYXItXCIgKyBidXR0b24ucm9sZV0gPSBidXR0b24ucm9sZSAhPT0gdW5kZWZpbmVkLFxuICAgICAgICBfYVsncGlja2VyLXRvb2xiYXItYnV0dG9uJ10gPSB0cnVlLFxuICAgICAgICBfYTtcbn07XG52YXIgYnV0dG9uQ2xhc3MgPSBmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyAncGlja2VyLWJ1dHRvbic6IHRydWUsICdpb24tYWN0aXZhdGFibGUnOiB0cnVlIH0sIGdldENsYXNzTWFwKGJ1dHRvbi5jc3NDbGFzcykpO1xufTtcbnZhciBQaWNrZXJDb2x1bW5DbXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMyhob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMub3B0SGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5yb3RhdGVGYWN0b3IgPSAwO1xuICAgICAgICB0aGlzLnNjYWxlRmFjdG9yID0gMTtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMubm9BbmltYXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pb25QaWNrZXJDb2xDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblBpY2tlckNvbENoYW5nZVwiLCA3KTtcbiAgICB9XG4gICAgY2xhc3NfMy5wcm90b3R5cGUuY29sQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfTtcbiAgICBjbGFzc18zLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHBpY2tlclJvdGF0ZUZhY3RvciwgcGlja2VyU2NhbGVGYWN0b3IsIG1vZGUsIF9hO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY2tlclJvdGF0ZUZhY3RvciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaWNrZXJTY2FsZUZhY3RvciA9IDAuODE7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAnaW9zJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpY2tlclJvdGF0ZUZhY3RvciA9IC0wLjQ2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpY2tlclNjYWxlRmFjdG9yID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRlRmFjdG9yID0gcGlja2VyUm90YXRlRmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2FsZUZhY3RvciA9IHBpY2tlclNjYWxlRmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW1wb3J0KCcuL2luZGV4LTYyNGVlYTU4LmpzJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5nZXN0dXJlID0gKF9iLnNlbnQoKSkuY3JlYXRlR2VzdHVyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWw6IHRoaXMuZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VzdHVyZU5hbWU6ICdwaWNrZXItc3dpcGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlc3R1cmVQcmlvcml0eTogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN0YXJ0OiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLm9uU3RhcnQoZXYpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZTogZnVuY3Rpb24gKGV2KSB7IHJldHVybiBfdGhpcy5vbk1vdmUoZXYpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRW5kOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLm9uRW5kKGV2KTsgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXN0dXJlLnNldERpc2FibGVkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG1ySWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ub0FuaW1hdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZWZyZXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18zLnByb3RvdHlwZS5jb21wb25lbnREaWRMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29sRWwgPSB0aGlzLm9wdHNFbDtcbiAgICAgICAgaWYgKGNvbEVsKSB7XG4gICAgICAgICAgICAvLyBET00gUkVBRFxuICAgICAgICAgICAgLy8gV2UgcGVyZm9tIGEgRE9NIHJlYWQgb3ZlciBhIHJlbmRlcmVkIGl0ZW0sIHRoaXMgbmVlZHMgdG8gaGFwcGVuIGFmdGVyIHRoZSBmaXJzdCByZW5kZXJcbiAgICAgICAgICAgIHRoaXMub3B0SGVpZ2h0ID0gKGNvbEVsLmZpcnN0RWxlbWVudENoaWxkID8gY29sRWwuZmlyc3RFbGVtZW50Q2hpbGQuY2xpZW50SGVpZ2h0IDogMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfTtcbiAgICBjbGFzc18zLnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWZJZCk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRtcklkKTtcbiAgICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMy5wcm90b3R5cGUuZW1pdENvbENoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pb25QaWNrZXJDb2xDaGFuZ2UuZW1pdCh0aGlzLmNvbCk7XG4gICAgfTtcbiAgICBjbGFzc18zLnByb3RvdHlwZS5zZXRTZWxlY3RlZCA9IGZ1bmN0aW9uIChzZWxlY3RlZEluZGV4LCBkdXJhdGlvbikge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHNlbGVjdGVkIGluZGV4LCB0aGVuIGZpZ3VyZSBvdXQgaXQncyB5IHBvc2l0aW9uXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzbid0IGEgc2VsZWN0ZWQgaW5kZXgsIHRoZW4ganVzdCB1c2UgdGhlIHRvcCB5IHBvc2l0aW9uXG4gICAgICAgIHZhciB5ID0gKHNlbGVjdGVkSW5kZXggPiAtMSkgPyAtKHNlbGVjdGVkSW5kZXggKiB0aGlzLm9wdEhlaWdodCkgOiAwO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgLy8gc2V0IHdoYXQgeSBwb3NpdGlvbiB3ZSdyZSBhdFxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZklkKTtcbiAgICAgICAgdGhpcy51cGRhdGUoeSwgZHVyYXRpb24sIHRydWUpO1xuICAgICAgICB0aGlzLmVtaXRDb2xDaGFuZ2UoKTtcbiAgICB9O1xuICAgIGNsYXNzXzMucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICh5LCBkdXJhdGlvbiwgc2F2ZVkpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdHNFbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVuc3VyZSB3ZSd2ZSBnb3QgYSBnb29kIHJvdW5kIG51bWJlciA6KVxuICAgICAgICB2YXIgdHJhbnNsYXRlWSA9IDA7XG4gICAgICAgIHZhciB0cmFuc2xhdGVaID0gMDtcbiAgICAgICAgdmFyIF9hID0gdGhpcywgY29sID0gX2EuY29sLCByb3RhdGVGYWN0b3IgPSBfYS5yb3RhdGVGYWN0b3I7XG4gICAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gY29sLnNlbGVjdGVkSW5kZXggPSB0aGlzLmluZGV4Rm9yWSgteSk7XG4gICAgICAgIHZhciBkdXJhdGlvblN0ciA9IChkdXJhdGlvbiA9PT0gMCkgPyAnJyA6IGR1cmF0aW9uICsgJ21zJztcbiAgICAgICAgdmFyIHNjYWxlU3RyID0gXCJzY2FsZShcIiArIHRoaXMuc2NhbGVGYWN0b3IgKyBcIilcIjtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5vcHRzRWwuY2hpbGRyZW47XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBidXR0b24gPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIHZhciBvcHQgPSBjb2wub3B0aW9uc1tpXTtcbiAgICAgICAgICAgIHZhciBvcHRPZmZzZXQgPSAoaSAqIHRoaXMub3B0SGVpZ2h0KSArIHk7XG4gICAgICAgICAgICB2YXIgdHJhbnNmb3JtID0gJyc7XG4gICAgICAgICAgICBpZiAocm90YXRlRmFjdG9yICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJvdGF0ZVggPSBvcHRPZmZzZXQgKiByb3RhdGVGYWN0b3I7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHJvdGF0ZVgpIDw9IDkwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVkgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVaID0gOTA7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSA9IFwicm90YXRlWChcIiArIHJvdGF0ZVggKyBcImRlZykgXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZID0gLTk5OTk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWiA9IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWSA9IG9wdE9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IHNlbGVjdGVkSW5kZXggPT09IGk7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gKz0gXCJ0cmFuc2xhdGUzZCgwcHgsXCIgKyB0cmFuc2xhdGVZICsgXCJweCxcIiArIHRyYW5zbGF0ZVogKyBcInB4KSBcIjtcbiAgICAgICAgICAgIGlmICh0aGlzLnNjYWxlRmFjdG9yICE9PSAxICYmICFzZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSArPSBzY2FsZVN0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uXG4gICAgICAgICAgICBpZiAodGhpcy5ub0FuaW1hdGUpIHtcbiAgICAgICAgICAgICAgICBvcHQuZHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGR1cmF0aW9uICE9PSBvcHQuZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBvcHQuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgICAgICAgICBidXR0b24uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb25TdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgdHJhbnNmb3JtXG4gICAgICAgICAgICBpZiAodHJhbnNmb3JtICE9PSBvcHQudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgb3B0LnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICBidXR0b24uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBkYXRlIHNlbGVjdGVkIGl0ZW1cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCAhPT0gb3B0LnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgb3B0LnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFBJQ0tFUl9PUFRfU0VMRUNURUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoUElDS0VSX09QVF9TRUxFQ1RFRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sLnByZXZTZWxlY3RlZCA9IHNlbGVjdGVkSW5kZXg7XG4gICAgICAgIGlmIChzYXZlWSkge1xuICAgICAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sYXN0SW5kZXggIT09IHNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgICAgIC8vIGhhdmUgbm90IHNldCBhIGxhc3QgaW5kZXggeWV0XG4gICAgICAgICAgICBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkKCk7XG4gICAgICAgICAgICB0aGlzLmxhc3RJbmRleCA9IHNlbGVjdGVkSW5kZXg7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzMucHJvdG90eXBlLmRlY2VsZXJhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnZlbG9jaXR5ICE9PSAwKSB7XG4gICAgICAgICAgICAvLyBzdGlsbCBkZWNlbGVyYXRpbmdcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgKj0gREVDRUxFUkFUSU9OX0ZSSUNUSU9OO1xuICAgICAgICAgICAgLy8gZG8gbm90IGxldCBpdCBnbyBzbG93ZXIgdGhhbiBhIHZlbG9jaXR5IG9mIDFcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSAodGhpcy52ZWxvY2l0eSA+IDApXG4gICAgICAgICAgICAgICAgPyBNYXRoLm1heCh0aGlzLnZlbG9jaXR5LCAxKVxuICAgICAgICAgICAgICAgIDogTWF0aC5taW4odGhpcy52ZWxvY2l0eSwgLTEpO1xuICAgICAgICAgICAgdmFyIHkgPSB0aGlzLnkgKyB0aGlzLnZlbG9jaXR5O1xuICAgICAgICAgICAgaWYgKHkgPiB0aGlzLm1pblkpIHtcbiAgICAgICAgICAgICAgICAvLyB3aG9vcHMsIGl0J3MgdHJ5aW5nIHRvIHNjcm9sbCB1cCBmYXJ0aGVyIHRoYW4gdGhlIG9wdGlvbnMgd2UgaGF2ZSFcbiAgICAgICAgICAgICAgICB5ID0gdGhpcy5taW5ZO1xuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoeSA8IHRoaXMubWF4WSkge1xuICAgICAgICAgICAgICAgIC8vIGdhaGgsIGl0J3MgdHJ5aW5nIHRvIHNjcm9sbCBkb3duIGZhcnRoZXIgdGhhbiB3ZSBjYW4hXG4gICAgICAgICAgICAgICAgeSA9IHRoaXMubWF4WTtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHksIDAsIHRydWUpO1xuICAgICAgICAgICAgdmFyIG5vdExvY2tlZEluID0gKE1hdGgucm91bmQoeSkgJSB0aGlzLm9wdEhlaWdodCAhPT0gMCkgfHwgKE1hdGguYWJzKHRoaXMudmVsb2NpdHkpID4gMSk7XG4gICAgICAgICAgICBpZiAobm90TG9ja2VkSW4pIHtcbiAgICAgICAgICAgICAgICAvLyBpc24ndCBsb2NrZWQgaW4geWV0LCBrZWVwIGRlY2VsZXJhdGluZyB1bnRpbCBpdCBpc1xuICAgICAgICAgICAgICAgIHRoaXMucmFmSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZGVjZWxlcmF0ZSgpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdENvbENoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMueSAlIHRoaXMub3B0SGVpZ2h0ICE9PSAwKSB7XG4gICAgICAgICAgICAvLyBuZWVkcyB0byBzdGlsbCBnZXQgbG9ja2VkIGludG8gYSBwb3NpdGlvbiBzbyBvcHRpb25zIGxpbmUgdXBcbiAgICAgICAgICAgIHZhciBjdXJyZW50UG9zID0gTWF0aC5hYnModGhpcy55ICUgdGhpcy5vcHRIZWlnaHQpO1xuICAgICAgICAgICAgLy8gY3JlYXRlIGEgdmVsb2NpdHkgaW4gdGhlIGRpcmVjdGlvbiBpdCBuZWVkcyB0byBzY3JvbGxcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSAoY3VycmVudFBvcyA+ICh0aGlzLm9wdEhlaWdodCAvIDIpID8gMSA6IC0xKTtcbiAgICAgICAgICAgIHRoaXMuZGVjZWxlcmF0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18zLnByb3RvdHlwZS5pbmRleEZvclkgPSBmdW5jdGlvbiAoeSkge1xuICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoTWF0aC5hYnMoTWF0aC5yb3VuZCh5IC8gdGhpcy5vcHRIZWlnaHQpKSwgMCksIHRoaXMuY29sLm9wdGlvbnMubGVuZ3RoIC0gMSk7XG4gICAgfTtcbiAgICAvLyBUT0RPIHNob3VsZCB0aGlzIGNoZWNrIGRpc2FibGVkP1xuICAgIGNsYXNzXzMucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiAoZGV0YWlsKSB7XG4gICAgICAgIC8vIFdlIGhhdmUgdG8gcHJldmVudCBkZWZhdWx0IGluIG9yZGVyIHRvIGJsb2NrIHNjcm9sbGluZyB1bmRlciB0aGUgcGlja2VyXG4gICAgICAgIC8vIGJ1dCB3ZSBETyBOT1QgaGF2ZSB0byBzdG9wIHByb3BhZ2F0aW9uLCBzaW5jZSB3ZSBzdGlsbCB3YW50XG4gICAgICAgIC8vIHNvbWUgXCJjbGlja1wiIGV2ZW50cyB0byBjYXB0dXJlXG4gICAgICAgIGRldGFpbC5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkZXRhaWwuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIHJlc2V0IGV2ZXJ5dGhpbmdcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWZJZCk7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5jb2wub3B0aW9ucztcbiAgICAgICAgdmFyIG1pblkgPSAob3B0aW9ucy5sZW5ndGggLSAxKTtcbiAgICAgICAgdmFyIG1heFkgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9uc1tpXS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIG1pblkgPSBNYXRoLm1pbihtaW5ZLCBpKTtcbiAgICAgICAgICAgICAgICBtYXhZID0gTWF0aC5tYXgobWF4WSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5taW5ZID0gLShtaW5ZICogdGhpcy5vcHRIZWlnaHQpO1xuICAgICAgICB0aGlzLm1heFkgPSAtKG1heFkgKiB0aGlzLm9wdEhlaWdodCk7XG4gICAgfTtcbiAgICBjbGFzc18zLnByb3RvdHlwZS5vbk1vdmUgPSBmdW5jdGlvbiAoZGV0YWlsKSB7XG4gICAgICAgIGRldGFpbC5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkZXRhaWwuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgc2Nyb2xsIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHBvaW50ZXIgc3RhcnQgcG9zaXRpb25cbiAgICAgICAgdmFyIHkgPSB0aGlzLnkgKyBkZXRhaWwuZGVsdGFZO1xuICAgICAgICBpZiAoeSA+IHRoaXMubWluWSkge1xuICAgICAgICAgICAgLy8gc2Nyb2xsaW5nIHVwIGhpZ2hlciB0aGFuIHNjcm9sbCBhcmVhXG4gICAgICAgICAgICB5ID0gTWF0aC5wb3coeSwgMC44KTtcbiAgICAgICAgICAgIHRoaXMuYm91bmNlRnJvbSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoeSA8IHRoaXMubWF4WSkge1xuICAgICAgICAgICAgLy8gc2Nyb2xsaW5nIGRvd24gYmVsb3cgc2Nyb2xsIGFyZWFcbiAgICAgICAgICAgIHkgKz0gTWF0aC5wb3codGhpcy5tYXhZIC0geSwgMC45KTtcbiAgICAgICAgICAgIHRoaXMuYm91bmNlRnJvbSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJvdW5jZUZyb20gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlKHksIDAsIGZhbHNlKTtcbiAgICB9O1xuICAgIGNsYXNzXzMucHJvdG90eXBlLm9uRW5kID0gZnVuY3Rpb24gKGRldGFpbCkge1xuICAgICAgICBpZiAodGhpcy5ib3VuY2VGcm9tID4gMCkge1xuICAgICAgICAgICAgLy8gYm91bmNlIGJhY2sgdXBcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMubWluWSwgMTAwLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdENvbENoYW5nZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYm91bmNlRnJvbSA8IDApIHtcbiAgICAgICAgICAgIC8vIGJvdW5jZSBiYWNrIGRvd25cbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMubWF4WSwgMTAwLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdENvbENoYW5nZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBjbGFtcCgtTUFYX1BJQ0tFUl9TUEVFRCwgZGV0YWlsLnZlbG9jaXR5WSAqIDIzLCBNQVhfUElDS0VSX1NQRUVEKTtcbiAgICAgICAgaWYgKHRoaXMudmVsb2NpdHkgPT09IDAgJiYgZGV0YWlsLmRlbHRhWSA9PT0gMCkge1xuICAgICAgICAgICAgdmFyIG9wdCA9IGRldGFpbC5ldmVudC50YXJnZXQuY2xvc2VzdCgnLnBpY2tlci1vcHQnKTtcbiAgICAgICAgICAgIGlmIChvcHQgJiYgb3B0Lmhhc0F0dHJpYnV0ZSgnb3B0LWluZGV4JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNlbGVjdGVkKHBhcnNlSW50KG9wdC5nZXRBdHRyaWJ1dGUoJ29wdC1pbmRleCcpLCAxMCksIFRSQU5TSVRJT05fRFVSQVRJT04pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy55ICs9IGRldGFpbC5kZWx0YVk7XG4gICAgICAgICAgICB0aGlzLmRlY2VsZXJhdGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMy5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uIChmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgdmFyIG1pbiA9IHRoaXMuY29sLm9wdGlvbnMubGVuZ3RoIC0gMTtcbiAgICAgICAgdmFyIG1heCA9IDA7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5jb2wub3B0aW9ucztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnNbaV0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBtaW4gPSBNYXRoLm1pbihtaW4sIGkpO1xuICAgICAgICAgICAgICAgIG1heCA9IE1hdGgubWF4KG1heCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ubHkgdXBkYXRlIHNlbGVjdGVkIHZhbHVlIGlmIGNvbHVtbiBoYXMgYVxuICAgICAgICAgKiB2ZWxvY2l0eSBvZiAwLiBJZiBpdCBkb2VzIG5vdCwgdGhlbiB0aGVcbiAgICAgICAgICogY29sdW1uIGlzIGFuaW1hdGluZyBtaWdodCBsYW5kIG9uXG4gICAgICAgICAqIGEgdmFsdWUgZGlmZmVyZW50IHRoYW4gdGhlIHZhbHVlIGF0XG4gICAgICAgICAqIHNlbGVjdGVkSW5kZXhcbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLnZlbG9jaXR5ICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSBjbGFtcChtaW4sIHRoaXMuY29sLnNlbGVjdGVkSW5kZXggfHwgMCwgbWF4KTtcbiAgICAgICAgaWYgKHRoaXMuY29sLnByZXZTZWxlY3RlZCAhPT0gc2VsZWN0ZWRJbmRleCB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICAgIHZhciB5ID0gKHNlbGVjdGVkSW5kZXggKiB0aGlzLm9wdEhlaWdodCkgKiAtMTtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoeSwgVFJBTlNJVElPTl9EVVJBVElPTiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzMucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY29sID0gdGhpcy5jb2w7XG4gICAgICAgIHZhciBCdXR0b24gPSAnYnV0dG9uJztcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczogKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hWydwaWNrZXItY29sJ10gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hWydwaWNrZXItb3B0cy1sZWZ0J10gPSB0aGlzLmNvbC5hbGlnbiA9PT0gJ2xlZnQnLFxuICAgICAgICAgICAgICAgIF9hWydwaWNrZXItb3B0cy1yaWdodCddID0gdGhpcy5jb2wuYWxpZ24gPT09ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgX2EpLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICdtYXgtd2lkdGgnOiB0aGlzLmNvbC5jb2x1bW5XaWR0aFxuICAgICAgICAgICAgfSB9LCBjb2wucHJlZml4ICYmIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwicGlja2VyLXByZWZpeFwiLCBzdHlsZTogeyB3aWR0aDogY29sLnByZWZpeFdpZHRoIH0gfSwgY29sLnByZWZpeCkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicGlja2VyLW9wdHNcIiwgc3R5bGU6IHsgbWF4V2lkdGg6IGNvbC5vcHRpb25zV2lkdGggfSwgcmVmOiBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIF90aGlzLm9wdHNFbCA9IGVsOyB9IH0sIGNvbC5vcHRpb25zLm1hcChmdW5jdGlvbiAobywgaW5kZXgpIHsgcmV0dXJuIGgoQnV0dG9uLCB7IHR5cGU6IFwiYnV0dG9uXCIsIGNsYXNzOiB7ICdwaWNrZXItb3B0JzogdHJ1ZSwgJ3BpY2tlci1vcHQtZGlzYWJsZWQnOiAhIW8uZGlzYWJsZWQgfSwgXCJvcHQtaW5kZXhcIjogaW5kZXggfSwgby50ZXh0KTsgfSkpLCBjb2wuc3VmZml4ICYmIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwicGlja2VyLXN1ZmZpeFwiLCBzdHlsZTogeyB3aWR0aDogY29sLnN1ZmZpeFdpZHRoIH0gfSwgY29sLnN1ZmZpeCkpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMy5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18zLCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiY29sXCI6IFtcImNvbENoYW5nZWRcIl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18zLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIi5waWNrZXItY29se2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4OjE7ZmxleDoxOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7aGVpZ2h0OjEwMCU7LXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JveC1zaXppbmc6Y29udGVudC1ib3g7Y29udGFpbjpjb250ZW50fS5waWNrZXItb3B0c3twb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleDoxO2ZsZXg6MTttYXgtd2lkdGg6MTAwJX0ucGlja2VyLW9wdHtsZWZ0OjA7dG9wOjA7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2JvcmRlcjowO3RleHQtYWxpZ246Y2VudGVyO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO2NvbnRhaW46c3RyaWN0O292ZXJmbG93OmhpZGRlbjt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5waWNrZXItb3B0LFtkaXI9cnRsXSAucGlja2VyLW9wdHtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjB9LnBpY2tlci1vcHQucGlja2VyLW9wdC1kaXNhYmxlZHtwb2ludGVyLWV2ZW50czpub25lfS5waWNrZXItb3B0LWRpc2FibGVke29wYWNpdHk6MH0ucGlja2VyLW9wdHMtbGVmdHstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5waWNrZXItb3B0cy1yaWdodHstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LnBpY2tlci1vcHQ6YWN0aXZlLC5waWNrZXItb3B0OmZvY3Vze291dGxpbmU6bm9uZX0ucGlja2VyLXByZWZpeHt0ZXh0LWFsaWduOmVuZH0ucGlja2VyLXByZWZpeCwucGlja2VyLXN1ZmZpeHtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleDoxO2ZsZXg6MTt3aGl0ZS1zcGFjZTpub3dyYXB9LnBpY2tlci1zdWZmaXh7dGV4dC1hbGlnbjpzdGFydH0ucGlja2VyLWNvbHtwYWRkaW5nLWxlZnQ6OHB4O3BhZGRpbmctcmlnaHQ6OHB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDstd2Via2l0LXRyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2R9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5waWNrZXItY29se3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDo4cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6OHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6OHB4O3BhZGRpbmctaW5saW5lLWVuZDo4cHh9fS5waWNrZXItb3B0cywucGlja2VyLXByZWZpeCwucGlja2VyLXN1ZmZpeHt0b3A6NzdweDstd2Via2l0LXRyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7Y29sb3I6aW5oZXJpdDtmb250LXNpemU6MjJweDtsaW5lLWhlaWdodDo0MnB4O3BvaW50ZXItZXZlbnRzOm5vbmV9LnBpY2tlci1vcHR7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7aGVpZ2h0OjQzcHg7LXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOmluaGVyaXQ7Zm9udC1zaXplOjIycHg7bGluZS1oZWlnaHQ6NDJweDstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO3BvaW50ZXItZXZlbnRzOmF1dG99LnBpY2tlci1vcHQucGlja2VyLW9wdC1zZWxlY3RlZCwucGlja2VyLXByZWZpeCwucGlja2VyLXN1ZmZpeHtjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKX1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzM7XG59KCkpO1xudmFyIFBJQ0tFUl9PUFRfU0VMRUNURUQgPSAncGlja2VyLW9wdC1zZWxlY3RlZCc7XG52YXIgREVDRUxFUkFUSU9OX0ZSSUNUSU9OID0gMC45NztcbnZhciBNQVhfUElDS0VSX1NQRUVEID0gOTA7XG52YXIgVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MDtcbmV4cG9ydCB7IERhdGV0aW1lIGFzIGlvbl9kYXRldGltZSwgUGlja2VyIGFzIGlvbl9waWNrZXIsIFBpY2tlckNvbHVtbkNtcCBhcyBpb25fcGlja2VyX2NvbHVtbiB9O1xuIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xudmFyIGhvc3RDb250ZXh0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBlbCkge1xuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcbn07XG4vKipcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cbiAqL1xudmFyIGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyAoX2EgPSB7XG4gICAgICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBfYVtcImlvbi1jb2xvci1cIiArIGNvbG9yXSA9IHRydWUsXG4gICAgICAgIF9hKSA6IHVuZGVmaW5lZDtcbn07XG52YXIgZ2V0Q2xhc3NMaXN0ID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT0gbnVsbDsgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudHJpbSgpOyB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPT0gJyc7IH0pO1xuICAgIH1cbiAgICByZXR1cm4gW107XG59O1xudmFyIGdldENsYXNzTWFwID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG1hcFtjXSA9IHRydWU7IH0pO1xuICAgIHJldHVybiBtYXA7XG59O1xudmFyIFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xudmFyIG9wZW5VUkwgPSBmdW5jdGlvbiAodXJsLCBldiwgZGlyZWN0aW9uKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByb3V0ZXI7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcbiAgICAgICAgICAgIHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcbiAgICAgICAgICAgIGlmIChyb3V0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgIH0pO1xufSk7IH07XG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9