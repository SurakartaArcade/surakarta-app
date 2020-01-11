(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-input-ios.entry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-input-ios.entry.js ***!
  \**********************************************************************/
/*! exports provided: ion_input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_input", function() { return Input; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");





var Input = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.inputId = "ion-input-" + inputIds++;
        this.didBlurAfterEdit = false;
        this.hasFocus = false;
        /**
         * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
         */
        this.autocapitalize = 'off';
        /**
         * Indicates whether the value of the control can be automatically completed by the browser.
         */
        this.autocomplete = 'off';
        /**
         * Whether auto correction should be enabled when the user is entering/editing the text value.
         */
        this.autocorrect = 'off';
        /**
         * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
         */
        this.autofocus = false;
        /**
         * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        this.clearInput = false;
        /**
         * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
         */
        this.debounce = 0;
        /**
         * If `true`, the user cannot interact with the input.
         */
        this.disabled = false;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * If `true`, the user cannot modify the value.
         */
        this.readonly = false;
        /**
         * If `true`, the user must fill in a value before submitting a form.
         */
        this.required = false;
        /**
         * If `true`, the element will have its spelling and grammar checked.
         */
        this.spellcheck = false;
        /**
         * The type of control to display. The default type is text.
         */
        this.type = 'text';
        /**
         * The value of the input.
         */
        this.value = '';
        this.onInput = function (ev) {
            var input = ev.target;
            if (input) {
                _this.value = input.value || '';
            }
            _this.ionInput.emit(ev);
        };
        this.onBlur = function () {
            _this.hasFocus = false;
            _this.focusChanged();
            _this.emitStyle();
            _this.ionBlur.emit();
        };
        this.onFocus = function () {
            _this.hasFocus = true;
            _this.focusChanged();
            _this.emitStyle();
            _this.ionFocus.emit();
        };
        this.onKeydown = function () {
            if (_this.shouldClearOnEdit()) {
                // Did the input value change after it was blurred and edited?
                if (_this.didBlurAfterEdit && _this.hasValue()) {
                    // Clear the input
                    _this.clearTextInput();
                }
                // Reset the flag
                _this.didBlurAfterEdit = false;
            }
        };
        this.clearTextInput = function (ev) {
            if (_this.clearInput && !_this.readonly && !_this.disabled && ev) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            _this.value = '';
            /**
             * This is needed for clearOnEdit
             * Otherwise the value will not be cleared
             * if user is inside the input
             */
            if (_this.nativeInput) {
                _this.nativeInput.value = '';
            }
        };
        this.ionInput = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionInput", 7);
        this.ionChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionChange", 7);
        this.ionBlur = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionBlur", 7);
        this.ionFocus = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionFocus", 7);
        this.ionInputDidLoad = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionInputDidLoad", 7);
        this.ionInputDidUnload = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionInputDidUnload", 7);
        this.ionStyle = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionStyle", 7);
    }
    class_1.prototype.debounceChanged = function () {
        this.ionChange = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["d"])(this.ionChange, this.debounce);
    };
    class_1.prototype.disabledChanged = function () {
        this.emitStyle();
    };
    /**
     * Update the native input element when the value changes
     */
    class_1.prototype.valueChanged = function () {
        this.emitStyle();
        this.ionChange.emit({ value: this.value });
    };
    class_1.prototype.connectedCallback = function () {
        this.emitStyle();
        this.debounceChanged();
        {
            this.el.dispatchEvent(new CustomEvent('ionInputDidLoad', {
                detail: this.el
            }));
        }
    };
    class_1.prototype.disconnectedCallback = function () {
        {
            document.dispatchEvent(new CustomEvent('ionInputDidUnload', {
                detail: this.el
            }));
        }
    };
    /**
     * Sets focus on the specified `ion-input`. Use this method instead of the global
     * `input.focus()`.
     */
    class_1.prototype.setFocus = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.nativeInput) {
                    this.nativeInput.focus();
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Returns the native `<input>` element used under the hood.
     */
    class_1.prototype.getInputElement = function () {
        return Promise.resolve(this.nativeInput);
    };
    class_1.prototype.shouldClearOnEdit = function () {
        var _a = this, type = _a.type, clearOnEdit = _a.clearOnEdit;
        return (clearOnEdit === undefined)
            ? type === 'password'
            : clearOnEdit;
    };
    class_1.prototype.getValue = function () {
        return this.value || '';
    };
    class_1.prototype.emitStyle = function () {
        this.ionStyle.emit({
            'interactive': true,
            'input': true,
            'has-placeholder': this.placeholder != null,
            'has-value': this.hasValue(),
            'has-focus': this.hasFocus,
            'interactive-disabled': this.disabled,
        });
    };
    class_1.prototype.focusChanged = function () {
        // If clearOnEdit is enabled and the input blurred but has a value, set a flag
        if (!this.hasFocus && this.shouldClearOnEdit() && this.hasValue()) {
            this.didBlurAfterEdit = true;
        }
    };
    class_1.prototype.hasValue = function () {
        return this.getValue().length > 0;
    };
    class_1.prototype.render = function () {
        var _a;
        var _this = this;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var value = this.getValue();
        var labelId = this.inputId + '-lbl';
        var label = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["f"])(this.el);
        if (label) {
            label.id = labelId;
        }
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { "aria-disabled": this.disabled ? 'true' : null, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this.color)), (_a = {}, _a[mode] = true, _a['has-value'] = this.hasValue(), _a['has-focus'] = this.hasFocus, _a)) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("input", { class: "native-input", ref: function (input) { return _this.nativeInput = input; }, "aria-labelledby": labelId, disabled: this.disabled, accept: this.accept, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, inputMode: this.inputmode, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, multiple: this.multiple, name: this.name, pattern: this.pattern, placeholder: this.placeholder || '', readOnly: this.readonly, required: this.required, spellCheck: this.spellcheck, step: this.step, size: this.size, type: this.type, value: value, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeydown }), (this.clearInput && !this.readonly && !this.disabled) && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button", { type: "button", class: "input-clear-icon", tabindex: "-1", onTouchStart: this.clearTextInput, onMouseDown: this.clearTextInput })));
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
                "disabled": ["disabledChanged"],
                "value": ["valueChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ".sc-ion-input-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--background:transparent;--color:initial;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0!important;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);z-index:2}ion-item.sc-ion-input-ios-h:not(.item-label), ion-item:not(.item-label) .sc-ion-input-ios-h{--padding-start:0}.ion-color.sc-ion-input-ios-h{color:var(--ion-color-base)}.native-input.sc-ion-input-ios{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.native-input.sc-ion-input-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-ios:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-ios::-ms-clear{display:none}.native-input[disabled].sc-ion-input-ios{opacity:.4}.cloned-input.sc-ion-input-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-ios-h .cloned-input.sc-ion-input-ios, [dir=rtl] .sc-ion-input-ios-h .cloned-input.sc-ion-input-ios, [dir=rtl].sc-ion-input-ios .cloned-input.sc-ion-input-ios{left:unset;right:unset;right:0}.input-clear-icon.sc-ion-input-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:50%;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.has-focus.has-value.sc-ion-input-ios-h .input-clear-icon.sc-ion-input-ios{visibility:visible}.has-focus.sc-ion-input-ios-h{pointer-events:none}.has-focus.sc-ion-input-ios-h a.sc-ion-input-ios, .has-focus.sc-ion-input-ios-h button.sc-ion-input-ios, .has-focus.sc-ion-input-ios-h input.sc-ion-input-ios{pointer-events:auto}.sc-ion-input-ios-h{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-floating.sc-ion-input-ios-h, .item-label-floating .sc-ion-input-ios-h, .item-label-stacked.sc-ion-input-ios-h, .item-label-stacked .sc-ion-input-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}.input-clear-icon.sc-ion-input-ios{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns=\'http://www.w3.org/2000/svg\'%20viewBox=\'0%200%20512%20512\'><path%20fill=\'var(--ion-color-step-600,%20%23666666)\'%20d=\'M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z\'/></svg>\");width:30px;height:30px;background-size:18px}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var inputIds = 0;



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1pbnB1dC1pb3MuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLWVzNS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDOEU7QUFDL0Y7QUFDaUQ7QUFDakI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkRBQVc7QUFDbkMseUJBQXlCLDJEQUFXO0FBQ3BDLHVCQUF1QiwyREFBVztBQUNsQyx3QkFBd0IsMkRBQVc7QUFDbkMsK0JBQStCLDJEQUFXO0FB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QWtCLHNCQUFzQixrQkFBa0Isa0JBQWtCLG1LQUFtSyxrQkFBa0IscUJBQXFCLG9CQUFvQixtQ0FBbUMsMENBQTBDLDJaQUEyWixXQUFXLFlBQVkscUJBQXFCLEVBQUUsRUFBRTtBQUM5dko7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUM4Qjs7Ozs7Ozs7Ozs7OztBQ3RPOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQixFQUFFO0FBQ3RELCtCQUErQixpQkFBaUIsRUFBRTtBQUNsRCxrQ0FBa0MsaUJBQWlCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxzQkFBc0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUSx1REFBUztBQUM5RDtBQUNBLFdBQVcseURBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFO0FBQ2tGIiwiZmlsZSI6IjU0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgZCBhcyBjcmVhdGVFdmVudCwgYyBhcyBnZXRJb25Nb2RlLCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IGQgYXMgZGVib3VuY2VFdmVudCwgZiBhcyBmaW5kSXRlbUxhYmVsIH0gZnJvbSAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG52YXIgSW5wdXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMShob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMuaW5wdXRJZCA9IFwiaW9uLWlucHV0LVwiICsgaW5wdXRJZHMrKztcbiAgICAgICAgdGhpcy5kaWRCbHVyQWZ0ZXJFZGl0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZGljYXRlcyB3aGV0aGVyIGFuZCBob3cgdGhlIHRleHQgdmFsdWUgc2hvdWxkIGJlIGF1dG9tYXRpY2FsbHkgY2FwaXRhbGl6ZWQgYXMgaXQgaXMgZW50ZXJlZC9lZGl0ZWQgYnkgdGhlIHVzZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmF1dG9jYXBpdGFsaXplID0gJ29mZic7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wgY2FuIGJlIGF1dG9tYXRpY2FsbHkgY29tcGxldGVkIGJ5IHRoZSBicm93c2VyLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGUgPSAnb2ZmJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZXRoZXIgYXV0byBjb3JyZWN0aW9uIHNob3VsZCBiZSBlbmFibGVkIHdoZW4gdGhlIHVzZXIgaXMgZW50ZXJpbmcvZWRpdGluZyB0aGUgdGV4dCB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYXV0b2NvcnJlY3QgPSAnb2ZmJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgQm9vbGVhbiBhdHRyaWJ1dGUgbGV0cyB5b3Ugc3BlY2lmeSB0aGF0IGEgZm9ybSBjb250cm9sIHNob3VsZCBoYXZlIGlucHV0IGZvY3VzIHdoZW4gdGhlIHBhZ2UgbG9hZHMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmF1dG9mb2N1cyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBhIGNsZWFyIGljb24gd2lsbCBhcHBlYXIgaW4gdGhlIGlucHV0IHdoZW4gdGhlcmUgaXMgYSB2YWx1ZS4gQ2xpY2tpbmcgaXQgY2xlYXJzIHRoZSBpbnB1dC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSBhbW91bnQgb2YgdGltZSwgaW4gbWlsbGlzZWNvbmRzLCB0byB3YWl0IHRvIHRyaWdnZXIgdGhlIGBpb25DaGFuZ2VgIGV2ZW50IGFmdGVyIGVhY2gga2V5c3Ryb2tlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kZWJvdW5jZSA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBpbnB1dC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBjb250cm9sLCB3aGljaCBpcyBzdWJtaXR0ZWQgd2l0aCB0aGUgZm9ybSBkYXRhLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5pbnB1dElkO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgbW9kaWZ5IHRoZSB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVhZG9ubHkgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgbXVzdCBmaWxsIGluIGEgdmFsdWUgYmVmb3JlIHN1Ym1pdHRpbmcgYSBmb3JtLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZXF1aXJlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgZWxlbWVudCB3aWxsIGhhdmUgaXRzIHNwZWxsaW5nIGFuZCBncmFtbWFyIGNoZWNrZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNwZWxsY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0eXBlIG9mIGNvbnRyb2wgdG8gZGlzcGxheS4gVGhlIGRlZmF1bHQgdHlwZSBpcyB0ZXh0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50eXBlID0gJ3RleHQnO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHZhbHVlIG9mIHRoZSBpbnB1dC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5vbklucHV0ID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgaW5wdXQgPSBldi50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy52YWx1ZSA9IGlucHV0LnZhbHVlIHx8ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuaW9uSW5wdXQuZW1pdChldik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25CbHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIF90aGlzLmZvY3VzQ2hhbmdlZCgpO1xuICAgICAgICAgICAgX3RoaXMuZW1pdFN0eWxlKCk7XG4gICAgICAgICAgICBfdGhpcy5pb25CbHVyLmVtaXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaGFzRm9jdXMgPSB0cnVlO1xuICAgICAgICAgICAgX3RoaXMuZm9jdXNDaGFuZ2VkKCk7XG4gICAgICAgICAgICBfdGhpcy5lbWl0U3R5bGUoKTtcbiAgICAgICAgICAgIF90aGlzLmlvbkZvY3VzLmVtaXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbktleWRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuc2hvdWxkQ2xlYXJPbkVkaXQoKSkge1xuICAgICAgICAgICAgICAgIC8vIERpZCB0aGUgaW5wdXQgdmFsdWUgY2hhbmdlIGFmdGVyIGl0IHdhcyBibHVycmVkIGFuZCBlZGl0ZWQ/XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmRpZEJsdXJBZnRlckVkaXQgJiYgX3RoaXMuaGFzVmFsdWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDbGVhciB0aGUgaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xlYXJUZXh0SW5wdXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGZsYWdcbiAgICAgICAgICAgICAgICBfdGhpcy5kaWRCbHVyQWZ0ZXJFZGl0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xlYXJUZXh0SW5wdXQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5jbGVhcklucHV0ICYmICFfdGhpcy5yZWFkb25seSAmJiAhX3RoaXMuZGlzYWJsZWQgJiYgZXYpIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMudmFsdWUgPSAnJztcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhpcyBpcyBuZWVkZWQgZm9yIGNsZWFyT25FZGl0XG4gICAgICAgICAgICAgKiBPdGhlcndpc2UgdGhlIHZhbHVlIHdpbGwgbm90IGJlIGNsZWFyZWRcbiAgICAgICAgICAgICAqIGlmIHVzZXIgaXMgaW5zaWRlIHRoZSBpbnB1dFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAoX3RoaXMubmF0aXZlSW5wdXQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5uYXRpdmVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlvbklucHV0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25JbnB1dFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkNoYW5nZVwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25CbHVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25CbHVyXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Gb2N1c1wiLCA3KTtcbiAgICAgICAgdGhpcy5pb25JbnB1dERpZExvYWQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbklucHV0RGlkTG9hZFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25JbnB1dERpZFVubG9hZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uSW5wdXREaWRVbmxvYWRcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblN0eWxlXCIsIDcpO1xuICAgIH1cbiAgICBjbGFzc18xLnByb3RvdHlwZS5kZWJvdW5jZUNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlID0gZGVib3VuY2VFdmVudCh0aGlzLmlvbkNoYW5nZSwgdGhpcy5kZWJvdW5jZSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5kaXNhYmxlZENoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIG5hdGl2ZSBpbnB1dCBlbGVtZW50IHdoZW4gdGhlIHZhbHVlIGNoYW5nZXNcbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS52YWx1ZUNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlLmVtaXQoeyB2YWx1ZTogdGhpcy52YWx1ZSB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgICAgICB0aGlzLmRlYm91bmNlQ2hhbmdlZCgpO1xuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpb25JbnB1dERpZExvYWQnLCB7XG4gICAgICAgICAgICAgICAgZGV0YWlsOiB0aGlzLmVsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB7XG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW9uSW5wdXREaWRVbmxvYWQnLCB7XG4gICAgICAgICAgICAgICAgZGV0YWlsOiB0aGlzLmVsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgZm9jdXMgb24gdGhlIHNwZWNpZmllZCBgaW9uLWlucHV0YC4gVXNlIHRoaXMgbWV0aG9kIGluc3RlYWQgb2YgdGhlIGdsb2JhbFxuICAgICAqIGBpbnB1dC5mb2N1cygpYC5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5zZXRGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5hdGl2ZUlucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmF0aXZlIGA8aW5wdXQ+YCBlbGVtZW50IHVzZWQgdW5kZXIgdGhlIGhvb2QuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZ2V0SW5wdXRFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMubmF0aXZlSW5wdXQpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc2hvdWxkQ2xlYXJPbkVkaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIHR5cGUgPSBfYS50eXBlLCBjbGVhck9uRWRpdCA9IF9hLmNsZWFyT25FZGl0O1xuICAgICAgICByZXR1cm4gKGNsZWFyT25FZGl0ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICA/IHR5cGUgPT09ICdwYXNzd29yZCdcbiAgICAgICAgICAgIDogY2xlYXJPbkVkaXQ7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgfHwgJyc7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5lbWl0U3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUuZW1pdCh7XG4gICAgICAgICAgICAnaW50ZXJhY3RpdmUnOiB0cnVlLFxuICAgICAgICAgICAgJ2lucHV0JzogdHJ1ZSxcbiAgICAgICAgICAgICdoYXMtcGxhY2Vob2xkZXInOiB0aGlzLnBsYWNlaG9sZGVyICE9IG51bGwsXG4gICAgICAgICAgICAnaGFzLXZhbHVlJzogdGhpcy5oYXNWYWx1ZSgpLFxuICAgICAgICAgICAgJ2hhcy1mb2N1cyc6IHRoaXMuaGFzRm9jdXMsXG4gICAgICAgICAgICAnaW50ZXJhY3RpdmUtZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmZvY3VzQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSWYgY2xlYXJPbkVkaXQgaXMgZW5hYmxlZCBhbmQgdGhlIGlucHV0IGJsdXJyZWQgYnV0IGhhcyBhIHZhbHVlLCBzZXQgYSBmbGFnXG4gICAgICAgIGlmICghdGhpcy5oYXNGb2N1cyAmJiB0aGlzLnNob3VsZENsZWFyT25FZGl0KCkgJiYgdGhpcy5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmRpZEJsdXJBZnRlckVkaXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5oYXNWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoKS5sZW5ndGggPiAwO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgICB2YXIgbGFiZWxJZCA9IHRoaXMuaW5wdXRJZCArICctbGJsJztcbiAgICAgICAgdmFyIGxhYmVsID0gZmluZEl0ZW1MYWJlbCh0aGlzLmVsKTtcbiAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICBsYWJlbC5pZCA9IGxhYmVsSWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWRpc2FibGVkXCI6IHRoaXMuZGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsLCBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvcikpLCAoX2EgPSB7fSwgX2FbbW9kZV0gPSB0cnVlLCBfYVsnaGFzLXZhbHVlJ10gPSB0aGlzLmhhc1ZhbHVlKCksIF9hWydoYXMtZm9jdXMnXSA9IHRoaXMuaGFzRm9jdXMsIF9hKSkgfSwgaChcImlucHV0XCIsIHsgY2xhc3M6IFwibmF0aXZlLWlucHV0XCIsIHJlZjogZnVuY3Rpb24gKGlucHV0KSB7IHJldHVybiBfdGhpcy5uYXRpdmVJbnB1dCA9IGlucHV0OyB9LCBcImFyaWEtbGFiZWxsZWRieVwiOiBsYWJlbElkLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgYWNjZXB0OiB0aGlzLmFjY2VwdCwgYXV0b0NhcGl0YWxpemU6IHRoaXMuYXV0b2NhcGl0YWxpemUsIGF1dG9Db21wbGV0ZTogdGhpcy5hdXRvY29tcGxldGUsIGF1dG9Db3JyZWN0OiB0aGlzLmF1dG9jb3JyZWN0LCBhdXRvRm9jdXM6IHRoaXMuYXV0b2ZvY3VzLCBpbnB1dE1vZGU6IHRoaXMuaW5wdXRtb2RlLCBtaW46IHRoaXMubWluLCBtYXg6IHRoaXMubWF4LCBtaW5MZW5ndGg6IHRoaXMubWlubGVuZ3RoLCBtYXhMZW5ndGg6IHRoaXMubWF4bGVuZ3RoLCBtdWx0aXBsZTogdGhpcy5tdWx0aXBsZSwgbmFtZTogdGhpcy5uYW1lLCBwYXR0ZXJuOiB0aGlzLnBhdHRlcm4sIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyIHx8ICcnLCByZWFkT25seTogdGhpcy5yZWFkb25seSwgcmVxdWlyZWQ6IHRoaXMucmVxdWlyZWQsIHNwZWxsQ2hlY2s6IHRoaXMuc3BlbGxjaGVjaywgc3RlcDogdGhpcy5zdGVwLCBzaXplOiB0aGlzLnNpemUsIHR5cGU6IHRoaXMudHlwZSwgdmFsdWU6IHZhbHVlLCBvbklucHV0OiB0aGlzLm9uSW5wdXQsIG9uQmx1cjogdGhpcy5vbkJsdXIsIG9uRm9jdXM6IHRoaXMub25Gb2N1cywgb25LZXlEb3duOiB0aGlzLm9uS2V5ZG93biB9KSwgKHRoaXMuY2xlYXJJbnB1dCAmJiAhdGhpcy5yZWFkb25seSAmJiAhdGhpcy5kaXNhYmxlZCkgJiYgaChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIGNsYXNzOiBcImlucHV0LWNsZWFyLWljb25cIiwgdGFiaW5kZXg6IFwiLTFcIiwgb25Ub3VjaFN0YXJ0OiB0aGlzLmNsZWFyVGV4dElucHV0LCBvbk1vdXNlRG93bjogdGhpcy5jbGVhclRleHRJbnB1dCB9KSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJ3YXRjaGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcImRlYm91bmNlXCI6IFtcImRlYm91bmNlQ2hhbmdlZFwiXSxcbiAgICAgICAgICAgICAgICBcImRpc2FibGVkXCI6IFtcImRpc2FibGVkQ2hhbmdlZFwiXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFtcInZhbHVlQ2hhbmdlZFwiXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEsIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiLnNjLWlvbi1pbnB1dC1pb3MtaHstLXBsYWNlaG9sZGVyLWNvbG9yOmluaXRpYWw7LS1wbGFjZWhvbGRlci1mb250LXN0eWxlOmluaXRpYWw7LS1wbGFjZWhvbGRlci1mb250LXdlaWdodDppbml0aWFsOy0tcGxhY2Vob2xkZXItb3BhY2l0eTouNTstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWVuZDowOy0tcGFkZGluZy1ib3R0b206MDstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1jb2xvcjppbml0aWFsO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4OjE7ZmxleDoxOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6MTAwJTtwYWRkaW5nOjAhaW1wb3J0YW50O2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29sb3I6dmFyKC0tY29sb3IpO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTt6LWluZGV4OjJ9aW9uLWl0ZW0uc2MtaW9uLWlucHV0LWlvcy1oOm5vdCguaXRlbS1sYWJlbCksIGlvbi1pdGVtOm5vdCguaXRlbS1sYWJlbCkgLnNjLWlvbi1pbnB1dC1pb3MtaHstLXBhZGRpbmctc3RhcnQ6MH0uaW9uLWNvbG9yLnNjLWlvbi1pbnB1dC1pb3MtaHtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Lm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtaW9ze2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7cGFkZGluZy1sZWZ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctcmlnaHQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsZXR0ZXItc3BhY2luZzppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3RleHQtYWxpZ246aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O2NvbG9yOmluaGVyaXQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7LW1zLWZsZXg6MTtmbGV4OjE7d2lkdGg6MTAwJTttYXgtd2lkdGg6MTAwJTttYXgtaGVpZ2h0OjEwMCU7Ym9yZGVyOjA7b3V0bGluZTpub25lO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Lm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtaW9ze3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpfX0ubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1pb3M6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0ubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1pb3M6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0ubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1pb3M6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc3R5bGU6dmFyKC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZSk7Zm9udC13ZWlnaHQ6dmFyKC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQpO29wYWNpdHk6dmFyKC0tcGxhY2Vob2xkZXItb3BhY2l0eSl9Lm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtaW9zOjotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0ubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1pb3M6OnBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc3R5bGU6dmFyKC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZSk7Zm9udC13ZWlnaHQ6dmFyKC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQpO29wYWNpdHk6dmFyKC0tcGxhY2Vob2xkZXItb3BhY2l0eSl9Lm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtaW9zOi13ZWJraXQtYXV0b2ZpbGx7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1pb3M6aW52YWxpZHstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9Lm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtaW9zOjotbXMtY2xlYXJ7ZGlzcGxheTpub25lfS5uYXRpdmUtaW5wdXRbZGlzYWJsZWRdLnNjLWlvbi1pbnB1dC1pb3N7b3BhY2l0eTouNH0uY2xvbmVkLWlucHV0LnNjLWlvbi1pbnB1dC1pb3N7bGVmdDowO3RvcDowO3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmV9W2Rpcj1ydGxdLnNjLWlvbi1pbnB1dC1pb3MtaCAuY2xvbmVkLWlucHV0LnNjLWlvbi1pbnB1dC1pb3MsIFtkaXI9cnRsXSAuc2MtaW9uLWlucHV0LWlvcy1oIC5jbG9uZWQtaW5wdXQuc2MtaW9uLWlucHV0LWlvcywgW2Rpcj1ydGxdLnNjLWlvbi1pbnB1dC1pb3MgLmNsb25lZC1pbnB1dC5zYy1pb24taW5wdXQtaW9ze2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6MH0uaW5wdXQtY2xlYXItaWNvbi5zYy1pb24taW5wdXQtaW9ze21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO2JhY2tncm91bmQtcG9zaXRpb246NTAlO2JvcmRlcjowO291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDt2aXNpYmlsaXR5OmhpZGRlbjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9Lmhhcy1mb2N1cy5oYXMtdmFsdWUuc2MtaW9uLWlucHV0LWlvcy1oIC5pbnB1dC1jbGVhci1pY29uLnNjLWlvbi1pbnB1dC1pb3N7dmlzaWJpbGl0eTp2aXNpYmxlfS5oYXMtZm9jdXMuc2MtaW9uLWlucHV0LWlvcy1oe3BvaW50ZXItZXZlbnRzOm5vbmV9Lmhhcy1mb2N1cy5zYy1pb24taW5wdXQtaW9zLWggYS5zYy1pb24taW5wdXQtaW9zLCAuaGFzLWZvY3VzLnNjLWlvbi1pbnB1dC1pb3MtaCBidXR0b24uc2MtaW9uLWlucHV0LWlvcywgLmhhcy1mb2N1cy5zYy1pb24taW5wdXQtaW9zLWggaW5wdXQuc2MtaW9uLWlucHV0LWlvc3twb2ludGVyLWV2ZW50czphdXRvfS5zYy1pb24taW5wdXQtaW9zLWh7LS1wYWRkaW5nLXRvcDoxMHB4Oy0tcGFkZGluZy1lbmQ6OHB4Oy0tcGFkZGluZy1ib3R0b206MTBweDstLXBhZGRpbmctc3RhcnQ6MDtmb250LXNpemU6aW5oZXJpdH0uaXRlbS1sYWJlbC1mbG9hdGluZy5zYy1pb24taW5wdXQtaW9zLWgsIC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zYy1pb24taW5wdXQtaW9zLWgsIC5pdGVtLWxhYmVsLXN0YWNrZWQuc2MtaW9uLWlucHV0LWlvcy1oLCAuaXRlbS1sYWJlbC1zdGFja2VkIC5zYy1pb24taW5wdXQtaW9zLWh7LS1wYWRkaW5nLXRvcDo4cHg7LS1wYWRkaW5nLWJvdHRvbTo4cHg7LS1wYWRkaW5nLXN0YXJ0OjBweH0uaW5wdXQtY2xlYXItaWNvbi5zYy1pb24taW5wdXQtaW9ze2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCw8c3ZnJTIweG1sbnM9XFwnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXCclMjB2aWV3Qm94PVxcJzAlMjAwJTIwNTEyJTIwNTEyXFwnPjxwYXRoJTIwZmlsbD1cXCd2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsJTIwJTIzNjY2NjY2KVxcJyUyMGQ9XFwnTTQwMy4xLDEwOC45Yy04MS4yLTgxLjItMjEyLjktODEuMi0yOTQuMiwwcy04MS4yLDIxMi45LDAsMjk0LjJjODEuMiw4MS4yLDIxMi45LDgxLjIsMjk0LjIsMFM0ODQuMywxOTAuMSw0MDMuMSwxMDguOXolMjBNMzUyLDM0MC4yTDM0MC4yLDM1MmwtODQuNC04NC4ybC04NCw4My44TDE2MCwzMzkuOGw4NC04My44bC04NC04My44bDExLjgtMTEuOGw4NCw4My44bDg0LjQtODQuMmwxMS44LDExLjhMMjY3LjYsMjU2TDM1MiwzNDAuMnpcXCcvPjwvc3ZnPlxcXCIpO3dpZHRoOjMwcHg7aGVpZ2h0OjMwcHg7YmFja2dyb3VuZC1zaXplOjE4cHh9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbnZhciBpbnB1dElkcyA9IDA7XG5leHBvcnQgeyBJbnB1dCBhcyBpb25faW5wdXQgfTtcbiIsImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbnZhciBob3N0Q29udGV4dCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZWwpIHtcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XG59O1xuLyoqXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXG4gKi9cbnZhciBjcmVhdGVDb2xvckNsYXNzZXMgPSBmdW5jdGlvbiAoY29sb3IpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8gKF9hID0ge1xuICAgICAgICAgICAgJ2lvbi1jb2xvcic6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgX2FbXCJpb24tY29sb3ItXCIgKyBjb2xvcl0gPSB0cnVlLFxuICAgICAgICBfYSkgOiB1bmRlZmluZWQ7XG59O1xudmFyIGdldENsYXNzTGlzdCA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgcmV0dXJuIGFycmF5XG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9IG51bGw7IH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRyaW0oKTsgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT09ICcnOyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xufTtcbnZhciBnZXRDbGFzc01hcCA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XG4gICAgdmFyIG1hcCA9IHt9O1xuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7IHJldHVybiBtYXBbY10gPSB0cnVlOyB9KTtcbiAgICByZXR1cm4gbWFwO1xufTtcbnZhciBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcbnZhciBvcGVuVVJMID0gZnVuY3Rpb24gKHVybCwgZXYsIGRpcmVjdGlvbikgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcm91dGVyO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XG4gICAgICAgICAgICByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XG4gICAgICAgICAgICBpZiAocm91dGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICB9KTtcbn0pOyB9O1xuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==