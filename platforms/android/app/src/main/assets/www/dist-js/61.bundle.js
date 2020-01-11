(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-modal-md.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-modal-md.entry.js ***!
  \*********************************************************************/
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
        get: function () { return ".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}\@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--border-radius:2px;--box-shadow:0 28px 48px rgba(0,0,0,0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,40px,0);transform:translate3d(0,40px,0);opacity:.01}"; },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1tb2RhbC1tZC5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDOEU7QUFDL0Y7QUFDQztBQUNnQztBQUM5QjtBQUN5RjtBQUNuRTtBQUN1QztBQUN6QztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnRUFBZTtBQUN2Qyw0QkFBNEIsZ0VBQWU7QUFDM0MsMkJBQTJCLGdFQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZUFBZTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsdUNBQXVDO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnRUFBZTtBQUN2Qyw0QkFBNEIsZ0VBQWU7QUFDM0MsMkJBQTJCLGdFQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnRUFBZTtBQUN2Qyw0QkFBNEIsZ0VBQWU7QUFDM0MsMkJBQTJCLGdFQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMERBQTBEO0FBQ25FLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0VBQWU7QUFDdkMsNEJBQTRCLGdFQUFlO0FBQzNDLDJCQUEyQixnRUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMseURBQXlEO0FBQ2xFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0Esb0JBQW9CLDJEQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsdURBQVE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtEQUFjO0FBQ3RCLDBCQUEwQiwyREFBVztBQUNyQywyQkFBMkIsMkRBQVc7QUFDdEMsMkJBQTJCLDJEQUFXO0FBQ3RDLDBCQUEwQiwyREFBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1REFBUztBQUN4QjtBQUNBLG1CQUFtQix5REFBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUseUJBQXlCLGlCQUFpQjtBQUNqSDtBQUNBLDZDQUE2Qyx5RUFBZTtBQUM1RDtBQUNBO0FBQ0EsNkNBQTZDLDREQUFTO0FBQ3REO0FBQ0E7QUFDQSw4Q0FBOEMsK0RBQU87QUFDckQ7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVEQUFTO0FBQ3hCO0FBQ0EsbUJBQW1CLHlEQUFXO0FBQzlCO0FBQ0EsaURBQWlELCtEQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyx5RUFBZTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrREFBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrREFBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQVU7QUFDN0IsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyx1RUFBdUUsd0JBQXdCLDREQUFXO0FBQ25JO0FBQ0EsYUFBYSx3T0FBd08sRUFBRSwyREFBQyxrQkFBa0IsNkRBQTZELEdBQUcsMkRBQUMsU0FBUyxnQ0FBZ0M7QUFDcFg7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsMEJBQTBCLFFBQVEsMkRBQVUsT0FBTyxFQUFFO0FBQ3JEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsNEJBQTRCLGFBQWEsaUJBQWlCLGlCQUFpQixjQUFjLGtCQUFrQixrQkFBa0Isa0JBQWtCLGtCQUFrQixpQkFBaUIsb0JBQW9CLDJCQUEyQiw4Q0FBOEMsa0JBQWtCLE9BQU8sUUFBUSxNQUFNLFNBQVMsb0JBQW9CLGFBQWEsa0JBQWtCLHNCQUFzQixtQkFBbUIscUJBQXFCLHVCQUF1QixlQUFlLGtDQUFrQyxhQUFhLCtCQUErQixtQ0FBbUMsbUJBQW1CLDJCQUEyQiwyQkFBMkIscUJBQXFCLDZCQUE2Qiw2QkFBNkIsaUNBQWlDLGlDQUFpQyxpQ0FBaUMsNkJBQTZCLHFDQUFxQyw2QkFBNkIseUJBQXlCLFdBQVcsaUVBQWlFLG1CQUFtQixjQUFjLGVBQWUsd0JBQXdCLDJCQUEyQiwwQkFBMEIsMEJBQTBCLGlFQUFpRSxtQkFBbUIsY0FBYyxnQkFBZ0IsaUVBQWlFLG1CQUFtQixvQkFBb0IsMENBQTBDLCtCQUErQix3Q0FBd0MsZ0NBQWdDLFlBQVksRUFBRSxFQUFFO0FBQ2xqRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM4Qjs7Ozs7Ozs7Ozs7OztBQ3BTOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQixFQUFFO0FBQ3RELCtCQUErQixpQkFBaUIsRUFBRTtBQUNsRCxrQ0FBa0MsaUJBQWlCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxzQkFBc0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUSx1REFBUztBQUM5RDtBQUNBLFdBQVcseURBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFO0FBQ2tGIiwiZmlsZSI6IjYxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBnZXRJb25Nb2RlLCBkIGFzIGNyZWF0ZUV2ZW50LCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tYWY0NzhmZTkuanMnO1xuaW1wb3J0ICcuL2NvbnN0YW50cy0zYzNlMTA5OS5qcyc7XG5pbXBvcnQgeyBCIGFzIEJBQ0tEUk9QLCBkIGFzIHByZXBhcmVPdmVybGF5LCBlIGFzIHByZXNlbnQsIGYgYXMgZGlzbWlzcywgZyBhcyBldmVudE1ldGhvZCB9IGZyb20gJy4vb3ZlcmxheXMtMTA2NDBkODYuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRDbGFzc01hcCB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuaW1wb3J0IHsgYSBhcyBhdHRhY2hDb21wb25lbnQsIGQgYXMgZGV0YWNoQ29tcG9uZW50IH0gZnJvbSAnLi9mcmFtZXdvcmstZGVsZWdhdGUtYzJlMmUxZjQuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWVwUmVhZHkgfSBmcm9tICcuL2luZGV4LTRkOTFmMDNhLmpzJztcbi8qKlxuICogaU9TIE1vZGFsIEVudGVyIEFuaW1hdGlvblxuICovXG52YXIgaW9zRW50ZXJBbmltYXRpb24gPSBmdW5jdGlvbiAoYmFzZUVsKSB7XG4gICAgdmFyIGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIGJhY2tkcm9wQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSlcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDAuNCk7XG4gICAgd3JhcHBlckFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKSlcbiAgICAgICAgLmJlZm9yZVN0eWxlcyh7ICdvcGFjaXR5JzogMSB9KVxuICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgxMDAlKScsICd0cmFuc2xhdGVZKDAlKScpO1xuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbClcbiAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuMzYsMC42NiwwLjA0LDEpJylcbiAgICAgICAgLmR1cmF0aW9uKDQwMClcbiAgICAgICAgLmJlZm9yZUFkZENsYXNzKCdzaG93LW1vZGFsJylcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcbn07XG4vKipcbiAqIEFuaW1hdGlvbnMgZm9yIG1vZGFsc1xuICovXG4vLyBleHBvcnQgZnVuY3Rpb24gbW9kYWxTbGlkZUluKHJvb3RFbDogSFRNTEVsZW1lbnQpIHtcbi8vIH1cbi8vIGV4cG9ydCBjbGFzcyBNb2RhbFNsaWRlT3V0IHtcbi8vICAgY29uc3RydWN0b3IoZWw6IEhUTUxFbGVtZW50KSB7XG4vLyAgICAgbGV0IGJhY2tkcm9wID0gbmV3IEFuaW1hdGlvbih0aGlzLnBsdCwgZWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpO1xuLy8gICAgIGxldCB3cmFwcGVyRWxlID0gPEhUTUxFbGVtZW50PmVsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13cmFwcGVyJyk7XG4vLyAgICAgbGV0IHdyYXBwZXJFbGVSZWN0ID0gd3JhcHBlckVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbi8vICAgICBsZXQgd3JhcHBlciA9IG5ldyBBbmltYXRpb24odGhpcy5wbHQsIHdyYXBwZXJFbGUpO1xuLy8gICAgIC8vIGhlaWdodCBvZiB0aGUgc2NyZWVuIC0gdG9wIG9mIHRoZSBjb250YWluZXIgdGVsbHMgdXMgaG93IG11Y2ggdG8gc2Nvb3QgaXQgZG93blxuLy8gICAgIC8vIHNvIGl0J3Mgb2ZmLXNjcmVlblxuLy8gICAgIHdyYXBwZXIuZnJvbVRvKCd0cmFuc2xhdGVZJywgJzBweCcsIGAke3RoaXMucGx0LmhlaWdodCgpIC0gd3JhcHBlckVsZVJlY3QudG9wfXB4YCk7XG4vLyAgICAgYmFja2Ryb3AuZnJvbVRvKCdvcGFjaXR5JywgMC40LCAwLjApO1xuLy8gICAgIHRoaXNcbi8vICAgICAgIC5lbGVtZW50KHRoaXMubGVhdmluZ1ZpZXcucGFnZVJlZigpKVxuLy8gICAgICAgLmVhc2luZygnZWFzZS1vdXQnKVxuLy8gICAgICAgLmR1cmF0aW9uKDI1MClcbi8vICAgICAgIC5hZGQoYmFja2Ryb3ApXG4vLyAgICAgICAuYWRkKHdyYXBwZXIpO1xuLy8gICB9XG4vLyB9XG4vLyBleHBvcnQgY2xhc3MgTW9kYWxNRFNsaWRlSW4ge1xuLy8gICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQpIHtcbi8vICAgICBjb25zdCBiYWNrZHJvcCA9IG5ldyBBbmltYXRpb24odGhpcy5wbHQsIGVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKTtcbi8vICAgICBjb25zdCB3cmFwcGVyID0gbmV3IEFuaW1hdGlvbih0aGlzLnBsdCwgZWwucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKSk7XG4vLyAgICAgYmFja2Ryb3AuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMC40KTtcbi8vICAgICB3cmFwcGVyLmZyb21UbygndHJhbnNsYXRlWScsICc0MHB4JywgJzBweCcpO1xuLy8gICAgIHdyYXBwZXIuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMSk7XG4vLyAgICAgY29uc3QgRFVSQVRJT04gPSAyODA7XG4vLyAgICAgY29uc3QgRUFTSU5HID0gJ2N1YmljLWJlemllcigwLjM2LDAuNjYsMC4wNCwxKSc7XG4vLyAgICAgdGhpcy5lbGVtZW50KHRoaXMuZW50ZXJpbmdWaWV3LnBhZ2VSZWYoKSkuZWFzaW5nKEVBU0lORykuZHVyYXRpb24oRFVSQVRJT04pXG4vLyAgICAgICAuYWRkKGJhY2tkcm9wKVxuLy8gICAgICAgLmFkZCh3cmFwcGVyKTtcbi8vICAgfVxuLy8gfVxuLy8gZXhwb3J0IGNsYXNzIE1vZGFsTURTbGlkZU91dCB7XG4vLyAgIGNvbnN0cnVjdG9yKGVsOiBIVE1MRWxlbWVudCkge1xuLy8gICAgIGNvbnN0IGJhY2tkcm9wID0gbmV3IEFuaW1hdGlvbih0aGlzLnBsdCwgZWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpO1xuLy8gICAgIGNvbnN0IHdyYXBwZXIgPSBuZXcgQW5pbWF0aW9uKHRoaXMucGx0LCBlbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpKTtcbi8vICAgICBiYWNrZHJvcC5mcm9tVG8oJ29wYWNpdHknLCAwLjQsIDAuMCk7XG4vLyAgICAgd3JhcHBlci5mcm9tVG8oJ3RyYW5zbGF0ZVknLCAnMHB4JywgJzQwcHgnKTtcbi8vICAgICB3cmFwcGVyLmZyb21Ubygnb3BhY2l0eScsIDAuOTksIDApO1xuLy8gICAgIHRoaXNcbi8vICAgICAgIC5lbGVtZW50KHRoaXMubGVhdmluZ1ZpZXcucGFnZVJlZigpKVxuLy8gICAgICAgLmR1cmF0aW9uKDIwMClcbi8vICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllcigwLjQ3LDAsMC43NDUsMC43MTUpJylcbi8vICAgICAgIC5hZGQod3JhcHBlcilcbi8vICAgICAgIC5hZGQoYmFja2Ryb3ApO1xuLy8gICB9XG4vLyB9XG4vKipcbiAqIGlPUyBNb2RhbCBMZWF2ZSBBbmltYXRpb25cbiAqL1xudmFyIGlvc0xlYXZlQW5pbWF0aW9uID0gZnVuY3Rpb24gKGJhc2VFbCkge1xuICAgIHZhciBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgd3JhcHBlckVsID0gYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13cmFwcGVyJyk7XG4gICAgdmFyIHdyYXBwZXJFbFJlY3QgPSB3cmFwcGVyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgYmFja2Ryb3BBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC40LCAwLjApO1xuICAgIHdyYXBwZXJBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQod3JhcHBlckVsKVxuICAgICAgICAuYmVmb3JlU3R5bGVzKHsgJ29wYWNpdHknOiAxIH0pXG4gICAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVZKDAlKScsIFwidHJhbnNsYXRlWShcIiArIChiYXNlRWwub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5pbm5lckhlaWdodCAtIHdyYXBwZXJFbFJlY3QudG9wKSArIFwicHgpXCIpO1xuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbClcbiAgICAgICAgLmVhc2luZygnZWFzZS1vdXQnKVxuICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xufTtcbi8qKlxuICogTWQgTW9kYWwgRW50ZXIgQW5pbWF0aW9uXG4gKi9cbnZhciBtZEVudGVyQW5pbWF0aW9uID0gZnVuY3Rpb24gKGJhc2VFbCkge1xuICAgIHZhciBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAwLjMyKTtcbiAgICB3cmFwcGVyQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpKVxuICAgICAgICAua2V5ZnJhbWVzKFtcbiAgICAgICAgeyBvZmZzZXQ6IDAsIG9wYWNpdHk6IDAuMDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoNDBweCknIH0sXG4gICAgICAgIHsgb2Zmc2V0OiAxLCBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDBweCknIH1cbiAgICBdKTtcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXG4gICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllcigwLjM2LDAuNjYsMC4wNCwxKScpXG4gICAgICAgIC5kdXJhdGlvbigyODApXG4gICAgICAgIC5iZWZvcmVBZGRDbGFzcygnc2hvdy1tb2RhbCcpXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xuLyoqXG4gKiBNZCBNb2RhbCBMZWF2ZSBBbmltYXRpb25cbiAqL1xudmFyIG1kTGVhdmVBbmltYXRpb24gPSBmdW5jdGlvbiAoYmFzZUVsKSB7XG4gICAgdmFyIGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciB3cmFwcGVyRWwgPSBiYXNlRWwucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKTtcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjMyLCAwLjApO1xuICAgIHdyYXBwZXJBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQod3JhcHBlckVsKVxuICAgICAgICAua2V5ZnJhbWVzKFtcbiAgICAgICAgeyBvZmZzZXQ6IDAsIG9wYWNpdHk6IDAuOTksIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMHB4KScgfSxcbiAgICAgICAgeyBvZmZzZXQ6IDEsIG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoNDBweCknIH1cbiAgICBdKTtcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXG4gICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllcigwLjQ3LDAsMC43NDUsMC43MTUpJylcbiAgICAgICAgLmR1cmF0aW9uKDIwMClcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcbn07XG52YXIgTW9kYWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMShob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMucHJlc2VudGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBrZXlib2FyZCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZGlzbWlzc2VkIHdoZW4gdGhlIG92ZXJsYXkgaXMgcHJlc2VudGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5rZXlib2FyZENsb3NlID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIG1vZGFsIHdpbGwgYmUgZGlzbWlzc2VkIHdoZW4gdGhlIGJhY2tkcm9wIGlzIGNsaWNrZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJhY2tkcm9wRGlzbWlzcyA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIGEgYmFja2Ryb3Agd2lsbCBiZSBkaXNwbGF5ZWQgYmVoaW5kIHRoZSBtb2RhbC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvd0JhY2tkcm9wID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIG1vZGFsIHdpbGwgYW5pbWF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uQmFja2Ryb3BUYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5kaXNtaXNzKHVuZGVmaW5lZCwgQkFDS0RST1ApO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uRGlzbWlzcyA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgX3RoaXMuZGlzbWlzcygpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uTGlmZWN5Y2xlID0gZnVuY3Rpb24gKG1vZGFsRXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBlbCA9IF90aGlzLnVzZXJzRWxlbWVudDtcbiAgICAgICAgICAgIHZhciBuYW1lID0gTElGRUNZQ0xFX01BUFttb2RhbEV2ZW50LnR5cGVdO1xuICAgICAgICAgICAgaWYgKGVsICYmIG5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXYgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuICAgICAgICAgICAgICAgICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbDogbW9kYWxFdmVudC5kZXRhaWxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcHJlcGFyZU92ZXJsYXkodGhpcy5lbCk7XG4gICAgICAgIHRoaXMuZGlkUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTW9kYWxEaWRQcmVzZW50XCIsIDcpO1xuICAgICAgICB0aGlzLndpbGxQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Nb2RhbFdpbGxQcmVzZW50XCIsIDcpO1xuICAgICAgICB0aGlzLndpbGxEaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Nb2RhbFdpbGxEaXNtaXNzXCIsIDcpO1xuICAgICAgICB0aGlzLmRpZERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk1vZGFsRGlkRGlzbWlzc1wiLCA3KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlc2VudCB0aGUgbW9kYWwgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBjcmVhdGVkLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnByZXNlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIsIGNvbXBvbmVudFByb3BzLCBfYTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByZXNlbnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbC13cmFwcGVyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbnRhaW5lciBpcyB1bmRlZmluZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFByb3BzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbXBvbmVudFByb3BzKSwgeyBtb2RhbDogdGhpcy5lbCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGF0dGFjaENvbXBvbmVudCh0aGlzLmRlbGVnYXRlLCBjb250YWluZXIsIHRoaXMuY29tcG9uZW50LCBbJ2lvbi1wYWdlJ10sIGNvbXBvbmVudFByb3BzKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnVzZXJzRWxlbWVudCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGRlZXBSZWFkeSh0aGlzLnVzZXJzRWxlbWVudCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcHJlc2VudCh0aGlzLCAnbW9kYWxFbnRlcicsIGlvc0VudGVyQW5pbWF0aW9uLCBtZEVudGVyQW5pbWF0aW9uKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGlzbWlzcyB0aGUgbW9kYWwgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBwcmVzZW50ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBBbnkgZGF0YSB0byBlbWl0IGluIHRoZSBkaXNtaXNzIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0gcm9sZSBUaGUgcm9sZSBvZiB0aGUgZWxlbWVudCB0aGF0IGlzIGRpc21pc3NpbmcgdGhlIG1vZGFsLiBGb3IgZXhhbXBsZSwgJ2NhbmNlbCcgb3IgJ2JhY2tkcm9wJy5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5kaXNtaXNzID0gZnVuY3Rpb24gKGRhdGEsIHJvbGUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRpc21pc3NlZDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZGlzbWlzcyh0aGlzLCBkYXRhLCByb2xlLCAnbW9kYWxMZWF2ZScsIGlvc0xlYXZlQW5pbWF0aW9uLCBtZExlYXZlQW5pbWF0aW9uKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc21pc3NlZCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGlzbWlzc2VkKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGRldGFjaENvbXBvbmVudCh0aGlzLmRlbGVnYXRlLCB0aGlzLnVzZXJzRWxlbWVudCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGRpc21pc3NlZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBtb2RhbCBkaWQgZGlzbWlzcy5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5vbkRpZERpc21pc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBldmVudE1ldGhvZCh0aGlzLmVsLCAnaW9uTW9kYWxEaWREaXNtaXNzJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIG1vZGFsIHdpbGwgZGlzbWlzcy5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5vbldpbGxEaXNtaXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvbk1vZGFsV2lsbERpc21pc3MnKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBcIm5vLXJvdXRlclwiOiB0cnVlLCBcImFyaWEtbW9kYWxcIjogXCJ0cnVlXCIsIGNsYXNzOiBPYmplY3QuYXNzaWduKChfYSA9IHt9LCBfYVttb2RlXSA9IHRydWUsIF9hKSwgZ2V0Q2xhc3NNYXAodGhpcy5jc3NDbGFzcykpLCBzdHlsZToge1xuICAgICAgICAgICAgICAgIHpJbmRleDogXCJcIiArICgyMDAwMCArIHRoaXMub3ZlcmxheUluZGV4KSxcbiAgICAgICAgICAgIH0sIG9uSW9uQmFja2Ryb3BUYXA6IHRoaXMub25CYWNrZHJvcFRhcCwgb25Jb25EaXNtaXNzOiB0aGlzLm9uRGlzbWlzcywgb25Jb25Nb2RhbERpZFByZXNlbnQ6IHRoaXMub25MaWZlY3ljbGUsIG9uSW9uTW9kYWxXaWxsUHJlc2VudDogdGhpcy5vbkxpZmVjeWNsZSwgb25Jb25Nb2RhbFdpbGxEaXNtaXNzOiB0aGlzLm9uTGlmZWN5Y2xlLCBvbklvbk1vZGFsRGlkRGlzbWlzczogdGhpcy5vbkxpZmVjeWNsZSB9LCBoKFwiaW9uLWJhY2tkcm9wXCIsIHsgdmlzaWJsZTogdGhpcy5zaG93QmFja2Ryb3AsIHRhcHBhYmxlOiB0aGlzLmJhY2tkcm9wRGlzbWlzcyB9KSwgaChcImRpdlwiLCB7IHJvbGU6IFwiZGlhbG9nXCIsIGNsYXNzOiAoX2IgPSB7fSxcbiAgICAgICAgICAgICAgICBfYltcIm1vZGFsLXdyYXBwZXJcIl0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9iW21vZGVdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYikgfSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEsIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiLnNjLWlvbi1tb2RhbC1tZC1oey0td2lkdGg6MTAwJTstLW1pbi13aWR0aDphdXRvOy0tbWF4LXdpZHRoOmF1dG87LS1oZWlnaHQ6MTAwJTstLW1pbi1oZWlnaHQ6YXV0bzstLW1heC1oZWlnaHQ6YXV0bzstLW92ZXJmbG93OmhpZGRlbjstLWJvcmRlci1yYWRpdXM6MDstLWJvcmRlci13aWR0aDowOy0tYm9yZGVyLXN0eWxlOm5vbmU7LS1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpOy0tYm94LXNoYWRvdzpub25lO2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtjb250YWluOnN0cmljdH0ub3ZlcmxheS1oaWRkZW4uc2MtaW9uLW1vZGFsLW1kLWh7ZGlzcGxheTpub25lfS5tb2RhbC13cmFwcGVyLnNjLWlvbi1tb2RhbC1tZHtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO3dpZHRoOnZhcigtLXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTtoZWlnaHQ6dmFyKC0taGVpZ2h0KTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO21heC1oZWlnaHQ6dmFyKC0tbWF4LWhlaWdodCk7Ym9yZGVyLXdpZHRoOnZhcigtLWJvcmRlci13aWR0aCk7Ym9yZGVyLXN0eWxlOnZhcigtLWJvcmRlci1zdHlsZSk7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcik7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTstd2Via2l0LWJveC1zaGFkb3c6dmFyKC0tYm94LXNoYWRvdyk7Ym94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtvdmVyZmxvdzp2YXIoLS1vdmVyZmxvdyk7ei1pbmRleDoxMH1cXEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCkgYW5kIChtaW4taGVpZ2h0OjYwMHB4KXsuc2MtaW9uLW1vZGFsLW1kLWh7LS13aWR0aDo2MDBweDstLWhlaWdodDo1MDBweDstLWlvbi1zYWZlLWFyZWEtdG9wOjBweDstLWlvbi1zYWZlLWFyZWEtYm90dG9tOjBweDstLWlvbi1zYWZlLWFyZWEtcmlnaHQ6MHB4Oy0taW9uLXNhZmUtYXJlYS1sZWZ0OjBweH19XFxAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpIGFuZCAobWluLWhlaWdodDo3NjhweCl7LnNjLWlvbi1tb2RhbC1tZC1oey0td2lkdGg6NjAwcHg7LS1oZWlnaHQ6NjAwcHh9fVxcQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1pbi1oZWlnaHQ6NjAwcHgpey5zYy1pb24tbW9kYWwtbWQtaHstLWJvcmRlci1yYWRpdXM6MnB4Oy0tYm94LXNoYWRvdzowIDI4cHggNDhweCByZ2JhKDAsMCwwLDAuNCl9fS5tb2RhbC13cmFwcGVyLnNjLWlvbi1tb2RhbC1tZHstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDQwcHgsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNDBweCwwKTtvcGFjaXR5Oi4wMX1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzE7XG59KCkpO1xudmFyIExJRkVDWUNMRV9NQVAgPSB7XG4gICAgJ2lvbk1vZGFsRGlkUHJlc2VudCc6ICdpb25WaWV3RGlkRW50ZXInLFxuICAgICdpb25Nb2RhbFdpbGxQcmVzZW50JzogJ2lvblZpZXdXaWxsRW50ZXInLFxuICAgICdpb25Nb2RhbFdpbGxEaXNtaXNzJzogJ2lvblZpZXdXaWxsTGVhdmUnLFxuICAgICdpb25Nb2RhbERpZERpc21pc3MnOiAnaW9uVmlld0RpZExlYXZlJyxcbn07XG5leHBvcnQgeyBNb2RhbCBhcyBpb25fbW9kYWwgfTtcbiIsImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbnZhciBob3N0Q29udGV4dCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZWwpIHtcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XG59O1xuLyoqXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXG4gKi9cbnZhciBjcmVhdGVDb2xvckNsYXNzZXMgPSBmdW5jdGlvbiAoY29sb3IpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8gKF9hID0ge1xuICAgICAgICAgICAgJ2lvbi1jb2xvcic6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgX2FbXCJpb24tY29sb3ItXCIgKyBjb2xvcl0gPSB0cnVlLFxuICAgICAgICBfYSkgOiB1bmRlZmluZWQ7XG59O1xudmFyIGdldENsYXNzTGlzdCA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgcmV0dXJuIGFycmF5XG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9IG51bGw7IH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRyaW0oKTsgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT09ICcnOyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xufTtcbnZhciBnZXRDbGFzc01hcCA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XG4gICAgdmFyIG1hcCA9IHt9O1xuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7IHJldHVybiBtYXBbY10gPSB0cnVlOyB9KTtcbiAgICByZXR1cm4gbWFwO1xufTtcbnZhciBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcbnZhciBvcGVuVVJMID0gZnVuY3Rpb24gKHVybCwgZXYsIGRpcmVjdGlvbikgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcm91dGVyO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XG4gICAgICAgICAgICByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XG4gICAgICAgICAgICBpZiAocm91dGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICB9KTtcbn0pOyB9O1xuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==