(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-spinner.entry.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-spinner.entry.js ***!
  \********************************************************************/
/*! exports provided: ion_spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_spinner", function() { return Spinner; });
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");



var spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function (dur, index, total) {
            var animationDelay = (dur * index / total) - dur + "ms";
            var angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': 9 * Math.sin(angle) + "px",
                    'left': 9 * Math.cos(angle) + "px",
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: function (dur, index, total) {
            var step = index / total;
            var animationDelay = (dur * step) - dur + "ms";
            var angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': 9 * Math.sin(angle) + "px",
                    'left': 9 * Math.cos(angle) + "px",
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function () {
            return {
                r: 20,
                cx: 44,
                cy: 44,
                fill: 'none',
                viewBox: '22 22 44 44',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: function () {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: function (_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': 9 - (9 * index) + "px",
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: function (dur, index, total) {
            var transform = "rotate(" + (30 * index + (index < 6 ? 180 : -180)) + "deg)";
            var animationDelay = (dur * index / total) - dur + "ms";
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function (dur, index, total) {
            var transform = "rotate(" + (30 * index + (index < 6 ? 180 : -180)) + "deg)";
            var animationDelay = (dur * index / total) - dur + "ms";
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
var SPINNERS = spinners;
var Spinner = /** @class */ (function () {
    function Spinner(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * If `true`, the spinner's animation will be paused.
         */
        this.paused = false;
    }
    Spinner.prototype.getName = function () {
        var spinnerName = this.name || _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('spinner');
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        if (spinnerName) {
            return spinnerName;
        }
        return (mode === 'ios') ? 'lines' : 'circular';
    };
    Spinner.prototype.render = function () {
        var _a;
        var self = this;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(self);
        var spinnerName = self.getName();
        var spinner = SPINNERS[spinnerName] || SPINNERS['lines'];
        var duration = (typeof self.duration === 'number' && self.duration > 10 ? self.duration : spinner.dur);
        var svgs = [];
        if (spinner.circles !== undefined) {
            for (var i = 0; i < spinner.circles; i++) {
                svgs.push(buildCircle(spinner, duration, i, spinner.circles));
            }
        }
        else if (spinner.lines !== undefined) {
            for (var i = 0; i < spinner.lines; i++) {
                svgs.push(buildLine(spinner, duration, i, spinner.lines));
            }
        }
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(self.color)), (_a = {}, _a[mode] = true, _a["spinner-" + spinnerName] = true, _a['spinner-paused'] = !!self.paused || _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('_testing'), _a)), role: "progressbar", style: spinner.elmDuration ? { animationDuration: duration + 'ms' } : {} }, svgs));
    };
    Object.defineProperty(Spinner, "style", {
        get: function () { return ":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg,[dir=rtl] svg{left:unset;right:unset;right:0;-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular){-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px,200px;stroke-dashoffset:0px;stroke-width:3.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) circle,:host(.spinner-paused) svg{-webkit-animation-play-state:paused;animation-play-state:paused}\@-webkit-keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}\@keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}\@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}\@keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}\@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}\@keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}\@-webkit-keyframes spinner-circular{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes spinner-circular{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px}to{stroke-dasharray:100px,200px;stroke-dashoffset:-125px}}\@keyframes spinner-circular-inner{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px}to{stroke-dasharray:100px,200px;stroke-dashoffset:-125px}}"; },
        enumerable: true,
        configurable: true
    });
    return Spinner;
}());
var buildCircle = function (spinner, duration, index, total) {
    var data = spinner.fn(duration, index, total);
    data.style['animation-duration'] = duration + 'ms';
    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { viewBox: data.viewBox || '0 0 64 64', style: data.style }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("circle", { transform: data.transform || 'translate(32,32)', cx: data.cx, cy: data.cy, r: data.r, style: spinner.elmDuration ? { animationDuration: duration + 'ms' } : {} })));
};
var buildLine = function (spinner, duration, index, total) {
    var data = spinner.fn(duration, index, total);
    data.style['animation-duration'] = duration + 'ms';
    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { viewBox: data.viewBox || '0 0 64 64', style: data.style }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("line", { transform: "translate(32,32)", y1: data.y1, y2: data.y2 })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1zcGlubmVyLmVudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEY7QUFDdkM7QUFDVztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFEQUFNO0FBQzdDLG1CQUFtQiwyREFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLHNDQUFzQyxFQUFFLDREQUFrQix1QkFBdUIsZ0dBQWdHLHFEQUFNLGtGQUFrRixxQ0FBcUMsS0FBSyxFQUFFO0FBQzlVO0FBQ0E7QUFDQSwwQkFBMEIsZUFBZSxxQkFBcUIsa0JBQWtCLFdBQVcsWUFBWSxtQkFBbUIseUJBQXlCLHNCQUFzQixxQkFBcUIsaUJBQWlCLGtCQUFrQiw0QkFBNEIsSUFBSSxPQUFPLE1BQU0sZ0NBQWdDLHdCQUF3QixrQkFBa0IsV0FBVyxZQUFZLGdDQUFnQyx3QkFBd0IsMkNBQTJDLFdBQVcsWUFBWSxRQUFRLDZDQUE2QyxxQ0FBcUMsNERBQTRELGlCQUFpQixxQkFBcUIsb0JBQW9CLDBEQUEwRCxzREFBc0QsOENBQThDLDRCQUE0Qix1REFBdUQsK0NBQStDLGtCQUFrQiw0QkFBNEIsc0RBQXNELDhDQUE4QyxrQkFBa0IsZ0NBQWdDLGlCQUFpQixpQkFBaUIsdUJBQXVCLHVCQUF1QixvQkFBb0IsNkJBQTZCLG9EQUFvRCw0Q0FBNEMsNEJBQTRCLGVBQWUsa0JBQWtCLHlCQUF5QixrREFBa0QsMENBQTBDLHlCQUF5QixtREFBbUQsMkNBQTJDLGdDQUFnQyw4REFBOEQsc0RBQXNELG9CQUFvQiw0QkFBNEIsc0JBQXNCLGlCQUFpQixVQUFVLGdGQUFnRixvQ0FBb0MsNEJBQTRCLHFDQUFxQyxHQUFHLFVBQVUsR0FBRyxXQUFXLDZCQUE2QixHQUFHLFVBQVUsR0FBRyxXQUFXLHNDQUFzQyxHQUFHLDJCQUEyQixtQkFBbUIsR0FBRywyQkFBMkIsb0JBQW9CLDhCQUE4QixHQUFHLDJCQUEyQixtQkFBbUIsR0FBRywyQkFBMkIsb0JBQW9CLG1DQUFtQyxHQUFHLCtCQUErQix1QkFBdUIsR0FBRyxnQ0FBZ0MseUJBQXlCLDJCQUEyQixHQUFHLCtCQUErQix1QkFBdUIsR0FBRyxnQ0FBZ0MseUJBQXlCLGlDQUFpQyxHQUFHLDJCQUEyQixtQkFBbUIsV0FBVyxJQUFJLDRCQUE0QixvQkFBb0IsV0FBVyxHQUFHLDJCQUEyQixtQkFBbUIsWUFBWSx5QkFBeUIsR0FBRywyQkFBMkIsbUJBQW1CLFdBQVcsSUFBSSw0QkFBNEIsb0JBQW9CLFdBQVcsR0FBRywyQkFBMkIsbUJBQW1CLFlBQVkscUNBQXFDLEdBQUcsZ0NBQWdDLHlCQUF5Qiw2QkFBNkIsR0FBRyxnQ0FBZ0MseUJBQXlCLDJDQUEyQyxHQUFHLDJCQUEyQixzQkFBc0IsSUFBSSw2QkFBNkIsd0JBQXdCLEdBQUcsNkJBQTZCLDBCQUEwQixtQ0FBbUMsR0FBRywyQkFBMkIsc0JBQXNCLElBQUksNkJBQTZCLHdCQUF3QixHQUFHLDZCQUE2QiwwQkFBMEIsRUFBRSxFQUFFO0FBQzF0SDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkRBQUMsU0FBUywwREFBMEQsRUFBRSwyREFBQyxZQUFZLHFIQUFxSCxxQ0FBcUMsS0FBSyxFQUFFO0FBQ2hRO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBQyxTQUFTLDBEQUEwRCxFQUFFLDJEQUFDLFVBQVUsMERBQTBEO0FBQ3ZKO0FBQ2tDOzs7Ozs7Ozs7Ozs7O0FDcEtsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0JBQWtCLEVBQUU7QUFDdEQsK0JBQStCLGlCQUFpQixFQUFFO0FBQ2xELGtDQUFrQyxpQkFBaUIsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHNCQUFzQixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxRQUFRLHVEQUFTO0FBQzlEO0FBQ0EsV0FBVyx5REFBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDa0YiLCJmaWxlIjoiNzEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGdldElvbk1vZGUsIGgsIEggYXMgSG9zdCB9IGZyb20gJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgeyBiIGFzIGNvbmZpZyB9IGZyb20gJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG52YXIgc3Bpbm5lcnMgPSB7XG4gICAgJ2J1YmJsZXMnOiB7XG4gICAgICAgIGR1cjogMTAwMCxcbiAgICAgICAgY2lyY2xlczogOSxcbiAgICAgICAgZm46IGZ1bmN0aW9uIChkdXIsIGluZGV4LCB0b3RhbCkge1xuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbkRlbGF5ID0gKGR1ciAqIGluZGV4IC8gdG90YWwpIC0gZHVyICsgXCJtc1wiO1xuICAgICAgICAgICAgdmFyIGFuZ2xlID0gMiAqIE1hdGguUEkgKiBpbmRleCAvIHRvdGFsO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByOiA1LFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiA5ICogTWF0aC5zaW4oYW5nbGUpICsgXCJweFwiLFxuICAgICAgICAgICAgICAgICAgICAnbGVmdCc6IDkgKiBNYXRoLmNvcyhhbmdsZSkgKyBcInB4XCIsXG4gICAgICAgICAgICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSxcbiAgICAnY2lyY2xlcyc6IHtcbiAgICAgICAgZHVyOiAxMDAwLFxuICAgICAgICBjaXJjbGVzOiA4LFxuICAgICAgICBmbjogZnVuY3Rpb24gKGR1ciwgaW5kZXgsIHRvdGFsKSB7XG4gICAgICAgICAgICB2YXIgc3RlcCA9IGluZGV4IC8gdG90YWw7XG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uRGVsYXkgPSAoZHVyICogc3RlcCkgLSBkdXIgKyBcIm1zXCI7XG4gICAgICAgICAgICB2YXIgYW5nbGUgPSAyICogTWF0aC5QSSAqIHN0ZXA7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHI6IDUsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgJ3RvcCc6IDkgKiBNYXRoLnNpbihhbmdsZSkgKyBcInB4XCIsXG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JzogOSAqIE1hdGguY29zKGFuZ2xlKSArIFwicHhcIixcbiAgICAgICAgICAgICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LFxuICAgICdjaXJjdWxhcic6IHtcbiAgICAgICAgZHVyOiAxNDAwLFxuICAgICAgICBlbG1EdXJhdGlvbjogdHJ1ZSxcbiAgICAgICAgY2lyY2xlczogMSxcbiAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcjogMjAsXG4gICAgICAgICAgICAgICAgY3g6IDQ0LFxuICAgICAgICAgICAgICAgIGN5OiA0NCxcbiAgICAgICAgICAgICAgICBmaWxsOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgdmlld0JveDogJzIyIDIyIDQ0IDQ0JyxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwwKScsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHt9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSxcbiAgICAnY3Jlc2NlbnQnOiB7XG4gICAgICAgIGR1cjogNzUwLFxuICAgICAgICBjaXJjbGVzOiAxLFxuICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByOiAyNixcbiAgICAgICAgICAgICAgICBzdHlsZToge31cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LFxuICAgICdkb3RzJzoge1xuICAgICAgICBkdXI6IDc1MCxcbiAgICAgICAgY2lyY2xlczogMyxcbiAgICAgICAgZm46IGZ1bmN0aW9uIChfLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbkRlbGF5ID0gLSgxMTAgKiBpbmRleCkgKyAnbXMnO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByOiA2LFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JzogOSAtICg5ICogaW5kZXgpICsgXCJweFwiLFxuICAgICAgICAgICAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ2xpbmVzJzoge1xuICAgICAgICBkdXI6IDEwMDAsXG4gICAgICAgIGxpbmVzOiAxMixcbiAgICAgICAgZm46IGZ1bmN0aW9uIChkdXIsIGluZGV4LCB0b3RhbCkge1xuICAgICAgICAgICAgdmFyIHRyYW5zZm9ybSA9IFwicm90YXRlKFwiICsgKDMwICogaW5kZXggKyAoaW5kZXggPCA2ID8gMTgwIDogLTE4MCkpICsgXCJkZWcpXCI7XG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uRGVsYXkgPSAoZHVyICogaW5kZXggLyB0b3RhbCkgLSBkdXIgKyBcIm1zXCI7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHkxOiAxNyxcbiAgICAgICAgICAgICAgICB5MjogMjksXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IHRyYW5zZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LFxuICAgICdsaW5lcy1zbWFsbCc6IHtcbiAgICAgICAgZHVyOiAxMDAwLFxuICAgICAgICBsaW5lczogMTIsXG4gICAgICAgIGZuOiBmdW5jdGlvbiAoZHVyLCBpbmRleCwgdG90YWwpIHtcbiAgICAgICAgICAgIHZhciB0cmFuc2Zvcm0gPSBcInJvdGF0ZShcIiArICgzMCAqIGluZGV4ICsgKGluZGV4IDwgNiA/IDE4MCA6IC0xODApKSArIFwiZGVnKVwiO1xuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbkRlbGF5ID0gKGR1ciAqIGluZGV4IC8gdG90YWwpIC0gZHVyICsgXCJtc1wiO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB5MTogMTIsXG4gICAgICAgICAgICAgICAgeTI6IDIwLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufTtcbnZhciBTUElOTkVSUyA9IHNwaW5uZXJzO1xudmFyIFNwaW5uZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3Bpbm5lcihob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBzcGlubmVyJ3MgYW5pbWF0aW9uIHdpbGwgYmUgcGF1c2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgU3Bpbm5lci5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNwaW5uZXJOYW1lID0gdGhpcy5uYW1lIHx8IGNvbmZpZy5nZXQoJ3NwaW5uZXInKTtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICBpZiAoc3Bpbm5lck5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzcGlubmVyTmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG1vZGUgPT09ICdpb3MnKSA/ICdsaW5lcycgOiAnY2lyY3VsYXInO1xuICAgIH07XG4gICAgU3Bpbm5lci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHNlbGYpO1xuICAgICAgICB2YXIgc3Bpbm5lck5hbWUgPSBzZWxmLmdldE5hbWUoKTtcbiAgICAgICAgdmFyIHNwaW5uZXIgPSBTUElOTkVSU1tzcGlubmVyTmFtZV0gfHwgU1BJTk5FUlNbJ2xpbmVzJ107XG4gICAgICAgIHZhciBkdXJhdGlvbiA9ICh0eXBlb2Ygc2VsZi5kdXJhdGlvbiA9PT0gJ251bWJlcicgJiYgc2VsZi5kdXJhdGlvbiA+IDEwID8gc2VsZi5kdXJhdGlvbiA6IHNwaW5uZXIuZHVyKTtcbiAgICAgICAgdmFyIHN2Z3MgPSBbXTtcbiAgICAgICAgaWYgKHNwaW5uZXIuY2lyY2xlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwaW5uZXIuY2lyY2xlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3Zncy5wdXNoKGJ1aWxkQ2lyY2xlKHNwaW5uZXIsIGR1cmF0aW9uLCBpLCBzcGlubmVyLmNpcmNsZXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzcGlubmVyLmxpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3Bpbm5lci5saW5lczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3Zncy5wdXNoKGJ1aWxkTGluZShzcGlubmVyLCBkdXJhdGlvbiwgaSwgc3Bpbm5lci5saW5lcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNyZWF0ZUNvbG9yQ2xhc3NlcyhzZWxmLmNvbG9yKSksIChfYSA9IHt9LCBfYVttb2RlXSA9IHRydWUsIF9hW1wic3Bpbm5lci1cIiArIHNwaW5uZXJOYW1lXSA9IHRydWUsIF9hWydzcGlubmVyLXBhdXNlZCddID0gISFzZWxmLnBhdXNlZCB8fCBjb25maWcuZ2V0Qm9vbGVhbignX3Rlc3RpbmcnKSwgX2EpKSwgcm9sZTogXCJwcm9ncmVzc2JhclwiLCBzdHlsZTogc3Bpbm5lci5lbG1EdXJhdGlvbiA/IHsgYW5pbWF0aW9uRHVyYXRpb246IGR1cmF0aW9uICsgJ21zJyB9IDoge30gfSwgc3ZncykpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNwaW5uZXIsIFwic3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiOmhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MjhweDtoZWlnaHQ6MjhweDtjb2xvcjp2YXIoLS1jb2xvcik7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfTpob3N0KC5pb24tY29sb3Ipe2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX1zdmd7bGVmdDowO3RvcDowOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBzdmcsW2Rpcj1ydGxdIHN2Z3tsZWZ0OnVuc2V0O3JpZ2h0OnVuc2V0O3JpZ2h0OjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcik7dHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBjZW50ZXIpfTpob3N0KC5zcGlubmVyLWxpbmVzKSBsaW5lLDpob3N0KC5zcGlubmVyLWxpbmVzLXNtYWxsKSBsaW5le3N0cm9rZS13aWR0aDo0cHg7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlOmN1cnJlbnRDb2xvcn06aG9zdCguc3Bpbm5lci1saW5lcykgc3ZnLDpob3N0KC5zcGlubmVyLWxpbmVzLXNtYWxsKSBzdmd7LXdlYmtpdC1hbmltYXRpb246c3Bpbm5lci1mYWRlLW91dCAxcyBsaW5lYXIgaW5maW5pdGU7YW5pbWF0aW9uOnNwaW5uZXItZmFkZS1vdXQgMXMgbGluZWFyIGluZmluaXRlfTpob3N0KC5zcGlubmVyLWJ1YmJsZXMpIHN2Z3std2Via2l0LWFuaW1hdGlvbjpzcGlubmVyLXNjYWxlLW91dCAxcyBsaW5lYXIgaW5maW5pdGU7YW5pbWF0aW9uOnNwaW5uZXItc2NhbGUtb3V0IDFzIGxpbmVhciBpbmZpbml0ZTtmaWxsOmN1cnJlbnRDb2xvcn06aG9zdCguc3Bpbm5lci1jaXJjbGVzKSBzdmd7LXdlYmtpdC1hbmltYXRpb246c3Bpbm5lci1mYWRlLW91dCAxcyBsaW5lYXIgaW5maW5pdGU7YW5pbWF0aW9uOnNwaW5uZXItZmFkZS1vdXQgMXMgbGluZWFyIGluZmluaXRlO2ZpbGw6Y3VycmVudENvbG9yfTpob3N0KC5zcGlubmVyLWNyZXNjZW50KSBjaXJjbGV7ZmlsbDp0cmFuc3BhcmVudDtzdHJva2Utd2lkdGg6NHB4O3N0cm9rZS1kYXNoYXJyYXk6MTI4cHg7c3Ryb2tlLWRhc2hvZmZzZXQ6ODJweDtzdHJva2U6Y3VycmVudENvbG9yfTpob3N0KC5zcGlubmVyLWNyZXNjZW50KSBzdmd7LXdlYmtpdC1hbmltYXRpb246c3Bpbm5lci1yb3RhdGUgMXMgbGluZWFyIGluZmluaXRlO2FuaW1hdGlvbjpzcGlubmVyLXJvdGF0ZSAxcyBsaW5lYXIgaW5maW5pdGV9Omhvc3QoLnNwaW5uZXItZG90cykgY2lyY2xle3N0cm9rZS13aWR0aDowO2ZpbGw6Y3VycmVudENvbG9yfTpob3N0KC5zcGlubmVyLWRvdHMpIHN2Z3std2Via2l0LWFuaW1hdGlvbjpzcGlubmVyLWRvdHMgMXMgbGluZWFyIGluZmluaXRlO2FuaW1hdGlvbjpzcGlubmVyLWRvdHMgMXMgbGluZWFyIGluZmluaXRlfTpob3N0KC5zcGlubmVyLWNpcmN1bGFyKXstd2Via2l0LWFuaW1hdGlvbjpzcGlubmVyLWNpcmN1bGFyIGxpbmVhciBpbmZpbml0ZTthbmltYXRpb246c3Bpbm5lci1jaXJjdWxhciBsaW5lYXIgaW5maW5pdGV9Omhvc3QoLnNwaW5uZXItY2lyY3VsYXIpIGNpcmNsZXstd2Via2l0LWFuaW1hdGlvbjpzcGlubmVyLWNpcmN1bGFyLWlubmVyIGVhc2UtaW4tb3V0IGluZmluaXRlO2FuaW1hdGlvbjpzcGlubmVyLWNpcmN1bGFyLWlubmVyIGVhc2UtaW4tb3V0IGluZmluaXRlO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLWRhc2hhcnJheTo4MHB4LDIwMHB4O3N0cm9rZS1kYXNob2Zmc2V0OjBweDtzdHJva2Utd2lkdGg6My42O2ZpbGw6bm9uZX06aG9zdCguc3Bpbm5lci1wYXVzZWQpLDpob3N0KC5zcGlubmVyLXBhdXNlZCkgY2lyY2xlLDpob3N0KC5zcGlubmVyLXBhdXNlZCkgc3Zney13ZWJraXQtYW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkO2FuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZH1cXEAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyLWZhZGUtb3V0ezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fVxcQGtleWZyYW1lcyBzcGlubmVyLWZhZGUtb3V0ezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fVxcQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXItc2NhbGUtb3V0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9fVxcQGtleWZyYW1lcyBzcGlubmVyLXNjYWxlLW91dHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfX1cXEAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyLXJvdGF0ZXswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX1cXEBrZXlmcmFtZXMgc3Bpbm5lci1yb3RhdGV7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19XFxALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lci1kb3RzezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5Oi45fTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTtvcGFjaXR5Oi4zfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5Oi45fX1cXEBrZXlmcmFtZXMgc3Bpbm5lci1kb3RzezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5Oi45fTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTtvcGFjaXR5Oi4zfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5Oi45fX1cXEAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyLWNpcmN1bGFye3Rvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fVxcQGtleWZyYW1lcyBzcGlubmVyLWNpcmN1bGFye3Rvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fVxcQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXItY2lyY3VsYXItaW5uZXJ7MCV7c3Ryb2tlLWRhc2hhcnJheToxcHgsMjAwcHg7c3Ryb2tlLWRhc2hvZmZzZXQ6MHB4fTUwJXtzdHJva2UtZGFzaGFycmF5OjEwMHB4LDIwMHB4O3N0cm9rZS1kYXNob2Zmc2V0Oi0xNXB4fXRve3N0cm9rZS1kYXNoYXJyYXk6MTAwcHgsMjAwcHg7c3Ryb2tlLWRhc2hvZmZzZXQ6LTEyNXB4fX1cXEBrZXlmcmFtZXMgc3Bpbm5lci1jaXJjdWxhci1pbm5lcnswJXtzdHJva2UtZGFzaGFycmF5OjFweCwyMDBweDtzdHJva2UtZGFzaG9mZnNldDowcHh9NTAle3N0cm9rZS1kYXNoYXJyYXk6MTAwcHgsMjAwcHg7c3Ryb2tlLWRhc2hvZmZzZXQ6LTE1cHh9dG97c3Ryb2tlLWRhc2hhcnJheToxMDBweCwyMDBweDtzdHJva2UtZGFzaG9mZnNldDotMTI1cHh9fVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gU3Bpbm5lcjtcbn0oKSk7XG52YXIgYnVpbGRDaXJjbGUgPSBmdW5jdGlvbiAoc3Bpbm5lciwgZHVyYXRpb24sIGluZGV4LCB0b3RhbCkge1xuICAgIHZhciBkYXRhID0gc3Bpbm5lci5mbihkdXJhdGlvbiwgaW5kZXgsIHRvdGFsKTtcbiAgICBkYXRhLnN0eWxlWydhbmltYXRpb24tZHVyYXRpb24nXSA9IGR1cmF0aW9uICsgJ21zJztcbiAgICByZXR1cm4gKGgoXCJzdmdcIiwgeyB2aWV3Qm94OiBkYXRhLnZpZXdCb3ggfHwgJzAgMCA2NCA2NCcsIHN0eWxlOiBkYXRhLnN0eWxlIH0sIGgoXCJjaXJjbGVcIiwgeyB0cmFuc2Zvcm06IGRhdGEudHJhbnNmb3JtIHx8ICd0cmFuc2xhdGUoMzIsMzIpJywgY3g6IGRhdGEuY3gsIGN5OiBkYXRhLmN5LCByOiBkYXRhLnIsIHN0eWxlOiBzcGlubmVyLmVsbUR1cmF0aW9uID8geyBhbmltYXRpb25EdXJhdGlvbjogZHVyYXRpb24gKyAnbXMnIH0gOiB7fSB9KSkpO1xufTtcbnZhciBidWlsZExpbmUgPSBmdW5jdGlvbiAoc3Bpbm5lciwgZHVyYXRpb24sIGluZGV4LCB0b3RhbCkge1xuICAgIHZhciBkYXRhID0gc3Bpbm5lci5mbihkdXJhdGlvbiwgaW5kZXgsIHRvdGFsKTtcbiAgICBkYXRhLnN0eWxlWydhbmltYXRpb24tZHVyYXRpb24nXSA9IGR1cmF0aW9uICsgJ21zJztcbiAgICByZXR1cm4gKGgoXCJzdmdcIiwgeyB2aWV3Qm94OiBkYXRhLnZpZXdCb3ggfHwgJzAgMCA2NCA2NCcsIHN0eWxlOiBkYXRhLnN0eWxlIH0sIGgoXCJsaW5lXCIsIHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgzMiwzMilcIiwgeTE6IGRhdGEueTEsIHkyOiBkYXRhLnkyIH0pKSk7XG59O1xuZXhwb3J0IHsgU3Bpbm5lciBhcyBpb25fc3Bpbm5lciB9O1xuIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xudmFyIGhvc3RDb250ZXh0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBlbCkge1xuICAgIHJldHVybiBlbC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbDtcbn07XG4vKipcbiAqIENyZWF0ZSB0aGUgbW9kZSBhbmQgY29sb3IgY2xhc3NlcyBmb3IgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgY2xhc3NlcyBwYXNzZWQgaW5cbiAqL1xudmFyIGNyZWF0ZUNvbG9yQ2xhc3NlcyA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycgJiYgY29sb3IubGVuZ3RoID4gMCkgPyAoX2EgPSB7XG4gICAgICAgICAgICAnaW9uLWNvbG9yJzogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBfYVtcImlvbi1jb2xvci1cIiArIGNvbG9yXSA9IHRydWUsXG4gICAgICAgIF9hKSA6IHVuZGVmaW5lZDtcbn07XG52YXIgZ2V0Q2xhc3NMaXN0ID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICBpZiAoY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gYXJyYXlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT0gbnVsbDsgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudHJpbSgpOyB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPT0gJyc7IH0pO1xuICAgIH1cbiAgICByZXR1cm4gW107XG59O1xudmFyIGdldENsYXNzTWFwID0gZnVuY3Rpb24gKGNsYXNzZXMpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgZ2V0Q2xhc3NMaXN0KGNsYXNzZXMpLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG1hcFtjXSA9IHRydWU7IH0pO1xuICAgIHJldHVybiBtYXA7XG59O1xudmFyIFNDSEVNRSA9IC9eW2Etel1bYS16MC05K1xcLS5dKjovO1xudmFyIG9wZW5VUkwgPSBmdW5jdGlvbiAodXJsLCBldiwgZGlyZWN0aW9uKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByb3V0ZXI7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBpZiAodXJsICE9IG51bGwgJiYgdXJsWzBdICE9PSAnIycgJiYgIVNDSEVNRS50ZXN0KHVybCkpIHtcbiAgICAgICAgICAgIHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcbiAgICAgICAgICAgIGlmIChyb3V0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXYgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcm91dGVyLnB1c2godXJsLCBkaXJlY3Rpb24pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgIH0pO1xufSk7IH07XG5leHBvcnQgeyBjcmVhdGVDb2xvckNsYXNzZXMgYXMgYywgZ2V0Q2xhc3NNYXAgYXMgZywgaG9zdENvbnRleHQgYXMgaCwgb3BlblVSTCBhcyBvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9