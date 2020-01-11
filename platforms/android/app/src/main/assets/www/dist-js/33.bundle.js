(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

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

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-infinite-scroll_2-ios.entry.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-infinite-scroll_2-ios.entry.js ***!
  \**********************************************************************************/
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
        get: function () { return "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"; },
        enumerable: true,
        configurable: true
    });
    return InfiniteScrollContent;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2luZGV4LTM0NzZiMDIzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvaW9uLWluZmluaXRlLXNjcm9sbF8yLWlvcy5lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxtQkFBbUI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxtQ0FBbUM7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdDQUFnQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0M7Ozs7Ozs7Ozs7Ozs7QUM5R2xDO0FBQUE7QUFBQTtBQUFBO0FBQUE7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MEJBQTBCLDJEQUFDLFNBQVMsNENBQTRDLDREQUFpQixvQkFBb0I7QUFDMVM7QUFDQTtBQUNBLDBCQUEwQixxQ0FBcUMsb0JBQW9CLGFBQWEsMEJBQTBCLHNCQUFzQixxQkFBcUIsdUJBQXVCLGdCQUFnQixrQkFBa0IseUJBQXlCLHNCQUFzQixxQkFBcUIsaUJBQWlCLGtCQUFrQixjQUFjLGVBQWUsYUFBYSxtQkFBbUIsYUFBYSxXQUFXLHVCQUF1QixpQkFBaUIsa0JBQWtCLGVBQWUsZ0JBQWdCLDZGQUE2Rix1QkFBdUIsa0JBQWtCLG1CQUFtQiwwQkFBMEIseUJBQXlCLHdCQUF3Qix3QkFBd0IsdUVBQXVFLGNBQWMsb0RBQW9ELHFDQUFxQyxvUEFBb1Asc0NBQXNDLDBPQUEwTyxvQ0FBb0MsRUFBRSxFQUFFO0FBQ3o4QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNzRyIsImZpbGUiOiIzMy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIERvZXMgYSBzaW1wbGUgc2FuaXRpemF0aW9uIG9mIGFsbCBlbGVtZW50c1xuICogaW4gYW4gdW50cnVzdGVkIHN0cmluZ1xuICovXG52YXIgc2FuaXRpemVET01TdHJpbmcgPSBmdW5jdGlvbiAodW50cnVzdGVkU3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiB1bnRydXN0ZWRTdHJpbmcgIT09ICdzdHJpbmcnIHx8IHVudHJ1c3RlZFN0cmluZyA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiB1bnRydXN0ZWRTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50XG4gICAgICAgICAqIHNlcGFyYXRlIGZyb20gdGhlIG1haW4gRE9NLFxuICAgICAgICAgKiBjcmVhdGUgYSBkaXYgdG8gZG8gb3VyIHdvcmsgaW5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBkb2N1bWVudEZyYWdtZW50XzEgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHZhciB3b3JraW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRvY3VtZW50RnJhZ21lbnRfMS5hcHBlbmRDaGlsZCh3b3JraW5nRGl2KTtcbiAgICAgICAgd29ya2luZ0Rpdi5pbm5lckhUTUwgPSB1bnRydXN0ZWRTdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgYW55IGVsZW1lbnRzXG4gICAgICAgICAqIHRoYXQgYXJlIGJsb2NrZWRcbiAgICAgICAgICovXG4gICAgICAgIGJsb2NrZWRUYWdzLmZvckVhY2goZnVuY3Rpb24gKGJsb2NrZWRUYWcpIHtcbiAgICAgICAgICAgIHZhciBnZXRFbGVtZW50c1RvUmVtb3ZlID0gZG9jdW1lbnRGcmFnbWVudF8xLnF1ZXJ5U2VsZWN0b3JBbGwoYmxvY2tlZFRhZyk7XG4gICAgICAgICAgICBmb3IgKHZhciBlbGVtZW50SW5kZXggPSBnZXRFbGVtZW50c1RvUmVtb3ZlLmxlbmd0aCAtIDE7IGVsZW1lbnRJbmRleCA+PSAwOyBlbGVtZW50SW5kZXgtLSkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZ2V0RWxlbWVudHNUb1JlbW92ZVtlbGVtZW50SW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRGcmFnbWVudF8xLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBXZSBzdGlsbCBuZWVkIHRvIHNhbml0aXplXG4gICAgICAgICAgICAgICAgICogdGhlIGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudFxuICAgICAgICAgICAgICAgICAqIGFzIHRoZXkgYXJlIGxlZnQgYmVoaW5kXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkRWxlbWVudHMgPSBnZXRFbGVtZW50Q2hpbGRyZW4oZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY2hpbGRJbmRleCA9IDA7IGNoaWxkSW5kZXggPCBjaGlsZEVsZW1lbnRzLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNhbml0aXplRWxlbWVudChjaGlsZEVsZW1lbnRzW2NoaWxkSW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogR28gdGhyb3VnaCByZW1haW5pbmcgZWxlbWVudHMgYW5kIHJlbW92ZVxuICAgICAgICAgKiBub24tYWxsb3dlZCBhdHRyaWJzXG4gICAgICAgICAqL1xuICAgICAgICAvLyBJRSBkb2VzIG5vdCBzdXBwb3J0IC5jaGlsZHJlbiBvbiBkb2N1bWVudCBmcmFnbWVudHMsIG9ubHkgLmNoaWxkTm9kZXNcbiAgICAgICAgdmFyIGRmQ2hpbGRyZW4gPSBnZXRFbGVtZW50Q2hpbGRyZW4oZG9jdW1lbnRGcmFnbWVudF8xKTtcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgIGZvciAodmFyIGNoaWxkSW5kZXggPSAwOyBjaGlsZEluZGV4IDwgZGZDaGlsZHJlbi5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xuICAgICAgICAgICAgc2FuaXRpemVFbGVtZW50KGRmQ2hpbGRyZW5bY2hpbGRJbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFwcGVuZCBkb2N1bWVudCBmcmFnbWVudCB0byBkaXZcbiAgICAgICAgdmFyIGZyYWdtZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZyYWdtZW50RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50RnJhZ21lbnRfMSk7XG4gICAgICAgIC8vIEZpcnN0IGNoaWxkIGlzIGFsd2F5cyB0aGUgZGl2IHdlIGRpZCBvdXIgd29yayBpblxuICAgICAgICB2YXIgZ2V0SW5uZXJEaXYgPSBmcmFnbWVudERpdi5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICAgICAgcmV0dXJuIChnZXRJbm5lckRpdiAhPT0gbnVsbCkgPyBnZXRJbm5lckRpdi5pbm5lckhUTUwgOiBmcmFnbWVudERpdi5pbm5lckhUTUw7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufTtcbi8qKlxuICogQ2xlYW4gdXAgY3VycmVudCBlbGVtZW50IGJhc2VkIG9uIGFsbG93ZWQgYXR0cmlidXRlc1xuICogYW5kIHRoZW4gcmVjdXJzaXZlbHkgZGlnIGRvd24gaW50byBhbnkgY2hpbGQgZWxlbWVudHMgdG9cbiAqIGNsZWFuIHRob3NlIHVwIGFzIHdlbGxcbiAqL1xudmFyIHNhbml0aXplRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgLy8gSUUgdXNlcyBjaGlsZE5vZGVzLCBzbyBpZ25vcmUgbm9kZXMgdGhhdCBhcmUgbm90IGVsZW1lbnRzXG4gICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZSA9IGVsZW1lbnQuYXR0cmlidXRlcy5pdGVtKGkpO1xuICAgICAgICB2YXIgYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZS5uYW1lO1xuICAgICAgICAvLyByZW1vdmUgbm9uLWFsbG93ZWQgYXR0cmlic1xuICAgICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2xlYW4gdXAgYW55IGFsbG93ZWQgYXR0cmlic1xuICAgICAgICAvLyB0aGF0IGF0dGVtcHQgdG8gZG8gYW55IEpTIGZ1bm55LWJ1c2luZXNzXG4gICAgICAgIHZhciBhdHRyaWJ1dGVWYWx1ZSA9IGF0dHJpYnV0ZS52YWx1ZTtcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgIGlmIChhdHRyaWJ1dGVWYWx1ZSAhPSBudWxsICYmIGF0dHJpYnV0ZVZhbHVlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2phdmFzY3JpcHQ6JykpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNhbml0aXplIGFueSBuZXN0ZWQgY2hpbGRyZW5cbiAgICAgKi9cbiAgICB2YXIgY2hpbGRFbGVtZW50cyA9IGdldEVsZW1lbnRDaGlsZHJlbihlbGVtZW50KTtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2FuaXRpemVFbGVtZW50KGNoaWxkRWxlbWVudHNbaV0pO1xuICAgIH1cbn07XG4vKipcbiAqIElFIGRvZXNuJ3QgYWx3YXlzIHN1cHBvcnQgLmNoaWxkcmVuXG4gKiBzbyB3ZSByZXZlcnQgdG8gLmNoaWxkTm9kZXMgaW5zdGVhZFxuICovXG52YXIgZ2V0RWxlbWVudENoaWxkcmVuID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgcmV0dXJuIChlbC5jaGlsZHJlbiAhPSBudWxsKSA/IGVsLmNoaWxkcmVuIDogZWwuY2hpbGROb2Rlcztcbn07XG52YXIgYWxsb3dlZEF0dHJpYnV0ZXMgPSBbJ2NsYXNzJywgJ2lkJywgJ2hyZWYnLCAnc3JjJywgJ25hbWUnLCAnc2xvdCddO1xudmFyIGJsb2NrZWRUYWdzID0gWydzY3JpcHQnLCAnc3R5bGUnLCAnaWZyYW1lJywgJ21ldGEnLCAnbGluaycsICdvYmplY3QnLCAnZW1iZWQnXTtcbmV4cG9ydCB7IHNhbml0aXplRE9NU3RyaW5nIGFzIHMgfTtcbiIsImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgZCBhcyBjcmVhdGVFdmVudCwgdyBhcyB3cml0ZVRhc2ssIGYgYXMgcmVhZFRhc2ssIGMgYXMgZ2V0SW9uTW9kZSwgaCwgZSBhcyBnZXRFbGVtZW50LCBIIGFzIEhvc3QgfSBmcm9tICcuL2NvcmUtZmVlZWZmMGQuanMnO1xuaW1wb3J0IHsgYiBhcyBjb25maWcgfSBmcm9tICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBzIGFzIHNhbml0aXplRE9NU3RyaW5nIH0gZnJvbSAnLi9pbmRleC0zNDc2YjAyMy5qcyc7XG52YXIgSW5maW5pdGVTY3JvbGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMShob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMudGhyUHggPSAwO1xuICAgICAgICB0aGlzLnRoclBjID0gMDtcbiAgICAgICAgdGhpcy5kaWRGaXJlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNCdXN5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGhyZXNob2xkIGRpc3RhbmNlIGZyb20gdGhlIGJvdHRvbVxuICAgICAgICAgKiBvZiB0aGUgY29udGVudCB0byBjYWxsIHRoZSBgaW5maW5pdGVgIG91dHB1dCBldmVudCB3aGVuIHNjcm9sbGVkLlxuICAgICAgICAgKiBUaGUgdGhyZXNob2xkIHZhbHVlIGNhbiBiZSBlaXRoZXIgYSBwZXJjZW50LCBvclxuICAgICAgICAgKiBpbiBwaXhlbHMuIEZvciBleGFtcGxlLCB1c2UgdGhlIHZhbHVlIG9mIGAxMCVgIGZvciB0aGUgYGluZmluaXRlYFxuICAgICAgICAgKiBvdXRwdXQgZXZlbnQgdG8gZ2V0IGNhbGxlZCB3aGVuIHRoZSB1c2VyIGhhcyBzY3JvbGxlZCAxMCVcbiAgICAgICAgICogZnJvbSB0aGUgYm90dG9tIG9mIHRoZSBwYWdlLiBVc2UgdGhlIHZhbHVlIGAxMDBweGAgd2hlbiB0aGVcbiAgICAgICAgICogc2Nyb2xsIGlzIHdpdGhpbiAxMDAgcGl4ZWxzIGZyb20gdGhlIGJvdHRvbSBvZiB0aGUgcGFnZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGhyZXNob2xkID0gJzE1JSc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbmZpbml0ZSBzY3JvbGwgd2lsbCBiZSBoaWRkZW4gYW5kIHNjcm9sbCBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgICogd2lsbCBiZSByZW1vdmVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBTZXQgdGhpcyB0byB0cnVlIHRvIGRpc2FibGUgdGhlIGluZmluaXRlIHNjcm9sbCBmcm9tIGFjdGl2ZWx5XG4gICAgICAgICAqIHRyeWluZyB0byByZWNlaXZlIG5ldyBkYXRhIHdoaWxlIHNjcm9sbGluZy4gVGhpcyBpcyB1c2VmdWxcbiAgICAgICAgICogd2hlbiBpdCBpcyBrbm93biB0aGF0IHRoZXJlIGlzIG5vIG1vcmUgZGF0YSB0aGF0IGNhbiBiZSBhZGRlZCwgYW5kXG4gICAgICAgICAqIHRoZSBpbmZpbml0ZSBzY3JvbGwgaXMgbm8gbG9uZ2VyIG5lZWRlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgaW5maW5pdGUgc2Nyb2xsIGVsZW1lbnQuXG4gICAgICAgICAqIFRoZSB2YWx1ZSBjYW4gYmUgZWl0aGVyIGB0b3BgIG9yIGBib3R0b21gLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9ICdib3R0b20nO1xuICAgICAgICB0aGlzLm9uU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNjcm9sbEVsID0gX3RoaXMuc2Nyb2xsRWw7XG4gICAgICAgICAgICBpZiAoIXNjcm9sbEVsIHx8ICFfdGhpcy5jYW5TdGFydCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaW5maW5pdGVIZWlnaHQgPSBfdGhpcy5lbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBpZiAoaW5maW5pdGVIZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyBoZWlnaHQgb2YgdGhpcyBlbGVtZW50IHRoZW4gZG8gbm90aGluZ1xuICAgICAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9IHNjcm9sbEVsLnNjcm9sbFRvcDtcbiAgICAgICAgICAgIHZhciBzY3JvbGxIZWlnaHQgPSBzY3JvbGxFbC5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gc2Nyb2xsRWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgdmFyIHRocmVzaG9sZCA9IF90aGlzLnRoclBjICE9PSAwID8gKGhlaWdodCAqIF90aGlzLnRoclBjKSA6IF90aGlzLnRoclB4O1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlRnJvbUluZmluaXRlID0gKF90aGlzLnBvc2l0aW9uID09PSAnYm90dG9tJylcbiAgICAgICAgICAgICAgICA/IHNjcm9sbEhlaWdodCAtIGluZmluaXRlSGVpZ2h0IC0gc2Nyb2xsVG9wIC0gdGhyZXNob2xkIC0gaGVpZ2h0XG4gICAgICAgICAgICAgICAgOiBzY3JvbGxUb3AgLSBpbmZpbml0ZUhlaWdodCAtIHRocmVzaG9sZDtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZUZyb21JbmZpbml0ZSA8IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLmRpZEZpcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGlkRmlyZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmlvbkluZmluaXRlLmVtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGlkRmlyZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDQ7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW9uSW5maW5pdGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkluZmluaXRlXCIsIDcpO1xuICAgIH1cbiAgICBjbGFzc18xLnByb3RvdHlwZS50aHJlc2hvbGRDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsID0gdGhpcy50aHJlc2hvbGQ7XG4gICAgICAgIGlmICh2YWwubGFzdEluZGV4T2YoJyUnKSA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnRoclB4ID0gMDtcbiAgICAgICAgICAgIHRoaXMudGhyUGMgPSAocGFyc2VGbG9hdCh2YWwpIC8gMTAwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyUHggPSBwYXJzZUZsb2F0KHZhbCk7XG4gICAgICAgICAgICB0aGlzLnRoclBjID0gMDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZGlzYWJsZWRDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuICAgICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzQnVzeSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5hYmxlU2Nyb2xsRXZlbnRzKCFkaXNhYmxlZCk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRFbCwgX2E7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEVsID0gdGhpcy5lbC5jbG9zZXN0KCdpb24tY29udGVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb250ZW50RWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCc8aW9uLWluZmluaXRlLXNjcm9sbD4gbXVzdCBiZSB1c2VkIGluc2lkZSBhbiA8aW9uLWNvbnRlbnQ+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY29udGVudEVsLmdldFNjcm9sbEVsZW1lbnQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNjcm9sbEVsID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJlc2hvbGRDaGFuZ2VkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkQ2hhbmdlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGVUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnNjcm9sbEVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zY3JvbGxFbC5zY3JvbGxUb3AgPSBfdGhpcy5zY3JvbGxFbC5zY3JvbGxIZWlnaHQgLSBfdGhpcy5zY3JvbGxFbC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbmFibGVTY3JvbGxFdmVudHMoZmFsc2UpO1xuICAgICAgICB0aGlzLnNjcm9sbEVsID0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbCBgY29tcGxldGUoKWAgd2l0aGluIHRoZSBgaW9uSW5maW5pdGVgIG91dHB1dCBldmVudCBoYW5kbGVyIHdoZW5cbiAgICAgKiB5b3VyIGFzeW5jIG9wZXJhdGlvbiBoYXMgY29tcGxldGVkLiBGb3IgZXhhbXBsZSwgdGhlIGBsb2FkaW5nYFxuICAgICAqIHN0YXRlIGlzIHdoaWxlIHRoZSBhcHAgaXMgcGVyZm9ybWluZyBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uLFxuICAgICAqIHN1Y2ggYXMgcmVjZWl2aW5nIG1vcmUgZGF0YSBmcm9tIGFuIEFKQVggcmVxdWVzdCB0byBhZGQgbW9yZSBpdGVtc1xuICAgICAqIHRvIGEgZGF0YSBsaXN0LiBPbmNlIHRoZSBkYXRhIGhhcyBiZWVuIHJlY2VpdmVkIGFuZCBVSSB1cGRhdGVkLCB5b3VcbiAgICAgKiB0aGVuIGNhbGwgdGhpcyBtZXRob2QgdG8gc2lnbmlmeSB0aGF0IHRoZSBsb2FkaW5nIGhhcyBjb21wbGV0ZWQuXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCBjaGFuZ2UgdGhlIGluZmluaXRlIHNjcm9sbCdzIHN0YXRlIGZyb20gYGxvYWRpbmdgXG4gICAgICogdG8gYGVuYWJsZWRgLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsRWwsIHByZXZfMTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsRWwgPSB0aGlzLnNjcm9sbEVsO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0xvYWRpbmcgfHwgIXNjcm9sbEVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIE5ldyBjb250ZW50IGlzIGJlaW5nIGFkZGVkIGF0IHRoZSB0b3AsIGJ1dCB0aGUgc2Nyb2xsVG9wIHBvc2l0aW9uIHN0YXlzIHRoZSBzYW1lLFxuICAgICAgICAgICAgICAgICAgICAgKiB3aGljaCBjYXVzZXMgYSBzY3JvbGwganVtcCB2aXN1YWxseS4gVGhpcyBhbGdvcml0aG0gbWFrZXMgc3VyZSB0byBwcmV2ZW50IHRoaXMuXG4gICAgICAgICAgICAgICAgICAgICAqIChGcmFtZSAxKVxuICAgICAgICAgICAgICAgICAgICAgKiAgICAtIGNvbXBsZXRlKCkgaXMgY2FsbGVkLCBidXQgdGhlIFVJIGhhc24ndCBoYWQgdGltZSB0byB1cGRhdGUgeWV0LlxuICAgICAgICAgICAgICAgICAgICAgKiAgICAtIFNhdmUgdGhlIGN1cnJlbnQgY29udGVudCBkaW1lbnNpb25zLlxuICAgICAgICAgICAgICAgICAgICAgKiAgICAtIFdhaXQgZm9yIHRoZSBuZXh0IGZyYW1lIHVzaW5nIF9kb20ucmVhZCwgc28gdGhlIFVJIHdpbGwgYmUgdXBkYXRlZC5cbiAgICAgICAgICAgICAgICAgICAgICogKEZyYW1lIDIpXG4gICAgICAgICAgICAgICAgICAgICAqICAgIC0gUmVhZCB0aGUgbmV3IGNvbnRlbnQgZGltZW5zaW9ucy5cbiAgICAgICAgICAgICAgICAgICAgICogICAgLSBDYWxjdWxhdGUgdGhlIGhlaWdodCBkaWZmZXJlbmNlIGFuZCB0aGUgbmV3IHNjcm9sbCBwb3NpdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICogICAgLSBEZWxheSB0aGUgc2Nyb2xsIHBvc2l0aW9uIGNoYW5nZSB1bnRpbCBvdGhlciBwb3NzaWJsZSBkb20gcmVhZHMgYXJlIGRvbmUgdXNpbmcgX2RvbS53cml0ZSB0byBiZSBwZXJmb3JtYW50LlxuICAgICAgICAgICAgICAgICAgICAgKiAoU3RpbGwgZnJhbWUgMiwgaWYgSSdtIGNvcnJlY3QpXG4gICAgICAgICAgICAgICAgICAgICAqICAgIC0gQ2hhbmdlIHRoZSBzY3JvbGwgcG9zaXRpb24gKD0gdmlzdWFsbHkgbWFpbnRhaW4gdGhlIHNjcm9sbCBwb3NpdGlvbikuXG4gICAgICAgICAgICAgICAgICAgICAqICAgIC0gQ2hhbmdlIHRoZSBzdGF0ZSB0byByZS1lbmFibGUgdGhlIEluZmluaXRlU2Nyb2xsLlxuICAgICAgICAgICAgICAgICAgICAgKiAgICAtIFRoaXMgc2hvdWxkIGJlIGFmdGVyIGNoYW5naW5nIHRoZSBzY3JvbGwgcG9zaXRpb24sIG9yIGl0IGNvdWxkXG4gICAgICAgICAgICAgICAgICAgICAqICAgIGNhdXNlIHRoZSBJbmZpbml0ZVNjcm9sbCB0byBiZSB0cmlnZ2VyZWQgYWdhaW4gaW1tZWRpYXRlbHkuXG4gICAgICAgICAgICAgICAgICAgICAqIChGcmFtZSAzKVxuICAgICAgICAgICAgICAgICAgICAgKiAgICBEb25lLlxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0J1c3kgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBwcmV2XzEgPSBzY3JvbGxFbC5zY3JvbGxIZWlnaHQgLSBzY3JvbGxFbC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBSRUFEICoqKioqKioqKioqKioqKipcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVSSBoYXMgdXBkYXRlZCwgc2F2ZSB0aGUgbmV3IGNvbnRlbnQgZGltZW5zaW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzY3JvbGxIZWlnaHQgPSBzY3JvbGxFbC5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmV3IGNvbnRlbnQgd2FzIGFkZGVkIG9uIHRvcCwgc28gdGhlIHNjcm9sbCBwb3NpdGlvbiBzaG91bGQgYmUgY2hhbmdlZCBpbW1lZGlhdGVseSB0byBwcmV2ZW50IGl0IGZyb20ganVtcGluZyBhcm91bmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3U2Nyb2xsVG9wID0gc2Nyb2xsSGVpZ2h0IC0gcHJldl8xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGVUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbEVsLnNjcm9sbFRvcCA9IG5ld1Njcm9sbFRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmlzQnVzeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY2FuU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoIXRoaXMuZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICF0aGlzLmlzQnVzeSAmJlxuICAgICAgICAgICAgISF0aGlzLnNjcm9sbEVsICYmXG4gICAgICAgICAgICAhdGhpcy5pc0xvYWRpbmcpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZW5hYmxlU2Nyb2xsRXZlbnRzID0gZnVuY3Rpb24gKHNob3VsZExpc3Rlbikge1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxFbCkge1xuICAgICAgICAgICAgaWYgKHNob3VsZExpc3Rlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsRWwuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICB2YXIgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczogKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hWydpbmZpbml0ZS1zY3JvbGwtbG9hZGluZyddID0gdGhpcy5pc0xvYWRpbmcsXG4gICAgICAgICAgICAgICAgX2FbJ2luZmluaXRlLXNjcm9sbC1lbmFibGVkJ10gPSAhZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgX2EpIH0pKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEsIFwid2F0Y2hlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJ0aHJlc2hvbGRcIjogW1widGhyZXNob2xkQ2hhbmdlZFwiXSxcbiAgICAgICAgICAgICAgICBcImRpc2FibGVkXCI6IFtcImRpc2FibGVkQ2hhbmdlZFwiXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEsIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiaW9uLWluZmluaXRlLXNjcm9sbHtkaXNwbGF5Om5vbmU7d2lkdGg6MTAwJX0uaW5maW5pdGUtc2Nyb2xsLWVuYWJsZWR7ZGlzcGxheTpibG9ja31cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzE7XG59KCkpO1xudmFyIEluZmluaXRlU2Nyb2xsQ29udGVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJbmZpbml0ZVNjcm9sbENvbnRlbnQoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIH1cbiAgICBJbmZpbml0ZVNjcm9sbENvbnRlbnQucHJvdG90eXBlLmNvbXBvbmVudERpZExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmdTcGlubmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1NwaW5uZXIgPSBjb25maWcuZ2V0KCdpbmZpbml0ZUxvYWRpbmdTcGlubmVyJywgY29uZmlnLmdldCgnc3Bpbm5lcicsIG1vZGUgPT09ICdpb3MnID8gJ2xpbmVzJyA6ICdjcmVzY2VudCcpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSW5maW5pdGVTY3JvbGxDb250ZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczogKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIC8vIFVzZWQgaW50ZXJuYWxseSBmb3Igc3R5bGluZ1xuICAgICAgICAgICAgICAgIF9hW1wiaW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQtXCIgKyBtb2RlXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2EpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJpbmZpbml0ZS1sb2FkaW5nXCIgfSwgdGhpcy5sb2FkaW5nU3Bpbm5lciAmJiAoaChcImRpdlwiLCB7IGNsYXNzOiBcImluZmluaXRlLWxvYWRpbmctc3Bpbm5lclwiIH0sIGgoXCJpb24tc3Bpbm5lclwiLCB7IG5hbWU6IHRoaXMubG9hZGluZ1NwaW5uZXIgfSkpKSwgdGhpcy5sb2FkaW5nVGV4dCAmJiAoaChcImRpdlwiLCB7IGNsYXNzOiBcImluZmluaXRlLWxvYWRpbmctdGV4dFwiLCBpbm5lckhUTUw6IHNhbml0aXplRE9NU3RyaW5nKHRoaXMubG9hZGluZ1RleHQpIH0pKSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbmZpbml0ZVNjcm9sbENvbnRlbnQsIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiaW9uLWluZmluaXRlLXNjcm9sbC1jb250ZW50e2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWluLWhlaWdodDo4NHB4O3RleHQtYWxpZ246Y2VudGVyOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uaW5maW5pdGUtbG9hZGluZ3ttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjMycHg7ZGlzcGxheTpub25lO3dpZHRoOjEwMCV9LmluZmluaXRlLWxvYWRpbmctdGV4dHttYXJnaW4tbGVmdDozMnB4O21hcmdpbi1yaWdodDozMnB4O21hcmdpbi10b3A6NHB4O21hcmdpbi1ib3R0b206MH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmluZmluaXRlLWxvYWRpbmctdGV4dHttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MzJweDttYXJnaW4taW5saW5lLXN0YXJ0OjMycHg7LXdlYmtpdC1tYXJnaW4tZW5kOjMycHg7bWFyZ2luLWlubGluZS1lbmQ6MzJweH19LmluZmluaXRlLXNjcm9sbC1sb2FkaW5nIGlvbi1pbmZpbml0ZS1zY3JvbGwtY29udGVudD4uaW5maW5pdGUtbG9hZGluZ3tkaXNwbGF5OmJsb2NrfS5pbmZpbml0ZS1zY3JvbGwtY29udGVudC1pb3MgLmluZmluaXRlLWxvYWRpbmctdGV4dHtjb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIzY2Nil9LmluZmluaXRlLXNjcm9sbC1jb250ZW50LWlvcyAuaW5maW5pdGUtbG9hZGluZy1zcGlubmVyIC5zcGlubmVyLWNyZXNjZW50IGNpcmNsZSwuaW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQtaW9zIC5pbmZpbml0ZS1sb2FkaW5nLXNwaW5uZXIgLnNwaW5uZXItbGluZXMtaW9zIGxpbmUsLmluZmluaXRlLXNjcm9sbC1jb250ZW50LWlvcyAuaW5maW5pdGUtbG9hZGluZy1zcGlubmVyIC5zcGlubmVyLWxpbmVzLXNtYWxsLWlvcyBsaW5le3N0cm9rZTp2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIzY2Nil9LmluZmluaXRlLXNjcm9sbC1jb250ZW50LWlvcyAuaW5maW5pdGUtbG9hZGluZy1zcGlubmVyIC5zcGlubmVyLWJ1YmJsZXMgY2lyY2xlLC5pbmZpbml0ZS1zY3JvbGwtY29udGVudC1pb3MgLmluZmluaXRlLWxvYWRpbmctc3Bpbm5lciAuc3Bpbm5lci1jaXJjbGVzIGNpcmNsZSwuaW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQtaW9zIC5pbmZpbml0ZS1sb2FkaW5nLXNwaW5uZXIgLnNwaW5uZXItZG90cyBjaXJjbGV7ZmlsbDp2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIzY2Nil9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBJbmZpbml0ZVNjcm9sbENvbnRlbnQ7XG59KCkpO1xuZXhwb3J0IHsgSW5maW5pdGVTY3JvbGwgYXMgaW9uX2luZmluaXRlX3Njcm9sbCwgSW5maW5pdGVTY3JvbGxDb250ZW50IGFzIGlvbl9pbmZpbml0ZV9zY3JvbGxfY29udGVudCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==