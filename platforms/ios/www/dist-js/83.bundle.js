(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-ripple-effect.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-ripple-effect.entry.js ***!
  \**************************************************************************/
/*! exports provided: ion_ripple_effect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_ripple_effect", function() { return RippleEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");



var RippleEffect = /** @class */ (function () {
    function class_1(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        /**
         * Sets the type of ripple-effect:
         *
         * - `bounded`: the ripple effect expands from the user's click position
         * - `unbounded`: the ripple effect expands from the center of the button and overflows the container.
         *
         * NOTE: Surfaces for bounded ripples should have the overflow property set to hidden,
         * while surfaces for unbounded ripples should have it set to visible.
         */
        this.type = 'bounded';
    }
    /**
     * Adds the ripple effect to the parent element.
     *
     * @param x The horizontal coordinate of where the ripple should start.
     * @param y The vertical coordinate of where the ripple should start.
     */
    class_1.prototype.addRipple = function (x, y) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["f"])(function () {
                            var rect = _this.el.getBoundingClientRect();
                            var width = rect.width;
                            var height = rect.height;
                            var hypotenuse = Math.sqrt(width * width + height * height);
                            var maxDim = Math.max(height, width);
                            var maxRadius = _this.unbounded ? maxDim : hypotenuse + PADDING;
                            var initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
                            var finalScale = maxRadius / initialSize;
                            var posX = x - rect.left;
                            var posY = y - rect.top;
                            if (_this.unbounded) {
                                posX = width * 0.5;
                                posY = height * 0.5;
                            }
                            var styleX = posX - initialSize * 0.5;
                            var styleY = posY - initialSize * 0.5;
                            var moveX = width * 0.5 - posX;
                            var moveY = height * 0.5 - posY;
                            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["w"])(function () {
                                var div = document.createElement('div');
                                div.classList.add('ripple-effect');
                                var style = div.style;
                                style.top = styleY + 'px';
                                style.left = styleX + 'px';
                                style.width = style.height = initialSize + 'px';
                                style.setProperty('--final-scale', "" + finalScale);
                                style.setProperty('--translate-end', moveX + "px, " + moveY + "px");
                                var container = _this.el.shadowRoot || _this.el;
                                container.appendChild(div);
                                setTimeout(function () {
                                    resolve(function () {
                                        removeRipple(div);
                                    });
                                }, 225 + 100);
                            });
                        });
                    })];
            });
        });
    };
    Object.defineProperty(class_1.prototype, "unbounded", {
        get: function () {
            return this.type === 'unbounded';
        },
        enumerable: true,
        configurable: true
    });
    class_1.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { role: "presentation", class: (_a = {},
                _a[mode] = true,
                _a['unbounded'] = this.unbounded,
                _a) }));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;will-change:transform,opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:fadeOutAnimation .15s forwards;animation:fadeOutAnimation .15s forwards}\@-webkit-keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@-webkit-keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@-webkit-keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}\@keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var removeRipple = function (ripple) {
    ripple.classList.add('fade-out');
    setTimeout(function () {
        ripple.remove();
    }, 200);
};
var PADDING = 10;
var INITIAL_ORIGIN_SCALE = 0.5;



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1yaXBwbGUtZWZmZWN0LmVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQzJGO0FBQzVHO0FBQzlCO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVEQUFTO0FBQ3hCO0FBQ0EsbUJBQW1CLHlEQUFXO0FBQzlCO0FBQ0Esd0JBQXdCLDJEQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyREFBUztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxpQ0FBaUM7QUFDakMsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQVU7QUFDN0IsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyxzQ0FBc0M7QUFDL0Q7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsMEJBQTBCLFFBQVEsMkRBQVUsT0FBTyxFQUFFO0FBQ3JEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZUFBZSxPQUFPLFFBQVEsTUFBTSxTQUFTLGtCQUFrQixlQUFlLG9CQUFvQixrQkFBa0IsMEJBQTBCLGVBQWUsa0JBQWtCLGtCQUFrQiw4QkFBOEIsY0FBYyxlQUFlLFVBQVUsK0VBQStFLHVFQUF1RSw4QkFBOEIsb0JBQW9CLFVBQVUsOEVBQThFLHNFQUFzRSxpREFBaUQseUNBQXlDLG9DQUFvQyxHQUFHLDBEQUEwRCxrREFBa0QsMkJBQTJCLG1CQUFtQixHQUFHLDhFQUE4RSx1RUFBdUUsNEJBQTRCLEdBQUcsMERBQTBELGtEQUFrRCwyQkFBMkIsbUJBQW1CLEdBQUcsOEVBQThFLHVFQUF1RSxvQ0FBb0MsR0FBRyx5Q0FBeUMsaUNBQWlDLFVBQVUsR0FBRyxhQUFhLDRCQUE0QixHQUFHLHlDQUF5QyxpQ0FBaUMsVUFBVSxHQUFHLGFBQWEscUNBQXFDLEdBQUcseUNBQXlDLGlDQUFpQyxZQUFZLEdBQUcsV0FBVyw2QkFBNkIsR0FBRyx5Q0FBeUMsaUNBQWlDLFlBQVksR0FBRyxXQUFXLEVBQUUsRUFBRTtBQUM1NkQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDNkMiLCJmaWxlIjoiODMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBmIGFzIHJlYWRUYXNrLCB3IGFzIHdyaXRlVGFzaywgYyBhcyBnZXRJb25Nb2RlLCBoLCBlIGFzIGdldEVsZW1lbnQsIEggYXMgSG9zdCB9IGZyb20gJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbnZhciBSaXBwbGVFZmZlY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMShob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSB0eXBlIG9mIHJpcHBsZS1lZmZlY3Q6XG4gICAgICAgICAqXG4gICAgICAgICAqIC0gYGJvdW5kZWRgOiB0aGUgcmlwcGxlIGVmZmVjdCBleHBhbmRzIGZyb20gdGhlIHVzZXIncyBjbGljayBwb3NpdGlvblxuICAgICAgICAgKiAtIGB1bmJvdW5kZWRgOiB0aGUgcmlwcGxlIGVmZmVjdCBleHBhbmRzIGZyb20gdGhlIGNlbnRlciBvZiB0aGUgYnV0dG9uIGFuZCBvdmVyZmxvd3MgdGhlIGNvbnRhaW5lci5cbiAgICAgICAgICpcbiAgICAgICAgICogTk9URTogU3VyZmFjZXMgZm9yIGJvdW5kZWQgcmlwcGxlcyBzaG91bGQgaGF2ZSB0aGUgb3ZlcmZsb3cgcHJvcGVydHkgc2V0IHRvIGhpZGRlbixcbiAgICAgICAgICogd2hpbGUgc3VyZmFjZXMgZm9yIHVuYm91bmRlZCByaXBwbGVzIHNob3VsZCBoYXZlIGl0IHNldCB0byB2aXNpYmxlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50eXBlID0gJ2JvdW5kZWQnO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSByaXBwbGUgZWZmZWN0IHRvIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB4IFRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUgb2Ygd2hlcmUgdGhlIHJpcHBsZSBzaG91bGQgc3RhcnQuXG4gICAgICogQHBhcmFtIHkgVGhlIHZlcnRpY2FsIGNvb3JkaW5hdGUgb2Ygd2hlcmUgdGhlIHJpcHBsZSBzaG91bGQgc3RhcnQuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuYWRkUmlwcGxlID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjdCA9IF90aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KHdpZHRoICogd2lkdGggKyBoZWlnaHQgKiBoZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXhEaW0gPSBNYXRoLm1heChoZWlnaHQsIHdpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4UmFkaXVzID0gX3RoaXMudW5ib3VuZGVkID8gbWF4RGltIDogaHlwb3RlbnVzZSArIFBBRERJTkc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluaXRpYWxTaXplID0gTWF0aC5mbG9vcihtYXhEaW0gKiBJTklUSUFMX09SSUdJTl9TQ0FMRSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbmFsU2NhbGUgPSBtYXhSYWRpdXMgLyBpbml0aWFsU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zWCA9IHggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc1kgPSB5IC0gcmVjdC50b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnVuYm91bmRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NYID0gd2lkdGggKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1kgPSBoZWlnaHQgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHlsZVggPSBwb3NYIC0gaW5pdGlhbFNpemUgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlWSA9IHBvc1kgLSBpbml0aWFsU2l6ZSAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW92ZVggPSB3aWR0aCAqIDAuNSAtIHBvc1g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vdmVZID0gaGVpZ2h0ICogMC41IC0gcG9zWTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0ZVRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdyaXBwbGUtZWZmZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IGRpdi5zdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUudG9wID0gc3R5bGVZICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUubGVmdCA9IHN0eWxlWCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLndpZHRoID0gc3R5bGUuaGVpZ2h0ID0gaW5pdGlhbFNpemUgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5zZXRQcm9wZXJ0eSgnLS1maW5hbC1zY2FsZScsIFwiXCIgKyBmaW5hbFNjYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUuc2V0UHJvcGVydHkoJy0tdHJhbnNsYXRlLWVuZCcsIG1vdmVYICsgXCJweCwgXCIgKyBtb3ZlWSArIFwicHhcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBfdGhpcy5lbC5zaGFkb3dSb290IHx8IF90aGlzLmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVSaXBwbGUoZGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAyMjUgKyAxMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJ1bmJvdW5kZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICd1bmJvdW5kZWQnO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyByb2xlOiBcInByZXNlbnRhdGlvblwiLCBjbGFzczogKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hWyd1bmJvdW5kZWQnXSA9IHRoaXMudW5ib3VuZGVkLFxuICAgICAgICAgICAgICAgIF9hKSB9KSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMS5wcm90b3R5cGUsIFwiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIjpob3N0e2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO2NvbnRhaW46c3RyaWN0O3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLnVuYm91bmRlZCl7Y29udGFpbjpsYXlvdXQgc2l6ZSBzdHlsZX0ucmlwcGxlLWVmZmVjdHtib3JkZXItcmFkaXVzOjUwJTtwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtjb2xvcjppbmhlcml0O2NvbnRhaW46c3RyaWN0O29wYWNpdHk6MDstd2Via2l0LWFuaW1hdGlvbjpyaXBwbGVBbmltYXRpb24gMjI1bXMgZm9yd2FyZHMsZmFkZUluQW5pbWF0aW9uIDc1bXMgZm9yd2FyZHM7YW5pbWF0aW9uOnJpcHBsZUFuaW1hdGlvbiAyMjVtcyBmb3J3YXJkcyxmYWRlSW5BbmltYXRpb24gNzVtcyBmb3J3YXJkczt3aWxsLWNoYW5nZTp0cmFuc2Zvcm0sb3BhY2l0eTtwb2ludGVyLWV2ZW50czpub25lfS5mYWRlLW91dHstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tdHJhbnNsYXRlLWVuZCkpIHNjYWxlKHZhcigtLWZpbmFsLXNjYWxlLDEpKTt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLXRyYW5zbGF0ZS1lbmQpKSBzY2FsZSh2YXIoLS1maW5hbC1zY2FsZSwxKSk7LXdlYmtpdC1hbmltYXRpb246ZmFkZU91dEFuaW1hdGlvbiAuMTVzIGZvcndhcmRzO2FuaW1hdGlvbjpmYWRlT3V0QW5pbWF0aW9uIC4xNXMgZm9yd2FyZHN9XFxALXdlYmtpdC1rZXlmcmFtZXMgcmlwcGxlQW5pbWF0aW9uezAley13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNCwwLC4yLDEpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tdHJhbnNsYXRlLWVuZCkpIHNjYWxlKHZhcigtLWZpbmFsLXNjYWxlLDEpKTt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLXRyYW5zbGF0ZS1lbmQpKSBzY2FsZSh2YXIoLS1maW5hbC1zY2FsZSwxKSl9fVxcQGtleWZyYW1lcyByaXBwbGVBbmltYXRpb257MCV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNCwwLC4yLDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS10cmFuc2xhdGUtZW5kKSkgc2NhbGUodmFyKC0tZmluYWwtc2NhbGUsMSkpO3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tdHJhbnNsYXRlLWVuZCkpIHNjYWxlKHZhcigtLWZpbmFsLXNjYWxlLDEpKX19XFxALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluQW5pbWF0aW9uezAley13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7b3BhY2l0eTowfXRve29wYWNpdHk6LjE2fX1cXEBrZXlmcmFtZXMgZmFkZUluQW5pbWF0aW9uezAley13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7b3BhY2l0eTowfXRve29wYWNpdHk6LjE2fX1cXEAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0QW5pbWF0aW9uezAley13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7b3BhY2l0eTouMTZ9dG97b3BhY2l0eTowfX1cXEBrZXlmcmFtZXMgZmFkZU91dEFuaW1hdGlvbnswJXstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO29wYWNpdHk6LjE2fXRve29wYWNpdHk6MH19XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbnZhciByZW1vdmVSaXBwbGUgPSBmdW5jdGlvbiAocmlwcGxlKSB7XG4gICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtb3V0Jyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJpcHBsZS5yZW1vdmUoKTtcbiAgICB9LCAyMDApO1xufTtcbnZhciBQQURESU5HID0gMTA7XG52YXIgSU5JVElBTF9PUklHSU5fU0NBTEUgPSAwLjU7XG5leHBvcnQgeyBSaXBwbGVFZmZlY3QgYXMgaW9uX3JpcHBsZV9lZmZlY3QgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=