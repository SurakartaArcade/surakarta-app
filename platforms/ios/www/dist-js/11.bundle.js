(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-menu_4-ios.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-menu_4-ios.entry.js ***!
  \***********************************************************************/
/*! exports provided: ion_menu, ion_menu_button, ion_menu_controller, ion_menu_toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_menu_button", function() { return MenuButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_menu_controller", function() { return MenuController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_menu_toggle", function() { return MenuToggle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation-af478fe9.js */ "./node_modules/@ionic/core/dist/esm-es5/animation-af478fe9.js");
/* harmony import */ var _index_624eea58_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-624eea58.js */ "./node_modules/@ionic/core/dist/esm-es5/index-624eea58.js");
/* harmony import */ var _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-1e5940d5.js */ "./node_modules/@ionic/core/dist/esm-es5/index-1e5940d5.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");
/* harmony import */ var _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cubic-bezier-2812fda3.js */ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js");









var Menu = /** @class */ (function () {
    function class_1(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.lastOnEnd = 0;
        this.blocker = _index_624eea58_js__WEBPACK_IMPORTED_MODULE_5__["GESTURE_CONTROLLER"].createBlocker({ disableScroll: true });
        this.mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        this.isAnimating = false;
        this._isOpen = false;
        this.isPaneVisible = false;
        this.isEndSide = false;
        /**
         * If `true`, the menu is disabled.
         */
        this.disabled = false;
        /**
         * Which side of the view the menu should be placed.
         */
        this.side = 'start';
        /**
         * If `true`, swiping the menu is enabled.
         */
        this.swipeGesture = true;
        /**
         * The edge threshold for dragging the menu open.
         * If a drag/swipe happens over this value, the menu is not triggered.
         */
        this.maxEdgeStart = 50;
        this.ionWillOpen = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionWillOpen", 7);
        this.ionWillClose = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionWillClose", 7);
        this.ionDidOpen = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionDidOpen", 7);
        this.ionDidClose = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionDidClose", 7);
        this.ionMenuChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionMenuChange", 7);
    }
    class_1.prototype.typeChanged = function (type, oldType) {
        var contentEl = this.contentEl;
        if (contentEl) {
            if (oldType !== undefined) {
                contentEl.classList.remove("menu-content-" + oldType);
            }
            contentEl.classList.add("menu-content-" + type);
            contentEl.removeAttribute('style');
        }
        if (this.menuInnerEl) {
            // Remove effects of previous animations
            this.menuInnerEl.removeAttribute('style');
        }
        this.animation = undefined;
    };
    class_1.prototype.disabledChanged = function () {
        this.updateState();
        this.ionMenuChange.emit({
            disabled: this.disabled,
            open: this._isOpen
        });
    };
    class_1.prototype.sideChanged = function () {
        this.isEndSide = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["i"])(this.side);
    };
    class_1.prototype.swipeGestureChanged = function () {
        this.updateState();
    };
    class_1.prototype.connectedCallback = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var el, parent, content, _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.type === undefined) {
                            this.type = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"].get('menuType', this.mode === 'ios' ? 'reveal' : 'overlay');
                        }
                        el = this.el;
                        parent = el.parentNode;
                        if (this.contentId === undefined) {
                            console.warn("[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the \"contentId\" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId=\"my-content\"></ion-menu>\n  <div id=\"my-content\">...</div>\n");
                        }
                        content = this.contentId !== undefined
                            ? document.getElementById(this.contentId)
                            : parent && parent.querySelector && parent.querySelector('[main]');
                        if (!content || !content.tagName) {
                            // requires content element
                            console.error('Menu: must have a "content" element to listen for drag events on.');
                            return [2 /*return*/];
                        }
                        this.contentEl = content;
                        // add menu's content classes
                        content.classList.add('menu-content');
                        this.typeChanged(this.type, undefined);
                        this.sideChanged();
                        // register this menu with the app's menu controller
                        _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_6__["m"]._register(this);
                        _a = this;
                        return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "./node_modules/@ionic/core/dist/esm-es5/index-624eea58.js"))];
                    case 1:
                        _a.gesture = (_b.sent()).createGesture({
                            el: document,
                            gestureName: 'menu-swipe',
                            gesturePriority: 30,
                            threshold: 10,
                            canStart: function (ev) { return _this.canStart(ev); },
                            onWillStart: function () { return _this.onWillStart(); },
                            onStart: function () { return _this.onStart(); },
                            onMove: function (ev) { return _this.onMove(ev); },
                            onEnd: function (ev) { return _this.onEnd(ev); },
                        });
                        this.updateState();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.componentDidLoad = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.ionMenuChange.emit({ disabled: this.disabled, open: this._isOpen });
                this.updateState();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.disconnectedCallback = function () {
        this.blocker.destroy();
        _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_6__["m"]._unregister(this);
        if (this.animation) {
            this.animation.destroy();
        }
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
        this.animation = undefined;
        this.contentEl = this.backdropEl = this.menuInnerEl = undefined;
    };
    class_1.prototype.onSplitPaneChanged = function (ev) {
        this.isPaneVisible = ev.detail.isPane(this.el);
        this.updateState();
    };
    class_1.prototype.onBackdropClick = function (ev) {
        if (this._isOpen && this.lastOnEnd < ev.timeStamp - 100) {
            var shouldClose = (ev.composedPath)
                ? !ev.composedPath().includes(this.menuInnerEl)
                : false;
            if (shouldClose) {
                ev.preventDefault();
                ev.stopPropagation();
                this.close();
            }
        }
    };
    /**
     * Returns `true` is the menu is open.
     */
    class_1.prototype.isOpen = function () {
        return Promise.resolve(this._isOpen);
    };
    /**
     * Returns `true` is the menu is active.
     *
     * A menu is active when it can be opened or closed, meaning it's enabled
     * and it's not part of a `ion-split-pane`.
     */
    class_1.prototype.isActive = function () {
        return Promise.resolve(this._isActive());
    };
    /**
     * Opens the menu. If the menu is already open or it can't be opened,
     * it returns `false`.
     */
    class_1.prototype.open = function (animated) {
        if (animated === void 0) { animated = true; }
        return this.setOpen(true, animated);
    };
    /**
     * Closes the menu. If the menu is already closed or it can't be closed,
     * it returns `false`.
     */
    class_1.prototype.close = function (animated) {
        if (animated === void 0) { animated = true; }
        return this.setOpen(false, animated);
    };
    /**
     * Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it.
     * If the operation can't be completed successfully, it returns `false`.
     */
    class_1.prototype.toggle = function (animated) {
        if (animated === void 0) { animated = true; }
        return this.setOpen(!this._isOpen, animated);
    };
    /**
     * Opens or closes the button.
     * If the operation can't be completed successfully, it returns `false`.
     */
    class_1.prototype.setOpen = function (shouldOpen, animated) {
        if (animated === void 0) { animated = true; }
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_6__["m"]._setOpen(this, shouldOpen, animated);
    };
    class_1.prototype._setOpen = function (shouldOpen, animated) {
        if (animated === void 0) { animated = true; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // If the menu is disabled or it is currently being animated, let's do nothing
                        if (!this._isActive() || this.isAnimating || shouldOpen === this._isOpen) {
                            return [2 /*return*/, false];
                        }
                        this.beforeAnimation(shouldOpen);
                        return [4 /*yield*/, this.loadAnimation()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.startAnimation(shouldOpen, animated)];
                    case 2:
                        _a.sent();
                        this.afterAnimation(shouldOpen);
                        return [2 /*return*/, true];
                }
            });
        });
    };
    class_1.prototype.loadAnimation = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var width, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        width = this.menuInnerEl.offsetWidth;
                        if (width === this.width && this.animation !== undefined) {
                            return [2 /*return*/];
                        }
                        this.width = width;
                        // Destroy existing animation
                        if (this.animation) {
                            this.animation.destroy();
                            this.animation = undefined;
                        }
                        // Create new animation
                        _a = this;
                        return [4 /*yield*/, _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_6__["m"]._createAnimation(this.type, this)];
                    case 1:
                        // Create new animation
                        _a.animation = _b.sent();
                        if (!_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"].getBoolean('animated', true)) {
                            this.animation.duration(0);
                        }
                        this.animation.fill('both');
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.startAnimation = function (shouldOpen, animated) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isReversed, ani;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isReversed = !shouldOpen;
                        ani = this.animation
                            .direction((isReversed) ? 'reverse' : 'normal')
                            .easing((isReversed) ? 'cubic-bezier(0.4, 0.0, 0.6, 1)' : 'cubic-bezier(0.0, 0.0, 0.2, 1)');
                        if (!animated) return [3 /*break*/, 2];
                        return [4 /*yield*/, ani.playAsync()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        ani.playSync();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype._isActive = function () {
        return !this.disabled && !this.isPaneVisible;
    };
    class_1.prototype.canSwipe = function () {
        return this.swipeGesture && !this.isAnimating && this._isActive();
    };
    class_1.prototype.canStart = function (detail) {
        if (!this.canSwipe()) {
            return false;
        }
        if (this._isOpen) {
            return true;
            // TODO error
        }
        else if (_index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_6__["m"]._getOpenSync()) {
            return false;
        }
        return checkEdgeSide(window, detail.currentX, this.isEndSide, this.maxEdgeStart);
    };
    class_1.prototype.onWillStart = function () {
        this.beforeAnimation(!this._isOpen);
        return this.loadAnimation();
    };
    class_1.prototype.onStart = function () {
        if (!this.isAnimating || !this.animation) {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["b"])(false, 'isAnimating has to be true');
            return;
        }
        // the cloned animation should not use an easing curve during seek
        this.animation
            .direction((this._isOpen) ? 'reverse' : 'normal')
            .progressStart(true);
    };
    class_1.prototype.onMove = function (detail) {
        if (!this.isAnimating || !this.animation) {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["b"])(false, 'isAnimating has to be true');
            return;
        }
        var delta = computeDelta(detail.deltaX, this._isOpen, this.isEndSide);
        var stepValue = delta / this.width;
        this.animation.progressStep(stepValue);
    };
    class_1.prototype.onEnd = function (detail) {
        var _this = this;
        if (!this.isAnimating || !this.animation) {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["b"])(false, 'isAnimating has to be true');
            return;
        }
        var isOpen = this._isOpen;
        var isEndSide = this.isEndSide;
        var delta = computeDelta(detail.deltaX, isOpen, isEndSide);
        var width = this.width;
        var stepValue = delta / width;
        var velocity = detail.velocityX;
        var z = width / 2.0;
        var shouldCompleteRight = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
        var shouldCompleteLeft = velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
        var shouldComplete = isOpen
            ? isEndSide ? shouldCompleteRight : shouldCompleteLeft
            : isEndSide ? shouldCompleteLeft : shouldCompleteRight;
        var shouldOpen = !isOpen && shouldComplete;
        if (isOpen && !shouldComplete) {
            shouldOpen = true;
        }
        this.lastOnEnd = detail.timeStamp;
        // Account for rounding errors in JS
        var newStepValue = (shouldComplete) ? 0.001 : -0.001;
        /**
         * TODO: stepValue can sometimes return a negative
         * value, but you can't have a negative time value
         * for the cubic bezier curve (at least with web animations)
         * Not sure if the negative step value is an error or not
         */
        var adjustedStepValue = (stepValue <= 0) ? 0.01 : stepValue;
        /**
         * Animation will be reversed here, so need to
         * reverse the easing curve as well
         *
         * Additionally, we need to account for the time relative
         * to the new easing curve, as `stepValue` is going to be given
         * in terms of a linear curve.
         */
        newStepValue += Object(_cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_8__["g"])(new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_8__["P"](0, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_8__["P"](0.4, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_8__["P"](0.6, 1), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_8__["P"](1, 1), Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["c"])(0, adjustedStepValue, 1));
        this.animation
            .easing('cubic-bezier(0.4, 0.0, 0.6, 1)')
            .onFinish(function () { return _this.afterAnimation(shouldOpen); }, { oneTimeCallback: true })
            .progressEnd(shouldComplete ? 1 : 0, newStepValue, 300);
    };
    class_1.prototype.beforeAnimation = function (shouldOpen) {
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["b"])(!this.isAnimating, '_before() should not be called while animating');
        // this places the menu into the correct location before it animates in
        // this css class doesn't actually kick off any animations
        this.el.classList.add(SHOW_MENU);
        if (this.backdropEl) {
            this.backdropEl.classList.add(SHOW_BACKDROP);
        }
        this.blocker.block();
        this.isAnimating = true;
        if (shouldOpen) {
            this.ionWillOpen.emit();
        }
        else {
            this.ionWillClose.emit();
        }
    };
    class_1.prototype.afterAnimation = function (isOpen) {
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["b"])(this.isAnimating, '_before() should be called while animating');
        // keep opening/closing the menu disabled for a touch more yet
        // only add listeners/css if it's enabled and isOpen
        // and only remove listeners/css if it's not open
        // emit opened/closed events
        this._isOpen = isOpen;
        this.isAnimating = false;
        if (!this._isOpen) {
            this.blocker.unblock();
        }
        if (isOpen) {
            // add css class
            if (this.contentEl) {
                this.contentEl.classList.add(MENU_CONTENT_OPEN);
            }
            // emit open event
            this.ionDidOpen.emit();
        }
        else {
            // remove css classes
            this.el.classList.remove(SHOW_MENU);
            if (this.contentEl) {
                this.contentEl.classList.remove(MENU_CONTENT_OPEN);
            }
            if (this.backdropEl) {
                this.backdropEl.classList.remove(SHOW_BACKDROP);
            }
            if (this.animation) {
                this.animation.stop();
            }
            // emit close event
            this.ionDidClose.emit();
        }
    };
    class_1.prototype.updateState = function () {
        var isActive = this._isActive();
        if (this.gesture) {
            this.gesture.setDisabled(!isActive || !this.swipeGesture);
        }
        // Close menu immediately
        if (!isActive && this._isOpen) {
            // close if this menu is open, and should not be enabled
            this.forceClosing();
        }
        if (!this.disabled) {
            _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_6__["m"]._setActiveMenu(this);
        }
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["b"])(!this.isAnimating, 'can not be animating');
    };
    class_1.prototype.forceClosing = function () {
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["b"])(this._isOpen, 'menu cannot be closed');
        this.isAnimating = true;
        var ani = this.animation.direction('reverse');
        ani.playSync();
        this.afterAnimation(false);
    };
    class_1.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this, isEndSide = _b.isEndSide, type = _b.type, disabled = _b.disabled, mode = _b.mode, isPaneVisible = _b.isPaneVisible;
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { role: "navigation", class: (_a = {},
                _a[mode] = true,
                _a["menu-type-" + type] = true,
                _a['menu-enabled'] = !disabled,
                _a['menu-side-end'] = isEndSide,
                _a['menu-side-start'] = !isEndSide,
                _a['menu-pane-visible'] = isPaneVisible,
                _a) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "menu-inner", ref: function (el) { return _this.menuInnerEl = el; } }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-backdrop", { ref: function (el) { return _this.backdropEl = el; }, class: "menu-backdrop", tappable: false, stopPropagation: false })));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "type": ["typeChanged"],
                "disabled": ["disabledChanged"],
                "side": ["sideChanged"],
                "swipeGesture": ["swipeGestureChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}\@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var computeDelta = function (deltaX, isOpen, isEndSide) {
    return Math.max(0, isOpen !== isEndSide ? -deltaX : deltaX);
};
var checkEdgeSide = function (win, posX, isEndSide, maxEdgeStart) {
    if (isEndSide) {
        return posX >= win.innerWidth - maxEdgeStart;
    }
    else {
        return posX <= maxEdgeStart;
    }
};
var SHOW_MENU = 'show-menu';
var SHOW_BACKDROP = 'show-backdrop';
var MENU_CONTENT_OPEN = 'menu-content-open';
// Given a menu, return whether or not the menu toggle should be visible
var updateVisibility = function (menu) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var menuEl, _a;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_6__["m"].get(menu)];
            case 1:
                menuEl = _b.sent();
                _a = menuEl;
                if (!_a) return [3 /*break*/, 3];
                return [4 /*yield*/, menuEl.isActive()];
            case 2:
                _a = (_b.sent());
                _b.label = 3;
            case 3: return [2 /*return*/, !!(_a)];
        }
    });
}); };
var MenuButton = /** @class */ (function () {
    function class_2(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.visible = false;
        /**
         * If `true`, the user cannot interact with the menu button.
         */
        this.disabled = false;
        /**
         * Automatically hides the menu button when the corresponding menu is not active
         */
        this.autoHide = true;
        /**
         * The type of the button.
         */
        this.type = 'button';
        this.onClick = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_6__["m"].toggle(this.menu)];
            });
        }); };
    }
    class_2.prototype.componentDidLoad = function () {
        this.visibilityChanged();
    };
    class_2.prototype.visibilityChanged = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, updateVisibility(this.menu)];
                    case 1:
                        _a.visible = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.render = function () {
        var _a;
        var _b = this, color = _b.color, disabled = _b.disabled;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var menuIcon = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"].get('menuIcon', 'menu');
        var hidden = this.autoHide && !this.visible;
        var attrs = {
            type: this.type
        };
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onClick: this.onClick, "aria-disabled": disabled ? 'true' : null, "aria-hidden": hidden ? 'true' : null, class: Object.assign(Object.assign((_a = {}, _a[mode] = true, _a), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_7__["c"])(color)), { 'button': true, 'menu-button-hidden': hidden, 'menu-button-disabled': disabled, 'ion-activatable': true, 'ion-focusable': true }) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button", Object.assign({}, attrs, { disabled: disabled, class: "button-native" }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon", { icon: menuIcon, mode: mode, lazy: false })), mode === 'md' && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-ripple-effect", { type: "unbounded" }))));
    };
    Object.defineProperty(class_2, "style", {
        get: function () { return ":host{--background:transparent;--color-focused:var(--color);--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}\@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--border-radius:4px;--color:var(--ion-color-primary,#3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.activated){opacity:.4}\@media (any-hover:hover){:host(:hover){opacity:.6}}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.1)}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
var MenuController = /** @class */ (function () {
    function class_3(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
    }
    /**
     * Open the menu. If a menu is not provided then it will open the first
     * menu found. If the specified menu is `start` or `end`, then it will open
     * the enabled menu on that side. Otherwise, it will try to find the menu
     * using the menu's `id` property. If a menu is not found then it will
     * return `false`.
     *
     * @param menu The menuId or side of the menu to open.
     */
    class_3.prototype.open = function (menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_6__["m"].open(menu);
    };
    /**
     * Close the menu. If a menu is specified, it will close that menu.
     * If no menu is specified, then it will close any menu that is open.
     * If it does not find any open menus, it will return `false`.
     *
     * @param menu The menuId or side of the menu to close.
     */
    class_3.prototype.close = function (menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_6__["m"].close(menu);
    };
    /**
     * Toggle the menu open or closed. If the menu is already open, it will try to
     * close the menu, otherwise it will try to open it. Returns `false` if
     * a menu is not found.
     *
     * @param menu The menuId or side of the menu to toggle.
     */
    class_3.prototype.toggle = function (menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_6__["m"].toggle(menu);
    };
    /**
     * Enable or disable a menu. Disabling a menu will not allow gestures
     * for that menu or any calls to open it. This is useful when there are
     * multiple menus on the same side and only one of them should be allowed
     * to open. Enabling a menu will automatically disable all other menus
     * on that side.
     *
     * @param enable If `true`, the menu should be enabled.
     * @param menu The menuId or side of the menu to enable or disable.
     */
    class_3.prototype.enable = function (enable, menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_6__["m"].enable(enable, menu);
    };
    /**
     * Enable or disable the ability to swipe open the menu.
     *
     * @param enable If `true`, the menu swipe gesture should be enabled.
     * @param menu The menuId or side of the menu to enable or disable the swipe gesture on.
     */
    class_3.prototype.swipeGesture = function (enable, menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_6__["m"].swipeGesture(enable, menu);
    };
    /**
     * Get whether or not the menu is open. Returns `true` if the specified
     * menu is open. If a menu is not specified, it will return `true` if
     * any menu is currently open.
     *
     * @param menu The menuId or side of the menu that is being checked.
     */
    class_3.prototype.isOpen = function (menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_6__["m"].isOpen(menu);
    };
    /**
     * Get whether or not the menu is enabled. Returns `true` if the
     * specified menu is enabled. Returns `false` if a menu is disabled
     * or not found.
     *
     * @param menu The menuId or side of the menu that is being checked.
     */
    class_3.prototype.isEnabled = function (menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_6__["m"].isEnabled(menu);
    };
    /**
     * Get a menu instance. If a menu is not provided then it will return the first
     * menu found. If the specified menu is `start` or `end`, then it will return the
     * enabled menu on that side. Otherwise, it will try to find the menu using the menu's
     * `id` property. If a menu is not found then it will return `null`.
     *
     * @param menu The menuId or side of the menu.
     */
    class_3.prototype.get = function (menu) {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_6__["m"].get(menu);
    };
    /**
     * Get the instance of the opened menu. Returns `null` if a menu is not found.
     */
    class_3.prototype.getOpen = function () {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_6__["m"].getOpen();
    };
    /**
     * Get all menu instances.
     */
    class_3.prototype.getMenus = function () {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_6__["m"].getMenus();
    };
    /**
     * Get whether or not a menu is animating. Returns `true` if any
     * menu is currently animating.
     */
    class_3.prototype.isAnimating = function () {
        return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_6__["m"].isAnimating();
    };
    /**
     * Registers a new animation that can be used with any `ion-menu` by
     * passing the name of the animation in its `type` property.
     *
     * @param name The name of the animation to register.
     * @param animation The animation function to register.
     */
    class_3.prototype.registerAnimation = function (name, animation) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_6__["m"].registerAnimation(name, animation)];
            });
        });
    };
    return class_3;
}());
var MenuToggle = /** @class */ (function () {
    function class_4(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.visible = false;
        /**
         * Automatically hides the content when the corresponding menu is not active.
         *
         * By default, it's `true`. Change it to `false` in order to
         * keep `ion-menu-toggle` always visible regardless the state of the menu.
         */
        this.autoHide = true;
        this.onClick = function () {
            return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_6__["m"].toggle(_this.menu);
        };
    }
    class_4.prototype.connectedCallback = function () {
        this.visibilityChanged();
    };
    class_4.prototype.visibilityChanged = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, updateVisibility(this.menu)];
                    case 1:
                        _a.visible = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_4.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var hidden = this.autoHide && !this.visible;
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onClick: this.onClick, "aria-hidden": hidden ? 'true' : null, class: (_a = {},
                _a[mode] = true,
                _a['menu-toggle-hidden'] = hidden,
                _a) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)));
    };
    Object.defineProperty(class_4, "style", {
        get: function () { return ":host(.menu-toggle-hidden){display:none}"; },
        enumerable: true,
        configurable: true
    });
    return class_4;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2N1YmljLWJlemllci0yODEyZmRhMy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1tZW51XzQtaW9zLmVudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLCtCQUErQixFQUFFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0Q7Ozs7Ozs7Ozs7Ozs7QUM1RnBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDOEU7QUFDMUU7QUFDNkI7QUFDL0M7QUFDd0I7QUFDQztBQUNJO0FBQ3dCO0FBQ3RGO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBLHVCQUF1QixxRUFBa0IsZ0JBQWdCLHNCQUFzQjtBQUMvRSxvQkFBb0IsMkRBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDJEQUFXO0FBQ3RDLDRCQUE0QiwyREFBVztBQUN2QywwQkFBMEIsMkRBQVc7QUFDckMsMkJBQTJCLDJEQUFXO0FBQ3RDLDZCQUE2QiwyREFBVztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHlCQUF5Qiw4REFBUztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1REFBUztBQUN4QjtBQUNBO0FBQ0EsbUJBQW1CLHlEQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxxREFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFjO0FBQ3RDO0FBQ0EsNkNBQTZDLDZKQUE2QjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsMkJBQTJCLEVBQUU7QUFDbEYsc0RBQXNELDRCQUE0QixFQUFFO0FBQ3BGLGtEQUFrRCx3QkFBd0IsRUFBRTtBQUM1RSxtREFBbUQseUJBQXlCLEVBQUU7QUFDOUUsa0RBQWtELHdCQUF3QixFQUFFO0FBQzVFLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxlQUFlLHVEQUFTO0FBQ3hCLG1CQUFtQix5REFBVztBQUM5Qix5Q0FBeUMsOENBQThDO0FBQ3ZGO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsaUJBQWlCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlCQUFpQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQkFBaUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsaUJBQWlCO0FBQ25ELGVBQWUsb0RBQWM7QUFDN0I7QUFDQTtBQUNBLGtDQUFrQyxpQkFBaUI7QUFDbkQsZUFBZSx1REFBUztBQUN4QixtQkFBbUIseURBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxlQUFlLHVEQUFTO0FBQ3hCO0FBQ0EsbUJBQW1CLHlEQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsb0RBQWM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFEQUFNO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxlQUFlLHVEQUFTO0FBQ3hCO0FBQ0EsbUJBQW1CLHlEQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0RBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhEQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksOERBQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4REFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUVBQXVCLEtBQUssMkRBQUssWUFBWSwyREFBSyxjQUFjLDJEQUFLLGNBQWMsMkRBQUssUUFBUSw4REFBSztBQUM3SDtBQUNBO0FBQ0EsbUNBQW1DLHlDQUF5QyxFQUFFLEdBQUcsd0JBQXdCO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvREFBYztBQUMxQjtBQUNBLFFBQVEsOERBQU07QUFDZDtBQUNBO0FBQ0EsUUFBUSw4REFBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUcsb0NBQW9DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixFQUFFLDJEQUFDLFNBQVMsMENBQTBDLCtCQUErQixFQUFFLEVBQUUsRUFBRSwyREFBQyxpQkFBaUIsMkRBQUMsa0JBQWtCLHFCQUFxQiw4QkFBOEIsRUFBRSxtRUFBbUU7QUFDN1E7QUFDQTtBQUNBLDBCQUEwQixRQUFRLDJEQUFVLE9BQU8sRUFBRTtBQUNyRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixlQUFlLGNBQWMsaUJBQWlCLGlCQUFpQixjQUFjLGtCQUFrQixrQkFBa0IsOENBQThDLE9BQU8sUUFBUSxNQUFNLFNBQVMsYUFBYSxrQkFBa0IsZUFBZSxrQkFBa0IsY0FBYyxZQUFZLE9BQU8sV0FBVyxNQUFNLFNBQVMsMkNBQTJDLG1DQUFtQyxvQkFBb0IsYUFBYSxrQkFBa0IsMEJBQTBCLHNCQUFzQixzQkFBc0IsOEJBQThCLG1CQUFtQiwyQkFBMkIsMkJBQTJCLHFCQUFxQiw2QkFBNkIsNkJBQTZCLDZCQUE2QixlQUFlLDJEQUEyRCxXQUFXLFlBQVksVUFBVSxRQUFRLHNEQUFzRCw4Q0FBOEMsb0NBQW9DLDBCQUEwQixXQUFXLE9BQU8sa0NBQWtDLHlCQUF5QixRQUFRLFVBQVUsYUFBYSxhQUFhLFlBQVksV0FBVywwQkFBMEIsWUFBWSxlQUFlLHlCQUF5QixVQUFVLCtDQUErQyxnQ0FBZ0Msd0JBQXdCLDBCQUEwQixhQUFhLHlDQUF5QyxjQUFjLGVBQWUsc0NBQXNDLE9BQU8sUUFBUSxXQUFXLGlDQUFpQyx5QkFBeUIsa0NBQWtDLDBCQUEwQix1Q0FBdUMseUJBQXlCLHVCQUF1QixhQUFhLHNDQUFzQyxjQUFjLEVBQUUsRUFBRTtBQUMvd0Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUSx1REFBUztBQUN6RDtBQUNBLFdBQVcseURBQVc7QUFDdEI7QUFDQSx5Q0FBeUMsb0RBQWM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsUUFBUSx1REFBUztBQUNyRCxtQkFBbUIseURBQVc7QUFDOUIsc0NBQXNDLG9EQUFjO0FBQ3BELGFBQWE7QUFDYixTQUFTLEVBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1REFBUztBQUN4QjtBQUNBLG1CQUFtQix5REFBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBVTtBQUM3Qix1QkFBdUIscURBQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLHFKQUFxSix3QkFBd0IsNERBQWtCLFdBQVcsaUlBQWlJLEdBQUcsRUFBRSwyREFBQywyQkFBMkIsVUFBVSw2Q0FBNkMsR0FBRywyREFBQyxlQUFlLDJEQUFDLGNBQWMsMENBQTBDLHFCQUFxQiwyREFBQyx1QkFBdUIsb0JBQW9CO0FBQ3prQjtBQUNBO0FBQ0EsMEJBQTBCLGVBQWUseUJBQXlCLDZCQUE2Qix3QkFBd0IsZ0JBQWdCLG1CQUFtQixtQkFBbUIsa0JBQWtCLHFCQUFxQix1QkFBdUIsb0JBQW9CLG1CQUFtQiwwQkFBMEIsa0JBQWtCLGVBQWUsbUNBQW1DLG9CQUFvQixrQkFBa0IsbUJBQW1CLG9CQUFvQix1QkFBdUIsd0JBQXdCLHNCQUFzQix1QkFBdUIsbUJBQW1CLG9CQUFvQixjQUFjLGNBQWMsZUFBZSxhQUFhLGdCQUFnQixrQ0FBa0MsaUNBQWlDLCtCQUErQixxQ0FBcUMsa0NBQWtDLG1DQUFtQyxvQkFBb0IsYUFBYSxrQkFBa0IseUJBQXlCLHFCQUFxQixvQkFBb0IsY0FBYyxzQkFBc0IsbUJBQW1CLHFCQUFxQix1QkFBdUIsV0FBVyxZQUFZLFNBQVMsYUFBYSw2QkFBNkIsY0FBYyxlQUFlLHlCQUF5QixzQkFBc0IscUJBQXFCLGlCQUFpQixVQUFVLHdCQUF3QixxQkFBcUIsZ0JBQWdCLDZGQUE2RixlQUFlLG1CQUFtQixvQkFBb0IsMkNBQTJDLDBDQUEwQyx1Q0FBdUMsdUNBQXVDLFNBQVMsY0FBYyxlQUFlLGFBQWEsZ0JBQWdCLGVBQWUsZ0JBQWdCLGNBQWMsaUJBQWlCLG9CQUFvQiwyQkFBMkIsYUFBYSw2QkFBNkIsZUFBZSxXQUFXLG9CQUFvQiwwQkFBMEIsNkJBQTZCLG1DQUFtQywwQkFBMEIsbUNBQW1DLHFDQUFxQywyQkFBMkIsaUNBQWlDLDRCQUE0QiwyQ0FBMkMsNENBQTRDLE1BQU0sdUVBQXVFLG9CQUFvQix5Q0FBeUMsb0JBQW9CLGtCQUFrQixZQUFZLGVBQWUsa0JBQWtCLFdBQVcsMEJBQTBCLGNBQWMsWUFBWSw2Q0FBNkMsOENBQThDLEVBQUUsRUFBRTtBQUNubEY7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0RBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvREFBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9EQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0RBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0RBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvREFBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9EQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvREFBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvREFBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvREFBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9EQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdURBQVM7QUFDeEIsbUJBQW1CLHlEQUFXO0FBQzlCLHNDQUFzQyxvREFBYztBQUNwRCxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9EQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdURBQVM7QUFDeEI7QUFDQSxtQkFBbUIseURBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFVO0FBQzdCO0FBQ0EsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyw4RUFBOEU7QUFDdkc7QUFDQTtBQUNBLHFCQUFxQixFQUFFLDJEQUFDO0FBQ3hCO0FBQ0E7QUFDQSwwQkFBMEIsb0NBQW9DLGFBQWEsRUFBRSxFQUFFO0FBQy9FO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ2dJOzs7Ozs7Ozs7Ozs7O0FDMXVCakk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQixFQUFFO0FBQ3RELCtCQUErQixpQkFBaUIsRUFBRTtBQUNsRCxrQ0FBa0MsaUJBQWlCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxzQkFBc0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUSx1REFBUztBQUM5RDtBQUNBLFdBQVcseURBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFO0FBQ2tGIiwiZmlsZSI6IjExLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQmFzZWQgb246XG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MzQ4MDA5L3ktY29vcmRpbmF0ZS1mb3ItYS1naXZlbi14LWN1YmljLWJlemllclxuICogaHR0cHM6Ly9tYXRoLnN0YWNrZXhjaGFuZ2UuY29tL3F1ZXN0aW9ucy8yNjg0Ni9pcy10aGVyZS1hbi1leHBsaWNpdC1mb3JtLWZvci1jdWJpYy1iJUMzJUE5emllci1jdXJ2ZXNcbiAqIFRPRE86IFJlZHVjZSByb3VuZGluZyBlcnJvclxuICovXG52YXIgUG9pbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbiAgICByZXR1cm4gUG9pbnQ7XG59KCkpO1xuLyoqXG4gKiBHaXZlbiBhIGN1YmljLWJlemllciBjdXJ2ZSwgZ2V0IHRoZSB4IHZhbHVlICh0aW1lKSBnaXZlblxuICogdGhlIHkgdmFsdWUgKHByb2dyZXNzaW9uKS5cbiAqIEV4OiBjdWJpYy1iZXppZXIoMC4zMiwgMC43MiwgMCwgMSk7XG4gKiBQMDogKDAsIDApXG4gKiBQMTogKDAuMzIsIDAuNzIpXG4gKiBQMjogKDAsIDEpXG4gKiBQMzogKDEsIDEpXG4gKlxuICogSWYgeW91IGdpdmUgYSBjdWJpYyBiZXppZXIgY3VydmUgdGhhdCBuZXZlciByZWFjaGVzIHRoZVxuICogcHJvdmlkZWQgcHJvZ3Jlc3Npb24sIHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gTmFOLlxuICovXG52YXIgZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24gPSBmdW5jdGlvbiAocDAsIHAxLCBwMiwgcDMsIHByb2dyZXNzaW9uKSB7XG4gICAgdmFyIHRWYWx1ZXMgPSBzb2x2ZUN1YmljQmV6aWVyKHAwLnksIHAxLnksIHAyLnksIHAzLnksIHByb2dyZXNzaW9uKTtcbiAgICByZXR1cm4gc29sdmVDdWJpY1BhcmFtZXRyaWNFcXVhdGlvbihwMC54LCBwMS54LCBwMi54LCBwMy54LCB0VmFsdWVzWzBdKTsgLy8gVE9ETzogQWRkIGJldHRlciBzdHJhdGVneSBmb3IgZGVhbGluZyB3aXRoIG11bHRpcGxlIHNvbHV0aW9uc1xufTtcbi8qKlxuICogU29sdmUgYSBjdWJpYyBlcXVhdGlvbiBpbiBvbmUgZGltZW5zaW9uICh0aW1lKVxuICovXG52YXIgc29sdmVDdWJpY1BhcmFtZXRyaWNFcXVhdGlvbiA9IGZ1bmN0aW9uIChwMCwgcDEsIHAyLCBwMywgdCkge1xuICAgIHZhciBwYXJ0QSA9ICgzICogcDEpICogTWF0aC5wb3codCAtIDEsIDIpO1xuICAgIHZhciBwYXJ0QiA9ICgtMyAqIHAyICogdCkgKyAoMyAqIHAyKSArIChwMyAqIHQpO1xuICAgIHZhciBwYXJ0QyA9IHAwICogTWF0aC5wb3codCAtIDEsIDMpO1xuICAgIHJldHVybiB0ICogKHBhcnRBICsgKHQgKiBwYXJ0QikpIC0gcGFydEM7XG59O1xuLyoqXG4gKiBGaW5kIHRoZSBgdGAgdmFsdWUgZm9yIGEgY3ViaWMgYmV6aWVyIHVzaW5nIENhcmRhbm8ncyBmb3JtdWxhXG4gKi9cbnZhciBzb2x2ZUN1YmljQmV6aWVyID0gZnVuY3Rpb24gKHAwLCBwMSwgcDIsIHAzLCByZWZQb2ludCkge1xuICAgIHAwIC09IHJlZlBvaW50O1xuICAgIHAxIC09IHJlZlBvaW50O1xuICAgIHAyIC09IHJlZlBvaW50O1xuICAgIHAzIC09IHJlZlBvaW50O1xuICAgIHZhciByb290cyA9IHNvbHZlQ3ViaWNFcXVhdGlvbihwMyAtIDMgKiBwMiArIDMgKiBwMSAtIHAwLCAzICogcDIgLSA2ICogcDEgKyAzICogcDAsIDMgKiBwMSAtIDMgKiBwMCwgcDApO1xuICAgIHJldHVybiByb290cy5maWx0ZXIoZnVuY3Rpb24gKHJvb3QpIHsgcmV0dXJuIHJvb3QgPj0gMCAmJiByb290IDw9IDE7IH0pO1xufTtcbnZhciBzb2x2ZVF1YWRyYXRpY0VxdWF0aW9uID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICB2YXIgZGlzY3JpbWluYW50ID0gYiAqIGIgLSA0ICogYSAqIGM7XG4gICAgaWYgKGRpc2NyaW1pbmFudCA8IDApIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICgtYiArIE1hdGguc3FydChkaXNjcmltaW5hbnQpKSAvICgyICogYSksXG4gICAgICAgICAgICAoLWIgLSBNYXRoLnNxcnQoZGlzY3JpbWluYW50KSkgLyAoMiAqIGEpXG4gICAgICAgIF07XG4gICAgfVxufTtcbnZhciBzb2x2ZUN1YmljRXF1YXRpb24gPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgIGlmIChhID09PSAwKSB7XG4gICAgICAgIHJldHVybiBzb2x2ZVF1YWRyYXRpY0VxdWF0aW9uKGIsIGMsIGQpO1xuICAgIH1cbiAgICBiIC89IGE7XG4gICAgYyAvPSBhO1xuICAgIGQgLz0gYTtcbiAgICB2YXIgcCA9ICgzICogYyAtIGIgKiBiKSAvIDM7XG4gICAgdmFyIHEgPSAoMiAqIGIgKiBiICogYiAtIDkgKiBiICogYyArIDI3ICogZCkgLyAyNztcbiAgICBpZiAocCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW01hdGgucG93KC1xLCAxIC8gMyldO1xuICAgIH1cbiAgICBlbHNlIGlmIChxID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbTWF0aC5zcXJ0KC1wKSwgLU1hdGguc3FydCgtcCldO1xuICAgIH1cbiAgICB2YXIgZGlzY3JpbWluYW50ID0gTWF0aC5wb3cocSAvIDIsIDIpICsgTWF0aC5wb3cocCAvIDMsIDMpO1xuICAgIGlmIChkaXNjcmltaW5hbnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFtNYXRoLnBvdyhxIC8gMiwgMSAvIDIpIC0gYiAvIDNdO1xuICAgIH1cbiAgICBlbHNlIGlmIChkaXNjcmltaW5hbnQgPiAwKSB7XG4gICAgICAgIHJldHVybiBbTWF0aC5wb3coLShxIC8gMikgKyBNYXRoLnNxcnQoZGlzY3JpbWluYW50KSwgMSAvIDMpIC0gTWF0aC5wb3coKHEgLyAyKSArIE1hdGguc3FydChkaXNjcmltaW5hbnQpLCAxIC8gMykgLSBiIC8gM107XG4gICAgfVxuICAgIHZhciByID0gTWF0aC5zcXJ0KE1hdGgucG93KC0ocCAvIDMpLCAzKSk7XG4gICAgdmFyIHBoaSA9IE1hdGguYWNvcygtKHEgLyAoMiAqIE1hdGguc3FydChNYXRoLnBvdygtKHAgLyAzKSwgMykpKSkpO1xuICAgIHZhciBzID0gMiAqIE1hdGgucG93KHIsIDEgLyAzKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzICogTWF0aC5jb3MocGhpIC8gMykgLSBiIC8gMyxcbiAgICAgICAgcyAqIE1hdGguY29zKChwaGkgKyAyICogTWF0aC5QSSkgLyAzKSAtIGIgLyAzLFxuICAgICAgICBzICogTWF0aC5jb3MoKHBoaSArIDQgKiBNYXRoLlBJKSAvIDMpIC0gYiAvIDNcbiAgICBdO1xufTtcbmV4cG9ydCB7IFBvaW50IGFzIFAsIGdldFRpbWVHaXZlblByb2dyZXNzaW9uIGFzIGcgfTtcbiIsImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBnZXRJb25Nb2RlLCBkIGFzIGNyZWF0ZUV2ZW50LCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgeyBiIGFzIGNvbmZpZyB9IGZyb20gJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IGkgYXMgaXNFbmRTaWRlLCBiIGFzIGFzc2VydCwgYyBhcyBjbGFtcCB9IGZyb20gJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgJy4vYW5pbWF0aW9uLWFmNDc4ZmU5LmpzJztcbmltcG9ydCB7IEdFU1RVUkVfQ09OVFJPTExFUiB9IGZyb20gJy4vaW5kZXgtNjI0ZWVhNTguanMnO1xuaW1wb3J0IHsgbSBhcyBtZW51Q29udHJvbGxlciB9IGZyb20gJy4vaW5kZXgtMWU1OTQwZDUuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24sIFAgYXMgUG9pbnQgfSBmcm9tICcuL2N1YmljLWJlemllci0yODEyZmRhMy5qcyc7XG52YXIgTWVudSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18xKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5sYXN0T25FbmQgPSAwO1xuICAgICAgICB0aGlzLmJsb2NrZXIgPSBHRVNUVVJFX0NPTlRST0xMRVIuY3JlYXRlQmxvY2tlcih7IGRpc2FibGVTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgIHRoaXMubW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNQYW5lVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRW5kU2lkZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgbWVudSBpcyBkaXNhYmxlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoaWNoIHNpZGUgb2YgdGhlIHZpZXcgdGhlIG1lbnUgc2hvdWxkIGJlIHBsYWNlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2lkZSA9ICdzdGFydCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHN3aXBpbmcgdGhlIG1lbnUgaXMgZW5hYmxlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3dpcGVHZXN0dXJlID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBlZGdlIHRocmVzaG9sZCBmb3IgZHJhZ2dpbmcgdGhlIG1lbnUgb3Blbi5cbiAgICAgICAgICogSWYgYSBkcmFnL3N3aXBlIGhhcHBlbnMgb3ZlciB0aGlzIHZhbHVlLCB0aGUgbWVudSBpcyBub3QgdHJpZ2dlcmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tYXhFZGdlU3RhcnQgPSA1MDtcbiAgICAgICAgdGhpcy5pb25XaWxsT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uV2lsbE9wZW5cIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uV2lsbENsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25XaWxsQ2xvc2VcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uRGlkT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uRGlkT3BlblwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25EaWRDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uRGlkQ2xvc2VcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uTWVudUNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTWVudUNoYW5nZVwiLCA3KTtcbiAgICB9XG4gICAgY2xhc3NfMS5wcm90b3R5cGUudHlwZUNoYW5nZWQgPSBmdW5jdGlvbiAodHlwZSwgb2xkVHlwZSkge1xuICAgICAgICB2YXIgY29udGVudEVsID0gdGhpcy5jb250ZW50RWw7XG4gICAgICAgIGlmIChjb250ZW50RWwpIHtcbiAgICAgICAgICAgIGlmIChvbGRUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50RWwuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtY29udGVudC1cIiArIG9sZFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGVudEVsLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRlbnQtXCIgKyB0eXBlKTtcbiAgICAgICAgICAgIGNvbnRlbnRFbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWVudUlubmVyRWwpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBlZmZlY3RzIG9mIHByZXZpb3VzIGFuaW1hdGlvbnNcbiAgICAgICAgICAgIHRoaXMubWVudUlubmVyRWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZGlzYWJsZWRDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHRoaXMuaW9uTWVudUNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAgICAgb3BlbjogdGhpcy5faXNPcGVuXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc2lkZUNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNFbmRTaWRlID0gaXNFbmRTaWRlKHRoaXMuc2lkZSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5zd2lwZUdlc3R1cmVDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVsLCBwYXJlbnQsIGNvbnRlbnQsIF9hO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9IGNvbmZpZy5nZXQoJ21lbnVUeXBlJywgdGhpcy5tb2RlID09PSAnaW9zJyA/ICdyZXZlYWwnIDogJ292ZXJsYXknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsID0gdGhpcy5lbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250ZW50SWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltERVBSRUNBVEVEXVtpb24tbWVudV0gVXNpbmcgdGhlIFttYWluXSBhdHRyaWJ1dGUgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSB0aGUgXFxcImNvbnRlbnRJZFxcXCIgcHJvcGVydHkgaW5zdGVhZDpcXG5CRUZPUkU6XFxuICA8aW9uLW1lbnU+Li4uPC9pb24tbWVudT5cXG4gIDxkaXYgbWFpbj4uLi48L2Rpdj5cXG5cXG5BRlRFUjpcXG4gIDxpb24tbWVudSBjb250ZW50SWQ9XFxcIm15LWNvbnRlbnRcXFwiPjwvaW9uLW1lbnU+XFxuICA8ZGl2IGlkPVxcXCJteS1jb250ZW50XFxcIj4uLi48L2Rpdj5cXG5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50SWQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250ZW50SWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwYXJlbnQgJiYgcGFyZW50LnF1ZXJ5U2VsZWN0b3IgJiYgcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ1ttYWluXScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb250ZW50IHx8ICFjb250ZW50LnRhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXF1aXJlcyBjb250ZW50IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdNZW51OiBtdXN0IGhhdmUgYSBcImNvbnRlbnRcIiBlbGVtZW50IHRvIGxpc3RlbiBmb3IgZHJhZyBldmVudHMgb24uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50RWwgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIG1lbnUncyBjb250ZW50IGNsYXNzZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGVDaGFuZ2VkKHRoaXMudHlwZSwgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2lkZUNoYW5nZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlZ2lzdGVyIHRoaXMgbWVudSB3aXRoIHRoZSBhcHAncyBtZW51IGNvbnRyb2xsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVDb250cm9sbGVyLl9yZWdpc3Rlcih0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGltcG9ydCgnLi9pbmRleC02MjRlZWE1OC5qcycpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EuZ2VzdHVyZSA9IChfYi5zZW50KCkpLmNyZWF0ZUdlc3R1cmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsOiBkb2N1bWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXN0dXJlTmFtZTogJ21lbnUtc3dpcGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlc3R1cmVQcmlvcml0eTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5TdGFydDogZnVuY3Rpb24gKGV2KSB7IHJldHVybiBfdGhpcy5jYW5TdGFydChldik7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25XaWxsU3RhcnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm9uV2lsbFN0YXJ0KCk7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdGFydDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMub25TdGFydCgpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZTogZnVuY3Rpb24gKGV2KSB7IHJldHVybiBfdGhpcy5vbk1vdmUoZXYpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRW5kOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLm9uRW5kKGV2KTsgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbXBvbmVudERpZExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlvbk1lbnVDaGFuZ2UuZW1pdCh7IGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBvcGVuOiB0aGlzLl9pc09wZW4gfSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmJsb2NrZXIuZGVzdHJveSgpO1xuICAgICAgICBtZW51Q29udHJvbGxlci5fdW5yZWdpc3Rlcih0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jb250ZW50RWwgPSB0aGlzLmJhY2tkcm9wRWwgPSB0aGlzLm1lbnVJbm5lckVsID0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25TcGxpdFBhbmVDaGFuZ2VkID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIHRoaXMuaXNQYW5lVmlzaWJsZSA9IGV2LmRldGFpbC5pc1BhbmUodGhpcy5lbCk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9uQmFja2Ryb3BDbGljayA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICBpZiAodGhpcy5faXNPcGVuICYmIHRoaXMubGFzdE9uRW5kIDwgZXYudGltZVN0YW1wIC0gMTAwKSB7XG4gICAgICAgICAgICB2YXIgc2hvdWxkQ2xvc2UgPSAoZXYuY29tcG9zZWRQYXRoKVxuICAgICAgICAgICAgICAgID8gIWV2LmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKHRoaXMubWVudUlubmVyRWwpXG4gICAgICAgICAgICAgICAgOiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzaG91bGRDbG9zZSkge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpcyB0aGUgbWVudSBpcyBvcGVuLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmlzT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9pc09wZW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaXMgdGhlIG1lbnUgaXMgYWN0aXZlLlxuICAgICAqXG4gICAgICogQSBtZW51IGlzIGFjdGl2ZSB3aGVuIGl0IGNhbiBiZSBvcGVuZWQgb3IgY2xvc2VkLCBtZWFuaW5nIGl0J3MgZW5hYmxlZFxuICAgICAqIGFuZCBpdCdzIG5vdCBwYXJ0IG9mIGEgYGlvbi1zcGxpdC1wYW5lYC5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9pc0FjdGl2ZSgpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE9wZW5zIHRoZSBtZW51LiBJZiB0aGUgbWVudSBpcyBhbHJlYWR5IG9wZW4gb3IgaXQgY2FuJ3QgYmUgb3BlbmVkLFxuICAgICAqIGl0IHJldHVybnMgYGZhbHNlYC5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKGFuaW1hdGVkKSB7XG4gICAgICAgIGlmIChhbmltYXRlZCA9PT0gdm9pZCAwKSB7IGFuaW1hdGVkID0gdHJ1ZTsgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZXRPcGVuKHRydWUsIGFuaW1hdGVkKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgbWVudS4gSWYgdGhlIG1lbnUgaXMgYWxyZWFkeSBjbG9zZWQgb3IgaXQgY2FuJ3QgYmUgY2xvc2VkLFxuICAgICAqIGl0IHJldHVybnMgYGZhbHNlYC5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChhbmltYXRlZCkge1xuICAgICAgICBpZiAoYW5pbWF0ZWQgPT09IHZvaWQgMCkgeyBhbmltYXRlZCA9IHRydWU7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0T3BlbihmYWxzZSwgYW5pbWF0ZWQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgbWVudS4gSWYgdGhlIG1lbnUgaXMgYWxyZWFkeSBvcGVuLCBpdCB3aWxsIHRyeSB0byBjbG9zZSwgb3RoZXJ3aXNlIGl0IHdpbGwgdHJ5IHRvIG9wZW4gaXQuXG4gICAgICogSWYgdGhlIG9wZXJhdGlvbiBjYW4ndCBiZSBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5LCBpdCByZXR1cm5zIGBmYWxzZWAuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKGFuaW1hdGVkKSB7XG4gICAgICAgIGlmIChhbmltYXRlZCA9PT0gdm9pZCAwKSB7IGFuaW1hdGVkID0gdHJ1ZTsgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZXRPcGVuKCF0aGlzLl9pc09wZW4sIGFuaW1hdGVkKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE9wZW5zIG9yIGNsb3NlcyB0aGUgYnV0dG9uLlxuICAgICAqIElmIHRoZSBvcGVyYXRpb24gY2FuJ3QgYmUgY29tcGxldGVkIHN1Y2Nlc3NmdWxseSwgaXQgcmV0dXJucyBgZmFsc2VgLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnNldE9wZW4gPSBmdW5jdGlvbiAoc2hvdWxkT3BlbiwgYW5pbWF0ZWQpIHtcbiAgICAgICAgaWYgKGFuaW1hdGVkID09PSB2b2lkIDApIHsgYW5pbWF0ZWQgPSB0cnVlOyB9XG4gICAgICAgIHJldHVybiBtZW51Q29udHJvbGxlci5fc2V0T3Blbih0aGlzLCBzaG91bGRPcGVuLCBhbmltYXRlZCk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5fc2V0T3BlbiA9IGZ1bmN0aW9uIChzaG91bGRPcGVuLCBhbmltYXRlZCkge1xuICAgICAgICBpZiAoYW5pbWF0ZWQgPT09IHZvaWQgMCkgeyBhbmltYXRlZCA9IHRydWU7IH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIG1lbnUgaXMgZGlzYWJsZWQgb3IgaXQgaXMgY3VycmVudGx5IGJlaW5nIGFuaW1hdGVkLCBsZXQncyBkbyBub3RoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2lzQWN0aXZlKCkgfHwgdGhpcy5pc0FuaW1hdGluZyB8fCBzaG91bGRPcGVuID09PSB0aGlzLl9pc09wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWZvcmVBbmltYXRpb24oc2hvdWxkT3Blbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmxvYWRBbmltYXRpb24oKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc3RhcnRBbmltYXRpb24oc2hvdWxkT3BlbiwgYW5pbWF0ZWQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZnRlckFuaW1hdGlvbihzaG91bGRPcGVuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0cnVlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5sb2FkQW5pbWF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd2lkdGgsIF9hO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB0aGlzLm1lbnVJbm5lckVsLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpZHRoID09PSB0aGlzLndpZHRoICYmIHRoaXMuYW5pbWF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEZXN0cm95IGV4aXN0aW5nIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyBhbmltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG1lbnVDb250cm9sbGVyLl9jcmVhdGVBbmltYXRpb24odGhpcy50eXBlLCB0aGlzKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5hbmltYXRpb24gPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZy5nZXRCb29sZWFuKCdhbmltYXRlZCcsIHRydWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uZHVyYXRpb24oMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5maWxsKCdib3RoJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc3RhcnRBbmltYXRpb24gPSBmdW5jdGlvbiAoc2hvdWxkT3BlbiwgYW5pbWF0ZWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGlzUmV2ZXJzZWQsIGFuaTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUmV2ZXJzZWQgPSAhc2hvdWxkT3BlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaSA9IHRoaXMuYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpcmVjdGlvbigoaXNSZXZlcnNlZCkgPyAncmV2ZXJzZScgOiAnbm9ybWFsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZWFzaW5nKChpc1JldmVyc2VkKSA/ICdjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuNiwgMSknIDogJ2N1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhbmltYXRlZCkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBhbmkucGxheUFzeW5jKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pLnBsYXlTeW5jKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLl9pc0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmRpc2FibGVkICYmICF0aGlzLmlzUGFuZVZpc2libGU7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jYW5Td2lwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3dpcGVHZXN0dXJlICYmICF0aGlzLmlzQW5pbWF0aW5nICYmIHRoaXMuX2lzQWN0aXZlKCk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jYW5TdGFydCA9IGZ1bmN0aW9uIChkZXRhaWwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhblN3aXBlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIC8vIFRPRE8gZXJyb3JcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZW51Q29udHJvbGxlci5fZ2V0T3BlblN5bmMoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGVja0VkZ2VTaWRlKHdpbmRvdywgZGV0YWlsLmN1cnJlbnRYLCB0aGlzLmlzRW5kU2lkZSwgdGhpcy5tYXhFZGdlU3RhcnQpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25XaWxsU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYmVmb3JlQW5pbWF0aW9uKCF0aGlzLl9pc09wZW4pO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkQW5pbWF0aW9uKCk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBbmltYXRpbmcgfHwgIXRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBhc3NlcnQoZmFsc2UsICdpc0FuaW1hdGluZyBoYXMgdG8gYmUgdHJ1ZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoZSBjbG9uZWQgYW5pbWF0aW9uIHNob3VsZCBub3QgdXNlIGFuIGVhc2luZyBjdXJ2ZSBkdXJpbmcgc2Vla1xuICAgICAgICB0aGlzLmFuaW1hdGlvblxuICAgICAgICAgICAgLmRpcmVjdGlvbigodGhpcy5faXNPcGVuKSA/ICdyZXZlcnNlJyA6ICdub3JtYWwnKVxuICAgICAgICAgICAgLnByb2dyZXNzU3RhcnQodHJ1ZSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5vbk1vdmUgPSBmdW5jdGlvbiAoZGV0YWlsKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0FuaW1hdGluZyB8fCAhdGhpcy5hbmltYXRpb24pIHtcbiAgICAgICAgICAgIGFzc2VydChmYWxzZSwgJ2lzQW5pbWF0aW5nIGhhcyB0byBiZSB0cnVlJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlbHRhID0gY29tcHV0ZURlbHRhKGRldGFpbC5kZWx0YVgsIHRoaXMuX2lzT3BlbiwgdGhpcy5pc0VuZFNpZGUpO1xuICAgICAgICB2YXIgc3RlcFZhbHVlID0gZGVsdGEgLyB0aGlzLndpZHRoO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbi5wcm9ncmVzc1N0ZXAoc3RlcFZhbHVlKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9uRW5kID0gZnVuY3Rpb24gKGRldGFpbCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuaXNBbmltYXRpbmcgfHwgIXRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBhc3NlcnQoZmFsc2UsICdpc0FuaW1hdGluZyBoYXMgdG8gYmUgdHJ1ZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc09wZW4gPSB0aGlzLl9pc09wZW47XG4gICAgICAgIHZhciBpc0VuZFNpZGUgPSB0aGlzLmlzRW5kU2lkZTtcbiAgICAgICAgdmFyIGRlbHRhID0gY29tcHV0ZURlbHRhKGRldGFpbC5kZWx0YVgsIGlzT3BlbiwgaXNFbmRTaWRlKTtcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgdmFyIHN0ZXBWYWx1ZSA9IGRlbHRhIC8gd2lkdGg7XG4gICAgICAgIHZhciB2ZWxvY2l0eSA9IGRldGFpbC52ZWxvY2l0eVg7XG4gICAgICAgIHZhciB6ID0gd2lkdGggLyAyLjA7XG4gICAgICAgIHZhciBzaG91bGRDb21wbGV0ZVJpZ2h0ID0gdmVsb2NpdHkgPj0gMCAmJiAodmVsb2NpdHkgPiAwLjIgfHwgZGV0YWlsLmRlbHRhWCA+IHopO1xuICAgICAgICB2YXIgc2hvdWxkQ29tcGxldGVMZWZ0ID0gdmVsb2NpdHkgPD0gMCAmJiAodmVsb2NpdHkgPCAtMC4yIHx8IGRldGFpbC5kZWx0YVggPCAteik7XG4gICAgICAgIHZhciBzaG91bGRDb21wbGV0ZSA9IGlzT3BlblxuICAgICAgICAgICAgPyBpc0VuZFNpZGUgPyBzaG91bGRDb21wbGV0ZVJpZ2h0IDogc2hvdWxkQ29tcGxldGVMZWZ0XG4gICAgICAgICAgICA6IGlzRW5kU2lkZSA/IHNob3VsZENvbXBsZXRlTGVmdCA6IHNob3VsZENvbXBsZXRlUmlnaHQ7XG4gICAgICAgIHZhciBzaG91bGRPcGVuID0gIWlzT3BlbiAmJiBzaG91bGRDb21wbGV0ZTtcbiAgICAgICAgaWYgKGlzT3BlbiAmJiAhc2hvdWxkQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHNob3VsZE9wZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdE9uRW5kID0gZGV0YWlsLnRpbWVTdGFtcDtcbiAgICAgICAgLy8gQWNjb3VudCBmb3Igcm91bmRpbmcgZXJyb3JzIGluIEpTXG4gICAgICAgIHZhciBuZXdTdGVwVmFsdWUgPSAoc2hvdWxkQ29tcGxldGUpID8gMC4wMDEgOiAtMC4wMDE7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUT0RPOiBzdGVwVmFsdWUgY2FuIHNvbWV0aW1lcyByZXR1cm4gYSBuZWdhdGl2ZVxuICAgICAgICAgKiB2YWx1ZSwgYnV0IHlvdSBjYW4ndCBoYXZlIGEgbmVnYXRpdmUgdGltZSB2YWx1ZVxuICAgICAgICAgKiBmb3IgdGhlIGN1YmljIGJlemllciBjdXJ2ZSAoYXQgbGVhc3Qgd2l0aCB3ZWIgYW5pbWF0aW9ucylcbiAgICAgICAgICogTm90IHN1cmUgaWYgdGhlIG5lZ2F0aXZlIHN0ZXAgdmFsdWUgaXMgYW4gZXJyb3Igb3Igbm90XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgYWRqdXN0ZWRTdGVwVmFsdWUgPSAoc3RlcFZhbHVlIDw9IDApID8gMC4wMSA6IHN0ZXBWYWx1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuaW1hdGlvbiB3aWxsIGJlIHJldmVyc2VkIGhlcmUsIHNvIG5lZWQgdG9cbiAgICAgICAgICogcmV2ZXJzZSB0aGUgZWFzaW5nIGN1cnZlIGFzIHdlbGxcbiAgICAgICAgICpcbiAgICAgICAgICogQWRkaXRpb25hbGx5LCB3ZSBuZWVkIHRvIGFjY291bnQgZm9yIHRoZSB0aW1lIHJlbGF0aXZlXG4gICAgICAgICAqIHRvIHRoZSBuZXcgZWFzaW5nIGN1cnZlLCBhcyBgc3RlcFZhbHVlYCBpcyBnb2luZyB0byBiZSBnaXZlblxuICAgICAgICAgKiBpbiB0ZXJtcyBvZiBhIGxpbmVhciBjdXJ2ZS5cbiAgICAgICAgICovXG4gICAgICAgIG5ld1N0ZXBWYWx1ZSArPSBnZXRUaW1lR2l2ZW5Qcm9ncmVzc2lvbihuZXcgUG9pbnQoMCwgMCksIG5ldyBQb2ludCgwLjQsIDApLCBuZXcgUG9pbnQoMC42LCAxKSwgbmV3IFBvaW50KDEsIDEpLCBjbGFtcCgwLCBhZGp1c3RlZFN0ZXBWYWx1ZSwgMSkpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvblxuICAgICAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjYsIDEpJylcbiAgICAgICAgICAgIC5vbkZpbmlzaChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hZnRlckFuaW1hdGlvbihzaG91bGRPcGVuKTsgfSwgeyBvbmVUaW1lQ2FsbGJhY2s6IHRydWUgfSlcbiAgICAgICAgICAgIC5wcm9ncmVzc0VuZChzaG91bGRDb21wbGV0ZSA/IDEgOiAwLCBuZXdTdGVwVmFsdWUsIDMwMCk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5iZWZvcmVBbmltYXRpb24gPSBmdW5jdGlvbiAoc2hvdWxkT3Blbikge1xuICAgICAgICBhc3NlcnQoIXRoaXMuaXNBbmltYXRpbmcsICdfYmVmb3JlKCkgc2hvdWxkIG5vdCBiZSBjYWxsZWQgd2hpbGUgYW5pbWF0aW5nJyk7XG4gICAgICAgIC8vIHRoaXMgcGxhY2VzIHRoZSBtZW51IGludG8gdGhlIGNvcnJlY3QgbG9jYXRpb24gYmVmb3JlIGl0IGFuaW1hdGVzIGluXG4gICAgICAgIC8vIHRoaXMgY3NzIGNsYXNzIGRvZXNuJ3QgYWN0dWFsbHkga2ljayBvZmYgYW55IGFuaW1hdGlvbnNcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKFNIT1dfTUVOVSk7XG4gICAgICAgIGlmICh0aGlzLmJhY2tkcm9wRWwpIHtcbiAgICAgICAgICAgIHRoaXMuYmFja2Ryb3BFbC5jbGFzc0xpc3QuYWRkKFNIT1dfQkFDS0RST1ApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmxvY2tlci5ibG9jaygpO1xuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgaWYgKHNob3VsZE9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuaW9uV2lsbE9wZW4uZW1pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pb25XaWxsQ2xvc2UuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5hZnRlckFuaW1hdGlvbiA9IGZ1bmN0aW9uIChpc09wZW4pIHtcbiAgICAgICAgYXNzZXJ0KHRoaXMuaXNBbmltYXRpbmcsICdfYmVmb3JlKCkgc2hvdWxkIGJlIGNhbGxlZCB3aGlsZSBhbmltYXRpbmcnKTtcbiAgICAgICAgLy8ga2VlcCBvcGVuaW5nL2Nsb3NpbmcgdGhlIG1lbnUgZGlzYWJsZWQgZm9yIGEgdG91Y2ggbW9yZSB5ZXRcbiAgICAgICAgLy8gb25seSBhZGQgbGlzdGVuZXJzL2NzcyBpZiBpdCdzIGVuYWJsZWQgYW5kIGlzT3BlblxuICAgICAgICAvLyBhbmQgb25seSByZW1vdmUgbGlzdGVuZXJzL2NzcyBpZiBpdCdzIG5vdCBvcGVuXG4gICAgICAgIC8vIGVtaXQgb3BlbmVkL2Nsb3NlZCBldmVudHNcbiAgICAgICAgdGhpcy5faXNPcGVuID0gaXNPcGVuO1xuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5faXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmJsb2NrZXIudW5ibG9jaygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgICAgIC8vIGFkZCBjc3MgY2xhc3NcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRlbnRFbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudEVsLmNsYXNzTGlzdC5hZGQoTUVOVV9DT05URU5UX09QRU4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZW1pdCBvcGVuIGV2ZW50XG4gICAgICAgICAgICB0aGlzLmlvbkRpZE9wZW4uZW1pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGNzcyBjbGFzc2VzXG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoU0hPV19NRU5VKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRlbnRFbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudEVsLmNsYXNzTGlzdC5yZW1vdmUoTUVOVV9DT05URU5UX09QRU4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYmFja2Ryb3BFbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFja2Ryb3BFbC5jbGFzc0xpc3QucmVtb3ZlKFNIT1dfQkFDS0RST1ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZW1pdCBjbG9zZSBldmVudFxuICAgICAgICAgICAgdGhpcy5pb25EaWRDbG9zZS5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnVwZGF0ZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXNBY3RpdmUgPSB0aGlzLl9pc0FjdGl2ZSgpO1xuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuc2V0RGlzYWJsZWQoIWlzQWN0aXZlIHx8ICF0aGlzLnN3aXBlR2VzdHVyZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2xvc2UgbWVudSBpbW1lZGlhdGVseVxuICAgICAgICBpZiAoIWlzQWN0aXZlICYmIHRoaXMuX2lzT3Blbikge1xuICAgICAgICAgICAgLy8gY2xvc2UgaWYgdGhpcyBtZW51IGlzIG9wZW4sIGFuZCBzaG91bGQgbm90IGJlIGVuYWJsZWRcbiAgICAgICAgICAgIHRoaXMuZm9yY2VDbG9zaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBtZW51Q29udHJvbGxlci5fc2V0QWN0aXZlTWVudSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBhc3NlcnQoIXRoaXMuaXNBbmltYXRpbmcsICdjYW4gbm90IGJlIGFuaW1hdGluZycpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZm9yY2VDbG9zaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBhc3NlcnQodGhpcy5faXNPcGVuLCAnbWVudSBjYW5ub3QgYmUgY2xvc2VkJyk7XG4gICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICB2YXIgYW5pID0gdGhpcy5hbmltYXRpb24uZGlyZWN0aW9uKCdyZXZlcnNlJyk7XG4gICAgICAgIGFuaS5wbGF5U3luYygpO1xuICAgICAgICB0aGlzLmFmdGVyQW5pbWF0aW9uKGZhbHNlKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLCBpc0VuZFNpZGUgPSBfYi5pc0VuZFNpZGUsIHR5cGUgPSBfYi50eXBlLCBkaXNhYmxlZCA9IF9iLmRpc2FibGVkLCBtb2RlID0gX2IubW9kZSwgaXNQYW5lVmlzaWJsZSA9IF9iLmlzUGFuZVZpc2libGU7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IHJvbGU6IFwibmF2aWdhdGlvblwiLCBjbGFzczogKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hW1wibWVudS10eXBlLVwiICsgdHlwZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hWydtZW51LWVuYWJsZWQnXSA9ICFkaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBfYVsnbWVudS1zaWRlLWVuZCddID0gaXNFbmRTaWRlLFxuICAgICAgICAgICAgICAgIF9hWydtZW51LXNpZGUtc3RhcnQnXSA9ICFpc0VuZFNpZGUsXG4gICAgICAgICAgICAgICAgX2FbJ21lbnUtcGFuZS12aXNpYmxlJ10gPSBpc1BhbmVWaXNpYmxlLFxuICAgICAgICAgICAgICAgIF9hKSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwibWVudS1pbm5lclwiLCByZWY6IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gX3RoaXMubWVudUlubmVyRWwgPSBlbDsgfSB9LCBoKFwic2xvdFwiLCBudWxsKSksIGgoXCJpb24tYmFja2Ryb3BcIiwgeyByZWY6IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gX3RoaXMuYmFja2Ryb3BFbCA9IGVsOyB9LCBjbGFzczogXCJtZW51LWJhY2tkcm9wXCIsIHRhcHBhYmxlOiBmYWxzZSwgc3RvcFByb3BhZ2F0aW9uOiBmYWxzZSB9KSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJ3YXRjaGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogW1widHlwZUNoYW5nZWRcIl0sXG4gICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZENoYW5nZWRcIl0sXG4gICAgICAgICAgICAgICAgXCJzaWRlXCI6IFtcInNpZGVDaGFuZ2VkXCJdLFxuICAgICAgICAgICAgICAgIFwic3dpcGVHZXN0dXJlXCI6IFtcInN3aXBlR2VzdHVyZUNoYW5nZWRcIl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIjpob3N0ey0td2lkdGg6MzA0cHg7LS1taW4td2lkdGg6YXV0bzstLW1heC13aWR0aDphdXRvOy0taGVpZ2h0OjEwMCU7LS1taW4taGVpZ2h0OmF1dG87LS1tYXgtaGVpZ2h0OmF1dG87LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpO2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtjb250YWluOnN0cmljdH06aG9zdCguc2hvdy1tZW51KXtkaXNwbGF5OmJsb2NrfS5tZW51LWlubmVye2xlZnQ6MDtyaWdodDphdXRvO3RvcDowO2JvdHRvbTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC05OTk5cHgsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTk5OTlweCwwLDApO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjt3aWR0aDp2YXIoLS13aWR0aCk7bWluLXdpZHRoOnZhcigtLW1pbi13aWR0aCk7bWF4LXdpZHRoOnZhcigtLW1heC13aWR0aCk7aGVpZ2h0OnZhcigtLWhlaWdodCk7bWluLWhlaWdodDp2YXIoLS1taW4taGVpZ2h0KTttYXgtaGVpZ2h0OnZhcigtLW1heC1oZWlnaHQpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29udGFpbjpzdHJpY3R9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5tZW51LWlubmVyLFtkaXI9cnRsXSAubWVudS1pbm5lcntsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O2xlZnQ6YXV0bztyaWdodDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKGNhbGMoLTEgKiAtOTk5OXB4KSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZChjYWxjKC0xICogLTk5OTlweCksMCwwKX06aG9zdCgubWVudS1zaWRlLXN0YXJ0KSAubWVudS1pbm5lcnstLWlvbi1zYWZlLWFyZWEtcmlnaHQ6MHB4O3JpZ2h0OmF1dG87bGVmdDowfTpob3N0KC5tZW51LXNpZGUtZW5kKSAubWVudS1pbm5lcnstLWlvbi1zYWZlLWFyZWEtbGVmdDowcHg7cmlnaHQ6MDtsZWZ0OmF1dG99aW9uLWJhY2tkcm9we2Rpc3BsYXk6bm9uZTtvcGFjaXR5Oi4wMTt6LWluZGV4Oi0xfVxcQG1lZGlhIChtYXgtd2lkdGg6MzQwcHgpey5tZW51LWlubmVyey0td2lkdGg6MjY0cHh9fTpob3N0KC5tZW51LXR5cGUtcmV2ZWFsKXt6LWluZGV4OjB9Omhvc3QoLm1lbnUtdHlwZS1yZXZlYWwuc2hvdy1tZW51KSAubWVudS1pbm5lcnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfTpob3N0KC5tZW51LXR5cGUtb3ZlcmxheSl7ei1pbmRleDoxMDAwfTpob3N0KC5tZW51LXR5cGUtb3ZlcmxheSkgLnNob3ctYmFja2Ryb3B7ZGlzcGxheTpibG9jaztjdXJzb3I6cG9pbnRlcn06aG9zdCgubWVudS1wYW5lLXZpc2libGUpIC5tZW51LWlubmVye2xlZnQ6MDtyaWdodDowO3dpZHRoOmF1dG87LXdlYmtpdC10cmFuc2Zvcm06bm9uZSFpbXBvcnRhbnQ7dHJhbnNmb3JtOm5vbmUhaW1wb3J0YW50Oy13ZWJraXQtYm94LXNoYWRvdzpub25lIWltcG9ydGFudDtib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50fTpob3N0KC5tZW51LXBhbmUtdmlzaWJsZSkgaW9uLWJhY2tkcm9we2Rpc3BsYXk6aGlkZGVuIWltcG9ydGFudH06aG9zdCgubWVudS10eXBlLXB1c2gpe3otaW5kZXg6MTAwMH06aG9zdCgubWVudS10eXBlLXB1c2gpIC5zaG93LWJhY2tkcm9we2Rpc3BsYXk6YmxvY2t9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbnZhciBjb21wdXRlRGVsdGEgPSBmdW5jdGlvbiAoZGVsdGFYLCBpc09wZW4sIGlzRW5kU2lkZSkge1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBpc09wZW4gIT09IGlzRW5kU2lkZSA/IC1kZWx0YVggOiBkZWx0YVgpO1xufTtcbnZhciBjaGVja0VkZ2VTaWRlID0gZnVuY3Rpb24gKHdpbiwgcG9zWCwgaXNFbmRTaWRlLCBtYXhFZGdlU3RhcnQpIHtcbiAgICBpZiAoaXNFbmRTaWRlKSB7XG4gICAgICAgIHJldHVybiBwb3NYID49IHdpbi5pbm5lcldpZHRoIC0gbWF4RWRnZVN0YXJ0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBvc1ggPD0gbWF4RWRnZVN0YXJ0O1xuICAgIH1cbn07XG52YXIgU0hPV19NRU5VID0gJ3Nob3ctbWVudSc7XG52YXIgU0hPV19CQUNLRFJPUCA9ICdzaG93LWJhY2tkcm9wJztcbnZhciBNRU5VX0NPTlRFTlRfT1BFTiA9ICdtZW51LWNvbnRlbnQtb3Blbic7XG4vLyBHaXZlbiBhIG1lbnUsIHJldHVybiB3aGV0aGVyIG9yIG5vdCB0aGUgbWVudSB0b2dnbGUgc2hvdWxkIGJlIHZpc2libGVcbnZhciB1cGRhdGVWaXNpYmlsaXR5ID0gZnVuY3Rpb24gKG1lbnUpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1lbnVFbCwgX2E7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIG1lbnVDb250cm9sbGVyLmdldChtZW51KV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgbWVudUVsID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIF9hID0gbWVudUVsO1xuICAgICAgICAgICAgICAgIGlmICghX2EpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG1lbnVFbC5pc0FjdGl2ZSgpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBfYSA9IChfYi5zZW50KCkpO1xuICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMztcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi8sICEhKF9hKV07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xudmFyIE1lbnVCdXR0b24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMihob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgbWVudSBidXR0b24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBdXRvbWF0aWNhbGx5IGhpZGVzIHRoZSBtZW51IGJ1dHRvbiB3aGVuIHRoZSBjb3JyZXNwb25kaW5nIG1lbnUgaXMgbm90IGFjdGl2ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hdXRvSGlkZSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBvZiB0aGUgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIHRoaXMub25DbGljayA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbWVudUNvbnRyb2xsZXIudG9nZ2xlKHRoaXMubWVudSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pOyB9O1xuICAgIH1cbiAgICBjbGFzc18yLnByb3RvdHlwZS5jb21wb25lbnREaWRMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnZpc2liaWxpdHlDaGFuZ2VkKCk7XG4gICAgfTtcbiAgICBjbGFzc18yLnByb3RvdHlwZS52aXNpYmlsaXR5Q2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdXBkYXRlVmlzaWJpbGl0eSh0aGlzLm1lbnUpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudmlzaWJsZSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18yLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIF9iID0gdGhpcywgY29sb3IgPSBfYi5jb2xvciwgZGlzYWJsZWQgPSBfYi5kaXNhYmxlZDtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICB2YXIgbWVudUljb24gPSBjb25maWcuZ2V0KCdtZW51SWNvbicsICdtZW51Jyk7XG4gICAgICAgIHZhciBoaWRkZW4gPSB0aGlzLmF1dG9IaWRlICYmICF0aGlzLnZpc2libGU7XG4gICAgICAgIHZhciBhdHRycyA9IHtcbiAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/ICd0cnVlJyA6IG51bGwsIFwiYXJpYS1oaWRkZW5cIjogaGlkZGVuID8gJ3RydWUnIDogbnVsbCwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbigoX2EgPSB7fSwgX2FbbW9kZV0gPSB0cnVlLCBfYSksIGNyZWF0ZUNvbG9yQ2xhc3Nlcyhjb2xvcikpLCB7ICdidXR0b24nOiB0cnVlLCAnbWVudS1idXR0b24taGlkZGVuJzogaGlkZGVuLCAnbWVudS1idXR0b24tZGlzYWJsZWQnOiBkaXNhYmxlZCwgJ2lvbi1hY3RpdmF0YWJsZSc6IHRydWUsICdpb24tZm9jdXNhYmxlJzogdHJ1ZSB9KSB9LCBoKFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oe30sIGF0dHJzLCB7IGRpc2FibGVkOiBkaXNhYmxlZCwgY2xhc3M6IFwiYnV0dG9uLW5hdGl2ZVwiIH0pLCBoKFwic2xvdFwiLCBudWxsLCBoKFwiaW9uLWljb25cIiwgeyBpY29uOiBtZW51SWNvbiwgbW9kZTogbW9kZSwgbGF6eTogZmFsc2UgfSkpLCBtb2RlID09PSAnbWQnICYmIGgoXCJpb24tcmlwcGxlLWVmZmVjdFwiLCB7IHR5cGU6IFwidW5ib3VuZGVkXCIgfSkpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMiwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCI6aG9zdHstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1jb2xvci1mb2N1c2VkOnZhcigtLWNvbG9yKTstLWJvcmRlci1yYWRpdXM6aW5pdGlhbDstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWJvdHRvbTowO2NvbG9yOnZhcigtLWNvbG9yKTt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3RleHQtdHJhbnNmb3JtOm5vbmU7d2hpdGUtc3BhY2U6bm93cmFwOy13ZWJraXQtZm9udC1rZXJuaW5nOm5vbmU7Zm9udC1rZXJuaW5nOm5vbmV9LmJ1dHRvbi1uYXRpdmV7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctcmlnaHQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtZmxvdzpyb3cgbm93cmFwO2ZsZXgtZmxvdzpyb3cgbm93cmFwOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3JkZXI6MDtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtsaW5lLWhlaWdodDoxO2N1cnNvcjpwb2ludGVyOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjA7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYnV0dG9uLW5hdGl2ZXtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKX19aW9uLWljb257bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCgubWVudS1idXR0b24taGlkZGVuKXtkaXNwbGF5Om5vbmV9Omhvc3QoLm1lbnUtYnV0dG9uLWRpc2FibGVkKXtjdXJzb3I6ZGVmYXVsdDtvcGFjaXR5Oi41O3BvaW50ZXItZXZlbnRzOm5vbmV9XFxAbWVkaWEgKGFueS1ob3Zlcjpob3Zlcil7Omhvc3QoOmhvdmVyKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtaG92ZXIpO2NvbG9yOnZhcigtLWNvbG9yLWhvdmVyKX19Omhvc3QoLmlvbi1mb2N1c2VkKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtZm9jdXNlZCk7Y29sb3I6dmFyKC0tY29sb3ItZm9jdXNlZCl9Omhvc3QoLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0LWNvbnRleHQoaW9uLXRvb2xiYXI6bm90KC5pb24tY29sb3IpKXtjb2xvcjp2YXIoLS1pb24tdG9vbGJhci1jb2xvcix2YXIoLS1jb2xvcikpfTpob3N0ey0tYmFja2dyb3VuZC1mb2N1c2VkOnJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLDU2LDEyOCwyNTUpLDAuMSk7LS1ib3JkZXItcmFkaXVzOjRweDstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpOy0tcGFkZGluZy1zdGFydDo1cHg7LS1wYWRkaW5nLWVuZDo1cHg7aGVpZ2h0OjMycHg7Zm9udC1zaXplOjMxcHh9Omhvc3QoLmFjdGl2YXRlZCl7b3BhY2l0eTouNH1cXEBtZWRpYSAoYW55LWhvdmVyOmhvdmVyKXs6aG9zdCg6aG92ZXIpe29wYWNpdHk6LjZ9fTpob3N0KC5pb24tY29sb3IuaW9uLWZvY3VzZWQpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLC4xKX1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzI7XG59KCkpO1xudmFyIE1lbnVDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzMoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPcGVuIHRoZSBtZW51LiBJZiBhIG1lbnUgaXMgbm90IHByb3ZpZGVkIHRoZW4gaXQgd2lsbCBvcGVuIHRoZSBmaXJzdFxuICAgICAqIG1lbnUgZm91bmQuIElmIHRoZSBzcGVjaWZpZWQgbWVudSBpcyBgc3RhcnRgIG9yIGBlbmRgLCB0aGVuIGl0IHdpbGwgb3BlblxuICAgICAqIHRoZSBlbmFibGVkIG1lbnUgb24gdGhhdCBzaWRlLiBPdGhlcndpc2UsIGl0IHdpbGwgdHJ5IHRvIGZpbmQgdGhlIG1lbnVcbiAgICAgKiB1c2luZyB0aGUgbWVudSdzIGBpZGAgcHJvcGVydHkuIElmIGEgbWVudSBpcyBub3QgZm91bmQgdGhlbiBpdCB3aWxsXG4gICAgICogcmV0dXJuIGBmYWxzZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWVudSBUaGUgbWVudUlkIG9yIHNpZGUgb2YgdGhlIG1lbnUgdG8gb3Blbi5cbiAgICAgKi9cbiAgICBjbGFzc18zLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKG1lbnUpIHtcbiAgICAgICAgcmV0dXJuIG1lbnVDb250cm9sbGVyLm9wZW4obWVudSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbG9zZSB0aGUgbWVudS4gSWYgYSBtZW51IGlzIHNwZWNpZmllZCwgaXQgd2lsbCBjbG9zZSB0aGF0IG1lbnUuXG4gICAgICogSWYgbm8gbWVudSBpcyBzcGVjaWZpZWQsIHRoZW4gaXQgd2lsbCBjbG9zZSBhbnkgbWVudSB0aGF0IGlzIG9wZW4uXG4gICAgICogSWYgaXQgZG9lcyBub3QgZmluZCBhbnkgb3BlbiBtZW51cywgaXQgd2lsbCByZXR1cm4gYGZhbHNlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtZW51IFRoZSBtZW51SWQgb3Igc2lkZSBvZiB0aGUgbWVudSB0byBjbG9zZS5cbiAgICAgKi9cbiAgICBjbGFzc18zLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChtZW51KSB7XG4gICAgICAgIHJldHVybiBtZW51Q29udHJvbGxlci5jbG9zZShtZW51KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRvZ2dsZSB0aGUgbWVudSBvcGVuIG9yIGNsb3NlZC4gSWYgdGhlIG1lbnUgaXMgYWxyZWFkeSBvcGVuLCBpdCB3aWxsIHRyeSB0b1xuICAgICAqIGNsb3NlIHRoZSBtZW51LCBvdGhlcndpc2UgaXQgd2lsbCB0cnkgdG8gb3BlbiBpdC4gUmV0dXJucyBgZmFsc2VgIGlmXG4gICAgICogYSBtZW51IGlzIG5vdCBmb3VuZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtZW51IFRoZSBtZW51SWQgb3Igc2lkZSBvZiB0aGUgbWVudSB0byB0b2dnbGUuXG4gICAgICovXG4gICAgY2xhc3NfMy5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKG1lbnUpIHtcbiAgICAgICAgcmV0dXJuIG1lbnVDb250cm9sbGVyLnRvZ2dsZShtZW51KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEVuYWJsZSBvciBkaXNhYmxlIGEgbWVudS4gRGlzYWJsaW5nIGEgbWVudSB3aWxsIG5vdCBhbGxvdyBnZXN0dXJlc1xuICAgICAqIGZvciB0aGF0IG1lbnUgb3IgYW55IGNhbGxzIHRvIG9wZW4gaXQuIFRoaXMgaXMgdXNlZnVsIHdoZW4gdGhlcmUgYXJlXG4gICAgICogbXVsdGlwbGUgbWVudXMgb24gdGhlIHNhbWUgc2lkZSBhbmQgb25seSBvbmUgb2YgdGhlbSBzaG91bGQgYmUgYWxsb3dlZFxuICAgICAqIHRvIG9wZW4uIEVuYWJsaW5nIGEgbWVudSB3aWxsIGF1dG9tYXRpY2FsbHkgZGlzYWJsZSBhbGwgb3RoZXIgbWVudXNcbiAgICAgKiBvbiB0aGF0IHNpZGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZW5hYmxlIElmIGB0cnVlYCwgdGhlIG1lbnUgc2hvdWxkIGJlIGVuYWJsZWQuXG4gICAgICogQHBhcmFtIG1lbnUgVGhlIG1lbnVJZCBvciBzaWRlIG9mIHRoZSBtZW51IHRvIGVuYWJsZSBvciBkaXNhYmxlLlxuICAgICAqL1xuICAgIGNsYXNzXzMucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uIChlbmFibGUsIG1lbnUpIHtcbiAgICAgICAgcmV0dXJuIG1lbnVDb250cm9sbGVyLmVuYWJsZShlbmFibGUsIG1lbnUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRW5hYmxlIG9yIGRpc2FibGUgdGhlIGFiaWxpdHkgdG8gc3dpcGUgb3BlbiB0aGUgbWVudS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbmFibGUgSWYgYHRydWVgLCB0aGUgbWVudSBzd2lwZSBnZXN0dXJlIHNob3VsZCBiZSBlbmFibGVkLlxuICAgICAqIEBwYXJhbSBtZW51IFRoZSBtZW51SWQgb3Igc2lkZSBvZiB0aGUgbWVudSB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgc3dpcGUgZ2VzdHVyZSBvbi5cbiAgICAgKi9cbiAgICBjbGFzc18zLnByb3RvdHlwZS5zd2lwZUdlc3R1cmUgPSBmdW5jdGlvbiAoZW5hYmxlLCBtZW51KSB7XG4gICAgICAgIHJldHVybiBtZW51Q29udHJvbGxlci5zd2lwZUdlc3R1cmUoZW5hYmxlLCBtZW51KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB3aGV0aGVyIG9yIG5vdCB0aGUgbWVudSBpcyBvcGVuLiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgc3BlY2lmaWVkXG4gICAgICogbWVudSBpcyBvcGVuLiBJZiBhIG1lbnUgaXMgbm90IHNwZWNpZmllZCwgaXQgd2lsbCByZXR1cm4gYHRydWVgIGlmXG4gICAgICogYW55IG1lbnUgaXMgY3VycmVudGx5IG9wZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWVudSBUaGUgbWVudUlkIG9yIHNpZGUgb2YgdGhlIG1lbnUgdGhhdCBpcyBiZWluZyBjaGVja2VkLlxuICAgICAqL1xuICAgIGNsYXNzXzMucHJvdG90eXBlLmlzT3BlbiA9IGZ1bmN0aW9uIChtZW51KSB7XG4gICAgICAgIHJldHVybiBtZW51Q29udHJvbGxlci5pc09wZW4obWVudSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgd2hldGhlciBvciBub3QgdGhlIG1lbnUgaXMgZW5hYmxlZC4gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlXG4gICAgICogc3BlY2lmaWVkIG1lbnUgaXMgZW5hYmxlZC4gUmV0dXJucyBgZmFsc2VgIGlmIGEgbWVudSBpcyBkaXNhYmxlZFxuICAgICAqIG9yIG5vdCBmb3VuZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtZW51IFRoZSBtZW51SWQgb3Igc2lkZSBvZiB0aGUgbWVudSB0aGF0IGlzIGJlaW5nIGNoZWNrZWQuXG4gICAgICovXG4gICAgY2xhc3NfMy5wcm90b3R5cGUuaXNFbmFibGVkID0gZnVuY3Rpb24gKG1lbnUpIHtcbiAgICAgICAgcmV0dXJuIG1lbnVDb250cm9sbGVyLmlzRW5hYmxlZChtZW51KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBhIG1lbnUgaW5zdGFuY2UuIElmIGEgbWVudSBpcyBub3QgcHJvdmlkZWQgdGhlbiBpdCB3aWxsIHJldHVybiB0aGUgZmlyc3RcbiAgICAgKiBtZW51IGZvdW5kLiBJZiB0aGUgc3BlY2lmaWVkIG1lbnUgaXMgYHN0YXJ0YCBvciBgZW5kYCwgdGhlbiBpdCB3aWxsIHJldHVybiB0aGVcbiAgICAgKiBlbmFibGVkIG1lbnUgb24gdGhhdCBzaWRlLiBPdGhlcndpc2UsIGl0IHdpbGwgdHJ5IHRvIGZpbmQgdGhlIG1lbnUgdXNpbmcgdGhlIG1lbnUnc1xuICAgICAqIGBpZGAgcHJvcGVydHkuIElmIGEgbWVudSBpcyBub3QgZm91bmQgdGhlbiBpdCB3aWxsIHJldHVybiBgbnVsbGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWVudSBUaGUgbWVudUlkIG9yIHNpZGUgb2YgdGhlIG1lbnUuXG4gICAgICovXG4gICAgY2xhc3NfMy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG1lbnUpIHtcbiAgICAgICAgcmV0dXJuIG1lbnVDb250cm9sbGVyLmdldChtZW51KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaW5zdGFuY2Ugb2YgdGhlIG9wZW5lZCBtZW51LiBSZXR1cm5zIGBudWxsYCBpZiBhIG1lbnUgaXMgbm90IGZvdW5kLlxuICAgICAqL1xuICAgIGNsYXNzXzMucHJvdG90eXBlLmdldE9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBtZW51Q29udHJvbGxlci5nZXRPcGVuKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIG1lbnUgaW5zdGFuY2VzLlxuICAgICAqL1xuICAgIGNsYXNzXzMucHJvdG90eXBlLmdldE1lbnVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbWVudUNvbnRyb2xsZXIuZ2V0TWVudXMoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB3aGV0aGVyIG9yIG5vdCBhIG1lbnUgaXMgYW5pbWF0aW5nLiBSZXR1cm5zIGB0cnVlYCBpZiBhbnlcbiAgICAgKiBtZW51IGlzIGN1cnJlbnRseSBhbmltYXRpbmcuXG4gICAgICovXG4gICAgY2xhc3NfMy5wcm90b3R5cGUuaXNBbmltYXRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBtZW51Q29udHJvbGxlci5pc0FuaW1hdGluZygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgbmV3IGFuaW1hdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHdpdGggYW55IGBpb24tbWVudWAgYnlcbiAgICAgKiBwYXNzaW5nIHRoZSBuYW1lIG9mIHRoZSBhbmltYXRpb24gaW4gaXRzIGB0eXBlYCBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBhbmltYXRpb24gdG8gcmVnaXN0ZXIuXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBUaGUgYW5pbWF0aW9uIGZ1bmN0aW9uIHRvIHJlZ2lzdGVyLlxuICAgICAqL1xuICAgIGNsYXNzXzMucHJvdG90eXBlLnJlZ2lzdGVyQW5pbWF0aW9uID0gZnVuY3Rpb24gKG5hbWUsIGFuaW1hdGlvbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG1lbnVDb250cm9sbGVyLnJlZ2lzdGVyQW5pbWF0aW9uKG5hbWUsIGFuaW1hdGlvbildO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIGNsYXNzXzM7XG59KCkpO1xudmFyIE1lbnVUb2dnbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfNChob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQXV0b21hdGljYWxseSBoaWRlcyB0aGUgY29udGVudCB3aGVuIHRoZSBjb3JyZXNwb25kaW5nIG1lbnUgaXMgbm90IGFjdGl2ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQnkgZGVmYXVsdCwgaXQncyBgdHJ1ZWAuIENoYW5nZSBpdCB0byBgZmFsc2VgIGluIG9yZGVyIHRvXG4gICAgICAgICAqIGtlZXAgYGlvbi1tZW51LXRvZ2dsZWAgYWx3YXlzIHZpc2libGUgcmVnYXJkbGVzcyB0aGUgc3RhdGUgb2YgdGhlIG1lbnUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmF1dG9IaWRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG1lbnVDb250cm9sbGVyLnRvZ2dsZShfdGhpcy5tZW51KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xhc3NfNC5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eUNoYW5nZWQoKTtcbiAgICB9O1xuICAgIGNsYXNzXzQucHJvdG90eXBlLnZpc2liaWxpdHlDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB1cGRhdGVWaXNpYmlsaXR5KHRoaXMubWVudSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS52aXNpYmxlID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHZhciBoaWRkZW4gPSB0aGlzLmF1dG9IaWRlICYmICF0aGlzLnZpc2libGU7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMub25DbGljaywgXCJhcmlhLWhpZGRlblwiOiBoaWRkZW4gPyAndHJ1ZScgOiBudWxsLCBjbGFzczogKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hWydtZW51LXRvZ2dsZS1oaWRkZW4nXSA9IGhpZGRlbixcbiAgICAgICAgICAgICAgICBfYSkgfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc180LCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIjpob3N0KC5tZW51LXRvZ2dsZS1oaWRkZW4pe2Rpc3BsYXk6bm9uZX1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzQ7XG59KCkpO1xuZXhwb3J0IHsgTWVudSBhcyBpb25fbWVudSwgTWVudUJ1dHRvbiBhcyBpb25fbWVudV9idXR0b24sIE1lbnVDb250cm9sbGVyIGFzIGlvbl9tZW51X2NvbnRyb2xsZXIsIE1lbnVUb2dnbGUgYXMgaW9uX21lbnVfdG9nZ2xlIH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG52YXIgaG9zdENvbnRleHQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGVsKSB7XG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xufTtcbi8qKlxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxuICovXG52YXIgY3JlYXRlQ29sb3JDbGFzc2VzID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IChfYSA9IHtcbiAgICAgICAgICAgICdpb24tY29sb3InOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIF9hW1wiaW9uLWNvbG9yLVwiICsgY29sb3JdID0gdHJ1ZSxcbiAgICAgICAgX2EpIDogdW5kZWZpbmVkO1xufTtcbnZhciBnZXRDbGFzc0xpc3QgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgIHJldHVybiBhcnJheVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPSBudWxsOyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50cmltKCk7IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSAnJzsgfSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbn07XG52YXIgZ2V0Q2xhc3NNYXAgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gbWFwW2NdID0gdHJ1ZTsgfSk7XG4gICAgcmV0dXJuIG1hcDtcbn07XG52YXIgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XG52YXIgb3BlblVSTCA9IGZ1bmN0aW9uICh1cmwsIGV2LCBkaXJlY3Rpb24pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvdXRlcjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgICAgICAgaWYgKHJvdXRlcikge1xuICAgICAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbildO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=