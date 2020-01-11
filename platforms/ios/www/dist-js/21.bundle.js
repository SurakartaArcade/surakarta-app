(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

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

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-searchbar-ios.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-searchbar-ios.entry.js ***!
  \**************************************************************************/
/*! exports provided: ion_searchbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_searchbar", function() { return Searchbar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");
/* harmony import */ var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-3476b023.js */ "./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js");






var Searchbar = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.isCancelVisible = false;
        this.shouldAlignLeft = true;
        this.focused = false;
        this.noAnimate = true;
        /**
         * If `true`, enable searchbar animation.
         */
        this.animated = false;
        /**
         * Set the input's autocomplete property.
         */
        this.autocomplete = 'off';
        /**
         * Set the input's autocorrect property.
         */
        this.autocorrect = 'off';
        /**
         * Set the cancel button icon. Only applies to `md` mode.
         */
        this.cancelButtonIcon = 'md-arrow-back';
        /**
         * Set the the cancel button text. Only applies to `ios` mode.
         */
        this.cancelButtonText = 'Cancel';
        /**
         * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
         */
        this.debounce = 250;
        /**
         * If `true`, the user cannot interact with the input.
         */
        this.disabled = false;
        /**
         * A hint to the browser for which keyboard to display.
         * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
         * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
         */
        this.inputmode = 'search';
        /**
         * Set the input's placeholder.
         * `placeholder` can accept either plaintext or HTML as a string.
         * To display characters normally reserved for HTML, they
         * must be escaped. For example `<Ionic>` would become
         * `&lt;Ionic&gt;`
         *
         * For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)
         */
        this.placeholder = 'Search';
        /**
         * The icon to use as the search icon.
         */
        this.searchIcon = 'search';
        /**
         * Sets the behavior for the cancel button. Defaults to `"never"`.
         * Setting to `"focus"` shows the cancel button on focus.
         * Setting to `"never"` hides the cancel button.
         * Setting to `"always"` shows the cancel button regardless
         * of focus state.
         */
        this.showCancelButton = 'never';
        /**
         * If `true`, enable spellcheck on the input.
         */
        this.spellcheck = false;
        /**
         * Set the type of the input.
         */
        this.type = 'search';
        /**
         * the value of the searchbar.
         */
        this.value = '';
        /**
         * Clears the input field and triggers the control change.
         */
        this.onClearInput = function (ev) {
            _this.ionClear.emit();
            if (ev) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            // setTimeout() fixes https://github.com/ionic-team/ionic/issues/7527
            // wait for 4 frames
            setTimeout(function () {
                var value = _this.getValue();
                if (value !== '') {
                    _this.value = '';
                    _this.ionInput.emit();
                }
            }, 16 * 4);
        };
        /**
         * Clears the input field and tells the input to blur since
         * the clearInput function doesn't want the input to blur
         * then calls the custom cancel function if the user passed one in.
         */
        this.onCancelSearchbar = function (ev) {
            if (ev) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            _this.ionCancel.emit();
            _this.onClearInput();
            if (_this.nativeInput) {
                _this.nativeInput.blur();
            }
        };
        /**
         * Update the Searchbar input value when the input changes
         */
        this.onInput = function (ev) {
            var input = ev.target;
            if (input) {
                _this.value = input.value;
            }
            _this.ionInput.emit(ev);
        };
        /**
         * Sets the Searchbar to not focused and checks if it should align left
         * based on whether there is a value in the searchbar or not.
         */
        this.onBlur = function () {
            _this.focused = false;
            _this.ionBlur.emit();
            _this.positionElements();
        };
        /**
         * Sets the Searchbar to focused and active on input focus.
         */
        this.onFocus = function () {
            _this.focused = true;
            _this.ionFocus.emit();
            _this.positionElements();
        };
        this.ionInput = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionInput", 7);
        this.ionChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionChange", 7);
        this.ionCancel = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionCancel", 7);
        this.ionClear = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionClear", 7);
        this.ionBlur = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionBlur", 7);
        this.ionFocus = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionFocus", 7);
        this.ionStyle = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionStyle", 7);
    }
    class_1.prototype.debounceChanged = function () {
        this.ionChange = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["d"])(this.ionChange, this.debounce);
    };
    class_1.prototype.valueChanged = function () {
        var inputEl = this.nativeInput;
        var value = this.getValue();
        if (inputEl && inputEl.value !== value) {
            inputEl.value = value;
        }
        this.ionChange.emit({ value: value });
    };
    class_1.prototype.showCancelButtonChanged = function () {
        var _this = this;
        requestAnimationFrame(function () {
            _this.positionElements();
            _this.el.forceUpdate();
        });
    };
    class_1.prototype.connectedCallback = function () {
        this.emitStyle();
    };
    class_1.prototype.componentDidLoad = function () {
        var _this = this;
        if (this.showCancelButton === 'false' || this.showCancelButton === false) {
            console.warn('The boolean values of showCancelButton are deprecated. Please use "never" instead of "false".');
        }
        if (this.showCancelButton === '' || this.showCancelButton === 'true' || this.showCancelButton === true) {
            console.warn('The boolean values of showCancelButton are deprecated. Please use "focus" instead of "true".');
        }
        this.positionElements();
        this.debounceChanged();
        setTimeout(function () {
            _this.noAnimate = false;
        }, 300);
    };
    class_1.prototype.emitStyle = function () {
        this.ionStyle.emit({
            'searchbar': true
        });
    };
    /**
     * Sets focus on the specified `ion-searchbar`. Use this method instead of the global
     * `input.focus()`.
     */
    class_1.prototype.setFocus = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.nativeInput) {
                    this.nativeInput.focus();
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Returns the native `<input>` element used under the hood.
     */
    class_1.prototype.getInputElement = function () {
        return Promise.resolve(this.nativeInput);
    };
    /**
     * Positions the input search icon, placeholder, and the cancel button
     * based on the input value and if it is focused. (ios only)
     */
    class_1.prototype.positionElements = function () {
        var value = this.getValue();
        var prevAlignLeft = this.shouldAlignLeft;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var shouldAlignLeft = (!this.animated || value.trim() !== '' || !!this.focused);
        this.shouldAlignLeft = shouldAlignLeft;
        if (mode !== 'ios') {
            return;
        }
        if (prevAlignLeft !== shouldAlignLeft) {
            this.positionPlaceholder();
        }
        if (this.animated) {
            this.positionCancelButton();
        }
    };
    /**
     * Positions the input placeholder
     */
    class_1.prototype.positionPlaceholder = function () {
        var inputEl = this.nativeInput;
        if (!inputEl) {
            return;
        }
        var isRTL = document.dir === 'rtl';
        var iconEl = (this.el.shadowRoot || this.el).querySelector('.searchbar-search-icon');
        if (this.shouldAlignLeft) {
            inputEl.removeAttribute('style');
            iconEl.removeAttribute('style');
        }
        else {
            // Create a dummy span to get the placeholder width
            var doc = document;
            var tempSpan = doc.createElement('span');
            tempSpan.innerHTML = Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_5__["s"])(this.placeholder) || '';
            doc.body.appendChild(tempSpan);
            // Get the width of the span then remove it
            var textWidth = tempSpan.offsetWidth;
            tempSpan.remove();
            // Calculate the input padding
            var inputLeft = 'calc(50% - ' + (textWidth / 2) + 'px)';
            // Calculate the icon margin
            var iconLeft = 'calc(50% - ' + ((textWidth / 2) + 30) + 'px)';
            // Set the input padding start and icon margin start
            if (isRTL) {
                inputEl.style.paddingRight = inputLeft;
                iconEl.style.marginRight = iconLeft;
            }
            else {
                inputEl.style.paddingLeft = inputLeft;
                iconEl.style.marginLeft = iconLeft;
            }
        }
    };
    /**
     * Show the iOS Cancel button on focus, hide it offscreen otherwise
     */
    class_1.prototype.positionCancelButton = function () {
        var isRTL = document.dir === 'rtl';
        var cancelButton = (this.el.shadowRoot || this.el).querySelector('.searchbar-cancel-button');
        var shouldShowCancel = this.shouldShowCancelButton();
        if (cancelButton && shouldShowCancel !== this.isCancelVisible) {
            var cancelStyle = cancelButton.style;
            this.isCancelVisible = shouldShowCancel;
            if (shouldShowCancel) {
                if (isRTL) {
                    cancelStyle.marginLeft = '0';
                }
                else {
                    cancelStyle.marginRight = '0';
                }
            }
            else {
                var offset = cancelButton.offsetWidth;
                if (offset > 0) {
                    if (isRTL) {
                        cancelStyle.marginLeft = -offset + 'px';
                    }
                    else {
                        cancelStyle.marginRight = -offset + 'px';
                    }
                }
            }
        }
    };
    class_1.prototype.getValue = function () {
        return this.value || '';
    };
    class_1.prototype.hasValue = function () {
        return this.getValue() !== '';
    };
    /**
     * Determines whether or not the cancel button should be visible onscreen.
     * Cancel button should be shown if one of two conditions applies:
     * 1. `showCancelButton` is set to `always`.
     * 2. `showCancelButton` is set to `focus`, and the searchbar has been focused.
     */
    class_1.prototype.shouldShowCancelButton = function () {
        if (isCancelButtonSetToNever(this.showCancelButton) ||
            (isCancelButtonSetToFocus(this.showCancelButton) && !this.focused)) {
            return false;
        }
        return true;
    };
    class_1.prototype.render = function () {
        var _a;
        var _this = this;
        var animated = this.animated && _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__["b"].getBoolean('animated', true);
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var clearIcon = this.clearIcon || (mode === 'ios' ? 'ios-close-circle' : 'md-close');
        var searchIcon = this.searchIcon;
        var cancelButton = !isCancelButtonSetToNever(this.showCancelButton) && (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button", { "aria-label": "cancel", type: "button", tabIndex: mode === 'ios' && !this.shouldShowCancelButton() ? -1 : undefined, onMouseDown: this.onCancelSearchbar, onTouchStart: this.onCancelSearchbar, class: "searchbar-cancel-button" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null, mode === 'md'
            ? Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon", { "aria-hidden": "true", mode: mode, icon: this.cancelButtonIcon, lazy: false })
            : this.cancelButtonText)));
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { role: "search", "aria-disabled": this.disabled ? 'true' : null, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this.color)), (_a = {}, _a[mode] = true, _a['searchbar-animated'] = animated, _a['searchbar-disabled'] = this.disabled, _a['searchbar-no-animate'] = animated && this.noAnimate, _a['searchbar-has-value'] = this.hasValue(), _a['searchbar-left-aligned'] = this.shouldAlignLeft, _a['searchbar-has-focus'] = this.focused, _a['searchbar-should-show-cancel'] = this.shouldShowCancelButton(), _a)) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "searchbar-input-container" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("input", { "aria-label": "search text", disabled: this.disabled, ref: function (el) { return _this.nativeInput = el; }, class: "searchbar-input", inputMode: this.inputmode, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, placeholder: this.placeholder, type: this.type, value: this.getValue(), autoComplete: this.autocomplete, autoCorrect: this.autocorrect, spellCheck: this.spellcheck }), mode === 'md' && cancelButton, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon", { mode: mode, icon: searchIcon, lazy: false, class: "searchbar-search-icon" }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button", { "aria-label": "reset", type: "button", "no-blur": true, class: "searchbar-clear-button", onMouseDown: this.onClearInput, onTouchStart: this.onClearInput }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon", { "aria-hidden": "true", mode: mode, icon: clearIcon, lazy: false, class: "searchbar-clear-icon" }))), mode === 'ios' && cancelButton));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "debounce": ["debounceChanged"],
                "value": ["valueChanged"],
                "showCancelButton": ["showCancelButtonChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ".sc-ion-searchbar-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-ios-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios, .ion-color.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios, .ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:inherit}.searchbar-search-icon.sc-ion-searchbar-ios{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-ios{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-ios{font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-ms-clear, .searchbar-input.sc-ion-searchbar-ios::-webkit-search-cancel-button{display:none}.searchbar-cancel-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-ios > div.sc-ion-searchbar-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios{display:block}.searchbar-disabled.sc-ion-searchbar-ios-h{cursor:default;opacity:.4;pointer-events:none}.sc-ion-searchbar-ios-h{--clear-button-color:var(--ion-color-step-600,#666);--cancel-button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-text-color,#000);--icon-color:var(--ion-color-step-600,#666);--background:rgba(var(--ion-text-color-rgb,0,0,0),0.07);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;height:60px;contain:strict}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-searchbar-ios-h{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}.searchbar-input-container.sc-ion-searchbar-ios{height:36px;contain:strict}.searchbar-search-icon.sc-ion-searchbar-ios{margin-left:calc(50% - 60px);left:5px;top:0;position:absolute;width:22px;height:100%;contain:strict}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-search-icon.sc-ion-searchbar-ios{margin-left:unset;-webkit-margin-start:calc(50% - 60px);margin-inline-start:calc(50% - 60px)}}[dir=rtl].sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios, [dir=rtl] .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios, [dir=rtl].sc-ion-searchbar-ios .searchbar-search-icon.sc-ion-searchbar-ios{left:unset;right:unset;right:5px}.searchbar-input.sc-ion-searchbar-ios{padding-left:28px;padding-right:28px;padding-top:0;padding-bottom:0;border-radius:10px;height:100%;font-size:17px;font-weight:400;contain:strict}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-input.sc-ion-searchbar-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:28px;padding-inline-start:28px;-webkit-padding-end:28px;padding-inline-end:28px}}.searchbar-clear-button.sc-ion-searchbar-ios{right:0;top:0;background-position:50%;position:absolute;width:30px;height:100%;border:0;background-color:transparent}[dir=rtl].sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios, [dir=rtl] .sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios, [dir=rtl].sc-ion-searchbar-ios .searchbar-clear-button.sc-ion-searchbar-ios{left:unset;right:unset;left:0}.searchbar-clear-icon.sc-ion-searchbar-ios{width:18px;height:100%}.searchbar-cancel-button.sc-ion-searchbar-ios{padding-left:8px;padding-right:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0;background-color:transparent;font-size:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-cancel-button.sc-ion-searchbar-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:0;padding-inline-end:0}}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{margin-left:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{padding-left:30px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{padding-left:unset;-webkit-padding-start:30px;padding-inline-start:30px}}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{display:block}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios, .searchbar-animated.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{-webkit-transition:all .3s ease;transition:all .3s ease}.searchbar-animated.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-animated.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{opacity:1;pointer-events:auto}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{margin-right:-100%;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:all .3s ease;transition:all .3s ease;opacity:0;pointer-events:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{margin-right:unset;-webkit-margin-end:-100%;margin-inline-end:-100%}}.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios, .searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{-webkit-transition-duration:0ms;transition-duration:0ms}.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{color:var(--ion-color-base)}\@media (any-hover:hover){.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios:hover{color:var(--ion-color-tint)}}ion-toolbar.sc-ion-searchbar-ios-h, ion-toolbar .sc-ion-searchbar-ios-h{padding-top:1px;padding-bottom:15px;height:52px}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color), ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color){color:inherit}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios, ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios{color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios, ion-toolbar.ion-color .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:currentColor;opacity:.5}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios, ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios{background:rgba(var(--ion-color-contrast-rgb),.07);color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios, ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios{color:currentColor;opacity:.5}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
/**
 * Check if the cancel button should never be shown.
 *
 * TODO: Remove this when the `true` and `false`
 * options are removed.
 */
var isCancelButtonSetToNever = function (showCancelButton) {
    return (showCancelButton === 'never' ||
        showCancelButton === 'false' ||
        showCancelButton === false);
};
/**
 * Check if the cancel button should be shown on focus.
 *
 * TODO: Remove this when the `true` and `false`
 * options are removed.
 */
var isCancelButtonSetToFocus = function (showCancelButton) {
    return (showCancelButton === 'focus' ||
        showCancelButton === 'true' ||
        showCancelButton === true ||
        showCancelButton === '');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2luZGV4LTM0NzZiMDIzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvaW9uLXNlYXJjaGJhci1pb3MuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLWVzNS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxtQkFBbUI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxtQ0FBbUM7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdDQUFnQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0JBQWtCLEVBQUU7QUFDdEQsK0JBQStCLGlCQUFpQixFQUFFO0FBQ2xELGtDQUFrQyxpQkFBaUIsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHNCQUFzQixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxRQUFRLHVEQUFTO0FBQzlEO0FBQ0EsV0FBVyx5REFBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDa0YiLCJmaWxlIjoiMjEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBEb2VzIGEgc2ltcGxlIHNhbml0aXphdGlvbiBvZiBhbGwgZWxlbWVudHNcbiAqIGluIGFuIHVudHJ1c3RlZCBzdHJpbmdcbiAqL1xudmFyIHNhbml0aXplRE9NU3RyaW5nID0gZnVuY3Rpb24gKHVudHJ1c3RlZFN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgdW50cnVzdGVkU3RyaW5nICE9PSAnc3RyaW5nJyB8fCB1bnRydXN0ZWRTdHJpbmcgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdW50cnVzdGVkU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGUgYSBkb2N1bWVudCBmcmFnbWVudFxuICAgICAgICAgKiBzZXBhcmF0ZSBmcm9tIHRoZSBtYWluIERPTSxcbiAgICAgICAgICogY3JlYXRlIGEgZGl2IHRvIGRvIG91ciB3b3JrIGluXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgZG9jdW1lbnRGcmFnbWVudF8xID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICB2YXIgd29ya2luZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkb2N1bWVudEZyYWdtZW50XzEuYXBwZW5kQ2hpbGQod29ya2luZ0Rpdik7XG4gICAgICAgIHdvcmtpbmdEaXYuaW5uZXJIVE1MID0gdW50cnVzdGVkU3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIGFueSBlbGVtZW50c1xuICAgICAgICAgKiB0aGF0IGFyZSBibG9ja2VkXG4gICAgICAgICAqL1xuICAgICAgICBibG9ja2VkVGFncy5mb3JFYWNoKGZ1bmN0aW9uIChibG9ja2VkVGFnKSB7XG4gICAgICAgICAgICB2YXIgZ2V0RWxlbWVudHNUb1JlbW92ZSA9IGRvY3VtZW50RnJhZ21lbnRfMS5xdWVyeVNlbGVjdG9yQWxsKGJsb2NrZWRUYWcpO1xuICAgICAgICAgICAgZm9yICh2YXIgZWxlbWVudEluZGV4ID0gZ2V0RWxlbWVudHNUb1JlbW92ZS5sZW5ndGggLSAxOyBlbGVtZW50SW5kZXggPj0gMDsgZWxlbWVudEluZGV4LS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IGdldEVsZW1lbnRzVG9SZW1vdmVbZWxlbWVudEluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50RnJhZ21lbnRfMS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogV2Ugc3RpbGwgbmVlZCB0byBzYW5pdGl6ZVxuICAgICAgICAgICAgICAgICAqIHRoZSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgKiBhcyB0aGV5IGFyZSBsZWZ0IGJlaGluZFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZEVsZW1lbnRzID0gZ2V0RWxlbWVudENoaWxkcmVuKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGNoaWxkSW5kZXggPSAwOyBjaGlsZEluZGV4IDwgY2hpbGRFbGVtZW50cy5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBzYW5pdGl6ZUVsZW1lbnQoY2hpbGRFbGVtZW50c1tjaGlsZEluZGV4XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdvIHRocm91Z2ggcmVtYWluaW5nIGVsZW1lbnRzIGFuZCByZW1vdmVcbiAgICAgICAgICogbm9uLWFsbG93ZWQgYXR0cmlic1xuICAgICAgICAgKi9cbiAgICAgICAgLy8gSUUgZG9lcyBub3Qgc3VwcG9ydCAuY2hpbGRyZW4gb24gZG9jdW1lbnQgZnJhZ21lbnRzLCBvbmx5IC5jaGlsZE5vZGVzXG4gICAgICAgIHZhciBkZkNoaWxkcmVuID0gZ2V0RWxlbWVudENoaWxkcmVuKGRvY3VtZW50RnJhZ21lbnRfMSk7XG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICBmb3IgKHZhciBjaGlsZEluZGV4ID0gMDsgY2hpbGRJbmRleCA8IGRmQ2hpbGRyZW4ubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcbiAgICAgICAgICAgIHNhbml0aXplRWxlbWVudChkZkNoaWxkcmVuW2NoaWxkSW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBcHBlbmQgZG9jdW1lbnQgZnJhZ21lbnQgdG8gZGl2XG4gICAgICAgIHZhciBmcmFnbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmcmFnbWVudERpdi5hcHBlbmRDaGlsZChkb2N1bWVudEZyYWdtZW50XzEpO1xuICAgICAgICAvLyBGaXJzdCBjaGlsZCBpcyBhbHdheXMgdGhlIGRpdiB3ZSBkaWQgb3VyIHdvcmsgaW5cbiAgICAgICAgdmFyIGdldElubmVyRGl2ID0gZnJhZ21lbnREaXYucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gICAgICAgIHJldHVybiAoZ2V0SW5uZXJEaXYgIT09IG51bGwpID8gZ2V0SW5uZXJEaXYuaW5uZXJIVE1MIDogZnJhZ21lbnREaXYuaW5uZXJIVE1MO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbn07XG4vKipcbiAqIENsZWFuIHVwIGN1cnJlbnQgZWxlbWVudCBiYXNlZCBvbiBhbGxvd2VkIGF0dHJpYnV0ZXNcbiAqIGFuZCB0aGVuIHJlY3Vyc2l2ZWx5IGRpZyBkb3duIGludG8gYW55IGNoaWxkIGVsZW1lbnRzIHRvXG4gKiBjbGVhbiB0aG9zZSB1cCBhcyB3ZWxsXG4gKi9cbnZhciBzYW5pdGl6ZUVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vIElFIHVzZXMgY2hpbGROb2Rlcywgc28gaWdub3JlIG5vZGVzIHRoYXQgYXJlIG5vdCBlbGVtZW50c1xuICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBhdHRyaWJ1dGUgPSBlbGVtZW50LmF0dHJpYnV0ZXMuaXRlbShpKTtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGUubmFtZTtcbiAgICAgICAgLy8gcmVtb3ZlIG5vbi1hbGxvd2VkIGF0dHJpYnNcbiAgICAgICAgaWYgKCFhbGxvd2VkQXR0cmlidXRlcy5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNsZWFuIHVwIGFueSBhbGxvd2VkIGF0dHJpYnNcbiAgICAgICAgLy8gdGhhdCBhdHRlbXB0IHRvIGRvIGFueSBKUyBmdW5ueS1idXNpbmVzc1xuICAgICAgICB2YXIgYXR0cmlidXRlVmFsdWUgPSBhdHRyaWJ1dGUudmFsdWU7XG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICBpZiAoYXR0cmlidXRlVmFsdWUgIT0gbnVsbCAmJiBhdHRyaWJ1dGVWYWx1ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdqYXZhc2NyaXB0OicpKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTYW5pdGl6ZSBhbnkgbmVzdGVkIGNoaWxkcmVuXG4gICAgICovXG4gICAgdmFyIGNoaWxkRWxlbWVudHMgPSBnZXRFbGVtZW50Q2hpbGRyZW4oZWxlbWVudCk7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNhbml0aXplRWxlbWVudChjaGlsZEVsZW1lbnRzW2ldKTtcbiAgICB9XG59O1xuLyoqXG4gKiBJRSBkb2Vzbid0IGFsd2F5cyBzdXBwb3J0IC5jaGlsZHJlblxuICogc28gd2UgcmV2ZXJ0IHRvIC5jaGlsZE5vZGVzIGluc3RlYWRcbiAqL1xudmFyIGdldEVsZW1lbnRDaGlsZHJlbiA9IGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiAoZWwuY2hpbGRyZW4gIT0gbnVsbCkgPyBlbC5jaGlsZHJlbiA6IGVsLmNoaWxkTm9kZXM7XG59O1xudmFyIGFsbG93ZWRBdHRyaWJ1dGVzID0gWydjbGFzcycsICdpZCcsICdocmVmJywgJ3NyYycsICduYW1lJywgJ3Nsb3QnXTtcbnZhciBibG9ja2VkVGFncyA9IFsnc2NyaXB0JywgJ3N0eWxlJywgJ2lmcmFtZScsICdtZXRhJywgJ2xpbmsnLCAnb2JqZWN0JywgJ2VtYmVkJ107XG5leHBvcnQgeyBzYW5pdGl6ZURPTVN0cmluZyBhcyBzIH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGQgYXMgY3JlYXRlRXZlbnQsIGMgYXMgZ2V0SW9uTW9kZSwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtZmVlZWZmMGQuanMnO1xuaW1wb3J0IHsgYiBhcyBjb25maWcgfSBmcm9tICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlYm91bmNlRXZlbnQgfSBmcm9tICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcbmltcG9ydCB7IHMgYXMgc2FuaXRpemVET01TdHJpbmcgfSBmcm9tICcuL2luZGV4LTM0NzZiMDIzLmpzJztcbnZhciBTZWFyY2hiYXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMShob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMuaXNDYW5jZWxWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvdWxkQWxpZ25MZWZ0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm9BbmltYXRlID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgZW5hYmxlIHNlYXJjaGJhciBhbmltYXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFuaW1hdGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhlIGlucHV0J3MgYXV0b2NvbXBsZXRlIHByb3BlcnR5LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGUgPSAnb2ZmJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgaW5wdXQncyBhdXRvY29ycmVjdCBwcm9wZXJ0eS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYXV0b2NvcnJlY3QgPSAnb2ZmJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgY2FuY2VsIGJ1dHRvbiBpY29uLiBPbmx5IGFwcGxpZXMgdG8gYG1kYCBtb2RlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jYW5jZWxCdXR0b25JY29uID0gJ21kLWFycm93LWJhY2snO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSB0aGUgY2FuY2VsIGJ1dHRvbiB0ZXh0LiBPbmx5IGFwcGxpZXMgdG8gYGlvc2AgbW9kZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2FuY2VsQnV0dG9uVGV4dCA9ICdDYW5jZWwnO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSBhbW91bnQgb2YgdGltZSwgaW4gbWlsbGlzZWNvbmRzLCB0byB3YWl0IHRvIHRyaWdnZXIgdGhlIGBpb25DaGFuZ2VgIGV2ZW50IGFmdGVyIGVhY2gga2V5c3Ryb2tlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kZWJvdW5jZSA9IDI1MDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIGlucHV0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBoaW50IHRvIHRoZSBicm93c2VyIGZvciB3aGljaCBrZXlib2FyZCB0byBkaXNwbGF5LlxuICAgICAgICAgKiBQb3NzaWJsZSB2YWx1ZXM6IGBcIm5vbmVcImAsIGBcInRleHRcImAsIGBcInRlbFwiYCwgYFwidXJsXCJgLFxuICAgICAgICAgKiBgXCJlbWFpbFwiYCwgYFwibnVtZXJpY1wiYCwgYFwiZGVjaW1hbFwiYCwgYW5kIGBcInNlYXJjaFwiYC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW5wdXRtb2RlID0gJ3NlYXJjaCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhlIGlucHV0J3MgcGxhY2Vob2xkZXIuXG4gICAgICAgICAqIGBwbGFjZWhvbGRlcmAgY2FuIGFjY2VwdCBlaXRoZXIgcGxhaW50ZXh0IG9yIEhUTUwgYXMgYSBzdHJpbmcuXG4gICAgICAgICAqIFRvIGRpc3BsYXkgY2hhcmFjdGVycyBub3JtYWxseSByZXNlcnZlZCBmb3IgSFRNTCwgdGhleVxuICAgICAgICAgKiBtdXN0IGJlIGVzY2FwZWQuIEZvciBleGFtcGxlIGA8SW9uaWM+YCB3b3VsZCBiZWNvbWVcbiAgICAgICAgICogYCZsdDtJb25pYyZndDtgXG4gICAgICAgICAqXG4gICAgICAgICAqIEZvciBtb3JlIGluZm9ybWF0aW9uOiBbU2VjdXJpdHkgRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9mYXEvc2VjdXJpdHkpXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gJ1NlYXJjaCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaWNvbiB0byB1c2UgYXMgdGhlIHNlYXJjaCBpY29uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZWFyY2hJY29uID0gJ3NlYXJjaCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSBiZWhhdmlvciBmb3IgdGhlIGNhbmNlbCBidXR0b24uIERlZmF1bHRzIHRvIGBcIm5ldmVyXCJgLlxuICAgICAgICAgKiBTZXR0aW5nIHRvIGBcImZvY3VzXCJgIHNob3dzIHRoZSBjYW5jZWwgYnV0dG9uIG9uIGZvY3VzLlxuICAgICAgICAgKiBTZXR0aW5nIHRvIGBcIm5ldmVyXCJgIGhpZGVzIHRoZSBjYW5jZWwgYnV0dG9uLlxuICAgICAgICAgKiBTZXR0aW5nIHRvIGBcImFsd2F5c1wiYCBzaG93cyB0aGUgY2FuY2VsIGJ1dHRvbiByZWdhcmRsZXNzXG4gICAgICAgICAqIG9mIGZvY3VzIHN0YXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zaG93Q2FuY2VsQnV0dG9uID0gJ25ldmVyJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgZW5hYmxlIHNwZWxsY2hlY2sgb24gdGhlIGlucHV0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zcGVsbGNoZWNrID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhlIHR5cGUgb2YgdGhlIGlucHV0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50eXBlID0gJ3NlYXJjaCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0aGUgdmFsdWUgb2YgdGhlIHNlYXJjaGJhci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENsZWFycyB0aGUgaW5wdXQgZmllbGQgYW5kIHRyaWdnZXJzIHRoZSBjb250cm9sIGNoYW5nZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub25DbGVhcklucHV0ID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBfdGhpcy5pb25DbGVhci5lbWl0KCk7XG4gICAgICAgICAgICBpZiAoZXYpIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2V0VGltZW91dCgpIGZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljL2lzc3Vlcy83NTI3XG4gICAgICAgICAgICAvLyB3YWl0IGZvciA0IGZyYW1lc1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gX3RoaXMuZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmlvbklucHV0LmVtaXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxNiAqIDQpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2xlYXJzIHRoZSBpbnB1dCBmaWVsZCBhbmQgdGVsbHMgdGhlIGlucHV0IHRvIGJsdXIgc2luY2VcbiAgICAgICAgICogdGhlIGNsZWFySW5wdXQgZnVuY3Rpb24gZG9lc24ndCB3YW50IHRoZSBpbnB1dCB0byBibHVyXG4gICAgICAgICAqIHRoZW4gY2FsbHMgdGhlIGN1c3RvbSBjYW5jZWwgZnVuY3Rpb24gaWYgdGhlIHVzZXIgcGFzc2VkIG9uZSBpbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub25DYW5jZWxTZWFyY2hiYXIgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIGlmIChldikge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5pb25DYW5jZWwuZW1pdCgpO1xuICAgICAgICAgICAgX3RoaXMub25DbGVhcklucHV0KCk7XG4gICAgICAgICAgICBpZiAoX3RoaXMubmF0aXZlSW5wdXQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5uYXRpdmVJbnB1dC5ibHVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGUgdGhlIFNlYXJjaGJhciBpbnB1dCB2YWx1ZSB3aGVuIHRoZSBpbnB1dCBjaGFuZ2VzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uSW5wdXQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IGV2LnRhcmdldDtcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5pb25JbnB1dC5lbWl0KGV2KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIFNlYXJjaGJhciB0byBub3QgZm9jdXNlZCBhbmQgY2hlY2tzIGlmIGl0IHNob3VsZCBhbGlnbiBsZWZ0XG4gICAgICAgICAqIGJhc2VkIG9uIHdoZXRoZXIgdGhlcmUgaXMgYSB2YWx1ZSBpbiB0aGUgc2VhcmNoYmFyIG9yIG5vdC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub25CbHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgX3RoaXMuaW9uQmx1ci5lbWl0KCk7XG4gICAgICAgICAgICBfdGhpcy5wb3NpdGlvbkVsZW1lbnRzKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSBTZWFyY2hiYXIgdG8gZm9jdXNlZCBhbmQgYWN0aXZlIG9uIGlucHV0IGZvY3VzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbkZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgICAgICAgICBfdGhpcy5pb25Gb2N1cy5lbWl0KCk7XG4gICAgICAgICAgICBfdGhpcy5wb3NpdGlvbkVsZW1lbnRzKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW9uSW5wdXQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbklucHV0XCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQ2hhbmdlXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkNhbmNlbCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQ2FuY2VsXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkNsZWFyID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DbGVhclwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25CbHVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25CbHVyXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Gb2N1c1wiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TdHlsZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU3R5bGVcIiwgNyk7XG4gICAgfVxuICAgIGNsYXNzXzEucHJvdG90eXBlLmRlYm91bmNlQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pb25DaGFuZ2UgPSBkZWJvdW5jZUV2ZW50KHRoaXMuaW9uQ2hhbmdlLCB0aGlzLmRlYm91bmNlKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnZhbHVlQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlucHV0RWwgPSB0aGlzLm5hdGl2ZUlucHV0O1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICAgIGlmIChpbnB1dEVsICYmIGlucHV0RWwudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBpbnB1dEVsLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pb25DaGFuZ2UuZW1pdCh7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnNob3dDYW5jZWxCdXR0b25DaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMucG9zaXRpb25FbGVtZW50cygpO1xuICAgICAgICAgICAgX3RoaXMuZWwuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbXBvbmVudERpZExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnNob3dDYW5jZWxCdXR0b24gPT09ICdmYWxzZScgfHwgdGhpcy5zaG93Q2FuY2VsQnV0dG9uID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdUaGUgYm9vbGVhbiB2YWx1ZXMgb2Ygc2hvd0NhbmNlbEJ1dHRvbiBhcmUgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBcIm5ldmVyXCIgaW5zdGVhZCBvZiBcImZhbHNlXCIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2hvd0NhbmNlbEJ1dHRvbiA9PT0gJycgfHwgdGhpcy5zaG93Q2FuY2VsQnV0dG9uID09PSAndHJ1ZScgfHwgdGhpcy5zaG93Q2FuY2VsQnV0dG9uID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBib29sZWFuIHZhbHVlcyBvZiBzaG93Q2FuY2VsQnV0dG9uIGFyZSBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIFwiZm9jdXNcIiBpbnN0ZWFkIG9mIFwidHJ1ZVwiLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9zaXRpb25FbGVtZW50cygpO1xuICAgICAgICB0aGlzLmRlYm91bmNlQ2hhbmdlZCgpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLm5vQW5pbWF0ZSA9IGZhbHNlO1xuICAgICAgICB9LCAzMDApO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZW1pdFN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlvblN0eWxlLmVtaXQoe1xuICAgICAgICAgICAgJ3NlYXJjaGJhcic6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIGZvY3VzIG9uIHRoZSBzcGVjaWZpZWQgYGlvbi1zZWFyY2hiYXJgLiBVc2UgdGhpcyBtZXRob2QgaW5zdGVhZCBvZiB0aGUgZ2xvYmFsXG4gICAgICogYGlucHV0LmZvY3VzKClgLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnNldEZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubmF0aXZlSW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVJbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuYXRpdmUgYDxpbnB1dD5gIGVsZW1lbnQgdXNlZCB1bmRlciB0aGUgaG9vZC5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5nZXRJbnB1dEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5uYXRpdmVJbnB1dCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbnMgdGhlIGlucHV0IHNlYXJjaCBpY29uLCBwbGFjZWhvbGRlciwgYW5kIHRoZSBjYW5jZWwgYnV0dG9uXG4gICAgICogYmFzZWQgb24gdGhlIGlucHV0IHZhbHVlIGFuZCBpZiBpdCBpcyBmb2N1c2VkLiAoaW9zIG9ubHkpXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUucG9zaXRpb25FbGVtZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgICB2YXIgcHJldkFsaWduTGVmdCA9IHRoaXMuc2hvdWxkQWxpZ25MZWZ0O1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHZhciBzaG91bGRBbGlnbkxlZnQgPSAoIXRoaXMuYW5pbWF0ZWQgfHwgdmFsdWUudHJpbSgpICE9PSAnJyB8fCAhIXRoaXMuZm9jdXNlZCk7XG4gICAgICAgIHRoaXMuc2hvdWxkQWxpZ25MZWZ0ID0gc2hvdWxkQWxpZ25MZWZ0O1xuICAgICAgICBpZiAobW9kZSAhPT0gJ2lvcycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJldkFsaWduTGVmdCAhPT0gc2hvdWxkQWxpZ25MZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uUGxhY2Vob2xkZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hbmltYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkNhbmNlbEJ1dHRvbigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbnMgdGhlIGlucHV0IHBsYWNlaG9sZGVyXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUucG9zaXRpb25QbGFjZWhvbGRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlucHV0RWwgPSB0aGlzLm5hdGl2ZUlucHV0O1xuICAgICAgICBpZiAoIWlucHV0RWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNSVEwgPSBkb2N1bWVudC5kaXIgPT09ICdydGwnO1xuICAgICAgICB2YXIgaWNvbkVsID0gKHRoaXMuZWwuc2hhZG93Um9vdCB8fCB0aGlzLmVsKS5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoYmFyLXNlYXJjaC1pY29uJyk7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZEFsaWduTGVmdCkge1xuICAgICAgICAgICAgaW5wdXRFbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICBpY29uRWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgZHVtbXkgc3BhbiB0byBnZXQgdGhlIHBsYWNlaG9sZGVyIHdpZHRoXG4gICAgICAgICAgICB2YXIgZG9jID0gZG9jdW1lbnQ7XG4gICAgICAgICAgICB2YXIgdGVtcFNwYW4gPSBkb2MuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdGVtcFNwYW4uaW5uZXJIVE1MID0gc2FuaXRpemVET01TdHJpbmcodGhpcy5wbGFjZWhvbGRlcikgfHwgJyc7XG4gICAgICAgICAgICBkb2MuYm9keS5hcHBlbmRDaGlsZCh0ZW1wU3Bhbik7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIHdpZHRoIG9mIHRoZSBzcGFuIHRoZW4gcmVtb3ZlIGl0XG4gICAgICAgICAgICB2YXIgdGV4dFdpZHRoID0gdGVtcFNwYW4ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB0ZW1wU3Bhbi5yZW1vdmUoKTtcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgaW5wdXQgcGFkZGluZ1xuICAgICAgICAgICAgdmFyIGlucHV0TGVmdCA9ICdjYWxjKDUwJSAtICcgKyAodGV4dFdpZHRoIC8gMikgKyAncHgpJztcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgaWNvbiBtYXJnaW5cbiAgICAgICAgICAgIHZhciBpY29uTGVmdCA9ICdjYWxjKDUwJSAtICcgKyAoKHRleHRXaWR0aCAvIDIpICsgMzApICsgJ3B4KSc7XG4gICAgICAgICAgICAvLyBTZXQgdGhlIGlucHV0IHBhZGRpbmcgc3RhcnQgYW5kIGljb24gbWFyZ2luIHN0YXJ0XG4gICAgICAgICAgICBpZiAoaXNSVEwpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEVsLnN0eWxlLnBhZGRpbmdSaWdodCA9IGlucHV0TGVmdDtcbiAgICAgICAgICAgICAgICBpY29uRWwuc3R5bGUubWFyZ2luUmlnaHQgPSBpY29uTGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlucHV0RWwuc3R5bGUucGFkZGluZ0xlZnQgPSBpbnB1dExlZnQ7XG4gICAgICAgICAgICAgICAgaWNvbkVsLnN0eWxlLm1hcmdpbkxlZnQgPSBpY29uTGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2hvdyB0aGUgaU9TIENhbmNlbCBidXR0b24gb24gZm9jdXMsIGhpZGUgaXQgb2Zmc2NyZWVuIG90aGVyd2lzZVxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnBvc2l0aW9uQ2FuY2VsQnV0dG9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXNSVEwgPSBkb2N1bWVudC5kaXIgPT09ICdydGwnO1xuICAgICAgICB2YXIgY2FuY2VsQnV0dG9uID0gKHRoaXMuZWwuc2hhZG93Um9vdCB8fCB0aGlzLmVsKS5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24nKTtcbiAgICAgICAgdmFyIHNob3VsZFNob3dDYW5jZWwgPSB0aGlzLnNob3VsZFNob3dDYW5jZWxCdXR0b24oKTtcbiAgICAgICAgaWYgKGNhbmNlbEJ1dHRvbiAmJiBzaG91bGRTaG93Q2FuY2VsICE9PSB0aGlzLmlzQ2FuY2VsVmlzaWJsZSkge1xuICAgICAgICAgICAgdmFyIGNhbmNlbFN0eWxlID0gY2FuY2VsQnV0dG9uLnN0eWxlO1xuICAgICAgICAgICAgdGhpcy5pc0NhbmNlbFZpc2libGUgPSBzaG91bGRTaG93Q2FuY2VsO1xuICAgICAgICAgICAgaWYgKHNob3VsZFNob3dDYW5jZWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNSVEwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsU3R5bGUubWFyZ2luTGVmdCA9ICcwJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbFN0eWxlLm1hcmdpblJpZ2h0ID0gJzAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBjYW5jZWxCdXR0b24ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzUlRMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxTdHlsZS5tYXJnaW5MZWZ0ID0gLW9mZnNldCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxTdHlsZS5tYXJnaW5SaWdodCA9IC1vZmZzZXQgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgfHwgJyc7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5oYXNWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoKSAhPT0gJyc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBjYW5jZWwgYnV0dG9uIHNob3VsZCBiZSB2aXNpYmxlIG9uc2NyZWVuLlxuICAgICAqIENhbmNlbCBidXR0b24gc2hvdWxkIGJlIHNob3duIGlmIG9uZSBvZiB0d28gY29uZGl0aW9ucyBhcHBsaWVzOlxuICAgICAqIDEuIGBzaG93Q2FuY2VsQnV0dG9uYCBpcyBzZXQgdG8gYGFsd2F5c2AuXG4gICAgICogMi4gYHNob3dDYW5jZWxCdXR0b25gIGlzIHNldCB0byBgZm9jdXNgLCBhbmQgdGhlIHNlYXJjaGJhciBoYXMgYmVlbiBmb2N1c2VkLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnNob3VsZFNob3dDYW5jZWxCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc0NhbmNlbEJ1dHRvblNldFRvTmV2ZXIodGhpcy5zaG93Q2FuY2VsQnV0dG9uKSB8fFxuICAgICAgICAgICAgKGlzQ2FuY2VsQnV0dG9uU2V0VG9Gb2N1cyh0aGlzLnNob3dDYW5jZWxCdXR0b24pICYmICF0aGlzLmZvY3VzZWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGFuaW1hdGVkID0gdGhpcy5hbmltYXRlZCAmJiBjb25maWcuZ2V0Qm9vbGVhbignYW5pbWF0ZWQnLCB0cnVlKTtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICB2YXIgY2xlYXJJY29uID0gdGhpcy5jbGVhckljb24gfHwgKG1vZGUgPT09ICdpb3MnID8gJ2lvcy1jbG9zZS1jaXJjbGUnIDogJ21kLWNsb3NlJyk7XG4gICAgICAgIHZhciBzZWFyY2hJY29uID0gdGhpcy5zZWFyY2hJY29uO1xuICAgICAgICB2YXIgY2FuY2VsQnV0dG9uID0gIWlzQ2FuY2VsQnV0dG9uU2V0VG9OZXZlcih0aGlzLnNob3dDYW5jZWxCdXR0b24pICYmIChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IFwiY2FuY2VsXCIsIHR5cGU6IFwiYnV0dG9uXCIsIHRhYkluZGV4OiBtb2RlID09PSAnaW9zJyAmJiAhdGhpcy5zaG91bGRTaG93Q2FuY2VsQnV0dG9uKCkgPyAtMSA6IHVuZGVmaW5lZCwgb25Nb3VzZURvd246IHRoaXMub25DYW5jZWxTZWFyY2hiYXIsIG9uVG91Y2hTdGFydDogdGhpcy5vbkNhbmNlbFNlYXJjaGJhciwgY2xhc3M6IFwic2VhcmNoYmFyLWNhbmNlbC1idXR0b25cIiB9LCBoKFwiZGl2XCIsIG51bGwsIG1vZGUgPT09ICdtZCdcbiAgICAgICAgICAgID8gaChcImlvbi1pY29uXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgbW9kZTogbW9kZSwgaWNvbjogdGhpcy5jYW5jZWxCdXR0b25JY29uLCBsYXp5OiBmYWxzZSB9KVxuICAgICAgICAgICAgOiB0aGlzLmNhbmNlbEJ1dHRvblRleHQpKSk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IHJvbGU6IFwic2VhcmNoXCIsIFwiYXJpYS1kaXNhYmxlZFwiOiB0aGlzLmRpc2FibGVkID8gJ3RydWUnIDogbnVsbCwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpKSwgKF9hID0ge30sIF9hW21vZGVdID0gdHJ1ZSwgX2FbJ3NlYXJjaGJhci1hbmltYXRlZCddID0gYW5pbWF0ZWQsIF9hWydzZWFyY2hiYXItZGlzYWJsZWQnXSA9IHRoaXMuZGlzYWJsZWQsIF9hWydzZWFyY2hiYXItbm8tYW5pbWF0ZSddID0gYW5pbWF0ZWQgJiYgdGhpcy5ub0FuaW1hdGUsIF9hWydzZWFyY2hiYXItaGFzLXZhbHVlJ10gPSB0aGlzLmhhc1ZhbHVlKCksIF9hWydzZWFyY2hiYXItbGVmdC1hbGlnbmVkJ10gPSB0aGlzLnNob3VsZEFsaWduTGVmdCwgX2FbJ3NlYXJjaGJhci1oYXMtZm9jdXMnXSA9IHRoaXMuZm9jdXNlZCwgX2FbJ3NlYXJjaGJhci1zaG91bGQtc2hvdy1jYW5jZWwnXSA9IHRoaXMuc2hvdWxkU2hvd0NhbmNlbEJ1dHRvbigpLCBfYSkpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJzZWFyY2hiYXItaW5wdXQtY29udGFpbmVyXCIgfSwgaChcImlucHV0XCIsIHsgXCJhcmlhLWxhYmVsXCI6IFwic2VhcmNoIHRleHRcIiwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsIHJlZjogZnVuY3Rpb24gKGVsKSB7IHJldHVybiBfdGhpcy5uYXRpdmVJbnB1dCA9IGVsOyB9LCBjbGFzczogXCJzZWFyY2hiYXItaW5wdXRcIiwgaW5wdXRNb2RlOiB0aGlzLmlucHV0bW9kZSwgb25JbnB1dDogdGhpcy5vbklucHV0LCBvbkJsdXI6IHRoaXMub25CbHVyLCBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLCB0eXBlOiB0aGlzLnR5cGUsIHZhbHVlOiB0aGlzLmdldFZhbHVlKCksIGF1dG9Db21wbGV0ZTogdGhpcy5hdXRvY29tcGxldGUsIGF1dG9Db3JyZWN0OiB0aGlzLmF1dG9jb3JyZWN0LCBzcGVsbENoZWNrOiB0aGlzLnNwZWxsY2hlY2sgfSksIG1vZGUgPT09ICdtZCcgJiYgY2FuY2VsQnV0dG9uLCBoKFwiaW9uLWljb25cIiwgeyBtb2RlOiBtb2RlLCBpY29uOiBzZWFyY2hJY29uLCBsYXp5OiBmYWxzZSwgY2xhc3M6IFwic2VhcmNoYmFyLXNlYXJjaC1pY29uXCIgfSksIGgoXCJidXR0b25cIiwgeyBcImFyaWEtbGFiZWxcIjogXCJyZXNldFwiLCB0eXBlOiBcImJ1dHRvblwiLCBcIm5vLWJsdXJcIjogdHJ1ZSwgY2xhc3M6IFwic2VhcmNoYmFyLWNsZWFyLWJ1dHRvblwiLCBvbk1vdXNlRG93bjogdGhpcy5vbkNsZWFySW5wdXQsIG9uVG91Y2hTdGFydDogdGhpcy5vbkNsZWFySW5wdXQgfSwgaChcImlvbi1pY29uXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgbW9kZTogbW9kZSwgaWNvbjogY2xlYXJJY29uLCBsYXp5OiBmYWxzZSwgY2xhc3M6IFwic2VhcmNoYmFyLWNsZWFyLWljb25cIiB9KSkpLCBtb2RlID09PSAnaW9zJyAmJiBjYW5jZWxCdXR0b24pKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEsIFwid2F0Y2hlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJkZWJvdW5jZVwiOiBbXCJkZWJvdW5jZUNoYW5nZWRcIl0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBbXCJ2YWx1ZUNoYW5nZWRcIl0sXG4gICAgICAgICAgICAgICAgXCJzaG93Q2FuY2VsQnV0dG9uXCI6IFtcInNob3dDYW5jZWxCdXR0b25DaGFuZ2VkXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCIuc2MtaW9uLXNlYXJjaGJhci1pb3MtaHstLXBsYWNlaG9sZGVyLWNvbG9yOmluaXRpYWw7LS1wbGFjZWhvbGRlci1mb250LXN0eWxlOmluaXRpYWw7LS1wbGFjZWhvbGRlci1mb250LXdlaWdodDppbml0aWFsOy0tcGxhY2Vob2xkZXItb3BhY2l0eTouNTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjEwMCU7Y29sb3I6dmFyKC0tY29sb3IpO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9Lmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLWlvcy1oe2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Lmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3N7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9Lmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvcywgLmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItY2xlYXItYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9zLCAuaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3tjb2xvcjppbmhlcml0fS5zZWFyY2hiYXItc2VhcmNoLWljb24uc2MtaW9uLXNlYXJjaGJhci1pb3N7Y29sb3I6dmFyKC0taWNvbi1jb2xvcik7cG9pbnRlci1ldmVudHM6bm9uZX0uc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lci5zYy1pb24tc2VhcmNoYmFyLWlvc3tkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LW5lZ2F0aXZlOjE7ZmxleC1zaHJpbms6MTt3aWR0aDoxMDAlfS5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3N7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7Ym9yZGVyOjA7b3V0bGluZTpub25lO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Zm9udC1mYW1pbHk6aW5oZXJpdDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9LnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvczo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXN0eWxlOnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGUpO2ZvbnQtd2VpZ2h0OnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0KTtvcGFjaXR5OnZhcigtLXBsYWNlaG9sZGVyLW9wYWNpdHkpfS5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3M6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zOi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXN0eWxlOnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGUpO2ZvbnQtd2VpZ2h0OnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0KTtvcGFjaXR5OnZhcigtLXBsYWNlaG9sZGVyLW9wYWNpdHkpfS5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3M6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXN0eWxlOnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGUpO2ZvbnQtd2VpZ2h0OnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0KTtvcGFjaXR5OnZhcigtLXBsYWNlaG9sZGVyLW9wYWNpdHkpfS5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3M6OnBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc3R5bGU6dmFyKC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZSk7Zm9udC13ZWlnaHQ6dmFyKC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQpO29wYWNpdHk6dmFyKC0tcGxhY2Vob2xkZXItb3BhY2l0eSl9LnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvczo6LW1zLWNsZWFyLCAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9ue2Rpc3BsYXk6bm9uZX0uc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO2Rpc3BsYXk6bm9uZTtoZWlnaHQ6MTAwJTtib3JkZXI6MDtvdXRsaW5lOm5vbmU7Y29sb3I6dmFyKC0tY2FuY2VsLWJ1dHRvbi1jb2xvcik7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfS5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvcyA+IGRpdi5zYy1pb24tc2VhcmNoYmFyLWlvc3tkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3ttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtkaXNwbGF5Om5vbmU7bWluLWhlaWdodDowO291dGxpbmU6bm9uZTtjb2xvcjp2YXIoLS1jbGVhci1idXR0b24tY29sb3IpOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX0uc2VhcmNoYmFyLWhhcy12YWx1ZS5zZWFyY2hiYXItaGFzLWZvY3VzLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7ZGlzcGxheTpibG9ja30uc2VhcmNoYmFyLWRpc2FibGVkLnNjLWlvbi1zZWFyY2hiYXItaW9zLWh7Y3Vyc29yOmRlZmF1bHQ7b3BhY2l0eTouNDtwb2ludGVyLWV2ZW50czpub25lfS5zYy1pb24tc2VhcmNoYmFyLWlvcy1oey0tY2xlYXItYnV0dG9uLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwjNjY2KTstLWNhbmNlbC1idXR0b24tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZik7LS1jb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKTstLWljb24tY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCM2NjYpOy0tYmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksMC4wNyk7cGFkZGluZy1sZWZ0OjEycHg7cGFkZGluZy1yaWdodDoxMnB4O3BhZGRpbmctdG9wOjEycHg7cGFkZGluZy1ib3R0b206MTJweDtoZWlnaHQ6NjBweDtjb250YWluOnN0cmljdH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LnNjLWlvbi1zZWFyY2hiYXItaW9zLWh7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjEycHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTJweDstd2Via2l0LXBhZGRpbmctZW5kOjEycHg7cGFkZGluZy1pbmxpbmUtZW5kOjEycHh9fS5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyLnNjLWlvbi1zZWFyY2hiYXItaW9ze2hlaWdodDozNnB4O2NvbnRhaW46c3RyaWN0fS5zZWFyY2hiYXItc2VhcmNoLWljb24uc2MtaW9uLXNlYXJjaGJhci1pb3N7bWFyZ2luLWxlZnQ6Y2FsYyg1MCUgLSA2MHB4KTtsZWZ0OjVweDt0b3A6MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoyMnB4O2hlaWdodDoxMDAlO2NvbnRhaW46c3RyaWN0fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItaW9ze21hcmdpbi1sZWZ0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OmNhbGMoNTAlIC0gNjBweCk7bWFyZ2luLWlubGluZS1zdGFydDpjYWxjKDUwJSAtIDYwcHgpfX1bZGlyPXJ0bF0uc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItaW9zLCBbZGlyPXJ0bF0gLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvcywgW2Rpcj1ydGxdLnNjLWlvbi1zZWFyY2hiYXItaW9zIC5zZWFyY2hiYXItc2VhcmNoLWljb24uc2MtaW9uLXNlYXJjaGJhci1pb3N7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDo1cHh9LnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvc3twYWRkaW5nLWxlZnQ6MjhweDtwYWRkaW5nLXJpZ2h0OjI4cHg7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO2JvcmRlci1yYWRpdXM6MTBweDtoZWlnaHQ6MTAwJTtmb250LXNpemU6MTdweDtmb250LXdlaWdodDo0MDA7Y29udGFpbjpzdHJpY3R9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3N7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjI4cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MjhweDstd2Via2l0LXBhZGRpbmctZW5kOjI4cHg7cGFkZGluZy1pbmxpbmUtZW5kOjI4cHh9fS5zZWFyY2hiYXItY2xlYXItYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9ze3JpZ2h0OjA7dG9wOjA7YmFja2dyb3VuZC1wb3NpdGlvbjo1MCU7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MzBweDtoZWlnaHQ6MTAwJTtib3JkZXI6MDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fVtkaXI9cnRsXS5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItY2xlYXItYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9zLCBbZGlyPXJ0bF0gLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3MsIFtkaXI9cnRsXS5zYy1pb24tc2VhcmNoYmFyLWlvcyAuc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3tsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O2xlZnQ6MH0uc2VhcmNoYmFyLWNsZWFyLWljb24uc2MtaW9uLXNlYXJjaGJhci1pb3N7d2lkdGg6MThweDtoZWlnaHQ6MTAwJX0uc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7cGFkZGluZy1sZWZ0OjhweDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2ZvbnQtc2l6ZToxNnB4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjhweDtwYWRkaW5nLWlubGluZS1zdGFydDo4cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDowO3BhZGRpbmctaW5saW5lLWVuZDowfX0uc2VhcmNoYmFyLWxlZnQtYWxpZ25lZC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItc2VhcmNoLWljb24uc2MtaW9uLXNlYXJjaGJhci1pb3N7bWFyZ2luLWxlZnQ6MH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LnNlYXJjaGJhci1sZWZ0LWFsaWduZWQuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItaW9ze21hcmdpbi1sZWZ0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjA7bWFyZ2luLWlubGluZS1zdGFydDowfX0uc2VhcmNoYmFyLWxlZnQtYWxpZ25lZC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3N7cGFkZGluZy1sZWZ0OjMwcHh9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5zZWFyY2hiYXItbGVmdC1hbGlnbmVkLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvc3twYWRkaW5nLWxlZnQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjMwcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MzBweH19LnNlYXJjaGJhci1hbmltYXRlZC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvcywgLnNlYXJjaGJhci1oYXMtZm9jdXMuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3MsIC5zZWFyY2hiYXItc2hvdWxkLXNob3ctY2FuY2VsLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9ze2Rpc3BsYXk6YmxvY2t9LnNlYXJjaGJhci1hbmltYXRlZC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3MsIC5zZWFyY2hiYXItYW5pbWF0ZWQuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItaW9zey13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjNzIGVhc2U7dHJhbnNpdGlvbjphbGwgLjNzIGVhc2V9LnNlYXJjaGJhci1hbmltYXRlZC5zZWFyY2hiYXItaGFzLWZvY3VzLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9zLCAuc2VhcmNoYmFyLWFuaW1hdGVkLnNlYXJjaGJhci1zaG91bGQtc2hvdy1jYW5jZWwuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7b3BhY2l0eToxO3BvaW50ZXItZXZlbnRzOmF1dG99LnNlYXJjaGJhci1hbmltYXRlZC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3ttYXJnaW4tcmlnaHQ6LTEwMCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTstd2Via2l0LXRyYW5zaXRpb246YWxsIC4zcyBlYXNlO3RyYW5zaXRpb246YWxsIC4zcyBlYXNlO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuc2VhcmNoYmFyLWFuaW1hdGVkLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9ze21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1lbmQ6LTEwMCU7bWFyZ2luLWlubGluZS1lbmQ6LTEwMCV9fS5zZWFyY2hiYXItbm8tYW5pbWF0ZS5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvcywgLnNlYXJjaGJhci1uby1hbmltYXRlLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvcywgLnNlYXJjaGJhci1uby1hbmltYXRlLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3std2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246MG1zO3RyYW5zaXRpb24tZHVyYXRpb246MG1zfS5pb24tY29sb3Iuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfVxcQG1lZGlhIChhbnktaG92ZXI6aG92ZXIpey5pb24tY29sb3Iuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3M6aG92ZXJ7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXRpbnQpfX1pb24tdG9vbGJhci5zYy1pb24tc2VhcmNoYmFyLWlvcy1oLCBpb24tdG9vbGJhciAuc2MtaW9uLXNlYXJjaGJhci1pb3MtaHtwYWRkaW5nLXRvcDoxcHg7cGFkZGluZy1ib3R0b206MTVweDtoZWlnaHQ6NTJweH1pb24tdG9vbGJhci5pb24tY29sb3Iuc2MtaW9uLXNlYXJjaGJhci1pb3MtaDpub3QoLmlvbi1jb2xvciksIGlvbi10b29sYmFyLmlvbi1jb2xvciAuc2MtaW9uLXNlYXJjaGJhci1pb3MtaDpub3QoLmlvbi1jb2xvcil7Y29sb3I6aW5oZXJpdH1pb24tdG9vbGJhci5pb24tY29sb3Iuc2MtaW9uLXNlYXJjaGJhci1pb3MtaDpub3QoLmlvbi1jb2xvcikgLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9zLCBpb24tdG9vbGJhci5pb24tY29sb3IgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWg6bm90KC5pb24tY29sb3IpIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3tjb2xvcjpjdXJyZW50Q29sb3J9aW9uLXRvb2xiYXIuaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvcywgaW9uLXRvb2xiYXIuaW9uLWNvbG9yIC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItc2VhcmNoLWljb24uc2MtaW9uLXNlYXJjaGJhci1pb3N7Y29sb3I6Y3VycmVudENvbG9yO29wYWNpdHk6LjV9aW9uLXRvb2xiYXIuaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItaW9zLWg6bm90KC5pb24tY29sb3IpIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3MsIGlvbi10b29sYmFyLmlvbi1jb2xvciAuc2MtaW9uLXNlYXJjaGJhci1pb3MtaDpub3QoLmlvbi1jb2xvcikgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvc3tiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYiksLjA3KTtjb2xvcjpjdXJyZW50Q29sb3J9aW9uLXRvb2xiYXIuaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItaW9zLWg6bm90KC5pb24tY29sb3IpIC5zZWFyY2hiYXItY2xlYXItYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9zLCBpb24tdG9vbGJhci5pb24tY29sb3IgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWg6bm90KC5pb24tY29sb3IpIC5zZWFyY2hiYXItY2xlYXItYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9ze2NvbG9yOmN1cnJlbnRDb2xvcjtvcGFjaXR5Oi41fVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NfMTtcbn0oKSk7XG4vKipcbiAqIENoZWNrIGlmIHRoZSBjYW5jZWwgYnV0dG9uIHNob3VsZCBuZXZlciBiZSBzaG93bi5cbiAqXG4gKiBUT0RPOiBSZW1vdmUgdGhpcyB3aGVuIHRoZSBgdHJ1ZWAgYW5kIGBmYWxzZWBcbiAqIG9wdGlvbnMgYXJlIHJlbW92ZWQuXG4gKi9cbnZhciBpc0NhbmNlbEJ1dHRvblNldFRvTmV2ZXIgPSBmdW5jdGlvbiAoc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgIHJldHVybiAoc2hvd0NhbmNlbEJ1dHRvbiA9PT0gJ25ldmVyJyB8fFxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uID09PSAnZmFsc2UnIHx8XG4gICAgICAgIHNob3dDYW5jZWxCdXR0b24gPT09IGZhbHNlKTtcbn07XG4vKipcbiAqIENoZWNrIGlmIHRoZSBjYW5jZWwgYnV0dG9uIHNob3VsZCBiZSBzaG93biBvbiBmb2N1cy5cbiAqXG4gKiBUT0RPOiBSZW1vdmUgdGhpcyB3aGVuIHRoZSBgdHJ1ZWAgYW5kIGBmYWxzZWBcbiAqIG9wdGlvbnMgYXJlIHJlbW92ZWQuXG4gKi9cbnZhciBpc0NhbmNlbEJ1dHRvblNldFRvRm9jdXMgPSBmdW5jdGlvbiAoc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgIHJldHVybiAoc2hvd0NhbmNlbEJ1dHRvbiA9PT0gJ2ZvY3VzJyB8fFxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uID09PSAndHJ1ZScgfHxcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbiA9PT0gdHJ1ZSB8fFxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uID09PSAnJyk7XG59O1xuZXhwb3J0IHsgU2VhcmNoYmFyIGFzIGlvbl9zZWFyY2hiYXIgfTtcbiIsImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbnZhciBob3N0Q29udGV4dCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZWwpIHtcbiAgICByZXR1cm4gZWwuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGw7XG59O1xuLyoqXG4gKiBDcmVhdGUgdGhlIG1vZGUgYW5kIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGNsYXNzZXMgcGFzc2VkIGluXG4gKi9cbnZhciBjcmVhdGVDb2xvckNsYXNzZXMgPSBmdW5jdGlvbiAoY29sb3IpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICYmIGNvbG9yLmxlbmd0aCA+IDApID8gKF9hID0ge1xuICAgICAgICAgICAgJ2lvbi1jb2xvcic6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgX2FbXCJpb24tY29sb3ItXCIgKyBjb2xvcl0gPSB0cnVlLFxuICAgICAgICBfYSkgOiB1bmRlZmluZWQ7XG59O1xudmFyIGdldENsYXNzTGlzdCA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgcmV0dXJuIGFycmF5XG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9IG51bGw7IH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRyaW0oKTsgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT09ICcnOyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xufTtcbnZhciBnZXRDbGFzc01hcCA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XG4gICAgdmFyIG1hcCA9IHt9O1xuICAgIGdldENsYXNzTGlzdChjbGFzc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7IHJldHVybiBtYXBbY10gPSB0cnVlOyB9KTtcbiAgICByZXR1cm4gbWFwO1xufTtcbnZhciBTQ0hFTUUgPSAvXlthLXpdW2EtejAtOStcXC0uXSo6LztcbnZhciBvcGVuVVJMID0gZnVuY3Rpb24gKHVybCwgZXYsIGRpcmVjdGlvbikgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcm91dGVyO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgaWYgKHVybCAhPSBudWxsICYmIHVybFswXSAhPT0gJyMnICYmICFTQ0hFTUUudGVzdCh1cmwpKSB7XG4gICAgICAgICAgICByb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJyk7XG4gICAgICAgICAgICBpZiAocm91dGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJvdXRlci5wdXNoKHVybCwgZGlyZWN0aW9uKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICB9KTtcbn0pOyB9O1xuZXhwb3J0IHsgY3JlYXRlQ29sb3JDbGFzc2VzIGFzIGMsIGdldENsYXNzTWFwIGFzIGcsIGhvc3RDb250ZXh0IGFzIGgsIG9wZW5VUkwgYXMgbyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==