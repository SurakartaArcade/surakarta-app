(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/input-shims-a4fc53ac.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/input-shims-a4fc53ac.js ***!
  \***********************************************************************/
/*! exports provided: startInputShims */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startInputShims", function() { return startInputShims; });
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");

var cloneMap = new WeakMap();
var relocateInput = function (componentEl, inputEl, shouldRelocate, inputRelativeY) {
    if (inputRelativeY === void 0) { inputRelativeY = 0; }
    if (cloneMap.has(componentEl) === shouldRelocate) {
        return;
    }
    if (shouldRelocate) {
        addClone(componentEl, inputEl, inputRelativeY);
    }
    else {
        removeClone(componentEl, inputEl);
    }
};
var isFocused = function (input) {
    return input === input.getRootNode().activeElement;
};
var addClone = function (componentEl, inputEl, inputRelativeY) {
    // this allows for the actual input to receive the focus from
    // the user's touch event, but before it receives focus, it
    // moves the actual input to a location that will not screw
    // up the app's layout, and does not allow the native browser
    // to attempt to scroll the input into place (messing up headers/footers)
    // the cloned input fills the area of where native input should be
    // while the native input fakes out the browser by relocating itself
    // before it receives the actual focus event
    // We hide the focused input (with the visible caret) invisible by making it scale(0),
    var parentEl = inputEl.parentNode;
    // DOM WRITES
    var clonedEl = inputEl.cloneNode(false);
    clonedEl.classList.add('cloned-input');
    clonedEl.tabIndex = -1;
    parentEl.appendChild(clonedEl);
    cloneMap.set(componentEl, clonedEl);
    var doc = componentEl.ownerDocument;
    var tx = doc.dir === 'rtl' ? 9999 : -9999;
    componentEl.style.pointerEvents = 'none';
    inputEl.style.transform = "translate3d(" + tx + "px," + inputRelativeY + "px,0) scale(0)";
};
var removeClone = function (componentEl, inputEl) {
    var clone = cloneMap.get(componentEl);
    if (clone) {
        cloneMap.delete(componentEl);
        clone.remove();
    }
    componentEl.style.pointerEvents = '';
    inputEl.style.transform = '';
};
var enableHideCaretOnScroll = function (componentEl, inputEl, scrollEl) {
    if (!scrollEl || !inputEl) {
        return function () { return; };
    }
    var scrollHideCaret = function (shouldHideCaret) {
        if (isFocused(inputEl)) {
            relocateInput(componentEl, inputEl, shouldHideCaret);
        }
    };
    var onBlur = function () { return relocateInput(componentEl, inputEl, false); };
    var hideCaret = function () { return scrollHideCaret(true); };
    var showCaret = function () { return scrollHideCaret(false); };
    scrollEl.addEventListener('ionScrollStart', hideCaret);
    scrollEl.addEventListener('ionScrollEnd', showCaret);
    inputEl.addEventListener('blur', onBlur);
    return function () {
        scrollEl.removeEventListener('ionScrollStart', hideCaret);
        scrollEl.removeEventListener('ionScrollEnd', showCaret);
        inputEl.addEventListener('ionBlur', onBlur);
    };
};
var SKIP_SELECTOR = 'input, textarea, [no-blur]';
var enableInputBlurring = function () {
    var focused = true;
    var didScroll = false;
    var doc = document;
    var onScroll = function () {
        didScroll = true;
    };
    var onFocusin = function () {
        focused = true;
    };
    var onTouchend = function (ev) {
        // if app did scroll return early
        if (didScroll) {
            didScroll = false;
            return;
        }
        var active = doc.activeElement;
        if (!active) {
            return;
        }
        // only blur if the active element is a text-input or a textarea
        if (active.matches(SKIP_SELECTOR)) {
            return;
        }
        // if the selected target is the active element, do not blur
        var tapped = ev.target;
        if (tapped === active) {
            return;
        }
        if (tapped.matches(SKIP_SELECTOR) || tapped.closest(SKIP_SELECTOR)) {
            return;
        }
        focused = false;
        // TODO: find a better way, why 50ms?
        setTimeout(function () {
            if (!focused) {
                active.blur();
            }
        }, 50);
    };
    doc.addEventListener('ionScrollStart', onScroll);
    doc.addEventListener('focusin', onFocusin, true);
    doc.addEventListener('touchend', onTouchend, false);
    return function () {
        doc.removeEventListener('ionScrollStart', onScroll, true);
        doc.removeEventListener('focusin', onFocusin, true);
        doc.removeEventListener('touchend', onTouchend, false);
    };
};
var SCROLL_ASSIST_SPEED = 0.3;
var getScrollData = function (componentEl, contentEl, keyboardHeight) {
    var itemEl = componentEl.closest('ion-item,[ion-item]') || componentEl;
    return calcScrollData(itemEl.getBoundingClientRect(), contentEl.getBoundingClientRect(), keyboardHeight, componentEl.ownerDocument.defaultView.innerHeight);
};
var calcScrollData = function (inputRect, contentRect, keyboardHeight, platformHeight) {
    // compute input's Y values relative to the body
    var inputTop = inputRect.top;
    var inputBottom = inputRect.bottom;
    // compute visible area
    var visibleAreaTop = contentRect.top;
    var visibleAreaBottom = Math.min(contentRect.bottom, platformHeight - keyboardHeight);
    // compute safe area
    var safeAreaTop = visibleAreaTop + 15;
    var safeAreaBottom = visibleAreaBottom * 0.5;
    // figure out if each edge of the input is within the safe area
    var distanceToBottom = safeAreaBottom - inputBottom;
    var distanceToTop = safeAreaTop - inputTop;
    // desiredScrollAmount is the negated distance to the safe area according to our calculations.
    var desiredScrollAmount = Math.round((distanceToBottom < 0)
        ? -distanceToBottom
        : (distanceToTop > 0)
            ? -distanceToTop
            : 0);
    // our calculations make some assumptions that aren't always true, like the keyboard being closed when an input
    // gets focus, so make sure we don't scroll the input above the visible area
    var scrollAmount = Math.min(desiredScrollAmount, inputTop - visibleAreaTop);
    var distance = Math.abs(scrollAmount);
    var duration = distance / SCROLL_ASSIST_SPEED;
    var scrollDuration = Math.min(400, Math.max(150, duration));
    return {
        scrollAmount: scrollAmount,
        scrollDuration: scrollDuration,
        scrollPadding: keyboardHeight,
        inputSafeY: -(inputTop - safeAreaTop) + 4
    };
};
var enableScrollAssist = function (componentEl, inputEl, contentEl, keyboardHeight) {
    var coord;
    var touchStart = function (ev) {
        coord = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["p"])(ev);
    };
    var touchEnd = function (ev) {
        // input cover touchend/mouseup
        if (!coord) {
            return;
        }
        // get where the touchend/mouseup ended
        var endCoord = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__["p"])(ev);
        // focus this input if the pointer hasn't moved XX pixels
        // and the input doesn't already have focus
        if (!hasPointerMoved(6, coord, endCoord) && !isFocused(inputEl)) {
            ev.preventDefault();
            ev.stopPropagation();
            // begin the input focus process
            jsSetFocus(componentEl, inputEl, contentEl, keyboardHeight);
        }
    };
    componentEl.addEventListener('touchstart', touchStart, true);
    componentEl.addEventListener('touchend', touchEnd, true);
    return function () {
        componentEl.removeEventListener('touchstart', touchStart, true);
        componentEl.removeEventListener('touchend', touchEnd, true);
    };
};
var jsSetFocus = function (componentEl, inputEl, contentEl, keyboardHeight) {
    var scrollData = getScrollData(componentEl, contentEl, keyboardHeight);
    if (Math.abs(scrollData.scrollAmount) < 4) {
        // the text input is in a safe position that doesn't
        // require it to be scrolled into view, just set focus now
        inputEl.focus();
        return;
    }
    // temporarily move the focus to the focus holder so the browser
    // doesn't freak out while it's trying to get the input in place
    // at this point the native text input still does not have focus
    relocateInput(componentEl, inputEl, true, scrollData.inputSafeY);
    inputEl.focus();
    // scroll the input into place
    contentEl.scrollByPoint(0, scrollData.scrollAmount, scrollData.scrollDuration).then(function () {
        // the scroll view is in the correct position now
        // give the native text input focus
        relocateInput(componentEl, inputEl, false, scrollData.inputSafeY);
        // ensure this is the focused input
        inputEl.focus();
    });
};
var hasPointerMoved = function (threshold, startCoord, endCoord) {
    if (startCoord && endCoord) {
        var deltaX = (startCoord.x - endCoord.x);
        var deltaY = (startCoord.y - endCoord.y);
        var distance = deltaX * deltaX + deltaY * deltaY;
        return distance > (threshold * threshold);
    }
    return false;
};
var PADDING_TIMER_KEY = '$ionPaddingTimer';
var enableScrollPadding = function (keyboardHeight) {
    var doc = document;
    var onFocusin = function (ev) {
        setScrollPadding(ev.target, keyboardHeight);
    };
    var onFocusout = function (ev) {
        setScrollPadding(ev.target, 0);
    };
    doc.addEventListener('focusin', onFocusin);
    doc.addEventListener('focusout', onFocusout);
    return function () {
        doc.removeEventListener('focusin', onFocusin);
        doc.removeEventListener('focusout', onFocusout);
    };
};
var setScrollPadding = function (input, keyboardHeight) {
    if (input.tagName !== 'INPUT') {
        return;
    }
    if (input.parentElement && input.parentElement.tagName === 'ION-INPUT') {
        return;
    }
    if (input.parentElement &&
        input.parentElement.parentElement &&
        input.parentElement.parentElement.tagName === 'ION-SEARCHBAR') {
        return;
    }
    var el = input.closest('ion-content');
    if (el === null) {
        return;
    }
    var timer = el[PADDING_TIMER_KEY];
    if (timer) {
        clearTimeout(timer);
    }
    if (keyboardHeight > 0) {
        el.style.setProperty('--keyboard-offset', keyboardHeight + "px");
    }
    else {
        el[PADDING_TIMER_KEY] = setTimeout(function () {
            el.style.setProperty('--keyboard-offset', '0px');
        }, 120);
    }
};
var INPUT_BLURRING = true;
var SCROLL_PADDING = true;
var startInputShims = function (config) {
    var doc = document;
    var keyboardHeight = config.getNumber('keyboardHeight', 290);
    var scrollAssist = config.getBoolean('scrollAssist', true);
    var hideCaret = config.getBoolean('hideCaretOnScroll', true);
    var inputBlurring = config.getBoolean('inputBlurring', true);
    var scrollPadding = config.getBoolean('scrollPadding', true);
    var inputs = Array.from(doc.querySelectorAll('ion-input, ion-textarea'));
    var hideCaretMap = new WeakMap();
    var scrollAssistMap = new WeakMap();
    var registerInput = function (componentEl) {
        var inputEl = (componentEl.shadowRoot || componentEl).querySelector('input') || (componentEl.shadowRoot || componentEl).querySelector('textarea');
        var scrollEl = componentEl.closest('ion-content');
        if (!inputEl) {
            return;
        }
        if (!!scrollEl && hideCaret && !hideCaretMap.has(componentEl)) {
            var rmFn = enableHideCaretOnScroll(componentEl, inputEl, scrollEl);
            hideCaretMap.set(componentEl, rmFn);
        }
        if (!!scrollEl && scrollAssist && !scrollAssistMap.has(componentEl)) {
            var rmFn = enableScrollAssist(componentEl, inputEl, scrollEl, keyboardHeight);
            scrollAssistMap.set(componentEl, rmFn);
        }
    };
    var unregisterInput = function (componentEl) {
        if (hideCaret) {
            var fn = hideCaretMap.get(componentEl);
            if (fn) {
                fn();
            }
            hideCaretMap.delete(componentEl);
        }
        if (scrollAssist) {
            var fn = scrollAssistMap.get(componentEl);
            if (fn) {
                fn();
            }
            scrollAssistMap.delete(componentEl);
        }
    };
    if (inputBlurring && INPUT_BLURRING) {
        enableInputBlurring();
    }
    if (scrollPadding && SCROLL_PADDING) {
        enableScrollPadding(keyboardHeight);
    }
    // Input might be already loaded in the DOM before ion-device-hacks did.
    // At this point we need to look for all of the inputs not registered yet
    // and register them.
    for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
        var input = inputs_1[_i];
        registerInput(input);
    }
    doc.addEventListener('ionInputDidLoad', (function (ev) {
        registerInput(ev.detail);
    }));
    doc.addEventListener('ionInputDidUnload', (function (ev) {
        unregisterInput(ev.detail);
    }));
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lucHV0LXNoaW1zLWE0ZmM1M2FjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBMEQ7QUFDMUQ7QUFDQTtBQUNBLG9DQUFvQyxvQkFBb0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbURBQW1EO0FBQ2pGLGlDQUFpQyw4QkFBOEI7QUFDL0QsaUNBQWlDLCtCQUErQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4REFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4REFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHNCQUFzQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMkIiLCJmaWxlIjoiNS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwIGFzIHBvaW50ZXJDb29yZCB9IGZyb20gJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG52YXIgY2xvbmVNYXAgPSBuZXcgV2Vha01hcCgpO1xudmFyIHJlbG9jYXRlSW5wdXQgPSBmdW5jdGlvbiAoY29tcG9uZW50RWwsIGlucHV0RWwsIHNob3VsZFJlbG9jYXRlLCBpbnB1dFJlbGF0aXZlWSkge1xuICAgIGlmIChpbnB1dFJlbGF0aXZlWSA9PT0gdm9pZCAwKSB7IGlucHV0UmVsYXRpdmVZID0gMDsgfVxuICAgIGlmIChjbG9uZU1hcC5oYXMoY29tcG9uZW50RWwpID09PSBzaG91bGRSZWxvY2F0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzaG91bGRSZWxvY2F0ZSkge1xuICAgICAgICBhZGRDbG9uZShjb21wb25lbnRFbCwgaW5wdXRFbCwgaW5wdXRSZWxhdGl2ZVkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVtb3ZlQ2xvbmUoY29tcG9uZW50RWwsIGlucHV0RWwpO1xuICAgIH1cbn07XG52YXIgaXNGb2N1c2VkID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0ID09PSBpbnB1dC5nZXRSb290Tm9kZSgpLmFjdGl2ZUVsZW1lbnQ7XG59O1xudmFyIGFkZENsb25lID0gZnVuY3Rpb24gKGNvbXBvbmVudEVsLCBpbnB1dEVsLCBpbnB1dFJlbGF0aXZlWSkge1xuICAgIC8vIHRoaXMgYWxsb3dzIGZvciB0aGUgYWN0dWFsIGlucHV0IHRvIHJlY2VpdmUgdGhlIGZvY3VzIGZyb21cbiAgICAvLyB0aGUgdXNlcidzIHRvdWNoIGV2ZW50LCBidXQgYmVmb3JlIGl0IHJlY2VpdmVzIGZvY3VzLCBpdFxuICAgIC8vIG1vdmVzIHRoZSBhY3R1YWwgaW5wdXQgdG8gYSBsb2NhdGlvbiB0aGF0IHdpbGwgbm90IHNjcmV3XG4gICAgLy8gdXAgdGhlIGFwcCdzIGxheW91dCwgYW5kIGRvZXMgbm90IGFsbG93IHRoZSBuYXRpdmUgYnJvd3NlclxuICAgIC8vIHRvIGF0dGVtcHQgdG8gc2Nyb2xsIHRoZSBpbnB1dCBpbnRvIHBsYWNlIChtZXNzaW5nIHVwIGhlYWRlcnMvZm9vdGVycylcbiAgICAvLyB0aGUgY2xvbmVkIGlucHV0IGZpbGxzIHRoZSBhcmVhIG9mIHdoZXJlIG5hdGl2ZSBpbnB1dCBzaG91bGQgYmVcbiAgICAvLyB3aGlsZSB0aGUgbmF0aXZlIGlucHV0IGZha2VzIG91dCB0aGUgYnJvd3NlciBieSByZWxvY2F0aW5nIGl0c2VsZlxuICAgIC8vIGJlZm9yZSBpdCByZWNlaXZlcyB0aGUgYWN0dWFsIGZvY3VzIGV2ZW50XG4gICAgLy8gV2UgaGlkZSB0aGUgZm9jdXNlZCBpbnB1dCAod2l0aCB0aGUgdmlzaWJsZSBjYXJldCkgaW52aXNpYmxlIGJ5IG1ha2luZyBpdCBzY2FsZSgwKSxcbiAgICB2YXIgcGFyZW50RWwgPSBpbnB1dEVsLnBhcmVudE5vZGU7XG4gICAgLy8gRE9NIFdSSVRFU1xuICAgIHZhciBjbG9uZWRFbCA9IGlucHV0RWwuY2xvbmVOb2RlKGZhbHNlKTtcbiAgICBjbG9uZWRFbC5jbGFzc0xpc3QuYWRkKCdjbG9uZWQtaW5wdXQnKTtcbiAgICBjbG9uZWRFbC50YWJJbmRleCA9IC0xO1xuICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKGNsb25lZEVsKTtcbiAgICBjbG9uZU1hcC5zZXQoY29tcG9uZW50RWwsIGNsb25lZEVsKTtcbiAgICB2YXIgZG9jID0gY29tcG9uZW50RWwub3duZXJEb2N1bWVudDtcbiAgICB2YXIgdHggPSBkb2MuZGlyID09PSAncnRsJyA/IDk5OTkgOiAtOTk5OTtcbiAgICBjb21wb25lbnRFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIGlucHV0RWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChcIiArIHR4ICsgXCJweCxcIiArIGlucHV0UmVsYXRpdmVZICsgXCJweCwwKSBzY2FsZSgwKVwiO1xufTtcbnZhciByZW1vdmVDbG9uZSA9IGZ1bmN0aW9uIChjb21wb25lbnRFbCwgaW5wdXRFbCkge1xuICAgIHZhciBjbG9uZSA9IGNsb25lTWFwLmdldChjb21wb25lbnRFbCk7XG4gICAgaWYgKGNsb25lKSB7XG4gICAgICAgIGNsb25lTWFwLmRlbGV0ZShjb21wb25lbnRFbCk7XG4gICAgICAgIGNsb25lLnJlbW92ZSgpO1xuICAgIH1cbiAgICBjb21wb25lbnRFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJyc7XG4gICAgaW5wdXRFbC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbn07XG52YXIgZW5hYmxlSGlkZUNhcmV0T25TY3JvbGwgPSBmdW5jdGlvbiAoY29tcG9uZW50RWwsIGlucHV0RWwsIHNjcm9sbEVsKSB7XG4gICAgaWYgKCFzY3JvbGxFbCB8fCAhaW5wdXRFbCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm47IH07XG4gICAgfVxuICAgIHZhciBzY3JvbGxIaWRlQ2FyZXQgPSBmdW5jdGlvbiAoc2hvdWxkSGlkZUNhcmV0KSB7XG4gICAgICAgIGlmIChpc0ZvY3VzZWQoaW5wdXRFbCkpIHtcbiAgICAgICAgICAgIHJlbG9jYXRlSW5wdXQoY29tcG9uZW50RWwsIGlucHV0RWwsIHNob3VsZEhpZGVDYXJldCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBvbkJsdXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZWxvY2F0ZUlucHV0KGNvbXBvbmVudEVsLCBpbnB1dEVsLCBmYWxzZSk7IH07XG4gICAgdmFyIGhpZGVDYXJldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNjcm9sbEhpZGVDYXJldCh0cnVlKTsgfTtcbiAgICB2YXIgc2hvd0NhcmV0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2Nyb2xsSGlkZUNhcmV0KGZhbHNlKTsgfTtcbiAgICBzY3JvbGxFbC5hZGRFdmVudExpc3RlbmVyKCdpb25TY3JvbGxTdGFydCcsIGhpZGVDYXJldCk7XG4gICAgc2Nyb2xsRWwuYWRkRXZlbnRMaXN0ZW5lcignaW9uU2Nyb2xsRW5kJywgc2hvd0NhcmV0KTtcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNjcm9sbEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lvblNjcm9sbFN0YXJ0JywgaGlkZUNhcmV0KTtcbiAgICAgICAgc2Nyb2xsRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW9uU2Nyb2xsRW5kJywgc2hvd0NhcmV0KTtcbiAgICAgICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdpb25CbHVyJywgb25CbHVyKTtcbiAgICB9O1xufTtcbnZhciBTS0lQX1NFTEVDVE9SID0gJ2lucHV0LCB0ZXh0YXJlYSwgW25vLWJsdXJdJztcbnZhciBlbmFibGVJbnB1dEJsdXJyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBmb2N1c2VkID0gdHJ1ZTtcbiAgICB2YXIgZGlkU2Nyb2xsID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGRvY3VtZW50O1xuICAgIHZhciBvblNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlkU2Nyb2xsID0gdHJ1ZTtcbiAgICB9O1xuICAgIHZhciBvbkZvY3VzaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvY3VzZWQgPSB0cnVlO1xuICAgIH07XG4gICAgdmFyIG9uVG91Y2hlbmQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgLy8gaWYgYXBwIGRpZCBzY3JvbGwgcmV0dXJuIGVhcmx5XG4gICAgICAgIGlmIChkaWRTY3JvbGwpIHtcbiAgICAgICAgICAgIGRpZFNjcm9sbCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhY3RpdmUgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBvbmx5IGJsdXIgaWYgdGhlIGFjdGl2ZSBlbGVtZW50IGlzIGEgdGV4dC1pbnB1dCBvciBhIHRleHRhcmVhXG4gICAgICAgIGlmIChhY3RpdmUubWF0Y2hlcyhTS0lQX1NFTEVDVE9SKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBzZWxlY3RlZCB0YXJnZXQgaXMgdGhlIGFjdGl2ZSBlbGVtZW50LCBkbyBub3QgYmx1clxuICAgICAgICB2YXIgdGFwcGVkID0gZXYudGFyZ2V0O1xuICAgICAgICBpZiAodGFwcGVkID09PSBhY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFwcGVkLm1hdGNoZXMoU0tJUF9TRUxFQ1RPUikgfHwgdGFwcGVkLmNsb3Nlc3QoU0tJUF9TRUxFQ1RPUikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb2N1c2VkID0gZmFsc2U7XG4gICAgICAgIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgd2F5LCB3aHkgNTBtcz9cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWZvY3VzZWQpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmUuYmx1cigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCA1MCk7XG4gICAgfTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignaW9uU2Nyb2xsU3RhcnQnLCBvblNjcm9sbCk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBvbkZvY3VzaW4sIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hlbmQsIGZhbHNlKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW9uU2Nyb2xsU3RhcnQnLCBvblNjcm9sbCwgdHJ1ZSk7XG4gICAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgb25Gb2N1c2luLCB0cnVlKTtcbiAgICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaGVuZCwgZmFsc2UpO1xuICAgIH07XG59O1xudmFyIFNDUk9MTF9BU1NJU1RfU1BFRUQgPSAwLjM7XG52YXIgZ2V0U2Nyb2xsRGF0YSA9IGZ1bmN0aW9uIChjb21wb25lbnRFbCwgY29udGVudEVsLCBrZXlib2FyZEhlaWdodCkge1xuICAgIHZhciBpdGVtRWwgPSBjb21wb25lbnRFbC5jbG9zZXN0KCdpb24taXRlbSxbaW9uLWl0ZW1dJykgfHwgY29tcG9uZW50RWw7XG4gICAgcmV0dXJuIGNhbGNTY3JvbGxEYXRhKGl0ZW1FbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgY29udGVudEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBrZXlib2FyZEhlaWdodCwgY29tcG9uZW50RWwub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5pbm5lckhlaWdodCk7XG59O1xudmFyIGNhbGNTY3JvbGxEYXRhID0gZnVuY3Rpb24gKGlucHV0UmVjdCwgY29udGVudFJlY3QsIGtleWJvYXJkSGVpZ2h0LCBwbGF0Zm9ybUhlaWdodCkge1xuICAgIC8vIGNvbXB1dGUgaW5wdXQncyBZIHZhbHVlcyByZWxhdGl2ZSB0byB0aGUgYm9keVxuICAgIHZhciBpbnB1dFRvcCA9IGlucHV0UmVjdC50b3A7XG4gICAgdmFyIGlucHV0Qm90dG9tID0gaW5wdXRSZWN0LmJvdHRvbTtcbiAgICAvLyBjb21wdXRlIHZpc2libGUgYXJlYVxuICAgIHZhciB2aXNpYmxlQXJlYVRvcCA9IGNvbnRlbnRSZWN0LnRvcDtcbiAgICB2YXIgdmlzaWJsZUFyZWFCb3R0b20gPSBNYXRoLm1pbihjb250ZW50UmVjdC5ib3R0b20sIHBsYXRmb3JtSGVpZ2h0IC0ga2V5Ym9hcmRIZWlnaHQpO1xuICAgIC8vIGNvbXB1dGUgc2FmZSBhcmVhXG4gICAgdmFyIHNhZmVBcmVhVG9wID0gdmlzaWJsZUFyZWFUb3AgKyAxNTtcbiAgICB2YXIgc2FmZUFyZWFCb3R0b20gPSB2aXNpYmxlQXJlYUJvdHRvbSAqIDAuNTtcbiAgICAvLyBmaWd1cmUgb3V0IGlmIGVhY2ggZWRnZSBvZiB0aGUgaW5wdXQgaXMgd2l0aGluIHRoZSBzYWZlIGFyZWFcbiAgICB2YXIgZGlzdGFuY2VUb0JvdHRvbSA9IHNhZmVBcmVhQm90dG9tIC0gaW5wdXRCb3R0b207XG4gICAgdmFyIGRpc3RhbmNlVG9Ub3AgPSBzYWZlQXJlYVRvcCAtIGlucHV0VG9wO1xuICAgIC8vIGRlc2lyZWRTY3JvbGxBbW91bnQgaXMgdGhlIG5lZ2F0ZWQgZGlzdGFuY2UgdG8gdGhlIHNhZmUgYXJlYSBhY2NvcmRpbmcgdG8gb3VyIGNhbGN1bGF0aW9ucy5cbiAgICB2YXIgZGVzaXJlZFNjcm9sbEFtb3VudCA9IE1hdGgucm91bmQoKGRpc3RhbmNlVG9Cb3R0b20gPCAwKVxuICAgICAgICA/IC1kaXN0YW5jZVRvQm90dG9tXG4gICAgICAgIDogKGRpc3RhbmNlVG9Ub3AgPiAwKVxuICAgICAgICAgICAgPyAtZGlzdGFuY2VUb1RvcFxuICAgICAgICAgICAgOiAwKTtcbiAgICAvLyBvdXIgY2FsY3VsYXRpb25zIG1ha2Ugc29tZSBhc3N1bXB0aW9ucyB0aGF0IGFyZW4ndCBhbHdheXMgdHJ1ZSwgbGlrZSB0aGUga2V5Ym9hcmQgYmVpbmcgY2xvc2VkIHdoZW4gYW4gaW5wdXRcbiAgICAvLyBnZXRzIGZvY3VzLCBzbyBtYWtlIHN1cmUgd2UgZG9uJ3Qgc2Nyb2xsIHRoZSBpbnB1dCBhYm92ZSB0aGUgdmlzaWJsZSBhcmVhXG4gICAgdmFyIHNjcm9sbEFtb3VudCA9IE1hdGgubWluKGRlc2lyZWRTY3JvbGxBbW91bnQsIGlucHV0VG9wIC0gdmlzaWJsZUFyZWFUb3ApO1xuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguYWJzKHNjcm9sbEFtb3VudCk7XG4gICAgdmFyIGR1cmF0aW9uID0gZGlzdGFuY2UgLyBTQ1JPTExfQVNTSVNUX1NQRUVEO1xuICAgIHZhciBzY3JvbGxEdXJhdGlvbiA9IE1hdGgubWluKDQwMCwgTWF0aC5tYXgoMTUwLCBkdXJhdGlvbikpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNjcm9sbEFtb3VudDogc2Nyb2xsQW1vdW50LFxuICAgICAgICBzY3JvbGxEdXJhdGlvbjogc2Nyb2xsRHVyYXRpb24sXG4gICAgICAgIHNjcm9sbFBhZGRpbmc6IGtleWJvYXJkSGVpZ2h0LFxuICAgICAgICBpbnB1dFNhZmVZOiAtKGlucHV0VG9wIC0gc2FmZUFyZWFUb3ApICsgNFxuICAgIH07XG59O1xudmFyIGVuYWJsZVNjcm9sbEFzc2lzdCA9IGZ1bmN0aW9uIChjb21wb25lbnRFbCwgaW5wdXRFbCwgY29udGVudEVsLCBrZXlib2FyZEhlaWdodCkge1xuICAgIHZhciBjb29yZDtcbiAgICB2YXIgdG91Y2hTdGFydCA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICBjb29yZCA9IHBvaW50ZXJDb29yZChldik7XG4gICAgfTtcbiAgICB2YXIgdG91Y2hFbmQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgLy8gaW5wdXQgY292ZXIgdG91Y2hlbmQvbW91c2V1cFxuICAgICAgICBpZiAoIWNvb3JkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZ2V0IHdoZXJlIHRoZSB0b3VjaGVuZC9tb3VzZXVwIGVuZGVkXG4gICAgICAgIHZhciBlbmRDb29yZCA9IHBvaW50ZXJDb29yZChldik7XG4gICAgICAgIC8vIGZvY3VzIHRoaXMgaW5wdXQgaWYgdGhlIHBvaW50ZXIgaGFzbid0IG1vdmVkIFhYIHBpeGVsc1xuICAgICAgICAvLyBhbmQgdGhlIGlucHV0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlIGZvY3VzXG4gICAgICAgIGlmICghaGFzUG9pbnRlck1vdmVkKDYsIGNvb3JkLCBlbmRDb29yZCkgJiYgIWlzRm9jdXNlZChpbnB1dEVsKSkge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgLy8gYmVnaW4gdGhlIGlucHV0IGZvY3VzIHByb2Nlc3NcbiAgICAgICAgICAgIGpzU2V0Rm9jdXMoY29tcG9uZW50RWwsIGlucHV0RWwsIGNvbnRlbnRFbCwga2V5Ym9hcmRIZWlnaHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb21wb25lbnRFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG91Y2hTdGFydCwgdHJ1ZSk7XG4gICAgY29tcG9uZW50RWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaEVuZCwgdHJ1ZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29tcG9uZW50RWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvdWNoU3RhcnQsIHRydWUpO1xuICAgICAgICBjb21wb25lbnRFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoRW5kLCB0cnVlKTtcbiAgICB9O1xufTtcbnZhciBqc1NldEZvY3VzID0gZnVuY3Rpb24gKGNvbXBvbmVudEVsLCBpbnB1dEVsLCBjb250ZW50RWwsIGtleWJvYXJkSGVpZ2h0KSB7XG4gICAgdmFyIHNjcm9sbERhdGEgPSBnZXRTY3JvbGxEYXRhKGNvbXBvbmVudEVsLCBjb250ZW50RWwsIGtleWJvYXJkSGVpZ2h0KTtcbiAgICBpZiAoTWF0aC5hYnMoc2Nyb2xsRGF0YS5zY3JvbGxBbW91bnQpIDwgNCkge1xuICAgICAgICAvLyB0aGUgdGV4dCBpbnB1dCBpcyBpbiBhIHNhZmUgcG9zaXRpb24gdGhhdCBkb2Vzbid0XG4gICAgICAgIC8vIHJlcXVpcmUgaXQgdG8gYmUgc2Nyb2xsZWQgaW50byB2aWV3LCBqdXN0IHNldCBmb2N1cyBub3dcbiAgICAgICAgaW5wdXRFbC5mb2N1cygpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHRlbXBvcmFyaWx5IG1vdmUgdGhlIGZvY3VzIHRvIHRoZSBmb2N1cyBob2xkZXIgc28gdGhlIGJyb3dzZXJcbiAgICAvLyBkb2Vzbid0IGZyZWFrIG91dCB3aGlsZSBpdCdzIHRyeWluZyB0byBnZXQgdGhlIGlucHV0IGluIHBsYWNlXG4gICAgLy8gYXQgdGhpcyBwb2ludCB0aGUgbmF0aXZlIHRleHQgaW5wdXQgc3RpbGwgZG9lcyBub3QgaGF2ZSBmb2N1c1xuICAgIHJlbG9jYXRlSW5wdXQoY29tcG9uZW50RWwsIGlucHV0RWwsIHRydWUsIHNjcm9sbERhdGEuaW5wdXRTYWZlWSk7XG4gICAgaW5wdXRFbC5mb2N1cygpO1xuICAgIC8vIHNjcm9sbCB0aGUgaW5wdXQgaW50byBwbGFjZVxuICAgIGNvbnRlbnRFbC5zY3JvbGxCeVBvaW50KDAsIHNjcm9sbERhdGEuc2Nyb2xsQW1vdW50LCBzY3JvbGxEYXRhLnNjcm9sbER1cmF0aW9uKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gdGhlIHNjcm9sbCB2aWV3IGlzIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uIG5vd1xuICAgICAgICAvLyBnaXZlIHRoZSBuYXRpdmUgdGV4dCBpbnB1dCBmb2N1c1xuICAgICAgICByZWxvY2F0ZUlucHV0KGNvbXBvbmVudEVsLCBpbnB1dEVsLCBmYWxzZSwgc2Nyb2xsRGF0YS5pbnB1dFNhZmVZKTtcbiAgICAgICAgLy8gZW5zdXJlIHRoaXMgaXMgdGhlIGZvY3VzZWQgaW5wdXRcbiAgICAgICAgaW5wdXRFbC5mb2N1cygpO1xuICAgIH0pO1xufTtcbnZhciBoYXNQb2ludGVyTW92ZWQgPSBmdW5jdGlvbiAodGhyZXNob2xkLCBzdGFydENvb3JkLCBlbmRDb29yZCkge1xuICAgIGlmIChzdGFydENvb3JkICYmIGVuZENvb3JkKSB7XG4gICAgICAgIHZhciBkZWx0YVggPSAoc3RhcnRDb29yZC54IC0gZW5kQ29vcmQueCk7XG4gICAgICAgIHZhciBkZWx0YVkgPSAoc3RhcnRDb29yZC55IC0gZW5kQ29vcmQueSk7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IGRlbHRhWCAqIGRlbHRhWCArIGRlbHRhWSAqIGRlbHRhWTtcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlID4gKHRocmVzaG9sZCAqIHRocmVzaG9sZCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG52YXIgUEFERElOR19USU1FUl9LRVkgPSAnJGlvblBhZGRpbmdUaW1lcic7XG52YXIgZW5hYmxlU2Nyb2xsUGFkZGluZyA9IGZ1bmN0aW9uIChrZXlib2FyZEhlaWdodCkge1xuICAgIHZhciBkb2MgPSBkb2N1bWVudDtcbiAgICB2YXIgb25Gb2N1c2luID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIHNldFNjcm9sbFBhZGRpbmcoZXYudGFyZ2V0LCBrZXlib2FyZEhlaWdodCk7XG4gICAgfTtcbiAgICB2YXIgb25Gb2N1c291dCA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICBzZXRTY3JvbGxQYWRkaW5nKGV2LnRhcmdldCwgMCk7XG4gICAgfTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIG9uRm9jdXNpbik7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0Jywgb25Gb2N1c291dCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBvbkZvY3VzaW4pO1xuICAgICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBvbkZvY3Vzb3V0KTtcbiAgICB9O1xufTtcbnZhciBzZXRTY3JvbGxQYWRkaW5nID0gZnVuY3Rpb24gKGlucHV0LCBrZXlib2FyZEhlaWdodCkge1xuICAgIGlmIChpbnB1dC50YWdOYW1lICE9PSAnSU5QVVQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlucHV0LnBhcmVudEVsZW1lbnQgJiYgaW5wdXQucGFyZW50RWxlbWVudC50YWdOYW1lID09PSAnSU9OLUlOUFVUJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbnB1dC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJlxuICAgICAgICBpbnB1dC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQudGFnTmFtZSA9PT0gJ0lPTi1TRUFSQ0hCQVInKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGVsID0gaW5wdXQuY2xvc2VzdCgnaW9uLWNvbnRlbnQnKTtcbiAgICBpZiAoZWwgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZXIgPSBlbFtQQURESU5HX1RJTUVSX0tFWV07XG4gICAgaWYgKHRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgfVxuICAgIGlmIChrZXlib2FyZEhlaWdodCA+IDApIHtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJy0ta2V5Ym9hcmQtb2Zmc2V0Jywga2V5Ym9hcmRIZWlnaHQgKyBcInB4XCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWxbUEFERElOR19USU1FUl9LRVldID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1rZXlib2FyZC1vZmZzZXQnLCAnMHB4Jyk7XG4gICAgICAgIH0sIDEyMCk7XG4gICAgfVxufTtcbnZhciBJTlBVVF9CTFVSUklORyA9IHRydWU7XG52YXIgU0NST0xMX1BBRERJTkcgPSB0cnVlO1xudmFyIHN0YXJ0SW5wdXRTaGltcyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICB2YXIgZG9jID0gZG9jdW1lbnQ7XG4gICAgdmFyIGtleWJvYXJkSGVpZ2h0ID0gY29uZmlnLmdldE51bWJlcigna2V5Ym9hcmRIZWlnaHQnLCAyOTApO1xuICAgIHZhciBzY3JvbGxBc3Npc3QgPSBjb25maWcuZ2V0Qm9vbGVhbignc2Nyb2xsQXNzaXN0JywgdHJ1ZSk7XG4gICAgdmFyIGhpZGVDYXJldCA9IGNvbmZpZy5nZXRCb29sZWFuKCdoaWRlQ2FyZXRPblNjcm9sbCcsIHRydWUpO1xuICAgIHZhciBpbnB1dEJsdXJyaW5nID0gY29uZmlnLmdldEJvb2xlYW4oJ2lucHV0Qmx1cnJpbmcnLCB0cnVlKTtcbiAgICB2YXIgc2Nyb2xsUGFkZGluZyA9IGNvbmZpZy5nZXRCb29sZWFuKCdzY3JvbGxQYWRkaW5nJywgdHJ1ZSk7XG4gICAgdmFyIGlucHV0cyA9IEFycmF5LmZyb20oZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1pbnB1dCwgaW9uLXRleHRhcmVhJykpO1xuICAgIHZhciBoaWRlQ2FyZXRNYXAgPSBuZXcgV2Vha01hcCgpO1xuICAgIHZhciBzY3JvbGxBc3Npc3RNYXAgPSBuZXcgV2Vha01hcCgpO1xuICAgIHZhciByZWdpc3RlcklucHV0ID0gZnVuY3Rpb24gKGNvbXBvbmVudEVsKSB7XG4gICAgICAgIHZhciBpbnB1dEVsID0gKGNvbXBvbmVudEVsLnNoYWRvd1Jvb3QgfHwgY29tcG9uZW50RWwpLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykgfHwgKGNvbXBvbmVudEVsLnNoYWRvd1Jvb3QgfHwgY29tcG9uZW50RWwpLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XG4gICAgICAgIHZhciBzY3JvbGxFbCA9IGNvbXBvbmVudEVsLmNsb3Nlc3QoJ2lvbi1jb250ZW50Jyk7XG4gICAgICAgIGlmICghaW5wdXRFbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghIXNjcm9sbEVsICYmIGhpZGVDYXJldCAmJiAhaGlkZUNhcmV0TWFwLmhhcyhjb21wb25lbnRFbCkpIHtcbiAgICAgICAgICAgIHZhciBybUZuID0gZW5hYmxlSGlkZUNhcmV0T25TY3JvbGwoY29tcG9uZW50RWwsIGlucHV0RWwsIHNjcm9sbEVsKTtcbiAgICAgICAgICAgIGhpZGVDYXJldE1hcC5zZXQoY29tcG9uZW50RWwsIHJtRm4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghIXNjcm9sbEVsICYmIHNjcm9sbEFzc2lzdCAmJiAhc2Nyb2xsQXNzaXN0TWFwLmhhcyhjb21wb25lbnRFbCkpIHtcbiAgICAgICAgICAgIHZhciBybUZuID0gZW5hYmxlU2Nyb2xsQXNzaXN0KGNvbXBvbmVudEVsLCBpbnB1dEVsLCBzY3JvbGxFbCwga2V5Ym9hcmRIZWlnaHQpO1xuICAgICAgICAgICAgc2Nyb2xsQXNzaXN0TWFwLnNldChjb21wb25lbnRFbCwgcm1Gbik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciB1bnJlZ2lzdGVySW5wdXQgPSBmdW5jdGlvbiAoY29tcG9uZW50RWwpIHtcbiAgICAgICAgaWYgKGhpZGVDYXJldCkge1xuICAgICAgICAgICAgdmFyIGZuID0gaGlkZUNhcmV0TWFwLmdldChjb21wb25lbnRFbCk7XG4gICAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGlkZUNhcmV0TWFwLmRlbGV0ZShjb21wb25lbnRFbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNjcm9sbEFzc2lzdCkge1xuICAgICAgICAgICAgdmFyIGZuID0gc2Nyb2xsQXNzaXN0TWFwLmdldChjb21wb25lbnRFbCk7XG4gICAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2Nyb2xsQXNzaXN0TWFwLmRlbGV0ZShjb21wb25lbnRFbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChpbnB1dEJsdXJyaW5nICYmIElOUFVUX0JMVVJSSU5HKSB7XG4gICAgICAgIGVuYWJsZUlucHV0Qmx1cnJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHNjcm9sbFBhZGRpbmcgJiYgU0NST0xMX1BBRERJTkcpIHtcbiAgICAgICAgZW5hYmxlU2Nyb2xsUGFkZGluZyhrZXlib2FyZEhlaWdodCk7XG4gICAgfVxuICAgIC8vIElucHV0IG1pZ2h0IGJlIGFscmVhZHkgbG9hZGVkIGluIHRoZSBET00gYmVmb3JlIGlvbi1kZXZpY2UtaGFja3MgZGlkLlxuICAgIC8vIEF0IHRoaXMgcG9pbnQgd2UgbmVlZCB0byBsb29rIGZvciBhbGwgb2YgdGhlIGlucHV0cyBub3QgcmVnaXN0ZXJlZCB5ZXRcbiAgICAvLyBhbmQgcmVnaXN0ZXIgdGhlbS5cbiAgICBmb3IgKHZhciBfaSA9IDAsIGlucHV0c18xID0gaW5wdXRzOyBfaSA8IGlucHV0c18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaW5wdXQgPSBpbnB1dHNfMVtfaV07XG4gICAgICAgIHJlZ2lzdGVySW5wdXQoaW5wdXQpO1xuICAgIH1cbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignaW9uSW5wdXREaWRMb2FkJywgKGZ1bmN0aW9uIChldikge1xuICAgICAgICByZWdpc3RlcklucHV0KGV2LmRldGFpbCk7XG4gICAgfSkpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdpb25JbnB1dERpZFVubG9hZCcsIChmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgdW5yZWdpc3RlcklucHV0KGV2LmRldGFpbCk7XG4gICAgfSkpO1xufTtcbmV4cG9ydCB7IHN0YXJ0SW5wdXRTaGltcyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==