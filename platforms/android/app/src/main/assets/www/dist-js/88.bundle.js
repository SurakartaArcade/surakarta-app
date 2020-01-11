(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-virtual-scroll.entry.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-virtual-scroll.entry.js ***!
  \***************************************************************************/
/*! exports provided: ion_virtual_scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_virtual_scroll", function() { return VirtualScroll; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");



var CELL_TYPE_ITEM = 'item';
var CELL_TYPE_HEADER = 'header';
var CELL_TYPE_FOOTER = 'footer';
var NODE_CHANGE_NONE = 0;
var NODE_CHANGE_POSITION = 1;
var NODE_CHANGE_CELL = 2;
var MIN_READS = 2;
var updateVDom = function (dom, heightIndex, cells, range) {
    // reset dom
    for (var _i = 0, dom_1 = dom; _i < dom_1.length; _i++) {
        var node = dom_1[_i];
        node.change = NODE_CHANGE_NONE;
        node.d = true;
    }
    // try to match into exisiting dom
    var toMutate = [];
    var end = range.offset + range.length;
    var _loop_1 = function (i) {
        var cell = cells[i];
        var node = dom.find(function (n) { return n.d && n.cell === cell; });
        if (node) {
            var top = heightIndex[i];
            if (top !== node.top) {
                node.top = top;
                node.change = NODE_CHANGE_POSITION;
            }
            node.d = false;
        }
        else {
            toMutate.push(cell);
        }
    };
    for (var i = range.offset; i < end; i++) {
        _loop_1(i);
    }
    // needs to append
    var pool = dom.filter(function (n) { return n.d; });
    var _loop_2 = function (cell) {
        var node = pool.find(function (n) { return n.d && n.cell.type === cell.type; });
        var index = cell.i;
        if (node) {
            node.d = false;
            node.change = NODE_CHANGE_CELL;
            node.cell = cell;
            node.top = heightIndex[index];
        }
        else {
            dom.push({
                d: false,
                cell: cell,
                visible: true,
                change: NODE_CHANGE_CELL,
                top: heightIndex[index],
            });
        }
    };
    for (var _a = 0, toMutate_1 = toMutate; _a < toMutate_1.length; _a++) {
        var cell = toMutate_1[_a];
        _loop_2(cell);
    }
    dom
        .filter(function (n) { return n.d && n.top !== -9999; })
        .forEach(function (n) {
        n.change = NODE_CHANGE_POSITION;
        n.top = -9999;
    });
};
var doRender = function (el, nodeRender, dom, updateCellHeight) {
    var children = Array.from(el.children).filter(function (n) { return n.tagName !== 'TEMPLATE'; });
    var childrenNu = children.length;
    var child;
    for (var i = 0; i < dom.length; i++) {
        var node = dom[i];
        var cell = node.cell;
        // the cell change, the content must be updated
        if (node.change === NODE_CHANGE_CELL) {
            if (i < childrenNu) {
                child = children[i];
                nodeRender(child, cell, i);
            }
            else {
                var newChild = createNode(el, cell.type);
                child = nodeRender(newChild, cell, i) || newChild;
                child.classList.add('virtual-item');
                el.appendChild(child);
            }
            child['$ionCell'] = cell;
        }
        else {
            child = children[i];
        }
        // only update position when it changes
        if (node.change !== NODE_CHANGE_NONE) {
            child.style.transform = "translate3d(0," + node.top + "px,0)";
        }
        // update visibility
        var visible = cell.visible;
        if (node.visible !== visible) {
            if (visible) {
                child.classList.remove('virtual-loading');
            }
            else {
                child.classList.add('virtual-loading');
            }
            node.visible = visible;
        }
        // dynamic height
        if (cell.reads > 0) {
            updateCellHeight(cell, child);
            cell.reads--;
        }
    }
};
var createNode = function (el, type) {
    var template = getTemplate(el, type);
    if (template && el.ownerDocument) {
        return el.ownerDocument.importNode(template.content, true).children[0];
    }
    return null;
};
var getTemplate = function (el, type) {
    switch (type) {
        case CELL_TYPE_ITEM: return el.querySelector('template:not([name])');
        case CELL_TYPE_HEADER: return el.querySelector('template[name=header]');
        case CELL_TYPE_FOOTER: return el.querySelector('template[name=footer]');
    }
};
var getViewport = function (scrollTop, vierportHeight, margin) {
    return {
        top: Math.max(scrollTop - margin, 0),
        bottom: scrollTop + vierportHeight + margin
    };
};
var getRange = function (heightIndex, viewport, buffer) {
    var topPos = viewport.top;
    var bottomPos = viewport.bottom;
    // find top index
    var i = 0;
    for (; i < heightIndex.length; i++) {
        if (heightIndex[i] > topPos) {
            break;
        }
    }
    var offset = Math.max(i - buffer - 1, 0);
    // find bottom index
    for (; i < heightIndex.length; i++) {
        if (heightIndex[i] >= bottomPos) {
            break;
        }
    }
    var end = Math.min(i + buffer, heightIndex.length);
    var length = end - offset;
    return { offset: offset, length: length };
};
var getShouldUpdate = function (dirtyIndex, currentRange, range) {
    var end = range.offset + range.length;
    return (dirtyIndex <= end ||
        currentRange.offset !== range.offset ||
        currentRange.length !== range.length);
};
var findCellIndex = function (cells, index) {
    var max = cells.length > 0 ? cells[cells.length - 1].index : 0;
    if (index === 0) {
        return 0;
    }
    else if (index === max + 1) {
        return cells.length;
    }
    else {
        return cells.findIndex(function (c) { return c.index === index; });
    }
};
var inplaceUpdate = function (dst, src, offset) {
    if (offset === 0 && src.length >= dst.length) {
        return src;
    }
    for (var i = 0; i < src.length; i++) {
        dst[i + offset] = src[i];
    }
    return dst;
};
var calcCells = function (items, itemHeight, headerHeight, footerHeight, headerFn, footerFn, approxHeaderHeight, approxFooterHeight, approxItemHeight, j, offset, len) {
    var cells = [];
    var end = len + offset;
    for (var i = offset; i < end; i++) {
        var item = items[i];
        if (headerFn) {
            var value = headerFn(item, i, items);
            if (value != null) {
                cells.push({
                    i: j++,
                    type: CELL_TYPE_HEADER,
                    value: value,
                    index: i,
                    height: headerHeight ? headerHeight(value, i) : approxHeaderHeight,
                    reads: headerHeight ? 0 : MIN_READS,
                    visible: !!headerHeight,
                });
            }
        }
        cells.push({
            i: j++,
            type: CELL_TYPE_ITEM,
            value: item,
            index: i,
            height: itemHeight ? itemHeight(item, i) : approxItemHeight,
            reads: itemHeight ? 0 : MIN_READS,
            visible: !!itemHeight,
        });
        if (footerFn) {
            var value = footerFn(item, i, items);
            if (value != null) {
                cells.push({
                    i: j++,
                    type: CELL_TYPE_FOOTER,
                    value: value,
                    index: i,
                    height: footerHeight ? footerHeight(value, i) : approxFooterHeight,
                    reads: footerHeight ? 0 : MIN_READS,
                    visible: !!footerHeight,
                });
            }
        }
    }
    return cells;
};
var calcHeightIndex = function (buf, cells, index) {
    var acum = buf[index];
    for (var i = index; i < buf.length; i++) {
        buf[i] = acum;
        acum += cells[i].height;
    }
    return acum;
};
var resizeBuffer = function (buf, len) {
    if (!buf) {
        return new Uint32Array(len);
    }
    if (buf.length === len) {
        return buf;
    }
    else if (len > buf.length) {
        var newBuf = new Uint32Array(len);
        newBuf.set(buf);
        return newBuf;
    }
    else {
        return buf.subarray(0, len);
    }
};
var positionForIndex = function (index, cells, heightIndex) {
    var cell = cells.find(function (c) { return c.type === CELL_TYPE_ITEM && c.index === index; });
    if (cell) {
        return heightIndex[cell.i];
    }
    return -1;
};
var VirtualScroll = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.range = { offset: 0, length: 0 };
        this.viewportHeight = 0;
        this.cells = [];
        this.virtualDom = [];
        this.isEnabled = false;
        this.viewportOffset = 0;
        this.currentScrollTop = 0;
        this.indexDirty = 0;
        this.lastItemLen = 0;
        this.totalHeight = 0;
        /**
         * It is important to provide this
         * if virtual item height will be significantly larger than the default
         * The approximate height of each virtual item template's cell.
         * This dimension is used to help determine how many cells should
         * be created when initialized, and to help calculate the height of
         * the scrollable area. This height value can only use `px` units.
         * Note that the actual rendered size of each cell comes from the
         * app's CSS, whereas this approximation is used to help calculate
         * initial dimensions before the item has been rendered.
         */
        this.approxItemHeight = 45;
        /**
         * The approximate height of each header template's cell.
         * This dimension is used to help determine how many cells should
         * be created when initialized, and to help calculate the height of
         * the scrollable area. This height value can only use `px` units.
         * Note that the actual rendered size of each cell comes from the
         * app's CSS, whereas this approximation is used to help calculate
         * initial dimensions before the item has been rendered.
         */
        this.approxHeaderHeight = 30;
        /**
         * The approximate width of each footer template's cell.
         * This dimension is used to help determine how many cells should
         * be created when initialized, and to help calculate the height of
         * the scrollable area. This height value can only use `px` units.
         * Note that the actual rendered size of each cell comes from the
         * app's CSS, whereas this approximation is used to help calculate
         * initial dimensions before the item has been rendered.
         */
        this.approxFooterHeight = 30;
        this.onScroll = function () {
            _this.updateVirtualScroll();
        };
    }
    class_1.prototype.itemsChanged = function () {
        this.calcCells();
        this.updateVirtualScroll();
    };
    class_1.prototype.connectedCallback = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var contentEl, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        contentEl = this.el.closest('ion-content');
                        if (!contentEl) {
                            console.error('<ion-virtual-scroll> must be used inside an <ion-content>');
                            return [2 /*return*/];
                        }
                        _a = this;
                        return [4 /*yield*/, contentEl.getScrollElement()];
                    case 1:
                        _a.scrollEl = _b.sent();
                        this.contentEl = contentEl;
                        this.calcCells();
                        this.updateState();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.componentDidUpdate = function () {
        this.updateState();
    };
    class_1.prototype.disconnectedCallback = function () {
        this.scrollEl = undefined;
    };
    class_1.prototype.onResize = function () {
        this.calcCells();
        this.updateVirtualScroll();
    };
    /**
     * Returns the position of the virtual item at the given index.
     */
    class_1.prototype.positionForItem = function (index) {
        return Promise.resolve(positionForIndex(index, this.cells, this.getHeightIndex()));
    };
    /**
     * This method marks a subset of items as dirty, so they can be re-rendered. Items should be marked as
     * dirty any time the content or their style changes.
     *
     * The subset of items to be updated can are specifing by an offset and a length.
     */
    class_1.prototype.checkRange = function (offset, len) {
        if (len === void 0) { len = -1; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var length, cellIndex, cells;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                // TODO: kind of hacky how we do in-place updated of the cells
                // array. this part needs a complete refactor
                if (!this.items) {
                    return [2 /*return*/];
                }
                length = (len === -1)
                    ? this.items.length - offset
                    : len;
                cellIndex = findCellIndex(this.cells, offset);
                cells = calcCells(this.items, this.itemHeight, this.headerHeight, this.footerHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, cellIndex, offset, length);
                this.cells = inplaceUpdate(this.cells, cells, cellIndex);
                this.lastItemLen = this.items.length;
                this.indexDirty = Math.max(offset - 1, 0);
                this.scheduleUpdate();
                return [2 /*return*/];
            });
        });
    };
    /**
     * This method marks the tail the items array as dirty, so they can be re-rendered.
     *
     * It's equivalent to calling:
     *
     * ```js
     * virtualScroll.checkRange(lastItemLen);
     * ```
     */
    class_1.prototype.checkEnd = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.items) {
                    this.checkRange(this.lastItemLen);
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.updateVirtualScroll = function () {
        // do nothing if virtual-scroll is disabled
        if (!this.isEnabled || !this.scrollEl) {
            return;
        }
        // unschedule future updates
        if (this.timerUpdate) {
            clearTimeout(this.timerUpdate);
            this.timerUpdate = undefined;
        }
        // schedule DOM operations into the stencil queue
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["f"])(this.readVS.bind(this));
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["w"])(this.writeVS.bind(this));
    };
    class_1.prototype.readVS = function () {
        var _a = this, contentEl = _a.contentEl, scrollEl = _a.scrollEl, el = _a.el;
        var topOffset = 0;
        var node = el;
        while (node && node !== contentEl) {
            topOffset += node.offsetTop;
            node = node.parentElement;
        }
        this.viewportOffset = topOffset;
        if (scrollEl) {
            this.viewportHeight = scrollEl.offsetHeight;
            this.currentScrollTop = scrollEl.scrollTop;
        }
    };
    class_1.prototype.writeVS = function () {
        var dirtyIndex = this.indexDirty;
        // get visible viewport
        var scrollTop = this.currentScrollTop - this.viewportOffset;
        var viewport = getViewport(scrollTop, this.viewportHeight, 100);
        // compute lazily the height index
        var heightIndex = this.getHeightIndex();
        // get array bounds of visible cells base in the viewport
        var range = getRange(heightIndex, viewport, 2);
        // fast path, do nothing
        var shouldUpdate = getShouldUpdate(dirtyIndex, this.range, range);
        if (!shouldUpdate) {
            return;
        }
        this.range = range;
        // in place mutation of the virtual DOM
        updateVDom(this.virtualDom, heightIndex, this.cells, range);
        // Write DOM
        // Different code paths taken depending of the render API used
        if (this.nodeRender) {
            doRender(this.el, this.nodeRender, this.virtualDom, this.updateCellHeight.bind(this));
        }
        else if (this.domRender) {
            this.domRender(this.virtualDom);
        }
        else if (this.renderItem) {
            this.el.forceUpdate();
        }
    };
    class_1.prototype.updateCellHeight = function (cell, node) {
        var _this = this;
        var update = function () {
            if (node['$ionCell'] === cell) {
                var style = window.getComputedStyle(node);
                var height = node.offsetHeight + parseFloat(style.getPropertyValue('margin-bottom'));
                _this.setCellHeight(cell, height);
            }
        };
        if (node && node.componentOnReady) {
            node.componentOnReady().then(update);
        }
        else {
            update();
        }
    };
    class_1.prototype.setCellHeight = function (cell, height) {
        var index = cell.i;
        // the cell might changed since the height update was scheduled
        if (cell !== this.cells[index]) {
            return;
        }
        if (cell.height !== height || cell.visible !== true) {
            cell.visible = true;
            cell.height = height;
            this.indexDirty = Math.min(this.indexDirty, index);
            this.scheduleUpdate();
        }
    };
    class_1.prototype.scheduleUpdate = function () {
        var _this = this;
        clearTimeout(this.timerUpdate);
        this.timerUpdate = setTimeout(function () { return _this.updateVirtualScroll(); }, 100);
    };
    class_1.prototype.updateState = function () {
        var shouldEnable = !!(this.scrollEl &&
            this.cells);
        if (shouldEnable !== this.isEnabled) {
            this.enableScrollEvents(shouldEnable);
            if (shouldEnable) {
                this.updateVirtualScroll();
            }
        }
    };
    class_1.prototype.calcCells = function () {
        if (!this.items) {
            return;
        }
        this.lastItemLen = this.items.length;
        this.cells = calcCells(this.items, this.itemHeight, this.headerHeight, this.footerHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, 0, 0, this.lastItemLen);
        this.indexDirty = 0;
    };
    class_1.prototype.getHeightIndex = function () {
        if (this.indexDirty !== Infinity) {
            this.calcHeightIndex(this.indexDirty);
        }
        return this.heightIndex;
    };
    class_1.prototype.calcHeightIndex = function (index) {
        if (index === void 0) { index = 0; }
        // TODO: optimize, we don't need to calculate all the cells
        this.heightIndex = resizeBuffer(this.heightIndex, this.cells.length);
        this.totalHeight = calcHeightIndex(this.heightIndex, this.cells, index);
        this.indexDirty = Infinity;
    };
    class_1.prototype.enableScrollEvents = function (shouldListen) {
        var _this = this;
        if (this.rmEvent) {
            this.rmEvent();
            this.rmEvent = undefined;
        }
        var scrollEl = this.scrollEl;
        if (scrollEl) {
            this.isEnabled = shouldListen;
            scrollEl.addEventListener('scroll', this.onScroll);
            this.rmEvent = function () {
                scrollEl.removeEventListener('scroll', _this.onScroll);
            };
        }
    };
    class_1.prototype.renderVirtualNode = function (node) {
        var _a = node.cell, type = _a.type, value = _a.value, index = _a.index;
        switch (type) {
            case CELL_TYPE_ITEM: return this.renderItem(value, index);
            case CELL_TYPE_HEADER: return this.renderHeader(value, index);
            case CELL_TYPE_FOOTER: return this.renderFooter(value, index);
        }
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { style: {
                height: this.totalHeight + "px"
            } }, this.renderItem && (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(VirtualProxy, { dom: this.virtualDom }, this.virtualDom.map(function (node) { return _this.renderVirtualNode(node); })))));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "itemHeight": ["itemsChanged"],
                "headerHeight": ["itemsChanged"],
                "footerHeight": ["itemsChanged"],
                "items": ["itemsChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute!important;top:0!important;right:0!important;left:0!important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var VirtualProxy = function (_a, children, utils) {
    var dom = _a.dom;
    return utils.map(children, function (child, i) {
        var node = dom[i];
        var vattrs = child.vattrs || {};
        var classes = vattrs.class || '';
        classes += 'virtual-item ';
        if (!node.visible) {
            classes += 'virtual-loading';
        }
        return Object.assign(Object.assign({}, child), { vattrs: Object.assign(Object.assign({}, vattrs), { class: classes, style: Object.assign(Object.assign({}, vattrs.style), { transform: "translate3d(0," + node.top + "px,0)" }) }) });
    });
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi12aXJ0dWFsLXNjcm9sbC5lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUMwRTtBQUMzRjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywrQkFBK0IsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsU0FBUztBQUN2QztBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsWUFBWSxFQUFFO0FBQ3REO0FBQ0EsMkNBQTJDLHlDQUF5QyxFQUFFO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDJDQUEyQyx3QkFBd0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsK0JBQStCLEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxnRUFBZ0UsaUNBQWlDLEVBQUU7QUFDbkc7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLDRCQUE0QixjQUFjLGtCQUFrQixXQUFXLGVBQWUseUJBQXlCLHNCQUFzQixxQkFBcUIsaUJBQWlCLG9DQUFvQyxVQUFVLGlDQUFpQyw0QkFBNEIsZ0JBQWdCLGtCQUFrQixpQkFBaUIsZ0NBQWdDLHdCQUF3QixzQkFBc0IsRUFBRSxFQUFFO0FBQ3JiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsV0FBVyx1Q0FBdUMsWUFBWSxzREFBc0Qsa0JBQWtCLG1EQUFtRCxHQUFHLEdBQUc7QUFDNU8sS0FBSztBQUNMO0FBQytDIiwiZmlsZSI6Ijg4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgZiBhcyByZWFkVGFzaywgdyBhcyB3cml0ZVRhc2ssIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWZlZWVmZjBkLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xudmFyIENFTExfVFlQRV9JVEVNID0gJ2l0ZW0nO1xudmFyIENFTExfVFlQRV9IRUFERVIgPSAnaGVhZGVyJztcbnZhciBDRUxMX1RZUEVfRk9PVEVSID0gJ2Zvb3Rlcic7XG52YXIgTk9ERV9DSEFOR0VfTk9ORSA9IDA7XG52YXIgTk9ERV9DSEFOR0VfUE9TSVRJT04gPSAxO1xudmFyIE5PREVfQ0hBTkdFX0NFTEwgPSAyO1xudmFyIE1JTl9SRUFEUyA9IDI7XG52YXIgdXBkYXRlVkRvbSA9IGZ1bmN0aW9uIChkb20sIGhlaWdodEluZGV4LCBjZWxscywgcmFuZ2UpIHtcbiAgICAvLyByZXNldCBkb21cbiAgICBmb3IgKHZhciBfaSA9IDAsIGRvbV8xID0gZG9tOyBfaSA8IGRvbV8xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgbm9kZSA9IGRvbV8xW19pXTtcbiAgICAgICAgbm9kZS5jaGFuZ2UgPSBOT0RFX0NIQU5HRV9OT05FO1xuICAgICAgICBub2RlLmQgPSB0cnVlO1xuICAgIH1cbiAgICAvLyB0cnkgdG8gbWF0Y2ggaW50byBleGlzaXRpbmcgZG9tXG4gICAgdmFyIHRvTXV0YXRlID0gW107XG4gICAgdmFyIGVuZCA9IHJhbmdlLm9mZnNldCArIHJhbmdlLmxlbmd0aDtcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHZhciBjZWxsID0gY2VsbHNbaV07XG4gICAgICAgIHZhciBub2RlID0gZG9tLmZpbmQoZnVuY3Rpb24gKG4pIHsgcmV0dXJuIG4uZCAmJiBuLmNlbGwgPT09IGNlbGw7IH0pO1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgdmFyIHRvcCA9IGhlaWdodEluZGV4W2ldO1xuICAgICAgICAgICAgaWYgKHRvcCAhPT0gbm9kZS50b3ApIHtcbiAgICAgICAgICAgICAgICBub2RlLnRvcCA9IHRvcDtcbiAgICAgICAgICAgICAgICBub2RlLmNoYW5nZSA9IE5PREVfQ0hBTkdFX1BPU0lUSU9OO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5kID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b011dGF0ZS5wdXNoKGNlbGwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmb3IgKHZhciBpID0gcmFuZ2Uub2Zmc2V0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgX2xvb3BfMShpKTtcbiAgICB9XG4gICAgLy8gbmVlZHMgdG8gYXBwZW5kXG4gICAgdmFyIHBvb2wgPSBkb20uZmlsdGVyKGZ1bmN0aW9uIChuKSB7IHJldHVybiBuLmQ7IH0pO1xuICAgIHZhciBfbG9vcF8yID0gZnVuY3Rpb24gKGNlbGwpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBwb29sLmZpbmQoZnVuY3Rpb24gKG4pIHsgcmV0dXJuIG4uZCAmJiBuLmNlbGwudHlwZSA9PT0gY2VsbC50eXBlOyB9KTtcbiAgICAgICAgdmFyIGluZGV4ID0gY2VsbC5pO1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgbm9kZS5kID0gZmFsc2U7XG4gICAgICAgICAgICBub2RlLmNoYW5nZSA9IE5PREVfQ0hBTkdFX0NFTEw7XG4gICAgICAgICAgICBub2RlLmNlbGwgPSBjZWxsO1xuICAgICAgICAgICAgbm9kZS50b3AgPSBoZWlnaHRJbmRleFtpbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb20ucHVzaCh7XG4gICAgICAgICAgICAgICAgZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2VsbDogY2VsbCxcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNoYW5nZTogTk9ERV9DSEFOR0VfQ0VMTCxcbiAgICAgICAgICAgICAgICB0b3A6IGhlaWdodEluZGV4W2luZGV4XSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmb3IgKHZhciBfYSA9IDAsIHRvTXV0YXRlXzEgPSB0b011dGF0ZTsgX2EgPCB0b011dGF0ZV8xLmxlbmd0aDsgX2ErKykge1xuICAgICAgICB2YXIgY2VsbCA9IHRvTXV0YXRlXzFbX2FdO1xuICAgICAgICBfbG9vcF8yKGNlbGwpO1xuICAgIH1cbiAgICBkb21cbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobikgeyByZXR1cm4gbi5kICYmIG4udG9wICE9PSAtOTk5OTsgfSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgbi5jaGFuZ2UgPSBOT0RFX0NIQU5HRV9QT1NJVElPTjtcbiAgICAgICAgbi50b3AgPSAtOTk5OTtcbiAgICB9KTtcbn07XG52YXIgZG9SZW5kZXIgPSBmdW5jdGlvbiAoZWwsIG5vZGVSZW5kZXIsIGRvbSwgdXBkYXRlQ2VsbEhlaWdodCkge1xuICAgIHZhciBjaGlsZHJlbiA9IEFycmF5LmZyb20oZWwuY2hpbGRyZW4pLmZpbHRlcihmdW5jdGlvbiAobikgeyByZXR1cm4gbi50YWdOYW1lICE9PSAnVEVNUExBVEUnOyB9KTtcbiAgICB2YXIgY2hpbGRyZW5OdSA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICB2YXIgY2hpbGQ7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb20ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG5vZGUgPSBkb21baV07XG4gICAgICAgIHZhciBjZWxsID0gbm9kZS5jZWxsO1xuICAgICAgICAvLyB0aGUgY2VsbCBjaGFuZ2UsIHRoZSBjb250ZW50IG11c3QgYmUgdXBkYXRlZFxuICAgICAgICBpZiAobm9kZS5jaGFuZ2UgPT09IE5PREVfQ0hBTkdFX0NFTEwpIHtcbiAgICAgICAgICAgIGlmIChpIDwgY2hpbGRyZW5OdSkge1xuICAgICAgICAgICAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgbm9kZVJlbmRlcihjaGlsZCwgY2VsbCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2hpbGQgPSBjcmVhdGVOb2RlKGVsLCBjZWxsLnR5cGUpO1xuICAgICAgICAgICAgICAgIGNoaWxkID0gbm9kZVJlbmRlcihuZXdDaGlsZCwgY2VsbCwgaSkgfHwgbmV3Q2hpbGQ7XG4gICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZCgndmlydHVhbC1pdGVtJyk7XG4gICAgICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hpbGRbJyRpb25DZWxsJ10gPSBjZWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBvbmx5IHVwZGF0ZSBwb3NpdGlvbiB3aGVuIGl0IGNoYW5nZXNcbiAgICAgICAgaWYgKG5vZGUuY2hhbmdlICE9PSBOT0RFX0NIQU5HRV9OT05FKSB7XG4gICAgICAgICAgICBjaGlsZC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKDAsXCIgKyBub2RlLnRvcCArIFwicHgsMClcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyB1cGRhdGUgdmlzaWJpbGl0eVxuICAgICAgICB2YXIgdmlzaWJsZSA9IGNlbGwudmlzaWJsZTtcbiAgICAgICAgaWYgKG5vZGUudmlzaWJsZSAhPT0gdmlzaWJsZSkge1xuICAgICAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCd2aXJ0dWFsLWxvYWRpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ3ZpcnR1YWwtbG9hZGluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBkeW5hbWljIGhlaWdodFxuICAgICAgICBpZiAoY2VsbC5yZWFkcyA+IDApIHtcbiAgICAgICAgICAgIHVwZGF0ZUNlbGxIZWlnaHQoY2VsbCwgY2hpbGQpO1xuICAgICAgICAgICAgY2VsbC5yZWFkcy0tO1xuICAgICAgICB9XG4gICAgfVxufTtcbnZhciBjcmVhdGVOb2RlID0gZnVuY3Rpb24gKGVsLCB0eXBlKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gZ2V0VGVtcGxhdGUoZWwsIHR5cGUpO1xuICAgIGlmICh0ZW1wbGF0ZSAmJiBlbC5vd25lckRvY3VtZW50KSB7XG4gICAgICAgIHJldHVybiBlbC5vd25lckRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSkuY2hpbGRyZW5bMF07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcbnZhciBnZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uIChlbCwgdHlwZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIENFTExfVFlQRV9JVEVNOiByZXR1cm4gZWwucXVlcnlTZWxlY3RvcigndGVtcGxhdGU6bm90KFtuYW1lXSknKTtcbiAgICAgICAgY2FzZSBDRUxMX1RZUEVfSEVBREVSOiByZXR1cm4gZWwucXVlcnlTZWxlY3RvcigndGVtcGxhdGVbbmFtZT1oZWFkZXJdJyk7XG4gICAgICAgIGNhc2UgQ0VMTF9UWVBFX0ZPT1RFUjogcmV0dXJuIGVsLnF1ZXJ5U2VsZWN0b3IoJ3RlbXBsYXRlW25hbWU9Zm9vdGVyXScpO1xuICAgIH1cbn07XG52YXIgZ2V0Vmlld3BvcnQgPSBmdW5jdGlvbiAoc2Nyb2xsVG9wLCB2aWVycG9ydEhlaWdodCwgbWFyZ2luKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBNYXRoLm1heChzY3JvbGxUb3AgLSBtYXJnaW4sIDApLFxuICAgICAgICBib3R0b206IHNjcm9sbFRvcCArIHZpZXJwb3J0SGVpZ2h0ICsgbWFyZ2luXG4gICAgfTtcbn07XG52YXIgZ2V0UmFuZ2UgPSBmdW5jdGlvbiAoaGVpZ2h0SW5kZXgsIHZpZXdwb3J0LCBidWZmZXIpIHtcbiAgICB2YXIgdG9wUG9zID0gdmlld3BvcnQudG9wO1xuICAgIHZhciBib3R0b21Qb3MgPSB2aWV3cG9ydC5ib3R0b207XG4gICAgLy8gZmluZCB0b3AgaW5kZXhcbiAgICB2YXIgaSA9IDA7XG4gICAgZm9yICg7IGkgPCBoZWlnaHRJbmRleC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaGVpZ2h0SW5kZXhbaV0gPiB0b3BQb3MpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBvZmZzZXQgPSBNYXRoLm1heChpIC0gYnVmZmVyIC0gMSwgMCk7XG4gICAgLy8gZmluZCBib3R0b20gaW5kZXhcbiAgICBmb3IgKDsgaSA8IGhlaWdodEluZGV4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChoZWlnaHRJbmRleFtpXSA+PSBib3R0b21Qb3MpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBlbmQgPSBNYXRoLm1pbihpICsgYnVmZmVyLCBoZWlnaHRJbmRleC5sZW5ndGgpO1xuICAgIHZhciBsZW5ndGggPSBlbmQgLSBvZmZzZXQ7XG4gICAgcmV0dXJuIHsgb2Zmc2V0OiBvZmZzZXQsIGxlbmd0aDogbGVuZ3RoIH07XG59O1xudmFyIGdldFNob3VsZFVwZGF0ZSA9IGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBjdXJyZW50UmFuZ2UsIHJhbmdlKSB7XG4gICAgdmFyIGVuZCA9IHJhbmdlLm9mZnNldCArIHJhbmdlLmxlbmd0aDtcbiAgICByZXR1cm4gKGRpcnR5SW5kZXggPD0gZW5kIHx8XG4gICAgICAgIGN1cnJlbnRSYW5nZS5vZmZzZXQgIT09IHJhbmdlLm9mZnNldCB8fFxuICAgICAgICBjdXJyZW50UmFuZ2UubGVuZ3RoICE9PSByYW5nZS5sZW5ndGgpO1xufTtcbnZhciBmaW5kQ2VsbEluZGV4ID0gZnVuY3Rpb24gKGNlbGxzLCBpbmRleCkge1xuICAgIHZhciBtYXggPSBjZWxscy5sZW5ndGggPiAwID8gY2VsbHNbY2VsbHMubGVuZ3RoIC0gMV0uaW5kZXggOiAwO1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5kZXggPT09IG1heCArIDEpIHtcbiAgICAgICAgcmV0dXJuIGNlbGxzLmxlbmd0aDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjZWxscy5maW5kSW5kZXgoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMuaW5kZXggPT09IGluZGV4OyB9KTtcbiAgICB9XG59O1xudmFyIGlucGxhY2VVcGRhdGUgPSBmdW5jdGlvbiAoZHN0LCBzcmMsIG9mZnNldCkge1xuICAgIGlmIChvZmZzZXQgPT09IDAgJiYgc3JjLmxlbmd0aCA+PSBkc3QubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBzcmM7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGRzdDtcbn07XG52YXIgY2FsY0NlbGxzID0gZnVuY3Rpb24gKGl0ZW1zLCBpdGVtSGVpZ2h0LCBoZWFkZXJIZWlnaHQsIGZvb3RlckhlaWdodCwgaGVhZGVyRm4sIGZvb3RlckZuLCBhcHByb3hIZWFkZXJIZWlnaHQsIGFwcHJveEZvb3RlckhlaWdodCwgYXBwcm94SXRlbUhlaWdodCwgaiwgb2Zmc2V0LCBsZW4pIHtcbiAgICB2YXIgY2VsbHMgPSBbXTtcbiAgICB2YXIgZW5kID0gbGVuICsgb2Zmc2V0O1xuICAgIGZvciAodmFyIGkgPSBvZmZzZXQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICBpZiAoaGVhZGVyRm4pIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGhlYWRlckZuKGl0ZW0sIGksIGl0ZW1zKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2VsbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGk6IGorKyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogQ0VMTF9UWVBFX0hFQURFUixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWFkZXJIZWlnaHQgPyBoZWFkZXJIZWlnaHQodmFsdWUsIGkpIDogYXBwcm94SGVhZGVySGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICByZWFkczogaGVhZGVySGVpZ2h0ID8gMCA6IE1JTl9SRUFEUyxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogISFoZWFkZXJIZWlnaHQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2VsbHMucHVzaCh7XG4gICAgICAgICAgICBpOiBqKyssXG4gICAgICAgICAgICB0eXBlOiBDRUxMX1RZUEVfSVRFTSxcbiAgICAgICAgICAgIHZhbHVlOiBpdGVtLFxuICAgICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgICBoZWlnaHQ6IGl0ZW1IZWlnaHQgPyBpdGVtSGVpZ2h0KGl0ZW0sIGkpIDogYXBwcm94SXRlbUhlaWdodCxcbiAgICAgICAgICAgIHJlYWRzOiBpdGVtSGVpZ2h0ID8gMCA6IE1JTl9SRUFEUyxcbiAgICAgICAgICAgIHZpc2libGU6ICEhaXRlbUhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChmb290ZXJGbikge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gZm9vdGVyRm4oaXRlbSwgaSwgaXRlbXMpO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjZWxscy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaTogaisrLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBDRUxMX1RZUEVfRk9PVEVSLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGZvb3RlckhlaWdodCA/IGZvb3RlckhlaWdodCh2YWx1ZSwgaSkgOiBhcHByb3hGb290ZXJIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHJlYWRzOiBmb290ZXJIZWlnaHQgPyAwIDogTUlOX1JFQURTLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiAhIWZvb3RlckhlaWdodCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2VsbHM7XG59O1xudmFyIGNhbGNIZWlnaHRJbmRleCA9IGZ1bmN0aW9uIChidWYsIGNlbGxzLCBpbmRleCkge1xuICAgIHZhciBhY3VtID0gYnVmW2luZGV4XTtcbiAgICBmb3IgKHZhciBpID0gaW5kZXg7IGkgPCBidWYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYnVmW2ldID0gYWN1bTtcbiAgICAgICAgYWN1bSArPSBjZWxsc1tpXS5oZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiBhY3VtO1xufTtcbnZhciByZXNpemVCdWZmZXIgPSBmdW5jdGlvbiAoYnVmLCBsZW4pIHtcbiAgICBpZiAoIWJ1Zikge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQzMkFycmF5KGxlbik7XG4gICAgfVxuICAgIGlmIChidWYubGVuZ3RoID09PSBsZW4pIHtcbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgZWxzZSBpZiAobGVuID4gYnVmLmxlbmd0aCkge1xuICAgICAgICB2YXIgbmV3QnVmID0gbmV3IFVpbnQzMkFycmF5KGxlbik7XG4gICAgICAgIG5ld0J1Zi5zZXQoYnVmKTtcbiAgICAgICAgcmV0dXJuIG5ld0J1ZjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBidWYuc3ViYXJyYXkoMCwgbGVuKTtcbiAgICB9XG59O1xudmFyIHBvc2l0aW9uRm9ySW5kZXggPSBmdW5jdGlvbiAoaW5kZXgsIGNlbGxzLCBoZWlnaHRJbmRleCkge1xuICAgIHZhciBjZWxsID0gY2VsbHMuZmluZChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50eXBlID09PSBDRUxMX1RZUEVfSVRFTSAmJiBjLmluZGV4ID09PSBpbmRleDsgfSk7XG4gICAgaWYgKGNlbGwpIHtcbiAgICAgICAgcmV0dXJuIGhlaWdodEluZGV4W2NlbGwuaV07XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn07XG52YXIgVmlydHVhbFNjcm9sbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18xKGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5yYW5nZSA9IHsgb2Zmc2V0OiAwLCBsZW5ndGg6IDAgfTtcbiAgICAgICAgdGhpcy52aWV3cG9ydEhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuY2VsbHMgPSBbXTtcbiAgICAgICAgdGhpcy52aXJ0dWFsRG9tID0gW107XG4gICAgICAgIHRoaXMuaXNFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmlld3BvcnRPZmZzZXQgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY3JvbGxUb3AgPSAwO1xuICAgICAgICB0aGlzLmluZGV4RGlydHkgPSAwO1xuICAgICAgICB0aGlzLmxhc3RJdGVtTGVuID0gMDtcbiAgICAgICAgdGhpcy50b3RhbEhlaWdodCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJdCBpcyBpbXBvcnRhbnQgdG8gcHJvdmlkZSB0aGlzXG4gICAgICAgICAqIGlmIHZpcnR1YWwgaXRlbSBoZWlnaHQgd2lsbCBiZSBzaWduaWZpY2FudGx5IGxhcmdlciB0aGFuIHRoZSBkZWZhdWx0XG4gICAgICAgICAqIFRoZSBhcHByb3hpbWF0ZSBoZWlnaHQgb2YgZWFjaCB2aXJ0dWFsIGl0ZW0gdGVtcGxhdGUncyBjZWxsLlxuICAgICAgICAgKiBUaGlzIGRpbWVuc2lvbiBpcyB1c2VkIHRvIGhlbHAgZGV0ZXJtaW5lIGhvdyBtYW55IGNlbGxzIHNob3VsZFxuICAgICAgICAgKiBiZSBjcmVhdGVkIHdoZW4gaW5pdGlhbGl6ZWQsIGFuZCB0byBoZWxwIGNhbGN1bGF0ZSB0aGUgaGVpZ2h0IG9mXG4gICAgICAgICAqIHRoZSBzY3JvbGxhYmxlIGFyZWEuIFRoaXMgaGVpZ2h0IHZhbHVlIGNhbiBvbmx5IHVzZSBgcHhgIHVuaXRzLlxuICAgICAgICAgKiBOb3RlIHRoYXQgdGhlIGFjdHVhbCByZW5kZXJlZCBzaXplIG9mIGVhY2ggY2VsbCBjb21lcyBmcm9tIHRoZVxuICAgICAgICAgKiBhcHAncyBDU1MsIHdoZXJlYXMgdGhpcyBhcHByb3hpbWF0aW9uIGlzIHVzZWQgdG8gaGVscCBjYWxjdWxhdGVcbiAgICAgICAgICogaW5pdGlhbCBkaW1lbnNpb25zIGJlZm9yZSB0aGUgaXRlbSBoYXMgYmVlbiByZW5kZXJlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYXBwcm94SXRlbUhlaWdodCA9IDQ1O1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGFwcHJveGltYXRlIGhlaWdodCBvZiBlYWNoIGhlYWRlciB0ZW1wbGF0ZSdzIGNlbGwuXG4gICAgICAgICAqIFRoaXMgZGltZW5zaW9uIGlzIHVzZWQgdG8gaGVscCBkZXRlcm1pbmUgaG93IG1hbnkgY2VsbHMgc2hvdWxkXG4gICAgICAgICAqIGJlIGNyZWF0ZWQgd2hlbiBpbml0aWFsaXplZCwgYW5kIHRvIGhlbHAgY2FsY3VsYXRlIHRoZSBoZWlnaHQgb2ZcbiAgICAgICAgICogdGhlIHNjcm9sbGFibGUgYXJlYS4gVGhpcyBoZWlnaHQgdmFsdWUgY2FuIG9ubHkgdXNlIGBweGAgdW5pdHMuXG4gICAgICAgICAqIE5vdGUgdGhhdCB0aGUgYWN0dWFsIHJlbmRlcmVkIHNpemUgb2YgZWFjaCBjZWxsIGNvbWVzIGZyb20gdGhlXG4gICAgICAgICAqIGFwcCdzIENTUywgd2hlcmVhcyB0aGlzIGFwcHJveGltYXRpb24gaXMgdXNlZCB0byBoZWxwIGNhbGN1bGF0ZVxuICAgICAgICAgKiBpbml0aWFsIGRpbWVuc2lvbnMgYmVmb3JlIHRoZSBpdGVtIGhhcyBiZWVuIHJlbmRlcmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hcHByb3hIZWFkZXJIZWlnaHQgPSAzMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhcHByb3hpbWF0ZSB3aWR0aCBvZiBlYWNoIGZvb3RlciB0ZW1wbGF0ZSdzIGNlbGwuXG4gICAgICAgICAqIFRoaXMgZGltZW5zaW9uIGlzIHVzZWQgdG8gaGVscCBkZXRlcm1pbmUgaG93IG1hbnkgY2VsbHMgc2hvdWxkXG4gICAgICAgICAqIGJlIGNyZWF0ZWQgd2hlbiBpbml0aWFsaXplZCwgYW5kIHRvIGhlbHAgY2FsY3VsYXRlIHRoZSBoZWlnaHQgb2ZcbiAgICAgICAgICogdGhlIHNjcm9sbGFibGUgYXJlYS4gVGhpcyBoZWlnaHQgdmFsdWUgY2FuIG9ubHkgdXNlIGBweGAgdW5pdHMuXG4gICAgICAgICAqIE5vdGUgdGhhdCB0aGUgYWN0dWFsIHJlbmRlcmVkIHNpemUgb2YgZWFjaCBjZWxsIGNvbWVzIGZyb20gdGhlXG4gICAgICAgICAqIGFwcCdzIENTUywgd2hlcmVhcyB0aGlzIGFwcHJveGltYXRpb24gaXMgdXNlZCB0byBoZWxwIGNhbGN1bGF0ZVxuICAgICAgICAgKiBpbml0aWFsIGRpbWVuc2lvbnMgYmVmb3JlIHRoZSBpdGVtIGhhcyBiZWVuIHJlbmRlcmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hcHByb3hGb290ZXJIZWlnaHQgPSAzMDtcbiAgICAgICAgdGhpcy5vblNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZVZpcnR1YWxTY3JvbGwoKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuaXRlbXNDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNhbGNDZWxscygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpcnR1YWxTY3JvbGwoKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY29udGVudEVsLCBfYTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRFbCA9IHRoaXMuZWwuY2xvc2VzdCgnaW9uLWNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29udGVudEVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignPGlvbi12aXJ0dWFsLXNjcm9sbD4gbXVzdCBiZSB1c2VkIGluc2lkZSBhbiA8aW9uLWNvbnRlbnQ+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY29udGVudEVsLmdldFNjcm9sbEVsZW1lbnQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNjcm9sbEVsID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50RWwgPSBjb250ZW50RWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGNDZWxscygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZGlzY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsRWwgPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5vblJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jYWxjQ2VsbHMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVWaXJ0dWFsU2Nyb2xsKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwb3NpdGlvbiBvZiB0aGUgdmlydHVhbCBpdGVtIGF0IHRoZSBnaXZlbiBpbmRleC5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5wb3NpdGlvbkZvckl0ZW0gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwb3NpdGlvbkZvckluZGV4KGluZGV4LCB0aGlzLmNlbGxzLCB0aGlzLmdldEhlaWdodEluZGV4KCkpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIG1hcmtzIGEgc3Vic2V0IG9mIGl0ZW1zIGFzIGRpcnR5LCBzbyB0aGV5IGNhbiBiZSByZS1yZW5kZXJlZC4gSXRlbXMgc2hvdWxkIGJlIG1hcmtlZCBhc1xuICAgICAqIGRpcnR5IGFueSB0aW1lIHRoZSBjb250ZW50IG9yIHRoZWlyIHN0eWxlIGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBUaGUgc3Vic2V0IG9mIGl0ZW1zIHRvIGJlIHVwZGF0ZWQgY2FuIGFyZSBzcGVjaWZpbmcgYnkgYW4gb2Zmc2V0IGFuZCBhIGxlbmd0aC5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5jaGVja1JhbmdlID0gZnVuY3Rpb24gKG9mZnNldCwgbGVuKSB7XG4gICAgICAgIGlmIChsZW4gPT09IHZvaWQgMCkgeyBsZW4gPSAtMTsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoLCBjZWxsSW5kZXgsIGNlbGxzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IGtpbmQgb2YgaGFja3kgaG93IHdlIGRvIGluLXBsYWNlIHVwZGF0ZWQgb2YgdGhlIGNlbGxzXG4gICAgICAgICAgICAgICAgLy8gYXJyYXkuIHRoaXMgcGFydCBuZWVkcyBhIGNvbXBsZXRlIHJlZmFjdG9yXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gKGxlbiA9PT0gLTEpXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5pdGVtcy5sZW5ndGggLSBvZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgOiBsZW47XG4gICAgICAgICAgICAgICAgY2VsbEluZGV4ID0gZmluZENlbGxJbmRleCh0aGlzLmNlbGxzLCBvZmZzZXQpO1xuICAgICAgICAgICAgICAgIGNlbGxzID0gY2FsY0NlbGxzKHRoaXMuaXRlbXMsIHRoaXMuaXRlbUhlaWdodCwgdGhpcy5oZWFkZXJIZWlnaHQsIHRoaXMuZm9vdGVySGVpZ2h0LCB0aGlzLmhlYWRlckZuLCB0aGlzLmZvb3RlckZuLCB0aGlzLmFwcHJveEhlYWRlckhlaWdodCwgdGhpcy5hcHByb3hGb290ZXJIZWlnaHQsIHRoaXMuYXBwcm94SXRlbUhlaWdodCwgY2VsbEluZGV4LCBvZmZzZXQsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IGlucGxhY2VVcGRhdGUodGhpcy5jZWxscywgY2VsbHMsIGNlbGxJbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0SXRlbUxlbiA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXhEaXJ0eSA9IE1hdGgubWF4KG9mZnNldCAtIDEsIDApO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBtYXJrcyB0aGUgdGFpbCB0aGUgaXRlbXMgYXJyYXkgYXMgZGlydHksIHNvIHRoZXkgY2FuIGJlIHJlLXJlbmRlcmVkLlxuICAgICAqXG4gICAgICogSXQncyBlcXVpdmFsZW50IHRvIGNhbGxpbmc6XG4gICAgICpcbiAgICAgKiBgYGBqc1xuICAgICAqIHZpcnR1YWxTY3JvbGwuY2hlY2tSYW5nZShsYXN0SXRlbUxlbik7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY2hlY2tFbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUmFuZ2UodGhpcy5sYXN0SXRlbUxlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnVwZGF0ZVZpcnR1YWxTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmcgaWYgdmlydHVhbC1zY3JvbGwgaXMgZGlzYWJsZWRcbiAgICAgICAgaWYgKCF0aGlzLmlzRW5hYmxlZCB8fCAhdGhpcy5zY3JvbGxFbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHVuc2NoZWR1bGUgZnV0dXJlIHVwZGF0ZXNcbiAgICAgICAgaWYgKHRoaXMudGltZXJVcGRhdGUpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyVXBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMudGltZXJVcGRhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2NoZWR1bGUgRE9NIG9wZXJhdGlvbnMgaW50byB0aGUgc3RlbmNpbCBxdWV1ZVxuICAgICAgICByZWFkVGFzayh0aGlzLnJlYWRWUy5iaW5kKHRoaXMpKTtcbiAgICAgICAgd3JpdGVUYXNrKHRoaXMud3JpdGVWUy5iaW5kKHRoaXMpKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlYWRWUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcywgY29udGVudEVsID0gX2EuY29udGVudEVsLCBzY3JvbGxFbCA9IF9hLnNjcm9sbEVsLCBlbCA9IF9hLmVsO1xuICAgICAgICB2YXIgdG9wT2Zmc2V0ID0gMDtcbiAgICAgICAgdmFyIG5vZGUgPSBlbDtcbiAgICAgICAgd2hpbGUgKG5vZGUgJiYgbm9kZSAhPT0gY29udGVudEVsKSB7XG4gICAgICAgICAgICB0b3BPZmZzZXQgKz0gbm9kZS5vZmZzZXRUb3A7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlld3BvcnRPZmZzZXQgPSB0b3BPZmZzZXQ7XG4gICAgICAgIGlmIChzY3JvbGxFbCkge1xuICAgICAgICAgICAgdGhpcy52aWV3cG9ydEhlaWdodCA9IHNjcm9sbEVsLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjcm9sbFRvcCA9IHNjcm9sbEVsLnNjcm9sbFRvcDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUud3JpdGVWUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRpcnR5SW5kZXggPSB0aGlzLmluZGV4RGlydHk7XG4gICAgICAgIC8vIGdldCB2aXNpYmxlIHZpZXdwb3J0XG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSB0aGlzLmN1cnJlbnRTY3JvbGxUb3AgLSB0aGlzLnZpZXdwb3J0T2Zmc2V0O1xuICAgICAgICB2YXIgdmlld3BvcnQgPSBnZXRWaWV3cG9ydChzY3JvbGxUb3AsIHRoaXMudmlld3BvcnRIZWlnaHQsIDEwMCk7XG4gICAgICAgIC8vIGNvbXB1dGUgbGF6aWx5IHRoZSBoZWlnaHQgaW5kZXhcbiAgICAgICAgdmFyIGhlaWdodEluZGV4ID0gdGhpcy5nZXRIZWlnaHRJbmRleCgpO1xuICAgICAgICAvLyBnZXQgYXJyYXkgYm91bmRzIG9mIHZpc2libGUgY2VsbHMgYmFzZSBpbiB0aGUgdmlld3BvcnRcbiAgICAgICAgdmFyIHJhbmdlID0gZ2V0UmFuZ2UoaGVpZ2h0SW5kZXgsIHZpZXdwb3J0LCAyKTtcbiAgICAgICAgLy8gZmFzdCBwYXRoLCBkbyBub3RoaW5nXG4gICAgICAgIHZhciBzaG91bGRVcGRhdGUgPSBnZXRTaG91bGRVcGRhdGUoZGlydHlJbmRleCwgdGhpcy5yYW5nZSwgcmFuZ2UpO1xuICAgICAgICBpZiAoIXNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmFuZ2UgPSByYW5nZTtcbiAgICAgICAgLy8gaW4gcGxhY2UgbXV0YXRpb24gb2YgdGhlIHZpcnR1YWwgRE9NXG4gICAgICAgIHVwZGF0ZVZEb20odGhpcy52aXJ0dWFsRG9tLCBoZWlnaHRJbmRleCwgdGhpcy5jZWxscywgcmFuZ2UpO1xuICAgICAgICAvLyBXcml0ZSBET01cbiAgICAgICAgLy8gRGlmZmVyZW50IGNvZGUgcGF0aHMgdGFrZW4gZGVwZW5kaW5nIG9mIHRoZSByZW5kZXIgQVBJIHVzZWRcbiAgICAgICAgaWYgKHRoaXMubm9kZVJlbmRlcikge1xuICAgICAgICAgICAgZG9SZW5kZXIodGhpcy5lbCwgdGhpcy5ub2RlUmVuZGVyLCB0aGlzLnZpcnR1YWxEb20sIHRoaXMudXBkYXRlQ2VsbEhlaWdodC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmRvbVJlbmRlcikge1xuICAgICAgICAgICAgdGhpcy5kb21SZW5kZXIodGhpcy52aXJ0dWFsRG9tKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnJlbmRlckl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuZWwuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUudXBkYXRlQ2VsbEhlaWdodCA9IGZ1bmN0aW9uIChjZWxsLCBub2RlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB1cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobm9kZVsnJGlvbkNlbGwnXSA9PT0gY2VsbCkge1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSBub2RlLm9mZnNldEhlaWdodCArIHBhcnNlRmxvYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWJvdHRvbScpKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRDZWxsSGVpZ2h0KGNlbGwsIGhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmIChub2RlICYmIG5vZGUuY29tcG9uZW50T25SZWFkeSkge1xuICAgICAgICAgICAgbm9kZS5jb21wb25lbnRPblJlYWR5KCkudGhlbih1cGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnNldENlbGxIZWlnaHQgPSBmdW5jdGlvbiAoY2VsbCwgaGVpZ2h0KSB7XG4gICAgICAgIHZhciBpbmRleCA9IGNlbGwuaTtcbiAgICAgICAgLy8gdGhlIGNlbGwgbWlnaHQgY2hhbmdlZCBzaW5jZSB0aGUgaGVpZ2h0IHVwZGF0ZSB3YXMgc2NoZWR1bGVkXG4gICAgICAgIGlmIChjZWxsICE9PSB0aGlzLmNlbGxzW2luZGV4XSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZWxsLmhlaWdodCAhPT0gaGVpZ2h0IHx8IGNlbGwudmlzaWJsZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2VsbC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNlbGwuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5pbmRleERpcnR5ID0gTWF0aC5taW4odGhpcy5pbmRleERpcnR5LCBpbmRleCk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnNjaGVkdWxlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lclVwZGF0ZSk7XG4gICAgICAgIHRoaXMudGltZXJVcGRhdGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnVwZGF0ZVZpcnR1YWxTY3JvbGwoKTsgfSwgMTAwKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnVwZGF0ZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2hvdWxkRW5hYmxlID0gISEodGhpcy5zY3JvbGxFbCAmJlxuICAgICAgICAgICAgdGhpcy5jZWxscyk7XG4gICAgICAgIGlmIChzaG91bGRFbmFibGUgIT09IHRoaXMuaXNFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZVNjcm9sbEV2ZW50cyhzaG91bGRFbmFibGUpO1xuICAgICAgICAgICAgaWYgKHNob3VsZEVuYWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmlydHVhbFNjcm9sbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jYWxjQ2VsbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pdGVtcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdEl0ZW1MZW4gPSB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICAgICAgdGhpcy5jZWxscyA9IGNhbGNDZWxscyh0aGlzLml0ZW1zLCB0aGlzLml0ZW1IZWlnaHQsIHRoaXMuaGVhZGVySGVpZ2h0LCB0aGlzLmZvb3RlckhlaWdodCwgdGhpcy5oZWFkZXJGbiwgdGhpcy5mb290ZXJGbiwgdGhpcy5hcHByb3hIZWFkZXJIZWlnaHQsIHRoaXMuYXBwcm94Rm9vdGVySGVpZ2h0LCB0aGlzLmFwcHJveEl0ZW1IZWlnaHQsIDAsIDAsIHRoaXMubGFzdEl0ZW1MZW4pO1xuICAgICAgICB0aGlzLmluZGV4RGlydHkgPSAwO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZ2V0SGVpZ2h0SW5kZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmluZGV4RGlydHkgIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICB0aGlzLmNhbGNIZWlnaHRJbmRleCh0aGlzLmluZGV4RGlydHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmhlaWdodEluZGV4O1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY2FsY0hlaWdodEluZGV4ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7IGluZGV4ID0gMDsgfVxuICAgICAgICAvLyBUT0RPOiBvcHRpbWl6ZSwgd2UgZG9uJ3QgbmVlZCB0byBjYWxjdWxhdGUgYWxsIHRoZSBjZWxsc1xuICAgICAgICB0aGlzLmhlaWdodEluZGV4ID0gcmVzaXplQnVmZmVyKHRoaXMuaGVpZ2h0SW5kZXgsIHRoaXMuY2VsbHMubGVuZ3RoKTtcbiAgICAgICAgdGhpcy50b3RhbEhlaWdodCA9IGNhbGNIZWlnaHRJbmRleCh0aGlzLmhlaWdodEluZGV4LCB0aGlzLmNlbGxzLCBpbmRleCk7XG4gICAgICAgIHRoaXMuaW5kZXhEaXJ0eSA9IEluZmluaXR5O1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZW5hYmxlU2Nyb2xsRXZlbnRzID0gZnVuY3Rpb24gKHNob3VsZExpc3Rlbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5ybUV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJtRXZlbnQoKTtcbiAgICAgICAgICAgIHRoaXMucm1FdmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2Nyb2xsRWwgPSB0aGlzLnNjcm9sbEVsO1xuICAgICAgICBpZiAoc2Nyb2xsRWwpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFbmFibGVkID0gc2hvdWxkTGlzdGVuO1xuICAgICAgICAgICAgc2Nyb2xsRWwuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCk7XG4gICAgICAgICAgICB0aGlzLnJtRXZlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgX3RoaXMub25TY3JvbGwpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUucmVuZGVyVmlydHVhbE5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgX2EgPSBub2RlLmNlbGwsIHR5cGUgPSBfYS50eXBlLCB2YWx1ZSA9IF9hLnZhbHVlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQ0VMTF9UWVBFX0lURU06IHJldHVybiB0aGlzLnJlbmRlckl0ZW0odmFsdWUsIGluZGV4KTtcbiAgICAgICAgICAgIGNhc2UgQ0VMTF9UWVBFX0hFQURFUjogcmV0dXJuIHRoaXMucmVuZGVySGVhZGVyKHZhbHVlLCBpbmRleCk7XG4gICAgICAgICAgICBjYXNlIENFTExfVFlQRV9GT09URVI6IHJldHVybiB0aGlzLnJlbmRlckZvb3Rlcih2YWx1ZSwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnRvdGFsSGVpZ2h0ICsgXCJweFwiXG4gICAgICAgICAgICB9IH0sIHRoaXMucmVuZGVySXRlbSAmJiAoaChWaXJ0dWFsUHJveHksIHsgZG9tOiB0aGlzLnZpcnR1YWxEb20gfSwgdGhpcy52aXJ0dWFsRG9tLm1hcChmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gX3RoaXMucmVuZGVyVmlydHVhbE5vZGUobm9kZSk7IH0pKSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEsIFwid2F0Y2hlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJpdGVtSGVpZ2h0XCI6IFtcIml0ZW1zQ2hhbmdlZFwiXSxcbiAgICAgICAgICAgICAgICBcImhlYWRlckhlaWdodFwiOiBbXCJpdGVtc0NoYW5nZWRcIl0sXG4gICAgICAgICAgICAgICAgXCJmb290ZXJIZWlnaHRcIjogW1wiaXRlbXNDaGFuZ2VkXCJdLFxuICAgICAgICAgICAgICAgIFwiaXRlbXNcIjogW1wiaXRlbXNDaGFuZ2VkXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJpb24tdmlydHVhbC1zY3JvbGx7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2NvbnRhaW46c3RyaWN0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX1pb24tdmlydHVhbC1zY3JvbGw+LnZpcnR1YWwtbG9hZGluZ3tvcGFjaXR5OjB9aW9uLXZpcnR1YWwtc2Nyb2xsPi52aXJ0dWFsLWl0ZW17cG9zaXRpb246YWJzb2x1dGUhaW1wb3J0YW50O3RvcDowIWltcG9ydGFudDtyaWdodDowIWltcG9ydGFudDtsZWZ0OjAhaW1wb3J0YW50Oy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjowbXM7dHJhbnNpdGlvbi1kdXJhdGlvbjowbXM7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NfMTtcbn0oKSk7XG52YXIgVmlydHVhbFByb3h5ID0gZnVuY3Rpb24gKF9hLCBjaGlsZHJlbiwgdXRpbHMpIHtcbiAgICB2YXIgZG9tID0gX2EuZG9tO1xuICAgIHJldHVybiB1dGlscy5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgICB2YXIgbm9kZSA9IGRvbVtpXTtcbiAgICAgICAgdmFyIHZhdHRycyA9IGNoaWxkLnZhdHRycyB8fCB7fTtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSB2YXR0cnMuY2xhc3MgfHwgJyc7XG4gICAgICAgIGNsYXNzZXMgKz0gJ3ZpcnR1YWwtaXRlbSAnO1xuICAgICAgICBpZiAoIW5vZGUudmlzaWJsZSkge1xuICAgICAgICAgICAgY2xhc3NlcyArPSAndmlydHVhbC1sb2FkaW5nJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjaGlsZCksIHsgdmF0dHJzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHZhdHRycyksIHsgY2xhc3M6IGNsYXNzZXMsIHN0eWxlOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHZhdHRycy5zdHlsZSksIHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKDAsXCIgKyBub2RlLnRvcCArIFwicHgsMClcIiB9KSB9KSB9KTtcbiAgICB9KTtcbn07XG5leHBvcnQgeyBWaXJ0dWFsU2Nyb2xsIGFzIGlvbl92aXJ0dWFsX3Njcm9sbCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==