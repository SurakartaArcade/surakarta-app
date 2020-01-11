(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-fab_3-ios.entry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-fab_3-ios.entry.js ***!
  \**********************************************************************/
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
        get: function () { return ":host{--color-hover:var(--color);--background-hover:var(--ion-color-primary-tint,#4c8dff);--transition:background-color,opacity 100ms linear;--ripple-color:currentColor;--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}:host(.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.fab-button-disabled){opacity:.5;pointer-events:none}:host(.fab-button-disabled) .button-native{cursor:default;pointer-events:none}\@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}:host(.ion-color:hover) .button-native{background:var(--ion-color-tint);color:var(--ion-color-contrast)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color.ion-focused) .button-native{background:var(--ion-color-shade)}:host(.activated) .button-native{background:var(--background-activated);color:var(--color-activated)}:host(.ion-color.activated) .button-native,:host(.ion-color.ion-focused) .button-native{background:var(--ion-color-shade);color:var(--ion-color-contrast)}::slotted(ion-icon){line-height:1}:host(.fab-button-small){margin-left:8px;margin-right:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-button-small){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}.close-icon{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transform:scale(.4) rotate(-45deg);transform:scale(.4) rotate(-45deg);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;opacity:0}:host(.fab-button-close-active) .close-icon{-webkit-transform:scale(1) rotate(0deg);transform:scale(1) rotate(0deg);opacity:1}:host(.fab-button-close-active) .button-inner{-webkit-transform:scale(.4) rotate(45deg);transform:scale(.4) rotate(45deg);opacity:0}ion-ripple-effect{color:var(--ripple-color)}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.fab-button-translucent) .button-native{-webkit-backdrop-filter:var(--backdrop-filter);backdrop-filter:var(--backdrop-filter)}}:host{--background:var(--ion-color-primary,#3880ff);--background-activated:var(--ion-color-primary-shade,#3171e0);--background-focused:var(--background-activated);--color:var(--ion-color-primary-contrast,#fff);--color-activated:var(--ion-color-primary-contrast,#fff);--color-focused:var(--color-activated);--transition:0.2s transform cubic-bezier(0.25,1.11,0.78,1.59)}:host,:host(.activated){--box-shadow:0 4px 16px rgba(0,0,0,0.12)}:host(.activated){--transform:scale(1.1);--transition:0.2s transform ease-out}.close-icon,::slotted(ion-icon){font-size:28px}:host(.fab-button-in-list){--background:var(--ion-color-light,#f4f5f8);--background-activated:var(--ion-color-light-shade,#d7d8da);--background-focused:var(--background-activated);--background-hover:var(--ion-color-light-tint,#f5f6f9);--color:var(--ion-color-light-contrast,#000);--color-activated:var(--ion-color-light-contrast,#000);--color-focused:var(--color-activated);--transition:transform 200ms ease 10ms,opacity 200ms ease 10ms}:host(.fab-button-in-list) ::slotted(ion-icon){font-size:18px}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.fab-button-translucent){--background:rgba(var(--ion-color-primary-rgb,56,128,255),0.9);--background-hover:rgba(var(--ion-color-primary-rgb,56,128,255),0.8);--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.82);--backdrop-filter:saturate(180%) blur(20px)}:host(.fab-button-translucent-in-list){--background:rgba(var(--ion-color-light-rgb,244,245,248),0.9);--background-hover:rgba(var(--ion-color-light-rgb,244,245,248),0.8);--background-focused:rgba(var(--ion-color-light-rgb,244,245,248),0.82)}}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){\@media (any-hover:hover){:host(.fab-button-translucent.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb),.8)}}:host(.ion-color.fab-button-translucent) .button-native{background:rgba(var(--ion-color-base-rgb),.9)}:host(.ion-color.activated.fab-button-translucent) .button-native,:host(.ion-color.ion-focused.fab-button-translucent) .button-native{background:var(--ion-color-base)}}"; },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1mYWJfMy1pb3MuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLWVzNS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUM4RTtBQUMvRjtBQUNnRTtBQUM5RjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdURBQVM7QUFDeEIsbUJBQW1CLHlEQUFXO0FBQzlCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFVO0FBQzdCLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUcsdUNBQXVDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLEVBQUUsMkRBQUM7QUFDeEI7QUFDQTtBQUNBLDBCQUEwQixRQUFRLDJEQUFVLE9BQU8sRUFBRTtBQUNyRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixlQUFlLGtCQUFrQixZQUFZLDhCQUE4QixTQUFTLGtCQUFrQixxR0FBcUcsV0FBVyxZQUFZLFVBQVUsNkZBQTZGLDhCQUE4QixrQkFBa0IsMkJBQTJCLDJCQUEyQiw2QkFBNkIsaURBQWlELG1HQUFtRyxXQUFXLFlBQVksa0RBQWtELDJCQUEyQixtREFBbUQsK0ZBQStGLFdBQVcsWUFBWSxrREFBa0QseUJBQXlCLFNBQVMsa0NBQWtDLFVBQVUsNEJBQTRCLFlBQVkscUNBQXFDLGFBQWEsNEJBQTRCLGlCQUFpQixRQUFRLEVBQUUsRUFBRTtBQUMxcEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkRBQVc7QUFDbkMsdUJBQXVCLDJEQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNERBQVc7QUFDaEMsbUJBQW1CLDJEQUFVO0FBQzdCO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyxpRkFBaUYsRUFBRSw0REFBa0Isa0JBQWtCLDhYQUE4WCxFQUFFLDJEQUFDLDBCQUEwQixVQUFVLGlIQUFpSCxRQUFRLDREQUFPLGtDQUFrQyxFQUFFLEVBQUUsR0FBRywyREFBQyxVQUFVLHNCQUFzQixFQUFFLDJEQUFDLGNBQWMsNkJBQTZCLElBQUksMkRBQUMsVUFBVSx3QkFBd0IsRUFBRSwyREFBQyxrQ0FBa0MsMkRBQUM7QUFDMTNCO0FBQ0E7QUFDQSwwQkFBMEIsUUFBUSwyREFBVSxPQUFPLEVBQUU7QUFDckQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixlQUFlLDJCQUEyQix5REFBeUQsbURBQW1ELDRCQUE0QixvQkFBb0IsaUJBQWlCLG9CQUFvQix1QkFBdUIsZ0JBQWdCLGdCQUFnQixtQkFBbUIsa0JBQWtCLGNBQWMsZUFBZSxhQUFhLGdCQUFnQixjQUFjLFdBQVcsWUFBWSxlQUFlLGtCQUFrQix1QkFBdUIsb0JBQW9CLG1CQUFtQiwwQkFBMEIsa0JBQWtCLGVBQWUsbUNBQW1DLGtDQUFrQyxpQ0FBaUMsK0JBQStCLHFDQUFxQyxvQkFBb0Isa0JBQWtCLG1CQUFtQixvQkFBb0IsdUJBQXVCLHdCQUF3QixzQkFBc0IsdUJBQXVCLG1CQUFtQixvQkFBb0IsY0FBYyxjQUFjLGtCQUFrQixXQUFXLFlBQVksbUNBQW1DLDJCQUEyQixxQ0FBcUMsNkJBQTZCLGlDQUFpQyxpQ0FBaUMsaUNBQWlDLGFBQWEsNkJBQTZCLDRCQUE0QixtQkFBbUIscUNBQXFDLDZCQUE2QixlQUFlLGVBQWUsZ0JBQWdCLFVBQVUsd0JBQXdCLHFCQUFxQixnQkFBZ0IsOEJBQThCLHNCQUFzQiw2RkFBNkYsZUFBZSxtQkFBbUIsb0JBQW9CLDJDQUEyQywwQ0FBMEMsdUNBQXVDLHVDQUF1QyxjQUFjLE9BQU8sUUFBUSxNQUFNLG9CQUFvQixhQUFhLGtCQUFrQix5QkFBeUIscUJBQXFCLG9CQUFvQixjQUFjLHNCQUFzQixtQkFBbUIscUJBQXFCLHVCQUF1QixZQUFZLHVDQUF1QywrQkFBK0Isc0RBQXNELDhDQUE4QyxzQ0FBc0Msd0RBQXdELGlDQUFpQyxpQ0FBaUMsZ0NBQWdDLDRCQUE0QixXQUFXLG9CQUFvQiwyQ0FBMkMsZUFBZSxvQkFBb0IsMEJBQTBCLDZCQUE2QixtQ0FBbUMseUJBQXlCLHVDQUF1QyxpQ0FBaUMsaUNBQWlDLG1DQUFtQyxxQ0FBcUMsMkJBQTJCLDZDQUE2QyxrQ0FBa0MsaUNBQWlDLHVDQUF1Qyw2QkFBNkIsd0ZBQXdGLGtDQUFrQyxnQ0FBZ0Msb0JBQW9CLGNBQWMseUJBQXlCLGdCQUFnQixpQkFBaUIsZUFBZSxrQkFBa0IsV0FBVyxZQUFZLDZGQUE2Rix5QkFBeUIsa0JBQWtCLG1CQUFtQix5QkFBeUIsd0JBQXdCLHVCQUF1Qix1QkFBdUIsWUFBWSxPQUFPLFFBQVEsTUFBTSxvQkFBb0IsYUFBYSxrQkFBa0Isc0JBQXNCLG1CQUFtQixxQkFBcUIsdUJBQXVCLFlBQVksMkNBQTJDLG1DQUFtQyx1Q0FBdUMsK0JBQStCLHNEQUFzRCw4Q0FBOEMsc0NBQXNDLHdEQUF3RCxVQUFVLDRDQUE0Qyx3Q0FBd0MsZ0NBQWdDLFVBQVUsOENBQThDLDBDQUEwQyxrQ0FBa0MsVUFBVSxrQkFBa0IsMEJBQTBCLDRFQUE0RSw4Q0FBOEMsK0NBQStDLHdDQUF3QyxNQUFNLDhDQUE4Qyw4REFBOEQsaURBQWlELCtDQUErQyx5REFBeUQsdUNBQXVDLDhEQUE4RCx3QkFBd0IseUNBQXlDLGtCQUFrQix1QkFBdUIscUNBQXFDLGdDQUFnQyxlQUFlLDJCQUEyQiw0Q0FBNEMsNERBQTRELGlEQUFpRCx1REFBdUQsNkNBQTZDLHVEQUF1RCx1Q0FBdUMsK0RBQStELCtDQUErQyxlQUFlLDRFQUE0RSwrQkFBK0IsK0RBQStELHFFQUFxRSx3RUFBd0UsNENBQTRDLHVDQUF1Qyw4REFBOEQsb0VBQW9FLHdFQUF3RSw0RUFBNEUsMEJBQTBCLDhEQUE4RCwrQ0FBK0Msd0RBQXdELDhDQUE4QyxzSUFBc0ksa0NBQWtDLEVBQUUsRUFBRTtBQUN6dk47QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyw2QkFBNkIsRUFBRTtBQUNuRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFVO0FBQzdCLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUcsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixFQUFFLDJEQUFDO0FBQ3hCO0FBQ0E7QUFDQSwwQkFBMEIsUUFBUSwyREFBVSxPQUFPLEVBQUU7QUFDckQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZUFBZSxjQUFjLGVBQWUsZ0JBQWdCLG1CQUFtQixhQUFhLGtCQUFrQixNQUFNLDBCQUEwQixzQkFBc0Isc0JBQXNCLG1CQUFtQixlQUFlLGdCQUFnQix3QkFBd0Isb0JBQW9CLGFBQWEsK0JBQStCLGNBQWMsZUFBZSxlQUFlLGtCQUFrQixXQUFXLFlBQVksMkJBQTJCLG1CQUFtQixVQUFVLGtCQUFrQixxSEFBcUgsY0FBYyxlQUFlLGVBQWUsa0JBQWtCLG9IQUFvSCxnQkFBZ0IsaUJBQWlCLGFBQWEsZ0JBQWdCLDZGQUE2RixvSEFBb0gsa0JBQWtCLG1CQUFtQix5QkFBeUIsd0JBQXdCLHVCQUF1Qix1QkFBdUIsK0NBQStDLDJCQUEyQixtQkFBbUIsVUFBVSxtQkFBbUIsMEJBQTBCLFNBQVMsU0FBUyxrQ0FBa0MsOEJBQThCLDRCQUE0QixpQkFBaUIsa0JBQWtCLGFBQWEsZ0JBQWdCLFFBQVEsK0JBQStCLDJCQUEyQiw2RkFBNkYsNEJBQTRCLGtCQUFrQixtQkFBbUIsMEJBQTBCLHlCQUF5Qix3QkFBd0Isd0JBQXdCLGlHQUFpRyxXQUFXLFlBQVksT0FBTywwQkFBMEIsaUJBQWlCLGtCQUFrQixhQUFhLGdCQUFnQixPQUFPLHVCQUF1QixtQkFBbUIsNkZBQTZGLDBCQUEwQixrQkFBa0IsbUJBQW1CLDBCQUEwQix5QkFBeUIsd0JBQXdCLHdCQUF3Qiw2RkFBNkYsV0FBVyxZQUFZLFFBQVEsRUFBRSxFQUFFO0FBQ3I4RTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUMrRTs7Ozs7Ozs7Ozs7OztBQ2hOaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQixFQUFFO0FBQ3RELCtCQUErQixpQkFBaUIsRUFBRTtBQUNsRCxrQ0FBa0MsaUJBQWlCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxzQkFBc0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUSx1REFBUztBQUM5RDtBQUNBLFdBQVcseURBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFO0FBQ2tGIiwiZmlsZSI6IjUyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBnZXRJb25Nb2RlLCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCwgZCBhcyBjcmVhdGVFdmVudCB9IGZyb20gJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IGggYXMgaG9zdENvbnRleHQsIG8gYXMgb3BlblVSTCwgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcbnZhciBGYWIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMShob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBmYWIgd2lsbCBkaXNwbGF5IG9uIHRoZSBlZGdlIG9mIHRoZSBoZWFkZXIgaWZcbiAgICAgICAgICogYHZlcnRpY2FsYCBpcyBgXCJ0b3BcImAsIGFuZCBvbiB0aGUgZWRnZSBvZiB0aGUgZm9vdGVyIGlmXG4gICAgICAgICAqIGl0IGlzIGBcImJvdHRvbVwiYC4gU2hvdWxkIGJlIHVzZWQgd2l0aCBhIGBmaXhlZGAgc2xvdC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZWRnZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBib3RoIHRoZSBgaW9uLWZhYi1idXR0b25gIGFuZCBhbGwgYGlvbi1mYWItbGlzdGAgaW5zaWRlIGBpb24tZmFiYCB3aWxsIGJlY29tZSBhY3RpdmUuXG4gICAgICAgICAqIFRoYXQgbWVhbnMgYGlvbi1mYWItYnV0dG9uYCB3aWxsIGJlY29tZSBhIGBjbG9zZWAgaWNvbiBhbmQgYGlvbi1mYWItbGlzdGAgd2lsbCBiZWNvbWUgdmlzaWJsZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoYXNMaXN0ID0gISFfdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpb24tZmFiLWxpc3QnKTtcbiAgICAgICAgICAgIHZhciBnZXRCdXR0b24gPSBfdGhpcy5nZXRGYWIoKTtcbiAgICAgICAgICAgIHZhciBpc0J1dHRvbkRpc2FibGVkID0gZ2V0QnV0dG9uICYmIGdldEJ1dHRvbi5kaXNhYmxlZDtcbiAgICAgICAgICAgIGlmIChoYXNMaXN0ICYmICFpc0J1dHRvbkRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGVkID0gIV90aGlzLmFjdGl2YXRlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuYWN0aXZhdGVkQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFjdGl2YXRlZCA9IHRoaXMuYWN0aXZhdGVkO1xuICAgICAgICB2YXIgZmFiID0gdGhpcy5nZXRGYWIoKTtcbiAgICAgICAgaWYgKGZhYikge1xuICAgICAgICAgICAgZmFiLmFjdGl2YXRlZCA9IGFjdGl2YXRlZDtcbiAgICAgICAgfVxuICAgICAgICBBcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnaW9uLWZhYi1saXN0JykpLmZvckVhY2goZnVuY3Rpb24gKGxpc3QpIHtcbiAgICAgICAgICAgIGxpc3QuYWN0aXZhdGVkID0gYWN0aXZhdGVkO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbXBvbmVudERpZExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2YXRlZCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZWRDaGFuZ2VkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsb3NlIGFuIGFjdGl2ZSBGQUIgbGlzdCBjb250YWluZXIuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmdldEZhYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwucXVlcnlTZWxlY3RvcignaW9uLWZhYi1idXR0b24nKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLCBob3Jpem9udGFsID0gX2IuaG9yaXpvbnRhbCwgdmVydGljYWwgPSBfYi52ZXJ0aWNhbCwgZWRnZSA9IF9iLmVkZ2U7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5vbkNsaWNrLCBjbGFzczogKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hW1wiZmFiLWhvcml6b250YWwtXCIgKyBob3Jpem9udGFsXSA9IGhvcml6b250YWwgIT09IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBfYVtcImZhYi12ZXJ0aWNhbC1cIiArIHZlcnRpY2FsXSA9IHZlcnRpY2FsICE9PSB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgX2FbJ2ZhYi1lZGdlJ10gPSBlZGdlLFxuICAgICAgICAgICAgICAgIF9hKSB9LCBoKFwic2xvdFwiLCBudWxsKSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJ3YXRjaGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcImFjdGl2YXRlZFwiOiBbXCJhY3RpdmF0ZWRDaGFuZ2VkXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCI6aG9zdHtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4Ojk5OX06aG9zdCguZmFiLWhvcml6b250YWwtY2VudGVyKXtsZWZ0OjUwJTttYXJnaW4tbGVmdDotMjhweH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuZmFiLWhvcml6b250YWwtY2VudGVyLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC5mYWItaG9yaXpvbnRhbC1jZW50ZXIpe2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6NTAlfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdCguZmFiLWhvcml6b250YWwtY2VudGVyKXttYXJnaW4tbGVmdDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDotMjhweDttYXJnaW4taW5saW5lLXN0YXJ0Oi0yOHB4fX06aG9zdCguZmFiLWhvcml6b250YWwtc3RhcnQpe2xlZnQ6Y2FsYygxMHB4ICsgdmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0LCAwcHgpKX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuZmFiLWhvcml6b250YWwtc3RhcnQsOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLmZhYi1ob3Jpem9udGFsLXN0YXJ0KXtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OmNhbGMoMTBweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCwgMHB4KSl9Omhvc3QoLmZhYi1ob3Jpem9udGFsLWVuZCl7cmlnaHQ6Y2FsYygxMHB4ICsgdmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCwgMHB4KSl9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pLmZhYi1ob3Jpem9udGFsLWVuZCw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCguZmFiLWhvcml6b250YWwtZW5kKXtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O2xlZnQ6Y2FsYygxMHB4ICsgdmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCwgMHB4KSl9Omhvc3QoLmZhYi12ZXJ0aWNhbC10b3Ape3RvcDoxMHB4fTpob3N0KC5mYWItdmVydGljYWwtdG9wLmZhYi1lZGdlKXt0b3A6LTI4cHh9Omhvc3QoLmZhYi12ZXJ0aWNhbC1ib3R0b20pe2JvdHRvbToxMHB4fTpob3N0KC5mYWItdmVydGljYWwtYm90dG9tLmZhYi1lZGdlKXtib3R0b206LTI4cHh9Omhvc3QoLmZhYi12ZXJ0aWNhbC1jZW50ZXIpe21hcmdpbi10b3A6LTI4cHg7dG9wOjUwJX1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzE7XG59KCkpO1xudmFyIEZhYkJ1dHRvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGYWJCdXR0b24oaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgZmFiIGJ1dHRvbiB3aWxsIGJlIHNob3cgYSBjbG9zZSBpY29uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIGZhYiBidXR0b24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIHVzaW5nIGEgcm91dGVyLCBpdCBzcGVjaWZpZXMgdGhlIHRyYW5zaXRpb24gZGlyZWN0aW9uIHdoZW4gbmF2aWdhdGluZyB0b1xuICAgICAgICAgKiBhbm90aGVyIHBhZ2UgdXNpbmcgYGhyZWZgLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yb3V0ZXJEaXJlY3Rpb24gPSAnZm9yd2FyZCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBmYWIgYnV0dG9uIHdpbGwgc2hvdyB3aGVuIGluIGEgZmFiLWxpc3QuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGZhYiBidXR0b24gd2lsbCBiZSB0cmFuc2x1Y2VudC5cbiAgICAgICAgICogT25seSBhcHBsaWVzIHdoZW4gdGhlIG1vZGUgaXMgYFwiaW9zXCJgIGFuZCB0aGUgZGV2aWNlIHN1cHBvcnRzXG4gICAgICAgICAqIFtgYmFja2Ryb3AtZmlsdGVyYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tkcm9wLWZpbHRlciNCcm93c2VyX2NvbXBhdGliaWxpdHkpLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmFuc2x1Y2VudCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHR5cGUgb2YgdGhlIGJ1dHRvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHlwZSA9ICdidXR0b24nO1xuICAgICAgICB0aGlzLm9uRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5pb25Gb2N1cy5lbWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25CbHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaW9uQmx1ci5lbWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW9uRm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkZvY3VzXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJsdXJcIiwgNyk7XG4gICAgfVxuICAgIEZhYkJ1dHRvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYiA9IHRoaXMsIGVsID0gX2IuZWwsIGRpc2FibGVkID0gX2IuZGlzYWJsZWQsIGNvbG9yID0gX2IuY29sb3IsIGhyZWYgPSBfYi5ocmVmLCBhY3RpdmF0ZWQgPSBfYi5hY3RpdmF0ZWQsIHNob3cgPSBfYi5zaG93LCB0cmFuc2x1Y2VudCA9IF9iLnRyYW5zbHVjZW50LCBzaXplID0gX2Iuc2l6ZTtcbiAgICAgICAgdmFyIGluTGlzdCA9IGhvc3RDb250ZXh0KCdpb24tZmFiLWxpc3QnLCBlbCk7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgdmFyIFRhZ1R5cGUgPSBocmVmID09PSB1bmRlZmluZWQgPyAnYnV0dG9uJyA6ICdhJztcbiAgICAgICAgdmFyIGF0dHJzID0gKFRhZ1R5cGUgPT09ICdidXR0b24nKVxuICAgICAgICAgICAgPyB7IHR5cGU6IHRoaXMudHlwZSB9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBkb3dubG9hZDogdGhpcy5kb3dubG9hZCxcbiAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgIHJlbDogdGhpcy5yZWwsXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLnRhcmdldFxuICAgICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWRpc2FibGVkXCI6IGRpc2FibGVkID8gJ3RydWUnIDogbnVsbCwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKGNvbG9yKSksIChfYSA9IHt9LCBfYVttb2RlXSA9IHRydWUsIF9hWydmYWItYnV0dG9uLWluLWxpc3QnXSA9IGluTGlzdCwgX2FbJ2ZhYi1idXR0b24tdHJhbnNsdWNlbnQtaW4tbGlzdCddID0gaW5MaXN0ICYmIHRyYW5zbHVjZW50LCBfYVsnZmFiLWJ1dHRvbi1jbG9zZS1hY3RpdmUnXSA9IGFjdGl2YXRlZCwgX2FbJ2ZhYi1idXR0b24tc2hvdyddID0gc2hvdywgX2FbJ2ZhYi1idXR0b24tZGlzYWJsZWQnXSA9IGRpc2FibGVkLCBfYVsnZmFiLWJ1dHRvbi10cmFuc2x1Y2VudCddID0gdHJhbnNsdWNlbnQsIF9hWydpb24tYWN0aXZhdGFibGUnXSA9IHRydWUsIF9hWydpb24tZm9jdXNhYmxlJ10gPSB0cnVlLCBfYVtcImZhYi1idXR0b24tXCIgKyBzaXplXSA9IHNpemUgIT09IHVuZGVmaW5lZCwgX2EpKSB9LCBoKFRhZ1R5cGUsIE9iamVjdC5hc3NpZ24oe30sIGF0dHJzLCB7IGNsYXNzOiBcImJ1dHRvbi1uYXRpdmVcIiwgZGlzYWJsZWQ6IGRpc2FibGVkLCBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsIG9uQmx1cjogdGhpcy5vbkJsdXIsIG9uQ2xpY2s6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gb3BlblVSTChocmVmLCBldiwgX3RoaXMucm91dGVyRGlyZWN0aW9uKTsgfSB9KSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJjbG9zZS1pY29uXCIgfSwgaChcImlvbi1pY29uXCIsIHsgbmFtZTogXCJjbG9zZVwiLCBsYXp5OiBmYWxzZSB9KSksIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwiYnV0dG9uLWlubmVyXCIgfSwgaChcInNsb3RcIiwgbnVsbCkpLCBtb2RlID09PSAnbWQnICYmIGgoXCJpb24tcmlwcGxlLWVmZmVjdFwiLCBudWxsKSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWJCdXR0b24ucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFiQnV0dG9uLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIjpob3N0ey0tY29sb3ItaG92ZXI6dmFyKC0tY29sb3IpOy0tYmFja2dyb3VuZC1ob3Zlcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50LCM0YzhkZmYpOy0tdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yLG9wYWNpdHkgMTAwbXMgbGluZWFyOy0tcmlwcGxlLWNvbG9yOmN1cnJlbnRDb2xvcjstLWJvcmRlci1yYWRpdXM6NTAlOy0tYm9yZGVyLXdpZHRoOjA7LS1ib3JkZXItc3R5bGU6bm9uZTstLWJvcmRlci1jb2xvcjppbml0aWFsOy0tcGFkZGluZy10b3A6MDstLXBhZGRpbmctZW5kOjA7LS1wYWRkaW5nLWJvdHRvbTowOy0tcGFkZGluZy1zdGFydDowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtkaXNwbGF5OmJsb2NrO3dpZHRoOjU2cHg7aGVpZ2h0OjU2cHg7Zm9udC1zaXplOjE0cHg7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt0ZXh0LXRyYW5zZm9ybTpub25lO3doaXRlLXNwYWNlOm5vd3JhcDstd2Via2l0LWZvbnQta2VybmluZzpub25lO2ZvbnQta2VybmluZzpub25lfS5idXR0b24tbmF0aXZle2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7cGFkZGluZy1sZWZ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctcmlnaHQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsZXR0ZXItc3BhY2luZzppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3RleHQtYWxpZ246aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O2NvbG9yOmluaGVyaXQ7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlOy13ZWJraXQtdHJhbnNmb3JtOnZhcigtLXRyYW5zZm9ybSk7dHJhbnNmb3JtOnZhcigtLXRyYW5zZm9ybSk7LXdlYmtpdC10cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO3RyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7Ym9yZGVyLXdpZHRoOnZhcigtLWJvcmRlci13aWR0aCk7Ym9yZGVyLXN0eWxlOnZhcigtLWJvcmRlci1zdHlsZSk7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcik7b3V0bGluZTpub25lO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7YmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O2NvbG9yOnZhcigtLWNvbG9yKTstd2Via2l0LWJveC1zaGFkb3c6dmFyKC0tYm94LXNoYWRvdyk7Ym94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtjb250YWluOnN0cmljdDtjdXJzb3I6cG9pbnRlcjtvdmVyZmxvdzpoaWRkZW47ei1pbmRleDowOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5idXR0b24tbmF0aXZle3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpfX0uYnV0dG9uLWlubmVye2xlZnQ6MDtyaWdodDowO3RvcDowO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlOy1tcy1mbGV4LWZsb3c6cm93IG5vd3JhcDtmbGV4LWZsb3c6cm93IG5vd3JhcDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2hlaWdodDoxMDAlOy13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjNzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246YWxsIC4zcyBlYXNlLWluLW91dDstd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eSwtd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHksLXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sb3BhY2l0eTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSxvcGFjaXR5LC13ZWJraXQtdHJhbnNmb3JtfTpob3N0KC5pb24tY29sb3IpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Omhvc3QoLmZhYi1idXR0b24tZGlzYWJsZWQpe29wYWNpdHk6LjU7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCguZmFiLWJ1dHRvbi1kaXNhYmxlZCkgLmJ1dHRvbi1uYXRpdmV7Y3Vyc29yOmRlZmF1bHQ7cG9pbnRlci1ldmVudHM6bm9uZX1cXEBtZWRpYSAoYW55LWhvdmVyOmhvdmVyKXs6aG9zdCg6aG92ZXIpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7Y29sb3I6dmFyKC0tY29sb3ItaG92ZXIpfTpob3N0KC5pb24tY29sb3I6aG92ZXIpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXRpbnQpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9fTpob3N0KC5pb24tZm9jdXNlZCkgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWZvY3VzZWQpO2NvbG9yOnZhcigtLWNvbG9yLWZvY3VzZWQpfTpob3N0KC5pb24tY29sb3IuaW9uLWZvY3VzZWQpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXNoYWRlKX06aG9zdCguYWN0aXZhdGVkKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtYWN0aXZhdGVkKTtjb2xvcjp2YXIoLS1jb2xvci1hY3RpdmF0ZWQpfTpob3N0KC5pb24tY29sb3IuYWN0aXZhdGVkKSAuYnV0dG9uLW5hdGl2ZSw6aG9zdCguaW9uLWNvbG9yLmlvbi1mb2N1c2VkKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zaGFkZSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06OnNsb3R0ZWQoaW9uLWljb24pe2xpbmUtaGVpZ2h0OjF9Omhvc3QoLmZhYi1idXR0b24tc21hbGwpe21hcmdpbi1sZWZ0OjhweDttYXJnaW4tcmlnaHQ6OHB4O21hcmdpbi10b3A6OHB4O21hcmdpbi1ib3R0b206OHB4O3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHh9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0KC5mYWItYnV0dG9uLXNtYWxsKXttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6OHB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6OHB4Oy13ZWJraXQtbWFyZ2luLWVuZDo4cHg7bWFyZ2luLWlubGluZS1lbmQ6OHB4fX0uY2xvc2UtaWNvbntsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7aGVpZ2h0OjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpIHJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpzY2FsZSguNCkgcm90YXRlKC00NWRlZyk7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuM3MgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjphbGwgLjNzIGVhc2UtaW4tb3V0Oy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5LC13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eSwtd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSxvcGFjaXR5O3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLG9wYWNpdHksLXdlYmtpdC10cmFuc2Zvcm07b3BhY2l0eTowfTpob3N0KC5mYWItYnV0dG9uLWNsb3NlLWFjdGl2ZSkgLmNsb3NlLWljb257LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSkgcm90YXRlKDBkZWcpO3RyYW5zZm9ybTpzY2FsZSgxKSByb3RhdGUoMGRlZyk7b3BhY2l0eToxfTpob3N0KC5mYWItYnV0dG9uLWNsb3NlLWFjdGl2ZSkgLmJ1dHRvbi1pbm5lcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCkgcm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06c2NhbGUoLjQpIHJvdGF0ZSg0NWRlZyk7b3BhY2l0eTowfWlvbi1yaXBwbGUtZWZmZWN0e2NvbG9yOnZhcigtLXJpcHBsZS1jb2xvcil9XFxAc3VwcG9ydHMgKCgtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpibHVyKDApKSBvciAoYmFja2Ryb3AtZmlsdGVyOmJsdXIoMCkpKXs6aG9zdCguZmFiLWJ1dHRvbi10cmFuc2x1Y2VudCkgLmJ1dHRvbi1uYXRpdmV7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6dmFyKC0tYmFja2Ryb3AtZmlsdGVyKTtiYWNrZHJvcC1maWx0ZXI6dmFyKC0tYmFja2Ryb3AtZmlsdGVyKX19Omhvc3R7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsIzMxNzFlMCk7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dmFyKC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQpOy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsI2ZmZik7LS1jb2xvci1hY3RpdmF0ZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsI2ZmZik7LS1jb2xvci1mb2N1c2VkOnZhcigtLWNvbG9yLWFjdGl2YXRlZCk7LS10cmFuc2l0aW9uOjAuMnMgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjI1LDEuMTEsMC43OCwxLjU5KX06aG9zdCw6aG9zdCguYWN0aXZhdGVkKXstLWJveC1zaGFkb3c6MCA0cHggMTZweCByZ2JhKDAsMCwwLDAuMTIpfTpob3N0KC5hY3RpdmF0ZWQpey0tdHJhbnNmb3JtOnNjYWxlKDEuMSk7LS10cmFuc2l0aW9uOjAuMnMgdHJhbnNmb3JtIGVhc2Utb3V0fS5jbG9zZS1pY29uLDo6c2xvdHRlZChpb24taWNvbil7Zm9udC1zaXplOjI4cHh9Omhvc3QoLmZhYi1idXR0b24taW4tbGlzdCl7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1saWdodCwjZjRmNWY4KTstLWJhY2tncm91bmQtYWN0aXZhdGVkOnZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSwjZDdkOGRhKTstLWJhY2tncm91bmQtZm9jdXNlZDp2YXIoLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZCk7LS1iYWNrZ3JvdW5kLWhvdmVyOnZhcigtLWlvbi1jb2xvci1saWdodC10aW50LCNmNWY2ZjkpOy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LCMwMDApOy0tY29sb3ItYWN0aXZhdGVkOnZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCwjMDAwKTstLWNvbG9yLWZvY3VzZWQ6dmFyKC0tY29sb3ItYWN0aXZhdGVkKTstLXRyYW5zaXRpb246dHJhbnNmb3JtIDIwMG1zIGVhc2UgMTBtcyxvcGFjaXR5IDIwMG1zIGVhc2UgMTBtc306aG9zdCguZmFiLWJ1dHRvbi1pbi1saXN0KSA6OnNsb3R0ZWQoaW9uLWljb24pe2ZvbnQtc2l6ZToxOHB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6Ymx1cigwKSkgb3IgKGJhY2tkcm9wLWZpbHRlcjpibHVyKDApKSl7Omhvc3QoLmZhYi1idXR0b24tdHJhbnNsdWNlbnQpey0tYmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiw1NiwxMjgsMjU1KSwwLjkpOy0tYmFja2dyb3VuZC1ob3ZlcjpyZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiw1NiwxMjgsMjU1KSwwLjgpOy0tYmFja2dyb3VuZC1mb2N1c2VkOnJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLDU2LDEyOCwyNTUpLDAuODIpOy0tYmFja2Ryb3AtZmlsdGVyOnNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCl9Omhvc3QoLmZhYi1idXR0b24tdHJhbnNsdWNlbnQtaW4tbGlzdCl7LS1iYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiwyNDQsMjQ1LDI0OCksMC45KTstLWJhY2tncm91bmQtaG92ZXI6cmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiLDI0NCwyNDUsMjQ4KSwwLjgpOy0tYmFja2dyb3VuZC1mb2N1c2VkOnJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiwyNDQsMjQ1LDI0OCksMC44Mil9fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6Ymx1cigwKSkgb3IgKGJhY2tkcm9wLWZpbHRlcjpibHVyKDApKSl7XFxAbWVkaWEgKGFueS1ob3Zlcjpob3Zlcil7Omhvc3QoLmZhYi1idXR0b24tdHJhbnNsdWNlbnQuaW9uLWNvbG9yOmhvdmVyKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwuOCl9fTpob3N0KC5pb24tY29sb3IuZmFiLWJ1dHRvbi10cmFuc2x1Y2VudCkgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1iYXNlLXJnYiksLjkpfTpob3N0KC5pb24tY29sb3IuYWN0aXZhdGVkLmZhYi1idXR0b24tdHJhbnNsdWNlbnQpIC5idXR0b24tbmF0aXZlLDpob3N0KC5pb24tY29sb3IuaW9uLWZvY3VzZWQuZmFiLWJ1dHRvbi10cmFuc2x1Y2VudCkgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9fVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gRmFiQnV0dG9uO1xufSgpKTtcbnZhciBGYWJMaXN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZhYkxpc3QoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgZmFiIGxpc3Qgd2lsbCBzaG93IGFsbCBmYWIgYnV0dG9ucyBpbiB0aGUgbGlzdC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2lkZSB0aGUgZmFiIGxpc3Qgd2lsbCBzaG93IG9uIHJlbGF0aXZlIHRvIHRoZSBtYWluIGZhYiBidXR0b24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNpZGUgPSAnYm90dG9tJztcbiAgICB9XG4gICAgRmFiTGlzdC5wcm90b3R5cGUuYWN0aXZhdGVkQ2hhbmdlZCA9IGZ1bmN0aW9uIChhY3RpdmF0ZWQpIHtcbiAgICAgICAgdmFyIGZhYnMgPSBBcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnaW9uLWZhYi1idXR0b24nKSk7XG4gICAgICAgIC8vIGlmIHNob3dpbmcgdGhlIGZhYnMgYWRkIGEgdGltZW91dCwgZWxzZSBzaG93IGltbWVkaWF0ZWx5XG4gICAgICAgIHZhciB0aW1lb3V0ID0gYWN0aXZhdGVkID8gMzAgOiAwO1xuICAgICAgICBmYWJzLmZvckVhY2goZnVuY3Rpb24gKGZhYiwgaSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBmYWIuc2hvdyA9IGFjdGl2YXRlZDsgfSwgaSAqIHRpbWVvdXQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEZhYkxpc3QucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVttb2RlXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2FbJ2ZhYi1saXN0LWFjdGl2ZSddID0gdGhpcy5hY3RpdmF0ZWQsXG4gICAgICAgICAgICAgICAgX2FbXCJmYWItbGlzdC1zaWRlLVwiICsgdGhpcy5zaWRlXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2EpIH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFiTGlzdC5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWJMaXN0LCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiYWN0aXZhdGVkXCI6IFtcImFjdGl2YXRlZENoYW5nZWRcIl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWJMaXN0LCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIjpob3N0e21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDo2NnB4O21hcmdpbi1ib3R0b206NjZweDtkaXNwbGF5Om5vbmU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjttaW4td2lkdGg6NTZweDttaW4taGVpZ2h0OjU2cHh9Omhvc3QoLmZhYi1saXN0LWFjdGl2ZSl7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9OjpzbG90dGVkKC5mYWItYnV0dG9uLWluLWxpc3Qpe21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDo4cHg7bWFyZ2luLWJvdHRvbTo4cHg7d2lkdGg6NDBweDtoZWlnaHQ6NDBweDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCk7b3BhY2l0eTowO3Zpc2liaWxpdHk6aGlkZGVufTpob3N0KC5mYWItbGlzdC1zaWRlLWJvdHRvbSkgOjpzbG90dGVkKC5mYWItYnV0dG9uLWluLWxpc3QpLDpob3N0KC5mYWItbGlzdC1zaWRlLXRvcCkgOjpzbG90dGVkKC5mYWItYnV0dG9uLWluLWxpc3Qpe21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDo1cHg7bWFyZ2luLWJvdHRvbTo1cHh9Omhvc3QoLmZhYi1saXN0LXNpZGUtZW5kKSA6OnNsb3R0ZWQoLmZhYi1idXR0b24taW4tbGlzdCksOmhvc3QoLmZhYi1saXN0LXNpZGUtc3RhcnQpIDo6c2xvdHRlZCguZmFiLWJ1dHRvbi1pbi1saXN0KXttYXJnaW4tbGVmdDo1cHg7bWFyZ2luLXJpZ2h0OjVweDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdCguZmFiLWxpc3Qtc2lkZS1lbmQpIDo6c2xvdHRlZCguZmFiLWJ1dHRvbi1pbi1saXN0KSw6aG9zdCguZmFiLWxpc3Qtc2lkZS1zdGFydCkgOjpzbG90dGVkKC5mYWItYnV0dG9uLWluLWxpc3Qpe21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDo1cHg7bWFyZ2luLWlubGluZS1zdGFydDo1cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjVweDttYXJnaW4taW5saW5lLWVuZDo1cHh9fTo6c2xvdHRlZCguZmFiLWJ1dHRvbi1pbi1saXN0LmZhYi1idXR0b24tc2hvdyl7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MTt2aXNpYmlsaXR5OnZpc2libGV9Omhvc3QoLmZhYi1saXN0LXNpZGUtdG9wKXt0b3A6YXV0bztib3R0b206MDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uLXJldmVyc2U7ZmxleC1kaXJlY3Rpb246Y29sdW1uLXJldmVyc2V9Omhvc3QoLmZhYi1saXN0LXNpZGUtc3RhcnQpe21hcmdpbi1sZWZ0OjY2cHg7bWFyZ2luLXJpZ2h0OjY2cHg7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtyaWdodDowOy1tcy1mbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZTtmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3QoLmZhYi1saXN0LXNpZGUtc3RhcnQpe21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDo2NnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6NjZweDstd2Via2l0LW1hcmdpbi1lbmQ6NjZweDttYXJnaW4taW5saW5lLWVuZDo2NnB4fX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuZmFiLWxpc3Qtc2lkZS1zdGFydCw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCguZmFiLWxpc3Qtc2lkZS1zdGFydCl7bGVmdDp1bnNldDtyaWdodDp1bnNldDtsZWZ0OjB9Omhvc3QoLmZhYi1saXN0LXNpZGUtZW5kKXttYXJnaW4tbGVmdDo2NnB4O21hcmdpbi1yaWdodDo2NnB4O21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7bGVmdDowOy1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6aG9zdCguZmFiLWxpc3Qtc2lkZS1lbmQpe21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDo2NnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6NjZweDstd2Via2l0LW1hcmdpbi1lbmQ6NjZweDttYXJnaW4taW5saW5lLWVuZDo2NnB4fX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuZmFiLWxpc3Qtc2lkZS1lbmQsOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLmZhYi1saXN0LXNpZGUtZW5kKXtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjB9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBGYWJMaXN0O1xufSgpKTtcbmV4cG9ydCB7IEZhYiBhcyBpb25fZmFiLCBGYWJCdXR0b24gYXMgaW9uX2ZhYl9idXR0b24sIEZhYkxpc3QgYXMgaW9uX2ZhYl9saXN0IH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG52YXIgaG9zdENvbnRleHQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGVsKSB7XG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xufTtcbi8qKlxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxuICovXG52YXIgY3JlYXRlQ29sb3JDbGFzc2VzID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IChfYSA9IHtcbiAgICAgICAgICAgICdpb24tY29sb3InOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIF9hW1wiaW9uLWNvbG9yLVwiICsgY29sb3JdID0gdHJ1ZSxcbiAgICAgICAgX2EpIDogdW5kZWZpbmVkO1xufTtcbnZhciBnZXRDbGFzc0xpc3QgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgIHJldHVybiBhcnJheVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPSBudWxsOyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50cmltKCk7IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSAnJzsgfSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbn07XG52YXIgZ2V0Q2xhc3NNYXAgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gbWFwW2NdID0gdHJ1ZTsgfSk7XG4gICAgcmV0dXJuIG1hcDtcbn07XG52YXIgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XG52YXIgb3BlblVSTCA9IGZ1bmN0aW9uICh1cmwsIGV2LCBkaXJlY3Rpb24pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvdXRlcjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgICAgICAgaWYgKHJvdXRlcikge1xuICAgICAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbildO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=