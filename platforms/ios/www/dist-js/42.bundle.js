(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-back-button-ios.entry.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-back-button-ios.entry.js ***!
  \****************************************************************************/
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
        get: function () { return ".sc-ion-back-button-ios-h{--background:transparent;--color-focused:var(--color);--color-hover:var(--color);--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color,opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}.ion-color.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios{color:var(--ion-color-base)}.show-back-button.sc-ion-back-button-ios-h, .can-go-back.sc-ion-back-button-ios-h > ion-header.sc-ion-back-button-ios, .can-go-back > ion-header .sc-ion-back-button-ios-h{display:block}.back-button-disabled.sc-ion-back-button-ios-h{cursor:default;opacity:.5;pointer-events:none}.button-native.sc-ion-back-button-ios{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native.sc-ion-back-button-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner.sc-ion-back-button-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}ion-icon.sc-ion-back-button-ios{padding-left:var(--icon-padding-start);padding-right:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);margin-left:var(--icon-margin-start);margin-right:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-icon.sc-ion-back-button-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);margin-left:unset;margin-right:unset;-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end)}}\@media (any-hover:hover){.sc-ion-back-button-ios-h:hover .button-native.sc-ion-back-button-ios{background:var(--background-hover);color:var(--color-hover)}}.ion-focused.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios{background:var(--background-focused);color:var(--color-focused)}\@media (any-hover:hover){.ion-color.sc-ion-back-button-ios-h:hover .button-native.sc-ion-back-button-ios{color:var(--ion-color-base)}}.ion-color.ion-focused.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios{color:var(--ion-color-base)}ion-toolbar.sc-ion-back-button-ios-h:not(.ion-color):not(.ion-color), ion-toolbar:not(.ion-color) .sc-ion-back-button-ios-h:not(.ion-color){color:var(--ion-toolbar-color,var(--color))}.sc-ion-back-button-ios-h{--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--border-radius:4px;--color:var(--ion-color-primary,#3880ff);--icon-margin-end:-5px;--icon-margin-start:-4px;--icon-font-size:1.85em;--min-height:32px;font-size:17px}.button-native.sc-ion-back-button-ios{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:visible;z-index:99}.activated.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios{opacity:.4}\@media (any-hover:hover){.sc-ion-back-button-ios-h:hover{--opacity:.6}}.ion-color.ion-focused.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios{background:rgba(var(--ion-color-base-rgb),.1)}"; },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1iYWNrLWJ1dHRvbi1pb3MuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLWVzNS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQzREO0FBQ3hEO0FBQ3lCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCLG9CQUFvQiwyREFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFFBQVEsdURBQVM7QUFDdkQ7QUFDQSxtQkFBbUIseURBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELG1CQUFtQjtBQUM5RTtBQUNBLDhDQUE4Qyw0REFBTztBQUNyRDtBQUNBLGFBQWE7QUFDYixTQUFTLEVBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQSxtREFBbUQscURBQU07QUFDekQsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHFEQUFNO0FBQ3pELFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUcsNkRBQTZELEVBQUUsNERBQWtCLGtCQUFrQix1T0FBdU8sRUFBRSwyREFBQyxZQUFZLHlEQUF5RCxFQUFFLDJE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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDa0YiLCJmaWxlIjoiNDIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGdldElvbk1vZGUsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWZlZWVmZjBkLmpzJztcbmltcG9ydCB7IGIgYXMgY29uZmlnIH0gZnJvbSAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgbyBhcyBvcGVuVVJMLCBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcyB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xudmFyIEJhY2tCdXR0b24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMShob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMubW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBidXR0b24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBvZiB0aGUgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIHRoaXMub25DbGljayA9IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG5hdiwgX2E7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXYgPSB0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1uYXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IG5hdjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX2EpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmF2LmNhbkdvQmFjaygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSAoX2Iuc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5hdi5wb3AoeyBza2lwSWZCdXN5OiB0cnVlIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBvcGVuVVJMKHRoaXMuZGVmYXVsdEhyZWYsIGV2LCAnYmFjaycpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJiYWNrQnV0dG9uSWNvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWNvbiAhPSBudWxsID8gdGhpcy5pY29uIDogY29uZmlnLmdldCgnYmFja0J1dHRvbkljb24nLCAnYXJyb3ctYmFjaycpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMS5wcm90b3R5cGUsIFwiYmFja0J1dHRvblRleHRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0QmFja0J1dHRvblRleHQgPSB0aGlzLm1vZGUgPT09ICdpb3MnID8gJ0JhY2snIDogbnVsbDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQgIT0gbnVsbCA/IHRoaXMudGV4dCA6IGNvbmZpZy5nZXQoJ2JhY2tCdXR0b25UZXh0JywgZGVmYXVsdEJhY2tCdXR0b25UZXh0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcImhhc0ljb25Pbmx5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iYWNrQnV0dG9uSWNvbiAmJiAhdGhpcy5iYWNrQnV0dG9uVGV4dDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcInJpcHBsZVR5cGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBidXR0b24gb25seSBoYXMgYW4gaWNvbiB3ZSB1c2UgdGhlIHVuYm91bmRlZFxuICAgICAgICAgICAgLy8gXCJjaXJjdWxhclwiIHJpcHBsZSBlZmZlY3RcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0ljb25Pbmx5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1bmJvdW5kZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICdib3VuZGVkJztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgY2xhc3NfMS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBfYiA9IHRoaXMsIGNvbG9yID0gX2IuY29sb3IsIGRlZmF1bHRIcmVmID0gX2IuZGVmYXVsdEhyZWYsIGRpc2FibGVkID0gX2IuZGlzYWJsZWQsIHR5cGUgPSBfYi50eXBlLCBtb2RlID0gX2IubW9kZSwgaGFzSWNvbk9ubHkgPSBfYi5oYXNJY29uT25seSwgYmFja0J1dHRvbkljb24gPSBfYi5iYWNrQnV0dG9uSWNvbiwgYmFja0J1dHRvblRleHQgPSBfYi5iYWNrQnV0dG9uVGV4dDtcbiAgICAgICAgdmFyIHNob3dCYWNrQnV0dG9uID0gZGVmYXVsdEhyZWYgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5vbkNsaWNrLCBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjcmVhdGVDb2xvckNsYXNzZXMoY29sb3IpKSwgKF9hID0ge30sIF9hW21vZGVdID0gdHJ1ZSwgX2FbJ2J1dHRvbiddID0gdHJ1ZSwgX2FbJ2JhY2stYnV0dG9uLWRpc2FibGVkJ10gPSBkaXNhYmxlZCwgX2FbJ2JhY2stYnV0dG9uLWhhcy1pY29uLW9ubHknXSA9IGhhc0ljb25Pbmx5LCBfYVsnaW9uLWFjdGl2YXRhYmxlJ10gPSB0cnVlLCBfYVsnaW9uLWZvY3VzYWJsZSddID0gdHJ1ZSwgX2FbJ3Nob3ctYmFjay1idXR0b24nXSA9IHNob3dCYWNrQnV0dG9uLCBfYSkpIH0sIGgoXCJidXR0b25cIiwgeyB0eXBlOiB0eXBlLCBkaXNhYmxlZDogZGlzYWJsZWQsIGNsYXNzOiBcImJ1dHRvbi1uYXRpdmVcIiB9LCBoKFwic3BhblwiLCB7IGNsYXNzOiBcImJ1dHRvbi1pbm5lclwiIH0sIGJhY2tCdXR0b25JY29uICYmIGgoXCJpb24taWNvblwiLCB7IGljb246IGJhY2tCdXR0b25JY29uLCBsYXp5OiBmYWxzZSB9KSwgYmFja0J1dHRvblRleHQgJiYgaChcInNwYW5cIiwgeyBjbGFzczogXCJidXR0b24tdGV4dFwiIH0sIGJhY2tCdXR0b25UZXh0KSksIG1vZGUgPT09ICdtZCcgJiYgaChcImlvbi1yaXBwbGUtZWZmZWN0XCIsIHsgdHlwZTogdGhpcy5yaXBwbGVUeXBlIH0pKSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCIuc2MtaW9uLWJhY2stYnV0dG9uLWlvcy1oey0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yLWZvY3VzZWQ6dmFyKC0tY29sb3IpOy0tY29sb3ItaG92ZXI6dmFyKC0tY29sb3IpOy0taWNvbi1tYXJnaW4tdG9wOjA7LS1pY29uLW1hcmdpbi1ib3R0b206MDstLWljb24tcGFkZGluZy10b3A6MDstLWljb24tcGFkZGluZy1lbmQ6MDstLWljb24tcGFkZGluZy1ib3R0b206MDstLWljb24tcGFkZGluZy1zdGFydDowOy0tbWFyZ2luLXRvcDowOy0tbWFyZ2luLWVuZDowOy0tbWFyZ2luLWJvdHRvbTowOy0tbWFyZ2luLXN0YXJ0OjA7LS1taW4td2lkdGg6YXV0bzstLW1pbi1oZWlnaHQ6YXV0bzstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWVuZDowOy0tcGFkZGluZy1ib3R0b206MDstLXBhZGRpbmctc3RhcnQ6MDstLW9wYWNpdHk6MTstLXJpcHBsZS1jb2xvcjpjdXJyZW50Q29sb3I7LS10cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3Isb3BhY2l0eSAxMDBtcyBsaW5lYXI7ZGlzcGxheTpub25lO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7Y29sb3I6dmFyKC0tY29sb3IpO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3RleHQtdHJhbnNmb3JtOm5vbmU7d2hpdGUtc3BhY2U6bm93cmFwOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LWZvbnQta2VybmluZzpub25lO2ZvbnQta2VybmluZzpub25lfS5pb24tY29sb3Iuc2MtaW9uLWJhY2stYnV0dG9uLWlvcy1oIC5idXR0b24tbmF0aXZlLnNjLWlvbi1iYWNrLWJ1dHRvbi1pb3N7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfS5zaG93LWJhY2stYnV0dG9uLnNjLWlvbi1iYWNrLWJ1dHRvbi1pb3MtaCwgLmNhbi1nby1iYWNrLnNjLWlvbi1iYWNrLWJ1dHRvbi1pb3MtaCA+IGlvbi1oZWFkZXIuc2MtaW9uLWJhY2stYnV0dG9uLWlvcywgLmNhbi1nby1iYWNrID4gaW9uLWhlYWRlciAuc2MtaW9uLWJhY2stYnV0dG9uLWlvcy1oe2Rpc3BsYXk6YmxvY2t9LmJhY2stYnV0dG9uLWRpc2FibGVkLnNjLWlvbi1iYWNrLWJ1dHRvbi1pb3MtaHtjdXJzb3I6ZGVmYXVsdDtvcGFjaXR5Oi41O3BvaW50ZXItZXZlbnRzOm5vbmV9LmJ1dHRvbi1uYXRpdmUuc2MtaW9uLWJhY2stYnV0dG9uLWlvc3tib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO21hcmdpbi1sZWZ0OnZhcigtLW1hcmdpbi1zdGFydCk7bWFyZ2luLXJpZ2h0OnZhcigtLW1hcmdpbi1lbmQpO21hcmdpbi10b3A6dmFyKC0tbWFyZ2luLXRvcCk7bWFyZ2luLWJvdHRvbTp2YXIoLS1tYXJnaW4tYm90dG9tKTtwYWRkaW5nLWxlZnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1yaWdodDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmctYm90dG9tKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWluLWhlaWdodDppbmhlcml0Oy13ZWJraXQtdHJhbnNpdGlvbjp2YXIoLS10cmFuc2l0aW9uKTt0cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO2JvcmRlcjowO291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2xpbmUtaGVpZ2h0OjE7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTp2YXIoLS1vcGFjaXR5KTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDowOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmJ1dHRvbi1uYXRpdmUuc2MtaW9uLWJhY2stYnV0dG9uLWlvc3ttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6dmFyKC0tbWFyZ2luLXN0YXJ0KTttYXJnaW4taW5saW5lLXN0YXJ0OnZhcigtLW1hcmdpbi1zdGFydCk7LXdlYmtpdC1tYXJnaW4tZW5kOnZhcigtLW1hcmdpbi1lbmQpO21hcmdpbi1pbmxpbmUtZW5kOnZhcigtLW1hcmdpbi1lbmQpO3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpfX0uYnV0dG9uLWlubmVyLnNjLWlvbi1iYWNrLWJ1dHRvbi1pb3N7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpyb3cgbm93cmFwO2ZsZXgtZmxvdzpyb3cgbm93cmFwOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX1pb24taWNvbi5zYy1pb24tYmFjay1idXR0b24taW9ze3BhZGRpbmctbGVmdDp2YXIoLS1pY29uLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctcmlnaHQ6dmFyKC0taWNvbi1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6dmFyKC0taWNvbi1wYWRkaW5nLXRvcCk7cGFkZGluZy1ib3R0b206dmFyKC0taWNvbi1wYWRkaW5nLWJvdHRvbSk7bWFyZ2luLWxlZnQ6dmFyKC0taWNvbi1tYXJnaW4tc3RhcnQpO21hcmdpbi1yaWdodDp2YXIoLS1pY29uLW1hcmdpbi1lbmQpO21hcmdpbi10b3A6dmFyKC0taWNvbi1tYXJnaW4tdG9wKTttYXJnaW4tYm90dG9tOnZhcigtLWljb24tbWFyZ2luLWJvdHRvbSk7ZGlzcGxheTppbmhlcml0O2ZvbnQtc2l6ZTp2YXIoLS1pY29uLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0taWNvbi1mb250LXdlaWdodCk7cG9pbnRlci1ldmVudHM6bm9uZX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7aW9uLWljb24uc2MtaW9uLWJhY2stYnV0dG9uLWlvc3twYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0taWNvbi1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1pY29uLXBhZGRpbmctc3RhcnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0taWNvbi1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLWljb24tcGFkZGluZy1lbmQpO21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDp2YXIoLS1pY29uLW1hcmdpbi1zdGFydCk7bWFyZ2luLWlubGluZS1zdGFydDp2YXIoLS1pY29uLW1hcmdpbi1zdGFydCk7LXdlYmtpdC1tYXJnaW4tZW5kOnZhcigtLWljb24tbWFyZ2luLWVuZCk7bWFyZ2luLWlubGluZS1lbmQ6dmFyKC0taWNvbi1tYXJnaW4tZW5kKX19XFxAbWVkaWEgKGFueS1ob3Zlcjpob3Zlcil7LnNjLWlvbi1iYWNrLWJ1dHRvbi1pb3MtaDpob3ZlciAuYnV0dG9uLW5hdGl2ZS5zYy1pb24tYmFjay1idXR0b24taW9ze2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7Y29sb3I6dmFyKC0tY29sb3ItaG92ZXIpfX0uaW9uLWZvY3VzZWQuc2MtaW9uLWJhY2stYnV0dG9uLWlvcy1oIC5idXR0b24tbmF0aXZlLnNjLWlvbi1iYWNrLWJ1dHRvbi1pb3N7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWZvY3VzZWQpO2NvbG9yOnZhcigtLWNvbG9yLWZvY3VzZWQpfVxcQG1lZGlhIChhbnktaG92ZXI6aG92ZXIpey5pb24tY29sb3Iuc2MtaW9uLWJhY2stYnV0dG9uLWlvcy1oOmhvdmVyIC5idXR0b24tbmF0aXZlLnNjLWlvbi1iYWNrLWJ1dHRvbi1pb3N7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfX0uaW9uLWNvbG9yLmlvbi1mb2N1c2VkLnNjLWlvbi1iYWNrLWJ1dHRvbi1pb3MtaCAuYnV0dG9uLW5hdGl2ZS5zYy1pb24tYmFjay1idXR0b24taW9ze2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX1pb24tdG9vbGJhci5zYy1pb24tYmFjay1idXR0b24taW9zLWg6bm90KC5pb24tY29sb3IpOm5vdCguaW9uLWNvbG9yKSwgaW9uLXRvb2xiYXI6bm90KC5pb24tY29sb3IpIC5zYy1pb24tYmFjay1idXR0b24taW9zLWg6bm90KC5pb24tY29sb3Ipe2NvbG9yOnZhcigtLWlvbi10b29sYmFyLWNvbG9yLHZhcigtLWNvbG9yKSl9LnNjLWlvbi1iYWNrLWJ1dHRvbi1pb3MtaHstLWJhY2tncm91bmQtZm9jdXNlZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiw1NiwxMjgsMjU1KSwwLjEpOy0tYm9yZGVyLXJhZGl1czo0cHg7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTstLWljb24tbWFyZ2luLWVuZDotNXB4Oy0taWNvbi1tYXJnaW4tc3RhcnQ6LTRweDstLWljb24tZm9udC1zaXplOjEuODVlbTstLW1pbi1oZWlnaHQ6MzJweDtmb250LXNpemU6MTdweH0uYnV0dG9uLW5hdGl2ZS5zYy1pb24tYmFjay1idXR0b24taW9zey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7b3ZlcmZsb3c6dmlzaWJsZTt6LWluZGV4Ojk5fS5hY3RpdmF0ZWQuc2MtaW9uLWJhY2stYnV0dG9uLWlvcy1oIC5idXR0b24tbmF0aXZlLnNjLWlvbi1iYWNrLWJ1dHRvbi1pb3N7b3BhY2l0eTouNH1cXEBtZWRpYSAoYW55LWhvdmVyOmhvdmVyKXsuc2MtaW9uLWJhY2stYnV0dG9uLWlvcy1oOmhvdmVyey0tb3BhY2l0eTouNn19Lmlvbi1jb2xvci5pb24tZm9jdXNlZC5zYy1pb24tYmFjay1idXR0b24taW9zLWggLmJ1dHRvbi1uYXRpdmUuc2MtaW9uLWJhY2stYnV0dG9uLWlvc3tiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwuMSl9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbmV4cG9ydCB7IEJhY2tCdXR0b24gYXMgaW9uX2JhY2tfYnV0dG9uIH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG52YXIgaG9zdENvbnRleHQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGVsKSB7XG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xufTtcbi8qKlxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxuICovXG52YXIgY3JlYXRlQ29sb3JDbGFzc2VzID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IChfYSA9IHtcbiAgICAgICAgICAgICdpb24tY29sb3InOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIF9hW1wiaW9uLWNvbG9yLVwiICsgY29sb3JdID0gdHJ1ZSxcbiAgICAgICAgX2EpIDogdW5kZWZpbmVkO1xufTtcbnZhciBnZXRDbGFzc0xpc3QgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgIHJldHVybiBhcnJheVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPSBudWxsOyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50cmltKCk7IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSAnJzsgfSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbn07XG52YXIgZ2V0Q2xhc3NNYXAgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gbWFwW2NdID0gdHJ1ZTsgfSk7XG4gICAgcmV0dXJuIG1hcDtcbn07XG52YXIgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XG52YXIgb3BlblVSTCA9IGZ1bmN0aW9uICh1cmwsIGV2LCBkaXJlY3Rpb24pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvdXRlcjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgICAgICAgaWYgKHJvdXRlcikge1xuICAgICAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbildO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=