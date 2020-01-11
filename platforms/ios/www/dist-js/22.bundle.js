(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

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

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-searchbar-md.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-searchbar-md.entry.js ***!
  \*************************************************************************/
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
        get: function () { return ".sc-ion-searchbar-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-md-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, .ion-color.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, .ion-color.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{color:inherit}.searchbar-search-icon.sc-ion-searchbar-md{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-md{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-md{font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-clear, .searchbar-input.sc-ion-searchbar-md::-webkit-search-cancel-button{display:none}.searchbar-cancel-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-md > div.sc-ion-searchbar-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{display:block}.searchbar-disabled.sc-ion-searchbar-md-h{cursor:default;opacity:.4;pointer-events:none}.sc-ion-searchbar-md-h{--clear-button-color:initial;--cancel-button-color:var(--ion-color-step-900,#1a1a1a);--color:var(--ion-color-step-850,#262626);--icon-color:var(--ion-color-step-600,#666);--background:var(--ion-background-color,#fff);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;background:inherit}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-searchbar-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.searchbar-search-icon.sc-ion-searchbar-md{left:16px;top:11px;width:21px;height:21px}[dir=rtl].sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-search-icon.sc-ion-searchbar-md{left:unset;right:unset;right:16px}.searchbar-cancel-button.sc-ion-searchbar-md{left:5px;top:0;background-color:transparent;font-size:1.6em}[dir=rtl].sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-cancel-button.sc-ion-searchbar-md{left:unset;right:unset;right:5px}.searchbar-cancel-button.sc-ion-searchbar-md, .searchbar-search-icon.sc-ion-searchbar-md{position:absolute}.searchbar-cancel-button.activated.sc-ion-searchbar-md, .searchbar-search-icon.activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-input.sc-ion-searchbar-md{padding-left:55px;padding-right:55px;padding-top:6px;padding-bottom:6px;border-radius:2px;background-position:left 8px center;height:auto;font-size:16px;font-weight:400;line-height:30px;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-input.sc-ion-searchbar-md{padding-left:unset;padding-right:unset;-webkit-padding-start:55px;padding-inline-start:55px;-webkit-padding-end:55px;padding-inline-end:55px}}[dir=rtl].sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}.searchbar-clear-button.sc-ion-searchbar-md{right:13px;top:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:absolute;height:100%;border:0;background-color:transparent}[dir=rtl].sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-clear-button.sc-ion-searchbar-md{left:unset;right:unset;left:13px}.searchbar-clear-button.activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-md{width:22px;height:100%}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, .searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md, .searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md + .searchbar-search-icon.sc-ion-searchbar-md, .searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md + .searchbar-search-icon.sc-ion-searchbar-md{display:none}ion-toolbar.sc-ion-searchbar-md-h, ion-toolbar .sc-ion-searchbar-md-h{padding-left:7px;padding-right:7px;padding-top:3px;padding-bottom:3px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-toolbar.sc-ion-searchbar-md-h, ion-toolbar .sc-ion-searchbar-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:7px;padding-inline-start:7px;-webkit-padding-end:7px;padding-inline-end:7px}}"; },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2luZGV4LTM0NzZiMDIzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvaW9uLXNlYXJjaGJhci1tZC5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLG1CQUFtQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG1DQUFtQztBQUMzRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0NBQWdDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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dGVudCI6WyIvKipcbiAqIERvZXMgYSBzaW1wbGUgc2FuaXRpemF0aW9uIG9mIGFsbCBlbGVtZW50c1xuICogaW4gYW4gdW50cnVzdGVkIHN0cmluZ1xuICovXG52YXIgc2FuaXRpemVET01TdHJpbmcgPSBmdW5jdGlvbiAodW50cnVzdGVkU3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiB1bnRydXN0ZWRTdHJpbmcgIT09ICdzdHJpbmcnIHx8IHVudHJ1c3RlZFN0cmluZyA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiB1bnRydXN0ZWRTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50XG4gICAgICAgICAqIHNlcGFyYXRlIGZyb20gdGhlIG1haW4gRE9NLFxuICAgICAgICAgKiBjcmVhdGUgYSBkaXYgdG8gZG8gb3VyIHdvcmsgaW5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBkb2N1bWVudEZyYWdtZW50XzEgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHZhciB3b3JraW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRvY3VtZW50RnJhZ21lbnRfMS5hcHBlbmRDaGlsZCh3b3JraW5nRGl2KTtcbiAgICAgICAgd29ya2luZ0Rpdi5pbm5lckhUTUwgPSB1bnRydXN0ZWRTdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgYW55IGVsZW1lbnRzXG4gICAgICAgICAqIHRoYXQgYXJlIGJsb2NrZWRcbiAgICAgICAgICovXG4gICAgICAgIGJsb2NrZWRUYWdzLmZvckVhY2goZnVuY3Rpb24gKGJsb2NrZWRUYWcpIHtcbiAgICAgICAgICAgIHZhciBnZXRFbGVtZW50c1RvUmVtb3ZlID0gZG9jdW1lbnRGcmFnbWVudF8xLnF1ZXJ5U2VsZWN0b3JBbGwoYmxvY2tlZFRhZyk7XG4gICAgICAgICAgICBmb3IgKHZhciBlbGVtZW50SW5kZXggPSBnZXRFbGVtZW50c1RvUmVtb3ZlLmxlbmd0aCAtIDE7IGVsZW1lbnRJbmRleCA+PSAwOyBlbGVtZW50SW5kZXgtLSkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZ2V0RWxlbWVudHNUb1JlbW92ZVtlbGVtZW50SW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRGcmFnbWVudF8xLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBXZSBzdGlsbCBuZWVkIHRvIHNhbml0aXplXG4gICAgICAgICAgICAgICAgICogdGhlIGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudFxuICAgICAgICAgICAgICAgICAqIGFzIHRoZXkgYXJlIGxlZnQgYmVoaW5kXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkRWxlbWVudHMgPSBnZXRFbGVtZW50Q2hpbGRyZW4oZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY2hpbGRJbmRleCA9IDA7IGNoaWxkSW5kZXggPCBjaGlsZEVsZW1lbnRzLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNhbml0aXplRWxlbWVudChjaGlsZEVsZW1lbnRzW2NoaWxkSW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogR28gdGhyb3VnaCByZW1haW5pbmcgZWxlbWVudHMgYW5kIHJlbW92ZVxuICAgICAgICAgKiBub24tYWxsb3dlZCBhdHRyaWJzXG4gICAgICAgICAqL1xuICAgICAgICAvLyBJRSBkb2VzIG5vdCBzdXBwb3J0IC5jaGlsZHJlbiBvbiBkb2N1bWVudCBmcmFnbWVudHMsIG9ubHkgLmNoaWxkTm9kZXNcbiAgICAgICAgdmFyIGRmQ2hpbGRyZW4gPSBnZXRFbGVtZW50Q2hpbGRyZW4oZG9jdW1lbnRGcmFnbWVudF8xKTtcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgIGZvciAodmFyIGNoaWxkSW5kZXggPSAwOyBjaGlsZEluZGV4IDwgZGZDaGlsZHJlbi5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xuICAgICAgICAgICAgc2FuaXRpemVFbGVtZW50KGRmQ2hpbGRyZW5bY2hpbGRJbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFwcGVuZCBkb2N1bWVudCBmcmFnbWVudCB0byBkaXZcbiAgICAgICAgdmFyIGZyYWdtZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZyYWdtZW50RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50RnJhZ21lbnRfMSk7XG4gICAgICAgIC8vIEZpcnN0IGNoaWxkIGlzIGFsd2F5cyB0aGUgZGl2IHdlIGRpZCBvdXIgd29yayBpblxuICAgICAgICB2YXIgZ2V0SW5uZXJEaXYgPSBmcmFnbWVudERpdi5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICAgICAgcmV0dXJuIChnZXRJbm5lckRpdiAhPT0gbnVsbCkgPyBnZXRJbm5lckRpdi5pbm5lckhUTUwgOiBmcmFnbWVudERpdi5pbm5lckhUTUw7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufTtcbi8qKlxuICogQ2xlYW4gdXAgY3VycmVudCBlbGVtZW50IGJhc2VkIG9uIGFsbG93ZWQgYXR0cmlidXRlc1xuICogYW5kIHRoZW4gcmVjdXJzaXZlbHkgZGlnIGRvd24gaW50byBhbnkgY2hpbGQgZWxlbWVudHMgdG9cbiAqIGNsZWFuIHRob3NlIHVwIGFzIHdlbGxcbiAqL1xudmFyIHNhbml0aXplRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgLy8gSUUgdXNlcyBjaGlsZE5vZGVzLCBzbyBpZ25vcmUgbm9kZXMgdGhhdCBhcmUgbm90IGVsZW1lbnRzXG4gICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZSA9IGVsZW1lbnQuYXR0cmlidXRlcy5pdGVtKGkpO1xuICAgICAgICB2YXIgYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZS5uYW1lO1xuICAgICAgICAvLyByZW1vdmUgbm9uLWFsbG93ZWQgYXR0cmlic1xuICAgICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2xlYW4gdXAgYW55IGFsbG93ZWQgYXR0cmlic1xuICAgICAgICAvLyB0aGF0IGF0dGVtcHQgdG8gZG8gYW55IEpTIGZ1bm55LWJ1c2luZXNzXG4gICAgICAgIHZhciBhdHRyaWJ1dGVWYWx1ZSA9IGF0dHJpYnV0ZS52YWx1ZTtcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgIGlmIChhdHRyaWJ1dGVWYWx1ZSAhPSBudWxsICYmIGF0dHJpYnV0ZVZhbHVlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2phdmFzY3JpcHQ6JykpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNhbml0aXplIGFueSBuZXN0ZWQgY2hpbGRyZW5cbiAgICAgKi9cbiAgICB2YXIgY2hpbGRFbGVtZW50cyA9IGdldEVsZW1lbnRDaGlsZHJlbihlbGVtZW50KTtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2FuaXRpemVFbGVtZW50KGNoaWxkRWxlbWVudHNbaV0pO1xuICAgIH1cbn07XG4vKipcbiAqIElFIGRvZXNuJ3QgYWx3YXlzIHN1cHBvcnQgLmNoaWxkcmVuXG4gKiBzbyB3ZSByZXZlcnQgdG8gLmNoaWxkTm9kZXMgaW5zdGVhZFxuICovXG52YXIgZ2V0RWxlbWVudENoaWxkcmVuID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgcmV0dXJuIChlbC5jaGlsZHJlbiAhPSBudWxsKSA/IGVsLmNoaWxkcmVuIDogZWwuY2hpbGROb2Rlcztcbn07XG52YXIgYWxsb3dlZEF0dHJpYnV0ZXMgPSBbJ2NsYXNzJywgJ2lkJywgJ2hyZWYnLCAnc3JjJywgJ25hbWUnLCAnc2xvdCddO1xudmFyIGJsb2NrZWRUYWdzID0gWydzY3JpcHQnLCAnc3R5bGUnLCAnaWZyYW1lJywgJ21ldGEnLCAnbGluaycsICdvYmplY3QnLCAnZW1iZWQnXTtcbmV4cG9ydCB7IHNhbml0aXplRE9NU3RyaW5nIGFzIHMgfTtcbiIsImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgZCBhcyBjcmVhdGVFdmVudCwgYyBhcyBnZXRJb25Nb2RlLCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgeyBiIGFzIGNvbmZpZyB9IGZyb20gJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IGQgYXMgZGVib3VuY2VFdmVudCB9IGZyb20gJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcyB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuaW1wb3J0IHsgcyBhcyBzYW5pdGl6ZURPTVN0cmluZyB9IGZyb20gJy4vaW5kZXgtMzQ3NmIwMjMuanMnO1xudmFyIFNlYXJjaGJhciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18xKGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5pc0NhbmNlbFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG91bGRBbGlnbkxlZnQgPSB0cnVlO1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub0FuaW1hdGUgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBlbmFibGUgc2VhcmNoYmFyIGFuaW1hdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgaW5wdXQncyBhdXRvY29tcGxldGUgcHJvcGVydHkuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSBpbnB1dCdzIGF1dG9jb3JyZWN0IHByb3BlcnR5LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hdXRvY29ycmVjdCA9ICdvZmYnO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSBjYW5jZWwgYnV0dG9uIGljb24uIE9ubHkgYXBwbGllcyB0byBgbWRgIG1vZGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNhbmNlbEJ1dHRvbkljb24gPSAnbWQtYXJyb3ctYmFjayc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhlIHRoZSBjYW5jZWwgYnV0dG9uIHRleHQuIE9ubHkgYXBwbGllcyB0byBgaW9zYCBtb2RlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jYW5jZWxCdXR0b25UZXh0ID0gJ0NhbmNlbCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhlIGFtb3VudCBvZiB0aW1lLCBpbiBtaWxsaXNlY29uZHMsIHRvIHdhaXQgdG8gdHJpZ2dlciB0aGUgYGlvbkNoYW5nZWAgZXZlbnQgYWZ0ZXIgZWFjaCBrZXlzdHJva2UuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRlYm91bmNlID0gMjUwO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgaW5wdXQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGhpbnQgdG8gdGhlIGJyb3dzZXIgZm9yIHdoaWNoIGtleWJvYXJkIHRvIGRpc3BsYXkuXG4gICAgICAgICAqIFBvc3NpYmxlIHZhbHVlczogYFwibm9uZVwiYCwgYFwidGV4dFwiYCwgYFwidGVsXCJgLCBgXCJ1cmxcImAsXG4gICAgICAgICAqIGBcImVtYWlsXCJgLCBgXCJudW1lcmljXCJgLCBgXCJkZWNpbWFsXCJgLCBhbmQgYFwic2VhcmNoXCJgLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbnB1dG1vZGUgPSAnc2VhcmNoJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgaW5wdXQncyBwbGFjZWhvbGRlci5cbiAgICAgICAgICogYHBsYWNlaG9sZGVyYCBjYW4gYWNjZXB0IGVpdGhlciBwbGFpbnRleHQgb3IgSFRNTCBhcyBhIHN0cmluZy5cbiAgICAgICAgICogVG8gZGlzcGxheSBjaGFyYWN0ZXJzIG5vcm1hbGx5IHJlc2VydmVkIGZvciBIVE1MLCB0aGV5XG4gICAgICAgICAqIG11c3QgYmUgZXNjYXBlZC4gRm9yIGV4YW1wbGUgYDxJb25pYz5gIHdvdWxkIGJlY29tZVxuICAgICAgICAgKiBgJmx0O0lvbmljJmd0O2BcbiAgICAgICAgICpcbiAgICAgICAgICogRm9yIG1vcmUgaW5mb3JtYXRpb246IFtTZWN1cml0eSBEb2N1bWVudGF0aW9uXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2ZhcS9zZWN1cml0eSlcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSAnU2VhcmNoJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpY29uIHRvIHVzZSBhcyB0aGUgc2VhcmNoIGljb24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNlYXJjaEljb24gPSAnc2VhcmNoJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIGJlaGF2aW9yIGZvciB0aGUgY2FuY2VsIGJ1dHRvbi4gRGVmYXVsdHMgdG8gYFwibmV2ZXJcImAuXG4gICAgICAgICAqIFNldHRpbmcgdG8gYFwiZm9jdXNcImAgc2hvd3MgdGhlIGNhbmNlbCBidXR0b24gb24gZm9jdXMuXG4gICAgICAgICAqIFNldHRpbmcgdG8gYFwibmV2ZXJcImAgaGlkZXMgdGhlIGNhbmNlbCBidXR0b24uXG4gICAgICAgICAqIFNldHRpbmcgdG8gYFwiYWx3YXlzXCJgIHNob3dzIHRoZSBjYW5jZWwgYnV0dG9uIHJlZ2FyZGxlc3NcbiAgICAgICAgICogb2YgZm9jdXMgc3RhdGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNob3dDYW5jZWxCdXR0b24gPSAnbmV2ZXInO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBlbmFibGUgc3BlbGxjaGVjayBvbiB0aGUgaW5wdXQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNwZWxsY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgdHlwZSBvZiB0aGUgaW5wdXQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnR5cGUgPSAnc2VhcmNoJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRoZSB2YWx1ZSBvZiB0aGUgc2VhcmNoYmFyLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2xlYXJzIHRoZSBpbnB1dCBmaWVsZCBhbmQgdHJpZ2dlcnMgdGhlIGNvbnRyb2wgY2hhbmdlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbkNsZWFySW5wdXQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIF90aGlzLmlvbkNsZWFyLmVtaXQoKTtcbiAgICAgICAgICAgIGlmIChldikge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCkgZml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMvaXNzdWVzLzc1MjdcbiAgICAgICAgICAgIC8vIHdhaXQgZm9yIDQgZnJhbWVzXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBfdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW9uSW5wdXQuZW1pdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDE2ICogNCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbGVhcnMgdGhlIGlucHV0IGZpZWxkIGFuZCB0ZWxscyB0aGUgaW5wdXQgdG8gYmx1ciBzaW5jZVxuICAgICAgICAgKiB0aGUgY2xlYXJJbnB1dCBmdW5jdGlvbiBkb2Vzbid0IHdhbnQgdGhlIGlucHV0IHRvIGJsdXJcbiAgICAgICAgICogdGhlbiBjYWxscyB0aGUgY3VzdG9tIGNhbmNlbCBmdW5jdGlvbiBpZiB0aGUgdXNlciBwYXNzZWQgb25lIGluLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbkNhbmNlbFNlYXJjaGJhciA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgaWYgKGV2KSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmlvbkNhbmNlbC5lbWl0KCk7XG4gICAgICAgICAgICBfdGhpcy5vbkNsZWFySW5wdXQoKTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5uYXRpdmVJbnB1dCkge1xuICAgICAgICAgICAgICAgIF90aGlzLm5hdGl2ZUlucHV0LmJsdXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVwZGF0ZSB0aGUgU2VhcmNoYmFyIGlucHV0IHZhbHVlIHdoZW4gdGhlIGlucHV0IGNoYW5nZXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub25JbnB1dCA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gZXYudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmlvbklucHV0LmVtaXQoZXYpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgU2VhcmNoYmFyIHRvIG5vdCBmb2N1c2VkIGFuZCBjaGVja3MgaWYgaXQgc2hvdWxkIGFsaWduIGxlZnRcbiAgICAgICAgICogYmFzZWQgb24gd2hldGhlciB0aGVyZSBpcyBhIHZhbHVlIGluIHRoZSBzZWFyY2hiYXIgb3Igbm90LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbkJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICBfdGhpcy5pb25CbHVyLmVtaXQoKTtcbiAgICAgICAgICAgIF90aGlzLnBvc2l0aW9uRWxlbWVudHMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIFNlYXJjaGJhciB0byBmb2N1c2VkIGFuZCBhY3RpdmUgb24gaW5wdXQgZm9jdXMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLmlvbkZvY3VzLmVtaXQoKTtcbiAgICAgICAgICAgIF90aGlzLnBvc2l0aW9uRWxlbWVudHMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pb25JbnB1dCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uSW5wdXRcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DaGFuZ2VcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uQ2FuY2VsID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DYW5jZWxcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uQ2xlYXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkNsZWFyXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJsdXJcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uRm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkZvY3VzXCIsIDcpO1xuICAgICAgICB0aGlzLmlvblN0eWxlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TdHlsZVwiLCA3KTtcbiAgICB9XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZGVib3VuY2VDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlvbkNoYW5nZSA9IGRlYm91bmNlRXZlbnQodGhpcy5pb25DaGFuZ2UsIHRoaXMuZGVib3VuY2UpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUudmFsdWVDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5wdXRFbCA9IHRoaXMubmF0aXZlSW5wdXQ7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgICAgaWYgKGlucHV0RWwgJiYgaW5wdXRFbC52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGlucHV0RWwudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlvbkNoYW5nZS5lbWl0KHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc2hvd0NhbmNlbEJ1dHRvbkNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5wb3NpdGlvbkVsZW1lbnRzKCk7XG4gICAgICAgICAgICBfdGhpcy5lbC5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29tcG9uZW50RGlkTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc2hvd0NhbmNlbEJ1dHRvbiA9PT0gJ2ZhbHNlJyB8fCB0aGlzLnNob3dDYW5jZWxCdXR0b24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBib29sZWFuIHZhbHVlcyBvZiBzaG93Q2FuY2VsQnV0dG9uIGFyZSBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIFwibmV2ZXJcIiBpbnN0ZWFkIG9mIFwiZmFsc2VcIi4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zaG93Q2FuY2VsQnV0dG9uID09PSAnJyB8fCB0aGlzLnNob3dDYW5jZWxCdXR0b24gPT09ICd0cnVlJyB8fCB0aGlzLnNob3dDYW5jZWxCdXR0b24gPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIGJvb2xlYW4gdmFsdWVzIG9mIHNob3dDYW5jZWxCdXR0b24gYXJlIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgXCJmb2N1c1wiIGluc3RlYWQgb2YgXCJ0cnVlXCIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3NpdGlvbkVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuZGVib3VuY2VDaGFuZ2VkKCk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubm9BbmltYXRlID0gZmFsc2U7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5lbWl0U3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUuZW1pdCh7XG4gICAgICAgICAgICAnc2VhcmNoYmFyJzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgZm9jdXMgb24gdGhlIHNwZWNpZmllZCBgaW9uLXNlYXJjaGJhcmAuIFVzZSB0aGlzIG1ldGhvZCBpbnN0ZWFkIG9mIHRoZSBnbG9iYWxcbiAgICAgKiBgaW5wdXQuZm9jdXMoKWAuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc2V0Rm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uYXRpdmVJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5hdGl2ZSBgPGlucHV0PmAgZWxlbWVudCB1c2VkIHVuZGVyIHRoZSBob29kLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmdldElucHV0RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLm5hdGl2ZUlucHV0KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFBvc2l0aW9ucyB0aGUgaW5wdXQgc2VhcmNoIGljb24sIHBsYWNlaG9sZGVyLCBhbmQgdGhlIGNhbmNlbCBidXR0b25cbiAgICAgKiBiYXNlZCBvbiB0aGUgaW5wdXQgdmFsdWUgYW5kIGlmIGl0IGlzIGZvY3VzZWQuIChpb3Mgb25seSlcbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5wb3NpdGlvbkVsZW1lbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICAgIHZhciBwcmV2QWxpZ25MZWZ0ID0gdGhpcy5zaG91bGRBbGlnbkxlZnQ7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgdmFyIHNob3VsZEFsaWduTGVmdCA9ICghdGhpcy5hbmltYXRlZCB8fCB2YWx1ZS50cmltKCkgIT09ICcnIHx8ICEhdGhpcy5mb2N1c2VkKTtcbiAgICAgICAgdGhpcy5zaG91bGRBbGlnbkxlZnQgPSBzaG91bGRBbGlnbkxlZnQ7XG4gICAgICAgIGlmIChtb2RlICE9PSAnaW9zJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmV2QWxpZ25MZWZ0ICE9PSBzaG91bGRBbGlnbkxlZnQpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25QbGFjZWhvbGRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uQ2FuY2VsQnV0dG9uKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFBvc2l0aW9ucyB0aGUgaW5wdXQgcGxhY2Vob2xkZXJcbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5wb3NpdGlvblBsYWNlaG9sZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5wdXRFbCA9IHRoaXMubmF0aXZlSW5wdXQ7XG4gICAgICAgIGlmICghaW5wdXRFbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc1JUTCA9IGRvY3VtZW50LmRpciA9PT0gJ3J0bCc7XG4gICAgICAgIHZhciBpY29uRWwgPSAodGhpcy5lbC5zaGFkb3dSb290IHx8IHRoaXMuZWwpLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hiYXItc2VhcmNoLWljb24nKTtcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkQWxpZ25MZWZ0KSB7XG4gICAgICAgICAgICBpbnB1dEVsLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICAgIGljb25FbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBkdW1teSBzcGFuIHRvIGdldCB0aGUgcGxhY2Vob2xkZXIgd2lkdGhcbiAgICAgICAgICAgIHZhciBkb2MgPSBkb2N1bWVudDtcbiAgICAgICAgICAgIHZhciB0ZW1wU3BhbiA9IGRvYy5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB0ZW1wU3Bhbi5pbm5lckhUTUwgPSBzYW5pdGl6ZURPTVN0cmluZyh0aGlzLnBsYWNlaG9sZGVyKSB8fCAnJztcbiAgICAgICAgICAgIGRvYy5ib2R5LmFwcGVuZENoaWxkKHRlbXBTcGFuKTtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgd2lkdGggb2YgdGhlIHNwYW4gdGhlbiByZW1vdmUgaXRcbiAgICAgICAgICAgIHZhciB0ZXh0V2lkdGggPSB0ZW1wU3Bhbi5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIHRlbXBTcGFuLnJlbW92ZSgpO1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBpbnB1dCBwYWRkaW5nXG4gICAgICAgICAgICB2YXIgaW5wdXRMZWZ0ID0gJ2NhbGMoNTAlIC0gJyArICh0ZXh0V2lkdGggLyAyKSArICdweCknO1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBpY29uIG1hcmdpblxuICAgICAgICAgICAgdmFyIGljb25MZWZ0ID0gJ2NhbGMoNTAlIC0gJyArICgodGV4dFdpZHRoIC8gMikgKyAzMCkgKyAncHgpJztcbiAgICAgICAgICAgIC8vIFNldCB0aGUgaW5wdXQgcGFkZGluZyBzdGFydCBhbmQgaWNvbiBtYXJnaW4gc3RhcnRcbiAgICAgICAgICAgIGlmIChpc1JUTCkge1xuICAgICAgICAgICAgICAgIGlucHV0RWwuc3R5bGUucGFkZGluZ1JpZ2h0ID0gaW5wdXRMZWZ0O1xuICAgICAgICAgICAgICAgIGljb25FbC5zdHlsZS5tYXJnaW5SaWdodCA9IGljb25MZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5wdXRFbC5zdHlsZS5wYWRkaW5nTGVmdCA9IGlucHV0TGVmdDtcbiAgICAgICAgICAgICAgICBpY29uRWwuc3R5bGUubWFyZ2luTGVmdCA9IGljb25MZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTaG93IHRoZSBpT1MgQ2FuY2VsIGJ1dHRvbiBvbiBmb2N1cywgaGlkZSBpdCBvZmZzY3JlZW4gb3RoZXJ3aXNlXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUucG9zaXRpb25DYW5jZWxCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpc1JUTCA9IGRvY3VtZW50LmRpciA9PT0gJ3J0bCc7XG4gICAgICAgIHZhciBjYW5jZWxCdXR0b24gPSAodGhpcy5lbC5zaGFkb3dSb290IHx8IHRoaXMuZWwpLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbicpO1xuICAgICAgICB2YXIgc2hvdWxkU2hvd0NhbmNlbCA9IHRoaXMuc2hvdWxkU2hvd0NhbmNlbEJ1dHRvbigpO1xuICAgICAgICBpZiAoY2FuY2VsQnV0dG9uICYmIHNob3VsZFNob3dDYW5jZWwgIT09IHRoaXMuaXNDYW5jZWxWaXNpYmxlKSB7XG4gICAgICAgICAgICB2YXIgY2FuY2VsU3R5bGUgPSBjYW5jZWxCdXR0b24uc3R5bGU7XG4gICAgICAgICAgICB0aGlzLmlzQ2FuY2VsVmlzaWJsZSA9IHNob3VsZFNob3dDYW5jZWw7XG4gICAgICAgICAgICBpZiAoc2hvdWxkU2hvd0NhbmNlbCkge1xuICAgICAgICAgICAgICAgIGlmIChpc1JUTCkge1xuICAgICAgICAgICAgICAgICAgICBjYW5jZWxTdHlsZS5tYXJnaW5MZWZ0ID0gJzAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsU3R5bGUubWFyZ2luUmlnaHQgPSAnMCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IGNhbmNlbEJ1dHRvbi5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNSVEwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbFN0eWxlLm1hcmdpbkxlZnQgPSAtb2Zmc2V0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbFN0eWxlLm1hcmdpblJpZ2h0ID0gLW9mZnNldCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSB8fCAnJztcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmhhc1ZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgpICE9PSAnJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIGNhbmNlbCBidXR0b24gc2hvdWxkIGJlIHZpc2libGUgb25zY3JlZW4uXG4gICAgICogQ2FuY2VsIGJ1dHRvbiBzaG91bGQgYmUgc2hvd24gaWYgb25lIG9mIHR3byBjb25kaXRpb25zIGFwcGxpZXM6XG4gICAgICogMS4gYHNob3dDYW5jZWxCdXR0b25gIGlzIHNldCB0byBgYWx3YXlzYC5cbiAgICAgKiAyLiBgc2hvd0NhbmNlbEJ1dHRvbmAgaXMgc2V0IHRvIGBmb2N1c2AsIGFuZCB0aGUgc2VhcmNoYmFyIGhhcyBiZWVuIGZvY3VzZWQuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc2hvdWxkU2hvd0NhbmNlbEJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzQ2FuY2VsQnV0dG9uU2V0VG9OZXZlcih0aGlzLnNob3dDYW5jZWxCdXR0b24pIHx8XG4gICAgICAgICAgICAoaXNDYW5jZWxCdXR0b25TZXRUb0ZvY3VzKHRoaXMuc2hvd0NhbmNlbEJ1dHRvbikgJiYgIXRoaXMuZm9jdXNlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgYW5pbWF0ZWQgPSB0aGlzLmFuaW1hdGVkICYmIGNvbmZpZy5nZXRCb29sZWFuKCdhbmltYXRlZCcsIHRydWUpO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHZhciBjbGVhckljb24gPSB0aGlzLmNsZWFySWNvbiB8fCAobW9kZSA9PT0gJ2lvcycgPyAnaW9zLWNsb3NlLWNpcmNsZScgOiAnbWQtY2xvc2UnKTtcbiAgICAgICAgdmFyIHNlYXJjaEljb24gPSB0aGlzLnNlYXJjaEljb247XG4gICAgICAgIHZhciBjYW5jZWxCdXR0b24gPSAhaXNDYW5jZWxCdXR0b25TZXRUb05ldmVyKHRoaXMuc2hvd0NhbmNlbEJ1dHRvbikgJiYgKGgoXCJidXR0b25cIiwgeyBcImFyaWEtbGFiZWxcIjogXCJjYW5jZWxcIiwgdHlwZTogXCJidXR0b25cIiwgdGFiSW5kZXg6IG1vZGUgPT09ICdpb3MnICYmICF0aGlzLnNob3VsZFNob3dDYW5jZWxCdXR0b24oKSA/IC0xIDogdW5kZWZpbmVkLCBvbk1vdXNlRG93bjogdGhpcy5vbkNhbmNlbFNlYXJjaGJhciwgb25Ub3VjaFN0YXJ0OiB0aGlzLm9uQ2FuY2VsU2VhcmNoYmFyLCBjbGFzczogXCJzZWFyY2hiYXItY2FuY2VsLWJ1dHRvblwiIH0sIGgoXCJkaXZcIiwgbnVsbCwgbW9kZSA9PT0gJ21kJ1xuICAgICAgICAgICAgPyBoKFwiaW9uLWljb25cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBtb2RlOiBtb2RlLCBpY29uOiB0aGlzLmNhbmNlbEJ1dHRvbkljb24sIGxhenk6IGZhbHNlIH0pXG4gICAgICAgICAgICA6IHRoaXMuY2FuY2VsQnV0dG9uVGV4dCkpKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgcm9sZTogXCJzZWFyY2hcIiwgXCJhcmlhLWRpc2FibGVkXCI6IHRoaXMuZGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsLCBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvcikpLCAoX2EgPSB7fSwgX2FbbW9kZV0gPSB0cnVlLCBfYVsnc2VhcmNoYmFyLWFuaW1hdGVkJ10gPSBhbmltYXRlZCwgX2FbJ3NlYXJjaGJhci1kaXNhYmxlZCddID0gdGhpcy5kaXNhYmxlZCwgX2FbJ3NlYXJjaGJhci1uby1hbmltYXRlJ10gPSBhbmltYXRlZCAmJiB0aGlzLm5vQW5pbWF0ZSwgX2FbJ3NlYXJjaGJhci1oYXMtdmFsdWUnXSA9IHRoaXMuaGFzVmFsdWUoKSwgX2FbJ3NlYXJjaGJhci1sZWZ0LWFsaWduZWQnXSA9IHRoaXMuc2hvdWxkQWxpZ25MZWZ0LCBfYVsnc2VhcmNoYmFyLWhhcy1mb2N1cyddID0gdGhpcy5mb2N1c2VkLCBfYVsnc2VhcmNoYmFyLXNob3VsZC1zaG93LWNhbmNlbCddID0gdGhpcy5zaG91bGRTaG93Q2FuY2VsQnV0dG9uKCksIF9hKSkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInNlYXJjaGJhci1pbnB1dC1jb250YWluZXJcIiB9LCBoKFwiaW5wdXRcIiwgeyBcImFyaWEtbGFiZWxcIjogXCJzZWFyY2ggdGV4dFwiLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgcmVmOiBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIF90aGlzLm5hdGl2ZUlucHV0ID0gZWw7IH0sIGNsYXNzOiBcInNlYXJjaGJhci1pbnB1dFwiLCBpbnB1dE1vZGU6IHRoaXMuaW5wdXRtb2RlLCBvbklucHV0OiB0aGlzLm9uSW5wdXQsIG9uQmx1cjogdGhpcy5vbkJsdXIsIG9uRm9jdXM6IHRoaXMub25Gb2N1cywgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsIHR5cGU6IHRoaXMudHlwZSwgdmFsdWU6IHRoaXMuZ2V0VmFsdWUoKSwgYXV0b0NvbXBsZXRlOiB0aGlzLmF1dG9jb21wbGV0ZSwgYXV0b0NvcnJlY3Q6IHRoaXMuYXV0b2NvcnJlY3QsIHNwZWxsQ2hlY2s6IHRoaXMuc3BlbGxjaGVjayB9KSwgbW9kZSA9PT0gJ21kJyAmJiBjYW5jZWxCdXR0b24sIGgoXCJpb24taWNvblwiLCB7IG1vZGU6IG1vZGUsIGljb246IHNlYXJjaEljb24sIGxhenk6IGZhbHNlLCBjbGFzczogXCJzZWFyY2hiYXItc2VhcmNoLWljb25cIiB9KSwgaChcImJ1dHRvblwiLCB7IFwiYXJpYS1sYWJlbFwiOiBcInJlc2V0XCIsIHR5cGU6IFwiYnV0dG9uXCIsIFwibm8tYmx1clwiOiB0cnVlLCBjbGFzczogXCJzZWFyY2hiYXItY2xlYXItYnV0dG9uXCIsIG9uTW91c2VEb3duOiB0aGlzLm9uQ2xlYXJJbnB1dCwgb25Ub3VjaFN0YXJ0OiB0aGlzLm9uQ2xlYXJJbnB1dCB9LCBoKFwiaW9uLWljb25cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBtb2RlOiBtb2RlLCBpY29uOiBjbGVhckljb24sIGxhenk6IGZhbHNlLCBjbGFzczogXCJzZWFyY2hiYXItY2xlYXItaWNvblwiIH0pKSksIG1vZGUgPT09ICdpb3MnICYmIGNhbmNlbEJ1dHRvbikpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJ3YXRjaGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcImRlYm91bmNlXCI6IFtcImRlYm91bmNlQ2hhbmdlZFwiXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFtcInZhbHVlQ2hhbmdlZFwiXSxcbiAgICAgICAgICAgICAgICBcInNob3dDYW5jZWxCdXR0b25cIjogW1wic2hvd0NhbmNlbEJ1dHRvbkNoYW5nZWRcIl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIi5zYy1pb24tc2VhcmNoYmFyLW1kLWh7LS1wbGFjZWhvbGRlci1jb2xvcjppbml0aWFsOy0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTppbml0aWFsOy0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6aW5pdGlhbDstLXBsYWNlaG9sZGVyLW9wYWNpdHk6LjU7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxMDAlO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCk7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5pb24tY29sb3Iuc2MtaW9uLXNlYXJjaGJhci1tZC1oe2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Lmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1ke2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpfS5pb24tY29sb3Iuc2MtaW9uLXNlYXJjaGJhci1tZC1oIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1kLCAuaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1kLCAuaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItbWR7Y29sb3I6aW5oZXJpdH0uc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItbWR7Y29sb3I6dmFyKC0taWNvbi1jb2xvcik7cG9pbnRlci1ldmVudHM6bm9uZX0uc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lci5zYy1pb24tc2VhcmNoYmFyLW1ke2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtbmVnYXRpdmU6MTtmbGV4LXNocmluazoxO3dpZHRoOjEwMCV9LnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1ke2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2JvcmRlcjowO291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfS5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXN0eWxlOnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGUpO2ZvbnQtd2VpZ2h0OnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0KTtvcGFjaXR5OnZhcigtLXBsYWNlaG9sZGVyLW9wYWNpdHkpfS5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZDo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXN0eWxlOnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGUpO2ZvbnQtd2VpZ2h0OnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0KTtvcGFjaXR5OnZhcigtLXBsYWNlaG9sZGVyLW9wYWNpdHkpfS5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZDotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXN0eWxlOnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGUpO2ZvbnQtd2VpZ2h0OnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0KTtvcGFjaXR5OnZhcigtLXBsYWNlaG9sZGVyLW9wYWNpdHkpfS5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZDo6cGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQ6Oi1tcy1jbGVhciwgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9ue2Rpc3BsYXk6bm9uZX0uc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7ZGlzcGxheTpub25lO2hlaWdodDoxMDAlO2JvcmRlcjowO291dGxpbmU6bm9uZTtjb2xvcjp2YXIoLS1jYW5jZWwtYnV0dG9uLWNvbG9yKTtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9LnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItbWQgPiBkaXYuc2MtaW9uLXNlYXJjaGJhci1tZHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1ke21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtkaXNwbGF5Om5vbmU7bWluLWhlaWdodDowO291dGxpbmU6bm9uZTtjb2xvcjp2YXIoLS1jbGVhci1idXR0b24tY29sb3IpOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX0uc2VhcmNoYmFyLWhhcy12YWx1ZS5zZWFyY2hiYXItaGFzLWZvY3VzLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1ke2Rpc3BsYXk6YmxvY2t9LnNlYXJjaGJhci1kaXNhYmxlZC5zYy1pb24tc2VhcmNoYmFyLW1kLWh7Y3Vyc29yOmRlZmF1bHQ7b3BhY2l0eTouNDtwb2ludGVyLWV2ZW50czpub25lfS5zYy1pb24tc2VhcmNoYmFyLW1kLWh7LS1jbGVhci1idXR0b24tY29sb3I6aW5pdGlhbDstLWNhbmNlbC1idXR0b24tY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtOTAwLCMxYTFhMWEpOy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCMyNjI2MjYpOy0taWNvbi1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIzY2Nik7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpO3BhZGRpbmctbGVmdDo4cHg7cGFkZGluZy1yaWdodDo4cHg7cGFkZGluZy10b3A6OHB4O3BhZGRpbmctYm90dG9tOjhweDtiYWNrZ3JvdW5kOmluaGVyaXR9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApey5zYy1pb24tc2VhcmNoYmFyLW1kLWh7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjhweDtwYWRkaW5nLWlubGluZS1zdGFydDo4cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo4cHg7cGFkZGluZy1pbmxpbmUtZW5kOjhweH19LnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLW1ke2xlZnQ6MTZweDt0b3A6MTFweDt3aWR0aDoyMXB4O2hlaWdodDoyMXB4fVtkaXI9cnRsXS5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLW1kLCBbZGlyPXJ0bF0gLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItbWQsIFtkaXI9cnRsXS5zYy1pb24tc2VhcmNoYmFyLW1kIC5zZWFyY2hiYXItc2VhcmNoLWljb24uc2MtaW9uLXNlYXJjaGJhci1tZHtsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjE2cHh9LnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItbWR7bGVmdDo1cHg7dG9wOjA7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmb250LXNpemU6MS42ZW19W2Rpcj1ydGxdLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZCwgW2Rpcj1ydGxdIC5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItbWQsIFtkaXI9cnRsXS5zYy1pb24tc2VhcmNoYmFyLW1kIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1ke2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7cmlnaHQ6NXB4fS5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1kLCAuc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItbWR7cG9zaXRpb246YWJzb2x1dGV9LnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLmFjdGl2YXRlZC5zYy1pb24tc2VhcmNoYmFyLW1kLCAuc2VhcmNoYmFyLXNlYXJjaC1pY29uLmFjdGl2YXRlZC5zYy1pb24tc2VhcmNoYmFyLW1ke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1ke3BhZGRpbmctbGVmdDo1NXB4O3BhZGRpbmctcmlnaHQ6NTVweDtwYWRkaW5nLXRvcDo2cHg7cGFkZGluZy1ib3R0b206NnB4O2JvcmRlci1yYWRpdXM6MnB4O2JhY2tncm91bmQtcG9zaXRpb246bGVmdCA4cHggY2VudGVyO2hlaWdodDphdXRvO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDozMHB4Oy13ZWJraXQtYm94LXNoYWRvdzowIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO2JveC1zaGFkb3c6MCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1ke3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDo1NXB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjU1cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo1NXB4O3BhZGRpbmctaW5saW5lLWVuZDo1NXB4fX1bZGlyPXJ0bF0uc2MtaW9uLXNlYXJjaGJhci1tZC1oIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZCwgW2Rpcj1ydGxdIC5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kLCBbZGlyPXJ0bF0uc2MtaW9uLXNlYXJjaGJhci1tZCAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWR7YmFja2dyb3VuZC1wb3NpdGlvbjpyaWdodCA4cHggY2VudGVyfS5zZWFyY2hiYXItY2xlYXItYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItbWR7cmlnaHQ6MTNweDt0b3A6MDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO2JvcmRlcjowO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9W2Rpcj1ydGxdLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1kLCBbZGlyPXJ0bF0gLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1kLCBbZGlyPXJ0bF0uc2MtaW9uLXNlYXJjaGJhci1tZCAuc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1ke2xlZnQ6dW5zZXQ7cmlnaHQ6dW5zZXQ7bGVmdDoxM3B4fS5zZWFyY2hiYXItY2xlYXItYnV0dG9uLmFjdGl2YXRlZC5zYy1pb24tc2VhcmNoYmFyLW1ke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LnNlYXJjaGJhci1jbGVhci1pY29uLnNjLWlvbi1zZWFyY2hiYXItbWR7d2lkdGg6MjJweDtoZWlnaHQ6MTAwJX0uc2VhcmNoYmFyLWhhcy1mb2N1cy5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItbWQsIC5zZWFyY2hiYXItaGFzLWZvY3VzLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItbWQsIC5zZWFyY2hiYXItc2hvdWxkLXNob3ctY2FuY2VsLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZHtkaXNwbGF5OmJsb2NrfS5zZWFyY2hiYXItaGFzLWZvY3VzLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZCArIC5zZWFyY2hiYXItc2VhcmNoLWljb24uc2MtaW9uLXNlYXJjaGJhci1tZCwgLnNlYXJjaGJhci1zaG91bGQtc2hvdy1jYW5jZWwuc2MtaW9uLXNlYXJjaGJhci1tZC1oIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1kICsgLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLW1ke2Rpc3BsYXk6bm9uZX1pb24tdG9vbGJhci5zYy1pb24tc2VhcmNoYmFyLW1kLWgsIGlvbi10b29sYmFyIC5zYy1pb24tc2VhcmNoYmFyLW1kLWh7cGFkZGluZy1sZWZ0OjdweDtwYWRkaW5nLXJpZ2h0OjdweDtwYWRkaW5nLXRvcDozcHg7cGFkZGluZy1ib3R0b206M3B4fVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXtpb24tdG9vbGJhci5zYy1pb24tc2VhcmNoYmFyLW1kLWgsIGlvbi10b29sYmFyIC5zYy1pb24tc2VhcmNoYmFyLW1kLWh7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjdweDtwYWRkaW5nLWlubGluZS1zdGFydDo3cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo3cHg7cGFkZGluZy1pbmxpbmUtZW5kOjdweH19XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbi8qKlxuICogQ2hlY2sgaWYgdGhlIGNhbmNlbCBidXR0b24gc2hvdWxkIG5ldmVyIGJlIHNob3duLlxuICpcbiAqIFRPRE86IFJlbW92ZSB0aGlzIHdoZW4gdGhlIGB0cnVlYCBhbmQgYGZhbHNlYFxuICogb3B0aW9ucyBhcmUgcmVtb3ZlZC5cbiAqL1xudmFyIGlzQ2FuY2VsQnV0dG9uU2V0VG9OZXZlciA9IGZ1bmN0aW9uIChzaG93Q2FuY2VsQnV0dG9uKSB7XG4gICAgcmV0dXJuIChzaG93Q2FuY2VsQnV0dG9uID09PSAnbmV2ZXInIHx8XG4gICAgICAgIHNob3dDYW5jZWxCdXR0b24gPT09ICdmYWxzZScgfHxcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbiA9PT0gZmFsc2UpO1xufTtcbi8qKlxuICogQ2hlY2sgaWYgdGhlIGNhbmNlbCBidXR0b24gc2hvdWxkIGJlIHNob3duIG9uIGZvY3VzLlxuICpcbiAqIFRPRE86IFJlbW92ZSB0aGlzIHdoZW4gdGhlIGB0cnVlYCBhbmQgYGZhbHNlYFxuICogb3B0aW9ucyBhcmUgcmVtb3ZlZC5cbiAqL1xudmFyIGlzQ2FuY2VsQnV0dG9uU2V0VG9Gb2N1cyA9IGZ1bmN0aW9uIChzaG93Q2FuY2VsQnV0dG9uKSB7XG4gICAgcmV0dXJuIChzaG93Q2FuY2VsQnV0dG9uID09PSAnZm9jdXMnIHx8XG4gICAgICAgIHNob3dDYW5jZWxCdXR0b24gPT09ICd0cnVlJyB8fFxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uID09PSB0cnVlIHx8XG4gICAgICAgIHNob3dDYW5jZWxCdXR0b24gPT09ICcnKTtcbn07XG5leHBvcnQgeyBTZWFyY2hiYXIgYXMgaW9uX3NlYXJjaGJhciB9O1xuIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xudmFyIGhvc3RDb250ZXh0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBlbCkge1xuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcbn07XG4vKipcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cbiAqL1xudmFyIGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyAoX2EgPSB7XG4gICAgICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBfYVtcImlvbi1jb2xvci1cIiArIGNvbG9yXSA9IHRydWUsXG4gICAgICAgIF9hKSA6IHVuZGVmaW5lZDtcbn07XG52YXIgZ2V0Q2xhc3NMaXN0ID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT0gbnVsbDsgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudHJpbSgpOyB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPT0gJyc7IH0pO1xuICAgIH1cbiAgICByZXR1cm4gW107XG59O1xudmFyIGdldENsYXNzTWFwID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG1hcFtjXSA9IHRydWU7IH0pO1xuICAgIHJldHVybiBtYXA7XG59O1xudmFyIFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xudmFyIG9wZW5VUkwgPSBmdW5jdGlvbiAodXJsLCBldiwgZGlyZWN0aW9uKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByb3V0ZXI7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcbiAgICAgICAgICAgIHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcbiAgICAgICAgICAgIGlmIChyb3V0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgIH0pO1xufSk7IH07XG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9