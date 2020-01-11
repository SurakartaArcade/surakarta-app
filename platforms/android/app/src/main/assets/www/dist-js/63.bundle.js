(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-popover-md.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-popover-md.entry.js ***!
  \***********************************************************************/
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
        get: function () { return ".sc-ion-popover-md-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}"; },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1wb3BvdmVyLW1kLmVudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUM4RTtBQUMvRjtBQUNDO0FBQ2dDO0FBQzlCO0FBQ3lGO0FBQ25FO0FBQ3VDO0FBQ3pDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnRUFBZTtBQUN2Qyw0QkFBNEIsZ0VBQWU7QUFDM0MsMkJBQTJCLGdFQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0VBQWU7QUFDdkMsNEJBQTRCLGdFQUFlO0FBQzND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QUNBLFdBQVcseURBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFO0FBQ2tGIiwiZmlsZSI6IjYzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBnZXRJb25Nb2RlLCBkIGFzIGNyZWF0ZUV2ZW50LCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tYWY0NzhmZTkuanMnO1xuaW1wb3J0ICcuL2NvbnN0YW50cy0zYzNlMTA5OS5qcyc7XG5pbXBvcnQgeyBCIGFzIEJBQ0tEUk9QLCBkIGFzIHByZXBhcmVPdmVybGF5LCBlIGFzIHByZXNlbnQsIGYgYXMgZGlzbWlzcywgZyBhcyBldmVudE1ldGhvZCB9IGZyb20gJy4vb3ZlcmxheXMtMTA2NDBkODYuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRDbGFzc01hcCB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuaW1wb3J0IHsgYSBhcyBhdHRhY2hDb21wb25lbnQsIGQgYXMgZGV0YWNoQ29tcG9uZW50IH0gZnJvbSAnLi9mcmFtZXdvcmstZGVsZWdhdGUtYzJlMmUxZjQuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWVwUmVhZHkgfSBmcm9tICcuL2luZGV4LTRkOTFmMDNhLmpzJztcbi8qKlxuICogaU9TIFBvcG92ZXIgRW50ZXIgQW5pbWF0aW9uXG4gKi9cbnZhciBpb3NFbnRlckFuaW1hdGlvbiA9IGZ1bmN0aW9uIChiYXNlRWwsIGV2KSB7XG4gICAgdmFyIG9yaWdpblkgPSAndG9wJztcbiAgICB2YXIgb3JpZ2luWCA9ICdsZWZ0JztcbiAgICB2YXIgY29udGVudEVsID0gYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5wb3BvdmVyLWNvbnRlbnQnKTtcbiAgICB2YXIgY29udGVudERpbWVudGlvbnMgPSBjb250ZW50RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGNvbnRlbnRXaWR0aCA9IGNvbnRlbnREaW1lbnRpb25zLndpZHRoO1xuICAgIHZhciBjb250ZW50SGVpZ2h0ID0gY29udGVudERpbWVudGlvbnMuaGVpZ2h0O1xuICAgIHZhciBib2R5V2lkdGggPSBiYXNlRWwub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5pbm5lcldpZHRoO1xuICAgIHZhciBib2R5SGVpZ2h0ID0gYmFzZUVsLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuaW5uZXJIZWlnaHQ7XG4gICAgLy8gSWYgZXYgd2FzIHBhc3NlZCwgdXNlIHRoYXQgZm9yIHRhcmdldCBlbGVtZW50XG4gICAgdmFyIHRhcmdldERpbSA9IGV2ICYmIGV2LnRhcmdldCAmJiBldi50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIHRhcmdldFRvcCA9IHRhcmdldERpbSAhPSBudWxsICYmICd0b3AnIGluIHRhcmdldERpbSA/IHRhcmdldERpbS50b3AgOiBib2R5SGVpZ2h0IC8gMiAtIGNvbnRlbnRIZWlnaHQgLyAyO1xuICAgIHZhciB0YXJnZXRMZWZ0ID0gdGFyZ2V0RGltICE9IG51bGwgJiYgJ2xlZnQnIGluIHRhcmdldERpbSA/IHRhcmdldERpbS5sZWZ0IDogYm9keVdpZHRoIC8gMjtcbiAgICB2YXIgdGFyZ2V0V2lkdGggPSAodGFyZ2V0RGltICYmIHRhcmdldERpbS53aWR0aCkgfHwgMDtcbiAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gKHRhcmdldERpbSAmJiB0YXJnZXREaW0uaGVpZ2h0KSB8fCAwO1xuICAgIHZhciBhcnJvd0VsID0gYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5wb3BvdmVyLWFycm93Jyk7XG4gICAgdmFyIGFycm93RGltID0gYXJyb3dFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgYXJyb3dXaWR0aCA9IGFycm93RGltLndpZHRoO1xuICAgIHZhciBhcnJvd0hlaWdodCA9IGFycm93RGltLmhlaWdodDtcbiAgICBpZiAodGFyZ2V0RGltID09IG51bGwpIHtcbiAgICAgICAgYXJyb3dFbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICB2YXIgYXJyb3dDU1MgPSB7XG4gICAgICAgIHRvcDogdGFyZ2V0VG9wICsgdGFyZ2V0SGVpZ2h0LFxuICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0ICsgdGFyZ2V0V2lkdGggLyAyIC0gYXJyb3dXaWR0aCAvIDJcbiAgICB9O1xuICAgIHZhciBwb3BvdmVyQ1NTID0ge1xuICAgICAgICB0b3A6IHRhcmdldFRvcCArIHRhcmdldEhlaWdodCArIChhcnJvd0hlaWdodCAtIDEpLFxuICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0ICsgdGFyZ2V0V2lkdGggLyAyIC0gY29udGVudFdpZHRoIC8gMlxuICAgIH07XG4gICAgLy8gSWYgdGhlIHBvcG92ZXIgbGVmdCBpcyBsZXNzIHRoYW4gdGhlIHBhZGRpbmcgaXQgaXMgb2ZmIHNjcmVlblxuICAgIC8vIHRvIHRoZSBsZWZ0IHNvIGFkanVzdCBpdCwgZWxzZSBpZiB0aGUgd2lkdGggb2YgdGhlIHBvcG92ZXJcbiAgICAvLyBleGNlZWRzIHRoZSBib2R5IHdpZHRoIGl0IGlzIG9mZiBzY3JlZW4gdG8gdGhlIHJpZ2h0IHNvIGFkanVzdFxuICAgIC8vXG4gICAgdmFyIGNoZWNrU2FmZUFyZWFMZWZ0ID0gZmFsc2U7XG4gICAgdmFyIGNoZWNrU2FmZUFyZWFSaWdodCA9IGZhbHNlO1xuICAgIC8vIElmIHRoZSBwb3BvdmVyIGxlZnQgaXMgbGVzcyB0aGFuIHRoZSBwYWRkaW5nIGl0IGlzIG9mZiBzY3JlZW5cbiAgICAvLyB0byB0aGUgbGVmdCBzbyBhZGp1c3QgaXQsIGVsc2UgaWYgdGhlIHdpZHRoIG9mIHRoZSBwb3BvdmVyXG4gICAgLy8gZXhjZWVkcyB0aGUgYm9keSB3aWR0aCBpdCBpcyBvZmYgc2NyZWVuIHRvIHRoZSByaWdodCBzbyBhZGp1c3RcbiAgICAvLyAyNSBpcyBhIHJhbmRvbS9hcmJpdHJhcnkgbnVtYmVyLiBJdCBzZWVtcyB0byB3b3JrIGZpbmUgZm9yIGlvczExXG4gICAgLy8gYW5kIGlQaG9uZVguIElzIGl0IHBlcmZlY3Q/IE5vLiBEb2VzIGl0IHdvcms/IFllcy5cbiAgICBpZiAocG9wb3ZlckNTUy5sZWZ0IDwgUE9QT1ZFUl9JT1NfQk9EWV9QQURESU5HICsgMjUpIHtcbiAgICAgICAgY2hlY2tTYWZlQXJlYUxlZnQgPSB0cnVlO1xuICAgICAgICBwb3BvdmVyQ1NTLmxlZnQgPSBQT1BPVkVSX0lPU19CT0RZX1BBRERJTkc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbnRlbnRXaWR0aCArIFBPUE9WRVJfSU9TX0JPRFlfUEFERElORyArIHBvcG92ZXJDU1MubGVmdCArIDI1ID4gYm9keVdpZHRoKSB7XG4gICAgICAgIC8vIE9rLCBzbyB3ZSdyZSBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgc2NyZWVuLFxuICAgICAgICAvLyBidXQgbm93IHdlIG5lZWQgdG8gbWFrZSBzdXJlIHdlJ3JlIHN0aWxsIGEgYml0IGZ1cnRoZXIgcmlnaHRcbiAgICAgICAgLy8gY3VzLi4uLm5vdGNodXJhbGx5Li4uIEFnYWluLCAyNSBpcyByYW5kb20uIEl0IHdvcmtzIHRob1xuICAgICAgICBjaGVja1NhZmVBcmVhUmlnaHQgPSB0cnVlO1xuICAgICAgICBwb3BvdmVyQ1NTLmxlZnQgPSBib2R5V2lkdGggLSBjb250ZW50V2lkdGggLSBQT1BPVkVSX0lPU19CT0RZX1BBRERJTkc7XG4gICAgICAgIG9yaWdpblggPSAncmlnaHQnO1xuICAgIH1cbiAgICAvLyBtYWtlIGl0IHBvcCB1cCBpZiB0aGVyZSdzIHJvb20gYWJvdmVcbiAgICBpZiAodGFyZ2V0VG9wICsgdGFyZ2V0SGVpZ2h0ICsgY29udGVudEhlaWdodCA+IGJvZHlIZWlnaHQgJiYgdGFyZ2V0VG9wIC0gY29udGVudEhlaWdodCA+IDApIHtcbiAgICAgICAgYXJyb3dDU1MudG9wID0gdGFyZ2V0VG9wIC0gKGFycm93SGVpZ2h0ICsgMSk7XG4gICAgICAgIHBvcG92ZXJDU1MudG9wID0gdGFyZ2V0VG9wIC0gY29udGVudEhlaWdodCAtIChhcnJvd0hlaWdodCAtIDEpO1xuICAgICAgICBiYXNlRWwuY2xhc3NOYW1lID0gYmFzZUVsLmNsYXNzTmFtZSArICcgcG9wb3Zlci1ib3R0b20nO1xuICAgICAgICBvcmlnaW5ZID0gJ2JvdHRvbSc7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzbid0IHJvb20gZm9yIGl0IHRvIHBvcCB1cCBhYm92ZSB0aGUgdGFyZ2V0IGN1dCBpdCBvZmZcbiAgICB9XG4gICAgZWxzZSBpZiAodGFyZ2V0VG9wICsgdGFyZ2V0SGVpZ2h0ICsgY29udGVudEhlaWdodCA+IGJvZHlIZWlnaHQpIHtcbiAgICAgICAgY29udGVudEVsLnN0eWxlLmJvdHRvbSA9IFBPUE9WRVJfSU9TX0JPRFlfUEFERElORyArICclJztcbiAgICB9XG4gICAgYXJyb3dFbC5zdHlsZS50b3AgPSBhcnJvd0NTUy50b3AgKyAncHgnO1xuICAgIGFycm93RWwuc3R5bGUubGVmdCA9IGFycm93Q1NTLmxlZnQgKyAncHgnO1xuICAgIGNvbnRlbnRFbC5zdHlsZS50b3AgPSBwb3BvdmVyQ1NTLnRvcCArICdweCc7XG4gICAgY29udGVudEVsLnN0eWxlLmxlZnQgPSBwb3BvdmVyQ1NTLmxlZnQgKyAncHgnO1xuICAgIGlmIChjaGVja1NhZmVBcmVhTGVmdCkge1xuICAgICAgICBjb250ZW50RWwuc3R5bGUubGVmdCA9IFwiY2FsYyhcIiArIHBvcG92ZXJDU1MubGVmdCArIFwicHggKyB2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQsIDBweCkpXCI7XG4gICAgfVxuICAgIGlmIChjaGVja1NhZmVBcmVhUmlnaHQpIHtcbiAgICAgICAgY29udGVudEVsLnN0eWxlLmxlZnQgPSBcImNhbGMoXCIgKyBwb3BvdmVyQ1NTLmxlZnQgKyBcInB4IC0gdmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCwgMHB4KSlcIjtcbiAgICB9XG4gICAgY29udGVudEVsLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IG9yaWdpblkgKyAnICcgKyBvcmlnaW5YO1xuICAgIHZhciBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAwLjA4KTtcbiAgICB3cmFwcGVyQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcucG9wb3Zlci13cmFwcGVyJykpXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAxKTtcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXG4gICAgICAgIC5lYXNpbmcoJ2Vhc2UnKVxuICAgICAgICAuZHVyYXRpb24oMTAwKVxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xufTtcbnZhciBQT1BPVkVSX0lPU19CT0RZX1BBRERJTkcgPSA1O1xuLyoqXG4gKiBpT1MgUG9wb3ZlciBMZWF2ZSBBbmltYXRpb25cbiAqL1xudmFyIGlvc0xlYXZlQW5pbWF0aW9uID0gZnVuY3Rpb24gKGJhc2VFbCkge1xuICAgIHZhciBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjA4LCAwKTtcbiAgICB3cmFwcGVyQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcucG9wb3Zlci13cmFwcGVyJykpXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjk5LCAwKTtcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXG4gICAgICAgIC5lYXNpbmcoJ2Vhc2UnKVxuICAgICAgICAuZHVyYXRpb24oNTAwKVxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xufTtcbi8qKlxuICogTWQgUG9wb3ZlciBFbnRlciBBbmltYXRpb25cbiAqL1xudmFyIG1kRW50ZXJBbmltYXRpb24gPSBmdW5jdGlvbiAoYmFzZUVsLCBldikge1xuICAgIHZhciBQT1BPVkVSX01EX0JPRFlfUEFERElORyA9IDEyO1xuICAgIHZhciBkb2MgPSBiYXNlRWwub3duZXJEb2N1bWVudDtcbiAgICB2YXIgaXNSVEwgPSBkb2MuZGlyID09PSAncnRsJztcbiAgICB2YXIgb3JpZ2luWSA9ICd0b3AnO1xuICAgIHZhciBvcmlnaW5YID0gaXNSVEwgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIHZhciBjb250ZW50RWwgPSBiYXNlRWwucXVlcnlTZWxlY3RvcignLnBvcG92ZXItY29udGVudCcpO1xuICAgIHZhciBjb250ZW50RGltZW50aW9ucyA9IGNvbnRlbnRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgY29udGVudFdpZHRoID0gY29udGVudERpbWVudGlvbnMud2lkdGg7XG4gICAgdmFyIGNvbnRlbnRIZWlnaHQgPSBjb250ZW50RGltZW50aW9ucy5oZWlnaHQ7XG4gICAgdmFyIGJvZHlXaWR0aCA9IGRvYy5kZWZhdWx0Vmlldy5pbm5lcldpZHRoO1xuICAgIHZhciBib2R5SGVpZ2h0ID0gZG9jLmRlZmF1bHRWaWV3LmlubmVySGVpZ2h0O1xuICAgIC8vIElmIGV2IHdhcyBwYXNzZWQsIHVzZSB0aGF0IGZvciB0YXJnZXQgZWxlbWVudFxuICAgIHZhciB0YXJnZXREaW0gPSBldiAmJiBldi50YXJnZXQgJiYgZXYudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIC8vIEFzIHBlciBNRCBzcGVjLCBieSBkZWZhdWx0IHBvc2l0aW9uIHRoZSBwb3BvdmVyIGJlbG93IHRoZSB0YXJnZXQgKHRyaWdnZXIpIGVsZW1lbnRcbiAgICB2YXIgdGFyZ2V0VG9wID0gdGFyZ2V0RGltICE9IG51bGwgJiYgJ2JvdHRvbScgaW4gdGFyZ2V0RGltXG4gICAgICAgID8gdGFyZ2V0RGltLmJvdHRvbVxuICAgICAgICA6IGJvZHlIZWlnaHQgLyAyIC0gY29udGVudEhlaWdodCAvIDI7XG4gICAgdmFyIHRhcmdldExlZnQgPSB0YXJnZXREaW0gIT0gbnVsbCAmJiAnbGVmdCcgaW4gdGFyZ2V0RGltXG4gICAgICAgID8gaXNSVExcbiAgICAgICAgICAgID8gdGFyZ2V0RGltLmxlZnQgLSBjb250ZW50V2lkdGggKyB0YXJnZXREaW0ud2lkdGhcbiAgICAgICAgICAgIDogdGFyZ2V0RGltLmxlZnRcbiAgICAgICAgOiBib2R5V2lkdGggLyAyIC0gY29udGVudFdpZHRoIC8gMjtcbiAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gKHRhcmdldERpbSAmJiB0YXJnZXREaW0uaGVpZ2h0KSB8fCAwO1xuICAgIHZhciBwb3BvdmVyQ1NTID0ge1xuICAgICAgICB0b3A6IHRhcmdldFRvcCxcbiAgICAgICAgbGVmdDogdGFyZ2V0TGVmdFxuICAgIH07XG4gICAgLy8gSWYgdGhlIHBvcG92ZXIgbGVmdCBpcyBsZXNzIHRoYW4gdGhlIHBhZGRpbmcgaXQgaXMgb2ZmIHNjcmVlblxuICAgIC8vIHRvIHRoZSBsZWZ0IHNvIGFkanVzdCBpdCwgZWxzZSBpZiB0aGUgd2lkdGggb2YgdGhlIHBvcG92ZXJcbiAgICAvLyBleGNlZWRzIHRoZSBib2R5IHdpZHRoIGl0IGlzIG9mZiBzY3JlZW4gdG8gdGhlIHJpZ2h0IHNvIGFkanVzdFxuICAgIGlmIChwb3BvdmVyQ1NTLmxlZnQgPCBQT1BPVkVSX01EX0JPRFlfUEFERElORykge1xuICAgICAgICBwb3BvdmVyQ1NTLmxlZnQgPSBQT1BPVkVSX01EX0JPRFlfUEFERElORztcbiAgICAgICAgLy8gU2FtZSBvcmlnaW4gaW4gdGhpcyBjYXNlIGZvciBib3RoIExUUiAmIFJUTFxuICAgICAgICAvLyBOb3RlOiBpbiBMVFIsIG9yaWdpblggaXMgYWxyZWFkeSAnbGVmdCdcbiAgICAgICAgb3JpZ2luWCA9ICdsZWZ0JztcbiAgICB9XG4gICAgZWxzZSBpZiAoY29udGVudFdpZHRoICsgUE9QT1ZFUl9NRF9CT0RZX1BBRERJTkcgKyBwb3BvdmVyQ1NTLmxlZnQgPlxuICAgICAgICBib2R5V2lkdGgpIHtcbiAgICAgICAgcG9wb3ZlckNTUy5sZWZ0ID0gYm9keVdpZHRoIC0gY29udGVudFdpZHRoIC0gUE9QT1ZFUl9NRF9CT0RZX1BBRERJTkc7XG4gICAgICAgIC8vIFNhbWUgb3JpZ2luIGluIHRoaXMgY2FzZSBmb3IgYm90aCBMVFIgJiBSVExcbiAgICAgICAgLy8gTm90ZTogaW4gUlRMLCBvcmlnaW5YIGlzIGFscmVhZHkgJ3JpZ2h0J1xuICAgICAgICBvcmlnaW5YID0gJ3JpZ2h0JztcbiAgICB9XG4gICAgLy8gSWYgdGhlIHBvcG92ZXIgd2hlbiBwb3BwZWQgZG93biBzdHJldGNoZXMgcGFzdCBib3R0b20gb2Ygc2NyZWVuLFxuICAgIC8vIG1ha2UgaXQgcG9wIHVwIGlmIHRoZXJlJ3Mgcm9vbSBhYm92ZVxuICAgIGlmICh0YXJnZXRUb3AgKyB0YXJnZXRIZWlnaHQgKyBjb250ZW50SGVpZ2h0ID4gYm9keUhlaWdodCAmJlxuICAgICAgICB0YXJnZXRUb3AgLSBjb250ZW50SGVpZ2h0ID4gMCkge1xuICAgICAgICBwb3BvdmVyQ1NTLnRvcCA9IHRhcmdldFRvcCAtIGNvbnRlbnRIZWlnaHQgLSB0YXJnZXRIZWlnaHQ7XG4gICAgICAgIGJhc2VFbC5jbGFzc05hbWUgPSBiYXNlRWwuY2xhc3NOYW1lICsgJyBwb3BvdmVyLWJvdHRvbSc7XG4gICAgICAgIG9yaWdpblkgPSAnYm90dG9tJztcbiAgICAgICAgLy8gSWYgdGhlcmUgaXNuJ3Qgcm9vbSBmb3IgaXQgdG8gcG9wIHVwIGFib3ZlIHRoZSB0YXJnZXQgY3V0IGl0IG9mZlxuICAgIH1cbiAgICBlbHNlIGlmICh0YXJnZXRUb3AgKyB0YXJnZXRIZWlnaHQgKyBjb250ZW50SGVpZ2h0ID4gYm9keUhlaWdodCkge1xuICAgICAgICBjb250ZW50RWwuc3R5bGUuYm90dG9tID0gUE9QT1ZFUl9NRF9CT0RZX1BBRERJTkcgKyAncHgnO1xuICAgIH1cbiAgICB2YXIgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIGNvbnRlbnRBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgdmlld3BvcnRBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAwLjMyKTtcbiAgICB3cmFwcGVyQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcucG9wb3Zlci13cmFwcGVyJykpXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAxKTtcbiAgICBjb250ZW50QW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGNvbnRlbnRFbClcbiAgICAgICAgLmJlZm9yZVN0eWxlcyh7XG4gICAgICAgICd0b3AnOiBwb3BvdmVyQ1NTLnRvcCArIFwicHhcIixcbiAgICAgICAgJ2xlZnQnOiBwb3BvdmVyQ1NTLmxlZnQgKyBcInB4XCIsXG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogb3JpZ2luWSArIFwiIFwiICsgb3JpZ2luWFxuICAgIH0pXG4gICAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsICdzY2FsZSgwLjAwMSknLCAnc2NhbGUoMSknKTtcbiAgICB2aWV3cG9ydEFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLnBvcG92ZXItdmlld3BvcnQnKSlcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDEpO1xuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbClcbiAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuMzYsMC42NiwwLjA0LDEpJylcbiAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb24sIGNvbnRlbnRBbmltYXRpb24sIHZpZXdwb3J0QW5pbWF0aW9uXSk7XG59O1xuLyoqXG4gKiBNZCBQb3BvdmVyIExlYXZlIEFuaW1hdGlvblxuICovXG52YXIgbWRMZWF2ZUFuaW1hdGlvbiA9IGZ1bmN0aW9uIChiYXNlRWwpIHtcbiAgICB2YXIgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgYmFja2Ryb3BBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4zMiwgMCk7XG4gICAgd3JhcHBlckFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLnBvcG92ZXItd3JhcHBlcicpKVxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC45OSwgMCk7XG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxuICAgICAgICAuZWFzaW5nKCdlYXNlJylcbiAgICAgICAgLmR1cmF0aW9uKDUwMClcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcbn07XG52YXIgUG9wb3ZlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18xKGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5wcmVzZW50ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGtleWJvYXJkIHdpbGwgYmUgYXV0b21hdGljYWxseSBkaXNtaXNzZWQgd2hlbiB0aGUgb3ZlcmxheSBpcyBwcmVzZW50ZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmtleWJvYXJkQ2xvc2UgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgcG9wb3ZlciB3aWxsIGJlIGRpc21pc3NlZCB3aGVuIHRoZSBiYWNrZHJvcCBpcyBjbGlja2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5iYWNrZHJvcERpc21pc3MgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBhIGJhY2tkcm9wIHdpbGwgYmUgZGlzcGxheWVkIGJlaGluZCB0aGUgcG9wb3Zlci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvd0JhY2tkcm9wID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHBvcG92ZXIgd2lsbCBiZSB0cmFuc2x1Y2VudC5cbiAgICAgICAgICogT25seSBhcHBsaWVzIHdoZW4gdGhlIG1vZGUgaXMgYFwiaW9zXCJgIGFuZCB0aGUgZGV2aWNlIHN1cHBvcnRzXG4gICAgICAgICAqIFtgYmFja2Ryb3AtZmlsdGVyYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tkcm9wLWZpbHRlciNCcm93c2VyX2NvbXBhdGliaWxpdHkpLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmFuc2x1Y2VudCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgcG9wb3ZlciB3aWxsIGFuaW1hdGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFuaW1hdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkRpc21pc3MgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIF90aGlzLmRpc21pc3MoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkJhY2tkcm9wVGFwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuZGlzbWlzcyh1bmRlZmluZWQsIEJBQ0tEUk9QKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkxpZmVjeWNsZSA9IGZ1bmN0aW9uIChtb2RhbEV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZWwgPSBfdGhpcy51c2Vyc0VsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IExJRkVDWUNMRV9NQVBbbW9kYWxFdmVudC50eXBlXTtcbiAgICAgICAgICAgIGlmIChlbCAmJiBuYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IG1vZGFsRXZlbnQuZGV0YWlsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHByZXBhcmVPdmVybGF5KHRoaXMuZWwpO1xuICAgICAgICB0aGlzLmRpZFByZXNlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblBvcG92ZXJEaWRQcmVzZW50XCIsIDcpO1xuICAgICAgICB0aGlzLndpbGxQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Qb3BvdmVyV2lsbFByZXNlbnRcIiwgNyk7XG4gICAgICAgIHRoaXMud2lsbERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblBvcG92ZXJXaWxsRGlzbWlzc1wiLCA3KTtcbiAgICAgICAgdGhpcy5kaWREaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Qb3BvdmVyRGlkRGlzbWlzc1wiLCA3KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlc2VudCB0aGUgcG9wb3ZlciBvdmVybGF5IGFmdGVyIGl0IGhhcyBiZWVuIGNyZWF0ZWQuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUucHJlc2VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciwgZGF0YSwgX2E7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmVzZW50ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5wb3BvdmVyLWNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb250YWluZXIgaXMgdW5kZWZpbmVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbXBvbmVudFByb3BzKSwgeyBwb3BvdmVyOiB0aGlzLmVsIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXR0YWNoQ29tcG9uZW50KHRoaXMuZGVsZWdhdGUsIGNvbnRhaW5lciwgdGhpcy5jb21wb25lbnQsIFsncG9wb3Zlci12aWV3cG9ydCcsIHRoaXMuZWxbJ3Mtc2MnXV0sIGRhdGEpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudXNlcnNFbGVtZW50ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZGVlcFJlYWR5KHRoaXMudXNlcnNFbGVtZW50KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBwcmVzZW50KHRoaXMsICdwb3BvdmVyRW50ZXInLCBpb3NFbnRlckFuaW1hdGlvbiwgbWRFbnRlckFuaW1hdGlvbiwgdGhpcy5ldmVudCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpc21pc3MgdGhlIHBvcG92ZXIgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBwcmVzZW50ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBBbnkgZGF0YSB0byBlbWl0IGluIHRoZSBkaXNtaXNzIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0gcm9sZSBUaGUgcm9sZSBvZiB0aGUgZWxlbWVudCB0aGF0IGlzIGRpc21pc3NpbmcgdGhlIHBvcG92ZXIuIEZvciBleGFtcGxlLCAnY2FuY2VsJyBvciAnYmFja2Ryb3AnLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmRpc21pc3MgPSBmdW5jdGlvbiAoZGF0YSwgcm9sZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2hvdWxkRGlzbWlzcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZGlzbWlzcyh0aGlzLCBkYXRhLCByb2xlLCAncG9wb3ZlckxlYXZlJywgaW9zTGVhdmVBbmltYXRpb24sIG1kTGVhdmVBbmltYXRpb24sIHRoaXMuZXZlbnQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkRGlzbWlzcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2hvdWxkRGlzbWlzcykgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBkZXRhY2hDb21wb25lbnQodGhpcy5kZWxlZ2F0ZSwgdGhpcy51c2Vyc0VsZW1lbnQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovLCBzaG91bGREaXNtaXNzXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHBvcG92ZXIgZGlkIGRpc21pc3MuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25EaWREaXNtaXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvblBvcG92ZXJEaWREaXNtaXNzJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHBvcG92ZXIgd2lsbCBkaXNtaXNzLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9uV2lsbERpc21pc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBldmVudE1ldGhvZCh0aGlzLmVsLCAnaW9uUG9wb3ZlcldpbGxEaXNtaXNzJyk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICB2YXIgb25MaWZlY3ljbGUgPSB0aGlzLm9uTGlmZWN5Y2xlO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtbW9kYWxcIjogXCJ0cnVlXCIsIFwibm8tcm91dGVyXCI6IHRydWUsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgekluZGV4OiBcIlwiICsgKDIwMDAwICsgdGhpcy5vdmVybGF5SW5kZXgpLFxuICAgICAgICAgICAgfSwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZ2V0Q2xhc3NNYXAodGhpcy5jc3NDbGFzcykpLCAoX2EgPSB7fSwgX2FbbW9kZV0gPSB0cnVlLCBfYVsncG9wb3Zlci10cmFuc2x1Y2VudCddID0gdGhpcy50cmFuc2x1Y2VudCwgX2EpKSwgb25Jb25Qb3BvdmVyRGlkUHJlc2VudDogb25MaWZlY3ljbGUsIG9uSW9uUG9wb3ZlcldpbGxQcmVzZW50OiBvbkxpZmVjeWNsZSwgb25Jb25Qb3BvdmVyV2lsbERpc21pc3M6IG9uTGlmZWN5Y2xlLCBvbklvblBvcG92ZXJEaWREaXNtaXNzOiBvbkxpZmVjeWNsZSwgb25Jb25EaXNtaXNzOiB0aGlzLm9uRGlzbWlzcywgb25Jb25CYWNrZHJvcFRhcDogdGhpcy5vbkJhY2tkcm9wVGFwIH0sIGgoXCJpb24tYmFja2Ryb3BcIiwgeyB0YXBwYWJsZTogdGhpcy5iYWNrZHJvcERpc21pc3MsIHZpc2libGU6IHRoaXMuc2hvd0JhY2tkcm9wIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicG9wb3Zlci13cmFwcGVyXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInBvcG92ZXItYXJyb3dcIiB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInBvcG92ZXItY29udGVudFwiIH0pKSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCIuc2MtaW9uLXBvcG92ZXItbWQtaHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2ZmZik7LS1taW4td2lkdGg6MDstLW1pbi1oZWlnaHQ6MDstLW1heC13aWR0aDphdXRvOy0taGVpZ2h0OmF1dG87bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246Zml4ZWQ7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApO3otaW5kZXg6MTAwMX0ub3ZlcmxheS1oaWRkZW4uc2MtaW9uLXBvcG92ZXItbWQtaHtkaXNwbGF5Om5vbmV9LnBvcG92ZXItd3JhcHBlci5zYy1pb24tcG9wb3Zlci1tZHtvcGFjaXR5OjA7ei1pbmRleDoxMH0ucG9wb3Zlci1jb250ZW50LnNjLWlvbi1wb3BvdmVyLW1ke2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOnZhcigtLXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTtoZWlnaHQ6dmFyKC0taGVpZ2h0KTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO21heC1oZWlnaHQ6dmFyKC0tbWF4LWhlaWdodCk7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTstd2Via2l0LWJveC1zaGFkb3c6dmFyKC0tYm94LXNoYWRvdyk7Ym94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtvdmVyZmxvdzphdXRvO3otaW5kZXg6MTB9LnBvcG92ZXItdmlld3BvcnQuc2MtaW9uLXBvcG92ZXItbWR7LS1pb24tc2FmZS1hcmVhLXRvcDowcHg7LS1pb24tc2FmZS1hcmVhLXJpZ2h0OjBweDstLWlvbi1zYWZlLWFyZWEtYm90dG9tOjBweDstLWlvbi1zYWZlLWFyZWEtbGVmdDowcHh9LnNjLWlvbi1wb3BvdmVyLW1kLWh7LS13aWR0aDoyNTBweDstLW1heC1oZWlnaHQ6OTAlOy0tYm94LXNoYWRvdzowIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMiksMCA4cHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjE0KSwwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLDAuMTIpfS5wb3BvdmVyLWNvbnRlbnQuc2MtaW9uLXBvcG92ZXItbWR7Ym9yZGVyLXJhZGl1czo0cHg7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3B9W2Rpcj1ydGxdLnNjLWlvbi1wb3BvdmVyLW1kLWggLnBvcG92ZXItY29udGVudC5zYy1pb24tcG9wb3Zlci1tZCwgW2Rpcj1ydGxdIC5zYy1pb24tcG9wb3Zlci1tZC1oIC5wb3BvdmVyLWNvbnRlbnQuc2MtaW9uLXBvcG92ZXItbWQsIFtkaXI9cnRsXS5zYy1pb24tcG9wb3Zlci1tZCAucG9wb3Zlci1jb250ZW50LnNjLWlvbi1wb3BvdmVyLW1key13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3A7dHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3B9LnBvcG92ZXItdmlld3BvcnQuc2MtaW9uLXBvcG92ZXItbWR7LXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5Oi4xczt0cmFuc2l0aW9uLWRlbGF5Oi4xc31cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzE7XG59KCkpO1xudmFyIExJRkVDWUNMRV9NQVAgPSB7XG4gICAgJ2lvblBvcG92ZXJEaWRQcmVzZW50JzogJ2lvblZpZXdEaWRFbnRlcicsXG4gICAgJ2lvblBvcG92ZXJXaWxsUHJlc2VudCc6ICdpb25WaWV3V2lsbEVudGVyJyxcbiAgICAnaW9uUG9wb3ZlcldpbGxEaXNtaXNzJzogJ2lvblZpZXdXaWxsTGVhdmUnLFxuICAgICdpb25Qb3BvdmVyRGlkRGlzbWlzcyc6ICdpb25WaWV3RGlkTGVhdmUnLFxufTtcbmV4cG9ydCB7IFBvcG92ZXIgYXMgaW9uX3BvcG92ZXIgfTtcbiIsImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbnZhciBob3N0Q29udGV4dCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZWwpIHtcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XG59O1xuLyoqXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXG4gKi9cbnZhciBjcmVhdGVDb2xvckNsYXNzZXMgPSBmdW5jdGlvbiAoY29sb3IpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8gKF9hID0ge1xuICAgICAgICAgICAgJ2lvbi1jb2xvcic6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgX2FbXCJpb24tY29sb3ItXCIgKyBjb2xvcl0gPSB0cnVlLFxuICAgICAgICBfYSkgOiB1bmRlZmluZWQ7XG59O1xudmFyIGdldENsYXNzTGlzdCA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgcmV0dXJuIGFycmF5XG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9IG51bGw7IH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRyaW0oKTsgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT09ICcnOyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xufTtcbnZhciBnZXRDbGFzc01hcCA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XG4gICAgdmFyIG1hcCA9IHt9O1xuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7IHJldHVybiBtYXBbY10gPSB0cnVlOyB9KTtcbiAgICByZXR1cm4gbWFwO1xufTtcbnZhciBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcbnZhciBvcGVuVVJMID0gZnVuY3Rpb24gKHVybCwgZXYsIGRpcmVjdGlvbikgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcm91dGVyO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XG4gICAgICAgICAgICByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XG4gICAgICAgICAgICBpZiAocm91dGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICB9KTtcbn0pOyB9O1xuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==