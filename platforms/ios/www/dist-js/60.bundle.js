(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-modal-ios.entry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-modal-ios.entry.js ***!
  \**********************************************************************/
/*! exports provided: ion_modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_modal", function() { return Modal; });
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
 * iOS Modal Enter Animation
 */
var iosEnterAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.4);
    wrapperAnimation
        .addElement(baseEl.querySelector('.modal-wrapper'))
        .beforeStyles({ 'opacity': 1 })
        .fromTo('transform', 'translateY(100%)', 'translateY(0%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(400)
        .beforeAddClass('show-modal')
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Animations for modals
 */
// export function modalSlideIn(rootEl: HTMLElement) {
// }
// export class ModalSlideOut {
//   constructor(el: HTMLElement) {
//     let backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
//     let wrapperEle = <HTMLElement>el.querySelector('.modal-wrapper');
//     let wrapperEleRect = wrapperEle.getBoundingClientRect();
//     let wrapper = new Animation(this.plt, wrapperEle);
//     // height of the screen - top of the container tells us how much to scoot it down
//     // so it's off-screen
//     wrapper.fromTo('translateY', '0px', `${this.plt.height() - wrapperEleRect.top}px`);
//     backdrop.fromTo('opacity', 0.4, 0.0);
//     this
//       .element(this.leavingView.pageRef())
//       .easing('ease-out')
//       .duration(250)
//       .add(backdrop)
//       .add(wrapper);
//   }
// }
// export class ModalMDSlideIn {
//   constructor(el: HTMLElement) {
//     const backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
//     const wrapper = new Animation(this.plt, el.querySelector('.modal-wrapper'));
//     backdrop.fromTo('opacity', 0.01, 0.4);
//     wrapper.fromTo('translateY', '40px', '0px');
//     wrapper.fromTo('opacity', 0.01, 1);
//     const DURATION = 280;
//     const EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
//     this.element(this.enteringView.pageRef()).easing(EASING).duration(DURATION)
//       .add(backdrop)
//       .add(wrapper);
//   }
// }
// export class ModalMDSlideOut {
//   constructor(el: HTMLElement) {
//     const backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
//     const wrapper = new Animation(this.plt, el.querySelector('.modal-wrapper'));
//     backdrop.fromTo('opacity', 0.4, 0.0);
//     wrapper.fromTo('translateY', '0px', '40px');
//     wrapper.fromTo('opacity', 0.99, 0);
//     this
//       .element(this.leavingView.pageRef())
//       .duration(200)
//       .easing('cubic-bezier(0.47,0,0.745,0.715)')
//       .add(wrapper)
//       .add(backdrop);
//   }
// }
/**
 * iOS Modal Leave Animation
 */
var iosLeaveAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperEl = baseEl.querySelector('.modal-wrapper');
    var wrapperElRect = wrapperEl.getBoundingClientRect();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.4, 0.0);
    wrapperAnimation
        .addElement(wrapperEl)
        .beforeStyles({ 'opacity': 1 })
        .fromTo('transform', 'translateY(0%)', "translateY(" + (baseEl.ownerDocument.defaultView.innerHeight - wrapperElRect.top) + "px)");
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-out')
        .duration(250)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Modal Enter Animation
 */
var mdEnterAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.32);
    wrapperAnimation
        .addElement(baseEl.querySelector('.modal-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.01, transform: 'translateY(40px)' },
        { offset: 1, opacity: 1, transform: 'translateY(0px)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(280)
        .beforeAddClass('show-modal')
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Modal Leave Animation
 */
var mdLeaveAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperEl = baseEl.querySelector('.modal-wrapper');
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.32, 0.0);
    wrapperAnimation
        .addElement(wrapperEl)
        .keyframes([
        { offset: 0, opacity: 0.99, transform: 'translateY(0px)' },
        { offset: 1, opacity: 0, transform: 'translateY(40px)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.47,0,0.745,0.715)')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
var Modal = /** @class */ (function () {
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
         * If `true`, the modal will be dismissed when the backdrop is clicked.
         */
        this.backdropDismiss = true;
        /**
         * If `true`, a backdrop will be displayed behind the modal.
         */
        this.showBackdrop = true;
        /**
         * If `true`, the modal will animate.
         */
        this.animated = true;
        this.onBackdropTap = function () {
            _this.dismiss(undefined, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__["B"]);
        };
        this.onDismiss = function (ev) {
            ev.stopPropagation();
            ev.preventDefault();
            _this.dismiss();
        };
        this.onLifecycle = function (modalEvent) {
            var el = _this.usersElement;
            var name = LIFECYCLE_MAP[modalEvent.type];
            if (el && name) {
                var ev = new CustomEvent(name, {
                    bubbles: false,
                    cancelable: false,
                    detail: modalEvent.detail
                });
                el.dispatchEvent(ev);
            }
        };
        Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__["d"])(this.el);
        this.didPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionModalDidPresent", 7);
        this.willPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionModalWillPresent", 7);
        this.willDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionModalWillDismiss", 7);
        this.didDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionModalDidDismiss", 7);
    }
    /**
     * Present the modal overlay after it has been created.
     */
    class_1.prototype.present = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var container, componentProps, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.presented) {
                            return [2 /*return*/];
                        }
                        container = this.el.querySelector(".modal-wrapper");
                        if (!container) {
                            throw new Error('container is undefined');
                        }
                        componentProps = Object.assign(Object.assign({}, this.componentProps), { modal: this.el });
                        _a = this;
                        return [4 /*yield*/, Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_8__["a"])(this.delegate, container, this.component, ['ion-page'], componentProps)];
                    case 1:
                        _a.usersElement = _b.sent();
                        return [4 /*yield*/, Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_9__["d"])(this.usersElement)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__["e"])(this, 'modalEnter', iosEnterAnimation, mdEnterAnimation)];
                }
            });
        });
    };
    /**
     * Dismiss the modal overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the modal. For example, 'cancel' or 'backdrop'.
     */
    class_1.prototype.dismiss = function (data, role) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var dismissed;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__["f"])(this, data, role, 'modalLeave', iosLeaveAnimation, mdLeaveAnimation)];
                    case 1:
                        dismissed = _a.sent();
                        if (!dismissed) return [3 /*break*/, 3];
                        return [4 /*yield*/, Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_8__["d"])(this.delegate, this.usersElement)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, dismissed];
                }
            });
        });
    };
    /**
     * Returns a promise that resolves when the modal did dismiss.
     */
    class_1.prototype.onDidDismiss = function () {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__["g"])(this.el, 'ionModalDidDismiss');
    };
    /**
     * Returns a promise that resolves when the modal will dismiss.
     */
    class_1.prototype.onWillDismiss = function () {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__["g"])(this.el, 'ionModalWillDismiss');
    };
    class_1.prototype.render = function () {
        var _a, _b;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { "no-router": true, "aria-modal": "true", class: Object.assign((_a = {}, _a[mode] = true, _a), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_7__["g"])(this.cssClass)), style: {
                zIndex: "" + (20000 + this.overlayIndex),
            }, onIonBackdropTap: this.onBackdropTap, onIonDismiss: this.onDismiss, onIonModalDidPresent: this.onLifecycle, onIonModalWillPresent: this.onLifecycle, onIonModalWillDismiss: this.onLifecycle, onIonModalDidDismiss: this.onLifecycle }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { role: "dialog", class: (_b = {},
                _b["modal-wrapper"] = true,
                _b[mode] = true,
                _b) })));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}\@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var LIFECYCLE_MAP = {
    'ionModalDidPresent': 'ionViewDidEnter',
    'ionModalWillPresent': 'ionViewWillEnter',
    'ionModalWillDismiss': 'ionViewWillLeave',
    'ionModalDidDismiss': 'ionViewDidLeave',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1tb2RhbC1pb3MuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLWVzNS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQzhFO0FBQy9GO0FBQ0M7QUFDZ0M7QUFDOUI7QUFDeUY7QUFDbkU7QUFDdUM7QUFDekM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0VBQWU7QUFDdkMsNEJBQTRCLGdFQUFlO0FBQzNDLDJCQUEyQixnRUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHVDQUF1QztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0VBQWU7QUFDdkMsNEJBQTRCLGdFQUFlO0FBQzNDLDJCQUEyQixnRUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDO0FBQ0E7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QkFBb0IsY0FBYyxlQUFlLHdCQUF3QiwyQkFBMkIsMEJBQTBCLDBCQUEwQixpRUFBaUUsb0JBQW9CLGNBQWMsZ0JBQWdCLGlFQUFpRSxvQkFBb0Isc0JBQXNCLGdDQUFnQyx3Q0FBd0MsZ0NBQWdDLEVBQUUsRUFBRTtBQUNyZ0Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEI7Ozs7Ozs7Ozs7Ozs7QUNwUzlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxrQkFBa0IsRUFBRTtBQUN0RCwrQkFBK0IsaUJBQWlCLEVBQUU7QUFDbEQsa0NBQWtDLGlCQUFpQixFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Qsc0JBQXNCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFFBQVEsdURBQVM7QUFDOUQ7QUFDQSxXQUFXLHlEQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNrRiIsImZpbGUiOiI2MC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgZ2V0SW9uTW9kZSwgZCBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtZmVlZWZmMGQuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUFuaW1hdGlvbiB9IGZyb20gJy4vYW5pbWF0aW9uLWFmNDc4ZmU5LmpzJztcbmltcG9ydCAnLi9jb25zdGFudHMtM2MzZTEwOTkuanMnO1xuaW1wb3J0IHsgQiBhcyBCQUNLRFJPUCwgZCBhcyBwcmVwYXJlT3ZlcmxheSwgZSBhcyBwcmVzZW50LCBmIGFzIGRpc21pc3MsIGcgYXMgZXZlbnRNZXRob2QgfSBmcm9tICcuL292ZXJsYXlzLTEwNjQwZDg2LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0Q2xhc3NNYXAgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcbmltcG9ydCB7IGEgYXMgYXR0YWNoQ29tcG9uZW50LCBkIGFzIGRldGFjaENvbXBvbmVudCB9IGZyb20gJy4vZnJhbWV3b3JrLWRlbGVnYXRlLWMyZTJlMWY0LmpzJztcbmltcG9ydCB7IGQgYXMgZGVlcFJlYWR5IH0gZnJvbSAnLi9pbmRleC00ZDkxZjAzYS5qcyc7XG4vKipcbiAqIGlPUyBNb2RhbCBFbnRlciBBbmltYXRpb25cbiAqL1xudmFyIGlvc0VudGVyQW5pbWF0aW9uID0gZnVuY3Rpb24gKGJhc2VFbCkge1xuICAgIHZhciBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAwLjQpO1xuICAgIHdyYXBwZXJBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13cmFwcGVyJykpXG4gICAgICAgIC5iZWZvcmVTdHlsZXMoeyAnb3BhY2l0eSc6IDEgfSlcbiAgICAgICAgLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoMTAwJSknLCAndHJhbnNsYXRlWSgwJSknKTtcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXG4gICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllcigwLjM2LDAuNjYsMC4wNCwxKScpXG4gICAgICAgIC5kdXJhdGlvbig0MDApXG4gICAgICAgIC5iZWZvcmVBZGRDbGFzcygnc2hvdy1tb2RhbCcpXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xuLyoqXG4gKiBBbmltYXRpb25zIGZvciBtb2RhbHNcbiAqL1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG1vZGFsU2xpZGVJbihyb290RWw6IEhUTUxFbGVtZW50KSB7XG4vLyB9XG4vLyBleHBvcnQgY2xhc3MgTW9kYWxTbGlkZU91dCB7XG4vLyAgIGNvbnN0cnVjdG9yKGVsOiBIVE1MRWxlbWVudCkge1xuLy8gICAgIGxldCBiYWNrZHJvcCA9IG5ldyBBbmltYXRpb24odGhpcy5wbHQsIGVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKTtcbi8vICAgICBsZXQgd3JhcHBlckVsZSA9IDxIVE1MRWxlbWVudD5lbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpO1xuLy8gICAgIGxldCB3cmFwcGVyRWxlUmVjdCA9IHdyYXBwZXJFbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4vLyAgICAgbGV0IHdyYXBwZXIgPSBuZXcgQW5pbWF0aW9uKHRoaXMucGx0LCB3cmFwcGVyRWxlKTtcbi8vICAgICAvLyBoZWlnaHQgb2YgdGhlIHNjcmVlbiAtIHRvcCBvZiB0aGUgY29udGFpbmVyIHRlbGxzIHVzIGhvdyBtdWNoIHRvIHNjb290IGl0IGRvd25cbi8vICAgICAvLyBzbyBpdCdzIG9mZi1zY3JlZW5cbi8vICAgICB3cmFwcGVyLmZyb21UbygndHJhbnNsYXRlWScsICcwcHgnLCBgJHt0aGlzLnBsdC5oZWlnaHQoKSAtIHdyYXBwZXJFbGVSZWN0LnRvcH1weGApO1xuLy8gICAgIGJhY2tkcm9wLmZyb21Ubygnb3BhY2l0eScsIDAuNCwgMC4wKTtcbi8vICAgICB0aGlzXG4vLyAgICAgICAuZWxlbWVudCh0aGlzLmxlYXZpbmdWaWV3LnBhZ2VSZWYoKSlcbi8vICAgICAgIC5lYXNpbmcoJ2Vhc2Utb3V0Jylcbi8vICAgICAgIC5kdXJhdGlvbigyNTApXG4vLyAgICAgICAuYWRkKGJhY2tkcm9wKVxuLy8gICAgICAgLmFkZCh3cmFwcGVyKTtcbi8vICAgfVxuLy8gfVxuLy8gZXhwb3J0IGNsYXNzIE1vZGFsTURTbGlkZUluIHtcbi8vICAgY29uc3RydWN0b3IoZWw6IEhUTUxFbGVtZW50KSB7XG4vLyAgICAgY29uc3QgYmFja2Ryb3AgPSBuZXcgQW5pbWF0aW9uKHRoaXMucGx0LCBlbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSk7XG4vLyAgICAgY29uc3Qgd3JhcHBlciA9IG5ldyBBbmltYXRpb24odGhpcy5wbHQsIGVsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13cmFwcGVyJykpO1xuLy8gICAgIGJhY2tkcm9wLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDAuNCk7XG4vLyAgICAgd3JhcHBlci5mcm9tVG8oJ3RyYW5zbGF0ZVknLCAnNDBweCcsICcwcHgnKTtcbi8vICAgICB3cmFwcGVyLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDEpO1xuLy8gICAgIGNvbnN0IERVUkFUSU9OID0gMjgwO1xuLy8gICAgIGNvbnN0IEVBU0lORyA9ICdjdWJpYy1iZXppZXIoMC4zNiwwLjY2LDAuMDQsMSknO1xuLy8gICAgIHRoaXMuZWxlbWVudCh0aGlzLmVudGVyaW5nVmlldy5wYWdlUmVmKCkpLmVhc2luZyhFQVNJTkcpLmR1cmF0aW9uKERVUkFUSU9OKVxuLy8gICAgICAgLmFkZChiYWNrZHJvcClcbi8vICAgICAgIC5hZGQod3JhcHBlcik7XG4vLyAgIH1cbi8vIH1cbi8vIGV4cG9ydCBjbGFzcyBNb2RhbE1EU2xpZGVPdXQge1xuLy8gICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQpIHtcbi8vICAgICBjb25zdCBiYWNrZHJvcCA9IG5ldyBBbmltYXRpb24odGhpcy5wbHQsIGVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKTtcbi8vICAgICBjb25zdCB3cmFwcGVyID0gbmV3IEFuaW1hdGlvbih0aGlzLnBsdCwgZWwucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKSk7XG4vLyAgICAgYmFja2Ryb3AuZnJvbVRvKCdvcGFjaXR5JywgMC40LCAwLjApO1xuLy8gICAgIHdyYXBwZXIuZnJvbVRvKCd0cmFuc2xhdGVZJywgJzBweCcsICc0MHB4Jyk7XG4vLyAgICAgd3JhcHBlci5mcm9tVG8oJ29wYWNpdHknLCAwLjk5LCAwKTtcbi8vICAgICB0aGlzXG4vLyAgICAgICAuZWxlbWVudCh0aGlzLmxlYXZpbmdWaWV3LnBhZ2VSZWYoKSlcbi8vICAgICAgIC5kdXJhdGlvbigyMDApXG4vLyAgICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC40NywwLDAuNzQ1LDAuNzE1KScpXG4vLyAgICAgICAuYWRkKHdyYXBwZXIpXG4vLyAgICAgICAuYWRkKGJhY2tkcm9wKTtcbi8vICAgfVxuLy8gfVxuLyoqXG4gKiBpT1MgTW9kYWwgTGVhdmUgQW5pbWF0aW9uXG4gKi9cbnZhciBpb3NMZWF2ZUFuaW1hdGlvbiA9IGZ1bmN0aW9uIChiYXNlRWwpIHtcbiAgICB2YXIgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIHdyYXBwZXJFbCA9IGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpO1xuICAgIHZhciB3cmFwcGVyRWxSZWN0ID0gd3JhcHBlckVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGJhY2tkcm9wQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSlcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuNCwgMC4wKTtcbiAgICB3cmFwcGVyQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KHdyYXBwZXJFbClcbiAgICAgICAgLmJlZm9yZVN0eWxlcyh7ICdvcGFjaXR5JzogMSB9KVxuICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgwJSknLCBcInRyYW5zbGF0ZVkoXCIgKyAoYmFzZUVsLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuaW5uZXJIZWlnaHQgLSB3cmFwcGVyRWxSZWN0LnRvcCkgKyBcInB4KVwiKTtcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXG4gICAgICAgIC5lYXNpbmcoJ2Vhc2Utb3V0JylcbiAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcbn07XG4vKipcbiAqIE1kIE1vZGFsIEVudGVyIEFuaW1hdGlvblxuICovXG52YXIgbWRFbnRlckFuaW1hdGlvbiA9IGZ1bmN0aW9uIChiYXNlRWwpIHtcbiAgICB2YXIgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgYmFja2Ryb3BBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMC4zMik7XG4gICAgd3JhcHBlckFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKSlcbiAgICAgICAgLmtleWZyYW1lcyhbXG4gICAgICAgIHsgb2Zmc2V0OiAwLCBvcGFjaXR5OiAwLjAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDQwcHgpJyB9LFxuICAgICAgICB7IG9mZnNldDogMSwgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwcHgpJyB9XG4gICAgXSk7XG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxuICAgICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC4zNiwwLjY2LDAuMDQsMSknKVxuICAgICAgICAuZHVyYXRpb24oMjgwKVxuICAgICAgICAuYmVmb3JlQWRkQ2xhc3MoJ3Nob3ctbW9kYWwnKVxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xufTtcbi8qKlxuICogTWQgTW9kYWwgTGVhdmUgQW5pbWF0aW9uXG4gKi9cbnZhciBtZExlYXZlQW5pbWF0aW9uID0gZnVuY3Rpb24gKGJhc2VFbCkge1xuICAgIHZhciBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgd3JhcHBlckVsID0gYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13cmFwcGVyJyk7XG4gICAgYmFja2Ryb3BBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4zMiwgMC4wKTtcbiAgICB3cmFwcGVyQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KHdyYXBwZXJFbClcbiAgICAgICAgLmtleWZyYW1lcyhbXG4gICAgICAgIHsgb2Zmc2V0OiAwLCBvcGFjaXR5OiAwLjk5LCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDBweCknIH0sXG4gICAgICAgIHsgb2Zmc2V0OiAxLCBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDQwcHgpJyB9XG4gICAgXSk7XG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxuICAgICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC40NywwLDAuNzQ1LDAuNzE1KScpXG4gICAgICAgIC5kdXJhdGlvbigyMDApXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xudmFyIE1vZGFsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzEoaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLnByZXNlbnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUga2V5Ym9hcmQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGRpc21pc3NlZCB3aGVuIHRoZSBvdmVybGF5IGlzIHByZXNlbnRlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMua2V5Ym9hcmRDbG9zZSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBtb2RhbCB3aWxsIGJlIGRpc21pc3NlZCB3aGVuIHRoZSBiYWNrZHJvcCBpcyBjbGlja2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5iYWNrZHJvcERpc21pc3MgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBhIGJhY2tkcm9wIHdpbGwgYmUgZGlzcGxheWVkIGJlaGluZCB0aGUgbW9kYWwuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNob3dCYWNrZHJvcCA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBtb2RhbCB3aWxsIGFuaW1hdGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFuaW1hdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkJhY2tkcm9wVGFwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuZGlzbWlzcyh1bmRlZmluZWQsIEJBQ0tEUk9QKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkRpc21pc3MgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIF90aGlzLmRpc21pc3MoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkxpZmVjeWNsZSA9IGZ1bmN0aW9uIChtb2RhbEV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZWwgPSBfdGhpcy51c2Vyc0VsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IExJRkVDWUNMRV9NQVBbbW9kYWxFdmVudC50eXBlXTtcbiAgICAgICAgICAgIGlmIChlbCAmJiBuYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IG1vZGFsRXZlbnQuZGV0YWlsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChldik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHByZXBhcmVPdmVybGF5KHRoaXMuZWwpO1xuICAgICAgICB0aGlzLmRpZFByZXNlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk1vZGFsRGlkUHJlc2VudFwiLCA3KTtcbiAgICAgICAgdGhpcy53aWxsUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTW9kYWxXaWxsUHJlc2VudFwiLCA3KTtcbiAgICAgICAgdGhpcy53aWxsRGlzbWlzcyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTW9kYWxXaWxsRGlzbWlzc1wiLCA3KTtcbiAgICAgICAgdGhpcy5kaWREaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Nb2RhbERpZERpc21pc3NcIiwgNyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZXNlbnQgdGhlIG1vZGFsIG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gY3JlYXRlZC5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5wcmVzZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyLCBjb21wb25lbnRQcm9wcywgX2E7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmVzZW50ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtd3JhcHBlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb250YWluZXIgaXMgdW5kZWZpbmVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRQcm9wcyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb21wb25lbnRQcm9wcyksIHsgbW9kYWw6IHRoaXMuZWwgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBhdHRhY2hDb21wb25lbnQodGhpcy5kZWxlZ2F0ZSwgY29udGFpbmVyLCB0aGlzLmNvbXBvbmVudCwgWydpb24tcGFnZSddLCBjb21wb25lbnRQcm9wcyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS51c2Vyc0VsZW1lbnQgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBkZWVwUmVhZHkodGhpcy51c2Vyc0VsZW1lbnQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHByZXNlbnQodGhpcywgJ21vZGFsRW50ZXInLCBpb3NFbnRlckFuaW1hdGlvbiwgbWRFbnRlckFuaW1hdGlvbildO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpc21pc3MgdGhlIG1vZGFsIG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gcHJlc2VudGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgQW55IGRhdGEgdG8gZW1pdCBpbiB0aGUgZGlzbWlzcyBldmVudHMuXG4gICAgICogQHBhcmFtIHJvbGUgVGhlIHJvbGUgb2YgdGhlIGVsZW1lbnQgdGhhdCBpcyBkaXNtaXNzaW5nIHRoZSBtb2RhbC4gRm9yIGV4YW1wbGUsICdjYW5jZWwnIG9yICdiYWNrZHJvcCcuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZGlzbWlzcyA9IGZ1bmN0aW9uIChkYXRhLCByb2xlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkaXNtaXNzZWQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGRpc21pc3ModGhpcywgZGF0YSwgcm9sZSwgJ21vZGFsTGVhdmUnLCBpb3NMZWF2ZUFuaW1hdGlvbiwgbWRMZWF2ZUFuaW1hdGlvbildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNtaXNzZWQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRpc21pc3NlZCkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBkZXRhY2hDb21wb25lbnQodGhpcy5kZWxlZ2F0ZSwgdGhpcy51c2Vyc0VsZW1lbnQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovLCBkaXNtaXNzZWRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgbW9kYWwgZGlkIGRpc21pc3MuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25EaWREaXNtaXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvbk1vZGFsRGlkRGlzbWlzcycpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBtb2RhbCB3aWxsIGRpc21pc3MuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25XaWxsRGlzbWlzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25Nb2RhbFdpbGxEaXNtaXNzJyk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgXCJuby1yb3V0ZXJcIjogdHJ1ZSwgXCJhcmlhLW1vZGFsXCI6IFwidHJ1ZVwiLCBjbGFzczogT2JqZWN0LmFzc2lnbigoX2EgPSB7fSwgX2FbbW9kZV0gPSB0cnVlLCBfYSksIGdldENsYXNzTWFwKHRoaXMuY3NzQ2xhc3MpKSwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IFwiXCIgKyAoMjAwMDAgKyB0aGlzLm92ZXJsYXlJbmRleCksXG4gICAgICAgICAgICB9LCBvbklvbkJhY2tkcm9wVGFwOiB0aGlzLm9uQmFja2Ryb3BUYXAsIG9uSW9uRGlzbWlzczogdGhpcy5vbkRpc21pc3MsIG9uSW9uTW9kYWxEaWRQcmVzZW50OiB0aGlzLm9uTGlmZWN5Y2xlLCBvbklvbk1vZGFsV2lsbFByZXNlbnQ6IHRoaXMub25MaWZlY3ljbGUsIG9uSW9uTW9kYWxXaWxsRGlzbWlzczogdGhpcy5vbkxpZmVjeWNsZSwgb25Jb25Nb2RhbERpZERpc21pc3M6IHRoaXMub25MaWZlY3ljbGUgfSwgaChcImlvbi1iYWNrZHJvcFwiLCB7IHZpc2libGU6IHRoaXMuc2hvd0JhY2tkcm9wLCB0YXBwYWJsZTogdGhpcy5iYWNrZHJvcERpc21pc3MgfSksIGgoXCJkaXZcIiwgeyByb2xlOiBcImRpYWxvZ1wiLCBjbGFzczogKF9iID0ge30sXG4gICAgICAgICAgICAgICAgX2JbXCJtb2RhbC13cmFwcGVyXCJdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYlttb2RlXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2IpIH0pKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMS5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIi5zYy1pb24tbW9kYWwtaW9zLWh7LS13aWR0aDoxMDAlOy0tbWluLXdpZHRoOmF1dG87LS1tYXgtd2lkdGg6YXV0bzstLWhlaWdodDoxMDAlOy0tbWluLWhlaWdodDphdXRvOy0tbWF4LWhlaWdodDphdXRvOy0tb3ZlcmZsb3c6aGlkZGVuOy0tYm9yZGVyLXJhZGl1czowOy0tYm9yZGVyLXdpZHRoOjA7LS1ib3JkZXItc3R5bGU6bm9uZTstLWJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstLWJhY2tncm91bmQ6dmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2ZmZik7LS1ib3gtc2hhZG93Om5vbmU7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2NvbnRhaW46c3RyaWN0fS5vdmVybGF5LWhpZGRlbi5zYy1pb24tbW9kYWwtaW9zLWh7ZGlzcGxheTpub25lfS5tb2RhbC13cmFwcGVyLnNjLWlvbi1tb2RhbC1pb3N7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTt3aWR0aDp2YXIoLS13aWR0aCk7bWluLXdpZHRoOnZhcigtLW1pbi13aWR0aCk7bWF4LXdpZHRoOnZhcigtLW1heC13aWR0aCk7aGVpZ2h0OnZhcigtLWhlaWdodCk7bWluLWhlaWdodDp2YXIoLS1taW4taGVpZ2h0KTttYXgtaGVpZ2h0OnZhcigtLW1heC1oZWlnaHQpO2JvcmRlci13aWR0aDp2YXIoLS1ib3JkZXItd2lkdGgpO2JvcmRlci1zdHlsZTp2YXIoLS1ib3JkZXItc3R5bGUpO2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7LXdlYmtpdC1ib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpO2JveC1zaGFkb3c6dmFyKC0tYm94LXNoYWRvdyk7b3ZlcmZsb3c6dmFyKC0tb3ZlcmZsb3cpO3otaW5kZXg6MTB9XFxAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpIGFuZCAobWluLWhlaWdodDo2MDBweCl7LnNjLWlvbi1tb2RhbC1pb3MtaHstLXdpZHRoOjYwMHB4Oy0taGVpZ2h0OjUwMHB4Oy0taW9uLXNhZmUtYXJlYS10b3A6MHB4Oy0taW9uLXNhZmUtYXJlYS1ib3R0b206MHB4Oy0taW9uLXNhZmUtYXJlYS1yaWdodDowcHg7LS1pb24tc2FmZS1hcmVhLWxlZnQ6MHB4fX1cXEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCkgYW5kIChtaW4taGVpZ2h0Ojc2OHB4KXsuc2MtaW9uLW1vZGFsLWlvcy1oey0td2lkdGg6NjAwcHg7LS1oZWlnaHQ6NjAwcHh9fVxcQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1pbi1oZWlnaHQ6NjAwcHgpey5zYy1pb24tbW9kYWwtaW9zLWh7LS1ib3JkZXItcmFkaXVzOjEwcHh9fS5tb2RhbC13cmFwcGVyLnNjLWlvbi1tb2RhbC1pb3N7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCl9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbnZhciBMSUZFQ1lDTEVfTUFQID0ge1xuICAgICdpb25Nb2RhbERpZFByZXNlbnQnOiAnaW9uVmlld0RpZEVudGVyJyxcbiAgICAnaW9uTW9kYWxXaWxsUHJlc2VudCc6ICdpb25WaWV3V2lsbEVudGVyJyxcbiAgICAnaW9uTW9kYWxXaWxsRGlzbWlzcyc6ICdpb25WaWV3V2lsbExlYXZlJyxcbiAgICAnaW9uTW9kYWxEaWREaXNtaXNzJzogJ2lvblZpZXdEaWRMZWF2ZScsXG59O1xuZXhwb3J0IHsgTW9kYWwgYXMgaW9uX21vZGFsIH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG52YXIgaG9zdENvbnRleHQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGVsKSB7XG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xufTtcbi8qKlxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxuICovXG52YXIgY3JlYXRlQ29sb3JDbGFzc2VzID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IChfYSA9IHtcbiAgICAgICAgICAgICdpb24tY29sb3InOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIF9hW1wiaW9uLWNvbG9yLVwiICsgY29sb3JdID0gdHJ1ZSxcbiAgICAgICAgX2EpIDogdW5kZWZpbmVkO1xufTtcbnZhciBnZXRDbGFzc0xpc3QgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgIHJldHVybiBhcnJheVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPSBudWxsOyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50cmltKCk7IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSAnJzsgfSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbn07XG52YXIgZ2V0Q2xhc3NNYXAgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gbWFwW2NdID0gdHJ1ZTsgfSk7XG4gICAgcmV0dXJuIG1hcDtcbn07XG52YXIgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XG52YXIgb3BlblVSTCA9IGZ1bmN0aW9uICh1cmwsIGV2LCBkaXJlY3Rpb24pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvdXRlcjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgICAgICAgaWYgKHJvdXRlcikge1xuICAgICAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbildO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=