(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js ***!
  \******************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-reorder_2-md.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-reorder_2-md.entry.js ***!
  \*************************************************************************/
/*! exports provided: ion_reorder, ion_reorder_group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_reorder", function() { return Reorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_reorder_group", function() { return ReorderGroup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./haptic-c8f1473e.js */ "./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js");




var Reorder = /** @class */ (function () {
    function Reorder(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
    }
    Reorder.prototype.onClick = function (ev) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
    };
    Reorder.prototype.render = function () {
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon", { name: "reorder", lazy: false, class: "reorder-icon" }))));
    };
    Object.defineProperty(Reorder, "style", {
        get: function () { return ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:31px;opacity:.3}"; },
        enumerable: true,
        configurable: true
    });
    return Reorder;
}());
var ReorderGroup = /** @class */ (function () {
    function class_1(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.lastToIndex = -1;
        this.cachedHeights = [];
        this.scrollElTop = 0;
        this.scrollElBottom = 0;
        this.scrollElInitial = 0;
        this.containerTop = 0;
        this.containerBottom = 0;
        this.state = 0 /* Idle */;
        /**
         * If `true`, the reorder will be hidden.
         */
        this.disabled = true;
        this.ionItemReorder = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionItemReorder", 7);
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
                        contentEl = this.el.closest('ion-content');
                        if (!contentEl) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, contentEl.getScrollElement()];
                    case 1:
                        _a.scrollEl = _c.sent();
                        _c.label = 2;
                    case 2:
                        _b = this;
                        return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "./node_modules/@ionic/core/dist/esm-es5/index-624eea58.js"))];
                    case 3:
                        _b.gesture = (_c.sent()).createGesture({
                            el: this.el,
                            gestureName: 'reorder',
                            gesturePriority: 110,
                            threshold: 0,
                            direction: 'y',
                            passive: false,
                            canStart: function (detail) { return _this.canStart(detail); },
                            onStart: function (ev) { return _this.onStart(ev); },
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
        this.onEnd();
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    };
    /**
     * Completes the reorder operation. Must be called by the `ionItemReorder` event.
     *
     * If a list of items is passed, the list will be reordered and returned in the
     * proper order.
     *
     * If no parameters are passed or if `true` is passed in, the reorder will complete
     * and the item will remain in the position it was dragged to. If `false` is passed,
     * the reorder will complete and the item will bounce back to its original position.
     *
     * @param listOrReorder A list of items to be sorted and returned in the new order or a
     * boolean of whether or not the reorder should reposition the item.
     */
    class_1.prototype.complete = function (listOrReorder) {
        return Promise.resolve(this.completeSync(listOrReorder));
    };
    class_1.prototype.canStart = function (ev) {
        if (this.selectedItemEl || this.state !== 0 /* Idle */) {
            return false;
        }
        var target = ev.event.target;
        var reorderEl = target.closest('ion-reorder');
        if (!reorderEl) {
            return false;
        }
        var item = findReorderItem(reorderEl, this.el);
        if (!item) {
            return false;
        }
        ev.data = item;
        return true;
    };
    class_1.prototype.onStart = function (ev) {
        ev.event.preventDefault();
        var item = this.selectedItemEl = ev.data;
        var heights = this.cachedHeights;
        heights.length = 0;
        var el = this.el;
        var children = el.children;
        if (!children || children.length === 0) {
            return;
        }
        var sum = 0;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            sum += child.offsetHeight;
            heights.push(sum);
            child.$ionIndex = i;
        }
        var box = el.getBoundingClientRect();
        this.containerTop = box.top;
        this.containerBottom = box.bottom;
        if (this.scrollEl) {
            var scrollBox = this.scrollEl.getBoundingClientRect();
            this.scrollElInitial = this.scrollEl.scrollTop;
            this.scrollElTop = scrollBox.top + AUTO_SCROLL_MARGIN;
            this.scrollElBottom = scrollBox.bottom - AUTO_SCROLL_MARGIN;
        }
        else {
            this.scrollElInitial = 0;
            this.scrollElTop = 0;
            this.scrollElBottom = 0;
        }
        this.lastToIndex = indexForItem(item);
        this.selectedItemHeight = item.offsetHeight;
        this.state = 1 /* Active */;
        item.classList.add(ITEM_REORDER_SELECTED);
        Object(_haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_3__["a"])();
    };
    class_1.prototype.onMove = function (ev) {
        var selectedItem = this.selectedItemEl;
        if (!selectedItem) {
            return;
        }
        // Scroll if we reach the scroll margins
        var scroll = this.autoscroll(ev.currentY);
        // // Get coordinate
        var top = this.containerTop - scroll;
        var bottom = this.containerBottom - scroll;
        var currentY = Math.max(top, Math.min(ev.currentY, bottom));
        var deltaY = scroll + currentY - ev.startY;
        var normalizedY = currentY - top;
        var toIndex = this.itemIndexForTop(normalizedY);
        if (toIndex !== this.lastToIndex) {
            var fromIndex = indexForItem(selectedItem);
            this.lastToIndex = toIndex;
            Object(_haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_3__["b"])();
            this.reorderMove(fromIndex, toIndex);
        }
        // Update selected item position
        selectedItem.style.transform = "translateY(" + deltaY + "px)";
    };
    class_1.prototype.onEnd = function () {
        var selectedItemEl = this.selectedItemEl;
        this.state = 2 /* Complete */;
        if (!selectedItemEl) {
            this.state = 0 /* Idle */;
            return;
        }
        var toIndex = this.lastToIndex;
        var fromIndex = indexForItem(selectedItemEl);
        if (toIndex === fromIndex) {
            this.completeSync();
        }
        else {
            this.ionItemReorder.emit({
                from: fromIndex,
                to: toIndex,
                complete: this.completeSync.bind(this)
            });
        }
        Object(_haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    };
    class_1.prototype.completeSync = function (listOrReorder) {
        var selectedItemEl = this.selectedItemEl;
        if (selectedItemEl && this.state === 2 /* Complete */) {
            var children = this.el.children;
            var len = children.length;
            var toIndex = this.lastToIndex;
            var fromIndex = indexForItem(selectedItemEl);
            if (toIndex !== fromIndex && (!listOrReorder || listOrReorder === true)) {
                var ref = (fromIndex < toIndex)
                    ? children[toIndex + 1]
                    : children[toIndex];
                this.el.insertBefore(selectedItemEl, ref);
            }
            if (Array.isArray(listOrReorder)) {
                listOrReorder = reorderArray(listOrReorder, fromIndex, toIndex);
            }
            for (var i = 0; i < len; i++) {
                children[i].style['transform'] = '';
            }
            selectedItemEl.style.transition = '';
            selectedItemEl.classList.remove(ITEM_REORDER_SELECTED);
            this.selectedItemEl = undefined;
            this.state = 0 /* Idle */;
        }
        return listOrReorder;
    };
    class_1.prototype.itemIndexForTop = function (deltaY) {
        var heights = this.cachedHeights;
        var i = 0;
        // TODO: since heights is a sorted array of integers, we can do
        // speed up the search using binary search. Remember that linear-search is still
        // faster than binary-search for small arrays (<64) due CPU branch misprediction.
        for (i = 0; i < heights.length; i++) {
            if (heights[i] > deltaY) {
                break;
            }
        }
        return i;
    };
    /********* DOM WRITE ********* */
    class_1.prototype.reorderMove = function (fromIndex, toIndex) {
        var itemHeight = this.selectedItemHeight;
        var children = this.el.children;
        for (var i = 0; i < children.length; i++) {
            var style = children[i].style;
            var value = '';
            if (i > fromIndex && i <= toIndex) {
                value = "translateY(" + -itemHeight + "px)";
            }
            else if (i < fromIndex && i >= toIndex) {
                value = "translateY(" + itemHeight + "px)";
            }
            style['transform'] = value;
        }
    };
    class_1.prototype.autoscroll = function (posY) {
        if (!this.scrollEl) {
            return 0;
        }
        var amount = 0;
        if (posY < this.scrollElTop) {
            amount = -SCROLL_JUMP;
        }
        else if (posY > this.scrollElBottom) {
            amount = SCROLL_JUMP;
        }
        if (amount !== 0) {
            this.scrollEl.scrollBy(0, amount);
        }
        return this.scrollEl.scrollTop - this.scrollElInitial;
    };
    class_1.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: (_a = {},
                _a[mode] = true,
                _a['reorder-enabled'] = !this.disabled,
                _a['reorder-list-active'] = this.state !== 0 /* Idle */,
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
        get: function () { return ".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var indexForItem = function (element) {
    return element['$ionIndex'];
};
var findReorderItem = function (node, container) {
    var parent;
    while (node) {
        parent = node.parentElement;
        if (parent === container) {
            return node;
        }
        node = parent;
    }
    return undefined;
};
var AUTO_SCROLL_MARGIN = 60;
var SCROLL_JUMP = 10;
var ITEM_REORDER_SELECTED = 'reorder-selected';
var reorderArray = function (array, from, to) {
    var element = array[from];
    array.splice(from, 1);
    array.splice(to, 0, element);
    return array.slice();
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2hhcHRpYy1jOGYxNDczZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1yZW9yZGVyXzItbWQuZW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUg7Ozs7Ozs7Ozs7Ozs7QUMxQ2pIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQzhFO0FBQy9GO0FBQ3lGO0FBQ3ZIO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLFFBQVEsMkRBQVUsUUFBUSxFQUFFLDJEQUFDLGVBQWUsMkRBQUMsY0FBYyxzREFBc0Q7QUFDMUk7QUFDQTtBQUNBLDBCQUEwQix1QkFBdUIsYUFBYSxjQUFjLFlBQVksY0FBYyxjQUFjLGVBQWUsZUFBZSxXQUFXLEVBQUUsRUFBRTtBQUNqSztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMkRBQVc7QUFDekM7QUFDQTtB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LDJDQUEyQyxtQ0FBbUMsV0FBVyxZQUFZLDJDQUEyQyxnQ0FBZ0Msd0JBQXdCLEVBQUUsRUFBRTtBQUNsMUI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FFIiwiZmlsZSI6IjMyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ2hlY2sgdG8gc2VlIGlmIHRoZSBIYXB0aWMgUGx1Z2luIGlzIGF2YWlsYWJsZVxuICogQHJldHVybiBSZXR1cm5zIGB0cnVlYCBvciBmYWxzZSBpZiB0aGUgcGx1Z2luIGlzIGF2YWlsYWJsZVxuICovXG4vKipcbiAqIFRyaWdnZXIgYSBzZWxlY3Rpb24gY2hhbmdlZCBoYXB0aWMgZXZlbnQuIEdvb2QgZm9yIG9uZS10aW1lIGV2ZW50c1xuICogKG5vdCBmb3IgZ2VzdHVyZXMpXG4gKi9cbnZhciBoYXB0aWNTZWxlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVuZ2luZSA9IHdpbmRvdy5UYXB0aWNFbmdpbmU7XG4gICAgaWYgKGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuc2VsZWN0aW9uKCk7XG4gICAgfVxufTtcbi8qKlxuICogVGVsbCB0aGUgaGFwdGljIGVuZ2luZSB0aGF0IGEgZ2VzdHVyZSBmb3IgYSBzZWxlY3Rpb24gY2hhbmdlIGlzIHN0YXJ0aW5nLlxuICovXG52YXIgaGFwdGljU2VsZWN0aW9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVuZ2luZSA9IHdpbmRvdy5UYXB0aWNFbmdpbmU7XG4gICAgaWYgKGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvblN0YXJ0KCk7XG4gICAgfVxufTtcbi8qKlxuICogVGVsbCB0aGUgaGFwdGljIGVuZ2luZSB0aGF0IGEgc2VsZWN0aW9uIGNoYW5nZWQgZHVyaW5nIGEgZ2VzdHVyZS5cbiAqL1xudmFyIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVuZ2luZSA9IHdpbmRvdy5UYXB0aWNFbmdpbmU7XG4gICAgaWYgKGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvbkNoYW5nZWQoKTtcbiAgICB9XG59O1xuLyoqXG4gKiBUZWxsIHRoZSBoYXB0aWMgZW5naW5lIHdlIGFyZSBkb25lIHdpdGggYSBnZXN0dXJlLiBUaGlzIG5lZWRzIHRvIGJlXG4gKiBjYWxsZWQgbGVzdCByZXNvdXJjZXMgYXJlIG5vdCBwcm9wZXJseSByZWN5Y2xlZC5cbiAqL1xudmFyIGhhcHRpY1NlbGVjdGlvbkVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZW5naW5lID0gd2luZG93LlRhcHRpY0VuZ2luZTtcbiAgICBpZiAoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5nZXN0dXJlU2VsZWN0aW9uRW5kKCk7XG4gICAgfVxufTtcbmV4cG9ydCB7IGhhcHRpY1NlbGVjdGlvblN0YXJ0IGFzIGEsIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQgYXMgYiwgaGFwdGljU2VsZWN0aW9uRW5kIGFzIGMsIGhhcHRpY1NlbGVjdGlvbiBhcyBoIH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGgsIGMgYXMgZ2V0SW9uTW9kZSwgSCBhcyBIb3N0LCBkIGFzIGNyZWF0ZUV2ZW50LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtZmVlZWZmMGQuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBhIGFzIGhhcHRpY1NlbGVjdGlvblN0YXJ0LCBiIGFzIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQsIGMgYXMgaGFwdGljU2VsZWN0aW9uRW5kIH0gZnJvbSAnLi9oYXB0aWMtYzhmMTQ3M2UuanMnO1xudmFyIFJlb3JkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVvcmRlcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgfVxuICAgIFJlb3JkZXIucHJvdG90eXBlLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICBSZW9yZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiBnZXRJb25Nb2RlKHRoaXMpIH0sIGgoXCJzbG90XCIsIG51bGwsIGgoXCJpb24taWNvblwiLCB7IG5hbWU6IFwicmVvcmRlclwiLCBsYXp5OiBmYWxzZSwgY2xhc3M6IFwicmVvcmRlci1pY29uXCIgfSkpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVvcmRlciwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCI6aG9zdChbc2xvdF0pe2Rpc3BsYXk6bm9uZTtsaW5lLWhlaWdodDowO3otaW5kZXg6MTAwfS5yZW9yZGVyLWljb257ZGlzcGxheTpibG9jaztmb250LXNpemU6MjJweDtmb250LXNpemU6MzFweDtvcGFjaXR5Oi4zfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gUmVvcmRlcjtcbn0oKSk7XG52YXIgUmVvcmRlckdyb3VwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzEoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmxhc3RUb0luZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuY2FjaGVkSGVpZ2h0cyA9IFtdO1xuICAgICAgICB0aGlzLnNjcm9sbEVsVG9wID0gMDtcbiAgICAgICAgdGhpcy5zY3JvbGxFbEJvdHRvbSA9IDA7XG4gICAgICAgIHRoaXMuc2Nyb2xsRWxJbml0aWFsID0gMDtcbiAgICAgICAgdGhpcy5jb250YWluZXJUb3AgPSAwO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckJvdHRvbSA9IDA7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAwIC8qIElkbGUgKi87XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSByZW9yZGVyIHdpbGwgYmUgaGlkZGVuLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaW9uSXRlbVJlb3JkZXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkl0ZW1SZW9yZGVyXCIsIDcpO1xuICAgIH1cbiAgICBjbGFzc18xLnByb3RvdHlwZS5kaXNhYmxlZENoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZS5zZXREaXNhYmxlZCh0aGlzLmRpc2FibGVkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb250ZW50RWwsIF9hLCBfYjtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RWwgPSB0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1jb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRlbnRFbCkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBjb250ZW50RWwuZ2V0U2Nyb2xsRWxlbWVudCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2Nyb2xsRWwgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGltcG9ydCgnLi9pbmRleC02MjRlZWE1OC5qcycpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IuZ2VzdHVyZSA9IChfYy5zZW50KCkpLmNyZWF0ZUdlc3R1cmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsOiB0aGlzLmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlc3R1cmVOYW1lOiAncmVvcmRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VzdHVyZVByaW9yaXR5OiAxMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3knLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhblN0YXJ0OiBmdW5jdGlvbiAoZGV0YWlsKSB7IHJldHVybiBfdGhpcy5jYW5TdGFydChkZXRhaWwpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3RhcnQ6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMub25TdGFydChldik7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLm9uTW92ZShldik7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FbmQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm9uRW5kKCk7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWRDaGFuZ2VkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZGlzY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMub25FbmQoKTtcbiAgICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQ29tcGxldGVzIHRoZSByZW9yZGVyIG9wZXJhdGlvbi4gTXVzdCBiZSBjYWxsZWQgYnkgdGhlIGBpb25JdGVtUmVvcmRlcmAgZXZlbnQuXG4gICAgICpcbiAgICAgKiBJZiBhIGxpc3Qgb2YgaXRlbXMgaXMgcGFzc2VkLCB0aGUgbGlzdCB3aWxsIGJlIHJlb3JkZXJlZCBhbmQgcmV0dXJuZWQgaW4gdGhlXG4gICAgICogcHJvcGVyIG9yZGVyLlxuICAgICAqXG4gICAgICogSWYgbm8gcGFyYW1ldGVycyBhcmUgcGFzc2VkIG9yIGlmIGB0cnVlYCBpcyBwYXNzZWQgaW4sIHRoZSByZW9yZGVyIHdpbGwgY29tcGxldGVcbiAgICAgKiBhbmQgdGhlIGl0ZW0gd2lsbCByZW1haW4gaW4gdGhlIHBvc2l0aW9uIGl0IHdhcyBkcmFnZ2VkIHRvLiBJZiBgZmFsc2VgIGlzIHBhc3NlZCxcbiAgICAgKiB0aGUgcmVvcmRlciB3aWxsIGNvbXBsZXRlIGFuZCB0aGUgaXRlbSB3aWxsIGJvdW5jZSBiYWNrIHRvIGl0cyBvcmlnaW5hbCBwb3NpdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0T3JSZW9yZGVyIEEgbGlzdCBvZiBpdGVtcyB0byBiZSBzb3J0ZWQgYW5kIHJldHVybmVkIGluIHRoZSBuZXcgb3JkZXIgb3IgYVxuICAgICAqIGJvb2xlYW4gb2Ygd2hldGhlciBvciBub3QgdGhlIHJlb3JkZXIgc2hvdWxkIHJlcG9zaXRpb24gdGhlIGl0ZW0uXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAobGlzdE9yUmVvcmRlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuY29tcGxldGVTeW5jKGxpc3RPclJlb3JkZXIpKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNhblN0YXJ0ID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbUVsIHx8IHRoaXMuc3RhdGUgIT09IDAgLyogSWRsZSAqLykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0YXJnZXQgPSBldi5ldmVudC50YXJnZXQ7XG4gICAgICAgIHZhciByZW9yZGVyRWwgPSB0YXJnZXQuY2xvc2VzdCgnaW9uLXJlb3JkZXInKTtcbiAgICAgICAgaWYgKCFyZW9yZGVyRWwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXRlbSA9IGZpbmRSZW9yZGVySXRlbShyZW9yZGVyRWwsIHRoaXMuZWwpO1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBldi5kYXRhID0gaXRlbTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIGV2LmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW1FbCA9IGV2LmRhdGE7XG4gICAgICAgIHZhciBoZWlnaHRzID0gdGhpcy5jYWNoZWRIZWlnaHRzO1xuICAgICAgICBoZWlnaHRzLmxlbmd0aCA9IDA7XG4gICAgICAgIHZhciBlbCA9IHRoaXMuZWw7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IGVsLmNoaWxkcmVuO1xuICAgICAgICBpZiAoIWNoaWxkcmVuIHx8IGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIHN1bSArPSBjaGlsZC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBoZWlnaHRzLnB1c2goc3VtKTtcbiAgICAgICAgICAgIGNoaWxkLiRpb25JbmRleCA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJveCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lclRvcCA9IGJveC50b3A7XG4gICAgICAgIHRoaXMuY29udGFpbmVyQm90dG9tID0gYm94LmJvdHRvbTtcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsRWwpIHtcbiAgICAgICAgICAgIHZhciBzY3JvbGxCb3ggPSB0aGlzLnNjcm9sbEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxFbEluaXRpYWwgPSB0aGlzLnNjcm9sbEVsLnNjcm9sbFRvcDtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsRWxUb3AgPSBzY3JvbGxCb3gudG9wICsgQVVUT19TQ1JPTExfTUFSR0lOO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxFbEJvdHRvbSA9IHNjcm9sbEJveC5ib3R0b20gLSBBVVRPX1NDUk9MTF9NQVJHSU47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEVsSW5pdGlhbCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEVsVG9wID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsRWxCb3R0b20gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdFRvSW5kZXggPSBpbmRleEZvckl0ZW0oaXRlbSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtSGVpZ2h0ID0gaXRlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAxIC8qIEFjdGl2ZSAqLztcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKElURU1fUkVPUkRFUl9TRUxFQ1RFRCk7XG4gICAgICAgIGhhcHRpY1NlbGVjdGlvblN0YXJ0KCk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5vbk1vdmUgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkSXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtRWw7XG4gICAgICAgIGlmICghc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2Nyb2xsIGlmIHdlIHJlYWNoIHRoZSBzY3JvbGwgbWFyZ2luc1xuICAgICAgICB2YXIgc2Nyb2xsID0gdGhpcy5hdXRvc2Nyb2xsKGV2LmN1cnJlbnRZKTtcbiAgICAgICAgLy8gLy8gR2V0IGNvb3JkaW5hdGVcbiAgICAgICAgdmFyIHRvcCA9IHRoaXMuY29udGFpbmVyVG9wIC0gc2Nyb2xsO1xuICAgICAgICB2YXIgYm90dG9tID0gdGhpcy5jb250YWluZXJCb3R0b20gLSBzY3JvbGw7XG4gICAgICAgIHZhciBjdXJyZW50WSA9IE1hdGgubWF4KHRvcCwgTWF0aC5taW4oZXYuY3VycmVudFksIGJvdHRvbSkpO1xuICAgICAgICB2YXIgZGVsdGFZID0gc2Nyb2xsICsgY3VycmVudFkgLSBldi5zdGFydFk7XG4gICAgICAgIHZhciBub3JtYWxpemVkWSA9IGN1cnJlbnRZIC0gdG9wO1xuICAgICAgICB2YXIgdG9JbmRleCA9IHRoaXMuaXRlbUluZGV4Rm9yVG9wKG5vcm1hbGl6ZWRZKTtcbiAgICAgICAgaWYgKHRvSW5kZXggIT09IHRoaXMubGFzdFRvSW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBmcm9tSW5kZXggPSBpbmRleEZvckl0ZW0oc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgIHRoaXMubGFzdFRvSW5kZXggPSB0b0luZGV4O1xuICAgICAgICAgICAgaGFwdGljU2VsZWN0aW9uQ2hhbmdlZCgpO1xuICAgICAgICAgICAgdGhpcy5yZW9yZGVyTW92ZShmcm9tSW5kZXgsIHRvSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZSBzZWxlY3RlZCBpdGVtIHBvc2l0aW9uXG4gICAgICAgIHNlbGVjdGVkSXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoXCIgKyBkZWx0YVkgKyBcInB4KVwiO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZEl0ZW1FbCA9IHRoaXMuc2VsZWN0ZWRJdGVtRWw7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAyIC8qIENvbXBsZXRlICovO1xuICAgICAgICBpZiAoIXNlbGVjdGVkSXRlbUVsKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gMCAvKiBJZGxlICovO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0b0luZGV4ID0gdGhpcy5sYXN0VG9JbmRleDtcbiAgICAgICAgdmFyIGZyb21JbmRleCA9IGluZGV4Rm9ySXRlbShzZWxlY3RlZEl0ZW1FbCk7XG4gICAgICAgIGlmICh0b0luZGV4ID09PSBmcm9tSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVTeW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlvbkl0ZW1SZW9yZGVyLmVtaXQoe1xuICAgICAgICAgICAgICAgIGZyb206IGZyb21JbmRleCxcbiAgICAgICAgICAgICAgICB0bzogdG9JbmRleCxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogdGhpcy5jb21wbGV0ZVN5bmMuYmluZCh0aGlzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaGFwdGljU2VsZWN0aW9uRW5kKCk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb21wbGV0ZVN5bmMgPSBmdW5jdGlvbiAobGlzdE9yUmVvcmRlcikge1xuICAgICAgICB2YXIgc2VsZWN0ZWRJdGVtRWwgPSB0aGlzLnNlbGVjdGVkSXRlbUVsO1xuICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtRWwgJiYgdGhpcy5zdGF0ZSA9PT0gMiAvKiBDb21wbGV0ZSAqLykge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5lbC5jaGlsZHJlbjtcbiAgICAgICAgICAgIHZhciBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgdG9JbmRleCA9IHRoaXMubGFzdFRvSW5kZXg7XG4gICAgICAgICAgICB2YXIgZnJvbUluZGV4ID0gaW5kZXhGb3JJdGVtKHNlbGVjdGVkSXRlbUVsKTtcbiAgICAgICAgICAgIGlmICh0b0luZGV4ICE9PSBmcm9tSW5kZXggJiYgKCFsaXN0T3JSZW9yZGVyIHx8IGxpc3RPclJlb3JkZXIgPT09IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZiA9IChmcm9tSW5kZXggPCB0b0luZGV4KVxuICAgICAgICAgICAgICAgICAgICA/IGNoaWxkcmVuW3RvSW5kZXggKyAxXVxuICAgICAgICAgICAgICAgICAgICA6IGNoaWxkcmVuW3RvSW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuaW5zZXJ0QmVmb3JlKHNlbGVjdGVkSXRlbUVsLCByZWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobGlzdE9yUmVvcmRlcikpIHtcbiAgICAgICAgICAgICAgICBsaXN0T3JSZW9yZGVyID0gcmVvcmRlckFycmF5KGxpc3RPclJlb3JkZXIsIGZyb21JbmRleCwgdG9JbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5baV0uc3R5bGVbJ3RyYW5zZm9ybSddID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1FbC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1FbC5jbGFzc0xpc3QucmVtb3ZlKElURU1fUkVPUkRFUl9TRUxFQ1RFRCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbUVsID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IDAgLyogSWRsZSAqLztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdE9yUmVvcmRlcjtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLml0ZW1JbmRleEZvclRvcCA9IGZ1bmN0aW9uIChkZWx0YVkpIHtcbiAgICAgICAgdmFyIGhlaWdodHMgPSB0aGlzLmNhY2hlZEhlaWdodHM7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgLy8gVE9ETzogc2luY2UgaGVpZ2h0cyBpcyBhIHNvcnRlZCBhcnJheSBvZiBpbnRlZ2Vycywgd2UgY2FuIGRvXG4gICAgICAgIC8vIHNwZWVkIHVwIHRoZSBzZWFyY2ggdXNpbmcgYmluYXJ5IHNlYXJjaC4gUmVtZW1iZXIgdGhhdCBsaW5lYXItc2VhcmNoIGlzIHN0aWxsXG4gICAgICAgIC8vIGZhc3RlciB0aGFuIGJpbmFyeS1zZWFyY2ggZm9yIHNtYWxsIGFycmF5cyAoPDY0KSBkdWUgQ1BVIGJyYW5jaCBtaXNwcmVkaWN0aW9uLlxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaGVpZ2h0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGhlaWdodHNbaV0gPiBkZWx0YVkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaTtcbiAgICB9O1xuICAgIC8qKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKiAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlb3JkZXJNb3ZlID0gZnVuY3Rpb24gKGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgICAgICB2YXIgaXRlbUhlaWdodCA9IHRoaXMuc2VsZWN0ZWRJdGVtSGVpZ2h0O1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmVsLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBjaGlsZHJlbltpXS5zdHlsZTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9ICcnO1xuICAgICAgICAgICAgaWYgKGkgPiBmcm9tSW5kZXggJiYgaSA8PSB0b0luZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBcInRyYW5zbGF0ZVkoXCIgKyAtaXRlbUhlaWdodCArIFwicHgpXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpIDwgZnJvbUluZGV4ICYmIGkgPj0gdG9JbmRleCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gXCJ0cmFuc2xhdGVZKFwiICsgaXRlbUhlaWdodCArIFwicHgpXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHlsZVsndHJhbnNmb3JtJ10gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuYXV0b3Njcm9sbCA9IGZ1bmN0aW9uIChwb3NZKSB7XG4gICAgICAgIGlmICghdGhpcy5zY3JvbGxFbCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFtb3VudCA9IDA7XG4gICAgICAgIGlmIChwb3NZIDwgdGhpcy5zY3JvbGxFbFRvcCkge1xuICAgICAgICAgICAgYW1vdW50ID0gLVNDUk9MTF9KVU1QO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBvc1kgPiB0aGlzLnNjcm9sbEVsQm90dG9tKSB7XG4gICAgICAgICAgICBhbW91bnQgPSBTQ1JPTExfSlVNUDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYW1vdW50ICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEVsLnNjcm9sbEJ5KDAsIGFtb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsRWwuc2Nyb2xsVG9wIC0gdGhpcy5zY3JvbGxFbEluaXRpYWw7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczogKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hWydyZW9yZGVyLWVuYWJsZWQnXSA9ICF0aGlzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgIF9hWydyZW9yZGVyLWxpc3QtYWN0aXZlJ10gPSB0aGlzLnN0YXRlICE9PSAwIC8qIElkbGUgKi8sXG4gICAgICAgICAgICAgICAgX2EpIH0pKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEsIFwid2F0Y2hlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZENoYW5nZWRcIl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIi5yZW9yZGVyLWxpc3QtYWN0aXZlPip7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4zczt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4zczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3M7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzLC13ZWJraXQtdHJhbnNmb3JtIC4zczt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19LnJlb3JkZXItZW5hYmxlZHstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LnJlb3JkZXItZW5hYmxlZCBpb24tcmVvcmRlcntkaXNwbGF5OmJsb2NrO2N1cnNvcjotd2Via2l0LWdyYWI7Y3Vyc29yOmdyYWI7cG9pbnRlci1ldmVudHM6YWxsOy1tcy10b3VjaC1hY3Rpb246bm9uZTt0b3VjaC1hY3Rpb246bm9uZX0ucmVvcmRlci1zZWxlY3RlZCwucmVvcmRlci1zZWxlY3RlZCBpb24tcmVvcmRlcntjdXJzb3I6LXdlYmtpdC1ncmFiYmluZztjdXJzb3I6Z3JhYmJpbmd9LnJlb3JkZXItc2VsZWN0ZWR7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50O3RyYW5zaXRpb246bm9uZSFpbXBvcnRhbnQ7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAxMHB4IHJnYmEoMCwwLDAsLjQpO2JveC1zaGFkb3c6MCAwIDEwcHggcmdiYSgwLDAsMCwuNCk7b3BhY2l0eTouODt6LWluZGV4OjEwMH0ucmVvcmRlci12aXNpYmxlIGlvbi1yZW9yZGVyIC5yZW9yZGVyLWljb257LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzE7XG59KCkpO1xudmFyIGluZGV4Rm9ySXRlbSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnRbJyRpb25JbmRleCddO1xufTtcbnZhciBmaW5kUmVvcmRlckl0ZW0gPSBmdW5jdGlvbiAobm9kZSwgY29udGFpbmVyKSB7XG4gICAgdmFyIHBhcmVudDtcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBwYXJlbnQgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGlmIChwYXJlbnQgPT09IGNvbnRhaW5lcikge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IHBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG52YXIgQVVUT19TQ1JPTExfTUFSR0lOID0gNjA7XG52YXIgU0NST0xMX0pVTVAgPSAxMDtcbnZhciBJVEVNX1JFT1JERVJfU0VMRUNURUQgPSAncmVvcmRlci1zZWxlY3RlZCc7XG52YXIgcmVvcmRlckFycmF5ID0gZnVuY3Rpb24gKGFycmF5LCBmcm9tLCB0bykge1xuICAgIHZhciBlbGVtZW50ID0gYXJyYXlbZnJvbV07XG4gICAgYXJyYXkuc3BsaWNlKGZyb20sIDEpO1xuICAgIGFycmF5LnNwbGljZSh0bywgMCwgZWxlbWVudCk7XG4gICAgcmV0dXJuIGFycmF5LnNsaWNlKCk7XG59O1xuZXhwb3J0IHsgUmVvcmRlciBhcyBpb25fcmVvcmRlciwgUmVvcmRlckdyb3VwIGFzIGlvbl9yZW9yZGVyX2dyb3VwIH07XG4iXSwic291cmNlUm9vdCI6IiJ9