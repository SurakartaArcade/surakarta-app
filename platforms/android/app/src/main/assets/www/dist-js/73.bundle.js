(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-tab-bar_2-md.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-tab-bar_2-md.entry.js ***!
  \*************************************************************************/
/*! exports provided: ion_tab_bar, ion_tab_button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_tab_bar", function() { return TabBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_tab_button", function() { return TabButton; });
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");



var TabBar = /** @class */ (function () {
    function TabBar(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.keyboardVisible = false;
        /**
         * If `true`, the tab bar will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        this.ionTabBarChanged = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionTabBarChanged", 7);
    }
    TabBar.prototype.selectedTabChanged = function () {
        if (this.selectedTab !== undefined) {
            this.ionTabBarChanged.emit({
                tab: this.selectedTab
            });
        }
    };
    TabBar.prototype.onKeyboardWillHide = function () {
        var _this = this;
        setTimeout(function () { return _this.keyboardVisible = false; }, 50);
    };
    TabBar.prototype.onKeyboardWillShow = function () {
        if (this.el.getAttribute('slot') !== 'top') {
            this.keyboardVisible = true;
        }
    };
    TabBar.prototype.componentWillLoad = function () {
        this.selectedTabChanged();
    };
    TabBar.prototype.render = function () {
        var _a;
        var _b = this, color = _b.color, translucent = _b.translucent, keyboardVisible = _b.keyboardVisible;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "tablist", "aria-hidden": keyboardVisible ? 'true' : null, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(color)), (_a = {}, _a[mode] = true, _a['tab-bar-translucent'] = translucent, _a['tab-bar-hidden'] = keyboardVisible, _a)) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    Object.defineProperty(TabBar.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabBar, "watchers", {
        get: function () {
            return {
                "selectedTab": ["selectedTabChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabBar, "style", {
        get: function () { return ":host{padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom,0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb),.7);background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none!important}:host{--background:var(--ion-tab-bar-background,var(--ion-background-color,#fff));--background-focused:var(--ion-tab-bar-background-focused,#e0e0e0);--border:1px solid var(--ion-tab-bar-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.07))));--color:var(--ion-tab-bar-color,var(--ion-color-step-600,#666));--color-selected:var(--ion-tab-bar-color-activated,var(--ion-color-primary,#3880ff));height:56px}"; },
        enumerable: true,
        configurable: true
    });
    return TabBar;
}());
var TabButton = /** @class */ (function () {
    function TabButton(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * If `true`, the user cannot interact with the tab button.
         */
        this.disabled = false;
        /**
         * The selected tab component
         */
        this.selected = false;
        this.onKeyUp = function (ev) {
            if (ev.key === 'Enter' || ev.key === ' ') {
                _this.selectTab(ev);
            }
        };
        this.onClick = function (ev) {
            _this.selectTab(ev);
        };
        this.ionTabButtonClick = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionTabButtonClick", 7);
    }
    TabButton.prototype.onTabBarChanged = function (ev) {
        this.selected = this.tab === ev.detail.tab;
    };
    TabButton.prototype.componentWillLoad = function () {
        if (this.layout === undefined) {
            this.layout = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('tabButtonLayout', 'icon-top');
        }
    };
    TabButton.prototype.selectTab = function (ev) {
        if (this.tab !== undefined) {
            if (!this.disabled) {
                this.ionTabButtonClick.emit({
                    tab: this.tab,
                    href: this.href,
                    selected: this.selected
                });
            }
            ev.preventDefault();
        }
    };
    Object.defineProperty(TabButton.prototype, "hasLabel", {
        get: function () {
            return !!this.el.querySelector('ion-label');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabButton.prototype, "hasIcon", {
        get: function () {
            return !!this.el.querySelector('ion-icon');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabButton.prototype, "tabIndex", {
        get: function () {
            if (this.disabled) {
                return -1;
            }
            var hasTabIndex = this.el.hasAttribute('tabindex');
            if (hasTabIndex) {
                return this.el.getAttribute('tabindex');
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    TabButton.prototype.render = function () {
        var _a;
        var _b = this, disabled = _b.disabled, hasIcon = _b.hasIcon, hasLabel = _b.hasLabel, tabIndex = _b.tabIndex, href = _b.href, rel = _b.rel, target = _b.target, layout = _b.layout, selected = _b.selected, tab = _b.tab;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        var attrs = {
            download: this.download,
            href: href,
            rel: rel,
            target: target
        };
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, onKeyup: this.onKeyUp, role: "tab", tabindex: tabIndex, "aria-selected": selected ? 'true' : null, id: tab !== undefined ? "tab-button-" + tab : null, class: (_a = {},
                _a[mode] = true,
                _a['tab-selected'] = selected,
                _a['tab-disabled'] = disabled,
                _a['tab-has-label'] = hasLabel,
                _a['tab-has-icon'] = hasIcon,
                _a['tab-has-label-only'] = hasLabel && !hasIcon,
                _a['tab-has-icon-only'] = hasIcon && !hasLabel,
                _a["tab-layout-" + layout] = true,
                _a['ion-activatable'] = true,
                _a['ion-selectable'] = true,
                _a['ion-focusable'] = true,
                _a) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", Object.assign({}, attrs, { tabIndex: -1 }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), mode === 'md' && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", { type: "unbounded" }))));
    };
    Object.defineProperty(TabButton.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabButton, "style", {
        get: function () { return ":host{--ripple-color:var(--color-selected);-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background:var(--background);color:var(--color)}:host,a{height:100%;outline:none}a{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;border:0;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){a{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-focused){background:var(--background-focused)}\@media (any-hover:hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none!important}:host(.tab-disabled){pointer-events:none;opacity:.4}::slotted(ion-icon),::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon),:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:400;letter-spacing:.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;-webkit-transform-origin:center center;transform-origin:center center;font-size:22px}:host-context([dir=rtl]) ::slotted(ion-icon),[dir=rtl] ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}::slotted(ion-badge){border-radius:8px;padding-left:2px;padding-right:2px;padding-top:3px;padding-bottom:2px;left:calc(50% + 6px);top:8px;min-width:12px;font-size:8px;font-weight:400}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-badge){padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px}}:host-context([dir=rtl]) ::slotted(ion-badge),[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:70%;top:8px}:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:unset;right:unset;right:70%}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-end) ::slotted(ion-badge),:host(.tab-layout-icon-start) ::slotted(ion-badge){left:80%;top:16px}:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge){left:unset;right:unset;right:80%}:host(.tab-layout-icon-start) ::slotted(ion-icon){margin-right:6px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.tab-layout-icon-start) ::slotted(ion-icon){margin-right:unset;-webkit-margin-end:6px;margin-inline-end:6px}}:host(.tab-layout-icon-end) ::slotted(ion-icon){margin-left:6px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.tab-layout-icon-end) ::slotted(ion-icon){margin-left:unset;-webkit-margin-start:6px;margin-inline-start:6px}}:host(.tab-has-label-only) ::slotted(ion-badge),:host(.tab-layout-icon-hide) ::slotted(ion-badge){left:70%;top:16px}:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge){left:unset;right:unset;right:70%}:host(.tab-has-label-only) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-has-icon-only) ::slotted(ion-badge),:host(.tab-layout-label-hide) ::slotted(ion-badge){top:16px}:host(.tab-has-icon-only) ::slotted(ion-icon),:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}"; },
        enumerable: true,
        configurable: true
    });
    return TabButton;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi10YWItYmFyXzItbWQuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLWVzNS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZIO0FBQzFFO0FBQ1c7QUFDOUQ7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDJEQUFXO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msc0NBQXNDLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFVO0FBQzdCLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUcsdUdBQXVHLEVBQUUsNERBQWtCLGtCQUFrQiwwR0FBMEcsRUFBRSwyREFBQztBQUNuUjtBQUNBO0FBQ0EsMEJBQTBCLFFBQVEsMkRBQVUsT0FBTyxFQUFFO0FBQ3JEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGVBQWUsdUNBQXVDLHlDQUF5QyxvQkFBb0IsYUFBYSxzQkFBc0IsbUJBQW1CLHFCQUFxQix1QkFBdUIsV0FBVyw2Q0FBNkMseUJBQXlCLDZCQUE2QixtQkFBbUIsa0JBQWtCLGVBQWUseUJBQXlCLHNCQUFzQixxQkFBcUIsaUJBQWlCLFdBQVcseUNBQXlDLGlDQUFpQyw2RkFBNkYsTUFBTSxtQkFBbUIsb0JBQW9CLGdEQUFnRCwrQ0FBK0MsK0NBQStDLCtDQUErQyw0Q0FBNEMsNENBQTRDLDJDQUEyQywyQ0FBMkMsZ0NBQWdDLDhEQUE4RCw2Q0FBNkMsaUNBQWlDLDBIQUEwSCxxQ0FBcUMsc0RBQXNELHVCQUF1QixrQkFBa0IsaUJBQWlCLGFBQWEsNEJBQTRCLHVCQUF1Qix1QkFBdUIsTUFBTSw0RUFBNEUsbUVBQW1FLHNIQUFzSCxnRUFBZ0UscUZBQXFGLFlBQVksRUFBRSxFQUFFO0FBQ2wvRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDJEQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixxREFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLDhMQUE4TDtBQUN2TjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLEVBQUUsMkRBQUMsc0JBQXNCLFVBQVUsZUFBZSxHQUFHLDJEQUFDLGlDQUFpQywyREFBQyx1QkFBdUIsb0JBQW9CO0FBQ3hKO0FBQ0E7QUFDQSwwQkFBMEIsUUFBUSwyREFBVSxPQUFPLEVBQUU7QUFDckQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixlQUFlLHFDQUFxQyxXQUFXLE9BQU8sMEJBQTBCLHNCQUFzQixzQkFBc0IsbUJBQW1CLHFCQUFxQix1QkFBdUIsNkJBQTZCLG1CQUFtQixRQUFRLFlBQVksYUFBYSxFQUFFLGNBQWMsZUFBZSxhQUFhLGdCQUFnQixrQ0FBa0MsaUNBQWlDLCtCQUErQixxQ0FBcUMsb0JBQW9CLGtCQUFrQixtQkFBbUIsb0JBQW9CLHVCQUF1Qix3QkFBd0Isc0JBQXNCLHVCQUF1QixtQkFBbUIsb0JBQW9CLGNBQWMsb0JBQW9CLGFBQWEsa0JBQWtCLDJCQUEyQix1QkFBdUIsdUJBQXVCLG9CQUFvQixzQkFBc0Isd0JBQXdCLFdBQVcsU0FBUyx1QkFBdUIscUJBQXFCLGVBQWUsZ0JBQWdCLDhCQUE4QixzQkFBc0IsdUJBQXVCLDZGQUE2RixFQUFFLG1CQUFtQixvQkFBb0IsMkNBQTJDLDBDQUEwQyx1Q0FBdUMsdUNBQXVDLG9CQUFvQixxQ0FBcUMsMEJBQTBCLFFBQVEsNkJBQTZCLHFCQUFxQiw0QkFBNEIsbUJBQW1CLHVCQUF1QixxQkFBcUIsb0JBQW9CLFdBQVcseUNBQXlDLGNBQWMsMkJBQTJCLGtCQUFrQixlQUFlLHVCQUF1QixtQkFBbUIsZ0JBQWdCLDhCQUE4QixzQkFBc0IscUJBQXFCLGlCQUFpQixRQUFRLG9CQUFvQixrQkFBa0IsU0FBUyxXQUFXLGdEQUFnRCxtQkFBbUIscUJBQXFCLDhCQUE4QixzQkFBc0Isa0JBQWtCLFVBQVUsOEJBQThCLHVCQUF1QixtQkFBbUIsNEJBQTRCLCtCQUErQiwyQkFBMkIsK0JBQStCLGtDQUFrQyw4QkFBOEIsb0dBQW9HLGFBQWEsa0JBQWtCLDBCQUEwQixNQUFNLGdCQUFnQixtQkFBbUIsbUJBQW1CLHFCQUFxQixnQkFBZ0IsZUFBZSxnQkFBZ0IscUJBQXFCLHFCQUFxQixjQUFjLGVBQWUsZUFBZSxrQkFBa0Isb0JBQW9CLG9CQUFvQixjQUFjLGVBQWUsZ0JBQWdCLG1CQUFtQix1Q0FBdUMsK0JBQStCLGVBQWUsMkVBQTJFLG9EQUFvRCw0Q0FBNEMscUJBQXFCLGtCQUFrQixpQkFBaUIsa0JBQWtCLGdCQUFnQixtQkFBbUIscUJBQXFCLFFBQVEsZUFBZSxjQUFjLGdCQUFnQiw2RkFBNkYscUJBQXFCLG1CQUFtQixvQkFBb0IsMEJBQTBCLHlCQUF5Qix3QkFBd0Isd0JBQXdCLDZFQUE2RSxXQUFXLFlBQVksc0JBQXNCLDJCQUEyQixjQUFjLGNBQWMsV0FBVyxnREFBZ0QsZUFBZSxrQkFBa0IsaURBQWlELGFBQWEsa0JBQWtCLG9EQUFvRCxTQUFTLFFBQVEsaUpBQWlKLFdBQVcsWUFBWSxVQUFVLG1EQUFtRCxhQUFhLGtCQUFrQixvREFBb0QsZUFBZSxnQkFBZ0Isb0dBQW9HLFNBQVMsU0FBUywwUkFBMFIsV0FBVyxZQUFZLFVBQVUsa0RBQWtELGlCQUFpQiw2RkFBNkYsa0RBQWtELG1CQUFtQix1QkFBdUIsdUJBQXVCLGdEQUFnRCxnQkFBZ0IsNkZBQTZGLGdEQUFnRCxrQkFBa0IseUJBQXlCLHlCQUF5QixrR0FBa0csU0FBUyxTQUFTLHNSQUFzUixXQUFXLFlBQVksVUFBVSxrR0FBa0csYUFBYSxnQkFBZ0Isa0dBQWtHLFNBQVMsZ0dBQWdHLGFBQWEsZ0JBQWdCLGVBQWUsRUFBRSxFQUFFO0FBQ2gvTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUM2RDs7Ozs7Ozs7Ozs7OztBQ3ZLOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQixFQUFFO0FBQ3RELCtCQUErQixpQkFBaUIsRUFBRTtBQUNsRCxrQ0FBa0MsaUJBQWlCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxzQkFBc0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUSx1REFBUztBQUM5RDtBQUNBLFdBQVcseURBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFO0FBQ2tGIiwiZmlsZSI6IjczLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgZCBhcyBjcmVhdGVFdmVudCwgYyBhcyBnZXRJb25Nb2RlLCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgeyBiIGFzIGNvbmZpZyB9IGZyb20gJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG52YXIgVGFiQmFyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRhYkJhcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMua2V5Ym9hcmRWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB0YWIgYmFyIHdpbGwgYmUgdHJhbnNsdWNlbnQuXG4gICAgICAgICAqIE9ubHkgYXBwbGllcyB3aGVuIHRoZSBtb2RlIGlzIGBcImlvc1wiYCBhbmQgdGhlIGRldmljZSBzdXBwb3J0c1xuICAgICAgICAgKiBbYGJhY2tkcm9wLWZpbHRlcmBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZHJvcC1maWx0ZXIjQnJvd3Nlcl9jb21wYXRpYmlsaXR5KS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJhbnNsdWNlbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pb25UYWJCYXJDaGFuZ2VkID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25UYWJCYXJDaGFuZ2VkXCIsIDcpO1xuICAgIH1cbiAgICBUYWJCYXIucHJvdG90eXBlLnNlbGVjdGVkVGFiQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRUYWIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5pb25UYWJCYXJDaGFuZ2VkLmVtaXQoe1xuICAgICAgICAgICAgICAgIHRhYjogdGhpcy5zZWxlY3RlZFRhYlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRhYkJhci5wcm90b3R5cGUub25LZXlib2FyZFdpbGxIaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmtleWJvYXJkVmlzaWJsZSA9IGZhbHNlOyB9LCA1MCk7XG4gICAgfTtcbiAgICBUYWJCYXIucHJvdG90eXBlLm9uS2V5Ym9hcmRXaWxsU2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdzbG90JykgIT09ICd0b3AnKSB7XG4gICAgICAgICAgICB0aGlzLmtleWJvYXJkVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRhYkJhci5wcm90b3R5cGUuY29tcG9uZW50V2lsbExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWJDaGFuZ2VkKCk7XG4gICAgfTtcbiAgICBUYWJCYXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLCBjb2xvciA9IF9iLmNvbG9yLCB0cmFuc2x1Y2VudCA9IF9iLnRyYW5zbHVjZW50LCBrZXlib2FyZFZpc2libGUgPSBfYi5rZXlib2FyZFZpc2libGU7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgcm9sZTogXCJ0YWJsaXN0XCIsIFwiYXJpYS1oaWRkZW5cIjoga2V5Ym9hcmRWaXNpYmxlID8gJ3RydWUnIDogbnVsbCwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKGNvbG9yKSksIChfYSA9IHt9LCBfYVttb2RlXSA9IHRydWUsIF9hWyd0YWItYmFyLXRyYW5zbHVjZW50J10gPSB0cmFuc2x1Y2VudCwgX2FbJ3RhYi1iYXItaGlkZGVuJ10gPSBrZXlib2FyZFZpc2libGUsIF9hKSkgfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYWJCYXIucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFiQmFyLCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRUYWJcIjogW1wic2VsZWN0ZWRUYWJDaGFuZ2VkXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFiQmFyLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIjpob3N0e3BhZGRpbmctbGVmdDp2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpO3BhZGRpbmctcmlnaHQ6dmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOmF1dG87cGFkZGluZy1ib3R0b206dmFyKC0taW9uLXNhZmUtYXJlYS1ib3R0b20sMCk7Ym9yZGVyLXRvcDp2YXIoLS1ib3JkZXIpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29sb3I6dmFyKC0tY29sb3IpO3RleHQtYWxpZ246Y2VudGVyO2NvbnRhaW46c3RyaWN0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjEwOy13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveCFpbXBvcnRhbnQ7Ym94LXNpemluZzpjb250ZW50LWJveCFpbXBvcnRhbnR9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0e3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCl9fTpob3N0KC5pb24tY29sb3IpIDo6c2xvdHRlZChpb24tdGFiLWJ1dHRvbil7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLXNoYWRlKTstLWNvbG9yLXNlbGVjdGVkOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Omhvc3QoLmlvbi1jb2xvcikgOjpzbG90dGVkKC50YWItc2VsZWN0ZWQpe2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Omhvc3QoLmlvbi1jb2xvciksOmhvc3QoLmlvbi1jb2xvcikgOjpzbG90dGVkKGlvbi10YWItYnV0dG9uKXtjb2xvcjpyZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLC43KTtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguaW9uLWNvbG9yKSA6OnNsb3R0ZWQoaW9uLXRhYi1idXR0b24uaW9uLWZvY3VzZWQpLDpob3N0KC50YWItYmFyLXRyYW5zbHVjZW50KSA6OnNsb3R0ZWQoaW9uLXRhYi1idXR0b24uaW9uLWZvY3VzZWQpe2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1mb2N1c2VkKX06aG9zdCgudGFiLWJhci10cmFuc2x1Y2VudCkgOjpzbG90dGVkKGlvbi10YWItYnV0dG9uKXtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fTpob3N0KFtzbG90PXRvcF0pe3BhZGRpbmctYm90dG9tOjA7Ym9yZGVyLXRvcDowO2JvcmRlci1ib3R0b206dmFyKC0tYm9yZGVyKX06aG9zdCgudGFiLWJhci1oaWRkZW4pe2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9Omhvc3R7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi10YWItYmFyLWJhY2tncm91bmQsdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2ZmZikpOy0tYmFja2dyb3VuZC1mb2N1c2VkOnZhcigtLWlvbi10YWItYmFyLWJhY2tncm91bmQtZm9jdXNlZCwjZTBlMGUwKTstLWJvcmRlcjoxcHggc29saWQgdmFyKC0taW9uLXRhYi1iYXItYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1ib3JkZXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLHJnYmEoMCwwLDAsMC4wNykpKSk7LS1jb2xvcjp2YXIoLS1pb24tdGFiLWJhci1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIzY2NikpOy0tY29sb3Itc2VsZWN0ZWQ6dmFyKC0taW9uLXRhYi1iYXItY29sb3ItYWN0aXZhdGVkLHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpKTtoZWlnaHQ6NTZweH1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFRhYkJhcjtcbn0oKSk7XG52YXIgVGFiQnV0dG9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRhYkJ1dHRvbihob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSB0YWIgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHNlbGVjdGVkIHRhYiBjb21wb25lbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbktleVVwID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBpZiAoZXYua2V5ID09PSAnRW50ZXInIHx8IGV2LmtleSA9PT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2VsZWN0VGFiKGV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBfdGhpcy5zZWxlY3RUYWIoZXYpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlvblRhYkJ1dHRvbkNsaWNrID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25UYWJCdXR0b25DbGlja1wiLCA3KTtcbiAgICB9XG4gICAgVGFiQnV0dG9uLnByb3RvdHlwZS5vblRhYkJhckNoYW5nZWQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMudGFiID09PSBldi5kZXRhaWwudGFiO1xuICAgIH07XG4gICAgVGFiQnV0dG9uLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGF5b3V0ID0gY29uZmlnLmdldCgndGFiQnV0dG9uTGF5b3V0JywgJ2ljb24tdG9wJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRhYkJ1dHRvbi5wcm90b3R5cGUuc2VsZWN0VGFiID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIGlmICh0aGlzLnRhYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlvblRhYkJ1dHRvbkNsaWNrLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICB0YWI6IHRoaXMudGFiLFxuICAgICAgICAgICAgICAgICAgICBocmVmOiB0aGlzLmhyZWYsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0aGlzLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFiQnV0dG9uLnByb3RvdHlwZSwgXCJoYXNMYWJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICEhdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpb24tbGFiZWwnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRhYkJ1dHRvbi5wcm90b3R5cGUsIFwiaGFzSWNvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICEhdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpb24taWNvbicpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFiQnV0dG9uLnByb3RvdHlwZSwgXCJ0YWJJbmRleFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGFzVGFiSW5kZXggPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICAgIGlmIChoYXNUYWJJbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVsLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBUYWJCdXR0b24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLCBkaXNhYmxlZCA9IF9iLmRpc2FibGVkLCBoYXNJY29uID0gX2IuaGFzSWNvbiwgaGFzTGFiZWwgPSBfYi5oYXNMYWJlbCwgdGFiSW5kZXggPSBfYi50YWJJbmRleCwgaHJlZiA9IF9iLmhyZWYsIHJlbCA9IF9iLnJlbCwgdGFyZ2V0ID0gX2IudGFyZ2V0LCBsYXlvdXQgPSBfYi5sYXlvdXQsIHNlbGVjdGVkID0gX2Iuc2VsZWN0ZWQsIHRhYiA9IF9iLnRhYjtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICB2YXIgYXR0cnMgPSB7XG4gICAgICAgICAgICBkb3dubG9hZDogdGhpcy5kb3dubG9hZCxcbiAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICByZWw6IHJlbCxcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMub25DbGljaywgb25LZXl1cDogdGhpcy5vbktleVVwLCByb2xlOiBcInRhYlwiLCB0YWJpbmRleDogdGFiSW5kZXgsIFwiYXJpYS1zZWxlY3RlZFwiOiBzZWxlY3RlZCA/ICd0cnVlJyA6IG51bGwsIGlkOiB0YWIgIT09IHVuZGVmaW5lZCA/IFwidGFiLWJ1dHRvbi1cIiArIHRhYiA6IG51bGwsIGNsYXNzOiAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVttb2RlXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2FbJ3RhYi1zZWxlY3RlZCddID0gc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgX2FbJ3RhYi1kaXNhYmxlZCddID0gZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgX2FbJ3RhYi1oYXMtbGFiZWwnXSA9IGhhc0xhYmVsLFxuICAgICAgICAgICAgICAgIF9hWyd0YWItaGFzLWljb24nXSA9IGhhc0ljb24sXG4gICAgICAgICAgICAgICAgX2FbJ3RhYi1oYXMtbGFiZWwtb25seSddID0gaGFzTGFiZWwgJiYgIWhhc0ljb24sXG4gICAgICAgICAgICAgICAgX2FbJ3RhYi1oYXMtaWNvbi1vbmx5J10gPSBoYXNJY29uICYmICFoYXNMYWJlbCxcbiAgICAgICAgICAgICAgICBfYVtcInRhYi1sYXlvdXQtXCIgKyBsYXlvdXRdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYVsnaW9uLWFjdGl2YXRhYmxlJ10gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hWydpb24tc2VsZWN0YWJsZSddID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYVsnaW9uLWZvY3VzYWJsZSddID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYSkgfSwgaChcImFcIiwgT2JqZWN0LmFzc2lnbih7fSwgYXR0cnMsIHsgdGFiSW5kZXg6IC0xIH0pLCBoKFwic2xvdFwiLCBudWxsKSwgbW9kZSA9PT0gJ21kJyAmJiBoKFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwgeyB0eXBlOiBcInVuYm91bmRlZFwiIH0pKSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRhYkJ1dHRvbi5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYWJCdXR0b24sIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiOmhvc3R7LS1yaXBwbGUtY29sb3I6dmFyKC0tY29sb3Itc2VsZWN0ZWQpOy1tcy1mbGV4OjE7ZmxleDoxOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKX06aG9zdCxhe2hlaWdodDoxMDAlO291dGxpbmU6bm9uZX1he21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwYWRkaW5nLWxlZnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1yaWdodDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmctYm90dG9tKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1kaXJlY3Rpb246aW5oZXJpdDtmbGV4LWRpcmVjdGlvbjppbmhlcml0Oy1tcy1mbGV4LWFsaWduOmluaGVyaXQ7YWxpZ24taXRlbXM6aW5oZXJpdDstbXMtZmxleC1wYWNrOmluaGVyaXQ7anVzdGlmeS1jb250ZW50OmluaGVyaXQ7d2lkdGg6MTAwJTtib3JkZXI6MDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O3RleHQtZGVjb3JhdGlvbjpub25lO2N1cnNvcjpwb2ludGVyO292ZXJmbG93OmhpZGRlbjstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC11c2VyLWRyYWc6bm9uZX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7YXtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKX19Omhvc3QoLmlvbi1mb2N1c2VkKXtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtZm9jdXNlZCl9XFxAbWVkaWEgKGFueS1ob3Zlcjpob3Zlcil7YTpob3Zlcntjb2xvcjp2YXIoLS1jb2xvci1zZWxlY3RlZCl9fTpob3N0KC50YWItc2VsZWN0ZWQpe2NvbG9yOnZhcigtLWNvbG9yLXNlbGVjdGVkKX06aG9zdCgudGFiLWhpZGRlbil7ZGlzcGxheTpub25lIWltcG9ydGFudH06aG9zdCgudGFiLWRpc2FibGVkKXtwb2ludGVyLWV2ZW50czpub25lO29wYWNpdHk6LjR9OjpzbG90dGVkKGlvbi1pY29uKSw6OnNsb3R0ZWQoaW9uLWxhYmVsKXtkaXNwbGF5OmJsb2NrOy1tcy1mbGV4LWl0ZW0tYWxpZ246Y2VudGVyO2FsaWduLXNlbGY6Y2VudGVyO21heC13aWR0aDoxMDAlO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9OjpzbG90dGVkKGlvbi1sYWJlbCl7LW1zLWZsZXgtb3JkZXI6MDtvcmRlcjowfTo6c2xvdHRlZChpb24taWNvbil7LW1zLWZsZXgtb3JkZXI6LTE7b3JkZXI6LTE7aGVpZ2h0OjFlbX06aG9zdCgudGFiLWhhcy1sYWJlbC1vbmx5KSA6OnNsb3R0ZWQoaW9uLWxhYmVsKXt3aGl0ZS1zcGFjZTpub3JtYWx9OjpzbG90dGVkKGlvbi1iYWRnZSl7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MX06aG9zdCgudGFiLWxheW91dC1pY29uLXN0YXJ0KXstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvd306aG9zdCgudGFiLWxheW91dC1pY29uLWVuZCl7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlO2ZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlfTpob3N0KC50YWItbGF5b3V0LWljb24tYm90dG9tKXstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uLXJldmVyc2U7ZmxleC1kaXJlY3Rpb246Y29sdW1uLXJldmVyc2V9Omhvc3QoLnRhYi1sYXlvdXQtaWNvbi1oaWRlKSA6OnNsb3R0ZWQoaW9uLWljb24pLDpob3N0KC50YWItbGF5b3V0LWxhYmVsLWhpZGUpIDo6c2xvdHRlZChpb24tbGFiZWwpe2Rpc3BsYXk6bm9uZX1pb24tcmlwcGxlLWVmZmVjdHtjb2xvcjp2YXIoLS1yaXBwbGUtY29sb3IpfTpob3N0ey0tcGFkZGluZy10b3A6MDstLXBhZGRpbmctZW5kOjEycHg7LS1wYWRkaW5nLWJvdHRvbTowOy0tcGFkZGluZy1zdGFydDoxMnB4O21heC13aWR0aDoxNjhweDtmb250LXNpemU6MTJweDtmb250LXdlaWdodDo0MDA7bGV0dGVyLXNwYWNpbmc6LjAzZW19OjpzbG90dGVkKGlvbi1sYWJlbCl7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjJweDttYXJnaW4tYm90dG9tOjJweDt0ZXh0LXRyYW5zZm9ybTpub25lfTo6c2xvdHRlZChpb24taWNvbil7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjE2cHg7bWFyZ2luLWJvdHRvbToxNnB4Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcjtmb250LXNpemU6MjJweH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgOjpzbG90dGVkKGlvbi1pY29uKSxbZGlyPXJ0bF0gOjpzbG90dGVkKGlvbi1pY29uKXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKSBjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBjZW50ZXIpIGNlbnRlcn06OnNsb3R0ZWQoaW9uLWJhZGdlKXtib3JkZXItcmFkaXVzOjhweDtwYWRkaW5nLWxlZnQ6MnB4O3BhZGRpbmctcmlnaHQ6MnB4O3BhZGRpbmctdG9wOjNweDtwYWRkaW5nLWJvdHRvbToycHg7bGVmdDpjYWxjKDUwJSArIDZweCk7dG9wOjhweDttaW4td2lkdGg6MTJweDtmb250LXNpemU6OHB4O2ZvbnQtd2VpZ2h0OjQwMH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7OjpzbG90dGVkKGlvbi1iYWRnZSl7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjJweDtwYWRkaW5nLWlubGluZS1zdGFydDoycHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoycHg7cGFkZGluZy1pbmxpbmUtZW5kOjJweH19Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIDo6c2xvdHRlZChpb24tYmFkZ2UpLFtkaXI9cnRsXSA6OnNsb3R0ZWQoaW9uLWJhZGdlKXtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OmNhbGMoNTAlICsgNnB4KX06OnNsb3R0ZWQoaW9uLWJhZGdlOmVtcHR5KXtkaXNwbGF5OmJsb2NrO21pbi13aWR0aDo4cHg7aGVpZ2h0OjhweH06aG9zdCgudGFiLWxheW91dC1pY29uLXRvcCkgOjpzbG90dGVkKGlvbi1pY29uKXttYXJnaW4tdG9wOjZweDttYXJnaW4tYm90dG9tOjJweH06aG9zdCgudGFiLWxheW91dC1pY29uLXRvcCkgOjpzbG90dGVkKGlvbi1sYWJlbCl7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206NnB4fTpob3N0KC50YWItbGF5b3V0LWljb24tYm90dG9tKSA6OnNsb3R0ZWQoaW9uLWJhZGdlKXtsZWZ0OjcwJTt0b3A6OHB4fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS50YWItbGF5b3V0LWljb24tYm90dG9tIDo6c2xvdHRlZChpb24tYmFkZ2UpLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC50YWItbGF5b3V0LWljb24tYm90dG9tKSA6OnNsb3R0ZWQoaW9uLWJhZGdlKXtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjcwJX06aG9zdCgudGFiLWxheW91dC1pY29uLWJvdHRvbSkgOjpzbG90dGVkKGlvbi1pY29uKXttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTo2cHh9Omhvc3QoLnRhYi1sYXlvdXQtaWNvbi1ib3R0b20pIDo6c2xvdHRlZChpb24tbGFiZWwpe21hcmdpbi10b3A6NnB4O21hcmdpbi1ib3R0b206MH06aG9zdCgudGFiLWxheW91dC1pY29uLWVuZCkgOjpzbG90dGVkKGlvbi1iYWRnZSksOmhvc3QoLnRhYi1sYXlvdXQtaWNvbi1zdGFydCkgOjpzbG90dGVkKGlvbi1iYWRnZSl7bGVmdDo4MCU7dG9wOjE2cHh9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pLnRhYi1sYXlvdXQtaWNvbi1lbmQgOjpzbG90dGVkKGlvbi1iYWRnZSksOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLnRhYi1sYXlvdXQtaWNvbi1zdGFydCA6OnNsb3R0ZWQoaW9uLWJhZGdlKSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgudGFiLWxheW91dC1pY29uLWVuZCkgOjpzbG90dGVkKGlvbi1iYWRnZSksOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLnRhYi1sYXlvdXQtaWNvbi1zdGFydCkgOjpzbG90dGVkKGlvbi1iYWRnZSl7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDo4MCV9Omhvc3QoLnRhYi1sYXlvdXQtaWNvbi1zdGFydCkgOjpzbG90dGVkKGlvbi1pY29uKXttYXJnaW4tcmlnaHQ6NnB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdCgudGFiLWxheW91dC1pY29uLXN0YXJ0KSA6OnNsb3R0ZWQoaW9uLWljb24pe21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1lbmQ6NnB4O21hcmdpbi1pbmxpbmUtZW5kOjZweH19Omhvc3QoLnRhYi1sYXlvdXQtaWNvbi1lbmQpIDo6c2xvdHRlZChpb24taWNvbil7bWFyZ2luLWxlZnQ6NnB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdCgudGFiLWxheW91dC1pY29uLWVuZCkgOjpzbG90dGVkKGlvbi1pY29uKXttYXJnaW4tbGVmdDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDo2cHg7bWFyZ2luLWlubGluZS1zdGFydDo2cHh9fTpob3N0KC50YWItaGFzLWxhYmVsLW9ubHkpIDo6c2xvdHRlZChpb24tYmFkZ2UpLDpob3N0KC50YWItbGF5b3V0LWljb24taGlkZSkgOjpzbG90dGVkKGlvbi1iYWRnZSl7bGVmdDo3MCU7dG9wOjE2cHh9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pLnRhYi1oYXMtbGFiZWwtb25seSA6OnNsb3R0ZWQoaW9uLWJhZGdlKSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkudGFiLWxheW91dC1pY29uLWhpZGUgOjpzbG90dGVkKGlvbi1iYWRnZSksOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLnRhYi1oYXMtbGFiZWwtb25seSkgOjpzbG90dGVkKGlvbi1iYWRnZSksOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLnRhYi1sYXlvdXQtaWNvbi1oaWRlKSA6OnNsb3R0ZWQoaW9uLWJhZGdlKXtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjcwJX06aG9zdCgudGFiLWhhcy1sYWJlbC1vbmx5KSA6OnNsb3R0ZWQoaW9uLWxhYmVsKSw6aG9zdCgudGFiLWxheW91dC1pY29uLWhpZGUpIDo6c2xvdHRlZChpb24tbGFiZWwpe21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9Omhvc3QoLnRhYi1oYXMtaWNvbi1vbmx5KSA6OnNsb3R0ZWQoaW9uLWJhZGdlKSw6aG9zdCgudGFiLWxheW91dC1sYWJlbC1oaWRlKSA6OnNsb3R0ZWQoaW9uLWJhZGdlKXt0b3A6MTZweH06aG9zdCgudGFiLWhhcy1pY29uLW9ubHkpIDo6c2xvdHRlZChpb24taWNvbiksOmhvc3QoLnRhYi1sYXlvdXQtbGFiZWwtaGlkZSkgOjpzbG90dGVkKGlvbi1pY29uKXttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO2ZvbnQtc2l6ZToyNHB4fVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gVGFiQnV0dG9uO1xufSgpKTtcbmV4cG9ydCB7IFRhYkJhciBhcyBpb25fdGFiX2JhciwgVGFiQnV0dG9uIGFzIGlvbl90YWJfYnV0dG9uIH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG52YXIgaG9zdENvbnRleHQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGVsKSB7XG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xufTtcbi8qKlxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxuICovXG52YXIgY3JlYXRlQ29sb3JDbGFzc2VzID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IChfYSA9IHtcbiAgICAgICAgICAgICdpb24tY29sb3InOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIF9hW1wiaW9uLWNvbG9yLVwiICsgY29sb3JdID0gdHJ1ZSxcbiAgICAgICAgX2EpIDogdW5kZWZpbmVkO1xufTtcbnZhciBnZXRDbGFzc0xpc3QgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgIHJldHVybiBhcnJheVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPSBudWxsOyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50cmltKCk7IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSAnJzsgfSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbn07XG52YXIgZ2V0Q2xhc3NNYXAgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gbWFwW2NdID0gdHJ1ZTsgfSk7XG4gICAgcmV0dXJuIG1hcDtcbn07XG52YXIgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XG52YXIgb3BlblVSTCA9IGZ1bmN0aW9uICh1cmwsIGV2LCBkaXJlY3Rpb24pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvdXRlcjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgICAgICAgaWYgKHJvdXRlcikge1xuICAgICAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbildO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=