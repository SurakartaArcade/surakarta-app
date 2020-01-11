(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-range-ios.entry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-range-ios.entry.js ***!
  \**********************************************************************/
/*! exports provided: ion_range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_range", function() { return Range; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");





var Range = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.noUpdate = false;
        this.hasFocus = false;
        this.ratioA = 0;
        this.ratioB = 0;
        /**
         * How long, in milliseconds, to wait to trigger the
         * `ionChange` event after each change in the range value.
         */
        this.debounce = 0;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = '';
        /**
         * Show two knobs.
         */
        this.dualKnobs = false;
        /**
         * Minimum integer value of the range.
         */
        this.min = 0;
        /**
         * Maximum integer value of the range.
         */
        this.max = 100;
        /**
         * If `true`, a pin with integer value is shown when the knob
         * is pressed.
         */
        this.pin = false;
        /**
         * If `true`, the knob snaps to tick marks evenly spaced based
         * on the step property value.
         */
        this.snaps = false;
        /**
         * Specifies the value granularity.
         */
        this.step = 1;
        /**
         * If `true`, tick marks are displayed based on the step value.
         * Only applies when `snaps` is `true`.
         */
        this.ticks = true;
        /**
         * If `true`, the user cannot interact with the range.
         */
        this.disabled = false;
        /**
         * the value of the range.
         */
        this.value = 0;
        this.clampBounds = function (value) {
            return Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["c"])(_this.min, value, _this.max);
        };
        this.ensureValueInBounds = function (value) {
            if (_this.dualKnobs) {
                return {
                    lower: _this.clampBounds(value.lower),
                    upper: _this.clampBounds(value.upper)
                };
            }
            else {
                return _this.clampBounds(value);
            }
        };
        this.handleKeyboard = function (knob, isIncrease) {
            var step = _this.step;
            step = step > 0 ? step : 1;
            step = step / (_this.max - _this.min);
            if (!isIncrease) {
                step *= -1;
            }
            if (knob === 'A') {
                _this.ratioA = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["c"])(0, _this.ratioA + step, 1);
            }
            else {
                _this.ratioB = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["c"])(0, _this.ratioB + step, 1);
            }
            _this.updateValue();
        };
        this.onBlur = function () {
            if (_this.hasFocus) {
                _this.hasFocus = false;
                _this.ionBlur.emit();
                _this.emitStyle();
            }
        };
        this.onFocus = function () {
            if (!_this.hasFocus) {
                _this.hasFocus = true;
                _this.ionFocus.emit();
                _this.emitStyle();
            }
        };
        this.ionChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionChange", 7);
        this.ionStyle = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionStyle", 7);
        this.ionFocus = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionFocus", 7);
        this.ionBlur = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionBlur", 7);
    }
    class_1.prototype.debounceChanged = function () {
        this.ionChange = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["d"])(this.ionChange, this.debounce);
    };
    class_1.prototype.minChanged = function () {
        if (!this.noUpdate) {
            this.updateRatio();
        }
    };
    class_1.prototype.maxChanged = function () {
        if (!this.noUpdate) {
            this.updateRatio();
        }
    };
    class_1.prototype.disabledChanged = function () {
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
        this.emitStyle();
    };
    class_1.prototype.valueChanged = function (value) {
        if (!this.noUpdate) {
            this.updateRatio();
        }
        value = this.ensureValueInBounds(value);
        this.ionChange.emit({ value: value });
    };
    class_1.prototype.connectedCallback = function () {
        this.updateRatio();
        this.debounceChanged();
        this.disabledChanged();
    };
    class_1.prototype.disconnectedCallback = function () {
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    };
    class_1.prototype.componentDidLoad = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var rangeSlider, _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        rangeSlider = this.rangeSlider;
                        if (!rangeSlider) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "./node_modules/@ionic/core/dist/esm-es5/index-624eea58.js"))];
                    case 1:
                        _a.gesture = (_b.sent()).createGesture({
                            el: rangeSlider,
                            gestureName: 'range',
                            gesturePriority: 100,
                            threshold: 0,
                            onStart: function (ev) { return _this.onStart(ev); },
                            onMove: function (ev) { return _this.onMove(ev); },
                            onEnd: function (ev) { return _this.onEnd(ev); },
                        });
                        this.gesture.setDisabled(this.disabled);
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.getValue = function () {
        var value = this.value || 0;
        if (this.dualKnobs) {
            if (typeof value === 'object') {
                return value;
            }
            return {
                lower: 0,
                upper: value
            };
        }
        else {
            if (typeof value === 'object') {
                return value.upper;
            }
            return value;
        }
    };
    class_1.prototype.emitStyle = function () {
        this.ionStyle.emit({
            'interactive': true,
            'interactive-disabled': this.disabled
        });
    };
    class_1.prototype.onStart = function (detail) {
        var rect = this.rect = this.rangeSlider.getBoundingClientRect();
        var currentX = detail.currentX;
        // figure out which knob they started closer to
        var ratio = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["c"])(0, (currentX - rect.left) / rect.width, 1);
        if (document.dir === 'rtl') {
            ratio = 1 - ratio;
        }
        this.pressedKnob =
            !this.dualKnobs ||
                Math.abs(this.ratioA - ratio) < Math.abs(this.ratioB - ratio)
                ? 'A'
                : 'B';
        this.setFocus(this.pressedKnob);
        // update the active knob's position
        this.update(currentX);
    };
    class_1.prototype.onMove = function (detail) {
        this.update(detail.currentX);
    };
    class_1.prototype.onEnd = function (detail) {
        this.update(detail.currentX);
        this.pressedKnob = undefined;
    };
    class_1.prototype.update = function (currentX) {
        // figure out where the pointer is currently at
        // update the knob being interacted with
        var rect = this.rect;
        var ratio = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["c"])(0, (currentX - rect.left) / rect.width, 1);
        if (document.dir === 'rtl') {
            ratio = 1 - ratio;
        }
        if (this.snaps) {
            // snaps the ratio to the current value
            ratio = valueToRatio(ratioToValue(ratio, this.min, this.max, this.step), this.min, this.max);
        }
        // update which knob is pressed
        if (this.pressedKnob === 'A') {
            this.ratioA = ratio;
        }
        else {
            this.ratioB = ratio;
        }
        // Update input value
        this.updateValue();
    };
    Object.defineProperty(class_1.prototype, "valA", {
        get: function () {
            return ratioToValue(this.ratioA, this.min, this.max, this.step);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "valB", {
        get: function () {
            return ratioToValue(this.ratioB, this.min, this.max, this.step);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "ratioLower", {
        get: function () {
            if (this.dualKnobs) {
                return Math.min(this.ratioA, this.ratioB);
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "ratioUpper", {
        get: function () {
            if (this.dualKnobs) {
                return Math.max(this.ratioA, this.ratioB);
            }
            return this.ratioA;
        },
        enumerable: true,
        configurable: true
    });
    class_1.prototype.updateRatio = function () {
        var value = this.getValue();
        var _a = this, min = _a.min, max = _a.max;
        if (this.dualKnobs) {
            this.ratioA = valueToRatio(value.lower, min, max);
            this.ratioB = valueToRatio(value.upper, min, max);
        }
        else {
            this.ratioA = valueToRatio(value, min, max);
        }
    };
    class_1.prototype.updateValue = function () {
        this.noUpdate = true;
        var _a = this, valA = _a.valA, valB = _a.valB;
        this.value = !this.dualKnobs
            ? valA
            : {
                lower: Math.min(valA, valB),
                upper: Math.max(valA, valB)
            };
        this.noUpdate = false;
    };
    class_1.prototype.setFocus = function (knob) {
        if (this.el.shadowRoot) {
            var knobEl = this.el.shadowRoot.querySelector(knob === 'A' ? '.range-knob-a' : '.range-knob-b');
            if (knobEl) {
                knobEl.focus();
            }
        }
    };
    class_1.prototype.render = function () {
        var _a, _b;
        var _this = this;
        var _c = this, min = _c.min, max = _c.max, step = _c.step, el = _c.el, handleKeyboard = _c.handleKeyboard, pressedKnob = _c.pressedKnob, disabled = _c.disabled, pin = _c.pin, ratioLower = _c.ratioLower, ratioUpper = _c.ratioUpper;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var barStart = ratioLower * 100 + "%";
        var barEnd = 100 - ratioUpper * 100 + "%";
        var doc = document;
        var isRTL = doc.dir === 'rtl';
        var start = isRTL ? 'right' : 'left';
        var end = isRTL ? 'left' : 'right';
        var tickStyle = function (tick) {
            var _a;
            return _a = {},
                _a[start] = tick[start],
                _a;
        };
        var barStyle = (_a = {},
            _a[start] = barStart,
            _a[end] = barEnd,
            _a);
        var ticks = [];
        if (this.snaps && this.ticks) {
            for (var value = min; value <= max; value += step) {
                var ratio = valueToRatio(value, min, max);
                var tick = {
                    ratio: ratio,
                    active: ratio >= ratioLower && ratio <= ratioUpper,
                };
                tick[start] = ratio * 100 + "%";
                ticks.push(tick);
            }
        }
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["a"])(true, el, this.name, JSON.stringify(this.getValue()), disabled);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onFocusin: this.onFocus, onFocusout: this.onBlur, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this.color)), (_b = {}, _b[mode] = true, _b['in-item'] = Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["h"])('ion-item', el), _b['range-disabled'] = disabled, _b['range-pressed'] = pressedKnob !== undefined, _b['range-has-pin'] = pin, _b)) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", { name: "start" }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "range-slider", ref: function (rangeEl) { return _this.rangeSlider = rangeEl; } }, ticks.map(function (tick) { return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { style: tickStyle(tick), role: "presentation", class: {
                'range-tick': true,
                'range-tick-active': tick.active
            } })); }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "range-bar", role: "presentation" }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "range-bar range-bar-active", role: "presentation", style: barStyle }), renderKnob(isRTL, {
            knob: 'A',
            pressed: pressedKnob === 'A',
            value: this.valA,
            ratio: this.ratioA,
            pin: pin,
            disabled: disabled,
            handleKeyboard: handleKeyboard,
            min: min,
            max: max
        }), this.dualKnobs && renderKnob(isRTL, {
            knob: 'B',
            pressed: pressedKnob === 'B',
            value: this.valB,
            ratio: this.ratioB,
            pin: pin,
            disabled: disabled,
            handleKeyboard: handleKeyboard,
            min: min,
            max: max
        })), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", { name: "end" })));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "debounce": ["debounceChanged"],
                "min": ["minChanged"],
                "max": ["maxChanged"],
                "disabled": ["disabledChanged"],
                "value": ["valueChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family,inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{right:unset;right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}:host-context([dir=rtl]) .range-bar,[dir=rtl] .range-bar{right:unset;right:0;left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}:host-context([dir=rtl]) .range-knob,[dir=rtl] .range-knob{right:unset;right:calc(50% - var(--knob-size) / 2);left:unset}:host(.range-pressed) .range-bar-active{will-change:left,right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:#fff;--knob-box-shadow:0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb,0,0,0),0.1);--bar-background-active:var(--ion-color-primary,#3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb,0,0,0),.1);pointer-events:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,28px,0) scale(.01);transform:translate3d(0,28px,0) scale(.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform .12s ease;transition:-webkit-transform .12s ease;transition:transform .12s ease;transition:transform .12s ease,-webkit-transform .12s ease;background:transparent;color:var(--ion-text-color,#000);font-size:12px;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin{-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}:host(.range-disabled){opacity:.5}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var renderKnob = function (isRTL, _a) {
    var knob = _a.knob, value = _a.value, ratio = _a.ratio, min = _a.min, max = _a.max, disabled = _a.disabled, pressed = _a.pressed, pin = _a.pin, handleKeyboard = _a.handleKeyboard;
    var start = isRTL ? 'right' : 'left';
    var knobStyle = function () {
        var style = {};
        style[start] = ratio * 100 + "%";
        return style;
    };
    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { onKeyDown: function (ev) {
            var key = ev.key;
            if (key === 'ArrowLeft' || key === 'ArrowDown') {
                handleKeyboard(knob, false);
                ev.preventDefault();
                ev.stopPropagation();
            }
            else if (key === 'ArrowRight' || key === 'ArrowUp') {
                handleKeyboard(knob, true);
                ev.preventDefault();
                ev.stopPropagation();
            }
        }, class: {
            'range-knob-handle': true,
            'range-knob-a': knob === 'A',
            'range-knob-b': knob === 'B',
            'range-knob-pressed': pressed,
            'range-knob-min': value === min,
            'range-knob-max': value === max
        }, style: knobStyle(), role: "slider", tabindex: disabled ? -1 : 0, "aria-valuemin": min, "aria-valuemax": max, "aria-disabled": disabled ? 'true' : null, "aria-valuenow": value }, pin && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "range-pin", role: "presentation" }, Math.round(value)), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "range-knob", role: "presentation" })));
};
var ratioToValue = function (ratio, min, max, step) {
    var value = (max - min) * ratio;
    if (step > 0) {
        value = Math.round(value / step) * step + min;
    }
    return Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["c"])(min, value, max);
};
var valueToRatio = function (value, min, max) {
    return Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["c"])(0, (value - min) / (max - min), 1);
};



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1yYW5nZS1pb3MuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLWVzNS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDOEU7QUFDL0Y7QUFDaUU7QUFDZjtBQUNoRjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDhEQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsOERBQUs7QUFDcEM7QUFDQTtBQUNBLCtCQUErQiw4REFBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJEQUFXO0FBQ3BDLHdCQUF3QiwyREFBVztBQUNuQyx3QkFBd0IsMkRBQVc7QUFDbkMsdUJBQXVCLDJEQUFXO0FBQ2xD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V0FBVyw4REFBSztBQUNoQjtBQUNBO0FBQ0EsV0FBVyw4REFBSztBQUNoQjtBQUM4Qjs7Ozs7Ozs7Ozs7OztBQy9hOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQixFQUFFO0FBQ3RELCtCQUErQixpQkFBaUIsRUFBRTtBQUNsRCxrQ0FBa0MsaUJBQWlCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxzQkFBc0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUSx1REFBUztBQUM5RDtBQUNBLFdBQVcseURBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFO0FBQ2tGIiwiZmlsZSI6IjY2LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgZCBhcyBjcmVhdGVFdmVudCwgYyBhcyBnZXRJb25Nb2RlLCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IGMgYXMgY2xhbXAsIGQgYXMgZGVib3VuY2VFdmVudCwgYSBhcyByZW5kZXJIaWRkZW5JbnB1dCB9IGZyb20gJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcywgaCBhcyBob3N0Q29udGV4dCB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xudmFyIFJhbmdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzEoaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLm5vVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yYXRpb0EgPSAwO1xuICAgICAgICB0aGlzLnJhdGlvQiA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIb3cgbG9uZywgaW4gbWlsbGlzZWNvbmRzLCB0byB3YWl0IHRvIHRyaWdnZXIgdGhlXG4gICAgICAgICAqIGBpb25DaGFuZ2VgIGV2ZW50IGFmdGVyIGVhY2ggY2hhbmdlIGluIHRoZSByYW5nZSB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGVib3VuY2UgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG5hbWUgb2YgdGhlIGNvbnRyb2wsIHdoaWNoIGlzIHN1Ym1pdHRlZCB3aXRoIHRoZSBmb3JtIGRhdGEuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hbWUgPSAnJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3cgdHdvIGtub2JzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kdWFsS25vYnMgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1pbmltdW0gaW50ZWdlciB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1pbiA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXhpbXVtIGludGVnZXIgdmFsdWUgb2YgdGhlIHJhbmdlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tYXggPSAxMDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIGEgcGluIHdpdGggaW50ZWdlciB2YWx1ZSBpcyBzaG93biB3aGVuIHRoZSBrbm9iXG4gICAgICAgICAqIGlzIHByZXNzZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBpbiA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUga25vYiBzbmFwcyB0byB0aWNrIG1hcmtzIGV2ZW5seSBzcGFjZWQgYmFzZWRcbiAgICAgICAgICogb24gdGhlIHN0ZXAgcHJvcGVydHkgdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNuYXBzID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTcGVjaWZpZXMgdGhlIHZhbHVlIGdyYW51bGFyaXR5LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdGVwID0gMTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGljayBtYXJrcyBhcmUgZGlzcGxheWVkIGJhc2VkIG9uIHRoZSBzdGVwIHZhbHVlLlxuICAgICAgICAgKiBPbmx5IGFwcGxpZXMgd2hlbiBgc25hcHNgIGlzIGB0cnVlYC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGlja3MgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgcmFuZ2UuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0aGUgdmFsdWUgb2YgdGhlIHJhbmdlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52YWx1ZSA9IDA7XG4gICAgICAgIHRoaXMuY2xhbXBCb3VuZHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGFtcChfdGhpcy5taW4sIHZhbHVlLCBfdGhpcy5tYXgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVuc3VyZVZhbHVlSW5Cb3VuZHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5kdWFsS25vYnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBsb3dlcjogX3RoaXMuY2xhbXBCb3VuZHModmFsdWUubG93ZXIpLFxuICAgICAgICAgICAgICAgICAgICB1cHBlcjogX3RoaXMuY2xhbXBCb3VuZHModmFsdWUudXBwZXIpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5jbGFtcEJvdW5kcyh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlS2V5Ym9hcmQgPSBmdW5jdGlvbiAoa25vYiwgaXNJbmNyZWFzZSkge1xuICAgICAgICAgICAgdmFyIHN0ZXAgPSBfdGhpcy5zdGVwO1xuICAgICAgICAgICAgc3RlcCA9IHN0ZXAgPiAwID8gc3RlcCA6IDE7XG4gICAgICAgICAgICBzdGVwID0gc3RlcCAvIChfdGhpcy5tYXggLSBfdGhpcy5taW4pO1xuICAgICAgICAgICAgaWYgKCFpc0luY3JlYXNlKSB7XG4gICAgICAgICAgICAgICAgc3RlcCAqPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrbm9iID09PSAnQScpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yYXRpb0EgPSBjbGFtcCgwLCBfdGhpcy5yYXRpb0EgKyBzdGVwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLnJhdGlvQiA9IGNsYW1wKDAsIF90aGlzLnJhdGlvQiArIHN0ZXAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMudXBkYXRlVmFsdWUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuaGFzRm9jdXMpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIF90aGlzLmlvbkJsdXIuZW1pdCgpO1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXRTdHlsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIV90aGlzLmhhc0ZvY3VzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaGFzRm9jdXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLmlvbkZvY3VzLmVtaXQoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0U3R5bGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkNoYW5nZVwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TdHlsZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU3R5bGVcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uRm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkZvY3VzXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJsdXJcIiwgNyk7XG4gICAgfVxuICAgIGNsYXNzXzEucHJvdG90eXBlLmRlYm91bmNlQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UgPSBkZWJvdW5jZUV2ZW50KHRoaXMuaW9uQ2hhbmdlLCB0aGlzLmRlYm91bmNlKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm1pbkNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5ub1VwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVSYXRpbygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5tYXhDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMubm9VcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmF0aW8oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZGlzYWJsZWRDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuc2V0RGlzYWJsZWQodGhpcy5kaXNhYmxlZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnZhbHVlQ2hhbmdlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMubm9VcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmF0aW8oKTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IHRoaXMuZW5zdXJlVmFsdWVJbkJvdW5kcyh2YWx1ZSk7XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlLmVtaXQoeyB2YWx1ZTogdmFsdWUgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVSYXRpbygpO1xuICAgICAgICB0aGlzLmRlYm91bmNlQ2hhbmdlZCgpO1xuICAgICAgICB0aGlzLmRpc2FibGVkQ2hhbmdlZCgpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZGlzY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbXBvbmVudERpZExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByYW5nZVNsaWRlciwgX2E7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VTbGlkZXIgPSB0aGlzLnJhbmdlU2xpZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyYW5nZVNsaWRlcikgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbXBvcnQoJy4vaW5kZXgtNjI0ZWVhNTguanMnKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmdlc3R1cmUgPSAoX2Iuc2VudCgpKS5jcmVhdGVHZXN0dXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbDogcmFuZ2VTbGlkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VzdHVyZU5hbWU6ICdyYW5nZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VzdHVyZVByaW9yaXR5OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3RhcnQ6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMub25TdGFydChldik7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLm9uTW92ZShldik7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FbmQ6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMub25FbmQoZXYpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlc3R1cmUuc2V0RGlzYWJsZWQodGhpcy5kaXNhYmxlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlIHx8IDA7XG4gICAgICAgIGlmICh0aGlzLmR1YWxLbm9icykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxvd2VyOiAwLFxuICAgICAgICAgICAgICAgIHVwcGVyOiB2YWx1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnVwcGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5lbWl0U3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUuZW1pdCh7XG4gICAgICAgICAgICAnaW50ZXJhY3RpdmUnOiB0cnVlLFxuICAgICAgICAgICAgJ2ludGVyYWN0aXZlLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiAoZGV0YWlsKSB7XG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5yZWN0ID0gdGhpcy5yYW5nZVNsaWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIGN1cnJlbnRYID0gZGV0YWlsLmN1cnJlbnRYO1xuICAgICAgICAvLyBmaWd1cmUgb3V0IHdoaWNoIGtub2IgdGhleSBzdGFydGVkIGNsb3NlciB0b1xuICAgICAgICB2YXIgcmF0aW8gPSBjbGFtcCgwLCAoY3VycmVudFggLSByZWN0LmxlZnQpIC8gcmVjdC53aWR0aCwgMSk7XG4gICAgICAgIGlmIChkb2N1bWVudC5kaXIgPT09ICdydGwnKSB7XG4gICAgICAgICAgICByYXRpbyA9IDEgLSByYXRpbztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXNzZWRLbm9iID1cbiAgICAgICAgICAgICF0aGlzLmR1YWxLbm9icyB8fFxuICAgICAgICAgICAgICAgIE1hdGguYWJzKHRoaXMucmF0aW9BIC0gcmF0aW8pIDwgTWF0aC5hYnModGhpcy5yYXRpb0IgLSByYXRpbylcbiAgICAgICAgICAgICAgICA/ICdBJ1xuICAgICAgICAgICAgICAgIDogJ0InO1xuICAgICAgICB0aGlzLnNldEZvY3VzKHRoaXMucHJlc3NlZEtub2IpO1xuICAgICAgICAvLyB1cGRhdGUgdGhlIGFjdGl2ZSBrbm9iJ3MgcG9zaXRpb25cbiAgICAgICAgdGhpcy51cGRhdGUoY3VycmVudFgpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25Nb3ZlID0gZnVuY3Rpb24gKGRldGFpbCkge1xuICAgICAgICB0aGlzLnVwZGF0ZShkZXRhaWwuY3VycmVudFgpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25FbmQgPSBmdW5jdGlvbiAoZGV0YWlsKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKGRldGFpbC5jdXJyZW50WCk7XG4gICAgICAgIHRoaXMucHJlc3NlZEtub2IgPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoY3VycmVudFgpIHtcbiAgICAgICAgLy8gZmlndXJlIG91dCB3aGVyZSB0aGUgcG9pbnRlciBpcyBjdXJyZW50bHkgYXRcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBrbm9iIGJlaW5nIGludGVyYWN0ZWQgd2l0aFxuICAgICAgICB2YXIgcmVjdCA9IHRoaXMucmVjdDtcbiAgICAgICAgdmFyIHJhdGlvID0gY2xhbXAoMCwgKGN1cnJlbnRYIC0gcmVjdC5sZWZ0KSAvIHJlY3Qud2lkdGgsIDEpO1xuICAgICAgICBpZiAoZG9jdW1lbnQuZGlyID09PSAncnRsJykge1xuICAgICAgICAgICAgcmF0aW8gPSAxIC0gcmF0aW87XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc25hcHMpIHtcbiAgICAgICAgICAgIC8vIHNuYXBzIHRoZSByYXRpbyB0byB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgcmF0aW8gPSB2YWx1ZVRvUmF0aW8ocmF0aW9Ub1ZhbHVlKHJhdGlvLCB0aGlzLm1pbiwgdGhpcy5tYXgsIHRoaXMuc3RlcCksIHRoaXMubWluLCB0aGlzLm1heCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXBkYXRlIHdoaWNoIGtub2IgaXMgcHJlc3NlZFxuICAgICAgICBpZiAodGhpcy5wcmVzc2VkS25vYiA9PT0gJ0EnKSB7XG4gICAgICAgICAgICB0aGlzLnJhdGlvQSA9IHJhdGlvO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yYXRpb0IgPSByYXRpbztcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGUgaW5wdXQgdmFsdWVcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcInZhbEFcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiByYXRpb1RvVmFsdWUodGhpcy5yYXRpb0EsIHRoaXMubWluLCB0aGlzLm1heCwgdGhpcy5zdGVwKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcInZhbEJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiByYXRpb1RvVmFsdWUodGhpcy5yYXRpb0IsIHRoaXMubWluLCB0aGlzLm1heCwgdGhpcy5zdGVwKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcInJhdGlvTG93ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmR1YWxLbm9icykge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnJhdGlvQSwgdGhpcy5yYXRpb0IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJyYXRpb1VwcGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kdWFsS25vYnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5yYXRpb0EsIHRoaXMucmF0aW9CKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhdGlvQTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgY2xhc3NfMS5wcm90b3R5cGUudXBkYXRlUmF0aW8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgICAgdmFyIF9hID0gdGhpcywgbWluID0gX2EubWluLCBtYXggPSBfYS5tYXg7XG4gICAgICAgIGlmICh0aGlzLmR1YWxLbm9icykge1xuICAgICAgICAgICAgdGhpcy5yYXRpb0EgPSB2YWx1ZVRvUmF0aW8odmFsdWUubG93ZXIsIG1pbiwgbWF4KTtcbiAgICAgICAgICAgIHRoaXMucmF0aW9CID0gdmFsdWVUb1JhdGlvKHZhbHVlLnVwcGVyLCBtaW4sIG1heCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJhdGlvQSA9IHZhbHVlVG9SYXRpbyh2YWx1ZSwgbWluLCBtYXgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS51cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ub1VwZGF0ZSA9IHRydWU7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIHZhbEEgPSBfYS52YWxBLCB2YWxCID0gX2EudmFsQjtcbiAgICAgICAgdGhpcy52YWx1ZSA9ICF0aGlzLmR1YWxLbm9ic1xuICAgICAgICAgICAgPyB2YWxBXG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBsb3dlcjogTWF0aC5taW4odmFsQSwgdmFsQiksXG4gICAgICAgICAgICAgICAgdXBwZXI6IE1hdGgubWF4KHZhbEEsIHZhbEIpXG4gICAgICAgICAgICB9O1xuICAgICAgICB0aGlzLm5vVXBkYXRlID0gZmFsc2U7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5zZXRGb2N1cyA9IGZ1bmN0aW9uIChrbm9iKSB7XG4gICAgICAgIGlmICh0aGlzLmVsLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICAgIHZhciBrbm9iRWwgPSB0aGlzLmVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcihrbm9iID09PSAnQScgPyAnLnJhbmdlLWtub2ItYScgOiAnLnJhbmdlLWtub2ItYicpO1xuICAgICAgICAgICAgaWYgKGtub2JFbCkge1xuICAgICAgICAgICAgICAgIGtub2JFbC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYyA9IHRoaXMsIG1pbiA9IF9jLm1pbiwgbWF4ID0gX2MubWF4LCBzdGVwID0gX2Muc3RlcCwgZWwgPSBfYy5lbCwgaGFuZGxlS2V5Ym9hcmQgPSBfYy5oYW5kbGVLZXlib2FyZCwgcHJlc3NlZEtub2IgPSBfYy5wcmVzc2VkS25vYiwgZGlzYWJsZWQgPSBfYy5kaXNhYmxlZCwgcGluID0gX2MucGluLCByYXRpb0xvd2VyID0gX2MucmF0aW9Mb3dlciwgcmF0aW9VcHBlciA9IF9jLnJhdGlvVXBwZXI7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgdmFyIGJhclN0YXJ0ID0gcmF0aW9Mb3dlciAqIDEwMCArIFwiJVwiO1xuICAgICAgICB2YXIgYmFyRW5kID0gMTAwIC0gcmF0aW9VcHBlciAqIDEwMCArIFwiJVwiO1xuICAgICAgICB2YXIgZG9jID0gZG9jdW1lbnQ7XG4gICAgICAgIHZhciBpc1JUTCA9IGRvYy5kaXIgPT09ICdydGwnO1xuICAgICAgICB2YXIgc3RhcnQgPSBpc1JUTCA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgICAgIHZhciBlbmQgPSBpc1JUTCA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgICAgIHZhciB0aWNrU3R5bGUgPSBmdW5jdGlvbiAodGljaykge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgcmV0dXJuIF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2Fbc3RhcnRdID0gdGlja1tzdGFydF0sXG4gICAgICAgICAgICAgICAgX2E7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBiYXJTdHlsZSA9IChfYSA9IHt9LFxuICAgICAgICAgICAgX2Fbc3RhcnRdID0gYmFyU3RhcnQsXG4gICAgICAgICAgICBfYVtlbmRdID0gYmFyRW5kLFxuICAgICAgICAgICAgX2EpO1xuICAgICAgICB2YXIgdGlja3MgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuc25hcHMgJiYgdGhpcy50aWNrcykge1xuICAgICAgICAgICAgZm9yICh2YXIgdmFsdWUgPSBtaW47IHZhbHVlIDw9IG1heDsgdmFsdWUgKz0gc3RlcCkge1xuICAgICAgICAgICAgICAgIHZhciByYXRpbyA9IHZhbHVlVG9SYXRpbyh2YWx1ZSwgbWluLCBtYXgpO1xuICAgICAgICAgICAgICAgIHZhciB0aWNrID0ge1xuICAgICAgICAgICAgICAgICAgICByYXRpbzogcmF0aW8sXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcmF0aW8gPj0gcmF0aW9Mb3dlciAmJiByYXRpbyA8PSByYXRpb1VwcGVyLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGlja1tzdGFydF0gPSByYXRpbyAqIDEwMCArIFwiJVwiO1xuICAgICAgICAgICAgICAgIHRpY2tzLnB1c2godGljayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVySGlkZGVuSW5wdXQodHJ1ZSwgZWwsIHRoaXMubmFtZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRWYWx1ZSgpKSwgZGlzYWJsZWQpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkZvY3VzaW46IHRoaXMub25Gb2N1cywgb25Gb2N1c291dDogdGhpcy5vbkJsdXIsIGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yKSksIChfYiA9IHt9LCBfYlttb2RlXSA9IHRydWUsIF9iWydpbi1pdGVtJ10gPSBob3N0Q29udGV4dCgnaW9uLWl0ZW0nLCBlbCksIF9iWydyYW5nZS1kaXNhYmxlZCddID0gZGlzYWJsZWQsIF9iWydyYW5nZS1wcmVzc2VkJ10gPSBwcmVzc2VkS25vYiAhPT0gdW5kZWZpbmVkLCBfYlsncmFuZ2UtaGFzLXBpbiddID0gcGluLCBfYikpIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogXCJzdGFydFwiIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicmFuZ2Utc2xpZGVyXCIsIHJlZjogZnVuY3Rpb24gKHJhbmdlRWwpIHsgcmV0dXJuIF90aGlzLnJhbmdlU2xpZGVyID0gcmFuZ2VFbDsgfSB9LCB0aWNrcy5tYXAoZnVuY3Rpb24gKHRpY2spIHsgcmV0dXJuIChoKFwiZGl2XCIsIHsgc3R5bGU6IHRpY2tTdHlsZSh0aWNrKSwgcm9sZTogXCJwcmVzZW50YXRpb25cIiwgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAncmFuZ2UtdGljayc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ3JhbmdlLXRpY2stYWN0aXZlJzogdGljay5hY3RpdmVcbiAgICAgICAgICAgIH0gfSkpOyB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInJhbmdlLWJhclwiLCByb2xlOiBcInByZXNlbnRhdGlvblwiIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicmFuZ2UtYmFyIHJhbmdlLWJhci1hY3RpdmVcIiwgcm9sZTogXCJwcmVzZW50YXRpb25cIiwgc3R5bGU6IGJhclN0eWxlIH0pLCByZW5kZXJLbm9iKGlzUlRMLCB7XG4gICAgICAgICAgICBrbm9iOiAnQScsXG4gICAgICAgICAgICBwcmVzc2VkOiBwcmVzc2VkS25vYiA9PT0gJ0EnLFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsQSxcbiAgICAgICAgICAgIHJhdGlvOiB0aGlzLnJhdGlvQSxcbiAgICAgICAgICAgIHBpbjogcGluLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgICAgaGFuZGxlS2V5Ym9hcmQ6IGhhbmRsZUtleWJvYXJkLFxuICAgICAgICAgICAgbWluOiBtaW4sXG4gICAgICAgICAgICBtYXg6IG1heFxuICAgICAgICB9KSwgdGhpcy5kdWFsS25vYnMgJiYgcmVuZGVyS25vYihpc1JUTCwge1xuICAgICAgICAgICAga25vYjogJ0InLFxuICAgICAgICAgICAgcHJlc3NlZDogcHJlc3NlZEtub2IgPT09ICdCJyxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbEIsXG4gICAgICAgICAgICByYXRpbzogdGhpcy5yYXRpb0IsXG4gICAgICAgICAgICBwaW46IHBpbixcbiAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICAgIGhhbmRsZUtleWJvYXJkOiBoYW5kbGVLZXlib2FyZCxcbiAgICAgICAgICAgIG1pbjogbWluLFxuICAgICAgICAgICAgbWF4OiBtYXhcbiAgICAgICAgfSkpLCBoKFwic2xvdFwiLCB7IG5hbWU6IFwiZW5kXCIgfSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEsIFwid2F0Y2hlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJkZWJvdW5jZVwiOiBbXCJkZWJvdW5jZUNoYW5nZWRcIl0sXG4gICAgICAgICAgICAgICAgXCJtaW5cIjogW1wibWluQ2hhbmdlZFwiXSxcbiAgICAgICAgICAgICAgICBcIm1heFwiOiBbXCJtYXhDaGFuZ2VkXCJdLFxuICAgICAgICAgICAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogW1widmFsdWVDaGFuZ2VkXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCI6aG9zdHstLWtub2ItaGFuZGxlLXNpemU6Y2FsYyh2YXIoLS1rbm9iLXNpemUpICogMik7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MztmbGV4OjM7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCk7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6Mn06aG9zdCgucmFuZ2UtZGlzYWJsZWQpe3BvaW50ZXItZXZlbnRzOm5vbmV9OjpzbG90dGVkKGlvbi1sYWJlbCl7LW1zLWZsZXg6aW5pdGlhbDtmbGV4OmluaXRpYWx9OjpzbG90dGVkKGlvbi1pY29uW3Nsb3RdKXtmb250LXNpemU6MjRweH0ucmFuZ2Utc2xpZGVye3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4OjE7ZmxleDoxO3dpZHRoOjEwMCU7aGVpZ2h0OnZhcigtLWhlaWdodCk7Y29udGFpbjpzaXplIGxheW91dCBzdHlsZTtjdXJzb3I6LXdlYmtpdC1ncmFiO2N1cnNvcjpncmFiOy1tcy10b3VjaC1hY3Rpb246cGFuLXk7dG91Y2gtYWN0aW9uOnBhbi15fTpob3N0KC5yYW5nZS1wcmVzc2VkKSAucmFuZ2Utc2xpZGVye2N1cnNvcjotd2Via2l0LWdyYWJiaW5nO2N1cnNvcjpncmFiYmluZ30ucmFuZ2UtcGlue3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCk7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5yYW5nZS1rbm9iLWhhbmRsZXtsZWZ0OjA7dG9wOmNhbGMoKHZhcigtLWhlaWdodCkgLSB2YXIoLS1rbm9iLWhhbmRsZS1zaXplKSkgLyAyKTttYXJnaW4tbGVmdDpjYWxjKDBweCAtIHZhcigtLWtub2ItaGFuZGxlLXNpemUpIC8gMik7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6dmFyKC0ta25vYi1oYW5kbGUtc2l6ZSk7aGVpZ2h0OnZhcigtLWtub2ItaGFuZGxlLXNpemUpO3RleHQtYWxpZ246Y2VudGVyfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAucmFuZ2Uta25vYi1oYW5kbGUsW2Rpcj1ydGxdIC5yYW5nZS1rbm9iLWhhbmRsZXtyaWdodDp1bnNldDtyaWdodDowfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsucmFuZ2Uta25vYi1oYW5kbGV7bWFyZ2luLWxlZnQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6Y2FsYygwcHggLSB2YXIoLS1rbm9iLWhhbmRsZS1zaXplKSAvIDIpO21hcmdpbi1pbmxpbmUtc3RhcnQ6Y2FsYygwcHggLSB2YXIoLS1rbm9iLWhhbmRsZS1zaXplKSAvIDIpfX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnJhbmdlLWtub2ItaGFuZGxlLFtkaXI9cnRsXSAucmFuZ2Uta25vYi1oYW5kbGV7bGVmdDp1bnNldH0ucmFuZ2Uta25vYi1oYW5kbGU6YWN0aXZlLC5yYW5nZS1rbm9iLWhhbmRsZTpmb2N1c3tvdXRsaW5lOm5vbmV9LnJhbmdlLWJhcntib3JkZXItcmFkaXVzOnZhcigtLWJhci1ib3JkZXItcmFkaXVzKTtsZWZ0OjA7dG9wOmNhbGMoKHZhcigtLWhlaWdodCkgLSB2YXIoLS1iYXItaGVpZ2h0KSkgLyAyKTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDp2YXIoLS1iYXItaGVpZ2h0KTtiYWNrZ3JvdW5kOnZhcigtLWJhci1iYWNrZ3JvdW5kKTtwb2ludGVyLWV2ZW50czpub25lfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAucmFuZ2UtYmFyLFtkaXI9cnRsXSAucmFuZ2UtYmFye3JpZ2h0OnVuc2V0O3JpZ2h0OjA7bGVmdDp1bnNldH0ucmFuZ2Uta25vYntib3JkZXItcmFkaXVzOnZhcigtLWtub2ItYm9yZGVyLXJhZGl1cyk7bGVmdDpjYWxjKDUwJSAtIHZhcigtLWtub2Itc2l6ZSkgLyAyKTt0b3A6Y2FsYyg1MCUgLSB2YXIoLS1rbm9iLXNpemUpIC8gMik7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6dmFyKC0ta25vYi1zaXplKTtoZWlnaHQ6dmFyKC0ta25vYi1zaXplKTtiYWNrZ3JvdW5kOnZhcigtLWtub2ItYmFja2dyb3VuZCk7LXdlYmtpdC1ib3gtc2hhZG93OnZhcigtLWtub2ItYm94LXNoYWRvdyk7Ym94LXNoYWRvdzp2YXIoLS1rbm9iLWJveC1zaGFkb3cpO3otaW5kZXg6Mjtwb2ludGVyLWV2ZW50czpub25lfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAucmFuZ2Uta25vYixbZGlyPXJ0bF0gLnJhbmdlLWtub2J7cmlnaHQ6dW5zZXQ7cmlnaHQ6Y2FsYyg1MCUgLSB2YXIoLS1rbm9iLXNpemUpIC8gMik7bGVmdDp1bnNldH06aG9zdCgucmFuZ2UtcHJlc3NlZCkgLnJhbmdlLWJhci1hY3RpdmV7d2lsbC1jaGFuZ2U6bGVmdCxyaWdodH06aG9zdCguaW4taXRlbSl7d2lkdGg6MTAwJX06aG9zdCguaW4taXRlbSkgOjpzbG90dGVkKGlvbi1sYWJlbCl7LW1zLWZsZXgtaXRlbS1hbGlnbjpjZW50ZXI7YWxpZ24tc2VsZjpjZW50ZXJ9Omhvc3R7LS1rbm9iLWJvcmRlci1yYWRpdXM6NTAlOy0ta25vYi1iYWNrZ3JvdW5kOiNmZmY7LS1rbm9iLWJveC1zaGFkb3c6MCAzcHggMXB4IHJnYmEoMCwwLDAsMC4xKSwwIDRweCA4cHggcmdiYSgwLDAsMCwwLjEzKSwwIDAgMCAxcHggcmdiYSgwLDAsMCwwLjAyKTstLWtub2Itc2l6ZToyOHB4Oy0tYmFyLWhlaWdodDoycHg7LS1iYXItYmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksMC4xKTstLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTstLWJhci1ib3JkZXItcmFkaXVzOjA7LS1oZWlnaHQ6NDJweDtwYWRkaW5nLWxlZnQ6MTZweDtwYWRkaW5nLXJpZ2h0OjE2cHg7cGFkZGluZy10b3A6OHB4O3BhZGRpbmctYm90dG9tOjhweH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3R7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjE2cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTZweDstd2Via2l0LXBhZGRpbmctZW5kOjE2cHg7cGFkZGluZy1pbmxpbmUtZW5kOjE2cHh9fTpob3N0KC5pb24tY29sb3IpIC5yYW5nZS1iYXItYWN0aXZlLDpob3N0KC5pb24tY29sb3IpIC5yYW5nZS10aWNrLWFjdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX06OnNsb3R0ZWQoW3Nsb3Q9c3RhcnRdKXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDoxNnB4O21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezo6c2xvdHRlZChbc2xvdD1zdGFydF0pe21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MDstd2Via2l0LW1hcmdpbi1lbmQ6MTZweDttYXJnaW4taW5saW5lLWVuZDoxNnB4fX06OnNsb3R0ZWQoW3Nsb3Q9ZW5kXSl7bWFyZ2luLWxlZnQ6MTZweDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6OnNsb3R0ZWQoW3Nsb3Q9ZW5kXSl7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjE2cHg7bWFyZ2luLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtbWFyZ2luLWVuZDowO21hcmdpbi1pbmxpbmUtZW5kOjB9fTpob3N0KC5yYW5nZS1oYXMtcGluKXtwYWRkaW5nLXRvcDoyMHB4fS5yYW5nZS1iYXItYWN0aXZle2JvdHRvbTowO3dpZHRoOmF1dG87YmFja2dyb3VuZDp2YXIoLS1iYXItYmFja2dyb3VuZC1hY3RpdmUpfS5yYW5nZS10aWNre21hcmdpbi1sZWZ0Oi0xcHg7Ym9yZGVyLXJhZGl1czowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxOHB4O3dpZHRoOjJweDtoZWlnaHQ6OHB4O2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC4xKTtwb2ludGVyLWV2ZW50czpub25lfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsucmFuZ2UtdGlja3ttYXJnaW4tbGVmdDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDotMXB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6LTFweH19LnJhbmdlLXRpY2stYWN0aXZle2JhY2tncm91bmQ6dmFyKC0tYmFyLWJhY2tncm91bmQtYWN0aXZlKX0ucmFuZ2UtcGluey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjhweCwwKSBzY2FsZSguMDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDI4cHgsMCkgc2NhbGUoLjAxKTtwYWRkaW5nLWxlZnQ6OHB4O3BhZGRpbmctcmlnaHQ6OHB4O3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7dG9wOi0yMHB4O21pbi13aWR0aDoyOHB4Oy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMTJzIGVhc2U7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMTJzIGVhc2U7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjEycyBlYXNlO3RyYW5zaXRpb246dHJhbnNmb3JtIC4xMnMgZWFzZSwtd2Via2l0LXRyYW5zZm9ybSAuMTJzIGVhc2U7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKTtmb250LXNpemU6MTJweDt0ZXh0LWFsaWduOmNlbnRlcn1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LnJhbmdlLXBpbntwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6OHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjhweDstd2Via2l0LXBhZGRpbmctZW5kOjhweDtwYWRkaW5nLWlubGluZS1lbmQ6OHB4fX0ucmFuZ2Uta25vYi1wcmVzc2VkIC5yYW5nZS1waW57LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKSBzY2FsZSgxKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKSBzY2FsZSgxKX06aG9zdCgucmFuZ2UtZGlzYWJsZWQpe29wYWNpdHk6LjV9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbnZhciByZW5kZXJLbm9iID0gZnVuY3Rpb24gKGlzUlRMLCBfYSkge1xuICAgIHZhciBrbm9iID0gX2Eua25vYiwgdmFsdWUgPSBfYS52YWx1ZSwgcmF0aW8gPSBfYS5yYXRpbywgbWluID0gX2EubWluLCBtYXggPSBfYS5tYXgsIGRpc2FibGVkID0gX2EuZGlzYWJsZWQsIHByZXNzZWQgPSBfYS5wcmVzc2VkLCBwaW4gPSBfYS5waW4sIGhhbmRsZUtleWJvYXJkID0gX2EuaGFuZGxlS2V5Ym9hcmQ7XG4gICAgdmFyIHN0YXJ0ID0gaXNSVEwgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIHZhciBrbm9iU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdHlsZSA9IHt9O1xuICAgICAgICBzdHlsZVtzdGFydF0gPSByYXRpbyAqIDEwMCArIFwiJVwiO1xuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgfTtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBvbktleURvd246IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIGtleSA9IGV2LmtleTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdBcnJvd0xlZnQnIHx8IGtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVLZXlib2FyZChrbm9iLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93UmlnaHQnIHx8IGtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlS2V5Ym9hcmQoa25vYiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgY2xhc3M6IHtcbiAgICAgICAgICAgICdyYW5nZS1rbm9iLWhhbmRsZSc6IHRydWUsXG4gICAgICAgICAgICAncmFuZ2Uta25vYi1hJzoga25vYiA9PT0gJ0EnLFxuICAgICAgICAgICAgJ3JhbmdlLWtub2ItYic6IGtub2IgPT09ICdCJyxcbiAgICAgICAgICAgICdyYW5nZS1rbm9iLXByZXNzZWQnOiBwcmVzc2VkLFxuICAgICAgICAgICAgJ3JhbmdlLWtub2ItbWluJzogdmFsdWUgPT09IG1pbixcbiAgICAgICAgICAgICdyYW5nZS1rbm9iLW1heCc6IHZhbHVlID09PSBtYXhcbiAgICAgICAgfSwgc3R5bGU6IGtub2JTdHlsZSgpLCByb2xlOiBcInNsaWRlclwiLCB0YWJpbmRleDogZGlzYWJsZWQgPyAtMSA6IDAsIFwiYXJpYS12YWx1ZW1pblwiOiBtaW4sIFwiYXJpYS12YWx1ZW1heFwiOiBtYXgsIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/ICd0cnVlJyA6IG51bGwsIFwiYXJpYS12YWx1ZW5vd1wiOiB2YWx1ZSB9LCBwaW4gJiYgaChcImRpdlwiLCB7IGNsYXNzOiBcInJhbmdlLXBpblwiLCByb2xlOiBcInByZXNlbnRhdGlvblwiIH0sIE1hdGgucm91bmQodmFsdWUpKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInJhbmdlLWtub2JcIiwgcm9sZTogXCJwcmVzZW50YXRpb25cIiB9KSkpO1xufTtcbnZhciByYXRpb1RvVmFsdWUgPSBmdW5jdGlvbiAocmF0aW8sIG1pbiwgbWF4LCBzdGVwKSB7XG4gICAgdmFyIHZhbHVlID0gKG1heCAtIG1pbikgKiByYXRpbztcbiAgICBpZiAoc3RlcCA+IDApIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlIC8gc3RlcCkgKiBzdGVwICsgbWluO1xuICAgIH1cbiAgICByZXR1cm4gY2xhbXAobWluLCB2YWx1ZSwgbWF4KTtcbn07XG52YXIgdmFsdWVUb1JhdGlvID0gZnVuY3Rpb24gKHZhbHVlLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBjbGFtcCgwLCAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbiksIDEpO1xufTtcbmV4cG9ydCB7IFJhbmdlIGFzIGlvbl9yYW5nZSB9O1xuIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xudmFyIGhvc3RDb250ZXh0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBlbCkge1xuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcbn07XG4vKipcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cbiAqL1xudmFyIGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyAoX2EgPSB7XG4gICAgICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBfYVtcImlvbi1jb2xvci1cIiArIGNvbG9yXSA9IHRydWUsXG4gICAgICAgIF9hKSA6IHVuZGVmaW5lZDtcbn07XG52YXIgZ2V0Q2xhc3NMaXN0ID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT0gbnVsbDsgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudHJpbSgpOyB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPT0gJyc7IH0pO1xuICAgIH1cbiAgICByZXR1cm4gW107XG59O1xudmFyIGdldENsYXNzTWFwID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG1hcFtjXSA9IHRydWU7IH0pO1xuICAgIHJldHVybiBtYXA7XG59O1xudmFyIFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xudmFyIG9wZW5VUkwgPSBmdW5jdGlvbiAodXJsLCBldiwgZGlyZWN0aW9uKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByb3V0ZXI7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcbiAgICAgICAgICAgIHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcbiAgICAgICAgICAgIGlmIChyb3V0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgIH0pO1xufSk7IH07XG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9