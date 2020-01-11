(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-menu_4-md.entry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-menu_4-md.entry.js ***!
  \**********************************************************************/
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
        get: function () { return ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}\@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"; },
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
        get: function () { return ":host{--background:transparent;--color-focused:var(--color);--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}\@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(66,66,66,0.24);--background-hover:rgba(66,66,66,0.08);--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}\@media (any-hover:hover){:host(.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb),.08)}}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.24);color:var(--ion-color-base)}"; },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2N1YmljLWJlemllci0yODEyZmRhMy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1tZW51XzQtbWQuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLWVzNS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsK0JBQStCLEVBQUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvRDs7Ozs7Ozs7Ozs7OztBQzVGcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUM4RTtBQUMxRTtB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OiIxMi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJhc2VkIG9uOlxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzM0ODAwOS95LWNvb3JkaW5hdGUtZm9yLWEtZ2l2ZW4teC1jdWJpYy1iZXppZXJcbiAqIGh0dHBzOi8vbWF0aC5zdGFja2V4Y2hhbmdlLmNvbS9xdWVzdGlvbnMvMjY4NDYvaXMtdGhlcmUtYW4tZXhwbGljaXQtZm9ybS1mb3ItY3ViaWMtYiVDMyVBOXppZXItY3VydmVzXG4gKiBUT0RPOiBSZWR1Y2Ugcm91bmRpbmcgZXJyb3JcbiAqL1xudmFyIFBvaW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBvaW50KHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG4gICAgcmV0dXJuIFBvaW50O1xufSgpKTtcbi8qKlxuICogR2l2ZW4gYSBjdWJpYy1iZXppZXIgY3VydmUsIGdldCB0aGUgeCB2YWx1ZSAodGltZSkgZ2l2ZW5cbiAqIHRoZSB5IHZhbHVlIChwcm9ncmVzc2lvbikuXG4gKiBFeDogY3ViaWMtYmV6aWVyKDAuMzIsIDAuNzIsIDAsIDEpO1xuICogUDA6ICgwLCAwKVxuICogUDE6ICgwLjMyLCAwLjcyKVxuICogUDI6ICgwLCAxKVxuICogUDM6ICgxLCAxKVxuICpcbiAqIElmIHlvdSBnaXZlIGEgY3ViaWMgYmV6aWVyIGN1cnZlIHRoYXQgbmV2ZXIgcmVhY2hlcyB0aGVcbiAqIHByb3ZpZGVkIHByb2dyZXNzaW9uLCB0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIE5hTi5cbiAqL1xudmFyIGdldFRpbWVHaXZlblByb2dyZXNzaW9uID0gZnVuY3Rpb24gKHAwLCBwMSwgcDIsIHAzLCBwcm9ncmVzc2lvbikge1xuICAgIHZhciB0VmFsdWVzID0gc29sdmVDdWJpY0JlemllcihwMC55LCBwMS55LCBwMi55LCBwMy55LCBwcm9ncmVzc2lvbik7XG4gICAgcmV0dXJuIHNvbHZlQ3ViaWNQYXJhbWV0cmljRXF1YXRpb24ocDAueCwgcDEueCwgcDIueCwgcDMueCwgdFZhbHVlc1swXSk7IC8vIFRPRE86IEFkZCBiZXR0ZXIgc3RyYXRlZ3kgZm9yIGRlYWxpbmcgd2l0aCBtdWx0aXBsZSBzb2x1dGlvbnNcbn07XG4vKipcbiAqIFNvbHZlIGEgY3ViaWMgZXF1YXRpb24gaW4gb25lIGRpbWVuc2lvbiAodGltZSlcbiAqL1xudmFyIHNvbHZlQ3ViaWNQYXJhbWV0cmljRXF1YXRpb24gPSBmdW5jdGlvbiAocDAsIHAxLCBwMiwgcDMsIHQpIHtcbiAgICB2YXIgcGFydEEgPSAoMyAqIHAxKSAqIE1hdGgucG93KHQgLSAxLCAyKTtcbiAgICB2YXIgcGFydEIgPSAoLTMgKiBwMiAqIHQpICsgKDMgKiBwMikgKyAocDMgKiB0KTtcbiAgICB2YXIgcGFydEMgPSBwMCAqIE1hdGgucG93KHQgLSAxLCAzKTtcbiAgICByZXR1cm4gdCAqIChwYXJ0QSArICh0ICogcGFydEIpKSAtIHBhcnRDO1xufTtcbi8qKlxuICogRmluZCB0aGUgYHRgIHZhbHVlIGZvciBhIGN1YmljIGJlemllciB1c2luZyBDYXJkYW5vJ3MgZm9ybXVsYVxuICovXG52YXIgc29sdmVDdWJpY0JlemllciA9IGZ1bmN0aW9uIChwMCwgcDEsIHAyLCBwMywgcmVmUG9pbnQpIHtcbiAgICBwMCAtPSByZWZQb2ludDtcbiAgICBwMSAtPSByZWZQb2ludDtcbiAgICBwMiAtPSByZWZQb2ludDtcbiAgICBwMyAtPSByZWZQb2ludDtcbiAgICB2YXIgcm9vdHMgPSBzb2x2ZUN1YmljRXF1YXRpb24ocDMgLSAzICogcDIgKyAzICogcDEgLSBwMCwgMyAqIHAyIC0gNiAqIHAxICsgMyAqIHAwLCAzICogcDEgLSAzICogcDAsIHAwKTtcbiAgICByZXR1cm4gcm9vdHMuZmlsdGVyKGZ1bmN0aW9uIChyb290KSB7IHJldHVybiByb290ID49IDAgJiYgcm9vdCA8PSAxOyB9KTtcbn07XG52YXIgc29sdmVRdWFkcmF0aWNFcXVhdGlvbiA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgdmFyIGRpc2NyaW1pbmFudCA9IGIgKiBiIC0gNCAqIGEgKiBjO1xuICAgIGlmIChkaXNjcmltaW5hbnQgPCAwKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAoLWIgKyBNYXRoLnNxcnQoZGlzY3JpbWluYW50KSkgLyAoMiAqIGEpLFxuICAgICAgICAgICAgKC1iIC0gTWF0aC5zcXJ0KGRpc2NyaW1pbmFudCkpIC8gKDIgKiBhKVxuICAgICAgICBdO1xuICAgIH1cbn07XG52YXIgc29sdmVDdWJpY0VxdWF0aW9uID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICBpZiAoYSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gc29sdmVRdWFkcmF0aWNFcXVhdGlvbihiLCBjLCBkKTtcbiAgICB9XG4gICAgYiAvPSBhO1xuICAgIGMgLz0gYTtcbiAgICBkIC89IGE7XG4gICAgdmFyIHAgPSAoMyAqIGMgLSBiICogYikgLyAzO1xuICAgIHZhciBxID0gKDIgKiBiICogYiAqIGIgLSA5ICogYiAqIGMgKyAyNyAqIGQpIC8gMjc7XG4gICAgaWYgKHAgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFtNYXRoLnBvdygtcSwgMSAvIDMpXTtcbiAgICB9XG4gICAgZWxzZSBpZiAocSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW01hdGguc3FydCgtcCksIC1NYXRoLnNxcnQoLXApXTtcbiAgICB9XG4gICAgdmFyIGRpc2NyaW1pbmFudCA9IE1hdGgucG93KHEgLyAyLCAyKSArIE1hdGgucG93KHAgLyAzLCAzKTtcbiAgICBpZiAoZGlzY3JpbWluYW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbTWF0aC5wb3cocSAvIDIsIDEgLyAyKSAtIGIgLyAzXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGlzY3JpbWluYW50ID4gMCkge1xuICAgICAgICByZXR1cm4gW01hdGgucG93KC0ocSAvIDIpICsgTWF0aC5zcXJ0KGRpc2NyaW1pbmFudCksIDEgLyAzKSAtIE1hdGgucG93KChxIC8gMikgKyBNYXRoLnNxcnQoZGlzY3JpbWluYW50KSwgMSAvIDMpIC0gYiAvIDNdO1xuICAgIH1cbiAgICB2YXIgciA9IE1hdGguc3FydChNYXRoLnBvdygtKHAgLyAzKSwgMykpO1xuICAgIHZhciBwaGkgPSBNYXRoLmFjb3MoLShxIC8gKDIgKiBNYXRoLnNxcnQoTWF0aC5wb3coLShwIC8gMyksIDMpKSkpKTtcbiAgICB2YXIgcyA9IDIgKiBNYXRoLnBvdyhyLCAxIC8gMyk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgcyAqIE1hdGguY29zKHBoaSAvIDMpIC0gYiAvIDMsXG4gICAgICAgIHMgKiBNYXRoLmNvcygocGhpICsgMiAqIE1hdGguUEkpIC8gMykgLSBiIC8gMyxcbiAgICAgICAgcyAqIE1hdGguY29zKChwaGkgKyA0ICogTWF0aC5QSSkgLyAzKSAtIGIgLyAzXG4gICAgXTtcbn07XG5leHBvcnQgeyBQb2ludCBhcyBQLCBnZXRUaW1lR2l2ZW5Qcm9ncmVzc2lvbiBhcyBnIH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgZ2V0SW9uTW9kZSwgZCBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtZmVlZWZmMGQuanMnO1xuaW1wb3J0IHsgYiBhcyBjb25maWcgfSBmcm9tICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzRW5kU2lkZSwgYiBhcyBhc3NlcnQsIGMgYXMgY2xhbXAgfSBmcm9tICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0ICcuL2FuaW1hdGlvbi1hZjQ3OGZlOS5qcyc7XG5pbXBvcnQgeyBHRVNUVVJFX0NPTlRST0xMRVIgfSBmcm9tICcuL2luZGV4LTYyNGVlYTU4LmpzJztcbmltcG9ydCB7IG0gYXMgbWVudUNvbnRyb2xsZXIgfSBmcm9tICcuL2luZGV4LTFlNTk0MGQ1LmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFRpbWVHaXZlblByb2dyZXNzaW9uLCBQIGFzIFBvaW50IH0gZnJvbSAnLi9jdWJpYy1iZXppZXItMjgxMmZkYTMuanMnO1xudmFyIE1lbnUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMShob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMubGFzdE9uRW5kID0gMDtcbiAgICAgICAgdGhpcy5ibG9ja2VyID0gR0VTVFVSRV9DT05UUk9MTEVSLmNyZWF0ZUJsb2NrZXIoeyBkaXNhYmxlU2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLm1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzUGFuZVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0VuZFNpZGUgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIG1lbnUgaXMgZGlzYWJsZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGljaCBzaWRlIG9mIHRoZSB2aWV3IHRoZSBtZW51IHNob3VsZCBiZSBwbGFjZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNpZGUgPSAnc3RhcnQnO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBzd2lwaW5nIHRoZSBtZW51IGlzIGVuYWJsZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN3aXBlR2VzdHVyZSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZWRnZSB0aHJlc2hvbGQgZm9yIGRyYWdnaW5nIHRoZSBtZW51IG9wZW4uXG4gICAgICAgICAqIElmIGEgZHJhZy9zd2lwZSBoYXBwZW5zIG92ZXIgdGhpcyB2YWx1ZSwgdGhlIG1lbnUgaXMgbm90IHRyaWdnZXJlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubWF4RWRnZVN0YXJ0ID0gNTA7XG4gICAgICAgIHRoaXMuaW9uV2lsbE9wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbldpbGxPcGVuXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbldpbGxDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uV2lsbENsb3NlXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkRpZE9wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkRpZE9wZW5cIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uRGlkQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkRpZENsb3NlXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbk1lbnVDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk1lbnVDaGFuZ2VcIiwgNyk7XG4gICAgfVxuICAgIGNsYXNzXzEucHJvdG90eXBlLnR5cGVDaGFuZ2VkID0gZnVuY3Rpb24gKHR5cGUsIG9sZFR5cGUpIHtcbiAgICAgICAgdmFyIGNvbnRlbnRFbCA9IHRoaXMuY29udGVudEVsO1xuICAgICAgICBpZiAoY29udGVudEVsKSB7XG4gICAgICAgICAgICBpZiAob2xkVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29udGVudEVsLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LWNvbnRlbnQtXCIgKyBvbGRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRlbnRFbC5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250ZW50LVwiICsgdHlwZSk7XG4gICAgICAgICAgICBjb250ZW50RWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1lbnVJbm5lckVsKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgZWZmZWN0cyBvZiBwcmV2aW91cyBhbmltYXRpb25zXG4gICAgICAgICAgICB0aGlzLm1lbnVJbm5lckVsLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmRpc2FibGVkQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICB0aGlzLmlvbk1lbnVDaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgICAgIG9wZW46IHRoaXMuX2lzT3BlblxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnNpZGVDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzRW5kU2lkZSA9IGlzRW5kU2lkZSh0aGlzLnNpZGUpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc3dpcGVHZXN0dXJlQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbCwgcGFyZW50LCBjb250ZW50LCBfYTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSBjb25maWcuZ2V0KCdtZW51VHlwZScsIHRoaXMubW9kZSA9PT0gJ2lvcycgPyAncmV2ZWFsJyA6ICdvdmVybGF5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbCA9IHRoaXMuZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBlbC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudElkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbREVQUkVDQVRFRF1baW9uLW1lbnVdIFVzaW5nIHRoZSBbbWFpbl0gYXR0cmlidXRlIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgdGhlIFxcXCJjb250ZW50SWRcXFwiIHByb3BlcnR5IGluc3RlYWQ6XFxuQkVGT1JFOlxcbiAgPGlvbi1tZW51Pi4uLjwvaW9uLW1lbnU+XFxuICA8ZGl2IG1haW4+Li4uPC9kaXY+XFxuXFxuQUZURVI6XFxuICA8aW9uLW1lbnUgY29udGVudElkPVxcXCJteS1jb250ZW50XFxcIj48L2lvbi1tZW51PlxcbiAgPGRpdiBpZD1cXFwibXktY29udGVudFxcXCI+Li4uPC9kaXY+XFxuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IHRoaXMuY29udGVudElkICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGVudElkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcGFyZW50ICYmIHBhcmVudC5xdWVyeVNlbGVjdG9yICYmIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdbbWFpbl0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29udGVudCB8fCAhY29udGVudC50YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVxdWlyZXMgY29udGVudCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWVudTogbXVzdCBoYXZlIGEgXCJjb250ZW50XCIgZWxlbWVudCB0byBsaXN0ZW4gZm9yIGRyYWcgZXZlbnRzIG9uLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudEVsID0gY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCBtZW51J3MgY29udGVudCBjbGFzc2VzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlQ2hhbmdlZCh0aGlzLnR5cGUsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZGVDaGFuZ2VkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZWdpc3RlciB0aGlzIG1lbnUgd2l0aCB0aGUgYXBwJ3MgbWVudSBjb250cm9sbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51Q29udHJvbGxlci5fcmVnaXN0ZXIodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbXBvcnQoJy4vaW5kZXgtNjI0ZWVhNTguanMnKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmdlc3R1cmUgPSAoX2Iuc2VudCgpKS5jcmVhdGVHZXN0dXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbDogZG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VzdHVyZU5hbWU6ICdtZW51LXN3aXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXN0dXJlUHJpb3JpdHk6IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuU3RhcnQ6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMuY2FuU3RhcnQoZXYpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uV2lsbFN0YXJ0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5vbldpbGxTdGFydCgpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3RhcnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm9uU3RhcnQoKTsgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdmU6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMub25Nb3ZlKGV2KTsgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVuZDogZnVuY3Rpb24gKGV2KSB7IHJldHVybiBfdGhpcy5vbkVuZChldik7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb21wb25lbnREaWRMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pb25NZW51Q2hhbmdlLmVtaXQoeyBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgb3BlbjogdGhpcy5faXNPcGVuIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ibG9ja2VyLmRlc3Ryb3koKTtcbiAgICAgICAgbWVudUNvbnRyb2xsZXIuX3VucmVnaXN0ZXIodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY29udGVudEVsID0gdGhpcy5iYWNrZHJvcEVsID0gdGhpcy5tZW51SW5uZXJFbCA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9uU3BsaXRQYW5lQ2hhbmdlZCA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICB0aGlzLmlzUGFuZVZpc2libGUgPSBldi5kZXRhaWwuaXNQYW5lKHRoaXMuZWwpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5vbkJhY2tkcm9wQ2xpY2sgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzT3BlbiAmJiB0aGlzLmxhc3RPbkVuZCA8IGV2LnRpbWVTdGFtcCAtIDEwMCkge1xuICAgICAgICAgICAgdmFyIHNob3VsZENsb3NlID0gKGV2LmNvbXBvc2VkUGF0aClcbiAgICAgICAgICAgICAgICA/ICFldi5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyh0aGlzLm1lbnVJbm5lckVsKVxuICAgICAgICAgICAgICAgIDogZmFsc2U7XG4gICAgICAgICAgICBpZiAoc2hvdWxkQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaXMgdGhlIG1lbnUgaXMgb3Blbi5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5faXNPcGVuKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlzIHRoZSBtZW51IGlzIGFjdGl2ZS5cbiAgICAgKlxuICAgICAqIEEgbWVudSBpcyBhY3RpdmUgd2hlbiBpdCBjYW4gYmUgb3BlbmVkIG9yIGNsb3NlZCwgbWVhbmluZyBpdCdzIGVuYWJsZWRcbiAgICAgKiBhbmQgaXQncyBub3QgcGFydCBvZiBhIGBpb24tc3BsaXQtcGFuZWAuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5faXNBY3RpdmUoKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBPcGVucyB0aGUgbWVudS4gSWYgdGhlIG1lbnUgaXMgYWxyZWFkeSBvcGVuIG9yIGl0IGNhbid0IGJlIG9wZW5lZCxcbiAgICAgKiBpdCByZXR1cm5zIGBmYWxzZWAuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChhbmltYXRlZCkge1xuICAgICAgICBpZiAoYW5pbWF0ZWQgPT09IHZvaWQgMCkgeyBhbmltYXRlZCA9IHRydWU7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0T3Blbih0cnVlLCBhbmltYXRlZCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIG1lbnUuIElmIHRoZSBtZW51IGlzIGFscmVhZHkgY2xvc2VkIG9yIGl0IGNhbid0IGJlIGNsb3NlZCxcbiAgICAgKiBpdCByZXR1cm5zIGBmYWxzZWAuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoYW5pbWF0ZWQpIHtcbiAgICAgICAgaWYgKGFuaW1hdGVkID09PSB2b2lkIDApIHsgYW5pbWF0ZWQgPSB0cnVlOyB9XG4gICAgICAgIHJldHVybiB0aGlzLnNldE9wZW4oZmFsc2UsIGFuaW1hdGVkKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIG1lbnUuIElmIHRoZSBtZW51IGlzIGFscmVhZHkgb3BlbiwgaXQgd2lsbCB0cnkgdG8gY2xvc2UsIG90aGVyd2lzZSBpdCB3aWxsIHRyeSB0byBvcGVuIGl0LlxuICAgICAqIElmIHRoZSBvcGVyYXRpb24gY2FuJ3QgYmUgY29tcGxldGVkIHN1Y2Nlc3NmdWxseSwgaXQgcmV0dXJucyBgZmFsc2VgLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uIChhbmltYXRlZCkge1xuICAgICAgICBpZiAoYW5pbWF0ZWQgPT09IHZvaWQgMCkgeyBhbmltYXRlZCA9IHRydWU7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0T3BlbighdGhpcy5faXNPcGVuLCBhbmltYXRlZCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBPcGVucyBvciBjbG9zZXMgdGhlIGJ1dHRvbi5cbiAgICAgKiBJZiB0aGUgb3BlcmF0aW9uIGNhbid0IGJlIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHksIGl0IHJldHVybnMgYGZhbHNlYC5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5zZXRPcGVuID0gZnVuY3Rpb24gKHNob3VsZE9wZW4sIGFuaW1hdGVkKSB7XG4gICAgICAgIGlmIChhbmltYXRlZCA9PT0gdm9pZCAwKSB7IGFuaW1hdGVkID0gdHJ1ZTsgfVxuICAgICAgICByZXR1cm4gbWVudUNvbnRyb2xsZXIuX3NldE9wZW4odGhpcywgc2hvdWxkT3BlbiwgYW5pbWF0ZWQpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuX3NldE9wZW4gPSBmdW5jdGlvbiAoc2hvdWxkT3BlbiwgYW5pbWF0ZWQpIHtcbiAgICAgICAgaWYgKGFuaW1hdGVkID09PSB2b2lkIDApIHsgYW5pbWF0ZWQgPSB0cnVlOyB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBtZW51IGlzIGRpc2FibGVkIG9yIGl0IGlzIGN1cnJlbnRseSBiZWluZyBhbmltYXRlZCwgbGV0J3MgZG8gbm90aGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9pc0FjdGl2ZSgpIHx8IHRoaXMuaXNBbmltYXRpbmcgfHwgc2hvdWxkT3BlbiA9PT0gdGhpcy5faXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVmb3JlQW5pbWF0aW9uKHNob3VsZE9wZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5sb2FkQW5pbWF0aW9uKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnN0YXJ0QW5pbWF0aW9uKHNob3VsZE9wZW4sIGFuaW1hdGVkKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJBbmltYXRpb24oc2hvdWxkT3Blbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdHJ1ZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUubG9hZEFuaW1hdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHdpZHRoLCBfYTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gdGhpcy5tZW51SW5uZXJFbC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aWR0aCA9PT0gdGhpcy53aWR0aCAmJiB0aGlzLmFuaW1hdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVzdHJveSBleGlzdGluZyBhbmltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBtZW51Q29udHJvbGxlci5fY3JlYXRlQW5pbWF0aW9uKHRoaXMudHlwZSwgdGhpcyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IGFuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgX2EuYW5pbWF0aW9uID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25maWcuZ2V0Qm9vbGVhbignYW5pbWF0ZWQnLCB0cnVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLmR1cmF0aW9uKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uZmlsbCgnYm90aCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnN0YXJ0QW5pbWF0aW9uID0gZnVuY3Rpb24gKHNob3VsZE9wZW4sIGFuaW1hdGVkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpc1JldmVyc2VkLCBhbmk7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1JldmVyc2VkID0gIXNob3VsZE9wZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmkgPSB0aGlzLmFuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXJlY3Rpb24oKGlzUmV2ZXJzZWQpID8gJ3JldmVyc2UnIDogJ25vcm1hbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVhc2luZygoaXNSZXZlcnNlZCkgPyAnY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjYsIDEpJyA6ICdjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYW5pbWF0ZWQpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYW5pLnBsYXlBc3luYygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaS5wbGF5U3luYygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5faXNBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5pc1BhbmVWaXNpYmxlO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY2FuU3dpcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN3aXBlR2VzdHVyZSAmJiAhdGhpcy5pc0FuaW1hdGluZyAmJiB0aGlzLl9pc0FjdGl2ZSgpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY2FuU3RhcnQgPSBmdW5jdGlvbiAoZGV0YWlsKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Td2lwZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lzT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAvLyBUT0RPIGVycm9yXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVudUNvbnRyb2xsZXIuX2dldE9wZW5TeW5jKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hlY2tFZGdlU2lkZSh3aW5kb3csIGRldGFpbC5jdXJyZW50WCwgdGhpcy5pc0VuZFNpZGUsIHRoaXMubWF4RWRnZVN0YXJ0KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9uV2lsbFN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmJlZm9yZUFuaW1hdGlvbighdGhpcy5faXNPcGVuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZEFuaW1hdGlvbigpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQW5pbWF0aW5nIHx8ICF0aGlzLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgYXNzZXJ0KGZhbHNlLCAnaXNBbmltYXRpbmcgaGFzIHRvIGJlIHRydWUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGUgY2xvbmVkIGFuaW1hdGlvbiBzaG91bGQgbm90IHVzZSBhbiBlYXNpbmcgY3VydmUgZHVyaW5nIHNlZWtcbiAgICAgICAgdGhpcy5hbmltYXRpb25cbiAgICAgICAgICAgIC5kaXJlY3Rpb24oKHRoaXMuX2lzT3BlbikgPyAncmV2ZXJzZScgOiAnbm9ybWFsJylcbiAgICAgICAgICAgIC5wcm9ncmVzc1N0YXJ0KHRydWUpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25Nb3ZlID0gZnVuY3Rpb24gKGRldGFpbCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBbmltYXRpbmcgfHwgIXRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBhc3NlcnQoZmFsc2UsICdpc0FuaW1hdGluZyBoYXMgdG8gYmUgdHJ1ZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkZWx0YSA9IGNvbXB1dGVEZWx0YShkZXRhaWwuZGVsdGFYLCB0aGlzLl9pc09wZW4sIHRoaXMuaXNFbmRTaWRlKTtcbiAgICAgICAgdmFyIHN0ZXBWYWx1ZSA9IGRlbHRhIC8gdGhpcy53aWR0aDtcbiAgICAgICAgdGhpcy5hbmltYXRpb24ucHJvZ3Jlc3NTdGVwKHN0ZXBWYWx1ZSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5vbkVuZCA9IGZ1bmN0aW9uIChkZXRhaWwpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLmlzQW5pbWF0aW5nIHx8ICF0aGlzLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgYXNzZXJ0KGZhbHNlLCAnaXNBbmltYXRpbmcgaGFzIHRvIGJlIHRydWUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNPcGVuID0gdGhpcy5faXNPcGVuO1xuICAgICAgICB2YXIgaXNFbmRTaWRlID0gdGhpcy5pc0VuZFNpZGU7XG4gICAgICAgIHZhciBkZWx0YSA9IGNvbXB1dGVEZWx0YShkZXRhaWwuZGVsdGFYLCBpc09wZW4sIGlzRW5kU2lkZSk7XG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgIHZhciBzdGVwVmFsdWUgPSBkZWx0YSAvIHdpZHRoO1xuICAgICAgICB2YXIgdmVsb2NpdHkgPSBkZXRhaWwudmVsb2NpdHlYO1xuICAgICAgICB2YXIgeiA9IHdpZHRoIC8gMi4wO1xuICAgICAgICB2YXIgc2hvdWxkQ29tcGxldGVSaWdodCA9IHZlbG9jaXR5ID49IDAgJiYgKHZlbG9jaXR5ID4gMC4yIHx8IGRldGFpbC5kZWx0YVggPiB6KTtcbiAgICAgICAgdmFyIHNob3VsZENvbXBsZXRlTGVmdCA9IHZlbG9jaXR5IDw9IDAgJiYgKHZlbG9jaXR5IDwgLTAuMiB8fCBkZXRhaWwuZGVsdGFYIDwgLXopO1xuICAgICAgICB2YXIgc2hvdWxkQ29tcGxldGUgPSBpc09wZW5cbiAgICAgICAgICAgID8gaXNFbmRTaWRlID8gc2hvdWxkQ29tcGxldGVSaWdodCA6IHNob3VsZENvbXBsZXRlTGVmdFxuICAgICAgICAgICAgOiBpc0VuZFNpZGUgPyBzaG91bGRDb21wbGV0ZUxlZnQgOiBzaG91bGRDb21wbGV0ZVJpZ2h0O1xuICAgICAgICB2YXIgc2hvdWxkT3BlbiA9ICFpc09wZW4gJiYgc2hvdWxkQ29tcGxldGU7XG4gICAgICAgIGlmIChpc09wZW4gJiYgIXNob3VsZENvbXBsZXRlKSB7XG4gICAgICAgICAgICBzaG91bGRPcGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RPbkVuZCA9IGRldGFpbC50aW1lU3RhbXA7XG4gICAgICAgIC8vIEFjY291bnQgZm9yIHJvdW5kaW5nIGVycm9ycyBpbiBKU1xuICAgICAgICB2YXIgbmV3U3RlcFZhbHVlID0gKHNob3VsZENvbXBsZXRlKSA/IDAuMDAxIDogLTAuMDAxO1xuICAgICAgICAvKipcbiAgICAgICAgICogVE9ETzogc3RlcFZhbHVlIGNhbiBzb21ldGltZXMgcmV0dXJuIGEgbmVnYXRpdmVcbiAgICAgICAgICogdmFsdWUsIGJ1dCB5b3UgY2FuJ3QgaGF2ZSBhIG5lZ2F0aXZlIHRpbWUgdmFsdWVcbiAgICAgICAgICogZm9yIHRoZSBjdWJpYyBiZXppZXIgY3VydmUgKGF0IGxlYXN0IHdpdGggd2ViIGFuaW1hdGlvbnMpXG4gICAgICAgICAqIE5vdCBzdXJlIGlmIHRoZSBuZWdhdGl2ZSBzdGVwIHZhbHVlIGlzIGFuIGVycm9yIG9yIG5vdFxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGFkanVzdGVkU3RlcFZhbHVlID0gKHN0ZXBWYWx1ZSA8PSAwKSA/IDAuMDEgOiBzdGVwVmFsdWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbmltYXRpb24gd2lsbCBiZSByZXZlcnNlZCBoZXJlLCBzbyBuZWVkIHRvXG4gICAgICAgICAqIHJldmVyc2UgdGhlIGVhc2luZyBjdXJ2ZSBhcyB3ZWxsXG4gICAgICAgICAqXG4gICAgICAgICAqIEFkZGl0aW9uYWxseSwgd2UgbmVlZCB0byBhY2NvdW50IGZvciB0aGUgdGltZSByZWxhdGl2ZVxuICAgICAgICAgKiB0byB0aGUgbmV3IGVhc2luZyBjdXJ2ZSwgYXMgYHN0ZXBWYWx1ZWAgaXMgZ29pbmcgdG8gYmUgZ2l2ZW5cbiAgICAgICAgICogaW4gdGVybXMgb2YgYSBsaW5lYXIgY3VydmUuXG4gICAgICAgICAqL1xuICAgICAgICBuZXdTdGVwVmFsdWUgKz0gZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24obmV3IFBvaW50KDAsIDApLCBuZXcgUG9pbnQoMC40LCAwKSwgbmV3IFBvaW50KDAuNiwgMSksIG5ldyBQb2ludCgxLCAxKSwgY2xhbXAoMCwgYWRqdXN0ZWRTdGVwVmFsdWUsIDEpKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25cbiAgICAgICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllcigwLjQsIDAuMCwgMC42LCAxKScpXG4gICAgICAgICAgICAub25GaW5pc2goZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYWZ0ZXJBbmltYXRpb24oc2hvdWxkT3Blbik7IH0sIHsgb25lVGltZUNhbGxiYWNrOiB0cnVlIH0pXG4gICAgICAgICAgICAucHJvZ3Jlc3NFbmQoc2hvdWxkQ29tcGxldGUgPyAxIDogMCwgbmV3U3RlcFZhbHVlLCAzMDApO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuYmVmb3JlQW5pbWF0aW9uID0gZnVuY3Rpb24gKHNob3VsZE9wZW4pIHtcbiAgICAgICAgYXNzZXJ0KCF0aGlzLmlzQW5pbWF0aW5nLCAnX2JlZm9yZSgpIHNob3VsZCBub3QgYmUgY2FsbGVkIHdoaWxlIGFuaW1hdGluZycpO1xuICAgICAgICAvLyB0aGlzIHBsYWNlcyB0aGUgbWVudSBpbnRvIHRoZSBjb3JyZWN0IGxvY2F0aW9uIGJlZm9yZSBpdCBhbmltYXRlcyBpblxuICAgICAgICAvLyB0aGlzIGNzcyBjbGFzcyBkb2Vzbid0IGFjdHVhbGx5IGtpY2sgb2ZmIGFueSBhbmltYXRpb25zXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZChTSE9XX01FTlUpO1xuICAgICAgICBpZiAodGhpcy5iYWNrZHJvcEVsKSB7XG4gICAgICAgICAgICB0aGlzLmJhY2tkcm9wRWwuY2xhc3NMaXN0LmFkZChTSE9XX0JBQ0tEUk9QKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJsb2NrZXIuYmxvY2soKTtcbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICAgIGlmIChzaG91bGRPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmlvbldpbGxPcGVuLmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW9uV2lsbENsb3NlLmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuYWZ0ZXJBbmltYXRpb24gPSBmdW5jdGlvbiAoaXNPcGVuKSB7XG4gICAgICAgIGFzc2VydCh0aGlzLmlzQW5pbWF0aW5nLCAnX2JlZm9yZSgpIHNob3VsZCBiZSBjYWxsZWQgd2hpbGUgYW5pbWF0aW5nJyk7XG4gICAgICAgIC8vIGtlZXAgb3BlbmluZy9jbG9zaW5nIHRoZSBtZW51IGRpc2FibGVkIGZvciBhIHRvdWNoIG1vcmUgeWV0XG4gICAgICAgIC8vIG9ubHkgYWRkIGxpc3RlbmVycy9jc3MgaWYgaXQncyBlbmFibGVkIGFuZCBpc09wZW5cbiAgICAgICAgLy8gYW5kIG9ubHkgcmVtb3ZlIGxpc3RlbmVycy9jc3MgaWYgaXQncyBub3Qgb3BlblxuICAgICAgICAvLyBlbWl0IG9wZW5lZC9jbG9zZWQgZXZlbnRzXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGlzT3BlbjtcbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMuX2lzT3Blbikge1xuICAgICAgICAgICAgdGhpcy5ibG9ja2VyLnVuYmxvY2soKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgICAgICAvLyBhZGQgY3NzIGNsYXNzXG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50RWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRFbC5jbGFzc0xpc3QuYWRkKE1FTlVfQ09OVEVOVF9PUEVOKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVtaXQgb3BlbiBldmVudFxuICAgICAgICAgICAgdGhpcy5pb25EaWRPcGVuLmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBjc3MgY2xhc3Nlc1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKFNIT1dfTUVOVSk7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50RWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRFbC5jbGFzc0xpc3QucmVtb3ZlKE1FTlVfQ09OVEVOVF9PUEVOKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmJhY2tkcm9wRWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhY2tkcm9wRWwuY2xhc3NMaXN0LnJlbW92ZShTSE9XX0JBQ0tEUk9QKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVtaXQgY2xvc2UgZXZlbnRcbiAgICAgICAgICAgIHRoaXMuaW9uRGlkQ2xvc2UuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS51cGRhdGVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlzQWN0aXZlID0gdGhpcy5faXNBY3RpdmUoKTtcbiAgICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlLnNldERpc2FibGVkKCFpc0FjdGl2ZSB8fCAhdGhpcy5zd2lwZUdlc3R1cmUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsb3NlIG1lbnUgaW1tZWRpYXRlbHlcbiAgICAgICAgaWYgKCFpc0FjdGl2ZSAmJiB0aGlzLl9pc09wZW4pIHtcbiAgICAgICAgICAgIC8vIGNsb3NlIGlmIHRoaXMgbWVudSBpcyBvcGVuLCBhbmQgc2hvdWxkIG5vdCBiZSBlbmFibGVkXG4gICAgICAgICAgICB0aGlzLmZvcmNlQ2xvc2luZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgbWVudUNvbnRyb2xsZXIuX3NldEFjdGl2ZU1lbnUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgYXNzZXJ0KCF0aGlzLmlzQW5pbWF0aW5nLCAnY2FuIG5vdCBiZSBhbmltYXRpbmcnKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmZvcmNlQ2xvc2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYXNzZXJ0KHRoaXMuX2lzT3BlbiwgJ21lbnUgY2Fubm90IGJlIGNsb3NlZCcpO1xuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgdmFyIGFuaSA9IHRoaXMuYW5pbWF0aW9uLmRpcmVjdGlvbigncmV2ZXJzZScpO1xuICAgICAgICBhbmkucGxheVN5bmMoKTtcbiAgICAgICAgdGhpcy5hZnRlckFuaW1hdGlvbihmYWxzZSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9iID0gdGhpcywgaXNFbmRTaWRlID0gX2IuaXNFbmRTaWRlLCB0eXBlID0gX2IudHlwZSwgZGlzYWJsZWQgPSBfYi5kaXNhYmxlZCwgbW9kZSA9IF9iLm1vZGUsIGlzUGFuZVZpc2libGUgPSBfYi5pc1BhbmVWaXNpYmxlO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyByb2xlOiBcIm5hdmlnYXRpb25cIiwgY2xhc3M6IChfYSA9IHt9LFxuICAgICAgICAgICAgICAgIF9hW21vZGVdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYVtcIm1lbnUtdHlwZS1cIiArIHR5cGVdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYVsnbWVudS1lbmFibGVkJ10gPSAhZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgX2FbJ21lbnUtc2lkZS1lbmQnXSA9IGlzRW5kU2lkZSxcbiAgICAgICAgICAgICAgICBfYVsnbWVudS1zaWRlLXN0YXJ0J10gPSAhaXNFbmRTaWRlLFxuICAgICAgICAgICAgICAgIF9hWydtZW51LXBhbmUtdmlzaWJsZSddID0gaXNQYW5lVmlzaWJsZSxcbiAgICAgICAgICAgICAgICBfYSkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcIm1lbnUtaW5uZXJcIiwgcmVmOiBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIF90aGlzLm1lbnVJbm5lckVsID0gZWw7IH0gfSwgaChcInNsb3RcIiwgbnVsbCkpLCBoKFwiaW9uLWJhY2tkcm9wXCIsIHsgcmVmOiBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIF90aGlzLmJhY2tkcm9wRWwgPSBlbDsgfSwgY2xhc3M6IFwibWVudS1iYWNrZHJvcFwiLCB0YXBwYWJsZTogZmFsc2UsIHN0b3BQcm9wYWdhdGlvbjogZmFsc2UgfSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEsIFwid2F0Y2hlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFtcInR5cGVDaGFuZ2VkXCJdLFxuICAgICAgICAgICAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdLFxuICAgICAgICAgICAgICAgIFwic2lkZVwiOiBbXCJzaWRlQ2hhbmdlZFwiXSxcbiAgICAgICAgICAgICAgICBcInN3aXBlR2VzdHVyZVwiOiBbXCJzd2lwZUdlc3R1cmVDaGFuZ2VkXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCI6aG9zdHstLXdpZHRoOjMwNHB4Oy0tbWluLXdpZHRoOmF1dG87LS1tYXgtd2lkdGg6YXV0bzstLWhlaWdodDoxMDAlOy0tbWluLWhlaWdodDphdXRvOy0tbWF4LWhlaWdodDphdXRvOy0tYmFja2dyb3VuZDp2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKTtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Om5vbmU7cG9zaXRpb246YWJzb2x1dGU7Y29udGFpbjpzdHJpY3R9Omhvc3QoLnNob3ctbWVudSl7ZGlzcGxheTpibG9ja30ubWVudS1pbm5lcntsZWZ0OjA7cmlnaHQ6YXV0bzt0b3A6MDtib3R0b206MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtOTk5OXB4LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC05OTk5cHgsMCwwKTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbnRhaW46c3RyaWN0fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAubWVudS1pbm5lcixbZGlyPXJ0bF0gLm1lbnUtaW5uZXJ7bGVmdDp1bnNldDtyaWdodDp1bnNldDtsZWZ0OmF1dG87cmlnaHQ6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZChjYWxjKC0xICogLTk5OTlweCksMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoY2FsYygtMSAqIC05OTk5cHgpLDAsMCl9Omhvc3QoLm1lbnUtc2lkZS1zdGFydCkgLm1lbnUtaW5uZXJ7LS1pb24tc2FmZS1hcmVhLXJpZ2h0OjBweDtyaWdodDphdXRvO2xlZnQ6MH06aG9zdCgubWVudS1zaWRlLWVuZCkgLm1lbnUtaW5uZXJ7LS1pb24tc2FmZS1hcmVhLWxlZnQ6MHB4O3JpZ2h0OjA7bGVmdDphdXRvfWlvbi1iYWNrZHJvcHtkaXNwbGF5Om5vbmU7b3BhY2l0eTouMDE7ei1pbmRleDotMX1cXEBtZWRpYSAobWF4LXdpZHRoOjM0MHB4KXsubWVudS1pbm5lcnstLXdpZHRoOjI2NHB4fX06aG9zdCgubWVudS10eXBlLXJldmVhbCl7ei1pbmRleDowfTpob3N0KC5tZW51LXR5cGUtcmV2ZWFsLnNob3ctbWVudSkgLm1lbnUtaW5uZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX06aG9zdCgubWVudS10eXBlLW92ZXJsYXkpe3otaW5kZXg6MTAwMH06aG9zdCgubWVudS10eXBlLW92ZXJsYXkpIC5zaG93LWJhY2tkcm9we2Rpc3BsYXk6YmxvY2s7Y3Vyc29yOnBvaW50ZXJ9Omhvc3QoLm1lbnUtcGFuZS12aXNpYmxlKSAubWVudS1pbm5lcntsZWZ0OjA7cmlnaHQ6MDt3aWR0aDphdXRvOy13ZWJraXQtdHJhbnNmb3JtOm5vbmUhaW1wb3J0YW50O3RyYW5zZm9ybTpub25lIWltcG9ydGFudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZSFpbXBvcnRhbnQ7Ym94LXNoYWRvdzpub25lIWltcG9ydGFudH06aG9zdCgubWVudS1wYW5lLXZpc2libGUpIGlvbi1iYWNrZHJvcHtkaXNwbGF5OmhpZGRlbiFpbXBvcnRhbnR9Omhvc3QoLm1lbnUtdHlwZS1vdmVybGF5KSAubWVudS1pbm5lcnstd2Via2l0LWJveC1zaGFkb3c6MCAycHggMjJweCAwIHJnYmEoMCwwLDAsLjA5KSw0cHggMCAxNnB4IDAgcmdiYSgwLDAsMCwuMTgpO2JveC1zaGFkb3c6MCAycHggMjJweCAwIHJnYmEoMCwwLDAsLjA5KSw0cHggMCAxNnB4IDAgcmdiYSgwLDAsMCwuMTgpfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NfMTtcbn0oKSk7XG52YXIgY29tcHV0ZURlbHRhID0gZnVuY3Rpb24gKGRlbHRhWCwgaXNPcGVuLCBpc0VuZFNpZGUpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgaXNPcGVuICE9PSBpc0VuZFNpZGUgPyAtZGVsdGFYIDogZGVsdGFYKTtcbn07XG52YXIgY2hlY2tFZGdlU2lkZSA9IGZ1bmN0aW9uICh3aW4sIHBvc1gsIGlzRW5kU2lkZSwgbWF4RWRnZVN0YXJ0KSB7XG4gICAgaWYgKGlzRW5kU2lkZSkge1xuICAgICAgICByZXR1cm4gcG9zWCA+PSB3aW4uaW5uZXJXaWR0aCAtIG1heEVkZ2VTdGFydDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBwb3NYIDw9IG1heEVkZ2VTdGFydDtcbiAgICB9XG59O1xudmFyIFNIT1dfTUVOVSA9ICdzaG93LW1lbnUnO1xudmFyIFNIT1dfQkFDS0RST1AgPSAnc2hvdy1iYWNrZHJvcCc7XG52YXIgTUVOVV9DT05URU5UX09QRU4gPSAnbWVudS1jb250ZW50LW9wZW4nO1xuLy8gR2l2ZW4gYSBtZW51LCByZXR1cm4gd2hldGhlciBvciBub3QgdGhlIG1lbnUgdG9nZ2xlIHNob3VsZCBiZSB2aXNpYmxlXG52YXIgdXBkYXRlVmlzaWJpbGl0eSA9IGZ1bmN0aW9uIChtZW51KSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZW51RWwsIF9hO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBtZW51Q29udHJvbGxlci5nZXQobWVudSldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIG1lbnVFbCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBfYSA9IG1lbnVFbDtcbiAgICAgICAgICAgICAgICBpZiAoIV9hKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBtZW51RWwuaXNBY3RpdmUoKV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgX2EgPSAoX2Iuc2VudCgpKTtcbiAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDM7XG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovLCAhIShfYSldO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbnZhciBNZW51QnV0dG9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzIoaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIG1lbnUgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQXV0b21hdGljYWxseSBoaWRlcyB0aGUgbWVudSBidXR0b24gd2hlbiB0aGUgY29ycmVzcG9uZGluZyBtZW51IGlzIG5vdCBhY3RpdmVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYXV0b0hpZGUgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHR5cGUgb2YgdGhlIGJ1dHRvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHlwZSA9ICdidXR0b24nO1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG1lbnVDb250cm9sbGVyLnRvZ2dsZSh0aGlzLm1lbnUpXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgfTtcbiAgICB9XG4gICAgY2xhc3NfMi5wcm90b3R5cGUuY29tcG9uZW50RGlkTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5Q2hhbmdlZCgpO1xuICAgIH07XG4gICAgY2xhc3NfMi5wcm90b3R5cGUudmlzaWJpbGl0eUNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHVwZGF0ZVZpc2liaWxpdHkodGhpcy5tZW51KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnZpc2libGUgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBfYiA9IHRoaXMsIGNvbG9yID0gX2IuY29sb3IsIGRpc2FibGVkID0gX2IuZGlzYWJsZWQ7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgdmFyIG1lbnVJY29uID0gY29uZmlnLmdldCgnbWVudUljb24nLCAnbWVudScpO1xuICAgICAgICB2YXIgaGlkZGVuID0gdGhpcy5hdXRvSGlkZSAmJiAhdGhpcy52aXNpYmxlO1xuICAgICAgICB2YXIgYXR0cnMgPSB7XG4gICAgICAgICAgICB0eXBlOiB0aGlzLnR5cGVcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5vbkNsaWNrLCBcImFyaWEtZGlzYWJsZWRcIjogZGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsLCBcImFyaWEtaGlkZGVuXCI6IGhpZGRlbiA/ICd0cnVlJyA6IG51bGwsIGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oKF9hID0ge30sIF9hW21vZGVdID0gdHJ1ZSwgX2EpLCBjcmVhdGVDb2xvckNsYXNzZXMoY29sb3IpKSwgeyAnYnV0dG9uJzogdHJ1ZSwgJ21lbnUtYnV0dG9uLWhpZGRlbic6IGhpZGRlbiwgJ21lbnUtYnV0dG9uLWRpc2FibGVkJzogZGlzYWJsZWQsICdpb24tYWN0aXZhdGFibGUnOiB0cnVlLCAnaW9uLWZvY3VzYWJsZSc6IHRydWUgfSkgfSwgaChcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHt9LCBhdHRycywgeyBkaXNhYmxlZDogZGlzYWJsZWQsIGNsYXNzOiBcImJ1dHRvbi1uYXRpdmVcIiB9KSwgaChcInNsb3RcIiwgbnVsbCwgaChcImlvbi1pY29uXCIsIHsgaWNvbjogbWVudUljb24sIG1vZGU6IG1vZGUsIGxhenk6IGZhbHNlIH0pKSwgbW9kZSA9PT0gJ21kJyAmJiBoKFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwgeyB0eXBlOiBcInVuYm91bmRlZFwiIH0pKSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzIsIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiOmhvc3R7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tY29sb3ItZm9jdXNlZDp2YXIoLS1jb2xvcik7LS1ib3JkZXItcmFkaXVzOmluaXRpYWw7LS1wYWRkaW5nLXRvcDowOy0tcGFkZGluZy1ib3R0b206MDtjb2xvcjp2YXIoLS1jb2xvcik7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt0ZXh0LXRyYW5zZm9ybTpub25lO3doaXRlLXNwYWNlOm5vd3JhcDstd2Via2l0LWZvbnQta2VybmluZzpub25lO2ZvbnQta2VybmluZzpub25lfS5idXR0b24tbmF0aXZle2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsZXR0ZXItc3BhY2luZzppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3RleHQtYWxpZ246aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O2NvbG9yOmluaGVyaXQ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLXJpZ2h0OnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDp2YXIoLS1wYWRkaW5nLXRvcCk7cGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy1ib3R0b20pOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LWZsb3c6cm93IG5vd3JhcDtmbGV4LWZsb3c6cm93IG5vd3JhcDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyOjA7b3V0bGluZTpub25lO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7bGluZS1oZWlnaHQ6MTtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDowOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmJ1dHRvbi1uYXRpdmV7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCl9fWlvbi1pY29ue21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLm1lbnUtYnV0dG9uLWhpZGRlbil7ZGlzcGxheTpub25lfTpob3N0KC5tZW51LWJ1dHRvbi1kaXNhYmxlZCl7Y3Vyc29yOmRlZmF1bHQ7b3BhY2l0eTouNTtwb2ludGVyLWV2ZW50czpub25lfVxcQG1lZGlhIChhbnktaG92ZXI6aG92ZXIpezpob3N0KDpob3ZlcikgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtjb2xvcjp2YXIoLS1jb2xvci1ob3Zlcil9fTpob3N0KC5pb24tZm9jdXNlZCkgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWZvY3VzZWQpO2NvbG9yOnZhcigtLWNvbG9yLWZvY3VzZWQpfTpob3N0KC5pb24tY29sb3IpIC5idXR0b24tbmF0aXZle2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdC1jb250ZXh0KGlvbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKSl7Y29sb3I6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsdmFyKC0tY29sb3IpKX06aG9zdHstLWJhY2tncm91bmQtZm9jdXNlZDpyZ2JhKDY2LDY2LDY2LDAuMjQpOy0tYmFja2dyb3VuZC1ob3ZlcjpyZ2JhKDY2LDY2LDY2LDAuMDgpOy0tYm9yZGVyLXJhZGl1czo1MCU7LS1jb2xvcjppbml0aWFsOy0tcGFkZGluZy1zdGFydDo4cHg7LS1wYWRkaW5nLWVuZDo4cHg7d2lkdGg6NDhweDtoZWlnaHQ6NDhweDtmb250LXNpemU6MjRweH1cXEBtZWRpYSAoYW55LWhvdmVyOmhvdmVyKXs6aG9zdCguaW9uLWNvbG9yOmhvdmVyKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwuMDgpfX06aG9zdCguaW9uLWNvbG9yLmlvbi1mb2N1c2VkKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwuMjQpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzI7XG59KCkpO1xudmFyIE1lbnVDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzMoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPcGVuIHRoZSBtZW51LiBJZiBhIG1lbnUgaXMgbm90IHByb3ZpZGVkIHRoZW4gaXQgd2lsbCBvcGVuIHRoZSBmaXJzdFxuICAgICAqIG1lbnUgZm91bmQuIElmIHRoZSBzcGVjaWZpZWQgbWVudSBpcyBgc3RhcnRgIG9yIGBlbmRgLCB0aGVuIGl0IHdpbGwgb3BlblxuICAgICAqIHRoZSBlbmFibGVkIG1lbnUgb24gdGhhdCBzaWRlLiBPdGhlcndpc2UsIGl0IHdpbGwgdHJ5IHRvIGZpbmQgdGhlIG1lbnVcbiAgICAgKiB1c2luZyB0aGUgbWVudSdzIGBpZGAgcHJvcGVydHkuIElmIGEgbWVudSBpcyBub3QgZm91bmQgdGhlbiBpdCB3aWxsXG4gICAgICogcmV0dXJuIGBmYWxzZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWVudSBUaGUgbWVudUlkIG9yIHNpZGUgb2YgdGhlIG1lbnUgdG8gb3Blbi5cbiAgICAgKi9cbiAgICBjbGFzc18zLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKG1lbnUpIHtcbiAgICAgICAgcmV0dXJuIG1lbnVDb250cm9sbGVyLm9wZW4obWVudSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbG9zZSB0aGUgbWVudS4gSWYgYSBtZW51IGlzIHNwZWNpZmllZCwgaXQgd2lsbCBjbG9zZSB0aGF0IG1lbnUuXG4gICAgICogSWYgbm8gbWVudSBpcyBzcGVjaWZpZWQsIHRoZW4gaXQgd2lsbCBjbG9zZSBhbnkgbWVudSB0aGF0IGlzIG9wZW4uXG4gICAgICogSWYgaXQgZG9lcyBub3QgZmluZCBhbnkgb3BlbiBtZW51cywgaXQgd2lsbCByZXR1cm4gYGZhbHNlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtZW51IFRoZSBtZW51SWQgb3Igc2lkZSBvZiB0aGUgbWVudSB0byBjbG9zZS5cbiAgICAgKi9cbiAgICBjbGFzc18zLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChtZW51KSB7XG4gICAgICAgIHJldHVybiBtZW51Q29udHJvbGxlci5jbG9zZShtZW51KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRvZ2dsZSB0aGUgbWVudSBvcGVuIG9yIGNsb3NlZC4gSWYgdGhlIG1lbnUgaXMgYWxyZWFkeSBvcGVuLCBpdCB3aWxsIHRyeSB0b1xuICAgICAqIGNsb3NlIHRoZSBtZW51LCBvdGhlcndpc2UgaXQgd2lsbCB0cnkgdG8gb3BlbiBpdC4gUmV0dXJucyBgZmFsc2VgIGlmXG4gICAgICogYSBtZW51IGlzIG5vdCBmb3VuZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtZW51IFRoZSBtZW51SWQgb3Igc2lkZSBvZiB0aGUgbWVudSB0byB0b2dnbGUuXG4gICAgICovXG4gICAgY2xhc3NfMy5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKG1lbnUpIHtcbiAgICAgICAgcmV0dXJuIG1lbnVDb250cm9sbGVyLnRvZ2dsZShtZW51KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEVuYWJsZSBvciBkaXNhYmxlIGEgbWVudS4gRGlzYWJsaW5nIGEgbWVudSB3aWxsIG5vdCBhbGxvdyBnZXN0dXJlc1xuICAgICAqIGZvciB0aGF0IG1lbnUgb3IgYW55IGNhbGxzIHRvIG9wZW4gaXQuIFRoaXMgaXMgdXNlZnVsIHdoZW4gdGhlcmUgYXJlXG4gICAgICogbXVsdGlwbGUgbWVudXMgb24gdGhlIHNhbWUgc2lkZSBhbmQgb25seSBvbmUgb2YgdGhlbSBzaG91bGQgYmUgYWxsb3dlZFxuICAgICAqIHRvIG9wZW4uIEVuYWJsaW5nIGEgbWVudSB3aWxsIGF1dG9tYXRpY2FsbHkgZGlzYWJsZSBhbGwgb3RoZXIgbWVudXNcbiAgICAgKiBvbiB0aGF0IHNpZGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZW5hYmxlIElmIGB0cnVlYCwgdGhlIG1lbnUgc2hvdWxkIGJlIGVuYWJsZWQuXG4gICAgICogQHBhcmFtIG1lbnUgVGhlIG1lbnVJZCBvciBzaWRlIG9mIHRoZSBtZW51IHRvIGVuYWJsZSBvciBkaXNhYmxlLlxuICAgICAqL1xuICAgIGNsYXNzXzMucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uIChlbmFibGUsIG1lbnUpIHtcbiAgICAgICAgcmV0dXJuIG1lbnVDb250cm9sbGVyLmVuYWJsZShlbmFibGUsIG1lbnUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRW5hYmxlIG9yIGRpc2FibGUgdGhlIGFiaWxpdHkgdG8gc3dpcGUgb3BlbiB0aGUgbWVudS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbmFibGUgSWYgYHRydWVgLCB0aGUgbWVudSBzd2lwZSBnZXN0dXJlIHNob3VsZCBiZSBlbmFibGVkLlxuICAgICAqIEBwYXJhbSBtZW51IFRoZSBtZW51SWQgb3Igc2lkZSBvZiB0aGUgbWVudSB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgc3dpcGUgZ2VzdHVyZSBvbi5cbiAgICAgKi9cbiAgICBjbGFzc18zLnByb3RvdHlwZS5zd2lwZUdlc3R1cmUgPSBmdW5jdGlvbiAoZW5hYmxlLCBtZW51KSB7XG4gICAgICAgIHJldHVybiBtZW51Q29udHJvbGxlci5zd2lwZUdlc3R1cmUoZW5hYmxlLCBtZW51KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB3aGV0aGVyIG9yIG5vdCB0aGUgbWVudSBpcyBvcGVuLiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgc3BlY2lmaWVkXG4gICAgICogbWVudSBpcyBvcGVuLiBJZiBhIG1lbnUgaXMgbm90IHNwZWNpZmllZCwgaXQgd2lsbCByZXR1cm4gYHRydWVgIGlmXG4gICAgICogYW55IG1lbnUgaXMgY3VycmVudGx5IG9wZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWVudSBUaGUgbWVudUlkIG9yIHNpZGUgb2YgdGhlIG1lbnUgdGhhdCBpcyBiZWluZyBjaGVja2VkLlxuICAgICAqL1xuICAgIGNsYXNzXzMucHJvdG90eXBlLmlzT3BlbiA9IGZ1bmN0aW9uIChtZW51KSB7XG4gICAgICAgIHJldHVybiBtZW51Q29udHJvbGxlci5pc09wZW4obWVudSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgd2hldGhlciBvciBub3QgdGhlIG1lbnUgaXMgZW5hYmxlZC4gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlXG4gICAgICogc3BlY2lmaWVkIG1lbnUgaXMgZW5hYmxlZC4gUmV0dXJucyBgZmFsc2VgIGlmIGEgbWVudSBpcyBkaXNhYmxlZFxuICAgICAqIG9yIG5vdCBmb3VuZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtZW51IFRoZSBtZW51SWQgb3Igc2lkZSBvZiB0aGUgbWVudSB0aGF0IGlzIGJlaW5nIGNoZWNrZWQuXG4gICAgICovXG4gICAgY2xhc3NfMy5wcm90b3R5cGUuaXNFbmFibGVkID0gZnVuY3Rpb24gKG1lbnUpIHtcbiAgICAgICAgcmV0dXJuIG1lbnVDb250cm9sbGVyLmlzRW5hYmxlZChtZW51KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBhIG1lbnUgaW5zdGFuY2UuIElmIGEgbWVudSBpcyBub3QgcHJvdmlkZWQgdGhlbiBpdCB3aWxsIHJldHVybiB0aGUgZmlyc3RcbiAgICAgKiBtZW51IGZvdW5kLiBJZiB0aGUgc3BlY2lmaWVkIG1lbnUgaXMgYHN0YXJ0YCBvciBgZW5kYCwgdGhlbiBpdCB3aWxsIHJldHVybiB0aGVcbiAgICAgKiBlbmFibGVkIG1lbnUgb24gdGhhdCBzaWRlLiBPdGhlcndpc2UsIGl0IHdpbGwgdHJ5IHRvIGZpbmQgdGhlIG1lbnUgdXNpbmcgdGhlIG1lbnUnc1xuICAgICAqIGBpZGAgcHJvcGVydHkuIElmIGEgbWVudSBpcyBub3QgZm91bmQgdGhlbiBpdCB3aWxsIHJldHVybiBgbnVsbGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWVudSBUaGUgbWVudUlkIG9yIHNpZGUgb2YgdGhlIG1lbnUuXG4gICAgICovXG4gICAgY2xhc3NfMy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG1lbnUpIHtcbiAgICAgICAgcmV0dXJuIG1lbnVDb250cm9sbGVyLmdldChtZW51KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaW5zdGFuY2Ugb2YgdGhlIG9wZW5lZCBtZW51LiBSZXR1cm5zIGBudWxsYCBpZiBhIG1lbnUgaXMgbm90IGZvdW5kLlxuICAgICAqL1xuICAgIGNsYXNzXzMucHJvdG90eXBlLmdldE9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBtZW51Q29udHJvbGxlci5nZXRPcGVuKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIG1lbnUgaW5zdGFuY2VzLlxuICAgICAqL1xuICAgIGNsYXNzXzMucHJvdG90eXBlLmdldE1lbnVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbWVudUNvbnRyb2xsZXIuZ2V0TWVudXMoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB3aGV0aGVyIG9yIG5vdCBhIG1lbnUgaXMgYW5pbWF0aW5nLiBSZXR1cm5zIGB0cnVlYCBpZiBhbnlcbiAgICAgKiBtZW51IGlzIGN1cnJlbnRseSBhbmltYXRpbmcuXG4gICAgICovXG4gICAgY2xhc3NfMy5wcm90b3R5cGUuaXNBbmltYXRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBtZW51Q29udHJvbGxlci5pc0FuaW1hdGluZygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgbmV3IGFuaW1hdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHdpdGggYW55IGBpb24tbWVudWAgYnlcbiAgICAgKiBwYXNzaW5nIHRoZSBuYW1lIG9mIHRoZSBhbmltYXRpb24gaW4gaXRzIGB0eXBlYCBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBhbmltYXRpb24gdG8gcmVnaXN0ZXIuXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBUaGUgYW5pbWF0aW9uIGZ1bmN0aW9uIHRvIHJlZ2lzdGVyLlxuICAgICAqL1xuICAgIGNsYXNzXzMucHJvdG90eXBlLnJlZ2lzdGVyQW5pbWF0aW9uID0gZnVuY3Rpb24gKG5hbWUsIGFuaW1hdGlvbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG1lbnVDb250cm9sbGVyLnJlZ2lzdGVyQW5pbWF0aW9uKG5hbWUsIGFuaW1hdGlvbildO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIGNsYXNzXzM7XG59KCkpO1xudmFyIE1lbnVUb2dnbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfNChob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQXV0b21hdGljYWxseSBoaWRlcyB0aGUgY29udGVudCB3aGVuIHRoZSBjb3JyZXNwb25kaW5nIG1lbnUgaXMgbm90IGFjdGl2ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQnkgZGVmYXVsdCwgaXQncyBgdHJ1ZWAuIENoYW5nZSBpdCB0byBgZmFsc2VgIGluIG9yZGVyIHRvXG4gICAgICAgICAqIGtlZXAgYGlvbi1tZW51LXRvZ2dsZWAgYWx3YXlzIHZpc2libGUgcmVnYXJkbGVzcyB0aGUgc3RhdGUgb2YgdGhlIG1lbnUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmF1dG9IaWRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG1lbnVDb250cm9sbGVyLnRvZ2dsZShfdGhpcy5tZW51KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xhc3NfNC5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eUNoYW5nZWQoKTtcbiAgICB9O1xuICAgIGNsYXNzXzQucHJvdG90eXBlLnZpc2liaWxpdHlDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB1cGRhdGVWaXNpYmlsaXR5KHRoaXMubWVudSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS52aXNpYmxlID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHZhciBoaWRkZW4gPSB0aGlzLmF1dG9IaWRlICYmICF0aGlzLnZpc2libGU7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMub25DbGljaywgXCJhcmlhLWhpZGRlblwiOiBoaWRkZW4gPyAndHJ1ZScgOiBudWxsLCBjbGFzczogKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hWydtZW51LXRvZ2dsZS1oaWRkZW4nXSA9IGhpZGRlbixcbiAgICAgICAgICAgICAgICBfYSkgfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc180LCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIjpob3N0KC5tZW51LXRvZ2dsZS1oaWRkZW4pe2Rpc3BsYXk6bm9uZX1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzQ7XG59KCkpO1xuZXhwb3J0IHsgTWVudSBhcyBpb25fbWVudSwgTWVudUJ1dHRvbiBhcyBpb25fbWVudV9idXR0b24sIE1lbnVDb250cm9sbGVyIGFzIGlvbl9tZW51X2NvbnRyb2xsZXIsIE1lbnVUb2dnbGUgYXMgaW9uX21lbnVfdG9nZ2xlIH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG52YXIgaG9zdENvbnRleHQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGVsKSB7XG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xufTtcbi8qKlxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxuICovXG52YXIgY3JlYXRlQ29sb3JDbGFzc2VzID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IChfYSA9IHtcbiAgICAgICAgICAgICdpb24tY29sb3InOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIF9hW1wiaW9uLWNvbG9yLVwiICsgY29sb3JdID0gdHJ1ZSxcbiAgICAgICAgX2EpIDogdW5kZWZpbmVkO1xufTtcbnZhciBnZXRDbGFzc0xpc3QgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgIHJldHVybiBhcnJheVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPSBudWxsOyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50cmltKCk7IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSAnJzsgfSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbn07XG52YXIgZ2V0Q2xhc3NNYXAgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gbWFwW2NdID0gdHJ1ZTsgfSk7XG4gICAgcmV0dXJuIG1hcDtcbn07XG52YXIgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XG52YXIgb3BlblVSTCA9IGZ1bmN0aW9uICh1cmwsIGV2LCBkaXJlY3Rpb24pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvdXRlcjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgICAgICAgaWYgKHJvdXRlcikge1xuICAgICAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbildO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=