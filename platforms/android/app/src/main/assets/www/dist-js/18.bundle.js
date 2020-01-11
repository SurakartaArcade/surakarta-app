(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

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

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-alert-md.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-alert-md.entry.js ***!
  \*********************************************************************/
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
        get: function () { return ".sc-ion-alert-md-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-md-h{display:none}.alert-top.sc-ion-alert-md-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-md{margin-top:0}.alert-sub-title.sc-ion-alert-md, .alert-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-md{margin-top:5px;font-weight:400}.alert-message.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-md::-webkit-scrollbar, .alert-message.sc-ion-alert-md::-webkit-scrollbar, .alert-radio-group.sc-ion-alert-md::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-md{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-md{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-md{margin-right:0;display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-md, .alert-tappable.ion-focused.sc-ion-alert-md{background:var(--ion-color-step-100,#e6e6e6)}.alert-button-inner.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-checkbox-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md, .alert-input-disabled.sc-ion-alert-md, .alert-radio-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md{cursor:default;opacity:.5;pointer-events:none}.alert-tappable.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:normal;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:strict}.alert-button.sc-ion-alert-md, .alert-checkbox.sc-ion-alert-md, .alert-input.sc-ion-alert-md, .alert-radio.sc-ion-alert-md{outline:none}.alert-checkbox-icon.sc-ion-alert-md, .alert-checkbox-inner.sc-ion-alert-md, .alert-radio-icon.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-alert-md-h{--background:var(--ion-overlay-background-color,var(--ion-background-color,#fff));--max-width:280px;font-size:14px}.alert-wrapper.sc-ion-alert-md{border-radius:4px;-webkit-box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.alert-head.sc-ion-alert-md{padding-left:23px;padding-right:23px;padding-top:20px;padding-bottom:15px;text-align:start}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-head.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:23px;padding-inline-start:23px;-webkit-padding-end:23px;padding-inline-end:23px}}.alert-title.sc-ion-alert-md{font-size:20px;font-weight:500}.alert-sub-title.sc-ion-alert-md, .alert-title.sc-ion-alert-md{color:var(--ion-text-color,#000)}.alert-sub-title.sc-ion-alert-md{font-size:16px}.alert-input-group.sc-ion-alert-md, .alert-message.sc-ion-alert-md{padding-left:24px;padding-right:24px;padding-top:20px;padding-bottom:20px;color:var(--ion-color-step-550,#737373)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-input-group.sc-ion-alert-md, .alert-message.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.alert-message.sc-ion-alert-md{max-height:240px;font-size:16px}.alert-message.sc-ion-alert-md:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-head.sc-ion-alert-md + .alert-message.sc-ion-alert-md{padding-top:0}.alert-input.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;border-bottom:1px solid var(--ion-color-step-150,#d9d9d9);color:var(--ion-text-color,#000)}.alert-input.sc-ion-alert-md::-webkit-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-moz-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md:-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-clear{display:none}.alert-input.sc-ion-alert-md:focus{margin-bottom:4px;border-bottom:2px solid var(--ion-color-primary,#3880ff)}.alert-checkbox-group.sc-ion-alert-md, .alert-radio-group.sc-ion-alert-md{position:relative;max-height:240px;border-top:1px solid var(--ion-color-step-150,#d9d9d9);border-bottom:1px solid var(--ion-color-step-150,#d9d9d9);overflow:auto}.alert-tappable.sc-ion-alert-md{position:relative;height:48px;overflow:hidden}.alert-radio-label.sc-ion-alert-md{padding-left:52px;padding-right:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850,#262626);font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-radio-label.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:52px;padding-inline-start:52px;-webkit-padding-end:26px;padding-inline-end:26px}}.alert-radio-icon.sc-ion-alert-md{left:26px;top:0;border-radius:50%;display:block;position:relative;width:20px;height:20px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550,#737373)}[dir=rtl].sc-ion-alert-md-h .alert-radio-icon.sc-ion-alert-md, [dir=rtl] .sc-ion-alert-md-h .alert-radio-icon.sc-ion-alert-md, [dir=rtl].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}.alert-radio-inner.sc-ion-alert-md{left:3px;top:3px;border-radius:50%;position:absolute;width:10px;height:10px;-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);background-color:var(--ion-color-primary,#3880ff)}[dir=rtl].sc-ion-alert-md-h .alert-radio-inner.sc-ion-alert-md, [dir=rtl] .sc-ion-alert-md-h .alert-radio-inner.sc-ion-alert-md, [dir=rtl].sc-ion-alert-md .alert-radio-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}[aria-checked=true].sc-ion-alert-md .alert-radio-label.sc-ion-alert-md{color:var(--ion-color-step-850,#262626)}[aria-checked=true].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md{border-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-md .alert-radio-inner.sc-ion-alert-md{-webkit-transform:scaleX(1);transform:scaleX(1)}.alert-checkbox-label.sc-ion-alert-md{padding-left:53px;padding-right:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850,#262626);font-size:16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-checkbox-label.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:53px;padding-inline-start:53px;-webkit-padding-end:26px;padding-inline-end:26px}}.alert-checkbox-icon.sc-ion-alert-md{left:26px;top:0;border-radius:2px;position:relative;width:16px;height:16px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550,#737373);contain:strict}[dir=rtl].sc-ion-alert-md-h .alert-checkbox-icon.sc-ion-alert-md, [dir=rtl] .sc-ion-alert-md-h .alert-checkbox-icon.sc-ion-alert-md, [dir=rtl].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}[aria-checked=true].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md{border-color:var(--ion-color-primary,#3880ff);background-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{left:3px;top:0;position:absolute;width:6px;height:10px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary-contrast,#fff)}[dir=rtl].sc-ion-alert-md-h [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md, [dir=rtl] .sc-ion-alert-md-h [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md, [dir=rtl].sc-ion-alert-md [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}.alert-button-group.sc-ion-alert-md{padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;-ms-flex-pack:end;justify-content:flex-end}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-button-group.sc-ion-alert-md{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.alert-button.sc-ion-alert-md{border-radius:2px;margin-left:0;margin-right:8px;margin-top:0;margin-bottom:0;padding-left:10px;padding-right:10px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;color:var(--ion-color-primary,#3880ff);font-weight:500;text-align:end;text-transform:uppercase;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-button.sc-ion-alert-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.alert-button-inner.sc-ion-alert-md{-ms-flex-pack:end;justify-content:flex-end}"; },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2luZGV4LTM0NzZiMDIzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvaW9uLWFsZXJ0LW1kLmVudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsbUJBQW1CO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsbUNBQW1DO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQ0FBZ0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tDOzs7Ozs7Ozs7Ozs7O0FDOUdsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDL0Y7QUFDQztBQUNnQztBQUN5RjtBQUNqRztBQUNNO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdFQUFlO0FBQ3ZDLDRCQUE0QixnRUFBZTtBQUMzQywyQkFBMkIsZ0VBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0VBQWU7QUFDdkMsNEJBQTRCLGdFQUFlO0FBQzNDLDJCQUEyQixnRUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGtEQUFrRDtBQUMzRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnRUFBZTtBQUN2Qyw0QkFBNEIsZ0VBQWU7QUFDM0MsMkJBQTJCLGdFQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsc0RBQXNEO0FBQy9ELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdFQUFlO0FBQ3ZDLDRCQUE0QixnRUFBZTtBQUMzQywyQkFBMkIsZ0VBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJEQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx1REFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0RBQVE7QUFDeEIsNkVBQTZFLDRCQUE0QixFQUFFO0FBQzNHO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0RBQWM7QUFDdEIsMEJBQTBCLDJEQUFXO0FBQ3JDLDJCQUEyQiwyREFBVztBQUN0QywyQkFBMkIsMkRBQVc7QUFDdEMsMEJBQTBCLDJEQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGVBQWUsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFQUFFLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFXO0FBQzFCO0FBQ0E7QUFDQSxtREFBbUQsZ0JBQWdCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBUTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0RBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0RBQVE7QUFDcEIsaUNBQWlDLGlCQUFpQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUJBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLCtEQUFRO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxvQkFBb0IsRUFBRTtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELGtCQUFrQixFQUFFLG9CQUFvQixnQkFBZ0IsRUFBRTtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyREFBQyxTQUFTLCtEQUErRCwyQkFBMkIsU0FBUywyREFBQyxZQUFZLHVDQUF1Qyx5QkFBeUIsRUFBRTtBQUM1TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxFQUFFLEVBQUUsMkRBQUMsU0FBUyw4QkFBOEIsRUFBRSwyREFBQyxTQUFTLCtCQUErQixFQUFFLDJEQUFDLFNBQVMsZ0NBQWdDLElBQUksMkRBQUMsU0FBUyxnQ0FBZ0MsOEJBQThCLDJEQUFDLDhCQUE4QixFQUFFO0FBQzdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFDLFNBQVMsd0hBQXdILDJCQUEyQixTQUFTLDJEQUFDLFlBQVksdUNBQXVDLHlCQUF5QixFQUFFO0FBQ3JRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlCQUFpQixFQUFFLDJEQUFDLFNBQVMsOEJBQThCLEVBQUUsMkRBQUMsU0FBUyw0QkFBNEIsRUFBRSwyREFBQyxTQUFTLDZCQUE2QixJQUFJLDJEQUFDLFNBQVMsNkJBQTZCLGNBQWMsRUFBRTtBQUNwTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQUMsU0FBUyw0REFBNEQsMkJBQTJCLFNBQVMsMkRBQUMsU0FBUywrQkFBK0IsRUFBRSwyREFBQyxXQUFXLDBHQUEwRyxpQ0FBaUMsRUFBRTtBQUM5VDtBQUNBO0FBQ0EsYUFBYSxFQUFFLElBQUksRUFBRTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyREFBQyxTQUFTLCtCQUErQixpQ0FBaUMsUUFBUSwyREFBQyxZQUFZLGdGQUFnRixrQ0FBa0MsRUFBRSxFQUFFLEVBQUUsMkRBQUMsVUFBVSw4QkFBOEIsaUNBQWlDLDJEQUFDLDZCQUE2QixFQUFFO0FBQ2pWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRztBQUN6QjtBQUNBLGFBQWEsdUNBQXVDLEVBQUUsNERBQVcsMEJBQTBCLDhKQUE4SixFQUFFLDJEQUFDLGtCQUFrQixpQ0FBaUMsR0FBRywyREFBQyxTQUFTLHlCQUF5QixFQUFFLDJEQUFDLFNBQVMsc0JBQXNCLFlBQVksMkRBQUMsUUFBUSxrQ0FBa0Msd0JBQXdCLDJEQUFDLFFBQVEseUNBQXlDLGVBQWUsMkRBQUMsU0FBUywrQ0FBK0MsNERBQWlCLGdCQUFnQjtBQUNqbUI7QUFDQTtBQUNBLDBCQUEwQixRQUFRLDJEQUFVLE9BQU8sRUFBRTtBQUNyRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLDRCQUE0QixrQkFBa0IsYUFBYSxrQkFBa0IsY0FBYyxpQkFBaUIsa0NBQWtDLG1DQUFtQyxPQUFPLFFBQVEsTUFBTSxTQUFTLG9CQUFvQixhQUFhLGVBQWUsc0JBQXNCLG1CQUFtQixxQkFBcUIsdUJBQXVCLDJDQUEyQyxlQUFlLHNCQUFzQixrQkFBa0IseUJBQXlCLHNCQUFzQixxQkFBcUIsaUJBQWlCLGFBQWEsa0NBQWtDLGFBQWEsNkJBQTZCLGlCQUFpQixxQkFBcUIsdUJBQXVCLCtCQUErQixvQkFBb0IsYUFBYSwwQkFBMEIsc0JBQXNCLG1CQUFtQiwyQkFBMkIsMkJBQTJCLHFCQUFxQiw2QkFBNkIsNkJBQTZCLDZCQUE2QixnQkFBZ0IsVUFBVSxXQUFXLDZCQUE2QixhQUFhLCtEQUErRCxjQUFjLGVBQWUsZ0JBQWdCLGVBQWUsZ0JBQWdCLGNBQWMsaUJBQWlCLGlDQUFpQyxlQUFlLGdCQUFnQiwrQkFBK0IsOEJBQThCLHNCQUFzQixpQ0FBaUMsZ0JBQWdCLDhCQUE4QixtS0FBbUssYUFBYSw2QkFBNkIsZUFBZSxnQkFBZ0IsaUJBQWlCLG9CQUFvQixXQUFXLFNBQVMsbUJBQW1CLGFBQWEsOEJBQThCLHNCQUFzQixvQ0FBb0Msb0JBQW9CLGFBQWEsdUJBQXVCLG1CQUFtQixXQUFXLDZDQUE2QywwQkFBMEIsc0JBQXNCLHFCQUFxQixpQkFBaUIsOEJBQThCLGVBQWUsY0FBYyxTQUFTLGVBQWUsaUJBQWlCLFVBQVUsdUZBQXVGLDZDQUE2QyxvQ0FBb0Msb0JBQW9CLGFBQWEseUJBQXlCLHFCQUFxQixvQkFBb0IsY0FBYyxzQkFBc0IsbUJBQW1CLHFCQUFxQix1QkFBdUIsV0FBVyxZQUFZLDZNQUE2TSxlQUFlLFdBQVcsb0JBQW9CLGdDQUFnQyxjQUFjLGVBQWUsYUFBYSxnQkFBZ0IsZUFBZSxnQkFBZ0IsY0FBYyxpQkFBaUIsb0JBQW9CLGFBQWEsV0FBVyxTQUFTLHVCQUF1QixrQkFBa0IsbUJBQW1CLGlCQUFpQix3QkFBd0IscUJBQXFCLGdCQUFnQixlQUFlLDJIQUEySCxhQUFhLCtHQUErRyw4QkFBOEIsc0JBQXNCLG1CQUFtQixrRkFBa0Ysa0JBQWtCLGVBQWUsK0JBQStCLGtCQUFrQixrSEFBa0gsMEdBQTBHLDRCQUE0QixrQkFBa0IsbUJBQW1CLGlCQUFpQixvQkFBb0IsaUJBQWlCLDZGQUE2Riw0QkFBNEIsbUJBQW1CLG9CQUFvQiwyQkFBMkIsMEJBQTBCLHlCQUF5Qix5QkFBeUIsNkJBQTZCLGVBQWUsZ0JBQWdCLCtEQUErRCxpQ0FBaUMsaUNBQWlDLGVBQWUsbUVBQW1FLGtCQUFrQixtQkFBbUIsaUJBQWlCLG9CQUFvQix3Q0FBd0MsNkZBQTZGLG1FQUFtRSxtQkFBbUIsb0JBQW9CLDJCQUEyQiwwQkFBMEIseUJBQXlCLHlCQUF5QiwrQkFBK0IsaUJBQWlCLGVBQWUscUNBQXFDLGVBQWUsZ0JBQWdCLGNBQWMsaUJBQWlCLDZEQUE2RCxjQUFjLDZCQUE2QixjQUFjLGVBQWUsZUFBZSxrQkFBa0IsMERBQTBELGlDQUFpQyx3REFBd0Qsa0VBQWtFLG9CQUFvQixvQkFBb0IsK0NBQStDLGtFQUFrRSxvQkFBb0Isb0JBQW9CLG1EQUFtRCxrRUFBa0Usb0JBQW9CLG9CQUFvQixvREFBb0Qsa0VBQWtFLG9CQUFvQixvQkFBb0IsMENBQTBDLGtFQUFrRSxvQkFBb0Isb0JBQW9CLHdDQUF3QyxhQUFhLG1DQUFtQyxrQkFBa0IseURBQXlELDBFQUEwRSxrQkFBa0IsaUJBQWlCLHVEQUF1RCwwREFBMEQsY0FBYyxnQ0FBZ0Msa0JBQWtCLFlBQVksZ0JBQWdCLG1DQUFtQyxrQkFBa0IsbUJBQW1CLGlCQUFpQixvQkFBb0IsV0FBVyxPQUFPLHdDQUF3QyxlQUFlLHVCQUF1QixtQkFBbUIsZ0JBQWdCLDZGQUE2RixtQ0FBbUMsbUJBQW1CLG9CQUFvQiwyQkFBMkIsMEJBQTBCLHlCQUF5Qix5QkFBeUIsa0NBQWtDLFVBQVUsTUFBTSxrQkFBa0IsY0FBYyxrQkFBa0IsV0FBVyxZQUFZLGlCQUFpQixtQkFBbUIsK0NBQStDLDJMQUEyTCxXQUFXLFlBQVksV0FBVyxtQ0FBbUMsU0FBUyxRQUFRLGtCQUFrQixrQkFBa0IsV0FBVyxZQUFZLGlDQUFpQyx5QkFBeUIsa0VBQWtFLDBEQUEwRCxrREFBa0QsaUdBQWlHLGtEQUFrRCw4TEFBOEwsV0FBVyxZQUFZLFVBQVUsdUVBQXVFLHdDQUF3QyxzRUFBc0UsOENBQThDLHVFQUF1RSw0QkFBNEIsb0JBQW9CLHNDQUFzQyxrQkFBa0IsbUJBQW1CLGlCQUFpQixvQkFBb0IsV0FBVyxPQUFPLHdDQUF3QyxlQUFlLHVCQUF1QixtQkFBbUIsZ0JBQWdCLDZGQUE2RixzQ0FBc0MsbUJBQW1CLG9CQUFvQiwyQkFBMkIsMEJBQTBCLHlCQUF5Qix5QkFBeUIscUNBQXFDLFVBQVUsTUFBTSxrQkFBa0Isa0JBQWtCLFdBQVcsWUFBWSxpQkFBaUIsbUJBQW1CLCtDQUErQyxlQUFlLG9NQUFvTSxXQUFXLFlBQVksV0FBVyx5RUFBeUUsOENBQThDLGtEQUFrRCwwRUFBMEUsU0FBUyxNQUFNLGtCQUFrQixVQUFVLFlBQVksZ0NBQWdDLHdCQUF3QixpQkFBaUIsbUJBQW1CLG9CQUFvQixtQkFBbUIsb0RBQW9ELG1UQUFtVCxXQUFXLFlBQVksVUFBVSxvQ0FBb0MsaUJBQWlCLGtCQUFrQixnQkFBZ0IsbUJBQW1CLDhCQUE4QixzQkFBc0IsMkJBQTJCLHVCQUF1QixrQkFBa0IseUJBQXlCLDZGQUE2RixvQ0FBb0MsbUJBQW1CLG9CQUFvQiwwQkFBMEIseUJBQXlCLHdCQUF3Qix3QkFBd0IsOEJBQThCLGtCQUFrQixjQUFjLGlCQUFpQixhQUFhLGdCQUFnQixrQkFBa0IsbUJBQW1CLGlCQUFpQixvQkFBb0Isa0JBQWtCLDZCQUE2Qix1Q0FBdUMsZ0JBQWdCLGVBQWUseUJBQXlCLGdCQUFnQiw2RkFBNkYsOEJBQThCLGtCQUFrQixtQkFBbUIsdUJBQXVCLHNCQUFzQix1QkFBdUIsc0JBQXNCLG1CQUFtQixvQkFBb0IsMkJBQTJCLDBCQUEwQix5QkFBeUIseUJBQXlCLG9DQUFvQyxrQkFBa0IseUJBQXlCLEVBQUUsRUFBRTtBQUM1K1c7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBLDBCQUEwQix1RUFBdUUsRUFBRSw0REFBVztBQUM5RztBQUM4Qjs7Ozs7Ozs7Ozs7OztBQ3BYOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQixFQUFFO0FBQ3RELCtCQUErQixpQkFBaUIsRUFBRTtBQUNsRCxrQ0FBa0MsaUJBQWlCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxzQkFBc0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUSx1REFBUztBQUM5RDtBQUNBLFdBQVcseURBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFO0FBQ2tGIiwiZmlsZSI6IjE4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRG9lcyBhIHNpbXBsZSBzYW5pdGl6YXRpb24gb2YgYWxsIGVsZW1lbnRzXG4gKiBpbiBhbiB1bnRydXN0ZWQgc3RyaW5nXG4gKi9cbnZhciBzYW5pdGl6ZURPTVN0cmluZyA9IGZ1bmN0aW9uICh1bnRydXN0ZWRTdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHVudHJ1c3RlZFN0cmluZyAhPT0gJ3N0cmluZycgfHwgdW50cnVzdGVkU3RyaW5nID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIHVudHJ1c3RlZFN0cmluZztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlIGEgZG9jdW1lbnQgZnJhZ21lbnRcbiAgICAgICAgICogc2VwYXJhdGUgZnJvbSB0aGUgbWFpbiBET00sXG4gICAgICAgICAqIGNyZWF0ZSBhIGRpdiB0byBkbyBvdXIgd29yayBpblxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGRvY3VtZW50RnJhZ21lbnRfMSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgdmFyIHdvcmtpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZG9jdW1lbnRGcmFnbWVudF8xLmFwcGVuZENoaWxkKHdvcmtpbmdEaXYpO1xuICAgICAgICB3b3JraW5nRGl2LmlubmVySFRNTCA9IHVudHJ1c3RlZFN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSBhbnkgZWxlbWVudHNcbiAgICAgICAgICogdGhhdCBhcmUgYmxvY2tlZFxuICAgICAgICAgKi9cbiAgICAgICAgYmxvY2tlZFRhZ3MuZm9yRWFjaChmdW5jdGlvbiAoYmxvY2tlZFRhZykge1xuICAgICAgICAgICAgdmFyIGdldEVsZW1lbnRzVG9SZW1vdmUgPSBkb2N1bWVudEZyYWdtZW50XzEucXVlcnlTZWxlY3RvckFsbChibG9ja2VkVGFnKTtcbiAgICAgICAgICAgIGZvciAodmFyIGVsZW1lbnRJbmRleCA9IGdldEVsZW1lbnRzVG9SZW1vdmUubGVuZ3RoIC0gMTsgZWxlbWVudEluZGV4ID49IDA7IGVsZW1lbnRJbmRleC0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBnZXRFbGVtZW50c1RvUmVtb3ZlW2VsZW1lbnRJbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudEZyYWdtZW50XzEucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFdlIHN0aWxsIG5lZWQgdG8gc2FuaXRpemVcbiAgICAgICAgICAgICAgICAgKiB0aGUgY2hpbGRyZW4gb2YgdGhpcyBlbGVtZW50XG4gICAgICAgICAgICAgICAgICogYXMgdGhleSBhcmUgbGVmdCBiZWhpbmRcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRFbGVtZW50cyA9IGdldEVsZW1lbnRDaGlsZHJlbihlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjaGlsZEluZGV4ID0gMDsgY2hpbGRJbmRleCA8IGNoaWxkRWxlbWVudHMubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2FuaXRpemVFbGVtZW50KGNoaWxkRWxlbWVudHNbY2hpbGRJbmRleF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHbyB0aHJvdWdoIHJlbWFpbmluZyBlbGVtZW50cyBhbmQgcmVtb3ZlXG4gICAgICAgICAqIG5vbi1hbGxvd2VkIGF0dHJpYnNcbiAgICAgICAgICovXG4gICAgICAgIC8vIElFIGRvZXMgbm90IHN1cHBvcnQgLmNoaWxkcmVuIG9uIGRvY3VtZW50IGZyYWdtZW50cywgb25seSAuY2hpbGROb2Rlc1xuICAgICAgICB2YXIgZGZDaGlsZHJlbiA9IGdldEVsZW1lbnRDaGlsZHJlbihkb2N1bWVudEZyYWdtZW50XzEpO1xuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgZm9yICh2YXIgY2hpbGRJbmRleCA9IDA7IGNoaWxkSW5kZXggPCBkZkNoaWxkcmVuLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XG4gICAgICAgICAgICBzYW5pdGl6ZUVsZW1lbnQoZGZDaGlsZHJlbltjaGlsZEluZGV4XSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwZW5kIGRvY3VtZW50IGZyYWdtZW50IHRvIGRpdlxuICAgICAgICB2YXIgZnJhZ21lbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZnJhZ21lbnREaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnRGcmFnbWVudF8xKTtcbiAgICAgICAgLy8gRmlyc3QgY2hpbGQgaXMgYWx3YXlzIHRoZSBkaXYgd2UgZGlkIG91ciB3b3JrIGluXG4gICAgICAgIHZhciBnZXRJbm5lckRpdiA9IGZyYWdtZW50RGl2LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgICAgICByZXR1cm4gKGdldElubmVyRGl2ICE9PSBudWxsKSA/IGdldElubmVyRGl2LmlubmVySFRNTCA6IGZyYWdtZW50RGl2LmlubmVySFRNTDtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59O1xuLyoqXG4gKiBDbGVhbiB1cCBjdXJyZW50IGVsZW1lbnQgYmFzZWQgb24gYWxsb3dlZCBhdHRyaWJ1dGVzXG4gKiBhbmQgdGhlbiByZWN1cnNpdmVseSBkaWcgZG93biBpbnRvIGFueSBjaGlsZCBlbGVtZW50cyB0b1xuICogY2xlYW4gdGhvc2UgdXAgYXMgd2VsbFxuICovXG52YXIgc2FuaXRpemVFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAvLyBJRSB1c2VzIGNoaWxkTm9kZXMsIHNvIGlnbm9yZSBub2RlcyB0aGF0IGFyZSBub3QgZWxlbWVudHNcbiAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSAmJiBlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IGVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICB2YXIgYXR0cmlidXRlID0gZWxlbWVudC5hdHRyaWJ1dGVzLml0ZW0oaSk7XG4gICAgICAgIHZhciBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlLm5hbWU7XG4gICAgICAgIC8vIHJlbW92ZSBub24tYWxsb3dlZCBhdHRyaWJzXG4gICAgICAgIGlmICghYWxsb3dlZEF0dHJpYnV0ZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjbGVhbiB1cCBhbnkgYWxsb3dlZCBhdHRyaWJzXG4gICAgICAgIC8vIHRoYXQgYXR0ZW1wdCB0byBkbyBhbnkgSlMgZnVubnktYnVzaW5lc3NcbiAgICAgICAgdmFyIGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlLnZhbHVlO1xuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgaWYgKGF0dHJpYnV0ZVZhbHVlICE9IG51bGwgJiYgYXR0cmlidXRlVmFsdWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnamF2YXNjcmlwdDonKSkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2FuaXRpemUgYW55IG5lc3RlZCBjaGlsZHJlblxuICAgICAqL1xuICAgIHZhciBjaGlsZEVsZW1lbnRzID0gZ2V0RWxlbWVudENoaWxkcmVuKGVsZW1lbnQpO1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzYW5pdGl6ZUVsZW1lbnQoY2hpbGRFbGVtZW50c1tpXSk7XG4gICAgfVxufTtcbi8qKlxuICogSUUgZG9lc24ndCBhbHdheXMgc3VwcG9ydCAuY2hpbGRyZW5cbiAqIHNvIHdlIHJldmVydCB0byAuY2hpbGROb2RlcyBpbnN0ZWFkXG4gKi9cbnZhciBnZXRFbGVtZW50Q2hpbGRyZW4gPSBmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gKGVsLmNoaWxkcmVuICE9IG51bGwpID8gZWwuY2hpbGRyZW4gOiBlbC5jaGlsZE5vZGVzO1xufTtcbnZhciBhbGxvd2VkQXR0cmlidXRlcyA9IFsnY2xhc3MnLCAnaWQnLCAnaHJlZicsICdzcmMnLCAnbmFtZScsICdzbG90J107XG52YXIgYmxvY2tlZFRhZ3MgPSBbJ3NjcmlwdCcsICdzdHlsZScsICdpZnJhbWUnLCAnbWV0YScsICdsaW5rJywgJ29iamVjdCcsICdlbWJlZCddO1xuZXhwb3J0IHsgc2FuaXRpemVET01TdHJpbmcgYXMgcyB9O1xuIiwiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGdldElvbk1vZGUsIGQgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWZlZWVmZjBkLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0ICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi1hZjQ3OGZlOS5qcyc7XG5pbXBvcnQgeyBCIGFzIEJBQ0tEUk9QLCBpIGFzIGlzQ2FuY2VsLCBkIGFzIHByZXBhcmVPdmVybGF5LCBlIGFzIHByZXNlbnQsIGYgYXMgZGlzbWlzcywgZyBhcyBldmVudE1ldGhvZCwgcyBhcyBzYWZlQ2FsbCB9IGZyb20gJy4vb3ZlcmxheXMtMTA2NDBkODYuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRDbGFzc01hcCB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuaW1wb3J0IHsgcyBhcyBzYW5pdGl6ZURPTVN0cmluZyB9IGZyb20gJy4vaW5kZXgtMzQ3NmIwMjMuanMnO1xuLyoqXG4gKiBpT1MgQWxlcnQgRW50ZXIgQW5pbWF0aW9uXG4gKi9cbnZhciBpb3NFbnRlckFuaW1hdGlvbiA9IGZ1bmN0aW9uIChiYXNlRWwpIHtcbiAgICB2YXIgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgYmFja2Ryb3BBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKVxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMC4zKTtcbiAgICB3cmFwcGVyQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQtd3JhcHBlcicpKVxuICAgICAgICAua2V5ZnJhbWVzKFtcbiAgICAgICAgeyBvZmZzZXQ6IDAsIG9wYWNpdHk6ICcwLjAxJywgdHJhbnNmb3JtOiAnc2NhbGUoMS4xKScgfSxcbiAgICAgICAgeyBvZmZzZXQ6IDEsIG9wYWNpdHk6ICcxJywgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH1cbiAgICBdKTtcbiAgICByZXR1cm4gYmFzZUFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwpXG4gICAgICAgIC5lYXNpbmcoJ2Vhc2UtaW4tb3V0JylcbiAgICAgICAgLmR1cmF0aW9uKDIwMClcbiAgICAgICAgLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcbn07XG4vKipcbiAqIGlPUyBBbGVydCBMZWF2ZSBBbmltYXRpb25cbiAqL1xudmFyIGlvc0xlYXZlQW5pbWF0aW9uID0gZnVuY3Rpb24gKGJhc2VFbCkge1xuICAgIHZhciBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjMsIDApO1xuICAgIHdyYXBwZXJBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC13cmFwcGVyJykpXG4gICAgICAgIC5rZXlmcmFtZXMoW1xuICAgICAgICB7IG9mZnNldDogMCwgb3BhY2l0eTogMC45OSwgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH0sXG4gICAgICAgIHsgb2Zmc2V0OiAxLCBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgwLjkpJyB9XG4gICAgXSk7XG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxuICAgICAgICAuZWFzaW5nKCdlYXNlLWluLW91dCcpXG4gICAgICAgIC5kdXJhdGlvbigyMDApXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xuLyoqXG4gKiBNZCBBbGVydCBFbnRlciBBbmltYXRpb25cbiAqL1xudmFyIG1kRW50ZXJBbmltYXRpb24gPSBmdW5jdGlvbiAoYmFzZUVsKSB7XG4gICAgdmFyIGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIGJhY2tkcm9wQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSlcbiAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDAuMzIpO1xuICAgIHdyYXBwZXJBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC13cmFwcGVyJykpXG4gICAgICAgIC5rZXlmcmFtZXMoW1xuICAgICAgICB7IG9mZnNldDogMCwgb3BhY2l0eTogJzAuMDEnLCB0cmFuc2Zvcm06ICdzY2FsZSgwLjkpJyB9LFxuICAgICAgICB7IG9mZnNldDogMSwgb3BhY2l0eTogJzEnLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfVxuICAgIF0pO1xuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbClcbiAgICAgICAgLmVhc2luZygnZWFzZS1pbi1vdXQnKVxuICAgICAgICAuZHVyYXRpb24oMTUwKVxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xufTtcbi8qKlxuICogTWQgQWxlcnQgTGVhdmUgQW5pbWF0aW9uXG4gKi9cbnZhciBtZExlYXZlQW5pbWF0aW9uID0gZnVuY3Rpb24gKGJhc2VFbCkge1xuICAgIHZhciBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgdmFyIHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpXG4gICAgICAgIC5mcm9tVG8oJ29wYWNpdHknLCAwLjMyLCAwKTtcbiAgICB3cmFwcGVyQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQtd3JhcHBlcicpKVxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMC45OSwgMCk7XG4gICAgcmV0dXJuIGJhc2VBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQoYmFzZUVsKVxuICAgICAgICAuZWFzaW5nKCdlYXNlLWluLW91dCcpXG4gICAgICAgIC5kdXJhdGlvbigxNTApXG4gICAgICAgIC5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xudmFyIEFsZXJ0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFsZXJ0KGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzZWRJbnB1dHMgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9jZXNzZWRCdXR0b25zID0gW107XG4gICAgICAgIHRoaXMucHJlc2VudGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBrZXlib2FyZCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZGlzbWlzc2VkIHdoZW4gdGhlIG92ZXJsYXkgaXMgcHJlc2VudGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5rZXlib2FyZENsb3NlID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFycmF5IG9mIGJ1dHRvbnMgdG8gYmUgYWRkZWQgdG8gdGhlIGFsZXJ0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5idXR0b25zID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcnJheSBvZiBpbnB1dCB0byBzaG93IGluIHRoZSBhbGVydC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW5wdXRzID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBhbGVydCB3aWxsIGJlIGRpc21pc3NlZCB3aGVuIHRoZSBiYWNrZHJvcCBpcyBjbGlja2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5iYWNrZHJvcERpc21pc3MgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYWxlcnQgd2lsbCBiZSB0cmFuc2x1Y2VudC5cbiAgICAgICAgICogT25seSBhcHBsaWVzIHdoZW4gdGhlIG1vZGUgaXMgYFwiaW9zXCJgIGFuZCB0aGUgZGV2aWNlIHN1cHBvcnRzXG4gICAgICAgICAqIFtgYmFja2Ryb3AtZmlsdGVyYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tkcm9wLWZpbHRlciNCcm93c2VyX2NvbXBhdGliaWxpdHkpLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmFuc2x1Y2VudCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYWxlcnQgd2lsbCBhbmltYXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hbmltYXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub25CYWNrZHJvcFRhcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmRpc21pc3ModW5kZWZpbmVkLCBCQUNLRFJPUCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDYW5jZWxIYW5kbGVyID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgcm9sZSA9IGV2LmRldGFpbC5yb2xlO1xuICAgICAgICAgICAgaWYgKGlzQ2FuY2VsKHJvbGUpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhbmNlbEJ1dHRvbiA9IF90aGlzLnByb2Nlc3NlZEJ1dHRvbnMuZmluZChmdW5jdGlvbiAoYikgeyByZXR1cm4gYi5yb2xlID09PSAnY2FuY2VsJzsgfSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2FsbEJ1dHRvbkhhbmRsZXIoY2FuY2VsQnV0dG9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcHJlcGFyZU92ZXJsYXkodGhpcy5lbCk7XG4gICAgICAgIHRoaXMuZGlkUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQWxlcnREaWRQcmVzZW50XCIsIDcpO1xuICAgICAgICB0aGlzLndpbGxQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25BbGVydFdpbGxQcmVzZW50XCIsIDcpO1xuICAgICAgICB0aGlzLndpbGxEaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25BbGVydFdpbGxEaXNtaXNzXCIsIDcpO1xuICAgICAgICB0aGlzLmRpZERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkFsZXJ0RGlkRGlzbWlzc1wiLCA3KTtcbiAgICB9XG4gICAgQWxlcnQucHJvdG90eXBlLmJ1dHRvbnNDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYnV0dG9ucyA9IHRoaXMuYnV0dG9ucztcbiAgICAgICAgdGhpcy5wcm9jZXNzZWRCdXR0b25zID0gYnV0dG9ucy5tYXAoZnVuY3Rpb24gKGJ0bikge1xuICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgYnRuID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICA/IHsgdGV4dDogYnRuLCByb2xlOiBidG4udG9Mb3dlckNhc2UoKSA9PT0gJ2NhbmNlbCcgPyAnY2FuY2VsJyA6IHVuZGVmaW5lZCB9XG4gICAgICAgICAgICAgICAgOiBidG47XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQWxlcnQucHJvdG90eXBlLmlucHV0c0NoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBpbnB1dHMgPSB0aGlzLmlucHV0cztcbiAgICAgICAgLy8gQW4gYWxlcnQgY2FuIGJlIGNyZWF0ZWQgd2l0aCBzZXZlcmFsIGRpZmZlcmVudCBpbnB1dHMuIFJhZGlvcyxcbiAgICAgICAgLy8gY2hlY2tib3hlcyBhbmQgaW5wdXRzIGFyZSBhbGwgYWNjZXB0ZWQsIGJ1dCB0aGV5IGNhbm5vdCBiZSBtaXhlZC5cbiAgICAgICAgdmFyIGlucHV0VHlwZXMgPSBuZXcgU2V0KGlucHV0cy5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkudHlwZTsgfSkpO1xuICAgICAgICBpZiAoaW5wdXRUeXBlcy5oYXMoJ2NoZWNrYm94JykgJiYgaW5wdXRUeXBlcy5oYXMoJ3JhZGlvJykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkFsZXJ0IGNhbm5vdCBtaXggaW5wdXQgdHlwZXM6IFwiICsgKEFycmF5LmZyb20oaW5wdXRUeXBlcy52YWx1ZXMoKSkuam9pbignLycpKSArIFwiLiBQbGVhc2Ugc2VlIGFsZXJ0IGRvY3MgZm9yIG1vcmUgaW5mby5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSBpbnB1dFR5cGVzLnZhbHVlcygpLm5leHQoKS52YWx1ZTtcbiAgICAgICAgdGhpcy5wcm9jZXNzZWRJbnB1dHMgPSBpbnB1dHMubWFwKGZ1bmN0aW9uIChpLCBpbmRleCkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgIHR5cGU6IGkudHlwZSB8fCAndGV4dCcsXG4gICAgICAgICAgICBuYW1lOiBpLm5hbWUgfHwgXCJcIiArIGluZGV4LFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGkucGxhY2Vob2xkZXIgfHwgJycsXG4gICAgICAgICAgICB2YWx1ZTogaS52YWx1ZSxcbiAgICAgICAgICAgIGxhYmVsOiBpLmxhYmVsLFxuICAgICAgICAgICAgY2hlY2tlZDogISFpLmNoZWNrZWQsXG4gICAgICAgICAgICBkaXNhYmxlZDogISFpLmRpc2FibGVkLFxuICAgICAgICAgICAgaWQ6IGkuaWQgfHwgXCJhbGVydC1pbnB1dC1cIiArIF90aGlzLm92ZXJsYXlJbmRleCArIFwiLVwiICsgaW5kZXgsXG4gICAgICAgICAgICBoYW5kbGVyOiBpLmhhbmRsZXIsXG4gICAgICAgICAgICBtaW46IGkubWluLFxuICAgICAgICAgICAgbWF4OiBpLm1heFxuICAgICAgICB9KTsgfSk7XG4gICAgfTtcbiAgICBBbGVydC5wcm90b3R5cGUuY29tcG9uZW50V2lsbExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRzQ2hhbmdlZCgpO1xuICAgICAgICB0aGlzLmJ1dHRvbnNDaGFuZ2VkKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQcmVzZW50IHRoZSBhbGVydCBvdmVybGF5IGFmdGVyIGl0IGhhcyBiZWVuIGNyZWF0ZWQuXG4gICAgICovXG4gICAgQWxlcnQucHJvdG90eXBlLnByZXNlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwcmVzZW50KHRoaXMsICdhbGVydEVudGVyJywgaW9zRW50ZXJBbmltYXRpb24sIG1kRW50ZXJBbmltYXRpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGlzbWlzcyB0aGUgYWxlcnQgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBwcmVzZW50ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBBbnkgZGF0YSB0byBlbWl0IGluIHRoZSBkaXNtaXNzIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0gcm9sZSBUaGUgcm9sZSBvZiB0aGUgZWxlbWVudCB0aGF0IGlzIGRpc21pc3NpbmcgdGhlIGFsZXJ0LlxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWZ1bCBpbiBhIGJ1dHRvbiBoYW5kbGVyIGZvciBkZXRlcm1pbmluZyB3aGljaCBidXR0b24gd2FzXG4gICAgICogY2xpY2tlZCB0byBkaXNtaXNzIHRoZSBhbGVydC5cbiAgICAgKiBTb21lIGV4YW1wbGVzIGluY2x1ZGU6IGBgXCJjYW5jZWxcImAsIGBcImRlc3RydWN0aXZlXCJgLCBcInNlbGVjdGVkXCJgLCBhbmQgYFwiYmFja2Ryb3BcImAuXG4gICAgICovXG4gICAgQWxlcnQucHJvdG90eXBlLmRpc21pc3MgPSBmdW5jdGlvbiAoZGF0YSwgcm9sZSkge1xuICAgICAgICByZXR1cm4gZGlzbWlzcyh0aGlzLCBkYXRhLCByb2xlLCAnYWxlcnRMZWF2ZScsIGlvc0xlYXZlQW5pbWF0aW9uLCBtZExlYXZlQW5pbWF0aW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYWxlcnQgZGlkIGRpc21pc3MuXG4gICAgICovXG4gICAgQWxlcnQucHJvdG90eXBlLm9uRGlkRGlzbWlzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25BbGVydERpZERpc21pc3MnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYWxlcnQgd2lsbCBkaXNtaXNzLlxuICAgICAqL1xuICAgIEFsZXJ0LnByb3RvdHlwZS5vbldpbGxEaXNtaXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvbkFsZXJ0V2lsbERpc21pc3MnKTtcbiAgICB9O1xuICAgIEFsZXJ0LnByb3RvdHlwZS5yYkNsaWNrID0gZnVuY3Rpb24gKHNlbGVjdGVkSW5wdXQpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMucHJvY2Vzc2VkSW5wdXRzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gX2FbX2ldO1xuICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IGlucHV0ID09PSBzZWxlY3RlZElucHV0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlSWQgPSBzZWxlY3RlZElucHV0LmlkO1xuICAgICAgICBzYWZlQ2FsbChzZWxlY3RlZElucHV0LmhhbmRsZXIsIHNlbGVjdGVkSW5wdXQpO1xuICAgICAgICB0aGlzLmVsLmZvcmNlVXBkYXRlKCk7XG4gICAgfTtcbiAgICBBbGVydC5wcm90b3R5cGUuY2JDbGljayA9IGZ1bmN0aW9uIChzZWxlY3RlZElucHV0KSB7XG4gICAgICAgIHNlbGVjdGVkSW5wdXQuY2hlY2tlZCA9ICFzZWxlY3RlZElucHV0LmNoZWNrZWQ7XG4gICAgICAgIHNhZmVDYWxsKHNlbGVjdGVkSW5wdXQuaGFuZGxlciwgc2VsZWN0ZWRJbnB1dCk7XG4gICAgICAgIHRoaXMuZWwuZm9yY2VVcGRhdGUoKTtcbiAgICB9O1xuICAgIEFsZXJ0LnByb3RvdHlwZS5idXR0b25DbGljayA9IGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgICAgdmFyIHJvbGUgPSBidXR0b24ucm9sZTtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMuZ2V0VmFsdWVzKCk7XG4gICAgICAgIGlmIChpc0NhbmNlbChyb2xlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzbWlzcyh7IHZhbHVlczogdmFsdWVzIH0sIHJvbGUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXR1cm5EYXRhID0gdGhpcy5jYWxsQnV0dG9uSGFuZGxlcihidXR0b24sIHZhbHVlcyk7XG4gICAgICAgIGlmIChyZXR1cm5EYXRhICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzbWlzcyhPYmplY3QuYXNzaWduKHsgdmFsdWVzOiB2YWx1ZXMgfSwgcmV0dXJuRGF0YSksIGJ1dHRvbi5yb2xlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICB9O1xuICAgIEFsZXJ0LnByb3RvdHlwZS5jYWxsQnV0dG9uSGFuZGxlciA9IGZ1bmN0aW9uIChidXR0b24sIGRhdGEpIHtcbiAgICAgICAgaWYgKGJ1dHRvbiAmJiBidXR0b24uaGFuZGxlcikge1xuICAgICAgICAgICAgLy8gYSBoYW5kbGVyIGhhcyBiZWVuIHByb3ZpZGVkLCBleGVjdXRlIGl0XG4gICAgICAgICAgICAvLyBwYXNzIHRoZSBoYW5kbGVyIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaW5wdXRzXG4gICAgICAgICAgICB2YXIgcmV0dXJuRGF0YSA9IHNhZmVDYWxsKGJ1dHRvbi5oYW5kbGVyLCBkYXRhKTtcbiAgICAgICAgICAgIGlmIChyZXR1cm5EYXRhID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGhhbmRsZXIgaXMgZmFsc2UgdGhlbiBkbyBub3QgZGlzbWlzc1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmV0dXJuRGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfTtcbiAgICBBbGVydC5wcm90b3R5cGUuZ2V0VmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9jZXNzZWRJbnB1dHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyB0aGlzIGlzIGFuIGFsZXJ0IHdpdGhvdXQgYW55IG9wdGlvbnMvaW5wdXRzIGF0IGFsbFxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pbnB1dFR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgYW4gYWxlcnQgd2l0aCByYWRpbyBidXR0b25zIChzaW5nbGUgdmFsdWUgc2VsZWN0KVxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBvbmUgdmFsdWUgd2hpY2ggaXMgY2hlY2tlZCwgb3RoZXJ3aXNlIHVuZGVmaW5lZFxuICAgICAgICAgICAgdmFyIGNoZWNrZWRJbnB1dCA9IHRoaXMucHJvY2Vzc2VkSW5wdXRzLmZpbmQoZnVuY3Rpb24gKGkpIHsgcmV0dXJuICEhaS5jaGVja2VkOyB9KTtcbiAgICAgICAgICAgIHJldHVybiBjaGVja2VkSW5wdXQgPyBjaGVja2VkSW5wdXQudmFsdWUgOiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW5wdXRUeXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAvLyB0aGlzIGlzIGFuIGFsZXJ0IHdpdGggY2hlY2tib3hlcyAobXVsdGlwbGUgdmFsdWUgc2VsZWN0KVxuICAgICAgICAgICAgLy8gcmV0dXJuIGFuIGFycmF5IG9mIGFsbCB0aGUgY2hlY2tlZCB2YWx1ZXNcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NlZElucHV0cy5maWx0ZXIoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkuY2hlY2tlZDsgfSkubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiBpLnZhbHVlOyB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzIGlzIGFuIGFsZXJ0IHdpdGggdGV4dCBpbnB1dHNcbiAgICAgICAgLy8gcmV0dXJuIGFuIG9iamVjdCBvZiBhbGwgdGhlIHZhbHVlcyB3aXRoIHRoZSBpbnB1dCBuYW1lIGFzIHRoZSBrZXlcbiAgICAgICAgdmFyIHZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLnByb2Nlc3NlZElucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICB2YWx1ZXNbaS5uYW1lXSA9IGkudmFsdWUgfHwgJyc7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH07XG4gICAgQWxlcnQucHJvdG90eXBlLnJlbmRlckFsZXJ0SW5wdXRzID0gZnVuY3Rpb24gKGxhYmVsbGVkQnkpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmlucHV0VHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOiByZXR1cm4gdGhpcy5yZW5kZXJDaGVja2JveChsYWJlbGxlZEJ5KTtcbiAgICAgICAgICAgIGNhc2UgJ3JhZGlvJzogcmV0dXJuIHRoaXMucmVuZGVyUmFkaW8obGFiZWxsZWRCeSk7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gdGhpcy5yZW5kZXJJbnB1dChsYWJlbGxlZEJ5KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQWxlcnQucHJvdG90eXBlLnJlbmRlckNoZWNrYm94ID0gZnVuY3Rpb24gKGxhYmVsbGVkYnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGlucHV0cyA9IHRoaXMucHJvY2Vzc2VkSW5wdXRzO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIGlmIChpbnB1dHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbGVydC1jaGVja2JveC1ncm91cFwiLCBcImFyaWEtbGFiZWxsZWRieVwiOiBsYWJlbGxlZGJ5IH0sIGlucHV0cy5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIChoKFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuY2JDbGljayhpKTsgfSwgXCJhcmlhLWNoZWNrZWRcIjogXCJcIiArIGkuY2hlY2tlZCwgaWQ6IGkuaWQsIGRpc2FibGVkOiBpLmRpc2FibGVkLCB0YWJJbmRleDogMCwgcm9sZTogXCJjaGVja2JveFwiLCBjbGFzczoge1xuICAgICAgICAgICAgICAgICdhbGVydC10YXBwYWJsZSc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ2FsZXJ0LWNoZWNrYm94JzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnYWxlcnQtY2hlY2tib3gtYnV0dG9uJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnaW9uLWZvY3VzYWJsZSc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ2FsZXJ0LWNoZWNrYm94LWJ1dHRvbi1kaXNhYmxlZCc6IGkuZGlzYWJsZWQgfHwgZmFsc2VcbiAgICAgICAgICAgIH0gfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImFsZXJ0LWJ1dHRvbi1pbm5lclwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbGVydC1jaGVja2JveC1pY29uXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImFsZXJ0LWNoZWNrYm94LWlubmVyXCIgfSkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWxlcnQtY2hlY2tib3gtbGFiZWxcIiB9LCBpLmxhYmVsKSksIG1vZGUgPT09ICdtZCcgJiYgaChcImlvbi1yaXBwbGUtZWZmZWN0XCIsIG51bGwpKSk7IH0pKSk7XG4gICAgfTtcbiAgICBBbGVydC5wcm90b3R5cGUucmVuZGVyUmFkaW8gPSBmdW5jdGlvbiAobGFiZWxsZWRieSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgaW5wdXRzID0gdGhpcy5wcm9jZXNzZWRJbnB1dHM7XG4gICAgICAgIGlmIChpbnB1dHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbGVydC1yYWRpby1ncm91cFwiLCByb2xlOiBcInJhZGlvZ3JvdXBcIiwgXCJhcmlhLWxhYmVsbGVkYnlcIjogbGFiZWxsZWRieSwgXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIjogdGhpcy5hY3RpdmVJZCB9LCBpbnB1dHMubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiAoaChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJiQ2xpY2soaSk7IH0sIFwiYXJpYS1jaGVja2VkXCI6IFwiXCIgKyBpLmNoZWNrZWQsIGRpc2FibGVkOiBpLmRpc2FibGVkLCBpZDogaS5pZCwgdGFiSW5kZXg6IDAsIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgJ2FsZXJ0LXJhZGlvLWJ1dHRvbic6IHRydWUsXG4gICAgICAgICAgICAgICAgJ2FsZXJ0LXRhcHBhYmxlJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnYWxlcnQtcmFkaW8nOiB0cnVlLFxuICAgICAgICAgICAgICAgICdpb24tZm9jdXNhYmxlJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnYWxlcnQtcmFkaW8tYnV0dG9uLWRpc2FibGVkJzogaS5kaXNhYmxlZCB8fCBmYWxzZVxuICAgICAgICAgICAgfSwgcm9sZTogXCJyYWRpb1wiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbGVydC1idXR0b24taW5uZXJcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWxlcnQtcmFkaW8taWNvblwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbGVydC1yYWRpby1pbm5lclwiIH0pKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImFsZXJ0LXJhZGlvLWxhYmVsXCIgfSwgaS5sYWJlbCkpKSk7IH0pKSk7XG4gICAgfTtcbiAgICBBbGVydC5wcm90b3R5cGUucmVuZGVySW5wdXQgPSBmdW5jdGlvbiAobGFiZWxsZWRieSkge1xuICAgICAgICB2YXIgaW5wdXRzID0gdGhpcy5wcm9jZXNzZWRJbnB1dHM7XG4gICAgICAgIGlmIChpbnB1dHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbGVydC1pbnB1dC1ncm91cFwiLCBcImFyaWEtbGFiZWxsZWRieVwiOiBsYWJlbGxlZGJ5IH0sIGlucHV0cy5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWxlcnQtaW5wdXQtd3JhcHBlclwiIH0sIGgoXCJpbnB1dFwiLCB7IHBsYWNlaG9sZGVyOiBpLnBsYWNlaG9sZGVyLCB2YWx1ZTogaS52YWx1ZSwgdHlwZTogaS50eXBlLCBtaW46IGkubWluLCBtYXg6IGkubWF4LCBvbklucHV0OiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gaS52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlOyB9LCBpZDogaS5pZCwgZGlzYWJsZWQ6IGkuZGlzYWJsZWQsIHRhYkluZGV4OiAwLCBjbGFzczoge1xuICAgICAgICAgICAgICAgICdhbGVydC1pbnB1dCc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ2FsZXJ0LWlucHV0LWRpc2FibGVkJzogaS5kaXNhYmxlZCB8fCBmYWxzZVxuICAgICAgICAgICAgfSB9KSkpOyB9KSkpO1xuICAgIH07XG4gICAgQWxlcnQucHJvdG90eXBlLnJlbmRlckFsZXJ0QnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGJ1dHRvbnMgPSB0aGlzLnByb2Nlc3NlZEJ1dHRvbnM7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgdmFyIGFsZXJ0QnV0dG9uR3JvdXBDbGFzcyA9IHtcbiAgICAgICAgICAgICdhbGVydC1idXR0b24tZ3JvdXAnOiB0cnVlLFxuICAgICAgICAgICAgJ2FsZXJ0LWJ1dHRvbi1ncm91cC12ZXJ0aWNhbCc6IGJ1dHRvbnMubGVuZ3RoID4gMlxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogYWxlcnRCdXR0b25Hcm91cENsYXNzIH0sIGJ1dHRvbnMubWFwKGZ1bmN0aW9uIChidXR0b24pIHsgcmV0dXJuIGgoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBjbGFzczogYnV0dG9uQ2xhc3MoYnV0dG9uKSwgdGFiSW5kZXg6IDAsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmJ1dHRvbkNsaWNrKGJ1dHRvbik7IH0gfSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJhbGVydC1idXR0b24taW5uZXJcIiB9LCBidXR0b24udGV4dCksIG1vZGUgPT09ICdtZCcgJiYgaChcImlvbi1yaXBwbGUtZWZmZWN0XCIsIG51bGwpKTsgfSkpKTtcbiAgICB9O1xuICAgIEFsZXJ0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIF9iID0gdGhpcywgb3ZlcmxheUluZGV4ID0gX2Iub3ZlcmxheUluZGV4LCBoZWFkZXIgPSBfYi5oZWFkZXIsIHN1YkhlYWRlciA9IF9iLnN1YkhlYWRlcjtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICB2YXIgaGRySWQgPSBcImFsZXJ0LVwiICsgb3ZlcmxheUluZGV4ICsgXCItaGRyXCI7XG4gICAgICAgIHZhciBzdWJIZHJJZCA9IFwiYWxlcnQtXCIgKyBvdmVybGF5SW5kZXggKyBcIi1zdWItaGRyXCI7XG4gICAgICAgIHZhciBtc2dJZCA9IFwiYWxlcnQtXCIgKyBvdmVybGF5SW5kZXggKyBcIi1tc2dcIjtcbiAgICAgICAgdmFyIGxhYmVsbGVkQnlJZDtcbiAgICAgICAgaWYgKGhlYWRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsYWJlbGxlZEJ5SWQgPSBoZHJJZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdWJIZWFkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGFiZWxsZWRCeUlkID0gc3ViSGRySWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgcm9sZTogXCJkaWFsb2dcIiwgXCJhcmlhLW1vZGFsXCI6IFwidHJ1ZVwiLCBzdHlsZToge1xuICAgICAgICAgICAgICAgIHpJbmRleDogXCJcIiArICgyMDAwMCArIG92ZXJsYXlJbmRleCksXG4gICAgICAgICAgICB9LCBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBnZXRDbGFzc01hcCh0aGlzLmNzc0NsYXNzKSksIChfYSA9IHt9LCBfYVttb2RlXSA9IHRydWUsIF9hWydhbGVydC10cmFuc2x1Y2VudCddID0gdGhpcy50cmFuc2x1Y2VudCwgX2EpKSwgb25Jb25BbGVydFdpbGxEaXNtaXNzOiB0aGlzLmRpc3BhdGNoQ2FuY2VsSGFuZGxlciwgb25Jb25CYWNrZHJvcFRhcDogdGhpcy5vbkJhY2tkcm9wVGFwIH0sIGgoXCJpb24tYmFja2Ryb3BcIiwgeyB0YXBwYWJsZTogdGhpcy5iYWNrZHJvcERpc21pc3MgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbGVydC13cmFwcGVyXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImFsZXJ0LWhlYWRcIiB9LCBoZWFkZXIgJiYgaChcImgyXCIsIHsgaWQ6IGhkcklkLCBjbGFzczogXCJhbGVydC10aXRsZVwiIH0sIGhlYWRlciksIHN1YkhlYWRlciAmJiBoKFwiaDJcIiwgeyBpZDogc3ViSGRySWQsIGNsYXNzOiBcImFsZXJ0LXN1Yi10aXRsZVwiIH0sIHN1YkhlYWRlcikpLCBoKFwiZGl2XCIsIHsgaWQ6IG1zZ0lkLCBjbGFzczogXCJhbGVydC1tZXNzYWdlXCIsIGlubmVySFRNTDogc2FuaXRpemVET01TdHJpbmcodGhpcy5tZXNzYWdlKSB9KSwgdGhpcy5yZW5kZXJBbGVydElucHV0cyhsYWJlbGxlZEJ5SWQpLCB0aGlzLnJlbmRlckFsZXJ0QnV0dG9ucygpKSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFsZXJ0LnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFsZXJ0LCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiBbXCJidXR0b25zQ2hhbmdlZFwiXSxcbiAgICAgICAgICAgICAgICBcImlucHV0c1wiOiBbXCJpbnB1dHNDaGFuZ2VkXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWxlcnQsIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiLnNjLWlvbi1hbGVydC1tZC1oey0tbWluLXdpZHRoOjI1MHB4Oy0td2lkdGg6YXV0bzstLW1pbi1oZWlnaHQ6YXV0bzstLWhlaWdodDphdXRvOy0tbWF4LWhlaWdodDo5MCU7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246Zml4ZWQ7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTtjb250YWluOnN0cmljdDstbXMtdG91Y2gtYWN0aW9uOm5vbmU7dG91Y2gtYWN0aW9uOm5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6MTAwMX0ub3ZlcmxheS1oaWRkZW4uc2MtaW9uLWFsZXJ0LW1kLWh7ZGlzcGxheTpub25lfS5hbGVydC10b3Auc2MtaW9uLWFsZXJ0LW1kLWh7cGFkZGluZy10b3A6NTBweDstbXMtZmxleC1hbGlnbjpzdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1tZHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt3aWR0aDp2YXIoLS13aWR0aCk7bWluLXdpZHRoOnZhcigtLW1pbi13aWR0aCk7bWF4LXdpZHRoOnZhcigtLW1heC13aWR0aCk7aGVpZ2h0OnZhcigtLWhlaWdodCk7bWluLWhlaWdodDp2YXIoLS1taW4taGVpZ2h0KTttYXgtaGVpZ2h0OnZhcigtLW1heC1oZWlnaHQpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29udGFpbjpjb250ZW50O29wYWNpdHk6MDt6LWluZGV4OjEwfS5hbGVydC10aXRsZS5zYy1pb24tYWxlcnQtbWR7bWFyZ2luLXRvcDowfS5hbGVydC1zdWItdGl0bGUuc2MtaW9uLWFsZXJ0LW1kLCAuYWxlcnQtdGl0bGUuc2MtaW9uLWFsZXJ0LW1ke21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjB9LmFsZXJ0LXN1Yi10aXRsZS5zYy1pb24tYWxlcnQtbWR7bWFyZ2luLXRvcDo1cHg7Zm9udC13ZWlnaHQ6NDAwfS5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1tZHstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7b3ZlcmZsb3cteTphdXRvO292ZXJzY3JvbGwtYmVoYXZpb3IteTpjb250YWlufS5hbGVydC1jaGVja2JveC1ncm91cC5zYy1pb24tYWxlcnQtbWQ6Oi13ZWJraXQtc2Nyb2xsYmFyLCAuYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtbWQ6Oi13ZWJraXQtc2Nyb2xsYmFyLCAuYWxlcnQtcmFkaW8tZ3JvdXAuc2MtaW9uLWFsZXJ0LW1kOjotd2Via2l0LXNjcm9sbGJhcntkaXNwbGF5Om5vbmV9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1tZHtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MTBweDtwYWRkaW5nLWJvdHRvbToxMHB4O3dpZHRoOjEwMCU7Ym9yZGVyOjA7YmFja2dyb3VuZDppbmhlcml0O2ZvbnQ6aW5oZXJpdDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtbWR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3c7d2lkdGg6MTAwJX0uYWxlcnQtYnV0dG9uLWdyb3VwLXZlcnRpY2FsLnNjLWlvbi1hbGVydC1tZHstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC13cmFwOm5vd3JhcDtmbGV4LXdyYXA6bm93cmFwfS5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LW1ke21hcmdpbi1yaWdodDowO2Rpc3BsYXk6YmxvY2s7Ym9yZGVyOjA7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MjBweDt6LWluZGV4OjB9LmFsZXJ0LWJ1dHRvbi5pb24tZm9jdXNlZC5zYy1pb24tYWxlcnQtbWQsIC5hbGVydC10YXBwYWJsZS5pb24tZm9jdXNlZC5zYy1pb24tYWxlcnQtbWR7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC0xMDAsI2U2ZTZlNil9LmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtbWR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpyb3cgbm93cmFwO2ZsZXgtZmxvdzpyb3cgbm93cmFwOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uYWxlcnQtY2hlY2tib3gtYnV0dG9uLWRpc2FibGVkLnNjLWlvbi1hbGVydC1tZCAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1tZCwgLmFsZXJ0LWlucHV0LWRpc2FibGVkLnNjLWlvbi1hbGVydC1tZCwgLmFsZXJ0LXJhZGlvLWJ1dHRvbi1kaXNhYmxlZC5zYy1pb24tYWxlcnQtbWQgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtbWR7Y3Vyc29yOmRlZmF1bHQ7b3BhY2l0eTouNTtwb2ludGVyLWV2ZW50czpub25lfS5hbGVydC10YXBwYWJsZS5zYy1pb24tYWxlcnQtbWR7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7d2lkdGg6MTAwJTtib3JkZXI6MDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2ZvbnQtc2l6ZTppbmhlcml0O2xpbmUtaGVpZ2h0Om5vcm1hbDt0ZXh0LWFsaWduOnN0YXJ0Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTtjb250YWluOnN0cmljdH0uYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZCwgLmFsZXJ0LWNoZWNrYm94LnNjLWlvbi1hbGVydC1tZCwgLmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1tZCwgLmFsZXJ0LXJhZGlvLnNjLWlvbi1hbGVydC1tZHtvdXRsaW5lOm5vbmV9LmFsZXJ0LWNoZWNrYm94LWljb24uc2MtaW9uLWFsZXJ0LW1kLCAuYWxlcnQtY2hlY2tib3gtaW5uZXIuc2MtaW9uLWFsZXJ0LW1kLCAuYWxlcnQtcmFkaW8taWNvbi5zYy1pb24tYWxlcnQtbWR7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5zYy1pb24tYWxlcnQtbWQtaHstLWJhY2tncm91bmQ6dmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKSk7LS1tYXgtd2lkdGg6MjgwcHg7Zm9udC1zaXplOjE0cHh9LmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LW1ke2JvcmRlci1yYWRpdXM6NHB4Oy13ZWJraXQtYm94LXNoYWRvdzowIDExcHggMTVweCAtN3B4IHJnYmEoMCwwLDAsLjIpLDAgMjRweCAzOHB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA5cHggNDZweCA4cHggcmdiYSgwLDAsMCwuMTIpO2JveC1zaGFkb3c6MCAxMXB4IDE1cHggLTdweCByZ2JhKDAsMCwwLC4yKSwwIDI0cHggMzhweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwwLDAsLjEyKX0uYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtbWR7cGFkZGluZy1sZWZ0OjIzcHg7cGFkZGluZy1yaWdodDoyM3B4O3BhZGRpbmctdG9wOjIwcHg7cGFkZGluZy1ib3R0b206MTVweDt0ZXh0LWFsaWduOnN0YXJ0fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtbWR7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjIzcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MjNweDstd2Via2l0LXBhZGRpbmctZW5kOjIzcHg7cGFkZGluZy1pbmxpbmUtZW5kOjIzcHh9fS5hbGVydC10aXRsZS5zYy1pb24tYWxlcnQtbWR7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NTAwfS5hbGVydC1zdWItdGl0bGUuc2MtaW9uLWFsZXJ0LW1kLCAuYWxlcnQtdGl0bGUuc2MtaW9uLWFsZXJ0LW1ke2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApfS5hbGVydC1zdWItdGl0bGUuc2MtaW9uLWFsZXJ0LW1ke2ZvbnQtc2l6ZToxNnB4fS5hbGVydC1pbnB1dC1ncm91cC5zYy1pb24tYWxlcnQtbWQsIC5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1tZHtwYWRkaW5nLWxlZnQ6MjRweDtwYWRkaW5nLXJpZ2h0OjI0cHg7cGFkZGluZy10b3A6MjBweDtwYWRkaW5nLWJvdHRvbToyMHB4O2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwjNzM3MzczKX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmFsZXJ0LWlucHV0LWdyb3VwLnNjLWlvbi1hbGVydC1tZCwgLmFsZXJ0LW1lc3NhZ2Uuc2MtaW9uLWFsZXJ0LW1ke3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDoyNHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjI0cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoyNHB4O3BhZGRpbmctaW5saW5lLWVuZDoyNHB4fX0uYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtbWR7bWF4LWhlaWdodDoyNDBweDtmb250LXNpemU6MTZweH0uYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtbWQ6ZW1wdHl7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH0uYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtbWQgKyAuYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtbWR7cGFkZGluZy10b3A6MH0uYWxlcnQtaW5wdXQuc2MtaW9uLWFsZXJ0LW1ke21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDo1cHg7bWFyZ2luLWJvdHRvbTo1cHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCNkOWQ5ZDkpO2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCMwMDApfS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtbWQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0taW9uLXBsYWNlaG9sZGVyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTQwMCwjOTk5KSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0fS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtbWQ6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0taW9uLXBsYWNlaG9sZGVyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTQwMCwjOTk5KSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0fS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtbWQ6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLWlvbi1wbGFjZWhvbGRlci1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC00MDAsIzk5OSkpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdH0uYWxlcnQtaW5wdXQuc2MtaW9uLWFsZXJ0LW1kOjotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0taW9uLXBsYWNlaG9sZGVyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTQwMCwjOTk5KSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0fS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtbWQ6OnBsYWNlaG9sZGVye2NvbG9yOnZhcigtLWlvbi1wbGFjZWhvbGRlci1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC00MDAsIzk5OSkpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdH0uYWxlcnQtaW5wdXQuc2MtaW9uLWFsZXJ0LW1kOjotbXMtY2xlYXJ7ZGlzcGxheTpub25lfS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtbWQ6Zm9jdXN7bWFyZ2luLWJvdHRvbTo0cHg7Ym9yZGVyLWJvdHRvbToycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZil9LmFsZXJ0LWNoZWNrYm94LWdyb3VwLnNjLWlvbi1hbGVydC1tZCwgLmFsZXJ0LXJhZGlvLWdyb3VwLnNjLWlvbi1hbGVydC1tZHtwb3NpdGlvbjpyZWxhdGl2ZTttYXgtaGVpZ2h0OjI0MHB4O2JvcmRlci10b3A6MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZDlkOWQ5KTtib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Q5ZDlkOSk7b3ZlcmZsb3c6YXV0b30uYWxlcnQtdGFwcGFibGUuc2MtaW9uLWFsZXJ0LW1ke3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDo0OHB4O292ZXJmbG93OmhpZGRlbn0uYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LW1ke3BhZGRpbmctbGVmdDo1MnB4O3BhZGRpbmctcmlnaHQ6MjZweDtwYWRkaW5nLXRvcDoxM3B4O3BhZGRpbmctYm90dG9tOjEzcHg7LW1zLWZsZXg6MTtmbGV4OjE7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCMyNjI2MjYpO2ZvbnQtc2l6ZToxNnB4O3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbn1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmFsZXJ0LXJhZGlvLWxhYmVsLnNjLWlvbi1hbGVydC1tZHtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6NTJweDtwYWRkaW5nLWlubGluZS1zdGFydDo1MnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MjZweDtwYWRkaW5nLWlubGluZS1lbmQ6MjZweH19LmFsZXJ0LXJhZGlvLWljb24uc2MtaW9uLWFsZXJ0LW1ke2xlZnQ6MjZweDt0b3A6MDtib3JkZXItcmFkaXVzOjUwJTtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7Ym9yZGVyLXdpZHRoOjJweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwjNzM3MzczKX1bZGlyPXJ0bF0uc2MtaW9uLWFsZXJ0LW1kLWggLmFsZXJ0LXJhZGlvLWljb24uc2MtaW9uLWFsZXJ0LW1kLCBbZGlyPXJ0bF0gLnNjLWlvbi1hbGVydC1tZC1oIC5hbGVydC1yYWRpby1pY29uLnNjLWlvbi1hbGVydC1tZCwgW2Rpcj1ydGxdLnNjLWlvbi1hbGVydC1tZCAuYWxlcnQtcmFkaW8taWNvbi5zYy1pb24tYWxlcnQtbWR7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDoyNnB4fS5hbGVydC1yYWRpby1pbm5lci5zYy1pb24tYWxlcnQtbWR7bGVmdDozcHg7dG9wOjNweDtib3JkZXItcmFkaXVzOjUwJTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMHB4O2hlaWdodDoxMHB4Oy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKTstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjI4cyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4yOHMgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjI4cyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMjhzIGN1YmljLWJlemllciguNCwwLC4yLDEpLC13ZWJraXQtdHJhbnNmb3JtIC4yOHMgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKX1bZGlyPXJ0bF0uc2MtaW9uLWFsZXJ0LW1kLWggLmFsZXJ0LXJhZGlvLWlubmVyLnNjLWlvbi1hbGVydC1tZCwgW2Rpcj1ydGxdIC5zYy1pb24tYWxlcnQtbWQtaCAuYWxlcnQtcmFkaW8taW5uZXIuc2MtaW9uLWFsZXJ0LW1kLCBbZGlyPXJ0bF0uc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC1yYWRpby1pbm5lci5zYy1pb24tYWxlcnQtbWR7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDozcHh9W2FyaWEtY2hlY2tlZD10cnVlXS5zYy1pb24tYWxlcnQtbWQgLmFsZXJ0LXJhZGlvLWxhYmVsLnNjLWlvbi1hbGVydC1tZHtjb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsIzI2MjYyNil9W2FyaWEtY2hlY2tlZD10cnVlXS5zYy1pb24tYWxlcnQtbWQgLmFsZXJ0LXJhZGlvLWljb24uc2MtaW9uLWFsZXJ0LW1ke2JvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKX1bYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1tZCAuYWxlcnQtcmFkaW8taW5uZXIuc2MtaW9uLWFsZXJ0LW1key13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfS5hbGVydC1jaGVja2JveC1sYWJlbC5zYy1pb24tYWxlcnQtbWR7cGFkZGluZy1sZWZ0OjUzcHg7cGFkZGluZy1yaWdodDoyNnB4O3BhZGRpbmctdG9wOjEzcHg7cGFkZGluZy1ib3R0b206MTNweDstbXMtZmxleDoxO2ZsZXg6MTtjb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsIzI2MjYyNik7Zm9udC1zaXplOjE2cHg7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVufVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYWxlcnQtY2hlY2tib3gtbGFiZWwuc2MtaW9uLWFsZXJ0LW1ke3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDo1M3B4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjUzcHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoyNnB4O3BhZGRpbmctaW5saW5lLWVuZDoyNnB4fX0uYWxlcnQtY2hlY2tib3gtaWNvbi5zYy1pb24tYWxlcnQtbWR7bGVmdDoyNnB4O3RvcDowO2JvcmRlci1yYWRpdXM6MnB4O3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7Ym9yZGVyLXdpZHRoOjJweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwjNzM3MzczKTtjb250YWluOnN0cmljdH1bZGlyPXJ0bF0uc2MtaW9uLWFsZXJ0LW1kLWggLmFsZXJ0LWNoZWNrYm94LWljb24uc2MtaW9uLWFsZXJ0LW1kLCBbZGlyPXJ0bF0gLnNjLWlvbi1hbGVydC1tZC1oIC5hbGVydC1jaGVja2JveC1pY29uLnNjLWlvbi1hbGVydC1tZCwgW2Rpcj1ydGxdLnNjLWlvbi1hbGVydC1tZCAuYWxlcnQtY2hlY2tib3gtaWNvbi5zYy1pb24tYWxlcnQtbWR7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDoyNnB4fVthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC1jaGVja2JveC1pY29uLnNjLWlvbi1hbGVydC1tZHtib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZik7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKX1bYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1tZCAuYWxlcnQtY2hlY2tib3gtaW5uZXIuc2MtaW9uLWFsZXJ0LW1ke2xlZnQ6M3B4O3RvcDowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjZweDtoZWlnaHQ6MTBweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO2JvcmRlci13aWR0aDoycHg7Ym9yZGVyLXRvcC13aWR0aDowO2JvcmRlci1sZWZ0LXdpZHRoOjA7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwjZmZmKX1bZGlyPXJ0bF0uc2MtaW9uLWFsZXJ0LW1kLWggW2FyaWEtY2hlY2tlZD10cnVlXS5zYy1pb24tYWxlcnQtbWQgLmFsZXJ0LWNoZWNrYm94LWlubmVyLnNjLWlvbi1hbGVydC1tZCwgW2Rpcj1ydGxdIC5zYy1pb24tYWxlcnQtbWQtaCBbYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1tZCAuYWxlcnQtY2hlY2tib3gtaW5uZXIuc2MtaW9uLWFsZXJ0LW1kLCBbZGlyPXJ0bF0uc2MtaW9uLWFsZXJ0LW1kIFthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC1jaGVja2JveC1pbm5lci5zYy1pb24tYWxlcnQtbWR7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDozcHh9LmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtbWR7cGFkZGluZy1sZWZ0OjhweDtwYWRkaW5nLXJpZ2h0OjhweDtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDstbXMtZmxleC13cmFwOndyYXAtcmV2ZXJzZTtmbGV4LXdyYXA6d3JhcC1yZXZlcnNlOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtbWR7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjhweDtwYWRkaW5nLWlubGluZS1zdGFydDo4cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo4cHg7cGFkZGluZy1pbmxpbmUtZW5kOjhweH19LmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWR7Ym9yZGVyLXJhZGl1czoycHg7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6OHB4O21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjEwcHg7cGFkZGluZy1yaWdodDoxMHB4O3BhZGRpbmctdG9wOjEwcHg7cGFkZGluZy1ib3R0b206MTBweDtwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpO2ZvbnQtd2VpZ2h0OjUwMDt0ZXh0LWFsaWduOmVuZDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7b3ZlcmZsb3c6aGlkZGVufVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZHttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjA7LXdlYmtpdC1tYXJnaW4tZW5kOjhweDttYXJnaW4taW5saW5lLWVuZDo4cHg7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjEwcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTBweDstd2Via2l0LXBhZGRpbmctZW5kOjEwcHg7cGFkZGluZy1pbmxpbmUtZW5kOjEwcHh9fS5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LW1key1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEFsZXJ0O1xufSgpKTtcbnZhciBidXR0b25DbGFzcyA9IGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7ICdhbGVydC1idXR0b24nOiB0cnVlLCAnaW9uLWZvY3VzYWJsZSc6IHRydWUsICdpb24tYWN0aXZhdGFibGUnOiB0cnVlIH0sIGdldENsYXNzTWFwKGJ1dHRvbi5jc3NDbGFzcykpO1xufTtcbmV4cG9ydCB7IEFsZXJ0IGFzIGlvbl9hbGVydCB9O1xuIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xudmFyIGhvc3RDb250ZXh0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBlbCkge1xuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcbn07XG4vKipcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cbiAqL1xudmFyIGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyAoX2EgPSB7XG4gICAgICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBfYVtcImlvbi1jb2xvci1cIiArIGNvbG9yXSA9IHRydWUsXG4gICAgICAgIF9hKSA6IHVuZGVmaW5lZDtcbn07XG52YXIgZ2V0Q2xhc3NMaXN0ID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT0gbnVsbDsgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudHJpbSgpOyB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPT0gJyc7IH0pO1xuICAgIH1cbiAgICByZXR1cm4gW107XG59O1xudmFyIGdldENsYXNzTWFwID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG1hcFtjXSA9IHRydWU7IH0pO1xuICAgIHJldHVybiBtYXA7XG59O1xudmFyIFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xudmFyIG9wZW5VUkwgPSBmdW5jdGlvbiAodXJsLCBldiwgZGlyZWN0aW9uKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByb3V0ZXI7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcbiAgICAgICAgICAgIHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcbiAgICAgICAgICAgIGlmIChyb3V0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgIH0pO1xufSk7IH07XG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9