(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js ***!
  \************************************************************************/
/*! exports provided: P, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
/**
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return NaN.
 */
var getTimeGivenProgression = function (p0, p1, p2, p3, progression) {
    var tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
var solveCubicParametricEquation = function (p0, p1, p2, p3, t) {
    var partA = (3 * p1) * Math.pow(t - 1, 2);
    var partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    var partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
var solveCubicBezier = function (p0, p1, p2, p3, refPoint) {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    var roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(function (root) { return root >= 0 && root <= 1; });
};
var solveQuadraticEquation = function (a, b, c) {
    var discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    else {
        return [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    }
};
var solveCubicEquation = function (a, b, c, d) {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    var p = (3 * c - b * b) / 3;
    var q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    var discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    var r = Math.sqrt(Math.pow(-(p / 3), 3));
    var phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    var s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-app_8-ios.entry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-app_8-ios.entry.js ***!
  \**********************************************************************/
/*! exports provided: ion_app, ion_buttons, ion_content, ion_footer, ion_header, ion_router_outlet, ion_title, ion_toolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_app", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_buttons", function() { return Buttons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_router_outlet", function() { return RouterOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_title", function() { return ToolbarTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_toolbar", function() { return Toolbar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "./node_modules/@ionic/core/dist/esm-es5/constants-3c3e1099.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");
/* harmony import */ var _framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./framework-delegate-c2e2e1f4.js */ "./node_modules/@ionic/core/dist/esm-es5/framework-delegate-c2e2e1f4.js");
/* harmony import */ var _index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index-4d91f03a.js */ "./node_modules/@ionic/core/dist/esm-es5/index-4d91f03a.js");
/* harmony import */ var _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cubic-bezier-2812fda3.js */ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js");









var App = /** @class */ (function () {
    function App(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
    }
    App.prototype.componentDidLoad = function () {
        {
            rIC(function () {
                var isHybrid = Object(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["i"])(window, 'hybrid');
                if (!_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"].getBoolean('_testing')) {
                    __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ./tap-click-ca00ce7f.js */ "./node_modules/@ionic/core/dist/esm-es5/tap-click-ca00ce7f.js")).then(function (module) { return module.startTapClick(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"]); });
                }
                if (_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"].getBoolean('statusTap', isHybrid)) {
                    __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./status-tap-32c72c43.js */ "./node_modules/@ionic/core/dist/esm-es5/status-tap-32c72c43.js")).then(function (module) { return module.startStatusTap(); });
                }
                if (_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"].getBoolean('inputShims', needInputShims())) {
                    __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./input-shims-a4fc53ac.js */ "./node_modules/@ionic/core/dist/esm-es5/input-shims-a4fc53ac.js")).then(function (module) { return module.startInputShims(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"]); });
                }
                if (_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"].getBoolean('hardwareBackButton', isHybrid)) {
                    __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./hardware-back-button-5afe3cb0.js */ "./node_modules/@ionic/core/dist/esm-es5/hardware-back-button-5afe3cb0.js")).then(function (module) { return module.startHardwareBackButton(); });
                }
                __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./focus-visible-70713a0c.js */ "./node_modules/@ionic/core/dist/esm-es5/focus-visible-70713a0c.js")).then(function (module) { return module.startFocusVisible(); });
            });
        }
    };
    App.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: (_a = {},
                _a[mode] = true,
                _a['ion-page'] = true,
                _a['force-statusbar-padding'] = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"].getBoolean('_forceStatusbarPadding'),
                _a) }));
    };
    Object.defineProperty(App.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "style", {
        get: function () { return "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"; },
        enumerable: true,
        configurable: true
    });
    return App;
}());
var needInputShims = function () {
    return Object(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["i"])(window, 'ios') && Object(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["i"])(window, 'mobile');
};
var rIC = function (callback) {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
};
var Buttons = /** @class */ (function () {
    function Buttons(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        /**
         * If true, buttons will disappear when its
         * parent toolbar has fully collapsed if the toolbar
         * is not the first toolbar. If the toolbar is the
         * first toolbar, the buttons will be hidden and will
         * only be shown once all toolbars have fully collapsed.
         *
         * Only applies in `ios` mode with `collapse` set to
         * `true` on `ion-header`.
         *
         * Typically used for [Collapsible Large Titles](https://ionicframework.com/docs/api/title#collapsible-large-titles)
         */
        this.collapse = false;
    }
    Buttons.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: (_a = {},
                _a[mode] = true,
                _a['buttons-collapse'] = this.collapse,
                _a) }));
    };
    Object.defineProperty(Buttons, "style", {
        get: function () { return ".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s  ion-button {--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;--padding-start:5px;--padding-end:5px;margin-left:2px;margin-right:2px;height:32px;font-size:17px;font-weight:400}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-ios-s  ion-button:not(.button-round) {--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button {--color:initial;--border-color:initial;--background-focused:rgba(var(--ion-color-contrast-rgb),0.1)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-solid , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-solid {--background:var(--ion-color-contrast);--background-activated:rgba(var(--ion-color-contrast-rgb),0.8);--background-focused:rgba(var(--ion-color-contrast-rgb),0.6);--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-clear , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-clear {--background-focused:rgba(var(--ion-color-contrast-rgb),0.1);--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-outline , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-outline {--background-activated:var(--ion-color-contrast);--background-focused:rgba(var(--ion-color-contrast-rgb),0.1);--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-clear , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-clear {--color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--color-activated:var(--ion-toolbar-color-activated,var(--ion-color-primary,#3880ff));--color-focused:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff))}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-outline , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-outline {--color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--color-activated:var(--ion-toolbar-background,var(--ion-color-primary-contrast,#fff));--color-focused:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--border-color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--background-activated:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff))}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-solid , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-solid {--color:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color-activated:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color-focused:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--background:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--background-activated:var(--ion-toolbar-color-activated,var(--ion-color-primary-shade,#3171e0));--background-focused:var(--ion-toolbar-color-activated,var(--ion-color-primary-shade,#3171e0))}.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:24px;line-height:.67}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:24px;line-height:.67}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-ios-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:31px;line-height:.67}"; },
        enumerable: true,
        configurable: true
    });
    return Buttons;
}());
var Content = /** @class */ (function () {
    function class_1(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.isScrolling = false;
        this.lastScroll = 0;
        this.queued = false;
        this.cTop = -1;
        this.cBottom = -1;
        this.mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        // Detail is used in a hot loop in the scroll event, by allocating it here
        // V8 will be able to inline any read/write to it since it's a monomorphic class.
        // https://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html
        this.detail = {
            scrollTop: 0,
            scrollLeft: 0,
            type: 'scroll',
            event: undefined,
            startX: 0,
            startY: 0,
            startTimeStamp: 0,
            currentX: 0,
            currentY: 0,
            velocityX: 0,
            velocityY: 0,
            deltaX: 0,
            deltaY: 0,
            timeStamp: 0,
            data: undefined,
            isScrolling: true,
        };
        /**
         * If `true`, the content will scroll behind the headers
         * and footers. This effect can easily be seen by setting the toolbar
         * to transparent.
         */
        this.fullscreen = false;
        /**
         * If you want to enable the content scrolling in the X axis, set this property to `true`.
         */
        this.scrollX = false;
        /**
         * If you want to disable the content scrolling in the Y axis, set this property to `false`.
         */
        this.scrollY = true;
        /**
         * Because of performance reasons, ionScroll events are disabled by default, in order to enable them
         * and start listening from (ionScroll), set this property to `true`.
         */
        this.scrollEvents = false;
        this.ionScrollStart = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionScrollStart", 7);
        this.ionScroll = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionScroll", 7);
        this.ionScrollEnd = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionScrollEnd", 7);
    }
    class_1.prototype.disconnectedCallback = function () {
        this.onScrollEnd();
    };
    class_1.prototype.componentDidLoad = function () {
        this.resize();
    };
    class_1.prototype.onClick = function (ev) {
        if (this.isScrolling) {
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    class_1.prototype.shouldForceOverscroll = function () {
        var _a = this, forceOverscroll = _a.forceOverscroll, mode = _a.mode;
        return forceOverscroll === undefined
            ? mode === 'ios' && Object(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["i"])('ios')
            : forceOverscroll;
    };
    class_1.prototype.resize = function () {
        if (this.fullscreen) {
            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["f"])(this.readDimensions.bind(this));
        }
        else if (this.cTop !== 0 || this.cBottom !== 0) {
            this.cTop = this.cBottom = 0;
            this.el.forceUpdate();
        }
    };
    class_1.prototype.readDimensions = function () {
        var page = getPageElement(this.el);
        var top = Math.max(this.el.offsetTop, 0);
        var bottom = Math.max(page.offsetHeight - top - this.el.offsetHeight, 0);
        var dirty = top !== this.cTop || bottom !== this.cBottom;
        if (dirty) {
            this.cTop = top;
            this.cBottom = bottom;
            this.el.forceUpdate();
        }
    };
    class_1.prototype.onScroll = function (ev) {
        var _this = this;
        var timeStamp = Date.now();
        var shouldStart = !this.isScrolling;
        this.lastScroll = timeStamp;
        if (shouldStart) {
            this.onScrollStart();
        }
        if (!this.queued && this.scrollEvents) {
            this.queued = true;
            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["f"])(function (ts) {
                _this.queued = false;
                _this.detail.event = ev;
                updateScrollDetail(_this.detail, _this.scrollEl, ts, shouldStart);
                _this.ionScroll.emit(_this.detail);
            });
        }
    };
    /**
     * Get the element where the actual scrolling takes place.
     * This element can be used to subscribe to `scroll` events or manually modify
     * `scrollTop`. However, it's recommended to use the API provided by `ion-content`:
     *
     * i.e. Using `ionScroll`, `ionScrollStart`, `ionScrollEnd` for scrolling events
     * and `scrollToPoint()` to scroll the content into a certain point.
     */
    class_1.prototype.getScrollElement = function () {
        return Promise.resolve(this.scrollEl);
    };
    /**
     * Scroll to the top of the component.
     *
     * @param duration The amount of time to take scrolling to the top. Defaults to `0`.
     */
    class_1.prototype.scrollToTop = function (duration) {
        if (duration === void 0) { duration = 0; }
        return this.scrollToPoint(undefined, 0, duration);
    };
    /**
     * Scroll to the bottom of the component.
     *
     * @param duration The amount of time to take scrolling to the bottom. Defaults to `0`.
     */
    class_1.prototype.scrollToBottom = function (duration) {
        if (duration === void 0) { duration = 0; }
        var y = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
        return this.scrollToPoint(undefined, y, duration);
    };
    /**
     * Scroll by a specified X/Y distance in the component.
     *
     * @param x The amount to scroll by on the horizontal axis.
     * @param y The amount to scroll by on the vertical axis.
     * @param duration The amount of time to take scrolling by that amount.
     */
    class_1.prototype.scrollByPoint = function (x, y, duration) {
        return this.scrollToPoint(x + this.scrollEl.scrollLeft, y + this.scrollEl.scrollTop, duration);
    };
    /**
     * Scroll to a specified X/Y location in the component.
     *
     * @param x The point to scroll to on the horizontal axis.
     * @param y The point to scroll to on the vertical axis.
     * @param duration The amount of time to take scrolling to that point. Defaults to `0`.
     */
    class_1.prototype.scrollToPoint = function (x, y, duration) {
        if (duration === void 0) { duration = 0; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var el, resolve, startTime, promise, fromY, fromX, deltaY, deltaX, step;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                el = this.scrollEl;
                if (duration < 32) {
                    if (y != null) {
                        el.scrollTop = y;
                    }
                    if (x != null) {
                        el.scrollLeft = x;
                    }
                    return [2 /*return*/];
                }
                startTime = 0;
                promise = new Promise(function (r) { return resolve = r; });
                fromY = el.scrollTop;
                fromX = el.scrollLeft;
                deltaY = y != null ? y - fromY : 0;
                deltaX = x != null ? x - fromX : 0;
                step = function (timeStamp) {
                    var linearTime = Math.min(1, ((timeStamp - startTime) / duration)) - 1;
                    var easedT = Math.pow(linearTime, 3) + 1;
                    if (deltaY !== 0) {
                        el.scrollTop = Math.floor((easedT * deltaY) + fromY);
                    }
                    if (deltaX !== 0) {
                        el.scrollLeft = Math.floor((easedT * deltaX) + fromX);
                    }
                    if (easedT < 1) {
                        // do not use DomController here
                        // must use nativeRaf in order to fire in the next frame
                        // TODO: remove as any
                        requestAnimationFrame(step);
                    }
                    else {
                        resolve();
                    }
                };
                // chill out for a frame first
                requestAnimationFrame(function (ts) {
                    startTime = ts;
                    step(ts);
                });
                return [2 /*return*/, promise];
            });
        });
    };
    class_1.prototype.onScrollStart = function () {
        var _this = this;
        this.isScrolling = true;
        this.ionScrollStart.emit({
            isScrolling: true
        });
        if (this.watchDog) {
            clearInterval(this.watchDog);
        }
        // watchdog
        this.watchDog = setInterval(function () {
            if (_this.lastScroll < Date.now() - 120) {
                _this.onScrollEnd();
            }
        }, 100);
    };
    class_1.prototype.onScrollEnd = function () {
        clearInterval(this.watchDog);
        this.watchDog = null;
        if (this.isScrolling) {
            this.isScrolling = false;
            this.ionScrollEnd.emit({
                isScrolling: false
            });
        }
    };
    class_1.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this, scrollX = _b.scrollX, scrollY = _b.scrollY;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var forceOverscroll = this.shouldForceOverscroll();
        var transitionShadow = (mode === 'ios' && _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"].getBoolean('experimentalTransitionShadow', true));
        this.resize();
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this.color)), (_a = {}, _a[mode] = true, _a['content-sizing'] = Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["h"])('ion-popover', this.el), _a['overscroll'] = forceOverscroll, _a)), style: {
                '--offset-top': this.cTop + "px",
                '--offset-bottom': this.cBottom + "px",
            } }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("main", { class: {
                'inner-scroll': true,
                'scroll-x': scrollX,
                'scroll-y': scrollY,
                'overscroll': (scrollX || scrollY) && forceOverscroll
            }, ref: function (el) { return _this.scrollEl = el; }, onScroll: function (ev) { return _this.onScroll(ev); } }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)), transitionShadow ? (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "transition-effect" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "transition-cover" }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "transition-shadow" }))) : null, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", { name: "fixed" })));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50,#f2f2f2)}.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:\"\"}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{left:-100%;opacity:0;pointer-events:none}.transition-cover,.transition-effect{position:absolute;width:100%;height:100%}.transition-cover{right:0;background:#000;opacity:.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var getParentElement = function (el) {
    if (el.parentElement) {
        // normal element with a parent element
        return el.parentElement;
    }
    if (el.parentNode && el.parentNode.host) {
        // shadow dom's document fragment
        return el.parentNode.host;
    }
    return null;
};
var getPageElement = function (el) {
    var tabs = el.closest('ion-tabs');
    if (tabs) {
        return tabs;
    }
    var page = el.closest('ion-app,ion-page,.ion-page,page-inner');
    if (page) {
        return page;
    }
    return getParentElement(el);
};
// ******** DOM READ ****************
var updateScrollDetail = function (detail, el, timestamp, shouldStart) {
    var prevX = detail.currentX;
    var prevY = detail.currentY;
    var prevT = detail.timeStamp;
    var currentX = el.scrollLeft;
    var currentY = el.scrollTop;
    var timeDelta = timestamp - prevT;
    if (shouldStart) {
        // remember the start positions
        detail.startTimeStamp = timestamp;
        detail.startX = currentX;
        detail.startY = currentY;
        detail.velocityX = detail.velocityY = 0;
    }
    detail.timeStamp = timestamp;
    detail.currentX = detail.scrollLeft = currentX;
    detail.currentY = detail.scrollTop = currentY;
    detail.deltaX = currentX - detail.startX;
    detail.deltaY = currentY - detail.startY;
    if (timeDelta > 0 && timeDelta < 100) {
        var velocityX = (currentX - prevX) / timeDelta;
        var velocityY = (currentY - prevY) / timeDelta;
        detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
        detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
    }
};
var Footer = /** @class */ (function () {
    function Footer(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        /**
         * If `true`, the footer will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         *
         * Note: In order to scroll content behind the footer, the `fullscreen`
         * attribute needs to be set on the content.
         */
        this.translucent = false;
    }
    Footer.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var translucent = this.translucent;
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { role: "contentinfo", class: (_a = {},
                _a[mode] = true,
                // Used internally for styling
                _a["footer-" + mode] = true,
                _a["footer-translucent"] = translucent,
                _a["footer-translucent-" + mode] = translucent,
                _a) }));
    };
    Object.defineProperty(Footer, "style", {
        get: function () { return "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-ios ion-toolbar:first-child{--border-width:0.55px 0 0}.footer-ios[no-border] ion-toolbar:first-child{--border-width:0}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.footer-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}}"; },
        enumerable: true,
        configurable: true
    });
    return Footer;
}());
var TRANSITION = 'all 0.2s ease-in-out';
var cloneElement = function (tagName) {
    var getCachedEl = document.querySelector(tagName + ".ion-cloned-element");
    if (getCachedEl !== null) {
        return getCachedEl;
    }
    var clonedEl = document.createElement(tagName);
    clonedEl.classList.add('ion-cloned-element');
    clonedEl.style.setProperty('display', 'none');
    document.body.appendChild(clonedEl);
    return clonedEl;
};
var createHeaderIndex = function (headerEl) {
    if (!headerEl) {
        return;
    }
    var toolbars = headerEl.querySelectorAll('ion-toolbar');
    return {
        el: headerEl,
        toolbars: Array.from(toolbars).map(function (toolbar) {
            var ionTitleEl = toolbar.querySelector('ion-title');
            return {
                el: toolbar,
                background: toolbar.shadowRoot.querySelector('.toolbar-background'),
                ionTitleEl: ionTitleEl,
                innerTitleEl: (ionTitleEl) ? ionTitleEl.shadowRoot.querySelector('.toolbar-title') : null,
                ionButtonsEl: Array.from(toolbar.querySelectorAll('ion-buttons')) || []
            };
        }) || [[]]
    };
};
var handleContentScroll = function (scrollEl, scrollHeaderIndex) {
    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["f"])(function () {
        var scrollTop = scrollEl.scrollTop;
        var scale = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["c"])(1, 1 + (-scrollTop / 500), 1.1);
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["w"])(function () {
            scaleLargeTitles(scrollHeaderIndex.toolbars, scale);
        });
    });
};
var setToolbarBackgroundOpacity = function (toolbar, opacity) {
    if (opacity === undefined) {
        toolbar.background.style.removeProperty('--opacity');
    }
    else {
        toolbar.background.style.setProperty('--opacity', opacity.toString());
    }
};
var handleToolbarBorderIntersection = function (ev, mainHeaderIndex) {
    if (!ev[0].isIntersecting) {
        return;
    }
    var scale = ((1 - ev[0].intersectionRatio) * 100) / 75;
    setToolbarBackgroundOpacity(mainHeaderIndex.toolbars[0], (scale === 1) ? undefined : scale);
};
/**
 * If toolbars are intersecting, hide the scrollable toolbar content
 * and show the primary toolbar content. If the toolbars are not intersecting,
 * hide the primary toolbar content and show the scrollable toolbar content
 */
var handleToolbarIntersection = function (ev, mainHeaderIndex, scrollHeaderIndex) {
    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["w"])(function () {
        handleToolbarBorderIntersection(ev, mainHeaderIndex);
        var event = ev[0];
        var intersection = event.intersectionRect;
        var intersectionArea = intersection.width * intersection.height;
        var rootArea = event.rootBounds.width * event.rootBounds.height;
        var isPageHidden = intersectionArea === 0 && rootArea === 0;
        var leftDiff = Math.abs(intersection.left - event.boundingClientRect.left);
        var rightDiff = Math.abs(intersection.right - event.boundingClientRect.right);
        var isPageTransitioning = intersectionArea > 0 && (leftDiff >= 5 || rightDiff >= 5);
        if (isPageHidden || isPageTransitioning) {
            return;
        }
        if (event.isIntersecting) {
            setHeaderActive(mainHeaderIndex, false);
            setHeaderActive(scrollHeaderIndex);
        }
        else {
            /**
             * There is a bug with IntersectionObserver on Safari
             * where `event.isIntersecting === false` when cancelling
             * a swipe to go back gesture. Checking the intersection
             * x, y, width, and height provides a workaround. This bug
             * does not happen when using Safari + Web Animations,
             * only Safari + CSS Animations.
             */
            var hasValidIntersection = (intersection.x === 0 && intersection.y === 0) || (intersection.width !== 0 && intersection.height !== 0);
            if (hasValidIntersection) {
                setHeaderActive(mainHeaderIndex);
                setHeaderActive(scrollHeaderIndex, false);
                setToolbarBackgroundOpacity(mainHeaderIndex.toolbars[0], 1);
            }
        }
    });
};
var setHeaderActive = function (headerIndex, active) {
    if (active === void 0) { active = true; }
    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["w"])(function () {
        if (active) {
            headerIndex.el.classList.remove('header-collapse-condense-inactive');
        }
        else {
            headerIndex.el.classList.add('header-collapse-condense-inactive');
        }
    });
};
var scaleLargeTitles = function (toolbars, scale, transition) {
    if (toolbars === void 0) { toolbars = []; }
    if (scale === void 0) { scale = 1; }
    if (transition === void 0) { transition = false; }
    toolbars.forEach(function (toolbar) {
        var ionTitle = toolbar.ionTitleEl;
        var titleDiv = toolbar.innerTitleEl;
        if (!ionTitle || ionTitle.size !== 'large') {
            return;
        }
        titleDiv.style.transformOrigin = 'left center';
        titleDiv.style.transition = (transition) ? TRANSITION : '';
        titleDiv.style.transform = "scale3d(" + scale + ", " + scale + ", 1)";
    });
};
var Header = /** @class */ (function () {
    function class_2(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.collapsibleHeaderInitialized = false;
        /**
         * If `true`, the header will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         *
         * Note: In order to scroll content behind the header, the `fullscreen`
         * attribute needs to be set on the content.
         */
        this.translucent = false;
    }
    class_2.prototype.componentDidLoad = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkCollapsibleHeader()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.componentDidUpdate = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkCollapsibleHeader()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.componentDidUnload = function () {
        this.destroyCollapsibleHeader();
    };
    class_2.prototype.checkCollapsibleHeader = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var hasCollapse, canCollapse, pageEl, contentEl;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hasCollapse = this.collapse === 'condense';
                        canCollapse = (hasCollapse && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this) === 'ios') ? hasCollapse : false;
                        if (!(!canCollapse && this.collapsibleHeaderInitialized)) return [3 /*break*/, 1];
                        this.destroyCollapsibleHeader();
                        return [3 /*break*/, 3];
                    case 1:
                        if (!(canCollapse && !this.collapsibleHeaderInitialized)) return [3 /*break*/, 3];
                        pageEl = this.el.closest('ion-app,ion-page,.ion-page,page-inner');
                        contentEl = (pageEl) ? pageEl.querySelector('ion-content') : null;
                        return [4 /*yield*/, this.setupCollapsibleHeader(contentEl, pageEl)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.destroyCollapsibleHeader = function () {
        if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            this.intersectionObserver = undefined;
        }
        if (this.scrollEl && this.contentScrollCallback) {
            this.scrollEl.removeEventListener('scroll', this.contentScrollCallback);
            this.contentScrollCallback = undefined;
        }
    };
    class_2.prototype.setupCollapsibleHeader = function (contentEl, pageEl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!contentEl || !pageEl) {
                            console.error('ion-header requires a content to collapse, make sure there is an ion-content.');
                            return [2 /*return*/];
                        }
                        _a = this;
                        return [4 /*yield*/, contentEl.getScrollElement()];
                    case 1:
                        _a.scrollEl = _b.sent();
                        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["f"])(function () {
                            var headers = pageEl.querySelectorAll('ion-header');
                            var mainHeader = Array.from(headers).find(function (header) { return header.collapse !== 'condense'; });
                            if (!mainHeader || !_this.scrollEl) {
                                return;
                            }
                            var mainHeaderIndex = createHeaderIndex(mainHeader);
                            var scrollHeaderIndex = createHeaderIndex(_this.el);
                            if (!mainHeaderIndex || !scrollHeaderIndex) {
                                return;
                            }
                            setHeaderActive(mainHeaderIndex, false);
                            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["f"])(function () {
                                var mainHeaderHeight = mainHeaderIndex.el.clientHeight;
                                /**
                                 * Handle interaction between toolbar collapse and
                                 * showing/hiding content in the primary ion-header
                                 * as well as progressively showing/hiding the main header
                                 * border as the top-most toolbar collapses or expands.
                                 */
                                var toolbarIntersection = function (ev) { handleToolbarIntersection(ev, mainHeaderIndex, scrollHeaderIndex); };
                                _this.intersectionObserver = new IntersectionObserver(toolbarIntersection, { threshold: [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], rootMargin: "-" + mainHeaderHeight + "px 0px 0px 0px" });
                                _this.intersectionObserver.observe(scrollHeaderIndex.toolbars[0].el);
                            });
                            /**
                             * Handle scaling of large iOS titles and
                             * showing/hiding border on last toolbar
                             * in primary header
                             */
                            _this.contentScrollCallback = function () { handleContentScroll(_this.scrollEl, scrollHeaderIndex); };
                            _this.scrollEl.addEventListener('scroll', _this.contentScrollCallback);
                        });
                        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["w"])(function () {
                            cloneElement('ion-title');
                            cloneElement('ion-back-button');
                        });
                        this.collapsibleHeaderInitialized = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var collapse = this.collapse || 'none';
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { role: "banner", class: (_a = {},
                _a[mode] = true,
                // Used internally for styling
                _a["header-" + mode] = true,
                _a["header-translucent"] = this.translucent,
                _a["header-collapse-" + collapse] = true,
                _a["header-translucent-" + mode] = this.translucent,
                _a) }));
    };
    Object.defineProperty(class_2.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "style", {
        get: function () { return "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-ios ion-toolbar:last-child{--border-width:0 0 0.55px}.header-ios[no-border] ion-toolbar:last-child{--border-width:0}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.header-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-child{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{z-index:0}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0;padding-bottom:13px}ion-toolbar.in-toolbar ion-buttons,ion-toolbar.in-toolbar ion-title{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.header-collapse-condense ion-toolbar ion-buttons,.header-collapse-condense ion-toolbar ion-title{-webkit-transition:none;transition:none}.header-collapse-condense-inactive ion-toolbar.in-toolbar ion-buttons.buttons-collapse,.header-collapse-condense-inactive ion-toolbar.in-toolbar ion-title{opacity:0;pointer-events:none}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
var RouterOutlet = /** @class */ (function () {
    function class_3(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.animationEnabled = true;
        /**
         * The mode determines which platform styles to use.
         */
        this.mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        /**
         * If `true`, the router-outlet should animate the transition of components.
         */
        this.animated = true;
        this.ionNavWillLoad = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionNavWillLoad", 7);
        this.ionNavWillChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionNavWillChange", 3);
        this.ionNavDidChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionNavDidChange", 3);
    }
    class_3.prototype.swipeHandlerChanged = function () {
        if (this.gesture) {
            this.gesture.setDisabled(this.swipeHandler === undefined);
        }
    };
    class_3.prototype.connectedCallback = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./swipe-back-35ad8e37.js */ "./node_modules/@ionic/core/dist/esm-es5/swipe-back-35ad8e37.js"))];
                    case 1:
                        _a.gesture = (_b.sent()).createSwipeBackGesture(this.el, function () { return !!_this.swipeHandler && _this.swipeHandler.canStart() && _this.animationEnabled; }, function () { return _this.swipeHandler && _this.swipeHandler.onStart(); }, function (step) { return _this.ani && _this.ani.progressStep(step); }, function (shouldComplete, step, dur) {
                            if (_this.ani) {
                                _this.animationEnabled = false;
                                _this.ani.onFinish(function () {
                                    _this.animationEnabled = true;
                                    if (_this.swipeHandler) {
                                        _this.swipeHandler.onEnd(shouldComplete);
                                    }
                                }, { oneTimeCallback: true });
                                // Account for rounding errors in JS
                                var newStepValue = (shouldComplete) ? -0.001 : 0.001;
                                /**
                                 * Animation will be reversed here, so need to
                                 * reverse the easing curve as well
                                 *
                                 * Additionally, we need to account for the time relative
                                 * to the new easing curve, as `stepValue` is going to be given
                                 * in terms of a linear curve.
                                 */
                                if (!shouldComplete) {
                                    _this.ani.easing('cubic-bezier(1, 0, 0.68, 0.28)');
                                    newStepValue += Object(_cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_8__["g"])(new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_8__["P"](0, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_8__["P"](1, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_8__["P"](0.68, 0.28), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_8__["P"](1, 1), step);
                                }
                                else {
                                    newStepValue += Object(_cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_8__["g"])(new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_8__["P"](0, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_8__["P"](0.32, 0.72), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_8__["P"](0, 1), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_8__["P"](1, 1), step);
                                }
                                _this.ani.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
                            }
                        });
                        this.swipeHandlerChanged();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_3.prototype.componentWillLoad = function () {
        this.ionNavWillLoad.emit();
    };
    class_3.prototype.disconnectedCallback = function () {
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    };
    /** @internal */
    class_3.prototype.commit = function (enteringEl, leavingEl, opts) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var unlock, changed, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lock()];
                    case 1:
                        unlock = _a.sent();
                        changed = false;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.transition(enteringEl, leavingEl, opts)];
                    case 3:
                        changed = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5:
                        unlock();
                        return [2 /*return*/, changed];
                }
            });
        });
    };
    /** @internal */
    class_3.prototype.setRouteId = function (id, params, direction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var changed;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setRoot(id, params, {
                            duration: direction === 'root' ? 0 : undefined,
                            direction: direction === 'back' ? 'back' : 'forward',
                        })];
                    case 1:
                        changed = _a.sent();
                        return [2 /*return*/, {
                                changed: changed,
                                element: this.activeEl
                            }];
                }
            });
        });
    };
    /** @internal */
    class_3.prototype.getRouteId = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var active;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                active = this.activeEl;
                return [2 /*return*/, active ? {
                        id: active.tagName,
                        element: active,
                    } : undefined];
            });
        });
    };
    class_3.prototype.setRoot = function (component, params, opts) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var leavingEl, enteringEl;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.activeComponent === component) {
                            return [2 /*return*/, false];
                        }
                        leavingEl = this.activeEl;
                        return [4 /*yield*/, Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_6__["a"])(this.delegate, this.el, component, ['ion-page', 'ion-page-invisible'], params)];
                    case 1:
                        enteringEl = _a.sent();
                        this.activeComponent = component;
                        this.activeEl = enteringEl;
                        // commit animation
                        return [4 /*yield*/, this.commit(enteringEl, leavingEl, opts)];
                    case 2:
                        // commit animation
                        _a.sent();
                        return [4 /*yield*/, Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_6__["d"])(this.delegate, leavingEl)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    class_3.prototype.transition = function (enteringEl, leavingEl, opts) {
        if (opts === void 0) { opts = {}; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, el, mode, animated, animationBuilder;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (leavingEl === enteringEl) {
                            return [2 /*return*/, false];
                        }
                        // emit nav will change event
                        this.ionNavWillChange.emit();
                        _a = this, el = _a.el, mode = _a.mode;
                        animated = this.animated && _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"].getBoolean('animated', true);
                        animationBuilder = this.animation || opts.animationBuilder || _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"].get('navAnimation');
                        return [4 /*yield*/, Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_7__["t"])(Object.assign({ mode: mode,
                                animated: animated,
                                animationBuilder: animationBuilder,
                                enteringEl: enteringEl,
                                leavingEl: leavingEl, baseEl: el, progressCallback: (opts.progressAnimation
                                    ? function (ani) { return _this.ani = ani; }
                                    : undefined) }, opts))];
                    case 1:
                        _b.sent();
                        // emit nav changed event
                        this.ionNavDidChange.emit();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    class_3.prototype.lock = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var p, resolve;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        p = this.waitPromise;
                        this.waitPromise = new Promise(function (r) { return resolve = r; });
                        if (!(p !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, p];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, resolve];
                }
            });
        });
    };
    class_3.prototype.render = function () {
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null));
    };
    Object.defineProperty(class_3.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_3, "watchers", {
        get: function () {
            return {
                "swipeHandler": ["swipeHandlerChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_3, "style", {
        get: function () { return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"; },
        enumerable: true,
        configurable: true
    });
    return class_3;
}());
var ToolbarTitle = /** @class */ (function () {
    function ToolbarTitle(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.ionStyle = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionStyle", 7);
    }
    ToolbarTitle.prototype.sizeChanged = function () {
        this.emitStyle();
    };
    ToolbarTitle.prototype.connectedCallback = function () {
        this.emitStyle();
    };
    ToolbarTitle.prototype.emitStyle = function () {
        var _a;
        var size = this.getSize();
        this.ionStyle.emit((_a = {},
            _a["title-" + size] = true,
            _a));
    };
    ToolbarTitle.prototype.getSize = function () {
        return (this.size !== undefined) ? this.size : 'default';
    };
    ToolbarTitle.prototype.getMode = function () {
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var toolbar = this.el.closest('ion-toolbar');
        return (toolbar && toolbar.mode) || mode;
    };
    ToolbarTitle.prototype.render = function () {
        var _a;
        var mode = this.getMode();
        var size = this.getSize();
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: Object.assign((_a = {}, _a[mode] = true, _a["title-" + mode] = true, _a["title-" + size] = true, _a), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this.color)) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "toolbar-title" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null))));
    };
    Object.defineProperty(ToolbarTitle.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolbarTitle, "watchers", {
        get: function () {
            return {
                "size": ["sizeChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolbarTitle, "style", {
        get: function () { return ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.title-ios.title-default),:host(.title-ios.title-large){left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]).title-ios.title-default,:host-context([dir=rtl]).title-ios.title-large,:host-context([dir=rtl]):host(.title-ios.title-default),:host-context([dir=rtl]):host(.title-ios.title-large){left:unset;right:unset;right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-default),:host(.title-ios.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-md){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-md){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host(.title-ios.title-small){padding-left:9px;padding-right:9px;padding-top:6px;padding-bottom:16px;width:100%;height:100%;font-size:13px;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-small){padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}:host(.title-md.title-small){width:100%;height:100%;font-size:15px;font-weight:400}:host(.title-ios.title-large){padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}"; },
        enumerable: true,
        configurable: true
    });
    return ToolbarTitle;
}());
var Toolbar = /** @class */ (function () {
    function Toolbar(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.childrenStyles = new Map();
    }
    Toolbar.prototype.componentWillLoad = function () {
        var buttons = Array.from(this.el.querySelectorAll('ion-buttons'));
        var firstButtons = buttons.find(function (button) {
            return button.slot === 'start';
        });
        if (firstButtons) {
            firstButtons.classList.add('buttons-first-slot');
        }
        var buttonsReversed = buttons.reverse();
        var lastButtons = buttonsReversed.find(function (button) { return button.slot === 'end'; }) ||
            buttonsReversed.find(function (button) { return button.slot === 'primary'; }) ||
            buttonsReversed.find(function (button) { return button.slot === 'secondary'; });
        if (lastButtons) {
            lastButtons.classList.add('buttons-last-slot');
        }
    };
    Toolbar.prototype.childrenStyle = function (ev) {
        ev.stopPropagation();
        var tagName = ev.target.tagName;
        var updatedStyles = ev.detail;
        var newStyles = {};
        var childStyles = this.childrenStyles.get(tagName) || {};
        var hasStyleChange = false;
        Object.keys(updatedStyles).forEach(function (key) {
            var childKey = "toolbar-" + key;
            var newValue = updatedStyles[key];
            if (newValue !== childStyles[childKey]) {
                hasStyleChange = true;
            }
            if (newValue) {
                newStyles[childKey] = true;
            }
        });
        if (hasStyleChange) {
            this.childrenStyles.set(tagName, newStyles);
            this.el.forceUpdate();
        }
    };
    Toolbar.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var childStyles = {};
        this.childrenStyles.forEach(function (value) {
            Object.assign(childStyles, value);
        });
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: Object.assign(Object.assign((_a = { 'in-toolbar': Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["h"])('ion-toolbar', this.el) }, _a[mode] = true, _a), childStyles), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this.color)) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "toolbar-background" }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "toolbar-container" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", { name: "start" }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", { name: "secondary" }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "toolbar-content" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", { name: "primary" }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", { name: "end" }))));
    };
    Object.defineProperty(Toolbar.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toolbar, "style", {
        get: function () { return ":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#000));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment){--min-height:auto}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}"; },
        enumerable: true,
        configurable: true
    });
    return Toolbar;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2N1YmljLWJlemllci0yODEyZmRhMy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1hcHBfOC1pb3MuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLWVzNS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsK0JBQStCLEVBQUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvRDs7Ozs7Ozs7Ozs7OztBQzVGcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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LGNBQWMsaUJBQWlCLHVDQUF1QywwQkFBMEIsaUJBQWlCLDhDQUE4QyxlQUFlLHFEQUFxRCxZQUFZLHVCQUF1QixnQkFBZ0Isd0JBQXdCLGlCQUFpQixRQUFRLDRCQUE0QixpQkFBaUIsUUFBUSwwQkFBMEIsaUJBQWlCLFFBQVEsZUFBZSxzQkFBc0IsaUJBQWlCLFFBQVEsZUFBZSwrQ0FBK0MsbUJBQW1CLGVBQWUscUJBQXFCLHVCQUF1Qix1REFBdUQsV0FBVyxPQUFPLGlCQUFpQixRQUFRLGVBQWUsRUFBRSxFQUFFO0FBQ3R0RztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUMyTTs7Ozs7Ozs7Ozs7OztBQ2pqQzVNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxrQkFBa0IsRUFBRTtBQUN0RCwrQkFBK0IsaUJBQWlCLEVBQUU7QUFDbEQsa0NBQWtDLGlCQUFpQixFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Qsc0JBQXNCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFFBQVEsdURBQVM7QUFDOUQ7QUFDQSxXQUFXLHlEQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNrRiIsImZpbGUiOiI5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQmFzZWQgb246XG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MzQ4MDA5L3ktY29vcmRpbmF0ZS1mb3ItYS1naXZlbi14LWN1YmljLWJlemllclxuICogaHR0cHM6Ly9tYXRoLnN0YWNrZXhjaGFuZ2UuY29tL3F1ZXN0aW9ucy8yNjg0Ni9pcy10aGVyZS1hbi1leHBsaWNpdC1mb3JtLWZvci1jdWJpYy1iJUMzJUE5emllci1jdXJ2ZXNcbiAqIFRPRE86IFJlZHVjZSByb3VuZGluZyBlcnJvclxuICovXG52YXIgUG9pbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbiAgICByZXR1cm4gUG9pbnQ7XG59KCkpO1xuLyoqXG4gKiBHaXZlbiBhIGN1YmljLWJlemllciBjdXJ2ZSwgZ2V0IHRoZSB4IHZhbHVlICh0aW1lKSBnaXZlblxuICogdGhlIHkgdmFsdWUgKHByb2dyZXNzaW9uKS5cbiAqIEV4OiBjdWJpYy1iZXppZXIoMC4zMiwgMC43MiwgMCwgMSk7XG4gKiBQMDogKDAsIDApXG4gKiBQMTogKDAuMzIsIDAuNzIpXG4gKiBQMjogKDAsIDEpXG4gKiBQMzogKDEsIDEpXG4gKlxuICogSWYgeW91IGdpdmUgYSBjdWJpYyBiZXppZXIgY3VydmUgdGhhdCBuZXZlciByZWFjaGVzIHRoZVxuICogcHJvdmlkZWQgcHJvZ3Jlc3Npb24sIHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gTmFOLlxuICovXG52YXIgZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24gPSBmdW5jdGlvbiAocDAsIHAxLCBwMiwgcDMsIHByb2dyZXNzaW9uKSB7XG4gICAgdmFyIHRWYWx1ZXMgPSBzb2x2ZUN1YmljQmV6aWVyKHAwLnksIHAxLnksIHAyLnksIHAzLnksIHByb2dyZXNzaW9uKTtcbiAgICByZXR1cm4gc29sdmVDdWJpY1BhcmFtZXRyaWNFcXVhdGlvbihwMC54LCBwMS54LCBwMi54LCBwMy54LCB0VmFsdWVzWzBdKTsgLy8gVE9ETzogQWRkIGJldHRlciBzdHJhdGVneSBmb3IgZGVhbGluZyB3aXRoIG11bHRpcGxlIHNvbHV0aW9uc1xufTtcbi8qKlxuICogU29sdmUgYSBjdWJpYyBlcXVhdGlvbiBpbiBvbmUgZGltZW5zaW9uICh0aW1lKVxuICovXG52YXIgc29sdmVDdWJpY1BhcmFtZXRyaWNFcXVhdGlvbiA9IGZ1bmN0aW9uIChwMCwgcDEsIHAyLCBwMywgdCkge1xuICAgIHZhciBwYXJ0QSA9ICgzICogcDEpICogTWF0aC5wb3codCAtIDEsIDIpO1xuICAgIHZhciBwYXJ0QiA9ICgtMyAqIHAyICogdCkgKyAoMyAqIHAyKSArIChwMyAqIHQpO1xuICAgIHZhciBwYXJ0QyA9IHAwICogTWF0aC5wb3codCAtIDEsIDMpO1xuICAgIHJldHVybiB0ICogKHBhcnRBICsgKHQgKiBwYXJ0QikpIC0gcGFydEM7XG59O1xuLyoqXG4gKiBGaW5kIHRoZSBgdGAgdmFsdWUgZm9yIGEgY3ViaWMgYmV6aWVyIHVzaW5nIENhcmRhbm8ncyBmb3JtdWxhXG4gKi9cbnZhciBzb2x2ZUN1YmljQmV6aWVyID0gZnVuY3Rpb24gKHAwLCBwMSwgcDIsIHAzLCByZWZQb2ludCkge1xuICAgIHAwIC09IHJlZlBvaW50O1xuICAgIHAxIC09IHJlZlBvaW50O1xuICAgIHAyIC09IHJlZlBvaW50O1xuICAgIHAzIC09IHJlZlBvaW50O1xuICAgIHZhciByb290cyA9IHNvbHZlQ3ViaWNFcXVhdGlvbihwMyAtIDMgKiBwMiArIDMgKiBwMSAtIHAwLCAzICogcDIgLSA2ICogcDEgKyAzICogcDAsIDMgKiBwMSAtIDMgKiBwMCwgcDApO1xuICAgIHJldHVybiByb290cy5maWx0ZXIoZnVuY3Rpb24gKHJvb3QpIHsgcmV0dXJuIHJvb3QgPj0gMCAmJiByb290IDw9IDE7IH0pO1xufTtcbnZhciBzb2x2ZVF1YWRyYXRpY0VxdWF0aW9uID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICB2YXIgZGlzY3JpbWluYW50ID0gYiAqIGIgLSA0ICogYSAqIGM7XG4gICAgaWYgKGRpc2NyaW1pbmFudCA8IDApIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICgtYiArIE1hdGguc3FydChkaXNjcmltaW5hbnQpKSAvICgyICogYSksXG4gICAgICAgICAgICAoLWIgLSBNYXRoLnNxcnQoZGlzY3JpbWluYW50KSkgLyAoMiAqIGEpXG4gICAgICAgIF07XG4gICAgfVxufTtcbnZhciBzb2x2ZUN1YmljRXF1YXRpb24gPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgIGlmIChhID09PSAwKSB7XG4gICAgICAgIHJldHVybiBzb2x2ZVF1YWRyYXRpY0VxdWF0aW9uKGIsIGMsIGQpO1xuICAgIH1cbiAgICBiIC89IGE7XG4gICAgYyAvPSBhO1xuICAgIGQgLz0gYTtcbiAgICB2YXIgcCA9ICgzICogYyAtIGIgKiBiKSAvIDM7XG4gICAgdmFyIHEgPSAoMiAqIGIgKiBiICogYiAtIDkgKiBiICogYyArIDI3ICogZCkgLyAyNztcbiAgICBpZiAocCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW01hdGgucG93KC1xLCAxIC8gMyldO1xuICAgIH1cbiAgICBlbHNlIGlmIChxID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbTWF0aC5zcXJ0KC1wKSwgLU1hdGguc3FydCgtcCldO1xuICAgIH1cbiAgICB2YXIgZGlzY3JpbWluYW50ID0gTWF0aC5wb3cocSAvIDIsIDIpICsgTWF0aC5wb3cocCAvIDMsIDMpO1xuICAgIGlmIChkaXNjcmltaW5hbnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFtNYXRoLnBvdyhxIC8gMiwgMSAvIDIpIC0gYiAvIDNdO1xuICAgIH1cbiAgICBlbHNlIGlmIChkaXNjcmltaW5hbnQgPiAwKSB7XG4gICAgICAgIHJldHVybiBbTWF0aC5wb3coLShxIC8gMikgKyBNYXRoLnNxcnQoZGlzY3JpbWluYW50KSwgMSAvIDMpIC0gTWF0aC5wb3coKHEgLyAyKSArIE1hdGguc3FydChkaXNjcmltaW5hbnQpLCAxIC8gMykgLSBiIC8gM107XG4gICAgfVxuICAgIHZhciByID0gTWF0aC5zcXJ0KE1hdGgucG93KC0ocCAvIDMpLCAzKSk7XG4gICAgdmFyIHBoaSA9IE1hdGguYWNvcygtKHEgLyAoMiAqIE1hdGguc3FydChNYXRoLnBvdygtKHAgLyAzKSwgMykpKSkpO1xuICAgIHZhciBzID0gMiAqIE1hdGgucG93KHIsIDEgLyAzKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzICogTWF0aC5jb3MocGhpIC8gMykgLSBiIC8gMyxcbiAgICAgICAgcyAqIE1hdGguY29zKChwaGkgKyAyICogTWF0aC5QSSkgLyAzKSAtIGIgLyAzLFxuICAgICAgICBzICogTWF0aC5jb3MoKHBoaSArIDQgKiBNYXRoLlBJKSAvIDMpIC0gYiAvIDNcbiAgICBdO1xufTtcbmV4cG9ydCB7IFBvaW50IGFzIFAsIGdldFRpbWVHaXZlblByb2dyZXNzaW9uIGFzIGcgfTtcbiIsImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBnZXRJb25Nb2RlLCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCwgZCBhcyBjcmVhdGVFdmVudCwgZiBhcyByZWFkVGFzaywgdyBhcyB3cml0ZVRhc2sgfSBmcm9tICcuL2NvcmUtZmVlZWZmMGQuanMnO1xuaW1wb3J0IHsgYiBhcyBjb25maWcsIGkgYXMgaXNQbGF0Zm9ybSB9IGZyb20gJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IGMgYXMgY2xhbXAgfSBmcm9tICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0ICcuL2NvbnN0YW50cy0zYzNlMTA5OS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcywgaCBhcyBob3N0Q29udGV4dCB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuaW1wb3J0IHsgYSBhcyBhdHRhY2hDb21wb25lbnQsIGQgYXMgZGV0YWNoQ29tcG9uZW50IH0gZnJvbSAnLi9mcmFtZXdvcmstZGVsZWdhdGUtYzJlMmUxZjQuanMnO1xuaW1wb3J0IHsgdCBhcyB0cmFuc2l0aW9uIH0gZnJvbSAnLi9pbmRleC00ZDkxZjAzYS5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFRpbWVHaXZlblByb2dyZXNzaW9uLCBQIGFzIFBvaW50IH0gZnJvbSAnLi9jdWJpYy1iZXppZXItMjgxMmZkYTMuanMnO1xudmFyIEFwcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBcHAoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIH1cbiAgICBBcHAucHJvdG90eXBlLmNvbXBvbmVudERpZExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJJQyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzSHlicmlkID0gaXNQbGF0Zm9ybSh3aW5kb3csICdoeWJyaWQnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZy5nZXRCb29sZWFuKCdfdGVzdGluZycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi90YXAtY2xpY2stY2EwMGNlN2YuanMnKS50aGVuKGZ1bmN0aW9uIChtb2R1bGUpIHsgcmV0dXJuIG1vZHVsZS5zdGFydFRhcENsaWNrKGNvbmZpZyk7IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmdldEJvb2xlYW4oJ3N0YXR1c1RhcCcsIGlzSHlicmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBpbXBvcnQoJy4vc3RhdHVzLXRhcC0zMmM3MmM0My5qcycpLnRoZW4oZnVuY3Rpb24gKG1vZHVsZSkgeyByZXR1cm4gbW9kdWxlLnN0YXJ0U3RhdHVzVGFwKCk7IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmdldEJvb2xlYW4oJ2lucHV0U2hpbXMnLCBuZWVkSW5wdXRTaGltcygpKSkge1xuICAgICAgICAgICAgICAgICAgICBpbXBvcnQoJy4vaW5wdXQtc2hpbXMtYTRmYzUzYWMuanMnKS50aGVuKGZ1bmN0aW9uIChtb2R1bGUpIHsgcmV0dXJuIG1vZHVsZS5zdGFydElucHV0U2hpbXMoY29uZmlnKTsgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb25maWcuZ2V0Qm9vbGVhbignaGFyZHdhcmVCYWNrQnV0dG9uJywgaXNIeWJyaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi9oYXJkd2FyZS1iYWNrLWJ1dHRvbi01YWZlM2NiMC5qcycpLnRoZW4oZnVuY3Rpb24gKG1vZHVsZSkgeyByZXR1cm4gbW9kdWxlLnN0YXJ0SGFyZHdhcmVCYWNrQnV0dG9uKCk7IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbXBvcnQoJy4vZm9jdXMtdmlzaWJsZS03MDcxM2EwYy5qcycpLnRoZW4oZnVuY3Rpb24gKG1vZHVsZSkgeyByZXR1cm4gbW9kdWxlLnN0YXJ0Rm9jdXNWaXNpYmxlKCk7IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFwcC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IChfYSA9IHt9LFxuICAgICAgICAgICAgICAgIF9hW21vZGVdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYVsnaW9uLXBhZ2UnXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2FbJ2ZvcmNlLXN0YXR1c2Jhci1wYWRkaW5nJ10gPSBjb25maWcuZ2V0Qm9vbGVhbignX2ZvcmNlU3RhdHVzYmFyUGFkZGluZycpLFxuICAgICAgICAgICAgICAgIF9hKSB9KSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXBwLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFwcCwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJodG1sLnBsdC1tb2JpbGUgaW9uLWFwcHstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9aW9uLWFwcC5mb3JjZS1zdGF0dXNiYXItcGFkZGluZ3stLWlvbi1zYWZlLWFyZWEtdG9wOjIwcHh9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBBcHA7XG59KCkpO1xudmFyIG5lZWRJbnB1dFNoaW1zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBpc1BsYXRmb3JtKHdpbmRvdywgJ2lvcycpICYmIGlzUGxhdGZvcm0od2luZG93LCAnbW9iaWxlJyk7XG59O1xudmFyIHJJQyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGlmICgncmVxdWVzdElkbGVDYWxsYmFjaycgaW4gd2luZG93KSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2ssIDMyKTtcbiAgICB9XG59O1xudmFyIEJ1dHRvbnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnV0dG9ucyhob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0cnVlLCBidXR0b25zIHdpbGwgZGlzYXBwZWFyIHdoZW4gaXRzXG4gICAgICAgICAqIHBhcmVudCB0b29sYmFyIGhhcyBmdWxseSBjb2xsYXBzZWQgaWYgdGhlIHRvb2xiYXJcbiAgICAgICAgICogaXMgbm90IHRoZSBmaXJzdCB0b29sYmFyLiBJZiB0aGUgdG9vbGJhciBpcyB0aGVcbiAgICAgICAgICogZmlyc3QgdG9vbGJhciwgdGhlIGJ1dHRvbnMgd2lsbCBiZSBoaWRkZW4gYW5kIHdpbGxcbiAgICAgICAgICogb25seSBiZSBzaG93biBvbmNlIGFsbCB0b29sYmFycyBoYXZlIGZ1bGx5IGNvbGxhcHNlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogT25seSBhcHBsaWVzIGluIGBpb3NgIG1vZGUgd2l0aCBgY29sbGFwc2VgIHNldCB0b1xuICAgICAgICAgKiBgdHJ1ZWAgb24gYGlvbi1oZWFkZXJgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUeXBpY2FsbHkgdXNlZCBmb3IgW0NvbGxhcHNpYmxlIExhcmdlIFRpdGxlc10oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9hcGkvdGl0bGUjY29sbGFwc2libGUtbGFyZ2UtdGl0bGVzKVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb2xsYXBzZSA9IGZhbHNlO1xuICAgIH1cbiAgICBCdXR0b25zLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczogKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hWydidXR0b25zLWNvbGxhcHNlJ10gPSB0aGlzLmNvbGxhcHNlLFxuICAgICAgICAgICAgICAgIF9hKSB9KSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9ucywgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCIuc2MtaW9uLWJ1dHRvbnMtaW9zLWh7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3otaW5kZXg6OTl9LnNjLWlvbi1idXR0b25zLWlvcy1zICBpb24tYnV0dG9uIHstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWJvdHRvbTowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDstLXBhZGRpbmctc3RhcnQ6NXB4Oy0tcGFkZGluZy1lbmQ6NXB4O21hcmdpbi1sZWZ0OjJweDttYXJnaW4tcmlnaHQ6MnB4O2hlaWdodDozMnB4O2ZvbnQtc2l6ZToxN3B4O2ZvbnQtd2VpZ2h0OjQwMH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LnNjLWlvbi1idXR0b25zLWlvcy1zICBpb24tYnV0dG9uIHttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MnB4Oy13ZWJraXQtbWFyZ2luLWVuZDoycHg7bWFyZ2luLWlubGluZS1lbmQ6MnB4fX0uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgIGlvbi1idXR0b246bm90KC5idXR0b24tcm91bmQpIHstLWJvcmRlci1yYWRpdXM6NHB4fS5zYy1pb24tYnV0dG9ucy1pb3MtaC5pb24tY29sb3Iuc2MtaW9uLWJ1dHRvbnMtaW9zLXMgIC5idXR0b24gLCAuaW9uLWNvbG9yIC5zYy1pb24tYnV0dG9ucy1pb3MtaC5zYy1pb24tYnV0dG9ucy1pb3MtcyAgLmJ1dHRvbiB7LS1jb2xvcjppbml0aWFsOy0tYm9yZGVyLWNvbG9yOmluaXRpYWw7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6cmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwwLjEpfS5zYy1pb24tYnV0dG9ucy1pb3MtaC5pb24tY29sb3Iuc2MtaW9uLWJ1dHRvbnMtaW9zLXMgIC5idXR0b24tc29saWQgLCAuaW9uLWNvbG9yIC5zYy1pb24tYnV0dG9ucy1pb3MtaC5zYy1pb24tYnV0dG9ucy1pb3MtcyAgLmJ1dHRvbi1zb2xpZCB7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCk7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLDAuOCk7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6cmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwwLjYpOy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpOy0tY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9LnNjLWlvbi1idXR0b25zLWlvcy1oLmlvbi1jb2xvci5zYy1pb24tYnV0dG9ucy1pb3MtcyAgLmJ1dHRvbi1jbGVhciAsIC5pb24tY29sb3IgLnNjLWlvbi1idXR0b25zLWlvcy1oLnNjLWlvbi1idXR0b25zLWlvcy1zICAuYnV0dG9uLWNsZWFyIHstLWJhY2tncm91bmQtZm9jdXNlZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLDAuMSk7LS1jb2xvci1hY3RpdmF0ZWQ6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KTstLWNvbG9yLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX0uc2MtaW9uLWJ1dHRvbnMtaW9zLWguaW9uLWNvbG9yLnNjLWlvbi1idXR0b25zLWlvcy1zICAuYnV0dG9uLW91dGxpbmUgLCAuaW9uLWNvbG9yIC5zYy1pb24tYnV0dG9ucy1pb3MtaC5zYy1pb24tYnV0dG9ucy1pb3MtcyAgLmJ1dHRvbi1vdXRsaW5lIHstLWJhY2tncm91bmQtYWN0aXZhdGVkOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCk7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6cmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwwLjEpOy0tY29sb3ItYWN0aXZhdGVkOnZhcigtLWlvbi1jb2xvci1iYXNlKTstLWNvbG9yLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX0uc2MtaW9uLWJ1dHRvbnMtaW9zLWhpb24tdG9vbGJhcjpub3QoLmlvbi1jb2xvcikuc2MtaW9uLWJ1dHRvbnMtaW9zLXMgIC5idXR0b24tY2xlYXIgLCBpb24tdG9vbGJhcjpub3QoLmlvbi1jb2xvcikgLnNjLWlvbi1idXR0b25zLWlvcy1oLnNjLWlvbi1idXR0b25zLWlvcy1zICAuYnV0dG9uLWNsZWFyIHstLWNvbG9yOnZhcigtLWlvbi10b29sYmFyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpKTstLWNvbG9yLWFjdGl2YXRlZDp2YXIoLS1pb24tdG9vbGJhci1jb2xvci1hY3RpdmF0ZWQsdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikpOy0tY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tdG9vbGJhci1jb2xvcix2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKSl9LnNjLWlvbi1idXR0b25zLWlvcy1oaW9uLXRvb2xiYXI6bm90KC5pb24tY29sb3IpLnNjLWlvbi1idXR0b25zLWlvcy1zICAuYnV0dG9uLW91dGxpbmUgLCBpb24tdG9vbGJhcjpub3QoLmlvbi1jb2xvcikgLnNjLWlvbi1idXR0b25zLWlvcy1oLnNjLWlvbi1idXR0b25zLWlvcy1zICAuYnV0dG9uLW91dGxpbmUgey0tY29sb3I6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikpOy0tY29sb3ItYWN0aXZhdGVkOnZhcigtLWlvbi10b29sYmFyLWJhY2tncm91bmQsdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsI2ZmZikpOy0tY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tdG9vbGJhci1jb2xvcix2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKSk7LS1ib3JkZXItY29sb3I6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikpOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikpfS5zYy1pb24tYnV0dG9ucy1pb3MtaGlvbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKS5zYy1pb24tYnV0dG9ucy1pb3MtcyAgLmJ1dHRvbi1zb2xpZCAsIGlvbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKSAuc2MtaW9uLWJ1dHRvbnMtaW9zLWguc2MtaW9uLWJ1dHRvbnMtaW9zLXMgIC5idXR0b24tc29saWQgey0tY29sb3I6dmFyKC0taW9uLXRvb2xiYXItYmFja2dyb3VuZCx2YXIoLS1pb24tY29sb3Itc3RlcC01MCwjZmZmKSk7LS1jb2xvci1hY3RpdmF0ZWQ6dmFyKC0taW9uLXRvb2xiYXItYmFja2dyb3VuZCx2YXIoLS1pb24tY29sb3Itc3RlcC01MCwjZmZmKSk7LS1jb2xvci1mb2N1c2VkOnZhcigtLWlvbi10b29sYmFyLWJhY2tncm91bmQsdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAsI2ZmZikpOy0tYmFja2dyb3VuZDp2YXIoLS1pb24tdG9vbGJhci1jb2xvcix2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKSk7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS1pb24tdG9vbGJhci1jb2xvci1hY3RpdmF0ZWQsdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsIzMxNzFlMCkpOy0tYmFja2dyb3VuZC1mb2N1c2VkOnZhcigtLWlvbi10b29sYmFyLWNvbG9yLWFjdGl2YXRlZCx2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSwjMzE3MWUwKSl9LnNjLWlvbi1idXR0b25zLWlvcy1zICBpb24taWNvbltzbG90PXN0YXJ0XSB7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO21hcmdpbi1yaWdodDouM2VtO2ZvbnQtc2l6ZToyNHB4O2xpbmUtaGVpZ2h0Oi42N31cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LnNjLWlvbi1idXR0b25zLWlvcy1zICBpb24taWNvbltzbG90PXN0YXJ0XSB7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLWVuZDouM2VtO21hcmdpbi1pbmxpbmUtZW5kOi4zZW19fS5zYy1pb24tYnV0dG9ucy1pb3MtcyAgaW9uLWljb25bc2xvdD1lbmRdIHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7bWFyZ2luLWxlZnQ6LjRlbTtmb250LXNpemU6MjRweDtsaW5lLWhlaWdodDouNjd9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5zYy1pb24tYnV0dG9ucy1pb3MtcyAgaW9uLWljb25bc2xvdD1lbmRdIHttYXJnaW4tbGVmdDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDouNGVtO21hcmdpbi1pbmxpbmUtc3RhcnQ6LjRlbX19LnNjLWlvbi1idXR0b25zLWlvcy1zICBpb24taWNvbltzbG90PWljb24tb25seV0ge3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO2ZvbnQtc2l6ZTozMXB4O2xpbmUtaGVpZ2h0Oi42N31cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEJ1dHRvbnM7XG59KCkpO1xudmFyIENvbnRlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMShob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0U2Nyb2xsID0gMDtcbiAgICAgICAgdGhpcy5xdWV1ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jVG9wID0gLTE7XG4gICAgICAgIHRoaXMuY0JvdHRvbSA9IC0xO1xuICAgICAgICB0aGlzLm1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICAvLyBEZXRhaWwgaXMgdXNlZCBpbiBhIGhvdCBsb29wIGluIHRoZSBzY3JvbGwgZXZlbnQsIGJ5IGFsbG9jYXRpbmcgaXQgaGVyZVxuICAgICAgICAvLyBWOCB3aWxsIGJlIGFibGUgdG8gaW5saW5lIGFueSByZWFkL3dyaXRlIHRvIGl0IHNpbmNlIGl0J3MgYSBtb25vbW9ycGhpYyBjbGFzcy5cbiAgICAgICAgLy8gaHR0cHM6Ly9tcmFsZS5waC9ibG9nLzIwMTUvMDEvMTEvd2hhdHMtdXAtd2l0aC1tb25vbW9ycGhpc20uaHRtbFxuICAgICAgICB0aGlzLmRldGFpbCA9IHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgICAgICAgICB0eXBlOiAnc2Nyb2xsJyxcbiAgICAgICAgICAgIGV2ZW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzdGFydFg6IDAsXG4gICAgICAgICAgICBzdGFydFk6IDAsXG4gICAgICAgICAgICBzdGFydFRpbWVTdGFtcDogMCxcbiAgICAgICAgICAgIGN1cnJlbnRYOiAwLFxuICAgICAgICAgICAgY3VycmVudFk6IDAsXG4gICAgICAgICAgICB2ZWxvY2l0eVg6IDAsXG4gICAgICAgICAgICB2ZWxvY2l0eVk6IDAsXG4gICAgICAgICAgICBkZWx0YVg6IDAsXG4gICAgICAgICAgICBkZWx0YVk6IDAsXG4gICAgICAgICAgICB0aW1lU3RhbXA6IDAsXG4gICAgICAgICAgICBkYXRhOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBpc1Njcm9sbGluZzogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGNvbnRlbnQgd2lsbCBzY3JvbGwgYmVoaW5kIHRoZSBoZWFkZXJzXG4gICAgICAgICAqIGFuZCBmb290ZXJzLiBUaGlzIGVmZmVjdCBjYW4gZWFzaWx5IGJlIHNlZW4gYnkgc2V0dGluZyB0aGUgdG9vbGJhclxuICAgICAgICAgKiB0byB0cmFuc3BhcmVudC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZnVsbHNjcmVlbiA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgeW91IHdhbnQgdG8gZW5hYmxlIHRoZSBjb250ZW50IHNjcm9sbGluZyBpbiB0aGUgWCBheGlzLCBzZXQgdGhpcyBwcm9wZXJ0eSB0byBgdHJ1ZWAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNjcm9sbFggPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHlvdSB3YW50IHRvIGRpc2FibGUgdGhlIGNvbnRlbnQgc2Nyb2xsaW5nIGluIHRoZSBZIGF4aXMsIHNldCB0aGlzIHByb3BlcnR5IHRvIGBmYWxzZWAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNjcm9sbFkgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQmVjYXVzZSBvZiBwZXJmb3JtYW5jZSByZWFzb25zLCBpb25TY3JvbGwgZXZlbnRzIGFyZSBkaXNhYmxlZCBieSBkZWZhdWx0LCBpbiBvcmRlciB0byBlbmFibGUgdGhlbVxuICAgICAgICAgKiBhbmQgc3RhcnQgbGlzdGVuaW5nIGZyb20gKGlvblNjcm9sbCksIHNldCB0aGlzIHByb3BlcnR5IHRvIGB0cnVlYC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2Nyb2xsRXZlbnRzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW9uU2Nyb2xsU3RhcnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblNjcm9sbFN0YXJ0XCIsIDcpO1xuICAgICAgICB0aGlzLmlvblNjcm9sbCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU2Nyb2xsXCIsIDcpO1xuICAgICAgICB0aGlzLmlvblNjcm9sbEVuZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU2Nyb2xsRW5kXCIsIDcpO1xuICAgIH1cbiAgICBjbGFzc18xLnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5vblNjcm9sbEVuZCgpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29tcG9uZW50RGlkTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc2hvdWxkRm9yY2VPdmVyc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBmb3JjZU92ZXJzY3JvbGwgPSBfYS5mb3JjZU92ZXJzY3JvbGwsIG1vZGUgPSBfYS5tb2RlO1xuICAgICAgICByZXR1cm4gZm9yY2VPdmVyc2Nyb2xsID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gbW9kZSA9PT0gJ2lvcycgJiYgaXNQbGF0Zm9ybSgnaW9zJylcbiAgICAgICAgICAgIDogZm9yY2VPdmVyc2Nyb2xsO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5mdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICByZWFkVGFzayh0aGlzLnJlYWREaW1lbnNpb25zLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY1RvcCAhPT0gMCB8fCB0aGlzLmNCb3R0b20gIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY1RvcCA9IHRoaXMuY0JvdHRvbSA9IDA7XG4gICAgICAgICAgICB0aGlzLmVsLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlYWREaW1lbnNpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcGFnZSA9IGdldFBhZ2VFbGVtZW50KHRoaXMuZWwpO1xuICAgICAgICB2YXIgdG9wID0gTWF0aC5tYXgodGhpcy5lbC5vZmZzZXRUb3AsIDApO1xuICAgICAgICB2YXIgYm90dG9tID0gTWF0aC5tYXgocGFnZS5vZmZzZXRIZWlnaHQgLSB0b3AgLSB0aGlzLmVsLm9mZnNldEhlaWdodCwgMCk7XG4gICAgICAgIHZhciBkaXJ0eSA9IHRvcCAhPT0gdGhpcy5jVG9wIHx8IGJvdHRvbSAhPT0gdGhpcy5jQm90dG9tO1xuICAgICAgICBpZiAoZGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMuY1RvcCA9IHRvcDtcbiAgICAgICAgICAgIHRoaXMuY0JvdHRvbSA9IGJvdHRvbTtcbiAgICAgICAgICAgIHRoaXMuZWwuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25TY3JvbGwgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHRpbWVTdGFtcCA9IERhdGUubm93KCk7XG4gICAgICAgIHZhciBzaG91bGRTdGFydCA9ICF0aGlzLmlzU2Nyb2xsaW5nO1xuICAgICAgICB0aGlzLmxhc3RTY3JvbGwgPSB0aW1lU3RhbXA7XG4gICAgICAgIGlmIChzaG91bGRTdGFydCkge1xuICAgICAgICAgICAgdGhpcy5vblNjcm9sbFN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnF1ZXVlZCAmJiB0aGlzLnNjcm9sbEV2ZW50cykge1xuICAgICAgICAgICAgdGhpcy5xdWV1ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVhZFRhc2soZnVuY3Rpb24gKHRzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucXVldWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGV0YWlsLmV2ZW50ID0gZXY7XG4gICAgICAgICAgICAgICAgdXBkYXRlU2Nyb2xsRGV0YWlsKF90aGlzLmRldGFpbCwgX3RoaXMuc2Nyb2xsRWwsIHRzLCBzaG91bGRTdGFydCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuaW9uU2Nyb2xsLmVtaXQoX3RoaXMuZGV0YWlsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGVsZW1lbnQgd2hlcmUgdGhlIGFjdHVhbCBzY3JvbGxpbmcgdGFrZXMgcGxhY2UuXG4gICAgICogVGhpcyBlbGVtZW50IGNhbiBiZSB1c2VkIHRvIHN1YnNjcmliZSB0byBgc2Nyb2xsYCBldmVudHMgb3IgbWFudWFsbHkgbW9kaWZ5XG4gICAgICogYHNjcm9sbFRvcGAuIEhvd2V2ZXIsIGl0J3MgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBBUEkgcHJvdmlkZWQgYnkgYGlvbi1jb250ZW50YDpcbiAgICAgKlxuICAgICAqIGkuZS4gVXNpbmcgYGlvblNjcm9sbGAsIGBpb25TY3JvbGxTdGFydGAsIGBpb25TY3JvbGxFbmRgIGZvciBzY3JvbGxpbmcgZXZlbnRzXG4gICAgICogYW5kIGBzY3JvbGxUb1BvaW50KClgIHRvIHNjcm9sbCB0aGUgY29udGVudCBpbnRvIGEgY2VydGFpbiBwb2ludC5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5nZXRTY3JvbGxFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2Nyb2xsRWwpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRvIHRoZSB0b3Agb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiBUaGUgYW1vdW50IG9mIHRpbWUgdG8gdGFrZSBzY3JvbGxpbmcgdG8gdGhlIHRvcC4gRGVmYXVsdHMgdG8gYDBgLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnNjcm9sbFRvVG9wID0gZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgIGlmIChkdXJhdGlvbiA9PT0gdm9pZCAwKSB7IGR1cmF0aW9uID0gMDsgfVxuICAgICAgICByZXR1cm4gdGhpcy5zY3JvbGxUb1BvaW50KHVuZGVmaW5lZCwgMCwgZHVyYXRpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRvIHRoZSBib3R0b20gb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiBUaGUgYW1vdW50IG9mIHRpbWUgdG8gdGFrZSBzY3JvbGxpbmcgdG8gdGhlIGJvdHRvbS4gRGVmYXVsdHMgdG8gYDBgLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnNjcm9sbFRvQm90dG9tID0gZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgIGlmIChkdXJhdGlvbiA9PT0gdm9pZCAwKSB7IGR1cmF0aW9uID0gMDsgfVxuICAgICAgICB2YXIgeSA9IHRoaXMuc2Nyb2xsRWwuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5zY3JvbGxFbC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRvUG9pbnQodW5kZWZpbmVkLCB5LCBkdXJhdGlvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTY3JvbGwgYnkgYSBzcGVjaWZpZWQgWC9ZIGRpc3RhbmNlIGluIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geCBUaGUgYW1vdW50IHRvIHNjcm9sbCBieSBvbiB0aGUgaG9yaXpvbnRhbCBheGlzLlxuICAgICAqIEBwYXJhbSB5IFRoZSBhbW91bnQgdG8gc2Nyb2xsIGJ5IG9uIHRoZSB2ZXJ0aWNhbCBheGlzLlxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiBUaGUgYW1vdW50IG9mIHRpbWUgdG8gdGFrZSBzY3JvbGxpbmcgYnkgdGhhdCBhbW91bnQuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc2Nyb2xsQnlQb2ludCA9IGZ1bmN0aW9uICh4LCB5LCBkdXJhdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5zY3JvbGxUb1BvaW50KHggKyB0aGlzLnNjcm9sbEVsLnNjcm9sbExlZnQsIHkgKyB0aGlzLnNjcm9sbEVsLnNjcm9sbFRvcCwgZHVyYXRpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRvIGEgc3BlY2lmaWVkIFgvWSBsb2NhdGlvbiBpbiB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHggVGhlIHBvaW50IHRvIHNjcm9sbCB0byBvbiB0aGUgaG9yaXpvbnRhbCBheGlzLlxuICAgICAqIEBwYXJhbSB5IFRoZSBwb2ludCB0byBzY3JvbGwgdG8gb24gdGhlIHZlcnRpY2FsIGF4aXMuXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIFRoZSBhbW91bnQgb2YgdGltZSB0byB0YWtlIHNjcm9sbGluZyB0byB0aGF0IHBvaW50LiBEZWZhdWx0cyB0byBgMGAuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc2Nyb2xsVG9Qb2ludCA9IGZ1bmN0aW9uICh4LCB5LCBkdXJhdGlvbikge1xuICAgICAgICBpZiAoZHVyYXRpb24gPT09IHZvaWQgMCkgeyBkdXJhdGlvbiA9IDA7IH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVsLCByZXNvbHZlLCBzdGFydFRpbWUsIHByb21pc2UsIGZyb21ZLCBmcm9tWCwgZGVsdGFZLCBkZWx0YVgsIHN0ZXA7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgZWwgPSB0aGlzLnNjcm9sbEVsO1xuICAgICAgICAgICAgICAgIGlmIChkdXJhdGlvbiA8IDMyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh5ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNjcm9sbFRvcCA9IHk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSAwO1xuICAgICAgICAgICAgICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocikgeyByZXR1cm4gcmVzb2x2ZSA9IHI7IH0pO1xuICAgICAgICAgICAgICAgIGZyb21ZID0gZWwuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgIGZyb21YID0gZWwuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICBkZWx0YVkgPSB5ICE9IG51bGwgPyB5IC0gZnJvbVkgOiAwO1xuICAgICAgICAgICAgICAgIGRlbHRhWCA9IHggIT0gbnVsbCA/IHggLSBmcm9tWCA6IDA7XG4gICAgICAgICAgICAgICAgc3RlcCA9IGZ1bmN0aW9uICh0aW1lU3RhbXApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmVhclRpbWUgPSBNYXRoLm1pbigxLCAoKHRpbWVTdGFtcCAtIHN0YXJ0VGltZSkgLyBkdXJhdGlvbikpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVhc2VkVCA9IE1hdGgucG93KGxpbmVhclRpbWUsIDMpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlbHRhWSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuc2Nyb2xsVG9wID0gTWF0aC5mbG9vcigoZWFzZWRUICogZGVsdGFZKSArIGZyb21ZKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsdGFYICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gTWF0aC5mbG9vcigoZWFzZWRUICogZGVsdGFYKSArIGZyb21YKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZWFzZWRUIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG8gbm90IHVzZSBEb21Db250cm9sbGVyIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG11c3QgdXNlIG5hdGl2ZVJhZiBpbiBvcmRlciB0byBmaXJlIGluIHRoZSBuZXh0IGZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgYXMgYW55XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIGNoaWxsIG91dCBmb3IgYSBmcmFtZSBmaXJzdFxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAodHMpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gdHM7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAodHMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBwcm9taXNlXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9uU2Nyb2xsU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmlvblNjcm9sbFN0YXJ0LmVtaXQoe1xuICAgICAgICAgICAgaXNTY3JvbGxpbmc6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLndhdGNoRG9nKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMud2F0Y2hEb2cpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdhdGNoZG9nXG4gICAgICAgIHRoaXMud2F0Y2hEb2cgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMubGFzdFNjcm9sbCA8IERhdGUubm93KCkgLSAxMjApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vblNjcm9sbEVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25TY3JvbGxFbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy53YXRjaERvZyk7XG4gICAgICAgIHRoaXMud2F0Y2hEb2cgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5pc1Njcm9sbGluZykge1xuICAgICAgICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pb25TY3JvbGxFbmQuZW1pdCh7XG4gICAgICAgICAgICAgICAgaXNTY3JvbGxpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYiA9IHRoaXMsIHNjcm9sbFggPSBfYi5zY3JvbGxYLCBzY3JvbGxZID0gX2Iuc2Nyb2xsWTtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICB2YXIgZm9yY2VPdmVyc2Nyb2xsID0gdGhpcy5zaG91bGRGb3JjZU92ZXJzY3JvbGwoKTtcbiAgICAgICAgdmFyIHRyYW5zaXRpb25TaGFkb3cgPSAobW9kZSA9PT0gJ2lvcycgJiYgY29uZmlnLmdldEJvb2xlYW4oJ2V4cGVyaW1lbnRhbFRyYW5zaXRpb25TaGFkb3cnLCB0cnVlKSk7XG4gICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yKSksIChfYSA9IHt9LCBfYVttb2RlXSA9IHRydWUsIF9hWydjb250ZW50LXNpemluZyddID0gaG9zdENvbnRleHQoJ2lvbi1wb3BvdmVyJywgdGhpcy5lbCksIF9hWydvdmVyc2Nyb2xsJ10gPSBmb3JjZU92ZXJzY3JvbGwsIF9hKSksIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgJy0tb2Zmc2V0LXRvcCc6IHRoaXMuY1RvcCArIFwicHhcIixcbiAgICAgICAgICAgICAgICAnLS1vZmZzZXQtYm90dG9tJzogdGhpcy5jQm90dG9tICsgXCJweFwiLFxuICAgICAgICAgICAgfSB9LCBoKFwibWFpblwiLCB7IGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgJ2lubmVyLXNjcm9sbCc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ3Njcm9sbC14Jzogc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAnc2Nyb2xsLXknOiBzY3JvbGxZLFxuICAgICAgICAgICAgICAgICdvdmVyc2Nyb2xsJzogKHNjcm9sbFggfHwgc2Nyb2xsWSkgJiYgZm9yY2VPdmVyc2Nyb2xsXG4gICAgICAgICAgICB9LCByZWY6IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gX3RoaXMuc2Nyb2xsRWwgPSBlbDsgfSwgb25TY3JvbGw6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMub25TY3JvbGwoZXYpOyB9IH0sIGgoXCJzbG90XCIsIG51bGwpKSwgdHJhbnNpdGlvblNoYWRvdyA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IFwidHJhbnNpdGlvbi1lZmZlY3RcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidHJhbnNpdGlvbi1jb3ZlclwiIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidHJhbnNpdGlvbi1zaGFkb3dcIiB9KSkpIDogbnVsbCwgaChcInNsb3RcIiwgeyBuYW1lOiBcImZpeGVkXCIgfSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEsIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiOmhvc3R7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpOy0tY29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCk7LS1wYWRkaW5nLXRvcDowcHg7LS1wYWRkaW5nLWJvdHRvbTowcHg7LS1wYWRkaW5nLXN0YXJ0OjBweDstLXBhZGRpbmctZW5kOjBweDstLWtleWJvYXJkLW9mZnNldDowcHg7LS1vZmZzZXQtdG9wOjBweDstLW9mZnNldC1ib3R0b206MHB4Oy0tb3ZlcmZsb3c6YXV0bztkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4OjE7ZmxleDoxO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWFyZ2luOjAhaW1wb3J0YW50O3BhZGRpbmc6MCFpbXBvcnRhbnQ7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpO2NvbnRhaW46c2l6ZSBzdHlsZX06aG9zdCguaW9uLWNvbG9yKSAuaW5uZXItc2Nyb2xse2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Omhvc3QoLm91dGVyLWNvbnRlbnQpey0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC01MCwjZjJmMmYyKX0uaW5uZXItc2Nyb2xse2xlZnQ6MDtyaWdodDowO3RvcDpjYWxjKHZhcigtLW9mZnNldC10b3ApICogLTEpO2JvdHRvbTpjYWxjKHZhcigtLW9mZnNldC1ib3R0b20pICogLTEpO3BhZGRpbmctbGVmdDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLXJpZ2h0OnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDpjYWxjKHZhcigtLXBhZGRpbmctdG9wKSArIHZhcigtLW9mZnNldC10b3ApKTtwYWRkaW5nLWJvdHRvbTpjYWxjKHZhcigtLXBhZGRpbmctYm90dG9tKSArIHZhcigtLWtleWJvYXJkLW9mZnNldCkgKyB2YXIoLS1vZmZzZXQtYm90dG9tKSk7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb2xvcjp2YXIoLS1jb2xvcik7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OmhpZGRlbn1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmlubmVyLXNjcm9sbHtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKX19LnNjcm9sbC14LC5zY3JvbGwteXstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDt3aWxsLWNoYW5nZTpzY3JvbGwtcG9zaXRpb247LW1zLXNjcm9sbC1jaGFpbmluZzpub25lO292ZXJzY3JvbGwtYmVoYXZpb3I6Y29udGFpbn0uc2Nyb2xsLXl7LW1zLXRvdWNoLWFjdGlvbjpwYW4teTt0b3VjaC1hY3Rpb246cGFuLXk7b3ZlcmZsb3cteTp2YXIoLS1vdmVyZmxvdyl9LnNjcm9sbC14ey1tcy10b3VjaC1hY3Rpb246cGFuLXg7dG91Y2gtYWN0aW9uOnBhbi14O292ZXJmbG93LXg6dmFyKC0tb3ZlcmZsb3cpfS5zY3JvbGwteC5zY3JvbGwteXstbXMtdG91Y2gtYWN0aW9uOmF1dG87dG91Y2gtYWN0aW9uOmF1dG99Lm92ZXJzY3JvbGw6YWZ0ZXIsLm92ZXJzY3JvbGw6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweDtoZWlnaHQ6MXB4O2NvbnRlbnQ6XFxcIlxcXCJ9Lm92ZXJzY3JvbGw6YmVmb3Jle2JvdHRvbTotMXB4fS5vdmVyc2Nyb2xsOmFmdGVye3RvcDotMXB4fTpob3N0KC5jb250ZW50LXNpemluZyl7Y29udGFpbjpub25lfTpob3N0KC5jb250ZW50LXNpemluZykgLmlubmVyLXNjcm9sbHtwb3NpdGlvbjpyZWxhdGl2ZX0udHJhbnNpdGlvbi1lZmZlY3R7bGVmdDotMTAwJTtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZX0udHJhbnNpdGlvbi1jb3ZlciwudHJhbnNpdGlvbi1lZmZlY3R7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0udHJhbnNpdGlvbi1jb3ZlcntyaWdodDowO2JhY2tncm91bmQ6IzAwMDtvcGFjaXR5Oi4xfS50cmFuc2l0aW9uLXNoYWRvd3tkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7d2lkdGg6MTBweDtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLWltYWdlOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJnQUFBQWdDQVlBQUFBSVhyZzRBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlocFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UUTFJRGM1TGpFMk16UTVPU3dnTWpBeE9DOHdPQzh4TXkweE5qbzBNRG95TWlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElESXdNVGtnS0UxaFkybHVkRzl6YUNraUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk1URTNNRGd6UmtRNVFUa3lNVEZGT1VFd056UTVNa0pGUkVFMU5VWTJNalFpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2TVRFM01EZ3pSa1U1UVRreU1URkZPVUV3TnpRNU1rSkZSRUUxTlVZMk1qUWlQaUE4ZUcxd1RVMDZSR1Z5YVhabFpFWnliMjBnYzNSU1pXWTZhVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRG94TVRjd09ETkdRamxCT1RJeE1VVTVRVEEzTkRreVFrVkVRVFUxUmpZeU5DSWdjM1JTWldZNlpHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEb3hNVGN3T0ROR1F6bEJPVEl4TVVVNVFUQTNORGt5UWtWRVFUVTFSall5TkNJdlBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1BtZVBFdVFBQUFCTlNVUkJWSGphWXZ6Ly96OERJeEF3TURBd0FUR01obUZtUERRdU9TWmtzMEFNbW9KQmFRSGprUGZCMExmZy8yZ1FqVm93K0hQeS95SHZnOUdpWWpRZmpNYkJxQVdqRmd5LzRob2d3QURZcXdkenh5NUJ1d0FBQUFCSlJVNUVya0pnZ2c9PSk7YmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXk7YmFja2dyb3VuZC1zaXplOjEwcHggMTZweH1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzE7XG59KCkpO1xudmFyIGdldFBhcmVudEVsZW1lbnQgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoZWwucGFyZW50RWxlbWVudCkge1xuICAgICAgICAvLyBub3JtYWwgZWxlbWVudCB3aXRoIGEgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgcmV0dXJuIGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIGlmIChlbC5wYXJlbnROb2RlICYmIGVsLnBhcmVudE5vZGUuaG9zdCkge1xuICAgICAgICAvLyBzaGFkb3cgZG9tJ3MgZG9jdW1lbnQgZnJhZ21lbnRcbiAgICAgICAgcmV0dXJuIGVsLnBhcmVudE5vZGUuaG9zdDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xudmFyIGdldFBhZ2VFbGVtZW50ID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgdmFyIHRhYnMgPSBlbC5jbG9zZXN0KCdpb24tdGFicycpO1xuICAgIGlmICh0YWJzKSB7XG4gICAgICAgIHJldHVybiB0YWJzO1xuICAgIH1cbiAgICB2YXIgcGFnZSA9IGVsLmNsb3Nlc3QoJ2lvbi1hcHAsaW9uLXBhZ2UsLmlvbi1wYWdlLHBhZ2UtaW5uZXInKTtcbiAgICBpZiAocGFnZSkge1xuICAgICAgICByZXR1cm4gcGFnZTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFBhcmVudEVsZW1lbnQoZWwpO1xufTtcbi8vICoqKioqKioqIERPTSBSRUFEICoqKioqKioqKioqKioqKipcbnZhciB1cGRhdGVTY3JvbGxEZXRhaWwgPSBmdW5jdGlvbiAoZGV0YWlsLCBlbCwgdGltZXN0YW1wLCBzaG91bGRTdGFydCkge1xuICAgIHZhciBwcmV2WCA9IGRldGFpbC5jdXJyZW50WDtcbiAgICB2YXIgcHJldlkgPSBkZXRhaWwuY3VycmVudFk7XG4gICAgdmFyIHByZXZUID0gZGV0YWlsLnRpbWVTdGFtcDtcbiAgICB2YXIgY3VycmVudFggPSBlbC5zY3JvbGxMZWZ0O1xuICAgIHZhciBjdXJyZW50WSA9IGVsLnNjcm9sbFRvcDtcbiAgICB2YXIgdGltZURlbHRhID0gdGltZXN0YW1wIC0gcHJldlQ7XG4gICAgaWYgKHNob3VsZFN0YXJ0KSB7XG4gICAgICAgIC8vIHJlbWVtYmVyIHRoZSBzdGFydCBwb3NpdGlvbnNcbiAgICAgICAgZGV0YWlsLnN0YXJ0VGltZVN0YW1wID0gdGltZXN0YW1wO1xuICAgICAgICBkZXRhaWwuc3RhcnRYID0gY3VycmVudFg7XG4gICAgICAgIGRldGFpbC5zdGFydFkgPSBjdXJyZW50WTtcbiAgICAgICAgZGV0YWlsLnZlbG9jaXR5WCA9IGRldGFpbC52ZWxvY2l0eVkgPSAwO1xuICAgIH1cbiAgICBkZXRhaWwudGltZVN0YW1wID0gdGltZXN0YW1wO1xuICAgIGRldGFpbC5jdXJyZW50WCA9IGRldGFpbC5zY3JvbGxMZWZ0ID0gY3VycmVudFg7XG4gICAgZGV0YWlsLmN1cnJlbnRZID0gZGV0YWlsLnNjcm9sbFRvcCA9IGN1cnJlbnRZO1xuICAgIGRldGFpbC5kZWx0YVggPSBjdXJyZW50WCAtIGRldGFpbC5zdGFydFg7XG4gICAgZGV0YWlsLmRlbHRhWSA9IGN1cnJlbnRZIC0gZGV0YWlsLnN0YXJ0WTtcbiAgICBpZiAodGltZURlbHRhID4gMCAmJiB0aW1lRGVsdGEgPCAxMDApIHtcbiAgICAgICAgdmFyIHZlbG9jaXR5WCA9IChjdXJyZW50WCAtIHByZXZYKSAvIHRpbWVEZWx0YTtcbiAgICAgICAgdmFyIHZlbG9jaXR5WSA9IChjdXJyZW50WSAtIHByZXZZKSAvIHRpbWVEZWx0YTtcbiAgICAgICAgZGV0YWlsLnZlbG9jaXR5WCA9IHZlbG9jaXR5WCAqIDAuNyArIGRldGFpbC52ZWxvY2l0eVggKiAwLjM7XG4gICAgICAgIGRldGFpbC52ZWxvY2l0eVkgPSB2ZWxvY2l0eVkgKiAwLjcgKyBkZXRhaWwudmVsb2NpdHlZICogMC4zO1xuICAgIH1cbn07XG52YXIgRm9vdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvb3Rlcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBmb290ZXIgd2lsbCBiZSB0cmFuc2x1Y2VudC5cbiAgICAgICAgICogT25seSBhcHBsaWVzIHdoZW4gdGhlIG1vZGUgaXMgYFwiaW9zXCJgIGFuZCB0aGUgZGV2aWNlIHN1cHBvcnRzXG4gICAgICAgICAqIFtgYmFja2Ryb3AtZmlsdGVyYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tkcm9wLWZpbHRlciNCcm93c2VyX2NvbXBhdGliaWxpdHkpLlxuICAgICAgICAgKlxuICAgICAgICAgKiBOb3RlOiBJbiBvcmRlciB0byBzY3JvbGwgY29udGVudCBiZWhpbmQgdGhlIGZvb3RlciwgdGhlIGBmdWxsc2NyZWVuYFxuICAgICAgICAgKiBhdHRyaWJ1dGUgbmVlZHMgdG8gYmUgc2V0IG9uIHRoZSBjb250ZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmFuc2x1Y2VudCA9IGZhbHNlO1xuICAgIH1cbiAgICBGb290ZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHZhciB0cmFuc2x1Y2VudCA9IHRoaXMudHJhbnNsdWNlbnQ7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IHJvbGU6IFwiY29udGVudGluZm9cIiwgY2xhc3M6IChfYSA9IHt9LFxuICAgICAgICAgICAgICAgIF9hW21vZGVdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyBVc2VkIGludGVybmFsbHkgZm9yIHN0eWxpbmdcbiAgICAgICAgICAgICAgICBfYVtcImZvb3Rlci1cIiArIG1vZGVdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYVtcImZvb3Rlci10cmFuc2x1Y2VudFwiXSA9IHRyYW5zbHVjZW50LFxuICAgICAgICAgICAgICAgIF9hW1wiZm9vdGVyLXRyYW5zbHVjZW50LVwiICsgbW9kZV0gPSB0cmFuc2x1Y2VudCxcbiAgICAgICAgICAgICAgICBfYSkgfSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvb3RlciwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJpb24tZm9vdGVye2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtb3JkZXI6MTtvcmRlcjoxO3dpZHRoOjEwMCU7ei1pbmRleDoxMH1pb24tZm9vdGVyIGlvbi10b29sYmFyOmxhc3QtY2hpbGR7cGFkZGluZy1ib3R0b206dmFyKC0taW9uLXNhZmUtYXJlYS1ib3R0b20sMCl9LmZvb3Rlci1pb3MgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGR7LS1ib3JkZXItd2lkdGg6MC41NXB4IDAgMH0uZm9vdGVyLWlvc1tuby1ib3JkZXJdIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkey0tYm9yZGVyLXdpZHRoOjB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpibHVyKDApKSBvciAoYmFja2Ryb3AtZmlsdGVyOmJsdXIoMCkpKXsuZm9vdGVyLXRyYW5zbHVjZW50LWlvc3std2Via2l0LWJhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO2JhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpfS5mb290ZXItdHJhbnNsdWNlbnQtaW9zIGlvbi10b29sYmFyey0tb3BhY2l0eTouODstLWJhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpfX1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEZvb3Rlcjtcbn0oKSk7XG52YXIgVFJBTlNJVElPTiA9ICdhbGwgMC4ycyBlYXNlLWluLW91dCc7XG52YXIgY2xvbmVFbGVtZW50ID0gZnVuY3Rpb24gKHRhZ05hbWUpIHtcbiAgICB2YXIgZ2V0Q2FjaGVkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhZ05hbWUgKyBcIi5pb24tY2xvbmVkLWVsZW1lbnRcIik7XG4gICAgaWYgKGdldENhY2hlZEVsICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBnZXRDYWNoZWRFbDtcbiAgICB9XG4gICAgdmFyIGNsb25lZEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICBjbG9uZWRFbC5jbGFzc0xpc3QuYWRkKCdpb24tY2xvbmVkLWVsZW1lbnQnKTtcbiAgICBjbG9uZWRFbC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZWRFbCk7XG4gICAgcmV0dXJuIGNsb25lZEVsO1xufTtcbnZhciBjcmVhdGVIZWFkZXJJbmRleCA9IGZ1bmN0aW9uIChoZWFkZXJFbCkge1xuICAgIGlmICghaGVhZGVyRWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdG9vbGJhcnMgPSBoZWFkZXJFbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tdG9vbGJhcicpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGVsOiBoZWFkZXJFbCxcbiAgICAgICAgdG9vbGJhcnM6IEFycmF5LmZyb20odG9vbGJhcnMpLm1hcChmdW5jdGlvbiAodG9vbGJhcikge1xuICAgICAgICAgICAgdmFyIGlvblRpdGxlRWwgPSB0b29sYmFyLnF1ZXJ5U2VsZWN0b3IoJ2lvbi10aXRsZScpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlbDogdG9vbGJhcixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0b29sYmFyLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLnRvb2xiYXItYmFja2dyb3VuZCcpLFxuICAgICAgICAgICAgICAgIGlvblRpdGxlRWw6IGlvblRpdGxlRWwsXG4gICAgICAgICAgICAgICAgaW5uZXJUaXRsZUVsOiAoaW9uVGl0bGVFbCkgPyBpb25UaXRsZUVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLnRvb2xiYXItdGl0bGUnKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgaW9uQnV0dG9uc0VsOiBBcnJheS5mcm9tKHRvb2xiYXIucXVlcnlTZWxlY3RvckFsbCgnaW9uLWJ1dHRvbnMnKSkgfHwgW11cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pIHx8IFtbXV1cbiAgICB9O1xufTtcbnZhciBoYW5kbGVDb250ZW50U2Nyb2xsID0gZnVuY3Rpb24gKHNjcm9sbEVsLCBzY3JvbGxIZWFkZXJJbmRleCkge1xuICAgIHJlYWRUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IHNjcm9sbEVsLnNjcm9sbFRvcDtcbiAgICAgICAgdmFyIHNjYWxlID0gY2xhbXAoMSwgMSArICgtc2Nyb2xsVG9wIC8gNTAwKSwgMS4xKTtcbiAgICAgICAgd3JpdGVUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNjYWxlTGFyZ2VUaXRsZXMoc2Nyb2xsSGVhZGVySW5kZXgudG9vbGJhcnMsIHNjYWxlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xudmFyIHNldFRvb2xiYXJCYWNrZ3JvdW5kT3BhY2l0eSA9IGZ1bmN0aW9uICh0b29sYmFyLCBvcGFjaXR5KSB7XG4gICAgaWYgKG9wYWNpdHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0b29sYmFyLmJhY2tncm91bmQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJy0tb3BhY2l0eScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdG9vbGJhci5iYWNrZ3JvdW5kLnN0eWxlLnNldFByb3BlcnR5KCctLW9wYWNpdHknLCBvcGFjaXR5LnRvU3RyaW5nKCkpO1xuICAgIH1cbn07XG52YXIgaGFuZGxlVG9vbGJhckJvcmRlckludGVyc2VjdGlvbiA9IGZ1bmN0aW9uIChldiwgbWFpbkhlYWRlckluZGV4KSB7XG4gICAgaWYgKCFldlswXS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBzY2FsZSA9ICgoMSAtIGV2WzBdLmludGVyc2VjdGlvblJhdGlvKSAqIDEwMCkgLyA3NTtcbiAgICBzZXRUb29sYmFyQmFja2dyb3VuZE9wYWNpdHkobWFpbkhlYWRlckluZGV4LnRvb2xiYXJzWzBdLCAoc2NhbGUgPT09IDEpID8gdW5kZWZpbmVkIDogc2NhbGUpO1xufTtcbi8qKlxuICogSWYgdG9vbGJhcnMgYXJlIGludGVyc2VjdGluZywgaGlkZSB0aGUgc2Nyb2xsYWJsZSB0b29sYmFyIGNvbnRlbnRcbiAqIGFuZCBzaG93IHRoZSBwcmltYXJ5IHRvb2xiYXIgY29udGVudC4gSWYgdGhlIHRvb2xiYXJzIGFyZSBub3QgaW50ZXJzZWN0aW5nLFxuICogaGlkZSB0aGUgcHJpbWFyeSB0b29sYmFyIGNvbnRlbnQgYW5kIHNob3cgdGhlIHNjcm9sbGFibGUgdG9vbGJhciBjb250ZW50XG4gKi9cbnZhciBoYW5kbGVUb29sYmFySW50ZXJzZWN0aW9uID0gZnVuY3Rpb24gKGV2LCBtYWluSGVhZGVySW5kZXgsIHNjcm9sbEhlYWRlckluZGV4KSB7XG4gICAgd3JpdGVUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaGFuZGxlVG9vbGJhckJvcmRlckludGVyc2VjdGlvbihldiwgbWFpbkhlYWRlckluZGV4KTtcbiAgICAgICAgdmFyIGV2ZW50ID0gZXZbMF07XG4gICAgICAgIHZhciBpbnRlcnNlY3Rpb24gPSBldmVudC5pbnRlcnNlY3Rpb25SZWN0O1xuICAgICAgICB2YXIgaW50ZXJzZWN0aW9uQXJlYSA9IGludGVyc2VjdGlvbi53aWR0aCAqIGludGVyc2VjdGlvbi5oZWlnaHQ7XG4gICAgICAgIHZhciByb290QXJlYSA9IGV2ZW50LnJvb3RCb3VuZHMud2lkdGggKiBldmVudC5yb290Qm91bmRzLmhlaWdodDtcbiAgICAgICAgdmFyIGlzUGFnZUhpZGRlbiA9IGludGVyc2VjdGlvbkFyZWEgPT09IDAgJiYgcm9vdEFyZWEgPT09IDA7XG4gICAgICAgIHZhciBsZWZ0RGlmZiA9IE1hdGguYWJzKGludGVyc2VjdGlvbi5sZWZ0IC0gZXZlbnQuYm91bmRpbmdDbGllbnRSZWN0LmxlZnQpO1xuICAgICAgICB2YXIgcmlnaHREaWZmID0gTWF0aC5hYnMoaW50ZXJzZWN0aW9uLnJpZ2h0IC0gZXZlbnQuYm91bmRpbmdDbGllbnRSZWN0LnJpZ2h0KTtcbiAgICAgICAgdmFyIGlzUGFnZVRyYW5zaXRpb25pbmcgPSBpbnRlcnNlY3Rpb25BcmVhID4gMCAmJiAobGVmdERpZmYgPj0gNSB8fCByaWdodERpZmYgPj0gNSk7XG4gICAgICAgIGlmIChpc1BhZ2VIaWRkZW4gfHwgaXNQYWdlVHJhbnNpdGlvbmluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgc2V0SGVhZGVyQWN0aXZlKG1haW5IZWFkZXJJbmRleCwgZmFsc2UpO1xuICAgICAgICAgICAgc2V0SGVhZGVyQWN0aXZlKHNjcm9sbEhlYWRlckluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlcmUgaXMgYSBidWcgd2l0aCBJbnRlcnNlY3Rpb25PYnNlcnZlciBvbiBTYWZhcmlcbiAgICAgICAgICAgICAqIHdoZXJlIGBldmVudC5pc0ludGVyc2VjdGluZyA9PT0gZmFsc2VgIHdoZW4gY2FuY2VsbGluZ1xuICAgICAgICAgICAgICogYSBzd2lwZSB0byBnbyBiYWNrIGdlc3R1cmUuIENoZWNraW5nIHRoZSBpbnRlcnNlY3Rpb25cbiAgICAgICAgICAgICAqIHgsIHksIHdpZHRoLCBhbmQgaGVpZ2h0IHByb3ZpZGVzIGEgd29ya2Fyb3VuZC4gVGhpcyBidWdcbiAgICAgICAgICAgICAqIGRvZXMgbm90IGhhcHBlbiB3aGVuIHVzaW5nIFNhZmFyaSArIFdlYiBBbmltYXRpb25zLFxuICAgICAgICAgICAgICogb25seSBTYWZhcmkgKyBDU1MgQW5pbWF0aW9ucy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIGhhc1ZhbGlkSW50ZXJzZWN0aW9uID0gKGludGVyc2VjdGlvbi54ID09PSAwICYmIGludGVyc2VjdGlvbi55ID09PSAwKSB8fCAoaW50ZXJzZWN0aW9uLndpZHRoICE9PSAwICYmIGludGVyc2VjdGlvbi5oZWlnaHQgIT09IDApO1xuICAgICAgICAgICAgaWYgKGhhc1ZhbGlkSW50ZXJzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgc2V0SGVhZGVyQWN0aXZlKG1haW5IZWFkZXJJbmRleCk7XG4gICAgICAgICAgICAgICAgc2V0SGVhZGVyQWN0aXZlKHNjcm9sbEhlYWRlckluZGV4LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgc2V0VG9vbGJhckJhY2tncm91bmRPcGFjaXR5KG1haW5IZWFkZXJJbmRleC50b29sYmFyc1swXSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG52YXIgc2V0SGVhZGVyQWN0aXZlID0gZnVuY3Rpb24gKGhlYWRlckluZGV4LCBhY3RpdmUpIHtcbiAgICBpZiAoYWN0aXZlID09PSB2b2lkIDApIHsgYWN0aXZlID0gdHJ1ZTsgfVxuICAgIHdyaXRlVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgIGhlYWRlckluZGV4LmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci1jb2xsYXBzZS1jb25kZW5zZS1pbmFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGVhZGVySW5kZXguZWwuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlLWluYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG52YXIgc2NhbGVMYXJnZVRpdGxlcyA9IGZ1bmN0aW9uICh0b29sYmFycywgc2NhbGUsIHRyYW5zaXRpb24pIHtcbiAgICBpZiAodG9vbGJhcnMgPT09IHZvaWQgMCkgeyB0b29sYmFycyA9IFtdOyB9XG4gICAgaWYgKHNjYWxlID09PSB2b2lkIDApIHsgc2NhbGUgPSAxOyB9XG4gICAgaWYgKHRyYW5zaXRpb24gPT09IHZvaWQgMCkgeyB0cmFuc2l0aW9uID0gZmFsc2U7IH1cbiAgICB0b29sYmFycy5mb3JFYWNoKGZ1bmN0aW9uICh0b29sYmFyKSB7XG4gICAgICAgIHZhciBpb25UaXRsZSA9IHRvb2xiYXIuaW9uVGl0bGVFbDtcbiAgICAgICAgdmFyIHRpdGxlRGl2ID0gdG9vbGJhci5pbm5lclRpdGxlRWw7XG4gICAgICAgIGlmICghaW9uVGl0bGUgfHwgaW9uVGl0bGUuc2l6ZSAhPT0gJ2xhcmdlJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRpdGxlRGl2LnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9ICdsZWZ0IGNlbnRlcic7XG4gICAgICAgIHRpdGxlRGl2LnN0eWxlLnRyYW5zaXRpb24gPSAodHJhbnNpdGlvbikgPyBUUkFOU0lUSU9OIDogJyc7XG4gICAgICAgIHRpdGxlRGl2LnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUzZChcIiArIHNjYWxlICsgXCIsIFwiICsgc2NhbGUgKyBcIiwgMSlcIjtcbiAgICB9KTtcbn07XG52YXIgSGVhZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzIoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmNvbGxhcHNpYmxlSGVhZGVySW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGhlYWRlciB3aWxsIGJlIHRyYW5zbHVjZW50LlxuICAgICAgICAgKiBPbmx5IGFwcGxpZXMgd2hlbiB0aGUgbW9kZSBpcyBgXCJpb3NcImAgYW5kIHRoZSBkZXZpY2Ugc3VwcG9ydHNcbiAgICAgICAgICogW2BiYWNrZHJvcC1maWx0ZXJgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2Ryb3AtZmlsdGVyI0Jyb3dzZXJfY29tcGF0aWJpbGl0eSkuXG4gICAgICAgICAqXG4gICAgICAgICAqIE5vdGU6IEluIG9yZGVyIHRvIHNjcm9sbCBjb250ZW50IGJlaGluZCB0aGUgaGVhZGVyLCB0aGUgYGZ1bGxzY3JlZW5gXG4gICAgICAgICAqIGF0dHJpYnV0ZSBuZWVkcyB0byBiZSBzZXQgb24gdGhlIGNvbnRlbnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyYW5zbHVjZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIGNsYXNzXzIucHJvdG90eXBlLmNvbXBvbmVudERpZExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jaGVja0NvbGxhcHNpYmxlSGVhZGVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMi5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY2hlY2tDb2xsYXBzaWJsZUhlYWRlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzIucHJvdG90eXBlLmNvbXBvbmVudERpZFVubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95Q29sbGFwc2libGVIZWFkZXIoKTtcbiAgICB9O1xuICAgIGNsYXNzXzIucHJvdG90eXBlLmNoZWNrQ29sbGFwc2libGVIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoYXNDb2xsYXBzZSwgY2FuQ29sbGFwc2UsIHBhZ2VFbCwgY29udGVudEVsO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ29sbGFwc2UgPSB0aGlzLmNvbGxhcHNlID09PSAnY29uZGVuc2UnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuQ29sbGFwc2UgPSAoaGFzQ29sbGFwc2UgJiYgZ2V0SW9uTW9kZSh0aGlzKSA9PT0gJ2lvcycpID8gaGFzQ29sbGFwc2UgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKCFjYW5Db2xsYXBzZSAmJiB0aGlzLmNvbGxhcHNpYmxlSGVhZGVySW5pdGlhbGl6ZWQpKSByZXR1cm4gWzMgLypicmVhayovLCAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveUNvbGxhcHNpYmxlSGVhZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoY2FuQ29sbGFwc2UgJiYgIXRoaXMuY29sbGFwc2libGVIZWFkZXJJbml0aWFsaXplZCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUVsID0gdGhpcy5lbC5jbG9zZXN0KCdpb24tYXBwLGlvbi1wYWdlLC5pb24tcGFnZSxwYWdlLWlubmVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RWwgPSAocGFnZUVsKSA/IHBhZ2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tY29udGVudCcpIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc2V0dXBDb2xsYXBzaWJsZUhlYWRlcihjb250ZW50RWwsIHBhZ2VFbCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzIucHJvdG90eXBlLmRlc3Ryb3lDb2xsYXBzaWJsZUhlYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zY3JvbGxFbCAmJiB0aGlzLmNvbnRlbnRTY3JvbGxDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNvbnRlbnRTY3JvbGxDYWxsYmFjayk7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRTY3JvbGxDYWxsYmFjayA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMi5wcm90b3R5cGUuc2V0dXBDb2xsYXBzaWJsZUhlYWRlciA9IGZ1bmN0aW9uIChjb250ZW50RWwsIHBhZ2VFbCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb250ZW50RWwgfHwgIXBhZ2VFbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2lvbi1oZWFkZXIgcmVxdWlyZXMgYSBjb250ZW50IHRvIGNvbGxhcHNlLCBtYWtlIHN1cmUgdGhlcmUgaXMgYW4gaW9uLWNvbnRlbnQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY29udGVudEVsLmdldFNjcm9sbEVsZW1lbnQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNjcm9sbEVsID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZFRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoZWFkZXJzID0gcGFnZUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWFpbkhlYWRlciA9IEFycmF5LmZyb20oaGVhZGVycykuZmluZChmdW5jdGlvbiAoaGVhZGVyKSB7IHJldHVybiBoZWFkZXIuY29sbGFwc2UgIT09ICdjb25kZW5zZSc7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWFpbkhlYWRlciB8fCAhX3RoaXMuc2Nyb2xsRWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWFpbkhlYWRlckluZGV4ID0gY3JlYXRlSGVhZGVySW5kZXgobWFpbkhlYWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbEhlYWRlckluZGV4ID0gY3JlYXRlSGVhZGVySW5kZXgoX3RoaXMuZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWFpbkhlYWRlckluZGV4IHx8ICFzY3JvbGxIZWFkZXJJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEhlYWRlckFjdGl2ZShtYWluSGVhZGVySW5kZXgsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYWluSGVhZGVySGVpZ2h0ID0gbWFpbkhlYWRlckluZGV4LmVsLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEhhbmRsZSBpbnRlcmFjdGlvbiBiZXR3ZWVuIHRvb2xiYXIgY29sbGFwc2UgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHNob3dpbmcvaGlkaW5nIGNvbnRlbnQgaW4gdGhlIHByaW1hcnkgaW9uLWhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBhcyB3ZWxsIGFzIHByb2dyZXNzaXZlbHkgc2hvd2luZy9oaWRpbmcgdGhlIG1haW4gaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGJvcmRlciBhcyB0aGUgdG9wLW1vc3QgdG9vbGJhciBjb2xsYXBzZXMgb3IgZXhwYW5kcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b29sYmFySW50ZXJzZWN0aW9uID0gZnVuY3Rpb24gKGV2KSB7IGhhbmRsZVRvb2xiYXJJbnRlcnNlY3Rpb24oZXYsIG1haW5IZWFkZXJJbmRleCwgc2Nyb2xsSGVhZGVySW5kZXgpOyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcih0b29sYmFySW50ZXJzZWN0aW9uLCB7IHRocmVzaG9sZDogWzAuMjUsIDAuMywgMC40LCAwLjUsIDAuNiwgMC43LCAwLjgsIDAuOSwgMV0sIHJvb3RNYXJnaW46IFwiLVwiICsgbWFpbkhlYWRlckhlaWdodCArIFwicHggMHB4IDBweCAwcHhcIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShzY3JvbGxIZWFkZXJJbmRleC50b29sYmFyc1swXS5lbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogSGFuZGxlIHNjYWxpbmcgb2YgbGFyZ2UgaU9TIHRpdGxlcyBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBzaG93aW5nL2hpZGluZyBib3JkZXIgb24gbGFzdCB0b29sYmFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogaW4gcHJpbWFyeSBoZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb250ZW50U2Nyb2xsQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IGhhbmRsZUNvbnRlbnRTY3JvbGwoX3RoaXMuc2Nyb2xsRWwsIHNjcm9sbEhlYWRlckluZGV4KTsgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zY3JvbGxFbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBfdGhpcy5jb250ZW50U2Nyb2xsQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3cml0ZVRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lRWxlbWVudCgnaW9uLXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVFbGVtZW50KCdpb24tYmFjay1idXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzaWJsZUhlYWRlckluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18yLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICB2YXIgY29sbGFwc2UgPSB0aGlzLmNvbGxhcHNlIHx8ICdub25lJztcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgcm9sZTogXCJiYW5uZXJcIiwgY2xhc3M6IChfYSA9IHt9LFxuICAgICAgICAgICAgICAgIF9hW21vZGVdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyBVc2VkIGludGVybmFsbHkgZm9yIHN0eWxpbmdcbiAgICAgICAgICAgICAgICBfYVtcImhlYWRlci1cIiArIG1vZGVdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYVtcImhlYWRlci10cmFuc2x1Y2VudFwiXSA9IHRoaXMudHJhbnNsdWNlbnQsXG4gICAgICAgICAgICAgICAgX2FbXCJoZWFkZXItY29sbGFwc2UtXCIgKyBjb2xsYXBzZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hW1wiaGVhZGVyLXRyYW5zbHVjZW50LVwiICsgbW9kZV0gPSB0aGlzLnRyYW5zbHVjZW50LFxuICAgICAgICAgICAgICAgIF9hKSB9KSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMi5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18yLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcImlvbi1oZWFkZXJ7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1vcmRlcjotMTtvcmRlcjotMTt3aWR0aDoxMDAlO3otaW5kZXg6MTB9aW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZHtwYWRkaW5nLXRvcDp2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCwwKX0uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LWNoaWxkey0tYm9yZGVyLXdpZHRoOjAgMCAwLjU1cHh9LmhlYWRlci1pb3Nbbm8tYm9yZGVyXSBpb24tdG9vbGJhcjpsYXN0LWNoaWxkey0tYm9yZGVyLXdpZHRoOjB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpibHVyKDApKSBvciAoYmFja2Ryb3AtZmlsdGVyOmJsdXIoMCkpKXsuaGVhZGVyLXRyYW5zbHVjZW50LWlvc3std2Via2l0LWJhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO2JhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpfS5oZWFkZXItdHJhbnNsdWNlbnQtaW9zIGlvbi10b29sYmFyey0tb3BhY2l0eTouODstLWJhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpfX0uaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNle3otaW5kZXg6OX0uaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlIGlvbi10b29sYmFye3Bvc2l0aW9uOi13ZWJraXQtc3RpY2t5O3Bvc2l0aW9uOnN0aWNreTt0b3A6MH0uaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlIGlvbi10b29sYmFyOmZpcnN0LWNoaWxke3BhZGRpbmctdG9wOjdweDt6LWluZGV4OjF9LmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZSBpb24tdG9vbGJhcnt6LWluZGV4OjB9LmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZSBpb24tdG9vbGJhciBpb24tc2VhcmNoYmFye2hlaWdodDo0OHB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MTNweH1pb24tdG9vbGJhci5pbi10b29sYmFyIGlvbi1idXR0b25zLGlvbi10b29sYmFyLmluLXRvb2xiYXIgaW9uLXRpdGxley13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjJzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246YWxsIC4ycyBlYXNlLWluLW91dH0uaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlIGlvbi10b29sYmFyIGlvbi1idXR0b25zLC5oZWFkZXItY29sbGFwc2UtY29uZGVuc2UgaW9uLXRvb2xiYXIgaW9uLXRpdGxley13ZWJraXQtdHJhbnNpdGlvbjpub25lO3RyYW5zaXRpb246bm9uZX0uaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlLWluYWN0aXZlIGlvbi10b29sYmFyLmluLXRvb2xiYXIgaW9uLWJ1dHRvbnMuYnV0dG9ucy1jb2xsYXBzZSwuaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlLWluYWN0aXZlIGlvbi10b29sYmFyLmluLXRvb2xiYXIgaW9uLXRpdGxle29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NfMjtcbn0oKSk7XG52YXIgUm91dGVyT3V0bGV0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzMoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1vZGUgZGV0ZXJtaW5lcyB3aGljaCBwbGF0Zm9ybSBzdHlsZXMgdG8gdXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHJvdXRlci1vdXRsZXQgc2hvdWxkIGFuaW1hdGUgdGhlIHRyYW5zaXRpb24gb2YgY29tcG9uZW50cy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmlvbk5hdldpbGxMb2FkID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25OYXZXaWxsTG9hZFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25OYXZXaWxsQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25OYXZXaWxsQ2hhbmdlXCIsIDMpO1xuICAgICAgICB0aGlzLmlvbk5hdkRpZENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTmF2RGlkQ2hhbmdlXCIsIDMpO1xuICAgIH1cbiAgICBjbGFzc18zLnByb3RvdHlwZS5zd2lwZUhhbmRsZXJDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuc2V0RGlzYWJsZWQodGhpcy5zd2lwZUhhbmRsZXIgPT09IHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzMucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW1wb3J0KCcuL3N3aXBlLWJhY2stMzVhZDhlMzcuanMnKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmdlc3R1cmUgPSAoX2Iuc2VudCgpKS5jcmVhdGVTd2lwZUJhY2tHZXN0dXJlKHRoaXMuZWwsIGZ1bmN0aW9uICgpIHsgcmV0dXJuICEhX3RoaXMuc3dpcGVIYW5kbGVyICYmIF90aGlzLnN3aXBlSGFuZGxlci5jYW5TdGFydCgpICYmIF90aGlzLmFuaW1hdGlvbkVuYWJsZWQ7IH0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnN3aXBlSGFuZGxlciAmJiBfdGhpcy5zd2lwZUhhbmRsZXIub25TdGFydCgpOyB9LCBmdW5jdGlvbiAoc3RlcCkgeyByZXR1cm4gX3RoaXMuYW5pICYmIF90aGlzLmFuaS5wcm9ncmVzc1N0ZXAoc3RlcCk7IH0sIGZ1bmN0aW9uIChzaG91bGRDb21wbGV0ZSwgc3RlcCwgZHVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmFuaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRpb25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmFuaS5vbkZpbmlzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRpb25FbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zd2lwZUhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zd2lwZUhhbmRsZXIub25FbmQoc2hvdWxkQ29tcGxldGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7IG9uZVRpbWVDYWxsYmFjazogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWNjb3VudCBmb3Igcm91bmRpbmcgZXJyb3JzIGluIEpTXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdTdGVwVmFsdWUgPSAoc2hvdWxkQ29tcGxldGUpID8gLTAuMDAxIDogMC4wMDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBBbmltYXRpb24gd2lsbCBiZSByZXZlcnNlZCBoZXJlLCBzbyBuZWVkIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHJldmVyc2UgdGhlIGVhc2luZyBjdXJ2ZSBhcyB3ZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEFkZGl0aW9uYWxseSwgd2UgbmVlZCB0byBhY2NvdW50IGZvciB0aGUgdGltZSByZWxhdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiB0byB0aGUgbmV3IGVhc2luZyBjdXJ2ZSwgYXMgYHN0ZXBWYWx1ZWAgaXMgZ29pbmcgdG8gYmUgZ2l2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogaW4gdGVybXMgb2YgYSBsaW5lYXIgY3VydmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNob3VsZENvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5hbmkuZWFzaW5nKCdjdWJpYy1iZXppZXIoMSwgMCwgMC42OCwgMC4yOCknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0ZXBWYWx1ZSArPSBnZXRUaW1lR2l2ZW5Qcm9ncmVzc2lvbihuZXcgUG9pbnQoMCwgMCksIG5ldyBQb2ludCgxLCAwKSwgbmV3IFBvaW50KDAuNjgsIDAuMjgpLCBuZXcgUG9pbnQoMSwgMSksIHN0ZXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RlcFZhbHVlICs9IGdldFRpbWVHaXZlblByb2dyZXNzaW9uKG5ldyBQb2ludCgwLCAwKSwgbmV3IFBvaW50KDAuMzIsIDAuNzIpLCBuZXcgUG9pbnQoMCwgMSksIG5ldyBQb2ludCgxLCAxKSwgc3RlcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYW5pLnByb2dyZXNzRW5kKHNob3VsZENvbXBsZXRlID8gMSA6IDAsIG5ld1N0ZXBWYWx1ZSwgZHVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpcGVIYW5kbGVyQ2hhbmdlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzMucHJvdG90eXBlLmNvbXBvbmVudFdpbGxMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlvbk5hdldpbGxMb2FkLmVtaXQoKTtcbiAgICB9O1xuICAgIGNsYXNzXzMucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgY2xhc3NfMy5wcm90b3R5cGUuY29tbWl0ID0gZnVuY3Rpb24gKGVudGVyaW5nRWwsIGxlYXZpbmdFbCwgb3B0cykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdW5sb2NrLCBjaGFuZ2VkLCBlXzE7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMubG9jaygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgdW5sb2NrID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzIsIDQsICwgNV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy50cmFuc2l0aW9uKGVudGVyaW5nRWwsIGxlYXZpbmdFbCwgb3B0cyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZV8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmxvY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBjaGFuZ2VkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgY2xhc3NfMy5wcm90b3R5cGUuc2V0Um91dGVJZCA9IGZ1bmN0aW9uIChpZCwgcGFyYW1zLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZWQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc2V0Um9vdChpZCwgcGFyYW1zLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IGRpcmVjdGlvbiA9PT0gJ3Jvb3QnID8gMCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbiA9PT0gJ2JhY2snID8gJ2JhY2snIDogJ2ZvcndhcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZDogY2hhbmdlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogdGhpcy5hY3RpdmVFbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBjbGFzc18zLnByb3RvdHlwZS5nZXRSb3V0ZUlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYWN0aXZlO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZSA9IHRoaXMuYWN0aXZlRWw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGFjdGl2ZSA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBhY3RpdmUudGFnTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGFjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgfSA6IHVuZGVmaW5lZF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18zLnByb3RvdHlwZS5zZXRSb290ID0gZnVuY3Rpb24gKGNvbXBvbmVudCwgcGFyYW1zLCBvcHRzKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsZWF2aW5nRWwsIGVudGVyaW5nRWw7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVDb21wb25lbnQgPT09IGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWF2aW5nRWwgPSB0aGlzLmFjdGl2ZUVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXR0YWNoQ29tcG9uZW50KHRoaXMuZGVsZWdhdGUsIHRoaXMuZWwsIGNvbXBvbmVudCwgWydpb24tcGFnZScsICdpb24tcGFnZS1pbnZpc2libGUnXSwgcGFyYW1zKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyaW5nRWwgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlRWwgPSBlbnRlcmluZ0VsO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29tbWl0IGFuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jb21taXQoZW50ZXJpbmdFbCwgbGVhdmluZ0VsLCBvcHRzKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbW1pdCBhbmltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGRldGFjaENvbXBvbmVudCh0aGlzLmRlbGVnYXRlLCBsZWF2aW5nRWwpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRydWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzMucHJvdG90eXBlLnRyYW5zaXRpb24gPSBmdW5jdGlvbiAoZW50ZXJpbmdFbCwgbGVhdmluZ0VsLCBvcHRzKSB7XG4gICAgICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHt9OyB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYSwgZWwsIG1vZGUsIGFuaW1hdGVkLCBhbmltYXRpb25CdWlsZGVyO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWF2aW5nRWwgPT09IGVudGVyaW5nRWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW1pdCBuYXYgd2lsbCBjaGFuZ2UgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW9uTmF2V2lsbENoYW5nZS5lbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXMsIGVsID0gX2EuZWwsIG1vZGUgPSBfYS5tb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZWQgPSB0aGlzLmFuaW1hdGVkICYmIGNvbmZpZy5nZXRCb29sZWFuKCdhbmltYXRlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uQnVpbGRlciA9IHRoaXMuYW5pbWF0aW9uIHx8IG9wdHMuYW5pbWF0aW9uQnVpbGRlciB8fCBjb25maWcuZ2V0KCduYXZBbmltYXRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRyYW5zaXRpb24oT2JqZWN0LmFzc2lnbih7IG1vZGU6IG1vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkOiBhbmltYXRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uQnVpbGRlcjogYW5pbWF0aW9uQnVpbGRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJpbmdFbDogZW50ZXJpbmdFbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmluZ0VsOiBsZWF2aW5nRWwsIGJhc2VFbDogZWwsIHByb2dyZXNzQ2FsbGJhY2s6IChvcHRzLnByb2dyZXNzQW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChhbmkpIHsgcmV0dXJuIF90aGlzLmFuaSA9IGFuaTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQpIH0sIG9wdHMpKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVtaXQgbmF2IGNoYW5nZWQgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW9uTmF2RGlkQ2hhbmdlLmVtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0cnVlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18zLnByb3RvdHlwZS5sb2NrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcCwgcmVzb2x2ZTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgPSB0aGlzLndhaXRQcm9taXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53YWl0UHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyKSB7IHJldHVybiByZXNvbHZlID0gcjsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShwICE9PSB1bmRlZmluZWQpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHBdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc29sdmVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzMucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChoKFwic2xvdFwiLCBudWxsKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMy5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18zLCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwic3dpcGVIYW5kbGVyXCI6IFtcInN3aXBlSGFuZGxlckNoYW5nZWRcIl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18zLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIjpob3N0e2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO2NvbnRhaW46bGF5b3V0IHNpemUgc3R5bGU7b3ZlcmZsb3c6aGlkZGVuO3otaW5kZXg6MH1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzM7XG59KCkpO1xudmFyIFRvb2xiYXJUaXRsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUb29sYmFyVGl0bGUoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmlvblN0eWxlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TdHlsZVwiLCA3KTtcbiAgICB9XG4gICAgVG9vbGJhclRpdGxlLnByb3RvdHlwZS5zaXplQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9O1xuICAgIFRvb2xiYXJUaXRsZS5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgfTtcbiAgICBUb29sYmFyVGl0bGUucHJvdG90eXBlLmVtaXRTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgc2l6ZSA9IHRoaXMuZ2V0U2l6ZSgpO1xuICAgICAgICB0aGlzLmlvblN0eWxlLmVtaXQoKF9hID0ge30sXG4gICAgICAgICAgICBfYVtcInRpdGxlLVwiICsgc2l6ZV0gPSB0cnVlLFxuICAgICAgICAgICAgX2EpKTtcbiAgICB9O1xuICAgIFRvb2xiYXJUaXRsZS5wcm90b3R5cGUuZ2V0U2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnNpemUgIT09IHVuZGVmaW5lZCkgPyB0aGlzLnNpemUgOiAnZGVmYXVsdCc7XG4gICAgfTtcbiAgICBUb29sYmFyVGl0bGUucHJvdG90eXBlLmdldE1vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgdmFyIHRvb2xiYXIgPSB0aGlzLmVsLmNsb3Nlc3QoJ2lvbi10b29sYmFyJyk7XG4gICAgICAgIHJldHVybiAodG9vbGJhciAmJiB0b29sYmFyLm1vZGUpIHx8IG1vZGU7XG4gICAgfTtcbiAgICBUb29sYmFyVGl0bGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgbW9kZSA9IHRoaXMuZ2V0TW9kZSgpO1xuICAgICAgICB2YXIgc2l6ZSA9IHRoaXMuZ2V0U2l6ZSgpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczogT2JqZWN0LmFzc2lnbigoX2EgPSB7fSwgX2FbbW9kZV0gPSB0cnVlLCBfYVtcInRpdGxlLVwiICsgbW9kZV0gPSB0cnVlLCBfYVtcInRpdGxlLVwiICsgc2l6ZV0gPSB0cnVlLCBfYSksIGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yKSkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInRvb2xiYXItdGl0bGVcIiB9LCBoKFwic2xvdFwiLCBudWxsKSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUb29sYmFyVGl0bGUucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVG9vbGJhclRpdGxlLCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBbXCJzaXplQ2hhbmdlZFwiXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRvb2xiYXJUaXRsZSwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCI6aG9zdHstLWNvbG9yOmluaXRpYWw7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2NvbG9yOnZhcigtLWNvbG9yKX06aG9zdCgudGl0bGUtaW9zLnRpdGxlLWRlZmF1bHQpLDpob3N0KC50aXRsZS1pb3MudGl0bGUtbGFyZ2Upe2xlZnQ6MDt0b3A6MDtwYWRkaW5nLWxlZnQ6OTBweDtwYWRkaW5nLXJpZ2h0OjkwcHg7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtmb250LXNpemU6MTdweDtmb250LXdlaWdodDo2MDA7dGV4dC1hbGlnbjpjZW50ZXI7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pLnRpdGxlLWlvcy50aXRsZS1kZWZhdWx0LDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS50aXRsZS1pb3MudGl0bGUtbGFyZ2UsOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLnRpdGxlLWlvcy50aXRsZS1kZWZhdWx0KSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgudGl0bGUtaW9zLnRpdGxlLWxhcmdlKXtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0KC50aXRsZS1pb3MudGl0bGUtZGVmYXVsdCksOmhvc3QoLnRpdGxlLWlvcy50aXRsZS1sYXJnZSl7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjkwcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6OTBweDstd2Via2l0LXBhZGRpbmctZW5kOjkwcHg7cGFkZGluZy1pbmxpbmUtZW5kOjkwcHh9fTpob3N0KC50aXRsZS1tZCl7cGFkZGluZy1sZWZ0OjIwcHg7cGFkZGluZy1yaWdodDoyMHB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtmb250LXNpemU6MjBweDtmb250LXdlaWdodDo1MDA7bGV0dGVyLXNwYWNpbmc6LjAxMjVlbX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3QoLnRpdGxlLW1kKXtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MjBweDtwYWRkaW5nLWlubGluZS1zdGFydDoyMHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MjBweDtwYWRkaW5nLWlubGluZS1lbmQ6MjBweH19Omhvc3QoLmlvbi1jb2xvcil7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfS50b29sYmFyLXRpdGxle2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47cG9pbnRlci1ldmVudHM6YXV0b306aG9zdCgudGl0bGUtc21hbGwpIC50b29sYmFyLXRpdGxle3doaXRlLXNwYWNlOm5vcm1hbH06aG9zdCgudGl0bGUtaW9zLnRpdGxlLXNtYWxsKXtwYWRkaW5nLWxlZnQ6OXB4O3BhZGRpbmctcmlnaHQ6OXB4O3BhZGRpbmctdG9wOjZweDtwYWRkaW5nLWJvdHRvbToxNnB4O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Zm9udC1zaXplOjEzcHg7dGV4dC1hbGlnbjpjZW50ZXJ9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0KC50aXRsZS1pb3MudGl0bGUtc21hbGwpe3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDo5cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6OXB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6OXB4O3BhZGRpbmctaW5saW5lLWVuZDo5cHh9fTpob3N0KC50aXRsZS1tZC50aXRsZS1zbWFsbCl7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtmb250LXNpemU6MTVweDtmb250LXdlaWdodDo0MDB9Omhvc3QoLnRpdGxlLWlvcy50aXRsZS1sYXJnZSl7cGFkZGluZy1sZWZ0OjE2cHg7cGFkZGluZy1yaWdodDoxNnB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtib3R0b206MDstbXMtZmxleC1hbGlnbjplbmQ7YWxpZ24taXRlbXM6ZmxleC1lbmQ7bWluLXdpZHRoOjEwMCU7cGFkZGluZy1ib3R0b206NnB4O2ZvbnQtc2l6ZTozNHB4O2ZvbnQtd2VpZ2h0OjcwMDt0ZXh0LWFsaWduOnN0YXJ0fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdCgudGl0bGUtaW9zLnRpdGxlLWxhcmdlKXtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweH19XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBUb29sYmFyVGl0bGU7XG59KCkpO1xudmFyIFRvb2xiYXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVG9vbGJhcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5TdHlsZXMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIFRvb2xiYXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYnV0dG9ucyA9IEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tYnV0dG9ucycpKTtcbiAgICAgICAgdmFyIGZpcnN0QnV0dG9ucyA9IGJ1dHRvbnMuZmluZChmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uLnNsb3QgPT09ICdzdGFydCc7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZmlyc3RCdXR0b25zKSB7XG4gICAgICAgICAgICBmaXJzdEJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucy1maXJzdC1zbG90Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJ1dHRvbnNSZXZlcnNlZCA9IGJ1dHRvbnMucmV2ZXJzZSgpO1xuICAgICAgICB2YXIgbGFzdEJ1dHRvbnMgPSBidXR0b25zUmV2ZXJzZWQuZmluZChmdW5jdGlvbiAoYnV0dG9uKSB7IHJldHVybiBidXR0b24uc2xvdCA9PT0gJ2VuZCc7IH0pIHx8XG4gICAgICAgICAgICBidXR0b25zUmV2ZXJzZWQuZmluZChmdW5jdGlvbiAoYnV0dG9uKSB7IHJldHVybiBidXR0b24uc2xvdCA9PT0gJ3ByaW1hcnknOyB9KSB8fFxuICAgICAgICAgICAgYnV0dG9uc1JldmVyc2VkLmZpbmQoZnVuY3Rpb24gKGJ1dHRvbikgeyByZXR1cm4gYnV0dG9uLnNsb3QgPT09ICdzZWNvbmRhcnknOyB9KTtcbiAgICAgICAgaWYgKGxhc3RCdXR0b25zKSB7XG4gICAgICAgICAgICBsYXN0QnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdidXR0b25zLWxhc3Qtc2xvdCcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb29sYmFyLnByb3RvdHlwZS5jaGlsZHJlblN0eWxlID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB2YXIgdGFnTmFtZSA9IGV2LnRhcmdldC50YWdOYW1lO1xuICAgICAgICB2YXIgdXBkYXRlZFN0eWxlcyA9IGV2LmRldGFpbDtcbiAgICAgICAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuICAgICAgICB2YXIgY2hpbGRTdHlsZXMgPSB0aGlzLmNoaWxkcmVuU3R5bGVzLmdldCh0YWdOYW1lKSB8fCB7fTtcbiAgICAgICAgdmFyIGhhc1N0eWxlQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgIE9iamVjdC5rZXlzKHVwZGF0ZWRTdHlsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgdmFyIGNoaWxkS2V5ID0gXCJ0b29sYmFyLVwiICsga2V5O1xuICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gdXBkYXRlZFN0eWxlc1trZXldO1xuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBjaGlsZFN0eWxlc1tjaGlsZEtleV0pIHtcbiAgICAgICAgICAgICAgICBoYXNTdHlsZUNoYW5nZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBuZXdTdHlsZXNbY2hpbGRLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChoYXNTdHlsZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlblN0eWxlcy5zZXQodGFnTmFtZSwgbmV3U3R5bGVzKTtcbiAgICAgICAgICAgIHRoaXMuZWwuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9vbGJhci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgdmFyIGNoaWxkU3R5bGVzID0ge307XG4gICAgICAgIHRoaXMuY2hpbGRyZW5TdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY2hpbGRTdHlsZXMsIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oKF9hID0geyAnaW4tdG9vbGJhcic6IGhvc3RDb250ZXh0KCdpb24tdG9vbGJhcicsIHRoaXMuZWwpIH0sIF9hW21vZGVdID0gdHJ1ZSwgX2EpLCBjaGlsZFN0eWxlcyksIGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yKSkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInRvb2xiYXItYmFja2dyb3VuZFwiIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidG9vbGJhci1jb250YWluZXJcIiB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFwic3RhcnRcIiB9KSwgaChcInNsb3RcIiwgeyBuYW1lOiBcInNlY29uZGFyeVwiIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidG9vbGJhci1jb250ZW50XCIgfSwgaChcInNsb3RcIiwgbnVsbCkpLCBoKFwic2xvdFwiLCB7IG5hbWU6IFwicHJpbWFyeVwiIH0pLCBoKFwic2xvdFwiLCB7IG5hbWU6IFwiZW5kXCIgfSkpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVG9vbGJhci5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUb29sYmFyLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIjpob3N0ey0tYm9yZGVyLXdpZHRoOjA7LS1ib3JkZXItc3R5bGU6c29saWQ7LS1vcGFjaXR5OjE7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7cGFkZGluZy1sZWZ0OnZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCk7cGFkZGluZy1yaWdodDp2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KTtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7Y29sb3I6dmFyKC0tY29sb3IpO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTtjb250YWluOmNvbnRlbnQ7ei1pbmRleDoxMDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0e3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCl9fTpob3N0KC5pb24tY29sb3Ipe2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Omhvc3QoLmlvbi1jb2xvcikgLnRvb2xiYXItYmFja2dyb3VuZHtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX0udG9vbGJhci1jb250YWluZXJ7cGFkZGluZy1sZWZ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctcmlnaHQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3c7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47d2lkdGg6MTAwJTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO2NvbnRhaW46Y29udGVudDtvdmVyZmxvdzpoaWRkZW47ei1pbmRleDoxMDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey50b29sYmFyLWNvbnRhaW5lcntwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKX19LnRvb2xiYXItYmFja2dyb3VuZHt0b3A6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2JvcmRlci13aWR0aDp2YXIoLS1ib3JkZXItd2lkdGgpO2JvcmRlci1zdHlsZTp2YXIoLS1ib3JkZXItc3R5bGUpO2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29udGFpbjpzdHJpY3Q7b3BhY2l0eTp2YXIoLS1vcGFjaXR5KTt6LWluZGV4Oi0xO3BvaW50ZXItZXZlbnRzOm5vbmV9LnRvb2xiYXItYmFja2dyb3VuZCw6OnNsb3R0ZWQoaW9uLXByb2dyZXNzLWJhcil7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGV9Omhvc3R7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi10b29sYmFyLWJhY2tncm91bmQsdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAsI2ZmZikpOy0tY29sb3I6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsdmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCkpOy0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvcix2YXIoLS1pb24tYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCxyZ2JhKDAsMCwwLDAuMikpKSk7LS1wYWRkaW5nLXRvcDozcHg7LS1wYWRkaW5nLWJvdHRvbTozcHg7LS1wYWRkaW5nLXN0YXJ0OjRweDstLXBhZGRpbmctZW5kOjRweDstLW1pbi1oZWlnaHQ6NDRweH0udG9vbGJhci1jb250ZW50ey1tcy1mbGV4OjE7ZmxleDoxOy1tcy1mbGV4LW9yZGVyOjQ7b3JkZXI6NDttaW4td2lkdGg6MH06aG9zdCgudG9vbGJhci1zZWdtZW50KXstLW1pbi1oZWlnaHQ6YXV0b306aG9zdCgudG9vbGJhci1zZWFyY2hiYXIpIC50b29sYmFyLWNvbnRhaW5lcntwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjB9Omhvc3QoLnRvb2xiYXItc2VhcmNoYmFyKSA6OnNsb3R0ZWQoKil7LW1zLWZsZXgtaXRlbS1hbGlnbjpzdGFydDthbGlnbi1zZWxmOnN0YXJ0fTpob3N0KC50b29sYmFyLXNlYXJjaGJhcikgOjpzbG90dGVkKGlvbi1jaGlwKXttYXJnaW4tdG9wOjNweH06aG9zdCgudG9vbGJhci1zZWFyY2hiYXIpIDo6c2xvdHRlZChpb24tYmFjay1idXR0b24pe2hlaWdodDozOHB4fTo6c2xvdHRlZChpb24tYnV0dG9ucyl7bWluLWhlaWdodDozOHB4fTo6c2xvdHRlZChbc2xvdD1zdGFydF0pey1tcy1mbGV4LW9yZGVyOjI7b3JkZXI6Mn06OnNsb3R0ZWQoW3Nsb3Q9c2Vjb25kYXJ5XSl7LW1zLWZsZXgtb3JkZXI6MztvcmRlcjozfTo6c2xvdHRlZChbc2xvdD1wcmltYXJ5XSl7LW1zLWZsZXgtb3JkZXI6NTtvcmRlcjo1O3RleHQtYWxpZ246ZW5kfTo6c2xvdHRlZChbc2xvdD1lbmRdKXstbXMtZmxleC1vcmRlcjo2O29yZGVyOjY7dGV4dC1hbGlnbjplbmR9Omhvc3QoLnRvb2xiYXItdGl0bGUtbGFyZ2UpIC50b29sYmFyLWNvbnRhaW5lcnstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXA7LW1zLWZsZXgtYWxpZ246c3RhcnQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydH06aG9zdCgudG9vbGJhci10aXRsZS1sYXJnZSkgLnRvb2xiYXItY29udGVudCBpb24tdGl0bGV7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtb3JkZXI6ODtvcmRlcjo4O21pbi13aWR0aDoxMDAlfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gVG9vbGJhcjtcbn0oKSk7XG5leHBvcnQgeyBBcHAgYXMgaW9uX2FwcCwgQnV0dG9ucyBhcyBpb25fYnV0dG9ucywgQ29udGVudCBhcyBpb25fY29udGVudCwgRm9vdGVyIGFzIGlvbl9mb290ZXIsIEhlYWRlciBhcyBpb25faGVhZGVyLCBSb3V0ZXJPdXRsZXQgYXMgaW9uX3JvdXRlcl9vdXRsZXQsIFRvb2xiYXJUaXRsZSBhcyBpb25fdGl0bGUsIFRvb2xiYXIgYXMgaW9uX3Rvb2xiYXIgfTtcbiIsImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbnZhciBob3N0Q29udGV4dCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZWwpIHtcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XG59O1xuLyoqXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXG4gKi9cbnZhciBjcmVhdGVDb2xvckNsYXNzZXMgPSBmdW5jdGlvbiAoY29sb3IpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8gKF9hID0ge1xuICAgICAgICAgICAgJ2lvbi1jb2xvcic6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgX2FbXCJpb24tY29sb3ItXCIgKyBjb2xvcl0gPSB0cnVlLFxuICAgICAgICBfYSkgOiB1bmRlZmluZWQ7XG59O1xudmFyIGdldENsYXNzTGlzdCA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgcmV0dXJuIGFycmF5XG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9IG51bGw7IH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRyaW0oKTsgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT09ICcnOyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xufTtcbnZhciBnZXRDbGFzc01hcCA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XG4gICAgdmFyIG1hcCA9IHt9O1xuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7IHJldHVybiBtYXBbY10gPSB0cnVlOyB9KTtcbiAgICByZXR1cm4gbWFwO1xufTtcbnZhciBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcbnZhciBvcGVuVVJMID0gZnVuY3Rpb24gKHVybCwgZXYsIGRpcmVjdGlvbikgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcm91dGVyO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XG4gICAgICAgICAgICByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XG4gICAgICAgICAgICBpZiAocm91dGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICB9KTtcbn0pOyB9O1xuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==