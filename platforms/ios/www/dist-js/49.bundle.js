(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-checkbox-md.entry.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-checkbox-md.entry.js ***!
  \************************************************************************/
/*! exports provided: ion_checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_checkbox", function() { return Checkbox; });
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");




var Checkbox = /** @class */ (function () {
    function Checkbox(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.inputId = "ion-cb-" + checkboxIds++;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * If `true`, the checkbox is selected.
         */
        this.checked = false;
        /**
         * If `true`, the checkbox will visually appear as indeterminate.
         */
        this.indeterminate = false;
        /**
         * If `true`, the user cannot interact with the checkbox.
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
            _this.setFocus();
            _this.checked = !_this.checked;
            _this.indeterminate = false;
        };
        this.onFocus = function () {
            _this.ionFocus.emit();
        };
        this.onBlur = function () {
            _this.ionBlur.emit();
        };
        this.ionChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionChange", 7);
        this.ionFocus = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionFocus", 7);
        this.ionBlur = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionBlur", 7);
        this.ionStyle = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionStyle", 7);
    }
    Checkbox.prototype.componentWillLoad = function () {
        this.emitStyle();
    };
    Checkbox.prototype.checkedChanged = function (isChecked) {
        this.ionChange.emit({
            checked: isChecked,
            value: this.value
        });
        this.emitStyle();
    };
    Checkbox.prototype.disabledChanged = function () {
        this.emitStyle();
    };
    Checkbox.prototype.emitStyle = function () {
        this.ionStyle.emit({
            'checkbox-checked': this.checked,
            'interactive-disabled': this.disabled,
        });
    };
    Checkbox.prototype.setFocus = function () {
        if (this.buttonEl) {
            this.buttonEl.focus();
        }
    };
    Checkbox.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this, inputId = _b.inputId, indeterminate = _b.indeterminate, disabled = _b.disabled, checked = _b.checked, value = _b.value, color = _b.color, el = _b.el;
        var labelId = inputId + '-lbl';
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        var label = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["f"])(el);
        if (label) {
            label.id = labelId;
        }
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["a"])(true, el, this.name, (checked ? value : ''), disabled);
        var path = indeterminate
            ? Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M6 12L18 12" })
            : Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M5.9,12.5l3.8,3.8l8.8-8.8" });
        if (mode === 'md') {
            path = indeterminate
                ? Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M2 12H22" })
                : Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M1.73,12.91 8.1,19.28 22.79,4.59" });
        }
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, role: "checkbox", "aria-disabled": disabled ? 'true' : null, "aria-checked": "" + checked, "aria-labelledby": labelId, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(color)), (_a = {}, _a[mode] = true, _a['in-item'] = Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["h"])('ion-item', el), _a['checkbox-checked'] = checked, _a['checkbox-disabled'] = disabled, _a['checkbox-indeterminate'] = indeterminate, _a['interactive'] = true, _a)) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { class: "checkbox-icon", viewBox: "0 0 24 24" }, path), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: this.disabled, ref: function (btnEl) { return _this.buttonEl = btnEl; } })));
    };
    Object.defineProperty(Checkbox.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkbox, "watchers", {
        get: function () {
            return {
                "checked": ["checkedChanged"],
                "disabled": ["disabledChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkbox, "style", {
        get: function () { return ":host{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:1;opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb,0,0,0),0.51);--background:var(--ion-item-background,var(--ion-background-color,#fff));--transition:background 180ms cubic-bezier(0.4,0,0.2,1);--size:18px;width:var(--size);height:var(--size)}.checkbox-icon path{stroke-dasharray:30;stroke-dashoffset:30;stroke-width:3}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{stroke-dashoffset:0;-webkit-transition:stroke-dashoffset 90ms linear 90ms;transition:stroke-dashoffset 90ms linear 90ms}:host(.checkbox-disabled){opacity:.3}:host(.in-item){margin-left:0;margin-right:0;margin-top:18px;margin-bottom:18px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:18px;margin-bottom:18px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}"; },
        enumerable: true,
        configurable: true
    });
    return Checkbox;
}());
var checkboxIds = 0;



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1jaGVja2JveC1tZC5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDL0Y7QUFDcUQ7QUFDSDtBQUNoRjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkRBQVc7QUFDcEMsd0JBQXdCLDJEQUFXO0FBQ25DLHVCQUF1QiwyREFBVztBQUNsQyx3QkFBd0IsMkRBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBVTtBQUM3QixvQkFBb0IsOERBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4REFBaUI7QUFDekI7QUFDQSxjQUFjLDJEQUFDLFVBQVUsbUJBQW1CO0FBQzVDLGNBQWMsMkRBQUMsVUFBVSxpQ0FBaUM7QUFDMUQ7QUFDQTtBQUNBLGtCQUFrQiwyREFBQyxVQUFVLGdCQUFnQjtBQUM3QyxrQkFBa0IsMkRBQUMsVUFBVSx3Q0FBd0M7QUFDckU7QUFDQSxnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLG9MQUFvTCxFQUFFLDREQUFrQixrQkFBa0IsbUNBQW1DLDREQUFXLHNLQUFzSyxFQUFFLDJEQUFDLFNBQVMsK0NBQStDLFNBQVMsMkRBQUMsWUFBWSw2R0FBNkcsK0JBQStCLEVBQUUsRUFBRTtBQUN4cUI7QUFDQTtBQUNBLDBCQUEwQixRQUFRLDJEQUFVLE9BQU8sRUFBRTtBQUNyRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGVBQWUsc0RBQXNELHdEQUF3RCx5REFBeUQsa0JBQWtCLHFCQUFxQixrQkFBa0IseUJBQXlCLHNCQUFzQixxQkFBcUIsaUJBQWlCLFVBQVUsa0JBQWtCLDJDQUEyQyw2Q0FBNkMsNENBQTRDLE9BQU8sT0FBTyxNQUFNLGNBQWMsZUFBZSxhQUFhLGdCQUFnQixrQkFBa0IsV0FBVyxZQUFZLFNBQVMsdUJBQXVCLGVBQWUsd0JBQXdCLHFCQUFxQixnQkFBZ0IsYUFBYSxpREFBaUQsV0FBVyxZQUFZLFFBQVEseUJBQXlCLFNBQVMsZUFBZSxtQ0FBbUMsY0FBYyxrQkFBa0IsV0FBVyxZQUFZLHFDQUFxQyw2QkFBNkIsaUNBQWlDLGlDQUFpQyxpQ0FBaUMsNkJBQTZCLDhCQUE4QixzQkFBc0Isb0JBQW9CLFVBQVUsOEJBQThCLGVBQWUsVUFBVSxzRkFBc0YseUNBQXlDLHFDQUFxQyxnR0FBZ0csVUFBVSwwQkFBMEIsb0JBQW9CLE1BQU0seUNBQXlDLG1CQUFtQixxQkFBcUIsMERBQTBELHlFQUF5RSx3REFBd0QsWUFBWSxrQkFBa0IsbUJBQW1CLG9CQUFvQixvQkFBb0IscUJBQXFCLGVBQWUsZ0dBQWdHLG9CQUFvQixzREFBc0QsOENBQThDLDBCQUEwQixXQUFXLGdCQUFnQixjQUFjLGVBQWUsZ0JBQWdCLG1CQUFtQixjQUFjLGdCQUFnQiw0QkFBNEIsZ0JBQWdCLGtCQUFrQixnQkFBZ0IsbUJBQW1CLDZGQUE2Riw0QkFBNEIsa0JBQWtCLG1CQUFtQix5QkFBeUIsd0JBQXdCLHdCQUF3Qix3QkFBd0IsRUFBRSxFQUFFO0FBQzlxRjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ29DOzs7Ozs7Ozs7Ozs7O0FDckhwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0JBQWtCLEVBQUU7QUFDdEQsK0JBQStCLGlCQUFpQixFQUFFO0FBQ2xELGtDQUFrQyxpQkFBaUIsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHNCQUFzQixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxRQUFRLHVEQUFTO0FBQzlEO0FBQ0EsV0FBVyx5REFBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDa0YiLCJmaWxlIjoiNDkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBkIGFzIGNyZWF0ZUV2ZW50LCBjIGFzIGdldElvbk1vZGUsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWZlZWVmZjBkLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgZiBhcyBmaW5kSXRlbUxhYmVsLCBhIGFzIHJlbmRlckhpZGRlbklucHV0IH0gZnJvbSAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzLCBoIGFzIGhvc3RDb250ZXh0IH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG52YXIgQ2hlY2tib3ggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2hlY2tib3goaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmlucHV0SWQgPSBcImlvbi1jYi1cIiArIGNoZWNrYm94SWRzKys7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgY29udHJvbCwgd2hpY2ggaXMgc3VibWl0dGVkIHdpdGggdGhlIGZvcm0gZGF0YS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuaW5wdXRJZDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGNoZWNrYm94IGlzIHNlbGVjdGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBjaGVja2JveCB3aWxsIHZpc3VhbGx5IGFwcGVhciBhcyBpbmRldGVybWluYXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBjaGVja2JveC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgdG9nZ2xlIGRvZXMgbm90IG1lYW4gaWYgaXQncyBjaGVja2VkIG9yIG5vdCwgdXNlIHRoZSBgY2hlY2tlZGBcbiAgICAgICAgICogcHJvcGVydHkgZm9yIHRoYXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSB2YWx1ZSBvZiBhIHRvZ2dsZSBpcyBhbmFsb2dvdXMgdG8gdGhlIHZhbHVlIG9mIGEgYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj5gLFxuICAgICAgICAgKiBpdCdzIG9ubHkgdXNlZCB3aGVuIHRoZSB0b2dnbGUgcGFydGljaXBhdGVzIGluIGEgbmF0aXZlIGA8Zm9ybT5gLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52YWx1ZSA9ICdvbic7XG4gICAgICAgIHRoaXMub25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnNldEZvY3VzKCk7XG4gICAgICAgICAgICBfdGhpcy5jaGVja2VkID0gIV90aGlzLmNoZWNrZWQ7XG4gICAgICAgICAgICBfdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25Gb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmlvbkZvY3VzLmVtaXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5pb25CbHVyLmVtaXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkNoYW5nZVwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25Gb2N1cyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uRm9jdXNcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uQmx1ciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQmx1clwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TdHlsZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU3R5bGVcIiwgNyk7XG4gICAgfVxuICAgIENoZWNrYm94LnByb3RvdHlwZS5jb21wb25lbnRXaWxsTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9O1xuICAgIENoZWNrYm94LnByb3RvdHlwZS5jaGVja2VkQ2hhbmdlZCA9IGZ1bmN0aW9uIChpc0NoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICBjaGVja2VkOiBpc0NoZWNrZWQsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9O1xuICAgIENoZWNrYm94LnByb3RvdHlwZS5kaXNhYmxlZENoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgfTtcbiAgICBDaGVja2JveC5wcm90b3R5cGUuZW1pdFN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlvblN0eWxlLmVtaXQoe1xuICAgICAgICAgICAgJ2NoZWNrYm94LWNoZWNrZWQnOiB0aGlzLmNoZWNrZWQsXG4gICAgICAgICAgICAnaW50ZXJhY3RpdmUtZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENoZWNrYm94LnByb3RvdHlwZS5zZXRGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uRWwpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uRWwuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ2hlY2tib3gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLCBpbnB1dElkID0gX2IuaW5wdXRJZCwgaW5kZXRlcm1pbmF0ZSA9IF9iLmluZGV0ZXJtaW5hdGUsIGRpc2FibGVkID0gX2IuZGlzYWJsZWQsIGNoZWNrZWQgPSBfYi5jaGVja2VkLCB2YWx1ZSA9IF9iLnZhbHVlLCBjb2xvciA9IF9iLmNvbG9yLCBlbCA9IF9iLmVsO1xuICAgICAgICB2YXIgbGFiZWxJZCA9IGlucHV0SWQgKyAnLWxibCc7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgdmFyIGxhYmVsID0gZmluZEl0ZW1MYWJlbChlbCk7XG4gICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgbGFiZWwuaWQgPSBsYWJlbElkO1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlckhpZGRlbklucHV0KHRydWUsIGVsLCB0aGlzLm5hbWUsIChjaGVja2VkID8gdmFsdWUgOiAnJyksIGRpc2FibGVkKTtcbiAgICAgICAgdmFyIHBhdGggPSBpbmRldGVybWluYXRlXG4gICAgICAgICAgICA/IGgoXCJwYXRoXCIsIHsgZDogXCJNNiAxMkwxOCAxMlwiIH0pXG4gICAgICAgICAgICA6IGgoXCJwYXRoXCIsIHsgZDogXCJNNS45LDEyLjVsMy44LDMuOGw4LjgtOC44XCIgfSk7XG4gICAgICAgIGlmIChtb2RlID09PSAnbWQnKSB7XG4gICAgICAgICAgICBwYXRoID0gaW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgICAgID8gaChcInBhdGhcIiwgeyBkOiBcIk0yIDEySDIyXCIgfSlcbiAgICAgICAgICAgICAgICA6IGgoXCJwYXRoXCIsIHsgZDogXCJNMS43MywxMi45MSA4LjEsMTkuMjggMjIuNzksNC41OVwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMub25DbGljaywgcm9sZTogXCJjaGVja2JveFwiLCBcImFyaWEtZGlzYWJsZWRcIjogZGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsLCBcImFyaWEtY2hlY2tlZFwiOiBcIlwiICsgY2hlY2tlZCwgXCJhcmlhLWxhYmVsbGVkYnlcIjogbGFiZWxJZCwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKGNvbG9yKSksIChfYSA9IHt9LCBfYVttb2RlXSA9IHRydWUsIF9hWydpbi1pdGVtJ10gPSBob3N0Q29udGV4dCgnaW9uLWl0ZW0nLCBlbCksIF9hWydjaGVja2JveC1jaGVja2VkJ10gPSBjaGVja2VkLCBfYVsnY2hlY2tib3gtZGlzYWJsZWQnXSA9IGRpc2FibGVkLCBfYVsnY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSddID0gaW5kZXRlcm1pbmF0ZSwgX2FbJ2ludGVyYWN0aXZlJ10gPSB0cnVlLCBfYSkpIH0sIGgoXCJzdmdcIiwgeyBjbGFzczogXCJjaGVja2JveC1pY29uXCIsIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIgfSwgcGF0aCksIGgoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsIG9uQmx1cjogdGhpcy5vbkJsdXIsIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCByZWY6IGZ1bmN0aW9uIChidG5FbCkgeyByZXR1cm4gX3RoaXMuYnV0dG9uRWwgPSBidG5FbDsgfSB9KSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENoZWNrYm94LnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENoZWNrYm94LCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiY2hlY2tlZFwiOiBbXCJjaGVja2VkQ2hhbmdlZFwiXSxcbiAgICAgICAgICAgICAgICBcImRpc2FibGVkXCI6IFtcImRpc2FibGVkQ2hhbmdlZFwiXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENoZWNrYm94LCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIjpob3N0ey0tYmFja2dyb3VuZC1jaGVja2VkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpOy0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZik7LS1jaGVja21hcmstY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsI2ZmZik7LS10cmFuc2l0aW9uOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6Mn06aG9zdCguaW9uLWNvbG9yKXstLWJhY2tncm91bmQtY2hlY2tlZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7LS1ib3JkZXItY29sb3ItY2hlY2tlZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7LS1jaGVja21hcmstY29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX1idXR0b257bGVmdDowO3RvcDowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlcjowO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO291dGxpbmU6bm9uZX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgYnV0dG9uLFtkaXI9cnRsXSBidXR0b257bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowfWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MH0uY2hlY2tib3gtaWNvbntib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTstd2Via2l0LXRyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7dHJhbnNpdGlvbjp2YXIoLS10cmFuc2l0aW9uKTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uY2hlY2tib3gtaWNvbiBwYXRoe2ZpbGw6bm9uZTtzdHJva2U6dmFyKC0tY2hlY2ttYXJrLWNvbG9yKTtzdHJva2Utd2lkdGg6MTtvcGFjaXR5OjB9Omhvc3QoLmNoZWNrYm94LWNoZWNrZWQpIC5jaGVja2JveC1pY29uLDpob3N0KC5jaGVja2JveC1pbmRldGVybWluYXRlKSAuY2hlY2tib3gtaWNvbntib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1jaGVja2VkKX06aG9zdCguY2hlY2tib3gtY2hlY2tlZCkgLmNoZWNrYm94LWljb24gcGF0aCw6aG9zdCguY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSkgLmNoZWNrYm94LWljb24gcGF0aHtvcGFjaXR5OjF9Omhvc3QoLmNoZWNrYm94LWRpc2FibGVkKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0ey0tYm9yZGVyLXJhZGl1czpjYWxjKHZhcigtLXNpemUpICogLjEyNSk7LS1ib3JkZXItd2lkdGg6MnB4Oy0tYm9yZGVyLXN0eWxlOnNvbGlkOy0tYm9yZGVyLWNvbG9yOnJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwwLjUxKTstLWJhY2tncm91bmQ6dmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCx2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKSk7LS10cmFuc2l0aW9uOmJhY2tncm91bmQgMTgwbXMgY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKTstLXNpemU6MThweDt3aWR0aDp2YXIoLS1zaXplKTtoZWlnaHQ6dmFyKC0tc2l6ZSl9LmNoZWNrYm94LWljb24gcGF0aHtzdHJva2UtZGFzaGFycmF5OjMwO3N0cm9rZS1kYXNob2Zmc2V0OjMwO3N0cm9rZS13aWR0aDozfTpob3N0KC5jaGVja2JveC1jaGVja2VkKSAuY2hlY2tib3gtaWNvbiBwYXRoLDpob3N0KC5jaGVja2JveC1pbmRldGVybWluYXRlKSAuY2hlY2tib3gtaWNvbiBwYXRoe3N0cm9rZS1kYXNob2Zmc2V0OjA7LXdlYmtpdC10cmFuc2l0aW9uOnN0cm9rZS1kYXNob2Zmc2V0IDkwbXMgbGluZWFyIDkwbXM7dHJhbnNpdGlvbjpzdHJva2UtZGFzaG9mZnNldCA5MG1zIGxpbmVhciA5MG1zfTpob3N0KC5jaGVja2JveC1kaXNhYmxlZCl7b3BhY2l0eTouM306aG9zdCguaW4taXRlbSl7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjE4cHg7bWFyZ2luLWJvdHRvbToxOHB4O2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246c3RhdGljfTpob3N0KC5pbi1pdGVtW3Nsb3Q9c3RhcnRdKXttYXJnaW4tbGVmdDo0cHg7bWFyZ2luLXJpZ2h0OjM2cHg7bWFyZ2luLXRvcDoxOHB4O21hcmdpbi1ib3R0b206MThweH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3QoLmluLWl0ZW1bc2xvdD1zdGFydF0pe21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDo0cHg7bWFyZ2luLWlubGluZS1zdGFydDo0cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjM2cHg7bWFyZ2luLWlubGluZS1lbmQ6MzZweH19XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBDaGVja2JveDtcbn0oKSk7XG52YXIgY2hlY2tib3hJZHMgPSAwO1xuZXhwb3J0IHsgQ2hlY2tib3ggYXMgaW9uX2NoZWNrYm94IH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG52YXIgaG9zdENvbnRleHQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGVsKSB7XG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xufTtcbi8qKlxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxuICovXG52YXIgY3JlYXRlQ29sb3JDbGFzc2VzID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IChfYSA9IHtcbiAgICAgICAgICAgICdpb24tY29sb3InOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIF9hW1wiaW9uLWNvbG9yLVwiICsgY29sb3JdID0gdHJ1ZSxcbiAgICAgICAgX2EpIDogdW5kZWZpbmVkO1xufTtcbnZhciBnZXRDbGFzc0xpc3QgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgIHJldHVybiBhcnJheVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPSBudWxsOyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50cmltKCk7IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSAnJzsgfSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbn07XG52YXIgZ2V0Q2xhc3NNYXAgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gbWFwW2NdID0gdHJ1ZTsgfSk7XG4gICAgcmV0dXJuIG1hcDtcbn07XG52YXIgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XG52YXIgb3BlblVSTCA9IGZ1bmN0aW9uICh1cmwsIGV2LCBkaXJlY3Rpb24pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvdXRlcjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgICAgICAgaWYgKHJvdXRlcikge1xuICAgICAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbildO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=