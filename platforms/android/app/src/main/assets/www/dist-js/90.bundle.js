(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/md.transition-fea2bbfb.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/md.transition-fea2bbfb.js ***!
  \*************************************************************************/
/*! exports provided: mdTransitionAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mdTransitionAnimation", function() { return mdTransitionAnimation; });
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-af478fe9.js */ "./node_modules/@ionic/core/dist/esm-es5/animation-af478fe9.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "./node_modules/@ionic/core/dist/esm-es5/constants-3c3e1099.js");
/* harmony import */ var _index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-4d91f03a.js */ "./node_modules/@ionic/core/dist/esm-es5/index-4d91f03a.js");






var mdTransitionAnimation = function (_, opts) {
    var OFF_BOTTOM = '40px';
    var CENTER = '0px';
    var backDirection = (opts.direction === 'back');
    var enteringEl = opts.enteringEl;
    var leavingEl = opts.leavingEl;
    var ionPageElement = Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_5__["g"])(enteringEl);
    var enteringToolbarEle = ionPageElement.querySelector('ion-toolbar');
    var rootTransition = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    rootTransition
        .addElement(ionPageElement)
        .fill('both')
        .beforeRemoveClass('ion-page-invisible');
    // animate the component itself
    if (backDirection) {
        rootTransition
            .duration(opts.duration || 200)
            .easing('cubic-bezier(0.47,0,0.745,0.715)');
    }
    else {
        rootTransition
            .duration(opts.duration || 280)
            .easing('cubic-bezier(0.36,0.66,0.04,1)')
            .fromTo('transform', "translateY(" + OFF_BOTTOM + ")", "translateY(" + CENTER + ")")
            .fromTo('opacity', 0.01, 1);
    }
    // Animate toolbar if it's there
    if (enteringToolbarEle) {
        var enteringToolBar = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
        enteringToolBar.addElement(enteringToolbarEle);
        rootTransition.addAnimation(enteringToolBar);
    }
    // setup leaving view
    if (leavingEl && backDirection) {
        // leaving content
        rootTransition
            .duration(opts.duration || 200)
            .easing('cubic-bezier(0.47,0,0.745,0.715)');
        var leavingPage = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
        leavingPage
            .addElement(Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_5__["g"])(leavingEl))
            .afterStyles({ 'display': 'none' })
            .fromTo('transform', "translateY(" + CENTER + ")", "translateY(" + OFF_BOTTOM + ")")
            .fromTo('opacity', 1, 0);
        rootTransition.addAnimation(leavingPage);
    }
    return rootTransition;
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L21kLnRyYW5zaXRpb24tZmVhMmJiZmIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFDRTtBQUNDO0FBQ2dDO0FBQzlCO0FBQzRCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0REFBaUI7QUFDMUM7QUFDQSx5QkFBeUIsZ0VBQWU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsZ0VBQWU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdFQUFlO0FBQ3pDO0FBQ0Esd0JBQXdCLDREQUFpQjtBQUN6QywwQkFBMEIsb0JBQW9CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNpQyIsImZpbGUiOiI5MC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tYWY0NzhmZTkuanMnO1xuaW1wb3J0ICcuL2NvbnN0YW50cy0zYzNlMTA5OS5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldElvblBhZ2VFbGVtZW50IH0gZnJvbSAnLi9pbmRleC00ZDkxZjAzYS5qcyc7XG52YXIgbWRUcmFuc2l0aW9uQW5pbWF0aW9uID0gZnVuY3Rpb24gKF8sIG9wdHMpIHtcbiAgICB2YXIgT0ZGX0JPVFRPTSA9ICc0MHB4JztcbiAgICB2YXIgQ0VOVEVSID0gJzBweCc7XG4gICAgdmFyIGJhY2tEaXJlY3Rpb24gPSAob3B0cy5kaXJlY3Rpb24gPT09ICdiYWNrJyk7XG4gICAgdmFyIGVudGVyaW5nRWwgPSBvcHRzLmVudGVyaW5nRWw7XG4gICAgdmFyIGxlYXZpbmdFbCA9IG9wdHMubGVhdmluZ0VsO1xuICAgIHZhciBpb25QYWdlRWxlbWVudCA9IGdldElvblBhZ2VFbGVtZW50KGVudGVyaW5nRWwpO1xuICAgIHZhciBlbnRlcmluZ1Rvb2xiYXJFbGUgPSBpb25QYWdlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpb24tdG9vbGJhcicpO1xuICAgIHZhciByb290VHJhbnNpdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHJvb3RUcmFuc2l0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGlvblBhZ2VFbGVtZW50KVxuICAgICAgICAuZmlsbCgnYm90aCcpXG4gICAgICAgIC5iZWZvcmVSZW1vdmVDbGFzcygnaW9uLXBhZ2UtaW52aXNpYmxlJyk7XG4gICAgLy8gYW5pbWF0ZSB0aGUgY29tcG9uZW50IGl0c2VsZlxuICAgIGlmIChiYWNrRGlyZWN0aW9uKSB7XG4gICAgICAgIHJvb3RUcmFuc2l0aW9uXG4gICAgICAgICAgICAuZHVyYXRpb24ob3B0cy5kdXJhdGlvbiB8fCAyMDApXG4gICAgICAgICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC40NywwLDAuNzQ1LDAuNzE1KScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcm9vdFRyYW5zaXRpb25cbiAgICAgICAgICAgIC5kdXJhdGlvbihvcHRzLmR1cmF0aW9uIHx8IDI4MClcbiAgICAgICAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllcigwLjM2LDAuNjYsMC4wNCwxKScpXG4gICAgICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZVkoXCIgKyBPRkZfQk9UVE9NICsgXCIpXCIsIFwidHJhbnNsYXRlWShcIiArIENFTlRFUiArIFwiKVwiKVxuICAgICAgICAgICAgLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDEpO1xuICAgIH1cbiAgICAvLyBBbmltYXRlIHRvb2xiYXIgaWYgaXQncyB0aGVyZVxuICAgIGlmIChlbnRlcmluZ1Rvb2xiYXJFbGUpIHtcbiAgICAgICAgdmFyIGVudGVyaW5nVG9vbEJhciA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICBlbnRlcmluZ1Rvb2xCYXIuYWRkRWxlbWVudChlbnRlcmluZ1Rvb2xiYXJFbGUpO1xuICAgICAgICByb290VHJhbnNpdGlvbi5hZGRBbmltYXRpb24oZW50ZXJpbmdUb29sQmFyKTtcbiAgICB9XG4gICAgLy8gc2V0dXAgbGVhdmluZyB2aWV3XG4gICAgaWYgKGxlYXZpbmdFbCAmJiBiYWNrRGlyZWN0aW9uKSB7XG4gICAgICAgIC8vIGxlYXZpbmcgY29udGVudFxuICAgICAgICByb290VHJhbnNpdGlvblxuICAgICAgICAgICAgLmR1cmF0aW9uKG9wdHMuZHVyYXRpb24gfHwgMjAwKVxuICAgICAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuNDcsMCwwLjc0NSwwLjcxNSknKTtcbiAgICAgICAgdmFyIGxlYXZpbmdQYWdlID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgIGxlYXZpbmdQYWdlXG4gICAgICAgICAgICAuYWRkRWxlbWVudChnZXRJb25QYWdlRWxlbWVudChsZWF2aW5nRWwpKVxuICAgICAgICAgICAgLmFmdGVyU3R5bGVzKHsgJ2Rpc3BsYXknOiAnbm9uZScgfSlcbiAgICAgICAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlWShcIiArIENFTlRFUiArIFwiKVwiLCBcInRyYW5zbGF0ZVkoXCIgKyBPRkZfQk9UVE9NICsgXCIpXCIpXG4gICAgICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgMSwgMCk7XG4gICAgICAgIHJvb3RUcmFuc2l0aW9uLmFkZEFuaW1hdGlvbihsZWF2aW5nUGFnZSk7XG4gICAgfVxuICAgIHJldHVybiByb290VHJhbnNpdGlvbjtcbn07XG5leHBvcnQgeyBtZFRyYW5zaXRpb25BbmltYXRpb24gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=