(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-range-md.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-range-md.entry.js ***!
  \*********************************************************************/
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
        get: function () { return ":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family,inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{right:unset;right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}:host-context([dir=rtl]) .range-bar,[dir=rtl] .range-bar{right:unset;right:0;left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);pointer-events:none}:host-context([dir=rtl]) .range-knob,[dir=rtl] .range-knob{right:unset;right:calc(50% - var(--knob-size) / 2);left:unset}:host(.range-pressed) .range-bar-active{will-change:left,right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb,56,128,255),0.26);--bar-background-active:var(--ion-color-primary,#3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary,#3880ff);--pin-color:var(--ion-color-primary-contrast,#fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb),.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin:before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(.67);transform:scale(.67);-webkit-transition-duration:.12s;transition-duration:.12s;-webkit-transition-property:background-color,border,-webkit-transform;transition-property:background-color,border,-webkit-transform;transition-property:transform,background-color,border;transition-property:transform,background-color,border,-webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translateZ(0) scale(.01);transform:translateZ(0) scale(.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background .12s ease,-webkit-transform .12s ease;transition:background .12s ease,-webkit-transform .12s ease;transition:transform .12s ease,background .12s ease;transition:transform .12s ease,background .12s ease,-webkit-transform .12s ease;color:var(--pin-color);text-align:center}.range-pin,.range-pin:before{background:var(--pin-background)}.range-pin:before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background .12s ease;transition:background .12s ease;content:\"\";z-index:-1}:host-context([dir=rtl]) .range-pin:before,[dir=rtl] .range-pin:before{right:unset;right:50%}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-pin:before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}:host-context([dir=rtl]) .range-pin:before,[dir=rtl] .range-pin:before{left:unset}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,-24px,0) scale(1);transform:translate3d(0,-24px,0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar,:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-knob,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250,#bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(.55);transform:scale(.55);outline:5px solid #fff}"; },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1yYW5nZS1tZC5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUM4RTtBQUMvRjtBQUNpRTtBQUNmO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsOERBQUs7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw4REFBSztBQUNwQztBQUNBO0FBQ0EsK0JBQStCLDhEQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkRBQVc7QUFDcEMsd0JBQXdCLDJEQUFXO0FBQ25DLHdCQUF3QiwyREFBVztBQUNuQyx1QkFBdUIsMkRBQVc7QUFDbEM7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QUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkRBQUMsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsa0xBQWtMLFNBQVMsMkRBQUMsU0FBUywyQ0FBMkMsc0JBQXNCLDJEQUFDLFNBQVMsNENBQTRDO0FBQ3JVO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOERBQUs7QUFDaEI7QUFDQTtBQUNBLFdBQVcsOERBQUs7QUFDaEI7QUFDOEI7Ozs7Ozs7Ozs7Ozs7QUMvYTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxrQkFBa0IsRUFBRTtBQUN0RCwrQkFBK0IsaUJBQWlCLEVBQUU7QUFDbEQsa0NBQWtDLGlCQUFpQixFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Qsc0JBQXNCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFFBQVEsdURBQVM7QUFDOUQ7QUFDQSxXQUFXLHlEQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNrRiIsImZpbGUiOiI2Ny5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGQgYXMgY3JlYXRlRXZlbnQsIGMgYXMgZ2V0SW9uTW9kZSwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtZmVlZWZmMGQuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNsYW1wLCBkIGFzIGRlYm91bmNlRXZlbnQsIGEgYXMgcmVuZGVySGlkZGVuSW5wdXQgfSBmcm9tICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMsIGggYXMgaG9zdENvbnRleHQgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcbnZhciBSYW5nZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18xKGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5ub1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmF0aW9BID0gMDtcbiAgICAgICAgdGhpcy5yYXRpb0IgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogSG93IGxvbmcsIGluIG1pbGxpc2Vjb25kcywgdG8gd2FpdCB0byB0cmlnZ2VyIHRoZVxuICAgICAgICAgKiBgaW9uQ2hhbmdlYCBldmVudCBhZnRlciBlYWNoIGNoYW5nZSBpbiB0aGUgcmFuZ2UgdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRlYm91bmNlID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBjb250cm9sLCB3aGljaCBpcyBzdWJtaXR0ZWQgd2l0aCB0aGUgZm9ybSBkYXRhLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uYW1lID0gJyc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG93IHR3byBrbm9icy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZHVhbEtub2JzID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNaW5pbXVtIGludGVnZXIgdmFsdWUgb2YgdGhlIHJhbmdlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5taW4gPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogTWF4aW11bSBpbnRlZ2VyIHZhbHVlIG9mIHRoZSByYW5nZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubWF4ID0gMTAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBhIHBpbiB3aXRoIGludGVnZXIgdmFsdWUgaXMgc2hvd24gd2hlbiB0aGUga25vYlxuICAgICAgICAgKiBpcyBwcmVzc2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5waW4gPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGtub2Igc25hcHMgdG8gdGljayBtYXJrcyBldmVubHkgc3BhY2VkIGJhc2VkXG4gICAgICAgICAqIG9uIHRoZSBzdGVwIHByb3BlcnR5IHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zbmFwcyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogU3BlY2lmaWVzIHRoZSB2YWx1ZSBncmFudWxhcml0eS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RlcCA9IDE7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRpY2sgbWFya3MgYXJlIGRpc3BsYXllZCBiYXNlZCBvbiB0aGUgc3RlcCB2YWx1ZS5cbiAgICAgICAgICogT25seSBhcHBsaWVzIHdoZW4gYHNuYXBzYCBpcyBgdHJ1ZWAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRpY2tzID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIHJhbmdlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogdGhlIHZhbHVlIG9mIHRoZSByYW5nZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudmFsdWUgPSAwO1xuICAgICAgICB0aGlzLmNsYW1wQm91bmRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xhbXAoX3RoaXMubWluLCB2YWx1ZSwgX3RoaXMubWF4KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbnN1cmVWYWx1ZUluQm91bmRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuZHVhbEtub2JzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbG93ZXI6IF90aGlzLmNsYW1wQm91bmRzKHZhbHVlLmxvd2VyKSxcbiAgICAgICAgICAgICAgICAgICAgdXBwZXI6IF90aGlzLmNsYW1wQm91bmRzKHZhbHVlLnVwcGVyKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuY2xhbXBCb3VuZHModmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZUtleWJvYXJkID0gZnVuY3Rpb24gKGtub2IsIGlzSW5jcmVhc2UpIHtcbiAgICAgICAgICAgIHZhciBzdGVwID0gX3RoaXMuc3RlcDtcbiAgICAgICAgICAgIHN0ZXAgPSBzdGVwID4gMCA/IHN0ZXAgOiAxO1xuICAgICAgICAgICAgc3RlcCA9IHN0ZXAgLyAoX3RoaXMubWF4IC0gX3RoaXMubWluKTtcbiAgICAgICAgICAgIGlmICghaXNJbmNyZWFzZSkge1xuICAgICAgICAgICAgICAgIHN0ZXAgKj0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoa25vYiA9PT0gJ0EnKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmF0aW9BID0gY2xhbXAoMCwgX3RoaXMucmF0aW9BICsgc3RlcCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yYXRpb0IgPSBjbGFtcCgwLCBfdGhpcy5yYXRpb0IgKyBzdGVwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25CbHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLmhhc0ZvY3VzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5pb25CbHVyLmVtaXQoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0U3R5bGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFfdGhpcy5oYXNGb2N1cykge1xuICAgICAgICAgICAgICAgIF90aGlzLmhhc0ZvY3VzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5pb25Gb2N1cy5lbWl0KCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdFN0eWxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DaGFuZ2VcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblN0eWxlXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Gb2N1c1wiLCA3KTtcbiAgICAgICAgdGhpcy5pb25CbHVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25CbHVyXCIsIDcpO1xuICAgIH1cbiAgICBjbGFzc18xLnByb3RvdHlwZS5kZWJvdW5jZUNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlID0gZGVib3VuY2VFdmVudCh0aGlzLmlvbkNoYW5nZSwgdGhpcy5kZWJvdW5jZSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5taW5DaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMubm9VcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmF0aW8oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUubWF4Q2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJhdGlvKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmRpc2FibGVkQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlLnNldERpc2FibGVkKHRoaXMuZGlzYWJsZWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS52YWx1ZUNoYW5nZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJhdGlvKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSB0aGlzLmVuc3VyZVZhbHVlSW5Cb3VuZHModmFsdWUpO1xuICAgICAgICB0aGlzLmlvbkNoYW5nZS5lbWl0KHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUmF0aW8oKTtcbiAgICAgICAgdGhpcy5kZWJvdW5jZUNoYW5nZWQoKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZENoYW5nZWQoKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb21wb25lbnREaWRMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmFuZ2VTbGlkZXIsIF9hO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlU2xpZGVyID0gdGhpcy5yYW5nZVNsaWRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmFuZ2VTbGlkZXIpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW1wb3J0KCcuL2luZGV4LTYyNGVlYTU4LmpzJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5nZXN0dXJlID0gKF9iLnNlbnQoKSkuY3JlYXRlR2VzdHVyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWw6IHJhbmdlU2xpZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlc3R1cmVOYW1lOiAncmFuZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlc3R1cmVQcmlvcml0eTogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN0YXJ0OiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLm9uU3RhcnQoZXYpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZTogZnVuY3Rpb24gKGV2KSB7IHJldHVybiBfdGhpcy5vbk1vdmUoZXYpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRW5kOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLm9uRW5kKGV2KTsgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXN0dXJlLnNldERpc2FibGVkKHRoaXMuZGlzYWJsZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZSB8fCAwO1xuICAgICAgICBpZiAodGhpcy5kdWFsS25vYnMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsb3dlcjogMCxcbiAgICAgICAgICAgICAgICB1cHBlcjogdmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS51cHBlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZW1pdFN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlvblN0eWxlLmVtaXQoe1xuICAgICAgICAgICAgJ2ludGVyYWN0aXZlJzogdHJ1ZSxcbiAgICAgICAgICAgICdpbnRlcmFjdGl2ZS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWRcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKGRldGFpbCkge1xuICAgICAgICB2YXIgcmVjdCA9IHRoaXMucmVjdCA9IHRoaXMucmFuZ2VTbGlkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBjdXJyZW50WCA9IGRldGFpbC5jdXJyZW50WDtcbiAgICAgICAgLy8gZmlndXJlIG91dCB3aGljaCBrbm9iIHRoZXkgc3RhcnRlZCBjbG9zZXIgdG9cbiAgICAgICAgdmFyIHJhdGlvID0gY2xhbXAoMCwgKGN1cnJlbnRYIC0gcmVjdC5sZWZ0KSAvIHJlY3Qud2lkdGgsIDEpO1xuICAgICAgICBpZiAoZG9jdW1lbnQuZGlyID09PSAncnRsJykge1xuICAgICAgICAgICAgcmF0aW8gPSAxIC0gcmF0aW87XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVzc2VkS25vYiA9XG4gICAgICAgICAgICAhdGhpcy5kdWFsS25vYnMgfHxcbiAgICAgICAgICAgICAgICBNYXRoLmFicyh0aGlzLnJhdGlvQSAtIHJhdGlvKSA8IE1hdGguYWJzKHRoaXMucmF0aW9CIC0gcmF0aW8pXG4gICAgICAgICAgICAgICAgPyAnQSdcbiAgICAgICAgICAgICAgICA6ICdCJztcbiAgICAgICAgdGhpcy5zZXRGb2N1cyh0aGlzLnByZXNzZWRLbm9iKTtcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBhY3RpdmUga25vYidzIHBvc2l0aW9uXG4gICAgICAgIHRoaXMudXBkYXRlKGN1cnJlbnRYKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9uTW92ZSA9IGZ1bmN0aW9uIChkZXRhaWwpIHtcbiAgICAgICAgdGhpcy51cGRhdGUoZGV0YWlsLmN1cnJlbnRYKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9uRW5kID0gZnVuY3Rpb24gKGRldGFpbCkge1xuICAgICAgICB0aGlzLnVwZGF0ZShkZXRhaWwuY3VycmVudFgpO1xuICAgICAgICB0aGlzLnByZXNzZWRLbm9iID0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGN1cnJlbnRYKSB7XG4gICAgICAgIC8vIGZpZ3VyZSBvdXQgd2hlcmUgdGhlIHBvaW50ZXIgaXMgY3VycmVudGx5IGF0XG4gICAgICAgIC8vIHVwZGF0ZSB0aGUga25vYiBiZWluZyBpbnRlcmFjdGVkIHdpdGhcbiAgICAgICAgdmFyIHJlY3QgPSB0aGlzLnJlY3Q7XG4gICAgICAgIHZhciByYXRpbyA9IGNsYW1wKDAsIChjdXJyZW50WCAtIHJlY3QubGVmdCkgLyByZWN0LndpZHRoLCAxKTtcbiAgICAgICAgaWYgKGRvY3VtZW50LmRpciA9PT0gJ3J0bCcpIHtcbiAgICAgICAgICAgIHJhdGlvID0gMSAtIHJhdGlvO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNuYXBzKSB7XG4gICAgICAgICAgICAvLyBzbmFwcyB0aGUgcmF0aW8gdG8gdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIHJhdGlvID0gdmFsdWVUb1JhdGlvKHJhdGlvVG9WYWx1ZShyYXRpbywgdGhpcy5taW4sIHRoaXMubWF4LCB0aGlzLnN0ZXApLCB0aGlzLm1pbiwgdGhpcy5tYXgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHVwZGF0ZSB3aGljaCBrbm9iIGlzIHByZXNzZWRcbiAgICAgICAgaWYgKHRoaXMucHJlc3NlZEtub2IgPT09ICdBJykge1xuICAgICAgICAgICAgdGhpcy5yYXRpb0EgPSByYXRpbztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmF0aW9CID0gcmF0aW87XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlIGlucHV0IHZhbHVlXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJ2YWxBXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmF0aW9Ub1ZhbHVlKHRoaXMucmF0aW9BLCB0aGlzLm1pbiwgdGhpcy5tYXgsIHRoaXMuc3RlcCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJ2YWxCXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmF0aW9Ub1ZhbHVlKHRoaXMucmF0aW9CLCB0aGlzLm1pbiwgdGhpcy5tYXgsIHRoaXMuc3RlcCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJyYXRpb0xvd2VyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kdWFsS25vYnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5taW4odGhpcy5yYXRpb0EsIHRoaXMucmF0aW9CKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMS5wcm90b3R5cGUsIFwicmF0aW9VcHBlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHVhbEtub2JzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMucmF0aW9BLCB0aGlzLnJhdGlvQik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yYXRpb0E7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnVwZGF0ZVJhdGlvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIG1pbiA9IF9hLm1pbiwgbWF4ID0gX2EubWF4O1xuICAgICAgICBpZiAodGhpcy5kdWFsS25vYnMpIHtcbiAgICAgICAgICAgIHRoaXMucmF0aW9BID0gdmFsdWVUb1JhdGlvKHZhbHVlLmxvd2VyLCBtaW4sIG1heCk7XG4gICAgICAgICAgICB0aGlzLnJhdGlvQiA9IHZhbHVlVG9SYXRpbyh2YWx1ZS51cHBlciwgbWluLCBtYXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yYXRpb0EgPSB2YWx1ZVRvUmF0aW8odmFsdWUsIG1pbiwgbWF4KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUudXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubm9VcGRhdGUgPSB0cnVlO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCB2YWxBID0gX2EudmFsQSwgdmFsQiA9IF9hLnZhbEI7XG4gICAgICAgIHRoaXMudmFsdWUgPSAhdGhpcy5kdWFsS25vYnNcbiAgICAgICAgICAgID8gdmFsQVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgbG93ZXI6IE1hdGgubWluKHZhbEEsIHZhbEIpLFxuICAgICAgICAgICAgICAgIHVwcGVyOiBNYXRoLm1heCh2YWxBLCB2YWxCKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgdGhpcy5ub1VwZGF0ZSA9IGZhbHNlO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc2V0Rm9jdXMgPSBmdW5jdGlvbiAoa25vYikge1xuICAgICAgICBpZiAodGhpcy5lbC5zaGFkb3dSb290KSB7XG4gICAgICAgICAgICB2YXIga25vYkVsID0gdGhpcy5lbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3Ioa25vYiA9PT0gJ0EnID8gJy5yYW5nZS1rbm9iLWEnIDogJy5yYW5nZS1rbm9iLWInKTtcbiAgICAgICAgICAgIGlmIChrbm9iRWwpIHtcbiAgICAgICAgICAgICAgICBrbm9iRWwuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2MgPSB0aGlzLCBtaW4gPSBfYy5taW4sIG1heCA9IF9jLm1heCwgc3RlcCA9IF9jLnN0ZXAsIGVsID0gX2MuZWwsIGhhbmRsZUtleWJvYXJkID0gX2MuaGFuZGxlS2V5Ym9hcmQsIHByZXNzZWRLbm9iID0gX2MucHJlc3NlZEtub2IsIGRpc2FibGVkID0gX2MuZGlzYWJsZWQsIHBpbiA9IF9jLnBpbiwgcmF0aW9Mb3dlciA9IF9jLnJhdGlvTG93ZXIsIHJhdGlvVXBwZXIgPSBfYy5yYXRpb1VwcGVyO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHZhciBiYXJTdGFydCA9IHJhdGlvTG93ZXIgKiAxMDAgKyBcIiVcIjtcbiAgICAgICAgdmFyIGJhckVuZCA9IDEwMCAtIHJhdGlvVXBwZXIgKiAxMDAgKyBcIiVcIjtcbiAgICAgICAgdmFyIGRvYyA9IGRvY3VtZW50O1xuICAgICAgICB2YXIgaXNSVEwgPSBkb2MuZGlyID09PSAncnRsJztcbiAgICAgICAgdmFyIHN0YXJ0ID0gaXNSVEwgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgICB2YXIgZW5kID0gaXNSVEwgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgICB2YXIgdGlja1N0eWxlID0gZnVuY3Rpb24gKHRpY2spIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHJldHVybiBfYSA9IHt9LFxuICAgICAgICAgICAgICAgIF9hW3N0YXJ0XSA9IHRpY2tbc3RhcnRdLFxuICAgICAgICAgICAgICAgIF9hO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgYmFyU3R5bGUgPSAoX2EgPSB7fSxcbiAgICAgICAgICAgIF9hW3N0YXJ0XSA9IGJhclN0YXJ0LFxuICAgICAgICAgICAgX2FbZW5kXSA9IGJhckVuZCxcbiAgICAgICAgICAgIF9hKTtcbiAgICAgICAgdmFyIHRpY2tzID0gW107XG4gICAgICAgIGlmICh0aGlzLnNuYXBzICYmIHRoaXMudGlja3MpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHZhbHVlID0gbWluOyB2YWx1ZSA8PSBtYXg7IHZhbHVlICs9IHN0ZXApIHtcbiAgICAgICAgICAgICAgICB2YXIgcmF0aW8gPSB2YWx1ZVRvUmF0aW8odmFsdWUsIG1pbiwgbWF4KTtcbiAgICAgICAgICAgICAgICB2YXIgdGljayA9IHtcbiAgICAgICAgICAgICAgICAgICAgcmF0aW86IHJhdGlvLFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHJhdGlvID49IHJhdGlvTG93ZXIgJiYgcmF0aW8gPD0gcmF0aW9VcHBlcixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRpY2tbc3RhcnRdID0gcmF0aW8gKiAxMDAgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICB0aWNrcy5wdXNoKHRpY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlbmRlckhpZGRlbklucHV0KHRydWUsIGVsLCB0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0VmFsdWUoKSksIGRpc2FibGVkKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25Gb2N1c2luOiB0aGlzLm9uRm9jdXMsIG9uRm9jdXNvdXQ6IHRoaXMub25CbHVyLCBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvcikpLCAoX2IgPSB7fSwgX2JbbW9kZV0gPSB0cnVlLCBfYlsnaW4taXRlbSddID0gaG9zdENvbnRleHQoJ2lvbi1pdGVtJywgZWwpLCBfYlsncmFuZ2UtZGlzYWJsZWQnXSA9IGRpc2FibGVkLCBfYlsncmFuZ2UtcHJlc3NlZCddID0gcHJlc3NlZEtub2IgIT09IHVuZGVmaW5lZCwgX2JbJ3JhbmdlLWhhcy1waW4nXSA9IHBpbiwgX2IpKSB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFwic3RhcnRcIiB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInJhbmdlLXNsaWRlclwiLCByZWY6IGZ1bmN0aW9uIChyYW5nZUVsKSB7IHJldHVybiBfdGhpcy5yYW5nZVNsaWRlciA9IHJhbmdlRWw7IH0gfSwgdGlja3MubWFwKGZ1bmN0aW9uICh0aWNrKSB7IHJldHVybiAoaChcImRpdlwiLCB7IHN0eWxlOiB0aWNrU3R5bGUodGljayksIHJvbGU6IFwicHJlc2VudGF0aW9uXCIsIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgJ3JhbmdlLXRpY2snOiB0cnVlLFxuICAgICAgICAgICAgICAgICdyYW5nZS10aWNrLWFjdGl2ZSc6IHRpY2suYWN0aXZlXG4gICAgICAgICAgICB9IH0pKTsgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJyYW5nZS1iYXJcIiwgcm9sZTogXCJwcmVzZW50YXRpb25cIiB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInJhbmdlLWJhciByYW5nZS1iYXItYWN0aXZlXCIsIHJvbGU6IFwicHJlc2VudGF0aW9uXCIsIHN0eWxlOiBiYXJTdHlsZSB9KSwgcmVuZGVyS25vYihpc1JUTCwge1xuICAgICAgICAgICAga25vYjogJ0EnLFxuICAgICAgICAgICAgcHJlc3NlZDogcHJlc3NlZEtub2IgPT09ICdBJyxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbEEsXG4gICAgICAgICAgICByYXRpbzogdGhpcy5yYXRpb0EsXG4gICAgICAgICAgICBwaW46IHBpbixcbiAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICAgIGhhbmRsZUtleWJvYXJkOiBoYW5kbGVLZXlib2FyZCxcbiAgICAgICAgICAgIG1pbjogbWluLFxuICAgICAgICAgICAgbWF4OiBtYXhcbiAgICAgICAgfSksIHRoaXMuZHVhbEtub2JzICYmIHJlbmRlcktub2IoaXNSVEwsIHtcbiAgICAgICAgICAgIGtub2I6ICdCJyxcbiAgICAgICAgICAgIHByZXNzZWQ6IHByZXNzZWRLbm9iID09PSAnQicsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWxCLFxuICAgICAgICAgICAgcmF0aW86IHRoaXMucmF0aW9CLFxuICAgICAgICAgICAgcGluOiBwaW4sXG4gICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgICBoYW5kbGVLZXlib2FyZDogaGFuZGxlS2V5Ym9hcmQsXG4gICAgICAgICAgICBtaW46IG1pbixcbiAgICAgICAgICAgIG1heDogbWF4XG4gICAgICAgIH0pKSwgaChcInNsb3RcIiwgeyBuYW1lOiBcImVuZFwiIH0pKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMS5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiZGVib3VuY2VcIjogW1wiZGVib3VuY2VDaGFuZ2VkXCJdLFxuICAgICAgICAgICAgICAgIFwibWluXCI6IFtcIm1pbkNoYW5nZWRcIl0sXG4gICAgICAgICAgICAgICAgXCJtYXhcIjogW1wibWF4Q2hhbmdlZFwiXSxcbiAgICAgICAgICAgICAgICBcImRpc2FibGVkXCI6IFtcImRpc2FibGVkQ2hhbmdlZFwiXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFtcInZhbHVlQ2hhbmdlZFwiXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEsIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiOmhvc3R7LS1rbm9iLWhhbmRsZS1zaXplOmNhbGModmFyKC0ta25vYi1zaXplKSAqIDIpO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4OjM7ZmxleDozOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjJ9Omhvc3QoLnJhbmdlLWRpc2FibGVkKXtwb2ludGVyLWV2ZW50czpub25lfTo6c2xvdHRlZChpb24tbGFiZWwpey1tcy1mbGV4OmluaXRpYWw7ZmxleDppbml0aWFsfTo6c2xvdHRlZChpb24taWNvbltzbG90XSl7Zm9udC1zaXplOjI0cHh9LnJhbmdlLXNsaWRlcntwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleDoxO2ZsZXg6MTt3aWR0aDoxMDAlO2hlaWdodDp2YXIoLS1oZWlnaHQpO2NvbnRhaW46c2l6ZSBsYXlvdXQgc3R5bGU7Y3Vyc29yOi13ZWJraXQtZ3JhYjtjdXJzb3I6Z3JhYjstbXMtdG91Y2gtYWN0aW9uOnBhbi15O3RvdWNoLWFjdGlvbjpwYW4teX06aG9zdCgucmFuZ2UtcHJlc3NlZCkgLnJhbmdlLXNsaWRlcntjdXJzb3I6LXdlYmtpdC1ncmFiYmluZztjdXJzb3I6Z3JhYmJpbmd9LnJhbmdlLXBpbntwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0ucmFuZ2Uta25vYi1oYW5kbGV7bGVmdDowO3RvcDpjYWxjKCh2YXIoLS1oZWlnaHQpIC0gdmFyKC0ta25vYi1oYW5kbGUtc2l6ZSkpIC8gMik7bWFyZ2luLWxlZnQ6Y2FsYygwcHggLSB2YXIoLS1rbm9iLWhhbmRsZS1zaXplKSAvIDIpO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOnZhcigtLWtub2ItaGFuZGxlLXNpemUpO2hlaWdodDp2YXIoLS1rbm9iLWhhbmRsZS1zaXplKTt0ZXh0LWFsaWduOmNlbnRlcn06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnJhbmdlLWtub2ItaGFuZGxlLFtkaXI9cnRsXSAucmFuZ2Uta25vYi1oYW5kbGV7cmlnaHQ6dW5zZXQ7cmlnaHQ6MH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LnJhbmdlLWtub2ItaGFuZGxle21hcmdpbi1sZWZ0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OmNhbGMoMHB4IC0gdmFyKC0ta25vYi1oYW5kbGUtc2l6ZSkgLyAyKTttYXJnaW4taW5saW5lLXN0YXJ0OmNhbGMoMHB4IC0gdmFyKC0ta25vYi1oYW5kbGUtc2l6ZSkgLyAyKX19Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5yYW5nZS1rbm9iLWhhbmRsZSxbZGlyPXJ0bF0gLnJhbmdlLWtub2ItaGFuZGxle2xlZnQ6dW5zZXR9LnJhbmdlLWtub2ItaGFuZGxlOmFjdGl2ZSwucmFuZ2Uta25vYi1oYW5kbGU6Zm9jdXN7b3V0bGluZTpub25lfS5yYW5nZS1iYXJ7Ym9yZGVyLXJhZGl1czp2YXIoLS1iYXItYm9yZGVyLXJhZGl1cyk7bGVmdDowO3RvcDpjYWxjKCh2YXIoLS1oZWlnaHQpIC0gdmFyKC0tYmFyLWhlaWdodCkpIC8gMik7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6dmFyKC0tYmFyLWhlaWdodCk7YmFja2dyb3VuZDp2YXIoLS1iYXItYmFja2dyb3VuZCk7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnJhbmdlLWJhcixbZGlyPXJ0bF0gLnJhbmdlLWJhcntyaWdodDp1bnNldDtyaWdodDowO2xlZnQ6dW5zZXR9LnJhbmdlLWtub2J7Ym9yZGVyLXJhZGl1czp2YXIoLS1rbm9iLWJvcmRlci1yYWRpdXMpO2xlZnQ6Y2FsYyg1MCUgLSB2YXIoLS1rbm9iLXNpemUpIC8gMik7dG9wOmNhbGMoNTAlIC0gdmFyKC0ta25vYi1zaXplKSAvIDIpO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOnZhcigtLWtub2Itc2l6ZSk7aGVpZ2h0OnZhcigtLWtub2Itc2l6ZSk7YmFja2dyb3VuZDp2YXIoLS1rbm9iLWJhY2tncm91bmQpOy13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1rbm9iLWJveC1zaGFkb3cpO2JveC1zaGFkb3c6dmFyKC0ta25vYi1ib3gtc2hhZG93KTtwb2ludGVyLWV2ZW50czpub25lfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAucmFuZ2Uta25vYixbZGlyPXJ0bF0gLnJhbmdlLWtub2J7cmlnaHQ6dW5zZXQ7cmlnaHQ6Y2FsYyg1MCUgLSB2YXIoLS1rbm9iLXNpemUpIC8gMik7bGVmdDp1bnNldH06aG9zdCgucmFuZ2UtcHJlc3NlZCkgLnJhbmdlLWJhci1hY3RpdmV7d2lsbC1jaGFuZ2U6bGVmdCxyaWdodH06aG9zdCguaW4taXRlbSl7d2lkdGg6MTAwJX06aG9zdCguaW4taXRlbSkgOjpzbG90dGVkKGlvbi1sYWJlbCl7LW1zLWZsZXgtaXRlbS1hbGlnbjpjZW50ZXI7YWxpZ24tc2VsZjpjZW50ZXJ9Omhvc3R7LS1rbm9iLWJvcmRlci1yYWRpdXM6NTAlOy0ta25vYi1iYWNrZ3JvdW5kOnZhcigtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZSk7LS1rbm9iLWJveC1zaGFkb3c6bm9uZTstLWtub2Itc2l6ZToxOHB4Oy0tYmFyLWhlaWdodDoycHg7LS1iYXItYmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiw1NiwxMjgsMjU1KSwwLjI2KTstLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTstLWJhci1ib3JkZXItcmFkaXVzOjA7LS1oZWlnaHQ6NDJweDstLXBpbi1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpOy0tcGluLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCNmZmYpO3BhZGRpbmctbGVmdDoxNHB4O3BhZGRpbmctcmlnaHQ6MTRweDtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4O2ZvbnQtc2l6ZToxMnB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdHtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTRweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTRweDtwYWRkaW5nLWlubGluZS1lbmQ6MTRweH19Omhvc3QoLmlvbi1jb2xvcikgLnJhbmdlLWJhcntiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwuMjYpfTpob3N0KC5pb24tY29sb3IpIC5yYW5nZS1iYXItYWN0aXZlLDpob3N0KC5pb24tY29sb3IpIC5yYW5nZS1rbm9iLDpob3N0KC5pb24tY29sb3IpIC5yYW5nZS1waW4sOmhvc3QoLmlvbi1jb2xvcikgLnJhbmdlLXBpbjpiZWZvcmUsOmhvc3QoLmlvbi1jb2xvcikgLnJhbmdlLXRpY2t7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06OnNsb3R0ZWQoW3Nsb3Q9c3RhcnRdKXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDoxNHB4O21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezo6c2xvdHRlZChbc2xvdD1zdGFydF0pe21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MDstd2Via2l0LW1hcmdpbi1lbmQ6MTRweDttYXJnaW4taW5saW5lLWVuZDoxNHB4fX06OnNsb3R0ZWQoW3Nsb3Q9ZW5kXSl7bWFyZ2luLWxlZnQ6MTRweDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6OnNsb3R0ZWQoW3Nsb3Q9ZW5kXSl7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjE0cHg7bWFyZ2luLWlubGluZS1zdGFydDoxNHB4Oy13ZWJraXQtbWFyZ2luLWVuZDowO21hcmdpbi1pbmxpbmUtZW5kOjB9fTpob3N0KC5yYW5nZS1oYXMtcGluKXtwYWRkaW5nLXRvcDoyOHB4fS5yYW5nZS1iYXItYWN0aXZle2JvdHRvbTowO3dpZHRoOmF1dG87YmFja2dyb3VuZDp2YXIoLS1iYXItYmFja2dyb3VuZC1hY3RpdmUpfS5yYW5nZS1rbm9iey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC42Nyk7dHJhbnNmb3JtOnNjYWxlKC42Nyk7LXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOi4xMnM7dHJhbnNpdGlvbi1kdXJhdGlvbjouMTJzOy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTpiYWNrZ3JvdW5kLWNvbG9yLGJvcmRlciwtd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OmJhY2tncm91bmQtY29sb3IsYm9yZGVyLC13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLGJhY2tncm91bmQtY29sb3IsYm9yZGVyO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLGJhY2tncm91bmQtY29sb3IsYm9yZGVyLC13ZWJraXQtdHJhbnNmb3JtOy13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZTt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlO3otaW5kZXg6Mn0ucmFuZ2UtdGlja3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6Y2FsYygodmFyKC0taGVpZ2h0KSAtIHZhcigtLWJhci1oZWlnaHQpKSAvIDIpO3dpZHRoOnZhcigtLWJhci1oZWlnaHQpO2hlaWdodDp2YXIoLS1iYXItaGVpZ2h0KTtiYWNrZ3JvdW5kOnZhcigtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZSk7ei1pbmRleDoxO3BvaW50ZXItZXZlbnRzOm5vbmV9LnJhbmdlLXRpY2stYWN0aXZle2JhY2tncm91bmQ6dHJhbnNwYXJlbnR9LnJhbmdlLXBpbntwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6OHB4O3BhZGRpbmctYm90dG9tOjhweDtib3JkZXItcmFkaXVzOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApIHNjYWxlKC4wMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCkgc2NhbGUoLjAxKTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTttaW4td2lkdGg6MjhweDtoZWlnaHQ6MjhweDstd2Via2l0LXRyYW5zaXRpb246YmFja2dyb3VuZCAuMTJzIGVhc2UsLXdlYmtpdC10cmFuc2Zvcm0gLjEycyBlYXNlO3RyYW5zaXRpb246YmFja2dyb3VuZCAuMTJzIGVhc2UsLXdlYmtpdC10cmFuc2Zvcm0gLjEycyBlYXNlO3RyYW5zaXRpb246dHJhbnNmb3JtIC4xMnMgZWFzZSxiYWNrZ3JvdW5kIC4xMnMgZWFzZTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMTJzIGVhc2UsYmFja2dyb3VuZCAuMTJzIGVhc2UsLXdlYmtpdC10cmFuc2Zvcm0gLjEycyBlYXNlO2NvbG9yOnZhcigtLXBpbi1jb2xvcik7dGV4dC1hbGlnbjpjZW50ZXJ9LnJhbmdlLXBpbiwucmFuZ2UtcGluOmJlZm9yZXtiYWNrZ3JvdW5kOnZhcigtLXBpbi1iYWNrZ3JvdW5kKX0ucmFuZ2UtcGluOmJlZm9yZXtsZWZ0OjUwJTt0b3A6M3B4O21hcmdpbi1sZWZ0Oi0xM3B4O2JvcmRlci1yYWRpdXM6NTAlIDUwJSA1MCUgMDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoyNnB4O2hlaWdodDoyNnB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LXRyYW5zaXRpb246YmFja2dyb3VuZCAuMTJzIGVhc2U7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4xMnMgZWFzZTtjb250ZW50OlxcXCJcXFwiO3otaW5kZXg6LTF9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5yYW5nZS1waW46YmVmb3JlLFtkaXI9cnRsXSAucmFuZ2UtcGluOmJlZm9yZXtyaWdodDp1bnNldDtyaWdodDo1MCV9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5yYW5nZS1waW46YmVmb3Jle21hcmdpbi1sZWZ0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0Oi0xM3B4O21hcmdpbi1pbmxpbmUtc3RhcnQ6LTEzcHh9fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAucmFuZ2UtcGluOmJlZm9yZSxbZGlyPXJ0bF0gLnJhbmdlLXBpbjpiZWZvcmV7bGVmdDp1bnNldH0ucmFuZ2Uta25vYi1wcmVzc2VkIC5yYW5nZS1waW57LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjRweCwwKSBzY2FsZSgxKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjRweCwwKSBzY2FsZSgxKX06aG9zdCg6bm90KC5yYW5nZS1oYXMtcGluKSkgLnJhbmdlLWtub2ItcHJlc3NlZCAucmFuZ2Uta25vYnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9Omhvc3QoLnJhbmdlLWRpc2FibGVkKSAucmFuZ2UtYmFyLDpob3N0KC5yYW5nZS1kaXNhYmxlZCkgLnJhbmdlLWJhci1hY3RpdmUsOmhvc3QoLnJhbmdlLWRpc2FibGVkKSAucmFuZ2Uta25vYiw6aG9zdCgucmFuZ2UtZGlzYWJsZWQpIC5yYW5nZS10aWNre2JhY2tncm91bmQtY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCNiZmJmYmYpfTpob3N0KC5yYW5nZS1kaXNhYmxlZCkgLnJhbmdlLWtub2J7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjU1KTt0cmFuc2Zvcm06c2NhbGUoLjU1KTtvdXRsaW5lOjVweCBzb2xpZCAjZmZmfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NfMTtcbn0oKSk7XG52YXIgcmVuZGVyS25vYiA9IGZ1bmN0aW9uIChpc1JUTCwgX2EpIHtcbiAgICB2YXIga25vYiA9IF9hLmtub2IsIHZhbHVlID0gX2EudmFsdWUsIHJhdGlvID0gX2EucmF0aW8sIG1pbiA9IF9hLm1pbiwgbWF4ID0gX2EubWF4LCBkaXNhYmxlZCA9IF9hLmRpc2FibGVkLCBwcmVzc2VkID0gX2EucHJlc3NlZCwgcGluID0gX2EucGluLCBoYW5kbGVLZXlib2FyZCA9IF9hLmhhbmRsZUtleWJvYXJkO1xuICAgIHZhciBzdGFydCA9IGlzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICB2YXIga25vYlN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3R5bGUgPSB7fTtcbiAgICAgICAgc3R5bGVbc3RhcnRdID0gcmF0aW8gKiAxMDAgKyBcIiVcIjtcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH07XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgb25LZXlEb3duOiBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBldi5rZXk7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBrZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlS2V5Ym9hcmQoa25vYiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgPT09ICdBcnJvd1JpZ2h0JyB8fCBrZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICAgICAgICAgIGhhbmRsZUtleWJvYXJkKGtub2IsIHRydWUpO1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGNsYXNzOiB7XG4gICAgICAgICAgICAncmFuZ2Uta25vYi1oYW5kbGUnOiB0cnVlLFxuICAgICAgICAgICAgJ3JhbmdlLWtub2ItYSc6IGtub2IgPT09ICdBJyxcbiAgICAgICAgICAgICdyYW5nZS1rbm9iLWInOiBrbm9iID09PSAnQicsXG4gICAgICAgICAgICAncmFuZ2Uta25vYi1wcmVzc2VkJzogcHJlc3NlZCxcbiAgICAgICAgICAgICdyYW5nZS1rbm9iLW1pbic6IHZhbHVlID09PSBtaW4sXG4gICAgICAgICAgICAncmFuZ2Uta25vYi1tYXgnOiB2YWx1ZSA9PT0gbWF4XG4gICAgICAgIH0sIHN0eWxlOiBrbm9iU3R5bGUoKSwgcm9sZTogXCJzbGlkZXJcIiwgdGFiaW5kZXg6IGRpc2FibGVkID8gLTEgOiAwLCBcImFyaWEtdmFsdWVtaW5cIjogbWluLCBcImFyaWEtdmFsdWVtYXhcIjogbWF4LCBcImFyaWEtZGlzYWJsZWRcIjogZGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsLCBcImFyaWEtdmFsdWVub3dcIjogdmFsdWUgfSwgcGluICYmIGgoXCJkaXZcIiwgeyBjbGFzczogXCJyYW5nZS1waW5cIiwgcm9sZTogXCJwcmVzZW50YXRpb25cIiB9LCBNYXRoLnJvdW5kKHZhbHVlKSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJyYW5nZS1rbm9iXCIsIHJvbGU6IFwicHJlc2VudGF0aW9uXCIgfSkpKTtcbn07XG52YXIgcmF0aW9Ub1ZhbHVlID0gZnVuY3Rpb24gKHJhdGlvLCBtaW4sIG1heCwgc3RlcCkge1xuICAgIHZhciB2YWx1ZSA9IChtYXggLSBtaW4pICogcmF0aW87XG4gICAgaWYgKHN0ZXAgPiAwKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAvIHN0ZXApICogc3RlcCArIG1pbjtcbiAgICB9XG4gICAgcmV0dXJuIGNsYW1wKG1pbiwgdmFsdWUsIG1heCk7XG59O1xudmFyIHZhbHVlVG9SYXRpbyA9IGZ1bmN0aW9uICh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gY2xhbXAoMCwgKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pLCAxKTtcbn07XG5leHBvcnQgeyBSYW5nZSBhcyBpb25fcmFuZ2UgfTtcbiIsImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbnZhciBob3N0Q29udGV4dCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZWwpIHtcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XG59O1xuLyoqXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXG4gKi9cbnZhciBjcmVhdGVDb2xvckNsYXNzZXMgPSBmdW5jdGlvbiAoY29sb3IpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8gKF9hID0ge1xuICAgICAgICAgICAgJ2lvbi1jb2xvcic6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgX2FbXCJpb24tY29sb3ItXCIgKyBjb2xvcl0gPSB0cnVlLFxuICAgICAgICBfYSkgOiB1bmRlZmluZWQ7XG59O1xudmFyIGdldENsYXNzTGlzdCA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgcmV0dXJuIGFycmF5XG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9IG51bGw7IH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRyaW0oKTsgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT09ICcnOyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xufTtcbnZhciBnZXRDbGFzc01hcCA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XG4gICAgdmFyIG1hcCA9IHt9O1xuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7IHJldHVybiBtYXBbY10gPSB0cnVlOyB9KTtcbiAgICByZXR1cm4gbWFwO1xufTtcbnZhciBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcbnZhciBvcGVuVVJMID0gZnVuY3Rpb24gKHVybCwgZXYsIGRpcmVjdGlvbikgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcm91dGVyO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XG4gICAgICAgICAgICByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XG4gICAgICAgICAgICBpZiAocm91dGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICB9KTtcbn0pOyB9O1xuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==