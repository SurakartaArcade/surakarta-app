(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-card_5-ios.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-card_5-ios.entry.js ***!
  \***********************************************************************/
/*! exports provided: ion_card, ion_card_content, ion_card_header, ion_card_subtitle, ion_card_title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_card_content", function() { return CardContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_card_header", function() { return CardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_card_subtitle", function() { return CardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_card_title", function() { return CardTitle; });
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");



var Card = /** @class */ (function () {
    function Card(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * If `true`, a button tag will be rendered and the card will be tappable.
         */
        this.button = false;
        /**
         * The type of the button. Only used when an `onclick` or `button` property is present.
         */
        this.type = 'button';
        /**
         * If `true`, the user cannot interact with the card.
         */
        this.disabled = false;
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */
        this.routerDirection = 'forward';
    }
    Card.prototype.isClickable = function () {
        return (this.href !== undefined || this.button);
    };
    Card.prototype.renderCard = function (mode) {
        var clickable = this.isClickable();
        if (!clickable) {
            return [
                Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)
            ];
        }
        var _a = this, href = _a.href, routerDirection = _a.routerDirection;
        var TagType = clickable ? (href === undefined ? 'button' : 'a') : 'div';
        var attrs = (TagType === 'button')
            ? { type: this.type }
            : {
                download: this.download,
                href: this.href,
                rel: this.rel,
                target: this.target
            };
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, Object.assign({}, attrs, { class: "card-native", disabled: this.disabled, onClick: function (ev) { return Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["o"])(href, ev, routerDirection); } }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), clickable && mode === 'md' && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)));
    };
    Card.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign(Object.assign((_a = {}, _a[mode] = true, _a), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), { 'card-disabled': this.disabled, 'ion-activatable': this.isClickable() }) }, this.renderCard(mode)));
    };
    Object.defineProperty(Card, "style", {
        get: function () { return ".sc-ion-card-ios-h{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden}.ion-color.sc-ion-card-ios-h{background:var(--ion-color-base)}.ion-color.sc-ion-card-ios-h, .sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-header , .sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-subtitle , .sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-title {color:var(--ion-color-contrast)}.sc-ion-card-ios-s  img {display:block;width:100%}.sc-ion-card-ios-s  ion-list {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.card-disabled.sc-ion-card-ios-h{cursor:default;opacity:.3;pointer-events:none}.card-native.sc-ion-card-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background)}.card-native.sc-ion-card-ios::-moz-focus-inner{border:0}a.sc-ion-card-ios, button.sc-ion-card-ios{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect.sc-ion-card-ios{color:var(--ripple-color)}.sc-ion-card-ios-h{--background:var(--ion-item-background,transparent);--color:var(--ion-color-step-600,#666);margin-left:16px;margin-right:16px;margin-top:24px;margin-bottom:24px;border-radius:8px;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:-webkit-transform .5s cubic-bezier(.12,.72,.29,1);transition:-webkit-transform .5s cubic-bezier(.12,.72,.29,1);transition:transform .5s cubic-bezier(.12,.72,.29,1);transition:transform .5s cubic-bezier(.12,.72,.29,1),-webkit-transform .5s cubic-bezier(.12,.72,.29,1);font-size:14px;-webkit-box-shadow:0 4px 16px rgba(0,0,0,.12);box-shadow:0 4px 16px rgba(0,0,0,.12)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-card-ios-h{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}.activated.sc-ion-card-ios-h{-webkit-transform:scale3d(.97,.97,1);transform:scale3d(.97,.97,1)}"; },
        enumerable: true,
        configurable: true
    });
    return Card;
}());
var CardContent = /** @class */ (function () {
    function CardContent(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    CardContent.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: (_a = {},
                _a[mode] = true,
                // Used internally for styling
                _a["card-content-" + mode] = true,
                _a) }));
    };
    Object.defineProperty(CardContent, "style", {
        get: function () { return "ion-card-content{display:block;position:relative}.card-content-ios{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;font-size:16px;line-height:1.4}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.card-content-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}.card-content-ios h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:400}.card-content-ios h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:400}.card-content-ios h3,.card-content-ios h4,.card-content-ios h5,.card-content-ios h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:400}.card-content-ios p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px}"; },
        enumerable: true,
        configurable: true
    });
    return CardContent;
}());
var CardHeader = /** @class */ (function () {
    function CardHeader(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * If `true`, the card header will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
    }
    CardHeader.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), (_a = { 'card-header-translucent': this.translucent }, _a[mode] = true, _a)) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    Object.defineProperty(CardHeader, "style", {
        get: function () { return ":host{display:block;position:relative;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) ::slotted(ion-card-subtitle),:host(.ion-color) ::slotted(ion-card-title){color:currentColor}:host{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.card-header-translucent){background-color:rgba(var(--ion-background-color-rgb,255,255,255),.9);-webkit-backdrop-filter:saturate(180%) blur(30px);backdrop-filter:saturate(180%) blur(30px)}}"; },
        enumerable: true,
        configurable: true
    });
    return CardHeader;
}());
var CardSubtitle = /** @class */ (function () {
    function CardSubtitle(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    CardSubtitle.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "heading", "aria-level": "3", class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), (_a = {}, _a[mode] = true, _a)) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    Object.defineProperty(CardSubtitle, "style", {
        get: function () { return ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600,#666);margin-left:0;margin-right:0;margin-top:0;margin-bottom:4px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase}"; },
        enumerable: true,
        configurable: true
    });
    return CardSubtitle;
}());
var CardTitle = /** @class */ (function () {
    function CardTitle(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    CardTitle.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "heading", "aria-level": "2", class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), (_a = {}, _a[mode] = true, _a)) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    Object.defineProperty(CardTitle, "style", {
        get: function () { return ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-text-color,#000);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:28px;font-weight:700;line-height:1.2}"; },
        enumerable: true,
        configurable: true
    });
    return CardTitle;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1jYXJkXzUtaW9zLmVudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRjtBQUM1RDtBQUM4QztBQUM1RTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQUM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQUMsMEJBQTBCLFVBQVUsd0VBQXdFLFFBQVEsNERBQU8sNEJBQTRCLEVBQUUsRUFBRSxHQUFHLDJEQUFDLDhDQUE4QywyREFBQztBQUMvTjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQVU7QUFDN0IsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyw0Q0FBNEMsd0JBQXdCLDREQUFrQixnQkFBZ0Isd0VBQXdFLEdBQUc7QUFDMU07QUFDQTtBQUNBLDBCQUEwQiw0QkFBNEIseUJBQXlCLDBCQUEwQixrQ0FBa0MsbUNBQW1DLGNBQWMsa0JBQWtCLDZCQUE2QixtQkFBbUIsMkNBQTJDLGdCQUFnQiw2QkFBNkIsaUNBQWlDLG9PQUFvTyxnQ0FBZ0MseUJBQXlCLGNBQWMsV0FBVyw4QkFBOEIsY0FBYyxlQUFlLGFBQWEsZ0JBQWdCLGlDQUFpQyxlQUFlLFdBQVcsb0JBQW9C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LG1CQUFtQiwyREFBVTtBQUM3QixnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLDBFQUEwRSxFQUFFLDREQUFrQix1QkFBdUIseUJBQXlCLEVBQUUsMkRBQUM7QUFDMUs7QUFDQTtBQUNBLDBCQUEwQixlQUFlLGNBQWMsa0JBQWtCLG1CQUFtQixrQkFBa0IsNEJBQTRCLE1BQU0sbUNBQW1DLGNBQWMsZUFBZSxhQUFhLGdCQUFnQixlQUFlLGdCQUFnQixjQUFjLGlCQUFpQixlQUFlLGdCQUFnQixnQkFBZ0IsRUFBRSxFQUFFO0FBQzlWO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQzJKOzs7Ozs7Ozs7Ozs7O0FDcEk1SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0JBQWtCLEVBQUU7QUFDdEQsK0JBQStCLGlCQUFpQixFQUFFO0FBQ2xELGtDQUFrQyxpQkFBaUIsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHNCQUFzQixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxRQUFRLHVEQUFTO0FBQzlEO0FBQ0EsV0FBVyx5REFBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDa0YiLCJmaWxlIjoiNDYuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBoLCBjIGFzIGdldElvbk1vZGUsIEggYXMgSG9zdCB9IGZyb20gJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IG8gYXMgb3BlblVSTCwgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcbnZhciBDYXJkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhcmQoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBhIGJ1dHRvbiB0YWcgd2lsbCBiZSByZW5kZXJlZCBhbmQgdGhlIGNhcmQgd2lsbCBiZSB0YXBwYWJsZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYnV0dG9uID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBvZiB0aGUgYnV0dG9uLiBPbmx5IHVzZWQgd2hlbiBhbiBgb25jbGlja2Agb3IgYGJ1dHRvbmAgcHJvcGVydHkgaXMgcHJlc2VudC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHlwZSA9ICdidXR0b24nO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgY2FyZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gdXNpbmcgYSByb3V0ZXIsIGl0IHNwZWNpZmllcyB0aGUgdHJhbnNpdGlvbiBkaXJlY3Rpb24gd2hlbiBuYXZpZ2F0aW5nIHRvXG4gICAgICAgICAqIGFub3RoZXIgcGFnZSB1c2luZyBgaHJlZmAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJvdXRlckRpcmVjdGlvbiA9ICdmb3J3YXJkJztcbiAgICB9XG4gICAgQ2FyZC5wcm90b3R5cGUuaXNDbGlja2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5ocmVmICE9PSB1bmRlZmluZWQgfHwgdGhpcy5idXR0b24pO1xuICAgIH07XG4gICAgQ2FyZC5wcm90b3R5cGUucmVuZGVyQ2FyZCA9IGZ1bmN0aW9uIChtb2RlKSB7XG4gICAgICAgIHZhciBjbGlja2FibGUgPSB0aGlzLmlzQ2xpY2thYmxlKCk7XG4gICAgICAgIGlmICghY2xpY2thYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIGgoXCJzbG90XCIsIG51bGwpXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIGhyZWYgPSBfYS5ocmVmLCByb3V0ZXJEaXJlY3Rpb24gPSBfYS5yb3V0ZXJEaXJlY3Rpb247XG4gICAgICAgIHZhciBUYWdUeXBlID0gY2xpY2thYmxlID8gKGhyZWYgPT09IHVuZGVmaW5lZCA/ICdidXR0b24nIDogJ2EnKSA6ICdkaXYnO1xuICAgICAgICB2YXIgYXR0cnMgPSAoVGFnVHlwZSA9PT0gJ2J1dHRvbicpXG4gICAgICAgICAgICA/IHsgdHlwZTogdGhpcy50eXBlIH1cbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIGRvd25sb2FkOiB0aGlzLmRvd25sb2FkLFxuICAgICAgICAgICAgICAgIGhyZWY6IHRoaXMuaHJlZixcbiAgICAgICAgICAgICAgICByZWw6IHRoaXMucmVsLFxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy50YXJnZXRcbiAgICAgICAgICAgIH07XG4gICAgICAgIHJldHVybiAoaChUYWdUeXBlLCBPYmplY3QuYXNzaWduKHt9LCBhdHRycywgeyBjbGFzczogXCJjYXJkLW5hdGl2ZVwiLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgb25DbGljazogZnVuY3Rpb24gKGV2KSB7IHJldHVybiBvcGVuVVJMKGhyZWYsIGV2LCByb3V0ZXJEaXJlY3Rpb24pOyB9IH0pLCBoKFwic2xvdFwiLCBudWxsKSwgY2xpY2thYmxlICYmIG1vZGUgPT09ICdtZCcgJiYgaChcImlvbi1yaXBwbGUtZWZmZWN0XCIsIG51bGwpKSk7XG4gICAgfTtcbiAgICBDYXJkLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKChfYSA9IHt9LCBfYVttb2RlXSA9IHRydWUsIF9hKSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpKSwgeyAnY2FyZC1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsICdpb24tYWN0aXZhdGFibGUnOiB0aGlzLmlzQ2xpY2thYmxlKCkgfSkgfSwgdGhpcy5yZW5kZXJDYXJkKG1vZGUpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2FyZCwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCIuc2MtaW9uLWNhcmQtaW9zLWh7LS1pb24tc2FmZS1hcmVhLWxlZnQ6MHB4Oy0taW9uLXNhZmUtYXJlYS1yaWdodDowcHg7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCk7b3ZlcmZsb3c6aGlkZGVufS5pb24tY29sb3Iuc2MtaW9uLWNhcmQtaW9zLWh7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9Lmlvbi1jb2xvci5zYy1pb24tY2FyZC1pb3MtaCwgLnNjLWlvbi1jYXJkLWlvcy1oLmlvbi1jb2xvci5zYy1pb24tY2FyZC1pb3MtcyAgaW9uLWNhcmQtaGVhZGVyICwgLnNjLWlvbi1jYXJkLWlvcy1oLmlvbi1jb2xvci5zYy1pb24tY2FyZC1pb3MtcyAgaW9uLWNhcmQtc3VidGl0bGUgLCAuc2MtaW9uLWNhcmQtaW9zLWguaW9uLWNvbG9yLnNjLWlvbi1jYXJkLWlvcy1zICBpb24tY2FyZC10aXRsZSB7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX0uc2MtaW9uLWNhcmQtaW9zLXMgIGltZyB7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlfS5zYy1pb24tY2FyZC1pb3MtcyAgaW9uLWxpc3Qge21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH0uY2FyZC1kaXNhYmxlZC5zYy1pb24tY2FyZC1pb3MtaHtjdXJzb3I6ZGVmYXVsdDtvcGFjaXR5Oi4zO3BvaW50ZXItZXZlbnRzOm5vbmV9LmNhcmQtbmF0aXZlLnNjLWlvbi1jYXJkLWlvc3tmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7bWluLWhlaWdodDp2YXIoLS1taW4taGVpZ2h0KTstd2Via2l0LXRyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7dHJhbnNpdGlvbjp2YXIoLS10cmFuc2l0aW9uKTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKX0uY2FyZC1uYXRpdmUuc2MtaW9uLWNhcmQtaW9zOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfWEuc2MtaW9uLWNhcmQtaW9zLCBidXR0b24uc2MtaW9uLWNhcmQtaW9ze2N1cnNvcjpwb2ludGVyOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXVzZXItZHJhZzpub25lfWlvbi1yaXBwbGUtZWZmZWN0LnNjLWlvbi1jYXJkLWlvc3tjb2xvcjp2YXIoLS1yaXBwbGUtY29sb3IpfS5zYy1pb24tY2FyZC1pb3MtaHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCx0cmFuc3BhcmVudCk7LS1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIzY2Nik7bWFyZ2luLWxlZnQ6MTZweDttYXJnaW4tcmlnaHQ6MTZweDttYXJnaW4tdG9wOjI0cHg7bWFyZ2luLWJvdHRvbToyNHB4O2JvcmRlci1yYWRpdXM6OHB4Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC41cyBjdWJpYy1iZXppZXIoLjEyLC43MiwuMjksMSk7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuNXMgY3ViaWMtYmV6aWVyKC4xMiwuNzIsLjI5LDEpO3RyYW5zaXRpb246dHJhbnNmb3JtIC41cyBjdWJpYy1iZXppZXIoLjEyLC43MiwuMjksMSk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjVzIGN1YmljLWJlemllciguMTIsLjcyLC4yOSwxKSwtd2Via2l0LXRyYW5zZm9ybSAuNXMgY3ViaWMtYmV6aWVyKC4xMiwuNzIsLjI5LDEpO2ZvbnQtc2l6ZToxNHB4Oy13ZWJraXQtYm94LXNoYWRvdzowIDRweCAxNnB4IHJnYmEoMCwwLDAsLjEyKTtib3gtc2hhZG93OjAgNHB4IDE2cHggcmdiYSgwLDAsMCwuMTIpfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuc2MtaW9uLWNhcmQtaW9zLWh7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjE2cHg7bWFyZ2luLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtbWFyZ2luLWVuZDoxNnB4O21hcmdpbi1pbmxpbmUtZW5kOjE2cHh9fS5hY3RpdmF0ZWQuc2MtaW9uLWNhcmQtaW9zLWh7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOTcsLjk3LDEpO3RyYW5zZm9ybTpzY2FsZTNkKC45NywuOTcsMSl9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBDYXJkO1xufSgpKTtcbnZhciBDYXJkQ29udGVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYXJkQ29udGVudChob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgfVxuICAgIENhcmRDb250ZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczogKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIC8vIFVzZWQgaW50ZXJuYWxseSBmb3Igc3R5bGluZ1xuICAgICAgICAgICAgICAgIF9hW1wiY2FyZC1jb250ZW50LVwiICsgbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hKSB9KSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2FyZENvbnRlbnQsIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiaW9uLWNhcmQtY29udGVudHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlfS5jYXJkLWNvbnRlbnQtaW9ze3BhZGRpbmctbGVmdDoyMHB4O3BhZGRpbmctcmlnaHQ6MjBweDtwYWRkaW5nLXRvcDoyMHB4O3BhZGRpbmctYm90dG9tOjIwcHg7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6MS40fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuY2FyZC1jb250ZW50LWlvc3twYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MjBweDtwYWRkaW5nLWlubGluZS1zdGFydDoyMHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MjBweDtwYWRkaW5nLWlubGluZS1lbmQ6MjBweH19LmNhcmQtY29udGVudC1pb3MgaDF7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbToycHg7Zm9udC1zaXplOjI0cHg7Zm9udC13ZWlnaHQ6NDAwfS5jYXJkLWNvbnRlbnQtaW9zIGgye21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDoycHg7bWFyZ2luLWJvdHRvbToycHg7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6NDAwfS5jYXJkLWNvbnRlbnQtaW9zIGgzLC5jYXJkLWNvbnRlbnQtaW9zIGg0LC5jYXJkLWNvbnRlbnQtaW9zIGg1LC5jYXJkLWNvbnRlbnQtaW9zIGg2e21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDoycHg7bWFyZ2luLWJvdHRvbToycHg7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwfS5jYXJkLWNvbnRlbnQtaW9zIHB7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbToycHg7Zm9udC1zaXplOjE0cHh9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBDYXJkQ29udGVudDtcbn0oKSk7XG52YXIgQ2FyZEhlYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYXJkSGVhZGVyKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGNhcmQgaGVhZGVyIHdpbGwgYmUgdHJhbnNsdWNlbnQuXG4gICAgICAgICAqIE9ubHkgYXBwbGllcyB3aGVuIHRoZSBtb2RlIGlzIGBcImlvc1wiYCBhbmQgdGhlIGRldmljZSBzdXBwb3J0c1xuICAgICAgICAgKiBbYGJhY2tkcm9wLWZpbHRlcmBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZHJvcC1maWx0ZXIjQnJvd3Nlcl9jb21wYXRpYmlsaXR5KS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJhbnNsdWNlbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgQ2FyZEhlYWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpKSwgKF9hID0geyAnY2FyZC1oZWFkZXItdHJhbnNsdWNlbnQnOiB0aGlzLnRyYW5zbHVjZW50IH0sIF9hW21vZGVdID0gdHJ1ZSwgX2EpKSB9LCBoKFwic2xvdFwiLCBudWxsKSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENhcmRIZWFkZXIsIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiOmhvc3R7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKX06aG9zdCguaW9uLWNvbG9yKXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KC5pb24tY29sb3IpIDo6c2xvdHRlZChpb24tY2FyZC1zdWJ0aXRsZSksOmhvc3QoLmlvbi1jb2xvcikgOjpzbG90dGVkKGlvbi1jYXJkLXRpdGxlKXtjb2xvcjpjdXJyZW50Q29sb3J9Omhvc3R7cGFkZGluZy1sZWZ0OjIwcHg7cGFkZGluZy1yaWdodDoyMHB4O3BhZGRpbmctdG9wOjIwcHg7cGFkZGluZy1ib3R0b206MTZweH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3R7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjIwcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MjBweDstd2Via2l0LXBhZGRpbmctZW5kOjIwcHg7cGFkZGluZy1pbmxpbmUtZW5kOjIwcHh9fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6Ymx1cigwKSkgb3IgKGJhY2tkcm9wLWZpbHRlcjpibHVyKDApKSl7Omhvc3QoLmNhcmQtaGVhZGVyLXRyYW5zbHVjZW50KXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEodmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLDI1NSwyNTUsMjU1KSwuOSk7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigzMHB4KTtiYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigzMHB4KX19XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBDYXJkSGVhZGVyO1xufSgpKTtcbnZhciBDYXJkU3VidGl0bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FyZFN1YnRpdGxlKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB9XG4gICAgQ2FyZFN1YnRpdGxlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyByb2xlOiBcImhlYWRpbmdcIiwgXCJhcmlhLWxldmVsXCI6IFwiM1wiLCBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvcikpLCAoX2EgPSB7fSwgX2FbbW9kZV0gPSB0cnVlLCBfYSkpIH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2FyZFN1YnRpdGxlLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIjpob3N0e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7Y29sb3I6dmFyKC0tY29sb3IpfTpob3N0KC5pb24tY29sb3Ipe2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdHstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwjNjY2KTttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjRweDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjcwMDtsZXR0ZXItc3BhY2luZzouNHB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIENhcmRTdWJ0aXRsZTtcbn0oKSk7XG52YXIgQ2FyZFRpdGxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhcmRUaXRsZShob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgfVxuICAgIENhcmRUaXRsZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgcm9sZTogXCJoZWFkaW5nXCIsIFwiYXJpYS1sZXZlbFwiOiBcIjJcIiwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpKSwgKF9hID0ge30sIF9hW21vZGVdID0gdHJ1ZSwgX2EpKSB9LCBoKFwic2xvdFwiLCBudWxsKSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENhcmRUaXRsZSwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCI6aG9zdHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2NvbG9yOnZhcigtLWNvbG9yKX06aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3R7LS1jb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKTttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtmb250LXNpemU6MjhweDtmb250LXdlaWdodDo3MDA7bGluZS1oZWlnaHQ6MS4yfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQ2FyZFRpdGxlO1xufSgpKTtcbmV4cG9ydCB7IENhcmQgYXMgaW9uX2NhcmQsIENhcmRDb250ZW50IGFzIGlvbl9jYXJkX2NvbnRlbnQsIENhcmRIZWFkZXIgYXMgaW9uX2NhcmRfaGVhZGVyLCBDYXJkU3VidGl0bGUgYXMgaW9uX2NhcmRfc3VidGl0bGUsIENhcmRUaXRsZSBhcyBpb25fY2FyZF90aXRsZSB9O1xuIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xudmFyIGhvc3RDb250ZXh0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBlbCkge1xuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcbn07XG4vKipcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cbiAqL1xudmFyIGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyAoX2EgPSB7XG4gICAgICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBfYVtcImlvbi1jb2xvci1cIiArIGNvbG9yXSA9IHRydWUsXG4gICAgICAgIF9hKSA6IHVuZGVmaW5lZDtcbn07XG52YXIgZ2V0Q2xhc3NMaXN0ID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT0gbnVsbDsgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudHJpbSgpOyB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPT0gJyc7IH0pO1xuICAgIH1cbiAgICByZXR1cm4gW107XG59O1xudmFyIGdldENsYXNzTWFwID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG1hcFtjXSA9IHRydWU7IH0pO1xuICAgIHJldHVybiBtYXA7XG59O1xudmFyIFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xudmFyIG9wZW5VUkwgPSBmdW5jdGlvbiAodXJsLCBldiwgZGlyZWN0aW9uKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByb3V0ZXI7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcbiAgICAgICAgICAgIHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcbiAgICAgICAgICAgIGlmIChyb3V0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgIH0pO1xufSk7IH07XG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9