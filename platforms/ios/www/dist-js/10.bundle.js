(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-app_8-md.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-app_8-md.entry.js ***!
  \*********************************************************************/
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
        get: function () { return ".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s  ion-button {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--box-shadow:none;margin-left:2px;margin-right:2px;height:32px;font-size:14px;font-weight:500}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-md-s  ion-button:not(.button-round) {--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button {--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-hover:rgba(var(--ion-color-contrast-rgb),0.08);--background-focused:rgba(var(--ion-color-contrast-rgb),0.24)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-solid , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-solid {--background:var(--ion-color-contrast);--background-activated:var(--ion-color-contrast);--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-tint);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-outline , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-outline {--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s  .button-has-icon-only.button-clear {--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:48px;height:48px}.sc-ion-buttons-md-s  .button {--background-hover:rgba(66,66,66,0.08)}.sc-ion-buttons-md-s  .button-solid {--color:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color-activated:var(--ion-toolbar-background,var(--ion-background-color,#fff));--background:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-activated:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-focused:var(--ion-toolbar-color-activated,#4a4a4a);--background-hover:rgba(66,66,66,0.92)}.sc-ion-buttons-md-s  .button-outline {--background:transparent;--background-activated:transparent;--border-color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-focused:rgba(66,66,66,0.1)}.sc-ion-buttons-md-s  .button-clear , .sc-ion-buttons-md-s  .button-outline {--color:initial;--color-activated:currentColor;--color-focused:var(--ion-toolbar-color,var(--ion-text-color,#424242))}.sc-ion-buttons-md-s  .button-clear {--background:transparent;--background-focused:rgba(66,66,66,0.1)}.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:1.4em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:1.4em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-md-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}"; },
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
        get: function () { return "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-md:before{left:0;top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==\");background-repeat:repeat-x;content:\"\"}:host-context([dir=rtl]) .footer-md:before,[dir=rtl] .footer-md:before{left:unset;right:unset;right:0;background-position:right 0 top 0}.footer-md[no-border]:before{display:none}"; },
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
        get: function () { return "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-md:after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:\"\"}:host-context([dir=rtl]) .header-md:after,[dir=rtl] .header-md:after{left:unset;right:unset;right:0;background-position:right 0 top -2px}.header-collapse-condense,.header-md[no-border]:after{display:none}"; },
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
        get: function () { return ":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,#c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(ion-segment){min-height:var(--min-height)}::slotted(.buttons-first-slot){margin-left:4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}"; },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2N1YmljLWJlemllci0yODEyZmRhMy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1hcHBfOC1tZC5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QywrQkFBK0IsRUFBRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29EOzs7Ozs7Ozs7Ozs7O0FDNUZwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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Qiw2RkFBNkYsK0JBQStCLGtCQUFrQix5QkFBeUIseUJBQXlCLDhCQUE4QixpQkFBaUIsNkZBQTZGLDhCQUE4QixtQkFBbUIsdUJBQXVCLHVCQUF1Qix3QkFBd0IsaUJBQWlCLFFBQVEsNEJBQTRCLGlCQUFpQixRQUFRLDBCQUEwQixpQkFBaUIsUUFBUSxlQUFlLHNCQUFzQixpQkFBaUIsUUFBUSxlQUFlLEVBQUUsRUFBRTtBQUM5b0c7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDMk07Ozs7Ozs7Ozs7Ozs7QUNqakM1TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0JBQWtCLEVBQUU7QUFDdEQsK0JBQStCLGlCQUFpQixFQUFFO0FBQ2xELGtDQUFrQyxpQkFBaUIsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHNCQUFzQixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxRQUFRLHVEQUFTO0FBQzlEO0FBQ0EsV0FBVyx5REFBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDa0YiLCJmaWxlIjoiMTAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCYXNlZCBvbjpcbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzczNDgwMDkveS1jb29yZGluYXRlLWZvci1hLWdpdmVuLXgtY3ViaWMtYmV6aWVyXG4gKiBodHRwczovL21hdGguc3RhY2tleGNoYW5nZS5jb20vcXVlc3Rpb25zLzI2ODQ2L2lzLXRoZXJlLWFuLWV4cGxpY2l0LWZvcm0tZm9yLWN1YmljLWIlQzMlQTl6aWVyLWN1cnZlc1xuICogVE9ETzogUmVkdWNlIHJvdW5kaW5nIGVycm9yXG4gKi9cbnZhciBQb2ludCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQb2ludCh4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuICAgIHJldHVybiBQb2ludDtcbn0oKSk7XG4vKipcbiAqIEdpdmVuIGEgY3ViaWMtYmV6aWVyIGN1cnZlLCBnZXQgdGhlIHggdmFsdWUgKHRpbWUpIGdpdmVuXG4gKiB0aGUgeSB2YWx1ZSAocHJvZ3Jlc3Npb24pLlxuICogRXg6IGN1YmljLWJlemllcigwLjMyLCAwLjcyLCAwLCAxKTtcbiAqIFAwOiAoMCwgMClcbiAqIFAxOiAoMC4zMiwgMC43MilcbiAqIFAyOiAoMCwgMSlcbiAqIFAzOiAoMSwgMSlcbiAqXG4gKiBJZiB5b3UgZ2l2ZSBhIGN1YmljIGJlemllciBjdXJ2ZSB0aGF0IG5ldmVyIHJlYWNoZXMgdGhlXG4gKiBwcm92aWRlZCBwcm9ncmVzc2lvbiwgdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiBOYU4uXG4gKi9cbnZhciBnZXRUaW1lR2l2ZW5Qcm9ncmVzc2lvbiA9IGZ1bmN0aW9uIChwMCwgcDEsIHAyLCBwMywgcHJvZ3Jlc3Npb24pIHtcbiAgICB2YXIgdFZhbHVlcyA9IHNvbHZlQ3ViaWNCZXppZXIocDAueSwgcDEueSwgcDIueSwgcDMueSwgcHJvZ3Jlc3Npb24pO1xuICAgIHJldHVybiBzb2x2ZUN1YmljUGFyYW1ldHJpY0VxdWF0aW9uKHAwLngsIHAxLngsIHAyLngsIHAzLngsIHRWYWx1ZXNbMF0pOyAvLyBUT0RPOiBBZGQgYmV0dGVyIHN0cmF0ZWd5IGZvciBkZWFsaW5nIHdpdGggbXVsdGlwbGUgc29sdXRpb25zXG59O1xuLyoqXG4gKiBTb2x2ZSBhIGN1YmljIGVxdWF0aW9uIGluIG9uZSBkaW1lbnNpb24gKHRpbWUpXG4gKi9cbnZhciBzb2x2ZUN1YmljUGFyYW1ldHJpY0VxdWF0aW9uID0gZnVuY3Rpb24gKHAwLCBwMSwgcDIsIHAzLCB0KSB7XG4gICAgdmFyIHBhcnRBID0gKDMgKiBwMSkgKiBNYXRoLnBvdyh0IC0gMSwgMik7XG4gICAgdmFyIHBhcnRCID0gKC0zICogcDIgKiB0KSArICgzICogcDIpICsgKHAzICogdCk7XG4gICAgdmFyIHBhcnRDID0gcDAgKiBNYXRoLnBvdyh0IC0gMSwgMyk7XG4gICAgcmV0dXJuIHQgKiAocGFydEEgKyAodCAqIHBhcnRCKSkgLSBwYXJ0Qztcbn07XG4vKipcbiAqIEZpbmQgdGhlIGB0YCB2YWx1ZSBmb3IgYSBjdWJpYyBiZXppZXIgdXNpbmcgQ2FyZGFubydzIGZvcm11bGFcbiAqL1xudmFyIHNvbHZlQ3ViaWNCZXppZXIgPSBmdW5jdGlvbiAocDAsIHAxLCBwMiwgcDMsIHJlZlBvaW50KSB7XG4gICAgcDAgLT0gcmVmUG9pbnQ7XG4gICAgcDEgLT0gcmVmUG9pbnQ7XG4gICAgcDIgLT0gcmVmUG9pbnQ7XG4gICAgcDMgLT0gcmVmUG9pbnQ7XG4gICAgdmFyIHJvb3RzID0gc29sdmVDdWJpY0VxdWF0aW9uKHAzIC0gMyAqIHAyICsgMyAqIHAxIC0gcDAsIDMgKiBwMiAtIDYgKiBwMSArIDMgKiBwMCwgMyAqIHAxIC0gMyAqIHAwLCBwMCk7XG4gICAgcmV0dXJuIHJvb3RzLmZpbHRlcihmdW5jdGlvbiAocm9vdCkgeyByZXR1cm4gcm9vdCA+PSAwICYmIHJvb3QgPD0gMTsgfSk7XG59O1xudmFyIHNvbHZlUXVhZHJhdGljRXF1YXRpb24gPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgIHZhciBkaXNjcmltaW5hbnQgPSBiICogYiAtIDQgKiBhICogYztcbiAgICBpZiAoZGlzY3JpbWluYW50IDwgMCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgKC1iICsgTWF0aC5zcXJ0KGRpc2NyaW1pbmFudCkpIC8gKDIgKiBhKSxcbiAgICAgICAgICAgICgtYiAtIE1hdGguc3FydChkaXNjcmltaW5hbnQpKSAvICgyICogYSlcbiAgICAgICAgXTtcbiAgICB9XG59O1xudmFyIHNvbHZlQ3ViaWNFcXVhdGlvbiA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgaWYgKGEgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHNvbHZlUXVhZHJhdGljRXF1YXRpb24oYiwgYywgZCk7XG4gICAgfVxuICAgIGIgLz0gYTtcbiAgICBjIC89IGE7XG4gICAgZCAvPSBhO1xuICAgIHZhciBwID0gKDMgKiBjIC0gYiAqIGIpIC8gMztcbiAgICB2YXIgcSA9ICgyICogYiAqIGIgKiBiIC0gOSAqIGIgKiBjICsgMjcgKiBkKSAvIDI3O1xuICAgIGlmIChwID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbTWF0aC5wb3coLXEsIDEgLyAzKV07XG4gICAgfVxuICAgIGVsc2UgaWYgKHEgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFtNYXRoLnNxcnQoLXApLCAtTWF0aC5zcXJ0KC1wKV07XG4gICAgfVxuICAgIHZhciBkaXNjcmltaW5hbnQgPSBNYXRoLnBvdyhxIC8gMiwgMikgKyBNYXRoLnBvdyhwIC8gMywgMyk7XG4gICAgaWYgKGRpc2NyaW1pbmFudCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW01hdGgucG93KHEgLyAyLCAxIC8gMikgLSBiIC8gM107XG4gICAgfVxuICAgIGVsc2UgaWYgKGRpc2NyaW1pbmFudCA+IDApIHtcbiAgICAgICAgcmV0dXJuIFtNYXRoLnBvdygtKHEgLyAyKSArIE1hdGguc3FydChkaXNjcmltaW5hbnQpLCAxIC8gMykgLSBNYXRoLnBvdygocSAvIDIpICsgTWF0aC5zcXJ0KGRpc2NyaW1pbmFudCksIDEgLyAzKSAtIGIgLyAzXTtcbiAgICB9XG4gICAgdmFyIHIgPSBNYXRoLnNxcnQoTWF0aC5wb3coLShwIC8gMyksIDMpKTtcbiAgICB2YXIgcGhpID0gTWF0aC5hY29zKC0ocSAvICgyICogTWF0aC5zcXJ0KE1hdGgucG93KC0ocCAvIDMpLCAzKSkpKSk7XG4gICAgdmFyIHMgPSAyICogTWF0aC5wb3cociwgMSAvIDMpO1xuICAgIHJldHVybiBbXG4gICAgICAgIHMgKiBNYXRoLmNvcyhwaGkgLyAzKSAtIGIgLyAzLFxuICAgICAgICBzICogTWF0aC5jb3MoKHBoaSArIDIgKiBNYXRoLlBJKSAvIDMpIC0gYiAvIDMsXG4gICAgICAgIHMgKiBNYXRoLmNvcygocGhpICsgNCAqIE1hdGguUEkpIC8gMykgLSBiIC8gM1xuICAgIF07XG59O1xuZXhwb3J0IHsgUG9pbnQgYXMgUCwgZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24gYXMgZyB9O1xuIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGdldElvbk1vZGUsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50LCBkIGFzIGNyZWF0ZUV2ZW50LCBmIGFzIHJlYWRUYXNrLCB3IGFzIHdyaXRlVGFzayB9IGZyb20gJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgeyBiIGFzIGNvbmZpZywgaSBhcyBpc1BsYXRmb3JtIH0gZnJvbSAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgYyBhcyBjbGFtcCB9IGZyb20gJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgJy4vY29uc3RhbnRzLTNjM2UxMDk5LmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzLCBoIGFzIGhvc3RDb250ZXh0IH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG5pbXBvcnQgeyBhIGFzIGF0dGFjaENvbXBvbmVudCwgZCBhcyBkZXRhY2hDb21wb25lbnQgfSBmcm9tICcuL2ZyYW1ld29yay1kZWxlZ2F0ZS1jMmUyZTFmNC5qcyc7XG5pbXBvcnQgeyB0IGFzIHRyYW5zaXRpb24gfSBmcm9tICcuL2luZGV4LTRkOTFmMDNhLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24sIFAgYXMgUG9pbnQgfSBmcm9tICcuL2N1YmljLWJlemllci0yODEyZmRhMy5qcyc7XG52YXIgQXBwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFwcChob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgfVxuICAgIEFwcC5wcm90b3R5cGUuY29tcG9uZW50RGlkTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAge1xuICAgICAgICAgICAgcklDKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNIeWJyaWQgPSBpc1BsYXRmb3JtKHdpbmRvdywgJ2h5YnJpZCcpO1xuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmdldEJvb2xlYW4oJ190ZXN0aW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0KCcuL3RhcC1jbGljay1jYTAwY2U3Zi5qcycpLnRoZW4oZnVuY3Rpb24gKG1vZHVsZSkgeyByZXR1cm4gbW9kdWxlLnN0YXJ0VGFwQ2xpY2soY29uZmlnKTsgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb25maWcuZ2V0Qm9vbGVhbignc3RhdHVzVGFwJywgaXNIeWJyaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi9zdGF0dXMtdGFwLTMyYzcyYzQzLmpzJykudGhlbihmdW5jdGlvbiAobW9kdWxlKSB7IHJldHVybiBtb2R1bGUuc3RhcnRTdGF0dXNUYXAoKTsgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb25maWcuZ2V0Qm9vbGVhbignaW5wdXRTaGltcycsIG5lZWRJbnB1dFNoaW1zKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi9pbnB1dC1zaGltcy1hNGZjNTNhYy5qcycpLnRoZW4oZnVuY3Rpb24gKG1vZHVsZSkgeyByZXR1cm4gbW9kdWxlLnN0YXJ0SW5wdXRTaGltcyhjb25maWcpOyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5nZXRCb29sZWFuKCdoYXJkd2FyZUJhY2tCdXR0b24nLCBpc0h5YnJpZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0KCcuL2hhcmR3YXJlLWJhY2stYnV0dG9uLTVhZmUzY2IwLmpzJykudGhlbihmdW5jdGlvbiAobW9kdWxlKSB7IHJldHVybiBtb2R1bGUuc3RhcnRIYXJkd2FyZUJhY2tCdXR0b24oKTsgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltcG9ydCgnLi9mb2N1cy12aXNpYmxlLTcwNzEzYTBjLmpzJykudGhlbihmdW5jdGlvbiAobW9kdWxlKSB7IHJldHVybiBtb2R1bGUuc3RhcnRGb2N1c1Zpc2libGUoKTsgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXBwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczogKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hWydpb24tcGFnZSddID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYVsnZm9yY2Utc3RhdHVzYmFyLXBhZGRpbmcnXSA9IGNvbmZpZy5nZXRCb29sZWFuKCdfZm9yY2VTdGF0dXNiYXJQYWRkaW5nJyksXG4gICAgICAgICAgICAgICAgX2EpIH0pKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcHAucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXBwLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcImh0bWwucGx0LW1vYmlsZSBpb24tYXBwey13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX1pb24tYXBwLmZvcmNlLXN0YXR1c2Jhci1wYWRkaW5ney0taW9uLXNhZmUtYXJlYS10b3A6MjBweH1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEFwcDtcbn0oKSk7XG52YXIgbmVlZElucHV0U2hpbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzUGxhdGZvcm0od2luZG93LCAnaW9zJykgJiYgaXNQbGF0Zm9ybSh3aW5kb3csICdtb2JpbGUnKTtcbn07XG52YXIgcklDID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgaWYgKCdyZXF1ZXN0SWRsZUNhbGxiYWNrJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2soY2FsbGJhY2spO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dChjYWxsYmFjaywgMzIpO1xuICAgIH1cbn07XG52YXIgQnV0dG9ucyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCdXR0b25zKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRydWUsIGJ1dHRvbnMgd2lsbCBkaXNhcHBlYXIgd2hlbiBpdHNcbiAgICAgICAgICogcGFyZW50IHRvb2xiYXIgaGFzIGZ1bGx5IGNvbGxhcHNlZCBpZiB0aGUgdG9vbGJhclxuICAgICAgICAgKiBpcyBub3QgdGhlIGZpcnN0IHRvb2xiYXIuIElmIHRoZSB0b29sYmFyIGlzIHRoZVxuICAgICAgICAgKiBmaXJzdCB0b29sYmFyLCB0aGUgYnV0dG9ucyB3aWxsIGJlIGhpZGRlbiBhbmQgd2lsbFxuICAgICAgICAgKiBvbmx5IGJlIHNob3duIG9uY2UgYWxsIHRvb2xiYXJzIGhhdmUgZnVsbHkgY29sbGFwc2VkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBPbmx5IGFwcGxpZXMgaW4gYGlvc2AgbW9kZSB3aXRoIGBjb2xsYXBzZWAgc2V0IHRvXG4gICAgICAgICAqIGB0cnVlYCBvbiBgaW9uLWhlYWRlcmAuXG4gICAgICAgICAqXG4gICAgICAgICAqIFR5cGljYWxseSB1c2VkIGZvciBbQ29sbGFwc2libGUgTGFyZ2UgVGl0bGVzXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2FwaS90aXRsZSNjb2xsYXBzaWJsZS1sYXJnZS10aXRsZXMpXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbGxhcHNlID0gZmFsc2U7XG4gICAgfVxuICAgIEJ1dHRvbnMucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVttb2RlXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2FbJ2J1dHRvbnMtY29sbGFwc2UnXSA9IHRoaXMuY29sbGFwc2UsXG4gICAgICAgICAgICAgICAgX2EpIH0pKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b25zLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIi5zYy1pb24tYnV0dG9ucy1tZC1oe2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt6LWluZGV4Ojk5fS5zYy1pb24tYnV0dG9ucy1tZC1zICBpb24tYnV0dG9uIHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7LS1wYWRkaW5nLXRvcDowOy0tcGFkZGluZy1ib3R0b206MDstLXBhZGRpbmctc3RhcnQ6OHB4Oy0tcGFkZGluZy1lbmQ6OHB4Oy0tYm94LXNoYWRvdzpub25lO21hcmdpbi1sZWZ0OjJweDttYXJnaW4tcmlnaHQ6MnB4O2hlaWdodDozMnB4O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LnNjLWlvbi1idXR0b25zLW1kLXMgIGlvbi1idXR0b24ge21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDoycHg7bWFyZ2luLWlubGluZS1zdGFydDoycHg7LXdlYmtpdC1tYXJnaW4tZW5kOjJweDttYXJnaW4taW5saW5lLWVuZDoycHh9fS5zYy1pb24tYnV0dG9ucy1tZC1zICBpb24tYnV0dG9uOm5vdCguYnV0dG9uLXJvdW5kKSB7LS1ib3JkZXItcmFkaXVzOjJweH0uc2MtaW9uLWJ1dHRvbnMtbWQtaC5pb24tY29sb3Iuc2MtaW9uLWJ1dHRvbnMtbWQtcyAgLmJ1dHRvbiAsIC5pb24tY29sb3IgLnNjLWlvbi1idXR0b25zLW1kLWguc2MtaW9uLWJ1dHRvbnMtbWQtcyAgLmJ1dHRvbiB7LS1jb2xvcjppbml0aWFsOy0tY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpOy0tY29sb3ItaG92ZXI6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KTstLWJhY2tncm91bmQtaG92ZXI6cmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwwLjA4KTstLWJhY2tncm91bmQtZm9jdXNlZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLDAuMjQpfS5zYy1pb24tYnV0dG9ucy1tZC1oLmlvbi1jb2xvci5zYy1pb24tYnV0dG9ucy1tZC1zICAuYnV0dG9uLXNvbGlkICwgLmlvbi1jb2xvciAuc2MtaW9uLWJ1dHRvbnMtbWQtaC5zYy1pb24tYnV0dG9ucy1tZC1zICAuYnV0dG9uLXNvbGlkIHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KTstLWJhY2tncm91bmQtYWN0aXZhdGVkOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCk7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLXNoYWRlKTstLWJhY2tncm91bmQtaG92ZXI6dmFyKC0taW9uLWNvbG9yLXRpbnQpOy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpOy0tY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7LS1jb2xvci1ob3Zlcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9LnNjLWlvbi1idXR0b25zLW1kLWguaW9uLWNvbG9yLnNjLWlvbi1idXR0b25zLW1kLXMgIC5idXR0b24tb3V0bGluZSAsIC5pb24tY29sb3IgLnNjLWlvbi1idXR0b25zLW1kLWguc2MtaW9uLWJ1dHRvbnMtbWQtcyAgLmJ1dHRvbi1vdXRsaW5lIHstLWJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfS5zYy1pb24tYnV0dG9ucy1tZC1zICAuYnV0dG9uLWhhcy1pY29uLW9ubHkuYnV0dG9uLWNsZWFyIHstLXBhZGRpbmctdG9wOjEycHg7LS1wYWRkaW5nLWVuZDoxMnB4Oy0tcGFkZGluZy1ib3R0b206MTJweDstLXBhZGRpbmctc3RhcnQ6MTJweDstLWJvcmRlci1yYWRpdXM6NTAlO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDt3aWR0aDo0OHB4O2hlaWdodDo0OHB4fS5zYy1pb24tYnV0dG9ucy1tZC1zICAuYnV0dG9uIHstLWJhY2tncm91bmQtaG92ZXI6cmdiYSg2Niw2Niw2NiwwLjA4KX0uc2MtaW9uLWJ1dHRvbnMtbWQtcyAgLmJ1dHRvbi1zb2xpZCB7LS1jb2xvcjp2YXIoLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kLHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpKTstLWNvbG9yLWFjdGl2YXRlZDp2YXIoLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kLHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpKTstLWJhY2tncm91bmQ6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsdmFyKC0taW9uLXRleHQtY29sb3IsIzQyNDI0MikpOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsdmFyKC0taW9uLXRleHQtY29sb3IsIzQyNDI0MikpOy0tYmFja2dyb3VuZC1mb2N1c2VkOnZhcigtLWlvbi10b29sYmFyLWNvbG9yLWFjdGl2YXRlZCwjNGE0YTRhKTstLWJhY2tncm91bmQtaG92ZXI6cmdiYSg2Niw2Niw2NiwwLjkyKX0uc2MtaW9uLWJ1dHRvbnMtbWQtcyAgLmJ1dHRvbi1vdXRsaW5lIHstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp0cmFuc3BhcmVudDstLWJvcmRlci1jb2xvcjp2YXIoLS1pb24tdG9vbGJhci1jb2xvcix2YXIoLS1pb24tdGV4dC1jb2xvciwjNDI0MjQyKSk7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6cmdiYSg2Niw2Niw2NiwwLjEpfS5zYy1pb24tYnV0dG9ucy1tZC1zICAuYnV0dG9uLWNsZWFyICwgLnNjLWlvbi1idXR0b25zLW1kLXMgIC5idXR0b24tb3V0bGluZSB7LS1jb2xvcjppbml0aWFsOy0tY29sb3ItYWN0aXZhdGVkOmN1cnJlbnRDb2xvcjstLWNvbG9yLWZvY3VzZWQ6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsdmFyKC0taW9uLXRleHQtY29sb3IsIzQyNDI0MikpfS5zYy1pb24tYnV0dG9ucy1tZC1zICAuYnV0dG9uLWNsZWFyIHstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6cmdiYSg2Niw2Niw2NiwwLjEpfS5zYy1pb24tYnV0dG9ucy1tZC1zICBpb24taWNvbltzbG90PXN0YXJ0XSB7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO21hcmdpbi1yaWdodDouM2VtO2ZvbnQtc2l6ZToxLjRlbX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LnNjLWlvbi1idXR0b25zLW1kLXMgIGlvbi1pY29uW3Nsb3Q9c3RhcnRdIHttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tZW5kOi4zZW07bWFyZ2luLWlubGluZS1lbmQ6LjNlbX19LnNjLWlvbi1idXR0b25zLW1kLXMgIGlvbi1pY29uW3Nsb3Q9ZW5kXSB7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO21hcmdpbi1sZWZ0Oi40ZW07Zm9udC1zaXplOjEuNGVtfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuc2MtaW9uLWJ1dHRvbnMtbWQtcyAgaW9uLWljb25bc2xvdD1lbmRdIHttYXJnaW4tbGVmdDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDouNGVtO21hcmdpbi1pbmxpbmUtc3RhcnQ6LjRlbX19LnNjLWlvbi1idXR0b25zLW1kLXMgIGlvbi1pY29uW3Nsb3Q9aWNvbi1vbmx5XSB7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7Zm9udC1zaXplOjEuOGVtfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQnV0dG9ucztcbn0oKSk7XG52YXIgQ29udGVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18xKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RTY3JvbGwgPSAwO1xuICAgICAgICB0aGlzLnF1ZXVlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNUb3AgPSAtMTtcbiAgICAgICAgdGhpcy5jQm90dG9tID0gLTE7XG4gICAgICAgIHRoaXMubW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIC8vIERldGFpbCBpcyB1c2VkIGluIGEgaG90IGxvb3AgaW4gdGhlIHNjcm9sbCBldmVudCwgYnkgYWxsb2NhdGluZyBpdCBoZXJlXG4gICAgICAgIC8vIFY4IHdpbGwgYmUgYWJsZSB0byBpbmxpbmUgYW55IHJlYWQvd3JpdGUgdG8gaXQgc2luY2UgaXQncyBhIG1vbm9tb3JwaGljIGNsYXNzLlxuICAgICAgICAvLyBodHRwczovL21yYWxlLnBoL2Jsb2cvMjAxNS8wMS8xMS93aGF0cy11cC13aXRoLW1vbm9tb3JwaGlzbS5odG1sXG4gICAgICAgIHRoaXMuZGV0YWlsID0ge1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgc2Nyb2xsTGVmdDogMCxcbiAgICAgICAgICAgIHR5cGU6ICdzY3JvbGwnLFxuICAgICAgICAgICAgZXZlbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHN0YXJ0WDogMCxcbiAgICAgICAgICAgIHN0YXJ0WTogMCxcbiAgICAgICAgICAgIHN0YXJ0VGltZVN0YW1wOiAwLFxuICAgICAgICAgICAgY3VycmVudFg6IDAsXG4gICAgICAgICAgICBjdXJyZW50WTogMCxcbiAgICAgICAgICAgIHZlbG9jaXR5WDogMCxcbiAgICAgICAgICAgIHZlbG9jaXR5WTogMCxcbiAgICAgICAgICAgIGRlbHRhWDogMCxcbiAgICAgICAgICAgIGRlbHRhWTogMCxcbiAgICAgICAgICAgIHRpbWVTdGFtcDogMCxcbiAgICAgICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGlzU2Nyb2xsaW5nOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgY29udGVudCB3aWxsIHNjcm9sbCBiZWhpbmQgdGhlIGhlYWRlcnNcbiAgICAgICAgICogYW5kIGZvb3RlcnMuIFRoaXMgZWZmZWN0IGNhbiBlYXNpbHkgYmUgc2VlbiBieSBzZXR0aW5nIHRoZSB0b29sYmFyXG4gICAgICAgICAqIHRvIHRyYW5zcGFyZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mdWxsc2NyZWVuID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB5b3Ugd2FudCB0byBlbmFibGUgdGhlIGNvbnRlbnQgc2Nyb2xsaW5nIGluIHRoZSBYIGF4aXMsIHNldCB0aGlzIHByb3BlcnR5IHRvIGB0cnVlYC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2Nyb2xsWCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgeW91IHdhbnQgdG8gZGlzYWJsZSB0aGUgY29udGVudCBzY3JvbGxpbmcgaW4gdGhlIFkgYXhpcywgc2V0IHRoaXMgcHJvcGVydHkgdG8gYGZhbHNlYC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2Nyb2xsWSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCZWNhdXNlIG9mIHBlcmZvcm1hbmNlIHJlYXNvbnMsIGlvblNjcm9sbCBldmVudHMgYXJlIGRpc2FibGVkIGJ5IGRlZmF1bHQsIGluIG9yZGVyIHRvIGVuYWJsZSB0aGVtXG4gICAgICAgICAqIGFuZCBzdGFydCBsaXN0ZW5pbmcgZnJvbSAoaW9uU2Nyb2xsKSwgc2V0IHRoaXMgcHJvcGVydHkgdG8gYHRydWVgLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zY3JvbGxFdmVudHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pb25TY3JvbGxTdGFydCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU2Nyb2xsU3RhcnRcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU2Nyb2xsID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TY3JvbGxcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU2Nyb2xsRW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TY3JvbGxFbmRcIiwgNyk7XG4gICAgfVxuICAgIGNsYXNzXzEucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm9uU2Nyb2xsRW5kKCk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb21wb25lbnREaWRMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25DbGljayA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICBpZiAodGhpcy5pc1Njcm9sbGluZykge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5zaG91bGRGb3JjZU92ZXJzY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIGZvcmNlT3ZlcnNjcm9sbCA9IF9hLmZvcmNlT3ZlcnNjcm9sbCwgbW9kZSA9IF9hLm1vZGU7XG4gICAgICAgIHJldHVybiBmb3JjZU92ZXJzY3JvbGwgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBtb2RlID09PSAnaW9zJyAmJiBpc1BsYXRmb3JtKCdpb3MnKVxuICAgICAgICAgICAgOiBmb3JjZU92ZXJzY3JvbGw7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIHJlYWRUYXNrKHRoaXMucmVhZERpbWVuc2lvbnMuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jVG9wICE9PSAwIHx8IHRoaXMuY0JvdHRvbSAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jVG9wID0gdGhpcy5jQm90dG9tID0gMDtcbiAgICAgICAgICAgIHRoaXMuZWwuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUucmVhZERpbWVuc2lvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwYWdlID0gZ2V0UGFnZUVsZW1lbnQodGhpcy5lbCk7XG4gICAgICAgIHZhciB0b3AgPSBNYXRoLm1heCh0aGlzLmVsLm9mZnNldFRvcCwgMCk7XG4gICAgICAgIHZhciBib3R0b20gPSBNYXRoLm1heChwYWdlLm9mZnNldEhlaWdodCAtIHRvcCAtIHRoaXMuZWwub2Zmc2V0SGVpZ2h0LCAwKTtcbiAgICAgICAgdmFyIGRpcnR5ID0gdG9wICE9PSB0aGlzLmNUb3AgfHwgYm90dG9tICE9PSB0aGlzLmNCb3R0b207XG4gICAgICAgIGlmIChkaXJ0eSkge1xuICAgICAgICAgICAgdGhpcy5jVG9wID0gdG9wO1xuICAgICAgICAgICAgdGhpcy5jQm90dG9tID0gYm90dG9tO1xuICAgICAgICAgICAgdGhpcy5lbC5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5vblNjcm9sbCA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdmFyIHNob3VsZFN0YXJ0ID0gIXRoaXMuaXNTY3JvbGxpbmc7XG4gICAgICAgIHRoaXMubGFzdFNjcm9sbCA9IHRpbWVTdGFtcDtcbiAgICAgICAgaWYgKHNob3VsZFN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLm9uU2Nyb2xsU3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucXVldWVkICYmIHRoaXMuc2Nyb2xsRXZlbnRzKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXVlZCA9IHRydWU7XG4gICAgICAgICAgICByZWFkVGFzayhmdW5jdGlvbiAodHMpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5xdWV1ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5kZXRhaWwuZXZlbnQgPSBldjtcbiAgICAgICAgICAgICAgICB1cGRhdGVTY3JvbGxEZXRhaWwoX3RoaXMuZGV0YWlsLCBfdGhpcy5zY3JvbGxFbCwgdHMsIHNob3VsZFN0YXJ0KTtcbiAgICAgICAgICAgICAgICBfdGhpcy5pb25TY3JvbGwuZW1pdChfdGhpcy5kZXRhaWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZWxlbWVudCB3aGVyZSB0aGUgYWN0dWFsIHNjcm9sbGluZyB0YWtlcyBwbGFjZS5cbiAgICAgKiBUaGlzIGVsZW1lbnQgY2FuIGJlIHVzZWQgdG8gc3Vic2NyaWJlIHRvIGBzY3JvbGxgIGV2ZW50cyBvciBtYW51YWxseSBtb2RpZnlcbiAgICAgKiBgc2Nyb2xsVG9wYC4gSG93ZXZlciwgaXQncyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIEFQSSBwcm92aWRlZCBieSBgaW9uLWNvbnRlbnRgOlxuICAgICAqXG4gICAgICogaS5lLiBVc2luZyBgaW9uU2Nyb2xsYCwgYGlvblNjcm9sbFN0YXJ0YCwgYGlvblNjcm9sbEVuZGAgZm9yIHNjcm9sbGluZyBldmVudHNcbiAgICAgKiBhbmQgYHNjcm9sbFRvUG9pbnQoKWAgdG8gc2Nyb2xsIHRoZSBjb250ZW50IGludG8gYSBjZXJ0YWluIHBvaW50LlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmdldFNjcm9sbEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zY3JvbGxFbCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdG8gdGhlIHRvcCBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIFRoZSBhbW91bnQgb2YgdGltZSB0byB0YWtlIHNjcm9sbGluZyB0byB0aGUgdG9wLiBEZWZhdWx0cyB0byBgMGAuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc2Nyb2xsVG9Ub3AgPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgaWYgKGR1cmF0aW9uID09PSB2b2lkIDApIHsgZHVyYXRpb24gPSAwOyB9XG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRvUG9pbnQodW5kZWZpbmVkLCAwLCBkdXJhdGlvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdG8gdGhlIGJvdHRvbSBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIFRoZSBhbW91bnQgb2YgdGltZSB0byB0YWtlIHNjcm9sbGluZyB0byB0aGUgYm90dG9tLiBEZWZhdWx0cyB0byBgMGAuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc2Nyb2xsVG9Cb3R0b20gPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgaWYgKGR1cmF0aW9uID09PSB2b2lkIDApIHsgZHVyYXRpb24gPSAwOyB9XG4gICAgICAgIHZhciB5ID0gdGhpcy5zY3JvbGxFbC5zY3JvbGxIZWlnaHQgLSB0aGlzLnNjcm9sbEVsLmNsaWVudEhlaWdodDtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVG9Qb2ludCh1bmRlZmluZWQsIHksIGR1cmF0aW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNjcm9sbCBieSBhIHNwZWNpZmllZCBYL1kgZGlzdGFuY2UgaW4gdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB4IFRoZSBhbW91bnQgdG8gc2Nyb2xsIGJ5IG9uIHRoZSBob3Jpem9udGFsIGF4aXMuXG4gICAgICogQHBhcmFtIHkgVGhlIGFtb3VudCB0byBzY3JvbGwgYnkgb24gdGhlIHZlcnRpY2FsIGF4aXMuXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIFRoZSBhbW91bnQgb2YgdGltZSB0byB0YWtlIHNjcm9sbGluZyBieSB0aGF0IGFtb3VudC5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5zY3JvbGxCeVBvaW50ID0gZnVuY3Rpb24gKHgsIHksIGR1cmF0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRvUG9pbnQoeCArIHRoaXMuc2Nyb2xsRWwuc2Nyb2xsTGVmdCwgeSArIHRoaXMuc2Nyb2xsRWwuc2Nyb2xsVG9wLCBkdXJhdGlvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdG8gYSBzcGVjaWZpZWQgWC9ZIGxvY2F0aW9uIGluIHRoZSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geCBUaGUgcG9pbnQgdG8gc2Nyb2xsIHRvIG9uIHRoZSBob3Jpem9udGFsIGF4aXMuXG4gICAgICogQHBhcmFtIHkgVGhlIHBvaW50IHRvIHNjcm9sbCB0byBvbiB0aGUgdmVydGljYWwgYXhpcy5cbiAgICAgKiBAcGFyYW0gZHVyYXRpb24gVGhlIGFtb3VudCBvZiB0aW1lIHRvIHRha2Ugc2Nyb2xsaW5nIHRvIHRoYXQgcG9pbnQuIERlZmF1bHRzIHRvIGAwYC5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5zY3JvbGxUb1BvaW50ID0gZnVuY3Rpb24gKHgsIHksIGR1cmF0aW9uKSB7XG4gICAgICAgIGlmIChkdXJhdGlvbiA9PT0gdm9pZCAwKSB7IGR1cmF0aW9uID0gMDsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZWwsIHJlc29sdmUsIHN0YXJ0VGltZSwgcHJvbWlzZSwgZnJvbVksIGZyb21YLCBkZWx0YVksIGRlbHRhWCwgc3RlcDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBlbCA9IHRoaXMuc2Nyb2xsRWw7XG4gICAgICAgICAgICAgICAgaWYgKGR1cmF0aW9uIDwgMzIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuc2Nyb2xsVG9wID0geTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoeCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zY3JvbGxMZWZ0ID0geDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyKSB7IHJldHVybiByZXNvbHZlID0gcjsgfSk7XG4gICAgICAgICAgICAgICAgZnJvbVkgPSBlbC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgZnJvbVggPSBlbC5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIGRlbHRhWSA9IHkgIT0gbnVsbCA/IHkgLSBmcm9tWSA6IDA7XG4gICAgICAgICAgICAgICAgZGVsdGFYID0geCAhPSBudWxsID8geCAtIGZyb21YIDogMDtcbiAgICAgICAgICAgICAgICBzdGVwID0gZnVuY3Rpb24gKHRpbWVTdGFtcCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGluZWFyVGltZSA9IE1hdGgubWluKDEsICgodGltZVN0YW1wIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uKSkgLSAxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWFzZWRUID0gTWF0aC5wb3cobGluZWFyVGltZSwgMykgKyAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsdGFZICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zY3JvbGxUb3AgPSBNYXRoLmZsb29yKChlYXNlZFQgKiBkZWx0YVkpICsgZnJvbVkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YVggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNjcm9sbExlZnQgPSBNYXRoLmZsb29yKChlYXNlZFQgKiBkZWx0YVgpICsgZnJvbVgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChlYXNlZFQgPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkbyBub3QgdXNlIERvbUNvbnRyb2xsZXIgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbXVzdCB1c2UgbmF0aXZlUmFmIGluIG9yZGVyIHRvIGZpcmUgaW4gdGhlIG5leHQgZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBhcyBhbnlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gY2hpbGwgb3V0IGZvciBhIGZyYW1lIGZpcnN0XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICh0cykge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSB0cztcbiAgICAgICAgICAgICAgICAgICAgc3RlcCh0cyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHByb21pc2VdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25TY3JvbGxTdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuaW9uU2Nyb2xsU3RhcnQuZW1pdCh7XG4gICAgICAgICAgICBpc1Njcm9sbGluZzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hEb2cpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy53YXRjaERvZyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2F0Y2hkb2dcbiAgICAgICAgdGhpcy53YXRjaERvZyA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5sYXN0U2Nyb2xsIDwgRGF0ZS5ub3coKSAtIDEyMCkge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uU2Nyb2xsRW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5vblNjcm9sbEVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLndhdGNoRG9nKTtcbiAgICAgICAgdGhpcy53YXRjaERvZyA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLmlzU2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlvblNjcm9sbEVuZC5lbWl0KHtcbiAgICAgICAgICAgICAgICBpc1Njcm9sbGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9iID0gdGhpcywgc2Nyb2xsWCA9IF9iLnNjcm9sbFgsIHNjcm9sbFkgPSBfYi5zY3JvbGxZO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHZhciBmb3JjZU92ZXJzY3JvbGwgPSB0aGlzLnNob3VsZEZvcmNlT3ZlcnNjcm9sbCgpO1xuICAgICAgICB2YXIgdHJhbnNpdGlvblNoYWRvdyA9IChtb2RlID09PSAnaW9zJyAmJiBjb25maWcuZ2V0Qm9vbGVhbignZXhwZXJpbWVudGFsVHJhbnNpdGlvblNoYWRvdycsIHRydWUpKTtcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpKSwgKF9hID0ge30sIF9hW21vZGVdID0gdHJ1ZSwgX2FbJ2NvbnRlbnQtc2l6aW5nJ10gPSBob3N0Q29udGV4dCgnaW9uLXBvcG92ZXInLCB0aGlzLmVsKSwgX2FbJ292ZXJzY3JvbGwnXSA9IGZvcmNlT3ZlcnNjcm9sbCwgX2EpKSwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAnLS1vZmZzZXQtdG9wJzogdGhpcy5jVG9wICsgXCJweFwiLFxuICAgICAgICAgICAgICAgICctLW9mZnNldC1ib3R0b20nOiB0aGlzLmNCb3R0b20gKyBcInB4XCIsXG4gICAgICAgICAgICB9IH0sIGgoXCJtYWluXCIsIHsgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAnaW5uZXItc2Nyb2xsJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnc2Nyb2xsLXgnOiBzY3JvbGxYLFxuICAgICAgICAgICAgICAgICdzY3JvbGwteSc6IHNjcm9sbFksXG4gICAgICAgICAgICAgICAgJ292ZXJzY3JvbGwnOiAoc2Nyb2xsWCB8fCBzY3JvbGxZKSAmJiBmb3JjZU92ZXJzY3JvbGxcbiAgICAgICAgICAgIH0sIHJlZjogZnVuY3Rpb24gKGVsKSB7IHJldHVybiBfdGhpcy5zY3JvbGxFbCA9IGVsOyB9LCBvblNjcm9sbDogZnVuY3Rpb24gKGV2KSB7IHJldHVybiBfdGhpcy5vblNjcm9sbChldik7IH0gfSwgaChcInNsb3RcIiwgbnVsbCkpLCB0cmFuc2l0aW9uU2hhZG93ID8gKGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0cmFuc2l0aW9uLWVmZmVjdFwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0cmFuc2l0aW9uLWNvdmVyXCIgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0cmFuc2l0aW9uLXNoYWRvd1wiIH0pKSkgOiBudWxsLCBoKFwic2xvdFwiLCB7IG5hbWU6IFwiZml4ZWRcIiB9KSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCI6aG9zdHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2ZmZik7LS1jb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKTstLXBhZGRpbmctdG9wOjBweDstLXBhZGRpbmctYm90dG9tOjBweDstLXBhZGRpbmctc3RhcnQ6MHB4Oy0tcGFkZGluZy1lbmQ6MHB4Oy0ta2V5Ym9hcmQtb2Zmc2V0OjBweDstLW9mZnNldC10b3A6MHB4Oy0tb2Zmc2V0LWJvdHRvbTowcHg7LS1vdmVyZmxvdzphdXRvO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MTtmbGV4OjE7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXJnaW46MCFpbXBvcnRhbnQ7cGFkZGluZzowIWltcG9ydGFudDtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCk7Y29udGFpbjpzaXplIHN0eWxlfTpob3N0KC5pb24tY29sb3IpIC5pbm5lci1zY3JvbGx7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdCgub3V0ZXItY29udGVudCl7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zdGVwLTUwLCNmMmYyZjIpfS5pbm5lci1zY3JvbGx7bGVmdDowO3JpZ2h0OjA7dG9wOmNhbGModmFyKC0tb2Zmc2V0LXRvcCkgKiAtMSk7Ym90dG9tOmNhbGModmFyKC0tb2Zmc2V0LWJvdHRvbSkgKiAtMSk7cGFkZGluZy1sZWZ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctcmlnaHQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOmNhbGModmFyKC0tcGFkZGluZy10b3ApICsgdmFyKC0tb2Zmc2V0LXRvcCkpO3BhZGRpbmctYm90dG9tOmNhbGModmFyKC0tcGFkZGluZy1ib3R0b20pICsgdmFyKC0ta2V5Ym9hcmQtb2Zmc2V0KSArIHZhcigtLW9mZnNldC1ib3R0b20pKTtwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6aGlkZGVufVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuaW5uZXItc2Nyb2xse3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpfX0uc2Nyb2xsLXgsLnNjcm9sbC15ey13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO3dpbGwtY2hhbmdlOnNjcm9sbC1wb3NpdGlvbjstbXMtc2Nyb2xsLWNoYWluaW5nOm5vbmU7b3ZlcnNjcm9sbC1iZWhhdmlvcjpjb250YWlufS5zY3JvbGwteXstbXMtdG91Y2gtYWN0aW9uOnBhbi15O3RvdWNoLWFjdGlvbjpwYW4teTtvdmVyZmxvdy15OnZhcigtLW92ZXJmbG93KX0uc2Nyb2xsLXh7LW1zLXRvdWNoLWFjdGlvbjpwYW4teDt0b3VjaC1hY3Rpb246cGFuLXg7b3ZlcmZsb3cteDp2YXIoLS1vdmVyZmxvdyl9LnNjcm9sbC14LnNjcm9sbC15ey1tcy10b3VjaC1hY3Rpb246YXV0bzt0b3VjaC1hY3Rpb246YXV0b30ub3ZlcnNjcm9sbDphZnRlciwub3ZlcnNjcm9sbDpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MXB4O2hlaWdodDoxcHg7Y29udGVudDpcXFwiXFxcIn0ub3ZlcnNjcm9sbDpiZWZvcmV7Ym90dG9tOi0xcHh9Lm92ZXJzY3JvbGw6YWZ0ZXJ7dG9wOi0xcHh9Omhvc3QoLmNvbnRlbnQtc2l6aW5nKXtjb250YWluOm5vbmV9Omhvc3QoLmNvbnRlbnQtc2l6aW5nKSAuaW5uZXItc2Nyb2xse3Bvc2l0aW9uOnJlbGF0aXZlfS50cmFuc2l0aW9uLWVmZmVjdHtsZWZ0Oi0xMDAlO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lfS50cmFuc2l0aW9uLWNvdmVyLC50cmFuc2l0aW9uLWVmZmVjdHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS50cmFuc2l0aW9uLWNvdmVye3JpZ2h0OjA7YmFja2dyb3VuZDojMDAwO29wYWNpdHk6LjF9LnRyYW5zaXRpb24tc2hhZG93e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt3aWR0aDoxMHB4O2hlaWdodDoxMDAlO2JhY2tncm91bmQtaW1hZ2U6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmdBQUFBZ0NBWUFBQUFJWHJnNEFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeWhwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTVRRMUlEYzVMakUyTXpRNU9Td2dNakF4T0M4d09DOHhNeTB4TmpvME1Eb3lNaUFnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESURJd01Ua2dLRTFoWTJsdWRHOXphQ2tpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TVRFM01EZ3pSa1E1UVRreU1URkZPVUV3TnpRNU1rSkZSRUUxTlVZMk1qUWlJSGh0Y0UxTk9rUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZNVEUzTURnelJrVTVRVGt5TVRGRk9VRXdOelE1TWtKRlJFRTFOVVkyTWpRaVBpQThlRzF3VFUwNlJHVnlhWFpsWkVaeWIyMGdjM1JTWldZNmFXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEb3hNVGN3T0ROR1FqbEJPVEl4TVVVNVFUQTNORGt5UWtWRVFUVTFSall5TkNJZ2MzUlNaV1k2Wkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRveE1UY3dPRE5HUXpsQk9USXhNVVU1UVRBM05Ea3lRa1ZFUVRVMVJqWXlOQ0l2UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUG1lUEV1UUFBQUJOU1VSQlZIamFZdnovL3o4REl4QXdNREF3QVRHTWhtRm1QRFF1T1Naa3MwQU1tb0pCYVFIamtQZkIwTGZnLzJnUWpWb3crSFB5L3lIdmc5R2lZalFmak1iQnFBV2pGZ3kvNGhvZ3dBRFlxd2R6eHk1QnV3QUFBQUJKUlU1RXJrSmdnZz09KTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteTtiYWNrZ3JvdW5kLXNpemU6MTBweCAxNnB4fVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NfMTtcbn0oKSk7XG52YXIgZ2V0UGFyZW50RWxlbWVudCA9IGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIC8vIG5vcm1hbCBlbGVtZW50IHdpdGggYSBwYXJlbnQgZWxlbWVudFxuICAgICAgICByZXR1cm4gZWwucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgaWYgKGVsLnBhcmVudE5vZGUgJiYgZWwucGFyZW50Tm9kZS5ob3N0KSB7XG4gICAgICAgIC8vIHNoYWRvdyBkb20ncyBkb2N1bWVudCBmcmFnbWVudFxuICAgICAgICByZXR1cm4gZWwucGFyZW50Tm9kZS5ob3N0O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG52YXIgZ2V0UGFnZUVsZW1lbnQgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICB2YXIgdGFicyA9IGVsLmNsb3Nlc3QoJ2lvbi10YWJzJyk7XG4gICAgaWYgKHRhYnMpIHtcbiAgICAgICAgcmV0dXJuIHRhYnM7XG4gICAgfVxuICAgIHZhciBwYWdlID0gZWwuY2xvc2VzdCgnaW9uLWFwcCxpb24tcGFnZSwuaW9uLXBhZ2UscGFnZS1pbm5lcicpO1xuICAgIGlmIChwYWdlKSB7XG4gICAgICAgIHJldHVybiBwYWdlO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UGFyZW50RWxlbWVudChlbCk7XG59O1xuLy8gKioqKioqKiogRE9NIFJFQUQgKioqKioqKioqKioqKioqKlxudmFyIHVwZGF0ZVNjcm9sbERldGFpbCA9IGZ1bmN0aW9uIChkZXRhaWwsIGVsLCB0aW1lc3RhbXAsIHNob3VsZFN0YXJ0KSB7XG4gICAgdmFyIHByZXZYID0gZGV0YWlsLmN1cnJlbnRYO1xuICAgIHZhciBwcmV2WSA9IGRldGFpbC5jdXJyZW50WTtcbiAgICB2YXIgcHJldlQgPSBkZXRhaWwudGltZVN0YW1wO1xuICAgIHZhciBjdXJyZW50WCA9IGVsLnNjcm9sbExlZnQ7XG4gICAgdmFyIGN1cnJlbnRZID0gZWwuc2Nyb2xsVG9wO1xuICAgIHZhciB0aW1lRGVsdGEgPSB0aW1lc3RhbXAgLSBwcmV2VDtcbiAgICBpZiAoc2hvdWxkU3RhcnQpIHtcbiAgICAgICAgLy8gcmVtZW1iZXIgdGhlIHN0YXJ0IHBvc2l0aW9uc1xuICAgICAgICBkZXRhaWwuc3RhcnRUaW1lU3RhbXAgPSB0aW1lc3RhbXA7XG4gICAgICAgIGRldGFpbC5zdGFydFggPSBjdXJyZW50WDtcbiAgICAgICAgZGV0YWlsLnN0YXJ0WSA9IGN1cnJlbnRZO1xuICAgICAgICBkZXRhaWwudmVsb2NpdHlYID0gZGV0YWlsLnZlbG9jaXR5WSA9IDA7XG4gICAgfVxuICAgIGRldGFpbC50aW1lU3RhbXAgPSB0aW1lc3RhbXA7XG4gICAgZGV0YWlsLmN1cnJlbnRYID0gZGV0YWlsLnNjcm9sbExlZnQgPSBjdXJyZW50WDtcbiAgICBkZXRhaWwuY3VycmVudFkgPSBkZXRhaWwuc2Nyb2xsVG9wID0gY3VycmVudFk7XG4gICAgZGV0YWlsLmRlbHRhWCA9IGN1cnJlbnRYIC0gZGV0YWlsLnN0YXJ0WDtcbiAgICBkZXRhaWwuZGVsdGFZID0gY3VycmVudFkgLSBkZXRhaWwuc3RhcnRZO1xuICAgIGlmICh0aW1lRGVsdGEgPiAwICYmIHRpbWVEZWx0YSA8IDEwMCkge1xuICAgICAgICB2YXIgdmVsb2NpdHlYID0gKGN1cnJlbnRYIC0gcHJldlgpIC8gdGltZURlbHRhO1xuICAgICAgICB2YXIgdmVsb2NpdHlZID0gKGN1cnJlbnRZIC0gcHJldlkpIC8gdGltZURlbHRhO1xuICAgICAgICBkZXRhaWwudmVsb2NpdHlYID0gdmVsb2NpdHlYICogMC43ICsgZGV0YWlsLnZlbG9jaXR5WCAqIDAuMztcbiAgICAgICAgZGV0YWlsLnZlbG9jaXR5WSA9IHZlbG9jaXR5WSAqIDAuNyArIGRldGFpbC52ZWxvY2l0eVkgKiAwLjM7XG4gICAgfVxufTtcbnZhciBGb290ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRm9vdGVyKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGZvb3RlciB3aWxsIGJlIHRyYW5zbHVjZW50LlxuICAgICAgICAgKiBPbmx5IGFwcGxpZXMgd2hlbiB0aGUgbW9kZSBpcyBgXCJpb3NcImAgYW5kIHRoZSBkZXZpY2Ugc3VwcG9ydHNcbiAgICAgICAgICogW2BiYWNrZHJvcC1maWx0ZXJgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2Ryb3AtZmlsdGVyI0Jyb3dzZXJfY29tcGF0aWJpbGl0eSkuXG4gICAgICAgICAqXG4gICAgICAgICAqIE5vdGU6IEluIG9yZGVyIHRvIHNjcm9sbCBjb250ZW50IGJlaGluZCB0aGUgZm9vdGVyLCB0aGUgYGZ1bGxzY3JlZW5gXG4gICAgICAgICAqIGF0dHJpYnV0ZSBuZWVkcyB0byBiZSBzZXQgb24gdGhlIGNvbnRlbnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyYW5zbHVjZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIEZvb3Rlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgdmFyIHRyYW5zbHVjZW50ID0gdGhpcy50cmFuc2x1Y2VudDtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgcm9sZTogXCJjb250ZW50aW5mb1wiLCBjbGFzczogKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIC8vIFVzZWQgaW50ZXJuYWxseSBmb3Igc3R5bGluZ1xuICAgICAgICAgICAgICAgIF9hW1wiZm9vdGVyLVwiICsgbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hW1wiZm9vdGVyLXRyYW5zbHVjZW50XCJdID0gdHJhbnNsdWNlbnQsXG4gICAgICAgICAgICAgICAgX2FbXCJmb290ZXItdHJhbnNsdWNlbnQtXCIgKyBtb2RlXSA9IHRyYW5zbHVjZW50LFxuICAgICAgICAgICAgICAgIF9hKSB9KSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9vdGVyLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcImlvbi1mb290ZXJ7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1vcmRlcjoxO29yZGVyOjE7d2lkdGg6MTAwJTt6LWluZGV4OjEwfWlvbi1mb290ZXIgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZHtwYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tc2FmZS1hcmVhLWJvdHRvbSwwKX0uZm9vdGVyLW1kOmJlZm9yZXtsZWZ0OjA7dG9wOi0ycHg7Ym90dG9tOmF1dG87YmFja2dyb3VuZC1wb3NpdGlvbjpsZWZ0IDAgdG9wIDA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MnB4O2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQUhCQU1BQUFEekR0QnhBQUFBRDFCTVZFVUFBQUFBQUFBQUFBQUFBQUFBQUFCUER1ZU5BQUFBQlhSU1RsTVVDUzBnQkloL1RYRUFBQUFhU1VSQlZBalhZeENFQWdZNFVJSUNCbU1vZ01zZ0ZMdEFBUUNOU3dYWktPZFB4Z0FBQUFCSlJVNUVya0pnZ2c9PVxcXCIpO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14O2NvbnRlbnQ6XFxcIlxcXCJ9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5mb290ZXItbWQ6YmVmb3JlLFtkaXI9cnRsXSAuZm9vdGVyLW1kOmJlZm9yZXtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjA7YmFja2dyb3VuZC1wb3NpdGlvbjpyaWdodCAwIHRvcCAwfS5mb290ZXItbWRbbm8tYm9yZGVyXTpiZWZvcmV7ZGlzcGxheTpub25lfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gRm9vdGVyO1xufSgpKTtcbnZhciBUUkFOU0lUSU9OID0gJ2FsbCAwLjJzIGVhc2UtaW4tb3V0JztcbnZhciBjbG9uZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFnTmFtZSkge1xuICAgIHZhciBnZXRDYWNoZWRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFnTmFtZSArIFwiLmlvbi1jbG9uZWQtZWxlbWVudFwiKTtcbiAgICBpZiAoZ2V0Q2FjaGVkRWwgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGdldENhY2hlZEVsO1xuICAgIH1cbiAgICB2YXIgY2xvbmVkRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgIGNsb25lZEVsLmNsYXNzTGlzdC5hZGQoJ2lvbi1jbG9uZWQtZWxlbWVudCcpO1xuICAgIGNsb25lZEVsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsKTtcbiAgICByZXR1cm4gY2xvbmVkRWw7XG59O1xudmFyIGNyZWF0ZUhlYWRlckluZGV4ID0gZnVuY3Rpb24gKGhlYWRlckVsKSB7XG4gICAgaWYgKCFoZWFkZXJFbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0b29sYmFycyA9IGhlYWRlckVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi10b29sYmFyJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWw6IGhlYWRlckVsLFxuICAgICAgICB0b29sYmFyczogQXJyYXkuZnJvbSh0b29sYmFycykubWFwKGZ1bmN0aW9uICh0b29sYmFyKSB7XG4gICAgICAgICAgICB2YXIgaW9uVGl0bGVFbCA9IHRvb2xiYXIucXVlcnlTZWxlY3RvcignaW9uLXRpdGxlJyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVsOiB0b29sYmFyLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRvb2xiYXIuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcudG9vbGJhci1iYWNrZ3JvdW5kJyksXG4gICAgICAgICAgICAgICAgaW9uVGl0bGVFbDogaW9uVGl0bGVFbCxcbiAgICAgICAgICAgICAgICBpbm5lclRpdGxlRWw6IChpb25UaXRsZUVsKSA/IGlvblRpdGxlRWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcudG9vbGJhci10aXRsZScpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBpb25CdXR0b25zRWw6IEFycmF5LmZyb20odG9vbGJhci5xdWVyeVNlbGVjdG9yQWxsKCdpb24tYnV0dG9ucycpKSB8fCBbXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkgfHwgW1tdXVxuICAgIH07XG59O1xudmFyIGhhbmRsZUNvbnRlbnRTY3JvbGwgPSBmdW5jdGlvbiAoc2Nyb2xsRWwsIHNjcm9sbEhlYWRlckluZGV4KSB7XG4gICAgcmVhZFRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gc2Nyb2xsRWwuc2Nyb2xsVG9wO1xuICAgICAgICB2YXIgc2NhbGUgPSBjbGFtcCgxLCAxICsgKC1zY3JvbGxUb3AgLyA1MDApLCAxLjEpO1xuICAgICAgICB3cml0ZVRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2NhbGVMYXJnZVRpdGxlcyhzY3JvbGxIZWFkZXJJbmRleC50b29sYmFycywgc2NhbGUpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG52YXIgc2V0VG9vbGJhckJhY2tncm91bmRPcGFjaXR5ID0gZnVuY3Rpb24gKHRvb2xiYXIsIG9wYWNpdHkpIHtcbiAgICBpZiAob3BhY2l0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRvb2xiYXIuYmFja2dyb3VuZC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnLS1vcGFjaXR5Jyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0b29sYmFyLmJhY2tncm91bmQuc3R5bGUuc2V0UHJvcGVydHkoJy0tb3BhY2l0eScsIG9wYWNpdHkudG9TdHJpbmcoKSk7XG4gICAgfVxufTtcbnZhciBoYW5kbGVUb29sYmFyQm9yZGVySW50ZXJzZWN0aW9uID0gZnVuY3Rpb24gKGV2LCBtYWluSGVhZGVySW5kZXgpIHtcbiAgICBpZiAoIWV2WzBdLmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHNjYWxlID0gKCgxIC0gZXZbMF0uaW50ZXJzZWN0aW9uUmF0aW8pICogMTAwKSAvIDc1O1xuICAgIHNldFRvb2xiYXJCYWNrZ3JvdW5kT3BhY2l0eShtYWluSGVhZGVySW5kZXgudG9vbGJhcnNbMF0sIChzY2FsZSA9PT0gMSkgPyB1bmRlZmluZWQgOiBzY2FsZSk7XG59O1xuLyoqXG4gKiBJZiB0b29sYmFycyBhcmUgaW50ZXJzZWN0aW5nLCBoaWRlIHRoZSBzY3JvbGxhYmxlIHRvb2xiYXIgY29udGVudFxuICogYW5kIHNob3cgdGhlIHByaW1hcnkgdG9vbGJhciBjb250ZW50LiBJZiB0aGUgdG9vbGJhcnMgYXJlIG5vdCBpbnRlcnNlY3RpbmcsXG4gKiBoaWRlIHRoZSBwcmltYXJ5IHRvb2xiYXIgY29udGVudCBhbmQgc2hvdyB0aGUgc2Nyb2xsYWJsZSB0b29sYmFyIGNvbnRlbnRcbiAqL1xudmFyIGhhbmRsZVRvb2xiYXJJbnRlcnNlY3Rpb24gPSBmdW5jdGlvbiAoZXYsIG1haW5IZWFkZXJJbmRleCwgc2Nyb2xsSGVhZGVySW5kZXgpIHtcbiAgICB3cml0ZVRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICBoYW5kbGVUb29sYmFyQm9yZGVySW50ZXJzZWN0aW9uKGV2LCBtYWluSGVhZGVySW5kZXgpO1xuICAgICAgICB2YXIgZXZlbnQgPSBldlswXTtcbiAgICAgICAgdmFyIGludGVyc2VjdGlvbiA9IGV2ZW50LmludGVyc2VjdGlvblJlY3Q7XG4gICAgICAgIHZhciBpbnRlcnNlY3Rpb25BcmVhID0gaW50ZXJzZWN0aW9uLndpZHRoICogaW50ZXJzZWN0aW9uLmhlaWdodDtcbiAgICAgICAgdmFyIHJvb3RBcmVhID0gZXZlbnQucm9vdEJvdW5kcy53aWR0aCAqIGV2ZW50LnJvb3RCb3VuZHMuaGVpZ2h0O1xuICAgICAgICB2YXIgaXNQYWdlSGlkZGVuID0gaW50ZXJzZWN0aW9uQXJlYSA9PT0gMCAmJiByb290QXJlYSA9PT0gMDtcbiAgICAgICAgdmFyIGxlZnREaWZmID0gTWF0aC5hYnMoaW50ZXJzZWN0aW9uLmxlZnQgLSBldmVudC5ib3VuZGluZ0NsaWVudFJlY3QubGVmdCk7XG4gICAgICAgIHZhciByaWdodERpZmYgPSBNYXRoLmFicyhpbnRlcnNlY3Rpb24ucmlnaHQgLSBldmVudC5ib3VuZGluZ0NsaWVudFJlY3QucmlnaHQpO1xuICAgICAgICB2YXIgaXNQYWdlVHJhbnNpdGlvbmluZyA9IGludGVyc2VjdGlvbkFyZWEgPiAwICYmIChsZWZ0RGlmZiA+PSA1IHx8IHJpZ2h0RGlmZiA+PSA1KTtcbiAgICAgICAgaWYgKGlzUGFnZUhpZGRlbiB8fCBpc1BhZ2VUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICBzZXRIZWFkZXJBY3RpdmUobWFpbkhlYWRlckluZGV4LCBmYWxzZSk7XG4gICAgICAgICAgICBzZXRIZWFkZXJBY3RpdmUoc2Nyb2xsSGVhZGVySW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGVyZSBpcyBhIGJ1ZyB3aXRoIEludGVyc2VjdGlvbk9ic2VydmVyIG9uIFNhZmFyaVxuICAgICAgICAgICAgICogd2hlcmUgYGV2ZW50LmlzSW50ZXJzZWN0aW5nID09PSBmYWxzZWAgd2hlbiBjYW5jZWxsaW5nXG4gICAgICAgICAgICAgKiBhIHN3aXBlIHRvIGdvIGJhY2sgZ2VzdHVyZS4gQ2hlY2tpbmcgdGhlIGludGVyc2VjdGlvblxuICAgICAgICAgICAgICogeCwgeSwgd2lkdGgsIGFuZCBoZWlnaHQgcHJvdmlkZXMgYSB3b3JrYXJvdW5kLiBUaGlzIGJ1Z1xuICAgICAgICAgICAgICogZG9lcyBub3QgaGFwcGVuIHdoZW4gdXNpbmcgU2FmYXJpICsgV2ViIEFuaW1hdGlvbnMsXG4gICAgICAgICAgICAgKiBvbmx5IFNhZmFyaSArIENTUyBBbmltYXRpb25zLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIgaGFzVmFsaWRJbnRlcnNlY3Rpb24gPSAoaW50ZXJzZWN0aW9uLnggPT09IDAgJiYgaW50ZXJzZWN0aW9uLnkgPT09IDApIHx8IChpbnRlcnNlY3Rpb24ud2lkdGggIT09IDAgJiYgaW50ZXJzZWN0aW9uLmhlaWdodCAhPT0gMCk7XG4gICAgICAgICAgICBpZiAoaGFzVmFsaWRJbnRlcnNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBzZXRIZWFkZXJBY3RpdmUobWFpbkhlYWRlckluZGV4KTtcbiAgICAgICAgICAgICAgICBzZXRIZWFkZXJBY3RpdmUoc2Nyb2xsSGVhZGVySW5kZXgsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZXRUb29sYmFyQmFja2dyb3VuZE9wYWNpdHkobWFpbkhlYWRlckluZGV4LnRvb2xiYXJzWzBdLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcbnZhciBzZXRIZWFkZXJBY3RpdmUgPSBmdW5jdGlvbiAoaGVhZGVySW5kZXgsIGFjdGl2ZSkge1xuICAgIGlmIChhY3RpdmUgPT09IHZvaWQgMCkgeyBhY3RpdmUgPSB0cnVlOyB9XG4gICAgd3JpdGVUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgaGVhZGVySW5kZXguZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlLWluYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoZWFkZXJJbmRleC5lbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItY29sbGFwc2UtY29uZGVuc2UtaW5hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbnZhciBzY2FsZUxhcmdlVGl0bGVzID0gZnVuY3Rpb24gKHRvb2xiYXJzLCBzY2FsZSwgdHJhbnNpdGlvbikge1xuICAgIGlmICh0b29sYmFycyA9PT0gdm9pZCAwKSB7IHRvb2xiYXJzID0gW107IH1cbiAgICBpZiAoc2NhbGUgPT09IHZvaWQgMCkgeyBzY2FsZSA9IDE7IH1cbiAgICBpZiAodHJhbnNpdGlvbiA9PT0gdm9pZCAwKSB7IHRyYW5zaXRpb24gPSBmYWxzZTsgfVxuICAgIHRvb2xiYXJzLmZvckVhY2goZnVuY3Rpb24gKHRvb2xiYXIpIHtcbiAgICAgICAgdmFyIGlvblRpdGxlID0gdG9vbGJhci5pb25UaXRsZUVsO1xuICAgICAgICB2YXIgdGl0bGVEaXYgPSB0b29sYmFyLmlubmVyVGl0bGVFbDtcbiAgICAgICAgaWYgKCFpb25UaXRsZSB8fCBpb25UaXRsZS5zaXplICE9PSAnbGFyZ2UnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGl0bGVEaXYuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gJ2xlZnQgY2VudGVyJztcbiAgICAgICAgdGl0bGVEaXYuc3R5bGUudHJhbnNpdGlvbiA9ICh0cmFuc2l0aW9uKSA/IFRSQU5TSVRJT04gOiAnJztcbiAgICAgICAgdGl0bGVEaXYuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZTNkKFwiICsgc2NhbGUgKyBcIiwgXCIgKyBzY2FsZSArIFwiLCAxKVwiO1xuICAgIH0pO1xufTtcbnZhciBIZWFkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMuY29sbGFwc2libGVIZWFkZXJJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgaGVhZGVyIHdpbGwgYmUgdHJhbnNsdWNlbnQuXG4gICAgICAgICAqIE9ubHkgYXBwbGllcyB3aGVuIHRoZSBtb2RlIGlzIGBcImlvc1wiYCBhbmQgdGhlIGRldmljZSBzdXBwb3J0c1xuICAgICAgICAgKiBbYGJhY2tkcm9wLWZpbHRlcmBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZHJvcC1maWx0ZXIjQnJvd3Nlcl9jb21wYXRpYmlsaXR5KS5cbiAgICAgICAgICpcbiAgICAgICAgICogTm90ZTogSW4gb3JkZXIgdG8gc2Nyb2xsIGNvbnRlbnQgYmVoaW5kIHRoZSBoZWFkZXIsIHRoZSBgZnVsbHNjcmVlbmBcbiAgICAgICAgICogYXR0cmlidXRlIG5lZWRzIHRvIGJlIHNldCBvbiB0aGUgY29udGVudC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJhbnNsdWNlbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgY2xhc3NfMi5wcm90b3R5cGUuY29tcG9uZW50RGlkTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmNoZWNrQ29sbGFwc2libGVIZWFkZXIoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18yLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jaGVja0NvbGxhcHNpYmxlSGVhZGVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMi5wcm90b3R5cGUuY29tcG9uZW50RGlkVW5sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3lDb2xsYXBzaWJsZUhlYWRlcigpO1xuICAgIH07XG4gICAgY2xhc3NfMi5wcm90b3R5cGUuY2hlY2tDb2xsYXBzaWJsZUhlYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGhhc0NvbGxhcHNlLCBjYW5Db2xsYXBzZSwgcGFnZUVsLCBjb250ZW50RWw7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNDb2xsYXBzZSA9IHRoaXMuY29sbGFwc2UgPT09ICdjb25kZW5zZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5Db2xsYXBzZSA9IChoYXNDb2xsYXBzZSAmJiBnZXRJb25Nb2RlKHRoaXMpID09PSAnaW9zJykgPyBoYXNDb2xsYXBzZSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoIWNhbkNvbGxhcHNlICYmIHRoaXMuY29sbGFwc2libGVIZWFkZXJJbml0aWFsaXplZCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95Q29sbGFwc2libGVIZWFkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShjYW5Db2xsYXBzZSAmJiAhdGhpcy5jb2xsYXBzaWJsZUhlYWRlckluaXRpYWxpemVkKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlRWwgPSB0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1hcHAsaW9uLXBhZ2UsLmlvbi1wYWdlLHBhZ2UtaW5uZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRFbCA9IChwYWdlRWwpID8gcGFnZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1jb250ZW50JykgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zZXR1cENvbGxhcHNpYmxlSGVhZGVyKGNvbnRlbnRFbCwgcGFnZUVsKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMi5wcm90b3R5cGUuZGVzdHJveUNvbGxhcHNpYmxlSGVhZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEVsICYmIHRoaXMuY29udGVudFNjcm9sbENhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY29udGVudFNjcm9sbENhbGxiYWNrKTtcbiAgICAgICAgICAgIHRoaXMuY29udGVudFNjcm9sbENhbGxiYWNrID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18yLnByb3RvdHlwZS5zZXR1cENvbGxhcHNpYmxlSGVhZGVyID0gZnVuY3Rpb24gKGNvbnRlbnRFbCwgcGFnZUVsKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRlbnRFbCB8fCAhcGFnZUVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignaW9uLWhlYWRlciByZXF1aXJlcyBhIGNvbnRlbnQgdG8gY29sbGFwc2UsIG1ha2Ugc3VyZSB0aGVyZSBpcyBhbiBpb24tY29udGVudC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBjb250ZW50RWwuZ2V0U2Nyb2xsRWxlbWVudCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2Nyb2xsRWwgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhlYWRlcnMgPSBwYWdlRWwucXVlcnlTZWxlY3RvckFsbCgnaW9uLWhlYWRlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYWluSGVhZGVyID0gQXJyYXkuZnJvbShoZWFkZXJzKS5maW5kKGZ1bmN0aW9uIChoZWFkZXIpIHsgcmV0dXJuIGhlYWRlci5jb2xsYXBzZSAhPT0gJ2NvbmRlbnNlJzsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYWluSGVhZGVyIHx8ICFfdGhpcy5zY3JvbGxFbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYWluSGVhZGVySW5kZXggPSBjcmVhdGVIZWFkZXJJbmRleChtYWluSGVhZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsSGVhZGVySW5kZXggPSBjcmVhdGVIZWFkZXJJbmRleChfdGhpcy5lbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYWluSGVhZGVySW5kZXggfHwgIXNjcm9sbEhlYWRlckluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SGVhZGVyQWN0aXZlKG1haW5IZWFkZXJJbmRleCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1haW5IZWFkZXJIZWlnaHQgPSBtYWluSGVhZGVySW5kZXguZWwuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogSGFuZGxlIGludGVyYWN0aW9uIGJldHdlZW4gdG9vbGJhciBjb2xsYXBzZSBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogc2hvd2luZy9oaWRpbmcgY29udGVudCBpbiB0aGUgcHJpbWFyeSBpb24taGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGFzIHdlbGwgYXMgcHJvZ3Jlc3NpdmVseSBzaG93aW5nL2hpZGluZyB0aGUgbWFpbiBoZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogYm9yZGVyIGFzIHRoZSB0b3AtbW9zdCB0b29sYmFyIGNvbGxhcHNlcyBvciBleHBhbmRzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvb2xiYXJJbnRlcnNlY3Rpb24gPSBmdW5jdGlvbiAoZXYpIHsgaGFuZGxlVG9vbGJhckludGVyc2VjdGlvbihldiwgbWFpbkhlYWRlckluZGV4LCBzY3JvbGxIZWFkZXJJbmRleCk7IH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKHRvb2xiYXJJbnRlcnNlY3Rpb24sIHsgdGhyZXNob2xkOiBbMC4yNSwgMC4zLCAwLjQsIDAuNSwgMC42LCAwLjcsIDAuOCwgMC45LCAxXSwgcm9vdE1hcmdpbjogXCItXCIgKyBtYWluSGVhZGVySGVpZ2h0ICsgXCJweCAwcHggMHB4IDBweFwiIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlci5vYnNlcnZlKHNjcm9sbEhlYWRlckluZGV4LnRvb2xiYXJzWzBdLmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBIYW5kbGUgc2NhbGluZyBvZiBsYXJnZSBpT1MgdGl0bGVzIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHNob3dpbmcvaGlkaW5nIGJvcmRlciBvbiBsYXN0IHRvb2xiYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBpbiBwcmltYXJ5IGhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbnRlbnRTY3JvbGxDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgaGFuZGxlQ29udGVudFNjcm9sbChfdGhpcy5zY3JvbGxFbCwgc2Nyb2xsSGVhZGVySW5kZXgpOyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNjcm9sbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIF90aGlzLmNvbnRlbnRTY3JvbGxDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRlVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVFbGVtZW50KCdpb24tdGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9uZUVsZW1lbnQoJ2lvbi1iYWNrLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNpYmxlSGVhZGVySW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHZhciBjb2xsYXBzZSA9IHRoaXMuY29sbGFwc2UgfHwgJ25vbmUnO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyByb2xlOiBcImJhbm5lclwiLCBjbGFzczogKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIC8vIFVzZWQgaW50ZXJuYWxseSBmb3Igc3R5bGluZ1xuICAgICAgICAgICAgICAgIF9hW1wiaGVhZGVyLVwiICsgbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hW1wiaGVhZGVyLXRyYW5zbHVjZW50XCJdID0gdGhpcy50cmFuc2x1Y2VudCxcbiAgICAgICAgICAgICAgICBfYVtcImhlYWRlci1jb2xsYXBzZS1cIiArIGNvbGxhcHNlXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2FbXCJoZWFkZXItdHJhbnNsdWNlbnQtXCIgKyBtb2RlXSA9IHRoaXMudHJhbnNsdWNlbnQsXG4gICAgICAgICAgICAgICAgX2EpIH0pKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18yLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzIsIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiaW9uLWhlYWRlcntkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LW9yZGVyOi0xO29yZGVyOi0xO3dpZHRoOjEwMCU7ei1pbmRleDoxMH1pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxke3BhZGRpbmctdG9wOnZhcigtLWlvbi1zYWZlLWFyZWEtdG9wLDApfS5oZWFkZXItbWQ6YWZ0ZXJ7bGVmdDowO2JvdHRvbTotNXB4O2JhY2tncm91bmQtcG9zaXRpb246bGVmdCAwIHRvcCAtMnB4O3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjVweDtiYWNrZ3JvdW5kLWltYWdlOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQUhCQU1BQUFEekR0QnhBQUFBRDFCTVZFVUFBQUFBQUFBQUFBQUFBQUFBQUFCUER1ZU5BQUFBQlhSU1RsTVVDUzBnQkloL1RYRUFBQUFhU1VSQlZBalhZeENFQWdZNFVJSUNCbU1vZ01zZ0ZMdEFBUUNOU3dYWktPZFB4Z0FBQUFCSlJVNUVya0pnZ2c9PSk7YmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXg7Y29udGVudDpcXFwiXFxcIn06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmhlYWRlci1tZDphZnRlcixbZGlyPXJ0bF0gLmhlYWRlci1tZDphZnRlcntsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjA7YmFja2dyb3VuZC1wb3NpdGlvbjpyaWdodCAwIHRvcCAtMnB4fS5oZWFkZXItY29sbGFwc2UtY29uZGVuc2UsLmhlYWRlci1tZFtuby1ib3JkZXJdOmFmdGVye2Rpc3BsYXk6bm9uZX1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzI7XG59KCkpO1xudmFyIFJvdXRlck91dGxldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18zKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25FbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtb2RlIGRldGVybWluZXMgd2hpY2ggcGxhdGZvcm0gc3R5bGVzIHRvIHVzZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSByb3V0ZXItb3V0bGV0IHNob3VsZCBhbmltYXRlIHRoZSB0cmFuc2l0aW9uIG9mIGNvbXBvbmVudHMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFuaW1hdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pb25OYXZXaWxsTG9hZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTmF2V2lsbExvYWRcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uTmF2V2lsbENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTmF2V2lsbENoYW5nZVwiLCAzKTtcbiAgICAgICAgdGhpcy5pb25OYXZEaWRDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk5hdkRpZENoYW5nZVwiLCAzKTtcbiAgICB9XG4gICAgY2xhc3NfMy5wcm90b3R5cGUuc3dpcGVIYW5kbGVyQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlLnNldERpc2FibGVkKHRoaXMuc3dpcGVIYW5kbGVyID09PSB1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18zLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGltcG9ydCgnLi9zd2lwZS1iYWNrLTM1YWQ4ZTM3LmpzJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5nZXN0dXJlID0gKF9iLnNlbnQoKSkuY3JlYXRlU3dpcGVCYWNrR2VzdHVyZSh0aGlzLmVsLCBmdW5jdGlvbiAoKSB7IHJldHVybiAhIV90aGlzLnN3aXBlSGFuZGxlciAmJiBfdGhpcy5zd2lwZUhhbmRsZXIuY2FuU3RhcnQoKSAmJiBfdGhpcy5hbmltYXRpb25FbmFibGVkOyB9LCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zd2lwZUhhbmRsZXIgJiYgX3RoaXMuc3dpcGVIYW5kbGVyLm9uU3RhcnQoKTsgfSwgZnVuY3Rpb24gKHN0ZXApIHsgcmV0dXJuIF90aGlzLmFuaSAmJiBfdGhpcy5hbmkucHJvZ3Jlc3NTdGVwKHN0ZXApOyB9LCBmdW5jdGlvbiAoc2hvdWxkQ29tcGxldGUsIHN0ZXAsIGR1cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5hbmkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0aW9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5hbmkub25GaW5pc2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0aW9uRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuc3dpcGVIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3dpcGVIYW5kbGVyLm9uRW5kKHNob3VsZENvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgeyBvbmVUaW1lQ2FsbGJhY2s6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFjY291bnQgZm9yIHJvdW5kaW5nIGVycm9ycyBpbiBKU1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3U3RlcFZhbHVlID0gKHNob3VsZENvbXBsZXRlKSA/IC0wLjAwMSA6IDAuMDAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQW5pbWF0aW9uIHdpbGwgYmUgcmV2ZXJzZWQgaGVyZSwgc28gbmVlZCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiByZXZlcnNlIHRoZSBlYXNpbmcgY3VydmUgYXMgd2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBBZGRpdGlvbmFsbHksIHdlIG5lZWQgdG8gYWNjb3VudCBmb3IgdGhlIHRpbWUgcmVsYXRpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogdG8gdGhlIG5ldyBlYXNpbmcgY3VydmUsIGFzIGBzdGVwVmFsdWVgIGlzIGdvaW5nIHRvIGJlIGdpdmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGluIHRlcm1zIG9mIGEgbGluZWFyIGN1cnZlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzaG91bGRDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYW5pLmVhc2luZygnY3ViaWMtYmV6aWVyKDEsIDAsIDAuNjgsIDAuMjgpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGVwVmFsdWUgKz0gZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24obmV3IFBvaW50KDAsIDApLCBuZXcgUG9pbnQoMSwgMCksIG5ldyBQb2ludCgwLjY4LCAwLjI4KSwgbmV3IFBvaW50KDEsIDEpLCBzdGVwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0ZXBWYWx1ZSArPSBnZXRUaW1lR2l2ZW5Qcm9ncmVzc2lvbihuZXcgUG9pbnQoMCwgMCksIG5ldyBQb2ludCgwLjMyLCAwLjcyKSwgbmV3IFBvaW50KDAsIDEpLCBuZXcgUG9pbnQoMSwgMSksIHN0ZXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmFuaS5wcm9ncmVzc0VuZChzaG91bGRDb21wbGV0ZSA/IDEgOiAwLCBuZXdTdGVwVmFsdWUsIGR1cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXBlSGFuZGxlckNoYW5nZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18zLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pb25OYXZXaWxsTG9hZC5lbWl0KCk7XG4gICAgfTtcbiAgICBjbGFzc18zLnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGNsYXNzXzMucHJvdG90eXBlLmNvbW1pdCA9IGZ1bmN0aW9uIChlbnRlcmluZ0VsLCBsZWF2aW5nRWwsIG9wdHMpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHVubG9jaywgY2hhbmdlZCwgZV8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmxvY2soKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVubG9jayA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsyLCA0LCAsIDVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMudHJhbnNpdGlvbihlbnRlcmluZ0VsLCBsZWF2aW5nRWwsIG9wdHMpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgdW5sb2NrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgY2hhbmdlZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGNsYXNzXzMucHJvdG90eXBlLnNldFJvdXRlSWQgPSBmdW5jdGlvbiAoaWQsIHBhcmFtcywgZGlyZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2VkO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnNldFJvb3QoaWQsIHBhcmFtcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkaXJlY3Rpb24gPT09ICdyb290JyA/IDAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24gPT09ICdiYWNrJyA/ICdiYWNrJyA6ICdmb3J3YXJkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWQ6IGNoYW5nZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuYWN0aXZlRWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgY2xhc3NfMy5wcm90b3R5cGUuZ2V0Um91dGVJZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFjdGl2ZTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmUgPSB0aGlzLmFjdGl2ZUVsO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBhY3RpdmUgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogYWN0aXZlLnRhZ05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBhY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgIH0gOiB1bmRlZmluZWRdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMy5wcm90b3R5cGUuc2V0Um9vdCA9IGZ1bmN0aW9uIChjb21wb25lbnQsIHBhcmFtcywgb3B0cykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbGVhdmluZ0VsLCBlbnRlcmluZ0VsO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQ29tcG9uZW50ID09PSBjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmluZ0VsID0gdGhpcy5hY3RpdmVFbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGF0dGFjaENvbXBvbmVudCh0aGlzLmRlbGVnYXRlLCB0aGlzLmVsLCBjb21wb25lbnQsIFsnaW9uLXBhZ2UnLCAnaW9uLXBhZ2UtaW52aXNpYmxlJ10sIHBhcmFtcyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRlcmluZ0VsID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVDb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUVsID0gZW50ZXJpbmdFbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbW1pdCBhbmltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY29tbWl0KGVudGVyaW5nRWwsIGxlYXZpbmdFbCwgb3B0cyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb21taXQgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBkZXRhY2hDb21wb25lbnQodGhpcy5kZWxlZ2F0ZSwgbGVhdmluZ0VsKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0cnVlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18zLnByb3RvdHlwZS50cmFuc2l0aW9uID0gZnVuY3Rpb24gKGVudGVyaW5nRWwsIGxlYXZpbmdFbCwgb3B0cykge1xuICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7fTsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EsIGVsLCBtb2RlLCBhbmltYXRlZCwgYW5pbWF0aW9uQnVpbGRlcjtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVhdmluZ0VsID09PSBlbnRlcmluZ0VsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVtaXQgbmF2IHdpbGwgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlvbk5hdldpbGxDaGFuZ2UuZW1pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzLCBlbCA9IF9hLmVsLCBtb2RlID0gX2EubW9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkID0gdGhpcy5hbmltYXRlZCAmJiBjb25maWcuZ2V0Qm9vbGVhbignYW5pbWF0ZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkJ1aWxkZXIgPSB0aGlzLmFuaW1hdGlvbiB8fCBvcHRzLmFuaW1hdGlvbkJ1aWxkZXIgfHwgY29uZmlnLmdldCgnbmF2QW5pbWF0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0cmFuc2l0aW9uKE9iamVjdC5hc3NpZ24oeyBtb2RlOiBtb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlZDogYW5pbWF0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkJ1aWxkZXI6IGFuaW1hdGlvbkJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyaW5nRWw6IGVudGVyaW5nRWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZpbmdFbDogbGVhdmluZ0VsLCBiYXNlRWw6IGVsLCBwcm9ncmVzc0NhbGxiYWNrOiAob3B0cy5wcm9ncmVzc0FuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoYW5pKSB7IHJldHVybiBfdGhpcy5hbmkgPSBhbmk7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkKSB9LCBvcHRzKSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbWl0IG5hdiBjaGFuZ2VkIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlvbk5hdkRpZENoYW5nZS5lbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdHJ1ZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMy5wcm90b3R5cGUubG9jayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHAsIHJlc29sdmU7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBwID0gdGhpcy53YWl0UHJvbWlzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2FpdFByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocikgeyByZXR1cm4gcmVzb2x2ZSA9IHI7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocCAhPT0gdW5kZWZpbmVkKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBwXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovLCByZXNvbHZlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18zLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoaChcInNsb3RcIiwgbnVsbCkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzMucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMywgXCJ3YXRjaGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcInN3aXBlSGFuZGxlclwiOiBbXCJzd2lwZUhhbmRsZXJDaGFuZ2VkXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMywgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCI6aG9zdHtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTtjb250YWluOmxheW91dCBzaXplIHN0eWxlO292ZXJmbG93OmhpZGRlbjt6LWluZGV4OjB9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18zO1xufSgpKTtcbnZhciBUb29sYmFyVGl0bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVG9vbGJhclRpdGxlKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5pb25TdHlsZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU3R5bGVcIiwgNyk7XG4gICAgfVxuICAgIFRvb2xiYXJUaXRsZS5wcm90b3R5cGUuc2l6ZUNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgfTtcbiAgICBUb29sYmFyVGl0bGUucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgIH07XG4gICAgVG9vbGJhclRpdGxlLnByb3RvdHlwZS5lbWl0U3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIHNpemUgPSB0aGlzLmdldFNpemUoKTtcbiAgICAgICAgdGhpcy5pb25TdHlsZS5lbWl0KChfYSA9IHt9LFxuICAgICAgICAgICAgX2FbXCJ0aXRsZS1cIiArIHNpemVdID0gdHJ1ZSxcbiAgICAgICAgICAgIF9hKSk7XG4gICAgfTtcbiAgICBUb29sYmFyVGl0bGUucHJvdG90eXBlLmdldFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5zaXplICE9PSB1bmRlZmluZWQpID8gdGhpcy5zaXplIDogJ2RlZmF1bHQnO1xuICAgIH07XG4gICAgVG9vbGJhclRpdGxlLnByb3RvdHlwZS5nZXRNb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHZhciB0b29sYmFyID0gdGhpcy5lbC5jbG9zZXN0KCdpb24tdG9vbGJhcicpO1xuICAgICAgICByZXR1cm4gKHRvb2xiYXIgJiYgdG9vbGJhci5tb2RlKSB8fCBtb2RlO1xuICAgIH07XG4gICAgVG9vbGJhclRpdGxlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIG1vZGUgPSB0aGlzLmdldE1vZGUoKTtcbiAgICAgICAgdmFyIHNpemUgPSB0aGlzLmdldFNpemUoKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IE9iamVjdC5hc3NpZ24oKF9hID0ge30sIF9hW21vZGVdID0gdHJ1ZSwgX2FbXCJ0aXRsZS1cIiArIG1vZGVdID0gdHJ1ZSwgX2FbXCJ0aXRsZS1cIiArIHNpemVdID0gdHJ1ZSwgX2EpLCBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvcikpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0b29sYmFyLXRpdGxlXCIgfSwgaChcInNsb3RcIiwgbnVsbCkpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVG9vbGJhclRpdGxlLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRvb2xiYXJUaXRsZSwgXCJ3YXRjaGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcInNpemVcIjogW1wic2l6ZUNoYW5nZWRcIl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUb29sYmFyVGl0bGUsIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiOmhvc3R7LS1jb2xvcjppbml0aWFsO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4OjE7ZmxleDoxOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtjb2xvcjp2YXIoLS1jb2xvcil9Omhvc3QoLnRpdGxlLWlvcy50aXRsZS1kZWZhdWx0KSw6aG9zdCgudGl0bGUtaW9zLnRpdGxlLWxhcmdlKXtsZWZ0OjA7dG9wOjA7cGFkZGluZy1sZWZ0OjkwcHg7cGFkZGluZy1yaWdodDo5MHB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7Zm9udC1zaXplOjE3cHg7Zm9udC13ZWlnaHQ6NjAwO3RleHQtYWxpZ246Y2VudGVyOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtwb2ludGVyLWV2ZW50czpub25lfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS50aXRsZS1pb3MudGl0bGUtZGVmYXVsdCw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkudGl0bGUtaW9zLnRpdGxlLWxhcmdlLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC50aXRsZS1pb3MudGl0bGUtZGVmYXVsdCksOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLnRpdGxlLWlvcy50aXRsZS1sYXJnZSl7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdCgudGl0bGUtaW9zLnRpdGxlLWRlZmF1bHQpLDpob3N0KC50aXRsZS1pb3MudGl0bGUtbGFyZ2Upe3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDo5MHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjkwcHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo5MHB4O3BhZGRpbmctaW5saW5lLWVuZDo5MHB4fX06aG9zdCgudGl0bGUtbWQpe3BhZGRpbmctbGVmdDoyMHB4O3BhZGRpbmctcmlnaHQ6MjBweDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NTAwO2xldHRlci1zcGFjaW5nOi4wMTI1ZW19XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0KC50aXRsZS1tZCl7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjIwcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MjBweDstd2Via2l0LXBhZGRpbmctZW5kOjIwcHg7cGFkZGluZy1pbmxpbmUtZW5kOjIwcHh9fTpob3N0KC5pb24tY29sb3Ipe2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX0udG9vbGJhci10aXRsZXtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3BvaW50ZXItZXZlbnRzOmF1dG99Omhvc3QoLnRpdGxlLXNtYWxsKSAudG9vbGJhci10aXRsZXt3aGl0ZS1zcGFjZTpub3JtYWx9Omhvc3QoLnRpdGxlLWlvcy50aXRsZS1zbWFsbCl7cGFkZGluZy1sZWZ0OjlweDtwYWRkaW5nLXJpZ2h0OjlweDtwYWRkaW5nLXRvcDo2cHg7cGFkZGluZy1ib3R0b206MTZweDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2ZvbnQtc2l6ZToxM3B4O3RleHQtYWxpZ246Y2VudGVyfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdCgudGl0bGUtaW9zLnRpdGxlLXNtYWxsKXtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6OXB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjlweDstd2Via2l0LXBhZGRpbmctZW5kOjlweDtwYWRkaW5nLWlubGluZS1lbmQ6OXB4fX06aG9zdCgudGl0bGUtbWQudGl0bGUtc21hbGwpe3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Zm9udC1zaXplOjE1cHg7Zm9udC13ZWlnaHQ6NDAwfTpob3N0KC50aXRsZS1pb3MudGl0bGUtbGFyZ2Upe3BhZGRpbmctbGVmdDoxNnB4O3BhZGRpbmctcmlnaHQ6MTZweDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7Ym90dG9tOjA7LW1zLWZsZXgtYWxpZ246ZW5kO2FsaWduLWl0ZW1zOmZsZXgtZW5kO21pbi13aWR0aDoxMDAlO3BhZGRpbmctYm90dG9tOjZweDtmb250LXNpemU6MzRweDtmb250LXdlaWdodDo3MDA7dGV4dC1hbGlnbjpzdGFydH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3QoLnRpdGxlLWlvcy50aXRsZS1sYXJnZSl7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjE2cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTZweDstd2Via2l0LXBhZGRpbmctZW5kOjE2cHg7cGFkZGluZy1pbmxpbmUtZW5kOjE2cHh9fVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gVG9vbGJhclRpdGxlO1xufSgpKTtcbnZhciBUb29sYmFyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRvb2xiYXIoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuU3R5bGVzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBUb29sYmFyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJ1dHRvbnMgPSBBcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnaW9uLWJ1dHRvbnMnKSk7XG4gICAgICAgIHZhciBmaXJzdEJ1dHRvbnMgPSBidXR0b25zLmZpbmQoZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbi5zbG90ID09PSAnc3RhcnQnO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGZpcnN0QnV0dG9ucykge1xuICAgICAgICAgICAgZmlyc3RCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMtZmlyc3Qtc2xvdCcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBidXR0b25zUmV2ZXJzZWQgPSBidXR0b25zLnJldmVyc2UoKTtcbiAgICAgICAgdmFyIGxhc3RCdXR0b25zID0gYnV0dG9uc1JldmVyc2VkLmZpbmQoZnVuY3Rpb24gKGJ1dHRvbikgeyByZXR1cm4gYnV0dG9uLnNsb3QgPT09ICdlbmQnOyB9KSB8fFxuICAgICAgICAgICAgYnV0dG9uc1JldmVyc2VkLmZpbmQoZnVuY3Rpb24gKGJ1dHRvbikgeyByZXR1cm4gYnV0dG9uLnNsb3QgPT09ICdwcmltYXJ5JzsgfSkgfHxcbiAgICAgICAgICAgIGJ1dHRvbnNSZXZlcnNlZC5maW5kKGZ1bmN0aW9uIChidXR0b24pIHsgcmV0dXJuIGJ1dHRvbi5zbG90ID09PSAnc2Vjb25kYXJ5JzsgfSk7XG4gICAgICAgIGlmIChsYXN0QnV0dG9ucykge1xuICAgICAgICAgICAgbGFzdEJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucy1sYXN0LXNsb3QnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9vbGJhci5wcm90b3R5cGUuY2hpbGRyZW5TdHlsZSA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdmFyIHRhZ05hbWUgPSBldi50YXJnZXQudGFnTmFtZTtcbiAgICAgICAgdmFyIHVwZGF0ZWRTdHlsZXMgPSBldi5kZXRhaWw7XG4gICAgICAgIHZhciBuZXdTdHlsZXMgPSB7fTtcbiAgICAgICAgdmFyIGNoaWxkU3R5bGVzID0gdGhpcy5jaGlsZHJlblN0eWxlcy5nZXQodGFnTmFtZSkgfHwge307XG4gICAgICAgIHZhciBoYXNTdHlsZUNoYW5nZSA9IGZhbHNlO1xuICAgICAgICBPYmplY3Qua2V5cyh1cGRhdGVkU3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZEtleSA9IFwidG9vbGJhci1cIiArIGtleTtcbiAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IHVwZGF0ZWRTdHlsZXNba2V5XTtcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gY2hpbGRTdHlsZXNbY2hpbGRLZXldKSB7XG4gICAgICAgICAgICAgICAgaGFzU3R5bGVDaGFuZ2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbmV3U3R5bGVzW2NoaWxkS2V5XSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaGFzU3R5bGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5TdHlsZXMuc2V0KHRhZ05hbWUsIG5ld1N0eWxlcyk7XG4gICAgICAgICAgICB0aGlzLmVsLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRvb2xiYXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHZhciBjaGlsZFN0eWxlcyA9IHt9O1xuICAgICAgICB0aGlzLmNoaWxkcmVuU3R5bGVzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGNoaWxkU3R5bGVzLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKChfYSA9IHsgJ2luLXRvb2xiYXInOiBob3N0Q29udGV4dCgnaW9uLXRvb2xiYXInLCB0aGlzLmVsKSB9LCBfYVttb2RlXSA9IHRydWUsIF9hKSwgY2hpbGRTdHlsZXMpLCBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvcikpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0b29sYmFyLWJhY2tncm91bmRcIiB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInRvb2xiYXItY29udGFpbmVyXCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBcInN0YXJ0XCIgfSksIGgoXCJzbG90XCIsIHsgbmFtZTogXCJzZWNvbmRhcnlcIiB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInRvb2xiYXItY29udGVudFwiIH0sIGgoXCJzbG90XCIsIG51bGwpKSwgaChcInNsb3RcIiwgeyBuYW1lOiBcInByaW1hcnlcIiB9KSwgaChcInNsb3RcIiwgeyBuYW1lOiBcImVuZFwiIH0pKSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRvb2xiYXIucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVG9vbGJhciwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCI6aG9zdHstLWJvcmRlci13aWR0aDowOy0tYm9yZGVyLXN0eWxlOnNvbGlkOy0tb3BhY2l0eToxOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO3BhZGRpbmctbGVmdDp2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpO3BhZGRpbmctcmlnaHQ6dmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCk7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCk7Y29udGFpbjpjb250ZW50O3otaW5kZXg6MTA7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdHtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpfX06aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KC5pb24tY29sb3IpIC50b29sYmFyLWJhY2tncm91bmR7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9LnRvb2xiYXItY29udGFpbmVye3BhZGRpbmctbGVmdDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLXJpZ2h0OnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDp2YXIoLS1wYWRkaW5nLXRvcCk7cGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy1ib3R0b20pO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3dpZHRoOjEwMCU7bWluLWhlaWdodDp2YXIoLS1taW4taGVpZ2h0KTtjb250YWluOmNvbnRlbnQ7b3ZlcmZsb3c6aGlkZGVuO3otaW5kZXg6MTA7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsudG9vbGJhci1jb250YWluZXJ7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCl9fS50b29sYmFyLWJhY2tncm91bmR7dG9wOjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbnRhaW46c3RyaWN0O29wYWNpdHk6dmFyKC0tb3BhY2l0eSk7ei1pbmRleDotMTtwb2ludGVyLWV2ZW50czpub25lfS50b29sYmFyLWJhY2tncm91bmQsOjpzbG90dGVkKGlvbi1wcm9ncmVzcy1iYXIpe2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlfTpob3N0ey0tYmFja2dyb3VuZDp2YXIoLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kLHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpKTstLWNvbG9yOnZhcigtLWlvbi10b29sYmFyLWNvbG9yLHZhcigtLWlvbi10ZXh0LWNvbG9yLCM0MjQyNDIpKTstLWJvcmRlci1jb2xvcjp2YXIoLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3IsdmFyKC0taW9uLWJvcmRlci1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2MxYzRjZCkpKTstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWJvdHRvbTowOy0tcGFkZGluZy1zdGFydDowOy0tcGFkZGluZy1lbmQ6MDstLW1pbi1oZWlnaHQ6NTZweH0udG9vbGJhci1jb250ZW50ey1tcy1mbGV4OjE7ZmxleDoxOy1tcy1mbGV4LW9yZGVyOjM7b3JkZXI6MzttaW4td2lkdGg6MDttYXgtd2lkdGg6MTAwJX06OnNsb3R0ZWQoaW9uLXNlZ21lbnQpe21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCl9OjpzbG90dGVkKC5idXR0b25zLWZpcnN0LXNsb3Qpe21hcmdpbi1sZWZ0OjRweH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7OjpzbG90dGVkKC5idXR0b25zLWZpcnN0LXNsb3Qpe21hcmdpbi1sZWZ0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjRweDttYXJnaW4taW5saW5lLXN0YXJ0OjRweH19OjpzbG90dGVkKC5idXR0b25zLWxhc3Qtc2xvdCl7bWFyZ2luLXJpZ2h0OjRweH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7OjpzbG90dGVkKC5idXR0b25zLWxhc3Qtc2xvdCl7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLWVuZDo0cHg7bWFyZ2luLWlubGluZS1lbmQ6NHB4fX06OnNsb3R0ZWQoW3Nsb3Q9c3RhcnRdKXstbXMtZmxleC1vcmRlcjoyO29yZGVyOjJ9OjpzbG90dGVkKFtzbG90PXNlY29uZGFyeV0pey1tcy1mbGV4LW9yZGVyOjQ7b3JkZXI6NH06OnNsb3R0ZWQoW3Nsb3Q9cHJpbWFyeV0pey1tcy1mbGV4LW9yZGVyOjU7b3JkZXI6NTt0ZXh0LWFsaWduOmVuZH06OnNsb3R0ZWQoW3Nsb3Q9ZW5kXSl7LW1zLWZsZXgtb3JkZXI6NjtvcmRlcjo2O3RleHQtYWxpZ246ZW5kfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gVG9vbGJhcjtcbn0oKSk7XG5leHBvcnQgeyBBcHAgYXMgaW9uX2FwcCwgQnV0dG9ucyBhcyBpb25fYnV0dG9ucywgQ29udGVudCBhcyBpb25fY29udGVudCwgRm9vdGVyIGFzIGlvbl9mb290ZXIsIEhlYWRlciBhcyBpb25faGVhZGVyLCBSb3V0ZXJPdXRsZXQgYXMgaW9uX3JvdXRlcl9vdXRsZXQsIFRvb2xiYXJUaXRsZSBhcyBpb25fdGl0bGUsIFRvb2xiYXIgYXMgaW9uX3Rvb2xiYXIgfTtcbiIsImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbnZhciBob3N0Q29udGV4dCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZWwpIHtcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XG59O1xuLyoqXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXG4gKi9cbnZhciBjcmVhdGVDb2xvckNsYXNzZXMgPSBmdW5jdGlvbiAoY29sb3IpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8gKF9hID0ge1xuICAgICAgICAgICAgJ2lvbi1jb2xvcic6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgX2FbXCJpb24tY29sb3ItXCIgKyBjb2xvcl0gPSB0cnVlLFxuICAgICAgICBfYSkgOiB1bmRlZmluZWQ7XG59O1xudmFyIGdldENsYXNzTGlzdCA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgcmV0dXJuIGFycmF5XG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9IG51bGw7IH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRyaW0oKTsgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT09ICcnOyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xufTtcbnZhciBnZXRDbGFzc01hcCA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XG4gICAgdmFyIG1hcCA9IHt9O1xuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7IHJldHVybiBtYXBbY10gPSB0cnVlOyB9KTtcbiAgICByZXR1cm4gbWFwO1xufTtcbnZhciBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcbnZhciBvcGVuVVJMID0gZnVuY3Rpb24gKHVybCwgZXYsIGRpcmVjdGlvbikgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcm91dGVyO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XG4gICAgICAgICAgICByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XG4gICAgICAgICAgICBpZiAocm91dGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICB9KTtcbn0pOyB9O1xuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==