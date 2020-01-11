(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

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

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-refresher_2-md.entry.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-refresher_2-md.entry.js ***!
  \***************************************************************************/
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
        get: function () { return "ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;z-index:-1}:host-context([dir=rtl]) ion-refresher,[dir=rtl] ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon,[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-icon,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-crescent circle,.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line{stroke:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}"; },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2luZGV4LTM0NzZiMDIzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvaW9uLXJlZnJlc2hlcl8yLW1kLmVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLG1CQUFtQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG1DQUFtQztBQUMzRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0NBQWdDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQzs7Ozs7Ozs7Ozs7OztBQzlHbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDOEY7QUFDMUY7QUFDVTtBQUM3RDtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkRBQVc7QUFDckMsdUJBQXVCLDJEQUFXO0FBQ2xDLHdCQUF3QiwyREFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdURBQVM7QUFDeEI7QUFDQTtBQUNBLG1CQUFtQix5REFBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyw2SkFBNkI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCx5QkFBeUIsRUFBRTtBQUM5RSxrREFBa0Qsd0JBQXdCLEVBQUU7QUFDNUUsbURBQW1ELHlCQUF5QixFQUFFO0FBQzlFLGdEQUFnRCxzQkFBc0IsRUFBRTtBQUN4RSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVEQUFTO0FBQ3hCLG1CQUFtQix5REFBVztBQUM5QjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1REFBUztBQUN4QixtQkFBbUIseURBQVc7QUFDOUI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFTO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBVTtBQUM3QixnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLCtCQUErQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLDBCQUEwQixRQUFRLDJEQUFVLE9BQU8sRUFBRTtBQUNyRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQix1QkFBdUIsT0FBTyxNQUFNLGFBQWEsa0JBQWtCLFdBQVcsWUFBWSxXQUFXLCtEQUErRCxXQUFXLFlBQVksUUFBUSwrQkFBK0IsY0FBYyxzQkFBc0Isb0JBQW9CLGFBQWEsMEJBQTBCLHNCQUFzQixxQkFBcUIsdUJBQXVCLFlBQVkseUNBQXlDLGFBQWEsV0FBVyxtREFBbUQsZ0NBQWdDLHdCQUF3Qix1QkFBdUIsZUFBZSxlQUFlLGtCQUFrQiw0S0FBNEssNkNBQTZDLHFDQUFxQyxtREFBbUQsZUFBZSxrQkFBa0Isc0hBQXNILGNBQWMsK0RBQStELGlDQUFpQyx5QkFBeUIsaUlBQWlJLGNBQWMsb0VBQW9FLDJCQUEyQixtQkFBbUIsa0VBQWtFLGNBQWMsdUVBQXVFLDJCQUEyQixtQkFBbUIsOEpBQThKLGlDQUFpQyx5TEFBeUwsa0NBQWtDLGlMQUFpTCxnQ0FBZ0MsRUFBRSxFQUFFO0FBQ2h5RTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscURBQU07QUFDckM7QUFDQTtBQUNBLHVCQUF1QiwyREFBVTtBQUNqQyxxQ0FBcUMscURBQU0sMEJBQTBCLHFEQUFNO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUcsUUFBUSwyREFBVSxRQUFRLEVBQUUsMkRBQUMsU0FBUyw2QkFBNkI7QUFDNUYsWUFBWSwyREFBQyxTQUFTLGtDQUFrQyxFQUFFLDJEQUFDLGNBQWMsc0NBQXNDO0FBQy9HLFlBQVksMkRBQUMsU0FBUyw2Q0FBNkMsNERBQWlCLG9CQUFvQixJQUFJLDJEQUFDLFNBQVMsZ0NBQWdDO0FBQ3RKLFlBQVksMkRBQUMsU0FBUyxxQ0FBcUMsRUFBRSwyREFBQyxpQkFBaUIsK0JBQStCO0FBQzlHLFlBQVksMkRBQUMsU0FBUyxnREFBZ0QsNERBQWlCLHVCQUF1QjtBQUM5RztBQUNBO0FBQ0EsQ0FBQztBQUNnRiIsImZpbGUiOiIzNi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIERvZXMgYSBzaW1wbGUgc2FuaXRpemF0aW9uIG9mIGFsbCBlbGVtZW50c1xuICogaW4gYW4gdW50cnVzdGVkIHN0cmluZ1xuICovXG52YXIgc2FuaXRpemVET01TdHJpbmcgPSBmdW5jdGlvbiAodW50cnVzdGVkU3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiB1bnRydXN0ZWRTdHJpbmcgIT09ICdzdHJpbmcnIHx8IHVudHJ1c3RlZFN0cmluZyA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiB1bnRydXN0ZWRTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50XG4gICAgICAgICAqIHNlcGFyYXRlIGZyb20gdGhlIG1haW4gRE9NLFxuICAgICAgICAgKiBjcmVhdGUgYSBkaXYgdG8gZG8gb3VyIHdvcmsgaW5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBkb2N1bWVudEZyYWdtZW50XzEgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHZhciB3b3JraW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRvY3VtZW50RnJhZ21lbnRfMS5hcHBlbmRDaGlsZCh3b3JraW5nRGl2KTtcbiAgICAgICAgd29ya2luZ0Rpdi5pbm5lckhUTUwgPSB1bnRydXN0ZWRTdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgYW55IGVsZW1lbnRzXG4gICAgICAgICAqIHRoYXQgYXJlIGJsb2NrZWRcbiAgICAgICAgICovXG4gICAgICAgIGJsb2NrZWRUYWdzLmZvckVhY2goZnVuY3Rpb24gKGJsb2NrZWRUYWcpIHtcbiAgICAgICAgICAgIHZhciBnZXRFbGVtZW50c1RvUmVtb3ZlID0gZG9jdW1lbnRGcmFnbWVudF8xLnF1ZXJ5U2VsZWN0b3JBbGwoYmxvY2tlZFRhZyk7XG4gICAgICAgICAgICBmb3IgKHZhciBlbGVtZW50SW5kZXggPSBnZXRFbGVtZW50c1RvUmVtb3ZlLmxlbmd0aCAtIDE7IGVsZW1lbnRJbmRleCA+PSAwOyBlbGVtZW50SW5kZXgtLSkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZ2V0RWxlbWVudHNUb1JlbW92ZVtlbGVtZW50SW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRGcmFnbWVudF8xLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBXZSBzdGlsbCBuZWVkIHRvIHNhbml0aXplXG4gICAgICAgICAgICAgICAgICogdGhlIGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudFxuICAgICAgICAgICAgICAgICAqIGFzIHRoZXkgYXJlIGxlZnQgYmVoaW5kXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkRWxlbWVudHMgPSBnZXRFbGVtZW50Q2hpbGRyZW4oZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY2hpbGRJbmRleCA9IDA7IGNoaWxkSW5kZXggPCBjaGlsZEVsZW1lbnRzLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNhbml0aXplRWxlbWVudChjaGlsZEVsZW1lbnRzW2NoaWxkSW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogR28gdGhyb3VnaCByZW1haW5pbmcgZWxlbWVudHMgYW5kIHJlbW92ZVxuICAgICAgICAgKiBub24tYWxsb3dlZCBhdHRyaWJzXG4gICAgICAgICAqL1xuICAgICAgICAvLyBJRSBkb2VzIG5vdCBzdXBwb3J0IC5jaGlsZHJlbiBvbiBkb2N1bWVudCBmcmFnbWVudHMsIG9ubHkgLmNoaWxkTm9kZXNcbiAgICAgICAgdmFyIGRmQ2hpbGRyZW4gPSBnZXRFbGVtZW50Q2hpbGRyZW4oZG9jdW1lbnRGcmFnbWVudF8xKTtcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgIGZvciAodmFyIGNoaWxkSW5kZXggPSAwOyBjaGlsZEluZGV4IDwgZGZDaGlsZHJlbi5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xuICAgICAgICAgICAgc2FuaXRpemVFbGVtZW50KGRmQ2hpbGRyZW5bY2hpbGRJbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFwcGVuZCBkb2N1bWVudCBmcmFnbWVudCB0byBkaXZcbiAgICAgICAgdmFyIGZyYWdtZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZyYWdtZW50RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50RnJhZ21lbnRfMSk7XG4gICAgICAgIC8vIEZpcnN0IGNoaWxkIGlzIGFsd2F5cyB0aGUgZGl2IHdlIGRpZCBvdXIgd29yayBpblxuICAgICAgICB2YXIgZ2V0SW5uZXJEaXYgPSBmcmFnbWVudERpdi5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICAgICAgcmV0dXJuIChnZXRJbm5lckRpdiAhPT0gbnVsbCkgPyBnZXRJbm5lckRpdi5pbm5lckhUTUwgOiBmcmFnbWVudERpdi5pbm5lckhUTUw7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufTtcbi8qKlxuICogQ2xlYW4gdXAgY3VycmVudCBlbGVtZW50IGJhc2VkIG9uIGFsbG93ZWQgYXR0cmlidXRlc1xuICogYW5kIHRoZW4gcmVjdXJzaXZlbHkgZGlnIGRvd24gaW50byBhbnkgY2hpbGQgZWxlbWVudHMgdG9cbiAqIGNsZWFuIHRob3NlIHVwIGFzIHdlbGxcbiAqL1xudmFyIHNhbml0aXplRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgLy8gSUUgdXNlcyBjaGlsZE5vZGVzLCBzbyBpZ25vcmUgbm9kZXMgdGhhdCBhcmUgbm90IGVsZW1lbnRzXG4gICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZSA9IGVsZW1lbnQuYXR0cmlidXRlcy5pdGVtKGkpO1xuICAgICAgICB2YXIgYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZS5uYW1lO1xuICAgICAgICAvLyByZW1vdmUgbm9uLWFsbG93ZWQgYXR0cmlic1xuICAgICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2xlYW4gdXAgYW55IGFsbG93ZWQgYXR0cmlic1xuICAgICAgICAvLyB0aGF0IGF0dGVtcHQgdG8gZG8gYW55IEpTIGZ1bm55LWJ1c2luZXNzXG4gICAgICAgIHZhciBhdHRyaWJ1dGVWYWx1ZSA9IGF0dHJpYnV0ZS52YWx1ZTtcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgIGlmIChhdHRyaWJ1dGVWYWx1ZSAhPSBudWxsICYmIGF0dHJpYnV0ZVZhbHVlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2phdmFzY3JpcHQ6JykpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNhbml0aXplIGFueSBuZXN0ZWQgY2hpbGRyZW5cbiAgICAgKi9cbiAgICB2YXIgY2hpbGRFbGVtZW50cyA9IGdldEVsZW1lbnRDaGlsZHJlbihlbGVtZW50KTtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2FuaXRpemVFbGVtZW50KGNoaWxkRWxlbWVudHNbaV0pO1xuICAgIH1cbn07XG4vKipcbiAqIElFIGRvZXNuJ3QgYWx3YXlzIHN1cHBvcnQgLmNoaWxkcmVuXG4gKiBzbyB3ZSByZXZlcnQgdG8gLmNoaWxkTm9kZXMgaW5zdGVhZFxuICovXG52YXIgZ2V0RWxlbWVudENoaWxkcmVuID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgcmV0dXJuIChlbC5jaGlsZHJlbiAhPSBudWxsKSA/IGVsLmNoaWxkcmVuIDogZWwuY2hpbGROb2Rlcztcbn07XG52YXIgYWxsb3dlZEF0dHJpYnV0ZXMgPSBbJ2NsYXNzJywgJ2lkJywgJ2hyZWYnLCAnc3JjJywgJ25hbWUnLCAnc2xvdCddO1xudmFyIGJsb2NrZWRUYWdzID0gWydzY3JpcHQnLCAnc3R5bGUnLCAnaWZyYW1lJywgJ21ldGEnLCAnbGluaycsICdvYmplY3QnLCAnZW1iZWQnXTtcbmV4cG9ydCB7IHNhbml0aXplRE9NU3RyaW5nIGFzIHMgfTtcbiIsImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgZCBhcyBjcmVhdGVFdmVudCwgdyBhcyB3cml0ZVRhc2ssIGMgYXMgZ2V0SW9uTW9kZSwgaCwgZSBhcyBnZXRFbGVtZW50LCBIIGFzIEhvc3QgfSBmcm9tICcuL2NvcmUtZmVlZWZmMGQuanMnO1xuaW1wb3J0IHsgYiBhcyBjb25maWcgfSBmcm9tICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBzIGFzIHNhbml0aXplRE9NU3RyaW5nIH0gZnJvbSAnLi9pbmRleC0zNDc2YjAyMy5qcyc7XG52YXIgUmVmcmVzaGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzEoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmFwcGxpZWRTdHlsZXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaWRTdGFydCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjdXJyZW50IHN0YXRlIHdoaWNoIHRoZSByZWZyZXNoZXIgaXMgaW4uIFRoZSByZWZyZXNoZXIncyBzdGF0ZXMgaW5jbHVkZTpcbiAgICAgICAgICpcbiAgICAgICAgICogLSBgaW5hY3RpdmVgIC0gVGhlIHJlZnJlc2hlciBpcyBub3QgYmVpbmcgcHVsbGVkIGRvd24gb3IgcmVmcmVzaGluZyBhbmQgaXMgY3VycmVudGx5IGhpZGRlbi5cbiAgICAgICAgICogLSBgcHVsbGluZ2AgLSBUaGUgdXNlciBpcyBhY3RpdmVseSBwdWxsaW5nIGRvd24gdGhlIHJlZnJlc2hlciwgYnV0IGhhcyBub3QgcmVhY2hlZCB0aGUgcG9pbnQgeWV0IHRoYXQgaWYgdGhlIHVzZXIgbGV0cyBnbywgaXQnbGwgcmVmcmVzaC5cbiAgICAgICAgICogLSBgY2FuY2VsbGluZ2AgLSBUaGUgdXNlciBwdWxsZWQgZG93biB0aGUgcmVmcmVzaGVyIGFuZCBsZXQgZ28sIGJ1dCBkaWQgbm90IHB1bGwgZG93biBmYXIgZW5vdWdoIHRvIGtpY2sgb2ZmIHRoZSBgcmVmcmVzaGluZ2Agc3RhdGUuIEFmdGVyIGxldHRpbmcgZ28sIHRoZSByZWZyZXNoZXIgaXMgaW4gdGhlIGBjYW5jZWxsaW5nYCBzdGF0ZSB3aGlsZSBpdCBpcyBjbG9zaW5nLCBhbmQgd2lsbCBnbyBiYWNrIHRvIHRoZSBgaW5hY3RpdmVgIHN0YXRlIG9uY2UgY2xvc2VkLlxuICAgICAgICAgKiAtIGByZWFkeWAgLSBUaGUgdXNlciBoYXMgcHVsbGVkIGRvd24gdGhlIHJlZnJlc2hlciBmYXIgZW5vdWdoIHRoYXQgaWYgdGhleSBsZXQgZ28sIGl0J2xsIGJlZ2luIHRoZSBgcmVmcmVzaGluZ2Agc3RhdGUuXG4gICAgICAgICAqIC0gYHJlZnJlc2hpbmdgIC0gVGhlIHJlZnJlc2hlciBpcyBhY3RpdmVseSB3YWl0aW5nIG9uIHRoZSBhc3luYyBvcGVyYXRpb24gdG8gZW5kLiBPbmNlIHRoZSByZWZyZXNoIGhhbmRsZXIgY2FsbHMgYGNvbXBsZXRlKClgIGl0IHdpbGwgYmVnaW4gdGhlIGBjb21wbGV0aW5nYCBzdGF0ZS5cbiAgICAgICAgICogLSBgY29tcGxldGluZ2AgLSBUaGUgYHJlZnJlc2hpbmdgIHN0YXRlIGhhcyBmaW5pc2hlZCBhbmQgdGhlIHJlZnJlc2hlciBpcyBpbiB0aGUgd2F5IG9mIGNsb3NpbmcgaXRzZWxmLiBPbmNlIGNsb3NlZCwgdGhlIHJlZnJlc2hlciB3aWxsIGdvIGJhY2sgdG8gdGhlIGBpbmFjdGl2ZWAgc3RhdGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlID0gMSAvKiBJbmFjdGl2ZSAqLztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtaW5pbXVtIGRpc3RhbmNlIHRoZSB1c2VyIG11c3QgcHVsbCBkb3duIHVudGlsIHRoZVxuICAgICAgICAgKiByZWZyZXNoZXIgd2lsbCBnbyBpbnRvIHRoZSBgcmVmcmVzaGluZ2Agc3RhdGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnB1bGxNaW4gPSA2MDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtYXhpbXVtIGRpc3RhbmNlIG9mIHRoZSBwdWxsIHVudGlsIHRoZSByZWZyZXNoZXJcbiAgICAgICAgICogd2lsbCBhdXRvbWF0aWNhbGx5IGdvIGludG8gdGhlIGByZWZyZXNoaW5nYCBzdGF0ZS5cbiAgICAgICAgICogRGVmYXVsdHMgdG8gdGhlIHJlc3VsdCBvZiBgcHVsbE1pbiArIDYwYC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucHVsbE1heCA9IHRoaXMucHVsbE1pbiArIDYwO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGltZSBpdCB0YWtlcyB0byBjbG9zZSB0aGUgcmVmcmVzaGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jbG9zZUR1cmF0aW9uID0gJzI4MG1zJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRpbWUgaXQgdGFrZXMgdGhlIHJlZnJlc2hlciB0byB0byBzbmFwIGJhY2sgdG8gdGhlIGByZWZyZXNoaW5nYCBzdGF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc25hcGJhY2tEdXJhdGlvbiA9ICcyODBtcyc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIb3cgbXVjaCB0byBtdWx0aXBseSB0aGUgcHVsbCBzcGVlZCBieS4gVG8gc2xvdyB0aGUgcHVsbCBhbmltYXRpb24gZG93bixcbiAgICAgICAgICogcGFzcyBhIG51bWJlciBsZXNzIHRoYW4gYDFgLiBUbyBzcGVlZCB1cCB0aGUgcHVsbCwgcGFzcyBhIG51bWJlciBncmVhdGVyXG4gICAgICAgICAqIHRoYW4gYDFgLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBgMWAgd2hpY2ggaXMgZXF1YWwgdG8gdGhlIHNwZWVkIG9mIHRoZSBjdXJzb3IuXG4gICAgICAgICAqIElmIGEgbmVnYXRpdmUgdmFsdWUgaXMgcGFzc2VkIGluLCB0aGUgZmFjdG9yIHdpbGwgYmUgYDFgIGluc3RlYWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEZvciBleGFtcGxlOiBJZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGAxLjJgIGFuZCB0aGUgY29udGVudCBpcyBkcmFnZ2VkIGJ5XG4gICAgICAgICAqIGAxMGAgcGl4ZWxzLCBpbnN0ZWFkIG9mIGAxMGAgcGl4ZWxzIHRoZSBjb250ZW50IHdpbGwgYmUgcHVsbGVkIGJ5IGAxMmAgcGl4ZWxzXG4gICAgICAgICAqIChhbiBpbmNyZWFzZSBvZiAyMCBwZXJjZW50KS4gSWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBgMC44YCwgdGhlIGRyYWdnZWQgYW1vdW50XG4gICAgICAgICAqIHdpbGwgYmUgYDhgIHBpeGVscywgbGVzcyB0aGFuIHRoZSBhbW91bnQgdGhlIGN1cnNvciBoYXMgbW92ZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnB1bGxGYWN0b3IgPSAxO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgcmVmcmVzaGVyIHdpbGwgYmUgaGlkZGVuLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlvblJlZnJlc2ggPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblJlZnJlc2hcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uUHVsbCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUHVsbFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TdGFydCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU3RhcnRcIiwgNyk7XG4gICAgfVxuICAgIGNsYXNzXzEucHJvdG90eXBlLmRpc2FibGVkQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlLnNldERpc2FibGVkKHRoaXMuZGlzYWJsZWQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRFbCwgX2EsIF9iO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsLmdldEF0dHJpYnV0ZSgnc2xvdCcpICE9PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWFrZSBzdXJlIHlvdSB1c2U6IDxpb24tcmVmcmVzaGVyIHNsb3Q9XCJmaXhlZFwiPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRFbCA9IHRoaXMuZWwuY2xvc2VzdCgnaW9uLWNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29udGVudEVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignPGlvbi1yZWZyZXNoZXI+IG11c3QgYmUgdXNlZCBpbnNpZGUgYW4gPGlvbi1jb250ZW50PicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNvbnRlbnRFbC5nZXRTY3JvbGxFbGVtZW50KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zY3JvbGxFbCA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGltcG9ydCgnLi9pbmRleC02MjRlZWE1OC5qcycpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IuZ2VzdHVyZSA9IChfYy5zZW50KCkpLmNyZWF0ZUdlc3R1cmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsOiBjb250ZW50RWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VzdHVyZU5hbWU6ICdyZWZyZXNoZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlc3R1cmVQcmlvcml0eTogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAneScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5TdGFydDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuY2FuU3RhcnQoKTsgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN0YXJ0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5vblN0YXJ0KCk7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLm9uTW92ZShldik7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FbmQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm9uRW5kKCk7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWRDaGFuZ2VkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZGlzY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsRWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGwgYGNvbXBsZXRlKClgIHdoZW4geW91ciBhc3luYyBvcGVyYXRpb24gaGFzIGNvbXBsZXRlZC5cbiAgICAgKiBGb3IgZXhhbXBsZSwgdGhlIGByZWZyZXNoaW5nYCBzdGF0ZSBpcyB3aGlsZSB0aGUgYXBwIGlzIHBlcmZvcm1pbmdcbiAgICAgKiBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uLCBzdWNoIGFzIHJlY2VpdmluZyBtb3JlIGRhdGEgZnJvbSBhblxuICAgICAqIEFKQVggcmVxdWVzdC4gT25jZSB0aGUgZGF0YSBoYXMgYmVlbiByZWNlaXZlZCwgeW91IHRoZW4gY2FsbCB0aGlzXG4gICAgICogbWV0aG9kIHRvIHNpZ25pZnkgdGhhdCB0aGUgcmVmcmVzaGluZyBoYXMgY29tcGxldGVkIGFuZCB0byBjbG9zZVxuICAgICAqIHRoZSByZWZyZXNoZXIuIFRoaXMgbWV0aG9kIGFsc28gY2hhbmdlcyB0aGUgcmVmcmVzaGVyJ3Mgc3RhdGUgZnJvbVxuICAgICAqIGByZWZyZXNoaW5nYCB0byBgY29tcGxldGluZ2AuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKDMyIC8qIENvbXBsZXRpbmcgKi8sICcxMjBtcycpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoYW5nZXMgdGhlIHJlZnJlc2hlcidzIHN0YXRlIGZyb20gYHJlZnJlc2hpbmdgIHRvIGBjYW5jZWxsaW5nYC5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKDE2IC8qIENhbmNlbGxpbmcgKi8sICcnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBIG51bWJlciByZXByZXNlbnRpbmcgaG93IGZhciBkb3duIHRoZSB1c2VyIGhhcyBwdWxsZWQuXG4gICAgICogVGhlIG51bWJlciBgMGAgcmVwcmVzZW50cyB0aGUgdXNlciBoYXNuJ3QgcHVsbGVkIGRvd24gYXQgYWxsLiBUaGVcbiAgICAgKiBudW1iZXIgYDFgLCBhbmQgYW55dGhpbmcgZ3JlYXRlciB0aGFuIGAxYCwgcmVwcmVzZW50cyB0aGF0IHRoZSB1c2VyXG4gICAgICogaGFzIHB1bGxlZCBmYXIgZW5vdWdoIGRvd24gdGhhdCB3aGVuIHRoZXkgbGV0IGdvIHRoZW4gdGhlIHJlZnJlc2ggd2lsbFxuICAgICAqIGhhcHBlbi4gSWYgdGhleSBsZXQgZ28gYW5kIHRoZSBudW1iZXIgaXMgbGVzcyB0aGFuIGAxYCwgdGhlbiB0aGVcbiAgICAgKiByZWZyZXNoIHdpbGwgbm90IGhhcHBlbiwgYW5kIHRoZSBjb250ZW50IHdpbGwgcmV0dXJuIHRvIGl0J3Mgb3JpZ2luYWxcbiAgICAgKiBwb3NpdGlvbi5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5nZXRQcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnByb2dyZXNzKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNhblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2Nyb2xsRWwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gMSAvKiBJbmFjdGl2ZSAqLykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBzY3JvbGxUb3AgaXMgZ3JlYXRlciB0aGFuIHplcm8gdGhlbiBpdCdzXG4gICAgICAgIC8vIG5vdCBwb3NzaWJsZSB0byBwdWxsIHRoZSBjb250ZW50IGRvd24geWV0XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEVsLnNjcm9sbFRvcCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgICB0aGlzLnN0YXRlID0gMSAvKiBJbmFjdGl2ZSAqLztcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9uTW92ZSA9IGZ1bmN0aW9uIChkZXRhaWwpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbEVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcyBtZXRob2QgY2FuIGdldCBjYWxsZWQgbGlrZSBhIGJhemlsbGlvbiB0aW1lcyBwZXIgc2Vjb25kLFxuICAgICAgICAvLyBzbyBpdCdzIGJ1aWx0IHRvIGJlIGFzIGVmZmljaWVudCBhcyBwb3NzaWJsZSwgYW5kIGRvZXMgaXRzXG4gICAgICAgIC8vIGJlc3QgdG8gZG8gYW55IERPTSByZWFkL3dyaXRlcyBvbmx5IHdoZW4gYWJzb2x1dGVseSBuZWNlc3NhcnlcbiAgICAgICAgLy8gaWYgbXVsdGktdG91Y2ggdGhlbiBnZXQgb3V0IGltbWVkaWF0ZWx5XG4gICAgICAgIHZhciBldiA9IGRldGFpbC5ldmVudDtcbiAgICAgICAgaWYgKGV2LnRvdWNoZXMgJiYgZXYudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZG8gbm90aGluZyBpZiBpdCdzIGFjdGl2ZWx5IHJlZnJlc2hpbmdcbiAgICAgICAgLy8gb3IgaXQncyBpbiB0aGUgd2F5IG9mIGNsb3NpbmdcbiAgICAgICAgLy8gb3IgdGhpcyB3YXMgbmV2ZXIgYSBzdGFydFlcbiAgICAgICAgaWYgKCh0aGlzLnN0YXRlICYgNTYgLyogX0JVU1lfICovKSAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwdWxsRmFjdG9yID0gKE51bWJlci5pc05hTih0aGlzLnB1bGxGYWN0b3IpIHx8IHRoaXMucHVsbEZhY3RvciA8IDApID8gMSA6IHRoaXMucHVsbEZhY3RvcjtcbiAgICAgICAgdmFyIGRlbHRhWSA9IGRldGFpbC5kZWx0YVkgKiBwdWxsRmFjdG9yO1xuICAgICAgICAvLyBkb24ndCBib3RoZXIgaWYgdGhleSdyZSBzY3JvbGxpbmcgdXBcbiAgICAgICAgLy8gYW5kIGhhdmUgbm90IGFscmVhZHkgc3RhcnRlZCBkcmFnZ2luZ1xuICAgICAgICBpZiAoZGVsdGFZIDw9IDApIHtcbiAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IFkgaXMgaGlnaGVyIHRoYW4gdGhlIHN0YXJ0aW5nIFlcbiAgICAgICAgICAgIC8vIHNvIHRoZXkgc2Nyb2xsZWQgdXAgZW5vdWdoIHRvIGJlIGlnbm9yZWRcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IDEgLyogSW5hY3RpdmUgKi87XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBsaWVkU3R5bGVzKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVzZXQgdGhlIHN0eWxlcyBvbmx5IGlmIHRoZXkgd2VyZSBhcHBsaWVkXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDc3MoMCwgJycsIGZhbHNlLCAnJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSAxIC8qIEluYWN0aXZlICovKSB7XG4gICAgICAgICAgICAvLyB0aGlzIHJlZnJlc2ggaXMgbm90IGFscmVhZHkgYWN0aXZlbHkgcHVsbGluZyBkb3duXG4gICAgICAgICAgICAvLyBnZXQgdGhlIGNvbnRlbnQncyBzY3JvbGxUb3BcbiAgICAgICAgICAgIHZhciBzY3JvbGxIb3N0U2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxFbC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAvLyBpZiB0aGUgc2Nyb2xsVG9wIGlzIGdyZWF0ZXIgdGhhbiB6ZXJvIHRoZW4gaXQnc1xuICAgICAgICAgICAgLy8gbm90IHBvc3NpYmxlIHRvIHB1bGwgdGhlIGNvbnRlbnQgZG93biB5ZXRcbiAgICAgICAgICAgIGlmIChzY3JvbGxIb3N0U2Nyb2xsVG9wID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnRlbnQgc2Nyb2xsZWQgYWxsIHRoZSB3YXkgdG8gdGhlIHRvcCwgYW5kIGRyYWdnaW5nIGRvd25cbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAyIC8qIFB1bGxpbmcgKi87XG4gICAgICAgIH1cbiAgICAgICAgLy8gcHJldmVudCBuYXRpdmUgc2Nyb2xsIGV2ZW50c1xuICAgICAgICBpZiAoZXYuY2FuY2VsYWJsZSkge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGUgcmVmcmVzaGVyIGlzIGFjdGl2ZWx5IHB1bGxpbmcgYXQgdGhpcyBwb2ludFxuICAgICAgICAvLyBtb3ZlIHRoZSBzY3JvbGwgZWxlbWVudCB3aXRoaW4gdGhlIGNvbnRlbnQgZWxlbWVudFxuICAgICAgICB0aGlzLnNldENzcyhkZWx0YVksICcwbXMnLCB0cnVlLCAnJyk7XG4gICAgICAgIGlmIChkZWx0YVkgPT09IDApIHtcbiAgICAgICAgICAgIC8vIGRvbid0IGNvbnRpbnVlIGlmIHRoZXJlJ3Mgbm8gZGVsdGEgeWV0XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHVsbE1pbiA9IHRoaXMucHVsbE1pbjtcbiAgICAgICAgLy8gc2V0IHB1bGwgcHJvZ3Jlc3NcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IGRlbHRhWSAvIHB1bGxNaW47XG4gICAgICAgIC8vIGVtaXQgXCJzdGFydFwiIGlmIGl0IGhhc24ndCBzdGFydGVkIHlldFxuICAgICAgICBpZiAoIXRoaXMuZGlkU3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlkU3RhcnQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pb25TdGFydC5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZW1pdCBcInB1bGxpbmdcIiBvbiBldmVyeSBtb3ZlXG4gICAgICAgIHRoaXMuaW9uUHVsbC5lbWl0KCk7XG4gICAgICAgIC8vIGRvIG5vdGhpbmcgaWYgdGhlIGRlbHRhIGlzIGxlc3MgdGhhbiB0aGUgcHVsbCB0aHJlc2hvbGRcbiAgICAgICAgaWYgKGRlbHRhWSA8IHB1bGxNaW4pIHtcbiAgICAgICAgICAgIC8vIGVuc3VyZSBpdCBzdGF5cyBpbiB0aGUgcHVsbGluZyBzdGF0ZSwgY3V6IGl0cyBub3QgcmVhZHkgeWV0XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gMiAvKiBQdWxsaW5nICovO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWx0YVkgPiB0aGlzLnB1bGxNYXgpIHtcbiAgICAgICAgICAgIC8vIHRoZXkgcHVsbGVkIGZhcnRoZXIgdGhhbiB0aGUgbWF4LCBzbyBraWNrIG9mZiB0aGUgcmVmcmVzaFxuICAgICAgICAgICAgdGhpcy5iZWdpblJlZnJlc2goKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBwdWxsZWQgZmFydGhlciB0aGFuIHRoZSBwdWxsIG1pbiEhXG4gICAgICAgIC8vIGl0IGlzIG5vdyBpbiB0aGUgYHJlYWR5YCBzdGF0ZSEhXG4gICAgICAgIC8vIGlmIHRoZXkgbGV0IGdvIHRoZW4gaXQnbGwgcmVmcmVzaCwga2VycG93ISFcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDQgLyogUmVhZHkgKi87XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9uRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBvbmx5IHJ1biBpbiBhIHpvbmUgd2hlbiBhYnNvbHV0ZWx5IG5lY2Vzc2FyeVxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gNCAvKiBSZWFkeSAqLykge1xuICAgICAgICAgICAgLy8gdGhleSBwdWxsZWQgZG93biBmYXIgZW5vdWdoLCBzbyBpdCdzIHJlYWR5IHRvIHJlZnJlc2hcbiAgICAgICAgICAgIHRoaXMuYmVnaW5SZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gMiAvKiBQdWxsaW5nICovKSB7XG4gICAgICAgICAgICAvLyB0aGV5IHdlcmUgcHVsbGluZyBkb3duLCBidXQgZGlkbid0IHB1bGwgZG93biBmYXIgZW5vdWdoXG4gICAgICAgICAgICAvLyBzZXQgdGhlIGNvbnRlbnQgYmFjayB0byBpdCdzIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAgICAgICAgICAvLyBhbmQgY2xvc2UgdGhlIHJlZnJlc2hlclxuICAgICAgICAgICAgLy8gc2V0IHRoYXQgdGhlIHJlZnJlc2ggaXMgYWN0aXZlbHkgY2FuY2VsbGluZ1xuICAgICAgICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuYmVnaW5SZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBhc3N1bWVzIHdlJ3JlIGFscmVhZHkgYmFjayBpbiBhIHpvbmVcbiAgICAgICAgLy8gdGhleSBwdWxsZWQgZG93biBmYXIgZW5vdWdoLCBzbyBpdCdzIHJlYWR5IHRvIHJlZnJlc2hcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDggLyogUmVmcmVzaGluZyAqLztcbiAgICAgICAgLy8gcGxhY2UgdGhlIGNvbnRlbnQgaW4gYSBoYW5nb3V0IHBvc2l0aW9uIHdoaWxlIGl0IHRoaW5rc1xuICAgICAgICB0aGlzLnNldENzcyh0aGlzLnB1bGxNaW4sIHRoaXMuc25hcGJhY2tEdXJhdGlvbiwgdHJ1ZSwgJycpO1xuICAgICAgICAvLyBlbWl0IFwicmVmcmVzaFwiIGJlY2F1c2UgaXQgd2FzIHB1bGxlZCBkb3duIGZhciBlbm91Z2hcbiAgICAgICAgLy8gYW5kIHRoZXkgbGV0IGdvIHRvIGJlZ2luIHJlZnJlc2hpbmdcbiAgICAgICAgdGhpcy5pb25SZWZyZXNoLmVtaXQoe1xuICAgICAgICAgICAgY29tcGxldGU6IHRoaXMuY29tcGxldGUuYmluZCh0aGlzKVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBjcmVhdGUgZmFsbGJhY2sgdGltZXIgaW5jYXNlIHNvbWV0aGluZyBnb2VzIHdyb25nIHdpdGggdHJhbnNpdGlvbkVuZCBldmVudFxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnN0YXRlID0gMSAvKiBJbmFjdGl2ZSAqLztcbiAgICAgICAgICAgIF90aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgICAgIF90aGlzLmRpZFN0YXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICBfdGhpcy5zZXRDc3MoMCwgJzBtcycsIGZhbHNlLCAnJyk7XG4gICAgICAgIH0sIDYwMCk7XG4gICAgICAgIC8vIHJlc2V0IHNldCB0aGUgc3R5bGVzIG9uIHRoZSBzY3JvbGwgZWxlbWVudFxuICAgICAgICAvLyBzZXQgdGhhdCB0aGUgcmVmcmVzaCBpcyBhY3RpdmVseSBjYW5jZWxsaW5nL2NvbXBsZXRpbmdcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLnNldENzcygwLCB0aGlzLmNsb3NlRHVyYXRpb24sIHRydWUsIGRlbGF5KTtcbiAgICAgICAgLy8gVE9ETzogc3RvcCBnZXN0dXJlXG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5zZXRDc3MgPSBmdW5jdGlvbiAoeSwgZHVyYXRpb24sIG92ZXJmbG93VmlzaWJsZSwgZGVsYXkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5hcHBsaWVkU3R5bGVzID0gKHkgPiAwKTtcbiAgICAgICAgd3JpdGVUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5zY3JvbGxFbCkge1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IF90aGlzLnNjcm9sbEVsLnN0eWxlO1xuICAgICAgICAgICAgICAgIHN0eWxlLnRyYW5zZm9ybSA9ICgoeSA+IDApID8gXCJ0cmFuc2xhdGVZKFwiICsgeSArIFwicHgpIHRyYW5zbGF0ZVooMHB4KVwiIDogJ3RyYW5zbGF0ZVooMHB4KScpO1xuICAgICAgICAgICAgICAgIHN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIHN0eWxlLnRyYW5zaXRpb25EZWxheSA9IGRlbGF5O1xuICAgICAgICAgICAgICAgIHN0eWxlLm92ZXJmbG93ID0gKG92ZXJmbG93VmlzaWJsZSA/ICdoaWRkZW4nIDogJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IHNsb3Q6IFwiZml4ZWRcIiwgY2xhc3M6IChfYSA9IHt9LFxuICAgICAgICAgICAgICAgIF9hW21vZGVdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyBVc2VkIGludGVybmFsbHkgZm9yIHN0eWxpbmdcbiAgICAgICAgICAgICAgICBfYVtcInJlZnJlc2hlci1cIiArIG1vZGVdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYVsncmVmcmVzaGVyLWFjdGl2ZSddID0gdGhpcy5zdGF0ZSAhPT0gMSAvKiBJbmFjdGl2ZSAqLyxcbiAgICAgICAgICAgICAgICBfYVsncmVmcmVzaGVyLXB1bGxpbmcnXSA9IHRoaXMuc3RhdGUgPT09IDIgLyogUHVsbGluZyAqLyxcbiAgICAgICAgICAgICAgICBfYVsncmVmcmVzaGVyLXJlYWR5J10gPSB0aGlzLnN0YXRlID09PSA0IC8qIFJlYWR5ICovLFxuICAgICAgICAgICAgICAgIF9hWydyZWZyZXNoZXItcmVmcmVzaGluZyddID0gdGhpcy5zdGF0ZSA9PT0gOCAvKiBSZWZyZXNoaW5nICovLFxuICAgICAgICAgICAgICAgIF9hWydyZWZyZXNoZXItY2FuY2VsbGluZyddID0gdGhpcy5zdGF0ZSA9PT0gMTYgLyogQ2FuY2VsbGluZyAqLyxcbiAgICAgICAgICAgICAgICBfYVsncmVmcmVzaGVyLWNvbXBsZXRpbmcnXSA9IHRoaXMuc3RhdGUgPT09IDMyIC8qIENvbXBsZXRpbmcgKi8sXG4gICAgICAgICAgICAgICAgX2EpIH0pKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEsIFwid2F0Y2hlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZENoYW5nZWRcIl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcImlvbi1yZWZyZXNoZXJ7bGVmdDowO3RvcDowO2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDo2MHB4O3otaW5kZXg6LTF9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIGlvbi1yZWZyZXNoZXIsW2Rpcj1ydGxdIGlvbi1yZWZyZXNoZXJ7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowfWlvbi1yZWZyZXNoZXIucmVmcmVzaGVyLWFjdGl2ZXtkaXNwbGF5OmJsb2NrfWlvbi1yZWZyZXNoZXItY29udGVudHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2hlaWdodDoxMDAlfS5yZWZyZXNoZXItcHVsbGluZywucmVmcmVzaGVyLXJlZnJlc2hpbmd7ZGlzcGxheTpub25lO3dpZHRoOjEwMCV9LnJlZnJlc2hlci1wdWxsaW5nLWljb24sLnJlZnJlc2hlci1yZWZyZXNoaW5nLWljb257LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LXRyYW5zaXRpb246LjJzO3RyYW5zaXRpb246LjJzO2ZvbnQtc2l6ZTozMHB4O3RleHQtYWxpZ246Y2VudGVyfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAucmVmcmVzaGVyLXB1bGxpbmctaWNvbiw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnJlZnJlc2hlci1yZWZyZXNoaW5nLWljb24sW2Rpcj1ydGxdIC5yZWZyZXNoZXItcHVsbGluZy1pY29uLFtkaXI9cnRsXSAucmVmcmVzaGVyLXJlZnJlc2hpbmctaWNvbnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKTt0cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcil9LnJlZnJlc2hlci1wdWxsaW5nLXRleHQsLnJlZnJlc2hlci1yZWZyZXNoaW5nLXRleHR7Zm9udC1zaXplOjE2cHg7dGV4dC1hbGlnbjpjZW50ZXJ9LnJlZnJlc2hlci1wdWxsaW5nIGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXB1bGxpbmcsLnJlZnJlc2hlci1yZWFkeSBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1wdWxsaW5ne2Rpc3BsYXk6YmxvY2t9LnJlZnJlc2hlci1yZWFkeSBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1wdWxsaW5nLWljb257LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfS5yZWZyZXNoZXItY2FuY2VsbGluZyBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1wdWxsaW5nLC5yZWZyZXNoZXItcmVmcmVzaGluZyBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1yZWZyZXNoaW5ne2Rpc3BsYXk6YmxvY2t9LnJlZnJlc2hlci1jYW5jZWxsaW5nIGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXB1bGxpbmctaWNvbnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9LnJlZnJlc2hlci1jb21wbGV0aW5nIGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXJlZnJlc2hpbmd7ZGlzcGxheTpibG9ja30ucmVmcmVzaGVyLWNvbXBsZXRpbmcgaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcmVmcmVzaGluZy1pY29uey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX0ucmVmcmVzaGVyLW1kIC5yZWZyZXNoZXItcHVsbGluZy1pY29uLC5yZWZyZXNoZXItbWQgLnJlZnJlc2hlci1wdWxsaW5nLXRleHQsLnJlZnJlc2hlci1tZCAucmVmcmVzaGVyLXJlZnJlc2hpbmctaWNvbiwucmVmcmVzaGVyLW1kIC5yZWZyZXNoZXItcmVmcmVzaGluZy10ZXh0e2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApfS5yZWZyZXNoZXItbWQgLnJlZnJlc2hlci1yZWZyZXNoaW5nIC5zcGlubmVyLWNyZXNjZW50IGNpcmNsZSwucmVmcmVzaGVyLW1kIC5yZWZyZXNoZXItcmVmcmVzaGluZyAuc3Bpbm5lci1saW5lcy1tZCBsaW5lLC5yZWZyZXNoZXItbWQgLnJlZnJlc2hlci1yZWZyZXNoaW5nIC5zcGlubmVyLWxpbmVzLXNtYWxsLW1kIGxpbmV7c3Ryb2tlOnZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApfS5yZWZyZXNoZXItbWQgLnJlZnJlc2hlci1yZWZyZXNoaW5nIC5zcGlubmVyLWJ1YmJsZXMgY2lyY2xlLC5yZWZyZXNoZXItbWQgLnJlZnJlc2hlci1yZWZyZXNoaW5nIC5zcGlubmVyLWNpcmNsZXMgY2lyY2xlLC5yZWZyZXNoZXItbWQgLnJlZnJlc2hlci1yZWZyZXNoaW5nIC5zcGlubmVyLWRvdHMgY2lyY2xle2ZpbGw6dmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCl9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbnZhciBSZWZyZXNoZXJDb250ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlZnJlc2hlckNvbnRlbnQoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIH1cbiAgICBSZWZyZXNoZXJDb250ZW50LnByb3RvdHlwZS5jb21wb25lbnRXaWxsTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucHVsbGluZ0ljb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5wdWxsaW5nSWNvbiA9IGNvbmZpZy5nZXQoJ3JlZnJlc2hpbmdJY29uJywgJ2Fycm93LWRvd24nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZWZyZXNoaW5nU3Bpbm5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hpbmdTcGlubmVyID0gY29uZmlnLmdldCgncmVmcmVzaGluZ1NwaW5uZXInLCBjb25maWcuZ2V0KCdzcGlubmVyJywgbW9kZSA9PT0gJ2lvcycgPyAnbGluZXMnIDogJ2NyZXNjZW50JykpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZWZyZXNoZXJDb250ZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiBnZXRJb25Nb2RlKHRoaXMpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJyZWZyZXNoZXItcHVsbGluZ1wiIH0sIHRoaXMucHVsbGluZ0ljb24gJiZcbiAgICAgICAgICAgIGgoXCJkaXZcIiwgeyBjbGFzczogXCJyZWZyZXNoZXItcHVsbGluZy1pY29uXCIgfSwgaChcImlvbi1pY29uXCIsIHsgaWNvbjogdGhpcy5wdWxsaW5nSWNvbiwgbGF6eTogZmFsc2UgfSkpLCB0aGlzLnB1bGxpbmdUZXh0ICYmXG4gICAgICAgICAgICBoKFwiZGl2XCIsIHsgY2xhc3M6IFwicmVmcmVzaGVyLXB1bGxpbmctdGV4dFwiLCBpbm5lckhUTUw6IHNhbml0aXplRE9NU3RyaW5nKHRoaXMucHVsbGluZ1RleHQpIH0pKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInJlZnJlc2hlci1yZWZyZXNoaW5nXCIgfSwgdGhpcy5yZWZyZXNoaW5nU3Bpbm5lciAmJlxuICAgICAgICAgICAgaChcImRpdlwiLCB7IGNsYXNzOiBcInJlZnJlc2hlci1yZWZyZXNoaW5nLWljb25cIiB9LCBoKFwiaW9uLXNwaW5uZXJcIiwgeyBuYW1lOiB0aGlzLnJlZnJlc2hpbmdTcGlubmVyIH0pKSwgdGhpcy5yZWZyZXNoaW5nVGV4dCAmJlxuICAgICAgICAgICAgaChcImRpdlwiLCB7IGNsYXNzOiBcInJlZnJlc2hlci1yZWZyZXNoaW5nLXRleHRcIiwgaW5uZXJIVE1MOiBzYW5pdGl6ZURPTVN0cmluZyh0aGlzLnJlZnJlc2hpbmdUZXh0KSB9KSkpKTtcbiAgICB9O1xuICAgIHJldHVybiBSZWZyZXNoZXJDb250ZW50O1xufSgpKTtcbmV4cG9ydCB7IFJlZnJlc2hlciBhcyBpb25fcmVmcmVzaGVyLCBSZWZyZXNoZXJDb250ZW50IGFzIGlvbl9yZWZyZXNoZXJfY29udGVudCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==