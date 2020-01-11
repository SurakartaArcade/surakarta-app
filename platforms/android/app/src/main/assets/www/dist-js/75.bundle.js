(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-textarea-ios.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-textarea-ios.entry.js ***!
  \*************************************************************************/
/*! exports provided: ion_textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_textarea", function() { return Textarea; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");





var Textarea = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.inputId = "ion-input-" + textareaIds++;
        this.didBlurAfterEdit = false;
        this.hasFocus = false;
        /**
         * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
         */
        this.autocapitalize = 'none';
        /**
         * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
         */
        this.autofocus = false;
        /**
         * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
         */
        this.clearOnEdit = false;
        /**
         * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
         */
        this.debounce = 0;
        /**
         * If `true`, the user cannot interact with the textarea.
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
         * If `true`, the element height will increase based on the value.
         */
        this.autoGrow = false;
        /**
         * The value of the textarea.
         */
        this.value = '';
        this.onInput = function (ev) {
            if (_this.nativeInput) {
                _this.value = _this.nativeInput.value;
            }
            _this.emitStyle();
            _this.ionInput.emit(ev);
        };
        this.onFocus = function () {
            _this.hasFocus = true;
            _this.focusChange();
            _this.ionFocus.emit();
        };
        this.onBlur = function () {
            _this.hasFocus = false;
            _this.focusChange();
            _this.ionBlur.emit();
        };
        this.onKeyDown = function () {
            _this.checkClearOnEdit();
        };
        this.ionChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionChange", 7);
        this.ionInput = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionInput", 7);
        this.ionStyle = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionStyle", 7);
        this.ionBlur = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionBlur", 7);
        this.ionFocus = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionFocus", 7);
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
        var nativeInput = this.nativeInput;
        var value = this.getValue();
        if (nativeInput && nativeInput.value !== value) {
            nativeInput.value = value;
        }
        this.runAutoGrow();
        this.emitStyle();
        this.ionChange.emit({ value: value });
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
    class_1.prototype.componentDidLoad = function () {
        this.runAutoGrow();
    };
    // TODO: performance hit, this cause layout thrashing
    class_1.prototype.runAutoGrow = function () {
        var nativeInput = this.nativeInput;
        if (nativeInput && this.autoGrow) {
            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["f"])(function () {
                nativeInput.style.height = 'inherit';
                nativeInput.style.height = nativeInput.scrollHeight + 'px';
            });
        }
    };
    /**
     * Sets focus on the specified `ion-textarea`. Use this method instead of the global
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
     * Returns the native `<textarea>` element used under the hood.
     */
    class_1.prototype.getInputElement = function () {
        return Promise.resolve(this.nativeInput);
    };
    class_1.prototype.emitStyle = function () {
        this.ionStyle.emit({
            'interactive': true,
            'textarea': true,
            'input': true,
            'interactive-disabled': this.disabled,
            'has-placeholder': this.placeholder != null,
            'has-value': this.hasValue(),
            'has-focus': this.hasFocus
        });
    };
    /**
     * Check if we need to clear the text input if clearOnEdit is enabled
     */
    class_1.prototype.checkClearOnEdit = function () {
        if (!this.clearOnEdit) {
            return;
        }
        // Did the input value change after it was blurred and edited?
        if (this.didBlurAfterEdit && this.hasValue()) {
            // Clear the input
            this.value = '';
        }
        // Reset the flag
        this.didBlurAfterEdit = false;
    };
    class_1.prototype.focusChange = function () {
        // If clearOnEdit is enabled and the input blurred but has a value, set a flag
        if (this.clearOnEdit && !this.hasFocus && this.hasValue()) {
            this.didBlurAfterEdit = true;
        }
        this.emitStyle();
    };
    class_1.prototype.hasValue = function () {
        return this.getValue() !== '';
    };
    class_1.prototype.getValue = function () {
        return this.value || '';
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
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { "aria-disabled": this.disabled ? 'true' : null, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this.color)), (_a = {}, _a[mode] = true, _a)) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("textarea", { class: "native-textarea", ref: function (el) { return _this.nativeInput = el; }, autoCapitalize: this.autocapitalize, autoFocus: this.autofocus, disabled: this.disabled, maxLength: this.maxlength, minLength: this.minlength, name: this.name, placeholder: this.placeholder || '', readOnly: this.readonly, required: this.required, spellCheck: this.spellcheck, cols: this.cols, rows: this.rows, wrap: this.wrap, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeyDown }, value)));
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
        get: function () { return ".sc-ion-textarea-ios-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);white-space:pre-wrap;z-index:2}.ion-color.sc-ion-textarea-ios-h{background:initial;color:var(--ion-color-base)}ion-item.sc-ion-textarea-ios-h, ion-item .sc-ion-textarea-ios-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-ios-h:not(.item-label), ion-item:not(.item-label) .sc-ion-textarea-ios-h{--padding-start:0}.native-textarea.sc-ion-textarea-ios{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.native-textarea.sc-ion-textarea-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-ios{opacity:.4}.cloned-input.sc-ion-textarea-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios, [dir=rtl] .sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios, [dir=rtl].sc-ion-textarea-ios .cloned-input.sc-ion-textarea-ios{left:unset;right:unset;right:0}.sc-ion-textarea-ios-h{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-floating.sc-ion-textarea-ios-h, .item-label-floating .sc-ion-textarea-ios-h, .item-label-stacked.sc-ion-textarea-ios-h, .item-label-stacked .sc-ion-textarea-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var textareaIds = 0;



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi10ZXh0YXJlYS1pb3MuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLWVzNS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDNkY7QUFDOUc7QUFDaUQ7QUFDakI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkRBQVc7QUFDcEMsd0JBQXdCLDJEQUFXO0FBQ25DLHdCQUF3QiwyREFBVztBQUNuQyx1QkFBdUIsMkRBQVc7QUFDbEMsd0JBQXdCLDJEQUFXO0FBQ25DO0FBQ0E7QUFDQSx5QkFBeUIsOERBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGVBQWU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxh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UztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQixFQUFFO0FBQ3RELCtCQUErQixpQkFBaUIsRUFBRTtBQUNsRCxrQ0FBa0MsaUJBQWlCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxzQkFBc0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUSx1REFBUztBQUM5RDtBQUNBLFdBQVcseURBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFO0FBQ2tGIiwiZmlsZSI6Ijc1LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgZCBhcyBjcmVhdGVFdmVudCwgZiBhcyByZWFkVGFzaywgYyBhcyBnZXRJb25Nb2RlLCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IGQgYXMgZGVib3VuY2VFdmVudCwgZiBhcyBmaW5kSXRlbUxhYmVsIH0gZnJvbSAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG52YXIgVGV4dGFyZWEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMShob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMuaW5wdXRJZCA9IFwiaW9uLWlucHV0LVwiICsgdGV4dGFyZWFJZHMrKztcbiAgICAgICAgdGhpcy5kaWRCbHVyQWZ0ZXJFZGl0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZGljYXRlcyB3aGV0aGVyIGFuZCBob3cgdGhlIHRleHQgdmFsdWUgc2hvdWxkIGJlIGF1dG9tYXRpY2FsbHkgY2FwaXRhbGl6ZWQgYXMgaXQgaXMgZW50ZXJlZC9lZGl0ZWQgYnkgdGhlIHVzZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmF1dG9jYXBpdGFsaXplID0gJ25vbmUnO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBCb29sZWFuIGF0dHJpYnV0ZSBsZXRzIHlvdSBzcGVjaWZ5IHRoYXQgYSBmb3JtIGNvbnRyb2wgc2hvdWxkIGhhdmUgaW5wdXQgZm9jdXMgd2hlbiB0aGUgcGFnZSBsb2Fkcy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYXV0b2ZvY3VzID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB2YWx1ZSB3aWxsIGJlIGNsZWFyZWQgYWZ0ZXIgZm9jdXMgdXBvbiBlZGl0LiBEZWZhdWx0cyB0byBgdHJ1ZWAgd2hlbiBgdHlwZWAgaXMgYFwicGFzc3dvcmRcImAsIGBmYWxzZWAgZm9yIGFsbCBvdGhlciB0eXBlcy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2xlYXJPbkVkaXQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgYW1vdW50IG9mIHRpbWUsIGluIG1pbGxpc2Vjb25kcywgdG8gd2FpdCB0byB0cmlnZ2VyIHRoZSBgaW9uQ2hhbmdlYCBldmVudCBhZnRlciBlYWNoIGtleXN0cm9rZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGVib3VuY2UgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgdGV4dGFyZWEuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgY29udHJvbCwgd2hpY2ggaXMgc3VibWl0dGVkIHdpdGggdGhlIGZvcm0gZGF0YS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuaW5wdXRJZDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IG1vZGlmeSB0aGUgdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlYWRvbmx5ID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIG11c3QgZmlsbCBpbiBhIHZhbHVlIGJlZm9yZSBzdWJtaXR0aW5nIGEgZm9ybS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVxdWlyZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGVsZW1lbnQgd2lsbCBoYXZlIGl0cyBzcGVsbGluZyBhbmQgZ3JhbW1hciBjaGVja2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zcGVsbGNoZWNrID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBlbGVtZW50IGhlaWdodCB3aWxsIGluY3JlYXNlIGJhc2VkIG9uIHRoZSB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYXV0b0dyb3cgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgdGV4dGFyZWEuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMub25JbnB1dCA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgaWYgKF90aGlzLm5hdGl2ZUlucHV0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudmFsdWUgPSBfdGhpcy5uYXRpdmVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmVtaXRTdHlsZSgpO1xuICAgICAgICAgICAgX3RoaXMuaW9uSW5wdXQuZW1pdChldik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25Gb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmhhc0ZvY3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLmZvY3VzQ2hhbmdlKCk7XG4gICAgICAgICAgICBfdGhpcy5pb25Gb2N1cy5lbWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25CbHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIF90aGlzLmZvY3VzQ2hhbmdlKCk7XG4gICAgICAgICAgICBfdGhpcy5pb25CbHVyLmVtaXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbktleURvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5jaGVja0NsZWFyT25FZGl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DaGFuZ2VcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uSW5wdXQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbklucHV0XCIsIDcpO1xuICAgICAgICB0aGlzLmlvblN0eWxlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TdHlsZVwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25CbHVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25CbHVyXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Gb2N1c1wiLCA3KTtcbiAgICB9XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZGVib3VuY2VDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlvbkNoYW5nZSA9IGRlYm91bmNlRXZlbnQodGhpcy5pb25DaGFuZ2UsIHRoaXMuZGVib3VuY2UpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZGlzYWJsZWRDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBuYXRpdmUgaW5wdXQgZWxlbWVudCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUudmFsdWVDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmF0aXZlSW5wdXQgPSB0aGlzLm5hdGl2ZUlucHV0O1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICAgIGlmIChuYXRpdmVJbnB1dCAmJiBuYXRpdmVJbnB1dC52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIG5hdGl2ZUlucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ydW5BdXRvR3JvdygpO1xuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgICAgICB0aGlzLmlvbkNoYW5nZS5lbWl0KHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgICAgIHRoaXMuZGVib3VuY2VDaGFuZ2VkKCk7XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2lvbklucHV0RGlkTG9hZCcsIHtcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHRoaXMuZWxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZGlzY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpb25JbnB1dERpZFVubG9hZCcsIHtcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHRoaXMuZWxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29tcG9uZW50RGlkTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ydW5BdXRvR3JvdygpO1xuICAgIH07XG4gICAgLy8gVE9ETzogcGVyZm9ybWFuY2UgaGl0LCB0aGlzIGNhdXNlIGxheW91dCB0aHJhc2hpbmdcbiAgICBjbGFzc18xLnByb3RvdHlwZS5ydW5BdXRvR3JvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5hdGl2ZUlucHV0ID0gdGhpcy5uYXRpdmVJbnB1dDtcbiAgICAgICAgaWYgKG5hdGl2ZUlucHV0ICYmIHRoaXMuYXV0b0dyb3cpIHtcbiAgICAgICAgICAgIHJlYWRUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBuYXRpdmVJbnB1dC5zdHlsZS5oZWlnaHQgPSAnaW5oZXJpdCc7XG4gICAgICAgICAgICAgICAgbmF0aXZlSW5wdXQuc3R5bGUuaGVpZ2h0ID0gbmF0aXZlSW5wdXQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIGZvY3VzIG9uIHRoZSBzcGVjaWZpZWQgYGlvbi10ZXh0YXJlYWAuIFVzZSB0aGlzIG1ldGhvZCBpbnN0ZWFkIG9mIHRoZSBnbG9iYWxcbiAgICAgKiBgaW5wdXQuZm9jdXMoKWAuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc2V0Rm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uYXRpdmVJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5hdGl2ZSBgPHRleHRhcmVhPmAgZWxlbWVudCB1c2VkIHVuZGVyIHRoZSBob29kLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmdldElucHV0RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLm5hdGl2ZUlucHV0KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmVtaXRTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pb25TdHlsZS5lbWl0KHtcbiAgICAgICAgICAgICdpbnRlcmFjdGl2ZSc6IHRydWUsXG4gICAgICAgICAgICAndGV4dGFyZWEnOiB0cnVlLFxuICAgICAgICAgICAgJ2lucHV0JzogdHJ1ZSxcbiAgICAgICAgICAgICdpbnRlcmFjdGl2ZS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgICAgICAnaGFzLXBsYWNlaG9sZGVyJzogdGhpcy5wbGFjZWhvbGRlciAhPSBudWxsLFxuICAgICAgICAgICAgJ2hhcy12YWx1ZSc6IHRoaXMuaGFzVmFsdWUoKSxcbiAgICAgICAgICAgICdoYXMtZm9jdXMnOiB0aGlzLmhhc0ZvY3VzXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgd2UgbmVlZCB0byBjbGVhciB0aGUgdGV4dCBpbnB1dCBpZiBjbGVhck9uRWRpdCBpcyBlbmFibGVkXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY2hlY2tDbGVhck9uRWRpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNsZWFyT25FZGl0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGlkIHRoZSBpbnB1dCB2YWx1ZSBjaGFuZ2UgYWZ0ZXIgaXQgd2FzIGJsdXJyZWQgYW5kIGVkaXRlZD9cbiAgICAgICAgaWYgKHRoaXMuZGlkQmx1ckFmdGVyRWRpdCAmJiB0aGlzLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICAgIC8vIENsZWFyIHRoZSBpbnB1dFxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlc2V0IHRoZSBmbGFnXG4gICAgICAgIHRoaXMuZGlkQmx1ckFmdGVyRWRpdCA9IGZhbHNlO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZm9jdXNDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIElmIGNsZWFyT25FZGl0IGlzIGVuYWJsZWQgYW5kIHRoZSBpbnB1dCBibHVycmVkIGJ1dCBoYXMgYSB2YWx1ZSwgc2V0IGEgZmxhZ1xuICAgICAgICBpZiAodGhpcy5jbGVhck9uRWRpdCAmJiAhdGhpcy5oYXNGb2N1cyAmJiB0aGlzLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlkQmx1ckFmdGVyRWRpdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmhhc1ZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgpICE9PSAnJztcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSB8fCAnJztcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgICAgdmFyIGxhYmVsSWQgPSB0aGlzLmlucHV0SWQgKyAnLWxibCc7XG4gICAgICAgIHZhciBsYWJlbCA9IGZpbmRJdGVtTGFiZWwodGhpcy5lbCk7XG4gICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgbGFiZWwuaWQgPSBsYWJlbElkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1kaXNhYmxlZFwiOiB0aGlzLmRpc2FibGVkID8gJ3RydWUnIDogbnVsbCwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpKSwgKF9hID0ge30sIF9hW21vZGVdID0gdHJ1ZSwgX2EpKSB9LCBoKFwidGV4dGFyZWFcIiwgeyBjbGFzczogXCJuYXRpdmUtdGV4dGFyZWFcIiwgcmVmOiBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIF90aGlzLm5hdGl2ZUlucHV0ID0gZWw7IH0sIGF1dG9DYXBpdGFsaXplOiB0aGlzLmF1dG9jYXBpdGFsaXplLCBhdXRvRm9jdXM6IHRoaXMuYXV0b2ZvY3VzLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgbWF4TGVuZ3RoOiB0aGlzLm1heGxlbmd0aCwgbWluTGVuZ3RoOiB0aGlzLm1pbmxlbmd0aCwgbmFtZTogdGhpcy5uYW1lLCBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlciB8fCAnJywgcmVhZE9ubHk6IHRoaXMucmVhZG9ubHksIHJlcXVpcmVkOiB0aGlzLnJlcXVpcmVkLCBzcGVsbENoZWNrOiB0aGlzLnNwZWxsY2hlY2ssIGNvbHM6IHRoaXMuY29scywgcm93czogdGhpcy5yb3dzLCB3cmFwOiB0aGlzLndyYXAsIG9uSW5wdXQ6IHRoaXMub25JbnB1dCwgb25CbHVyOiB0aGlzLm9uQmx1ciwgb25Gb2N1czogdGhpcy5vbkZvY3VzLCBvbktleURvd246IHRoaXMub25LZXlEb3duIH0sIHZhbHVlKSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJ3YXRjaGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcImRlYm91bmNlXCI6IFtcImRlYm91bmNlQ2hhbmdlZFwiXSxcbiAgICAgICAgICAgICAgICBcImRpc2FibGVkXCI6IFtcImRpc2FibGVkQ2hhbmdlZFwiXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFtcInZhbHVlQ2hhbmdlZFwiXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEsIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiLnNjLWlvbi10ZXh0YXJlYS1pb3MtaHstLWJhY2tncm91bmQ6aW5pdGlhbDstLWNvbG9yOmluaXRpYWw7LS1wbGFjZWhvbGRlci1jb2xvcjppbml0aWFsOy0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTppbml0aWFsOy0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6aW5pdGlhbDstLXBsYWNlaG9sZGVyLW9wYWNpdHk6LjU7LS1wYWRkaW5nLXRvcDowOy0tcGFkZGluZy1lbmQ6MDstLXBhZGRpbmctYm90dG9tOjA7LS1ib3JkZXItcmFkaXVzOjA7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleDoxO2ZsZXg6MTt3aWR0aDoxMDAlOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCk7d2hpdGUtc3BhY2U6cHJlLXdyYXA7ei1pbmRleDoyfS5pb24tY29sb3Iuc2MtaW9uLXRleHRhcmVhLWlvcy1oe2JhY2tncm91bmQ6aW5pdGlhbDtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9aW9uLWl0ZW0uc2MtaW9uLXRleHRhcmVhLWlvcy1oLCBpb24taXRlbSAuc2MtaW9uLXRleHRhcmVhLWlvcy1oey1tcy1mbGV4LWl0ZW0tYWxpZ246YmFzZWxpbmU7YWxpZ24tc2VsZjpiYXNlbGluZX1pb24taXRlbS5zYy1pb24tdGV4dGFyZWEtaW9zLWg6bm90KC5pdGVtLWxhYmVsKSwgaW9uLWl0ZW06bm90KC5pdGVtLWxhYmVsKSAuc2MtaW9uLXRleHRhcmVhLWlvcy1oey0tcGFkZGluZy1zdGFydDowfS5uYXRpdmUtdGV4dGFyZWEuc2MtaW9uLXRleHRhcmVhLWlvc3tib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwYWRkaW5nLWxlZnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1yaWdodDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmctYm90dG9tKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlO2JvcmRlcjowO291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtyZXNpemU6bm9uZTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5uYXRpdmUtdGV4dGFyZWEuc2MtaW9uLXRleHRhcmVhLWlvc3twYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKX19Lm5hdGl2ZS10ZXh0YXJlYS5zYy1pb24tdGV4dGFyZWEtaW9zOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc3R5bGU6dmFyKC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZSk7Zm9udC13ZWlnaHQ6dmFyKC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQpO29wYWNpdHk6dmFyKC0tcGxhY2Vob2xkZXItb3BhY2l0eSl9Lm5hdGl2ZS10ZXh0YXJlYS5zYy1pb24tdGV4dGFyZWEtaW9zOjotbW96LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc3R5bGU6dmFyKC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZSk7Zm9udC13ZWlnaHQ6dmFyKC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQpO29wYWNpdHk6dmFyKC0tcGxhY2Vob2xkZXItb3BhY2l0eSl9Lm5hdGl2ZS10ZXh0YXJlYS5zYy1pb24tdGV4dGFyZWEtaW9zOi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXN0eWxlOnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGUpO2ZvbnQtd2VpZ2h0OnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0KTtvcGFjaXR5OnZhcigtLXBsYWNlaG9sZGVyLW9wYWNpdHkpfS5uYXRpdmUtdGV4dGFyZWEuc2MtaW9uLXRleHRhcmVhLWlvczo6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc3R5bGU6dmFyKC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZSk7Zm9udC13ZWlnaHQ6dmFyKC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQpO29wYWNpdHk6dmFyKC0tcGxhY2Vob2xkZXItb3BhY2l0eSl9Lm5hdGl2ZS10ZXh0YXJlYS5zYy1pb24tdGV4dGFyZWEtaW9zOjpwbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXN0eWxlOnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGUpO2ZvbnQtd2VpZ2h0OnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0KTtvcGFjaXR5OnZhcigtLXBsYWNlaG9sZGVyLW9wYWNpdHkpfS5uYXRpdmUtdGV4dGFyZWFbZGlzYWJsZWRdLnNjLWlvbi10ZXh0YXJlYS1pb3N7b3BhY2l0eTouNH0uY2xvbmVkLWlucHV0LnNjLWlvbi10ZXh0YXJlYS1pb3N7bGVmdDowO3RvcDowO3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmV9W2Rpcj1ydGxdLnNjLWlvbi10ZXh0YXJlYS1pb3MtaCAuY2xvbmVkLWlucHV0LnNjLWlvbi10ZXh0YXJlYS1pb3MsIFtkaXI9cnRsXSAuc2MtaW9uLXRleHRhcmVhLWlvcy1oIC5jbG9uZWQtaW5wdXQuc2MtaW9uLXRleHRhcmVhLWlvcywgW2Rpcj1ydGxdLnNjLWlvbi10ZXh0YXJlYS1pb3MgLmNsb25lZC1pbnB1dC5zYy1pb24tdGV4dGFyZWEtaW9ze2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6MH0uc2MtaW9uLXRleHRhcmVhLWlvcy1oey0tcGFkZGluZy10b3A6MTBweDstLXBhZGRpbmctZW5kOjhweDstLXBhZGRpbmctYm90dG9tOjEwcHg7LS1wYWRkaW5nLXN0YXJ0OjA7Zm9udC1zaXplOmluaGVyaXR9Lml0ZW0tbGFiZWwtZmxvYXRpbmcuc2MtaW9uLXRleHRhcmVhLWlvcy1oLCAuaXRlbS1sYWJlbC1mbG9hdGluZyAuc2MtaW9uLXRleHRhcmVhLWlvcy1oLCAuaXRlbS1sYWJlbC1zdGFja2VkLnNjLWlvbi10ZXh0YXJlYS1pb3MtaCwgLml0ZW0tbGFiZWwtc3RhY2tlZCAuc2MtaW9uLXRleHRhcmVhLWlvcy1oey0tcGFkZGluZy10b3A6OHB4Oy0tcGFkZGluZy1ib3R0b206OHB4Oy0tcGFkZGluZy1zdGFydDowcHh9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbnZhciB0ZXh0YXJlYUlkcyA9IDA7XG5leHBvcnQgeyBUZXh0YXJlYSBhcyBpb25fdGV4dGFyZWEgfTtcbiIsImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbnZhciBob3N0Q29udGV4dCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZWwpIHtcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XG59O1xuLyoqXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXG4gKi9cbnZhciBjcmVhdGVDb2xvckNsYXNzZXMgPSBmdW5jdGlvbiAoY29sb3IpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8gKF9hID0ge1xuICAgICAgICAgICAgJ2lvbi1jb2xvcic6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgX2FbXCJpb24tY29sb3ItXCIgKyBjb2xvcl0gPSB0cnVlLFxuICAgICAgICBfYSkgOiB1bmRlZmluZWQ7XG59O1xudmFyIGdldENsYXNzTGlzdCA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgcmV0dXJuIGFycmF5XG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9IG51bGw7IH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRyaW0oKTsgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT09ICcnOyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xufTtcbnZhciBnZXRDbGFzc01hcCA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XG4gICAgdmFyIG1hcCA9IHt9O1xuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7IHJldHVybiBtYXBbY10gPSB0cnVlOyB9KTtcbiAgICByZXR1cm4gbWFwO1xufTtcbnZhciBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcbnZhciBvcGVuVVJMID0gZnVuY3Rpb24gKHVybCwgZXYsIGRpcmVjdGlvbikgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcm91dGVyO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XG4gICAgICAgICAgICByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XG4gICAgICAgICAgICBpZiAocm91dGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICB9KTtcbn0pOyB9O1xuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==