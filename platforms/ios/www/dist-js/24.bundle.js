(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js ***!
  \*****************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var dfChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (el) {
    return (el.children != null) ? el.children : el.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-toast-md.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-toast-md.entry.js ***!
  \*********************************************************************/
/*! exports provided: ion_toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_toast", function() { return Toast; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation-af478fe9.js */ "./node_modules/@ionic/core/dist/esm-es5/animation-af478fe9.js");
/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlays-10640d86.js */ "./node_modules/@ionic/core/dist/esm-es5/overlays-10640d86.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");
/* harmony import */ var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index-3476b023.js */ "./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js");








/**
 * iOS Toast Enter Animation
 */
var iosEnterAnimation = function (baseEl, position) {
    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var hostEl = baseEl.host || baseEl;
    var wrapperEl = baseEl.querySelector('.toast-wrapper');
    var bottom = "calc(-10px - var(--ion-safe-area-bottom, 0px))";
    var top = "calc(10px + var(--ion-safe-area-top, 0px))";
    wrapperAnimation.addElement(wrapperEl);
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('transform', 'translateY(-100%)', "translateY(" + top + ")");
            break;
        case 'middle':
            var topPosition = Math.floor(hostEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
            wrapperEl.style.top = topPosition + "px";
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        default:
            wrapperAnimation.fromTo('transform', 'translateY(100%)', "translateY(" + bottom + ")");
            break;
    }
    return baseAnimation
        .addElement(hostEl)
        .easing('cubic-bezier(.155,1.105,.295,1.12)')
        .duration(400)
        .addAnimation(wrapperAnimation);
};
/**
 * iOS Toast Leave Animation
 */
var iosLeaveAnimation = function (baseEl, position) {
    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var hostEl = baseEl.host || baseEl;
    var wrapperEl = baseEl.querySelector('.toast-wrapper');
    var bottom = "calc(-10px - var(--ion-safe-area-bottom, 0px))";
    var top = "calc(10px + var(--ion-safe-area-top, 0px))";
    wrapperAnimation.addElement(wrapperEl);
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('transform', "translateY(" + top + ")", 'translateY(-100%)');
            break;
        case 'middle':
            wrapperAnimation.fromTo('opacity', 0.99, 0);
            break;
        default:
            wrapperAnimation.fromTo('transform', "translateY(" + bottom + ")", 'translateY(100%)');
            break;
    }
    return baseAnimation
        .addElement(hostEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(300)
        .addAnimation(wrapperAnimation);
};
/**
 * MD Toast Enter Animation
 */
var mdEnterAnimation = function (baseEl, position) {
    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var hostEl = baseEl.host || baseEl;
    var wrapperEl = baseEl.querySelector('.toast-wrapper');
    var bottom = "calc(8px + var(--ion-safe-area-bottom, 0px))";
    var top = "calc(8px + var(--ion-safe-area-top, 0px))";
    wrapperAnimation.addElement(wrapperEl);
    switch (position) {
        case 'top':
            wrapperEl.style.top = top;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        case 'middle':
            var topPosition = Math.floor(hostEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
            wrapperEl.style.top = topPosition + "px";
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        default:
            wrapperEl.style.bottom = bottom;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
    }
    return baseAnimation
        .addElement(hostEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .addAnimation(wrapperAnimation);
};
/**
 * md Toast Leave Animation
 */
var mdLeaveAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var hostEl = baseEl.host || baseEl;
    var wrapperEl = baseEl.querySelector('.toast-wrapper');
    wrapperAnimation
        .addElement(wrapperEl)
        .fromTo('opacity', 0.99, 0);
    return baseAnimation
        .addElement(hostEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(300)
        .addAnimation(wrapperAnimation);
};
var Toast = /** @class */ (function () {
    function class_1(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.presented = false;
        this.mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        /**
         * How many milliseconds to wait before hiding the toast. By default, it will show
         * until `dismiss()` is called.
         */
        this.duration = 0;
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = false;
        /**
         * The position of the toast on the screen.
         */
        this.position = 'bottom';
        /**
         * @deprecated Use `buttons` instead. If `true`, the close button will be displayed.
         */
        this.showCloseButton = false;
        /**
         * If `true`, the toast will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        /**
         * If `true`, the toast will animate.
         */
        this.animated = true;
        Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this.el);
        this.didPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionToastDidPresent", 7);
        this.willPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionToastWillPresent", 7);
        this.willDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionToastWillDismiss", 7);
        this.didDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionToastDidDismiss", 7);
    }
    /**
     * Present the toast overlay after it has been created.
     */
    class_1.prototype.present = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this, 'toastEnter', iosEnterAnimation, mdEnterAnimation, this.position)];
                    case 1:
                        _a.sent();
                        if (this.duration > 0) {
                            this.durationTimeout = setTimeout(function () { return _this.dismiss(undefined, 'timeout'); }, this.duration);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Dismiss the toast overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the toast.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the toast.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */
    class_1.prototype.dismiss = function (data, role) {
        if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
        }
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["f"])(this, data, role, 'toastLeave', iosLeaveAnimation, mdLeaveAnimation, this.position);
    };
    /**
     * Returns a promise that resolves when the toast did dismiss.
     */
    class_1.prototype.onDidDismiss = function () {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.el, 'ionToastDidDismiss');
    };
    /**
     * Returns a promise that resolves when the toast will dismiss.
     */
    class_1.prototype.onWillDismiss = function () {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.el, 'ionToastWillDismiss');
    };
    class_1.prototype.getButtons = function () {
        var _this = this;
        var buttons = this.buttons
            ? this.buttons.map(function (b) {
                return (typeof b === 'string')
                    ? { text: b }
                    : b;
            })
            : [];
        // tslint:disable-next-line: deprecation
        if (this.showCloseButton) {
            buttons.push({
                // tslint:disable-next-line: deprecation
                text: this.closeButtonText || 'Close',
                handler: function () { return _this.dismiss(undefined, 'cancel'); }
            });
        }
        return buttons;
    };
    class_1.prototype.buttonClick = function (button) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var role, shouldDismiss;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        role = button.role;
                        if (Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["i"])(role)) {
                            return [2 /*return*/, this.dismiss(undefined, role)];
                        }
                        return [4 /*yield*/, this.callButtonHandler(button)];
                    case 1:
                        shouldDismiss = _a.sent();
                        if (shouldDismiss) {
                            return [2 /*return*/, this.dismiss(undefined, button.role)];
                        }
                        return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    class_1.prototype.callButtonHandler = function (button) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var rtn, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(button && button.handler)) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["s"])(button.handler)];
                    case 2:
                        rtn = _a.sent();
                        if (rtn === false) {
                            // if the return value of the handler is false then do not dismiss
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, true];
                }
            });
        });
    };
    class_1.prototype.renderButtons = function (buttons, side) {
        var _a;
        var _this = this;
        if (buttons.length === 0) {
            return;
        }
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var buttonGroupsClasses = (_a = {
                'toast-button-group': true
            },
            _a["toast-button-group-" + side] = true,
            _a);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: buttonGroupsClasses }, buttons.map(function (b) { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button", { type: "button", class: buttonClass(b), tabIndex: 0, onClick: function () { return _this.buttonClick(b); } }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "toast-button-inner" }, b.icon &&
            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon", { icon: b.icon, slot: b.text === undefined ? 'icon-only' : undefined, class: "toast-icon" }), b.text), mode === 'md' && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-ripple-effect", { type: b.icon !== undefined && b.text === undefined ? 'unbounded' : 'bounded' })); })));
    };
    class_1.prototype.render = function () {
        var _a, _b;
        var allButtons = this.getButtons();
        var startButtons = allButtons.filter(function (b) { return b.side === 'start'; });
        var endButtons = allButtons.filter(function (b) { return b.side !== 'start'; });
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var wrapperClass = (_a = {
                'toast-wrapper': true
            },
            _a["toast-" + this.position] = true,
            _a);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { style: {
                zIndex: "" + (60000 + this.overlayIndex),
            }, class: Object.assign(Object.assign(Object.assign((_b = {}, _b[mode] = true, _b), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__["c"])(this.color)), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__["g"])(this.cssClass)), { 'toast-translucent': this.translucent }) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: wrapperClass }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "toast-container" }, this.renderButtons(startButtons, 'start'), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "toast-content" }, this.header !== undefined &&
            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "toast-header" }, this.header), this.message !== undefined &&
            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "toast-message", innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_7__["s"])(this.message) })), this.renderButtons(endButtons, 'end')))));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper,[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}\@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800,#333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12);--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-50,#f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:.01;z-index:10}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-header,.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:.84px;text-transform:uppercase;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100,#e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}\@media (any-hover:hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb,56,128,255),.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.08)}}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var buttonClass = function (button) {
    var _a;
    return Object.assign((_a = { 'toast-button': true, 'toast-button-icon-only': button.icon !== undefined && button.text === undefined }, _a["toast-button-" + button.role] = button.role !== undefined, _a['ion-focusable'] = true, _a['ion-activatable'] = true, _a), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__["g"])(button.cssClass));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2luZGV4LTM0NzZiMDIzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvaW9uLXRvYXN0LW1kLmVudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsbUJBQW1CO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsbUNBQW1DO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQ0FBZ0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Qiw2RkFBNkYsY0FBYyxtQkFBbUIsb0JBQW9CLDJCQUEyQiwwQkFBMEIseUJBQXlCLHlCQUF5QixxQkFBcUIsd0NBQXdDLHdCQUF3QixrQkFBa0IsaUJBQWlCLGtCQUFrQixnQkFBZ0IsbUJBQW1CLFdBQVcsWUFBWSw2RkFBNkYsd0JBQXdCLG1CQUFtQixvQkFBb0IsMEJBQTBCLHlCQUF5Qix3QkFBd0Isd0JBQXdCLDBCQUEwQixvQkFBb0IsbUVBQW1FLDJCQUEyQix3RUFBd0UsRUFBRSxFQUFFO0FBQy85STtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxnQ0FBZ0MseUdBQXlHLGdJQUFnSSw0REFBVztBQUNwUjtBQUM4Qjs7Ozs7Ozs7Ozs7OztBQzFUOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQixFQUFFO0FBQ3RELCtCQUErQixpQkFBaUIsRUFBRTtBQUNsRCxrQ0FBa0MsaUJBQWlCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxzQkFBc0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUSx1REFBUztBQUM5RDtBQUNBLFdBQVcseURBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFO0FBQ2tGIiwiZmlsZSI6IjI0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRG9lcyBhIHNpbXBsZSBzYW5pdGl6YXRpb24gb2YgYWxsIGVsZW1lbnRzXG4gKiBpbiBhbiB1bnRydXN0ZWQgc3RyaW5nXG4gKi9cbnZhciBzYW5pdGl6ZURPTVN0cmluZyA9IGZ1bmN0aW9uICh1bnRydXN0ZWRTdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHVudHJ1c3RlZFN0cmluZyAhPT0gJ3N0cmluZycgfHwgdW50cnVzdGVkU3RyaW5nID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIHVudHJ1c3RlZFN0cmluZztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlIGEgZG9jdW1lbnQgZnJhZ21lbnRcbiAgICAgICAgICogc2VwYXJhdGUgZnJvbSB0aGUgbWFpbiBET00sXG4gICAgICAgICAqIGNyZWF0ZSBhIGRpdiB0byBkbyBvdXIgd29yayBpblxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGRvY3VtZW50RnJhZ21lbnRfMSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgdmFyIHdvcmtpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZG9jdW1lbnRGcmFnbWVudF8xLmFwcGVuZENoaWxkKHdvcmtpbmdEaXYpO1xuICAgICAgICB3b3JraW5nRGl2LmlubmVySFRNTCA9IHVudHJ1c3RlZFN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSBhbnkgZWxlbWVudHNcbiAgICAgICAgICogdGhhdCBhcmUgYmxvY2tlZFxuICAgICAgICAgKi9cbiAgICAgICAgYmxvY2tlZFRhZ3MuZm9yRWFjaChmdW5jdGlvbiAoYmxvY2tlZFRhZykge1xuICAgICAgICAgICAgdmFyIGdldEVsZW1lbnRzVG9SZW1vdmUgPSBkb2N1bWVudEZyYWdtZW50XzEucXVlcnlTZWxlY3RvckFsbChibG9ja2VkVGFnKTtcbiAgICAgICAgICAgIGZvciAodmFyIGVsZW1lbnRJbmRleCA9IGdldEVsZW1lbnRzVG9SZW1vdmUubGVuZ3RoIC0gMTsgZWxlbWVudEluZGV4ID49IDA7IGVsZW1lbnRJbmRleC0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBnZXRFbGVtZW50c1RvUmVtb3ZlW2VsZW1lbnRJbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudEZyYWdtZW50XzEucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFdlIHN0aWxsIG5lZWQgdG8gc2FuaXRpemVcbiAgICAgICAgICAgICAgICAgKiB0aGUgY2hpbGRyZW4gb2YgdGhpcyBlbGVtZW50XG4gICAgICAgICAgICAgICAgICogYXMgdGhleSBhcmUgbGVmdCBiZWhpbmRcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRFbGVtZW50cyA9IGdldEVsZW1lbnRDaGlsZHJlbihlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjaGlsZEluZGV4ID0gMDsgY2hpbGRJbmRleCA8IGNoaWxkRWxlbWVudHMubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVFbGVtZW50KGNoaWxkRWxlbWVudHNbY2hpbGRJbmRleF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHbyB0aHJvdWdoIHJlbWFpbmluZyBlbGVtZW50cyBhbmQgcmVtb3ZlXG4gICAgICAgICAqIG5vbi1hbGxvd2VkIGF0dHJpYnNcbiAgICAgICAgICovXG4gICAgICAgIC8vIElFIGRvZXMgbm90IHN1cHBvcnQgLmNoaWxkcmVuIG9uIGRvY3VtZW50IGZyYWdtZW50cywgb25seSAuY2hpbGROb2Rlc1xuICAgICAgICB2YXIgZGZDaGlsZHJlbiA9IGdldEVsZW1lbnRDaGlsZHJlbihkb2N1bWVudEZyYWdtZW50XzEpO1xuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgZm9yICh2YXIgY2hpbGRJbmRleCA9IDA7IGNoaWxkSW5kZXggPCBkZkNoaWxkcmVuLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XG4gICAgICAgICAgICBzYW5pdGl6ZUVsZW1lbnQoZGZDaGlsZHJlbltjaGlsZEluZGV4XSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwZW5kIGRvY3VtZW50IGZyYWdtZW50IHRvIGRpdlxuICAgICAgICB2YXIgZnJhZ21lbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZnJhZ21lbnREaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnRGcmFnbWVudF8xKTtcbiAgICAgICAgLy8gRmlyc3QgY2hpbGQgaXMgYWx3YXlzIHRoZSBkaXYgd2UgZGlkIG91ciB3b3JrIGluXG4gICAgICAgIHZhciBnZXRJbm5lckRpdiA9IGZyYWdtZW50RGl2LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgICAgICByZXR1cm4gKGdldElubmVyRGl2ICE9PSBudWxsKSA/IGdldElubmVyRGl2LmlubmVySFRNTCA6IGZyYWdtZW50RGl2LmlubmVySFRNTDtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59O1xuLyoqXG4gKiBDbGVhbiB1cCBjdXJyZW50IGVsZW1lbnQgYmFzZWQgb24gYWxsb3dlZCBhdHRyaWJ1dGVzXG4gKiBhbmQgdGhlbiByZWN1cnNpdmVseSBkaWcgZG93biBpbnRvIGFueSBjaGlsZCBlbGVtZW50cyB0b1xuICogY2xlYW4gdGhvc2UgdXAgYXMgd2VsbFxuICovXG52YXIgc2FuaXRpemVFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAvLyBJRSB1c2VzIGNoaWxkTm9kZXMsIHNvIGlnbm9yZSBub2RlcyB0aGF0IGFyZSBub3QgZWxlbWVudHNcbiAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSAmJiBlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IGVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICB2YXIgYXR0cmlidXRlID0gZWxlbWVudC5hdHRyaWJ1dGVzLml0ZW0oaSk7XG4gICAgICAgIHZhciBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlLm5hbWU7XG4gICAgICAgIC8vIHJlbW92ZSBub24tYWxsb3dlZCBhdHRyaWJzXG4gICAgICAgIGlmICghYWxsb3dlZEF0dHJpYnV0ZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjbGVhbiB1cCBhbnkgYWxsb3dlZCBhdHRyaWJzXG4gICAgICAgIC8vIHRoYXQgYXR0ZW1wdCB0byBkbyBhbnkgSlMgZnVubnktYnVzaW5lc3NcbiAgICAgICAgdmFyIGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlLnZhbHVlO1xuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgaWYgKGF0dHJpYnV0ZVZhbHVlICE9IG51bGwgJiYgYXR0cmlidXRlVmFsdWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnamF2YXNjcmlwdDonKSkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2FuaXRpemUgYW55IG5lc3RlZCBjaGlsZHJlblxuICAgICAqL1xuICAgIHZhciBjaGlsZEVsZW1lbnRzID0gZ2V0RWxlbWVudENoaWxkcmVuKGVsZW1lbnQpO1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzYW5pdGl6ZUVsZW1lbnQoY2hpbGRFbGVtZW50c1tpXSk7XG4gICAgfVxufTtcbi8qKlxuICogSUUgZG9lc24ndCBhbHdheXMgc3VwcG9ydCAuY2hpbGRyZW5cbiAqIHNvIHdlIHJldmVydCB0byAuY2hpbGROb2RlcyBpbnN0ZWFkXG4gKi9cbnZhciBnZXRFbGVtZW50Q2hpbGRyZW4gPSBmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gKGVsLmNoaWxkcmVuICE9IG51bGwpID8gZWwuY2hpbGRyZW4gOiBlbC5jaGlsZE5vZGVzO1xufTtcbnZhciBhbGxvd2VkQXR0cmlidXRlcyA9IFsnY2xhc3MnLCAnaWQnLCAnaHJlZicsICdzcmMnLCAnbmFtZScsICdzbG90J107XG52YXIgYmxvY2tlZFRhZ3MgPSBbJ3NjcmlwdCcsICdzdHlsZScsICdpZnJhbWUnLCAnbWV0YScsICdsaW5rJywgJ29iamVjdCcsICdlbWJlZCddO1xuZXhwb3J0IHsgc2FuaXRpemVET01TdHJpbmcgYXMgcyB9O1xuIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGdldElvbk1vZGUsIGQgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWZlZWVmZjBkLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0ICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi1hZjQ3OGZlOS5qcyc7XG5pbXBvcnQgeyBkIGFzIHByZXBhcmVPdmVybGF5LCBlIGFzIHByZXNlbnQsIGYgYXMgZGlzbWlzcywgZyBhcyBldmVudE1ldGhvZCwgaSBhcyBpc0NhbmNlbCwgcyBhcyBzYWZlQ2FsbCB9IGZyb20gJy4vb3ZlcmxheXMtMTA2NDBkODYuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRDbGFzc01hcCwgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcbmltcG9ydCB7IHMgYXMgc2FuaXRpemVET01TdHJpbmcgfSBmcm9tICcuL2luZGV4LTM0NzZiMDIzLmpzJztcbi8qKlxuICogaU9TIFRvYXN0IEVudGVyIEFuaW1hdGlvblxuICovXG52YXIgaW9zRW50ZXJBbmltYXRpb24gPSBmdW5jdGlvbiAoYmFzZUVsLCBwb3NpdGlvbikge1xuICAgIHZhciBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgaG9zdEVsID0gYmFzZUVsLmhvc3QgfHwgYmFzZUVsO1xuICAgIHZhciB3cmFwcGVyRWwgPSBiYXNlRWwucXVlcnlTZWxlY3RvcignLnRvYXN0LXdyYXBwZXInKTtcbiAgICB2YXIgYm90dG9tID0gXCJjYWxjKC0xMHB4IC0gdmFyKC0taW9uLXNhZmUtYXJlYS1ib3R0b20sIDBweCkpXCI7XG4gICAgdmFyIHRvcCA9IFwiY2FsYygxMHB4ICsgdmFyKC0taW9uLXNhZmUtYXJlYS10b3AsIDBweCkpXCI7XG4gICAgd3JhcHBlckFuaW1hdGlvbi5hZGRFbGVtZW50KHdyYXBwZXJFbCk7XG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgd3JhcHBlckFuaW1hdGlvbi5mcm9tVG8oJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVZKC0xMDAlKScsIFwidHJhbnNsYXRlWShcIiArIHRvcCArIFwiKVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtaWRkbGUnOlxuICAgICAgICAgICAgdmFyIHRvcFBvc2l0aW9uID0gTWF0aC5mbG9vcihob3N0RWwuY2xpZW50SGVpZ2h0IC8gMiAtIHdyYXBwZXJFbC5jbGllbnRIZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIHdyYXBwZXJFbC5zdHlsZS50b3AgPSB0b3BQb3NpdGlvbiArIFwicHhcIjtcbiAgICAgICAgICAgIHdyYXBwZXJBbmltYXRpb24uZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHdyYXBwZXJBbmltYXRpb24uZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgxMDAlKScsIFwidHJhbnNsYXRlWShcIiArIGJvdHRvbSArIFwiKVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChob3N0RWwpXG4gICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllciguMTU1LDEuMTA1LC4yOTUsMS4xMiknKVxuICAgICAgICAuZHVyYXRpb24oNDAwKVxuICAgICAgICAuYWRkQW5pbWF0aW9uKHdyYXBwZXJBbmltYXRpb24pO1xufTtcbi8qKlxuICogaU9TIFRvYXN0IExlYXZlIEFuaW1hdGlvblxuICovXG52YXIgaW9zTGVhdmVBbmltYXRpb24gPSBmdW5jdGlvbiAoYmFzZUVsLCBwb3NpdGlvbikge1xuICAgIHZhciBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgaG9zdEVsID0gYmFzZUVsLmhvc3QgfHwgYmFzZUVsO1xuICAgIHZhciB3cmFwcGVyRWwgPSBiYXNlRWwucXVlcnlTZWxlY3RvcignLnRvYXN0LXdyYXBwZXInKTtcbiAgICB2YXIgYm90dG9tID0gXCJjYWxjKC0xMHB4IC0gdmFyKC0taW9uLXNhZmUtYXJlYS1ib3R0b20sIDBweCkpXCI7XG4gICAgdmFyIHRvcCA9IFwiY2FsYygxMHB4ICsgdmFyKC0taW9uLXNhZmUtYXJlYS10b3AsIDBweCkpXCI7XG4gICAgd3JhcHBlckFuaW1hdGlvbi5hZGRFbGVtZW50KHdyYXBwZXJFbCk7XG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgd3JhcHBlckFuaW1hdGlvbi5mcm9tVG8oJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlWShcIiArIHRvcCArIFwiKVwiLCAndHJhbnNsYXRlWSgtMTAwJSknKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtaWRkbGUnOlxuICAgICAgICAgICAgd3JhcHBlckFuaW1hdGlvbi5mcm9tVG8oJ29wYWNpdHknLCAwLjk5LCAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgd3JhcHBlckFuaW1hdGlvbi5mcm9tVG8oJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlWShcIiArIGJvdHRvbSArIFwiKVwiLCAndHJhbnNsYXRlWSgxMDAlKScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGhvc3RFbClcbiAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpJylcbiAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgLmFkZEFuaW1hdGlvbih3cmFwcGVyQW5pbWF0aW9uKTtcbn07XG4vKipcbiAqIE1EIFRvYXN0IEVudGVyIEFuaW1hdGlvblxuICovXG52YXIgbWRFbnRlckFuaW1hdGlvbiA9IGZ1bmN0aW9uIChiYXNlRWwsIHBvc2l0aW9uKSB7XG4gICAgdmFyIGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciBob3N0RWwgPSBiYXNlRWwuaG9zdCB8fCBiYXNlRWw7XG4gICAgdmFyIHdyYXBwZXJFbCA9IGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcudG9hc3Qtd3JhcHBlcicpO1xuICAgIHZhciBib3R0b20gPSBcImNhbGMoOHB4ICsgdmFyKC0taW9uLXNhZmUtYXJlYS1ib3R0b20sIDBweCkpXCI7XG4gICAgdmFyIHRvcCA9IFwiY2FsYyg4cHggKyB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCwgMHB4KSlcIjtcbiAgICB3cmFwcGVyQW5pbWF0aW9uLmFkZEVsZW1lbnQod3JhcHBlckVsKTtcbiAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICB3cmFwcGVyRWwuc3R5bGUudG9wID0gdG9wO1xuICAgICAgICAgICAgd3JhcHBlckFuaW1hdGlvbi5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtaWRkbGUnOlxuICAgICAgICAgICAgdmFyIHRvcFBvc2l0aW9uID0gTWF0aC5mbG9vcihob3N0RWwuY2xpZW50SGVpZ2h0IC8gMiAtIHdyYXBwZXJFbC5jbGllbnRIZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIHdyYXBwZXJFbC5zdHlsZS50b3AgPSB0b3BQb3NpdGlvbiArIFwicHhcIjtcbiAgICAgICAgICAgIHdyYXBwZXJBbmltYXRpb24uZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHdyYXBwZXJFbC5zdHlsZS5ib3R0b20gPSBib3R0b207XG4gICAgICAgICAgICB3cmFwcGVyQW5pbWF0aW9uLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGhvc3RFbClcbiAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpJylcbiAgICAgICAgLmR1cmF0aW9uKDQwMClcbiAgICAgICAgLmFkZEFuaW1hdGlvbih3cmFwcGVyQW5pbWF0aW9uKTtcbn07XG4vKipcbiAqIG1kIFRvYXN0IExlYXZlIEFuaW1hdGlvblxuICovXG52YXIgbWRMZWF2ZUFuaW1hdGlvbiA9IGZ1bmN0aW9uIChiYXNlRWwpIHtcbiAgICB2YXIgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIGhvc3RFbCA9IGJhc2VFbC5ob3N0IHx8IGJhc2VFbDtcbiAgICB2YXIgd3JhcHBlckVsID0gYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy50b2FzdC13cmFwcGVyJyk7XG4gICAgd3JhcHBlckFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudCh3cmFwcGVyRWwpXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjk5LCAwKTtcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChob3N0RWwpXG4gICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllciguMzYsLjY2LC4wNCwxKScpXG4gICAgICAgIC5kdXJhdGlvbigzMDApXG4gICAgICAgIC5hZGRBbmltYXRpb24od3JhcHBlckFuaW1hdGlvbik7XG59O1xudmFyIFRvYXN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzEoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLnByZXNlbnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSG93IG1hbnkgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIGhpZGluZyB0aGUgdG9hc3QuIEJ5IGRlZmF1bHQsIGl0IHdpbGwgc2hvd1xuICAgICAgICAgKiB1bnRpbCBgZGlzbWlzcygpYCBpcyBjYWxsZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGtleWJvYXJkIHdpbGwgYmUgYXV0b21hdGljYWxseSBkaXNtaXNzZWQgd2hlbiB0aGUgb3ZlcmxheSBpcyBwcmVzZW50ZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmtleWJvYXJkQ2xvc2UgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgdG9hc3Qgb24gdGhlIHNjcmVlbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSAnYm90dG9tJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBkZXByZWNhdGVkIFVzZSBgYnV0dG9uc2AgaW5zdGVhZC4gSWYgYHRydWVgLCB0aGUgY2xvc2UgYnV0dG9uIHdpbGwgYmUgZGlzcGxheWVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zaG93Q2xvc2VCdXR0b24gPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHRvYXN0IHdpbGwgYmUgdHJhbnNsdWNlbnQuXG4gICAgICAgICAqIE9ubHkgYXBwbGllcyB3aGVuIHRoZSBtb2RlIGlzIGBcImlvc1wiYCBhbmQgdGhlIGRldmljZSBzdXBwb3J0c1xuICAgICAgICAgKiBbYGJhY2tkcm9wLWZpbHRlcmBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZHJvcC1maWx0ZXIjQnJvd3Nlcl9jb21wYXRpYmlsaXR5KS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJhbnNsdWNlbnQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHRvYXN0IHdpbGwgYW5pbWF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSB0cnVlO1xuICAgICAgICBwcmVwYXJlT3ZlcmxheSh0aGlzLmVsKTtcbiAgICAgICAgdGhpcy5kaWRQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Ub2FzdERpZFByZXNlbnRcIiwgNyk7XG4gICAgICAgIHRoaXMud2lsbFByZXNlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblRvYXN0V2lsbFByZXNlbnRcIiwgNyk7XG4gICAgICAgIHRoaXMud2lsbERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblRvYXN0V2lsbERpc21pc3NcIiwgNyk7XG4gICAgICAgIHRoaXMuZGlkRGlzbWlzcyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uVG9hc3REaWREaXNtaXNzXCIsIDcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVzZW50IHRoZSB0b2FzdCBvdmVybGF5IGFmdGVyIGl0IGhhcyBiZWVuIGNyZWF0ZWQuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUucHJlc2VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgcHJlc2VudCh0aGlzLCAndG9hc3RFbnRlcicsIGlvc0VudGVyQW5pbWF0aW9uLCBtZEVudGVyQW5pbWF0aW9uLCB0aGlzLnBvc2l0aW9uKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmR1cmF0aW9uID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHVyYXRpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5kaXNtaXNzKHVuZGVmaW5lZCwgJ3RpbWVvdXQnKTsgfSwgdGhpcy5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGlzbWlzcyB0aGUgdG9hc3Qgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBwcmVzZW50ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBBbnkgZGF0YSB0byBlbWl0IGluIHRoZSBkaXNtaXNzIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0gcm9sZSBUaGUgcm9sZSBvZiB0aGUgZWxlbWVudCB0aGF0IGlzIGRpc21pc3NpbmcgdGhlIHRvYXN0LlxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWZ1bCBpbiBhIGJ1dHRvbiBoYW5kbGVyIGZvciBkZXRlcm1pbmluZyB3aGljaCBidXR0b24gd2FzXG4gICAgICogY2xpY2tlZCB0byBkaXNtaXNzIHRoZSB0b2FzdC5cbiAgICAgKiBTb21lIGV4YW1wbGVzIGluY2x1ZGU6IGBgXCJjYW5jZWxcImAsIGBcImRlc3RydWN0aXZlXCJgLCBcInNlbGVjdGVkXCJgLCBhbmQgYFwiYmFja2Ryb3BcImAuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZGlzbWlzcyA9IGZ1bmN0aW9uIChkYXRhLCByb2xlKSB7XG4gICAgICAgIGlmICh0aGlzLmR1cmF0aW9uVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZHVyYXRpb25UaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlzbWlzcyh0aGlzLCBkYXRhLCByb2xlLCAndG9hc3RMZWF2ZScsIGlvc0xlYXZlQW5pbWF0aW9uLCBtZExlYXZlQW5pbWF0aW9uLCB0aGlzLnBvc2l0aW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgdG9hc3QgZGlkIGRpc21pc3MuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25EaWREaXNtaXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvblRvYXN0RGlkRGlzbWlzcycpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSB0b2FzdCB3aWxsIGRpc21pc3MuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25XaWxsRGlzbWlzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25Ub2FzdFdpbGxEaXNtaXNzJyk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5nZXRCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgYnV0dG9ucyA9IHRoaXMuYnV0dG9uc1xuICAgICAgICAgICAgPyB0aGlzLmJ1dHRvbnMubWFwKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgYiA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgICAgID8geyB0ZXh0OiBiIH1cbiAgICAgICAgICAgICAgICAgICAgOiBiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogW107XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgICAgICAgaWYgKHRoaXMuc2hvd0Nsb3NlQnV0dG9uKSB7XG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNsb3NlQnV0dG9uVGV4dCB8fCAnQ2xvc2UnLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmRpc21pc3ModW5kZWZpbmVkLCAnY2FuY2VsJyk7IH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidXR0b25zO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuYnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByb2xlLCBzaG91bGREaXNtaXNzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZSA9IGJ1dHRvbi5yb2xlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2FuY2VsKHJvbGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMuZGlzbWlzcyh1bmRlZmluZWQsIHJvbGUpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY2FsbEJ1dHRvbkhhbmRsZXIoYnV0dG9uKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZERpc21pc3MgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkRGlzbWlzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLmRpc21pc3ModW5kZWZpbmVkLCBidXR0b24ucm9sZSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFByb21pc2UucmVzb2x2ZSgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jYWxsQnV0dG9uSGFuZGxlciA9IGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJ0biwgZV8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoYnV0dG9uICYmIGJ1dHRvbi5oYW5kbGVyKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzYWZlQ2FsbChidXR0b24uaGFuZGxlcildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBydG4gPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocnRuID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGhhbmRsZXIgaXMgZmFsc2UgdGhlbiBkbyBub3QgZGlzbWlzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRydWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlbmRlckJ1dHRvbnMgPSBmdW5jdGlvbiAoYnV0dG9ucywgc2lkZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChidXR0b25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgdmFyIGJ1dHRvbkdyb3Vwc0NsYXNzZXMgPSAoX2EgPSB7XG4gICAgICAgICAgICAgICAgJ3RvYXN0LWJ1dHRvbi1ncm91cCc6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfYVtcInRvYXN0LWJ1dHRvbi1ncm91cC1cIiArIHNpZGVdID0gdHJ1ZSxcbiAgICAgICAgICAgIF9hKTtcbiAgICAgICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IGJ1dHRvbkdyb3Vwc0NsYXNzZXMgfSwgYnV0dG9ucy5tYXAoZnVuY3Rpb24gKGIpIHsgcmV0dXJuIGgoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBjbGFzczogYnV0dG9uQ2xhc3MoYiksIHRhYkluZGV4OiAwLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5idXR0b25DbGljayhiKTsgfSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidG9hc3QtYnV0dG9uLWlubmVyXCIgfSwgYi5pY29uICYmXG4gICAgICAgICAgICBoKFwiaW9uLWljb25cIiwgeyBpY29uOiBiLmljb24sIHNsb3Q6IGIudGV4dCA9PT0gdW5kZWZpbmVkID8gJ2ljb24tb25seScgOiB1bmRlZmluZWQsIGNsYXNzOiBcInRvYXN0LWljb25cIiB9KSwgYi50ZXh0KSwgbW9kZSA9PT0gJ21kJyAmJiBoKFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwgeyB0eXBlOiBiLmljb24gIT09IHVuZGVmaW5lZCAmJiBiLnRleHQgPT09IHVuZGVmaW5lZCA/ICd1bmJvdW5kZWQnIDogJ2JvdW5kZWQnIH0pKTsgfSkpKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgdmFyIGFsbEJ1dHRvbnMgPSB0aGlzLmdldEJ1dHRvbnMoKTtcbiAgICAgICAgdmFyIHN0YXJ0QnV0dG9ucyA9IGFsbEJ1dHRvbnMuZmlsdGVyKGZ1bmN0aW9uIChiKSB7IHJldHVybiBiLnNpZGUgPT09ICdzdGFydCc7IH0pO1xuICAgICAgICB2YXIgZW5kQnV0dG9ucyA9IGFsbEJ1dHRvbnMuZmlsdGVyKGZ1bmN0aW9uIChiKSB7IHJldHVybiBiLnNpZGUgIT09ICdzdGFydCc7IH0pO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHZhciB3cmFwcGVyQ2xhc3MgPSAoX2EgPSB7XG4gICAgICAgICAgICAgICAgJ3RvYXN0LXdyYXBwZXInOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX2FbXCJ0b2FzdC1cIiArIHRoaXMucG9zaXRpb25dID0gdHJ1ZSxcbiAgICAgICAgICAgIF9hKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IFwiXCIgKyAoNjAwMDAgKyB0aGlzLm92ZXJsYXlJbmRleCksXG4gICAgICAgICAgICB9LCBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oKF9iID0ge30sIF9iW21vZGVdID0gdHJ1ZSwgX2IpLCBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvcikpLCBnZXRDbGFzc01hcCh0aGlzLmNzc0NsYXNzKSksIHsgJ3RvYXN0LXRyYW5zbHVjZW50JzogdGhpcy50cmFuc2x1Y2VudCB9KSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHdyYXBwZXJDbGFzcyB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidG9hc3QtY29udGFpbmVyXCIgfSwgdGhpcy5yZW5kZXJCdXR0b25zKHN0YXJ0QnV0dG9ucywgJ3N0YXJ0JyksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0b2FzdC1jb250ZW50XCIgfSwgdGhpcy5oZWFkZXIgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgaChcImRpdlwiLCB7IGNsYXNzOiBcInRvYXN0LWhlYWRlclwiIH0sIHRoaXMuaGVhZGVyKSwgdGhpcy5tZXNzYWdlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0b2FzdC1tZXNzYWdlXCIsIGlubmVySFRNTDogc2FuaXRpemVET01TdHJpbmcodGhpcy5tZXNzYWdlKSB9KSksIHRoaXMucmVuZGVyQnV0dG9ucyhlbmRCdXR0b25zLCAnZW5kJykpKSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCI6aG9zdHstLWJvcmRlci13aWR0aDowOy0tYm9yZGVyLXN0eWxlOm5vbmU7LS1ib3JkZXItY29sb3I6aW5pdGlhbDstLWJveC1zaGFkb3c6bm9uZTstLW1pbi13aWR0aDphdXRvOy0td2lkdGg6YXV0bzstLW1pbi1oZWlnaHQ6YXV0bzstLWhlaWdodDphdXRvOy0tbWF4LWhlaWdodDphdXRvO2xlZnQ6MDt0b3A6MDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Y29sb3I6dmFyKC0tY29sb3IpO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTtjb250YWluOnN0cmljdDt6LWluZGV4OjEwMDE7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSl7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowfTpob3N0KC5vdmVybGF5LWhpZGRlbil7ZGlzcGxheTpub25lfTpob3N0KC5pb24tY29sb3Ipey0tYnV0dG9uLWNvbG9yOmluaGVyaXQ7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdCguaW9uLWNvbG9yKSAudG9hc3Qtd3JhcHBlcntiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX0udG9hc3Qtd3JhcHBlcntib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2xlZnQ6dmFyKC0tc3RhcnQpO3JpZ2h0OnZhcigtLWVuZCk7d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpOy13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAudG9hc3Qtd3JhcHBlcixbZGlyPXJ0bF0gLnRvYXN0LXdyYXBwZXJ7bGVmdDp1bnNldDtyaWdodDp1bnNldDtsZWZ0OnZhcigtLWVuZCk7cmlnaHQ6dmFyKC0tc3RhcnQpfS50b2FzdC1jb250YWluZXJ7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtwb2ludGVyLWV2ZW50czphdXRvO2NvbnRhaW46Y29udGVudH0udG9hc3QtY29udGFpbmVyLC50b2FzdC1jb250ZW50e2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fS50b2FzdC1jb250ZW50ey1tcy1mbGV4OjE7ZmxleDoxOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnRvYXN0LW1lc3NhZ2V7LW1zLWZsZXg6MTtmbGV4OjE7d2hpdGUtc3BhY2U6cHJlLXdyYXB9LnRvYXN0LWJ1dHRvbi1ncm91cHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0udG9hc3QtYnV0dG9ue2JvcmRlcjowO291dGxpbmU6bm9uZTtjb2xvcjp2YXIoLS1idXR0b24tY29sb3IpO3otaW5kZXg6MH0udG9hc3QtaWNvbntmb250LXNpemU6MS40ZW19LnRvYXN0LWJ1dHRvbi1pbm5lcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfVxcQG1lZGlhIChhbnktaG92ZXI6aG92ZXIpey50b2FzdC1idXR0b246aG92ZXJ7Y3Vyc29yOnBvaW50ZXJ9fTpob3N0ey0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC04MDAsIzMzMyk7LS1ib3JkZXItcmFkaXVzOjRweDstLWJveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwwLjIpLDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLDAuMTQpLDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLDAuMTIpOy0tYnV0dG9uLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpOy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAsI2YyZjJmMik7LS1tYXgtd2lkdGg6NzAwcHg7LS1zdGFydDo4cHg7LS1lbmQ6OHB4O2ZvbnQtc2l6ZToxNHB4fS50b2FzdC13cmFwcGVye21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87bWFyZ2luLXRvcDphdXRvO21hcmdpbi1ib3R0b206YXV0bztkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO29wYWNpdHk6LjAxO3otaW5kZXg6MTB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey50b2FzdC13cmFwcGVye21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDphdXRvO21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0bzstd2Via2l0LW1hcmdpbi1lbmQ6YXV0bzttYXJnaW4taW5saW5lLWVuZDphdXRvfX0udG9hc3QtY29udGVudHtwYWRkaW5nLWxlZnQ6MTZweDtwYWRkaW5nLXJpZ2h0OjE2cHg7cGFkZGluZy10b3A6MTRweDtwYWRkaW5nLWJvdHRvbToxNHB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsudG9hc3QtY29udGVudHtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweH19LnRvYXN0LWhlYWRlcnttYXJnaW4tYm90dG9tOjJweDtmb250LXdlaWdodDo1MDB9LnRvYXN0LWhlYWRlciwudG9hc3QtbWVzc2FnZXtsaW5lLWhlaWdodDoyMHB4fS50b2FzdC1idXR0b24tZ3JvdXAtc3RhcnR7bWFyZ2luLWxlZnQ6OHB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsudG9hc3QtYnV0dG9uLWdyb3VwLXN0YXJ0e21hcmdpbi1sZWZ0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjhweDttYXJnaW4taW5saW5lLXN0YXJ0OjhweH19LnRvYXN0LWJ1dHRvbi1ncm91cC1lbmR7bWFyZ2luLXJpZ2h0OjhweH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LnRvYXN0LWJ1dHRvbi1ncm91cC1lbmR7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLWVuZDo4cHg7bWFyZ2luLWlubGluZS1lbmQ6OHB4fX0udG9hc3QtYnV0dG9ue3BhZGRpbmctbGVmdDoxNXB4O3BhZGRpbmctcmlnaHQ6MTVweDtwYWRkaW5nLXRvcDoxMHB4O3BhZGRpbmctYm90dG9tOjEwcHg7cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHkpO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMDtsZXR0ZXItc3BhY2luZzouODRweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7b3ZlcmZsb3c6aGlkZGVufVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsudG9hc3QtYnV0dG9ue3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDoxNXB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE1cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxNXB4O3BhZGRpbmctaW5saW5lLWVuZDoxNXB4fX0udG9hc3QtYnV0dG9uLWNhbmNlbHtjb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC0xMDAsI2U2ZTZlNil9LnRvYXN0LWJ1dHRvbi1pY29uLW9ubHl7Ym9yZGVyLXJhZGl1czo1MCU7cGFkZGluZy1sZWZ0OjlweDtwYWRkaW5nLXJpZ2h0OjlweDtwYWRkaW5nLXRvcDo5cHg7cGFkZGluZy1ib3R0b206OXB4O3dpZHRoOjM2cHg7aGVpZ2h0OjM2cHh9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey50b2FzdC1idXR0b24taWNvbi1vbmx5e3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDo5cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6OXB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6OXB4O3BhZGRpbmctaW5saW5lLWVuZDo5cHh9fVxcQG1lZGlhIChhbnktaG92ZXI6aG92ZXIpey50b2FzdC1idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiw1NiwxMjgsMjU1KSwuMDgpfS50b2FzdC1idXR0b24tY2FuY2VsOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsMjU1LDI1NSwyNTUpLC4wOCl9fVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NfMTtcbn0oKSk7XG52YXIgYnV0dG9uQ2xhc3MgPSBmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKChfYSA9IHsgJ3RvYXN0LWJ1dHRvbic6IHRydWUsICd0b2FzdC1idXR0b24taWNvbi1vbmx5JzogYnV0dG9uLmljb24gIT09IHVuZGVmaW5lZCAmJiBidXR0b24udGV4dCA9PT0gdW5kZWZpbmVkIH0sIF9hW1widG9hc3QtYnV0dG9uLVwiICsgYnV0dG9uLnJvbGVdID0gYnV0dG9uLnJvbGUgIT09IHVuZGVmaW5lZCwgX2FbJ2lvbi1mb2N1c2FibGUnXSA9IHRydWUsIF9hWydpb24tYWN0aXZhdGFibGUnXSA9IHRydWUsIF9hKSwgZ2V0Q2xhc3NNYXAoYnV0dG9uLmNzc0NsYXNzKSk7XG59O1xuZXhwb3J0IHsgVG9hc3QgYXMgaW9uX3RvYXN0IH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG52YXIgaG9zdENvbnRleHQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGVsKSB7XG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xufTtcbi8qKlxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxuICovXG52YXIgY3JlYXRlQ29sb3JDbGFzc2VzID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IChfYSA9IHtcbiAgICAgICAgICAgICdpb24tY29sb3InOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIF9hW1wiaW9uLWNvbG9yLVwiICsgY29sb3JdID0gdHJ1ZSxcbiAgICAgICAgX2EpIDogdW5kZWZpbmVkO1xufTtcbnZhciBnZXRDbGFzc0xpc3QgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgIHJldHVybiBhcnJheVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPSBudWxsOyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50cmltKCk7IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSAnJzsgfSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbn07XG52YXIgZ2V0Q2xhc3NNYXAgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gbWFwW2NdID0gdHJ1ZTsgfSk7XG4gICAgcmV0dXJuIG1hcDtcbn07XG52YXIgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XG52YXIgb3BlblVSTCA9IGZ1bmN0aW9uICh1cmwsIGV2LCBkaXJlY3Rpb24pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvdXRlcjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgICAgICAgaWYgKHJvdXRlcikge1xuICAgICAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbildO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=