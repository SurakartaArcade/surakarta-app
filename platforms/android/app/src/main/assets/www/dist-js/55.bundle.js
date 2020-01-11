(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-input-md.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-input-md.entry.js ***!
  \*********************************************************************/
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
        get: function () { return ".sc-ion-input-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:initial;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0!important;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);z-index:2}ion-item.sc-ion-input-md-h:not(.item-label), ion-item:not(.item-label) .sc-ion-input-md-h{--padding-start:0}.ion-color.sc-ion-input-md-h{color:var(--ion-color-base)}.native-input.sc-ion-input-md{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.native-input.sc-ion-input-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-md:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-md::-ms-clear{display:none}.native-input[disabled].sc-ion-input-md{opacity:.4}.cloned-input.sc-ion-input-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-md-h .cloned-input.sc-ion-input-md, [dir=rtl] .sc-ion-input-md-h .cloned-input.sc-ion-input-md, [dir=rtl].sc-ion-input-md .cloned-input.sc-ion-input-md{left:unset;right:unset;right:0}.input-clear-icon.sc-ion-input-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:50%;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.has-focus.has-value.sc-ion-input-md-h .input-clear-icon.sc-ion-input-md{visibility:visible}.has-focus.sc-ion-input-md-h{pointer-events:none}.has-focus.sc-ion-input-md-h a.sc-ion-input-md, .has-focus.sc-ion-input-md-h button.sc-ion-input-md, .has-focus.sc-ion-input-md-h input.sc-ion-input-md{pointer-events:auto}.sc-ion-input-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:8px;font-size:inherit}.item-label-floating.sc-ion-input-md-h, .item-label-floating .sc-ion-input-md-h, .item-label-stacked.sc-ion-input-md-h, .item-label-stacked .sc-ion-input-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}.input-clear-icon.sc-ion-input-md{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns=\'http://www.w3.org/2000/svg\'%20viewBox=\'0%200%20512%20512\'><polygon%20fill=\'var(--ion-color-step-600,%20%23666666)\'%20points=\'405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256\'/></svg>\");width:30px;height:30px;background-size:22px}"; },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1pbnB1dC1tZC5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUM4RTtBQUMvRjtBQUNpRDtBQUNqQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyREFBVztBQUNuQyx5QkFBeUIsMkRBQVc7QUFDcEMsdUJBQXVCLDJEQUFXO0FBQ2xDLHdCQUF3QiwyREFBVztBQUNuQywrQkFBK0IsMkRBQVc7QUFD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Z0Isc0JBQXNCLG9CQUFvQixrQkFBa0IsK0pBQStKLGtCQUFrQixxQkFBcUIsa0JBQWtCLGtDQUFrQywwQ0FBMEMsbVZBQW1WLFdBQVcsWUFBWSxxQkFBcUIsRUFBRSxFQUFFO0FBQ2hwSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQzhCOzs7Ozs7Ozs7Ozs7O0FDdE85QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0JBQWtCLEVBQUU7QUFDdEQsK0JBQStCLGlCQUFpQixFQUFFO0FBQ2xELGtDQUFrQyxpQkFBaUIsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHNCQUFzQixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxRQUFRLHVEQUFTO0FBQzlEO0FBQ0EsV0FBVyx5REFBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDa0YiLCJmaWxlIjoiNTUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBkIGFzIGNyZWF0ZUV2ZW50LCBjIGFzIGdldElvbk1vZGUsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWZlZWVmZjBkLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWJvdW5jZUV2ZW50LCBmIGFzIGZpbmRJdGVtTGFiZWwgfSBmcm9tICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcbnZhciBJbnB1dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18xKGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5pbnB1dElkID0gXCJpb24taW5wdXQtXCIgKyBpbnB1dElkcysrO1xuICAgICAgICB0aGlzLmRpZEJsdXJBZnRlckVkaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgYW5kIGhvdyB0aGUgdGV4dCB2YWx1ZSBzaG91bGQgYmUgYXV0b21hdGljYWxseSBjYXBpdGFsaXplZCBhcyBpdCBpcyBlbnRlcmVkL2VkaXRlZCBieSB0aGUgdXNlci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYXV0b2NhcGl0YWxpemUgPSAnb2ZmJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCBjYW4gYmUgYXV0b21hdGljYWxseSBjb21wbGV0ZWQgYnkgdGhlIGJyb3dzZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hldGhlciBhdXRvIGNvcnJlY3Rpb24gc2hvdWxkIGJlIGVuYWJsZWQgd2hlbiB0aGUgdXNlciBpcyBlbnRlcmluZy9lZGl0aW5nIHRoZSB0ZXh0IHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hdXRvY29ycmVjdCA9ICdvZmYnO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBCb29sZWFuIGF0dHJpYnV0ZSBsZXRzIHlvdSBzcGVjaWZ5IHRoYXQgYSBmb3JtIGNvbnRyb2wgc2hvdWxkIGhhdmUgaW5wdXQgZm9jdXMgd2hlbiB0aGUgcGFnZSBsb2Fkcy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYXV0b2ZvY3VzID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIGEgY2xlYXIgaWNvbiB3aWxsIGFwcGVhciBpbiB0aGUgaW5wdXQgd2hlbiB0aGVyZSBpcyBhIHZhbHVlLiBDbGlja2luZyBpdCBjbGVhcnMgdGhlIGlucHV0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jbGVhcklucHV0ID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhlIGFtb3VudCBvZiB0aW1lLCBpbiBtaWxsaXNlY29uZHMsIHRvIHdhaXQgdG8gdHJpZ2dlciB0aGUgYGlvbkNoYW5nZWAgZXZlbnQgYWZ0ZXIgZWFjaCBrZXlzdHJva2UuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRlYm91bmNlID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIGlucHV0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG5hbWUgb2YgdGhlIGNvbnRyb2wsIHdoaWNoIGlzIHN1Ym1pdHRlZCB3aXRoIHRoZSBmb3JtIGRhdGEuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmlucHV0SWQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBtb2RpZnkgdGhlIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZWFkb25seSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBtdXN0IGZpbGwgaW4gYSB2YWx1ZSBiZWZvcmUgc3VibWl0dGluZyBhIGZvcm0uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlcXVpcmVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBlbGVtZW50IHdpbGwgaGF2ZSBpdHMgc3BlbGxpbmcgYW5kIGdyYW1tYXIgY2hlY2tlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3BlbGxjaGVjayA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHR5cGUgb2YgY29udHJvbCB0byBkaXNwbGF5LiBUaGUgZGVmYXVsdCB0eXBlIGlzIHRleHQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnR5cGUgPSAndGV4dCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmFsdWUgb2YgdGhlIGlucHV0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLm9uSW5wdXQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IGV2LnRhcmdldDtcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnZhbHVlID0gaW5wdXQudmFsdWUgfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5pb25JbnB1dC5lbWl0KGV2KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuICAgICAgICAgICAgX3RoaXMuZm9jdXNDaGFuZ2VkKCk7XG4gICAgICAgICAgICBfdGhpcy5lbWl0U3R5bGUoKTtcbiAgICAgICAgICAgIF90aGlzLmlvbkJsdXIuZW1pdCgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5oYXNGb2N1cyA9IHRydWU7XG4gICAgICAgICAgICBfdGhpcy5mb2N1c0NoYW5nZWQoKTtcbiAgICAgICAgICAgIF90aGlzLmVtaXRTdHlsZSgpO1xuICAgICAgICAgICAgX3RoaXMuaW9uRm9jdXMuZW1pdCgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uS2V5ZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5zaG91bGRDbGVhck9uRWRpdCgpKSB7XG4gICAgICAgICAgICAgICAgLy8gRGlkIHRoZSBpbnB1dCB2YWx1ZSBjaGFuZ2UgYWZ0ZXIgaXQgd2FzIGJsdXJyZWQgYW5kIGVkaXRlZD9cbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZGlkQmx1ckFmdGVyRWRpdCAmJiBfdGhpcy5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENsZWFyIHRoZSBpbnB1dFxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jbGVhclRleHRJbnB1dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZXNldCB0aGUgZmxhZ1xuICAgICAgICAgICAgICAgIF90aGlzLmRpZEJsdXJBZnRlckVkaXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGVhclRleHRJbnB1dCA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgaWYgKF90aGlzLmNsZWFySW5wdXQgJiYgIV90aGlzLnJlYWRvbmx5ICYmICFfdGhpcy5kaXNhYmxlZCAmJiBldikge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGlzIGlzIG5lZWRlZCBmb3IgY2xlYXJPbkVkaXRcbiAgICAgICAgICAgICAqIE90aGVyd2lzZSB0aGUgdmFsdWUgd2lsbCBub3QgYmUgY2xlYXJlZFxuICAgICAgICAgICAgICogaWYgdXNlciBpcyBpbnNpZGUgdGhlIGlucHV0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmIChfdGhpcy5uYXRpdmVJbnB1dCkge1xuICAgICAgICAgICAgICAgIF90aGlzLm5hdGl2ZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW9uSW5wdXQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbklucHV0XCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQ2hhbmdlXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJsdXJcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uRm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkZvY3VzXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbklucHV0RGlkTG9hZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uSW5wdXREaWRMb2FkXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbklucHV0RGlkVW5sb2FkID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25JbnB1dERpZFVubG9hZFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TdHlsZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU3R5bGVcIiwgNyk7XG4gICAgfVxuICAgIGNsYXNzXzEucHJvdG90eXBlLmRlYm91bmNlQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UgPSBkZWJvdW5jZUV2ZW50KHRoaXMuaW9uQ2hhbmdlLCB0aGlzLmRlYm91bmNlKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmRpc2FibGVkQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgbmF0aXZlIGlucHV0IGVsZW1lbnQgd2hlbiB0aGUgdmFsdWUgY2hhbmdlc1xuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnZhbHVlQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UuZW1pdCh7IHZhbHVlOiB0aGlzLnZhbHVlIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgICAgIHRoaXMuZGVib3VuY2VDaGFuZ2VkKCk7XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2lvbklucHV0RGlkTG9hZCcsIHtcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHRoaXMuZWxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZGlzY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpb25JbnB1dERpZFVubG9hZCcsIHtcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHRoaXMuZWxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyBmb2N1cyBvbiB0aGUgc3BlY2lmaWVkIGBpb24taW5wdXRgLiBVc2UgdGhpcyBtZXRob2QgaW5zdGVhZCBvZiB0aGUgZ2xvYmFsXG4gICAgICogYGlucHV0LmZvY3VzKClgLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnNldEZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubmF0aXZlSW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVJbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuYXRpdmUgYDxpbnB1dD5gIGVsZW1lbnQgdXNlZCB1bmRlciB0aGUgaG9vZC5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5nZXRJbnB1dEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5uYXRpdmVJbnB1dCk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5zaG91bGRDbGVhck9uRWRpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcywgdHlwZSA9IF9hLnR5cGUsIGNsZWFyT25FZGl0ID0gX2EuY2xlYXJPbkVkaXQ7XG4gICAgICAgIHJldHVybiAoY2xlYXJPbkVkaXQgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgID8gdHlwZSA9PT0gJ3Bhc3N3b3JkJ1xuICAgICAgICAgICAgOiBjbGVhck9uRWRpdDtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSB8fCAnJztcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmVtaXRTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pb25TdHlsZS5lbWl0KHtcbiAgICAgICAgICAgICdpbnRlcmFjdGl2ZSc6IHRydWUsXG4gICAgICAgICAgICAnaW5wdXQnOiB0cnVlLFxuICAgICAgICAgICAgJ2hhcy1wbGFjZWhvbGRlcic6IHRoaXMucGxhY2Vob2xkZXIgIT0gbnVsbCxcbiAgICAgICAgICAgICdoYXMtdmFsdWUnOiB0aGlzLmhhc1ZhbHVlKCksXG4gICAgICAgICAgICAnaGFzLWZvY3VzJzogdGhpcy5oYXNGb2N1cyxcbiAgICAgICAgICAgICdpbnRlcmFjdGl2ZS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZm9jdXNDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBJZiBjbGVhck9uRWRpdCBpcyBlbmFibGVkIGFuZCB0aGUgaW5wdXQgYmx1cnJlZCBidXQgaGFzIGEgdmFsdWUsIHNldCBhIGZsYWdcbiAgICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzICYmIHRoaXMuc2hvdWxkQ2xlYXJPbkVkaXQoKSAmJiB0aGlzLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlkQmx1ckFmdGVyRWRpdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmhhc1ZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgpLmxlbmd0aCA+IDA7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICAgIHZhciBsYWJlbElkID0gdGhpcy5pbnB1dElkICsgJy1sYmwnO1xuICAgICAgICB2YXIgbGFiZWwgPSBmaW5kSXRlbUxhYmVsKHRoaXMuZWwpO1xuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgIGxhYmVsLmlkID0gbGFiZWxJZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtZGlzYWJsZWRcIjogdGhpcy5kaXNhYmxlZCA/ICd0cnVlJyA6IG51bGwsIGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yKSksIChfYSA9IHt9LCBfYVttb2RlXSA9IHRydWUsIF9hWydoYXMtdmFsdWUnXSA9IHRoaXMuaGFzVmFsdWUoKSwgX2FbJ2hhcy1mb2N1cyddID0gdGhpcy5oYXNGb2N1cywgX2EpKSB9LCBoKFwiaW5wdXRcIiwgeyBjbGFzczogXCJuYXRpdmUtaW5wdXRcIiwgcmVmOiBmdW5jdGlvbiAoaW5wdXQpIHsgcmV0dXJuIF90aGlzLm5hdGl2ZUlucHV0ID0gaW5wdXQ7IH0sIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGxhYmVsSWQsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBhY2NlcHQ6IHRoaXMuYWNjZXB0LCBhdXRvQ2FwaXRhbGl6ZTogdGhpcy5hdXRvY2FwaXRhbGl6ZSwgYXV0b0NvbXBsZXRlOiB0aGlzLmF1dG9jb21wbGV0ZSwgYXV0b0NvcnJlY3Q6IHRoaXMuYXV0b2NvcnJlY3QsIGF1dG9Gb2N1czogdGhpcy5hdXRvZm9jdXMsIGlucHV0TW9kZTogdGhpcy5pbnB1dG1vZGUsIG1pbjogdGhpcy5taW4sIG1heDogdGhpcy5tYXgsIG1pbkxlbmd0aDogdGhpcy5taW5sZW5ndGgsIG1heExlbmd0aDogdGhpcy5tYXhsZW5ndGgsIG11bHRpcGxlOiB0aGlzLm11bHRpcGxlLCBuYW1lOiB0aGlzLm5hbWUsIHBhdHRlcm46IHRoaXMucGF0dGVybiwgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIgfHwgJycsIHJlYWRPbmx5OiB0aGlzLnJlYWRvbmx5LCByZXF1aXJlZDogdGhpcy5yZXF1aXJlZCwgc3BlbGxDaGVjazogdGhpcy5zcGVsbGNoZWNrLCBzdGVwOiB0aGlzLnN0ZXAsIHNpemU6IHRoaXMuc2l6ZSwgdHlwZTogdGhpcy50eXBlLCB2YWx1ZTogdmFsdWUsIG9uSW5wdXQ6IHRoaXMub25JbnB1dCwgb25CbHVyOiB0aGlzLm9uQmx1ciwgb25Gb2N1czogdGhpcy5vbkZvY3VzLCBvbktleURvd246IHRoaXMub25LZXlkb3duIH0pLCAodGhpcy5jbGVhcklucHV0ICYmICF0aGlzLnJlYWRvbmx5ICYmICF0aGlzLmRpc2FibGVkKSAmJiBoKFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgY2xhc3M6IFwiaW5wdXQtY2xlYXItaWNvblwiLCB0YWJpbmRleDogXCItMVwiLCBvblRvdWNoU3RhcnQ6IHRoaXMuY2xlYXJUZXh0SW5wdXQsIG9uTW91c2VEb3duOiB0aGlzLmNsZWFyVGV4dElucHV0IH0pKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMS5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiZGVib3VuY2VcIjogW1wiZGVib3VuY2VDaGFuZ2VkXCJdLFxuICAgICAgICAgICAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogW1widmFsdWVDaGFuZ2VkXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCIuc2MtaW9uLWlucHV0LW1kLWh7LS1wbGFjZWhvbGRlci1jb2xvcjppbml0aWFsOy0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTppbml0aWFsOy0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6aW5pdGlhbDstLXBsYWNlaG9sZGVyLW9wYWNpdHk6LjU7LS1wYWRkaW5nLXRvcDowOy0tcGFkZGluZy1ib3R0b206MDstLXBhZGRpbmctc3RhcnQ6MDstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1jb2xvcjppbml0aWFsO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4OjE7ZmxleDoxOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6MTAwJTtwYWRkaW5nOjAhaW1wb3J0YW50O2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29sb3I6dmFyKC0tY29sb3IpO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTt6LWluZGV4OjJ9aW9uLWl0ZW0uc2MtaW9uLWlucHV0LW1kLWg6bm90KC5pdGVtLWxhYmVsKSwgaW9uLWl0ZW06bm90KC5pdGVtLWxhYmVsKSAuc2MtaW9uLWlucHV0LW1kLWh7LS1wYWRkaW5nLXN0YXJ0OjB9Lmlvbi1jb2xvci5zYy1pb24taW5wdXQtbWQtaHtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Lm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWR7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtwYWRkaW5nLWxlZnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1yaWdodDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmctYm90dG9tKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtkaXNwbGF5OmlubGluZS1ibG9jazstbXMtZmxleDoxO2ZsZXg6MTt3aWR0aDoxMDAlO21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJTtib3JkZXI6MDtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZHtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKX19Lm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0ubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZDo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXN0eWxlOnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGUpO2ZvbnQtd2VpZ2h0OnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0KTtvcGFjaXR5OnZhcigtLXBsYWNlaG9sZGVyLW9wYWNpdHkpfS5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW1kOi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXN0eWxlOnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGUpO2ZvbnQtd2VpZ2h0OnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0KTtvcGFjaXR5OnZhcigtLXBsYWNlaG9sZGVyLW9wYWNpdHkpfS5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW1kOjotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0ubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZDo6cGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0ubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZDotd2Via2l0LWF1dG9maWxse2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQ6aW52YWxpZHstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9Lm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQ6Oi1tcy1jbGVhcntkaXNwbGF5Om5vbmV9Lm5hdGl2ZS1pbnB1dFtkaXNhYmxlZF0uc2MtaW9uLWlucHV0LW1ke29wYWNpdHk6LjR9LmNsb25lZC1pbnB1dC5zYy1pb24taW5wdXQtbWR7bGVmdDowO3RvcDowO3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmV9W2Rpcj1ydGxdLnNjLWlvbi1pbnB1dC1tZC1oIC5jbG9uZWQtaW5wdXQuc2MtaW9uLWlucHV0LW1kLCBbZGlyPXJ0bF0gLnNjLWlvbi1pbnB1dC1tZC1oIC5jbG9uZWQtaW5wdXQuc2MtaW9uLWlucHV0LW1kLCBbZGlyPXJ0bF0uc2MtaW9uLWlucHV0LW1kIC5jbG9uZWQtaW5wdXQuc2MtaW9uLWlucHV0LW1ke2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6MH0uaW5wdXQtY2xlYXItaWNvbi5zYy1pb24taW5wdXQtbWR7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7YmFja2dyb3VuZC1wb3NpdGlvbjo1MCU7Ym9yZGVyOjA7b3V0bGluZTpub25lO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O3Zpc2liaWxpdHk6aGlkZGVuOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX0uaGFzLWZvY3VzLmhhcy12YWx1ZS5zYy1pb24taW5wdXQtbWQtaCAuaW5wdXQtY2xlYXItaWNvbi5zYy1pb24taW5wdXQtbWR7dmlzaWJpbGl0eTp2aXNpYmxlfS5oYXMtZm9jdXMuc2MtaW9uLWlucHV0LW1kLWh7cG9pbnRlci1ldmVudHM6bm9uZX0uaGFzLWZvY3VzLnNjLWlvbi1pbnB1dC1tZC1oIGEuc2MtaW9uLWlucHV0LW1kLCAuaGFzLWZvY3VzLnNjLWlvbi1pbnB1dC1tZC1oIGJ1dHRvbi5zYy1pb24taW5wdXQtbWQsIC5oYXMtZm9jdXMuc2MtaW9uLWlucHV0LW1kLWggaW5wdXQuc2MtaW9uLWlucHV0LW1ke3BvaW50ZXItZXZlbnRzOmF1dG99LnNjLWlvbi1pbnB1dC1tZC1oey0tcGFkZGluZy10b3A6MTBweDstLXBhZGRpbmctZW5kOjA7LS1wYWRkaW5nLWJvdHRvbToxMHB4Oy0tcGFkZGluZy1zdGFydDo4cHg7Zm9udC1zaXplOmluaGVyaXR9Lml0ZW0tbGFiZWwtZmxvYXRpbmcuc2MtaW9uLWlucHV0LW1kLWgsIC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zYy1pb24taW5wdXQtbWQtaCwgLml0ZW0tbGFiZWwtc3RhY2tlZC5zYy1pb24taW5wdXQtbWQtaCwgLml0ZW0tbGFiZWwtc3RhY2tlZCAuc2MtaW9uLWlucHV0LW1kLWh7LS1wYWRkaW5nLXRvcDo4cHg7LS1wYWRkaW5nLWJvdHRvbTo4cHg7LS1wYWRkaW5nLXN0YXJ0OjB9LmlucHV0LWNsZWFyLWljb24uc2MtaW9uLWlucHV0LW1ke2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCw8c3ZnJTIweG1sbnM9XFwnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXCclMjB2aWV3Qm94PVxcJzAlMjAwJTIwNTEyJTIwNTEyXFwnPjxwb2x5Z29uJTIwZmlsbD1cXCd2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsJTIwJTIzNjY2NjY2KVxcJyUyMHBvaW50cz1cXCc0MDUsMTM2Ljc5OCUyMDM3NS4yMDIsMTA3JTIwMjU2LDIyNi4yMDIlMjAxMzYuNzk4LDEwNyUyMDEwNywxMzYuNzk4JTIwMjI2LjIwMiwyNTYlMjAxMDcsMzc1LjIwMiUyMDEzNi43OTgsNDA1JTIwMjU2LDI4NS43OTglMjAzNzUuMjAyLDQwNSUyMDQwNSwzNzUuMjAyJTIwMjg1Ljc5OCwyNTZcXCcvPjwvc3ZnPlxcXCIpO3dpZHRoOjMwcHg7aGVpZ2h0OjMwcHg7YmFja2dyb3VuZC1zaXplOjIycHh9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbnZhciBpbnB1dElkcyA9IDA7XG5leHBvcnQgeyBJbnB1dCBhcyBpb25faW5wdXQgfTtcbiIsImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbnZhciBob3N0Q29udGV4dCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZWwpIHtcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XG59O1xuLyoqXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXG4gKi9cbnZhciBjcmVhdGVDb2xvckNsYXNzZXMgPSBmdW5jdGlvbiAoY29sb3IpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8gKF9hID0ge1xuICAgICAgICAgICAgJ2lvbi1jb2xvcic6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgX2FbXCJpb24tY29sb3ItXCIgKyBjb2xvcl0gPSB0cnVlLFxuICAgICAgICBfYSkgOiB1bmRlZmluZWQ7XG59O1xudmFyIGdldENsYXNzTGlzdCA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgcmV0dXJuIGFycmF5XG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9IG51bGw7IH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRyaW0oKTsgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT09ICcnOyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xufTtcbnZhciBnZXRDbGFzc01hcCA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XG4gICAgdmFyIG1hcCA9IHt9O1xuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7IHJldHVybiBtYXBbY10gPSB0cnVlOyB9KTtcbiAgICByZXR1cm4gbWFwO1xufTtcbnZhciBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcbnZhciBvcGVuVVJMID0gZnVuY3Rpb24gKHVybCwgZXYsIGRpcmVjdGlvbikgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcm91dGVyO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XG4gICAgICAgICAgICByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XG4gICAgICAgICAgICBpZiAocm91dGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICB9KTtcbn0pOyB9O1xuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==