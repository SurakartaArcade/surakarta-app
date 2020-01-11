(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/tap-click-ca00ce7f.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/tap-click-ca00ce7f.js ***!
  \*********************************************************************/
/*! exports provided: startTapClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTapClick", function() { return startTapClick; });
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");

var startTapClick = function (config) {
    var lastTouch = -MOUSE_WAIT * 10;
    var lastActivated = 0;
    var scrollingEl;
    var activatableEle;
    var activeRipple;
    var activeDefer;
    var useRippleEffect = config.getBoolean('animated', true) && config.getBoolean('rippleEffect', true);
    var clearDefers = new WeakMap();
    var isScrolling = function () {
        return scrollingEl !== undefined && scrollingEl.parentElement !== null;
    };
    // Touch Events
    var onTouchStart = function (ev) {
        lastTouch = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["n"])(ev);
        pointerDown(ev);
    };
    var onTouchEnd = function (ev) {
        lastTouch = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["n"])(ev);
        pointerUp(ev);
    };
    var onMouseDown = function (ev) {
        var t = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["n"])(ev) - MOUSE_WAIT;
        if (lastTouch < t) {
            pointerDown(ev);
        }
    };
    var onMouseUp = function (ev) {
        var t = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["n"])(ev) - MOUSE_WAIT;
        if (lastTouch < t) {
            pointerUp(ev);
        }
    };
    var cancelActive = function () {
        clearTimeout(activeDefer);
        activeDefer = undefined;
        if (activatableEle) {
            removeActivated(false);
            activatableEle = undefined;
        }
    };
    var pointerDown = function (ev) {
        if (activatableEle || isScrolling()) {
            return;
        }
        scrollingEl = undefined;
        setActivatedElement(getActivatableTarget(ev), ev);
    };
    var pointerUp = function (ev) {
        setActivatedElement(undefined, ev);
    };
    var setActivatedElement = function (el, ev) {
        // do nothing
        if (el && el === activatableEle) {
            return;
        }
        clearTimeout(activeDefer);
        activeDefer = undefined;
        var _a = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["p"])(ev), x = _a.x, y = _a.y;
        // deactivate selected
        if (activatableEle) {
            if (clearDefers.has(activatableEle)) {
                throw new Error('internal error');
            }
            if (!activatableEle.classList.contains(ACTIVATED)) {
                addActivated(activatableEle, x, y);
            }
            removeActivated(true);
        }
        // activate
        if (el) {
            var deferId = clearDefers.get(el);
            if (deferId) {
                clearTimeout(deferId);
                clearDefers.delete(el);
            }
            var delay = isInstant(el) ? 0 : ADD_ACTIVATED_DEFERS;
            el.classList.remove(ACTIVATED);
            activeDefer = setTimeout(function () {
                addActivated(el, x, y);
                activeDefer = undefined;
            }, delay);
        }
        activatableEle = el;
    };
    var addActivated = function (el, x, y) {
        lastActivated = Date.now();
        el.classList.add(ACTIVATED);
        var rippleEffect = useRippleEffect && getRippleEffect(el);
        if (rippleEffect && rippleEffect.addRipple) {
            removeRipple();
            activeRipple = rippleEffect.addRipple(x, y);
        }
    };
    var removeRipple = function () {
        if (activeRipple !== undefined) {
            activeRipple.then(function (remove) { return remove(); });
            activeRipple = undefined;
        }
    };
    var removeActivated = function (smooth) {
        removeRipple();
        var active = activatableEle;
        if (!active) {
            return;
        }
        var time = CLEAR_STATE_DEFERS - Date.now() + lastActivated;
        if (smooth && time > 0 && !isInstant(active)) {
            var deferId = setTimeout(function () {
                active.classList.remove(ACTIVATED);
                clearDefers.delete(active);
            }, CLEAR_STATE_DEFERS);
            clearDefers.set(active, deferId);
        }
        else {
            active.classList.remove(ACTIVATED);
        }
    };
    var doc = document;
    doc.addEventListener('ionScrollStart', function (ev) {
        scrollingEl = ev.target;
        cancelActive();
    });
    doc.addEventListener('ionScrollEnd', function () {
        scrollingEl = undefined;
    });
    doc.addEventListener('ionGestureCaptured', cancelActive);
    doc.addEventListener('touchstart', onTouchStart, true);
    doc.addEventListener('touchcancel', onTouchEnd, true);
    doc.addEventListener('touchend', onTouchEnd, true);
    doc.addEventListener('mousedown', onMouseDown, true);
    doc.addEventListener('mouseup', onMouseUp, true);
};
var getActivatableTarget = function (ev) {
    if (ev.composedPath) {
        var path = ev.composedPath();
        for (var i = 0; i < path.length - 2; i++) {
            var el = path[i];
            if (el.classList && el.classList.contains('ion-activatable')) {
                return el;
            }
        }
    }
    else {
        return ev.target.closest('.ion-activatable');
    }
};
var isInstant = function (el) {
    return el.classList.contains('ion-activatable-instant');
};
var getRippleEffect = function (el) {
    if (el.shadowRoot) {
        var ripple = el.shadowRoot.querySelector('ion-ripple-effect');
        if (ripple) {
            return ripple;
        }
    }
    return el.querySelector('ion-ripple-effect');
};
var ACTIVATED = 'activated';
var ADD_ACTIVATED_DEFERS = 200;
var CLEAR_STATE_DEFERS = 200;
var MOUSE_WAIT = 2500;



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L3RhcC1jbGljay1jYTAwY2U3Zi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOERBQUc7QUFDdkI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhEQUFHO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4REFBRztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhEQUFHO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsOERBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQkFBaUIsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDeUIiLCJmaWxlIjoiOC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBuIGFzIG5vdywgcCBhcyBwb2ludGVyQ29vcmQgfSBmcm9tICcuL2hlbHBlcnMtNDZmNGEyNjIuanMnO1xudmFyIHN0YXJ0VGFwQ2xpY2sgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgdmFyIGxhc3RUb3VjaCA9IC1NT1VTRV9XQUlUICogMTA7XG4gICAgdmFyIGxhc3RBY3RpdmF0ZWQgPSAwO1xuICAgIHZhciBzY3JvbGxpbmdFbDtcbiAgICB2YXIgYWN0aXZhdGFibGVFbGU7XG4gICAgdmFyIGFjdGl2ZVJpcHBsZTtcbiAgICB2YXIgYWN0aXZlRGVmZXI7XG4gICAgdmFyIHVzZVJpcHBsZUVmZmVjdCA9IGNvbmZpZy5nZXRCb29sZWFuKCdhbmltYXRlZCcsIHRydWUpICYmIGNvbmZpZy5nZXRCb29sZWFuKCdyaXBwbGVFZmZlY3QnLCB0cnVlKTtcbiAgICB2YXIgY2xlYXJEZWZlcnMgPSBuZXcgV2Vha01hcCgpO1xuICAgIHZhciBpc1Njcm9sbGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNjcm9sbGluZ0VsICE9PSB1bmRlZmluZWQgJiYgc2Nyb2xsaW5nRWwucGFyZW50RWxlbWVudCAhPT0gbnVsbDtcbiAgICB9O1xuICAgIC8vIFRvdWNoIEV2ZW50c1xuICAgIHZhciBvblRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgbGFzdFRvdWNoID0gbm93KGV2KTtcbiAgICAgICAgcG9pbnRlckRvd24oZXYpO1xuICAgIH07XG4gICAgdmFyIG9uVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgbGFzdFRvdWNoID0gbm93KGV2KTtcbiAgICAgICAgcG9pbnRlclVwKGV2KTtcbiAgICB9O1xuICAgIHZhciBvbk1vdXNlRG93biA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICB2YXIgdCA9IG5vdyhldikgLSBNT1VTRV9XQUlUO1xuICAgICAgICBpZiAobGFzdFRvdWNoIDwgdCkge1xuICAgICAgICAgICAgcG9pbnRlckRvd24oZXYpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgb25Nb3VzZVVwID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIHZhciB0ID0gbm93KGV2KSAtIE1PVVNFX1dBSVQ7XG4gICAgICAgIGlmIChsYXN0VG91Y2ggPCB0KSB7XG4gICAgICAgICAgICBwb2ludGVyVXAoZXYpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgY2FuY2VsQWN0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoYWN0aXZlRGVmZXIpO1xuICAgICAgICBhY3RpdmVEZWZlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGFjdGl2YXRhYmxlRWxlKSB7XG4gICAgICAgICAgICByZW1vdmVBY3RpdmF0ZWQoZmFsc2UpO1xuICAgICAgICAgICAgYWN0aXZhdGFibGVFbGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBwb2ludGVyRG93biA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICBpZiAoYWN0aXZhdGFibGVFbGUgfHwgaXNTY3JvbGxpbmcoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNjcm9sbGluZ0VsID0gdW5kZWZpbmVkO1xuICAgICAgICBzZXRBY3RpdmF0ZWRFbGVtZW50KGdldEFjdGl2YXRhYmxlVGFyZ2V0KGV2KSwgZXYpO1xuICAgIH07XG4gICAgdmFyIHBvaW50ZXJVcCA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICBzZXRBY3RpdmF0ZWRFbGVtZW50KHVuZGVmaW5lZCwgZXYpO1xuICAgIH07XG4gICAgdmFyIHNldEFjdGl2YXRlZEVsZW1lbnQgPSBmdW5jdGlvbiAoZWwsIGV2KSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgaWYgKGVsICYmIGVsID09PSBhY3RpdmF0YWJsZUVsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFyVGltZW91dChhY3RpdmVEZWZlcik7XG4gICAgICAgIGFjdGl2ZURlZmVyID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgX2EgPSBwb2ludGVyQ29vcmQoZXYpLCB4ID0gX2EueCwgeSA9IF9hLnk7XG4gICAgICAgIC8vIGRlYWN0aXZhdGUgc2VsZWN0ZWRcbiAgICAgICAgaWYgKGFjdGl2YXRhYmxlRWxlKSB7XG4gICAgICAgICAgICBpZiAoY2xlYXJEZWZlcnMuaGFzKGFjdGl2YXRhYmxlRWxlKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW50ZXJuYWwgZXJyb3InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYWN0aXZhdGFibGVFbGUuY2xhc3NMaXN0LmNvbnRhaW5zKEFDVElWQVRFRCkpIHtcbiAgICAgICAgICAgICAgICBhZGRBY3RpdmF0ZWQoYWN0aXZhdGFibGVFbGUsIHgsIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVtb3ZlQWN0aXZhdGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFjdGl2YXRlXG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgdmFyIGRlZmVySWQgPSBjbGVhckRlZmVycy5nZXQoZWwpO1xuICAgICAgICAgICAgaWYgKGRlZmVySWQpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoZGVmZXJJZCk7XG4gICAgICAgICAgICAgICAgY2xlYXJEZWZlcnMuZGVsZXRlKGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkZWxheSA9IGlzSW5zdGFudChlbCkgPyAwIDogQUREX0FDVElWQVRFRF9ERUZFUlM7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKEFDVElWQVRFRCk7XG4gICAgICAgICAgICBhY3RpdmVEZWZlciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFkZEFjdGl2YXRlZChlbCwgeCwgeSk7XG4gICAgICAgICAgICAgICAgYWN0aXZlRGVmZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZhdGFibGVFbGUgPSBlbDtcbiAgICB9O1xuICAgIHZhciBhZGRBY3RpdmF0ZWQgPSBmdW5jdGlvbiAoZWwsIHgsIHkpIHtcbiAgICAgICAgbGFzdEFjdGl2YXRlZCA9IERhdGUubm93KCk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoQUNUSVZBVEVEKTtcbiAgICAgICAgdmFyIHJpcHBsZUVmZmVjdCA9IHVzZVJpcHBsZUVmZmVjdCAmJiBnZXRSaXBwbGVFZmZlY3QoZWwpO1xuICAgICAgICBpZiAocmlwcGxlRWZmZWN0ICYmIHJpcHBsZUVmZmVjdC5hZGRSaXBwbGUpIHtcbiAgICAgICAgICAgIHJlbW92ZVJpcHBsZSgpO1xuICAgICAgICAgICAgYWN0aXZlUmlwcGxlID0gcmlwcGxlRWZmZWN0LmFkZFJpcHBsZSh4LCB5KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIHJlbW92ZVJpcHBsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGFjdGl2ZVJpcHBsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhY3RpdmVSaXBwbGUudGhlbihmdW5jdGlvbiAocmVtb3ZlKSB7IHJldHVybiByZW1vdmUoKTsgfSk7XG4gICAgICAgICAgICBhY3RpdmVSaXBwbGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciByZW1vdmVBY3RpdmF0ZWQgPSBmdW5jdGlvbiAoc21vb3RoKSB7XG4gICAgICAgIHJlbW92ZVJpcHBsZSgpO1xuICAgICAgICB2YXIgYWN0aXZlID0gYWN0aXZhdGFibGVFbGU7XG4gICAgICAgIGlmICghYWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRpbWUgPSBDTEVBUl9TVEFURV9ERUZFUlMgLSBEYXRlLm5vdygpICsgbGFzdEFjdGl2YXRlZDtcbiAgICAgICAgaWYgKHNtb290aCAmJiB0aW1lID4gMCAmJiAhaXNJbnN0YW50KGFjdGl2ZSkpIHtcbiAgICAgICAgICAgIHZhciBkZWZlcklkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoQUNUSVZBVEVEKTtcbiAgICAgICAgICAgICAgICBjbGVhckRlZmVycy5kZWxldGUoYWN0aXZlKTtcbiAgICAgICAgICAgIH0sIENMRUFSX1NUQVRFX0RFRkVSUyk7XG4gICAgICAgICAgICBjbGVhckRlZmVycy5zZXQoYWN0aXZlLCBkZWZlcklkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKEFDVElWQVRFRCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBkb2MgPSBkb2N1bWVudDtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignaW9uU2Nyb2xsU3RhcnQnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgc2Nyb2xsaW5nRWwgPSBldi50YXJnZXQ7XG4gICAgICAgIGNhbmNlbEFjdGl2ZSgpO1xuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdpb25TY3JvbGxFbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNjcm9sbGluZ0VsID0gdW5kZWZpbmVkO1xuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdpb25HZXN0dXJlQ2FwdHVyZWQnLCBjYW5jZWxBY3RpdmUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCBvblRvdWNoRW5kLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24sIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwLCB0cnVlKTtcbn07XG52YXIgZ2V0QWN0aXZhdGFibGVUYXJnZXQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICBpZiAoZXYuY29tcG9zZWRQYXRoKSB7XG4gICAgICAgIHZhciBwYXRoID0gZXYuY29tcG9zZWRQYXRoKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBlbCA9IHBhdGhbaV07XG4gICAgICAgICAgICBpZiAoZWwuY2xhc3NMaXN0ICYmIGVsLmNsYXNzTGlzdC5jb250YWlucygnaW9uLWFjdGl2YXRhYmxlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBldi50YXJnZXQuY2xvc2VzdCgnLmlvbi1hY3RpdmF0YWJsZScpO1xuICAgIH1cbn07XG52YXIgaXNJbnN0YW50ID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucygnaW9uLWFjdGl2YXRhYmxlLWluc3RhbnQnKTtcbn07XG52YXIgZ2V0UmlwcGxlRWZmZWN0ID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgdmFyIHJpcHBsZSA9IGVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignaW9uLXJpcHBsZS1lZmZlY3QnKTtcbiAgICAgICAgaWYgKHJpcHBsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJpcHBsZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWwucXVlcnlTZWxlY3RvcignaW9uLXJpcHBsZS1lZmZlY3QnKTtcbn07XG52YXIgQUNUSVZBVEVEID0gJ2FjdGl2YXRlZCc7XG52YXIgQUREX0FDVElWQVRFRF9ERUZFUlMgPSAyMDA7XG52YXIgQ0xFQVJfU1RBVEVfREVGRVJTID0gMjAwO1xudmFyIE1PVVNFX1dBSVQgPSAyNTAwO1xuZXhwb3J0IHsgc3RhcnRUYXBDbGljayB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==