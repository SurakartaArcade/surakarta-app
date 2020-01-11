(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/status-tap-32c72c43.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/status-tap-32c72c43.js ***!
  \**********************************************************************/
/*! exports provided: startStatusTap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStatusTap", function() { return startStatusTap; });
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");


var startStatusTap = function () {
    var win = window;
    win.addEventListener('statusTap', function () {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
            var width = win.innerWidth;
            var height = win.innerHeight;
            var el = document.elementFromPoint(width / 2, height / 2);
            if (!el) {
                return;
            }
            var contentEl = el.closest('ion-content');
            if (contentEl) {
                contentEl.componentOnReady().then(function () {
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () { return contentEl.scrollToTop(300); });
                });
            }
        });
    });
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L3N0YXR1cy10YXAtMzJjNzJjNDMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1FO0FBQ3JDO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJEQUFTLGNBQWMsbUNBQW1DLEVBQUU7QUFDaEYsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUMwQiIsImZpbGUiOiI2LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGYgYXMgcmVhZFRhc2ssIHcgYXMgd3JpdGVUYXNrIH0gZnJvbSAnLi9jb3JlLWZlZWVmZjBkLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xudmFyIHN0YXJ0U3RhdHVzVGFwID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB3aW4gPSB3aW5kb3c7XG4gICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ3N0YXR1c1RhcCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVhZFRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gd2luLmlubmVyV2lkdGg7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gd2luLmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh3aWR0aCAvIDIsIGhlaWdodCAvIDIpO1xuICAgICAgICAgICAgaWYgKCFlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjb250ZW50RWwgPSBlbC5jbG9zZXN0KCdpb24tY29udGVudCcpO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnRFbCkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRFbC5jb21wb25lbnRPblJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdyaXRlVGFzayhmdW5jdGlvbiAoKSB7IHJldHVybiBjb250ZW50RWwuc2Nyb2xsVG9Ub3AoMzAwKTsgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbmV4cG9ydCB7IHN0YXJ0U3RhdHVzVGFwIH07XG4iXSwic291cmNlUm9vdCI6IiJ9