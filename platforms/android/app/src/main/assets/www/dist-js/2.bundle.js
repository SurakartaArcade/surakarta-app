(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/focus-visible-70713a0c.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/focus-visible-70713a0c.js ***!
  \*************************************************************************/
/*! exports provided: startFocusVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startFocusVisible", function() { return startFocusVisible; });
var ION_FOCUSED = 'ion-focused';
var ION_FOCUSABLE = 'ion-focusable';
var FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp'];
var startFocusVisible = function () {
    var currentFocus = [];
    var keyboardMode = true;
    var doc = document;
    var setFocus = function (elements) {
        currentFocus.forEach(function (el) { return el.classList.remove(ION_FOCUSED); });
        elements.forEach(function (el) { return el.classList.add(ION_FOCUSED); });
        currentFocus = elements;
    };
    var pointerDown = function () {
        keyboardMode = false;
        setFocus([]);
    };
    doc.addEventListener('keydown', function (ev) {
        keyboardMode = FOCUS_KEYS.includes(ev.key);
        if (!keyboardMode) {
            setFocus([]);
        }
    });
    doc.addEventListener('focusin', function (ev) {
        if (keyboardMode && ev.composedPath) {
            var toFocus = ev.composedPath().filter(function (el) {
                if (el.classList) {
                    return el.classList.contains(ION_FOCUSABLE);
                }
                return false;
            });
            setFocus(toFocus);
        }
    });
    doc.addEventListener('focusout', function () {
        if (doc.activeElement === doc.body) {
            setFocus([]);
        }
    });
    doc.addEventListener('touchstart', pointerDown);
    doc.addEventListener('mousedown', pointerDown);
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2ZvY3VzLXZpc2libGUtNzA3MTNhMGMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHlDQUF5QyxFQUFFO0FBQ3ZGLHdDQUF3QyxzQ0FBc0MsRUFBRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQzZCIiwiZmlsZSI6IjIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIElPTl9GT0NVU0VEID0gJ2lvbi1mb2N1c2VkJztcbnZhciBJT05fRk9DVVNBQkxFID0gJ2lvbi1mb2N1c2FibGUnO1xudmFyIEZPQ1VTX0tFWVMgPSBbJ1RhYicsICdBcnJvd0Rvd24nLCAnU3BhY2UnLCAnRXNjYXBlJywgJyAnLCAnU2hpZnQnLCAnRW50ZXInLCAnQXJyb3dMZWZ0JywgJ0Fycm93UmlnaHQnLCAnQXJyb3dVcCddO1xudmFyIHN0YXJ0Rm9jdXNWaXNpYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjdXJyZW50Rm9jdXMgPSBbXTtcbiAgICB2YXIga2V5Ym9hcmRNb2RlID0gdHJ1ZTtcbiAgICB2YXIgZG9jID0gZG9jdW1lbnQ7XG4gICAgdmFyIHNldEZvY3VzID0gZnVuY3Rpb24gKGVsZW1lbnRzKSB7XG4gICAgICAgIGN1cnJlbnRGb2N1cy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwuY2xhc3NMaXN0LnJlbW92ZShJT05fRk9DVVNFRCk7IH0pO1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwuY2xhc3NMaXN0LmFkZChJT05fRk9DVVNFRCk7IH0pO1xuICAgICAgICBjdXJyZW50Rm9jdXMgPSBlbGVtZW50cztcbiAgICB9O1xuICAgIHZhciBwb2ludGVyRG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAga2V5Ym9hcmRNb2RlID0gZmFsc2U7XG4gICAgICAgIHNldEZvY3VzKFtdKTtcbiAgICB9O1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIGtleWJvYXJkTW9kZSA9IEZPQ1VTX0tFWVMuaW5jbHVkZXMoZXYua2V5KTtcbiAgICAgICAgaWYgKCFrZXlib2FyZE1vZGUpIHtcbiAgICAgICAgICAgIHNldEZvY3VzKFtdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIGlmIChrZXlib2FyZE1vZGUgJiYgZXYuY29tcG9zZWRQYXRoKSB7XG4gICAgICAgICAgICB2YXIgdG9Gb2N1cyA9IGV2LmNvbXBvc2VkUGF0aCgpLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoSU9OX0ZPQ1VTQUJMRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0Rm9jdXModG9Gb2N1cyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChkb2MuYWN0aXZlRWxlbWVudCA9PT0gZG9jLmJvZHkpIHtcbiAgICAgICAgICAgIHNldEZvY3VzKFtdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcG9pbnRlckRvd24pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBwb2ludGVyRG93bik7XG59O1xuZXhwb3J0IHsgc3RhcnRGb2N1c1Zpc2libGUgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=