(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/framework-delegate-c2e2e1f4.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/framework-delegate-c2e2e1f4.js ***!
  \******************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var attachComponent = function (delegate, container, component, cssClasses, componentProps) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var el;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (delegate) {
                    return [2 /*return*/, delegate.attachViewToDom(container, component, componentProps, cssClasses)];
                }
                if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
                    throw new Error('framework delegate is missing');
                }
                el = (typeof component === 'string')
                    ? container.ownerDocument && container.ownerDocument.createElement(component)
                    : component;
                if (cssClasses) {
                    cssClasses.forEach(function (c) { return el.classList.add(c); });
                }
                if (componentProps) {
                    Object.assign(el, componentProps);
                }
                container.appendChild(el);
                if (!el.componentOnReady) return [3 /*break*/, 2];
                return [4 /*yield*/, el.componentOnReady()];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/, el];
        }
    });
}); };
var detachComponent = function (delegate, element) {
    if (element) {
        if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-tab_2.entry.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-tab_2.entry.js ***!
  \******************************************************************/
/*! exports provided: ion_tab, ion_tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_tab", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_tabs", function() { return Tabs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./framework-delegate-c2e2e1f4.js */ "./node_modules/@ionic/core/dist/esm-es5/framework-delegate-c2e2e1f4.js");




var Tab = /** @class */ (function () {
    function class_1(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.loaded = false;
        /** @internal */
        this.active = false;
    }
    class_1.prototype.componentWillLoad = function () {
    };
    /** Set the active component for the tab */
    class_1.prototype.setActive = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prepareLazyLoaded()];
                    case 1:
                        _a.sent();
                        this.active = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.prepareLazyLoaded = function () {
        if (!this.loaded && this.component != null) {
            this.loaded = true;
            try {
                return Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_3__["a"])(this.delegate, this.el, this.component, ['ion-page']);
            }
            catch (e) {
                console.error(e);
            }
        }
        return Promise.resolve(undefined);
    };
    class_1.prototype.render = function () {
        var _a = this, tab = _a.tab, active = _a.active, component = _a.component;
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { role: "tabpanel", "aria-hidden": !active ? 'true' : null, "aria-labelledby": "tab-button-" + tab, class: {
                'ion-page': component === undefined,
                'tab-hidden': !active
            } }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host(.tab-hidden){display:none!important}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var Tabs = /** @class */ (function () {
    function class_2(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.transitioning = false;
        /** @internal */
        this.useRouter = false;
        this.onTabClicked = function (ev) {
            var _a = ev.detail, href = _a.href, tab = _a.tab;
            if (_this.useRouter && href !== undefined) {
                var router = document.querySelector('ion-router');
                if (router) {
                    router.push(href);
                }
            }
            else {
                _this.select(tab);
            }
        };
        this.ionNavWillLoad = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionNavWillLoad", 7);
        this.ionTabsWillChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionTabsWillChange", 3);
        this.ionTabsDidChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionTabsDidChange", 3);
    }
    class_2.prototype.componentWillLoad = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var tabs;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.useRouter) {
                            this.useRouter = !!document.querySelector('ion-router') && !this.el.closest('[no-router]');
                        }
                        if (!!this.useRouter) return [3 /*break*/, 2];
                        tabs = this.tabs;
                        return [4 /*yield*/, this.select(tabs[0])];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.ionNavWillLoad.emit();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.componentWillRender = function () {
        var tabBar = this.el.querySelector('ion-tab-bar');
        if (tabBar) {
            var tab = this.selectedTab ? this.selectedTab.tab : undefined;
            tabBar.selectedTab = tab;
        }
    };
    /**
     * Select a tab by the value of its `tab` property or an element reference.
     *
     * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
     */
    class_2.prototype.select = function (tab) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var selectedTab;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectedTab = getTab(this.tabs, tab);
                        if (!this.shouldSwitch(selectedTab)) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.setActive(selectedTab)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.notifyRouter()];
                    case 2:
                        _a.sent();
                        this.tabSwitch();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * Get a specific tab by the value of its `tab` property or an element reference.
     *
     * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
     */
    class_2.prototype.getTab = function (tab) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, getTab(this.tabs, tab)];
            });
        });
    };
    /**
     * Get the currently selected tab.
     */
    class_2.prototype.getSelected = function () {
        return Promise.resolve(this.selectedTab ? this.selectedTab.tab : undefined);
    };
    /** @internal */
    class_2.prototype.setRouteId = function (id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var selectedTab;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectedTab = getTab(this.tabs, id);
                        if (!this.shouldSwitch(selectedTab)) {
                            return [2 /*return*/, { changed: false, element: this.selectedTab }];
                        }
                        return [4 /*yield*/, this.setActive(selectedTab)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, {
                                changed: true,
                                element: this.selectedTab,
                                markVisible: function () { return _this.tabSwitch(); },
                            }];
                }
            });
        });
    };
    /** @internal */
    class_2.prototype.getRouteId = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var tabId;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                tabId = this.selectedTab && this.selectedTab.tab;
                return [2 /*return*/, tabId !== undefined ? { id: tabId, element: this.selectedTab } : undefined];
            });
        });
    };
    class_2.prototype.setActive = function (selectedTab) {
        if (this.transitioning) {
            return Promise.reject('transitioning already happening');
        }
        this.transitioning = true;
        this.leavingTab = this.selectedTab;
        this.selectedTab = selectedTab;
        this.ionTabsWillChange.emit({ tab: selectedTab.tab });
        return selectedTab.setActive();
    };
    class_2.prototype.tabSwitch = function () {
        var selectedTab = this.selectedTab;
        var leavingTab = this.leavingTab;
        this.leavingTab = undefined;
        this.transitioning = false;
        if (!selectedTab) {
            return;
        }
        if (leavingTab !== selectedTab) {
            if (leavingTab) {
                leavingTab.active = false;
            }
            this.ionTabsDidChange.emit({ tab: selectedTab.tab });
        }
    };
    class_2.prototype.notifyRouter = function () {
        if (this.useRouter) {
            var router = document.querySelector('ion-router');
            if (router) {
                return router.navChanged('forward');
            }
        }
        return Promise.resolve(false);
    };
    class_2.prototype.shouldSwitch = function (selectedTab) {
        var leavingTab = this.selectedTab;
        return selectedTab !== undefined && selectedTab !== leavingTab && !this.transitioning;
    };
    Object.defineProperty(class_2.prototype, "tabs", {
        get: function () {
            return Array.from(this.el.querySelectorAll('ion-tab'));
        },
        enumerable: true,
        configurable: true
    });
    class_2.prototype.render = function () {
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onIonTabButtonClick: this.onTabClicked }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", { name: "top" }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "tabs-inner" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", { name: "bottom" })));
    };
    Object.defineProperty(class_2.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "style", {
        get: function () { return ":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;z-index:0}.tabs-inner,:host{contain:layout size style}.tabs-inner{position:relative;-ms-flex:1;flex:1}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
var getTab = function (tabs, tab) {
    var tabEl = (typeof tab === 'string')
        ? tabs.find(function (t) { return t.tab === tab; })
        : tab;
    if (!tabEl) {
        console.error("tab with id: \"" + tabEl + "\" does not exist");
    }
    return tabEl;
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2ZyYW1ld29yay1kZWxlZ2F0ZS1jMmUyZTFmNC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi10YWJfMi5lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDL0MsNkZBQTZGLFFBQVEsdURBQVM7QUFDOUc7QUFDQSxXQUFXLHlEQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCw0QkFBNEIsRUFBRTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0Q7Ozs7Ozs7Ozs7Ozs7QUN6Q3REO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQzZEO0FBQzlFO0FBQzBDO0FBQ3hFO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1REFBUztBQUN4QixtQkFBbUIseURBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUVBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRztBQUN6QjtBQUNBO0FBQ0EsYUFBYSxFQUFFLEVBQUUs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ZSI6IjMwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbnZhciBhdHRhY2hDb21wb25lbnQgPSBmdW5jdGlvbiAoZGVsZWdhdGUsIGNvbnRhaW5lciwgY29tcG9uZW50LCBjc3NDbGFzc2VzLCBjb21wb25lbnRQcm9wcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWw7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBkZWxlZ2F0ZS5hdHRhY2hWaWV3VG9Eb20oY29udGFpbmVyLCBjb21wb25lbnQsIGNvbXBvbmVudFByb3BzLCBjc3NDbGFzc2VzKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50ICE9PSAnc3RyaW5nJyAmJiAhKGNvbXBvbmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZyYW1ld29yayBkZWxlZ2F0ZSBpcyBtaXNzaW5nJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsID0gKHR5cGVvZiBjb21wb25lbnQgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgICAgICA/IGNvbnRhaW5lci5vd25lckRvY3VtZW50ICYmIGNvbnRhaW5lci5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50KVxuICAgICAgICAgICAgICAgICAgICA6IGNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICBpZiAoY3NzQ2xhc3Nlcykge1xuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGVsLmNsYXNzTGlzdC5hZGQoYyk7IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihlbCwgY29tcG9uZW50UHJvcHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICAgICAgICAgIGlmICghZWwuY29tcG9uZW50T25SZWFkeSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZWwuY29tcG9uZW50T25SZWFkeSgpXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qLywgZWxdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbnZhciBkZXRhY2hDb21wb25lbnQgPSBmdW5jdGlvbiAoZGVsZWdhdGUsIGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUucmVtb3ZlVmlld0Zyb21Eb20oY29udGFpbmVyLCBlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG59O1xuZXhwb3J0IHsgYXR0YWNoQ29tcG9uZW50IGFzIGEsIGRldGFjaENvbXBvbmVudCBhcyBkIH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGgsIEggYXMgSG9zdCwgZSBhcyBnZXRFbGVtZW50LCBkIGFzIGNyZWF0ZUV2ZW50IH0gZnJvbSAnLi9jb3JlLWZlZWVmZjBkLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgYSBhcyBhdHRhY2hDb21wb25lbnQgfSBmcm9tICcuL2ZyYW1ld29yay1kZWxlZ2F0ZS1jMmUyZTFmNC5qcyc7XG52YXIgVGFiID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzEoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbXBvbmVudFdpbGxMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgLyoqIFNldCB0aGUgYWN0aXZlIGNvbXBvbmVudCBmb3IgdGhlIHRhYiAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnNldEFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnByZXBhcmVMYXp5TG9hZGVkKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUucHJlcGFyZUxhenlMb2FkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5sb2FkZWQgJiYgdGhpcy5jb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0YWNoQ29tcG9uZW50KHRoaXMuZGVsZWdhdGUsIHRoaXMuZWwsIHRoaXMuY29tcG9uZW50LCBbJ2lvbi1wYWdlJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcywgdGFiID0gX2EudGFiLCBhY3RpdmUgPSBfYS5hY3RpdmUsIGNvbXBvbmVudCA9IF9hLmNvbXBvbmVudDtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgcm9sZTogXCJ0YWJwYW5lbFwiLCBcImFyaWEtaGlkZGVuXCI6ICFhY3RpdmUgPyAndHJ1ZScgOiBudWxsLCBcImFyaWEtbGFiZWxsZWRieVwiOiBcInRhYi1idXR0b24tXCIgKyB0YWIsIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgJ2lvbi1wYWdlJzogY29tcG9uZW50ID09PSB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgJ3RhYi1oaWRkZW4nOiAhYWN0aXZlXG4gICAgICAgICAgICB9IH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMS5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIjpob3N0KC50YWItaGlkZGVuKXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NfMTtcbn0oKSk7XG52YXIgVGFicyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18yKGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy51c2VSb3V0ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vblRhYkNsaWNrZWQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IGV2LmRldGFpbCwgaHJlZiA9IF9hLmhyZWYsIHRhYiA9IF9hLnRhYjtcbiAgICAgICAgICAgIGlmIChfdGhpcy51c2VSb3V0ZXIgJiYgaHJlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcbiAgICAgICAgICAgICAgICBpZiAocm91dGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGhyZWYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLnNlbGVjdCh0YWIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlvbk5hdldpbGxMb2FkID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25OYXZXaWxsTG9hZFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25UYWJzV2lsbENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uVGFic1dpbGxDaGFuZ2VcIiwgMyk7XG4gICAgICAgIHRoaXMuaW9uVGFic0RpZENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uVGFic0RpZENoYW5nZVwiLCAzKTtcbiAgICB9XG4gICAgY2xhc3NfMi5wcm90b3R5cGUuY29tcG9uZW50V2lsbExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0YWJzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVzZVJvdXRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlUm91dGVyID0gISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJykgJiYgIXRoaXMuZWwuY2xvc2VzdCgnW25vLXJvdXRlcl0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIXRoaXMudXNlUm91dGVyKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYnMgPSB0aGlzLnRhYnM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnNlbGVjdCh0YWJzWzBdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pb25OYXZXaWxsTG9hZC5lbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMi5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRhYkJhciA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignaW9uLXRhYi1iYXInKTtcbiAgICAgICAgaWYgKHRhYkJhcikge1xuICAgICAgICAgICAgdmFyIHRhYiA9IHRoaXMuc2VsZWN0ZWRUYWIgPyB0aGlzLnNlbGVjdGVkVGFiLnRhYiA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRhYkJhci5zZWxlY3RlZFRhYiA9IHRhYjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2VsZWN0IGEgdGFiIGJ5IHRoZSB2YWx1ZSBvZiBpdHMgYHRhYmAgcHJvcGVydHkgb3IgYW4gZWxlbWVudCByZWZlcmVuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGFiIFRoZSB0YWIgaW5zdGFuY2UgdG8gc2VsZWN0LiBJZiBwYXNzZWQgYSBzdHJpbmcsIGl0IHNob3VsZCBiZSB0aGUgdmFsdWUgb2YgdGhlIHRhYidzIGB0YWJgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGNsYXNzXzIucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uICh0YWIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkVGFiO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUYWIgPSBnZXRUYWIodGhpcy50YWJzLCB0YWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNob3VsZFN3aXRjaChzZWxlY3RlZFRhYikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zZXRBY3RpdmUoc2VsZWN0ZWRUYWIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5ub3RpZnlSb3V0ZXIoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFiU3dpdGNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdHJ1ZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGEgc3BlY2lmaWMgdGFiIGJ5IHRoZSB2YWx1ZSBvZiBpdHMgYHRhYmAgcHJvcGVydHkgb3IgYW4gZWxlbWVudCByZWZlcmVuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGFiIFRoZSB0YWIgaW5zdGFuY2UgdG8gc2VsZWN0LiBJZiBwYXNzZWQgYSBzdHJpbmcsIGl0IHNob3VsZCBiZSB0aGUgdmFsdWUgb2YgdGhlIHRhYidzIGB0YWJgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGNsYXNzXzIucHJvdG90eXBlLmdldFRhYiA9IGZ1bmN0aW9uICh0YWIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBnZXRUYWIodGhpcy50YWJzLCB0YWIpXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRhYi5cbiAgICAgKi9cbiAgICBjbGFzc18yLnByb3RvdHlwZS5nZXRTZWxlY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNlbGVjdGVkVGFiID8gdGhpcy5zZWxlY3RlZFRhYi50YWIgOiB1bmRlZmluZWQpO1xuICAgIH07XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGNsYXNzXzIucHJvdG90eXBlLnNldFJvdXRlSWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkVGFiO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGFiID0gZ2V0VGFiKHRoaXMudGFicywgaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNob3VsZFN3aXRjaChzZWxlY3RlZFRhYikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgeyBjaGFuZ2VkOiBmYWxzZSwgZWxlbWVudDogdGhpcy5zZWxlY3RlZFRhYiB9XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc2V0QWN0aXZlKHNlbGVjdGVkVGFiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuc2VsZWN0ZWRUYWIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtWaXNpYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy50YWJTd2l0Y2goKTsgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgY2xhc3NfMi5wcm90b3R5cGUuZ2V0Um91dGVJZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRhYklkO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHRhYklkID0gdGhpcy5zZWxlY3RlZFRhYiAmJiB0aGlzLnNlbGVjdGVkVGFiLnRhYjtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGFiSWQgIT09IHVuZGVmaW5lZCA/IHsgaWQ6IHRhYklkLCBlbGVtZW50OiB0aGlzLnNlbGVjdGVkVGFiIH0gOiB1bmRlZmluZWRdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMi5wcm90b3R5cGUuc2V0QWN0aXZlID0gZnVuY3Rpb24gKHNlbGVjdGVkVGFiKSB7XG4gICAgICAgIGlmICh0aGlzLnRyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgndHJhbnNpdGlvbmluZyBhbHJlYWR5IGhhcHBlbmluZycpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMubGVhdmluZ1RhYiA9IHRoaXMuc2VsZWN0ZWRUYWI7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSBzZWxlY3RlZFRhYjtcbiAgICAgICAgdGhpcy5pb25UYWJzV2lsbENoYW5nZS5lbWl0KHsgdGFiOiBzZWxlY3RlZFRhYi50YWIgfSk7XG4gICAgICAgIHJldHVybiBzZWxlY3RlZFRhYi5zZXRBY3RpdmUoKTtcbiAgICB9O1xuICAgIGNsYXNzXzIucHJvdG90eXBlLnRhYlN3aXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkVGFiID0gdGhpcy5zZWxlY3RlZFRhYjtcbiAgICAgICAgdmFyIGxlYXZpbmdUYWIgPSB0aGlzLmxlYXZpbmdUYWI7XG4gICAgICAgIHRoaXMubGVhdmluZ1RhYiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICghc2VsZWN0ZWRUYWIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVhdmluZ1RhYiAhPT0gc2VsZWN0ZWRUYWIpIHtcbiAgICAgICAgICAgIGlmIChsZWF2aW5nVGFiKSB7XG4gICAgICAgICAgICAgICAgbGVhdmluZ1RhYi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW9uVGFic0RpZENoYW5nZS5lbWl0KHsgdGFiOiBzZWxlY3RlZFRhYi50YWIgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNsYXNzXzIucHJvdG90eXBlLm5vdGlmeVJvdXRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlUm91dGVyKSB7XG4gICAgICAgICAgICB2YXIgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgICAgICAgaWYgKHJvdXRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZXIubmF2Q2hhbmdlZCgnZm9yd2FyZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgIH07XG4gICAgY2xhc3NfMi5wcm90b3R5cGUuc2hvdWxkU3dpdGNoID0gZnVuY3Rpb24gKHNlbGVjdGVkVGFiKSB7XG4gICAgICAgIHZhciBsZWF2aW5nVGFiID0gdGhpcy5zZWxlY3RlZFRhYjtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkVGFiICE9PSB1bmRlZmluZWQgJiYgc2VsZWN0ZWRUYWIgIT09IGxlYXZpbmdUYWIgJiYgIXRoaXMudHJhbnNpdGlvbmluZztcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18yLnByb3RvdHlwZSwgXCJ0YWJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi10YWInKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIGNsYXNzXzIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25Jb25UYWJCdXR0b25DbGljazogdGhpcy5vblRhYkNsaWNrZWQgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBcInRvcFwiIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidGFicy1pbm5lclwiIH0sIGgoXCJzbG90XCIsIG51bGwpKSwgaChcInNsb3RcIiwgeyBuYW1lOiBcImJvdHRvbVwiIH0pKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMi5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18yLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIjpob3N0e2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ei1pbmRleDowfS50YWJzLWlubmVyLDpob3N0e2NvbnRhaW46bGF5b3V0IHNpemUgc3R5bGV9LnRhYnMtaW5uZXJ7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MTtmbGV4OjF9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18yO1xufSgpKTtcbnZhciBnZXRUYWIgPSBmdW5jdGlvbiAodGFicywgdGFiKSB7XG4gICAgdmFyIHRhYkVsID0gKHR5cGVvZiB0YWIgPT09ICdzdHJpbmcnKVxuICAgICAgICA/IHRhYnMuZmluZChmdW5jdGlvbiAodCkgeyByZXR1cm4gdC50YWIgPT09IHRhYjsgfSlcbiAgICAgICAgOiB0YWI7XG4gICAgaWYgKCF0YWJFbCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwidGFiIHdpdGggaWQ6IFxcXCJcIiArIHRhYkVsICsgXCJcXFwiIGRvZXMgbm90IGV4aXN0XCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGFiRWw7XG59O1xuZXhwb3J0IHsgVGFiIGFzIGlvbl90YWIsIFRhYnMgYXMgaW9uX3RhYnMgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=