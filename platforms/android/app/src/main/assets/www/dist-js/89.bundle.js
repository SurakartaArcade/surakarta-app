(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ios.transition-504cdd09.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ios.transition-504cdd09.js ***!
  \**************************************************************************/
/*! exports provided: iosTransitionAnimation, shadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iosTransitionAnimation", function() { return iosTransitionAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return shadow; });
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-af478fe9.js */ "./node_modules/@ionic/core/dist/esm-es5/animation-af478fe9.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "./node_modules/@ionic/core/dist/esm-es5/constants-3c3e1099.js");
/* harmony import */ var _index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-4d91f03a.js */ "./node_modules/@ionic/core/dist/esm-es5/index-4d91f03a.js");






var DURATION = 540;
var addSafeArea = function (val, side) {
    if (side === void 0) { side = 'top'; }
    return "calc(" + val + "px + var(--ion-safe-area-" + side + "))";
};
var getClonedElement = function (tagName) {
    return document.querySelector(tagName + ".ion-cloned-element");
};
var shadow = function (el) {
    return el.shadowRoot || el;
};
var getLargeTitle = function (refEl) {
    return refEl.querySelector('ion-header:not(.header-collapse-condense-inactive) ion-title[size=large]');
};
var getBackButton = function (refEl, backDirection) {
    var buttonsList = refEl.querySelectorAll('ion-buttons');
    for (var _i = 0, buttonsList_1 = buttonsList; _i < buttonsList_1.length; _i++) {
        var buttons = buttonsList_1[_i];
        var parentHeader = buttons.closest('ion-header');
        var activeHeader = parentHeader && !parentHeader.classList.contains('header-collapse-condense-inactive');
        var backButton = buttons.querySelector('ion-back-button');
        var buttonsCollapse = buttons.classList.contains('buttons-collapse');
        if (backButton !== null && ((buttonsCollapse && activeHeader && backDirection) || !buttonsCollapse)) {
            return backButton;
        }
    }
    return null;
};
var createLargeTitleTransition = function (rootAnimation, rtl, backDirection, enteringEl, leavingEl) {
    var enteringBackButton = getBackButton(enteringEl, backDirection);
    var leavingLargeTitle = getLargeTitle(leavingEl);
    var enteringLargeTitle = getLargeTitle(enteringEl);
    var leavingBackButton = getBackButton(leavingEl, backDirection);
    var shouldAnimationForward = enteringBackButton !== null && leavingLargeTitle !== null && !backDirection;
    var shouldAnimationBackward = enteringLargeTitle !== null && leavingBackButton !== null && backDirection;
    if (shouldAnimationForward) {
        animateLargeTitle(rootAnimation, rtl, backDirection, leavingLargeTitle);
        animateBackButton(rootAnimation, rtl, backDirection, enteringBackButton);
    }
    else if (shouldAnimationBackward) {
        animateLargeTitle(rootAnimation, rtl, backDirection, enteringLargeTitle);
        animateBackButton(rootAnimation, rtl, backDirection, leavingBackButton);
    }
    return {
        forward: shouldAnimationForward,
        backward: shouldAnimationBackward
    };
};
var animateBackButton = function (rootAnimation, rtl, backDirection, backButtonEl) {
    var backButtonBounds = backButtonEl.getBoundingClientRect();
    var BACK_BUTTON_START_OFFSET = (rtl) ? "calc(100% - " + (backButtonBounds.right + 4) + "px)" : backButtonBounds.left - 4 + "px";
    var START_TEXT_TRANSLATE = (rtl) ? '7px' : '-7px';
    var END_TEXT_TRANSLATE = (rtl) ? '-4px' : '4px';
    var ICON_TRANSLATE = (rtl) ? '-4px' : '4px';
    var TEXT_ORIGIN_X = (rtl) ? 'right' : 'left';
    var ICON_ORIGIN_X = (rtl) ? 'left' : 'right';
    var FORWARD_TEXT_KEYFRAMES = [
        { offset: 0, opacity: 0, transform: "translate(" + START_TEXT_TRANSLATE + ", " + addSafeArea(8) + ") scale(2.1)" },
        { offset: 1, opacity: 1, transform: "translate(" + END_TEXT_TRANSLATE + ", " + addSafeArea(-40) + ") scale(1)" }
    ];
    var BACKWARD_TEXT_KEYFRAMES = [
        { offset: 0, opacity: 1, transform: "translate(" + END_TEXT_TRANSLATE + ", " + addSafeArea(-40) + ") scale(1)" },
        { offset: 0.6, opacity: 0 },
        { offset: 1, opacity: 0, transform: "translate(" + START_TEXT_TRANSLATE + ", " + addSafeArea(8) + ") scale(2.1)" }
    ];
    var TEXT_KEYFRAMES = (backDirection) ? BACKWARD_TEXT_KEYFRAMES : FORWARD_TEXT_KEYFRAMES;
    var FORWARD_ICON_KEYFRAMES = [
        { offset: 0, opacity: 0, transform: "translate3d(" + ICON_TRANSLATE + ", " + addSafeArea(-35) + ", 0) scale(0.6)" },
        { offset: 1, opacity: 1, transform: "translate3d(" + ICON_TRANSLATE + ", " + addSafeArea(-40) + ", 0) scale(1)" }
    ];
    var BACKWARD_ICON_KEYFRAMES = [
        { offset: 0, opacity: 1, transform: "translate(" + ICON_TRANSLATE + ", " + addSafeArea(-40) + ") scale(1)" },
        { offset: 0.2, opacity: 0, transform: "translate(" + ICON_TRANSLATE + ", " + addSafeArea(-35) + ") scale(0.6)" },
        { offset: 1, opacity: 0, transform: "translate(" + ICON_TRANSLATE + ", " + addSafeArea(-35) + ") scale(0.6)" }
    ];
    var ICON_KEYFRAMES = (backDirection) ? BACKWARD_ICON_KEYFRAMES : FORWARD_ICON_KEYFRAMES;
    var enteringBackButtonTextAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    var enteringBackButtonIconAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    var clonedBackButtonEl = getClonedElement('ion-back-button');
    var backButtonTextEl = clonedBackButtonEl.querySelector('.button-text');
    var backButtonIconEl = clonedBackButtonEl.querySelector('ion-icon');
    clonedBackButtonEl.text = backButtonEl.text;
    clonedBackButtonEl.mode = backButtonEl.mode;
    clonedBackButtonEl.icon = backButtonEl.icon;
    clonedBackButtonEl.color = backButtonEl.color;
    clonedBackButtonEl.disabled = backButtonEl.disabled;
    clonedBackButtonEl.style.setProperty('display', 'block');
    clonedBackButtonEl.style.setProperty('position', 'fixed');
    enteringBackButtonIconAnimation.addElement(backButtonIconEl);
    enteringBackButtonTextAnimation.addElement(backButtonTextEl);
    enteringBackButtonTextAnimation
        .beforeStyles({
        'transform-origin': TEXT_ORIGIN_X + " center"
    })
        .beforeAddWrite(function () {
        backButtonEl.style.setProperty('display', 'none');
        clonedBackButtonEl.style.setProperty(TEXT_ORIGIN_X, BACK_BUTTON_START_OFFSET);
    })
        .afterAddWrite(function () {
        backButtonEl.style.setProperty('display', '');
        clonedBackButtonEl.style.setProperty('display', 'none');
        clonedBackButtonEl.style.removeProperty(TEXT_ORIGIN_X);
    })
        .keyframes(TEXT_KEYFRAMES);
    enteringBackButtonIconAnimation
        .beforeStyles({
        'transform-origin': ICON_ORIGIN_X + " center"
    })
        .keyframes(ICON_KEYFRAMES);
    rootAnimation.addAnimation([enteringBackButtonTextAnimation, enteringBackButtonIconAnimation]);
};
var animateLargeTitle = function (rootAnimation, rtl, backDirection, largeTitleEl) {
    var _a;
    var largeTitleBounds = largeTitleEl.getBoundingClientRect();
    var TITLE_START_OFFSET = (rtl) ? "calc(100% - " + largeTitleBounds.right + "px)" : largeTitleBounds.left + "px";
    var START_TRANSLATE = (rtl) ? '-18px' : '18px';
    var ORIGIN_X = (rtl) ? 'right' : 'left';
    var BACKWARDS_KEYFRAMES = [
        { offset: 0, opacity: 0, transform: "translate(" + START_TRANSLATE + ", " + addSafeArea(0) + ") scale(0.49)" },
        { offset: 0.1, opacity: 0 },
        { offset: 1, opacity: 1, transform: "translate(0, " + addSafeArea(49) + ") scale(1)" }
    ];
    var FORWARDS_KEYFRAMES = [
        { offset: 0, opacity: 0.99, transform: "translate(0, " + addSafeArea(49) + ") scale(1)" },
        { offset: 0.6, opacity: 0 },
        { offset: 1, opacity: 0, transform: "translate(" + START_TRANSLATE + ", " + addSafeArea(0) + ") scale(0.5)" }
    ];
    var KEYFRAMES = (backDirection) ? BACKWARDS_KEYFRAMES : FORWARDS_KEYFRAMES;
    var clonedTitleEl = getClonedElement('ion-title');
    var clonedLargeTitleAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    clonedTitleEl.innerText = largeTitleEl.innerText;
    clonedTitleEl.size = largeTitleEl.size;
    clonedTitleEl.color = largeTitleEl.color;
    clonedLargeTitleAnimation.addElement(clonedTitleEl);
    clonedLargeTitleAnimation
        .beforeStyles((_a = {
            'transform-origin': ORIGIN_X + " center",
            'height': '46px',
            'display': '',
            'position': 'relative'
        },
        _a[ORIGIN_X] = TITLE_START_OFFSET,
        _a))
        .beforeAddWrite(function () {
        largeTitleEl.style.setProperty('display', 'none');
    })
        .afterAddWrite(function () {
        largeTitleEl.style.setProperty('display', '');
        clonedTitleEl.style.setProperty('display', 'none');
    })
        .keyframes(KEYFRAMES);
    rootAnimation.addAnimation(clonedLargeTitleAnimation);
};
var iosTransitionAnimation = function (navEl, opts) {
    try {
        var EASING = 'cubic-bezier(0.32,0.72,0,1)';
        var OPACITY_1 = 'opacity';
        var TRANSFORM_1 = 'transform';
        var CENTER_1 = '0%';
        var OFF_OPACITY = 0.8;
        var isRTL_1 = navEl.ownerDocument.dir === 'rtl';
        var OFF_RIGHT_1 = isRTL_1 ? '-99.5%' : '99.5%';
        var OFF_LEFT_1 = isRTL_1 ? '33%' : '-33%';
        var enteringEl = opts.enteringEl;
        var leavingEl = opts.leavingEl;
        var backDirection_1 = (opts.direction === 'back');
        var contentEl = enteringEl.querySelector(':scope > ion-content');
        var headerEls = enteringEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');
        var enteringToolBarEls = enteringEl.querySelectorAll(':scope > ion-header > ion-toolbar');
        var rootAnimation_1 = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
        var enteringContentAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
        rootAnimation_1
            .addElement(enteringEl)
            .duration(opts.duration || DURATION)
            .easing(opts.easing || EASING)
            .fill('both')
            .beforeRemoveClass('ion-page-invisible');
        if (leavingEl && navEl) {
            var navDecorAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            navDecorAnimation.addElement(navEl);
            rootAnimation_1.addAnimation(navDecorAnimation);
        }
        if (!contentEl && enteringToolBarEls.length === 0 && headerEls.length === 0) {
            enteringContentAnimation.addElement(enteringEl.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs')); // REVIEW
        }
        else {
            enteringContentAnimation.addElement(contentEl); // REVIEW
            enteringContentAnimation.addElement(headerEls);
        }
        rootAnimation_1.addAnimation(enteringContentAnimation);
        if (backDirection_1) {
            enteringContentAnimation
                .beforeClearStyles([OPACITY_1])
                .fromTo('transform', "translateX(" + OFF_LEFT_1 + ")", "translateX(" + CENTER_1 + ")")
                .fromTo(OPACITY_1, OFF_OPACITY, 1);
        }
        else {
            // entering content, forward direction
            enteringContentAnimation
                .beforeClearStyles([OPACITY_1])
                .fromTo('transform', "translateX(" + OFF_RIGHT_1 + ")", "translateX(" + CENTER_1 + ")");
        }
        if (contentEl) {
            var enteringTransitionEffectEl = shadow(contentEl).querySelector('.transition-effect');
            if (enteringTransitionEffectEl) {
                var enteringTransitionCoverEl = enteringTransitionEffectEl.querySelector('.transition-cover');
                var enteringTransitionShadowEl = enteringTransitionEffectEl.querySelector('.transition-shadow');
                var enteringTransitionEffect = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var enteringTransitionCover = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var enteringTransitionShadow = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                enteringTransitionEffect
                    .addElement(enteringTransitionEffectEl)
                    .beforeStyles({ opacity: '1' })
                    .afterStyles({ opacity: '' });
                enteringTransitionCover
                    .addElement(enteringTransitionCoverEl) // REVIEW
                    .beforeClearStyles([OPACITY_1])
                    .fromTo(OPACITY_1, 0, 0.1);
                enteringTransitionShadow
                    .addElement(enteringTransitionShadowEl) // REVIEW
                    .beforeClearStyles([OPACITY_1])
                    .fromTo(OPACITY_1, 0.03, 0.70);
                enteringTransitionEffect.addAnimation([enteringTransitionCover, enteringTransitionShadow]);
                enteringContentAnimation.addAnimation([enteringTransitionEffect]);
            }
        }
        var enteringContentHasLargeTitle_1 = enteringEl.querySelector('ion-header.header-collapse-condense');
        var _a = createLargeTitleTransition(rootAnimation_1, isRTL_1, backDirection_1, enteringEl, leavingEl), forward_1 = _a.forward, backward_1 = _a.backward;
        enteringToolBarEls.forEach(function (enteringToolBarEl) {
            var enteringToolBar = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            enteringToolBar.addElement(enteringToolBarEl);
            rootAnimation_1.addAnimation(enteringToolBar);
            var enteringTitle = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            enteringTitle.addElement(enteringToolBarEl.querySelector('ion-title')); // REVIEW
            var enteringToolBarButtons = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            var buttons = Array.from(enteringToolBarEl.querySelectorAll('ion-buttons,[menuToggle]'));
            var parentHeader = enteringToolBarEl.closest('ion-header');
            var inactiveHeader = parentHeader && parentHeader.classList.contains('header-collapse-condense-inactive');
            var buttonsToAnimate;
            if (backDirection_1) {
                buttonsToAnimate = buttons.filter(function (button) {
                    var isCollapseButton = button.classList.contains('buttons-collapse');
                    return (isCollapseButton && !inactiveHeader) || !isCollapseButton;
                });
            }
            else {
                buttonsToAnimate = buttons.filter(function (button) { return !button.classList.contains('buttons-collapse'); });
            }
            enteringToolBarButtons.addElement(buttonsToAnimate);
            var enteringToolBarItems = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            enteringToolBarItems.addElement(enteringToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'));
            var enteringToolBarBg = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            enteringToolBarBg.addElement(shadow(enteringToolBarEl).querySelector('.toolbar-background')); // REVIEW
            var enteringBackButton = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            var backButtonEl = enteringToolBarEl.querySelector('ion-back-button');
            if (backButtonEl) {
                enteringBackButton.addElement(backButtonEl);
            }
            enteringToolBar.addAnimation([enteringTitle, enteringToolBarButtons, enteringToolBarItems, enteringToolBarBg, enteringBackButton]);
            enteringToolBarButtons.fromTo(OPACITY_1, 0.01, 1);
            enteringToolBarItems.fromTo(OPACITY_1, 0.01, 1);
            if (backDirection_1) {
                if (!inactiveHeader) {
                    enteringTitle
                        .fromTo('transform', "translateX(" + OFF_LEFT_1 + ")", "translateX(" + CENTER_1 + ")")
                        .fromTo(OPACITY_1, 0.01, 1);
                }
                enteringToolBarItems.fromTo('transform', "translateX(" + OFF_LEFT_1 + ")", "translateX(" + CENTER_1 + ")");
                // back direction, entering page has a back button
                enteringBackButton.fromTo(OPACITY_1, 0.01, 1);
            }
            else {
                // entering toolbar, forward direction
                if (!enteringContentHasLargeTitle_1) {
                    enteringTitle
                        .fromTo('transform', "translateX(" + OFF_RIGHT_1 + ")", "translateX(" + CENTER_1 + ")")
                        .fromTo(OPACITY_1, 0.01, 1);
                }
                enteringToolBarItems.fromTo('transform', "translateX(" + OFF_RIGHT_1 + ")", "translateX(" + CENTER_1 + ")");
                enteringToolBarBg
                    .beforeClearStyles([OPACITY_1])
                    .fromTo(OPACITY_1, 0.01, 1);
                // forward direction, entering page has a back button
                if (!forward_1) {
                    enteringBackButton.fromTo(OPACITY_1, 0.01, 1);
                }
                if (backButtonEl && !forward_1) {
                    var enteringBackBtnText = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                    enteringBackBtnText
                        .addElement(shadow(backButtonEl).querySelector('.button-text')) // REVIEW
                        .fromTo("transform", (isRTL_1 ? 'translateX(-100px)' : 'translateX(100px)'), 'translateX(0px)');
                    enteringToolBar.addAnimation(enteringBackBtnText);
                }
            }
        });
        // setup leaving view
        if (leavingEl) {
            var leavingContent = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            var leavingContentEl = leavingEl.querySelector(':scope > ion-content');
            leavingContent.addElement(leavingContentEl); // REVIEW
            leavingContent.addElement(leavingEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *'));
            rootAnimation_1.addAnimation(leavingContent);
            if (backDirection_1) {
                // leaving content, back direction
                leavingContent
                    .beforeClearStyles([OPACITY_1])
                    .fromTo('transform', "translateX(" + CENTER_1 + ")", (isRTL_1 ? 'translateX(-100%)' : 'translateX(100%)'));
                var leavingPage_1 = Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_5__["g"])(leavingEl);
                rootAnimation_1.afterAddWrite(function () {
                    if (rootAnimation_1.getDirection() === 'normal') {
                        leavingPage_1.style.setProperty('display', 'none');
                    }
                });
            }
            else {
                // leaving content, forward direction
                leavingContent
                    .fromTo('transform', "translateX(" + CENTER_1 + ")", "translateX(" + OFF_LEFT_1 + ")")
                    .fromTo(OPACITY_1, 1, OFF_OPACITY);
            }
            if (leavingContentEl) {
                var leavingTransitionEffectEl = shadow(leavingContentEl).querySelector('.transition-effect');
                if (leavingTransitionEffectEl) {
                    var leavingTransitionCoverEl = leavingTransitionEffectEl.querySelector('.transition-cover');
                    var leavingTransitionShadowEl = leavingTransitionEffectEl.querySelector('.transition-shadow');
                    var leavingTransitionEffect = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                    var leavingTransitionCover = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                    var leavingTransitionShadow = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                    leavingTransitionEffect
                        .addElement(leavingTransitionEffectEl)
                        .beforeStyles({ opacity: '1' })
                        .afterStyles({ opacity: '' });
                    leavingTransitionCover
                        .addElement(leavingTransitionCoverEl) // REVIEW
                        .beforeClearStyles([OPACITY_1])
                        .fromTo(OPACITY_1, 0.1, 0);
                    leavingTransitionShadow
                        .addElement(leavingTransitionShadowEl) // REVIEW
                        .beforeClearStyles([OPACITY_1])
                        .fromTo(OPACITY_1, 0.70, 0.03);
                    leavingTransitionEffect.addAnimation([leavingTransitionCover, leavingTransitionShadow]);
                    leavingContent.addAnimation([leavingTransitionEffect]);
                }
            }
            var leavingToolBarEls = leavingEl.querySelectorAll(':scope > ion-header > ion-toolbar');
            leavingToolBarEls.forEach(function (leavingToolBarEl) {
                var leavingToolBar = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                leavingToolBar.addElement(leavingToolBarEl);
                var leavingTitle = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                leavingTitle.addElement(leavingToolBarEl.querySelector('ion-title')); // REVIEW
                var leavingToolBarButtons = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var buttons = leavingToolBarEl.querySelectorAll('ion-buttons,[menuToggle]');
                var parentHeader = leavingToolBarEl.closest('ion-header');
                var inactiveHeader = parentHeader && parentHeader.classList.contains('header-collapse-condense-inactive');
                var buttonsToAnimate = Array.from(buttons).filter(function (button) {
                    var isCollapseButton = button.classList.contains('buttons-collapse');
                    return (isCollapseButton && !inactiveHeader) || !isCollapseButton;
                });
                leavingToolBarButtons.addElement(buttonsToAnimate);
                var leavingToolBarItems = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var leavingToolBarItemEls = leavingToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])');
                if (leavingToolBarItemEls.length > 0) {
                    leavingToolBarItems.addElement(leavingToolBarItemEls);
                }
                var leavingToolBarBg = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                leavingToolBarBg.addElement(shadow(leavingToolBarEl).querySelector('.toolbar-background')); // REVIEW
                var leavingBackButton = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var backButtonEl = leavingToolBarEl.querySelector('ion-back-button');
                if (backButtonEl) {
                    leavingBackButton.addElement(backButtonEl);
                }
                leavingToolBar.addAnimation([leavingTitle, leavingToolBarButtons, leavingToolBarItems, leavingBackButton, leavingToolBarBg]);
                rootAnimation_1.addAnimation(leavingToolBar);
                // fade out leaving toolbar items
                leavingBackButton.fromTo(OPACITY_1, 0.99, 0);
                leavingToolBarButtons.fromTo(OPACITY_1, 0.99, 0);
                leavingToolBarItems.fromTo(OPACITY_1, 0.99, 0);
                if (backDirection_1) {
                    if (!inactiveHeader) {
                        // leaving toolbar, back direction
                        leavingTitle
                            .fromTo('transform', "translateX(" + CENTER_1 + ")", (isRTL_1 ? 'translateX(-100%)' : 'translateX(100%)'))
                            .fromTo(OPACITY_1, 0.99, 0);
                    }
                    leavingToolBarItems.fromTo('transform', "translateX(" + CENTER_1 + ")", (isRTL_1 ? 'translateX(-100%)' : 'translateX(100%)'));
                    // leaving toolbar, back direction, and there's no entering toolbar
                    // should just slide out, no fading out
                    leavingToolBarBg
                        .beforeClearStyles([OPACITY_1])
                        .fromTo(OPACITY_1, 1, 0.01);
                    if (backButtonEl && !backward_1) {
                        var leavingBackBtnText = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                        leavingBackBtnText
                            .addElement(shadow(backButtonEl).querySelector('.button-text')) // REVIEW
                            .fromTo('transform', "translateX(" + CENTER_1 + ")", "translateX(" + ((isRTL_1 ? -124 : 124) + 'px') + ")");
                        leavingToolBar.addAnimation(leavingBackBtnText);
                    }
                }
                else {
                    // leaving toolbar, forward direction
                    if (!inactiveHeader) {
                        leavingTitle
                            .fromTo('transform', "translateX(" + CENTER_1 + ")", "translateX(" + OFF_LEFT_1 + ")")
                            .fromTo(OPACITY_1, 0.99, 0)
                            .afterClearStyles([TRANSFORM_1, OPACITY_1]);
                    }
                    leavingToolBarItems
                        .fromTo('transform', "translateX(" + CENTER_1 + ")", "translateX(" + OFF_LEFT_1 + ")")
                        .afterClearStyles([TRANSFORM_1, OPACITY_1]);
                    leavingBackButton.afterClearStyles([OPACITY_1]);
                    leavingTitle.afterClearStyles([OPACITY_1]);
                    leavingToolBarButtons.afterClearStyles([OPACITY_1]);
                }
            });
        }
        return rootAnimation_1;
    }
    catch (err) {
        throw err;
    }
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvcy50cmFuc2l0aW9uLTUwNGNkZDA5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFDRTtBQUNDO0FBQ2dDO0FBQzlCO0FBQzRCO0FBQzdEO0FBQ0E7QUFDQSwwQkFBMEIsY0FBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCwyQkFBMkI7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGlIQUFpSDtBQUMxSCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsK0dBQStHO0FBQ3hILFNBQVMsMEJBQTBCO0FBQ25DLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTLGtIQUFrSDtBQUMzSCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsMkdBQTJHO0FBQ3BILFNBQVMsK0dBQStHO0FBQ3hILFNBQVM7QUFDVDtBQUNBO0FBQ0EsMENBQTBDLGdFQUFlO0FBQ3pELDBDQUEwQyxnRUFBZTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw2R0FBNkc7QUFDdEgsU0FBUywwQkFBMEI7QUFDbkMsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLHdGQUF3RjtBQUNqRyxTQUFTLDBCQUEwQjtBQUNuQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdFQUFlO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixnRUFBZTtBQUM3Qyx1Q0FBdUMsZ0VBQWU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0VBQWU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxSUFBcUk7QUFDckk7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGdFQUFlO0FBQzlELDhDQUE4QyxnRUFBZTtBQUM3RCwrQ0FBK0MsZ0VBQWU7QUFDOUQ7QUFDQTtBQUNBLG1DQUFtQyxlQUFlO0FBQ2xELGtDQUFrQyxjQUFjO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxnRUFBZTtBQUNqRDtBQUNBO0FBQ0EsZ0NBQWdDLGdFQUFlO0FBQy9DLG1GQUFtRjtBQUNuRix5Q0FBeUMsZ0VBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EscUVBQXFFLHVEQUF1RCxFQUFFO0FBQzlIO0FBQ0E7QUFDQSx1Q0FBdUMsZ0VBQWU7QUFDdEQ7QUFDQSxvQ0FBb0MsZ0VBQWU7QUFDbkQseUdBQXlHO0FBQ3pHLHFDQUFxQyxnRUFBZTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsZ0VBQWU7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxpQ0FBaUMsZ0VBQWU7QUFDaEQ7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsNERBQWlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxnRUFBZTtBQUNqRSxpREFBaUQsZ0VBQWU7QUFDaEUsa0RBQWtELGdFQUFlO0FBQ2pFO0FBQ0E7QUFDQSx1Q0FBdUMsZUFBZTtBQUN0RCxzQ0FBc0MsY0FBYztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGdFQUFlO0FBQ3BEO0FBQ0EsbUNBQW1DLGdFQUFlO0FBQ2xELHFGQUFxRjtBQUNyRiw0Q0FBNEMsZ0VBQWU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsMENBQTBDLGdFQUFlO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGdFQUFlO0FBQ3RELDJHQUEyRztBQUMzRyx3Q0FBd0MsZ0VBQWU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGdFQUFlO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQyIsImZpbGUiOiI4OS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbmltcG9ydCAnLi9oZWxwZXJzLTQ2ZjRhMjYyLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tYWY0NzhmZTkuanMnO1xuaW1wb3J0ICcuL2NvbnN0YW50cy0zYzNlMTA5OS5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldElvblBhZ2VFbGVtZW50IH0gZnJvbSAnLi9pbmRleC00ZDkxZjAzYS5qcyc7XG52YXIgRFVSQVRJT04gPSA1NDA7XG52YXIgYWRkU2FmZUFyZWEgPSBmdW5jdGlvbiAodmFsLCBzaWRlKSB7XG4gICAgaWYgKHNpZGUgPT09IHZvaWQgMCkgeyBzaWRlID0gJ3RvcCc7IH1cbiAgICByZXR1cm4gXCJjYWxjKFwiICsgdmFsICsgXCJweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtXCIgKyBzaWRlICsgXCIpKVwiO1xufTtcbnZhciBnZXRDbG9uZWRFbGVtZW50ID0gZnVuY3Rpb24gKHRhZ05hbWUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YWdOYW1lICsgXCIuaW9uLWNsb25lZC1lbGVtZW50XCIpO1xufTtcbnZhciBzaGFkb3cgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gZWwuc2hhZG93Um9vdCB8fCBlbDtcbn07XG52YXIgZ2V0TGFyZ2VUaXRsZSA9IGZ1bmN0aW9uIChyZWZFbCkge1xuICAgIHJldHVybiByZWZFbC5xdWVyeVNlbGVjdG9yKCdpb24taGVhZGVyOm5vdCguaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlLWluYWN0aXZlKSBpb24tdGl0bGVbc2l6ZT1sYXJnZV0nKTtcbn07XG52YXIgZ2V0QmFja0J1dHRvbiA9IGZ1bmN0aW9uIChyZWZFbCwgYmFja0RpcmVjdGlvbikge1xuICAgIHZhciBidXR0b25zTGlzdCA9IHJlZkVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1idXR0b25zJyk7XG4gICAgZm9yICh2YXIgX2kgPSAwLCBidXR0b25zTGlzdF8xID0gYnV0dG9uc0xpc3Q7IF9pIDwgYnV0dG9uc0xpc3RfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGJ1dHRvbnMgPSBidXR0b25zTGlzdF8xW19pXTtcbiAgICAgICAgdmFyIHBhcmVudEhlYWRlciA9IGJ1dHRvbnMuY2xvc2VzdCgnaW9uLWhlYWRlcicpO1xuICAgICAgICB2YXIgYWN0aXZlSGVhZGVyID0gcGFyZW50SGVhZGVyICYmICFwYXJlbnRIZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXItY29sbGFwc2UtY29uZGVuc2UtaW5hY3RpdmUnKTtcbiAgICAgICAgdmFyIGJhY2tCdXR0b24gPSBidXR0b25zLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrLWJ1dHRvbicpO1xuICAgICAgICB2YXIgYnV0dG9uc0NvbGxhcHNlID0gYnV0dG9ucy5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbnMtY29sbGFwc2UnKTtcbiAgICAgICAgaWYgKGJhY2tCdXR0b24gIT09IG51bGwgJiYgKChidXR0b25zQ29sbGFwc2UgJiYgYWN0aXZlSGVhZGVyICYmIGJhY2tEaXJlY3Rpb24pIHx8ICFidXR0b25zQ29sbGFwc2UpKSB7XG4gICAgICAgICAgICByZXR1cm4gYmFja0J1dHRvbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG52YXIgY3JlYXRlTGFyZ2VUaXRsZVRyYW5zaXRpb24gPSBmdW5jdGlvbiAocm9vdEFuaW1hdGlvbiwgcnRsLCBiYWNrRGlyZWN0aW9uLCBlbnRlcmluZ0VsLCBsZWF2aW5nRWwpIHtcbiAgICB2YXIgZW50ZXJpbmdCYWNrQnV0dG9uID0gZ2V0QmFja0J1dHRvbihlbnRlcmluZ0VsLCBiYWNrRGlyZWN0aW9uKTtcbiAgICB2YXIgbGVhdmluZ0xhcmdlVGl0bGUgPSBnZXRMYXJnZVRpdGxlKGxlYXZpbmdFbCk7XG4gICAgdmFyIGVudGVyaW5nTGFyZ2VUaXRsZSA9IGdldExhcmdlVGl0bGUoZW50ZXJpbmdFbCk7XG4gICAgdmFyIGxlYXZpbmdCYWNrQnV0dG9uID0gZ2V0QmFja0J1dHRvbihsZWF2aW5nRWwsIGJhY2tEaXJlY3Rpb24pO1xuICAgIHZhciBzaG91bGRBbmltYXRpb25Gb3J3YXJkID0gZW50ZXJpbmdCYWNrQnV0dG9uICE9PSBudWxsICYmIGxlYXZpbmdMYXJnZVRpdGxlICE9PSBudWxsICYmICFiYWNrRGlyZWN0aW9uO1xuICAgIHZhciBzaG91bGRBbmltYXRpb25CYWNrd2FyZCA9IGVudGVyaW5nTGFyZ2VUaXRsZSAhPT0gbnVsbCAmJiBsZWF2aW5nQmFja0J1dHRvbiAhPT0gbnVsbCAmJiBiYWNrRGlyZWN0aW9uO1xuICAgIGlmIChzaG91bGRBbmltYXRpb25Gb3J3YXJkKSB7XG4gICAgICAgIGFuaW1hdGVMYXJnZVRpdGxlKHJvb3RBbmltYXRpb24sIHJ0bCwgYmFja0RpcmVjdGlvbiwgbGVhdmluZ0xhcmdlVGl0bGUpO1xuICAgICAgICBhbmltYXRlQmFja0J1dHRvbihyb290QW5pbWF0aW9uLCBydGwsIGJhY2tEaXJlY3Rpb24sIGVudGVyaW5nQmFja0J1dHRvbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNob3VsZEFuaW1hdGlvbkJhY2t3YXJkKSB7XG4gICAgICAgIGFuaW1hdGVMYXJnZVRpdGxlKHJvb3RBbmltYXRpb24sIHJ0bCwgYmFja0RpcmVjdGlvbiwgZW50ZXJpbmdMYXJnZVRpdGxlKTtcbiAgICAgICAgYW5pbWF0ZUJhY2tCdXR0b24ocm9vdEFuaW1hdGlvbiwgcnRsLCBiYWNrRGlyZWN0aW9uLCBsZWF2aW5nQmFja0J1dHRvbik7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGZvcndhcmQ6IHNob3VsZEFuaW1hdGlvbkZvcndhcmQsXG4gICAgICAgIGJhY2t3YXJkOiBzaG91bGRBbmltYXRpb25CYWNrd2FyZFxuICAgIH07XG59O1xudmFyIGFuaW1hdGVCYWNrQnV0dG9uID0gZnVuY3Rpb24gKHJvb3RBbmltYXRpb24sIHJ0bCwgYmFja0RpcmVjdGlvbiwgYmFja0J1dHRvbkVsKSB7XG4gICAgdmFyIGJhY2tCdXR0b25Cb3VuZHMgPSBiYWNrQnV0dG9uRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIEJBQ0tfQlVUVE9OX1NUQVJUX09GRlNFVCA9IChydGwpID8gXCJjYWxjKDEwMCUgLSBcIiArIChiYWNrQnV0dG9uQm91bmRzLnJpZ2h0ICsgNCkgKyBcInB4KVwiIDogYmFja0J1dHRvbkJvdW5kcy5sZWZ0IC0gNCArIFwicHhcIjtcbiAgICB2YXIgU1RBUlRfVEVYVF9UUkFOU0xBVEUgPSAocnRsKSA/ICc3cHgnIDogJy03cHgnO1xuICAgIHZhciBFTkRfVEVYVF9UUkFOU0xBVEUgPSAocnRsKSA/ICctNHB4JyA6ICc0cHgnO1xuICAgIHZhciBJQ09OX1RSQU5TTEFURSA9IChydGwpID8gJy00cHgnIDogJzRweCc7XG4gICAgdmFyIFRFWFRfT1JJR0lOX1ggPSAocnRsKSA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgdmFyIElDT05fT1JJR0lOX1ggPSAocnRsKSA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgdmFyIEZPUldBUkRfVEVYVF9LRVlGUkFNRVMgPSBbXG4gICAgICAgIHsgb2Zmc2V0OiAwLCBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiICsgU1RBUlRfVEVYVF9UUkFOU0xBVEUgKyBcIiwgXCIgKyBhZGRTYWZlQXJlYSg4KSArIFwiKSBzY2FsZSgyLjEpXCIgfSxcbiAgICAgICAgeyBvZmZzZXQ6IDEsIG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIgKyBFTkRfVEVYVF9UUkFOU0xBVEUgKyBcIiwgXCIgKyBhZGRTYWZlQXJlYSgtNDApICsgXCIpIHNjYWxlKDEpXCIgfVxuICAgIF07XG4gICAgdmFyIEJBQ0tXQVJEX1RFWFRfS0VZRlJBTUVTID0gW1xuICAgICAgICB7IG9mZnNldDogMCwgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIiArIEVORF9URVhUX1RSQU5TTEFURSArIFwiLCBcIiArIGFkZFNhZmVBcmVhKC00MCkgKyBcIikgc2NhbGUoMSlcIiB9LFxuICAgICAgICB7IG9mZnNldDogMC42LCBvcGFjaXR5OiAwIH0sXG4gICAgICAgIHsgb2Zmc2V0OiAxLCBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiICsgU1RBUlRfVEVYVF9UUkFOU0xBVEUgKyBcIiwgXCIgKyBhZGRTYWZlQXJlYSg4KSArIFwiKSBzY2FsZSgyLjEpXCIgfVxuICAgIF07XG4gICAgdmFyIFRFWFRfS0VZRlJBTUVTID0gKGJhY2tEaXJlY3Rpb24pID8gQkFDS1dBUkRfVEVYVF9LRVlGUkFNRVMgOiBGT1JXQVJEX1RFWFRfS0VZRlJBTUVTO1xuICAgIHZhciBGT1JXQVJEX0lDT05fS0VZRlJBTUVTID0gW1xuICAgICAgICB7IG9mZnNldDogMCwgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKFwiICsgSUNPTl9UUkFOU0xBVEUgKyBcIiwgXCIgKyBhZGRTYWZlQXJlYSgtMzUpICsgXCIsIDApIHNjYWxlKDAuNilcIiB9LFxuICAgICAgICB7IG9mZnNldDogMSwgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKFwiICsgSUNPTl9UUkFOU0xBVEUgKyBcIiwgXCIgKyBhZGRTYWZlQXJlYSgtNDApICsgXCIsIDApIHNjYWxlKDEpXCIgfVxuICAgIF07XG4gICAgdmFyIEJBQ0tXQVJEX0lDT05fS0VZRlJBTUVTID0gW1xuICAgICAgICB7IG9mZnNldDogMCwgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIiArIElDT05fVFJBTlNMQVRFICsgXCIsIFwiICsgYWRkU2FmZUFyZWEoLTQwKSArIFwiKSBzY2FsZSgxKVwiIH0sXG4gICAgICAgIHsgb2Zmc2V0OiAwLjIsIG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIgKyBJQ09OX1RSQU5TTEFURSArIFwiLCBcIiArIGFkZFNhZmVBcmVhKC0zNSkgKyBcIikgc2NhbGUoMC42KVwiIH0sXG4gICAgICAgIHsgb2Zmc2V0OiAxLCBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiICsgSUNPTl9UUkFOU0xBVEUgKyBcIiwgXCIgKyBhZGRTYWZlQXJlYSgtMzUpICsgXCIpIHNjYWxlKDAuNilcIiB9XG4gICAgXTtcbiAgICB2YXIgSUNPTl9LRVlGUkFNRVMgPSAoYmFja0RpcmVjdGlvbikgPyBCQUNLV0FSRF9JQ09OX0tFWUZSQU1FUyA6IEZPUldBUkRfSUNPTl9LRVlGUkFNRVM7XG4gICAgdmFyIGVudGVyaW5nQmFja0J1dHRvblRleHRBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICB2YXIgZW50ZXJpbmdCYWNrQnV0dG9uSWNvbkFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIHZhciBjbG9uZWRCYWNrQnV0dG9uRWwgPSBnZXRDbG9uZWRFbGVtZW50KCdpb24tYmFjay1idXR0b24nKTtcbiAgICB2YXIgYmFja0J1dHRvblRleHRFbCA9IGNsb25lZEJhY2tCdXR0b25FbC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXRleHQnKTtcbiAgICB2YXIgYmFja0J1dHRvbkljb25FbCA9IGNsb25lZEJhY2tCdXR0b25FbC5xdWVyeVNlbGVjdG9yKCdpb24taWNvbicpO1xuICAgIGNsb25lZEJhY2tCdXR0b25FbC50ZXh0ID0gYmFja0J1dHRvbkVsLnRleHQ7XG4gICAgY2xvbmVkQmFja0J1dHRvbkVsLm1vZGUgPSBiYWNrQnV0dG9uRWwubW9kZTtcbiAgICBjbG9uZWRCYWNrQnV0dG9uRWwuaWNvbiA9IGJhY2tCdXR0b25FbC5pY29uO1xuICAgIGNsb25lZEJhY2tCdXR0b25FbC5jb2xvciA9IGJhY2tCdXR0b25FbC5jb2xvcjtcbiAgICBjbG9uZWRCYWNrQnV0dG9uRWwuZGlzYWJsZWQgPSBiYWNrQnV0dG9uRWwuZGlzYWJsZWQ7XG4gICAgY2xvbmVkQmFja0J1dHRvbkVsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgY2xvbmVkQmFja0J1dHRvbkVsLnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdmaXhlZCcpO1xuICAgIGVudGVyaW5nQmFja0J1dHRvbkljb25BbmltYXRpb24uYWRkRWxlbWVudChiYWNrQnV0dG9uSWNvbkVsKTtcbiAgICBlbnRlcmluZ0JhY2tCdXR0b25UZXh0QW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFja0J1dHRvblRleHRFbCk7XG4gICAgZW50ZXJpbmdCYWNrQnV0dG9uVGV4dEFuaW1hdGlvblxuICAgICAgICAuYmVmb3JlU3R5bGVzKHtcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiBURVhUX09SSUdJTl9YICsgXCIgY2VudGVyXCJcbiAgICB9KVxuICAgICAgICAuYmVmb3JlQWRkV3JpdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICBiYWNrQnV0dG9uRWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICBjbG9uZWRCYWNrQnV0dG9uRWwuc3R5bGUuc2V0UHJvcGVydHkoVEVYVF9PUklHSU5fWCwgQkFDS19CVVRUT05fU1RBUlRfT0ZGU0VUKTtcbiAgICB9KVxuICAgICAgICAuYWZ0ZXJBZGRXcml0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJhY2tCdXR0b25FbC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICcnKTtcbiAgICAgICAgY2xvbmVkQmFja0J1dHRvbkVsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgY2xvbmVkQmFja0J1dHRvbkVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KFRFWFRfT1JJR0lOX1gpO1xuICAgIH0pXG4gICAgICAgIC5rZXlmcmFtZXMoVEVYVF9LRVlGUkFNRVMpO1xuICAgIGVudGVyaW5nQmFja0J1dHRvbkljb25BbmltYXRpb25cbiAgICAgICAgLmJlZm9yZVN0eWxlcyh7XG4gICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogSUNPTl9PUklHSU5fWCArIFwiIGNlbnRlclwiXG4gICAgfSlcbiAgICAgICAgLmtleWZyYW1lcyhJQ09OX0tFWUZSQU1FUyk7XG4gICAgcm9vdEFuaW1hdGlvbi5hZGRBbmltYXRpb24oW2VudGVyaW5nQmFja0J1dHRvblRleHRBbmltYXRpb24sIGVudGVyaW5nQmFja0J1dHRvbkljb25BbmltYXRpb25dKTtcbn07XG52YXIgYW5pbWF0ZUxhcmdlVGl0bGUgPSBmdW5jdGlvbiAocm9vdEFuaW1hdGlvbiwgcnRsLCBiYWNrRGlyZWN0aW9uLCBsYXJnZVRpdGxlRWwpIHtcbiAgICB2YXIgX2E7XG4gICAgdmFyIGxhcmdlVGl0bGVCb3VuZHMgPSBsYXJnZVRpdGxlRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIFRJVExFX1NUQVJUX09GRlNFVCA9IChydGwpID8gXCJjYWxjKDEwMCUgLSBcIiArIGxhcmdlVGl0bGVCb3VuZHMucmlnaHQgKyBcInB4KVwiIDogbGFyZ2VUaXRsZUJvdW5kcy5sZWZ0ICsgXCJweFwiO1xuICAgIHZhciBTVEFSVF9UUkFOU0xBVEUgPSAocnRsKSA/ICctMThweCcgOiAnMThweCc7XG4gICAgdmFyIE9SSUdJTl9YID0gKHJ0bCkgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIHZhciBCQUNLV0FSRFNfS0VZRlJBTUVTID0gW1xuICAgICAgICB7IG9mZnNldDogMCwgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIiArIFNUQVJUX1RSQU5TTEFURSArIFwiLCBcIiArIGFkZFNhZmVBcmVhKDApICsgXCIpIHNjYWxlKDAuNDkpXCIgfSxcbiAgICAgICAgeyBvZmZzZXQ6IDAuMSwgb3BhY2l0eTogMCB9LFxuICAgICAgICB7IG9mZnNldDogMSwgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgwLCBcIiArIGFkZFNhZmVBcmVhKDQ5KSArIFwiKSBzY2FsZSgxKVwiIH1cbiAgICBdO1xuICAgIHZhciBGT1JXQVJEU19LRVlGUkFNRVMgPSBbXG4gICAgICAgIHsgb2Zmc2V0OiAwLCBvcGFjaXR5OiAwLjk5LCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDAsIFwiICsgYWRkU2FmZUFyZWEoNDkpICsgXCIpIHNjYWxlKDEpXCIgfSxcbiAgICAgICAgeyBvZmZzZXQ6IDAuNiwgb3BhY2l0eTogMCB9LFxuICAgICAgICB7IG9mZnNldDogMSwgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIiArIFNUQVJUX1RSQU5TTEFURSArIFwiLCBcIiArIGFkZFNhZmVBcmVhKDApICsgXCIpIHNjYWxlKDAuNSlcIiB9XG4gICAgXTtcbiAgICB2YXIgS0VZRlJBTUVTID0gKGJhY2tEaXJlY3Rpb24pID8gQkFDS1dBUkRTX0tFWUZSQU1FUyA6IEZPUldBUkRTX0tFWUZSQU1FUztcbiAgICB2YXIgY2xvbmVkVGl0bGVFbCA9IGdldENsb25lZEVsZW1lbnQoJ2lvbi10aXRsZScpO1xuICAgIHZhciBjbG9uZWRMYXJnZVRpdGxlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgY2xvbmVkVGl0bGVFbC5pbm5lclRleHQgPSBsYXJnZVRpdGxlRWwuaW5uZXJUZXh0O1xuICAgIGNsb25lZFRpdGxlRWwuc2l6ZSA9IGxhcmdlVGl0bGVFbC5zaXplO1xuICAgIGNsb25lZFRpdGxlRWwuY29sb3IgPSBsYXJnZVRpdGxlRWwuY29sb3I7XG4gICAgY2xvbmVkTGFyZ2VUaXRsZUFuaW1hdGlvbi5hZGRFbGVtZW50KGNsb25lZFRpdGxlRWwpO1xuICAgIGNsb25lZExhcmdlVGl0bGVBbmltYXRpb25cbiAgICAgICAgLmJlZm9yZVN0eWxlcygoX2EgPSB7XG4gICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6IE9SSUdJTl9YICsgXCIgY2VudGVyXCIsXG4gICAgICAgICAgICAnaGVpZ2h0JzogJzQ2cHgnLFxuICAgICAgICAgICAgJ2Rpc3BsYXknOiAnJyxcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdyZWxhdGl2ZSdcbiAgICAgICAgfSxcbiAgICAgICAgX2FbT1JJR0lOX1hdID0gVElUTEVfU1RBUlRfT0ZGU0VULFxuICAgICAgICBfYSkpXG4gICAgICAgIC5iZWZvcmVBZGRXcml0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxhcmdlVGl0bGVFbC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgfSlcbiAgICAgICAgLmFmdGVyQWRkV3JpdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICBsYXJnZVRpdGxlRWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnJyk7XG4gICAgICAgIGNsb25lZFRpdGxlRWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIH0pXG4gICAgICAgIC5rZXlmcmFtZXMoS0VZRlJBTUVTKTtcbiAgICByb290QW5pbWF0aW9uLmFkZEFuaW1hdGlvbihjbG9uZWRMYXJnZVRpdGxlQW5pbWF0aW9uKTtcbn07XG52YXIgaW9zVHJhbnNpdGlvbkFuaW1hdGlvbiA9IGZ1bmN0aW9uIChuYXZFbCwgb3B0cykge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBFQVNJTkcgPSAnY3ViaWMtYmV6aWVyKDAuMzIsMC43MiwwLDEpJztcbiAgICAgICAgdmFyIE9QQUNJVFlfMSA9ICdvcGFjaXR5JztcbiAgICAgICAgdmFyIFRSQU5TRk9STV8xID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgIHZhciBDRU5URVJfMSA9ICcwJSc7XG4gICAgICAgIHZhciBPRkZfT1BBQ0lUWSA9IDAuODtcbiAgICAgICAgdmFyIGlzUlRMXzEgPSBuYXZFbC5vd25lckRvY3VtZW50LmRpciA9PT0gJ3J0bCc7XG4gICAgICAgIHZhciBPRkZfUklHSFRfMSA9IGlzUlRMXzEgPyAnLTk5LjUlJyA6ICc5OS41JSc7XG4gICAgICAgIHZhciBPRkZfTEVGVF8xID0gaXNSVExfMSA/ICczMyUnIDogJy0zMyUnO1xuICAgICAgICB2YXIgZW50ZXJpbmdFbCA9IG9wdHMuZW50ZXJpbmdFbDtcbiAgICAgICAgdmFyIGxlYXZpbmdFbCA9IG9wdHMubGVhdmluZ0VsO1xuICAgICAgICB2YXIgYmFja0RpcmVjdGlvbl8xID0gKG9wdHMuZGlyZWN0aW9uID09PSAnYmFjaycpO1xuICAgICAgICB2YXIgY29udGVudEVsID0gZW50ZXJpbmdFbC5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgPiBpb24tY29udGVudCcpO1xuICAgICAgICB2YXIgaGVhZGVyRWxzID0gZW50ZXJpbmdFbC5xdWVyeVNlbGVjdG9yQWxsKCc6c2NvcGUgPiBpb24taGVhZGVyID4gKjpub3QoaW9uLXRvb2xiYXIpLCA6c2NvcGUgPiBpb24tZm9vdGVyID4gKicpO1xuICAgICAgICB2YXIgZW50ZXJpbmdUb29sQmFyRWxzID0gZW50ZXJpbmdFbC5xdWVyeVNlbGVjdG9yQWxsKCc6c2NvcGUgPiBpb24taGVhZGVyID4gaW9uLXRvb2xiYXInKTtcbiAgICAgICAgdmFyIHJvb3RBbmltYXRpb25fMSA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICB2YXIgZW50ZXJpbmdDb250ZW50QW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgIHJvb3RBbmltYXRpb25fMVxuICAgICAgICAgICAgLmFkZEVsZW1lbnQoZW50ZXJpbmdFbClcbiAgICAgICAgICAgIC5kdXJhdGlvbihvcHRzLmR1cmF0aW9uIHx8IERVUkFUSU9OKVxuICAgICAgICAgICAgLmVhc2luZyhvcHRzLmVhc2luZyB8fCBFQVNJTkcpXG4gICAgICAgICAgICAuZmlsbCgnYm90aCcpXG4gICAgICAgICAgICAuYmVmb3JlUmVtb3ZlQ2xhc3MoJ2lvbi1wYWdlLWludmlzaWJsZScpO1xuICAgICAgICBpZiAobGVhdmluZ0VsICYmIG5hdkVsKSB7XG4gICAgICAgICAgICB2YXIgbmF2RGVjb3JBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICAgICAgICAgIG5hdkRlY29yQW5pbWF0aW9uLmFkZEVsZW1lbnQobmF2RWwpO1xuICAgICAgICAgICAgcm9vdEFuaW1hdGlvbl8xLmFkZEFuaW1hdGlvbihuYXZEZWNvckFuaW1hdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjb250ZW50RWwgJiYgZW50ZXJpbmdUb29sQmFyRWxzLmxlbmd0aCA9PT0gMCAmJiBoZWFkZXJFbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBlbnRlcmluZ0NvbnRlbnRBbmltYXRpb24uYWRkRWxlbWVudChlbnRlcmluZ0VsLnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IC5pb24tcGFnZSwgOnNjb3BlID4gaW9uLW5hdiwgOnNjb3BlID4gaW9uLXRhYnMnKSk7IC8vIFJFVklFV1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW50ZXJpbmdDb250ZW50QW5pbWF0aW9uLmFkZEVsZW1lbnQoY29udGVudEVsKTsgLy8gUkVWSUVXXG4gICAgICAgICAgICBlbnRlcmluZ0NvbnRlbnRBbmltYXRpb24uYWRkRWxlbWVudChoZWFkZXJFbHMpO1xuICAgICAgICB9XG4gICAgICAgIHJvb3RBbmltYXRpb25fMS5hZGRBbmltYXRpb24oZW50ZXJpbmdDb250ZW50QW5pbWF0aW9uKTtcbiAgICAgICAgaWYgKGJhY2tEaXJlY3Rpb25fMSkge1xuICAgICAgICAgICAgZW50ZXJpbmdDb250ZW50QW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgLmJlZm9yZUNsZWFyU3R5bGVzKFtPUEFDSVRZXzFdKVxuICAgICAgICAgICAgICAgIC5mcm9tVG8oJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlWChcIiArIE9GRl9MRUZUXzEgKyBcIilcIiwgXCJ0cmFuc2xhdGVYKFwiICsgQ0VOVEVSXzEgKyBcIilcIilcbiAgICAgICAgICAgICAgICAuZnJvbVRvKE9QQUNJVFlfMSwgT0ZGX09QQUNJVFksIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZW50ZXJpbmcgY29udGVudCwgZm9yd2FyZCBkaXJlY3Rpb25cbiAgICAgICAgICAgIGVudGVyaW5nQ29udGVudEFuaW1hdGlvblxuICAgICAgICAgICAgICAgIC5iZWZvcmVDbGVhclN0eWxlcyhbT1BBQ0lUWV8xXSlcbiAgICAgICAgICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZVgoXCIgKyBPRkZfUklHSFRfMSArIFwiKVwiLCBcInRyYW5zbGF0ZVgoXCIgKyBDRU5URVJfMSArIFwiKVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGVudEVsKSB7XG4gICAgICAgICAgICB2YXIgZW50ZXJpbmdUcmFuc2l0aW9uRWZmZWN0RWwgPSBzaGFkb3coY29udGVudEVsKS5xdWVyeVNlbGVjdG9yKCcudHJhbnNpdGlvbi1lZmZlY3QnKTtcbiAgICAgICAgICAgIGlmIChlbnRlcmluZ1RyYW5zaXRpb25FZmZlY3RFbCkge1xuICAgICAgICAgICAgICAgIHZhciBlbnRlcmluZ1RyYW5zaXRpb25Db3ZlckVsID0gZW50ZXJpbmdUcmFuc2l0aW9uRWZmZWN0RWwucXVlcnlTZWxlY3RvcignLnRyYW5zaXRpb24tY292ZXInKTtcbiAgICAgICAgICAgICAgICB2YXIgZW50ZXJpbmdUcmFuc2l0aW9uU2hhZG93RWwgPSBlbnRlcmluZ1RyYW5zaXRpb25FZmZlY3RFbC5xdWVyeVNlbGVjdG9yKCcudHJhbnNpdGlvbi1zaGFkb3cnKTtcbiAgICAgICAgICAgICAgICB2YXIgZW50ZXJpbmdUcmFuc2l0aW9uRWZmZWN0ID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgdmFyIGVudGVyaW5nVHJhbnNpdGlvbkNvdmVyID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgdmFyIGVudGVyaW5nVHJhbnNpdGlvblNoYWRvdyA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgIGVudGVyaW5nVHJhbnNpdGlvbkVmZmVjdFxuICAgICAgICAgICAgICAgICAgICAuYWRkRWxlbWVudChlbnRlcmluZ1RyYW5zaXRpb25FZmZlY3RFbClcbiAgICAgICAgICAgICAgICAgICAgLmJlZm9yZVN0eWxlcyh7IG9wYWNpdHk6ICcxJyB9KVxuICAgICAgICAgICAgICAgICAgICAuYWZ0ZXJTdHlsZXMoeyBvcGFjaXR5OiAnJyB9KTtcbiAgICAgICAgICAgICAgICBlbnRlcmluZ1RyYW5zaXRpb25Db3ZlclxuICAgICAgICAgICAgICAgICAgICAuYWRkRWxlbWVudChlbnRlcmluZ1RyYW5zaXRpb25Db3ZlckVsKSAvLyBSRVZJRVdcbiAgICAgICAgICAgICAgICAgICAgLmJlZm9yZUNsZWFyU3R5bGVzKFtPUEFDSVRZXzFdKVxuICAgICAgICAgICAgICAgICAgICAuZnJvbVRvKE9QQUNJVFlfMSwgMCwgMC4xKTtcbiAgICAgICAgICAgICAgICBlbnRlcmluZ1RyYW5zaXRpb25TaGFkb3dcbiAgICAgICAgICAgICAgICAgICAgLmFkZEVsZW1lbnQoZW50ZXJpbmdUcmFuc2l0aW9uU2hhZG93RWwpIC8vIFJFVklFV1xuICAgICAgICAgICAgICAgICAgICAuYmVmb3JlQ2xlYXJTdHlsZXMoW09QQUNJVFlfMV0pXG4gICAgICAgICAgICAgICAgICAgIC5mcm9tVG8oT1BBQ0lUWV8xLCAwLjAzLCAwLjcwKTtcbiAgICAgICAgICAgICAgICBlbnRlcmluZ1RyYW5zaXRpb25FZmZlY3QuYWRkQW5pbWF0aW9uKFtlbnRlcmluZ1RyYW5zaXRpb25Db3ZlciwgZW50ZXJpbmdUcmFuc2l0aW9uU2hhZG93XSk7XG4gICAgICAgICAgICAgICAgZW50ZXJpbmdDb250ZW50QW5pbWF0aW9uLmFkZEFuaW1hdGlvbihbZW50ZXJpbmdUcmFuc2l0aW9uRWZmZWN0XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVudGVyaW5nQ29udGVudEhhc0xhcmdlVGl0bGVfMSA9IGVudGVyaW5nRWwucXVlcnlTZWxlY3RvcignaW9uLWhlYWRlci5oZWFkZXItY29sbGFwc2UtY29uZGVuc2UnKTtcbiAgICAgICAgdmFyIF9hID0gY3JlYXRlTGFyZ2VUaXRsZVRyYW5zaXRpb24ocm9vdEFuaW1hdGlvbl8xLCBpc1JUTF8xLCBiYWNrRGlyZWN0aW9uXzEsIGVudGVyaW5nRWwsIGxlYXZpbmdFbCksIGZvcndhcmRfMSA9IF9hLmZvcndhcmQsIGJhY2t3YXJkXzEgPSBfYS5iYWNrd2FyZDtcbiAgICAgICAgZW50ZXJpbmdUb29sQmFyRWxzLmZvckVhY2goZnVuY3Rpb24gKGVudGVyaW5nVG9vbEJhckVsKSB7XG4gICAgICAgICAgICB2YXIgZW50ZXJpbmdUb29sQmFyID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICBlbnRlcmluZ1Rvb2xCYXIuYWRkRWxlbWVudChlbnRlcmluZ1Rvb2xCYXJFbCk7XG4gICAgICAgICAgICByb290QW5pbWF0aW9uXzEuYWRkQW5pbWF0aW9uKGVudGVyaW5nVG9vbEJhcik7XG4gICAgICAgICAgICB2YXIgZW50ZXJpbmdUaXRsZSA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICAgICAgZW50ZXJpbmdUaXRsZS5hZGRFbGVtZW50KGVudGVyaW5nVG9vbEJhckVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi10aXRsZScpKTsgLy8gUkVWSUVXXG4gICAgICAgICAgICB2YXIgZW50ZXJpbmdUb29sQmFyQnV0dG9ucyA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICAgICAgdmFyIGJ1dHRvbnMgPSBBcnJheS5mcm9tKGVudGVyaW5nVG9vbEJhckVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1idXR0b25zLFttZW51VG9nZ2xlXScpKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnRIZWFkZXIgPSBlbnRlcmluZ1Rvb2xCYXJFbC5jbG9zZXN0KCdpb24taGVhZGVyJyk7XG4gICAgICAgICAgICB2YXIgaW5hY3RpdmVIZWFkZXIgPSBwYXJlbnRIZWFkZXIgJiYgcGFyZW50SGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlLWluYWN0aXZlJyk7XG4gICAgICAgICAgICB2YXIgYnV0dG9uc1RvQW5pbWF0ZTtcbiAgICAgICAgICAgIGlmIChiYWNrRGlyZWN0aW9uXzEpIHtcbiAgICAgICAgICAgICAgICBidXR0b25zVG9BbmltYXRlID0gYnV0dG9ucy5maWx0ZXIoZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNDb2xsYXBzZUJ1dHRvbiA9IGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbnMtY29sbGFwc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChpc0NvbGxhcHNlQnV0dG9uICYmICFpbmFjdGl2ZUhlYWRlcikgfHwgIWlzQ29sbGFwc2VCdXR0b247XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBidXR0b25zVG9BbmltYXRlID0gYnV0dG9ucy5maWx0ZXIoZnVuY3Rpb24gKGJ1dHRvbikgeyByZXR1cm4gIWJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbnMtY29sbGFwc2UnKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbnRlcmluZ1Rvb2xCYXJCdXR0b25zLmFkZEVsZW1lbnQoYnV0dG9uc1RvQW5pbWF0ZSk7XG4gICAgICAgICAgICB2YXIgZW50ZXJpbmdUb29sQmFySXRlbXMgPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICAgICAgICAgIGVudGVyaW5nVG9vbEJhckl0ZW1zLmFkZEVsZW1lbnQoZW50ZXJpbmdUb29sQmFyRWwucXVlcnlTZWxlY3RvckFsbCgnOnNjb3BlID4gKjpub3QoaW9uLXRpdGxlKTpub3QoaW9uLWJ1dHRvbnMpOm5vdChbbWVudVRvZ2dsZV0pJykpO1xuICAgICAgICAgICAgdmFyIGVudGVyaW5nVG9vbEJhckJnID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICBlbnRlcmluZ1Rvb2xCYXJCZy5hZGRFbGVtZW50KHNoYWRvdyhlbnRlcmluZ1Rvb2xCYXJFbCkucXVlcnlTZWxlY3RvcignLnRvb2xiYXItYmFja2dyb3VuZCcpKTsgLy8gUkVWSUVXXG4gICAgICAgICAgICB2YXIgZW50ZXJpbmdCYWNrQnV0dG9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB2YXIgYmFja0J1dHRvbkVsID0gZW50ZXJpbmdUb29sQmFyRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2stYnV0dG9uJyk7XG4gICAgICAgICAgICBpZiAoYmFja0J1dHRvbkVsKSB7XG4gICAgICAgICAgICAgICAgZW50ZXJpbmdCYWNrQnV0dG9uLmFkZEVsZW1lbnQoYmFja0J1dHRvbkVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVudGVyaW5nVG9vbEJhci5hZGRBbmltYXRpb24oW2VudGVyaW5nVGl0bGUsIGVudGVyaW5nVG9vbEJhckJ1dHRvbnMsIGVudGVyaW5nVG9vbEJhckl0ZW1zLCBlbnRlcmluZ1Rvb2xCYXJCZywgZW50ZXJpbmdCYWNrQnV0dG9uXSk7XG4gICAgICAgICAgICBlbnRlcmluZ1Rvb2xCYXJCdXR0b25zLmZyb21UbyhPUEFDSVRZXzEsIDAuMDEsIDEpO1xuICAgICAgICAgICAgZW50ZXJpbmdUb29sQmFySXRlbXMuZnJvbVRvKE9QQUNJVFlfMSwgMC4wMSwgMSk7XG4gICAgICAgICAgICBpZiAoYmFja0RpcmVjdGlvbl8xKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbmFjdGl2ZUhlYWRlcikge1xuICAgICAgICAgICAgICAgICAgICBlbnRlcmluZ1RpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZVgoXCIgKyBPRkZfTEVGVF8xICsgXCIpXCIsIFwidHJhbnNsYXRlWChcIiArIENFTlRFUl8xICsgXCIpXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZnJvbVRvKE9QQUNJVFlfMSwgMC4wMSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVudGVyaW5nVG9vbEJhckl0ZW1zLmZyb21UbygndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGVYKFwiICsgT0ZGX0xFRlRfMSArIFwiKVwiLCBcInRyYW5zbGF0ZVgoXCIgKyBDRU5URVJfMSArIFwiKVwiKTtcbiAgICAgICAgICAgICAgICAvLyBiYWNrIGRpcmVjdGlvbiwgZW50ZXJpbmcgcGFnZSBoYXMgYSBiYWNrIGJ1dHRvblxuICAgICAgICAgICAgICAgIGVudGVyaW5nQmFja0J1dHRvbi5mcm9tVG8oT1BBQ0lUWV8xLCAwLjAxLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGVudGVyaW5nIHRvb2xiYXIsIGZvcndhcmQgZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKCFlbnRlcmluZ0NvbnRlbnRIYXNMYXJnZVRpdGxlXzEpIHtcbiAgICAgICAgICAgICAgICAgICAgZW50ZXJpbmdUaXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZyb21UbygndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGVYKFwiICsgT0ZGX1JJR0hUXzEgKyBcIilcIiwgXCJ0cmFuc2xhdGVYKFwiICsgQ0VOVEVSXzEgKyBcIilcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mcm9tVG8oT1BBQ0lUWV8xLCAwLjAxLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZW50ZXJpbmdUb29sQmFySXRlbXMuZnJvbVRvKCd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZVgoXCIgKyBPRkZfUklHSFRfMSArIFwiKVwiLCBcInRyYW5zbGF0ZVgoXCIgKyBDRU5URVJfMSArIFwiKVwiKTtcbiAgICAgICAgICAgICAgICBlbnRlcmluZ1Rvb2xCYXJCZ1xuICAgICAgICAgICAgICAgICAgICAuYmVmb3JlQ2xlYXJTdHlsZXMoW09QQUNJVFlfMV0pXG4gICAgICAgICAgICAgICAgICAgIC5mcm9tVG8oT1BBQ0lUWV8xLCAwLjAxLCAxKTtcbiAgICAgICAgICAgICAgICAvLyBmb3J3YXJkIGRpcmVjdGlvbiwgZW50ZXJpbmcgcGFnZSBoYXMgYSBiYWNrIGJ1dHRvblxuICAgICAgICAgICAgICAgIGlmICghZm9yd2FyZF8xKSB7XG4gICAgICAgICAgICAgICAgICAgIGVudGVyaW5nQmFja0J1dHRvbi5mcm9tVG8oT1BBQ0lUWV8xLCAwLjAxLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGJhY2tCdXR0b25FbCAmJiAhZm9yd2FyZF8xKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbnRlcmluZ0JhY2tCdG5UZXh0ID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGVudGVyaW5nQmFja0J0blRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRFbGVtZW50KHNoYWRvdyhiYWNrQnV0dG9uRWwpLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tdGV4dCcpKSAvLyBSRVZJRVdcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mcm9tVG8oXCJ0cmFuc2Zvcm1cIiwgKGlzUlRMXzEgPyAndHJhbnNsYXRlWCgtMTAwcHgpJyA6ICd0cmFuc2xhdGVYKDEwMHB4KScpLCAndHJhbnNsYXRlWCgwcHgpJyk7XG4gICAgICAgICAgICAgICAgICAgIGVudGVyaW5nVG9vbEJhci5hZGRBbmltYXRpb24oZW50ZXJpbmdCYWNrQnRuVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gc2V0dXAgbGVhdmluZyB2aWV3XG4gICAgICAgIGlmIChsZWF2aW5nRWwpIHtcbiAgICAgICAgICAgIHZhciBsZWF2aW5nQ29udGVudCA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICAgICAgdmFyIGxlYXZpbmdDb250ZW50RWwgPSBsZWF2aW5nRWwucXVlcnlTZWxlY3RvcignOnNjb3BlID4gaW9uLWNvbnRlbnQnKTtcbiAgICAgICAgICAgIGxlYXZpbmdDb250ZW50LmFkZEVsZW1lbnQobGVhdmluZ0NvbnRlbnRFbCk7IC8vIFJFVklFV1xuICAgICAgICAgICAgbGVhdmluZ0NvbnRlbnQuYWRkRWxlbWVudChsZWF2aW5nRWwucXVlcnlTZWxlY3RvckFsbCgnOnNjb3BlID4gaW9uLWhlYWRlciA+ICo6bm90KGlvbi10b29sYmFyKSwgOnNjb3BlID4gaW9uLWZvb3RlciA+IConKSk7XG4gICAgICAgICAgICByb290QW5pbWF0aW9uXzEuYWRkQW5pbWF0aW9uKGxlYXZpbmdDb250ZW50KTtcbiAgICAgICAgICAgIGlmIChiYWNrRGlyZWN0aW9uXzEpIHtcbiAgICAgICAgICAgICAgICAvLyBsZWF2aW5nIGNvbnRlbnQsIGJhY2sgZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgbGVhdmluZ0NvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgLmJlZm9yZUNsZWFyU3R5bGVzKFtPUEFDSVRZXzFdKVxuICAgICAgICAgICAgICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZVgoXCIgKyBDRU5URVJfMSArIFwiKVwiLCAoaXNSVExfMSA/ICd0cmFuc2xhdGVYKC0xMDAlKScgOiAndHJhbnNsYXRlWCgxMDAlKScpKTtcbiAgICAgICAgICAgICAgICB2YXIgbGVhdmluZ1BhZ2VfMSA9IGdldElvblBhZ2VFbGVtZW50KGxlYXZpbmdFbCk7XG4gICAgICAgICAgICAgICAgcm9vdEFuaW1hdGlvbl8xLmFmdGVyQWRkV3JpdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocm9vdEFuaW1hdGlvbl8xLmdldERpcmVjdGlvbigpID09PSAnbm9ybWFsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmluZ1BhZ2VfMS5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGxlYXZpbmcgY29udGVudCwgZm9yd2FyZCBkaXJlY3Rpb25cbiAgICAgICAgICAgICAgICBsZWF2aW5nQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZVgoXCIgKyBDRU5URVJfMSArIFwiKVwiLCBcInRyYW5zbGF0ZVgoXCIgKyBPRkZfTEVGVF8xICsgXCIpXCIpXG4gICAgICAgICAgICAgICAgICAgIC5mcm9tVG8oT1BBQ0lUWV8xLCAxLCBPRkZfT1BBQ0lUWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGVhdmluZ0NvbnRlbnRFbCkge1xuICAgICAgICAgICAgICAgIHZhciBsZWF2aW5nVHJhbnNpdGlvbkVmZmVjdEVsID0gc2hhZG93KGxlYXZpbmdDb250ZW50RWwpLnF1ZXJ5U2VsZWN0b3IoJy50cmFuc2l0aW9uLWVmZmVjdCcpO1xuICAgICAgICAgICAgICAgIGlmIChsZWF2aW5nVHJhbnNpdGlvbkVmZmVjdEVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsZWF2aW5nVHJhbnNpdGlvbkNvdmVyRWwgPSBsZWF2aW5nVHJhbnNpdGlvbkVmZmVjdEVsLnF1ZXJ5U2VsZWN0b3IoJy50cmFuc2l0aW9uLWNvdmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsZWF2aW5nVHJhbnNpdGlvblNoYWRvd0VsID0gbGVhdmluZ1RyYW5zaXRpb25FZmZlY3RFbC5xdWVyeVNlbGVjdG9yKCcudHJhbnNpdGlvbi1zaGFkb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlYXZpbmdUcmFuc2l0aW9uRWZmZWN0ID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsZWF2aW5nVHJhbnNpdGlvbkNvdmVyID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsZWF2aW5nVHJhbnNpdGlvblNoYWRvdyA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBsZWF2aW5nVHJhbnNpdGlvbkVmZmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZEVsZW1lbnQobGVhdmluZ1RyYW5zaXRpb25FZmZlY3RFbClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5iZWZvcmVTdHlsZXMoeyBvcGFjaXR5OiAnMScgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZnRlclN0eWxlcyh7IG9wYWNpdHk6ICcnIH0pO1xuICAgICAgICAgICAgICAgICAgICBsZWF2aW5nVHJhbnNpdGlvbkNvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkRWxlbWVudChsZWF2aW5nVHJhbnNpdGlvbkNvdmVyRWwpIC8vIFJFVklFV1xuICAgICAgICAgICAgICAgICAgICAgICAgLmJlZm9yZUNsZWFyU3R5bGVzKFtPUEFDSVRZXzFdKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZyb21UbyhPUEFDSVRZXzEsIDAuMSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGxlYXZpbmdUcmFuc2l0aW9uU2hhZG93XG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkRWxlbWVudChsZWF2aW5nVHJhbnNpdGlvblNoYWRvd0VsKSAvLyBSRVZJRVdcbiAgICAgICAgICAgICAgICAgICAgICAgIC5iZWZvcmVDbGVhclN0eWxlcyhbT1BBQ0lUWV8xXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mcm9tVG8oT1BBQ0lUWV8xLCAwLjcwLCAwLjAzKTtcbiAgICAgICAgICAgICAgICAgICAgbGVhdmluZ1RyYW5zaXRpb25FZmZlY3QuYWRkQW5pbWF0aW9uKFtsZWF2aW5nVHJhbnNpdGlvbkNvdmVyLCBsZWF2aW5nVHJhbnNpdGlvblNoYWRvd10pO1xuICAgICAgICAgICAgICAgICAgICBsZWF2aW5nQ29udGVudC5hZGRBbmltYXRpb24oW2xlYXZpbmdUcmFuc2l0aW9uRWZmZWN0XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxlYXZpbmdUb29sQmFyRWxzID0gbGVhdmluZ0VsLnF1ZXJ5U2VsZWN0b3JBbGwoJzpzY29wZSA+IGlvbi1oZWFkZXIgPiBpb24tdG9vbGJhcicpO1xuICAgICAgICAgICAgbGVhdmluZ1Rvb2xCYXJFbHMuZm9yRWFjaChmdW5jdGlvbiAobGVhdmluZ1Rvb2xCYXJFbCkge1xuICAgICAgICAgICAgICAgIHZhciBsZWF2aW5nVG9vbEJhciA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgIGxlYXZpbmdUb29sQmFyLmFkZEVsZW1lbnQobGVhdmluZ1Rvb2xCYXJFbCk7XG4gICAgICAgICAgICAgICAgdmFyIGxlYXZpbmdUaXRsZSA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgIGxlYXZpbmdUaXRsZS5hZGRFbGVtZW50KGxlYXZpbmdUb29sQmFyRWwucXVlcnlTZWxlY3RvcignaW9uLXRpdGxlJykpOyAvLyBSRVZJRVdcbiAgICAgICAgICAgICAgICB2YXIgbGVhdmluZ1Rvb2xCYXJCdXR0b25zID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgdmFyIGJ1dHRvbnMgPSBsZWF2aW5nVG9vbEJhckVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1idXR0b25zLFttZW51VG9nZ2xlXScpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRIZWFkZXIgPSBsZWF2aW5nVG9vbEJhckVsLmNsb3Nlc3QoJ2lvbi1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5hY3RpdmVIZWFkZXIgPSBwYXJlbnRIZWFkZXIgJiYgcGFyZW50SGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlLWluYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdmFyIGJ1dHRvbnNUb0FuaW1hdGUgPSBBcnJheS5mcm9tKGJ1dHRvbnMpLmZpbHRlcihmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0NvbGxhcHNlQnV0dG9uID0gYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYnV0dG9ucy1jb2xsYXBzZScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGlzQ29sbGFwc2VCdXR0b24gJiYgIWluYWN0aXZlSGVhZGVyKSB8fCAhaXNDb2xsYXBzZUJ1dHRvbjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBsZWF2aW5nVG9vbEJhckJ1dHRvbnMuYWRkRWxlbWVudChidXR0b25zVG9BbmltYXRlKTtcbiAgICAgICAgICAgICAgICB2YXIgbGVhdmluZ1Rvb2xCYXJJdGVtcyA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgIHZhciBsZWF2aW5nVG9vbEJhckl0ZW1FbHMgPSBsZWF2aW5nVG9vbEJhckVsLnF1ZXJ5U2VsZWN0b3JBbGwoJzpzY29wZSA+ICo6bm90KGlvbi10aXRsZSk6bm90KGlvbi1idXR0b25zKTpub3QoW21lbnVUb2dnbGVdKScpO1xuICAgICAgICAgICAgICAgIGlmIChsZWF2aW5nVG9vbEJhckl0ZW1FbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZWF2aW5nVG9vbEJhckl0ZW1zLmFkZEVsZW1lbnQobGVhdmluZ1Rvb2xCYXJJdGVtRWxzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGxlYXZpbmdUb29sQmFyQmcgPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICBsZWF2aW5nVG9vbEJhckJnLmFkZEVsZW1lbnQoc2hhZG93KGxlYXZpbmdUb29sQmFyRWwpLnF1ZXJ5U2VsZWN0b3IoJy50b29sYmFyLWJhY2tncm91bmQnKSk7IC8vIFJFVklFV1xuICAgICAgICAgICAgICAgIHZhciBsZWF2aW5nQmFja0J1dHRvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgIHZhciBiYWNrQnV0dG9uRWwgPSBsZWF2aW5nVG9vbEJhckVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgIGlmIChiYWNrQnV0dG9uRWwpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVhdmluZ0JhY2tCdXR0b24uYWRkRWxlbWVudChiYWNrQnV0dG9uRWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZWF2aW5nVG9vbEJhci5hZGRBbmltYXRpb24oW2xlYXZpbmdUaXRsZSwgbGVhdmluZ1Rvb2xCYXJCdXR0b25zLCBsZWF2aW5nVG9vbEJhckl0ZW1zLCBsZWF2aW5nQmFja0J1dHRvbiwgbGVhdmluZ1Rvb2xCYXJCZ10pO1xuICAgICAgICAgICAgICAgIHJvb3RBbmltYXRpb25fMS5hZGRBbmltYXRpb24obGVhdmluZ1Rvb2xCYXIpO1xuICAgICAgICAgICAgICAgIC8vIGZhZGUgb3V0IGxlYXZpbmcgdG9vbGJhciBpdGVtc1xuICAgICAgICAgICAgICAgIGxlYXZpbmdCYWNrQnV0dG9uLmZyb21UbyhPUEFDSVRZXzEsIDAuOTksIDApO1xuICAgICAgICAgICAgICAgIGxlYXZpbmdUb29sQmFyQnV0dG9ucy5mcm9tVG8oT1BBQ0lUWV8xLCAwLjk5LCAwKTtcbiAgICAgICAgICAgICAgICBsZWF2aW5nVG9vbEJhckl0ZW1zLmZyb21UbyhPUEFDSVRZXzEsIDAuOTksIDApO1xuICAgICAgICAgICAgICAgIGlmIChiYWNrRGlyZWN0aW9uXzEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmFjdGl2ZUhlYWRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGVhdmluZyB0b29sYmFyLCBiYWNrIGRpcmVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmluZ1RpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZyb21UbygndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGVYKFwiICsgQ0VOVEVSXzEgKyBcIilcIiwgKGlzUlRMXzEgPyAndHJhbnNsYXRlWCgtMTAwJSknIDogJ3RyYW5zbGF0ZVgoMTAwJSknKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZnJvbVRvKE9QQUNJVFlfMSwgMC45OSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGVhdmluZ1Rvb2xCYXJJdGVtcy5mcm9tVG8oJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlWChcIiArIENFTlRFUl8xICsgXCIpXCIsIChpc1JUTF8xID8gJ3RyYW5zbGF0ZVgoLTEwMCUpJyA6ICd0cmFuc2xhdGVYKDEwMCUpJykpO1xuICAgICAgICAgICAgICAgICAgICAvLyBsZWF2aW5nIHRvb2xiYXIsIGJhY2sgZGlyZWN0aW9uLCBhbmQgdGhlcmUncyBubyBlbnRlcmluZyB0b29sYmFyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3VsZCBqdXN0IHNsaWRlIG91dCwgbm8gZmFkaW5nIG91dFxuICAgICAgICAgICAgICAgICAgICBsZWF2aW5nVG9vbEJhckJnXG4gICAgICAgICAgICAgICAgICAgICAgICAuYmVmb3JlQ2xlYXJTdHlsZXMoW09QQUNJVFlfMV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuZnJvbVRvKE9QQUNJVFlfMSwgMSwgMC4wMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWNrQnV0dG9uRWwgJiYgIWJhY2t3YXJkXzEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsZWF2aW5nQmFja0J0blRleHQgPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZpbmdCYWNrQnRuVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRFbGVtZW50KHNoYWRvdyhiYWNrQnV0dG9uRWwpLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tdGV4dCcpKSAvLyBSRVZJRVdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZnJvbVRvKCd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZVgoXCIgKyBDRU5URVJfMSArIFwiKVwiLCBcInRyYW5zbGF0ZVgoXCIgKyAoKGlzUlRMXzEgPyAtMTI0IDogMTI0KSArICdweCcpICsgXCIpXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmluZ1Rvb2xCYXIuYWRkQW5pbWF0aW9uKGxlYXZpbmdCYWNrQnRuVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxlYXZpbmcgdG9vbGJhciwgZm9yd2FyZCBkaXJlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmFjdGl2ZUhlYWRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmluZ1RpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZyb21UbygndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGVYKFwiICsgQ0VOVEVSXzEgKyBcIilcIiwgXCJ0cmFuc2xhdGVYKFwiICsgT0ZGX0xFRlRfMSArIFwiKVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mcm9tVG8oT1BBQ0lUWV8xLCAwLjk5LCAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZnRlckNsZWFyU3R5bGVzKFtUUkFOU0ZPUk1fMSwgT1BBQ0lUWV8xXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGVhdmluZ1Rvb2xCYXJJdGVtc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZyb21UbygndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGVYKFwiICsgQ0VOVEVSXzEgKyBcIilcIiwgXCJ0cmFuc2xhdGVYKFwiICsgT0ZGX0xFRlRfMSArIFwiKVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFmdGVyQ2xlYXJTdHlsZXMoW1RSQU5TRk9STV8xLCBPUEFDSVRZXzFdKTtcbiAgICAgICAgICAgICAgICAgICAgbGVhdmluZ0JhY2tCdXR0b24uYWZ0ZXJDbGVhclN0eWxlcyhbT1BBQ0lUWV8xXSk7XG4gICAgICAgICAgICAgICAgICAgIGxlYXZpbmdUaXRsZS5hZnRlckNsZWFyU3R5bGVzKFtPUEFDSVRZXzFdKTtcbiAgICAgICAgICAgICAgICAgICAgbGVhdmluZ1Rvb2xCYXJCdXR0b25zLmFmdGVyQ2xlYXJTdHlsZXMoW09QQUNJVFlfMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb290QW5pbWF0aW9uXzE7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbn07XG5leHBvcnQgeyBpb3NUcmFuc2l0aW9uQW5pbWF0aW9uLCBzaGFkb3cgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=