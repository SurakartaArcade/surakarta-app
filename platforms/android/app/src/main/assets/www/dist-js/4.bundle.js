(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/index-69c37885.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/index-69c37885.js ***!
  \*****************************************************************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
var transitionEnd = function (el, callback) {
    var unRegTrans;
    var opts = { passive: true };
    var unregister = function () {
        if (unRegTrans) {
            unRegTrans();
        }
    };
    var onTransitionEnd = function (ev) {
        if (el === ev.target) {
            unregister();
            callback(ev);
        }
    };
    if (el) {
        el.addEventListener('webkitTransitionEnd', onTransitionEnd, opts);
        el.addEventListener('transitionend', onTransitionEnd, opts);
        unRegTrans = function () {
            el.removeEventListener('webkitTransitionEnd', onTransitionEnd, opts);
            el.removeEventListener('transitionend', onTransitionEnd, opts);
        };
    }
    return unregister;
};
var CSS_VALUE_REGEX = /(^-?\d*\.?\d*)(.*)/;
var DURATION_MIN = 32;
var TRANSITION_END_FALLBACK_PADDING_MS = 400;
var TRANSFORM_PROPS = {
    'translateX': 1,
    'translateY': 1,
    'translateZ': 1,
    'scale': 1,
    'scaleX': 1,
    'scaleY': 1,
    'scaleZ': 1,
    'rotate': 1,
    'rotateX': 1,
    'rotateY': 1,
    'rotateZ': 1,
    'skewX': 1,
    'skewY': 1,
    'perspective': 1
};
var win = typeof window !== 'undefined' ? window : {};
var raf = win.requestAnimationFrame
    ? win.requestAnimationFrame.bind(win)
    : function (f) { return f(Date.now()); };
var Animator = /** @class */ (function () {
    function Animator() {
        this._hasDur = false;
        this._hasTweenEffect = false;
        this._isAsync = false;
        this._isReverse = false;
        this._destroyed = false;
        this.hasChildren = false;
        this.isPlaying = false;
        this.hasCompleted = false;
    }
    Animator.prototype.addElement = function (el) {
        if (el != null) {
            if (el.length > 0) {
                for (var i = 0; i < el.length; i++) {
                    this._addEl(el[i]);
                }
            }
            else {
                this._addEl(el);
            }
        }
        return this;
    };
    /**
     * NO DOM
     */
    Animator.prototype._addEl = function (el) {
        if (el.nodeType === 1) {
            (this._elements = this._elements || []).push(el);
        }
    };
    /**
     * Add a child animation to this animation.
     */
    Animator.prototype.add = function (childAnimation) {
        childAnimation.parent = this;
        this.hasChildren = true;
        (this._childAnimations = this._childAnimations || []).push(childAnimation);
        return this;
    };
    /**
     * Get the duration of this animation. If this animation does
     * not have a duration, then it'll get the duration from its parent.
     */
    Animator.prototype.getDuration = function (opts) {
        if (opts && opts.duration !== undefined) {
            return opts.duration;
        }
        else if (this._duration !== undefined) {
            return this._duration;
        }
        else if (this.parent) {
            return this.parent.getDuration();
        }
        return 0;
    };
    /**
     * Returns if the animation is a root one.
     */
    Animator.prototype.isRoot = function () {
        return !this.parent;
    };
    /**
     * Set the duration for this animation.
     */
    Animator.prototype.duration = function (milliseconds) {
        this._duration = milliseconds;
        return this;
    };
    /**
     * Get the easing of this animation. If this animation does
     * not have an easing, then it'll get the easing from its parent.
     */
    Animator.prototype.getEasing = function () {
        if (this._isReverse && this._reversedEasingName !== undefined) {
            return this._reversedEasingName;
        }
        return this._easingName !== undefined ? this._easingName : (this.parent && this.parent.getEasing()) || null;
    };
    /**
     * Set the easing for this animation.
     */
    Animator.prototype.easing = function (name) {
        this._easingName = name;
        return this;
    };
    /**
     * Set the easing for this reversed animation.
     */
    Animator.prototype.easingReverse = function (name) {
        this._reversedEasingName = name;
        return this;
    };
    /**
     * Add the "from" value for a specific property.
     */
    Animator.prototype.from = function (prop, val) {
        this._addProp('from', prop, val);
        return this;
    };
    /**
     * Add the "to" value for a specific property.
     */
    Animator.prototype.to = function (prop, val, clearProperyAfterTransition) {
        if (clearProperyAfterTransition === void 0) { clearProperyAfterTransition = false; }
        var fx = this._addProp('to', prop, val);
        if (clearProperyAfterTransition) {
            // if this effect is a transform then clear the transform effect
            // otherwise just clear the actual property
            this.afterClearStyles(fx.trans ? ['transform', '-webkit-transform'] : [prop]);
        }
        return this;
    };
    /**
     * Shortcut to add both the "from" and "to" for the same property.
     */
    Animator.prototype.fromTo = function (prop, fromVal, toVal, clearProperyAfterTransition) {
        return this.from(prop, fromVal).to(prop, toVal, clearProperyAfterTransition);
    };
    /**
     * NO DOM
     */
    Animator.prototype._getProp = function (name) {
        if (this._fxProperties) {
            return this._fxProperties.find(function (prop) { return prop.effectName === name; });
        }
        return undefined;
    };
    Animator.prototype._addProp = function (state, prop, val) {
        var fxProp = this._getProp(prop);
        if (!fxProp) {
            // first time we've see this EffectProperty
            var shouldTrans = (TRANSFORM_PROPS[prop] === 1);
            fxProp = {
                effectName: prop,
                trans: shouldTrans,
                // add the will-change property for transforms or opacity
                wc: (shouldTrans ? 'transform' : prop)
            };
            (this._fxProperties = this._fxProperties || []).push(fxProp);
        }
        // add from/to EffectState to the EffectProperty
        var fxState = {
            val: val,
            num: 0,
            effectUnit: '',
        };
        fxProp[state] = fxState;
        if (typeof val === 'string' && val.indexOf(' ') < 0) {
            var r = val.match(CSS_VALUE_REGEX);
            if (r) {
                var num = parseFloat(r[1]);
                if (!isNaN(num)) {
                    fxState.num = num;
                }
                fxState.effectUnit = (r[0] !== r[2] ? r[2] : '');
            }
        }
        else if (typeof val === 'number') {
            fxState.num = val;
        }
        return fxProp;
    };
    /**
     * Add CSS class to this animation's elements
     * before the animation begins.
     */
    Animator.prototype.beforeAddClass = function (className) {
        (this._beforeAddClasses = this._beforeAddClasses || []).push(className);
        return this;
    };
    /**
     * Remove CSS class from this animation's elements
     * before the animation begins.
     */
    Animator.prototype.beforeRemoveClass = function (className) {
        (this._beforeRemoveClasses = this._beforeRemoveClasses || []).push(className);
        return this;
    };
    /**
     * Set CSS inline styles to this animation's elements
     * before the animation begins.
     */
    Animator.prototype.beforeStyles = function (styles) {
        this._beforeStyles = styles;
        return this;
    };
    /**
     * Clear CSS inline styles from this animation's elements
     * before the animation begins.
     */
    Animator.prototype.beforeClearStyles = function (propertyNames) {
        this._beforeStyles = this._beforeStyles || {};
        for (var _i = 0, propertyNames_1 = propertyNames; _i < propertyNames_1.length; _i++) {
            var prop = propertyNames_1[_i];
            this._beforeStyles[prop] = '';
        }
        return this;
    };
    /**
     * Add a function which contains DOM reads, which will run
     * before the animation begins.
     */
    Animator.prototype.beforeAddRead = function (domReadFn) {
        (this._readCallbacks = this._readCallbacks || []).push(domReadFn);
        return this;
    };
    /**
     * Add a function which contains DOM writes, which will run
     * before the animation begins.
     */
    Animator.prototype.beforeAddWrite = function (domWriteFn) {
        (this._writeCallbacks = this._writeCallbacks || []).push(domWriteFn);
        return this;
    };
    /**
     * Add CSS class to this animation's elements
     * after the animation finishes.
     */
    Animator.prototype.afterAddClass = function (className) {
        (this._afterAddClasses = this._afterAddClasses || []).push(className);
        return this;
    };
    /**
     * Remove CSS class from this animation's elements
     * after the animation finishes.
     */
    Animator.prototype.afterRemoveClass = function (className) {
        (this._afterRemoveClasses = this._afterRemoveClasses || []).push(className);
        return this;
    };
    /**
     * Set CSS inline styles to this animation's elements
     * after the animation finishes.
     */
    Animator.prototype.afterStyles = function (styles) {
        this._afterStyles = styles;
        return this;
    };
    /**
     * Clear CSS inline styles from this animation's elements
     * after the animation finishes.
     */
    Animator.prototype.afterClearStyles = function (propertyNames) {
        this._afterStyles = this._afterStyles || {};
        for (var _i = 0, propertyNames_2 = propertyNames; _i < propertyNames_2.length; _i++) {
            var prop = propertyNames_2[_i];
            this._afterStyles[prop] = '';
        }
        return this;
    };
    /**
     * Play the animation.
     */
    Animator.prototype.play = function (opts) {
        var _this = this;
        // If the animation was already invalidated (it did finish), do nothing
        if (this._destroyed) {
            return;
        }
        // this is the top level animation and is in full control
        // of when the async play() should actually kick off
        // if there is no duration then it'll set the TO property immediately
        // if there is a duration, then it'll stage all animations at the
        // FROM property and transition duration, wait a few frames, then
        // kick off the animation by setting the TO property for each animation
        this._isAsync = this._hasDuration(opts);
        // ensure all past transition end events have been cleared
        this._clearAsync();
        // recursively kicks off the correct progress step for each child animation
        // ******** DOM WRITE ****************
        this._playInit(opts);
        // doubling up RAFs since this animation was probably triggered
        // from an input event, and just having one RAF would have this code
        // run within the same frame as the triggering input event, and the
        // input event probably already did way too much work for one frame
        raf(function () {
            raf(function () {
                _this._playDomInspect(opts);
            });
        });
    };
    Animator.prototype.playAsync = function (opts) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.onFinish(resolve, { oneTimeCallback: true, clearExistingCallbacks: true });
            _this.play(opts);
            return _this;
        });
    };
    Animator.prototype.playSync = function () {
        // If the animation was already invalidated (it did finish), do nothing
        if (!this._destroyed) {
            var opts = { duration: 0 };
            this._isAsync = false;
            this._clearAsync();
            this._playInit(opts);
            this._playDomInspect(opts);
        }
    };
    /**
     * DOM WRITE
     * RECURSION
     */
    Animator.prototype._playInit = function (opts) {
        // always default that an animation does not tween
        // a tween requires that an Animation class has an element
        // and that it has at least one FROM/TO effect
        // and that the FROM/TO effect can tween numeric values
        this._hasTweenEffect = false;
        this.isPlaying = true;
        this.hasCompleted = false;
        this._hasDur = (this.getDuration(opts) > DURATION_MIN);
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var child = children_1[_i];
                // ******** DOM WRITE ****************
                child._playInit(opts);
            }
        }
        if (this._hasDur) {
            // if there is a duration then we want to start at step 0
            // ******** DOM WRITE ****************
            this._progress(0);
            // add the will-change properties
            // ******** DOM WRITE ****************
            this._willChange(true);
        }
    };
    /**
     * DOM WRITE
     * NO RECURSION
     * ROOT ANIMATION
     */
    Animator.prototype._playDomInspect = function (opts) {
        var _this = this;
        // fire off all the "before" function that have DOM READS in them
        // elements will be in the DOM, however visibily hidden
        // so we can read their dimensions if need be
        // ******** DOM READ ****************
        // ******** DOM WRITE ****************
        this._beforeAnimation();
        // for the root animation only
        // set the async TRANSITION END event
        // and run onFinishes when the transition ends
        var dur = this.getDuration(opts);
        if (this._isAsync) {
            this._asyncEnd(dur, true);
        }
        // ******** DOM WRITE ****************
        this._playProgress(opts);
        if (this._isAsync && !this._destroyed) {
            // this animation has a duration so we need another RAF
            // for the CSS TRANSITION properties to kick in
            raf(function () {
                _this._playToStep(1);
            });
        }
    };
    /**
     * DOM WRITE
     * RECURSION
     */
    Animator.prototype._playProgress = function (opts) {
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_2 = children; _i < children_2.length; _i++) {
                var child = children_2[_i];
                // ******** DOM WRITE ****************
                child._playProgress(opts);
            }
        }
        if (this._hasDur) {
            // set the CSS TRANSITION duration/easing
            // ******** DOM WRITE ****************
            this._setTrans(this.getDuration(opts), false);
        }
        else {
            // this animation does not have a duration, so it should not animate
            // just go straight to the TO properties and call it done
            // ******** DOM WRITE ****************
            this._progress(1);
            // since there was no animation, immediately run the after
            // ******** DOM WRITE ****************
            this._setAfterStyles();
            // this animation has no duration, so it has finished
            // other animations could still be running
            this._didFinish(true);
        }
    };
    /**
     * DOM WRITE
     * RECURSION
     */
    Animator.prototype._playToStep = function (stepValue) {
        if (!this._destroyed) {
            var children = this._childAnimations;
            if (children) {
                for (var _i = 0, children_3 = children; _i < children_3.length; _i++) {
                    var child = children_3[_i];
                    // ******** DOM WRITE ****************
                    child._playToStep(stepValue);
                }
            }
            if (this._hasDur) {
                // browser had some time to render everything in place
                // and the transition duration/easing is set
                // now set the TO properties which will trigger the transition to begin
                // ******** DOM WRITE ****************
                this._progress(stepValue);
            }
        }
    };
    /**
     * DOM WRITE
     * NO RECURSION
     * ROOT ANIMATION
     */
    Animator.prototype._asyncEnd = function (dur, shouldComplete) {
        var self = this;
        var onTransitionEnd = function () {
            // congrats! a successful transition completed!
            // ensure transition end events and timeouts have been cleared
            self._clearAsync();
            // ******** DOM WRITE ****************
            self._playEnd();
            // transition finished
            self._didFinishAll(shouldComplete, true, false);
        };
        var onTransitionFallback = function () {
            // oh noz! the transition end event didn't fire in time!
            // instead the fallback timer when first
            // if all goes well this fallback should never fire
            // clear the other async end events from firing
            self._timerId = undefined;
            self._clearAsync();
            // set the after styles
            // ******** DOM WRITE ****************
            self._playEnd(shouldComplete ? 1 : 0);
            // transition finished
            self._didFinishAll(shouldComplete, true, false);
        };
        // set the TRANSITION END event on one of the transition elements
        self._unregisterTrnsEnd = transitionEnd(self._transEl(), onTransitionEnd);
        // set a fallback timeout if the transition end event never fires, or is too slow
        // transition end fallback: (animation duration + XXms)
        self._timerId = setTimeout(onTransitionFallback, (dur + TRANSITION_END_FALLBACK_PADDING_MS));
    };
    /**
     * DOM WRITE
     * RECURSION
     */
    Animator.prototype._playEnd = function (stepValue) {
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_4 = children; _i < children_4.length; _i++) {
                var child = children_4[_i];
                // ******** DOM WRITE ****************
                child._playEnd(stepValue);
            }
        }
        if (this._hasDur) {
            if (stepValue !== undefined) {
                // too late to have a smooth animation, just finish it
                // ******** DOM WRITE ****************
                this._setTrans(0, true);
                // ensure the ending progress step gets rendered
                // ******** DOM WRITE ****************
                this._progress(stepValue);
            }
            // set the after styles
            // ******** DOM WRITE ****************
            this._setAfterStyles();
            // remove the will-change properties
            // ******** DOM WRITE ****************
            this._willChange(false);
        }
    };
    /**
     * NO DOM
     * RECURSION
     */
    Animator.prototype._hasDuration = function (opts) {
        if (this.getDuration(opts) > DURATION_MIN) {
            return true;
        }
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_5 = children; _i < children_5.length; _i++) {
                var child = children_5[_i];
                if (child._hasDuration(opts)) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * NO DOM
     * RECURSION
     */
    Animator.prototype._hasDomReads = function () {
        if (this._readCallbacks && this._readCallbacks.length > 0) {
            return true;
        }
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_6 = children; _i < children_6.length; _i++) {
                var child = children_6[_i];
                if (child._hasDomReads()) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * Immediately stop at the end of the animation.
     */
    Animator.prototype.stop = function (stepValue) {
        if (stepValue === void 0) { stepValue = 1; }
        // ensure all past transition end events have been cleared
        this._clearAsync();
        this._hasDur = true;
        this._playEnd(stepValue);
    };
    /**
     * NO DOM
     * NO RECURSION
     */
    Animator.prototype._clearAsync = function () {
        if (this._unregisterTrnsEnd) {
            this._unregisterTrnsEnd();
        }
        if (this._timerId) {
            clearTimeout(this._timerId);
        }
        this._timerId = this._unregisterTrnsEnd = undefined;
    };
    /**
     * DOM WRITE
     * NO RECURSION
     */
    Animator.prototype._progress = function (stepValue) {
        // bread 'n butter
        var val;
        var elements = this._elements;
        var effects = this._fxProperties;
        if (!elements || elements.length === 0 || !effects || this._destroyed) {
            return;
        }
        // flip the number if we're going in reverse
        if (this._isReverse) {
            stepValue = 1 - stepValue;
        }
        var i = 0;
        var j = 0;
        var finalTransform = '';
        var fx;
        for (i = 0; i < effects.length; i++) {
            fx = effects[i];
            if (fx.from && fx.to) {
                var fromNum = fx.from.num;
                var toNum = fx.to.num;
                var tweenEffect = (fromNum !== toNum);
                if (tweenEffect) {
                    this._hasTweenEffect = true;
                }
                if (stepValue === 0) {
                    // FROM
                    val = fx.from.val;
                }
                else if (stepValue === 1) {
                    // TO
                    val = fx.to.val;
                }
                else if (tweenEffect) {
                    // EVERYTHING IN BETWEEN
                    var valNum = (((toNum - fromNum) * stepValue) + fromNum);
                    var unit = fx.to.effectUnit;
                    val = valNum + unit;
                }
                if (val !== null) {
                    var prop = fx.effectName;
                    if (fx.trans) {
                        finalTransform += prop + '(' + val + ') ';
                    }
                    else {
                        for (j = 0; j < elements.length; j++) {
                            // ******** DOM WRITE ****************
                            elements[j].style.setProperty(prop, val);
                        }
                    }
                }
            }
        }
        // place all transforms on the same property
        if (finalTransform.length > 0) {
            if (!this._isReverse && stepValue !== 1 || this._isReverse && stepValue !== 0) {
                finalTransform += 'translateZ(0px)';
            }
            for (i = 0; i < elements.length; i++) {
                // ******** DOM WRITE ****************
                elements[i].style.setProperty('transform', finalTransform);
                elements[i].style.setProperty('-webkit-transform', finalTransform);
            }
        }
    };
    /**
     * DOM WRITE
     * NO RECURSION
     */
    Animator.prototype._setTrans = function (dur, forcedLinearEasing) {
        // Transition is not enabled if there are not effects
        var elements = this._elements;
        if (!elements || elements.length === 0 || !this._fxProperties) {
            return;
        }
        // set the TRANSITION properties inline on the element
        var easing = (forcedLinearEasing ? 'linear' : this.getEasing());
        var durString = dur + 'ms';
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var style = elements_1[_i].style;
            if (dur > 0) {
                // ******** DOM WRITE ****************
                style.transitionDuration = durString;
                // each animation can have a different easing
                if (easing !== null) {
                    // ******** DOM WRITE ****************
                    style.transitionTimingFunction = easing;
                }
            }
            else {
                style.transitionDuration = '0';
            }
        }
    };
    /**
     * DOM READ
     * DOM WRITE
     * RECURSION
     */
    Animator.prototype._beforeAnimation = function () {
        // fire off all the "before" function that have DOM READS in them
        // elements will be in the DOM, however visibily hidden
        // so we can read their dimensions if need be
        // ******** DOM READ ****************
        this._fireBeforeReadFunc();
        // ******** DOM READS ABOVE / DOM WRITES BELOW ****************
        // fire off all the "before" function that have DOM WRITES in them
        // ******** DOM WRITE ****************
        this._fireBeforeWriteFunc();
        // stage all of the before css classes and inline styles
        // ******** DOM WRITE ****************
        this._setBeforeStyles();
    };
    /**
     * DOM WRITE
     * RECURSION
     */
    Animator.prototype._setBeforeStyles = function () {
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_7 = children; _i < children_7.length; _i++) {
                var child = children_7[_i];
                child._setBeforeStyles();
            }
        }
        var elements = this._elements;
        // before the animations have started
        // only set before styles if animation is not reversed
        if (!elements || elements.length === 0 || this._isReverse) {
            return;
        }
        var addClasses = this._beforeAddClasses;
        var removeClasses = this._beforeRemoveClasses;
        for (var _a = 0, elements_2 = elements; _a < elements_2.length; _a++) {
            var el = elements_2[_a];
            var elementClassList = el.classList;
            // css classes to add before the animation
            if (addClasses) {
                for (var _b = 0, addClasses_1 = addClasses; _b < addClasses_1.length; _b++) {
                    var c = addClasses_1[_b];
                    // ******** DOM WRITE ****************
                    elementClassList.add(c);
                }
            }
            // css classes to remove before the animation
            if (removeClasses) {
                for (var _c = 0, removeClasses_1 = removeClasses; _c < removeClasses_1.length; _c++) {
                    var c = removeClasses_1[_c];
                    // ******** DOM WRITE ****************
                    elementClassList.remove(c);
                }
            }
            // inline styles to add before the animation
            if (this._beforeStyles) {
                for (var _d = 0, _e = Object.entries(this._beforeStyles); _d < _e.length; _d++) {
                    var _f = _e[_d], key = _f[0], value = _f[1];
                    // ******** DOM WRITE ****************
                    el.style.setProperty(key, value);
                }
            }
        }
    };
    /**
     * DOM READ
     * RECURSION
     */
    Animator.prototype._fireBeforeReadFunc = function () {
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_8 = children; _i < children_8.length; _i++) {
                var child = children_8[_i];
                // ******** DOM READ ****************
                child._fireBeforeReadFunc();
            }
        }
        var readFunctions = this._readCallbacks;
        if (readFunctions) {
            for (var _a = 0, readFunctions_1 = readFunctions; _a < readFunctions_1.length; _a++) {
                var callback = readFunctions_1[_a];
                // ******** DOM READ ****************
                callback();
            }
        }
    };
    /**
     * DOM WRITE
     * RECURSION
     */
    Animator.prototype._fireBeforeWriteFunc = function () {
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_9 = children; _i < children_9.length; _i++) {
                var child = children_9[_i];
                // ******** DOM WRITE ****************
                child._fireBeforeWriteFunc();
            }
        }
        var writeFunctions = this._writeCallbacks;
        if (writeFunctions) {
            for (var _a = 0, writeFunctions_1 = writeFunctions; _a < writeFunctions_1.length; _a++) {
                var callback = writeFunctions_1[_a];
                // ******** DOM WRITE ****************
                callback();
            }
        }
    };
    /**
     * DOM WRITE
     */
    Animator.prototype._setAfterStyles = function () {
        var elements = this._elements;
        if (!elements) {
            return;
        }
        for (var _i = 0, elements_3 = elements; _i < elements_3.length; _i++) {
            var el = elements_3[_i];
            var elementClassList = el.classList;
            // remove the transition duration/easing
            // ******** DOM WRITE ****************
            el.style.transitionDuration = el.style.transitionTimingFunction = '';
            if (this._isReverse) {
                // finished in reverse direction
                // css classes that were added before the animation should be removed
                var beforeAddClasses = this._beforeAddClasses;
                if (beforeAddClasses) {
                    for (var _a = 0, beforeAddClasses_1 = beforeAddClasses; _a < beforeAddClasses_1.length; _a++) {
                        var c = beforeAddClasses_1[_a];
                        elementClassList.remove(c);
                    }
                }
                // css classes that were removed before the animation should be added
                var beforeRemoveClasses = this._beforeRemoveClasses;
                if (beforeRemoveClasses) {
                    for (var _b = 0, beforeRemoveClasses_1 = beforeRemoveClasses; _b < beforeRemoveClasses_1.length; _b++) {
                        var c = beforeRemoveClasses_1[_b];
                        elementClassList.add(c);
                    }
                }
                // inline styles that were added before the animation should be removed
                var beforeStyles = this._beforeStyles;
                if (beforeStyles) {
                    for (var _c = 0, _d = Object.keys(beforeStyles); _c < _d.length; _c++) {
                        var propName = _d[_c];
                        // ******** DOM WRITE ****************
                        el.style.removeProperty(propName);
                    }
                }
            }
            else {
                // finished in forward direction
                // css classes to add after the animation
                var afterAddClasses = this._afterAddClasses;
                if (afterAddClasses) {
                    for (var _e = 0, afterAddClasses_1 = afterAddClasses; _e < afterAddClasses_1.length; _e++) {
                        var c = afterAddClasses_1[_e];
                        // ******** DOM WRITE ****************
                        elementClassList.add(c);
                    }
                }
                // css classes to remove after the animation
                var afterRemoveClasses = this._afterRemoveClasses;
                if (afterRemoveClasses) {
                    for (var _f = 0, afterRemoveClasses_1 = afterRemoveClasses; _f < afterRemoveClasses_1.length; _f++) {
                        var c = afterRemoveClasses_1[_f];
                        // ******** DOM WRITE ****************
                        elementClassList.remove(c);
                    }
                }
                // inline styles to add after the animation
                var afterStyles = this._afterStyles;
                if (afterStyles) {
                    for (var _g = 0, _h = Object.entries(afterStyles); _g < _h.length; _g++) {
                        var _j = _h[_g], key = _j[0], value = _j[1];
                        el.style.setProperty(key, value);
                    }
                }
            }
        }
    };
    /**
     * DOM WRITE
     * NO RECURSION
     */
    Animator.prototype._willChange = function (addWillChange) {
        var wc;
        var effects = this._fxProperties;
        var willChange;
        if (addWillChange && effects) {
            wc = [];
            for (var _i = 0, effects_1 = effects; _i < effects_1.length; _i++) {
                var effect = effects_1[_i];
                var propWC = effect.wc;
                if (propWC === 'webkitTransform') {
                    wc.push('transform', '-webkit-transform');
                }
                else if (propWC !== undefined) {
                    wc.push(propWC);
                }
            }
            willChange = wc.join(',');
        }
        else {
            willChange = '';
        }
        var elements = this._elements;
        if (elements) {
            for (var _a = 0, elements_4 = elements; _a < elements_4.length; _a++) {
                var el = elements_4[_a];
                // ******** DOM WRITE ****************
                el.style.setProperty('will-change', willChange);
            }
        }
    };
    /**
     * Start the animation with a user controlled progress.
     */
    Animator.prototype.progressStart = function () {
        // ensure all past transition end events have been cleared
        this._clearAsync();
        // ******** DOM READ/WRITE ****************
        this._beforeAnimation();
        // ******** DOM WRITE ****************
        this._progressStart();
    };
    /**
     * DOM WRITE
     * RECURSION
     */
    Animator.prototype._progressStart = function () {
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_10 = children; _i < children_10.length; _i++) {
                var child = children_10[_i];
                // ******** DOM WRITE ****************
                child._progressStart();
            }
        }
        // force no duration, linear easing
        // ******** DOM WRITE ****************
        this._setTrans(0, true);
        // ******** DOM WRITE ****************
        this._willChange(true);
    };
    /**
     * Set the progress step for this animation.
     * progressStep() is not debounced, so it should not be called faster than 60FPS.
     */
    Animator.prototype.progressStep = function (stepValue) {
        // only update if the last update was more than 16ms ago
        stepValue = Math.min(1, Math.max(0, stepValue));
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_11 = children; _i < children_11.length; _i++) {
                var child = children_11[_i];
                // ******** DOM WRITE ****************
                child.progressStep(stepValue);
            }
        }
        // ******** DOM WRITE ****************
        this._progress(stepValue);
    };
    /**
     * End the progress animation.
     */
    Animator.prototype.progressEnd = function (shouldComplete, currentStepValue, dur) {
        var _this = this;
        if (dur === void 0) { dur = -1; }
        if (this._isReverse) {
            // if the animation is going in reverse then
            // flip the step value: 0 becomes 1, 1 becomes 0
            currentStepValue = 1 - currentStepValue;
        }
        var stepValue = shouldComplete ? 1 : 0;
        var diff = Math.abs(currentStepValue - stepValue);
        if (dur < 0) {
            dur = this._duration || 0;
        }
        else if (diff < 0.05) {
            dur = 0;
        }
        this._isAsync = (dur > 30);
        this._progressEnd(shouldComplete, stepValue, dur, this._isAsync);
        if (this._isAsync) {
            // for the root animation only
            // set the async TRANSITION END event
            // and run onFinishes when the transition ends
            // ******** DOM WRITE ****************
            this._asyncEnd(dur, shouldComplete);
            // this animation has a duration so we need another RAF
            // for the CSS TRANSITION properties to kick in
            if (!this._destroyed) {
                raf(function () {
                    _this._playToStep(stepValue);
                });
            }
        }
    };
    /**
     * DOM WRITE
     * RECURSION
     */
    Animator.prototype._progressEnd = function (shouldComplete, stepValue, dur, isAsync) {
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_12 = children; _i < children_12.length; _i++) {
                var child = children_12[_i];
                // ******** DOM WRITE ****************
                child._progressEnd(shouldComplete, stepValue, dur, isAsync);
            }
        }
        if (!isAsync) {
            // stop immediately
            // set all the animations to their final position
            // ******** DOM WRITE ****************
            this._progress(stepValue);
            this._willChange(false);
            this._setAfterStyles();
            this._didFinish(shouldComplete);
        }
        else {
            // animate it back to it's ending position
            this.isPlaying = true;
            this.hasCompleted = false;
            this._hasDur = true;
            // ******** DOM WRITE ****************
            this._willChange(true);
            this._setTrans(dur, false);
        }
    };
    /**
     * Add a callback to fire when the animation has finished.
     */
    Animator.prototype.onFinish = function (callback, opts) {
        if (opts && opts.clearExistingCallbacks) {
            this._onFinishCallbacks = this._onFinishOneTimeCallbacks = undefined;
        }
        if (opts && opts.oneTimeCallback) {
            this._onFinishOneTimeCallbacks = this._onFinishOneTimeCallbacks || [];
            this._onFinishOneTimeCallbacks.push(callback);
        }
        else {
            this._onFinishCallbacks = this._onFinishCallbacks || [];
            this._onFinishCallbacks.push(callback);
        }
        return this;
    };
    /**
     * NO DOM
     * RECURSION
     */
    Animator.prototype._didFinishAll = function (hasCompleted, finishAsyncAnimations, finishNoDurationAnimations) {
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_13 = children; _i < children_13.length; _i++) {
                var child = children_13[_i];
                child._didFinishAll(hasCompleted, finishAsyncAnimations, finishNoDurationAnimations);
            }
        }
        if (finishAsyncAnimations && this._isAsync || finishNoDurationAnimations && !this._isAsync) {
            this._didFinish(hasCompleted);
        }
    };
    /**
     * NO RECURSION
     */
    Animator.prototype._didFinish = function (hasCompleted) {
        this.isPlaying = false;
        this.hasCompleted = hasCompleted;
        if (this._onFinishCallbacks) {
            // run all finish callbacks
            for (var _i = 0, _a = this._onFinishCallbacks; _i < _a.length; _i++) {
                var callback = _a[_i];
                callback(this);
            }
        }
        if (this._onFinishOneTimeCallbacks) {
            // run all "onetime" finish callbacks
            for (var _b = 0, _c = this._onFinishOneTimeCallbacks; _b < _c.length; _b++) {
                var callback = _c[_b];
                callback(this);
            }
            this._onFinishOneTimeCallbacks.length = 0;
        }
    };
    /**
     * Reverse the animation.
     */
    Animator.prototype.reverse = function (shouldReverse) {
        if (shouldReverse === void 0) { shouldReverse = true; }
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_14 = children; _i < children_14.length; _i++) {
                var child = children_14[_i];
                child.reverse(shouldReverse);
            }
        }
        this._isReverse = !!shouldReverse;
        return this;
    };
    /**
     * Recursively destroy this animation and all child animations.
     */
    Animator.prototype.destroy = function () {
        this._didFinish(false);
        this._destroyed = true;
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_15 = children; _i < children_15.length; _i++) {
                var child = children_15[_i];
                child.destroy();
            }
        }
        this._clearAsync();
        if (this._elements) {
            this._elements.length = 0;
        }
        if (this._readCallbacks) {
            this._readCallbacks.length = 0;
        }
        if (this._writeCallbacks) {
            this._writeCallbacks.length = 0;
        }
        this.parent = undefined;
        if (this._childAnimations) {
            this._childAnimations.length = 0;
        }
        if (this._onFinishCallbacks) {
            this._onFinishCallbacks.length = 0;
        }
        if (this._onFinishOneTimeCallbacks) {
            this._onFinishOneTimeCallbacks.length = 0;
        }
    };
    /**
     * NO DOM
     */
    Animator.prototype._transEl = function () {
        // get the lowest level element that has an Animator
        var children = this._childAnimations;
        if (children) {
            for (var _i = 0, children_16 = children; _i < children_16.length; _i++) {
                var child = children_16[_i];
                var targetEl = child._transEl();
                if (targetEl) {
                    return targetEl;
                }
            }
        }
        return (this._hasTweenEffect &&
            this._hasDur &&
            this._elements !== undefined &&
            this._elements.length > 0 ?
            this._elements[0] : null);
    };
    return Animator;
}());
var create = function (animationBuilder, baseEl, opts) {
    if (animationBuilder) {
        return animationBuilder(Animator, baseEl, opts);
    }
    return Promise.resolve(new Animator());
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2luZGV4LTY5YzM3ODg1LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixlQUFlO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxxQ0FBcUM7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsaUNBQWlDLEVBQUU7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCw2QkFBNkI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELDZCQUE2QjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHNEQUFzRDtBQUMzRjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCx3QkFBd0I7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsd0JBQXdCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELHdCQUF3QjtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHdCQUF3QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHdCQUF3QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsd0JBQXdCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxlQUFlO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHFCQUFxQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHdCQUF3QjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHdCQUF3QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msd0JBQXdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELDBCQUEwQjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSw2QkFBNkI7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsZ0JBQWdCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsd0JBQXdCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELDZCQUE2QjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCx3QkFBd0I7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsOEJBQThCO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msd0JBQXdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLGdDQUFnQztBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRixtQ0FBbUM7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsZ0JBQWdCO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsK0JBQStCO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0Usa0NBQWtDO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsZ0JBQWdCO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsdUJBQXVCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHdCQUF3QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QseUJBQXlCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QseUJBQXlCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFVBQVU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCx5QkFBeUI7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELHlCQUF5QjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxnQkFBZ0I7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLGdCQUFnQjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxzQkFBc0I7QUFDN0Q7QUFDQTtBQUNBLG9EQUFvRCx5QkFBeUI7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELHlCQUF5QjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELHlCQUF5QjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQiIsImZpbGUiOiI0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciB0cmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gKGVsLCBjYWxsYmFjaykge1xuICAgIHZhciB1blJlZ1RyYW5zO1xuICAgIHZhciBvcHRzID0geyBwYXNzaXZlOiB0cnVlIH07XG4gICAgdmFyIHVucmVnaXN0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh1blJlZ1RyYW5zKSB7XG4gICAgICAgICAgICB1blJlZ1RyYW5zKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBvblRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgaWYgKGVsID09PSBldi50YXJnZXQpIHtcbiAgICAgICAgICAgIHVucmVnaXN0ZXIoKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGV2KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGVsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBvblRyYW5zaXRpb25FbmQsIG9wdHMpO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgb25UcmFuc2l0aW9uRW5kLCBvcHRzKTtcbiAgICAgICAgdW5SZWdUcmFucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBvblRyYW5zaXRpb25FbmQsIG9wdHMpO1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIG9uVHJhbnNpdGlvbkVuZCwgb3B0cyk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB1bnJlZ2lzdGVyO1xufTtcbnZhciBDU1NfVkFMVUVfUkVHRVggPSAvKF4tP1xcZCpcXC4/XFxkKikoLiopLztcbnZhciBEVVJBVElPTl9NSU4gPSAzMjtcbnZhciBUUkFOU0lUSU9OX0VORF9GQUxMQkFDS19QQURESU5HX01TID0gNDAwO1xudmFyIFRSQU5TRk9STV9QUk9QUyA9IHtcbiAgICAndHJhbnNsYXRlWCc6IDEsXG4gICAgJ3RyYW5zbGF0ZVknOiAxLFxuICAgICd0cmFuc2xhdGVaJzogMSxcbiAgICAnc2NhbGUnOiAxLFxuICAgICdzY2FsZVgnOiAxLFxuICAgICdzY2FsZVknOiAxLFxuICAgICdzY2FsZVonOiAxLFxuICAgICdyb3RhdGUnOiAxLFxuICAgICdyb3RhdGVYJzogMSxcbiAgICAncm90YXRlWSc6IDEsXG4gICAgJ3JvdGF0ZVonOiAxLFxuICAgICdza2V3WCc6IDEsXG4gICAgJ3NrZXdZJzogMSxcbiAgICAncGVyc3BlY3RpdmUnOiAxXG59O1xudmFyIHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge307XG52YXIgcmFmID0gd2luLnJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgID8gd2luLnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbilcbiAgICA6IGZ1bmN0aW9uIChmKSB7IHJldHVybiBmKERhdGUubm93KCkpOyB9O1xudmFyIEFuaW1hdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFuaW1hdG9yKCkge1xuICAgICAgICB0aGlzLl9oYXNEdXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faGFzVHdlZW5FZmZlY3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNBc3luYyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc1JldmVyc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzQ2hpbGRyZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYXNDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgQW5pbWF0b3IucHJvdG90eXBlLmFkZEVsZW1lbnQgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgaWYgKGVsICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChlbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGRFbChlbFtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkRWwoZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTk8gRE9NXG4gICAgICovXG4gICAgQW5pbWF0b3IucHJvdG90eXBlLl9hZGRFbCA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBpZiAoZWwubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICh0aGlzLl9lbGVtZW50cyA9IHRoaXMuX2VsZW1lbnRzIHx8IFtdKS5wdXNoKGVsKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkIGEgY2hpbGQgYW5pbWF0aW9uIHRvIHRoaXMgYW5pbWF0aW9uLlxuICAgICAqL1xuICAgIEFuaW1hdG9yLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoY2hpbGRBbmltYXRpb24pIHtcbiAgICAgICAgY2hpbGRBbmltYXRpb24ucGFyZW50ID0gdGhpcztcbiAgICAgICAgdGhpcy5oYXNDaGlsZHJlbiA9IHRydWU7XG4gICAgICAgICh0aGlzLl9jaGlsZEFuaW1hdGlvbnMgPSB0aGlzLl9jaGlsZEFuaW1hdGlvbnMgfHwgW10pLnB1c2goY2hpbGRBbmltYXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZHVyYXRpb24gb2YgdGhpcyBhbmltYXRpb24uIElmIHRoaXMgYW5pbWF0aW9uIGRvZXNcbiAgICAgKiBub3QgaGF2ZSBhIGR1cmF0aW9uLCB0aGVuIGl0J2xsIGdldCB0aGUgZHVyYXRpb24gZnJvbSBpdHMgcGFyZW50LlxuICAgICAqL1xuICAgIEFuaW1hdG9yLnByb3RvdHlwZS5nZXREdXJhdGlvbiA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgICAgIGlmIChvcHRzICYmIG9wdHMuZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG9wdHMuZHVyYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2R1cmF0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0RHVyYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgaWYgdGhlIGFuaW1hdGlvbiBpcyBhIHJvb3Qgb25lLlxuICAgICAqL1xuICAgIEFuaW1hdG9yLnByb3RvdHlwZS5pc1Jvb3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5wYXJlbnQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGR1cmF0aW9uIGZvciB0aGlzIGFuaW1hdGlvbi5cbiAgICAgKi9cbiAgICBBbmltYXRvci5wcm90b3R5cGUuZHVyYXRpb24gPSBmdW5jdGlvbiAobWlsbGlzZWNvbmRzKSB7XG4gICAgICAgIHRoaXMuX2R1cmF0aW9uID0gbWlsbGlzZWNvbmRzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZWFzaW5nIG9mIHRoaXMgYW5pbWF0aW9uLiBJZiB0aGlzIGFuaW1hdGlvbiBkb2VzXG4gICAgICogbm90IGhhdmUgYW4gZWFzaW5nLCB0aGVuIGl0J2xsIGdldCB0aGUgZWFzaW5nIGZyb20gaXRzIHBhcmVudC5cbiAgICAgKi9cbiAgICBBbmltYXRvci5wcm90b3R5cGUuZ2V0RWFzaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5faXNSZXZlcnNlICYmIHRoaXMuX3JldmVyc2VkRWFzaW5nTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmV2ZXJzZWRFYXNpbmdOYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9lYXNpbmdOYW1lICE9PSB1bmRlZmluZWQgPyB0aGlzLl9lYXNpbmdOYW1lIDogKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmdldEVhc2luZygpKSB8fCBudWxsO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBlYXNpbmcgZm9yIHRoaXMgYW5pbWF0aW9uLlxuICAgICAqL1xuICAgIEFuaW1hdG9yLnByb3RvdHlwZS5lYXNpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB0aGlzLl9lYXNpbmdOYW1lID0gbmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGVhc2luZyBmb3IgdGhpcyByZXZlcnNlZCBhbmltYXRpb24uXG4gICAgICovXG4gICAgQW5pbWF0b3IucHJvdG90eXBlLmVhc2luZ1JldmVyc2UgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB0aGlzLl9yZXZlcnNlZEVhc2luZ05hbWUgPSBuYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgXCJmcm9tXCIgdmFsdWUgZm9yIGEgc3BlY2lmaWMgcHJvcGVydHkuXG4gICAgICovXG4gICAgQW5pbWF0b3IucHJvdG90eXBlLmZyb20gPSBmdW5jdGlvbiAocHJvcCwgdmFsKSB7XG4gICAgICAgIHRoaXMuX2FkZFByb3AoJ2Zyb20nLCBwcm9wLCB2YWwpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgXCJ0b1wiIHZhbHVlIGZvciBhIHNwZWNpZmljIHByb3BlcnR5LlxuICAgICAqL1xuICAgIEFuaW1hdG9yLnByb3RvdHlwZS50byA9IGZ1bmN0aW9uIChwcm9wLCB2YWwsIGNsZWFyUHJvcGVyeUFmdGVyVHJhbnNpdGlvbikge1xuICAgICAgICBpZiAoY2xlYXJQcm9wZXJ5QWZ0ZXJUcmFuc2l0aW9uID09PSB2b2lkIDApIHsgY2xlYXJQcm9wZXJ5QWZ0ZXJUcmFuc2l0aW9uID0gZmFsc2U7IH1cbiAgICAgICAgdmFyIGZ4ID0gdGhpcy5fYWRkUHJvcCgndG8nLCBwcm9wLCB2YWwpO1xuICAgICAgICBpZiAoY2xlYXJQcm9wZXJ5QWZ0ZXJUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGlzIGVmZmVjdCBpcyBhIHRyYW5zZm9ybSB0aGVuIGNsZWFyIHRoZSB0cmFuc2Zvcm0gZWZmZWN0XG4gICAgICAgICAgICAvLyBvdGhlcndpc2UganVzdCBjbGVhciB0aGUgYWN0dWFsIHByb3BlcnR5XG4gICAgICAgICAgICB0aGlzLmFmdGVyQ2xlYXJTdHlsZXMoZngudHJhbnMgPyBbJ3RyYW5zZm9ybScsICctd2Via2l0LXRyYW5zZm9ybSddIDogW3Byb3BdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNob3J0Y3V0IHRvIGFkZCBib3RoIHRoZSBcImZyb21cIiBhbmQgXCJ0b1wiIGZvciB0aGUgc2FtZSBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBBbmltYXRvci5wcm90b3R5cGUuZnJvbVRvID0gZnVuY3Rpb24gKHByb3AsIGZyb21WYWwsIHRvVmFsLCBjbGVhclByb3BlcnlBZnRlclRyYW5zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnJvbShwcm9wLCBmcm9tVmFsKS50byhwcm9wLCB0b1ZhbCwgY2xlYXJQcm9wZXJ5QWZ0ZXJUcmFuc2l0aW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE5PIERPTVxuICAgICAqL1xuICAgIEFuaW1hdG9yLnByb3RvdHlwZS5fZ2V0UHJvcCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLl9meFByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9meFByb3BlcnRpZXMuZmluZChmdW5jdGlvbiAocHJvcCkgeyByZXR1cm4gcHJvcC5lZmZlY3ROYW1lID09PSBuYW1lOyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgQW5pbWF0b3IucHJvdG90eXBlLl9hZGRQcm9wID0gZnVuY3Rpb24gKHN0YXRlLCBwcm9wLCB2YWwpIHtcbiAgICAgICAgdmFyIGZ4UHJvcCA9IHRoaXMuX2dldFByb3AocHJvcCk7XG4gICAgICAgIGlmICghZnhQcm9wKSB7XG4gICAgICAgICAgICAvLyBmaXJzdCB0aW1lIHdlJ3ZlIHNlZSB0aGlzIEVmZmVjdFByb3BlcnR5XG4gICAgICAgICAgICB2YXIgc2hvdWxkVHJhbnMgPSAoVFJBTlNGT1JNX1BST1BTW3Byb3BdID09PSAxKTtcbiAgICAgICAgICAgIGZ4UHJvcCA9IHtcbiAgICAgICAgICAgICAgICBlZmZlY3ROYW1lOiBwcm9wLFxuICAgICAgICAgICAgICAgIHRyYW5zOiBzaG91bGRUcmFucyxcbiAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIHdpbGwtY2hhbmdlIHByb3BlcnR5IGZvciB0cmFuc2Zvcm1zIG9yIG9wYWNpdHlcbiAgICAgICAgICAgICAgICB3YzogKHNob3VsZFRyYW5zID8gJ3RyYW5zZm9ybScgOiBwcm9wKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICh0aGlzLl9meFByb3BlcnRpZXMgPSB0aGlzLl9meFByb3BlcnRpZXMgfHwgW10pLnB1c2goZnhQcm9wKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhZGQgZnJvbS90byBFZmZlY3RTdGF0ZSB0byB0aGUgRWZmZWN0UHJvcGVydHlcbiAgICAgICAgdmFyIGZ4U3RhdGUgPSB7XG4gICAgICAgICAgICB2YWw6IHZhbCxcbiAgICAgICAgICAgIG51bTogMCxcbiAgICAgICAgICAgIGVmZmVjdFVuaXQ6ICcnLFxuICAgICAgICB9O1xuICAgICAgICBmeFByb3Bbc3RhdGVdID0gZnhTdGF0ZTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICYmIHZhbC5pbmRleE9mKCcgJykgPCAwKSB7XG4gICAgICAgICAgICB2YXIgciA9IHZhbC5tYXRjaChDU1NfVkFMVUVfUkVHRVgpO1xuICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbnVtID0gcGFyc2VGbG9hdChyWzFdKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKG51bSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZnhTdGF0ZS5udW0gPSBudW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ4U3RhdGUuZWZmZWN0VW5pdCA9IChyWzBdICE9PSByWzJdID8gclsyXSA6ICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZnhTdGF0ZS5udW0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ4UHJvcDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZCBDU1MgY2xhc3MgdG8gdGhpcyBhbmltYXRpb24ncyBlbGVtZW50c1xuICAgICAqIGJlZm9yZSB0aGUgYW5pbWF0aW9uIGJlZ2lucy5cbiAgICAgKi9cbiAgICBBbmltYXRvci5wcm90b3R5cGUuYmVmb3JlQWRkQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICh0aGlzLl9iZWZvcmVBZGRDbGFzc2VzID0gdGhpcy5fYmVmb3JlQWRkQ2xhc3NlcyB8fCBbXSkucHVzaChjbGFzc05hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZSBDU1MgY2xhc3MgZnJvbSB0aGlzIGFuaW1hdGlvbidzIGVsZW1lbnRzXG4gICAgICogYmVmb3JlIHRoZSBhbmltYXRpb24gYmVnaW5zLlxuICAgICAqL1xuICAgIEFuaW1hdG9yLnByb3RvdHlwZS5iZWZvcmVSZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgICAgKHRoaXMuX2JlZm9yZVJlbW92ZUNsYXNzZXMgPSB0aGlzLl9iZWZvcmVSZW1vdmVDbGFzc2VzIHx8IFtdKS5wdXNoKGNsYXNzTmFtZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IENTUyBpbmxpbmUgc3R5bGVzIHRvIHRoaXMgYW5pbWF0aW9uJ3MgZWxlbWVudHNcbiAgICAgKiBiZWZvcmUgdGhlIGFuaW1hdGlvbiBiZWdpbnMuXG4gICAgICovXG4gICAgQW5pbWF0b3IucHJvdG90eXBlLmJlZm9yZVN0eWxlcyA9IGZ1bmN0aW9uIChzdHlsZXMpIHtcbiAgICAgICAgdGhpcy5fYmVmb3JlU3R5bGVzID0gc3R5bGVzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsZWFyIENTUyBpbmxpbmUgc3R5bGVzIGZyb20gdGhpcyBhbmltYXRpb24ncyBlbGVtZW50c1xuICAgICAqIGJlZm9yZSB0aGUgYW5pbWF0aW9uIGJlZ2lucy5cbiAgICAgKi9cbiAgICBBbmltYXRvci5wcm90b3R5cGUuYmVmb3JlQ2xlYXJTdHlsZXMgPSBmdW5jdGlvbiAocHJvcGVydHlOYW1lcykge1xuICAgICAgICB0aGlzLl9iZWZvcmVTdHlsZXMgPSB0aGlzLl9iZWZvcmVTdHlsZXMgfHwge307XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgcHJvcGVydHlOYW1lc18xID0gcHJvcGVydHlOYW1lczsgX2kgPCBwcm9wZXJ0eU5hbWVzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IHByb3BlcnR5TmFtZXNfMVtfaV07XG4gICAgICAgICAgICB0aGlzLl9iZWZvcmVTdHlsZXNbcHJvcF0gPSAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZCBhIGZ1bmN0aW9uIHdoaWNoIGNvbnRhaW5zIERPTSByZWFkcywgd2hpY2ggd2lsbCBydW5cbiAgICAgKiBiZWZvcmUgdGhlIGFuaW1hdGlvbiBiZWdpbnMuXG4gICAgICovXG4gICAgQW5pbWF0b3IucHJvdG90eXBlLmJlZm9yZUFkZFJlYWQgPSBmdW5jdGlvbiAoZG9tUmVhZEZuKSB7XG4gICAgICAgICh0aGlzLl9yZWFkQ2FsbGJhY2tzID0gdGhpcy5fcmVhZENhbGxiYWNrcyB8fCBbXSkucHVzaChkb21SZWFkRm4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZCBhIGZ1bmN0aW9uIHdoaWNoIGNvbnRhaW5zIERPTSB3cml0ZXMsIHdoaWNoIHdpbGwgcnVuXG4gICAgICogYmVmb3JlIHRoZSBhbmltYXRpb24gYmVnaW5zLlxuICAgICAqL1xuICAgIEFuaW1hdG9yLnByb3RvdHlwZS5iZWZvcmVBZGRXcml0ZSA9IGZ1bmN0aW9uIChkb21Xcml0ZUZuKSB7XG4gICAgICAgICh0aGlzLl93cml0ZUNhbGxiYWNrcyA9IHRoaXMuX3dyaXRlQ2FsbGJhY2tzIHx8IFtdKS5wdXNoKGRvbVdyaXRlRm4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZCBDU1MgY2xhc3MgdG8gdGhpcyBhbmltYXRpb24ncyBlbGVtZW50c1xuICAgICAqIGFmdGVyIHRoZSBhbmltYXRpb24gZmluaXNoZXMuXG4gICAgICovXG4gICAgQW5pbWF0b3IucHJvdG90eXBlLmFmdGVyQWRkQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICh0aGlzLl9hZnRlckFkZENsYXNzZXMgPSB0aGlzLl9hZnRlckFkZENsYXNzZXMgfHwgW10pLnB1c2goY2xhc3NOYW1lKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgQ1NTIGNsYXNzIGZyb20gdGhpcyBhbmltYXRpb24ncyBlbGVtZW50c1xuICAgICAqIGFmdGVyIHRoZSBhbmltYXRpb24gZmluaXNoZXMuXG4gICAgICovXG4gICAgQW5pbWF0b3IucHJvdG90eXBlLmFmdGVyUmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICh0aGlzLl9hZnRlclJlbW92ZUNsYXNzZXMgPSB0aGlzLl9hZnRlclJlbW92ZUNsYXNzZXMgfHwgW10pLnB1c2goY2xhc3NOYW1lKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXQgQ1NTIGlubGluZSBzdHlsZXMgdG8gdGhpcyBhbmltYXRpb24ncyBlbGVtZW50c1xuICAgICAqIGFmdGVyIHRoZSBhbmltYXRpb24gZmluaXNoZXMuXG4gICAgICovXG4gICAgQW5pbWF0b3IucHJvdG90eXBlLmFmdGVyU3R5bGVzID0gZnVuY3Rpb24gKHN0eWxlcykge1xuICAgICAgICB0aGlzLl9hZnRlclN0eWxlcyA9IHN0eWxlcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbGVhciBDU1MgaW5saW5lIHN0eWxlcyBmcm9tIHRoaXMgYW5pbWF0aW9uJ3MgZWxlbWVudHNcbiAgICAgKiBhZnRlciB0aGUgYW5pbWF0aW9uIGZpbmlzaGVzLlxuICAgICAqL1xuICAgIEFuaW1hdG9yLnByb3RvdHlwZS5hZnRlckNsZWFyU3R5bGVzID0gZnVuY3Rpb24gKHByb3BlcnR5TmFtZXMpIHtcbiAgICAgICAgdGhpcy5fYWZ0ZXJTdHlsZXMgPSB0aGlzLl9hZnRlclN0eWxlcyB8fCB7fTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBwcm9wZXJ0eU5hbWVzXzIgPSBwcm9wZXJ0eU5hbWVzOyBfaSA8IHByb3BlcnR5TmFtZXNfMi5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcGVydHlOYW1lc18yW19pXTtcbiAgICAgICAgICAgIHRoaXMuX2FmdGVyU3R5bGVzW3Byb3BdID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQbGF5IHRoZSBhbmltYXRpb24uXG4gICAgICovXG4gICAgQW5pbWF0b3IucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbiAob3B0cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBJZiB0aGUgYW5pbWF0aW9uIHdhcyBhbHJlYWR5IGludmFsaWRhdGVkIChpdCBkaWQgZmluaXNoKSwgZG8gbm90aGluZ1xuICAgICAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgdG9wIGxldmVsIGFuaW1hdGlvbiBhbmQgaXMgaW4gZnVsbCBjb250cm9sXG4gICAgICAgIC8vIG9mIHdoZW4gdGhlIGFzeW5jIHBsYXkoKSBzaG91bGQgYWN0dWFsbHkga2ljayBvZmZcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gZHVyYXRpb24gdGhlbiBpdCdsbCBzZXQgdGhlIFRPIHByb3BlcnR5IGltbWVkaWF0ZWx5XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgZHVyYXRpb24sIHRoZW4gaXQnbGwgc3RhZ2UgYWxsIGFuaW1hdGlvbnMgYXQgdGhlXG4gICAgICAgIC8vIEZST00gcHJvcGVydHkgYW5kIHRyYW5zaXRpb24gZHVyYXRpb24sIHdhaXQgYSBmZXcgZnJhbWVzLCB0aGVuXG4gICAgICAgIC8vIGtpY2sgb2ZmIHRoZSBhbmltYXRpb24gYnkgc2V0dGluZyB0aGUgVE8gcHJvcGVydHkgZm9yIGVhY2ggYW5pbWF0aW9uXG4gICAgICAgIHRoaXMuX2lzQXN5bmMgPSB0aGlzLl9oYXNEdXJhdGlvbihvcHRzKTtcbiAgICAgICAgLy8gZW5zdXJlIGFsbCBwYXN0IHRyYW5zaXRpb24gZW5kIGV2ZW50cyBoYXZlIGJlZW4gY2xlYXJlZFxuICAgICAgICB0aGlzLl9jbGVhckFzeW5jKCk7XG4gICAgICAgIC8vIHJlY3Vyc2l2ZWx5IGtpY2tzIG9mZiB0aGUgY29ycmVjdCBwcm9ncmVzcyBzdGVwIGZvciBlYWNoIGNoaWxkIGFuaW1hdGlvblxuICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxuICAgICAgICB0aGlzLl9wbGF5SW5pdChvcHRzKTtcbiAgICAgICAgLy8gZG91YmxpbmcgdXAgUkFGcyBzaW5jZSB0aGlzIGFuaW1hdGlvbiB3YXMgcHJvYmFibHkgdHJpZ2dlcmVkXG4gICAgICAgIC8vIGZyb20gYW4gaW5wdXQgZXZlbnQsIGFuZCBqdXN0IGhhdmluZyBvbmUgUkFGIHdvdWxkIGhhdmUgdGhpcyBjb2RlXG4gICAgICAgIC8vIHJ1biB3aXRoaW4gdGhlIHNhbWUgZnJhbWUgYXMgdGhlIHRyaWdnZXJpbmcgaW5wdXQgZXZlbnQsIGFuZCB0aGVcbiAgICAgICAgLy8gaW5wdXQgZXZlbnQgcHJvYmFibHkgYWxyZWFkeSBkaWQgd2F5IHRvbyBtdWNoIHdvcmsgZm9yIG9uZSBmcmFtZVxuICAgICAgICByYWYoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmFmKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fcGxheURvbUluc3BlY3Qob3B0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBbmltYXRvci5wcm90b3R5cGUucGxheUFzeW5jID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICBfdGhpcy5vbkZpbmlzaChyZXNvbHZlLCB7IG9uZVRpbWVDYWxsYmFjazogdHJ1ZSwgY2xlYXJFeGlzdGluZ0NhbGxiYWNrczogdHJ1ZSB9KTtcbiAgICAgICAgICAgIF90aGlzLnBsYXkob3B0cyk7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQW5pbWF0b3IucHJvdG90eXBlLnBsYXlTeW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBJZiB0aGUgYW5pbWF0aW9uIHdhcyBhbHJlYWR5IGludmFsaWRhdGVkIChpdCBkaWQgZmluaXNoKSwgZG8gbm90aGluZ1xuICAgICAgICBpZiAoIXRoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICAgICAgdmFyIG9wdHMgPSB7IGR1cmF0aW9uOiAwIH07XG4gICAgICAgICAgICB0aGlzLl9pc0FzeW5jID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9jbGVhckFzeW5jKCk7XG4gICAgICAgICAgICB0aGlzLl9wbGF5SW5pdChvcHRzKTtcbiAgICAgICAgICAgIHRoaXMuX3BsYXlEb21JbnNwZWN0KG9wdHMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBET00gV1JJVEVcbiAgICAgKiBSRUNVUlNJT05cbiAgICAgKi9cbiAgICBBbmltYXRvci5wcm90b3R5cGUuX3BsYXlJbml0ID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgLy8gYWx3YXlzIGRlZmF1bHQgdGhhdCBhbiBhbmltYXRpb24gZG9lcyBub3QgdHdlZW5cbiAgICAgICAgLy8gYSB0d2VlbiByZXF1aXJlcyB0aGF0IGFuIEFuaW1hdGlvbiBjbGFzcyBoYXMgYW4gZWxlbWVudFxuICAgICAgICAvLyBhbmQgdGhhdCBpdCBoYXMgYXQgbGVhc3Qgb25lIEZST00vVE8gZWZmZWN0XG4gICAgICAgIC8vIGFuZCB0aGF0IHRoZSBGUk9NL1RPIGVmZmVjdCBjYW4gdHdlZW4gbnVtZXJpYyB2YWx1ZXNcbiAgICAgICAgdGhpcy5faGFzVHdlZW5FZmZlY3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhc0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9oYXNEdXIgPSAodGhpcy5nZXREdXJhdGlvbihvcHRzKSA+IERVUkFUSU9OX01JTik7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuX2NoaWxkQW5pbWF0aW9ucztcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGNoaWxkcmVuXzEgPSBjaGlsZHJlbjsgX2kgPCBjaGlsZHJlbl8xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuXzFbX2ldO1xuICAgICAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgY2hpbGQuX3BsYXlJbml0KG9wdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9oYXNEdXIpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgZHVyYXRpb24gdGhlbiB3ZSB3YW50IHRvIHN0YXJ0IGF0IHN0ZXAgMFxuICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyZXNzKDApO1xuICAgICAgICAgICAgLy8gYWRkIHRoZSB3aWxsLWNoYW5nZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgdGhpcy5fd2lsbENoYW5nZSh0cnVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogRE9NIFdSSVRFXG4gICAgICogTk8gUkVDVVJTSU9OXG4gICAgICogUk9PVCBBTklNQVRJT05cbiAgICAgKi9cbiAgICBBbmltYXRvci5wcm90b3R5cGUuX3BsYXlEb21JbnNwZWN0ID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gZmlyZSBvZmYgYWxsIHRoZSBcImJlZm9yZVwiIGZ1bmN0aW9uIHRoYXQgaGF2ZSBET00gUkVBRFMgaW4gdGhlbVxuICAgICAgICAvLyBlbGVtZW50cyB3aWxsIGJlIGluIHRoZSBET00sIGhvd2V2ZXIgdmlzaWJpbHkgaGlkZGVuXG4gICAgICAgIC8vIHNvIHdlIGNhbiByZWFkIHRoZWlyIGRpbWVuc2lvbnMgaWYgbmVlZCBiZVxuICAgICAgICAvLyAqKioqKioqKiBET00gUkVBRCAqKioqKioqKioqKioqKioqXG4gICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXG4gICAgICAgIHRoaXMuX2JlZm9yZUFuaW1hdGlvbigpO1xuICAgICAgICAvLyBmb3IgdGhlIHJvb3QgYW5pbWF0aW9uIG9ubHlcbiAgICAgICAgLy8gc2V0IHRoZSBhc3luYyBUUkFOU0lUSU9OIEVORCBldmVudFxuICAgICAgICAvLyBhbmQgcnVuIG9uRmluaXNoZXMgd2hlbiB0aGUgdHJhbnNpdGlvbiBlbmRzXG4gICAgICAgIHZhciBkdXIgPSB0aGlzLmdldER1cmF0aW9uKG9wdHMpO1xuICAgICAgICBpZiAodGhpcy5faXNBc3luYykge1xuICAgICAgICAgICAgdGhpcy5fYXN5bmNFbmQoZHVyLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxuICAgICAgICB0aGlzLl9wbGF5UHJvZ3Jlc3Mob3B0cyk7XG4gICAgICAgIGlmICh0aGlzLl9pc0FzeW5jICYmICF0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgYW5pbWF0aW9uIGhhcyBhIGR1cmF0aW9uIHNvIHdlIG5lZWQgYW5vdGhlciBSQUZcbiAgICAgICAgICAgIC8vIGZvciB0aGUgQ1NTIFRSQU5TSVRJT04gcHJvcGVydGllcyB0byBraWNrIGluXG4gICAgICAgICAgICByYWYoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9wbGF5VG9TdGVwKDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERPTSBXUklURVxuICAgICAqIFJFQ1VSU0lPTlxuICAgICAqL1xuICAgIEFuaW1hdG9yLnByb3RvdHlwZS5fcGxheVByb2dyZXNzID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5fY2hpbGRBbmltYXRpb25zO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgY2hpbGRyZW5fMiA9IGNoaWxkcmVuOyBfaSA8IGNoaWxkcmVuXzIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5fMltfaV07XG4gICAgICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcbiAgICAgICAgICAgICAgICBjaGlsZC5fcGxheVByb2dyZXNzKG9wdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9oYXNEdXIpIHtcbiAgICAgICAgICAgIC8vIHNldCB0aGUgQ1NTIFRSQU5TSVRJT04gZHVyYXRpb24vZWFzaW5nXG4gICAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgdGhpcy5fc2V0VHJhbnModGhpcy5nZXREdXJhdGlvbihvcHRzKSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gdGhpcyBhbmltYXRpb24gZG9lcyBub3QgaGF2ZSBhIGR1cmF0aW9uLCBzbyBpdCBzaG91bGQgbm90IGFuaW1hdGVcbiAgICAgICAgICAgIC8vIGp1c3QgZ28gc3RyYWlnaHQgdG8gdGhlIFRPIHByb3BlcnRpZXMgYW5kIGNhbGwgaXQgZG9uZVxuICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyZXNzKDEpO1xuICAgICAgICAgICAgLy8gc2luY2UgdGhlcmUgd2FzIG5vIGFuaW1hdGlvbiwgaW1tZWRpYXRlbHkgcnVuIHRoZSBhZnRlclxuICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcbiAgICAgICAgICAgIHRoaXMuX3NldEFmdGVyU3R5bGVzKCk7XG4gICAgICAgICAgICAvLyB0aGlzIGFuaW1hdGlvbiBoYXMgbm8gZHVyYXRpb24sIHNvIGl0IGhhcyBmaW5pc2hlZFxuICAgICAgICAgICAgLy8gb3RoZXIgYW5pbWF0aW9ucyBjb3VsZCBzdGlsbCBiZSBydW5uaW5nXG4gICAgICAgICAgICB0aGlzLl9kaWRGaW5pc2godHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERPTSBXUklURVxuICAgICAqIFJFQ1VSU0lPTlxuICAgICAqL1xuICAgIEFuaW1hdG9yLnByb3RvdHlwZS5fcGxheVRvU3RlcCA9IGZ1bmN0aW9uIChzdGVwVmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuX2NoaWxkQW5pbWF0aW9ucztcbiAgICAgICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgY2hpbGRyZW5fMyA9IGNoaWxkcmVuOyBfaSA8IGNoaWxkcmVuXzMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuXzNbX2ldO1xuICAgICAgICAgICAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5fcGxheVRvU3RlcChzdGVwVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9oYXNEdXIpIHtcbiAgICAgICAgICAgICAgICAvLyBicm93c2VyIGhhZCBzb21lIHRpbWUgdG8gcmVuZGVyIGV2ZXJ5dGhpbmcgaW4gcGxhY2VcbiAgICAgICAgICAgICAgICAvLyBhbmQgdGhlIHRyYW5zaXRpb24gZHVyYXRpb24vZWFzaW5nIGlzIHNldFxuICAgICAgICAgICAgICAgIC8vIG5vdyBzZXQgdGhlIFRPIHByb3BlcnRpZXMgd2hpY2ggd2lsbCB0cmlnZ2VyIHRoZSB0cmFuc2l0aW9uIHRvIGJlZ2luXG4gICAgICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9ncmVzcyhzdGVwVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBET00gV1JJVEVcbiAgICAgKiBOTyBSRUNVUlNJT05cbiAgICAgKiBST09UIEFOSU1BVElPTlxuICAgICAqL1xuICAgIEFuaW1hdG9yLnByb3RvdHlwZS5fYXN5bmNFbmQgPSBmdW5jdGlvbiAoZHVyLCBzaG91bGRDb21wbGV0ZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBvblRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBjb25ncmF0cyEgYSBzdWNjZXNzZnVsIHRyYW5zaXRpb24gY29tcGxldGVkIVxuICAgICAgICAgICAgLy8gZW5zdXJlIHRyYW5zaXRpb24gZW5kIGV2ZW50cyBhbmQgdGltZW91dHMgaGF2ZSBiZWVuIGNsZWFyZWRcbiAgICAgICAgICAgIHNlbGYuX2NsZWFyQXN5bmMoKTtcbiAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICBzZWxmLl9wbGF5RW5kKCk7XG4gICAgICAgICAgICAvLyB0cmFuc2l0aW9uIGZpbmlzaGVkXG4gICAgICAgICAgICBzZWxmLl9kaWRGaW5pc2hBbGwoc2hvdWxkQ29tcGxldGUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uVHJhbnNpdGlvbkZhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gb2ggbm96ISB0aGUgdHJhbnNpdGlvbiBlbmQgZXZlbnQgZGlkbid0IGZpcmUgaW4gdGltZSFcbiAgICAgICAgICAgIC8vIGluc3RlYWQgdGhlIGZhbGxiYWNrIHRpbWVyIHdoZW4gZmlyc3RcbiAgICAgICAgICAgIC8vIGlmIGFsbCBnb2VzIHdlbGwgdGhpcyBmYWxsYmFjayBzaG91bGQgbmV2ZXIgZmlyZVxuICAgICAgICAgICAgLy8gY2xlYXIgdGhlIG90aGVyIGFzeW5jIGVuZCBldmVudHMgZnJvbSBmaXJpbmdcbiAgICAgICAgICAgIHNlbGYuX3RpbWVySWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBzZWxmLl9jbGVhckFzeW5jKCk7XG4gICAgICAgICAgICAvLyBzZXQgdGhlIGFmdGVyIHN0eWxlc1xuICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcbiAgICAgICAgICAgIHNlbGYuX3BsYXlFbmQoc2hvdWxkQ29tcGxldGUgPyAxIDogMCk7XG4gICAgICAgICAgICAvLyB0cmFuc2l0aW9uIGZpbmlzaGVkXG4gICAgICAgICAgICBzZWxmLl9kaWRGaW5pc2hBbGwoc2hvdWxkQ29tcGxldGUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gc2V0IHRoZSBUUkFOU0lUSU9OIEVORCBldmVudCBvbiBvbmUgb2YgdGhlIHRyYW5zaXRpb24gZWxlbWVudHNcbiAgICAgICAgc2VsZi5fdW5yZWdpc3RlclRybnNFbmQgPSB0cmFuc2l0aW9uRW5kKHNlbGYuX3RyYW5zRWwoKSwgb25UcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgLy8gc2V0IGEgZmFsbGJhY2sgdGltZW91dCBpZiB0aGUgdHJhbnNpdGlvbiBlbmQgZXZlbnQgbmV2ZXIgZmlyZXMsIG9yIGlzIHRvbyBzbG93XG4gICAgICAgIC8vIHRyYW5zaXRpb24gZW5kIGZhbGxiYWNrOiAoYW5pbWF0aW9uIGR1cmF0aW9uICsgWFhtcylcbiAgICAgICAgc2VsZi5fdGltZXJJZCA9IHNldFRpbWVvdXQob25UcmFuc2l0aW9uRmFsbGJhY2ssIChkdXIgKyBUUkFOU0lUSU9OX0VORF9GQUxMQkFDS19QQURESU5HX01TKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBET00gV1JJVEVcbiAgICAgKiBSRUNVUlNJT05cbiAgICAgKi9cbiAgICBBbmltYXRvci5wcm90b3R5cGUuX3BsYXlFbmQgPSBmdW5jdGlvbiAoc3RlcFZhbHVlKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuX2NoaWxkQW5pbWF0aW9ucztcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGNoaWxkcmVuXzQgPSBjaGlsZHJlbjsgX2kgPCBjaGlsZHJlbl80Lmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuXzRbX2ldO1xuICAgICAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgY2hpbGQuX3BsYXlFbmQoc3RlcFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faGFzRHVyKSB7XG4gICAgICAgICAgICBpZiAoc3RlcFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyB0b28gbGF0ZSB0byBoYXZlIGEgc21vb3RoIGFuaW1hdGlvbiwganVzdCBmaW5pc2ggaXRcbiAgICAgICAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgICAgIHRoaXMuX3NldFRyYW5zKDAsIHRydWUpO1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgZW5kaW5nIHByb2dyZXNzIHN0ZXAgZ2V0cyByZW5kZXJlZFxuICAgICAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvZ3Jlc3Moc3RlcFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNldCB0aGUgYWZ0ZXIgc3R5bGVzXG4gICAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgdGhpcy5fc2V0QWZ0ZXJTdHlsZXMoKTtcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgd2lsbC1jaGFuZ2UgcHJvcGVydGllc1xuICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcbiAgICAgICAgICAgIHRoaXMuX3dpbGxDaGFuZ2UoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBOTyBET01cbiAgICAgKiBSRUNVUlNJT05cbiAgICAgKi9cbiAgICBBbmltYXRvci5wcm90b3R5cGUuX2hhc0R1cmF0aW9uID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0RHVyYXRpb24ob3B0cykgPiBEVVJBVElPTl9NSU4pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuX2NoaWxkQW5pbWF0aW9ucztcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGNoaWxkcmVuXzUgPSBjaGlsZHJlbjsgX2kgPCBjaGlsZHJlbl81Lmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuXzVbX2ldO1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5faGFzRHVyYXRpb24ob3B0cykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE5PIERPTVxuICAgICAqIFJFQ1VSU0lPTlxuICAgICAqL1xuICAgIEFuaW1hdG9yLnByb3RvdHlwZS5faGFzRG9tUmVhZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9yZWFkQ2FsbGJhY2tzICYmIHRoaXMuX3JlYWRDYWxsYmFja3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5fY2hpbGRBbmltYXRpb25zO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgY2hpbGRyZW5fNiA9IGNoaWxkcmVuOyBfaSA8IGNoaWxkcmVuXzYubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5fNltfaV07XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLl9oYXNEb21SZWFkcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbW1lZGlhdGVseSBzdG9wIGF0IHRoZSBlbmQgb2YgdGhlIGFuaW1hdGlvbi5cbiAgICAgKi9cbiAgICBBbmltYXRvci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIChzdGVwVmFsdWUpIHtcbiAgICAgICAgaWYgKHN0ZXBWYWx1ZSA9PT0gdm9pZCAwKSB7IHN0ZXBWYWx1ZSA9IDE7IH1cbiAgICAgICAgLy8gZW5zdXJlIGFsbCBwYXN0IHRyYW5zaXRpb24gZW5kIGV2ZW50cyBoYXZlIGJlZW4gY2xlYXJlZFxuICAgICAgICB0aGlzLl9jbGVhckFzeW5jKCk7XG4gICAgICAgIHRoaXMuX2hhc0R1ciA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BsYXlFbmQoc3RlcFZhbHVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE5PIERPTVxuICAgICAqIE5PIFJFQ1VSU0lPTlxuICAgICAqL1xuICAgIEFuaW1hdG9yLnByb3RvdHlwZS5fY2xlYXJBc3luYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3VucmVnaXN0ZXJUcm5zRW5kKSB7XG4gICAgICAgICAgICB0aGlzLl91bnJlZ2lzdGVyVHJuc0VuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl90aW1lcklkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXJJZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdGltZXJJZCA9IHRoaXMuX3VucmVnaXN0ZXJUcm5zRW5kID0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRE9NIFdSSVRFXG4gICAgICogTk8gUkVDVVJTSU9OXG4gICAgICovXG4gICAgQW5pbWF0b3IucHJvdG90eXBlLl9wcm9ncmVzcyA9IGZ1bmN0aW9uIChzdGVwVmFsdWUpIHtcbiAgICAgICAgLy8gYnJlYWQgJ24gYnV0dGVyXG4gICAgICAgIHZhciB2YWw7XG4gICAgICAgIHZhciBlbGVtZW50cyA9IHRoaXMuX2VsZW1lbnRzO1xuICAgICAgICB2YXIgZWZmZWN0cyA9IHRoaXMuX2Z4UHJvcGVydGllcztcbiAgICAgICAgaWYgKCFlbGVtZW50cyB8fCBlbGVtZW50cy5sZW5ndGggPT09IDAgfHwgIWVmZmVjdHMgfHwgdGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZmxpcCB0aGUgbnVtYmVyIGlmIHdlJ3JlIGdvaW5nIGluIHJldmVyc2VcbiAgICAgICAgaWYgKHRoaXMuX2lzUmV2ZXJzZSkge1xuICAgICAgICAgICAgc3RlcFZhbHVlID0gMSAtIHN0ZXBWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBqID0gMDtcbiAgICAgICAgdmFyIGZpbmFsVHJhbnNmb3JtID0gJyc7XG4gICAgICAgIHZhciBmeDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGVmZmVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZ4ID0gZWZmZWN0c1tpXTtcbiAgICAgICAgICAgIGlmIChmeC5mcm9tICYmIGZ4LnRvKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZyb21OdW0gPSBmeC5mcm9tLm51bTtcbiAgICAgICAgICAgICAgICB2YXIgdG9OdW0gPSBmeC50by5udW07XG4gICAgICAgICAgICAgICAgdmFyIHR3ZWVuRWZmZWN0ID0gKGZyb21OdW0gIT09IHRvTnVtKTtcbiAgICAgICAgICAgICAgICBpZiAodHdlZW5FZmZlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFzVHdlZW5FZmZlY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RlcFZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZST01cbiAgICAgICAgICAgICAgICAgICAgdmFsID0gZnguZnJvbS52YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0ZXBWYWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUT1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSBmeC50by52YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR3ZWVuRWZmZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVWRVJZVEhJTkcgSU4gQkVUV0VFTlxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsTnVtID0gKCgodG9OdW0gLSBmcm9tTnVtKSAqIHN0ZXBWYWx1ZSkgKyBmcm9tTnVtKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVuaXQgPSBmeC50by5lZmZlY3RVbml0O1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSB2YWxOdW0gKyB1bml0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wID0gZnguZWZmZWN0TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZ4LnRyYW5zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFRyYW5zZm9ybSArPSBwcm9wICsgJygnICsgdmFsICsgJykgJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBlbGVtZW50cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNbal0uc3R5bGUuc2V0UHJvcGVydHkocHJvcCwgdmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBwbGFjZSBhbGwgdHJhbnNmb3JtcyBvbiB0aGUgc2FtZSBwcm9wZXJ0eVxuICAgICAgICBpZiAoZmluYWxUcmFuc2Zvcm0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pc1JldmVyc2UgJiYgc3RlcFZhbHVlICE9PSAxIHx8IHRoaXMuX2lzUmV2ZXJzZSAmJiBzdGVwVmFsdWUgIT09IDApIHtcbiAgICAgICAgICAgICAgICBmaW5hbFRyYW5zZm9ybSArPSAndHJhbnNsYXRlWigwcHgpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0uc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zZm9ybScsIGZpbmFsVHJhbnNmb3JtKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5zdHlsZS5zZXRQcm9wZXJ0eSgnLXdlYmtpdC10cmFuc2Zvcm0nLCBmaW5hbFRyYW5zZm9ybSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERPTSBXUklURVxuICAgICAqIE5PIFJFQ1VSU0lPTlxuICAgICAqL1xuICAgIEFuaW1hdG9yLnByb3RvdHlwZS5fc2V0VHJhbnMgPSBmdW5jdGlvbiAoZHVyLCBmb3JjZWRMaW5lYXJFYXNpbmcpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiBpcyBub3QgZW5hYmxlZCBpZiB0aGVyZSBhcmUgbm90IGVmZmVjdHNcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gdGhpcy5fZWxlbWVudHM7XG4gICAgICAgIGlmICghZWxlbWVudHMgfHwgZWxlbWVudHMubGVuZ3RoID09PSAwIHx8ICF0aGlzLl9meFByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXQgdGhlIFRSQU5TSVRJT04gcHJvcGVydGllcyBpbmxpbmUgb24gdGhlIGVsZW1lbnRcbiAgICAgICAgdmFyIGVhc2luZyA9IChmb3JjZWRMaW5lYXJFYXNpbmcgPyAnbGluZWFyJyA6IHRoaXMuZ2V0RWFzaW5nKCkpO1xuICAgICAgICB2YXIgZHVyU3RyaW5nID0gZHVyICsgJ21zJztcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBlbGVtZW50c18xID0gZWxlbWVudHM7IF9pIDwgZWxlbWVudHNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IGVsZW1lbnRzXzFbX2ldLnN0eWxlO1xuICAgICAgICAgICAgaWYgKGR1ciA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgICAgIHN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1clN0cmluZztcbiAgICAgICAgICAgICAgICAvLyBlYWNoIGFuaW1hdGlvbiBjYW4gaGF2ZSBhIGRpZmZlcmVudCBlYXNpbmdcbiAgICAgICAgICAgICAgICBpZiAoZWFzaW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA9IGVhc2luZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERPTSBSRUFEXG4gICAgICogRE9NIFdSSVRFXG4gICAgICogUkVDVVJTSU9OXG4gICAgICovXG4gICAgQW5pbWF0b3IucHJvdG90eXBlLl9iZWZvcmVBbmltYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGZpcmUgb2ZmIGFsbCB0aGUgXCJiZWZvcmVcIiBmdW5jdGlvbiB0aGF0IGhhdmUgRE9NIFJFQURTIGluIHRoZW1cbiAgICAgICAgLy8gZWxlbWVudHMgd2lsbCBiZSBpbiB0aGUgRE9NLCBob3dldmVyIHZpc2liaWx5IGhpZGRlblxuICAgICAgICAvLyBzbyB3ZSBjYW4gcmVhZCB0aGVpciBkaW1lbnNpb25zIGlmIG5lZWQgYmVcbiAgICAgICAgLy8gKioqKioqKiogRE9NIFJFQUQgKioqKioqKioqKioqKioqKlxuICAgICAgICB0aGlzLl9maXJlQmVmb3JlUmVhZEZ1bmMoKTtcbiAgICAgICAgLy8gKioqKioqKiogRE9NIFJFQURTIEFCT1ZFIC8gRE9NIFdSSVRFUyBCRUxPVyAqKioqKioqKioqKioqKioqXG4gICAgICAgIC8vIGZpcmUgb2ZmIGFsbCB0aGUgXCJiZWZvcmVcIiBmdW5jdGlvbiB0aGF0IGhhdmUgRE9NIFdSSVRFUyBpbiB0aGVtXG4gICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXG4gICAgICAgIHRoaXMuX2ZpcmVCZWZvcmVXcml0ZUZ1bmMoKTtcbiAgICAgICAgLy8gc3RhZ2UgYWxsIG9mIHRoZSBiZWZvcmUgY3NzIGNsYXNzZXMgYW5kIGlubGluZSBzdHlsZXNcbiAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcbiAgICAgICAgdGhpcy5fc2V0QmVmb3JlU3R5bGVzKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBET00gV1JJVEVcbiAgICAgKiBSRUNVUlNJT05cbiAgICAgKi9cbiAgICBBbmltYXRvci5wcm90b3R5cGUuX3NldEJlZm9yZVN0eWxlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5fY2hpbGRBbmltYXRpb25zO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgY2hpbGRyZW5fNyA9IGNoaWxkcmVuOyBfaSA8IGNoaWxkcmVuXzcubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5fN1tfaV07XG4gICAgICAgICAgICAgICAgY2hpbGQuX3NldEJlZm9yZVN0eWxlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBlbGVtZW50cyA9IHRoaXMuX2VsZW1lbnRzO1xuICAgICAgICAvLyBiZWZvcmUgdGhlIGFuaW1hdGlvbnMgaGF2ZSBzdGFydGVkXG4gICAgICAgIC8vIG9ubHkgc2V0IGJlZm9yZSBzdHlsZXMgaWYgYW5pbWF0aW9uIGlzIG5vdCByZXZlcnNlZFxuICAgICAgICBpZiAoIWVsZW1lbnRzIHx8IGVsZW1lbnRzLmxlbmd0aCA9PT0gMCB8fCB0aGlzLl9pc1JldmVyc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWRkQ2xhc3NlcyA9IHRoaXMuX2JlZm9yZUFkZENsYXNzZXM7XG4gICAgICAgIHZhciByZW1vdmVDbGFzc2VzID0gdGhpcy5fYmVmb3JlUmVtb3ZlQ2xhc3NlcztcbiAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBlbGVtZW50c18yID0gZWxlbWVudHM7IF9hIDwgZWxlbWVudHNfMi5sZW5ndGg7IF9hKyspIHtcbiAgICAgICAgICAgIHZhciBlbCA9IGVsZW1lbnRzXzJbX2FdO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRDbGFzc0xpc3QgPSBlbC5jbGFzc0xpc3Q7XG4gICAgICAgICAgICAvLyBjc3MgY2xhc3NlcyB0byBhZGQgYmVmb3JlIHRoZSBhbmltYXRpb25cbiAgICAgICAgICAgIGlmIChhZGRDbGFzc2VzKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBhZGRDbGFzc2VzXzEgPSBhZGRDbGFzc2VzOyBfYiA8IGFkZENsYXNzZXNfMS5sZW5ndGg7IF9iKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBhZGRDbGFzc2VzXzFbX2JdO1xuICAgICAgICAgICAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3NMaXN0LmFkZChjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjc3MgY2xhc3NlcyB0byByZW1vdmUgYmVmb3JlIHRoZSBhbmltYXRpb25cbiAgICAgICAgICAgIGlmIChyZW1vdmVDbGFzc2VzKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2MgPSAwLCByZW1vdmVDbGFzc2VzXzEgPSByZW1vdmVDbGFzc2VzOyBfYyA8IHJlbW92ZUNsYXNzZXNfMS5sZW5ndGg7IF9jKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSByZW1vdmVDbGFzc2VzXzFbX2NdO1xuICAgICAgICAgICAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3NMaXN0LnJlbW92ZShjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpbmxpbmUgc3R5bGVzIHRvIGFkZCBiZWZvcmUgdGhlIGFuaW1hdGlvblxuICAgICAgICAgICAgaWYgKHRoaXMuX2JlZm9yZVN0eWxlcykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9kID0gMCwgX2UgPSBPYmplY3QuZW50cmllcyh0aGlzLl9iZWZvcmVTdHlsZXMpOyBfZCA8IF9lLmxlbmd0aDsgX2QrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2YgPSBfZVtfZF0sIGtleSA9IF9mWzBdLCB2YWx1ZSA9IF9mWzFdO1xuICAgICAgICAgICAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERPTSBSRUFEXG4gICAgICogUkVDVVJTSU9OXG4gICAgICovXG4gICAgQW5pbWF0b3IucHJvdG90eXBlLl9maXJlQmVmb3JlUmVhZEZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuX2NoaWxkQW5pbWF0aW9ucztcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGNoaWxkcmVuXzggPSBjaGlsZHJlbjsgX2kgPCBjaGlsZHJlbl84Lmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuXzhbX2ldO1xuICAgICAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBSRUFEICoqKioqKioqKioqKioqKipcbiAgICAgICAgICAgICAgICBjaGlsZC5fZmlyZUJlZm9yZVJlYWRGdW5jKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlYWRGdW5jdGlvbnMgPSB0aGlzLl9yZWFkQ2FsbGJhY2tzO1xuICAgICAgICBpZiAocmVhZEZ1bmN0aW9ucykge1xuICAgICAgICAgICAgZm9yICh2YXIgX2EgPSAwLCByZWFkRnVuY3Rpb25zXzEgPSByZWFkRnVuY3Rpb25zOyBfYSA8IHJlYWRGdW5jdGlvbnNfMS5sZW5ndGg7IF9hKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSByZWFkRnVuY3Rpb25zXzFbX2FdO1xuICAgICAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBSRUFEICoqKioqKioqKioqKioqKipcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBET00gV1JJVEVcbiAgICAgKiBSRUNVUlNJT05cbiAgICAgKi9cbiAgICBBbmltYXRvci5wcm90b3R5cGUuX2ZpcmVCZWZvcmVXcml0ZUZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuX2NoaWxkQW5pbWF0aW9ucztcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGNoaWxkcmVuXzkgPSBjaGlsZHJlbjsgX2kgPCBjaGlsZHJlbl85Lmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuXzlbX2ldO1xuICAgICAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgY2hpbGQuX2ZpcmVCZWZvcmVXcml0ZUZ1bmMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgd3JpdGVGdW5jdGlvbnMgPSB0aGlzLl93cml0ZUNhbGxiYWNrcztcbiAgICAgICAgaWYgKHdyaXRlRnVuY3Rpb25zKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYSA9IDAsIHdyaXRlRnVuY3Rpb25zXzEgPSB3cml0ZUZ1bmN0aW9uczsgX2EgPCB3cml0ZUZ1bmN0aW9uc18xLmxlbmd0aDsgX2ErKykge1xuICAgICAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IHdyaXRlRnVuY3Rpb25zXzFbX2FdO1xuICAgICAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogRE9NIFdSSVRFXG4gICAgICovXG4gICAgQW5pbWF0b3IucHJvdG90eXBlLl9zZXRBZnRlclN0eWxlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gdGhpcy5fZWxlbWVudHM7XG4gICAgICAgIGlmICghZWxlbWVudHMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGVsZW1lbnRzXzMgPSBlbGVtZW50czsgX2kgPCBlbGVtZW50c18zLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGVsID0gZWxlbWVudHNfM1tfaV07XG4gICAgICAgICAgICB2YXIgZWxlbWVudENsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdDtcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgdHJhbnNpdGlvbiBkdXJhdGlvbi9lYXNpbmdcbiAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICBlbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBlbC5zdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSAnJztcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1JldmVyc2UpIHtcbiAgICAgICAgICAgICAgICAvLyBmaW5pc2hlZCBpbiByZXZlcnNlIGRpcmVjdGlvblxuICAgICAgICAgICAgICAgIC8vIGNzcyBjbGFzc2VzIHRoYXQgd2VyZSBhZGRlZCBiZWZvcmUgdGhlIGFuaW1hdGlvbiBzaG91bGQgYmUgcmVtb3ZlZFxuICAgICAgICAgICAgICAgIHZhciBiZWZvcmVBZGRDbGFzc2VzID0gdGhpcy5fYmVmb3JlQWRkQ2xhc3NlcztcbiAgICAgICAgICAgICAgICBpZiAoYmVmb3JlQWRkQ2xhc3Nlcykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfYSA9IDAsIGJlZm9yZUFkZENsYXNzZXNfMSA9IGJlZm9yZUFkZENsYXNzZXM7IF9hIDwgYmVmb3JlQWRkQ2xhc3Nlc18xLmxlbmd0aDsgX2ErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBiZWZvcmVBZGRDbGFzc2VzXzFbX2FdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzTGlzdC5yZW1vdmUoYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY3NzIGNsYXNzZXMgdGhhdCB3ZXJlIHJlbW92ZWQgYmVmb3JlIHRoZSBhbmltYXRpb24gc2hvdWxkIGJlIGFkZGVkXG4gICAgICAgICAgICAgICAgdmFyIGJlZm9yZVJlbW92ZUNsYXNzZXMgPSB0aGlzLl9iZWZvcmVSZW1vdmVDbGFzc2VzO1xuICAgICAgICAgICAgICAgIGlmIChiZWZvcmVSZW1vdmVDbGFzc2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9iID0gMCwgYmVmb3JlUmVtb3ZlQ2xhc3Nlc18xID0gYmVmb3JlUmVtb3ZlQ2xhc3NlczsgX2IgPCBiZWZvcmVSZW1vdmVDbGFzc2VzXzEubGVuZ3RoOyBfYisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGJlZm9yZVJlbW92ZUNsYXNzZXNfMVtfYl07XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3NMaXN0LmFkZChjKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpbmxpbmUgc3R5bGVzIHRoYXQgd2VyZSBhZGRlZCBiZWZvcmUgdGhlIGFuaW1hdGlvbiBzaG91bGQgYmUgcmVtb3ZlZFxuICAgICAgICAgICAgICAgIHZhciBiZWZvcmVTdHlsZXMgPSB0aGlzLl9iZWZvcmVTdHlsZXM7XG4gICAgICAgICAgICAgICAgaWYgKGJlZm9yZVN0eWxlcykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfYyA9IDAsIF9kID0gT2JqZWN0LmtleXMoYmVmb3JlU3R5bGVzKTsgX2MgPCBfZC5sZW5ndGg7IF9jKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wTmFtZSA9IF9kW19jXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBmaW5pc2hlZCBpbiBmb3J3YXJkIGRpcmVjdGlvblxuICAgICAgICAgICAgICAgIC8vIGNzcyBjbGFzc2VzIHRvIGFkZCBhZnRlciB0aGUgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgdmFyIGFmdGVyQWRkQ2xhc3NlcyA9IHRoaXMuX2FmdGVyQWRkQ2xhc3NlcztcbiAgICAgICAgICAgICAgICBpZiAoYWZ0ZXJBZGRDbGFzc2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9lID0gMCwgYWZ0ZXJBZGRDbGFzc2VzXzEgPSBhZnRlckFkZENsYXNzZXM7IF9lIDwgYWZ0ZXJBZGRDbGFzc2VzXzEubGVuZ3RoOyBfZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGFmdGVyQWRkQ2xhc3Nlc18xW19lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3NMaXN0LmFkZChjKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjc3MgY2xhc3NlcyB0byByZW1vdmUgYWZ0ZXIgdGhlIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgIHZhciBhZnRlclJlbW92ZUNsYXNzZXMgPSB0aGlzLl9hZnRlclJlbW92ZUNsYXNzZXM7XG4gICAgICAgICAgICAgICAgaWYgKGFmdGVyUmVtb3ZlQ2xhc3Nlcykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfZiA9IDAsIGFmdGVyUmVtb3ZlQ2xhc3Nlc18xID0gYWZ0ZXJSZW1vdmVDbGFzc2VzOyBfZiA8IGFmdGVyUmVtb3ZlQ2xhc3Nlc18xLmxlbmd0aDsgX2YrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBhZnRlclJlbW92ZUNsYXNzZXNfMVtfZl07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsYXNzTGlzdC5yZW1vdmUoYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaW5saW5lIHN0eWxlcyB0byBhZGQgYWZ0ZXIgdGhlIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgIHZhciBhZnRlclN0eWxlcyA9IHRoaXMuX2FmdGVyU3R5bGVzO1xuICAgICAgICAgICAgICAgIGlmIChhZnRlclN0eWxlcykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfZyA9IDAsIF9oID0gT2JqZWN0LmVudHJpZXMoYWZ0ZXJTdHlsZXMpOyBfZyA8IF9oLmxlbmd0aDsgX2crKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9qID0gX2hbX2ddLCBrZXkgPSBfalswXSwgdmFsdWUgPSBfalsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBET00gV1JJVEVcbiAgICAgKiBOTyBSRUNVUlNJT05cbiAgICAgKi9cbiAgICBBbmltYXRvci5wcm90b3R5cGUuX3dpbGxDaGFuZ2UgPSBmdW5jdGlvbiAoYWRkV2lsbENoYW5nZSkge1xuICAgICAgICB2YXIgd2M7XG4gICAgICAgIHZhciBlZmZlY3RzID0gdGhpcy5fZnhQcm9wZXJ0aWVzO1xuICAgICAgICB2YXIgd2lsbENoYW5nZTtcbiAgICAgICAgaWYgKGFkZFdpbGxDaGFuZ2UgJiYgZWZmZWN0cykge1xuICAgICAgICAgICAgd2MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgZWZmZWN0c18xID0gZWZmZWN0czsgX2kgPCBlZmZlY3RzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVmZmVjdCA9IGVmZmVjdHNfMVtfaV07XG4gICAgICAgICAgICAgICAgdmFyIHByb3BXQyA9IGVmZmVjdC53YztcbiAgICAgICAgICAgICAgICBpZiAocHJvcFdDID09PSAnd2Via2l0VHJhbnNmb3JtJykge1xuICAgICAgICAgICAgICAgICAgICB3Yy5wdXNoKCd0cmFuc2Zvcm0nLCAnLXdlYmtpdC10cmFuc2Zvcm0nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcFdDICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2MucHVzaChwcm9wV0MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbGxDaGFuZ2UgPSB3Yy5qb2luKCcsJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aWxsQ2hhbmdlID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVsZW1lbnRzID0gdGhpcy5fZWxlbWVudHM7XG4gICAgICAgIGlmIChlbGVtZW50cykge1xuICAgICAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBlbGVtZW50c180ID0gZWxlbWVudHM7IF9hIDwgZWxlbWVudHNfNC5sZW5ndGg7IF9hKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBlbGVtZW50c180W19hXTtcbiAgICAgICAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCd3aWxsLWNoYW5nZScsIHdpbGxDaGFuZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdGFydCB0aGUgYW5pbWF0aW9uIHdpdGggYSB1c2VyIGNvbnRyb2xsZWQgcHJvZ3Jlc3MuXG4gICAgICovXG4gICAgQW5pbWF0b3IucHJvdG90eXBlLnByb2dyZXNzU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGVuc3VyZSBhbGwgcGFzdCB0cmFuc2l0aW9uIGVuZCBldmVudHMgaGF2ZSBiZWVuIGNsZWFyZWRcbiAgICAgICAgdGhpcy5fY2xlYXJBc3luYygpO1xuICAgICAgICAvLyAqKioqKioqKiBET00gUkVBRC9XUklURSAqKioqKioqKioqKioqKioqXG4gICAgICAgIHRoaXMuX2JlZm9yZUFuaW1hdGlvbigpO1xuICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxuICAgICAgICB0aGlzLl9wcm9ncmVzc1N0YXJ0KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBET00gV1JJVEVcbiAgICAgKiBSRUNVUlNJT05cbiAgICAgKi9cbiAgICBBbmltYXRvci5wcm90b3R5cGUuX3Byb2dyZXNzU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuX2NoaWxkQW5pbWF0aW9ucztcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGNoaWxkcmVuXzEwID0gY2hpbGRyZW47IF9pIDwgY2hpbGRyZW5fMTAubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5fMTBbX2ldO1xuICAgICAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgY2hpbGQuX3Byb2dyZXNzU3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBmb3JjZSBubyBkdXJhdGlvbiwgbGluZWFyIGVhc2luZ1xuICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxuICAgICAgICB0aGlzLl9zZXRUcmFucygwLCB0cnVlKTtcbiAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcbiAgICAgICAgdGhpcy5fd2lsbENoYW5nZSh0cnVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgcHJvZ3Jlc3Mgc3RlcCBmb3IgdGhpcyBhbmltYXRpb24uXG4gICAgICogcHJvZ3Jlc3NTdGVwKCkgaXMgbm90IGRlYm91bmNlZCwgc28gaXQgc2hvdWxkIG5vdCBiZSBjYWxsZWQgZmFzdGVyIHRoYW4gNjBGUFMuXG4gICAgICovXG4gICAgQW5pbWF0b3IucHJvdG90eXBlLnByb2dyZXNzU3RlcCA9IGZ1bmN0aW9uIChzdGVwVmFsdWUpIHtcbiAgICAgICAgLy8gb25seSB1cGRhdGUgaWYgdGhlIGxhc3QgdXBkYXRlIHdhcyBtb3JlIHRoYW4gMTZtcyBhZ29cbiAgICAgICAgc3RlcFZhbHVlID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgc3RlcFZhbHVlKSk7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuX2NoaWxkQW5pbWF0aW9ucztcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGNoaWxkcmVuXzExID0gY2hpbGRyZW47IF9pIDwgY2hpbGRyZW5fMTEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5fMTFbX2ldO1xuICAgICAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgY2hpbGQucHJvZ3Jlc3NTdGVwKHN0ZXBWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3Moc3RlcFZhbHVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEVuZCB0aGUgcHJvZ3Jlc3MgYW5pbWF0aW9uLlxuICAgICAqL1xuICAgIEFuaW1hdG9yLnByb3RvdHlwZS5wcm9ncmVzc0VuZCA9IGZ1bmN0aW9uIChzaG91bGRDb21wbGV0ZSwgY3VycmVudFN0ZXBWYWx1ZSwgZHVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChkdXIgPT09IHZvaWQgMCkgeyBkdXIgPSAtMTsgfVxuICAgICAgICBpZiAodGhpcy5faXNSZXZlcnNlKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgYW5pbWF0aW9uIGlzIGdvaW5nIGluIHJldmVyc2UgdGhlblxuICAgICAgICAgICAgLy8gZmxpcCB0aGUgc3RlcCB2YWx1ZTogMCBiZWNvbWVzIDEsIDEgYmVjb21lcyAwXG4gICAgICAgICAgICBjdXJyZW50U3RlcFZhbHVlID0gMSAtIGN1cnJlbnRTdGVwVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0ZXBWYWx1ZSA9IHNob3VsZENvbXBsZXRlID8gMSA6IDA7XG4gICAgICAgIHZhciBkaWZmID0gTWF0aC5hYnMoY3VycmVudFN0ZXBWYWx1ZSAtIHN0ZXBWYWx1ZSk7XG4gICAgICAgIGlmIChkdXIgPCAwKSB7XG4gICAgICAgICAgICBkdXIgPSB0aGlzLl9kdXJhdGlvbiB8fCAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpZmYgPCAwLjA1KSB7XG4gICAgICAgICAgICBkdXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzQXN5bmMgPSAoZHVyID4gMzApO1xuICAgICAgICB0aGlzLl9wcm9ncmVzc0VuZChzaG91bGRDb21wbGV0ZSwgc3RlcFZhbHVlLCBkdXIsIHRoaXMuX2lzQXN5bmMpO1xuICAgICAgICBpZiAodGhpcy5faXNBc3luYykge1xuICAgICAgICAgICAgLy8gZm9yIHRoZSByb290IGFuaW1hdGlvbiBvbmx5XG4gICAgICAgICAgICAvLyBzZXQgdGhlIGFzeW5jIFRSQU5TSVRJT04gRU5EIGV2ZW50XG4gICAgICAgICAgICAvLyBhbmQgcnVuIG9uRmluaXNoZXMgd2hlbiB0aGUgdHJhbnNpdGlvbiBlbmRzXG4gICAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgdGhpcy5fYXN5bmNFbmQoZHVyLCBzaG91bGRDb21wbGV0ZSk7XG4gICAgICAgICAgICAvLyB0aGlzIGFuaW1hdGlvbiBoYXMgYSBkdXJhdGlvbiBzbyB3ZSBuZWVkIGFub3RoZXIgUkFGXG4gICAgICAgICAgICAvLyBmb3IgdGhlIENTUyBUUkFOU0lUSU9OIHByb3BlcnRpZXMgdG8ga2ljayBpblxuICAgICAgICAgICAgaWYgKCF0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgICByYWYoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fcGxheVRvU3RlcChzdGVwVmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBET00gV1JJVEVcbiAgICAgKiBSRUNVUlNJT05cbiAgICAgKi9cbiAgICBBbmltYXRvci5wcm90b3R5cGUuX3Byb2dyZXNzRW5kID0gZnVuY3Rpb24gKHNob3VsZENvbXBsZXRlLCBzdGVwVmFsdWUsIGR1ciwgaXNBc3luYykge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLl9jaGlsZEFuaW1hdGlvbnM7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBjaGlsZHJlbl8xMiA9IGNoaWxkcmVuOyBfaSA8IGNoaWxkcmVuXzEyLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuXzEyW19pXTtcbiAgICAgICAgICAgICAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgICAgIGNoaWxkLl9wcm9ncmVzc0VuZChzaG91bGRDb21wbGV0ZSwgc3RlcFZhbHVlLCBkdXIsIGlzQXN5bmMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghaXNBc3luYykge1xuICAgICAgICAgICAgLy8gc3RvcCBpbW1lZGlhdGVseVxuICAgICAgICAgICAgLy8gc2V0IGFsbCB0aGUgYW5pbWF0aW9ucyB0byB0aGVpciBmaW5hbCBwb3NpdGlvblxuICAgICAgICAgICAgLy8gKioqKioqKiogRE9NIFdSSVRFICoqKioqKioqKioqKioqKipcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyZXNzKHN0ZXBWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLl93aWxsQ2hhbmdlKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuX3NldEFmdGVyU3R5bGVzKCk7XG4gICAgICAgICAgICB0aGlzLl9kaWRGaW5pc2goc2hvdWxkQ29tcGxldGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gYW5pbWF0ZSBpdCBiYWNrIHRvIGl0J3MgZW5kaW5nIHBvc2l0aW9uXG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmhhc0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5faGFzRHVyID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICoqKioqKioqIERPTSBXUklURSAqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICB0aGlzLl93aWxsQ2hhbmdlKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5fc2V0VHJhbnMoZHVyLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZCBhIGNhbGxiYWNrIHRvIGZpcmUgd2hlbiB0aGUgYW5pbWF0aW9uIGhhcyBmaW5pc2hlZC5cbiAgICAgKi9cbiAgICBBbmltYXRvci5wcm90b3R5cGUub25GaW5pc2ggPSBmdW5jdGlvbiAoY2FsbGJhY2ssIG9wdHMpIHtcbiAgICAgICAgaWYgKG9wdHMgJiYgb3B0cy5jbGVhckV4aXN0aW5nQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICB0aGlzLl9vbkZpbmlzaENhbGxiYWNrcyA9IHRoaXMuX29uRmluaXNoT25lVGltZUNhbGxiYWNrcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0cyAmJiBvcHRzLm9uZVRpbWVDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5fb25GaW5pc2hPbmVUaW1lQ2FsbGJhY2tzID0gdGhpcy5fb25GaW5pc2hPbmVUaW1lQ2FsbGJhY2tzIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy5fb25GaW5pc2hPbmVUaW1lQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fb25GaW5pc2hDYWxsYmFja3MgPSB0aGlzLl9vbkZpbmlzaENhbGxiYWNrcyB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMuX29uRmluaXNoQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTk8gRE9NXG4gICAgICogUkVDVVJTSU9OXG4gICAgICovXG4gICAgQW5pbWF0b3IucHJvdG90eXBlLl9kaWRGaW5pc2hBbGwgPSBmdW5jdGlvbiAoaGFzQ29tcGxldGVkLCBmaW5pc2hBc3luY0FuaW1hdGlvbnMsIGZpbmlzaE5vRHVyYXRpb25BbmltYXRpb25zKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuX2NoaWxkQW5pbWF0aW9ucztcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGNoaWxkcmVuXzEzID0gY2hpbGRyZW47IF9pIDwgY2hpbGRyZW5fMTMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5fMTNbX2ldO1xuICAgICAgICAgICAgICAgIGNoaWxkLl9kaWRGaW5pc2hBbGwoaGFzQ29tcGxldGVkLCBmaW5pc2hBc3luY0FuaW1hdGlvbnMsIGZpbmlzaE5vRHVyYXRpb25BbmltYXRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmluaXNoQXN5bmNBbmltYXRpb25zICYmIHRoaXMuX2lzQXN5bmMgfHwgZmluaXNoTm9EdXJhdGlvbkFuaW1hdGlvbnMgJiYgIXRoaXMuX2lzQXN5bmMpIHtcbiAgICAgICAgICAgIHRoaXMuX2RpZEZpbmlzaChoYXNDb21wbGV0ZWQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBOTyBSRUNVUlNJT05cbiAgICAgKi9cbiAgICBBbmltYXRvci5wcm90b3R5cGUuX2RpZEZpbmlzaCA9IGZ1bmN0aW9uIChoYXNDb21wbGV0ZWQpIHtcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYXNDb21wbGV0ZWQgPSBoYXNDb21wbGV0ZWQ7XG4gICAgICAgIGlmICh0aGlzLl9vbkZpbmlzaENhbGxiYWNrcykge1xuICAgICAgICAgICAgLy8gcnVuIGFsbCBmaW5pc2ggY2FsbGJhY2tzXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5fb25GaW5pc2hDYWxsYmFja3M7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9vbkZpbmlzaE9uZVRpbWVDYWxsYmFja3MpIHtcbiAgICAgICAgICAgIC8vIHJ1biBhbGwgXCJvbmV0aW1lXCIgZmluaXNoIGNhbGxiYWNrc1xuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBfYyA9IHRoaXMuX29uRmluaXNoT25lVGltZUNhbGxiYWNrczsgX2IgPCBfYy5sZW5ndGg7IF9iKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBfY1tfYl07XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9vbkZpbmlzaE9uZVRpbWVDYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV2ZXJzZSB0aGUgYW5pbWF0aW9uLlxuICAgICAqL1xuICAgIEFuaW1hdG9yLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gKHNob3VsZFJldmVyc2UpIHtcbiAgICAgICAgaWYgKHNob3VsZFJldmVyc2UgPT09IHZvaWQgMCkgeyBzaG91bGRSZXZlcnNlID0gdHJ1ZTsgfVxuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLl9jaGlsZEFuaW1hdGlvbnM7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBjaGlsZHJlbl8xNCA9IGNoaWxkcmVuOyBfaSA8IGNoaWxkcmVuXzE0Lmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuXzE0W19pXTtcbiAgICAgICAgICAgICAgICBjaGlsZC5yZXZlcnNlKHNob3VsZFJldmVyc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzUmV2ZXJzZSA9ICEhc2hvdWxkUmV2ZXJzZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSBkZXN0cm95IHRoaXMgYW5pbWF0aW9uIGFuZCBhbGwgY2hpbGQgYW5pbWF0aW9ucy5cbiAgICAgKi9cbiAgICBBbmltYXRvci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fZGlkRmluaXNoKGZhbHNlKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5fY2hpbGRBbmltYXRpb25zO1xuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgY2hpbGRyZW5fMTUgPSBjaGlsZHJlbjsgX2kgPCBjaGlsZHJlbl8xNS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbl8xNVtfaV07XG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NsZWFyQXN5bmMoKTtcbiAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnRzKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50cy5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9yZWFkQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWFkQ2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3dyaXRlQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICB0aGlzLl93cml0ZUNhbGxiYWNrcy5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAodGhpcy5fY2hpbGRBbmltYXRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGlsZEFuaW1hdGlvbnMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fb25GaW5pc2hDYWxsYmFja3MpIHtcbiAgICAgICAgICAgIHRoaXMuX29uRmluaXNoQ2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX29uRmluaXNoT25lVGltZUNhbGxiYWNrcykge1xuICAgICAgICAgICAgdGhpcy5fb25GaW5pc2hPbmVUaW1lQ2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE5PIERPTVxuICAgICAqL1xuICAgIEFuaW1hdG9yLnByb3RvdHlwZS5fdHJhbnNFbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZ2V0IHRoZSBsb3dlc3QgbGV2ZWwgZWxlbWVudCB0aGF0IGhhcyBhbiBBbmltYXRvclxuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLl9jaGlsZEFuaW1hdGlvbnM7XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBjaGlsZHJlbl8xNiA9IGNoaWxkcmVuOyBfaSA8IGNoaWxkcmVuXzE2Lmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuXzE2W19pXTtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0RWwgPSBjaGlsZC5fdHJhbnNFbCgpO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRFbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0RWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAodGhpcy5faGFzVHdlZW5FZmZlY3QgJiZcbiAgICAgICAgICAgIHRoaXMuX2hhc0R1ciAmJlxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudHMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudHMubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50c1swXSA6IG51bGwpO1xuICAgIH07XG4gICAgcmV0dXJuIEFuaW1hdG9yO1xufSgpKTtcbnZhciBjcmVhdGUgPSBmdW5jdGlvbiAoYW5pbWF0aW9uQnVpbGRlciwgYmFzZUVsLCBvcHRzKSB7XG4gICAgaWYgKGFuaW1hdGlvbkJ1aWxkZXIpIHtcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvbkJ1aWxkZXIoQW5pbWF0b3IsIGJhc2VFbCwgb3B0cyk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEFuaW1hdG9yKCkpO1xufTtcbmV4cG9ydCB7IGNyZWF0ZSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==