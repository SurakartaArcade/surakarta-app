(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

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

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-infinite-scroll_2-md.entry.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-infinite-scroll_2-md.entry.js ***!
  \*********************************************************************************/
/*! exports provided: ion_infinite_scroll, ion_infinite_scroll_content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_infinite_scroll", function() { return InfiniteScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_infinite_scroll_content", function() { return InfiniteScrollContent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-3476b023.js */ "./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js");




var InfiniteScroll = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.thrPx = 0;
        this.thrPc = 0;
        this.didFire = false;
        this.isBusy = false;
        this.isLoading = false;
        /**
         * The threshold distance from the bottom
         * of the content to call the `infinite` output event when scrolled.
         * The threshold value can be either a percent, or
         * in pixels. For example, use the value of `10%` for the `infinite`
         * output event to get called when the user has scrolled 10%
         * from the bottom of the page. Use the value `100px` when the
         * scroll is within 100 pixels from the bottom of the page.
         */
        this.threshold = '15%';
        /**
         * If `true`, the infinite scroll will be hidden and scroll event listeners
         * will be removed.
         *
         * Set this to true to disable the infinite scroll from actively
         * trying to receive new data while scrolling. This is useful
         * when it is known that there is no more data that can be added, and
         * the infinite scroll is no longer needed.
         */
        this.disabled = false;
        /**
         * The position of the infinite scroll element.
         * The value can be either `top` or `bottom`.
         */
        this.position = 'bottom';
        this.onScroll = function () {
            var scrollEl = _this.scrollEl;
            if (!scrollEl || !_this.canStart()) {
                return 1;
            }
            var infiniteHeight = _this.el.offsetHeight;
            if (infiniteHeight === 0) {
                // if there is no height of this element then do nothing
                return 2;
            }
            var scrollTop = scrollEl.scrollTop;
            var scrollHeight = scrollEl.scrollHeight;
            var height = scrollEl.offsetHeight;
            var threshold = _this.thrPc !== 0 ? (height * _this.thrPc) : _this.thrPx;
            var distanceFromInfinite = (_this.position === 'bottom')
                ? scrollHeight - infiniteHeight - scrollTop - threshold - height
                : scrollTop - infiniteHeight - threshold;
            if (distanceFromInfinite < 0) {
                if (!_this.didFire) {
                    _this.isLoading = true;
                    _this.didFire = true;
                    _this.ionInfinite.emit();
                    return 3;
                }
            }
            else {
                _this.didFire = false;
            }
            return 4;
        };
        this.ionInfinite = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionInfinite", 7);
    }
    class_1.prototype.thresholdChanged = function () {
        var val = this.threshold;
        if (val.lastIndexOf('%') > -1) {
            this.thrPx = 0;
            this.thrPc = (parseFloat(val) / 100);
        }
        else {
            this.thrPx = parseFloat(val);
            this.thrPc = 0;
        }
    };
    class_1.prototype.disabledChanged = function () {
        var disabled = this.disabled;
        if (disabled) {
            this.isLoading = false;
            this.isBusy = false;
        }
        this.enableScrollEvents(!disabled);
    };
    class_1.prototype.connectedCallback = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var contentEl, _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        contentEl = this.el.closest('ion-content');
                        if (!contentEl) {
                            console.error('<ion-infinite-scroll> must be used inside an <ion-content>');
                            return [2 /*return*/];
                        }
                        _a = this;
                        return [4 /*yield*/, contentEl.getScrollElement()];
                    case 1:
                        _a.scrollEl = _b.sent();
                        this.thresholdChanged();
                        this.disabledChanged();
                        if (this.position === 'top') {
                            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["w"])(function () {
                                if (_this.scrollEl) {
                                    _this.scrollEl.scrollTop = _this.scrollEl.scrollHeight - _this.scrollEl.clientHeight;
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.disconnectedCallback = function () {
        this.enableScrollEvents(false);
        this.scrollEl = undefined;
    };
    /**
     * Call `complete()` within the `ionInfinite` output event handler when
     * your async operation has completed. For example, the `loading`
     * state is while the app is performing an asynchronous operation,
     * such as receiving more data from an AJAX request to add more items
     * to a data list. Once the data has been received and UI updated, you
     * then call this method to signify that the loading has completed.
     * This method will change the infinite scroll's state from `loading`
     * to `enabled`.
     */
    class_1.prototype.complete = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var scrollEl, prev_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                scrollEl = this.scrollEl;
                if (!this.isLoading || !scrollEl) {
                    return [2 /*return*/];
                }
                this.isLoading = false;
                if (this.position === 'top') {
                    /**
                     * New content is being added at the top, but the scrollTop position stays the same,
                     * which causes a scroll jump visually. This algorithm makes sure to prevent this.
                     * (Frame 1)
                     *    - complete() is called, but the UI hasn't had time to update yet.
                     *    - Save the current content dimensions.
                     *    - Wait for the next frame using _dom.read, so the UI will be updated.
                     * (Frame 2)
                     *    - Read the new content dimensions.
                     *    - Calculate the height difference and the new scroll position.
                     *    - Delay the scroll position change until other possible dom reads are done using _dom.write to be performant.
                     * (Still frame 2, if I'm correct)
                     *    - Change the scroll position (= visually maintain the scroll position).
                     *    - Change the state to re-enable the InfiniteScroll.
                     *    - This should be after changing the scroll position, or it could
                     *    cause the InfiniteScroll to be triggered again immediately.
                     * (Frame 3)
                     *    Done.
                     */
                    this.isBusy = true;
                    prev_1 = scrollEl.scrollHeight - scrollEl.scrollTop;
                    // ******** DOM READ ****************
                    requestAnimationFrame(function () {
                        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["f"])(function () {
                            // UI has updated, save the new content dimensions
                            var scrollHeight = scrollEl.scrollHeight;
                            // New content was added on top, so the scroll position should be changed immediately to prevent it from jumping around
                            var newScrollTop = scrollHeight - prev_1;
                            // ******** DOM WRITE ****************
                            requestAnimationFrame(function () {
                                Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["w"])(function () {
                                    scrollEl.scrollTop = newScrollTop;
                                    _this.isBusy = false;
                                });
                            });
                        });
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.canStart = function () {
        return (!this.disabled &&
            !this.isBusy &&
            !!this.scrollEl &&
            !this.isLoading);
    };
    class_1.prototype.enableScrollEvents = function (shouldListen) {
        if (this.scrollEl) {
            if (shouldListen) {
                this.scrollEl.addEventListener('scroll', this.onScroll);
            }
            else {
                this.scrollEl.removeEventListener('scroll', this.onScroll);
            }
        }
    };
    class_1.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var disabled = this.disabled;
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: (_a = {},
                _a[mode] = true,
                _a['infinite-scroll-loading'] = this.isLoading,
                _a['infinite-scroll-enabled'] = !disabled,
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
                "threshold": ["thresholdChanged"],
                "disabled": ["disabledChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var InfiniteScrollContent = /** @class */ (function () {
    function InfiniteScrollContent(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
    }
    InfiniteScrollContent.prototype.componentDidLoad = function () {
        if (this.loadingSpinner === undefined) {
            var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
            this.loadingSpinner = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"].get('infiniteLoadingSpinner', _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"].get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
        }
    };
    InfiniteScrollContent.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: (_a = {},
                _a[mode] = true,
                // Used internally for styling
                _a["infinite-scroll-content-" + mode] = true,
                _a) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "infinite-loading" }, this.loadingSpinner && (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "infinite-loading-spinner" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-spinner", { name: this.loadingSpinner }))), this.loadingText && (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "infinite-loading-text", innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_3__["s"])(this.loadingText) })))));
    };
    Object.defineProperty(InfiniteScrollContent, "style", {
        get: function () { return "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"; },
        enumerable: true,
        configurable: true
    });
    return InfiniteScrollContent;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2luZGV4LTM0NzZiMDIzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvaW9uLWluZmluaXRlLXNjcm9sbF8yLW1kLmVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLG1CQUFtQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG1DQUFtQztBQUMzRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0NBQWdDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQzs7Ozs7Ozs7Ozs7OztBQzlHbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QkFBMEIsMkRBQUMsU0FBUyw0Q0FBNEMsNERBQWlCLG9CQUFvQjtBQUMxUztBQUNBO0FBQ0EsMEJBQTBCLHFDQUFxQyxvQkFBb0IsYUFBYSwwQkFBMEIsc0JBQXNCLHFCQUFxQix1QkFBdUIsZ0JBQWdCLGtCQUFrQix5QkFBeUIsc0JBQXNCLHFCQUFxQixpQkFBaUIsa0JBQWtCLGNBQWMsZUFBZSxhQUFhLG1CQUFtQixhQUFhLFdBQVcsdUJBQXVCLGlCQUFpQixrQkFBa0IsZUFBZSxnQkFBZ0IsNkZBQTZGLHVCQUF1QixrQkFBa0IsbUJBQW1CLDBCQUEwQix5QkFBeUIsd0JBQXdCLHdCQUF3Qix1RUFBdUUsY0FBYyxtREFBbUQscUNBQXFDLCtPQUErTyxzQ0FBc0MsdU9BQXVPLG9DQUFvQyxFQUFFLEVBQUU7QUFDaDhDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ3NHIiwiZmlsZSI6IjM0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRG9lcyBhIHNpbXBsZSBzYW5pdGl6YXRpb24gb2YgYWxsIGVsZW1lbnRzXG4gKiBpbiBhbiB1bnRydXN0ZWQgc3RyaW5nXG4gKi9cbnZhciBzYW5pdGl6ZURPTVN0cmluZyA9IGZ1bmN0aW9uICh1bnRydXN0ZWRTdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHVudHJ1c3RlZFN0cmluZyAhPT0gJ3N0cmluZycgfHwgdW50cnVzdGVkU3RyaW5nID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIHVudHJ1c3RlZFN0cmluZztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlIGEgZG9jdW1lbnQgZnJhZ21lbnRcbiAgICAgICAgICogc2VwYXJhdGUgZnJvbSB0aGUgbWFpbiBET00sXG4gICAgICAgICAqIGNyZWF0ZSBhIGRpdiB0byBkbyBvdXIgd29yayBpblxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGRvY3VtZW50RnJhZ21lbnRfMSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgdmFyIHdvcmtpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZG9jdW1lbnRGcmFnbWVudF8xLmFwcGVuZENoaWxkKHdvcmtpbmdEaXYpO1xuICAgICAgICB3b3JraW5nRGl2LmlubmVySFRNTCA9IHVudHJ1c3RlZFN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSBhbnkgZWxlbWVudHNcbiAgICAgICAgICogdGhhdCBhcmUgYmxvY2tlZFxuICAgICAgICAgKi9cbiAgICAgICAgYmxvY2tlZFRhZ3MuZm9yRWFjaChmdW5jdGlvbiAoYmxvY2tlZFRhZykge1xuICAgICAgICAgICAgdmFyIGdldEVsZW1lbnRzVG9SZW1vdmUgPSBkb2N1bWVudEZyYWdtZW50XzEucXVlcnlTZWxlY3RvckFsbChibG9ja2VkVGFnKTtcbiAgICAgICAgICAgIGZvciAodmFyIGVsZW1lbnRJbmRleCA9IGdldEVsZW1lbnRzVG9SZW1vdmUubGVuZ3RoIC0gMTsgZWxlbWVudEluZGV4ID49IDA7IGVsZW1lbnRJbmRleC0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBnZXRFbGVtZW50c1RvUmVtb3ZlW2VsZW1lbnRJbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudEZyYWdtZW50XzEucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFdlIHN0aWxsIG5lZWQgdG8gc2FuaXRpemVcbiAgICAgICAgICAgICAgICAgKiB0aGUgY2hpbGRyZW4gb2YgdGhpcyBlbGVtZW50XG4gICAgICAgICAgICAgICAgICogYXMgdGhleSBhcmUgbGVmdCBiZWhpbmRcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRFbGVtZW50cyA9IGdldEVsZW1lbnRDaGlsZHJlbihlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjaGlsZEluZGV4ID0gMDsgY2hpbGRJbmRleCA8IGNoaWxkRWxlbWVudHMubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVFbGVtZW50KGNoaWxkRWxlbWVudHNbY2hpbGRJbmRleF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHbyB0aHJvdWdoIHJlbWFpbmluZyBlbGVtZW50cyBhbmQgcmVtb3ZlXG4gICAgICAgICAqIG5vbi1hbGxvd2VkIGF0dHJpYnNcbiAgICAgICAgICovXG4gICAgICAgIC8vIElFIGRvZXMgbm90IHN1cHBvcnQgLmNoaWxkcmVuIG9uIGRvY3VtZW50IGZyYWdtZW50cywgb25seSAuY2hpbGROb2Rlc1xuICAgICAgICB2YXIgZGZDaGlsZHJlbiA9IGdldEVsZW1lbnRDaGlsZHJlbihkb2N1bWVudEZyYWdtZW50XzEpO1xuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgZm9yICh2YXIgY2hpbGRJbmRleCA9IDA7IGNoaWxkSW5kZXggPCBkZkNoaWxkcmVuLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XG4gICAgICAgICAgICBzYW5pdGl6ZUVsZW1lbnQoZGZDaGlsZHJlbltjaGlsZEluZGV4XSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwZW5kIGRvY3VtZW50IGZyYWdtZW50IHRvIGRpdlxuICAgICAgICB2YXIgZnJhZ21lbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZnJhZ21lbnREaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnRGcmFnbWVudF8xKTtcbiAgICAgICAgLy8gRmlyc3QgY2hpbGQgaXMgYWx3YXlzIHRoZSBkaXYgd2UgZGlkIG91ciB3b3JrIGluXG4gICAgICAgIHZhciBnZXRJbm5lckRpdiA9IGZyYWdtZW50RGl2LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgICAgICByZXR1cm4gKGdldElubmVyRGl2ICE9PSBudWxsKSA/IGdldElubmVyRGl2LmlubmVySFRNTCA6IGZyYWdtZW50RGl2LmlubmVySFRNTDtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59O1xuLyoqXG4gKiBDbGVhbiB1cCBjdXJyZW50IGVsZW1lbnQgYmFzZWQgb24gYWxsb3dlZCBhdHRyaWJ1dGVzXG4gKiBhbmQgdGhlbiByZWN1cnNpdmVseSBkaWcgZG93biBpbnRvIGFueSBjaGlsZCBlbGVtZW50cyB0b1xuICogY2xlYW4gdGhvc2UgdXAgYXMgd2VsbFxuICovXG52YXIgc2FuaXRpemVFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAvLyBJRSB1c2VzIGNoaWxkTm9kZXMsIHNvIGlnbm9yZSBub2RlcyB0aGF0IGFyZSBub3QgZWxlbWVudHNcbiAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSAmJiBlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IGVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICB2YXIgYXR0cmlidXRlID0gZWxlbWVudC5hdHRyaWJ1dGVzLml0ZW0oaSk7XG4gICAgICAgIHZhciBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlLm5hbWU7XG4gICAgICAgIC8vIHJlbW92ZSBub24tYWxsb3dlZCBhdHRyaWJzXG4gICAgICAgIGlmICghYWxsb3dlZEF0dHJpYnV0ZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjbGVhbiB1cCBhbnkgYWxsb3dlZCBhdHRyaWJzXG4gICAgICAgIC8vIHRoYXQgYXR0ZW1wdCB0byBkbyBhbnkgSlMgZnVubnktYnVzaW5lc3NcbiAgICAgICAgdmFyIGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlLnZhbHVlO1xuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgaWYgKGF0dHJpYnV0ZVZhbHVlICE9IG51bGwgJiYgYXR0cmlidXRlVmFsdWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnamF2YXNjcmlwdDonKSkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2FuaXRpemUgYW55IG5lc3RlZCBjaGlsZHJlblxuICAgICAqL1xuICAgIHZhciBjaGlsZEVsZW1lbnRzID0gZ2V0RWxlbWVudENoaWxkcmVuKGVsZW1lbnQpO1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzYW5pdGl6ZUVsZW1lbnQoY2hpbGRFbGVtZW50c1tpXSk7XG4gICAgfVxufTtcbi8qKlxuICogSUUgZG9lc24ndCBhbHdheXMgc3VwcG9ydCAuY2hpbGRyZW5cbiAqIHNvIHdlIHJldmVydCB0byAuY2hpbGROb2RlcyBpbnN0ZWFkXG4gKi9cbnZhciBnZXRFbGVtZW50Q2hpbGRyZW4gPSBmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gKGVsLmNoaWxkcmVuICE9IG51bGwpID8gZWwuY2hpbGRyZW4gOiBlbC5jaGlsZE5vZGVzO1xufTtcbnZhciBhbGxvd2VkQXR0cmlidXRlcyA9IFsnY2xhc3MnLCAnaWQnLCAnaHJlZicsICdzcmMnLCAnbmFtZScsICdzbG90J107XG52YXIgYmxvY2tlZFRhZ3MgPSBbJ3NjcmlwdCcsICdzdHlsZScsICdpZnJhbWUnLCAnbWV0YScsICdsaW5rJywgJ29iamVjdCcsICdlbWJlZCddO1xuZXhwb3J0IHsgc2FuaXRpemVET01TdHJpbmcgYXMgcyB9O1xuIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBkIGFzIGNyZWF0ZUV2ZW50LCB3IGFzIHdyaXRlVGFzaywgZiBhcyByZWFkVGFzaywgYyBhcyBnZXRJb25Nb2RlLCBoLCBlIGFzIGdldEVsZW1lbnQsIEggYXMgSG9zdCB9IGZyb20gJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgeyBiIGFzIGNvbmZpZyB9IGZyb20gJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IHMgYXMgc2FuaXRpemVET01TdHJpbmcgfSBmcm9tICcuL2luZGV4LTM0NzZiMDIzLmpzJztcbnZhciBJbmZpbml0ZVNjcm9sbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18xKGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy50aHJQeCA9IDA7XG4gICAgICAgIHRoaXMudGhyUGMgPSAwO1xuICAgICAgICB0aGlzLmRpZEZpcmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0J1c3kgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0aHJlc2hvbGQgZGlzdGFuY2UgZnJvbSB0aGUgYm90dG9tXG4gICAgICAgICAqIG9mIHRoZSBjb250ZW50IHRvIGNhbGwgdGhlIGBpbmZpbml0ZWAgb3V0cHV0IGV2ZW50IHdoZW4gc2Nyb2xsZWQuXG4gICAgICAgICAqIFRoZSB0aHJlc2hvbGQgdmFsdWUgY2FuIGJlIGVpdGhlciBhIHBlcmNlbnQsIG9yXG4gICAgICAgICAqIGluIHBpeGVscy4gRm9yIGV4YW1wbGUsIHVzZSB0aGUgdmFsdWUgb2YgYDEwJWAgZm9yIHRoZSBgaW5maW5pdGVgXG4gICAgICAgICAqIG91dHB1dCBldmVudCB0byBnZXQgY2FsbGVkIHdoZW4gdGhlIHVzZXIgaGFzIHNjcm9sbGVkIDEwJVxuICAgICAgICAgKiBmcm9tIHRoZSBib3R0b20gb2YgdGhlIHBhZ2UuIFVzZSB0aGUgdmFsdWUgYDEwMHB4YCB3aGVuIHRoZVxuICAgICAgICAgKiBzY3JvbGwgaXMgd2l0aGluIDEwMCBwaXhlbHMgZnJvbSB0aGUgYm90dG9tIG9mIHRoZSBwYWdlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50aHJlc2hvbGQgPSAnMTUlJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGluZmluaXRlIHNjcm9sbCB3aWxsIGJlIGhpZGRlbiBhbmQgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICAgKiB3aWxsIGJlIHJlbW92ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFNldCB0aGlzIHRvIHRydWUgdG8gZGlzYWJsZSB0aGUgaW5maW5pdGUgc2Nyb2xsIGZyb20gYWN0aXZlbHlcbiAgICAgICAgICogdHJ5aW5nIHRvIHJlY2VpdmUgbmV3IGRhdGEgd2hpbGUgc2Nyb2xsaW5nLiBUaGlzIGlzIHVzZWZ1bFxuICAgICAgICAgKiB3aGVuIGl0IGlzIGtub3duIHRoYXQgdGhlcmUgaXMgbm8gbW9yZSBkYXRhIHRoYXQgY2FuIGJlIGFkZGVkLCBhbmRcbiAgICAgICAgICogdGhlIGluZmluaXRlIHNjcm9sbCBpcyBubyBsb25nZXIgbmVlZGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSBpbmZpbml0ZSBzY3JvbGwgZWxlbWVudC5cbiAgICAgICAgICogVGhlIHZhbHVlIGNhbiBiZSBlaXRoZXIgYHRvcGAgb3IgYGJvdHRvbWAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gJ2JvdHRvbSc7XG4gICAgICAgIHRoaXMub25TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsRWwgPSBfdGhpcy5zY3JvbGxFbDtcbiAgICAgICAgICAgIGlmICghc2Nyb2xsRWwgfHwgIV90aGlzLmNhblN0YXJ0KCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpbmZpbml0ZUhlaWdodCA9IF90aGlzLmVsLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGlmIChpbmZpbml0ZUhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIGhlaWdodCBvZiB0aGlzIGVsZW1lbnQgdGhlbiBkbyBub3RoaW5nXG4gICAgICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gc2Nyb2xsRWwuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgdmFyIHNjcm9sbEhlaWdodCA9IHNjcm9sbEVsLnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSBzY3JvbGxFbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICB2YXIgdGhyZXNob2xkID0gX3RoaXMudGhyUGMgIT09IDAgPyAoaGVpZ2h0ICogX3RoaXMudGhyUGMpIDogX3RoaXMudGhyUHg7XG4gICAgICAgICAgICB2YXIgZGlzdGFuY2VGcm9tSW5maW5pdGUgPSAoX3RoaXMucG9zaXRpb24gPT09ICdib3R0b20nKVxuICAgICAgICAgICAgICAgID8gc2Nyb2xsSGVpZ2h0IC0gaW5maW5pdGVIZWlnaHQgLSBzY3JvbGxUb3AgLSB0aHJlc2hvbGQgLSBoZWlnaHRcbiAgICAgICAgICAgICAgICA6IHNjcm9sbFRvcCAtIGluZmluaXRlSGVpZ2h0IC0gdGhyZXNob2xkO1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlRnJvbUluZmluaXRlIDwgMCkge1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuZGlkRmlyZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kaWRGaXJlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW9uSW5maW5pdGUuZW1pdCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5kaWRGaXJlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gNDtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pb25JbmZpbml0ZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uSW5maW5pdGVcIiwgNyk7XG4gICAgfVxuICAgIGNsYXNzXzEucHJvdG90eXBlLnRocmVzaG9sZENoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB2YWwgPSB0aGlzLnRocmVzaG9sZDtcbiAgICAgICAgaWYgKHZhbC5sYXN0SW5kZXhPZignJScpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudGhyUHggPSAwO1xuICAgICAgICAgICAgdGhpcy50aHJQYyA9IChwYXJzZUZsb2F0KHZhbCkgLyAxMDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJQeCA9IHBhcnNlRmxvYXQodmFsKTtcbiAgICAgICAgICAgIHRoaXMudGhyUGMgPSAwO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5kaXNhYmxlZENoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNCdXN5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmFibGVTY3JvbGxFdmVudHMoIWRpc2FibGVkKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY29udGVudEVsLCBfYTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RWwgPSB0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1jb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRlbnRFbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJzxpb24taW5maW5pdGUtc2Nyb2xsPiBtdXN0IGJlIHVzZWQgaW5zaWRlIGFuIDxpb24tY29udGVudD4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBjb250ZW50RWwuZ2V0U2Nyb2xsRWxlbWVudCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2Nyb2xsRWwgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocmVzaG9sZENoYW5nZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWRDaGFuZ2VkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0ZVRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuc2Nyb2xsRWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNjcm9sbEVsLnNjcm9sbFRvcCA9IF90aGlzLnNjcm9sbEVsLnNjcm9sbEhlaWdodCAtIF90aGlzLnNjcm9sbEVsLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVuYWJsZVNjcm9sbEV2ZW50cyhmYWxzZSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsRWwgPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsIGBjb21wbGV0ZSgpYCB3aXRoaW4gdGhlIGBpb25JbmZpbml0ZWAgb3V0cHV0IGV2ZW50IGhhbmRsZXIgd2hlblxuICAgICAqIHlvdXIgYXN5bmMgb3BlcmF0aW9uIGhhcyBjb21wbGV0ZWQuIEZvciBleGFtcGxlLCB0aGUgYGxvYWRpbmdgXG4gICAgICogc3RhdGUgaXMgd2hpbGUgdGhlIGFwcCBpcyBwZXJmb3JtaW5nIGFuIGFzeW5jaHJvbm91cyBvcGVyYXRpb24sXG4gICAgICogc3VjaCBhcyByZWNlaXZpbmcgbW9yZSBkYXRhIGZyb20gYW4gQUpBWCByZXF1ZXN0IHRvIGFkZCBtb3JlIGl0ZW1zXG4gICAgICogdG8gYSBkYXRhIGxpc3QuIE9uY2UgdGhlIGRhdGEgaGFzIGJlZW4gcmVjZWl2ZWQgYW5kIFVJIHVwZGF0ZWQsIHlvdVxuICAgICAqIHRoZW4gY2FsbCB0aGlzIG1ldGhvZCB0byBzaWduaWZ5IHRoYXQgdGhlIGxvYWRpbmcgaGFzIGNvbXBsZXRlZC5cbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIGNoYW5nZSB0aGUgaW5maW5pdGUgc2Nyb2xsJ3Mgc3RhdGUgZnJvbSBgbG9hZGluZ2BcbiAgICAgKiB0byBgZW5hYmxlZGAuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzY3JvbGxFbCwgcHJldl8xO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxFbCA9IHRoaXMuc2Nyb2xsRWw7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTG9hZGluZyB8fCAhc2Nyb2xsRWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogTmV3IGNvbnRlbnQgaXMgYmVpbmcgYWRkZWQgYXQgdGhlIHRvcCwgYnV0IHRoZSBzY3JvbGxUb3AgcG9zaXRpb24gc3RheXMgdGhlIHNhbWUsXG4gICAgICAgICAgICAgICAgICAgICAqIHdoaWNoIGNhdXNlcyBhIHNjcm9sbCBqdW1wIHZpc3VhbGx5LiBUaGlzIGFsZ29yaXRobSBtYWtlcyBzdXJlIHRvIHByZXZlbnQgdGhpcy5cbiAgICAgICAgICAgICAgICAgICAgICogKEZyYW1lIDEpXG4gICAgICAgICAgICAgICAgICAgICAqICAgIC0gY29tcGxldGUoKSBpcyBjYWxsZWQsIGJ1dCB0aGUgVUkgaGFzbid0IGhhZCB0aW1lIHRvIHVwZGF0ZSB5ZXQuXG4gICAgICAgICAgICAgICAgICAgICAqICAgIC0gU2F2ZSB0aGUgY3VycmVudCBjb250ZW50IGRpbWVuc2lvbnMuXG4gICAgICAgICAgICAgICAgICAgICAqICAgIC0gV2FpdCBmb3IgdGhlIG5leHQgZnJhbWUgdXNpbmcgX2RvbS5yZWFkLCBzbyB0aGUgVUkgd2lsbCBiZSB1cGRhdGVkLlxuICAgICAgICAgICAgICAgICAgICAgKiAoRnJhbWUgMilcbiAgICAgICAgICAgICAgICAgICAgICogICAgLSBSZWFkIHRoZSBuZXcgY29udGVudCBkaW1lbnNpb25zLlxuICAgICAgICAgICAgICAgICAgICAgKiAgICAtIENhbGN1bGF0ZSB0aGUgaGVpZ2h0IGRpZmZlcmVuY2UgYW5kIHRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgKiAgICAtIERlbGF5IHRoZSBzY3JvbGwgcG9zaXRpb24gY2hhbmdlIHVudGlsIG90aGVyIHBvc3NpYmxlIGRvbSByZWFkcyBhcmUgZG9uZSB1c2luZyBfZG9tLndyaXRlIHRvIGJlIHBlcmZvcm1hbnQuXG4gICAgICAgICAgICAgICAgICAgICAqIChTdGlsbCBmcmFtZSAyLCBpZiBJJ20gY29ycmVjdClcbiAgICAgICAgICAgICAgICAgICAgICogICAgLSBDaGFuZ2UgdGhlIHNjcm9sbCBwb3NpdGlvbiAoPSB2aXN1YWxseSBtYWludGFpbiB0aGUgc2Nyb2xsIHBvc2l0aW9uKS5cbiAgICAgICAgICAgICAgICAgICAgICogICAgLSBDaGFuZ2UgdGhlIHN0YXRlIHRvIHJlLWVuYWJsZSB0aGUgSW5maW5pdGVTY3JvbGwuXG4gICAgICAgICAgICAgICAgICAgICAqICAgIC0gVGhpcyBzaG91bGQgYmUgYWZ0ZXIgY2hhbmdpbmcgdGhlIHNjcm9sbCBwb3NpdGlvbiwgb3IgaXQgY291bGRcbiAgICAgICAgICAgICAgICAgICAgICogICAgY2F1c2UgdGhlIEluZmluaXRlU2Nyb2xsIHRvIGJlIHRyaWdnZXJlZCBhZ2FpbiBpbW1lZGlhdGVseS5cbiAgICAgICAgICAgICAgICAgICAgICogKEZyYW1lIDMpXG4gICAgICAgICAgICAgICAgICAgICAqICAgIERvbmUuXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQnVzeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHByZXZfMSA9IHNjcm9sbEVsLnNjcm9sbEhlaWdodCAtIHNjcm9sbEVsLnNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFJFQUQgKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZFRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVJIGhhcyB1cGRhdGVkLCBzYXZlIHRoZSBuZXcgY29udGVudCBkaW1lbnNpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbEhlaWdodCA9IHNjcm9sbEVsLnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOZXcgY29udGVudCB3YXMgYWRkZWQgb24gdG9wLCBzbyB0aGUgc2Nyb2xsIHBvc2l0aW9uIHNob3VsZCBiZSBjaGFuZ2VkIGltbWVkaWF0ZWx5IHRvIHByZXZlbnQgaXQgZnJvbSBqdW1waW5nIGFyb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdTY3JvbGxUb3AgPSBzY3JvbGxIZWlnaHQgLSBwcmV2XzE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0ZVRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsRWwuc2Nyb2xsVG9wID0gbmV3U2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaXNCdXN5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jYW5TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICghdGhpcy5kaXNhYmxlZCAmJlxuICAgICAgICAgICAgIXRoaXMuaXNCdXN5ICYmXG4gICAgICAgICAgICAhIXRoaXMuc2Nyb2xsRWwgJiZcbiAgICAgICAgICAgICF0aGlzLmlzTG9hZGluZyk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5lbmFibGVTY3JvbGxFdmVudHMgPSBmdW5jdGlvbiAoc2hvdWxkTGlzdGVuKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEVsKSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkTGlzdGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxFbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHZhciBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVttb2RlXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2FbJ2luZmluaXRlLXNjcm9sbC1sb2FkaW5nJ10gPSB0aGlzLmlzTG9hZGluZyxcbiAgICAgICAgICAgICAgICBfYVsnaW5maW5pdGUtc2Nyb2xsLWVuYWJsZWQnXSA9ICFkaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBfYSkgfSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJ3YXRjaGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcInRocmVzaG9sZFwiOiBbXCJ0aHJlc2hvbGRDaGFuZ2VkXCJdLFxuICAgICAgICAgICAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJpb24taW5maW5pdGUtc2Nyb2xse2Rpc3BsYXk6bm9uZTt3aWR0aDoxMDAlfS5pbmZpbml0ZS1zY3JvbGwtZW5hYmxlZHtkaXNwbGF5OmJsb2NrfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NfMTtcbn0oKSk7XG52YXIgSW5maW5pdGVTY3JvbGxDb250ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEluZmluaXRlU2Nyb2xsQ29udGVudChob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgfVxuICAgIEluZmluaXRlU2Nyb2xsQ29udGVudC5wcm90b3R5cGUuY29tcG9uZW50RGlkTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZ1NwaW5uZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nU3Bpbm5lciA9IGNvbmZpZy5nZXQoJ2luZmluaXRlTG9hZGluZ1NwaW5uZXInLCBjb25maWcuZ2V0KCdzcGlubmVyJywgbW9kZSA9PT0gJ2lvcycgPyAnbGluZXMnIDogJ2NyZXNjZW50JykpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBJbmZpbml0ZVNjcm9sbENvbnRlbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVttb2RlXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gVXNlZCBpbnRlcm5hbGx5IGZvciBzdHlsaW5nXG4gICAgICAgICAgICAgICAgX2FbXCJpbmZpbml0ZS1zY3JvbGwtY29udGVudC1cIiArIG1vZGVdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYSkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImluZmluaXRlLWxvYWRpbmdcIiB9LCB0aGlzLmxvYWRpbmdTcGlubmVyICYmIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5maW5pdGUtbG9hZGluZy1zcGlubmVyXCIgfSwgaChcImlvbi1zcGlubmVyXCIsIHsgbmFtZTogdGhpcy5sb2FkaW5nU3Bpbm5lciB9KSkpLCB0aGlzLmxvYWRpbmdUZXh0ICYmIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5maW5pdGUtbG9hZGluZy10ZXh0XCIsIGlubmVySFRNTDogc2FuaXRpemVET01TdHJpbmcodGhpcy5sb2FkaW5nVGV4dCkgfSkpKSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEluZmluaXRlU2Nyb2xsQ29udGVudCwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJpb24taW5maW5pdGUtc2Nyb2xsLWNvbnRlbnR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttaW4taGVpZ2h0Ojg0cHg7dGV4dC1hbGlnbjpjZW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5pbmZpbml0ZS1sb2FkaW5ne21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MzJweDtkaXNwbGF5Om5vbmU7d2lkdGg6MTAwJX0uaW5maW5pdGUtbG9hZGluZy10ZXh0e21hcmdpbi1sZWZ0OjMycHg7bWFyZ2luLXJpZ2h0OjMycHg7bWFyZ2luLXRvcDo0cHg7bWFyZ2luLWJvdHRvbTowfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuaW5maW5pdGUtbG9hZGluZy10ZXh0e21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDozMnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MzJweDstd2Via2l0LW1hcmdpbi1lbmQ6MzJweDttYXJnaW4taW5saW5lLWVuZDozMnB4fX0uaW5maW5pdGUtc2Nyb2xsLWxvYWRpbmcgaW9uLWluZmluaXRlLXNjcm9sbC1jb250ZW50Pi5pbmZpbml0ZS1sb2FkaW5ne2Rpc3BsYXk6YmxvY2t9LmluZmluaXRlLXNjcm9sbC1jb250ZW50LW1kIC5pbmZpbml0ZS1sb2FkaW5nLXRleHR7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCM2NjYpfS5pbmZpbml0ZS1zY3JvbGwtY29udGVudC1tZCAuaW5maW5pdGUtbG9hZGluZy1zcGlubmVyIC5zcGlubmVyLWNyZXNjZW50IGNpcmNsZSwuaW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQtbWQgLmluZmluaXRlLWxvYWRpbmctc3Bpbm5lciAuc3Bpbm5lci1saW5lcy1tZCBsaW5lLC5pbmZpbml0ZS1zY3JvbGwtY29udGVudC1tZCAuaW5maW5pdGUtbG9hZGluZy1zcGlubmVyIC5zcGlubmVyLWxpbmVzLXNtYWxsLW1kIGxpbmV7c3Ryb2tlOnZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwjNjY2KX0uaW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQtbWQgLmluZmluaXRlLWxvYWRpbmctc3Bpbm5lciAuc3Bpbm5lci1idWJibGVzIGNpcmNsZSwuaW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQtbWQgLmluZmluaXRlLWxvYWRpbmctc3Bpbm5lciAuc3Bpbm5lci1jaXJjbGVzIGNpcmNsZSwuaW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQtbWQgLmluZmluaXRlLWxvYWRpbmctc3Bpbm5lciAuc3Bpbm5lci1kb3RzIGNpcmNsZXtmaWxsOnZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwjNjY2KX1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEluZmluaXRlU2Nyb2xsQ29udGVudDtcbn0oKSk7XG5leHBvcnQgeyBJbmZpbml0ZVNjcm9sbCBhcyBpb25faW5maW5pdGVfc2Nyb2xsLCBJbmZpbml0ZVNjcm9sbENvbnRlbnQgYXMgaW9uX2luZmluaXRlX3Njcm9sbF9jb250ZW50IH07XG4iXSwic291cmNlUm9vdCI6IiJ9