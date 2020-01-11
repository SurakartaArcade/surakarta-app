(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-split-pane-md.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-split-pane-md.entry.js ***!
  \**************************************************************************/
/*! exports provided: ion_split_pane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_split_pane", function() { return SplitPane; });
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");


var SPLIT_PANE_MAIN = 'split-pane-main';
var SPLIT_PANE_SIDE = 'split-pane-side';
var QUERY = {
    'xs': '(min-width: 0px)',
    'sm': '(min-width: 576px)',
    'md': '(min-width: 768px)',
    'lg': '(min-width: 992px)',
    'xl': '(min-width: 1200px)',
    'never': ''
};
var SplitPane = /** @class */ (function () {
    function SplitPane(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.visible = false;
        /**
         * If `true`, the split pane will be hidden.
         */
        this.disabled = false;
        /**
         * When the split-pane should be shown.
         * Can be a CSS media query expression, or a shortcut expression.
         * Can also be a boolean expression.
         */
        this.when = QUERY['lg'];
        this.ionSplitPaneVisible = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionSplitPaneVisible", 7);
    }
    SplitPane.prototype.visibleChanged = function (visible) {
        var detail = { visible: visible, isPane: this.isPane.bind(this) };
        this.ionSplitPaneVisible.emit(detail);
    };
    SplitPane.prototype.connectedCallback = function () {
        this.styleChildren();
        this.updateState();
    };
    SplitPane.prototype.disconnectedCallback = function () {
        if (this.rmL) {
            this.rmL();
            this.rmL = undefined;
        }
    };
    SplitPane.prototype.componentWillLoad = function () {
        if (this.contentId === undefined) {
            console.warn("[DEPRECATED][ion-split-pane] Using the [main] attribute is deprecated, please use the \"contentId\" property instead:\nBEFORE:\n  <ion-split-pane>\n    ...\n    <div main>...</div>\n  </ion-split-pane>\n\nAFTER:\n  <ion-split-pane contentId=\"main-content\">\n    ...\n    <div id=\"main-content\">...</div>\n  </ion-split-pane>\n");
        }
    };
    SplitPane.prototype.updateState = function () {
        var _this = this;
        if (this.rmL) {
            this.rmL();
            this.rmL = undefined;
        }
        // Check if the split-pane is disabled
        if (this.disabled) {
            this.visible = false;
            return;
        }
        // When query is a boolean
        var query = this.when;
        if (typeof query === 'boolean') {
            this.visible = query;
            return;
        }
        // When query is a string, let's find first if it is a shortcut
        var mediaQuery = QUERY[query] || query;
        // Media query is empty or null, we hide it
        if (mediaQuery.length === 0) {
            this.visible = false;
            return;
        }
        if (window.matchMedia) {
            // Listen on media query
            var callback_1 = function (q) {
                _this.visible = q.matches;
            };
            var mediaList_1 = window.matchMedia(mediaQuery);
            mediaList_1.addListener(callback_1);
            this.rmL = function () { return mediaList_1.removeListener(callback_1); };
            this.visible = mediaList_1.matches;
        }
    };
    SplitPane.prototype.isPane = function (element) {
        if (!this.visible) {
            return false;
        }
        return element.parentElement === this.el
            && element.classList.contains(SPLIT_PANE_SIDE);
    };
    SplitPane.prototype.styleChildren = function () {
        var contentId = this.contentId;
        var children = this.el.children;
        var nu = this.el.childElementCount;
        var foundMain = false;
        for (var i = 0; i < nu; i++) {
            var child = children[i];
            var isMain = contentId !== undefined ? child.id === contentId : child.hasAttribute('main');
            if (isMain) {
                if (foundMain) {
                    console.warn('split pane cannot have more than one main node');
                    return;
                }
                foundMain = true;
            }
            setPaneClass(child, isMain);
        }
        if (!foundMain) {
            console.warn('split pane does not have a specified main node');
        }
    };
    SplitPane.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: (_a = {},
                _a[mode] = true,
                // Used internally for styling
                _a["split-pane-" + mode] = true,
                _a['split-pane-visible'] = this.visible,
                _a) }));
    };
    Object.defineProperty(SplitPane.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitPane, "watchers", {
        get: function () {
            return {
                "visible": ["visibleChanged"],
                "disabled": ["updateState"],
                "when": ["updateState"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitPane, "style", {
        get: function () { return "ion-split-pane{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}.split-pane-visible>.split-pane-main,.split-pane-visible>.split-pane-side{left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}.split-pane-visible>.split-pane-side:not(ion-menu),.split-pane-visible>ion-menu.split-pane-side.menu-enabled{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}.split-pane-side:not(ion-menu){display:none}.split-pane-visible>.split-pane-side{-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=end]{-ms-flex-order:1;order:1}.split-pane-md{--border:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))))}.split-pane-md.split-pane-visible>.split-pane-side{min-width:270px;max-width:28%;border-right:var(--border);border-left:0}.split-pane-md.split-pane-visible>.split-pane-side[side=end]{min-width:270px;max-width:28%;border-right:0;border-left:var(--border)}"; },
        enumerable: true,
        configurable: true
    });
    return SplitPane;
}());
var setPaneClass = function (el, isMain) {
    var toAdd;
    var toRemove;
    if (isMain) {
        toAdd = SPLIT_PANE_MAIN;
        toRemove = SPLIT_PANE_SIDE;
    }
    else {
        toAdd = SPLIT_PANE_SIDE;
        toRemove = SPLIT_PANE_MAIN;
    }
    var classList = el.classList;
    classList.add(toAdd);
    classList.remove(toRemove);
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1zcGxpdC1wYW5lLW1kLmVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2SDtBQUMvRjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDJEQUFXO0FBQzlDO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLCtDQUErQztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFVO0FBQzdCLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUcsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSwwQkFBMEIsUUFBUSwyREFBVSxPQUFPLEVBQUU7QUFDckQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLHdCQUF3QixPQUFPLFFBQVEsTUFBTSxTQUFTLG9CQUFvQixhQUFhLGtCQUFrQix1QkFBdUIsbUJBQW1CLHFCQUFxQixpQkFBaUIsZUFBZSwwRUFBMEUsT0FBTyxRQUFRLE1BQU0sU0FBUyxrQkFBa0IsV0FBVyxPQUFPLGtDQUFrQywwQkFBMEIsVUFBVSw2R0FBNkcsb0JBQW9CLGFBQWEsb0JBQW9CLGNBQWMsK0JBQStCLGFBQWEscUNBQXFDLGtCQUFrQixTQUFTLCtDQUErQyxpQkFBaUIsUUFBUSxlQUFlLG1IQUFtSCxtREFBbUQsZ0JBQWdCLGNBQWMsMkJBQTJCLGNBQWMsNkRBQTZELGdCQUFnQixjQUFjLGVBQWUsMEJBQTBCLEVBQUUsRUFBRTtBQUM1cEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUMiLCJmaWxlIjoiODcuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBkIGFzIGNyZWF0ZUV2ZW50LCBjIGFzIGdldElvbk1vZGUsIGgsIGUgYXMgZ2V0RWxlbWVudCwgSCBhcyBIb3N0IH0gZnJvbSAnLi9jb3JlLWZlZWVmZjBkLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xudmFyIFNQTElUX1BBTkVfTUFJTiA9ICdzcGxpdC1wYW5lLW1haW4nO1xudmFyIFNQTElUX1BBTkVfU0lERSA9ICdzcGxpdC1wYW5lLXNpZGUnO1xudmFyIFFVRVJZID0ge1xuICAgICd4cyc6ICcobWluLXdpZHRoOiAwcHgpJyxcbiAgICAnc20nOiAnKG1pbi13aWR0aDogNTc2cHgpJyxcbiAgICAnbWQnOiAnKG1pbi13aWR0aDogNzY4cHgpJyxcbiAgICAnbGcnOiAnKG1pbi13aWR0aDogOTkycHgpJyxcbiAgICAneGwnOiAnKG1pbi13aWR0aDogMTIwMHB4KScsXG4gICAgJ25ldmVyJzogJydcbn07XG52YXIgU3BsaXRQYW5lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNwbGl0UGFuZShob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgc3BsaXQgcGFuZSB3aWxsIGJlIGhpZGRlbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gdGhlIHNwbGl0LXBhbmUgc2hvdWxkIGJlIHNob3duLlxuICAgICAgICAgKiBDYW4gYmUgYSBDU1MgbWVkaWEgcXVlcnkgZXhwcmVzc2lvbiwgb3IgYSBzaG9ydGN1dCBleHByZXNzaW9uLlxuICAgICAgICAgKiBDYW4gYWxzbyBiZSBhIGJvb2xlYW4gZXhwcmVzc2lvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMud2hlbiA9IFFVRVJZWydsZyddO1xuICAgICAgICB0aGlzLmlvblNwbGl0UGFuZVZpc2libGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblNwbGl0UGFuZVZpc2libGVcIiwgNyk7XG4gICAgfVxuICAgIFNwbGl0UGFuZS5wcm90b3R5cGUudmlzaWJsZUNoYW5nZWQgPSBmdW5jdGlvbiAodmlzaWJsZSkge1xuICAgICAgICB2YXIgZGV0YWlsID0geyB2aXNpYmxlOiB2aXNpYmxlLCBpc1BhbmU6IHRoaXMuaXNQYW5lLmJpbmQodGhpcykgfTtcbiAgICAgICAgdGhpcy5pb25TcGxpdFBhbmVWaXNpYmxlLmVtaXQoZGV0YWlsKTtcbiAgICB9O1xuICAgIFNwbGl0UGFuZS5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3R5bGVDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfTtcbiAgICBTcGxpdFBhbmUucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5ybUwpIHtcbiAgICAgICAgICAgIHRoaXMucm1MKCk7XG4gICAgICAgICAgICB0aGlzLnJtTCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3BsaXRQYW5lLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGVudElkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltERVBSRUNBVEVEXVtpb24tc3BsaXQtcGFuZV0gVXNpbmcgdGhlIFttYWluXSBhdHRyaWJ1dGUgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSB0aGUgXFxcImNvbnRlbnRJZFxcXCIgcHJvcGVydHkgaW5zdGVhZDpcXG5CRUZPUkU6XFxuICA8aW9uLXNwbGl0LXBhbmU+XFxuICAgIC4uLlxcbiAgICA8ZGl2IG1haW4+Li4uPC9kaXY+XFxuICA8L2lvbi1zcGxpdC1wYW5lPlxcblxcbkFGVEVSOlxcbiAgPGlvbi1zcGxpdC1wYW5lIGNvbnRlbnRJZD1cXFwibWFpbi1jb250ZW50XFxcIj5cXG4gICAgLi4uXFxuICAgIDxkaXYgaWQ9XFxcIm1haW4tY29udGVudFxcXCI+Li4uPC9kaXY+XFxuICA8L2lvbi1zcGxpdC1wYW5lPlxcblwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3BsaXRQYW5lLnByb3RvdHlwZS51cGRhdGVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucm1MKSB7XG4gICAgICAgICAgICB0aGlzLnJtTCgpO1xuICAgICAgICAgICAgdGhpcy5ybUwgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHNwbGl0LXBhbmUgaXMgZGlzYWJsZWRcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdoZW4gcXVlcnkgaXMgYSBib29sZWFuXG4gICAgICAgIHZhciBxdWVyeSA9IHRoaXMud2hlbjtcbiAgICAgICAgaWYgKHR5cGVvZiBxdWVyeSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSBxdWVyeTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBXaGVuIHF1ZXJ5IGlzIGEgc3RyaW5nLCBsZXQncyBmaW5kIGZpcnN0IGlmIGl0IGlzIGEgc2hvcnRjdXRcbiAgICAgICAgdmFyIG1lZGlhUXVlcnkgPSBRVUVSWVtxdWVyeV0gfHwgcXVlcnk7XG4gICAgICAgIC8vIE1lZGlhIHF1ZXJ5IGlzIGVtcHR5IG9yIG51bGwsIHdlIGhpZGUgaXRcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEpIHtcbiAgICAgICAgICAgIC8vIExpc3RlbiBvbiBtZWRpYSBxdWVyeVxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrXzEgPSBmdW5jdGlvbiAocSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnZpc2libGUgPSBxLm1hdGNoZXM7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG1lZGlhTGlzdF8xID0gd2luZG93Lm1hdGNoTWVkaWEobWVkaWFRdWVyeSk7XG4gICAgICAgICAgICBtZWRpYUxpc3RfMS5hZGRMaXN0ZW5lcihjYWxsYmFja18xKTtcbiAgICAgICAgICAgIHRoaXMucm1MID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbWVkaWFMaXN0XzEucmVtb3ZlTGlzdGVuZXIoY2FsbGJhY2tfMSk7IH07XG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSBtZWRpYUxpc3RfMS5tYXRjaGVzO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTcGxpdFBhbmUucHJvdG90eXBlLmlzUGFuZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQucGFyZW50RWxlbWVudCA9PT0gdGhpcy5lbFxuICAgICAgICAgICAgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoU1BMSVRfUEFORV9TSURFKTtcbiAgICB9O1xuICAgIFNwbGl0UGFuZS5wcm90b3R5cGUuc3R5bGVDaGlsZHJlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbnRlbnRJZCA9IHRoaXMuY29udGVudElkO1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmVsLmNoaWxkcmVuO1xuICAgICAgICB2YXIgbnUgPSB0aGlzLmVsLmNoaWxkRWxlbWVudENvdW50O1xuICAgICAgICB2YXIgZm91bmRNYWluID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnU7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICB2YXIgaXNNYWluID0gY29udGVudElkICE9PSB1bmRlZmluZWQgPyBjaGlsZC5pZCA9PT0gY29udGVudElkIDogY2hpbGQuaGFzQXR0cmlidXRlKCdtYWluJyk7XG4gICAgICAgICAgICBpZiAoaXNNYWluKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kTWFpbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3NwbGl0IHBhbmUgY2Fubm90IGhhdmUgbW9yZSB0aGFuIG9uZSBtYWluIG5vZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3VuZE1haW4gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0UGFuZUNsYXNzKGNoaWxkLCBpc01haW4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZm91bmRNYWluKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ3NwbGl0IHBhbmUgZG9lcyBub3QgaGF2ZSBhIHNwZWNpZmllZCBtYWluIG5vZGUnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3BsaXRQYW5lLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczogKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIC8vIFVzZWQgaW50ZXJuYWxseSBmb3Igc3R5bGluZ1xuICAgICAgICAgICAgICAgIF9hW1wic3BsaXQtcGFuZS1cIiArIG1vZGVdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYVsnc3BsaXQtcGFuZS12aXNpYmxlJ10gPSB0aGlzLnZpc2libGUsXG4gICAgICAgICAgICAgICAgX2EpIH0pKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTcGxpdFBhbmUucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3BsaXRQYW5lLCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBbXCJ2aXNpYmxlQ2hhbmdlZFwiXSxcbiAgICAgICAgICAgICAgICBcImRpc2FibGVkXCI6IFtcInVwZGF0ZVN0YXRlXCJdLFxuICAgICAgICAgICAgICAgIFwid2hlblwiOiBbXCJ1cGRhdGVTdGF0ZVwiXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNwbGl0UGFuZSwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJpb24tc3BsaXQtcGFuZXtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvdzstbXMtZmxleC13cmFwOm5vd3JhcDtmbGV4LXdyYXA6bm93cmFwO2NvbnRhaW46c3RyaWN0fS5zcGxpdC1wYW5lLXZpc2libGU+LnNwbGl0LXBhbmUtbWFpbiwuc3BsaXQtcGFuZS12aXNpYmxlPi5zcGxpdC1wYW5lLXNpZGV7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MTtmbGV4OjE7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50O2JveC1zaGFkb3c6bm9uZSFpbXBvcnRhbnQ7ei1pbmRleDowfS5zcGxpdC1wYW5lLXZpc2libGU+LnNwbGl0LXBhbmUtc2lkZTpub3QoaW9uLW1lbnUpLC5zcGxpdC1wYW5lLXZpc2libGU+aW9uLW1lbnUuc3BsaXQtcGFuZS1zaWRlLm1lbnUtZW5hYmxlZHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjB9LnNwbGl0LXBhbmUtc2lkZTpub3QoaW9uLW1lbnUpe2Rpc3BsYXk6bm9uZX0uc3BsaXQtcGFuZS12aXNpYmxlPi5zcGxpdC1wYW5lLXNpZGV7LW1zLWZsZXgtb3JkZXI6LTE7b3JkZXI6LTF9LnNwbGl0LXBhbmUtdmlzaWJsZT4uc3BsaXQtcGFuZS1zaWRlW3NpZGU9ZW5kXXstbXMtZmxleC1vcmRlcjoxO29yZGVyOjF9LnNwbGl0LXBhbmUtbWR7LS1ib3JkZXI6MXB4IHNvbGlkIHZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvcix2YXIoLS1pb24tYm9yZGVyLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCxyZ2JhKDAsMCwwLDAuMTMpKSkpfS5zcGxpdC1wYW5lLW1kLnNwbGl0LXBhbmUtdmlzaWJsZT4uc3BsaXQtcGFuZS1zaWRle21pbi13aWR0aDoyNzBweDttYXgtd2lkdGg6MjglO2JvcmRlci1yaWdodDp2YXIoLS1ib3JkZXIpO2JvcmRlci1sZWZ0OjB9LnNwbGl0LXBhbmUtbWQuc3BsaXQtcGFuZS12aXNpYmxlPi5zcGxpdC1wYW5lLXNpZGVbc2lkZT1lbmRde21pbi13aWR0aDoyNzBweDttYXgtd2lkdGg6MjglO2JvcmRlci1yaWdodDowO2JvcmRlci1sZWZ0OnZhcigtLWJvcmRlcil9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBTcGxpdFBhbmU7XG59KCkpO1xudmFyIHNldFBhbmVDbGFzcyA9IGZ1bmN0aW9uIChlbCwgaXNNYWluKSB7XG4gICAgdmFyIHRvQWRkO1xuICAgIHZhciB0b1JlbW92ZTtcbiAgICBpZiAoaXNNYWluKSB7XG4gICAgICAgIHRvQWRkID0gU1BMSVRfUEFORV9NQUlOO1xuICAgICAgICB0b1JlbW92ZSA9IFNQTElUX1BBTkVfU0lERTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRvQWRkID0gU1BMSVRfUEFORV9TSURFO1xuICAgICAgICB0b1JlbW92ZSA9IFNQTElUX1BBTkVfTUFJTjtcbiAgICB9XG4gICAgdmFyIGNsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdDtcbiAgICBjbGFzc0xpc3QuYWRkKHRvQWRkKTtcbiAgICBjbGFzc0xpc3QucmVtb3ZlKHRvUmVtb3ZlKTtcbn07XG5leHBvcnQgeyBTcGxpdFBhbmUgYXMgaW9uX3NwbGl0X3BhbmUgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=