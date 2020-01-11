(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-segment_2-md.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-segment_2-md.entry.js ***!
  \*************************************************************************/
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
        get: function () { return ".sc-ion-segment-md-h{--indicator-color-checked:initial;--ripple-color:currentColor;--color-activated:initial;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;font-family:var(--ion-font-family,inherit);text-align:center}.sc-ion-segment-md-s > .segment-button-disabled, .segment-disabled.sc-ion-segment-md-h{pointer-events:none}.segment-scrollable.sc-ion-segment-md-h{-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:scroll}.segment-scrollable.sc-ion-segment-md-h::-webkit-scrollbar{display:none}.sc-ion-segment-md-h{--background:none;--background-checked:none;--background-hover:rgba(var(--ion-color-primary-rgb,56,128,255),0.04);--background-activated:rgba(var(--ion-color-primary-rgb,56,128,255),0.16);--color:rgba(var(--ion-text-color-rgb,0,0,0),0.6);--color-checked:var(--ion-color-primary,#3880ff);--color-checked-disabled:var(--color-checked);--indicator-color:transparent}.segment-disabled.sc-ion-segment-md-h{opacity:.3}.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > ion-segment-button{--background-activated:rgba(var(--ion-color-base-rgb),0.16);--ripple-color:var(--ion-color-base);background:transparent;color:rgba(var(--ion-text-color-rgb,0,0,0),.6)}.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > .segment-button-checked{--indicator-color-checked:var(--ion-color-base);color:var(--ion-color-base)}.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > .segment-button-checked.activated{color:var(--ion-color-base)}\@media (any-hover:hover){.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > ion-segment-button:hover{background:rgba(var(--ion-color-base-rgb),.04)}}.sc-ion-segment-md-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-md-s > ion-segment-button, ion-toolbar:not(.ion-color) .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > ion-segment-button{color:var(--ion-toolbar-color-unchecked,var(--color))}.sc-ion-segment-md-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-md-s > .segment-button-checked, ion-toolbar:not(.ion-color) .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > .segment-button-checked{--indicator-color-checked:var(--ion-toolbar-color-checked,var(--color-checked));color:var(--ion-toolbar-color-checked,var(--color-checked))}.sc-ion-segment-md-hion-toolbar.ion-color:not(.ion-color).sc-ion-segment-md-s > ion-segment-button, ion-toolbar.ion-color .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > ion-segment-button{--background-hover:rgba(var(--ion-color-contrast-rgb),0.04);--background-activated:var(--ion-color-base);--color:rgba(var(--ion-color-contrast-rgb),0.6);--color-checked:var(--ion-color-contrast);--indicator-color-checked:var(--ion-color-contrast)}"; },
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
        get: function () { return ":host{--padding-start:0;--padding-end:0;display:-ms-flexbox;display:flex;-ms-flex:1 0 auto;flex:1 0 auto;-ms-flex-direction:column;flex-direction:column;height:auto;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-font-kerning:none;font-kerning:none}:host(:first-of-type){border-top-left-radius:var(--border-radius);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--border-radius)}:host-context([dir=rtl]):first-of-type,:host-context([dir=rtl]):host(:first-of-type){border-top-left-radius:0;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0}:host(:not(:first-of-type)){border-left-width:0}:host-context([dir=rtl]):host(:not(:first-of-type)),:host-context([dir=rtl]):not(:first-of-type){border-right-width:0;border-left-width:var(--border-width)}:host(:last-of-type){border-top-left-radius:0;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0}:host-context([dir=rtl]):host(:last-of-type),:host-context([dir=rtl]):last-of-type{border-top-left-radius:var(--border-radius);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--border-radius)}.button-native{border-radius:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;cursor:pointer}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.segment-button-indicator{-ms-flex-item-align:end;align-self:flex-end;width:100%;height:2px;background-color:var(--indicator-color);opacity:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-checked) .segment-button-indicator{background-color:var(--indicator-color-checked,var(--color-checked))}:host(.activated){color:var(--color-activated,var(--color))}:host(.segment-button-disabled){color:var(--color-disabled)}:host(.segment-button-disabled.segment-button-checked){color:var(--color-checked-disabled)}::slotted(ion-icon){-ms-flex-order:-1;order:-1}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon),:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color,var(--color-checked))}:host{--padding-top:0;--padding-end:16px;--padding-bottom:0;--padding-start:16px;--transition:color 0.15s linear 0s,opacity 0.15s linear 0s;min-width:90px;max-width:360px;min-height:48px;font-size:14px;font-weight:500;letter-spacing:.06em;line-height:40px;text-transform:uppercase}:host(.activated),:host(.segment-button-checked){--border-color:var(--ion-color-primary,#3880ff);opacity:1}:host(.segment-button-disabled){opacity:.3}::slotted(ion-icon){font-size:24px}::slotted(ion-icon),::slotted(ion-label){margin-top:12px;margin-bottom:12px}:host(.segment-button-layout-icon-bottom) ::slotted(ion-icon),:host(.segment-button-layout-icon-top) ::slotted(ion-label){margin-top:0}:host(.segment-button-layout-icon-bottom) ::slotted(ion-label),:host(.segment-button-layout-icon-top) ::slotted(ion-icon){margin-bottom:0}:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:8px;margin-right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0}}:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:0;margin-right:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.segment-button-has-icon-only) ::slotted(ion-icon),:host(.segment-button-has-label-only) ::slotted(ion-label){margin-top:12px;margin-bottom:12px}:host(.segment-button-checked.activated){color:var(--color-checked)}\@media (any-hover:hover){:host(:hover){background:var(--background-hover)}}"; },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1zZWdtZW50XzItbWQuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLWVzNS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZIO0FBQy9GO0FBQ2dDO0FBQzlEO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkRBQVc7QUFDcEMsd0JBQXdCLDJEQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxrQkFBa0IsRUFBRTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsZ0JBQWdCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBVTtBQUM3QixnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLHNDQUFzQyxFQUFFLDREQUFrQix1QkFBdUIsNkdBQTZHO0FBQ3ZOO0FBQ0E7QUFDQSwwQkFBMEIsUUFBUSwyREFBVSxPQUFPLEVBQUU7QUFDckQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsOEJBQThCLGtDQUFrQyw0QkFBNEIsMEJBQTBCLGtDQUFrQyxtQ0FBbUMsb0JBQW9CLGFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHNCQUFzQixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxRQUFRLHVEQUFTO0FBQzlEO0FBQ0EsV0FBVyx5REFBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDa0YiLCJmaWxlIjoiNzAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBkIGFzIGNyZWF0ZUV2ZW50LCBjIGFzIGdldElvbk1vZGUsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWZlZWVmZjBkLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcbnZhciBTZWdtZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlZ21lbnQoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmRpZEluaXQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIHNlZ21lbnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBzZWdtZW50IGJ1dHRvbnMgd2lsbCBvdmVyZmxvdyBhbmQgdGhlIHVzZXIgY2FuIHN3aXBlIHRvIHNlZSB0aGVtLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zY3JvbGxhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DaGFuZ2VcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblN0eWxlXCIsIDcpO1xuICAgIH1cbiAgICBTZWdtZW50LnByb3RvdHlwZS52YWx1ZUNoYW5nZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlkSW5pdCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVCdXR0b25zKCk7XG4gICAgICAgICAgICB0aGlzLmlvbkNoYW5nZS5lbWl0KHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTZWdtZW50LnByb3RvdHlwZS5zZWdtZW50Q2xpY2sgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkQnV0dG9uID0gZXYudGFyZ2V0O1xuICAgICAgICB0aGlzLnZhbHVlID0gc2VsZWN0ZWRCdXR0b24udmFsdWU7XG4gICAgfTtcbiAgICBTZWdtZW50LnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGNoZWNrZWQgPSB0aGlzLmdldEJ1dHRvbnMoKS5maW5kKGZ1bmN0aW9uIChiKSB7IHJldHVybiBiLmNoZWNrZWQ7IH0pO1xuICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gY2hlY2tlZC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgIH07XG4gICAgU2VnbWVudC5wcm90b3R5cGUuY29tcG9uZW50RGlkTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVCdXR0b25zKCk7XG4gICAgICAgIHRoaXMuZGlkSW5pdCA9IHRydWU7XG4gICAgfTtcbiAgICBTZWdtZW50LnByb3RvdHlwZS5lbWl0U3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUuZW1pdCh7XG4gICAgICAgICAgICAnc2VnbWVudCc6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTZWdtZW50LnByb3RvdHlwZS51cGRhdGVCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5nZXRCdXR0b25zKCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgYnV0dG9uID0gX2FbX2ldO1xuICAgICAgICAgICAgYnV0dG9uLmNoZWNrZWQgPSAoYnV0dG9uLnZhbHVlID09PSB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNlZ21lbnQucHJvdG90eXBlLmdldEJ1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnaW9uLXNlZ21lbnQtYnV0dG9uJykpO1xuICAgIH07XG4gICAgU2VnbWVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpKSwgKF9hID0ge30sIF9hW21vZGVdID0gdHJ1ZSwgX2FbJ3NlZ21lbnQtZGlzYWJsZWQnXSA9IHRoaXMuZGlzYWJsZWQsIF9hWydzZWdtZW50LXNjcm9sbGFibGUnXSA9IHRoaXMuc2Nyb2xsYWJsZSwgX2EpKSB9KSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VnbWVudC5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50LCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogW1widmFsdWVDaGFuZ2VkXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VnbWVudCwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCIuc2MtaW9uLXNlZ21lbnQtbWQtaHstLWluZGljYXRvci1jb2xvci1jaGVja2VkOmluaXRpYWw7LS1yaXBwbGUtY29sb3I6Y3VycmVudENvbG9yOy0tY29sb3ItYWN0aXZhdGVkOmluaXRpYWw7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246c3RyZXRjaDthbGlnbi1pdGVtczpzdHJldGNoOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCk7dGV4dC1hbGlnbjpjZW50ZXJ9LnNjLWlvbi1zZWdtZW50LW1kLXMgPiAuc2VnbWVudC1idXR0b24tZGlzYWJsZWQsIC5zZWdtZW50LWRpc2FibGVkLnNjLWlvbi1zZWdtZW50LW1kLWh7cG9pbnRlci1ldmVudHM6bm9uZX0uc2VnbWVudC1zY3JvbGxhYmxlLnNjLWlvbi1zZWdtZW50LW1kLWh7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6c3RhcnQ7d2lkdGg6YXV0bztvdmVyZmxvdy14OnNjcm9sbH0uc2VnbWVudC1zY3JvbGxhYmxlLnNjLWlvbi1zZWdtZW50LW1kLWg6Oi13ZWJraXQtc2Nyb2xsYmFye2Rpc3BsYXk6bm9uZX0uc2MtaW9uLXNlZ21lbnQtbWQtaHstLWJhY2tncm91bmQ6bm9uZTstLWJhY2tncm91bmQtY2hlY2tlZDpub25lOy0tYmFja2dyb3VuZC1ob3ZlcjpyZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiw1NiwxMjgsMjU1KSwwLjA0KTstLWJhY2tncm91bmQtYWN0aXZhdGVkOnJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLDU2LDEyOCwyNTUpLDAuMTYpOy0tY29sb3I6cmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLDAuNik7LS1jb2xvci1jaGVja2VkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpOy0tY29sb3ItY2hlY2tlZC1kaXNhYmxlZDp2YXIoLS1jb2xvci1jaGVja2VkKTstLWluZGljYXRvci1jb2xvcjp0cmFuc3BhcmVudH0uc2VnbWVudC1kaXNhYmxlZC5zYy1pb24tc2VnbWVudC1tZC1oe29wYWNpdHk6LjN9LnNjLWlvbi1zZWdtZW50LW1kLWguaW9uLWNvbG9yLnNjLWlvbi1zZWdtZW50LW1kLXMgPiBpb24tc2VnbWVudC1idXR0b257LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1iYXNlLXJnYiksMC4xNik7LS1yaXBwbGUtY29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6cmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC42KX0uc2MtaW9uLXNlZ21lbnQtbWQtaC5pb24tY29sb3Iuc2MtaW9uLXNlZ21lbnQtbWQtcyA+IC5zZWdtZW50LWJ1dHRvbi1jaGVja2Vkey0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX0uc2MtaW9uLXNlZ21lbnQtbWQtaC5pb24tY29sb3Iuc2MtaW9uLXNlZ21lbnQtbWQtcyA+IC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkLmFjdGl2YXRlZHtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9XFxAbWVkaWEgKGFueS1ob3Zlcjpob3Zlcil7LnNjLWlvbi1zZWdtZW50LW1kLWguaW9uLWNvbG9yLnNjLWlvbi1zZWdtZW50LW1kLXMgPiBpb24tc2VnbWVudC1idXR0b246aG92ZXJ7YmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1iYXNlLXJnYiksLjA0KX19LnNjLWlvbi1zZWdtZW50LW1kLWhpb24tdG9vbGJhcjpub3QoLmlvbi1jb2xvcik6bm90KC5pb24tY29sb3IpLnNjLWlvbi1zZWdtZW50LW1kLXMgPiBpb24tc2VnbWVudC1idXR0b24sIGlvbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKSAuc2MtaW9uLXNlZ21lbnQtbWQtaDpub3QoLmlvbi1jb2xvcikuc2MtaW9uLXNlZ21lbnQtbWQtcyA+IGlvbi1zZWdtZW50LWJ1dHRvbntjb2xvcjp2YXIoLS1pb24tdG9vbGJhci1jb2xvci11bmNoZWNrZWQsdmFyKC0tY29sb3IpKX0uc2MtaW9uLXNlZ21lbnQtbWQtaGlvbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKTpub3QoLmlvbi1jb2xvcikuc2MtaW9uLXNlZ21lbnQtbWQtcyA+IC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkLCBpb24tdG9vbGJhcjpub3QoLmlvbi1jb2xvcikgLnNjLWlvbi1zZWdtZW50LW1kLWg6bm90KC5pb24tY29sb3IpLnNjLWlvbi1zZWdtZW50LW1kLXMgPiAuc2VnbWVudC1idXR0b24tY2hlY2tlZHstLWluZGljYXRvci1jb2xvci1jaGVja2VkOnZhcigtLWlvbi10b29sYmFyLWNvbG9yLWNoZWNrZWQsdmFyKC0tY29sb3ItY2hlY2tlZCkpO2NvbG9yOnZhcigtLWlvbi10b29sYmFyLWNvbG9yLWNoZWNrZWQsdmFyKC0tY29sb3ItY2hlY2tlZCkpfS5zYy1pb24tc2VnbWVudC1tZC1oaW9uLXRvb2xiYXIuaW9uLWNvbG9yOm5vdCguaW9uLWNvbG9yKS5zYy1pb24tc2VnbWVudC1tZC1zID4gaW9uLXNlZ21lbnQtYnV0dG9uLCBpb24tdG9vbGJhci5pb24tY29sb3IgLnNjLWlvbi1zZWdtZW50LW1kLWg6bm90KC5pb24tY29sb3IpLnNjLWlvbi1zZWdtZW50LW1kLXMgPiBpb24tc2VnbWVudC1idXR0b257LS1iYWNrZ3JvdW5kLWhvdmVyOnJnYmEodmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYiksMC4wNCk7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7LS1jb2xvcjpyZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLDAuNik7LS1jb2xvci1jaGVja2VkOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCk7LS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gU2VnbWVudDtcbn0oKSk7XG52YXIgaWRzID0gMDtcbnZhciBTZWdtZW50QnV0dG9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlZ21lbnRCdXR0b24oaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgc2VnbWVudCBidXR0b24gaXMgc2VsZWN0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIHNlZ21lbnQgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSBsYXlvdXQgb2YgdGhlIHRleHQgYW5kIGljb24gaW4gdGhlIHNlZ21lbnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxheW91dCA9ICdpY29uLXRvcCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBvZiB0aGUgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmFsdWUgb2YgdGhlIHNlZ21lbnQgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52YWx1ZSA9ICdpb24tc2ItJyArIChpZHMrKyk7XG4gICAgICAgIHRoaXMub25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlvblNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU2VsZWN0XCIsIDcpO1xuICAgIH1cbiAgICBTZWdtZW50QnV0dG9uLnByb3RvdHlwZS5jaGVja2VkQ2hhbmdlZCA9IGZ1bmN0aW9uIChjaGVja2VkLCBwcmV2KSB7XG4gICAgICAgIGlmIChjaGVja2VkICYmICFwcmV2KSB7XG4gICAgICAgICAgICB0aGlzLmlvblNlbGVjdC5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50QnV0dG9uLnByb3RvdHlwZSwgXCJoYXNMYWJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICEhdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpb24tbGFiZWwnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlZ21lbnRCdXR0b24ucHJvdG90eXBlLCBcImhhc0ljb25cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAhIXRoaXMuZWwucXVlcnlTZWxlY3RvcignaW9uLWljb24nKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgU2VnbWVudEJ1dHRvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBfYiA9IHRoaXMsIGNoZWNrZWQgPSBfYi5jaGVja2VkLCB0eXBlID0gX2IudHlwZSwgZGlzYWJsZWQgPSBfYi5kaXNhYmxlZCwgaGFzSWNvbiA9IF9iLmhhc0ljb24sIGhhc0xhYmVsID0gX2IuaGFzTGFiZWwsIGxheW91dCA9IF9iLmxheW91dDtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/ICd0cnVlJyA6IG51bGwsIGNsYXNzOiAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVttb2RlXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2FbJ3NlZ21lbnQtYnV0dG9uLWhhcy1sYWJlbCddID0gaGFzTGFiZWwsXG4gICAgICAgICAgICAgICAgX2FbJ3NlZ21lbnQtYnV0dG9uLWhhcy1pY29uJ10gPSBoYXNJY29uLFxuICAgICAgICAgICAgICAgIF9hWydzZWdtZW50LWJ1dHRvbi1oYXMtbGFiZWwtb25seSddID0gaGFzTGFiZWwgJiYgIWhhc0ljb24sXG4gICAgICAgICAgICAgICAgX2FbJ3NlZ21lbnQtYnV0dG9uLWhhcy1pY29uLW9ubHknXSA9IGhhc0ljb24gJiYgIWhhc0xhYmVsLFxuICAgICAgICAgICAgICAgIF9hWydzZWdtZW50LWJ1dHRvbi1kaXNhYmxlZCddID0gZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgX2FbJ3NlZ21lbnQtYnV0dG9uLWNoZWNrZWQnXSA9IGNoZWNrZWQsXG4gICAgICAgICAgICAgICAgX2FbXCJzZWdtZW50LWJ1dHRvbi1sYXlvdXQtXCIgKyBsYXlvdXRdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYVsnaW9uLWFjdGl2YXRhYmxlJ10gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hWydpb24tYWN0aXZhdGFibGUtaW5zdGFudCddID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYSkgfSwgaChcImJ1dHRvblwiLCB7IHR5cGU6IHR5cGUsIFwiYXJpYS1wcmVzc2VkXCI6IGNoZWNrZWQgPyAndHJ1ZScgOiBudWxsLCBjbGFzczogXCJidXR0b24tbmF0aXZlXCIsIGRpc2FibGVkOiBkaXNhYmxlZCB9LCBoKFwic2xvdFwiLCBudWxsKSwgbW9kZSA9PT0gJ21kJyAmJiBoKFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwgbnVsbCkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwic2VnbWVudC1idXR0b24taW5kaWNhdG9yXCIgfSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50QnV0dG9uLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlZ21lbnRCdXR0b24sIFwid2F0Y2hlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJjaGVja2VkXCI6IFtcImNoZWNrZWRDaGFuZ2VkXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VnbWVudEJ1dHRvbiwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCI6aG9zdHstLXBhZGRpbmctc3RhcnQ6MDstLXBhZGRpbmctZW5kOjA7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXg6MSAwIGF1dG87ZmxleDoxIDAgYXV0bzstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtoZWlnaHQ6YXV0bztib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKTt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC1mb250LWtlcm5pbmc6bm9uZTtmb250LWtlcm5pbmc6bm9uZX06aG9zdCg6Zmlyc3Qtb2YtdHlwZSl7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6Zmlyc3Qtb2YtdHlwZSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCg6Zmlyc3Qtb2YtdHlwZSl7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MH06aG9zdCg6bm90KDpmaXJzdC1vZi10eXBlKSl7Ym9yZGVyLWxlZnQtd2lkdGg6MH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCg6bm90KDpmaXJzdC1vZi10eXBlKSksOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOm5vdCg6Zmlyc3Qtb2YtdHlwZSl7Ym9yZGVyLXJpZ2h0LXdpZHRoOjA7Ym9yZGVyLWxlZnQtd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKX06aG9zdCg6bGFzdC1vZi10eXBlKXtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KDpsYXN0LW9mLXR5cGUpLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpsYXN0LW9mLXR5cGV7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKX0uYnV0dG9uLW5hdGl2ZXtib3JkZXItcmFkaXVzOmluaGVyaXQ7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsZXR0ZXItc3BhY2luZzppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3RleHQtYWxpZ246aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O2NvbG9yOmluaGVyaXQ7bWFyZ2luLWxlZnQ6dmFyKC0tbWFyZ2luLXN0YXJ0KTttYXJnaW4tcmlnaHQ6dmFyKC0tbWFyZ2luLWVuZCk7bWFyZ2luLXRvcDp2YXIoLS1tYXJnaW4tdG9wKTttYXJnaW4tYm90dG9tOnZhcigtLW1hcmdpbi1ib3R0b20pO3BhZGRpbmctbGVmdDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLXJpZ2h0OnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDp2YXIoLS1wYWRkaW5nLXRvcCk7cGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy1ib3R0b20pO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LWRpcmVjdGlvbjppbmhlcml0O2ZsZXgtZGlyZWN0aW9uOmluaGVyaXQ7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTttaW4td2lkdGg6aW5oZXJpdDttYXgtd2lkdGg6aW5oZXJpdDtoZWlnaHQ6YXV0bzttaW4taGVpZ2h0OmluaGVyaXQ7bWF4LWhlaWdodDppbmhlcml0Oy13ZWJraXQtdHJhbnNpdGlvbjp2YXIoLS10cmFuc2l0aW9uKTt0cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO2JvcmRlcjpub25lO291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbnRhaW46Y29udGVudDtjdXJzb3I6cG9pbnRlcn1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmJ1dHRvbi1uYXRpdmV7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OnZhcigtLW1hcmdpbi1zdGFydCk7bWFyZ2luLWlubGluZS1zdGFydDp2YXIoLS1tYXJnaW4tc3RhcnQpOy13ZWJraXQtbWFyZ2luLWVuZDp2YXIoLS1tYXJnaW4tZW5kKTttYXJnaW4taW5saW5lLWVuZDp2YXIoLS1tYXJnaW4tZW5kKTtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKX19LnNlZ21lbnQtYnV0dG9uLWluZGljYXRvcnstbXMtZmxleC1pdGVtLWFsaWduOmVuZDthbGlnbi1zZWxmOmZsZXgtZW5kO3dpZHRoOjEwMCU7aGVpZ2h0OjJweDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWluZGljYXRvci1jb2xvcik7b3BhY2l0eToxfTpob3N0KC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkKXtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtY2hlY2tlZCk7Y29sb3I6dmFyKC0tY29sb3ItY2hlY2tlZCl9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQpIC5zZWdtZW50LWJ1dHRvbi1pbmRpY2F0b3J7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZCx2YXIoLS1jb2xvci1jaGVja2VkKSl9Omhvc3QoLmFjdGl2YXRlZCl7Y29sb3I6dmFyKC0tY29sb3ItYWN0aXZhdGVkLHZhcigtLWNvbG9yKSl9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWRpc2FibGVkKXtjb2xvcjp2YXIoLS1jb2xvci1kaXNhYmxlZCl9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWRpc2FibGVkLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQpe2NvbG9yOnZhcigtLWNvbG9yLWNoZWNrZWQtZGlzYWJsZWQpfTo6c2xvdHRlZChpb24taWNvbil7LW1zLWZsZXgtb3JkZXI6LTE7b3JkZXI6LTF9OjpzbG90dGVkKGlvbi1sYWJlbCl7ZGlzcGxheTpibG9jazstbXMtZmxleC1pdGVtLWFsaWduOmNlbnRlcjthbGlnbi1zZWxmOmNlbnRlcjtsaW5lLWhlaWdodDoyMnB4O3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdCguc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tc3RhcnQpIC5idXR0b24tbmF0aXZley1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fTpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi1lbmQpIC5idXR0b24tbmF0aXZley1tcy1mbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZTtmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZX06aG9zdCguc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tYm90dG9tKSAuYnV0dG9uLW5hdGl2ZXstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uLXJldmVyc2U7ZmxleC1kaXJlY3Rpb246Y29sdW1uLXJldmVyc2V9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWxheW91dC1pY29uLWhpZGUpIDo6c2xvdHRlZChpb24taWNvbiksOmhvc3QoLnNlZ21lbnQtYnV0dG9uLWxheW91dC1sYWJlbC1oaWRlKSA6OnNsb3R0ZWQoaW9uLWxhYmVsKXtkaXNwbGF5Om5vbmV9aW9uLXJpcHBsZS1lZmZlY3R7Y29sb3I6dmFyKC0tcmlwcGxlLWNvbG9yLHZhcigtLWNvbG9yLWNoZWNrZWQpKX06aG9zdHstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWVuZDoxNnB4Oy0tcGFkZGluZy1ib3R0b206MDstLXBhZGRpbmctc3RhcnQ6MTZweDstLXRyYW5zaXRpb246Y29sb3IgMC4xNXMgbGluZWFyIDBzLG9wYWNpdHkgMC4xNXMgbGluZWFyIDBzO21pbi13aWR0aDo5MHB4O21heC13aWR0aDozNjBweDttaW4taGVpZ2h0OjQ4cHg7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwO2xldHRlci1zcGFjaW5nOi4wNmVtO2xpbmUtaGVpZ2h0OjQwcHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfTpob3N0KC5hY3RpdmF0ZWQpLDpob3N0KC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkKXstLWJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTtvcGFjaXR5OjF9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWRpc2FibGVkKXtvcGFjaXR5Oi4zfTo6c2xvdHRlZChpb24taWNvbil7Zm9udC1zaXplOjI0cHh9OjpzbG90dGVkKGlvbi1pY29uKSw6OnNsb3R0ZWQoaW9uLWxhYmVsKXttYXJnaW4tdG9wOjEycHg7bWFyZ2luLWJvdHRvbToxMnB4fTpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi1ib3R0b20pIDo6c2xvdHRlZChpb24taWNvbiksOmhvc3QoLnNlZ21lbnQtYnV0dG9uLWxheW91dC1pY29uLXRvcCkgOjpzbG90dGVkKGlvbi1sYWJlbCl7bWFyZ2luLXRvcDowfTpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi1ib3R0b20pIDo6c2xvdHRlZChpb24tbGFiZWwpLDpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi10b3ApIDo6c2xvdHRlZChpb24taWNvbil7bWFyZ2luLWJvdHRvbTowfTpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi1zdGFydCkgOjpzbG90dGVkKGlvbi1sYWJlbCl7bWFyZ2luLWxlZnQ6OHB4O21hcmdpbi1yaWdodDowfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdCguc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tc3RhcnQpIDo6c2xvdHRlZChpb24tbGFiZWwpe21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDo4cHg7bWFyZ2luLWlubGluZS1zdGFydDo4cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjA7bWFyZ2luLWlubGluZS1lbmQ6MH19Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWxheW91dC1pY29uLWVuZCkgOjpzbG90dGVkKGlvbi1sYWJlbCl7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6OHB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdCguc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tZW5kKSA6OnNsb3R0ZWQoaW9uLWxhYmVsKXttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjA7LXdlYmtpdC1tYXJnaW4tZW5kOjhweDttYXJnaW4taW5saW5lLWVuZDo4cHh9fTpob3N0KC5zZWdtZW50LWJ1dHRvbi1oYXMtaWNvbi1vbmx5KSA6OnNsb3R0ZWQoaW9uLWljb24pLDpob3N0KC5zZWdtZW50LWJ1dHRvbi1oYXMtbGFiZWwtb25seSkgOjpzbG90dGVkKGlvbi1sYWJlbCl7bWFyZ2luLXRvcDoxMnB4O21hcmdpbi1ib3R0b206MTJweH06aG9zdCguc2VnbWVudC1idXR0b24tY2hlY2tlZC5hY3RpdmF0ZWQpe2NvbG9yOnZhcigtLWNvbG9yLWNoZWNrZWQpfVxcQG1lZGlhIChhbnktaG92ZXI6aG92ZXIpezpob3N0KDpob3Zlcil7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKX19XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBTZWdtZW50QnV0dG9uO1xufSgpKTtcbmV4cG9ydCB7IFNlZ21lbnQgYXMgaW9uX3NlZ21lbnQsIFNlZ21lbnRCdXR0b24gYXMgaW9uX3NlZ21lbnRfYnV0dG9uIH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG52YXIgaG9zdENvbnRleHQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGVsKSB7XG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xufTtcbi8qKlxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxuICovXG52YXIgY3JlYXRlQ29sb3JDbGFzc2VzID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IChfYSA9IHtcbiAgICAgICAgICAgICdpb24tY29sb3InOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIF9hW1wiaW9uLWNvbG9yLVwiICsgY29sb3JdID0gdHJ1ZSxcbiAgICAgICAgX2EpIDogdW5kZWZpbmVkO1xufTtcbnZhciBnZXRDbGFzc0xpc3QgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgIHJldHVybiBhcnJheVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPSBudWxsOyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50cmltKCk7IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSAnJzsgfSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbn07XG52YXIgZ2V0Q2xhc3NNYXAgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gbWFwW2NdID0gdHJ1ZTsgfSk7XG4gICAgcmV0dXJuIG1hcDtcbn07XG52YXIgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XG52YXIgb3BlblVSTCA9IGZ1bmN0aW9uICh1cmwsIGV2LCBkaXJlY3Rpb24pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvdXRlcjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgICAgICAgaWYgKHJvdXRlcikge1xuICAgICAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbildO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=