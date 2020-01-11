(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-backdrop-md.entry.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-backdrop-md.entry.js ***!
  \************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1iYWNrZHJvcC1tZC5lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRHO0FBQzlFO0FBQ21CO0FBQ1E7QUFDekQ7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0EsdUJBQXVCLHFFQUFrQjtBQUN6QztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMkRBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsOERBQUc7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDhEQUFHO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQVU7QUFDN0IsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyxnQ0FBZ0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSwwQkFBMEIsZUFBZSxPQUFPLFFBQVEsTUFBTSxTQUFTLGNBQWMsa0JBQWtCLGdDQUFnQyx3QkFBd0IsZUFBZSxlQUFlLFlBQVksc0JBQXNCLGtCQUFrQixVQUFVLHNCQUFzQix1QkFBdUIsNkJBQTZCLFlBQVksTUFBTSxnREFBZ0QsRUFBRSxFQUFFO0FBQzNZO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ21DIiwiZmlsZSI6IjgwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgZCBhcyBjcmVhdGVFdmVudCwgYyBhcyBnZXRJb25Nb2RlLCBoLCBIIGFzIEhvc3QgfSBmcm9tICcuL2NvcmUtZmVlZWZmMGQuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG5pbXBvcnQgeyBuIGFzIG5vdyB9IGZyb20gJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBHRVNUVVJFX0NPTlRST0xMRVIgfSBmcm9tICcuL2luZGV4LTYyNGVlYTU4LmpzJztcbnZhciBCYWNrZHJvcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCYWNrZHJvcChob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMubGFzdENsaWNrID0gLTEwMDAwO1xuICAgICAgICB0aGlzLmJsb2NrZXIgPSBHRVNUVVJFX0NPTlRST0xMRVIuY3JlYXRlQmxvY2tlcih7XG4gICAgICAgICAgICBkaXNhYmxlU2Nyb2xsOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYmFja2Ryb3Agd2lsbCBiZSB2aXNpYmxlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGB0cnVlYCwgdGhlIGJhY2tkcm9wIHdpbGwgY2FuIGJlIGNsaWNrZWQgYW5kIHdpbGwgZW1pdCB0aGUgYGlvbkJhY2tkcm9wVGFwYCBldmVudC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGFwcGFibGUgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCB0aGUgYmFja2Ryb3Agd2lsbCBzdG9wIHByb3BhZ2F0aW9uIG9uIHRhcC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pb25CYWNrZHJvcFRhcCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQmFja2Ryb3BUYXBcIiwgNyk7XG4gICAgfVxuICAgIEJhY2tkcm9wLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmJsb2NrZXIuYmxvY2soKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQmFja2Ryb3AucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmJsb2NrZXIudW5ibG9jaygpO1xuICAgIH07XG4gICAgQmFja2Ryb3AucHJvdG90eXBlLm9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICB0aGlzLmxhc3RDbGljayA9IG5vdyhldik7XG4gICAgICAgIHRoaXMuZW1pdFRhcChldik7XG4gICAgfTtcbiAgICBCYWNrZHJvcC5wcm90b3R5cGUub25Nb3VzZURvd24gPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgaWYgKHRoaXMubGFzdENsaWNrIDwgbm93KGV2KSAtIDI1MDApIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdFRhcChldik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEJhY2tkcm9wLnByb3RvdHlwZS5lbWl0VGFwID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIGlmICh0aGlzLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRhcHBhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmlvbkJhY2tkcm9wVGFwLmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQmFja2Ryb3AucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IHRhYmluZGV4OiBcIi0xXCIsIGNsYXNzOiAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVttb2RlXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2FbJ2JhY2tkcm9wLWhpZGUnXSA9ICF0aGlzLnZpc2libGUsXG4gICAgICAgICAgICAgICAgX2FbJ2JhY2tkcm9wLW5vLXRhcHBhYmxlJ10gPSAhdGhpcy50YXBwYWJsZSxcbiAgICAgICAgICAgICAgICBfYSkgfSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJhY2tkcm9wLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIjpob3N0e2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtjb250YWluOnN0cmljdDtjdXJzb3I6cG9pbnRlcjtvcGFjaXR5Oi4wMTstbXMtdG91Y2gtYWN0aW9uOm5vbmU7dG91Y2gtYWN0aW9uOm5vbmU7ei1pbmRleDoyfTpob3N0KC5iYWNrZHJvcC1oaWRlKXtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fTpob3N0KC5iYWNrZHJvcC1uby10YXBwYWJsZSl7Y3Vyc29yOmF1dG99Omhvc3R7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pb24tYmFja2Ryb3AtY29sb3IsIzAwMCl9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBCYWNrZHJvcDtcbn0oKSk7XG5leHBvcnQgeyBCYWNrZHJvcCBhcyBpb25fYmFja2Ryb3AgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=