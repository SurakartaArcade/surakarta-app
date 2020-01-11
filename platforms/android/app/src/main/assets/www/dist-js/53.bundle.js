(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-fab_3-md.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-fab_3-md.entry.js ***!
  \*********************************************************************/
/*! exports provided: ion_fab, ion_fab_button, ion_fab_list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_fab", function() { return Fab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_fab_button", function() { return FabButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_fab_list", function() { return FabList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");




var Fab = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        /**
         * If `true`, the fab will display on the edge of the header if
         * `vertical` is `"top"`, and on the edge of the footer if
         * it is `"bottom"`. Should be used with a `fixed` slot.
         */
        this.edge = false;
        /**
         * If `true`, both the `ion-fab-button` and all `ion-fab-list` inside `ion-fab` will become active.
         * That means `ion-fab-button` will become a `close` icon and `ion-fab-list` will become visible.
         */
        this.activated = false;
        this.onClick = function () {
            var hasList = !!_this.el.querySelector('ion-fab-list');
            var getButton = _this.getFab();
            var isButtonDisabled = getButton && getButton.disabled;
            if (hasList && !isButtonDisabled) {
                _this.activated = !_this.activated;
            }
        };
    }
    class_1.prototype.activatedChanged = function () {
        var activated = this.activated;
        var fab = this.getFab();
        if (fab) {
            fab.activated = activated;
        }
        Array.from(this.el.querySelectorAll('ion-fab-list')).forEach(function (list) {
            list.activated = activated;
        });
    };
    class_1.prototype.componentDidLoad = function () {
        if (this.activated) {
            this.activatedChanged();
        }
    };
    /**
     * Close an active FAB list container.
     */
    class_1.prototype.close = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.activated = false;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.getFab = function () {
        return this.el.querySelector('ion-fab-button');
    };
    class_1.prototype.render = function () {
        var _a;
        var _b = this, horizontal = _b.horizontal, vertical = _b.vertical, edge = _b.edge;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onClick: this.onClick, class: (_a = {},
                _a[mode] = true,
                _a["fab-horizontal-" + horizontal] = horizontal !== undefined,
                _a["fab-vertical-" + vertical] = vertical !== undefined,
                _a['fab-edge'] = edge,
                _a) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "activated": ["activatedChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{position:absolute;z-index:999}:host(.fab-horizontal-center){left:50%;margin-left:-28px}:host-context([dir=rtl]).fab-horizontal-center,:host-context([dir=rtl]):host(.fab-horizontal-center){left:unset;right:unset;right:50%}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-horizontal-center){margin-left:unset;-webkit-margin-start:-28px;margin-inline-start:-28px}}:host(.fab-horizontal-start){left:calc(10px + var(--ion-safe-area-left, 0px))}:host-context([dir=rtl]).fab-horizontal-start,:host-context([dir=rtl]):host(.fab-horizontal-start){left:unset;right:unset;right:calc(10px + var(--ion-safe-area-left, 0px))}:host(.fab-horizontal-end){right:calc(10px + var(--ion-safe-area-right, 0px))}:host-context([dir=rtl]).fab-horizontal-end,:host-context([dir=rtl]):host(.fab-horizontal-end){left:unset;right:unset;left:calc(10px + var(--ion-safe-area-right, 0px))}:host(.fab-vertical-top){top:10px}:host(.fab-vertical-top.fab-edge){top:-28px}:host(.fab-vertical-bottom){bottom:10px}:host(.fab-vertical-bottom.fab-edge){bottom:-28px}:host(.fab-vertical-center){margin-top:-28px;top:50%}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var FabButton = /** @class */ (function () {
    function FabButton(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        /**
         * If `true`, the fab button will be show a close icon.
         */
        this.activated = false;
        /**
         * If `true`, the user cannot interact with the fab button.
         */
        this.disabled = false;
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */
        this.routerDirection = 'forward';
        /**
         * If `true`, the fab button will show when in a fab-list.
         */
        this.show = false;
        /**
         * If `true`, the fab button will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        /**
         * The type of the button.
         */
        this.type = 'button';
        this.onFocus = function () {
            _this.ionFocus.emit();
        };
        this.onBlur = function () {
            _this.ionBlur.emit();
        };
        this.ionFocus = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionFocus", 7);
        this.ionBlur = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionBlur", 7);
    }
    FabButton.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this, el = _b.el, disabled = _b.disabled, color = _b.color, href = _b.href, activated = _b.activated, show = _b.show, translucent = _b.translucent, size = _b.size;
        var inList = Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["h"])('ion-fab-list', el);
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var TagType = href === undefined ? 'button' : 'a';
        var attrs = (TagType === 'button')
            ? { type: this.type }
            : {
                download: this.download,
                href: href,
                rel: this.rel,
                target: this.target
            };
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { "aria-disabled": disabled ? 'true' : null, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(color)), (_a = {}, _a[mode] = true, _a['fab-button-in-list'] = inList, _a['fab-button-translucent-in-list'] = inList && translucent, _a['fab-button-close-active'] = activated, _a['fab-button-show'] = show, _a['fab-button-disabled'] = disabled, _a['fab-button-translucent'] = translucent, _a['ion-activatable'] = true, _a['ion-focusable'] = true, _a["fab-button-" + size] = size !== undefined, _a)) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(TagType, Object.assign({}, attrs, { class: "button-native", disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur, onClick: function (ev) { return Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["o"])(href, ev, _this.routerDirection); } }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { class: "close-icon" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon", { name: "close", lazy: false })), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { class: "button-inner" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)), mode === 'md' && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-ripple-effect", null))));
    };
    Object.defineProperty(FabButton.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FabButton, "style", {
        get: function () { return ":host{--color-hover:var(--color);--background-hover:var(--ion-color-primary-tint,#4c8dff);--transition:background-color,opacity 100ms linear;--ripple-color:currentColor;--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}:host(.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.fab-button-disabled){opacity:.5;pointer-events:none}:host(.fab-button-disabled) .button-native{cursor:default;pointer-events:none}\@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}:host(.ion-color:hover) .button-native{background:var(--ion-color-tint);color:var(--ion-color-contrast)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color.ion-focused) .button-native{background:var(--ion-color-shade)}:host(.activated) .button-native{background:var(--background-activated);color:var(--color-activated)}:host(.ion-color.activated) .button-native,:host(.ion-color.ion-focused) .button-native{background:var(--ion-color-shade);color:var(--ion-color-contrast)}::slotted(ion-icon){line-height:1}:host(.fab-button-small){margin-left:8px;margin-right:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-button-small){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}.close-icon{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transform:scale(.4) rotate(-45deg);transform:scale(.4) rotate(-45deg);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;opacity:0}:host(.fab-button-close-active) .close-icon{-webkit-transform:scale(1) rotate(0deg);transform:scale(1) rotate(0deg);opacity:1}:host(.fab-button-close-active) .button-inner{-webkit-transform:scale(.4) rotate(45deg);transform:scale(.4) rotate(45deg);opacity:0}ion-ripple-effect{color:var(--ripple-color)}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.fab-button-translucent) .button-native{-webkit-backdrop-filter:var(--backdrop-filter);backdrop-filter:var(--backdrop-filter)}}:host{--background:var(--ion-color-primary,#3880ff);--background-activated:var(--background);--background-focused:var(--background-activated);--color:var(--ion-color-primary-contrast,#fff);--color-activated:var(--ion-color-primary-contrast,#fff);--color-focused:var(--color-activated);--box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12);--transition:box-shadow 280ms cubic-bezier(0.4,0,0.2,1),background-color 280ms cubic-bezier(0.4,0,0.2,1),color 280ms cubic-bezier(0.4,0,0.2,1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0,0,0.2,1) 0ms}:host(.activated){--box-shadow:0 7px 8px -4px rgba(0,0,0,0.2),0 12px 17px 2px rgba(0,0,0,0.14),0 5px 22px 4px rgba(0,0,0,0.12)}.close-icon,::slotted(ion-icon){font-size:24px}:host(.fab-button-in-list){--color:rgba(var(--ion-text-color-rgb,0,0,0),0.54);--color-activated:rgba(var(--ion-text-color-rgb,0,0,0),0.54);--color-focused:var(--color-activated);--background:var(--ion-color-light,#f4f5f8);--background-activated:var(--ion-color-light-shade,#d7d8da);--background-focused:var(--background-activated);--background-hover:var(--ion-color-light-tint,#f5f6f9)}:host(.fab-button-in-list) ::slotted(ion-icon){font-size:18px}"; },
        enumerable: true,
        configurable: true
    });
    return FabButton;
}());
var FabList = /** @class */ (function () {
    function FabList(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        /**
         * If `true`, the fab list will show all fab buttons in the list.
         */
        this.activated = false;
        /**
         * The side the fab list will show on relative to the main fab button.
         */
        this.side = 'bottom';
    }
    FabList.prototype.activatedChanged = function (activated) {
        var fabs = Array.from(this.el.querySelectorAll('ion-fab-button'));
        // if showing the fabs add a timeout, else show immediately
        var timeout = activated ? 30 : 0;
        fabs.forEach(function (fab, i) {
            setTimeout(function () { return fab.show = activated; }, i * timeout);
        });
    };
    FabList.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: (_a = {},
                _a[mode] = true,
                _a['fab-list-active'] = this.activated,
                _a["fab-list-side-" + this.side] = true,
                _a) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)));
    };
    Object.defineProperty(FabList.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FabList, "watchers", {
        get: function () {
            return {
                "activated": ["activatedChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FabList, "style", {
        get: function () { return ":host{margin-left:0;margin-right:0;margin-top:66px;margin-bottom:66px;display:none;position:absolute;top:0;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;min-width:56px;min-height:56px}:host(.fab-list-active){display:-ms-flexbox;display:flex}::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:8px;margin-bottom:8px;width:40px;height:40px;-webkit-transform:scale(0);transform:scale(0);opacity:0;visibility:hidden}:host(.fab-list-side-bottom) ::slotted(.fab-button-in-list),:host(.fab-list-side-top) ::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px}:host(.fab-list-side-end) ::slotted(.fab-button-in-list),:host(.fab-list-side-start) ::slotted(.fab-button-in-list){margin-left:5px;margin-right:5px;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-end) ::slotted(.fab-button-in-list),:host(.fab-list-side-start) ::slotted(.fab-button-in-list){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted(.fab-button-in-list.fab-button-show){-webkit-transform:scale(1);transform:scale(1);opacity:1;visibility:visible}:host(.fab-list-side-top){top:auto;bottom:0;-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.fab-list-side-start){margin-left:66px;margin-right:66px;margin-top:0;margin-bottom:0;right:0;-ms-flex-direction:row-reverse;flex-direction:row-reverse}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-start){margin-left:unset;margin-right:unset;-webkit-margin-start:66px;margin-inline-start:66px;-webkit-margin-end:66px;margin-inline-end:66px}}:host-context([dir=rtl]).fab-list-side-start,:host-context([dir=rtl]):host(.fab-list-side-start){left:unset;right:unset;left:0}:host(.fab-list-side-end){margin-left:66px;margin-right:66px;margin-top:0;margin-bottom:0;left:0;-ms-flex-direction:row;flex-direction:row}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-end){margin-left:unset;margin-right:unset;-webkit-margin-start:66px;margin-inline-start:66px;-webkit-margin-end:66px;margin-inline-end:66px}}:host-context([dir=rtl]).fab-list-side-end,:host-context([dir=rtl]):host(.fab-list-side-end){left:unset;right:unset;right:0}"; },
        enumerable: true,
        configurable: true
    });
    return FabList;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1mYWJfMy1tZC5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQzhFO0FBQy9GO0FBQ2dFO0FBQzlGO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1REFBUztBQUN4QixtQkFBbUIseURBQVc7QUFDOUI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQVU7QUFDN0IsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyx1Q0FBdUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsRUFBRSwyREFBQztBQUN4QjtBQUNBO0FBQ0EsMEJBQTBCLFFBQVEsMkRBQVUsT0FBTyxFQUFFO0FBQ3JEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGVBQWUsa0JBQWtCLFlBQVksOEJBQThCLFNBQVMsa0JBQWtCLHFHQUFxRyxXQUFXLFlBQVksVUFB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QUFRLHVEQUFTO0FBQzlEO0FBQ0EsV0FBVyx5REFBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDa0YiLCJmaWxlIjoiNTMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGdldElvbk1vZGUsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50LCBkIGFzIGNyZWF0ZUV2ZW50IH0gZnJvbSAnLi9jb3JlLWZlZWVmZjBkLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgaCBhcyBob3N0Q29udGV4dCwgbyBhcyBvcGVuVVJMLCBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcyB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xudmFyIEZhYiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18xKGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGZhYiB3aWxsIGRpc3BsYXkgb24gdGhlIGVkZ2Ugb2YgdGhlIGhlYWRlciBpZlxuICAgICAgICAgKiBgdmVydGljYWxgIGlzIGBcInRvcFwiYCwgYW5kIG9uIHRoZSBlZGdlIG9mIHRoZSBmb290ZXIgaWZcbiAgICAgICAgICogaXQgaXMgYFwiYm90dG9tXCJgLiBTaG91bGQgYmUgdXNlZCB3aXRoIGEgYGZpeGVkYCBzbG90LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5lZGdlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIGJvdGggdGhlIGBpb24tZmFiLWJ1dHRvbmAgYW5kIGFsbCBgaW9uLWZhYi1saXN0YCBpbnNpZGUgYGlvbi1mYWJgIHdpbGwgYmVjb21lIGFjdGl2ZS5cbiAgICAgICAgICogVGhhdCBtZWFucyBgaW9uLWZhYi1idXR0b25gIHdpbGwgYmVjb21lIGEgYGNsb3NlYCBpY29uIGFuZCBgaW9uLWZhYi1saXN0YCB3aWxsIGJlY29tZSB2aXNpYmxlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGhhc0xpc3QgPSAhIV90aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1mYWItbGlzdCcpO1xuICAgICAgICAgICAgdmFyIGdldEJ1dHRvbiA9IF90aGlzLmdldEZhYigpO1xuICAgICAgICAgICAgdmFyIGlzQnV0dG9uRGlzYWJsZWQgPSBnZXRCdXR0b24gJiYgZ2V0QnV0dG9uLmRpc2FibGVkO1xuICAgICAgICAgICAgaWYgKGhhc0xpc3QgJiYgIWlzQnV0dG9uRGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmF0ZWQgPSAhX3RoaXMuYWN0aXZhdGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBjbGFzc18xLnByb3RvdHlwZS5hY3RpdmF0ZWRDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYWN0aXZhdGVkID0gdGhpcy5hY3RpdmF0ZWQ7XG4gICAgICAgIHZhciBmYWIgPSB0aGlzLmdldEZhYigpO1xuICAgICAgICBpZiAoZmFiKSB7XG4gICAgICAgICAgICBmYWIuYWN0aXZhdGVkID0gYWN0aXZhdGVkO1xuICAgICAgICB9XG4gICAgICAgIEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tZmFiLWxpc3QnKSkuZm9yRWFjaChmdW5jdGlvbiAobGlzdCkge1xuICAgICAgICAgICAgbGlzdC5hY3RpdmF0ZWQgPSBhY3RpdmF0ZWQ7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29tcG9uZW50RGlkTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlZENoYW5nZWQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xvc2UgYW4gYWN0aXZlIEZBQiBsaXN0IGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZ2V0RmFiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpb24tZmFiLWJ1dHRvbicpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBfYiA9IHRoaXMsIGhvcml6b250YWwgPSBfYi5ob3Jpem9udGFsLCB2ZXJ0aWNhbCA9IF9iLnZlcnRpY2FsLCBlZGdlID0gX2IuZWRnZTtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssIGNsYXNzOiAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVttb2RlXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2FbXCJmYWItaG9yaXpvbnRhbC1cIiArIGhvcml6b250YWxdID0gaG9yaXpvbnRhbCAhPT0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIF9hW1wiZmFiLXZlcnRpY2FsLVwiICsgdmVydGljYWxdID0gdmVydGljYWwgIT09IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBfYVsnZmFiLWVkZ2UnXSA9IGVkZ2UsXG4gICAgICAgICAgICAgICAgX2EpIH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMS5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiYWN0aXZhdGVkXCI6IFtcImFjdGl2YXRlZENoYW5nZWRcIl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIjpob3N0e3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6OTk5fTpob3N0KC5mYWItaG9yaXpvbnRhbC1jZW50ZXIpe2xlZnQ6NTAlO21hcmdpbi1sZWZ0Oi0yOHB4fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5mYWItaG9yaXpvbnRhbC1jZW50ZXIsOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLmZhYi1ob3Jpem9udGFsLWNlbnRlcil7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDo1MCV9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0KC5mYWItaG9yaXpvbnRhbC1jZW50ZXIpe21hcmdpbi1sZWZ0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0Oi0yOHB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6LTI4cHh9fTpob3N0KC5mYWItaG9yaXpvbnRhbC1zdGFydCl7bGVmdDpjYWxjKDEwcHggKyB2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQsIDBweCkpfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5mYWItaG9yaXpvbnRhbC1zdGFydCw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCguZmFiLWhvcml6b250YWwtc3RhcnQpe2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6Y2FsYygxMHB4ICsgdmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0LCAwcHgpKX06aG9zdCguZmFiLWhvcml6b250YWwtZW5kKXtyaWdodDpjYWxjKDEwcHggKyB2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0LCAwcHgpKX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuZmFiLWhvcml6b250YWwtZW5kLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC5mYWItaG9yaXpvbnRhbC1lbmQpe2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7bGVmdDpjYWxjKDEwcHggKyB2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0LCAwcHgpKX06aG9zdCguZmFiLXZlcnRpY2FsLXRvcCl7dG9wOjEwcHh9Omhvc3QoLmZhYi12ZXJ0aWNhbC10b3AuZmFiLWVkZ2Upe3RvcDotMjhweH06aG9zdCguZmFiLXZlcnRpY2FsLWJvdHRvbSl7Ym90dG9tOjEwcHh9Omhvc3QoLmZhYi12ZXJ0aWNhbC1ib3R0b20uZmFiLWVkZ2Upe2JvdHRvbTotMjhweH06aG9zdCguZmFiLXZlcnRpY2FsLWNlbnRlcil7bWFyZ2luLXRvcDotMjhweDt0b3A6NTAlfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NfMTtcbn0oKSk7XG52YXIgRmFiQnV0dG9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZhYkJ1dHRvbihob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBmYWIgYnV0dG9uIHdpbGwgYmUgc2hvdyBhIGNsb3NlIGljb24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFjdGl2YXRlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgZmFiIGJ1dHRvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gdXNpbmcgYSByb3V0ZXIsIGl0IHNwZWNpZmllcyB0aGUgdHJhbnNpdGlvbiBkaXJlY3Rpb24gd2hlbiBuYXZpZ2F0aW5nIHRvXG4gICAgICAgICAqIGFub3RoZXIgcGFnZSB1c2luZyBgaHJlZmAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJvdXRlckRpcmVjdGlvbiA9ICdmb3J3YXJkJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGZhYiBidXR0b24gd2lsbCBzaG93IHdoZW4gaW4gYSBmYWItbGlzdC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgZmFiIGJ1dHRvbiB3aWxsIGJlIHRyYW5zbHVjZW50LlxuICAgICAgICAgKiBPbmx5IGFwcGxpZXMgd2hlbiB0aGUgbW9kZSBpcyBgXCJpb3NcImAgYW5kIHRoZSBkZXZpY2Ugc3VwcG9ydHNcbiAgICAgICAgICogW2BiYWNrZHJvcC1maWx0ZXJgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2Ryb3AtZmlsdGVyI0Jyb3dzZXJfY29tcGF0aWJpbGl0eSkuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyYW5zbHVjZW50ID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBvZiB0aGUgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIHRoaXMub25Gb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmlvbkZvY3VzLmVtaXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5pb25CbHVyLmVtaXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pb25Gb2N1cyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uRm9jdXNcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uQmx1ciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQmx1clwiLCA3KTtcbiAgICB9XG4gICAgRmFiQnV0dG9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9iID0gdGhpcywgZWwgPSBfYi5lbCwgZGlzYWJsZWQgPSBfYi5kaXNhYmxlZCwgY29sb3IgPSBfYi5jb2xvciwgaHJlZiA9IF9iLmhyZWYsIGFjdGl2YXRlZCA9IF9iLmFjdGl2YXRlZCwgc2hvdyA9IF9iLnNob3csIHRyYW5zbHVjZW50ID0gX2IudHJhbnNsdWNlbnQsIHNpemUgPSBfYi5zaXplO1xuICAgICAgICB2YXIgaW5MaXN0ID0gaG9zdENvbnRleHQoJ2lvbi1mYWItbGlzdCcsIGVsKTtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICB2YXIgVGFnVHlwZSA9IGhyZWYgPT09IHVuZGVmaW5lZCA/ICdidXR0b24nIDogJ2EnO1xuICAgICAgICB2YXIgYXR0cnMgPSAoVGFnVHlwZSA9PT0gJ2J1dHRvbicpXG4gICAgICAgICAgICA/IHsgdHlwZTogdGhpcy50eXBlIH1cbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIGRvd25sb2FkOiB0aGlzLmRvd25sb2FkLFxuICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICAgICAgcmVsOiB0aGlzLnJlbCxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMudGFyZ2V0XG4gICAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtZGlzYWJsZWRcIjogZGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsLCBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjcmVhdGVDb2xvckNsYXNzZXMoY29sb3IpKSwgKF9hID0ge30sIF9hW21vZGVdID0gdHJ1ZSwgX2FbJ2ZhYi1idXR0b24taW4tbGlzdCddID0gaW5MaXN0LCBfYVsnZmFiLWJ1dHRvbi10cmFuc2x1Y2VudC1pbi1saXN0J10gPSBpbkxpc3QgJiYgdHJhbnNsdWNlbnQsIF9hWydmYWItYnV0dG9uLWNsb3NlLWFjdGl2ZSddID0gYWN0aXZhdGVkLCBfYVsnZmFiLWJ1dHRvbi1zaG93J10gPSBzaG93LCBfYVsnZmFiLWJ1dHRvbi1kaXNhYmxlZCddID0gZGlzYWJsZWQsIF9hWydmYWItYnV0dG9uLXRyYW5zbHVjZW50J10gPSB0cmFuc2x1Y2VudCwgX2FbJ2lvbi1hY3RpdmF0YWJsZSddID0gdHJ1ZSwgX2FbJ2lvbi1mb2N1c2FibGUnXSA9IHRydWUsIF9hW1wiZmFiLWJ1dHRvbi1cIiArIHNpemVdID0gc2l6ZSAhPT0gdW5kZWZpbmVkLCBfYSkpIH0sIGgoVGFnVHlwZSwgT2JqZWN0LmFzc2lnbih7fSwgYXR0cnMsIHsgY2xhc3M6IFwiYnV0dG9uLW5hdGl2ZVwiLCBkaXNhYmxlZDogZGlzYWJsZWQsIG9uRm9jdXM6IHRoaXMub25Gb2N1cywgb25CbHVyOiB0aGlzLm9uQmx1ciwgb25DbGljazogZnVuY3Rpb24gKGV2KSB7IHJldHVybiBvcGVuVVJMKGhyZWYsIGV2LCBfdGhpcy5yb3V0ZXJEaXJlY3Rpb24pOyB9IH0pLCBoKFwic3BhblwiLCB7IGNsYXNzOiBcImNsb3NlLWljb25cIiB9LCBoKFwiaW9uLWljb25cIiwgeyBuYW1lOiBcImNsb3NlXCIsIGxhenk6IGZhbHNlIH0pKSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJidXR0b24taW5uZXJcIiB9LCBoKFwic2xvdFwiLCBudWxsKSksIG1vZGUgPT09ICdtZCcgJiYgaChcImlvbi1yaXBwbGUtZWZmZWN0XCIsIG51bGwpKSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZhYkJ1dHRvbi5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWJCdXR0b24sIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiOmhvc3R7LS1jb2xvci1ob3Zlcjp2YXIoLS1jb2xvcik7LS1iYWNrZ3JvdW5kLWhvdmVyOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQsIzRjOGRmZik7LS10cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3Isb3BhY2l0eSAxMDBtcyBsaW5lYXI7LS1yaXBwbGUtY29sb3I6Y3VycmVudENvbG9yOy0tYm9yZGVyLXJhZGl1czo1MCU7LS1ib3JkZXItd2lkdGg6MDstLWJvcmRlci1zdHlsZTpub25lOy0tYm9yZGVyLWNvbG9yOmluaXRpYWw7LS1wYWRkaW5nLXRvcDowOy0tcGFkZGluZy1lbmQ6MDstLXBhZGRpbmctYm90dG9tOjA7LS1wYWRkaW5nLXN0YXJ0OjA7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO2Rpc3BsYXk6YmxvY2s7d2lkdGg6NTZweDtoZWlnaHQ6NTZweDtmb250LXNpemU6MTRweDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3RleHQtdHJhbnNmb3JtOm5vbmU7d2hpdGUtc3BhY2U6bm93cmFwOy13ZWJraXQtZm9udC1rZXJuaW5nOm5vbmU7Zm9udC1rZXJuaW5nOm5vbmV9LmJ1dHRvbi1uYXRpdmV7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtwYWRkaW5nLWxlZnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1yaWdodDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmctYm90dG9tKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06dmFyKC0tdHJhbnNmb3JtKTt0cmFuc2Zvcm06dmFyKC0tdHJhbnNmb3JtKTstd2Via2l0LXRyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7dHJhbnNpdGlvbjp2YXIoLS10cmFuc2l0aW9uKTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7Y29sb3I6dmFyKC0tY29sb3IpOy13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpO2NvbnRhaW46c3RyaWN0O2N1cnNvcjpwb2ludGVyO292ZXJmbG93OmhpZGRlbjt6LWluZGV4OjA7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmJ1dHRvbi1uYXRpdmV7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCl9fS5idXR0b24taW5uZXJ7bGVmdDowO3JpZ2h0OjA7dG9wOjA7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7LW1zLWZsZXgtZmxvdzpyb3cgbm93cmFwO2ZsZXgtZmxvdzpyb3cgbm93cmFwOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7aGVpZ2h0OjEwMCU7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuM3MgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjphbGwgLjNzIGVhc2UtaW4tb3V0Oy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5LC13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eSwtd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSxvcGFjaXR5O3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLG9wYWNpdHksLXdlYmtpdC10cmFuc2Zvcm19Omhvc3QoLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdCguZmFiLWJ1dHRvbi1kaXNhYmxlZCl7b3BhY2l0eTouNTtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5mYWItYnV0dG9uLWRpc2FibGVkKSAuYnV0dG9uLW5hdGl2ZXtjdXJzb3I6ZGVmYXVsdDtwb2ludGVyLWV2ZW50czpub25lfVxcQG1lZGlhIChhbnktaG92ZXI6aG92ZXIpezpob3N0KDpob3ZlcikgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtjb2xvcjp2YXIoLS1jb2xvci1ob3Zlcil9Omhvc3QoLmlvbi1jb2xvcjpob3ZlcikgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItdGludCk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX19Omhvc3QoLmlvbi1mb2N1c2VkKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtZm9jdXNlZCk7Y29sb3I6dmFyKC0tY29sb3ItZm9jdXNlZCl9Omhvc3QoLmlvbi1jb2xvci5pb24tZm9jdXNlZCkgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc2hhZGUpfTpob3N0KC5hY3RpdmF0ZWQpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQpO2NvbG9yOnZhcigtLWNvbG9yLWFjdGl2YXRlZCl9Omhvc3QoLmlvbi1jb2xvci5hY3RpdmF0ZWQpIC5idXR0b24tbmF0aXZlLDpob3N0KC5pb24tY29sb3IuaW9uLWZvY3VzZWQpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXNoYWRlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTo6c2xvdHRlZChpb24taWNvbil7bGluZS1oZWlnaHQ6MX06aG9zdCguZmFiLWJ1dHRvbi1zbWFsbCl7bWFyZ2luLWxlZnQ6OHB4O21hcmdpbi1yaWdodDo4cHg7bWFyZ2luLXRvcDo4cHg7bWFyZ2luLWJvdHRvbTo4cHg7d2lkdGg6NDBweDtoZWlnaHQ6NDBweH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3QoLmZhYi1idXR0b24tc21hbGwpe21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDo4cHg7bWFyZ2luLWlubGluZS1zdGFydDo4cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjhweDttYXJnaW4taW5saW5lLWVuZDo4cHh9fS5jbG9zZS1pY29ue2xlZnQ6MDtyaWdodDowO3RvcDowO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtoZWlnaHQ6MTAwJTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCkgcm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnNjYWxlKC40KSByb3RhdGUoLTQ1ZGVnKTstd2Via2l0LXRyYW5zaXRpb246YWxsIC4zcyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOmFsbCAuM3MgZWFzZS1pbi1vdXQ7LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHksLXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5LC13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLG9wYWNpdHk7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sb3BhY2l0eSwtd2Via2l0LXRyYW5zZm9ybTtvcGFjaXR5OjB9Omhvc3QoLmZhYi1idXR0b24tY2xvc2UtYWN0aXZlKSAuY2xvc2UtaWNvbnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKSByb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtvcGFjaXR5OjF9Omhvc3QoLmZhYi1idXR0b24tY2xvc2UtYWN0aXZlKSAuYnV0dG9uLWlubmVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KSByb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpzY2FsZSguNCkgcm90YXRlKDQ1ZGVnKTtvcGFjaXR5OjB9aW9uLXJpcHBsZS1lZmZlY3R7Y29sb3I6dmFyKC0tcmlwcGxlLWNvbG9yKX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOmJsdXIoMCkpIG9yIChiYWNrZHJvcC1maWx0ZXI6Ymx1cigwKSkpezpob3N0KC5mYWItYnV0dG9uLXRyYW5zbHVjZW50KSAuYnV0dG9uLW5hdGl2ZXstd2Via2l0LWJhY2tkcm9wLWZpbHRlcjp2YXIoLS1iYWNrZHJvcC1maWx0ZXIpO2JhY2tkcm9wLWZpbHRlcjp2YXIoLS1iYWNrZHJvcC1maWx0ZXIpfX06aG9zdHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZik7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS1iYWNrZ3JvdW5kKTstLWJhY2tncm91bmQtZm9jdXNlZDp2YXIoLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZCk7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwjZmZmKTstLWNvbG9yLWFjdGl2YXRlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwjZmZmKTstLWNvbG9yLWZvY3VzZWQ6dmFyKC0tY29sb3ItYWN0aXZhdGVkKTstLWJveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwwLjIpLDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLDAuMTQpLDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLDAuMTIpOy0tdHJhbnNpdGlvbjpib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsMCwwLjIsMSksYmFja2dyb3VuZC1jb2xvciAyODBtcyBjdWJpYy1iZXppZXIoMC40LDAsMC4yLDEpLGNvbG9yIDI4MG1zIGN1YmljLWJlemllcigwLjQsMCwwLjIsMSksb3BhY2l0eSAxNW1zIGxpbmVhciAzMG1zLHRyYW5zZm9ybSAyNzBtcyBjdWJpYy1iZXppZXIoMCwwLDAuMiwxKSAwbXN9Omhvc3QoLmFjdGl2YXRlZCl7LS1ib3gtc2hhZG93OjAgN3B4IDhweCAtNHB4IHJnYmEoMCwwLDAsMC4yKSwwIDEycHggMTdweCAycHggcmdiYSgwLDAsMCwwLjE0KSwwIDVweCAyMnB4IDRweCByZ2JhKDAsMCwwLDAuMTIpfS5jbG9zZS1pY29uLDo6c2xvdHRlZChpb24taWNvbil7Zm9udC1zaXplOjI0cHh9Omhvc3QoLmZhYi1idXR0b24taW4tbGlzdCl7LS1jb2xvcjpyZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksMC41NCk7LS1jb2xvci1hY3RpdmF0ZWQ6cmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLDAuNTQpOy0tY29sb3ItZm9jdXNlZDp2YXIoLS1jb2xvci1hY3RpdmF0ZWQpOy0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItbGlnaHQsI2Y0ZjVmOCk7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUsI2Q3ZDhkYSk7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dmFyKC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQpOy0tYmFja2dyb3VuZC1ob3Zlcjp2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCwjZjVmNmY5KX06aG9zdCguZmFiLWJ1dHRvbi1pbi1saXN0KSA6OnNsb3R0ZWQoaW9uLWljb24pe2ZvbnQtc2l6ZToxOHB4fVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gRmFiQnV0dG9uO1xufSgpKTtcbnZhciBGYWJMaXN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZhYkxpc3QoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgZmFiIGxpc3Qgd2lsbCBzaG93IGFsbCBmYWIgYnV0dG9ucyBpbiB0aGUgbGlzdC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2lkZSB0aGUgZmFiIGxpc3Qgd2lsbCBzaG93IG9uIHJlbGF0aXZlIHRvIHRoZSBtYWluIGZhYiBidXR0b24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNpZGUgPSAnYm90dG9tJztcbiAgICB9XG4gICAgRmFiTGlzdC5wcm90b3R5cGUuYWN0aXZhdGVkQ2hhbmdlZCA9IGZ1bmN0aW9uIChhY3RpdmF0ZWQpIHtcbiAgICAgICAgdmFyIGZhYnMgPSBBcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnaW9uLWZhYi1idXR0b24nKSk7XG4gICAgICAgIC8vIGlmIHNob3dpbmcgdGhlIGZhYnMgYWRkIGEgdGltZW91dCwgZWxzZSBzaG93IGltbWVkaWF0ZWx5XG4gICAgICAgIHZhciB0aW1lb3V0ID0gYWN0aXZhdGVkID8gMzAgOiAwO1xuICAgICAgICBmYWJzLmZvckVhY2goZnVuY3Rpb24gKGZhYiwgaSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBmYWIuc2hvdyA9IGFjdGl2YXRlZDsgfSwgaSAqIHRpbWVvdXQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEZhYkxpc3QucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVttb2RlXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2FbJ2ZhYi1saXN0LWFjdGl2ZSddID0gdGhpcy5hY3RpdmF0ZWQsXG4gICAgICAgICAgICAgICAgX2FbXCJmYWItbGlzdC1zaWRlLVwiICsgdGhpcy5zaWRlXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2EpIH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFiTGlzdC5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWJMaXN0LCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiYWN0aXZhdGVkXCI6IFtcImFjdGl2YXRlZENoYW5nZWRcIl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWJMaXN0LCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIjpob3N0e21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDo2NnB4O21hcmdpbi1ib3R0b206NjZweDtkaXNwbGF5Om5vbmU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjttaW4td2lkdGg6NTZweDttaW4taGVpZ2h0OjU2cHh9Omhvc3QoLmZhYi1saXN0LWFjdGl2ZSl7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9OjpzbG90dGVkKC5mYWItYnV0dG9uLWluLWxpc3Qpe21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDo4cHg7bWFyZ2luLWJvdHRvbTo4cHg7d2lkdGg6NDBweDtoZWlnaHQ6NDBweDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCk7b3BhY2l0eTowO3Zpc2liaWxpdHk6aGlkZGVufTpob3N0KC5mYWItbGlzdC1zaWRlLWJvdHRvbSkgOjpzbG90dGVkKC5mYWItYnV0dG9uLWluLWxpc3QpLDpob3N0KC5mYWItbGlzdC1zaWRlLXRvcCkgOjpzbG90dGVkKC5mYWItYnV0dG9uLWluLWxpc3Qpe21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDo1cHg7bWFyZ2luLWJvdHRvbTo1cHh9Omhvc3QoLmZhYi1saXN0LXNpZGUtZW5kKSA6OnNsb3R0ZWQoLmZhYi1idXR0b24taW4tbGlzdCksOmhvc3QoLmZhYi1saXN0LXNpZGUtc3RhcnQpIDo6c2xvdHRlZCguZmFiLWJ1dHRvbi1pbi1saXN0KXttYXJnaW4tbGVmdDo1cHg7bWFyZ2luLXJpZ2h0OjVweDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdCguZmFiLWxpc3Qtc2lkZS1lbmQpIDo6c2xvdHRlZCguZmFiLWJ1dHRvbi1pbi1saXN0KSw6aG9zdCguZmFiLWxpc3Qtc2lkZS1zdGFydCkgOjpzbG90dGVkKC5mYWItYnV0dG9uLWluLWxpc3Qpe21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDo1cHg7bWFyZ2luLWlubGluZS1zdGFydDo1cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjVweDttYXJnaW4taW5saW5lLWVuZDo1cHh9fTo6c2xvdHRlZCguZmFiLWJ1dHRvbi1pbi1saXN0LmZhYi1idXR0b24tc2hvdyl7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MTt2aXNpYmlsaXR5OnZpc2libGV9Omhvc3QoLmZhYi1saXN0LXNpZGUtdG9wKXt0b3A6YXV0bztib3R0b206MDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uLXJldmVyc2U7ZmxleC1kaXJlY3Rpb246Y29sdW1uLXJldmVyc2V9Omhvc3QoLmZhYi1saXN0LXNpZGUtc3RhcnQpe21hcmdpbi1sZWZ0OjY2cHg7bWFyZ2luLXJpZ2h0OjY2cHg7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtyaWdodDowOy1tcy1mbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZTtmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3QoLmZhYi1saXN0LXNpZGUtc3RhcnQpe21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDo2NnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6NjZweDstd2Via2l0LW1hcmdpbi1lbmQ6NjZweDttYXJnaW4taW5saW5lLWVuZDo2NnB4fX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuZmFiLWxpc3Qtc2lkZS1zdGFydCw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCguZmFiLWxpc3Qtc2lkZS1zdGFydCl7bGVmdDp1bnNldDtyaWdodDp1bnNldDtsZWZ0OjB9Omhvc3QoLmZhYi1saXN0LXNpZGUtZW5kKXttYXJnaW4tbGVmdDo2NnB4O21hcmdpbi1yaWdodDo2NnB4O21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7bGVmdDowOy1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdCguZmFiLWxpc3Qtc2lkZS1lbmQpe21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDo2NnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6NjZweDstd2Via2l0LW1hcmdpbi1lbmQ6NjZweDttYXJnaW4taW5saW5lLWVuZDo2NnB4fX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuZmFiLWxpc3Qtc2lkZS1lbmQsOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLmZhYi1saXN0LXNpZGUtZW5kKXtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjB9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBGYWJMaXN0O1xufSgpKTtcbmV4cG9ydCB7IEZhYiBhcyBpb25fZmFiLCBGYWJCdXR0b24gYXMgaW9uX2ZhYl9idXR0b24sIEZhYkxpc3QgYXMgaW9uX2ZhYl9saXN0IH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG52YXIgaG9zdENvbnRleHQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGVsKSB7XG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xufTtcbi8qKlxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxuICovXG52YXIgY3JlYXRlQ29sb3JDbGFzc2VzID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IChfYSA9IHtcbiAgICAgICAgICAgICdpb24tY29sb3InOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIF9hW1wiaW9uLWNvbG9yLVwiICsgY29sb3JdID0gdHJ1ZSxcbiAgICAgICAgX2EpIDogdW5kZWZpbmVkO1xufTtcbnZhciBnZXRDbGFzc0xpc3QgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgIHJldHVybiBhcnJheVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPSBudWxsOyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50cmltKCk7IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSAnJzsgfSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbn07XG52YXIgZ2V0Q2xhc3NNYXAgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gbWFwW2NdID0gdHJ1ZTsgfSk7XG4gICAgcmV0dXJuIG1hcDtcbn07XG52YXIgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XG52YXIgb3BlblVSTCA9IGZ1bmN0aW9uICh1cmwsIGV2LCBkaXJlY3Rpb24pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvdXRlcjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgICAgICAgaWYgKHJvdXRlcikge1xuICAgICAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbildO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=