(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-item-option_3-md.entry.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-item-option_3-md.entry.js ***!
  \*****************************************************************************/
/*! exports provided: ion_item_option, ion_item_options, ion_item_sliding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_item_option", function() { return ItemOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_item_options", function() { return ItemOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_item_sliding", function() { return ItemSliding; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");





var ItemOption = /** @class */ (function () {
    function ItemOption(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        /**
         * If `true`, the user cannot interact with the item option.
         */
        this.disabled = false;
        /**
         * If `true`, the option will expand to take up the available width and cover any other options.
         */
        this.expandable = false;
        /**
         * The type of the button.
         */
        this.type = 'button';
        this.onClick = function (ev) {
            var el = ev.target.closest('ion-item-option');
            if (el) {
                ev.preventDefault();
            }
        };
    }
    ItemOption.prototype.render = function () {
        var _a;
        var _b = this, disabled = _b.disabled, expandable = _b.expandable, href = _b.href;
        var TagType = href === undefined ? 'button' : 'a';
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var attrs = (TagType === 'button')
            ? { type: this.type }
            : {
                download: this.download,
                href: this.href,
                target: this.target
            };
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onClick: this.onClick, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this.color)), (_a = {}, _a[mode] = true, _a['item-option-disabled'] = disabled, _a['item-option-expandable'] = expandable, _a['ion-activatable'] = true, _a)) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(TagType, Object.assign({}, attrs, { class: "button-native", disabled: disabled }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { class: "button-inner" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", { name: "top" }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "horizontal-wrapper" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", { name: "start" }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", { name: "icon-only" }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", { name: "end" })), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", { name: "bottom" })), mode === 'md' && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-ripple-effect", null))));
    };
    Object.defineProperty(ItemOption.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemOption, "style", {
        get: function () { return ":host{--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:.7em;padding-right:.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:.7em;padding-inline-start:.7em;-webkit-padding-end:.7em;padding-inline-end:.7em}}.button-inner{-ms-flex-flow:column nowrap;flex-flow:column nowrap;height:100%}.button-inner,.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}.horizontal-wrapper{-ms-flex-flow:row nowrap;flex-flow:row nowrap}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:.9em;font-size:1.8em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(.65,.05,.36,1);transition-timing-function:cubic-bezier(.65,.05,.36,1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:.5;pointer-events:none}:host{font-size:14px;font-weight:500;text-transform:uppercase}"; },
        enumerable: true,
        configurable: true
    });
    return ItemOption;
}());
var ItemOptions = /** @class */ (function () {
    function class_1(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        /**
         * The side the option button should be on. Possible values: `"start"` and `"end"`. If you have multiple `ion-item-options`, a side must be provided for each.
         *
         */
        this.side = 'end';
        this.ionSwipe = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionSwipe", 7);
    }
    /** @internal */
    class_1.prototype.fireSwipeEvent = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.ionSwipe.emit({
                    side: this.side
                });
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var isEnd = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["i"])(this.side);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: (_a = {},
                _a[mode] = true,
                // Used internally for styling
                _a["item-options-" + mode] = true,
                _a['item-options-start'] = !isEnd,
                _a['item-options-end'] = isEnd,
                _a) }));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options,[dir=rtl] ion-item-options{-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end),[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start,[dir=rtl] .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start),.item-sliding-active-slide.item-sliding-active-options-start .item-options-start{width:100%;visibility:visible}.item-options-md{border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))))}.item-options-md,.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var SWIPE_MARGIN = 30;
var ELASTIC_FACTOR = 0.55;
var openSlidingItem;
var ItemSliding = /** @class */ (function () {
    function class_2(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.item = null;
        this.openAmount = 0;
        this.initialOpenAmount = 0;
        this.optsWidthRightSide = 0;
        this.optsWidthLeftSide = 0;
        this.sides = 0 /* None */;
        this.optsDirty = true;
        this.state = 2 /* Disabled */;
        /**
         * If `true`, the user cannot interact with the sliding item.
         */
        this.disabled = false;
        this.ionDrag = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionDrag", 7);
    }
    class_2.prototype.disabledChanged = function () {
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    };
    class_2.prototype.connectedCallback = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.item = this.el.querySelector('ion-item');
                        return [4 /*yield*/, this.updateOptions()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "./node_modules/@ionic/core/dist/esm-es5/index-624eea58.js"))];
                    case 2:
                        _a.gesture = (_b.sent()).createGesture({
                            el: this.el,
                            gestureName: 'item-swipe',
                            gesturePriority: 100,
                            threshold: 5,
                            canStart: function () { return _this.canStart(); },
                            onStart: function () { return _this.onStart(); },
                            onMove: function (ev) { return _this.onMove(ev); },
                            onEnd: function (ev) { return _this.onEnd(ev); },
                        });
                        this.disabledChanged();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.disconnectedCallback = function () {
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
        this.item = null;
        this.leftOptions = this.rightOptions = undefined;
        if (openSlidingItem === this.el) {
            openSlidingItem = undefined;
        }
    };
    /**
     * Get the amount the item is open in pixels.
     */
    class_2.prototype.getOpenAmount = function () {
        return Promise.resolve(this.openAmount);
    };
    /**
     * Get the ratio of the open amount of the item compared to the width of the options.
     * If the number returned is positive, then the options on the right side are open.
     * If the number returned is negative, then the options on the left side are open.
     * If the absolute value of the number is greater than 1, the item is open more than
     * the width of the options.
     */
    class_2.prototype.getSlidingRatio = function () {
        return Promise.resolve(this.getSlidingRatioSync());
    };
    /**
     * Open the sliding item.
     *
     * @param side The side of the options to open. If a side is not provided, it will open the first set of options it finds within the item.
     */
    class_2.prototype.open = function (side) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var optionsToOpen, isStartOpen, isEndOpen;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.item === null) {
                    return [2 /*return*/];
                }
                optionsToOpen = this.getOptions(side);
                if (!optionsToOpen) {
                    return [2 /*return*/];
                }
                /**
                 * If side is not set, we need to infer the side
                 * so we know which direction to move the options
                 */
                if (side === undefined) {
                    side = (optionsToOpen === this.leftOptions) ? 'start' : 'end';
                }
                // In RTL we want to switch the sides
                side = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["i"])(side) ? 'end' : 'start';
                isStartOpen = this.openAmount < 0;
                isEndOpen = this.openAmount > 0;
                /**
                 * If a side is open and a user tries to
                 * re-open the same side, we should not do anything
                 */
                if (isStartOpen && optionsToOpen === this.leftOptions) {
                    return [2 /*return*/];
                }
                if (isEndOpen && optionsToOpen === this.rightOptions) {
                    return [2 /*return*/];
                }
                this.closeOpened();
                this.state = 4 /* Enabled */;
                requestAnimationFrame(function () {
                    _this.calculateOptsWidth();
                    var width = (side === 'end') ? _this.optsWidthRightSide : -_this.optsWidthLeftSide;
                    openSlidingItem = _this.el;
                    _this.setOpenAmount(width, false);
                    _this.state = (side === 'end') ? 8 /* End */ : 16 /* Start */;
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Close the sliding item. Items can also be closed from the [List](../../list/List).
     */
    class_2.prototype.close = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.setOpenAmount(0, true);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Close all of the sliding items in the list. Items can also be closed from the [List](../../list/List).
     */
    class_2.prototype.closeOpened = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (openSlidingItem !== undefined) {
                    openSlidingItem.close();
                    openSlidingItem = undefined;
                    return [2 /*return*/, true];
                }
                return [2 /*return*/, false];
            });
        });
    };
    /**
     * Given an optional side, return the ion-item-options element.
     *
     * @param side This side of the options to get. If a side is not provided it will
     * return the first one available.
     */
    class_2.prototype.getOptions = function (side) {
        if (side === undefined) {
            return this.leftOptions || this.rightOptions;
        }
        else if (side === 'start') {
            return this.leftOptions;
        }
        else {
            return this.rightOptions;
        }
    };
    class_2.prototype.updateOptions = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var options, sides, i, option, side;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = this.el.querySelectorAll('ion-item-options');
                        sides = 0;
                        // Reset left and right options in case they were removed
                        this.leftOptions = this.rightOptions = undefined;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < options.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, options.item(i).componentOnReady()];
                    case 2:
                        option = _a.sent();
                        side = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["i"])(option.side) ? 'end' : 'start';
                        if (side === 'start') {
                            this.leftOptions = option;
                            sides |= 1 /* Start */;
                        }
                        else {
                            this.rightOptions = option;
                            sides |= 2 /* End */;
                        }
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.optsDirty = true;
                        this.sides = sides;
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.canStart = function () {
        var selected = openSlidingItem;
        if (selected && selected !== this.el) {
            this.closeOpened();
            return false;
        }
        return !!(this.rightOptions || this.leftOptions);
    };
    class_2.prototype.onStart = function () {
        openSlidingItem = this.el;
        if (this.tmr !== undefined) {
            clearTimeout(this.tmr);
            this.tmr = undefined;
        }
        if (this.openAmount === 0) {
            this.optsDirty = true;
            this.state = 4 /* Enabled */;
        }
        this.initialOpenAmount = this.openAmount;
        if (this.item) {
            this.item.style.transition = 'none';
        }
    };
    class_2.prototype.onMove = function (gesture) {
        if (this.optsDirty) {
            this.calculateOptsWidth();
        }
        var openAmount = this.initialOpenAmount - gesture.deltaX;
        switch (this.sides) {
            case 2 /* End */:
                openAmount = Math.max(0, openAmount);
                break;
            case 1 /* Start */:
                openAmount = Math.min(0, openAmount);
                break;
            case 3 /* Both */: break;
            case 0 /* None */: return;
            default:
                console.warn('invalid ItemSideFlags value', this.sides);
                break;
        }
        var optsWidth;
        if (openAmount > this.optsWidthRightSide) {
            optsWidth = this.optsWidthRightSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }
        else if (openAmount < -this.optsWidthLeftSide) {
            optsWidth = -this.optsWidthLeftSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }
        this.setOpenAmount(openAmount, false);
    };
    class_2.prototype.onEnd = function (gesture) {
        var velocity = gesture.velocityX;
        var restingPoint = (this.openAmount > 0)
            ? this.optsWidthRightSide
            : -this.optsWidthLeftSide;
        // Check if the drag didn't clear the buttons mid-point
        // and we aren't moving fast enough to swipe open
        var isResetDirection = (this.openAmount > 0) === !(velocity < 0);
        var isMovingFast = Math.abs(velocity) > 0.3;
        var isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);
        if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
            restingPoint = 0;
        }
        var state = this.state;
        this.setOpenAmount(restingPoint, true);
        if ((state & 32 /* SwipeEnd */) !== 0 && this.rightOptions) {
            this.rightOptions.fireSwipeEvent();
        }
        else if ((state & 64 /* SwipeStart */) !== 0 && this.leftOptions) {
            this.leftOptions.fireSwipeEvent();
        }
    };
    class_2.prototype.calculateOptsWidth = function () {
        this.optsWidthRightSide = 0;
        if (this.rightOptions) {
            this.rightOptions.style.display = 'flex';
            this.optsWidthRightSide = this.rightOptions.offsetWidth;
            this.rightOptions.style.display = '';
        }
        this.optsWidthLeftSide = 0;
        if (this.leftOptions) {
            this.leftOptions.style.display = 'flex';
            this.optsWidthLeftSide = this.leftOptions.offsetWidth;
            this.leftOptions.style.display = '';
        }
        this.optsDirty = false;
    };
    class_2.prototype.setOpenAmount = function (openAmount, isFinal) {
        var _this = this;
        if (this.tmr !== undefined) {
            clearTimeout(this.tmr);
            this.tmr = undefined;
        }
        if (!this.item) {
            return;
        }
        var style = this.item.style;
        this.openAmount = openAmount;
        if (isFinal) {
            style.transition = '';
        }
        if (openAmount > 0) {
            this.state = (openAmount >= (this.optsWidthRightSide + SWIPE_MARGIN))
                ? 8 /* End */ | 32 /* SwipeEnd */
                : 8 /* End */;
        }
        else if (openAmount < 0) {
            this.state = (openAmount <= (-this.optsWidthLeftSide - SWIPE_MARGIN))
                ? 16 /* Start */ | 64 /* SwipeStart */
                : 16 /* Start */;
        }
        else {
            this.tmr = setTimeout(function () {
                _this.state = 2 /* Disabled */;
                _this.tmr = undefined;
            }, 600);
            openSlidingItem = undefined;
            style.transform = '';
            return;
        }
        style.transform = "translate3d(" + -openAmount + "px,0,0)";
        this.ionDrag.emit({
            amount: openAmount,
            ratio: this.getSlidingRatioSync()
        });
    };
    class_2.prototype.getSlidingRatioSync = function () {
        if (this.openAmount > 0) {
            return this.openAmount / this.optsWidthRightSide;
        }
        else if (this.openAmount < 0) {
            return this.openAmount / this.optsWidthLeftSide;
        }
        else {
            return 0;
        }
    };
    class_2.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: (_a = {},
                _a[mode] = true,
                _a['item-sliding-active-slide'] = (this.state !== 2 /* Disabled */),
                _a['item-sliding-active-options-end'] = (this.state & 8 /* End */) !== 0,
                _a['item-sliding-active-options-start'] = (this.state & 16 /* Start */) !== 0,
                _a['item-sliding-active-swipe-end'] = (this.state & 32 /* SwipeEnd */) !== 0,
                _a['item-sliding-active-swipe-start'] = (this.state & 64 /* SwipeStart */) !== 0,
                _a) }));
    };
    Object.defineProperty(class_2.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "watchers", {
        get: function () {
            return {
                "disabled": ["disabledChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "style", {
        get: function () { return "ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden}ion-item-sliding,ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1),-webkit-transform .5s cubic-bezier(.36,.66,.04,1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-left;transition-property:padding-left}:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable,[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-right;transition-property:padding-right}:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable,[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
var swipeShouldReset = function (isResetDirection, isMovingFast, isOnResetZone) {
    // The logic required to know when the sliding item should close (openAmount=0)
    // depends on three booleans (isResetDirection, isMovingFast, isOnResetZone)
    // and it ended up being too complicated to be written manually without errors
    // so the truth table is attached below: (0=false, 1=true)
    // isResetDirection | isMovingFast | isOnResetZone || shouldClose
    //         0        |       0      |       0       ||    0
    //         0        |       0      |       1       ||    1
    //         0        |       1      |       0       ||    0
    //         0        |       1      |       1       ||    0
    //         1        |       0      |       0       ||    0
    //         1        |       0      |       1       ||    1
    //         1        |       1      |       0       ||    1
    //         1        |       1      |       1       ||    1
    // The resulting expression was generated by resolving the K-map (Karnaugh map):
    return (!isMovingFast && isOnResetZone) || (isResetDirection && isMovingFast);
};



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1pdGVtLW9wdGlvbl8zLW1kLmVudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUM4RTtBQUMvRjtBQUN5QjtBQUNPO0FBQzlEO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFVO0FBQzdCO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLDZEQUE2RCxFQUFFLDREQUFrQix1QkFBdUIseUlBQXlJLEVBQUUsMkRBQUMsMEJBQTBCLFVBQVUsNkNBQTZDLEdBQUcsMkRBQUMsVUFBVSx3QkFBd0IsRUFBRSwyREFBQyxVQUFVLGNBQWMsR0FBRywyREFBQyxTQUFTLDhCQUE4QixFQUFFLDJEQUFDLFVBQVUsZ0JBQWdCLEdBQUcsMkRBQUMsVUFBVSxvQkFBb0IsR0FBRywyREFBQyxnQkFBZ0IsMkRBQUMsVUFBVSxjQUFjLElBQUksMkRBQUMsVUFBVSxpQkFBaUIscUJBQXFCLDJEQUFDO0FBQzVtQjtBQUNBO0FBQ0EsMEJBQTBCLFFBQVEsMkRBQVUsT0FBTyxFQUFFO0FBQ3JEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZUFBZSw4Q0FBOEMsK0NBQStDLDZCQUE2QixtQkFBbUIsMkNBQTJDLDRDQUE0Qyxz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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJHOzs7Ozs7Ozs7Ozs7O0FDcmYzRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0JBQWtCLEVBQUU7QUFDdEQsK0JBQStCLGlCQUFpQixFQUFFO0FBQ2xELGtDQUFrQyxpQkFBaUIsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHNCQUFzQixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxRQUFRLHVEQUFTO0FBQzlEO0FBQ0EsV0FBVyx5REFBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDa0YiLCJmaWxlIjoiNTcuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGdldElvbk1vZGUsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50LCBkIGFzIGNyZWF0ZUV2ZW50IH0gZnJvbSAnLi9jb3JlLWZlZWVmZjBkLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgaSBhcyBpc0VuZFNpZGUgfSBmcm9tICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcbnZhciBJdGVtT3B0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEl0ZW1PcHRpb24oaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgaXRlbSBvcHRpb24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBvcHRpb24gd2lsbCBleHBhbmQgdG8gdGFrZSB1cCB0aGUgYXZhaWxhYmxlIHdpZHRoIGFuZCBjb3ZlciBhbnkgb3RoZXIgb3B0aW9ucy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZXhwYW5kYWJsZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHR5cGUgb2YgdGhlIGJ1dHRvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHlwZSA9ICdidXR0b24nO1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBlbCA9IGV2LnRhcmdldC5jbG9zZXN0KCdpb24taXRlbS1vcHRpb24nKTtcbiAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIEl0ZW1PcHRpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLCBkaXNhYmxlZCA9IF9iLmRpc2FibGVkLCBleHBhbmRhYmxlID0gX2IuZXhwYW5kYWJsZSwgaHJlZiA9IF9iLmhyZWY7XG4gICAgICAgIHZhciBUYWdUeXBlID0gaHJlZiA9PT0gdW5kZWZpbmVkID8gJ2J1dHRvbicgOiAnYSc7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgdmFyIGF0dHJzID0gKFRhZ1R5cGUgPT09ICdidXR0b24nKVxuICAgICAgICAgICAgPyB7IHR5cGU6IHRoaXMudHlwZSB9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBkb3dubG9hZDogdGhpcy5kb3dubG9hZCxcbiAgICAgICAgICAgICAgICBocmVmOiB0aGlzLmhyZWYsXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLnRhcmdldFxuICAgICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5vbkNsaWNrLCBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvcikpLCAoX2EgPSB7fSwgX2FbbW9kZV0gPSB0cnVlLCBfYVsnaXRlbS1vcHRpb24tZGlzYWJsZWQnXSA9IGRpc2FibGVkLCBfYVsnaXRlbS1vcHRpb24tZXhwYW5kYWJsZSddID0gZXhwYW5kYWJsZSwgX2FbJ2lvbi1hY3RpdmF0YWJsZSddID0gdHJ1ZSwgX2EpKSB9LCBoKFRhZ1R5cGUsIE9iamVjdC5hc3NpZ24oe30sIGF0dHJzLCB7IGNsYXNzOiBcImJ1dHRvbi1uYXRpdmVcIiwgZGlzYWJsZWQ6IGRpc2FibGVkIH0pLCBoKFwic3BhblwiLCB7IGNsYXNzOiBcImJ1dHRvbi1pbm5lclwiIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogXCJ0b3BcIiB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImhvcml6b250YWwtd3JhcHBlclwiIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogXCJzdGFydFwiIH0pLCBoKFwic2xvdFwiLCB7IG5hbWU6IFwiaWNvbi1vbmx5XCIgfSksIGgoXCJzbG90XCIsIG51bGwpLCBoKFwic2xvdFwiLCB7IG5hbWU6IFwiZW5kXCIgfSkpLCBoKFwic2xvdFwiLCB7IG5hbWU6IFwiYm90dG9tXCIgfSkpLCBtb2RlID09PSAnbWQnICYmIGgoXCJpb24tcmlwcGxlLWVmZmVjdFwiLCBudWxsKSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShJdGVtT3B0aW9uLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEl0ZW1PcHRpb24sIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiOmhvc3R7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpOy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsI2ZmZik7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpfTpob3N0KC5pbi1saXN0Lml0ZW0tb3B0aW9ucy1lbmQ6bGFzdC1jaGlsZCl7cGFkZGluZy1yaWdodDpjYWxjKC43ZW0gKyB2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSl9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0KC5pbi1saXN0Lml0ZW0tb3B0aW9ucy1lbmQ6bGFzdC1jaGlsZCl7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctZW5kOmNhbGMoLjdlbSArIHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpKTtwYWRkaW5nLWlubGluZS1lbmQ6Y2FsYyguN2VtICsgdmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkpfX06aG9zdCguaW4tbGlzdC5pdGVtLW9wdGlvbnMtc3RhcnQ6Zmlyc3QtY2hpbGQpe3BhZGRpbmctbGVmdDpjYWxjKC43ZW0gKyB2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpKX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3QoLmluLWxpc3QuaXRlbS1vcHRpb25zLXN0YXJ0OmZpcnN0LWNoaWxkKXtwYWRkaW5nLWxlZnQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OmNhbGMoLjdlbSArIHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkpO3BhZGRpbmctaW5saW5lLXN0YXJ0OmNhbGMoLjdlbSArIHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkpfX06aG9zdCguaW9uLWNvbG9yKXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfS5idXR0b24tbmF0aXZle2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0O3BhZGRpbmctbGVmdDouN2VtO3BhZGRpbmctcmlnaHQ6LjdlbTtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3JkZXI6MDtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYnV0dG9uLW5hdGl2ZXtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6LjdlbTtwYWRkaW5nLWlubGluZS1zdGFydDouN2VtOy13ZWJraXQtcGFkZGluZy1lbmQ6LjdlbTtwYWRkaW5nLWlubGluZS1lbmQ6LjdlbX19LmJ1dHRvbi1pbm5lcnstbXMtZmxleC1mbG93OmNvbHVtbiBub3dyYXA7ZmxleC1mbG93OmNvbHVtbiBub3dyYXA7aGVpZ2h0OjEwMCV9LmJ1dHRvbi1pbm5lciwuaG9yaXpvbnRhbC13cmFwcGVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJX0uaG9yaXpvbnRhbC13cmFwcGVyey1tcy1mbGV4LWZsb3c6cm93IG5vd3JhcDtmbGV4LWZsb3c6cm93IG5vd3JhcH06OnNsb3R0ZWQoKil7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowfTo6c2xvdHRlZChbc2xvdD1zdGFydF0pe21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjVweDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6OnNsb3R0ZWQoW3Nsb3Q9c3RhcnRdKXttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjA7LXdlYmtpdC1tYXJnaW4tZW5kOjVweDttYXJnaW4taW5saW5lLWVuZDo1cHh9fTo6c2xvdHRlZChbc2xvdD1lbmRdKXttYXJnaW4tbGVmdDo1cHg7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7OjpzbG90dGVkKFtzbG90PWVuZF0pe21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDo1cHg7bWFyZ2luLWlubGluZS1zdGFydDo1cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjA7bWFyZ2luLWlubGluZS1lbmQ6MH19OjpzbG90dGVkKFtzbG90PWljb24tb25seV0pe3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7bWFyZ2luLWxlZnQ6MTBweDttYXJnaW4tcmlnaHQ6MTBweDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO21pbi13aWR0aDouOWVtO2ZvbnQtc2l6ZToxLjhlbX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7OjpzbG90dGVkKFtzbG90PWljb24tb25seV0pe21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDoxMHB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MTBweDstd2Via2l0LW1hcmdpbi1lbmQ6MTBweDttYXJnaW4taW5saW5lLWVuZDoxMHB4fX06aG9zdCguaXRlbS1vcHRpb24tZXhwYW5kYWJsZSl7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjowO3RyYW5zaXRpb24tZHVyYXRpb246MDstd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6bm9uZTt0cmFuc2l0aW9uLXByb3BlcnR5Om5vbmU7LXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjY1LC4wNSwuMzYsMSk7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC42NSwuMDUsLjM2LDEpfTpob3N0KC5pdGVtLW9wdGlvbi1kaXNhYmxlZCl7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCguaXRlbS1vcHRpb24tZGlzYWJsZWQpIC5idXR0b24tbmF0aXZle2N1cnNvcjpkZWZhdWx0O29wYWNpdHk6LjU7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDA7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gSXRlbU9wdGlvbjtcbn0oKSk7XG52YXIgSXRlbU9wdGlvbnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMShob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2lkZSB0aGUgb3B0aW9uIGJ1dHRvbiBzaG91bGQgYmUgb24uIFBvc3NpYmxlIHZhbHVlczogYFwic3RhcnRcImAgYW5kIGBcImVuZFwiYC4gSWYgeW91IGhhdmUgbXVsdGlwbGUgYGlvbi1pdGVtLW9wdGlvbnNgLCBhIHNpZGUgbXVzdCBiZSBwcm92aWRlZCBmb3IgZWFjaC5cbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2lkZSA9ICdlbmQnO1xuICAgICAgICB0aGlzLmlvblN3aXBlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Td2lwZVwiLCA3KTtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmZpcmVTd2lwZUV2ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pb25Td2lwZS5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgc2lkZTogdGhpcy5zaWRlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgdmFyIGlzRW5kID0gaXNFbmRTaWRlKHRoaXMuc2lkZSk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVttb2RlXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gVXNlZCBpbnRlcm5hbGx5IGZvciBzdHlsaW5nXG4gICAgICAgICAgICAgICAgX2FbXCJpdGVtLW9wdGlvbnMtXCIgKyBtb2RlXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2FbJ2l0ZW0tb3B0aW9ucy1zdGFydCddID0gIWlzRW5kLFxuICAgICAgICAgICAgICAgIF9hWydpdGVtLW9wdGlvbnMtZW5kJ10gPSBpc0VuZCxcbiAgICAgICAgICAgICAgICBfYSkgfSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJpb24taXRlbS1vcHRpb25ze3RvcDowO3JpZ2h0OjA7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTtmb250LXNpemU6MTRweDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoxfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBpb24taXRlbS1vcHRpb25zLFtkaXI9cnRsXSBpb24taXRlbS1vcHRpb25zey1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIGlvbi1pdGVtLW9wdGlvbnM6bm90KC5pdGVtLW9wdGlvbnMtZW5kKSxbZGlyPXJ0bF0gaW9uLWl0ZW0tb3B0aW9uczpub3QoLml0ZW0tb3B0aW9ucy1lbmQpe3JpZ2h0OmF1dG87bGVmdDowOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uaXRlbS1vcHRpb25zLXN0YXJ0e3JpZ2h0OmF1dG87bGVmdDowOy1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pdGVtLW9wdGlvbnMtc3RhcnQsW2Rpcj1ydGxdIC5pdGVtLW9wdGlvbnMtc3RhcnR7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5pdGVtLW9wdGlvbnMtc3RhcnQgaW9uLWl0ZW0tb3B0aW9uOmZpcnN0LWNoaWxke3BhZGRpbmctcmlnaHQ6dmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Lml0ZW0tb3B0aW9ucy1zdGFydCBpb24taXRlbS1vcHRpb246Zmlyc3QtY2hpbGR7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCl9fS5pdGVtLW9wdGlvbnMtZW5kIGlvbi1pdGVtLW9wdGlvbjpsYXN0LWNoaWxke3BhZGRpbmctcmlnaHQ6dmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCl9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5pdGVtLW9wdGlvbnMtZW5kIGlvbi1pdGVtLW9wdGlvbjpsYXN0LWNoaWxke3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCl9fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zbGlkZS5pdGVtLXNsaWRpbmctYWN0aXZlLW9wdGlvbnMtc3RhcnQgaW9uLWl0ZW0tb3B0aW9uczpub3QoLml0ZW0tb3B0aW9ucy1lbmQpLFtkaXI9cnRsXSAuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zbGlkZS5pdGVtLXNsaWRpbmctYWN0aXZlLW9wdGlvbnMtc3RhcnQgaW9uLWl0ZW0tb3B0aW9uczpub3QoLml0ZW0tb3B0aW9ucy1lbmQpe3dpZHRoOjEwMCU7dmlzaWJpbGl0eTp2aXNpYmxlfS5pdGVtLXNsaWRpbmctYWN0aXZlLXNsaWRlIGlvbi1pdGVtLW9wdGlvbnN7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7dmlzaWJpbGl0eTpoaWRkZW59Lml0ZW0tc2xpZGluZy1hY3RpdmUtc2xpZGUuaXRlbS1zbGlkaW5nLWFjdGl2ZS1vcHRpb25zLWVuZCBpb24taXRlbS1vcHRpb25zOm5vdCguaXRlbS1vcHRpb25zLXN0YXJ0KSwuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zbGlkZS5pdGVtLXNsaWRpbmctYWN0aXZlLW9wdGlvbnMtc3RhcnQgLml0ZW0tb3B0aW9ucy1zdGFydHt3aWR0aDoxMDAlO3Zpc2liaWxpdHk6dmlzaWJsZX0uaXRlbS1vcHRpb25zLW1ke2JvcmRlci1ib3R0b20tc3R5bGU6c29saWQ7Ym9yZGVyLWJvdHRvbS1jb2xvcjp2YXIoLS1pb24taXRlbS1ib3JkZXItY29sb3IsdmFyKC0taW9uLWJvcmRlci1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAscmdiYSgwLDAsMCwuMTMpKSkpfS5pdGVtLW9wdGlvbnMtbWQsLmxpc3QtbWQtbGluZXMtbm9uZSAuaXRlbS1vcHRpb25zLW1ke2JvcmRlci1ib3R0b20td2lkdGg6MH0ubGlzdC1tZC1saW5lcy1mdWxsIC5pdGVtLW9wdGlvbnMtbWQsLmxpc3QtbWQtbGluZXMtaW5zZXQgLml0ZW0tb3B0aW9ucy1tZC5pdGVtLW9wdGlvbnMtZW5ke2JvcmRlci1ib3R0b20td2lkdGg6MXB4fVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NfMTtcbn0oKSk7XG52YXIgU1dJUEVfTUFSR0lOID0gMzA7XG52YXIgRUxBU1RJQ19GQUNUT1IgPSAwLjU1O1xudmFyIG9wZW5TbGlkaW5nSXRlbTtcbnZhciBJdGVtU2xpZGluZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18yKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5pdGVtID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcGVuQW1vdW50ID0gMDtcbiAgICAgICAgdGhpcy5pbml0aWFsT3BlbkFtb3VudCA9IDA7XG4gICAgICAgIHRoaXMub3B0c1dpZHRoUmlnaHRTaWRlID0gMDtcbiAgICAgICAgdGhpcy5vcHRzV2lkdGhMZWZ0U2lkZSA9IDA7XG4gICAgICAgIHRoaXMuc2lkZXMgPSAwIC8qIE5vbmUgKi87XG4gICAgICAgIHRoaXMub3B0c0RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDIgLyogRGlzYWJsZWQgKi87XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBzbGlkaW5nIGl0ZW0uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW9uRHJhZyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uRHJhZ1wiLCA3KTtcbiAgICB9XG4gICAgY2xhc3NfMi5wcm90b3R5cGUuZGlzYWJsZWRDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuc2V0RGlzYWJsZWQodGhpcy5kaXNhYmxlZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzIucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpb24taXRlbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy51cGRhdGVPcHRpb25zKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbXBvcnQoJy4vaW5kZXgtNjI0ZWVhNTguanMnKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmdlc3R1cmUgPSAoX2Iuc2VudCgpKS5jcmVhdGVHZXN0dXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbDogdGhpcy5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXN0dXJlTmFtZTogJ2l0ZW0tc3dpcGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlc3R1cmVQcmlvcml0eTogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5TdGFydDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuY2FuU3RhcnQoKTsgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN0YXJ0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5vblN0YXJ0KCk7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLm9uTW92ZShldik7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FbmQ6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMub25FbmQoZXYpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkQ2hhbmdlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzIucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5nZXN0dXJlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbSA9IG51bGw7XG4gICAgICAgIHRoaXMubGVmdE9wdGlvbnMgPSB0aGlzLnJpZ2h0T3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKG9wZW5TbGlkaW5nSXRlbSA9PT0gdGhpcy5lbCkge1xuICAgICAgICAgICAgb3BlblNsaWRpbmdJdGVtID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGFtb3VudCB0aGUgaXRlbSBpcyBvcGVuIGluIHBpeGVscy5cbiAgICAgKi9cbiAgICBjbGFzc18yLnByb3RvdHlwZS5nZXRPcGVuQW1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMub3BlbkFtb3VudCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHJhdGlvIG9mIHRoZSBvcGVuIGFtb3VudCBvZiB0aGUgaXRlbSBjb21wYXJlZCB0byB0aGUgd2lkdGggb2YgdGhlIG9wdGlvbnMuXG4gICAgICogSWYgdGhlIG51bWJlciByZXR1cm5lZCBpcyBwb3NpdGl2ZSwgdGhlbiB0aGUgb3B0aW9ucyBvbiB0aGUgcmlnaHQgc2lkZSBhcmUgb3Blbi5cbiAgICAgKiBJZiB0aGUgbnVtYmVyIHJldHVybmVkIGlzIG5lZ2F0aXZlLCB0aGVuIHRoZSBvcHRpb25zIG9uIHRoZSBsZWZ0IHNpZGUgYXJlIG9wZW4uXG4gICAgICogSWYgdGhlIGFic29sdXRlIHZhbHVlIG9mIHRoZSBudW1iZXIgaXMgZ3JlYXRlciB0aGFuIDEsIHRoZSBpdGVtIGlzIG9wZW4gbW9yZSB0aGFuXG4gICAgICogdGhlIHdpZHRoIG9mIHRoZSBvcHRpb25zLlxuICAgICAqL1xuICAgIGNsYXNzXzIucHJvdG90eXBlLmdldFNsaWRpbmdSYXRpbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmdldFNsaWRpbmdSYXRpb1N5bmMoKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBPcGVuIHRoZSBzbGlkaW5nIGl0ZW0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2lkZSBUaGUgc2lkZSBvZiB0aGUgb3B0aW9ucyB0byBvcGVuLiBJZiBhIHNpZGUgaXMgbm90IHByb3ZpZGVkLCBpdCB3aWxsIG9wZW4gdGhlIGZpcnN0IHNldCBvZiBvcHRpb25zIGl0IGZpbmRzIHdpdGhpbiB0aGUgaXRlbS5cbiAgICAgKi9cbiAgICBjbGFzc18yLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9wdGlvbnNUb09wZW4sIGlzU3RhcnRPcGVuLCBpc0VuZE9wZW47XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zVG9PcGVuID0gdGhpcy5nZXRPcHRpb25zKHNpZGUpO1xuICAgICAgICAgICAgICAgIGlmICghb3B0aW9uc1RvT3Blbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIElmIHNpZGUgaXMgbm90IHNldCwgd2UgbmVlZCB0byBpbmZlciB0aGUgc2lkZVxuICAgICAgICAgICAgICAgICAqIHNvIHdlIGtub3cgd2hpY2ggZGlyZWN0aW9uIHRvIG1vdmUgdGhlIG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpZiAoc2lkZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpZGUgPSAob3B0aW9uc1RvT3BlbiA9PT0gdGhpcy5sZWZ0T3B0aW9ucykgPyAnc3RhcnQnIDogJ2VuZCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEluIFJUTCB3ZSB3YW50IHRvIHN3aXRjaCB0aGUgc2lkZXNcbiAgICAgICAgICAgICAgICBzaWRlID0gaXNFbmRTaWRlKHNpZGUpID8gJ2VuZCcgOiAnc3RhcnQnO1xuICAgICAgICAgICAgICAgIGlzU3RhcnRPcGVuID0gdGhpcy5vcGVuQW1vdW50IDwgMDtcbiAgICAgICAgICAgICAgICBpc0VuZE9wZW4gPSB0aGlzLm9wZW5BbW91bnQgPiAwO1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIElmIGEgc2lkZSBpcyBvcGVuIGFuZCBhIHVzZXIgdHJpZXMgdG9cbiAgICAgICAgICAgICAgICAgKiByZS1vcGVuIHRoZSBzYW1lIHNpZGUsIHdlIHNob3VsZCBub3QgZG8gYW55dGhpbmdcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpZiAoaXNTdGFydE9wZW4gJiYgb3B0aW9uc1RvT3BlbiA9PT0gdGhpcy5sZWZ0T3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc0VuZE9wZW4gJiYgb3B0aW9uc1RvT3BlbiA9PT0gdGhpcy5yaWdodE9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlT3BlbmVkKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IDQgLyogRW5hYmxlZCAqLztcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jYWxjdWxhdGVPcHRzV2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gKHNpZGUgPT09ICdlbmQnKSA/IF90aGlzLm9wdHNXaWR0aFJpZ2h0U2lkZSA6IC1fdGhpcy5vcHRzV2lkdGhMZWZ0U2lkZTtcbiAgICAgICAgICAgICAgICAgICAgb3BlblNsaWRpbmdJdGVtID0gX3RoaXMuZWw7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldE9wZW5BbW91bnQod2lkdGgsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3RhdGUgPSAoc2lkZSA9PT0gJ2VuZCcpID8gOCAvKiBFbmQgKi8gOiAxNiAvKiBTdGFydCAqLztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbG9zZSB0aGUgc2xpZGluZyBpdGVtLiBJdGVtcyBjYW4gYWxzbyBiZSBjbG9zZWQgZnJvbSB0aGUgW0xpc3RdKC4uLy4uL2xpc3QvTGlzdCkuXG4gICAgICovXG4gICAgY2xhc3NfMi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldE9wZW5BbW91bnQoMCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xvc2UgYWxsIG9mIHRoZSBzbGlkaW5nIGl0ZW1zIGluIHRoZSBsaXN0LiBJdGVtcyBjYW4gYWxzbyBiZSBjbG9zZWQgZnJvbSB0aGUgW0xpc3RdKC4uLy4uL2xpc3QvTGlzdCkuXG4gICAgICovXG4gICAgY2xhc3NfMi5wcm90b3R5cGUuY2xvc2VPcGVuZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBpZiAob3BlblNsaWRpbmdJdGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlblNsaWRpbmdJdGVtLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5TbGlkaW5nSXRlbSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRydWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2l2ZW4gYW4gb3B0aW9uYWwgc2lkZSwgcmV0dXJuIHRoZSBpb24taXRlbS1vcHRpb25zIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2lkZSBUaGlzIHNpZGUgb2YgdGhlIG9wdGlvbnMgdG8gZ2V0LiBJZiBhIHNpZGUgaXMgbm90IHByb3ZpZGVkIGl0IHdpbGxcbiAgICAgKiByZXR1cm4gdGhlIGZpcnN0IG9uZSBhdmFpbGFibGUuXG4gICAgICovXG4gICAgY2xhc3NfMi5wcm90b3R5cGUuZ2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICAgIGlmIChzaWRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxlZnRPcHRpb25zIHx8IHRoaXMucmlnaHRPcHRpb25zO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNpZGUgPT09ICdzdGFydCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxlZnRPcHRpb25zO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmlnaHRPcHRpb25zO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18yLnByb3RvdHlwZS51cGRhdGVPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucywgc2lkZXMsIGksIG9wdGlvbiwgc2lkZTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1pdGVtLW9wdGlvbnMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGVzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IGxlZnQgYW5kIHJpZ2h0IG9wdGlvbnMgaW4gY2FzZSB0aGV5IHdlcmUgcmVtb3ZlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0T3B0aW9ucyA9IHRoaXMucmlnaHRPcHRpb25zID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGkgPCBvcHRpb25zLmxlbmd0aCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgb3B0aW9ucy5pdGVtKGkpLmNvbXBvbmVudE9uUmVhZHkoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGUgPSBpc0VuZFNpZGUob3B0aW9uLnNpZGUpID8gJ2VuZCcgOiAnc3RhcnQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpZGUgPT09ICdzdGFydCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRPcHRpb25zID0gb3B0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGVzIHw9IDEgLyogU3RhcnQgKi87XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0T3B0aW9ucyA9IG9wdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlcyB8PSAyIC8qIEVuZCAqLztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0c0RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2lkZXMgPSBzaWRlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18yLnByb3RvdHlwZS5jYW5TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkID0gb3BlblNsaWRpbmdJdGVtO1xuICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQgIT09IHRoaXMuZWwpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VPcGVuZWQoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gISEodGhpcy5yaWdodE9wdGlvbnMgfHwgdGhpcy5sZWZ0T3B0aW9ucyk7XG4gICAgfTtcbiAgICBjbGFzc18yLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBvcGVuU2xpZGluZ0l0ZW0gPSB0aGlzLmVsO1xuICAgICAgICBpZiAodGhpcy50bXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG1yKTtcbiAgICAgICAgICAgIHRoaXMudG1yID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wZW5BbW91bnQgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMub3B0c0RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSA0IC8qIEVuYWJsZWQgKi87XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsT3BlbkFtb3VudCA9IHRoaXMub3BlbkFtb3VudDtcbiAgICAgICAgaWYgKHRoaXMuaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzIucHJvdG90eXBlLm9uTW92ZSA9IGZ1bmN0aW9uIChnZXN0dXJlKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdHNEaXJ0eSkge1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVPcHRzV2lkdGgoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbkFtb3VudCA9IHRoaXMuaW5pdGlhbE9wZW5BbW91bnQgLSBnZXN0dXJlLmRlbHRhWDtcbiAgICAgICAgc3dpdGNoICh0aGlzLnNpZGVzKSB7XG4gICAgICAgICAgICBjYXNlIDIgLyogRW5kICovOlxuICAgICAgICAgICAgICAgIG9wZW5BbW91bnQgPSBNYXRoLm1heCgwLCBvcGVuQW1vdW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMSAvKiBTdGFydCAqLzpcbiAgICAgICAgICAgICAgICBvcGVuQW1vdW50ID0gTWF0aC5taW4oMCwgb3BlbkFtb3VudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDMgLyogQm90aCAqLzogYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDAgLyogTm9uZSAqLzogcmV0dXJuO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2ludmFsaWQgSXRlbVNpZGVGbGFncyB2YWx1ZScsIHRoaXMuc2lkZXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcHRzV2lkdGg7XG4gICAgICAgIGlmIChvcGVuQW1vdW50ID4gdGhpcy5vcHRzV2lkdGhSaWdodFNpZGUpIHtcbiAgICAgICAgICAgIG9wdHNXaWR0aCA9IHRoaXMub3B0c1dpZHRoUmlnaHRTaWRlO1xuICAgICAgICAgICAgb3BlbkFtb3VudCA9IG9wdHNXaWR0aCArIChvcGVuQW1vdW50IC0gb3B0c1dpZHRoKSAqIEVMQVNUSUNfRkFDVE9SO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9wZW5BbW91bnQgPCAtdGhpcy5vcHRzV2lkdGhMZWZ0U2lkZSkge1xuICAgICAgICAgICAgb3B0c1dpZHRoID0gLXRoaXMub3B0c1dpZHRoTGVmdFNpZGU7XG4gICAgICAgICAgICBvcGVuQW1vdW50ID0gb3B0c1dpZHRoICsgKG9wZW5BbW91bnQgLSBvcHRzV2lkdGgpICogRUxBU1RJQ19GQUNUT1I7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRPcGVuQW1vdW50KG9wZW5BbW91bnQsIGZhbHNlKTtcbiAgICB9O1xuICAgIGNsYXNzXzIucHJvdG90eXBlLm9uRW5kID0gZnVuY3Rpb24gKGdlc3R1cmUpIHtcbiAgICAgICAgdmFyIHZlbG9jaXR5ID0gZ2VzdHVyZS52ZWxvY2l0eVg7XG4gICAgICAgIHZhciByZXN0aW5nUG9pbnQgPSAodGhpcy5vcGVuQW1vdW50ID4gMClcbiAgICAgICAgICAgID8gdGhpcy5vcHRzV2lkdGhSaWdodFNpZGVcbiAgICAgICAgICAgIDogLXRoaXMub3B0c1dpZHRoTGVmdFNpZGU7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBkcmFnIGRpZG4ndCBjbGVhciB0aGUgYnV0dG9ucyBtaWQtcG9pbnRcbiAgICAgICAgLy8gYW5kIHdlIGFyZW4ndCBtb3ZpbmcgZmFzdCBlbm91Z2ggdG8gc3dpcGUgb3BlblxuICAgICAgICB2YXIgaXNSZXNldERpcmVjdGlvbiA9ICh0aGlzLm9wZW5BbW91bnQgPiAwKSA9PT0gISh2ZWxvY2l0eSA8IDApO1xuICAgICAgICB2YXIgaXNNb3ZpbmdGYXN0ID0gTWF0aC5hYnModmVsb2NpdHkpID4gMC4zO1xuICAgICAgICB2YXIgaXNPbkNsb3NlWm9uZSA9IE1hdGguYWJzKHRoaXMub3BlbkFtb3VudCkgPCBNYXRoLmFicyhyZXN0aW5nUG9pbnQgLyAyKTtcbiAgICAgICAgaWYgKHN3aXBlU2hvdWxkUmVzZXQoaXNSZXNldERpcmVjdGlvbiwgaXNNb3ZpbmdGYXN0LCBpc09uQ2xvc2Vab25lKSkge1xuICAgICAgICAgICAgcmVzdGluZ1BvaW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICB0aGlzLnNldE9wZW5BbW91bnQocmVzdGluZ1BvaW50LCB0cnVlKTtcbiAgICAgICAgaWYgKChzdGF0ZSAmIDMyIC8qIFN3aXBlRW5kICovKSAhPT0gMCAmJiB0aGlzLnJpZ2h0T3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5yaWdodE9wdGlvbnMuZmlyZVN3aXBlRXZlbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoc3RhdGUgJiA2NCAvKiBTd2lwZVN0YXJ0ICovKSAhPT0gMCAmJiB0aGlzLmxlZnRPcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmxlZnRPcHRpb25zLmZpcmVTd2lwZUV2ZW50KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzIucHJvdG90eXBlLmNhbGN1bGF0ZU9wdHNXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5vcHRzV2lkdGhSaWdodFNpZGUgPSAwO1xuICAgICAgICBpZiAodGhpcy5yaWdodE9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRPcHRpb25zLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICB0aGlzLm9wdHNXaWR0aFJpZ2h0U2lkZSA9IHRoaXMucmlnaHRPcHRpb25zLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgdGhpcy5yaWdodE9wdGlvbnMuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0c1dpZHRoTGVmdFNpZGUgPSAwO1xuICAgICAgICBpZiAodGhpcy5sZWZ0T3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5sZWZ0T3B0aW9ucy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgdGhpcy5vcHRzV2lkdGhMZWZ0U2lkZSA9IHRoaXMubGVmdE9wdGlvbnMub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB0aGlzLmxlZnRPcHRpb25zLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdHNEaXJ0eSA9IGZhbHNlO1xuICAgIH07XG4gICAgY2xhc3NfMi5wcm90b3R5cGUuc2V0T3BlbkFtb3VudCA9IGZ1bmN0aW9uIChvcGVuQW1vdW50LCBpc0ZpbmFsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnRtciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50bXIpO1xuICAgICAgICAgICAgdGhpcy50bXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLml0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3R5bGUgPSB0aGlzLml0ZW0uc3R5bGU7XG4gICAgICAgIHRoaXMub3BlbkFtb3VudCA9IG9wZW5BbW91bnQ7XG4gICAgICAgIGlmIChpc0ZpbmFsKSB7XG4gICAgICAgICAgICBzdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wZW5BbW91bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gKG9wZW5BbW91bnQgPj0gKHRoaXMub3B0c1dpZHRoUmlnaHRTaWRlICsgU1dJUEVfTUFSR0lOKSlcbiAgICAgICAgICAgICAgICA/IDggLyogRW5kICovIHwgMzIgLyogU3dpcGVFbmQgKi9cbiAgICAgICAgICAgICAgICA6IDggLyogRW5kICovO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9wZW5BbW91bnQgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gKG9wZW5BbW91bnQgPD0gKC10aGlzLm9wdHNXaWR0aExlZnRTaWRlIC0gU1dJUEVfTUFSR0lOKSlcbiAgICAgICAgICAgICAgICA/IDE2IC8qIFN0YXJ0ICovIHwgNjQgLyogU3dpcGVTdGFydCAqL1xuICAgICAgICAgICAgICAgIDogMTYgLyogU3RhcnQgKi87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRtciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnN0YXRlID0gMiAvKiBEaXNhYmxlZCAqLztcbiAgICAgICAgICAgICAgICBfdGhpcy50bXIgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9LCA2MDApO1xuICAgICAgICAgICAgb3BlblNsaWRpbmdJdGVtID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChcIiArIC1vcGVuQW1vdW50ICsgXCJweCwwLDApXCI7XG4gICAgICAgIHRoaXMuaW9uRHJhZy5lbWl0KHtcbiAgICAgICAgICAgIGFtb3VudDogb3BlbkFtb3VudCxcbiAgICAgICAgICAgIHJhdGlvOiB0aGlzLmdldFNsaWRpbmdSYXRpb1N5bmMoKVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzIucHJvdG90eXBlLmdldFNsaWRpbmdSYXRpb1N5bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wZW5BbW91bnQgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuQW1vdW50IC8gdGhpcy5vcHRzV2lkdGhSaWdodFNpZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5vcGVuQW1vdW50IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BlbkFtb3VudCAvIHRoaXMub3B0c1dpZHRoTGVmdFNpZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IChfYSA9IHt9LFxuICAgICAgICAgICAgICAgIF9hW21vZGVdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYVsnaXRlbS1zbGlkaW5nLWFjdGl2ZS1zbGlkZSddID0gKHRoaXMuc3RhdGUgIT09IDIgLyogRGlzYWJsZWQgKi8pLFxuICAgICAgICAgICAgICAgIF9hWydpdGVtLXNsaWRpbmctYWN0aXZlLW9wdGlvbnMtZW5kJ10gPSAodGhpcy5zdGF0ZSAmIDggLyogRW5kICovKSAhPT0gMCxcbiAgICAgICAgICAgICAgICBfYVsnaXRlbS1zbGlkaW5nLWFjdGl2ZS1vcHRpb25zLXN0YXJ0J10gPSAodGhpcy5zdGF0ZSAmIDE2IC8qIFN0YXJ0ICovKSAhPT0gMCxcbiAgICAgICAgICAgICAgICBfYVsnaXRlbS1zbGlkaW5nLWFjdGl2ZS1zd2lwZS1lbmQnXSA9ICh0aGlzLnN0YXRlICYgMzIgLyogU3dpcGVFbmQgKi8pICE9PSAwLFxuICAgICAgICAgICAgICAgIF9hWydpdGVtLXNsaWRpbmctYWN0aXZlLXN3aXBlLXN0YXJ0J10gPSAodGhpcy5zdGF0ZSAmIDY0IC8qIFN3aXBlU3RhcnQgKi8pICE9PSAwLFxuICAgICAgICAgICAgICAgIF9hKSB9KSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMi5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18yLCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMiwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJpb24taXRlbS1zbGlkaW5ne2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW59aW9uLWl0ZW0tc2xpZGluZyxpb24taXRlbS1zbGlkaW5nIC5pdGVtey13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uaXRlbS1zbGlkaW5nLWFjdGl2ZS1zbGlkZSAuaXRlbXtwb3NpdGlvbjpyZWxhdGl2ZTstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjVzIGN1YmljLWJlemllciguMzYsLjY2LC4wNCwxKTt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC41cyBjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjVzIGN1YmljLWJlemllciguMzYsLjY2LC4wNCwxKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuNXMgY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpLC13ZWJraXQtdHJhbnNmb3JtIC41cyBjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSk7b3BhY2l0eToxO3otaW5kZXg6Mjtwb2ludGVyLWV2ZW50czpub25lO3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0uaXRlbS1zbGlkaW5nLWFjdGl2ZS1zd2lwZS1lbmQgLml0ZW0tb3B0aW9ucy1lbmQgLml0ZW0tb3B0aW9uLWV4cGFuZGFibGV7cGFkZGluZy1sZWZ0OjEwMCU7LW1zLWZsZXgtb3JkZXI6MTtvcmRlcjoxOy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjouNnM7dHJhbnNpdGlvbi1kdXJhdGlvbjouNnM7LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OnBhZGRpbmctbGVmdDt0cmFuc2l0aW9uLXByb3BlcnR5OnBhZGRpbmctbGVmdH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLml0ZW0tc2xpZGluZy1hY3RpdmUtc3dpcGUtZW5kIC5pdGVtLW9wdGlvbnMtZW5kIC5pdGVtLW9wdGlvbi1leHBhbmRhYmxlLFtkaXI9cnRsXSAuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zd2lwZS1lbmQgLml0ZW0tb3B0aW9ucy1lbmQgLml0ZW0tb3B0aW9uLWV4cGFuZGFibGV7LW1zLWZsZXgtb3JkZXI6LTE7b3JkZXI6LTF9Lml0ZW0tc2xpZGluZy1hY3RpdmUtc3dpcGUtc3RhcnQgLml0ZW0tb3B0aW9ucy1zdGFydCAuaXRlbS1vcHRpb24tZXhwYW5kYWJsZXtwYWRkaW5nLXJpZ2h0OjEwMCU7LW1zLWZsZXgtb3JkZXI6LTE7b3JkZXI6LTE7LXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOi42czt0cmFuc2l0aW9uLWR1cmF0aW9uOi42czstd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6cGFkZGluZy1yaWdodDt0cmFuc2l0aW9uLXByb3BlcnR5OnBhZGRpbmctcmlnaHR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pdGVtLXNsaWRpbmctYWN0aXZlLXN3aXBlLXN0YXJ0IC5pdGVtLW9wdGlvbnMtc3RhcnQgLml0ZW0tb3B0aW9uLWV4cGFuZGFibGUsW2Rpcj1ydGxdIC5pdGVtLXNsaWRpbmctYWN0aXZlLXN3aXBlLXN0YXJ0IC5pdGVtLW9wdGlvbnMtc3RhcnQgLml0ZW0tb3B0aW9uLWV4cGFuZGFibGV7LW1zLWZsZXgtb3JkZXI6MTtvcmRlcjoxfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NfMjtcbn0oKSk7XG52YXIgc3dpcGVTaG91bGRSZXNldCA9IGZ1bmN0aW9uIChpc1Jlc2V0RGlyZWN0aW9uLCBpc01vdmluZ0Zhc3QsIGlzT25SZXNldFpvbmUpIHtcbiAgICAvLyBUaGUgbG9naWMgcmVxdWlyZWQgdG8ga25vdyB3aGVuIHRoZSBzbGlkaW5nIGl0ZW0gc2hvdWxkIGNsb3NlIChvcGVuQW1vdW50PTApXG4gICAgLy8gZGVwZW5kcyBvbiB0aHJlZSBib29sZWFucyAoaXNSZXNldERpcmVjdGlvbiwgaXNNb3ZpbmdGYXN0LCBpc09uUmVzZXRab25lKVxuICAgIC8vIGFuZCBpdCBlbmRlZCB1cCBiZWluZyB0b28gY29tcGxpY2F0ZWQgdG8gYmUgd3JpdHRlbiBtYW51YWxseSB3aXRob3V0IGVycm9yc1xuICAgIC8vIHNvIHRoZSB0cnV0aCB0YWJsZSBpcyBhdHRhY2hlZCBiZWxvdzogKDA9ZmFsc2UsIDE9dHJ1ZSlcbiAgICAvLyBpc1Jlc2V0RGlyZWN0aW9uIHwgaXNNb3ZpbmdGYXN0IHwgaXNPblJlc2V0Wm9uZSB8fCBzaG91bGRDbG9zZVxuICAgIC8vICAgICAgICAgMCAgICAgICAgfCAgICAgICAwICAgICAgfCAgICAgICAwICAgICAgIHx8ICAgIDBcbiAgICAvLyAgICAgICAgIDAgICAgICAgIHwgICAgICAgMCAgICAgIHwgICAgICAgMSAgICAgICB8fCAgICAxXG4gICAgLy8gICAgICAgICAwICAgICAgICB8ICAgICAgIDEgICAgICB8ICAgICAgIDAgICAgICAgfHwgICAgMFxuICAgIC8vICAgICAgICAgMCAgICAgICAgfCAgICAgICAxICAgICAgfCAgICAgICAxICAgICAgIHx8ICAgIDBcbiAgICAvLyAgICAgICAgIDEgICAgICAgIHwgICAgICAgMCAgICAgIHwgICAgICAgMCAgICAgICB8fCAgICAwXG4gICAgLy8gICAgICAgICAxICAgICAgICB8ICAgICAgIDAgICAgICB8ICAgICAgIDEgICAgICAgfHwgICAgMVxuICAgIC8vICAgICAgICAgMSAgICAgICAgfCAgICAgICAxICAgICAgfCAgICAgICAwICAgICAgIHx8ICAgIDFcbiAgICAvLyAgICAgICAgIDEgICAgICAgIHwgICAgICAgMSAgICAgIHwgICAgICAgMSAgICAgICB8fCAgICAxXG4gICAgLy8gVGhlIHJlc3VsdGluZyBleHByZXNzaW9uIHdhcyBnZW5lcmF0ZWQgYnkgcmVzb2x2aW5nIHRoZSBLLW1hcCAoS2FybmF1Z2ggbWFwKTpcbiAgICByZXR1cm4gKCFpc01vdmluZ0Zhc3QgJiYgaXNPblJlc2V0Wm9uZSkgfHwgKGlzUmVzZXREaXJlY3Rpb24gJiYgaXNNb3ZpbmdGYXN0KTtcbn07XG5leHBvcnQgeyBJdGVtT3B0aW9uIGFzIGlvbl9pdGVtX29wdGlvbiwgSXRlbU9wdGlvbnMgYXMgaW9uX2l0ZW1fb3B0aW9ucywgSXRlbVNsaWRpbmcgYXMgaW9uX2l0ZW1fc2xpZGluZyB9O1xuIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xudmFyIGhvc3RDb250ZXh0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBlbCkge1xuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcbn07XG4vKipcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cbiAqL1xudmFyIGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyAoX2EgPSB7XG4gICAgICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBfYVtcImlvbi1jb2xvci1cIiArIGNvbG9yXSA9IHRydWUsXG4gICAgICAgIF9hKSA6IHVuZGVmaW5lZDtcbn07XG52YXIgZ2V0Q2xhc3NMaXN0ID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT0gbnVsbDsgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudHJpbSgpOyB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPT0gJyc7IH0pO1xuICAgIH1cbiAgICByZXR1cm4gW107XG59O1xudmFyIGdldENsYXNzTWFwID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG1hcFtjXSA9IHRydWU7IH0pO1xuICAgIHJldHVybiBtYXA7XG59O1xudmFyIFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xudmFyIG9wZW5VUkwgPSBmdW5jdGlvbiAodXJsLCBldiwgZGlyZWN0aW9uKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByb3V0ZXI7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcbiAgICAgICAgICAgIHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcbiAgICAgICAgICAgIGlmIChyb3V0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgIH0pO1xufSk7IH07XG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9