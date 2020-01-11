(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/framework-delegate-c2e2e1f4.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/framework-delegate-c2e2e1f4.js ***!
  \******************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var attachComponent = function (delegate, container, component, cssClasses, componentProps) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var el;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (delegate) {
                    return [2 /*return*/, delegate.attachViewToDom(container, component, componentProps, cssClasses)];
                }
                if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
                    throw new Error('framework delegate is missing');
                }
                el = (typeof component === 'string')
                    ? container.ownerDocument && container.ownerDocument.createElement(component)
                    : component;
                if (cssClasses) {
                    cssClasses.forEach(function (c) { return el.classList.add(c); });
                }
                if (componentProps) {
                    Object.assign(el, componentProps);
                }
                container.appendChild(el);
                if (!el.componentOnReady) return [3 /*break*/, 2];
                return [4 /*yield*/, el.componentOnReady()];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/, el];
        }
    });
}); };
var detachComponent = function (delegate, element) {
    if (element) {
        if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/index-4d91f03a.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/index-4d91f03a.js ***!
  \*****************************************************************/
/*! exports provided: d, g, l, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getIonPageElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "./node_modules/@ionic/core/dist/esm-es5/constants-3c3e1099.js");



var iosTransitionAnimation = function () { return __webpack_require__.e(/*! import() */ 89).then(__webpack_require__.bind(null, /*! ./ios.transition-504cdd09.js */ "./node_modules/@ionic/core/dist/esm-es5/ios.transition-504cdd09.js")); };
var mdTransitionAnimation = function () { return __webpack_require__.e(/*! import() */ 90).then(__webpack_require__.bind(null, /*! ./md.transition-fea2bbfb.js */ "./node_modules/@ionic/core/dist/esm-es5/md.transition-fea2bbfb.js")); };
var transition = function (opts) {
    return new Promise(function (resolve, reject) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["w"])(function () {
            beforeTransition(opts);
            runTransition(opts).then(function (result) {
                if (result.animation) {
                    result.animation.destroy();
                }
                afterTransition(opts);
                resolve(result);
            }, function (error) {
                afterTransition(opts);
                reject(error);
            });
        });
    });
};
var beforeTransition = function (opts) {
    var enteringEl = opts.enteringEl;
    var leavingEl = opts.leavingEl;
    setZIndex(enteringEl, leavingEl, opts.direction);
    if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
    }
    else {
        enteringEl.classList.remove('can-go-back');
    }
    setPageHidden(enteringEl, false);
    if (leavingEl) {
        setPageHidden(leavingEl, false);
    }
};
var runTransition = function (opts) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var animationBuilder, ani;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getAnimationBuilder(opts)];
            case 1:
                animationBuilder = _a.sent();
                ani = (animationBuilder)
                    ? animation(animationBuilder, opts)
                    : noAnimation(opts);
                return [2 /*return*/, ani];
        }
    });
}); };
var afterTransition = function (opts) {
    var enteringEl = opts.enteringEl;
    var leavingEl = opts.leavingEl;
    enteringEl.classList.remove('ion-page-invisible');
    if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
    }
};
var getAnimationBuilder = function (opts) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var getAnimation, _a;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
                    return [2 /*return*/, undefined];
                }
                if (opts.animationBuilder) {
                    return [2 /*return*/, opts.animationBuilder];
                }
                if (!(opts.mode === 'ios')) return [3 /*break*/, 2];
                return [4 /*yield*/, iosTransitionAnimation()];
            case 1:
                _a = (_b.sent()).iosTransitionAnimation;
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, mdTransitionAnimation()];
            case 3:
                _a = (_b.sent()).mdTransitionAnimation;
                _b.label = 4;
            case 4:
                getAnimation = _a;
                return [2 /*return*/, getAnimation];
        }
    });
}); };
var animation = function (animationBuilder, opts) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var trans, mod, err_1, didComplete;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, waitForReady(opts, true)];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 5, , 6]);
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./index-69c37885.js */ "./node_modules/@ionic/core/dist/esm-es5/index-69c37885.js"))];
            case 3:
                mod = _a.sent();
                return [4 /*yield*/, mod.create(animationBuilder, opts.baseEl, opts)];
            case 4:
                trans = _a.sent();
                return [3 /*break*/, 6];
            case 5:
                err_1 = _a.sent();
                trans = animationBuilder(opts.baseEl, opts);
                return [3 /*break*/, 6];
            case 6:
                fireWillEvents(opts.enteringEl, opts.leavingEl);
                return [4 /*yield*/, playTransition(trans, opts)];
            case 7:
                didComplete = _a.sent();
                if (opts.progressCallback) {
                    opts.progressCallback(undefined);
                }
                if (didComplete) {
                    fireDidEvents(opts.enteringEl, opts.leavingEl);
                }
                return [2 /*return*/, {
                        hasCompleted: didComplete,
                        animation: trans
                    }];
        }
    });
}); };
var noAnimation = function (opts) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var enteringEl, leavingEl;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0:
                enteringEl = opts.enteringEl;
                leavingEl = opts.leavingEl;
                return [4 /*yield*/, waitForReady(opts, false)];
            case 1:
                _a.sent();
                fireWillEvents(enteringEl, leavingEl);
                fireDidEvents(enteringEl, leavingEl);
                return [2 /*return*/, {
                        hasCompleted: true
                    }];
        }
    });
}); };
var waitForReady = function (opts, defaultDeep) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var deep, promises;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0:
                deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
                promises = deep ? [
                    deepReady(opts.enteringEl),
                    deepReady(opts.leavingEl),
                ] : [
                    shallowReady(opts.enteringEl),
                    shallowReady(opts.leavingEl),
                ];
                return [4 /*yield*/, Promise.all(promises)];
            case 1:
                _a.sent();
                return [4 /*yield*/, notifyViewReady(opts.viewIsReady, opts.enteringEl)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var notifyViewReady = function (viewIsReady, enteringEl) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!viewIsReady) return [3 /*break*/, 2];
                return [4 /*yield*/, viewIsReady(enteringEl)];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); };
var playTransition = function (trans, opts) {
    var progressCallback = opts.progressCallback;
    // TODO: Remove AnimationBuilder
    var promise = new Promise(function (resolve) {
        trans.onFinish(function (currentStep) {
            if (typeof currentStep === 'number') {
                resolve(currentStep === 1);
            }
            else if (trans.hasCompleted !== undefined) {
                resolve(trans.hasCompleted);
            }
        });
    });
    // cool, let's do this, start the transition
    if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
    }
    else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
    }
    // create a callback for when the animation is done
    return promise;
};
var fireWillEvents = function (enteringEl, leavingEl) {
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_2__["L"]);
};
var fireDidEvents = function (enteringEl, leavingEl) {
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_2__["c"]);
};
var lifecycle = function (el, eventName) {
    if (el) {
        var ev = new CustomEvent(eventName, {
            bubbles: false,
            cancelable: false,
        });
        el.dispatchEvent(ev);
    }
};
var shallowReady = function (el) {
    if (el && el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
};
var deepReady = function (el) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var element, stencilEl;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0:
                element = el;
                if (!element) return [3 /*break*/, 4];
                if (!(element.componentOnReady != null)) return [3 /*break*/, 2];
                return [4 /*yield*/, element.componentOnReady()];
            case 1:
                stencilEl = _a.sent();
                if (stencilEl != null) {
                    return [2 /*return*/];
                }
                _a.label = 2;
            case 2: return [4 /*yield*/, Promise.all(Array.from(element.children).map(deepReady))];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
var setPageHidden = function (el, hidden) {
    if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
    }
    else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
    }
};
var setZIndex = function (enteringEl, leavingEl, direction) {
    if (enteringEl !== undefined) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
    }
};
var getIonPageElement = function (element) {
    if (element.classList.contains('ion-page')) {
        return element;
    }
    var ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
    if (ionPage) {
        return ionPage;
    }
    // idk, return the original element so at least something animates and we don't have a null pointer
    return element;
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2ZyYW1ld29yay1kZWxlZ2F0ZS1jMmUyZTFmNC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2luZGV4LTRkOTFmMDNhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUMvQyw2RkFBNkYsUUFBUSx1REFBUztBQUM5RztBQUNBLFdBQVcseURBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELDRCQUE0QixFQUFFO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzRDs7Ozs7Ozs7Ozs7OztBQ3pDdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQ0s7QUFDK0Y7QUFDbkosMENBQTBDLFFBQVEsd0xBQXNDLENBQUM7QUFDekYseUNBQXlDLFFBQVEsc0xBQXFDLENBQUM7QUFDdkY7QUFDQTtBQUNBLFFBQVEsMkRBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFFBQVEsdURBQVM7QUFDdEQ7QUFDQSxXQUFXLHlEQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFFBQVEsdURBQVM7QUFDNUQ7QUFDQSxXQUFXLHlEQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDSCxtREFBbUQsUUFBUSx1REFBUztBQUNwRTtBQUNBLFdBQVcseURBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMscUtBQTZCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDSCxtQ0FBbUMsUUFBUSx1REFBUztBQUNwRDtBQUNBLFdBQVcseURBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDSCxpREFBaUQsUUFBUSx1REFBUztBQUNsRTtBQUNBLFdBQVcseURBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNILDBEQUEwRCxRQUFRLHVEQUFTO0FBQzNFLFdBQVcseURBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0RBQW9CO0FBQzdDLDBCQUEwQix3REFBb0I7QUFDOUM7QUFDQTtBQUNBLDBCQUEwQix3REFBbUI7QUFDN0MseUJBQXlCLHdEQUFtQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFFBQVEsdURBQVM7QUFDaEQ7QUFDQSxXQUFXLHlEQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VHIiwiZmlsZSI6IjAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xudmFyIGF0dGFjaENvbXBvbmVudCA9IGZ1bmN0aW9uIChkZWxlZ2F0ZSwgY29udGFpbmVyLCBjb21wb25lbnQsIGNzc0NsYXNzZXMsIGNvbXBvbmVudFByb3BzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbDtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGRlbGVnYXRlLmF0dGFjaFZpZXdUb0RvbShjb250YWluZXIsIGNvbXBvbmVudCwgY29tcG9uZW50UHJvcHMsIGNzc0NsYXNzZXMpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnQgIT09ICdzdHJpbmcnICYmICEoY29tcG9uZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZnJhbWV3b3JrIGRlbGVnYXRlIGlzIG1pc3NpbmcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWwgPSAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgICAgID8gY29udGFpbmVyLm93bmVyRG9jdW1lbnQgJiYgY29udGFpbmVyLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChjb21wb25lbnQpXG4gICAgICAgICAgICAgICAgICAgIDogY29tcG9uZW50O1xuICAgICAgICAgICAgICAgIGlmIChjc3NDbGFzc2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gZWwuY2xhc3NMaXN0LmFkZChjKTsgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGVsLCBjb21wb25lbnRQcm9wcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgICAgICAgICAgaWYgKCFlbC5jb21wb25lbnRPblJlYWR5KSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBlbC5jb21wb25lbnRPblJlYWR5KCldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovLCBlbF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xudmFyIGRldGFjaENvbXBvbmVudCA9IGZ1bmN0aW9uIChkZWxlZ2F0ZSwgZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5yZW1vdmVWaWV3RnJvbURvbShjb250YWluZXIsIGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbn07XG5leHBvcnQgeyBhdHRhY2hDb21wb25lbnQgYXMgYSwgZGV0YWNoQ29tcG9uZW50IGFzIGQgfTtcbiIsImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHcgYXMgd3JpdGVUYXNrIH0gZnJvbSAnLi9jb3JlLWZlZWVmZjBkLmpzJztcbmltcG9ydCB7IGIgYXMgTElGRUNZQ0xFX1dJTExfTEVBVkUsIEwgYXMgTElGRUNZQ0xFX1dJTExfRU5URVIsIGEgYXMgTElGRUNZQ0xFX0RJRF9FTlRFUiwgYyBhcyBMSUZFQ1lDTEVfRElEX0xFQVZFIH0gZnJvbSAnLi9jb25zdGFudHMtM2MzZTEwOTkuanMnO1xudmFyIGlvc1RyYW5zaXRpb25BbmltYXRpb24gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpbXBvcnQoJy4vaW9zLnRyYW5zaXRpb24tNTA0Y2RkMDkuanMnKTsgfTtcbnZhciBtZFRyYW5zaXRpb25BbmltYXRpb24gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpbXBvcnQoJy4vbWQudHJhbnNpdGlvbi1mZWEyYmJmYi5qcycpOyB9O1xudmFyIHRyYW5zaXRpb24gPSBmdW5jdGlvbiAob3B0cykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHdyaXRlVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBiZWZvcmVUcmFuc2l0aW9uKG9wdHMpO1xuICAgICAgICAgICAgcnVuVHJhbnNpdGlvbihvcHRzKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWZ0ZXJUcmFuc2l0aW9uKG9wdHMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGFmdGVyVHJhbnNpdGlvbihvcHRzKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbnZhciBiZWZvcmVUcmFuc2l0aW9uID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICB2YXIgZW50ZXJpbmdFbCA9IG9wdHMuZW50ZXJpbmdFbDtcbiAgICB2YXIgbGVhdmluZ0VsID0gb3B0cy5sZWF2aW5nRWw7XG4gICAgc2V0WkluZGV4KGVudGVyaW5nRWwsIGxlYXZpbmdFbCwgb3B0cy5kaXJlY3Rpb24pO1xuICAgIGlmIChvcHRzLnNob3dHb0JhY2spIHtcbiAgICAgICAgZW50ZXJpbmdFbC5jbGFzc0xpc3QuYWRkKCdjYW4tZ28tYmFjaycpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZW50ZXJpbmdFbC5jbGFzc0xpc3QucmVtb3ZlKCdjYW4tZ28tYmFjaycpO1xuICAgIH1cbiAgICBzZXRQYWdlSGlkZGVuKGVudGVyaW5nRWwsIGZhbHNlKTtcbiAgICBpZiAobGVhdmluZ0VsKSB7XG4gICAgICAgIHNldFBhZ2VIaWRkZW4obGVhdmluZ0VsLCBmYWxzZSk7XG4gICAgfVxufTtcbnZhciBydW5UcmFuc2l0aW9uID0gZnVuY3Rpb24gKG9wdHMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFuaW1hdGlvbkJ1aWxkZXIsIGFuaTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0QW5pbWF0aW9uQnVpbGRlcihvcHRzKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQnVpbGRlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBhbmkgPSAoYW5pbWF0aW9uQnVpbGRlcilcbiAgICAgICAgICAgICAgICAgICAgPyBhbmltYXRpb24oYW5pbWF0aW9uQnVpbGRlciwgb3B0cylcbiAgICAgICAgICAgICAgICAgICAgOiBub0FuaW1hdGlvbihvcHRzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgYW5pXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG52YXIgYWZ0ZXJUcmFuc2l0aW9uID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICB2YXIgZW50ZXJpbmdFbCA9IG9wdHMuZW50ZXJpbmdFbDtcbiAgICB2YXIgbGVhdmluZ0VsID0gb3B0cy5sZWF2aW5nRWw7XG4gICAgZW50ZXJpbmdFbC5jbGFzc0xpc3QucmVtb3ZlKCdpb24tcGFnZS1pbnZpc2libGUnKTtcbiAgICBpZiAobGVhdmluZ0VsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGVhdmluZ0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2lvbi1wYWdlLWludmlzaWJsZScpO1xuICAgIH1cbn07XG52YXIgZ2V0QW5pbWF0aW9uQnVpbGRlciA9IGZ1bmN0aW9uIChvcHRzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBnZXRBbmltYXRpb24sIF9hO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmICghb3B0cy5sZWF2aW5nRWwgfHwgIW9wdHMuYW5pbWF0ZWQgfHwgb3B0cy5kdXJhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdW5kZWZpbmVkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMuYW5pbWF0aW9uQnVpbGRlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgb3B0cy5hbmltYXRpb25CdWlsZGVyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCEob3B0cy5tb2RlID09PSAnaW9zJykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGlvc1RyYW5zaXRpb25BbmltYXRpb24oKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgX2EgPSAoX2Iuc2VudCgpKS5pb3NUcmFuc2l0aW9uQW5pbWF0aW9uO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzQgLyp5aWVsZCovLCBtZFRyYW5zaXRpb25BbmltYXRpb24oKV07XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgX2EgPSAoX2Iuc2VudCgpKS5tZFRyYW5zaXRpb25BbmltYXRpb247XG4gICAgICAgICAgICAgICAgX2IubGFiZWwgPSA0O1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGdldEFuaW1hdGlvbiA9IF9hO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBnZXRBbmltYXRpb25dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbnZhciBhbmltYXRpb24gPSBmdW5jdGlvbiAoYW5pbWF0aW9uQnVpbGRlciwgb3B0cykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdHJhbnMsIG1vZCwgZXJyXzEsIGRpZENvbXBsZXRlO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB3YWl0Rm9yUmVhZHkob3B0cywgdHJ1ZSldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsyLCA1LCAsIDZdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbXBvcnQoJy4vaW5kZXgtNjljMzc4ODUuanMnKV07XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgbW9kID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG1vZC5jcmVhdGUoYW5pbWF0aW9uQnVpbGRlciwgb3B0cy5iYXNlRWwsIG9wdHMpXTtcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB0cmFucyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBlcnJfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICB0cmFucyA9IGFuaW1hdGlvbkJ1aWxkZXIob3B0cy5iYXNlRWwsIG9wdHMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGZpcmVXaWxsRXZlbnRzKG9wdHMuZW50ZXJpbmdFbCwgb3B0cy5sZWF2aW5nRWwpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHBsYXlUcmFuc2l0aW9uKHRyYW5zLCBvcHRzKV07XG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgZGlkQ29tcGxldGUgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMucHJvZ3Jlc3NDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBvcHRzLnByb2dyZXNzQ2FsbGJhY2sodW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRpZENvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVEaWRFdmVudHMob3B0cy5lbnRlcmluZ0VsLCBvcHRzLmxlYXZpbmdFbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNDb21wbGV0ZWQ6IGRpZENvbXBsZXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0cmFuc1xuICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG52YXIgbm9BbmltYXRpb24gPSBmdW5jdGlvbiAob3B0cykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZW50ZXJpbmdFbCwgbGVhdmluZ0VsO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGVudGVyaW5nRWwgPSBvcHRzLmVudGVyaW5nRWw7XG4gICAgICAgICAgICAgICAgbGVhdmluZ0VsID0gb3B0cy5sZWF2aW5nRWw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd2FpdEZvclJlYWR5KG9wdHMsIGZhbHNlKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGZpcmVXaWxsRXZlbnRzKGVudGVyaW5nRWwsIGxlYXZpbmdFbCk7XG4gICAgICAgICAgICAgICAgZmlyZURpZEV2ZW50cyhlbnRlcmluZ0VsLCBsZWF2aW5nRWwpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNDb21wbGV0ZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xudmFyIHdhaXRGb3JSZWFkeSA9IGZ1bmN0aW9uIChvcHRzLCBkZWZhdWx0RGVlcCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGVlcCwgcHJvbWlzZXM7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZGVlcCA9IG9wdHMuZGVlcFdhaXQgIT09IHVuZGVmaW5lZCA/IG9wdHMuZGVlcFdhaXQgOiBkZWZhdWx0RGVlcDtcbiAgICAgICAgICAgICAgICBwcm9taXNlcyA9IGRlZXAgPyBbXG4gICAgICAgICAgICAgICAgICAgIGRlZXBSZWFkeShvcHRzLmVudGVyaW5nRWwpLFxuICAgICAgICAgICAgICAgICAgICBkZWVwUmVhZHkob3B0cy5sZWF2aW5nRWwpLFxuICAgICAgICAgICAgICAgIF0gOiBbXG4gICAgICAgICAgICAgICAgICAgIHNoYWxsb3dSZWFkeShvcHRzLmVudGVyaW5nRWwpLFxuICAgICAgICAgICAgICAgICAgICBzaGFsbG93UmVhZHkob3B0cy5sZWF2aW5nRWwpLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5hbGwocHJvbWlzZXMpXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbm90aWZ5Vmlld1JlYWR5KG9wdHMudmlld0lzUmVhZHksIG9wdHMuZW50ZXJpbmdFbCldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xudmFyIG5vdGlmeVZpZXdSZWFkeSA9IGZ1bmN0aW9uICh2aWV3SXNSZWFkeSwgZW50ZXJpbmdFbCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoIXZpZXdJc1JlYWR5KSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB2aWV3SXNSZWFkeShlbnRlcmluZ0VsKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbnZhciBwbGF5VHJhbnNpdGlvbiA9IGZ1bmN0aW9uICh0cmFucywgb3B0cykge1xuICAgIHZhciBwcm9ncmVzc0NhbGxiYWNrID0gb3B0cy5wcm9ncmVzc0NhbGxiYWNrO1xuICAgIC8vIFRPRE86IFJlbW92ZSBBbmltYXRpb25CdWlsZGVyXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICB0cmFucy5vbkZpbmlzaChmdW5jdGlvbiAoY3VycmVudFN0ZXApIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudFN0ZXAgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShjdXJyZW50U3RlcCA9PT0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0cmFucy5oYXNDb21wbGV0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodHJhbnMuaGFzQ29tcGxldGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gY29vbCwgbGV0J3MgZG8gdGhpcywgc3RhcnQgdGhlIHRyYW5zaXRpb25cbiAgICBpZiAocHJvZ3Jlc3NDYWxsYmFjaykge1xuICAgICAgICAvLyB0aGlzIGlzIGEgc3dpcGUgdG8gZ28gYmFjaywganVzdCBnZXQgdGhlIHRyYW5zaXRpb24gcHJvZ3Jlc3MgcmVhZHlcbiAgICAgICAgLy8ga2ljayBvZmYgdGhlIHN3aXBlIGFuaW1hdGlvbiBzdGFydFxuICAgICAgICB0cmFucy5wcm9ncmVzc1N0YXJ0KHRydWUpO1xuICAgICAgICBwcm9ncmVzc0NhbGxiYWNrKHRyYW5zKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIG9ubHkgdGhlIHRvcCBsZXZlbCB0cmFuc2l0aW9uIHNob3VsZCBhY3R1YWxseSBzdGFydCBcInBsYXlcIlxuICAgICAgICAvLyBraWNrIGl0IG9mZiBhbmQgbGV0IGl0IHBsYXkgdGhyb3VnaFxuICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxuICAgICAgICB0cmFucy5wbGF5KCk7XG4gICAgfVxuICAgIC8vIGNyZWF0ZSBhIGNhbGxiYWNrIGZvciB3aGVuIHRoZSBhbmltYXRpb24gaXMgZG9uZVxuICAgIHJldHVybiBwcm9taXNlO1xufTtcbnZhciBmaXJlV2lsbEV2ZW50cyA9IGZ1bmN0aW9uIChlbnRlcmluZ0VsLCBsZWF2aW5nRWwpIHtcbiAgICBsaWZlY3ljbGUobGVhdmluZ0VsLCBMSUZFQ1lDTEVfV0lMTF9MRUFWRSk7XG4gICAgbGlmZWN5Y2xlKGVudGVyaW5nRWwsIExJRkVDWUNMRV9XSUxMX0VOVEVSKTtcbn07XG52YXIgZmlyZURpZEV2ZW50cyA9IGZ1bmN0aW9uIChlbnRlcmluZ0VsLCBsZWF2aW5nRWwpIHtcbiAgICBsaWZlY3ljbGUoZW50ZXJpbmdFbCwgTElGRUNZQ0xFX0RJRF9FTlRFUik7XG4gICAgbGlmZWN5Y2xlKGxlYXZpbmdFbCwgTElGRUNZQ0xFX0RJRF9MRUFWRSk7XG59O1xudmFyIGxpZmVjeWNsZSA9IGZ1bmN0aW9uIChlbCwgZXZlbnROYW1lKSB7XG4gICAgaWYgKGVsKSB7XG4gICAgICAgIHZhciBldiA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgICB9XG59O1xudmFyIHNoYWxsb3dSZWFkeSA9IGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbCAmJiBlbC5jb21wb25lbnRPblJlYWR5KSB7XG4gICAgICAgIHJldHVybiBlbC5jb21wb25lbnRPblJlYWR5KCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbn07XG52YXIgZGVlcFJlYWR5ID0gZnVuY3Rpb24gKGVsKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbGVtZW50LCBzdGVuY2lsRWw7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGVsO1xuICAgICAgICAgICAgICAgIGlmICghZWxlbWVudCkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgaWYgKCEoZWxlbWVudC5jb21wb25lbnRPblJlYWR5ICE9IG51bGwpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBlbGVtZW50LmNvbXBvbmVudE9uUmVhZHkoKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgc3RlbmNpbEVsID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGlmIChzdGVuY2lsRWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5hbGwoQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5tYXAoZGVlcFJlYWR5KSldO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDQ7XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG52YXIgc2V0UGFnZUhpZGRlbiA9IGZ1bmN0aW9uIChlbCwgaGlkZGVuKSB7XG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnaW9uLXBhZ2UtaGlkZGVuJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlbC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdpb24tcGFnZS1oaWRkZW4nKTtcbiAgICB9XG59O1xudmFyIHNldFpJbmRleCA9IGZ1bmN0aW9uIChlbnRlcmluZ0VsLCBsZWF2aW5nRWwsIGRpcmVjdGlvbikge1xuICAgIGlmIChlbnRlcmluZ0VsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZW50ZXJpbmdFbC5zdHlsZS56SW5kZXggPSAoZGlyZWN0aW9uID09PSAnYmFjaycpXG4gICAgICAgICAgICA/ICc5OSdcbiAgICAgICAgICAgIDogJzEwMSc7XG4gICAgfVxuICAgIGlmIChsZWF2aW5nRWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsZWF2aW5nRWwuc3R5bGUuekluZGV4ID0gJzEwMCc7XG4gICAgfVxufTtcbnZhciBnZXRJb25QYWdlRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpb24tcGFnZScpKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICB2YXIgaW9uUGFnZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignOnNjb3BlID4gLmlvbi1wYWdlLCA6c2NvcGUgPiBpb24tbmF2LCA6c2NvcGUgPiBpb24tdGFicycpO1xuICAgIGlmIChpb25QYWdlKSB7XG4gICAgICAgIHJldHVybiBpb25QYWdlO1xuICAgIH1cbiAgICAvLyBpZGssIHJldHVybiB0aGUgb3JpZ2luYWwgZWxlbWVudCBzbyBhdCBsZWFzdCBzb21ldGhpbmcgYW5pbWF0ZXMgYW5kIHdlIGRvbid0IGhhdmUgYSBudWxsIHBvaW50ZXJcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5leHBvcnQgeyBkZWVwUmVhZHkgYXMgZCwgZ2V0SW9uUGFnZUVsZW1lbnQgYXMgZywgbGlmZWN5Y2xlIGFzIGwsIHNldFBhZ2VIaWRkZW4gYXMgcywgdHJhbnNpdGlvbiBhcyB0IH07XG4iXSwic291cmNlUm9vdCI6IiJ9