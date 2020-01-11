(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/hardware-back-button-5afe3cb0.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/hardware-back-button-5afe3cb0.js ***!
  \********************************************************************************/
/*! exports provided: startHardwareBackButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startHardwareBackButton", function() { return startHardwareBackButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var startHardwareBackButton = function () {
    var doc = document;
    var busy = false;
    doc.addEventListener('backbutton', function () {
        if (busy) {
            return;
        }
        var handlers = [];
        var ev = new CustomEvent('ionBackButton', {
            bubbles: false,
            detail: {
                register: function (priority, handler) {
                    handlers.push({ priority: priority, handler: handler });
                }
            }
        });
        doc.dispatchEvent(ev);
        if (handlers.length > 0) {
            var selectedPriority_1 = Number.MIN_SAFE_INTEGER;
            var selectedHandler_1;
            handlers.forEach(function (_a) {
                var priority = _a.priority, handler = _a.handler;
                if (priority >= selectedPriority_1) {
                    selectedPriority_1 = priority;
                    selectedHandler_1 = handler;
                }
            });
            busy = true;
            executeAction(selectedHandler_1).then(function () { return busy = false; });
        }
    });
};
var executeAction = function (handler) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var result, e_1;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                if (!handler) return [3 /*break*/, 2];
                result = handler();
                if (!(result != null)) return [3 /*break*/, 2];
                return [4 /*yield*/, result];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                console.error(e_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2hhcmR3YXJlLWJhY2stYnV0dG9uLTVhZmUzY2IwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHVDQUF1QztBQUMxRTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsK0RBQStELHFCQUFxQixFQUFFO0FBQ3RGO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0NBQXdDLFFBQVEsdURBQVM7QUFDekQ7QUFDQSxXQUFXLHlEQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFO0FBQ2dDIiwiZmlsZSI6IjMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xudmFyIHN0YXJ0SGFyZHdhcmVCYWNrQnV0dG9uID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkb2MgPSBkb2N1bWVudDtcbiAgICB2YXIgYnVzeSA9IGZhbHNlO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdiYWNrYnV0dG9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYnVzeSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoYW5kbGVycyA9IFtdO1xuICAgICAgICB2YXIgZXYgPSBuZXcgQ3VzdG9tRXZlbnQoJ2lvbkJhY2tCdXR0b24nLCB7XG4gICAgICAgICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIHJlZ2lzdGVyOiBmdW5jdGlvbiAocHJpb3JpdHksIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcnMucHVzaCh7IHByaW9yaXR5OiBwcmlvcml0eSwgaGFuZGxlcjogaGFuZGxlciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkb2MuZGlzcGF0Y2hFdmVudChldik7XG4gICAgICAgIGlmIChoYW5kbGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRQcmlvcml0eV8xID0gTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVI7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRIYW5kbGVyXzE7XG4gICAgICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHZhciBwcmlvcml0eSA9IF9hLnByaW9yaXR5LCBoYW5kbGVyID0gX2EuaGFuZGxlcjtcbiAgICAgICAgICAgICAgICBpZiAocHJpb3JpdHkgPj0gc2VsZWN0ZWRQcmlvcml0eV8xKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUHJpb3JpdHlfMSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEhhbmRsZXJfMSA9IGhhbmRsZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBidXN5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGV4ZWN1dGVBY3Rpb24oc2VsZWN0ZWRIYW5kbGVyXzEpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gYnVzeSA9IGZhbHNlOyB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbnZhciBleGVjdXRlQWN0aW9uID0gZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCwgZV8xO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgaWYgKCFoYW5kbGVyKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgaWYgKCEocmVzdWx0ICE9IG51bGwpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXN1bHRdO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVfMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG5leHBvcnQgeyBzdGFydEhhcmR3YXJlQmFja0J1dHRvbiB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==