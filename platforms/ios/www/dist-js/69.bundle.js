(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-segment_2-ios.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-segment_2-ios.entry.js ***!
  \**************************************************************************/
/*! exports provided: ion_segment, ion_segment_button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_segment", function() { return Segment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_segment_button", function() { return SegmentButton; });
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");



var Segment = /** @class */ (function () {
    function Segment(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.didInit = false;
        /**
         * If `true`, the user cannot interact with the segment.
         */
        this.disabled = false;
        /**
         * If `true`, the segment buttons will overflow and the user can swipe to see them.
         */
        this.scrollable = false;
        this.ionChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionChange", 7);
        this.ionStyle = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionStyle", 7);
    }
    Segment.prototype.valueChanged = function (value) {
        if (this.didInit) {
            this.updateButtons();
            this.ionChange.emit({ value: value });
        }
    };
    Segment.prototype.segmentClick = function (ev) {
        var selectedButton = ev.target;
        this.value = selectedButton.value;
    };
    Segment.prototype.connectedCallback = function () {
        if (this.value === undefined) {
            var checked = this.getButtons().find(function (b) { return b.checked; });
            if (checked) {
                this.value = checked.value;
            }
        }
        this.emitStyle();
    };
    Segment.prototype.componentDidLoad = function () {
        this.updateButtons();
        this.didInit = true;
    };
    Segment.prototype.emitStyle = function () {
        this.ionStyle.emit({
            'segment': true
        });
    };
    Segment.prototype.updateButtons = function () {
        var value = this.value;
        for (var _i = 0, _a = this.getButtons(); _i < _a.length; _i++) {
            var button = _a[_i];
            button.checked = (button.value === value);
        }
    };
    Segment.prototype.getButtons = function () {
        return Array.from(this.el.querySelectorAll('ion-segment-button'));
    };
    Segment.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), (_a = {}, _a[mode] = true, _a['segment-disabled'] = this.disabled, _a['segment-scrollable'] = this.scrollable, _a)) }));
    };
    Object.defineProperty(Segment.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Segment, "watchers", {
        get: function () {
            return {
                "value": ["valueChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Segment, "style", {
        get: function () { return ".sc-ion-segment-ios-h{--indicator-color-checked:initial;--ripple-color:currentColor;--color-activated:initial;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;font-family:var(--ion-font-family,inherit);text-align:center}.sc-ion-segment-ios-s > .segment-button-disabled, .segment-disabled.sc-ion-segment-ios-h{pointer-events:none}.segment-scrollable.sc-ion-segment-ios-h{-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:scroll}.segment-scrollable.sc-ion-segment-ios-h::-webkit-scrollbar{display:none}.sc-ion-segment-ios-h{--background:transparent;--background-hover:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--background-activated:rgba(var(--ion-color-primary-rgb,56,128,255),0.16);--background-checked:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary,#3880ff);--color-checked:var(--ion-color-primary-contrast,#fff);--color-disabled:rgba(var(--ion-color-primary-rgb,56,128,255),0.3);--color-checked-disabled:rgba(var(--ion-color-primary-contrast-rgb,255,255,255),0.3);--border-color:var(--ion-color-primary,#3880ff);--indicator-color:transparent}.segment-disabled.sc-ion-segment-ios-h{opacity:.3}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > ion-segment-button{--border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .activated{background:rgba(var(--ion-color-base-rgb),.16);color:var(--ion-color-base)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked, .sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked.activated{background:var(--ion-color-base);color:var(--ion-color-contrast)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-disabled{color:rgba(var(--ion-color-base-rgb),.3)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked.segment-button-disabled{color:rgba(var(--ion-color-contrast-rgb),.3)}\@media (any-hover:hover){.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > ion-segment-button:hover:not(.segment-button-checked){background:rgba(var(--ion-color-base-rgb),.1)}}.sc-ion-segment-ios-hion-toolbar.sc-ion-segment-ios-s > ion-segment-button, ion-toolbar .sc-ion-segment-ios-h.sc-ion-segment-ios-s > ion-segment-button{max-width:100px;font-size:12px;line-height:22px}.sc-ion-segment-ios-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-ios-s > ion-segment-button, ion-toolbar:not(.ion-color) .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button{border-color:var(--ion-toolbar-color-checked,var(--border-color));color:var(--ion-toolbar-color-unchecked,var(--color))}.sc-ion-segment-ios-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-ios-s > .segment-button-checked, ion-toolbar:not(.ion-color) .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > .segment-button-checked{background:var(--ion-toolbar-color-checked,var(--background-checked));color:var(--ion-toolbar-background,var(--color-checked))}.sc-ion-segment-ios-hion-toolbar.ion-color:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button, ion-toolbar.ion-color .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button{--color:var(--ion-color-contrast);--color-disabled:rgba(var(--ion-color-contrast-rgb),0.3);--color-checked:var(--ion-color-base);--color-checked-disabled:rgba(var(--ion-color-contrast-rgb),0.3);--background-hover:rgba(var(--ion-color-contrast-rgb),0.1);--background-activated:rgba(var(--ion-color-contrast-rgb),0.16);--background-checked:var(--ion-color-contrast);--border-color:var(--ion-color-contrast)}"; },
        enumerable: true,
        configurable: true
    });
    return Segment;
}());
var ids = 0;
var SegmentButton = /** @class */ (function () {
    function SegmentButton(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * If `true`, the segment button is selected.
         */
        this.checked = false;
        /**
         * If `true`, the user cannot interact with the segment button.
         */
        this.disabled = false;
        /**
         * Set the layout of the text and icon in the segment.
         */
        this.layout = 'icon-top';
        /**
         * The type of the button.
         */
        this.type = 'button';
        /**
         * The value of the segment button.
         */
        this.value = 'ion-sb-' + (ids++);
        this.onClick = function () {
            _this.checked = true;
        };
        this.ionSelect = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionSelect", 7);
    }
    SegmentButton.prototype.checkedChanged = function (checked, prev) {
        if (checked && !prev) {
            this.ionSelect.emit();
        }
    };
    Object.defineProperty(SegmentButton.prototype, "hasLabel", {
        get: function () {
            return !!this.el.querySelector('ion-label');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SegmentButton.prototype, "hasIcon", {
        get: function () {
            return !!this.el.querySelector('ion-icon');
        },
        enumerable: true,
        configurable: true
    });
    SegmentButton.prototype.render = function () {
        var _a;
        var _b = this, checked = _b.checked, type = _b.type, disabled = _b.disabled, hasIcon = _b.hasIcon, hasLabel = _b.hasLabel, layout = _b.layout;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, "aria-disabled": disabled ? 'true' : null, class: (_a = {},
                _a[mode] = true,
                _a['segment-button-has-label'] = hasLabel,
                _a['segment-button-has-icon'] = hasIcon,
                _a['segment-button-has-label-only'] = hasLabel && !hasIcon,
                _a['segment-button-has-icon-only'] = hasIcon && !hasLabel,
                _a['segment-button-disabled'] = disabled,
                _a['segment-button-checked'] = checked,
                _a["segment-button-layout-" + layout] = true,
                _a['ion-activatable'] = true,
                _a['ion-activatable-instant'] = true,
                _a) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: type, "aria-pressed": checked ? 'true' : null, class: "button-native", disabled: disabled }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), mode === 'md' && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "segment-button-indicator" })));
    };
    Object.defineProperty(SegmentButton.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SegmentButton, "watchers", {
        get: function () {
            return {
                "checked": ["checkedChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SegmentButton, "style", {
        get: function () { return ":host{--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex:1 0 auto;flex:1 0 auto;-ms-flex-direction:column;flex-direction:column;height:auto;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-font-kerning:none;font-kerning:none}:host(:first-of-type){border-top-left-radius:var(--border-radius);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--border-radius)}:host-context([dir=rtl]):first-of-type,:host-context([dir=rtl]):host(:first-of-type){border-top-left-radius:0;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0}:host(:not(:first-of-type)){border-left-width:0}:host-context([dir=rtl]):host(:not(:first-of-type)),:host-context([dir=rtl]):not(:first-of-type){border-right-width:0;border-left-width:var(--border-width)}:host(:last-of-type){border-top-left-radius:0;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0}:host-context([dir=rtl]):host(:last-of-type),:host-context([dir=rtl]):last-of-type{border-top-left-radius:var(--border-radius);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--border-radius)}.button-native{border-radius:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;cursor:pointer}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.segment-button-indicator{-ms-flex-item-align:end;align-self:flex-end;width:100%;height:2px;background-color:var(--indicator-color);opacity:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-checked) .segment-button-indicator{background-color:var(--indicator-color-checked,var(--color-checked))}:host(.activated){color:var(--color-activated,var(--color))}:host(.segment-button-disabled){color:var(--color-disabled)}:host(.segment-button-disabled.segment-button-checked){color:var(--color-checked-disabled)}::slotted(ion-icon){-ms-flex-order:-1;order:-1}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon),:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color,var(--color-checked))}:host{--border-radius:4px;--border-width:1px;--border-style:solid;--transition:100ms all linear;min-height:24px;font-size:13px;line-height:37px}.segment-button-indicator{display:none}::slotted(ion-icon){font-size:24px}:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:2px;margin-right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:0;margin-inline-end:0}}:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:0;margin-right:2px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:2px;margin-inline-end:2px}}\@media (any-hover:hover){:host(:hover:not(.segment-button-checked)){background:var(--background-hover)}}:host(.activated){background:var(--background-activated)}:host(.segment-button-checked.activated){background:var(--background-checked);color:var(--color-checked)}"; },
        enumerable: true,
        configurable: true
    });
    return SegmentButton;
}());



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1zZWdtZW50XzItaW9zLmVudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2SDtBQUMvRjtBQUNnQztBQUM5RDtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJEQUFXO0FBQ3BDLHdCQUF3QiwyREFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Qsa0JBQWtCLEVBQUU7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGdCQUFnQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQVU7QUFDN0IsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyxzQ0FBc0MsRUFBRSw0REFBa0IsdUJBQXVCLDZHQUE2RztBQUN2TjtBQUNBO0FBQ0EsMEJBQTBCLFFBQVEsMkRBQVUsT0FBTyxFQUFFO0FBQ3JEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLCtCQUErQixrQ0FBa0MsNEJBQTRCLDBCQUEwQixrQ0FBa0MsbUNBQW1DLG9CQUFvQixh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QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxzQkFBc0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUSx1REFBUztBQUM5RDtBQUNBLFdBQVcseURBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFO0FBQ2tGIiwiZmlsZSI6IjY5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgZCBhcyBjcmVhdGVFdmVudCwgYyBhcyBnZXRJb25Nb2RlLCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG52YXIgU2VnbWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZWdtZW50KGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5kaWRJbml0ID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBzZWdtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgc2VnbWVudCBidXR0b25zIHdpbGwgb3ZlcmZsb3cgYW5kIHRoZSB1c2VyIGNhbiBzd2lwZSB0byBzZWUgdGhlbS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2Nyb2xsYWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlvbkNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQ2hhbmdlXCIsIDcpO1xuICAgICAgICB0aGlzLmlvblN0eWxlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TdHlsZVwiLCA3KTtcbiAgICB9XG4gICAgU2VnbWVudC5wcm90b3R5cGUudmFsdWVDaGFuZ2VkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmRpZEluaXQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQnV0dG9ucygpO1xuICAgICAgICAgICAgdGhpcy5pb25DaGFuZ2UuZW1pdCh7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2VnbWVudC5wcm90b3R5cGUuc2VnbWVudENsaWNrID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIHZhciBzZWxlY3RlZEJ1dHRvbiA9IGV2LnRhcmdldDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHNlbGVjdGVkQnV0dG9uLnZhbHVlO1xuICAgIH07XG4gICAgU2VnbWVudC5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBjaGVja2VkID0gdGhpcy5nZXRCdXR0b25zKCkuZmluZChmdW5jdGlvbiAoYikgeyByZXR1cm4gYi5jaGVja2VkOyB9KTtcbiAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGNoZWNrZWQudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9O1xuICAgIFNlZ21lbnQucHJvdG90eXBlLmNvbXBvbmVudERpZExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQnV0dG9ucygpO1xuICAgICAgICB0aGlzLmRpZEluaXQgPSB0cnVlO1xuICAgIH07XG4gICAgU2VnbWVudC5wcm90b3R5cGUuZW1pdFN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlvblN0eWxlLmVtaXQoe1xuICAgICAgICAgICAgJ3NlZ21lbnQnOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2VnbWVudC5wcm90b3R5cGUudXBkYXRlQnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuZ2V0QnV0dG9ucygpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9IF9hW19pXTtcbiAgICAgICAgICAgIGJ1dHRvbi5jaGVja2VkID0gKGJ1dHRvbi52YWx1ZSA9PT0gdmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTZWdtZW50LnByb3RvdHlwZS5nZXRCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1zZWdtZW50LWJ1dHRvbicpKTtcbiAgICB9O1xuICAgIFNlZ21lbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yKSksIChfYSA9IHt9LCBfYVttb2RlXSA9IHRydWUsIF9hWydzZWdtZW50LWRpc2FibGVkJ10gPSB0aGlzLmRpc2FibGVkLCBfYVsnc2VnbWVudC1zY3JvbGxhYmxlJ10gPSB0aGlzLnNjcm9sbGFibGUsIF9hKSkgfSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlZ21lbnQucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VnbWVudCwgXCJ3YXRjaGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFtcInZhbHVlQ2hhbmdlZFwiXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlZ21lbnQsIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiLnNjLWlvbi1zZWdtZW50LWlvcy1oey0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6aW5pdGlhbDstLXJpcHBsZS1jb2xvcjpjdXJyZW50Q29sb3I7LS1jb2xvci1hY3RpdmF0ZWQ6aW5pdGlhbDstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpzdHJldGNoO2FsaWduLWl0ZW1zOnN0cmV0Y2g7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTt0ZXh0LWFsaWduOmNlbnRlcn0uc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiAuc2VnbWVudC1idXR0b24tZGlzYWJsZWQsIC5zZWdtZW50LWRpc2FibGVkLnNjLWlvbi1zZWdtZW50LWlvcy1oe3BvaW50ZXItZXZlbnRzOm5vbmV9LnNlZ21lbnQtc2Nyb2xsYWJsZS5zYy1pb24tc2VnbWVudC1pb3MtaHstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpzdGFydDt3aWR0aDphdXRvO292ZXJmbG93LXg6c2Nyb2xsfS5zZWdtZW50LXNjcm9sbGFibGUuc2MtaW9uLXNlZ21lbnQtaW9zLWg6Oi13ZWJraXQtc2Nyb2xsYmFye2Rpc3BsYXk6bm9uZX0uc2MtaW9uLXNlZ21lbnQtaW9zLWh7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1ob3ZlcjpyZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiw1NiwxMjgsMjU1KSwwLjEpOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6cmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsNTYsMTI4LDI1NSksMC4xNik7LS1iYWNrZ3JvdW5kLWNoZWNrZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZik7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTstLWNvbG9yLWNoZWNrZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsI2ZmZik7LS1jb2xvci1kaXNhYmxlZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiw1NiwxMjgsMjU1KSwwLjMpOy0tY29sb3ItY2hlY2tlZC1kaXNhYmxlZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYiwyNTUsMjU1LDI1NSksMC4zKTstLWJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTstLWluZGljYXRvci1jb2xvcjp0cmFuc3BhcmVudH0uc2VnbWVudC1kaXNhYmxlZC5zYy1pb24tc2VnbWVudC1pb3MtaHtvcGFjaXR5Oi4zfS5zYy1pb24tc2VnbWVudC1pb3MtaC5pb24tY29sb3Iuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiBpb24tc2VnbWVudC1idXR0b257LS1ib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfS5zYy1pb24tc2VnbWVudC1pb3MtaC5pb24tY29sb3Iuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiAuYWN0aXZhdGVke2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLC4xNik7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfS5zYy1pb24tc2VnbWVudC1pb3MtaC5pb24tY29sb3Iuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiAuc2VnbWVudC1idXR0b24tY2hlY2tlZCwgLnNjLWlvbi1zZWdtZW50LWlvcy1oLmlvbi1jb2xvci5zYy1pb24tc2VnbWVudC1pb3MtcyA+IC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkLmFjdGl2YXRlZHtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfS5zYy1pb24tc2VnbWVudC1pb3MtaC5pb24tY29sb3Iuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiAuc2VnbWVudC1idXR0b24tZGlzYWJsZWR7Y29sb3I6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLC4zKX0uc2MtaW9uLXNlZ21lbnQtaW9zLWguaW9uLWNvbG9yLnNjLWlvbi1zZWdtZW50LWlvcy1zID4gLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQuc2VnbWVudC1idXR0b24tZGlzYWJsZWR7Y29sb3I6cmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwuMyl9XFxAbWVkaWEgKGFueS1ob3Zlcjpob3Zlcil7LnNjLWlvbi1zZWdtZW50LWlvcy1oLmlvbi1jb2xvci5zYy1pb24tc2VnbWVudC1pb3MtcyA+IGlvbi1zZWdtZW50LWJ1dHRvbjpob3Zlcjpub3QoLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQpe2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLC4xKX19LnNjLWlvbi1zZWdtZW50LWlvcy1oaW9uLXRvb2xiYXIuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiBpb24tc2VnbWVudC1idXR0b24sIGlvbi10b29sYmFyIC5zYy1pb24tc2VnbWVudC1pb3MtaC5zYy1pb24tc2VnbWVudC1pb3MtcyA+IGlvbi1zZWdtZW50LWJ1dHRvbnttYXgtd2lkdGg6MTAwcHg7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MjJweH0uc2MtaW9uLXNlZ21lbnQtaW9zLWhpb24tdG9vbGJhcjpub3QoLmlvbi1jb2xvcik6bm90KC5pb24tY29sb3IpLnNjLWlvbi1zZWdtZW50LWlvcy1zID4gaW9uLXNlZ21lbnQtYnV0dG9uLCBpb24tdG9vbGJhcjpub3QoLmlvbi1jb2xvcikgLnNjLWlvbi1zZWdtZW50LWlvcy1oOm5vdCguaW9uLWNvbG9yKS5zYy1pb24tc2VnbWVudC1pb3MtcyA+IGlvbi1zZWdtZW50LWJ1dHRvbntib3JkZXItY29sb3I6dmFyKC0taW9uLXRvb2xiYXItY29sb3ItY2hlY2tlZCx2YXIoLS1ib3JkZXItY29sb3IpKTtjb2xvcjp2YXIoLS1pb24tdG9vbGJhci1jb2xvci11bmNoZWNrZWQsdmFyKC0tY29sb3IpKX0uc2MtaW9uLXNlZ21lbnQtaW9zLWhpb24tdG9vbGJhcjpub3QoLmlvbi1jb2xvcik6bm90KC5pb24tY29sb3IpLnNjLWlvbi1zZWdtZW50LWlvcy1zID4gLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQsIGlvbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKSAuc2MtaW9uLXNlZ21lbnQtaW9zLWg6bm90KC5pb24tY29sb3IpLnNjLWlvbi1zZWdtZW50LWlvcy1zID4gLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWR7YmFja2dyb3VuZDp2YXIoLS1pb24tdG9vbGJhci1jb2xvci1jaGVja2VkLHZhcigtLWJhY2tncm91bmQtY2hlY2tlZCkpO2NvbG9yOnZhcigtLWlvbi10b29sYmFyLWJhY2tncm91bmQsdmFyKC0tY29sb3ItY2hlY2tlZCkpfS5zYy1pb24tc2VnbWVudC1pb3MtaGlvbi10b29sYmFyLmlvbi1jb2xvcjpub3QoLmlvbi1jb2xvcikuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiBpb24tc2VnbWVudC1idXR0b24sIGlvbi10b29sYmFyLmlvbi1jb2xvciAuc2MtaW9uLXNlZ21lbnQtaW9zLWg6bm90KC5pb24tY29sb3IpLnNjLWlvbi1zZWdtZW50LWlvcy1zID4gaW9uLXNlZ21lbnQtYnV0dG9uey0tY29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KTstLWNvbG9yLWRpc2FibGVkOnJnYmEodmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYiksMC4zKTstLWNvbG9yLWNoZWNrZWQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpOy0tY29sb3ItY2hlY2tlZC1kaXNhYmxlZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLDAuMyk7LS1iYWNrZ3JvdW5kLWhvdmVyOnJnYmEodmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYiksMC4xKTstLWJhY2tncm91bmQtYWN0aXZhdGVkOnJnYmEodmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYiksMC4xNik7LS1iYWNrZ3JvdW5kLWNoZWNrZWQ6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KTstLWJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gU2VnbWVudDtcbn0oKSk7XG52YXIgaWRzID0gMDtcbnZhciBTZWdtZW50QnV0dG9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlZ21lbnRCdXR0b24oaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgc2VnbWVudCBidXR0b24gaXMgc2VsZWN0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIHNlZ21lbnQgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSBsYXlvdXQgb2YgdGhlIHRleHQgYW5kIGljb24gaW4gdGhlIHNlZ21lbnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxheW91dCA9ICdpY29uLXRvcCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBvZiB0aGUgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmFsdWUgb2YgdGhlIHNlZ21lbnQgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52YWx1ZSA9ICdpb24tc2ItJyArIChpZHMrKyk7XG4gICAgICAgIHRoaXMub25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlvblNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU2VsZWN0XCIsIDcpO1xuICAgIH1cbiAgICBTZWdtZW50QnV0dG9uLnByb3RvdHlwZS5jaGVja2VkQ2hhbmdlZCA9IGZ1bmN0aW9uIChjaGVja2VkLCBwcmV2KSB7XG4gICAgICAgIGlmIChjaGVja2VkICYmICFwcmV2KSB7XG4gICAgICAgICAgICB0aGlzLmlvblNlbGVjdC5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50QnV0dG9uLnByb3RvdHlwZSwgXCJoYXNMYWJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICEhdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpb24tbGFiZWwnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlZ21lbnRCdXR0b24ucHJvdG90eXBlLCBcImhhc0ljb25cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAhIXRoaXMuZWwucXVlcnlTZWxlY3RvcignaW9uLWljb24nKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgU2VnbWVudEJ1dHRvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBfYiA9IHRoaXMsIGNoZWNrZWQgPSBfYi5jaGVja2VkLCB0eXBlID0gX2IudHlwZSwgZGlzYWJsZWQgPSBfYi5kaXNhYmxlZCwgaGFzSWNvbiA9IF9iLmhhc0ljb24sIGhhc0xhYmVsID0gX2IuaGFzTGFiZWwsIGxheW91dCA9IF9iLmxheW91dDtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/ICd0cnVlJyA6IG51bGwsIGNsYXNzOiAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVttb2RlXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2FbJ3NlZ21lbnQtYnV0dG9uLWhhcy1sYWJlbCddID0gaGFzTGFiZWwsXG4gICAgICAgICAgICAgICAgX2FbJ3NlZ21lbnQtYnV0dG9uLWhhcy1pY29uJ10gPSBoYXNJY29uLFxuICAgICAgICAgICAgICAgIF9hWydzZWdtZW50LWJ1dHRvbi1oYXMtbGFiZWwtb25seSddID0gaGFzTGFiZWwgJiYgIWhhc0ljb24sXG4gICAgICAgICAgICAgICAgX2FbJ3NlZ21lbnQtYnV0dG9uLWhhcy1pY29uLW9ubHknXSA9IGhhc0ljb24gJiYgIWhhc0xhYmVsLFxuICAgICAgICAgICAgICAgIF9hWydzZWdtZW50LWJ1dHRvbi1kaXNhYmxlZCddID0gZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgX2FbJ3NlZ21lbnQtYnV0dG9uLWNoZWNrZWQnXSA9IGNoZWNrZWQsXG4gICAgICAgICAgICAgICAgX2FbXCJzZWdtZW50LWJ1dHRvbi1sYXlvdXQtXCIgKyBsYXlvdXRdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYVsnaW9uLWFjdGl2YXRhYmxlJ10gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hWydpb24tYWN0aXZhdGFibGUtaW5zdGFudCddID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYSkgfSwgaChcImJ1dHRvblwiLCB7IHR5cGU6IHR5cGUsIFwiYXJpYS1wcmVzc2VkXCI6IGNoZWNrZWQgPyAndHJ1ZScgOiBudWxsLCBjbGFzczogXCJidXR0b24tbmF0aXZlXCIsIGRpc2FibGVkOiBkaXNhYmxlZCB9LCBoKFwic2xvdFwiLCBudWxsKSwgbW9kZSA9PT0gJ21kJyAmJiBoKFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwgbnVsbCkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwic2VnbWVudC1idXR0b24taW5kaWNhdG9yXCIgfSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50QnV0dG9uLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlZ21lbnRCdXR0b24sIFwid2F0Y2hlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJjaGVja2VkXCI6IFtcImNoZWNrZWRDaGFuZ2VkXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VnbWVudEJ1dHRvbiwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCI6aG9zdHstLXBhZGRpbmctc3RhcnQ6MDstLXBhZGRpbmctZW5kOjA7LS1wYWRkaW5nLXRvcDowOy0tcGFkZGluZy1ib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleDoxIDAgYXV0bztmbGV4OjEgMCBhdXRvOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uO2hlaWdodDphdXRvO2JvcmRlci13aWR0aDp2YXIoLS1ib3JkZXItd2lkdGgpO2JvcmRlci1zdHlsZTp2YXIoLS1ib3JkZXItc3R5bGUpO2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29sb3I6dmFyKC0tY29sb3IpO3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjstd2Via2l0LWZvbnQta2VybmluZzpub25lO2ZvbnQta2VybmluZzpub25lfTpob3N0KDpmaXJzdC1vZi10eXBlKXtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpmaXJzdC1vZi10eXBlLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KDpmaXJzdC1vZi10eXBlKXtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfTpob3N0KDpub3QoOmZpcnN0LW9mLXR5cGUpKXtib3JkZXItbGVmdC13aWR0aDowfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KDpub3QoOmZpcnN0LW9mLXR5cGUpKSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6bm90KDpmaXJzdC1vZi10eXBlKXtib3JkZXItcmlnaHQtd2lkdGg6MDtib3JkZXItbGVmdC13aWR0aDp2YXIoLS1ib3JkZXItd2lkdGgpfTpob3N0KDpsYXN0LW9mLXR5cGUpe2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjB9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoOmxhc3Qtb2YtdHlwZSksOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmxhc3Qtb2YtdHlwZXtib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpfS5idXR0b24tbmF0aXZle2JvcmRlci1yYWRpdXM6aW5oZXJpdDtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDttYXJnaW4tbGVmdDp2YXIoLS1tYXJnaW4tc3RhcnQpO21hcmdpbi1yaWdodDp2YXIoLS1tYXJnaW4tZW5kKTttYXJnaW4tdG9wOnZhcigtLW1hcmdpbi10b3ApO21hcmdpbi1ib3R0b206dmFyKC0tbWFyZ2luLWJvdHRvbSk7cGFkZGluZy1sZWZ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctcmlnaHQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtZGlyZWN0aW9uOmluaGVyaXQ7ZmxleC1kaXJlY3Rpb246aW5oZXJpdDstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO21pbi13aWR0aDppbmhlcml0O21heC13aWR0aDppbmhlcml0O2hlaWdodDphdXRvO21pbi1oZWlnaHQ6aW5oZXJpdDttYXgtaGVpZ2h0OmluaGVyaXQ7LXdlYmtpdC10cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO3RyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7Ym9yZGVyOm5vbmU7b3V0bGluZTpub25lO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29udGFpbjpjb250ZW50O2N1cnNvcjpwb2ludGVyfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYnV0dG9uLW5hdGl2ZXttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6dmFyKC0tbWFyZ2luLXN0YXJ0KTttYXJnaW4taW5saW5lLXN0YXJ0OnZhcigtLW1hcmdpbi1zdGFydCk7LXdlYmtpdC1tYXJnaW4tZW5kOnZhcigtLW1hcmdpbi1lbmQpO21hcmdpbi1pbmxpbmUtZW5kOnZhcigtLW1hcmdpbi1lbmQpO3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpfX0uc2VnbWVudC1idXR0b24taW5kaWNhdG9yey1tcy1mbGV4LWl0ZW0tYWxpZ246ZW5kO2FsaWduLXNlbGY6ZmxleC1lbmQ7d2lkdGg6MTAwJTtoZWlnaHQ6MnB4O2JhY2tncm91bmQtY29sb3I6dmFyKC0taW5kaWNhdG9yLWNvbG9yKTtvcGFjaXR5OjF9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQpe2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1jaGVja2VkKTtjb2xvcjp2YXIoLS1jb2xvci1jaGVja2VkKX06aG9zdCguc2VnbWVudC1idXR0b24tY2hlY2tlZCkgLnNlZ21lbnQtYnV0dG9uLWluZGljYXRvcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWluZGljYXRvci1jb2xvci1jaGVja2VkLHZhcigtLWNvbG9yLWNoZWNrZWQpKX06aG9zdCguYWN0aXZhdGVkKXtjb2xvcjp2YXIoLS1jb2xvci1hY3RpdmF0ZWQsdmFyKC0tY29sb3IpKX06aG9zdCguc2VnbWVudC1idXR0b24tZGlzYWJsZWQpe2NvbG9yOnZhcigtLWNvbG9yLWRpc2FibGVkKX06aG9zdCguc2VnbWVudC1idXR0b24tZGlzYWJsZWQuc2VnbWVudC1idXR0b24tY2hlY2tlZCl7Y29sb3I6dmFyKC0tY29sb3ItY2hlY2tlZC1kaXNhYmxlZCl9OjpzbG90dGVkKGlvbi1pY29uKXstbXMtZmxleC1vcmRlcjotMTtvcmRlcjotMX06OnNsb3R0ZWQoaW9uLWxhYmVsKXtkaXNwbGF5OmJsb2NrOy1tcy1mbGV4LWl0ZW0tYWxpZ246Y2VudGVyO2FsaWduLXNlbGY6Y2VudGVyO2xpbmUtaGVpZ2h0OjIycHg7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi1zdGFydCkgLmJ1dHRvbi1uYXRpdmV7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWxheW91dC1pY29uLWVuZCkgLmJ1dHRvbi1uYXRpdmV7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlO2ZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlfTpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi1ib3R0b20pIC5idXR0b24tbmF0aXZley1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZTtmbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZX06aG9zdCguc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24taGlkZSkgOjpzbG90dGVkKGlvbi1pY29uKSw6aG9zdCguc2VnbWVudC1idXR0b24tbGF5b3V0LWxhYmVsLWhpZGUpIDo6c2xvdHRlZChpb24tbGFiZWwpe2Rpc3BsYXk6bm9uZX1pb24tcmlwcGxlLWVmZmVjdHtjb2xvcjp2YXIoLS1yaXBwbGUtY29sb3IsdmFyKC0tY29sb3ItY2hlY2tlZCkpfTpob3N0ey0tYm9yZGVyLXJhZGl1czo0cHg7LS1ib3JkZXItd2lkdGg6MXB4Oy0tYm9yZGVyLXN0eWxlOnNvbGlkOy0tdHJhbnNpdGlvbjoxMDBtcyBhbGwgbGluZWFyO21pbi1oZWlnaHQ6MjRweDtmb250LXNpemU6MTNweDtsaW5lLWhlaWdodDozN3B4fS5zZWdtZW50LWJ1dHRvbi1pbmRpY2F0b3J7ZGlzcGxheTpub25lfTo6c2xvdHRlZChpb24taWNvbil7Zm9udC1zaXplOjI0cHh9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWxheW91dC1pY29uLXN0YXJ0KSA6OnNsb3R0ZWQoaW9uLWxhYmVsKXttYXJnaW4tbGVmdDoycHg7bWFyZ2luLXJpZ2h0OjB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi1zdGFydCkgOjpzbG90dGVkKGlvbi1sYWJlbCl7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjJweDttYXJnaW4taW5saW5lLXN0YXJ0OjJweDstd2Via2l0LW1hcmdpbi1lbmQ6MDttYXJnaW4taW5saW5lLWVuZDowfX06aG9zdCguc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tZW5kKSA6OnNsb3R0ZWQoaW9uLWxhYmVsKXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDoycHh9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi1lbmQpIDo6c2xvdHRlZChpb24tbGFiZWwpe21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MDstd2Via2l0LW1hcmdpbi1lbmQ6MnB4O21hcmdpbi1pbmxpbmUtZW5kOjJweH19XFxAbWVkaWEgKGFueS1ob3Zlcjpob3Zlcil7Omhvc3QoOmhvdmVyOm5vdCguc2VnbWVudC1idXR0b24tY2hlY2tlZCkpe2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1ob3Zlcil9fTpob3N0KC5hY3RpdmF0ZWQpe2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQpfTpob3N0KC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkLmFjdGl2YXRlZCl7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWNoZWNrZWQpO2NvbG9yOnZhcigtLWNvbG9yLWNoZWNrZWQpfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gU2VnbWVudEJ1dHRvbjtcbn0oKSk7XG5leHBvcnQgeyBTZWdtZW50IGFzIGlvbl9zZWdtZW50LCBTZWdtZW50QnV0dG9uIGFzIGlvbl9zZWdtZW50X2J1dHRvbiB9O1xuIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xudmFyIGhvc3RDb250ZXh0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBlbCkge1xuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcbn07XG4vKipcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cbiAqL1xudmFyIGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyAoX2EgPSB7XG4gICAgICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBfYVtcImlvbi1jb2xvci1cIiArIGNvbG9yXSA9IHRydWUsXG4gICAgICAgIF9hKSA6IHVuZGVmaW5lZDtcbn07XG52YXIgZ2V0Q2xhc3NMaXN0ID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT0gbnVsbDsgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudHJpbSgpOyB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPT0gJyc7IH0pO1xuICAgIH1cbiAgICByZXR1cm4gW107XG59O1xudmFyIGdldENsYXNzTWFwID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG1hcFtjXSA9IHRydWU7IH0pO1xuICAgIHJldHVybiBtYXA7XG59O1xudmFyIFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xudmFyIG9wZW5VUkwgPSBmdW5jdGlvbiAodXJsLCBldiwgZGlyZWN0aW9uKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByb3V0ZXI7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcbiAgICAgICAgICAgIHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcbiAgICAgICAgICAgIGlmIChyb3V0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgIH0pO1xufSk7IH07XG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9