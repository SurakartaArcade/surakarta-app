(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[96],{

/***/ "./node_modules/ionicons/dist/esm/legacy/ion-icon.entry.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ionicons/dist/esm/legacy/ion-icon.entry.js ***!
  \*****************************************************************/
/*! exports provided: ion_icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_icon", function() { return Icon; });
/* harmony import */ var _chunk_58252182_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-58252182.js */ "./node_modules/ionicons/dist/esm/legacy/chunk-58252182.js");
/* harmony import */ var _chunk_2a882949_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-2a882949.js */ "./node_modules/ionicons/dist/esm/legacy/chunk-2a882949.js");


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
            if (Object(_chunk_2a882949_js__WEBPACK_IMPORTED_MODULE_1__["i"])(val) && val.toLowerCase().indexOf('on') === 0) {
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
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
var Icon = /** @class */ (function () {
    function Icon(hostRef) {
        Object(_chunk_58252182_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
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
            var url = Object(_chunk_2a882949_js__WEBPACK_IMPORTED_MODULE_1__["g"])(this);
            if (url) {
                getSvgContent(url)
                    .then(function (svgContent) { return _this.svgContent = svgContent; });
            }
        }
        if (!this.ariaLabel) {
            var label = Object(_chunk_2a882949_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.name, this.icon, this.mode, this.ios, this.md);
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
        return (Object(_chunk_58252182_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_58252182_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "img", class: Object.assign((_a = {}, _a[mode] = true, _a), createColorClasses(this.color), (_b = {}, _b["icon-" + this.size] = !!this.size, _b['flip-rtl'] = !!flipRtl && this.el.ownerDocument.dir === 'rtl', _b)) }, ((this.svgContent)
            ? Object(_chunk_58252182_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "icon-inner", innerHTML: this.svgContent })
            : Object(_chunk_58252182_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "icon-inner" }))));
    };
    Object.defineProperty(Icon, "assetsDirs", {
        get: function () { return ["svg"]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Icon.prototype, "el", {
        get: function () { return Object(_chunk_58252182_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this); },
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
    return Object(_chunk_58252182_js__WEBPACK_IMPORTED_MODULE_0__["c"])(ref) || document.documentElement.getAttribute('mode') || 'md';
};
var createColorClasses = function (color) {
    var _a;
    return (color) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : null;
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW9uaWNvbnMvZGlzdC9lc20vbGVnYWN5L2lvbi1pY29uLmVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5RztBQUM3QjtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQSxnQkFBZ0IsNERBQUs7QUFDckI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4QixvQ0FBb0MsRUFBRTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsYUFBYTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsR0FBRyx5QkFBeUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0REFBTTtBQUM1QjtBQUNBO0FBQ0EsaURBQWlELHNDQUFzQyxFQUFFO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0REFBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFDLENBQUMsb0RBQUksR0FBRywyQ0FBMkMsZ0VBQWdFLGtIQUFrSDtBQUN0UCxjQUFjLDREQUFDLFNBQVMsa0RBQWtEO0FBQzFFLGNBQWMsNERBQUMsU0FBUyxzQkFBc0I7QUFDOUM7QUFDQTtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLFFBQVEsNERBQVUsT0FBTyxFQUFFO0FBQ3JEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixlQUFlLHFCQUFxQixVQUFVLFdBQVcsZUFBZSxrQkFBa0IseUNBQXlDLGlDQUFpQyxnQkFBZ0IsY0FBYyxZQUFZLFdBQVcsNkJBQTZCLDZCQUE2QixxQkFBcUIsbUJBQW1CLHlCQUF5QixtQkFBbUIseUJBQXlCLGtCQUFrQixzQ0FBc0MsMEJBQTBCLGtEQUFrRCw0QkFBNEIsb0RBQW9ELDJCQUEyQixtREFBbUQsMEJBQTBCLGtEQUFrRCwwQkFBMEIsa0RBQWtELHlCQUF5QixpREFBaUQsd0JBQXdCLGdEQUFnRCx5QkFBeUIsaURBQWlELHVCQUF1QiwrQ0FBK0MsRUFBRSxFQUFFO0FBQzFuQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsV0FBVyw0REFBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUM0QiIsImZpbGUiOiI5Ni5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgZ2V0TW9kZSwgaCwgSCBhcyBIb3N0LCBkIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NodW5rLTU4MjUyMTgyLmpzJztcbmltcG9ydCB7IGkgYXMgaXNTdHIsIGcgYXMgZ2V0VXJsLCBiIGFzIGdldE5hbWUgfSBmcm9tICcuL2NodW5rLTJhODgyOTQ5LmpzJztcbnZhciB2YWxpZGF0ZUNvbnRlbnQgPSBmdW5jdGlvbiAoc3ZnQ29udGVudCkge1xuICAgIGlmIChzdmdDb250ZW50KSB7XG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IHN2Z0NvbnRlbnQ7XG4gICAgICAgIC8vIHNldHVwIHRoaXMgd2F5IHRvIGVuc3VyZSBpdCB3b3JrcyBvbiBvdXIgYnVkZHkgSUVcbiAgICAgICAgZm9yICh2YXIgaSA9IGRpdi5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAoZGl2LmNoaWxkTm9kZXNbaV0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ3N2ZycpIHtcbiAgICAgICAgICAgICAgICBkaXYucmVtb3ZlQ2hpbGQoZGl2LmNoaWxkTm9kZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIG11c3Qgb25seSBoYXZlIDEgcm9vdCBlbGVtZW50XG4gICAgICAgIHZhciBzdmdFbG0gPSBkaXYuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIGlmIChzdmdFbG0gJiYgc3ZnRWxtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnKSB7XG4gICAgICAgICAgICBzdmdFbG0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdzLWlvbi1pY29uJyk7XG4gICAgICAgICAgICAvLyByb290IGVsZW1lbnQgbXVzdCBiZSBhbiBzdmdcbiAgICAgICAgICAgIC8vIGxldHMgZG91YmxlIGNoZWNrIHdlJ3ZlIGdvdCB2YWxpZCBlbGVtZW50c1xuICAgICAgICAgICAgLy8gZG8gbm90IGFsbG93IHNjcmlwdHNcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHN2Z0VsbSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGl2LmlubmVySFRNTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG59O1xudmFyIGlzVmFsaWQgPSBmdW5jdGlvbiAoZWxtKSB7XG4gICAgaWYgKGVsbS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICBpZiAoZWxtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzY3JpcHQnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbG0uYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHZhbCA9IGVsbS5hdHRyaWJ1dGVzW2ldLnZhbHVlO1xuICAgICAgICAgICAgaWYgKGlzU3RyKHZhbCkgJiYgdmFsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignb24nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsbS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIWlzVmFsaWQoZWxtLmNoaWxkTm9kZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcbnZhciByZXF1ZXN0cyA9IG5ldyBNYXAoKTtcbnZhciBnZXRTdmdDb250ZW50ID0gZnVuY3Rpb24gKHVybCkge1xuICAgIC8vIHNlZSBpZiB3ZSBhbHJlYWR5IGhhdmUgYSByZXF1ZXN0IGZvciB0aGlzIHVybFxuICAgIHZhciByZXEgPSByZXF1ZXN0cy5nZXQodXJsKTtcbiAgICBpZiAoIXJlcSkge1xuICAgICAgICAvLyB3ZSBkb24ndCBhbHJlYWR5IGhhdmUgYSByZXF1ZXN0XG4gICAgICAgIHJlcSA9IGZldGNoKHVybCkudGhlbihmdW5jdGlvbiAocnNwKSB7XG4gICAgICAgICAgICBpZiAocnNwLnN0YXR1cyA8PSAyOTkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcnNwLnRleHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHN2Z0NvbnRlbnQpIHsgcmV0dXJuIHZhbGlkYXRlQ29udGVudChzdmdDb250ZW50KTsgfSk7XG4gICAgICAgIC8vIGNhY2hlIGZvciB0aGUgc2FtZSByZXF1ZXN0c1xuICAgICAgICByZXF1ZXN0cy5zZXQodXJsLCByZXEpO1xuICAgIH1cbiAgICByZXR1cm4gcmVxO1xufTtcbi8qKlxuICogQHZpcnR1YWxQcm9wIHtcImlvc1wiIHwgXCJtZFwifSBtb2RlIC0gVGhlIG1vZGUgZGV0ZXJtaW5lcyB3aGljaCBwbGF0Zm9ybSBzdHlsZXMgdG8gdXNlLlxuICovXG52YXIgSWNvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJY29uKGhvc3RSZWYpIHtcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5tb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGVuYWJsZWQsIGlvbi1pY29uIHdpbGwgYmUgbG9hZGVkIGxhemlseSB3aGVuIGl0J3MgdmlzaWJsZSBpbiB0aGUgdmlld3BvcnQuXG4gICAgICAgICAqIERlZmF1bHQsIGBmYWxzZWAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgSWNvbi5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIHB1cnBvc2VseSBkbyBub3QgcmV0dXJuIHRoZSBwcm9taXNlIGhlcmUgYmVjYXVzZSBsb2FkaW5nXG4gICAgICAgIC8vIHRoZSBzdmcgZmlsZSBzaG91bGQgbm90IGhvbGQgdXAgbG9hZGluZyB0aGUgYXBwXG4gICAgICAgIC8vIG9ubHkgbG9hZCB0aGUgc3ZnIGlmIGl0J3MgdmlzaWJsZVxuICAgICAgICB0aGlzLndhaXRVbnRpbFZpc2libGUodGhpcy5lbCwgJzUwcHgnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgX3RoaXMubG9hZEljb24oKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBJY29uLnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW8pIHtcbiAgICAgICAgICAgIHRoaXMuaW8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5pbyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSWNvbi5wcm90b3R5cGUud2FpdFVudGlsVmlzaWJsZSA9IGZ1bmN0aW9uIChlbCwgcm9vdE1hcmdpbiwgY2IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMubGF6eSAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHZhciBpb18xID0gdGhpcy5pbyA9IG5ldyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVswXS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBpb18xLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW8gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgeyByb290TWFyZ2luOiByb290TWFyZ2luIH0pO1xuICAgICAgICAgICAgaW9fMS5vYnNlcnZlKGVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEludGVyc2VjdGlvbk9ic2VydmVyXG4gICAgICAgICAgICAvLyBzbyBqdXN0IGZhbGxiYWNrIHRvIGFsd2F5cyBzaG93IGl0XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBJY29uLnByb3RvdHlwZS5sb2FkSWNvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gZ2V0VXJsKHRoaXMpO1xuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgIGdldFN2Z0NvbnRlbnQodXJsKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoc3ZnQ29udGVudCkgeyByZXR1cm4gX3RoaXMuc3ZnQ29udGVudCA9IHN2Z0NvbnRlbnQ7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5hcmlhTGFiZWwpIHtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IGdldE5hbWUodGhpcy5uYW1lLCB0aGlzLmljb24sIHRoaXMubW9kZSwgdGhpcy5pb3MsIHRoaXMubWQpO1xuICAgICAgICAgICAgLy8gdXNlciBkaWQgbm90IHByb3ZpZGUgYSBsYWJlbFxuICAgICAgICAgICAgLy8gY29tZSB1cCB3aXRoIHRoZSBsYWJlbCBiYXNlZCBvbiB0aGUgaWNvbiBuYW1lXG4gICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFyaWFMYWJlbCA9IGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdpb3MtJywgJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdtZC0nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcLS9nLCAnICcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBJY29uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHZhciBtb2RlID0gdGhpcy5tb2RlIHx8ICdtZCc7XG4gICAgICAgIHZhciBmbGlwUnRsID0gdGhpcy5mbGlwUnRsIHx8ICh0aGlzLmFyaWFMYWJlbCAmJiB0aGlzLmFyaWFMYWJlbC5pbmRleE9mKCdhcnJvdycpID4gLTEgJiYgdGhpcy5mbGlwUnRsICE9PSBmYWxzZSk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IHJvbGU6IFwiaW1nXCIsIGNsYXNzOiBPYmplY3QuYXNzaWduKChfYSA9IHt9LCBfYVttb2RlXSA9IHRydWUsIF9hKSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpLCAoX2IgPSB7fSwgX2JbXCJpY29uLVwiICsgdGhpcy5zaXplXSA9ICEhdGhpcy5zaXplLCBfYlsnZmxpcC1ydGwnXSA9ICEhZmxpcFJ0bCAmJiB0aGlzLmVsLm93bmVyRG9jdW1lbnQuZGlyID09PSAncnRsJywgX2IpKSB9LCAoKHRoaXMuc3ZnQ29udGVudClcbiAgICAgICAgICAgID8gaChcImRpdlwiLCB7IGNsYXNzOiBcImljb24taW5uZXJcIiwgaW5uZXJIVE1MOiB0aGlzLnN2Z0NvbnRlbnQgfSlcbiAgICAgICAgICAgIDogaChcImRpdlwiLCB7IGNsYXNzOiBcImljb24taW5uZXJcIiB9KSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShJY29uLCBcImFzc2V0c0RpcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcInN2Z1wiXTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEljb24ucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSWNvbiwgXCJ3YXRjaGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogW1wibG9hZEljb25cIl0sXG4gICAgICAgICAgICAgICAgXCJzcmNcIjogW1wibG9hZEljb25cIl0sXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IFtcImxvYWRJY29uXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSWNvbiwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCI6aG9zdHtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxZW07aGVpZ2h0OjFlbTtjb250YWluOnN0cmljdDtmaWxsOmN1cnJlbnRDb2xvcjstd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3ghaW1wb3J0YW50O2JveC1zaXppbmc6Y29udGVudC1ib3ghaW1wb3J0YW50fS5pY29uLWlubmVyLHN2Z3tkaXNwbGF5OmJsb2NrO2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9Omhvc3QoLmZsaXAtcnRsKSAuaWNvbi1pbm5lcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoLTEpO3RyYW5zZm9ybTpzY2FsZVgoLTEpfTpob3N0KC5pY29uLXNtYWxsKXtmb250LXNpemU6MThweCFpbXBvcnRhbnR9Omhvc3QoLmljb24tbGFyZ2Upe2ZvbnQtc2l6ZTozMnB4IWltcG9ydGFudH06aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSkhaW1wb3J0YW50fTpob3N0KC5pb24tY29sb3ItcHJpbWFyeSl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKX06aG9zdCguaW9uLWNvbG9yLXNlY29uZGFyeSl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCMwY2QxZTgpfTpob3N0KC5pb24tY29sb3ItdGVydGlhcnkpey0taW9uLWNvbG9yLWJhc2U6dmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LCNmNGE5NDIpfTpob3N0KC5pb24tY29sb3Itc3VjY2Vzcyl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3Itc3VjY2VzcywjMTBkYzYwKX06aG9zdCguaW9uLWNvbG9yLXdhcm5pbmcpey0taW9uLWNvbG9yLWJhc2U6dmFyKC0taW9uLWNvbG9yLXdhcm5pbmcsI2ZmY2UwMCl9Omhvc3QoLmlvbi1jb2xvci1kYW5nZXIpey0taW9uLWNvbG9yLWJhc2U6dmFyKC0taW9uLWNvbG9yLWRhbmdlciwjZjE0MTQxKX06aG9zdCguaW9uLWNvbG9yLWxpZ2h0KXstLWlvbi1jb2xvci1iYXNlOnZhcigtLWlvbi1jb2xvci1saWdodCwjZjRmNWY4KX06aG9zdCguaW9uLWNvbG9yLW1lZGl1bSl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3ItbWVkaXVtLCM5ODlhYTIpfTpob3N0KC5pb24tY29sb3ItZGFyayl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3ItZGFyaywjMjIyNDI4KX1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEljb247XG59KCkpO1xudmFyIGdldElvbk1vZGUgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgcmV0dXJuIGdldE1vZGUocmVmKSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdtb2RlJykgfHwgJ21kJztcbn07XG52YXIgY3JlYXRlQ29sb3JDbGFzc2VzID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoY29sb3IpID8gKF9hID0ge1xuICAgICAgICAgICAgJ2lvbi1jb2xvcic6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgX2FbXCJpb24tY29sb3ItXCIgKyBjb2xvcl0gPSB0cnVlLFxuICAgICAgICBfYSkgOiBudWxsO1xufTtcbmV4cG9ydCB7IEljb24gYXMgaW9uX2ljb24gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=