(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-datetime_3-ios.entry.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-datetime_3-ios.entry.js ***!
  \***************************************************************************/
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
        get: function () { return ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family,inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}:host-context([dir=rtl]) .datetime-text,[dir=rtl] .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-color-step-400,#999);--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px}"; },
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
        get: function () { return ".sc-ion-picker-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family,inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}[dir=rtl].sc-ion-picker-ios-h, [dir=rtl] .sc-ion-picker-ios-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-picker-ios-h{display:none}.picker-wrapper.sc-ion-picker-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-wrapper.sc-ion-picker-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-ios:active, .picker-button.sc-ion-picker-ios:focus{outline:none}.picker-columns.sc-ion-picker-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom,0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-ios, .picker-below-highlight.sc-ion-picker-ios{display:none;pointer-events:none}.sc-ion-picker-ios-h{--background:var(--ion-background-color,#fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)));--height:260px;color:var(--ion-item-color,var(--ion-text-color,#000))}.picker-toolbar.sc-ion-picker-ios{display:-ms-flexbox;display:flex;height:44px;border-bottom:.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-ios{-ms-flex:1;flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-ios:last-child .picker-button.sc-ion-picker-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-ios:first-child{font-weight:400;text-align:start}.picker-button.sc-ion-picker-ios, .picker-button.activated.sc-ion-picker-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1em;padding-right:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary,#3880ff);font-size:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-button.sc-ion-picker-ios, .picker-button.activated.sc-ion-picker-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em}}.picker-columns.sc-ion-picker-ios{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-above-highlight.sc-ion-picker-ios{left:0;top:0;-webkit-transform:translateZ(90px);transform:translateZ(90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:-webkit-gradient(linear,left top,left bottom,color-stop(20%,var(--background,var(--ion-background-color,#fff))),to(rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8)));background:linear-gradient(180deg,var(--background,var(--ion-background-color,#fff)) 20%,rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8));z-index:10}[dir=rtl].sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios, [dir=rtl] .sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios, [dir=rtl].sc-ion-picker-ios .picker-above-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}.picker-below-highlight.sc-ion-picker-ios{left:0;top:115px;-webkit-transform:translateZ(90px);transform:translateZ(90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:-webkit-gradient(linear,left bottom,left top,color-stop(30%,var(--background,var(--ion-background-color,#fff))),to(rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8)));background:linear-gradient(0deg,var(--background,var(--ion-background-color,#fff)) 30%,rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8));z-index:11}[dir=rtl].sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios, [dir=rtl] .sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios, [dir=rtl].sc-ion-picker-ios .picker-below-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}"; },
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
        get: function () { return ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}:host-context([dir=rtl]) .picker-opt,[dir=rtl] .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{text-align:end}.picker-prefix,.picker-suffix{position:relative;-ms-flex:1;flex:1;white-space:nowrap}.picker-suffix{text-align:start}.picker-col{padding-left:4px;padding-right:4px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}.picker-opts,.picker-prefix,.picker-suffix{top:77px;pointer-events:none}.picker-opt,.picker-opts,.picker-prefix,.picker-suffix{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}:host-context([dir=rtl]) .picker-opt,[dir=rtl] .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}"; },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2hhcHRpYy1jOGYxNDczZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1kYXRldGltZV8zLWlvcy5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2lIOzs7Ozs7Ozs7Ozs7O0FDMUNqSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDOEU7QUFDL0Y7QUFDaUU7QUFDaEM7QUFDa0Y7QUFDeEU7QUFDTjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsY0FBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsOEJBQThCLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywwQkFBMEIsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUsseUJBQXlCO0FBQzlCLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssMEJBQTBCO0FBQy9CLEtBQUss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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBc0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLDJCQUEyQixFQUFFO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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NkMsUUFBUSx1REFBUztBQUM5RDtBQUNBLFdBQVcseURBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFO0FBQ2tGIiwiZmlsZSI6IjEzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ2hlY2sgdG8gc2VlIGlmIHRoZSBIYXB0aWMgUGx1Z2luIGlzIGF2YWlsYWJsZVxuICogQHJldHVybiBSZXR1cm5zIGB0cnVlYCBvciBmYWxzZSBpZiB0aGUgcGx1Z2luIGlzIGF2YWlsYWJsZVxuICovXG4vKipcbiAqIFRyaWdnZXIgYSBzZWxlY3Rpb24gY2hhbmdlZCBoYXB0aWMgZXZlbnQuIEdvb2QgZm9yIG9uZS10aW1lIGV2ZW50c1xuICogKG5vdCBmb3IgZ2VzdHVyZXMpXG4gKi9cbnZhciBoYXB0aWNTZWxlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVuZ2luZSA9IHdpbmRvdy5UYXB0aWNFbmdpbmU7XG4gICAgaWYgKGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuc2VsZWN0aW9uKCk7XG4gICAgfVxufTtcbi8qKlxuICogVGVsbCB0aGUgaGFwdGljIGVuZ2luZSB0aGF0IGEgZ2VzdHVyZSBmb3IgYSBzZWxlY3Rpb24gY2hhbmdlIGlzIHN0YXJ0aW5nLlxuICovXG52YXIgaGFwdGljU2VsZWN0aW9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVuZ2luZSA9IHdpbmRvdy5UYXB0aWNFbmdpbmU7XG4gICAgaWYgKGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvblN0YXJ0KCk7XG4gICAgfVxufTtcbi8qKlxuICogVGVsbCB0aGUgaGFwdGljIGVuZ2luZSB0aGF0IGEgc2VsZWN0aW9uIGNoYW5nZWQgZHVyaW5nIGEgZ2VzdHVyZS5cbiAqL1xudmFyIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVuZ2luZSA9IHdpbmRvdy5UYXB0aWNFbmdpbmU7XG4gICAgaWYgKGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvbkNoYW5nZWQoKTtcbiAgICB9XG59O1xuLyoqXG4gKiBUZWxsIHRoZSBoYXB0aWMgZW5naW5lIHdlIGFyZSBkb25lIHdpdGggYSBnZXN0dXJlLiBUaGlzIG5lZWRzIHRvIGJlXG4gKiBjYWxsZWQgbGVzdCByZXNvdXJjZXMgYXJlIG5vdCBwcm9wZXJseSByZWN5Y2xlZC5cbiAqL1xudmFyIGhhcHRpY1NlbGVjdGlvbkVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZW5naW5lID0gd2luZG93LlRhcHRpY0VuZ2luZTtcbiAgICBpZiAoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5nZXN0dXJlU2VsZWN0aW9uRW5kKCk7XG4gICAgfVxufTtcbmV4cG9ydCB7IGhhcHRpY1NlbGVjdGlvblN0YXJ0IGFzIGEsIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQgYXMgYiwgaGFwdGljU2VsZWN0aW9uRW5kIGFzIGMsIGhhcHRpY1NlbGVjdGlvbiBhcyBoIH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGQgYXMgY3JlYXRlRXZlbnQsIGMgYXMgZ2V0SW9uTW9kZSwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtZmVlZWZmMGQuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNsYW1wLCBmIGFzIGZpbmRJdGVtTGFiZWwsIGEgYXMgcmVuZGVySGlkZGVuSW5wdXQgfSBmcm9tICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi1hZjQ3OGZlOS5qcyc7XG5pbXBvcnQgeyBwIGFzIHBpY2tlckNvbnRyb2xsZXIsIGQgYXMgcHJlcGFyZU92ZXJsYXksIGUgYXMgcHJlc2VudCwgZiBhcyBkaXNtaXNzLCBnIGFzIGV2ZW50TWV0aG9kLCBzIGFzIHNhZmVDYWxsIH0gZnJvbSAnLi9vdmVybGF5cy0xMDY0MGQ4Ni5qcyc7XG5pbXBvcnQgeyBoIGFzIGhvc3RDb250ZXh0LCBnIGFzIGdldENsYXNzTWFwIH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG5pbXBvcnQgeyBiIGFzIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQgfSBmcm9tICcuL2hhcHRpYy1jOGYxNDczZS5qcyc7XG4vKipcbiAqIEdldHMgYSBkYXRlIHZhbHVlIGdpdmVuIGEgZm9ybWF0XG4gKiBEZWZhdWx0cyB0byB0aGUgY3VycmVudCBkYXRlIGlmXG4gKiBubyBkYXRlIGdpdmVuXG4gKi9cbnZhciBnZXREYXRlVmFsdWUgPSBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0KSB7XG4gICAgdmFyIGdldFZhbHVlID0gZ2V0VmFsdWVGcm9tRm9ybWF0KGRhdGUsIGZvcm1hdCk7XG4gICAgaWYgKGdldFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGdldFZhbHVlO1xuICAgIH1cbiAgICB2YXIgZGVmYXVsdERhdGUgPSBwYXJzZURhdGUobmV3IERhdGUoKS50b0lTT1N0cmluZygpKTtcbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tRm9ybWF0KGRlZmF1bHREYXRlLCBmb3JtYXQpO1xufTtcbnZhciByZW5kZXJEYXRldGltZSA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSwgdmFsdWUsIGxvY2FsZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaGFzVGV4dCA9IGZhbHNlO1xuICAgIEZPUk1BVF9LRVlTLmZvckVhY2goZnVuY3Rpb24gKGZvcm1hdCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKHRlbXBsYXRlLmluZGV4T2YoZm9ybWF0LmYpID4gLTEpIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9ICd7JyArIGluZGV4ICsgJ30nO1xuICAgICAgICAgICAgdmFyIHRleHQgPSByZW5kZXJUZXh0Rm9ybWF0KGZvcm1hdC5mLCB2YWx1ZVtmb3JtYXQua10sIHZhbHVlLCBsb2NhbGUpO1xuICAgICAgICAgICAgaWYgKCFoYXNUZXh0ICYmIHRleHQgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZVtmb3JtYXQua10gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGhhc1RleHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4sIHRleHQgfHwgJycpO1xuICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKGZvcm1hdC5mLCB0b2tlbik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIWhhc1RleHQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKHRva2Vuc1tpXSwgdG9rZW5zW2kgKyAxXSk7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbn07XG52YXIgcmVuZGVyVGV4dEZvcm1hdCA9IGZ1bmN0aW9uIChmb3JtYXQsIHZhbHVlLCBkYXRlLCBsb2NhbGUpIHtcbiAgICBpZiAoKGZvcm1hdCA9PT0gRk9STUFUX0REREQgfHwgZm9ybWF0ID09PSBGT1JNQVRfREREKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFsdWUgPSAobmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoIC0gMSwgZGF0ZS5kYXkpKS5nZXREYXkoKTtcbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT09IEZPUk1BVF9EREREKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChsb2NhbGUuZGF5TmFtZXMgPyBsb2NhbGUuZGF5TmFtZXMgOiBEQVlfTkFNRVMpW3ZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAobG9jYWxlLmRheVNob3J0TmFtZXMgPyBsb2NhbGUuZGF5U2hvcnROYW1lcyA6IERBWV9TSE9SVF9OQU1FUylbdmFsdWVdO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBpZ25vcmVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSBGT1JNQVRfQSkge1xuICAgICAgICByZXR1cm4gZGF0ZSAhPT0gdW5kZWZpbmVkICYmIGRhdGUuaG91ciAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IChkYXRlLmhvdXIgPCAxMiA/ICdBTScgOiAnUE0nKVxuICAgICAgICAgICAgOiB2YWx1ZSA/IHZhbHVlLnRvVXBwZXJDYXNlKCkgOiAnJztcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gRk9STUFUX2EpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUgIT09IHVuZGVmaW5lZCAmJiBkYXRlLmhvdXIgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAoZGF0ZS5ob3VyIDwgMTIgPyAnYW0nIDogJ3BtJylcbiAgICAgICAgICAgIDogdmFsdWUgfHwgJyc7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gRk9STUFUX1lZIHx8IGZvcm1hdCA9PT0gRk9STUFUX01NIHx8XG4gICAgICAgIGZvcm1hdCA9PT0gRk9STUFUX0REIHx8IGZvcm1hdCA9PT0gRk9STUFUX0hIIHx8XG4gICAgICAgIGZvcm1hdCA9PT0gRk9STUFUX21tIHx8IGZvcm1hdCA9PT0gRk9STUFUX3NzKSB7XG4gICAgICAgIHJldHVybiB0d29EaWdpdCh2YWx1ZSk7XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IEZPUk1BVF9ZWVlZKSB7XG4gICAgICAgIHJldHVybiBmb3VyRGlnaXQodmFsdWUpO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSBGT1JNQVRfTU1NTSkge1xuICAgICAgICByZXR1cm4gKGxvY2FsZS5tb250aE5hbWVzID8gbG9jYWxlLm1vbnRoTmFtZXMgOiBNT05USF9OQU1FUylbdmFsdWUgLSAxXTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gRk9STUFUX01NTSkge1xuICAgICAgICByZXR1cm4gKGxvY2FsZS5tb250aFNob3J0TmFtZXMgPyBsb2NhbGUubW9udGhTaG9ydE5hbWVzIDogTU9OVEhfU0hPUlRfTkFNRVMpW3ZhbHVlIC0gMV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IEZPUk1BVF9oaCB8fCBmb3JtYXQgPT09IEZPUk1BVF9oKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcxMic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID4gMTIpIHtcbiAgICAgICAgICAgIHZhbHVlIC09IDEyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IEZPUk1BVF9oaCAmJiB2YWx1ZSA8IDEwKSB7XG4gICAgICAgICAgICByZXR1cm4gKCcwJyArIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbn07XG52YXIgZGF0ZVZhbHVlUmFuZ2UgPSBmdW5jdGlvbiAoZm9ybWF0LCBtaW4sIG1heCkge1xuICAgIHZhciBvcHRzID0gW107XG4gICAgaWYgKGZvcm1hdCA9PT0gRk9STUFUX1lZWVkgfHwgZm9ybWF0ID09PSBGT1JNQVRfWVkpIHtcbiAgICAgICAgLy8geWVhclxuICAgICAgICBpZiAobWF4LnllYXIgPT09IHVuZGVmaW5lZCB8fCBtaW4ueWVhciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pbiBhbmQgbWF4IHllYXIgaXMgdW5kZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IG1heC55ZWFyOyBpID49IG1pbi55ZWFyOyBpLS0pIHtcbiAgICAgICAgICAgIG9wdHMucHVzaChpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChmb3JtYXQgPT09IEZPUk1BVF9NTU1NIHx8IGZvcm1hdCA9PT0gRk9STUFUX01NTSB8fFxuICAgICAgICBmb3JtYXQgPT09IEZPUk1BVF9NTSB8fCBmb3JtYXQgPT09IEZPUk1BVF9NIHx8XG4gICAgICAgIGZvcm1hdCA9PT0gRk9STUFUX2hoIHx8IGZvcm1hdCA9PT0gRk9STUFUX2gpIHtcbiAgICAgICAgLy8gbW9udGggb3IgMTItaG91clxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IDEzOyBpKyspIHtcbiAgICAgICAgICAgIG9wdHMucHVzaChpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChmb3JtYXQgPT09IEZPUk1BVF9EREREIHx8IGZvcm1hdCA9PT0gRk9STUFUX0RERCB8fFxuICAgICAgICBmb3JtYXQgPT09IEZPUk1BVF9ERCB8fCBmb3JtYXQgPT09IEZPUk1BVF9EKSB7XG4gICAgICAgIC8vIGRheVxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IDMyOyBpKyspIHtcbiAgICAgICAgICAgIG9wdHMucHVzaChpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChmb3JtYXQgPT09IEZPUk1BVF9ISCB8fCBmb3JtYXQgPT09IEZPUk1BVF9IKSB7XG4gICAgICAgIC8vIDI0LWhvdXJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgICAgICBvcHRzLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZm9ybWF0ID09PSBGT1JNQVRfbW0gfHwgZm9ybWF0ID09PSBGT1JNQVRfbSkge1xuICAgICAgICAvLyBtaW51dGVzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjA7IGkrKykge1xuICAgICAgICAgICAgb3B0cy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGZvcm1hdCA9PT0gRk9STUFUX3NzIHx8IGZvcm1hdCA9PT0gRk9STUFUX3MpIHtcbiAgICAgICAgLy8gc2Vjb25kc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDYwOyBpKyspIHtcbiAgICAgICAgICAgIG9wdHMucHVzaChpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChmb3JtYXQgPT09IEZPUk1BVF9BIHx8IGZvcm1hdCA9PT0gRk9STUFUX2EpIHtcbiAgICAgICAgLy8gQU0vUE1cbiAgICAgICAgb3B0cy5wdXNoKCdhbScsICdwbScpO1xuICAgIH1cbiAgICByZXR1cm4gb3B0cztcbn07XG52YXIgZGF0ZVNvcnRWYWx1ZSA9IGZ1bmN0aW9uICh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUpIHtcbiAgICBpZiAoaG91ciA9PT0gdm9pZCAwKSB7IGhvdXIgPSAwOyB9XG4gICAgaWYgKG1pbnV0ZSA9PT0gdm9pZCAwKSB7IG1pbnV0ZSA9IDA7IH1cbiAgICByZXR1cm4gcGFyc2VJbnQoXCIxXCIgKyBmb3VyRGlnaXQoeWVhcikgKyB0d29EaWdpdChtb250aCkgKyB0d29EaWdpdChkYXkpICsgdHdvRGlnaXQoaG91cikgKyB0d29EaWdpdChtaW51dGUpLCAxMCk7XG59O1xudmFyIGRhdGVEYXRhU29ydFZhbHVlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICByZXR1cm4gZGF0ZVNvcnRWYWx1ZShkYXRhLnllYXIsIGRhdGEubW9udGgsIGRhdGEuZGF5LCBkYXRhLmhvdXIsIGRhdGEubWludXRlKTtcbn07XG52YXIgZGF5c0luTW9udGggPSBmdW5jdGlvbiAobW9udGgsIHllYXIpIHtcbiAgICByZXR1cm4gKG1vbnRoID09PSA0IHx8IG1vbnRoID09PSA2IHx8IG1vbnRoID09PSA5IHx8IG1vbnRoID09PSAxMSkgPyAzMCA6IChtb250aCA9PT0gMikgPyBpc0xlYXBZZWFyKHllYXIpID8gMjkgOiAyOCA6IDMxO1xufTtcbnZhciBpc0xlYXBZZWFyID0gZnVuY3Rpb24gKHllYXIpIHtcbiAgICByZXR1cm4gKHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDApIHx8ICh5ZWFyICUgNDAwID09PSAwKTtcbn07XG52YXIgSVNPXzg2MDFfUkVHRVhQID0gL14oXFxkezR9fFsrXFwtXVxcZHs2fSkoPzotKFxcZHsyfSkoPzotKFxcZHsyfSkpPyk/KD86VChcXGR7Mn0pOihcXGR7Mn0pKD86OihcXGR7Mn0pKD86XFwuKFxcZHszfSkpPyk/KD86KFopfChbK1xcLV0pKFxcZHsyfSkoPzo6KFxcZHsyfSkpPyk/KT8kLztcbnZhciBUSU1FX1JFR0VYUCA9IC9eKChcXGR7Mn0pOihcXGR7Mn0pKD86OihcXGR7Mn0pKD86XFwuKFxcZHszfSkpPyk/KD86KFopfChbK1xcLV0pKFxcZHsyfSkoPzo6KFxcZHsyfSkpPyk/KT8kLztcbnZhciBwYXJzZURhdGUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgLy8gbWFudWFsbHkgcGFyc2UgSVMwIGN1eiBEYXRlLnBhcnNlIGNhbm5vdCBiZSB0cnVzdGVkXG4gICAgLy8gSVNPIDg2MDEgZm9ybWF0OiAxOTk0LTEyLTE1VDEzOjQ3OjIwWlxuICAgIHZhciBwYXJzZSA9IG51bGw7XG4gICAgaWYgKHZhbCAhPSBudWxsICYmIHZhbCAhPT0gJycpIHtcbiAgICAgICAgLy8gdHJ5IHBhcnNpbmcgZm9yIGp1c3QgdGltZSBmaXJzdCwgSEg6TU1cbiAgICAgICAgcGFyc2UgPSBUSU1FX1JFR0VYUC5leGVjKHZhbCk7XG4gICAgICAgIGlmIChwYXJzZSkge1xuICAgICAgICAgICAgLy8gYWRqdXN0IHRoZSBhcnJheSBzbyBpdCBmaXRzIG5pY2VseSB3aXRoIHRoZSBkYXRldGltZSBwYXJzZVxuICAgICAgICAgICAgcGFyc2UudW5zaGlmdCh1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBwYXJzZVsyXSA9IHBhcnNlWzNdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gdHJ5IHBhcnNpbmcgZm9yIGZ1bGwgSVNPIGRhdGV0aW1lXG4gICAgICAgICAgICBwYXJzZSA9IElTT184NjAxX1JFR0VYUC5leGVjKHZhbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcnNlID09PSBudWxsKSB7XG4gICAgICAgIC8vIHdhc24ndCBhYmxlIHRvIHBhcnNlIHRoZSBJU08gZGF0ZXRpbWVcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gZW5zdXJlIGFsbCB0aGUgcGFyc2UgdmFsdWVzIGV4aXN0IHdpdGggYXQgbGVhc3QgMFxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgODsgaSsrKSB7XG4gICAgICAgIHBhcnNlW2ldID0gcGFyc2VbaV0gIT09IHVuZGVmaW5lZCA/IHBhcnNlSW50KHBhcnNlW2ldLCAxMCkgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHZhciB0ek9mZnNldCA9IDA7XG4gICAgaWYgKHBhcnNlWzldICYmIHBhcnNlWzEwXSkge1xuICAgICAgICAvLyBob3Vyc1xuICAgICAgICB0ek9mZnNldCA9IHBhcnNlSW50KHBhcnNlWzEwXSwgMTApICogNjA7XG4gICAgICAgIGlmIChwYXJzZVsxMV0pIHtcbiAgICAgICAgICAgIC8vIG1pbnV0ZXNcbiAgICAgICAgICAgIHR6T2Zmc2V0ICs9IHBhcnNlSW50KHBhcnNlWzExXSwgMTApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZVs5XSA9PT0gJy0nKSB7XG4gICAgICAgICAgICAvLyArIG9yIC1cbiAgICAgICAgICAgIHR6T2Zmc2V0ICo9IC0xO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHllYXI6IHBhcnNlWzFdLFxuICAgICAgICBtb250aDogcGFyc2VbMl0sXG4gICAgICAgIGRheTogcGFyc2VbM10sXG4gICAgICAgIGhvdXI6IHBhcnNlWzRdLFxuICAgICAgICBtaW51dGU6IHBhcnNlWzVdLFxuICAgICAgICBzZWNvbmQ6IHBhcnNlWzZdLFxuICAgICAgICBtaWxsaXNlY29uZDogcGFyc2VbN10sXG4gICAgICAgIHR6T2Zmc2V0OiB0ek9mZnNldCxcbiAgICB9O1xufTtcbi8qKlxuICogQ29udmVydHMgYSB2YWxpZCBVVEMgZGF0ZXRpbWUgc3RyaW5nXG4gKiBUbyB0aGUgdXNlcidzIGxvY2FsIHRpbWV6b25lXG4gKiBOb3RlOiBUaGlzIGlzIG5vdCBtZWFudCBmb3IgdGltZSBzdHJpbmdzXG4gKiBzdWNoIGFzIFwiMDE6NDdcIlxuICovXG52YXIgZ2V0TG9jYWxEYXRlVGltZSA9IGZ1bmN0aW9uIChkYXRlU3RyaW5nKSB7XG4gICAgaWYgKGRhdGVTdHJpbmcgPT09IHZvaWQgMCkgeyBkYXRlU3RyaW5nID0gJyc7IH1cbiAgICAvKipcbiAgICAgKiBJZiB1c2VyIHBhc3NlZCBpbiB1bmRlZmluZWRcbiAgICAgKiBvciBudWxsLCBjb252ZXJ0IGl0IHRvIHRoZVxuICAgICAqIGVtcHR5IHN0cmluZyBzaW5jZSB0aGUgcmVzdFxuICAgICAqIG9mIHRoaXMgZnVuY3Rpb25zIGV4cGVjdHNcbiAgICAgKiBhIHN0cmluZ1xuICAgICAqL1xuICAgIGlmIChkYXRlU3RyaW5nID09PSB1bmRlZmluZWQgfHwgZGF0ZVN0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICBkYXRlU3RyaW5nID0gJyc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuc3VyZXMgdGhhdCBZWVlZLU1NLURELCBZWVlZLU1NLFxuICAgICAqIFlZWVktREQsIGV0YyBkb2VzIG5vdCBnZXQgYWZmZWN0ZWRcbiAgICAgKiBieSB0aW1lem9uZXMgYW5kIHN0YXlzIG9uIHRoZSBkYXkvbW9udGhcbiAgICAgKiB0aGF0IHRoZSB1c2VyIHByb3ZpZGVkXG4gICAgICovXG4gICAgaWYgKGRhdGVTdHJpbmcubGVuZ3RoID09PSAxMCB8fFxuICAgICAgICBkYXRlU3RyaW5nLmxlbmd0aCA9PT0gNykge1xuICAgICAgICBkYXRlU3RyaW5nICs9ICcgJztcbiAgICB9XG4gICAgdmFyIGRhdGUgPSAodHlwZW9mIGRhdGVTdHJpbmcgPT09ICdzdHJpbmcnICYmIGRhdGVTdHJpbmcubGVuZ3RoID4gMCkgPyBuZXcgRGF0ZShkYXRlU3RyaW5nKSA6IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbn07XG52YXIgdXBkYXRlRGF0ZSA9IGZ1bmN0aW9uIChleGlzdGluZ0RhdGEsIG5ld0RhdGEpIHtcbiAgICBpZiAoIW5ld0RhdGEgfHwgdHlwZW9mIG5ld0RhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBsb2NhbERhdGVUaW1lID0gZ2V0TG9jYWxEYXRlVGltZShuZXdEYXRhKTtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4obG9jYWxEYXRlVGltZS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICBuZXdEYXRhID0gbG9jYWxEYXRlVGltZS50b0lTT1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChuZXdEYXRhICYmIG5ld0RhdGEgIT09ICcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmV3RGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIC8vIG5ldyBkYXRlIGlzIGEgc3RyaW5nLCBhbmQgaG9wZWZ1bGx5IGluIHRoZSBJU08gZm9ybWF0XG4gICAgICAgICAgICAvLyBjb252ZXJ0IGl0IHRvIG91ciBEYXRldGltZURhdGEgaWYgYSB2YWxpZCBJU09cbiAgICAgICAgICAgIG5ld0RhdGEgPSBwYXJzZURhdGUobmV3RGF0YSk7XG4gICAgICAgICAgICBpZiAobmV3RGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIHN1Y2Nlc3NmdWxseSBwYXJzZWQgdGhlIElTTyBzdHJpbmcgdG8gb3VyIERhdGV0aW1lRGF0YVxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZXhpc3RpbmdEYXRhLCBuZXdEYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgobmV3RGF0YS55ZWFyIHx8IG5ld0RhdGEuaG91ciB8fCBuZXdEYXRhLm1vbnRoIHx8IG5ld0RhdGEuZGF5IHx8IG5ld0RhdGEubWludXRlIHx8IG5ld0RhdGEuc2Vjb25kKSkge1xuICAgICAgICAgICAgLy8gbmV3RGF0YSBpcyBmcm9tIG9mIGEgZGF0ZXRpbWUgcGlja2VyJ3Mgc2VsZWN0ZWQgdmFsdWVzXG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGV4aXN0aW5nIERhdGV0aW1lRGF0YSBkYXRhIHdpdGggdGhlIG5ldyB2YWx1ZXNcbiAgICAgICAgICAgIC8vIGRvIHNvbWUgbWFnaWMgZm9yIDEyLWhvdXIgdmFsdWVzXG4gICAgICAgICAgICBpZiAobmV3RGF0YS5hbXBtICYmIG5ld0RhdGEuaG91cikge1xuICAgICAgICAgICAgICAgIG5ld0RhdGEuaG91ci52YWx1ZSA9IChuZXdEYXRhLmFtcG0udmFsdWUgPT09ICdwbScpXG4gICAgICAgICAgICAgICAgICAgID8gKG5ld0RhdGEuaG91ci52YWx1ZSA9PT0gMTIgPyAxMiA6IG5ld0RhdGEuaG91ci52YWx1ZSArIDEyKVxuICAgICAgICAgICAgICAgICAgICA6IChuZXdEYXRhLmhvdXIudmFsdWUgPT09IDEyID8gMCA6IG5ld0RhdGEuaG91ci52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtZXJnZSBuZXcgdmFsdWVzIGZyb20gdGhlIHBpY2tlcidzIHNlbGVjdGlvblxuICAgICAgICAgICAgLy8gdG8gdGhlIGV4aXN0aW5nIERhdGV0aW1lRGF0YSB2YWx1ZXNcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhuZXdEYXRhKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nRGF0YVtrZXldID0gbmV3RGF0YVtrZXldLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3RGF0YS5hbXBtKSB7XG4gICAgICAgICAgICAvLyBFdmVuIHRob3VnaCBpbiB0aGUgcGlja2VyIGNvbHVtbiBob3VyIHZhbHVlcyBhcmUgYmV0d2VlbiAxIGFuZCAxMiwgdGhlIGhvdXIgdmFsdWUgaXMgYWN0dWFsbHkgbm9ybWFsaXplZFxuICAgICAgICAgICAgLy8gdG8gWzAsIDIzXSBpbnRlcnZhbC4gQmVjYXVzZSBvZiB0aGlzIHdoZW4gY2hhbmdpbmcgYmV0d2VlbiBBTSBhbmQgUE0gd2UgaGF2ZSB0byB1cGRhdGUgdGhlIGhvdXIgc28gaXQgcG9pbnRzXG4gICAgICAgICAgICAvLyB0byB0aGUgY29ycmVjdCBISCBob3VyXG4gICAgICAgICAgICBuZXdEYXRhLmhvdXIgPSB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5ld0RhdGEuaG91clxuICAgICAgICAgICAgICAgICAgICA/IG5ld0RhdGEuaG91ci52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IChuZXdEYXRhLmFtcG0udmFsdWUgPT09ICdwbSdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKGV4aXN0aW5nRGF0YS5ob3VyIDwgMTIgPyBleGlzdGluZ0RhdGEuaG91ciArIDEyIDogZXhpc3RpbmdEYXRhLmhvdXIpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IChleGlzdGluZ0RhdGEuaG91ciA+PSAxMiA/IGV4aXN0aW5nRGF0YS5ob3VyIC0gMTIgOiBleGlzdGluZ0RhdGEuaG91cikpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZXhpc3RpbmdEYXRhWydob3VyJ10gPSBuZXdEYXRhWydob3VyJ10udmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBld3csIGludmFsaWQgZGF0YVxuICAgICAgICBjb25zb2xlLndhcm4oXCJFcnJvciBwYXJzaW5nIGRhdGU6IFxcXCJcIiArIG5ld0RhdGEgKyBcIlxcXCIuIFBsZWFzZSBwcm92aWRlIGEgdmFsaWQgSVNPIDg2MDEgZGF0ZXRpbWUgZm9ybWF0OiBodHRwczovL3d3dy53My5vcmcvVFIvTk9URS1kYXRldGltZVwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGJsYW5rIGRhdGEsIGNsZWFyIGV2ZXJ5dGhpbmcgb3V0XG4gICAgICAgIGZvciAodmFyIGsgaW4gZXhpc3RpbmdEYXRhKSB7XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdEYXRhLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGV4aXN0aW5nRGF0YVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xudmFyIHBhcnNlVGVtcGxhdGUgPSBmdW5jdGlvbiAodGVtcGxhdGUpIHtcbiAgICB2YXIgZm9ybWF0cyA9IFtdO1xuICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnICcpO1xuICAgIEZPUk1BVF9LRVlTLmZvckVhY2goZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgICAgICBpZiAoZm9ybWF0LmYubGVuZ3RoID4gMSAmJiB0ZW1wbGF0ZS5pbmRleE9mKGZvcm1hdC5mKSA+IC0xICYmIHRlbXBsYXRlLmluZGV4T2YoZm9ybWF0LmYgKyBmb3JtYXQuZi5jaGFyQXQoMCkpIDwgMCkge1xuICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKGZvcm1hdC5mLCAnICcgKyBmb3JtYXQuZiArICcgJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgd29yZHMgPSB0ZW1wbGF0ZS5zcGxpdCgnICcpLmZpbHRlcihmdW5jdGlvbiAodykgeyByZXR1cm4gdy5sZW5ndGggPiAwOyB9KTtcbiAgICB3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uICh3b3JkLCBpKSB7XG4gICAgICAgIEZPUk1BVF9LRVlTLmZvckVhY2goZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgICAgICAgICAgaWYgKHdvcmQgPT09IGZvcm1hdC5mKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdvcmQgPT09IEZPUk1BVF9BIHx8IHdvcmQgPT09IEZPUk1BVF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgZm9ybWF0IGlzIGFuIGFtL3BtIGZvcm1hdCwgc28gaXQncyBhbiBcImFcIiBvciBcIkFcIlxuICAgICAgICAgICAgICAgICAgICBpZiAoKGZvcm1hdHMuaW5kZXhPZihGT1JNQVRfaCkgPCAwICYmIGZvcm1hdHMuaW5kZXhPZihGT1JNQVRfaGgpIDwgMCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIFZBTElEX0FNUE1fUFJFRklYLmluZGV4T2Yod29yZHNbaSAtIDFdKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRlbXBsYXRlIGRvZXMgbm90IGFscmVhZHkgaGF2ZSBhIDEyLWhvdXIgZm9ybWF0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvciB0aGlzIGFtL3BtIGZvcm1hdCBkb2Vzbid0IGhhdmUgYSBob3VyLCBtaW51dGUsIG9yIHNlY29uZCBmb3JtYXQgaW1tZWRpYXRlbHkgYmVmb3JlIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyBkbyBub3QgdHJlYXQgdGhpcyB3b3JkIFwiYVwiIG9yIFwiQVwiIGFzIHRoZSBhbS9wbSBmb3JtYXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3JtYXRzLnB1c2god29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBmb3JtYXRzO1xufTtcbnZhciBnZXRWYWx1ZUZyb21Gb3JtYXQgPSBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gRk9STUFUX0EgfHwgZm9ybWF0ID09PSBGT1JNQVRfYSkge1xuICAgICAgICByZXR1cm4gKGRhdGUuaG91ciA8IDEyID8gJ2FtJyA6ICdwbScpO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSBGT1JNQVRfaGggfHwgZm9ybWF0ID09PSBGT1JNQVRfaCkge1xuICAgICAgICByZXR1cm4gKGRhdGUuaG91ciA+IDEyID8gZGF0ZS5ob3VyIC0gMTIgOiAoZGF0ZS5ob3VyID09PSAwID8gMTIgOiBkYXRlLmhvdXIpKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGVbY29udmVydEZvcm1hdFRvS2V5KGZvcm1hdCldO1xufTtcbnZhciBjb252ZXJ0Rm9ybWF0VG9LZXkgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgayBpbiBGT1JNQVRfS0VZUykge1xuICAgICAgICBpZiAoRk9STUFUX0tFWVNba10uZiA9PT0gZm9ybWF0KSB7XG4gICAgICAgICAgICByZXR1cm4gRk9STUFUX0tFWVNba10uaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufTtcbnZhciBjb252ZXJ0RGF0YVRvSVNPID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvTk9URS1kYXRldGltZVxuICAgIHZhciBydG4gPSAnJztcbiAgICBpZiAoZGF0YS55ZWFyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gWVlZWVxuICAgICAgICBydG4gPSBmb3VyRGlnaXQoZGF0YS55ZWFyKTtcbiAgICAgICAgaWYgKGRhdGEubW9udGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gWVlZWS1NTVxuICAgICAgICAgICAgcnRuICs9ICctJyArIHR3b0RpZ2l0KGRhdGEubW9udGgpO1xuICAgICAgICAgICAgaWYgKGRhdGEuZGF5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBZWVlZLU1NLUREXG4gICAgICAgICAgICAgICAgcnRuICs9ICctJyArIHR3b0RpZ2l0KGRhdGEuZGF5KTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5ob3VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gWVlZWS1NTS1ERFRISDptbTpTU1xuICAgICAgICAgICAgICAgICAgICBydG4gKz0gXCJUXCIgKyB0d29EaWdpdChkYXRhLmhvdXIpICsgXCI6XCIgKyB0d29EaWdpdChkYXRhLm1pbnV0ZSkgKyBcIjpcIiArIHR3b0RpZ2l0KGRhdGEuc2Vjb25kKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubWlsbGlzZWNvbmQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBZWVlZLU1NLUREVEhIOm1tOlNTLlNTU1xuICAgICAgICAgICAgICAgICAgICAgICAgcnRuICs9ICcuJyArIHRocmVlRGlnaXQoZGF0YS5taWxsaXNlY29uZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudHpPZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gWVlZWS1NTS1ERFRISDptbTpTU1pcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ0biArPSAnWic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBZWVlZLU1NLUREVEhIOm1tOlNTKy8tSEg6bW1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJ0biArPSAoZGF0YS50ek9mZnNldCA+IDAgPyAnKycgOiAnLScpICsgdHdvRGlnaXQoTWF0aC5mbG9vcihNYXRoLmFicyhkYXRhLnR6T2Zmc2V0IC8gNjApKSkgKyAnOicgKyB0d29EaWdpdChkYXRhLnR6T2Zmc2V0ICUgNjApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGRhdGEuaG91ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIEhIOm1tXG4gICAgICAgIHJ0biA9IHR3b0RpZ2l0KGRhdGEuaG91cikgKyAnOicgKyB0d29EaWdpdChkYXRhLm1pbnV0ZSk7XG4gICAgICAgIGlmIChkYXRhLnNlY29uZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBISDptbTpTU1xuICAgICAgICAgICAgcnRuICs9ICc6JyArIHR3b0RpZ2l0KGRhdGEuc2Vjb25kKTtcbiAgICAgICAgICAgIGlmIChkYXRhLm1pbGxpc2Vjb25kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBISDptbTpTUy5TU1NcbiAgICAgICAgICAgICAgICBydG4gKz0gJy4nICsgdGhyZWVEaWdpdChkYXRhLm1pbGxpc2Vjb25kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcnRuO1xufTtcbi8qKlxuICogVXNlIHRvIGNvbnZlcnQgYSBzdHJpbmcgb2YgY29tbWEgc2VwYXJhdGVkIHN0cmluZ3Mgb3JcbiAqIGFuIGFycmF5IG9mIHN0cmluZ3MsIGFuZCBjbGVhbiB1cCBhbnkgdXNlciBpbnB1dFxuICovXG52YXIgY29udmVydFRvQXJyYXlPZlN0cmluZ3MgPSBmdW5jdGlvbiAoaW5wdXQsIHR5cGUpIHtcbiAgICBpZiAoaW5wdXQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBjb252ZXJ0IHRoZSBzdHJpbmcgdG8gYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgICAgICAvLyBhdXRvIHJlbW92ZSBhbnkgW10gY2hhcmFjdGVyc1xuICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1xcW3xcXF0vZywgJycpLnNwbGl0KCcsJyk7XG4gICAgfVxuICAgIHZhciB2YWx1ZXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIC8vIHRyaW0gdXAgZWFjaCBzdHJpbmcgdmFsdWVcbiAgICAgICAgdmFsdWVzID0gaW5wdXQubWFwKGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbC50b1N0cmluZygpLnRyaW0oKTsgfSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZXMgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkludmFsaWQgXFxcIlwiICsgdHlwZSArIFwiTmFtZXNcXFwiLiBNdXN0IGJlIGFuIGFycmF5IG9mIHN0cmluZ3MsIG9yIGEgY29tbWEgc2VwYXJhdGVkIHN0cmluZy5cIik7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXM7XG59O1xuLyoqXG4gKiBVc2UgdG8gY29udmVydCBhIHN0cmluZyBvZiBjb21tYSBzZXBhcmF0ZWQgbnVtYmVycyBvclxuICogYW4gYXJyYXkgb2YgbnVtYmVycywgYW5kIGNsZWFuIHVwIGFueSB1c2VyIGlucHV0XG4gKi9cbnZhciBjb252ZXJ0VG9BcnJheU9mTnVtYmVycyA9IGZ1bmN0aW9uIChpbnB1dCwgdHlwZSkge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIGNvbnZlcnQgdGhlIHN0cmluZyB0byBhbiBhcnJheSBvZiBzdHJpbmdzXG4gICAgICAgIC8vIGF1dG8gcmVtb3ZlIGFueSB3aGl0ZXNwYWNlIGFuZCBbXSBjaGFyYWN0ZXJzXG4gICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvXFxbfFxcXXxcXHMvZywgJycpLnNwbGl0KCcsJyk7XG4gICAgfVxuICAgIHZhciB2YWx1ZXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIC8vIGVuc3VyZSBlYWNoIHZhbHVlIGlzIGFuIGFjdHVhbCBudW1iZXIgaW4gdGhlIHJldHVybmVkIGFycmF5XG4gICAgICAgIHZhbHVlcyA9IGlucHV0XG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChudW0pIHsgcmV0dXJuIHBhcnNlSW50KG51bSwgMTApOyB9KVxuICAgICAgICAgICAgLmZpbHRlcihpc0Zpbml0ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YWx1ZXMgPSBbaW5wdXRdO1xuICAgIH1cbiAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJJbnZhbGlkIFxcXCJcIiArIHR5cGUgKyBcIlZhbHVlc1xcXCIuIE11c3QgYmUgYW4gYXJyYXkgb2YgbnVtYmVycywgb3IgYSBjb21tYSBzZXBhcmF0ZWQgc3RyaW5nIG9mIG51bWJlcnMuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xufTtcbnZhciB0d29EaWdpdCA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gKCcwJyArICh2YWwgIT09IHVuZGVmaW5lZCA/IE1hdGguYWJzKHZhbCkgOiAnMCcpKS5zbGljZSgtMik7XG59O1xudmFyIHRocmVlRGlnaXQgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuICgnMDAnICsgKHZhbCAhPT0gdW5kZWZpbmVkID8gTWF0aC5hYnModmFsKSA6ICcwJykpLnNsaWNlKC0zKTtcbn07XG52YXIgZm91ckRpZ2l0ID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiAoJzAwMCcgKyAodmFsICE9PSB1bmRlZmluZWQgPyBNYXRoLmFicyh2YWwpIDogJzAnKSkuc2xpY2UoLTQpO1xufTtcbnZhciBGT1JNQVRfWVlZWSA9ICdZWVlZJztcbnZhciBGT1JNQVRfWVkgPSAnWVknO1xudmFyIEZPUk1BVF9NTU1NID0gJ01NTU0nO1xudmFyIEZPUk1BVF9NTU0gPSAnTU1NJztcbnZhciBGT1JNQVRfTU0gPSAnTU0nO1xudmFyIEZPUk1BVF9NID0gJ00nO1xudmFyIEZPUk1BVF9EREREID0gJ0REREQnO1xudmFyIEZPUk1BVF9EREQgPSAnREREJztcbnZhciBGT1JNQVRfREQgPSAnREQnO1xudmFyIEZPUk1BVF9EID0gJ0QnO1xudmFyIEZPUk1BVF9ISCA9ICdISCc7XG52YXIgRk9STUFUX0ggPSAnSCc7XG52YXIgRk9STUFUX2hoID0gJ2hoJztcbnZhciBGT1JNQVRfaCA9ICdoJztcbnZhciBGT1JNQVRfbW0gPSAnbW0nO1xudmFyIEZPUk1BVF9tID0gJ20nO1xudmFyIEZPUk1BVF9zcyA9ICdzcyc7XG52YXIgRk9STUFUX3MgPSAncyc7XG52YXIgRk9STUFUX0EgPSAnQSc7XG52YXIgRk9STUFUX2EgPSAnYSc7XG52YXIgRk9STUFUX0tFWVMgPSBbXG4gICAgeyBmOiBGT1JNQVRfWVlZWSwgazogJ3llYXInIH0sXG4gICAgeyBmOiBGT1JNQVRfTU1NTSwgazogJ21vbnRoJyB9LFxuICAgIHsgZjogRk9STUFUX0REREQsIGs6ICdkYXknIH0sXG4gICAgeyBmOiBGT1JNQVRfTU1NLCBrOiAnbW9udGgnIH0sXG4gICAgeyBmOiBGT1JNQVRfRERELCBrOiAnZGF5JyB9LFxuICAgIHsgZjogRk9STUFUX1lZLCBrOiAneWVhcicgfSxcbiAgICB7IGY6IEZPUk1BVF9NTSwgazogJ21vbnRoJyB9LFxuICAgIHsgZjogRk9STUFUX0RELCBrOiAnZGF5JyB9LFxuICAgIHsgZjogRk9STUFUX0hILCBrOiAnaG91cicgfSxcbiAgICB7IGY6IEZPUk1BVF9oaCwgazogJ2hvdXInIH0sXG4gICAgeyBmOiBGT1JNQVRfbW0sIGs6ICdtaW51dGUnIH0sXG4gICAgeyBmOiBGT1JNQVRfc3MsIGs6ICdzZWNvbmQnIH0sXG4gICAgeyBmOiBGT1JNQVRfTSwgazogJ21vbnRoJyB9LFxuICAgIHsgZjogRk9STUFUX0QsIGs6ICdkYXknIH0sXG4gICAgeyBmOiBGT1JNQVRfSCwgazogJ2hvdXInIH0sXG4gICAgeyBmOiBGT1JNQVRfaCwgazogJ2hvdXInIH0sXG4gICAgeyBmOiBGT1JNQVRfbSwgazogJ21pbnV0ZScgfSxcbiAgICB7IGY6IEZPUk1BVF9zLCBrOiAnc2Vjb25kJyB9LFxuICAgIHsgZjogRk9STUFUX0EsIGs6ICdhbXBtJyB9LFxuICAgIHsgZjogRk9STUFUX2EsIGs6ICdhbXBtJyB9LFxuXTtcbnZhciBEQVlfTkFNRVMgPSBbXG4gICAgJ1N1bmRheScsXG4gICAgJ01vbmRheScsXG4gICAgJ1R1ZXNkYXknLFxuICAgICdXZWRuZXNkYXknLFxuICAgICdUaHVyc2RheScsXG4gICAgJ0ZyaWRheScsXG4gICAgJ1NhdHVyZGF5Jyxcbl07XG52YXIgREFZX1NIT1JUX05BTUVTID0gW1xuICAgICdTdW4nLFxuICAgICdNb24nLFxuICAgICdUdWUnLFxuICAgICdXZWQnLFxuICAgICdUaHUnLFxuICAgICdGcmknLFxuICAgICdTYXQnLFxuXTtcbnZhciBNT05USF9OQU1FUyA9IFtcbiAgICAnSmFudWFyeScsXG4gICAgJ0ZlYnJ1YXJ5JyxcbiAgICAnTWFyY2gnLFxuICAgICdBcHJpbCcsXG4gICAgJ01heScsXG4gICAgJ0p1bmUnLFxuICAgICdKdWx5JyxcbiAgICAnQXVndXN0JyxcbiAgICAnU2VwdGVtYmVyJyxcbiAgICAnT2N0b2JlcicsXG4gICAgJ05vdmVtYmVyJyxcbiAgICAnRGVjZW1iZXInLFxuXTtcbnZhciBNT05USF9TSE9SVF9OQU1FUyA9IFtcbiAgICAnSmFuJyxcbiAgICAnRmViJyxcbiAgICAnTWFyJyxcbiAgICAnQXByJyxcbiAgICAnTWF5JyxcbiAgICAnSnVuJyxcbiAgICAnSnVsJyxcbiAgICAnQXVnJyxcbiAgICAnU2VwJyxcbiAgICAnT2N0JyxcbiAgICAnTm92JyxcbiAgICAnRGVjJyxcbl07XG52YXIgVkFMSURfQU1QTV9QUkVGSVggPSBbXG4gICAgRk9STUFUX2hoLCBGT1JNQVRfaCwgRk9STUFUX21tLCBGT1JNQVRfbSwgRk9STUFUX3NzLCBGT1JNQVRfc1xuXTtcbnZhciBEYXRldGltZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18xKGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5pbnB1dElkID0gXCJpb24tZHQtXCIgKyBkYXRldGltZUlkcysrO1xuICAgICAgICB0aGlzLmxvY2FsZSA9IHt9O1xuICAgICAgICB0aGlzLmRhdGV0aW1lTWluID0ge307XG4gICAgICAgIHRoaXMuZGF0ZXRpbWVNYXggPSB7fTtcbiAgICAgICAgdGhpcy5kYXRldGltZVZhbHVlID0ge307XG4gICAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG5hbWUgb2YgdGhlIGNvbnRyb2wsIHdoaWNoIGlzIHN1Ym1pdHRlZCB3aXRoIHRoZSBmb3JtIGRhdGEuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmlucHV0SWQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBkYXRldGltZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGRhdGV0aW1lIGFwcGVhcnMgbm9ybWFsIGJ1dCBpcyBub3QgaW50ZXJhY3RpdmUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlYWRvbmx5ID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGlzcGxheSBmb3JtYXQgb2YgdGhlIGRhdGUgYW5kIHRpbWUgYXMgdGV4dCB0aGF0IHNob3dzXG4gICAgICAgICAqIHdpdGhpbiB0aGUgaXRlbS4gV2hlbiB0aGUgYHBpY2tlckZvcm1hdGAgaW5wdXQgaXMgbm90IHVzZWQsIHRoZW4gdGhlXG4gICAgICAgICAqIGBkaXNwbGF5Rm9ybWF0YCBpcyB1c2VkIGZvciBib3RoIGRpc3BsYXkgdGhlIGZvcm1hdHRlZCB0ZXh0LCBhbmQgZGV0ZXJtaW5pbmdcbiAgICAgICAgICogdGhlIGRhdGV0aW1lIHBpY2tlcidzIGNvbHVtbnMuIFNlZSB0aGUgYHBpY2tlckZvcm1hdGAgaW5wdXQgZGVzY3JpcHRpb24gZm9yXG4gICAgICAgICAqIG1vcmUgaW5mby4gRGVmYXVsdHMgdG8gYE1NTSBELCBZWVlZYC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGxheUZvcm1hdCA9ICdNTU0gRCwgWVlZWSc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGV4dCB0byBkaXNwbGF5IG9uIHRoZSBwaWNrZXIncyBjYW5jZWwgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jYW5jZWxUZXh0ID0gJ0NhbmNlbCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGV4dCB0byBkaXNwbGF5IG9uIHRoZSBwaWNrZXIncyBcIkRvbmVcIiBidXR0b24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRvbmVUZXh0ID0gJ0RvbmUnO1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRGb2N1cygpO1xuICAgICAgICAgICAgX3RoaXMub3BlbigpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5pb25Gb2N1cy5lbWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25CbHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaW9uQmx1ci5lbWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW9uQ2FuY2VsID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DYW5jZWxcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DaGFuZ2VcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uRm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkZvY3VzXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJsdXJcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblN0eWxlXCIsIDcpO1xuICAgIH1cbiAgICBjbGFzc18xLnByb3RvdHlwZS5kaXNhYmxlZENoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGRhdGV0aW1lIHZhbHVlIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXNcbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS52YWx1ZUNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0ZXRpbWVWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbXBvbmVudFdpbGxMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBmaXJzdCBzZWUgaWYgbG9jYWxlIG5hbWVzIHdlcmUgcHJvdmlkZWQgaW4gdGhlIGlucHV0c1xuICAgICAgICAvLyB0aGVuIGNoZWNrIHRvIHNlZSBpZiB0aGV5J3JlIGluIHRoZSBjb25maWdcbiAgICAgICAgLy8gaWYgbmVpdGhlciB3ZXJlIHByb3ZpZGVkIHRoZW4gaXQgd2lsbCB1c2UgZGVmYXVsdCBFbmdsaXNoIG5hbWVzXG4gICAgICAgIHRoaXMubG9jYWxlID0ge1xuICAgICAgICAgICAgLy8gdGhpcy5sb2NhbGVbdHlwZV0gPSBjb252ZXJ0VG9BcnJheU9mU3RyaW5ncygodGhpc1t0eXBlXSA/IHRoaXNbdHlwZV0gOiB0aGlzLmNvbmZpZy5nZXQodHlwZSksIHR5cGUpO1xuICAgICAgICAgICAgbW9udGhOYW1lczogY29udmVydFRvQXJyYXlPZlN0cmluZ3ModGhpcy5tb250aE5hbWVzLCAnbW9udGhOYW1lcycpLFxuICAgICAgICAgICAgbW9udGhTaG9ydE5hbWVzOiBjb252ZXJ0VG9BcnJheU9mU3RyaW5ncyh0aGlzLm1vbnRoU2hvcnROYW1lcywgJ21vbnRoU2hvcnROYW1lcycpLFxuICAgICAgICAgICAgZGF5TmFtZXM6IGNvbnZlcnRUb0FycmF5T2ZTdHJpbmdzKHRoaXMuZGF5TmFtZXMsICdkYXlOYW1lcycpLFxuICAgICAgICAgICAgZGF5U2hvcnROYW1lczogY29udmVydFRvQXJyYXlPZlN0cmluZ3ModGhpcy5kYXlTaG9ydE5hbWVzLCAnZGF5U2hvcnROYW1lcycpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlRGF0ZXRpbWVWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE9wZW5zIHRoZSBkYXRldGltZSBvdmVybGF5LlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwaWNrZXJPcHRpb25zLCBwaWNrZXI7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pc0V4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGlja2VyT3B0aW9ucyA9IHRoaXMuZ2VuZXJhdGVQaWNrZXJPcHRpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBwaWNrZXJDb250cm9sbGVyLmNyZWF0ZShwaWNrZXJPcHRpb25zKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY2tlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaWNrZXIub25EaWREaXNtaXNzKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaXNFeHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldEZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdpb25QaWNrZXJDb2xDaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSwgY29sU2VsZWN0ZWRJbmRleCwgY29sT3B0aW9ucywgY2hhbmdlRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBldmVudC5kZXRhaWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbFNlbGVjdGVkSW5kZXggPSBkYXRhLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbE9wdGlvbnMgPSBkYXRhLm9wdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZURhdGEgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlRGF0YVtkYXRhLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvbE9wdGlvbnNbY29sU2VsZWN0ZWRJbmRleF0udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRldGltZVZhbHVlKGNoYW5nZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWNrZXIuY29sdW1ucyA9IHRoaXMuZ2VuZXJhdGVDb2x1bW5zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHBpY2tlci5wcmVzZW50KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZW1pdFN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlvblN0eWxlLmVtaXQoe1xuICAgICAgICAgICAgJ2ludGVyYWN0aXZlJzogdHJ1ZSxcbiAgICAgICAgICAgICdkYXRldGltZSc6IHRydWUsXG4gICAgICAgICAgICAnaGFzLXBsYWNlaG9sZGVyJzogdGhpcy5wbGFjZWhvbGRlciAhPSBudWxsLFxuICAgICAgICAgICAgJ2hhcy12YWx1ZSc6IHRoaXMuaGFzVmFsdWUoKSxcbiAgICAgICAgICAgICdpbnRlcmFjdGl2ZS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUudXBkYXRlRGF0ZXRpbWVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB1cGRhdGVEYXRlKHRoaXMuZGF0ZXRpbWVWYWx1ZSwgdmFsdWUpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZ2VuZXJhdGVQaWNrZXJPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHZhciBwaWNrZXJPcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHsgbW9kZTogbW9kZSB9LCB0aGlzLnBpY2tlck9wdGlvbnMpLCB7IGNvbHVtbnM6IHRoaXMuZ2VuZXJhdGVDb2x1bW5zKCkgfSk7XG4gICAgICAgIC8vIElmIHRoZSB1c2VyIGhhcyBub3QgcGFzc2VkIGluIHBpY2tlciBidXR0b25zLFxuICAgICAgICAvLyBhZGQgYSBjYW5jZWwgYW5kIG9rIGJ1dHRvbiB0byB0aGUgcGlja2VyXG4gICAgICAgIHZhciBidXR0b25zID0gcGlja2VyT3B0aW9ucy5idXR0b25zO1xuICAgICAgICBpZiAoIWJ1dHRvbnMgfHwgYnV0dG9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHBpY2tlck9wdGlvbnMuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuY2FuY2VsVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogJ2NhbmNlbCcsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZURhdGV0aW1lVmFsdWUoX3RoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW9uQ2FuY2VsLmVtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmRvbmVUZXh0LFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlRGF0ZXRpbWVWYWx1ZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogUHJldmVudCBjb252ZXJ0RGF0YVRvSVNPIGZyb20gZG9pbmcgYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBraW5kIG9mIHRyYW5zZm9ybWF0aW9uIGJhc2VkIG9uIHRpbWV6b25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBUaGlzIGNhbmNlbHMgb3V0IGFueSBjaGFuZ2UgaXQgYXR0ZW1wdHMgdG8gbWFrZVxuICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIEltcG9ydGFudDogVGFrZSB0aGUgdGltZXpvbmUgb2Zmc2V0IGJhc2VkIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiB0aGUgZGF0ZSB0aGF0IGlzIGN1cnJlbnRseSBzZWxlY3RlZCwgb3RoZXJ3aXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiB0aGVyZSBjYW4gYmUgMSBociBkaWZmZXJlbmNlIHdoZW4gZGVhbGluZyB3LyBEU1RcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShjb252ZXJ0RGF0YVRvSVNPKF90aGlzLmRhdGV0aW1lVmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRhdGV0aW1lVmFsdWUudHpPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnZhbHVlID0gY29udmVydERhdGFUb0lTTyhfdGhpcy5kYXRldGltZVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBpY2tlck9wdGlvbnM7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5nZW5lcmF0ZUNvbHVtbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIGlmIGEgcGlja2VyIGZvcm1hdCB3YXNuJ3QgcHJvdmlkZWQsIHRoZW4gZmFsbGJhY2tcbiAgICAgICAgLy8gdG8gdXNlIHRoZSBkaXNwbGF5IGZvcm1hdFxuICAgICAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLnBpY2tlckZvcm1hdCB8fCB0aGlzLmRpc3BsYXlGb3JtYXQgfHwgREVGQVVMVF9GT1JNQVQ7XG4gICAgICAgIGlmICh0ZW1wbGF0ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYWtlIHN1cmUgd2UndmUgZ290IHVwIHRvIGRhdGUgc2l6aW5nIGluZm9ybWF0aW9uXG4gICAgICAgIHRoaXMuY2FsY01pbk1heCgpO1xuICAgICAgICAvLyBkb2VzIG5vdCBzdXBwb3J0IHNlbGVjdGluZyBieSBkYXkgbmFtZVxuICAgICAgICAvLyBhdXRvbWF0aWNhbGx5IHJlbW92ZSBhbnkgZGF5IG5hbWUgZm9ybWF0c1xuICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoJ0REREQnLCAne359JykucmVwbGFjZSgnREREJywgJ3t+fScpO1xuICAgICAgICBpZiAodGVtcGxhdGUuaW5kZXhPZignRCcpID09PSAtMSkge1xuICAgICAgICAgICAgLy8gdGhlcmUgaXMgbm90IGEgZGF5IGluIHRoZSB0ZW1wbGF0ZVxuICAgICAgICAgICAgLy8gcmVwbGFjZSB0aGUgZGF5IG5hbWUgd2l0aCBhIG51bWVyaWMgb25lIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKCd7fn0nLCAnRCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1ha2Ugc3VyZSBubyBkYXkgbmFtZSByZXBsYWNlciBpcyBsZWZ0IGluIHRoZSBzdHJpbmdcbiAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKC97fn0vZywgJycpO1xuICAgICAgICAvLyBwYXJzZSBhcGFydCB0aGUgZ2l2ZW4gdGVtcGxhdGUgaW50byBhbiBhcnJheSBvZiBcImZvcm1hdHNcIlxuICAgICAgICB2YXIgY29sdW1ucyA9IHBhcnNlVGVtcGxhdGUodGVtcGxhdGUpLm1hcChmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggZWFjaCBmb3JtYXQgaW4gdGhlIHRlbXBsYXRlXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgcGlja2VyIGNvbHVtbiB0byBidWlsZCB1cCB3aXRoIGRhdGFcbiAgICAgICAgICAgIHZhciBrZXkgPSBjb252ZXJ0Rm9ybWF0VG9LZXkoZm9ybWF0KTtcbiAgICAgICAgICAgIHZhciB2YWx1ZXM7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGV5IGhhdmUgZXhhY3QgdmFsdWVzIHRvIHVzZSBmb3IgdGhpcyBkYXRlIHBhcnRcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSB1c2UgdGhlIGRlZmF1bHQgZGF0ZSBwYXJ0IHZhbHVlc1xuICAgICAgICAgICAgdmFyIHNlbGYgPSBfdGhpcztcbiAgICAgICAgICAgIHZhbHVlcyA9IHNlbGZba2V5ICsgJ1ZhbHVlcyddXG4gICAgICAgICAgICAgICAgPyBjb252ZXJ0VG9BcnJheU9mTnVtYmVycyhzZWxmW2tleSArICdWYWx1ZXMnXSwga2V5KVxuICAgICAgICAgICAgICAgIDogZGF0ZVZhbHVlUmFuZ2UoZm9ybWF0LCBfdGhpcy5kYXRldGltZU1pbiwgX3RoaXMuZGF0ZXRpbWVNYXgpO1xuICAgICAgICAgICAgdmFyIGNvbE9wdGlvbnMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZW5kZXJUZXh0Rm9ybWF0KGZvcm1hdCwgdmFsLCB1bmRlZmluZWQsIF90aGlzLmxvY2FsZSksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY29vbCwgd2UndmUgbG9hZGVkIHVwIHRoZSBjb2x1bW5zIHdpdGggb3B0aW9uc1xuICAgICAgICAgICAgLy8gcHJlc2VsZWN0IHRoZSBvcHRpb24gZm9yIHRoaXMgY29sdW1uXG4gICAgICAgICAgICB2YXIgb3B0VmFsdWUgPSBnZXREYXRlVmFsdWUoX3RoaXMuZGF0ZXRpbWVWYWx1ZSwgZm9ybWF0KTtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gY29sT3B0aW9ucy5maW5kSW5kZXgoZnVuY3Rpb24gKG9wdCkgeyByZXR1cm4gb3B0LnZhbHVlID09PSBvcHRWYWx1ZTsgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4OiBzZWxlY3RlZEluZGV4ID49IDAgPyBzZWxlY3RlZEluZGV4IDogMCxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBjb2xPcHRpb25zXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gTm9ybWFsaXplIG1pbi9tYXhcbiAgICAgICAgdmFyIG1pbiA9IHRoaXMuZGF0ZXRpbWVNaW47XG4gICAgICAgIHZhciBtYXggPSB0aGlzLmRhdGV0aW1lTWF4O1xuICAgICAgICBbJ21vbnRoJywgJ2RheScsICdob3VyJywgJ21pbnV0ZSddXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiAhY29sdW1ucy5maW5kKGZ1bmN0aW9uIChjb2x1bW4pIHsgcmV0dXJuIGNvbHVtbi5uYW1lID09PSBuYW1lOyB9KTsgfSlcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBtaW5bbmFtZV0gPSAwO1xuICAgICAgICAgICAgbWF4W25hbWVdID0gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlQ29sdW1ucyhkaXZ5Q29sdW1ucyhjb2x1bW5zKSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS52YWxpZGF0ZUNvbHVtbnMgPSBmdW5jdGlvbiAoY29sdW1ucykge1xuICAgICAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgbWluQ29tcGFyZVZhbCA9IGRhdGVEYXRhU29ydFZhbHVlKHRoaXMuZGF0ZXRpbWVNaW4pO1xuICAgICAgICB2YXIgbWF4Q29tcGFyZVZhbCA9IGRhdGVEYXRhU29ydFZhbHVlKHRoaXMuZGF0ZXRpbWVNYXgpO1xuICAgICAgICB2YXIgeWVhckNvbCA9IGNvbHVtbnMuZmluZChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5uYW1lID09PSAneWVhcic7IH0pO1xuICAgICAgICB2YXIgc2VsZWN0ZWRZZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgaWYgKHllYXJDb2wpIHtcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgdG8gdGhlIGZpcnN0IHZhbHVlIGlmIHRoZSBjdXJyZW50IHllYXIgZG9lc24ndCBleGlzdCBpbiB0aGUgb3B0aW9uc1xuICAgICAgICAgICAgaWYgKCF5ZWFyQ29sLm9wdGlvbnMuZmluZChmdW5jdGlvbiAoY29sKSB7IHJldHVybiBjb2wudmFsdWUgPT09IHRvZGF5LmdldEZ1bGxZZWFyKCk7IH0pKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRZZWFyID0geWVhckNvbC5vcHRpb25zWzBdLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSB5ZWFyQ29sLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHllYXJPcHQgPSB5ZWFyQ29sLm9wdGlvbnNbc2VsZWN0ZWRJbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKHllYXJPcHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhleSBoYXZlIGEgc2VsZWN0ZWQgeWVhciB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFllYXIgPSB5ZWFyT3B0LnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZWN0ZWRNb250aCA9IHRoaXMudmFsaWRhdGVDb2x1bW4oY29sdW1ucywgJ21vbnRoJywgMSwgbWluQ29tcGFyZVZhbCwgbWF4Q29tcGFyZVZhbCwgW3NlbGVjdGVkWWVhciwgMCwgMCwgMCwgMF0sIFtzZWxlY3RlZFllYXIsIDEyLCAzMSwgMjMsIDU5XSk7XG4gICAgICAgIHZhciBudW1EYXlzSW5Nb250aCA9IGRheXNJbk1vbnRoKHNlbGVjdGVkTW9udGgsIHNlbGVjdGVkWWVhcik7XG4gICAgICAgIHZhciBzZWxlY3RlZERheSA9IHRoaXMudmFsaWRhdGVDb2x1bW4oY29sdW1ucywgJ2RheScsIDIsIG1pbkNvbXBhcmVWYWwsIG1heENvbXBhcmVWYWwsIFtzZWxlY3RlZFllYXIsIHNlbGVjdGVkTW9udGgsIDAsIDAsIDBdLCBbc2VsZWN0ZWRZZWFyLCBzZWxlY3RlZE1vbnRoLCBudW1EYXlzSW5Nb250aCwgMjMsIDU5XSk7XG4gICAgICAgIHZhciBzZWxlY3RlZEhvdXIgPSB0aGlzLnZhbGlkYXRlQ29sdW1uKGNvbHVtbnMsICdob3VyJywgMywgbWluQ29tcGFyZVZhbCwgbWF4Q29tcGFyZVZhbCwgW3NlbGVjdGVkWWVhciwgc2VsZWN0ZWRNb250aCwgc2VsZWN0ZWREYXksIDAsIDBdLCBbc2VsZWN0ZWRZZWFyLCBzZWxlY3RlZE1vbnRoLCBzZWxlY3RlZERheSwgMjMsIDU5XSk7XG4gICAgICAgIHRoaXMudmFsaWRhdGVDb2x1bW4oY29sdW1ucywgJ21pbnV0ZScsIDQsIG1pbkNvbXBhcmVWYWwsIG1heENvbXBhcmVWYWwsIFtzZWxlY3RlZFllYXIsIHNlbGVjdGVkTW9udGgsIHNlbGVjdGVkRGF5LCBzZWxlY3RlZEhvdXIsIDBdLCBbc2VsZWN0ZWRZZWFyLCBzZWxlY3RlZE1vbnRoLCBzZWxlY3RlZERheSwgc2VsZWN0ZWRIb3VyLCA1OV0pO1xuICAgICAgICByZXR1cm4gY29sdW1ucztcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNhbGNNaW5NYXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0b2RheXNZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBpZiAodGhpcy55ZWFyVmFsdWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciB5ZWFycyA9IGNvbnZlcnRUb0FycmF5T2ZOdW1iZXJzKHRoaXMueWVhclZhbHVlcywgJ3llYXInKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1pbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5taW4gPSBNYXRoLm1pbi5hcHBseShNYXRoLCB5ZWFycykudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm1heCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXggPSBNYXRoLm1heC5hcHBseShNYXRoLCB5ZWFycykudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1pbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5taW4gPSAodG9kYXlzWWVhciAtIDEwMCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm1heCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXggPSB0b2RheXNZZWFyLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1pbiA9IHRoaXMuZGF0ZXRpbWVNaW4gPSBwYXJzZURhdGUodGhpcy5taW4pO1xuICAgICAgICB2YXIgbWF4ID0gdGhpcy5kYXRldGltZU1heCA9IHBhcnNlRGF0ZSh0aGlzLm1heCk7XG4gICAgICAgIG1pbi55ZWFyID0gbWluLnllYXIgfHwgdG9kYXlzWWVhcjtcbiAgICAgICAgbWF4LnllYXIgPSBtYXgueWVhciB8fCB0b2RheXNZZWFyO1xuICAgICAgICBtaW4ubW9udGggPSBtaW4ubW9udGggfHwgMTtcbiAgICAgICAgbWF4Lm1vbnRoID0gbWF4Lm1vbnRoIHx8IDEyO1xuICAgICAgICBtaW4uZGF5ID0gbWluLmRheSB8fCAxO1xuICAgICAgICBtYXguZGF5ID0gbWF4LmRheSB8fCAzMTtcbiAgICAgICAgbWluLmhvdXIgPSBtaW4uaG91ciB8fCAwO1xuICAgICAgICBtYXguaG91ciA9IG1heC5ob3VyIHx8IDIzO1xuICAgICAgICBtaW4ubWludXRlID0gbWluLm1pbnV0ZSB8fCAwO1xuICAgICAgICBtYXgubWludXRlID0gbWF4Lm1pbnV0ZSB8fCA1OTtcbiAgICAgICAgbWluLnNlY29uZCA9IG1pbi5zZWNvbmQgfHwgMDtcbiAgICAgICAgbWF4LnNlY29uZCA9IG1heC5zZWNvbmQgfHwgNTk7XG4gICAgICAgIC8vIEVuc3VyZSBtaW4vbWF4IGNvbnN0cmFpbnRzXG4gICAgICAgIGlmIChtaW4ueWVhciA+IG1heC55ZWFyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdtaW4ueWVhciA+IG1heC55ZWFyJyk7XG4gICAgICAgICAgICBtaW4ueWVhciA9IG1heC55ZWFyIC0gMTAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtaW4ueWVhciA9PT0gbWF4LnllYXIpIHtcbiAgICAgICAgICAgIGlmIChtaW4ubW9udGggPiBtYXgubW9udGgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdtaW4ubW9udGggPiBtYXgubW9udGgnKTtcbiAgICAgICAgICAgICAgICBtaW4ubW9udGggPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobWluLm1vbnRoID09PSBtYXgubW9udGggJiYgbWluLmRheSA+IG1heC5kYXkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdtaW4uZGF5ID4gbWF4LmRheScpO1xuICAgICAgICAgICAgICAgIG1pbi5kYXkgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS52YWxpZGF0ZUNvbHVtbiA9IGZ1bmN0aW9uIChjb2x1bW5zLCBuYW1lLCBpbmRleCwgbWluLCBtYXgsIGxvd2VyQm91bmRzLCB1cHBlckJvdW5kcykge1xuICAgICAgICB2YXIgY29sdW1uID0gY29sdW1ucy5maW5kKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLm5hbWUgPT09IG5hbWU7IH0pO1xuICAgICAgICBpZiAoIWNvbHVtbikge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxiID0gbG93ZXJCb3VuZHMuc2xpY2UoKTtcbiAgICAgICAgdmFyIHViID0gdXBwZXJCb3VuZHMuc2xpY2UoKTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBjb2x1bW4ub3B0aW9ucztcbiAgICAgICAgdmFyIGluZGV4TWluID0gb3B0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgICB2YXIgaW5kZXhNYXggPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvcHRzID0gb3B0aW9uc1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IG9wdHMudmFsdWU7XG4gICAgICAgICAgICBsYltpbmRleF0gPSBvcHRzLnZhbHVlO1xuICAgICAgICAgICAgdWJbaW5kZXhdID0gb3B0cy52YWx1ZTtcbiAgICAgICAgICAgIHZhciBkaXNhYmxlZCA9IG9wdHMuZGlzYWJsZWQgPSAodmFsdWUgPCBsb3dlckJvdW5kc1tpbmRleF0gfHxcbiAgICAgICAgICAgICAgICB2YWx1ZSA+IHVwcGVyQm91bmRzW2luZGV4XSB8fFxuICAgICAgICAgICAgICAgIGRhdGVTb3J0VmFsdWUodWJbMF0sIHViWzFdLCB1YlsyXSwgdWJbM10sIHViWzRdKSA8IG1pbiB8fFxuICAgICAgICAgICAgICAgIGRhdGVTb3J0VmFsdWUobGJbMF0sIGxiWzFdLCBsYlsyXSwgbGJbM10sIGxiWzRdKSA+IG1heCk7XG4gICAgICAgICAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhNaW4gPSBNYXRoLm1pbihpbmRleE1pbiwgaSk7XG4gICAgICAgICAgICAgICAgaW5kZXhNYXggPSBNYXRoLm1heChpbmRleE1heCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSBjb2x1bW4uc2VsZWN0ZWRJbmRleCA9IGNsYW1wKGluZGV4TWluLCBjb2x1bW4uc2VsZWN0ZWRJbmRleCwgaW5kZXhNYXgpO1xuICAgICAgICB2YXIgb3B0ID0gY29sdW1uLm9wdGlvbnNbc2VsZWN0ZWRJbmRleF07XG4gICAgICAgIGlmIChvcHQpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMS5wcm90b3R5cGUsIFwidGV4dFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSB0ZXh0IG9mIHRoZSBmb3JtYXR0ZWQgZGF0YVxuICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy5kaXNwbGF5Rm9ybWF0IHx8IHRoaXMucGlja2VyRm9ybWF0IHx8IERFRkFVTFRfRk9STUFUO1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZW5kZXJEYXRldGltZSh0ZW1wbGF0ZSwgdGhpcy5kYXRldGltZVZhbHVlLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmhhc1ZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0ICE9PSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5zZXRGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uRWwpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uRWwuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYiA9IHRoaXMsIGlucHV0SWQgPSBfYi5pbnB1dElkLCB0ZXh0ID0gX2IudGV4dCwgZGlzYWJsZWQgPSBfYi5kaXNhYmxlZCwgcmVhZG9ubHkgPSBfYi5yZWFkb25seSwgaXNFeHBhbmRlZCA9IF9iLmlzRXhwYW5kZWQsIGVsID0gX2IuZWwsIHBsYWNlaG9sZGVyID0gX2IucGxhY2Vob2xkZXI7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgdmFyIGxhYmVsSWQgPSBpbnB1dElkICsgJy1sYmwnO1xuICAgICAgICB2YXIgbGFiZWwgPSBmaW5kSXRlbUxhYmVsKGVsKTtcbiAgICAgICAgdmFyIGFkZFBsYWNlaG9sZGVyQ2xhc3MgPSAodGV4dCA9PT0gdW5kZWZpbmVkICYmIHBsYWNlaG9sZGVyICE9IG51bGwpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAvLyBJZiBzZWxlY3RlZCB0ZXh0IGhhcyBiZWVuIHBhc3NlZCBpbiwgdXNlIHRoYXQgZmlyc3RcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHVzZSB0aGUgcGxhY2Vob2xkZXJcbiAgICAgICAgdmFyIGRhdGV0aW1lVGV4dCA9IHRleHQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyAocGxhY2Vob2xkZXIgIT0gbnVsbCA/IHBsYWNlaG9sZGVyIDogJycpXG4gICAgICAgICAgICA6IHRleHQ7XG4gICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgbGFiZWwuaWQgPSBsYWJlbElkO1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlckhpZGRlbklucHV0KHRydWUsIGVsLCB0aGlzLm5hbWUsIHRoaXMudmFsdWUsIHRoaXMuZGlzYWJsZWQpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssIHJvbGU6IFwiY29tYm9ib3hcIiwgXCJhcmlhLWRpc2FibGVkXCI6IGRpc2FibGVkID8gJ3RydWUnIDogbnVsbCwgXCJhcmlhLWV4cGFuZGVkXCI6IFwiXCIgKyBpc0V4cGFuZGVkLCBcImFyaWEtaGFzcG9wdXBcIjogXCJ0cnVlXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGxhYmVsSWQsIGNsYXNzOiAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVttb2RlXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2FbJ2RhdGV0aW1lLWRpc2FibGVkJ10gPSBkaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBfYVsnZGF0ZXRpbWUtcmVhZG9ubHknXSA9IHJlYWRvbmx5LFxuICAgICAgICAgICAgICAgIF9hWydkYXRldGltZS1wbGFjZWhvbGRlciddID0gYWRkUGxhY2Vob2xkZXJDbGFzcyxcbiAgICAgICAgICAgICAgICBfYVsnaW4taXRlbSddID0gaG9zdENvbnRleHQoJ2lvbi1pdGVtJywgZWwpLFxuICAgICAgICAgICAgICAgIF9hKSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiZGF0ZXRpbWUtdGV4dFwiIH0sIGRhdGV0aW1lVGV4dCksIGgoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsIG9uQmx1cjogdGhpcy5vbkJsdXIsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCByZWY6IGZ1bmN0aW9uIChidG5FbCkgeyByZXR1cm4gX3RoaXMuYnV0dG9uRWwgPSBidG5FbDsgfSB9KSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJ3YXRjaGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcImRpc2FibGVkXCI6IFtcImRpc2FibGVkQ2hhbmdlZFwiXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFtcInZhbHVlQ2hhbmdlZFwiXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEsIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiOmhvc3R7cGFkZGluZy1sZWZ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctcmlnaHQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7bWluLXdpZHRoOjE2cHg7bWluLWhlaWdodDoxLjJlbTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCk7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3otaW5kZXg6Mn1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3R7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCl9fTpob3N0KC5pbi1pdGVtKXtwb3NpdGlvbjpzdGF0aWN9Omhvc3QoLmRhdGV0aW1lLXBsYWNlaG9sZGVyKXtjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcil9Omhvc3QoLmRhdGV0aW1lLWRpc2FibGVkKXtvcGFjaXR5Oi4zO3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLmRhdGV0aW1lLXJlYWRvbmx5KXtwb2ludGVyLWV2ZW50czpub25lfWJ1dHRvbntsZWZ0OjA7dG9wOjA7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyOjA7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7b3V0bGluZTpub25lfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBidXR0b24sW2Rpcj1ydGxdIGJ1dHRvbntsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjB9YnV0dG9uOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfS5kYXRldGltZS10ZXh0e2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0Oy1tcy1mbGV4OjE7ZmxleDoxO21pbi1oZWlnaHQ6aW5oZXJpdDtkaXJlY3Rpb246bHRyO292ZXJmbG93OmluaGVyaXR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5kYXRldGltZS10ZXh0LFtkaXI9cnRsXSAuZGF0ZXRpbWUtdGV4dHtkaXJlY3Rpb246cnRsfTpob3N0ey0tcGxhY2Vob2xkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNDAwLCM5OTkpOy0tcGFkZGluZy10b3A6MTBweDstLXBhZGRpbmctZW5kOjhweDstLXBhZGRpbmctYm90dG9tOjEwcHg7LS1wYWRkaW5nLXN0YXJ0OjE2cHh9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbnZhciBkaXZ5Q29sdW1ucyA9IGZ1bmN0aW9uIChjb2x1bW5zKSB7XG4gICAgdmFyIGNvbHVtbnNXaWR0aCA9IFtdO1xuICAgIHZhciBjb2w7XG4gICAgdmFyIHdpZHRoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb2wgPSBjb2x1bW5zW2ldO1xuICAgICAgICBjb2x1bW5zV2lkdGgucHVzaCgwKTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IGNvbC5vcHRpb25zOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IF9hW19pXTtcbiAgICAgICAgICAgIHdpZHRoID0gb3B0aW9uLnRleHQubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHdpZHRoID4gY29sdW1uc1dpZHRoW2ldKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uc1dpZHRoW2ldID0gd2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbHVtbnNXaWR0aC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgd2lkdGggPSBNYXRoLm1heChjb2x1bW5zV2lkdGhbMF0sIGNvbHVtbnNXaWR0aFsxXSk7XG4gICAgICAgIGNvbHVtbnNbMF0uYWxpZ24gPSAncmlnaHQnO1xuICAgICAgICBjb2x1bW5zWzFdLmFsaWduID0gJ2xlZnQnO1xuICAgICAgICBjb2x1bW5zWzBdLm9wdGlvbnNXaWR0aCA9IGNvbHVtbnNbMV0ub3B0aW9uc1dpZHRoID0gd2lkdGggKiAxNyArIFwicHhcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29sdW1uc1dpZHRoLmxlbmd0aCA9PT0gMykge1xuICAgICAgICB3aWR0aCA9IE1hdGgubWF4KGNvbHVtbnNXaWR0aFswXSwgY29sdW1uc1dpZHRoWzJdKTtcbiAgICAgICAgY29sdW1uc1swXS5hbGlnbiA9ICdyaWdodCc7XG4gICAgICAgIGNvbHVtbnNbMV0uY29sdW1uV2lkdGggPSBjb2x1bW5zV2lkdGhbMV0gKiAxNyArIFwicHhcIjtcbiAgICAgICAgY29sdW1uc1swXS5vcHRpb25zV2lkdGggPSBjb2x1bW5zWzJdLm9wdGlvbnNXaWR0aCA9IHdpZHRoICogMTcgKyBcInB4XCI7XG4gICAgICAgIGNvbHVtbnNbMl0uYWxpZ24gPSAnbGVmdCc7XG4gICAgfVxuICAgIHJldHVybiBjb2x1bW5zO1xufTtcbnZhciBERUZBVUxUX0ZPUk1BVCA9ICdNTU0gRCwgWVlZWSc7XG52YXIgZGF0ZXRpbWVJZHMgPSAwO1xuLyoqXG4gKiBpT1MgUGlja2VyIEVudGVyIEFuaW1hdGlvblxuICovXG52YXIgaW9zRW50ZXJBbmltYXRpb24gPSBmdW5jdGlvbiAoYmFzZUVsKSB7XG4gICAgdmFyIGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIGJhY2tkcm9wQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSlcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDAuMjYpO1xuICAgIHdyYXBwZXJBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5waWNrZXItd3JhcHBlcicpKVxuICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgxMDAlKScsICd0cmFuc2xhdGVZKDAlKScpO1xuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbClcbiAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpJylcbiAgICAgICAgLmR1cmF0aW9uKDQwMClcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcbn07XG4vKipcbiAqIGlPUyBQaWNrZXIgTGVhdmUgQW5pbWF0aW9uXG4gKi9cbnZhciBpb3NMZWF2ZUFuaW1hdGlvbiA9IGZ1bmN0aW9uIChiYXNlRWwpIHtcbiAgICB2YXIgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgYmFja2Ryb3BBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4yNiwgMC4wMSk7XG4gICAgd3JhcHBlckFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLnBpY2tlci13cmFwcGVyJykpXG4gICAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVZKDAlKScsICd0cmFuc2xhdGVZKDEwMCUpJyk7XG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxuICAgICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSknKVxuICAgICAgICAuZHVyYXRpb24oNDAwKVxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xufTtcbnZhciBQaWNrZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMihob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMubW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHRoaXMucHJlc2VudGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBrZXlib2FyZCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZGlzbWlzc2VkIHdoZW4gdGhlIG92ZXJsYXkgaXMgcHJlc2VudGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5rZXlib2FyZENsb3NlID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFycmF5IG9mIGJ1dHRvbnMgdG8gYmUgZGlzcGxheWVkIGF0IHRoZSB0b3Agb2YgdGhlIHBpY2tlci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogQXJyYXkgb2YgY29sdW1ucyB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHBpY2tlci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJlZm9yZSBkaXNtaXNzaW5nIHRoZSBwaWNrZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgYSBiYWNrZHJvcCB3aWxsIGJlIGRpc3BsYXllZCBiZWhpbmQgdGhlIHBpY2tlci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvd0JhY2tkcm9wID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHBpY2tlciB3aWxsIGJlIGRpc21pc3NlZCB3aGVuIHRoZSBiYWNrZHJvcCBpcyBjbGlja2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5iYWNrZHJvcERpc21pc3MgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgcGlja2VyIHdpbGwgYW5pbWF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uQmFja2Ryb3BUYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY2FuY2VsQnRuID0gX3RoaXMuYnV0dG9ucy5maW5kKGZ1bmN0aW9uIChiKSB7IHJldHVybiBiLnJvbGUgPT09ICdjYW5jZWwnOyB9KTtcbiAgICAgICAgICAgIGlmIChjYW5jZWxCdG4pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5idXR0b25DbGljayhjYW5jZWxCdG4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGlzbWlzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBwcmVwYXJlT3ZlcmxheSh0aGlzLmVsKTtcbiAgICAgICAgdGhpcy5kaWRQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25QaWNrZXJEaWRQcmVzZW50XCIsIDcpO1xuICAgICAgICB0aGlzLndpbGxQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25QaWNrZXJXaWxsUHJlc2VudFwiLCA3KTtcbiAgICAgICAgdGhpcy53aWxsRGlzbWlzcyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUGlja2VyV2lsbERpc21pc3NcIiwgNyk7XG4gICAgICAgIHRoaXMuZGlkRGlzbWlzcyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUGlja2VyRGlkRGlzbWlzc1wiLCA3KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlc2VudCB0aGUgcGlja2VyIG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gY3JlYXRlZC5cbiAgICAgKi9cbiAgICBjbGFzc18yLnByb3RvdHlwZS5wcmVzZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBwcmVzZW50KHRoaXMsICdwaWNrZXJFbnRlcicsIGlvc0VudGVyQW5pbWF0aW9uLCBpb3NFbnRlckFuaW1hdGlvbiwgdW5kZWZpbmVkKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmR1cmF0aW9uID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHVyYXRpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5kaXNtaXNzKCk7IH0sIHRoaXMuZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpc21pc3MgdGhlIHBpY2tlciBvdmVybGF5IGFmdGVyIGl0IGhhcyBiZWVuIHByZXNlbnRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhIEFueSBkYXRhIHRvIGVtaXQgaW4gdGhlIGRpc21pc3MgZXZlbnRzLlxuICAgICAqIEBwYXJhbSByb2xlIFRoZSByb2xlIG9mIHRoZSBlbGVtZW50IHRoYXQgaXMgZGlzbWlzc2luZyB0aGUgcGlja2VyLlxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWZ1bCBpbiBhIGJ1dHRvbiBoYW5kbGVyIGZvciBkZXRlcm1pbmluZyB3aGljaCBidXR0b24gd2FzXG4gICAgICogY2xpY2tlZCB0byBkaXNtaXNzIHRoZSBwaWNrZXIuXG4gICAgICogU29tZSBleGFtcGxlcyBpbmNsdWRlOiBgYFwiY2FuY2VsXCJgLCBgXCJkZXN0cnVjdGl2ZVwiYCwgXCJzZWxlY3RlZFwiYCwgYW5kIGBcImJhY2tkcm9wXCJgLlxuICAgICAqL1xuICAgIGNsYXNzXzIucHJvdG90eXBlLmRpc21pc3MgPSBmdW5jdGlvbiAoZGF0YSwgcm9sZSkge1xuICAgICAgICBpZiAodGhpcy5kdXJhdGlvblRpbWVvdXQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmR1cmF0aW9uVGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpc21pc3ModGhpcywgZGF0YSwgcm9sZSwgJ3BpY2tlckxlYXZlJywgaW9zTGVhdmVBbmltYXRpb24sIGlvc0xlYXZlQW5pbWF0aW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgcGlja2VyIGRpZCBkaXNtaXNzLlxuICAgICAqL1xuICAgIGNsYXNzXzIucHJvdG90eXBlLm9uRGlkRGlzbWlzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25QaWNrZXJEaWREaXNtaXNzJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHBpY2tlciB3aWxsIGRpc21pc3MuXG4gICAgICovXG4gICAgY2xhc3NfMi5wcm90b3R5cGUub25XaWxsRGlzbWlzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25QaWNrZXJXaWxsRGlzbWlzcycpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjb2x1bW4gdGhhdCBtYXRjaGVzIHRoZSBzcGVjaWZpZWQgbmFtZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjb2x1bW4uXG4gICAgICovXG4gICAgY2xhc3NfMi5wcm90b3R5cGUuZ2V0Q29sdW1uID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmNvbHVtbnMuZmluZChmdW5jdGlvbiAoY29sdW1uKSB7IHJldHVybiBjb2x1bW4ubmFtZSA9PT0gbmFtZTsgfSkpO1xuICAgIH07XG4gICAgY2xhc3NfMi5wcm90b3R5cGUuYnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIC8vICAgcmV0dXJuO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGtlZXAgdGhlIHRpbWUgb2YgdGhlIG1vc3QgcmVjZW50IGJ1dHRvbiBjbGlja1xuICAgICAgICAvLyBhIGhhbmRsZXIgaGFzIGJlZW4gcHJvdmlkZWQsIGV4ZWN1dGUgaXRcbiAgICAgICAgLy8gcGFzcyB0aGUgaGFuZGxlciB0aGUgdmFsdWVzIGZyb20gdGhlIGlucHV0c1xuICAgICAgICB2YXIgc2hvdWxkRGlzbWlzcyA9IHNhZmVDYWxsKGJ1dHRvbi5oYW5kbGVyLCB0aGlzLmdldFNlbGVjdGVkKCkpICE9PSBmYWxzZTtcbiAgICAgICAgaWYgKHNob3VsZERpc21pc3MpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc21pc3MoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICB9O1xuICAgIGNsYXNzXzIucHJvdG90eXBlLmdldFNlbGVjdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZWN0ZWQgPSB7fTtcbiAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZENvbHVtbiA9IGNvbC5zZWxlY3RlZEluZGV4ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IGNvbC5vcHRpb25zW2NvbC5zZWxlY3RlZEluZGV4XVxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgc2VsZWN0ZWRbY29sLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgIHRleHQ6IHNlbGVjdGVkQ29sdW1uID8gc2VsZWN0ZWRDb2x1bW4udGV4dCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0ZWRDb2x1bW4gPyBzZWxlY3RlZENvbHVtbi52YWx1ZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBjb2x1bW5JbmRleDogaW5kZXhcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gICAgfTtcbiAgICBjbGFzc18yLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtbW9kYWxcIjogXCJ0cnVlXCIsIGNsYXNzOiBPYmplY3QuYXNzaWduKChfYSA9IHt9LCBfYVttb2RlXSA9IHRydWUsIFxuICAgICAgICAgICAgLy8gVXNlZCBpbnRlcm5hbGx5IGZvciBzdHlsaW5nXG4gICAgICAgICAgICBfYVtcInBpY2tlci1cIiArIG1vZGVdID0gdHJ1ZSwgX2EpLCBnZXRDbGFzc01hcCh0aGlzLmNzc0NsYXNzKSksIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgekluZGV4OiBcIlwiICsgKDIwMDAwICsgdGhpcy5vdmVybGF5SW5kZXgpXG4gICAgICAgICAgICB9LCBvbklvbkJhY2tkcm9wVGFwOiB0aGlzLm9uQmFja2Ryb3BUYXAgfSwgaChcImlvbi1iYWNrZHJvcFwiLCB7IHZpc2libGU6IHRoaXMuc2hvd0JhY2tkcm9wLCB0YXBwYWJsZTogdGhpcy5iYWNrZHJvcERpc21pc3MgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJwaWNrZXItd3JhcHBlclwiLCByb2xlOiBcImRpYWxvZ1wiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJwaWNrZXItdG9vbGJhclwiIH0sIHRoaXMuYnV0dG9ucy5tYXAoZnVuY3Rpb24gKGIpIHsgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IGJ1dHRvbldyYXBwZXJDbGFzcyhiKSB9LCBoKFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYnV0dG9uQ2xpY2soYik7IH0sIGNsYXNzOiBidXR0b25DbGFzcyhiKSB9LCBiLnRleHQpKSk7IH0pKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInBpY2tlci1jb2x1bW5zXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInBpY2tlci1hYm92ZS1oaWdobGlnaHRcIiB9KSwgdGhpcy5wcmVzZW50ZWQgJiYgdGhpcy5jb2x1bW5zLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gaChcImlvbi1waWNrZXItY29sdW1uXCIsIHsgY29sOiBjIH0pOyB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInBpY2tlci1iZWxvdy1oaWdobGlnaHRcIiB9KSkpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMi5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18yLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIi5zYy1pb24tcGlja2VyLWlvcy1oey0tYm9yZGVyLXJhZGl1czowOy0tYm9yZGVyLXN0eWxlOnNvbGlkOy0tbWluLXdpZHRoOmF1dG87LS13aWR0aDoxMDAlOy0tbWF4LXdpZHRoOjUwMHB4Oy0tbWluLWhlaWdodDphdXRvOy0tbWF4LWhlaWdodDphdXRvOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2xlZnQ6MDt0b3A6MDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpO2NvbnRhaW46c3RyaWN0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjEwMDF9W2Rpcj1ydGxdLnNjLWlvbi1waWNrZXItaW9zLWgsIFtkaXI9cnRsXSAuc2MtaW9uLXBpY2tlci1pb3MtaHtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjB9Lm92ZXJsYXktaGlkZGVuLnNjLWlvbi1waWNrZXItaW9zLWh7ZGlzcGxheTpub25lfS5waWNrZXItd3JhcHBlci5zYy1pb24tcGlja2VyLWlvc3tib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87bWFyZ2luLXRvcDphdXRvO21hcmdpbi1ib3R0b206YXV0bzstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt3aWR0aDp2YXIoLS13aWR0aCk7bWluLXdpZHRoOnZhcigtLW1pbi13aWR0aCk7bWF4LXdpZHRoOnZhcigtLW1heC13aWR0aCk7aGVpZ2h0OnZhcigtLWhlaWdodCk7bWluLWhlaWdodDp2YXIoLS1taW4taGVpZ2h0KTttYXgtaGVpZ2h0OnZhcigtLW1heC1oZWlnaHQpO2JvcmRlci13aWR0aDp2YXIoLS1ib3JkZXItd2lkdGgpO2JvcmRlci1zdHlsZTp2YXIoLS1ib3JkZXItc3R5bGUpO2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29udGFpbjpzdHJpY3Q7b3ZlcmZsb3c6aGlkZGVuO3otaW5kZXg6MTB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5waWNrZXItd3JhcHBlci5zYy1pb24tcGlja2VyLWlvc3ttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6YXV0bzttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG87LXdlYmtpdC1tYXJnaW4tZW5kOmF1dG87bWFyZ2luLWlubGluZS1lbmQ6YXV0b319LnBpY2tlci10b29sYmFyLnNjLWlvbi1waWNrZXItaW9ze3dpZHRoOjEwMCU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb250YWluOnN0cmljdDt6LWluZGV4OjF9LnBpY2tlci1idXR0b24uc2MtaW9uLXBpY2tlci1pb3N7Ym9yZGVyOjA7Zm9udC1mYW1pbHk6aW5oZXJpdH0ucGlja2VyLWJ1dHRvbi5zYy1pb24tcGlja2VyLWlvczphY3RpdmUsIC5waWNrZXItYnV0dG9uLnNjLWlvbi1waWNrZXItaW9zOmZvY3Vze291dGxpbmU6bm9uZX0ucGlja2VyLWNvbHVtbnMuc2MtaW9uLXBpY2tlci1pb3N7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW4tYm90dG9tOnZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tLDApO2NvbnRhaW46c3RyaWN0O2RpcmVjdGlvbjpsdHI7b3ZlcmZsb3c6aGlkZGVufS5waWNrZXItYWJvdmUtaGlnaGxpZ2h0LnNjLWlvbi1waWNrZXItaW9zLCAucGlja2VyLWJlbG93LWhpZ2hsaWdodC5zYy1pb24tcGlja2VyLWlvc3tkaXNwbGF5Om5vbmU7cG9pbnRlci1ldmVudHM6bm9uZX0uc2MtaW9uLXBpY2tlci1pb3MtaHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2ZmZik7LS1ib3JkZXItd2lkdGg6MXB4IDAgMDstLWJvcmRlci1jb2xvcjp2YXIoLS1pb24taXRlbS1ib3JkZXItY29sb3IsdmFyKC0taW9uLWJvcmRlci1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsI2M4YzdjYykpKTstLWhlaWdodDoyNjBweDtjb2xvcjp2YXIoLS1pb24taXRlbS1jb2xvcix2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKSl9LnBpY2tlci10b29sYmFyLnNjLWlvbi1waWNrZXItaW9ze2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O2hlaWdodDo0NHB4O2JvcmRlci1ib3R0b206LjU1cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKX0ucGlja2VyLXRvb2xiYXItYnV0dG9uLnNjLWlvbi1waWNrZXItaW9zey1tcy1mbGV4OjE7ZmxleDoxO3RleHQtYWxpZ246ZW5kfS5waWNrZXItdG9vbGJhci1idXR0b24uc2MtaW9uLXBpY2tlci1pb3M6bGFzdC1jaGlsZCAucGlja2VyLWJ1dHRvbi5zYy1pb24tcGlja2VyLWlvc3tmb250LXdlaWdodDo2MDB9LnBpY2tlci10b29sYmFyLWJ1dHRvbi5zYy1pb24tcGlja2VyLWlvczpmaXJzdC1jaGlsZHtmb250LXdlaWdodDo0MDA7dGV4dC1hbGlnbjpzdGFydH0ucGlja2VyLWJ1dHRvbi5zYy1pb24tcGlja2VyLWlvcywgLnBpY2tlci1idXR0b24uYWN0aXZhdGVkLnNjLWlvbi1waWNrZXItaW9ze21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwYWRkaW5nLWxlZnQ6MWVtO3BhZGRpbmctcmlnaHQ6MWVtO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtoZWlnaHQ6NDRweDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpO2ZvbnQtc2l6ZToxNnB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsucGlja2VyLWJ1dHRvbi5zYy1pb24tcGlja2VyLWlvcywgLnBpY2tlci1idXR0b24uYWN0aXZhdGVkLnNjLWlvbi1waWNrZXItaW9ze3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDoxZW07cGFkZGluZy1pbmxpbmUtc3RhcnQ6MWVtOy13ZWJraXQtcGFkZGluZy1lbmQ6MWVtO3BhZGRpbmctaW5saW5lLWVuZDoxZW19fS5waWNrZXItY29sdW1ucy5zYy1pb24tcGlja2VyLWlvc3toZWlnaHQ6MjE1cHg7LXdlYmtpdC1wZXJzcGVjdGl2ZToxMDAwcHg7cGVyc3BlY3RpdmU6MTAwMHB4fS5waWNrZXItYWJvdmUtaGlnaGxpZ2h0LnNjLWlvbi1waWNrZXItaW9ze2xlZnQ6MDt0b3A6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDkwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDkwcHgpO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6ODFweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO2JhY2tncm91bmQ6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AsbGVmdCBib3R0b20sY29sb3Itc3RvcCgyMCUsdmFyKC0tYmFja2dyb3VuZCx2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKSkpLHRvKHJnYmEodmFyKC0tYmFja2dyb3VuZC1yZ2IsdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLDI1NSwyNTUsMjU1KSksLjgpKSk7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLHZhcigtLWJhY2tncm91bmQsdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2ZmZikpIDIwJSxyZ2JhKHZhcigtLWJhY2tncm91bmQtcmdiLHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwyNTUsMjU1LDI1NSkpLC44KSk7ei1pbmRleDoxMH1bZGlyPXJ0bF0uc2MtaW9uLXBpY2tlci1pb3MtaCAucGlja2VyLWFib3ZlLWhpZ2hsaWdodC5zYy1pb24tcGlja2VyLWlvcywgW2Rpcj1ydGxdIC5zYy1pb24tcGlja2VyLWlvcy1oIC5waWNrZXItYWJvdmUtaGlnaGxpZ2h0LnNjLWlvbi1waWNrZXItaW9zLCBbZGlyPXJ0bF0uc2MtaW9uLXBpY2tlci1pb3MgLnBpY2tlci1hYm92ZS1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1pb3N7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowfS5waWNrZXItYmVsb3ctaGlnaGxpZ2h0LnNjLWlvbi1waWNrZXItaW9ze2xlZnQ6MDt0b3A6MTE1cHg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWig5MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWig5MHB4KTtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjExOXB4O2JvcmRlci10b3A6MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IGJvdHRvbSxsZWZ0IHRvcCxjb2xvci1zdG9wKDMwJSx2YXIoLS1iYWNrZ3JvdW5kLHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpKSksdG8ocmdiYSh2YXIoLS1iYWNrZ3JvdW5kLXJnYix2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsMjU1LDI1NSwyNTUpKSwuOCkpKTtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgwZGVnLHZhcigtLWJhY2tncm91bmQsdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2ZmZikpIDMwJSxyZ2JhKHZhcigtLWJhY2tncm91bmQtcmdiLHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwyNTUsMjU1LDI1NSkpLC44KSk7ei1pbmRleDoxMX1bZGlyPXJ0bF0uc2MtaW9uLXBpY2tlci1pb3MtaCAucGlja2VyLWJlbG93LWhpZ2hsaWdodC5zYy1pb24tcGlja2VyLWlvcywgW2Rpcj1ydGxdIC5zYy1pb24tcGlja2VyLWlvcy1oIC5waWNrZXItYmVsb3ctaGlnaGxpZ2h0LnNjLWlvbi1waWNrZXItaW9zLCBbZGlyPXJ0bF0uc2MtaW9uLXBpY2tlci1pb3MgLnBpY2tlci1iZWxvdy1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1pb3N7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NfMjtcbn0oKSk7XG52YXIgYnV0dG9uV3JhcHBlckNsYXNzID0gZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gX2EgPSB7fSxcbiAgICAgICAgX2FbXCJwaWNrZXItdG9vbGJhci1cIiArIGJ1dHRvbi5yb2xlXSA9IGJ1dHRvbi5yb2xlICE9PSB1bmRlZmluZWQsXG4gICAgICAgIF9hWydwaWNrZXItdG9vbGJhci1idXR0b24nXSA9IHRydWUsXG4gICAgICAgIF9hO1xufTtcbnZhciBidXR0b25DbGFzcyA9IGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7ICdwaWNrZXItYnV0dG9uJzogdHJ1ZSwgJ2lvbi1hY3RpdmF0YWJsZSc6IHRydWUgfSwgZ2V0Q2xhc3NNYXAoYnV0dG9uLmNzc0NsYXNzKSk7XG59O1xudmFyIFBpY2tlckNvbHVtbkNtcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18zKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5vcHRIZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLnJvdGF0ZUZhY3RvciA9IDA7XG4gICAgICAgIHRoaXMuc2NhbGVGYWN0b3IgPSAxO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy5ub0FuaW1hdGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmlvblBpY2tlckNvbENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUGlja2VyQ29sQ2hhbmdlXCIsIDcpO1xuICAgIH1cbiAgICBjbGFzc18zLnByb3RvdHlwZS5jb2xDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9O1xuICAgIGNsYXNzXzMucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcGlja2VyUm90YXRlRmFjdG9yLCBwaWNrZXJTY2FsZUZhY3RvciwgbW9kZSwgX2E7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGlja2VyUm90YXRlRmFjdG9yID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY2tlclNjYWxlRmFjdG9yID0gMC44MTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdpb3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlja2VyUm90YXRlRmFjdG9yID0gLTAuNDY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlja2VyU2NhbGVGYWN0b3IgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVGYWN0b3IgPSBwaWNrZXJSb3RhdGVGYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYWxlRmFjdG9yID0gcGlja2VyU2NhbGVGYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbXBvcnQoJy4vaW5kZXgtNjI0ZWVhNTguanMnKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmdlc3R1cmUgPSAoX2Iuc2VudCgpKS5jcmVhdGVHZXN0dXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbDogdGhpcy5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXN0dXJlTmFtZTogJ3BpY2tlci1zd2lwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VzdHVyZVByaW9yaXR5OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3RhcnQ6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMub25TdGFydChldik7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLm9uTW92ZShldik7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FbmQ6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMub25FbmQoZXYpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlc3R1cmUuc2V0RGlzYWJsZWQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50bXJJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm5vQW5pbWF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlZnJlc2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzMucHJvdG90eXBlLmNvbXBvbmVudERpZExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb2xFbCA9IHRoaXMub3B0c0VsO1xuICAgICAgICBpZiAoY29sRWwpIHtcbiAgICAgICAgICAgIC8vIERPTSBSRUFEXG4gICAgICAgICAgICAvLyBXZSBwZXJmb20gYSBET00gcmVhZCBvdmVyIGEgcmVuZGVyZWQgaXRlbSwgdGhpcyBuZWVkcyB0byBoYXBwZW4gYWZ0ZXIgdGhlIGZpcnN0IHJlbmRlclxuICAgICAgICAgICAgdGhpcy5vcHRIZWlnaHQgPSAoY29sRWwuZmlyc3RFbGVtZW50Q2hpbGQgPyBjb2xFbC5maXJzdEVsZW1lbnRDaGlsZC5jbGllbnRIZWlnaHQgOiAwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9O1xuICAgIGNsYXNzXzMucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZklkKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG1ySWQpO1xuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18zLnByb3RvdHlwZS5lbWl0Q29sQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlvblBpY2tlckNvbENoYW5nZS5lbWl0KHRoaXMuY29sKTtcbiAgICB9O1xuICAgIGNsYXNzXzMucHJvdG90eXBlLnNldFNlbGVjdGVkID0gZnVuY3Rpb24gKHNlbGVjdGVkSW5kZXgsIGR1cmF0aW9uKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgc2VsZWN0ZWQgaW5kZXgsIHRoZW4gZmlndXJlIG91dCBpdCdzIHkgcG9zaXRpb25cbiAgICAgICAgLy8gaWYgdGhlcmUgaXNuJ3QgYSBzZWxlY3RlZCBpbmRleCwgdGhlbiBqdXN0IHVzZSB0aGUgdG9wIHkgcG9zaXRpb25cbiAgICAgICAgdmFyIHkgPSAoc2VsZWN0ZWRJbmRleCA+IC0xKSA/IC0oc2VsZWN0ZWRJbmRleCAqIHRoaXMub3B0SGVpZ2h0KSA6IDA7XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgICAgICAvLyBzZXQgd2hhdCB5IHBvc2l0aW9uIHdlJ3JlIGF0XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmFmSWQpO1xuICAgICAgICB0aGlzLnVwZGF0ZSh5LCBkdXJhdGlvbiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZW1pdENvbENoYW5nZSgpO1xuICAgIH07XG4gICAgY2xhc3NfMy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKHksIGR1cmF0aW9uLCBzYXZlWSkge1xuICAgICAgICBpZiAoIXRoaXMub3B0c0VsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZW5zdXJlIHdlJ3ZlIGdvdCBhIGdvb2Qgcm91bmQgbnVtYmVyIDopXG4gICAgICAgIHZhciB0cmFuc2xhdGVZID0gMDtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZVogPSAwO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBjb2wgPSBfYS5jb2wsIHJvdGF0ZUZhY3RvciA9IF9hLnJvdGF0ZUZhY3RvcjtcbiAgICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSBjb2wuc2VsZWN0ZWRJbmRleCA9IHRoaXMuaW5kZXhGb3JZKC15KTtcbiAgICAgICAgdmFyIGR1cmF0aW9uU3RyID0gKGR1cmF0aW9uID09PSAwKSA/ICcnIDogZHVyYXRpb24gKyAnbXMnO1xuICAgICAgICB2YXIgc2NhbGVTdHIgPSBcInNjYWxlKFwiICsgdGhpcy5zY2FsZUZhY3RvciArIFwiKVwiO1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLm9wdHNFbC5jaGlsZHJlbjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgdmFyIG9wdCA9IGNvbC5vcHRpb25zW2ldO1xuICAgICAgICAgICAgdmFyIG9wdE9mZnNldCA9IChpICogdGhpcy5vcHRIZWlnaHQpICsgeTtcbiAgICAgICAgICAgIHZhciB0cmFuc2Zvcm0gPSAnJztcbiAgICAgICAgICAgIGlmIChyb3RhdGVGYWN0b3IgIT09IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgcm90YXRlWCA9IG9wdE9mZnNldCAqIHJvdGF0ZUZhY3RvcjtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMocm90YXRlWCkgPD0gOTApIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVogPSA5MDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtID0gXCJyb3RhdGVYKFwiICsgcm90YXRlWCArIFwiZGVnKSBcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVkgPSAtOTk5OTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVaID0gMDtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZID0gb3B0T2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gc2VsZWN0ZWRJbmRleCA9PT0gaTtcbiAgICAgICAgICAgIHRyYW5zZm9ybSArPSBcInRyYW5zbGF0ZTNkKDBweCxcIiArIHRyYW5zbGF0ZVkgKyBcInB4LFwiICsgdHJhbnNsYXRlWiArIFwicHgpIFwiO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2NhbGVGYWN0b3IgIT09IDEgJiYgIXNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtICs9IHNjYWxlU3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBkYXRlIHRyYW5zaXRpb24gZHVyYXRpb25cbiAgICAgICAgICAgIGlmICh0aGlzLm5vQW5pbWF0ZSkge1xuICAgICAgICAgICAgICAgIG9wdC5kdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZHVyYXRpb24gIT09IG9wdC5kdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIG9wdC5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvblN0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0cmFuc2Zvcm1cbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm0gIT09IG9wdC50cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgICAgICBvcHQudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgc2VsZWN0ZWQgaXRlbVxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkICE9PSBvcHQuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBvcHQuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoUElDS0VSX09QVF9TRUxFQ1RFRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShQSUNLRVJfT1BUX1NFTEVDVEVEKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2wucHJldlNlbGVjdGVkID0gc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgaWYgKHNhdmVZKSB7XG4gICAgICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxhc3RJbmRleCAhPT0gc2VsZWN0ZWRJbmRleCkge1xuICAgICAgICAgICAgLy8gaGF2ZSBub3Qgc2V0IGEgbGFzdCBpbmRleCB5ZXRcbiAgICAgICAgICAgIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQoKTtcbiAgICAgICAgICAgIHRoaXMubGFzdEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMy5wcm90b3R5cGUuZGVjZWxlcmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMudmVsb2NpdHkgIT09IDApIHtcbiAgICAgICAgICAgIC8vIHN0aWxsIGRlY2VsZXJhdGluZ1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSAqPSBERUNFTEVSQVRJT05fRlJJQ1RJT047XG4gICAgICAgICAgICAvLyBkbyBub3QgbGV0IGl0IGdvIHNsb3dlciB0aGFuIGEgdmVsb2NpdHkgb2YgMVxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9ICh0aGlzLnZlbG9jaXR5ID4gMClcbiAgICAgICAgICAgICAgICA/IE1hdGgubWF4KHRoaXMudmVsb2NpdHksIDEpXG4gICAgICAgICAgICAgICAgOiBNYXRoLm1pbih0aGlzLnZlbG9jaXR5LCAtMSk7XG4gICAgICAgICAgICB2YXIgeSA9IHRoaXMueSArIHRoaXMudmVsb2NpdHk7XG4gICAgICAgICAgICBpZiAoeSA+IHRoaXMubWluWSkge1xuICAgICAgICAgICAgICAgIC8vIHdob29wcywgaXQncyB0cnlpbmcgdG8gc2Nyb2xsIHVwIGZhcnRoZXIgdGhhbiB0aGUgb3B0aW9ucyB3ZSBoYXZlIVxuICAgICAgICAgICAgICAgIHkgPSB0aGlzLm1pblk7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh5IDwgdGhpcy5tYXhZKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2FoaCwgaXQncyB0cnlpbmcgdG8gc2Nyb2xsIGRvd24gZmFydGhlciB0aGFuIHdlIGNhbiFcbiAgICAgICAgICAgICAgICB5ID0gdGhpcy5tYXhZO1xuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGUoeSwgMCwgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgbm90TG9ja2VkSW4gPSAoTWF0aC5yb3VuZCh5KSAlIHRoaXMub3B0SGVpZ2h0ICE9PSAwKSB8fCAoTWF0aC5hYnModGhpcy52ZWxvY2l0eSkgPiAxKTtcbiAgICAgICAgICAgIGlmIChub3RMb2NrZWRJbikge1xuICAgICAgICAgICAgICAgIC8vIGlzbid0IGxvY2tlZCBpbiB5ZXQsIGtlZXAgZGVjZWxlcmF0aW5nIHVudGlsIGl0IGlzXG4gICAgICAgICAgICAgICAgdGhpcy5yYWZJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5kZWNlbGVyYXRlKCk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0Q29sQ2hhbmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy55ICUgdGhpcy5vcHRIZWlnaHQgIT09IDApIHtcbiAgICAgICAgICAgIC8vIG5lZWRzIHRvIHN0aWxsIGdldCBsb2NrZWQgaW50byBhIHBvc2l0aW9uIHNvIG9wdGlvbnMgbGluZSB1cFxuICAgICAgICAgICAgdmFyIGN1cnJlbnRQb3MgPSBNYXRoLmFicyh0aGlzLnkgJSB0aGlzLm9wdEhlaWdodCk7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYSB2ZWxvY2l0eSBpbiB0aGUgZGlyZWN0aW9uIGl0IG5lZWRzIHRvIHNjcm9sbFxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IChjdXJyZW50UG9zID4gKHRoaXMub3B0SGVpZ2h0IC8gMikgPyAxIDogLTEpO1xuICAgICAgICAgICAgdGhpcy5kZWNlbGVyYXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzMucHJvdG90eXBlLmluZGV4Rm9yWSA9IGZ1bmN0aW9uICh5KSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChNYXRoLmFicyhNYXRoLnJvdW5kKHkgLyB0aGlzLm9wdEhlaWdodCkpLCAwKSwgdGhpcy5jb2wub3B0aW9ucy5sZW5ndGggLSAxKTtcbiAgICB9O1xuICAgIC8vIFRPRE8gc2hvdWxkIHRoaXMgY2hlY2sgZGlzYWJsZWQ/XG4gICAgY2xhc3NfMy5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIChkZXRhaWwpIHtcbiAgICAgICAgLy8gV2UgaGF2ZSB0byBwcmV2ZW50IGRlZmF1bHQgaW4gb3JkZXIgdG8gYmxvY2sgc2Nyb2xsaW5nIHVuZGVyIHRoZSBwaWNrZXJcbiAgICAgICAgLy8gYnV0IHdlIERPIE5PVCBoYXZlIHRvIHN0b3AgcHJvcGFnYXRpb24sIHNpbmNlIHdlIHN0aWxsIHdhbnRcbiAgICAgICAgLy8gc29tZSBcImNsaWNrXCIgZXZlbnRzIHRvIGNhcHR1cmVcbiAgICAgICAgZGV0YWlsLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRldGFpbC5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgLy8gcmVzZXQgZXZlcnl0aGluZ1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZklkKTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLmNvbC5vcHRpb25zO1xuICAgICAgICB2YXIgbWluWSA9IChvcHRpb25zLmxlbmd0aCAtIDEpO1xuICAgICAgICB2YXIgbWF4WSA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zW2ldLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgbWluWSA9IE1hdGgubWluKG1pblksIGkpO1xuICAgICAgICAgICAgICAgIG1heFkgPSBNYXRoLm1heChtYXhZLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1pblkgPSAtKG1pblkgKiB0aGlzLm9wdEhlaWdodCk7XG4gICAgICAgIHRoaXMubWF4WSA9IC0obWF4WSAqIHRoaXMub3B0SGVpZ2h0KTtcbiAgICB9O1xuICAgIGNsYXNzXzMucHJvdG90eXBlLm9uTW92ZSA9IGZ1bmN0aW9uIChkZXRhaWwpIHtcbiAgICAgICAgZGV0YWlsLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRldGFpbC5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBzY3JvbGwgcG9zaXRpb24gcmVsYXRpdmUgdG8gcG9pbnRlciBzdGFydCBwb3NpdGlvblxuICAgICAgICB2YXIgeSA9IHRoaXMueSArIGRldGFpbC5kZWx0YVk7XG4gICAgICAgIGlmICh5ID4gdGhpcy5taW5ZKSB7XG4gICAgICAgICAgICAvLyBzY3JvbGxpbmcgdXAgaGlnaGVyIHRoYW4gc2Nyb2xsIGFyZWFcbiAgICAgICAgICAgIHkgPSBNYXRoLnBvdyh5LCAwLjgpO1xuICAgICAgICAgICAgdGhpcy5ib3VuY2VGcm9tID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh5IDwgdGhpcy5tYXhZKSB7XG4gICAgICAgICAgICAvLyBzY3JvbGxpbmcgZG93biBiZWxvdyBzY3JvbGwgYXJlYVxuICAgICAgICAgICAgeSArPSBNYXRoLnBvdyh0aGlzLm1heFkgLSB5LCAwLjkpO1xuICAgICAgICAgICAgdGhpcy5ib3VuY2VGcm9tID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYm91bmNlRnJvbSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGUoeSwgMCwgZmFsc2UpO1xuICAgIH07XG4gICAgY2xhc3NfMy5wcm90b3R5cGUub25FbmQgPSBmdW5jdGlvbiAoZGV0YWlsKSB7XG4gICAgICAgIGlmICh0aGlzLmJvdW5jZUZyb20gPiAwKSB7XG4gICAgICAgICAgICAvLyBib3VuY2UgYmFjayB1cFxuICAgICAgICAgICAgdGhpcy51cGRhdGUodGhpcy5taW5ZLCAxMDAsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5lbWl0Q29sQ2hhbmdlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5ib3VuY2VGcm9tIDwgMCkge1xuICAgICAgICAgICAgLy8gYm91bmNlIGJhY2sgZG93blxuICAgICAgICAgICAgdGhpcy51cGRhdGUodGhpcy5tYXhZLCAxMDAsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5lbWl0Q29sQ2hhbmdlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IGNsYW1wKC1NQVhfUElDS0VSX1NQRUVELCBkZXRhaWwudmVsb2NpdHlZICogMjMsIE1BWF9QSUNLRVJfU1BFRUQpO1xuICAgICAgICBpZiAodGhpcy52ZWxvY2l0eSA9PT0gMCAmJiBkZXRhaWwuZGVsdGFZID09PSAwKSB7XG4gICAgICAgICAgICB2YXIgb3B0ID0gZGV0YWlsLmV2ZW50LnRhcmdldC5jbG9zZXN0KCcucGlja2VyLW9wdCcpO1xuICAgICAgICAgICAgaWYgKG9wdCAmJiBvcHQuaGFzQXR0cmlidXRlKCdvcHQtaW5kZXgnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWQocGFyc2VJbnQob3B0LmdldEF0dHJpYnV0ZSgnb3B0LWluZGV4JyksIDEwKSwgVFJBTlNJVElPTl9EVVJBVElPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnkgKz0gZGV0YWlsLmRlbHRhWTtcbiAgICAgICAgICAgIHRoaXMuZGVjZWxlcmF0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18zLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKGZvcmNlUmVmcmVzaCkge1xuICAgICAgICB2YXIgbWluID0gdGhpcy5jb2wub3B0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgICB2YXIgbWF4ID0gMDtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLmNvbC5vcHRpb25zO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9uc1tpXS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIG1pbiA9IE1hdGgubWluKG1pbiwgaSk7XG4gICAgICAgICAgICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogT25seSB1cGRhdGUgc2VsZWN0ZWQgdmFsdWUgaWYgY29sdW1uIGhhcyBhXG4gICAgICAgICAqIHZlbG9jaXR5IG9mIDAuIElmIGl0IGRvZXMgbm90LCB0aGVuIHRoZVxuICAgICAgICAgKiBjb2x1bW4gaXMgYW5pbWF0aW5nIG1pZ2h0IGxhbmQgb25cbiAgICAgICAgICogYSB2YWx1ZSBkaWZmZXJlbnQgdGhhbiB0aGUgdmFsdWUgYXRcbiAgICAgICAgICogc2VsZWN0ZWRJbmRleFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHRoaXMudmVsb2NpdHkgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IGNsYW1wKG1pbiwgdGhpcy5jb2wuc2VsZWN0ZWRJbmRleCB8fCAwLCBtYXgpO1xuICAgICAgICBpZiAodGhpcy5jb2wucHJldlNlbGVjdGVkICE9PSBzZWxlY3RlZEluZGV4IHx8IGZvcmNlUmVmcmVzaCkge1xuICAgICAgICAgICAgdmFyIHkgPSAoc2VsZWN0ZWRJbmRleCAqIHRoaXMub3B0SGVpZ2h0KSAqIC0xO1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh5LCBUUkFOU0lUSU9OX0RVUkFUSU9OLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjb2wgPSB0aGlzLmNvbDtcbiAgICAgICAgdmFyIEJ1dHRvbiA9ICdidXR0b24nO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVttb2RlXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2FbJ3BpY2tlci1jb2wnXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2FbJ3BpY2tlci1vcHRzLWxlZnQnXSA9IHRoaXMuY29sLmFsaWduID09PSAnbGVmdCcsXG4gICAgICAgICAgICAgICAgX2FbJ3BpY2tlci1vcHRzLXJpZ2h0J10gPSB0aGlzLmNvbC5hbGlnbiA9PT0gJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICBfYSksIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgJ21heC13aWR0aCc6IHRoaXMuY29sLmNvbHVtbldpZHRoXG4gICAgICAgICAgICB9IH0sIGNvbC5wcmVmaXggJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogXCJwaWNrZXItcHJlZml4XCIsIHN0eWxlOiB7IHdpZHRoOiBjb2wucHJlZml4V2lkdGggfSB9LCBjb2wucHJlZml4KSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJwaWNrZXItb3B0c1wiLCBzdHlsZTogeyBtYXhXaWR0aDogY29sLm9wdGlvbnNXaWR0aCB9LCByZWY6IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gX3RoaXMub3B0c0VsID0gZWw7IH0gfSwgY29sLm9wdGlvbnMubWFwKGZ1bmN0aW9uIChvLCBpbmRleCkgeyByZXR1cm4gaChCdXR0b24sIHsgdHlwZTogXCJidXR0b25cIiwgY2xhc3M6IHsgJ3BpY2tlci1vcHQnOiB0cnVlLCAncGlja2VyLW9wdC1kaXNhYmxlZCc6ICEhby5kaXNhYmxlZCB9LCBcIm9wdC1pbmRleFwiOiBpbmRleCB9LCBvLnRleHQpOyB9KSksIGNvbC5zdWZmaXggJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogXCJwaWNrZXItc3VmZml4XCIsIHN0eWxlOiB7IHdpZHRoOiBjb2wuc3VmZml4V2lkdGggfSB9LCBjb2wuc3VmZml4KSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18zLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzMsIFwid2F0Y2hlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJjb2xcIjogW1wiY29sQ2hhbmdlZFwiXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzMsIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiLnBpY2tlci1jb2x7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtoZWlnaHQ6MTAwJTstd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveDtjb250YWluOmNvbnRlbnR9LnBpY2tlci1vcHRze3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4OjE7ZmxleDoxO21heC13aWR0aDoxMDAlfS5waWNrZXItb3B0e2xlZnQ6MDt0b3A6MDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7Ym9yZGVyOjA7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7Y29udGFpbjpzdHJpY3Q7b3ZlcmZsb3c6aGlkZGVuO3dpbGwtY2hhbmdlOnRyYW5zZm9ybX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnBpY2tlci1vcHQsW2Rpcj1ydGxdIC5waWNrZXItb3B0e2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6MH0ucGlja2VyLW9wdC5waWNrZXItb3B0LWRpc2FibGVke3BvaW50ZXItZXZlbnRzOm5vbmV9LnBpY2tlci1vcHQtZGlzYWJsZWR7b3BhY2l0eTowfS5waWNrZXItb3B0cy1sZWZ0ey1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LnBpY2tlci1vcHRzLXJpZ2h0ey1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ucGlja2VyLW9wdDphY3RpdmUsLnBpY2tlci1vcHQ6Zm9jdXN7b3V0bGluZTpub25lfS5waWNrZXItcHJlZml4e3RleHQtYWxpZ246ZW5kfS5waWNrZXItcHJlZml4LC5waWNrZXItc3VmZml4e3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4OjE7ZmxleDoxO3doaXRlLXNwYWNlOm5vd3JhcH0ucGlja2VyLXN1ZmZpeHt0ZXh0LWFsaWduOnN0YXJ0fS5waWNrZXItY29se3BhZGRpbmctbGVmdDo0cHg7cGFkZGluZy1yaWdodDo0cHg7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowOy13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LnBpY2tlci1jb2x7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjRweDtwYWRkaW5nLWlubGluZS1zdGFydDo0cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo0cHg7cGFkZGluZy1pbmxpbmUtZW5kOjRweH19LnBpY2tlci1vcHRzLC5waWNrZXItcHJlZml4LC5waWNrZXItc3VmZml4e3RvcDo3N3B4O3BvaW50ZXItZXZlbnRzOm5vbmV9LnBpY2tlci1vcHQsLnBpY2tlci1vcHRzLC5waWNrZXItcHJlZml4LC5waWNrZXItc3VmZml4ey13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDtjb2xvcjppbmhlcml0O2ZvbnQtc2l6ZToyMHB4O2xpbmUtaGVpZ2h0OjQycHh9LnBpY2tlci1vcHR7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyO2hlaWdodDo0NnB4Oy13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7YmFja2dyb3VuZDp0cmFuc3BhcmVudDstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO3BvaW50ZXItZXZlbnRzOmF1dG99Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5waWNrZXItb3B0LFtkaXI9cnRsXSAucGlja2VyLW9wdHstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKSBjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBjZW50ZXIpIGNlbnRlcn1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzM7XG59KCkpO1xudmFyIFBJQ0tFUl9PUFRfU0VMRUNURUQgPSAncGlja2VyLW9wdC1zZWxlY3RlZCc7XG52YXIgREVDRUxFUkFUSU9OX0ZSSUNUSU9OID0gMC45NztcbnZhciBNQVhfUElDS0VSX1NQRUVEID0gOTA7XG52YXIgVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MDtcbmV4cG9ydCB7IERhdGV0aW1lIGFzIGlvbl9kYXRldGltZSwgUGlja2VyIGFzIGlvbl9waWNrZXIsIFBpY2tlckNvbHVtbkNtcCBhcyBpb25fcGlja2VyX2NvbHVtbiB9O1xuIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xudmFyIGhvc3RDb250ZXh0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBlbCkge1xuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcbn07XG4vKipcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cbiAqL1xudmFyIGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyAoX2EgPSB7XG4gICAgICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBfYVtcImlvbi1jb2xvci1cIiArIGNvbG9yXSA9IHRydWUsXG4gICAgICAgIF9hKSA6IHVuZGVmaW5lZDtcbn07XG52YXIgZ2V0Q2xhc3NMaXN0ID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT0gbnVsbDsgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudHJpbSgpOyB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPT0gJyc7IH0pO1xuICAgIH1cbiAgICByZXR1cm4gW107XG59O1xudmFyIGdldENsYXNzTWFwID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG1hcFtjXSA9IHRydWU7IH0pO1xuICAgIHJldHVybiBtYXA7XG59O1xudmFyIFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xudmFyIG9wZW5VUkwgPSBmdW5jdGlvbiAodXJsLCBldiwgZGlyZWN0aW9uKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByb3V0ZXI7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcbiAgICAgICAgICAgIHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcbiAgICAgICAgICAgIGlmIChyb3V0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgIH0pO1xufSk7IH07XG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9