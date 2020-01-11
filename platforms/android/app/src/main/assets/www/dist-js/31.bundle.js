(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

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

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-reorder_2-ios.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-reorder_2-ios.entry.js ***!
  \**************************************************************************/
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
        get: function () { return ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:34px;opacity:.4}"; },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2hhcHRpYy1jOGYxNDczZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1yZW9yZGVyXzItaW9zLmVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2lIOzs7Ozs7Ozs7Ozs7O0FDMUNqSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUM4RTtBQUMvRjtBQUN5RjtBQUN2SDtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyxRQUFRLDJEQUFVLFFBQVEsRUFBRSwyREFBQyxlQUFlLDJEQUFDLGNBQWMsc0RBQXNEO0FBQzFJO0FBQ0E7QUFDQSwwQkFBMEIsdUJBQXVCLGFBQWEsY0FBYyxZQUFZLGNBQWMsY0FBYyxlQUFlLGVBQWUsV0FBVyxFQUFFLEVBQUU7QUFDaks7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDJEQUFXO0FBQ3pDO0FBQ0E7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QiwyQ0FBMkMsbUNBQW1DLFdBQVcsWUFBWSwyQ0FBMkMsZ0NBQWdDLHdCQUF3QixFQUFFLEVBQUU7QUFDbDFCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNxRSIsImZpbGUiOiIzMS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENoZWNrIHRvIHNlZSBpZiB0aGUgSGFwdGljIFBsdWdpbiBpcyBhdmFpbGFibGVcbiAqIEByZXR1cm4gUmV0dXJucyBgdHJ1ZWAgb3IgZmFsc2UgaWYgdGhlIHBsdWdpbiBpcyBhdmFpbGFibGVcbiAqL1xuLyoqXG4gKiBUcmlnZ2VyIGEgc2VsZWN0aW9uIGNoYW5nZWQgaGFwdGljIGV2ZW50LiBHb29kIGZvciBvbmUtdGltZSBldmVudHNcbiAqIChub3QgZm9yIGdlc3R1cmVzKVxuICovXG52YXIgaGFwdGljU2VsZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbmdpbmUgPSB3aW5kb3cuVGFwdGljRW5naW5lO1xuICAgIGlmIChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLnNlbGVjdGlvbigpO1xuICAgIH1cbn07XG4vKipcbiAqIFRlbGwgdGhlIGhhcHRpYyBlbmdpbmUgdGhhdCBhIGdlc3R1cmUgZm9yIGEgc2VsZWN0aW9uIGNoYW5nZSBpcyBzdGFydGluZy5cbiAqL1xudmFyIGhhcHRpY1NlbGVjdGlvblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbmdpbmUgPSB3aW5kb3cuVGFwdGljRW5naW5lO1xuICAgIGlmIChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmdlc3R1cmVTZWxlY3Rpb25TdGFydCgpO1xuICAgIH1cbn07XG4vKipcbiAqIFRlbGwgdGhlIGhhcHRpYyBlbmdpbmUgdGhhdCBhIHNlbGVjdGlvbiBjaGFuZ2VkIGR1cmluZyBhIGdlc3R1cmUuXG4gKi9cbnZhciBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbmdpbmUgPSB3aW5kb3cuVGFwdGljRW5naW5lO1xuICAgIGlmIChlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lLmdlc3R1cmVTZWxlY3Rpb25DaGFuZ2VkKCk7XG4gICAgfVxufTtcbi8qKlxuICogVGVsbCB0aGUgaGFwdGljIGVuZ2luZSB3ZSBhcmUgZG9uZSB3aXRoIGEgZ2VzdHVyZS4gVGhpcyBuZWVkcyB0byBiZVxuICogY2FsbGVkIGxlc3QgcmVzb3VyY2VzIGFyZSBub3QgcHJvcGVybHkgcmVjeWNsZWQuXG4gKi9cbnZhciBoYXB0aWNTZWxlY3Rpb25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVuZ2luZSA9IHdpbmRvdy5UYXB0aWNFbmdpbmU7XG4gICAgaWYgKGVuZ2luZSkge1xuICAgICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvbkVuZCgpO1xuICAgIH1cbn07XG5leHBvcnQgeyBoYXB0aWNTZWxlY3Rpb25TdGFydCBhcyBhLCBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkIGFzIGIsIGhhcHRpY1NlbGVjdGlvbkVuZCBhcyBjLCBoYXB0aWNTZWxlY3Rpb24gYXMgaCB9O1xuIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBoLCBjIGFzIGdldElvbk1vZGUsIEggYXMgSG9zdCwgZCBhcyBjcmVhdGVFdmVudCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWZlZWVmZjBkLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgYSBhcyBoYXB0aWNTZWxlY3Rpb25TdGFydCwgYiBhcyBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkLCBjIGFzIGhhcHRpY1NlbGVjdGlvbkVuZCB9IGZyb20gJy4vaGFwdGljLWM4ZjE0NzNlLmpzJztcbnZhciBSZW9yZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlb3JkZXIoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIH1cbiAgICBSZW9yZGVyLnByb3RvdHlwZS5vbkNsaWNrID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIH07XG4gICAgUmVvcmRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczogZ2V0SW9uTW9kZSh0aGlzKSB9LCBoKFwic2xvdFwiLCBudWxsLCBoKFwiaW9uLWljb25cIiwgeyBuYW1lOiBcInJlb3JkZXJcIiwgbGF6eTogZmFsc2UsIGNsYXNzOiBcInJlb3JkZXItaWNvblwiIH0pKSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlb3JkZXIsIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiOmhvc3QoW3Nsb3RdKXtkaXNwbGF5Om5vbmU7bGluZS1oZWlnaHQ6MDt6LWluZGV4OjEwMH0ucmVvcmRlci1pY29ue2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjIycHg7Zm9udC1zaXplOjM0cHg7b3BhY2l0eTouNH1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFJlb3JkZXI7XG59KCkpO1xudmFyIFJlb3JkZXJHcm91cCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18xKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5sYXN0VG9JbmRleCA9IC0xO1xuICAgICAgICB0aGlzLmNhY2hlZEhlaWdodHMgPSBbXTtcbiAgICAgICAgdGhpcy5zY3JvbGxFbFRvcCA9IDA7XG4gICAgICAgIHRoaXMuc2Nyb2xsRWxCb3R0b20gPSAwO1xuICAgICAgICB0aGlzLnNjcm9sbEVsSW5pdGlhbCA9IDA7XG4gICAgICAgIHRoaXMuY29udGFpbmVyVG9wID0gMDtcbiAgICAgICAgdGhpcy5jb250YWluZXJCb3R0b20gPSAwO1xuICAgICAgICB0aGlzLnN0YXRlID0gMCAvKiBJZGxlICovO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgcmVvcmRlciB3aWxsIGJlIGhpZGRlbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmlvbkl0ZW1SZW9yZGVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25JdGVtUmVvcmRlclwiLCA3KTtcbiAgICB9XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZGlzYWJsZWRDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuc2V0RGlzYWJsZWQodGhpcy5kaXNhYmxlZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY29udGVudEVsLCBfYSwgX2I7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEVsID0gdGhpcy5lbC5jbG9zZXN0KCdpb24tY29udGVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb250ZW50RWwpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY29udGVudEVsLmdldFNjcm9sbEVsZW1lbnQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNjcm9sbEVsID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbXBvcnQoJy4vaW5kZXgtNjI0ZWVhNTguanMnKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmdlc3R1cmUgPSAoX2Muc2VudCgpKS5jcmVhdGVHZXN0dXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbDogdGhpcy5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXN0dXJlTmFtZTogJ3Jlb3JkZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlc3R1cmVQcmlvcml0eTogMTEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICd5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5TdGFydDogZnVuY3Rpb24gKGRldGFpbCkgeyByZXR1cm4gX3RoaXMuY2FuU3RhcnQoZGV0YWlsKTsgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN0YXJ0OiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLm9uU3RhcnQoZXYpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZTogZnVuY3Rpb24gKGV2KSB7IHJldHVybiBfdGhpcy5vbk1vdmUoZXYpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRW5kOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5vbkVuZCgpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkQ2hhbmdlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm9uRW5kKCk7XG4gICAgICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENvbXBsZXRlcyB0aGUgcmVvcmRlciBvcGVyYXRpb24uIE11c3QgYmUgY2FsbGVkIGJ5IHRoZSBgaW9uSXRlbVJlb3JkZXJgIGV2ZW50LlxuICAgICAqXG4gICAgICogSWYgYSBsaXN0IG9mIGl0ZW1zIGlzIHBhc3NlZCwgdGhlIGxpc3Qgd2lsbCBiZSByZW9yZGVyZWQgYW5kIHJldHVybmVkIGluIHRoZVxuICAgICAqIHByb3BlciBvcmRlci5cbiAgICAgKlxuICAgICAqIElmIG5vIHBhcmFtZXRlcnMgYXJlIHBhc3NlZCBvciBpZiBgdHJ1ZWAgaXMgcGFzc2VkIGluLCB0aGUgcmVvcmRlciB3aWxsIGNvbXBsZXRlXG4gICAgICogYW5kIHRoZSBpdGVtIHdpbGwgcmVtYWluIGluIHRoZSBwb3NpdGlvbiBpdCB3YXMgZHJhZ2dlZCB0by4gSWYgYGZhbHNlYCBpcyBwYXNzZWQsXG4gICAgICogdGhlIHJlb3JkZXIgd2lsbCBjb21wbGV0ZSBhbmQgdGhlIGl0ZW0gd2lsbCBib3VuY2UgYmFjayB0byBpdHMgb3JpZ2luYWwgcG9zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGlzdE9yUmVvcmRlciBBIGxpc3Qgb2YgaXRlbXMgdG8gYmUgc29ydGVkIGFuZCByZXR1cm5lZCBpbiB0aGUgbmV3IG9yZGVyIG9yIGFcbiAgICAgKiBib29sZWFuIG9mIHdoZXRoZXIgb3Igbm90IHRoZSByZW9yZGVyIHNob3VsZCByZXBvc2l0aW9uIHRoZSBpdGVtLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKGxpc3RPclJlb3JkZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmNvbXBsZXRlU3luYyhsaXN0T3JSZW9yZGVyKSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jYW5TdGFydCA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1FbCB8fCB0aGlzLnN0YXRlICE9PSAwIC8qIElkbGUgKi8pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGFyZ2V0ID0gZXYuZXZlbnQudGFyZ2V0O1xuICAgICAgICB2YXIgcmVvcmRlckVsID0gdGFyZ2V0LmNsb3Nlc3QoJ2lvbi1yZW9yZGVyJyk7XG4gICAgICAgIGlmICghcmVvcmRlckVsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGl0ZW0gPSBmaW5kUmVvcmRlckl0ZW0ocmVvcmRlckVsLCB0aGlzLmVsKTtcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZXYuZGF0YSA9IGl0ZW07XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICBldi5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtRWwgPSBldi5kYXRhO1xuICAgICAgICB2YXIgaGVpZ2h0cyA9IHRoaXMuY2FjaGVkSGVpZ2h0cztcbiAgICAgICAgaGVpZ2h0cy5sZW5ndGggPSAwO1xuICAgICAgICB2YXIgZWwgPSB0aGlzLmVsO1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBlbC5jaGlsZHJlbjtcbiAgICAgICAgaWYgKCFjaGlsZHJlbiB8fCBjaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3VtID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBzdW0gKz0gY2hpbGQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgaGVpZ2h0cy5wdXNoKHN1bSk7XG4gICAgICAgICAgICBjaGlsZC4kaW9uSW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBib3ggPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJUb3AgPSBib3gudG9wO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckJvdHRvbSA9IGJveC5ib3R0b207XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEVsKSB7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsQm94ID0gdGhpcy5zY3JvbGxFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsRWxJbml0aWFsID0gdGhpcy5zY3JvbGxFbC5zY3JvbGxUb3A7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEVsVG9wID0gc2Nyb2xsQm94LnRvcCArIEFVVE9fU0NST0xMX01BUkdJTjtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsRWxCb3R0b20gPSBzY3JvbGxCb3guYm90dG9tIC0gQVVUT19TQ1JPTExfTUFSR0lOO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxFbEluaXRpYWwgPSAwO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxFbFRvcCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEVsQm90dG9tID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RUb0luZGV4ID0gaW5kZXhGb3JJdGVtKGl0ZW0pO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbUhlaWdodCA9IGl0ZW0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB0aGlzLnN0YXRlID0gMSAvKiBBY3RpdmUgKi87XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChJVEVNX1JFT1JERVJfU0VMRUNURUQpO1xuICAgICAgICBoYXB0aWNTZWxlY3Rpb25TdGFydCgpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25Nb3ZlID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIHZhciBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbUVsO1xuICAgICAgICBpZiAoIXNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNjcm9sbCBpZiB3ZSByZWFjaCB0aGUgc2Nyb2xsIG1hcmdpbnNcbiAgICAgICAgdmFyIHNjcm9sbCA9IHRoaXMuYXV0b3Njcm9sbChldi5jdXJyZW50WSk7XG4gICAgICAgIC8vIC8vIEdldCBjb29yZGluYXRlXG4gICAgICAgIHZhciB0b3AgPSB0aGlzLmNvbnRhaW5lclRvcCAtIHNjcm9sbDtcbiAgICAgICAgdmFyIGJvdHRvbSA9IHRoaXMuY29udGFpbmVyQm90dG9tIC0gc2Nyb2xsO1xuICAgICAgICB2YXIgY3VycmVudFkgPSBNYXRoLm1heCh0b3AsIE1hdGgubWluKGV2LmN1cnJlbnRZLCBib3R0b20pKTtcbiAgICAgICAgdmFyIGRlbHRhWSA9IHNjcm9sbCArIGN1cnJlbnRZIC0gZXYuc3RhcnRZO1xuICAgICAgICB2YXIgbm9ybWFsaXplZFkgPSBjdXJyZW50WSAtIHRvcDtcbiAgICAgICAgdmFyIHRvSW5kZXggPSB0aGlzLml0ZW1JbmRleEZvclRvcChub3JtYWxpemVkWSk7XG4gICAgICAgIGlmICh0b0luZGV4ICE9PSB0aGlzLmxhc3RUb0luZGV4KSB7XG4gICAgICAgICAgICB2YXIgZnJvbUluZGV4ID0gaW5kZXhGb3JJdGVtKHNlbGVjdGVkSXRlbSk7XG4gICAgICAgICAgICB0aGlzLmxhc3RUb0luZGV4ID0gdG9JbmRleDtcbiAgICAgICAgICAgIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQoKTtcbiAgICAgICAgICAgIHRoaXMucmVvcmRlck1vdmUoZnJvbUluZGV4LCB0b0luZGV4KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGUgc2VsZWN0ZWQgaXRlbSBwb3NpdGlvblxuICAgICAgICBzZWxlY3RlZEl0ZW0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKFwiICsgZGVsdGFZICsgXCJweClcIjtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9uRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZWN0ZWRJdGVtRWwgPSB0aGlzLnNlbGVjdGVkSXRlbUVsO1xuICAgICAgICB0aGlzLnN0YXRlID0gMiAvKiBDb21wbGV0ZSAqLztcbiAgICAgICAgaWYgKCFzZWxlY3RlZEl0ZW1FbCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IDAgLyogSWRsZSAqLztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG9JbmRleCA9IHRoaXMubGFzdFRvSW5kZXg7XG4gICAgICAgIHZhciBmcm9tSW5kZXggPSBpbmRleEZvckl0ZW0oc2VsZWN0ZWRJdGVtRWwpO1xuICAgICAgICBpZiAodG9JbmRleCA9PT0gZnJvbUluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlU3luYygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pb25JdGVtUmVvcmRlci5lbWl0KHtcbiAgICAgICAgICAgICAgICBmcm9tOiBmcm9tSW5kZXgsXG4gICAgICAgICAgICAgICAgdG86IHRvSW5kZXgsXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IHRoaXMuY29tcGxldGVTeW5jLmJpbmQodGhpcylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGhhcHRpY1NlbGVjdGlvbkVuZCgpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29tcGxldGVTeW5jID0gZnVuY3Rpb24gKGxpc3RPclJlb3JkZXIpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkSXRlbUVsID0gdGhpcy5zZWxlY3RlZEl0ZW1FbDtcbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbUVsICYmIHRoaXMuc3RhdGUgPT09IDIgLyogQ29tcGxldGUgKi8pIHtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuZWwuY2hpbGRyZW47XG4gICAgICAgICAgICB2YXIgbGVuID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIHRvSW5kZXggPSB0aGlzLmxhc3RUb0luZGV4O1xuICAgICAgICAgICAgdmFyIGZyb21JbmRleCA9IGluZGV4Rm9ySXRlbShzZWxlY3RlZEl0ZW1FbCk7XG4gICAgICAgICAgICBpZiAodG9JbmRleCAhPT0gZnJvbUluZGV4ICYmICghbGlzdE9yUmVvcmRlciB8fCBsaXN0T3JSZW9yZGVyID09PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgIHZhciByZWYgPSAoZnJvbUluZGV4IDwgdG9JbmRleClcbiAgICAgICAgICAgICAgICAgICAgPyBjaGlsZHJlblt0b0luZGV4ICsgMV1cbiAgICAgICAgICAgICAgICAgICAgOiBjaGlsZHJlblt0b0luZGV4XTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmluc2VydEJlZm9yZShzZWxlY3RlZEl0ZW1FbCwgcmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3RPclJlb3JkZXIpKSB7XG4gICAgICAgICAgICAgICAgbGlzdE9yUmVvcmRlciA9IHJlb3JkZXJBcnJheShsaXN0T3JSZW9yZGVyLCBmcm9tSW5kZXgsIHRvSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuW2ldLnN0eWxlWyd0cmFuc2Zvcm0nXSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtRWwuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtRWwuY2xhc3NMaXN0LnJlbW92ZShJVEVNX1JFT1JERVJfU0VMRUNURUQpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1FbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAwIC8qIElkbGUgKi87XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3RPclJlb3JkZXI7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5pdGVtSW5kZXhGb3JUb3AgPSBmdW5jdGlvbiAoZGVsdGFZKSB7XG4gICAgICAgIHZhciBoZWlnaHRzID0gdGhpcy5jYWNoZWRIZWlnaHRzO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIC8vIFRPRE86IHNpbmNlIGhlaWdodHMgaXMgYSBzb3J0ZWQgYXJyYXkgb2YgaW50ZWdlcnMsIHdlIGNhbiBkb1xuICAgICAgICAvLyBzcGVlZCB1cCB0aGUgc2VhcmNoIHVzaW5nIGJpbmFyeSBzZWFyY2guIFJlbWVtYmVyIHRoYXQgbGluZWFyLXNlYXJjaCBpcyBzdGlsbFxuICAgICAgICAvLyBmYXN0ZXIgdGhhbiBiaW5hcnktc2VhcmNoIGZvciBzbWFsbCBhcnJheXMgKDw2NCkgZHVlIENQVSBicmFuY2ggbWlzcHJlZGljdGlvbi5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGhlaWdodHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChoZWlnaHRzW2ldID4gZGVsdGFZKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGk7XG4gICAgfTtcbiAgICAvKioqKioqKioqIERPTSBXUklURSAqKioqKioqKiogKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZW9yZGVyTW92ZSA9IGZ1bmN0aW9uIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICAgICAgdmFyIGl0ZW1IZWlnaHQgPSB0aGlzLnNlbGVjdGVkSXRlbUhlaWdodDtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5lbC5jaGlsZHJlbjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHN0eWxlID0gY2hpbGRyZW5baV0uc3R5bGU7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSAnJztcbiAgICAgICAgICAgIGlmIChpID4gZnJvbUluZGV4ICYmIGkgPD0gdG9JbmRleCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gXCJ0cmFuc2xhdGVZKFwiICsgLWl0ZW1IZWlnaHQgKyBcInB4KVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaSA8IGZyb21JbmRleCAmJiBpID49IHRvSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFwidHJhbnNsYXRlWShcIiArIGl0ZW1IZWlnaHQgKyBcInB4KVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3R5bGVbJ3RyYW5zZm9ybSddID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmF1dG9zY3JvbGwgPSBmdW5jdGlvbiAocG9zWSkge1xuICAgICAgICBpZiAoIXRoaXMuc2Nyb2xsRWwpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhbW91bnQgPSAwO1xuICAgICAgICBpZiAocG9zWSA8IHRoaXMuc2Nyb2xsRWxUb3ApIHtcbiAgICAgICAgICAgIGFtb3VudCA9IC1TQ1JPTExfSlVNUDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwb3NZID4gdGhpcy5zY3JvbGxFbEJvdHRvbSkge1xuICAgICAgICAgICAgYW1vdW50ID0gU0NST0xMX0pVTVA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFtb3VudCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxFbC5zY3JvbGxCeSgwLCBhbW91bnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbEVsLnNjcm9sbFRvcCAtIHRoaXMuc2Nyb2xsRWxJbml0aWFsO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IChfYSA9IHt9LFxuICAgICAgICAgICAgICAgIF9hW21vZGVdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYVsncmVvcmRlci1lbmFibGVkJ10gPSAhdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBfYVsncmVvcmRlci1saXN0LWFjdGl2ZSddID0gdGhpcy5zdGF0ZSAhPT0gMCAvKiBJZGxlICovLFxuICAgICAgICAgICAgICAgIF9hKSB9KSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMS5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCIucmVvcmRlci1saXN0LWFjdGl2ZT4qey13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuM3M7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuM3M7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4zcywtd2Via2l0LXRyYW5zZm9ybSAuM3M7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5yZW9yZGVyLWVuYWJsZWR7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5yZW9yZGVyLWVuYWJsZWQgaW9uLXJlb3JkZXJ7ZGlzcGxheTpibG9jaztjdXJzb3I6LXdlYmtpdC1ncmFiO2N1cnNvcjpncmFiO3BvaW50ZXItZXZlbnRzOmFsbDstbXMtdG91Y2gtYWN0aW9uOm5vbmU7dG91Y2gtYWN0aW9uOm5vbmV9LnJlb3JkZXItc2VsZWN0ZWQsLnJlb3JkZXItc2VsZWN0ZWQgaW9uLXJlb3JkZXJ7Y3Vyc29yOi13ZWJraXQtZ3JhYmJpbmc7Y3Vyc29yOmdyYWJiaW5nfS5yZW9yZGVyLXNlbGVjdGVke3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdHJhbnNpdGlvbjpub25lIWltcG9ydGFudDt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50Oy13ZWJraXQtYm94LXNoYWRvdzowIDAgMTBweCByZ2JhKDAsMCwwLC40KTtib3gtc2hhZG93OjAgMCAxMHB4IHJnYmEoMCwwLDAsLjQpO29wYWNpdHk6Ljg7ei1pbmRleDoxMDB9LnJlb3JkZXItdmlzaWJsZSBpb24tcmVvcmRlciAucmVvcmRlci1pY29uey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbnZhciBpbmRleEZvckl0ZW0gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50WyckaW9uSW5kZXgnXTtcbn07XG52YXIgZmluZFJlb3JkZXJJdGVtID0gZnVuY3Rpb24gKG5vZGUsIGNvbnRhaW5lcikge1xuICAgIHZhciBwYXJlbnQ7XG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgcGFyZW50ID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpZiAocGFyZW50ID09PSBjb250YWluZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBwYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59O1xudmFyIEFVVE9fU0NST0xMX01BUkdJTiA9IDYwO1xudmFyIFNDUk9MTF9KVU1QID0gMTA7XG52YXIgSVRFTV9SRU9SREVSX1NFTEVDVEVEID0gJ3Jlb3JkZXItc2VsZWN0ZWQnO1xudmFyIHJlb3JkZXJBcnJheSA9IGZ1bmN0aW9uIChhcnJheSwgZnJvbSwgdG8pIHtcbiAgICB2YXIgZWxlbWVudCA9IGFycmF5W2Zyb21dO1xuICAgIGFycmF5LnNwbGljZShmcm9tLCAxKTtcbiAgICBhcnJheS5zcGxpY2UodG8sIDAsIGVsZW1lbnQpO1xuICAgIHJldHVybiBhcnJheS5zbGljZSgpO1xufTtcbmV4cG9ydCB7IFJlb3JkZXIgYXMgaW9uX3Jlb3JkZXIsIFJlb3JkZXJHcm91cCBhcyBpb25fcmVvcmRlcl9ncm91cCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==