(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-md.entry.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-md.entry.js ***!
  \****************************************************************************/
/*! exports provided: ion_action_sheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_action_sheet", function() { return ActionSheet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation-af478fe9.js */ "./node_modules/@ionic/core/dist/esm-es5/animation-af478fe9.js");
/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlays-10640d86.js */ "./node_modules/@ionic/core/dist/esm-es5/overlays-10640d86.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");







/**
 * iOS Action Sheet Enter Animation
 */
var iosEnterAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.4);
    wrapperAnimation
        .addElement(baseEl.querySelector('.action-sheet-wrapper'))
        .fromTo('transform', 'translateY(100%)', 'translateY(0%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * iOS Action Sheet Leave Animation
 */
var iosLeaveAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.4, 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.action-sheet-wrapper'))
        .fromTo('transform', 'translateY(0%)', 'translateY(100%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(450)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * MD Action Sheet Enter Animation
 */
var mdEnterAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.32);
    wrapperAnimation
        .addElement(baseEl.querySelector('.action-sheet-wrapper'))
        .fromTo('transform', 'translateY(100%)', 'translateY(0%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * MD Action Sheet Leave Animation
 */
var mdLeaveAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.32, 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.action-sheet-wrapper'))
        .fromTo('transform', 'translateY(0%)', 'translateY(100%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(450)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
var ActionSheet = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.presented = false;
        this.mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = true;
        /**
         * An array of buttons for the action sheet.
         */
        this.buttons = [];
        /**
         * If `true`, the action sheet will be dismissed when the backdrop is clicked.
         */
        this.backdropDismiss = true;
        /**
         * If `true`, the action sheet will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        /**
         * If `true`, the action sheet will animate.
         */
        this.animated = true;
        this.onBackdropTap = function () {
            _this.dismiss(undefined, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["B"]);
        };
        this.dispatchCancelHandler = function (ev) {
            var role = ev.detail.role;
            if (Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["i"])(role)) {
                var cancelButton = _this.getButtons().find(function (b) { return b.role === 'cancel'; });
                _this.callButtonHandler(cancelButton);
            }
        };
        Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this.el);
        this.didPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionActionSheetDidPresent", 7);
        this.willPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionActionSheetWillPresent", 7);
        this.willDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionActionSheetWillDismiss", 7);
        this.didDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionActionSheetDidDismiss", 7);
    }
    /**
     * Present the action sheet overlay after it has been created.
     */
    class_1.prototype.present = function () {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this, 'actionSheetEnter', iosEnterAnimation, mdEnterAnimation);
    };
    /**
     * Dismiss the action sheet overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the action sheet.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the action sheet.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */
    class_1.prototype.dismiss = function (data, role) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["f"])(this, data, role, 'actionSheetLeave', iosLeaveAnimation, mdLeaveAnimation);
    };
    /**
     * Returns a promise that resolves when the action sheet did dismiss.
     */
    class_1.prototype.onDidDismiss = function () {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.el, 'ionActionSheetDidDismiss');
    };
    /**
     * Returns a promise that resolves when the action sheet will dismiss.
     *
     */
    class_1.prototype.onWillDismiss = function () {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.el, 'ionActionSheetWillDismiss');
    };
    class_1.prototype.buttonClick = function (button) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var role, shouldDismiss;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        role = button.role;
                        if (Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["i"])(role)) {
                            return [2 /*return*/, this.dismiss(undefined, role)];
                        }
                        return [4 /*yield*/, this.callButtonHandler(button)];
                    case 1:
                        shouldDismiss = _a.sent();
                        if (shouldDismiss) {
                            return [2 /*return*/, this.dismiss(undefined, button.role)];
                        }
                        return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    class_1.prototype.callButtonHandler = function (button) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var rtn;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!button) return [3 /*break*/, 2];
                        return [4 /*yield*/, Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["s"])(button.handler)];
                    case 1:
                        rtn = _a.sent();
                        if (rtn === false) {
                            // if the return value of the handler is false then do not dismiss
                            return [2 /*return*/, false];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, true];
                }
            });
        });
    };
    class_1.prototype.getButtons = function () {
        return this.buttons.map(function (b) {
            return (typeof b === 'string')
                ? { text: b }
                : b;
        });
    };
    class_1.prototype.render = function () {
        var _a;
        var _this = this;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var allButtons = this.getButtons();
        var cancelButton = allButtons.find(function (b) { return b.role === 'cancel'; });
        var buttons = allButtons.filter(function (b) { return b.role !== 'cancel'; });
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { role: "dialog", "aria-modal": "true", style: {
                zIndex: "" + (20000 + this.overlayIndex),
            }, class: Object.assign(Object.assign((_a = {}, _a[mode] = true, _a), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__["g"])(this.cssClass)), { 'action-sheet-translucent': this.translucent }), onIonActionSheetWillDismiss: this.dispatchCancelHandler, onIonBackdropTap: this.onBackdropTap }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-backdrop", { tappable: this.backdropDismiss }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "action-sheet-wrapper", role: "dialog" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "action-sheet-container" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "action-sheet-group" }, this.header !== undefined &&
            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "action-sheet-title" }, this.header, this.subHeader && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "action-sheet-sub-title" }, this.subHeader)), buttons.map(function (b) { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button", { type: "button", "ion-activatable": true, class: buttonClass(b), onClick: function () { return _this.buttonClick(b); } }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { class: "action-sheet-button-inner" }, b.icon && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon", { icon: b.icon, lazy: false, class: "action-sheet-icon" }), b.text), mode === 'md' && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-ripple-effect", null)); })), cancelButton &&
            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "action-sheet-group action-sheet-group-cancel" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button", { type: "button", class: buttonClass(cancelButton), onClick: function () { return _this.buttonClick(cancelButton); } }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { class: "action-sheet-button-inner" }, cancelButton.icon &&
                Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon", { icon: cancelButton.icon, lazy: false, class: "action-sheet-icon" }), cancelButton.text)))))));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ".sc-ion-action-sheet-md-h{--color:initial;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family,inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-wrapper.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-button.sc-ion-action-sheet-md{display:block;width:100%;border:0;outline:none;font-family:inherit}.action-sheet-button.activated.sc-ion-action-sheet-md{background:var(--background-activated)}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-selected.sc-ion-action-sheet-md{background:var(--background-selected)}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color,var(--ion-background-color,#fff));--background-selected:var(--background,);--background-activated:var(--background)}.action-sheet-title.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:20px;padding-bottom:17px;height:60px;color:var(--color,rgba(var(--ion-text-color-rgb,0,0,0),.54));font-size:16px;text-align:start}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-title.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:0}.action-sheet-button.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;position:relative;height:52px;background:transparent;color:var(--color,var(--ion-color-step-850,#262626));font-size:16px;text-align:start;contain:strict;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-icon.sc-ion-action-sheet-md{padding-bottom:4px;margin-left:0;margin-right:32px;margin-top:0;margin-bottom:0;color:var(--color,rgba(var(--ion-text-color-rgb,0,0,0),.54));font-size:24px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-icon.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px}}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:700}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var buttonClass = function (button) {
    var _a;
    return Object.assign((_a = { 'action-sheet-button': true, 'ion-activatable': true }, _a["action-sheet-" + button.role] = button.role !== undefined, _a), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__["g"])(button.cssClass));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1hY3Rpb24tc2hlZXQtbWQuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLWVzNS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQzhFO0FBQy9GO0FBQ0M7QUFDZ0M7QUFDeUY7QUFDakc7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0VBQWU7QUFDdkMsNEJBQTRCLGdFQUFlO0FBQzNDLDJCQUEyQixnRUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnRUFBZTtBQUN2Qyw0QkFBNEIsZ0VBQWU7QUFDM0MsMkJBQTJCLGdFQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdFQUFlO0FBQ3ZDLDRCQUE0QixnRUFBZTtBQUMzQywyQkFBMkIsZ0VBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0VBQWU7QUFDdkMsNEJBQTRCLGdFQUFlO0FBQzNDLDJCQUEyQixnRUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBLG9CQUFvQiwyREFB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QUNBO0FBQ0EsZ0NBQWdDLHVEQUF1RCxzRUFBc0UsNERBQVc7QUFDeEs7QUFDMkM7Ozs7Ozs7Ozs7Ozs7QUM1TzNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxrQkFBa0IsRUFBRTtBQUN0RCwrQkFBK0IsaUJBQWlCLEVBQUU7QUFDbEQsa0NBQWtDLGlCQUFpQixFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Qsc0JBQXNCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFFBQVEsdURBQVM7QUFDOUQ7QUFDQSxXQUFXLHlEQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNrRiIsImZpbGUiOiIzOS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgZ2V0SW9uTW9kZSwgZCBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtZmVlZWZmMGQuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUFuaW1hdGlvbiB9IGZyb20gJy4vYW5pbWF0aW9uLWFmNDc4ZmU5LmpzJztcbmltcG9ydCB7IEIgYXMgQkFDS0RST1AsIGkgYXMgaXNDYW5jZWwsIGQgYXMgcHJlcGFyZU92ZXJsYXksIGUgYXMgcHJlc2VudCwgZiBhcyBkaXNtaXNzLCBnIGFzIGV2ZW50TWV0aG9kLCBzIGFzIHNhZmVDYWxsIH0gZnJvbSAnLi9vdmVybGF5cy0xMDY0MGQ4Ni5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldENsYXNzTWFwIH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG4vKipcbiAqIGlPUyBBY3Rpb24gU2hlZXQgRW50ZXIgQW5pbWF0aW9uXG4gKi9cbnZhciBpb3NFbnRlckFuaW1hdGlvbiA9IGZ1bmN0aW9uIChiYXNlRWwpIHtcbiAgICB2YXIgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgYmFja2Ryb3BBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMC40KTtcbiAgICB3cmFwcGVyQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uLXNoZWV0LXdyYXBwZXInKSlcbiAgICAgICAgLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoMTAwJSknLCAndHJhbnNsYXRlWSgwJSknKTtcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXG4gICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllciguMzYsLjY2LC4wNCwxKScpXG4gICAgICAgIC5kdXJhdGlvbig0MDApXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xuLyoqXG4gKiBpT1MgQWN0aW9uIFNoZWV0IExlYXZlIEFuaW1hdGlvblxuICovXG52YXIgaW9zTGVhdmVBbmltYXRpb24gPSBmdW5jdGlvbiAoYmFzZUVsKSB7XG4gICAgdmFyIGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIGJhY2tkcm9wQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSlcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuNCwgMCk7XG4gICAgd3JhcHBlckFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLmFjdGlvbi1zaGVldC13cmFwcGVyJykpXG4gICAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVZKDAlKScsICd0cmFuc2xhdGVZKDEwMCUpJyk7XG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxuICAgICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSknKVxuICAgICAgICAuZHVyYXRpb24oNDUwKVxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xufTtcbi8qKlxuICogTUQgQWN0aW9uIFNoZWV0IEVudGVyIEFuaW1hdGlvblxuICovXG52YXIgbWRFbnRlckFuaW1hdGlvbiA9IGZ1bmN0aW9uIChiYXNlRWwpIHtcbiAgICB2YXIgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgYmFja2Ryb3BBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMC4zMik7XG4gICAgd3JhcHBlckFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLmFjdGlvbi1zaGVldC13cmFwcGVyJykpXG4gICAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVZKDEwMCUpJywgJ3RyYW5zbGF0ZVkoMCUpJyk7XG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxuICAgICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSknKVxuICAgICAgICAuZHVyYXRpb24oNDAwKVxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xufTtcbi8qKlxuICogTUQgQWN0aW9uIFNoZWV0IExlYXZlIEFuaW1hdGlvblxuICovXG52YXIgbWRMZWF2ZUFuaW1hdGlvbiA9IGZ1bmN0aW9uIChiYXNlRWwpIHtcbiAgICB2YXIgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgYmFja2Ryb3BBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4zMiwgMCk7XG4gICAgd3JhcHBlckFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLmFjdGlvbi1zaGVldC13cmFwcGVyJykpXG4gICAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVZKDAlKScsICd0cmFuc2xhdGVZKDEwMCUpJyk7XG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxuICAgICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSknKVxuICAgICAgICAuZHVyYXRpb24oNDUwKVxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xufTtcbnZhciBBY3Rpb25TaGVldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18xKGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5wcmVzZW50ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGtleWJvYXJkIHdpbGwgYmUgYXV0b21hdGljYWxseSBkaXNtaXNzZWQgd2hlbiB0aGUgb3ZlcmxheSBpcyBwcmVzZW50ZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmtleWJvYXJkQ2xvc2UgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQW4gYXJyYXkgb2YgYnV0dG9ucyBmb3IgdGhlIGFjdGlvbiBzaGVldC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYWN0aW9uIHNoZWV0IHdpbGwgYmUgZGlzbWlzc2VkIHdoZW4gdGhlIGJhY2tkcm9wIGlzIGNsaWNrZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJhY2tkcm9wRGlzbWlzcyA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBhY3Rpb24gc2hlZXQgd2lsbCBiZSB0cmFuc2x1Y2VudC5cbiAgICAgICAgICogT25seSBhcHBsaWVzIHdoZW4gdGhlIG1vZGUgaXMgYFwiaW9zXCJgIGFuZCB0aGUgZGV2aWNlIHN1cHBvcnRzXG4gICAgICAgICAqIFtgYmFja2Ryb3AtZmlsdGVyYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tkcm9wLWZpbHRlciNCcm93c2VyX2NvbXBhdGliaWxpdHkpLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmFuc2x1Y2VudCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYWN0aW9uIHNoZWV0IHdpbGwgYW5pbWF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uQmFja2Ryb3BUYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5kaXNtaXNzKHVuZGVmaW5lZCwgQkFDS0RST1ApO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ2FuY2VsSGFuZGxlciA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIHJvbGUgPSBldi5kZXRhaWwucm9sZTtcbiAgICAgICAgICAgIGlmIChpc0NhbmNlbChyb2xlKSkge1xuICAgICAgICAgICAgICAgIHZhciBjYW5jZWxCdXR0b24gPSBfdGhpcy5nZXRCdXR0b25zKCkuZmluZChmdW5jdGlvbiAoYikgeyByZXR1cm4gYi5yb2xlID09PSAnY2FuY2VsJzsgfSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2FsbEJ1dHRvbkhhbmRsZXIoY2FuY2VsQnV0dG9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcHJlcGFyZU92ZXJsYXkodGhpcy5lbCk7XG4gICAgICAgIHRoaXMuZGlkUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQWN0aW9uU2hlZXREaWRQcmVzZW50XCIsIDcpO1xuICAgICAgICB0aGlzLndpbGxQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25BY3Rpb25TaGVldFdpbGxQcmVzZW50XCIsIDcpO1xuICAgICAgICB0aGlzLndpbGxEaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25BY3Rpb25TaGVldFdpbGxEaXNtaXNzXCIsIDcpO1xuICAgICAgICB0aGlzLmRpZERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkFjdGlvblNoZWV0RGlkRGlzbWlzc1wiLCA3KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlc2VudCB0aGUgYWN0aW9uIHNoZWV0IG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gY3JlYXRlZC5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5wcmVzZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcHJlc2VudCh0aGlzLCAnYWN0aW9uU2hlZXRFbnRlcicsIGlvc0VudGVyQW5pbWF0aW9uLCBtZEVudGVyQW5pbWF0aW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpc21pc3MgdGhlIGFjdGlvbiBzaGVldCBvdmVybGF5IGFmdGVyIGl0IGhhcyBiZWVuIHByZXNlbnRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhIEFueSBkYXRhIHRvIGVtaXQgaW4gdGhlIGRpc21pc3MgZXZlbnRzLlxuICAgICAqIEBwYXJhbSByb2xlIFRoZSByb2xlIG9mIHRoZSBlbGVtZW50IHRoYXQgaXMgZGlzbWlzc2luZyB0aGUgYWN0aW9uIHNoZWV0LlxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWZ1bCBpbiBhIGJ1dHRvbiBoYW5kbGVyIGZvciBkZXRlcm1pbmluZyB3aGljaCBidXR0b24gd2FzXG4gICAgICogY2xpY2tlZCB0byBkaXNtaXNzIHRoZSBhY3Rpb24gc2hlZXQuXG4gICAgICogU29tZSBleGFtcGxlcyBpbmNsdWRlOiBgYFwiY2FuY2VsXCJgLCBgXCJkZXN0cnVjdGl2ZVwiYCwgXCJzZWxlY3RlZFwiYCwgYW5kIGBcImJhY2tkcm9wXCJgLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmRpc21pc3MgPSBmdW5jdGlvbiAoZGF0YSwgcm9sZSkge1xuICAgICAgICByZXR1cm4gZGlzbWlzcyh0aGlzLCBkYXRhLCByb2xlLCAnYWN0aW9uU2hlZXRMZWF2ZScsIGlvc0xlYXZlQW5pbWF0aW9uLCBtZExlYXZlQW5pbWF0aW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYWN0aW9uIHNoZWV0IGRpZCBkaXNtaXNzLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9uRGlkRGlzbWlzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25BY3Rpb25TaGVldERpZERpc21pc3MnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYWN0aW9uIHNoZWV0IHdpbGwgZGlzbWlzcy5cbiAgICAgKlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9uV2lsbERpc21pc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBldmVudE1ldGhvZCh0aGlzLmVsLCAnaW9uQWN0aW9uU2hlZXRXaWxsRGlzbWlzcycpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuYnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByb2xlLCBzaG91bGREaXNtaXNzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZSA9IGJ1dHRvbi5yb2xlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2FuY2VsKHJvbGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMuZGlzbWlzcyh1bmRlZmluZWQsIHJvbGUpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY2FsbEJ1dHRvbkhhbmRsZXIoYnV0dG9uKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZERpc21pc3MgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkRGlzbWlzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLmRpc21pc3ModW5kZWZpbmVkLCBidXR0b24ucm9sZSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFByb21pc2UucmVzb2x2ZSgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jYWxsQnV0dG9uSGFuZGxlciA9IGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJ0bjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYnV0dG9uKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNhZmVDYWxsKGJ1dHRvbi5oYW5kbGVyKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ0biA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChydG4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgaGFuZGxlciBpcyBmYWxzZSB0aGVuIGRvIG5vdCBkaXNtaXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qLywgdHJ1ZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZ2V0QnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnV0dG9ucy5tYXAoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICAgIHJldHVybiAodHlwZW9mIGIgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgID8geyB0ZXh0OiBiIH1cbiAgICAgICAgICAgICAgICA6IGI7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgdmFyIGFsbEJ1dHRvbnMgPSB0aGlzLmdldEJ1dHRvbnMoKTtcbiAgICAgICAgdmFyIGNhbmNlbEJ1dHRvbiA9IGFsbEJ1dHRvbnMuZmluZChmdW5jdGlvbiAoYikgeyByZXR1cm4gYi5yb2xlID09PSAnY2FuY2VsJzsgfSk7XG4gICAgICAgIHZhciBidXR0b25zID0gYWxsQnV0dG9ucy5maWx0ZXIoZnVuY3Rpb24gKGIpIHsgcmV0dXJuIGIucm9sZSAhPT0gJ2NhbmNlbCc7IH0pO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyByb2xlOiBcImRpYWxvZ1wiLCBcImFyaWEtbW9kYWxcIjogXCJ0cnVlXCIsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgekluZGV4OiBcIlwiICsgKDIwMDAwICsgdGhpcy5vdmVybGF5SW5kZXgpLFxuICAgICAgICAgICAgfSwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbigoX2EgPSB7fSwgX2FbbW9kZV0gPSB0cnVlLCBfYSksIGdldENsYXNzTWFwKHRoaXMuY3NzQ2xhc3MpKSwgeyAnYWN0aW9uLXNoZWV0LXRyYW5zbHVjZW50JzogdGhpcy50cmFuc2x1Y2VudCB9KSwgb25Jb25BY3Rpb25TaGVldFdpbGxEaXNtaXNzOiB0aGlzLmRpc3BhdGNoQ2FuY2VsSGFuZGxlciwgb25Jb25CYWNrZHJvcFRhcDogdGhpcy5vbkJhY2tkcm9wVGFwIH0sIGgoXCJpb24tYmFja2Ryb3BcIiwgeyB0YXBwYWJsZTogdGhpcy5iYWNrZHJvcERpc21pc3MgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhY3Rpb24tc2hlZXQtd3JhcHBlclwiLCByb2xlOiBcImRpYWxvZ1wiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhY3Rpb24tc2hlZXQtY29udGFpbmVyXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImFjdGlvbi1zaGVldC1ncm91cFwiIH0sIHRoaXMuaGVhZGVyICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhY3Rpb24tc2hlZXQtdGl0bGVcIiB9LCB0aGlzLmhlYWRlciwgdGhpcy5zdWJIZWFkZXIgJiYgaChcImRpdlwiLCB7IGNsYXNzOiBcImFjdGlvbi1zaGVldC1zdWItdGl0bGVcIiB9LCB0aGlzLnN1YkhlYWRlcikpLCBidXR0b25zLm1hcChmdW5jdGlvbiAoYikgeyByZXR1cm4gaChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIFwiaW9uLWFjdGl2YXRhYmxlXCI6IHRydWUsIGNsYXNzOiBidXR0b25DbGFzcyhiKSwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYnV0dG9uQ2xpY2soYik7IH0gfSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJhY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyXCIgfSwgYi5pY29uICYmIGgoXCJpb24taWNvblwiLCB7IGljb246IGIuaWNvbiwgbGF6eTogZmFsc2UsIGNsYXNzOiBcImFjdGlvbi1zaGVldC1pY29uXCIgfSksIGIudGV4dCksIG1vZGUgPT09ICdtZCcgJiYgaChcImlvbi1yaXBwbGUtZWZmZWN0XCIsIG51bGwpKTsgfSkpLCBjYW5jZWxCdXR0b24gJiZcbiAgICAgICAgICAgIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhY3Rpb24tc2hlZXQtZ3JvdXAgYWN0aW9uLXNoZWV0LWdyb3VwLWNhbmNlbFwiIH0sIGgoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBjbGFzczogYnV0dG9uQ2xhc3MoY2FuY2VsQnV0dG9uKSwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYnV0dG9uQ2xpY2soY2FuY2VsQnV0dG9uKTsgfSB9LCBoKFwic3BhblwiLCB7IGNsYXNzOiBcImFjdGlvbi1zaGVldC1idXR0b24taW5uZXJcIiB9LCBjYW5jZWxCdXR0b24uaWNvbiAmJlxuICAgICAgICAgICAgICAgIGgoXCJpb24taWNvblwiLCB7IGljb246IGNhbmNlbEJ1dHRvbi5pY29uLCBsYXp5OiBmYWxzZSwgY2xhc3M6IFwiYWN0aW9uLXNoZWV0LWljb25cIiB9KSwgY2FuY2VsQnV0dG9uLnRleHQpKSkpKSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCIuc2MtaW9uLWFjdGlvbi1zaGVldC1tZC1oey0tY29sb3I6aW5pdGlhbDstLW1pbi13aWR0aDphdXRvOy0td2lkdGg6MTAwJTstLW1heC13aWR0aDo1MDBweDstLW1pbi1oZWlnaHQ6YXV0bzstLWhlaWdodDoxMDAlOy0tbWF4LWhlaWdodDoxMDAlOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246Zml4ZWQ7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpOy1tcy10b3VjaC1hY3Rpb246bm9uZTt0b3VjaC1hY3Rpb246bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoxMDAxfS5vdmVybGF5LWhpZGRlbi5zYy1pb24tYWN0aW9uLXNoZWV0LW1kLWh7ZGlzcGxheTpub25lfS5hY3Rpb24tc2hlZXQtd3JhcHBlci5zYy1pb24tYWN0aW9uLXNoZWV0LW1ke2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87bWFyZ2luLXRvcDphdXRvO21hcmdpbi1ib3R0b206YXV0bzstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKTtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOnZhcigtLXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTtoZWlnaHQ6dmFyKC0taGVpZ2h0KTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO21heC1oZWlnaHQ6dmFyKC0tbWF4LWhlaWdodCk7ei1pbmRleDoxMDtwb2ludGVyLWV2ZW50czpub25lfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYWN0aW9uLXNoZWV0LXdyYXBwZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1tZHttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6YXV0bzttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG87LXdlYmtpdC1tYXJnaW4tZW5kOmF1dG87bWFyZ2luLWlubGluZS1lbmQ6YXV0b319LmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1tZHtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7Ym9yZGVyOjA7b3V0bGluZTpub25lO2ZvbnQtZmFtaWx5OmluaGVyaXR9LmFjdGlvbi1zaGVldC1idXR0b24uYWN0aXZhdGVkLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZCl9LmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1tZHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OnJvdyBub3dyYXA7ZmxleC1mbG93OnJvdyBub3dyYXA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5hY3Rpb24tc2hlZXQtY29udGFpbmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW47ZmxleC1mbG93OmNvbHVtbjstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7aGVpZ2h0OjEwMCU7bWF4LWhlaWdodDoxMDAlfS5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1tZHstbXMtZmxleC1uZWdhdGl2ZToyO2ZsZXgtc2hyaW5rOjI7b3ZlcnNjcm9sbC1iZWhhdmlvci15OmNvbnRhaW47b3ZlcmZsb3cteTphdXRvOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO3BvaW50ZXItZXZlbnRzOmFsbDtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpfS5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1tZDo6LXdlYmtpdC1zY3JvbGxiYXJ7ZGlzcGxheTpub25lfS5hY3Rpb24tc2hlZXQtZ3JvdXAtY2FuY2VsLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowO292ZXJmbG93OmhpZGRlbn0uYWN0aW9uLXNoZWV0LXNlbGVjdGVkLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLXNlbGVjdGVkKX0uc2MtaW9uLWFjdGlvbi1zaGVldC1tZC1oey0tYmFja2dyb3VuZDp2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpKTstLWJhY2tncm91bmQtc2VsZWN0ZWQ6dmFyKC0tYmFja2dyb3VuZCwpOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6dmFyKC0tYmFja2dyb3VuZCl9LmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LW1ke3BhZGRpbmctbGVmdDoxNnB4O3BhZGRpbmctcmlnaHQ6MTZweDtwYWRkaW5nLXRvcDoyMHB4O3BhZGRpbmctYm90dG9tOjE3cHg7aGVpZ2h0OjYwcHg7Y29sb3I6dmFyKC0tY29sb3IscmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC41NCkpO2ZvbnQtc2l6ZToxNnB4O3RleHQtYWxpZ246c3RhcnR9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1tZHtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweH19LmFjdGlvbi1zaGVldC1zdWItdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1tZHtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MTZweDtwYWRkaW5nLWJvdHRvbTowO2ZvbnQtc2l6ZToxNHB4fS5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1tZDpmaXJzdC1jaGlsZHtwYWRkaW5nLXRvcDowfS5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1tZDpsYXN0LWNoaWxke3BhZGRpbmctYm90dG9tOjB9LmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1tZHtwYWRkaW5nLWxlZnQ6MTZweDtwYWRkaW5nLXJpZ2h0OjE2cHg7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDo1MnB4O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0tY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCMyNjI2MjYpKTtmb250LXNpemU6MTZweDt0ZXh0LWFsaWduOnN0YXJ0O2NvbnRhaW46c3RyaWN0O292ZXJmbG93OmhpZGRlbn1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1tZHtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweH19LmFjdGlvbi1zaGVldC1pY29uLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7cGFkZGluZy1ib3R0b206NHB4O21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjMycHg7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtjb2xvcjp2YXIoLS1jb2xvcixyZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjU0KSk7Zm9udC1zaXplOjI0cHh9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5hY3Rpb24tc2hlZXQtaWNvbi5zYy1pb24tYWN0aW9uLXNoZWV0LW1ke21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MDstd2Via2l0LW1hcmdpbi1lbmQ6MzJweDttYXJnaW4taW5saW5lLWVuZDozMnB4fX0uYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LW1key1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LmFjdGlvbi1zaGVldC1zZWxlY3RlZC5zYy1pb24tYWN0aW9uLXNoZWV0LW1ke2ZvbnQtd2VpZ2h0OjcwMH1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzE7XG59KCkpO1xudmFyIGJ1dHRvbkNsYXNzID0gZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbigoX2EgPSB7ICdhY3Rpb24tc2hlZXQtYnV0dG9uJzogdHJ1ZSwgJ2lvbi1hY3RpdmF0YWJsZSc6IHRydWUgfSwgX2FbXCJhY3Rpb24tc2hlZXQtXCIgKyBidXR0b24ucm9sZV0gPSBidXR0b24ucm9sZSAhPT0gdW5kZWZpbmVkLCBfYSksIGdldENsYXNzTWFwKGJ1dHRvbi5jc3NDbGFzcykpO1xufTtcbmV4cG9ydCB7IEFjdGlvblNoZWV0IGFzIGlvbl9hY3Rpb25fc2hlZXQgfTtcbiIsImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbnZhciBob3N0Q29udGV4dCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZWwpIHtcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XG59O1xuLyoqXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXG4gKi9cbnZhciBjcmVhdGVDb2xvckNsYXNzZXMgPSBmdW5jdGlvbiAoY29sb3IpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8gKF9hID0ge1xuICAgICAgICAgICAgJ2lvbi1jb2xvcic6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgX2FbXCJpb24tY29sb3ItXCIgKyBjb2xvcl0gPSB0cnVlLFxuICAgICAgICBfYSkgOiB1bmRlZmluZWQ7XG59O1xudmFyIGdldENsYXNzTGlzdCA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgcmV0dXJuIGFycmF5XG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9IG51bGw7IH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRyaW0oKTsgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT09ICcnOyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xufTtcbnZhciBnZXRDbGFzc01hcCA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XG4gICAgdmFyIG1hcCA9IHt9O1xuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7IHJldHVybiBtYXBbY10gPSB0cnVlOyB9KTtcbiAgICByZXR1cm4gbWFwO1xufTtcbnZhciBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcbnZhciBvcGVuVVJMID0gZnVuY3Rpb24gKHVybCwgZXYsIGRpcmVjdGlvbikgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcm91dGVyO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XG4gICAgICAgICAgICByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XG4gICAgICAgICAgICBpZiAocm91dGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICB9KTtcbn0pOyB9O1xuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==