(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-select_3-ios.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-select_3-ios.entry.js ***!
  \*************************************************************************/
/*! exports provided: ion_select, ion_select_option, ion_select_popover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_select_option", function() { return SelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_select_popover", function() { return SelectPopover; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlays-10640d86.js */ "./node_modules/@ionic/core/dist/esm-es5/overlays-10640d86.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");
/* harmony import */ var _watch_options_2af96011_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./watch-options-2af96011.js */ "./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js");







var Select = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.inputId = "ion-sel-" + selectIds++;
        this.didInit = false;
        this.isExpanded = false;
        /**
         * If `true`, the user cannot interact with the select.
         */
        this.disabled = false;
        /**
         * The text to display on the cancel button.
         */
        this.cancelText = 'Cancel';
        /**
         * The text to display on the ok button.
         */
        this.okText = 'OK';
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * If `true`, the select can accept multiple values.
         */
        this.multiple = false;
        /**
         * The interface the select should use: `action-sheet`, `popover` or `alert`.
         */
        this.interface = 'alert';
        /**
         * Any additional options that the `alert`, `action-sheet` or `popover` interface
         * can take. See the [AlertController API docs](../../alert/AlertController/#create), the
         * [ActionSheetController API docs](../../action-sheet/ActionSheetController/#create) and the
         * [PopoverController API docs](../../popover/PopoverController/#create) for the
         * create options for each interface.
         */
        this.interfaceOptions = {};
        this.onClick = function (ev) {
            _this.setFocus();
            _this.open(ev);
        };
        this.onFocus = function () {
            _this.ionFocus.emit();
        };
        this.onBlur = function () {
            _this.ionBlur.emit();
        };
        this.ionChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionChange", 7);
        this.ionCancel = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionCancel", 7);
        this.ionFocus = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionFocus", 7);
        this.ionBlur = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionBlur", 7);
        this.ionStyle = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionStyle", 7);
    }
    class_1.prototype.disabledChanged = function () {
        this.emitStyle();
    };
    class_1.prototype.valueChanged = function () {
        this.updateOptions();
        this.emitStyle();
        if (this.didInit) {
            this.ionChange.emit({
                value: this.value,
            });
        }
    };
    class_1.prototype.connectedCallback = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var checked, checked;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.value === undefined) {
                    if (this.multiple) {
                        checked = this.childOpts.filter(function (o) { return o.selected; });
                        this.value = checked.map(function (o) { return getOptionValue(o); });
                    }
                    else {
                        checked = this.childOpts.find(function (o) { return o.selected; });
                        if (checked) {
                            this.value = getOptionValue(checked);
                        }
                    }
                }
                this.updateOptions();
                this.updateOverlayOptions();
                this.emitStyle();
                this.mutationO = Object(_watch_options_2af96011_js__WEBPACK_IMPORTED_MODULE_6__["w"])(this.el, 'ion-select-option', function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        this.updateOptions();
                        this.updateOverlayOptions();
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.disconnectedCallback = function () {
        if (this.mutationO) {
            this.mutationO.disconnect();
            this.mutationO = undefined;
        }
    };
    class_1.prototype.componentDidLoad = function () {
        this.didInit = true;
    };
    /**
     * Open the select overlay. The overlay is either an alert, action sheet, or popover,
     * depending on the `interface` property on the `ion-select`.
     *
     * @param event The user interface event that called the open.
     */
    class_1.prototype.open = function (event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var overlay, _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.disabled || this.isExpanded) {
                            return [2 /*return*/, undefined];
                        }
                        _a = this;
                        return [4 /*yield*/, this.createOverlay(event)];
                    case 1:
                        overlay = _a.overlay = _b.sent();
                        this.isExpanded = true;
                        overlay.onDidDismiss().then(function () {
                            _this.overlay = undefined;
                            _this.isExpanded = false;
                            _this.setFocus();
                        });
                        return [4 /*yield*/, overlay.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, overlay];
                }
            });
        });
    };
    class_1.prototype.createOverlay = function (ev) {
        var selectInterface = this.interface;
        if ((selectInterface === 'action-sheet' || selectInterface === 'popover') && this.multiple) {
            console.warn("Select interface cannot be \"" + selectInterface + "\" with a multi-value select. Using the \"alert\" interface instead.");
            selectInterface = 'alert';
        }
        if (selectInterface === 'popover' && !ev) {
            console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');
            selectInterface = 'alert';
        }
        if (selectInterface === 'popover') {
            return this.openPopover(ev);
        }
        if (selectInterface === 'action-sheet') {
            return this.openActionSheet();
        }
        return this.openAlert();
    };
    class_1.prototype.updateOverlayOptions = function () {
        var overlay = this.overlay;
        if (!overlay) {
            return;
        }
        var childOpts = this.childOpts;
        switch (this.interface) {
            case 'action-sheet':
                overlay.buttons = this.createActionSheetButtons(childOpts);
                break;
            case 'popover':
                var popover = overlay.querySelector('ion-select-popover');
                if (popover) {
                    popover.options = this.createPopoverOptions(childOpts);
                }
                break;
            case 'alert':
                var inputType = (this.multiple ? 'checkbox' : 'radio');
                overlay.inputs = this.createAlertInputs(childOpts, inputType);
                break;
        }
    };
    class_1.prototype.createActionSheetButtons = function (data) {
        var _this = this;
        var actionSheetButtons = data.map(function (option) {
            return {
                role: (option.selected ? 'selected' : ''),
                text: option.textContent,
                handler: function () {
                    _this.value = getOptionValue(option);
                }
            };
        });
        // Add "cancel" button
        actionSheetButtons.push({
            text: this.cancelText,
            role: 'cancel',
            handler: function () {
                _this.ionCancel.emit();
            }
        });
        return actionSheetButtons;
    };
    class_1.prototype.createAlertInputs = function (data, inputType) {
        return data.map(function (o) {
            return {
                type: inputType,
                label: o.textContent,
                value: getOptionValue(o),
                checked: o.selected,
                disabled: o.disabled
            };
        });
    };
    class_1.prototype.createPopoverOptions = function (data) {
        var _this = this;
        return data.map(function (o) {
            var value = getOptionValue(o);
            return {
                text: o.textContent,
                value: value,
                checked: o.selected,
                disabled: o.disabled,
                handler: function () {
                    _this.value = value;
                    _this.close();
                }
            };
        });
    };
    class_1.prototype.openPopover = function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var interfaceOptions, mode, popoverOpts;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                interfaceOptions = this.interfaceOptions;
                mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
                popoverOpts = Object.assign(Object.assign({ mode: mode }, interfaceOptions), { component: 'ion-select-popover', cssClass: ['select-popover', interfaceOptions.cssClass], event: ev, componentProps: {
                        header: interfaceOptions.header,
                        subHeader: interfaceOptions.subHeader,
                        message: interfaceOptions.message,
                        value: this.value,
                        options: this.createPopoverOptions(this.childOpts)
                    } });
                return [2 /*return*/, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["c"].create(popoverOpts)];
            });
        });
    };
    class_1.prototype.openActionSheet = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var mode, interfaceOptions, actionSheetOpts;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
                interfaceOptions = this.interfaceOptions;
                actionSheetOpts = Object.assign(Object.assign({ mode: mode }, interfaceOptions), { buttons: this.createActionSheetButtons(this.childOpts), cssClass: ['select-action-sheet', interfaceOptions.cssClass] });
                return [2 /*return*/, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["b"].create(actionSheetOpts)];
            });
        });
    };
    class_1.prototype.openAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var label, labelText, interfaceOptions, inputType, mode, alertOpts;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                label = this.getLabel();
                labelText = (label) ? label.textContent : null;
                interfaceOptions = this.interfaceOptions;
                inputType = (this.multiple ? 'checkbox' : 'radio');
                mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
                alertOpts = Object.assign(Object.assign({ mode: mode }, interfaceOptions), { header: interfaceOptions.header ? interfaceOptions.header : labelText, inputs: this.createAlertInputs(this.childOpts, inputType), buttons: [
                        {
                            text: this.cancelText,
                            role: 'cancel',
                            handler: function () {
                                _this.ionCancel.emit();
                            }
                        },
                        {
                            text: this.okText,
                            handler: function (selectedValues) {
                                _this.value = selectedValues;
                            }
                        }
                    ], cssClass: ['select-alert', interfaceOptions.cssClass,
                        (this.multiple ? 'multiple-select-alert' : 'single-select-alert')] });
                return [2 /*return*/, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["a"].create(alertOpts)];
            });
        });
    };
    /**
     * Close the select interface.
     */
    class_1.prototype.close = function () {
        // TODO check !this.overlay || !this.isFocus()
        if (!this.overlay) {
            return Promise.resolve(false);
        }
        return this.overlay.dismiss();
    };
    class_1.prototype.updateOptions = function () {
        // iterate all options, updating the selected prop
        var canSelect = true;
        var _a = this, value = _a.value, childOpts = _a.childOpts, compareWith = _a.compareWith, multiple = _a.multiple;
        for (var _i = 0, childOpts_1 = childOpts; _i < childOpts_1.length; _i++) {
            var selectOption = childOpts_1[_i];
            var optValue = getOptionValue(selectOption);
            var selected = canSelect && isOptionSelected(value, optValue, compareWith);
            selectOption.selected = selected;
            // if current option is selected and select is single-option, we can't select
            // any option more
            if (selected && !multiple) {
                canSelect = false;
            }
        }
    };
    class_1.prototype.getLabel = function () {
        return Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["f"])(this.el);
    };
    class_1.prototype.hasValue = function () {
        return this.getText() !== '';
    };
    Object.defineProperty(class_1.prototype, "childOpts", {
        get: function () {
            return Array.from(this.el.querySelectorAll('ion-select-option'));
        },
        enumerable: true,
        configurable: true
    });
    class_1.prototype.getText = function () {
        var selectedText = this.selectedText;
        if (selectedText != null && selectedText !== '') {
            return selectedText;
        }
        return generateText(this.childOpts, this.value, this.compareWith);
    };
    class_1.prototype.setFocus = function () {
        if (this.buttonEl) {
            this.buttonEl.focus();
        }
    };
    class_1.prototype.emitStyle = function () {
        this.ionStyle.emit({
            'interactive': true,
            'select': true,
            'has-placeholder': this.placeholder != null,
            'has-value': this.hasValue(),
            'interactive-disabled': this.disabled,
            'select-disabled': this.disabled
        });
    };
    class_1.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this, placeholder = _b.placeholder, name = _b.name, disabled = _b.disabled, isExpanded = _b.isExpanded, value = _b.value, el = _b.el;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var labelId = this.inputId + '-lbl';
        var label = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["f"])(el);
        if (label) {
            label.id = labelId;
        }
        var addPlaceholderClass = false;
        var selectText = this.getText();
        if (selectText === '' && placeholder != null) {
            selectText = placeholder;
            addPlaceholderClass = true;
        }
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["a"])(true, el, name, parseValue(value), disabled);
        var selectTextClasses = {
            'select-text': true,
            'select-placeholder': addPlaceholderClass
        };
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onClick: this.onClick, role: "combobox", "aria-haspopup": "dialog", "aria-disabled": disabled ? 'true' : null, "aria-expanded": "" + isExpanded, "aria-labelledby": labelId, class: (_a = {},
                _a[mode] = true,
                _a['in-item'] = Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["h"])('ion-item', el),
                _a['select-disabled'] = disabled,
                _a) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: selectTextClasses }, selectText), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "select-icon", role: "presentation" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "select-icon-inner" })), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: disabled, ref: (function (btnEl) { return _this.buttonEl = btnEl; }) })));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "disabled": ["disabledChanged"],
                "placeholder": ["disabledChanged"],
                "value": ["valueChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:currentColor;opacity:.33}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;opacity:.33;pointer-events:none}:host-context([dir=rtl]) .select-icon-inner,[dir=rtl] .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px}.select-icon{width:12px;height:18px}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var getOptionValue = function (el) {
    var value = el.value;
    return (value === undefined)
        ? el.textContent || ''
        : value;
};
var parseValue = function (value) {
    if (value == null) {
        return undefined;
    }
    if (Array.isArray(value)) {
        return value.join(',');
    }
    return value.toString();
};
var isOptionSelected = function (currentValue, compareValue, compareWith) {
    if (currentValue === undefined) {
        return false;
    }
    if (Array.isArray(currentValue)) {
        return currentValue.some(function (val) { return compareOptions(val, compareValue, compareWith); });
    }
    else {
        return compareOptions(currentValue, compareValue, compareWith);
    }
};
var compareOptions = function (currentValue, compareValue, compareWith) {
    if (typeof compareWith === 'function') {
        return compareWith(currentValue, compareValue);
    }
    else if (typeof compareWith === 'string') {
        return currentValue[compareWith] === compareValue[compareWith];
    }
    else {
        return currentValue === compareValue;
    }
};
var generateText = function (opts, value, compareWith) {
    if (value === undefined) {
        return '';
    }
    if (Array.isArray(value)) {
        return value
            .map(function (v) { return textForValue(opts, v, compareWith); })
            .filter(function (opt) { return opt !== null; })
            .join(', ');
    }
    else {
        return textForValue(opts, value, compareWith) || '';
    }
};
var textForValue = function (opts, value, compareWith) {
    var selectOpt = opts.find(function (opt) {
        return compareOptions(getOptionValue(opt), value, compareWith);
    });
    return selectOpt
        ? selectOpt.textContent
        : null;
};
var selectIds = 0;
var SelectOption = /** @class */ (function () {
    function SelectOption(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.inputId = "ion-selopt-" + selectOptionIds++;
        /**
         * If `true`, the user cannot interact with the select option.
         */
        this.disabled = false;
        /**
         * If `true`, the element is selected.
         */
        this.selected = false;
    }
    SelectOption.prototype.render = function () {
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { role: "option", id: this.inputId, class: Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this) }));
    };
    Object.defineProperty(SelectOption.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectOption, "style", {
        get: function () { return ":host{display:none}"; },
        enumerable: true,
        configurable: true
    });
    return SelectOption;
}());
var selectOptionIds = 0;
var SelectPopover = /** @class */ (function () {
    function SelectPopover(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        /** Array of options for the popover */
        this.options = [];
    }
    SelectPopover.prototype.onSelect = function (ev) {
        var option = this.options.find(function (o) { return o.value === ev.target.value; });
        if (option) {
            Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["s"])(option.handler);
        }
    };
    SelectPopover.prototype.render = function () {
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-list", null, this.header !== undefined && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-list-header", null, this.header), (this.subHeader !== undefined || this.message !== undefined) &&
            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-item", null, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-label", { class: "ion-text-wrap" }, this.subHeader !== undefined && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("h3", null, this.subHeader), this.message !== undefined && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("p", null, this.message))), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-radio-group", null, this.options.map(function (option) { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-item", null, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-label", null, option.text), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-radio", { checked: option.checked, value: option.value, disabled: option.disabled })); })))));
    };
    Object.defineProperty(SelectPopover, "style", {
        get: function () { return ".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-label.sc-ion-select-popover, .sc-ion-select-popover-h ion-list-header.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"; },
        enumerable: true,
        configurable: true
    });
    return SelectPopover;
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



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js ***!
  \*************************************************************************/
/*! exports provided: f, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findCheckedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return watchForOptions; });
var watchForOptions = function (containerEl, tagName, onChange) {
    var mutation = new MutationObserver(function (mutationList) {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true
    });
    return mutation;
};
var getSelectedOption = function (mutationList, tagName) {
    var newOption;
    mutationList.forEach(function (mut) {
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
var findCheckedOption = function (el, tagName) {
    if (el.nodeType !== 1) {
        return undefined;
    }
    var options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find(function (o) { return o.checked === true; });
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1zZWxlY3RfMy1pb3MuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLWVzNS90aGVtZS0xOGNiZTJjYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L3dhdGNoLW9wdGlvbnMtMmFmOTYwMTEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDOEU7QUFDL0Y7QUFDcUQ7QUFDOEM7QUFDMUU7QUFDWTtBQUNuRTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkRBQVc7QUFDcEMseUJBQXlCLDJEQUFXO0FBQ3BDLHdCQUF3QiwyREFBVztBQUNuQyx1QkFBdUIsMkRBQVc7QUFDbEMsd0JBQXdCLDJEQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdURBQVM7QUFDeEI7QUFDQTtBQUNBLG1CQUFtQix5REFBVztBQUM5QjtBQUNBO0FBQ0Esc0VBQXNFLG1CQUFtQixFQUFFO0FBQzNGLCtE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QUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDJCQUEyQixFQUFFO0FBQ25FO0FBQ3dEIiwiZmlsZSI6IjI3LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgZCBhcyBjcmVhdGVFdmVudCwgYyBhcyBnZXRJb25Nb2RlLCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IGYgYXMgZmluZEl0ZW1MYWJlbCwgYSBhcyByZW5kZXJIaWRkZW5JbnB1dCB9IGZyb20gJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBjIGFzIHBvcG92ZXJDb250cm9sbGVyLCBiIGFzIGFjdGlvblNoZWV0Q29udHJvbGxlciwgYSBhcyBhbGVydENvbnRyb2xsZXIsIHMgYXMgc2FmZUNhbGwgfSBmcm9tICcuL292ZXJsYXlzLTEwNjQwZDg2LmpzJztcbmltcG9ydCB7IGggYXMgaG9zdENvbnRleHQgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcbmltcG9ydCB7IHcgYXMgd2F0Y2hGb3JPcHRpb25zIH0gZnJvbSAnLi93YXRjaC1vcHRpb25zLTJhZjk2MDExLmpzJztcbnZhciBTZWxlY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMShob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMuaW5wdXRJZCA9IFwiaW9uLXNlbC1cIiArIHNlbGVjdElkcysrO1xuICAgICAgICB0aGlzLmRpZEluaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBzZWxlY3QuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGV4dCB0byBkaXNwbGF5IG9uIHRoZSBjYW5jZWwgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jYW5jZWxUZXh0ID0gJ0NhbmNlbCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGV4dCB0byBkaXNwbGF5IG9uIHRoZSBvayBidXR0b24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9rVGV4dCA9ICdPSyc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgY29udHJvbCwgd2hpY2ggaXMgc3VibWl0dGVkIHdpdGggdGhlIGZvcm0gZGF0YS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuaW5wdXRJZDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHNlbGVjdCBjYW4gYWNjZXB0IG11bHRpcGxlIHZhbHVlcy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubXVsdGlwbGUgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpbnRlcmZhY2UgdGhlIHNlbGVjdCBzaG91bGQgdXNlOiBgYWN0aW9uLXNoZWV0YCwgYHBvcG92ZXJgIG9yIGBhbGVydGAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmludGVyZmFjZSA9ICdhbGVydCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbnkgYWRkaXRpb25hbCBvcHRpb25zIHRoYXQgdGhlIGBhbGVydGAsIGBhY3Rpb24tc2hlZXRgIG9yIGBwb3BvdmVyYCBpbnRlcmZhY2VcbiAgICAgICAgICogY2FuIHRha2UuIFNlZSB0aGUgW0FsZXJ0Q29udHJvbGxlciBBUEkgZG9jc10oLi4vLi4vYWxlcnQvQWxlcnRDb250cm9sbGVyLyNjcmVhdGUpLCB0aGVcbiAgICAgICAgICogW0FjdGlvblNoZWV0Q29udHJvbGxlciBBUEkgZG9jc10oLi4vLi4vYWN0aW9uLXNoZWV0L0FjdGlvblNoZWV0Q29udHJvbGxlci8jY3JlYXRlKSBhbmQgdGhlXG4gICAgICAgICAqIFtQb3BvdmVyQ29udHJvbGxlciBBUEkgZG9jc10oLi4vLi4vcG9wb3Zlci9Qb3BvdmVyQ29udHJvbGxlci8jY3JlYXRlKSBmb3IgdGhlXG4gICAgICAgICAqIGNyZWF0ZSBvcHRpb25zIGZvciBlYWNoIGludGVyZmFjZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW50ZXJmYWNlT3B0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIF90aGlzLnNldEZvY3VzKCk7XG4gICAgICAgICAgICBfdGhpcy5vcGVuKGV2KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaW9uRm9jdXMuZW1pdCgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmlvbkJsdXIuZW1pdCgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlvbkNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQ2hhbmdlXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkNhbmNlbCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQ2FuY2VsXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Gb2N1c1wiLCA3KTtcbiAgICAgICAgdGhpcy5pb25CbHVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25CbHVyXCIsIDcpO1xuICAgICAgICB0aGlzLmlvblN0eWxlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TdHlsZVwiLCA3KTtcbiAgICB9XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZGlzYWJsZWRDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUudmFsdWVDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICAgICAgaWYgKHRoaXMuZGlkSW5pdCkge1xuICAgICAgICAgICAgdGhpcy5pb25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjaGVja2VkLCBjaGVja2VkO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkID0gdGhpcy5jaGlsZE9wdHMuZmlsdGVyKGZ1bmN0aW9uIChvKSB7IHJldHVybiBvLnNlbGVjdGVkOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBjaGVja2VkLm1hcChmdW5jdGlvbiAobykgeyByZXR1cm4gZ2V0T3B0aW9uVmFsdWUobyk7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCA9IHRoaXMuY2hpbGRPcHRzLmZpbmQoZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8uc2VsZWN0ZWQ7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gZ2V0T3B0aW9uVmFsdWUoY2hlY2tlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPcHRpb25zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPdmVybGF5T3B0aW9ucygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk8gPSB3YXRjaEZvck9wdGlvbnModGhpcy5lbCwgJ2lvbi1zZWxlY3Qtb3B0aW9uJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlT3ZlcmxheU9wdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5tdXRhdGlvbk8pIHtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb21wb25lbnREaWRMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpZEluaXQgPSB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogT3BlbiB0aGUgc2VsZWN0IG92ZXJsYXkuIFRoZSBvdmVybGF5IGlzIGVpdGhlciBhbiBhbGVydCwgYWN0aW9uIHNoZWV0LCBvciBwb3BvdmVyLFxuICAgICAqIGRlcGVuZGluZyBvbiB0aGUgYGludGVyZmFjZWAgcHJvcGVydHkgb24gdGhlIGBpb24tc2VsZWN0YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldmVudCBUaGUgdXNlciBpbnRlcmZhY2UgZXZlbnQgdGhhdCBjYWxsZWQgdGhlIG9wZW4uXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb3ZlcmxheSwgX2E7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pc0V4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHVuZGVmaW5lZF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmNyZWF0ZU92ZXJsYXkoZXZlbnQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheSA9IF9hLm92ZXJsYXkgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRXhwYW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5vbkRpZERpc21pc3MoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5vdmVybGF5ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmlzRXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRGb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBvdmVybGF5LnByZXNlbnQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBvdmVybGF5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jcmVhdGVPdmVybGF5ID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIHZhciBzZWxlY3RJbnRlcmZhY2UgPSB0aGlzLmludGVyZmFjZTtcbiAgICAgICAgaWYgKChzZWxlY3RJbnRlcmZhY2UgPT09ICdhY3Rpb24tc2hlZXQnIHx8IHNlbGVjdEludGVyZmFjZSA9PT0gJ3BvcG92ZXInKSAmJiB0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJTZWxlY3QgaW50ZXJmYWNlIGNhbm5vdCBiZSBcXFwiXCIgKyBzZWxlY3RJbnRlcmZhY2UgKyBcIlxcXCIgd2l0aCBhIG11bHRpLXZhbHVlIHNlbGVjdC4gVXNpbmcgdGhlIFxcXCJhbGVydFxcXCIgaW50ZXJmYWNlIGluc3RlYWQuXCIpO1xuICAgICAgICAgICAgc2VsZWN0SW50ZXJmYWNlID0gJ2FsZXJ0JztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0SW50ZXJmYWNlID09PSAncG9wb3ZlcicgJiYgIWV2KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1NlbGVjdCBpbnRlcmZhY2UgY2Fubm90IGJlIGEgXCJwb3BvdmVyXCIgd2l0aG91dCBwYXNzaW5nIGFuIGV2ZW50LiBVc2luZyB0aGUgXCJhbGVydFwiIGludGVyZmFjZSBpbnN0ZWFkLicpO1xuICAgICAgICAgICAgc2VsZWN0SW50ZXJmYWNlID0gJ2FsZXJ0JztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0SW50ZXJmYWNlID09PSAncG9wb3ZlcicpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wZW5Qb3BvdmVyKGV2KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0SW50ZXJmYWNlID09PSAnYWN0aW9uLXNoZWV0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BlbkFjdGlvblNoZWV0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMub3BlbkFsZXJ0KCk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS51cGRhdGVPdmVybGF5T3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG92ZXJsYXkgPSB0aGlzLm92ZXJsYXk7XG4gICAgICAgIGlmICghb3ZlcmxheSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjaGlsZE9wdHMgPSB0aGlzLmNoaWxkT3B0cztcbiAgICAgICAgc3dpdGNoICh0aGlzLmludGVyZmFjZSkge1xuICAgICAgICAgICAgY2FzZSAnYWN0aW9uLXNoZWV0JzpcbiAgICAgICAgICAgICAgICBvdmVybGF5LmJ1dHRvbnMgPSB0aGlzLmNyZWF0ZUFjdGlvblNoZWV0QnV0dG9ucyhjaGlsZE9wdHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncG9wb3Zlcic6XG4gICAgICAgICAgICAgICAgdmFyIHBvcG92ZXIgPSBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1zZWxlY3QtcG9wb3ZlcicpO1xuICAgICAgICAgICAgICAgIGlmIChwb3BvdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcG92ZXIub3B0aW9ucyA9IHRoaXMuY3JlYXRlUG9wb3Zlck9wdGlvbnMoY2hpbGRPcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhbGVydCc6XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0VHlwZSA9ICh0aGlzLm11bHRpcGxlID8gJ2NoZWNrYm94JyA6ICdyYWRpbycpO1xuICAgICAgICAgICAgICAgIG92ZXJsYXkuaW5wdXRzID0gdGhpcy5jcmVhdGVBbGVydElucHV0cyhjaGlsZE9wdHMsIGlucHV0VHlwZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNyZWF0ZUFjdGlvblNoZWV0QnV0dG9ucyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBhY3Rpb25TaGVldEJ1dHRvbnMgPSBkYXRhLm1hcChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJvbGU6IChvcHRpb24uc2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJycpLFxuICAgICAgICAgICAgICAgIHRleHQ6IG9wdGlvbi50ZXh0Q29udGVudCxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnZhbHVlID0gZ2V0T3B0aW9uVmFsdWUob3B0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQWRkIFwiY2FuY2VsXCIgYnV0dG9uXG4gICAgICAgIGFjdGlvblNoZWV0QnV0dG9ucy5wdXNoKHtcbiAgICAgICAgICAgIHRleHQ6IHRoaXMuY2FuY2VsVGV4dCxcbiAgICAgICAgICAgIHJvbGU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmlvbkNhbmNlbC5lbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWN0aW9uU2hlZXRCdXR0b25zO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY3JlYXRlQWxlcnRJbnB1dHMgPSBmdW5jdGlvbiAoZGF0YSwgaW5wdXRUeXBlKSB7XG4gICAgICAgIHJldHVybiBkYXRhLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBpbnB1dFR5cGUsXG4gICAgICAgICAgICAgICAgbGFiZWw6IG8udGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGdldE9wdGlvblZhbHVlKG8pLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IG8uc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IG8uZGlzYWJsZWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY3JlYXRlUG9wb3Zlck9wdGlvbnMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gZGF0YS5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGdldE9wdGlvblZhbHVlKG8pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBvLnRleHRDb250ZW50LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBvLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBvLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9wZW5Qb3BvdmVyID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpbnRlcmZhY2VPcHRpb25zLCBtb2RlLCBwb3BvdmVyT3B0cztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBpbnRlcmZhY2VPcHRpb25zID0gdGhpcy5pbnRlcmZhY2VPcHRpb25zO1xuICAgICAgICAgICAgICAgIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICAgICAgICAgIHBvcG92ZXJPcHRzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHsgbW9kZTogbW9kZSB9LCBpbnRlcmZhY2VPcHRpb25zKSwgeyBjb21wb25lbnQ6ICdpb24tc2VsZWN0LXBvcG92ZXInLCBjc3NDbGFzczogWydzZWxlY3QtcG9wb3ZlcicsIGludGVyZmFjZU9wdGlvbnMuY3NzQ2xhc3NdLCBldmVudDogZXYsIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IGludGVyZmFjZU9wdGlvbnMuaGVhZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViSGVhZGVyOiBpbnRlcmZhY2VPcHRpb25zLnN1YkhlYWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGludGVyZmFjZU9wdGlvbnMubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5jcmVhdGVQb3BvdmVyT3B0aW9ucyh0aGlzLmNoaWxkT3B0cylcbiAgICAgICAgICAgICAgICAgICAgfSB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcG9wb3ZlckNvbnRyb2xsZXIuY3JlYXRlKHBvcG92ZXJPcHRzKV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5vcGVuQWN0aW9uU2hlZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtb2RlLCBpbnRlcmZhY2VPcHRpb25zLCBhY3Rpb25TaGVldE9wdHM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgICAgICAgICAgaW50ZXJmYWNlT3B0aW9ucyA9IHRoaXMuaW50ZXJmYWNlT3B0aW9ucztcbiAgICAgICAgICAgICAgICBhY3Rpb25TaGVldE9wdHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBtb2RlOiBtb2RlIH0sIGludGVyZmFjZU9wdGlvbnMpLCB7IGJ1dHRvbnM6IHRoaXMuY3JlYXRlQWN0aW9uU2hlZXRCdXR0b25zKHRoaXMuY2hpbGRPcHRzKSwgY3NzQ2xhc3M6IFsnc2VsZWN0LWFjdGlvbi1zaGVldCcsIGludGVyZmFjZU9wdGlvbnMuY3NzQ2xhc3NdIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBhY3Rpb25TaGVldENvbnRyb2xsZXIuY3JlYXRlKGFjdGlvblNoZWV0T3B0cyldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUub3BlbkFsZXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbGFiZWwsIGxhYmVsVGV4dCwgaW50ZXJmYWNlT3B0aW9ucywgaW5wdXRUeXBlLCBtb2RlLCBhbGVydE9wdHM7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gdGhpcy5nZXRMYWJlbCgpO1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dCA9IChsYWJlbCkgPyBsYWJlbC50ZXh0Q29udGVudCA6IG51bGw7XG4gICAgICAgICAgICAgICAgaW50ZXJmYWNlT3B0aW9ucyA9IHRoaXMuaW50ZXJmYWNlT3B0aW9ucztcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGUgPSAodGhpcy5tdWx0aXBsZSA/ICdjaGVja2JveCcgOiAncmFkaW8nKTtcbiAgICAgICAgICAgICAgICBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgICAgICAgICBhbGVydE9wdHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBtb2RlOiBtb2RlIH0sIGludGVyZmFjZU9wdGlvbnMpLCB7IGhlYWRlcjogaW50ZXJmYWNlT3B0aW9ucy5oZWFkZXIgPyBpbnRlcmZhY2VPcHRpb25zLmhlYWRlciA6IGxhYmVsVGV4dCwgaW5wdXRzOiB0aGlzLmNyZWF0ZUFsZXJ0SW5wdXRzKHRoaXMuY2hpbGRPcHRzLCBpbnB1dFR5cGUpLCBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jYW5jZWxUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW9uQ2FuY2VsLmVtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMub2tUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChzZWxlY3RlZFZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy52YWx1ZSA9IHNlbGVjdGVkVmFsdWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSwgY3NzQ2xhc3M6IFsnc2VsZWN0LWFsZXJ0JywgaW50ZXJmYWNlT3B0aW9ucy5jc3NDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLm11bHRpcGxlID8gJ211bHRpcGxlLXNlbGVjdC1hbGVydCcgOiAnc2luZ2xlLXNlbGVjdC1hbGVydCcpXSB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgYWxlcnRDb250cm9sbGVyLmNyZWF0ZShhbGVydE9wdHMpXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsb3NlIHRoZSBzZWxlY3QgaW50ZXJmYWNlLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUT0RPIGNoZWNrICF0aGlzLm92ZXJsYXkgfHwgIXRoaXMuaXNGb2N1cygpXG4gICAgICAgIGlmICghdGhpcy5vdmVybGF5KSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vdmVybGF5LmRpc21pc3MoKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnVwZGF0ZU9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGl0ZXJhdGUgYWxsIG9wdGlvbnMsIHVwZGF0aW5nIHRoZSBzZWxlY3RlZCBwcm9wXG4gICAgICAgIHZhciBjYW5TZWxlY3QgPSB0cnVlO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCB2YWx1ZSA9IF9hLnZhbHVlLCBjaGlsZE9wdHMgPSBfYS5jaGlsZE9wdHMsIGNvbXBhcmVXaXRoID0gX2EuY29tcGFyZVdpdGgsIG11bHRpcGxlID0gX2EubXVsdGlwbGU7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgY2hpbGRPcHRzXzEgPSBjaGlsZE9wdHM7IF9pIDwgY2hpbGRPcHRzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0T3B0aW9uID0gY2hpbGRPcHRzXzFbX2ldO1xuICAgICAgICAgICAgdmFyIG9wdFZhbHVlID0gZ2V0T3B0aW9uVmFsdWUoc2VsZWN0T3B0aW9uKTtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IGNhblNlbGVjdCAmJiBpc09wdGlvblNlbGVjdGVkKHZhbHVlLCBvcHRWYWx1ZSwgY29tcGFyZVdpdGgpO1xuICAgICAgICAgICAgc2VsZWN0T3B0aW9uLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICAgICAgICAvLyBpZiBjdXJyZW50IG9wdGlvbiBpcyBzZWxlY3RlZCBhbmQgc2VsZWN0IGlzIHNpbmdsZS1vcHRpb24sIHdlIGNhbid0IHNlbGVjdFxuICAgICAgICAgICAgLy8gYW55IG9wdGlvbiBtb3JlXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgIW11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgY2FuU2VsZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmdldExhYmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmluZEl0ZW1MYWJlbCh0aGlzLmVsKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmhhc1ZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRUZXh0KCkgIT09ICcnO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcImNoaWxkT3B0c1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tc2VsZWN0LW9wdGlvbicpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZ2V0VGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkVGV4dCA9IHRoaXMuc2VsZWN0ZWRUZXh0O1xuICAgICAgICBpZiAoc2VsZWN0ZWRUZXh0ICE9IG51bGwgJiYgc2VsZWN0ZWRUZXh0ICE9PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkVGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVUZXh0KHRoaXMuY2hpbGRPcHRzLCB0aGlzLnZhbHVlLCB0aGlzLmNvbXBhcmVXaXRoKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnNldEZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5idXR0b25FbCkge1xuICAgICAgICAgICAgdGhpcy5idXR0b25FbC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5lbWl0U3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUuZW1pdCh7XG4gICAgICAgICAgICAnaW50ZXJhY3RpdmUnOiB0cnVlLFxuICAgICAgICAgICAgJ3NlbGVjdCc6IHRydWUsXG4gICAgICAgICAgICAnaGFzLXBsYWNlaG9sZGVyJzogdGhpcy5wbGFjZWhvbGRlciAhPSBudWxsLFxuICAgICAgICAgICAgJ2hhcy12YWx1ZSc6IHRoaXMuaGFzVmFsdWUoKSxcbiAgICAgICAgICAgICdpbnRlcmFjdGl2ZS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgICAgICAnc2VsZWN0LWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLCBwbGFjZWhvbGRlciA9IF9iLnBsYWNlaG9sZGVyLCBuYW1lID0gX2IubmFtZSwgZGlzYWJsZWQgPSBfYi5kaXNhYmxlZCwgaXNFeHBhbmRlZCA9IF9iLmlzRXhwYW5kZWQsIHZhbHVlID0gX2IudmFsdWUsIGVsID0gX2IuZWw7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgdmFyIGxhYmVsSWQgPSB0aGlzLmlucHV0SWQgKyAnLWxibCc7XG4gICAgICAgIHZhciBsYWJlbCA9IGZpbmRJdGVtTGFiZWwoZWwpO1xuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgIGxhYmVsLmlkID0gbGFiZWxJZDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWRkUGxhY2Vob2xkZXJDbGFzcyA9IGZhbHNlO1xuICAgICAgICB2YXIgc2VsZWN0VGV4dCA9IHRoaXMuZ2V0VGV4dCgpO1xuICAgICAgICBpZiAoc2VsZWN0VGV4dCA9PT0gJycgJiYgcGxhY2Vob2xkZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgc2VsZWN0VGV4dCA9IHBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgYWRkUGxhY2Vob2xkZXJDbGFzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVySGlkZGVuSW5wdXQodHJ1ZSwgZWwsIG5hbWUsIHBhcnNlVmFsdWUodmFsdWUpLCBkaXNhYmxlZCk7XG4gICAgICAgIHZhciBzZWxlY3RUZXh0Q2xhc3NlcyA9IHtcbiAgICAgICAgICAgICdzZWxlY3QtdGV4dCc6IHRydWUsXG4gICAgICAgICAgICAnc2VsZWN0LXBsYWNlaG9sZGVyJzogYWRkUGxhY2Vob2xkZXJDbGFzc1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssIHJvbGU6IFwiY29tYm9ib3hcIiwgXCJhcmlhLWhhc3BvcHVwXCI6IFwiZGlhbG9nXCIsIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/ICd0cnVlJyA6IG51bGwsIFwiYXJpYS1leHBhbmRlZFwiOiBcIlwiICsgaXNFeHBhbmRlZCwgXCJhcmlhLWxhYmVsbGVkYnlcIjogbGFiZWxJZCwgY2xhc3M6IChfYSA9IHt9LFxuICAgICAgICAgICAgICAgIF9hW21vZGVdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYVsnaW4taXRlbSddID0gaG9zdENvbnRleHQoJ2lvbi1pdGVtJywgZWwpLFxuICAgICAgICAgICAgICAgIF9hWydzZWxlY3QtZGlzYWJsZWQnXSA9IGRpc2FibGVkLFxuICAgICAgICAgICAgICAgIF9hKSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHNlbGVjdFRleHRDbGFzc2VzIH0sIHNlbGVjdFRleHQpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwic2VsZWN0LWljb25cIiwgcm9sZTogXCJwcmVzZW50YXRpb25cIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwic2VsZWN0LWljb24taW5uZXJcIiB9KSksIGgoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsIG9uQmx1cjogdGhpcy5vbkJsdXIsIGRpc2FibGVkOiBkaXNhYmxlZCwgcmVmOiAoZnVuY3Rpb24gKGJ0bkVsKSB7IHJldHVybiBfdGhpcy5idXR0b25FbCA9IGJ0bkVsOyB9KSB9KSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJ3YXRjaGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcImRpc2FibGVkXCI6IFtcImRpc2FibGVkQ2hhbmdlZFwiXSxcbiAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFtcImRpc2FibGVkQ2hhbmdlZFwiXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFtcInZhbHVlQ2hhbmdlZFwiXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEsIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiOmhvc3R7cGFkZGluZy1sZWZ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctcmlnaHQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpO292ZXJmbG93OmhpZGRlbjt6LWluZGV4OjJ9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezpob3N0e3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpfX06aG9zdCguaW4taXRlbSl7cG9zaXRpb246c3RhdGljO21heC13aWR0aDo0NSV9Omhvc3QoLnNlbGVjdC1kaXNhYmxlZCl7b3BhY2l0eTouNDtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5pb24tZm9jdXNlZCkgYnV0dG9ue2JvcmRlcjoycHggc29saWQgIzVlOWVkNn0uc2VsZWN0LXBsYWNlaG9sZGVye2NvbG9yOmN1cnJlbnRDb2xvcjtvcGFjaXR5Oi4zM31idXR0b257bGVmdDowO3RvcDowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlcjowO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO291dGxpbmU6bm9uZX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgYnV0dG9uLFtkaXI9cnRsXSBidXR0b257bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDowfWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MH0uc2VsZWN0LWljb257cG9zaXRpb246cmVsYXRpdmV9LnNlbGVjdC10ZXh0ey1tcy1mbGV4OjE7ZmxleDoxO21pbi13aWR0aDoxNnB4O2ZvbnQtc2l6ZTppbmhlcml0O3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbn0uc2VsZWN0LWljb24taW5uZXJ7bGVmdDo1cHg7dG9wOjUwJTttYXJnaW4tdG9wOi0zcHg7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MDtoZWlnaHQ6MDtib3JkZXItdG9wOjVweCBzb2xpZDtib3JkZXItcmlnaHQ6NXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1sZWZ0OjVweCBzb2xpZCB0cmFuc3BhcmVudDtjb2xvcjpjdXJyZW50Q29sb3I7b3BhY2l0eTouMzM7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnNlbGVjdC1pY29uLWlubmVyLFtkaXI9cnRsXSAuc2VsZWN0LWljb24taW5uZXJ7bGVmdDp1bnNldDtyaWdodDp1bnNldDtyaWdodDo1cHh9Omhvc3R7LS1wYWRkaW5nLXRvcDoxMHB4Oy0tcGFkZGluZy1lbmQ6OHB4Oy0tcGFkZGluZy1ib3R0b206MTBweDstLXBhZGRpbmctc3RhcnQ6MTZweH0uc2VsZWN0LWljb257d2lkdGg6MTJweDtoZWlnaHQ6MThweH1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzE7XG59KCkpO1xudmFyIGdldE9wdGlvblZhbHVlID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgdmFyIHZhbHVlID0gZWwudmFsdWU7XG4gICAgcmV0dXJuICh2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICA/IGVsLnRleHRDb250ZW50IHx8ICcnXG4gICAgICAgIDogdmFsdWU7XG59O1xudmFyIHBhcnNlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmpvaW4oJywnKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG59O1xudmFyIGlzT3B0aW9uU2VsZWN0ZWQgPSBmdW5jdGlvbiAoY3VycmVudFZhbHVlLCBjb21wYXJlVmFsdWUsIGNvbXBhcmVXaXRoKSB7XG4gICAgaWYgKGN1cnJlbnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSkge1xuICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlLnNvbWUoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gY29tcGFyZU9wdGlvbnModmFsLCBjb21wYXJlVmFsdWUsIGNvbXBhcmVXaXRoKTsgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gY29tcGFyZU9wdGlvbnMoY3VycmVudFZhbHVlLCBjb21wYXJlVmFsdWUsIGNvbXBhcmVXaXRoKTtcbiAgICB9XG59O1xudmFyIGNvbXBhcmVPcHRpb25zID0gZnVuY3Rpb24gKGN1cnJlbnRWYWx1ZSwgY29tcGFyZVZhbHVlLCBjb21wYXJlV2l0aCkge1xuICAgIGlmICh0eXBlb2YgY29tcGFyZVdpdGggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVXaXRoKGN1cnJlbnRWYWx1ZSwgY29tcGFyZVZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGNvbXBhcmVXaXRoID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlW2NvbXBhcmVXaXRoXSA9PT0gY29tcGFyZVZhbHVlW2NvbXBhcmVXaXRoXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50VmFsdWUgPT09IGNvbXBhcmVWYWx1ZTtcbiAgICB9XG59O1xudmFyIGdlbmVyYXRlVGV4dCA9IGZ1bmN0aW9uIChvcHRzLCB2YWx1ZSwgY29tcGFyZVdpdGgpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHRleHRGb3JWYWx1ZShvcHRzLCB2LCBjb21wYXJlV2l0aCk7IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChvcHQpIHsgcmV0dXJuIG9wdCAhPT0gbnVsbDsgfSlcbiAgICAgICAgICAgIC5qb2luKCcsICcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRleHRGb3JWYWx1ZShvcHRzLCB2YWx1ZSwgY29tcGFyZVdpdGgpIHx8ICcnO1xuICAgIH1cbn07XG52YXIgdGV4dEZvclZhbHVlID0gZnVuY3Rpb24gKG9wdHMsIHZhbHVlLCBjb21wYXJlV2l0aCkge1xuICAgIHZhciBzZWxlY3RPcHQgPSBvcHRzLmZpbmQoZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICByZXR1cm4gY29tcGFyZU9wdGlvbnMoZ2V0T3B0aW9uVmFsdWUob3B0KSwgdmFsdWUsIGNvbXBhcmVXaXRoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZWN0T3B0XG4gICAgICAgID8gc2VsZWN0T3B0LnRleHRDb250ZW50XG4gICAgICAgIDogbnVsbDtcbn07XG52YXIgc2VsZWN0SWRzID0gMDtcbnZhciBTZWxlY3RPcHRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VsZWN0T3B0aW9uKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5pbnB1dElkID0gXCJpb24tc2Vsb3B0LVwiICsgc2VsZWN0T3B0aW9uSWRzKys7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBzZWxlY3Qgb3B0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgZWxlbWVudCBpcyBzZWxlY3RlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgU2VsZWN0T3B0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IHJvbGU6IFwib3B0aW9uXCIsIGlkOiB0aGlzLmlucHV0SWQsIGNsYXNzOiBnZXRJb25Nb2RlKHRoaXMpIH0pKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWxlY3RPcHRpb24ucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VsZWN0T3B0aW9uLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIjpob3N0e2Rpc3BsYXk6bm9uZX1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFNlbGVjdE9wdGlvbjtcbn0oKSk7XG52YXIgc2VsZWN0T3B0aW9uSWRzID0gMDtcbnZhciBTZWxlY3RQb3BvdmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlbGVjdFBvcG92ZXIoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogQXJyYXkgb2Ygb3B0aW9ucyBmb3IgdGhlIHBvcG92ZXIgKi9cbiAgICAgICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgfVxuICAgIFNlbGVjdFBvcG92ZXIucHJvdG90eXBlLm9uU2VsZWN0ID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIHZhciBvcHRpb24gPSB0aGlzLm9wdGlvbnMuZmluZChmdW5jdGlvbiAobykgeyByZXR1cm4gby52YWx1ZSA9PT0gZXYudGFyZ2V0LnZhbHVlOyB9KTtcbiAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgc2FmZUNhbGwob3B0aW9uLmhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTZWxlY3RQb3BvdmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiBnZXRJb25Nb2RlKHRoaXMpIH0sIGgoXCJpb24tbGlzdFwiLCBudWxsLCB0aGlzLmhlYWRlciAhPT0gdW5kZWZpbmVkICYmIGgoXCJpb24tbGlzdC1oZWFkZXJcIiwgbnVsbCwgdGhpcy5oZWFkZXIpLCAodGhpcy5zdWJIZWFkZXIgIT09IHVuZGVmaW5lZCB8fCB0aGlzLm1lc3NhZ2UgIT09IHVuZGVmaW5lZCkgJiZcbiAgICAgICAgICAgIGgoXCJpb24taXRlbVwiLCBudWxsLCBoKFwiaW9uLWxhYmVsXCIsIHsgY2xhc3M6IFwiaW9uLXRleHQtd3JhcFwiIH0sIHRoaXMuc3ViSGVhZGVyICE9PSB1bmRlZmluZWQgJiYgaChcImgzXCIsIG51bGwsIHRoaXMuc3ViSGVhZGVyKSwgdGhpcy5tZXNzYWdlICE9PSB1bmRlZmluZWQgJiYgaChcInBcIiwgbnVsbCwgdGhpcy5tZXNzYWdlKSkpLCBoKFwiaW9uLXJhZGlvLWdyb3VwXCIsIG51bGwsIHRoaXMub3B0aW9ucy5tYXAoZnVuY3Rpb24gKG9wdGlvbikgeyByZXR1cm4gaChcImlvbi1pdGVtXCIsIG51bGwsIGgoXCJpb24tbGFiZWxcIiwgbnVsbCwgb3B0aW9uLnRleHQpLCBoKFwiaW9uLXJhZGlvXCIsIHsgY2hlY2tlZDogb3B0aW9uLmNoZWNrZWQsIHZhbHVlOiBvcHRpb24udmFsdWUsIGRpc2FibGVkOiBvcHRpb24uZGlzYWJsZWQgfSkpOyB9KSkpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VsZWN0UG9wb3ZlciwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCIuc2MtaW9uLXNlbGVjdC1wb3BvdmVyLWggaW9uLWxpc3Quc2MtaW9uLXNlbGVjdC1wb3BvdmVye21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDotMXB4O21hcmdpbi1ib3R0b206LTFweH0uc2MtaW9uLXNlbGVjdC1wb3BvdmVyLWggaW9uLWxhYmVsLnNjLWlvbi1zZWxlY3QtcG9wb3ZlciwgLnNjLWlvbi1zZWxlY3QtcG9wb3Zlci1oIGlvbi1saXN0LWhlYWRlci5zYy1pb24tc2VsZWN0LXBvcG92ZXJ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gU2VsZWN0UG9wb3Zlcjtcbn0oKSk7XG5leHBvcnQgeyBTZWxlY3QgYXMgaW9uX3NlbGVjdCwgU2VsZWN0T3B0aW9uIGFzIGlvbl9zZWxlY3Rfb3B0aW9uLCBTZWxlY3RQb3BvdmVyIGFzIGlvbl9zZWxlY3RfcG9wb3ZlciB9O1xuIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xudmFyIGhvc3RDb250ZXh0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBlbCkge1xuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcbn07XG4vKipcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cbiAqL1xudmFyIGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyAoX2EgPSB7XG4gICAgICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBfYVtcImlvbi1jb2xvci1cIiArIGNvbG9yXSA9IHRydWUsXG4gICAgICAgIF9hKSA6IHVuZGVmaW5lZDtcbn07XG52YXIgZ2V0Q2xhc3NMaXN0ID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT0gbnVsbDsgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudHJpbSgpOyB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPT0gJyc7IH0pO1xuICAgIH1cbiAgICByZXR1cm4gW107XG59O1xudmFyIGdldENsYXNzTWFwID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG1hcFtjXSA9IHRydWU7IH0pO1xuICAgIHJldHVybiBtYXA7XG59O1xudmFyIFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xudmFyIG9wZW5VUkwgPSBmdW5jdGlvbiAodXJsLCBldiwgZGlyZWN0aW9uKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByb3V0ZXI7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcbiAgICAgICAgICAgIHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcbiAgICAgICAgICAgIGlmIChyb3V0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgIH0pO1xufSk7IH07XG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iLCJ2YXIgd2F0Y2hGb3JPcHRpb25zID0gZnVuY3Rpb24gKGNvbnRhaW5lckVsLCB0YWdOYW1lLCBvbkNoYW5nZSkge1xuICAgIHZhciBtdXRhdGlvbiA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbkxpc3QpIHtcbiAgICAgICAgb25DaGFuZ2UoZ2V0U2VsZWN0ZWRPcHRpb24obXV0YXRpb25MaXN0LCB0YWdOYW1lKSk7XG4gICAgfSk7XG4gICAgbXV0YXRpb24ub2JzZXJ2ZShjb250YWluZXJFbCwge1xuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gbXV0YXRpb247XG59O1xudmFyIGdldFNlbGVjdGVkT3B0aW9uID0gZnVuY3Rpb24gKG11dGF0aW9uTGlzdCwgdGFnTmFtZSkge1xuICAgIHZhciBuZXdPcHRpb247XG4gICAgbXV0YXRpb25MaXN0LmZvckVhY2goZnVuY3Rpb24gKG11dCkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtdXQuYWRkZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV3T3B0aW9uID0gZmluZENoZWNrZWRPcHRpb24obXV0LmFkZGVkTm9kZXNbaV0sIHRhZ05hbWUpIHx8IG5ld09wdGlvbjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXdPcHRpb247XG59O1xudmFyIGZpbmRDaGVja2VkT3B0aW9uID0gZnVuY3Rpb24gKGVsLCB0YWdOYW1lKSB7XG4gICAgaWYgKGVsLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHZhciBvcHRpb25zID0gKGVsLnRhZ05hbWUgPT09IHRhZ05hbWUudG9VcHBlckNhc2UoKSlcbiAgICAgICAgPyBbZWxdXG4gICAgICAgIDogQXJyYXkuZnJvbShlbC5xdWVyeVNlbGVjdG9yQWxsKHRhZ05hbWUpKTtcbiAgICByZXR1cm4gb3B0aW9ucy5maW5kKGZ1bmN0aW9uIChvKSB7IHJldHVybiBvLmNoZWNrZWQgPT09IHRydWU7IH0pO1xufTtcbmV4cG9ydCB7IGZpbmRDaGVja2VkT3B0aW9uIGFzIGYsIHdhdGNoRm9yT3B0aW9ucyBhcyB3IH07XG4iXSwic291cmNlUm9vdCI6IiJ9