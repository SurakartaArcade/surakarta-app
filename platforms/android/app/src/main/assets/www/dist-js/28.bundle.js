(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-select_3-md.entry.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-select_3-md.entry.js ***!
  \************************************************************************/
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
        get: function () { return ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:currentColor;opacity:.33}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;opacity:.33;pointer-events:none}:host-context([dir=rtl]) .select-icon-inner,[dir=rtl] .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}.select-icon{width:19px;height:19px}"; },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1zZWxlY3RfMy1tZC5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L3RoZW1lLTE4Y2JlMmNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvd2F0Y2gtb3B0aW9ucy0yYWY5NjAxMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUM4RTtBQUMvRjtBQUNxRDtBQUM4QztBQUMxRTtBQUNZO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyREFBVztBQUNwQyx5QkFBeUIsMkRBQVc7QUFDcEMsd0JBQXdCLDJEQUFXO0FBQ25DLHVCQUF1QiwyREFBVztBQUNsQyx3QkFBd0IsMkRBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1REFBUztBQUN4QjtBQUNBO0FBQ0EsbUJBQW1CLHlEQUFXO0FBQzlCO0FBQ0E7QUFDQSxzRUFBc0UsbUJBQW1CLEVBQUU7QUFDM0YsK0RB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QTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsMkJBQTJCLEVBQUU7QUFDbkU7QUFDd0QiLCJmaWxlIjoiMjguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBkIGFzIGNyZWF0ZUV2ZW50LCBjIGFzIGdldElvbk1vZGUsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9jb3JlLWZlZWVmZjBkLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgZiBhcyBmaW5kSXRlbUxhYmVsLCBhIGFzIHJlbmRlckhpZGRlbklucHV0IH0gZnJvbSAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IGMgYXMgcG9wb3ZlckNvbnRyb2xsZXIsIGIgYXMgYWN0aW9uU2hlZXRDb250cm9sbGVyLCBhIGFzIGFsZXJ0Q29udHJvbGxlciwgcyBhcyBzYWZlQ2FsbCB9IGZyb20gJy4vb3ZlcmxheXMtMTA2NDBkODYuanMnO1xuaW1wb3J0IHsgaCBhcyBob3N0Q29udGV4dCB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xuaW1wb3J0IHsgdyBhcyB3YXRjaEZvck9wdGlvbnMgfSBmcm9tICcuL3dhdGNoLW9wdGlvbnMtMmFmOTYwMTEuanMnO1xudmFyIFNlbGVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18xKGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5pbnB1dElkID0gXCJpb24tc2VsLVwiICsgc2VsZWN0SWRzKys7XG4gICAgICAgIHRoaXMuZGlkSW5pdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIHNlbGVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0ZXh0IHRvIGRpc3BsYXkgb24gdGhlIGNhbmNlbCBidXR0b24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNhbmNlbFRleHQgPSAnQ2FuY2VsJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0ZXh0IHRvIGRpc3BsYXkgb24gdGhlIG9rIGJ1dHRvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub2tUZXh0ID0gJ09LJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBjb250cm9sLCB3aGljaCBpcyBzdWJtaXR0ZWQgd2l0aCB0aGUgZm9ybSBkYXRhLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5pbnB1dElkO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgc2VsZWN0IGNhbiBhY2NlcHQgbXVsdGlwbGUgdmFsdWVzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tdWx0aXBsZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGludGVyZmFjZSB0aGUgc2VsZWN0IHNob3VsZCB1c2U6IGBhY3Rpb24tc2hlZXRgLCBgcG9wb3ZlcmAgb3IgYGFsZXJ0YC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW50ZXJmYWNlID0gJ2FsZXJ0JztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFueSBhZGRpdGlvbmFsIG9wdGlvbnMgdGhhdCB0aGUgYGFsZXJ0YCwgYGFjdGlvbi1zaGVldGAgb3IgYHBvcG92ZXJgIGludGVyZmFjZVxuICAgICAgICAgKiBjYW4gdGFrZS4gU2VlIHRoZSBbQWxlcnRDb250cm9sbGVyIEFQSSBkb2NzXSguLi8uLi9hbGVydC9BbGVydENvbnRyb2xsZXIvI2NyZWF0ZSksIHRoZVxuICAgICAgICAgKiBbQWN0aW9uU2hlZXRDb250cm9sbGVyIEFQSSBkb2NzXSguLi8uLi9hY3Rpb24tc2hlZXQvQWN0aW9uU2hlZXRDb250cm9sbGVyLyNjcmVhdGUpIGFuZCB0aGVcbiAgICAgICAgICogW1BvcG92ZXJDb250cm9sbGVyIEFQSSBkb2NzXSguLi8uLi9wb3BvdmVyL1BvcG92ZXJDb250cm9sbGVyLyNjcmVhdGUpIGZvciB0aGVcbiAgICAgICAgICogY3JlYXRlIG9wdGlvbnMgZm9yIGVhY2ggaW50ZXJmYWNlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbnRlcmZhY2VPcHRpb25zID0ge307XG4gICAgICAgIHRoaXMub25DbGljayA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgX3RoaXMuc2V0Rm9jdXMoKTtcbiAgICAgICAgICAgIF90aGlzLm9wZW4oZXYpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5pb25Gb2N1cy5lbWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25CbHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaW9uQmx1ci5lbWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW9uQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DaGFuZ2VcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uQ2FuY2VsID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DYW5jZWxcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uRm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkZvY3VzXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJsdXJcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU3R5bGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblN0eWxlXCIsIDcpO1xuICAgIH1cbiAgICBjbGFzc18xLnByb3RvdHlwZS5kaXNhYmxlZENoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS52YWx1ZUNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9ucygpO1xuICAgICAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICAgICAgICBpZiAodGhpcy5kaWRJbml0KSB7XG4gICAgICAgICAgICB0aGlzLmlvbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNoZWNrZWQsIGNoZWNrZWQ7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgPSB0aGlzLmNoaWxkT3B0cy5maWx0ZXIoZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8uc2VsZWN0ZWQ7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGNoZWNrZWQubWFwKGZ1bmN0aW9uIChvKSB7IHJldHVybiBnZXRPcHRpb25WYWx1ZShvKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkID0gdGhpcy5jaGlsZE9wdHMuZmluZChmdW5jdGlvbiAobykgeyByZXR1cm4gby5zZWxlY3RlZDsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBnZXRPcHRpb25WYWx1ZShjaGVja2VkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU92ZXJsYXlPcHRpb25zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm11dGF0aW9uTyA9IHdhdGNoRm9yT3B0aW9ucyh0aGlzLmVsLCAnaW9uLXNlbGVjdC1vcHRpb24nLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlT3B0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPdmVybGF5T3B0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTsgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZGlzY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm11dGF0aW9uTykge1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk8gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbXBvbmVudERpZExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGlkSW5pdCA9IHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBPcGVuIHRoZSBzZWxlY3Qgb3ZlcmxheS4gVGhlIG92ZXJsYXkgaXMgZWl0aGVyIGFuIGFsZXJ0LCBhY3Rpb24gc2hlZXQsIG9yIHBvcG92ZXIsXG4gICAgICogZGVwZW5kaW5nIG9uIHRoZSBgaW50ZXJmYWNlYCBwcm9wZXJ0eSBvbiB0aGUgYGlvbi1zZWxlY3RgLlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2ZW50IFRoZSB1c2VyIGludGVyZmFjZSBldmVudCB0aGF0IGNhbGxlZCB0aGUgb3Blbi5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvdmVybGF5LCBfYTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdW5kZWZpbmVkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY3JlYXRlT3ZlcmxheShldmVudCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5ID0gX2Eub3ZlcmxheSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5Lm9uRGlkRGlzbWlzcygpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm92ZXJsYXkgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaXNFeHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldEZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG92ZXJsYXkucHJlc2VudCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG92ZXJsYXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmNyZWF0ZU92ZXJsYXkgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgdmFyIHNlbGVjdEludGVyZmFjZSA9IHRoaXMuaW50ZXJmYWNlO1xuICAgICAgICBpZiAoKHNlbGVjdEludGVyZmFjZSA9PT0gJ2FjdGlvbi1zaGVldCcgfHwgc2VsZWN0SW50ZXJmYWNlID09PSAncG9wb3ZlcicpICYmIHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlNlbGVjdCBpbnRlcmZhY2UgY2Fubm90IGJlIFxcXCJcIiArIHNlbGVjdEludGVyZmFjZSArIFwiXFxcIiB3aXRoIGEgbXVsdGktdmFsdWUgc2VsZWN0LiBVc2luZyB0aGUgXFxcImFsZXJ0XFxcIiBpbnRlcmZhY2UgaW5zdGVhZC5cIik7XG4gICAgICAgICAgICBzZWxlY3RJbnRlcmZhY2UgPSAnYWxlcnQnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3RJbnRlcmZhY2UgPT09ICdwb3BvdmVyJyAmJiAhZXYpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignU2VsZWN0IGludGVyZmFjZSBjYW5ub3QgYmUgYSBcInBvcG92ZXJcIiB3aXRob3V0IHBhc3NpbmcgYW4gZXZlbnQuIFVzaW5nIHRoZSBcImFsZXJ0XCIgaW50ZXJmYWNlIGluc3RlYWQuJyk7XG4gICAgICAgICAgICBzZWxlY3RJbnRlcmZhY2UgPSAnYWxlcnQnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3RJbnRlcmZhY2UgPT09ICdwb3BvdmVyJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BlblBvcG92ZXIoZXYpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3RJbnRlcmZhY2UgPT09ICdhY3Rpb24tc2hlZXQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuQWN0aW9uU2hlZXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vcGVuQWxlcnQoKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnVwZGF0ZU92ZXJsYXlPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3ZlcmxheSA9IHRoaXMub3ZlcmxheTtcbiAgICAgICAgaWYgKCFvdmVybGF5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNoaWxkT3B0cyA9IHRoaXMuY2hpbGRPcHRzO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuaW50ZXJmYWNlKSB7XG4gICAgICAgICAgICBjYXNlICdhY3Rpb24tc2hlZXQnOlxuICAgICAgICAgICAgICAgIG92ZXJsYXkuYnV0dG9ucyA9IHRoaXMuY3JlYXRlQWN0aW9uU2hlZXRCdXR0b25zKGNoaWxkT3B0cyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwb3BvdmVyJzpcbiAgICAgICAgICAgICAgICB2YXIgcG9wb3ZlciA9IG92ZXJsYXkucXVlcnlTZWxlY3RvcignaW9uLXNlbGVjdC1wb3BvdmVyJyk7XG4gICAgICAgICAgICAgICAgaWYgKHBvcG92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9wb3Zlci5vcHRpb25zID0gdGhpcy5jcmVhdGVQb3BvdmVyT3B0aW9ucyhjaGlsZE9wdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FsZXJ0JzpcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXRUeXBlID0gKHRoaXMubXVsdGlwbGUgPyAnY2hlY2tib3gnIDogJ3JhZGlvJyk7XG4gICAgICAgICAgICAgICAgb3ZlcmxheS5pbnB1dHMgPSB0aGlzLmNyZWF0ZUFsZXJ0SW5wdXRzKGNoaWxkT3B0cywgaW5wdXRUeXBlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY3JlYXRlQWN0aW9uU2hlZXRCdXR0b25zID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGFjdGlvblNoZWV0QnV0dG9ucyA9IGRhdGEubWFwKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcm9sZTogKG9wdGlvbi5zZWxlY3RlZCA/ICdzZWxlY3RlZCcgOiAnJyksXG4gICAgICAgICAgICAgICAgdGV4dDogb3B0aW9uLnRleHRDb250ZW50LFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudmFsdWUgPSBnZXRPcHRpb25WYWx1ZShvcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBZGQgXCJjYW5jZWxcIiBidXR0b25cbiAgICAgICAgYWN0aW9uU2hlZXRCdXR0b25zLnB1c2goe1xuICAgICAgICAgICAgdGV4dDogdGhpcy5jYW5jZWxUZXh0LFxuICAgICAgICAgICAgcm9sZTogJ2NhbmNlbCcsXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaW9uQ2FuY2VsLmVtaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY3Rpb25TaGVldEJ1dHRvbnM7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jcmVhdGVBbGVydElucHV0cyA9IGZ1bmN0aW9uIChkYXRhLCBpbnB1dFR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IGlucHV0VHlwZSxcbiAgICAgICAgICAgICAgICBsYWJlbDogby50ZXh0Q29udGVudCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZ2V0T3B0aW9uVmFsdWUobyksXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogby5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogby5kaXNhYmxlZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jcmVhdGVQb3BvdmVyT3B0aW9ucyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBkYXRhLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gZ2V0T3B0aW9uVmFsdWUobyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRleHQ6IG8udGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IG8uc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IG8uZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUub3BlblBvcG92ZXIgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGludGVyZmFjZU9wdGlvbnMsIG1vZGUsIHBvcG92ZXJPcHRzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGludGVyZmFjZU9wdGlvbnMgPSB0aGlzLmludGVyZmFjZU9wdGlvbnM7XG4gICAgICAgICAgICAgICAgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgICAgICAgICAgcG9wb3Zlck9wdHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBtb2RlOiBtb2RlIH0sIGludGVyZmFjZU9wdGlvbnMpLCB7IGNvbXBvbmVudDogJ2lvbi1zZWxlY3QtcG9wb3ZlcicsIGNzc0NsYXNzOiBbJ3NlbGVjdC1wb3BvdmVyJywgaW50ZXJmYWNlT3B0aW9ucy5jc3NDbGFzc10sIGV2ZW50OiBldiwgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogaW50ZXJmYWNlT3B0aW9ucy5oZWFkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJIZWFkZXI6IGludGVyZmFjZU9wdGlvbnMuc3ViSGVhZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogaW50ZXJmYWNlT3B0aW9ucy5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLmNyZWF0ZVBvcG92ZXJPcHRpb25zKHRoaXMuY2hpbGRPcHRzKVxuICAgICAgICAgICAgICAgICAgICB9IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBwb3BvdmVyQ29udHJvbGxlci5jcmVhdGUocG9wb3Zlck9wdHMpXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9wZW5BY3Rpb25TaGVldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1vZGUsIGludGVyZmFjZU9wdGlvbnMsIGFjdGlvblNoZWV0T3B0cztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgICAgICAgICBpbnRlcmZhY2VPcHRpb25zID0gdGhpcy5pbnRlcmZhY2VPcHRpb25zO1xuICAgICAgICAgICAgICAgIGFjdGlvblNoZWV0T3B0cyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IG1vZGU6IG1vZGUgfSwgaW50ZXJmYWNlT3B0aW9ucyksIHsgYnV0dG9uczogdGhpcy5jcmVhdGVBY3Rpb25TaGVldEJ1dHRvbnModGhpcy5jaGlsZE9wdHMpLCBjc3NDbGFzczogWydzZWxlY3QtYWN0aW9uLXNoZWV0JywgaW50ZXJmYWNlT3B0aW9ucy5jc3NDbGFzc10gfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGFjdGlvblNoZWV0Q29udHJvbGxlci5jcmVhdGUoYWN0aW9uU2hlZXRPcHRzKV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5vcGVuQWxlcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsYWJlbCwgbGFiZWxUZXh0LCBpbnRlcmZhY2VPcHRpb25zLCBpbnB1dFR5cGUsIG1vZGUsIGFsZXJ0T3B0cztcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwgPSB0aGlzLmdldExhYmVsKCk7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0ID0gKGxhYmVsKSA/IGxhYmVsLnRleHRDb250ZW50IDogbnVsbDtcbiAgICAgICAgICAgICAgICBpbnRlcmZhY2VPcHRpb25zID0gdGhpcy5pbnRlcmZhY2VPcHRpb25zO1xuICAgICAgICAgICAgICAgIGlucHV0VHlwZSA9ICh0aGlzLm11bHRpcGxlID8gJ2NoZWNrYm94JyA6ICdyYWRpbycpO1xuICAgICAgICAgICAgICAgIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICAgICAgICAgIGFsZXJ0T3B0cyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IG1vZGU6IG1vZGUgfSwgaW50ZXJmYWNlT3B0aW9ucyksIHsgaGVhZGVyOiBpbnRlcmZhY2VPcHRpb25zLmhlYWRlciA/IGludGVyZmFjZU9wdGlvbnMuaGVhZGVyIDogbGFiZWxUZXh0LCBpbnB1dHM6IHRoaXMuY3JlYXRlQWxlcnRJbnB1dHModGhpcy5jaGlsZE9wdHMsIGlucHV0VHlwZSksIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNhbmNlbFRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogJ2NhbmNlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5pb25DYW5jZWwuZW1pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5va1RleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKHNlbGVjdGVkVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnZhbHVlID0gc2VsZWN0ZWRWYWx1ZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLCBjc3NDbGFzczogWydzZWxlY3QtYWxlcnQnLCBpbnRlcmZhY2VPcHRpb25zLmNzc0NsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMubXVsdGlwbGUgPyAnbXVsdGlwbGUtc2VsZWN0LWFsZXJ0JyA6ICdzaW5nbGUtc2VsZWN0LWFsZXJ0JyldIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBhbGVydENvbnRyb2xsZXIuY3JlYXRlKGFsZXJ0T3B0cyldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xvc2UgdGhlIHNlbGVjdCBpbnRlcmZhY2UuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFRPRE8gY2hlY2sgIXRoaXMub3ZlcmxheSB8fCAhdGhpcy5pc0ZvY3VzKClcbiAgICAgICAgaWYgKCF0aGlzLm92ZXJsYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm92ZXJsYXkuZGlzbWlzcygpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUudXBkYXRlT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gaXRlcmF0ZSBhbGwgb3B0aW9ucywgdXBkYXRpbmcgdGhlIHNlbGVjdGVkIHByb3BcbiAgICAgICAgdmFyIGNhblNlbGVjdCA9IHRydWU7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIHZhbHVlID0gX2EudmFsdWUsIGNoaWxkT3B0cyA9IF9hLmNoaWxkT3B0cywgY29tcGFyZVdpdGggPSBfYS5jb21wYXJlV2l0aCwgbXVsdGlwbGUgPSBfYS5tdWx0aXBsZTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBjaGlsZE9wdHNfMSA9IGNoaWxkT3B0czsgX2kgPCBjaGlsZE9wdHNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RPcHRpb24gPSBjaGlsZE9wdHNfMVtfaV07XG4gICAgICAgICAgICB2YXIgb3B0VmFsdWUgPSBnZXRPcHRpb25WYWx1ZShzZWxlY3RPcHRpb24pO1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gY2FuU2VsZWN0ICYmIGlzT3B0aW9uU2VsZWN0ZWQodmFsdWUsIG9wdFZhbHVlLCBjb21wYXJlV2l0aCk7XG4gICAgICAgICAgICBzZWxlY3RPcHRpb24uc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgICAgICAgIC8vIGlmIGN1cnJlbnQgb3B0aW9uIGlzIHNlbGVjdGVkIGFuZCBzZWxlY3QgaXMgc2luZ2xlLW9wdGlvbiwgd2UgY2FuJ3Qgc2VsZWN0XG4gICAgICAgICAgICAvLyBhbnkgb3B0aW9uIG1vcmVcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCAmJiAhbXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBjYW5TZWxlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZ2V0TGFiZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmaW5kSXRlbUxhYmVsKHRoaXMuZWwpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuaGFzVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRleHQoKSAhPT0gJyc7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMS5wcm90b3R5cGUsIFwiY2hpbGRPcHRzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1zZWxlY3Qtb3B0aW9uJykpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5nZXRUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZWN0ZWRUZXh0ID0gdGhpcy5zZWxlY3RlZFRleHQ7XG4gICAgICAgIGlmIChzZWxlY3RlZFRleHQgIT0gbnVsbCAmJiBzZWxlY3RlZFRleHQgIT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRUZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZVRleHQodGhpcy5jaGlsZE9wdHMsIHRoaXMudmFsdWUsIHRoaXMuY29tcGFyZVdpdGgpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc2V0Rm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbkVsKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkVsLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmVtaXRTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pb25TdHlsZS5lbWl0KHtcbiAgICAgICAgICAgICdpbnRlcmFjdGl2ZSc6IHRydWUsXG4gICAgICAgICAgICAnc2VsZWN0JzogdHJ1ZSxcbiAgICAgICAgICAgICdoYXMtcGxhY2Vob2xkZXInOiB0aGlzLnBsYWNlaG9sZGVyICE9IG51bGwsXG4gICAgICAgICAgICAnaGFzLXZhbHVlJzogdGhpcy5oYXNWYWx1ZSgpLFxuICAgICAgICAgICAgJ2ludGVyYWN0aXZlLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICdzZWxlY3QtZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYiA9IHRoaXMsIHBsYWNlaG9sZGVyID0gX2IucGxhY2Vob2xkZXIsIG5hbWUgPSBfYi5uYW1lLCBkaXNhYmxlZCA9IF9iLmRpc2FibGVkLCBpc0V4cGFuZGVkID0gX2IuaXNFeHBhbmRlZCwgdmFsdWUgPSBfYi52YWx1ZSwgZWwgPSBfYi5lbDtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICB2YXIgbGFiZWxJZCA9IHRoaXMuaW5wdXRJZCArICctbGJsJztcbiAgICAgICAgdmFyIGxhYmVsID0gZmluZEl0ZW1MYWJlbChlbCk7XG4gICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgbGFiZWwuaWQgPSBsYWJlbElkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhZGRQbGFjZWhvbGRlckNsYXNzID0gZmFsc2U7XG4gICAgICAgIHZhciBzZWxlY3RUZXh0ID0gdGhpcy5nZXRUZXh0KCk7XG4gICAgICAgIGlmIChzZWxlY3RUZXh0ID09PSAnJyAmJiBwbGFjZWhvbGRlciAhPSBudWxsKSB7XG4gICAgICAgICAgICBzZWxlY3RUZXh0ID0gcGxhY2Vob2xkZXI7XG4gICAgICAgICAgICBhZGRQbGFjZWhvbGRlckNsYXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXJIaWRkZW5JbnB1dCh0cnVlLCBlbCwgbmFtZSwgcGFyc2VWYWx1ZSh2YWx1ZSksIGRpc2FibGVkKTtcbiAgICAgICAgdmFyIHNlbGVjdFRleHRDbGFzc2VzID0ge1xuICAgICAgICAgICAgJ3NlbGVjdC10ZXh0JzogdHJ1ZSxcbiAgICAgICAgICAgICdzZWxlY3QtcGxhY2Vob2xkZXInOiBhZGRQbGFjZWhvbGRlckNsYXNzXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMub25DbGljaywgcm9sZTogXCJjb21ib2JveFwiLCBcImFyaWEtaGFzcG9wdXBcIjogXCJkaWFsb2dcIiwgXCJhcmlhLWRpc2FibGVkXCI6IGRpc2FibGVkID8gJ3RydWUnIDogbnVsbCwgXCJhcmlhLWV4cGFuZGVkXCI6IFwiXCIgKyBpc0V4cGFuZGVkLCBcImFyaWEtbGFiZWxsZWRieVwiOiBsYWJlbElkLCBjbGFzczogKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hWydpbi1pdGVtJ10gPSBob3N0Q29udGV4dCgnaW9uLWl0ZW0nLCBlbCksXG4gICAgICAgICAgICAgICAgX2FbJ3NlbGVjdC1kaXNhYmxlZCddID0gZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgX2EpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogc2VsZWN0VGV4dENsYXNzZXMgfSwgc2VsZWN0VGV4dCksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJzZWxlY3QtaWNvblwiLCByb2xlOiBcInByZXNlbnRhdGlvblwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJzZWxlY3QtaWNvbi1pbm5lclwiIH0pKSwgaChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uRm9jdXM6IHRoaXMub25Gb2N1cywgb25CbHVyOiB0aGlzLm9uQmx1ciwgZGlzYWJsZWQ6IGRpc2FibGVkLCByZWY6IChmdW5jdGlvbiAoYnRuRWwpIHsgcmV0dXJuIF90aGlzLmJ1dHRvbkVsID0gYnRuRWw7IH0pIH0pKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMS5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdLFxuICAgICAgICAgICAgICAgIFwicGxhY2Vob2xkZXJcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogW1widmFsdWVDaGFuZ2VkXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCI6aG9zdHtwYWRkaW5nLWxlZnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1yaWdodDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmctYm90dG9tKTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCk7b3ZlcmZsb3c6aGlkZGVuO3otaW5kZXg6Mn1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3R7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCl9fTpob3N0KC5pbi1pdGVtKXtwb3NpdGlvbjpzdGF0aWM7bWF4LXdpZHRoOjQ1JX06aG9zdCguc2VsZWN0LWRpc2FibGVkKXtvcGFjaXR5Oi40O3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLmlvbi1mb2N1c2VkKSBidXR0b257Ym9yZGVyOjJweCBzb2xpZCAjNWU5ZWQ2fS5zZWxlY3QtcGxhY2Vob2xkZXJ7Y29sb3I6Y3VycmVudENvbG9yO29wYWNpdHk6LjMzfWJ1dHRvbntsZWZ0OjA7dG9wOjA7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyOjA7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7b3V0bGluZTpub25lfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBidXR0b24sW2Rpcj1ydGxdIGJ1dHRvbntsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjB9YnV0dG9uOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfS5zZWxlY3QtaWNvbntwb3NpdGlvbjpyZWxhdGl2ZX0uc2VsZWN0LXRleHR7LW1zLWZsZXg6MTtmbGV4OjE7bWluLXdpZHRoOjE2cHg7Zm9udC1zaXplOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVufS5zZWxlY3QtaWNvbi1pbm5lcntsZWZ0OjVweDt0b3A6NTAlO21hcmdpbi10b3A6LTNweDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDowO2hlaWdodDowO2JvcmRlci10b3A6NXB4IHNvbGlkO2JvcmRlci1yaWdodDo1cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWxlZnQ6NXB4IHNvbGlkIHRyYW5zcGFyZW50O2NvbG9yOmN1cnJlbnRDb2xvcjtvcGFjaXR5Oi4zMztwb2ludGVyLWV2ZW50czpub25lfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuc2VsZWN0LWljb24taW5uZXIsW2Rpcj1ydGxdIC5zZWxlY3QtaWNvbi1pbm5lcntsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjVweH06aG9zdHstLXBhZGRpbmctdG9wOjEwcHg7LS1wYWRkaW5nLWVuZDowOy0tcGFkZGluZy1ib3R0b206MTFweDstLXBhZGRpbmctc3RhcnQ6MTZweH0uc2VsZWN0LWljb257d2lkdGg6MTlweDtoZWlnaHQ6MTlweH1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzE7XG59KCkpO1xudmFyIGdldE9wdGlvblZhbHVlID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgdmFyIHZhbHVlID0gZWwudmFsdWU7XG4gICAgcmV0dXJuICh2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICA/IGVsLnRleHRDb250ZW50IHx8ICcnXG4gICAgICAgIDogdmFsdWU7XG59O1xudmFyIHBhcnNlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmpvaW4oJywnKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG59O1xudmFyIGlzT3B0aW9uU2VsZWN0ZWQgPSBmdW5jdGlvbiAoY3VycmVudFZhbHVlLCBjb21wYXJlVmFsdWUsIGNvbXBhcmVXaXRoKSB7XG4gICAgaWYgKGN1cnJlbnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSkge1xuICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlLnNvbWUoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gY29tcGFyZU9wdGlvbnModmFsLCBjb21wYXJlVmFsdWUsIGNvbXBhcmVXaXRoKTsgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gY29tcGFyZU9wdGlvbnMoY3VycmVudFZhbHVlLCBjb21wYXJlVmFsdWUsIGNvbXBhcmVXaXRoKTtcbiAgICB9XG59O1xudmFyIGNvbXBhcmVPcHRpb25zID0gZnVuY3Rpb24gKGN1cnJlbnRWYWx1ZSwgY29tcGFyZVZhbHVlLCBjb21wYXJlV2l0aCkge1xuICAgIGlmICh0eXBlb2YgY29tcGFyZVdpdGggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVXaXRoKGN1cnJlbnRWYWx1ZSwgY29tcGFyZVZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGNvbXBhcmVXaXRoID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlW2NvbXBhcmVXaXRoXSA9PT0gY29tcGFyZVZhbHVlW2NvbXBhcmVXaXRoXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50VmFsdWUgPT09IGNvbXBhcmVWYWx1ZTtcbiAgICB9XG59O1xudmFyIGdlbmVyYXRlVGV4dCA9IGZ1bmN0aW9uIChvcHRzLCB2YWx1ZSwgY29tcGFyZVdpdGgpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHRleHRGb3JWYWx1ZShvcHRzLCB2LCBjb21wYXJlV2l0aCk7IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChvcHQpIHsgcmV0dXJuIG9wdCAhPT0gbnVsbDsgfSlcbiAgICAgICAgICAgIC5qb2luKCcsICcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRleHRGb3JWYWx1ZShvcHRzLCB2YWx1ZSwgY29tcGFyZVdpdGgpIHx8ICcnO1xuICAgIH1cbn07XG52YXIgdGV4dEZvclZhbHVlID0gZnVuY3Rpb24gKG9wdHMsIHZhbHVlLCBjb21wYXJlV2l0aCkge1xuICAgIHZhciBzZWxlY3RPcHQgPSBvcHRzLmZpbmQoZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICByZXR1cm4gY29tcGFyZU9wdGlvbnMoZ2V0T3B0aW9uVmFsdWUob3B0KSwgdmFsdWUsIGNvbXBhcmVXaXRoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZWN0T3B0XG4gICAgICAgID8gc2VsZWN0T3B0LnRleHRDb250ZW50XG4gICAgICAgIDogbnVsbDtcbn07XG52YXIgc2VsZWN0SWRzID0gMDtcbnZhciBTZWxlY3RPcHRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VsZWN0T3B0aW9uKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5pbnB1dElkID0gXCJpb24tc2Vsb3B0LVwiICsgc2VsZWN0T3B0aW9uSWRzKys7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBzZWxlY3Qgb3B0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgZWxlbWVudCBpcyBzZWxlY3RlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgU2VsZWN0T3B0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IHJvbGU6IFwib3B0aW9uXCIsIGlkOiB0aGlzLmlucHV0SWQsIGNsYXNzOiBnZXRJb25Nb2RlKHRoaXMpIH0pKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWxlY3RPcHRpb24ucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VsZWN0T3B0aW9uLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIjpob3N0e2Rpc3BsYXk6bm9uZX1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFNlbGVjdE9wdGlvbjtcbn0oKSk7XG52YXIgc2VsZWN0T3B0aW9uSWRzID0gMDtcbnZhciBTZWxlY3RQb3BvdmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlbGVjdFBvcG92ZXIoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogQXJyYXkgb2Ygb3B0aW9ucyBmb3IgdGhlIHBvcG92ZXIgKi9cbiAgICAgICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgfVxuICAgIFNlbGVjdFBvcG92ZXIucHJvdG90eXBlLm9uU2VsZWN0ID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIHZhciBvcHRpb24gPSB0aGlzLm9wdGlvbnMuZmluZChmdW5jdGlvbiAobykgeyByZXR1cm4gby52YWx1ZSA9PT0gZXYudGFyZ2V0LnZhbHVlOyB9KTtcbiAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgc2FmZUNhbGwob3B0aW9uLmhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTZWxlY3RQb3BvdmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiBnZXRJb25Nb2RlKHRoaXMpIH0sIGgoXCJpb24tbGlzdFwiLCBudWxsLCB0aGlzLmhlYWRlciAhPT0gdW5kZWZpbmVkICYmIGgoXCJpb24tbGlzdC1oZWFkZXJcIiwgbnVsbCwgdGhpcy5oZWFkZXIpLCAodGhpcy5zdWJIZWFkZXIgIT09IHVuZGVmaW5lZCB8fCB0aGlzLm1lc3NhZ2UgIT09IHVuZGVmaW5lZCkgJiZcbiAgICAgICAgICAgIGgoXCJpb24taXRlbVwiLCBudWxsLCBoKFwiaW9uLWxhYmVsXCIsIHsgY2xhc3M6IFwiaW9uLXRleHQtd3JhcFwiIH0sIHRoaXMuc3ViSGVhZGVyICE9PSB1bmRlZmluZWQgJiYgaChcImgzXCIsIG51bGwsIHRoaXMuc3ViSGVhZGVyKSwgdGhpcy5tZXNzYWdlICE9PSB1bmRlZmluZWQgJiYgaChcInBcIiwgbnVsbCwgdGhpcy5tZXNzYWdlKSkpLCBoKFwiaW9uLXJhZGlvLWdyb3VwXCIsIG51bGwsIHRoaXMub3B0aW9ucy5tYXAoZnVuY3Rpb24gKG9wdGlvbikgeyByZXR1cm4gaChcImlvbi1pdGVtXCIsIG51bGwsIGgoXCJpb24tbGFiZWxcIiwgbnVsbCwgb3B0aW9uLnRleHQpLCBoKFwiaW9uLXJhZGlvXCIsIHsgY2hlY2tlZDogb3B0aW9uLmNoZWNrZWQsIHZhbHVlOiBvcHRpb24udmFsdWUsIGRpc2FibGVkOiBvcHRpb24uZGlzYWJsZWQgfSkpOyB9KSkpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VsZWN0UG9wb3ZlciwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCIuc2MtaW9uLXNlbGVjdC1wb3BvdmVyLWggaW9uLWxpc3Quc2MtaW9uLXNlbGVjdC1wb3BvdmVye21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDotMXB4O21hcmdpbi1ib3R0b206LTFweH0uc2MtaW9uLXNlbGVjdC1wb3BvdmVyLWggaW9uLWxhYmVsLnNjLWlvbi1zZWxlY3QtcG9wb3ZlciwgLnNjLWlvbi1zZWxlY3QtcG9wb3Zlci1oIGlvbi1saXN0LWhlYWRlci5zYy1pb24tc2VsZWN0LXBvcG92ZXJ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gU2VsZWN0UG9wb3Zlcjtcbn0oKSk7XG5leHBvcnQgeyBTZWxlY3QgYXMgaW9uX3NlbGVjdCwgU2VsZWN0T3B0aW9uIGFzIGlvbl9zZWxlY3Rfb3B0aW9uLCBTZWxlY3RQb3BvdmVyIGFzIGlvbl9zZWxlY3RfcG9wb3ZlciB9O1xuIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xudmFyIGhvc3RDb250ZXh0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBlbCkge1xuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcbn07XG4vKipcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cbiAqL1xudmFyIGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyAoX2EgPSB7XG4gICAgICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBfYVtcImlvbi1jb2xvci1cIiArIGNvbG9yXSA9IHRydWUsXG4gICAgICAgIF9hKSA6IHVuZGVmaW5lZDtcbn07XG52YXIgZ2V0Q2xhc3NMaXN0ID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT0gbnVsbDsgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudHJpbSgpOyB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPT0gJyc7IH0pO1xuICAgIH1cbiAgICByZXR1cm4gW107XG59O1xudmFyIGdldENsYXNzTWFwID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG1hcFtjXSA9IHRydWU7IH0pO1xuICAgIHJldHVybiBtYXA7XG59O1xudmFyIFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xudmFyIG9wZW5VUkwgPSBmdW5jdGlvbiAodXJsLCBldiwgZGlyZWN0aW9uKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByb3V0ZXI7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcbiAgICAgICAgICAgIHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcbiAgICAgICAgICAgIGlmIChyb3V0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgIH0pO1xufSk7IH07XG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iLCJ2YXIgd2F0Y2hGb3JPcHRpb25zID0gZnVuY3Rpb24gKGNvbnRhaW5lckVsLCB0YWdOYW1lLCBvbkNoYW5nZSkge1xuICAgIHZhciBtdXRhdGlvbiA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbkxpc3QpIHtcbiAgICAgICAgb25DaGFuZ2UoZ2V0U2VsZWN0ZWRPcHRpb24obXV0YXRpb25MaXN0LCB0YWdOYW1lKSk7XG4gICAgfSk7XG4gICAgbXV0YXRpb24ub2JzZXJ2ZShjb250YWluZXJFbCwge1xuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gbXV0YXRpb247XG59O1xudmFyIGdldFNlbGVjdGVkT3B0aW9uID0gZnVuY3Rpb24gKG11dGF0aW9uTGlzdCwgdGFnTmFtZSkge1xuICAgIHZhciBuZXdPcHRpb247XG4gICAgbXV0YXRpb25MaXN0LmZvckVhY2goZnVuY3Rpb24gKG11dCkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtdXQuYWRkZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV3T3B0aW9uID0gZmluZENoZWNrZWRPcHRpb24obXV0LmFkZGVkTm9kZXNbaV0sIHRhZ05hbWUpIHx8IG5ld09wdGlvbjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXdPcHRpb247XG59O1xudmFyIGZpbmRDaGVja2VkT3B0aW9uID0gZnVuY3Rpb24gKGVsLCB0YWdOYW1lKSB7XG4gICAgaWYgKGVsLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHZhciBvcHRpb25zID0gKGVsLnRhZ05hbWUgPT09IHRhZ05hbWUudG9VcHBlckNhc2UoKSlcbiAgICAgICAgPyBbZWxdXG4gICAgICAgIDogQXJyYXkuZnJvbShlbC5xdWVyeVNlbGVjdG9yQWxsKHRhZ05hbWUpKTtcbiAgICByZXR1cm4gb3B0aW9ucy5maW5kKGZ1bmN0aW9uIChvKSB7IHJldHVybiBvLmNoZWNrZWQgPT09IHRydWU7IH0pO1xufTtcbmV4cG9ydCB7IGZpbmRDaGVja2VkT3B0aW9uIGFzIGYsIHdhdGNoRm9yT3B0aW9ucyBhcyB3IH07XG4iXSwic291cmNlUm9vdCI6IiJ9