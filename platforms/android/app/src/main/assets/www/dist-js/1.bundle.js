(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/swipe-back-35ad8e37.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/swipe-back-35ad8e37.js ***!
  \**********************************************************************/
/*! exports provided: createSwipeBackGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSwipeBackGesture", function() { return createSwipeBackGesture; });
/* harmony import */ var _index_624eea58_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-624eea58.js */ "./node_modules/@ionic/core/dist/esm-es5/index-624eea58.js");

var createSwipeBackGesture = function (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) {
    var win = el.ownerDocument.defaultView;
    var canStart = function (detail) {
        return detail.startX <= 50 && canStartHandler();
    };
    var onMove = function (detail) {
        // set the transition animation's progress
        var delta = detail.deltaX;
        var stepValue = delta / win.innerWidth;
        onMoveHandler(stepValue);
    };
    var onEnd = function (detail) {
        // the swipe back gesture has ended
        var delta = detail.deltaX;
        var width = win.innerWidth;
        var stepValue = delta / width;
        var velocity = detail.velocityX;
        var z = width / 2.0;
        var shouldComplete = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
        var missing = shouldComplete ? 1 - stepValue : stepValue;
        var missingDistance = missing * width;
        var realDur = 0;
        if (missingDistance > 5) {
            var dur = missingDistance / Math.abs(velocity);
            realDur = Math.min(dur, 540);
        }
        /**
         * TODO: stepValue can sometimes return a negative
         * value, but you can't have a negative time value
         * for the cubic bezier curve (at least with web animations)
         * Not sure if the negative step value is an error or not
         */
        onEndHandler(shouldComplete, (stepValue <= 0) ? 0.01 : stepValue, realDur);
    };
    return Object(_index_624eea58_js__WEBPACK_IMPORTED_MODULE_0__["createGesture"])({
        el: el,
        gestureName: 'goback-swipe',
        gesturePriority: 40,
        threshold: 10,
        canStart: canStart,
        onStart: onStartHandler,
        onMove: onMove,
        onEnd: onEnd
    });
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L3N3aXBlLWJhY2stMzVhZDhlMzcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsd0VBQWE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNrQyIsImZpbGUiOiIxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdlc3R1cmUgfSBmcm9tICcuL2luZGV4LTYyNGVlYTU4LmpzJztcbnZhciBjcmVhdGVTd2lwZUJhY2tHZXN0dXJlID0gZnVuY3Rpb24gKGVsLCBjYW5TdGFydEhhbmRsZXIsIG9uU3RhcnRIYW5kbGVyLCBvbk1vdmVIYW5kbGVyLCBvbkVuZEhhbmRsZXIpIHtcbiAgICB2YXIgd2luID0gZWwub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICB2YXIgY2FuU3RhcnQgPSBmdW5jdGlvbiAoZGV0YWlsKSB7XG4gICAgICAgIHJldHVybiBkZXRhaWwuc3RhcnRYIDw9IDUwICYmIGNhblN0YXJ0SGFuZGxlcigpO1xuICAgIH07XG4gICAgdmFyIG9uTW92ZSA9IGZ1bmN0aW9uIChkZXRhaWwpIHtcbiAgICAgICAgLy8gc2V0IHRoZSB0cmFuc2l0aW9uIGFuaW1hdGlvbidzIHByb2dyZXNzXG4gICAgICAgIHZhciBkZWx0YSA9IGRldGFpbC5kZWx0YVg7XG4gICAgICAgIHZhciBzdGVwVmFsdWUgPSBkZWx0YSAvIHdpbi5pbm5lcldpZHRoO1xuICAgICAgICBvbk1vdmVIYW5kbGVyKHN0ZXBWYWx1ZSk7XG4gICAgfTtcbiAgICB2YXIgb25FbmQgPSBmdW5jdGlvbiAoZGV0YWlsKSB7XG4gICAgICAgIC8vIHRoZSBzd2lwZSBiYWNrIGdlc3R1cmUgaGFzIGVuZGVkXG4gICAgICAgIHZhciBkZWx0YSA9IGRldGFpbC5kZWx0YVg7XG4gICAgICAgIHZhciB3aWR0aCA9IHdpbi5pbm5lcldpZHRoO1xuICAgICAgICB2YXIgc3RlcFZhbHVlID0gZGVsdGEgLyB3aWR0aDtcbiAgICAgICAgdmFyIHZlbG9jaXR5ID0gZGV0YWlsLnZlbG9jaXR5WDtcbiAgICAgICAgdmFyIHogPSB3aWR0aCAvIDIuMDtcbiAgICAgICAgdmFyIHNob3VsZENvbXBsZXRlID0gdmVsb2NpdHkgPj0gMCAmJiAodmVsb2NpdHkgPiAwLjIgfHwgZGV0YWlsLmRlbHRhWCA+IHopO1xuICAgICAgICB2YXIgbWlzc2luZyA9IHNob3VsZENvbXBsZXRlID8gMSAtIHN0ZXBWYWx1ZSA6IHN0ZXBWYWx1ZTtcbiAgICAgICAgdmFyIG1pc3NpbmdEaXN0YW5jZSA9IG1pc3NpbmcgKiB3aWR0aDtcbiAgICAgICAgdmFyIHJlYWxEdXIgPSAwO1xuICAgICAgICBpZiAobWlzc2luZ0Rpc3RhbmNlID4gNSkge1xuICAgICAgICAgICAgdmFyIGR1ciA9IG1pc3NpbmdEaXN0YW5jZSAvIE1hdGguYWJzKHZlbG9jaXR5KTtcbiAgICAgICAgICAgIHJlYWxEdXIgPSBNYXRoLm1pbihkdXIsIDU0MCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRPRE86IHN0ZXBWYWx1ZSBjYW4gc29tZXRpbWVzIHJldHVybiBhIG5lZ2F0aXZlXG4gICAgICAgICAqIHZhbHVlLCBidXQgeW91IGNhbid0IGhhdmUgYSBuZWdhdGl2ZSB0aW1lIHZhbHVlXG4gICAgICAgICAqIGZvciB0aGUgY3ViaWMgYmV6aWVyIGN1cnZlIChhdCBsZWFzdCB3aXRoIHdlYiBhbmltYXRpb25zKVxuICAgICAgICAgKiBOb3Qgc3VyZSBpZiB0aGUgbmVnYXRpdmUgc3RlcCB2YWx1ZSBpcyBhbiBlcnJvciBvciBub3RcbiAgICAgICAgICovXG4gICAgICAgIG9uRW5kSGFuZGxlcihzaG91bGRDb21wbGV0ZSwgKHN0ZXBWYWx1ZSA8PSAwKSA/IDAuMDEgOiBzdGVwVmFsdWUsIHJlYWxEdXIpO1xuICAgIH07XG4gICAgcmV0dXJuIGNyZWF0ZUdlc3R1cmUoe1xuICAgICAgICBlbDogZWwsXG4gICAgICAgIGdlc3R1cmVOYW1lOiAnZ29iYWNrLXN3aXBlJyxcbiAgICAgICAgZ2VzdHVyZVByaW9yaXR5OiA0MCxcbiAgICAgICAgdGhyZXNob2xkOiAxMCxcbiAgICAgICAgY2FuU3RhcnQ6IGNhblN0YXJ0LFxuICAgICAgICBvblN0YXJ0OiBvblN0YXJ0SGFuZGxlcixcbiAgICAgICAgb25Nb3ZlOiBvbk1vdmUsXG4gICAgICAgIG9uRW5kOiBvbkVuZFxuICAgIH0pO1xufTtcbmV4cG9ydCB7IGNyZWF0ZVN3aXBlQmFja0dlc3R1cmUgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=