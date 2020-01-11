(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

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

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-alert-ios.entry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-alert-ios.entry.js ***!
  \**********************************************************************/
/*! exports provided: ion_alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_alert", function() { return Alert; });
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-af478fe9.js */ "./node_modules/@ionic/core/dist/esm-es5/animation-af478fe9.js");
/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlays-10640d86.js */ "./node_modules/@ionic/core/dist/esm-es5/overlays-10640d86.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");
/* harmony import */ var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-3476b023.js */ "./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js");







/**
 * iOS Alert Enter Animation
 */
var iosEnterAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.3);
    wrapperAnimation
        .addElement(baseEl.querySelector('.alert-wrapper'))
        .keyframes([
        { offset: 0, opacity: '0.01', transform: 'scale(1.1)' },
        { offset: 1, opacity: '1', transform: 'scale(1)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * iOS Alert Leave Animation
 */
var iosLeaveAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.3, 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.alert-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.99, transform: 'scale(1)' },
        { offset: 1, opacity: 0, transform: 'scale(0.9)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Alert Enter Animation
 */
var mdEnterAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.32);
    wrapperAnimation
        .addElement(baseEl.querySelector('.alert-wrapper'))
        .keyframes([
        { offset: 0, opacity: '0.01', transform: 'scale(0.9)' },
        { offset: 1, opacity: '1', transform: 'scale(1)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(150)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Alert Leave Animation
 */
var mdLeaveAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.32, 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.alert-wrapper'))
        .fromTo('opacity', 0.99, 0);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(150)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
var Alert = /** @class */ (function () {
    function Alert(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.processedInputs = [];
        this.processedButtons = [];
        this.presented = false;
        this.mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = true;
        /**
         * Array of buttons to be added to the alert.
         */
        this.buttons = [];
        /**
         * Array of input to show in the alert.
         */
        this.inputs = [];
        /**
         * If `true`, the alert will be dismissed when the backdrop is clicked.
         */
        this.backdropDismiss = true;
        /**
         * If `true`, the alert will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        /**
         * If `true`, the alert will animate.
         */
        this.animated = true;
        this.onBackdropTap = function () {
            _this.dismiss(undefined, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["B"]);
        };
        this.dispatchCancelHandler = function (ev) {
            var role = ev.detail.role;
            if (Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["i"])(role)) {
                var cancelButton = _this.processedButtons.find(function (b) { return b.role === 'cancel'; });
                _this.callButtonHandler(cancelButton);
            }
        };
        Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["d"])(this.el);
        this.didPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionAlertDidPresent", 7);
        this.willPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionAlertWillPresent", 7);
        this.willDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionAlertWillDismiss", 7);
        this.didDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionAlertDidDismiss", 7);
    }
    Alert.prototype.buttonsChanged = function () {
        var buttons = this.buttons;
        this.processedButtons = buttons.map(function (btn) {
            return (typeof btn === 'string')
                ? { text: btn, role: btn.toLowerCase() === 'cancel' ? 'cancel' : undefined }
                : btn;
        });
    };
    Alert.prototype.inputsChanged = function () {
        var _this = this;
        var inputs = this.inputs;
        // An alert can be created with several different inputs. Radios,
        // checkboxes and inputs are all accepted, but they cannot be mixed.
        var inputTypes = new Set(inputs.map(function (i) { return i.type; }));
        if (inputTypes.has('checkbox') && inputTypes.has('radio')) {
            console.warn("Alert cannot mix input types: " + (Array.from(inputTypes.values()).join('/')) + ". Please see alert docs for more info.");
        }
        this.inputType = inputTypes.values().next().value;
        this.processedInputs = inputs.map(function (i, index) { return ({
            type: i.type || 'text',
            name: i.name || "" + index,
            placeholder: i.placeholder || '',
            value: i.value,
            label: i.label,
            checked: !!i.checked,
            disabled: !!i.disabled,
            id: i.id || "alert-input-" + _this.overlayIndex + "-" + index,
            handler: i.handler,
            min: i.min,
            max: i.max
        }); });
    };
    Alert.prototype.componentWillLoad = function () {
        this.inputsChanged();
        this.buttonsChanged();
    };
    /**
     * Present the alert overlay after it has been created.
     */
    Alert.prototype.present = function () {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this, 'alertEnter', iosEnterAnimation, mdEnterAnimation);
    };
    /**
     * Dismiss the alert overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the alert.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the alert.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */
    Alert.prototype.dismiss = function (data, role) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["f"])(this, data, role, 'alertLeave', iosLeaveAnimation, mdLeaveAnimation);
    };
    /**
     * Returns a promise that resolves when the alert did dismiss.
     */
    Alert.prototype.onDidDismiss = function () {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.el, 'ionAlertDidDismiss');
    };
    /**
     * Returns a promise that resolves when the alert will dismiss.
     */
    Alert.prototype.onWillDismiss = function () {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.el, 'ionAlertWillDismiss');
    };
    Alert.prototype.rbClick = function (selectedInput) {
        for (var _i = 0, _a = this.processedInputs; _i < _a.length; _i++) {
            var input = _a[_i];
            input.checked = input === selectedInput;
        }
        this.activeId = selectedInput.id;
        Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["s"])(selectedInput.handler, selectedInput);
        this.el.forceUpdate();
    };
    Alert.prototype.cbClick = function (selectedInput) {
        selectedInput.checked = !selectedInput.checked;
        Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["s"])(selectedInput.handler, selectedInput);
        this.el.forceUpdate();
    };
    Alert.prototype.buttonClick = function (button) {
        var role = button.role;
        var values = this.getValues();
        if (Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["i"])(role)) {
            return this.dismiss({ values: values }, role);
        }
        var returnData = this.callButtonHandler(button, values);
        if (returnData !== false) {
            return this.dismiss(Object.assign({ values: values }, returnData), button.role);
        }
        return Promise.resolve(false);
    };
    Alert.prototype.callButtonHandler = function (button, data) {
        if (button && button.handler) {
            // a handler has been provided, execute it
            // pass the handler the values from the inputs
            var returnData = Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["s"])(button.handler, data);
            if (returnData === false) {
                // if the return value of the handler is false then do not dismiss
                return false;
            }
            if (typeof returnData === 'object') {
                return returnData;
            }
        }
        return {};
    };
    Alert.prototype.getValues = function () {
        if (this.processedInputs.length === 0) {
            // this is an alert without any options/inputs at all
            return undefined;
        }
        if (this.inputType === 'radio') {
            // this is an alert with radio buttons (single value select)
            // return the one value which is checked, otherwise undefined
            var checkedInput = this.processedInputs.find(function (i) { return !!i.checked; });
            return checkedInput ? checkedInput.value : undefined;
        }
        if (this.inputType === 'checkbox') {
            // this is an alert with checkboxes (multiple value select)
            // return an array of all the checked values
            return this.processedInputs.filter(function (i) { return i.checked; }).map(function (i) { return i.value; });
        }
        // this is an alert with text inputs
        // return an object of all the values with the input name as the key
        var values = {};
        this.processedInputs.forEach(function (i) {
            values[i.name] = i.value || '';
        });
        return values;
    };
    Alert.prototype.renderAlertInputs = function (labelledBy) {
        switch (this.inputType) {
            case 'checkbox': return this.renderCheckbox(labelledBy);
            case 'radio': return this.renderRadio(labelledBy);
            default: return this.renderInput(labelledBy);
        }
    };
    Alert.prototype.renderCheckbox = function (labelledby) {
        var _this = this;
        var inputs = this.processedInputs;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        if (inputs.length === 0) {
            return null;
        }
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-checkbox-group", "aria-labelledby": labelledby }, inputs.map(function (i) { return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", onClick: function () { return _this.cbClick(i); }, "aria-checked": "" + i.checked, id: i.id, disabled: i.disabled, tabIndex: 0, role: "checkbox", class: {
                'alert-tappable': true,
                'alert-checkbox': true,
                'alert-checkbox-button': true,
                'ion-focusable': true,
                'alert-checkbox-button-disabled': i.disabled || false
            } }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-button-inner" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-checkbox-icon" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-checkbox-inner" })), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-checkbox-label" }, i.label)), mode === 'md' && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null))); })));
    };
    Alert.prototype.renderRadio = function (labelledby) {
        var _this = this;
        var inputs = this.processedInputs;
        if (inputs.length === 0) {
            return null;
        }
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-radio-group", role: "radiogroup", "aria-labelledby": labelledby, "aria-activedescendant": this.activeId }, inputs.map(function (i) { return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", onClick: function () { return _this.rbClick(i); }, "aria-checked": "" + i.checked, disabled: i.disabled, id: i.id, tabIndex: 0, class: {
                'alert-radio-button': true,
                'alert-tappable': true,
                'alert-radio': true,
                'ion-focusable': true,
                'alert-radio-button-disabled': i.disabled || false
            }, role: "radio" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-button-inner" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-radio-icon" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-radio-inner" })), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-radio-label" }, i.label)))); })));
    };
    Alert.prototype.renderInput = function (labelledby) {
        var inputs = this.processedInputs;
        if (inputs.length === 0) {
            return null;
        }
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-input-group", "aria-labelledby": labelledby }, inputs.map(function (i) { return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-input-wrapper" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { placeholder: i.placeholder, value: i.value, type: i.type, min: i.min, max: i.max, onInput: function (e) { return i.value = e.target.value; }, id: i.id, disabled: i.disabled, tabIndex: 0, class: {
                'alert-input': true,
                'alert-input-disabled': i.disabled || false
            } }))); })));
    };
    Alert.prototype.renderAlertButtons = function () {
        var _this = this;
        var buttons = this.processedButtons;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        var alertButtonGroupClass = {
            'alert-button-group': true,
            'alert-button-group-vertical': buttons.length > 2
        };
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: alertButtonGroupClass }, buttons.map(function (button) { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", class: buttonClass(button), tabIndex: 0, onClick: function () { return _this.buttonClick(button); } }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "alert-button-inner" }, button.text), mode === 'md' && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)); })));
    };
    Alert.prototype.render = function () {
        var _a;
        var _b = this, overlayIndex = _b.overlayIndex, header = _b.header, subHeader = _b.subHeader;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        var hdrId = "alert-" + overlayIndex + "-hdr";
        var subHdrId = "alert-" + overlayIndex + "-sub-hdr";
        var msgId = "alert-" + overlayIndex + "-msg";
        var labelledById;
        if (header !== undefined) {
            labelledById = hdrId;
        }
        else if (subHeader !== undefined) {
            labelledById = subHdrId;
        }
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "dialog", "aria-modal": "true", style: {
                zIndex: "" + (20000 + overlayIndex),
            }, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.cssClass)), (_a = {}, _a[mode] = true, _a['alert-translucent'] = this.translucent, _a)), onIonAlertWillDismiss: this.dispatchCancelHandler, onIonBackdropTap: this.onBackdropTap }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", { tappable: this.backdropDismiss }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-wrapper" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-head" }, header && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", { id: hdrId, class: "alert-title" }, header), subHeader && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", { id: subHdrId, class: "alert-sub-title" }, subHeader)), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { id: msgId, class: "alert-message", innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_6__["s"])(this.message) }), this.renderAlertInputs(labelledById), this.renderAlertButtons())));
    };
    Object.defineProperty(Alert.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert, "watchers", {
        get: function () {
            return {
                "buttons": ["buttonsChanged"],
                "inputs": ["inputsChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert, "style", {
        get: function () { return ".sc-ion-alert-ios-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-ios-h{display:none}.alert-top.sc-ion-alert-ios-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-ios{margin-top:0}.alert-sub-title.sc-ion-alert-ios, .alert-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-ios{margin-top:5px;font-weight:400}.alert-message.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-ios::-webkit-scrollbar, .alert-message.sc-ion-alert-ios::-webkit-scrollbar, .alert-radio-group.sc-ion-alert-ios::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-ios{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-ios{display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-ios, .alert-tappable.ion-focused.sc-ion-alert-ios{background:var(--ion-color-step-100,#e6e6e6)}.alert-button-inner.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-checkbox-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios, .alert-input-disabled.sc-ion-alert-ios, .alert-radio-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{cursor:default;opacity:.5;pointer-events:none}.alert-tappable.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:normal;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:strict}.alert-button.sc-ion-alert-ios, .alert-checkbox.sc-ion-alert-ios, .alert-input.sc-ion-alert-ios, .alert-radio.sc-ion-alert-ios{outline:none}.alert-checkbox-icon.sc-ion-alert-ios, .alert-checkbox-inner.sc-ion-alert-ios, .alert-radio-icon.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-alert-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;font-size:14px}.alert-wrapper.sc-ion-alert-ios{border-radius:13px;-webkit-box-shadow:none;box-shadow:none;overflow:hidden}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.alert-translucent.sc-ion-alert-ios-h .alert-wrapper.sc-ion-alert-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.9);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.alert-head.sc-ion-alert-ios{padding-left:16px;padding-right:16px;padding-top:12px;padding-bottom:7px;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-head.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-title.sc-ion-alert-ios{margin-top:8px;color:var(--ion-text-color,#000);font-size:17px;font-weight:600}.alert-sub-title.sc-ion-alert-ios{color:var(--ion-color-step-600,#666);font-size:14px}.alert-input-group.sc-ion-alert-ios, .alert-message.sc-ion-alert-ios{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:21px;color:var(--ion-text-color,#000);font-size:13px;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-input-group.sc-ion-alert-ios, .alert-message.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-message.sc-ion-alert-ios{max-height:240px}.alert-message.sc-ion-alert-ios:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:12px}.alert-input.sc-ion-alert-ios{border-radius:4px;margin-top:10px;padding-left:6px;padding-right:6px;padding-top:6px;padding-bottom:6px;border:.55px solid var(--ion-color-step-250,#bfbfbf);background-color:var(--ion-background-color,#fff);-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-input.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px}}.alert-input.sc-ion-alert-ios::-webkit-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-moz-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios:-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-clear{display:none}.alert-checkbox-group.sc-ion-alert-ios, .alert-radio-group.sc-ion-alert-ios{-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:240px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);overflow-y:auto;-webkit-overflow-scrolling:touch}.alert-tappable.sc-ion-alert-ios{height:44px}.alert-radio-label.sc-ion-alert-ios{padding-left:13px;padding-right:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;color:var(--ion-text-color,#000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-radio-label.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px}}[aria-checked=true].sc-ion-alert-ios .alert-radio-label.sc-ion-alert-ios{color:var(--ion-color-primary,#3880ff)}.alert-radio-icon.sc-ion-alert-ios{position:relative;-ms-flex-order:1;order:1;min-width:30px}[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:7px;top:-7px;position:absolute;width:6px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary,#3880ff)}[dir=rtl].sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios, [dir=rtl] .sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios, [dir=rtl].sc-ion-alert-ios [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:unset;right:unset;right:7px}.alert-checkbox-label.sc-ion-alert-ios{padding-left:13px;padding-right:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-text-color,#000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-checkbox-label.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px}}.alert-checkbox-icon.sc-ion-alert-ios{border-radius:50%;margin-left:16px;margin-right:6px;margin-top:10px;margin-bottom:10px;position:relative;width:24px;height:24px;border-width:1px;border-style:solid;border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)));background-color:var(--ion-item-background,var(--ion-background-color,#fff));contain:strict}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-checkbox-icon.sc-ion-alert-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:6px;margin-inline-end:6px}}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-icon.sc-ion-alert-ios{border-color:var(--ion-color-primary,#3880ff);background-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:9px;top:4px;position:absolute;width:5px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:1px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-background-color,#fff)}[dir=rtl].sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios, [dir=rtl] .sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios, [dir=rtl].sc-ion-alert-ios [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:unset;right:unset;right:9px}.alert-button-group.sc-ion-alert-ios{margin-right:-.55px;-ms-flex-wrap:wrap;flex-wrap:wrap}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-button-group.sc-ion-alert-ios{margin-right:unset;-webkit-margin-end:-.55px;margin-inline-end:-.55px}}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:0;-ms-flex:1 1 auto;flex:1 1 auto;min-width:50%;height:44px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);border-right:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);background-color:transparent;color:var(--ion-color-primary,#3880ff);font-size:17px;overflow:hidden}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child, [dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child, [dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:first-child{border-right:0}.alert-button.sc-ion-alert-ios:last-child{border-right:0;font-weight:700}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child, [dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child, [dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child{border-right:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2)}.alert-button.activated.sc-ion-alert-ios{background-color:rgba(var(--ion-text-color-rgb,0,0,0),.1)}"; },
        enumerable: true,
        configurable: true
    });
    return Alert;
}());
var buttonClass = function (button) {
    return Object.assign({ 'alert-button': true, 'ion-focusable': true, 'ion-activatable': true }, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["g"])(button.cssClass));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2luZGV4LTM0NzZiMDIzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvaW9uLWFsZXJ0LWlvcy5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLG1CQUFtQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG1DQUFtQztBQUMzRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0NBQWdDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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K0JBQStCLGlCQUFpQixFQUFFO0FBQ2xELGtDQUFrQyxpQkFBaUIsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHNCQUFzQixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxRQUFRLHVEQUFTO0FBQzlEO0FBQ0EsV0FBVyx5REFBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDa0YiLCJmaWxlIjoiMTcuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBEb2VzIGEgc2ltcGxlIHNhbml0aXphdGlvbiBvZiBhbGwgZWxlbWVudHNcbiAqIGluIGFuIHVudHJ1c3RlZCBzdHJpbmdcbiAqL1xudmFyIHNhbml0aXplRE9NU3RyaW5nID0gZnVuY3Rpb24gKHVudHJ1c3RlZFN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgdW50cnVzdGVkU3RyaW5nICE9PSAnc3RyaW5nJyB8fCB1bnRydXN0ZWRTdHJpbmcgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdW50cnVzdGVkU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGUgYSBkb2N1bWVudCBmcmFnbWVudFxuICAgICAgICAgKiBzZXBhcmF0ZSBmcm9tIHRoZSBtYWluIERPTSxcbiAgICAgICAgICogY3JlYXRlIGEgZGl2IHRvIGRvIG91ciB3b3JrIGluXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgZG9jdW1lbnRGcmFnbWVudF8xID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICB2YXIgd29ya2luZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkb2N1bWVudEZyYWdtZW50XzEuYXBwZW5kQ2hpbGQod29ya2luZ0Rpdik7XG4gICAgICAgIHdvcmtpbmdEaXYuaW5uZXJIVE1MID0gdW50cnVzdGVkU3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIGFueSBlbGVtZW50c1xuICAgICAgICAgKiB0aGF0IGFyZSBibG9ja2VkXG4gICAgICAgICAqL1xuICAgICAgICBibG9ja2VkVGFncy5mb3JFYWNoKGZ1bmN0aW9uIChibG9ja2VkVGFnKSB7XG4gICAgICAgICAgICB2YXIgZ2V0RWxlbWVudHNUb1JlbW92ZSA9IGRvY3VtZW50RnJhZ21lbnRfMS5xdWVyeVNlbGVjdG9yQWxsKGJsb2NrZWRUYWcpO1xuICAgICAgICAgICAgZm9yICh2YXIgZWxlbWVudEluZGV4ID0gZ2V0RWxlbWVudHNUb1JlbW92ZS5sZW5ndGggLSAxOyBlbGVtZW50SW5kZXggPj0gMDsgZWxlbWVudEluZGV4LS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IGdldEVsZW1lbnRzVG9SZW1vdmVbZWxlbWVudEluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50RnJhZ21lbnRfMS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogV2Ugc3RpbGwgbmVlZCB0byBzYW5pdGl6ZVxuICAgICAgICAgICAgICAgICAqIHRoZSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgKiBhcyB0aGV5IGFyZSBsZWZ0IGJlaGluZFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZEVsZW1lbnRzID0gZ2V0RWxlbWVudENoaWxkcmVuKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGNoaWxkSW5kZXggPSAwOyBjaGlsZEluZGV4IDwgY2hpbGRFbGVtZW50cy5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZUVsZW1lbnQoY2hpbGRFbGVtZW50c1tjaGlsZEluZGV4XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdvIHRocm91Z2ggcmVtYWluaW5nIGVsZW1lbnRzIGFuZCByZW1vdmVcbiAgICAgICAgICogbm9uLWFsbG93ZWQgYXR0cmlic1xuICAgICAgICAgKi9cbiAgICAgICAgLy8gSUUgZG9lcyBub3Qgc3VwcG9ydCAuY2hpbGRyZW4gb24gZG9jdW1lbnQgZnJhZ21lbnRzLCBvbmx5IC5jaGlsZE5vZGVzXG4gICAgICAgIHZhciBkZkNoaWxkcmVuID0gZ2V0RWxlbWVudENoaWxkcmVuKGRvY3VtZW50RnJhZ21lbnRfMSk7XG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICBmb3IgKHZhciBjaGlsZEluZGV4ID0gMDsgY2hpbGRJbmRleCA8IGRmQ2hpbGRyZW4ubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcbiAgICAgICAgICAgIHNhbml0aXplRWxlbWVudChkZkNoaWxkcmVuW2NoaWxkSW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBcHBlbmQgZG9jdW1lbnQgZnJhZ21lbnQgdG8gZGl2XG4gICAgICAgIHZhciBmcmFnbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmcmFnbWVudERpdi5hcHBlbmRDaGlsZChkb2N1bWVudEZyYWdtZW50XzEpO1xuICAgICAgICAvLyBGaXJzdCBjaGlsZCBpcyBhbHdheXMgdGhlIGRpdiB3ZSBkaWQgb3VyIHdvcmsgaW5cbiAgICAgICAgdmFyIGdldElubmVyRGl2ID0gZnJhZ21lbnREaXYucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gICAgICAgIHJldHVybiAoZ2V0SW5uZXJEaXYgIT09IG51bGwpID8gZ2V0SW5uZXJEaXYuaW5uZXJIVE1MIDogZnJhZ21lbnREaXYuaW5uZXJIVE1MO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbn07XG4vKipcbiAqIENsZWFuIHVwIGN1cnJlbnQgZWxlbWVudCBiYXNlZCBvbiBhbGxvd2VkIGF0dHJpYnV0ZXNcbiAqIGFuZCB0aGVuIHJlY3Vyc2l2ZWx5IGRpZyBkb3duIGludG8gYW55IGNoaWxkIGVsZW1lbnRzIHRvXG4gKiBjbGVhbiB0aG9zZSB1cCBhcyB3ZWxsXG4gKi9cbnZhciBzYW5pdGl6ZUVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vIElFIHVzZXMgY2hpbGROb2Rlcywgc28gaWdub3JlIG5vZGVzIHRoYXQgYXJlIG5vdCBlbGVtZW50c1xuICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBhdHRyaWJ1dGUgPSBlbGVtZW50LmF0dHJpYnV0ZXMuaXRlbShpKTtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGUubmFtZTtcbiAgICAgICAgLy8gcmVtb3ZlIG5vbi1hbGxvd2VkIGF0dHJpYnNcbiAgICAgICAgaWYgKCFhbGxvd2VkQXR0cmlidXRlcy5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNsZWFuIHVwIGFueSBhbGxvd2VkIGF0dHJpYnNcbiAgICAgICAgLy8gdGhhdCBhdHRlbXB0IHRvIGRvIGFueSBKUyBmdW5ueS1idXNpbmVzc1xuICAgICAgICB2YXIgYXR0cmlidXRlVmFsdWUgPSBhdHRyaWJ1dGUudmFsdWU7XG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICBpZiAoYXR0cmlidXRlVmFsdWUgIT0gbnVsbCAmJiBhdHRyaWJ1dGVWYWx1ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdqYXZhc2NyaXB0OicpKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTYW5pdGl6ZSBhbnkgbmVzdGVkIGNoaWxkcmVuXG4gICAgICovXG4gICAgdmFyIGNoaWxkRWxlbWVudHMgPSBnZXRFbGVtZW50Q2hpbGRyZW4oZWxlbWVudCk7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNhbml0aXplRWxlbWVudChjaGlsZEVsZW1lbnRzW2ldKTtcbiAgICB9XG59O1xuLyoqXG4gKiBJRSBkb2Vzbid0IGFsd2F5cyBzdXBwb3J0IC5jaGlsZHJlblxuICogc28gd2UgcmV2ZXJ0IHRvIC5jaGlsZE5vZGVzIGluc3RlYWRcbiAqL1xudmFyIGdldEVsZW1lbnRDaGlsZHJlbiA9IGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiAoZWwuY2hpbGRyZW4gIT0gbnVsbCkgPyBlbC5jaGlsZHJlbiA6IGVsLmNoaWxkTm9kZXM7XG59O1xudmFyIGFsbG93ZWRBdHRyaWJ1dGVzID0gWydjbGFzcycsICdpZCcsICdocmVmJywgJ3NyYycsICduYW1lJywgJ3Nsb3QnXTtcbnZhciBibG9ja2VkVGFncyA9IFsnc2NyaXB0JywgJ3N0eWxlJywgJ2lmcmFtZScsICdtZXRhJywgJ2xpbmsnLCAnb2JqZWN0JywgJ2VtYmVkJ107XG5leHBvcnQgeyBzYW5pdGl6ZURPTVN0cmluZyBhcyBzIH07XG4iLCJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgZ2V0SW9uTW9kZSwgZCBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtZmVlZWZmMGQuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUFuaW1hdGlvbiB9IGZyb20gJy4vYW5pbWF0aW9uLWFmNDc4ZmU5LmpzJztcbmltcG9ydCB7IEIgYXMgQkFDS0RST1AsIGkgYXMgaXNDYW5jZWwsIGQgYXMgcHJlcGFyZU92ZXJsYXksIGUgYXMgcHJlc2VudCwgZiBhcyBkaXNtaXNzLCBnIGFzIGV2ZW50TWV0aG9kLCBzIGFzIHNhZmVDYWxsIH0gZnJvbSAnLi9vdmVybGF5cy0xMDY0MGQ4Ni5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldENsYXNzTWFwIH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG5pbXBvcnQgeyBzIGFzIHNhbml0aXplRE9NU3RyaW5nIH0gZnJvbSAnLi9pbmRleC0zNDc2YjAyMy5qcyc7XG4vKipcbiAqIGlPUyBBbGVydCBFbnRlciBBbmltYXRpb25cbiAqL1xudmFyIGlvc0VudGVyQW5pbWF0aW9uID0gZnVuY3Rpb24gKGJhc2VFbCkge1xuICAgIHZhciBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAwLjMpO1xuICAgIHdyYXBwZXJBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC13cmFwcGVyJykpXG4gICAgICAgIC5rZXlmcmFtZXMoW1xuICAgICAgICB7IG9mZnNldDogMCwgb3BhY2l0eTogJzAuMDEnLCB0cmFuc2Zvcm06ICdzY2FsZSgxLjEpJyB9LFxuICAgICAgICB7IG9mZnNldDogMSwgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfVxuICAgIF0pO1xuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbClcbiAgICAgICAgLmVhc2luZygnZWFzZS1pbi1vdXQnKVxuICAgICAgICAuZHVyYXRpb24oMjAwKVxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xufTtcbi8qKlxuICogaU9TIEFsZXJ0IExlYXZlIEFuaW1hdGlvblxuICovXG52YXIgaW9zTGVhdmVBbmltYXRpb24gPSBmdW5jdGlvbiAoYmFzZUVsKSB7XG4gICAgdmFyIGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIGJhY2tkcm9wQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSlcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMywgMCk7XG4gICAgd3JhcHBlckFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLmFsZXJ0LXdyYXBwZXInKSlcbiAgICAgICAgLmtleWZyYW1lcyhbXG4gICAgICAgIHsgb2Zmc2V0OiAwLCBvcGFjaXR5OiAwLjk5LCB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfSxcbiAgICAgICAgeyBvZmZzZXQ6IDEsIG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDAuOSknIH1cbiAgICBdKTtcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXG4gICAgICAgIC5lYXNpbmcoJ2Vhc2UtaW4tb3V0JylcbiAgICAgICAgLmR1cmF0aW9uKDIwMClcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcbn07XG4vKipcbiAqIE1kIEFsZXJ0IEVudGVyIEFuaW1hdGlvblxuICovXG52YXIgbWRFbnRlckFuaW1hdGlvbiA9IGZ1bmN0aW9uIChiYXNlRWwpIHtcbiAgICB2YXIgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgYmFja2Ryb3BBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMC4zMik7XG4gICAgd3JhcHBlckFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLmFsZXJ0LXdyYXBwZXInKSlcbiAgICAgICAgLmtleWZyYW1lcyhbXG4gICAgICAgIHsgb2Zmc2V0OiAwLCBvcGFjaXR5OiAnMC4wMScsIHRyYW5zZm9ybTogJ3NjYWxlKDAuOSknIH0sXG4gICAgICAgIHsgb2Zmc2V0OiAxLCBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9XG4gICAgXSk7XG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxuICAgICAgICAuZWFzaW5nKCdlYXNlLWluLW91dCcpXG4gICAgICAgIC5kdXJhdGlvbigxNTApXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xuLyoqXG4gKiBNZCBBbGVydCBMZWF2ZSBBbmltYXRpb25cbiAqL1xudmFyIG1kTGVhdmVBbmltYXRpb24gPSBmdW5jdGlvbiAoYmFzZUVsKSB7XG4gICAgdmFyIGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIGJhY2tkcm9wQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSlcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMzIsIDApO1xuICAgIHdyYXBwZXJBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC13cmFwcGVyJykpXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjk5LCAwKTtcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXG4gICAgICAgIC5lYXNpbmcoJ2Vhc2UtaW4tb3V0JylcbiAgICAgICAgLmR1cmF0aW9uKDE1MClcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcbn07XG52YXIgQWxlcnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWxlcnQoaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLnByb2Nlc3NlZElucHV0cyA9IFtdO1xuICAgICAgICB0aGlzLnByb2Nlc3NlZEJ1dHRvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5wcmVzZW50ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGtleWJvYXJkIHdpbGwgYmUgYXV0b21hdGljYWxseSBkaXNtaXNzZWQgd2hlbiB0aGUgb3ZlcmxheSBpcyBwcmVzZW50ZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmtleWJvYXJkQ2xvc2UgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQXJyYXkgb2YgYnV0dG9ucyB0byBiZSBhZGRlZCB0byB0aGUgYWxlcnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFycmF5IG9mIGlucHV0IHRvIHNob3cgaW4gdGhlIGFsZXJ0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbnB1dHMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGFsZXJ0IHdpbGwgYmUgZGlzbWlzc2VkIHdoZW4gdGhlIGJhY2tkcm9wIGlzIGNsaWNrZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJhY2tkcm9wRGlzbWlzcyA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBhbGVydCB3aWxsIGJlIHRyYW5zbHVjZW50LlxuICAgICAgICAgKiBPbmx5IGFwcGxpZXMgd2hlbiB0aGUgbW9kZSBpcyBgXCJpb3NcImAgYW5kIHRoZSBkZXZpY2Ugc3VwcG9ydHNcbiAgICAgICAgICogW2BiYWNrZHJvcC1maWx0ZXJgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2Ryb3AtZmlsdGVyI0Jyb3dzZXJfY29tcGF0aWJpbGl0eSkuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyYW5zbHVjZW50ID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBhbGVydCB3aWxsIGFuaW1hdGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFuaW1hdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkJhY2tkcm9wVGFwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuZGlzbWlzcyh1bmRlZmluZWQsIEJBQ0tEUk9QKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaENhbmNlbEhhbmRsZXIgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciByb2xlID0gZXYuZGV0YWlsLnJvbGU7XG4gICAgICAgICAgICBpZiAoaXNDYW5jZWwocm9sZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FuY2VsQnV0dG9uID0gX3RoaXMucHJvY2Vzc2VkQnV0dG9ucy5maW5kKGZ1bmN0aW9uIChiKSB7IHJldHVybiBiLnJvbGUgPT09ICdjYW5jZWwnOyB9KTtcbiAgICAgICAgICAgICAgICBfdGhpcy5jYWxsQnV0dG9uSGFuZGxlcihjYW5jZWxCdXR0b24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBwcmVwYXJlT3ZlcmxheSh0aGlzLmVsKTtcbiAgICAgICAgdGhpcy5kaWRQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25BbGVydERpZFByZXNlbnRcIiwgNyk7XG4gICAgICAgIHRoaXMud2lsbFByZXNlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkFsZXJ0V2lsbFByZXNlbnRcIiwgNyk7XG4gICAgICAgIHRoaXMud2lsbERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkFsZXJ0V2lsbERpc21pc3NcIiwgNyk7XG4gICAgICAgIHRoaXMuZGlkRGlzbWlzcyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQWxlcnREaWREaXNtaXNzXCIsIDcpO1xuICAgIH1cbiAgICBBbGVydC5wcm90b3R5cGUuYnV0dG9uc0NoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBidXR0b25zID0gdGhpcy5idXR0b25zO1xuICAgICAgICB0aGlzLnByb2Nlc3NlZEJ1dHRvbnMgPSBidXR0b25zLm1hcChmdW5jdGlvbiAoYnRuKSB7XG4gICAgICAgICAgICByZXR1cm4gKHR5cGVvZiBidG4gPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgID8geyB0ZXh0OiBidG4sIHJvbGU6IGJ0bi50b0xvd2VyQ2FzZSgpID09PSAnY2FuY2VsJyA/ICdjYW5jZWwnIDogdW5kZWZpbmVkIH1cbiAgICAgICAgICAgICAgICA6IGJ0bjtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBbGVydC5wcm90b3R5cGUuaW5wdXRzQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGlucHV0cyA9IHRoaXMuaW5wdXRzO1xuICAgICAgICAvLyBBbiBhbGVydCBjYW4gYmUgY3JlYXRlZCB3aXRoIHNldmVyYWwgZGlmZmVyZW50IGlucHV0cy4gUmFkaW9zLFxuICAgICAgICAvLyBjaGVja2JveGVzIGFuZCBpbnB1dHMgYXJlIGFsbCBhY2NlcHRlZCwgYnV0IHRoZXkgY2Fubm90IGJlIG1peGVkLlxuICAgICAgICB2YXIgaW5wdXRUeXBlcyA9IG5ldyBTZXQoaW5wdXRzLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gaS50eXBlOyB9KSk7XG4gICAgICAgIGlmIChpbnB1dFR5cGVzLmhhcygnY2hlY2tib3gnKSAmJiBpbnB1dFR5cGVzLmhhcygncmFkaW8nKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQWxlcnQgY2Fubm90IG1peCBpbnB1dCB0eXBlczogXCIgKyAoQXJyYXkuZnJvbShpbnB1dFR5cGVzLnZhbHVlcygpKS5qb2luKCcvJykpICsgXCIuIFBsZWFzZSBzZWUgYWxlcnQgZG9jcyBmb3IgbW9yZSBpbmZvLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlucHV0VHlwZSA9IGlucHV0VHlwZXMudmFsdWVzKCkubmV4dCgpLnZhbHVlO1xuICAgICAgICB0aGlzLnByb2Nlc3NlZElucHV0cyA9IGlucHV0cy5tYXAoZnVuY3Rpb24gKGksIGluZGV4KSB7IHJldHVybiAoe1xuICAgICAgICAgICAgdHlwZTogaS50eXBlIHx8ICd0ZXh0JyxcbiAgICAgICAgICAgIG5hbWU6IGkubmFtZSB8fCBcIlwiICsgaW5kZXgsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogaS5wbGFjZWhvbGRlciB8fCAnJyxcbiAgICAgICAgICAgIHZhbHVlOiBpLnZhbHVlLFxuICAgICAgICAgICAgbGFiZWw6IGkubGFiZWwsXG4gICAgICAgICAgICBjaGVja2VkOiAhIWkuY2hlY2tlZCxcbiAgICAgICAgICAgIGRpc2FibGVkOiAhIWkuZGlzYWJsZWQsXG4gICAgICAgICAgICBpZDogaS5pZCB8fCBcImFsZXJ0LWlucHV0LVwiICsgX3RoaXMub3ZlcmxheUluZGV4ICsgXCItXCIgKyBpbmRleCxcbiAgICAgICAgICAgIGhhbmRsZXI6IGkuaGFuZGxlcixcbiAgICAgICAgICAgIG1pbjogaS5taW4sXG4gICAgICAgICAgICBtYXg6IGkubWF4XG4gICAgICAgIH0pOyB9KTtcbiAgICB9O1xuICAgIEFsZXJ0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbnB1dHNDaGFuZ2VkKCk7XG4gICAgICAgIHRoaXMuYnV0dG9uc0NoYW5nZWQoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFByZXNlbnQgdGhlIGFsZXJ0IG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gY3JlYXRlZC5cbiAgICAgKi9cbiAgICBBbGVydC5wcm90b3R5cGUucHJlc2VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHByZXNlbnQodGhpcywgJ2FsZXJ0RW50ZXInLCBpb3NFbnRlckFuaW1hdGlvbiwgbWRFbnRlckFuaW1hdGlvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXNtaXNzIHRoZSBhbGVydCBvdmVybGF5IGFmdGVyIGl0IGhhcyBiZWVuIHByZXNlbnRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhIEFueSBkYXRhIHRvIGVtaXQgaW4gdGhlIGRpc21pc3MgZXZlbnRzLlxuICAgICAqIEBwYXJhbSByb2xlIFRoZSByb2xlIG9mIHRoZSBlbGVtZW50IHRoYXQgaXMgZGlzbWlzc2luZyB0aGUgYWxlcnQuXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZnVsIGluIGEgYnV0dG9uIGhhbmRsZXIgZm9yIGRldGVybWluaW5nIHdoaWNoIGJ1dHRvbiB3YXNcbiAgICAgKiBjbGlja2VkIHRvIGRpc21pc3MgdGhlIGFsZXJ0LlxuICAgICAqIFNvbWUgZXhhbXBsZXMgaW5jbHVkZTogYGBcImNhbmNlbFwiYCwgYFwiZGVzdHJ1Y3RpdmVcImAsIFwic2VsZWN0ZWRcImAsIGFuZCBgXCJiYWNrZHJvcFwiYC5cbiAgICAgKi9cbiAgICBBbGVydC5wcm90b3R5cGUuZGlzbWlzcyA9IGZ1bmN0aW9uIChkYXRhLCByb2xlKSB7XG4gICAgICAgIHJldHVybiBkaXNtaXNzKHRoaXMsIGRhdGEsIHJvbGUsICdhbGVydExlYXZlJywgaW9zTGVhdmVBbmltYXRpb24sIG1kTGVhdmVBbmltYXRpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBhbGVydCBkaWQgZGlzbWlzcy5cbiAgICAgKi9cbiAgICBBbGVydC5wcm90b3R5cGUub25EaWREaXNtaXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvbkFsZXJ0RGlkRGlzbWlzcycpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBhbGVydCB3aWxsIGRpc21pc3MuXG4gICAgICovXG4gICAgQWxlcnQucHJvdG90eXBlLm9uV2lsbERpc21pc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBldmVudE1ldGhvZCh0aGlzLmVsLCAnaW9uQWxlcnRXaWxsRGlzbWlzcycpO1xuICAgIH07XG4gICAgQWxlcnQucHJvdG90eXBlLnJiQ2xpY2sgPSBmdW5jdGlvbiAoc2VsZWN0ZWRJbnB1dCkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5wcm9jZXNzZWRJbnB1dHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgaW5wdXQgPSBfYVtfaV07XG4gICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gaW5wdXQgPT09IHNlbGVjdGVkSW5wdXQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmVJZCA9IHNlbGVjdGVkSW5wdXQuaWQ7XG4gICAgICAgIHNhZmVDYWxsKHNlbGVjdGVkSW5wdXQuaGFuZGxlciwgc2VsZWN0ZWRJbnB1dCk7XG4gICAgICAgIHRoaXMuZWwuZm9yY2VVcGRhdGUoKTtcbiAgICB9O1xuICAgIEFsZXJ0LnByb3RvdHlwZS5jYkNsaWNrID0gZnVuY3Rpb24gKHNlbGVjdGVkSW5wdXQpIHtcbiAgICAgICAgc2VsZWN0ZWRJbnB1dC5jaGVja2VkID0gIXNlbGVjdGVkSW5wdXQuY2hlY2tlZDtcbiAgICAgICAgc2FmZUNhbGwoc2VsZWN0ZWRJbnB1dC5oYW5kbGVyLCBzZWxlY3RlZElucHV0KTtcbiAgICAgICAgdGhpcy5lbC5mb3JjZVVwZGF0ZSgpO1xuICAgIH07XG4gICAgQWxlcnQucHJvdG90eXBlLmJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgICAgICB2YXIgcm9sZSA9IGJ1dHRvbi5yb2xlO1xuICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy5nZXRWYWx1ZXMoKTtcbiAgICAgICAgaWYgKGlzQ2FuY2VsKHJvbGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXNtaXNzKHsgdmFsdWVzOiB2YWx1ZXMgfSwgcm9sZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJldHVybkRhdGEgPSB0aGlzLmNhbGxCdXR0b25IYW5kbGVyKGJ1dHRvbiwgdmFsdWVzKTtcbiAgICAgICAgaWYgKHJldHVybkRhdGEgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXNtaXNzKE9iamVjdC5hc3NpZ24oeyB2YWx1ZXM6IHZhbHVlcyB9LCByZXR1cm5EYXRhKSwgYnV0dG9uLnJvbGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgIH07XG4gICAgQWxlcnQucHJvdG90eXBlLmNhbGxCdXR0b25IYW5kbGVyID0gZnVuY3Rpb24gKGJ1dHRvbiwgZGF0YSkge1xuICAgICAgICBpZiAoYnV0dG9uICYmIGJ1dHRvbi5oYW5kbGVyKSB7XG4gICAgICAgICAgICAvLyBhIGhhbmRsZXIgaGFzIGJlZW4gcHJvdmlkZWQsIGV4ZWN1dGUgaXRcbiAgICAgICAgICAgIC8vIHBhc3MgdGhlIGhhbmRsZXIgdGhlIHZhbHVlcyBmcm9tIHRoZSBpbnB1dHNcbiAgICAgICAgICAgIHZhciByZXR1cm5EYXRhID0gc2FmZUNhbGwoYnV0dG9uLmhhbmRsZXIsIGRhdGEpO1xuICAgICAgICAgICAgaWYgKHJldHVybkRhdGEgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgaGFuZGxlciBpcyBmYWxzZSB0aGVuIGRvIG5vdCBkaXNtaXNzXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXR1cm5EYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5EYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9O1xuICAgIEFsZXJ0LnByb3RvdHlwZS5nZXRWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2Nlc3NlZElucHV0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgYW4gYWxlcnQgd2l0aG91dCBhbnkgb3B0aW9ucy9pbnB1dHMgYXQgYWxsXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlucHV0VHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgLy8gdGhpcyBpcyBhbiBhbGVydCB3aXRoIHJhZGlvIGJ1dHRvbnMgKHNpbmdsZSB2YWx1ZSBzZWxlY3QpXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhlIG9uZSB2YWx1ZSB3aGljaCBpcyBjaGVja2VkLCBvdGhlcndpc2UgdW5kZWZpbmVkXG4gICAgICAgICAgICB2YXIgY2hlY2tlZElucHV0ID0gdGhpcy5wcm9jZXNzZWRJbnB1dHMuZmluZChmdW5jdGlvbiAoaSkgeyByZXR1cm4gISFpLmNoZWNrZWQ7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrZWRJbnB1dCA/IGNoZWNrZWRJbnB1dC52YWx1ZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pbnB1dFR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgYW4gYWxlcnQgd2l0aCBjaGVja2JveGVzIChtdWx0aXBsZSB2YWx1ZSBzZWxlY3QpXG4gICAgICAgICAgICAvLyByZXR1cm4gYW4gYXJyYXkgb2YgYWxsIHRoZSBjaGVja2VkIHZhbHVlc1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc2VkSW5wdXRzLmZpbHRlcihmdW5jdGlvbiAoaSkgeyByZXR1cm4gaS5jaGVja2VkOyB9KS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkudmFsdWU7IH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMgaXMgYW4gYWxlcnQgd2l0aCB0ZXh0IGlucHV0c1xuICAgICAgICAvLyByZXR1cm4gYW4gb2JqZWN0IG9mIGFsbCB0aGUgdmFsdWVzIHdpdGggdGhlIGlucHV0IG5hbWUgYXMgdGhlIGtleVxuICAgICAgICB2YXIgdmFsdWVzID0ge307XG4gICAgICAgIHRoaXMucHJvY2Vzc2VkSW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhbHVlc1tpLm5hbWVdID0gaS52YWx1ZSB8fCAnJztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfTtcbiAgICBBbGVydC5wcm90b3R5cGUucmVuZGVyQWxlcnRJbnB1dHMgPSBmdW5jdGlvbiAobGFiZWxsZWRCeSkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuaW5wdXRUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdjaGVja2JveCc6IHJldHVybiB0aGlzLnJlbmRlckNoZWNrYm94KGxhYmVsbGVkQnkpO1xuICAgICAgICAgICAgY2FzZSAncmFkaW8nOiByZXR1cm4gdGhpcy5yZW5kZXJSYWRpbyhsYWJlbGxlZEJ5KTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiB0aGlzLnJlbmRlcklucHV0KGxhYmVsbGVkQnkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBbGVydC5wcm90b3R5cGUucmVuZGVyQ2hlY2tib3ggPSBmdW5jdGlvbiAobGFiZWxsZWRieSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgaW5wdXRzID0gdGhpcy5wcm9jZXNzZWRJbnB1dHM7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgaWYgKGlucHV0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBcImFsZXJ0LWNoZWNrYm94LWdyb3VwXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGxhYmVsbGVkYnkgfSwgaW5wdXRzLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gKGgoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5jYkNsaWNrKGkpOyB9LCBcImFyaWEtY2hlY2tlZFwiOiBcIlwiICsgaS5jaGVja2VkLCBpZDogaS5pZCwgZGlzYWJsZWQ6IGkuZGlzYWJsZWQsIHRhYkluZGV4OiAwLCByb2xlOiBcImNoZWNrYm94XCIsIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgJ2FsZXJ0LXRhcHBhYmxlJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnYWxlcnQtY2hlY2tib3gnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdhbGVydC1jaGVja2JveC1idXR0b24nOiB0cnVlLFxuICAgICAgICAgICAgICAgICdpb24tZm9jdXNhYmxlJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnYWxlcnQtY2hlY2tib3gtYnV0dG9uLWRpc2FibGVkJzogaS5kaXNhYmxlZCB8fCBmYWxzZVxuICAgICAgICAgICAgfSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWxlcnQtYnV0dG9uLWlubmVyXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImFsZXJ0LWNoZWNrYm94LWljb25cIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWxlcnQtY2hlY2tib3gtaW5uZXJcIiB9KSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbGVydC1jaGVja2JveC1sYWJlbFwiIH0sIGkubGFiZWwpKSwgbW9kZSA9PT0gJ21kJyAmJiBoKFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwgbnVsbCkpKTsgfSkpKTtcbiAgICB9O1xuICAgIEFsZXJ0LnByb3RvdHlwZS5yZW5kZXJSYWRpbyA9IGZ1bmN0aW9uIChsYWJlbGxlZGJ5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBpbnB1dHMgPSB0aGlzLnByb2Nlc3NlZElucHV0cztcbiAgICAgICAgaWYgKGlucHV0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBcImFsZXJ0LXJhZGlvLWdyb3VwXCIsIHJvbGU6IFwicmFkaW9ncm91cFwiLCBcImFyaWEtbGFiZWxsZWRieVwiOiBsYWJlbGxlZGJ5LCBcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiOiB0aGlzLmFjdGl2ZUlkIH0sIGlucHV0cy5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIChoKFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucmJDbGljayhpKTsgfSwgXCJhcmlhLWNoZWNrZWRcIjogXCJcIiArIGkuY2hlY2tlZCwgZGlzYWJsZWQ6IGkuZGlzYWJsZWQsIGlkOiBpLmlkLCB0YWJJbmRleDogMCwgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAnYWxlcnQtcmFkaW8tYnV0dG9uJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnYWxlcnQtdGFwcGFibGUnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdhbGVydC1yYWRpbyc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ2lvbi1mb2N1c2FibGUnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdhbGVydC1yYWRpby1idXR0b24tZGlzYWJsZWQnOiBpLmRpc2FibGVkIHx8IGZhbHNlXG4gICAgICAgICAgICB9LCByb2xlOiBcInJhZGlvXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImFsZXJ0LWJ1dHRvbi1pbm5lclwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbGVydC1yYWRpby1pY29uXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImFsZXJ0LXJhZGlvLWlubmVyXCIgfSkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWxlcnQtcmFkaW8tbGFiZWxcIiB9LCBpLmxhYmVsKSkpKTsgfSkpKTtcbiAgICB9O1xuICAgIEFsZXJ0LnByb3RvdHlwZS5yZW5kZXJJbnB1dCA9IGZ1bmN0aW9uIChsYWJlbGxlZGJ5KSB7XG4gICAgICAgIHZhciBpbnB1dHMgPSB0aGlzLnByb2Nlc3NlZElucHV0cztcbiAgICAgICAgaWYgKGlucHV0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBcImFsZXJ0LWlucHV0LWdyb3VwXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGxhYmVsbGVkYnkgfSwgaW5wdXRzLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbGVydC1pbnB1dC13cmFwcGVyXCIgfSwgaChcImlucHV0XCIsIHsgcGxhY2Vob2xkZXI6IGkucGxhY2Vob2xkZXIsIHZhbHVlOiBpLnZhbHVlLCB0eXBlOiBpLnR5cGUsIG1pbjogaS5taW4sIG1heDogaS5tYXgsIG9uSW5wdXQ6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBpLnZhbHVlID0gZS50YXJnZXQudmFsdWU7IH0sIGlkOiBpLmlkLCBkaXNhYmxlZDogaS5kaXNhYmxlZCwgdGFiSW5kZXg6IDAsIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgJ2FsZXJ0LWlucHV0JzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnYWxlcnQtaW5wdXQtZGlzYWJsZWQnOiBpLmRpc2FibGVkIHx8IGZhbHNlXG4gICAgICAgICAgICB9IH0pKSk7IH0pKSk7XG4gICAgfTtcbiAgICBBbGVydC5wcm90b3R5cGUucmVuZGVyQWxlcnRCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgYnV0dG9ucyA9IHRoaXMucHJvY2Vzc2VkQnV0dG9ucztcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICB2YXIgYWxlcnRCdXR0b25Hcm91cENsYXNzID0ge1xuICAgICAgICAgICAgJ2FsZXJ0LWJ1dHRvbi1ncm91cCc6IHRydWUsXG4gICAgICAgICAgICAnYWxlcnQtYnV0dG9uLWdyb3VwLXZlcnRpY2FsJzogYnV0dG9ucy5sZW5ndGggPiAyXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBhbGVydEJ1dHRvbkdyb3VwQ2xhc3MgfSwgYnV0dG9ucy5tYXAoZnVuY3Rpb24gKGJ1dHRvbikgeyByZXR1cm4gaChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIGNsYXNzOiBidXR0b25DbGFzcyhidXR0b24pLCB0YWJJbmRleDogMCwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYnV0dG9uQ2xpY2soYnV0dG9uKTsgfSB9LCBoKFwic3BhblwiLCB7IGNsYXNzOiBcImFsZXJ0LWJ1dHRvbi1pbm5lclwiIH0sIGJ1dHRvbi50ZXh0KSwgbW9kZSA9PT0gJ21kJyAmJiBoKFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwgbnVsbCkpOyB9KSkpO1xuICAgIH07XG4gICAgQWxlcnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLCBvdmVybGF5SW5kZXggPSBfYi5vdmVybGF5SW5kZXgsIGhlYWRlciA9IF9iLmhlYWRlciwgc3ViSGVhZGVyID0gX2Iuc3ViSGVhZGVyO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHZhciBoZHJJZCA9IFwiYWxlcnQtXCIgKyBvdmVybGF5SW5kZXggKyBcIi1oZHJcIjtcbiAgICAgICAgdmFyIHN1YkhkcklkID0gXCJhbGVydC1cIiArIG92ZXJsYXlJbmRleCArIFwiLXN1Yi1oZHJcIjtcbiAgICAgICAgdmFyIG1zZ0lkID0gXCJhbGVydC1cIiArIG92ZXJsYXlJbmRleCArIFwiLW1zZ1wiO1xuICAgICAgICB2YXIgbGFiZWxsZWRCeUlkO1xuICAgICAgICBpZiAoaGVhZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxhYmVsbGVkQnlJZCA9IGhkcklkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN1YkhlYWRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsYWJlbGxlZEJ5SWQgPSBzdWJIZHJJZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyByb2xlOiBcImRpYWxvZ1wiLCBcImFyaWEtbW9kYWxcIjogXCJ0cnVlXCIsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgekluZGV4OiBcIlwiICsgKDIwMDAwICsgb3ZlcmxheUluZGV4KSxcbiAgICAgICAgICAgIH0sIGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdldENsYXNzTWFwKHRoaXMuY3NzQ2xhc3MpKSwgKF9hID0ge30sIF9hW21vZGVdID0gdHJ1ZSwgX2FbJ2FsZXJ0LXRyYW5zbHVjZW50J10gPSB0aGlzLnRyYW5zbHVjZW50LCBfYSkpLCBvbklvbkFsZXJ0V2lsbERpc21pc3M6IHRoaXMuZGlzcGF0Y2hDYW5jZWxIYW5kbGVyLCBvbklvbkJhY2tkcm9wVGFwOiB0aGlzLm9uQmFja2Ryb3BUYXAgfSwgaChcImlvbi1iYWNrZHJvcFwiLCB7IHRhcHBhYmxlOiB0aGlzLmJhY2tkcm9wRGlzbWlzcyB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImFsZXJ0LXdyYXBwZXJcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWxlcnQtaGVhZFwiIH0sIGhlYWRlciAmJiBoKFwiaDJcIiwgeyBpZDogaGRySWQsIGNsYXNzOiBcImFsZXJ0LXRpdGxlXCIgfSwgaGVhZGVyKSwgc3ViSGVhZGVyICYmIGgoXCJoMlwiLCB7IGlkOiBzdWJIZHJJZCwgY2xhc3M6IFwiYWxlcnQtc3ViLXRpdGxlXCIgfSwgc3ViSGVhZGVyKSksIGgoXCJkaXZcIiwgeyBpZDogbXNnSWQsIGNsYXNzOiBcImFsZXJ0LW1lc3NhZ2VcIiwgaW5uZXJIVE1MOiBzYW5pdGl6ZURPTVN0cmluZyh0aGlzLm1lc3NhZ2UpIH0pLCB0aGlzLnJlbmRlckFsZXJ0SW5wdXRzKGxhYmVsbGVkQnlJZCksIHRoaXMucmVuZGVyQWxlcnRCdXR0b25zKCkpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWxlcnQucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWxlcnQsIFwid2F0Y2hlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IFtcImJ1dHRvbnNDaGFuZ2VkXCJdLFxuICAgICAgICAgICAgICAgIFwiaW5wdXRzXCI6IFtcImlucHV0c0NoYW5nZWRcIl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBbGVydCwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCIuc2MtaW9uLWFsZXJ0LWlvcy1oey0tbWluLXdpZHRoOjI1MHB4Oy0td2lkdGg6YXV0bzstLW1pbi1oZWlnaHQ6YXV0bzstLWhlaWdodDphdXRvOy0tbWF4LWhlaWdodDo5MCU7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246Zml4ZWQ7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTtjb250YWluOnN0cmljdDstbXMtdG91Y2gtYWN0aW9uOm5vbmU7dG91Y2gtYWN0aW9uOm5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6MTAwMX0ub3ZlcmxheS1oaWRkZW4uc2MtaW9uLWFsZXJ0LWlvcy1oe2Rpc3BsYXk6bm9uZX0uYWxlcnQtdG9wLnNjLWlvbi1hbGVydC1pb3MtaHtwYWRkaW5nLXRvcDo1MHB4Oy1tcy1mbGV4LWFsaWduOnN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9LmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvc3tkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt3aWR0aDp2YXIoLS13aWR0aCk7bWluLXdpZHRoOnZhcigtLW1pbi13aWR0aCk7bWF4LXdpZHRoOnZhcigtLW1heC13aWR0aCk7aGVpZ2h0OnZhcigtLWhlaWdodCk7bWluLWhlaWdodDp2YXIoLS1taW4taGVpZ2h0KTttYXgtaGVpZ2h0OnZhcigtLW1heC1oZWlnaHQpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29udGFpbjpjb250ZW50O29wYWNpdHk6MDt6LWluZGV4OjEwfS5hbGVydC10aXRsZS5zYy1pb24tYWxlcnQtaW9ze21hcmdpbi10b3A6MH0uYWxlcnQtc3ViLXRpdGxlLnNjLWlvbi1hbGVydC1pb3MsIC5hbGVydC10aXRsZS5zYy1pb24tYWxlcnQtaW9ze21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjB9LmFsZXJ0LXN1Yi10aXRsZS5zYy1pb24tYWxlcnQtaW9ze21hcmdpbi10b3A6NXB4O2ZvbnQtd2VpZ2h0OjQwMH0uYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtaW9zey13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDtvdmVyZmxvdy15OmF1dG87b3ZlcnNjcm9sbC1iZWhhdmlvci15OmNvbnRhaW59LmFsZXJ0LWNoZWNrYm94LWdyb3VwLnNjLWlvbi1hbGVydC1pb3M6Oi13ZWJraXQtc2Nyb2xsYmFyLCAuYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtaW9zOjotd2Via2l0LXNjcm9sbGJhciwgLmFsZXJ0LXJhZGlvLWdyb3VwLnNjLWlvbi1hbGVydC1pb3M6Oi13ZWJraXQtc2Nyb2xsYmFye2Rpc3BsYXk6bm9uZX0uYWxlcnQtaW5wdXQuc2MtaW9uLWFsZXJ0LWlvc3twYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MTBweDtwYWRkaW5nLWJvdHRvbToxMHB4O3dpZHRoOjEwMCU7Ym9yZGVyOjA7YmFja2dyb3VuZDppbmhlcml0O2ZvbnQ6aW5oZXJpdDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9ze2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93O3dpZHRoOjEwMCV9LmFsZXJ0LWJ1dHRvbi1ncm91cC12ZXJ0aWNhbC5zYy1pb24tYWxlcnQtaW9zey1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LXdyYXA6bm93cmFwO2ZsZXgtd3JhcDpub3dyYXB9LmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9ze2Rpc3BsYXk6YmxvY2s7Ym9yZGVyOjA7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MjBweDt6LWluZGV4OjB9LmFsZXJ0LWJ1dHRvbi5pb24tZm9jdXNlZC5zYy1pb24tYWxlcnQtaW9zLCAuYWxlcnQtdGFwcGFibGUuaW9uLWZvY3VzZWQuc2MtaW9uLWFsZXJ0LWlvc3tiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCwjZTZlNmU2KX0uYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3N7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpyb3cgbm93cmFwO2ZsZXgtZmxvdzpyb3cgbm93cmFwOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uYWxlcnQtY2hlY2tib3gtYnV0dG9uLWRpc2FibGVkLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtaW9zLCAuYWxlcnQtaW5wdXQtZGlzYWJsZWQuc2MtaW9uLWFsZXJ0LWlvcywgLmFsZXJ0LXJhZGlvLWJ1dHRvbi1kaXNhYmxlZC5zYy1pb24tYWxlcnQtaW9zIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvc3tjdXJzb3I6ZGVmYXVsdDtvcGFjaXR5Oi41O3BvaW50ZXItZXZlbnRzOm5vbmV9LmFsZXJ0LXRhcHBhYmxlLnNjLWlvbi1hbGVydC1pb3N7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7d2lkdGg6MTAwJTtib3JkZXI6MDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2ZvbnQtc2l6ZTppbmhlcml0O2xpbmUtaGVpZ2h0Om5vcm1hbDt0ZXh0LWFsaWduOnN0YXJ0Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTtjb250YWluOnN0cmljdH0uYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3MsIC5hbGVydC1jaGVja2JveC5zYy1pb24tYWxlcnQtaW9zLCAuYWxlcnQtaW5wdXQuc2MtaW9uLWFsZXJ0LWlvcywgLmFsZXJ0LXJhZGlvLnNjLWlvbi1hbGVydC1pb3N7b3V0bGluZTpub25lfS5hbGVydC1jaGVja2JveC1pY29uLnNjLWlvbi1hbGVydC1pb3MsIC5hbGVydC1jaGVja2JveC1pbm5lci5zYy1pb24tYWxlcnQtaW9zLCAuYWxlcnQtcmFkaW8taWNvbi5zYy1pb24tYWxlcnQtaW9zey13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uc2MtaW9uLWFsZXJ0LWlvcy1oey0tYmFja2dyb3VuZDp2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCwjZjlmOWY5KSk7LS1tYXgtd2lkdGg6MjcwcHg7Zm9udC1zaXplOjE0cHh9LmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvc3tib3JkZXItcmFkaXVzOjEzcHg7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO292ZXJmbG93OmhpZGRlbn1cXEBzdXBwb3J0cyAoKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOmJsdXIoMCkpIG9yIChiYWNrZHJvcC1maWx0ZXI6Ymx1cigwKSkpey5hbGVydC10cmFuc2x1Y2VudC5zYy1pb24tYWxlcnQtaW9zLWggLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvc3tiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLDI1NSwyNTUsMjU1KSwuOSk7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtiYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KX19LmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvc3twYWRkaW5nLWxlZnQ6MTZweDtwYWRkaW5nLXJpZ2h0OjE2cHg7cGFkZGluZy10b3A6MTJweDtwYWRkaW5nLWJvdHRvbTo3cHg7dGV4dC1hbGlnbjpjZW50ZXJ9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3N7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjE2cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTZweDstd2Via2l0LXBhZGRpbmctZW5kOjE2cHg7cGFkZGluZy1pbmxpbmUtZW5kOjE2cHh9fS5hbGVydC10aXRsZS5zYy1pb24tYWxlcnQtaW9ze21hcmdpbi10b3A6OHB4O2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApO2ZvbnQtc2l6ZToxN3B4O2ZvbnQtd2VpZ2h0OjYwMH0uYWxlcnQtc3ViLXRpdGxlLnNjLWlvbi1hbGVydC1pb3N7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCM2NjYpO2ZvbnQtc2l6ZToxNHB4fS5hbGVydC1pbnB1dC1ncm91cC5zYy1pb24tYWxlcnQtaW9zLCAuYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtaW9ze3BhZGRpbmctbGVmdDoxNnB4O3BhZGRpbmctcmlnaHQ6MTZweDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjIxcHg7Y29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsIzAwMCk7Zm9udC1zaXplOjEzcHg7dGV4dC1hbGlnbjpjZW50ZXJ9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5hbGVydC1pbnB1dC1ncm91cC5zYy1pb24tYWxlcnQtaW9zLCAuYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtaW9ze3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDoxNnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxNnB4O3BhZGRpbmctaW5saW5lLWVuZDoxNnB4fX0uYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtaW9ze21heC1oZWlnaHQ6MjQwcHh9LmFsZXJ0LW1lc3NhZ2Uuc2MtaW9uLWFsZXJ0LWlvczplbXB0eXtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbToxMnB4fS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtaW9ze2JvcmRlci1yYWRpdXM6NHB4O21hcmdpbi10b3A6MTBweDtwYWRkaW5nLWxlZnQ6NnB4O3BhZGRpbmctcmlnaHQ6NnB4O3BhZGRpbmctdG9wOjZweDtwYWRkaW5nLWJvdHRvbTo2cHg7Ym9yZGVyOi41NXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwjYmZiZmJmKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1pb3N7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjZweDtwYWRkaW5nLWlubGluZS1zdGFydDo2cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo2cHg7cGFkZGluZy1pbmxpbmUtZW5kOjZweH19LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1pb3M6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0taW9uLXBsYWNlaG9sZGVyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTQwMCwjOTk5KSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0fS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtaW9zOjotbW96LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLWlvbi1wbGFjZWhvbGRlci1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC00MDAsIzk5OSkpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdH0uYWxlcnQtaW5wdXQuc2MtaW9uLWFsZXJ0LWlvczotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0taW9uLXBsYWNlaG9sZGVyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTQwMCwjOTk5KSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0fS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtaW9zOjotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0taW9uLXBsYWNlaG9sZGVyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTQwMCwjOTk5KSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0fS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtaW9zOjpwbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1pb24tcGxhY2Vob2xkZXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDAwLCM5OTkpKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXR9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1pb3M6Oi1tcy1jbGVhcntkaXNwbGF5Om5vbmV9LmFsZXJ0LWNoZWNrYm94LWdyb3VwLnNjLWlvbi1hbGVydC1pb3MsIC5hbGVydC1yYWRpby1ncm91cC5zYy1pb24tYWxlcnQtaW9zey1tcy1zY3JvbGwtY2hhaW5pbmc6bm9uZTtvdmVyc2Nyb2xsLWJlaGF2aW9yOmNvbnRhaW47bWF4LWhlaWdodDoyNDBweDtib3JkZXItdG9wOi41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwuMik7b3ZlcmZsb3cteTphdXRvOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNofS5hbGVydC10YXBwYWJsZS5zYy1pb24tYWxlcnQtaW9ze2hlaWdodDo0NHB4fS5hbGVydC1yYWRpby1sYWJlbC5zYy1pb24tYWxlcnQtaW9ze3BhZGRpbmctbGVmdDoxM3B4O3BhZGRpbmctcmlnaHQ6MTNweDtwYWRkaW5nLXRvcDoxM3B4O3BhZGRpbmctYm90dG9tOjEzcHg7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtb3JkZXI6MDtvcmRlcjowO2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbn1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmFsZXJ0LXJhZGlvLWxhYmVsLnNjLWlvbi1hbGVydC1pb3N7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjEzcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTNweDstd2Via2l0LXBhZGRpbmctZW5kOjEzcHg7cGFkZGluZy1pbmxpbmUtZW5kOjEzcHh9fVthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LWlvc3tjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKX0uYWxlcnQtcmFkaW8taWNvbi5zYy1pb24tYWxlcnQtaW9ze3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LW9yZGVyOjE7b3JkZXI6MTttaW4td2lkdGg6MzBweH1bYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LXJhZGlvLWlubmVyLnNjLWlvbi1hbGVydC1pb3N7bGVmdDo3cHg7dG9wOi03cHg7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6NnB4O2hlaWdodDoxMnB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7Ym9yZGVyLXdpZHRoOjJweDtib3JkZXItdG9wLXdpZHRoOjA7Ym9yZGVyLWxlZnQtd2lkdGg6MDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpfVtkaXI9cnRsXS5zYy1pb24tYWxlcnQtaW9zLWggW2FyaWEtY2hlY2tlZD10cnVlXS5zYy1pb24tYWxlcnQtaW9zIC5hbGVydC1yYWRpby1pbm5lci5zYy1pb24tYWxlcnQtaW9zLCBbZGlyPXJ0bF0gLnNjLWlvbi1hbGVydC1pb3MtaCBbYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LXJhZGlvLWlubmVyLnNjLWlvbi1hbGVydC1pb3MsIFtkaXI9cnRsXS5zYy1pb24tYWxlcnQtaW9zIFthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtcmFkaW8taW5uZXIuc2MtaW9uLWFsZXJ0LWlvc3tsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjdweH0uYWxlcnQtY2hlY2tib3gtbGFiZWwuc2MtaW9uLWFsZXJ0LWlvc3twYWRkaW5nLWxlZnQ6MTNweDtwYWRkaW5nLXJpZ2h0OjEzcHg7cGFkZGluZy10b3A6MTNweDtwYWRkaW5nLWJvdHRvbToxM3B4Oy1tcy1mbGV4OjE7ZmxleDoxO2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbn1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmFsZXJ0LWNoZWNrYm94LWxhYmVsLnNjLWlvbi1hbGVydC1pb3N7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjEzcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTNweDstd2Via2l0LXBhZGRpbmctZW5kOjEzcHg7cGFkZGluZy1pbmxpbmUtZW5kOjEzcHh9fS5hbGVydC1jaGVja2JveC1pY29uLnNjLWlvbi1hbGVydC1pb3N7Ym9yZGVyLXJhZGl1czo1MCU7bWFyZ2luLWxlZnQ6MTZweDttYXJnaW4tcmlnaHQ6NnB4O21hcmdpbi10b3A6MTBweDttYXJnaW4tYm90dG9tOjEwcHg7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0taW9uLWl0ZW0tYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1ib3JkZXItY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCNjOGM3Y2MpKSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpKTtjb250YWluOnN0cmljdH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmFsZXJ0LWNoZWNrYm94LWljb24uc2MtaW9uLWFsZXJ0LWlvc3ttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MTZweDttYXJnaW4taW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjZweDttYXJnaW4taW5saW5lLWVuZDo2cHh9fVthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtY2hlY2tib3gtaWNvbi5zYy1pb24tYWxlcnQtaW9ze2JvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpfVthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtY2hlY2tib3gtaW5uZXIuc2MtaW9uLWFsZXJ0LWlvc3tsZWZ0OjlweDt0b3A6NHB4O3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjVweDtoZWlnaHQ6MTJweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXRvcC13aWR0aDowO2JvcmRlci1sZWZ0LXdpZHRoOjA7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKX1bZGlyPXJ0bF0uc2MtaW9uLWFsZXJ0LWlvcy1oIFthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtY2hlY2tib3gtaW5uZXIuc2MtaW9uLWFsZXJ0LWlvcywgW2Rpcj1ydGxdIC5zYy1pb24tYWxlcnQtaW9zLWggW2FyaWEtY2hlY2tlZD10cnVlXS5zYy1pb24tYWxlcnQtaW9zIC5hbGVydC1jaGVja2JveC1pbm5lci5zYy1pb24tYWxlcnQtaW9zLCBbZGlyPXJ0bF0uc2MtaW9uLWFsZXJ0LWlvcyBbYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LWNoZWNrYm94LWlubmVyLnNjLWlvbi1hbGVydC1pb3N7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDo5cHh9LmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9ze21hcmdpbi1yaWdodDotLjU1cHg7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3N7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLWVuZDotLjU1cHg7bWFyZ2luLWlubGluZS1lbmQ6LS41NXB4fX0uYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3N7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO2JvcmRlci1yYWRpdXM6MDstbXMtZmxleDoxIDEgYXV0bztmbGV4OjEgMSBhdXRvO21pbi13aWR0aDo1MCU7aGVpZ2h0OjQ0cHg7Ym9yZGVyLXRvcDouNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjIpO2JvcmRlci1yaWdodDouNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjIpO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZik7Zm9udC1zaXplOjE3cHg7b3ZlcmZsb3c6aGlkZGVufVtkaXI9cnRsXS5zYy1pb24tYWxlcnQtaW9zLWggLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zOmZpcnN0LWNoaWxkLCBbZGlyPXJ0bF0gLnNjLWlvbi1hbGVydC1pb3MtaCAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3M6Zmlyc3QtY2hpbGQsIFtkaXI9cnRsXS5zYy1pb24tYWxlcnQtaW9zIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvczpmaXJzdC1jaGlsZHtib3JkZXItcmlnaHQ6MH0uYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3M6bGFzdC1jaGlsZHtib3JkZXItcmlnaHQ6MDtmb250LXdlaWdodDo3MDB9W2Rpcj1ydGxdLnNjLWlvbi1hbGVydC1pb3MtaCAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3M6bGFzdC1jaGlsZCwgW2Rpcj1ydGxdIC5zYy1pb24tYWxlcnQtaW9zLWggLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zOmxhc3QtY2hpbGQsIFtkaXI9cnRsXS5zYy1pb24tYWxlcnQtaW9zIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvczpsYXN0LWNoaWxke2JvcmRlci1yaWdodDouNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjIpfS5hbGVydC1idXR0b24uYWN0aXZhdGVkLnNjLWlvbi1hbGVydC1pb3N7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjEpfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQWxlcnQ7XG59KCkpO1xudmFyIGJ1dHRvbkNsYXNzID0gZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgJ2FsZXJ0LWJ1dHRvbic6IHRydWUsICdpb24tZm9jdXNhYmxlJzogdHJ1ZSwgJ2lvbi1hY3RpdmF0YWJsZSc6IHRydWUgfSwgZ2V0Q2xhc3NNYXAoYnV0dG9uLmNzc0NsYXNzKSk7XG59O1xuZXhwb3J0IHsgQWxlcnQgYXMgaW9uX2FsZXJ0IH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG52YXIgaG9zdENvbnRleHQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGVsKSB7XG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xufTtcbi8qKlxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxuICovXG52YXIgY3JlYXRlQ29sb3JDbGFzc2VzID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IChfYSA9IHtcbiAgICAgICAgICAgICdpb24tY29sb3InOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIF9hW1wiaW9uLWNvbG9yLVwiICsgY29sb3JdID0gdHJ1ZSxcbiAgICAgICAgX2EpIDogdW5kZWZpbmVkO1xufTtcbnZhciBnZXRDbGFzc0xpc3QgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgIHJldHVybiBhcnJheVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPSBudWxsOyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50cmltKCk7IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSAnJzsgfSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbn07XG52YXIgZ2V0Q2xhc3NNYXAgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gbWFwW2NdID0gdHJ1ZTsgfSk7XG4gICAgcmV0dXJuIG1hcDtcbn07XG52YXIgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XG52YXIgb3BlblVSTCA9IGZ1bmN0aW9uICh1cmwsIGV2LCBkaXJlY3Rpb24pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvdXRlcjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgICAgICAgaWYgKHJvdXRlcikge1xuICAgICAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbildO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=