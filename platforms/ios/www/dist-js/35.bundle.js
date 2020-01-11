(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js ***!
  \*****************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var dfChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (el) {
    return (el.children != null) ? el.children : el.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-refresher_2-ios.entry.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-refresher_2-ios.entry.js ***!
  \****************************************************************************/
/*! exports provided: ion_refresher, ion_refresher_content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_refresher", function() { return Refresher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_refresher_content", function() { return RefresherContent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-3476b023.js */ "./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js");




var Refresher = /** @class */ (function () {
    function class_1(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.appliedStyles = false;
        this.didStart = false;
        this.progress = 0;
        /**
         * The current state which the refresher is in. The refresher's states include:
         *
         * - `inactive` - The refresher is not being pulled down or refreshing and is currently hidden.
         * - `pulling` - The user is actively pulling down the refresher, but has not reached the point yet that if the user lets go, it'll refresh.
         * - `cancelling` - The user pulled down the refresher and let go, but did not pull down far enough to kick off the `refreshing` state. After letting go, the refresher is in the `cancelling` state while it is closing, and will go back to the `inactive` state once closed.
         * - `ready` - The user has pulled down the refresher far enough that if they let go, it'll begin the `refreshing` state.
         * - `refreshing` - The refresher is actively waiting on the async operation to end. Once the refresh handler calls `complete()` it will begin the `completing` state.
         * - `completing` - The `refreshing` state has finished and the refresher is in the way of closing itself. Once closed, the refresher will go back to the `inactive` state.
         */
        this.state = 1 /* Inactive */;
        /**
         * The minimum distance the user must pull down until the
         * refresher will go into the `refreshing` state.
         */
        this.pullMin = 60;
        /**
         * The maximum distance of the pull until the refresher
         * will automatically go into the `refreshing` state.
         * Defaults to the result of `pullMin + 60`.
         */
        this.pullMax = this.pullMin + 60;
        /**
         * Time it takes to close the refresher.
         */
        this.closeDuration = '280ms';
        /**
         * Time it takes the refresher to to snap back to the `refreshing` state.
         */
        this.snapbackDuration = '280ms';
        /**
         * How much to multiply the pull speed by. To slow the pull animation down,
         * pass a number less than `1`. To speed up the pull, pass a number greater
         * than `1`. The default value is `1` which is equal to the speed of the cursor.
         * If a negative value is passed in, the factor will be `1` instead.
         *
         * For example: If the value passed is `1.2` and the content is dragged by
         * `10` pixels, instead of `10` pixels the content will be pulled by `12` pixels
         * (an increase of 20 percent). If the value passed is `0.8`, the dragged amount
         * will be `8` pixels, less than the amount the cursor has moved.
         */
        this.pullFactor = 1;
        /**
         * If `true`, the refresher will be hidden.
         */
        this.disabled = false;
        this.ionRefresh = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionRefresh", 7);
        this.ionPull = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionPull", 7);
        this.ionStart = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionStart", 7);
    }
    class_1.prototype.disabledChanged = function () {
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    };
    class_1.prototype.connectedCallback = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var contentEl, _a, _b;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (this.el.getAttribute('slot') !== 'fixed') {
                            console.error('Make sure you use: <ion-refresher slot="fixed">');
                            return [2 /*return*/];
                        }
                        contentEl = this.el.closest('ion-content');
                        if (!contentEl) {
                            console.error('<ion-refresher> must be used inside an <ion-content>');
                            return [2 /*return*/];
                        }
                        _a = this;
                        return [4 /*yield*/, contentEl.getScrollElement()];
                    case 1:
                        _a.scrollEl = _c.sent();
                        _b = this;
                        return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "./node_modules/@ionic/core/dist/esm-es5/index-624eea58.js"))];
                    case 2:
                        _b.gesture = (_c.sent()).createGesture({
                            el: contentEl,
                            gestureName: 'refresher',
                            gesturePriority: 10,
                            direction: 'y',
                            threshold: 20,
                            passive: false,
                            canStart: function () { return _this.canStart(); },
                            onStart: function () { return _this.onStart(); },
                            onMove: function (ev) { return _this.onMove(ev); },
                            onEnd: function () { return _this.onEnd(); },
                        });
                        this.disabledChanged();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.disconnectedCallback = function () {
        this.scrollEl = undefined;
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    };
    /**
     * Call `complete()` when your async operation has completed.
     * For example, the `refreshing` state is while the app is performing
     * an asynchronous operation, such as receiving more data from an
     * AJAX request. Once the data has been received, you then call this
     * method to signify that the refreshing has completed and to close
     * the refresher. This method also changes the refresher's state from
     * `refreshing` to `completing`.
     */
    class_1.prototype.complete = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.close(32 /* Completing */, '120ms');
                return [2 /*return*/];
            });
        });
    };
    /**
     * Changes the refresher's state from `refreshing` to `cancelling`.
     */
    class_1.prototype.cancel = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.close(16 /* Cancelling */, '');
                return [2 /*return*/];
            });
        });
    };
    /**
     * A number representing how far down the user has pulled.
     * The number `0` represents the user hasn't pulled down at all. The
     * number `1`, and anything greater than `1`, represents that the user
     * has pulled far enough down that when they let go then the refresh will
     * happen. If they let go and the number is less than `1`, then the
     * refresh will not happen, and the content will return to it's original
     * position.
     */
    class_1.prototype.getProgress = function () {
        return Promise.resolve(this.progress);
    };
    class_1.prototype.canStart = function () {
        if (!this.scrollEl) {
            return false;
        }
        if (this.state !== 1 /* Inactive */) {
            return false;
        }
        // if the scrollTop is greater than zero then it's
        // not possible to pull the content down yet
        if (this.scrollEl.scrollTop > 0) {
            return false;
        }
        return true;
    };
    class_1.prototype.onStart = function () {
        this.progress = 0;
        this.state = 1 /* Inactive */;
    };
    class_1.prototype.onMove = function (detail) {
        if (!this.scrollEl) {
            return;
        }
        // this method can get called like a bazillion times per second,
        // so it's built to be as efficient as possible, and does its
        // best to do any DOM read/writes only when absolutely necessary
        // if multi-touch then get out immediately
        var ev = detail.event;
        if (ev.touches && ev.touches.length > 1) {
            return;
        }
        // do nothing if it's actively refreshing
        // or it's in the way of closing
        // or this was never a startY
        if ((this.state & 56 /* _BUSY_ */) !== 0) {
            return;
        }
        var pullFactor = (Number.isNaN(this.pullFactor) || this.pullFactor < 0) ? 1 : this.pullFactor;
        var deltaY = detail.deltaY * pullFactor;
        // don't bother if they're scrolling up
        // and have not already started dragging
        if (deltaY <= 0) {
            // the current Y is higher than the starting Y
            // so they scrolled up enough to be ignored
            this.progress = 0;
            this.state = 1 /* Inactive */;
            if (this.appliedStyles) {
                // reset the styles only if they were applied
                this.setCss(0, '', false, '');
                return;
            }
            return;
        }
        if (this.state === 1 /* Inactive */) {
            // this refresh is not already actively pulling down
            // get the content's scrollTop
            var scrollHostScrollTop = this.scrollEl.scrollTop;
            // if the scrollTop is greater than zero then it's
            // not possible to pull the content down yet
            if (scrollHostScrollTop > 0) {
                this.progress = 0;
                return;
            }
            // content scrolled all the way to the top, and dragging down
            this.state = 2 /* Pulling */;
        }
        // prevent native scroll events
        if (ev.cancelable) {
            ev.preventDefault();
        }
        // the refresher is actively pulling at this point
        // move the scroll element within the content element
        this.setCss(deltaY, '0ms', true, '');
        if (deltaY === 0) {
            // don't continue if there's no delta yet
            this.progress = 0;
            return;
        }
        var pullMin = this.pullMin;
        // set pull progress
        this.progress = deltaY / pullMin;
        // emit "start" if it hasn't started yet
        if (!this.didStart) {
            this.didStart = true;
            this.ionStart.emit();
        }
        // emit "pulling" on every move
        this.ionPull.emit();
        // do nothing if the delta is less than the pull threshold
        if (deltaY < pullMin) {
            // ensure it stays in the pulling state, cuz its not ready yet
            this.state = 2 /* Pulling */;
            return;
        }
        if (deltaY > this.pullMax) {
            // they pulled farther than the max, so kick off the refresh
            this.beginRefresh();
            return;
        }
        // pulled farther than the pull min!!
        // it is now in the `ready` state!!
        // if they let go then it'll refresh, kerpow!!
        this.state = 4 /* Ready */;
        return;
    };
    class_1.prototype.onEnd = function () {
        // only run in a zone when absolutely necessary
        if (this.state === 4 /* Ready */) {
            // they pulled down far enough, so it's ready to refresh
            this.beginRefresh();
        }
        else if (this.state === 2 /* Pulling */) {
            // they were pulling down, but didn't pull down far enough
            // set the content back to it's original location
            // and close the refresher
            // set that the refresh is actively cancelling
            this.cancel();
        }
    };
    class_1.prototype.beginRefresh = function () {
        // assumes we're already back in a zone
        // they pulled down far enough, so it's ready to refresh
        this.state = 8 /* Refreshing */;
        // place the content in a hangout position while it thinks
        this.setCss(this.pullMin, this.snapbackDuration, true, '');
        // emit "refresh" because it was pulled down far enough
        // and they let go to begin refreshing
        this.ionRefresh.emit({
            complete: this.complete.bind(this)
        });
    };
    class_1.prototype.close = function (state, delay) {
        var _this = this;
        // create fallback timer incase something goes wrong with transitionEnd event
        setTimeout(function () {
            _this.state = 1 /* Inactive */;
            _this.progress = 0;
            _this.didStart = false;
            _this.setCss(0, '0ms', false, '');
        }, 600);
        // reset set the styles on the scroll element
        // set that the refresh is actively cancelling/completing
        this.state = state;
        this.setCss(0, this.closeDuration, true, delay);
        // TODO: stop gesture
    };
    class_1.prototype.setCss = function (y, duration, overflowVisible, delay) {
        var _this = this;
        this.appliedStyles = (y > 0);
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["w"])(function () {
            if (_this.scrollEl) {
                var style = _this.scrollEl.style;
                style.transform = ((y > 0) ? "translateY(" + y + "px) translateZ(0px)" : 'translateZ(0px)');
                style.transitionDuration = duration;
                style.transitionDelay = delay;
                style.overflow = (overflowVisible ? 'hidden' : '');
            }
        });
    };
    class_1.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { slot: "fixed", class: (_a = {},
                _a[mode] = true,
                // Used internally for styling
                _a["refresher-" + mode] = true,
                _a['refresher-active'] = this.state !== 1 /* Inactive */,
                _a['refresher-pulling'] = this.state === 2 /* Pulling */,
                _a['refresher-ready'] = this.state === 4 /* Ready */,
                _a['refresher-refreshing'] = this.state === 8 /* Refreshing */,
                _a['refresher-cancelling'] = this.state === 16 /* Cancelling */,
                _a['refresher-completing'] = this.state === 32 /* Completing */,
                _a) }));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "disabled": ["disabledChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;z-index:-1}:host-context([dir=rtl]) ion-refresher,[dir=rtl] ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon,[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-icon,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-ios .refresher-refreshing .spinner-crescent circle,.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line{stroke:var(--ion-text-color,#000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var RefresherContent = /** @class */ (function () {
    function RefresherContent(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
    }
    RefresherContent.prototype.componentWillLoad = function () {
        if (this.pullingIcon === undefined) {
            this.pullingIcon = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"].get('refreshingIcon', 'arrow-down');
        }
        if (this.refreshingSpinner === undefined) {
            var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
            this.refreshingSpinner = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"].get('refreshingSpinner', _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"].get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
        }
    };
    RefresherContent.prototype.render = function () {
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "refresher-pulling" }, this.pullingIcon &&
            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "refresher-pulling-icon" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon", { icon: this.pullingIcon, lazy: false })), this.pullingText &&
            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "refresher-pulling-text", innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_3__["s"])(this.pullingText) })), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "refresher-refreshing" }, this.refreshingSpinner &&
            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "refresher-refreshing-icon" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-spinner", { name: this.refreshingSpinner })), this.refreshingText &&
            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "refresher-refreshing-text", innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_3__["s"])(this.refreshingText) }))));
    };
    return RefresherContent;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2luZGV4LTM0NzZiMDIzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvaW9uLXJlZnJlc2hlcl8yLWlvcy5lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxtQkFBbUI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxtQ0FBbUM7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdDQUFnQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0M7Ozs7Ozs7Ozs7Ozs7QUM5R2xDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQzhGO0FBQzFGO0FBQ1U7QUFDN0Q7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDJEQUFXO0FBQ3JDLHVCQUF1QiwyREFBVztBQUNsQyx3QkFBd0IsMkRBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVEQUFTO0FBQ3hCO0FBQ0E7QUFDQSxtQkFBbUIseURBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsNkpBQTZCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQseUJBQXlCLEVBQUU7QUFDOUUsa0RBQWtELHdCQUF3QixFQUFFO0FBQzVFLG1EQUFtRCx5QkFBeUIsRUFBRTtBQUM5RSxnREFBZ0Qsc0JBQXNCLEVBQUU7QUFDeEUseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1REFBUztBQUN4QixtQkFBbUIseURBQVc7QUFDOUI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdURBQVM7QUFDeEIsbUJBQW1CLHlEQUFXO0FBQzlCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBUztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQVU7QUFDN0IsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRywrQkFBK0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSwwQkFBMEIsUUFBUSwyREFBVSxPQUFPLEVBQUU7QUFDckQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsdUJBQXVCLE9BQU8sTUFBTSxhQUFhLGtCQUFrQixXQUFXLFlBQVksV0FBVywrREFBK0QsV0FBVyxZQUFZLFFBQVEsK0JBQStCLGNBQWMsc0JBQXNCLG9CQUFvQixhQUFhLDBCQUEwQixzQkFBc0IscUJBQXFCLHVCQUF1QixZQUFZLHlDQUF5QyxhQUFhLFdBQVcsbURBQW1ELGdDQUFnQyx3QkFBd0IsdUJBQXVCLGVBQWUsZUFBZSxrQkFBa0IsNEtBQTRLLDZDQUE2QyxxQ0FBcUMsbURBQW1ELGVBQWUsa0JBQWtCLHNIQUFzSCxjQUFjLCtEQUErRCxpQ0FBaUMseUJBQXlCLGlJQUFpSSxjQUFjLG9FQUFvRSwyQkFBMkIsbUJBQW1CLGtFQUFrRSxjQUFjLHVFQUF1RSwyQkFBMkIsbUJBQW1CLGtLQUFrSyxpQ0FBaUMsOExBQThMLGtDQUFrQyxvTEFBb0wsZ0NBQWdDLEVBQUUsRUFBRTtBQUM1eUU7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFEQUFNO0FBQ3JDO0FBQ0E7QUFDQSx1QkFBdUIsMkRBQVU7QUFDakMscUNBQXFDLHFEQUFNLDBCQUEwQixxREFBTTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLFFBQVEsMkRBQVUsUUFBUSxFQUFFLDJEQUFDLFNBQVMsNkJBQTZCO0FBQzVGLFlBQVksMkRBQUMsU0FBUyxrQ0FBa0MsRUFBRSwyREFBQyxjQUFjLHNDQUFzQztBQUMvRyxZQUFZLDJEQUFDLFNBQVMsNkNBQTZDLDREQUFpQixvQkFBb0IsSUFBSSwyREFBQyxTQUFTLGdDQUFnQztBQUN0SixZQUFZLDJEQUFDLFNBQVMscUNBQXFDLEVBQUUsMkRBQUMsaUJBQWlCLCtCQUErQjtBQUM5RyxZQUFZLDJEQUFDLFNBQVMsZ0RBQWdELDREQUFpQix1QkFBdUI7QUFDOUc7QUFDQTtBQUNBLENBQUM7QUFDZ0YiLCJmaWxlIjoiMzUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBEb2VzIGEgc2ltcGxlIHNhbml0aXphdGlvbiBvZiBhbGwgZWxlbWVudHNcbiAqIGluIGFuIHVudHJ1c3RlZCBzdHJpbmdcbiAqL1xudmFyIHNhbml0aXplRE9NU3RyaW5nID0gZnVuY3Rpb24gKHVudHJ1c3RlZFN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgdW50cnVzdGVkU3RyaW5nICE9PSAnc3RyaW5nJyB8fCB1bnRydXN0ZWRTdHJpbmcgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdW50cnVzdGVkU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGUgYSBkb2N1bWVudCBmcmFnbWVudFxuICAgICAgICAgKiBzZXBhcmF0ZSBmcm9tIHRoZSBtYWluIERPTSxcbiAgICAgICAgICogY3JlYXRlIGEgZGl2IHRvIGRvIG91ciB3b3JrIGluXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgZG9jdW1lbnRGcmFnbWVudF8xID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICB2YXIgd29ya2luZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkb2N1bWVudEZyYWdtZW50XzEuYXBwZW5kQ2hpbGQod29ya2luZ0Rpdik7XG4gICAgICAgIHdvcmtpbmdEaXYuaW5uZXJIVE1MID0gdW50cnVzdGVkU3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIGFueSBlbGVtZW50c1xuICAgICAgICAgKiB0aGF0IGFyZSBibG9ja2VkXG4gICAgICAgICAqL1xuICAgICAgICBibG9ja2VkVGFncy5mb3JFYWNoKGZ1bmN0aW9uIChibG9ja2VkVGFnKSB7XG4gICAgICAgICAgICB2YXIgZ2V0RWxlbWVudHNUb1JlbW92ZSA9IGRvY3VtZW50RnJhZ21lbnRfMS5xdWVyeVNlbGVjdG9yQWxsKGJsb2NrZWRUYWcpO1xuICAgICAgICAgICAgZm9yICh2YXIgZWxlbWVudEluZGV4ID0gZ2V0RWxlbWVudHNUb1JlbW92ZS5sZW5ndGggLSAxOyBlbGVtZW50SW5kZXggPj0gMDsgZWxlbWVudEluZGV4LS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IGdldEVsZW1lbnRzVG9SZW1vdmVbZWxlbWVudEluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50RnJhZ21lbnRfMS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogV2Ugc3RpbGwgbmVlZCB0byBzYW5pdGl6ZVxuICAgICAgICAgICAgICAgICAqIHRoZSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgKiBhcyB0aGV5IGFyZSBsZWZ0IGJlaGluZFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZEVsZW1lbnRzID0gZ2V0RWxlbWVudENoaWxkcmVuKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGNoaWxkSW5kZXggPSAwOyBjaGlsZEluZGV4IDwgY2hpbGRFbGVtZW50cy5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZUVsZW1lbnQoY2hpbGRFbGVtZW50c1tjaGlsZEluZGV4XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdvIHRocm91Z2ggcmVtYWluaW5nIGVsZW1lbnRzIGFuZCByZW1vdmVcbiAgICAgICAgICogbm9uLWFsbG93ZWQgYXR0cmlic1xuICAgICAgICAgKi9cbiAgICAgICAgLy8gSUUgZG9lcyBub3Qgc3VwcG9ydCAuY2hpbGRyZW4gb24gZG9jdW1lbnQgZnJhZ21lbnRzLCBvbmx5IC5jaGlsZE5vZGVzXG4gICAgICAgIHZhciBkZkNoaWxkcmVuID0gZ2V0RWxlbWVudENoaWxkcmVuKGRvY3VtZW50RnJhZ21lbnRfMSk7XG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICBmb3IgKHZhciBjaGlsZEluZGV4ID0gMDsgY2hpbGRJbmRleCA8IGRmQ2hpbGRyZW4ubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcbiAgICAgICAgICAgIHNhbml0aXplRWxlbWVudChkZkNoaWxkcmVuW2NoaWxkSW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBcHBlbmQgZG9jdW1lbnQgZnJhZ21lbnQgdG8gZGl2XG4gICAgICAgIHZhciBmcmFnbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmcmFnbWVudERpdi5hcHBlbmRDaGlsZChkb2N1bWVudEZyYWdtZW50XzEpO1xuICAgICAgICAvLyBGaXJzdCBjaGlsZCBpcyBhbHdheXMgdGhlIGRpdiB3ZSBkaWQgb3VyIHdvcmsgaW5cbiAgICAgICAgdmFyIGdldElubmVyRGl2ID0gZnJhZ21lbnREaXYucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gICAgICAgIHJldHVybiAoZ2V0SW5uZXJEaXYgIT09IG51bGwpID8gZ2V0SW5uZXJEaXYuaW5uZXJIVE1MIDogZnJhZ21lbnREaXYuaW5uZXJIVE1MO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbn07XG4vKipcbiAqIENsZWFuIHVwIGN1cnJlbnQgZWxlbWVudCBiYXNlZCBvbiBhbGxvd2VkIGF0dHJpYnV0ZXNcbiAqIGFuZCB0aGVuIHJlY3Vyc2l2ZWx5IGRpZyBkb3duIGludG8gYW55IGNoaWxkIGVsZW1lbnRzIHRvXG4gKiBjbGVhbiB0aG9zZSB1cCBhcyB3ZWxsXG4gKi9cbnZhciBzYW5pdGl6ZUVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vIElFIHVzZXMgY2hpbGROb2Rlcywgc28gaWdub3JlIG5vZGVzIHRoYXQgYXJlIG5vdCBlbGVtZW50c1xuICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBhdHRyaWJ1dGUgPSBlbGVtZW50LmF0dHJpYnV0ZXMuaXRlbShpKTtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGUubmFtZTtcbiAgICAgICAgLy8gcmVtb3ZlIG5vbi1hbGxvd2VkIGF0dHJpYnNcbiAgICAgICAgaWYgKCFhbGxvd2VkQXR0cmlidXRlcy5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNsZWFuIHVwIGFueSBhbGxvd2VkIGF0dHJpYnNcbiAgICAgICAgLy8gdGhhdCBhdHRlbXB0IHRvIGRvIGFueSBKUyBmdW5ueS1idXNpbmVzc1xuICAgICAgICB2YXIgYXR0cmlidXRlVmFsdWUgPSBhdHRyaWJ1dGUudmFsdWU7XG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICBpZiAoYXR0cmlidXRlVmFsdWUgIT0gbnVsbCAmJiBhdHRyaWJ1dGVWYWx1ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdqYXZhc2NyaXB0OicpKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTYW5pdGl6ZSBhbnkgbmVzdGVkIGNoaWxkcmVuXG4gICAgICovXG4gICAgdmFyIGNoaWxkRWxlbWVudHMgPSBnZXRFbGVtZW50Q2hpbGRyZW4oZWxlbWVudCk7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNhbml0aXplRWxlbWVudChjaGlsZEVsZW1lbnRzW2ldKTtcbiAgICB9XG59O1xuLyoqXG4gKiBJRSBkb2Vzbid0IGFsd2F5cyBzdXBwb3J0IC5jaGlsZHJlblxuICogc28gd2UgcmV2ZXJ0IHRvIC5jaGlsZE5vZGVzIGluc3RlYWRcbiAqL1xudmFyIGdldEVsZW1lbnRDaGlsZHJlbiA9IGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiAoZWwuY2hpbGRyZW4gIT0gbnVsbCkgPyBlbC5jaGlsZHJlbiA6IGVsLmNoaWxkTm9kZXM7XG59O1xudmFyIGFsbG93ZWRBdHRyaWJ1dGVzID0gWydjbGFzcycsICdpZCcsICdocmVmJywgJ3NyYycsICduYW1lJywgJ3Nsb3QnXTtcbnZhciBibG9ja2VkVGFncyA9IFsnc2NyaXB0JywgJ3N0eWxlJywgJ2lmcmFtZScsICdtZXRhJywgJ2xpbmsnLCAnb2JqZWN0JywgJ2VtYmVkJ107XG5leHBvcnQgeyBzYW5pdGl6ZURPTVN0cmluZyBhcyBzIH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGQgYXMgY3JlYXRlRXZlbnQsIHcgYXMgd3JpdGVUYXNrLCBjIGFzIGdldElvbk1vZGUsIGgsIGUgYXMgZ2V0RWxlbWVudCwgSCBhcyBIb3N0IH0gZnJvbSAnLi9jb3JlLWZlZWVmZjBkLmpzJztcbmltcG9ydCB7IGIgYXMgY29uZmlnIH0gZnJvbSAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgcyBhcyBzYW5pdGl6ZURPTVN0cmluZyB9IGZyb20gJy4vaW5kZXgtMzQ3NmIwMjMuanMnO1xudmFyIFJlZnJlc2hlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18xKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5hcHBsaWVkU3R5bGVzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlkU3RhcnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3VycmVudCBzdGF0ZSB3aGljaCB0aGUgcmVmcmVzaGVyIGlzIGluLiBUaGUgcmVmcmVzaGVyJ3Mgc3RhdGVzIGluY2x1ZGU6XG4gICAgICAgICAqXG4gICAgICAgICAqIC0gYGluYWN0aXZlYCAtIFRoZSByZWZyZXNoZXIgaXMgbm90IGJlaW5nIHB1bGxlZCBkb3duIG9yIHJlZnJlc2hpbmcgYW5kIGlzIGN1cnJlbnRseSBoaWRkZW4uXG4gICAgICAgICAqIC0gYHB1bGxpbmdgIC0gVGhlIHVzZXIgaXMgYWN0aXZlbHkgcHVsbGluZyBkb3duIHRoZSByZWZyZXNoZXIsIGJ1dCBoYXMgbm90IHJlYWNoZWQgdGhlIHBvaW50IHlldCB0aGF0IGlmIHRoZSB1c2VyIGxldHMgZ28sIGl0J2xsIHJlZnJlc2guXG4gICAgICAgICAqIC0gYGNhbmNlbGxpbmdgIC0gVGhlIHVzZXIgcHVsbGVkIGRvd24gdGhlIHJlZnJlc2hlciBhbmQgbGV0IGdvLCBidXQgZGlkIG5vdCBwdWxsIGRvd24gZmFyIGVub3VnaCB0byBraWNrIG9mZiB0aGUgYHJlZnJlc2hpbmdgIHN0YXRlLiBBZnRlciBsZXR0aW5nIGdvLCB0aGUgcmVmcmVzaGVyIGlzIGluIHRoZSBgY2FuY2VsbGluZ2Agc3RhdGUgd2hpbGUgaXQgaXMgY2xvc2luZywgYW5kIHdpbGwgZ28gYmFjayB0byB0aGUgYGluYWN0aXZlYCBzdGF0ZSBvbmNlIGNsb3NlZC5cbiAgICAgICAgICogLSBgcmVhZHlgIC0gVGhlIHVzZXIgaGFzIHB1bGxlZCBkb3duIHRoZSByZWZyZXNoZXIgZmFyIGVub3VnaCB0aGF0IGlmIHRoZXkgbGV0IGdvLCBpdCdsbCBiZWdpbiB0aGUgYHJlZnJlc2hpbmdgIHN0YXRlLlxuICAgICAgICAgKiAtIGByZWZyZXNoaW5nYCAtIFRoZSByZWZyZXNoZXIgaXMgYWN0aXZlbHkgd2FpdGluZyBvbiB0aGUgYXN5bmMgb3BlcmF0aW9uIHRvIGVuZC4gT25jZSB0aGUgcmVmcmVzaCBoYW5kbGVyIGNhbGxzIGBjb21wbGV0ZSgpYCBpdCB3aWxsIGJlZ2luIHRoZSBgY29tcGxldGluZ2Agc3RhdGUuXG4gICAgICAgICAqIC0gYGNvbXBsZXRpbmdgIC0gVGhlIGByZWZyZXNoaW5nYCBzdGF0ZSBoYXMgZmluaXNoZWQgYW5kIHRoZSByZWZyZXNoZXIgaXMgaW4gdGhlIHdheSBvZiBjbG9zaW5nIGl0c2VsZi4gT25jZSBjbG9zZWQsIHRoZSByZWZyZXNoZXIgd2lsbCBnbyBiYWNrIHRvIHRoZSBgaW5hY3RpdmVgIHN0YXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdGF0ZSA9IDEgLyogSW5hY3RpdmUgKi87XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbWluaW11bSBkaXN0YW5jZSB0aGUgdXNlciBtdXN0IHB1bGwgZG93biB1bnRpbCB0aGVcbiAgICAgICAgICogcmVmcmVzaGVyIHdpbGwgZ28gaW50byB0aGUgYHJlZnJlc2hpbmdgIHN0YXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wdWxsTWluID0gNjA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbWF4aW11bSBkaXN0YW5jZSBvZiB0aGUgcHVsbCB1bnRpbCB0aGUgcmVmcmVzaGVyXG4gICAgICAgICAqIHdpbGwgYXV0b21hdGljYWxseSBnbyBpbnRvIHRoZSBgcmVmcmVzaGluZ2Agc3RhdGUuXG4gICAgICAgICAqIERlZmF1bHRzIHRvIHRoZSByZXN1bHQgb2YgYHB1bGxNaW4gKyA2MGAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnB1bGxNYXggPSB0aGlzLnB1bGxNaW4gKyA2MDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRpbWUgaXQgdGFrZXMgdG8gY2xvc2UgdGhlIHJlZnJlc2hlci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2xvc2VEdXJhdGlvbiA9ICcyODBtcyc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaW1lIGl0IHRha2VzIHRoZSByZWZyZXNoZXIgdG8gdG8gc25hcCBiYWNrIHRvIHRoZSBgcmVmcmVzaGluZ2Agc3RhdGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNuYXBiYWNrRHVyYXRpb24gPSAnMjgwbXMnO1xuICAgICAgICAvKipcbiAgICAgICAgICogSG93IG11Y2ggdG8gbXVsdGlwbHkgdGhlIHB1bGwgc3BlZWQgYnkuIFRvIHNsb3cgdGhlIHB1bGwgYW5pbWF0aW9uIGRvd24sXG4gICAgICAgICAqIHBhc3MgYSBudW1iZXIgbGVzcyB0aGFuIGAxYC4gVG8gc3BlZWQgdXAgdGhlIHB1bGwsIHBhc3MgYSBudW1iZXIgZ3JlYXRlclxuICAgICAgICAgKiB0aGFuIGAxYC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgYDFgIHdoaWNoIGlzIGVxdWFsIHRvIHRoZSBzcGVlZCBvZiB0aGUgY3Vyc29yLlxuICAgICAgICAgKiBJZiBhIG5lZ2F0aXZlIHZhbHVlIGlzIHBhc3NlZCBpbiwgdGhlIGZhY3RvciB3aWxsIGJlIGAxYCBpbnN0ZWFkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBGb3IgZXhhbXBsZTogSWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBgMS4yYCBhbmQgdGhlIGNvbnRlbnQgaXMgZHJhZ2dlZCBieVxuICAgICAgICAgKiBgMTBgIHBpeGVscywgaW5zdGVhZCBvZiBgMTBgIHBpeGVscyB0aGUgY29udGVudCB3aWxsIGJlIHB1bGxlZCBieSBgMTJgIHBpeGVsc1xuICAgICAgICAgKiAoYW4gaW5jcmVhc2Ugb2YgMjAgcGVyY2VudCkuIElmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYDAuOGAsIHRoZSBkcmFnZ2VkIGFtb3VudFxuICAgICAgICAgKiB3aWxsIGJlIGA4YCBwaXhlbHMsIGxlc3MgdGhhbiB0aGUgYW1vdW50IHRoZSBjdXJzb3IgaGFzIG1vdmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wdWxsRmFjdG9yID0gMTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHJlZnJlc2hlciB3aWxsIGJlIGhpZGRlbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pb25SZWZyZXNoID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25SZWZyZXNoXCIsIDcpO1xuICAgICAgICB0aGlzLmlvblB1bGwgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblB1bGxcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU3RhcnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblN0YXJ0XCIsIDcpO1xuICAgIH1cbiAgICBjbGFzc18xLnByb3RvdHlwZS5kaXNhYmxlZENoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZS5zZXREaXNhYmxlZCh0aGlzLmRpc2FibGVkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb250ZW50RWwsIF9hLCBfYjtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3Nsb3QnKSAhPT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ01ha2Ugc3VyZSB5b3UgdXNlOiA8aW9uLXJlZnJlc2hlciBzbG90PVwiZml4ZWRcIj4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RWwgPSB0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1jb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRlbnRFbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJzxpb24tcmVmcmVzaGVyPiBtdXN0IGJlIHVzZWQgaW5zaWRlIGFuIDxpb24tY29udGVudD4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBjb250ZW50RWwuZ2V0U2Nyb2xsRWxlbWVudCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2Nyb2xsRWwgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbXBvcnQoJy4vaW5kZXgtNjI0ZWVhNTguanMnKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmdlc3R1cmUgPSAoX2Muc2VudCgpKS5jcmVhdGVHZXN0dXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbDogY29udGVudEVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlc3R1cmVOYW1lOiAncmVmcmVzaGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXN0dXJlUHJpb3JpdHk6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3knLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuU3RhcnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmNhblN0YXJ0KCk7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdGFydDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMub25TdGFydCgpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZTogZnVuY3Rpb24gKGV2KSB7IHJldHVybiBfdGhpcy5vbk1vdmUoZXYpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRW5kOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5vbkVuZCgpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkQ2hhbmdlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNjcm9sbEVsID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsIGBjb21wbGV0ZSgpYCB3aGVuIHlvdXIgYXN5bmMgb3BlcmF0aW9uIGhhcyBjb21wbGV0ZWQuXG4gICAgICogRm9yIGV4YW1wbGUsIHRoZSBgcmVmcmVzaGluZ2Agc3RhdGUgaXMgd2hpbGUgdGhlIGFwcCBpcyBwZXJmb3JtaW5nXG4gICAgICogYW4gYXN5bmNocm9ub3VzIG9wZXJhdGlvbiwgc3VjaCBhcyByZWNlaXZpbmcgbW9yZSBkYXRhIGZyb20gYW5cbiAgICAgKiBBSkFYIHJlcXVlc3QuIE9uY2UgdGhlIGRhdGEgaGFzIGJlZW4gcmVjZWl2ZWQsIHlvdSB0aGVuIGNhbGwgdGhpc1xuICAgICAqIG1ldGhvZCB0byBzaWduaWZ5IHRoYXQgdGhlIHJlZnJlc2hpbmcgaGFzIGNvbXBsZXRlZCBhbmQgdG8gY2xvc2VcbiAgICAgKiB0aGUgcmVmcmVzaGVyLiBUaGlzIG1ldGhvZCBhbHNvIGNoYW5nZXMgdGhlIHJlZnJlc2hlcidzIHN0YXRlIGZyb21cbiAgICAgKiBgcmVmcmVzaGluZ2AgdG8gYGNvbXBsZXRpbmdgLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgzMiAvKiBDb21wbGV0aW5nICovLCAnMTIwbXMnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGFuZ2VzIHRoZSByZWZyZXNoZXIncyBzdGF0ZSBmcm9tIGByZWZyZXNoaW5nYCB0byBgY2FuY2VsbGluZ2AuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgxNiAvKiBDYW5jZWxsaW5nICovLCAnJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQSBudW1iZXIgcmVwcmVzZW50aW5nIGhvdyBmYXIgZG93biB0aGUgdXNlciBoYXMgcHVsbGVkLlxuICAgICAqIFRoZSBudW1iZXIgYDBgIHJlcHJlc2VudHMgdGhlIHVzZXIgaGFzbid0IHB1bGxlZCBkb3duIGF0IGFsbC4gVGhlXG4gICAgICogbnVtYmVyIGAxYCwgYW5kIGFueXRoaW5nIGdyZWF0ZXIgdGhhbiBgMWAsIHJlcHJlc2VudHMgdGhhdCB0aGUgdXNlclxuICAgICAqIGhhcyBwdWxsZWQgZmFyIGVub3VnaCBkb3duIHRoYXQgd2hlbiB0aGV5IGxldCBnbyB0aGVuIHRoZSByZWZyZXNoIHdpbGxcbiAgICAgKiBoYXBwZW4uIElmIHRoZXkgbGV0IGdvIGFuZCB0aGUgbnVtYmVyIGlzIGxlc3MgdGhhbiBgMWAsIHRoZW4gdGhlXG4gICAgICogcmVmcmVzaCB3aWxsIG5vdCBoYXBwZW4sIGFuZCB0aGUgY29udGVudCB3aWxsIHJldHVybiB0byBpdCdzIG9yaWdpbmFsXG4gICAgICogcG9zaXRpb24uXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZ2V0UHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5wcm9ncmVzcyk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jYW5TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbEVsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IDEgLyogSW5hY3RpdmUgKi8pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgc2Nyb2xsVG9wIGlzIGdyZWF0ZXIgdGhhbiB6ZXJvIHRoZW4gaXQnc1xuICAgICAgICAvLyBub3QgcG9zc2libGUgdG8gcHVsbCB0aGUgY29udGVudCBkb3duIHlldFxuICAgICAgICBpZiAodGhpcy5zY3JvbGxFbC5zY3JvbGxUb3AgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDEgLyogSW5hY3RpdmUgKi87XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5vbk1vdmUgPSBmdW5jdGlvbiAoZGV0YWlsKSB7XG4gICAgICAgIGlmICghdGhpcy5zY3JvbGxFbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMgbWV0aG9kIGNhbiBnZXQgY2FsbGVkIGxpa2UgYSBiYXppbGxpb24gdGltZXMgcGVyIHNlY29uZCxcbiAgICAgICAgLy8gc28gaXQncyBidWlsdCB0byBiZSBhcyBlZmZpY2llbnQgYXMgcG9zc2libGUsIGFuZCBkb2VzIGl0c1xuICAgICAgICAvLyBiZXN0IHRvIGRvIGFueSBET00gcmVhZC93cml0ZXMgb25seSB3aGVuIGFic29sdXRlbHkgbmVjZXNzYXJ5XG4gICAgICAgIC8vIGlmIG11bHRpLXRvdWNoIHRoZW4gZ2V0IG91dCBpbW1lZGlhdGVseVxuICAgICAgICB2YXIgZXYgPSBkZXRhaWwuZXZlbnQ7XG4gICAgICAgIGlmIChldi50b3VjaGVzICYmIGV2LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRvIG5vdGhpbmcgaWYgaXQncyBhY3RpdmVseSByZWZyZXNoaW5nXG4gICAgICAgIC8vIG9yIGl0J3MgaW4gdGhlIHdheSBvZiBjbG9zaW5nXG4gICAgICAgIC8vIG9yIHRoaXMgd2FzIG5ldmVyIGEgc3RhcnRZXG4gICAgICAgIGlmICgodGhpcy5zdGF0ZSAmIDU2IC8qIF9CVVNZXyAqLykgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHVsbEZhY3RvciA9IChOdW1iZXIuaXNOYU4odGhpcy5wdWxsRmFjdG9yKSB8fCB0aGlzLnB1bGxGYWN0b3IgPCAwKSA/IDEgOiB0aGlzLnB1bGxGYWN0b3I7XG4gICAgICAgIHZhciBkZWx0YVkgPSBkZXRhaWwuZGVsdGFZICogcHVsbEZhY3RvcjtcbiAgICAgICAgLy8gZG9uJ3QgYm90aGVyIGlmIHRoZXkncmUgc2Nyb2xsaW5nIHVwXG4gICAgICAgIC8vIGFuZCBoYXZlIG5vdCBhbHJlYWR5IHN0YXJ0ZWQgZHJhZ2dpbmdcbiAgICAgICAgaWYgKGRlbHRhWSA8PSAwKSB7XG4gICAgICAgICAgICAvLyB0aGUgY3VycmVudCBZIGlzIGhpZ2hlciB0aGFuIHRoZSBzdGFydGluZyBZXG4gICAgICAgICAgICAvLyBzbyB0aGV5IHNjcm9sbGVkIHVwIGVub3VnaCB0byBiZSBpZ25vcmVkXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAxIC8qIEluYWN0aXZlICovO1xuICAgICAgICAgICAgaWYgKHRoaXMuYXBwbGllZFN0eWxlcykge1xuICAgICAgICAgICAgICAgIC8vIHJlc2V0IHRoZSBzdHlsZXMgb25seSBpZiB0aGV5IHdlcmUgYXBwbGllZFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3NzKDAsICcnLCBmYWxzZSwgJycpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gMSAvKiBJbmFjdGl2ZSAqLykge1xuICAgICAgICAgICAgLy8gdGhpcyByZWZyZXNoIGlzIG5vdCBhbHJlYWR5IGFjdGl2ZWx5IHB1bGxpbmcgZG93blxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBjb250ZW50J3Mgc2Nyb2xsVG9wXG4gICAgICAgICAgICB2YXIgc2Nyb2xsSG9zdFNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsRWwuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgLy8gaWYgdGhlIHNjcm9sbFRvcCBpcyBncmVhdGVyIHRoYW4gemVybyB0aGVuIGl0J3NcbiAgICAgICAgICAgIC8vIG5vdCBwb3NzaWJsZSB0byBwdWxsIHRoZSBjb250ZW50IGRvd24geWV0XG4gICAgICAgICAgICBpZiAoc2Nyb2xsSG9zdFNjcm9sbFRvcCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb250ZW50IHNjcm9sbGVkIGFsbCB0aGUgd2F5IHRvIHRoZSB0b3AsIGFuZCBkcmFnZ2luZyBkb3duXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gMiAvKiBQdWxsaW5nICovO1xuICAgICAgICB9XG4gICAgICAgIC8vIHByZXZlbnQgbmF0aXZlIHNjcm9sbCBldmVudHNcbiAgICAgICAgaWYgKGV2LmNhbmNlbGFibGUpIHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhlIHJlZnJlc2hlciBpcyBhY3RpdmVseSBwdWxsaW5nIGF0IHRoaXMgcG9pbnRcbiAgICAgICAgLy8gbW92ZSB0aGUgc2Nyb2xsIGVsZW1lbnQgd2l0aGluIHRoZSBjb250ZW50IGVsZW1lbnRcbiAgICAgICAgdGhpcy5zZXRDc3MoZGVsdGFZLCAnMG1zJywgdHJ1ZSwgJycpO1xuICAgICAgICBpZiAoZGVsdGFZID09PSAwKSB7XG4gICAgICAgICAgICAvLyBkb24ndCBjb250aW51ZSBpZiB0aGVyZSdzIG5vIGRlbHRhIHlldFxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHB1bGxNaW4gPSB0aGlzLnB1bGxNaW47XG4gICAgICAgIC8vIHNldCBwdWxsIHByb2dyZXNzXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBkZWx0YVkgLyBwdWxsTWluO1xuICAgICAgICAvLyBlbWl0IFwic3RhcnRcIiBpZiBpdCBoYXNuJ3Qgc3RhcnRlZCB5ZXRcbiAgICAgICAgaWYgKCF0aGlzLmRpZFN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLmRpZFN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaW9uU3RhcnQuZW1pdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVtaXQgXCJwdWxsaW5nXCIgb24gZXZlcnkgbW92ZVxuICAgICAgICB0aGlzLmlvblB1bGwuZW1pdCgpO1xuICAgICAgICAvLyBkbyBub3RoaW5nIGlmIHRoZSBkZWx0YSBpcyBsZXNzIHRoYW4gdGhlIHB1bGwgdGhyZXNob2xkXG4gICAgICAgIGlmIChkZWx0YVkgPCBwdWxsTWluKSB7XG4gICAgICAgICAgICAvLyBlbnN1cmUgaXQgc3RheXMgaW4gdGhlIHB1bGxpbmcgc3RhdGUsIGN1eiBpdHMgbm90IHJlYWR5IHlldFxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IDIgLyogUHVsbGluZyAqLztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsdGFZID4gdGhpcy5wdWxsTWF4KSB7XG4gICAgICAgICAgICAvLyB0aGV5IHB1bGxlZCBmYXJ0aGVyIHRoYW4gdGhlIG1heCwgc28ga2ljayBvZmYgdGhlIHJlZnJlc2hcbiAgICAgICAgICAgIHRoaXMuYmVnaW5SZWZyZXNoKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gcHVsbGVkIGZhcnRoZXIgdGhhbiB0aGUgcHVsbCBtaW4hIVxuICAgICAgICAvLyBpdCBpcyBub3cgaW4gdGhlIGByZWFkeWAgc3RhdGUhIVxuICAgICAgICAvLyBpZiB0aGV5IGxldCBnbyB0aGVuIGl0J2xsIHJlZnJlc2gsIGtlcnBvdyEhXG4gICAgICAgIHRoaXMuc3RhdGUgPSA0IC8qIFJlYWR5ICovO1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5vbkVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gb25seSBydW4gaW4gYSB6b25lIHdoZW4gYWJzb2x1dGVseSBuZWNlc3NhcnlcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IDQgLyogUmVhZHkgKi8pIHtcbiAgICAgICAgICAgIC8vIHRoZXkgcHVsbGVkIGRvd24gZmFyIGVub3VnaCwgc28gaXQncyByZWFkeSB0byByZWZyZXNoXG4gICAgICAgICAgICB0aGlzLmJlZ2luUmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IDIgLyogUHVsbGluZyAqLykge1xuICAgICAgICAgICAgLy8gdGhleSB3ZXJlIHB1bGxpbmcgZG93biwgYnV0IGRpZG4ndCBwdWxsIGRvd24gZmFyIGVub3VnaFxuICAgICAgICAgICAgLy8gc2V0IHRoZSBjb250ZW50IGJhY2sgdG8gaXQncyBvcmlnaW5hbCBsb2NhdGlvblxuICAgICAgICAgICAgLy8gYW5kIGNsb3NlIHRoZSByZWZyZXNoZXJcbiAgICAgICAgICAgIC8vIHNldCB0aGF0IHRoZSByZWZyZXNoIGlzIGFjdGl2ZWx5IGNhbmNlbGxpbmdcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmJlZ2luUmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gYXNzdW1lcyB3ZSdyZSBhbHJlYWR5IGJhY2sgaW4gYSB6b25lXG4gICAgICAgIC8vIHRoZXkgcHVsbGVkIGRvd24gZmFyIGVub3VnaCwgc28gaXQncyByZWFkeSB0byByZWZyZXNoXG4gICAgICAgIHRoaXMuc3RhdGUgPSA4IC8qIFJlZnJlc2hpbmcgKi87XG4gICAgICAgIC8vIHBsYWNlIHRoZSBjb250ZW50IGluIGEgaGFuZ291dCBwb3NpdGlvbiB3aGlsZSBpdCB0aGlua3NcbiAgICAgICAgdGhpcy5zZXRDc3ModGhpcy5wdWxsTWluLCB0aGlzLnNuYXBiYWNrRHVyYXRpb24sIHRydWUsICcnKTtcbiAgICAgICAgLy8gZW1pdCBcInJlZnJlc2hcIiBiZWNhdXNlIGl0IHdhcyBwdWxsZWQgZG93biBmYXIgZW5vdWdoXG4gICAgICAgIC8vIGFuZCB0aGV5IGxldCBnbyB0byBiZWdpbiByZWZyZXNoaW5nXG4gICAgICAgIHRoaXMuaW9uUmVmcmVzaC5lbWl0KHtcbiAgICAgICAgICAgIGNvbXBsZXRlOiB0aGlzLmNvbXBsZXRlLmJpbmQodGhpcylcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gY3JlYXRlIGZhbGxiYWNrIHRpbWVyIGluY2FzZSBzb21ldGhpbmcgZ29lcyB3cm9uZyB3aXRoIHRyYW5zaXRpb25FbmQgZXZlbnRcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zdGF0ZSA9IDEgLyogSW5hY3RpdmUgKi87XG4gICAgICAgICAgICBfdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICBfdGhpcy5kaWRTdGFydCA9IGZhbHNlO1xuICAgICAgICAgICAgX3RoaXMuc2V0Q3NzKDAsICcwbXMnLCBmYWxzZSwgJycpO1xuICAgICAgICB9LCA2MDApO1xuICAgICAgICAvLyByZXNldCBzZXQgdGhlIHN0eWxlcyBvbiB0aGUgc2Nyb2xsIGVsZW1lbnRcbiAgICAgICAgLy8gc2V0IHRoYXQgdGhlIHJlZnJlc2ggaXMgYWN0aXZlbHkgY2FuY2VsbGluZy9jb21wbGV0aW5nXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5zZXRDc3MoMCwgdGhpcy5jbG9zZUR1cmF0aW9uLCB0cnVlLCBkZWxheSk7XG4gICAgICAgIC8vIFRPRE86IHN0b3AgZ2VzdHVyZVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc2V0Q3NzID0gZnVuY3Rpb24gKHksIGR1cmF0aW9uLCBvdmVyZmxvd1Zpc2libGUsIGRlbGF5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYXBwbGllZFN0eWxlcyA9ICh5ID4gMCk7XG4gICAgICAgIHdyaXRlVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuc2Nyb2xsRWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBfdGhpcy5zY3JvbGxFbC5zdHlsZTtcbiAgICAgICAgICAgICAgICBzdHlsZS50cmFuc2Zvcm0gPSAoKHkgPiAwKSA/IFwidHJhbnNsYXRlWShcIiArIHkgKyBcInB4KSB0cmFuc2xhdGVaKDBweClcIiA6ICd0cmFuc2xhdGVaKDBweCknKTtcbiAgICAgICAgICAgICAgICBzdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgICAgICAgICBzdHlsZS50cmFuc2l0aW9uRGVsYXkgPSBkZWxheTtcbiAgICAgICAgICAgICAgICBzdHlsZS5vdmVyZmxvdyA9IChvdmVyZmxvd1Zpc2libGUgPyAnaGlkZGVuJyA6ICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBzbG90OiBcImZpeGVkXCIsIGNsYXNzOiAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVttb2RlXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gVXNlZCBpbnRlcm5hbGx5IGZvciBzdHlsaW5nXG4gICAgICAgICAgICAgICAgX2FbXCJyZWZyZXNoZXItXCIgKyBtb2RlXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2FbJ3JlZnJlc2hlci1hY3RpdmUnXSA9IHRoaXMuc3RhdGUgIT09IDEgLyogSW5hY3RpdmUgKi8sXG4gICAgICAgICAgICAgICAgX2FbJ3JlZnJlc2hlci1wdWxsaW5nJ10gPSB0aGlzLnN0YXRlID09PSAyIC8qIFB1bGxpbmcgKi8sXG4gICAgICAgICAgICAgICAgX2FbJ3JlZnJlc2hlci1yZWFkeSddID0gdGhpcy5zdGF0ZSA9PT0gNCAvKiBSZWFkeSAqLyxcbiAgICAgICAgICAgICAgICBfYVsncmVmcmVzaGVyLXJlZnJlc2hpbmcnXSA9IHRoaXMuc3RhdGUgPT09IDggLyogUmVmcmVzaGluZyAqLyxcbiAgICAgICAgICAgICAgICBfYVsncmVmcmVzaGVyLWNhbmNlbGxpbmcnXSA9IHRoaXMuc3RhdGUgPT09IDE2IC8qIENhbmNlbGxpbmcgKi8sXG4gICAgICAgICAgICAgICAgX2FbJ3JlZnJlc2hlci1jb21wbGV0aW5nJ10gPSB0aGlzLnN0YXRlID09PSAzMiAvKiBDb21wbGV0aW5nICovLFxuICAgICAgICAgICAgICAgIF9hKSB9KSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMS5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJpb24tcmVmcmVzaGVye2xlZnQ6MDt0b3A6MDtkaXNwbGF5Om5vbmU7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6NjBweDt6LWluZGV4Oi0xfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBpb24tcmVmcmVzaGVyLFtkaXI9cnRsXSBpb24tcmVmcmVzaGVye2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6MH1pb24tcmVmcmVzaGVyLnJlZnJlc2hlci1hY3RpdmV7ZGlzcGxheTpibG9ja31pb24tcmVmcmVzaGVyLWNvbnRlbnR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtoZWlnaHQ6MTAwJX0ucmVmcmVzaGVyLXB1bGxpbmcsLnJlZnJlc2hlci1yZWZyZXNoaW5ne2Rpc3BsYXk6bm9uZTt3aWR0aDoxMDAlfS5yZWZyZXNoZXItcHVsbGluZy1pY29uLC5yZWZyZXNoZXItcmVmcmVzaGluZy1pY29uey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7LXdlYmtpdC10cmFuc2l0aW9uOi4yczt0cmFuc2l0aW9uOi4ycztmb250LXNpemU6MzBweDt0ZXh0LWFsaWduOmNlbnRlcn06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnJlZnJlc2hlci1wdWxsaW5nLWljb24sOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5yZWZyZXNoZXItcmVmcmVzaGluZy1pY29uLFtkaXI9cnRsXSAucmVmcmVzaGVyLXB1bGxpbmctaWNvbixbZGlyPXJ0bF0gLnJlZnJlc2hlci1yZWZyZXNoaW5nLWljb257LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcik7dHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBjZW50ZXIpfS5yZWZyZXNoZXItcHVsbGluZy10ZXh0LC5yZWZyZXNoZXItcmVmcmVzaGluZy10ZXh0e2ZvbnQtc2l6ZToxNnB4O3RleHQtYWxpZ246Y2VudGVyfS5yZWZyZXNoZXItcHVsbGluZyBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1wdWxsaW5nLC5yZWZyZXNoZXItcmVhZHkgaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcHVsbGluZ3tkaXNwbGF5OmJsb2NrfS5yZWZyZXNoZXItcmVhZHkgaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcHVsbGluZy1pY29uey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX0ucmVmcmVzaGVyLWNhbmNlbGxpbmcgaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcHVsbGluZywucmVmcmVzaGVyLXJlZnJlc2hpbmcgaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcmVmcmVzaGluZ3tkaXNwbGF5OmJsb2NrfS5yZWZyZXNoZXItY2FuY2VsbGluZyBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1wdWxsaW5nLWljb257LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfS5yZWZyZXNoZXItY29tcGxldGluZyBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1yZWZyZXNoaW5ne2Rpc3BsYXk6YmxvY2t9LnJlZnJlc2hlci1jb21wbGV0aW5nIGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXJlZnJlc2hpbmctaWNvbnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9LnJlZnJlc2hlci1pb3MgLnJlZnJlc2hlci1wdWxsaW5nLWljb24sLnJlZnJlc2hlci1pb3MgLnJlZnJlc2hlci1wdWxsaW5nLXRleHQsLnJlZnJlc2hlci1pb3MgLnJlZnJlc2hlci1yZWZyZXNoaW5nLWljb24sLnJlZnJlc2hlci1pb3MgLnJlZnJlc2hlci1yZWZyZXNoaW5nLXRleHR7Y29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCl9LnJlZnJlc2hlci1pb3MgLnJlZnJlc2hlci1yZWZyZXNoaW5nIC5zcGlubmVyLWNyZXNjZW50IGNpcmNsZSwucmVmcmVzaGVyLWlvcyAucmVmcmVzaGVyLXJlZnJlc2hpbmcgLnNwaW5uZXItbGluZXMtaW9zIGxpbmUsLnJlZnJlc2hlci1pb3MgLnJlZnJlc2hlci1yZWZyZXNoaW5nIC5zcGlubmVyLWxpbmVzLXNtYWxsLWlvcyBsaW5le3N0cm9rZTp2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKX0ucmVmcmVzaGVyLWlvcyAucmVmcmVzaGVyLXJlZnJlc2hpbmcgLnNwaW5uZXItYnViYmxlcyBjaXJjbGUsLnJlZnJlc2hlci1pb3MgLnJlZnJlc2hlci1yZWZyZXNoaW5nIC5zcGlubmVyLWNpcmNsZXMgY2lyY2xlLC5yZWZyZXNoZXItaW9zIC5yZWZyZXNoZXItcmVmcmVzaGluZyAuc3Bpbm5lci1kb3RzIGNpcmNsZXtmaWxsOnZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NfMTtcbn0oKSk7XG52YXIgUmVmcmVzaGVyQ29udGVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZWZyZXNoZXJDb250ZW50KGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB9XG4gICAgUmVmcmVzaGVyQ29udGVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnB1bGxpbmdJY29uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHVsbGluZ0ljb24gPSBjb25maWcuZ2V0KCdyZWZyZXNoaW5nSWNvbicsICdhcnJvdy1kb3duJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVmcmVzaGluZ1NwaW5uZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoaW5nU3Bpbm5lciA9IGNvbmZpZy5nZXQoJ3JlZnJlc2hpbmdTcGlubmVyJywgY29uZmlnLmdldCgnc3Bpbm5lcicsIG1vZGUgPT09ICdpb3MnID8gJ2xpbmVzJyA6ICdjcmVzY2VudCcpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVmcmVzaGVyQ29udGVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczogZ2V0SW9uTW9kZSh0aGlzKSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicmVmcmVzaGVyLXB1bGxpbmdcIiB9LCB0aGlzLnB1bGxpbmdJY29uICYmXG4gICAgICAgICAgICBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicmVmcmVzaGVyLXB1bGxpbmctaWNvblwiIH0sIGgoXCJpb24taWNvblwiLCB7IGljb246IHRoaXMucHVsbGluZ0ljb24sIGxhenk6IGZhbHNlIH0pKSwgdGhpcy5wdWxsaW5nVGV4dCAmJlxuICAgICAgICAgICAgaChcImRpdlwiLCB7IGNsYXNzOiBcInJlZnJlc2hlci1wdWxsaW5nLXRleHRcIiwgaW5uZXJIVE1MOiBzYW5pdGl6ZURPTVN0cmluZyh0aGlzLnB1bGxpbmdUZXh0KSB9KSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJyZWZyZXNoZXItcmVmcmVzaGluZ1wiIH0sIHRoaXMucmVmcmVzaGluZ1NwaW5uZXIgJiZcbiAgICAgICAgICAgIGgoXCJkaXZcIiwgeyBjbGFzczogXCJyZWZyZXNoZXItcmVmcmVzaGluZy1pY29uXCIgfSwgaChcImlvbi1zcGlubmVyXCIsIHsgbmFtZTogdGhpcy5yZWZyZXNoaW5nU3Bpbm5lciB9KSksIHRoaXMucmVmcmVzaGluZ1RleHQgJiZcbiAgICAgICAgICAgIGgoXCJkaXZcIiwgeyBjbGFzczogXCJyZWZyZXNoZXItcmVmcmVzaGluZy10ZXh0XCIsIGlubmVySFRNTDogc2FuaXRpemVET01TdHJpbmcodGhpcy5yZWZyZXNoaW5nVGV4dCkgfSkpKSk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVmcmVzaGVyQ29udGVudDtcbn0oKSk7XG5leHBvcnQgeyBSZWZyZXNoZXIgYXMgaW9uX3JlZnJlc2hlciwgUmVmcmVzaGVyQ29udGVudCBhcyBpb25fcmVmcmVzaGVyX2NvbnRlbnQgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=