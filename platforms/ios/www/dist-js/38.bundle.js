(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-ios.entry.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-ios.entry.js ***!
  \*****************************************************************************/
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
        get: function () { return ".sc-ion-action-sheet-ios-h{--color:initial;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family,inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios{display:block;width:100%;border:0;outline:none;font-family:inherit}.action-sheet-button.activated.sc-ion-action-sheet-ios{background:var(--background-activated)}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--background-selected:var(--ion-background-color,#fff);--background-activated:rgba(var(--ion-text-color-rgb,0,0,0),0.08);text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top,0);margin-bottom:var(--ion-safe-area-bottom,0)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-container.sc-ion-action-sheet-ios{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-container.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px;overflow:hidden}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios, .action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-background-color-rgb,255,255,255),.8)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8))),-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-background-color-rgb,255,255,255),.4)),color-stop(50%,rgba(var(--ion-background-color-rgb,255,255,255),.4)),color-stop(50%,rgba(var(--ion-background-color-rgb,255,255,255),.8)));background-image:linear-gradient(0deg,rgba(var(--ion-background-color-rgb,255,255,255),.8),rgba(var(--ion-background-color-rgb,255,255,255),.8) 100%),linear-gradient(0deg,rgba(var(--ion-background-color-rgb,255,255,255),.4),rgba(var(--ion-background-color-rgb,255,255,255),.4) 50%,rgba(var(--ion-background-color-rgb,255,255,255),.8) 0);background-repeat:no-repeat;background-position:top,bottom;background-size:100% calc(100% - 1px),100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--background-selected)}}.action-sheet-button.sc-ion-action-sheet-ios, .action-sheet-title.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-text-color-rgb,0,0,0),.08)),color-stop(50%,rgba(var(--ion-text-color-rgb,0,0,0),.08)),color-stop(50%,transparent));background-image:linear-gradient(0deg,rgba(var(--ion-text-color-rgb,0,0,0),.08),rgba(var(--ion-text-color-rgb,0,0,0),.08) 50%,transparent 0);background-repeat:no-repeat;background-position:bottom;background-size:100% 1px}.action-sheet-title.sc-ion-action-sheet-ios{padding-left:10px;padding-right:10px;padding-top:14px;padding-bottom:13px;color:var(--color,var(--ion-color-step-400,#999));font-size:13px;font-weight:400;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-title.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:15px;padding-bottom:0;font-size:12px}.action-sheet-button.sc-ion-action-sheet-ios{padding-left:18px;padding-right:18px;padding-top:18px;padding-bottom:18px;height:56px;color:var(--color,var(--ion-color-primary,#3880ff));font-size:20px;contain:strict}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:18px;padding-inline-start:18px;-webkit-padding-end:18px;padding-inline-end:18px}}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:.1em;font-size:28px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:unset;-webkit-margin-end:.1em;margin-inline-end:.1em}}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{background:var(--background-selected);font-weight:700}.action-sheet-destructive.sc-ion-action-sheet-ios{color:var(--ion-color-danger,#f04141)}.action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--background-selected);font-weight:600}"; },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1hY3Rpb24tc2hlZXQtaW9zLmVudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUM4RTtBQUMvRjtBQUNDO0FBQ2dDO0FBQ3lGO0FBQ2pHO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdFQUFlO0FBQ3ZDLDRCQUE0QixnRUFBZTtBQUMzQywyQkFBMkIsZ0VBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0VBQWU7QUFDdkMsNEJBQTRCLGdFQUFlO0FBQzNDLDJCQUEyQixnRUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnRUFBZTtBQUN2Qyw0QkFBNEIsZ0VBQWU7QUFDM0MsMkJBQTJCLGdFQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdFQUFlO0FBQ3ZDLDRCQUE0QixnRUFBZTtBQUMzQywyQkFBMkIsZ0VBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQSxvQkFBb0IsMkRB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QkFBbUIsaUJBQWlCLG9CQUFvQixZQUFZLG9EQUFvRCxlQUFlLGVBQWUsNkZBQTZGLDZDQUE2QyxtQkFBbUIsb0JBQW9CLDJCQUEyQiwwQkFBMEIseUJBQXlCLHlCQUF5Qix3RkFBd0Ysa0JBQWtCLGVBQWUsNkZBQTZGLHdGQUF3RixtQkFBbUIsd0JBQXdCLHdCQUF3Qix3REFBd0Qsc0JBQXNCLCtDQUErQyxzQ0FBc0MsZ0JBQWdCLGtEQUFrRCxzQ0FBc0MsNkNBQTZDLHNDQUFzQyxnQkFBZ0IsRUFBRSxFQUFFO0FBQzV6TztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxnQ0FBZ0MsdURBQXVELHNFQUFzRSw0REFBVztBQUN4SztBQUMyQzs7Ozs7Ozs7Ozs7OztBQzVPM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQixFQUFFO0FBQ3RELCtCQUErQixpQkFBaUIsRUFBRTtBQUNsRCxrQ0FBa0MsaUJBQWlCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxzQkFBc0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUSx1REFBUztBQUM5RDtBQUNBLFdBQVcseURBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFO0FBQ2tGIiwiZmlsZSI6IjM4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBnZXRJb25Nb2RlLCBkIGFzIGNyZWF0ZUV2ZW50LCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tYWY0NzhmZTkuanMnO1xuaW1wb3J0IHsgQiBhcyBCQUNLRFJPUCwgaSBhcyBpc0NhbmNlbCwgZCBhcyBwcmVwYXJlT3ZlcmxheSwgZSBhcyBwcmVzZW50LCBmIGFzIGRpc21pc3MsIGcgYXMgZXZlbnRNZXRob2QsIHMgYXMgc2FmZUNhbGwgfSBmcm9tICcuL292ZXJsYXlzLTEwNjQwZDg2LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0Q2xhc3NNYXAgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcbi8qKlxuICogaU9TIEFjdGlvbiBTaGVldCBFbnRlciBBbmltYXRpb25cbiAqL1xudmFyIGlvc0VudGVyQW5pbWF0aW9uID0gZnVuY3Rpb24gKGJhc2VFbCkge1xuICAgIHZhciBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAwLjQpO1xuICAgIHdyYXBwZXJBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb24tc2hlZXQtd3JhcHBlcicpKVxuICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgxMDAlKScsICd0cmFuc2xhdGVZKDAlKScpO1xuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbClcbiAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpJylcbiAgICAgICAgLmR1cmF0aW9uKDQwMClcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcbn07XG4vKipcbiAqIGlPUyBBY3Rpb24gU2hlZXQgTGVhdmUgQW5pbWF0aW9uXG4gKi9cbnZhciBpb3NMZWF2ZUFuaW1hdGlvbiA9IGZ1bmN0aW9uIChiYXNlRWwpIHtcbiAgICB2YXIgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgYmFja2Ryb3BBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC40LCAwKTtcbiAgICB3cmFwcGVyQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uLXNoZWV0LXdyYXBwZXInKSlcbiAgICAgICAgLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoMCUpJywgJ3RyYW5zbGF0ZVkoMTAwJSknKTtcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXG4gICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllciguMzYsLjY2LC4wNCwxKScpXG4gICAgICAgIC5kdXJhdGlvbig0NTApXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xuLyoqXG4gKiBNRCBBY3Rpb24gU2hlZXQgRW50ZXIgQW5pbWF0aW9uXG4gKi9cbnZhciBtZEVudGVyQW5pbWF0aW9uID0gZnVuY3Rpb24gKGJhc2VFbCkge1xuICAgIHZhciBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAwLjMyKTtcbiAgICB3cmFwcGVyQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uLXNoZWV0LXdyYXBwZXInKSlcbiAgICAgICAgLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoMTAwJSknLCAndHJhbnNsYXRlWSgwJSknKTtcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXG4gICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllciguMzYsLjY2LC4wNCwxKScpXG4gICAgICAgIC5kdXJhdGlvbig0MDApXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xuLyoqXG4gKiBNRCBBY3Rpb24gU2hlZXQgTGVhdmUgQW5pbWF0aW9uXG4gKi9cbnZhciBtZExlYXZlQW5pbWF0aW9uID0gZnVuY3Rpb24gKGJhc2VFbCkge1xuICAgIHZhciBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjMyLCAwKTtcbiAgICB3cmFwcGVyQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uLXNoZWV0LXdyYXBwZXInKSlcbiAgICAgICAgLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoMCUpJywgJ3RyYW5zbGF0ZVkoMTAwJSknKTtcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXG4gICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllciguMzYsLjY2LC4wNCwxKScpXG4gICAgICAgIC5kdXJhdGlvbig0NTApXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xudmFyIEFjdGlvblNoZWV0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzEoaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLnByZXNlbnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUga2V5Ym9hcmQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGRpc21pc3NlZCB3aGVuIHRoZSBvdmVybGF5IGlzIHByZXNlbnRlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMua2V5Ym9hcmRDbG9zZSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBhcnJheSBvZiBidXR0b25zIGZvciB0aGUgYWN0aW9uIHNoZWV0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5idXR0b25zID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBhY3Rpb24gc2hlZXQgd2lsbCBiZSBkaXNtaXNzZWQgd2hlbiB0aGUgYmFja2Ryb3AgaXMgY2xpY2tlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYmFja2Ryb3BEaXNtaXNzID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGFjdGlvbiBzaGVldCB3aWxsIGJlIHRyYW5zbHVjZW50LlxuICAgICAgICAgKiBPbmx5IGFwcGxpZXMgd2hlbiB0aGUgbW9kZSBpcyBgXCJpb3NcImAgYW5kIHRoZSBkZXZpY2Ugc3VwcG9ydHNcbiAgICAgICAgICogW2BiYWNrZHJvcC1maWx0ZXJgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2Ryb3AtZmlsdGVyI0Jyb3dzZXJfY29tcGF0aWJpbGl0eSkuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyYW5zbHVjZW50ID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBhY3Rpb24gc2hlZXQgd2lsbCBhbmltYXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hbmltYXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub25CYWNrZHJvcFRhcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmRpc21pc3ModW5kZWZpbmVkLCBCQUNLRFJPUCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDYW5jZWxIYW5kbGVyID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgcm9sZSA9IGV2LmRldGFpbC5yb2xlO1xuICAgICAgICAgICAgaWYgKGlzQ2FuY2VsKHJvbGUpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhbmNlbEJ1dHRvbiA9IF90aGlzLmdldEJ1dHRvbnMoKS5maW5kKGZ1bmN0aW9uIChiKSB7IHJldHVybiBiLnJvbGUgPT09ICdjYW5jZWwnOyB9KTtcbiAgICAgICAgICAgICAgICBfdGhpcy5jYWxsQnV0dG9uSGFuZGxlcihjYW5jZWxCdXR0b24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBwcmVwYXJlT3ZlcmxheSh0aGlzLmVsKTtcbiAgICAgICAgdGhpcy5kaWRQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25BY3Rpb25TaGVldERpZFByZXNlbnRcIiwgNyk7XG4gICAgICAgIHRoaXMud2lsbFByZXNlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkFjdGlvblNoZWV0V2lsbFByZXNlbnRcIiwgNyk7XG4gICAgICAgIHRoaXMud2lsbERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkFjdGlvblNoZWV0V2lsbERpc21pc3NcIiwgNyk7XG4gICAgICAgIHRoaXMuZGlkRGlzbWlzcyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQWN0aW9uU2hlZXREaWREaXNtaXNzXCIsIDcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVzZW50IHRoZSBhY3Rpb24gc2hlZXQgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBjcmVhdGVkLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnByZXNlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwcmVzZW50KHRoaXMsICdhY3Rpb25TaGVldEVudGVyJywgaW9zRW50ZXJBbmltYXRpb24sIG1kRW50ZXJBbmltYXRpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGlzbWlzcyB0aGUgYWN0aW9uIHNoZWV0IG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gcHJlc2VudGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgQW55IGRhdGEgdG8gZW1pdCBpbiB0aGUgZGlzbWlzcyBldmVudHMuXG4gICAgICogQHBhcmFtIHJvbGUgVGhlIHJvbGUgb2YgdGhlIGVsZW1lbnQgdGhhdCBpcyBkaXNtaXNzaW5nIHRoZSBhY3Rpb24gc2hlZXQuXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZnVsIGluIGEgYnV0dG9uIGhhbmRsZXIgZm9yIGRldGVybWluaW5nIHdoaWNoIGJ1dHRvbiB3YXNcbiAgICAgKiBjbGlja2VkIHRvIGRpc21pc3MgdGhlIGFjdGlvbiBzaGVldC5cbiAgICAgKiBTb21lIGV4YW1wbGVzIGluY2x1ZGU6IGBgXCJjYW5jZWxcImAsIGBcImRlc3RydWN0aXZlXCJgLCBcInNlbGVjdGVkXCJgLCBhbmQgYFwiYmFja2Ryb3BcImAuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZGlzbWlzcyA9IGZ1bmN0aW9uIChkYXRhLCByb2xlKSB7XG4gICAgICAgIHJldHVybiBkaXNtaXNzKHRoaXMsIGRhdGEsIHJvbGUsICdhY3Rpb25TaGVldExlYXZlJywgaW9zTGVhdmVBbmltYXRpb24sIG1kTGVhdmVBbmltYXRpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBhY3Rpb24gc2hlZXQgZGlkIGRpc21pc3MuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25EaWREaXNtaXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvbkFjdGlvblNoZWV0RGlkRGlzbWlzcycpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBhY3Rpb24gc2hlZXQgd2lsbCBkaXNtaXNzLlxuICAgICAqXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25XaWxsRGlzbWlzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25BY3Rpb25TaGVldFdpbGxEaXNtaXNzJyk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5idXR0b25DbGljayA9IGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJvbGUsIHNob3VsZERpc21pc3M7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlID0gYnV0dG9uLnJvbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDYW5jZWwocm9sZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5kaXNtaXNzKHVuZGVmaW5lZCwgcm9sZSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jYWxsQnV0dG9uSGFuZGxlcihidXR0b24pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkRGlzbWlzcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGREaXNtaXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMuZGlzbWlzcyh1bmRlZmluZWQsIGJ1dHRvbi5yb2xlKV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgUHJvbWlzZS5yZXNvbHZlKCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNhbGxCdXR0b25IYW5kbGVyID0gZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcnRuO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFidXR0b24pIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2FmZUNhbGwoYnV0dG9uLmhhbmRsZXIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcnRuID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJ0biA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBoYW5kbGVyIGlzIGZhbHNlIHRoZW4gZG8gbm90IGRpc21pc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovLCB0cnVlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5nZXRCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idXR0b25zLm1hcChmdW5jdGlvbiAoYikge1xuICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgYiA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgPyB7IHRleHQ6IGIgfVxuICAgICAgICAgICAgICAgIDogYjtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICB2YXIgYWxsQnV0dG9ucyA9IHRoaXMuZ2V0QnV0dG9ucygpO1xuICAgICAgICB2YXIgY2FuY2VsQnV0dG9uID0gYWxsQnV0dG9ucy5maW5kKGZ1bmN0aW9uIChiKSB7IHJldHVybiBiLnJvbGUgPT09ICdjYW5jZWwnOyB9KTtcbiAgICAgICAgdmFyIGJ1dHRvbnMgPSBhbGxCdXR0b25zLmZpbHRlcihmdW5jdGlvbiAoYikgeyByZXR1cm4gYi5yb2xlICE9PSAnY2FuY2VsJzsgfSk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IHJvbGU6IFwiZGlhbG9nXCIsIFwiYXJpYS1tb2RhbFwiOiBcInRydWVcIiwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IFwiXCIgKyAoMjAwMDAgKyB0aGlzLm92ZXJsYXlJbmRleCksXG4gICAgICAgICAgICB9LCBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKChfYSA9IHt9LCBfYVttb2RlXSA9IHRydWUsIF9hKSwgZ2V0Q2xhc3NNYXAodGhpcy5jc3NDbGFzcykpLCB7ICdhY3Rpb24tc2hlZXQtdHJhbnNsdWNlbnQnOiB0aGlzLnRyYW5zbHVjZW50IH0pLCBvbklvbkFjdGlvblNoZWV0V2lsbERpc21pc3M6IHRoaXMuZGlzcGF0Y2hDYW5jZWxIYW5kbGVyLCBvbklvbkJhY2tkcm9wVGFwOiB0aGlzLm9uQmFja2Ryb3BUYXAgfSwgaChcImlvbi1iYWNrZHJvcFwiLCB7IHRhcHBhYmxlOiB0aGlzLmJhY2tkcm9wRGlzbWlzcyB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImFjdGlvbi1zaGVldC13cmFwcGVyXCIsIHJvbGU6IFwiZGlhbG9nXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImFjdGlvbi1zaGVldC1jb250YWluZXJcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWN0aW9uLXNoZWV0LWdyb3VwXCIgfSwgdGhpcy5oZWFkZXIgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgaChcImRpdlwiLCB7IGNsYXNzOiBcImFjdGlvbi1zaGVldC10aXRsZVwiIH0sIHRoaXMuaGVhZGVyLCB0aGlzLnN1YkhlYWRlciAmJiBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWN0aW9uLXNoZWV0LXN1Yi10aXRsZVwiIH0sIHRoaXMuc3ViSGVhZGVyKSksIGJ1dHRvbnMubWFwKGZ1bmN0aW9uIChiKSB7IHJldHVybiBoKFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgXCJpb24tYWN0aXZhdGFibGVcIjogdHJ1ZSwgY2xhc3M6IGJ1dHRvbkNsYXNzKGIpLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5idXR0b25DbGljayhiKTsgfSB9LCBoKFwic3BhblwiLCB7IGNsYXNzOiBcImFjdGlvbi1zaGVldC1idXR0b24taW5uZXJcIiB9LCBiLmljb24gJiYgaChcImlvbi1pY29uXCIsIHsgaWNvbjogYi5pY29uLCBsYXp5OiBmYWxzZSwgY2xhc3M6IFwiYWN0aW9uLXNoZWV0LWljb25cIiB9KSwgYi50ZXh0KSwgbW9kZSA9PT0gJ21kJyAmJiBoKFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwgbnVsbCkpOyB9KSksIGNhbmNlbEJ1dHRvbiAmJlxuICAgICAgICAgICAgaChcImRpdlwiLCB7IGNsYXNzOiBcImFjdGlvbi1zaGVldC1ncm91cCBhY3Rpb24tc2hlZXQtZ3JvdXAtY2FuY2VsXCIgfSwgaChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIGNsYXNzOiBidXR0b25DbGFzcyhjYW5jZWxCdXR0b24pLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5idXR0b25DbGljayhjYW5jZWxCdXR0b24pOyB9IH0sIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwiYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lclwiIH0sIGNhbmNlbEJ1dHRvbi5pY29uICYmXG4gICAgICAgICAgICAgICAgaChcImlvbi1pY29uXCIsIHsgaWNvbjogY2FuY2VsQnV0dG9uLmljb24sIGxhenk6IGZhbHNlLCBjbGFzczogXCJhY3Rpb24tc2hlZXQtaWNvblwiIH0pLCBjYW5jZWxCdXR0b24udGV4dCkpKSkpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMS5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcy1oey0tY29sb3I6aW5pdGlhbDstLW1pbi13aWR0aDphdXRvOy0td2lkdGg6MTAwJTstLW1heC13aWR0aDo1MDBweDstLW1pbi1oZWlnaHQ6YXV0bzstLWhlaWdodDoxMDAlOy0tbWF4LWhlaWdodDoxMDAlOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246Zml4ZWQ7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpOy1tcy10b3VjaC1hY3Rpb246bm9uZTt0b3VjaC1hY3Rpb246bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoxMDAxfS5vdmVybGF5LWhpZGRlbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcy1oe2Rpc3BsYXk6bm9uZX0uYWN0aW9uLXNoZWV0LXdyYXBwZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7bWFyZ2luLXRvcDphdXRvO21hcmdpbi1ib3R0b206YXV0bzstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKTtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOnZhcigtLXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTtoZWlnaHQ6dmFyKC0taGVpZ2h0KTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO21heC1oZWlnaHQ6dmFyKC0tbWF4LWhlaWdodCk7ei1pbmRleDoxMDtwb2ludGVyLWV2ZW50czpub25lfS5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtib3JkZXI6MDtvdXRsaW5lOm5vbmU7Zm9udC1mYW1pbHk6aW5oZXJpdH0uYWN0aW9uLXNoZWV0LWJ1dHRvbi5hY3RpdmF0ZWQuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZCl9LmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpyb3cgbm93cmFwO2ZsZXgtZmxvdzpyb3cgbm93cmFwOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uYWN0aW9uLXNoZWV0LWNvbnRhaW5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OmNvbHVtbjtmbGV4LWZsb3c6Y29sdW1uOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDtoZWlnaHQ6MTAwJTttYXgtaGVpZ2h0OjEwMCV9LmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3stbXMtZmxleC1uZWdhdGl2ZToyO2ZsZXgtc2hyaW5rOjI7b3ZlcnNjcm9sbC1iZWhhdmlvci15OmNvbnRhaW47b3ZlcmZsb3cteTphdXRvOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO3BvaW50ZXItZXZlbnRzOmFsbDtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpfS5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6Oi13ZWJraXQtc2Nyb2xsYmFye2Rpc3BsYXk6bm9uZX0uYWN0aW9uLXNoZWV0LWdyb3VwLWNhbmNlbC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3stbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7b3ZlcmZsb3c6aGlkZGVufS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcy1oey0tYmFja2dyb3VuZDp2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCwjZjlmOWY5KSk7LS1iYWNrZ3JvdW5kLXNlbGVjdGVkOnZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6cmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLDAuMDgpO3RleHQtYWxpZ246Y2VudGVyfS5hY3Rpb24tc2hlZXQtd3JhcHBlci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3ttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO21hcmdpbi10b3A6dmFyKC0taW9uLXNhZmUtYXJlYS10b3AsMCk7bWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tc2FmZS1hcmVhLWJvdHRvbSwwKX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmFjdGlvbi1zaGVldC13cmFwcGVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDphdXRvO21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0bzstd2Via2l0LW1hcmdpbi1lbmQ6YXV0bzttYXJnaW4taW5saW5lLWVuZDphdXRvfX0uYWN0aW9uLXNoZWV0LWNvbnRhaW5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3twYWRkaW5nLWxlZnQ6OHB4O3BhZGRpbmctcmlnaHQ6OHB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmFjdGlvbi1zaGVldC1jb250YWluZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjhweDtwYWRkaW5nLWlubGluZS1zdGFydDo4cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo4cHg7cGFkZGluZy1pbmxpbmUtZW5kOjhweH19LmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tib3JkZXItcmFkaXVzOjEzcHg7bWFyZ2luLWJvdHRvbTo4cHg7b3ZlcmZsb3c6aGlkZGVufS5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDoxMHB4fS5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjEwcHh9XFxAc3VwcG9ydHMgKCgtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpibHVyKDApKSBvciAoYmFja2Ryb3AtZmlsdGVyOmJsdXIoMCkpKXsuYWN0aW9uLXNoZWV0LXRyYW5zbHVjZW50LnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zLWggLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOnNhdHVyYXRlKDI4MCUpIGJsdXIoMjBweCk7YmFja2Ryb3AtZmlsdGVyOnNhdHVyYXRlKDI4MCUpIGJsdXIoMjBweCl9LmFjdGlvbi1zaGVldC10cmFuc2x1Y2VudC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcy1oIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zLCAuYWN0aW9uLXNoZWV0LXRyYW5zbHVjZW50LnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zLWggLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCBib3R0b20sbGVmdCB0b3AsZnJvbShyZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwyNTUsMjU1LDI1NSksLjgpKSx0byhyZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwyNTUsMjU1LDI1NSksLjgpKSksLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCBib3R0b20sbGVmdCB0b3AsZnJvbShyZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwyNTUsMjU1LDI1NSksLjQpKSxjb2xvci1zdG9wKDUwJSxyZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwyNTUsMjU1LDI1NSksLjQpKSxjb2xvci1zdG9wKDUwJSxyZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwyNTUsMjU1LDI1NSksLjgpKSk7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMGRlZyxyZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwyNTUsMjU1LDI1NSksLjgpLHJnYmEodmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLDI1NSwyNTUsMjU1KSwuOCkgMTAwJSksbGluZWFyLWdyYWRpZW50KDBkZWcscmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsMjU1LDI1NSwyNTUpLC40KSxyZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwyNTUsMjU1LDI1NSksLjQpIDUwJSxyZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwyNTUsMjU1LDI1NSksLjgpIDApO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOnRvcCxib3R0b207YmFja2dyb3VuZC1zaXplOjEwMCUgY2FsYygxMDAlIC0gMXB4KSwxMDAlIDFweDstd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxMjAlKTtiYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTIwJSl9LmFjdGlvbi1zaGVldC10cmFuc2x1Y2VudC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcy1oIC5hY3Rpb24tc2hlZXQtYnV0dG9uLmFjdGl2YXRlZC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEodmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLDI1NSwyNTUsMjU1KSwuNyk7YmFja2dyb3VuZC1pbWFnZTpub25lfS5hY3Rpb24tc2hlZXQtdHJhbnNsdWNlbnQuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3MtaCAuYWN0aW9uLXNoZWV0LWNhbmNlbC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtc2VsZWN0ZWQpfX0uYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcywgLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCBib3R0b20sbGVmdCB0b3AsZnJvbShyZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjA4KSksY29sb3Itc3RvcCg1MCUscmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC4wOCkpLGNvbG9yLXN0b3AoNTAlLHRyYW5zcGFyZW50KSk7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMGRlZyxyZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjA4KSxyZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjA4KSA1MCUsdHJhbnNwYXJlbnQgMCk7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb246Ym90dG9tO2JhY2tncm91bmQtc2l6ZToxMDAlIDFweH0uYWN0aW9uLXNoZWV0LXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze3BhZGRpbmctbGVmdDoxMHB4O3BhZGRpbmctcmlnaHQ6MTBweDtwYWRkaW5nLXRvcDoxNHB4O3BhZGRpbmctYm90dG9tOjEzcHg7Y29sb3I6dmFyKC0tY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDAwLCM5OTkpKTtmb250LXNpemU6MTNweDtmb250LXdlaWdodDo0MDA7dGV4dC1hbGlnbjpjZW50ZXJ9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjEwcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTBweDstd2Via2l0LXBhZGRpbmctZW5kOjEwcHg7cGFkZGluZy1pbmxpbmUtZW5kOjEwcHh9fS5hY3Rpb24tc2hlZXQtc3ViLXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDoxNXB4O3BhZGRpbmctYm90dG9tOjA7Zm9udC1zaXplOjEycHh9LmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7cGFkZGluZy1sZWZ0OjE4cHg7cGFkZGluZy1yaWdodDoxOHB4O3BhZGRpbmctdG9wOjE4cHg7cGFkZGluZy1ib3R0b206MThweDtoZWlnaHQ6NTZweDtjb2xvcjp2YXIoLS1jb2xvcix2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKSk7Zm9udC1zaXplOjIwcHg7Y29udGFpbjpzdHJpY3R9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDoxOHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE4cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxOHB4O3BhZGRpbmctaW5saW5lLWVuZDoxOHB4fX0uYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyAuYWN0aW9uLXNoZWV0LWljb24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7bWFyZ2luLXJpZ2h0Oi4xZW07Zm9udC1zaXplOjI4cHh9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIC5hY3Rpb24tc2hlZXQtaWNvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3ttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tZW5kOi4xZW07bWFyZ2luLWlubGluZS1lbmQ6LjFlbX19LmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6bGFzdC1jaGlsZHtiYWNrZ3JvdW5kLWltYWdlOm5vbmV9LmFjdGlvbi1zaGVldC1zZWxlY3RlZC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtc2VsZWN0ZWQpO2ZvbnQtd2VpZ2h0OjcwMH0uYWN0aW9uLXNoZWV0LWRlc3RydWN0aXZlLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze2NvbG9yOnZhcigtLWlvbi1jb2xvci1kYW5nZXIsI2YwNDE0MSl9LmFjdGlvbi1zaGVldC1jYW5jZWwuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLXNlbGVjdGVkKTtmb250LXdlaWdodDo2MDB9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbnZhciBidXR0b25DbGFzcyA9IGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oKF9hID0geyAnYWN0aW9uLXNoZWV0LWJ1dHRvbic6IHRydWUsICdpb24tYWN0aXZhdGFibGUnOiB0cnVlIH0sIF9hW1wiYWN0aW9uLXNoZWV0LVwiICsgYnV0dG9uLnJvbGVdID0gYnV0dG9uLnJvbGUgIT09IHVuZGVmaW5lZCwgX2EpLCBnZXRDbGFzc01hcChidXR0b24uY3NzQ2xhc3MpKTtcbn07XG5leHBvcnQgeyBBY3Rpb25TaGVldCBhcyBpb25fYWN0aW9uX3NoZWV0IH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG52YXIgaG9zdENvbnRleHQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGVsKSB7XG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xufTtcbi8qKlxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxuICovXG52YXIgY3JlYXRlQ29sb3JDbGFzc2VzID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IChfYSA9IHtcbiAgICAgICAgICAgICdpb24tY29sb3InOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIF9hW1wiaW9uLWNvbG9yLVwiICsgY29sb3JdID0gdHJ1ZSxcbiAgICAgICAgX2EpIDogdW5kZWZpbmVkO1xufTtcbnZhciBnZXRDbGFzc0xpc3QgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgIHJldHVybiBhcnJheVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPSBudWxsOyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50cmltKCk7IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSAnJzsgfSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbn07XG52YXIgZ2V0Q2xhc3NNYXAgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gbWFwW2NdID0gdHJ1ZTsgfSk7XG4gICAgcmV0dXJuIG1hcDtcbn07XG52YXIgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XG52YXIgb3BlblVSTCA9IGZ1bmN0aW9uICh1cmwsIGV2LCBkaXJlY3Rpb24pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvdXRlcjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgICAgICAgaWYgKHJvdXRlcikge1xuICAgICAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbildO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=