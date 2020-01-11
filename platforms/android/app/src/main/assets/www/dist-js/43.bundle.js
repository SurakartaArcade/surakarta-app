(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-back-button-md.entry.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-back-button-md.entry.js ***!
  \***************************************************************************/
/*! exports provided: ion_back_button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_back_button", function() { return BackButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");




var BackButton = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        /**
         * If `true`, the user cannot interact with the button.
         */
        this.disabled = false;
        /**
         * The type of the button.
         */
        this.type = 'button';
        this.onClick = function (ev) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var nav, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        nav = this.el.closest('ion-nav');
                        ev.preventDefault();
                        _a = nav;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, nav.canGoBack()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        if (_a) {
                            return [2 /*return*/, nav.pop({ skipIfBusy: true })];
                        }
                        return [2 /*return*/, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["o"])(this.defaultHref, ev, 'back')];
                }
            });
        }); };
    }
    Object.defineProperty(class_1.prototype, "backButtonIcon", {
        get: function () {
            return this.icon != null ? this.icon : _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"].get('backButtonIcon', 'arrow-back');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "backButtonText", {
        get: function () {
            var defaultBackButtonText = this.mode === 'ios' ? 'Back' : null;
            return this.text != null ? this.text : _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"].get('backButtonText', defaultBackButtonText);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "hasIconOnly", {
        get: function () {
            return this.backButtonIcon && !this.backButtonText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "rippleType", {
        get: function () {
            // If the button only has an icon we use the unbounded
            // "circular" ripple effect
            if (this.hasIconOnly) {
                return 'unbounded';
            }
            return 'bounded';
        },
        enumerable: true,
        configurable: true
    });
    class_1.prototype.render = function () {
        var _a;
        var _b = this, color = _b.color, defaultHref = _b.defaultHref, disabled = _b.disabled, type = _b.type, mode = _b.mode, hasIconOnly = _b.hasIconOnly, backButtonIcon = _b.backButtonIcon, backButtonText = _b.backButtonText;
        var showBackButton = defaultHref !== undefined;
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onClick: this.onClick, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(color)), (_a = {}, _a[mode] = true, _a['button'] = true, _a['back-button-disabled'] = disabled, _a['back-button-has-icon-only'] = hasIconOnly, _a['ion-activatable'] = true, _a['ion-focusable'] = true, _a['show-back-button'] = showBackButton, _a)) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button", { type: type, disabled: disabled, class: "button-native" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { class: "button-inner" }, backButtonIcon && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon", { icon: backButtonIcon, lazy: false }), backButtonText && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { class: "button-text" }, backButtonText)), mode === 'md' && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-ripple-effect", { type: this.rippleType }))));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ".sc-ion-back-button-md-h{--background:transparent;--color-focused:var(--color);--color-hover:var(--color);--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color,opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}.ion-color.sc-ion-back-button-md-h .button-native.sc-ion-back-button-md{color:var(--ion-color-base)}.show-back-button.sc-ion-back-button-md-h, .can-go-back.sc-ion-back-button-md-h > ion-header.sc-ion-back-button-md, .can-go-back > ion-header .sc-ion-back-button-md-h{display:block}.back-button-disabled.sc-ion-back-button-md-h{cursor:default;opacity:.5;pointer-events:none}.button-native.sc-ion-back-button-md{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native.sc-ion-back-button-md{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner.sc-ion-back-button-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}ion-icon.sc-ion-back-button-md{padding-left:var(--icon-padding-start);padding-right:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);margin-left:var(--icon-margin-start);margin-right:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-icon.sc-ion-back-button-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);margin-left:unset;margin-right:unset;-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end)}}\@media (any-hover:hover){.sc-ion-back-button-md-h:hover .button-native.sc-ion-back-button-md{background:var(--background-hover);color:var(--color-hover)}}.ion-focused.sc-ion-back-button-md-h .button-native.sc-ion-back-button-md{background:var(--background-focused);color:var(--color-focused)}\@media (any-hover:hover){.ion-color.sc-ion-back-button-md-h:hover .button-native.sc-ion-back-button-md{color:var(--ion-color-base)}}.ion-color.ion-focused.sc-ion-back-button-md-h .button-native.sc-ion-back-button-md{color:var(--ion-color-base)}ion-toolbar.sc-ion-back-button-md-h:not(.ion-color):not(.ion-color), ion-toolbar:not(.ion-color) .sc-ion-back-button-md-h:not(.ion-color){color:var(--ion-toolbar-color,var(--color))}.sc-ion-back-button-md-h{--border-radius:4px;--background-focused:rgba(66,66,66,0.24);--background-hover:rgba(66,66,66,0.08);--color:currentColor;--icon-margin-end:0;--icon-margin-start:0;--icon-font-size:24px;--icon-font-weight:normal;--min-height:32px;--min-width:44px;--padding-start:12px;--padding-end:12px;font-size:14px;font-weight:500;text-transform:uppercase}.back-button-has-icon-only.sc-ion-back-button-md-h{--border-radius:50%;min-width:48px;height:48px}.button-native.sc-ion-back-button-md{-webkit-box-shadow:none;box-shadow:none}.button-text.sc-ion-back-button-md{padding-left:4px;padding-right:4px;padding-top:0;padding-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-text.sc-ion-back-button-md{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}ion-icon.sc-ion-back-button-md{line-height:.67;text-align:start}\@media (any-hover:hover){.ion-color.sc-ion-back-button-md-h:hover .button-native.sc-ion-back-button-md{background:rgba(var(--ion-color-base-rgb),.08)}}.ion-color.ion-focused.sc-ion-back-button-md-h .button-native.sc-ion-back-button-md{background:rgba(var(--ion-color-base-rgb),.24)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1iYWNrLWJ1dHRvbi1tZC5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDNEQ7QUFDeEQ7QUFDeUI7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEIsb0JBQW9CLDJEQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUSx1REFBUztBQUN2RDtBQUNBLG1CQUFtQix5REFBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsbUJBQW1CO0FBQzlFO0FBQ0EsOENBQThDLDREQUFPO0FBQ3JEO0FBQ0EsYUFBYTtBQUNiLFNBQVMsRUFBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxxREFBTTtBQUN6RCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxtREFBbUQscURBQU07QUFDekQsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyw2REFBNkQsRUFBRSw0REFBa0Isa0JBQWtCLHVPQUF1TyxFQUFFLDJEQUFDLFlBQVkseURBQXlELEVBQUUsMkRB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RCxrQ0FBa0MsaUJBQWlCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxzQkFBc0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUSx1REFBUztBQUM5RDtBQUNBLFdBQVcseURBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFO0FBQ2tGIiwiZmlsZSI6IjQzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBnZXRJb25Nb2RlLCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgeyBiIGFzIGNvbmZpZyB9IGZyb20gJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IG8gYXMgb3BlblVSTCwgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcbnZhciBCYWNrQnV0dG9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzEoaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLm1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHR5cGUgb2YgdGhlIGJ1dHRvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHlwZSA9ICdidXR0b24nO1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBuYXYsIF9hO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2ID0gdGhpcy5lbC5jbG9zZXN0KCdpb24tbmF2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBuYXY7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV9hKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5hdi5jYW5Hb0JhY2soKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gKF9iLnNlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuYXYucG9wKHsgc2tpcElmQnVzeTogdHJ1ZSB9KV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgb3BlblVSTCh0aGlzLmRlZmF1bHRIcmVmLCBldiwgJ2JhY2snKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pOyB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMS5wcm90b3R5cGUsIFwiYmFja0J1dHRvbkljb25cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmljb24gIT0gbnVsbCA/IHRoaXMuaWNvbiA6IGNvbmZpZy5nZXQoJ2JhY2tCdXR0b25JY29uJywgJ2Fycm93LWJhY2snKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcImJhY2tCdXR0b25UZXh0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdEJhY2tCdXR0b25UZXh0ID0gdGhpcy5tb2RlID09PSAnaW9zJyA/ICdCYWNrJyA6IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0ICE9IG51bGwgPyB0aGlzLnRleHQgOiBjb25maWcuZ2V0KCdiYWNrQnV0dG9uVGV4dCcsIGRlZmF1bHRCYWNrQnV0dG9uVGV4dCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJoYXNJY29uT25seVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmFja0J1dHRvbkljb24gJiYgIXRoaXMuYmFja0J1dHRvblRleHQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJyaXBwbGVUeXBlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgYnV0dG9uIG9ubHkgaGFzIGFuIGljb24gd2UgdXNlIHRoZSB1bmJvdW5kZWRcbiAgICAgICAgICAgIC8vIFwiY2lyY3VsYXJcIiByaXBwbGUgZWZmZWN0XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNJY29uT25seSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAndW5ib3VuZGVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnYm91bmRlZCc7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLCBjb2xvciA9IF9iLmNvbG9yLCBkZWZhdWx0SHJlZiA9IF9iLmRlZmF1bHRIcmVmLCBkaXNhYmxlZCA9IF9iLmRpc2FibGVkLCB0eXBlID0gX2IudHlwZSwgbW9kZSA9IF9iLm1vZGUsIGhhc0ljb25Pbmx5ID0gX2IuaGFzSWNvbk9ubHksIGJhY2tCdXR0b25JY29uID0gX2IuYmFja0J1dHRvbkljb24sIGJhY2tCdXR0b25UZXh0ID0gX2IuYmFja0J1dHRvblRleHQ7XG4gICAgICAgIHZhciBzaG93QmFja0J1dHRvbiA9IGRlZmF1bHRIcmVmICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMub25DbGljaywgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKGNvbG9yKSksIChfYSA9IHt9LCBfYVttb2RlXSA9IHRydWUsIF9hWydidXR0b24nXSA9IHRydWUsIF9hWydiYWNrLWJ1dHRvbi1kaXNhYmxlZCddID0gZGlzYWJsZWQsIF9hWydiYWNrLWJ1dHRvbi1oYXMtaWNvbi1vbmx5J10gPSBoYXNJY29uT25seSwgX2FbJ2lvbi1hY3RpdmF0YWJsZSddID0gdHJ1ZSwgX2FbJ2lvbi1mb2N1c2FibGUnXSA9IHRydWUsIF9hWydzaG93LWJhY2stYnV0dG9uJ10gPSBzaG93QmFja0J1dHRvbiwgX2EpKSB9LCBoKFwiYnV0dG9uXCIsIHsgdHlwZTogdHlwZSwgZGlzYWJsZWQ6IGRpc2FibGVkLCBjbGFzczogXCJidXR0b24tbmF0aXZlXCIgfSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJidXR0b24taW5uZXJcIiB9LCBiYWNrQnV0dG9uSWNvbiAmJiBoKFwiaW9uLWljb25cIiwgeyBpY29uOiBiYWNrQnV0dG9uSWNvbiwgbGF6eTogZmFsc2UgfSksIGJhY2tCdXR0b25UZXh0ICYmIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwiYnV0dG9uLXRleHRcIiB9LCBiYWNrQnV0dG9uVGV4dCkpLCBtb2RlID09PSAnbWQnICYmIGgoXCJpb24tcmlwcGxlLWVmZmVjdFwiLCB7IHR5cGU6IHRoaXMucmlwcGxlVHlwZSB9KSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEsIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiLnNjLWlvbi1iYWNrLWJ1dHRvbi1tZC1oey0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yLWZvY3VzZWQ6dmFyKC0tY29sb3IpOy0tY29sb3ItaG92ZXI6dmFyKC0tY29sb3IpOy0taWNvbi1tYXJnaW4tdG9wOjA7LS1pY29uLW1hcmdpbi1ib3R0b206MDstLWljb24tcGFkZGluZy10b3A6MDstLWljb24tcGFkZGluZy1lbmQ6MDstLWljb24tcGFkZGluZy1ib3R0b206MDstLWljb24tcGFkZGluZy1zdGFydDowOy0tbWFyZ2luLXRvcDowOy0tbWFyZ2luLWVuZDowOy0tbWFyZ2luLWJvdHRvbTowOy0tbWFyZ2luLXN0YXJ0OjA7LS1taW4td2lkdGg6YXV0bzstLW1pbi1oZWlnaHQ6YXV0bzstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWVuZDowOy0tcGFkZGluZy1ib3R0b206MDstLXBhZGRpbmctc3RhcnQ6MDstLW9wYWNpdHk6MTstLXJpcHBsZS1jb2xvcjpjdXJyZW50Q29sb3I7LS10cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3Isb3BhY2l0eSAxMDBtcyBsaW5lYXI7ZGlzcGxheTpub25lO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7Y29sb3I6dmFyKC0tY29sb3IpO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3RleHQtdHJhbnNmb3JtOm5vbmU7d2hpdGUtc3BhY2U6bm93cmFwOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LWZvbnQta2VybmluZzpub25lO2ZvbnQta2VybmluZzpub25lfS5pb24tY29sb3Iuc2MtaW9uLWJhY2stYnV0dG9uLW1kLWggLmJ1dHRvbi1uYXRpdmUuc2MtaW9uLWJhY2stYnV0dG9uLW1ke2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX0uc2hvdy1iYWNrLWJ1dHRvbi5zYy1pb24tYmFjay1idXR0b24tbWQtaCwgLmNhbi1nby1iYWNrLnNjLWlvbi1iYWNrLWJ1dHRvbi1tZC1oID4gaW9uLWhlYWRlci5zYy1pb24tYmFjay1idXR0b24tbWQsIC5jYW4tZ28tYmFjayA+IGlvbi1oZWFkZXIgLnNjLWlvbi1iYWNrLWJ1dHRvbi1tZC1oe2Rpc3BsYXk6YmxvY2t9LmJhY2stYnV0dG9uLWRpc2FibGVkLnNjLWlvbi1iYWNrLWJ1dHRvbi1tZC1oe2N1cnNvcjpkZWZhdWx0O29wYWNpdHk6LjU7cG9pbnRlci1ldmVudHM6bm9uZX0uYnV0dG9uLW5hdGl2ZS5zYy1pb24tYmFjay1idXR0b24tbWR7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDttYXJnaW4tbGVmdDp2YXIoLS1tYXJnaW4tc3RhcnQpO21hcmdpbi1yaWdodDp2YXIoLS1tYXJnaW4tZW5kKTttYXJnaW4tdG9wOnZhcigtLW1hcmdpbi10b3ApO21hcmdpbi1ib3R0b206dmFyKC0tbWFyZ2luLWJvdHRvbSk7cGFkZGluZy1sZWZ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctcmlnaHQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsZXR0ZXItc3BhY2luZzppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3RleHQtYWxpZ246aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O2NvbG9yOmluaGVyaXQ7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21pbi1oZWlnaHQ6aW5oZXJpdDstd2Via2l0LXRyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7dHJhbnNpdGlvbjp2YXIoLS10cmFuc2l0aW9uKTtib3JkZXI6MDtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtsaW5lLWhlaWdodDoxO2N1cnNvcjpwb2ludGVyO29wYWNpdHk6dmFyKC0tb3BhY2l0eSk7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6MDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5idXR0b24tbmF0aXZlLnNjLWlvbi1iYWNrLWJ1dHRvbi1tZHttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6dmFyKC0tbWFyZ2luLXN0YXJ0KTttYXJnaW4taW5saW5lLXN0YXJ0OnZhcigtLW1hcmdpbi1zdGFydCk7LXdlYmtpdC1tYXJnaW4tZW5kOnZhcigtLW1hcmdpbi1lbmQpO21hcmdpbi1pbmxpbmUtZW5kOnZhcigtLW1hcmdpbi1lbmQpO3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpfX0uYnV0dG9uLWlubmVyLnNjLWlvbi1iYWNrLWJ1dHRvbi1tZHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OnJvdyBub3dyYXA7ZmxleC1mbG93OnJvdyBub3dyYXA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfWlvbi1pY29uLnNjLWlvbi1iYWNrLWJ1dHRvbi1tZHtwYWRkaW5nLWxlZnQ6dmFyKC0taWNvbi1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLXJpZ2h0OnZhcigtLWljb24tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLWljb24tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLWljb24tcGFkZGluZy1ib3R0b20pO21hcmdpbi1sZWZ0OnZhcigtLWljb24tbWFyZ2luLXN0YXJ0KTttYXJnaW4tcmlnaHQ6dmFyKC0taWNvbi1tYXJnaW4tZW5kKTttYXJnaW4tdG9wOnZhcigtLWljb24tbWFyZ2luLXRvcCk7bWFyZ2luLWJvdHRvbTp2YXIoLS1pY29uLW1hcmdpbi1ib3R0b20pO2Rpc3BsYXk6aW5oZXJpdDtmb250LXNpemU6dmFyKC0taWNvbi1mb250LXNpemUpO2ZvbnQtd2VpZ2h0OnZhcigtLWljb24tZm9udC13ZWlnaHQpO3BvaW50ZXItZXZlbnRzOm5vbmV9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApe2lvbi1pY29uLnNjLWlvbi1iYWNrLWJ1dHRvbi1tZHtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0taWNvbi1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1pY29uLXBhZGRpbmctc3RhcnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0taWNvbi1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLWljb24tcGFkZGluZy1lbmQpO21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDp2YXIoLS1pY29uLW1hcmdpbi1zdGFydCk7bWFyZ2luLWlubGluZS1zdGFydDp2YXIoLS1pY29uLW1hcmdpbi1zdGFydCk7LXdlYmtpdC1tYXJnaW4tZW5kOnZhcigtLWljb24tbWFyZ2luLWVuZCk7bWFyZ2luLWlubGluZS1lbmQ6dmFyKC0taWNvbi1tYXJnaW4tZW5kKX19XFxAbWVkaWEgKGFueS1ob3Zlcjpob3Zlcil7LnNjLWlvbi1iYWNrLWJ1dHRvbi1tZC1oOmhvdmVyIC5idXR0b24tbmF0aXZlLnNjLWlvbi1iYWNrLWJ1dHRvbi1tZHtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtaG92ZXIpO2NvbG9yOnZhcigtLWNvbG9yLWhvdmVyKX19Lmlvbi1mb2N1c2VkLnNjLWlvbi1iYWNrLWJ1dHRvbi1tZC1oIC5idXR0b24tbmF0aXZlLnNjLWlvbi1iYWNrLWJ1dHRvbi1tZHtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtZm9jdXNlZCk7Y29sb3I6dmFyKC0tY29sb3ItZm9jdXNlZCl9XFxAbWVkaWEgKGFueS1ob3Zlcjpob3Zlcil7Lmlvbi1jb2xvci5zYy1pb24tYmFjay1idXR0b24tbWQtaDpob3ZlciAuYnV0dG9uLW5hdGl2ZS5zYy1pb24tYmFjay1idXR0b24tbWR7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfX0uaW9uLWNvbG9yLmlvbi1mb2N1c2VkLnNjLWlvbi1iYWNrLWJ1dHRvbi1tZC1oIC5idXR0b24tbmF0aXZlLnNjLWlvbi1iYWNrLWJ1dHRvbi1tZHtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9aW9uLXRvb2xiYXIuc2MtaW9uLWJhY2stYnV0dG9uLW1kLWg6bm90KC5pb24tY29sb3IpOm5vdCguaW9uLWNvbG9yKSwgaW9uLXRvb2xiYXI6bm90KC5pb24tY29sb3IpIC5zYy1pb24tYmFjay1idXR0b24tbWQtaDpub3QoLmlvbi1jb2xvcil7Y29sb3I6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsdmFyKC0tY29sb3IpKX0uc2MtaW9uLWJhY2stYnV0dG9uLW1kLWh7LS1ib3JkZXItcmFkaXVzOjRweDstLWJhY2tncm91bmQtZm9jdXNlZDpyZ2JhKDY2LDY2LDY2LDAuMjQpOy0tYmFja2dyb3VuZC1ob3ZlcjpyZ2JhKDY2LDY2LDY2LDAuMDgpOy0tY29sb3I6Y3VycmVudENvbG9yOy0taWNvbi1tYXJnaW4tZW5kOjA7LS1pY29uLW1hcmdpbi1zdGFydDowOy0taWNvbi1mb250LXNpemU6MjRweDstLWljb24tZm9udC13ZWlnaHQ6bm9ybWFsOy0tbWluLWhlaWdodDozMnB4Oy0tbWluLXdpZHRoOjQ0cHg7LS1wYWRkaW5nLXN0YXJ0OjEycHg7LS1wYWRkaW5nLWVuZDoxMnB4O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9LmJhY2stYnV0dG9uLWhhcy1pY29uLW9ubHkuc2MtaW9uLWJhY2stYnV0dG9uLW1kLWh7LS1ib3JkZXItcmFkaXVzOjUwJTttaW4td2lkdGg6NDhweDtoZWlnaHQ6NDhweH0uYnV0dG9uLW5hdGl2ZS5zYy1pb24tYmFjay1idXR0b24tbWR7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfS5idXR0b24tdGV4dC5zYy1pb24tYmFjay1idXR0b24tbWR7cGFkZGluZy1sZWZ0OjRweDtwYWRkaW5nLXJpZ2h0OjRweDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5idXR0b24tdGV4dC5zYy1pb24tYmFjay1idXR0b24tbWR7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjRweDtwYWRkaW5nLWlubGluZS1zdGFydDo0cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo0cHg7cGFkZGluZy1pbmxpbmUtZW5kOjRweH19aW9uLWljb24uc2MtaW9uLWJhY2stYnV0dG9uLW1ke2xpbmUtaGVpZ2h0Oi42Nzt0ZXh0LWFsaWduOnN0YXJ0fVxcQG1lZGlhIChhbnktaG92ZXI6aG92ZXIpey5pb24tY29sb3Iuc2MtaW9uLWJhY2stYnV0dG9uLW1kLWg6aG92ZXIgLmJ1dHRvbi1uYXRpdmUuc2MtaW9uLWJhY2stYnV0dG9uLW1ke2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLC4wOCl9fS5pb24tY29sb3IuaW9uLWZvY3VzZWQuc2MtaW9uLWJhY2stYnV0dG9uLW1kLWggLmJ1dHRvbi1uYXRpdmUuc2MtaW9uLWJhY2stYnV0dG9uLW1ke2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLC4yNCl9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbmV4cG9ydCB7IEJhY2tCdXR0b24gYXMgaW9uX2JhY2tfYnV0dG9uIH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG52YXIgaG9zdENvbnRleHQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGVsKSB7XG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xufTtcbi8qKlxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxuICovXG52YXIgY3JlYXRlQ29sb3JDbGFzc2VzID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IChfYSA9IHtcbiAgICAgICAgICAgICdpb24tY29sb3InOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIF9hW1wiaW9uLWNvbG9yLVwiICsgY29sb3JdID0gdHJ1ZSxcbiAgICAgICAgX2EpIDogdW5kZWZpbmVkO1xufTtcbnZhciBnZXRDbGFzc0xpc3QgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgIHJldHVybiBhcnJheVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPSBudWxsOyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50cmltKCk7IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSAnJzsgfSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbn07XG52YXIgZ2V0Q2xhc3NNYXAgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gbWFwW2NdID0gdHJ1ZTsgfSk7XG4gICAgcmV0dXJuIG1hcDtcbn07XG52YXIgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XG52YXIgb3BlblVSTCA9IGZ1bmN0aW9uICh1cmwsIGV2LCBkaXJlY3Rpb24pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvdXRlcjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgICAgICAgaWYgKHJvdXRlcikge1xuICAgICAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbildO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=