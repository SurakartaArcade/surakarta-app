(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-button_2-md.entry.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-button_2-md.entry.js ***!
  \************************************************************************/
/*! exports provided: ion_button, ion_icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_icon", function() { return Icon; });
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");




var Button = /** @class */ (function () {
    function Button(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.inToolbar = false;
        this.inItem = false;
        /**
         * The type of button.
         */
        this.buttonType = 'button';
        /**
         * If `true`, the user cannot interact with the button.
         */
        this.disabled = false;
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */
        this.routerDirection = 'forward';
        /**
         * If `true`, activates a button with a heavier font weight.
         */
        this.strong = false;
        /**
         * The type of the button.
         */
        this.type = 'button';
        this.handleClick = function (ev) {
            if (_this.type === 'button') {
                Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["o"])(_this.href, ev, _this.routerDirection);
            }
            else if (Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["h"])(_this.el)) {
                // this button wants to specifically submit a form
                // climb up the dom to see if we're in a <form>
                // and if so, then use JS to submit it
                var form = _this.el.closest('form');
                if (form) {
                    ev.preventDefault();
                    var fakeButton = document.createElement('button');
                    fakeButton.type = _this.type;
                    fakeButton.style.display = 'none';
                    form.appendChild(fakeButton);
                    fakeButton.click();
                    fakeButton.remove();
                }
            }
        };
        this.onFocus = function () {
            _this.ionFocus.emit();
        };
        this.onBlur = function () {
            _this.ionBlur.emit();
        };
        this.ionFocus = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionFocus", 7);
        this.ionBlur = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionBlur", 7);
    }
    Button.prototype.componentWillLoad = function () {
        this.inToolbar = !!this.el.closest('ion-buttons');
        this.inItem = !!this.el.closest('ion-item') || !!this.el.closest('ion-item-divider');
    };
    Object.defineProperty(Button.prototype, "hasIconOnly", {
        get: function () {
            return !!this.el.querySelector('ion-icon[slot="icon-only"]');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "rippleType", {
        get: function () {
            var hasClearFill = this.fill === undefined || this.fill === 'clear';
            // If the button is in a toolbar, has a clear fill (which is the default)
            // and only has an icon we use the unbounded "circular" ripple effect
            if (hasClearFill && this.hasIconOnly && this.inToolbar) {
                return 'unbounded';
            }
            return 'bounded';
        },
        enumerable: true,
        configurable: true
    });
    Button.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        var _b = this, buttonType = _b.buttonType, type = _b.type, disabled = _b.disabled, rel = _b.rel, target = _b.target, size = _b.size, href = _b.href, color = _b.color, expand = _b.expand, hasIconOnly = _b.hasIconOnly, shape = _b.shape, strong = _b.strong;
        var finalSize = size === undefined && this.inItem ? 'small' : size;
        var TagType = href === undefined ? 'button' : 'a';
        var attrs = (TagType === 'button')
            ? { type: type }
            : {
                download: this.download,
                href: href,
                rel: rel,
                target: target
            };
        var fill = this.fill;
        if (fill === undefined) {
            fill = this.inToolbar ? 'clear' : 'solid';
        }
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.handleClick, "aria-disabled": disabled ? 'true' : null, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(color)), (_a = {}, _a[mode] = true, _a[buttonType] = true, _a[buttonType + "-" + expand] = expand !== undefined, _a[buttonType + "-" + finalSize] = finalSize !== undefined, _a[buttonType + "-" + shape] = shape !== undefined, _a[buttonType + "-" + fill] = true, _a[buttonType + "-strong"] = strong, _a['button-has-icon-only'] = hasIconOnly, _a['button-disabled'] = disabled, _a['ion-activatable'] = true, _a['ion-focusable'] = true, _a)) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, Object.assign({}, attrs, { class: "button-native", disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "button-inner" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "icon-only" }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "start" }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "end" })), mode === 'md' && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", { type: this.rippleType }))));
    };
    Object.defineProperty(Button.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button, "style", {
        get: function () { return ":host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-hover:initial;--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){--opacity:.5;pointer-events:none}:host(.button-disabled) .button-native{cursor:default;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary,#3880ff);--background-focused:var(--ion-color-primary-shade,#3171e0);--background-hover:var(--ion-color-primary-tint,#4c8dff);--color:var(--ion-color-primary-contrast,#fff);--color-activated:var(--ion-color-primary-contrast,#fff);--color-focused:var(--ion-color-primary-contrast,#fff)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-solid.ion-color.ion-focused) .button-native{background:var(--ion-color-shade)}:host(.button-outline){--border-color:var(--ion-color-primary,#3880ff);--background:transparent;--color:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary,#3880ff)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-focused.ion-color) .button-native{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}:host(.button-clear.activated.ion-color) .button-native{background:transparent}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native:after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-.3em;margin-right:.3em;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-.3em;margin-inline-start:-.3em;-webkit-margin-end:.3em;margin-inline-end:.3em}}::slotted(ion-icon[slot=end]){margin-left:.3em;margin-right:-.2em;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:.3em;margin-inline-start:.3em;-webkit-margin-end:-.2em;margin-inline-end:-.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.activated) .button-native{background:var(--background-activated);color:var(--color-activated)}\@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host{--border-radius:4px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4,0,.2,1),background-color 15ms linear,color 15ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:36px;font-size:14px;font-weight:500;letter-spacing:.06em;text-transform:uppercase}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:var(--background);--box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12)}:host(.button-solid.activated){--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--background-hover:rgba(var(--ion-color-primary-rgb,56,128,255),0.04);--color-activated:var(--ion-color-primary,#3880ff)}:host(.button-outline.activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--background-hover:rgba(var(--ion-color-primary-rgb,56,128,255),0.04);--color-activated:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-strong){font-weight:700}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}\@media (any-hover:hover){:host(.button-solid.ion-color:hover) .button-native{background:var(--ion-color-tint)}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb),.04)}}"; },
        enumerable: true,
        configurable: true
    });
    return Button;
}());
var CACHED_MAP;
var getIconMap = function () {
    if (!CACHED_MAP) {
        var win = window;
        win.Ionicons = win.Ionicons || {};
        CACHED_MAP = win.Ionicons.map = win.Ionicons.map || new Map();
    }
    return CACHED_MAP;
};
var getUrl = function (i) {
    var url = getSrc(i.src);
    if (url) {
        return url;
    }
    url = getName(i.name, i.icon, i.mode, i.ios, i.md);
    if (url) {
        return getNamedUrl(url);
    }
    if (i.icon) {
        url = getSrc(i.icon);
        if (url) {
            return url;
        }
        url = getSrc(i.icon[i.mode]);
        if (url) {
            return url;
        }
    }
    return null;
};
var getNamedUrl = function (name) {
    var url = getIconMap().get(name);
    if (url) {
        return url;
    }
    return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["i"])("svg/" + name + ".svg");
};
var getName = function (name, icon, mode, ios, md) {
    // default to "md" if somehow the mode wasn't set
    mode = (mode && mode.toLowerCase()) === 'ios' ? 'ios' : 'md';
    // if an icon was passed in using the ios or md attributes
    // set the iconName to whatever was passed in
    if (ios && mode === 'ios') {
        name = ios.toLowerCase();
    }
    else if (md && mode === 'md') {
        name = md.toLowerCase();
    }
    else {
        if (!name && icon && !isSrc(icon)) {
            name = icon;
        }
        if (isStr(name)) {
            name = name.toLowerCase();
            if (!/^md-|^ios-|^logo-/.test(name)) {
                // this does not have one of the defaults
                // so lets auto add in the mode prefix for them
                name = mode + '-' + name;
            }
        }
    }
    if (!isStr(name) || name.trim() === '') {
        return null;
    }
    // only allow alpha characters and dash
    var invalidChars = name.replace(/[a-z]|-|\d/gi, '');
    if (invalidChars !== '') {
        return null;
    }
    return name;
};
var getSrc = function (src) {
    if (isStr(src)) {
        src = src.trim();
        if (isSrc(src)) {
            return src;
        }
    }
    return null;
};
var isSrc = function (str) {
    return str.length > 0 && /(\/|\.)/.test(str);
};
var isStr = function (val) { return typeof val === 'string'; };
var validateContent = function (svgContent) {
    if (svgContent) {
        var div = document.createElement('div');
        div.innerHTML = svgContent;
        // setup this way to ensure it works on our buddy IE
        for (var i = div.childNodes.length - 1; i >= 0; i--) {
            if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
                div.removeChild(div.childNodes[i]);
            }
        }
        // must only have 1 root element
        var svgElm = div.firstElementChild;
        if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
            svgElm.setAttribute('class', 's-ion-icon');
            // root element must be an svg
            // lets double check we've got valid elements
            // do not allow scripts
            if (isValid(svgElm)) {
                return div.innerHTML;
            }
        }
    }
    return '';
};
var isValid = function (elm) {
    if (elm.nodeType === 1) {
        if (elm.nodeName.toLowerCase() === 'script') {
            return false;
        }
        for (var i = 0; i < elm.attributes.length; i++) {
            var val = elm.attributes[i].value;
            if (isStr(val) && val.toLowerCase().indexOf('on') === 0) {
                return false;
            }
        }
        for (var i = 0; i < elm.childNodes.length; i++) {
            if (!isValid(elm.childNodes[i])) {
                return false;
            }
        }
    }
    return true;
};
var requests = new Map();
var getSvgContent = function (url) {
    // see if we already have a request for this url
    var req = requests.get(url);
    if (!req) {
        // we don't already have a request
        req = fetch(url).then(function (rsp) {
            if (rsp.status <= 299) {
                return rsp.text();
            }
            return Promise.resolve(null);
        }).then(function (svgContent) { return validateContent(svgContent); });
        // cache for the same requests
        requests.set(url, req);
    }
    return req;
};
var Icon = /** @class */ (function () {
    function Icon(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.mode = getIonMode(this);
        this.isVisible = false;
        /**
         * If enabled, ion-icon will be loaded lazily when it's visible in the viewport.
         * Default, `false`.
         */
        this.lazy = false;
    }
    Icon.prototype.connectedCallback = function () {
        var _this = this;
        // purposely do not return the promise here because loading
        // the svg file should not hold up loading the app
        // only load the svg if it's visible
        this.waitUntilVisible(this.el, '50px', function () {
            _this.isVisible = true;
            _this.loadIcon();
        });
    };
    Icon.prototype.disconnectedCallback = function () {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    };
    Icon.prototype.waitUntilVisible = function (el, rootMargin, cb) {
        var _this = this;
        if (this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
            var io_1 = this.io = new window.IntersectionObserver(function (data) {
                if (data[0].isIntersecting) {
                    io_1.disconnect();
                    _this.io = undefined;
                    cb();
                }
            }, { rootMargin: rootMargin });
            io_1.observe(el);
        }
        else {
            // browser doesn't support IntersectionObserver
            // so just fallback to always show it
            cb();
        }
    };
    Icon.prototype.loadIcon = function () {
        var _this = this;
        if (this.isVisible) {
            var url = getUrl(this);
            if (url) {
                getSvgContent(url)
                    .then(function (svgContent) { return _this.svgContent = svgContent; });
            }
        }
        if (!this.ariaLabel) {
            var label = getName(this.name, this.icon, this.mode, this.ios, this.md);
            // user did not provide a label
            // come up with the label based on the icon name
            if (label) {
                this.ariaLabel = label
                    .replace('ios-', '')
                    .replace('md-', '')
                    .replace(/\-/g, ' ');
            }
        }
    };
    Icon.prototype.render = function () {
        var _a, _b;
        var mode = this.mode || 'md';
        var flipRtl = this.flipRtl || (this.ariaLabel && this.ariaLabel.indexOf('arrow') > -1 && this.flipRtl !== false);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "img", class: Object.assign((_a = {}, _a[mode] = true, _a), createColorClasses(this.color), (_b = {}, _b["icon-" + this.size] = !!this.size, _b['flip-rtl'] = !!flipRtl && this.el.ownerDocument.dir === 'rtl', _b)) }, ((this.svgContent)
            ? Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "icon-inner", innerHTML: this.svgContent })
            : Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "icon-inner" }))));
    };
    Object.defineProperty(Icon, "assetsDirs", {
        get: function () { return ["svg"]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Icon.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Icon, "watchers", {
        get: function () {
            return {
                "name": ["loadIcon"],
                "src": ["loadIcon"],
                "icon": ["loadIcon"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Icon, "style", {
        get: function () { return ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.icon-inner,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px!important}:host(.icon-large){font-size:32px!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary,#3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary,#0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary,#f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success,#10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning,#ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger,#f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light,#f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium,#989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark,#222428)}"; },
        enumerable: true,
        configurable: true
    });
    return Icon;
}());
var getIonMode = function (ref) {
    return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["j"])(ref) || document.documentElement.getAttribute('mode') || 'md';
};
var createColorClasses = function (color) {
    var _a;
    return (color) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1idXR0b25fMi1tZC5lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L3RoZW1lLTE4Y2JlMmNjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnSztBQUNsSTtBQUM0QjtBQUNvQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0REFBTztBQUN2QjtBQUNBLHFCQUFxQiw4REFBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkRBQVc7QUFDbkMsdUJBQXVCLDJEQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyw0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QUMsRUFBRTtBQUNrRiIsImZpbGUiOiI0NS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGQgYXMgY3JlYXRlRXZlbnQsIGMgYXMgZ2V0SW9uTW9kZSQxLCBoLCBIIGFzIEhvc3QsIGUgYXMgZ2V0RWxlbWVudCwgaSBhcyBnZXRBc3NldFBhdGgsIGogYXMgZ2V0TW9kZSB9IGZyb20gJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IGggYXMgaGFzU2hhZG93RG9tIH0gZnJvbSAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IG8gYXMgb3BlblVSTCwgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMkMSB9IGZyb20gJy4vdGhlbWUtMThjYmUyY2MuanMnO1xudmFyIEJ1dHRvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCdXR0b24oaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmluVG9vbGJhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluSXRlbSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHR5cGUgb2YgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5idXR0b25UeXBlID0gJ2J1dHRvbic7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBidXR0b24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIHVzaW5nIGEgcm91dGVyLCBpdCBzcGVjaWZpZXMgdGhlIHRyYW5zaXRpb24gZGlyZWN0aW9uIHdoZW4gbmF2aWdhdGluZyB0b1xuICAgICAgICAgKiBhbm90aGVyIHBhZ2UgdXNpbmcgYGhyZWZgLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yb3V0ZXJEaXJlY3Rpb24gPSAnZm9yd2FyZCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIGFjdGl2YXRlcyBhIGJ1dHRvbiB3aXRoIGEgaGVhdmllciBmb250IHdlaWdodC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3Ryb25nID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBvZiB0aGUgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy50eXBlID09PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgICAgIG9wZW5VUkwoX3RoaXMuaHJlZiwgZXYsIF90aGlzLnJvdXRlckRpcmVjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChoYXNTaGFkb3dEb20oX3RoaXMuZWwpKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBidXR0b24gd2FudHMgdG8gc3BlY2lmaWNhbGx5IHN1Ym1pdCBhIGZvcm1cbiAgICAgICAgICAgICAgICAvLyBjbGltYiB1cCB0aGUgZG9tIHRvIHNlZSBpZiB3ZSdyZSBpbiBhIDxmb3JtPlxuICAgICAgICAgICAgICAgIC8vIGFuZCBpZiBzbywgdGhlbiB1c2UgSlMgdG8gc3VibWl0IGl0XG4gICAgICAgICAgICAgICAgdmFyIGZvcm0gPSBfdGhpcy5lbC5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAgICAgICAgICAgaWYgKGZvcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZha2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgZmFrZUJ1dHRvbi50eXBlID0gX3RoaXMudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgZmFrZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZha2VCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICBmYWtlQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIGZha2VCdXR0b24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5pb25Gb2N1cy5lbWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25CbHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaW9uQmx1ci5lbWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW9uRm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkZvY3VzXCIsIDcpO1xuICAgICAgICB0aGlzLmlvbkJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJsdXJcIiwgNyk7XG4gICAgfVxuICAgIEJ1dHRvbi5wcm90b3R5cGUuY29tcG9uZW50V2lsbExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5Ub29sYmFyID0gISF0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1idXR0b25zJyk7XG4gICAgICAgIHRoaXMuaW5JdGVtID0gISF0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1pdGVtJykgfHwgISF0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1pdGVtLWRpdmlkZXInKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b24ucHJvdG90eXBlLCBcImhhc0ljb25Pbmx5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gISF0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pY29uW3Nsb3Q9XCJpY29uLW9ubHlcIl0nKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbi5wcm90b3R5cGUsIFwicmlwcGxlVHlwZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGhhc0NsZWFyRmlsbCA9IHRoaXMuZmlsbCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZmlsbCA9PT0gJ2NsZWFyJztcbiAgICAgICAgICAgIC8vIElmIHRoZSBidXR0b24gaXMgaW4gYSB0b29sYmFyLCBoYXMgYSBjbGVhciBmaWxsICh3aGljaCBpcyB0aGUgZGVmYXVsdClcbiAgICAgICAgICAgIC8vIGFuZCBvbmx5IGhhcyBhbiBpY29uIHdlIHVzZSB0aGUgdW5ib3VuZGVkIFwiY2lyY3VsYXJcIiByaXBwbGUgZWZmZWN0XG4gICAgICAgICAgICBpZiAoaGFzQ2xlYXJGaWxsICYmIHRoaXMuaGFzSWNvbk9ubHkgJiYgdGhpcy5pblRvb2xiYXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VuYm91bmRlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJ2JvdW5kZWQnO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBCdXR0b24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUkMSh0aGlzKTtcbiAgICAgICAgdmFyIF9iID0gdGhpcywgYnV0dG9uVHlwZSA9IF9iLmJ1dHRvblR5cGUsIHR5cGUgPSBfYi50eXBlLCBkaXNhYmxlZCA9IF9iLmRpc2FibGVkLCByZWwgPSBfYi5yZWwsIHRhcmdldCA9IF9iLnRhcmdldCwgc2l6ZSA9IF9iLnNpemUsIGhyZWYgPSBfYi5ocmVmLCBjb2xvciA9IF9iLmNvbG9yLCBleHBhbmQgPSBfYi5leHBhbmQsIGhhc0ljb25Pbmx5ID0gX2IuaGFzSWNvbk9ubHksIHNoYXBlID0gX2Iuc2hhcGUsIHN0cm9uZyA9IF9iLnN0cm9uZztcbiAgICAgICAgdmFyIGZpbmFsU2l6ZSA9IHNpemUgPT09IHVuZGVmaW5lZCAmJiB0aGlzLmluSXRlbSA/ICdzbWFsbCcgOiBzaXplO1xuICAgICAgICB2YXIgVGFnVHlwZSA9IGhyZWYgPT09IHVuZGVmaW5lZCA/ICdidXR0b24nIDogJ2EnO1xuICAgICAgICB2YXIgYXR0cnMgPSAoVGFnVHlwZSA9PT0gJ2J1dHRvbicpXG4gICAgICAgICAgICA/IHsgdHlwZTogdHlwZSB9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBkb3dubG9hZDogdGhpcy5kb3dubG9hZCxcbiAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgIHJlbDogcmVsLFxuICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0XG4gICAgICAgICAgICB9O1xuICAgICAgICB2YXIgZmlsbCA9IHRoaXMuZmlsbDtcbiAgICAgICAgaWYgKGZpbGwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZmlsbCA9IHRoaXMuaW5Ub29sYmFyID8gJ2NsZWFyJyA6ICdzb2xpZCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5oYW5kbGVDbGljaywgXCJhcmlhLWRpc2FibGVkXCI6IGRpc2FibGVkID8gJ3RydWUnIDogbnVsbCwgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlQ29sb3JDbGFzc2VzJDEoY29sb3IpKSwgKF9hID0ge30sIF9hW21vZGVdID0gdHJ1ZSwgX2FbYnV0dG9uVHlwZV0gPSB0cnVlLCBfYVtidXR0b25UeXBlICsgXCItXCIgKyBleHBhbmRdID0gZXhwYW5kICE9PSB1bmRlZmluZWQsIF9hW2J1dHRvblR5cGUgKyBcIi1cIiArIGZpbmFsU2l6ZV0gPSBmaW5hbFNpemUgIT09IHVuZGVmaW5lZCwgX2FbYnV0dG9uVHlwZSArIFwiLVwiICsgc2hhcGVdID0gc2hhcGUgIT09IHVuZGVmaW5lZCwgX2FbYnV0dG9uVHlwZSArIFwiLVwiICsgZmlsbF0gPSB0cnVlLCBfYVtidXR0b25UeXBlICsgXCItc3Ryb25nXCJdID0gc3Ryb25nLCBfYVsnYnV0dG9uLWhhcy1pY29uLW9ubHknXSA9IGhhc0ljb25Pbmx5LCBfYVsnYnV0dG9uLWRpc2FibGVkJ10gPSBkaXNhYmxlZCwgX2FbJ2lvbi1hY3RpdmF0YWJsZSddID0gdHJ1ZSwgX2FbJ2lvbi1mb2N1c2FibGUnXSA9IHRydWUsIF9hKSkgfSwgaChUYWdUeXBlLCBPYmplY3QuYXNzaWduKHt9LCBhdHRycywgeyBjbGFzczogXCJidXR0b24tbmF0aXZlXCIsIGRpc2FibGVkOiBkaXNhYmxlZCwgb25Gb2N1czogdGhpcy5vbkZvY3VzLCBvbkJsdXI6IHRoaXMub25CbHVyIH0pLCBoKFwic3BhblwiLCB7IGNsYXNzOiBcImJ1dHRvbi1pbm5lclwiIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogXCJpY29uLW9ubHlcIiB9KSwgaChcInNsb3RcIiwgeyBuYW1lOiBcInN0YXJ0XCIgfSksIGgoXCJzbG90XCIsIG51bGwpLCBoKFwic2xvdFwiLCB7IG5hbWU6IFwiZW5kXCIgfSkpLCBtb2RlID09PSAnbWQnICYmIGgoXCJpb24tcmlwcGxlLWVmZmVjdFwiLCB7IHR5cGU6IHRoaXMucmlwcGxlVHlwZSB9KSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b24ucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIjpob3N0ey0tb3ZlcmZsb3c6aGlkZGVuOy0tcmlwcGxlLWNvbG9yOmN1cnJlbnRDb2xvcjstLWJvcmRlci13aWR0aDppbml0aWFsOy0tYm9yZGVyLWNvbG9yOmluaXRpYWw7LS1ib3JkZXItc3R5bGU6aW5pdGlhbDstLWNvbG9yLWhvdmVyOmluaXRpYWw7LS1ib3gtc2hhZG93Om5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6YXV0bztjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpO3RleHQtYWxpZ246Y2VudGVyO3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt2ZXJ0aWNhbC1hbGlnbjp0b3A7dmVydGljYWwtYWxpZ246LXdlYmtpdC1iYXNlbGluZS1taWRkbGU7cG9pbnRlci1ldmVudHM6YXV0bzstd2Via2l0LWZvbnQta2VybmluZzpub25lO2ZvbnQta2VybmluZzpub25lfTpob3N0KC5idXR0b24tZGlzYWJsZWQpey0tb3BhY2l0eTouNTtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5idXR0b24tZGlzYWJsZWQpIC5idXR0b24tbmF0aXZle2N1cnNvcjpkZWZhdWx0O3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLmJ1dHRvbi1zb2xpZCl7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpOy0tYmFja2dyb3VuZC1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlLCMzMTcxZTApOy0tYmFja2dyb3VuZC1ob3Zlcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50LCM0YzhkZmYpOy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsI2ZmZik7LS1jb2xvci1hY3RpdmF0ZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsI2ZmZik7LS1jb2xvci1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCNmZmYpfTpob3N0KC5idXR0b24tc29saWQuaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KC5idXR0b24tc29saWQuaW9uLWNvbG9yLmlvbi1mb2N1c2VkKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zaGFkZSl9Omhvc3QoLmJ1dHRvbi1vdXRsaW5lKXstLWJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTstLWNvbG9yLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZil9Omhvc3QoLmJ1dHRvbi1vdXRsaW5lLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguYnV0dG9uLW91dGxpbmUuaW9uLWZvY3VzZWQuaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwuMSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5idXR0b24tY2xlYXIpey0tYm9yZGVyLXdpZHRoOjA7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZil9Omhvc3QoLmJ1dHRvbi1jbGVhci5pb24tY29sb3IpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5idXR0b24tY2xlYXIuaW9uLWZvY3VzZWQuaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwuMSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5idXR0b24tY2xlYXIuYWN0aXZhdGVkLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp0cmFuc3BhcmVudH06aG9zdCguYnV0dG9uLWJsb2NrKXtkaXNwbGF5OmJsb2NrfTpob3N0KC5idXR0b24tYmxvY2spIC5idXR0b24tbmF0aXZle21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2NsZWFyOmJvdGg7Y29udGFpbjpjb250ZW50fTpob3N0KC5idXR0b24tYmxvY2spIC5idXR0b24tbmF0aXZlOmFmdGVye2NsZWFyOmJvdGh9Omhvc3QoLmJ1dHRvbi1mdWxsKXtkaXNwbGF5OmJsb2NrfTpob3N0KC5idXR0b24tZnVsbCkgLmJ1dHRvbi1uYXRpdmV7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7Y29udGFpbjpjb250ZW50fTpob3N0KC5idXR0b24tZnVsbDpub3QoLmJ1dHRvbi1yb3VuZCkpIC5idXR0b24tbmF0aXZle2JvcmRlci1yYWRpdXM6MDtib3JkZXItcmlnaHQtd2lkdGg6MDtib3JkZXItbGVmdC13aWR0aDowfS5idXR0b24tbmF0aXZle2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLXJpZ2h0OnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDp2YXIoLS1wYWRkaW5nLXRvcCk7cGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy1ib3R0b20pO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0O2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTstd2Via2l0LXRyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7dHJhbnNpdGlvbjp2YXIoLS10cmFuc2l0aW9uKTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtsaW5lLWhlaWdodDoxOy13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpO2NvbnRhaW46bGF5b3V0IHN0eWxlO2N1cnNvcjpwb2ludGVyO29wYWNpdHk6dmFyKC0tb3BhY2l0eSk7b3ZlcmZsb3c6dmFyKC0tb3ZlcmZsb3cpO3otaW5kZXg6MDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXsuYnV0dG9uLW5hdGl2ZXtwYWRkaW5nLWxlZnQ6dW5zZXQ7cGFkZGluZy1yaWdodDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKX19LmJ1dHRvbi1uYXRpdmU6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9LmJ1dHRvbi1pbm5lcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OnJvdyBub3dyYXA7ZmxleC1mbG93OnJvdyBub3dyYXA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfTo6c2xvdHRlZChpb24taWNvbil7Zm9udC1zaXplOjEuNGVtO3BvaW50ZXItZXZlbnRzOm5vbmV9OjpzbG90dGVkKGlvbi1pY29uW3Nsb3Q9c3RhcnRdKXttYXJnaW4tbGVmdDotLjNlbTttYXJnaW4tcmlnaHQ6LjNlbTttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6OnNsb3R0ZWQoaW9uLWljb25bc2xvdD1zdGFydF0pe21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDotLjNlbTttYXJnaW4taW5saW5lLXN0YXJ0Oi0uM2VtOy13ZWJraXQtbWFyZ2luLWVuZDouM2VtO21hcmdpbi1pbmxpbmUtZW5kOi4zZW19fTo6c2xvdHRlZChpb24taWNvbltzbG90PWVuZF0pe21hcmdpbi1sZWZ0Oi4zZW07bWFyZ2luLXJpZ2h0Oi0uMmVtO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9XFxAc3VwcG9ydHMgKCgtd2Via2l0LW1hcmdpbi1zdGFydDowKSBvciAobWFyZ2luLWlubGluZS1zdGFydDowKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApezo6c2xvdHRlZChpb24taWNvbltzbG90PWVuZF0pe21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDouM2VtO21hcmdpbi1pbmxpbmUtc3RhcnQ6LjNlbTstd2Via2l0LW1hcmdpbi1lbmQ6LS4yZW07bWFyZ2luLWlubGluZS1lbmQ6LS4yZW19fTo6c2xvdHRlZChpb24taWNvbltzbG90PWljb24tb25seV0pe2ZvbnQtc2l6ZToxLjhlbX1pb24tcmlwcGxlLWVmZmVjdHtjb2xvcjp2YXIoLS1yaXBwbGUtY29sb3IpfTpob3N0KC5pb24tZm9jdXNlZCkgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWZvY3VzZWQpO2NvbG9yOnZhcigtLWNvbG9yLWZvY3VzZWQpfTpob3N0KC5hY3RpdmF0ZWQpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQpO2NvbG9yOnZhcigtLWNvbG9yLWFjdGl2YXRlZCl9XFxAbWVkaWEgKGFueS1ob3Zlcjpob3Zlcil7Omhvc3QoOmhvdmVyKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtaG92ZXIpO2NvbG9yOnZhcigtLWNvbG9yLWhvdmVyKX19Omhvc3R7LS1ib3JkZXItcmFkaXVzOjRweDstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWJvdHRvbTowOy0tcGFkZGluZy1zdGFydDoxLjFlbTstLXBhZGRpbmctZW5kOjEuMWVtOy0tdHJhbnNpdGlvbjpib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllciguNCwwLC4yLDEpLGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXIsY29sb3IgMTVtcyBsaW5lYXI7bWFyZ2luLWxlZnQ6MnB4O21hcmdpbi1yaWdodDoycHg7bWFyZ2luLXRvcDo0cHg7bWFyZ2luLWJvdHRvbTo0cHg7aGVpZ2h0OjM2cHg7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwO2xldHRlci1zcGFjaW5nOi4wNmVtO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3R7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjJweDttYXJnaW4taW5saW5lLXN0YXJ0OjJweDstd2Via2l0LW1hcmdpbi1lbmQ6MnB4O21hcmdpbi1pbmxpbmUtZW5kOjJweH19Omhvc3QoLmJ1dHRvbi1zb2xpZCl7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS1iYWNrZ3JvdW5kKTstLWJveC1zaGFkb3c6MCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwwLjIpLDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsMC4xNCksMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwwLjEyKX06aG9zdCguYnV0dG9uLXNvbGlkLmFjdGl2YXRlZCl7LS1ib3gtc2hhZG93OjAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4yKSwwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuMTQpLDAgM3B4IDE0cHggMnB4IHJnYmEoMCwwLDAsMC4xMil9Omhvc3QoLmJ1dHRvbi1vdXRsaW5lKXstLWJvcmRlci13aWR0aDoycHg7LS1ib3JkZXItc3R5bGU6c29saWQ7LS1ib3gtc2hhZG93Om5vbmU7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp0cmFuc3BhcmVudDstLWJhY2tncm91bmQtZm9jdXNlZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiw1NiwxMjgsMjU1KSwwLjEpOy0tYmFja2dyb3VuZC1ob3ZlcjpyZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiw1NiwxMjgsMjU1KSwwLjA0KTstLWNvbG9yLWFjdGl2YXRlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKX06aG9zdCguYnV0dG9uLW91dGxpbmUuYWN0aXZhdGVkLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp0cmFuc3BhcmVudH06aG9zdCguYnV0dG9uLWNsZWFyKXstLWJhY2tncm91bmQtYWN0aXZhdGVkOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1mb2N1c2VkOnJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLDU2LDEyOCwyNTUpLDAuMSk7LS1iYWNrZ3JvdW5kLWhvdmVyOnJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLDU2LDEyOCwyNTUpLDAuMDQpOy0tY29sb3ItYWN0aXZhdGVkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpOy0tY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKX06aG9zdCguYnV0dG9uLXJvdW5kKXstLWJvcmRlci1yYWRpdXM6NjRweDstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLXN0YXJ0OjI2cHg7LS1wYWRkaW5nLWVuZDoyNnB4Oy0tcGFkZGluZy1ib3R0b206MH06aG9zdCguYnV0dG9uLWxhcmdlKXstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLXN0YXJ0OjFlbTstLXBhZGRpbmctZW5kOjFlbTstLXBhZGRpbmctYm90dG9tOjA7aGVpZ2h0OjIuOGVtO2ZvbnQtc2l6ZToyMHB4fTpob3N0KC5idXR0b24tc21hbGwpey0tcGFkZGluZy10b3A6MDstLXBhZGRpbmctc3RhcnQ6MC45ZW07LS1wYWRkaW5nLWVuZDowLjllbTstLXBhZGRpbmctYm90dG9tOjA7aGVpZ2h0OjIuMWVtO2ZvbnQtc2l6ZToxM3B4fTpob3N0KC5idXR0b24tc3Ryb25nKXtmb250LXdlaWdodDo3MDB9OjpzbG90dGVkKGlvbi1pY29uW3Nsb3Q9aWNvbi1vbmx5XSl7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH1cXEBtZWRpYSAoYW55LWhvdmVyOmhvdmVyKXs6aG9zdCguYnV0dG9uLXNvbGlkLmlvbi1jb2xvcjpob3ZlcikgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItdGludCl9Omhvc3QoLmJ1dHRvbi1jbGVhci5pb24tY29sb3I6aG92ZXIpIC5idXR0b24tbmF0aXZlLDpob3N0KC5idXR0b24tb3V0bGluZS5pb24tY29sb3I6aG92ZXIpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLC4wNCl9fVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQnV0dG9uO1xufSgpKTtcbnZhciBDQUNIRURfTUFQO1xudmFyIGdldEljb25NYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFDQUNIRURfTUFQKSB7XG4gICAgICAgIHZhciB3aW4gPSB3aW5kb3c7XG4gICAgICAgIHdpbi5Jb25pY29ucyA9IHdpbi5Jb25pY29ucyB8fCB7fTtcbiAgICAgICAgQ0FDSEVEX01BUCA9IHdpbi5Jb25pY29ucy5tYXAgPSB3aW4uSW9uaWNvbnMubWFwIHx8IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgcmV0dXJuIENBQ0hFRF9NQVA7XG59O1xudmFyIGdldFVybCA9IGZ1bmN0aW9uIChpKSB7XG4gICAgdmFyIHVybCA9IGdldFNyYyhpLnNyYyk7XG4gICAgaWYgKHVybCkge1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgICB1cmwgPSBnZXROYW1lKGkubmFtZSwgaS5pY29uLCBpLm1vZGUsIGkuaW9zLCBpLm1kKTtcbiAgICBpZiAodXJsKSB7XG4gICAgICAgIHJldHVybiBnZXROYW1lZFVybCh1cmwpO1xuICAgIH1cbiAgICBpZiAoaS5pY29uKSB7XG4gICAgICAgIHVybCA9IGdldFNyYyhpLmljb24pO1xuICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgICAgIHVybCA9IGdldFNyYyhpLmljb25baS5tb2RlXSk7XG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xudmFyIGdldE5hbWVkVXJsID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgdXJsID0gZ2V0SWNvbk1hcCgpLmdldChuYW1lKTtcbiAgICBpZiAodXJsKSB7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICAgIHJldHVybiBnZXRBc3NldFBhdGgoXCJzdmcvXCIgKyBuYW1lICsgXCIuc3ZnXCIpO1xufTtcbnZhciBnZXROYW1lID0gZnVuY3Rpb24gKG5hbWUsIGljb24sIG1vZGUsIGlvcywgbWQpIHtcbiAgICAvLyBkZWZhdWx0IHRvIFwibWRcIiBpZiBzb21laG93IHRoZSBtb2RlIHdhc24ndCBzZXRcbiAgICBtb2RlID0gKG1vZGUgJiYgbW9kZS50b0xvd2VyQ2FzZSgpKSA9PT0gJ2lvcycgPyAnaW9zJyA6ICdtZCc7XG4gICAgLy8gaWYgYW4gaWNvbiB3YXMgcGFzc2VkIGluIHVzaW5nIHRoZSBpb3Mgb3IgbWQgYXR0cmlidXRlc1xuICAgIC8vIHNldCB0aGUgaWNvbk5hbWUgdG8gd2hhdGV2ZXIgd2FzIHBhc3NlZCBpblxuICAgIGlmIChpb3MgJiYgbW9kZSA9PT0gJ2lvcycpIHtcbiAgICAgICAgbmFtZSA9IGlvcy50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZCAmJiBtb2RlID09PSAnbWQnKSB7XG4gICAgICAgIG5hbWUgPSBtZC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKCFuYW1lICYmIGljb24gJiYgIWlzU3JjKGljb24pKSB7XG4gICAgICAgICAgICBuYW1lID0gaWNvbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTdHIobmFtZSkpIHtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAoIS9ebWQtfF5pb3MtfF5sb2dvLS8udGVzdChuYW1lKSkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgZG9lcyBub3QgaGF2ZSBvbmUgb2YgdGhlIGRlZmF1bHRzXG4gICAgICAgICAgICAgICAgLy8gc28gbGV0cyBhdXRvIGFkZCBpbiB0aGUgbW9kZSBwcmVmaXggZm9yIHRoZW1cbiAgICAgICAgICAgICAgICBuYW1lID0gbW9kZSArICctJyArIG5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpc1N0cihuYW1lKSB8fCBuYW1lLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8vIG9ubHkgYWxsb3cgYWxwaGEgY2hhcmFjdGVycyBhbmQgZGFzaFxuICAgIHZhciBpbnZhbGlkQ2hhcnMgPSBuYW1lLnJlcGxhY2UoL1thLXpdfC18XFxkL2dpLCAnJyk7XG4gICAgaWYgKGludmFsaWRDaGFycyAhPT0gJycpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBuYW1lO1xufTtcbnZhciBnZXRTcmMgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgaWYgKGlzU3RyKHNyYykpIHtcbiAgICAgICAgc3JjID0gc3JjLnRyaW0oKTtcbiAgICAgICAgaWYgKGlzU3JjKHNyYykpIHtcbiAgICAgICAgICAgIHJldHVybiBzcmM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xudmFyIGlzU3JjID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiBzdHIubGVuZ3RoID4gMCAmJiAvKFxcL3xcXC4pLy50ZXN0KHN0cik7XG59O1xudmFyIGlzU3RyID0gZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7IH07XG52YXIgdmFsaWRhdGVDb250ZW50ID0gZnVuY3Rpb24gKHN2Z0NvbnRlbnQpIHtcbiAgICBpZiAoc3ZnQ29udGVudCkge1xuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBzdmdDb250ZW50O1xuICAgICAgICAvLyBzZXR1cCB0aGlzIHdheSB0byBlbnN1cmUgaXQgd29ya3Mgb24gb3VyIGJ1ZGR5IElFXG4gICAgICAgIGZvciAodmFyIGkgPSBkaXYuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKGRpdi5jaGlsZE5vZGVzW2ldLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdzdmcnKSB7XG4gICAgICAgICAgICAgICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5jaGlsZE5vZGVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBtdXN0IG9ubHkgaGF2ZSAxIHJvb3QgZWxlbWVudFxuICAgICAgICB2YXIgc3ZnRWxtID0gZGl2LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICBpZiAoc3ZnRWxtICYmIHN2Z0VsbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJykge1xuICAgICAgICAgICAgc3ZnRWxtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncy1pb24taWNvbicpO1xuICAgICAgICAgICAgLy8gcm9vdCBlbGVtZW50IG11c3QgYmUgYW4gc3ZnXG4gICAgICAgICAgICAvLyBsZXRzIGRvdWJsZSBjaGVjayB3ZSd2ZSBnb3QgdmFsaWQgZWxlbWVudHNcbiAgICAgICAgICAgIC8vIGRvIG5vdCBhbGxvdyBzY3JpcHRzXG4gICAgICAgICAgICBpZiAoaXNWYWxpZChzdmdFbG0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpdi5pbm5lckhUTUw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xufTtcbnZhciBpc1ZhbGlkID0gZnVuY3Rpb24gKGVsbSkge1xuICAgIGlmIChlbG0ubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgaWYgKGVsbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2NyaXB0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxtLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB2YWwgPSBlbG0uYXR0cmlidXRlc1tpXS52YWx1ZTtcbiAgICAgICAgICAgIGlmIChpc1N0cih2YWwpICYmIHZhbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ29uJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbG0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKGVsbS5jaGlsZE5vZGVzW2ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgcmVxdWVzdHMgPSBuZXcgTWFwKCk7XG52YXIgZ2V0U3ZnQ29udGVudCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAvLyBzZWUgaWYgd2UgYWxyZWFkeSBoYXZlIGEgcmVxdWVzdCBmb3IgdGhpcyB1cmxcbiAgICB2YXIgcmVxID0gcmVxdWVzdHMuZ2V0KHVybCk7XG4gICAgaWYgKCFyZXEpIHtcbiAgICAgICAgLy8gd2UgZG9uJ3QgYWxyZWFkeSBoYXZlIGEgcmVxdWVzdFxuICAgICAgICByZXEgPSBmZXRjaCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJzcCkge1xuICAgICAgICAgICAgaWYgKHJzcC5zdGF0dXMgPD0gMjk5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJzcC50ZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChzdmdDb250ZW50KSB7IHJldHVybiB2YWxpZGF0ZUNvbnRlbnQoc3ZnQ29udGVudCk7IH0pO1xuICAgICAgICAvLyBjYWNoZSBmb3IgdGhlIHNhbWUgcmVxdWVzdHNcbiAgICAgICAgcmVxdWVzdHMuc2V0KHVybCwgcmVxKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcTtcbn07XG52YXIgSWNvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJY29uKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5tb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGVuYWJsZWQsIGlvbi1pY29uIHdpbGwgYmUgbG9hZGVkIGxhemlseSB3aGVuIGl0J3MgdmlzaWJsZSBpbiB0aGUgdmlld3BvcnQuXG4gICAgICAgICAqIERlZmF1bHQsIGBmYWxzZWAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgSWNvbi5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIHB1cnBvc2VseSBkbyBub3QgcmV0dXJuIHRoZSBwcm9taXNlIGhlcmUgYmVjYXVzZSBsb2FkaW5nXG4gICAgICAgIC8vIHRoZSBzdmcgZmlsZSBzaG91bGQgbm90IGhvbGQgdXAgbG9hZGluZyB0aGUgYXBwXG4gICAgICAgIC8vIG9ubHkgbG9hZCB0aGUgc3ZnIGlmIGl0J3MgdmlzaWJsZVxuICAgICAgICB0aGlzLndhaXRVbnRpbFZpc2libGUodGhpcy5lbCwgJzUwcHgnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgX3RoaXMubG9hZEljb24oKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBJY29uLnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW8pIHtcbiAgICAgICAgICAgIHRoaXMuaW8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5pbyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSWNvbi5wcm90b3R5cGUud2FpdFVudGlsVmlzaWJsZSA9IGZ1bmN0aW9uIChlbCwgcm9vdE1hcmdpbiwgY2IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMubGF6eSAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHZhciBpb18xID0gdGhpcy5pbyA9IG5ldyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVswXS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBpb18xLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW8gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgeyByb290TWFyZ2luOiByb290TWFyZ2luIH0pO1xuICAgICAgICAgICAgaW9fMS5vYnNlcnZlKGVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEludGVyc2VjdGlvbk9ic2VydmVyXG4gICAgICAgICAgICAvLyBzbyBqdXN0IGZhbGxiYWNrIHRvIGFsd2F5cyBzaG93IGl0XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBJY29uLnByb3RvdHlwZS5sb2FkSWNvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gZ2V0VXJsKHRoaXMpO1xuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgIGdldFN2Z0NvbnRlbnQodXJsKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoc3ZnQ29udGVudCkgeyByZXR1cm4gX3RoaXMuc3ZnQ29udGVudCA9IHN2Z0NvbnRlbnQ7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5hcmlhTGFiZWwpIHtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IGdldE5hbWUodGhpcy5uYW1lLCB0aGlzLmljb24sIHRoaXMubW9kZSwgdGhpcy5pb3MsIHRoaXMubWQpO1xuICAgICAgICAgICAgLy8gdXNlciBkaWQgbm90IHByb3ZpZGUgYSBsYWJlbFxuICAgICAgICAgICAgLy8gY29tZSB1cCB3aXRoIHRoZSBsYWJlbCBiYXNlZCBvbiB0aGUgaWNvbiBuYW1lXG4gICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFyaWFMYWJlbCA9IGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdpb3MtJywgJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdtZC0nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcLS9nLCAnICcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBJY29uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHZhciBtb2RlID0gdGhpcy5tb2RlIHx8ICdtZCc7XG4gICAgICAgIHZhciBmbGlwUnRsID0gdGhpcy5mbGlwUnRsIHx8ICh0aGlzLmFyaWFMYWJlbCAmJiB0aGlzLmFyaWFMYWJlbC5pbmRleE9mKCdhcnJvdycpID4gLTEgJiYgdGhpcy5mbGlwUnRsICE9PSBmYWxzZSk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IHJvbGU6IFwiaW1nXCIsIGNsYXNzOiBPYmplY3QuYXNzaWduKChfYSA9IHt9LCBfYVttb2RlXSA9IHRydWUsIF9hKSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpLCAoX2IgPSB7fSwgX2JbXCJpY29uLVwiICsgdGhpcy5zaXplXSA9ICEhdGhpcy5zaXplLCBfYlsnZmxpcC1ydGwnXSA9ICEhZmxpcFJ0bCAmJiB0aGlzLmVsLm93bmVyRG9jdW1lbnQuZGlyID09PSAncnRsJywgX2IpKSB9LCAoKHRoaXMuc3ZnQ29udGVudClcbiAgICAgICAgICAgID8gaChcImRpdlwiLCB7IGNsYXNzOiBcImljb24taW5uZXJcIiwgaW5uZXJIVE1MOiB0aGlzLnN2Z0NvbnRlbnQgfSlcbiAgICAgICAgICAgIDogaChcImRpdlwiLCB7IGNsYXNzOiBcImljb24taW5uZXJcIiB9KSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShJY29uLCBcImFzc2V0c0RpcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcInN2Z1wiXTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEljb24ucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSWNvbiwgXCJ3YXRjaGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogW1wibG9hZEljb25cIl0sXG4gICAgICAgICAgICAgICAgXCJzcmNcIjogW1wibG9hZEljb25cIl0sXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IFtcImxvYWRJY29uXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSWNvbiwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCI6aG9zdHtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxZW07aGVpZ2h0OjFlbTtjb250YWluOnN0cmljdDtmaWxsOmN1cnJlbnRDb2xvcjstd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3ghaW1wb3J0YW50O2JveC1zaXppbmc6Y29udGVudC1ib3ghaW1wb3J0YW50fS5pY29uLWlubmVyLHN2Z3tkaXNwbGF5OmJsb2NrO2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9Omhvc3QoLmZsaXAtcnRsKSAuaWNvbi1pbm5lcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoLTEpO3RyYW5zZm9ybTpzY2FsZVgoLTEpfTpob3N0KC5pY29uLXNtYWxsKXtmb250LXNpemU6MThweCFpbXBvcnRhbnR9Omhvc3QoLmljb24tbGFyZ2Upe2ZvbnQtc2l6ZTozMnB4IWltcG9ydGFudH06aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSkhaW1wb3J0YW50fTpob3N0KC5pb24tY29sb3ItcHJpbWFyeSl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKX06aG9zdCguaW9uLWNvbG9yLXNlY29uZGFyeSl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCMwY2QxZTgpfTpob3N0KC5pb24tY29sb3ItdGVydGlhcnkpey0taW9uLWNvbG9yLWJhc2U6dmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LCNmNGE5NDIpfTpob3N0KC5pb24tY29sb3Itc3VjY2Vzcyl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3Itc3VjY2VzcywjMTBkYzYwKX06aG9zdCguaW9uLWNvbG9yLXdhcm5pbmcpey0taW9uLWNvbG9yLWJhc2U6dmFyKC0taW9uLWNvbG9yLXdhcm5pbmcsI2ZmY2UwMCl9Omhvc3QoLmlvbi1jb2xvci1kYW5nZXIpey0taW9uLWNvbG9yLWJhc2U6dmFyKC0taW9uLWNvbG9yLWRhbmdlciwjZjE0MTQxKX06aG9zdCguaW9uLWNvbG9yLWxpZ2h0KXstLWlvbi1jb2xvci1iYXNlOnZhcigtLWlvbi1jb2xvci1saWdodCwjZjRmNWY4KX06aG9zdCguaW9uLWNvbG9yLW1lZGl1bSl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3ItbWVkaXVtLCM5ODlhYTIpfTpob3N0KC5pb24tY29sb3ItZGFyayl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3ItZGFyaywjMjIyNDI4KX1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEljb247XG59KCkpO1xudmFyIGdldElvbk1vZGUgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgcmV0dXJuIGdldE1vZGUocmVmKSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdtb2RlJykgfHwgJ21kJztcbn07XG52YXIgY3JlYXRlQ29sb3JDbGFzc2VzID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoY29sb3IpID8gKF9hID0ge1xuICAgICAgICAgICAgJ2lvbi1jb2xvcic6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgX2FbXCJpb24tY29sb3ItXCIgKyBjb2xvcl0gPSB0cnVlLFxuICAgICAgICBfYSkgOiBudWxsO1xufTtcbmV4cG9ydCB7IEJ1dHRvbiBhcyBpb25fYnV0dG9uLCBJY29uIGFzIGlvbl9pY29uIH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG52YXIgaG9zdENvbnRleHQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGVsKSB7XG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xufTtcbi8qKlxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxuICovXG52YXIgY3JlYXRlQ29sb3JDbGFzc2VzID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IChfYSA9IHtcbiAgICAgICAgICAgICdpb24tY29sb3InOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIF9hW1wiaW9uLWNvbG9yLVwiICsgY29sb3JdID0gdHJ1ZSxcbiAgICAgICAgX2EpIDogdW5kZWZpbmVkO1xufTtcbnZhciBnZXRDbGFzc0xpc3QgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgIHJldHVybiBhcnJheVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPSBudWxsOyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50cmltKCk7IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSAnJzsgfSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbn07XG52YXIgZ2V0Q2xhc3NNYXAgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gbWFwW2NdID0gdHJ1ZTsgfSk7XG4gICAgcmV0dXJuIG1hcDtcbn07XG52YXIgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XG52YXIgb3BlblVSTCA9IGZ1bmN0aW9uICh1cmwsIGV2LCBkaXJlY3Rpb24pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvdXRlcjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgICAgICAgaWYgKHJvdXRlcikge1xuICAgICAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbildO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=