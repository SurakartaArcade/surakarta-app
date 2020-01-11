(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-toggle-ios.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-toggle-ios.entry.js ***!
  \***********************************************************************/
/*! exports provided: ion_toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_toggle", function() { return Toggle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");
/* harmony import */ var _haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./haptic-c8f1473e.js */ "./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js");






var Toggle = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.inputId = "ion-tg-" + toggleIds++;
        this.lastDrag = 0;
        this.activated = false;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * If `true`, the toggle is selected.
         */
        this.checked = false;
        /**
         * If `true`, the user cannot interact with the toggle.
         */
        this.disabled = false;
        /**
         * The value of the toggle does not mean if it's checked or not, use the `checked`
         * property for that.
         *
         * The value of a toggle is analogous to the value of a `<input type="checkbox">`,
         * it's only used when the toggle participates in a native `<form>`.
         */
        this.value = 'on';
        this.onClick = function () {
            if (_this.lastDrag + 300 < Date.now()) {
                _this.checked = !_this.checked;
            }
        };
        this.onFocus = function () {
            _this.ionFocus.emit();
        };
        this.onBlur = function () {
            _this.ionBlur.emit();
        };
        this.ionChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionChange", 7);
        this.ionFocus = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionFocus", 7);
        this.ionBlur = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionBlur", 7);
        this.ionStyle = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionStyle", 7);
    }
    class_1.prototype.checkedChanged = function (isChecked) {
        this.ionChange.emit({
            checked: isChecked,
            value: this.value
        });
    };
    class_1.prototype.disabledChanged = function () {
        this.emitStyle();
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    };
    class_1.prototype.connectedCallback = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "./node_modules/@ionic/core/dist/esm-es5/index-624eea58.js"))];
                    case 1:
                        _a.gesture = (_b.sent()).createGesture({
                            el: this.el,
                            gestureName: 'toggle',
                            gesturePriority: 100,
                            threshold: 5,
                            passive: false,
                            onStart: function () { return _this.onStart(); },
                            onMove: function (ev) { return _this.onMove(ev); },
                            onEnd: function (ev) { return _this.onEnd(ev); },
                        });
                        this.disabledChanged();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.disconnectedCallback = function () {
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    };
    class_1.prototype.componentWillLoad = function () {
        this.emitStyle();
    };
    class_1.prototype.emitStyle = function () {
        this.ionStyle.emit({
            'interactive-disabled': this.disabled,
        });
    };
    class_1.prototype.onStart = function () {
        this.activated = true;
        // touch-action does not work in iOS
        this.setFocus();
    };
    class_1.prototype.onMove = function (detail) {
        if (shouldToggle(document, this.checked, detail.deltaX, -10)) {
            this.checked = !this.checked;
            Object(_haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_5__["h"])();
        }
    };
    class_1.prototype.onEnd = function (ev) {
        this.activated = false;
        this.lastDrag = Date.now();
        ev.event.preventDefault();
        ev.event.stopImmediatePropagation();
    };
    class_1.prototype.getValue = function () {
        return this.value || '';
    };
    class_1.prototype.setFocus = function () {
        if (this.buttonEl) {
            this.buttonEl.focus();
        }
    };
    class_1.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this, inputId = _b.inputId, disabled = _b.disabled, checked = _b.checked, activated = _b.activated, color = _b.color, el = _b.el;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var labelId = inputId + '-lbl';
        var label = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["f"])(el);
        var value = this.getValue();
        if (label) {
            label.id = labelId;
        }
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["a"])(true, el, this.name, (checked ? value : ''), disabled);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onClick: this.onClick, role: "checkbox", "aria-disabled": disabled ? 'true' : null, "aria-checked": "" + checked, "aria-labelledby": labelId, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["c"])(color)), (_a = {}, _a[mode] = true, _a['in-item'] = Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["h"])('ion-item', el), _a['toggle-activated'] = activated, _a['toggle-checked'] = checked, _a['toggle-disabled'] = disabled, _a['interactive'] = true, _a)) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "toggle-icon" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "toggle-inner" })), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: disabled, ref: function (btnEl) { return _this.buttonEl = btnEl; } })));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "checked": ["checkedChanged"],
                "disabled": ["disabledChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}:host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.088);--background-checked:var(--ion-color-primary,#3880ff);--handle-background:#fff;--handle-background-checked:#fff;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:51px;height:32px;contain:strict}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}.toggle-icon{border-radius:16px;display:block;position:relative;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:background-color .3s;transition:background-color .3s;background:var(--background);overflow:hidden;pointer-events:none}.toggle-inner{left:2px;top:2px;border-radius:14px;position:absolute;width:28px;height:28px;-webkit-transition:width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;transition:width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;transition:transform .3s,width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms;transition:transform .3s,width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;background:var(--handle-background);-webkit-box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);will-change:transform;contain:strict}:host-context([dir=rtl]) .toggle-inner,[dir=rtl] .toggle-inner{left:unset;right:unset;right:2px}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-activated) .toggle-icon:before,:host(.toggle-checked) .toggle-icon:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(19px,0,0);transform:translate3d(19px,0,0);background:var(--handle-background-checked)}:host-context([dir=rtl]).toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(-1 * 19px),0,0);transform:translate3d(calc(-1 * 19px),0,0)}:host(.toggle-activated.toggle-checked) .toggle-inner:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-activated) .toggle-inner{width:34px}:host(.toggle-activated.toggle-checked) .toggle-inner{left:-4px}:host-context([dir=rtl]).toggle-activated.toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-activated.toggle-checked) .toggle-inner{left:unset;right:unset;right:-4px}:host(.toggle-disabled){opacity:.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:8px;padding-top:6px;padding-bottom:5px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:8px;padding-inline-end:8px}}:host(.in-item[slot=start]){padding-left:0;padding-right:16px;padding-top:6px;padding-bottom:5px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:16px;padding-inline-end:16px}}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var shouldToggle = function (doc, checked, deltaX, margin) {
    var isRTL = doc.dir === 'rtl';
    if (checked) {
        return (!isRTL && (margin > deltaX)) ||
            (isRTL && (-margin < deltaX));
    }
    else {
        return (!isRTL && (-margin < deltaX)) ||
            (isRTL && (margin > deltaX));
    }
};
var toggleIds = 0;



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2hhcHRpYy1jOGYxNDczZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi10b2dnbGUtaW9zLmVudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUg7Ozs7Ozs7Ozs7Ozs7QUMxQ2pIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDOEU7QUFDL0Y7QUFDcUQ7QUFDSDtBQUNwQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyREFBVztBQUNwQyx3QkFBd0IsMkRBQVc7QUFDbkMsdUJBQXVCLDJEQUFXO0FBQ2xDLHdCQUF3QiwyREFBVztBQUNuQztBQUNBO0FB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b0Isd0JBQXdCLHVCQUF1Qix5QkFBeUIseUJBQXlCLEVBQUUsRUFBRTtBQUM1K0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0M7Ozs7Ozs7Ozs7Ozs7QUM5S2hDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxrQkFBa0IsRUFBRTtBQUN0RCwrQkFBK0IsaUJBQWlCLEVBQUU7QUFDbEQsa0NBQWtDLGlCQUFpQixFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Qsc0JBQXNCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFFBQVEsdURBQVM7QUFDOUQ7QUFDQSxXQUFXLHlEQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNrRiIsImZpbGUiOiIxNS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENoZWNrIHRvIHNlZSBpZiB0aGUgSGFwdGljIFBsdWdpbiBpcyBhdmFpbGFibGVcbiAqIEByZXR1cm4gUmV0dXJucyBgdHJ1ZWAgb3IgZmFsc2UgaWYgdGhlIHBsdWdpbiBpcyBhdmFpbGFibGVcbiAqL1xuLyoqXG4gKiBUcmlnZ2VyIGEgc2VsZWN0aW9uIGNoYW5nZWQgaGFwdGljIGV2ZW50LiBHb29kIGZvciBvbmUtdGltZSBldmVudHNcbiAqIChub3QgZm9yIGdlc3R1cmVzKVxuICovXG52YXIgaGFwdGljU2VsZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbmdpbmUgPSB3aW5kb3cuVGFwdGljRW5naW5lO1xuICAgIGlmIChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLnNlbGVjdGlvbigpO1xuICAgIH1cbn07XG4vKipcbiAqIFRlbGwgdGhlIGhhcHRpYyBlbmdpbmUgdGhhdCBhIGdlc3R1cmUgZm9yIGEgc2VsZWN0aW9uIGNoYW5nZSBpcyBzdGFydGluZy5cbiAqL1xudmFyIGhhcHRpY1NlbGVjdGlvblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbmdpbmUgPSB3aW5kb3cuVGFwdGljRW5naW5lO1xuICAgIGlmIChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmdlc3R1cmVTZWxlY3Rpb25TdGFydCgpO1xuICAgIH1cbn07XG4vKipcbiAqIFRlbGwgdGhlIGhhcHRpYyBlbmdpbmUgdGhhdCBhIHNlbGVjdGlvbiBjaGFuZ2VkIGR1cmluZyBhIGdlc3R1cmUuXG4gKi9cbnZhciBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbmdpbmUgPSB3aW5kb3cuVGFwdGljRW5naW5lO1xuICAgIGlmIChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmdlc3R1cmVTZWxlY3Rpb25DaGFuZ2VkKCk7XG4gICAgfVxufTtcbi8qKlxuICogVGVsbCB0aGUgaGFwdGljIGVuZ2luZSB3ZSBhcmUgZG9uZSB3aXRoIGEgZ2VzdHVyZS4gVGhpcyBuZWVkcyB0byBiZVxuICogY2FsbGVkIGxlc3QgcmVzb3VyY2VzIGFyZSBub3QgcHJvcGVybHkgcmVjeWNsZWQuXG4gKi9cbnZhciBoYXB0aWNTZWxlY3Rpb25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVuZ2luZSA9IHdpbmRvdy5UYXB0aWNFbmdpbmU7XG4gICAgaWYgKGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvbkVuZCgpO1xuICAgIH1cbn07XG5leHBvcnQgeyBoYXB0aWNTZWxlY3Rpb25TdGFydCBhcyBhLCBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkIGFzIGIsIGhhcHRpY1NlbGVjdGlvbkVuZCBhcyBjLCBoYXB0aWNTZWxlY3Rpb24gYXMgaCB9O1xuIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBkIGFzIGNyZWF0ZUV2ZW50LCBjIGFzIGdldElvbk1vZGUsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWZlZWVmZjBkLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgZiBhcyBmaW5kSXRlbUxhYmVsLCBhIGFzIHJlbmRlckhpZGRlbklucHV0IH0gZnJvbSAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzLCBoIGFzIGhvc3RDb250ZXh0IH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG5pbXBvcnQgeyBoIGFzIGhhcHRpY1NlbGVjdGlvbiB9IGZyb20gJy4vaGFwdGljLWM4ZjE0NzNlLmpzJztcbnZhciBUb2dnbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMShob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMuaW5wdXRJZCA9IFwiaW9uLXRnLVwiICsgdG9nZ2xlSWRzKys7XG4gICAgICAgIHRoaXMubGFzdERyYWcgPSAwO1xuICAgICAgICB0aGlzLmFjdGl2YXRlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG5hbWUgb2YgdGhlIGNvbnRyb2wsIHdoaWNoIGlzIHN1Ym1pdHRlZCB3aXRoIHRoZSBmb3JtIGRhdGEuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmlucHV0SWQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB0b2dnbGUgaXMgc2VsZWN0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIHRvZ2dsZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgdG9nZ2xlIGRvZXMgbm90IG1lYW4gaWYgaXQncyBjaGVja2VkIG9yIG5vdCwgdXNlIHRoZSBgY2hlY2tlZGBcbiAgICAgICAgICogcHJvcGVydHkgZm9yIHRoYXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSB2YWx1ZSBvZiBhIHRvZ2dsZSBpcyBhbmFsb2dvdXMgdG8gdGhlIHZhbHVlIG9mIGEgYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj5gLFxuICAgICAgICAgKiBpdCdzIG9ubHkgdXNlZCB3aGVuIHRoZSB0b2dnbGUgcGFydGljaXBhdGVzIGluIGEgbmF0aXZlIGA8Zm9ybT5gLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52YWx1ZSA9ICdvbic7XG4gICAgICAgIHRoaXMub25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5sYXN0RHJhZyArIDMwMCA8IERhdGUubm93KCkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jaGVja2VkID0gIV90aGlzLmNoZWNrZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25Gb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmlvbkZvY3VzLmVtaXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5pb25CbHVyLmVtaXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkNoYW5nZVwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25Gb2N1cyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uRm9jdXNcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uQmx1ciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQmx1clwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TdHlsZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU3R5bGVcIiwgNyk7XG4gICAgfVxuICAgIGNsYXNzXzEucHJvdG90eXBlLmNoZWNrZWRDaGFuZ2VkID0gZnVuY3Rpb24gKGlzQ2hlY2tlZCkge1xuICAgICAgICB0aGlzLmlvbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgIGNoZWNrZWQ6IGlzQ2hlY2tlZCxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZGlzYWJsZWRDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuc2V0RGlzYWJsZWQodGhpcy5kaXNhYmxlZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW1wb3J0KCcuL2luZGV4LTYyNGVlYTU4LmpzJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5nZXN0dXJlID0gKF9iLnNlbnQoKSkuY3JlYXRlR2VzdHVyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWw6IHRoaXMuZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VzdHVyZU5hbWU6ICd0b2dnbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlc3R1cmVQcmlvcml0eTogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN0YXJ0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5vblN0YXJ0KCk7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLm9uTW92ZShldik7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FbmQ6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMub25FbmQoZXYpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkQ2hhbmdlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmVtaXRTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pb25TdHlsZS5lbWl0KHtcbiAgICAgICAgICAgICdpbnRlcmFjdGl2ZS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgICAvLyB0b3VjaC1hY3Rpb24gZG9lcyBub3Qgd29yayBpbiBpT1NcbiAgICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25Nb3ZlID0gZnVuY3Rpb24gKGRldGFpbCkge1xuICAgICAgICBpZiAoc2hvdWxkVG9nZ2xlKGRvY3VtZW50LCB0aGlzLmNoZWNrZWQsIGRldGFpbC5kZWx0YVgsIC0xMCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gICAgICAgICAgICBoYXB0aWNTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25FbmQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0RHJhZyA9IERhdGUubm93KCk7XG4gICAgICAgIGV2LmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2LmV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlIHx8ICcnO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc2V0Rm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbkVsKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkVsLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLCBpbnB1dElkID0gX2IuaW5wdXRJZCwgZGlzYWJsZWQgPSBfYi5kaXNhYmxlZCwgY2hlY2tlZCA9IF9iLmNoZWNrZWQsIGFjdGl2YXRlZCA9IF9iLmFjdGl2YXRlZCwgY29sb3IgPSBfYi5jb2xvciwgZWwgPSBfYi5lbDtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICB2YXIgbGFiZWxJZCA9IGlucHV0SWQgKyAnLWxibCc7XG4gICAgICAgIHZhciBsYWJlbCA9IGZpbmRJdGVtTGFiZWwoZWwpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgbGFiZWwuaWQgPSBsYWJlbElkO1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlckhpZGRlbklucHV0KHRydWUsIGVsLCB0aGlzLm5hbWUsIChjaGVja2VkID8gdmFsdWUgOiAnJyksIGRpc2FibGVkKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5vbkNsaWNrLCByb2xlOiBcImNoZWNrYm94XCIsIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/ICd0cnVlJyA6IG51bGwsIFwiYXJpYS1jaGVja2VkXCI6IFwiXCIgKyBjaGVja2VkLCBcImFyaWEtbGFiZWxsZWRieVwiOiBsYWJlbElkLCBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjcmVhdGVDb2xvckNsYXNzZXMoY29sb3IpKSwgKF9hID0ge30sIF9hW21vZGVdID0gdHJ1ZSwgX2FbJ2luLWl0ZW0nXSA9IGhvc3RDb250ZXh0KCdpb24taXRlbScsIGVsKSwgX2FbJ3RvZ2dsZS1hY3RpdmF0ZWQnXSA9IGFjdGl2YXRlZCwgX2FbJ3RvZ2dsZS1jaGVja2VkJ10gPSBjaGVja2VkLCBfYVsndG9nZ2xlLWRpc2FibGVkJ10gPSBkaXNhYmxlZCwgX2FbJ2ludGVyYWN0aXZlJ10gPSB0cnVlLCBfYSkpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0b2dnbGUtaWNvblwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0b2dnbGUtaW5uZXJcIiB9KSksIGgoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsIG9uQmx1cjogdGhpcy5vbkJsdXIsIGRpc2FibGVkOiBkaXNhYmxlZCwgcmVmOiBmdW5jdGlvbiAoYnRuRWwpIHsgcmV0dXJuIF90aGlzLmJ1dHRvbkVsID0gYnRuRWw7IH0gfSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEsIFwid2F0Y2hlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJjaGVja2VkXCI6IFtcImNoZWNrZWRDaGFuZ2VkXCJdLFxuICAgICAgICAgICAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCI6aG9zdHstd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3ghaW1wb3J0YW50O2JveC1zaXppbmc6Y29udGVudC1ib3ghaW1wb3J0YW50O2Rpc3BsYXk6aW5saW5lLWJsb2NrO291dGxpbmU6bm9uZTtjb250YWluOmNvbnRlbnQ7Y3Vyc29yOnBvaW50ZXI7LW1zLXRvdWNoLWFjdGlvbjpub25lO3RvdWNoLWFjdGlvbjpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjJ9Omhvc3QoLmlvbi1mb2N1c2VkKSBpbnB1dHtib3JkZXI6MnB4IHNvbGlkICM1ZTllZDZ9Omhvc3QoLnRvZ2dsZS1kaXNhYmxlZCl7cG9pbnRlci1ldmVudHM6bm9uZX1idXR0b257bGVmdDowO3RvcDowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlcjowO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO291dGxpbmU6bm9uZX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgYnV0dG9uLFtkaXI9cnRsXSBidXR0b257bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowfWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MH06aG9zdHstLWJhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLDAuMDg4KTstLWJhY2tncm91bmQtY2hlY2tlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTstLWhhbmRsZS1iYWNrZ3JvdW5kOiNmZmY7LS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiNmZmY7LXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JveC1zaXppbmc6Y29udGVudC1ib3g7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6NTFweDtoZWlnaHQ6MzJweDtjb250YWluOnN0cmljdH06aG9zdCguaW9uLWNvbG9yLnRvZ2dsZS1jaGVja2VkKSAudG9nZ2xlLWljb257YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9LnRvZ2dsZS1pY29ue2JvcmRlci1yYWRpdXM6MTZweDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTstd2Via2l0LXRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuM3M7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4zcztiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO292ZXJmbG93OmhpZGRlbjtwb2ludGVyLWV2ZW50czpub25lfS50b2dnbGUtaW5uZXJ7bGVmdDoycHg7dG9wOjJweDtib3JkZXItcmFkaXVzOjE0cHg7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MjhweDtoZWlnaHQ6MjhweDstd2Via2l0LXRyYW5zaXRpb246d2lkdGggLjEycyBlYXNlLWluLW91dCA4MG1zLGxlZnQgLjExcyBlYXNlLWluLW91dCA4MG1zLHJpZ2h0IC4xMXMgZWFzZS1pbi1vdXQgODBtcywtd2Via2l0LXRyYW5zZm9ybSAuM3M7dHJhbnNpdGlvbjp3aWR0aCAuMTJzIGVhc2UtaW4tb3V0IDgwbXMsbGVmdCAuMTFzIGVhc2UtaW4tb3V0IDgwbXMscmlnaHQgLjExcyBlYXNlLWluLW91dCA4MG1zLC13ZWJraXQtdHJhbnNmb3JtIC4zczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3Msd2lkdGggLjEycyBlYXNlLWluLW91dCA4MG1zLGxlZnQgLjExcyBlYXNlLWluLW91dCA4MG1zLHJpZ2h0IC4xMXMgZWFzZS1pbi1vdXQgODBtczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3Msd2lkdGggLjEycyBlYXNlLWluLW91dCA4MG1zLGxlZnQgLjExcyBlYXNlLWluLW91dCA4MG1zLHJpZ2h0IC4xMXMgZWFzZS1pbi1vdXQgODBtcywtd2Via2l0LXRyYW5zZm9ybSAuM3M7YmFja2dyb3VuZDp2YXIoLS1oYW5kbGUtYmFja2dyb3VuZCk7LXdlYmtpdC1ib3gtc2hhZG93OjAgM3B4IDEycHggcmdiYSgwLDAsMCwuMTYpLDAgM3B4IDFweCByZ2JhKDAsMCwwLC4xKTtib3gtc2hhZG93OjAgM3B4IDEycHggcmdiYSgwLDAsMCwuMTYpLDAgM3B4IDFweCByZ2JhKDAsMCwwLC4xKTt3aWxsLWNoYW5nZTp0cmFuc2Zvcm07Y29udGFpbjpzdHJpY3R9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC50b2dnbGUtaW5uZXIsW2Rpcj1ydGxdIC50b2dnbGUtaW5uZXJ7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDoycHh9Omhvc3QoLnRvZ2dsZS1jaGVja2VkKSAudG9nZ2xlLWljb257YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWNoZWNrZWQpfTpob3N0KC50b2dnbGUtYWN0aXZhdGVkKSAudG9nZ2xlLWljb246YmVmb3JlLDpob3N0KC50b2dnbGUtY2hlY2tlZCkgLnRvZ2dsZS1pY29uOmJlZm9yZXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCl9Omhvc3QoLnRvZ2dsZS1jaGVja2VkKSAudG9nZ2xlLWlubmVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDE5cHgsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTlweCwwLDApO2JhY2tncm91bmQ6dmFyKC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZCl9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pLnRvZ2dsZS1jaGVja2VkIC50b2dnbGUtaW5uZXIsOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLnRvZ2dsZS1jaGVja2VkKSAudG9nZ2xlLWlubmVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKGNhbGMoLTEgKiAxOXB4KSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZChjYWxjKC0xICogMTlweCksMCwwKX06aG9zdCgudG9nZ2xlLWFjdGl2YXRlZC50b2dnbGUtY2hlY2tlZCkgLnRvZ2dsZS1pbm5lcjpiZWZvcmV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApfTpob3N0KC50b2dnbGUtYWN0aXZhdGVkKSAudG9nZ2xlLWlubmVye3dpZHRoOjM0cHh9Omhvc3QoLnRvZ2dsZS1hY3RpdmF0ZWQudG9nZ2xlLWNoZWNrZWQpIC50b2dnbGUtaW5uZXJ7bGVmdDotNHB4fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS50b2dnbGUtYWN0aXZhdGVkLnRvZ2dsZS1jaGVja2VkIC50b2dnbGUtaW5uZXIsOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLnRvZ2dsZS1hY3RpdmF0ZWQudG9nZ2xlLWNoZWNrZWQpIC50b2dnbGUtaW5uZXJ7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDotNHB4fTpob3N0KC50b2dnbGUtZGlzYWJsZWQpe29wYWNpdHk6LjN9Omhvc3QoLmluLWl0ZW1bc2xvdF0pe21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwYWRkaW5nLWxlZnQ6MTZweDtwYWRkaW5nLXJpZ2h0OjhweDtwYWRkaW5nLXRvcDo2cHg7cGFkZGluZy1ib3R0b206NXB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdCguaW4taXRlbVtzbG90XSl7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjE2cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTZweDstd2Via2l0LXBhZGRpbmctZW5kOjhweDtwYWRkaW5nLWlubGluZS1lbmQ6OHB4fX06aG9zdCguaW4taXRlbVtzbG90PXN0YXJ0XSl7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDoxNnB4O3BhZGRpbmctdG9wOjZweDtwYWRkaW5nLWJvdHRvbTo1cHh9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0KC5pbi1pdGVtW3Nsb3Q9c3RhcnRdKXtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MDtwYWRkaW5nLWlubGluZS1zdGFydDowOy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweH19XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbnZhciBzaG91bGRUb2dnbGUgPSBmdW5jdGlvbiAoZG9jLCBjaGVja2VkLCBkZWx0YVgsIG1hcmdpbikge1xuICAgIHZhciBpc1JUTCA9IGRvYy5kaXIgPT09ICdydGwnO1xuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgIHJldHVybiAoIWlzUlRMICYmIChtYXJnaW4gPiBkZWx0YVgpKSB8fFxuICAgICAgICAgICAgKGlzUlRMICYmICgtbWFyZ2luIDwgZGVsdGFYKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKCFpc1JUTCAmJiAoLW1hcmdpbiA8IGRlbHRhWCkpIHx8XG4gICAgICAgICAgICAoaXNSVEwgJiYgKG1hcmdpbiA+IGRlbHRhWCkpO1xuICAgIH1cbn07XG52YXIgdG9nZ2xlSWRzID0gMDtcbmV4cG9ydCB7IFRvZ2dsZSBhcyBpb25fdG9nZ2xlIH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG52YXIgaG9zdENvbnRleHQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGVsKSB7XG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xufTtcbi8qKlxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxuICovXG52YXIgY3JlYXRlQ29sb3JDbGFzc2VzID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IChfYSA9IHtcbiAgICAgICAgICAgICdpb24tY29sb3InOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIF9hW1wiaW9uLWNvbG9yLVwiICsgY29sb3JdID0gdHJ1ZSxcbiAgICAgICAgX2EpIDogdW5kZWZpbmVkO1xufTtcbnZhciBnZXRDbGFzc0xpc3QgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgIHJldHVybiBhcnJheVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPSBudWxsOyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50cmltKCk7IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSAnJzsgfSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbn07XG52YXIgZ2V0Q2xhc3NNYXAgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gbWFwW2NdID0gdHJ1ZTsgfSk7XG4gICAgcmV0dXJuIG1hcDtcbn07XG52YXIgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XG52YXIgb3BlblVSTCA9IGZ1bmN0aW9uICh1cmwsIGV2LCBkaXJlY3Rpb24pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvdXRlcjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgICAgICAgaWYgKHJvdXRlcikge1xuICAgICAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbildO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=