(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-backdrop-ios.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-backdrop-ios.entry.js ***!
  \*************************************************************************/
/*! exports provided: ion_backdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_backdrop", function() { return Backdrop; });
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _index_624eea58_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-624eea58.js */ "./node_modules/@ionic/core/dist/esm-es5/index-624eea58.js");




var Backdrop = /** @class */ (function () {
    function Backdrop(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.lastClick = -10000;
        this.blocker = _index_624eea58_js__WEBPACK_IMPORTED_MODULE_3__["GESTURE_CONTROLLER"].createBlocker({
            disableScroll: true
        });
        /**
         * If `true`, the backdrop will be visible.
         */
        this.visible = true;
        /**
         * If `true`, the backdrop will can be clicked and will emit the `ionBackdropTap` event.
         */
        this.tappable = true;
        /**
         * If `true`, the backdrop will stop propagation on tap.
         */
        this.stopPropagation = true;
        this.ionBackdropTap = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionBackdropTap", 7);
    }
    Backdrop.prototype.connectedCallback = function () {
        if (this.stopPropagation) {
            this.blocker.block();
        }
    };
    Backdrop.prototype.disconnectedCallback = function () {
        this.blocker.unblock();
    };
    Backdrop.prototype.onTouchStart = function (ev) {
        this.lastClick = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["n"])(ev);
        this.emitTap(ev);
    };
    Backdrop.prototype.onMouseDown = function (ev) {
        if (this.lastClick < Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["n"])(ev) - 2500) {
            this.emitTap(ev);
        }
    };
    Backdrop.prototype.emitTap = function (ev) {
        if (this.stopPropagation) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        if (this.tappable) {
            this.ionBackdropTap.emit();
        }
    };
    Backdrop.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { tabindex: "-1", class: (_a = {},
                _a[mode] = true,
                _a['backdrop-hide'] = !this.visible,
                _a['backdrop-no-tappable'] = !this.tappable,
                _a) }));
    };
    Object.defineProperty(Backdrop, "style", {
        get: function () { return ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color,#000)}"; },
        enumerable: true,
        configurable: true
    });
    return Backdrop;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1iYWNrZHJvcC1pb3MuZW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0RztBQUM5RTtBQUNtQjtBQUNRO0FBQ3pEO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBLHVCQUF1QixxRUFBa0I7QUFDekM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDJEQUFXO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhEQUFHO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw4REFBRztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFVO0FBQzdCLGdCQUFnQiwyREFBQyxDQUFDLG1EQUFJLEdBQUcsZ0NBQWdDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsMEJBQTBCLGVBQWUsT0FBTyxRQUFRLE1BQU0sU0FBUyxjQUFjLGtCQUFrQixnQ0FBZ0Msd0JBQXdCLGVBQWUsZUFBZSxZQUFZLHNCQUFzQixrQkFBa0IsVUFBVSxzQkFBc0IsdUJBQXVCLDZCQUE2QixZQUFZLE1BQU0sZ0RBQWdELEVBQUUsRUFBRTtBQUMzWTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNtQyIsImZpbGUiOiI3OS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGQgYXMgY3JlYXRlRXZlbnQsIGMgYXMgZ2V0SW9uTW9kZSwgaCwgSCBhcyBIb3N0IH0gZnJvbSAnLi9jb3JlLWZlZWVmZjBkLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgbiBhcyBub3cgfSBmcm9tICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xuaW1wb3J0IHsgR0VTVFVSRV9DT05UUk9MTEVSIH0gZnJvbSAnLi9pbmRleC02MjRlZWE1OC5qcyc7XG52YXIgQmFja2Ryb3AgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmFja2Ryb3AoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmxhc3RDbGljayA9IC0xMDAwMDtcbiAgICAgICAgdGhpcy5ibG9ja2VyID0gR0VTVFVSRV9DT05UUk9MTEVSLmNyZWF0ZUJsb2NrZXIoe1xuICAgICAgICAgICAgZGlzYWJsZVNjcm9sbDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGJhY2tkcm9wIHdpbGwgYmUgdmlzaWJsZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBiYWNrZHJvcCB3aWxsIGNhbiBiZSBjbGlja2VkIGFuZCB3aWxsIGVtaXQgdGhlIGBpb25CYWNrZHJvcFRhcGAgZXZlbnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRhcHBhYmxlID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGJhY2tkcm9wIHdpbGwgc3RvcCBwcm9wYWdhdGlvbiBvbiB0YXAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbiA9IHRydWU7XG4gICAgICAgIHRoaXMuaW9uQmFja2Ryb3BUYXAgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJhY2tkcm9wVGFwXCIsIDcpO1xuICAgIH1cbiAgICBCYWNrZHJvcC5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5ibG9ja2VyLmJsb2NrKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEJhY2tkcm9wLnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ibG9ja2VyLnVuYmxvY2soKTtcbiAgICB9O1xuICAgIEJhY2tkcm9wLnByb3RvdHlwZS5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgdGhpcy5sYXN0Q2xpY2sgPSBub3coZXYpO1xuICAgICAgICB0aGlzLmVtaXRUYXAoZXYpO1xuICAgIH07XG4gICAgQmFja2Ryb3AucHJvdG90eXBlLm9uTW91c2VEb3duID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIGlmICh0aGlzLmxhc3RDbGljayA8IG5vdyhldikgLSAyNTAwKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRUYXAoZXYpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBCYWNrZHJvcC5wcm90b3R5cGUuZW1pdFRhcCA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICBpZiAodGhpcy5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50YXBwYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5pb25CYWNrZHJvcFRhcC5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEJhY2tkcm9wLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyB0YWJpbmRleDogXCItMVwiLCBjbGFzczogKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hWydiYWNrZHJvcC1oaWRlJ10gPSAhdGhpcy52aXNpYmxlLFxuICAgICAgICAgICAgICAgIF9hWydiYWNrZHJvcC1uby10YXBwYWJsZSddID0gIXRoaXMudGFwcGFibGUsXG4gICAgICAgICAgICAgICAgX2EpIH0pKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCYWNrZHJvcCwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCI6aG9zdHtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7Y29udGFpbjpzdHJpY3Q7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTouMDE7LW1zLXRvdWNoLWFjdGlvbjpub25lO3RvdWNoLWFjdGlvbjpub25lO3otaW5kZXg6Mn06aG9zdCguYmFja2Ryb3AtaGlkZSl7YmFja2dyb3VuZDp0cmFuc3BhcmVudH06aG9zdCguYmFja2Ryb3Atbm8tdGFwcGFibGUpe2N1cnNvcjphdXRvfTpob3N0e2JhY2tncm91bmQtY29sb3I6dmFyKC0taW9uLWJhY2tkcm9wLWNvbG9yLCMwMDApfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQmFja2Ryb3A7XG59KCkpO1xuZXhwb3J0IHsgQmFja2Ryb3AgYXMgaW9uX2JhY2tkcm9wIH07XG4iXSwic291cmNlUm9vdCI6IiJ9