(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-tab-bar_2-ios.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-tab-bar_2-ios.entry.js ***!
  \**************************************************************************/
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
        get: function () { return ":host{padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom,0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb),.7);background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none!important}:host{--background:var(--ion-tab-bar-background,var(--ion-background-color,#fff));--background-focused:var(--ion-tab-bar-background-focused,#e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.2))));--color:var(--ion-tab-bar-color,var(--ion-color-step-450,#8c8c8c));--color-selected:var(--ion-tab-bar-color-activated,var(--ion-color-primary,#3880ff));height:50px}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb,255,255,255),0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb),.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb,255,255,255),.6)}}"; },
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
        get: function () { return ":host{--ripple-color:var(--color-selected);-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background:var(--background);color:var(--color)}:host,a{height:100%;outline:none}a{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;border:0;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){a{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-focused){background:var(--background-focused)}\@media (any-hover:hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none!important}:host(.tab-disabled){pointer-events:none;opacity:.4}::slotted(ion-icon),::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon),:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}::slotted(ion-badge){padding-left:6px;padding-right:6px;padding-top:1px;padding-bottom:1px;left:calc(50% + 6px);top:4px;height:auto;font-size:12px;line-height:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-badge){padding-left:unset;padding-right:unset;-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px}}:host-context([dir=rtl]) ::slotted(ion-badge),[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}::slotted(ion-icon){margin-top:4px;font-size:30px}::slotted(ion-icon:before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:calc(50% + 12px)}:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 12px)}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-end) ::slotted(ion-badge),:host(.tab-layout-icon-start) ::slotted(ion-badge){left:calc(50% + 35px);top:10px}:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 35px)}:host(.tab-has-label-only) ::slotted(ion-badge),:host(.tab-layout-icon-hide) ::slotted(ion-badge){left:calc(50% + 30px);top:10px}:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 30px)}:host(.tab-has-icon-only) ::slotted(ion-badge),:host(.tab-layout-label-hide) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"; },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi10YWItYmFyXzItaW9zLmVudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2SDtBQUMxRTtBQUNXO0FBQzlEO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywyREFBVztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHNDQUFzQyxFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBVTtBQUM3QixnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLHVHQUF1RyxFQUFFLDREQUFrQixrQkFBa0IsMEdBQTBHLEVBQUUsMkRBQUM7QUFDblI7QUFDQTtBQUNBLDBCQUEwQixRQUFRLDJEQUFVLE9BQU8sRUFBRTtBQUNyRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixlQUFlLHVDQUF1Qyx5Q0FBeUMsb0JBQW9CLGFBQWEsc0JBQXNCLG1CQUFtQixxQkFBcUIsdUJBQXVCLFdBQVcsNkNBQTZDLHlCQUF5Qiw2QkFBNkIsbUJBQW1CLGtCQUFrQixlQUFlLHlCQUF5QixzQkFBc0IscUJBQXFCLGlCQUFpQixXQUFXLHlDQUF5QyxpQ0FBaUMsNkZBQTZGLE1BQU0sbUJBQW1CLG9CQUFvQixnREFBZ0QsK0NB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QUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNrRiIsImZpbGUiOiI3Mi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGQgYXMgY3JlYXRlRXZlbnQsIGMgYXMgZ2V0SW9uTW9kZSwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtZmVlZWZmMGQuanMnO1xuaW1wb3J0IHsgYiBhcyBjb25maWcgfSBmcm9tICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcyB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xudmFyIFRhYkJhciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUYWJCYXIoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmtleWJvYXJkVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdGFiIGJhciB3aWxsIGJlIHRyYW5zbHVjZW50LlxuICAgICAgICAgKiBPbmx5IGFwcGxpZXMgd2hlbiB0aGUgbW9kZSBpcyBgXCJpb3NcImAgYW5kIHRoZSBkZXZpY2Ugc3VwcG9ydHNcbiAgICAgICAgICogW2BiYWNrZHJvcC1maWx0ZXJgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2Ryb3AtZmlsdGVyI0Jyb3dzZXJfY29tcGF0aWJpbGl0eSkuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyYW5zbHVjZW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW9uVGFiQmFyQ2hhbmdlZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uVGFiQmFyQ2hhbmdlZFwiLCA3KTtcbiAgICB9XG4gICAgVGFiQmFyLnByb3RvdHlwZS5zZWxlY3RlZFRhYkNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkVGFiICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaW9uVGFiQmFyQ2hhbmdlZC5lbWl0KHtcbiAgICAgICAgICAgICAgICB0YWI6IHRoaXMuc2VsZWN0ZWRUYWJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUYWJCYXIucHJvdG90eXBlLm9uS2V5Ym9hcmRXaWxsSGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5rZXlib2FyZFZpc2libGUgPSBmYWxzZTsgfSwgNTApO1xuICAgIH07XG4gICAgVGFiQmFyLnByb3RvdHlwZS5vbktleWJvYXJkV2lsbFNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsLmdldEF0dHJpYnV0ZSgnc2xvdCcpICE9PSAndG9wJykge1xuICAgICAgICAgICAgdGhpcy5rZXlib2FyZFZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUYWJCYXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiQ2hhbmdlZCgpO1xuICAgIH07XG4gICAgVGFiQmFyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIF9iID0gdGhpcywgY29sb3IgPSBfYi5jb2xvciwgdHJhbnNsdWNlbnQgPSBfYi50cmFuc2x1Y2VudCwga2V5Ym9hcmRWaXNpYmxlID0gX2Iua2V5Ym9hcmRWaXNpYmxlO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IHJvbGU6IFwidGFibGlzdFwiLCBcImFyaWEtaGlkZGVuXCI6IGtleWJvYXJkVmlzaWJsZSA/ICd0cnVlJyA6IG51bGwsIGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNyZWF0ZUNvbG9yQ2xhc3Nlcyhjb2xvcikpLCAoX2EgPSB7fSwgX2FbbW9kZV0gPSB0cnVlLCBfYVsndGFiLWJhci10cmFuc2x1Y2VudCddID0gdHJhbnNsdWNlbnQsIF9hWyd0YWItYmFyLWhpZGRlbiddID0ga2V5Ym9hcmRWaXNpYmxlLCBfYSkpIH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFiQmFyLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRhYkJhciwgXCJ3YXRjaGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcInNlbGVjdGVkVGFiXCI6IFtcInNlbGVjdGVkVGFiQ2hhbmdlZFwiXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRhYkJhciwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCI6aG9zdHtwYWRkaW5nLWxlZnQ6dmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KTtwYWRkaW5nLXJpZ2h0OnZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDphdXRvO3BhZGRpbmctYm90dG9tOnZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tLDApO2JvcmRlci10b3A6dmFyKC0tYm9yZGVyKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKTt0ZXh0LWFsaWduOmNlbnRlcjtjb250YWluOnN0cmljdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoxMDstd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3ghaW1wb3J0YW50O2JveC1zaXppbmc6Y29udGVudC1ib3ghaW1wb3J0YW50fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdHtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpfX06aG9zdCguaW9uLWNvbG9yKSA6OnNsb3R0ZWQoaW9uLXRhYi1idXR0b24pey0tYmFja2dyb3VuZC1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1zaGFkZSk7LS1jb2xvci1zZWxlY3RlZDp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KC5pb24tY29sb3IpIDo6c2xvdHRlZCgudGFiLXNlbGVjdGVkKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KC5pb24tY29sb3IpLDpob3N0KC5pb24tY29sb3IpIDo6c2xvdHRlZChpb24tdGFiLWJ1dHRvbil7Y29sb3I6cmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwuNyk7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QoLmlvbi1jb2xvcikgOjpzbG90dGVkKGlvbi10YWItYnV0dG9uLmlvbi1mb2N1c2VkKSw6aG9zdCgudGFiLWJhci10cmFuc2x1Y2VudCkgOjpzbG90dGVkKGlvbi10YWItYnV0dG9uLmlvbi1mb2N1c2VkKXtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtZm9jdXNlZCl9Omhvc3QoLnRhYi1iYXItdHJhbnNsdWNlbnQpIDo6c2xvdHRlZChpb24tdGFiLWJ1dHRvbil7YmFja2dyb3VuZDp0cmFuc3BhcmVudH06aG9zdChbc2xvdD10b3BdKXtwYWRkaW5nLWJvdHRvbTowO2JvcmRlci10b3A6MDtib3JkZXItYm90dG9tOnZhcigtLWJvcmRlcil9Omhvc3QoLnRhYi1iYXItaGlkZGVuKXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fTpob3N0ey0tYmFja2dyb3VuZDp2YXIoLS1pb24tdGFiLWJhci1iYWNrZ3JvdW5kLHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpKTstLWJhY2tncm91bmQtZm9jdXNlZDp2YXIoLS1pb24tdGFiLWJhci1iYWNrZ3JvdW5kLWZvY3VzZWQsI2UwZTBlMCk7LS1ib3JkZXI6MC41NXB4IHNvbGlkIHZhcigtLWlvbi10YWItYmFyLWJvcmRlci1jb2xvcix2YXIoLS1pb24tYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCxyZ2JhKDAsMCwwLDAuMikpKSk7LS1jb2xvcjp2YXIoLS1pb24tdGFiLWJhci1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC00NTAsIzhjOGM4YykpOy0tY29sb3Itc2VsZWN0ZWQ6dmFyKC0taW9uLXRhYi1iYXItY29sb3ItYWN0aXZhdGVkLHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpKTtoZWlnaHQ6NTBweH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOmJsdXIoMCkpIG9yIChiYWNrZHJvcC1maWx0ZXI6Ymx1cigwKSkpezpob3N0KC50YWItYmFyLXRyYW5zbHVjZW50KXstLWJhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsMjU1LDI1NSwyNTUpLDAuOCk7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMjEwJSkgYmx1cigyMHB4KTtiYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMjEwJSkgYmx1cigyMHB4KX06aG9zdCguaW9uLWNvbG9yLnRhYi1iYXItdHJhbnNsdWNlbnQpe2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLC44KX06aG9zdCgudGFiLWJhci10cmFuc2x1Y2VudCkgOjpzbG90dGVkKGlvbi10YWItYnV0dG9uLmlvbi1mb2N1c2VkKXtiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLDI1NSwyNTUsMjU1KSwuNil9fVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gVGFiQmFyO1xufSgpKTtcbnZhciBUYWJCdXR0b24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGFiQnV0dG9uKGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIHRhYiBidXR0b24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2VsZWN0ZWQgdGFiIGNvbXBvbmVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uS2V5VXAgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIGlmIChldi5rZXkgPT09ICdFbnRlcicgfHwgZXYua2V5ID09PSAnICcpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZWxlY3RUYWIoZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIF90aGlzLnNlbGVjdFRhYihldik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW9uVGFiQnV0dG9uQ2xpY2sgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblRhYkJ1dHRvbkNsaWNrXCIsIDcpO1xuICAgIH1cbiAgICBUYWJCdXR0b24ucHJvdG90eXBlLm9uVGFiQmFyQ2hhbmdlZCA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy50YWIgPT09IGV2LmRldGFpbC50YWI7XG4gICAgfTtcbiAgICBUYWJCdXR0b24ucHJvdG90eXBlLmNvbXBvbmVudFdpbGxMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5sYXlvdXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5sYXlvdXQgPSBjb25maWcuZ2V0KCd0YWJCdXR0b25MYXlvdXQnLCAnaWNvbi10b3AnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVGFiQnV0dG9uLnByb3RvdHlwZS5zZWxlY3RUYWIgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgaWYgKHRoaXMudGFiICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW9uVGFiQnV0dG9uQ2xpY2suZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgIHRhYjogdGhpcy50YWIsXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IHRoaXMuaHJlZixcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYWJCdXR0b24ucHJvdG90eXBlLCBcImhhc0xhYmVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gISF0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1sYWJlbCcpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFiQnV0dG9uLnByb3RvdHlwZSwgXCJoYXNJY29uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gISF0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pY29uJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYWJCdXR0b24ucHJvdG90eXBlLCBcInRhYkluZGV4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoYXNUYWJJbmRleCA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgaWYgKGhhc1RhYkluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWwuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFRhYkJ1dHRvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBfYiA9IHRoaXMsIGRpc2FibGVkID0gX2IuZGlzYWJsZWQsIGhhc0ljb24gPSBfYi5oYXNJY29uLCBoYXNMYWJlbCA9IF9iLmhhc0xhYmVsLCB0YWJJbmRleCA9IF9iLnRhYkluZGV4LCBocmVmID0gX2IuaHJlZiwgcmVsID0gX2IucmVsLCB0YXJnZXQgPSBfYi50YXJnZXQsIGxheW91dCA9IF9iLmxheW91dCwgc2VsZWN0ZWQgPSBfYi5zZWxlY3RlZCwgdGFiID0gX2IudGFiO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHZhciBhdHRycyA9IHtcbiAgICAgICAgICAgIGRvd25sb2FkOiB0aGlzLmRvd25sb2FkLFxuICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgIHJlbDogcmVsLFxuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5vbkNsaWNrLCBvbktleXVwOiB0aGlzLm9uS2V5VXAsIHJvbGU6IFwidGFiXCIsIHRhYmluZGV4OiB0YWJJbmRleCwgXCJhcmlhLXNlbGVjdGVkXCI6IHNlbGVjdGVkID8gJ3RydWUnIDogbnVsbCwgaWQ6IHRhYiAhPT0gdW5kZWZpbmVkID8gXCJ0YWItYnV0dG9uLVwiICsgdGFiIDogbnVsbCwgY2xhc3M6IChfYSA9IHt9LFxuICAgICAgICAgICAgICAgIF9hW21vZGVdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYVsndGFiLXNlbGVjdGVkJ10gPSBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBfYVsndGFiLWRpc2FibGVkJ10gPSBkaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBfYVsndGFiLWhhcy1sYWJlbCddID0gaGFzTGFiZWwsXG4gICAgICAgICAgICAgICAgX2FbJ3RhYi1oYXMtaWNvbiddID0gaGFzSWNvbixcbiAgICAgICAgICAgICAgICBfYVsndGFiLWhhcy1sYWJlbC1vbmx5J10gPSBoYXNMYWJlbCAmJiAhaGFzSWNvbixcbiAgICAgICAgICAgICAgICBfYVsndGFiLWhhcy1pY29uLW9ubHknXSA9IGhhc0ljb24gJiYgIWhhc0xhYmVsLFxuICAgICAgICAgICAgICAgIF9hW1widGFiLWxheW91dC1cIiArIGxheW91dF0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hWydpb24tYWN0aXZhdGFibGUnXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2FbJ2lvbi1zZWxlY3RhYmxlJ10gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hWydpb24tZm9jdXNhYmxlJ10gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hKSB9LCBoKFwiYVwiLCBPYmplY3QuYXNzaWduKHt9LCBhdHRycywgeyB0YWJJbmRleDogLTEgfSksIGgoXCJzbG90XCIsIG51bGwpLCBtb2RlID09PSAnbWQnICYmIGgoXCJpb24tcmlwcGxlLWVmZmVjdFwiLCB7IHR5cGU6IFwidW5ib3VuZGVkXCIgfSkpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFiQnV0dG9uLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRhYkJ1dHRvbiwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCI6aG9zdHstLXJpcHBsZS1jb2xvcjp2YXIoLS1jb2xvci1zZWxlY3RlZCk7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29sb3I6dmFyKC0tY29sb3IpfTpob3N0LGF7aGVpZ2h0OjEwMCU7b3V0bGluZTpub25lfWF7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLXJpZ2h0OnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDp2YXIoLS1wYWRkaW5nLXRvcCk7cGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy1ib3R0b20pO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LWRpcmVjdGlvbjppbmhlcml0O2ZsZXgtZGlyZWN0aW9uOmluaGVyaXQ7LW1zLWZsZXgtYWxpZ246aW5oZXJpdDthbGlnbi1pdGVtczppbmhlcml0Oy1tcy1mbGV4LXBhY2s6aW5oZXJpdDtqdXN0aWZ5LWNvbnRlbnQ6aW5oZXJpdDt3aWR0aDoxMDAlO2JvcmRlcjowO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Y3Vyc29yOnBvaW50ZXI7b3ZlcmZsb3c6aGlkZGVuOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LXVzZXItZHJhZzpub25lfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXthe3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpfX06aG9zdCguaW9uLWZvY3VzZWQpe2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1mb2N1c2VkKX1cXEBtZWRpYSAoYW55LWhvdmVyOmhvdmVyKXthOmhvdmVye2NvbG9yOnZhcigtLWNvbG9yLXNlbGVjdGVkKX19Omhvc3QoLnRhYi1zZWxlY3RlZCl7Y29sb3I6dmFyKC0tY29sb3Itc2VsZWN0ZWQpfTpob3N0KC50YWItaGlkZGVuKXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fTpob3N0KC50YWItZGlzYWJsZWQpe3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTouNH06OnNsb3R0ZWQoaW9uLWljb24pLDo6c2xvdHRlZChpb24tbGFiZWwpe2Rpc3BsYXk6YmxvY2s7LW1zLWZsZXgtaXRlbS1hbGlnbjpjZW50ZXI7YWxpZ24tc2VsZjpjZW50ZXI7bWF4LXdpZHRoOjEwMCU7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH06OnNsb3R0ZWQoaW9uLWxhYmVsKXstbXMtZmxleC1vcmRlcjowO29yZGVyOjB9OjpzbG90dGVkKGlvbi1pY29uKXstbXMtZmxleC1vcmRlcjotMTtvcmRlcjotMTtoZWlnaHQ6MWVtfTpob3N0KC50YWItaGFzLWxhYmVsLW9ubHkpIDo6c2xvdHRlZChpb24tbGFiZWwpe3doaXRlLXNwYWNlOm5vcm1hbH06OnNsb3R0ZWQoaW9uLWJhZGdlKXstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxfTpob3N0KC50YWItbGF5b3V0LWljb24tc3RhcnQpey1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fTpob3N0KC50YWItbGF5b3V0LWljb24tZW5kKXstbXMtZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7ZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2V9Omhvc3QoLnRhYi1sYXlvdXQtaWNvbi1ib3R0b20pey1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZTtmbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZX06aG9zdCgudGFiLWxheW91dC1pY29uLWhpZGUpIDo6c2xvdHRlZChpb24taWNvbiksOmhvc3QoLnRhYi1sYXlvdXQtbGFiZWwtaGlkZSkgOjpzbG90dGVkKGlvbi1sYWJlbCl7ZGlzcGxheTpub25lfWlvbi1yaXBwbGUtZWZmZWN0e2NvbG9yOnZhcigtLXJpcHBsZS1jb2xvcil9Omhvc3R7LS1wYWRkaW5nLXRvcDowOy0tcGFkZGluZy1lbmQ6MnB4Oy0tcGFkZGluZy1ib3R0b206MDstLXBhZGRpbmctc3RhcnQ6MnB4O21heC13aWR0aDoyNDBweDtmb250LXNpemU6MTBweH06aG9zdCgudGFiLWhhcy1sYWJlbC1vbmx5KSA6OnNsb3R0ZWQoaW9uLWxhYmVsKXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MnB4O21hcmdpbi1ib3R0b206MnB4O2ZvbnQtc2l6ZToxMnB4O2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjEuMX06OnNsb3R0ZWQoaW9uLWJhZGdlKXtwYWRkaW5nLWxlZnQ6NnB4O3BhZGRpbmctcmlnaHQ6NnB4O3BhZGRpbmctdG9wOjFweDtwYWRkaW5nLWJvdHRvbToxcHg7bGVmdDpjYWxjKDUwJSArIDZweCk7dG9wOjRweDtoZWlnaHQ6YXV0bztmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxNnB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6OnNsb3R0ZWQoaW9uLWJhZGdlKXtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6NnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjZweDstd2Via2l0LXBhZGRpbmctZW5kOjZweDtwYWRkaW5nLWlubGluZS1lbmQ6NnB4fX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgOjpzbG90dGVkKGlvbi1iYWRnZSksW2Rpcj1ydGxdIDo6c2xvdHRlZChpb24tYmFkZ2Upe2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6Y2FsYyg1MCUgKyA2cHgpfTo6c2xvdHRlZChpb24taWNvbil7bWFyZ2luLXRvcDo0cHg7Zm9udC1zaXplOjMwcHh9OjpzbG90dGVkKGlvbi1pY29uOmJlZm9yZSl7dmVydGljYWwtYWxpZ246dG9wfTo6c2xvdHRlZChpb24tbGFiZWwpe21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjFweDttaW4taGVpZ2h0OjExcHh9Omhvc3QoLnRhYi1sYXlvdXQtaWNvbi1lbmQpIDo6c2xvdHRlZChpb24tbGFiZWwpLDpob3N0KC50YWItbGF5b3V0LWljb24taGlkZSkgOjpzbG90dGVkKGlvbi1sYWJlbCksOmhvc3QoLnRhYi1sYXlvdXQtaWNvbi1zdGFydCkgOjpzbG90dGVkKGlvbi1sYWJlbCl7bWFyZ2luLXRvcDoycHg7bWFyZ2luLWJvdHRvbToycHg7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MS4xfTpob3N0KC50YWItbGF5b3V0LWljb24tZW5kKSA6OnNsb3R0ZWQoaW9uLWljb24pLDpob3N0KC50YWItbGF5b3V0LWljb24tc3RhcnQpIDo6c2xvdHRlZChpb24taWNvbil7bWluLXdpZHRoOjI0cHg7aGVpZ2h0OjI2cHg7bWFyZ2luLXRvcDoycHg7bWFyZ2luLWJvdHRvbToxcHg7Zm9udC1zaXplOjI0cHh9Omhvc3QoLnRhYi1sYXlvdXQtaWNvbi1ib3R0b20pIDo6c2xvdHRlZChpb24tYmFkZ2Upe2xlZnQ6Y2FsYyg1MCUgKyAxMnB4KX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkudGFiLWxheW91dC1pY29uLWJvdHRvbSA6OnNsb3R0ZWQoaW9uLWJhZGdlKSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgudGFiLWxheW91dC1pY29uLWJvdHRvbSkgOjpzbG90dGVkKGlvbi1iYWRnZSl7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDpjYWxjKDUwJSArIDEycHgpfTpob3N0KC50YWItbGF5b3V0LWljb24tYm90dG9tKSA6OnNsb3R0ZWQoaW9uLWljb24pe21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjFweH06aG9zdCgudGFiLWxheW91dC1pY29uLWJvdHRvbSkgOjpzbG90dGVkKGlvbi1sYWJlbCl7bWFyZ2luLXRvcDo0cHh9Omhvc3QoLnRhYi1sYXlvdXQtaWNvbi1lbmQpIDo6c2xvdHRlZChpb24tYmFkZ2UpLDpob3N0KC50YWItbGF5b3V0LWljb24tc3RhcnQpIDo6c2xvdHRlZChpb24tYmFkZ2Upe2xlZnQ6Y2FsYyg1MCUgKyAzNXB4KTt0b3A6MTBweH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkudGFiLWxheW91dC1pY29uLWVuZCA6OnNsb3R0ZWQoaW9uLWJhZGdlKSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkudGFiLWxheW91dC1pY29uLXN0YXJ0IDo6c2xvdHRlZChpb24tYmFkZ2UpLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC50YWItbGF5b3V0LWljb24tZW5kKSA6OnNsb3R0ZWQoaW9uLWJhZGdlKSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgudGFiLWxheW91dC1pY29uLXN0YXJ0KSA6OnNsb3R0ZWQoaW9uLWJhZGdlKXtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OmNhbGMoNTAlICsgMzVweCl9Omhvc3QoLnRhYi1oYXMtbGFiZWwtb25seSkgOjpzbG90dGVkKGlvbi1iYWRnZSksOmhvc3QoLnRhYi1sYXlvdXQtaWNvbi1oaWRlKSA6OnNsb3R0ZWQoaW9uLWJhZGdlKXtsZWZ0OmNhbGMoNTAlICsgMzBweCk7dG9wOjEwcHh9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pLnRhYi1oYXMtbGFiZWwtb25seSA6OnNsb3R0ZWQoaW9uLWJhZGdlKSw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkudGFiLWxheW91dC1pY29uLWhpZGUgOjpzbG90dGVkKGlvbi1iYWRnZSksOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLnRhYi1oYXMtbGFiZWwtb25seSkgOjpzbG90dGVkKGlvbi1iYWRnZSksOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLnRhYi1sYXlvdXQtaWNvbi1oaWRlKSA6OnNsb3R0ZWQoaW9uLWJhZGdlKXtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OmNhbGMoNTAlICsgMzBweCl9Omhvc3QoLnRhYi1oYXMtaWNvbi1vbmx5KSA6OnNsb3R0ZWQoaW9uLWJhZGdlKSw6aG9zdCgudGFiLWxheW91dC1sYWJlbC1oaWRlKSA6OnNsb3R0ZWQoaW9uLWJhZGdlKXt0b3A6MTBweH06aG9zdCgudGFiLWxheW91dC1sYWJlbC1oaWRlKSA6OnNsb3R0ZWQoaW9uLWljb24pe21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFRhYkJ1dHRvbjtcbn0oKSk7XG5leHBvcnQgeyBUYWJCYXIgYXMgaW9uX3RhYl9iYXIsIFRhYkJ1dHRvbiBhcyBpb25fdGFiX2J1dHRvbiB9O1xuIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xudmFyIGhvc3RDb250ZXh0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBlbCkge1xuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcbn07XG4vKipcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cbiAqL1xudmFyIGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyAoX2EgPSB7XG4gICAgICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBfYVtcImlvbi1jb2xvci1cIiArIGNvbG9yXSA9IHRydWUsXG4gICAgICAgIF9hKSA6IHVuZGVmaW5lZDtcbn07XG52YXIgZ2V0Q2xhc3NMaXN0ID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT0gbnVsbDsgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudHJpbSgpOyB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPT0gJyc7IH0pO1xuICAgIH1cbiAgICByZXR1cm4gW107XG59O1xudmFyIGdldENsYXNzTWFwID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG1hcFtjXSA9IHRydWU7IH0pO1xuICAgIHJldHVybiBtYXA7XG59O1xudmFyIFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xudmFyIG9wZW5VUkwgPSBmdW5jdGlvbiAodXJsLCBldiwgZGlyZWN0aW9uKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByb3V0ZXI7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcbiAgICAgICAgICAgIHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcbiAgICAgICAgICAgIGlmIChyb3V0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgIH0pO1xufSk7IH07XG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9