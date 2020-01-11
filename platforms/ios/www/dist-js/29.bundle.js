(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

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

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-nav_5.entry.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-nav_5.entry.js ***!
  \******************************************************************/
/*! exports provided: ion_nav, ion_nav_link, ion_nav_pop, ion_nav_push, ion_nav_set_root */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav_link", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav_pop", function() { return NavPop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav_push", function() { return NavPush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav_set_root", function() { return NavSetRoot; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "./node_modules/@ionic/core/dist/esm-es5/constants-3c3e1099.js");
/* harmony import */ var _framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./framework-delegate-c2e2e1f4.js */ "./node_modules/@ionic/core/dist/esm-es5/framework-delegate-c2e2e1f4.js");
/* harmony import */ var _index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-4d91f03a.js */ "./node_modules/@ionic/core/dist/esm-es5/index-4d91f03a.js");
/* harmony import */ var _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cubic-bezier-2812fda3.js */ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js");








var VIEW_STATE_NEW = 1;
var VIEW_STATE_ATTACHED = 2;
var VIEW_STATE_DESTROYED = 3;
var ViewController = /** @class */ (function () {
    function ViewController(component, params) {
        this.component = component;
        this.params = params;
        this.state = VIEW_STATE_NEW;
    }
    ViewController.prototype.init = function (container) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var component, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.state = VIEW_STATE_ATTACHED;
                        if (!!this.element) return [3 /*break*/, 2];
                        component = this.component;
                        _a = this;
                        return [4 /*yield*/, Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_5__["a"])(this.delegate, container, component, ['ion-page', 'ion-page-invisible'], this.params)];
                    case 1:
                        _a.element = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * DOM WRITE
     */
    ViewController.prototype._destroy = function () {
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["b"])(this.state !== VIEW_STATE_DESTROYED, 'view state must be ATTACHED');
        var element = this.element;
        if (element) {
            if (this.delegate) {
                this.delegate.removeViewFromDom(element.parentElement, element);
            }
            else {
                element.remove();
            }
        }
        this.nav = undefined;
        this.state = VIEW_STATE_DESTROYED;
    };
    return ViewController;
}());
var matches = function (view, id, params) {
    if (!view) {
        return false;
    }
    if (view.component !== id) {
        return false;
    }
    var currentParams = view.params;
    if (currentParams === params) {
        return true;
    }
    if (!currentParams && !params) {
        return true;
    }
    if (!currentParams || !params) {
        return false;
    }
    var keysA = Object.keys(currentParams);
    var keysB = Object.keys(params);
    if (keysA.length !== keysB.length) {
        return false;
    }
    // Test for A's keys different from B.
    for (var _i = 0, keysA_1 = keysA; _i < keysA_1.length; _i++) {
        var key = keysA_1[_i];
        if (currentParams[key] !== params[key]) {
            return false;
        }
    }
    return true;
};
var convertToView = function (page, params) {
    if (!page) {
        return null;
    }
    if (page instanceof ViewController) {
        return page;
    }
    return new ViewController(page, params);
};
var convertToViews = function (pages) {
    return pages.map(function (page) {
        if (page instanceof ViewController) {
            return page;
        }
        if ('page' in page) {
            return convertToView(page.page, page.params);
        }
        return convertToView(page, undefined);
    }).filter(function (v) { return v !== null; });
};
var Nav = /** @class */ (function () {
    function class_1(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.transInstr = [];
        this.animationEnabled = true;
        this.useRouter = false;
        this.isTransitioning = false;
        this.destroyed = false;
        this.views = [];
        /**
         * If `true`, the nav should animate the transition of components.
         */
        this.animated = true;
        this.ionNavWillLoad = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionNavWillLoad", 7);
        this.ionNavWillChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionNavWillChange", 3);
        this.ionNavDidChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionNavDidChange", 3);
    }
    class_1.prototype.swipeGestureChanged = function () {
        if (this.gesture) {
            this.gesture.setDisabled(this.swipeGesture !== true);
        }
    };
    class_1.prototype.rootChanged = function () {
        if (this.root !== undefined) {
            if (!this.useRouter) {
                this.setRoot(this.root, this.rootParams);
            }
        }
    };
    class_1.prototype.componentWillLoad = function () {
        this.useRouter =
            !!document.querySelector('ion-router') &&
                !this.el.closest('[no-router]');
        if (this.swipeGesture === undefined) {
            var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
            this.swipeGesture = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"].getBoolean('swipeBackEnabled', mode === 'ios');
        }
        this.ionNavWillLoad.emit();
    };
    class_1.prototype.componentDidLoad = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.rootChanged();
                        _a = this;
                        return [4 /*yield*/, __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./swipe-back-35ad8e37.js */ "./node_modules/@ionic/core/dist/esm-es5/swipe-back-35ad8e37.js"))];
                    case 1:
                        _a.gesture = (_b.sent()).createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this));
                        this.swipeGestureChanged();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.componentDidUnload = function () {
        for (var _i = 0, _a = this.views; _i < _a.length; _i++) {
            var view = _a[_i];
            Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_6__["l"])(view.element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__["d"]);
            view._destroy();
        }
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
        // release swipe back gesture and transition
        this.transInstr.length = this.views.length = 0;
        this.destroyed = true;
    };
    /**
     * Push a new component onto the current navigation stack. Pass any additional
     * information along as an object. This additional information is accessible
     * through NavParams.
     *
     * @param component The component to push onto the navigation stack.
     * @param componentProps Any properties of the component.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.push = function (component, componentProps, opts, done) {
        return this.queueTrns({
            insertStart: -1,
            insertViews: [{ page: component, params: componentProps }],
            opts: opts
        }, done);
    };
    /**
     * Inserts a component into the navigation stack at the specified index.
     * This is useful to add a component at any point in the navigation stack.
     *
     * @param insertIndex The index to insert the component at in the stack.
     * @param component The component to insert into the navigation stack.
     * @param componentProps Any properties of the component.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.insert = function (insertIndex, component, componentProps, opts, done) {
        return this.queueTrns({
            insertStart: insertIndex,
            insertViews: [{ page: component, params: componentProps }],
            opts: opts
        }, done);
    };
    /**
     * Inserts an array of components into the navigation stack at the specified index.
     * The last component in the array will become instantiated as a view, and animate
     * in to become the active view.
     *
     * @param insertIndex The index to insert the components at in the stack.
     * @param insertComponents The components to insert into the navigation stack.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.insertPages = function (insertIndex, insertComponents, opts, done) {
        return this.queueTrns({
            insertStart: insertIndex,
            insertViews: insertComponents,
            opts: opts
        }, done);
    };
    /**
     * Pop a component off of the navigation stack. Navigates back from the current
     * component.
     *
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.pop = function (opts, done) {
        return this.queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts: opts
        }, done);
    };
    /**
     * Pop to a specific index in the navigation stack.
     *
     * @param indexOrViewCtrl The index or view controller to pop to.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.popTo = function (indexOrViewCtrl, opts, done) {
        var tiConfig = {
            removeStart: -1,
            removeCount: -1,
            opts: opts
        };
        if (typeof indexOrViewCtrl === 'object' && indexOrViewCtrl.component) {
            tiConfig.removeView = indexOrViewCtrl;
            tiConfig.removeStart = 1;
        }
        else if (typeof indexOrViewCtrl === 'number') {
            tiConfig.removeStart = indexOrViewCtrl + 1;
        }
        return this.queueTrns(tiConfig, done);
    };
    /**
     * Navigate back to the root of the stack, no matter how far back that is.
     *
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.popToRoot = function (opts, done) {
        return this.queueTrns({
            removeStart: 1,
            removeCount: -1,
            opts: opts
        }, done);
    };
    /**
     * Removes a component from the navigation stack at the specified index.
     *
     * @param startIndex The number to begin removal at.
     * @param removeCount The number of components to remove.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.removeIndex = function (startIndex, removeCount, opts, done) {
        if (removeCount === void 0) { removeCount = 1; }
        return this.queueTrns({
            removeStart: startIndex,
            removeCount: removeCount,
            opts: opts
        }, done);
    };
    /**
     * Set the root for the current navigation stack to a component.
     *
     * @param component The component to set as the root of the navigation stack.
     * @param componentProps Any properties of the component.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.setRoot = function (component, componentProps, opts, done) {
        return this.setPages([{ page: component, params: componentProps }], opts, done);
    };
    /**
     * Set the views of the current navigation stack and navigate to the last view.
     * By default animations are disabled, but they can be enabled by passing options
     * to the navigation controller. Navigation parameters can also be passed to the
     * individual pages in the array.
     *
     * @param views The list of views to set as the navigation stack.
     * @param opts The navigation options.
     * @param done The transition complete function.
     */
    class_1.prototype.setPages = function (views, opts, done) {
        if (opts == null) {
            opts = {};
        }
        // if animation wasn't set to true then default it to NOT animate
        if (opts.animated !== true) {
            opts.animated = false;
        }
        return this.queueTrns({
            insertStart: 0,
            insertViews: views,
            removeStart: 0,
            removeCount: -1,
            opts: opts
        }, done);
    };
    /** @internal */
    class_1.prototype.setRouteId = function (id, params, direction) {
        var _this = this;
        var active = this.getActiveSync();
        if (matches(active, id, params)) {
            return Promise.resolve({
                changed: false,
                element: active.element
            });
        }
        var resolve;
        var promise = new Promise(function (r) { return (resolve = r); });
        var finish;
        var commonOpts = {
            updateURL: false,
            viewIsReady: function (enteringEl) {
                var mark;
                var p = new Promise(function (r) { return (mark = r); });
                resolve({
                    changed: true,
                    element: enteringEl,
                    markVisible: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    mark();
                                    return [4 /*yield*/, finish];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }
                });
                return p;
            }
        };
        if (direction === 'root') {
            finish = this.setRoot(id, params, commonOpts);
        }
        else {
            var viewController = this.views.find(function (v) { return matches(v, id, params); });
            if (viewController) {
                finish = this.popTo(viewController, Object.assign(Object.assign({}, commonOpts), { direction: 'back' }));
            }
            else if (direction === 'forward') {
                finish = this.push(id, params, commonOpts);
            }
            else if (direction === 'back') {
                finish = this.setRoot(id, params, Object.assign(Object.assign({}, commonOpts), { direction: 'back', animated: true }));
            }
        }
        return promise;
    };
    /** @internal */
    class_1.prototype.getRouteId = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var active;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                active = this.getActiveSync();
                return [2 /*return*/, active
                        ? {
                            id: active.element.tagName,
                            params: active.params,
                            element: active.element
                        }
                        : undefined];
            });
        });
    };
    /**
     * Get the active view.
     */
    class_1.prototype.getActive = function () {
        return Promise.resolve(this.getActiveSync());
    };
    /**
     * Get the view at the specified index.
     *
     * @param index The index of the view.
     */
    class_1.prototype.getByIndex = function (index) {
        return Promise.resolve(this.views[index]);
    };
    /**
     * Returns `true` if the current view can go back.
     *
     * @param view The view to check.
     */
    class_1.prototype.canGoBack = function (view) {
        return Promise.resolve(this.canGoBackSync(view));
    };
    /**
     * Get the previous view.
     *
     * @param view The view to get.
     */
    class_1.prototype.getPrevious = function (view) {
        return Promise.resolve(this.getPreviousSync(view));
    };
    class_1.prototype.getLength = function () {
        return this.views.length;
    };
    class_1.prototype.getActiveSync = function () {
        return this.views[this.views.length - 1];
    };
    class_1.prototype.canGoBackSync = function (view) {
        if (view === void 0) { view = this.getActiveSync(); }
        return !!(view && this.getPreviousSync(view));
    };
    class_1.prototype.getPreviousSync = function (view) {
        if (view === void 0) { view = this.getActiveSync(); }
        if (!view) {
            return undefined;
        }
        var views = this.views;
        var index = views.indexOf(view);
        return index > 0 ? views[index - 1] : undefined;
    };
    // _queueTrns() adds a navigation stack change to the queue and schedules it to run:
    // 1. _nextTrns(): consumes the next transition in the queue
    // 2. _viewInit(): initializes enteringView if required
    // 3. _viewTest(): ensures canLeave/canEnter Returns `true`, so the operation can continue
    // 4. _postViewInit(): add/remove the views from the navigation stack
    // 5. _transitionInit(): initializes the visual transition if required and schedules it to run
    // 6. _viewAttachToDOM(): attaches the enteringView to the DOM
    // 7. _transitionStart(): called once the transition actually starts, it initializes the Animation underneath.
    // 8. _transitionFinish(): called once the transition finishes
    // 9. _cleanup(): syncs the navigation internal state with the DOM. For example it removes the pages from the DOM or hides/show them.
    class_1.prototype.queueTrns = function (ti, done) {
        if (this.isTransitioning && ti.opts != null && ti.opts.skipIfBusy) {
            return Promise.resolve(false);
        }
        var promise = new Promise(function (resolve, reject) {
            ti.resolve = resolve;
            ti.reject = reject;
        });
        ti.done = done;
        // Normalize empty
        if (ti.insertViews && ti.insertViews.length === 0) {
            ti.insertViews = undefined;
        }
        // Enqueue transition instruction
        this.transInstr.push(ti);
        // if there isn't a transition already happening
        // then this will kick off this transition
        this.nextTrns();
        return promise;
    };
    class_1.prototype.success = function (result, ti) {
        if (this.destroyed) {
            this.fireError('nav controller was destroyed', ti);
            return;
        }
        if (ti.done) {
            ti.done(result.hasCompleted, result.requiresTransition, result.enteringView, result.leavingView, result.direction);
        }
        ti.resolve(result.hasCompleted);
        if (ti.opts.updateURL !== false && this.useRouter) {
            var router = document.querySelector('ion-router');
            if (router) {
                var direction = result.direction === 'back' ? 'back' : 'forward';
                router.navChanged(direction);
            }
        }
    };
    class_1.prototype.failed = function (rejectReason, ti) {
        if (this.destroyed) {
            this.fireError('nav controller was destroyed', ti);
            return;
        }
        this.transInstr.length = 0;
        this.fireError(rejectReason, ti);
    };
    class_1.prototype.fireError = function (rejectReason, ti) {
        if (ti.done) {
            ti.done(false, false, rejectReason);
        }
        if (ti.reject && !this.destroyed) {
            ti.reject(rejectReason);
        }
        else {
            ti.resolve(false);
        }
    };
    class_1.prototype.nextTrns = function () {
        // this is the framework's bread 'n butta function
        // only one transition is allowed at any given time
        if (this.isTransitioning) {
            return false;
        }
        // there is no transition happening right now
        // get the next instruction
        var ti = this.transInstr.shift();
        if (!ti) {
            return false;
        }
        this.runTransition(ti);
        return true;
    };
    class_1.prototype.runTransition = function (ti) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var leavingView, enteringView, requiresTransition, result, _a, rejectReason_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        // set that this nav is actively transitioning
                        this.ionNavWillChange.emit();
                        this.isTransitioning = true;
                        this.prepareTI(ti);
                        leavingView = this.getActiveSync();
                        enteringView = this.getEnteringView(ti, leavingView);
                        if (!leavingView && !enteringView) {
                            throw new Error('no views in the stack to be removed');
                        }
                        if (!(enteringView && enteringView.state === VIEW_STATE_NEW)) return [3 /*break*/, 2];
                        return [4 /*yield*/, enteringView.init(this.el)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        this.postViewInit(enteringView, leavingView, ti);
                        requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) &&
                            enteringView !== leavingView;
                        if (!requiresTransition) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.transition(enteringView, leavingView, ti)];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a = {
                            // transition is not required, so we are already done!
                            // they're inserting/removing the views somewhere in the middle or
                            // beginning, so visually nothing needs to animate/transition
                            // resolve immediately because there's no animation that's happening
                            hasCompleted: true,
                            requiresTransition: false
                        };
                        _b.label = 5;
                    case 5:
                        result = _a;
                        this.success(result, ti);
                        this.ionNavDidChange.emit();
                        return [3 /*break*/, 7];
                    case 6:
                        rejectReason_1 = _b.sent();
                        this.failed(rejectReason_1, ti);
                        return [3 /*break*/, 7];
                    case 7:
                        this.isTransitioning = false;
                        this.nextTrns();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.prepareTI = function (ti) {
        var viewsLength = this.views.length;
        ti.opts = ti.opts || {};
        if (ti.opts.delegate === undefined) {
            ti.opts.delegate = this.delegate;
        }
        if (ti.removeView !== undefined) {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["b"])(ti.removeStart !== undefined, 'removeView needs removeStart');
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["b"])(ti.removeCount !== undefined, 'removeView needs removeCount');
            var index = this.views.indexOf(ti.removeView);
            if (index < 0) {
                throw new Error('removeView was not found');
            }
            ti.removeStart += index;
        }
        if (ti.removeStart !== undefined) {
            if (ti.removeStart < 0) {
                ti.removeStart = viewsLength - 1;
            }
            if (ti.removeCount < 0) {
                ti.removeCount = viewsLength - ti.removeStart;
            }
            ti.leavingRequiresTransition =
                ti.removeCount > 0 && ti.removeStart + ti.removeCount === viewsLength;
        }
        if (ti.insertViews) {
            // allow -1 to be passed in to auto push it on the end
            // and clean up the index if it's larger then the size of the stack
            if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
                ti.insertStart = viewsLength;
            }
            ti.enteringRequiresTransition = ti.insertStart === viewsLength;
        }
        var insertViews = ti.insertViews;
        if (!insertViews) {
            return;
        }
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["b"])(insertViews.length > 0, 'length can not be zero');
        var viewControllers = convertToViews(insertViews);
        if (viewControllers.length === 0) {
            throw new Error('invalid views to insert');
        }
        // Check all the inserted view are correct
        for (var _i = 0, viewControllers_1 = viewControllers; _i < viewControllers_1.length; _i++) {
            var view = viewControllers_1[_i];
            view.delegate = ti.opts.delegate;
            var nav = view.nav;
            if (nav && nav !== this) {
                throw new Error('inserted view was already inserted');
            }
            if (view.state === VIEW_STATE_DESTROYED) {
                throw new Error('inserted view was already destroyed');
            }
        }
        ti.insertViews = viewControllers;
    };
    class_1.prototype.getEnteringView = function (ti, leavingView) {
        var insertViews = ti.insertViews;
        if (insertViews !== undefined) {
            // grab the very last view of the views to be inserted
            // and initialize it as the new entering view
            return insertViews[insertViews.length - 1];
        }
        var removeStart = ti.removeStart;
        if (removeStart !== undefined) {
            var views = this.views;
            var removeEnd = removeStart + ti.removeCount;
            for (var i = views.length - 1; i >= 0; i--) {
                var view = views[i];
                if ((i < removeStart || i >= removeEnd) && view !== leavingView) {
                    return view;
                }
            }
        }
        return undefined;
    };
    class_1.prototype.postViewInit = function (enteringView, leavingView, ti) {
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["b"])(leavingView || enteringView, 'Both leavingView and enteringView are null');
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["b"])(ti.resolve, 'resolve must be valid');
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["b"])(ti.reject, 'reject must be valid');
        var opts = ti.opts;
        var insertViews = ti.insertViews;
        var removeStart = ti.removeStart;
        var removeCount = ti.removeCount;
        var destroyQueue;
        // there are views to remove
        if (removeStart !== undefined && removeCount !== undefined) {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["b"])(removeStart >= 0, 'removeStart can not be negative');
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["b"])(removeCount >= 0, 'removeCount can not be negative');
            destroyQueue = [];
            for (var i = 0; i < removeCount; i++) {
                var view = this.views[i + removeStart];
                if (view && view !== enteringView && view !== leavingView) {
                    destroyQueue.push(view);
                }
            }
            // default the direction to "back"
            opts.direction = opts.direction || 'back';
        }
        var finalBalance = this.views.length +
            (insertViews !== undefined ? insertViews.length : 0) -
            (removeCount !== undefined ? removeCount : 0);
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["b"])(finalBalance >= 0, 'final balance can not be negative');
        if (finalBalance === 0) {
            console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.", this, this.el);
            throw new Error('navigation stack needs at least one root page');
        }
        // At this point the transition can not be rejected, any throw should be an error
        // there are views to insert
        if (insertViews) {
            // add the views to the
            var insertIndex = ti.insertStart;
            for (var _i = 0, insertViews_1 = insertViews; _i < insertViews_1.length; _i++) {
                var view = insertViews_1[_i];
                this.insertViewAt(view, insertIndex);
                insertIndex++;
            }
            if (ti.enteringRequiresTransition) {
                // default to forward if not already set
                opts.direction = opts.direction || 'forward';
            }
        }
        // if the views to be removed are in the beginning or middle
        // and there is not a view that needs to visually transition out
        // then just destroy them and don't transition anything
        // batch all of lifecycles together
        // let's make sure, callbacks are zoned
        if (destroyQueue && destroyQueue.length > 0) {
            for (var _a = 0, destroyQueue_1 = destroyQueue; _a < destroyQueue_1.length; _a++) {
                var view = destroyQueue_1[_a];
                Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_6__["l"])(view.element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__["b"]);
                Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_6__["l"])(view.element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__["c"]);
                Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_6__["l"])(view.element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__["d"]);
            }
            // once all lifecycle events has been delivered, we can safely detroy the views
            for (var _b = 0, destroyQueue_2 = destroyQueue; _b < destroyQueue_2.length; _b++) {
                var view = destroyQueue_2[_b];
                this.destroyView(view);
            }
        }
    };
    class_1.prototype.transition = function (enteringView, leavingView, ti) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var opts, progressCallback, mode, enteringEl, leavingEl, animationOpts, hasCompleted;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opts = ti.opts;
                        progressCallback = opts.progressAnimation
                            ? function (ani) { return _this.sbAni = ani; }
                            : undefined;
                        mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
                        enteringEl = enteringView.element;
                        leavingEl = leavingView && leavingView.element;
                        animationOpts = Object.assign({ mode: mode, showGoBack: this.canGoBackSync(enteringView), baseEl: this.el, animationBuilder: this.animation || opts.animationBuilder || _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"].get('navAnimation'), progressCallback: progressCallback, animated: this.animated && _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"].getBoolean('animated', true), enteringEl: enteringEl,
                            leavingEl: leavingEl }, opts);
                        return [4 /*yield*/, Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_6__["t"])(animationOpts)];
                    case 1:
                        hasCompleted = (_a.sent()).hasCompleted;
                        return [2 /*return*/, this.transitionFinish(hasCompleted, enteringView, leavingView, opts)];
                }
            });
        });
    };
    class_1.prototype.transitionFinish = function (hasCompleted, enteringView, leavingView, opts) {
        var cleanupView = hasCompleted ? enteringView : leavingView;
        if (cleanupView) {
            this.cleanup(cleanupView);
        }
        return {
            hasCompleted: hasCompleted,
            requiresTransition: true,
            enteringView: enteringView,
            leavingView: leavingView,
            direction: opts.direction
        };
    };
    class_1.prototype.insertViewAt = function (view, index) {
        var views = this.views;
        var existingIndex = views.indexOf(view);
        if (existingIndex > -1) {
            // this view is already in the stack!!
            // move it to its new location
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["b"])(view.nav === this, 'view is not part of the nav');
            views.splice(index, 0, views.splice(existingIndex, 1)[0]);
        }
        else {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["b"])(!view.nav, 'nav is used');
            // this is a new view to add to the stack
            // create the new entering view
            view.nav = this;
            // insert the entering view into the correct index in the stack
            views.splice(index, 0, view);
        }
    };
    class_1.prototype.removeView = function (view) {
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["b"])(view.state === VIEW_STATE_ATTACHED || view.state === VIEW_STATE_DESTROYED, 'view state should be loaded or destroyed');
        var views = this.views;
        var index = views.indexOf(view);
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["b"])(index > -1, 'view must be part of the stack');
        if (index >= 0) {
            views.splice(index, 1);
        }
    };
    class_1.prototype.destroyView = function (view) {
        view._destroy();
        this.removeView(view);
    };
    /**
     * DOM WRITE
     */
    class_1.prototype.cleanup = function (activeView) {
        // ok, cleanup time!! Destroy all of the views that are
        // INACTIVE and come after the active view
        // only do this if the views exist, though
        if (this.destroyed) {
            return;
        }
        var views = this.views;
        var activeViewIndex = views.indexOf(activeView);
        for (var i = views.length - 1; i >= 0; i--) {
            var view = views[i];
            var element = view.element;
            if (i > activeViewIndex) {
                // this view comes after the active view
                // let's unload it
                Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_6__["l"])(element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__["d"]);
                this.destroyView(view);
            }
            else if (i < activeViewIndex) {
                // this view comes before the active view
                // and it is not a portal then ensure it is hidden
                Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_6__["s"])(element, true);
            }
        }
    };
    class_1.prototype.canStart = function () {
        return (!!this.swipeGesture &&
            !this.isTransitioning &&
            this.transInstr.length === 0 &&
            this.animationEnabled &&
            this.canGoBackSync());
    };
    class_1.prototype.onStart = function () {
        this.queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts: {
                direction: 'back',
                progressAnimation: true
            }
        }, undefined);
    };
    class_1.prototype.onMove = function (stepValue) {
        if (this.sbAni) {
            this.sbAni.progressStep(stepValue);
        }
    };
    class_1.prototype.onEnd = function (shouldComplete, stepValue, dur) {
        var _this = this;
        if (this.sbAni) {
            this.animationEnabled = false;
            this.sbAni.onFinish(function () {
                _this.animationEnabled = true;
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
                this.sbAni.easing('cubic-bezier(1, 0, 0.68, 0.28)');
                newStepValue += Object(_cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["g"])(new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](1, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0.68, 0.28), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](1, 1), stepValue);
            }
            else {
                newStepValue += Object(_cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["g"])(new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0.32, 0.72), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0, 1), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](1, 1), stepValue);
            }
            this.sbAni.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
        }
    };
    class_1.prototype.render = function () {
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "swipeGesture": ["swipeGestureChanged"],
                "root": ["rootChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var navLink = function (el, routerDirection, component, componentProps) {
    var nav = el.closest('ion-nav');
    if (nav) {
        if (routerDirection === 'forward') {
            if (component !== undefined) {
                return nav.push(component, componentProps, { skipIfBusy: true });
            }
        }
        else if (routerDirection === 'root') {
            if (component !== undefined) {
                return nav.setRoot(component, componentProps, { skipIfBusy: true });
            }
        }
        else if (routerDirection === 'back') {
            return nav.pop({ skipIfBusy: true });
        }
    }
    return Promise.resolve(false);
};
var NavLink = /** @class */ (function () {
    function NavLink(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        /**
         * The transition direction when navigating to another page.
         */
        this.routerDirection = 'forward';
        this.onClick = function () {
            return navLink(_this.el, _this.routerDirection, _this.component, _this.componentProps);
        };
    }
    NavLink.prototype.render = function () {
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onClick: this.onClick }));
    };
    Object.defineProperty(NavLink.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    return NavLink;
}());
var NavPop = /** @class */ (function () {
    function NavPop(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.pop = function () {
            return navLink(_this.el, 'back');
        };
    }
    NavPop.prototype.componentDidLoad = function () {
        console.warn('[DEPRECATED][ion-nav-pop] <ion-nav-pop> is deprecated. Use `<ion-nav-link routerDirection="back">` instead.');
    };
    NavPop.prototype.render = function () {
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onClick: this.pop }));
    };
    Object.defineProperty(NavPop.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    return NavPop;
}());
var NavPush = /** @class */ (function () {
    function NavPush(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.push = function () {
            return navLink(_this.el, 'forward', _this.component, _this.componentProps);
        };
    }
    NavPush.prototype.componentDidLoad = function () {
        console.warn('[DEPRECATED][ion-nav-push] `<ion-nav-push component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent">` instead.');
    };
    NavPush.prototype.render = function () {
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onClick: this.push }));
    };
    Object.defineProperty(NavPush.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    return NavPush;
}());
var NavSetRoot = /** @class */ (function () {
    function NavSetRoot(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.setRoot = function () {
            return navLink(_this.el, 'root', _this.component, _this.componentProps);
        };
    }
    NavSetRoot.prototype.componentDidLoad = function () {
        console.warn('[DEPRECATED][ion-nav-set-root] `<ion-nav-set-root component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent" routerDirection="root">` instead.');
    };
    NavSetRoot.prototype.render = function () {
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onClick: this.setRoot }));
    };
    Object.defineProperty(NavSetRoot.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    return NavSetRoot;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2N1YmljLWJlemllci0yODEyZmRhMy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1uYXZfNS5lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsK0JBQStCLEVBQUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvRDs7Ozs7Ozs7Ozs7OztBQzVGcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUM4RTtBQUMxRTtBQUNDO0FBQ3NFO0FBQ2xEO0FBQ2tCO0FBQ0o7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQSw4QkFBOEIsNkJBQTZCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdURBQVM7QUFDeEI7QUFDQSxtQkFBbUIseURBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksOERBQU07QUFDbEIsWUFBWSw4REFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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USwyREFBVSxPQUFPLEVBQUU7QUFDckQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyxxQkFBcUI7QUFDOUM7QUFDQTtBQUNBLDBCQUEwQixRQUFRLDJEQUFVLE9BQU8sRUFBRTtBQUNyRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLHdCQUF3QjtBQUNqRDtBQUNBO0FBQ0EsMEJBQTBCLFFBQVEsMkRBQVUsT0FBTyxFQUFFO0FBQ3JEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ2tJIiwiZmlsZSI6IjI5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQmFzZWQgb246XG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MzQ4MDA5L3ktY29vcmRpbmF0ZS1mb3ItYS1naXZlbi14LWN1YmljLWJlemllclxuICogaHR0cHM6Ly9tYXRoLnN0YWNrZXhjaGFuZ2UuY29tL3F1ZXN0aW9ucy8yNjg0Ni9pcy10aGVyZS1hbi1leHBsaWNpdC1mb3JtLWZvci1jdWJpYy1iJUMzJUE5emllci1jdXJ2ZXNcbiAqIFRPRE86IFJlZHVjZSByb3VuZGluZyBlcnJvclxuICovXG52YXIgUG9pbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbiAgICByZXR1cm4gUG9pbnQ7XG59KCkpO1xuLyoqXG4gKiBHaXZlbiBhIGN1YmljLWJlemllciBjdXJ2ZSwgZ2V0IHRoZSB4IHZhbHVlICh0aW1lKSBnaXZlblxuICogdGhlIHkgdmFsdWUgKHByb2dyZXNzaW9uKS5cbiAqIEV4OiBjdWJpYy1iZXppZXIoMC4zMiwgMC43MiwgMCwgMSk7XG4gKiBQMDogKDAsIDApXG4gKiBQMTogKDAuMzIsIDAuNzIpXG4gKiBQMjogKDAsIDEpXG4gKiBQMzogKDEsIDEpXG4gKlxuICogSWYgeW91IGdpdmUgYSBjdWJpYyBiZXppZXIgY3VydmUgdGhhdCBuZXZlciByZWFjaGVzIHRoZVxuICogcHJvdmlkZWQgcHJvZ3Jlc3Npb24sIHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gTmFOLlxuICovXG52YXIgZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24gPSBmdW5jdGlvbiAocDAsIHAxLCBwMiwgcDMsIHByb2dyZXNzaW9uKSB7XG4gICAgdmFyIHRWYWx1ZXMgPSBzb2x2ZUN1YmljQmV6aWVyKHAwLnksIHAxLnksIHAyLnksIHAzLnksIHByb2dyZXNzaW9uKTtcbiAgICByZXR1cm4gc29sdmVDdWJpY1BhcmFtZXRyaWNFcXVhdGlvbihwMC54LCBwMS54LCBwMi54LCBwMy54LCB0VmFsdWVzWzBdKTsgLy8gVE9ETzogQWRkIGJldHRlciBzdHJhdGVneSBmb3IgZGVhbGluZyB3aXRoIG11bHRpcGxlIHNvbHV0aW9uc1xufTtcbi8qKlxuICogU29sdmUgYSBjdWJpYyBlcXVhdGlvbiBpbiBvbmUgZGltZW5zaW9uICh0aW1lKVxuICovXG52YXIgc29sdmVDdWJpY1BhcmFtZXRyaWNFcXVhdGlvbiA9IGZ1bmN0aW9uIChwMCwgcDEsIHAyLCBwMywgdCkge1xuICAgIHZhciBwYXJ0QSA9ICgzICogcDEpICogTWF0aC5wb3codCAtIDEsIDIpO1xuICAgIHZhciBwYXJ0QiA9ICgtMyAqIHAyICogdCkgKyAoMyAqIHAyKSArIChwMyAqIHQpO1xuICAgIHZhciBwYXJ0QyA9IHAwICogTWF0aC5wb3codCAtIDEsIDMpO1xuICAgIHJldHVybiB0ICogKHBhcnRBICsgKHQgKiBwYXJ0QikpIC0gcGFydEM7XG59O1xuLyoqXG4gKiBGaW5kIHRoZSBgdGAgdmFsdWUgZm9yIGEgY3ViaWMgYmV6aWVyIHVzaW5nIENhcmRhbm8ncyBmb3JtdWxhXG4gKi9cbnZhciBzb2x2ZUN1YmljQmV6aWVyID0gZnVuY3Rpb24gKHAwLCBwMSwgcDIsIHAzLCByZWZQb2ludCkge1xuICAgIHAwIC09IHJlZlBvaW50O1xuICAgIHAxIC09IHJlZlBvaW50O1xuICAgIHAyIC09IHJlZlBvaW50O1xuICAgIHAzIC09IHJlZlBvaW50O1xuICAgIHZhciByb290cyA9IHNvbHZlQ3ViaWNFcXVhdGlvbihwMyAtIDMgKiBwMiArIDMgKiBwMSAtIHAwLCAzICogcDIgLSA2ICogcDEgKyAzICogcDAsIDMgKiBwMSAtIDMgKiBwMCwgcDApO1xuICAgIHJldHVybiByb290cy5maWx0ZXIoZnVuY3Rpb24gKHJvb3QpIHsgcmV0dXJuIHJvb3QgPj0gMCAmJiByb290IDw9IDE7IH0pO1xufTtcbnZhciBzb2x2ZVF1YWRyYXRpY0VxdWF0aW9uID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICB2YXIgZGlzY3JpbWluYW50ID0gYiAqIGIgLSA0ICogYSAqIGM7XG4gICAgaWYgKGRpc2NyaW1pbmFudCA8IDApIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICgtYiArIE1hdGguc3FydChkaXNjcmltaW5hbnQpKSAvICgyICogYSksXG4gICAgICAgICAgICAoLWIgLSBNYXRoLnNxcnQoZGlzY3JpbWluYW50KSkgLyAoMiAqIGEpXG4gICAgICAgIF07XG4gICAgfVxufTtcbnZhciBzb2x2ZUN1YmljRXF1YXRpb24gPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgIGlmIChhID09PSAwKSB7XG4gICAgICAgIHJldHVybiBzb2x2ZVF1YWRyYXRpY0VxdWF0aW9uKGIsIGMsIGQpO1xuICAgIH1cbiAgICBiIC89IGE7XG4gICAgYyAvPSBhO1xuICAgIGQgLz0gYTtcbiAgICB2YXIgcCA9ICgzICogYyAtIGIgKiBiKSAvIDM7XG4gICAgdmFyIHEgPSAoMiAqIGIgKiBiICogYiAtIDkgKiBiICogYyArIDI3ICogZCkgLyAyNztcbiAgICBpZiAocCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW01hdGgucG93KC1xLCAxIC8gMyldO1xuICAgIH1cbiAgICBlbHNlIGlmIChxID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbTWF0aC5zcXJ0KC1wKSwgLU1hdGguc3FydCgtcCldO1xuICAgIH1cbiAgICB2YXIgZGlzY3JpbWluYW50ID0gTWF0aC5wb3cocSAvIDIsIDIpICsgTWF0aC5wb3cocCAvIDMsIDMpO1xuICAgIGlmIChkaXNjcmltaW5hbnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFtNYXRoLnBvdyhxIC8gMiwgMSAvIDIpIC0gYiAvIDNdO1xuICAgIH1cbiAgICBlbHNlIGlmIChkaXNjcmltaW5hbnQgPiAwKSB7XG4gICAgICAgIHJldHVybiBbTWF0aC5wb3coLShxIC8gMikgKyBNYXRoLnNxcnQoZGlzY3JpbWluYW50KSwgMSAvIDMpIC0gTWF0aC5wb3coKHEgLyAyKSArIE1hdGguc3FydChkaXNjcmltaW5hbnQpLCAxIC8gMykgLSBiIC8gM107XG4gICAgfVxuICAgIHZhciByID0gTWF0aC5zcXJ0KE1hdGgucG93KC0ocCAvIDMpLCAzKSk7XG4gICAgdmFyIHBoaSA9IE1hdGguYWNvcygtKHEgLyAoMiAqIE1hdGguc3FydChNYXRoLnBvdygtKHAgLyAzKSwgMykpKSkpO1xuICAgIHZhciBzID0gMiAqIE1hdGgucG93KHIsIDEgLyAzKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzICogTWF0aC5jb3MocGhpIC8gMykgLSBiIC8gMyxcbiAgICAgICAgcyAqIE1hdGguY29zKChwaGkgKyAyICogTWF0aC5QSSkgLyAzKSAtIGIgLyAzLFxuICAgICAgICBzICogTWF0aC5jb3MoKHBoaSArIDQgKiBNYXRoLlBJKSAvIDMpIC0gYiAvIDNcbiAgICBdO1xufTtcbmV4cG9ydCB7IFBvaW50IGFzIFAsIGdldFRpbWVHaXZlblByb2dyZXNzaW9uIGFzIGcgfTtcbiIsImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgZCBhcyBjcmVhdGVFdmVudCwgYyBhcyBnZXRJb25Nb2RlLCBoLCBlIGFzIGdldEVsZW1lbnQsIEggYXMgSG9zdCB9IGZyb20gJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgeyBiIGFzIGNvbmZpZyB9IGZyb20gJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IGIgYXMgYXNzZXJ0IH0gZnJvbSAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IGQgYXMgTElGRUNZQ0xFX1dJTExfVU5MT0FELCBiIGFzIExJRkVDWUNMRV9XSUxMX0xFQVZFLCBjIGFzIExJRkVDWUNMRV9ESURfTEVBVkUgfSBmcm9tICcuL2NvbnN0YW50cy0zYzNlMTA5OS5qcyc7XG5pbXBvcnQgeyBhIGFzIGF0dGFjaENvbXBvbmVudCB9IGZyb20gJy4vZnJhbWV3b3JrLWRlbGVnYXRlLWMyZTJlMWY0LmpzJztcbmltcG9ydCB7IGwgYXMgbGlmZWN5Y2xlLCB0IGFzIHRyYW5zaXRpb24sIHMgYXMgc2V0UGFnZUhpZGRlbiB9IGZyb20gJy4vaW5kZXgtNGQ5MWYwM2EuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRUaW1lR2l2ZW5Qcm9ncmVzc2lvbiwgUCBhcyBQb2ludCB9IGZyb20gJy4vY3ViaWMtYmV6aWVyLTI4MTJmZGEzLmpzJztcbnZhciBWSUVXX1NUQVRFX05FVyA9IDE7XG52YXIgVklFV19TVEFURV9BVFRBQ0hFRCA9IDI7XG52YXIgVklFV19TVEFURV9ERVNUUk9ZRUQgPSAzO1xudmFyIFZpZXdDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFZpZXdDb250cm9sbGVyKGNvbXBvbmVudCwgcGFyYW1zKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFZJRVdfU1RBVEVfTkVXO1xuICAgIH1cbiAgICBWaWV3Q29udHJvbGxlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbXBvbmVudCwgX2E7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gVklFV19TVEFURV9BVFRBQ0hFRDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIXRoaXMuZWxlbWVudCkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGF0dGFjaENvbXBvbmVudCh0aGlzLmRlbGVnYXRlLCBjb250YWluZXIsIGNvbXBvbmVudCwgWydpb24tcGFnZScsICdpb24tcGFnZS1pbnZpc2libGUnXSwgdGhpcy5wYXJhbXMpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EuZWxlbWVudCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRE9NIFdSSVRFXG4gICAgICovXG4gICAgVmlld0NvbnRyb2xsZXIucHJvdG90eXBlLl9kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBhc3NlcnQodGhpcy5zdGF0ZSAhPT0gVklFV19TVEFURV9ERVNUUk9ZRUQsICd2aWV3IHN0YXRlIG11c3QgYmUgQVRUQUNIRUQnKTtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUucmVtb3ZlVmlld0Zyb21Eb20oZWxlbWVudC5wYXJlbnRFbGVtZW50LCBlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uYXYgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBWSUVXX1NUQVRFX0RFU1RST1lFRDtcbiAgICB9O1xuICAgIHJldHVybiBWaWV3Q29udHJvbGxlcjtcbn0oKSk7XG52YXIgbWF0Y2hlcyA9IGZ1bmN0aW9uICh2aWV3LCBpZCwgcGFyYW1zKSB7XG4gICAgaWYgKCF2aWV3KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHZpZXcuY29tcG9uZW50ICE9PSBpZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBjdXJyZW50UGFyYW1zID0gdmlldy5wYXJhbXM7XG4gICAgaWYgKGN1cnJlbnRQYXJhbXMgPT09IHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFjdXJyZW50UGFyYW1zICYmICFwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghY3VycmVudFBhcmFtcyB8fCAhcGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMoY3VycmVudFBhcmFtcyk7XG4gICAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMocGFyYW1zKTtcbiAgICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICAgIGZvciAodmFyIF9pID0gMCwga2V5c0FfMSA9IGtleXNBOyBfaSA8IGtleXNBXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzQV8xW19pXTtcbiAgICAgICAgaWYgKGN1cnJlbnRQYXJhbXNba2V5XSAhPT0gcGFyYW1zW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgY29udmVydFRvVmlldyA9IGZ1bmN0aW9uIChwYWdlLCBwYXJhbXMpIHtcbiAgICBpZiAoIXBhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChwYWdlIGluc3RhbmNlb2YgVmlld0NvbnRyb2xsZXIpIHtcbiAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgfVxuICAgIHJldHVybiBuZXcgVmlld0NvbnRyb2xsZXIocGFnZSwgcGFyYW1zKTtcbn07XG52YXIgY29udmVydFRvVmlld3MgPSBmdW5jdGlvbiAocGFnZXMpIHtcbiAgICByZXR1cm4gcGFnZXMubWFwKGZ1bmN0aW9uIChwYWdlKSB7XG4gICAgICAgIGlmIChwYWdlIGluc3RhbmNlb2YgVmlld0NvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBwYWdlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgncGFnZScgaW4gcGFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnRUb1ZpZXcocGFnZS5wYWdlLCBwYWdlLnBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnZlcnRUb1ZpZXcocGFnZSwgdW5kZWZpbmVkKTtcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYgIT09IG51bGw7IH0pO1xufTtcbnZhciBOYXYgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMShob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMudHJhbnNJbnN0ciA9IFtdO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnVzZVJvdXRlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRlc3Ryb3llZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZpZXdzID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBuYXYgc2hvdWxkIGFuaW1hdGUgdGhlIHRyYW5zaXRpb24gb2YgY29tcG9uZW50cy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmlvbk5hdldpbGxMb2FkID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25OYXZXaWxsTG9hZFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25OYXZXaWxsQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25OYXZXaWxsQ2hhbmdlXCIsIDMpO1xuICAgICAgICB0aGlzLmlvbk5hdkRpZENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTmF2RGlkQ2hhbmdlXCIsIDMpO1xuICAgIH1cbiAgICBjbGFzc18xLnByb3RvdHlwZS5zd2lwZUdlc3R1cmVDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuc2V0RGlzYWJsZWQodGhpcy5zd2lwZUdlc3R1cmUgIT09IHRydWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yb290Q2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucm9vdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudXNlUm91dGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSb290KHRoaXMucm9vdCwgdGhpcy5yb290UGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29tcG9uZW50V2lsbExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudXNlUm91dGVyID1cbiAgICAgICAgICAgICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpICYmXG4gICAgICAgICAgICAgICAgIXRoaXMuZWwuY2xvc2VzdCgnW25vLXJvdXRlcl0nKTtcbiAgICAgICAgaWYgKHRoaXMuc3dpcGVHZXN0dXJlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuc3dpcGVHZXN0dXJlID0gY29uZmlnLmdldEJvb2xlYW4oJ3N3aXBlQmFja0VuYWJsZWQnLCBtb2RlID09PSAnaW9zJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pb25OYXZXaWxsTG9hZC5lbWl0KCk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb21wb25lbnREaWRMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvb3RDaGFuZ2VkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbXBvcnQoJy4vc3dpcGUtYmFjay0zNWFkOGUzNy5qcycpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EuZ2VzdHVyZSA9IChfYi5zZW50KCkpLmNyZWF0ZVN3aXBlQmFja0dlc3R1cmUodGhpcy5lbCwgdGhpcy5jYW5TdGFydC5iaW5kKHRoaXMpLCB0aGlzLm9uU3RhcnQuYmluZCh0aGlzKSwgdGhpcy5vbk1vdmUuYmluZCh0aGlzKSwgdGhpcy5vbkVuZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpcGVHZXN0dXJlQ2hhbmdlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbXBvbmVudERpZFVubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMudmlld3M7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgdmlldyA9IF9hW19pXTtcbiAgICAgICAgICAgIGxpZmVjeWNsZSh2aWV3LmVsZW1lbnQsIExJRkVDWUNMRV9XSUxMX1VOTE9BRCk7XG4gICAgICAgICAgICB2aWV3Ll9kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvLyByZWxlYXNlIHN3aXBlIGJhY2sgZ2VzdHVyZSBhbmQgdHJhbnNpdGlvblxuICAgICAgICB0aGlzLnRyYW5zSW5zdHIubGVuZ3RoID0gdGhpcy52aWV3cy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQdXNoIGEgbmV3IGNvbXBvbmVudCBvbnRvIHRoZSBjdXJyZW50IG5hdmlnYXRpb24gc3RhY2suIFBhc3MgYW55IGFkZGl0aW9uYWxcbiAgICAgKiBpbmZvcm1hdGlvbiBhbG9uZyBhcyBhbiBvYmplY3QuIFRoaXMgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBpcyBhY2Nlc3NpYmxlXG4gICAgICogdGhyb3VnaCBOYXZQYXJhbXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgdG8gcHVzaCBvbnRvIHRoZSBuYXZpZ2F0aW9uIHN0YWNrLlxuICAgICAqIEBwYXJhbSBjb21wb25lbnRQcm9wcyBBbnkgcHJvcGVydGllcyBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqIEBwYXJhbSBvcHRzIFRoZSBuYXZpZ2F0aW9uIG9wdGlvbnMuXG4gICAgICogQHBhcmFtIGRvbmUgVGhlIHRyYW5zaXRpb24gY29tcGxldGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChjb21wb25lbnQsIGNvbXBvbmVudFByb3BzLCBvcHRzLCBkb25lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXVlVHJucyh7XG4gICAgICAgICAgICBpbnNlcnRTdGFydDogLTEsXG4gICAgICAgICAgICBpbnNlcnRWaWV3czogW3sgcGFnZTogY29tcG9uZW50LCBwYXJhbXM6IGNvbXBvbmVudFByb3BzIH1dLFxuICAgICAgICAgICAgb3B0czogb3B0c1xuICAgICAgICB9LCBkb25lKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEluc2VydHMgYSBjb21wb25lbnQgaW50byB0aGUgbmF2aWdhdGlvbiBzdGFjayBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgICAqIFRoaXMgaXMgdXNlZnVsIHRvIGFkZCBhIGNvbXBvbmVudCBhdCBhbnkgcG9pbnQgaW4gdGhlIG5hdmlnYXRpb24gc3RhY2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW5zZXJ0SW5kZXggVGhlIGluZGV4IHRvIGluc2VydCB0aGUgY29tcG9uZW50IGF0IGluIHRoZSBzdGFjay5cbiAgICAgKiBAcGFyYW0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgdG8gaW5zZXJ0IGludG8gdGhlIG5hdmlnYXRpb24gc3RhY2suXG4gICAgICogQHBhcmFtIGNvbXBvbmVudFByb3BzIEFueSBwcm9wZXJ0aWVzIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICogQHBhcmFtIG9wdHMgVGhlIG5hdmlnYXRpb24gb3B0aW9ucy5cbiAgICAgKiBAcGFyYW0gZG9uZSBUaGUgdHJhbnNpdGlvbiBjb21wbGV0ZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5pbnNlcnQgPSBmdW5jdGlvbiAoaW5zZXJ0SW5kZXgsIGNvbXBvbmVudCwgY29tcG9uZW50UHJvcHMsIG9wdHMsIGRvbmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVldWVUcm5zKHtcbiAgICAgICAgICAgIGluc2VydFN0YXJ0OiBpbnNlcnRJbmRleCxcbiAgICAgICAgICAgIGluc2VydFZpZXdzOiBbeyBwYWdlOiBjb21wb25lbnQsIHBhcmFtczogY29tcG9uZW50UHJvcHMgfV0sXG4gICAgICAgICAgICBvcHRzOiBvcHRzXG4gICAgICAgIH0sIGRvbmUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyBhbiBhcnJheSBvZiBjb21wb25lbnRzIGludG8gdGhlIG5hdmlnYXRpb24gc3RhY2sgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICAgKiBUaGUgbGFzdCBjb21wb25lbnQgaW4gdGhlIGFycmF5IHdpbGwgYmVjb21lIGluc3RhbnRpYXRlZCBhcyBhIHZpZXcsIGFuZCBhbmltYXRlXG4gICAgICogaW4gdG8gYmVjb21lIHRoZSBhY3RpdmUgdmlldy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBpbnNlcnRJbmRleCBUaGUgaW5kZXggdG8gaW5zZXJ0IHRoZSBjb21wb25lbnRzIGF0IGluIHRoZSBzdGFjay5cbiAgICAgKiBAcGFyYW0gaW5zZXJ0Q29tcG9uZW50cyBUaGUgY29tcG9uZW50cyB0byBpbnNlcnQgaW50byB0aGUgbmF2aWdhdGlvbiBzdGFjay5cbiAgICAgKiBAcGFyYW0gb3B0cyBUaGUgbmF2aWdhdGlvbiBvcHRpb25zLlxuICAgICAqIEBwYXJhbSBkb25lIFRoZSB0cmFuc2l0aW9uIGNvbXBsZXRlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmluc2VydFBhZ2VzID0gZnVuY3Rpb24gKGluc2VydEluZGV4LCBpbnNlcnRDb21wb25lbnRzLCBvcHRzLCBkb25lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXVlVHJucyh7XG4gICAgICAgICAgICBpbnNlcnRTdGFydDogaW5zZXJ0SW5kZXgsXG4gICAgICAgICAgICBpbnNlcnRWaWV3czogaW5zZXJ0Q29tcG9uZW50cyxcbiAgICAgICAgICAgIG9wdHM6IG9wdHNcbiAgICAgICAgfSwgZG9uZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQb3AgYSBjb21wb25lbnQgb2ZmIG9mIHRoZSBuYXZpZ2F0aW9uIHN0YWNrLiBOYXZpZ2F0ZXMgYmFjayBmcm9tIHRoZSBjdXJyZW50XG4gICAgICogY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIG9wdHMgVGhlIG5hdmlnYXRpb24gb3B0aW9ucy5cbiAgICAgKiBAcGFyYW0gZG9uZSBUaGUgdHJhbnNpdGlvbiBjb21wbGV0ZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiAob3B0cywgZG9uZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5xdWV1ZVRybnMoe1xuICAgICAgICAgICAgcmVtb3ZlU3RhcnQ6IC0xLFxuICAgICAgICAgICAgcmVtb3ZlQ291bnQ6IDEsXG4gICAgICAgICAgICBvcHRzOiBvcHRzXG4gICAgICAgIH0sIGRvbmUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUG9wIHRvIGEgc3BlY2lmaWMgaW5kZXggaW4gdGhlIG5hdmlnYXRpb24gc3RhY2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW5kZXhPclZpZXdDdHJsIFRoZSBpbmRleCBvciB2aWV3IGNvbnRyb2xsZXIgdG8gcG9wIHRvLlxuICAgICAqIEBwYXJhbSBvcHRzIFRoZSBuYXZpZ2F0aW9uIG9wdGlvbnMuXG4gICAgICogQHBhcmFtIGRvbmUgVGhlIHRyYW5zaXRpb24gY29tcGxldGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUucG9wVG8gPSBmdW5jdGlvbiAoaW5kZXhPclZpZXdDdHJsLCBvcHRzLCBkb25lKSB7XG4gICAgICAgIHZhciB0aUNvbmZpZyA9IHtcbiAgICAgICAgICAgIHJlbW92ZVN0YXJ0OiAtMSxcbiAgICAgICAgICAgIHJlbW92ZUNvdW50OiAtMSxcbiAgICAgICAgICAgIG9wdHM6IG9wdHNcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleE9yVmlld0N0cmwgPT09ICdvYmplY3QnICYmIGluZGV4T3JWaWV3Q3RybC5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIHRpQ29uZmlnLnJlbW92ZVZpZXcgPSBpbmRleE9yVmlld0N0cmw7XG4gICAgICAgICAgICB0aUNvbmZpZy5yZW1vdmVTdGFydCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGluZGV4T3JWaWV3Q3RybCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRpQ29uZmlnLnJlbW92ZVN0YXJ0ID0gaW5kZXhPclZpZXdDdHJsICsgMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5xdWV1ZVRybnModGlDb25maWcsIGRvbmUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTmF2aWdhdGUgYmFjayB0byB0aGUgcm9vdCBvZiB0aGUgc3RhY2ssIG5vIG1hdHRlciBob3cgZmFyIGJhY2sgdGhhdCBpcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRzIFRoZSBuYXZpZ2F0aW9uIG9wdGlvbnMuXG4gICAgICogQHBhcmFtIGRvbmUgVGhlIHRyYW5zaXRpb24gY29tcGxldGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUucG9wVG9Sb290ID0gZnVuY3Rpb24gKG9wdHMsIGRvbmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVldWVUcm5zKHtcbiAgICAgICAgICAgIHJlbW92ZVN0YXJ0OiAxLFxuICAgICAgICAgICAgcmVtb3ZlQ291bnQ6IC0xLFxuICAgICAgICAgICAgb3B0czogb3B0c1xuICAgICAgICB9LCBkb25lKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjb21wb25lbnQgZnJvbSB0aGUgbmF2aWdhdGlvbiBzdGFjayBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgICAqXG4gICAgICogQHBhcmFtIHN0YXJ0SW5kZXggVGhlIG51bWJlciB0byBiZWdpbiByZW1vdmFsIGF0LlxuICAgICAqIEBwYXJhbSByZW1vdmVDb3VudCBUaGUgbnVtYmVyIG9mIGNvbXBvbmVudHMgdG8gcmVtb3ZlLlxuICAgICAqIEBwYXJhbSBvcHRzIFRoZSBuYXZpZ2F0aW9uIG9wdGlvbnMuXG4gICAgICogQHBhcmFtIGRvbmUgVGhlIHRyYW5zaXRpb24gY29tcGxldGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUucmVtb3ZlSW5kZXggPSBmdW5jdGlvbiAoc3RhcnRJbmRleCwgcmVtb3ZlQ291bnQsIG9wdHMsIGRvbmUpIHtcbiAgICAgICAgaWYgKHJlbW92ZUNvdW50ID09PSB2b2lkIDApIHsgcmVtb3ZlQ291bnQgPSAxOyB9XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXVlVHJucyh7XG4gICAgICAgICAgICByZW1vdmVTdGFydDogc3RhcnRJbmRleCxcbiAgICAgICAgICAgIHJlbW92ZUNvdW50OiByZW1vdmVDb3VudCxcbiAgICAgICAgICAgIG9wdHM6IG9wdHNcbiAgICAgICAgfSwgZG9uZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHJvb3QgZm9yIHRoZSBjdXJyZW50IG5hdmlnYXRpb24gc3RhY2sgdG8gYSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgdG8gc2V0IGFzIHRoZSByb290IG9mIHRoZSBuYXZpZ2F0aW9uIHN0YWNrLlxuICAgICAqIEBwYXJhbSBjb21wb25lbnRQcm9wcyBBbnkgcHJvcGVydGllcyBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqIEBwYXJhbSBvcHRzIFRoZSBuYXZpZ2F0aW9uIG9wdGlvbnMuXG4gICAgICogQHBhcmFtIGRvbmUgVGhlIHRyYW5zaXRpb24gY29tcGxldGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc2V0Um9vdCA9IGZ1bmN0aW9uIChjb21wb25lbnQsIGNvbXBvbmVudFByb3BzLCBvcHRzLCBkb25lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFBhZ2VzKFt7IHBhZ2U6IGNvbXBvbmVudCwgcGFyYW1zOiBjb21wb25lbnRQcm9wcyB9XSwgb3B0cywgZG9uZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHZpZXdzIG9mIHRoZSBjdXJyZW50IG5hdmlnYXRpb24gc3RhY2sgYW5kIG5hdmlnYXRlIHRvIHRoZSBsYXN0IHZpZXcuXG4gICAgICogQnkgZGVmYXVsdCBhbmltYXRpb25zIGFyZSBkaXNhYmxlZCwgYnV0IHRoZXkgY2FuIGJlIGVuYWJsZWQgYnkgcGFzc2luZyBvcHRpb25zXG4gICAgICogdG8gdGhlIG5hdmlnYXRpb24gY29udHJvbGxlci4gTmF2aWdhdGlvbiBwYXJhbWV0ZXJzIGNhbiBhbHNvIGJlIHBhc3NlZCB0byB0aGVcbiAgICAgKiBpbmRpdmlkdWFsIHBhZ2VzIGluIHRoZSBhcnJheS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2aWV3cyBUaGUgbGlzdCBvZiB2aWV3cyB0byBzZXQgYXMgdGhlIG5hdmlnYXRpb24gc3RhY2suXG4gICAgICogQHBhcmFtIG9wdHMgVGhlIG5hdmlnYXRpb24gb3B0aW9ucy5cbiAgICAgKiBAcGFyYW0gZG9uZSBUaGUgdHJhbnNpdGlvbiBjb21wbGV0ZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5zZXRQYWdlcyA9IGZ1bmN0aW9uICh2aWV3cywgb3B0cywgZG9uZSkge1xuICAgICAgICBpZiAob3B0cyA9PSBudWxsKSB7XG4gICAgICAgICAgICBvcHRzID0ge307XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgYW5pbWF0aW9uIHdhc24ndCBzZXQgdG8gdHJ1ZSB0aGVuIGRlZmF1bHQgaXQgdG8gTk9UIGFuaW1hdGVcbiAgICAgICAgaWYgKG9wdHMuYW5pbWF0ZWQgIT09IHRydWUpIHtcbiAgICAgICAgICAgIG9wdHMuYW5pbWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5xdWV1ZVRybnMoe1xuICAgICAgICAgICAgaW5zZXJ0U3RhcnQ6IDAsXG4gICAgICAgICAgICBpbnNlcnRWaWV3czogdmlld3MsXG4gICAgICAgICAgICByZW1vdmVTdGFydDogMCxcbiAgICAgICAgICAgIHJlbW92ZUNvdW50OiAtMSxcbiAgICAgICAgICAgIG9wdHM6IG9wdHNcbiAgICAgICAgfSwgZG9uZSk7XG4gICAgfTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc2V0Um91dGVJZCA9IGZ1bmN0aW9uIChpZCwgcGFyYW1zLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGFjdGl2ZSA9IHRoaXMuZ2V0QWN0aXZlU3luYygpO1xuICAgICAgICBpZiAobWF0Y2hlcyhhY3RpdmUsIGlkLCBwYXJhbXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBhY3RpdmUuZWxlbWVudFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc29sdmU7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIChyZXNvbHZlID0gcik7IH0pO1xuICAgICAgICB2YXIgZmluaXNoO1xuICAgICAgICB2YXIgY29tbW9uT3B0cyA9IHtcbiAgICAgICAgICAgIHVwZGF0ZVVSTDogZmFsc2UsXG4gICAgICAgICAgICB2aWV3SXNSZWFkeTogZnVuY3Rpb24gKGVudGVyaW5nRWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFyaztcbiAgICAgICAgICAgICAgICB2YXIgcCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyKSB7IHJldHVybiAobWFyayA9IHIpOyB9KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZW50ZXJpbmdFbCxcbiAgICAgICAgICAgICAgICAgICAgbWFya1Zpc2libGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmsoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZpbmlzaF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7IH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3Jvb3QnKSB7XG4gICAgICAgICAgICBmaW5pc2ggPSB0aGlzLnNldFJvb3QoaWQsIHBhcmFtcywgY29tbW9uT3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgdmlld0NvbnRyb2xsZXIgPSB0aGlzLnZpZXdzLmZpbmQoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG1hdGNoZXModiwgaWQsIHBhcmFtcyk7IH0pO1xuICAgICAgICAgICAgaWYgKHZpZXdDb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgZmluaXNoID0gdGhpcy5wb3BUbyh2aWV3Q29udHJvbGxlciwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb21tb25PcHRzKSwgeyBkaXJlY3Rpb246ICdiYWNrJyB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdmb3J3YXJkJykge1xuICAgICAgICAgICAgICAgIGZpbmlzaCA9IHRoaXMucHVzaChpZCwgcGFyYW1zLCBjb21tb25PcHRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2JhY2snKSB7XG4gICAgICAgICAgICAgICAgZmluaXNoID0gdGhpcy5zZXRSb290KGlkLCBwYXJhbXMsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uT3B0cyksIHsgZGlyZWN0aW9uOiAnYmFjaycsIGFuaW1hdGVkOiB0cnVlIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5nZXRSb3V0ZUlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYWN0aXZlO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZSA9IHRoaXMuZ2V0QWN0aXZlU3luYygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBhY3RpdmUuZWxlbWVudC50YWdOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogYWN0aXZlLnBhcmFtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBhY3RpdmUuZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBhY3RpdmUgdmlldy5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5nZXRBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5nZXRBY3RpdmVTeW5jKCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB2aWV3IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB2aWV3LlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmdldEJ5SW5kZXggPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnZpZXdzW2luZGV4XSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgY3VycmVudCB2aWV3IGNhbiBnbyBiYWNrLlxuICAgICAqXG4gICAgICogQHBhcmFtIHZpZXcgVGhlIHZpZXcgdG8gY2hlY2suXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY2FuR29CYWNrID0gZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmNhbkdvQmFja1N5bmModmlldykpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBwcmV2aW91cyB2aWV3LlxuICAgICAqXG4gICAgICogQHBhcmFtIHZpZXcgVGhlIHZpZXcgdG8gZ2V0LlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmdldFByZXZpb3VzID0gZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmdldFByZXZpb3VzU3luYyh2aWV3KSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpZXdzLmxlbmd0aDtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmdldEFjdGl2ZVN5bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpZXdzW3RoaXMudmlld3MubGVuZ3RoIC0gMV07XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jYW5Hb0JhY2tTeW5jID0gZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgaWYgKHZpZXcgPT09IHZvaWQgMCkgeyB2aWV3ID0gdGhpcy5nZXRBY3RpdmVTeW5jKCk7IH1cbiAgICAgICAgcmV0dXJuICEhKHZpZXcgJiYgdGhpcy5nZXRQcmV2aW91c1N5bmModmlldykpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZ2V0UHJldmlvdXNTeW5jID0gZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgaWYgKHZpZXcgPT09IHZvaWQgMCkgeyB2aWV3ID0gdGhpcy5nZXRBY3RpdmVTeW5jKCk7IH1cbiAgICAgICAgaWYgKCF2aWV3KSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2aWV3cyA9IHRoaXMudmlld3M7XG4gICAgICAgIHZhciBpbmRleCA9IHZpZXdzLmluZGV4T2Yodmlldyk7XG4gICAgICAgIHJldHVybiBpbmRleCA+IDAgPyB2aWV3c1tpbmRleCAtIDFdIDogdW5kZWZpbmVkO1xuICAgIH07XG4gICAgLy8gX3F1ZXVlVHJucygpIGFkZHMgYSBuYXZpZ2F0aW9uIHN0YWNrIGNoYW5nZSB0byB0aGUgcXVldWUgYW5kIHNjaGVkdWxlcyBpdCB0byBydW46XG4gICAgLy8gMS4gX25leHRUcm5zKCk6IGNvbnN1bWVzIHRoZSBuZXh0IHRyYW5zaXRpb24gaW4gdGhlIHF1ZXVlXG4gICAgLy8gMi4gX3ZpZXdJbml0KCk6IGluaXRpYWxpemVzIGVudGVyaW5nVmlldyBpZiByZXF1aXJlZFxuICAgIC8vIDMuIF92aWV3VGVzdCgpOiBlbnN1cmVzIGNhbkxlYXZlL2NhbkVudGVyIFJldHVybnMgYHRydWVgLCBzbyB0aGUgb3BlcmF0aW9uIGNhbiBjb250aW51ZVxuICAgIC8vIDQuIF9wb3N0Vmlld0luaXQoKTogYWRkL3JlbW92ZSB0aGUgdmlld3MgZnJvbSB0aGUgbmF2aWdhdGlvbiBzdGFja1xuICAgIC8vIDUuIF90cmFuc2l0aW9uSW5pdCgpOiBpbml0aWFsaXplcyB0aGUgdmlzdWFsIHRyYW5zaXRpb24gaWYgcmVxdWlyZWQgYW5kIHNjaGVkdWxlcyBpdCB0byBydW5cbiAgICAvLyA2LiBfdmlld0F0dGFjaFRvRE9NKCk6IGF0dGFjaGVzIHRoZSBlbnRlcmluZ1ZpZXcgdG8gdGhlIERPTVxuICAgIC8vIDcuIF90cmFuc2l0aW9uU3RhcnQoKTogY2FsbGVkIG9uY2UgdGhlIHRyYW5zaXRpb24gYWN0dWFsbHkgc3RhcnRzLCBpdCBpbml0aWFsaXplcyB0aGUgQW5pbWF0aW9uIHVuZGVybmVhdGguXG4gICAgLy8gOC4gX3RyYW5zaXRpb25GaW5pc2goKTogY2FsbGVkIG9uY2UgdGhlIHRyYW5zaXRpb24gZmluaXNoZXNcbiAgICAvLyA5LiBfY2xlYW51cCgpOiBzeW5jcyB0aGUgbmF2aWdhdGlvbiBpbnRlcm5hbCBzdGF0ZSB3aXRoIHRoZSBET00uIEZvciBleGFtcGxlIGl0IHJlbW92ZXMgdGhlIHBhZ2VzIGZyb20gdGhlIERPTSBvciBoaWRlcy9zaG93IHRoZW0uXG4gICAgY2xhc3NfMS5wcm90b3R5cGUucXVldWVUcm5zID0gZnVuY3Rpb24gKHRpLCBkb25lKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVHJhbnNpdGlvbmluZyAmJiB0aS5vcHRzICE9IG51bGwgJiYgdGkub3B0cy5za2lwSWZCdXN5KSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHRpLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgdGkucmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9KTtcbiAgICAgICAgdGkuZG9uZSA9IGRvbmU7XG4gICAgICAgIC8vIE5vcm1hbGl6ZSBlbXB0eVxuICAgICAgICBpZiAodGkuaW5zZXJ0Vmlld3MgJiYgdGkuaW5zZXJ0Vmlld3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aS5pbnNlcnRWaWV3cyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbnF1ZXVlIHRyYW5zaXRpb24gaW5zdHJ1Y3Rpb25cbiAgICAgICAgdGhpcy50cmFuc0luc3RyLnB1c2godGkpO1xuICAgICAgICAvLyBpZiB0aGVyZSBpc24ndCBhIHRyYW5zaXRpb24gYWxyZWFkeSBoYXBwZW5pbmdcbiAgICAgICAgLy8gdGhlbiB0aGlzIHdpbGwga2ljayBvZmYgdGhpcyB0cmFuc2l0aW9uXG4gICAgICAgIHRoaXMubmV4dFRybnMoKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5zdWNjZXNzID0gZnVuY3Rpb24gKHJlc3VsdCwgdGkpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmVFcnJvcignbmF2IGNvbnRyb2xsZXIgd2FzIGRlc3Ryb3llZCcsIHRpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGkuZG9uZSkge1xuICAgICAgICAgICAgdGkuZG9uZShyZXN1bHQuaGFzQ29tcGxldGVkLCByZXN1bHQucmVxdWlyZXNUcmFuc2l0aW9uLCByZXN1bHQuZW50ZXJpbmdWaWV3LCByZXN1bHQubGVhdmluZ1ZpZXcsIHJlc3VsdC5kaXJlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRpLnJlc29sdmUocmVzdWx0Lmhhc0NvbXBsZXRlZCk7XG4gICAgICAgIGlmICh0aS5vcHRzLnVwZGF0ZVVSTCAhPT0gZmFsc2UgJiYgdGhpcy51c2VSb3V0ZXIpIHtcbiAgICAgICAgICAgIHZhciByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XG4gICAgICAgICAgICBpZiAocm91dGVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IHJlc3VsdC5kaXJlY3Rpb24gPT09ICdiYWNrJyA/ICdiYWNrJyA6ICdmb3J3YXJkJztcbiAgICAgICAgICAgICAgICByb3V0ZXIubmF2Q2hhbmdlZChkaXJlY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5mYWlsZWQgPSBmdW5jdGlvbiAocmVqZWN0UmVhc29uLCB0aSkge1xuICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZUVycm9yKCduYXYgY29udHJvbGxlciB3YXMgZGVzdHJveWVkJywgdGkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhbnNJbnN0ci5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmZpcmVFcnJvcihyZWplY3RSZWFzb24sIHRpKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmZpcmVFcnJvciA9IGZ1bmN0aW9uIChyZWplY3RSZWFzb24sIHRpKSB7XG4gICAgICAgIGlmICh0aS5kb25lKSB7XG4gICAgICAgICAgICB0aS5kb25lKGZhbHNlLCBmYWxzZSwgcmVqZWN0UmVhc29uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGkucmVqZWN0ICYmICF0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGkucmVqZWN0KHJlamVjdFJlYXNvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUubmV4dFRybnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgdGhlIGZyYW1ld29yaydzIGJyZWFkICduIGJ1dHRhIGZ1bmN0aW9uXG4gICAgICAgIC8vIG9ubHkgb25lIHRyYW5zaXRpb24gaXMgYWxsb3dlZCBhdCBhbnkgZ2l2ZW4gdGltZVxuICAgICAgICBpZiAodGhpcy5pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGVyZSBpcyBubyB0cmFuc2l0aW9uIGhhcHBlbmluZyByaWdodCBub3dcbiAgICAgICAgLy8gZ2V0IHRoZSBuZXh0IGluc3RydWN0aW9uXG4gICAgICAgIHZhciB0aSA9IHRoaXMudHJhbnNJbnN0ci5zaGlmdCgpO1xuICAgICAgICBpZiAoIXRpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ydW5UcmFuc2l0aW9uKHRpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5ydW5UcmFuc2l0aW9uID0gZnVuY3Rpb24gKHRpKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsZWF2aW5nVmlldywgZW50ZXJpbmdWaWV3LCByZXF1aXJlc1RyYW5zaXRpb24sIHJlc3VsdCwgX2EsIHJlamVjdFJlYXNvbl8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCA2LCAsIDddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCB0aGF0IHRoaXMgbmF2IGlzIGFjdGl2ZWx5IHRyYW5zaXRpb25pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW9uTmF2V2lsbENoYW5nZS5lbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVHJhbnNpdGlvbmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVUSSh0aSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWF2aW5nVmlldyA9IHRoaXMuZ2V0QWN0aXZlU3luYygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJpbmdWaWV3ID0gdGhpcy5nZXRFbnRlcmluZ1ZpZXcodGksIGxlYXZpbmdWaWV3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbGVhdmluZ1ZpZXcgJiYgIWVudGVyaW5nVmlldykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gdmlld3MgaW4gdGhlIHN0YWNrIHRvIGJlIHJlbW92ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGVudGVyaW5nVmlldyAmJiBlbnRlcmluZ1ZpZXcuc3RhdGUgPT09IFZJRVdfU1RBVEVfTkVXKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBlbnRlcmluZ1ZpZXcuaW5pdCh0aGlzLmVsKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0Vmlld0luaXQoZW50ZXJpbmdWaWV3LCBsZWF2aW5nVmlldywgdGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZXNUcmFuc2l0aW9uID0gKHRpLmVudGVyaW5nUmVxdWlyZXNUcmFuc2l0aW9uIHx8IHRpLmxlYXZpbmdSZXF1aXJlc1RyYW5zaXRpb24pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJpbmdWaWV3ICE9PSBsZWF2aW5nVmlldztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVxdWlyZXNUcmFuc2l0aW9uKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMudHJhbnNpdGlvbihlbnRlcmluZ1ZpZXcsIGxlYXZpbmdWaWV3LCB0aSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0cmFuc2l0aW9uIGlzIG5vdCByZXF1aXJlZCwgc28gd2UgYXJlIGFscmVhZHkgZG9uZSFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGV5J3JlIGluc2VydGluZy9yZW1vdmluZyB0aGUgdmlld3Mgc29tZXdoZXJlIGluIHRoZSBtaWRkbGUgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiZWdpbm5pbmcsIHNvIHZpc3VhbGx5IG5vdGhpbmcgbmVlZHMgdG8gYW5pbWF0ZS90cmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVzb2x2ZSBpbW1lZGlhdGVseSBiZWNhdXNlIHRoZXJlJ3Mgbm8gYW5pbWF0aW9uIHRoYXQncyBoYXBwZW5pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNDb21wbGV0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZXNUcmFuc2l0aW9uOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MocmVzdWx0LCB0aSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlvbk5hdkRpZENoYW5nZS5lbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA3XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0UmVhc29uXzEgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZhaWxlZChyZWplY3RSZWFzb25fMSwgdGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHRUcm5zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUucHJlcGFyZVRJID0gZnVuY3Rpb24gKHRpKSB7XG4gICAgICAgIHZhciB2aWV3c0xlbmd0aCA9IHRoaXMudmlld3MubGVuZ3RoO1xuICAgICAgICB0aS5vcHRzID0gdGkub3B0cyB8fCB7fTtcbiAgICAgICAgaWYgKHRpLm9wdHMuZGVsZWdhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGkub3B0cy5kZWxlZ2F0ZSA9IHRoaXMuZGVsZWdhdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpLnJlbW92ZVZpZXcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYXNzZXJ0KHRpLnJlbW92ZVN0YXJ0ICE9PSB1bmRlZmluZWQsICdyZW1vdmVWaWV3IG5lZWRzIHJlbW92ZVN0YXJ0Jyk7XG4gICAgICAgICAgICBhc3NlcnQodGkucmVtb3ZlQ291bnQgIT09IHVuZGVmaW5lZCwgJ3JlbW92ZVZpZXcgbmVlZHMgcmVtb3ZlQ291bnQnKTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMudmlld3MuaW5kZXhPZih0aS5yZW1vdmVWaWV3KTtcbiAgICAgICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlbW92ZVZpZXcgd2FzIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGkucmVtb3ZlU3RhcnQgKz0gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpLnJlbW92ZVN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aS5yZW1vdmVTdGFydCA8IDApIHtcbiAgICAgICAgICAgICAgICB0aS5yZW1vdmVTdGFydCA9IHZpZXdzTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aS5yZW1vdmVDb3VudCA8IDApIHtcbiAgICAgICAgICAgICAgICB0aS5yZW1vdmVDb3VudCA9IHZpZXdzTGVuZ3RoIC0gdGkucmVtb3ZlU3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aS5sZWF2aW5nUmVxdWlyZXNUcmFuc2l0aW9uID1cbiAgICAgICAgICAgICAgICB0aS5yZW1vdmVDb3VudCA+IDAgJiYgdGkucmVtb3ZlU3RhcnQgKyB0aS5yZW1vdmVDb3VudCA9PT0gdmlld3NMZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpLmluc2VydFZpZXdzKSB7XG4gICAgICAgICAgICAvLyBhbGxvdyAtMSB0byBiZSBwYXNzZWQgaW4gdG8gYXV0byBwdXNoIGl0IG9uIHRoZSBlbmRcbiAgICAgICAgICAgIC8vIGFuZCBjbGVhbiB1cCB0aGUgaW5kZXggaWYgaXQncyBsYXJnZXIgdGhlbiB0aGUgc2l6ZSBvZiB0aGUgc3RhY2tcbiAgICAgICAgICAgIGlmICh0aS5pbnNlcnRTdGFydCA8IDAgfHwgdGkuaW5zZXJ0U3RhcnQgPiB2aWV3c0xlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRpLmluc2VydFN0YXJ0ID0gdmlld3NMZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aS5lbnRlcmluZ1JlcXVpcmVzVHJhbnNpdGlvbiA9IHRpLmluc2VydFN0YXJ0ID09PSB2aWV3c0xlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5zZXJ0Vmlld3MgPSB0aS5pbnNlcnRWaWV3cztcbiAgICAgICAgaWYgKCFpbnNlcnRWaWV3cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFzc2VydChpbnNlcnRWaWV3cy5sZW5ndGggPiAwLCAnbGVuZ3RoIGNhbiBub3QgYmUgemVybycpO1xuICAgICAgICB2YXIgdmlld0NvbnRyb2xsZXJzID0gY29udmVydFRvVmlld3MoaW5zZXJ0Vmlld3MpO1xuICAgICAgICBpZiAodmlld0NvbnRyb2xsZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHZpZXdzIHRvIGluc2VydCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGFsbCB0aGUgaW5zZXJ0ZWQgdmlldyBhcmUgY29ycmVjdFxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHZpZXdDb250cm9sbGVyc18xID0gdmlld0NvbnRyb2xsZXJzOyBfaSA8IHZpZXdDb250cm9sbGVyc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHZpZXcgPSB2aWV3Q29udHJvbGxlcnNfMVtfaV07XG4gICAgICAgICAgICB2aWV3LmRlbGVnYXRlID0gdGkub3B0cy5kZWxlZ2F0ZTtcbiAgICAgICAgICAgIHZhciBuYXYgPSB2aWV3Lm5hdjtcbiAgICAgICAgICAgIGlmIChuYXYgJiYgbmF2ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnNlcnRlZCB2aWV3IHdhcyBhbHJlYWR5IGluc2VydGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmlldy5zdGF0ZSA9PT0gVklFV19TVEFURV9ERVNUUk9ZRUQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2luc2VydGVkIHZpZXcgd2FzIGFscmVhZHkgZGVzdHJveWVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGkuaW5zZXJ0Vmlld3MgPSB2aWV3Q29udHJvbGxlcnM7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5nZXRFbnRlcmluZ1ZpZXcgPSBmdW5jdGlvbiAodGksIGxlYXZpbmdWaWV3KSB7XG4gICAgICAgIHZhciBpbnNlcnRWaWV3cyA9IHRpLmluc2VydFZpZXdzO1xuICAgICAgICBpZiAoaW5zZXJ0Vmlld3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gZ3JhYiB0aGUgdmVyeSBsYXN0IHZpZXcgb2YgdGhlIHZpZXdzIHRvIGJlIGluc2VydGVkXG4gICAgICAgICAgICAvLyBhbmQgaW5pdGlhbGl6ZSBpdCBhcyB0aGUgbmV3IGVudGVyaW5nIHZpZXdcbiAgICAgICAgICAgIHJldHVybiBpbnNlcnRWaWV3c1tpbnNlcnRWaWV3cy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVtb3ZlU3RhcnQgPSB0aS5yZW1vdmVTdGFydDtcbiAgICAgICAgaWYgKHJlbW92ZVN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciB2aWV3cyA9IHRoaXMudmlld3M7XG4gICAgICAgICAgICB2YXIgcmVtb3ZlRW5kID0gcmVtb3ZlU3RhcnQgKyB0aS5yZW1vdmVDb3VudDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSB2aWV3cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHZhciB2aWV3ID0gdmlld3NbaV07XG4gICAgICAgICAgICAgICAgaWYgKChpIDwgcmVtb3ZlU3RhcnQgfHwgaSA+PSByZW1vdmVFbmQpICYmIHZpZXcgIT09IGxlYXZpbmdWaWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2aWV3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUucG9zdFZpZXdJbml0ID0gZnVuY3Rpb24gKGVudGVyaW5nVmlldywgbGVhdmluZ1ZpZXcsIHRpKSB7XG4gICAgICAgIGFzc2VydChsZWF2aW5nVmlldyB8fCBlbnRlcmluZ1ZpZXcsICdCb3RoIGxlYXZpbmdWaWV3IGFuZCBlbnRlcmluZ1ZpZXcgYXJlIG51bGwnKTtcbiAgICAgICAgYXNzZXJ0KHRpLnJlc29sdmUsICdyZXNvbHZlIG11c3QgYmUgdmFsaWQnKTtcbiAgICAgICAgYXNzZXJ0KHRpLnJlamVjdCwgJ3JlamVjdCBtdXN0IGJlIHZhbGlkJyk7XG4gICAgICAgIHZhciBvcHRzID0gdGkub3B0cztcbiAgICAgICAgdmFyIGluc2VydFZpZXdzID0gdGkuaW5zZXJ0Vmlld3M7XG4gICAgICAgIHZhciByZW1vdmVTdGFydCA9IHRpLnJlbW92ZVN0YXJ0O1xuICAgICAgICB2YXIgcmVtb3ZlQ291bnQgPSB0aS5yZW1vdmVDb3VudDtcbiAgICAgICAgdmFyIGRlc3Ryb3lRdWV1ZTtcbiAgICAgICAgLy8gdGhlcmUgYXJlIHZpZXdzIHRvIHJlbW92ZVxuICAgICAgICBpZiAocmVtb3ZlU3RhcnQgIT09IHVuZGVmaW5lZCAmJiByZW1vdmVDb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhc3NlcnQocmVtb3ZlU3RhcnQgPj0gMCwgJ3JlbW92ZVN0YXJ0IGNhbiBub3QgYmUgbmVnYXRpdmUnKTtcbiAgICAgICAgICAgIGFzc2VydChyZW1vdmVDb3VudCA+PSAwLCAncmVtb3ZlQ291bnQgY2FuIG5vdCBiZSBuZWdhdGl2ZScpO1xuICAgICAgICAgICAgZGVzdHJveVF1ZXVlID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlbW92ZUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdmlldyA9IHRoaXMudmlld3NbaSArIHJlbW92ZVN0YXJ0XTtcbiAgICAgICAgICAgICAgICBpZiAodmlldyAmJiB2aWV3ICE9PSBlbnRlcmluZ1ZpZXcgJiYgdmlldyAhPT0gbGVhdmluZ1ZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJveVF1ZXVlLnB1c2godmlldyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGVmYXVsdCB0aGUgZGlyZWN0aW9uIHRvIFwiYmFja1wiXG4gICAgICAgICAgICBvcHRzLmRpcmVjdGlvbiA9IG9wdHMuZGlyZWN0aW9uIHx8ICdiYWNrJztcbiAgICAgICAgfVxuICAgICAgICB2YXIgZmluYWxCYWxhbmNlID0gdGhpcy52aWV3cy5sZW5ndGggK1xuICAgICAgICAgICAgKGluc2VydFZpZXdzICE9PSB1bmRlZmluZWQgPyBpbnNlcnRWaWV3cy5sZW5ndGggOiAwKSAtXG4gICAgICAgICAgICAocmVtb3ZlQ291bnQgIT09IHVuZGVmaW5lZCA/IHJlbW92ZUNvdW50IDogMCk7XG4gICAgICAgIGFzc2VydChmaW5hbEJhbGFuY2UgPj0gMCwgJ2ZpbmFsIGJhbGFuY2UgY2FuIG5vdCBiZSBuZWdhdGl2ZScpO1xuICAgICAgICBpZiAoZmluYWxCYWxhbmNlID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJZb3UgY2FuJ3QgcmVtb3ZlIGFsbCB0aGUgcGFnZXMgaW4gdGhlIG5hdmlnYXRpb24gc3RhY2suIG5hdi5wb3AoKSBpcyBwcm9iYWJseSBjYWxsZWQgdG9vIG1hbnkgdGltZXMuXCIsIHRoaXMsIHRoaXMuZWwpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduYXZpZ2F0aW9uIHN0YWNrIG5lZWRzIGF0IGxlYXN0IG9uZSByb290IHBhZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBdCB0aGlzIHBvaW50IHRoZSB0cmFuc2l0aW9uIGNhbiBub3QgYmUgcmVqZWN0ZWQsIGFueSB0aHJvdyBzaG91bGQgYmUgYW4gZXJyb3JcbiAgICAgICAgLy8gdGhlcmUgYXJlIHZpZXdzIHRvIGluc2VydFxuICAgICAgICBpZiAoaW5zZXJ0Vmlld3MpIHtcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgdmlld3MgdG8gdGhlXG4gICAgICAgICAgICB2YXIgaW5zZXJ0SW5kZXggPSB0aS5pbnNlcnRTdGFydDtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgaW5zZXJ0Vmlld3NfMSA9IGluc2VydFZpZXdzOyBfaSA8IGluc2VydFZpZXdzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZpZXcgPSBpbnNlcnRWaWV3c18xW19pXTtcbiAgICAgICAgICAgICAgICB0aGlzLmluc2VydFZpZXdBdCh2aWV3LCBpbnNlcnRJbmRleCk7XG4gICAgICAgICAgICAgICAgaW5zZXJ0SW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aS5lbnRlcmluZ1JlcXVpcmVzVHJhbnNpdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgdG8gZm9yd2FyZCBpZiBub3QgYWxyZWFkeSBzZXRcbiAgICAgICAgICAgICAgICBvcHRzLmRpcmVjdGlvbiA9IG9wdHMuZGlyZWN0aW9uIHx8ICdmb3J3YXJkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgdmlld3MgdG8gYmUgcmVtb3ZlZCBhcmUgaW4gdGhlIGJlZ2lubmluZyBvciBtaWRkbGVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGlzIG5vdCBhIHZpZXcgdGhhdCBuZWVkcyB0byB2aXN1YWxseSB0cmFuc2l0aW9uIG91dFxuICAgICAgICAvLyB0aGVuIGp1c3QgZGVzdHJveSB0aGVtIGFuZCBkb24ndCB0cmFuc2l0aW9uIGFueXRoaW5nXG4gICAgICAgIC8vIGJhdGNoIGFsbCBvZiBsaWZlY3ljbGVzIHRvZ2V0aGVyXG4gICAgICAgIC8vIGxldCdzIG1ha2Ugc3VyZSwgY2FsbGJhY2tzIGFyZSB6b25lZFxuICAgICAgICBpZiAoZGVzdHJveVF1ZXVlICYmIGRlc3Ryb3lRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYSA9IDAsIGRlc3Ryb3lRdWV1ZV8xID0gZGVzdHJveVF1ZXVlOyBfYSA8IGRlc3Ryb3lRdWV1ZV8xLmxlbmd0aDsgX2ErKykge1xuICAgICAgICAgICAgICAgIHZhciB2aWV3ID0gZGVzdHJveVF1ZXVlXzFbX2FdO1xuICAgICAgICAgICAgICAgIGxpZmVjeWNsZSh2aWV3LmVsZW1lbnQsIExJRkVDWUNMRV9XSUxMX0xFQVZFKTtcbiAgICAgICAgICAgICAgICBsaWZlY3ljbGUodmlldy5lbGVtZW50LCBMSUZFQ1lDTEVfRElEX0xFQVZFKTtcbiAgICAgICAgICAgICAgICBsaWZlY3ljbGUodmlldy5lbGVtZW50LCBMSUZFQ1lDTEVfV0lMTF9VTkxPQUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gb25jZSBhbGwgbGlmZWN5Y2xlIGV2ZW50cyBoYXMgYmVlbiBkZWxpdmVyZWQsIHdlIGNhbiBzYWZlbHkgZGV0cm95IHRoZSB2aWV3c1xuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBkZXN0cm95UXVldWVfMiA9IGRlc3Ryb3lRdWV1ZTsgX2IgPCBkZXN0cm95UXVldWVfMi5sZW5ndGg7IF9iKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdmlldyA9IGRlc3Ryb3lRdWV1ZV8yW19iXTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lWaWV3KHZpZXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS50cmFuc2l0aW9uID0gZnVuY3Rpb24gKGVudGVyaW5nVmlldywgbGVhdmluZ1ZpZXcsIHRpKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvcHRzLCBwcm9ncmVzc0NhbGxiYWNrLCBtb2RlLCBlbnRlcmluZ0VsLCBsZWF2aW5nRWwsIGFuaW1hdGlvbk9wdHMsIGhhc0NvbXBsZXRlZDtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzID0gdGkub3B0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQ2FsbGJhY2sgPSBvcHRzLnByb2dyZXNzQW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoYW5pKSB7IHJldHVybiBfdGhpcy5zYkFuaSA9IGFuaTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRlcmluZ0VsID0gZW50ZXJpbmdWaWV3LmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWF2aW5nRWwgPSBsZWF2aW5nVmlldyAmJiBsZWF2aW5nVmlldy5lbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uT3B0cyA9IE9iamVjdC5hc3NpZ24oeyBtb2RlOiBtb2RlLCBzaG93R29CYWNrOiB0aGlzLmNhbkdvQmFja1N5bmMoZW50ZXJpbmdWaWV3KSwgYmFzZUVsOiB0aGlzLmVsLCBhbmltYXRpb25CdWlsZGVyOiB0aGlzLmFuaW1hdGlvbiB8fCBvcHRzLmFuaW1hdGlvbkJ1aWxkZXIgfHwgY29uZmlnLmdldCgnbmF2QW5pbWF0aW9uJyksIHByb2dyZXNzQ2FsbGJhY2s6IHByb2dyZXNzQ2FsbGJhY2ssIGFuaW1hdGVkOiB0aGlzLmFuaW1hdGVkICYmIGNvbmZpZy5nZXRCb29sZWFuKCdhbmltYXRlZCcsIHRydWUpLCBlbnRlcmluZ0VsOiBlbnRlcmluZ0VsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZpbmdFbDogbGVhdmluZ0VsIH0sIG9wdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdHJhbnNpdGlvbihhbmltYXRpb25PcHRzKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NvbXBsZXRlZCA9IChfYS5zZW50KCkpLmhhc0NvbXBsZXRlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLnRyYW5zaXRpb25GaW5pc2goaGFzQ29tcGxldGVkLCBlbnRlcmluZ1ZpZXcsIGxlYXZpbmdWaWV3LCBvcHRzKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUudHJhbnNpdGlvbkZpbmlzaCA9IGZ1bmN0aW9uIChoYXNDb21wbGV0ZWQsIGVudGVyaW5nVmlldywgbGVhdmluZ1ZpZXcsIG9wdHMpIHtcbiAgICAgICAgdmFyIGNsZWFudXBWaWV3ID0gaGFzQ29tcGxldGVkID8gZW50ZXJpbmdWaWV3IDogbGVhdmluZ1ZpZXc7XG4gICAgICAgIGlmIChjbGVhbnVwVmlldykge1xuICAgICAgICAgICAgdGhpcy5jbGVhbnVwKGNsZWFudXBWaWV3KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGFzQ29tcGxldGVkOiBoYXNDb21wbGV0ZWQsXG4gICAgICAgICAgICByZXF1aXJlc1RyYW5zaXRpb246IHRydWUsXG4gICAgICAgICAgICBlbnRlcmluZ1ZpZXc6IGVudGVyaW5nVmlldyxcbiAgICAgICAgICAgIGxlYXZpbmdWaWV3OiBsZWF2aW5nVmlldyxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogb3B0cy5kaXJlY3Rpb25cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmluc2VydFZpZXdBdCA9IGZ1bmN0aW9uICh2aWV3LCBpbmRleCkge1xuICAgICAgICB2YXIgdmlld3MgPSB0aGlzLnZpZXdzO1xuICAgICAgICB2YXIgZXhpc3RpbmdJbmRleCA9IHZpZXdzLmluZGV4T2Yodmlldyk7XG4gICAgICAgIGlmIChleGlzdGluZ0luZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgdmlldyBpcyBhbHJlYWR5IGluIHRoZSBzdGFjayEhXG4gICAgICAgICAgICAvLyBtb3ZlIGl0IHRvIGl0cyBuZXcgbG9jYXRpb25cbiAgICAgICAgICAgIGFzc2VydCh2aWV3Lm5hdiA9PT0gdGhpcywgJ3ZpZXcgaXMgbm90IHBhcnQgb2YgdGhlIG5hdicpO1xuICAgICAgICAgICAgdmlld3Muc3BsaWNlKGluZGV4LCAwLCB2aWV3cy5zcGxpY2UoZXhpc3RpbmdJbmRleCwgMSlbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXNzZXJ0KCF2aWV3Lm5hdiwgJ25hdiBpcyB1c2VkJyk7XG4gICAgICAgICAgICAvLyB0aGlzIGlzIGEgbmV3IHZpZXcgdG8gYWRkIHRvIHRoZSBzdGFja1xuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBuZXcgZW50ZXJpbmcgdmlld1xuICAgICAgICAgICAgdmlldy5uYXYgPSB0aGlzO1xuICAgICAgICAgICAgLy8gaW5zZXJ0IHRoZSBlbnRlcmluZyB2aWV3IGludG8gdGhlIGNvcnJlY3QgaW5kZXggaW4gdGhlIHN0YWNrXG4gICAgICAgICAgICB2aWV3cy5zcGxpY2UoaW5kZXgsIDAsIHZpZXcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZW1vdmVWaWV3ID0gZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgYXNzZXJ0KHZpZXcuc3RhdGUgPT09IFZJRVdfU1RBVEVfQVRUQUNIRUQgfHwgdmlldy5zdGF0ZSA9PT0gVklFV19TVEFURV9ERVNUUk9ZRUQsICd2aWV3IHN0YXRlIHNob3VsZCBiZSBsb2FkZWQgb3IgZGVzdHJveWVkJyk7XG4gICAgICAgIHZhciB2aWV3cyA9IHRoaXMudmlld3M7XG4gICAgICAgIHZhciBpbmRleCA9IHZpZXdzLmluZGV4T2Yodmlldyk7XG4gICAgICAgIGFzc2VydChpbmRleCA+IC0xLCAndmlldyBtdXN0IGJlIHBhcnQgb2YgdGhlIHN0YWNrJyk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB2aWV3cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5kZXN0cm95VmlldyA9IGZ1bmN0aW9uICh2aWV3KSB7XG4gICAgICAgIHZpZXcuX2Rlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5yZW1vdmVWaWV3KHZpZXcpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRE9NIFdSSVRFXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uIChhY3RpdmVWaWV3KSB7XG4gICAgICAgIC8vIG9rLCBjbGVhbnVwIHRpbWUhISBEZXN0cm95IGFsbCBvZiB0aGUgdmlld3MgdGhhdCBhcmVcbiAgICAgICAgLy8gSU5BQ1RJVkUgYW5kIGNvbWUgYWZ0ZXIgdGhlIGFjdGl2ZSB2aWV3XG4gICAgICAgIC8vIG9ubHkgZG8gdGhpcyBpZiB0aGUgdmlld3MgZXhpc3QsIHRob3VnaFxuICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmlld3MgPSB0aGlzLnZpZXdzO1xuICAgICAgICB2YXIgYWN0aXZlVmlld0luZGV4ID0gdmlld3MuaW5kZXhPZihhY3RpdmVWaWV3KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IHZpZXdzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgdmlldyA9IHZpZXdzW2ldO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB2aWV3LmVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoaSA+IGFjdGl2ZVZpZXdJbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgdmlldyBjb21lcyBhZnRlciB0aGUgYWN0aXZlIHZpZXdcbiAgICAgICAgICAgICAgICAvLyBsZXQncyB1bmxvYWQgaXRcbiAgICAgICAgICAgICAgICBsaWZlY3ljbGUoZWxlbWVudCwgTElGRUNZQ0xFX1dJTExfVU5MT0FEKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lWaWV3KHZpZXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaSA8IGFjdGl2ZVZpZXdJbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgdmlldyBjb21lcyBiZWZvcmUgdGhlIGFjdGl2ZSB2aWV3XG4gICAgICAgICAgICAgICAgLy8gYW5kIGl0IGlzIG5vdCBhIHBvcnRhbCB0aGVuIGVuc3VyZSBpdCBpcyBoaWRkZW5cbiAgICAgICAgICAgICAgICBzZXRQYWdlSGlkZGVuKGVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jYW5TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICghIXRoaXMuc3dpcGVHZXN0dXJlICYmXG4gICAgICAgICAgICAhdGhpcy5pc1RyYW5zaXRpb25pbmcgJiZcbiAgICAgICAgICAgIHRoaXMudHJhbnNJbnN0ci5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRW5hYmxlZCAmJlxuICAgICAgICAgICAgdGhpcy5jYW5Hb0JhY2tTeW5jKCkpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZVRybnMoe1xuICAgICAgICAgICAgcmVtb3ZlU3RhcnQ6IC0xLFxuICAgICAgICAgICAgcmVtb3ZlQ291bnQ6IDEsXG4gICAgICAgICAgICBvcHRzOiB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnYmFjaycsXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NBbmltYXRpb246IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdW5kZWZpbmVkKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9uTW92ZSA9IGZ1bmN0aW9uIChzdGVwVmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuc2JBbmkpIHtcbiAgICAgICAgICAgIHRoaXMuc2JBbmkucHJvZ3Jlc3NTdGVwKHN0ZXBWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9uRW5kID0gZnVuY3Rpb24gKHNob3VsZENvbXBsZXRlLCBzdGVwVmFsdWUsIGR1cikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5zYkFuaSkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNiQW5pLm9uRmluaXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRpb25FbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sIHsgb25lVGltZUNhbGxiYWNrOiB0cnVlIH0pO1xuICAgICAgICAgICAgLy8gQWNjb3VudCBmb3Igcm91bmRpbmcgZXJyb3JzIGluIEpTXG4gICAgICAgICAgICB2YXIgbmV3U3RlcFZhbHVlID0gKHNob3VsZENvbXBsZXRlKSA/IC0wLjAwMSA6IDAuMDAxO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBbmltYXRpb24gd2lsbCBiZSByZXZlcnNlZCBoZXJlLCBzbyBuZWVkIHRvXG4gICAgICAgICAgICAgKiByZXZlcnNlIHRoZSBlYXNpbmcgY3VydmUgYXMgd2VsbFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEFkZGl0aW9uYWxseSwgd2UgbmVlZCB0byBhY2NvdW50IGZvciB0aGUgdGltZSByZWxhdGl2ZVxuICAgICAgICAgICAgICogdG8gdGhlIG5ldyBlYXNpbmcgY3VydmUsIGFzIGBzdGVwVmFsdWVgIGlzIGdvaW5nIHRvIGJlIGdpdmVuXG4gICAgICAgICAgICAgKiBpbiB0ZXJtcyBvZiBhIGxpbmVhciBjdXJ2ZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKCFzaG91bGRDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2JBbmkuZWFzaW5nKCdjdWJpYy1iZXppZXIoMSwgMCwgMC42OCwgMC4yOCknKTtcbiAgICAgICAgICAgICAgICBuZXdTdGVwVmFsdWUgKz0gZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24obmV3IFBvaW50KDAsIDApLCBuZXcgUG9pbnQoMSwgMCksIG5ldyBQb2ludCgwLjY4LCAwLjI4KSwgbmV3IFBvaW50KDEsIDEpLCBzdGVwVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3U3RlcFZhbHVlICs9IGdldFRpbWVHaXZlblByb2dyZXNzaW9uKG5ldyBQb2ludCgwLCAwKSwgbmV3IFBvaW50KDAuMzIsIDAuNzIpLCBuZXcgUG9pbnQoMCwgMSksIG5ldyBQb2ludCgxLCAxKSwgc3RlcFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2JBbmkucHJvZ3Jlc3NFbmQoc2hvdWxkQ29tcGxldGUgPyAxIDogMCwgbmV3U3RlcFZhbHVlLCBkdXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoaChcInNsb3RcIiwgbnVsbCkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJ3YXRjaGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcInN3aXBlR2VzdHVyZVwiOiBbXCJzd2lwZUdlc3R1cmVDaGFuZ2VkXCJdLFxuICAgICAgICAgICAgICAgIFwicm9vdFwiOiBbXCJyb290Q2hhbmdlZFwiXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEsIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiOmhvc3R7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7Y29udGFpbjpsYXlvdXQgc2l6ZSBzdHlsZTtvdmVyZmxvdzpoaWRkZW47ei1pbmRleDowfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NfMTtcbn0oKSk7XG52YXIgbmF2TGluayA9IGZ1bmN0aW9uIChlbCwgcm91dGVyRGlyZWN0aW9uLCBjb21wb25lbnQsIGNvbXBvbmVudFByb3BzKSB7XG4gICAgdmFyIG5hdiA9IGVsLmNsb3Nlc3QoJ2lvbi1uYXYnKTtcbiAgICBpZiAobmF2KSB7XG4gICAgICAgIGlmIChyb3V0ZXJEaXJlY3Rpb24gPT09ICdmb3J3YXJkJykge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hdi5wdXNoKGNvbXBvbmVudCwgY29tcG9uZW50UHJvcHMsIHsgc2tpcElmQnVzeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyb3V0ZXJEaXJlY3Rpb24gPT09ICdyb290Jykge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hdi5zZXRSb290KGNvbXBvbmVudCwgY29tcG9uZW50UHJvcHMsIHsgc2tpcElmQnVzeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyb3V0ZXJEaXJlY3Rpb24gPT09ICdiYWNrJykge1xuICAgICAgICAgICAgcmV0dXJuIG5hdi5wb3AoeyBza2lwSWZCdXN5OiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xufTtcbnZhciBOYXZMaW5rID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5hdkxpbmsoaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRyYW5zaXRpb24gZGlyZWN0aW9uIHdoZW4gbmF2aWdhdGluZyB0byBhbm90aGVyIHBhZ2UuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJvdXRlckRpcmVjdGlvbiA9ICdmb3J3YXJkJztcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5hdkxpbmsoX3RoaXMuZWwsIF90aGlzLnJvdXRlckRpcmVjdGlvbiwgX3RoaXMuY29tcG9uZW50LCBfdGhpcy5jb21wb25lbnRQcm9wcyk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIE5hdkxpbmsucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5vbkNsaWNrIH0pKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOYXZMaW5rLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIE5hdkxpbms7XG59KCkpO1xudmFyIE5hdlBvcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOYXZQb3AoaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLnBvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuYXZMaW5rKF90aGlzLmVsLCAnYmFjaycpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBOYXZQb3AucHJvdG90eXBlLmNvbXBvbmVudERpZExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW0RFUFJFQ0FURURdW2lvbi1uYXYtcG9wXSA8aW9uLW5hdi1wb3A+IGlzIGRlcHJlY2F0ZWQuIFVzZSBgPGlvbi1uYXYtbGluayByb3V0ZXJEaXJlY3Rpb249XCJiYWNrXCI+YCBpbnN0ZWFkLicpO1xuICAgIH07XG4gICAgTmF2UG9wLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMucG9wIH0pKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOYXZQb3AucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gTmF2UG9wO1xufSgpKTtcbnZhciBOYXZQdXNoID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5hdlB1c2goaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLnB1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmF2TGluayhfdGhpcy5lbCwgJ2ZvcndhcmQnLCBfdGhpcy5jb21wb25lbnQsIF90aGlzLmNvbXBvbmVudFByb3BzKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgTmF2UHVzaC5wcm90b3R5cGUuY29tcG9uZW50RGlkTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbREVQUkVDQVRFRF1baW9uLW5hdi1wdXNoXSBgPGlvbi1uYXYtcHVzaCBjb21wb25lbnQ9XCJNeUNvbXBvbmVudFwiPmAgaXMgZGVwcmVjYXRlZC4gVXNlIGA8aW9uLW5hdi1saW5rIGNvbXBvbmVudD1cIk15Q29tcG9uZW50XCI+YCBpbnN0ZWFkLicpO1xuICAgIH07XG4gICAgTmF2UHVzaC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkNsaWNrOiB0aGlzLnB1c2ggfSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5hdlB1c2gucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gTmF2UHVzaDtcbn0oKSk7XG52YXIgTmF2U2V0Um9vdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOYXZTZXRSb290KGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5zZXRSb290ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5hdkxpbmsoX3RoaXMuZWwsICdyb290JywgX3RoaXMuY29tcG9uZW50LCBfdGhpcy5jb21wb25lbnRQcm9wcyk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIE5hdlNldFJvb3QucHJvdG90eXBlLmNvbXBvbmVudERpZExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW0RFUFJFQ0FURURdW2lvbi1uYXYtc2V0LXJvb3RdIGA8aW9uLW5hdi1zZXQtcm9vdCBjb21wb25lbnQ9XCJNeUNvbXBvbmVudFwiPmAgaXMgZGVwcmVjYXRlZC4gVXNlIGA8aW9uLW5hdi1saW5rIGNvbXBvbmVudD1cIk15Q29tcG9uZW50XCIgcm91dGVyRGlyZWN0aW9uPVwicm9vdFwiPmAgaW5zdGVhZC4nKTtcbiAgICB9O1xuICAgIE5hdlNldFJvb3QucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5zZXRSb290IH0pKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOYXZTZXRSb290LnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIE5hdlNldFJvb3Q7XG59KCkpO1xuZXhwb3J0IHsgTmF2IGFzIGlvbl9uYXYsIE5hdkxpbmsgYXMgaW9uX25hdl9saW5rLCBOYXZQb3AgYXMgaW9uX25hdl9wb3AsIE5hdlB1c2ggYXMgaW9uX25hdl9wdXNoLCBOYXZTZXRSb290IGFzIGlvbl9uYXZfc2V0X3Jvb3QgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=