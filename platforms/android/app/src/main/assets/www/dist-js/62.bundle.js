(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-popover-ios.entry.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-popover-ios.entry.js ***!
  \************************************************************************/
/*! exports provided: ion_popover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_popover", function() { return Popover; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation-af478fe9.js */ "./node_modules/@ionic/core/dist/esm-es5/animation-af478fe9.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "./node_modules/@ionic/core/dist/esm-es5/constants-3c3e1099.js");
/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overlays-10640d86.js */ "./node_modules/@ionic/core/dist/esm-es5/overlays-10640d86.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");
/* harmony import */ var _framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./framework-delegate-c2e2e1f4.js */ "./node_modules/@ionic/core/dist/esm-es5/framework-delegate-c2e2e1f4.js");
/* harmony import */ var _index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index-4d91f03a.js */ "./node_modules/@ionic/core/dist/esm-es5/index-4d91f03a.js");










/**
 * iOS Popover Enter Animation
 */
var iosEnterAnimation = function (baseEl, ev) {
    var originY = 'top';
    var originX = 'left';
    var contentEl = baseEl.querySelector('.popover-content');
    var contentDimentions = contentEl.getBoundingClientRect();
    var contentWidth = contentDimentions.width;
    var contentHeight = contentDimentions.height;
    var bodyWidth = baseEl.ownerDocument.defaultView.innerWidth;
    var bodyHeight = baseEl.ownerDocument.defaultView.innerHeight;
    // If ev was passed, use that for target element
    var targetDim = ev && ev.target && ev.target.getBoundingClientRect();
    var targetTop = targetDim != null && 'top' in targetDim ? targetDim.top : bodyHeight / 2 - contentHeight / 2;
    var targetLeft = targetDim != null && 'left' in targetDim ? targetDim.left : bodyWidth / 2;
    var targetWidth = (targetDim && targetDim.width) || 0;
    var targetHeight = (targetDim && targetDim.height) || 0;
    var arrowEl = baseEl.querySelector('.popover-arrow');
    var arrowDim = arrowEl.getBoundingClientRect();
    var arrowWidth = arrowDim.width;
    var arrowHeight = arrowDim.height;
    if (targetDim == null) {
        arrowEl.style.display = 'none';
    }
    var arrowCSS = {
        top: targetTop + targetHeight,
        left: targetLeft + targetWidth / 2 - arrowWidth / 2
    };
    var popoverCSS = {
        top: targetTop + targetHeight + (arrowHeight - 1),
        left: targetLeft + targetWidth / 2 - contentWidth / 2
    };
    // If the popover left is less than the padding it is off screen
    // to the left so adjust it, else if the width of the popover
    // exceeds the body width it is off screen to the right so adjust
    //
    var checkSafeAreaLeft = false;
    var checkSafeAreaRight = false;
    // If the popover left is less than the padding it is off screen
    // to the left so adjust it, else if the width of the popover
    // exceeds the body width it is off screen to the right so adjust
    // 25 is a random/arbitrary number. It seems to work fine for ios11
    // and iPhoneX. Is it perfect? No. Does it work? Yes.
    if (popoverCSS.left < POPOVER_IOS_BODY_PADDING + 25) {
        checkSafeAreaLeft = true;
        popoverCSS.left = POPOVER_IOS_BODY_PADDING;
    }
    else if (contentWidth + POPOVER_IOS_BODY_PADDING + popoverCSS.left + 25 > bodyWidth) {
        // Ok, so we're on the right side of the screen,
        // but now we need to make sure we're still a bit further right
        // cus....notchurally... Again, 25 is random. It works tho
        checkSafeAreaRight = true;
        popoverCSS.left = bodyWidth - contentWidth - POPOVER_IOS_BODY_PADDING;
        originX = 'right';
    }
    // make it pop up if there's room above
    if (targetTop + targetHeight + contentHeight > bodyHeight && targetTop - contentHeight > 0) {
        arrowCSS.top = targetTop - (arrowHeight + 1);
        popoverCSS.top = targetTop - contentHeight - (arrowHeight - 1);
        baseEl.className = baseEl.className + ' popover-bottom';
        originY = 'bottom';
        // If there isn't room for it to pop up above the target cut it off
    }
    else if (targetTop + targetHeight + contentHeight > bodyHeight) {
        contentEl.style.bottom = POPOVER_IOS_BODY_PADDING + '%';
    }
    arrowEl.style.top = arrowCSS.top + 'px';
    arrowEl.style.left = arrowCSS.left + 'px';
    contentEl.style.top = popoverCSS.top + 'px';
    contentEl.style.left = popoverCSS.left + 'px';
    if (checkSafeAreaLeft) {
        contentEl.style.left = "calc(" + popoverCSS.left + "px + var(--ion-safe-area-left, 0px))";
    }
    if (checkSafeAreaRight) {
        contentEl.style.left = "calc(" + popoverCSS.left + "px - var(--ion-safe-area-right, 0px))";
    }
    contentEl.style.transformOrigin = originY + ' ' + originX;
    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.08);
    wrapperAnimation
        .addElement(baseEl.querySelector('.popover-wrapper'))
        .fromTo('opacity', 0.01, 1);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(100)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
var POPOVER_IOS_BODY_PADDING = 5;
/**
 * iOS Popover Leave Animation
 */
var iosLeaveAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.08, 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.popover-wrapper'))
        .fromTo('opacity', 0.99, 0);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Popover Enter Animation
 */
var mdEnterAnimation = function (baseEl, ev) {
    var POPOVER_MD_BODY_PADDING = 12;
    var doc = baseEl.ownerDocument;
    var isRTL = doc.dir === 'rtl';
    var originY = 'top';
    var originX = isRTL ? 'right' : 'left';
    var contentEl = baseEl.querySelector('.popover-content');
    var contentDimentions = contentEl.getBoundingClientRect();
    var contentWidth = contentDimentions.width;
    var contentHeight = contentDimentions.height;
    var bodyWidth = doc.defaultView.innerWidth;
    var bodyHeight = doc.defaultView.innerHeight;
    // If ev was passed, use that for target element
    var targetDim = ev && ev.target && ev.target.getBoundingClientRect();
    // As per MD spec, by default position the popover below the target (trigger) element
    var targetTop = targetDim != null && 'bottom' in targetDim
        ? targetDim.bottom
        : bodyHeight / 2 - contentHeight / 2;
    var targetLeft = targetDim != null && 'left' in targetDim
        ? isRTL
            ? targetDim.left - contentWidth + targetDim.width
            : targetDim.left
        : bodyWidth / 2 - contentWidth / 2;
    var targetHeight = (targetDim && targetDim.height) || 0;
    var popoverCSS = {
        top: targetTop,
        left: targetLeft
    };
    // If the popover left is less than the padding it is off screen
    // to the left so adjust it, else if the width of the popover
    // exceeds the body width it is off screen to the right so adjust
    if (popoverCSS.left < POPOVER_MD_BODY_PADDING) {
        popoverCSS.left = POPOVER_MD_BODY_PADDING;
        // Same origin in this case for both LTR & RTL
        // Note: in LTR, originX is already 'left'
        originX = 'left';
    }
    else if (contentWidth + POPOVER_MD_BODY_PADDING + popoverCSS.left >
        bodyWidth) {
        popoverCSS.left = bodyWidth - contentWidth - POPOVER_MD_BODY_PADDING;
        // Same origin in this case for both LTR & RTL
        // Note: in RTL, originX is already 'right'
        originX = 'right';
    }
    // If the popover when popped down stretches past bottom of screen,
    // make it pop up if there's room above
    if (targetTop + targetHeight + contentHeight > bodyHeight &&
        targetTop - contentHeight > 0) {
        popoverCSS.top = targetTop - contentHeight - targetHeight;
        baseEl.className = baseEl.className + ' popover-bottom';
        originY = 'bottom';
        // If there isn't room for it to pop up above the target cut it off
    }
    else if (targetTop + targetHeight + contentHeight > bodyHeight) {
        contentEl.style.bottom = POPOVER_MD_BODY_PADDING + 'px';
    }
    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var contentAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var viewportAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.32);
    wrapperAnimation
        .addElement(baseEl.querySelector('.popover-wrapper'))
        .fromTo('opacity', 0.01, 1);
    contentAnimation
        .addElement(contentEl)
        .beforeStyles({
        'top': popoverCSS.top + "px",
        'left': popoverCSS.left + "px",
        'transform-origin': originY + " " + originX
    })
        .fromTo('transform', 'scale(0.001)', 'scale(1)');
    viewportAnimation
        .addElement(baseEl.querySelector('.popover-viewport'))
        .fromTo('opacity', 0.01, 1);
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(300)
        .addAnimation([backdropAnimation, wrapperAnimation, contentAnimation, viewportAnimation]);
};
/**
 * Md Popover Leave Animation
 */
var mdLeaveAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.32, 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.popover-wrapper'))
        .fromTo('opacity', 0.99, 0);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
var Popover = /** @class */ (function () {
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
         * If `true`, the popover will be dismissed when the backdrop is clicked.
         */
        this.backdropDismiss = true;
        /**
         * If `true`, a backdrop will be displayed behind the popover.
         */
        this.showBackdrop = true;
        /**
         * If `true`, the popover will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        /**
         * If `true`, the popover will animate.
         */
        this.animated = true;
        this.onDismiss = function (ev) {
            ev.stopPropagation();
            ev.preventDefault();
            _this.dismiss();
        };
        this.onBackdropTap = function () {
            _this.dismiss(undefined, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__["B"]);
        };
        this.onLifecycle = function (modalEvent) {
            var el = _this.usersElement;
            var name = LIFECYCLE_MAP[modalEvent.type];
            if (el && name) {
                var event = new CustomEvent(name, {
                    bubbles: false,
                    cancelable: false,
                    detail: modalEvent.detail
                });
                el.dispatchEvent(event);
            }
        };
        Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__["d"])(this.el);
        this.didPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionPopoverDidPresent", 7);
        this.willPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionPopoverWillPresent", 7);
        this.willDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionPopoverWillDismiss", 7);
        this.didDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionPopoverDidDismiss", 7);
    }
    /**
     * Present the popover overlay after it has been created.
     */
    class_1.prototype.present = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var container, data, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.presented) {
                            return [2 /*return*/];
                        }
                        container = this.el.querySelector('.popover-content');
                        if (!container) {
                            throw new Error('container is undefined');
                        }
                        data = Object.assign(Object.assign({}, this.componentProps), { popover: this.el });
                        _a = this;
                        return [4 /*yield*/, Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_8__["a"])(this.delegate, container, this.component, ['popover-viewport', this.el['s-sc']], data)];
                    case 1:
                        _a.usersElement = _b.sent();
                        return [4 /*yield*/, Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_9__["d"])(this.usersElement)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__["e"])(this, 'popoverEnter', iosEnterAnimation, mdEnterAnimation, this.event)];
                }
            });
        });
    };
    /**
     * Dismiss the popover overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the popover. For example, 'cancel' or 'backdrop'.
     */
    class_1.prototype.dismiss = function (data, role) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var shouldDismiss;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__["f"])(this, data, role, 'popoverLeave', iosLeaveAnimation, mdLeaveAnimation, this.event)];
                    case 1:
                        shouldDismiss = _a.sent();
                        if (!shouldDismiss) return [3 /*break*/, 3];
                        return [4 /*yield*/, Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_8__["d"])(this.delegate, this.usersElement)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, shouldDismiss];
                }
            });
        });
    };
    /**
     * Returns a promise that resolves when the popover did dismiss.
     */
    class_1.prototype.onDidDismiss = function () {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__["g"])(this.el, 'ionPopoverDidDismiss');
    };
    /**
     * Returns a promise that resolves when the popover will dismiss.
     */
    class_1.prototype.onWillDismiss = function () {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__["g"])(this.el, 'ionPopoverWillDismiss');
    };
    class_1.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var onLifecycle = this.onLifecycle;
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { "aria-modal": "true", "no-router": true, style: {
                zIndex: "" + (20000 + this.overlayIndex),
            }, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_7__["g"])(this.cssClass)), (_a = {}, _a[mode] = true, _a['popover-translucent'] = this.translucent, _a)), onIonPopoverDidPresent: onLifecycle, onIonPopoverWillPresent: onLifecycle, onIonPopoverWillDismiss: onLifecycle, onIonPopoverDidDismiss: onLifecycle, onIonDismiss: this.onDismiss, onIonBackdropTap: this.onBackdropTap }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-backdrop", { tappable: this.backdropDismiss, visible: this.showBackdrop }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "popover-wrapper" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "popover-arrow" }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "popover-content" }))));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ".sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:\"\";z-index:10}[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after{top:-6px}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var LIFECYCLE_MAP = {
    'ionPopoverDidPresent': 'ionViewDidEnter',
    'ionPopoverWillPresent': 'ionViewWillEnter',
    'ionPopoverWillDismiss': 'ionViewWillLeave',
    'ionPopoverDidDismiss': 'ionViewDidLeave',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1wb3BvdmVyLWlvcy5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDOEU7QUFDL0Y7QUFDQztBQUNnQztBQUM5QjtBQUN5RjtBQUNuRTtBQUN1QztBQUN6QztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0VBQWU7QUFDdkMsNEJBQTRCLGdFQUFlO0FBQzNDLDJCQUEyQixnRUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdFQUFlO0FBQ3ZDLDRCQUE0QixnRUFBZTtBQUMzQywyQkFBMkIsZ0VBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnRUFBZTtBQUN2Qyw0QkFBNEIsZ0VBQWU7QUFDM0MsMkJBQTJCLGdFQUFlO0FBQzFDLDJCQUEyQixnRUFBZTtBQUMxQyw0QkFBNEIsZ0VBQWU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0VBQWU7QUFDdkMsNEJBQTRCLGdFQUFlO0FBQzNDLDJCQUEyQixnRUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBLG9CQUFvQiwyREFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx1REFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBYztBQUN0QiwwQkFBMEIsMkRBQVc7QUFDckMsMkJBQTJCLDJEQUFXO0FBQ3RDLDJCQUEyQiwyREFBVztBQUN0QywwQkFBMEIsMkRBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdURBQVM7QUFDeEI7QUFDQSxtQkFBbUIseURBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELHlCQUF5QixtQkFBbUI7QUFDekc7QUFDQSw2Q0FBNkMseUVBQWU7QUFDNUQ7QUFDQTtBQUNBLDZDQUE2Qyw0REFBUztBQUN0RDtBQUNBO0FBQ0EsOENBQThDLCtEQUFPO0FBQ3JEO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1REFBUztBQUN4QjtBQUNBLG1CQUFtQix5REFBVztBQUM5QjtBQUNBLGlEQUFpRCwrREFBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMseUVBQWU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFVO0FBQzdCO0FBQ0EsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRztBQUN6QjtBQUNBLGFBQWEsdUNBQXVDLEVBQUUsNERBQVcsMEJBQTBCLGlTQUFpUyxFQUFFLDJEQUFDLGtCQUFrQiw2REFBNkQsR0FBRywyREFBQyxTQUFTLDJCQUEyQixFQUFFLDJEQUFDLFNBQVMseUJBQXlCLEdBQUcsMkRBQUMsU0FBUywyQkFBMkI7QUFDbmtCO0FBQ0E7QUFDQSwwQkFBMEIsUUFBUSwyREFBVSxPQUFPLEVBQUU7QUFDckQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQiwrQkFBK0IsOENBQThDLGNBQWMsZUFBZSxpQkFBaUIsY0FBYyxPQUFPLFFBQVEsTUFBTSxTQUFTLG9CQUFvQixhQUFhLGVBQWUsc0JBQXNCLG1CQUFtQixxQkFBcUIsdUJBQXVCLGlDQUFpQyxhQUFhLHFDQUFxQyxhQUFhLG9DQUFvQyxVQUFVLFdBQVcsb0NBQW9DLG9CQUFvQixhQUFhLGtCQUFrQiwwQkFBMEIsc0JBQXNCLG1CQUFtQiwyQkFBMkIsMkJBQTJCLHFCQUFxQiw2QkFBNkIsNkJBQTZCLDZCQUE2QixxQ0FBcUMsNkJBQTZCLGNBQWMsV0FBVyxxQ0FBcUMsd0JBQXdCLDBCQUEwQiwyQkFBMkIseUJBQXlCLHNCQUFzQixjQUFjLGlCQUFpQixrQkFBa0Isb0NBQW9DLG1CQUFtQixrQ0FBa0MsY0FBYyxrQkFBa0IsV0FBVyxZQUFZLGdCQUFnQix3Q0FBd0MsU0FBUyxRQUFRLGtCQUFrQixrQkFBa0IsV0FBVyxZQUFZLGdDQUFnQyx3QkFBd0IsNkJBQTZCLGFBQWEsV0FBVyxzTkFBc04sV0FBVyxZQUFZLFVBQVUsdUVBQXVFLFNBQVMsYUFBYSw2RUFBNkUsU0FBUyw0RUFBNEUsaUtBQWlLLGdFQUFnRSxrREFBa0QsMkNBQTJDLEVBQUUsRUFBRTtBQUNqd0U7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0M7Ozs7Ozs7Ozs7Ozs7QUN0WGxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxrQkFBa0IsRUFBRTtBQUN0RCwrQkFBK0IsaUJBQWlCLEVBQUU7QUFDbEQsa0NBQWtDLGlCQUFpQixFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Qsc0JBQXNCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFFBQVEsdURBQVM7QUFDOUQ7QUFDQSxXQUFXLHlEQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNrRiIsImZpbGUiOiI2Mi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgZ2V0SW9uTW9kZSwgZCBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtZmVlZWZmMGQuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUFuaW1hdGlvbiB9IGZyb20gJy4vYW5pbWF0aW9uLWFmNDc4ZmU5LmpzJztcbmltcG9ydCAnLi9jb25zdGFudHMtM2MzZTEwOTkuanMnO1xuaW1wb3J0IHsgQiBhcyBCQUNLRFJPUCwgZCBhcyBwcmVwYXJlT3ZlcmxheSwgZSBhcyBwcmVzZW50LCBmIGFzIGRpc21pc3MsIGcgYXMgZXZlbnRNZXRob2QgfSBmcm9tICcuL292ZXJsYXlzLTEwNjQwZDg2LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0Q2xhc3NNYXAgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcbmltcG9ydCB7IGEgYXMgYXR0YWNoQ29tcG9uZW50LCBkIGFzIGRldGFjaENvbXBvbmVudCB9IGZyb20gJy4vZnJhbWV3b3JrLWRlbGVnYXRlLWMyZTJlMWY0LmpzJztcbmltcG9ydCB7IGQgYXMgZGVlcFJlYWR5IH0gZnJvbSAnLi9pbmRleC00ZDkxZjAzYS5qcyc7XG4vKipcbiAqIGlPUyBQb3BvdmVyIEVudGVyIEFuaW1hdGlvblxuICovXG52YXIgaW9zRW50ZXJBbmltYXRpb24gPSBmdW5jdGlvbiAoYmFzZUVsLCBldikge1xuICAgIHZhciBvcmlnaW5ZID0gJ3RvcCc7XG4gICAgdmFyIG9yaWdpblggPSAnbGVmdCc7XG4gICAgdmFyIGNvbnRlbnRFbCA9IGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcucG9wb3Zlci1jb250ZW50Jyk7XG4gICAgdmFyIGNvbnRlbnREaW1lbnRpb25zID0gY29udGVudEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBjb250ZW50V2lkdGggPSBjb250ZW50RGltZW50aW9ucy53aWR0aDtcbiAgICB2YXIgY29udGVudEhlaWdodCA9IGNvbnRlbnREaW1lbnRpb25zLmhlaWdodDtcbiAgICB2YXIgYm9keVdpZHRoID0gYmFzZUVsLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuaW5uZXJXaWR0aDtcbiAgICB2YXIgYm9keUhlaWdodCA9IGJhc2VFbC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmlubmVySGVpZ2h0O1xuICAgIC8vIElmIGV2IHdhcyBwYXNzZWQsIHVzZSB0aGF0IGZvciB0YXJnZXQgZWxlbWVudFxuICAgIHZhciB0YXJnZXREaW0gPSBldiAmJiBldi50YXJnZXQgJiYgZXYudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciB0YXJnZXRUb3AgPSB0YXJnZXREaW0gIT0gbnVsbCAmJiAndG9wJyBpbiB0YXJnZXREaW0gPyB0YXJnZXREaW0udG9wIDogYm9keUhlaWdodCAvIDIgLSBjb250ZW50SGVpZ2h0IC8gMjtcbiAgICB2YXIgdGFyZ2V0TGVmdCA9IHRhcmdldERpbSAhPSBudWxsICYmICdsZWZ0JyBpbiB0YXJnZXREaW0gPyB0YXJnZXREaW0ubGVmdCA6IGJvZHlXaWR0aCAvIDI7XG4gICAgdmFyIHRhcmdldFdpZHRoID0gKHRhcmdldERpbSAmJiB0YXJnZXREaW0ud2lkdGgpIHx8IDA7XG4gICAgdmFyIHRhcmdldEhlaWdodCA9ICh0YXJnZXREaW0gJiYgdGFyZ2V0RGltLmhlaWdodCkgfHwgMDtcbiAgICB2YXIgYXJyb3dFbCA9IGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcucG9wb3Zlci1hcnJvdycpO1xuICAgIHZhciBhcnJvd0RpbSA9IGFycm93RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGFycm93V2lkdGggPSBhcnJvd0RpbS53aWR0aDtcbiAgICB2YXIgYXJyb3dIZWlnaHQgPSBhcnJvd0RpbS5oZWlnaHQ7XG4gICAgaWYgKHRhcmdldERpbSA9PSBudWxsKSB7XG4gICAgICAgIGFycm93RWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgdmFyIGFycm93Q1NTID0ge1xuICAgICAgICB0b3A6IHRhcmdldFRvcCArIHRhcmdldEhlaWdodCxcbiAgICAgICAgbGVmdDogdGFyZ2V0TGVmdCArIHRhcmdldFdpZHRoIC8gMiAtIGFycm93V2lkdGggLyAyXG4gICAgfTtcbiAgICB2YXIgcG9wb3ZlckNTUyA9IHtcbiAgICAgICAgdG9wOiB0YXJnZXRUb3AgKyB0YXJnZXRIZWlnaHQgKyAoYXJyb3dIZWlnaHQgLSAxKSxcbiAgICAgICAgbGVmdDogdGFyZ2V0TGVmdCArIHRhcmdldFdpZHRoIC8gMiAtIGNvbnRlbnRXaWR0aCAvIDJcbiAgICB9O1xuICAgIC8vIElmIHRoZSBwb3BvdmVyIGxlZnQgaXMgbGVzcyB0aGFuIHRoZSBwYWRkaW5nIGl0IGlzIG9mZiBzY3JlZW5cbiAgICAvLyB0byB0aGUgbGVmdCBzbyBhZGp1c3QgaXQsIGVsc2UgaWYgdGhlIHdpZHRoIG9mIHRoZSBwb3BvdmVyXG4gICAgLy8gZXhjZWVkcyB0aGUgYm9keSB3aWR0aCBpdCBpcyBvZmYgc2NyZWVuIHRvIHRoZSByaWdodCBzbyBhZGp1c3RcbiAgICAvL1xuICAgIHZhciBjaGVja1NhZmVBcmVhTGVmdCA9IGZhbHNlO1xuICAgIHZhciBjaGVja1NhZmVBcmVhUmlnaHQgPSBmYWxzZTtcbiAgICAvLyBJZiB0aGUgcG9wb3ZlciBsZWZ0IGlzIGxlc3MgdGhhbiB0aGUgcGFkZGluZyBpdCBpcyBvZmYgc2NyZWVuXG4gICAgLy8gdG8gdGhlIGxlZnQgc28gYWRqdXN0IGl0LCBlbHNlIGlmIHRoZSB3aWR0aCBvZiB0aGUgcG9wb3ZlclxuICAgIC8vIGV4Y2VlZHMgdGhlIGJvZHkgd2lkdGggaXQgaXMgb2ZmIHNjcmVlbiB0byB0aGUgcmlnaHQgc28gYWRqdXN0XG4gICAgLy8gMjUgaXMgYSByYW5kb20vYXJiaXRyYXJ5IG51bWJlci4gSXQgc2VlbXMgdG8gd29yayBmaW5lIGZvciBpb3MxMVxuICAgIC8vIGFuZCBpUGhvbmVYLiBJcyBpdCBwZXJmZWN0PyBOby4gRG9lcyBpdCB3b3JrPyBZZXMuXG4gICAgaWYgKHBvcG92ZXJDU1MubGVmdCA8IFBPUE9WRVJfSU9TX0JPRFlfUEFERElORyArIDI1KSB7XG4gICAgICAgIGNoZWNrU2FmZUFyZWFMZWZ0ID0gdHJ1ZTtcbiAgICAgICAgcG9wb3ZlckNTUy5sZWZ0ID0gUE9QT1ZFUl9JT1NfQk9EWV9QQURESU5HO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb250ZW50V2lkdGggKyBQT1BPVkVSX0lPU19CT0RZX1BBRERJTkcgKyBwb3BvdmVyQ1NTLmxlZnQgKyAyNSA+IGJvZHlXaWR0aCkge1xuICAgICAgICAvLyBPaywgc28gd2UncmUgb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHNjcmVlbixcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB3ZSdyZSBzdGlsbCBhIGJpdCBmdXJ0aGVyIHJpZ2h0XG4gICAgICAgIC8vIGN1cy4uLi5ub3RjaHVyYWxseS4uLiBBZ2FpbiwgMjUgaXMgcmFuZG9tLiBJdCB3b3JrcyB0aG9cbiAgICAgICAgY2hlY2tTYWZlQXJlYVJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgcG9wb3ZlckNTUy5sZWZ0ID0gYm9keVdpZHRoIC0gY29udGVudFdpZHRoIC0gUE9QT1ZFUl9JT1NfQk9EWV9QQURESU5HO1xuICAgICAgICBvcmlnaW5YID0gJ3JpZ2h0JztcbiAgICB9XG4gICAgLy8gbWFrZSBpdCBwb3AgdXAgaWYgdGhlcmUncyByb29tIGFib3ZlXG4gICAgaWYgKHRhcmdldFRvcCArIHRhcmdldEhlaWdodCArIGNvbnRlbnRIZWlnaHQgPiBib2R5SGVpZ2h0ICYmIHRhcmdldFRvcCAtIGNvbnRlbnRIZWlnaHQgPiAwKSB7XG4gICAgICAgIGFycm93Q1NTLnRvcCA9IHRhcmdldFRvcCAtIChhcnJvd0hlaWdodCArIDEpO1xuICAgICAgICBwb3BvdmVyQ1NTLnRvcCA9IHRhcmdldFRvcCAtIGNvbnRlbnRIZWlnaHQgLSAoYXJyb3dIZWlnaHQgLSAxKTtcbiAgICAgICAgYmFzZUVsLmNsYXNzTmFtZSA9IGJhc2VFbC5jbGFzc05hbWUgKyAnIHBvcG92ZXItYm90dG9tJztcbiAgICAgICAgb3JpZ2luWSA9ICdib3R0b20nO1xuICAgICAgICAvLyBJZiB0aGVyZSBpc24ndCByb29tIGZvciBpdCB0byBwb3AgdXAgYWJvdmUgdGhlIHRhcmdldCBjdXQgaXQgb2ZmXG4gICAgfVxuICAgIGVsc2UgaWYgKHRhcmdldFRvcCArIHRhcmdldEhlaWdodCArIGNvbnRlbnRIZWlnaHQgPiBib2R5SGVpZ2h0KSB7XG4gICAgICAgIGNvbnRlbnRFbC5zdHlsZS5ib3R0b20gPSBQT1BPVkVSX0lPU19CT0RZX1BBRERJTkcgKyAnJSc7XG4gICAgfVxuICAgIGFycm93RWwuc3R5bGUudG9wID0gYXJyb3dDU1MudG9wICsgJ3B4JztcbiAgICBhcnJvd0VsLnN0eWxlLmxlZnQgPSBhcnJvd0NTUy5sZWZ0ICsgJ3B4JztcbiAgICBjb250ZW50RWwuc3R5bGUudG9wID0gcG9wb3ZlckNTUy50b3AgKyAncHgnO1xuICAgIGNvbnRlbnRFbC5zdHlsZS5sZWZ0ID0gcG9wb3ZlckNTUy5sZWZ0ICsgJ3B4JztcbiAgICBpZiAoY2hlY2tTYWZlQXJlYUxlZnQpIHtcbiAgICAgICAgY29udGVudEVsLnN0eWxlLmxlZnQgPSBcImNhbGMoXCIgKyBwb3BvdmVyQ1NTLmxlZnQgKyBcInB4ICsgdmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0LCAwcHgpKVwiO1xuICAgIH1cbiAgICBpZiAoY2hlY2tTYWZlQXJlYVJpZ2h0KSB7XG4gICAgICAgIGNvbnRlbnRFbC5zdHlsZS5sZWZ0ID0gXCJjYWxjKFwiICsgcG9wb3ZlckNTUy5sZWZ0ICsgXCJweCAtIHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQsIDBweCkpXCI7XG4gICAgfVxuICAgIGNvbnRlbnRFbC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBvcmlnaW5ZICsgJyAnICsgb3JpZ2luWDtcbiAgICB2YXIgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgYmFja2Ryb3BBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMC4wOCk7XG4gICAgd3JhcHBlckFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLnBvcG92ZXItd3JhcHBlcicpKVxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMSk7XG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxuICAgICAgICAuZWFzaW5nKCdlYXNlJylcbiAgICAgICAgLmR1cmF0aW9uKDEwMClcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcbn07XG52YXIgUE9QT1ZFUl9JT1NfQk9EWV9QQURESU5HID0gNTtcbi8qKlxuICogaU9TIFBvcG92ZXIgTGVhdmUgQW5pbWF0aW9uXG4gKi9cbnZhciBpb3NMZWF2ZUFuaW1hdGlvbiA9IGZ1bmN0aW9uIChiYXNlRWwpIHtcbiAgICB2YXIgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgYmFja2Ryb3BBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4wOCwgMCk7XG4gICAgd3JhcHBlckFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLnBvcG92ZXItd3JhcHBlcicpKVxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC45OSwgMCk7XG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxuICAgICAgICAuZWFzaW5nKCdlYXNlJylcbiAgICAgICAgLmR1cmF0aW9uKDUwMClcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcbn07XG4vKipcbiAqIE1kIFBvcG92ZXIgRW50ZXIgQW5pbWF0aW9uXG4gKi9cbnZhciBtZEVudGVyQW5pbWF0aW9uID0gZnVuY3Rpb24gKGJhc2VFbCwgZXYpIHtcbiAgICB2YXIgUE9QT1ZFUl9NRF9CT0RZX1BBRERJTkcgPSAxMjtcbiAgICB2YXIgZG9jID0gYmFzZUVsLm93bmVyRG9jdW1lbnQ7XG4gICAgdmFyIGlzUlRMID0gZG9jLmRpciA9PT0gJ3J0bCc7XG4gICAgdmFyIG9yaWdpblkgPSAndG9wJztcbiAgICB2YXIgb3JpZ2luWCA9IGlzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICB2YXIgY29udGVudEVsID0gYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5wb3BvdmVyLWNvbnRlbnQnKTtcbiAgICB2YXIgY29udGVudERpbWVudGlvbnMgPSBjb250ZW50RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGNvbnRlbnRXaWR0aCA9IGNvbnRlbnREaW1lbnRpb25zLndpZHRoO1xuICAgIHZhciBjb250ZW50SGVpZ2h0ID0gY29udGVudERpbWVudGlvbnMuaGVpZ2h0O1xuICAgIHZhciBib2R5V2lkdGggPSBkb2MuZGVmYXVsdFZpZXcuaW5uZXJXaWR0aDtcbiAgICB2YXIgYm9keUhlaWdodCA9IGRvYy5kZWZhdWx0Vmlldy5pbm5lckhlaWdodDtcbiAgICAvLyBJZiBldiB3YXMgcGFzc2VkLCB1c2UgdGhhdCBmb3IgdGFyZ2V0IGVsZW1lbnRcbiAgICB2YXIgdGFyZ2V0RGltID0gZXYgJiYgZXYudGFyZ2V0ICYmIGV2LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAvLyBBcyBwZXIgTUQgc3BlYywgYnkgZGVmYXVsdCBwb3NpdGlvbiB0aGUgcG9wb3ZlciBiZWxvdyB0aGUgdGFyZ2V0ICh0cmlnZ2VyKSBlbGVtZW50XG4gICAgdmFyIHRhcmdldFRvcCA9IHRhcmdldERpbSAhPSBudWxsICYmICdib3R0b20nIGluIHRhcmdldERpbVxuICAgICAgICA/IHRhcmdldERpbS5ib3R0b21cbiAgICAgICAgOiBib2R5SGVpZ2h0IC8gMiAtIGNvbnRlbnRIZWlnaHQgLyAyO1xuICAgIHZhciB0YXJnZXRMZWZ0ID0gdGFyZ2V0RGltICE9IG51bGwgJiYgJ2xlZnQnIGluIHRhcmdldERpbVxuICAgICAgICA/IGlzUlRMXG4gICAgICAgICAgICA/IHRhcmdldERpbS5sZWZ0IC0gY29udGVudFdpZHRoICsgdGFyZ2V0RGltLndpZHRoXG4gICAgICAgICAgICA6IHRhcmdldERpbS5sZWZ0XG4gICAgICAgIDogYm9keVdpZHRoIC8gMiAtIGNvbnRlbnRXaWR0aCAvIDI7XG4gICAgdmFyIHRhcmdldEhlaWdodCA9ICh0YXJnZXREaW0gJiYgdGFyZ2V0RGltLmhlaWdodCkgfHwgMDtcbiAgICB2YXIgcG9wb3ZlckNTUyA9IHtcbiAgICAgICAgdG9wOiB0YXJnZXRUb3AsXG4gICAgICAgIGxlZnQ6IHRhcmdldExlZnRcbiAgICB9O1xuICAgIC8vIElmIHRoZSBwb3BvdmVyIGxlZnQgaXMgbGVzcyB0aGFuIHRoZSBwYWRkaW5nIGl0IGlzIG9mZiBzY3JlZW5cbiAgICAvLyB0byB0aGUgbGVmdCBzbyBhZGp1c3QgaXQsIGVsc2UgaWYgdGhlIHdpZHRoIG9mIHRoZSBwb3BvdmVyXG4gICAgLy8gZXhjZWVkcyB0aGUgYm9keSB3aWR0aCBpdCBpcyBvZmYgc2NyZWVuIHRvIHRoZSByaWdodCBzbyBhZGp1c3RcbiAgICBpZiAocG9wb3ZlckNTUy5sZWZ0IDwgUE9QT1ZFUl9NRF9CT0RZX1BBRERJTkcpIHtcbiAgICAgICAgcG9wb3ZlckNTUy5sZWZ0ID0gUE9QT1ZFUl9NRF9CT0RZX1BBRERJTkc7XG4gICAgICAgIC8vIFNhbWUgb3JpZ2luIGluIHRoaXMgY2FzZSBmb3IgYm90aCBMVFIgJiBSVExcbiAgICAgICAgLy8gTm90ZTogaW4gTFRSLCBvcmlnaW5YIGlzIGFscmVhZHkgJ2xlZnQnXG4gICAgICAgIG9yaWdpblggPSAnbGVmdCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbnRlbnRXaWR0aCArIFBPUE9WRVJfTURfQk9EWV9QQURESU5HICsgcG9wb3ZlckNTUy5sZWZ0ID5cbiAgICAgICAgYm9keVdpZHRoKSB7XG4gICAgICAgIHBvcG92ZXJDU1MubGVmdCA9IGJvZHlXaWR0aCAtIGNvbnRlbnRXaWR0aCAtIFBPUE9WRVJfTURfQk9EWV9QQURESU5HO1xuICAgICAgICAvLyBTYW1lIG9yaWdpbiBpbiB0aGlzIGNhc2UgZm9yIGJvdGggTFRSICYgUlRMXG4gICAgICAgIC8vIE5vdGU6IGluIFJUTCwgb3JpZ2luWCBpcyBhbHJlYWR5ICdyaWdodCdcbiAgICAgICAgb3JpZ2luWCA9ICdyaWdodCc7XG4gICAgfVxuICAgIC8vIElmIHRoZSBwb3BvdmVyIHdoZW4gcG9wcGVkIGRvd24gc3RyZXRjaGVzIHBhc3QgYm90dG9tIG9mIHNjcmVlbixcbiAgICAvLyBtYWtlIGl0IHBvcCB1cCBpZiB0aGVyZSdzIHJvb20gYWJvdmVcbiAgICBpZiAodGFyZ2V0VG9wICsgdGFyZ2V0SGVpZ2h0ICsgY29udGVudEhlaWdodCA+IGJvZHlIZWlnaHQgJiZcbiAgICAgICAgdGFyZ2V0VG9wIC0gY29udGVudEhlaWdodCA+IDApIHtcbiAgICAgICAgcG9wb3ZlckNTUy50b3AgPSB0YXJnZXRUb3AgLSBjb250ZW50SGVpZ2h0IC0gdGFyZ2V0SGVpZ2h0O1xuICAgICAgICBiYXNlRWwuY2xhc3NOYW1lID0gYmFzZUVsLmNsYXNzTmFtZSArICcgcG9wb3Zlci1ib3R0b20nO1xuICAgICAgICBvcmlnaW5ZID0gJ2JvdHRvbSc7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzbid0IHJvb20gZm9yIGl0IHRvIHBvcCB1cCBhYm92ZSB0aGUgdGFyZ2V0IGN1dCBpdCBvZmZcbiAgICB9XG4gICAgZWxzZSBpZiAodGFyZ2V0VG9wICsgdGFyZ2V0SGVpZ2h0ICsgY29udGVudEhlaWdodCA+IGJvZHlIZWlnaHQpIHtcbiAgICAgICAgY29udGVudEVsLnN0eWxlLmJvdHRvbSA9IFBPUE9WRVJfTURfQk9EWV9QQURESU5HICsgJ3B4JztcbiAgICB9XG4gICAgdmFyIGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciBjb250ZW50QW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIHZpZXdwb3J0QW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgYmFja2Ryb3BBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMC4zMik7XG4gICAgd3JhcHBlckFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLnBvcG92ZXItd3JhcHBlcicpKVxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMSk7XG4gICAgY29udGVudEFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChjb250ZW50RWwpXG4gICAgICAgIC5iZWZvcmVTdHlsZXMoe1xuICAgICAgICAndG9wJzogcG9wb3ZlckNTUy50b3AgKyBcInB4XCIsXG4gICAgICAgICdsZWZ0JzogcG9wb3ZlckNTUy5sZWZ0ICsgXCJweFwiLFxuICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6IG9yaWdpblkgKyBcIiBcIiArIG9yaWdpblhcbiAgICB9KVxuICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCAnc2NhbGUoMC4wMDEpJywgJ3NjYWxlKDEpJyk7XG4gICAgdmlld3BvcnRBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5wb3BvdmVyLXZpZXdwb3J0JykpXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAxKTtcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXG4gICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllcigwLjM2LDAuNjYsMC4wNCwxKScpXG4gICAgICAgIC5kdXJhdGlvbigzMDApXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uLCBjb250ZW50QW5pbWF0aW9uLCB2aWV3cG9ydEFuaW1hdGlvbl0pO1xufTtcbi8qKlxuICogTWQgUG9wb3ZlciBMZWF2ZSBBbmltYXRpb25cbiAqL1xudmFyIG1kTGVhdmVBbmltYXRpb24gPSBmdW5jdGlvbiAoYmFzZUVsKSB7XG4gICAgdmFyIGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIGJhY2tkcm9wQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSlcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMzIsIDApO1xuICAgIHdyYXBwZXJBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5wb3BvdmVyLXdyYXBwZXInKSlcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuOTksIDApO1xuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbClcbiAgICAgICAgLmVhc2luZygnZWFzZScpXG4gICAgICAgIC5kdXJhdGlvbig1MDApXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xudmFyIFBvcG92ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMShob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMucHJlc2VudGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBrZXlib2FyZCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZGlzbWlzc2VkIHdoZW4gdGhlIG92ZXJsYXkgaXMgcHJlc2VudGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5rZXlib2FyZENsb3NlID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHBvcG92ZXIgd2lsbCBiZSBkaXNtaXNzZWQgd2hlbiB0aGUgYmFja2Ryb3AgaXMgY2xpY2tlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYmFja2Ryb3BEaXNtaXNzID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgYSBiYWNrZHJvcCB3aWxsIGJlIGRpc3BsYXllZCBiZWhpbmQgdGhlIHBvcG92ZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNob3dCYWNrZHJvcCA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBwb3BvdmVyIHdpbGwgYmUgdHJhbnNsdWNlbnQuXG4gICAgICAgICAqIE9ubHkgYXBwbGllcyB3aGVuIHRoZSBtb2RlIGlzIGBcImlvc1wiYCBhbmQgdGhlIGRldmljZSBzdXBwb3J0c1xuICAgICAgICAgKiBbYGJhY2tkcm9wLWZpbHRlcmBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZHJvcC1maWx0ZXIjQnJvd3Nlcl9jb21wYXRpYmlsaXR5KS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJhbnNsdWNlbnQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHBvcG92ZXIgd2lsbCBhbmltYXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hbmltYXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub25EaXNtaXNzID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBfdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25CYWNrZHJvcFRhcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmRpc21pc3ModW5kZWZpbmVkLCBCQUNLRFJPUCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25MaWZlY3ljbGUgPSBmdW5jdGlvbiAobW9kYWxFdmVudCkge1xuICAgICAgICAgICAgdmFyIGVsID0gX3RoaXMudXNlcnNFbGVtZW50O1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBMSUZFQ1lDTEVfTUFQW21vZGFsRXZlbnQudHlwZV07XG4gICAgICAgICAgICBpZiAoZWwgJiYgbmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBDdXN0b21FdmVudChuYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiBtb2RhbEV2ZW50LmRldGFpbFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBwcmVwYXJlT3ZlcmxheSh0aGlzLmVsKTtcbiAgICAgICAgdGhpcy5kaWRQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Qb3BvdmVyRGlkUHJlc2VudFwiLCA3KTtcbiAgICAgICAgdGhpcy53aWxsUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUG9wb3ZlcldpbGxQcmVzZW50XCIsIDcpO1xuICAgICAgICB0aGlzLndpbGxEaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Qb3BvdmVyV2lsbERpc21pc3NcIiwgNyk7XG4gICAgICAgIHRoaXMuZGlkRGlzbWlzcyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUG9wb3ZlckRpZERpc21pc3NcIiwgNyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZXNlbnQgdGhlIHBvcG92ZXIgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBjcmVhdGVkLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnByZXNlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIsIGRhdGEsIF9hO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJlc2VudGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcucG9wb3Zlci1jb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29udGFpbmVyIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb21wb25lbnRQcm9wcyksIHsgcG9wb3ZlcjogdGhpcy5lbCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGF0dGFjaENvbXBvbmVudCh0aGlzLmRlbGVnYXRlLCBjb250YWluZXIsIHRoaXMuY29tcG9uZW50LCBbJ3BvcG92ZXItdmlld3BvcnQnLCB0aGlzLmVsWydzLXNjJ11dLCBkYXRhKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnVzZXJzRWxlbWVudCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGRlZXBSZWFkeSh0aGlzLnVzZXJzRWxlbWVudCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcHJlc2VudCh0aGlzLCAncG9wb3ZlckVudGVyJywgaW9zRW50ZXJBbmltYXRpb24sIG1kRW50ZXJBbmltYXRpb24sIHRoaXMuZXZlbnQpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXNtaXNzIHRoZSBwb3BvdmVyIG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gcHJlc2VudGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgQW55IGRhdGEgdG8gZW1pdCBpbiB0aGUgZGlzbWlzcyBldmVudHMuXG4gICAgICogQHBhcmFtIHJvbGUgVGhlIHJvbGUgb2YgdGhlIGVsZW1lbnQgdGhhdCBpcyBkaXNtaXNzaW5nIHRoZSBwb3BvdmVyLiBGb3IgZXhhbXBsZSwgJ2NhbmNlbCcgb3IgJ2JhY2tkcm9wJy5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5kaXNtaXNzID0gZnVuY3Rpb24gKGRhdGEsIHJvbGUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNob3VsZERpc21pc3M7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGRpc21pc3ModGhpcywgZGF0YSwgcm9sZSwgJ3BvcG92ZXJMZWF2ZScsIGlvc0xlYXZlQW5pbWF0aW9uLCBtZExlYXZlQW5pbWF0aW9uLCB0aGlzLmV2ZW50KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZERpc21pc3MgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNob3VsZERpc21pc3MpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZGV0YWNoQ29tcG9uZW50KHRoaXMuZGVsZWdhdGUsIHRoaXMudXNlcnNFbGVtZW50KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qLywgc2hvdWxkRGlzbWlzc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBwb3BvdmVyIGRpZCBkaXNtaXNzLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9uRGlkRGlzbWlzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25Qb3BvdmVyRGlkRGlzbWlzcycpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBwb3BvdmVyIHdpbGwgZGlzbWlzcy5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5vbldpbGxEaXNtaXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvblBvcG92ZXJXaWxsRGlzbWlzcycpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgdmFyIG9uTGlmZWN5Y2xlID0gdGhpcy5vbkxpZmVjeWNsZTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLW1vZGFsXCI6IFwidHJ1ZVwiLCBcIm5vLXJvdXRlclwiOiB0cnVlLCBzdHlsZToge1xuICAgICAgICAgICAgICAgIHpJbmRleDogXCJcIiArICgyMDAwMCArIHRoaXMub3ZlcmxheUluZGV4KSxcbiAgICAgICAgICAgIH0sIGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdldENsYXNzTWFwKHRoaXMuY3NzQ2xhc3MpKSwgKF9hID0ge30sIF9hW21vZGVdID0gdHJ1ZSwgX2FbJ3BvcG92ZXItdHJhbnNsdWNlbnQnXSA9IHRoaXMudHJhbnNsdWNlbnQsIF9hKSksIG9uSW9uUG9wb3ZlckRpZFByZXNlbnQ6IG9uTGlmZWN5Y2xlLCBvbklvblBvcG92ZXJXaWxsUHJlc2VudDogb25MaWZlY3ljbGUsIG9uSW9uUG9wb3ZlcldpbGxEaXNtaXNzOiBvbkxpZmVjeWNsZSwgb25Jb25Qb3BvdmVyRGlkRGlzbWlzczogb25MaWZlY3ljbGUsIG9uSW9uRGlzbWlzczogdGhpcy5vbkRpc21pc3MsIG9uSW9uQmFja2Ryb3BUYXA6IHRoaXMub25CYWNrZHJvcFRhcCB9LCBoKFwiaW9uLWJhY2tkcm9wXCIsIHsgdGFwcGFibGU6IHRoaXMuYmFja2Ryb3BEaXNtaXNzLCB2aXNpYmxlOiB0aGlzLnNob3dCYWNrZHJvcCB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInBvcG92ZXItd3JhcHBlclwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJwb3BvdmVyLWFycm93XCIgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJwb3BvdmVyLWNvbnRlbnRcIiB9KSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEsIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiLnNjLWlvbi1wb3BvdmVyLWlvcy1oey0tYmFja2dyb3VuZDp2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKTstLW1pbi13aWR0aDowOy0tbWluLWhlaWdodDowOy0tbWF4LXdpZHRoOmF1dG87LS1oZWlnaHQ6YXV0bztsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpmaXhlZDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Y29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCk7ei1pbmRleDoxMDAxfS5vdmVybGF5LWhpZGRlbi5zYy1pb24tcG9wb3Zlci1pb3MtaHtkaXNwbGF5Om5vbmV9LnBvcG92ZXItd3JhcHBlci5zYy1pb24tcG9wb3Zlci1pb3N7b3BhY2l0eTowO3otaW5kZXg6MTB9LnBvcG92ZXItY29udGVudC5zYy1pb24tcG9wb3Zlci1pb3N7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpOy13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpO292ZXJmbG93OmF1dG87ei1pbmRleDoxMH0ucG9wb3Zlci12aWV3cG9ydC5zYy1pb24tcG9wb3Zlci1pb3N7LS1pb24tc2FmZS1hcmVhLXRvcDowcHg7LS1pb24tc2FmZS1hcmVhLXJpZ2h0OjBweDstLWlvbi1zYWZlLWFyZWEtYm90dG9tOjBweDstLWlvbi1zYWZlLWFyZWEtbGVmdDowcHh9LnNjLWlvbi1wb3BvdmVyLWlvcy1oey0td2lkdGg6MjAwcHg7LS1tYXgtaGVpZ2h0OjkwJTstLWJveC1zaGFkb3c6bm9uZX0ucG9wb3Zlci1jb250ZW50LnNjLWlvbi1wb3BvdmVyLWlvc3tib3JkZXItcmFkaXVzOjEwcHh9LnBvcG92ZXItYXJyb3cuc2MtaW9uLXBvcG92ZXItaW9ze2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MjBweDtoZWlnaHQ6MTBweDtvdmVyZmxvdzpoaWRkZW59LnBvcG92ZXItYXJyb3cuc2MtaW9uLXBvcG92ZXItaW9zOmFmdGVye2xlZnQ6M3B4O3RvcDozcHg7Ym9yZGVyLXJhZGl1czozcHg7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTRweDtoZWlnaHQ6MTRweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29udGVudDpcXFwiXFxcIjt6LWluZGV4OjEwfVtkaXI9cnRsXS5zYy1pb24tcG9wb3Zlci1pb3MtaCAucG9wb3Zlci1hcnJvdy5zYy1pb24tcG9wb3Zlci1pb3M6YWZ0ZXIsIFtkaXI9cnRsXSAuc2MtaW9uLXBvcG92ZXItaW9zLWggLnBvcG92ZXItYXJyb3cuc2MtaW9uLXBvcG92ZXItaW9zOmFmdGVyLCBbZGlyPXJ0bF0uc2MtaW9uLXBvcG92ZXItaW9zIC5wb3BvdmVyLWFycm93LnNjLWlvbi1wb3BvdmVyLWlvczphZnRlcntsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjNweH0ucG9wb3Zlci1ib3R0b20uc2MtaW9uLXBvcG92ZXItaW9zLWggLnBvcG92ZXItYXJyb3cuc2MtaW9uLXBvcG92ZXItaW9ze3RvcDphdXRvO2JvdHRvbTotMTBweH0ucG9wb3Zlci1ib3R0b20uc2MtaW9uLXBvcG92ZXItaW9zLWggLnBvcG92ZXItYXJyb3cuc2MtaW9uLXBvcG92ZXItaW9zOmFmdGVye3RvcDotNnB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6Ymx1cigwKSkgb3IgKGJhY2tkcm9wLWZpbHRlcjpibHVyKDApKSl7LnBvcG92ZXItdHJhbnNsdWNlbnQuc2MtaW9uLXBvcG92ZXItaW9zLWggLnBvcG92ZXItYXJyb3cuc2MtaW9uLXBvcG92ZXItaW9zOmFmdGVyLCAucG9wb3Zlci10cmFuc2x1Y2VudC5zYy1pb24tcG9wb3Zlci1pb3MtaCAucG9wb3Zlci1jb250ZW50LnNjLWlvbi1wb3BvdmVyLWlvc3tiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLDI1NSwyNTUsMjU1KSwuOCk7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtiYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KX19XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbnZhciBMSUZFQ1lDTEVfTUFQID0ge1xuICAgICdpb25Qb3BvdmVyRGlkUHJlc2VudCc6ICdpb25WaWV3RGlkRW50ZXInLFxuICAgICdpb25Qb3BvdmVyV2lsbFByZXNlbnQnOiAnaW9uVmlld1dpbGxFbnRlcicsXG4gICAgJ2lvblBvcG92ZXJXaWxsRGlzbWlzcyc6ICdpb25WaWV3V2lsbExlYXZlJyxcbiAgICAnaW9uUG9wb3ZlckRpZERpc21pc3MnOiAnaW9uVmlld0RpZExlYXZlJyxcbn07XG5leHBvcnQgeyBQb3BvdmVyIGFzIGlvbl9wb3BvdmVyIH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG52YXIgaG9zdENvbnRleHQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGVsKSB7XG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xufTtcbi8qKlxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxuICovXG52YXIgY3JlYXRlQ29sb3JDbGFzc2VzID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IChfYSA9IHtcbiAgICAgICAgICAgICdpb24tY29sb3InOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIF9hW1wiaW9uLWNvbG9yLVwiICsgY29sb3JdID0gdHJ1ZSxcbiAgICAgICAgX2EpIDogdW5kZWZpbmVkO1xufTtcbnZhciBnZXRDbGFzc0xpc3QgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgIHJldHVybiBhcnJheVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPSBudWxsOyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50cmltKCk7IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSAnJzsgfSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbn07XG52YXIgZ2V0Q2xhc3NNYXAgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gbWFwW2NdID0gdHJ1ZTsgfSk7XG4gICAgcmV0dXJuIG1hcDtcbn07XG52YXIgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XG52YXIgb3BlblVSTCA9IGZ1bmN0aW9uICh1cmwsIGV2LCBkaXJlY3Rpb24pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvdXRlcjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgICAgICAgaWYgKHJvdXRlcikge1xuICAgICAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbildO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=