(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-slide_2-md.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-slide_2-md.entry.js ***!
  \***********************************************************************/
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
        get: function () { return ".swiper-container{margin:0 auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translateZ(0);transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform}.swiper-invisible-blank-slide{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:height,-webkit-transform;-o-transition-property:transform,height;transition-property:transform,height;transition-property:transform,height,-webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(right,rgba(0,0,0,.5),transparent);background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(left,rgba(0,0,0,.5),transparent);background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(bottom,rgba(0,0,0,.5),transparent);background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(top,rgba(0,0,0,.5),transparent);background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:50%;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z\'%20fill%3D\'%23007aff\'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z\'%20fill%3D\'%23007aff\'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z\'%20fill%3D\'%23ffffff\'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z\'%20fill%3D\'%23ffffff\'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z\'%20fill%3D\'%23000000\'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z\'%20fill%3D\'%23000000\'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:opacity .3s;-o-transition:.3s opacity;transition:opacity .3s;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);-ms-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);-ms-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:top .2s,-webkit-transform .2s;transition:top .2s,-webkit-transform .2s;-o-transition:.2s transform,.2s top;transition:transform .2s,top .2s;transition:transform .2s,top .2s,-webkit-transform .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:left .2s,-webkit-transform .2s;transition:left .2s,-webkit-transform .2s;-o-transition:.2s transform,.2s left;transition:transform .2s,left .2s;transition:transform .2s,left .2s,-webkit-transform .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:right .2s,-webkit-transform .2s;transition:right .2s,-webkit-transform .2s;-o-transition:.2s transform,.2s right;transition:transform .2s,right .2s;transition:transform .2s,right .2s,-webkit-transform .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;-ms-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-progressbar.swiper-pagination-white{background:hsla(0,0%,100%,.25)}.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0,0,0,.25)}.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}.swiper-lazy-preloader:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D\'0%200%20120%20120\'%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20xmlns%3Axlink%3D\'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink\'%3E%3Cdefs%3E%3Cline%20id%3D\'l\'%20x1%3D\'60\'%20x2%3D\'60\'%20y1%3D\'7\'%20y2%3D\'27\'%20stroke%3D\'%236c6c6c\'%20stroke-width%3D\'11\'%20stroke-linecap%3D\'round\'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(30%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(60%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(90%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(120%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(150%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.37\'%20transform%3D\'rotate(180%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.46\'%20transform%3D\'rotate(210%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.56\'%20transform%3D\'rotate(240%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.66\'%20transform%3D\'rotate(270%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.75\'%20transform%3D\'rotate(300%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.85\'%20transform%3D\'rotate(330%2060%2C60)\'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D\'0%200%20120%20120\'%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20xmlns%3Axlink%3D\'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink\'%3E%3Cdefs%3E%3Cline%20id%3D\'l\'%20x1%3D\'60\'%20x2%3D\'60\'%20y1%3D\'7\'%20y2%3D\'27\'%20stroke%3D\'%23fff\'%20stroke-width%3D\'11\'%20stroke-linecap%3D\'round\'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(30%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(60%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(90%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(120%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(150%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.37\'%20transform%3D\'rotate(180%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.46\'%20transform%3D\'rotate(210%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.56\'%20transform%3D\'rotate(240%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.66\'%20transform%3D\'rotate(270%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.75\'%20transform%3D\'rotate(300%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.85\'%20transform%3D\'rotate(330%2060%2C60)\'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}\@-webkit-keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}ion-slides{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swiper-pagination-bullet{background:var(--bullet-background)}.swiper-pagination-bullet-active{background:var(--bullet-background-active)}.swiper-pagination-progressbar{background:var(--progress-bar-background)}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--progress-bar-background-active)}.swiper-scrollbar{background:var(--scroll-bar-background)}.swiper-scrollbar-drag{background:var(--scroll-bar-background-active)}.slides-md{--bullet-background:var(--ion-color-step-200,#ccc);--bullet-background-active:var(--ion-color-primary,#3880ff);--progress-bar-background:rgba(var(--ion-text-color-rgb,0,0,0),0.25);--progress-bar-background-active:var(--ion-color-primary-shade,#3171e0);--scroll-bar-background:rgba(var(--ion-text-color-rgb,0,0,0),0.1);--scroll-bar-background-active:rgba(var(--ion-text-color-rgb,0,0,0),0.5)}"; },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1zbGlkZV8yLW1kLmVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDOEU7QUFDL0Y7QUFDOUI7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBVTtBQUM3QixnQkFBZ0IsMkRBQUMsQ0FBQyxtREFBSSxHQUFHLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLDBCQUEwQixtQkFBbUIsWUFBWSxzQkFBc0IsY0FBYyxXQUFXLDBCQUEwQixrQkFBa0IsY0FBYyxvQkFBb0IsYUFBYSxrQkFBa0Isb0JBQW9CLGNBQWMsc0JBQXNCLG1CQUFtQixxQkFBcUIsdUJBQXVCLFdBQVcsWUFBWSxlQUFlLDhCQUE4QixzQkFBc0Isa0JBQWtCLFdBQVcsZUFBZSxZQUFZLGdCQUFnQixFQUFFLEVBQUU7QUFDbGY7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBLHNEQUFzRCw2QkFBNkIsRUFBRTtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixrQkFBa0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywyREFBVztBQUMzQywyQkFBMkIsMkRBQVc7QUFDdEMsaUNBQWlDLDJEQUFXO0FBQzVDLGtDQUFrQywyREFBVztBQUM3QyxpQ0FBaUMsMkRBQVc7QUFDNUMsaUNBQWlDLDJEQUFXO0FBQzVDLGlDQUFpQywyREFBVztBQUM1QywrQkFBK0IsMkRBQVc7QUFDMUMsK0JBQStCLDJEQUFXO0FBQzFDLHVDQUF1QywyREFBVztBQUNsRCxxQ0FBcUMsMkRBQVc7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Qyx5QkFBeUIsa0NBQWtDLEdBQUcsZ0NBQWdDLHlCQUF5Qix1Q0FBdUMsa0JBQWtCLE9BQU8sTUFBTSxvQkFBb0IsVUFBVSxjQUFjLGdFQUFnRSw0Q0FBNEMsdUNBQXVDLG9DQUFvQyxxQ0FBcUMsb0JBQW9CLG9DQUFvQywrQkFBK0IsNEJBQTRCLG1EQUFtRCxvQkFBb0IsNkdBQTZHLG9CQUFvQix1QkFBdUIsaUJBQWlCLHFDQUFxQyxvQkFBb0IsbUNBQW1DLDJCQUEyQixVQUFVLGtCQUFrQiw2QkFBNkIseUJBQXlCLHFCQUFxQixXQUFXLFlBQVksbURBQW1ELG9CQUFvQiwwREFBMEQsZ0NBQWdDLDRCQUE0Qix3QkFBd0IsNkdBQTZHLG9CQUFvQix3TEFBd0wsb0JBQW9CLG1CQUFtQixzTUFBc00sVUFBVSxtQ0FBbUMsMkJBQTJCLDJDQUEyQyxrQkFBa0IsT0FBTyxTQUFTLFdBQVcsWUFBWSxnQkFBZ0IsV0FBVywwQkFBMEIsa0JBQWtCLFVBQVUsdUJBQXVCLGlCQUFpQixxQ0FBcUMsb0JBQW9CLG1DQUFtQywyQkFBMkIsVUFBVSxtREFBbUQsb0JBQW9CLDZHQUE2RyxvQkFBb0Isc01BQXNNLFVBQVUsbUNBQW1DLDJCQUEyQiw0Q0FBNEMsdUJBQXVCLFdBQVcsY0FBYyx5QkFBeUIsc0JBQXNCLHFCQUFxQixpQkFBaUIsMEJBQTBCLG9DQUFvQyxpQ0FBaUMsMkNBQTJDLCtCQUErQiwwQ0FBMEMsbUVBQW1FLGlEQUFpRCxrQkFBa0Isd0NBQXdDLHVCQUF1QiwrQ0FBK0MsV0FBVyxtREFBbUQsNERBQTRELHFFQUFxRSx3RUFBd0Usa0VBQWtFLHlFQUF5RSxFQUFFLEVBQUU7QUFDbnBvQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esc0ZBQXNGLDZCQUE2QixFQUFFO0FBQ3JIO0FBQ29EIiwiZmlsZSI6Ijg1LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBnZXRJb25Nb2RlLCBoLCBIIGFzIEhvc3QsIGQgYXMgY3JlYXRlRXZlbnQsIGUgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vY29yZS1mZWVlZmYwZC5qcyc7XG5pbXBvcnQgJy4vY29uZmlnLTNjN2YzNzkwLmpzJztcbnZhciBTbGlkZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTbGlkZShob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgfVxuICAgIFNsaWRlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgeyBjbGFzczogKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hWydzd2lwZXItc2xpZGUnXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgX2FbJ3N3aXBlci16b29tLWNvbnRhaW5lciddID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBfYSkgfSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNsaWRlLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcImlvbi1zbGlkZXtoZWlnaHQ6MTAwJX0uc2xpZGUtem9vbSxpb24tc2xpZGV7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlfS5zbGlkZS16b29tLC5zd2lwZXItc2xpZGV7dGV4dC1hbGlnbjpjZW50ZXJ9LnN3aXBlci1zbGlkZXtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Zm9udC1zaXplOjE4cHg7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5zd2lwZXItc2xpZGUgaW1ne3dpZHRoOmF1dG87bWF4LXdpZHRoOjEwMCU7aGVpZ2h0OmF1dG87bWF4LWhlaWdodDoxMDAlfVwiOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gU2xpZGU7XG59KCkpO1xudmFyIFNsaWRlcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18xKGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgdGhpcy5zd2lwZXJSZWFkeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN3aXBlciA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7IF90aGlzLnJlYWR5U3dpcGVyID0gcmVzb2x2ZTsgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPcHRpb25zIHRvIHBhc3MgdG8gdGhlIHN3aXBlciBpbnN0YW5jZS5cbiAgICAgICAgICogU2VlIGh0dHA6Ly9pZGFuZ2Vyby51cy9zd2lwZXIvYXBpLyBmb3IgdmFsaWQgb3B0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vcHRpb25zID0ge307IC8vIFN3aXBlck9wdGlvbnM7ICAvLyBUT0RPXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHNob3cgdGhlIHBhZ2luYXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBhZ2VyID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBgdHJ1ZWAsIHNob3cgdGhlIHNjcm9sbGJhci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW9uU2xpZGVzRGlkTG9hZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU2xpZGVzRGlkTG9hZFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TbGlkZVRhcCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU2xpZGVUYXBcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU2xpZGVEb3VibGVUYXAgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblNsaWRlRG91YmxlVGFwXCIsIDcpO1xuICAgICAgICB0aGlzLmlvblNsaWRlV2lsbENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU2xpZGVXaWxsQ2hhbmdlXCIsIDcpO1xuICAgICAgICB0aGlzLmlvblNsaWRlRGlkQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TbGlkZURpZENoYW5nZVwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TbGlkZU5leHRTdGFydCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU2xpZGVOZXh0U3RhcnRcIiwgNyk7XG4gICAgICAgIHRoaXMuaW9uU2xpZGVQcmV2U3RhcnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblNsaWRlUHJldlN0YXJ0XCIsIDcpO1xuICAgICAgICB0aGlzLmlvblNsaWRlTmV4dEVuZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU2xpZGVOZXh0RW5kXCIsIDcpO1xuICAgICAgICB0aGlzLmlvblNsaWRlUHJldkVuZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU2xpZGVQcmV2RW5kXCIsIDcpO1xuICAgICAgICB0aGlzLmlvblNsaWRlVHJhbnNpdGlvblN0YXJ0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TbGlkZVRyYW5zaXRpb25TdGFydFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TbGlkZVRyYW5zaXRpb25FbmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblNsaWRlVHJhbnNpdGlvbkVuZFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TbGlkZURyYWcgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblNsaWRlRHJhZ1wiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TbGlkZVJlYWNoU3RhcnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblNsaWRlUmVhY2hTdGFydFwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25TbGlkZVJlYWNoRW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TbGlkZVJlYWNoRW5kXCIsIDcpO1xuICAgICAgICB0aGlzLmlvblNsaWRlVG91Y2hTdGFydCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU2xpZGVUb3VjaFN0YXJ0XCIsIDcpO1xuICAgICAgICB0aGlzLmlvblNsaWRlVG91Y2hFbmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblNsaWRlVG91Y2hFbmRcIiwgNyk7XG4gICAgfVxuICAgIGNsYXNzXzEucHJvdG90eXBlLm9wdGlvbnNDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3dpcGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN3aXBlclJlYWR5KSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2V0U3dpcGVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHN3aXBlci5wYXJhbXMsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnVwZGF0ZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG11dCA9IHRoaXMubXV0YXRpb25PID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnN3aXBlclJlYWR5KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtdXQub2JzZXJ2ZSh0aGlzLmVsLCB7XG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsLmNvbXBvbmVudE9uUmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmluaXRTd2lwZXIoKTsgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN3aXBlcjtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tdXRhdGlvbk8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11dGF0aW9uTy5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk8gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmdldFN3aXBlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXBlciA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7IF90aGlzLnJlYWR5U3dpcGVyID0gcmVzb2x2ZTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXBlclJlYWR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSB1bmRlcmx5aW5nIHNsaWRlciBpbXBsZW1lbnRhdGlvbi4gQ2FsbCB0aGlzIGlmIHlvdSd2ZSBhZGRlZCBvciByZW1vdmVkXG4gICAgICogY2hpbGQgc2xpZGVzLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN3aXBlcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3dpcGVyKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FpdEZvclNsaWRlcyh0aGlzLmVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIgPSAoX2Euc2VudCgpKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXBlci51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGb3JjZSBzd2lwZXIgdG8gdXBkYXRlIGl0cyBoZWlnaHQgKHdoZW4gYXV0b0hlaWdodCBpcyBlbmFibGVkKSBmb3IgdGhlIGR1cmF0aW9uXG4gICAgICogZXF1YWwgdG8gJ3NwZWVkJyBwYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3BlZWQgVGhlIHRyYW5zaXRpb24gZHVyYXRpb24gKGluIG1zKS5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS51cGRhdGVBdXRvSGVpZ2h0ID0gZnVuY3Rpb24gKHNwZWVkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2V0U3dpcGVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIudXBkYXRlQXV0b0hlaWdodChzcGVlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVHJhbnNpdGlvbiB0byB0aGUgc3BlY2lmaWVkIHNsaWRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCBvZiB0aGUgc2xpZGUgdG8gdHJhbnNpdGlvbiB0by5cbiAgICAgKiBAcGFyYW0gc3BlZWQgVGhlIHRyYW5zaXRpb24gZHVyYXRpb24gKGluIG1zKS5cbiAgICAgKiBAcGFyYW0gcnVuQ2FsbGJhY2tzIElmIHRydWUsIHRoZSB0cmFuc2l0aW9uIHdpbGwgcHJvZHVjZSBbVHJhbnNpdGlvbi9TbGlkZUNoYW5nZV1bU3RhcnQvRW5kXSB0cmFuc2l0aW9uIGV2ZW50cy5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5zbGlkZVRvID0gZnVuY3Rpb24gKGluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2V0U3dpcGVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzbGlkZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzcGVlZCBUaGUgdHJhbnNpdGlvbiBkdXJhdGlvbiAoaW4gbXMpLlxuICAgICAqIEBwYXJhbSBydW5DYWxsYmFja3MgSWYgdHJ1ZSwgdGhlIHRyYW5zaXRpb24gd2lsbCBwcm9kdWNlIFtUcmFuc2l0aW9uL1NsaWRlQ2hhbmdlXVtTdGFydC9FbmRdIHRyYW5zaXRpb24gZXZlbnRzLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnNsaWRlTmV4dCA9IGZ1bmN0aW9uIChzcGVlZCwgcnVuQ2FsbGJhY2tzKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2V0U3dpcGVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVOZXh0KHNwZWVkLCBydW5DYWxsYmFja3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRyYW5zaXRpb24gdG8gdGhlIHByZXZpb3VzIHNsaWRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNwZWVkIFRoZSB0cmFuc2l0aW9uIGR1cmF0aW9uIChpbiBtcykuXG4gICAgICogQHBhcmFtIHJ1bkNhbGxiYWNrcyBJZiB0cnVlLCB0aGUgdHJhbnNpdGlvbiB3aWxsIHByb2R1Y2UgdGhlIFtUcmFuc2l0aW9uL1NsaWRlQ2hhbmdlXVtTdGFydC9FbmRdIHRyYW5zaXRpb24gZXZlbnRzLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnNsaWRlUHJldiA9IGZ1bmN0aW9uIChzcGVlZCwgcnVuQ2FsbGJhY2tzKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2V0U3dpcGVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVQcmV2KHNwZWVkLCBydW5DYWxsYmFja3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaW5kZXggb2YgdGhlIGFjdGl2ZSBzbGlkZS5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5nZXRBY3RpdmVJbmRleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN3aXBlcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5nZXRTd2lwZXIoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXBlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBzd2lwZXIuYWN0aXZlSW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaW5kZXggb2YgdGhlIHByZXZpb3VzIHNsaWRlLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmdldFByZXZpb3VzSW5kZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2V0U3dpcGVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgc3dpcGVyLnByZXZpb3VzSW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdG90YWwgbnVtYmVyIG9mIHNsaWRlcy5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5sZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2V0U3dpcGVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgc3dpcGVyLnNsaWRlcy5sZW5ndGhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB3aGV0aGVyIG9yIG5vdCB0aGUgY3VycmVudCBzbGlkZSBpcyB0aGUgbGFzdCBzbGlkZS5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5pc0VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN3aXBlcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5nZXRTd2lwZXIoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXBlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBzd2lwZXIuaXNFbmRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB3aGV0aGVyIG9yIG5vdCB0aGUgY3VycmVudCBzbGlkZSBpcyB0aGUgZmlyc3Qgc2xpZGUuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuaXNCZWdpbm5pbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2V0U3dpcGVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgc3dpcGVyLmlzQmVnaW5uaW5nXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdGFydCBhdXRvIHBsYXkuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc3RhcnRBdXRvcGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN3aXBlcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5nZXRTd2lwZXIoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXBlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzd2lwZXIuYXV0b3BsYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdG9wIGF1dG8gcGxheS5cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5zdG9wQXV0b3BsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2V0U3dpcGVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3dpcGVyLmF1dG9wbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBMb2NrIG9yIHVubG9jayB0aGUgYWJpbGl0eSB0byBzbGlkZSB0byB0aGUgbmV4dCBzbGlkZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsb2NrIElmIGB0cnVlYCwgZGlzYWJsZSBzd2lwaW5nIHRvIHRoZSBuZXh0IHNsaWRlLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmxvY2tTd2lwZVRvTmV4dCA9IGZ1bmN0aW9uIChsb2NrKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuZ2V0U3dpcGVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSAhbG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBMb2NrIG9yIHVubG9jayB0aGUgYWJpbGl0eSB0byBzbGlkZSB0byB0aGUgcHJldmlvdXMgc2xpZGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbG9jayBJZiBgdHJ1ZWAsIGRpc2FibGUgc3dpcGluZyB0byB0aGUgcHJldmlvdXMgc2xpZGUuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUubG9ja1N3aXBlVG9QcmV2ID0gZnVuY3Rpb24gKGxvY2spIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN3aXBlcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5nZXRTd2lwZXIoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXBlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9ICFsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIExvY2sgb3IgdW5sb2NrIHRoZSBhYmlsaXR5IHRvIHNsaWRlIHRvIHRoZSBuZXh0IG9yIHByZXZpb3VzIHNsaWRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIGxvY2sgSWYgYHRydWVgLCBkaXNhYmxlIHN3aXBpbmcgdG8gdGhlIG5leHQgYW5kIHByZXZpb3VzIHNsaWRlLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmxvY2tTd2lwZXMgPSBmdW5jdGlvbiAobG9jaykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3dpcGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmdldFN3aXBlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gIWxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSAhbG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXBlci5hbGxvd1RvdWNoTW92ZSA9ICFsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgU3dpcGVyIGluc3RhbmNlLlxuICAgICAqIFVzZSB0aGlzIHRvIGFjY2VzcyB0aGUgZnVsbCBTd2lwZXIgQVBJLlxuICAgICAqIFNlZSBodHRwczovL2lkYW5nZXJvLnVzL3N3aXBlci9hcGkvIGZvciBhbGwgQVBJIG9wdGlvbnMuXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZ2V0U3dpcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMuc3dpcGVyXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmluaXRTd2lwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBmaW5hbE9wdGlvbnMsIFN3aXBlciwgc3dpcGVyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxPcHRpb25zID0gdGhpcy5ub3JtYWxpemVPcHRpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbXBvcnQoJy4vc3dpcGVyLmJ1bmRsZS1jY2RhYWM1NC5qcycpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgU3dpcGVyID0gKF9hLnNlbnQoKSkuU3dpcGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd2FpdEZvclNsaWRlcyh0aGlzLmVsKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXBlciA9IG5ldyBTd2lwZXIodGhpcy5lbCwgZmluYWxPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpcGVyUmVhZHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkeVN3aXBlcihzd2lwZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm5vcm1hbGl6ZU9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIEJhc2Ugb3B0aW9ucywgY2FuIGJlIGNoYW5nZWRcbiAgICAgICAgLy8gVE9ETyBBZGQgaW50ZXJmYWNlIFN3aXBlck9wdGlvbnNcbiAgICAgICAgdmFyIHN3aXBlck9wdGlvbnMgPSB7XG4gICAgICAgICAgICBlZmZlY3Q6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiAwLFxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICBwYXJhbGxheDogZmFsc2UsXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIHNsaWRlc1BlckNvbHVtbjogMSxcbiAgICAgICAgICAgIHNsaWRlc1BlckNvbHVtbkZpbGw6ICdjb2x1bW4nLFxuICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICAgICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgICAgICAgICBzbGlkZXNPZmZzZXRCZWZvcmU6IDAsXG4gICAgICAgICAgICBzbGlkZXNPZmZzZXRBZnRlcjogMCxcbiAgICAgICAgICAgIHRvdWNoRXZlbnRzVGFyZ2V0OiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIGZyZWVNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgIGZyZWVNb2RlTW9tZW50dW06IHRydWUsXG4gICAgICAgICAgICBmcmVlTW9kZU1vbWVudHVtUmF0aW86IDEsXG4gICAgICAgICAgICBmcmVlTW9kZU1vbWVudHVtQm91bmNlOiB0cnVlLFxuICAgICAgICAgICAgZnJlZU1vZGVNb21lbnR1bUJvdW5jZVJhdGlvOiAxLFxuICAgICAgICAgICAgZnJlZU1vZGVNb21lbnR1bVZlbG9jaXR5UmF0aW86IDEsXG4gICAgICAgICAgICBmcmVlTW9kZVN0aWNreTogZmFsc2UsXG4gICAgICAgICAgICBmcmVlTW9kZU1pbmltdW1WZWxvY2l0eTogMC4wMixcbiAgICAgICAgICAgIGF1dG9IZWlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgc2V0V3JhcHBlclNpemU6IGZhbHNlLFxuICAgICAgICAgICAgem9vbToge1xuICAgICAgICAgICAgICAgIG1heFJhdGlvOiAzLFxuICAgICAgICAgICAgICAgIG1pblJhdGlvOiAxLFxuICAgICAgICAgICAgICAgIHRvZ2dsZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2hSYXRpbzogMSxcbiAgICAgICAgICAgIHRvdWNoQW5nbGU6IDQ1LFxuICAgICAgICAgICAgc2ltdWxhdGVUb3VjaDogdHJ1ZSxcbiAgICAgICAgICAgIHRvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICBzaG9ydFN3aXBlczogdHJ1ZSxcbiAgICAgICAgICAgIGxvbmdTd2lwZXM6IHRydWUsXG4gICAgICAgICAgICBsb25nU3dpcGVzUmF0aW86IDAuNSxcbiAgICAgICAgICAgIGxvbmdTd2lwZXNNczogMzAwLFxuICAgICAgICAgICAgZm9sbG93RmluZ2VyOiB0cnVlLFxuICAgICAgICAgICAgdGhyZXNob2xkOiAwLFxuICAgICAgICAgICAgdG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uOiB0cnVlLFxuICAgICAgICAgICAgdG91Y2hSZWxlYXNlT25FZGdlczogZmFsc2UsXG4gICAgICAgICAgICBpT1NFZGdlU3dpcGVEZXRlY3Rpb246IGZhbHNlLFxuICAgICAgICAgICAgaU9TRWRnZVN3aXBlVGhyZXNob2xkOiAyMCxcbiAgICAgICAgICAgIHJlc2lzdGFuY2U6IHRydWUsXG4gICAgICAgICAgICByZXNpc3RhbmNlUmF0aW86IDAuODUsXG4gICAgICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogZmFsc2UsXG4gICAgICAgICAgICBwcmV2ZW50Q2xpY2tzOiB0cnVlLFxuICAgICAgICAgICAgcHJldmVudENsaWNrc1Byb3BhZ2F0aW9uOiB0cnVlLFxuICAgICAgICAgICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2UsXG4gICAgICAgICAgICBsb29wQWRkaXRpb25hbFNsaWRlczogMCxcbiAgICAgICAgICAgIG5vU3dpcGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHJ1bkNhbGxiYWNrc09uSW5pdDogdHJ1ZSxcbiAgICAgICAgICAgIGNvdmVyZmxvd0VmZmVjdDoge1xuICAgICAgICAgICAgICAgIHJvdGF0ZTogNTAsXG4gICAgICAgICAgICAgICAgc3RyZXRjaDogMCxcbiAgICAgICAgICAgICAgICBkZXB0aDogMTAwLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlU2hhZG93czogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZsaXBFZmZlY3Q6IHtcbiAgICAgICAgICAgICAgICBzbGlkZVNoYWRvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgbGltaXRSb3RhdGlvbjogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1YmVFZmZlY3Q6IHtcbiAgICAgICAgICAgICAgICBzbGlkZVNoYWRvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgc2hhZG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNoYWRvd09mZnNldDogMjAsXG4gICAgICAgICAgICAgICAgc2hhZG93U2NhbGU6IDAuOTRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWRlRWZmZWN0OiB7XG4gICAgICAgICAgICAgICAgY3Jvc3NmYWRlOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGExMXk6IHtcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGVNZXNzYWdlOiAnUHJldmlvdXMgc2xpZGUnLFxuICAgICAgICAgICAgICAgIG5leHRTbGlkZU1lc3NhZ2U6ICdOZXh0IHNsaWRlJyxcbiAgICAgICAgICAgICAgICBmaXJzdFNsaWRlTWVzc2FnZTogJ1RoaXMgaXMgdGhlIGZpcnN0IHNsaWRlJyxcbiAgICAgICAgICAgICAgICBsYXN0U2xpZGVNZXNzYWdlOiAnVGhpcyBpcyB0aGUgbGFzdCBzbGlkZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMucGFnZXIpIHtcbiAgICAgICAgICAgIHN3aXBlck9wdGlvbnMucGFnaW5hdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBlbDogdGhpcy5wYWdpbmF0aW9uRWwsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2J1bGxldHMnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaGlkZU9uQ2xpY2s6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zY3JvbGxiYXIpIHtcbiAgICAgICAgICAgIHN3aXBlck9wdGlvbnMuc2Nyb2xsYmFyID0ge1xuICAgICAgICAgICAgICAgIGVsOiB0aGlzLnNjcm9sbGJhckVsLFxuICAgICAgICAgICAgICAgIGhpZGU6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIC8vIEtlZXAgdGhlIGV2ZW50IG9wdGlvbnMgc2VwYXJhdGUsIHdlIGRvbnQgd2FudCB1c2Vyc1xuICAgICAgICAvLyBvdmVyd3JpdGluZyB0aGVzZVxuICAgICAgICB2YXIgZXZlbnRPcHRpb25zID0ge1xuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW9uU2xpZGVzRGlkTG9hZC5lbWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0OiB0aGlzLmlvblNsaWRlV2lsbENoYW5nZS5lbWl0LFxuICAgICAgICAgICAgICAgIHNsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZDogdGhpcy5pb25TbGlkZURpZENoYW5nZS5lbWl0LFxuICAgICAgICAgICAgICAgIHNsaWRlTmV4dFRyYW5zaXRpb25TdGFydDogdGhpcy5pb25TbGlkZU5leHRTdGFydC5lbWl0LFxuICAgICAgICAgICAgICAgIHNsaWRlUHJldlRyYW5zaXRpb25TdGFydDogdGhpcy5pb25TbGlkZVByZXZTdGFydC5lbWl0LFxuICAgICAgICAgICAgICAgIHNsaWRlTmV4dFRyYW5zaXRpb25FbmQ6IHRoaXMuaW9uU2xpZGVOZXh0RW5kLmVtaXQsXG4gICAgICAgICAgICAgICAgc2xpZGVQcmV2VHJhbnNpdGlvbkVuZDogdGhpcy5pb25TbGlkZVByZXZFbmQuZW1pdCxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uU3RhcnQ6IHRoaXMuaW9uU2xpZGVUcmFuc2l0aW9uU3RhcnQuZW1pdCxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRW5kOiB0aGlzLmlvblNsaWRlVHJhbnNpdGlvbkVuZC5lbWl0LFxuICAgICAgICAgICAgICAgIHNsaWRlck1vdmU6IHRoaXMuaW9uU2xpZGVEcmFnLmVtaXQsXG4gICAgICAgICAgICAgICAgcmVhY2hCZWdpbm5pbmc6IHRoaXMuaW9uU2xpZGVSZWFjaFN0YXJ0LmVtaXQsXG4gICAgICAgICAgICAgICAgcmVhY2hFbmQ6IHRoaXMuaW9uU2xpZGVSZWFjaEVuZC5lbWl0LFxuICAgICAgICAgICAgICAgIHRvdWNoU3RhcnQ6IHRoaXMuaW9uU2xpZGVUb3VjaFN0YXJ0LmVtaXQsXG4gICAgICAgICAgICAgICAgdG91Y2hFbmQ6IHRoaXMuaW9uU2xpZGVUb3VjaEVuZC5lbWl0LFxuICAgICAgICAgICAgICAgIHRhcDogdGhpcy5pb25TbGlkZVRhcC5lbWl0LFxuICAgICAgICAgICAgICAgIGRvdWJsZVRhcDogdGhpcy5pb25TbGlkZURvdWJsZVRhcC5lbWl0XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBjdXN0b21FdmVudHMgPSAoISF0aGlzLm9wdGlvbnMgJiYgISF0aGlzLm9wdGlvbnMub24pID8gdGhpcy5vcHRpb25zLm9uIDoge307XG4gICAgICAgIC8vIG1lcmdlIFwib25cIiBldmVudCBsaXN0ZW5lcnMsIHdoaWxlIGdpdmluZyBvdXIgZXZlbnQgbGlzdGVuZXJzIHByaW9yaXR5XG4gICAgICAgIHZhciBtZXJnZWRFdmVudE9wdGlvbnMgPSB7IG9uOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGN1c3RvbUV2ZW50cyksIGV2ZW50T3B0aW9ucy5vbikgfTtcbiAgICAgICAgLy8gTWVyZ2UgdGhlIGJhc2UsIHVzZXIgb3B0aW9ucywgYW5kIGV2ZW50cyB0b2dldGhlciB0aGVuIHBhcyB0byBzd2lwZXJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzd2lwZXJPcHRpb25zKSwgdGhpcy5vcHRpb25zKSwgbWVyZ2VkRXZlbnRPcHRpb25zKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiAoaChIb3N0LCB7IGNsYXNzOiAoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICBfYVtcIlwiICsgbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIC8vIFVzZWQgaW50ZXJuYWxseSBmb3Igc3R5bGluZ1xuICAgICAgICAgICAgICAgIF9hW1wic2xpZGVzLVwiICsgbW9kZV0gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hWydzd2lwZXItY29udGFpbmVyJ10gPSB0cnVlLFxuICAgICAgICAgICAgICAgIF9hKSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwic3dpcGVyLXdyYXBwZXJcIiB9LCBoKFwic2xvdFwiLCBudWxsKSksIHRoaXMucGFnZXIgJiYgaChcImRpdlwiLCB7IGNsYXNzOiBcInN3aXBlci1wYWdpbmF0aW9uXCIsIHJlZjogZnVuY3Rpb24gKGVsKSB7IHJldHVybiBfdGhpcy5wYWdpbmF0aW9uRWwgPSBlbDsgfSB9KSwgdGhpcy5zY3JvbGxiYXIgJiYgaChcImRpdlwiLCB7IGNsYXNzOiBcInN3aXBlci1zY3JvbGxiYXJcIiwgcmVmOiBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIF90aGlzLnNjcm9sbGJhckVsID0gZWw7IH0gfSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLCBcImFzc2V0c0RpcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcInN3aXBlclwiXTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcImVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMSwgXCJ3YXRjaGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcIm9wdGlvbnNcIjogW1wib3B0aW9uc0NoYW5nZWRcIl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLCBcInN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIi5zd2lwZXItY29udGFpbmVye21hcmdpbjowIGF1dG87cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO2xpc3Qtc3R5bGU6bm9uZTtwYWRkaW5nOjA7ei1pbmRleDoxfS5zd2lwZXItY29udGFpbmVyLW5vLWZsZXhib3ggLnN3aXBlci1zbGlkZXtmbG9hdDpsZWZ0fS5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItd3JhcHBlcnstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDstd2Via2l0LWZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uc3dpcGVyLXdyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjE7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6LXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTotd2Via2l0LXRyYW5zZm9ybTstby10cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSwtd2Via2l0LXRyYW5zZm9ybTstd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveH0uc3dpcGVyLWNvbnRhaW5lci1hbmRyb2lkIC5zd2lwZXItc2xpZGUsLnN3aXBlci13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9LnN3aXBlci1jb250YWluZXItbXVsdGlyb3c+LnN3aXBlci13cmFwcGVyey13ZWJraXQtZmxleC13cmFwOndyYXA7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwfS5zd2lwZXItY29udGFpbmVyLWZyZWUtbW9kZT4uc3dpcGVyLXdyYXBwZXJ7LXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDstby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDttYXJnaW46MCBhdXRvfS5zd2lwZXItc2xpZGV7LXdlYmtpdC1mbGV4LXNocmluazowOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTotd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5Oi13ZWJraXQtdHJhbnNmb3JtOy1vLXRyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLC13ZWJraXQtdHJhbnNmb3JtfS5zd2lwZXItaW52aXNpYmxlLWJsYW5rLXNsaWRle3Zpc2liaWxpdHk6aGlkZGVufS5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQsLnN3aXBlci1jb250YWluZXItYXV0b2hlaWdodCAuc3dpcGVyLXNsaWRle2hlaWdodDphdXRvfS5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQgLnN3aXBlci13cmFwcGVyey13ZWJraXQtYm94LWFsaWduOnN0YXJ0Oy13ZWJraXQtYWxpZ24taXRlbXM6ZmxleC1zdGFydDstbXMtZmxleC1hbGlnbjpzdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0Oy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTpoZWlnaHQsLXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTpoZWlnaHQsLXdlYmtpdC10cmFuc2Zvcm07LW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0saGVpZ2h0O3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLGhlaWdodDt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSxoZWlnaHQsLXdlYmtpdC10cmFuc2Zvcm19LnN3aXBlci1jb250YWluZXItM2R7LXdlYmtpdC1wZXJzcGVjdGl2ZToxMjAwcHg7cGVyc3BlY3RpdmU6MTIwMHB4fS5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItY3ViZS1zaGFkb3csLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZSwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZH0uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3B7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4OjEwfS5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnR7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWdyYWRpZW50KGxpbmVhcixyaWdodCB0b3AsbGVmdCB0b3AsZnJvbShyZ2JhKDAsMCwwLC41KSksdG8odHJhbnNwYXJlbnQpKTtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJpZ2h0LHJnYmEoMCwwLDAsLjUpLHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudChyaWdodCxyZ2JhKDAsMCwwLC41KSx0cmFuc3BhcmVudCk7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMjcwZGVnLHJnYmEoMCwwLDAsLjUpLHRyYW5zcGFyZW50KX0uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodHtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgdG9wLHJpZ2h0IHRvcCxmcm9tKHJnYmEoMCwwLDAsLjUpKSx0byh0cmFuc3BhcmVudCkpO2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCxyZ2JhKDAsMCwwLC41KSx0cmFuc3BhcmVudCk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQobGVmdCxyZ2JhKDAsMCwwLC41KSx0cmFuc3BhcmVudCk7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoOTBkZWcscmdiYSgwLDAsMCwuNSksdHJhbnNwYXJlbnQpfS5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgYm90dG9tLGxlZnQgdG9wLGZyb20ocmdiYSgwLDAsMCwuNSkpLHRvKHRyYW5zcGFyZW50KSk7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChib3R0b20scmdiYSgwLDAsMCwuNSksdHJhbnNwYXJlbnQpO2JhY2tncm91bmQtaW1hZ2U6LW8tbGluZWFyLWdyYWRpZW50KGJvdHRvbSxyZ2JhKDAsMCwwLC41KSx0cmFuc3BhcmVudCk7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMGRlZyxyZ2JhKDAsMCwwLC41KSx0cmFuc3BhcmVudCl9LnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9te2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AsbGVmdCBib3R0b20sZnJvbShyZ2JhKDAsMCwwLC41KSksdG8odHJhbnNwYXJlbnQpKTtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCxyZ2JhKDAsMCwwLC41KSx0cmFuc3BhcmVudCk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQodG9wLHJnYmEoMCwwLDAsLjUpLHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgxODBkZWcscmdiYSgwLDAsMCwuNSksdHJhbnNwYXJlbnQpfS5zd2lwZXItY29udGFpbmVyLXdwOC1ob3Jpem9udGFsLC5zd2lwZXItY29udGFpbmVyLXdwOC1ob3Jpem9udGFsPi5zd2lwZXItd3JhcHBlcnstbXMtdG91Y2gtYWN0aW9uOnBhbi15O3RvdWNoLWFjdGlvbjpwYW4teX0uc3dpcGVyLWNvbnRhaW5lci13cDgtdmVydGljYWwsLnN3aXBlci1jb250YWluZXItd3A4LXZlcnRpY2FsPi5zd2lwZXItd3JhcHBlcnstbXMtdG91Y2gtYWN0aW9uOnBhbi14O3RvdWNoLWFjdGlvbjpwYW4teH0uc3dpcGVyLWJ1dHRvbi1uZXh0LC5zd2lwZXItYnV0dG9uLXByZXZ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTt3aWR0aDoyN3B4O2hlaWdodDo0NHB4O21hcmdpbi10b3A6LTIycHg7ei1pbmRleDoxMDtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLXNpemU6MjdweCA0NHB4O2JhY2tncm91bmQtcG9zaXRpb246NTAlO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdH0uc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tZGlzYWJsZWQsLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWRpc2FibGVke29wYWNpdHk6LjM1O2N1cnNvcjphdXRvO3BvaW50ZXItZXZlbnRzOm5vbmV9LnN3aXBlci1idXR0b24tcHJldiwuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tbmV4dHtiYWNrZ3JvdW5kLWltYWdlOnVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0RcXCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmdcXCclMjB2aWV3Qm94JTNEXFwnMCUyMDAlMjAyNyUyMDQ0XFwnJTNFJTNDcGF0aCUyMGQlM0RcXCdNMCUyQzIyTDIyJTJDMGwyLjElMkMyLjFMNC4yJTJDMjJsMTkuOSUyQzE5LjlMMjIlMkM0NEwwJTJDMjJMMCUyQzIyTDAlMkMyMnpcXCclMjBmaWxsJTNEXFwnJTIzMDA3YWZmXFwnJTJGJTNFJTNDJTJGc3ZnJTNFXFxcIik7bGVmdDoxMHB4O3JpZ2h0OmF1dG99LnN3aXBlci1idXR0b24tbmV4dCwuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tcHJldntiYWNrZ3JvdW5kLWltYWdlOnVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0RcXCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmdcXCclMjB2aWV3Qm94JTNEXFwnMCUyMDAlMjAyNyUyMDQ0XFwnJTNFJTNDcGF0aCUyMGQlM0RcXCdNMjclMkMyMkwyNyUyQzIyTDUlMkM0NGwtMi4xLTIuMUwyMi44JTJDMjJMMi45JTJDMi4xTDUlMkMwTDI3JTJDMjJMMjclMkMyMnpcXCclMjBmaWxsJTNEXFwnJTIzMDA3YWZmXFwnJTJGJTNFJTNDJTJGc3ZnJTNFXFxcIik7cmlnaHQ6MTBweDtsZWZ0OmF1dG99LnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLXdoaXRlLC5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24td2hpdGV7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHhtbG5zJTNEXFwnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnXFwnJTIwdmlld0JveCUzRFxcJzAlMjAwJTIwMjclMjA0NFxcJyUzRSUzQ3BhdGglMjBkJTNEXFwnTTAlMkMyMkwyMiUyQzBsMi4xJTJDMi4xTDQuMiUyQzIybDE5LjklMkMxOS45TDIyJTJDNDRMMCUyQzIyTDAlMkMyMkwwJTJDMjJ6XFwnJTIwZmlsbCUzRFxcJyUyM2ZmZmZmZlxcJyUyRiUzRSUzQyUyRnN2ZyUzRVxcXCIpfS5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi13aGl0ZSwuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLXdoaXRle2JhY2tncm91bmQtaW1hZ2U6dXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB4bWxucyUzRFxcJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2Z1xcJyUyMHZpZXdCb3glM0RcXCcwJTIwMCUyMDI3JTIwNDRcXCclM0UlM0NwYXRoJTIwZCUzRFxcJ00yNyUyQzIyTDI3JTJDMjJMNSUyQzQ0bC0yLjEtMi4xTDIyLjglMkMyMkwyLjklMkMyLjFMNSUyQzBMMjclMkMyMkwyNyUyQzIyelxcJyUyMGZpbGwlM0RcXCclMjNmZmZmZmZcXCclMkYlM0UlM0MlMkZzdmclM0VcXFwiKX0uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tYmxhY2ssLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1ibGFja3tiYWNrZ3JvdW5kLWltYWdlOnVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0RcXCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmdcXCclMjB2aWV3Qm94JTNEXFwnMCUyMDAlMjAyNyUyMDQ0XFwnJTNFJTNDcGF0aCUyMGQlM0RcXCdNMCUyQzIyTDIyJTJDMGwyLjElMkMyLjFMNC4yJTJDMjJsMTkuOSUyQzE5LjlMMjIlMkM0NEwwJTJDMjJMMCUyQzIyTDAlMkMyMnpcXCclMjBmaWxsJTNEXFwnJTIzMDAwMDAwXFwnJTJGJTNFJTNDJTJGc3ZnJTNFXFxcIil9LnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWJsYWNrLC5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tYmxhY2t7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHhtbG5zJTNEXFwnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnXFwnJTIwdmlld0JveCUzRFxcJzAlMjAwJTIwMjclMjA0NFxcJyUzRSUzQ3BhdGglMjBkJTNEXFwnTTI3JTJDMjJMMjclMkMyMkw1JTJDNDRsLTIuMS0yLjFMMjIuOCUyQzIyTDIuOSUyQzIuMUw1JTJDMEwyNyUyQzIyTDI3JTJDMjJ6XFwnJTIwZmlsbCUzRFxcJyUyMzAwMDAwMFxcJyUyRiUzRSUzQyUyRnN2ZyUzRVxcXCIpfS5zd2lwZXItYnV0dG9uLWxvY2t7ZGlzcGxheTpub25lfS5zd2lwZXItcGFnaW5hdGlvbntwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcjstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuM3M7LW8tdHJhbnNpdGlvbjouM3Mgb3BhY2l0eTt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7ei1pbmRleDoxMH0uc3dpcGVyLXBhZ2luYXRpb24uc3dpcGVyLXBhZ2luYXRpb24taGlkZGVue29wYWNpdHk6MH0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLC5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9ue2JvdHRvbToxMHB4O2xlZnQ6MDt3aWR0aDoxMDAlfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWN7b3ZlcmZsb3c6aGlkZGVuO2ZvbnQtc2l6ZTowfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMzMpOy1tcy10cmFuc2Zvcm06c2NhbGUoLjMzKTt0cmFuc2Zvcm06c2NhbGUoLjMzKTtwb3NpdGlvbjpyZWxhdGl2ZX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbWFpbnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTstbXMtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLXByZXZ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjY2KTstbXMtdHJhbnNmb3JtOnNjYWxlKC42Nik7dHJhbnNmb3JtOnNjYWxlKC42Nil9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1wcmV2LXByZXZ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjMzKTstbXMtdHJhbnNmb3JtOnNjYWxlKC4zMyk7dHJhbnNmb3JtOnNjYWxlKC4zMyl9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC42Nik7LW1zLXRyYW5zZm9ybTpzY2FsZSguNjYpO3RyYW5zZm9ybTpzY2FsZSguNjYpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbmV4dC1uZXh0ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4zMyk7LW1zLXRyYW5zZm9ybTpzY2FsZSguMzMpO3RyYW5zZm9ybTpzY2FsZSguMzMpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7d2lkdGg6OHB4O2hlaWdodDo4cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyLXJhZGl1czoxMDAlO2JhY2tncm91bmQ6IzAwMDtvcGFjaXR5Oi4yfWJ1dHRvbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7Ym9yZGVyOm5vbmU7bWFyZ2luOjA7cGFkZGluZzowOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9LnN3aXBlci1wYWdpbmF0aW9uLWNsaWNrYWJsZSAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e2N1cnNvcjpwb2ludGVyfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZle29wYWNpdHk6MTtiYWNrZ3JvdW5kOiMwMDdhZmZ9LnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHN7cmlnaHQ6MTBweDt0b3A6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTUwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNTAlLDApfS5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7bWFyZ2luOjZweCAwO2Rpc3BsYXk6YmxvY2t9LnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWlje3RvcDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7d2lkdGg6OHB4fS5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e2Rpc3BsYXk6aW5saW5lLWJsb2NrOy13ZWJraXQtdHJhbnNpdGlvbjp0b3AgLjJzLC13ZWJraXQtdHJhbnNmb3JtIC4yczt0cmFuc2l0aW9uOnRvcCAuMnMsLXdlYmtpdC10cmFuc2Zvcm0gLjJzOy1vLXRyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgdG9wO3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyx0b3AgLjJzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyx0b3AgLjJzLC13ZWJraXQtdHJhbnNmb3JtIC4yc30uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7bWFyZ2luOjAgNHB4fS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWlje2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3doaXRlLXNwYWNlOm5vd3JhcH0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0ey13ZWJraXQtdHJhbnNpdGlvbjpsZWZ0IC4ycywtd2Via2l0LXRyYW5zZm9ybSAuMnM7dHJhbnNpdGlvbjpsZWZ0IC4ycywtd2Via2l0LXRyYW5zZm9ybSAuMnM7LW8tdHJhbnNpdGlvbjouMnMgdHJhbnNmb3JtLC4ycyBsZWZ0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyxsZWZ0IC4yczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMsbGVmdCAuMnMsLXdlYmtpdC10cmFuc2Zvcm0gLjJzfS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwuc3dpcGVyLWNvbnRhaW5lci1ydGw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0ey13ZWJraXQtdHJhbnNpdGlvbjpyaWdodCAuMnMsLXdlYmtpdC10cmFuc2Zvcm0gLjJzO3RyYW5zaXRpb246cmlnaHQgLjJzLC13ZWJraXQtdHJhbnNmb3JtIC4yczstby10cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm0sLjJzIHJpZ2h0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyxyaWdodCAuMnM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzLHJpZ2h0IC4ycywtd2Via2l0LXRyYW5zZm9ybSAuMnN9LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMjUpO3Bvc2l0aW9uOmFic29sdXRlfS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbHtiYWNrZ3JvdW5kOiMwMDdhZmY7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7LW1zLXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wOy1tcy10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3B9LnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbHstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wOy1tcy10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcDt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcH0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhciwuc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGV7d2lkdGg6MTAwJTtoZWlnaHQ6NHB4O2xlZnQ6MDt0b3A6MH0uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsPi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1vcHBvc2l0ZSwuc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXJ7d2lkdGg6NHB4O2hlaWdodDoxMDAlO2xlZnQ6MDt0b3A6MH0uc3dpcGVyLXBhZ2luYXRpb24td2hpdGUgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmV7YmFja2dyb3VuZDojZmZmfS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi13aGl0ZXtiYWNrZ3JvdW5kOmhzbGEoMCwwJSwxMDAlLC4yNSl9LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLXdoaXRlIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1maWxse2JhY2tncm91bmQ6I2ZmZn0uc3dpcGVyLXBhZ2luYXRpb24tYmxhY2sgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmV7YmFja2dyb3VuZDojMDAwfS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1ibGFja3tiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjI1KX0uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tYmxhY2sgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGx7YmFja2dyb3VuZDojMDAwfS5zd2lwZXItcGFnaW5hdGlvbi1sb2Nre2Rpc3BsYXk6bm9uZX0uc3dpcGVyLXNjcm9sbGJhcntib3JkZXItcmFkaXVzOjEwcHg7cG9zaXRpb246cmVsYXRpdmU7LW1zLXRvdWNoLWFjdGlvbjpub25lO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMSl9LnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXNjcm9sbGJhcntwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjElO2JvdHRvbTozcHg7ei1pbmRleDo1MDtoZWlnaHQ6NXB4O3dpZHRoOjk4JX0uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXNjcm9sbGJhcntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDozcHg7dG9wOjElO3otaW5kZXg6NTA7d2lkdGg6NXB4O2hlaWdodDo5OCV9LnN3aXBlci1zY3JvbGxiYXItZHJhZ3toZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuNSk7Ym9yZGVyLXJhZGl1czoxMHB4O2xlZnQ6MDt0b3A6MH0uc3dpcGVyLXNjcm9sbGJhci1jdXJzb3ItZHJhZ3tjdXJzb3I6bW92ZX0uc3dpcGVyLXNjcm9sbGJhci1sb2Nre2Rpc3BsYXk6bm9uZX0uc3dpcGVyLXpvb20tY29udGFpbmVye3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstd2Via2l0LWp1c3RpZnktY29udGVudDpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LXdlYmtpdC1hbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjt0ZXh0LWFsaWduOmNlbnRlcn0uc3dpcGVyLXpvb20tY29udGFpbmVyPmNhbnZhcywuc3dpcGVyLXpvb20tY29udGFpbmVyPmltZywuc3dpcGVyLXpvb20tY29udGFpbmVyPnN2Z3ttYXgtd2lkdGg6MTAwJTttYXgtaGVpZ2h0OjEwMCU7LW8tb2JqZWN0LWZpdDpjb250YWluO29iamVjdC1maXQ6Y29udGFpbn0uc3dpcGVyLXNsaWRlLXpvb21lZHtjdXJzb3I6bW92ZX0uc3dpcGVyLWxhenktcHJlbG9hZGVye3dpZHRoOjQycHg7aGVpZ2h0OjQycHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7dG9wOjUwJTttYXJnaW4tbGVmdDotMjFweDttYXJnaW4tdG9wOi0yMXB4O3otaW5kZXg6MTA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJTstbXMtdHJhbnNmb3JtLW9yaWdpbjo1MCU7dHJhbnNmb3JtLW9yaWdpbjo1MCU7LXdlYmtpdC1hbmltYXRpb246c3dpcGVyLXByZWxvYWRlci1zcGluIDFzIHN0ZXBzKDEyLGVuZCkgaW5maW5pdGU7YW5pbWF0aW9uOnN3aXBlci1wcmVsb2FkZXItc3BpbiAxcyBzdGVwcygxMixlbmQpIGluZmluaXRlfS5zd2lwZXItbGF6eS1wcmVsb2FkZXI6YWZ0ZXJ7ZGlzcGxheTpibG9jaztjb250ZW50OlxcXCJcXFwiO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHZpZXdCb3glM0RcXCcwJTIwMCUyMDEyMCUyMDEyMFxcJyUyMHhtbG5zJTNEXFwnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnXFwnJTIweG1sbnMlM0F4bGluayUzRFxcJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMTk5OSUyRnhsaW5rXFwnJTNFJTNDZGVmcyUzRSUzQ2xpbmUlMjBpZCUzRFxcJ2xcXCclMjB4MSUzRFxcJzYwXFwnJTIweDIlM0RcXCc2MFxcJyUyMHkxJTNEXFwnN1xcJyUyMHkyJTNEXFwnMjdcXCclMjBzdHJva2UlM0RcXCclMjM2YzZjNmNcXCclMjBzdHJva2Utd2lkdGglM0RcXCcxMVxcJyUyMHN0cm9rZS1saW5lY2FwJTNEXFwncm91bmRcXCclMkYlM0UlM0MlMkZkZWZzJTNFJTNDZyUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRFxcJyUyM2xcXCclMjBvcGFjaXR5JTNEXFwnLjI3XFwnJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEXFwnJTIzbFxcJyUyMG9wYWNpdHklM0RcXCcuMjdcXCclMjB0cmFuc2Zvcm0lM0RcXCdyb3RhdGUoMzAlMjA2MCUyQzYwKVxcJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRFxcJyUyM2xcXCclMjBvcGFjaXR5JTNEXFwnLjI3XFwnJTIwdHJhbnNmb3JtJTNEXFwncm90YXRlKDYwJTIwNjAlMkM2MClcXCclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0RcXCclMjNsXFwnJTIwb3BhY2l0eSUzRFxcJy4yN1xcJyUyMHRyYW5zZm9ybSUzRFxcJ3JvdGF0ZSg5MCUyMDYwJTJDNjApXFwnJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEXFwnJTIzbFxcJyUyMG9wYWNpdHklM0RcXCcuMjdcXCclMjB0cmFuc2Zvcm0lM0RcXCdyb3RhdGUoMTIwJTIwNjAlMkM2MClcXCclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0RcXCclMjNsXFwnJTIwb3BhY2l0eSUzRFxcJy4yN1xcJyUyMHRyYW5zZm9ybSUzRFxcJ3JvdGF0ZSgxNTAlMjA2MCUyQzYwKVxcJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRFxcJyUyM2xcXCclMjBvcGFjaXR5JTNEXFwnLjM3XFwnJTIwdHJhbnNmb3JtJTNEXFwncm90YXRlKDE4MCUyMDYwJTJDNjApXFwnJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEXFwnJTIzbFxcJyUyMG9wYWNpdHklM0RcXCcuNDZcXCclMjB0cmFuc2Zvcm0lM0RcXCdyb3RhdGUoMjEwJTIwNjAlMkM2MClcXCclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0RcXCclMjNsXFwnJTIwb3BhY2l0eSUzRFxcJy41NlxcJyUyMHRyYW5zZm9ybSUzRFxcJ3JvdGF0ZSgyNDAlMjA2MCUyQzYwKVxcJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRFxcJyUyM2xcXCclMjBvcGFjaXR5JTNEXFwnLjY2XFwnJTIwdHJhbnNmb3JtJTNEXFwncm90YXRlKDI3MCUyMDYwJTJDNjApXFwnJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEXFwnJTIzbFxcJyUyMG9wYWNpdHklM0RcXCcuNzVcXCclMjB0cmFuc2Zvcm0lM0RcXCdyb3RhdGUoMzAwJTIwNjAlMkM2MClcXCclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0RcXCclMjNsXFwnJTIwb3BhY2l0eSUzRFxcJy44NVxcJyUyMHRyYW5zZm9ybSUzRFxcJ3JvdGF0ZSgzMzAlMjA2MCUyQzYwKVxcJyUyRiUzRSUzQyUyRmclM0UlM0MlMkZzdmclM0VcXFwiKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJTtiYWNrZ3JvdW5kLXNpemU6MTAwJTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXR9LnN3aXBlci1sYXp5LXByZWxvYWRlci13aGl0ZTphZnRlcntiYWNrZ3JvdW5kLWltYWdlOnVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIwdmlld0JveCUzRFxcJzAlMjAwJTIwMTIwJTIwMTIwXFwnJTIweG1sbnMlM0RcXCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmdcXCclMjB4bWxucyUzQXhsaW5rJTNEXFwnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYxOTk5JTJGeGxpbmtcXCclM0UlM0NkZWZzJTNFJTNDbGluZSUyMGlkJTNEXFwnbFxcJyUyMHgxJTNEXFwnNjBcXCclMjB4MiUzRFxcJzYwXFwnJTIweTElM0RcXCc3XFwnJTIweTIlM0RcXCcyN1xcJyUyMHN0cm9rZSUzRFxcJyUyM2ZmZlxcJyUyMHN0cm9rZS13aWR0aCUzRFxcJzExXFwnJTIwc3Ryb2tlLWxpbmVjYXAlM0RcXCdyb3VuZFxcJyUyRiUzRSUzQyUyRmRlZnMlM0UlM0NnJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEXFwnJTIzbFxcJyUyMG9wYWNpdHklM0RcXCcuMjdcXCclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0RcXCclMjNsXFwnJTIwb3BhY2l0eSUzRFxcJy4yN1xcJyUyMHRyYW5zZm9ybSUzRFxcJ3JvdGF0ZSgzMCUyMDYwJTJDNjApXFwnJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEXFwnJTIzbFxcJyUyMG9wYWNpdHklM0RcXCcuMjdcXCclMjB0cmFuc2Zvcm0lM0RcXCdyb3RhdGUoNjAlMjA2MCUyQzYwKVxcJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRFxcJyUyM2xcXCclMjBvcGFjaXR5JTNEXFwnLjI3XFwnJTIwdHJhbnNmb3JtJTNEXFwncm90YXRlKDkwJTIwNjAlMkM2MClcXCclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0RcXCclMjNsXFwnJTIwb3BhY2l0eSUzRFxcJy4yN1xcJyUyMHRyYW5zZm9ybSUzRFxcJ3JvdGF0ZSgxMjAlMjA2MCUyQzYwKVxcJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRFxcJyUyM2xcXCclMjBvcGFjaXR5JTNEXFwnLjI3XFwnJTIwdHJhbnNmb3JtJTNEXFwncm90YXRlKDE1MCUyMDYwJTJDNjApXFwnJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEXFwnJTIzbFxcJyUyMG9wYWNpdHklM0RcXCcuMzdcXCclMjB0cmFuc2Zvcm0lM0RcXCdyb3RhdGUoMTgwJTIwNjAlMkM2MClcXCclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0RcXCclMjNsXFwnJTIwb3BhY2l0eSUzRFxcJy40NlxcJyUyMHRyYW5zZm9ybSUzRFxcJ3JvdGF0ZSgyMTAlMjA2MCUyQzYwKVxcJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRFxcJyUyM2xcXCclMjBvcGFjaXR5JTNEXFwnLjU2XFwnJTIwdHJhbnNmb3JtJTNEXFwncm90YXRlKDI0MCUyMDYwJTJDNjApXFwnJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEXFwnJTIzbFxcJyUyMG9wYWNpdHklM0RcXCcuNjZcXCclMjB0cmFuc2Zvcm0lM0RcXCdyb3RhdGUoMjcwJTIwNjAlMkM2MClcXCclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0RcXCclMjNsXFwnJTIwb3BhY2l0eSUzRFxcJy43NVxcJyUyMHRyYW5zZm9ybSUzRFxcJ3JvdGF0ZSgzMDAlMjA2MCUyQzYwKVxcJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRFxcJyUyM2xcXCclMjBvcGFjaXR5JTNEXFwnLjg1XFwnJTIwdHJhbnNmb3JtJTNEXFwncm90YXRlKDMzMCUyMDYwJTJDNjApXFwnJTJGJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRVxcXCIpfVxcQC13ZWJraXQta2V5ZnJhbWVzIHN3aXBlci1wcmVsb2FkZXItc3Bpbnt0b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX1cXEBrZXlmcmFtZXMgc3dpcGVyLXByZWxvYWRlci1zcGlue3Rvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fS5zd2lwZXItY29udGFpbmVyIC5zd2lwZXItbm90aWZpY2F0aW9ue3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDtwb2ludGVyLWV2ZW50czpub25lO29wYWNpdHk6MDt6LWluZGV4Oi0xMDAwfS5zd2lwZXItY29udGFpbmVyLWZhZGUuc3dpcGVyLWNvbnRhaW5lci1mcmVlLW1vZGUgLnN3aXBlci1zbGlkZXstd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0Oy1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0fS5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZXtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5Oy1vLXRyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eTt0cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHl9LnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGV7cG9pbnRlci1ldmVudHM6bm9uZX0uc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGUtYWN0aXZlLC5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZS1hY3RpdmUgLnN3aXBlci1zbGlkZS1hY3RpdmV7cG9pbnRlci1ldmVudHM6YXV0b30uc3dpcGVyLWNvbnRhaW5lci1jdWJle292ZXJmbG93OnZpc2libGV9LnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmU7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjt6LWluZGV4OjE7dmlzaWJpbGl0eTpoaWRkZW47LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgMDstbXMtdHJhbnNmb3JtLW9yaWdpbjowIDA7dHJhbnNmb3JtLW9yaWdpbjowIDA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZXtwb2ludGVyLWV2ZW50czpub25lfS5zd2lwZXItY29udGFpbmVyLWN1YmUuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1zbGlkZXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MTAwJSAwOy1tcy10cmFuc2Zvcm0tb3JpZ2luOjEwMCUgMDt0cmFuc2Zvcm0tb3JpZ2luOjEwMCUgMH0uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlLC5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUgLnN3aXBlci1zbGlkZS1hY3RpdmV7cG9pbnRlci1ldmVudHM6YXV0b30uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlLC5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1uZXh0LC5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1uZXh0Ky5zd2lwZXItc2xpZGUsLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXByZXZ7cG9pbnRlci1ldmVudHM6YXV0bzt2aXNpYmlsaXR5OnZpc2libGV9LnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LC5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3B7ei1pbmRleDowOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW59LnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLWN1YmUtc2hhZG93e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDtib3R0b206MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQ6IzAwMDtvcGFjaXR5Oi42Oy13ZWJraXQtZmlsdGVyOmJsdXIoNTBweCk7ZmlsdGVyOmJsdXIoNTBweCk7ei1pbmRleDowfS5zd2lwZXItY29udGFpbmVyLWZsaXB7b3ZlcmZsb3c6dmlzaWJsZX0uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGV7cG9pbnRlci1ldmVudHM6bm9uZTstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO3otaW5kZXg6MX0uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZXtwb2ludGVyLWV2ZW50czpub25lfS5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1hY3RpdmUsLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLWFjdGl2ZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZXtwb2ludGVyLWV2ZW50czphdXRvfS5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLC5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCwuc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LC5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9we3otaW5kZXg6MDstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVufS5zd2lwZXItY29udGFpbmVyLWNvdmVyZmxvdyAuc3dpcGVyLXdyYXBwZXJ7LW1zLXBlcnNwZWN0aXZlOjEyMDBweH1pb24tc2xpZGVze2Rpc3BsYXk6YmxvY2s7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7YmFja2dyb3VuZDp2YXIoLS1idWxsZXQtYmFja2dyb3VuZCl9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmUpfS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhcntiYWNrZ3JvdW5kOnZhcigtLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kKX0uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGx7YmFja2dyb3VuZDp2YXIoLS1wcm9ncmVzcy1iYXItYmFja2dyb3VuZC1hY3RpdmUpfS5zd2lwZXItc2Nyb2xsYmFye2JhY2tncm91bmQ6dmFyKC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kKX0uc3dpcGVyLXNjcm9sbGJhci1kcmFne2JhY2tncm91bmQ6dmFyKC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZSl9LnNsaWRlcy1tZHstLWJ1bGxldC1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zdGVwLTIwMCwjY2NjKTstLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTstLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwwLjI1KTstLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSwjMzE3MWUwKTstLXNjcm9sbC1iYXItYmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksMC4xKTstLXNjcm9sbC1iYXItYmFja2dyb3VuZC1hY3RpdmU6cmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLDAuNSl9XCI7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbnZhciB3YWl0Rm9yU2xpZGVzID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKEFycmF5LmZyb20oZWwucXVlcnlTZWxlY3RvckFsbCgnaW9uLXNsaWRlJykpLm1hcChmdW5jdGlvbiAocykgeyByZXR1cm4gcy5jb21wb25lbnRPblJlYWR5KCk7IH0pKTtcbn07XG5leHBvcnQgeyBTbGlkZSBhcyBpb25fc2xpZGUsIFNsaWRlcyBhcyBpb25fc2xpZGVzIH07XG4iXSwic291cmNlUm9vdCI6IiJ9