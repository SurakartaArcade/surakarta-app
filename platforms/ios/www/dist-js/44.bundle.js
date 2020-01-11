(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-button_2-ios.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-button_2-ios.entry.js ***!
  \*************************************************************************/
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
        get: function () { return ":host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-hover:initial;--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){--opacity:.5;pointer-events:none}:host(.button-disabled) .button-native{cursor:default;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary,#3880ff);--background-focused:var(--ion-color-primary-shade,#3171e0);--background-hover:var(--ion-color-primary-tint,#4c8dff);--color:var(--ion-color-primary-contrast,#fff);--color-activated:var(--ion-color-primary-contrast,#fff);--color-focused:var(--ion-color-primary-contrast,#fff)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-solid.ion-color.ion-focused) .button-native{background:var(--ion-color-shade)}:host(.button-outline){--border-color:var(--ion-color-primary,#3880ff);--background:transparent;--color:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary,#3880ff)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-focused.ion-color) .button-native{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}:host(.button-clear.activated.ion-color) .button-native{background:transparent}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native:after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-.3em;margin-right:.3em;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-.3em;margin-inline-start:-.3em;-webkit-margin-end:.3em;margin-inline-end:.3em}}::slotted(ion-icon[slot=end]){margin-left:.3em;margin-right:-.2em;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:.3em;margin-inline-start:.3em;-webkit-margin-end:-.2em;margin-inline-end:-.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.activated) .button-native{background:var(--background-activated);color:var(--color-activated)}\@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host{--border-radius:10px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--transition:background-color,opacity 100ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:2.8em;font-size:16px;font-weight:500;letter-spacing:-.03em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:var(--ion-color-primary-shade,#3171e0)}:host(.button-solid.activated){--opacity:1}:host(.button-solid.activated.ion-color) .button-native{background:var(--ion-color-shade)}:host(.button-outline){--border-radius:10px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary,#3880ff);--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--color-activated:var(--ion-color-primary-contrast,#fff)}:host(.button-outline.activated.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-clear.activated){--opacity:0.4}:host(.button-clear){--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--color-activated:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}:host(.button-large){--border-radius:12px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--border-radius:6px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}\@media (any-hover:hover){:host(.button-solid:hover){--opacity:0.8}:host(.button-clear:hover),:host(.button-outline:hover){--opacity:0.6}:host(.ion-focused:hover){--background-hover:var(--background-focused);--color-hover:var(--color-focused)}:host(.activated:hover){--background-hover:var(--background-activated);--color-hover:var(--color-activated)}}"; },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1idXR0b25fMi1pb3MuZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLWVzNS90aGVtZS0xOGNiZTJjYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0s7QUFDbEk7QUFDNEI7QUFDb0I7QUFDOUU7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQU87QUFDdkI7QUFDQSxxQkFBcUIsOERBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJEQUFXO0FBQ25DLHVCQUF1QiwyREFBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG1CQUFtQiwyREFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUcs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Q0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDa0YiLCJmaWxlIjoiNDQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBkIGFzIGNyZWF0ZUV2ZW50LCBjIGFzIGdldElvbk1vZGUkMSwgaCwgSCBhcyBIb3N0LCBlIGFzIGdldEVsZW1lbnQsIGkgYXMgZ2V0QXNzZXRQYXRoLCBqIGFzIGdldE1vZGUgfSBmcm9tICcuL2NvcmUtZmVlZWZmMGQuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBoIGFzIGhhc1NoYWRvd0RvbSB9IGZyb20gJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBvIGFzIG9wZW5VUkwsIGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzJDEgfSBmcm9tICcuL3RoZW1lLTE4Y2JlMmNjLmpzJztcbnZhciBCdXR0b24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnV0dG9uKGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5pblRvb2xiYXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbkl0ZW0gPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0eXBlIG9mIGJ1dHRvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYnV0dG9uVHlwZSA9ICdidXR0b24nO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgYnV0dG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiB1c2luZyBhIHJvdXRlciwgaXQgc3BlY2lmaWVzIHRoZSB0cmFuc2l0aW9uIGRpcmVjdGlvbiB3aGVuIG5hdmlnYXRpbmcgdG9cbiAgICAgICAgICogYW5vdGhlciBwYWdlIHVzaW5nIGBocmVmYC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucm91dGVyRGlyZWN0aW9uID0gJ2ZvcndhcmQnO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBhY3RpdmF0ZXMgYSBidXR0b24gd2l0aCBhIGhlYXZpZXIgZm9udCB3ZWlnaHQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0cm9uZyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHR5cGUgb2YgdGhlIGJ1dHRvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHlwZSA9ICdidXR0b24nO1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMudHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgICAgICBvcGVuVVJMKF90aGlzLmhyZWYsIGV2LCBfdGhpcy5yb3V0ZXJEaXJlY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaGFzU2hhZG93RG9tKF90aGlzLmVsKSkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgYnV0dG9uIHdhbnRzIHRvIHNwZWNpZmljYWxseSBzdWJtaXQgYSBmb3JtXG4gICAgICAgICAgICAgICAgLy8gY2xpbWIgdXAgdGhlIGRvbSB0byBzZWUgaWYgd2UncmUgaW4gYSA8Zm9ybT5cbiAgICAgICAgICAgICAgICAvLyBhbmQgaWYgc28sIHRoZW4gdXNlIEpTIHRvIHN1Ym1pdCBpdFxuICAgICAgICAgICAgICAgIHZhciBmb3JtID0gX3RoaXMuZWwuY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICAgICAgICAgIGlmIChmb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmYWtlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGZha2VCdXR0b24udHlwZSA9IF90aGlzLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGZha2VCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmYWtlQnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgZmFrZUJ1dHRvbi5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICBmYWtlQnV0dG9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaW9uRm9jdXMuZW1pdCgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmlvbkJsdXIuZW1pdCgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlvbkZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Gb2N1c1wiLCA3KTtcbiAgICAgICAgdGhpcy5pb25CbHVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25CbHVyXCIsIDcpO1xuICAgIH1cbiAgICBCdXR0b24ucHJvdG90eXBlLmNvbXBvbmVudFdpbGxMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmluVG9vbGJhciA9ICEhdGhpcy5lbC5jbG9zZXN0KCdpb24tYnV0dG9ucycpO1xuICAgICAgICB0aGlzLmluSXRlbSA9ICEhdGhpcy5lbC5jbG9zZXN0KCdpb24taXRlbScpIHx8ICEhdGhpcy5lbC5jbG9zZXN0KCdpb24taXRlbS1kaXZpZGVyJyk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uLnByb3RvdHlwZSwgXCJoYXNJY29uT25seVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICEhdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpb24taWNvbltzbG90PVwiaWNvbi1vbmx5XCJdJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b24ucHJvdG90eXBlLCBcInJpcHBsZVR5cGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoYXNDbGVhckZpbGwgPSB0aGlzLmZpbGwgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmZpbGwgPT09ICdjbGVhcic7XG4gICAgICAgICAgICAvLyBJZiB0aGUgYnV0dG9uIGlzIGluIGEgdG9vbGJhciwgaGFzIGEgY2xlYXIgZmlsbCAod2hpY2ggaXMgdGhlIGRlZmF1bHQpXG4gICAgICAgICAgICAvLyBhbmQgb25seSBoYXMgYW4gaWNvbiB3ZSB1c2UgdGhlIHVuYm91bmRlZCBcImNpcmN1bGFyXCIgcmlwcGxlIGVmZmVjdFxuICAgICAgICAgICAgaWYgKGhhc0NsZWFyRmlsbCAmJiB0aGlzLmhhc0ljb25Pbmx5ICYmIHRoaXMuaW5Ub29sYmFyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1bmJvdW5kZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICdib3VuZGVkJztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQnV0dG9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlJDEodGhpcyk7XG4gICAgICAgIHZhciBfYiA9IHRoaXMsIGJ1dHRvblR5cGUgPSBfYi5idXR0b25UeXBlLCB0eXBlID0gX2IudHlwZSwgZGlzYWJsZWQgPSBfYi5kaXNhYmxlZCwgcmVsID0gX2IucmVsLCB0YXJnZXQgPSBfYi50YXJnZXQsIHNpemUgPSBfYi5zaXplLCBocmVmID0gX2IuaHJlZiwgY29sb3IgPSBfYi5jb2xvciwgZXhwYW5kID0gX2IuZXhwYW5kLCBoYXNJY29uT25seSA9IF9iLmhhc0ljb25Pbmx5LCBzaGFwZSA9IF9iLnNoYXBlLCBzdHJvbmcgPSBfYi5zdHJvbmc7XG4gICAgICAgIHZhciBmaW5hbFNpemUgPSBzaXplID09PSB1bmRlZmluZWQgJiYgdGhpcy5pbkl0ZW0gPyAnc21hbGwnIDogc2l6ZTtcbiAgICAgICAgdmFyIFRhZ1R5cGUgPSBocmVmID09PSB1bmRlZmluZWQgPyAnYnV0dG9uJyA6ICdhJztcbiAgICAgICAgdmFyIGF0dHJzID0gKFRhZ1R5cGUgPT09ICdidXR0b24nKVxuICAgICAgICAgICAgPyB7IHR5cGU6IHR5cGUgfVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgZG93bmxvYWQ6IHRoaXMuZG93bmxvYWQsXG4gICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICByZWw6IHJlbCxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxuICAgICAgICAgICAgfTtcbiAgICAgICAgdmFyIGZpbGwgPSB0aGlzLmZpbGw7XG4gICAgICAgIGlmIChmaWxsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZpbGwgPSB0aGlzLmluVG9vbGJhciA/ICdjbGVhcicgOiAnc29saWQnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2ssIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/ICd0cnVlJyA6IG51bGwsIGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNyZWF0ZUNvbG9yQ2xhc3NlcyQxKGNvbG9yKSksIChfYSA9IHt9LCBfYVttb2RlXSA9IHRydWUsIF9hW2J1dHRvblR5cGVdID0gdHJ1ZSwgX2FbYnV0dG9uVHlwZSArIFwiLVwiICsgZXhwYW5kXSA9IGV4cGFuZCAhPT0gdW5kZWZpbmVkLCBfYVtidXR0b25UeXBlICsgXCItXCIgKyBmaW5hbFNpemVdID0gZmluYWxTaXplICE9PSB1bmRlZmluZWQsIF9hW2J1dHRvblR5cGUgKyBcIi1cIiArIHNoYXBlXSA9IHNoYXBlICE9PSB1bmRlZmluZWQsIF9hW2J1dHRvblR5cGUgKyBcIi1cIiArIGZpbGxdID0gdHJ1ZSwgX2FbYnV0dG9uVHlwZSArIFwiLXN0cm9uZ1wiXSA9IHN0cm9uZywgX2FbJ2J1dHRvbi1oYXMtaWNvbi1vbmx5J10gPSBoYXNJY29uT25seSwgX2FbJ2J1dHRvbi1kaXNhYmxlZCddID0gZGlzYWJsZWQsIF9hWydpb24tYWN0aXZhdGFibGUnXSA9IHRydWUsIF9hWydpb24tZm9jdXNhYmxlJ10gPSB0cnVlLCBfYSkpIH0sIGgoVGFnVHlwZSwgT2JqZWN0LmFzc2lnbih7fSwgYXR0cnMsIHsgY2xhc3M6IFwiYnV0dG9uLW5hdGl2ZVwiLCBkaXNhYmxlZDogZGlzYWJsZWQsIG9uRm9jdXM6IHRoaXMub25Gb2N1cywgb25CbHVyOiB0aGlzLm9uQmx1ciB9KSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJidXR0b24taW5uZXJcIiB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFwiaWNvbi1vbmx5XCIgfSksIGgoXCJzbG90XCIsIHsgbmFtZTogXCJzdGFydFwiIH0pLCBoKFwic2xvdFwiLCBudWxsKSwgaChcInNsb3RcIiwgeyBuYW1lOiBcImVuZFwiIH0pKSwgbW9kZSA9PT0gJ21kJyAmJiBoKFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwgeyB0eXBlOiB0aGlzLnJpcHBsZVR5cGUgfSkpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbiwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCI6aG9zdHstLW92ZXJmbG93OmhpZGRlbjstLXJpcHBsZS1jb2xvcjpjdXJyZW50Q29sb3I7LS1ib3JkZXItd2lkdGg6aW5pdGlhbDstLWJvcmRlci1jb2xvcjppbml0aWFsOy0tYm9yZGVyLXN0eWxlOmluaXRpYWw7LS1jb2xvci1ob3Zlcjppbml0aWFsOy0tYm94LXNoYWRvdzpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOmF1dG87Y29sb3I6dmFyKC0tY29sb3IpO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7dmVydGljYWwtYWxpZ246dG9wO3ZlcnRpY2FsLWFsaWduOi13ZWJraXQtYmFzZWxpbmUtbWlkZGxlO3BvaW50ZXItZXZlbnRzOmF1dG87LXdlYmtpdC1mb250LWtlcm5pbmc6bm9uZTtmb250LWtlcm5pbmc6bm9uZX06aG9zdCguYnV0dG9uLWRpc2FibGVkKXstLW9wYWNpdHk6LjU7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCguYnV0dG9uLWRpc2FibGVkKSAuYnV0dG9uLW5hdGl2ZXtjdXJzb3I6ZGVmYXVsdDtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5idXR0b24tc29saWQpey0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTstLWJhY2tncm91bmQtZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSwjMzE3MWUwKTstLWJhY2tncm91bmQtaG92ZXI6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwjNGM4ZGZmKTstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCNmZmYpOy0tY29sb3ItYWN0aXZhdGVkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCNmZmYpOy0tY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwjZmZmKX06aG9zdCguYnV0dG9uLXNvbGlkLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdCguYnV0dG9uLXNvbGlkLmlvbi1jb2xvci5pb24tZm9jdXNlZCkgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc2hhZGUpfTpob3N0KC5idXR0b24tb3V0bGluZSl7LS1ib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZik7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZik7LS1jb2xvci1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpfTpob3N0KC5idXR0b24tb3V0bGluZS5pb24tY29sb3IpIC5idXR0b24tbmF0aXZle2JvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSk7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QoLmJ1dHRvbi1vdXRsaW5lLmlvbi1mb2N1c2VkLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1iYXNlLXJnYiksLjEpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguYnV0dG9uLWNsZWFyKXstLWJvcmRlci13aWR0aDowOy0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpfTpob3N0KC5idXR0b24tY2xlYXIuaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguYnV0dG9uLWNsZWFyLmlvbi1mb2N1c2VkLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1iYXNlLXJnYiksLjEpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguYnV0dG9uLWNsZWFyLmFjdGl2YXRlZC5pb24tY29sb3IpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6dHJhbnNwYXJlbnR9Omhvc3QoLmJ1dHRvbi1ibG9jayl7ZGlzcGxheTpibG9ja306aG9zdCguYnV0dG9uLWJsb2NrKSAuYnV0dG9uLW5hdGl2ZXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtjbGVhcjpib3RoO2NvbnRhaW46Y29udGVudH06aG9zdCguYnV0dG9uLWJsb2NrKSAuYnV0dG9uLW5hdGl2ZTphZnRlcntjbGVhcjpib3RofTpob3N0KC5idXR0b24tZnVsbCl7ZGlzcGxheTpibG9ja306aG9zdCguYnV0dG9uLWZ1bGwpIC5idXR0b24tbmF0aXZle21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2NvbnRhaW46Y29udGVudH06aG9zdCguYnV0dG9uLWZ1bGw6bm90KC5idXR0b24tcm91bmQpKSAuYnV0dG9uLW5hdGl2ZXtib3JkZXItcmFkaXVzOjA7Ym9yZGVyLXJpZ2h0LXdpZHRoOjA7Ym9yZGVyLWxlZnQtd2lkdGg6MH0uYnV0dG9uLW5hdGl2ZXtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwYWRkaW5nLWxlZnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1yaWdodDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmctYm90dG9tKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LXdlYmtpdC10cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO3RyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7Ym9yZGVyLXdpZHRoOnZhcigtLWJvcmRlci13aWR0aCk7Ym9yZGVyLXN0eWxlOnZhcigtLWJvcmRlci1zdHlsZSk7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcik7b3V0bGluZTpub25lO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7bGluZS1oZWlnaHQ6MTstd2Via2l0LWJveC1zaGFkb3c6dmFyKC0tYm94LXNoYWRvdyk7Ym94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtjb250YWluOmxheW91dCBzdHlsZTtjdXJzb3I6cG9pbnRlcjtvcGFjaXR5OnZhcigtLW9wYWNpdHkpO292ZXJmbG93OnZhcigtLW92ZXJmbG93KTt6LWluZGV4OjA7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7LmJ1dHRvbi1uYXRpdmV7cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCl9fS5idXR0b24tbmF0aXZlOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfS5idXR0b24taW5uZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpyb3cgbm93cmFwO2ZsZXgtZmxvdzpyb3cgbm93cmFwOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX06OnNsb3R0ZWQoaW9uLWljb24pe2ZvbnQtc2l6ZToxLjRlbTtwb2ludGVyLWV2ZW50czpub25lfTo6c2xvdHRlZChpb24taWNvbltzbG90PXN0YXJ0XSl7bWFyZ2luLWxlZnQ6LS4zZW07bWFyZ2luLXJpZ2h0Oi4zZW07bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7OjpzbG90dGVkKGlvbi1pY29uW3Nsb3Q9c3RhcnRdKXttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6LS4zZW07bWFyZ2luLWlubGluZS1zdGFydDotLjNlbTstd2Via2l0LW1hcmdpbi1lbmQ6LjNlbTttYXJnaW4taW5saW5lLWVuZDouM2VtfX06OnNsb3R0ZWQoaW9uLWljb25bc2xvdD1lbmRdKXttYXJnaW4tbGVmdDouM2VtO21hcmdpbi1yaWdodDotLjJlbTttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfVxcQHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCkgb3IgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6MCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDowKXs6OnNsb3R0ZWQoaW9uLWljb25bc2xvdD1lbmRdKXttYXJnaW4tbGVmdDp1bnNldDttYXJnaW4tcmlnaHQ6dW5zZXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6LjNlbTttYXJnaW4taW5saW5lLXN0YXJ0Oi4zZW07LXdlYmtpdC1tYXJnaW4tZW5kOi0uMmVtO21hcmdpbi1pbmxpbmUtZW5kOi0uMmVtfX06OnNsb3R0ZWQoaW9uLWljb25bc2xvdD1pY29uLW9ubHldKXtmb250LXNpemU6MS44ZW19aW9uLXJpcHBsZS1lZmZlY3R7Y29sb3I6dmFyKC0tcmlwcGxlLWNvbG9yKX06aG9zdCguaW9uLWZvY3VzZWQpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1mb2N1c2VkKTtjb2xvcjp2YXIoLS1jb2xvci1mb2N1c2VkKX06aG9zdCguYWN0aXZhdGVkKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtYWN0aXZhdGVkKTtjb2xvcjp2YXIoLS1jb2xvci1hY3RpdmF0ZWQpfVxcQG1lZGlhIChhbnktaG92ZXI6aG92ZXIpezpob3N0KDpob3ZlcikgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtjb2xvcjp2YXIoLS1jb2xvci1ob3Zlcil9fTpob3N0ey0tYm9yZGVyLXJhZGl1czoxMHB4Oy0tcGFkZGluZy10b3A6MDstLXBhZGRpbmctYm90dG9tOjA7LS1wYWRkaW5nLXN0YXJ0OjFlbTstLXBhZGRpbmctZW5kOjFlbTstLXRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvcixvcGFjaXR5IDEwMG1zIGxpbmVhcjttYXJnaW4tbGVmdDoycHg7bWFyZ2luLXJpZ2h0OjJweDttYXJnaW4tdG9wOjRweDttYXJnaW4tYm90dG9tOjRweDtoZWlnaHQ6Mi44ZW07Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6NTAwO2xldHRlci1zcGFjaW5nOi0uMDNlbX1cXEBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OjApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OjApKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6MCl7Omhvc3R7bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjJweDttYXJnaW4taW5saW5lLXN0YXJ0OjJweDstd2Via2l0LW1hcmdpbi1lbmQ6MnB4O21hcmdpbi1pbmxpbmUtZW5kOjJweH19Omhvc3QoLmJ1dHRvbi1zb2xpZCl7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSwjMzE3MWUwKX06aG9zdCguYnV0dG9uLXNvbGlkLmFjdGl2YXRlZCl7LS1vcGFjaXR5OjF9Omhvc3QoLmJ1dHRvbi1zb2xpZC5hY3RpdmF0ZWQuaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zaGFkZSl9Omhvc3QoLmJ1dHRvbi1vdXRsaW5lKXstLWJvcmRlci1yYWRpdXM6MTBweDstLWJvcmRlci13aWR0aDoxcHg7LS1ib3JkZXItc3R5bGU6c29saWQ7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTstLWJhY2tncm91bmQtZm9jdXNlZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiw1NiwxMjgsMjU1KSwwLjEpOy0tY29sb3ItYWN0aXZhdGVkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCNmZmYpfTpob3N0KC5idXR0b24tb3V0bGluZS5hY3RpdmF0ZWQuaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KC5idXR0b24tY2xlYXIuYWN0aXZhdGVkKXstLW9wYWNpdHk6MC40fTpob3N0KC5idXR0b24tY2xlYXIpey0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6cmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsNTYsMTI4LDI1NSksMC4xKTstLWNvbG9yLWFjdGl2YXRlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTstLWNvbG9yLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZil9Omhvc3QoLmJ1dHRvbi1sYXJnZSl7LS1ib3JkZXItcmFkaXVzOjEycHg7LS1wYWRkaW5nLXRvcDowOy0tcGFkZGluZy1zdGFydDoxZW07LS1wYWRkaW5nLWVuZDoxZW07LS1wYWRkaW5nLWJvdHRvbTowO2hlaWdodDoyLjhlbTtmb250LXNpemU6MjBweH06aG9zdCguYnV0dG9uLXNtYWxsKXstLWJvcmRlci1yYWRpdXM6NnB4Oy0tcGFkZGluZy10b3A6MDstLXBhZGRpbmctc3RhcnQ6MC45ZW07LS1wYWRkaW5nLWVuZDowLjllbTstLXBhZGRpbmctYm90dG9tOjA7aGVpZ2h0OjIuMWVtO2ZvbnQtc2l6ZToxM3B4fTpob3N0KC5idXR0b24tcm91bmQpey0tYm9yZGVyLXJhZGl1czo2NHB4Oy0tcGFkZGluZy10b3A6MDstLXBhZGRpbmctc3RhcnQ6MjZweDstLXBhZGRpbmctZW5kOjI2cHg7LS1wYWRkaW5nLWJvdHRvbTowfTpob3N0KC5idXR0b24tc3Ryb25nKXtmb250LXdlaWdodDo2MDB9XFxAbWVkaWEgKGFueS1ob3Zlcjpob3Zlcil7Omhvc3QoLmJ1dHRvbi1zb2xpZDpob3Zlcil7LS1vcGFjaXR5OjAuOH06aG9zdCguYnV0dG9uLWNsZWFyOmhvdmVyKSw6aG9zdCguYnV0dG9uLW91dGxpbmU6aG92ZXIpey0tb3BhY2l0eTowLjZ9Omhvc3QoLmlvbi1mb2N1c2VkOmhvdmVyKXstLWJhY2tncm91bmQtaG92ZXI6dmFyKC0tYmFja2dyb3VuZC1mb2N1c2VkKTstLWNvbG9yLWhvdmVyOnZhcigtLWNvbG9yLWZvY3VzZWQpfTpob3N0KC5hY3RpdmF0ZWQ6aG92ZXIpey0tYmFja2dyb3VuZC1ob3Zlcjp2YXIoLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZCk7LS1jb2xvci1ob3Zlcjp2YXIoLS1jb2xvci1hY3RpdmF0ZWQpfX1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEJ1dHRvbjtcbn0oKSk7XG52YXIgQ0FDSEVEX01BUDtcbnZhciBnZXRJY29uTWFwID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghQ0FDSEVEX01BUCkge1xuICAgICAgICB2YXIgd2luID0gd2luZG93O1xuICAgICAgICB3aW4uSW9uaWNvbnMgPSB3aW4uSW9uaWNvbnMgfHwge307XG4gICAgICAgIENBQ0hFRF9NQVAgPSB3aW4uSW9uaWNvbnMubWFwID0gd2luLklvbmljb25zLm1hcCB8fCBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHJldHVybiBDQUNIRURfTUFQO1xufTtcbnZhciBnZXRVcmwgPSBmdW5jdGlvbiAoaSkge1xuICAgIHZhciB1cmwgPSBnZXRTcmMoaS5zcmMpO1xuICAgIGlmICh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gICAgdXJsID0gZ2V0TmFtZShpLm5hbWUsIGkuaWNvbiwgaS5tb2RlLCBpLmlvcywgaS5tZCk7XG4gICAgaWYgKHVybCkge1xuICAgICAgICByZXR1cm4gZ2V0TmFtZWRVcmwodXJsKTtcbiAgICB9XG4gICAgaWYgKGkuaWNvbikge1xuICAgICAgICB1cmwgPSBnZXRTcmMoaS5pY29uKTtcbiAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgICAgICB1cmwgPSBnZXRTcmMoaS5pY29uW2kubW9kZV0pO1xuICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcbnZhciBnZXROYW1lZFVybCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHVybCA9IGdldEljb25NYXAoKS5nZXQobmFtZSk7XG4gICAgaWYgKHVybCkge1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0QXNzZXRQYXRoKFwic3ZnL1wiICsgbmFtZSArIFwiLnN2Z1wiKTtcbn07XG52YXIgZ2V0TmFtZSA9IGZ1bmN0aW9uIChuYW1lLCBpY29uLCBtb2RlLCBpb3MsIG1kKSB7XG4gICAgLy8gZGVmYXVsdCB0byBcIm1kXCIgaWYgc29tZWhvdyB0aGUgbW9kZSB3YXNuJ3Qgc2V0XG4gICAgbW9kZSA9IChtb2RlICYmIG1vZGUudG9Mb3dlckNhc2UoKSkgPT09ICdpb3MnID8gJ2lvcycgOiAnbWQnO1xuICAgIC8vIGlmIGFuIGljb24gd2FzIHBhc3NlZCBpbiB1c2luZyB0aGUgaW9zIG9yIG1kIGF0dHJpYnV0ZXNcbiAgICAvLyBzZXQgdGhlIGljb25OYW1lIHRvIHdoYXRldmVyIHdhcyBwYXNzZWQgaW5cbiAgICBpZiAoaW9zICYmIG1vZGUgPT09ICdpb3MnKSB7XG4gICAgICAgIG5hbWUgPSBpb3MudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobWQgJiYgbW9kZSA9PT0gJ21kJykge1xuICAgICAgICBuYW1lID0gbWQudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghbmFtZSAmJiBpY29uICYmICFpc1NyYyhpY29uKSkge1xuICAgICAgICAgICAgbmFtZSA9IGljb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU3RyKG5hbWUpKSB7XG4gICAgICAgICAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKCEvXm1kLXxeaW9zLXxebG9nby0vLnRlc3QobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGRvZXMgbm90IGhhdmUgb25lIG9mIHRoZSBkZWZhdWx0c1xuICAgICAgICAgICAgICAgIC8vIHNvIGxldHMgYXV0byBhZGQgaW4gdGhlIG1vZGUgcHJlZml4IGZvciB0aGVtXG4gICAgICAgICAgICAgICAgbmFtZSA9IG1vZGUgKyAnLScgKyBuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaXNTdHIobmFtZSkgfHwgbmFtZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyBvbmx5IGFsbG93IGFscGhhIGNoYXJhY3RlcnMgYW5kIGRhc2hcbiAgICB2YXIgaW52YWxpZENoYXJzID0gbmFtZS5yZXBsYWNlKC9bYS16XXwtfFxcZC9naSwgJycpO1xuICAgIGlmIChpbnZhbGlkQ2hhcnMgIT09ICcnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZTtcbn07XG52YXIgZ2V0U3JjID0gZnVuY3Rpb24gKHNyYykge1xuICAgIGlmIChpc1N0cihzcmMpKSB7XG4gICAgICAgIHNyYyA9IHNyYy50cmltKCk7XG4gICAgICAgIGlmIChpc1NyYyhzcmMpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3JjO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcbnZhciBpc1NyYyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gc3RyLmxlbmd0aCA+IDAgJiYgLyhcXC98XFwuKS8udGVzdChzdHIpO1xufTtcbnZhciBpc1N0ciA9IGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnOyB9O1xudmFyIHZhbGlkYXRlQ29udGVudCA9IGZ1bmN0aW9uIChzdmdDb250ZW50KSB7XG4gICAgaWYgKHN2Z0NvbnRlbnQpIHtcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gc3ZnQ29udGVudDtcbiAgICAgICAgLy8gc2V0dXAgdGhpcyB3YXkgdG8gZW5zdXJlIGl0IHdvcmtzIG9uIG91ciBidWRkeSBJRVxuICAgICAgICBmb3IgKHZhciBpID0gZGl2LmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmIChkaXYuY2hpbGROb2Rlc1tpXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnc3ZnJykge1xuICAgICAgICAgICAgICAgIGRpdi5yZW1vdmVDaGlsZChkaXYuY2hpbGROb2Rlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gbXVzdCBvbmx5IGhhdmUgMSByb290IGVsZW1lbnRcbiAgICAgICAgdmFyIHN2Z0VsbSA9IGRpdi5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgaWYgKHN2Z0VsbSAmJiBzdmdFbG0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgICAgIHN2Z0VsbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3MtaW9uLWljb24nKTtcbiAgICAgICAgICAgIC8vIHJvb3QgZWxlbWVudCBtdXN0IGJlIGFuIHN2Z1xuICAgICAgICAgICAgLy8gbGV0cyBkb3VibGUgY2hlY2sgd2UndmUgZ290IHZhbGlkIGVsZW1lbnRzXG4gICAgICAgICAgICAvLyBkbyBub3QgYWxsb3cgc2NyaXB0c1xuICAgICAgICAgICAgaWYgKGlzVmFsaWQoc3ZnRWxtKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkaXYuaW5uZXJIVE1MO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJztcbn07XG52YXIgaXNWYWxpZCA9IGZ1bmN0aW9uIChlbG0pIHtcbiAgICBpZiAoZWxtLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIGlmIChlbG0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NjcmlwdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsbS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdmFsID0gZWxtLmF0dHJpYnV0ZXNbaV0udmFsdWU7XG4gICAgICAgICAgICBpZiAoaXNTdHIodmFsKSAmJiB2YWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdvbicpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghaXNWYWxpZChlbG0uY2hpbGROb2Rlc1tpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xudmFyIHJlcXVlc3RzID0gbmV3IE1hcCgpO1xudmFyIGdldFN2Z0NvbnRlbnQgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgLy8gc2VlIGlmIHdlIGFscmVhZHkgaGF2ZSBhIHJlcXVlc3QgZm9yIHRoaXMgdXJsXG4gICAgdmFyIHJlcSA9IHJlcXVlc3RzLmdldCh1cmwpO1xuICAgIGlmICghcmVxKSB7XG4gICAgICAgIC8vIHdlIGRvbid0IGFscmVhZHkgaGF2ZSBhIHJlcXVlc3RcbiAgICAgICAgcmVxID0gZmV0Y2godXJsKS50aGVuKGZ1bmN0aW9uIChyc3ApIHtcbiAgICAgICAgICAgIGlmIChyc3Auc3RhdHVzIDw9IDI5OSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByc3AudGV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoc3ZnQ29udGVudCkgeyByZXR1cm4gdmFsaWRhdGVDb250ZW50KHN2Z0NvbnRlbnQpOyB9KTtcbiAgICAgICAgLy8gY2FjaGUgZm9yIHRoZSBzYW1lIHJlcXVlc3RzXG4gICAgICAgIHJlcXVlc3RzLnNldCh1cmwsIHJlcSk7XG4gICAgfVxuICAgIHJldHVybiByZXE7XG59O1xudmFyIEljb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSWNvbihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMubW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBlbmFibGVkLCBpb24taWNvbiB3aWxsIGJlIGxvYWRlZCBsYXppbHkgd2hlbiBpdCdzIHZpc2libGUgaW4gdGhlIHZpZXdwb3J0LlxuICAgICAgICAgKiBEZWZhdWx0LCBgZmFsc2VgLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIEljb24ucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBwdXJwb3NlbHkgZG8gbm90IHJldHVybiB0aGUgcHJvbWlzZSBoZXJlIGJlY2F1c2UgbG9hZGluZ1xuICAgICAgICAvLyB0aGUgc3ZnIGZpbGUgc2hvdWxkIG5vdCBob2xkIHVwIGxvYWRpbmcgdGhlIGFwcFxuICAgICAgICAvLyBvbmx5IGxvYWQgdGhlIHN2ZyBpZiBpdCdzIHZpc2libGVcbiAgICAgICAgdGhpcy53YWl0VW50aWxWaXNpYmxlKHRoaXMuZWwsICc1MHB4JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLmxvYWRJY29uKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSWNvbi5wcm90b3R5cGUuZGlzY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlvKSB7XG4gICAgICAgICAgICB0aGlzLmlvLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMuaW8gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEljb24ucHJvdG90eXBlLndhaXRVbnRpbFZpc2libGUgPSBmdW5jdGlvbiAoZWwsIHJvb3RNYXJnaW4sIGNiKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmxhenkgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICB2YXIgaW9fMSA9IHRoaXMuaW8gPSBuZXcgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFbMF0uaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaW9fMS5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmlvID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHsgcm9vdE1hcmdpbjogcm9vdE1hcmdpbiB9KTtcbiAgICAgICAgICAgIGlvXzEub2JzZXJ2ZShlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICAgICAgICAgICAgLy8gc28ganVzdCBmYWxsYmFjayB0byBhbHdheXMgc2hvdyBpdFxuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSWNvbi5wcm90b3R5cGUubG9hZEljb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZSkge1xuICAgICAgICAgICAgdmFyIHVybCA9IGdldFVybCh0aGlzKTtcbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICBnZXRTdmdDb250ZW50KHVybClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHN2Z0NvbnRlbnQpIHsgcmV0dXJuIF90aGlzLnN2Z0NvbnRlbnQgPSBzdmdDb250ZW50OyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuYXJpYUxhYmVsKSB7XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBnZXROYW1lKHRoaXMubmFtZSwgdGhpcy5pY29uLCB0aGlzLm1vZGUsIHRoaXMuaW9zLCB0aGlzLm1kKTtcbiAgICAgICAgICAgIC8vIHVzZXIgZGlkIG5vdCBwcm92aWRlIGEgbGFiZWxcbiAgICAgICAgICAgIC8vIGNvbWUgdXAgd2l0aCB0aGUgbGFiZWwgYmFzZWQgb24gdGhlIGljb24gbmFtZVxuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcmlhTGFiZWwgPSBsYWJlbFxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnaW9zLScsICcnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnbWQtJywgJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC0vZywgJyAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgSWNvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB2YXIgbW9kZSA9IHRoaXMubW9kZSB8fCAnbWQnO1xuICAgICAgICB2YXIgZmxpcFJ0bCA9IHRoaXMuZmxpcFJ0bCB8fCAodGhpcy5hcmlhTGFiZWwgJiYgdGhpcy5hcmlhTGFiZWwuaW5kZXhPZignYXJyb3cnKSA+IC0xICYmIHRoaXMuZmxpcFJ0bCAhPT0gZmFsc2UpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyByb2xlOiBcImltZ1wiLCBjbGFzczogT2JqZWN0LmFzc2lnbigoX2EgPSB7fSwgX2FbbW9kZV0gPSB0cnVlLCBfYSksIGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yKSwgKF9iID0ge30sIF9iW1wiaWNvbi1cIiArIHRoaXMuc2l6ZV0gPSAhIXRoaXMuc2l6ZSwgX2JbJ2ZsaXAtcnRsJ10gPSAhIWZsaXBSdGwgJiYgdGhpcy5lbC5vd25lckRvY3VtZW50LmRpciA9PT0gJ3J0bCcsIF9iKSkgfSwgKCh0aGlzLnN2Z0NvbnRlbnQpXG4gICAgICAgICAgICA/IGgoXCJkaXZcIiwgeyBjbGFzczogXCJpY29uLWlubmVyXCIsIGlubmVySFRNTDogdGhpcy5zdmdDb250ZW50IH0pXG4gICAgICAgICAgICA6IGgoXCJkaXZcIiwgeyBjbGFzczogXCJpY29uLWlubmVyXCIgfSkpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSWNvbiwgXCJhc3NldHNEaXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBbXCJzdmdcIl07IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShJY29uLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEljb24sIFwid2F0Y2hlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFtcImxvYWRJY29uXCJdLFxuICAgICAgICAgICAgICAgIFwic3JjXCI6IFtcImxvYWRJY29uXCJdLFxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiBbXCJsb2FkSWNvblwiXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEljb24sIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiOmhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MWVtO2hlaWdodDoxZW07Y29udGFpbjpzdHJpY3Q7ZmlsbDpjdXJyZW50Q29sb3I7LXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94IWltcG9ydGFudDtib3gtc2l6aW5nOmNvbnRlbnQtYm94IWltcG9ydGFudH0uaWNvbi1pbm5lcixzdmd7ZGlzcGxheTpibG9jaztoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfTpob3N0KC5mbGlwLXJ0bCkgLmljb24taW5uZXJ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKC0xKTt0cmFuc2Zvcm06c2NhbGVYKC0xKX06aG9zdCguaWNvbi1zbWFsbCl7Zm9udC1zaXplOjE4cHghaW1wb3J0YW50fTpob3N0KC5pY29uLWxhcmdlKXtmb250LXNpemU6MzJweCFpbXBvcnRhbnR9Omhvc3QoLmlvbi1jb2xvcil7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpIWltcG9ydGFudH06aG9zdCguaW9uLWNvbG9yLXByaW1hcnkpey0taW9uLWNvbG9yLWJhc2U6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZil9Omhvc3QoLmlvbi1jb2xvci1zZWNvbmRhcnkpey0taW9uLWNvbG9yLWJhc2U6dmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwjMGNkMWU4KX06aG9zdCguaW9uLWNvbG9yLXRlcnRpYXJ5KXstLWlvbi1jb2xvci1iYXNlOnZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSwjZjRhOTQyKX06aG9zdCguaW9uLWNvbG9yLXN1Y2Nlc3Mpey0taW9uLWNvbG9yLWJhc2U6dmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsIzEwZGM2MCl9Omhvc3QoLmlvbi1jb2xvci13YXJuaW5nKXstLWlvbi1jb2xvci1iYXNlOnZhcigtLWlvbi1jb2xvci13YXJuaW5nLCNmZmNlMDApfTpob3N0KC5pb24tY29sb3ItZGFuZ2VyKXstLWlvbi1jb2xvci1iYXNlOnZhcigtLWlvbi1jb2xvci1kYW5nZXIsI2YxNDE0MSl9Omhvc3QoLmlvbi1jb2xvci1saWdodCl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3ItbGlnaHQsI2Y0ZjVmOCl9Omhvc3QoLmlvbi1jb2xvci1tZWRpdW0pey0taW9uLWNvbG9yLWJhc2U6dmFyKC0taW9uLWNvbG9yLW1lZGl1bSwjOTg5YWEyKX06aG9zdCguaW9uLWNvbG9yLWRhcmspey0taW9uLWNvbG9yLWJhc2U6dmFyKC0taW9uLWNvbG9yLWRhcmssIzIyMjQyOCl9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBJY29uO1xufSgpKTtcbnZhciBnZXRJb25Nb2RlID0gZnVuY3Rpb24gKHJlZikge1xuICAgIHJldHVybiBnZXRNb2RlKHJlZikgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnbW9kZScpIHx8ICdtZCc7XG59O1xudmFyIGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKGNvbG9yKSA/IChfYSA9IHtcbiAgICAgICAgICAgICdpb24tY29sb3InOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIF9hW1wiaW9uLWNvbG9yLVwiICsgY29sb3JdID0gdHJ1ZSxcbiAgICAgICAgX2EpIDogbnVsbDtcbn07XG5leHBvcnQgeyBCdXR0b24gYXMgaW9uX2J1dHRvbiwgSWNvbiBhcyBpb25faWNvbiB9O1xuIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xudmFyIGhvc3RDb250ZXh0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBlbCkge1xuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcbn07XG4vKipcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cbiAqL1xudmFyIGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyAoX2EgPSB7XG4gICAgICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBfYVtcImlvbi1jb2xvci1cIiArIGNvbG9yXSA9IHRydWUsXG4gICAgICAgIF9hKSA6IHVuZGVmaW5lZDtcbn07XG52YXIgZ2V0Q2xhc3NMaXN0ID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT0gbnVsbDsgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudHJpbSgpOyB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPT0gJyc7IH0pO1xuICAgIH1cbiAgICByZXR1cm4gW107XG59O1xudmFyIGdldENsYXNzTWFwID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG1hcFtjXSA9IHRydWU7IH0pO1xuICAgIHJldHVybiBtYXA7XG59O1xudmFyIFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xudmFyIG9wZW5VUkwgPSBmdW5jdGlvbiAodXJsLCBldiwgZGlyZWN0aW9uKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByb3V0ZXI7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcbiAgICAgICAgICAgIHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcbiAgICAgICAgICAgIGlmIChyb3V0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgIH0pO1xufSk7IH07XG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9