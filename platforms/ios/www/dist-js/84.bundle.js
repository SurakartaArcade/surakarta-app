(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-slide_2-ios.entry.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-slide_2-ios.entry.js ***!
  \************************************************************************/
/*! exports provided: ion_slide, ion_slides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_slide", function() { return Slide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_slides", function() { return Slides; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");



var Slide = /** @class */ (function () {
    function Slide(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
    }
    Slide.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: (_a = {},
                _a[mode] = true,
                _a['swiper-slide'] = true,
                _a['swiper-zoom-container'] = true,
                _a) }));
    };
    Object.defineProperty(Slide, "style", {
        get: function () { return "ion-slide{height:100%}.slide-zoom,ion-slide{display:block;width:100%}.slide-zoom,.swiper-slide{text-align:center}.swiper-slide{display:-ms-flexbox;display:flex;position:relative;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;font-size:18px;-webkit-box-sizing:border-box;box-sizing:border-box}.swiper-slide img{width:auto;max-width:100%;height:auto;max-height:100%}"; },
        enumerable: true,
        configurable: true
    });
    return Slide;
}());
var Slides = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.swiperReady = false;
        this.swiper = new Promise(function (resolve) { _this.readySwiper = resolve; });
        /**
         * Options to pass to the swiper instance.
         * See http://idangero.us/swiper/api/ for valid options
         */
        this.options = {}; // SwiperOptions;  // TODO
        /**
         * If `true`, show the pagination.
         */
        this.pager = false;
        /**
         * If `true`, show the scrollbar.
         */
        this.scrollbar = false;
        this.ionSlidesDidLoad = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionSlidesDidLoad", 7);
        this.ionSlideTap = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionSlideTap", 7);
        this.ionSlideDoubleTap = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionSlideDoubleTap", 7);
        this.ionSlideWillChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionSlideWillChange", 7);
        this.ionSlideDidChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionSlideDidChange", 7);
        this.ionSlideNextStart = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionSlideNextStart", 7);
        this.ionSlidePrevStart = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionSlidePrevStart", 7);
        this.ionSlideNextEnd = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionSlideNextEnd", 7);
        this.ionSlidePrevEnd = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionSlidePrevEnd", 7);
        this.ionSlideTransitionStart = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionSlideTransitionStart", 7);
        this.ionSlideTransitionEnd = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionSlideTransitionEnd", 7);
        this.ionSlideDrag = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionSlideDrag", 7);
        this.ionSlideReachStart = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionSlideReachStart", 7);
        this.ionSlideReachEnd = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionSlideReachEnd", 7);
        this.ionSlideTouchStart = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionSlideTouchStart", 7);
        this.ionSlideTouchEnd = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionSlideTouchEnd", 7);
    }
    class_1.prototype.optionsChanged = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var swiper;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.swiperReady) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        Object.assign(swiper.params, this.options);
                        return [4 /*yield*/, this.update()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.connectedCallback = function () {
        var _this = this;
        var mut = this.mutationO = new MutationObserver(function () {
            if (_this.swiperReady) {
                _this.update();
            }
        });
        mut.observe(this.el, {
            childList: true,
            subtree: true
        });
        this.el.componentOnReady().then(function () { return _this.initSwiper(); });
    };
    class_1.prototype.disconnectedCallback = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var swiper;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.mutationO) {
                            this.mutationO.disconnect();
                            this.mutationO = undefined;
                        }
                        return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        swiper.destroy(true, true);
                        this.swiper = new Promise(function (resolve) { _this.readySwiper = resolve; });
                        this.swiperReady = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Update the underlying slider implementation. Call this if you've added or removed
     * child slides.
     */
    class_1.prototype.update = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var swiper;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.getSwiper(),
                            waitForSlides(this.el)
                        ])];
                    case 1:
                        swiper = (_a.sent())[0];
                        swiper.update();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Force swiper to update its height (when autoHeight is enabled) for the duration
     * equal to 'speed' parameter.
     *
     * @param speed The transition duration (in ms).
     */
    class_1.prototype.updateAutoHeight = function (speed) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var swiper;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        swiper.updateAutoHeight(speed);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Transition to the specified slide.
     *
     * @param index The index of the slide to transition to.
     * @param speed The transition duration (in ms).
     * @param runCallbacks If true, the transition will produce [Transition/SlideChange][Start/End] transition events.
     */
    class_1.prototype.slideTo = function (index, speed, runCallbacks) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var swiper;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        swiper.slideTo(index, speed, runCallbacks);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Transition to the next slide.
     *
     * @param speed The transition duration (in ms).
     * @param runCallbacks If true, the transition will produce [Transition/SlideChange][Start/End] transition events.
     */
    class_1.prototype.slideNext = function (speed, runCallbacks) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var swiper;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        swiper.slideNext(speed, runCallbacks);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Transition to the previous slide.
     *
     * @param speed The transition duration (in ms).
     * @param runCallbacks If true, the transition will produce the [Transition/SlideChange][Start/End] transition events.
     */
    class_1.prototype.slidePrev = function (speed, runCallbacks) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var swiper;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        swiper.slidePrev(speed, runCallbacks);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get the index of the active slide.
     */
    class_1.prototype.getActiveIndex = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var swiper;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        return [2 /*return*/, swiper.activeIndex];
                }
            });
        });
    };
    /**
     * Get the index of the previous slide.
     */
    class_1.prototype.getPreviousIndex = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var swiper;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        return [2 /*return*/, swiper.previousIndex];
                }
            });
        });
    };
    /**
     * Get the total number of slides.
     */
    class_1.prototype.length = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var swiper;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        return [2 /*return*/, swiper.slides.length];
                }
            });
        });
    };
    /**
     * Get whether or not the current slide is the last slide.
     */
    class_1.prototype.isEnd = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var swiper;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        return [2 /*return*/, swiper.isEnd];
                }
            });
        });
    };
    /**
     * Get whether or not the current slide is the first slide.
     */
    class_1.prototype.isBeginning = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var swiper;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        return [2 /*return*/, swiper.isBeginning];
                }
            });
        });
    };
    /**
     * Start auto play.
     */
    class_1.prototype.startAutoplay = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var swiper;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        if (swiper.autoplay) {
                            swiper.autoplay.start();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Stop auto play.
     */
    class_1.prototype.stopAutoplay = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var swiper;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        if (swiper.autoplay) {
                            swiper.autoplay.stop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Lock or unlock the ability to slide to the next slide.
     *
     * @param lock If `true`, disable swiping to the next slide.
     */
    class_1.prototype.lockSwipeToNext = function (lock) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var swiper;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        swiper.allowSlideNext = !lock;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Lock or unlock the ability to slide to the previous slide.
     *
     * @param lock If `true`, disable swiping to the previous slide.
     */
    class_1.prototype.lockSwipeToPrev = function (lock) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var swiper;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        swiper.allowSlidePrev = !lock;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Lock or unlock the ability to slide to the next or previous slide.
     *
     * @param lock If `true`, disable swiping to the next and previous slide.
     */
    class_1.prototype.lockSwipes = function (lock) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var swiper;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        swiper.allowSlideNext = !lock;
                        swiper.allowSlidePrev = !lock;
                        swiper.allowTouchMove = !lock;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get the Swiper instance.
     * Use this to access the full Swiper API.
     * See https://idangero.us/swiper/api/ for all API options.
     */
    class_1.prototype.getSwiper = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.swiper];
            });
        });
    };
    class_1.prototype.initSwiper = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var finalOptions, Swiper, swiper;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        finalOptions = this.normalizeOptions();
                        return [4 /*yield*/, __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ./swiper.bundle-ccdaac54.js */ "./node_modules/@ionic/core/dist/esm-es5/swiper.bundle-ccdaac54.js"))];
                    case 1:
                        Swiper = (_a.sent()).Swiper;
                        return [4 /*yield*/, waitForSlides(this.el)];
                    case 2:
                        _a.sent();
                        swiper = new Swiper(this.el, finalOptions);
                        this.swiperReady = true;
                        this.readySwiper(swiper);
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.normalizeOptions = function () {
        var _this = this;
        // Base options, can be changed
        // TODO Add interface SwiperOptions
        var swiperOptions = {
            effect: undefined,
            direction: 'horizontal',
            initialSlide: 0,
            loop: false,
            parallax: false,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 300,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'column',
            slidesPerGroup: 1,
            centeredSlides: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            touchEventsTarget: 'container',
            autoplay: false,
            freeMode: false,
            freeModeMomentum: true,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: true,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: false,
            freeModeMinimumVelocity: 0.02,
            autoHeight: false,
            setWrapperSize: false,
            zoom: {
                maxRatio: 3,
                minRatio: 1,
                toggle: false,
            },
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            touchStartPreventDefault: false,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: true,
            threshold: 0,
            touchMoveStopPropagation: true,
            touchReleaseOnEdges: false,
            iOSEdgeSwipeDetection: false,
            iOSEdgeSwipeThreshold: 20,
            resistance: true,
            resistanceRatio: 0.85,
            watchSlidesProgress: false,
            watchSlidesVisibility: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loopAdditionalSlides: 0,
            noSwiping: true,
            runCallbacksOnInit: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            },
            flipEffect: {
                slideShadows: true,
                limitRotation: true
            },
            cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            fadeEffect: {
                crossfade: false
            },
            a11y: {
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide'
            }
        };
        if (this.pager) {
            swiperOptions.pagination = {
                el: this.paginationEl,
                type: 'bullets',
                clickable: false,
                hideOnClick: false,
            };
        }
        if (this.scrollbar) {
            swiperOptions.scrollbar = {
                el: this.scrollbarEl,
                hide: true,
            };
        }
        // Keep the event options separate, we dont want users
        // overwriting these
        var eventOptions = {
            on: {
                init: function () {
                    setTimeout(function () {
                        _this.ionSlidesDidLoad.emit();
                    }, 20);
                },
                slideChangeTransitionStart: this.ionSlideWillChange.emit,
                slideChangeTransitionEnd: this.ionSlideDidChange.emit,
                slideNextTransitionStart: this.ionSlideNextStart.emit,
                slidePrevTransitionStart: this.ionSlidePrevStart.emit,
                slideNextTransitionEnd: this.ionSlideNextEnd.emit,
                slidePrevTransitionEnd: this.ionSlidePrevEnd.emit,
                transitionStart: this.ionSlideTransitionStart.emit,
                transitionEnd: this.ionSlideTransitionEnd.emit,
                sliderMove: this.ionSlideDrag.emit,
                reachBeginning: this.ionSlideReachStart.emit,
                reachEnd: this.ionSlideReachEnd.emit,
                touchStart: this.ionSlideTouchStart.emit,
                touchEnd: this.ionSlideTouchEnd.emit,
                tap: this.ionSlideTap.emit,
                doubleTap: this.ionSlideDoubleTap.emit
            }
        };
        var customEvents = (!!this.options && !!this.options.on) ? this.options.on : {};
        // merge "on" event listeners, while giving our event listeners priority
        var mergedEventOptions = { on: Object.assign(Object.assign({}, customEvents), eventOptions.on) };
        // Merge the base, user options, and events together then pas to swiper
        return Object.assign(Object.assign(Object.assign({}, swiperOptions), this.options), mergedEventOptions);
    };
    class_1.prototype.render = function () {
        var _a;
        var _this = this;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: (_a = {},
                _a["" + mode] = true,
                // Used internally for styling
                _a["slides-" + mode] = true,
                _a['swiper-container'] = true,
                _a) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "swiper-wrapper" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)), this.pager && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "swiper-pagination", ref: function (el) { return _this.paginationEl = el; } }), this.scrollbar && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "swiper-scrollbar", ref: function (el) { return _this.scrollbarEl = el; } })));
    };
    Object.defineProperty(class_1, "assetsDirs", {
        get: function () { return ["swiper"]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "options": ["optionsChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ".swiper-container{margin:0 auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translateZ(0);transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform}.swiper-invisible-blank-slide{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:height,-webkit-transform;-o-transition-property:transform,height;transition-property:transform,height;transition-property:transform,height,-webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(right,rgba(0,0,0,.5),transparent);background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(left,rgba(0,0,0,.5),transparent);background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(bottom,rgba(0,0,0,.5),transparent);background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(top,rgba(0,0,0,.5),transparent);background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:50%;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z\'%20fill%3D\'%23007aff\'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z\'%20fill%3D\'%23007aff\'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z\'%20fill%3D\'%23ffffff\'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z\'%20fill%3D\'%23ffffff\'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z\'%20fill%3D\'%23000000\'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z\'%20fill%3D\'%23000000\'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:opacity .3s;-o-transition:.3s opacity;transition:opacity .3s;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);-ms-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);-ms-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:top .2s,-webkit-transform .2s;transition:top .2s,-webkit-transform .2s;-o-transition:.2s transform,.2s top;transition:transform .2s,top .2s;transition:transform .2s,top .2s,-webkit-transform .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:left .2s,-webkit-transform .2s;transition:left .2s,-webkit-transform .2s;-o-transition:.2s transform,.2s left;transition:transform .2s,left .2s;transition:transform .2s,left .2s,-webkit-transform .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:right .2s,-webkit-transform .2s;transition:right .2s,-webkit-transform .2s;-o-transition:.2s transform,.2s right;transition:transform .2s,right .2s;transition:transform .2s,right .2s,-webkit-transform .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;-ms-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-progressbar.swiper-pagination-white{background:hsla(0,0%,100%,.25)}.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0,0,0,.25)}.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}.swiper-lazy-preloader:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D\'0%200%20120%20120\'%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20xmlns%3Axlink%3D\'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink\'%3E%3Cdefs%3E%3Cline%20id%3D\'l\'%20x1%3D\'60\'%20x2%3D\'60\'%20y1%3D\'7\'%20y2%3D\'27\'%20stroke%3D\'%236c6c6c\'%20stroke-width%3D\'11\'%20stroke-linecap%3D\'round\'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(30%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(60%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(90%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(120%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(150%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.37\'%20transform%3D\'rotate(180%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.46\'%20transform%3D\'rotate(210%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.56\'%20transform%3D\'rotate(240%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.66\'%20transform%3D\'rotate(270%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.75\'%20transform%3D\'rotate(300%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.85\'%20transform%3D\'rotate(330%2060%2C60)\'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D\'0%200%20120%20120\'%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20xmlns%3Axlink%3D\'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink\'%3E%3Cdefs%3E%3Cline%20id%3D\'l\'%20x1%3D\'60\'%20x2%3D\'60\'%20y1%3D\'7\'%20y2%3D\'27\'%20stroke%3D\'%23fff\'%20stroke-width%3D\'11\'%20stroke-linecap%3D\'round\'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(30%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(60%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(90%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(120%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(150%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.37\'%20transform%3D\'rotate(180%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.46\'%20transform%3D\'rotate(210%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.56\'%20transform%3D\'rotate(240%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.66\'%20transform%3D\'rotate(270%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.75\'%20transform%3D\'rotate(300%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.85\'%20transform%3D\'rotate(330%2060%2C60)\'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}\@-webkit-keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}ion-slides{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swiper-pagination-bullet{background:var(--bullet-background)}.swiper-pagination-bullet-active{background:var(--bullet-background-active)}.swiper-pagination-progressbar{background:var(--progress-bar-background)}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--progress-bar-background-active)}.swiper-scrollbar{background:var(--scroll-bar-background)}.swiper-scrollbar-drag{background:var(--scroll-bar-background-active)}.slides-ios{--bullet-background:var(--ion-color-step-200,#ccc);--bullet-background-active:var(--ion-color-primary,#3880ff);--progress-bar-background:rgba(var(--ion-text-color-rgb,0,0,0),0.25);--progress-bar-background-active:var(--ion-color-primary-shade,#3171e0);--scroll-bar-background:rgba(var(--ion-text-color-rgb,0,0,0),0.1);--scroll-bar-background-active:rgba(var(--ion-text-color-rgb,0,0,0),0.5)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var waitForSlides = function (el) {
    return Promise.all(Array.from(el.querySelectorAll('ion-slide')).map(function (s) { return s.componentOnReady(); }));
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1zbGlkZV8yLWlvcy5lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQzhFO0FBQy9GO0FBQzlCO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQVU7QUFDN0IsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyxnQkFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSwwQkFBMEIsbUJBQW1CLFlBQVksc0JBQXNCLGNBQWMsV0FBVywwQkFBMEIsa0JBQWtCLGNBQWMsb0JBQW9CLGFBQWEsa0JBQWtCLG9CQUFvQixjQUFjLHNCQUFzQixtQkFBbUIscUJBQXFCLHVCQUF1QixXQUFXLFlBQVksZUFBZSw4QkFBOEIsc0JBQXNCLGtCQUFrQixXQUFXLGVBQWUsWUFBWSxnQkFBZ0IsRUFBRSxFQUFFO0FBQ2xmO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQSxzREFBc0QsNkJBQTZCLEVBQUU7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsa0JBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsMkRBQVc7QUFDM0MsMkJBQTJCLDJEQUFXO0FBQ3RDLGlDQUFpQywyREFBVztBQUM1QyxrQ0FBa0MsMkRBQVc7QUFDN0MsaUNBQWlDLDJEQUFXO0FBQzVDLGlDQUFpQywyREFBVztBQUM1QyxpQ0FBaUMsMkRBQVc7QUFDNUMsK0JBQStCLDJEQUFXO0FBQzFDLCtCQUErQiwyREFBVztBQUMxQyx1Q0FBdUMsMkRBQVc7QUFDbEQscUNBQXFDLDJEQUFX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Z0MseUJBQXlCLGtDQUFrQyxHQUFHLGdDQUFnQyx5QkFBeUIsdUNBQXVDLGtCQUFrQixPQUFPLE1BQU0sb0JBQW9CLFVBQVUsY0FBYyxnRUFBZ0UsNENBQTRDLHVDQUF1QyxvQ0FBb0MscUNBQXFDLG9CQUFvQixvQ0FBb0MsK0JBQStCLDRCQUE0QixtREFBbUQsb0JBQW9CLDZHQUE2RyxvQkFBb0IsdUJBQXVCLGlCQUFpQixxQ0FBcUMsb0JBQW9CLG1DQUFtQywyQkFBMkIsVUFBVSxrQkFBa0IsNkJBQTZCLHlCQUF5QixxQkFBcUIsV0FBVyxZQUFZLG1EQUFtRCxvQkFBb0IsMERBQTBELGdDQUFnQyw0QkFBNEIsd0JBQXdCLDZHQUE2RyxvQkFBb0Isd0xBQXdMLG9CQUFvQixtQkFBbUIsc01BQXNNLFVBQVUsbUNBQW1DLDJCQUEyQiwyQ0FBMkMsa0JBQWtCLE9BQU8sU0FBUyxXQUFXLFlBQVksZ0JBQWdCLFdBQVcsMEJBQTBCLGtCQUFrQixVQUFVLHVCQUF1QixpQkFBaUIscUNBQXFDLG9CQUFvQixtQ0FBbUMsMkJBQTJCLFVBQVUsbURBQW1ELG9CQUFvQiw2R0FBNkcsb0JBQW9CLHNNQUFzTSxVQUFVLG1DQUFtQywyQkFBMkIsNENBQTRDLHVCQUF1QixXQUFXLGNBQWMseUJBQXlCLHNCQUFzQixxQkFBcUIsaUJBQWlCLDBCQUEwQixvQ0FBb0MsaUNBQWlDLDJDQUEyQywrQkFBK0IsMENBQTBDLG1FQUFtRSxpREFBaUQsa0JBQWtCLHdDQUF3Qyx1QkFBdUIsK0NBQStDLFlBQVksbURBQW1ELDREQUE0RCxxRUFBcUUsd0VBQXdFLGtFQUFrRSx5RUFBeUUsRUFBRSxFQUFFO0FBQ3Bwb0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBLHNGQUFzRiw2QkFBNkIsRUFBRTtBQUNySDtBQUNvRCIsImZpbGUiOiI4NC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgZ2V0SW9uTW9kZSwgaCwgSCBhcyBIb3N0LCBkIGFzIGNyZWF0ZUV2ZW50LCBlIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2NvcmUtZmVlZWZmMGQuanMnO1xuaW1wb3J0ICcuL2NvbmZpZy0zYzdmMzc5MC5qcyc7XG52YXIgU2xpZGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2xpZGUoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIH1cbiAgICBTbGlkZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgY2xhc3M6IChfYSA9IHt9LFxuICAgICAgICAgICAgICAgIF9hW21vZGVdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYVsnc3dpcGVyLXNsaWRlJ10gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hWydzd2lwZXItem9vbS1jb250YWluZXInXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2EpIH0pKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTbGlkZSwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJpb24tc2xpZGV7aGVpZ2h0OjEwMCV9LnNsaWRlLXpvb20saW9uLXNsaWRle2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJX0uc2xpZGUtem9vbSwuc3dpcGVyLXNsaWRle3RleHQtYWxpZ246Y2VudGVyfS5zd2lwZXItc2xpZGV7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2ZvbnQtc2l6ZToxOHB4Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uc3dpcGVyLXNsaWRlIGltZ3t3aWR0aDphdXRvO21heC13aWR0aDoxMDAlO2hlaWdodDphdXRvO21heC1oZWlnaHQ6MTAwJX1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFNsaWRlO1xufSgpKTtcbnZhciBTbGlkZXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMShob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMuc3dpcGVyUmVhZHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zd2lwZXIgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyBfdGhpcy5yZWFkeVN3aXBlciA9IHJlc29sdmU7IH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogT3B0aW9ucyB0byBwYXNzIHRvIHRoZSBzd2lwZXIgaW5zdGFuY2UuXG4gICAgICAgICAqIFNlZSBodHRwOi8vaWRhbmdlcm8udXMvc3dpcGVyL2FwaS8gZm9yIHZhbGlkIG9wdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHt9OyAvLyBTd2lwZXJPcHRpb25zOyAgLy8gVE9ET1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBzaG93IHRoZSBwYWdpbmF0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wYWdlciA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYHRydWVgLCBzaG93IHRoZSBzY3JvbGxiYXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNjcm9sbGJhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlvblNsaWRlc0RpZExvYWQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblNsaWRlc0RpZExvYWRcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU2xpZGVUYXAgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblNsaWRlVGFwXCIsIDcpO1xuICAgICAgICB0aGlzLmlvblNsaWRlRG91YmxlVGFwID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TbGlkZURvdWJsZVRhcFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TbGlkZVdpbGxDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblNsaWRlV2lsbENoYW5nZVwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TbGlkZURpZENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU2xpZGVEaWRDaGFuZ2VcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU2xpZGVOZXh0U3RhcnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblNsaWRlTmV4dFN0YXJ0XCIsIDcpO1xuICAgICAgICB0aGlzLmlvblNsaWRlUHJldlN0YXJ0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TbGlkZVByZXZTdGFydFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TbGlkZU5leHRFbmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblNsaWRlTmV4dEVuZFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TbGlkZVByZXZFbmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblNsaWRlUHJldkVuZFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TbGlkZVRyYW5zaXRpb25TdGFydCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU2xpZGVUcmFuc2l0aW9uU3RhcnRcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU2xpZGVUcmFuc2l0aW9uRW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TbGlkZVRyYW5zaXRpb25FbmRcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU2xpZGVEcmFnID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TbGlkZURyYWdcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU2xpZGVSZWFjaFN0YXJ0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TbGlkZVJlYWNoU3RhcnRcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU2xpZGVSZWFjaEVuZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU2xpZGVSZWFjaEVuZFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TbGlkZVRvdWNoU3RhcnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblNsaWRlVG91Y2hTdGFydFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TbGlkZVRvdWNoRW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TbGlkZVRvdWNoRW5kXCIsIDcpO1xuICAgIH1cbiAgICBjbGFzc18xLnByb3RvdHlwZS5vcHRpb25zQ2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN3aXBlcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zd2lwZXJSZWFkeSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmdldFN3aXBlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzd2lwZXIucGFyYW1zLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy51cGRhdGUoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBtdXQgPSB0aGlzLm11dGF0aW9uTyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5zd2lwZXJSZWFkeSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbXV0Lm9ic2VydmUodGhpcy5lbCwge1xuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbC5jb21wb25lbnRPblJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5pbml0U3dpcGVyKCk7IH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZGlzY29ubmVjdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXI7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubXV0YXRpb25PKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXV0YXRpb25PID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5nZXRTd2lwZXIoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXBlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXBlci5kZXN0cm95KHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2lwZXIgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyBfdGhpcy5yZWFkeVN3aXBlciA9IHJlc29sdmU7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2lwZXJSZWFkeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgdW5kZXJseWluZyBzbGlkZXIgaW1wbGVtZW50YXRpb24uIENhbGwgdGhpcyBpZiB5b3UndmUgYWRkZWQgb3IgcmVtb3ZlZFxuICAgICAqIGNoaWxkIHNsaWRlcy5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFN3aXBlcigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhaXRGb3JTbGlkZXModGhpcy5lbClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyID0gKF9hLnNlbnQoKSlbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRm9yY2Ugc3dpcGVyIHRvIHVwZGF0ZSBpdHMgaGVpZ2h0ICh3aGVuIGF1dG9IZWlnaHQgaXMgZW5hYmxlZCkgZm9yIHRoZSBkdXJhdGlvblxuICAgICAqIGVxdWFsIHRvICdzcGVlZCcgcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNwZWVkIFRoZSB0cmFuc2l0aW9uIGR1cmF0aW9uIChpbiBtcykuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUudXBkYXRlQXV0b0hlaWdodCA9IGZ1bmN0aW9uIChzcGVlZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3dpcGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmdldFN3aXBlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoc3BlZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRyYW5zaXRpb24gdG8gdGhlIHNwZWNpZmllZCBzbGlkZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHNsaWRlIHRvIHRyYW5zaXRpb24gdG8uXG4gICAgICogQHBhcmFtIHNwZWVkIFRoZSB0cmFuc2l0aW9uIGR1cmF0aW9uIChpbiBtcykuXG4gICAgICogQHBhcmFtIHJ1bkNhbGxiYWNrcyBJZiB0cnVlLCB0aGUgdHJhbnNpdGlvbiB3aWxsIHByb2R1Y2UgW1RyYW5zaXRpb24vU2xpZGVDaGFuZ2VdW1N0YXJ0L0VuZF0gdHJhbnNpdGlvbiBldmVudHMuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc2xpZGVUbyA9IGZ1bmN0aW9uIChpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3dpcGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmdldFN3aXBlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG8oaW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc2xpZGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3BlZWQgVGhlIHRyYW5zaXRpb24gZHVyYXRpb24gKGluIG1zKS5cbiAgICAgKiBAcGFyYW0gcnVuQ2FsbGJhY2tzIElmIHRydWUsIHRoZSB0cmFuc2l0aW9uIHdpbGwgcHJvZHVjZSBbVHJhbnNpdGlvbi9TbGlkZUNoYW5nZV1bU3RhcnQvRW5kXSB0cmFuc2l0aW9uIGV2ZW50cy5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5zbGlkZU5leHQgPSBmdW5jdGlvbiAoc3BlZWQsIHJ1bkNhbGxiYWNrcykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3dpcGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmdldFN3aXBlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlTmV4dChzcGVlZCwgcnVuQ2FsbGJhY2tzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUcmFuc2l0aW9uIHRvIHRoZSBwcmV2aW91cyBzbGlkZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzcGVlZCBUaGUgdHJhbnNpdGlvbiBkdXJhdGlvbiAoaW4gbXMpLlxuICAgICAqIEBwYXJhbSBydW5DYWxsYmFja3MgSWYgdHJ1ZSwgdGhlIHRyYW5zaXRpb24gd2lsbCBwcm9kdWNlIHRoZSBbVHJhbnNpdGlvbi9TbGlkZUNoYW5nZV1bU3RhcnQvRW5kXSB0cmFuc2l0aW9uIGV2ZW50cy5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5zbGlkZVByZXYgPSBmdW5jdGlvbiAoc3BlZWQsIHJ1bkNhbGxiYWNrcykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3dpcGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmdldFN3aXBlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlUHJldihzcGVlZCwgcnVuQ2FsbGJhY2tzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGluZGV4IG9mIHRoZSBhY3RpdmUgc2xpZGUuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZ2V0QWN0aXZlSW5kZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2V0U3dpcGVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgc3dpcGVyLmFjdGl2ZUluZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGluZGV4IG9mIHRoZSBwcmV2aW91cyBzbGlkZS5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5nZXRQcmV2aW91c0luZGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3dpcGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmdldFN3aXBlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHN3aXBlci5wcmV2aW91c0luZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHRvdGFsIG51bWJlciBvZiBzbGlkZXMuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUubGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3dpcGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmdldFN3aXBlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHN3aXBlci5zbGlkZXMubGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgd2hldGhlciBvciBub3QgdGhlIGN1cnJlbnQgc2xpZGUgaXMgdGhlIGxhc3Qgc2xpZGUuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuaXNFbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2V0U3dpcGVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgc3dpcGVyLmlzRW5kXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgd2hldGhlciBvciBub3QgdGhlIGN1cnJlbnQgc2xpZGUgaXMgdGhlIGZpcnN0IHNsaWRlLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmlzQmVnaW5uaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3dpcGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmdldFN3aXBlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHN3aXBlci5pc0JlZ2lubmluZ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3RhcnQgYXV0byBwbGF5LlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnN0YXJ0QXV0b3BsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2V0U3dpcGVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3dpcGVyLmF1dG9wbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3RvcCBhdXRvIHBsYXkuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc3RvcEF1dG9wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3dpcGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmdldFN3aXBlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN3aXBlci5hdXRvcGxheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXBlci5hdXRvcGxheS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTG9jayBvciB1bmxvY2sgdGhlIGFiaWxpdHkgdG8gc2xpZGUgdG8gdGhlIG5leHQgc2xpZGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbG9jayBJZiBgdHJ1ZWAsIGRpc2FibGUgc3dpcGluZyB0byB0aGUgbmV4dCBzbGlkZS5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5sb2NrU3dpcGVUb05leHQgPSBmdW5jdGlvbiAobG9jaykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3dpcGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmdldFN3aXBlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gIWxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTG9jayBvciB1bmxvY2sgdGhlIGFiaWxpdHkgdG8gc2xpZGUgdG8gdGhlIHByZXZpb3VzIHNsaWRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIGxvY2sgSWYgYHRydWVgLCBkaXNhYmxlIHN3aXBpbmcgdG8gdGhlIHByZXZpb3VzIHNsaWRlLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmxvY2tTd2lwZVRvUHJldiA9IGZ1bmN0aW9uIChsb2NrKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2V0U3dpcGVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSAhbG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBMb2NrIG9yIHVubG9jayB0aGUgYWJpbGl0eSB0byBzbGlkZSB0byB0aGUgbmV4dCBvciBwcmV2aW91cyBzbGlkZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsb2NrIElmIGB0cnVlYCwgZGlzYWJsZSBzd2lwaW5nIHRvIHRoZSBuZXh0IGFuZCBwcmV2aW91cyBzbGlkZS5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5sb2NrU3dpcGVzID0gZnVuY3Rpb24gKGxvY2spIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN3aXBlcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5nZXRTd2lwZXIoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXBlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9ICFsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gIWxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIuYWxsb3dUb3VjaE1vdmUgPSAhbG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIFN3aXBlciBpbnN0YW5jZS5cbiAgICAgKiBVc2UgdGhpcyB0byBhY2Nlc3MgdGhlIGZ1bGwgU3dpcGVyIEFQSS5cbiAgICAgKiBTZWUgaHR0cHM6Ly9pZGFuZ2Vyby51cy9zd2lwZXIvYXBpLyBmb3IgYWxsIEFQSSBvcHRpb25zLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmdldFN3aXBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLnN3aXBlcl07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5pbml0U3dpcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZmluYWxPcHRpb25zLCBTd2lwZXIsIHN3aXBlcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsT3B0aW9ucyA9IHRoaXMubm9ybWFsaXplT3B0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW1wb3J0KCcuL3N3aXBlci5idW5kbGUtY2NkYWFjNTQuanMnKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3aXBlciA9IChfYS5zZW50KCkpLlN3aXBlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHdhaXRGb3JTbGlkZXModGhpcy5lbCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIgPSBuZXcgU3dpcGVyKHRoaXMuZWwsIGZpbmFsT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXBlclJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZHlTd2lwZXIoc3dpcGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5ub3JtYWxpemVPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBCYXNlIG9wdGlvbnMsIGNhbiBiZSBjaGFuZ2VkXG4gICAgICAgIC8vIFRPRE8gQWRkIGludGVyZmFjZSBTd2lwZXJPcHRpb25zXG4gICAgICAgIHZhciBzd2lwZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgZWZmZWN0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMCxcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgcGFyYWxsYXg6IGZhbHNlLFxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBzbGlkZXNQZXJDb2x1bW46IDEsXG4gICAgICAgICAgICBzbGlkZXNQZXJDb2x1bW5GaWxsOiAnY29sdW1uJyxcbiAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuICAgICAgICAgICAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAwLFxuICAgICAgICAgICAgc2xpZGVzT2Zmc2V0QWZ0ZXI6IDAsXG4gICAgICAgICAgICB0b3VjaEV2ZW50c1RhcmdldDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgICAgICBmcmVlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICBmcmVlTW9kZU1vbWVudHVtOiB0cnVlLFxuICAgICAgICAgICAgZnJlZU1vZGVNb21lbnR1bVJhdGlvOiAxLFxuICAgICAgICAgICAgZnJlZU1vZGVNb21lbnR1bUJvdW5jZTogdHJ1ZSxcbiAgICAgICAgICAgIGZyZWVNb2RlTW9tZW50dW1Cb3VuY2VSYXRpbzogMSxcbiAgICAgICAgICAgIGZyZWVNb2RlTW9tZW50dW1WZWxvY2l0eVJhdGlvOiAxLFxuICAgICAgICAgICAgZnJlZU1vZGVTdGlja3k6IGZhbHNlLFxuICAgICAgICAgICAgZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHk6IDAuMDIsXG4gICAgICAgICAgICBhdXRvSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgIHNldFdyYXBwZXJTaXplOiBmYWxzZSxcbiAgICAgICAgICAgIHpvb206IHtcbiAgICAgICAgICAgICAgICBtYXhSYXRpbzogMyxcbiAgICAgICAgICAgICAgICBtaW5SYXRpbzogMSxcbiAgICAgICAgICAgICAgICB0b2dnbGU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNoUmF0aW86IDEsXG4gICAgICAgICAgICB0b3VjaEFuZ2xlOiA0NSxcbiAgICAgICAgICAgIHNpbXVsYXRlVG91Y2g6IHRydWUsXG4gICAgICAgICAgICB0b3VjaFN0YXJ0UHJldmVudERlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgc2hvcnRTd2lwZXM6IHRydWUsXG4gICAgICAgICAgICBsb25nU3dpcGVzOiB0cnVlLFxuICAgICAgICAgICAgbG9uZ1N3aXBlc1JhdGlvOiAwLjUsXG4gICAgICAgICAgICBsb25nU3dpcGVzTXM6IDMwMCxcbiAgICAgICAgICAgIGZvbGxvd0ZpbmdlcjogdHJ1ZSxcbiAgICAgICAgICAgIHRocmVzaG9sZDogMCxcbiAgICAgICAgICAgIHRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIHRvdWNoUmVsZWFzZU9uRWRnZXM6IGZhbHNlLFxuICAgICAgICAgICAgaU9TRWRnZVN3aXBlRGV0ZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIGlPU0VkZ2VTd2lwZVRocmVzaG9sZDogMjAsXG4gICAgICAgICAgICByZXNpc3RhbmNlOiB0cnVlLFxuICAgICAgICAgICAgcmVzaXN0YW5jZVJhdGlvOiAwLjg1LFxuICAgICAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogZmFsc2UsXG4gICAgICAgICAgICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IGZhbHNlLFxuICAgICAgICAgICAgcHJldmVudENsaWNrczogdHJ1ZSxcbiAgICAgICAgICAgIHByZXZlbnRDbGlja3NQcm9wYWdhdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlLFxuICAgICAgICAgICAgbG9vcEFkZGl0aW9uYWxTbGlkZXM6IDAsXG4gICAgICAgICAgICBub1N3aXBpbmc6IHRydWUsXG4gICAgICAgICAgICBydW5DYWxsYmFja3NPbkluaXQ6IHRydWUsXG4gICAgICAgICAgICBjb3ZlcmZsb3dFZmZlY3Q6IHtcbiAgICAgICAgICAgICAgICByb3RhdGU6IDUwLFxuICAgICAgICAgICAgICAgIHN0cmV0Y2g6IDAsXG4gICAgICAgICAgICAgICAgZGVwdGg6IDEwMCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogMSxcbiAgICAgICAgICAgICAgICBzbGlkZVNoYWRvd3M6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmbGlwRWZmZWN0OiB7XG4gICAgICAgICAgICAgICAgc2xpZGVTaGFkb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxpbWl0Um90YXRpb246IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjdWJlRWZmZWN0OiB7XG4gICAgICAgICAgICAgICAgc2xpZGVTaGFkb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNoYWRvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaGFkb3dPZmZzZXQ6IDIwLFxuICAgICAgICAgICAgICAgIHNoYWRvd1NjYWxlOiAwLjk0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFkZUVmZmVjdDoge1xuICAgICAgICAgICAgICAgIGNyb3NzZmFkZTogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhMTF5OiB7XG4gICAgICAgICAgICAgICAgcHJldlNsaWRlTWVzc2FnZTogJ1ByZXZpb3VzIHNsaWRlJyxcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGVNZXNzYWdlOiAnTmV4dCBzbGlkZScsXG4gICAgICAgICAgICAgICAgZmlyc3RTbGlkZU1lc3NhZ2U6ICdUaGlzIGlzIHRoZSBmaXJzdCBzbGlkZScsXG4gICAgICAgICAgICAgICAgbGFzdFNsaWRlTWVzc2FnZTogJ1RoaXMgaXMgdGhlIGxhc3Qgc2xpZGUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLnBhZ2VyKSB7XG4gICAgICAgICAgICBzd2lwZXJPcHRpb25zLnBhZ2luYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgZWw6IHRoaXMucGFnaW5hdGlvbkVsLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdidWxsZXRzJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGhpZGVPbkNsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICBzd2lwZXJPcHRpb25zLnNjcm9sbGJhciA9IHtcbiAgICAgICAgICAgICAgICBlbDogdGhpcy5zY3JvbGxiYXJFbCxcbiAgICAgICAgICAgICAgICBoaWRlOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBLZWVwIHRoZSBldmVudCBvcHRpb25zIHNlcGFyYXRlLCB3ZSBkb250IHdhbnQgdXNlcnNcbiAgICAgICAgLy8gb3ZlcndyaXRpbmcgdGhlc2VcbiAgICAgICAgdmFyIGV2ZW50T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmlvblNsaWRlc0RpZExvYWQuZW1pdCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzbGlkZUNoYW5nZVRyYW5zaXRpb25TdGFydDogdGhpcy5pb25TbGlkZVdpbGxDaGFuZ2UuZW1pdCxcbiAgICAgICAgICAgICAgICBzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQ6IHRoaXMuaW9uU2xpZGVEaWRDaGFuZ2UuZW1pdCxcbiAgICAgICAgICAgICAgICBzbGlkZU5leHRUcmFuc2l0aW9uU3RhcnQ6IHRoaXMuaW9uU2xpZGVOZXh0U3RhcnQuZW1pdCxcbiAgICAgICAgICAgICAgICBzbGlkZVByZXZUcmFuc2l0aW9uU3RhcnQ6IHRoaXMuaW9uU2xpZGVQcmV2U3RhcnQuZW1pdCxcbiAgICAgICAgICAgICAgICBzbGlkZU5leHRUcmFuc2l0aW9uRW5kOiB0aGlzLmlvblNsaWRlTmV4dEVuZC5lbWl0LFxuICAgICAgICAgICAgICAgIHNsaWRlUHJldlRyYW5zaXRpb25FbmQ6IHRoaXMuaW9uU2xpZGVQcmV2RW5kLmVtaXQsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvblN0YXJ0OiB0aGlzLmlvblNsaWRlVHJhbnNpdGlvblN0YXJ0LmVtaXQsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVuZDogdGhpcy5pb25TbGlkZVRyYW5zaXRpb25FbmQuZW1pdCxcbiAgICAgICAgICAgICAgICBzbGlkZXJNb3ZlOiB0aGlzLmlvblNsaWRlRHJhZy5lbWl0LFxuICAgICAgICAgICAgICAgIHJlYWNoQmVnaW5uaW5nOiB0aGlzLmlvblNsaWRlUmVhY2hTdGFydC5lbWl0LFxuICAgICAgICAgICAgICAgIHJlYWNoRW5kOiB0aGlzLmlvblNsaWRlUmVhY2hFbmQuZW1pdCxcbiAgICAgICAgICAgICAgICB0b3VjaFN0YXJ0OiB0aGlzLmlvblNsaWRlVG91Y2hTdGFydC5lbWl0LFxuICAgICAgICAgICAgICAgIHRvdWNoRW5kOiB0aGlzLmlvblNsaWRlVG91Y2hFbmQuZW1pdCxcbiAgICAgICAgICAgICAgICB0YXA6IHRoaXMuaW9uU2xpZGVUYXAuZW1pdCxcbiAgICAgICAgICAgICAgICBkb3VibGVUYXA6IHRoaXMuaW9uU2xpZGVEb3VibGVUYXAuZW1pdFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgY3VzdG9tRXZlbnRzID0gKCEhdGhpcy5vcHRpb25zICYmICEhdGhpcy5vcHRpb25zLm9uKSA/IHRoaXMub3B0aW9ucy5vbiA6IHt9O1xuICAgICAgICAvLyBtZXJnZSBcIm9uXCIgZXZlbnQgbGlzdGVuZXJzLCB3aGlsZSBnaXZpbmcgb3VyIGV2ZW50IGxpc3RlbmVycyBwcmlvcml0eVxuICAgICAgICB2YXIgbWVyZ2VkRXZlbnRPcHRpb25zID0geyBvbjogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjdXN0b21FdmVudHMpLCBldmVudE9wdGlvbnMub24pIH07XG4gICAgICAgIC8vIE1lcmdlIHRoZSBiYXNlLCB1c2VyIG9wdGlvbnMsIGFuZCBldmVudHMgdG9nZXRoZXIgdGhlbiBwYXMgdG8gc3dpcGVyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3dpcGVyT3B0aW9ucyksIHRoaXMub3B0aW9ucyksIG1lcmdlZEV2ZW50T3B0aW9ucyk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczogKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbXCJcIiArIG1vZGVdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyBVc2VkIGludGVybmFsbHkgZm9yIHN0eWxpbmdcbiAgICAgICAgICAgICAgICBfYVtcInNsaWRlcy1cIiArIG1vZGVdID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYVsnc3dpcGVyLWNvbnRhaW5lciddID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYSkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInN3aXBlci13cmFwcGVyXCIgfSwgaChcInNsb3RcIiwgbnVsbCkpLCB0aGlzLnBhZ2VyICYmIGgoXCJkaXZcIiwgeyBjbGFzczogXCJzd2lwZXItcGFnaW5hdGlvblwiLCByZWY6IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gX3RoaXMucGFnaW5hdGlvbkVsID0gZWw7IH0gfSksIHRoaXMuc2Nyb2xsYmFyICYmIGgoXCJkaXZcIiwgeyBjbGFzczogXCJzd2lwZXItc2Nyb2xsYmFyXCIsIHJlZjogZnVuY3Rpb24gKGVsKSB7IHJldHVybiBfdGhpcy5zY3JvbGxiYXJFbCA9IGVsOyB9IH0pKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJhc3NldHNEaXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBbXCJzd2lwZXJcIl07IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEsIFwid2F0Y2hlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCJvcHRpb25zXCI6IFtcIm9wdGlvbnNDaGFuZ2VkXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCIuc3dpcGVyLWNvbnRhaW5lcnttYXJnaW46MCBhdXRvO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjtsaXN0LXN0eWxlOm5vbmU7cGFkZGluZzowO3otaW5kZXg6MX0uc3dpcGVyLWNvbnRhaW5lci1uby1mbGV4Ym94IC5zd2lwZXItc2xpZGV7ZmxvYXQ6bGVmdH0uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXdyYXBwZXJ7LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LnN3aXBlci13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ei1pbmRleDoxO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5Oi13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6LXdlYmtpdC10cmFuc2Zvcm07LW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sLXdlYmtpdC10cmFuc2Zvcm07LXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JveC1zaXppbmc6Y29udGVudC1ib3h9LnN3aXBlci1jb250YWluZXItYW5kcm9pZCAuc3dpcGVyLXNsaWRlLC5zd2lwZXItd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfS5zd2lwZXItY29udGFpbmVyLW11bHRpcm93Pi5zd2lwZXItd3JhcHBlcnstd2Via2l0LWZsZXgtd3JhcDp3cmFwOy1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcH0uc3dpcGVyLWNvbnRhaW5lci1mcmVlLW1vZGU+LnN3aXBlci13cmFwcGVyey13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7LW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7bWFyZ2luOjAgYXV0b30uc3dpcGVyLXNsaWRley13ZWJraXQtZmxleC1zaHJpbms6MDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTstd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6LXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTotd2Via2l0LXRyYW5zZm9ybTstby10cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSwtd2Via2l0LXRyYW5zZm9ybX0uc3dpcGVyLWludmlzaWJsZS1ibGFuay1zbGlkZXt2aXNpYmlsaXR5OmhpZGRlbn0uc3dpcGVyLWNvbnRhaW5lci1hdXRvaGVpZ2h0LC5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQgLnN3aXBlci1zbGlkZXtoZWlnaHQ6YXV0b30uc3dpcGVyLWNvbnRhaW5lci1hdXRvaGVpZ2h0IC5zd2lwZXItd3JhcHBlcnstd2Via2l0LWJveC1hbGlnbjpzdGFydDstd2Via2l0LWFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7LW1zLWZsZXgtYWxpZ246c3RhcnQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydDstd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6aGVpZ2h0LC13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6aGVpZ2h0LC13ZWJraXQtdHJhbnNmb3JtOy1vLXRyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLGhlaWdodDt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSxoZWlnaHQ7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0saGVpZ2h0LC13ZWJraXQtdHJhbnNmb3JtfS5zd2lwZXItY29udGFpbmVyLTNkey13ZWJraXQtcGVyc3BlY3RpdmU6MTIwMHB4O3BlcnNwZWN0aXZlOjEyMDBweH0uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLWN1YmUtc2hhZG93LC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUsLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2R9LnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9we3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDoxMH0uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0e2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIscmlnaHQgdG9wLGxlZnQgdG9wLGZyb20ocmdiYSgwLDAsMCwuNSkpLHRvKHRyYW5zcGFyZW50KSk7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCxyZ2JhKDAsMCwwLC41KSx0cmFuc3BhcmVudCk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQocmlnaHQscmdiYSgwLDAsMCwuNSksdHJhbnNwYXJlbnQpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDI3MGRlZyxyZ2JhKDAsMCwwLC41KSx0cmFuc3BhcmVudCl9LnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHR7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxyaWdodCB0b3AsZnJvbShyZ2JhKDAsMCwwLC41KSksdG8odHJhbnNwYXJlbnQpKTtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQscmdiYSgwLDAsMCwuNSksdHJhbnNwYXJlbnQpO2JhY2tncm91bmQtaW1hZ2U6LW8tbGluZWFyLWdyYWRpZW50KGxlZnQscmdiYSgwLDAsMCwuNSksdHJhbnNwYXJlbnQpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDkwZGVnLHJnYmEoMCwwLDAsLjUpLHRyYW5zcGFyZW50KX0uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3B7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IGJvdHRvbSxsZWZ0IHRvcCxmcm9tKHJnYmEoMCwwLDAsLjUpKSx0byh0cmFuc3BhcmVudCkpO2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLHJnYmEoMCwwLDAsLjUpLHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudChib3R0b20scmdiYSgwLDAsMCwuNSksdHJhbnNwYXJlbnQpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDBkZWcscmdiYSgwLDAsMCwuNSksdHJhbnNwYXJlbnQpfS5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbXtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgdG9wLGxlZnQgYm90dG9tLGZyb20ocmdiYSgwLDAsMCwuNSkpLHRvKHRyYW5zcGFyZW50KSk7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AscmdiYSgwLDAsMCwuNSksdHJhbnNwYXJlbnQpO2JhY2tncm91bmQtaW1hZ2U6LW8tbGluZWFyLWdyYWRpZW50KHRvcCxyZ2JhKDAsMCwwLC41KSx0cmFuc3BhcmVudCk7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLHJnYmEoMCwwLDAsLjUpLHRyYW5zcGFyZW50KX0uc3dpcGVyLWNvbnRhaW5lci13cDgtaG9yaXpvbnRhbCwuc3dpcGVyLWNvbnRhaW5lci13cDgtaG9yaXpvbnRhbD4uc3dpcGVyLXdyYXBwZXJ7LW1zLXRvdWNoLWFjdGlvbjpwYW4teTt0b3VjaC1hY3Rpb246cGFuLXl9LnN3aXBlci1jb250YWluZXItd3A4LXZlcnRpY2FsLC5zd2lwZXItY29udGFpbmVyLXdwOC12ZXJ0aWNhbD4uc3dpcGVyLXdyYXBwZXJ7LW1zLXRvdWNoLWFjdGlvbjpwYW4teDt0b3VjaC1hY3Rpb246cGFuLXh9LnN3aXBlci1idXR0b24tbmV4dCwuc3dpcGVyLWJ1dHRvbi1wcmV2e3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7d2lkdGg6MjdweDtoZWlnaHQ6NDRweDttYXJnaW4tdG9wOi0yMnB4O3otaW5kZXg6MTA7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1zaXplOjI3cHggNDRweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXR9LnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWRpc2FibGVkLC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZHtvcGFjaXR5Oi4zNTtjdXJzb3I6YXV0bztwb2ludGVyLWV2ZW50czpub25lfS5zd2lwZXItYnV0dG9uLXByZXYsLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLW5leHR7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHhtbG5zJTNEXFwnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnXFwnJTIwdmlld0JveCUzRFxcJzAlMjAwJTIwMjclMjA0NFxcJyUzRSUzQ3BhdGglMjBkJTNEXFwnTTAlMkMyMkwyMiUyQzBsMi4xJTJDMi4xTDQuMiUyQzIybDE5LjklMkMxOS45TDIyJTJDNDRMMCUyQzIyTDAlMkMyMkwwJTJDMjJ6XFwnJTIwZmlsbCUzRFxcJyUyMzAwN2FmZlxcJyUyRiUzRSUzQyUyRnN2ZyUzRVxcXCIpO2xlZnQ6MTBweDtyaWdodDphdXRvfS5zd2lwZXItYnV0dG9uLW5leHQsLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLXByZXZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHhtbG5zJTNEXFwnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnXFwnJTIwdmlld0JveCUzRFxcJzAlMjAwJTIwMjclMjA0NFxcJyUzRSUzQ3BhdGglMjBkJTNEXFwnTTI3JTJDMjJMMjclMkMyMkw1JTJDNDRsLTIuMS0yLjFMMjIuOCUyQzIyTDIuOSUyQzIuMUw1JTJDMEwyNyUyQzIyTDI3JTJDMjJ6XFwnJTIwZmlsbCUzRFxcJyUyMzAwN2FmZlxcJyUyRiUzRSUzQyUyRnN2ZyUzRVxcXCIpO3JpZ2h0OjEwcHg7bGVmdDphdXRvfS5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi13aGl0ZSwuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLXdoaXRle2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB4bWxucyUzRFxcJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2Z1xcJyUyMHZpZXdCb3glM0RcXCcwJTIwMCUyMDI3JTIwNDRcXCclM0UlM0NwYXRoJTIwZCUzRFxcJ00wJTJDMjJMMjIlMkMwbDIuMSUyQzIuMUw0LjIlMkMyMmwxOS45JTJDMTkuOUwyMiUyQzQ0TDAlMkMyMkwwJTJDMjJMMCUyQzIyelxcJyUyMGZpbGwlM0RcXCclMjNmZmZmZmZcXCclMkYlM0UlM0MlMkZzdmclM0VcXFwiKX0uc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24td2hpdGUsLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi13aGl0ZXtiYWNrZ3JvdW5kLWltYWdlOnVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0RcXCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmdcXCclMjB2aWV3Qm94JTNEXFwnMCUyMDAlMjAyNyUyMDQ0XFwnJTNFJTNDcGF0aCUyMGQlM0RcXCdNMjclMkMyMkwyNyUyQzIyTDUlMkM0NGwtMi4xLTIuMUwyMi44JTJDMjJMMi45JTJDMi4xTDUlMkMwTDI3JTJDMjJMMjclMkMyMnpcXCclMjBmaWxsJTNEXFwnJTIzZmZmZmZmXFwnJTJGJTNFJTNDJTJGc3ZnJTNFXFxcIil9LnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWJsYWNrLC5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tYmxhY2t7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHhtbG5zJTNEXFwnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnXFwnJTIwdmlld0JveCUzRFxcJzAlMjAwJTIwMjclMjA0NFxcJyUzRSUzQ3BhdGglMjBkJTNEXFwnTTAlMkMyMkwyMiUyQzBsMi4xJTJDMi4xTDQuMiUyQzIybDE5LjklMkMxOS45TDIyJTJDNDRMMCUyQzIyTDAlMkMyMkwwJTJDMjJ6XFwnJTIwZmlsbCUzRFxcJyUyMzAwMDAwMFxcJyUyRiUzRSUzQyUyRnN2ZyUzRVxcXCIpfS5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1ibGFjaywuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWJsYWNre2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB4bWxucyUzRFxcJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2Z1xcJyUyMHZpZXdCb3glM0RcXCcwJTIwMCUyMDI3JTIwNDRcXCclM0UlM0NwYXRoJTIwZCUzRFxcJ00yNyUyQzIyTDI3JTJDMjJMNSUyQzQ0bC0yLjEtMi4xTDIyLjglMkMyMkwyLjklMkMyLjFMNSUyQzBMMjclMkMyMkwyNyUyQzIyelxcJyUyMGZpbGwlM0RcXCclMjMwMDAwMDBcXCclMkYlM0UlM0MlMkZzdmclM0VcXFwiKX0uc3dpcGVyLWJ1dHRvbi1sb2Nre2Rpc3BsYXk6bm9uZX0uc3dpcGVyLXBhZ2luYXRpb257cG9zaXRpb246YWJzb2x1dGU7dGV4dC1hbGlnbjpjZW50ZXI7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjNzOy1vLXRyYW5zaXRpb246LjNzIG9wYWNpdHk7dHJhbnNpdGlvbjpvcGFjaXR5IC4zczstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3otaW5kZXg6MTB9LnN3aXBlci1wYWdpbmF0aW9uLnN3aXBlci1wYWdpbmF0aW9uLWhpZGRlbntvcGFjaXR5OjB9LnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cywuc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLC5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbntib3R0b206MTBweDtsZWZ0OjA7d2lkdGg6MTAwJX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWlje292ZXJmbG93OmhpZGRlbjtmb250LXNpemU6MH0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjMzKTstbXMtdHJhbnNmb3JtOnNjYWxlKC4zMyk7dHJhbnNmb3JtOnNjYWxlKC4zMyk7cG9zaXRpb246cmVsYXRpdmV9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSwuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW1haW57LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7LW1zLXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1wcmV2ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC42Nik7LW1zLXRyYW5zZm9ybTpzY2FsZSguNjYpO3RyYW5zZm9ybTpzY2FsZSguNjYpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldi1wcmV2ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4zMyk7LW1zLXRyYW5zZm9ybTpzY2FsZSguMzMpO3RyYW5zZm9ybTpzY2FsZSguMzMpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbmV4dHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNjYpOy1tcy10cmFuc2Zvcm06c2NhbGUoLjY2KTt0cmFuc2Zvcm06c2NhbGUoLjY2KX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW5leHQtbmV4dHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMzMpOy1tcy10cmFuc2Zvcm06c2NhbGUoLjMzKTt0cmFuc2Zvcm06c2NhbGUoLjMzKX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e3dpZHRoOjhweDtoZWlnaHQ6OHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlci1yYWRpdXM6MTAwJTtiYWNrZ3JvdW5kOiMwMDA7b3BhY2l0eTouMn1idXR0b24uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e2JvcmRlcjpub25lO21hcmdpbjowO3BhZGRpbmc6MDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfS5zd2lwZXItcGFnaW5hdGlvbi1jbGlja2FibGUgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHtjdXJzb3I6cG9pbnRlcn0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZXtvcGFjaXR5OjE7YmFja2dyb3VuZDojMDA3YWZmfS5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRze3JpZ2h0OjEwcHg7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC01MCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTUwJSwwKX0uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e21hcmdpbjo2cHggMDtkaXNwbGF5OmJsb2NrfS5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pY3t0b3A6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3dpZHRoOjhweH0uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHtkaXNwbGF5OmlubGluZS1ibG9jazstd2Via2l0LXRyYW5zaXRpb246dG9wIC4ycywtd2Via2l0LXRyYW5zZm9ybSAuMnM7dHJhbnNpdGlvbjp0b3AgLjJzLC13ZWJraXQtdHJhbnNmb3JtIC4yczstby10cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm0sLjJzIHRvcDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMsdG9wIC4yczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMsdG9wIC4ycywtd2Via2l0LXRyYW5zZm9ybSAuMnN9LnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e21hcmdpbjowIDRweH0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pY3tsZWZ0OjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt3aGl0ZS1zcGFjZTpub3dyYXB9LnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHstd2Via2l0LXRyYW5zaXRpb246bGVmdCAuMnMsLXdlYmtpdC10cmFuc2Zvcm0gLjJzO3RyYW5zaXRpb246bGVmdCAuMnMsLXdlYmtpdC10cmFuc2Zvcm0gLjJzOy1vLXRyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgbGVmdDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMsbGVmdCAuMnM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzLGxlZnQgLjJzLC13ZWJraXQtdHJhbnNmb3JtIC4yc30uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsLnN3aXBlci1jb250YWluZXItcnRsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHstd2Via2l0LXRyYW5zaXRpb246cmlnaHQgLjJzLC13ZWJraXQtdHJhbnNmb3JtIC4yczt0cmFuc2l0aW9uOnJpZ2h0IC4ycywtd2Via2l0LXRyYW5zZm9ybSAuMnM7LW8tdHJhbnNpdGlvbjouMnMgdHJhbnNmb3JtLC4ycyByaWdodDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMscmlnaHQgLjJzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyxyaWdodCAuMnMsLXdlYmtpdC10cmFuc2Zvcm0gLjJzfS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjI1KTtwb3NpdGlvbjphYnNvbHV0ZX0uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGx7YmFja2dyb3VuZDojMDA3YWZmO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApOy1tcy10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDstbXMtdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wfS5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGx7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcDstbXMtdHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3A7dHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3B9LnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIsLnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRle3dpZHRoOjEwMCU7aGVpZ2h0OjRweDtsZWZ0OjA7dG9wOjB9LnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGUsLnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFye3dpZHRoOjRweDtoZWlnaHQ6MTAwJTtsZWZ0OjA7dG9wOjB9LnN3aXBlci1wYWdpbmF0aW9uLXdoaXRlIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZle2JhY2tncm91bmQ6I2ZmZn0uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24td2hpdGV7YmFja2dyb3VuZDpoc2xhKDAsMCUsMTAwJSwuMjUpfS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi13aGl0ZSAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbHtiYWNrZ3JvdW5kOiNmZmZ9LnN3aXBlci1wYWdpbmF0aW9uLWJsYWNrIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZle2JhY2tncm91bmQ6IzAwMH0uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tYmxhY2t7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4yNSl9LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLWJsYWNrIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1maWxse2JhY2tncm91bmQ6IzAwMH0uc3dpcGVyLXBhZ2luYXRpb24tbG9ja3tkaXNwbGF5Om5vbmV9LnN3aXBlci1zY3JvbGxiYXJ7Ym9yZGVyLXJhZGl1czoxMHB4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy10b3VjaC1hY3Rpb246bm9uZTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjEpfS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1zY3JvbGxiYXJ7cG9zaXRpb246YWJzb2x1dGU7bGVmdDoxJTtib3R0b206M3B4O3otaW5kZXg6NTA7aGVpZ2h0OjVweDt3aWR0aDo5OCV9LnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1zY3JvbGxiYXJ7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6M3B4O3RvcDoxJTt6LWluZGV4OjUwO3dpZHRoOjVweDtoZWlnaHQ6OTglfS5zd2lwZXItc2Nyb2xsYmFyLWRyYWd7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjUpO2JvcmRlci1yYWRpdXM6MTBweDtsZWZ0OjA7dG9wOjB9LnN3aXBlci1zY3JvbGxiYXItY3Vyc29yLWRyYWd7Y3Vyc29yOm1vdmV9LnN3aXBlci1zY3JvbGxiYXItbG9ja3tkaXNwbGF5Om5vbmV9LnN3aXBlci16b29tLWNvbnRhaW5lcnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy13ZWJraXQtYWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7dGV4dC1hbGlnbjpjZW50ZXJ9LnN3aXBlci16b29tLWNvbnRhaW5lcj5jYW52YXMsLnN3aXBlci16b29tLWNvbnRhaW5lcj5pbWcsLnN3aXBlci16b29tLWNvbnRhaW5lcj5zdmd7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlOy1vLW9iamVjdC1maXQ6Y29udGFpbjtvYmplY3QtZml0OmNvbnRhaW59LnN3aXBlci1zbGlkZS16b29tZWR7Y3Vyc29yOm1vdmV9LnN3aXBlci1sYXp5LXByZWxvYWRlcnt3aWR0aDo0MnB4O2hlaWdodDo0MnB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO3RvcDo1MCU7bWFyZ2luLWxlZnQ6LTIxcHg7bWFyZ2luLXRvcDotMjFweDt6LWluZGV4OjEwOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCU7LW1zLXRyYW5zZm9ybS1vcmlnaW46NTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlOy13ZWJraXQtYW5pbWF0aW9uOnN3aXBlci1wcmVsb2FkZXItc3BpbiAxcyBzdGVwcygxMixlbmQpIGluZmluaXRlO2FuaW1hdGlvbjpzd2lwZXItcHJlbG9hZGVyLXNwaW4gMXMgc3RlcHMoMTIsZW5kKSBpbmZpbml0ZX0uc3dpcGVyLWxhenktcHJlbG9hZGVyOmFmdGVye2Rpc3BsYXk6YmxvY2s7Y29udGVudDpcXFwiXFxcIjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB2aWV3Qm94JTNEXFwnMCUyMDAlMjAxMjAlMjAxMjBcXCclMjB4bWxucyUzRFxcJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2Z1xcJyUyMHhtbG5zJTNBeGxpbmslM0RcXCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjE5OTklMkZ4bGlua1xcJyUzRSUzQ2RlZnMlM0UlM0NsaW5lJTIwaWQlM0RcXCdsXFwnJTIweDElM0RcXCc2MFxcJyUyMHgyJTNEXFwnNjBcXCclMjB5MSUzRFxcJzdcXCclMjB5MiUzRFxcJzI3XFwnJTIwc3Ryb2tlJTNEXFwnJTIzNmM2YzZjXFwnJTIwc3Ryb2tlLXdpZHRoJTNEXFwnMTFcXCclMjBzdHJva2UtbGluZWNhcCUzRFxcJ3JvdW5kXFwnJTJGJTNFJTNDJTJGZGVmcyUzRSUzQ2clM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0RcXCclMjNsXFwnJTIwb3BhY2l0eSUzRFxcJy4yN1xcJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRFxcJyUyM2xcXCclMjBvcGFjaXR5JTNEXFwnLjI3XFwnJTIwdHJhbnNmb3JtJTNEXFwncm90YXRlKDMwJTIwNjAlMkM2MClcXCclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0RcXCclMjNsXFwnJTIwb3BhY2l0eSUzRFxcJy4yN1xcJyUyMHRyYW5zZm9ybSUzRFxcJ3JvdGF0ZSg2MCUyMDYwJTJDNjApXFwnJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEXFwnJTIzbFxcJyUyMG9wYWNpdHklM0RcXCcuMjdcXCclMjB0cmFuc2Zvcm0lM0RcXCdyb3RhdGUoOTAlMjA2MCUyQzYwKVxcJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRFxcJyUyM2xcXCclMjBvcGFjaXR5JTNEXFwnLjI3XFwnJTIwdHJhbnNmb3JtJTNEXFwncm90YXRlKDEyMCUyMDYwJTJDNjApXFwnJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEXFwnJTIzbFxcJyUyMG9wYWNpdHklM0RcXCcuMjdcXCclMjB0cmFuc2Zvcm0lM0RcXCdyb3RhdGUoMTUwJTIwNjAlMkM2MClcXCclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0RcXCclMjNsXFwnJTIwb3BhY2l0eSUzRFxcJy4zN1xcJyUyMHRyYW5zZm9ybSUzRFxcJ3JvdGF0ZSgxODAlMjA2MCUyQzYwKVxcJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRFxcJyUyM2xcXCclMjBvcGFjaXR5JTNEXFwnLjQ2XFwnJTIwdHJhbnNmb3JtJTNEXFwncm90YXRlKDIxMCUyMDYwJTJDNjApXFwnJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEXFwnJTIzbFxcJyUyMG9wYWNpdHklM0RcXCcuNTZcXCclMjB0cmFuc2Zvcm0lM0RcXCdyb3RhdGUoMjQwJTIwNjAlMkM2MClcXCclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0RcXCclMjNsXFwnJTIwb3BhY2l0eSUzRFxcJy42NlxcJyUyMHRyYW5zZm9ybSUzRFxcJ3JvdGF0ZSgyNzAlMjA2MCUyQzYwKVxcJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRFxcJyUyM2xcXCclMjBvcGFjaXR5JTNEXFwnLjc1XFwnJTIwdHJhbnNmb3JtJTNEXFwncm90YXRlKDMwMCUyMDYwJTJDNjApXFwnJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEXFwnJTIzbFxcJyUyMG9wYWNpdHklM0RcXCcuODVcXCclMjB0cmFuc2Zvcm0lM0RcXCdyb3RhdGUoMzMwJTIwNjAlMkM2MClcXCclMkYlM0UlM0MlMkZnJTNFJTNDJTJGc3ZnJTNFXFxcIik7YmFja2dyb3VuZC1wb3NpdGlvbjo1MCU7YmFja2dyb3VuZC1zaXplOjEwMCU7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0fS5zd2lwZXItbGF6eS1wcmVsb2FkZXItd2hpdGU6YWZ0ZXJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHZpZXdCb3glM0RcXCcwJTIwMCUyMDEyMCUyMDEyMFxcJyUyMHhtbG5zJTNEXFwnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnXFwnJTIweG1sbnMlM0F4bGluayUzRFxcJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMTk5OSUyRnhsaW5rXFwnJTNFJTNDZGVmcyUzRSUzQ2xpbmUlMjBpZCUzRFxcJ2xcXCclMjB4MSUzRFxcJzYwXFwnJTIweDIlM0RcXCc2MFxcJyUyMHkxJTNEXFwnN1xcJyUyMHkyJTNEXFwnMjdcXCclMjBzdHJva2UlM0RcXCclMjNmZmZcXCclMjBzdHJva2Utd2lkdGglM0RcXCcxMVxcJyUyMHN0cm9rZS1saW5lY2FwJTNEXFwncm91bmRcXCclMkYlM0UlM0MlMkZkZWZzJTNFJTNDZyUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRFxcJyUyM2xcXCclMjBvcGFjaXR5JTNEXFwnLjI3XFwnJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEXFwnJTIzbFxcJyUyMG9wYWNpdHklM0RcXCcuMjdcXCclMjB0cmFuc2Zvcm0lM0RcXCdyb3RhdGUoMzAlMjA2MCUyQzYwKVxcJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRFxcJyUyM2xcXCclMjBvcGFjaXR5JTNEXFwnLjI3XFwnJTIwdHJhbnNmb3JtJTNEXFwncm90YXRlKDYwJTIwNjAlMkM2MClcXCclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0RcXCclMjNsXFwnJTIwb3BhY2l0eSUzRFxcJy4yN1xcJyUyMHRyYW5zZm9ybSUzRFxcJ3JvdGF0ZSg5MCUyMDYwJTJDNjApXFwnJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEXFwnJTIzbFxcJyUyMG9wYWNpdHklM0RcXCcuMjdcXCclMjB0cmFuc2Zvcm0lM0RcXCdyb3RhdGUoMTIwJTIwNjAlMkM2MClcXCclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0RcXCclMjNsXFwnJTIwb3BhY2l0eSUzRFxcJy4yN1xcJyUyMHRyYW5zZm9ybSUzRFxcJ3JvdGF0ZSgxNTAlMjA2MCUyQzYwKVxcJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRFxcJyUyM2xcXCclMjBvcGFjaXR5JTNEXFwnLjM3XFwnJTIwdHJhbnNmb3JtJTNEXFwncm90YXRlKDE4MCUyMDYwJTJDNjApXFwnJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEXFwnJTIzbFxcJyUyMG9wYWNpdHklM0RcXCcuNDZcXCclMjB0cmFuc2Zvcm0lM0RcXCdyb3RhdGUoMjEwJTIwNjAlMkM2MClcXCclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0RcXCclMjNsXFwnJTIwb3BhY2l0eSUzRFxcJy41NlxcJyUyMHRyYW5zZm9ybSUzRFxcJ3JvdGF0ZSgyNDAlMjA2MCUyQzYwKVxcJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRFxcJyUyM2xcXCclMjBvcGFjaXR5JTNEXFwnLjY2XFwnJTIwdHJhbnNmb3JtJTNEXFwncm90YXRlKDI3MCUyMDYwJTJDNjApXFwnJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEXFwnJTIzbFxcJyUyMG9wYWNpdHklM0RcXCcuNzVcXCclMjB0cmFuc2Zvcm0lM0RcXCdyb3RhdGUoMzAwJTIwNjAlMkM2MClcXCclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0RcXCclMjNsXFwnJTIwb3BhY2l0eSUzRFxcJy44NVxcJyUyMHRyYW5zZm9ybSUzRFxcJ3JvdGF0ZSgzMzAlMjA2MCUyQzYwKVxcJyUyRiUzRSUzQyUyRmclM0UlM0MlMkZzdmclM0VcXFwiKX1cXEAtd2Via2l0LWtleWZyYW1lcyBzd2lwZXItcHJlbG9hZGVyLXNwaW57dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19XFxAa2V5ZnJhbWVzIHN3aXBlci1wcmVsb2FkZXItc3Bpbnt0b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX0uc3dpcGVyLWNvbnRhaW5lciAuc3dpcGVyLW5vdGlmaWNhdGlvbntwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjA7ei1pbmRleDotMTAwMH0uc3dpcGVyLWNvbnRhaW5lci1mYWRlLnN3aXBlci1jb250YWluZXItZnJlZS1tb2RlIC5zd2lwZXItc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDstby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH0uc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGV7cG9pbnRlci1ldmVudHM6bm9uZTstd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eTstby10cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHk7dHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5fS5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmV9LnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSwuc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZle3BvaW50ZXItZXZlbnRzOmF1dG99LnN3aXBlci1jb250YWluZXItY3ViZXtvdmVyZmxvdzp2aXNpYmxlfS5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZXtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47ei1pbmRleDoxO3Zpc2liaWxpdHk6aGlkZGVuOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjowIDA7LW1zLXRyYW5zZm9ybS1vcmlnaW46MCAwO3RyYW5zZm9ybS1vcmlnaW46MCAwO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGV7cG9pbnRlci1ldmVudHM6bm9uZX0uc3dpcGVyLWNvbnRhaW5lci1jdWJlLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItc2xpZGV7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjEwMCUgMDstbXMtdHJhbnNmb3JtLW9yaWdpbjoxMDAlIDA7dHJhbnNmb3JtLW9yaWdpbjoxMDAlIDB9LnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZle3BvaW50ZXItZXZlbnRzOmF1dG99LnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtbmV4dCwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtbmV4dCsuc3dpcGVyLXNsaWRlLC5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1wcmV2e3BvaW50ZXItZXZlbnRzOmF1dG87dmlzaWJpbGl0eTp2aXNpYmxlfS5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLC5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LC5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9we3otaW5kZXg6MDstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVufS5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1jdWJlLXNoYWRvd3twb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7Ym90dG9tOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOiMwMDA7b3BhY2l0eTouNjstd2Via2l0LWZpbHRlcjpibHVyKDUwcHgpO2ZpbHRlcjpibHVyKDUwcHgpO3otaW5kZXg6MH0uc3dpcGVyLWNvbnRhaW5lci1mbGlwe292ZXJmbG93OnZpc2libGV9LnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmU7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjt6LWluZGV4OjF9LnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGV7cG9pbnRlci1ldmVudHM6bm9uZX0uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtYWN0aXZlLC5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1hY3RpdmUgLnN3aXBlci1zbGlkZS1hY3RpdmV7cG9pbnRlci1ldmVudHM6YXV0b30uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHt6LWluZGV4OjA7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbn0uc3dpcGVyLWNvbnRhaW5lci1jb3ZlcmZsb3cgLnN3aXBlci13cmFwcGVyey1tcy1wZXJzcGVjdGl2ZToxMjAwcHh9aW9uLXNsaWRlc3tkaXNwbGF5OmJsb2NrOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e2JhY2tncm91bmQ6dmFyKC0tYnVsbGV0LWJhY2tncm91bmQpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZle2JhY2tncm91bmQ6dmFyKC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlKX0uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXJ7YmFja2dyb3VuZDp2YXIoLS1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCl9LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1maWxse2JhY2tncm91bmQ6dmFyKC0tcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQtYWN0aXZlKX0uc3dpcGVyLXNjcm9sbGJhcntiYWNrZ3JvdW5kOnZhcigtLXNjcm9sbC1iYXItYmFja2dyb3VuZCl9LnN3aXBlci1zY3JvbGxiYXItZHJhZ3tiYWNrZ3JvdW5kOnZhcigtLXNjcm9sbC1iYXItYmFja2dyb3VuZC1hY3RpdmUpfS5zbGlkZXMtaW9zey0tYnVsbGV0LWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMjAwLCNjY2MpOy0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpOy0tcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLDAuMjUpOy0tcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQtYWN0aXZlOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlLCMzMTcxZTApOy0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwwLjEpOy0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTpyZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksMC41KX1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzE7XG59KCkpO1xudmFyIHdhaXRGb3JTbGlkZXMgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoQXJyYXkuZnJvbShlbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tc2xpZGUnKSkubWFwKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmNvbXBvbmVudE9uUmVhZHkoKTsgfSkpO1xufTtcbmV4cG9ydCB7IFNsaWRlIGFzIGlvbl9zbGlkZSwgU2xpZGVzIGFzIGlvbl9zbGlkZXMgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=