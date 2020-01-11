(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/swiper.bundle-ccdaac54.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/swiper.bundle-ccdaac54.js ***!
  \*************************************************************************/
/*! exports provided: Swiper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return Swiper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * SSR Window 1.0.1
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2018, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: July 18, 2018
 */
var doc = (typeof document === 'undefined') ? {
    body: {},
    addEventListener: function addEventListener() { },
    removeEventListener: function removeEventListener() { },
    activeElement: {
        blur: function blur() { },
        nodeName: '',
    },
    querySelector: function querySelector() {
        return null;
    },
    querySelectorAll: function querySelectorAll() {
        return [];
    },
    getElementById: function getElementById() {
        return null;
    },
    createEvent: function createEvent() {
        return {
            initEvent: function initEvent() { },
        };
    },
    createElement: function createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function setAttribute() { },
            getElementsByTagName: function getElementsByTagName() {
                return [];
            },
        };
    },
    location: { hash: '' },
} : document; // eslint-disable-line
var win = (typeof window === 'undefined') ? {
    document: doc,
    navigator: {
        userAgent: '',
    },
    location: {},
    history: {},
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener: function addEventListener() { },
    removeEventListener: function removeEventListener() { },
    getComputedStyle: function getComputedStyle() {
        return {
            getPropertyValue: function getPropertyValue() {
                return '';
            },
        };
    },
    Image: function Image() { },
    Date: function Date() { },
    screen: {},
    setTimeout: function setTimeout() { },
    clearTimeout: function clearTimeout() { },
} : window; // eslint-disable-line
/**
 * Dom7 2.1.3
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * http://framework7.io/docs/dom.html
 *
 * Copyright 2019, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: February 11, 2019
 */
var Dom7 = /** @class */ (function () {
    function Dom7(arr) {
        var self = this;
        // Create array-like object
        for (var i = 0; i < arr.length; i += 1) {
            self[i] = arr[i];
        }
        self.length = arr.length;
        // Return collection with methods
        return this;
    }
    return Dom7;
}());
function $(selector, context) {
    var arr = [];
    var i = 0;
    if (selector && !context) {
        if (selector instanceof Dom7) {
            return selector;
        }
    }
    if (selector) {
        // String
        if (typeof selector === 'string') {
            var els = void 0;
            var tempParent = void 0;
            var html_1 = selector.trim();
            if (html_1.indexOf('<') >= 0 && html_1.indexOf('>') >= 0) {
                var toCreate = 'div';
                if (html_1.indexOf('<li') === 0)
                    toCreate = 'ul';
                if (html_1.indexOf('<tr') === 0)
                    toCreate = 'tbody';
                if (html_1.indexOf('<td') === 0 || html_1.indexOf('<th') === 0)
                    toCreate = 'tr';
                if (html_1.indexOf('<tbody') === 0)
                    toCreate = 'table';
                if (html_1.indexOf('<option') === 0)
                    toCreate = 'select';
                tempParent = doc.createElement(toCreate);
                tempParent.innerHTML = html_1;
                for (i = 0; i < tempParent.childNodes.length; i += 1) {
                    arr.push(tempParent.childNodes[i]);
                }
            }
            else {
                if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
                    // Pure ID selector
                    els = [doc.getElementById(selector.trim().split('#')[1])];
                }
                else {
                    // Other selectors
                    els = (context || doc).querySelectorAll(selector.trim());
                }
                for (i = 0; i < els.length; i += 1) {
                    if (els[i])
                        arr.push(els[i]);
                }
            }
        }
        else if (selector.nodeType || selector === win || selector === doc) {
            // Node/element
            arr.push(selector);
        }
        else if (selector.length > 0 && selector[0].nodeType) {
            // Array of elements or instance of Dom
            for (i = 0; i < selector.length; i += 1) {
                arr.push(selector[i]);
            }
        }
    }
    return new Dom7(arr);
}
$.fn = Dom7.prototype;
$.Class = Dom7;
$.Dom7 = Dom7;
function unique(arr) {
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i += 1) {
        if (uniqueArray.indexOf(arr[i]) === -1)
            uniqueArray.push(arr[i]);
    }
    return uniqueArray;
}
// Classes and attributes
function addClass(className) {
    if (typeof className === 'undefined') {
        return this;
    }
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
        for (var j = 0; j < this.length; j += 1) {
            if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined')
                this[j].classList.add(classes[i]);
        }
    }
    return this;
}
function removeClass(className) {
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
        for (var j = 0; j < this.length; j += 1) {
            if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined')
                this[j].classList.remove(classes[i]);
        }
    }
    return this;
}
function hasClass(className) {
    if (!this[0])
        return false;
    return this[0].classList.contains(className);
}
function toggleClass(className) {
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
        for (var j = 0; j < this.length; j += 1) {
            if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined')
                this[j].classList.toggle(classes[i]);
        }
    }
    return this;
}
function attr(attrs, value) {
    if (arguments.length === 1 && typeof attrs === 'string') {
        // Get attr
        if (this[0])
            return this[0].getAttribute(attrs);
        return undefined;
    }
    // Set attrs
    for (var i = 0; i < this.length; i += 1) {
        if (arguments.length === 2) {
            // String
            this[i].setAttribute(attrs, value);
        }
        else {
            // Object
            // eslint-disable-next-line
            for (var attrName in attrs) {
                this[i][attrName] = attrs[attrName];
                this[i].setAttribute(attrName, attrs[attrName]);
            }
        }
    }
    return this;
}
// eslint-disable-next-line
function removeAttr(attr) {
    for (var i = 0; i < this.length; i += 1) {
        this[i].removeAttribute(attr);
    }
    return this;
}
function data(key, value) {
    var el;
    if (typeof value === 'undefined') {
        el = this[0];
        // Get value
        if (el) {
            if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
                return el.dom7ElementDataStorage[key];
            }
            var dataKey = el.getAttribute("data-" + key);
            if (dataKey) {
                return dataKey;
            }
            return undefined;
        }
        return undefined;
    }
    // Set value
    for (var i = 0; i < this.length; i += 1) {
        el = this[i];
        if (!el.dom7ElementDataStorage)
            el.dom7ElementDataStorage = {};
        el.dom7ElementDataStorage[key] = value;
    }
    return this;
}
// Transforms
// eslint-disable-next-line
function transform(transform) {
    for (var i = 0; i < this.length; i += 1) {
        var elStyle = this[i].style;
        elStyle.webkitTransform = transform;
        elStyle.transform = transform;
    }
    return this;
}
function transition(duration) {
    if (typeof duration !== 'string') {
        duration = duration + "ms"; // eslint-disable-line
    }
    for (var i = 0; i < this.length; i += 1) {
        var elStyle = this[i].style;
        elStyle.webkitTransitionDuration = duration;
        elStyle.transitionDuration = duration;
    }
    return this;
}
// Events
function on() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var eventType = args[0], targetSelector = args[1], listener = args[2], capture = args[3];
    if (typeof args[1] === 'function') {
        eventType = args[0], listener = args[1], capture = args[2];
        targetSelector = undefined;
    }
    if (!capture)
        capture = false;
    function handleLiveEvent(e) {
        var target = e.target;
        if (!target)
            return;
        var eventData = e.target.dom7EventData || [];
        if (eventData.indexOf(e) < 0) {
            eventData.unshift(e);
        }
        if ($(target).is(targetSelector))
            listener.apply(target, eventData);
        else {
            var parents_1 = $(target).parents(); // eslint-disable-line
            for (var k = 0; k < parents_1.length; k += 1) {
                if ($(parents_1[k]).is(targetSelector))
                    listener.apply(parents_1[k], eventData);
            }
        }
    }
    function handleEvent(e) {
        var eventData = e && e.target ? e.target.dom7EventData || [] : [];
        if (eventData.indexOf(e) < 0) {
            eventData.unshift(e);
        }
        listener.apply(this, eventData);
    }
    var events = eventType.split(' ');
    var j;
    for (var i = 0; i < this.length; i += 1) {
        var el = this[i];
        if (!targetSelector) {
            for (j = 0; j < events.length; j += 1) {
                var event = events[j];
                if (!el.dom7Listeners)
                    el.dom7Listeners = {};
                if (!el.dom7Listeners[event])
                    el.dom7Listeners[event] = [];
                el.dom7Listeners[event].push({
                    listener: listener,
                    proxyListener: handleEvent,
                });
                el.addEventListener(event, handleEvent, capture);
            }
        }
        else {
            // Live events
            for (j = 0; j < events.length; j += 1) {
                var event = events[j];
                if (!el.dom7LiveListeners)
                    el.dom7LiveListeners = {};
                if (!el.dom7LiveListeners[event])
                    el.dom7LiveListeners[event] = [];
                el.dom7LiveListeners[event].push({
                    listener: listener,
                    proxyListener: handleLiveEvent,
                });
                el.addEventListener(event, handleLiveEvent, capture);
            }
        }
    }
    return this;
}
function off() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var eventType = args[0], targetSelector = args[1], listener = args[2], capture = args[3];
    if (typeof args[1] === 'function') {
        eventType = args[0], listener = args[1], capture = args[2];
        targetSelector = undefined;
    }
    if (!capture)
        capture = false;
    var events = eventType.split(' ');
    for (var i = 0; i < events.length; i += 1) {
        var event = events[i];
        for (var j = 0; j < this.length; j += 1) {
            var el = this[j];
            var handlers = void 0;
            if (!targetSelector && el.dom7Listeners) {
                handlers = el.dom7Listeners[event];
            }
            else if (targetSelector && el.dom7LiveListeners) {
                handlers = el.dom7LiveListeners[event];
            }
            if (handlers && handlers.length) {
                for (var k = handlers.length - 1; k >= 0; k -= 1) {
                    var handler = handlers[k];
                    if (listener && handler.listener === listener) {
                        el.removeEventListener(event, handler.proxyListener, capture);
                        handlers.splice(k, 1);
                    }
                    else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                        el.removeEventListener(event, handler.proxyListener, capture);
                        handlers.splice(k, 1);
                    }
                    else if (!listener) {
                        el.removeEventListener(event, handler.proxyListener, capture);
                        handlers.splice(k, 1);
                    }
                }
            }
        }
    }
    return this;
}
function trigger() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var events = args[0].split(' ');
    var eventData = args[1];
    for (var i = 0; i < events.length; i += 1) {
        var event = events[i];
        for (var j = 0; j < this.length; j += 1) {
            var el = this[j];
            var evt = void 0;
            try {
                evt = new win.CustomEvent(event, {
                    detail: eventData,
                    bubbles: true,
                    cancelable: true,
                });
            }
            catch (e) {
                evt = doc.createEvent('Event');
                evt.initEvent(event, true, true);
                evt.detail = eventData;
            }
            // eslint-disable-next-line
            el.dom7EventData = args.filter(function (data, dataIndex) { return dataIndex > 0; });
            el.dispatchEvent(evt);
            el.dom7EventData = [];
            delete el.dom7EventData;
        }
    }
    return this;
}
function transitionEnd(callback) {
    var events = ['webkitTransitionEnd', 'transitionend'];
    var dom = this;
    var i;
    function fireCallBack(e) {
        /* jshint validthis:true */
        if (e.target !== this)
            return;
        callback.call(this, e);
        for (i = 0; i < events.length; i += 1) {
            dom.off(events[i], fireCallBack);
        }
    }
    if (callback) {
        for (i = 0; i < events.length; i += 1) {
            dom.on(events[i], fireCallBack);
        }
    }
    return this;
}
function outerWidth(includeMargins) {
    if (this.length > 0) {
        if (includeMargins) {
            // eslint-disable-next-line
            var styles_1 = this.styles();
            return this[0].offsetWidth + parseFloat(styles_1.getPropertyValue('margin-right')) + parseFloat(styles_1.getPropertyValue('margin-left'));
        }
        return this[0].offsetWidth;
    }
    return null;
}
function outerHeight(includeMargins) {
    if (this.length > 0) {
        if (includeMargins) {
            // eslint-disable-next-line
            var styles_2 = this.styles();
            return this[0].offsetHeight + parseFloat(styles_2.getPropertyValue('margin-top')) + parseFloat(styles_2.getPropertyValue('margin-bottom'));
        }
        return this[0].offsetHeight;
    }
    return null;
}
function offset() {
    if (this.length > 0) {
        var el = this[0];
        var box = el.getBoundingClientRect();
        var body = doc.body;
        var clientTop = el.clientTop || body.clientTop || 0;
        var clientLeft = el.clientLeft || body.clientLeft || 0;
        var scrollTop = el === win ? win.scrollY : el.scrollTop;
        var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
        return {
            top: (box.top + scrollTop) - clientTop,
            left: (box.left + scrollLeft) - clientLeft,
        };
    }
    return null;
}
function styles() {
    if (this[0])
        return win.getComputedStyle(this[0], null);
    return {};
}
function css(props, value) {
    var i;
    if (arguments.length === 1) {
        if (typeof props === 'string') {
            if (this[0])
                return win.getComputedStyle(this[0], null).getPropertyValue(props);
        }
        else {
            for (i = 0; i < this.length; i += 1) {
                // eslint-disable-next-line
                for (var prop in props) {
                    this[i].style[prop] = props[prop];
                }
            }
            return this;
        }
    }
    if (arguments.length === 2 && typeof props === 'string') {
        for (i = 0; i < this.length; i += 1) {
            this[i].style[props] = value;
        }
        return this;
    }
    return this;
}
// Iterate over the collection passing elements to `callback`
function each(callback) {
    // Don't bother continuing without a callback
    if (!callback)
        return this;
    // Iterate over the current collection
    for (var i = 0; i < this.length; i += 1) {
        // If the callback returns false
        if (callback.call(this[i], i, this[i]) === false) {
            // End the loop early
            return this;
        }
    }
    // Return `this` to allow chained DOM operations
    return this;
}
// eslint-disable-next-line
function html(html) {
    if (typeof html === 'undefined') {
        return this[0] ? this[0].innerHTML : undefined;
    }
    for (var i = 0; i < this.length; i += 1) {
        this[i].innerHTML = html;
    }
    return this;
}
// eslint-disable-next-line
function text(text) {
    if (typeof text === 'undefined') {
        if (this[0]) {
            return this[0].textContent.trim();
        }
        return null;
    }
    for (var i = 0; i < this.length; i += 1) {
        this[i].textContent = text;
    }
    return this;
}
function is(selector) {
    var el = this[0];
    var compareWith;
    var i;
    if (!el || typeof selector === 'undefined')
        return false;
    if (typeof selector === 'string') {
        if (el.matches)
            return el.matches(selector);
        else if (el.webkitMatchesSelector)
            return el.webkitMatchesSelector(selector);
        else if (el.msMatchesSelector)
            return el.msMatchesSelector(selector);
        compareWith = $(selector);
        for (i = 0; i < compareWith.length; i += 1) {
            if (compareWith[i] === el)
                return true;
        }
        return false;
    }
    else if (selector === doc)
        return el === doc;
    else if (selector === win)
        return el === win;
    if (selector.nodeType || selector instanceof Dom7) {
        compareWith = selector.nodeType ? [selector] : selector;
        for (i = 0; i < compareWith.length; i += 1) {
            if (compareWith[i] === el)
                return true;
        }
        return false;
    }
    return false;
}
function index() {
    var child = this[0];
    var i;
    if (child) {
        i = 0;
        // eslint-disable-next-line
        while ((child = child.previousSibling) !== null) {
            if (child.nodeType === 1)
                i += 1;
        }
        return i;
    }
    return undefined;
}
// eslint-disable-next-line
function eq(index) {
    if (typeof index === 'undefined')
        return this;
    var length = this.length;
    var returnIndex;
    if (index > length - 1) {
        return new Dom7([]);
    }
    if (index < 0) {
        returnIndex = length + index;
        if (returnIndex < 0)
            return new Dom7([]);
        return new Dom7([this[returnIndex]]);
    }
    return new Dom7([this[index]]);
}
function append() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var newChild;
    for (var k = 0; k < args.length; k += 1) {
        newChild = args[k];
        for (var i = 0; i < this.length; i += 1) {
            if (typeof newChild === 'string') {
                var tempDiv = doc.createElement('div');
                tempDiv.innerHTML = newChild;
                while (tempDiv.firstChild) {
                    this[i].appendChild(tempDiv.firstChild);
                }
            }
            else if (newChild instanceof Dom7) {
                for (var j = 0; j < newChild.length; j += 1) {
                    this[i].appendChild(newChild[j]);
                }
            }
            else {
                this[i].appendChild(newChild);
            }
        }
    }
    return this;
}
function prepend(newChild) {
    var i;
    var j;
    for (i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
            var tempDiv = doc.createElement('div');
            tempDiv.innerHTML = newChild;
            for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
                this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
            }
        }
        else if (newChild instanceof Dom7) {
            for (j = 0; j < newChild.length; j += 1) {
                this[i].insertBefore(newChild[j], this[i].childNodes[0]);
            }
        }
        else {
            this[i].insertBefore(newChild, this[i].childNodes[0]);
        }
    }
    return this;
}
function next(selector) {
    if (this.length > 0) {
        if (selector) {
            if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
                return new Dom7([this[0].nextElementSibling]);
            }
            return new Dom7([]);
        }
        if (this[0].nextElementSibling)
            return new Dom7([this[0].nextElementSibling]);
        return new Dom7([]);
    }
    return new Dom7([]);
}
function nextAll(selector) {
    var nextEls = [];
    var el = this[0];
    if (!el)
        return new Dom7([]);
    while (el.nextElementSibling) {
        var next_1 = el.nextElementSibling; // eslint-disable-line
        if (selector) {
            if ($(next_1).is(selector))
                nextEls.push(next_1);
        }
        else
            nextEls.push(next_1);
        el = next_1;
    }
    return new Dom7(nextEls);
}
function prev(selector) {
    if (this.length > 0) {
        var el = this[0];
        if (selector) {
            if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
                return new Dom7([el.previousElementSibling]);
            }
            return new Dom7([]);
        }
        if (el.previousElementSibling)
            return new Dom7([el.previousElementSibling]);
        return new Dom7([]);
    }
    return new Dom7([]);
}
function prevAll(selector) {
    var prevEls = [];
    var el = this[0];
    if (!el)
        return new Dom7([]);
    while (el.previousElementSibling) {
        var prev_1 = el.previousElementSibling; // eslint-disable-line
        if (selector) {
            if ($(prev_1).is(selector))
                prevEls.push(prev_1);
        }
        else
            prevEls.push(prev_1);
        el = prev_1;
    }
    return new Dom7(prevEls);
}
function parent(selector) {
    var parents = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
        if (this[i].parentNode !== null) {
            if (selector) {
                if ($(this[i].parentNode).is(selector))
                    parents.push(this[i].parentNode);
            }
            else {
                parents.push(this[i].parentNode);
            }
        }
    }
    return $(unique(parents));
}
function parents(selector) {
    var parents = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
        var parent_1 = this[i].parentNode; // eslint-disable-line
        while (parent_1) {
            if (selector) {
                if ($(parent_1).is(selector))
                    parents.push(parent_1);
            }
            else {
                parents.push(parent_1);
            }
            parent_1 = parent_1.parentNode;
        }
    }
    return $(unique(parents));
}
function closest(selector) {
    var closest = this; // eslint-disable-line
    if (typeof selector === 'undefined') {
        return new Dom7([]);
    }
    if (!closest.is(selector)) {
        closest = closest.parents(selector).eq(0);
    }
    return closest;
}
function find(selector) {
    var foundElements = [];
    for (var i = 0; i < this.length; i += 1) {
        var found = this[i].querySelectorAll(selector);
        for (var j = 0; j < found.length; j += 1) {
            foundElements.push(found[j]);
        }
    }
    return new Dom7(foundElements);
}
function children(selector) {
    var children = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
        var childNodes = this[i].childNodes;
        for (var j = 0; j < childNodes.length; j += 1) {
            if (!selector) {
                if (childNodes[j].nodeType === 1)
                    children.push(childNodes[j]);
            }
            else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
                children.push(childNodes[j]);
            }
        }
    }
    return new Dom7(unique(children));
}
function remove() {
    for (var i = 0; i < this.length; i += 1) {
        if (this[i].parentNode)
            this[i].parentNode.removeChild(this[i]);
    }
    return this;
}
function add() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var dom = this;
    var i;
    var j;
    for (i = 0; i < args.length; i += 1) {
        var toAdd = $(args[i]);
        for (j = 0; j < toAdd.length; j += 1) {
            dom[dom.length] = toAdd[j];
            dom.length += 1;
        }
    }
    return dom;
}
/**
 * Swiper 4.5.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 13, 2019
 */
var Methods = {
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    attr: attr,
    removeAttr: removeAttr,
    data: data,
    transform: transform,
    transition: transition,
    on: on,
    off: off,
    trigger: trigger,
    transitionEnd: transitionEnd,
    outerWidth: outerWidth,
    outerHeight: outerHeight,
    offset: offset,
    css: css,
    each: each,
    html: html,
    text: text,
    is: is,
    index: index,
    eq: eq,
    append: append,
    prepend: prepend,
    next: next,
    nextAll: nextAll,
    prev: prev,
    prevAll: prevAll,
    parent: parent,
    parents: parents,
    closest: closest,
    find: find,
    children: children,
    remove: remove,
    add: add,
    styles: styles,
};
Object.keys(Methods).forEach(function (methodName) {
    $.fn[methodName] = $.fn[methodName] || Methods[methodName];
});
var Utils = {
    deleteProps: function (obj) {
        var object = obj;
        Object.keys(object).forEach(function (key) {
            try {
                object[key] = null;
            }
            catch (e) {
                // no getter for object
            }
            try {
                delete object[key];
            }
            catch (e) {
                // something got wrong
            }
        });
    },
    nextTick: function (callback, delay) {
        if (delay === void 0) { delay = 0; }
        return setTimeout(callback, delay);
    },
    now: function () {
        return Date.now();
    },
    getTranslate: function (el, axis) {
        if (axis === void 0) { axis = 'x'; }
        var matrix;
        var curTransform;
        var transformMatrix;
        var curStyle = win.getComputedStyle(el, null);
        if (win.WebKitCSSMatrix) {
            curTransform = curStyle.transform || curStyle.webkitTransform;
            if (curTransform.split(',').length > 6) {
                curTransform = curTransform.split(', ').map(function (a) { return a.replace(',', '.'); }).join(', ');
            }
            // Some old versions of Webkit choke when 'none' is passed; pass
            // empty string instead in this case
            transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
        }
        else {
            transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
            matrix = transformMatrix.toString().split(',');
        }
        if (axis === 'x') {
            // Latest Chrome and webkits Fix
            if (win.WebKitCSSMatrix)
                curTransform = transformMatrix.m41;
            // Crazy IE10 Matrix
            else if (matrix.length === 16)
                curTransform = parseFloat(matrix[12]);
            // Normal Browsers
            else
                curTransform = parseFloat(matrix[4]);
        }
        if (axis === 'y') {
            // Latest Chrome and webkits Fix
            if (win.WebKitCSSMatrix)
                curTransform = transformMatrix.m42;
            // Crazy IE10 Matrix
            else if (matrix.length === 16)
                curTransform = parseFloat(matrix[13]);
            // Normal Browsers
            else
                curTransform = parseFloat(matrix[5]);
        }
        return curTransform || 0;
    },
    parseUrlQuery: function (url) {
        var query = {};
        var urlToParse = url || win.location.href;
        var i;
        var params;
        var param;
        var length;
        if (typeof urlToParse === 'string' && urlToParse.length) {
            urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
            params = urlToParse.split('&').filter(function (paramsPart) { return paramsPart !== ''; });
            length = params.length;
            for (i = 0; i < length; i += 1) {
                param = params[i].replace(/#\S+/g, '').split('=');
                query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
            }
        }
        return query;
    },
    isObject: function (o) {
        return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
    },
    extend: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var to = Object(args[0]);
        for (var i = 1; i < args.length; i += 1) {
            var nextSource = args[i];
            if (nextSource !== undefined && nextSource !== null) {
                var keysArray = Object.keys(Object(nextSource));
                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                    var nextKey = keysArray[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== undefined && desc.enumerable) {
                        if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                            Utils.extend(to[nextKey], nextSource[nextKey]);
                        }
                        else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            Utils.extend(to[nextKey], nextSource[nextKey]);
                        }
                        else {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
        }
        return to;
    },
};
var Support = (function Support() {
    var testDiv = doc.createElement('div');
    return {
        touch: (win.Modernizr && win.Modernizr.touch === true) || (function checkTouch() {
            return !!((win.navigator.maxTouchPoints > 0) || ('ontouchstart' in win) || (win.DocumentTouch && doc instanceof win.DocumentTouch));
        }()),
        pointerEvents: !!(win.navigator.pointerEnabled || win.PointerEvent || ('maxTouchPoints' in win.navigator && win.navigator.maxTouchPoints > 0)),
        prefixedPointerEvents: !!win.navigator.msPointerEnabled,
        transition: (function checkTransition() {
            var style = testDiv.style;
            return ('transition' in style || 'webkitTransition' in style || 'MozTransition' in style);
        }()),
        transforms3d: (win.Modernizr && win.Modernizr.csstransforms3d === true) || (function checkTransforms3d() {
            var style = testDiv.style;
            return ('webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style);
        }()),
        flexbox: (function checkFlexbox() {
            var style = testDiv.style;
            var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
            for (var i = 0; i < styles.length; i += 1) {
                if (styles[i] in style)
                    return true;
            }
            return false;
        }()),
        observer: (function checkObserver() {
            return ('MutationObserver' in win || 'WebkitMutationObserver' in win);
        }()),
        passiveListener: (function checkPassiveListener() {
            var supportsPassive = false;
            try {
                var opts = Object.defineProperty({}, 'passive', {
                    // eslint-disable-next-line
                    get: function () {
                        supportsPassive = true;
                    },
                });
                win.addEventListener('testPassiveListener', null, opts);
            }
            catch (e) {
                // No support
            }
            return supportsPassive;
        }()),
        gestures: (function checkGestures() {
            return 'ongesturestart' in win;
        }()),
    };
}());
var Browser = (function Browser() {
    function isSafari() {
        var ua = win.navigator.userAgent.toLowerCase();
        return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
    }
    return {
        isIE: !!win.navigator.userAgent.match(/Trident/g) || !!win.navigator.userAgent.match(/MSIE/g),
        isEdge: !!win.navigator.userAgent.match(/Edge/g),
        isSafari: isSafari(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),
    };
}());
var SwiperClass = /** @class */ (function () {
    function SwiperClass(params) {
        if (params === void 0) { params = {}; }
        var self = this;
        self.params = params;
        // Events
        self.eventsListeners = {};
        if (self.params && self.params.on) {
            Object.keys(self.params.on).forEach(function (eventName) {
                self.on(eventName, self.params.on[eventName]);
            });
        }
    }
    SwiperClass.prototype.on = function (events, handler, priority) {
        var self = this;
        if (typeof handler !== 'function')
            return self;
        var method = priority ? 'unshift' : 'push';
        events.split(' ').forEach(function (event) {
            if (!self.eventsListeners[event])
                self.eventsListeners[event] = [];
            self.eventsListeners[event][method](handler);
        });
        return self;
    };
    SwiperClass.prototype.once = function (events, handler, priority) {
        var self = this;
        if (typeof handler !== 'function')
            return self;
        function onceHandler() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            handler.apply(self, args);
            self.off(events, onceHandler);
            if (onceHandler.f7proxy) {
                delete onceHandler.f7proxy;
            }
        }
        onceHandler.f7proxy = handler;
        return self.on(events, onceHandler, priority);
    };
    SwiperClass.prototype.off = function (events, handler) {
        var self = this;
        if (!self.eventsListeners)
            return self;
        events.split(' ').forEach(function (event) {
            if (typeof handler === 'undefined') {
                self.eventsListeners[event] = [];
            }
            else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
                self.eventsListeners[event].forEach(function (eventHandler, index) {
                    if (eventHandler === handler || (eventHandler.f7proxy && eventHandler.f7proxy === handler)) {
                        self.eventsListeners[event].splice(index, 1);
                    }
                });
            }
        });
        return self;
    };
    SwiperClass.prototype.emit = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var self = this;
        if (!self.eventsListeners)
            return self;
        var events;
        var data;
        var context;
        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        }
        else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        var eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach(function (event) {
            if (self.eventsListeners && self.eventsListeners[event]) {
                var handlers_1 = [];
                self.eventsListeners[event].forEach(function (eventHandler) {
                    handlers_1.push(eventHandler);
                });
                handlers_1.forEach(function (eventHandler) {
                    eventHandler.apply(context, data);
                });
            }
        });
        return self;
    };
    SwiperClass.prototype.useModulesParams = function (instanceParams) {
        var instance = this;
        if (!instance.modules)
            return;
        Object.keys(instance.modules).forEach(function (moduleName) {
            var module = instance.modules[moduleName];
            // Extend params
            if (module.params) {
                Utils.extend(instanceParams, module.params);
            }
        });
    };
    SwiperClass.prototype.useModules = function (modulesParams) {
        if (modulesParams === void 0) { modulesParams = {}; }
        var instance = this;
        if (!instance.modules)
            return;
        Object.keys(instance.modules).forEach(function (moduleName) {
            var module = instance.modules[moduleName];
            var moduleParams = modulesParams[moduleName] || {};
            // Extend instance methods and props
            if (module.instance) {
                Object.keys(module.instance).forEach(function (modulePropName) {
                    var moduleProp = module.instance[modulePropName];
                    if (typeof moduleProp === 'function') {
                        instance[modulePropName] = moduleProp.bind(instance);
                    }
                    else {
                        instance[modulePropName] = moduleProp;
                    }
                });
            }
            // Add event listeners
            if (module.on && instance.on) {
                Object.keys(module.on).forEach(function (moduleEventName) {
                    instance.on(moduleEventName, module.on[moduleEventName]);
                });
            }
            // Module create callback
            if (module.create) {
                module.create.bind(instance)(moduleParams);
            }
        });
    };
    Object.defineProperty(SwiperClass, "components", {
        set: function (components) {
            var Class = this;
            if (!Class.use)
                return;
            Class.use(components);
        },
        enumerable: true,
        configurable: true
    });
    SwiperClass.installModule = function (module) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var Class = this;
        if (!Class.prototype.modules)
            Class.prototype.modules = {};
        var name = module.name || (Object.keys(Class.prototype.modules).length + "_" + Utils.now());
        Class.prototype.modules[name] = module;
        // Prototype
        if (module.proto) {
            Object.keys(module.proto).forEach(function (key) {
                Class.prototype[key] = module.proto[key];
            });
        }
        // Class
        if (module.static) {
            Object.keys(module.static).forEach(function (key) {
                Class[key] = module.static[key];
            });
        }
        // Callback
        if (module.install) {
            module.install.apply(Class, params);
        }
        return Class;
    };
    SwiperClass.use = function (module) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var Class = this;
        if (Array.isArray(module)) {
            module.forEach(function (m) { return Class.installModule(m); });
            return Class;
        }
        return Class.installModule.apply(Class, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([module], params));
    };
    return SwiperClass;
}());
function updateSize() {
    var swiper = this;
    var width;
    var height;
    var $el = swiper.$el;
    if (typeof swiper.params.width !== 'undefined') {
        width = swiper.params.width;
    }
    else {
        width = $el[0].clientWidth;
    }
    if (typeof swiper.params.height !== 'undefined') {
        height = swiper.params.height;
    }
    else {
        height = $el[0].clientHeight;
    }
    if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
        return;
    }
    // Subtract paddings
    width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
    height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);
    Utils.extend(swiper, {
        width: width,
        height: height,
        size: swiper.isHorizontal() ? width : height,
    });
}
function updateSlides() {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl, swiperSize = swiper.size, rtl = swiper.rtlTranslate, wrongRTL = swiper.wrongRTL;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    var slides = $wrapperEl.children("." + swiper.params.slideClass);
    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    var snapGrid = [];
    var slidesGrid = [];
    var slidesSizesGrid = [];
    var offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') {
        offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    var offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') {
        offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    var previousSnapGridLength = swiper.snapGrid.length;
    var previousSlidesGridLength = swiper.snapGrid.length;
    var spaceBetween = params.spaceBetween;
    var slidePosition = -offsetBefore;
    var prevSlideSize = 0;
    var index = 0;
    if (typeof swiperSize === 'undefined') {
        return;
    }
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
        spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
    }
    swiper.virtualSize = -spaceBetween;
    // reset margins
    if (rtl)
        slides.css({ marginLeft: '', marginTop: '' });
    else
        slides.css({ marginRight: '', marginBottom: '' });
    var slidesNumberEvenToRows;
    if (params.slidesPerColumn > 1) {
        if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
            slidesNumberEvenToRows = slidesLength;
        }
        else {
            slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
        }
        if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
            slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
        }
    }
    // Calc slides
    var slideSize;
    var slidesPerColumn = params.slidesPerColumn;
    var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
    var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
    for (var i = 0; i < slidesLength; i += 1) {
        slideSize = 0;
        var slide_1 = slides.eq(i);
        if (params.slidesPerColumn > 1) {
            // Set slides order
            var newSlideOrderIndex = void 0;
            var column = void 0;
            var row = void 0;
            if ((params.slidesPerColumnFill === 'column')
                || (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1)) {
                if (params.slidesPerColumnFill === 'column') {
                    column = Math.floor(i / slidesPerColumn);
                    row = i - (column * slidesPerColumn);
                    if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
                        row += 1;
                        if (row >= slidesPerColumn) {
                            row = 0;
                            column += 1;
                        }
                    }
                }
                else {
                    var groupIndex = Math.floor(i / params.slidesPerGroup);
                    row = Math.floor(i / params.slidesPerView) - groupIndex * params.slidesPerColumn;
                    column = i - row * params.slidesPerView - groupIndex * params.slidesPerView;
                }
                newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
                slide_1
                    .css({
                    '-webkit-box-ordinal-group': newSlideOrderIndex,
                    '-moz-box-ordinal-group': newSlideOrderIndex,
                    '-ms-flex-order': newSlideOrderIndex,
                    '-webkit-order': newSlideOrderIndex,
                    order: newSlideOrderIndex,
                });
            }
            else {
                row = Math.floor(i / slidesPerRow);
                column = i - (row * slidesPerRow);
            }
            slide_1
                .css("margin-" + (swiper.isHorizontal() ? 'top' : 'left'), (row !== 0 && params.spaceBetween) && (params.spaceBetween + "px"))
                .attr('data-swiper-column', column)
                .attr('data-swiper-row', row);
        }
        if (slide_1.css('display') === 'none')
            continue; // eslint-disable-line
        if (params.slidesPerView === 'auto') {
            var slideStyles = win.getComputedStyle(slide_1[0], null);
            var currentTransform = slide_1[0].style.transform;
            var currentWebKitTransform = slide_1[0].style.webkitTransform;
            if (currentTransform) {
                slide_1[0].style.transform = 'none';
            }
            if (currentWebKitTransform) {
                slide_1[0].style.webkitTransform = 'none';
            }
            if (params.roundLengths) {
                slideSize = swiper.isHorizontal()
                    ? slide_1.outerWidth(true)
                    : slide_1.outerHeight(true);
            }
            else {
                // eslint-disable-next-line
                if (swiper.isHorizontal()) {
                    var width = parseFloat(slideStyles.getPropertyValue('width'));
                    var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
                    var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
                    var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
                    var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
                    var boxSizing = slideStyles.getPropertyValue('box-sizing');
                    if (boxSizing && boxSizing === 'border-box' && !Browser.isIE) {
                        slideSize = width + marginLeft + marginRight;
                    }
                    else {
                        slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
                    }
                }
                else {
                    var height = parseFloat(slideStyles.getPropertyValue('height'));
                    var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
                    var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
                    var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
                    var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
                    var boxSizing = slideStyles.getPropertyValue('box-sizing');
                    if (boxSizing && boxSizing === 'border-box' && !Browser.isIE) {
                        slideSize = height + marginTop + marginBottom;
                    }
                    else {
                        slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
                    }
                }
            }
            if (currentTransform) {
                slide_1[0].style.transform = currentTransform;
            }
            if (currentWebKitTransform) {
                slide_1[0].style.webkitTransform = currentWebKitTransform;
            }
            if (params.roundLengths)
                slideSize = Math.floor(slideSize);
        }
        else {
            slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
            if (params.roundLengths)
                slideSize = Math.floor(slideSize);
            if (slides[i]) {
                if (swiper.isHorizontal()) {
                    slides[i].style.width = slideSize + "px";
                }
                else {
                    slides[i].style.height = slideSize + "px";
                }
            }
        }
        if (slides[i]) {
            slides[i].swiperSlideSize = slideSize;
        }
        slidesSizesGrid.push(slideSize);
        if (params.centeredSlides) {
            slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
            if (prevSlideSize === 0 && i !== 0)
                slidePosition = slidePosition - (swiperSize / 2) - spaceBetween;
            if (i === 0)
                slidePosition = slidePosition - (swiperSize / 2) - spaceBetween;
            if (Math.abs(slidePosition) < 1 / 1000)
                slidePosition = 0;
            if (params.roundLengths)
                slidePosition = Math.floor(slidePosition);
            if ((index) % params.slidesPerGroup === 0)
                snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
        }
        else {
            if (params.roundLengths)
                slidePosition = Math.floor(slidePosition);
            if ((index) % params.slidesPerGroup === 0)
                snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
            slidePosition = slidePosition + slideSize + spaceBetween;
        }
        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    var newSlidesGrid;
    if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
        $wrapperEl.css({ width: swiper.virtualSize + params.spaceBetween + "px" });
    }
    if (!Support.flexbox || params.setWrapperSize) {
        if (swiper.isHorizontal())
            $wrapperEl.css({ width: swiper.virtualSize + params.spaceBetween + "px" });
        else
            $wrapperEl.css({ height: swiper.virtualSize + params.spaceBetween + "px" });
    }
    if (params.slidesPerColumn > 1) {
        swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
        if (swiper.isHorizontal())
            $wrapperEl.css({ width: swiper.virtualSize + params.spaceBetween + "px" });
        else
            $wrapperEl.css({ height: swiper.virtualSize + params.spaceBetween + "px" });
        if (params.centeredSlides) {
            newSlidesGrid = [];
            for (var i = 0; i < snapGrid.length; i += 1) {
                var slidesGridItem = snapGrid[i];
                if (params.roundLengths)
                    slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[i] < swiper.virtualSize + snapGrid[0])
                    newSlidesGrid.push(slidesGridItem);
            }
            snapGrid = newSlidesGrid;
        }
    }
    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
        newSlidesGrid = [];
        for (var i = 0; i < snapGrid.length; i += 1) {
            var slidesGridItem = snapGrid[i];
            if (params.roundLengths)
                slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
                newSlidesGrid.push(slidesGridItem);
            }
        }
        snapGrid = newSlidesGrid;
        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
            snapGrid.push(swiper.virtualSize - swiperSize);
        }
    }
    if (snapGrid.length === 0)
        snapGrid = [0];
    if (params.spaceBetween !== 0) {
        if (swiper.isHorizontal()) {
            if (rtl)
                slides.css({ marginLeft: spaceBetween + "px" });
            else
                slides.css({ marginRight: spaceBetween + "px" });
        }
        else
            slides.css({ marginBottom: spaceBetween + "px" });
    }
    if (params.centerInsufficientSlides) {
        var allSlidesSize_1 = 0;
        slidesSizesGrid.forEach(function (slideSizeValue) {
            allSlidesSize_1 += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize_1 -= params.spaceBetween;
        if (allSlidesSize_1 < swiperSize) {
            var allSlidesOffset_1 = (swiperSize - allSlidesSize_1) / 2;
            snapGrid.forEach(function (snap, snapIndex) {
                snapGrid[snapIndex] = snap - allSlidesOffset_1;
            });
            slidesGrid.forEach(function (snap, snapIndex) {
                slidesGrid[snapIndex] = snap + allSlidesOffset_1;
            });
        }
    }
    Utils.extend(swiper, {
        slides: slides,
        snapGrid: snapGrid,
        slidesGrid: slidesGrid,
        slidesSizesGrid: slidesSizesGrid,
    });
    if (slidesLength !== previousSlidesLength) {
        swiper.emit('slidesLengthChange');
    }
    if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow)
            swiper.checkOverflow();
        swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
        swiper.emit('slidesGridLengthChange');
    }
    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
        swiper.updateSlidesOffset();
    }
}
function updateAutoHeight(speed) {
    var swiper = this;
    var activeSlides = [];
    var newHeight = 0;
    var i;
    if (typeof speed === 'number') {
        swiper.setTransition(speed);
    }
    else if (speed === true) {
        swiper.setTransition(swiper.params.speed);
    }
    // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
            var index_1 = swiper.activeIndex + i;
            if (index_1 > swiper.slides.length)
                break;
            activeSlides.push(swiper.slides.eq(index_1)[0]);
        }
    }
    else {
        activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
    }
    // Find new height from highest slide in view
    for (i = 0; i < activeSlides.length; i += 1) {
        if (typeof activeSlides[i] !== 'undefined') {
            var height = activeSlides[i].offsetHeight;
            newHeight = height > newHeight ? height : newHeight;
        }
    }
    // Update Height
    if (newHeight)
        swiper.$wrapperEl.css('height', newHeight + "px");
}
function updateSlidesOffset() {
    var swiper = this;
    var slides = swiper.slides;
    for (var i = 0; i < slides.length; i += 1) {
        slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
    }
}
function updateSlidesProgress(translate) {
    if (translate === void 0) { translate = (this && this.translate) || 0; }
    var swiper = this;
    var params = swiper.params;
    var slides = swiper.slides, rtl = swiper.rtlTranslate;
    if (slides.length === 0)
        return;
    if (typeof slides[0].swiperSlideOffset === 'undefined')
        swiper.updateSlidesOffset();
    var offsetCenter = -translate;
    if (rtl)
        offsetCenter = translate;
    // Visible Slides
    slides.removeClass(params.slideVisibleClass);
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    for (var i = 0; i < slides.length; i += 1) {
        var slide_2 = slides[i];
        var slideProgress = ((offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide_2.swiperSlideOffset) / (slide_2.swiperSlideSize + params.spaceBetween);
        if (params.watchSlidesVisibility) {
            var slideBefore = -(offsetCenter - slide_2.swiperSlideOffset);
            var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
            var isVisible = (slideBefore >= 0 && slideBefore < swiper.size - 1)
                || (slideAfter > 1 && slideAfter <= swiper.size)
                || (slideBefore <= 0 && slideAfter >= swiper.size);
            if (isVisible) {
                swiper.visibleSlides.push(slide_2);
                swiper.visibleSlidesIndexes.push(i);
                slides.eq(i).addClass(params.slideVisibleClass);
            }
        }
        slide_2.progress = rtl ? -slideProgress : slideProgress;
    }
    swiper.visibleSlides = $(swiper.visibleSlides);
}
function updateProgress(translate) {
    if (translate === void 0) { translate = (this && this.translate) || 0; }
    var swiper = this;
    var params = swiper.params;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    var progress = swiper.progress, isBeginning = swiper.isBeginning, isEnd = swiper.isEnd;
    var wasBeginning = isBeginning;
    var wasEnd = isEnd;
    if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
    }
    else {
        progress = (translate - swiper.minTranslate()) / (translatesDiff);
        isBeginning = progress <= 0;
        isEnd = progress >= 1;
    }
    Utils.extend(swiper, {
        progress: progress,
        isBeginning: isBeginning,
        isEnd: isEnd,
    });
    if (params.watchSlidesProgress || params.watchSlidesVisibility)
        swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) {
        swiper.emit('reachBeginning toEdge');
    }
    if (isEnd && !wasEnd) {
        swiper.emit('reachEnd toEdge');
    }
    if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
        swiper.emit('fromEdge');
    }
    swiper.emit('progress', progress);
}
function updateSlidesClasses() {
    var swiper = this;
    var slides = swiper.slides, params = swiper.params, $wrapperEl = swiper.$wrapperEl, activeIndex = swiper.activeIndex, realIndex = swiper.realIndex;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
    var activeSlide;
    if (isVirtual) {
        activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
    }
    else {
        activeSlide = slides.eq(activeIndex);
    }
    // Active classes
    activeSlide.addClass(params.slideActiveClass);
    if (params.loop) {
        // Duplicate to all looped slides
        if (activeSlide.hasClass(params.slideDuplicateClass)) {
            $wrapperEl
                .children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]")
                .addClass(params.slideDuplicateActiveClass);
        }
        else {
            $wrapperEl
                .children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]")
                .addClass(params.slideDuplicateActiveClass);
        }
    }
    // Next Slide
    var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
        nextSlide = slides.eq(0);
        nextSlide.addClass(params.slideNextClass);
    }
    // Prev Slide
    var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
        prevSlide = slides.eq(-1);
        prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
        // Duplicate to all looped slides
        if (nextSlide.hasClass(params.slideDuplicateClass)) {
            $wrapperEl
                .children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]")
                .addClass(params.slideDuplicateNextClass);
        }
        else {
            $wrapperEl
                .children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]")
                .addClass(params.slideDuplicateNextClass);
        }
        if (prevSlide.hasClass(params.slideDuplicateClass)) {
            $wrapperEl
                .children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]")
                .addClass(params.slideDuplicatePrevClass);
        }
        else {
            $wrapperEl
                .children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]")
                .addClass(params.slideDuplicatePrevClass);
        }
    }
}
function updateActiveIndex(newActiveIndex) {
    var swiper = this;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var slidesGrid = swiper.slidesGrid, snapGrid = swiper.snapGrid, params = swiper.params, previousIndex = swiper.activeIndex, previousRealIndex = swiper.realIndex, previousSnapIndex = swiper.snapIndex;
    var activeIndex = newActiveIndex;
    var snapIndex;
    if (typeof activeIndex === 'undefined') {
        for (var i = 0; i < slidesGrid.length; i += 1) {
            if (typeof slidesGrid[i + 1] !== 'undefined') {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
                    activeIndex = i;
                }
                else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
                    activeIndex = i + 1;
                }
            }
            else if (translate >= slidesGrid[i]) {
                activeIndex = i;
            }
        }
        // Normalize slideIndex
        if (params.normalizeSlideIndex) {
            if (activeIndex < 0 || typeof activeIndex === 'undefined')
                activeIndex = 0;
        }
    }
    if (snapGrid.indexOf(translate) >= 0) {
        snapIndex = snapGrid.indexOf(translate);
    }
    else {
        snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length)
        snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
            swiper.snapIndex = snapIndex;
            swiper.emit('snapIndexChange');
        }
        return;
    }
    // Get real index
    var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
    Utils.extend(swiper, {
        snapIndex: snapIndex,
        realIndex: realIndex,
        previousIndex: previousIndex,
        activeIndex: activeIndex,
    });
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (previousRealIndex !== realIndex) {
        swiper.emit('realIndexChange');
    }
    if (swiper.initialized || swiper.runCallbacksOnInit) {
        swiper.emit('slideChange');
    }
}
function updateClickedSlide(e) {
    var swiper = this;
    var params = swiper.params;
    var slide = $(e.target).closest("." + params.slideClass)[0];
    var slideFound = false;
    if (slide) {
        for (var i = 0; i < swiper.slides.length; i += 1) {
            if (swiper.slides[i] === slide)
                slideFound = true;
        }
    }
    if (slide && slideFound) {
        swiper.clickedSlide = slide;
        if (swiper.virtual && swiper.params.virtual.enabled) {
            swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
        }
        else {
            swiper.clickedIndex = $(slide).index();
        }
    }
    else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
        swiper.slideToClickedSlide();
    }
}
var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide,
};
function getTranslate(axis) {
    if (axis === void 0) { axis = this.isHorizontal() ? 'x' : 'y'; }
    var swiper = this;
    var params = swiper.params, rtl = swiper.rtlTranslate, translate = swiper.translate, $wrapperEl = swiper.$wrapperEl;
    if (params.virtualTranslate) {
        return rtl ? -translate : translate;
    }
    var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
    if (rtl)
        currentTranslate = -currentTranslate;
    return currentTranslate || 0;
}
function setTranslate(translate, byController) {
    var swiper = this;
    var rtl = swiper.rtlTranslate, params = swiper.params, $wrapperEl = swiper.$wrapperEl, progress = swiper.progress;
    var x = 0;
    var y = 0;
    var z = 0;
    if (swiper.isHorizontal()) {
        x = rtl ? -translate : translate;
    }
    else {
        y = translate;
    }
    if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
    }
    if (!params.virtualTranslate) {
        if (Support.transforms3d)
            $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
        else
            $wrapperEl.transform("translate(" + x + "px, " + y + "px)");
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    // Check if we need to update progress
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
        newProgress = 0;
    }
    else {
        newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
    }
    if (newProgress !== progress) {
        swiper.updateProgress(translate);
    }
    swiper.emit('setTranslate', swiper.translate, byController);
}
function minTranslate() {
    return (-this.snapGrid[0]);
}
function maxTranslate() {
    return (-this.snapGrid[this.snapGrid.length - 1]);
}
var translate = {
    getTranslate: getTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
};
function setTransition(duration, byController) {
    var swiper = this;
    swiper.$wrapperEl.transition(duration);
    swiper.emit('setTransition', duration, byController);
}
function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) { runCallbacks = true; }
    var swiper = this;
    var activeIndex = swiper.activeIndex, params = swiper.params, previousIndex = swiper.previousIndex;
    if (params.autoHeight) {
        swiper.updateAutoHeight();
    }
    var dir = direction;
    if (!dir) {
        if (activeIndex > previousIndex)
            dir = 'next';
        else if (activeIndex < previousIndex)
            dir = 'prev';
        else
            dir = 'reset';
    }
    swiper.emit('transitionStart');
    if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
            swiper.emit('slideResetTransitionStart');
            return;
        }
        swiper.emit('slideChangeTransitionStart');
        if (dir === 'next') {
            swiper.emit('slideNextTransitionStart');
        }
        else {
            swiper.emit('slidePrevTransitionStart');
        }
    }
}
function transitionEnd$1(runCallbacks, direction) {
    if (runCallbacks === void 0) { runCallbacks = true; }
    var swiper = this;
    var activeIndex = swiper.activeIndex, previousIndex = swiper.previousIndex;
    swiper.animating = false;
    swiper.setTransition(0);
    var dir = direction;
    if (!dir) {
        if (activeIndex > previousIndex)
            dir = 'next';
        else if (activeIndex < previousIndex)
            dir = 'prev';
        else
            dir = 'reset';
    }
    swiper.emit('transitionEnd');
    if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
            swiper.emit('slideResetTransitionEnd');
            return;
        }
        swiper.emit('slideChangeTransitionEnd');
        if (dir === 'next') {
            swiper.emit('slideNextTransitionEnd');
        }
        else {
            swiper.emit('slidePrevTransitionEnd');
        }
    }
}
var transition$1 = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd$1,
};
function slideTo(index, speed, runCallbacks, internal) {
    if (index === void 0) { index = 0; }
    if (speed === void 0) { speed = this.params.speed; }
    if (runCallbacks === void 0) { runCallbacks = true; }
    var swiper = this;
    var slideIndex = index;
    if (slideIndex < 0)
        slideIndex = 0;
    var params = swiper.params, snapGrid = swiper.snapGrid, slidesGrid = swiper.slidesGrid, previousIndex = swiper.previousIndex, activeIndex = swiper.activeIndex, rtl = swiper.rtlTranslate;
    if (swiper.animating && params.preventInteractionOnTransition) {
        return false;
    }
    var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
    if (snapIndex >= snapGrid.length)
        snapIndex = snapGrid.length - 1;
    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
        swiper.emit('beforeSlideChangeStart');
    }
    var translate = -snapGrid[snapIndex];
    // Update progress
    swiper.updateProgress(translate);
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
        for (var i = 0; i < slidesGrid.length; i += 1) {
            if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
                slideIndex = i;
            }
        }
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
            return false;
        }
        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
            if ((activeIndex || 0) !== slideIndex)
                return false;
        }
    }
    var direction;
    if (slideIndex > activeIndex)
        direction = 'next';
    else if (slideIndex < activeIndex)
        direction = 'prev';
    else
        direction = 'reset';
    // Update Index
    if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
        swiper.updateActiveIndex(slideIndex);
        // Update Height
        if (params.autoHeight) {
            swiper.updateAutoHeight();
        }
        swiper.updateSlidesClasses();
        if (params.effect !== 'slide') {
            swiper.setTranslate(translate);
        }
        if (direction !== 'reset') {
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        }
        return false;
    }
    if (speed === 0 || !Support.transition) {
        swiper.setTransition(0);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
    }
    else {
        swiper.setTransition(speed);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);
        if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onSlideToWrapperTransitionEnd) {
                swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed)
                        return;
                    if (e.target !== this)
                        return;
                    swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
            }
            swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
        }
    }
    return true;
}
function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) { index = 0; }
    if (speed === void 0) { speed = this.params.speed; }
    if (runCallbacks === void 0) { runCallbacks = true; }
    var swiper = this;
    var newIndex = index;
    if (swiper.params.loop) {
        newIndex += swiper.loopedSlides;
    }
    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) { speed = this.params.speed; }
    if (runCallbacks === void 0) { runCallbacks = true; }
    var swiper = this;
    var params = swiper.params, animating = swiper.animating;
    if (params.loop) {
        if (animating)
            return false;
        swiper.loopFix();
        // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) { speed = this.params.speed; }
    if (runCallbacks === void 0) { runCallbacks = true; }
    var swiper = this;
    var params = swiper.params, animating = swiper.animating, snapGrid = swiper.snapGrid, slidesGrid = swiper.slidesGrid, rtlTranslate = swiper.rtlTranslate;
    if (params.loop) {
        if (animating)
            return false;
        swiper.loopFix();
        // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    var translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
        if (val < 0)
            return -Math.floor(Math.abs(val));
        return Math.floor(val);
    }
    var normalizedTranslate = normalize(translate);
    var normalizedSnapGrid = snapGrid.map(function (val) { return normalize(val); });
    var normalizedSlidesGrid = slidesGrid.map(function (val) { return normalize(val); });
    var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
    var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    var prevIndex;
    if (typeof prevSnap !== 'undefined') {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0)
            prevIndex = swiper.activeIndex - 1;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) { speed = this.params.speed; }
    if (runCallbacks === void 0) { runCallbacks = true; }
    var swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal) {
    if (speed === void 0) { speed = this.params.speed; }
    if (runCallbacks === void 0) { runCallbacks = true; }
    var swiper = this;
    var index = swiper.activeIndex;
    var snapIndex = Math.floor(index / swiper.params.slidesPerGroup);
    if (snapIndex < swiper.snapGrid.length - 1) {
        var translate_1 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        var currentSnap = swiper.snapGrid[snapIndex];
        var nextSnap = swiper.snapGrid[snapIndex + 1];
        if ((translate_1 - currentSnap) > (nextSnap - currentSnap) / 2) {
            index = swiper.params.slidesPerGroup;
        }
    }
    return swiper.slideTo(index, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
    var swiper = this;
    var params = swiper.params, $wrapperEl = swiper.$wrapperEl;
    var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    var slideToIndex = swiper.clickedIndex;
    var realIndex;
    if (params.loop) {
        if (swiper.animating)
            return;
        realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        if (params.centeredSlides) {
            if ((slideToIndex < swiper.loopedSlides - (slidesPerView / 2))
                || (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))) {
                swiper.loopFix();
                slideToIndex = $wrapperEl
                    .children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")")
                    .eq(0)
                    .index();
                Utils.nextTick(function () {
                    swiper.slideTo(slideToIndex);
                });
            }
            else {
                swiper.slideTo(slideToIndex);
            }
        }
        else if (slideToIndex > swiper.slides.length - slidesPerView) {
            swiper.loopFix();
            slideToIndex = $wrapperEl
                .children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")")
                .eq(0)
                .index();
            Utils.nextTick(function () {
                swiper.slideTo(slideToIndex);
            });
        }
        else {
            swiper.slideTo(slideToIndex);
        }
    }
    else {
        swiper.slideTo(slideToIndex);
    }
}
var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide,
};
function loopCreate() {
    var swiper = this;
    var params = swiper.params, $wrapperEl = swiper.$wrapperEl;
    // Remove duplicated slides
    $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
    var slides = $wrapperEl.children("." + params.slideClass);
    if (params.loopFillGroupWithBlank) {
        var blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
        if (blankSlidesNum !== params.slidesPerGroup) {
            for (var i = 0; i < blankSlidesNum; i += 1) {
                var blankNode = $(doc.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
                $wrapperEl.append(blankNode);
            }
            slides = $wrapperEl.children("." + params.slideClass);
        }
    }
    if (params.slidesPerView === 'auto' && !params.loopedSlides)
        params.loopedSlides = slides.length;
    swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) {
        swiper.loopedSlides = slides.length;
    }
    var prependSlides = [];
    var appendSlides = [];
    slides.each(function (index, el) {
        var slide = $(el);
        if (index < swiper.loopedSlides)
            appendSlides.push(el);
        if (index < slides.length && index >= slides.length - swiper.loopedSlides)
            prependSlides.push(el);
        slide.attr('data-swiper-slide-index', index);
    });
    for (var i = 0; i < appendSlides.length; i += 1) {
        $wrapperEl.append($(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
    for (var i = prependSlides.length - 1; i >= 0; i -= 1) {
        $wrapperEl.prepend($(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
}
function loopFix() {
    var swiper = this;
    var params = swiper.params, activeIndex = swiper.activeIndex, slides = swiper.slides, loopedSlides = swiper.loopedSlides, allowSlidePrev = swiper.allowSlidePrev, allowSlideNext = swiper.allowSlideNext, snapGrid = swiper.snapGrid, rtl = swiper.rtlTranslate;
    var newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    var snapTranslate = -snapGrid[activeIndex];
    var diff = snapTranslate - swiper.getTranslate();
    // Fix For Negative Oversliding
    if (activeIndex < loopedSlides) {
        newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
        newIndex += loopedSlides;
        var slideChanged = swiper.slideTo(newIndex, 0, false, true);
        if (slideChanged && diff !== 0) {
            swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
        }
    }
    else if ((params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2) || (activeIndex >= slides.length - loopedSlides)) {
        // Fix For Positive Oversliding
        newIndex = -slides.length + activeIndex + loopedSlides;
        newIndex += loopedSlides;
        var slideChanged = swiper.slideTo(newIndex, 0, false, true);
        if (slideChanged && diff !== 0) {
            swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
        }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
}
function loopDestroy() {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl, params = swiper.params, slides = swiper.slides;
    $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
    slides.removeAttr('data-swiper-slide-index');
}
var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy,
};
function setGrabCursor(moving) {
    var swiper = this;
    if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked))
        return;
    var el = swiper.el;
    el.style.cursor = 'move';
    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
    el.style.cursor = moving ? 'grabbing' : 'grab';
}
function unsetGrabCursor() {
    var swiper = this;
    if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked))
        return;
    swiper.el.style.cursor = '';
}
var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor,
};
function appendSlide(slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl, params = swiper.params;
    if (params.loop) {
        swiper.loopDestroy();
    }
    if (typeof slides === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
            if (slides[i])
                $wrapperEl.append(slides[i]);
        }
    }
    else {
        $wrapperEl.append(slides);
    }
    if (params.loop) {
        swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
        swiper.update();
    }
}
function prependSlide(slides) {
    var swiper = this;
    var params = swiper.params, $wrapperEl = swiper.$wrapperEl, activeIndex = swiper.activeIndex;
    if (params.loop) {
        swiper.loopDestroy();
    }
    var newActiveIndex = activeIndex + 1;
    if (typeof slides === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
            if (slides[i])
                $wrapperEl.prepend(slides[i]);
        }
        newActiveIndex = activeIndex + slides.length;
    }
    else {
        $wrapperEl.prepend(slides);
    }
    if (params.loop) {
        swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
        swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
}
function addSlide(index, slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl, params = swiper.params, activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children("." + params.slideClass);
    }
    var baseLength = swiper.slides.length;
    if (index <= 0) {
        swiper.prependSlide(slides);
        return;
    }
    if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
    }
    var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    var slidesBuffer = [];
    for (var i = baseLength - 1; i >= index; i -= 1) {
        var currentSlide = swiper.slides.eq(i);
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
            if (slides[i])
                $wrapperEl.append(slides[i]);
        }
        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    }
    else {
        $wrapperEl.append(slides);
    }
    for (var i = 0; i < slidesBuffer.length; i += 1) {
        $wrapperEl.append(slidesBuffer[i]);
    }
    if (params.loop) {
        swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
        swiper.update();
    }
    if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    }
    else {
        swiper.slideTo(newActiveIndex, 0, false);
    }
}
function removeSlide(slidesIndexes) {
    var swiper = this;
    var params = swiper.params, $wrapperEl = swiper.$wrapperEl, activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children("." + params.slideClass);
    }
    var newActiveIndex = activeIndexBuffer;
    var indexToRemove;
    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
        for (var i = 0; i < slidesIndexes.length; i += 1) {
            indexToRemove = slidesIndexes[i];
            if (swiper.slides[indexToRemove])
                swiper.slides.eq(indexToRemove).remove();
            if (indexToRemove < newActiveIndex)
                newActiveIndex -= 1;
        }
        newActiveIndex = Math.max(newActiveIndex, 0);
    }
    else {
        indexToRemove = slidesIndexes;
        if (swiper.slides[indexToRemove])
            swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex)
            newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
    }
    if (params.loop) {
        swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
        swiper.update();
    }
    if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    }
    else {
        swiper.slideTo(newActiveIndex, 0, false);
    }
}
function removeAllSlides() {
    var swiper = this;
    var slidesIndexes = [];
    for (var i = 0; i < swiper.slides.length; i += 1) {
        slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
}
var manipulation = {
    appendSlide: appendSlide,
    prependSlide: prependSlide,
    addSlide: addSlide,
    removeSlide: removeSlide,
    removeAllSlides: removeAllSlides,
};
var Device = (function Device() {
    var ua = win.navigator.userAgent;
    var device = {
        ios: false,
        android: false,
        androidChrome: false,
        desktop: false,
        windows: false,
        iphone: false,
        ipod: false,
        ipad: false,
        cordova: win.cordova || win.phonegap,
        phonegap: win.cordova || win.phonegap,
    };
    var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    // Windows
    if (windows) {
        device.os = 'windows';
        device.osVersion = windows[2];
        device.windows = true;
    }
    // Android
    if (android && !windows) {
        device.os = 'android';
        device.osVersion = android[2];
        device.android = true;
        device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
    }
    if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
    }
    // iOS
    if (iphone && !ipod) {
        device.osVersion = iphone[2].replace(/_/g, '.');
        device.iphone = true;
    }
    if (ipad) {
        device.osVersion = ipad[2].replace(/_/g, '.');
        device.ipad = true;
    }
    if (ipod) {
        device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
        device.iphone = true;
    }
    // iOS 8+ changed UA
    if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
        if (device.osVersion.split('.')[0] === '10') {
            device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
        }
    }
    // Desktop
    device.desktop = !(device.os || device.android || device.webView);
    // Webview
    device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);
    // Minimal UI
    if (device.os && device.os === 'ios') {
        var osVersionArr = device.osVersion.split('.');
        var metaViewport = doc.querySelector('meta[name="viewport"]');
        device.minimalUi = !device.webView
            && (ipod || iphone)
            && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7)
            && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
    }
    // Pixel Ratio
    device.pixelRatio = win.devicePixelRatio || 1;
    // Export object
    return device;
}());
function onTouchStart(event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params, touches = swiper.touches;
    if (swiper.animating && params.preventInteractionOnTransition) {
        return;
    }
    var e = event;
    if (e.originalEvent)
        e = e.originalEvent;
    data.isTouchEvent = e.type === 'touchstart';
    if (!data.isTouchEvent && 'which' in e && e.which === 3)
        return;
    if (!data.isTouchEvent && 'button' in e && e.button > 0)
        return;
    if (data.isTouched && data.isMoved)
        return;
    if (params.noSwiping && $(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass)[0]) {
        swiper.allowClick = true;
        return;
    }
    if (params.swipeHandler) {
        if (!$(e).closest(params.swipeHandler)[0])
            return;
    }
    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    var startX = touches.currentX;
    var startY = touches.currentY;
    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
    var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (edgeSwipeDetection
        && ((startX <= edgeSwipeThreshold)
            || (startX >= win.screen.width - edgeSwipeThreshold))) {
        return;
    }
    Utils.extend(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined,
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = Utils.now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0)
        data.allowThresholdMove = false;
    if (e.type !== 'touchstart') {
        var preventDefault = true;
        if ($(e.target).is(data.formElements))
            preventDefault = false;
        if (doc.activeElement
            && $(doc.activeElement).is(data.formElements)
            && doc.activeElement !== e.target) {
            doc.activeElement.blur();
        }
        var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
        if (params.touchStartForcePreventDefault || shouldPreventDefault) {
            e.preventDefault();
        }
    }
    swiper.emit('touchStart', e);
}
function onTouchMove(event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params, touches = swiper.touches, rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent)
        e = e.originalEvent;
    if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) {
            swiper.emit('touchMoveOpposite', e);
        }
        return;
    }
    if (data.isTouchEvent && e.type === 'mousemove')
        return;
    var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
    }
    if (!swiper.allowTouchMove) {
        // isMoved = true;
        swiper.allowClick = false;
        if (data.isTouched) {
            Utils.extend(touches, {
                startX: pageX,
                startY: pageY,
                currentX: pageX,
                currentY: pageY,
            });
            data.touchStartTime = Utils.now();
        }
        return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) {
            // Vertical
            if ((pageY < touches.startY && swiper.translate <= swiper.maxTranslate())
                || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())) {
                data.isTouched = false;
                data.isMoved = false;
                return;
            }
        }
        else if ((pageX < touches.startX && swiper.translate <= swiper.maxTranslate())
            || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())) {
            return;
        }
    }
    if (data.isTouchEvent && doc.activeElement) {
        if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
            data.isMoved = true;
            swiper.allowClick = false;
            return;
        }
    }
    if (data.allowTouchCallbacks) {
        swiper.emit('touchMove', e);
    }
    if (e.targetTouches && e.targetTouches.length > 1)
        return;
    touches.currentX = pageX;
    touches.currentY = pageY;
    var diffX = touches.currentX - touches.startX;
    var diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt((Math.pow(diffX, 2)) + (Math.pow(diffY, 2))) < swiper.params.threshold)
        return;
    if (typeof data.isScrolling === 'undefined') {
        var touchAngle = void 0;
        if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
            data.isScrolling = false;
        }
        else {
            // eslint-disable-next-line
            if ((diffX * diffX) + (diffY * diffY) >= 25) {
                touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
                data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
            }
        }
    }
    if (data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
    }
    if (typeof data.startMoving === 'undefined') {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
            data.startMoving = true;
        }
    }
    if (data.isScrolling) {
        data.isTouched = false;
        return;
    }
    if (!data.startMoving) {
        return;
    }
    swiper.allowClick = false;
    e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) {
        e.stopPropagation();
    }
    if (!data.isMoved) {
        if (params.loop) {
            swiper.loopFix();
        }
        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);
        if (swiper.animating) {
            swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
        }
        data.allowMomentumBounce = false;
        // Grab Cursor
        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
            swiper.setGrabCursor(true);
        }
        swiper.emit('sliderFirstMove', e);
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;
    var diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl)
        diff = -diff;
    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;
    var disableParentSwiper = true;
    var resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
        resistanceRatio = 0;
    }
    if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
        disableParentSwiper = false;
        if (params.resistance)
            data.currentTranslate = (swiper.minTranslate() - 1) + (Math.pow((-swiper.minTranslate() + data.startTranslate + diff), resistanceRatio));
    }
    else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance)
            data.currentTranslate = (swiper.maxTranslate() + 1) - (Math.pow((swiper.maxTranslate() - data.startTranslate - diff), resistanceRatio));
    }
    if (disableParentSwiper) {
        e.preventedByNestedSwiper = true;
    }
    // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
        data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
        data.currentTranslate = data.startTranslate;
    }
    // Threshold
    if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
            if (!data.allowThresholdMove) {
                data.allowThresholdMove = true;
                touches.startX = touches.currentX;
                touches.startY = touches.currentY;
                data.currentTranslate = data.startTranslate;
                touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                return;
            }
        }
        else {
            data.currentTranslate = data.startTranslate;
            return;
        }
    }
    if (!params.followFinger)
        return;
    // Update active index in free mode
    if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    if (params.freeMode) {
        // Velocity
        if (data.velocities.length === 0) {
            data.velocities.push({
                position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
                time: data.touchStartTime,
            });
        }
        data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
            time: Utils.now(),
        });
    }
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params, touches = swiper.touches, rtl = swiper.rtlTranslate, $wrapperEl = swiper.$wrapperEl, slidesGrid = swiper.slidesGrid, snapGrid = swiper.snapGrid;
    var e = event;
    if (e.originalEvent)
        e = e.originalEvent;
    if (data.allowTouchCallbacks) {
        swiper.emit('touchEnd', e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) {
            swiper.setGrabCursor(false);
        }
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(false);
    }
    // Time diff
    var touchEndTime = Utils.now();
    var timeDiff = touchEndTime - data.touchStartTime;
    // Tap, doubleTap, Click
    if (swiper.allowClick) {
        swiper.updateClickedSlide(e);
        swiper.emit('tap', e);
        if (timeDiff < 300 && (touchEndTime - data.lastClickTime) > 300) {
            if (data.clickTimeout)
                clearTimeout(data.clickTimeout);
            data.clickTimeout = Utils.nextTick(function () {
                if (!swiper || swiper.destroyed)
                    return;
                swiper.emit('click', e);
            }, 300);
        }
        if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
            if (data.clickTimeout)
                clearTimeout(data.clickTimeout);
            swiper.emit('doubleTap', e);
        }
    }
    data.lastClickTime = Utils.now();
    Utils.nextTick(function () {
        if (!swiper.destroyed)
            swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    var currentPos;
    if (params.followFinger) {
        currentPos = rtl ? swiper.translate : -swiper.translate;
    }
    else {
        currentPos = -data.currentTranslate;
    }
    if (params.freeMode) {
        if (currentPos < -swiper.minTranslate()) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (currentPos > -swiper.maxTranslate()) {
            if (swiper.slides.length < snapGrid.length) {
                swiper.slideTo(snapGrid.length - 1);
            }
            else {
                swiper.slideTo(swiper.slides.length - 1);
            }
            return;
        }
        if (params.freeModeMomentum) {
            if (data.velocities.length > 1) {
                var lastMoveEvent = data.velocities.pop();
                var velocityEvent = data.velocities.pop();
                var distance = lastMoveEvent.position - velocityEvent.position;
                var time = lastMoveEvent.time - velocityEvent.time;
                swiper.velocity = distance / time;
                swiper.velocity /= 2;
                if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
                    swiper.velocity = 0;
                }
                // this implies that the user stopped moving a finger then released.
                // There would be no events with distance zero, so the last event is stale.
                if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
                    swiper.velocity = 0;
                }
            }
            else {
                swiper.velocity = 0;
            }
            swiper.velocity *= params.freeModeMomentumVelocityRatio;
            data.velocities.length = 0;
            var momentumDuration = 1000 * params.freeModeMomentumRatio;
            var momentumDistance = swiper.velocity * momentumDuration;
            var newPosition = swiper.translate + momentumDistance;
            if (rtl)
                newPosition = -newPosition;
            var doBounce = false;
            var afterBouncePosition_1;
            var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
            var needsLoopFix = void 0;
            if (newPosition < swiper.maxTranslate()) {
                if (params.freeModeMomentumBounce) {
                    if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                        newPosition = swiper.maxTranslate() - bounceAmount;
                    }
                    afterBouncePosition_1 = swiper.maxTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                }
                else {
                    newPosition = swiper.maxTranslate();
                }
                if (params.loop && params.centeredSlides)
                    needsLoopFix = true;
            }
            else if (newPosition > swiper.minTranslate()) {
                if (params.freeModeMomentumBounce) {
                    if (newPosition - swiper.minTranslate() > bounceAmount) {
                        newPosition = swiper.minTranslate() + bounceAmount;
                    }
                    afterBouncePosition_1 = swiper.minTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                }
                else {
                    newPosition = swiper.minTranslate();
                }
                if (params.loop && params.centeredSlides)
                    needsLoopFix = true;
            }
            else if (params.freeModeSticky) {
                var nextSlide = void 0;
                for (var j = 0; j < snapGrid.length; j += 1) {
                    if (snapGrid[j] > -newPosition) {
                        nextSlide = j;
                        break;
                    }
                }
                if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
                    newPosition = snapGrid[nextSlide];
                }
                else {
                    newPosition = snapGrid[nextSlide - 1];
                }
                newPosition = -newPosition;
            }
            if (needsLoopFix) {
                swiper.once('transitionEnd', function () {
                    swiper.loopFix();
                });
            }
            // Fix duration
            if (swiper.velocity !== 0) {
                if (rtl) {
                    momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                }
                else {
                    momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                }
            }
            else if (params.freeModeSticky) {
                swiper.slideToClosest();
                return;
            }
            if (params.freeModeMomentumBounce && doBounce) {
                swiper.updateProgress(afterBouncePosition_1);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                swiper.animating = true;
                $wrapperEl.transitionEnd(function () {
                    if (!swiper || swiper.destroyed || !data.allowMomentumBounce)
                        return;
                    swiper.emit('momentumBounce');
                    swiper.setTransition(params.speed);
                    swiper.setTranslate(afterBouncePosition_1);
                    $wrapperEl.transitionEnd(function () {
                        if (!swiper || swiper.destroyed)
                            return;
                        swiper.transitionEnd();
                    });
                });
            }
            else if (swiper.velocity) {
                swiper.updateProgress(newPosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                if (!swiper.animating) {
                    swiper.animating = true;
                    $wrapperEl.transitionEnd(function () {
                        if (!swiper || swiper.destroyed)
                            return;
                        swiper.transitionEnd();
                    });
                }
            }
            else {
                swiper.updateProgress(newPosition);
            }
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        else if (params.freeModeSticky) {
            swiper.slideToClosest();
            return;
        }
        if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        return;
    }
    // Find current slide
    var stopIndex = 0;
    var groupSize = swiper.slidesSizesGrid[0];
    for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
        if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
            if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
                stopIndex = i;
                groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
            }
        }
        else if (currentPos >= slidesGrid[i]) {
            stopIndex = i;
            groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
    }
    // Find current slide size
    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (swiper.swipeDirection === 'next') {
            if (ratio >= params.longSwipesRatio)
                swiper.slideTo(stopIndex + params.slidesPerGroup);
            else
                swiper.slideTo(stopIndex);
        }
        if (swiper.swipeDirection === 'prev') {
            if (ratio > (1 - params.longSwipesRatio))
                swiper.slideTo(stopIndex + params.slidesPerGroup);
            else
                swiper.slideTo(stopIndex);
        }
    }
    else {
        // Short swipes
        if (!params.shortSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (swiper.swipeDirection === 'next') {
            swiper.slideTo(stopIndex + params.slidesPerGroup);
        }
        if (swiper.swipeDirection === 'prev') {
            swiper.slideTo(stopIndex);
        }
    }
}
function onResize() {
    var swiper = this;
    var params = swiper.params, el = swiper.el;
    if (el && el.offsetWidth === 0)
        return;
    // Breakpoints
    if (params.breakpoints) {
        swiper.setBreakpoint();
    }
    // Save locks
    var allowSlideNext = swiper.allowSlideNext, allowSlidePrev = swiper.allowSlidePrev, snapGrid = swiper.snapGrid;
    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    if (params.freeMode) {
        var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (params.autoHeight) {
            swiper.updateAutoHeight();
        }
    }
    else {
        swiper.updateSlidesClasses();
        if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
            swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        }
        else {
            swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.run();
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
    }
}
function onClick(e) {
    var swiper = this;
    if (!swiper.allowClick) {
        if (swiper.params.preventClicks)
            e.preventDefault();
        if (swiper.params.preventClicksPropagation && swiper.animating) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    }
}
function attachEvents() {
    var swiper = this;
    var params = swiper.params, touchEvents = swiper.touchEvents, el = swiper.el, wrapperEl = swiper.wrapperEl;
    {
        swiper.onTouchStart = onTouchStart.bind(swiper);
        swiper.onTouchMove = onTouchMove.bind(swiper);
        swiper.onTouchEnd = onTouchEnd.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
    var capture = !!params.nested;
    // Touch Events
    {
        if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
            target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
            doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
            doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
        }
        else {
            if (Support.touch) {
                var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
                target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
                target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture: capture } : capture);
                target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
            }
            if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
                target.addEventListener('mousedown', swiper.onTouchStart, false);
                doc.addEventListener('mousemove', swiper.onTouchMove, capture);
                doc.addEventListener('mouseup', swiper.onTouchEnd, false);
            }
        }
        // Prevent Links Clicks
        if (params.preventClicks || params.preventClicksPropagation) {
            target.addEventListener('click', swiper.onClick, true);
        }
    }
    // Resize handler
    swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
}
function detachEvents() {
    var swiper = this;
    var params = swiper.params, touchEvents = swiper.touchEvents, el = swiper.el, wrapperEl = swiper.wrapperEl;
    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
    var capture = !!params.nested;
    // Touch Events
    {
        if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
            target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
            doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
            doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
        }
        else {
            if (Support.touch) {
                var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
                target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
                target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
                target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
            }
            if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
                target.removeEventListener('mousedown', swiper.onTouchStart, false);
                doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
                doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
            }
        }
        // Prevent Links Clicks
        if (params.preventClicks || params.preventClicksPropagation) {
            target.removeEventListener('click', swiper.onClick, true);
        }
    }
    // Resize handler
    swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
}
var events = {
    attachEvents: attachEvents,
    detachEvents: detachEvents,
};
function setBreakpoint() {
    var swiper = this;
    var activeIndex = swiper.activeIndex, initialized = swiper.initialized, _a = swiper.loopedSlides, loopedSlides = _a === void 0 ? 0 : _a, params = swiper.params;
    var breakpoints = params.breakpoints;
    if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0))
        return;
    // Set breakpoint for window width and update parameters
    var breakpoint = swiper.getBreakpoint(breakpoints);
    if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
        var breakpointOnlyParams_1 = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
        if (breakpointOnlyParams_1) {
            ['slidesPerView', 'spaceBetween', 'slidesPerGroup'].forEach(function (param) {
                var paramValue = breakpointOnlyParams_1[param];
                if (typeof paramValue === 'undefined')
                    return;
                if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
                    breakpointOnlyParams_1[param] = 'auto';
                }
                else if (param === 'slidesPerView') {
                    breakpointOnlyParams_1[param] = parseFloat(paramValue);
                }
                else {
                    breakpointOnlyParams_1[param] = parseInt(paramValue, 10);
                }
            });
        }
        var breakpointParams = breakpointOnlyParams_1 || swiper.originalParams;
        var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
        var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
        if (directionChanged && initialized) {
            swiper.changeDirection();
        }
        Utils.extend(swiper.params, breakpointParams);
        Utils.extend(swiper, {
            allowTouchMove: swiper.params.allowTouchMove,
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev,
        });
        swiper.currentBreakpoint = breakpoint;
        if (needsReLoop && initialized) {
            swiper.loopDestroy();
            swiper.loopCreate();
            swiper.updateSlides();
            swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
        }
        swiper.emit('breakpoint', breakpointParams);
    }
}
function getBreakpoint(breakpoints) {
    var swiper = this;
    // Get breakpoint for window width
    if (!breakpoints)
        return undefined;
    var breakpoint = false;
    var points = [];
    Object.keys(breakpoints).forEach(function (point) {
        points.push(point);
    });
    points.sort(function (a, b) { return parseInt(a, 10) - parseInt(b, 10); });
    for (var i = 0; i < points.length; i += 1) {
        var point = points[i];
        if (swiper.params.breakpointsInverse) {
            if (point <= win.innerWidth) {
                breakpoint = point;
            }
        }
        else if (point >= win.innerWidth && !breakpoint) {
            breakpoint = point;
        }
    }
    return breakpoint || 'max';
}
var breakpoints = { setBreakpoint: setBreakpoint, getBreakpoint: getBreakpoint };
function addClasses() {
    var swiper = this;
    var classNames = swiper.classNames, params = swiper.params, rtl = swiper.rtl, $el = swiper.$el;
    var suffixes = [];
    suffixes.push('initialized');
    suffixes.push(params.direction);
    if (params.freeMode) {
        suffixes.push('free-mode');
    }
    if (!Support.flexbox) {
        suffixes.push('no-flexbox');
    }
    if (params.autoHeight) {
        suffixes.push('autoheight');
    }
    if (rtl) {
        suffixes.push('rtl');
    }
    if (params.slidesPerColumn > 1) {
        suffixes.push('multirow');
    }
    if (Device.android) {
        suffixes.push('android');
    }
    if (Device.ios) {
        suffixes.push('ios');
    }
    // WP8 Touch Events Fix
    if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        suffixes.push("wp8-" + params.direction);
    }
    suffixes.forEach(function (suffix) {
        classNames.push(params.containerModifierClass + suffix);
    });
    $el.addClass(classNames.join(' '));
}
function removeClasses() {
    var swiper = this;
    var $el = swiper.$el, classNames = swiper.classNames;
    $el.removeClass(classNames.join(' '));
}
var classes = { addClasses: addClasses, removeClasses: removeClasses };
function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
    var image;
    function onReady() {
        if (callback)
            callback();
    }
    if (!imageEl.complete || !checkForComplete) {
        if (src) {
            image = new win.Image();
            image.onload = onReady;
            image.onerror = onReady;
            if (sizes) {
                image.sizes = sizes;
            }
            if (srcset) {
                image.srcset = srcset;
            }
            if (src) {
                image.src = src;
            }
        }
        else {
            onReady();
        }
    }
    else {
        // image already loaded...
        onReady();
    }
}
function preloadImages() {
    var swiper = this;
    swiper.imagesToLoad = swiper.$el.find('img');
    function onReady() {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed)
            return;
        if (swiper.imagesLoaded !== undefined)
            swiper.imagesLoaded += 1;
        if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
            if (swiper.params.updateOnImagesReady)
                swiper.update();
            swiper.emit('imagesReady');
        }
    }
    for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
        var imageEl = swiper.imagesToLoad[i];
        swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
    }
}
var images = {
    loadImage: loadImage,
    preloadImages: preloadImages,
};
function checkOverflow() {
    var swiper = this;
    var wasLocked = swiper.isLocked;
    swiper.isLocked = swiper.snapGrid.length === 1;
    swiper.allowSlideNext = !swiper.isLocked;
    swiper.allowSlidePrev = !swiper.isLocked;
    // events
    if (wasLocked !== swiper.isLocked)
        swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
    if (wasLocked && wasLocked !== swiper.isLocked) {
        swiper.isEnd = false;
        swiper.navigation.update();
    }
}
var checkOverflow$1 = { checkOverflow: checkOverflow };
var defaults = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'container',
    initialSlide: 0,
    speed: 300,
    //
    preventInteractionOnTransition: false,
    // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Free mode
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: 'slide',
    // Breakpoints
    breakpoints: undefined,
    breakpointsInverse: false,
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    slidesPerGroup: 1,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: false,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: true,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    watchSlidesVisibility: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // Images
    preloadImages: true,
    updateOnImagesReady: true,
    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    // NS
    containerModifierClass: 'swiper-container-',
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',
    // Callbacks
    runCallbacksOnInit: true,
};
/* eslint no-param-reassign: "off" */
var prototypes = {
    update: update,
    translate: translate,
    transition: transition$1,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    manipulation: manipulation,
    events: events,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes,
    images: images,
};
var extendedDefaults = {};
var Swiper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Swiper, _super);
    function Swiper() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        var el;
        var params;
        if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
            params = args[0];
        }
        else {
            el = args[0], params = args[1];
        }
        if (!params)
            params = {};
        params = Utils.extend({}, params);
        if (el && !params.el)
            params.el = el;
        _this = _super.call(this, params) || this;
        Object.keys(prototypes).forEach(function (prototypeGroup) {
            Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
                if (!Swiper.prototype[protoMethod]) {
                    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
                }
            });
        });
        // Swiper Instance
        var swiper = _this;
        if (typeof swiper.modules === 'undefined') {
            swiper.modules = {};
        }
        Object.keys(swiper.modules).forEach(function (moduleName) {
            var module = swiper.modules[moduleName];
            if (module.params) {
                var moduleParamName = Object.keys(module.params)[0];
                var moduleParams = module.params[moduleParamName];
                if (typeof moduleParams !== 'object' || moduleParams === null)
                    return;
                if (!(moduleParamName in params && 'enabled' in moduleParams))
                    return;
                if (params[moduleParamName] === true) {
                    params[moduleParamName] = { enabled: true };
                }
                if (typeof params[moduleParamName] === 'object'
                    && !('enabled' in params[moduleParamName])) {
                    params[moduleParamName].enabled = true;
                }
                if (!params[moduleParamName])
                    params[moduleParamName] = { enabled: false };
            }
        });
        // Extend defaults with modules params
        var swiperParams = Utils.extend({}, defaults);
        swiper.useModulesParams(swiperParams);
        // Extend defaults with passed params
        swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = Utils.extend({}, swiper.params);
        swiper.passedParams = Utils.extend({}, params);
        // Save Dom lib
        swiper.$ = $;
        // Find el
        var $el = $(swiper.params.el);
        el = $el[0];
        if (!el) {
            return undefined;
        }
        if ($el.length > 1) {
            var swipers_1 = [];
            $el.each(function (index, containerEl) {
                var newParams = Utils.extend({}, params, { el: containerEl });
                swipers_1.push(new Swiper(newParams));
            });
            return swipers_1;
        }
        el.swiper = swiper;
        $el.data('swiper', swiper);
        // Find Wrapper
        var $wrapperEl = $el.children("." + swiper.params.wrapperClass);
        // Extend Swiper
        Utils.extend(swiper, {
            $el: $el,
            el: el,
            $wrapperEl: $wrapperEl,
            wrapperEl: $wrapperEl[0],
            // Classes
            classNames: [],
            // Slides
            slides: $(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            // isDirection
            isHorizontal: function () {
                return swiper.params.direction === 'horizontal';
            },
            isVertical: function () {
                return swiper.params.direction === 'vertical';
            },
            // RTL
            rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
            rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
            wrongRTL: $wrapperEl.css('display') === '-webkit-box',
            // Indexes
            activeIndex: 0,
            realIndex: 0,
            //
            isBeginning: true,
            isEnd: false,
            // Props
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,
            // Locks
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev,
            // Touch Events
            touchEvents: (function touchEvents() {
                var touch = ['touchstart', 'touchmove', 'touchend'];
                var desktop = ['mousedown', 'mousemove', 'mouseup'];
                if (Support.pointerEvents) {
                    desktop = ['pointerdown', 'pointermove', 'pointerup'];
                }
                else if (Support.prefixedPointerEvents) {
                    desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
                }
                swiper.touchEventsTouch = {
                    start: touch[0],
                    move: touch[1],
                    end: touch[2],
                };
                swiper.touchEventsDesktop = {
                    start: desktop[0],
                    move: desktop[1],
                    end: desktop[2],
                };
                return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
            }()),
            touchEventsData: {
                isTouched: undefined,
                isMoved: undefined,
                allowTouchCallbacks: undefined,
                touchStartTime: undefined,
                isScrolling: undefined,
                currentTranslate: undefined,
                startTranslate: undefined,
                allowThresholdMove: undefined,
                // Form elements to match
                formElements: 'input, select, option, textarea, button, video',
                // Last click time
                lastClickTime: Utils.now(),
                clickTimeout: undefined,
                // Velocities
                velocities: [],
                allowMomentumBounce: undefined,
                isTouchEvent: undefined,
                startMoving: undefined,
            },
            // Clicks
            allowClick: true,
            // Touches
            allowTouchMove: swiper.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
            },
            // Images
            imagesToLoad: [],
            imagesLoaded: 0,
        });
        // Install Modules
        swiper.useModules();
        // Init
        if (swiper.params.init) {
            swiper.init();
        }
        // Return app instance
        return swiper;
    }
    Swiper.prototype.slidesPerViewDynamic = function () {
        var swiper = this;
        var params = swiper.params, slides = swiper.slides, slidesGrid = swiper.slidesGrid, swiperSize = swiper.size, activeIndex = swiper.activeIndex;
        var spv = 1;
        if (params.centeredSlides) {
            var slideSize = slides[activeIndex].swiperSlideSize;
            var breakLoop = void 0;
            for (var i = activeIndex + 1; i < slides.length; i += 1) {
                if (slides[i] && !breakLoop) {
                    slideSize += slides[i].swiperSlideSize;
                    spv += 1;
                    if (slideSize > swiperSize)
                        breakLoop = true;
                }
            }
            for (var i = activeIndex - 1; i >= 0; i -= 1) {
                if (slides[i] && !breakLoop) {
                    slideSize += slides[i].swiperSlideSize;
                    spv += 1;
                    if (slideSize > swiperSize)
                        breakLoop = true;
                }
            }
        }
        else {
            for (var i = activeIndex + 1; i < slides.length; i += 1) {
                if (slidesGrid[i] - slidesGrid[activeIndex] < swiperSize) {
                    spv += 1;
                }
            }
        }
        return spv;
    };
    Swiper.prototype.update = function () {
        var swiper = this;
        if (!swiper || swiper.destroyed)
            return;
        var snapGrid = swiper.snapGrid, params = swiper.params;
        // Breakpoints
        if (params.breakpoints) {
            swiper.setBreakpoint();
        }
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        function setTranslate() {
            var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
            var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        var translated;
        if (swiper.params.freeMode) {
            setTranslate();
            if (swiper.params.autoHeight) {
                swiper.updateAutoHeight();
            }
        }
        else {
            if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
                translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
            }
            else {
                translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
            }
            if (!translated) {
                setTranslate();
            }
        }
        if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
            swiper.checkOverflow();
        }
        swiper.emit('update');
    };
    Swiper.prototype.changeDirection = function (newDirection, needUpdate) {
        if (needUpdate === void 0) { needUpdate = true; }
        var swiper = this;
        var currentDirection = swiper.params.direction;
        if (!newDirection) {
            // eslint-disable-next-line
            newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        }
        if ((newDirection === currentDirection) || (newDirection !== 'horizontal' && newDirection !== 'vertical')) {
            return swiper;
        }
        swiper.$el
            .removeClass("" + swiper.params.containerModifierClass + currentDirection + " wp8-" + currentDirection)
            .addClass("" + swiper.params.containerModifierClass + newDirection);
        if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
            swiper.$el.addClass(swiper.params.containerModifierClass + "wp8-" + newDirection);
        }
        swiper.params.direction = newDirection;
        swiper.slides.each(function (slideIndex, slideEl) {
            if (newDirection === 'vertical') {
                slideEl.style.width = '';
            }
            else {
                slideEl.style.height = '';
            }
        });
        swiper.emit('changeDirection');
        if (needUpdate)
            swiper.update();
        return swiper;
    };
    Swiper.prototype.init = function () {
        var swiper = this;
        if (swiper.initialized)
            return;
        swiper.emit('beforeInit');
        // Set breakpoint
        if (swiper.params.breakpoints) {
            swiper.setBreakpoint();
        }
        // Add Classes
        swiper.addClasses();
        // Create loop
        if (swiper.params.loop) {
            swiper.loopCreate();
        }
        // Update size
        swiper.updateSize();
        // Update slides
        swiper.updateSlides();
        if (swiper.params.watchOverflow) {
            swiper.checkOverflow();
        }
        // Set Grab Cursor
        if (swiper.params.grabCursor) {
            swiper.setGrabCursor();
        }
        if (swiper.params.preloadImages) {
            swiper.preloadImages();
        }
        // Slide To Initial Slide
        if (swiper.params.loop) {
            swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
        }
        else {
            swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
        }
        // Attach events
        swiper.attachEvents();
        // Init Flag
        swiper.initialized = true;
        // Emit
        swiper.emit('init');
    };
    Swiper.prototype.destroy = function (deleteInstance, cleanStyles) {
        if (deleteInstance === void 0) { deleteInstance = true; }
        if (cleanStyles === void 0) { cleanStyles = true; }
        var swiper = this;
        var params = swiper.params, $el = swiper.$el, $wrapperEl = swiper.$wrapperEl, slides = swiper.slides;
        if (typeof swiper.params === 'undefined' || swiper.destroyed) {
            return null;
        }
        swiper.emit('beforeDestroy');
        // Init Flag
        swiper.initialized = false;
        // Detach events
        swiper.detachEvents();
        // Destroy loop
        if (params.loop) {
            swiper.loopDestroy();
        }
        // Cleanup styles
        if (cleanStyles) {
            swiper.removeClasses();
            $el.removeAttr('style');
            $wrapperEl.removeAttr('style');
            if (slides && slides.length) {
                slides
                    .removeClass([
                    params.slideVisibleClass,
                    params.slideActiveClass,
                    params.slideNextClass,
                    params.slidePrevClass,
                ].join(' '))
                    .removeAttr('style')
                    .removeAttr('data-swiper-slide-index')
                    .removeAttr('data-swiper-column')
                    .removeAttr('data-swiper-row');
            }
        }
        swiper.emit('destroy');
        // Detach emitter events
        Object.keys(swiper.eventsListeners).forEach(function (eventName) {
            swiper.off(eventName);
        });
        if (deleteInstance !== false) {
            swiper.$el[0].swiper = null;
            swiper.$el.data('swiper', null);
            Utils.deleteProps(swiper);
        }
        swiper.destroyed = true;
        return null;
    };
    Swiper.extendDefaults = function (newDefaults) {
        Utils.extend(extendedDefaults, newDefaults);
    };
    Object.defineProperty(Swiper, "extendedDefaults", {
        get: function () {
            return extendedDefaults;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Swiper, "defaults", {
        get: function () {
            return defaults;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Swiper, "Class", {
        get: function () {
            return SwiperClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Swiper, "$", {
        get: function () {
            return $;
        },
        enumerable: true,
        configurable: true
    });
    return Swiper;
}(SwiperClass));
var Device$1 = {
    name: 'device',
    proto: {
        device: Device,
    },
    static: {
        device: Device,
    },
};
var Support$1 = {
    name: 'support',
    proto: {
        support: Support,
    },
    static: {
        support: Support,
    },
};
var Browser$1 = {
    name: 'browser',
    proto: {
        browser: Browser,
    },
    static: {
        browser: Browser,
    },
};
var Resize = {
    name: 'resize',
    create: function () {
        var swiper = this;
        Utils.extend(swiper, {
            resize: {
                resizeHandler: function () {
                    if (!swiper || swiper.destroyed || !swiper.initialized)
                        return;
                    swiper.emit('beforeResize');
                    swiper.emit('resize');
                },
                orientationChangeHandler: function () {
                    if (!swiper || swiper.destroyed || !swiper.initialized)
                        return;
                    swiper.emit('orientationchange');
                },
            },
        });
    },
    on: {
        init: function () {
            var swiper = this;
            // Emit resize
            win.addEventListener('resize', swiper.resize.resizeHandler);
            // Emit orientationchange
            win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
        },
        destroy: function () {
            var swiper = this;
            win.removeEventListener('resize', swiper.resize.resizeHandler);
            win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
        },
    },
};
var Observer = {
    func: win.MutationObserver || win.WebkitMutationObserver,
    attach: function (target, options) {
        if (options === void 0) { options = {}; }
        var swiper = this;
        var ObserverFunc = Observer.func;
        var observer = new ObserverFunc(function (mutations) {
            // The observerUpdate event should only be triggered
            // once despite the number of mutations.  Additional
            // triggers are redundant and are very costly
            if (mutations.length === 1) {
                swiper.emit('observerUpdate', mutations[0]);
                return;
            }
            var observerUpdate = function observerUpdate() {
                swiper.emit('observerUpdate', mutations[0]);
            };
            if (win.requestAnimationFrame) {
                win.requestAnimationFrame(observerUpdate);
            }
            else {
                win.setTimeout(observerUpdate, 0);
            }
        });
        observer.observe(target, {
            attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
            childList: typeof options.childList === 'undefined' ? true : options.childList,
            characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
        });
        swiper.observer.observers.push(observer);
    },
    init: function () {
        var swiper = this;
        if (!Support.observer || !swiper.params.observer)
            return;
        if (swiper.params.observeParents) {
            var containerParents = swiper.$el.parents();
            for (var i = 0; i < containerParents.length; i += 1) {
                swiper.observer.attach(containerParents[i]);
            }
        }
        // Observe container
        swiper.observer.attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren });
        // Observe wrapper
        swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
    },
    destroy: function () {
        var swiper = this;
        swiper.observer.observers.forEach(function (observer) {
            observer.disconnect();
        });
        swiper.observer.observers = [];
    },
};
var Observer$1 = {
    name: 'observer',
    params: {
        observer: false,
        observeParents: false,
        observeSlideChildren: false,
    },
    create: function () {
        var swiper = this;
        Utils.extend(swiper, {
            observer: {
                init: Observer.init.bind(swiper),
                attach: Observer.attach.bind(swiper),
                destroy: Observer.destroy.bind(swiper),
                observers: [],
            },
        });
    },
    on: {
        init: function () {
            var swiper = this;
            swiper.observer.init();
        },
        destroy: function () {
            var swiper = this;
            swiper.observer.destroy();
        },
    },
};
function isEventSupported() {
    var eventName = 'onwheel';
    var isSupported = eventName in doc;
    if (!isSupported) {
        var element = doc.createElement('div');
        element.setAttribute(eventName, 'return;');
        isSupported = typeof element[eventName] === 'function';
    }
    if (!isSupported
        && doc.implementation
        && doc.implementation.hasFeature
        // always returns true in newer browsers as per the standard.
        // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
        && doc.implementation.hasFeature('', '') !== true) {
        // This is the only way to test support for the `wheel` event in IE9+.
        isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
    }
    return isSupported;
}
var Mousewheel = {
    lastScrollTime: Utils.now(),
    event: (function getEvent() {
        if (win.navigator.userAgent.indexOf('firefox') > -1)
            return 'DOMMouseScroll';
        return isEventSupported() ? 'wheel' : 'mousewheel';
    }()),
    normalize: function (e) {
        // Reasonable defaults
        var PIXEL_STEP = 10;
        var LINE_HEIGHT = 40;
        var PAGE_HEIGHT = 800;
        var sX = 0;
        var sY = 0; // spinX, spinY
        var pX = 0;
        var pY = 0; // pixelX, pixelY
        // Legacy
        if ('detail' in e) {
            sY = e.detail;
        }
        if ('wheelDelta' in e) {
            sY = -e.wheelDelta / 120;
        }
        if ('wheelDeltaY' in e) {
            sY = -e.wheelDeltaY / 120;
        }
        if ('wheelDeltaX' in e) {
            sX = -e.wheelDeltaX / 120;
        }
        // side scrolling on FF with DOMMouseScroll
        if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
            sX = sY;
            sY = 0;
        }
        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;
        if ('deltaY' in e) {
            pY = e.deltaY;
        }
        if ('deltaX' in e) {
            pX = e.deltaX;
        }
        if ((pX || pY) && e.deltaMode) {
            if (e.deltaMode === 1) { // delta in LINE units
                pX *= LINE_HEIGHT;
                pY *= LINE_HEIGHT;
            }
            else { // delta in PAGE units
                pX *= PAGE_HEIGHT;
                pY *= PAGE_HEIGHT;
            }
        }
        // Fall-back if spin cannot be determined
        if (pX && !sX) {
            sX = (pX < 1) ? -1 : 1;
        }
        if (pY && !sY) {
            sY = (pY < 1) ? -1 : 1;
        }
        return {
            spinX: sX,
            spinY: sY,
            pixelX: pX,
            pixelY: pY,
        };
    },
    handleMouseEnter: function () {
        var swiper = this;
        swiper.mouseEntered = true;
    },
    handleMouseLeave: function () {
        var swiper = this;
        swiper.mouseEntered = false;
    },
    handle: function (event) {
        var e = event;
        var swiper = this;
        var params = swiper.params.mousewheel;
        if (!swiper.mouseEntered && !params.releaseOnEdges)
            return true;
        if (e.originalEvent)
            e = e.originalEvent; // jquery fix
        var delta = 0;
        var rtlFactor = swiper.rtlTranslate ? -1 : 1;
        var data = Mousewheel.normalize(e);
        if (params.forceToAxis) {
            if (swiper.isHorizontal()) {
                if (Math.abs(data.pixelX) > Math.abs(data.pixelY))
                    delta = data.pixelX * rtlFactor;
                else
                    return true;
            }
            else if (Math.abs(data.pixelY) > Math.abs(data.pixelX))
                delta = data.pixelY;
            else
                return true;
        }
        else {
            delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        }
        if (delta === 0)
            return true;
        if (params.invert)
            delta = -delta;
        if (!swiper.params.freeMode) {
            if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
                if (delta < 0) {
                    if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                        swiper.slideNext();
                        swiper.emit('scroll', e);
                    }
                    else if (params.releaseOnEdges)
                        return true;
                }
                else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
                    swiper.slidePrev();
                    swiper.emit('scroll', e);
                }
                else if (params.releaseOnEdges)
                    return true;
            }
            swiper.mousewheel.lastScrollTime = (new win.Date()).getTime();
        }
        else {
            // Freemode or scrollContainer:
            if (swiper.params.loop) {
                swiper.loopFix();
            }
            var position = swiper.getTranslate() + (delta * params.sensitivity);
            var wasBeginning = swiper.isBeginning;
            var wasEnd = swiper.isEnd;
            if (position >= swiper.minTranslate())
                position = swiper.minTranslate();
            if (position <= swiper.maxTranslate())
                position = swiper.maxTranslate();
            swiper.setTransition(0);
            swiper.setTranslate(position);
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
                swiper.updateSlidesClasses();
            }
            if (swiper.params.freeModeSticky) {
                clearTimeout(swiper.mousewheel.timeout);
                swiper.mousewheel.timeout = Utils.nextTick(function () {
                    swiper.slideToClosest();
                }, 300);
            }
            // Emit event
            swiper.emit('scroll', e);
            // Stop autoplay
            if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction)
                swiper.autoplay.stop();
            // Return page scroll on edge positions
            if (position === swiper.minTranslate() || position === swiper.maxTranslate())
                return true;
        }
        if (e.preventDefault)
            e.preventDefault();
        else
            e.returnValue = false;
        return false;
    },
    enable: function () {
        var swiper = this;
        if (!Mousewheel.event)
            return false;
        if (swiper.mousewheel.enabled)
            return false;
        var target = swiper.$el;
        if (swiper.params.mousewheel.eventsTarged !== 'container') {
            target = $(swiper.params.mousewheel.eventsTarged);
        }
        target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
        target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
        target.on(Mousewheel.event, swiper.mousewheel.handle);
        swiper.mousewheel.enabled = true;
        return true;
    },
    disable: function () {
        var swiper = this;
        if (!Mousewheel.event)
            return false;
        if (!swiper.mousewheel.enabled)
            return false;
        var target = swiper.$el;
        if (swiper.params.mousewheel.eventsTarged !== 'container') {
            target = $(swiper.params.mousewheel.eventsTarged);
        }
        target.off(Mousewheel.event, swiper.mousewheel.handle);
        swiper.mousewheel.enabled = false;
        return true;
    },
};
var Pagination = {
    update: function () {
        // Render || Update Pagination bullets/items
        var swiper = this;
        var rtl = swiper.rtl;
        var params = swiper.params.pagination;
        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0)
            return;
        var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        var $el = swiper.pagination.$el;
        // Current/Total
        var current;
        var total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.loop) {
            current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
            if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
                current -= (slidesLength - (swiper.loopedSlides * 2));
            }
            if (current > total - 1)
                current -= total;
            if (current < 0 && swiper.params.paginationType !== 'bullets')
                current = total + current;
        }
        else if (typeof swiper.snapIndex !== 'undefined') {
            current = swiper.snapIndex;
        }
        else {
            current = swiper.activeIndex || 0;
        }
        // Types
        if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
            var bullets = swiper.pagination.bullets;
            var firstIndex_1;
            var lastIndex_1;
            var midIndex = void 0;
            if (params.dynamicBullets) {
                swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
                $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");
                if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                    swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
                    if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
                        swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
                    }
                    else if (swiper.pagination.dynamicBulletIndex < 0) {
                        swiper.pagination.dynamicBulletIndex = 0;
                    }
                }
                firstIndex_1 = current - swiper.pagination.dynamicBulletIndex;
                lastIndex_1 = firstIndex_1 + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                midIndex = (lastIndex_1 + firstIndex_1) / 2;
            }
            bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");
            if ($el.length > 1) {
                bullets.each(function (index, bullet) {
                    var $bullet = $(bullet);
                    var bulletIndex = $bullet.index();
                    if (bulletIndex === current) {
                        $bullet.addClass(params.bulletActiveClass);
                    }
                    if (params.dynamicBullets) {
                        if (bulletIndex >= firstIndex_1 && bulletIndex <= lastIndex_1) {
                            $bullet.addClass(params.bulletActiveClass + "-main");
                        }
                        if (bulletIndex === firstIndex_1) {
                            $bullet
                                .prev()
                                .addClass(params.bulletActiveClass + "-prev")
                                .prev()
                                .addClass(params.bulletActiveClass + "-prev-prev");
                        }
                        if (bulletIndex === lastIndex_1) {
                            $bullet
                                .next()
                                .addClass(params.bulletActiveClass + "-next")
                                .next()
                                .addClass(params.bulletActiveClass + "-next-next");
                        }
                    }
                });
            }
            else {
                var $bullet = bullets.eq(current);
                $bullet.addClass(params.bulletActiveClass);
                if (params.dynamicBullets) {
                    var $firstDisplayedBullet = bullets.eq(firstIndex_1);
                    var $lastDisplayedBullet = bullets.eq(lastIndex_1);
                    for (var i = firstIndex_1; i <= lastIndex_1; i += 1) {
                        bullets.eq(i).addClass(params.bulletActiveClass + "-main");
                    }
                    $firstDisplayedBullet
                        .prev()
                        .addClass(params.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(params.bulletActiveClass + "-prev-prev");
                    $lastDisplayedBullet
                        .next()
                        .addClass(params.bulletActiveClass + "-next")
                        .next()
                        .addClass(params.bulletActiveClass + "-next-next");
                }
            }
            if (params.dynamicBullets) {
                var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                var bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
                var offsetProp = rtl ? 'right' : 'left';
                bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
            }
        }
        if (params.type === 'fraction') {
            $el.find("." + params.currentClass).text(params.formatFractionCurrent(current + 1));
            $el.find("." + params.totalClass).text(params.formatFractionTotal(total));
        }
        if (params.type === 'progressbar') {
            var progressbarDirection = void 0;
            if (params.progressbarOpposite) {
                progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
            }
            else {
                progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
            }
            var scale = (current + 1) / total;
            var scaleX = 1;
            var scaleY = 1;
            if (progressbarDirection === 'horizontal') {
                scaleX = scale;
            }
            else {
                scaleY = scale;
            }
            $el.find("." + params.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
        }
        if (params.type === 'custom' && params.renderCustom) {
            $el.html(params.renderCustom(swiper, current + 1, total));
            swiper.emit('paginationRender', swiper, $el[0]);
        }
        else {
            swiper.emit('paginationUpdate', swiper, $el[0]);
        }
        $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    },
    render: function () {
        // Render Container
        var swiper = this;
        var params = swiper.params.pagination;
        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0)
            return;
        var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        var $el = swiper.pagination.$el;
        var paginationHTML = '';
        if (params.type === 'bullets') {
            var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            for (var i = 0; i < numberOfBullets; i += 1) {
                if (params.renderBullet) {
                    paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
                }
                else {
                    paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
                }
            }
            $el.html(paginationHTML);
            swiper.pagination.bullets = $el.find("." + params.bulletClass);
        }
        if (params.type === 'fraction') {
            if (params.renderFraction) {
                paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
            }
            else {
                paginationHTML = "<span class=\"" + params.currentClass + "\"></span>"
                    + ' / '
                    + ("<span class=\"" + params.totalClass + "\"></span>");
            }
            $el.html(paginationHTML);
        }
        if (params.type === 'progressbar') {
            if (params.renderProgressbar) {
                paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
            }
            else {
                paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
            }
            $el.html(paginationHTML);
        }
        if (params.type !== 'custom') {
            swiper.emit('paginationRender', swiper.pagination.$el[0]);
        }
    },
    init: function () {
        var swiper = this;
        var params = swiper.params.pagination;
        if (!params.el)
            return;
        var $el = $(params.el);
        if ($el.length === 0)
            return;
        if (swiper.params.uniqueNavElements
            && typeof params.el === 'string'
            && $el.length > 1
            && swiper.$el.find(params.el).length === 1) {
            $el = swiper.$el.find(params.el);
        }
        if (params.type === 'bullets' && params.clickable) {
            $el.addClass(params.clickableClass);
        }
        $el.addClass(params.modifierClass + params.type);
        if (params.type === 'bullets' && params.dynamicBullets) {
            $el.addClass("" + params.modifierClass + params.type + "-dynamic");
            swiper.pagination.dynamicBulletIndex = 0;
            if (params.dynamicMainBullets < 1) {
                params.dynamicMainBullets = 1;
            }
        }
        if (params.type === 'progressbar' && params.progressbarOpposite) {
            $el.addClass(params.progressbarOppositeClass);
        }
        if (params.clickable) {
            $el.on('click', "." + params.bulletClass, function onClick(e) {
                e.preventDefault();
                var index = $(this).index() * swiper.params.slidesPerGroup;
                if (swiper.params.loop)
                    index += swiper.loopedSlides;
                swiper.slideTo(index);
            });
        }
        Utils.extend(swiper.pagination, {
            $el: $el,
            el: $el[0],
        });
    },
    destroy: function () {
        var swiper = this;
        var params = swiper.params.pagination;
        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0)
            return;
        var $el = swiper.pagination.$el;
        $el.removeClass(params.hiddenClass);
        $el.removeClass(params.modifierClass + params.type);
        if (swiper.pagination.bullets)
            swiper.pagination.bullets.removeClass(params.bulletActiveClass);
        if (params.clickable) {
            $el.off('click', "." + params.bulletClass);
        }
    },
};
var pagination = {
    name: 'pagination',
    params: {
        pagination: {
            el: null,
            bulletElement: 'span',
            clickable: false,
            hideOnClick: false,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: false,
            type: 'bullets',
            dynamicBullets: false,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (number) { return number; },
            formatFractionTotal: function (number) { return number; },
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            modifierClass: 'swiper-pagination-',
            currentClass: 'swiper-pagination-current',
            totalClass: 'swiper-pagination-total',
            hiddenClass: 'swiper-pagination-hidden',
            progressbarFillClass: 'swiper-pagination-progressbar-fill',
            progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
            clickableClass: 'swiper-pagination-clickable',
            lockClass: 'swiper-pagination-lock',
        },
    },
    create: function () {
        var swiper = this;
        Utils.extend(swiper, {
            pagination: {
                init: Pagination.init.bind(swiper),
                render: Pagination.render.bind(swiper),
                update: Pagination.update.bind(swiper),
                destroy: Pagination.destroy.bind(swiper),
                dynamicBulletIndex: 0,
            },
        });
    },
    on: {
        init: function () {
            var swiper = this;
            swiper.pagination.init();
            swiper.pagination.render();
            swiper.pagination.update();
        },
        activeIndexChange: function () {
            var swiper = this;
            if (swiper.params.loop) {
                swiper.pagination.update();
            }
            else if (typeof swiper.snapIndex === 'undefined') {
                swiper.pagination.update();
            }
        },
        snapIndexChange: function () {
            var swiper = this;
            if (!swiper.params.loop) {
                swiper.pagination.update();
            }
        },
        slidesLengthChange: function () {
            var swiper = this;
            if (swiper.params.loop) {
                swiper.pagination.render();
                swiper.pagination.update();
            }
        },
        snapGridLengthChange: function () {
            var swiper = this;
            if (!swiper.params.loop) {
                swiper.pagination.render();
                swiper.pagination.update();
            }
        },
        destroy: function () {
            var swiper = this;
            swiper.pagination.destroy();
        },
        click: function (e) {
            var swiper = this;
            if (swiper.params.pagination.el
                && swiper.params.pagination.hideOnClick
                && swiper.pagination.$el.length > 0
                && !$(e.target).hasClass(swiper.params.pagination.bulletClass)) {
                var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
                if (isHidden === true) {
                    swiper.emit('paginationShow', swiper);
                }
                else {
                    swiper.emit('paginationHide', swiper);
                }
                swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
            }
        },
    },
};
var Scrollbar = {
    setTranslate: function () {
        var swiper = this;
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
            return;
        var scrollbar = swiper.scrollbar, rtl = swiper.rtlTranslate, progress = swiper.progress;
        var dragSize = scrollbar.dragSize, trackSize = scrollbar.trackSize, $dragEl = scrollbar.$dragEl, $el = scrollbar.$el;
        var params = swiper.params.scrollbar;
        var newSize = dragSize;
        var newPos = (trackSize - dragSize) * progress;
        if (rtl) {
            newPos = -newPos;
            if (newPos > 0) {
                newSize = dragSize - newPos;
                newPos = 0;
            }
            else if (-newPos + dragSize > trackSize) {
                newSize = trackSize + newPos;
            }
        }
        else if (newPos < 0) {
            newSize = dragSize + newPos;
            newPos = 0;
        }
        else if (newPos + dragSize > trackSize) {
            newSize = trackSize - newPos;
        }
        if (swiper.isHorizontal()) {
            if (Support.transforms3d) {
                $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
            }
            else {
                $dragEl.transform("translateX(" + newPos + "px)");
            }
            $dragEl[0].style.width = newSize + "px";
        }
        else {
            if (Support.transforms3d) {
                $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
            }
            else {
                $dragEl.transform("translateY(" + newPos + "px)");
            }
            $dragEl[0].style.height = newSize + "px";
        }
        if (params.hide) {
            clearTimeout(swiper.scrollbar.timeout);
            $el[0].style.opacity = 1;
            swiper.scrollbar.timeout = setTimeout(function () {
                $el[0].style.opacity = 0;
                $el.transition(400);
            }, 1000);
        }
    },
    setTransition: function (duration) {
        var swiper = this;
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
            return;
        swiper.scrollbar.$dragEl.transition(duration);
    },
    updateSize: function () {
        var swiper = this;
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el)
            return;
        var scrollbar = swiper.scrollbar;
        var $dragEl = scrollbar.$dragEl, $el = scrollbar.$el;
        $dragEl[0].style.width = '';
        $dragEl[0].style.height = '';
        var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
        var divider = swiper.size / swiper.virtualSize;
        var moveDivider = divider * (trackSize / swiper.size);
        var dragSize;
        if (swiper.params.scrollbar.dragSize === 'auto') {
            dragSize = trackSize * divider;
        }
        else {
            dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
        }
        if (swiper.isHorizontal()) {
            $dragEl[0].style.width = dragSize + "px";
        }
        else {
            $dragEl[0].style.height = dragSize + "px";
        }
        if (divider >= 1) {
            $el[0].style.display = 'none';
        }
        else {
            $el[0].style.display = '';
        }
        if (swiper.params.scrollbar.hide) {
            $el[0].style.opacity = 0;
        }
        Utils.extend(scrollbar, {
            trackSize: trackSize,
            divider: divider,
            moveDivider: moveDivider,
            dragSize: dragSize,
        });
        scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    },
    getPointerPosition: function (e) {
        var swiper = this;
        if (swiper.isHorizontal()) {
            return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX);
        }
        return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
    },
    setDragPosition: function (e) {
        var swiper = this;
        var scrollbar = swiper.scrollbar, rtl = swiper.rtlTranslate;
        var $el = scrollbar.$el, dragSize = scrollbar.dragSize, trackSize = scrollbar.trackSize, dragStartPos = scrollbar.dragStartPos;
        var positionRatio;
        positionRatio = ((scrollbar.getPointerPosition(e)) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top']
            - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);
        if (rtl) {
            positionRatio = 1 - positionRatio;
        }
        var position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);
        swiper.updateProgress(position);
        swiper.setTranslate(position);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    },
    onDragStart: function (e) {
        var swiper = this;
        var params = swiper.params.scrollbar;
        var scrollbar = swiper.scrollbar, $wrapperEl = swiper.$wrapperEl;
        var $el = scrollbar.$el, $dragEl = scrollbar.$dragEl;
        swiper.scrollbar.isTouched = true;
        swiper.scrollbar.dragStartPos = (e.target === $dragEl[0] || e.target === $dragEl)
            ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
        e.preventDefault();
        e.stopPropagation();
        $wrapperEl.transition(100);
        $dragEl.transition(100);
        scrollbar.setDragPosition(e);
        clearTimeout(swiper.scrollbar.dragTimeout);
        $el.transition(0);
        if (params.hide) {
            $el.css('opacity', 1);
        }
        swiper.emit('scrollbarDragStart', e);
    },
    onDragMove: function (e) {
        var swiper = this;
        var scrollbar = swiper.scrollbar, $wrapperEl = swiper.$wrapperEl;
        var $el = scrollbar.$el, $dragEl = scrollbar.$dragEl;
        if (!swiper.scrollbar.isTouched)
            return;
        if (e.preventDefault)
            e.preventDefault();
        else
            e.returnValue = false;
        scrollbar.setDragPosition(e);
        $wrapperEl.transition(0);
        $el.transition(0);
        $dragEl.transition(0);
        swiper.emit('scrollbarDragMove', e);
    },
    onDragEnd: function (e) {
        var swiper = this;
        var params = swiper.params.scrollbar;
        var scrollbar = swiper.scrollbar;
        var $el = scrollbar.$el;
        if (!swiper.scrollbar.isTouched)
            return;
        swiper.scrollbar.isTouched = false;
        if (params.hide) {
            clearTimeout(swiper.scrollbar.dragTimeout);
            swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
                $el.css('opacity', 0);
                $el.transition(400);
            }, 1000);
        }
        swiper.emit('scrollbarDragEnd', e);
        if (params.snapOnRelease) {
            swiper.slideToClosest();
        }
    },
    enableDraggable: function () {
        var swiper = this;
        if (!swiper.params.scrollbar.el)
            return;
        var scrollbar = swiper.scrollbar, touchEventsTouch = swiper.touchEventsTouch, touchEventsDesktop = swiper.touchEventsDesktop, params = swiper.params;
        var $el = scrollbar.$el;
        var target = $el[0];
        var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
        var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
        if (!Support.touch) {
            target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
            doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
            doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
        }
        else {
            target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
            target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
            target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
        }
    },
    disableDraggable: function () {
        var swiper = this;
        if (!swiper.params.scrollbar.el)
            return;
        var scrollbar = swiper.scrollbar, touchEventsTouch = swiper.touchEventsTouch, touchEventsDesktop = swiper.touchEventsDesktop, params = swiper.params;
        var $el = scrollbar.$el;
        var target = $el[0];
        var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
        var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
        if (!Support.touch) {
            target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
            doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
            doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
        }
        else {
            target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
            target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
            target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
        }
    },
    init: function () {
        var swiper = this;
        if (!swiper.params.scrollbar.el)
            return;
        var scrollbar = swiper.scrollbar, $swiperEl = swiper.$el;
        var params = swiper.params.scrollbar;
        var $el = $(params.el);
        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
            $el = $swiperEl.find(params.el);
        }
        var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);
        if ($dragEl.length === 0) {
            $dragEl = $("<div class=\"" + swiper.params.scrollbar.dragClass + "\"></div>");
            $el.append($dragEl);
        }
        Utils.extend(scrollbar, {
            $el: $el,
            el: $el[0],
            $dragEl: $dragEl,
            dragEl: $dragEl[0],
        });
        if (params.draggable) {
            scrollbar.enableDraggable();
        }
    },
    destroy: function () {
        var swiper = this;
        swiper.scrollbar.disableDraggable();
    },
};
var scrollbar = {
    name: 'scrollbar',
    params: {
        scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: false,
            draggable: false,
            snapOnRelease: true,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag',
        },
    },
    create: function () {
        var swiper = this;
        Utils.extend(swiper, {
            scrollbar: {
                init: Scrollbar.init.bind(swiper),
                destroy: Scrollbar.destroy.bind(swiper),
                updateSize: Scrollbar.updateSize.bind(swiper),
                setTranslate: Scrollbar.setTranslate.bind(swiper),
                setTransition: Scrollbar.setTransition.bind(swiper),
                enableDraggable: Scrollbar.enableDraggable.bind(swiper),
                disableDraggable: Scrollbar.disableDraggable.bind(swiper),
                setDragPosition: Scrollbar.setDragPosition.bind(swiper),
                getPointerPosition: Scrollbar.getPointerPosition.bind(swiper),
                onDragStart: Scrollbar.onDragStart.bind(swiper),
                onDragMove: Scrollbar.onDragMove.bind(swiper),
                onDragEnd: Scrollbar.onDragEnd.bind(swiper),
                isTouched: false,
                timeout: null,
                dragTimeout: null,
            },
        });
    },
    on: {
        init: function () {
            var swiper = this;
            swiper.scrollbar.init();
            swiper.scrollbar.updateSize();
            swiper.scrollbar.setTranslate();
        },
        update: function () {
            var swiper = this;
            swiper.scrollbar.updateSize();
        },
        resize: function () {
            var swiper = this;
            swiper.scrollbar.updateSize();
        },
        observerUpdate: function () {
            var swiper = this;
            swiper.scrollbar.updateSize();
        },
        setTranslate: function () {
            var swiper = this;
            swiper.scrollbar.setTranslate();
        },
        setTransition: function (duration) {
            var swiper = this;
            swiper.scrollbar.setTransition(duration);
        },
        destroy: function () {
            var swiper = this;
            swiper.scrollbar.destroy();
        },
    },
};
var Zoom = {
    // Calc Scale From Multi-touches
    getDistanceBetweenTouches: function (e) {
        if (e.targetTouches.length < 2)
            return 1;
        var x1 = e.targetTouches[0].pageX;
        var y1 = e.targetTouches[0].pageY;
        var x2 = e.targetTouches[1].pageX;
        var y2 = e.targetTouches[1].pageY;
        var distance = Math.sqrt((Math.pow((x2 - x1), 2)) + (Math.pow((y2 - y1), 2)));
        return distance;
    },
    // Events
    onGestureStart: function (e) {
        var swiper = this;
        var params = swiper.params.zoom;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;
        if (!Support.gestures) {
            if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
                return;
            }
            zoom.fakeGestureTouched = true;
            gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
        }
        if (!gesture.$slideEl || !gesture.$slideEl.length) {
            gesture.$slideEl = $(e.target).closest('.swiper-slide');
            if (gesture.$slideEl.length === 0)
                gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
            gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
            gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
            if (gesture.$imageWrapEl.length === 0) {
                gesture.$imageEl = undefined;
                return;
            }
        }
        gesture.$imageEl.transition(0);
        swiper.zoom.isScaling = true;
    },
    onGestureChange: function (e) {
        var swiper = this;
        var params = swiper.params.zoom;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
        if (!Support.gestures) {
            if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
                return;
            }
            zoom.fakeGestureMoved = true;
            gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0)
            return;
        if (Support.gestures) {
            zoom.scale = e.scale * zoom.currentScale;
        }
        else {
            zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
        }
        if (zoom.scale > gesture.maxRatio) {
            zoom.scale = (gesture.maxRatio - 1) + (Math.pow(((zoom.scale - gesture.maxRatio) + 1), 0.5));
        }
        if (zoom.scale < params.minRatio) {
            zoom.scale = (params.minRatio + 1) - (Math.pow(((params.minRatio - zoom.scale) + 1), 0.5));
        }
        gesture.$imageEl.transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
    },
    onGestureEnd: function (e) {
        var swiper = this;
        var params = swiper.params.zoom;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
        if (!Support.gestures) {
            if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
                return;
            }
            if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
                return;
            }
            zoom.fakeGestureTouched = false;
            zoom.fakeGestureMoved = false;
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0)
            return;
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
        zoom.currentScale = zoom.scale;
        zoom.isScaling = false;
        if (zoom.scale === 1)
            gesture.$slideEl = undefined;
    },
    onTouchStart: function (e) {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture, image = zoom.image;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0)
            return;
        if (image.isTouched)
            return;
        if (Device.android)
            e.preventDefault();
        image.isTouched = true;
        image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    },
    onTouchMove: function (e) {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture, image = zoom.image, velocity = zoom.velocity;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0)
            return;
        swiper.allowClick = false;
        if (!image.isTouched || !gesture.$slideEl)
            return;
        if (!image.isMoved) {
            image.width = gesture.$imageEl[0].offsetWidth;
            image.height = gesture.$imageEl[0].offsetHeight;
            image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
            image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
            gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
            gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
            gesture.$imageWrapEl.transition(0);
            if (swiper.rtl) {
                image.startX = -image.startX;
                image.startY = -image.startY;
            }
        }
        // Define if we need image drag
        var scaledWidth = image.width * zoom.scale;
        var scaledHeight = image.height * zoom.scale;
        if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight)
            return;
        image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
        image.maxX = -image.minX;
        image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        if (!image.isMoved && !zoom.isScaling) {
            if (swiper.isHorizontal()
                && ((Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x)
                    || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x))) {
                image.isTouched = false;
                return;
            }
            if (!swiper.isHorizontal()
                && ((Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y)
                    || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y))) {
                image.isTouched = false;
                return;
            }
        }
        e.preventDefault();
        e.stopPropagation();
        image.isMoved = true;
        image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
        image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;
        if (image.currentX < image.minX) {
            image.currentX = (image.minX + 1) - (Math.pow(((image.minX - image.currentX) + 1), 0.8));
        }
        if (image.currentX > image.maxX) {
            image.currentX = (image.maxX - 1) + (Math.pow(((image.currentX - image.maxX) + 1), 0.8));
        }
        if (image.currentY < image.minY) {
            image.currentY = (image.minY + 1) - (Math.pow(((image.minY - image.currentY) + 1), 0.8));
        }
        if (image.currentY > image.maxY) {
            image.currentY = (image.maxY - 1) + (Math.pow(((image.currentY - image.maxY) + 1), 0.8));
        }
        // Velocity
        if (!velocity.prevPositionX)
            velocity.prevPositionX = image.touchesCurrent.x;
        if (!velocity.prevPositionY)
            velocity.prevPositionY = image.touchesCurrent.y;
        if (!velocity.prevTime)
            velocity.prevTime = Date.now();
        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2)
            velocity.x = 0;
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2)
            velocity.y = 0;
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
    },
    onTouchEnd: function () {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture, image = zoom.image, velocity = zoom.velocity;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0)
            return;
        if (!image.isTouched || !image.isMoved) {
            image.isTouched = false;
            image.isMoved = false;
            return;
        }
        image.isTouched = false;
        image.isMoved = false;
        var momentumDurationX = 300;
        var momentumDurationY = 300;
        var momentumDistanceX = velocity.x * momentumDurationX;
        var newPositionX = image.currentX + momentumDistanceX;
        var momentumDistanceY = velocity.y * momentumDurationY;
        var newPositionY = image.currentY + momentumDistanceY;
        // Fix duration
        if (velocity.x !== 0)
            momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
        if (velocity.y !== 0)
            momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
        var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY;
        // Define if we need image drag
        var scaledWidth = image.width * zoom.scale;
        var scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
        image.maxX = -image.minX;
        image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
    },
    onTransitionEnd: function () {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
        if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
            gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
            gesture.$imageWrapEl.transform('translate3d(0,0,0)');
            zoom.scale = 1;
            zoom.currentScale = 1;
            gesture.$slideEl = undefined;
            gesture.$imageEl = undefined;
            gesture.$imageWrapEl = undefined;
        }
    },
    // Toggle Zoom
    toggle: function (e) {
        var swiper = this;
        var zoom = swiper.zoom;
        if (zoom.scale && zoom.scale !== 1) {
            // Zoom Out
            zoom.out();
        }
        else {
            // Zoom In
            zoom.in(e);
        }
    },
    in: function (e) {
        var swiper = this;
        var zoom = swiper.zoom;
        var params = swiper.params.zoom;
        var gesture = zoom.gesture, image = zoom.image;
        if (!gesture.$slideEl) {
            gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
            gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
            gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0)
            return;
        gesture.$slideEl.addClass("" + params.zoomedSlideClass);
        var touchX;
        var touchY;
        var offsetX;
        var offsetY;
        var diffX;
        var diffY;
        var translateX;
        var translateY;
        var imageWidth;
        var imageHeight;
        var scaledWidth;
        var scaledHeight;
        var translateMinX;
        var translateMinY;
        var translateMaxX;
        var translateMaxY;
        var slideWidth;
        var slideHeight;
        if (typeof image.touchesStart.x === 'undefined' && e) {
            touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
            touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
        }
        else {
            touchX = image.touchesStart.x;
            touchY = image.touchesStart.y;
        }
        zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        if (e) {
            slideWidth = gesture.$slideEl[0].offsetWidth;
            slideHeight = gesture.$slideEl[0].offsetHeight;
            offsetX = gesture.$slideEl.offset().left;
            offsetY = gesture.$slideEl.offset().top;
            diffX = (offsetX + (slideWidth / 2)) - touchX;
            diffY = (offsetY + (slideHeight / 2)) - touchY;
            imageWidth = gesture.$imageEl[0].offsetWidth;
            imageHeight = gesture.$imageEl[0].offsetHeight;
            scaledWidth = imageWidth * zoom.scale;
            scaledHeight = imageHeight * zoom.scale;
            translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
            translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
            translateMaxX = -translateMinX;
            translateMaxY = -translateMinY;
            translateX = diffX * zoom.scale;
            translateY = diffY * zoom.scale;
            if (translateX < translateMinX) {
                translateX = translateMinX;
            }
            if (translateX > translateMaxX) {
                translateX = translateMaxX;
            }
            if (translateY < translateMinY) {
                translateY = translateMinY;
            }
            if (translateY > translateMaxY) {
                translateY = translateMaxY;
            }
        }
        else {
            translateX = 0;
            translateY = 0;
        }
        gesture.$imageWrapEl.transition(300).transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
        gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
    },
    out: function () {
        var swiper = this;
        var zoom = swiper.zoom;
        var params = swiper.params.zoom;
        var gesture = zoom.gesture;
        if (!gesture.$slideEl) {
            gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
            gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
            gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0)
            return;
        zoom.scale = 1;
        zoom.currentScale = 1;
        gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
        gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
        gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
        gesture.$slideEl = undefined;
    },
    // Attach/Detach Events
    enable: function () {
        var swiper = this;
        var zoom = swiper.zoom;
        if (zoom.enabled)
            return;
        zoom.enabled = true;
        var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;
        // Scale image
        if (Support.gestures) {
            swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
            swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
            swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
        }
        else if (swiper.touchEvents.start === 'touchstart') {
            swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
            swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
            swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
        }
        // Move image
        swiper.$wrapperEl.on(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove);
    },
    disable: function () {
        var swiper = this;
        var zoom = swiper.zoom;
        if (!zoom.enabled)
            return;
        swiper.zoom.enabled = false;
        var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;
        // Scale image
        if (Support.gestures) {
            swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
            swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
            swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
        }
        else if (swiper.touchEvents.start === 'touchstart') {
            swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
            swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
            swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
        }
        // Move image
        swiper.$wrapperEl.off(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove);
    },
};
var zoom = {
    name: 'zoom',
    params: {
        zoom: {
            enabled: false,
            maxRatio: 3,
            minRatio: 1,
            toggle: true,
            containerClass: 'swiper-zoom-container',
            zoomedSlideClass: 'swiper-slide-zoomed',
        },
    },
    create: function () {
        var swiper = this;
        var zoom = {
            enabled: false,
            scale: 1,
            currentScale: 1,
            isScaling: false,
            gesture: {
                $slideEl: undefined,
                slideWidth: undefined,
                slideHeight: undefined,
                $imageEl: undefined,
                $imageWrapEl: undefined,
                maxRatio: 3,
            },
            image: {
                isTouched: undefined,
                isMoved: undefined,
                currentX: undefined,
                currentY: undefined,
                minX: undefined,
                minY: undefined,
                maxX: undefined,
                maxY: undefined,
                width: undefined,
                height: undefined,
                startX: undefined,
                startY: undefined,
                touchesStart: {},
                touchesCurrent: {},
            },
            velocity: {
                x: undefined,
                y: undefined,
                prevPositionX: undefined,
                prevPositionY: undefined,
                prevTime: undefined,
            },
        };
        ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach(function (methodName) {
            zoom[methodName] = Zoom[methodName].bind(swiper);
        });
        Utils.extend(swiper, {
            zoom: zoom,
        });
        var scale = 1;
        Object.defineProperty(swiper.zoom, 'scale', {
            get: function () {
                return scale;
            },
            set: function (value) {
                if (scale !== value) {
                    var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
                    var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
                    swiper.emit('zoomChange', value, imageEl, slideEl);
                }
                scale = value;
            },
        });
    },
    on: {
        init: function () {
            var swiper = this;
            if (swiper.params.zoom.enabled) {
                swiper.zoom.enable();
            }
        },
        destroy: function () {
            var swiper = this;
            swiper.zoom.disable();
        },
        touchStart: function (e) {
            var swiper = this;
            if (!swiper.zoom.enabled)
                return;
            swiper.zoom.onTouchStart(e);
        },
        touchEnd: function (e) {
            var swiper = this;
            if (!swiper.zoom.enabled)
                return;
            swiper.zoom.onTouchEnd(e);
        },
        doubleTap: function (e) {
            var swiper = this;
            if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
                swiper.zoom.toggle(e);
            }
        },
        transitionEnd: function () {
            var swiper = this;
            if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
                swiper.zoom.onTransitionEnd();
            }
        },
    },
};
/* eslint no-underscore-dangle: "off" */
var Autoplay = {
    run: function () {
        var swiper = this;
        var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
        var delay = swiper.params.autoplay.delay;
        if ($activeSlideEl.attr('data-swiper-autoplay')) {
            delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
        }
        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = Utils.nextTick(function () {
            if (swiper.params.autoplay.reverseDirection) {
                if (swiper.params.loop) {
                    swiper.loopFix();
                    swiper.slidePrev(swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                }
                else if (!swiper.isBeginning) {
                    swiper.slidePrev(swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                }
                else if (!swiper.params.autoplay.stopOnLastSlide) {
                    swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                }
                else {
                    swiper.autoplay.stop();
                }
            }
            else if (swiper.params.loop) {
                swiper.loopFix();
                swiper.slideNext(swiper.params.speed, true, true);
                swiper.emit('autoplay');
            }
            else if (!swiper.isEnd) {
                swiper.slideNext(swiper.params.speed, true, true);
                swiper.emit('autoplay');
            }
            else if (!swiper.params.autoplay.stopOnLastSlide) {
                swiper.slideTo(0, swiper.params.speed, true, true);
                swiper.emit('autoplay');
            }
            else {
                swiper.autoplay.stop();
            }
        }, delay);
    },
    start: function () {
        var swiper = this;
        if (typeof swiper.autoplay.timeout !== 'undefined')
            return false;
        if (swiper.autoplay.running)
            return false;
        swiper.autoplay.running = true;
        swiper.emit('autoplayStart');
        swiper.autoplay.run();
        return true;
    },
    stop: function () {
        var swiper = this;
        if (!swiper.autoplay.running)
            return false;
        if (typeof swiper.autoplay.timeout === 'undefined')
            return false;
        if (swiper.autoplay.timeout) {
            clearTimeout(swiper.autoplay.timeout);
            swiper.autoplay.timeout = undefined;
        }
        swiper.autoplay.running = false;
        swiper.emit('autoplayStop');
        return true;
    },
    pause: function (speed) {
        var swiper = this;
        if (!swiper.autoplay.running)
            return;
        if (swiper.autoplay.paused)
            return;
        if (swiper.autoplay.timeout)
            clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.paused = true;
        if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
            swiper.autoplay.paused = false;
            swiper.autoplay.run();
        }
        else {
            swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
            swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
        }
    },
};
var autoplay = {
    name: 'autoplay',
    params: {
        autoplay: {
            enabled: false,
            delay: 3000,
            waitForTransition: true,
            disableOnInteraction: true,
            stopOnLastSlide: false,
            reverseDirection: false,
        },
    },
    create: function () {
        var swiper = this;
        Utils.extend(swiper, {
            autoplay: {
                running: false,
                paused: false,
                run: Autoplay.run.bind(swiper),
                start: Autoplay.start.bind(swiper),
                stop: Autoplay.stop.bind(swiper),
                pause: Autoplay.pause.bind(swiper),
                onTransitionEnd: function (e) {
                    if (!swiper || swiper.destroyed || !swiper.$wrapperEl)
                        return;
                    if (e.target !== this)
                        return;
                    swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
                    swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
                    swiper.autoplay.paused = false;
                    if (!swiper.autoplay.running) {
                        swiper.autoplay.stop();
                    }
                    else {
                        swiper.autoplay.run();
                    }
                },
            },
        });
    },
    on: {
        init: function () {
            var swiper = this;
            if (swiper.params.autoplay.enabled) {
                swiper.autoplay.start();
            }
        },
        beforeTransitionStart: function (speed, internal) {
            var swiper = this;
            if (swiper.autoplay.running) {
                if (internal || !swiper.params.autoplay.disableOnInteraction) {
                    swiper.autoplay.pause(speed);
                }
                else {
                    swiper.autoplay.stop();
                }
            }
        },
        sliderFirstMove: function () {
            var swiper = this;
            if (swiper.autoplay.running) {
                if (swiper.params.autoplay.disableOnInteraction) {
                    swiper.autoplay.stop();
                }
                else {
                    swiper.autoplay.pause();
                }
            }
        },
        destroy: function () {
            var swiper = this;
            if (swiper.autoplay.running) {
                swiper.autoplay.stop();
            }
        },
    },
};
// Swiper Class
var components = [
    Device$1,
    Support$1,
    Browser$1,
    Resize,
    Observer$1,
];
if (typeof Swiper.use === 'undefined') {
    Swiper.use = Swiper.Class.use;
    Swiper.installModule = Swiper.Class.installModule;
}
Swiper.use(components);
Swiper.use([pagination, scrollbar, autoplay, zoom]);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L3N3aXBlci5idW5kbGUtY2NkYWFjNTQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osbURBQW1ELEVBQUU7QUFDckQseURBQXlELEVBQUU7QUFDM0Q7QUFDQSwrQkFBK0IsRUFBRTtBQUNqQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNkNBQTZDLEVBQUU7QUFDL0M7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsbURBQW1ELEVBQUU7QUFDckQ7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTCxlQUFlLFdBQVc7QUFDMUIsQ0FBQyxZQUFZO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsS0FBSztBQUNMLG1EQUFtRCxFQUFFO0FBQ3JELHlEQUF5RCxFQUFFO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMLDZCQUE2QixFQUFFO0FBQy9CLDJCQUEyQixFQUFFO0FBQzdCLGNBQWM7QUFDZCx1Q0FBdUMsRUFBRTtBQUN6QywyQ0FBMkMsRUFBRTtBQUM3QyxDQUFDLFVBQVU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrQ0FBa0M7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdCQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2Qyx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsMkJBQTJCLHNCQUFzQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsUUFBUTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsc0JBQXNCLEVBQUU7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFCQUFxQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxRQUFRO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixtQkFBbUIsaUJBQWlCO0FBQ3BDLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQSx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsK0JBQStCLFdBQVc7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDhCQUE4QixZQUFZO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLDRCQUE0QixFQUFFO0FBQ3hHO0FBQ0EsdUVBQXVFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsMEJBQTBCLEVBQUU7QUFDckc7QUFDQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSwrREFBK0QsaUJBQWlCO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGdDQUFnQyxhQUFhO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHVDQUF1QyxvQkFBb0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsK0JBQStCLEVBQUU7QUFDMUU7QUFDQTtBQUNBLGdEQUFnRCw0REFBYztBQUM5RDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBLG9CQUFvQixvQ0FBb0M7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5REFBeUQ7QUFDakY7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHlEQUF5RDtBQUNyRjtBQUNBLDRCQUE0QiwwREFBMEQ7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5REFBeUQ7QUFDckY7QUFDQSw0QkFBNEIsMERBQTBEO0FBQ3RGO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrQ0FBa0M7QUFDOUQ7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQSx3QkFBd0Isb0NBQW9DO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRDQUE0QztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUseUJBQXlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMkNBQTJDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDJDQUEyQztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsd0NBQXdDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxxQkFBcUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHFCQUFxQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixXQUFXO0FBQ3RDLDJCQUEyQiwyQkFBMkI7QUFDdEQsa0NBQWtDLHFCQUFxQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixXQUFXO0FBQ3RDLDJCQUEyQiwyQkFBMkI7QUFDdEQsa0NBQWtDLHFCQUFxQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkJBQTJCO0FBQ3RELGtDQUFrQyxxQkFBcUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwyQkFBMkI7QUFDdEQsa0NBQWtDLHFCQUFxQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCx1QkFBdUIsRUFBRTtBQUNuRiw4REFBOEQsdUJBQXVCLEVBQUU7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDJCQUEyQjtBQUN0RCxrQ0FBa0MscUJBQXFCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkJBQTJCO0FBQ3RELGtDQUFrQyxxQkFBcUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixvQkFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBO0FBQ0EsMENBQTBDLFFBQVE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsWUFBWTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMEJBQTBCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG9CQUFvQjtBQUNoRSxzQ0FBc0Msb0JBQW9CO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFCQUFxQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrSUFBa0ksZ0NBQWdDO0FBQ2xLO0FBQ0EseUdBQXlHLG1DQUFtQztBQUM1STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvSUFBb0ksZ0NBQWdDO0FBQ3BLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxpQ0FBaUMsMENBQTBDLEVBQUU7QUFDN0UsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBLFNBQVM7QUFDVDtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLCtDQUErQztBQUMvQyw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxXQUFXLGtCQUFrQjtBQUM1RTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxtQkFBbUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsUUFBUTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsbUJBQW1CO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBbUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyx1QkFBdUI7QUFDL0QscUNBQXFDLG9CQUFvQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkJBQTZCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGdEQUFnRDtBQUMvRjtBQUNBLHNEQUFzRCxvQkFBb0I7QUFDMUUsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGtCQUFrQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxlQUFlLEVBQUU7QUFDdkUsb0RBQW9ELGVBQWUsRUFBRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUYsaUNBQWlDO0FBQ3BILG9GQUFvRixnQ0FBZ0M7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUYsaUNBQWlDO0FBQ3BILG9GQUFvRixnQ0FBZ0M7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3SUFBd0ksZ0NBQWdDO0FBQ3hLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdJQUF3SSxnQ0FBZ0M7QUFDeEs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyxrQ0FBa0M7QUFDbEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0IiLCJmaWxlIjoiNy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfX2V4dGVuZHMsIF9fc3ByZWFkQXJyYXlzIH0gZnJvbSBcInRzbGliXCI7XG4vKipcbiAqIFNTUiBXaW5kb3cgMS4wLjFcbiAqIEJldHRlciBoYW5kbGluZyBmb3Igd2luZG93IG9iamVjdCBpbiBTU1IgZW52aXJvbm1lbnRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2xpbWl0czR3ZWIvc3NyLXdpbmRvd1xuICpcbiAqIENvcHlyaWdodCAyMDE4LCBWbGFkaW1pciBLaGFybGFtcGlkaVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVFxuICpcbiAqIFJlbGVhc2VkIG9uOiBKdWx5IDE4LCAyMDE4XG4gKi9cbnZhciBkb2MgPSAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgPyB7XG4gICAgYm9keToge30sXG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcigpIHsgfSxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKCkgeyB9LFxuICAgIGFjdGl2ZUVsZW1lbnQ6IHtcbiAgICAgICAgYmx1cjogZnVuY3Rpb24gYmx1cigpIHsgfSxcbiAgICAgICAgbm9kZU5hbWU6ICcnLFxuICAgIH0sXG4gICAgcXVlcnlTZWxlY3RvcjogZnVuY3Rpb24gcXVlcnlTZWxlY3RvcigpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBxdWVyeVNlbGVjdG9yQWxsOiBmdW5jdGlvbiBxdWVyeVNlbGVjdG9yQWxsKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfSxcbiAgICBnZXRFbGVtZW50QnlJZDogZnVuY3Rpb24gZ2V0RWxlbWVudEJ5SWQoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgY3JlYXRlRXZlbnQ6IGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5pdEV2ZW50OiBmdW5jdGlvbiBpbml0RXZlbnQoKSB7IH0sXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgY2hpbGROb2RlczogW10sXG4gICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGU6IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZSgpIHsgfSxcbiAgICAgICAgICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lOiBmdW5jdGlvbiBnZXRFbGVtZW50c0J5VGFnTmFtZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbG9jYXRpb246IHsgaGFzaDogJycgfSxcbn0gOiBkb2N1bWVudDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxudmFyIHdpbiA9ICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgPyB7XG4gICAgZG9jdW1lbnQ6IGRvYyxcbiAgICBuYXZpZ2F0b3I6IHtcbiAgICAgICAgdXNlckFnZW50OiAnJyxcbiAgICB9LFxuICAgIGxvY2F0aW9uOiB7fSxcbiAgICBoaXN0b3J5OiB7fSxcbiAgICBDdXN0b21FdmVudDogZnVuY3Rpb24gQ3VzdG9tRXZlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcigpIHsgfSxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKCkgeyB9LFxuICAgIGdldENvbXB1dGVkU3R5bGU6IGZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRQcm9wZXJ0eVZhbHVlOiBmdW5jdGlvbiBnZXRQcm9wZXJ0eVZhbHVlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBJbWFnZTogZnVuY3Rpb24gSW1hZ2UoKSB7IH0sXG4gICAgRGF0ZTogZnVuY3Rpb24gRGF0ZSgpIHsgfSxcbiAgICBzY3JlZW46IHt9LFxuICAgIHNldFRpbWVvdXQ6IGZ1bmN0aW9uIHNldFRpbWVvdXQoKSB7IH0sXG4gICAgY2xlYXJUaW1lb3V0OiBmdW5jdGlvbiBjbGVhclRpbWVvdXQoKSB7IH0sXG59IDogd2luZG93OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4vKipcbiAqIERvbTcgMi4xLjNcbiAqIE1pbmltYWxpc3RpYyBKYXZhU2NyaXB0IGxpYnJhcnkgZm9yIERPTSBtYW5pcHVsYXRpb24sIHdpdGggYSBqUXVlcnktY29tcGF0aWJsZSBBUElcbiAqIGh0dHA6Ly9mcmFtZXdvcms3LmlvL2RvY3MvZG9tLmh0bWxcbiAqXG4gKiBDb3B5cmlnaHQgMjAxOSwgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqIFRoZSBpRGFuZ2Vyby51c1xuICogaHR0cDovL3d3dy5pZGFuZ2Vyby51cy9cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciBNSVRcbiAqXG4gKiBSZWxlYXNlZCBvbjogRmVicnVhcnkgMTEsIDIwMTlcbiAqL1xudmFyIERvbTcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRG9tNyhhcnIpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAvLyBDcmVhdGUgYXJyYXktbGlrZSBvYmplY3RcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHNlbGZbaV0gPSBhcnJbaV07XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5sZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgICAgICAvLyBSZXR1cm4gY29sbGVjdGlvbiB3aXRoIG1ldGhvZHNcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBEb203O1xufSgpKTtcbmZ1bmN0aW9uICQoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgYXJyID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIGlmIChzZWxlY3RvciAmJiAhY29udGV4dCkge1xuICAgICAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBEb203KSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIC8vIFN0cmluZ1xuICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIGVscyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciB0ZW1wUGFyZW50ID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIGh0bWxfMSA9IHNlbGVjdG9yLnRyaW0oKTtcbiAgICAgICAgICAgIGlmIChodG1sXzEuaW5kZXhPZignPCcpID49IDAgJiYgaHRtbF8xLmluZGV4T2YoJz4nKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvQ3JlYXRlID0gJ2Rpdic7XG4gICAgICAgICAgICAgICAgaWYgKGh0bWxfMS5pbmRleE9mKCc8bGknKSA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgdG9DcmVhdGUgPSAndWwnO1xuICAgICAgICAgICAgICAgIGlmIChodG1sXzEuaW5kZXhPZignPHRyJykgPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHRvQ3JlYXRlID0gJ3Rib2R5JztcbiAgICAgICAgICAgICAgICBpZiAoaHRtbF8xLmluZGV4T2YoJzx0ZCcpID09PSAwIHx8IGh0bWxfMS5pbmRleE9mKCc8dGgnKSA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgdG9DcmVhdGUgPSAndHInO1xuICAgICAgICAgICAgICAgIGlmIChodG1sXzEuaW5kZXhPZignPHRib2R5JykgPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHRvQ3JlYXRlID0gJ3RhYmxlJztcbiAgICAgICAgICAgICAgICBpZiAoaHRtbF8xLmluZGV4T2YoJzxvcHRpb24nKSA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgdG9DcmVhdGUgPSAnc2VsZWN0JztcbiAgICAgICAgICAgICAgICB0ZW1wUGFyZW50ID0gZG9jLmNyZWF0ZUVsZW1lbnQodG9DcmVhdGUpO1xuICAgICAgICAgICAgICAgIHRlbXBQYXJlbnQuaW5uZXJIVE1MID0gaHRtbF8xO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0ZW1wUGFyZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2godGVtcFBhcmVudC5jaGlsZE5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRleHQgJiYgc2VsZWN0b3JbMF0gPT09ICcjJyAmJiAhc2VsZWN0b3IubWF0Y2goL1sgLjw+On5dLykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUHVyZSBJRCBzZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICBlbHMgPSBbZG9jLmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yLnRyaW0oKS5zcGxpdCgnIycpWzFdKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBPdGhlciBzZWxlY3RvcnNcbiAgICAgICAgICAgICAgICAgICAgZWxzID0gKGNvbnRleHQgfHwgZG9jKS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsc1tpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGVsc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGVjdG9yLm5vZGVUeXBlIHx8IHNlbGVjdG9yID09PSB3aW4gfHwgc2VsZWN0b3IgPT09IGRvYykge1xuICAgICAgICAgICAgLy8gTm9kZS9lbGVtZW50XG4gICAgICAgICAgICBhcnIucHVzaChzZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZWN0b3IubGVuZ3RoID4gMCAmJiBzZWxlY3RvclswXS5ub2RlVHlwZSkge1xuICAgICAgICAgICAgLy8gQXJyYXkgb2YgZWxlbWVudHMgb3IgaW5zdGFuY2Ugb2YgRG9tXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2VsZWN0b3IubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChzZWxlY3RvcltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEb203KGFycik7XG59XG4kLmZuID0gRG9tNy5wcm90b3R5cGU7XG4kLkNsYXNzID0gRG9tNztcbiQuRG9tNyA9IERvbTc7XG5mdW5jdGlvbiB1bmlxdWUoYXJyKSB7XG4gICAgdmFyIHVuaXF1ZUFycmF5ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHVuaXF1ZUFycmF5LmluZGV4T2YoYXJyW2ldKSA9PT0gLTEpXG4gICAgICAgICAgICB1bmlxdWVBcnJheS5wdXNoKGFycltpXSk7XG4gICAgfVxuICAgIHJldHVybiB1bmlxdWVBcnJheTtcbn1cbi8vIENsYXNzZXMgYW5kIGF0dHJpYnV0ZXNcbmZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdmFyIGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbal0gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0aGlzW2pdLmNsYXNzTGlzdCAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgdGhpc1tqXS5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbal0gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0aGlzW2pdLmNsYXNzTGlzdCAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgdGhpc1tqXS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gaGFzQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCF0aGlzWzBdKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG59XG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1tqXSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXNbal0uY2xhc3NMaXN0ICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICB0aGlzW2pdLmNsYXNzTGlzdC50b2dnbGUoY2xhc3Nlc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiBhdHRyKGF0dHJzLCB2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhdHRycyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gR2V0IGF0dHJcbiAgICAgICAgaWYgKHRoaXNbMF0pXG4gICAgICAgICAgICByZXR1cm4gdGhpc1swXS5nZXRBdHRyaWJ1dGUoYXR0cnMpO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBTZXQgYXR0cnNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIC8vIFN0cmluZ1xuICAgICAgICAgICAgdGhpc1tpXS5zZXRBdHRyaWJ1dGUoYXR0cnMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE9iamVjdFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBmb3IgKHZhciBhdHRyTmFtZSBpbiBhdHRycykge1xuICAgICAgICAgICAgICAgIHRoaXNbaV1bYXR0ck5hbWVdID0gYXR0cnNbYXR0ck5hbWVdO1xuICAgICAgICAgICAgICAgIHRoaXNbaV0uc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5mdW5jdGlvbiByZW1vdmVBdHRyKGF0dHIpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdGhpc1tpXS5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gZGF0YShrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVsO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGVsID0gdGhpc1swXTtcbiAgICAgICAgLy8gR2V0IHZhbHVlXG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgaWYgKGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UgJiYgKGtleSBpbiBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZGF0YUtleSA9IGVsLmdldEF0dHJpYnV0ZShcImRhdGEtXCIgKyBrZXkpO1xuICAgICAgICAgICAgaWYgKGRhdGFLZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YUtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gU2V0IHZhbHVlXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGVsID0gdGhpc1tpXTtcbiAgICAgICAgaWYgKCFlbC5kb203RWxlbWVudERhdGFTdG9yYWdlKVxuICAgICAgICAgICAgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSA9IHt9O1xuICAgICAgICBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG4vLyBUcmFuc2Zvcm1zXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmZ1bmN0aW9uIHRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGVsU3R5bGUgPSB0aGlzW2ldLnN0eWxlO1xuICAgICAgICBlbFN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgZWxTdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gdHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgIGlmICh0eXBlb2YgZHVyYXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24gKyBcIm1zXCI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBlbFN0eWxlID0gdGhpc1tpXS5zdHlsZTtcbiAgICAgICAgZWxTdHlsZS53ZWJraXRUcmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgZWxTdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG4vLyBFdmVudHNcbmZ1bmN0aW9uIG9uKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgZXZlbnRUeXBlID0gYXJnc1swXSwgdGFyZ2V0U2VsZWN0b3IgPSBhcmdzWzFdLCBsaXN0ZW5lciA9IGFyZ3NbMl0sIGNhcHR1cmUgPSBhcmdzWzNdO1xuICAgIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBldmVudFR5cGUgPSBhcmdzWzBdLCBsaXN0ZW5lciA9IGFyZ3NbMV0sIGNhcHR1cmUgPSBhcmdzWzJdO1xuICAgICAgICB0YXJnZXRTZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKCFjYXB0dXJlKVxuICAgICAgICBjYXB0dXJlID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gaGFuZGxlTGl2ZUV2ZW50KGUpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIGV2ZW50RGF0YSA9IGUudGFyZ2V0LmRvbTdFdmVudERhdGEgfHwgW107XG4gICAgICAgIGlmIChldmVudERhdGEuaW5kZXhPZihlKSA8IDApIHtcbiAgICAgICAgICAgIGV2ZW50RGF0YS51bnNoaWZ0KGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkKHRhcmdldCkuaXModGFyZ2V0U2VsZWN0b3IpKVxuICAgICAgICAgICAgbGlzdGVuZXIuYXBwbHkodGFyZ2V0LCBldmVudERhdGEpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnRzXzEgPSAkKHRhcmdldCkucGFyZW50cygpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHBhcmVudHNfMS5sZW5ndGg7IGsgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmICgkKHBhcmVudHNfMVtrXSkuaXModGFyZ2V0U2VsZWN0b3IpKVxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5hcHBseShwYXJlbnRzXzFba10sIGV2ZW50RGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlRXZlbnQoZSkge1xuICAgICAgICB2YXIgZXZlbnREYXRhID0gZSAmJiBlLnRhcmdldCA/IGUudGFyZ2V0LmRvbTdFdmVudERhdGEgfHwgW10gOiBbXTtcbiAgICAgICAgaWYgKGV2ZW50RGF0YS5pbmRleE9mKGUpIDwgMCkge1xuICAgICAgICAgICAgZXZlbnREYXRhLnVuc2hpZnQoZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgZXZlbnREYXRhKTtcbiAgICB9XG4gICAgdmFyIGV2ZW50cyA9IGV2ZW50VHlwZS5zcGxpdCgnICcpO1xuICAgIHZhciBqO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgZWwgPSB0aGlzW2ldO1xuICAgICAgICBpZiAoIXRhcmdldFNlbGVjdG9yKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgZXZlbnRzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gZXZlbnRzW2pdO1xuICAgICAgICAgICAgICAgIGlmICghZWwuZG9tN0xpc3RlbmVycylcbiAgICAgICAgICAgICAgICAgICAgZWwuZG9tN0xpc3RlbmVycyA9IHt9O1xuICAgICAgICAgICAgICAgIGlmICghZWwuZG9tN0xpc3RlbmVyc1tldmVudF0pXG4gICAgICAgICAgICAgICAgICAgIGVsLmRvbTdMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICAgICAgICAgICAgZWwuZG9tN0xpc3RlbmVyc1tldmVudF0ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyOiBsaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgcHJveHlMaXN0ZW5lcjogaGFuZGxlRXZlbnQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlRXZlbnQsIGNhcHR1cmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTGl2ZSBldmVudHNcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBldmVudHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBldmVudHNbal07XG4gICAgICAgICAgICAgICAgaWYgKCFlbC5kb203TGl2ZUxpc3RlbmVycylcbiAgICAgICAgICAgICAgICAgICAgZWwuZG9tN0xpdmVMaXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgICAgICAgICBpZiAoIWVsLmRvbTdMaXZlTGlzdGVuZXJzW2V2ZW50XSlcbiAgICAgICAgICAgICAgICAgICAgZWwuZG9tN0xpdmVMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICAgICAgICAgICAgZWwuZG9tN0xpdmVMaXN0ZW5lcnNbZXZlbnRdLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcjogbGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgIHByb3h5TGlzdGVuZXI6IGhhbmRsZUxpdmVFdmVudCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVMaXZlRXZlbnQsIGNhcHR1cmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gb2ZmKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgZXZlbnRUeXBlID0gYXJnc1swXSwgdGFyZ2V0U2VsZWN0b3IgPSBhcmdzWzFdLCBsaXN0ZW5lciA9IGFyZ3NbMl0sIGNhcHR1cmUgPSBhcmdzWzNdO1xuICAgIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBldmVudFR5cGUgPSBhcmdzWzBdLCBsaXN0ZW5lciA9IGFyZ3NbMV0sIGNhcHR1cmUgPSBhcmdzWzJdO1xuICAgICAgICB0YXJnZXRTZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKCFjYXB0dXJlKVxuICAgICAgICBjYXB0dXJlID0gZmFsc2U7XG4gICAgdmFyIGV2ZW50cyA9IGV2ZW50VHlwZS5zcGxpdCgnICcpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBldmVudCA9IGV2ZW50c1tpXTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSB0aGlzW2pdO1xuICAgICAgICAgICAgdmFyIGhhbmRsZXJzID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKCF0YXJnZXRTZWxlY3RvciAmJiBlbC5kb203TGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnMgPSBlbC5kb203TGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRhcmdldFNlbGVjdG9yICYmIGVsLmRvbTdMaXZlTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnMgPSBlbC5kb203TGl2ZUxpc3RlbmVyc1tldmVudF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFuZGxlcnMgJiYgaGFuZGxlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IGhhbmRsZXJzLmxlbmd0aCAtIDE7IGsgPj0gMDsgayAtPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyID0gaGFuZGxlcnNba107XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lciAmJiBoYW5kbGVyLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlci5wcm94eUxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShrLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChsaXN0ZW5lciAmJiBoYW5kbGVyLmxpc3RlbmVyICYmIGhhbmRsZXIubGlzdGVuZXIuZG9tN3Byb3h5ICYmIGhhbmRsZXIubGlzdGVuZXIuZG9tN3Byb3h5ID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlci5wcm94eUxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShrLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIucHJveHlMaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaywgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiB0cmlnZ2VyKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgZXZlbnRzID0gYXJnc1swXS5zcGxpdCgnICcpO1xuICAgIHZhciBldmVudERhdGEgPSBhcmdzWzFdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBldmVudCA9IGV2ZW50c1tpXTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSB0aGlzW2pdO1xuICAgICAgICAgICAgdmFyIGV2dCA9IHZvaWQgMDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZXZ0ID0gbmV3IHdpbi5DdXN0b21FdmVudChldmVudCwge1xuICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IGV2ZW50RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZXZ0ID0gZG9jLmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICAgICAgICAgIGV2dC5pbml0RXZlbnQoZXZlbnQsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIGV2dC5kZXRhaWwgPSBldmVudERhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGVsLmRvbTdFdmVudERhdGEgPSBhcmdzLmZpbHRlcihmdW5jdGlvbiAoZGF0YSwgZGF0YUluZGV4KSB7IHJldHVybiBkYXRhSW5kZXggPiAwOyB9KTtcbiAgICAgICAgICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICAgICAgICAgIGVsLmRvbTdFdmVudERhdGEgPSBbXTtcbiAgICAgICAgICAgIGRlbGV0ZSBlbC5kb203RXZlbnREYXRhO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChjYWxsYmFjaykge1xuICAgIHZhciBldmVudHMgPSBbJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCAndHJhbnNpdGlvbmVuZCddO1xuICAgIHZhciBkb20gPSB0aGlzO1xuICAgIHZhciBpO1xuICAgIGZ1bmN0aW9uIGZpcmVDYWxsQmFjayhlKSB7XG4gICAgICAgIC8qIGpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZSk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGRvbS5vZmYoZXZlbnRzW2ldLCBmaXJlQ2FsbEJhY2spO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBkb20ub24oZXZlbnRzW2ldLCBmaXJlQ2FsbEJhY2spO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gb3V0ZXJXaWR0aChpbmNsdWRlTWFyZ2lucykge1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKGluY2x1ZGVNYXJnaW5zKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIHZhciBzdHlsZXNfMSA9IHRoaXMuc3R5bGVzKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRXaWR0aCArIHBhcnNlRmxvYXQoc3R5bGVzXzEuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLXJpZ2h0JykpICsgcGFyc2VGbG9hdChzdHlsZXNfMS5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tbGVmdCcpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRXaWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBvdXRlckhlaWdodChpbmNsdWRlTWFyZ2lucykge1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKGluY2x1ZGVNYXJnaW5zKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIHZhciBzdHlsZXNfMiA9IHRoaXMuc3R5bGVzKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRIZWlnaHQgKyBwYXJzZUZsb2F0KHN0eWxlc18yLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi10b3AnKSkgKyBwYXJzZUZsb2F0KHN0eWxlc18yLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1ib3R0b20nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIG9mZnNldCgpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBlbCA9IHRoaXNbMF07XG4gICAgICAgIHZhciBib3ggPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgICAgICAgdmFyIGNsaWVudFRvcCA9IGVsLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuICAgICAgICB2YXIgY2xpZW50TGVmdCA9IGVsLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSBlbCA9PT0gd2luID8gd2luLnNjcm9sbFkgOiBlbC5zY3JvbGxUb3A7XG4gICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gZWwgPT09IHdpbiA/IHdpbi5zY3JvbGxYIDogZWwuc2Nyb2xsTGVmdDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogKGJveC50b3AgKyBzY3JvbGxUb3ApIC0gY2xpZW50VG9wLFxuICAgICAgICAgICAgbGVmdDogKGJveC5sZWZ0ICsgc2Nyb2xsTGVmdCkgLSBjbGllbnRMZWZ0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHN0eWxlcygpIHtcbiAgICBpZiAodGhpc1swXSlcbiAgICAgICAgcmV0dXJuIHdpbi5nZXRDb21wdXRlZFN0eWxlKHRoaXNbMF0sIG51bGwpO1xuICAgIHJldHVybiB7fTtcbn1cbmZ1bmN0aW9uIGNzcyhwcm9wcywgdmFsdWUpIHtcbiAgICB2YXIgaTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAodHlwZW9mIHByb3BzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKHRoaXNbMF0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbi5nZXRDb21wdXRlZFN0eWxlKHRoaXNbMF0sIG51bGwpLmdldFByb3BlcnR5VmFsdWUocHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uc3R5bGVbcHJvcF0gPSBwcm9wc1twcm9wXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgcHJvcHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB0aGlzW2ldLnN0eWxlW3Byb3BzXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cbi8vIEl0ZXJhdGUgb3ZlciB0aGUgY29sbGVjdGlvbiBwYXNzaW5nIGVsZW1lbnRzIHRvIGBjYWxsYmFja2BcbmZ1bmN0aW9uIGVhY2goY2FsbGJhY2spIHtcbiAgICAvLyBEb24ndCBib3RoZXIgY29udGludWluZyB3aXRob3V0IGEgY2FsbGJhY2tcbiAgICBpZiAoIWNhbGxiYWNrKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIGN1cnJlbnQgY29sbGVjdGlvblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAvLyBJZiB0aGUgY2FsbGJhY2sgcmV0dXJucyBmYWxzZVxuICAgICAgICBpZiAoY2FsbGJhY2suY2FsbCh0aGlzW2ldLCBpLCB0aGlzW2ldKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vIEVuZCB0aGUgbG9vcCBlYXJseVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUmV0dXJuIGB0aGlzYCB0byBhbGxvdyBjaGFpbmVkIERPTSBvcGVyYXRpb25zXG4gICAgcmV0dXJuIHRoaXM7XG59XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmZ1bmN0aW9uIGh0bWwoaHRtbCkge1xuICAgIGlmICh0eXBlb2YgaHRtbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMF0gPyB0aGlzWzBdLmlubmVySFRNTCA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHRoaXNbaV0uaW5uZXJIVE1MID0gaHRtbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmZ1bmN0aW9uIHRleHQodGV4dCkge1xuICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKHRoaXNbMF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzWzBdLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHRoaXNbaV0udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIGlzKHNlbGVjdG9yKSB7XG4gICAgdmFyIGVsID0gdGhpc1swXTtcbiAgICB2YXIgY29tcGFyZVdpdGg7XG4gICAgdmFyIGk7XG4gICAgaWYgKCFlbCB8fCB0eXBlb2Ygc2VsZWN0b3IgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGVsLm1hdGNoZXMpXG4gICAgICAgICAgICByZXR1cm4gZWwubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgICAgIGVsc2UgaWYgKGVsLndlYmtpdE1hdGNoZXNTZWxlY3RvcilcbiAgICAgICAgICAgIHJldHVybiBlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICBlbHNlIGlmIChlbC5tc01hdGNoZXNTZWxlY3RvcilcbiAgICAgICAgICAgIHJldHVybiBlbC5tc01hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgIGNvbXBhcmVXaXRoID0gJChzZWxlY3Rvcik7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb21wYXJlV2l0aC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKGNvbXBhcmVXaXRoW2ldID09PSBlbClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKHNlbGVjdG9yID09PSBkb2MpXG4gICAgICAgIHJldHVybiBlbCA9PT0gZG9jO1xuICAgIGVsc2UgaWYgKHNlbGVjdG9yID09PSB3aW4pXG4gICAgICAgIHJldHVybiBlbCA9PT0gd2luO1xuICAgIGlmIChzZWxlY3Rvci5ub2RlVHlwZSB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIERvbTcpIHtcbiAgICAgICAgY29tcGFyZVdpdGggPSBzZWxlY3Rvci5ub2RlVHlwZSA/IFtzZWxlY3Rvcl0gOiBzZWxlY3RvcjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbXBhcmVXaXRoLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoY29tcGFyZVdpdGhbaV0gPT09IGVsKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaW5kZXgoKSB7XG4gICAgdmFyIGNoaWxkID0gdGhpc1swXTtcbiAgICB2YXIgaTtcbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgaSA9IDA7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKGNoaWxkID0gY2hpbGQucHJldmlvdXNTaWJsaW5nKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09PSAxKVxuICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuZnVuY3Rpb24gZXEoaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIGluZGV4ID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICAgIHZhciByZXR1cm5JbmRleDtcbiAgICBpZiAoaW5kZXggPiBsZW5ndGggLSAxKSB7XG4gICAgICAgIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gICAgfVxuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgcmV0dXJuSW5kZXggPSBsZW5ndGggKyBpbmRleDtcbiAgICAgICAgaWYgKHJldHVybkluZGV4IDwgMClcbiAgICAgICAgICAgIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gICAgICAgIHJldHVybiBuZXcgRG9tNyhbdGhpc1tyZXR1cm5JbmRleF1dKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEb203KFt0aGlzW2luZGV4XV0pO1xufVxuZnVuY3Rpb24gYXBwZW5kKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgbmV3Q2hpbGQ7XG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCBhcmdzLmxlbmd0aDsgayArPSAxKSB7XG4gICAgICAgIG5ld0NoaWxkID0gYXJnc1trXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5ld0NoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wRGl2ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRlbXBEaXYuaW5uZXJIVE1MID0gbmV3Q2hpbGQ7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHRlbXBEaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmFwcGVuZENoaWxkKHRlbXBEaXYuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobmV3Q2hpbGQgaW5zdGFuY2VvZiBEb203KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBuZXdDaGlsZC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmFwcGVuZENoaWxkKG5ld0NoaWxkW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzW2ldLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIHByZXBlbmQobmV3Q2hpbGQpIHtcbiAgICB2YXIgaTtcbiAgICB2YXIgajtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAodHlwZW9mIG5ld0NoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIHRlbXBEaXYgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0ZW1wRGl2LmlubmVySFRNTCA9IG5ld0NoaWxkO1xuICAgICAgICAgICAgZm9yIChqID0gdGVtcERpdi5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGogPj0gMDsgaiAtPSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tpXS5pbnNlcnRCZWZvcmUodGVtcERpdi5jaGlsZE5vZGVzW2pdLCB0aGlzW2ldLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5ld0NoaWxkIGluc3RhbmNlb2YgRG9tNykge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5ld0NoaWxkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tpXS5pbnNlcnRCZWZvcmUobmV3Q2hpbGRbal0sIHRoaXNbaV0uY2hpbGROb2Rlc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzW2ldLmluc2VydEJlZm9yZShuZXdDaGlsZCwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIG5leHQoc2VsZWN0b3IpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgaWYgKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nICYmICQodGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcpLmlzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRG9tNyhbdGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEb203KFt0aGlzWzBdLm5leHRFbGVtZW50U2libGluZ10pO1xuICAgICAgICByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERvbTcoW10pO1xufVxuZnVuY3Rpb24gbmV4dEFsbChzZWxlY3Rvcikge1xuICAgIHZhciBuZXh0RWxzID0gW107XG4gICAgdmFyIGVsID0gdGhpc1swXTtcbiAgICBpZiAoIWVsKVxuICAgICAgICByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgIHdoaWxlIChlbC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICAgICAgdmFyIG5leHRfMSA9IGVsLm5leHRFbGVtZW50U2libGluZzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGlmICgkKG5leHRfMSkuaXMoc2VsZWN0b3IpKVxuICAgICAgICAgICAgICAgIG5leHRFbHMucHVzaChuZXh0XzEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIG5leHRFbHMucHVzaChuZXh0XzEpO1xuICAgICAgICBlbCA9IG5leHRfMTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEb203KG5leHRFbHMpO1xufVxuZnVuY3Rpb24gcHJldihzZWxlY3Rvcikge1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGVsID0gdGhpc1swXTtcbiAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICBpZiAoZWwucHJldmlvdXNFbGVtZW50U2libGluZyAmJiAkKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpLmlzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRG9tNyhbZWwucHJldmlvdXNFbGVtZW50U2libGluZ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEb203KFtdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWwucHJldmlvdXNFbGVtZW50U2libGluZylcbiAgICAgICAgICAgIHJldHVybiBuZXcgRG9tNyhbZWwucHJldmlvdXNFbGVtZW50U2libGluZ10pO1xuICAgICAgICByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERvbTcoW10pO1xufVxuZnVuY3Rpb24gcHJldkFsbChzZWxlY3Rvcikge1xuICAgIHZhciBwcmV2RWxzID0gW107XG4gICAgdmFyIGVsID0gdGhpc1swXTtcbiAgICBpZiAoIWVsKVxuICAgICAgICByZXR1cm4gbmV3IERvbTcoW10pO1xuICAgIHdoaWxlIChlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAgIHZhciBwcmV2XzEgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgaWYgKCQocHJldl8xKS5pcyhzZWxlY3RvcikpXG4gICAgICAgICAgICAgICAgcHJldkVscy5wdXNoKHByZXZfMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcHJldkVscy5wdXNoKHByZXZfMSk7XG4gICAgICAgIGVsID0gcHJldl8xO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERvbTcocHJldkVscyk7XG59XG5mdW5jdGlvbiBwYXJlbnQoc2VsZWN0b3IpIHtcbiAgICB2YXIgcGFyZW50cyA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0aGlzW2ldLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXNbaV0ucGFyZW50Tm9kZSkuaXMoc2VsZWN0b3IpKVxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2godGhpc1tpXS5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaCh0aGlzW2ldLnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAkKHVuaXF1ZShwYXJlbnRzKSk7XG59XG5mdW5jdGlvbiBwYXJlbnRzKHNlbGVjdG9yKSB7XG4gICAgdmFyIHBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgcGFyZW50XzEgPSB0aGlzW2ldLnBhcmVudE5vZGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgd2hpbGUgKHBhcmVudF8xKSB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoJChwYXJlbnRfMSkuaXMoc2VsZWN0b3IpKVxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2gocGFyZW50XzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKHBhcmVudF8xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmVudF8xID0gcGFyZW50XzEucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJCh1bmlxdWUocGFyZW50cykpO1xufVxuZnVuY3Rpb24gY2xvc2VzdChzZWxlY3Rvcikge1xuICAgIHZhciBjbG9zZXN0ID0gdGhpczsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gICAgfVxuICAgIGlmICghY2xvc2VzdC5pcyhzZWxlY3RvcikpIHtcbiAgICAgICAgY2xvc2VzdCA9IGNsb3Nlc3QucGFyZW50cyhzZWxlY3RvcikuZXEoMCk7XG4gICAgfVxuICAgIHJldHVybiBjbG9zZXN0O1xufVxuZnVuY3Rpb24gZmluZChzZWxlY3Rvcikge1xuICAgIHZhciBmb3VuZEVsZW1lbnRzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBmb3VuZCA9IHRoaXNbaV0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZm91bmQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgIGZvdW5kRWxlbWVudHMucHVzaChmb3VuZFtqXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEb203KGZvdW5kRWxlbWVudHMpO1xufVxuZnVuY3Rpb24gY2hpbGRyZW4oc2VsZWN0b3IpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgY2hpbGROb2RlcyA9IHRoaXNbaV0uY2hpbGROb2RlcztcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjaGlsZE5vZGVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXNbal0ubm9kZVR5cGUgPT09IDEpXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGROb2Rlc1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZE5vZGVzW2pdLm5vZGVUeXBlID09PSAxICYmICQoY2hpbGROb2Rlc1tqXSkuaXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZE5vZGVzW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IERvbTcodW5pcXVlKGNoaWxkcmVuKSk7XG59XG5mdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0aGlzW2ldLnBhcmVudE5vZGUpXG4gICAgICAgICAgICB0aGlzW2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gYWRkKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgZG9tID0gdGhpcztcbiAgICB2YXIgaTtcbiAgICB2YXIgajtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgdG9BZGQgPSAkKGFyZ3NbaV0pO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgdG9BZGQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgIGRvbVtkb20ubGVuZ3RoXSA9IHRvQWRkW2pdO1xuICAgICAgICAgICAgZG9tLmxlbmd0aCArPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkb207XG59XG4vKipcbiAqIFN3aXBlciA0LjUuMVxuICogTW9zdCBtb2Rlcm4gbW9iaWxlIHRvdWNoIHNsaWRlciBhbmQgZnJhbWV3b3JrIHdpdGggaGFyZHdhcmUgYWNjZWxlcmF0ZWQgdHJhbnNpdGlvbnNcbiAqIGh0dHA6Ly93d3cuaWRhbmdlcm8udXMvc3dpcGVyL1xuICpcbiAqIENvcHlyaWdodCAyMDE0LTIwMTkgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqXG4gKiBSZWxlYXNlZCBvbjogU2VwdGVtYmVyIDEzLCAyMDE5XG4gKi9cbnZhciBNZXRob2RzID0ge1xuICAgIGFkZENsYXNzOiBhZGRDbGFzcyxcbiAgICByZW1vdmVDbGFzczogcmVtb3ZlQ2xhc3MsXG4gICAgaGFzQ2xhc3M6IGhhc0NsYXNzLFxuICAgIHRvZ2dsZUNsYXNzOiB0b2dnbGVDbGFzcyxcbiAgICBhdHRyOiBhdHRyLFxuICAgIHJlbW92ZUF0dHI6IHJlbW92ZUF0dHIsXG4gICAgZGF0YTogZGF0YSxcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uLFxuICAgIG9uOiBvbixcbiAgICBvZmY6IG9mZixcbiAgICB0cmlnZ2VyOiB0cmlnZ2VyLFxuICAgIHRyYW5zaXRpb25FbmQ6IHRyYW5zaXRpb25FbmQsXG4gICAgb3V0ZXJXaWR0aDogb3V0ZXJXaWR0aCxcbiAgICBvdXRlckhlaWdodDogb3V0ZXJIZWlnaHQsXG4gICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgY3NzOiBjc3MsXG4gICAgZWFjaDogZWFjaCxcbiAgICBodG1sOiBodG1sLFxuICAgIHRleHQ6IHRleHQsXG4gICAgaXM6IGlzLFxuICAgIGluZGV4OiBpbmRleCxcbiAgICBlcTogZXEsXG4gICAgYXBwZW5kOiBhcHBlbmQsXG4gICAgcHJlcGVuZDogcHJlcGVuZCxcbiAgICBuZXh0OiBuZXh0LFxuICAgIG5leHRBbGw6IG5leHRBbGwsXG4gICAgcHJldjogcHJldixcbiAgICBwcmV2QWxsOiBwcmV2QWxsLFxuICAgIHBhcmVudDogcGFyZW50LFxuICAgIHBhcmVudHM6IHBhcmVudHMsXG4gICAgY2xvc2VzdDogY2xvc2VzdCxcbiAgICBmaW5kOiBmaW5kLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICByZW1vdmU6IHJlbW92ZSxcbiAgICBhZGQ6IGFkZCxcbiAgICBzdHlsZXM6IHN0eWxlcyxcbn07XG5PYmplY3Qua2V5cyhNZXRob2RzKS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XG4gICAgJC5mblttZXRob2ROYW1lXSA9ICQuZm5bbWV0aG9kTmFtZV0gfHwgTWV0aG9kc1ttZXRob2ROYW1lXTtcbn0pO1xudmFyIFV0aWxzID0ge1xuICAgIGRlbGV0ZVByb3BzOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHZhciBvYmplY3QgPSBvYmo7XG4gICAgICAgIE9iamVjdC5rZXlzKG9iamVjdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG9iamVjdFtrZXldID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gbm8gZ2V0dGVyIGZvciBvYmplY3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG9iamVjdFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBzb21ldGhpbmcgZ290IHdyb25nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgbmV4dFRpY2s6IGZ1bmN0aW9uIChjYWxsYmFjaywgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAwOyB9XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGNhbGxiYWNrLCBkZWxheSk7XG4gICAgfSxcbiAgICBub3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCk7XG4gICAgfSxcbiAgICBnZXRUcmFuc2xhdGU6IGZ1bmN0aW9uIChlbCwgYXhpcykge1xuICAgICAgICBpZiAoYXhpcyA9PT0gdm9pZCAwKSB7IGF4aXMgPSAneCc7IH1cbiAgICAgICAgdmFyIG1hdHJpeDtcbiAgICAgICAgdmFyIGN1clRyYW5zZm9ybTtcbiAgICAgICAgdmFyIHRyYW5zZm9ybU1hdHJpeDtcbiAgICAgICAgdmFyIGN1clN0eWxlID0gd2luLmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpO1xuICAgICAgICBpZiAod2luLldlYktpdENTU01hdHJpeCkge1xuICAgICAgICAgICAgY3VyVHJhbnNmb3JtID0gY3VyU3R5bGUudHJhbnNmb3JtIHx8IGN1clN0eWxlLndlYmtpdFRyYW5zZm9ybTtcbiAgICAgICAgICAgIGlmIChjdXJUcmFuc2Zvcm0uc3BsaXQoJywnKS5sZW5ndGggPiA2KSB7XG4gICAgICAgICAgICAgICAgY3VyVHJhbnNmb3JtID0gY3VyVHJhbnNmb3JtLnNwbGl0KCcsICcpLm1hcChmdW5jdGlvbiAoYSkgeyByZXR1cm4gYS5yZXBsYWNlKCcsJywgJy4nKTsgfSkuam9pbignLCAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNvbWUgb2xkIHZlcnNpb25zIG9mIFdlYmtpdCBjaG9rZSB3aGVuICdub25lJyBpcyBwYXNzZWQ7IHBhc3NcbiAgICAgICAgICAgIC8vIGVtcHR5IHN0cmluZyBpbnN0ZWFkIGluIHRoaXMgY2FzZVxuICAgICAgICAgICAgdHJhbnNmb3JtTWF0cml4ID0gbmV3IHdpbi5XZWJLaXRDU1NNYXRyaXgoY3VyVHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IGN1clRyYW5zZm9ybSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1NYXRyaXggPSBjdXJTdHlsZS5Nb3pUcmFuc2Zvcm0gfHwgY3VyU3R5bGUuT1RyYW5zZm9ybSB8fCBjdXJTdHlsZS5Nc1RyYW5zZm9ybSB8fCBjdXJTdHlsZS5tc1RyYW5zZm9ybSB8fCBjdXJTdHlsZS50cmFuc2Zvcm0gfHwgY3VyU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykucmVwbGFjZSgndHJhbnNsYXRlKCcsICdtYXRyaXgoMSwgMCwgMCwgMSwnKTtcbiAgICAgICAgICAgIG1hdHJpeCA9IHRyYW5zZm9ybU1hdHJpeC50b1N0cmluZygpLnNwbGl0KCcsJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMgPT09ICd4Jykge1xuICAgICAgICAgICAgLy8gTGF0ZXN0IENocm9tZSBhbmQgd2Via2l0cyBGaXhcbiAgICAgICAgICAgIGlmICh3aW4uV2ViS2l0Q1NTTWF0cml4KVxuICAgICAgICAgICAgICAgIGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDE7XG4gICAgICAgICAgICAvLyBDcmF6eSBJRTEwIE1hdHJpeFxuICAgICAgICAgICAgZWxzZSBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMTYpXG4gICAgICAgICAgICAgICAgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbMTJdKTtcbiAgICAgICAgICAgIC8vIE5vcm1hbCBCcm93c2Vyc1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzRdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXhpcyA9PT0gJ3knKSB7XG4gICAgICAgICAgICAvLyBMYXRlc3QgQ2hyb21lIGFuZCB3ZWJraXRzIEZpeFxuICAgICAgICAgICAgaWYgKHdpbi5XZWJLaXRDU1NNYXRyaXgpXG4gICAgICAgICAgICAgICAgY3VyVHJhbnNmb3JtID0gdHJhbnNmb3JtTWF0cml4Lm00MjtcbiAgICAgICAgICAgIC8vIENyYXp5IElFMTAgTWF0cml4XG4gICAgICAgICAgICBlbHNlIGlmIChtYXRyaXgubGVuZ3RoID09PSAxNilcbiAgICAgICAgICAgICAgICBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFsxM10pO1xuICAgICAgICAgICAgLy8gTm9ybWFsIEJyb3dzZXJzXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbNV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXJUcmFuc2Zvcm0gfHwgMDtcbiAgICB9LFxuICAgIHBhcnNlVXJsUXVlcnk6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdmFyIHF1ZXJ5ID0ge307XG4gICAgICAgIHZhciB1cmxUb1BhcnNlID0gdXJsIHx8IHdpbi5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIHBhcmFtcztcbiAgICAgICAgdmFyIHBhcmFtO1xuICAgICAgICB2YXIgbGVuZ3RoO1xuICAgICAgICBpZiAodHlwZW9mIHVybFRvUGFyc2UgPT09ICdzdHJpbmcnICYmIHVybFRvUGFyc2UubGVuZ3RoKSB7XG4gICAgICAgICAgICB1cmxUb1BhcnNlID0gdXJsVG9QYXJzZS5pbmRleE9mKCc/JykgPiAtMSA/IHVybFRvUGFyc2UucmVwbGFjZSgvXFxTKlxcPy8sICcnKSA6ICcnO1xuICAgICAgICAgICAgcGFyYW1zID0gdXJsVG9QYXJzZS5zcGxpdCgnJicpLmZpbHRlcihmdW5jdGlvbiAocGFyYW1zUGFydCkgeyByZXR1cm4gcGFyYW1zUGFydCAhPT0gJyc7IH0pO1xuICAgICAgICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHBhcmFtID0gcGFyYW1zW2ldLnJlcGxhY2UoLyNcXFMrL2csICcnKS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgIHF1ZXJ5W2RlY29kZVVSSUNvbXBvbmVudChwYXJhbVswXSldID0gdHlwZW9mIHBhcmFtWzFdID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IGRlY29kZVVSSUNvbXBvbmVudChwYXJhbVsxXSkgfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH0sXG4gICAgaXNPYmplY3Q6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgbyAhPT0gbnVsbCAmJiBvLmNvbnN0cnVjdG9yICYmIG8uY29uc3RydWN0b3IgPT09IE9iamVjdDtcbiAgICB9LFxuICAgIGV4dGVuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0byA9IE9iamVjdChhcmdzWzBdKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3NbaV07XG4gICAgICAgICAgICBpZiAobmV4dFNvdXJjZSAhPT0gdW5kZWZpbmVkICYmIG5leHRTb3VyY2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5c0FycmF5ID0gT2JqZWN0LmtleXMoT2JqZWN0KG5leHRTb3VyY2UpKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuZXh0SW5kZXggPSAwLCBsZW4gPSBrZXlzQXJyYXkubGVuZ3RoOyBuZXh0SW5kZXggPCBsZW47IG5leHRJbmRleCArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0S2V5ID0ga2V5c0FycmF5W25leHRJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuZXh0U291cmNlLCBuZXh0S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2MgIT09IHVuZGVmaW5lZCAmJiBkZXNjLmVudW1lcmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChVdGlscy5pc09iamVjdCh0b1tuZXh0S2V5XSkgJiYgVXRpbHMuaXNPYmplY3QobmV4dFNvdXJjZVtuZXh0S2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5leHRlbmQodG9bbmV4dEtleV0sIG5leHRTb3VyY2VbbmV4dEtleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIVV0aWxzLmlzT2JqZWN0KHRvW25leHRLZXldKSAmJiBVdGlscy5pc09iamVjdChuZXh0U291cmNlW25leHRLZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvW25leHRLZXldID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMuZXh0ZW5kKHRvW25leHRLZXldLCBuZXh0U291cmNlW25leHRLZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG87XG4gICAgfSxcbn07XG52YXIgU3VwcG9ydCA9IChmdW5jdGlvbiBTdXBwb3J0KCkge1xuICAgIHZhciB0ZXN0RGl2ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvdWNoOiAod2luLk1vZGVybml6ciAmJiB3aW4uTW9kZXJuaXpyLnRvdWNoID09PSB0cnVlKSB8fCAoZnVuY3Rpb24gY2hlY2tUb3VjaCgpIHtcbiAgICAgICAgICAgIHJldHVybiAhISgod2luLm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDApIHx8ICgnb250b3VjaHN0YXJ0JyBpbiB3aW4pIHx8ICh3aW4uRG9jdW1lbnRUb3VjaCAmJiBkb2MgaW5zdGFuY2VvZiB3aW4uRG9jdW1lbnRUb3VjaCkpO1xuICAgICAgICB9KCkpLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAhISh3aW4ubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkIHx8IHdpbi5Qb2ludGVyRXZlbnQgfHwgKCdtYXhUb3VjaFBvaW50cycgaW4gd2luLm5hdmlnYXRvciAmJiB3aW4ubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMCkpLFxuICAgICAgICBwcmVmaXhlZFBvaW50ZXJFdmVudHM6ICEhd2luLm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkLFxuICAgICAgICB0cmFuc2l0aW9uOiAoZnVuY3Rpb24gY2hlY2tUcmFuc2l0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHN0eWxlID0gdGVzdERpdi5zdHlsZTtcbiAgICAgICAgICAgIHJldHVybiAoJ3RyYW5zaXRpb24nIGluIHN0eWxlIHx8ICd3ZWJraXRUcmFuc2l0aW9uJyBpbiBzdHlsZSB8fCAnTW96VHJhbnNpdGlvbicgaW4gc3R5bGUpO1xuICAgICAgICB9KCkpLFxuICAgICAgICB0cmFuc2Zvcm1zM2Q6ICh3aW4uTW9kZXJuaXpyICYmIHdpbi5Nb2Rlcm5penIuY3NzdHJhbnNmb3JtczNkID09PSB0cnVlKSB8fCAoZnVuY3Rpb24gY2hlY2tUcmFuc2Zvcm1zM2QoKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSB0ZXN0RGl2LnN0eWxlO1xuICAgICAgICAgICAgcmV0dXJuICgnd2Via2l0UGVyc3BlY3RpdmUnIGluIHN0eWxlIHx8ICdNb3pQZXJzcGVjdGl2ZScgaW4gc3R5bGUgfHwgJ09QZXJzcGVjdGl2ZScgaW4gc3R5bGUgfHwgJ01zUGVyc3BlY3RpdmUnIGluIHN0eWxlIHx8ICdwZXJzcGVjdGl2ZScgaW4gc3R5bGUpO1xuICAgICAgICB9KCkpLFxuICAgICAgICBmbGV4Ym94OiAoZnVuY3Rpb24gY2hlY2tGbGV4Ym94KCkge1xuICAgICAgICAgICAgdmFyIHN0eWxlID0gdGVzdERpdi5zdHlsZTtcbiAgICAgICAgICAgIHZhciBzdHlsZXMgPSAoJ2FsaWduSXRlbXMgd2Via2l0QWxpZ25JdGVtcyB3ZWJraXRCb3hBbGlnbiBtc0ZsZXhBbGlnbiBtb3pCb3hBbGlnbiB3ZWJraXRGbGV4RGlyZWN0aW9uIG1zRmxleERpcmVjdGlvbiBtb3pCb3hEaXJlY3Rpb24gbW96Qm94T3JpZW50IHdlYmtpdEJveERpcmVjdGlvbiB3ZWJraXRCb3hPcmllbnQnKS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVzW2ldIGluIHN0eWxlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSgpKSxcbiAgICAgICAgb2JzZXJ2ZXI6IChmdW5jdGlvbiBjaGVja09ic2VydmVyKCkge1xuICAgICAgICAgICAgcmV0dXJuICgnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luIHx8ICdXZWJraXRNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW4pO1xuICAgICAgICB9KCkpLFxuICAgICAgICBwYXNzaXZlTGlzdGVuZXI6IChmdW5jdGlvbiBjaGVja1Bhc3NpdmVMaXN0ZW5lcigpIHtcbiAgICAgICAgICAgIHZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHdpbi5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZUxpc3RlbmVyJywgbnVsbCwgb3B0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIE5vIHN1cHBvcnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmU7XG4gICAgICAgIH0oKSksXG4gICAgICAgIGdlc3R1cmVzOiAoZnVuY3Rpb24gY2hlY2tHZXN0dXJlcygpIHtcbiAgICAgICAgICAgIHJldHVybiAnb25nZXN0dXJlc3RhcnQnIGluIHdpbjtcbiAgICAgICAgfSgpKSxcbiAgICB9O1xufSgpKTtcbnZhciBCcm93c2VyID0gKGZ1bmN0aW9uIEJyb3dzZXIoKSB7XG4gICAgZnVuY3Rpb24gaXNTYWZhcmkoKSB7XG4gICAgICAgIHZhciB1YSA9IHdpbi5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiAodWEuaW5kZXhPZignc2FmYXJpJykgPj0gMCAmJiB1YS5pbmRleE9mKCdjaHJvbWUnKSA8IDAgJiYgdWEuaW5kZXhPZignYW5kcm9pZCcpIDwgMCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGlzSUU6ICEhd2luLm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnQvZykgfHwgISF3aW4ubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvTVNJRS9nKSxcbiAgICAgICAgaXNFZGdlOiAhIXdpbi5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlL2cpLFxuICAgICAgICBpc1NhZmFyaTogaXNTYWZhcmkoKSxcbiAgICAgICAgaXNVaVdlYlZpZXc6IC8oaVBob25lfGlQb2R8aVBhZCkuKkFwcGxlV2ViS2l0KD8hLipTYWZhcmkpL2kudGVzdCh3aW4ubmF2aWdhdG9yLnVzZXJBZ2VudCksXG4gICAgfTtcbn0oKSk7XG52YXIgU3dpcGVyQ2xhc3MgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3dpcGVyQ2xhc3MocGFyYW1zKSB7XG4gICAgICAgIGlmIChwYXJhbXMgPT09IHZvaWQgMCkgeyBwYXJhbXMgPSB7fTsgfVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYucGFyYW1zID0gcGFyYW1zO1xuICAgICAgICAvLyBFdmVudHNcbiAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgaWYgKHNlbGYucGFyYW1zICYmIHNlbGYucGFyYW1zLm9uKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzZWxmLnBhcmFtcy5vbikuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vbihldmVudE5hbWUsIHNlbGYucGFyYW1zLm9uW2V2ZW50TmFtZV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgU3dpcGVyQ2xhc3MucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2ZW50cywgaGFuZGxlciwgcHJpb3JpdHkpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgICAgdmFyIG1ldGhvZCA9IHByaW9yaXR5ID8gJ3Vuc2hpZnQnIDogJ3B1c2gnO1xuICAgICAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0pXG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF1bbWV0aG9kXShoYW5kbGVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG4gICAgU3dpcGVyQ2xhc3MucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiAoZXZlbnRzLCBoYW5kbGVyLCBwcmlvcml0eSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgICBmdW5jdGlvbiBvbmNlSGFuZGxlcigpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZXIuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICBzZWxmLm9mZihldmVudHMsIG9uY2VIYW5kbGVyKTtcbiAgICAgICAgICAgIGlmIChvbmNlSGFuZGxlci5mN3Byb3h5KSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG9uY2VIYW5kbGVyLmY3cHJveHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb25jZUhhbmRsZXIuZjdwcm94eSA9IGhhbmRsZXI7XG4gICAgICAgIHJldHVybiBzZWxmLm9uKGV2ZW50cywgb25jZUhhbmRsZXIsIHByaW9yaXR5KTtcbiAgICB9O1xuICAgIFN3aXBlckNsYXNzLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAoZXZlbnRzLCBoYW5kbGVyKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycylcbiAgICAgICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdICYmIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRIYW5kbGVyLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnRIYW5kbGVyID09PSBoYW5kbGVyIHx8IChldmVudEhhbmRsZXIuZjdwcm94eSAmJiBldmVudEhhbmRsZXIuZjdwcm94eSA9PT0gaGFuZGxlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuICAgIFN3aXBlckNsYXNzLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycylcbiAgICAgICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgICB2YXIgZXZlbnRzO1xuICAgICAgICB2YXIgZGF0YTtcbiAgICAgICAgdmFyIGNvbnRleHQ7XG4gICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycgfHwgQXJyYXkuaXNBcnJheShhcmdzWzBdKSkge1xuICAgICAgICAgICAgZXZlbnRzID0gYXJnc1swXTtcbiAgICAgICAgICAgIGRhdGEgPSBhcmdzLnNsaWNlKDEsIGFyZ3MubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnRleHQgPSBzZWxmO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRzID0gYXJnc1swXS5ldmVudHM7XG4gICAgICAgICAgICBkYXRhID0gYXJnc1swXS5kYXRhO1xuICAgICAgICAgICAgY29udGV4dCA9IGFyZ3NbMF0uY29udGV4dCB8fCBzZWxmO1xuICAgICAgICB9XG4gICAgICAgIHZhciBldmVudHNBcnJheSA9IEFycmF5LmlzQXJyYXkoZXZlbnRzKSA/IGV2ZW50cyA6IGV2ZW50cy5zcGxpdCgnICcpO1xuICAgICAgICBldmVudHNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKHNlbGYuZXZlbnRzTGlzdGVuZXJzICYmIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyc18xID0gW107XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50SGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyc18xLnB1c2goZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBoYW5kbGVyc18xLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50SGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXIuYXBwbHkoY29udGV4dCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuICAgIFN3aXBlckNsYXNzLnByb3RvdHlwZS51c2VNb2R1bGVzUGFyYW1zID0gZnVuY3Rpb24gKGluc3RhbmNlUGFyYW1zKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIGlmICghaW5zdGFuY2UubW9kdWxlcylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgT2JqZWN0LmtleXMoaW5zdGFuY2UubW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlTmFtZSkge1xuICAgICAgICAgICAgdmFyIG1vZHVsZSA9IGluc3RhbmNlLm1vZHVsZXNbbW9kdWxlTmFtZV07XG4gICAgICAgICAgICAvLyBFeHRlbmQgcGFyYW1zXG4gICAgICAgICAgICBpZiAobW9kdWxlLnBhcmFtcykge1xuICAgICAgICAgICAgICAgIFV0aWxzLmV4dGVuZChpbnN0YW5jZVBhcmFtcywgbW9kdWxlLnBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU3dpcGVyQ2xhc3MucHJvdG90eXBlLnVzZU1vZHVsZXMgPSBmdW5jdGlvbiAobW9kdWxlc1BhcmFtcykge1xuICAgICAgICBpZiAobW9kdWxlc1BhcmFtcyA9PT0gdm9pZCAwKSB7IG1vZHVsZXNQYXJhbXMgPSB7fTsgfVxuICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBpZiAoIWluc3RhbmNlLm1vZHVsZXMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIE9iamVjdC5rZXlzKGluc3RhbmNlLm1vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZU5hbWUpIHtcbiAgICAgICAgICAgIHZhciBtb2R1bGUgPSBpbnN0YW5jZS5tb2R1bGVzW21vZHVsZU5hbWVdO1xuICAgICAgICAgICAgdmFyIG1vZHVsZVBhcmFtcyA9IG1vZHVsZXNQYXJhbXNbbW9kdWxlTmFtZV0gfHwge307XG4gICAgICAgICAgICAvLyBFeHRlbmQgaW5zdGFuY2UgbWV0aG9kcyBhbmQgcHJvcHNcbiAgICAgICAgICAgIGlmIChtb2R1bGUuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhtb2R1bGUuaW5zdGFuY2UpLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZVByb3BOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2R1bGVQcm9wID0gbW9kdWxlLmluc3RhbmNlW21vZHVsZVByb3BOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtb2R1bGVQcm9wID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZVttb2R1bGVQcm9wTmFtZV0gPSBtb2R1bGVQcm9wLmJpbmQoaW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VbbW9kdWxlUHJvcE5hbWVdID0gbW9kdWxlUHJvcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICAgICAgaWYgKG1vZHVsZS5vbiAmJiBpbnN0YW5jZS5vbikge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG1vZHVsZS5vbikuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlRXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLm9uKG1vZHVsZUV2ZW50TmFtZSwgbW9kdWxlLm9uW21vZHVsZUV2ZW50TmFtZV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTW9kdWxlIGNyZWF0ZSBjYWxsYmFja1xuICAgICAgICAgICAgaWYgKG1vZHVsZS5jcmVhdGUpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuY3JlYXRlLmJpbmQoaW5zdGFuY2UpKG1vZHVsZVBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN3aXBlckNsYXNzLCBcImNvbXBvbmVudHNcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChjb21wb25lbnRzKSB7XG4gICAgICAgICAgICB2YXIgQ2xhc3MgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKCFDbGFzcy51c2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgQ2xhc3MudXNlKGNvbXBvbmVudHMpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTd2lwZXJDbGFzcy5pbnN0YWxsTW9kdWxlID0gZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgICB2YXIgcGFyYW1zID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBwYXJhbXNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIENsYXNzID0gdGhpcztcbiAgICAgICAgaWYgKCFDbGFzcy5wcm90b3R5cGUubW9kdWxlcylcbiAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZS5tb2R1bGVzID0ge307XG4gICAgICAgIHZhciBuYW1lID0gbW9kdWxlLm5hbWUgfHwgKE9iamVjdC5rZXlzKENsYXNzLnByb3RvdHlwZS5tb2R1bGVzKS5sZW5ndGggKyBcIl9cIiArIFV0aWxzLm5vdygpKTtcbiAgICAgICAgQ2xhc3MucHJvdG90eXBlLm1vZHVsZXNbbmFtZV0gPSBtb2R1bGU7XG4gICAgICAgIC8vIFByb3RvdHlwZVxuICAgICAgICBpZiAobW9kdWxlLnByb3RvKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhtb2R1bGUucHJvdG8pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZVtrZXldID0gbW9kdWxlLnByb3RvW2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDbGFzc1xuICAgICAgICBpZiAobW9kdWxlLnN0YXRpYykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMobW9kdWxlLnN0YXRpYykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgQ2xhc3Nba2V5XSA9IG1vZHVsZS5zdGF0aWNba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhbGxiYWNrXG4gICAgICAgIGlmIChtb2R1bGUuaW5zdGFsbCkge1xuICAgICAgICAgICAgbW9kdWxlLmluc3RhbGwuYXBwbHkoQ2xhc3MsIHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIENsYXNzO1xuICAgIH07XG4gICAgU3dpcGVyQ2xhc3MudXNlID0gZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgICB2YXIgcGFyYW1zID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBwYXJhbXNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIENsYXNzID0gdGhpcztcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobW9kdWxlKSkge1xuICAgICAgICAgICAgbW9kdWxlLmZvckVhY2goZnVuY3Rpb24gKG0pIHsgcmV0dXJuIENsYXNzLmluc3RhbGxNb2R1bGUobSk7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIENsYXNzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDbGFzcy5pbnN0YWxsTW9kdWxlLmFwcGx5KENsYXNzLCBfX3NwcmVhZEFycmF5cyhbbW9kdWxlXSwgcGFyYW1zKSk7XG4gICAgfTtcbiAgICByZXR1cm4gU3dpcGVyQ2xhc3M7XG59KCkpO1xuZnVuY3Rpb24gdXBkYXRlU2l6ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgd2lkdGg7XG4gICAgdmFyIGhlaWdodDtcbiAgICB2YXIgJGVsID0gc3dpcGVyLiRlbDtcbiAgICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMud2lkdGggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpZHRoID0gc3dpcGVyLnBhcmFtcy53aWR0aDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHdpZHRoID0gJGVsWzBdLmNsaWVudFdpZHRoO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMuaGVpZ2h0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBoZWlnaHQgPSBzd2lwZXIucGFyYW1zLmhlaWdodDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGhlaWdodCA9ICRlbFswXS5jbGllbnRIZWlnaHQ7XG4gICAgfVxuICAgIGlmICgod2lkdGggPT09IDAgJiYgc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB8fCAoaGVpZ2h0ID09PSAwICYmIHN3aXBlci5pc1ZlcnRpY2FsKCkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU3VidHJhY3QgcGFkZGluZ3NcbiAgICB3aWR0aCA9IHdpZHRoIC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy1sZWZ0JyksIDEwKSAtIHBhcnNlSW50KCRlbC5jc3MoJ3BhZGRpbmctcmlnaHQnKSwgMTApO1xuICAgIGhlaWdodCA9IGhlaWdodCAtIHBhcnNlSW50KCRlbC5jc3MoJ3BhZGRpbmctdG9wJyksIDEwKSAtIHBhcnNlSW50KCRlbC5jc3MoJ3BhZGRpbmctYm90dG9tJyksIDEwKTtcbiAgICBVdGlscy5leHRlbmQoc3dpcGVyLCB7XG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgIHNpemU6IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHdpZHRoIDogaGVpZ2h0LFxuICAgIH0pO1xufVxuZnVuY3Rpb24gdXBkYXRlU2xpZGVzKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICAgIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWwsIHN3aXBlclNpemUgPSBzd2lwZXIuc2l6ZSwgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSwgd3JvbmdSVEwgPSBzd2lwZXIud3JvbmdSVEw7XG4gICAgdmFyIGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gICAgdmFyIHByZXZpb3VzU2xpZGVzTGVuZ3RoID0gaXNWaXJ0dWFsID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCA6IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuICAgIHZhciBzbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzKTtcbiAgICB2YXIgc2xpZGVzTGVuZ3RoID0gaXNWaXJ0dWFsID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCA6IHNsaWRlcy5sZW5ndGg7XG4gICAgdmFyIHNuYXBHcmlkID0gW107XG4gICAgdmFyIHNsaWRlc0dyaWQgPSBbXTtcbiAgICB2YXIgc2xpZGVzU2l6ZXNHcmlkID0gW107XG4gICAgdmFyIG9mZnNldEJlZm9yZSA9IHBhcmFtcy5zbGlkZXNPZmZzZXRCZWZvcmU7XG4gICAgaWYgKHR5cGVvZiBvZmZzZXRCZWZvcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb2Zmc2V0QmVmb3JlID0gcGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZS5jYWxsKHN3aXBlcik7XG4gICAgfVxuICAgIHZhciBvZmZzZXRBZnRlciA9IHBhcmFtcy5zbGlkZXNPZmZzZXRBZnRlcjtcbiAgICBpZiAodHlwZW9mIG9mZnNldEFmdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9mZnNldEFmdGVyID0gcGFyYW1zLnNsaWRlc09mZnNldEFmdGVyLmNhbGwoc3dpcGVyKTtcbiAgICB9XG4gICAgdmFyIHByZXZpb3VzU25hcEdyaWRMZW5ndGggPSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoO1xuICAgIHZhciBwcmV2aW91c1NsaWRlc0dyaWRMZW5ndGggPSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoO1xuICAgIHZhciBzcGFjZUJldHdlZW4gPSBwYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICAgIHZhciBzbGlkZVBvc2l0aW9uID0gLW9mZnNldEJlZm9yZTtcbiAgICB2YXIgcHJldlNsaWRlU2l6ZSA9IDA7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBpZiAodHlwZW9mIHN3aXBlclNpemUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzcGFjZUJldHdlZW4gPT09ICdzdHJpbmcnICYmIHNwYWNlQmV0d2Vlbi5pbmRleE9mKCclJykgPj0gMCkge1xuICAgICAgICBzcGFjZUJldHdlZW4gPSAocGFyc2VGbG9hdChzcGFjZUJldHdlZW4ucmVwbGFjZSgnJScsICcnKSkgLyAxMDApICogc3dpcGVyU2l6ZTtcbiAgICB9XG4gICAgc3dpcGVyLnZpcnR1YWxTaXplID0gLXNwYWNlQmV0d2VlbjtcbiAgICAvLyByZXNldCBtYXJnaW5zXG4gICAgaWYgKHJ0bClcbiAgICAgICAgc2xpZGVzLmNzcyh7IG1hcmdpbkxlZnQ6ICcnLCBtYXJnaW5Ub3A6ICcnIH0pO1xuICAgIGVsc2VcbiAgICAgICAgc2xpZGVzLmNzcyh7IG1hcmdpblJpZ2h0OiAnJywgbWFyZ2luQm90dG9tOiAnJyB9KTtcbiAgICB2YXIgc2xpZGVzTnVtYmVyRXZlblRvUm93cztcbiAgICBpZiAocGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcbiAgICAgICAgaWYgKE1hdGguZmxvb3Ioc2xpZGVzTGVuZ3RoIC8gcGFyYW1zLnNsaWRlc1BlckNvbHVtbikgPT09IHNsaWRlc0xlbmd0aCAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSB7XG4gICAgICAgICAgICBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzID0gc2xpZGVzTGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2xpZGVzTnVtYmVyRXZlblRvUm93cyA9IE1hdGguY2VpbChzbGlkZXNMZW5ndGggLyBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSAqIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycgJiYgcGFyYW1zLnNsaWRlc1BlckNvbHVtbkZpbGwgPT09ICdyb3cnKSB7XG4gICAgICAgICAgICBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzID0gTWF0aC5tYXgoc2xpZGVzTnVtYmVyRXZlblRvUm93cywgcGFyYW1zLnNsaWRlc1BlclZpZXcgKiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBDYWxjIHNsaWRlc1xuICAgIHZhciBzbGlkZVNpemU7XG4gICAgdmFyIHNsaWRlc1BlckNvbHVtbiA9IHBhcmFtcy5zbGlkZXNQZXJDb2x1bW47XG4gICAgdmFyIHNsaWRlc1BlclJvdyA9IHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MgLyBzbGlkZXNQZXJDb2x1bW47XG4gICAgdmFyIG51bUZ1bGxDb2x1bW5zID0gTWF0aC5mbG9vcihzbGlkZXNMZW5ndGggLyBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlc0xlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHNsaWRlU2l6ZSA9IDA7XG4gICAgICAgIHZhciBzbGlkZV8xID0gc2xpZGVzLmVxKGkpO1xuICAgICAgICBpZiAocGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcbiAgICAgICAgICAgIC8vIFNldCBzbGlkZXMgb3JkZXJcbiAgICAgICAgICAgIHZhciBuZXdTbGlkZU9yZGVySW5kZXggPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgY29sdW1uID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIHJvdyA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmICgocGFyYW1zLnNsaWRlc1BlckNvbHVtbkZpbGwgPT09ICdjb2x1bW4nKVxuICAgICAgICAgICAgICAgIHx8IChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ3JvdycgJiYgcGFyYW1zLnNsaWRlc1Blckdyb3VwID4gMSkpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnNsaWRlc1BlckNvbHVtbkZpbGwgPT09ICdjb2x1bW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoaSAvIHNsaWRlc1BlckNvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgIHJvdyA9IGkgLSAoY29sdW1uICogc2xpZGVzUGVyQ29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbHVtbiA+IG51bUZ1bGxDb2x1bW5zIHx8IChjb2x1bW4gPT09IG51bUZ1bGxDb2x1bW5zICYmIHJvdyA9PT0gc2xpZGVzUGVyQ29sdW1uIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdyArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdyA+PSBzbGlkZXNQZXJDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbiArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZ3JvdXBJbmRleCA9IE1hdGguZmxvb3IoaSAvIHBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gICAgICAgICAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoaSAvIHBhcmFtcy5zbGlkZXNQZXJWaWV3KSAtIGdyb3VwSW5kZXggKiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4gPSBpIC0gcm93ICogcGFyYW1zLnNsaWRlc1BlclZpZXcgLSBncm91cEluZGV4ICogcGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1NsaWRlT3JkZXJJbmRleCA9IGNvbHVtbiArICgocm93ICogc2xpZGVzTnVtYmVyRXZlblRvUm93cykgLyBzbGlkZXNQZXJDb2x1bW4pO1xuICAgICAgICAgICAgICAgIHNsaWRlXzFcbiAgICAgICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICctd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgICAgICAgICAgICAnLW1vei1ib3gtb3JkaW5hbC1ncm91cCc6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgJy1tcy1mbGV4LW9yZGVyJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgICAgICAgICAgICAnLXdlYmtpdC1vcmRlcic6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoaSAvIHNsaWRlc1BlclJvdyk7XG4gICAgICAgICAgICAgICAgY29sdW1uID0gaSAtIChyb3cgKiBzbGlkZXNQZXJSb3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2xpZGVfMVxuICAgICAgICAgICAgICAgIC5jc3MoXCJtYXJnaW4tXCIgKyAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3RvcCcgOiAnbGVmdCcpLCAocm93ICE9PSAwICYmIHBhcmFtcy5zcGFjZUJldHdlZW4pICYmIChwYXJhbXMuc3BhY2VCZXR3ZWVuICsgXCJweFwiKSlcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zd2lwZXItY29sdW1uJywgY29sdW1uKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXN3aXBlci1yb3cnLCByb3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzbGlkZV8xLmNzcygnZGlzcGxheScpID09PSAnbm9uZScpXG4gICAgICAgICAgICBjb250aW51ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBpZiAocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJykge1xuICAgICAgICAgICAgdmFyIHNsaWRlU3R5bGVzID0gd2luLmdldENvbXB1dGVkU3R5bGUoc2xpZGVfMVswXSwgbnVsbCk7XG4gICAgICAgICAgICB2YXIgY3VycmVudFRyYW5zZm9ybSA9IHNsaWRlXzFbMF0uc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRXZWJLaXRUcmFuc2Zvcm0gPSBzbGlkZV8xWzBdLnN0eWxlLndlYmtpdFRyYW5zZm9ybTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVfMVswXS5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VycmVudFdlYktpdFRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICAgIHNsaWRlXzFbMF0uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHtcbiAgICAgICAgICAgICAgICBzbGlkZVNpemUgPSBzd2lwZXIuaXNIb3Jpem9udGFsKClcbiAgICAgICAgICAgICAgICAgICAgPyBzbGlkZV8xLm91dGVyV2lkdGgodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgOiBzbGlkZV8xLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBwYXJzZUZsb2F0KHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJykpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFkZGluZ0xlZnQgPSBwYXJzZUZsb2F0KHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctbGVmdCcpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZGRpbmdSaWdodCA9IHBhcnNlRmxvYXQoc2xpZGVTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hcmdpbkxlZnQgPSBwYXJzZUZsb2F0KHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1sZWZ0JykpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWFyZ2luUmlnaHQgPSBwYXJzZUZsb2F0KHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1yaWdodCcpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJveFNpemluZyA9IHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2JveC1zaXppbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJveFNpemluZyAmJiBib3hTaXppbmcgPT09ICdib3JkZXItYm94JyAmJiAhQnJvd3Nlci5pc0lFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZVNpemUgPSB3aWR0aCArIG1hcmdpbkxlZnQgKyBtYXJnaW5SaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlU2l6ZSA9IHdpZHRoICsgcGFkZGluZ0xlZnQgKyBwYWRkaW5nUmlnaHQgKyBtYXJnaW5MZWZ0ICsgbWFyZ2luUmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSBwYXJzZUZsb2F0KHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZGRpbmdUb3AgPSBwYXJzZUZsb2F0KHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctdG9wJykpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFkZGluZ0JvdHRvbSA9IHBhcnNlRmxvYXQoc2xpZGVTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1ib3R0b20nKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXJnaW5Ub3AgPSBwYXJzZUZsb2F0KHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi10b3AnKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXJnaW5Cb3R0b20gPSBwYXJzZUZsb2F0KHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1ib3R0b20nKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBib3hTaXppbmcgPSBzbGlkZVN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdib3gtc2l6aW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChib3hTaXppbmcgJiYgYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcgJiYgIUJyb3dzZXIuaXNJRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVTaXplID0gaGVpZ2h0ICsgbWFyZ2luVG9wICsgbWFyZ2luQm90dG9tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVTaXplID0gaGVpZ2h0ICsgcGFkZGluZ1RvcCArIHBhZGRpbmdCb3R0b20gKyBtYXJnaW5Ub3AgKyBtYXJnaW5Cb3R0b207XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VycmVudFRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICAgIHNsaWRlXzFbMF0uc3R5bGUudHJhbnNmb3JtID0gY3VycmVudFRyYW5zZm9ybTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyZW50V2ViS2l0VHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVfMVswXS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBjdXJyZW50V2ViS2l0VHJhbnNmb3JtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpXG4gICAgICAgICAgICAgICAgc2xpZGVTaXplID0gTWF0aC5mbG9vcihzbGlkZVNpemUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2xpZGVTaXplID0gKHN3aXBlclNpemUgLSAoKHBhcmFtcy5zbGlkZXNQZXJWaWV3IC0gMSkgKiBzcGFjZUJldHdlZW4pKSAvIHBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpXG4gICAgICAgICAgICAgICAgc2xpZGVTaXplID0gTWF0aC5mbG9vcihzbGlkZVNpemUpO1xuICAgICAgICAgICAgaWYgKHNsaWRlc1tpXSkge1xuICAgICAgICAgICAgICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzW2ldLnN0eWxlLndpZHRoID0gc2xpZGVTaXplICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzW2ldLnN0eWxlLmhlaWdodCA9IHNsaWRlU2l6ZSArIFwicHhcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNsaWRlc1tpXSkge1xuICAgICAgICAgICAgc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZSA9IHNsaWRlU2l6ZTtcbiAgICAgICAgfVxuICAgICAgICBzbGlkZXNTaXplc0dyaWQucHVzaChzbGlkZVNpemUpO1xuICAgICAgICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgICAgICBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiArIChzbGlkZVNpemUgLyAyKSArIChwcmV2U2xpZGVTaXplIC8gMikgKyBzcGFjZUJldHdlZW47XG4gICAgICAgICAgICBpZiAocHJldlNsaWRlU2l6ZSA9PT0gMCAmJiBpICE9PSAwKVxuICAgICAgICAgICAgICAgIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uIC0gKHN3aXBlclNpemUgLyAyKSAtIHNwYWNlQmV0d2VlbjtcbiAgICAgICAgICAgIGlmIChpID09PSAwKVxuICAgICAgICAgICAgICAgIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uIC0gKHN3aXBlclNpemUgLyAyKSAtIHNwYWNlQmV0d2VlbjtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhzbGlkZVBvc2l0aW9uKSA8IDEgLyAxMDAwKVxuICAgICAgICAgICAgICAgIHNsaWRlUG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpXG4gICAgICAgICAgICAgICAgc2xpZGVQb3NpdGlvbiA9IE1hdGguZmxvb3Ioc2xpZGVQb3NpdGlvbik7XG4gICAgICAgICAgICBpZiAoKGluZGV4KSAlIHBhcmFtcy5zbGlkZXNQZXJHcm91cCA9PT0gMClcbiAgICAgICAgICAgICAgICBzbmFwR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgICAgICAgICAgc2xpZGVzR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpXG4gICAgICAgICAgICAgICAgc2xpZGVQb3NpdGlvbiA9IE1hdGguZmxvb3Ioc2xpZGVQb3NpdGlvbik7XG4gICAgICAgICAgICBpZiAoKGluZGV4KSAlIHBhcmFtcy5zbGlkZXNQZXJHcm91cCA9PT0gMClcbiAgICAgICAgICAgICAgICBzbmFwR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgICAgICAgICAgc2xpZGVzR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgICAgICAgICAgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gKyBzbGlkZVNpemUgKyBzcGFjZUJldHdlZW47XG4gICAgICAgIH1cbiAgICAgICAgc3dpcGVyLnZpcnR1YWxTaXplICs9IHNsaWRlU2l6ZSArIHNwYWNlQmV0d2VlbjtcbiAgICAgICAgcHJldlNsaWRlU2l6ZSA9IHNsaWRlU2l6ZTtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICB9XG4gICAgc3dpcGVyLnZpcnR1YWxTaXplID0gTWF0aC5tYXgoc3dpcGVyLnZpcnR1YWxTaXplLCBzd2lwZXJTaXplKSArIG9mZnNldEFmdGVyO1xuICAgIHZhciBuZXdTbGlkZXNHcmlkO1xuICAgIGlmIChydGwgJiYgd3JvbmdSVEwgJiYgKHBhcmFtcy5lZmZlY3QgPT09ICdzbGlkZScgfHwgcGFyYW1zLmVmZmVjdCA9PT0gJ2NvdmVyZmxvdycpKSB7XG4gICAgICAgICR3cmFwcGVyRWwuY3NzKHsgd2lkdGg6IHN3aXBlci52aXJ0dWFsU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW4gKyBcInB4XCIgfSk7XG4gICAgfVxuICAgIGlmICghU3VwcG9ydC5mbGV4Ym94IHx8IHBhcmFtcy5zZXRXcmFwcGVyU2l6ZSkge1xuICAgICAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKVxuICAgICAgICAgICAgJHdyYXBwZXJFbC5jc3MoeyB3aWR0aDogc3dpcGVyLnZpcnR1YWxTaXplICsgcGFyYW1zLnNwYWNlQmV0d2VlbiArIFwicHhcIiB9KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgJHdyYXBwZXJFbC5jc3MoeyBoZWlnaHQ6IHN3aXBlci52aXJ0dWFsU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW4gKyBcInB4XCIgfSk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMSkge1xuICAgICAgICBzd2lwZXIudmlydHVhbFNpemUgPSAoc2xpZGVTaXplICsgcGFyYW1zLnNwYWNlQmV0d2VlbikgKiBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzO1xuICAgICAgICBzd2lwZXIudmlydHVhbFNpemUgPSBNYXRoLmNlaWwoc3dpcGVyLnZpcnR1YWxTaXplIC8gcGFyYW1zLnNsaWRlc1BlckNvbHVtbikgLSBwYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICAgICAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKVxuICAgICAgICAgICAgJHdyYXBwZXJFbC5jc3MoeyB3aWR0aDogc3dpcGVyLnZpcnR1YWxTaXplICsgcGFyYW1zLnNwYWNlQmV0d2VlbiArIFwicHhcIiB9KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgJHdyYXBwZXJFbC5jc3MoeyBoZWlnaHQ6IHN3aXBlci52aXJ0dWFsU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW4gKyBcInB4XCIgfSk7XG4gICAgICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgICAgIG5ld1NsaWRlc0dyaWQgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc25hcEdyaWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVzR3JpZEl0ZW0gPSBzbmFwR3JpZFtpXTtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3RocylcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzR3JpZEl0ZW0gPSBNYXRoLmZsb29yKHNsaWRlc0dyaWRJdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAoc25hcEdyaWRbaV0gPCBzd2lwZXIudmlydHVhbFNpemUgKyBzbmFwR3JpZFswXSlcbiAgICAgICAgICAgICAgICAgICAgbmV3U2xpZGVzR3JpZC5wdXNoKHNsaWRlc0dyaWRJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNuYXBHcmlkID0gbmV3U2xpZGVzR3JpZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgbGFzdCBncmlkIGVsZW1lbnRzIGRlcGVuZGluZyBvbiB3aWR0aFxuICAgIGlmICghcGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgIG5ld1NsaWRlc0dyaWQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbmFwR3JpZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIHNsaWRlc0dyaWRJdGVtID0gc25hcEdyaWRbaV07XG4gICAgICAgICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3RocylcbiAgICAgICAgICAgICAgICBzbGlkZXNHcmlkSXRlbSA9IE1hdGguZmxvb3Ioc2xpZGVzR3JpZEl0ZW0pO1xuICAgICAgICAgICAgaWYgKHNuYXBHcmlkW2ldIDw9IHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpIHtcbiAgICAgICAgICAgICAgICBuZXdTbGlkZXNHcmlkLnB1c2goc2xpZGVzR3JpZEl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNuYXBHcmlkID0gbmV3U2xpZGVzR3JpZDtcbiAgICAgICAgaWYgKE1hdGguZmxvb3Ioc3dpcGVyLnZpcnR1YWxTaXplIC0gc3dpcGVyU2l6ZSkgLSBNYXRoLmZsb29yKHNuYXBHcmlkW3NuYXBHcmlkLmxlbmd0aCAtIDFdKSA+IDEpIHtcbiAgICAgICAgICAgIHNuYXBHcmlkLnB1c2goc3dpcGVyLnZpcnR1YWxTaXplIC0gc3dpcGVyU2l6ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNuYXBHcmlkLmxlbmd0aCA9PT0gMClcbiAgICAgICAgc25hcEdyaWQgPSBbMF07XG4gICAgaWYgKHBhcmFtcy5zcGFjZUJldHdlZW4gIT09IDApIHtcbiAgICAgICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgaWYgKHJ0bClcbiAgICAgICAgICAgICAgICBzbGlkZXMuY3NzKHsgbWFyZ2luTGVmdDogc3BhY2VCZXR3ZWVuICsgXCJweFwiIH0pO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHNsaWRlcy5jc3MoeyBtYXJnaW5SaWdodDogc3BhY2VCZXR3ZWVuICsgXCJweFwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHNsaWRlcy5jc3MoeyBtYXJnaW5Cb3R0b206IHNwYWNlQmV0d2VlbiArIFwicHhcIiB9KTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5jZW50ZXJJbnN1ZmZpY2llbnRTbGlkZXMpIHtcbiAgICAgICAgdmFyIGFsbFNsaWRlc1NpemVfMSA9IDA7XG4gICAgICAgIHNsaWRlc1NpemVzR3JpZC5mb3JFYWNoKGZ1bmN0aW9uIChzbGlkZVNpemVWYWx1ZSkge1xuICAgICAgICAgICAgYWxsU2xpZGVzU2l6ZV8xICs9IHNsaWRlU2l6ZVZhbHVlICsgKHBhcmFtcy5zcGFjZUJldHdlZW4gPyBwYXJhbXMuc3BhY2VCZXR3ZWVuIDogMCk7XG4gICAgICAgIH0pO1xuICAgICAgICBhbGxTbGlkZXNTaXplXzEgLT0gcGFyYW1zLnNwYWNlQmV0d2VlbjtcbiAgICAgICAgaWYgKGFsbFNsaWRlc1NpemVfMSA8IHN3aXBlclNpemUpIHtcbiAgICAgICAgICAgIHZhciBhbGxTbGlkZXNPZmZzZXRfMSA9IChzd2lwZXJTaXplIC0gYWxsU2xpZGVzU2l6ZV8xKSAvIDI7XG4gICAgICAgICAgICBzbmFwR3JpZC5mb3JFYWNoKGZ1bmN0aW9uIChzbmFwLCBzbmFwSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBzbmFwR3JpZFtzbmFwSW5kZXhdID0gc25hcCAtIGFsbFNsaWRlc09mZnNldF8xO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzbGlkZXNHcmlkLmZvckVhY2goZnVuY3Rpb24gKHNuYXAsIHNuYXBJbmRleCkge1xuICAgICAgICAgICAgICAgIHNsaWRlc0dyaWRbc25hcEluZGV4XSA9IHNuYXAgKyBhbGxTbGlkZXNPZmZzZXRfMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgc2xpZGVzOiBzbGlkZXMsXG4gICAgICAgIHNuYXBHcmlkOiBzbmFwR3JpZCxcbiAgICAgICAgc2xpZGVzR3JpZDogc2xpZGVzR3JpZCxcbiAgICAgICAgc2xpZGVzU2l6ZXNHcmlkOiBzbGlkZXNTaXplc0dyaWQsXG4gICAgfSk7XG4gICAgaWYgKHNsaWRlc0xlbmd0aCAhPT0gcHJldmlvdXNTbGlkZXNMZW5ndGgpIHtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlc0xlbmd0aENoYW5nZScpO1xuICAgIH1cbiAgICBpZiAoc25hcEdyaWQubGVuZ3RoICE9PSBwcmV2aW91c1NuYXBHcmlkTGVuZ3RoKSB7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cpXG4gICAgICAgICAgICBzd2lwZXIuY2hlY2tPdmVyZmxvdygpO1xuICAgICAgICBzd2lwZXIuZW1pdCgnc25hcEdyaWRMZW5ndGhDaGFuZ2UnKTtcbiAgICB9XG4gICAgaWYgKHNsaWRlc0dyaWQubGVuZ3RoICE9PSBwcmV2aW91c1NsaWRlc0dyaWRMZW5ndGgpIHtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlc0dyaWRMZW5ndGhDaGFuZ2UnKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzIHx8IHBhcmFtcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkpIHtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc09mZnNldCgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZUF1dG9IZWlnaHQoc3BlZWQpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgYWN0aXZlU2xpZGVzID0gW107XG4gICAgdmFyIG5ld0hlaWdodCA9IDA7XG4gICAgdmFyIGk7XG4gICAgaWYgKHR5cGVvZiBzcGVlZCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3BlZWQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChzcGVlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzd2lwZXIucGFyYW1zLnNwZWVkKTtcbiAgICB9XG4gICAgLy8gRmluZCBzbGlkZXMgY3VycmVudGx5IGluIHZpZXdcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycgJiYgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgTWF0aC5jZWlsKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyk7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGluZGV4XzEgPSBzd2lwZXIuYWN0aXZlSW5kZXggKyBpO1xuICAgICAgICAgICAgaWYgKGluZGV4XzEgPiBzd2lwZXIuc2xpZGVzLmxlbmd0aClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGFjdGl2ZVNsaWRlcy5wdXNoKHN3aXBlci5zbGlkZXMuZXEoaW5kZXhfMSlbMF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhY3RpdmVTbGlkZXMucHVzaChzd2lwZXIuc2xpZGVzLmVxKHN3aXBlci5hY3RpdmVJbmRleClbMF0pO1xuICAgIH1cbiAgICAvLyBGaW5kIG5ldyBoZWlnaHQgZnJvbSBoaWdoZXN0IHNsaWRlIGluIHZpZXdcbiAgICBmb3IgKGkgPSAwOyBpIDwgYWN0aXZlU2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aXZlU2xpZGVzW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IGFjdGl2ZVNsaWRlc1tpXS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBuZXdIZWlnaHQgPSBoZWlnaHQgPiBuZXdIZWlnaHQgPyBoZWlnaHQgOiBuZXdIZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVXBkYXRlIEhlaWdodFxuICAgIGlmIChuZXdIZWlnaHQpXG4gICAgICAgIHN3aXBlci4kd3JhcHBlckVsLmNzcygnaGVpZ2h0JywgbmV3SGVpZ2h0ICsgXCJweFwiKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVNsaWRlc09mZnNldCgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzbGlkZXNbaV0uc3dpcGVyU2xpZGVPZmZzZXQgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBzbGlkZXNbaV0ub2Zmc2V0TGVmdCA6IHNsaWRlc1tpXS5vZmZzZXRUb3A7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlU2xpZGVzUHJvZ3Jlc3ModHJhbnNsYXRlKSB7XG4gICAgaWYgKHRyYW5zbGF0ZSA9PT0gdm9pZCAwKSB7IHRyYW5zbGF0ZSA9ICh0aGlzICYmIHRoaXMudHJhbnNsYXRlKSB8fCAwOyB9XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyIHNsaWRlcyA9IHN3aXBlci5zbGlkZXMsIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG4gICAgaWYgKHNsaWRlcy5sZW5ndGggPT09IDApXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAodHlwZW9mIHNsaWRlc1swXS5zd2lwZXJTbGlkZU9mZnNldCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNPZmZzZXQoKTtcbiAgICB2YXIgb2Zmc2V0Q2VudGVyID0gLXRyYW5zbGF0ZTtcbiAgICBpZiAocnRsKVxuICAgICAgICBvZmZzZXRDZW50ZXIgPSB0cmFuc2xhdGU7XG4gICAgLy8gVmlzaWJsZSBTbGlkZXNcbiAgICBzbGlkZXMucmVtb3ZlQ2xhc3MocGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzKTtcbiAgICBzd2lwZXIudmlzaWJsZVNsaWRlc0luZGV4ZXMgPSBbXTtcbiAgICBzd2lwZXIudmlzaWJsZVNsaWRlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBzbGlkZV8yID0gc2xpZGVzW2ldO1xuICAgICAgICB2YXIgc2xpZGVQcm9ncmVzcyA9ICgob2Zmc2V0Q2VudGVyICsgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcyA/IHN3aXBlci5taW5UcmFuc2xhdGUoKSA6IDApKSAtIHNsaWRlXzIuc3dpcGVyU2xpZGVPZmZzZXQpIC8gKHNsaWRlXzIuc3dpcGVyU2xpZGVTaXplICsgcGFyYW1zLnNwYWNlQmV0d2Vlbik7XG4gICAgICAgIGlmIChwYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KSB7XG4gICAgICAgICAgICB2YXIgc2xpZGVCZWZvcmUgPSAtKG9mZnNldENlbnRlciAtIHNsaWRlXzIuc3dpcGVyU2xpZGVPZmZzZXQpO1xuICAgICAgICAgICAgdmFyIHNsaWRlQWZ0ZXIgPSBzbGlkZUJlZm9yZSArIHN3aXBlci5zbGlkZXNTaXplc0dyaWRbaV07XG4gICAgICAgICAgICB2YXIgaXNWaXNpYmxlID0gKHNsaWRlQmVmb3JlID49IDAgJiYgc2xpZGVCZWZvcmUgPCBzd2lwZXIuc2l6ZSAtIDEpXG4gICAgICAgICAgICAgICAgfHwgKHNsaWRlQWZ0ZXIgPiAxICYmIHNsaWRlQWZ0ZXIgPD0gc3dpcGVyLnNpemUpXG4gICAgICAgICAgICAgICAgfHwgKHNsaWRlQmVmb3JlIDw9IDAgJiYgc2xpZGVBZnRlciA+PSBzd2lwZXIuc2l6ZSk7XG4gICAgICAgICAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVyLnZpc2libGVTbGlkZXMucHVzaChzbGlkZV8yKTtcbiAgICAgICAgICAgICAgICBzd2lwZXIudmlzaWJsZVNsaWRlc0luZGV4ZXMucHVzaChpKTtcbiAgICAgICAgICAgICAgICBzbGlkZXMuZXEoaSkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzbGlkZV8yLnByb2dyZXNzID0gcnRsID8gLXNsaWRlUHJvZ3Jlc3MgOiBzbGlkZVByb2dyZXNzO1xuICAgIH1cbiAgICBzd2lwZXIudmlzaWJsZVNsaWRlcyA9ICQoc3dpcGVyLnZpc2libGVTbGlkZXMpO1xufVxuZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3ModHJhbnNsYXRlKSB7XG4gICAgaWYgKHRyYW5zbGF0ZSA9PT0gdm9pZCAwKSB7IHRyYW5zbGF0ZSA9ICh0aGlzICYmIHRoaXMudHJhbnNsYXRlKSB8fCAwOyB9XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyIHRyYW5zbGF0ZXNEaWZmID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICAgIHZhciBwcm9ncmVzcyA9IHN3aXBlci5wcm9ncmVzcywgaXNCZWdpbm5pbmcgPSBzd2lwZXIuaXNCZWdpbm5pbmcsIGlzRW5kID0gc3dpcGVyLmlzRW5kO1xuICAgIHZhciB3YXNCZWdpbm5pbmcgPSBpc0JlZ2lubmluZztcbiAgICB2YXIgd2FzRW5kID0gaXNFbmQ7XG4gICAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XG4gICAgICAgIHByb2dyZXNzID0gMDtcbiAgICAgICAgaXNCZWdpbm5pbmcgPSB0cnVlO1xuICAgICAgICBpc0VuZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwcm9ncmVzcyA9ICh0cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gKHRyYW5zbGF0ZXNEaWZmKTtcbiAgICAgICAgaXNCZWdpbm5pbmcgPSBwcm9ncmVzcyA8PSAwO1xuICAgICAgICBpc0VuZCA9IHByb2dyZXNzID49IDE7XG4gICAgfVxuICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgcHJvZ3Jlc3M6IHByb2dyZXNzLFxuICAgICAgICBpc0JlZ2lubmluZzogaXNCZWdpbm5pbmcsXG4gICAgICAgIGlzRW5kOiBpc0VuZCxcbiAgICB9KTtcbiAgICBpZiAocGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgfHwgcGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSlcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc1Byb2dyZXNzKHRyYW5zbGF0ZSk7XG4gICAgaWYgKGlzQmVnaW5uaW5nICYmICF3YXNCZWdpbm5pbmcpIHtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ3JlYWNoQmVnaW5uaW5nIHRvRWRnZScpO1xuICAgIH1cbiAgICBpZiAoaXNFbmQgJiYgIXdhc0VuZCkge1xuICAgICAgICBzd2lwZXIuZW1pdCgncmVhY2hFbmQgdG9FZGdlJyk7XG4gICAgfVxuICAgIGlmICgod2FzQmVnaW5uaW5nICYmICFpc0JlZ2lubmluZykgfHwgKHdhc0VuZCAmJiAhaXNFbmQpKSB7XG4gICAgICAgIHN3aXBlci5lbWl0KCdmcm9tRWRnZScpO1xuICAgIH1cbiAgICBzd2lwZXIuZW1pdCgncHJvZ3Jlc3MnLCBwcm9ncmVzcyk7XG59XG5mdW5jdGlvbiB1cGRhdGVTbGlkZXNDbGFzc2VzKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzLCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLCAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWwsIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4LCByZWFsSW5kZXggPSBzd2lwZXIucmVhbEluZGV4O1xuICAgIHZhciBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICAgIHNsaWRlcy5yZW1vdmVDbGFzcyhwYXJhbXMuc2xpZGVBY3RpdmVDbGFzcyArIFwiIFwiICsgcGFyYW1zLnNsaWRlTmV4dENsYXNzICsgXCIgXCIgKyBwYXJhbXMuc2xpZGVQcmV2Q2xhc3MgKyBcIiBcIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzICsgXCIgXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MgKyBcIiBcIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZVByZXZDbGFzcyk7XG4gICAgdmFyIGFjdGl2ZVNsaWRlO1xuICAgIGlmIChpc1ZpcnR1YWwpIHtcbiAgICAgICAgYWN0aXZlU2xpZGUgPSBzd2lwZXIuJHdyYXBwZXJFbC5maW5kKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBhY3RpdmVJbmRleCArIFwiXFxcIl1cIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhY3RpdmVTbGlkZSA9IHNsaWRlcy5lcShhY3RpdmVJbmRleCk7XG4gICAgfVxuICAgIC8vIEFjdGl2ZSBjbGFzc2VzXG4gICAgYWN0aXZlU2xpZGUuYWRkQ2xhc3MocGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpO1xuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgICAvLyBEdXBsaWNhdGUgdG8gYWxsIGxvb3BlZCBzbGlkZXNcbiAgICAgICAgaWYgKGFjdGl2ZVNsaWRlLmhhc0NsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAgICAgJHdyYXBwZXJFbFxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCI6bm90KC5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCIpW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHJlYWxJbmRleCArIFwiXFxcIl1cIilcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgJHdyYXBwZXJFbFxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCIuXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHJlYWxJbmRleCArIFwiXFxcIl1cIilcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIE5leHQgU2xpZGVcbiAgICB2YXIgbmV4dFNsaWRlID0gYWN0aXZlU2xpZGUubmV4dEFsbChcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzKS5lcSgwKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVOZXh0Q2xhc3MpO1xuICAgIGlmIChwYXJhbXMubG9vcCAmJiBuZXh0U2xpZGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG5leHRTbGlkZSA9IHNsaWRlcy5lcSgwKTtcbiAgICAgICAgbmV4dFNsaWRlLmFkZENsYXNzKHBhcmFtcy5zbGlkZU5leHRDbGFzcyk7XG4gICAgfVxuICAgIC8vIFByZXYgU2xpZGVcbiAgICB2YXIgcHJldlNsaWRlID0gYWN0aXZlU2xpZGUucHJldkFsbChcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzKS5lcSgwKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVQcmV2Q2xhc3MpO1xuICAgIGlmIChwYXJhbXMubG9vcCAmJiBwcmV2U2xpZGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHByZXZTbGlkZSA9IHNsaWRlcy5lcSgtMSk7XG4gICAgICAgIHByZXZTbGlkZS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVQcmV2Q2xhc3MpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgICAgLy8gRHVwbGljYXRlIHRvIGFsbCBsb29wZWQgc2xpZGVzXG4gICAgICAgIGlmIChuZXh0U2xpZGUuaGFzQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAgICAgICAkd3JhcHBlckVsXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIjpub3QoLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIilbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgbmV4dFNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgKyBcIlxcXCJdXCIpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAkd3JhcHBlckVsXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIi5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgbmV4dFNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgKyBcIlxcXCJdXCIpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXZTbGlkZS5oYXNDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICAgICAgICR3cmFwcGVyRWxcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiOm5vdCguXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiKVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBwcmV2U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSArIFwiXFxcIl1cIilcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICR3cmFwcGVyRWxcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBwcmV2U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSArIFwiXFxcIl1cIilcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZUluZGV4KG5ld0FjdGl2ZUluZGV4KSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHRyYW5zbGF0ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG4gICAgdmFyIHNsaWRlc0dyaWQgPSBzd2lwZXIuc2xpZGVzR3JpZCwgc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQsIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsIHByZXZpb3VzSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXgsIHByZXZpb3VzUmVhbEluZGV4ID0gc3dpcGVyLnJlYWxJbmRleCwgcHJldmlvdXNTbmFwSW5kZXggPSBzd2lwZXIuc25hcEluZGV4O1xuICAgIHZhciBhY3RpdmVJbmRleCA9IG5ld0FjdGl2ZUluZGV4O1xuICAgIHZhciBzbmFwSW5kZXg7XG4gICAgaWYgKHR5cGVvZiBhY3RpdmVJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNsaWRlc0dyaWRbaSArIDFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGUgPj0gc2xpZGVzR3JpZFtpXSAmJiB0cmFuc2xhdGUgPCBzbGlkZXNHcmlkW2kgKyAxXSAtICgoc2xpZGVzR3JpZFtpICsgMV0gLSBzbGlkZXNHcmlkW2ldKSAvIDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHJhbnNsYXRlID49IHNsaWRlc0dyaWRbaV0gJiYgdHJhbnNsYXRlIDwgc2xpZGVzR3JpZFtpICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0cmFuc2xhdGUgPj0gc2xpZGVzR3JpZFtpXSkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBOb3JtYWxpemUgc2xpZGVJbmRleFxuICAgICAgICBpZiAocGFyYW1zLm5vcm1hbGl6ZVNsaWRlSW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChhY3RpdmVJbmRleCA8IDAgfHwgdHlwZW9mIGFjdGl2ZUluZGV4ID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNuYXBHcmlkLmluZGV4T2YodHJhbnNsYXRlKSA+PSAwKSB7XG4gICAgICAgIHNuYXBJbmRleCA9IHNuYXBHcmlkLmluZGV4T2YodHJhbnNsYXRlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNuYXBJbmRleCA9IE1hdGguZmxvb3IoYWN0aXZlSW5kZXggLyBwYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICAgIH1cbiAgICBpZiAoc25hcEluZGV4ID49IHNuYXBHcmlkLmxlbmd0aClcbiAgICAgICAgc25hcEluZGV4ID0gc25hcEdyaWQubGVuZ3RoIC0gMTtcbiAgICBpZiAoYWN0aXZlSW5kZXggPT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICAgICAgaWYgKHNuYXBJbmRleCAhPT0gcHJldmlvdXNTbmFwSW5kZXgpIHtcbiAgICAgICAgICAgIHN3aXBlci5zbmFwSW5kZXggPSBzbmFwSW5kZXg7XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgnc25hcEluZGV4Q2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBHZXQgcmVhbCBpbmRleFxuICAgIHZhciByZWFsSW5kZXggPSBwYXJzZUludChzd2lwZXIuc2xpZGVzLmVxKGFjdGl2ZUluZGV4KS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpIHx8IGFjdGl2ZUluZGV4LCAxMCk7XG4gICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgICBzbmFwSW5kZXg6IHNuYXBJbmRleCxcbiAgICAgICAgcmVhbEluZGV4OiByZWFsSW5kZXgsXG4gICAgICAgIHByZXZpb3VzSW5kZXg6IHByZXZpb3VzSW5kZXgsXG4gICAgICAgIGFjdGl2ZUluZGV4OiBhY3RpdmVJbmRleCxcbiAgICB9KTtcbiAgICBzd2lwZXIuZW1pdCgnYWN0aXZlSW5kZXhDaGFuZ2UnKTtcbiAgICBzd2lwZXIuZW1pdCgnc25hcEluZGV4Q2hhbmdlJyk7XG4gICAgaWYgKHByZXZpb3VzUmVhbEluZGV4ICE9PSByZWFsSW5kZXgpIHtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ3JlYWxJbmRleENoYW5nZScpO1xuICAgIH1cbiAgICBpZiAoc3dpcGVyLmluaXRpYWxpemVkIHx8IHN3aXBlci5ydW5DYWxsYmFja3NPbkluaXQpIHtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlQ2hhbmdlJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlQ2xpY2tlZFNsaWRlKGUpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgICB2YXIgc2xpZGUgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MpWzBdO1xuICAgIHZhciBzbGlkZUZvdW5kID0gZmFsc2U7XG4gICAgaWYgKHNsaWRlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHN3aXBlci5zbGlkZXNbaV0gPT09IHNsaWRlKVxuICAgICAgICAgICAgICAgIHNsaWRlRm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzbGlkZSAmJiBzbGlkZUZvdW5kKSB7XG4gICAgICAgIHN3aXBlci5jbGlja2VkU2xpZGUgPSBzbGlkZTtcbiAgICAgICAgaWYgKHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSB7XG4gICAgICAgICAgICBzd2lwZXIuY2xpY2tlZEluZGV4ID0gcGFyc2VJbnQoJChzbGlkZSkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3dpcGVyLmNsaWNrZWRJbmRleCA9ICQoc2xpZGUpLmluZGV4KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN3aXBlci5jbGlja2VkU2xpZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHN3aXBlci5jbGlja2VkSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5zbGlkZVRvQ2xpY2tlZFNsaWRlICYmIHN3aXBlci5jbGlja2VkSW5kZXggIT09IHVuZGVmaW5lZCAmJiBzd2lwZXIuY2xpY2tlZEluZGV4ICE9PSBzd2lwZXIuYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG9DbGlja2VkU2xpZGUoKTtcbiAgICB9XG59XG52YXIgdXBkYXRlID0ge1xuICAgIHVwZGF0ZVNpemU6IHVwZGF0ZVNpemUsXG4gICAgdXBkYXRlU2xpZGVzOiB1cGRhdGVTbGlkZXMsXG4gICAgdXBkYXRlQXV0b0hlaWdodDogdXBkYXRlQXV0b0hlaWdodCxcbiAgICB1cGRhdGVTbGlkZXNPZmZzZXQ6IHVwZGF0ZVNsaWRlc09mZnNldCxcbiAgICB1cGRhdGVTbGlkZXNQcm9ncmVzczogdXBkYXRlU2xpZGVzUHJvZ3Jlc3MsXG4gICAgdXBkYXRlUHJvZ3Jlc3M6IHVwZGF0ZVByb2dyZXNzLFxuICAgIHVwZGF0ZVNsaWRlc0NsYXNzZXM6IHVwZGF0ZVNsaWRlc0NsYXNzZXMsXG4gICAgdXBkYXRlQWN0aXZlSW5kZXg6IHVwZGF0ZUFjdGl2ZUluZGV4LFxuICAgIHVwZGF0ZUNsaWNrZWRTbGlkZTogdXBkYXRlQ2xpY2tlZFNsaWRlLFxufTtcbmZ1bmN0aW9uIGdldFRyYW5zbGF0ZShheGlzKSB7XG4gICAgaWYgKGF4aXMgPT09IHZvaWQgMCkgeyBheGlzID0gdGhpcy5pc0hvcml6b250YWwoKSA/ICd4JyA6ICd5JzsgfVxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLCBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlLCB0cmFuc2xhdGUgPSBzd2lwZXIudHJhbnNsYXRlLCAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gICAgaWYgKHBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlKSB7XG4gICAgICAgIHJldHVybiBydGwgPyAtdHJhbnNsYXRlIDogdHJhbnNsYXRlO1xuICAgIH1cbiAgICB2YXIgY3VycmVudFRyYW5zbGF0ZSA9IFV0aWxzLmdldFRyYW5zbGF0ZSgkd3JhcHBlckVsWzBdLCBheGlzKTtcbiAgICBpZiAocnRsKVxuICAgICAgICBjdXJyZW50VHJhbnNsYXRlID0gLWN1cnJlbnRUcmFuc2xhdGU7XG4gICAgcmV0dXJuIGN1cnJlbnRUcmFuc2xhdGUgfHwgMDtcbn1cbmZ1bmN0aW9uIHNldFRyYW5zbGF0ZSh0cmFuc2xhdGUsIGJ5Q29udHJvbGxlcikge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlLCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLCAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWwsIHByb2dyZXNzID0gc3dpcGVyLnByb2dyZXNzO1xuICAgIHZhciB4ID0gMDtcbiAgICB2YXIgeSA9IDA7XG4gICAgdmFyIHogPSAwO1xuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgeCA9IHJ0bCA/IC10cmFuc2xhdGUgOiB0cmFuc2xhdGU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB5ID0gdHJhbnNsYXRlO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykge1xuICAgICAgICB4ID0gTWF0aC5mbG9vcih4KTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoeSk7XG4gICAgfVxuICAgIGlmICghcGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUpIHtcbiAgICAgICAgaWYgKFN1cHBvcnQudHJhbnNmb3JtczNkKVxuICAgICAgICAgICAgJHdyYXBwZXJFbC50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4LCBcIiArIHogKyBcInB4KVwiKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgJHdyYXBwZXJFbC50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIik7XG4gICAgfVxuICAgIHN3aXBlci5wcmV2aW91c1RyYW5zbGF0ZSA9IHN3aXBlci50cmFuc2xhdGU7XG4gICAgc3dpcGVyLnRyYW5zbGF0ZSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHggOiB5O1xuICAgIC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gdXBkYXRlIHByb2dyZXNzXG4gICAgdmFyIG5ld1Byb2dyZXNzO1xuICAgIHZhciB0cmFuc2xhdGVzRGlmZiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICBpZiAodHJhbnNsYXRlc0RpZmYgPT09IDApIHtcbiAgICAgICAgbmV3UHJvZ3Jlc3MgPSAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbmV3UHJvZ3Jlc3MgPSAodHJhbnNsYXRlIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSAvICh0cmFuc2xhdGVzRGlmZik7XG4gICAgfVxuICAgIGlmIChuZXdQcm9ncmVzcyAhPT0gcHJvZ3Jlc3MpIHtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKHRyYW5zbGF0ZSk7XG4gICAgfVxuICAgIHN3aXBlci5lbWl0KCdzZXRUcmFuc2xhdGUnLCBzd2lwZXIudHJhbnNsYXRlLCBieUNvbnRyb2xsZXIpO1xufVxuZnVuY3Rpb24gbWluVHJhbnNsYXRlKCkge1xuICAgIHJldHVybiAoLXRoaXMuc25hcEdyaWRbMF0pO1xufVxuZnVuY3Rpb24gbWF4VHJhbnNsYXRlKCkge1xuICAgIHJldHVybiAoLXRoaXMuc25hcEdyaWRbdGhpcy5zbmFwR3JpZC5sZW5ndGggLSAxXSk7XG59XG52YXIgdHJhbnNsYXRlID0ge1xuICAgIGdldFRyYW5zbGF0ZTogZ2V0VHJhbnNsYXRlLFxuICAgIHNldFRyYW5zbGF0ZTogc2V0VHJhbnNsYXRlLFxuICAgIG1pblRyYW5zbGF0ZTogbWluVHJhbnNsYXRlLFxuICAgIG1heFRyYW5zbGF0ZTogbWF4VHJhbnNsYXRlLFxufTtcbmZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24sIGJ5Q29udHJvbGxlcikge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHN3aXBlci4kd3JhcHBlckVsLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgIHN3aXBlci5lbWl0KCdzZXRUcmFuc2l0aW9uJywgZHVyYXRpb24sIGJ5Q29udHJvbGxlcik7XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pIHtcbiAgICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHsgcnVuQ2FsbGJhY2tzID0gdHJ1ZTsgfVxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCwgcGFyYW1zID0gc3dpcGVyLnBhcmFtcywgcHJldmlvdXNJbmRleCA9IHN3aXBlci5wcmV2aW91c0luZGV4O1xuICAgIGlmIChwYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgICBzd2lwZXIudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgIH1cbiAgICB2YXIgZGlyID0gZGlyZWN0aW9uO1xuICAgIGlmICghZGlyKSB7XG4gICAgICAgIGlmIChhY3RpdmVJbmRleCA+IHByZXZpb3VzSW5kZXgpXG4gICAgICAgICAgICBkaXIgPSAnbmV4dCc7XG4gICAgICAgIGVsc2UgaWYgKGFjdGl2ZUluZGV4IDwgcHJldmlvdXNJbmRleClcbiAgICAgICAgICAgIGRpciA9ICdwcmV2JztcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGlyID0gJ3Jlc2V0JztcbiAgICB9XG4gICAgc3dpcGVyLmVtaXQoJ3RyYW5zaXRpb25TdGFydCcpO1xuICAgIGlmIChydW5DYWxsYmFja3MgJiYgYWN0aXZlSW5kZXggIT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICAgICAgaWYgKGRpciA9PT0gJ3Jlc2V0Jykge1xuICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlUmVzZXRUcmFuc2l0aW9uU3RhcnQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzd2lwZXIuZW1pdCgnc2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnQnKTtcbiAgICAgICAgaWYgKGRpciA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgnc2xpZGVOZXh0VHJhbnNpdGlvblN0YXJ0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgnc2xpZGVQcmV2VHJhbnNpdGlvblN0YXJ0Jyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uRW5kJDEocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pIHtcbiAgICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHsgcnVuQ2FsbGJhY2tzID0gdHJ1ZTsgfVxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCwgcHJldmlvdXNJbmRleCA9IHN3aXBlci5wcmV2aW91c0luZGV4O1xuICAgIHN3aXBlci5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcbiAgICB2YXIgZGlyID0gZGlyZWN0aW9uO1xuICAgIGlmICghZGlyKSB7XG4gICAgICAgIGlmIChhY3RpdmVJbmRleCA+IHByZXZpb3VzSW5kZXgpXG4gICAgICAgICAgICBkaXIgPSAnbmV4dCc7XG4gICAgICAgIGVsc2UgaWYgKGFjdGl2ZUluZGV4IDwgcHJldmlvdXNJbmRleClcbiAgICAgICAgICAgIGRpciA9ICdwcmV2JztcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGlyID0gJ3Jlc2V0JztcbiAgICB9XG4gICAgc3dpcGVyLmVtaXQoJ3RyYW5zaXRpb25FbmQnKTtcbiAgICBpZiAocnVuQ2FsbGJhY2tzICYmIGFjdGl2ZUluZGV4ICE9PSBwcmV2aW91c0luZGV4KSB7XG4gICAgICAgIGlmIChkaXIgPT09ICdyZXNldCcpIHtcbiAgICAgICAgICAgIHN3aXBlci5lbWl0KCdzbGlkZVJlc2V0VHJhbnNpdGlvbkVuZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN3aXBlci5lbWl0KCdzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQnKTtcbiAgICAgICAgaWYgKGRpciA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgnc2xpZGVOZXh0VHJhbnNpdGlvbkVuZCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlUHJldlRyYW5zaXRpb25FbmQnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbnZhciB0cmFuc2l0aW9uJDEgPSB7XG4gICAgc2V0VHJhbnNpdGlvbjogc2V0VHJhbnNpdGlvbixcbiAgICB0cmFuc2l0aW9uU3RhcnQ6IHRyYW5zaXRpb25TdGFydCxcbiAgICB0cmFuc2l0aW9uRW5kOiB0cmFuc2l0aW9uRW5kJDEsXG59O1xuZnVuY3Rpb24gc2xpZGVUbyhpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgICBpZiAoaW5kZXggPT09IHZvaWQgMCkgeyBpbmRleCA9IDA7IH1cbiAgICBpZiAoc3BlZWQgPT09IHZvaWQgMCkgeyBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkOyB9XG4gICAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7IHJ1bkNhbGxiYWNrcyA9IHRydWU7IH1cbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgc2xpZGVJbmRleCA9IGluZGV4O1xuICAgIGlmIChzbGlkZUluZGV4IDwgMClcbiAgICAgICAgc2xpZGVJbmRleCA9IDA7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkLCBzbGlkZXNHcmlkID0gc3dpcGVyLnNsaWRlc0dyaWQsIHByZXZpb3VzSW5kZXggPSBzd2lwZXIucHJldmlvdXNJbmRleCwgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXgsIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG4gICAgaWYgKHN3aXBlci5hbmltYXRpbmcgJiYgcGFyYW1zLnByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBzbmFwSW5kZXggPSBNYXRoLmZsb29yKHNsaWRlSW5kZXggLyBwYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICAgIGlmIChzbmFwSW5kZXggPj0gc25hcEdyaWQubGVuZ3RoKVxuICAgICAgICBzbmFwSW5kZXggPSBzbmFwR3JpZC5sZW5ndGggLSAxO1xuICAgIGlmICgoYWN0aXZlSW5kZXggfHwgcGFyYW1zLmluaXRpYWxTbGlkZSB8fCAwKSA9PT0gKHByZXZpb3VzSW5kZXggfHwgMCkgJiYgcnVuQ2FsbGJhY2tzKSB7XG4gICAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVTbGlkZUNoYW5nZVN0YXJ0Jyk7XG4gICAgfVxuICAgIHZhciB0cmFuc2xhdGUgPSAtc25hcEdyaWRbc25hcEluZGV4XTtcbiAgICAvLyBVcGRhdGUgcHJvZ3Jlc3NcbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3ModHJhbnNsYXRlKTtcbiAgICAvLyBOb3JtYWxpemUgc2xpZGVJbmRleFxuICAgIGlmIChwYXJhbXMubm9ybWFsaXplU2xpZGVJbmRleCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlc0dyaWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmICgtTWF0aC5mbG9vcih0cmFuc2xhdGUgKiAxMDApID49IE1hdGguZmxvb3Ioc2xpZGVzR3JpZFtpXSAqIDEwMCkpIHtcbiAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBEaXJlY3Rpb25zIGxvY2tzXG4gICAgaWYgKHN3aXBlci5pbml0aWFsaXplZCAmJiBzbGlkZUluZGV4ICE9PSBhY3RpdmVJbmRleCkge1xuICAgICAgICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlTmV4dCAmJiB0cmFuc2xhdGUgPCBzd2lwZXIudHJhbnNsYXRlICYmIHRyYW5zbGF0ZSA8IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVQcmV2ICYmIHRyYW5zbGF0ZSA+IHN3aXBlci50cmFuc2xhdGUgJiYgdHJhbnNsYXRlID4gc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICAgICAgICBpZiAoKGFjdGl2ZUluZGV4IHx8IDApICE9PSBzbGlkZUluZGV4KVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgZGlyZWN0aW9uO1xuICAgIGlmIChzbGlkZUluZGV4ID4gYWN0aXZlSW5kZXgpXG4gICAgICAgIGRpcmVjdGlvbiA9ICduZXh0JztcbiAgICBlbHNlIGlmIChzbGlkZUluZGV4IDwgYWN0aXZlSW5kZXgpXG4gICAgICAgIGRpcmVjdGlvbiA9ICdwcmV2JztcbiAgICBlbHNlXG4gICAgICAgIGRpcmVjdGlvbiA9ICdyZXNldCc7XG4gICAgLy8gVXBkYXRlIEluZGV4XG4gICAgaWYgKChydGwgJiYgLXRyYW5zbGF0ZSA9PT0gc3dpcGVyLnRyYW5zbGF0ZSkgfHwgKCFydGwgJiYgdHJhbnNsYXRlID09PSBzd2lwZXIudHJhbnNsYXRlKSkge1xuICAgICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7XG4gICAgICAgIC8vIFVwZGF0ZSBIZWlnaHRcbiAgICAgICAgaWYgKHBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgICAgICBzd2lwZXIudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgICAgIGlmIChwYXJhbXMuZWZmZWN0ICE9PSAnc2xpZGUnKSB7XG4gICAgICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKHRyYW5zbGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbiAhPT0gJ3Jlc2V0Jykge1xuICAgICAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgICAgICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoc3BlZWQgPT09IDAgfHwgIVN1cHBvcnQudHJhbnNpdGlvbikge1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcbiAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7XG4gICAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgICAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3BlZWQpO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKHRyYW5zbGF0ZSk7XG4gICAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleChzbGlkZUluZGV4KTtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcsIHNwZWVkLCBpbnRlcm5hbCk7XG4gICAgICAgIHN3aXBlci50cmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICAgICAgICBpZiAoIXN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHN3aXBlci5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCFzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpIHtcbiAgICAgICAgICAgICAgICBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQ7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHNsaWRlVG9Mb29wKGluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCkge1xuICAgIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7IGluZGV4ID0gMDsgfVxuICAgIGlmIChzcGVlZCA9PT0gdm9pZCAwKSB7IHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQ7IH1cbiAgICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHsgcnVuQ2FsbGJhY2tzID0gdHJ1ZTsgfVxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBuZXdJbmRleCA9IGluZGV4O1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgbmV3SW5kZXggKz0gc3dpcGVyLmxvb3BlZFNsaWRlcztcbiAgICB9XG4gICAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKG5ld0luZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59XG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmZ1bmN0aW9uIHNsaWRlTmV4dChzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCkge1xuICAgIGlmIChzcGVlZCA9PT0gdm9pZCAwKSB7IHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQ7IH1cbiAgICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHsgcnVuQ2FsbGJhY2tzID0gdHJ1ZTsgfVxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLCBhbmltYXRpbmcgPSBzd2lwZXIuYW5pbWF0aW5nO1xuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgICBpZiAoYW5pbWF0aW5nKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgc3dpcGVyLl9jbGllbnRMZWZ0ID0gc3dpcGVyLiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdDtcbiAgICAgICAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCArIHBhcmFtcy5zbGlkZXNQZXJHcm91cCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xuICAgIH1cbiAgICByZXR1cm4gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4ICsgcGFyYW1zLnNsaWRlc1Blckdyb3VwLCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59XG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmZ1bmN0aW9uIHNsaWRlUHJldihzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCkge1xuICAgIGlmIChzcGVlZCA9PT0gdm9pZCAwKSB7IHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQ7IH1cbiAgICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHsgcnVuQ2FsbGJhY2tzID0gdHJ1ZTsgfVxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLCBhbmltYXRpbmcgPSBzd2lwZXIuYW5pbWF0aW5nLCBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZCwgc2xpZGVzR3JpZCA9IHN3aXBlci5zbGlkZXNHcmlkLCBydGxUcmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgICBpZiAoYW5pbWF0aW5nKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgc3dpcGVyLl9jbGllbnRMZWZ0ID0gc3dpcGVyLiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdDtcbiAgICB9XG4gICAgdmFyIHRyYW5zbGF0ZSA9IHJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICBmdW5jdGlvbiBub3JtYWxpemUodmFsKSB7XG4gICAgICAgIGlmICh2YWwgPCAwKVxuICAgICAgICAgICAgcmV0dXJuIC1NYXRoLmZsb29yKE1hdGguYWJzKHZhbCkpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih2YWwpO1xuICAgIH1cbiAgICB2YXIgbm9ybWFsaXplZFRyYW5zbGF0ZSA9IG5vcm1hbGl6ZSh0cmFuc2xhdGUpO1xuICAgIHZhciBub3JtYWxpemVkU25hcEdyaWQgPSBzbmFwR3JpZC5tYXAoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gbm9ybWFsaXplKHZhbCk7IH0pO1xuICAgIHZhciBub3JtYWxpemVkU2xpZGVzR3JpZCA9IHNsaWRlc0dyaWQubWFwKGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIG5vcm1hbGl6ZSh2YWwpOyB9KTtcbiAgICB2YXIgY3VycmVudFNuYXAgPSBzbmFwR3JpZFtub3JtYWxpemVkU25hcEdyaWQuaW5kZXhPZihub3JtYWxpemVkVHJhbnNsYXRlKV07XG4gICAgdmFyIHByZXZTbmFwID0gc25hcEdyaWRbbm9ybWFsaXplZFNuYXBHcmlkLmluZGV4T2Yobm9ybWFsaXplZFRyYW5zbGF0ZSkgLSAxXTtcbiAgICB2YXIgcHJldkluZGV4O1xuICAgIGlmICh0eXBlb2YgcHJldlNuYXAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHByZXZJbmRleCA9IHNsaWRlc0dyaWQuaW5kZXhPZihwcmV2U25hcCk7XG4gICAgICAgIGlmIChwcmV2SW5kZXggPCAwKVxuICAgICAgICAgICAgcHJldkluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4IC0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKHByZXZJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufVxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5mdW5jdGlvbiBzbGlkZVJlc2V0KHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKSB7XG4gICAgaWYgKHNwZWVkID09PSB2b2lkIDApIHsgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZDsgfVxuICAgIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkgeyBydW5DYWxsYmFja3MgPSB0cnVlOyB9XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufVxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5mdW5jdGlvbiBzbGlkZVRvQ2xvc2VzdChzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCkge1xuICAgIGlmIChzcGVlZCA9PT0gdm9pZCAwKSB7IHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQ7IH1cbiAgICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHsgcnVuQ2FsbGJhY2tzID0gdHJ1ZTsgfVxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBpbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgICB2YXIgc25hcEluZGV4ID0gTWF0aC5mbG9vcihpbmRleCAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICAgIGlmIChzbmFwSW5kZXggPCBzd2lwZXIuc25hcEdyaWQubGVuZ3RoIC0gMSkge1xuICAgICAgICB2YXIgdHJhbnNsYXRlXzEgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuICAgICAgICB2YXIgY3VycmVudFNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4XTtcbiAgICAgICAgdmFyIG5leHRTbmFwID0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleCArIDFdO1xuICAgICAgICBpZiAoKHRyYW5zbGF0ZV8xIC0gY3VycmVudFNuYXApID4gKG5leHRTbmFwIC0gY3VycmVudFNuYXApIC8gMikge1xuICAgICAgICAgICAgaW5kZXggPSBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzd2lwZXIuc2xpZGVUbyhpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufVxuZnVuY3Rpb24gc2xpZGVUb0NsaWNrZWRTbGlkZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcywgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsO1xuICAgIHZhciBzbGlkZXNQZXJWaWV3ID0gcGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyA/IHN3aXBlci5zbGlkZXNQZXJWaWV3RHluYW1pYygpIDogcGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gICAgdmFyIHNsaWRlVG9JbmRleCA9IHN3aXBlci5jbGlja2VkSW5kZXg7XG4gICAgdmFyIHJlYWxJbmRleDtcbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgICAgaWYgKHN3aXBlci5hbmltYXRpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHJlYWxJbmRleCA9IHBhcnNlSW50KCQoc3dpcGVyLmNsaWNrZWRTbGlkZSkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuICAgICAgICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgICAgICBpZiAoKHNsaWRlVG9JbmRleCA8IHN3aXBlci5sb29wZWRTbGlkZXMgLSAoc2xpZGVzUGVyVmlldyAvIDIpKVxuICAgICAgICAgICAgICAgIHx8IChzbGlkZVRvSW5kZXggPiAoc3dpcGVyLnNsaWRlcy5sZW5ndGggLSBzd2lwZXIubG9vcGVkU2xpZGVzKSArIChzbGlkZXNQZXJWaWV3IC8gMikpKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgICAgICAgICAgICBzbGlkZVRvSW5kZXggPSAkd3JhcHBlckVsXG4gICAgICAgICAgICAgICAgICAgIC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgcmVhbEluZGV4ICsgXCJcXFwiXTpub3QoLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIilcIilcbiAgICAgICAgICAgICAgICAgICAgLmVxKDApXG4gICAgICAgICAgICAgICAgICAgIC5pbmRleCgpO1xuICAgICAgICAgICAgICAgIFV0aWxzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2xpZGVUb0luZGV4ID4gc3dpcGVyLnNsaWRlcy5sZW5ndGggLSBzbGlkZXNQZXJWaWV3KSB7XG4gICAgICAgICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgICAgICAgc2xpZGVUb0luZGV4ID0gJHdyYXBwZXJFbFxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgcmVhbEluZGV4ICsgXCJcXFwiXTpub3QoLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIilcIilcbiAgICAgICAgICAgICAgICAuZXEoMClcbiAgICAgICAgICAgICAgICAuaW5kZXgoKTtcbiAgICAgICAgICAgIFV0aWxzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgIH1cbn1cbnZhciBzbGlkZSA9IHtcbiAgICBzbGlkZVRvOiBzbGlkZVRvLFxuICAgIHNsaWRlVG9Mb29wOiBzbGlkZVRvTG9vcCxcbiAgICBzbGlkZU5leHQ6IHNsaWRlTmV4dCxcbiAgICBzbGlkZVByZXY6IHNsaWRlUHJldixcbiAgICBzbGlkZVJlc2V0OiBzbGlkZVJlc2V0LFxuICAgIHNsaWRlVG9DbG9zZXN0OiBzbGlkZVRvQ2xvc2VzdCxcbiAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBzbGlkZVRvQ2xpY2tlZFNsaWRlLFxufTtcbmZ1bmN0aW9uIGxvb3BDcmVhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICAvLyBSZW1vdmUgZHVwbGljYXRlZCBzbGlkZXNcbiAgICAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIi5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKS5yZW1vdmUoKTtcbiAgICB2YXIgc2xpZGVzID0gJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzKTtcbiAgICBpZiAocGFyYW1zLmxvb3BGaWxsR3JvdXBXaXRoQmxhbmspIHtcbiAgICAgICAgdmFyIGJsYW5rU2xpZGVzTnVtID0gcGFyYW1zLnNsaWRlc1Blckdyb3VwIC0gKHNsaWRlcy5sZW5ndGggJSBwYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICAgICAgICBpZiAoYmxhbmtTbGlkZXNOdW0gIT09IHBhcmFtcy5zbGlkZXNQZXJHcm91cCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibGFua1NsaWRlc051bTsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJsYW5rTm9kZSA9ICQoZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVDbGFzcyArIFwiIFwiICsgcGFyYW1zLnNsaWRlQmxhbmtDbGFzcyk7XG4gICAgICAgICAgICAgICAgJHdyYXBwZXJFbC5hcHBlbmQoYmxhbmtOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgJiYgIXBhcmFtcy5sb29wZWRTbGlkZXMpXG4gICAgICAgIHBhcmFtcy5sb29wZWRTbGlkZXMgPSBzbGlkZXMubGVuZ3RoO1xuICAgIHN3aXBlci5sb29wZWRTbGlkZXMgPSBwYXJzZUludChwYXJhbXMubG9vcGVkU2xpZGVzIHx8IHBhcmFtcy5zbGlkZXNQZXJWaWV3LCAxMCk7XG4gICAgc3dpcGVyLmxvb3BlZFNsaWRlcyArPSBwYXJhbXMubG9vcEFkZGl0aW9uYWxTbGlkZXM7XG4gICAgaWYgKHN3aXBlci5sb29wZWRTbGlkZXMgPiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgICAgIHN3aXBlci5sb29wZWRTbGlkZXMgPSBzbGlkZXMubGVuZ3RoO1xuICAgIH1cbiAgICB2YXIgcHJlcGVuZFNsaWRlcyA9IFtdO1xuICAgIHZhciBhcHBlbmRTbGlkZXMgPSBbXTtcbiAgICBzbGlkZXMuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsKSB7XG4gICAgICAgIHZhciBzbGlkZSA9ICQoZWwpO1xuICAgICAgICBpZiAoaW5kZXggPCBzd2lwZXIubG9vcGVkU2xpZGVzKVxuICAgICAgICAgICAgYXBwZW5kU2xpZGVzLnB1c2goZWwpO1xuICAgICAgICBpZiAoaW5kZXggPCBzbGlkZXMubGVuZ3RoICYmIGluZGV4ID49IHNsaWRlcy5sZW5ndGggLSBzd2lwZXIubG9vcGVkU2xpZGVzKVxuICAgICAgICAgICAgcHJlcGVuZFNsaWRlcy5wdXNoKGVsKTtcbiAgICAgICAgc2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnLCBpbmRleCk7XG4gICAgfSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcHBlbmRTbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgJHdyYXBwZXJFbC5hcHBlbmQoJChhcHBlbmRTbGlkZXNbaV0uY2xvbmVOb2RlKHRydWUpKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gcHJlcGVuZFNsaWRlcy5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICAkd3JhcHBlckVsLnByZXBlbmQoJChwcmVwZW5kU2xpZGVzW2ldLmNsb25lTm9kZSh0cnVlKSkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBsb29wRml4KCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLCBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCwgc2xpZGVzID0gc3dpcGVyLnNsaWRlcywgbG9vcGVkU2xpZGVzID0gc3dpcGVyLmxvb3BlZFNsaWRlcywgYWxsb3dTbGlkZVByZXYgPSBzd2lwZXIuYWxsb3dTbGlkZVByZXYsIGFsbG93U2xpZGVOZXh0ID0gc3dpcGVyLmFsbG93U2xpZGVOZXh0LCBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZCwgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZTtcbiAgICB2YXIgbmV3SW5kZXg7XG4gICAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gdHJ1ZTtcbiAgICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSB0cnVlO1xuICAgIHZhciBzbmFwVHJhbnNsYXRlID0gLXNuYXBHcmlkW2FjdGl2ZUluZGV4XTtcbiAgICB2YXIgZGlmZiA9IHNuYXBUcmFuc2xhdGUgLSBzd2lwZXIuZ2V0VHJhbnNsYXRlKCk7XG4gICAgLy8gRml4IEZvciBOZWdhdGl2ZSBPdmVyc2xpZGluZ1xuICAgIGlmIChhY3RpdmVJbmRleCA8IGxvb3BlZFNsaWRlcykge1xuICAgICAgICBuZXdJbmRleCA9IChzbGlkZXMubGVuZ3RoIC0gKGxvb3BlZFNsaWRlcyAqIDMpKSArIGFjdGl2ZUluZGV4O1xuICAgICAgICBuZXdJbmRleCArPSBsb29wZWRTbGlkZXM7XG4gICAgICAgIHZhciBzbGlkZUNoYW5nZWQgPSBzd2lwZXIuc2xpZGVUbyhuZXdJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgICBpZiAoc2xpZGVDaGFuZ2VkICYmIGRpZmYgIT09IDApIHtcbiAgICAgICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUoKHJ0bCA/IC1zd2lwZXIudHJhbnNsYXRlIDogc3dpcGVyLnRyYW5zbGF0ZSkgLSBkaWZmKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyAmJiBhY3RpdmVJbmRleCA+PSBsb29wZWRTbGlkZXMgKiAyKSB8fCAoYWN0aXZlSW5kZXggPj0gc2xpZGVzLmxlbmd0aCAtIGxvb3BlZFNsaWRlcykpIHtcbiAgICAgICAgLy8gRml4IEZvciBQb3NpdGl2ZSBPdmVyc2xpZGluZ1xuICAgICAgICBuZXdJbmRleCA9IC1zbGlkZXMubGVuZ3RoICsgYWN0aXZlSW5kZXggKyBsb29wZWRTbGlkZXM7XG4gICAgICAgIG5ld0luZGV4ICs9IGxvb3BlZFNsaWRlcztcbiAgICAgICAgdmFyIHNsaWRlQ2hhbmdlZCA9IHN3aXBlci5zbGlkZVRvKG5ld0luZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIGlmIChzbGlkZUNoYW5nZWQgJiYgZGlmZiAhPT0gMCkge1xuICAgICAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZSgocnRsID8gLXN3aXBlci50cmFuc2xhdGUgOiBzd2lwZXIudHJhbnNsYXRlKSAtIGRpZmYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9IGFsbG93U2xpZGVQcmV2O1xuICAgIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IGFsbG93U2xpZGVOZXh0O1xufVxuZnVuY3Rpb24gbG9vcERlc3Ryb3koKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCwgcGFyYW1zID0gc3dpcGVyLnBhcmFtcywgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcbiAgICAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIi5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCIsLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIi5cIiArIHBhcmFtcy5zbGlkZUJsYW5rQ2xhc3MpLnJlbW92ZSgpO1xuICAgIHNsaWRlcy5yZW1vdmVBdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xufVxudmFyIGxvb3AgPSB7XG4gICAgbG9vcENyZWF0ZTogbG9vcENyZWF0ZSxcbiAgICBsb29wRml4OiBsb29wRml4LFxuICAgIGxvb3BEZXN0cm95OiBsb29wRGVzdHJveSxcbn07XG5mdW5jdGlvbiBzZXRHcmFiQ3Vyc29yKG1vdmluZykge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmIChTdXBwb3J0LnRvdWNoIHx8ICFzd2lwZXIucGFyYW1zLnNpbXVsYXRlVG91Y2ggfHwgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuaXNMb2NrZWQpKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIGVsID0gc3dpcGVyLmVsO1xuICAgIGVsLnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcbiAgICBlbC5zdHlsZS5jdXJzb3IgPSBtb3ZpbmcgPyAnLXdlYmtpdC1ncmFiYmluZycgOiAnLXdlYmtpdC1ncmFiJztcbiAgICBlbC5zdHlsZS5jdXJzb3IgPSBtb3ZpbmcgPyAnLW1vei1ncmFiYmluJyA6ICctbW96LWdyYWInO1xuICAgIGVsLnN0eWxlLmN1cnNvciA9IG1vdmluZyA/ICdncmFiYmluZycgOiAnZ3JhYic7XG59XG5mdW5jdGlvbiB1bnNldEdyYWJDdXJzb3IoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKFN1cHBvcnQudG91Y2ggfHwgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuaXNMb2NrZWQpKVxuICAgICAgICByZXR1cm47XG4gICAgc3dpcGVyLmVsLnN0eWxlLmN1cnNvciA9ICcnO1xufVxudmFyIGdyYWJDdXJzb3IgPSB7XG4gICAgc2V0R3JhYkN1cnNvcjogc2V0R3JhYkN1cnNvcixcbiAgICB1bnNldEdyYWJDdXJzb3I6IHVuc2V0R3JhYkN1cnNvcixcbn07XG5mdW5jdGlvbiBhcHBlbmRTbGlkZShzbGlkZXMpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHNsaWRlc1tpXSlcbiAgICAgICAgICAgICAgICAkd3JhcHBlckVsLmFwcGVuZChzbGlkZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAkd3JhcHBlckVsLmFwcGVuZChzbGlkZXMpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgICB9XG4gICAgaWYgKCEocGFyYW1zLm9ic2VydmVyICYmIFN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgICAgIHN3aXBlci51cGRhdGUoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBwcmVwZW5kU2xpZGUoc2xpZGVzKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCwgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgIH1cbiAgICB2YXIgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCArIDE7XG4gICAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHNsaWRlc1tpXSlcbiAgICAgICAgICAgICAgICAkd3JhcHBlckVsLnByZXBlbmQoc2xpZGVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4ICsgc2xpZGVzLmxlbmd0aDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgICR3cmFwcGVyRWwucHJlcGVuZChzbGlkZXMpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgICB9XG4gICAgaWYgKCEocGFyYW1zLm9ic2VydmVyICYmIFN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgICAgIHN3aXBlci51cGRhdGUoKTtcbiAgICB9XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXgsIDAsIGZhbHNlKTtcbn1cbmZ1bmN0aW9uIGFkZFNsaWRlKGluZGV4LCBzbGlkZXMpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLCBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgICB2YXIgYWN0aXZlSW5kZXhCdWZmZXIgPSBhY3RpdmVJbmRleDtcbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgICAgYWN0aXZlSW5kZXhCdWZmZXIgLT0gc3dpcGVyLmxvb3BlZFNsaWRlcztcbiAgICAgICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgICAgIHN3aXBlci5zbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MpO1xuICAgIH1cbiAgICB2YXIgYmFzZUxlbmd0aCA9IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuICAgIGlmIChpbmRleCA8PSAwKSB7XG4gICAgICAgIHN3aXBlci5wcmVwZW5kU2xpZGUoc2xpZGVzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPj0gYmFzZUxlbmd0aCkge1xuICAgICAgICBzd2lwZXIuYXBwZW5kU2xpZGUoc2xpZGVzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleEJ1ZmZlciA+IGluZGV4ID8gYWN0aXZlSW5kZXhCdWZmZXIgKyAxIDogYWN0aXZlSW5kZXhCdWZmZXI7XG4gICAgdmFyIHNsaWRlc0J1ZmZlciA9IFtdO1xuICAgIGZvciAodmFyIGkgPSBiYXNlTGVuZ3RoIC0gMTsgaSA+PSBpbmRleDsgaSAtPSAxKSB7XG4gICAgICAgIHZhciBjdXJyZW50U2xpZGUgPSBzd2lwZXIuc2xpZGVzLmVxKGkpO1xuICAgICAgICBjdXJyZW50U2xpZGUucmVtb3ZlKCk7XG4gICAgICAgIHNsaWRlc0J1ZmZlci51bnNoaWZ0KGN1cnJlbnRTbGlkZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc2xpZGVzID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBzbGlkZXMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChzbGlkZXNbaV0pXG4gICAgICAgICAgICAgICAgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4QnVmZmVyID4gaW5kZXggPyBhY3RpdmVJbmRleEJ1ZmZlciArIHNsaWRlcy5sZW5ndGggOiBhY3RpdmVJbmRleEJ1ZmZlcjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlcyk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzQnVmZmVyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlc0J1ZmZlcltpXSk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICAgIH1cbiAgICBpZiAoIShwYXJhbXMub2JzZXJ2ZXIgJiYgU3VwcG9ydC5vYnNlcnZlcikpIHtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXggKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBmYWxzZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCwgMCwgZmFsc2UpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlbW92ZVNsaWRlKHNsaWRlc0luZGV4ZXMpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcywgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLCBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgICB2YXIgYWN0aXZlSW5kZXhCdWZmZXIgPSBhY3RpdmVJbmRleDtcbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgICAgYWN0aXZlSW5kZXhCdWZmZXIgLT0gc3dpcGVyLmxvb3BlZFNsaWRlcztcbiAgICAgICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgICAgIHN3aXBlci5zbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MpO1xuICAgIH1cbiAgICB2YXIgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleEJ1ZmZlcjtcbiAgICB2YXIgaW5kZXhUb1JlbW92ZTtcbiAgICBpZiAodHlwZW9mIHNsaWRlc0luZGV4ZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlc0luZGV4ZXMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXNJbmRleGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpbmRleFRvUmVtb3ZlID0gc2xpZGVzSW5kZXhlc1tpXTtcbiAgICAgICAgICAgIGlmIChzd2lwZXIuc2xpZGVzW2luZGV4VG9SZW1vdmVdKVxuICAgICAgICAgICAgICAgIHN3aXBlci5zbGlkZXMuZXEoaW5kZXhUb1JlbW92ZSkucmVtb3ZlKCk7XG4gICAgICAgICAgICBpZiAoaW5kZXhUb1JlbW92ZSA8IG5ld0FjdGl2ZUluZGV4KVxuICAgICAgICAgICAgICAgIG5ld0FjdGl2ZUluZGV4IC09IDE7XG4gICAgICAgIH1cbiAgICAgICAgbmV3QWN0aXZlSW5kZXggPSBNYXRoLm1heChuZXdBY3RpdmVJbmRleCwgMCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpbmRleFRvUmVtb3ZlID0gc2xpZGVzSW5kZXhlcztcbiAgICAgICAgaWYgKHN3aXBlci5zbGlkZXNbaW5kZXhUb1JlbW92ZV0pXG4gICAgICAgICAgICBzd2lwZXIuc2xpZGVzLmVxKGluZGV4VG9SZW1vdmUpLnJlbW92ZSgpO1xuICAgICAgICBpZiAoaW5kZXhUb1JlbW92ZSA8IG5ld0FjdGl2ZUluZGV4KVxuICAgICAgICAgICAgbmV3QWN0aXZlSW5kZXggLT0gMTtcbiAgICAgICAgbmV3QWN0aXZlSW5kZXggPSBNYXRoLm1heChuZXdBY3RpdmVJbmRleCwgMCk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICAgIH1cbiAgICBpZiAoIShwYXJhbXMub2JzZXJ2ZXIgJiYgU3VwcG9ydC5vYnNlcnZlcikpIHtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXggKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBmYWxzZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCwgMCwgZmFsc2UpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlbW92ZUFsbFNsaWRlcygpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgc2xpZGVzSW5kZXhlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzbGlkZXNJbmRleGVzLnB1c2goaSk7XG4gICAgfVxuICAgIHN3aXBlci5yZW1vdmVTbGlkZShzbGlkZXNJbmRleGVzKTtcbn1cbnZhciBtYW5pcHVsYXRpb24gPSB7XG4gICAgYXBwZW5kU2xpZGU6IGFwcGVuZFNsaWRlLFxuICAgIHByZXBlbmRTbGlkZTogcHJlcGVuZFNsaWRlLFxuICAgIGFkZFNsaWRlOiBhZGRTbGlkZSxcbiAgICByZW1vdmVTbGlkZTogcmVtb3ZlU2xpZGUsXG4gICAgcmVtb3ZlQWxsU2xpZGVzOiByZW1vdmVBbGxTbGlkZXMsXG59O1xudmFyIERldmljZSA9IChmdW5jdGlvbiBEZXZpY2UoKSB7XG4gICAgdmFyIHVhID0gd2luLm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgdmFyIGRldmljZSA9IHtcbiAgICAgICAgaW9zOiBmYWxzZSxcbiAgICAgICAgYW5kcm9pZDogZmFsc2UsXG4gICAgICAgIGFuZHJvaWRDaHJvbWU6IGZhbHNlLFxuICAgICAgICBkZXNrdG9wOiBmYWxzZSxcbiAgICAgICAgd2luZG93czogZmFsc2UsXG4gICAgICAgIGlwaG9uZTogZmFsc2UsXG4gICAgICAgIGlwb2Q6IGZhbHNlLFxuICAgICAgICBpcGFkOiBmYWxzZSxcbiAgICAgICAgY29yZG92YTogd2luLmNvcmRvdmEgfHwgd2luLnBob25lZ2FwLFxuICAgICAgICBwaG9uZWdhcDogd2luLmNvcmRvdmEgfHwgd2luLnBob25lZ2FwLFxuICAgIH07XG4gICAgdmFyIHdpbmRvd3MgPSB1YS5tYXRjaCgvKFdpbmRvd3MgUGhvbmUpOz9bXFxzXFwvXSsoW1xcZC5dKyk/Lyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB2YXIgYW5kcm9pZCA9IHVhLm1hdGNoKC8oQW5kcm9pZCk7P1tcXHNcXC9dKyhbXFxkLl0rKT8vKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIHZhciBpcGFkID0gdWEubWF0Y2goLyhpUGFkKS4qT1NcXHMoW1xcZF9dKykvKTtcbiAgICB2YXIgaXBvZCA9IHVhLm1hdGNoKC8oaVBvZCkoLipPU1xccyhbXFxkX10rKSk/Lyk7XG4gICAgdmFyIGlwaG9uZSA9ICFpcGFkICYmIHVhLm1hdGNoKC8oaVBob25lXFxzT1N8aU9TKVxccyhbXFxkX10rKS8pO1xuICAgIC8vIFdpbmRvd3NcbiAgICBpZiAod2luZG93cykge1xuICAgICAgICBkZXZpY2Uub3MgPSAnd2luZG93cyc7XG4gICAgICAgIGRldmljZS5vc1ZlcnNpb24gPSB3aW5kb3dzWzJdO1xuICAgICAgICBkZXZpY2Uud2luZG93cyA9IHRydWU7XG4gICAgfVxuICAgIC8vIEFuZHJvaWRcbiAgICBpZiAoYW5kcm9pZCAmJiAhd2luZG93cykge1xuICAgICAgICBkZXZpY2Uub3MgPSAnYW5kcm9pZCc7XG4gICAgICAgIGRldmljZS5vc1ZlcnNpb24gPSBhbmRyb2lkWzJdO1xuICAgICAgICBkZXZpY2UuYW5kcm9pZCA9IHRydWU7XG4gICAgICAgIGRldmljZS5hbmRyb2lkQ2hyb21lID0gdWEudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdjaHJvbWUnKSA+PSAwO1xuICAgIH1cbiAgICBpZiAoaXBhZCB8fCBpcGhvbmUgfHwgaXBvZCkge1xuICAgICAgICBkZXZpY2Uub3MgPSAnaW9zJztcbiAgICAgICAgZGV2aWNlLmlvcyA9IHRydWU7XG4gICAgfVxuICAgIC8vIGlPU1xuICAgIGlmIChpcGhvbmUgJiYgIWlwb2QpIHtcbiAgICAgICAgZGV2aWNlLm9zVmVyc2lvbiA9IGlwaG9uZVsyXS5yZXBsYWNlKC9fL2csICcuJyk7XG4gICAgICAgIGRldmljZS5pcGhvbmUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoaXBhZCkge1xuICAgICAgICBkZXZpY2Uub3NWZXJzaW9uID0gaXBhZFsyXS5yZXBsYWNlKC9fL2csICcuJyk7XG4gICAgICAgIGRldmljZS5pcGFkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGlwb2QpIHtcbiAgICAgICAgZGV2aWNlLm9zVmVyc2lvbiA9IGlwb2RbM10gPyBpcG9kWzNdLnJlcGxhY2UoL18vZywgJy4nKSA6IG51bGw7XG4gICAgICAgIGRldmljZS5pcGhvbmUgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBpT1MgOCsgY2hhbmdlZCBVQVxuICAgIGlmIChkZXZpY2UuaW9zICYmIGRldmljZS5vc1ZlcnNpb24gJiYgdWEuaW5kZXhPZignVmVyc2lvbi8nKSA+PSAwKSB7XG4gICAgICAgIGlmIChkZXZpY2Uub3NWZXJzaW9uLnNwbGl0KCcuJylbMF0gPT09ICcxMCcpIHtcbiAgICAgICAgICAgIGRldmljZS5vc1ZlcnNpb24gPSB1YS50b0xvd2VyQ2FzZSgpLnNwbGl0KCd2ZXJzaW9uLycpWzFdLnNwbGl0KCcgJylbMF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRGVza3RvcFxuICAgIGRldmljZS5kZXNrdG9wID0gIShkZXZpY2Uub3MgfHwgZGV2aWNlLmFuZHJvaWQgfHwgZGV2aWNlLndlYlZpZXcpO1xuICAgIC8vIFdlYnZpZXdcbiAgICBkZXZpY2Uud2ViVmlldyA9IChpcGhvbmUgfHwgaXBhZCB8fCBpcG9kKSAmJiB1YS5tYXRjaCgvLipBcHBsZVdlYktpdCg/IS4qU2FmYXJpKS9pKTtcbiAgICAvLyBNaW5pbWFsIFVJXG4gICAgaWYgKGRldmljZS5vcyAmJiBkZXZpY2Uub3MgPT09ICdpb3MnKSB7XG4gICAgICAgIHZhciBvc1ZlcnNpb25BcnIgPSBkZXZpY2Uub3NWZXJzaW9uLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciBtZXRhVmlld3BvcnQgPSBkb2MucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidmlld3BvcnRcIl0nKTtcbiAgICAgICAgZGV2aWNlLm1pbmltYWxVaSA9ICFkZXZpY2Uud2ViVmlld1xuICAgICAgICAgICAgJiYgKGlwb2QgfHwgaXBob25lKVxuICAgICAgICAgICAgJiYgKG9zVmVyc2lvbkFyclswXSAqIDEgPT09IDcgPyBvc1ZlcnNpb25BcnJbMV0gKiAxID49IDEgOiBvc1ZlcnNpb25BcnJbMF0gKiAxID4gNylcbiAgICAgICAgICAgICYmIG1ldGFWaWV3cG9ydCAmJiBtZXRhVmlld3BvcnQuZ2V0QXR0cmlidXRlKCdjb250ZW50JykuaW5kZXhPZignbWluaW1hbC11aScpID49IDA7XG4gICAgfVxuICAgIC8vIFBpeGVsIFJhdGlvXG4gICAgZGV2aWNlLnBpeGVsUmF0aW8gPSB3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICAgIC8vIEV4cG9ydCBvYmplY3RcbiAgICByZXR1cm4gZGV2aWNlO1xufSgpKTtcbmZ1bmN0aW9uIG9uVG91Y2hTdGFydChldmVudCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBkYXRhID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YTtcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcywgdG91Y2hlcyA9IHN3aXBlci50b3VjaGVzO1xuICAgIGlmIChzd2lwZXIuYW5pbWF0aW5nICYmIHBhcmFtcy5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZSA9IGV2ZW50O1xuICAgIGlmIChlLm9yaWdpbmFsRXZlbnQpXG4gICAgICAgIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG4gICAgZGF0YS5pc1RvdWNoRXZlbnQgPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JztcbiAgICBpZiAoIWRhdGEuaXNUb3VjaEV2ZW50ICYmICd3aGljaCcgaW4gZSAmJiBlLndoaWNoID09PSAzKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKCFkYXRhLmlzVG91Y2hFdmVudCAmJiAnYnV0dG9uJyBpbiBlICYmIGUuYnV0dG9uID4gMClcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChkYXRhLmlzVG91Y2hlZCAmJiBkYXRhLmlzTW92ZWQpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAocGFyYW1zLm5vU3dpcGluZyAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KHBhcmFtcy5ub1N3aXBpbmdTZWxlY3RvciA/IHBhcmFtcy5ub1N3aXBpbmdTZWxlY3RvciA6IFwiLlwiICsgcGFyYW1zLm5vU3dpcGluZ0NsYXNzKVswXSkge1xuICAgICAgICBzd2lwZXIuYWxsb3dDbGljayA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5zd2lwZUhhbmRsZXIpIHtcbiAgICAgICAgaWYgKCEkKGUpLmNsb3Nlc3QocGFyYW1zLnN3aXBlSGFuZGxlcilbMF0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRvdWNoZXMuY3VycmVudFggPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gICAgdG91Y2hlcy5jdXJyZW50WSA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcbiAgICB2YXIgc3RhcnRYID0gdG91Y2hlcy5jdXJyZW50WDtcbiAgICB2YXIgc3RhcnRZID0gdG91Y2hlcy5jdXJyZW50WTtcbiAgICAvLyBEbyBOT1Qgc3RhcnQgaWYgaU9TIGVkZ2Ugc3dpcGUgaXMgZGV0ZWN0ZWQuIE90aGVyd2lzZSBpT1MgYXBwIChVSVdlYlZpZXcpIGNhbm5vdCBzd2lwZS10by1nby1iYWNrIGFueW1vcmVcbiAgICB2YXIgZWRnZVN3aXBlRGV0ZWN0aW9uID0gcGFyYW1zLmVkZ2VTd2lwZURldGVjdGlvbiB8fCBwYXJhbXMuaU9TRWRnZVN3aXBlRGV0ZWN0aW9uO1xuICAgIHZhciBlZGdlU3dpcGVUaHJlc2hvbGQgPSBwYXJhbXMuZWRnZVN3aXBlVGhyZXNob2xkIHx8IHBhcmFtcy5pT1NFZGdlU3dpcGVUaHJlc2hvbGQ7XG4gICAgaWYgKGVkZ2VTd2lwZURldGVjdGlvblxuICAgICAgICAmJiAoKHN0YXJ0WCA8PSBlZGdlU3dpcGVUaHJlc2hvbGQpXG4gICAgICAgICAgICB8fCAoc3RhcnRYID49IHdpbi5zY3JlZW4ud2lkdGggLSBlZGdlU3dpcGVUaHJlc2hvbGQpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFV0aWxzLmV4dGVuZChkYXRhLCB7XG4gICAgICAgIGlzVG91Y2hlZDogdHJ1ZSxcbiAgICAgICAgaXNNb3ZlZDogZmFsc2UsXG4gICAgICAgIGFsbG93VG91Y2hDYWxsYmFja3M6IHRydWUsXG4gICAgICAgIGlzU2Nyb2xsaW5nOiB1bmRlZmluZWQsXG4gICAgICAgIHN0YXJ0TW92aW5nOiB1bmRlZmluZWQsXG4gICAgfSk7XG4gICAgdG91Y2hlcy5zdGFydFggPSBzdGFydFg7XG4gICAgdG91Y2hlcy5zdGFydFkgPSBzdGFydFk7XG4gICAgZGF0YS50b3VjaFN0YXJ0VGltZSA9IFV0aWxzLm5vdygpO1xuICAgIHN3aXBlci5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuICAgIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyYW1zLnRocmVzaG9sZCA+IDApXG4gICAgICAgIGRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlID0gZmFsc2U7XG4gICAgaWYgKGUudHlwZSAhPT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgIHZhciBwcmV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgICAgIGlmICgkKGUudGFyZ2V0KS5pcyhkYXRhLmZvcm1FbGVtZW50cykpXG4gICAgICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGZhbHNlO1xuICAgICAgICBpZiAoZG9jLmFjdGl2ZUVsZW1lbnRcbiAgICAgICAgICAgICYmICQoZG9jLmFjdGl2ZUVsZW1lbnQpLmlzKGRhdGEuZm9ybUVsZW1lbnRzKVxuICAgICAgICAgICAgJiYgZG9jLmFjdGl2ZUVsZW1lbnQgIT09IGUudGFyZ2V0KSB7XG4gICAgICAgICAgICBkb2MuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNob3VsZFByZXZlbnREZWZhdWx0ID0gcHJldmVudERlZmF1bHQgJiYgc3dpcGVyLmFsbG93VG91Y2hNb3ZlICYmIHBhcmFtcy50b3VjaFN0YXJ0UHJldmVudERlZmF1bHQ7XG4gICAgICAgIGlmIChwYXJhbXMudG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQgfHwgc2hvdWxkUHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzd2lwZXIuZW1pdCgndG91Y2hTdGFydCcsIGUpO1xufVxuZnVuY3Rpb24gb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsIHRvdWNoZXMgPSBzd2lwZXIudG91Y2hlcywgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZTtcbiAgICB2YXIgZSA9IGV2ZW50O1xuICAgIGlmIChlLm9yaWdpbmFsRXZlbnQpXG4gICAgICAgIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG4gICAgaWYgKCFkYXRhLmlzVG91Y2hlZCkge1xuICAgICAgICBpZiAoZGF0YS5zdGFydE1vdmluZyAmJiBkYXRhLmlzU2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgndG91Y2hNb3ZlT3Bwb3NpdGUnLCBlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkYXRhLmlzVG91Y2hFdmVudCAmJiBlLnR5cGUgPT09ICdtb3VzZW1vdmUnKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIHBhZ2VYID0gZS50eXBlID09PSAndG91Y2htb3ZlJyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gICAgdmFyIHBhZ2VZID0gZS50eXBlID09PSAndG91Y2htb3ZlJyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVk7XG4gICAgaWYgKGUucHJldmVudGVkQnlOZXN0ZWRTd2lwZXIpIHtcbiAgICAgICAgdG91Y2hlcy5zdGFydFggPSBwYWdlWDtcbiAgICAgICAgdG91Y2hlcy5zdGFydFkgPSBwYWdlWTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXN3aXBlci5hbGxvd1RvdWNoTW92ZSkge1xuICAgICAgICAvLyBpc01vdmVkID0gdHJ1ZTtcbiAgICAgICAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcbiAgICAgICAgaWYgKGRhdGEuaXNUb3VjaGVkKSB7XG4gICAgICAgICAgICBVdGlscy5leHRlbmQodG91Y2hlcywge1xuICAgICAgICAgICAgICAgIHN0YXJ0WDogcGFnZVgsXG4gICAgICAgICAgICAgICAgc3RhcnRZOiBwYWdlWSxcbiAgICAgICAgICAgICAgICBjdXJyZW50WDogcGFnZVgsXG4gICAgICAgICAgICAgICAgY3VycmVudFk6IHBhZ2VZLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkYXRhLnRvdWNoU3RhcnRUaW1lID0gVXRpbHMubm93KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGF0YS5pc1RvdWNoRXZlbnQgJiYgcGFyYW1zLnRvdWNoUmVsZWFzZU9uRWRnZXMgJiYgIXBhcmFtcy5sb29wKSB7XG4gICAgICAgIGlmIChzd2lwZXIuaXNWZXJ0aWNhbCgpKSB7XG4gICAgICAgICAgICAvLyBWZXJ0aWNhbFxuICAgICAgICAgICAgaWYgKChwYWdlWSA8IHRvdWNoZXMuc3RhcnRZICYmIHN3aXBlci50cmFuc2xhdGUgPD0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpKVxuICAgICAgICAgICAgICAgIHx8IChwYWdlWSA+IHRvdWNoZXMuc3RhcnRZICYmIHN3aXBlci50cmFuc2xhdGUgPj0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSkge1xuICAgICAgICAgICAgICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKChwYWdlWCA8IHRvdWNoZXMuc3RhcnRYICYmIHN3aXBlci50cmFuc2xhdGUgPD0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpKVxuICAgICAgICAgICAgfHwgKHBhZ2VYID4gdG91Y2hlcy5zdGFydFggJiYgc3dpcGVyLnRyYW5zbGF0ZSA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRhdGEuaXNUb3VjaEV2ZW50ICYmIGRvYy5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9jLmFjdGl2ZUVsZW1lbnQgJiYgJChlLnRhcmdldCkuaXMoZGF0YS5mb3JtRWxlbWVudHMpKSB7XG4gICAgICAgICAgICBkYXRhLmlzTW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGF0YS5hbGxvd1RvdWNoQ2FsbGJhY2tzKSB7XG4gICAgICAgIHN3aXBlci5lbWl0KCd0b3VjaE1vdmUnLCBlKTtcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoID4gMSlcbiAgICAgICAgcmV0dXJuO1xuICAgIHRvdWNoZXMuY3VycmVudFggPSBwYWdlWDtcbiAgICB0b3VjaGVzLmN1cnJlbnRZID0gcGFnZVk7XG4gICAgdmFyIGRpZmZYID0gdG91Y2hlcy5jdXJyZW50WCAtIHRvdWNoZXMuc3RhcnRYO1xuICAgIHZhciBkaWZmWSA9IHRvdWNoZXMuY3VycmVudFkgLSB0b3VjaGVzLnN0YXJ0WTtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy50aHJlc2hvbGQgJiYgTWF0aC5zcXJ0KChNYXRoLnBvdyhkaWZmWCwgMikpICsgKE1hdGgucG93KGRpZmZZLCAyKSkpIDwgc3dpcGVyLnBhcmFtcy50aHJlc2hvbGQpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAodHlwZW9mIGRhdGEuaXNTY3JvbGxpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciB0b3VjaEFuZ2xlID0gdm9pZCAwO1xuICAgICAgICBpZiAoKHN3aXBlci5pc0hvcml6b250YWwoKSAmJiB0b3VjaGVzLmN1cnJlbnRZID09PSB0b3VjaGVzLnN0YXJ0WSkgfHwgKHN3aXBlci5pc1ZlcnRpY2FsKCkgJiYgdG91Y2hlcy5jdXJyZW50WCA9PT0gdG91Y2hlcy5zdGFydFgpKSB7XG4gICAgICAgICAgICBkYXRhLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmICgoZGlmZlggKiBkaWZmWCkgKyAoZGlmZlkgKiBkaWZmWSkgPj0gMjUpIHtcbiAgICAgICAgICAgICAgICB0b3VjaEFuZ2xlID0gKE1hdGguYXRhbjIoTWF0aC5hYnMoZGlmZlkpLCBNYXRoLmFicyhkaWZmWCkpICogMTgwKSAvIE1hdGguUEk7XG4gICAgICAgICAgICAgICAgZGF0YS5pc1Njcm9sbGluZyA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHRvdWNoQW5nbGUgPiBwYXJhbXMudG91Y2hBbmdsZSA6ICg5MCAtIHRvdWNoQW5nbGUgPiBwYXJhbXMudG91Y2hBbmdsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRhdGEuaXNTY3JvbGxpbmcpIHtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ3RvdWNoTW92ZU9wcG9zaXRlJywgZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGF0YS5zdGFydE1vdmluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKHRvdWNoZXMuY3VycmVudFggIT09IHRvdWNoZXMuc3RhcnRYIHx8IHRvdWNoZXMuY3VycmVudFkgIT09IHRvdWNoZXMuc3RhcnRZKSB7XG4gICAgICAgICAgICBkYXRhLnN0YXJ0TW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGF0YS5pc1Njcm9sbGluZykge1xuICAgICAgICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghZGF0YS5zdGFydE1vdmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXBlci5hbGxvd0NsaWNrID0gZmFsc2U7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChwYXJhbXMudG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uICYmICFwYXJhbXMubmVzdGVkKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGlmICghZGF0YS5pc01vdmVkKSB7XG4gICAgICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLnN0YXJ0VHJhbnNsYXRlID0gc3dpcGVyLmdldFRyYW5zbGF0ZSgpO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcbiAgICAgICAgaWYgKHN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsLnRyaWdnZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZCcpO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuYWxsb3dNb21lbnR1bUJvdW5jZSA9IGZhbHNlO1xuICAgICAgICAvLyBHcmFiIEN1cnNvclxuICAgICAgICBpZiAocGFyYW1zLmdyYWJDdXJzb3IgJiYgKHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9PT0gdHJ1ZSB8fCBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPT09IHRydWUpKSB7XG4gICAgICAgICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBzd2lwZXIuZW1pdCgnc2xpZGVyRmlyc3RNb3ZlJywgZSk7XG4gICAgfVxuICAgIHN3aXBlci5lbWl0KCdzbGlkZXJNb3ZlJywgZSk7XG4gICAgZGF0YS5pc01vdmVkID0gdHJ1ZTtcbiAgICB2YXIgZGlmZiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IGRpZmZYIDogZGlmZlk7XG4gICAgdG91Y2hlcy5kaWZmID0gZGlmZjtcbiAgICBkaWZmICo9IHBhcmFtcy50b3VjaFJhdGlvO1xuICAgIGlmIChydGwpXG4gICAgICAgIGRpZmYgPSAtZGlmZjtcbiAgICBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPSBkaWZmID4gMCA/ICdwcmV2JyA6ICduZXh0JztcbiAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkaWZmICsgZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgICB2YXIgZGlzYWJsZVBhcmVudFN3aXBlciA9IHRydWU7XG4gICAgdmFyIHJlc2lzdGFuY2VSYXRpbyA9IHBhcmFtcy5yZXNpc3RhbmNlUmF0aW87XG4gICAgaWYgKHBhcmFtcy50b3VjaFJlbGVhc2VPbkVkZ2VzKSB7XG4gICAgICAgIHJlc2lzdGFuY2VSYXRpbyA9IDA7XG4gICAgfVxuICAgIGlmICgoZGlmZiA+IDAgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlID4gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSkge1xuICAgICAgICBkaXNhYmxlUGFyZW50U3dpcGVyID0gZmFsc2U7XG4gICAgICAgIGlmIChwYXJhbXMucmVzaXN0YW5jZSlcbiAgICAgICAgICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IChzd2lwZXIubWluVHJhbnNsYXRlKCkgLSAxKSArIChNYXRoLnBvdygoLXN3aXBlci5taW5UcmFuc2xhdGUoKSArIGRhdGEuc3RhcnRUcmFuc2xhdGUgKyBkaWZmKSwgcmVzaXN0YW5jZVJhdGlvKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRpZmYgPCAwICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA8IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgICBkaXNhYmxlUGFyZW50U3dpcGVyID0gZmFsc2U7XG4gICAgICAgIGlmIChwYXJhbXMucmVzaXN0YW5jZSlcbiAgICAgICAgICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IChzd2lwZXIubWF4VHJhbnNsYXRlKCkgKyAxKSAtIChNYXRoLnBvdygoc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gZGF0YS5zdGFydFRyYW5zbGF0ZSAtIGRpZmYpLCByZXNpc3RhbmNlUmF0aW8pKTtcbiAgICB9XG4gICAgaWYgKGRpc2FibGVQYXJlbnRTd2lwZXIpIHtcbiAgICAgICAgZS5wcmV2ZW50ZWRCeU5lc3RlZFN3aXBlciA9IHRydWU7XG4gICAgfVxuICAgIC8vIERpcmVjdGlvbnMgbG9ja3NcbiAgICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlTmV4dCAmJiBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0JyAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPCBkYXRhLnN0YXJ0VHJhbnNsYXRlKSB7XG4gICAgICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gICAgfVxuICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVQcmV2ICYmIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ3ByZXYnICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA+IGRhdGEuc3RhcnRUcmFuc2xhdGUpIHtcbiAgICAgICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgICB9XG4gICAgLy8gVGhyZXNob2xkXG4gICAgaWYgKHBhcmFtcy50aHJlc2hvbGQgPiAwKSB7XG4gICAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IHBhcmFtcy50aHJlc2hvbGQgfHwgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUpIHtcbiAgICAgICAgICAgIGlmICghZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdG91Y2hlcy5zdGFydFggPSB0b3VjaGVzLmN1cnJlbnRYO1xuICAgICAgICAgICAgICAgIHRvdWNoZXMuc3RhcnRZID0gdG91Y2hlcy5jdXJyZW50WTtcbiAgICAgICAgICAgICAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICAgICAgICAgICAgICAgIHRvdWNoZXMuZGlmZiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHRvdWNoZXMuY3VycmVudFggLSB0b3VjaGVzLnN0YXJ0WCA6IHRvdWNoZXMuY3VycmVudFkgLSB0b3VjaGVzLnN0YXJ0WTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghcGFyYW1zLmZvbGxvd0ZpbmdlcilcbiAgICAgICAgcmV0dXJuO1xuICAgIC8vIFVwZGF0ZSBhY3RpdmUgaW5kZXggaW4gZnJlZSBtb2RlXG4gICAgaWYgKHBhcmFtcy5mcmVlTW9kZSB8fCBwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyB8fCBwYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KSB7XG4gICAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgICAgIC8vIFZlbG9jaXR5XG4gICAgICAgIGlmIChkYXRhLnZlbG9jaXRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkYXRhLnZlbG9jaXRpZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHRvdWNoZXNbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3N0YXJ0WCcgOiAnc3RhcnRZJ10sXG4gICAgICAgICAgICAgICAgdGltZTogZGF0YS50b3VjaFN0YXJ0VGltZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEudmVsb2NpdGllcy5wdXNoKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0b3VjaGVzW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdjdXJyZW50WCcgOiAnY3VycmVudFknXSxcbiAgICAgICAgICAgIHRpbWU6IFV0aWxzLm5vdygpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gVXBkYXRlIHByb2dyZXNzXG4gICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKGRhdGEuY3VycmVudFRyYW5zbGF0ZSk7XG4gICAgLy8gVXBkYXRlIHRyYW5zbGF0ZVxuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUoZGF0YS5jdXJyZW50VHJhbnNsYXRlKTtcbn1cbmZ1bmN0aW9uIG9uVG91Y2hFbmQoZXZlbnQpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsIHRvdWNoZXMgPSBzd2lwZXIudG91Y2hlcywgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSwgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLCBzbGlkZXNHcmlkID0gc3dpcGVyLnNsaWRlc0dyaWQsIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkO1xuICAgIHZhciBlID0gZXZlbnQ7XG4gICAgaWYgKGUub3JpZ2luYWxFdmVudClcbiAgICAgICAgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgICBpZiAoZGF0YS5hbGxvd1RvdWNoQ2FsbGJhY2tzKSB7XG4gICAgICAgIHN3aXBlci5lbWl0KCd0b3VjaEVuZCcsIGUpO1xuICAgIH1cbiAgICBkYXRhLmFsbG93VG91Y2hDYWxsYmFja3MgPSBmYWxzZTtcbiAgICBpZiAoIWRhdGEuaXNUb3VjaGVkKSB7XG4gICAgICAgIGlmIChkYXRhLmlzTW92ZWQgJiYgcGFyYW1zLmdyYWJDdXJzb3IpIHtcbiAgICAgICAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgZGF0YS5zdGFydE1vdmluZyA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFJldHVybiBHcmFiIEN1cnNvclxuICAgIGlmIChwYXJhbXMuZ3JhYkN1cnNvciAmJiBkYXRhLmlzTW92ZWQgJiYgZGF0YS5pc1RvdWNoZWQgJiYgKHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9PT0gdHJ1ZSB8fCBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPT09IHRydWUpKSB7XG4gICAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKGZhbHNlKTtcbiAgICB9XG4gICAgLy8gVGltZSBkaWZmXG4gICAgdmFyIHRvdWNoRW5kVGltZSA9IFV0aWxzLm5vdygpO1xuICAgIHZhciB0aW1lRGlmZiA9IHRvdWNoRW5kVGltZSAtIGRhdGEudG91Y2hTdGFydFRpbWU7XG4gICAgLy8gVGFwLCBkb3VibGVUYXAsIENsaWNrXG4gICAgaWYgKHN3aXBlci5hbGxvd0NsaWNrKSB7XG4gICAgICAgIHN3aXBlci51cGRhdGVDbGlja2VkU2xpZGUoZSk7XG4gICAgICAgIHN3aXBlci5lbWl0KCd0YXAnLCBlKTtcbiAgICAgICAgaWYgKHRpbWVEaWZmIDwgMzAwICYmICh0b3VjaEVuZFRpbWUgLSBkYXRhLmxhc3RDbGlja1RpbWUpID4gMzAwKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5jbGlja1RpbWVvdXQpXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGRhdGEuY2xpY2tUaW1lb3V0KTtcbiAgICAgICAgICAgIGRhdGEuY2xpY2tUaW1lb3V0ID0gVXRpbHMubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBzd2lwZXIuZW1pdCgnY2xpY2snLCBlKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbWVEaWZmIDwgMzAwICYmICh0b3VjaEVuZFRpbWUgLSBkYXRhLmxhc3RDbGlja1RpbWUpIDwgMzAwKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5jbGlja1RpbWVvdXQpXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGRhdGEuY2xpY2tUaW1lb3V0KTtcbiAgICAgICAgICAgIHN3aXBlci5lbWl0KCdkb3VibGVUYXAnLCBlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkYXRhLmxhc3RDbGlja1RpbWUgPSBVdGlscy5ub3coKTtcbiAgICBVdGlscy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghc3dpcGVyLmRlc3Ryb3llZClcbiAgICAgICAgICAgIHN3aXBlci5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBpZiAoIWRhdGEuaXNUb3VjaGVkIHx8ICFkYXRhLmlzTW92ZWQgfHwgIXN3aXBlci5zd2lwZURpcmVjdGlvbiB8fCB0b3VjaGVzLmRpZmYgPT09IDAgfHwgZGF0YS5jdXJyZW50VHJhbnNsYXRlID09PSBkYXRhLnN0YXJ0VHJhbnNsYXRlKSB7XG4gICAgICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgIGRhdGEuaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICBkYXRhLnN0YXJ0TW92aW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICBkYXRhLnN0YXJ0TW92aW5nID0gZmFsc2U7XG4gICAgdmFyIGN1cnJlbnRQb3M7XG4gICAgaWYgKHBhcmFtcy5mb2xsb3dGaW5nZXIpIHtcbiAgICAgICAgY3VycmVudFBvcyA9IHJ0bCA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGN1cnJlbnRQb3MgPSAtZGF0YS5jdXJyZW50VHJhbnNsYXRlO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgICAgIGlmIChjdXJyZW50UG9zIDwgLXN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudFBvcyA+IC1zd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgICAgICAgIGlmIChzd2lwZXIuc2xpZGVzLmxlbmd0aCA8IHNuYXBHcmlkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHN3aXBlci5zbGlkZVRvKHNuYXBHcmlkLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLmZyZWVNb2RlTW9tZW50dW0pIHtcbiAgICAgICAgICAgIGlmIChkYXRhLnZlbG9jaXRpZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHZhciBsYXN0TW92ZUV2ZW50ID0gZGF0YS52ZWxvY2l0aWVzLnBvcCgpO1xuICAgICAgICAgICAgICAgIHZhciB2ZWxvY2l0eUV2ZW50ID0gZGF0YS52ZWxvY2l0aWVzLnBvcCgpO1xuICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IGxhc3RNb3ZlRXZlbnQucG9zaXRpb24gLSB2ZWxvY2l0eUV2ZW50LnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHZhciB0aW1lID0gbGFzdE1vdmVFdmVudC50aW1lIC0gdmVsb2NpdHlFdmVudC50aW1lO1xuICAgICAgICAgICAgICAgIHN3aXBlci52ZWxvY2l0eSA9IGRpc3RhbmNlIC8gdGltZTtcbiAgICAgICAgICAgICAgICBzd2lwZXIudmVsb2NpdHkgLz0gMjtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoc3dpcGVyLnZlbG9jaXR5KSA8IHBhcmFtcy5mcmVlTW9kZU1pbmltdW1WZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZXIudmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB0aGlzIGltcGxpZXMgdGhhdCB0aGUgdXNlciBzdG9wcGVkIG1vdmluZyBhIGZpbmdlciB0aGVuIHJlbGVhc2VkLlxuICAgICAgICAgICAgICAgIC8vIFRoZXJlIHdvdWxkIGJlIG5vIGV2ZW50cyB3aXRoIGRpc3RhbmNlIHplcm8sIHNvIHRoZSBsYXN0IGV2ZW50IGlzIHN0YWxlLlxuICAgICAgICAgICAgICAgIGlmICh0aW1lID4gMTUwIHx8IChVdGlscy5ub3coKSAtIGxhc3RNb3ZlRXZlbnQudGltZSkgPiAzMDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2lwZXIudmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpcGVyLnZlbG9jaXR5ICo9IHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtVmVsb2NpdHlSYXRpbztcbiAgICAgICAgICAgIGRhdGEudmVsb2NpdGllcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgdmFyIG1vbWVudHVtRHVyYXRpb24gPSAxMDAwICogcGFyYW1zLmZyZWVNb2RlTW9tZW50dW1SYXRpbztcbiAgICAgICAgICAgIHZhciBtb21lbnR1bURpc3RhbmNlID0gc3dpcGVyLnZlbG9jaXR5ICogbW9tZW50dW1EdXJhdGlvbjtcbiAgICAgICAgICAgIHZhciBuZXdQb3NpdGlvbiA9IHN3aXBlci50cmFuc2xhdGUgKyBtb21lbnR1bURpc3RhbmNlO1xuICAgICAgICAgICAgaWYgKHJ0bClcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IC1uZXdQb3NpdGlvbjtcbiAgICAgICAgICAgIHZhciBkb0JvdW5jZSA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGFmdGVyQm91bmNlUG9zaXRpb25fMTtcbiAgICAgICAgICAgIHZhciBib3VuY2VBbW91bnQgPSBNYXRoLmFicyhzd2lwZXIudmVsb2NpdHkpICogMjAgKiBwYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZVJhdGlvO1xuICAgICAgICAgICAgdmFyIG5lZWRzTG9vcEZpeCA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbiA8IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3UG9zaXRpb24gKyBzd2lwZXIubWF4VHJhbnNsYXRlKCkgPCAtYm91bmNlQW1vdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIGJvdW5jZUFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhZnRlckJvdW5jZVBvc2l0aW9uXzEgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGRvQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hbGxvd01vbWVudHVtQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmxvb3AgJiYgcGFyYW1zLmNlbnRlcmVkU2xpZGVzKVxuICAgICAgICAgICAgICAgICAgICBuZWVkc0xvb3BGaXggPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobmV3UG9zaXRpb24gPiBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpID4gYm91bmNlQW1vdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKSArIGJvdW5jZUFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhZnRlckJvdW5jZVBvc2l0aW9uXzEgPSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGRvQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hbGxvd01vbWVudHVtQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmxvb3AgJiYgcGFyYW1zLmNlbnRlcmVkU2xpZGVzKVxuICAgICAgICAgICAgICAgICAgICBuZWVkc0xvb3BGaXggPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgdmFyIG5leHRTbGlkZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNuYXBHcmlkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzbmFwR3JpZFtqXSA+IC1uZXdQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gajtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhzbmFwR3JpZFtuZXh0U2xpZGVdIC0gbmV3UG9zaXRpb24pIDwgTWF0aC5hYnMoc25hcEdyaWRbbmV4dFNsaWRlIC0gMV0gLSBuZXdQb3NpdGlvbikgfHwgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzbmFwR3JpZFtuZXh0U2xpZGVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzbmFwR3JpZFtuZXh0U2xpZGUgLSAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSAtbmV3UG9zaXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmVlZHNMb29wRml4KSB7XG4gICAgICAgICAgICAgICAgc3dpcGVyLm9uY2UoJ3RyYW5zaXRpb25FbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaXggZHVyYXRpb25cbiAgICAgICAgICAgIGlmIChzd2lwZXIudmVsb2NpdHkgIT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocnRsKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vbWVudHVtRHVyYXRpb24gPSBNYXRoLmFicygoLW5ld1Bvc2l0aW9uIC0gc3dpcGVyLnRyYW5zbGF0ZSkgLyBzd2lwZXIudmVsb2NpdHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGguYWJzKChuZXdQb3NpdGlvbiAtIHN3aXBlci50cmFuc2xhdGUpIC8gc3dpcGVyLnZlbG9jaXR5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVUb0Nsb3Nlc3QoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2UgJiYgZG9Cb3VuY2UpIHtcbiAgICAgICAgICAgICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoYWZ0ZXJCb3VuY2VQb3NpdGlvbl8xKTtcbiAgICAgICAgICAgICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihtb21lbnR1bUR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHRydWUsIHN3aXBlci5zd2lwZURpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgc3dpcGVyLmFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgJHdyYXBwZXJFbC50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhZGF0YS5hbGxvd01vbWVudHVtQm91bmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBzd2lwZXIuZW1pdCgnbW9tZW50dW1Cb3VuY2UnKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24ocGFyYW1zLnNwZWVkKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShhZnRlckJvdW5jZVBvc2l0aW9uXzEpO1xuICAgICAgICAgICAgICAgICAgICAkd3JhcHBlckVsLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN3aXBlci52ZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhuZXdQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24obW9tZW50dW1EdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydCh0cnVlLCBzd2lwZXIuc3dpcGVEaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgIGlmICghc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgJHdyYXBwZXJFbC50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgICAgICAgIHN3aXBlci5zbGlkZVRvQ2xvc2VzdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcGFyYW1zLmZyZWVNb2RlTW9tZW50dW0gfHwgdGltZURpZmYgPj0gcGFyYW1zLmxvbmdTd2lwZXNNcykge1xuICAgICAgICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICAgICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBGaW5kIGN1cnJlbnQgc2xpZGVcbiAgICB2YXIgc3RvcEluZGV4ID0gMDtcbiAgICB2YXIgZ3JvdXBTaXplID0gc3dpcGVyLnNsaWRlc1NpemVzR3JpZFswXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlc0dyaWQubGVuZ3RoOyBpICs9IHBhcmFtcy5zbGlkZXNQZXJHcm91cCkge1xuICAgICAgICBpZiAodHlwZW9mIHNsaWRlc0dyaWRbaSArIHBhcmFtcy5zbGlkZXNQZXJHcm91cF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFBvcyA+PSBzbGlkZXNHcmlkW2ldICYmIGN1cnJlbnRQb3MgPCBzbGlkZXNHcmlkW2kgKyBwYXJhbXMuc2xpZGVzUGVyR3JvdXBdKSB7XG4gICAgICAgICAgICAgICAgc3RvcEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICBncm91cFNpemUgPSBzbGlkZXNHcmlkW2kgKyBwYXJhbXMuc2xpZGVzUGVyR3JvdXBdIC0gc2xpZGVzR3JpZFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjdXJyZW50UG9zID49IHNsaWRlc0dyaWRbaV0pIHtcbiAgICAgICAgICAgIHN0b3BJbmRleCA9IGk7XG4gICAgICAgICAgICBncm91cFNpemUgPSBzbGlkZXNHcmlkW3NsaWRlc0dyaWQubGVuZ3RoIC0gMV0gLSBzbGlkZXNHcmlkW3NsaWRlc0dyaWQubGVuZ3RoIC0gMl07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRmluZCBjdXJyZW50IHNsaWRlIHNpemVcbiAgICB2YXIgcmF0aW8gPSAoY3VycmVudFBvcyAtIHNsaWRlc0dyaWRbc3RvcEluZGV4XSkgLyBncm91cFNpemU7XG4gICAgaWYgKHRpbWVEaWZmID4gcGFyYW1zLmxvbmdTd2lwZXNNcykge1xuICAgICAgICAvLyBMb25nIHRvdWNoZXNcbiAgICAgICAgaWYgKCFwYXJhbXMubG9uZ1N3aXBlcykge1xuICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgICAgIGlmIChyYXRpbyA+PSBwYXJhbXMubG9uZ1N3aXBlc1JhdGlvKVxuICAgICAgICAgICAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIHBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgICAgICAgIGlmIChyYXRpbyA+ICgxIC0gcGFyYW1zLmxvbmdTd2lwZXNSYXRpbykpXG4gICAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4ICsgcGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBTaG9ydCBzd2lwZXNcbiAgICAgICAgaWYgKCFwYXJhbXMuc2hvcnRTd2lwZXMpIHtcbiAgICAgICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXggKyBwYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIG9uUmVzaXplKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLCBlbCA9IHN3aXBlci5lbDtcbiAgICBpZiAoZWwgJiYgZWwub2Zmc2V0V2lkdGggPT09IDApXG4gICAgICAgIHJldHVybjtcbiAgICAvLyBCcmVha3BvaW50c1xuICAgIGlmIChwYXJhbXMuYnJlYWtwb2ludHMpIHtcbiAgICAgICAgc3dpcGVyLnNldEJyZWFrcG9pbnQoKTtcbiAgICB9XG4gICAgLy8gU2F2ZSBsb2Nrc1xuICAgIHZhciBhbGxvd1NsaWRlTmV4dCA9IHN3aXBlci5hbGxvd1NsaWRlTmV4dCwgYWxsb3dTbGlkZVByZXYgPSBzd2lwZXIuYWxsb3dTbGlkZVByZXYsIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkO1xuICAgIC8vIERpc2FibGUgbG9ja3Mgb24gcmVzaXplXG4gICAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gdHJ1ZTtcbiAgICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSB0cnVlO1xuICAgIHN3aXBlci51cGRhdGVTaXplKCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgIGlmIChwYXJhbXMuZnJlZU1vZGUpIHtcbiAgICAgICAgdmFyIG5ld1RyYW5zbGF0ZSA9IE1hdGgubWluKE1hdGgubWF4KHN3aXBlci50cmFuc2xhdGUsIHN3aXBlci5tYXhUcmFuc2xhdGUoKSksIHN3aXBlci5taW5UcmFuc2xhdGUoKSk7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgICAgIGlmIChwYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgICAgICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICAgICAgaWYgKChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nIHx8IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkgJiYgc3dpcGVyLmlzRW5kICYmICFzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzd2lwZXIuYXV0b3BsYXkgJiYgc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcgJiYgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCkge1xuICAgICAgICBzd2lwZXIuYXV0b3BsYXkucnVuKCk7XG4gICAgfVxuICAgIC8vIFJldHVybiBsb2NrcyBhZnRlciByZXNpemVcbiAgICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSBhbGxvd1NsaWRlUHJldjtcbiAgICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSBhbGxvd1NsaWRlTmV4dDtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHNuYXBHcmlkICE9PSBzd2lwZXIuc25hcEdyaWQpIHtcbiAgICAgICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICB9XG59XG5mdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5hbGxvd0NsaWNrKSB7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLnByZXZlbnRDbGlja3MpXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbiAmJiBzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGF0dGFjaEV2ZW50cygpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcywgdG91Y2hFdmVudHMgPSBzd2lwZXIudG91Y2hFdmVudHMsIGVsID0gc3dpcGVyLmVsLCB3cmFwcGVyRWwgPSBzd2lwZXIud3JhcHBlckVsO1xuICAgIHtcbiAgICAgICAgc3dpcGVyLm9uVG91Y2hTdGFydCA9IG9uVG91Y2hTdGFydC5iaW5kKHN3aXBlcik7XG4gICAgICAgIHN3aXBlci5vblRvdWNoTW92ZSA9IG9uVG91Y2hNb3ZlLmJpbmQoc3dpcGVyKTtcbiAgICAgICAgc3dpcGVyLm9uVG91Y2hFbmQgPSBvblRvdWNoRW5kLmJpbmQoc3dpcGVyKTtcbiAgICB9XG4gICAgc3dpcGVyLm9uQ2xpY2sgPSBvbkNsaWNrLmJpbmQoc3dpcGVyKTtcbiAgICB2YXIgdGFyZ2V0ID0gcGFyYW1zLnRvdWNoRXZlbnRzVGFyZ2V0ID09PSAnY29udGFpbmVyJyA/IGVsIDogd3JhcHBlckVsO1xuICAgIHZhciBjYXB0dXJlID0gISFwYXJhbXMubmVzdGVkO1xuICAgIC8vIFRvdWNoIEV2ZW50c1xuICAgIHtcbiAgICAgICAgaWYgKCFTdXBwb3J0LnRvdWNoICYmIChTdXBwb3J0LnBvaW50ZXJFdmVudHMgfHwgU3VwcG9ydC5wcmVmaXhlZFBvaW50ZXJFdmVudHMpKSB7XG4gICAgICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgc3dpcGVyLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgc3dpcGVyLm9uVG91Y2hNb3ZlLCBjYXB0dXJlKTtcbiAgICAgICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgc3dpcGVyLm9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChTdXBwb3J0LnRvdWNoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhc3NpdmVMaXN0ZW5lciA9IHRvdWNoRXZlbnRzLnN0YXJ0ID09PSAndG91Y2hzdGFydCcgJiYgU3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgcGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7IHBhc3NpdmU6IHRydWUsIGNhcHR1cmU6IGZhbHNlIH0gOiBmYWxzZTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgc3dpcGVyLm9uVG91Y2hTdGFydCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBzd2lwZXIub25Ub3VjaE1vdmUsIFN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyID8geyBwYXNzaXZlOiBmYWxzZSwgY2FwdHVyZTogY2FwdHVyZSB9IDogY2FwdHVyZSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBzd2lwZXIub25Ub3VjaEVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgocGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgIURldmljZS5pb3MgJiYgIURldmljZS5hbmRyb2lkKSB8fCAocGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgIVN1cHBvcnQudG91Y2ggJiYgRGV2aWNlLmlvcykpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc3dpcGVyLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBzd2lwZXIub25Ub3VjaE1vdmUsIGNhcHR1cmUpO1xuICAgICAgICAgICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3dpcGVyLm9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBQcmV2ZW50IExpbmtzIENsaWNrc1xuICAgICAgICBpZiAocGFyYW1zLnByZXZlbnRDbGlja3MgfHwgcGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpcGVyLm9uQ2xpY2ssIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFJlc2l6ZSBoYW5kbGVyXG4gICAgc3dpcGVyLm9uKChEZXZpY2UuaW9zIHx8IERldmljZS5hbmRyb2lkID8gJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBvYnNlcnZlclVwZGF0ZScgOiAncmVzaXplIG9ic2VydmVyVXBkYXRlJyksIG9uUmVzaXplLCB0cnVlKTtcbn1cbmZ1bmN0aW9uIGRldGFjaEV2ZW50cygpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcywgdG91Y2hFdmVudHMgPSBzd2lwZXIudG91Y2hFdmVudHMsIGVsID0gc3dpcGVyLmVsLCB3cmFwcGVyRWwgPSBzd2lwZXIud3JhcHBlckVsO1xuICAgIHZhciB0YXJnZXQgPSBwYXJhbXMudG91Y2hFdmVudHNUYXJnZXQgPT09ICdjb250YWluZXInID8gZWwgOiB3cmFwcGVyRWw7XG4gICAgdmFyIGNhcHR1cmUgPSAhIXBhcmFtcy5uZXN0ZWQ7XG4gICAgLy8gVG91Y2ggRXZlbnRzXG4gICAge1xuICAgICAgICBpZiAoIVN1cHBvcnQudG91Y2ggJiYgKFN1cHBvcnQucG9pbnRlckV2ZW50cyB8fCBTdXBwb3J0LnByZWZpeGVkUG9pbnRlckV2ZW50cykpIHtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICAgICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBzd2lwZXIub25Ub3VjaE1vdmUsIGNhcHR1cmUpO1xuICAgICAgICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBzd2lwZXIub25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKFN1cHBvcnQudG91Y2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFzc2l2ZUxpc3RlbmVyID0gdG91Y2hFdmVudHMuc3RhcnQgPT09ICdvblRvdWNoU3RhcnQnICYmIFN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8geyBwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiBmYWxzZSB9IDogZmFsc2U7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHN3aXBlci5vblRvdWNoU3RhcnQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgc3dpcGVyLm9uVG91Y2hNb3ZlLCBjYXB0dXJlKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHN3aXBlci5vblRvdWNoRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiAhRGV2aWNlLmlvcyAmJiAhRGV2aWNlLmFuZHJvaWQpIHx8IChwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiAhU3VwcG9ydC50b3VjaCAmJiBEZXZpY2UuaW9zKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHN3aXBlci5vblRvdWNoTW92ZSwgY2FwdHVyZSk7XG4gICAgICAgICAgICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzd2lwZXIub25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFByZXZlbnQgTGlua3MgQ2xpY2tzXG4gICAgICAgIGlmIChwYXJhbXMucHJldmVudENsaWNrcyB8fCBwYXJhbXMucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2lwZXIub25DbGljaywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVzaXplIGhhbmRsZXJcbiAgICBzd2lwZXIub2ZmKChEZXZpY2UuaW9zIHx8IERldmljZS5hbmRyb2lkID8gJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBvYnNlcnZlclVwZGF0ZScgOiAncmVzaXplIG9ic2VydmVyVXBkYXRlJyksIG9uUmVzaXplKTtcbn1cbnZhciBldmVudHMgPSB7XG4gICAgYXR0YWNoRXZlbnRzOiBhdHRhY2hFdmVudHMsXG4gICAgZGV0YWNoRXZlbnRzOiBkZXRhY2hFdmVudHMsXG59O1xuZnVuY3Rpb24gc2V0QnJlYWtwb2ludCgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXgsIGluaXRpYWxpemVkID0gc3dpcGVyLmluaXRpYWxpemVkLCBfYSA9IHN3aXBlci5sb29wZWRTbGlkZXMsIGxvb3BlZFNsaWRlcyA9IF9hID09PSB2b2lkIDAgPyAwIDogX2EsIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gICAgdmFyIGJyZWFrcG9pbnRzID0gcGFyYW1zLmJyZWFrcG9pbnRzO1xuICAgIGlmICghYnJlYWtwb2ludHMgfHwgKGJyZWFrcG9pbnRzICYmIE9iamVjdC5rZXlzKGJyZWFrcG9pbnRzKS5sZW5ndGggPT09IDApKVxuICAgICAgICByZXR1cm47XG4gICAgLy8gU2V0IGJyZWFrcG9pbnQgZm9yIHdpbmRvdyB3aWR0aCBhbmQgdXBkYXRlIHBhcmFtZXRlcnNcbiAgICB2YXIgYnJlYWtwb2ludCA9IHN3aXBlci5nZXRCcmVha3BvaW50KGJyZWFrcG9pbnRzKTtcbiAgICBpZiAoYnJlYWtwb2ludCAmJiBzd2lwZXIuY3VycmVudEJyZWFrcG9pbnQgIT09IGJyZWFrcG9pbnQpIHtcbiAgICAgICAgdmFyIGJyZWFrcG9pbnRPbmx5UGFyYW1zXzEgPSBicmVha3BvaW50IGluIGJyZWFrcG9pbnRzID8gYnJlYWtwb2ludHNbYnJlYWtwb2ludF0gOiB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChicmVha3BvaW50T25seVBhcmFtc18xKSB7XG4gICAgICAgICAgICBbJ3NsaWRlc1BlclZpZXcnLCAnc3BhY2VCZXR3ZWVuJywgJ3NsaWRlc1Blckdyb3VwJ10uZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1WYWx1ZSA9IGJyZWFrcG9pbnRPbmx5UGFyYW1zXzFbcGFyYW1dO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1WYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW0gPT09ICdzbGlkZXNQZXJWaWV3JyAmJiAocGFyYW1WYWx1ZSA9PT0gJ0FVVE8nIHx8IHBhcmFtVmFsdWUgPT09ICdhdXRvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludE9ubHlQYXJhbXNfMVtwYXJhbV0gPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmFtID09PSAnc2xpZGVzUGVyVmlldycpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludE9ubHlQYXJhbXNfMVtwYXJhbV0gPSBwYXJzZUZsb2F0KHBhcmFtVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludE9ubHlQYXJhbXNfMVtwYXJhbV0gPSBwYXJzZUludChwYXJhbVZhbHVlLCAxMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJyZWFrcG9pbnRQYXJhbXMgPSBicmVha3BvaW50T25seVBhcmFtc18xIHx8IHN3aXBlci5vcmlnaW5hbFBhcmFtcztcbiAgICAgICAgdmFyIGRpcmVjdGlvbkNoYW5nZWQgPSBicmVha3BvaW50UGFyYW1zLmRpcmVjdGlvbiAmJiBicmVha3BvaW50UGFyYW1zLmRpcmVjdGlvbiAhPT0gcGFyYW1zLmRpcmVjdGlvbjtcbiAgICAgICAgdmFyIG5lZWRzUmVMb29wID0gcGFyYW1zLmxvb3AgJiYgKGJyZWFrcG9pbnRQYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gcGFyYW1zLnNsaWRlc1BlclZpZXcgfHwgZGlyZWN0aW9uQ2hhbmdlZCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb25DaGFuZ2VkICYmIGluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICBzd2lwZXIuY2hhbmdlRGlyZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlci5wYXJhbXMsIGJyZWFrcG9pbnRQYXJhbXMpO1xuICAgICAgICBVdGlscy5leHRlbmQoc3dpcGVyLCB7XG4gICAgICAgICAgICBhbGxvd1RvdWNoTW92ZTogc3dpcGVyLnBhcmFtcy5hbGxvd1RvdWNoTW92ZSxcbiAgICAgICAgICAgIGFsbG93U2xpZGVOZXh0OiBzd2lwZXIucGFyYW1zLmFsbG93U2xpZGVOZXh0LFxuICAgICAgICAgICAgYWxsb3dTbGlkZVByZXY6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZVByZXYsXG4gICAgICAgIH0pO1xuICAgICAgICBzd2lwZXIuY3VycmVudEJyZWFrcG9pbnQgPSBicmVha3BvaW50O1xuICAgICAgICBpZiAobmVlZHNSZUxvb3AgJiYgaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgICAgICAgICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgICAgICAgICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICAgICAgICAgIHN3aXBlci5zbGlkZVRvKChhY3RpdmVJbmRleCAtIGxvb3BlZFNsaWRlcykgKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpcGVyLmVtaXQoJ2JyZWFrcG9pbnQnLCBicmVha3BvaW50UGFyYW1zKTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRCcmVha3BvaW50KGJyZWFrcG9pbnRzKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgLy8gR2V0IGJyZWFrcG9pbnQgZm9yIHdpbmRvdyB3aWR0aFxuICAgIGlmICghYnJlYWtwb2ludHMpXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgdmFyIGJyZWFrcG9pbnQgPSBmYWxzZTtcbiAgICB2YXIgcG9pbnRzID0gW107XG4gICAgT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLmZvckVhY2goZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgIHBvaW50cy5wdXNoKHBvaW50KTtcbiAgICB9KTtcbiAgICBwb2ludHMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gcGFyc2VJbnQoYSwgMTApIC0gcGFyc2VJbnQoYiwgMTApOyB9KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgcG9pbnQgPSBwb2ludHNbaV07XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmJyZWFrcG9pbnRzSW52ZXJzZSkge1xuICAgICAgICAgICAgaWYgKHBvaW50IDw9IHdpbi5pbm5lcldpZHRoKSB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludCA9IHBvaW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBvaW50ID49IHdpbi5pbm5lcldpZHRoICYmICFicmVha3BvaW50KSB7XG4gICAgICAgICAgICBicmVha3BvaW50ID0gcG9pbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJyZWFrcG9pbnQgfHwgJ21heCc7XG59XG52YXIgYnJlYWtwb2ludHMgPSB7IHNldEJyZWFrcG9pbnQ6IHNldEJyZWFrcG9pbnQsIGdldEJyZWFrcG9pbnQ6IGdldEJyZWFrcG9pbnQgfTtcbmZ1bmN0aW9uIGFkZENsYXNzZXMoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIGNsYXNzTmFtZXMgPSBzd2lwZXIuY2xhc3NOYW1lcywgcGFyYW1zID0gc3dpcGVyLnBhcmFtcywgcnRsID0gc3dpcGVyLnJ0bCwgJGVsID0gc3dpcGVyLiRlbDtcbiAgICB2YXIgc3VmZml4ZXMgPSBbXTtcbiAgICBzdWZmaXhlcy5wdXNoKCdpbml0aWFsaXplZCcpO1xuICAgIHN1ZmZpeGVzLnB1c2gocGFyYW1zLmRpcmVjdGlvbik7XG4gICAgaWYgKHBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgICBzdWZmaXhlcy5wdXNoKCdmcmVlLW1vZGUnKTtcbiAgICB9XG4gICAgaWYgKCFTdXBwb3J0LmZsZXhib3gpIHtcbiAgICAgICAgc3VmZml4ZXMucHVzaCgnbm8tZmxleGJveCcpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgc3VmZml4ZXMucHVzaCgnYXV0b2hlaWdodCcpO1xuICAgIH1cbiAgICBpZiAocnRsKSB7XG4gICAgICAgIHN1ZmZpeGVzLnB1c2goJ3J0bCcpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcbiAgICAgICAgc3VmZml4ZXMucHVzaCgnbXVsdGlyb3cnKTtcbiAgICB9XG4gICAgaWYgKERldmljZS5hbmRyb2lkKSB7XG4gICAgICAgIHN1ZmZpeGVzLnB1c2goJ2FuZHJvaWQnKTtcbiAgICB9XG4gICAgaWYgKERldmljZS5pb3MpIHtcbiAgICAgICAgc3VmZml4ZXMucHVzaCgnaW9zJyk7XG4gICAgfVxuICAgIC8vIFdQOCBUb3VjaCBFdmVudHMgRml4XG4gICAgaWYgKChCcm93c2VyLmlzSUUgfHwgQnJvd3Nlci5pc0VkZ2UpICYmIChTdXBwb3J0LnBvaW50ZXJFdmVudHMgfHwgU3VwcG9ydC5wcmVmaXhlZFBvaW50ZXJFdmVudHMpKSB7XG4gICAgICAgIHN1ZmZpeGVzLnB1c2goXCJ3cDgtXCIgKyBwYXJhbXMuZGlyZWN0aW9uKTtcbiAgICB9XG4gICAgc3VmZml4ZXMuZm9yRWFjaChmdW5jdGlvbiAoc3VmZml4KSB7XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIHN1ZmZpeCk7XG4gICAgfSk7XG4gICAgJGVsLmFkZENsYXNzKGNsYXNzTmFtZXMuam9pbignICcpKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyICRlbCA9IHN3aXBlci4kZWwsIGNsYXNzTmFtZXMgPSBzd2lwZXIuY2xhc3NOYW1lcztcbiAgICAkZWwucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lcy5qb2luKCcgJykpO1xufVxudmFyIGNsYXNzZXMgPSB7IGFkZENsYXNzZXM6IGFkZENsYXNzZXMsIHJlbW92ZUNsYXNzZXM6IHJlbW92ZUNsYXNzZXMgfTtcbmZ1bmN0aW9uIGxvYWRJbWFnZShpbWFnZUVsLCBzcmMsIHNyY3NldCwgc2l6ZXMsIGNoZWNrRm9yQ29tcGxldGUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGltYWdlO1xuICAgIGZ1bmN0aW9uIG9uUmVhZHkoKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIGlmICghaW1hZ2VFbC5jb21wbGV0ZSB8fCAhY2hlY2tGb3JDb21wbGV0ZSkge1xuICAgICAgICBpZiAoc3JjKSB7XG4gICAgICAgICAgICBpbWFnZSA9IG5ldyB3aW4uSW1hZ2UoKTtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IG9uUmVhZHk7XG4gICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gb25SZWFkeTtcbiAgICAgICAgICAgIGlmIChzaXplcykge1xuICAgICAgICAgICAgICAgIGltYWdlLnNpemVzID0gc2l6ZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3Jjc2V0KSB7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3Jjc2V0ID0gc3Jjc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9uUmVhZHkoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gaW1hZ2UgYWxyZWFkeSBsb2FkZWQuLi5cbiAgICAgICAgb25SZWFkeSgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZXMoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgc3dpcGVyLmltYWdlc1RvTG9hZCA9IHN3aXBlci4kZWwuZmluZCgnaW1nJyk7XG4gICAgZnVuY3Rpb24gb25SZWFkeSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzd2lwZXIgPT09ICd1bmRlZmluZWQnIHx8IHN3aXBlciA9PT0gbnVsbCB8fCAhc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChzd2lwZXIuaW1hZ2VzTG9hZGVkICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBzd2lwZXIuaW1hZ2VzTG9hZGVkICs9IDE7XG4gICAgICAgIGlmIChzd2lwZXIuaW1hZ2VzTG9hZGVkID09PSBzd2lwZXIuaW1hZ2VzVG9Mb2FkLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMudXBkYXRlT25JbWFnZXNSZWFkeSlcbiAgICAgICAgICAgICAgICBzd2lwZXIudXBkYXRlKCk7XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgnaW1hZ2VzUmVhZHknKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN3aXBlci5pbWFnZXNUb0xvYWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGltYWdlRWwgPSBzd2lwZXIuaW1hZ2VzVG9Mb2FkW2ldO1xuICAgICAgICBzd2lwZXIubG9hZEltYWdlKGltYWdlRWwsIGltYWdlRWwuY3VycmVudFNyYyB8fCBpbWFnZUVsLmdldEF0dHJpYnV0ZSgnc3JjJyksIGltYWdlRWwuc3Jjc2V0IHx8IGltYWdlRWwuZ2V0QXR0cmlidXRlKCdzcmNzZXQnKSwgaW1hZ2VFbC5zaXplcyB8fCBpbWFnZUVsLmdldEF0dHJpYnV0ZSgnc2l6ZXMnKSwgdHJ1ZSwgb25SZWFkeSk7XG4gICAgfVxufVxudmFyIGltYWdlcyA9IHtcbiAgICBsb2FkSW1hZ2U6IGxvYWRJbWFnZSxcbiAgICBwcmVsb2FkSW1hZ2VzOiBwcmVsb2FkSW1hZ2VzLFxufTtcbmZ1bmN0aW9uIGNoZWNrT3ZlcmZsb3coKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHdhc0xvY2tlZCA9IHN3aXBlci5pc0xvY2tlZDtcbiAgICBzd2lwZXIuaXNMb2NrZWQgPSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoID09PSAxO1xuICAgIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9ICFzd2lwZXIuaXNMb2NrZWQ7XG4gICAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gIXN3aXBlci5pc0xvY2tlZDtcbiAgICAvLyBldmVudHNcbiAgICBpZiAod2FzTG9ja2VkICE9PSBzd2lwZXIuaXNMb2NrZWQpXG4gICAgICAgIHN3aXBlci5lbWl0KHN3aXBlci5pc0xvY2tlZCA/ICdsb2NrJyA6ICd1bmxvY2snKTtcbiAgICBpZiAod2FzTG9ja2VkICYmIHdhc0xvY2tlZCAhPT0gc3dpcGVyLmlzTG9ja2VkKSB7XG4gICAgICAgIHN3aXBlci5pc0VuZCA9IGZhbHNlO1xuICAgICAgICBzd2lwZXIubmF2aWdhdGlvbi51cGRhdGUoKTtcbiAgICB9XG59XG52YXIgY2hlY2tPdmVyZmxvdyQxID0geyBjaGVja092ZXJmbG93OiBjaGVja092ZXJmbG93IH07XG52YXIgZGVmYXVsdHMgPSB7XG4gICAgaW5pdDogdHJ1ZSxcbiAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICB0b3VjaEV2ZW50c1RhcmdldDogJ2NvbnRhaW5lcicsXG4gICAgaW5pdGlhbFNsaWRlOiAwLFxuICAgIHNwZWVkOiAzMDAsXG4gICAgLy9cbiAgICBwcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb246IGZhbHNlLFxuICAgIC8vIFRvIHN1cHBvcnQgaU9TJ3Mgc3dpcGUtdG8tZ28tYmFjayBnZXN0dXJlICh3aGVuIGJlaW5nIHVzZWQgaW4tYXBwLCB3aXRoIFVJV2ViVmlldykuXG4gICAgZWRnZVN3aXBlRGV0ZWN0aW9uOiBmYWxzZSxcbiAgICBlZGdlU3dpcGVUaHJlc2hvbGQ6IDIwLFxuICAgIC8vIEZyZWUgbW9kZVxuICAgIGZyZWVNb2RlOiBmYWxzZSxcbiAgICBmcmVlTW9kZU1vbWVudHVtOiB0cnVlLFxuICAgIGZyZWVNb2RlTW9tZW50dW1SYXRpbzogMSxcbiAgICBmcmVlTW9kZU1vbWVudHVtQm91bmNlOiB0cnVlLFxuICAgIGZyZWVNb2RlTW9tZW50dW1Cb3VuY2VSYXRpbzogMSxcbiAgICBmcmVlTW9kZU1vbWVudHVtVmVsb2NpdHlSYXRpbzogMSxcbiAgICBmcmVlTW9kZVN0aWNreTogZmFsc2UsXG4gICAgZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHk6IDAuMDIsXG4gICAgLy8gQXV0b2hlaWdodFxuICAgIGF1dG9IZWlnaHQ6IGZhbHNlLFxuICAgIC8vIFNldCB3cmFwcGVyIHdpZHRoXG4gICAgc2V0V3JhcHBlclNpemU6IGZhbHNlLFxuICAgIC8vIFZpcnR1YWwgVHJhbnNsYXRlXG4gICAgdmlydHVhbFRyYW5zbGF0ZTogZmFsc2UsXG4gICAgLy8gRWZmZWN0c1xuICAgIGVmZmVjdDogJ3NsaWRlJyxcbiAgICAvLyBCcmVha3BvaW50c1xuICAgIGJyZWFrcG9pbnRzOiB1bmRlZmluZWQsXG4gICAgYnJlYWtwb2ludHNJbnZlcnNlOiBmYWxzZSxcbiAgICAvLyBTbGlkZXMgZ3JpZFxuICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNsaWRlc1BlckNvbHVtbjogMSxcbiAgICBzbGlkZXNQZXJDb2x1bW5GaWxsOiAnY29sdW1uJyxcbiAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAwLFxuICAgIHNsaWRlc09mZnNldEFmdGVyOiAwLFxuICAgIG5vcm1hbGl6ZVNsaWRlSW5kZXg6IHRydWUsXG4gICAgY2VudGVySW5zdWZmaWNpZW50U2xpZGVzOiBmYWxzZSxcbiAgICAvLyBEaXNhYmxlIHN3aXBlciBhbmQgaGlkZSBuYXZpZ2F0aW9uIHdoZW4gY29udGFpbmVyIG5vdCBvdmVyZmxvd1xuICAgIHdhdGNoT3ZlcmZsb3c6IGZhbHNlLFxuICAgIC8vIFJvdW5kIGxlbmd0aFxuICAgIHJvdW5kTGVuZ3RoczogZmFsc2UsXG4gICAgLy8gVG91Y2hlc1xuICAgIHRvdWNoUmF0aW86IDEsXG4gICAgdG91Y2hBbmdsZTogNDUsXG4gICAgc2ltdWxhdGVUb3VjaDogdHJ1ZSxcbiAgICBzaG9ydFN3aXBlczogdHJ1ZSxcbiAgICBsb25nU3dpcGVzOiB0cnVlLFxuICAgIGxvbmdTd2lwZXNSYXRpbzogMC41LFxuICAgIGxvbmdTd2lwZXNNczogMzAwLFxuICAgIGZvbGxvd0ZpbmdlcjogdHJ1ZSxcbiAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZSxcbiAgICB0aHJlc2hvbGQ6IDAsXG4gICAgdG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uOiB0cnVlLFxuICAgIHRvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdDogdHJ1ZSxcbiAgICB0b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdDogZmFsc2UsXG4gICAgdG91Y2hSZWxlYXNlT25FZGdlczogZmFsc2UsXG4gICAgLy8gVW5pcXVlIE5hdmlnYXRpb24gRWxlbWVudHNcbiAgICB1bmlxdWVOYXZFbGVtZW50czogdHJ1ZSxcbiAgICAvLyBSZXNpc3RhbmNlXG4gICAgcmVzaXN0YW5jZTogdHJ1ZSxcbiAgICByZXNpc3RhbmNlUmF0aW86IDAuODUsXG4gICAgLy8gUHJvZ3Jlc3NcbiAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiBmYWxzZSxcbiAgICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IGZhbHNlLFxuICAgIC8vIEN1cnNvclxuICAgIGdyYWJDdXJzb3I6IGZhbHNlLFxuICAgIC8vIENsaWNrc1xuICAgIHByZXZlbnRDbGlja3M6IHRydWUsXG4gICAgcHJldmVudENsaWNrc1Byb3BhZ2F0aW9uOiB0cnVlLFxuICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlLFxuICAgIC8vIEltYWdlc1xuICAgIHByZWxvYWRJbWFnZXM6IHRydWUsXG4gICAgdXBkYXRlT25JbWFnZXNSZWFkeTogdHJ1ZSxcbiAgICAvLyBsb29wXG4gICAgbG9vcDogZmFsc2UsXG4gICAgbG9vcEFkZGl0aW9uYWxTbGlkZXM6IDAsXG4gICAgbG9vcGVkU2xpZGVzOiBudWxsLFxuICAgIGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IGZhbHNlLFxuICAgIC8vIFN3aXBpbmcvbm8gc3dpcGluZ1xuICAgIGFsbG93U2xpZGVQcmV2OiB0cnVlLFxuICAgIGFsbG93U2xpZGVOZXh0OiB0cnVlLFxuICAgIHN3aXBlSGFuZGxlcjogbnVsbCxcbiAgICBub1N3aXBpbmc6IHRydWUsXG4gICAgbm9Td2lwaW5nQ2xhc3M6ICdzd2lwZXItbm8tc3dpcGluZycsXG4gICAgbm9Td2lwaW5nU2VsZWN0b3I6IG51bGwsXG4gICAgLy8gUGFzc2l2ZSBMaXN0ZW5lcnNcbiAgICBwYXNzaXZlTGlzdGVuZXJzOiB0cnVlLFxuICAgIC8vIE5TXG4gICAgY29udGFpbmVyTW9kaWZpZXJDbGFzczogJ3N3aXBlci1jb250YWluZXItJyxcbiAgICBzbGlkZUNsYXNzOiAnc3dpcGVyLXNsaWRlJyxcbiAgICBzbGlkZUJsYW5rQ2xhc3M6ICdzd2lwZXItc2xpZGUtaW52aXNpYmxlLWJsYW5rJyxcbiAgICBzbGlkZUFjdGl2ZUNsYXNzOiAnc3dpcGVyLXNsaWRlLWFjdGl2ZScsXG4gICAgc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUtYWN0aXZlJyxcbiAgICBzbGlkZVZpc2libGVDbGFzczogJ3N3aXBlci1zbGlkZS12aXNpYmxlJyxcbiAgICBzbGlkZUR1cGxpY2F0ZUNsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZScsXG4gICAgc2xpZGVOZXh0Q2xhc3M6ICdzd2lwZXItc2xpZGUtbmV4dCcsXG4gICAgc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3M6ICdzd2lwZXItc2xpZGUtZHVwbGljYXRlLW5leHQnLFxuICAgIHNsaWRlUHJldkNsYXNzOiAnc3dpcGVyLXNsaWRlLXByZXYnLFxuICAgIHNsaWRlRHVwbGljYXRlUHJldkNsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1wcmV2JyxcbiAgICB3cmFwcGVyQ2xhc3M6ICdzd2lwZXItd3JhcHBlcicsXG4gICAgLy8gQ2FsbGJhY2tzXG4gICAgcnVuQ2FsbGJhY2tzT25Jbml0OiB0cnVlLFxufTtcbi8qIGVzbGludCBuby1wYXJhbS1yZWFzc2lnbjogXCJvZmZcIiAqL1xudmFyIHByb3RvdHlwZXMgPSB7XG4gICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgdHJhbnNsYXRlOiB0cmFuc2xhdGUsXG4gICAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbiQxLFxuICAgIHNsaWRlOiBzbGlkZSxcbiAgICBsb29wOiBsb29wLFxuICAgIGdyYWJDdXJzb3I6IGdyYWJDdXJzb3IsXG4gICAgbWFuaXB1bGF0aW9uOiBtYW5pcHVsYXRpb24sXG4gICAgZXZlbnRzOiBldmVudHMsXG4gICAgYnJlYWtwb2ludHM6IGJyZWFrcG9pbnRzLFxuICAgIGNoZWNrT3ZlcmZsb3c6IGNoZWNrT3ZlcmZsb3ckMSxcbiAgICBjbGFzc2VzOiBjbGFzc2VzLFxuICAgIGltYWdlczogaW1hZ2VzLFxufTtcbnZhciBleHRlbmRlZERlZmF1bHRzID0ge307XG52YXIgU3dpcGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTd2lwZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3dpcGVyKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBlbDtcbiAgICAgICAgdmFyIHBhcmFtcztcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIGFyZ3NbMF0uY29uc3RydWN0b3IgJiYgYXJnc1swXS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICBwYXJhbXMgPSBhcmdzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWwgPSBhcmdzWzBdLCBwYXJhbXMgPSBhcmdzWzFdO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcGFyYW1zKVxuICAgICAgICAgICAgcGFyYW1zID0ge307XG4gICAgICAgIHBhcmFtcyA9IFV0aWxzLmV4dGVuZCh7fSwgcGFyYW1zKTtcbiAgICAgICAgaWYgKGVsICYmICFwYXJhbXMuZWwpXG4gICAgICAgICAgICBwYXJhbXMuZWwgPSBlbDtcbiAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwYXJhbXMpIHx8IHRoaXM7XG4gICAgICAgIE9iamVjdC5rZXlzKHByb3RvdHlwZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3RvdHlwZUdyb3VwKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcm90b3R5cGVzW3Byb3RvdHlwZUdyb3VwXSkuZm9yRWFjaChmdW5jdGlvbiAocHJvdG9NZXRob2QpIHtcbiAgICAgICAgICAgICAgICBpZiAoIVN3aXBlci5wcm90b3R5cGVbcHJvdG9NZXRob2RdKSB7XG4gICAgICAgICAgICAgICAgICAgIFN3aXBlci5wcm90b3R5cGVbcHJvdG9NZXRob2RdID0gcHJvdG90eXBlc1twcm90b3R5cGVHcm91cF1bcHJvdG9NZXRob2RdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gU3dpcGVyIEluc3RhbmNlXG4gICAgICAgIHZhciBzd2lwZXIgPSBfdGhpcztcbiAgICAgICAgaWYgKHR5cGVvZiBzd2lwZXIubW9kdWxlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHN3aXBlci5tb2R1bGVzID0ge307XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMoc3dpcGVyLm1vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZU5hbWUpIHtcbiAgICAgICAgICAgIHZhciBtb2R1bGUgPSBzd2lwZXIubW9kdWxlc1ttb2R1bGVOYW1lXTtcbiAgICAgICAgICAgIGlmIChtb2R1bGUucGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vZHVsZVBhcmFtTmFtZSA9IE9iamVjdC5rZXlzKG1vZHVsZS5wYXJhbXMpWzBdO1xuICAgICAgICAgICAgICAgIHZhciBtb2R1bGVQYXJhbXMgPSBtb2R1bGUucGFyYW1zW21vZHVsZVBhcmFtTmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtb2R1bGVQYXJhbXMgIT09ICdvYmplY3QnIHx8IG1vZHVsZVBhcmFtcyA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICghKG1vZHVsZVBhcmFtTmFtZSBpbiBwYXJhbXMgJiYgJ2VuYWJsZWQnIGluIG1vZHVsZVBhcmFtcykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPSB7IGVuYWJsZWQ6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9PT0gJ29iamVjdCdcbiAgICAgICAgICAgICAgICAgICAgJiYgISgnZW5hYmxlZCcgaW4gcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdKVxuICAgICAgICAgICAgICAgICAgICBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9IHsgZW5hYmxlZDogZmFsc2UgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEV4dGVuZCBkZWZhdWx0cyB3aXRoIG1vZHVsZXMgcGFyYW1zXG4gICAgICAgIHZhciBzd2lwZXJQYXJhbXMgPSBVdGlscy5leHRlbmQoe30sIGRlZmF1bHRzKTtcbiAgICAgICAgc3dpcGVyLnVzZU1vZHVsZXNQYXJhbXMoc3dpcGVyUGFyYW1zKTtcbiAgICAgICAgLy8gRXh0ZW5kIGRlZmF1bHRzIHdpdGggcGFzc2VkIHBhcmFtc1xuICAgICAgICBzd2lwZXIucGFyYW1zID0gVXRpbHMuZXh0ZW5kKHt9LCBzd2lwZXJQYXJhbXMsIGV4dGVuZGVkRGVmYXVsdHMsIHBhcmFtcyk7XG4gICAgICAgIHN3aXBlci5vcmlnaW5hbFBhcmFtcyA9IFV0aWxzLmV4dGVuZCh7fSwgc3dpcGVyLnBhcmFtcyk7XG4gICAgICAgIHN3aXBlci5wYXNzZWRQYXJhbXMgPSBVdGlscy5leHRlbmQoe30sIHBhcmFtcyk7XG4gICAgICAgIC8vIFNhdmUgRG9tIGxpYlxuICAgICAgICBzd2lwZXIuJCA9ICQ7XG4gICAgICAgIC8vIEZpbmQgZWxcbiAgICAgICAgdmFyICRlbCA9ICQoc3dpcGVyLnBhcmFtcy5lbCk7XG4gICAgICAgIGVsID0gJGVsWzBdO1xuICAgICAgICBpZiAoIWVsKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkZWwubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdmFyIHN3aXBlcnNfMSA9IFtdO1xuICAgICAgICAgICAgJGVsLmVhY2goZnVuY3Rpb24gKGluZGV4LCBjb250YWluZXJFbCkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdQYXJhbXMgPSBVdGlscy5leHRlbmQoe30sIHBhcmFtcywgeyBlbDogY29udGFpbmVyRWwgfSk7XG4gICAgICAgICAgICAgICAgc3dpcGVyc18xLnB1c2gobmV3IFN3aXBlcihuZXdQYXJhbXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHN3aXBlcnNfMTtcbiAgICAgICAgfVxuICAgICAgICBlbC5zd2lwZXIgPSBzd2lwZXI7XG4gICAgICAgICRlbC5kYXRhKCdzd2lwZXInLCBzd2lwZXIpO1xuICAgICAgICAvLyBGaW5kIFdyYXBwZXJcbiAgICAgICAgdmFyICR3cmFwcGVyRWwgPSAkZWwuY2hpbGRyZW4oXCIuXCIgKyBzd2lwZXIucGFyYW1zLndyYXBwZXJDbGFzcyk7XG4gICAgICAgIC8vIEV4dGVuZCBTd2lwZXJcbiAgICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgICAgICAgJGVsOiAkZWwsXG4gICAgICAgICAgICBlbDogZWwsXG4gICAgICAgICAgICAkd3JhcHBlckVsOiAkd3JhcHBlckVsLFxuICAgICAgICAgICAgd3JhcHBlckVsOiAkd3JhcHBlckVsWzBdLFxuICAgICAgICAgICAgLy8gQ2xhc3Nlc1xuICAgICAgICAgICAgY2xhc3NOYW1lczogW10sXG4gICAgICAgICAgICAvLyBTbGlkZXNcbiAgICAgICAgICAgIHNsaWRlczogJCgpLFxuICAgICAgICAgICAgc2xpZGVzR3JpZDogW10sXG4gICAgICAgICAgICBzbmFwR3JpZDogW10sXG4gICAgICAgICAgICBzbGlkZXNTaXplc0dyaWQ6IFtdLFxuICAgICAgICAgICAgLy8gaXNEaXJlY3Rpb25cbiAgICAgICAgICAgIGlzSG9yaXpvbnRhbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVmVydGljYWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gUlRMXG4gICAgICAgICAgICBydGw6IChlbC5kaXIudG9Mb3dlckNhc2UoKSA9PT0gJ3J0bCcgfHwgJGVsLmNzcygnZGlyZWN0aW9uJykgPT09ICdydGwnKSxcbiAgICAgICAgICAgIHJ0bFRyYW5zbGF0ZTogc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyAmJiAoZWwuZGlyLnRvTG93ZXJDYXNlKCkgPT09ICdydGwnIHx8ICRlbC5jc3MoJ2RpcmVjdGlvbicpID09PSAncnRsJyksXG4gICAgICAgICAgICB3cm9uZ1JUTDogJHdyYXBwZXJFbC5jc3MoJ2Rpc3BsYXknKSA9PT0gJy13ZWJraXQtYm94JyxcbiAgICAgICAgICAgIC8vIEluZGV4ZXNcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4OiAwLFxuICAgICAgICAgICAgcmVhbEluZGV4OiAwLFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIGlzQmVnaW5uaW5nOiB0cnVlLFxuICAgICAgICAgICAgaXNFbmQ6IGZhbHNlLFxuICAgICAgICAgICAgLy8gUHJvcHNcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogMCxcbiAgICAgICAgICAgIHByZXZpb3VzVHJhbnNsYXRlOiAwLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICAgICAgICB2ZWxvY2l0eTogMCxcbiAgICAgICAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICAgICAgICAvLyBMb2Nrc1xuICAgICAgICAgICAgYWxsb3dTbGlkZU5leHQ6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZU5leHQsXG4gICAgICAgICAgICBhbGxvd1NsaWRlUHJldjogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlUHJldixcbiAgICAgICAgICAgIC8vIFRvdWNoIEV2ZW50c1xuICAgICAgICAgICAgdG91Y2hFdmVudHM6IChmdW5jdGlvbiB0b3VjaEV2ZW50cygpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2ggPSBbJ3RvdWNoc3RhcnQnLCAndG91Y2htb3ZlJywgJ3RvdWNoZW5kJ107XG4gICAgICAgICAgICAgICAgdmFyIGRlc2t0b3AgPSBbJ21vdXNlZG93bicsICdtb3VzZW1vdmUnLCAnbW91c2V1cCddO1xuICAgICAgICAgICAgICAgIGlmIChTdXBwb3J0LnBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVza3RvcCA9IFsncG9pbnRlcmRvd24nLCAncG9pbnRlcm1vdmUnLCAncG9pbnRlcnVwJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKFN1cHBvcnQucHJlZml4ZWRQb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc2t0b3AgPSBbJ01TUG9pbnRlckRvd24nLCAnTVNQb2ludGVyTW92ZScsICdNU1BvaW50ZXJVcCddO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzd2lwZXIudG91Y2hFdmVudHNUb3VjaCA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHRvdWNoWzBdLFxuICAgICAgICAgICAgICAgICAgICBtb3ZlOiB0b3VjaFsxXSxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiB0b3VjaFsyXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHN3aXBlci50b3VjaEV2ZW50c0Rlc2t0b3AgPSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBkZXNrdG9wWzBdLFxuICAgICAgICAgICAgICAgICAgICBtb3ZlOiBkZXNrdG9wWzFdLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IGRlc2t0b3BbMl0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gU3VwcG9ydC50b3VjaCB8fCAhc3dpcGVyLnBhcmFtcy5zaW11bGF0ZVRvdWNoID8gc3dpcGVyLnRvdWNoRXZlbnRzVG91Y2ggOiBzd2lwZXIudG91Y2hFdmVudHNEZXNrdG9wO1xuICAgICAgICAgICAgfSgpKSxcbiAgICAgICAgICAgIHRvdWNoRXZlbnRzRGF0YToge1xuICAgICAgICAgICAgICAgIGlzVG91Y2hlZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGlzTW92ZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBhbGxvd1RvdWNoQ2FsbGJhY2tzOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgdG91Y2hTdGFydFRpbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBpc1Njcm9sbGluZzogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRUcmFuc2xhdGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBzdGFydFRyYW5zbGF0ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGFsbG93VGhyZXNob2xkTW92ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIC8vIEZvcm0gZWxlbWVudHMgdG8gbWF0Y2hcbiAgICAgICAgICAgICAgICBmb3JtRWxlbWVudHM6ICdpbnB1dCwgc2VsZWN0LCBvcHRpb24sIHRleHRhcmVhLCBidXR0b24sIHZpZGVvJyxcbiAgICAgICAgICAgICAgICAvLyBMYXN0IGNsaWNrIHRpbWVcbiAgICAgICAgICAgICAgICBsYXN0Q2xpY2tUaW1lOiBVdGlscy5ub3coKSxcbiAgICAgICAgICAgICAgICBjbGlja1RpbWVvdXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAvLyBWZWxvY2l0aWVzXG4gICAgICAgICAgICAgICAgdmVsb2NpdGllczogW10sXG4gICAgICAgICAgICAgICAgYWxsb3dNb21lbnR1bUJvdW5jZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGlzVG91Y2hFdmVudDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHN0YXJ0TW92aW5nOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gQ2xpY2tzXG4gICAgICAgICAgICBhbGxvd0NsaWNrOiB0cnVlLFxuICAgICAgICAgICAgLy8gVG91Y2hlc1xuICAgICAgICAgICAgYWxsb3dUb3VjaE1vdmU6IHN3aXBlci5wYXJhbXMuYWxsb3dUb3VjaE1vdmUsXG4gICAgICAgICAgICB0b3VjaGVzOiB7XG4gICAgICAgICAgICAgICAgc3RhcnRYOiAwLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50WDogMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50WTogMCxcbiAgICAgICAgICAgICAgICBkaWZmOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIEltYWdlc1xuICAgICAgICAgICAgaW1hZ2VzVG9Mb2FkOiBbXSxcbiAgICAgICAgICAgIGltYWdlc0xvYWRlZDogMCxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEluc3RhbGwgTW9kdWxlc1xuICAgICAgICBzd2lwZXIudXNlTW9kdWxlcygpO1xuICAgICAgICAvLyBJbml0XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmluaXQpIHtcbiAgICAgICAgICAgIHN3aXBlci5pbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmV0dXJuIGFwcCBpbnN0YW5jZVxuICAgICAgICByZXR1cm4gc3dpcGVyO1xuICAgIH1cbiAgICBTd2lwZXIucHJvdG90eXBlLnNsaWRlc1BlclZpZXdEeW5hbWljID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsIHNsaWRlcyA9IHN3aXBlci5zbGlkZXMsIHNsaWRlc0dyaWQgPSBzd2lwZXIuc2xpZGVzR3JpZCwgc3dpcGVyU2l6ZSA9IHN3aXBlci5zaXplLCBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgICAgICAgdmFyIHNwdiA9IDE7XG4gICAgICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgICAgIHZhciBzbGlkZVNpemUgPSBzbGlkZXNbYWN0aXZlSW5kZXhdLnN3aXBlclNsaWRlU2l6ZTtcbiAgICAgICAgICAgIHZhciBicmVha0xvb3AgPSB2b2lkIDA7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gYWN0aXZlSW5kZXggKyAxOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlc1tpXSAmJiAhYnJlYWtMb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlU2l6ZSArPSBzbGlkZXNbaV0uc3dpcGVyU2xpZGVTaXplO1xuICAgICAgICAgICAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlU2l6ZSA+IHN3aXBlclNpemUpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha0xvb3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBhY3RpdmVJbmRleCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlc1tpXSAmJiAhYnJlYWtMb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlU2l6ZSArPSBzbGlkZXNbaV0uc3dpcGVyU2xpZGVTaXplO1xuICAgICAgICAgICAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlU2l6ZSA+IHN3aXBlclNpemUpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha0xvb3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBhY3RpdmVJbmRleCArIDE7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVzR3JpZFtpXSAtIHNsaWRlc0dyaWRbYWN0aXZlSW5kZXhdIDwgc3dpcGVyU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNwdjtcbiAgICB9O1xuICAgIFN3aXBlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkLCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICAgICAgICAvLyBCcmVha3BvaW50c1xuICAgICAgICBpZiAocGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICAgICAgICBzd2lwZXIuc2V0QnJlYWtwb2ludCgpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXBlci51cGRhdGVTaXplKCk7XG4gICAgICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgICAgIGZ1bmN0aW9uIHNldFRyYW5zbGF0ZSgpIHtcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGVWYWx1ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlICogLTEgOiBzd2lwZXIudHJhbnNsYXRlO1xuICAgICAgICAgICAgdmFyIG5ld1RyYW5zbGF0ZSA9IE1hdGgubWluKE1hdGgubWF4KHRyYW5zbGF0ZVZhbHVlLCBzd2lwZXIubWF4VHJhbnNsYXRlKCkpLCBzd2lwZXIubWluVHJhbnNsYXRlKCkpO1xuICAgICAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuICAgICAgICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICAgICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0cmFuc2xhdGVkO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgICAgICAgc2V0VHJhbnNsYXRlKCk7XG4gICAgICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICgoc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgfHwgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkgJiYgc3dpcGVyLmlzRW5kICYmICFzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlZCA9IHN3aXBlci5zbGlkZVRvKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlZCA9IHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0cmFuc2xhdGVkKSB7XG4gICAgICAgICAgICAgICAgc2V0VHJhbnNsYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHNuYXBHcmlkICE9PSBzd2lwZXIuc25hcEdyaWQpIHtcbiAgICAgICAgICAgIHN3aXBlci5jaGVja092ZXJmbG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpcGVyLmVtaXQoJ3VwZGF0ZScpO1xuICAgIH07XG4gICAgU3dpcGVyLnByb3RvdHlwZS5jaGFuZ2VEaXJlY3Rpb24gPSBmdW5jdGlvbiAobmV3RGlyZWN0aW9uLCBuZWVkVXBkYXRlKSB7XG4gICAgICAgIGlmIChuZWVkVXBkYXRlID09PSB2b2lkIDApIHsgbmVlZFVwZGF0ZSA9IHRydWU7IH1cbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHZhciBjdXJyZW50RGlyZWN0aW9uID0gc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb247XG4gICAgICAgIGlmICghbmV3RGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIG5ld0RpcmVjdGlvbiA9IGN1cnJlbnREaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChuZXdEaXJlY3Rpb24gPT09IGN1cnJlbnREaXJlY3Rpb24pIHx8IChuZXdEaXJlY3Rpb24gIT09ICdob3Jpem9udGFsJyAmJiBuZXdEaXJlY3Rpb24gIT09ICd2ZXJ0aWNhbCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3dpcGVyO1xuICAgICAgICB9XG4gICAgICAgIHN3aXBlci4kZWxcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcIlwiICsgc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgY3VycmVudERpcmVjdGlvbiArIFwiIHdwOC1cIiArIGN1cnJlbnREaXJlY3Rpb24pXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJcIiArIHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIG5ld0RpcmVjdGlvbik7XG4gICAgICAgIGlmICgoQnJvd3Nlci5pc0lFIHx8IEJyb3dzZXIuaXNFZGdlKSAmJiAoU3VwcG9ydC5wb2ludGVyRXZlbnRzIHx8IFN1cHBvcnQucHJlZml4ZWRQb2ludGVyRXZlbnRzKSkge1xuICAgICAgICAgICAgc3dpcGVyLiRlbC5hZGRDbGFzcyhzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBcIndwOC1cIiArIG5ld0RpcmVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb24gPSBuZXdEaXJlY3Rpb247XG4gICAgICAgIHN3aXBlci5zbGlkZXMuZWFjaChmdW5jdGlvbiAoc2xpZGVJbmRleCwgc2xpZGVFbCkge1xuICAgICAgICAgICAgaWYgKG5ld0RpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIHNsaWRlRWwuc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNsaWRlRWwuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzd2lwZXIuZW1pdCgnY2hhbmdlRGlyZWN0aW9uJyk7XG4gICAgICAgIGlmIChuZWVkVXBkYXRlKVxuICAgICAgICAgICAgc3dpcGVyLnVwZGF0ZSgpO1xuICAgICAgICByZXR1cm4gc3dpcGVyO1xuICAgIH07XG4gICAgU3dpcGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHN3aXBlci5pbml0aWFsaXplZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZUluaXQnKTtcbiAgICAgICAgLy8gU2V0IGJyZWFrcG9pbnRcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuYnJlYWtwb2ludHMpIHtcbiAgICAgICAgICAgIHN3aXBlci5zZXRCcmVha3BvaW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIENsYXNzZXNcbiAgICAgICAgc3dpcGVyLmFkZENsYXNzZXMoKTtcbiAgICAgICAgLy8gQ3JlYXRlIGxvb3BcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGUgc2l6ZVxuICAgICAgICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuICAgICAgICAvLyBVcGRhdGUgc2xpZGVzXG4gICAgICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdykge1xuICAgICAgICAgICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgR3JhYiBDdXJzb3JcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZ3JhYkN1cnNvcikge1xuICAgICAgICAgICAgc3dpcGVyLnNldEdyYWJDdXJzb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5wcmVsb2FkSW1hZ2VzKSB7XG4gICAgICAgICAgICBzd2lwZXIucHJlbG9hZEltYWdlcygpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNsaWRlIFRvIEluaXRpYWwgU2xpZGVcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnBhcmFtcy5pbml0aWFsU2xpZGUgKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBzd2lwZXIucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIucGFyYW1zLmluaXRpYWxTbGlkZSwgMCwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEF0dGFjaCBldmVudHNcbiAgICAgICAgc3dpcGVyLmF0dGFjaEV2ZW50cygpO1xuICAgICAgICAvLyBJbml0IEZsYWdcbiAgICAgICAgc3dpcGVyLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgLy8gRW1pdFxuICAgICAgICBzd2lwZXIuZW1pdCgnaW5pdCcpO1xuICAgIH07XG4gICAgU3dpcGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKGRlbGV0ZUluc3RhbmNlLCBjbGVhblN0eWxlcykge1xuICAgICAgICBpZiAoZGVsZXRlSW5zdGFuY2UgPT09IHZvaWQgMCkgeyBkZWxldGVJbnN0YW5jZSA9IHRydWU7IH1cbiAgICAgICAgaWYgKGNsZWFuU3R5bGVzID09PSB2b2lkIDApIHsgY2xlYW5TdHlsZXMgPSB0cnVlOyB9XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcywgJGVsID0gc3dpcGVyLiRlbCwgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLCBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuICAgICAgICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMgPT09ICd1bmRlZmluZWQnIHx8IHN3aXBlci5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVEZXN0cm95Jyk7XG4gICAgICAgIC8vIEluaXQgRmxhZ1xuICAgICAgICBzd2lwZXIuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gRGV0YWNoIGV2ZW50c1xuICAgICAgICBzd2lwZXIuZGV0YWNoRXZlbnRzKCk7XG4gICAgICAgIC8vIERlc3Ryb3kgbG9vcFxuICAgICAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsZWFudXAgc3R5bGVzXG4gICAgICAgIGlmIChjbGVhblN0eWxlcykge1xuICAgICAgICAgICAgc3dpcGVyLnJlbW92ZUNsYXNzZXMoKTtcbiAgICAgICAgICAgICRlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgJHdyYXBwZXJFbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgaWYgKHNsaWRlcyAmJiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhbXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5zbGlkZVZpc2libGVDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5zbGlkZU5leHRDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnNsaWRlUHJldkNsYXNzLFxuICAgICAgICAgICAgICAgIF0uam9pbignICcpKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignc3R5bGUnKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1zd2lwZXItY29sdW1uJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtc3dpcGVyLXJvdycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN3aXBlci5lbWl0KCdkZXN0cm95Jyk7XG4gICAgICAgIC8vIERldGFjaCBlbWl0dGVyIGV2ZW50c1xuICAgICAgICBPYmplY3Qua2V5cyhzd2lwZXIuZXZlbnRzTGlzdGVuZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgIHN3aXBlci5vZmYoZXZlbnROYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkZWxldGVJbnN0YW5jZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHN3aXBlci4kZWxbMF0uc3dpcGVyID0gbnVsbDtcbiAgICAgICAgICAgIHN3aXBlci4kZWwuZGF0YSgnc3dpcGVyJywgbnVsbCk7XG4gICAgICAgICAgICBVdGlscy5kZWxldGVQcm9wcyhzd2lwZXIpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXBlci5kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIFN3aXBlci5leHRlbmREZWZhdWx0cyA9IGZ1bmN0aW9uIChuZXdEZWZhdWx0cykge1xuICAgICAgICBVdGlscy5leHRlbmQoZXh0ZW5kZWREZWZhdWx0cywgbmV3RGVmYXVsdHMpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN3aXBlciwgXCJleHRlbmRlZERlZmF1bHRzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5kZWREZWZhdWx0cztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN3aXBlciwgXCJkZWZhdWx0c1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3dpcGVyLCBcIkNsYXNzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gU3dpcGVyQ2xhc3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTd2lwZXIsIFwiJFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBTd2lwZXI7XG59KFN3aXBlckNsYXNzKSk7XG52YXIgRGV2aWNlJDEgPSB7XG4gICAgbmFtZTogJ2RldmljZScsXG4gICAgcHJvdG86IHtcbiAgICAgICAgZGV2aWNlOiBEZXZpY2UsXG4gICAgfSxcbiAgICBzdGF0aWM6IHtcbiAgICAgICAgZGV2aWNlOiBEZXZpY2UsXG4gICAgfSxcbn07XG52YXIgU3VwcG9ydCQxID0ge1xuICAgIG5hbWU6ICdzdXBwb3J0JyxcbiAgICBwcm90bzoge1xuICAgICAgICBzdXBwb3J0OiBTdXBwb3J0LFxuICAgIH0sXG4gICAgc3RhdGljOiB7XG4gICAgICAgIHN1cHBvcnQ6IFN1cHBvcnQsXG4gICAgfSxcbn07XG52YXIgQnJvd3NlciQxID0ge1xuICAgIG5hbWU6ICdicm93c2VyJyxcbiAgICBwcm90bzoge1xuICAgICAgICBicm93c2VyOiBCcm93c2VyLFxuICAgIH0sXG4gICAgc3RhdGljOiB7XG4gICAgICAgIGJyb3dzZXI6IEJyb3dzZXIsXG4gICAgfSxcbn07XG52YXIgUmVzaXplID0ge1xuICAgIG5hbWU6ICdyZXNpemUnLFxuICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgICAgICAgcmVzaXplOiB7XG4gICAgICAgICAgICAgICAgcmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuaW5pdGlhbGl6ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVSZXNpemUnKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ3Jlc2l6ZScpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5pbml0aWFsaXplZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ29yaWVudGF0aW9uY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgICAgICAvLyBFbWl0IHJlc2l6ZVxuICAgICAgICAgICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN3aXBlci5yZXNpemUucmVzaXplSGFuZGxlcik7XG4gICAgICAgICAgICAvLyBFbWl0IG9yaWVudGF0aW9uY2hhbmdlXG4gICAgICAgICAgICB3aW4uYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBzd2lwZXIucmVzaXplLm9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICAgICAgd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN3aXBlci5yZXNpemUucmVzaXplSGFuZGxlcik7XG4gICAgICAgICAgICB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBzd2lwZXIucmVzaXplLm9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG52YXIgT2JzZXJ2ZXIgPSB7XG4gICAgZnVuYzogd2luLk11dGF0aW9uT2JzZXJ2ZXIgfHwgd2luLldlYmtpdE11dGF0aW9uT2JzZXJ2ZXIsXG4gICAgYXR0YWNoOiBmdW5jdGlvbiAodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICB2YXIgT2JzZXJ2ZXJGdW5jID0gT2JzZXJ2ZXIuZnVuYztcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IE9ic2VydmVyRnVuYyhmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAvLyBUaGUgb2JzZXJ2ZXJVcGRhdGUgZXZlbnQgc2hvdWxkIG9ubHkgYmUgdHJpZ2dlcmVkXG4gICAgICAgICAgICAvLyBvbmNlIGRlc3BpdGUgdGhlIG51bWJlciBvZiBtdXRhdGlvbnMuICBBZGRpdGlvbmFsXG4gICAgICAgICAgICAvLyB0cmlnZ2VycyBhcmUgcmVkdW5kYW50IGFuZCBhcmUgdmVyeSBjb3N0bHlcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ29ic2VydmVyVXBkYXRlJywgbXV0YXRpb25zWzBdKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb2JzZXJ2ZXJVcGRhdGUgPSBmdW5jdGlvbiBvYnNlcnZlclVwZGF0ZSgpIHtcbiAgICAgICAgICAgICAgICBzd2lwZXIuZW1pdCgnb2JzZXJ2ZXJVcGRhdGUnLCBtdXRhdGlvbnNbMF0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh3aW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgICAgICAgICAgd2luLnJlcXVlc3RBbmltYXRpb25GcmFtZShvYnNlcnZlclVwZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW4uc2V0VGltZW91dChvYnNlcnZlclVwZGF0ZSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCwge1xuICAgICAgICAgICAgYXR0cmlidXRlczogdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5hdHRyaWJ1dGVzLFxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0eXBlb2Ygb3B0aW9ucy5jaGlsZExpc3QgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuY2hpbGRMaXN0LFxuICAgICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHlwZW9mIG9wdGlvbnMuY2hhcmFjdGVyRGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5jaGFyYWN0ZXJEYXRhLFxuICAgICAgICB9KTtcbiAgICAgICAgc3dpcGVyLm9ic2VydmVyLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICB9LFxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmICghU3VwcG9ydC5vYnNlcnZlciB8fCAhc3dpcGVyLnBhcmFtcy5vYnNlcnZlcilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMub2JzZXJ2ZVBhcmVudHMpIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXJQYXJlbnRzID0gc3dpcGVyLiRlbC5wYXJlbnRzKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRhaW5lclBhcmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBzd2lwZXIub2JzZXJ2ZXIuYXR0YWNoKGNvbnRhaW5lclBhcmVudHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE9ic2VydmUgY29udGFpbmVyXG4gICAgICAgIHN3aXBlci5vYnNlcnZlci5hdHRhY2goc3dpcGVyLiRlbFswXSwgeyBjaGlsZExpc3Q6IHN3aXBlci5wYXJhbXMub2JzZXJ2ZVNsaWRlQ2hpbGRyZW4gfSk7XG4gICAgICAgIC8vIE9ic2VydmUgd3JhcHBlclxuICAgICAgICBzd2lwZXIub2JzZXJ2ZXIuYXR0YWNoKHN3aXBlci4kd3JhcHBlckVsWzBdLCB7IGF0dHJpYnV0ZXM6IGZhbHNlIH0pO1xuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgc3dpcGVyLm9ic2VydmVyLm9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3dpcGVyLm9ic2VydmVyLm9ic2VydmVycyA9IFtdO1xuICAgIH0sXG59O1xudmFyIE9ic2VydmVyJDEgPSB7XG4gICAgbmFtZTogJ29ic2VydmVyJyxcbiAgICBwYXJhbXM6IHtcbiAgICAgICAgb2JzZXJ2ZXI6IGZhbHNlLFxuICAgICAgICBvYnNlcnZlUGFyZW50czogZmFsc2UsXG4gICAgICAgIG9ic2VydmVTbGlkZUNoaWxkcmVuOiBmYWxzZSxcbiAgICB9LFxuICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgICAgICAgb2JzZXJ2ZXI6IHtcbiAgICAgICAgICAgICAgICBpbml0OiBPYnNlcnZlci5pbml0LmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICAgICAgICBhdHRhY2g6IE9ic2VydmVyLmF0dGFjaC5iaW5kKHN3aXBlciksXG4gICAgICAgICAgICAgICAgZGVzdHJveTogT2JzZXJ2ZXIuZGVzdHJveS5iaW5kKHN3aXBlciksXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXJzOiBbXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgICAgICBzd2lwZXIub2JzZXJ2ZXIuaW5pdCgpO1xuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgICAgIHN3aXBlci5vYnNlcnZlci5kZXN0cm95KCk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5mdW5jdGlvbiBpc0V2ZW50U3VwcG9ydGVkKCkge1xuICAgIHZhciBldmVudE5hbWUgPSAnb253aGVlbCc7XG4gICAgdmFyIGlzU3VwcG9ydGVkID0gZXZlbnROYW1lIGluIGRvYztcbiAgICBpZiAoIWlzU3VwcG9ydGVkKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShldmVudE5hbWUsICdyZXR1cm47Jyk7XG4gICAgICAgIGlzU3VwcG9ydGVkID0gdHlwZW9mIGVsZW1lbnRbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG4gICAgaWYgKCFpc1N1cHBvcnRlZFxuICAgICAgICAmJiBkb2MuaW1wbGVtZW50YXRpb25cbiAgICAgICAgJiYgZG9jLmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmVcbiAgICAgICAgLy8gYWx3YXlzIHJldHVybnMgdHJ1ZSBpbiBuZXdlciBicm93c2VycyBhcyBwZXIgdGhlIHN0YW5kYXJkLlxuICAgICAgICAvLyBAc2VlIGh0dHA6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tZG9taW1wbGVtZW50YXRpb24taGFzZmVhdHVyZVxuICAgICAgICAmJiBkb2MuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZSgnJywgJycpICE9PSB0cnVlKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIG9ubHkgd2F5IHRvIHRlc3Qgc3VwcG9ydCBmb3IgdGhlIGB3aGVlbGAgZXZlbnQgaW4gSUU5Ky5cbiAgICAgICAgaXNTdXBwb3J0ZWQgPSBkb2MuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZSgnRXZlbnRzLndoZWVsJywgJzMuMCcpO1xuICAgIH1cbiAgICByZXR1cm4gaXNTdXBwb3J0ZWQ7XG59XG52YXIgTW91c2V3aGVlbCA9IHtcbiAgICBsYXN0U2Nyb2xsVGltZTogVXRpbHMubm93KCksXG4gICAgZXZlbnQ6IChmdW5jdGlvbiBnZXRFdmVudCgpIHtcbiAgICAgICAgaWYgKHdpbi5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xKVxuICAgICAgICAgICAgcmV0dXJuICdET01Nb3VzZVNjcm9sbCc7XG4gICAgICAgIHJldHVybiBpc0V2ZW50U3VwcG9ydGVkKCkgPyAnd2hlZWwnIDogJ21vdXNld2hlZWwnO1xuICAgIH0oKSksXG4gICAgbm9ybWFsaXplOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBSZWFzb25hYmxlIGRlZmF1bHRzXG4gICAgICAgIHZhciBQSVhFTF9TVEVQID0gMTA7XG4gICAgICAgIHZhciBMSU5FX0hFSUdIVCA9IDQwO1xuICAgICAgICB2YXIgUEFHRV9IRUlHSFQgPSA4MDA7XG4gICAgICAgIHZhciBzWCA9IDA7XG4gICAgICAgIHZhciBzWSA9IDA7IC8vIHNwaW5YLCBzcGluWVxuICAgICAgICB2YXIgcFggPSAwO1xuICAgICAgICB2YXIgcFkgPSAwOyAvLyBwaXhlbFgsIHBpeGVsWVxuICAgICAgICAvLyBMZWdhY3lcbiAgICAgICAgaWYgKCdkZXRhaWwnIGluIGUpIHtcbiAgICAgICAgICAgIHNZID0gZS5kZXRhaWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCd3aGVlbERlbHRhJyBpbiBlKSB7XG4gICAgICAgICAgICBzWSA9IC1lLndoZWVsRGVsdGEgLyAxMjA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCd3aGVlbERlbHRhWScgaW4gZSkge1xuICAgICAgICAgICAgc1kgPSAtZS53aGVlbERlbHRhWSAvIDEyMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3doZWVsRGVsdGFYJyBpbiBlKSB7XG4gICAgICAgICAgICBzWCA9IC1lLndoZWVsRGVsdGFYIC8gMTIwO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNpZGUgc2Nyb2xsaW5nIG9uIEZGIHdpdGggRE9NTW91c2VTY3JvbGxcbiAgICAgICAgaWYgKCdheGlzJyBpbiBlICYmIGUuYXhpcyA9PT0gZS5IT1JJWk9OVEFMX0FYSVMpIHtcbiAgICAgICAgICAgIHNYID0gc1k7XG4gICAgICAgICAgICBzWSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcFggPSBzWCAqIFBJWEVMX1NURVA7XG4gICAgICAgIHBZID0gc1kgKiBQSVhFTF9TVEVQO1xuICAgICAgICBpZiAoJ2RlbHRhWScgaW4gZSkge1xuICAgICAgICAgICAgcFkgPSBlLmRlbHRhWTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ2RlbHRhWCcgaW4gZSkge1xuICAgICAgICAgICAgcFggPSBlLmRlbHRhWDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHBYIHx8IHBZKSAmJiBlLmRlbHRhTW9kZSkge1xuICAgICAgICAgICAgaWYgKGUuZGVsdGFNb2RlID09PSAxKSB7IC8vIGRlbHRhIGluIExJTkUgdW5pdHNcbiAgICAgICAgICAgICAgICBwWCAqPSBMSU5FX0hFSUdIVDtcbiAgICAgICAgICAgICAgICBwWSAqPSBMSU5FX0hFSUdIVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgeyAvLyBkZWx0YSBpbiBQQUdFIHVuaXRzXG4gICAgICAgICAgICAgICAgcFggKj0gUEFHRV9IRUlHSFQ7XG4gICAgICAgICAgICAgICAgcFkgKj0gUEFHRV9IRUlHSFQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmFsbC1iYWNrIGlmIHNwaW4gY2Fubm90IGJlIGRldGVybWluZWRcbiAgICAgICAgaWYgKHBYICYmICFzWCkge1xuICAgICAgICAgICAgc1ggPSAocFggPCAxKSA/IC0xIDogMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocFkgJiYgIXNZKSB7XG4gICAgICAgICAgICBzWSA9IChwWSA8IDEpID8gLTEgOiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcGluWDogc1gsXG4gICAgICAgICAgICBzcGluWTogc1ksXG4gICAgICAgICAgICBwaXhlbFg6IHBYLFxuICAgICAgICAgICAgcGl4ZWxZOiBwWSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGhhbmRsZU1vdXNlRW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHN3aXBlci5tb3VzZUVudGVyZWQgPSB0cnVlO1xuICAgIH0sXG4gICAgaGFuZGxlTW91c2VMZWF2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgc3dpcGVyLm1vdXNlRW50ZXJlZCA9IGZhbHNlO1xuICAgIH0sXG4gICAgaGFuZGxlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGUgPSBldmVudDtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLm1vdXNld2hlZWw7XG4gICAgICAgIGlmICghc3dpcGVyLm1vdXNlRW50ZXJlZCAmJiAhcGFyYW1zLnJlbGVhc2VPbkVkZ2VzKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmIChlLm9yaWdpbmFsRXZlbnQpXG4gICAgICAgICAgICBlID0gZS5vcmlnaW5hbEV2ZW50OyAvLyBqcXVlcnkgZml4XG4gICAgICAgIHZhciBkZWx0YSA9IDA7XG4gICAgICAgIHZhciBydGxGYWN0b3IgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gLTEgOiAxO1xuICAgICAgICB2YXIgZGF0YSA9IE1vdXNld2hlZWwubm9ybWFsaXplKGUpO1xuICAgICAgICBpZiAocGFyYW1zLmZvcmNlVG9BeGlzKSB7XG4gICAgICAgICAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRhdGEucGl4ZWxYKSA+IE1hdGguYWJzKGRhdGEucGl4ZWxZKSlcbiAgICAgICAgICAgICAgICAgICAgZGVsdGEgPSBkYXRhLnBpeGVsWCAqIHJ0bEZhY3RvcjtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoZGF0YS5waXhlbFkpID4gTWF0aC5hYnMoZGF0YS5waXhlbFgpKVxuICAgICAgICAgICAgICAgIGRlbHRhID0gZGF0YS5waXhlbFk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWx0YSA9IE1hdGguYWJzKGRhdGEucGl4ZWxYKSA+IE1hdGguYWJzKGRhdGEucGl4ZWxZKSA/IC1kYXRhLnBpeGVsWCAqIHJ0bEZhY3RvciA6IC1kYXRhLnBpeGVsWTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsdGEgPT09IDApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHBhcmFtcy5pbnZlcnQpXG4gICAgICAgICAgICBkZWx0YSA9IC1kZWx0YTtcbiAgICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgICAgICAgICBpZiAoVXRpbHMubm93KCkgLSBzd2lwZXIubW91c2V3aGVlbC5sYXN0U2Nyb2xsVGltZSA+IDYwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKCFzd2lwZXIuaXNFbmQgfHwgc3dpcGVyLnBhcmFtcy5sb29wKSAmJiAhc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ3Njcm9sbCcsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmFtcy5yZWxlYXNlT25FZGdlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgoIXN3aXBlci5pc0JlZ2lubmluZyB8fCBzd2lwZXIucGFyYW1zLmxvb3ApICYmICFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlci5zbGlkZVByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ3Njcm9sbCcsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJhbXMucmVsZWFzZU9uRWRnZXMpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpcGVyLm1vdXNld2hlZWwubGFzdFNjcm9sbFRpbWUgPSAobmV3IHdpbi5EYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZyZWVtb2RlIG9yIHNjcm9sbENvbnRhaW5lcjpcbiAgICAgICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gc3dpcGVyLmdldFRyYW5zbGF0ZSgpICsgKGRlbHRhICogcGFyYW1zLnNlbnNpdGl2aXR5KTtcbiAgICAgICAgICAgIHZhciB3YXNCZWdpbm5pbmcgPSBzd2lwZXIuaXNCZWdpbm5pbmc7XG4gICAgICAgICAgICB2YXIgd2FzRW5kID0gc3dpcGVyLmlzRW5kO1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uID49IHN3aXBlci5taW5UcmFuc2xhdGUoKSlcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA8PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkpXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG4gICAgICAgICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcbiAgICAgICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUocG9zaXRpb24pO1xuICAgICAgICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICAgICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgICAgICAgICBpZiAoKCF3YXNCZWdpbm5pbmcgJiYgc3dpcGVyLmlzQmVnaW5uaW5nKSB8fCAoIXdhc0VuZCAmJiBzd2lwZXIuaXNFbmQpKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHN3aXBlci5tb3VzZXdoZWVsLnRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHN3aXBlci5tb3VzZXdoZWVsLnRpbWVvdXQgPSBVdGlscy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlci5zbGlkZVRvQ2xvc2VzdCgpO1xuICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBFbWl0IGV2ZW50XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgnc2Nyb2xsJywgZSk7XG4gICAgICAgICAgICAvLyBTdG9wIGF1dG9wbGF5XG4gICAgICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheSAmJiBzd2lwZXIucGFyYW1zLmF1dG9wbGF5RGlzYWJsZU9uSW50ZXJhY3Rpb24pXG4gICAgICAgICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnN0b3AoKTtcbiAgICAgICAgICAgIC8vIFJldHVybiBwYWdlIHNjcm9sbCBvbiBlZGdlIHBvc2l0aW9uc1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09PSBzd2lwZXIubWluVHJhbnNsYXRlKCkgfHwgcG9zaXRpb24gPT09IHN3aXBlci5tYXhUcmFuc2xhdGUoKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdClcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBlbmFibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmICghTW91c2V3aGVlbC5ldmVudClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHN3aXBlci5tb3VzZXdoZWVsLmVuYWJsZWQpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciB0YXJnZXQgPSBzd2lwZXIuJGVsO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdlZCAhPT0gJ2NvbnRhaW5lcicpIHtcbiAgICAgICAgICAgIHRhcmdldCA9ICQoc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdlZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0Lm9uKCdtb3VzZWVudGVyJywgc3dpcGVyLm1vdXNld2hlZWwuaGFuZGxlTW91c2VFbnRlcik7XG4gICAgICAgIHRhcmdldC5vbignbW91c2VsZWF2ZScsIHN3aXBlci5tb3VzZXdoZWVsLmhhbmRsZU1vdXNlTGVhdmUpO1xuICAgICAgICB0YXJnZXQub24oTW91c2V3aGVlbC5ldmVudCwgc3dpcGVyLm1vdXNld2hlZWwuaGFuZGxlKTtcbiAgICAgICAgc3dpcGVyLm1vdXNld2hlZWwuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgZGlzYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFNb3VzZXdoZWVsLmV2ZW50KVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoIXN3aXBlci5tb3VzZXdoZWVsLmVuYWJsZWQpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciB0YXJnZXQgPSBzd2lwZXIuJGVsO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdlZCAhPT0gJ2NvbnRhaW5lcicpIHtcbiAgICAgICAgICAgIHRhcmdldCA9ICQoc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdlZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0Lm9mZihNb3VzZXdoZWVsLmV2ZW50LCBzd2lwZXIubW91c2V3aGVlbC5oYW5kbGUpO1xuICAgICAgICBzd2lwZXIubW91c2V3aGVlbC5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG59O1xudmFyIFBhZ2luYXRpb24gPSB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFJlbmRlciB8fCBVcGRhdGUgUGFnaW5hdGlvbiBidWxsZXRzL2l0ZW1zXG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICB2YXIgcnRsID0gc3dpcGVyLnJ0bDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbjtcbiAgICAgICAgaWYgKCFwYXJhbXMuZWwgfHwgIXN3aXBlci5wYWdpbmF0aW9uLmVsIHx8ICFzd2lwZXIucGFnaW5hdGlvbi4kZWwgfHwgc3dpcGVyLnBhZ2luYXRpb24uJGVsLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHNsaWRlc0xlbmd0aCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCA6IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuICAgICAgICB2YXIgJGVsID0gc3dpcGVyLnBhZ2luYXRpb24uJGVsO1xuICAgICAgICAvLyBDdXJyZW50L1RvdGFsXG4gICAgICAgIHZhciBjdXJyZW50O1xuICAgICAgICB2YXIgdG90YWwgPSBzd2lwZXIucGFyYW1zLmxvb3AgPyBNYXRoLmNlaWwoKHNsaWRlc0xlbmd0aCAtIChzd2lwZXIubG9vcGVkU2xpZGVzICogMikpIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCkgOiBzd2lwZXIuc25hcEdyaWQubGVuZ3RoO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gTWF0aC5jZWlsKChzd2lwZXIuYWN0aXZlSW5kZXggLSBzd2lwZXIubG9vcGVkU2xpZGVzKSAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPiBzbGlkZXNMZW5ndGggLSAxIC0gKHN3aXBlci5sb29wZWRTbGlkZXMgKiAyKSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgLT0gKHNsaWRlc0xlbmd0aCAtIChzd2lwZXIubG9vcGVkU2xpZGVzICogMikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPiB0b3RhbCAtIDEpXG4gICAgICAgICAgICAgICAgY3VycmVudCAtPSB0b3RhbDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50IDwgMCAmJiBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb25UeXBlICE9PSAnYnVsbGV0cycpXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IHRvdGFsICsgY3VycmVudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc3dpcGVyLnNuYXBJbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBzd2lwZXIuc25hcEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudCA9IHN3aXBlci5hY3RpdmVJbmRleCB8fCAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIFR5cGVzXG4gICAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2J1bGxldHMnICYmIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMgJiYgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgYnVsbGV0cyA9IHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHM7XG4gICAgICAgICAgICB2YXIgZmlyc3RJbmRleF8xO1xuICAgICAgICAgICAgdmFyIGxhc3RJbmRleF8xO1xuICAgICAgICAgICAgdmFyIG1pZEluZGV4ID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5keW5hbWljQnVsbGV0cykge1xuICAgICAgICAgICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldFNpemUgPSBidWxsZXRzLmVxKDApW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdvdXRlcldpZHRoJyA6ICdvdXRlckhlaWdodCddKHRydWUpO1xuICAgICAgICAgICAgICAgICRlbC5jc3Moc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3dpZHRoJyA6ICdoZWlnaHQnLCBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRTaXplICogKHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgKyA0KSArIFwicHhcIik7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgPiAxICYmIHN3aXBlci5wcmV2aW91c0luZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4ICs9IChjdXJyZW50IC0gc3dpcGVyLnByZXZpb3VzSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4ID4gKHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4ID0gcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc3dpcGVyLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaXJzdEluZGV4XzEgPSBjdXJyZW50IC0gc3dpcGVyLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4O1xuICAgICAgICAgICAgICAgIGxhc3RJbmRleF8xID0gZmlyc3RJbmRleF8xICsgKE1hdGgubWluKGJ1bGxldHMubGVuZ3RoLCBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzKSAtIDEpO1xuICAgICAgICAgICAgICAgIG1pZEluZGV4ID0gKGxhc3RJbmRleF8xICsgZmlyc3RJbmRleF8xKSAvIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidWxsZXRzLnJlbW92ZUNsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiIFwiICsgcGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItbmV4dCBcIiArIHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLW5leHQtbmV4dCBcIiArIHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLXByZXYgXCIgKyBwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1wcmV2LXByZXYgXCIgKyBwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1tYWluXCIpO1xuICAgICAgICAgICAgaWYgKCRlbC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgYnVsbGV0cy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgYnVsbGV0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkYnVsbGV0ID0gJChidWxsZXQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYnVsbGV0SW5kZXggPSAkYnVsbGV0LmluZGV4KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChidWxsZXRJbmRleCA9PT0gY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGJ1bGxldC5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuZHluYW1pY0J1bGxldHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidWxsZXRJbmRleCA+PSBmaXJzdEluZGV4XzEgJiYgYnVsbGV0SW5kZXggPD0gbGFzdEluZGV4XzEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYnVsbGV0LmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLW1haW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPT09IGZpcnN0SW5kZXhfMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRidWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByZXYoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItcHJldlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJldigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1wcmV2LXByZXZcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPT09IGxhc3RJbmRleF8xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJ1bGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmV4dCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1uZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uZXh0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLW5leHQtbmV4dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyICRidWxsZXQgPSBidWxsZXRzLmVxKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICRidWxsZXQuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkZmlyc3REaXNwbGF5ZWRCdWxsZXQgPSBidWxsZXRzLmVxKGZpcnN0SW5kZXhfMSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkbGFzdERpc3BsYXllZEJ1bGxldCA9IGJ1bGxldHMuZXEobGFzdEluZGV4XzEpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gZmlyc3RJbmRleF8xOyBpIDw9IGxhc3RJbmRleF8xOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldHMuZXEoaSkuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItbWFpblwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkZmlyc3REaXNwbGF5ZWRCdWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmV2KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1wcmV2XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJldigpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzICsgXCItcHJldi1wcmV2XCIpO1xuICAgICAgICAgICAgICAgICAgICAkbGFzdERpc3BsYXllZEJ1bGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyArIFwiLW5leHRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5uZXh0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MgKyBcIi1uZXh0LW5leHRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtcy5keW5hbWljQnVsbGV0cykge1xuICAgICAgICAgICAgICAgIHZhciBkeW5hbWljQnVsbGV0c0xlbmd0aCA9IE1hdGgubWluKGJ1bGxldHMubGVuZ3RoLCBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzICsgNCk7XG4gICAgICAgICAgICAgICAgdmFyIGJ1bGxldHNPZmZzZXQgPSAoKChzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRTaXplICogZHluYW1pY0J1bGxldHNMZW5ndGgpIC0gKHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldFNpemUpKSAvIDIpIC0gKG1pZEluZGV4ICogc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0U2l6ZSk7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldFByb3AgPSBydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgICAgICAgICAgIGJ1bGxldHMuY3NzKHN3aXBlci5pc0hvcml6b250YWwoKSA/IG9mZnNldFByb3AgOiAndG9wJywgYnVsbGV0c09mZnNldCArIFwicHhcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy50eXBlID09PSAnZnJhY3Rpb24nKSB7XG4gICAgICAgICAgICAkZWwuZmluZChcIi5cIiArIHBhcmFtcy5jdXJyZW50Q2xhc3MpLnRleHQocGFyYW1zLmZvcm1hdEZyYWN0aW9uQ3VycmVudChjdXJyZW50ICsgMSkpO1xuICAgICAgICAgICAgJGVsLmZpbmQoXCIuXCIgKyBwYXJhbXMudG90YWxDbGFzcykudGV4dChwYXJhbXMuZm9ybWF0RnJhY3Rpb25Ub3RhbCh0b3RhbCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ3Byb2dyZXNzYmFyJykge1xuICAgICAgICAgICAgdmFyIHByb2dyZXNzYmFyRGlyZWN0aW9uID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5wcm9ncmVzc2Jhck9wcG9zaXRlKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NiYXJEaXJlY3Rpb24gPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NiYXJEaXJlY3Rpb24gPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNjYWxlID0gKGN1cnJlbnQgKyAxKSAvIHRvdGFsO1xuICAgICAgICAgICAgdmFyIHNjYWxlWCA9IDE7XG4gICAgICAgICAgICB2YXIgc2NhbGVZID0gMTtcbiAgICAgICAgICAgIGlmIChwcm9ncmVzc2JhckRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgc2NhbGVYID0gc2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY2FsZVkgPSBzY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICRlbC5maW5kKFwiLlwiICsgcGFyYW1zLnByb2dyZXNzYmFyRmlsbENsYXNzKS50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGVYKFwiICsgc2NhbGVYICsgXCIpIHNjYWxlWShcIiArIHNjYWxlWSArIFwiKVwiKS50cmFuc2l0aW9uKHN3aXBlci5wYXJhbXMuc3BlZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2N1c3RvbScgJiYgcGFyYW1zLnJlbmRlckN1c3RvbSkge1xuICAgICAgICAgICAgJGVsLmh0bWwocGFyYW1zLnJlbmRlckN1c3RvbShzd2lwZXIsIGN1cnJlbnQgKyAxLCB0b3RhbCkpO1xuICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ3BhZ2luYXRpb25SZW5kZXInLCBzd2lwZXIsICRlbFswXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgncGFnaW5hdGlvblVwZGF0ZScsIHN3aXBlciwgJGVsWzBdKTtcbiAgICAgICAgfVxuICAgICAgICAkZWxbc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnXShwYXJhbXMubG9ja0NsYXNzKTtcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBSZW5kZXIgQ29udGFpbmVyXG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uO1xuICAgICAgICBpZiAoIXBhcmFtcy5lbCB8fCAhc3dpcGVyLnBhZ2luYXRpb24uZWwgfHwgIXN3aXBlci5wYWdpbmF0aW9uLiRlbCB8fCBzd2lwZXIucGFnaW5hdGlvbi4kZWwubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgc2xpZGVzTGVuZ3RoID0gc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQgPyBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoIDogc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG4gICAgICAgIHZhciAkZWwgPSBzd2lwZXIucGFnaW5hdGlvbi4kZWw7XG4gICAgICAgIHZhciBwYWdpbmF0aW9uSFRNTCA9ICcnO1xuICAgICAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdidWxsZXRzJykge1xuICAgICAgICAgICAgdmFyIG51bWJlck9mQnVsbGV0cyA9IHN3aXBlci5wYXJhbXMubG9vcCA/IE1hdGguY2VpbCgoc2xpZGVzTGVuZ3RoIC0gKHN3aXBlci5sb29wZWRTbGlkZXMgKiAyKSkgLyBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwKSA6IHN3aXBlci5zbmFwR3JpZC5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mQnVsbGV0czsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5yZW5kZXJCdWxsZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkhUTUwgKz0gcGFyYW1zLnJlbmRlckJ1bGxldC5jYWxsKHN3aXBlciwgaSwgcGFyYW1zLmJ1bGxldENsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25IVE1MICs9IFwiPFwiICsgcGFyYW1zLmJ1bGxldEVsZW1lbnQgKyBcIiBjbGFzcz1cXFwiXCIgKyBwYXJhbXMuYnVsbGV0Q2xhc3MgKyBcIlxcXCI+PC9cIiArIHBhcmFtcy5idWxsZXRFbGVtZW50ICsgXCI+XCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJGVsLmh0bWwocGFnaW5hdGlvbkhUTUwpO1xuICAgICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyA9ICRlbC5maW5kKFwiLlwiICsgcGFyYW1zLmJ1bGxldENsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdmcmFjdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMucmVuZGVyRnJhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uSFRNTCA9IHBhcmFtcy5yZW5kZXJGcmFjdGlvbi5jYWxsKHN3aXBlciwgcGFyYW1zLmN1cnJlbnRDbGFzcywgcGFyYW1zLnRvdGFsQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBcIjxzcGFuIGNsYXNzPVxcXCJcIiArIHBhcmFtcy5jdXJyZW50Q2xhc3MgKyBcIlxcXCI+PC9zcGFuPlwiXG4gICAgICAgICAgICAgICAgICAgICsgJyAvICdcbiAgICAgICAgICAgICAgICAgICAgKyAoXCI8c3BhbiBjbGFzcz1cXFwiXCIgKyBwYXJhbXMudG90YWxDbGFzcyArIFwiXFxcIj48L3NwYW4+XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJGVsLmh0bWwocGFnaW5hdGlvbkhUTUwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ3Byb2dyZXNzYmFyJykge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5yZW5kZXJQcm9ncmVzc2Jhcikge1xuICAgICAgICAgICAgICAgIHBhZ2luYXRpb25IVE1MID0gcGFyYW1zLnJlbmRlclByb2dyZXNzYmFyLmNhbGwoc3dpcGVyLCBwYXJhbXMucHJvZ3Jlc3NiYXJGaWxsQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBcIjxzcGFuIGNsYXNzPVxcXCJcIiArIHBhcmFtcy5wcm9ncmVzc2JhckZpbGxDbGFzcyArIFwiXFxcIj48L3NwYW4+XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkZWwuaHRtbChwYWdpbmF0aW9uSFRNTCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy50eXBlICE9PSAnY3VzdG9tJykge1xuICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ3BhZ2luYXRpb25SZW5kZXInLCBzd2lwZXIucGFnaW5hdGlvbi4kZWxbMF0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uO1xuICAgICAgICBpZiAoIXBhcmFtcy5lbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyICRlbCA9ICQocGFyYW1zLmVsKTtcbiAgICAgICAgaWYgKCRlbC5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzXG4gICAgICAgICAgICAmJiB0eXBlb2YgcGFyYW1zLmVsID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgJiYgJGVsLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICYmIHN3aXBlci4kZWwuZmluZChwYXJhbXMuZWwpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgJGVsID0gc3dpcGVyLiRlbC5maW5kKHBhcmFtcy5lbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy50eXBlID09PSAnYnVsbGV0cycgJiYgcGFyYW1zLmNsaWNrYWJsZSkge1xuICAgICAgICAgICAgJGVsLmFkZENsYXNzKHBhcmFtcy5jbGlja2FibGVDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgJGVsLmFkZENsYXNzKHBhcmFtcy5tb2RpZmllckNsYXNzICsgcGFyYW1zLnR5cGUpO1xuICAgICAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdidWxsZXRzJyAmJiBwYXJhbXMuZHluYW1pY0J1bGxldHMpIHtcbiAgICAgICAgICAgICRlbC5hZGRDbGFzcyhcIlwiICsgcGFyYW1zLm1vZGlmaWVyQ2xhc3MgKyBwYXJhbXMudHlwZSArIFwiLWR5bmFtaWNcIik7XG4gICAgICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5keW5hbWljQnVsbGV0SW5kZXggPSAwO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgPCAxKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy50eXBlID09PSAncHJvZ3Jlc3NiYXInICYmIHBhcmFtcy5wcm9ncmVzc2Jhck9wcG9zaXRlKSB7XG4gICAgICAgICAgICAkZWwuYWRkQ2xhc3MocGFyYW1zLnByb2dyZXNzYmFyT3Bwb3NpdGVDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5jbGlja2FibGUpIHtcbiAgICAgICAgICAgICRlbC5vbignY2xpY2snLCBcIi5cIiArIHBhcmFtcy5idWxsZXRDbGFzcywgZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKSAqIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gICAgICAgICAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcClcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggKz0gc3dpcGVyLmxvb3BlZFNsaWRlcztcbiAgICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBVdGlscy5leHRlbmQoc3dpcGVyLnBhZ2luYXRpb24sIHtcbiAgICAgICAgICAgICRlbDogJGVsLFxuICAgICAgICAgICAgZWw6ICRlbFswXSxcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uO1xuICAgICAgICBpZiAoIXBhcmFtcy5lbCB8fCAhc3dpcGVyLnBhZ2luYXRpb24uZWwgfHwgIXN3aXBlci5wYWdpbmF0aW9uLiRlbCB8fCBzd2lwZXIucGFnaW5hdGlvbi4kZWwubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgJGVsID0gc3dpcGVyLnBhZ2luYXRpb24uJGVsO1xuICAgICAgICAkZWwucmVtb3ZlQ2xhc3MocGFyYW1zLmhpZGRlbkNsYXNzKTtcbiAgICAgICAgJGVsLnJlbW92ZUNsYXNzKHBhcmFtcy5tb2RpZmllckNsYXNzICsgcGFyYW1zLnR5cGUpO1xuICAgICAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cylcbiAgICAgICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMucmVtb3ZlQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgaWYgKHBhcmFtcy5jbGlja2FibGUpIHtcbiAgICAgICAgICAgICRlbC5vZmYoJ2NsaWNrJywgXCIuXCIgKyBwYXJhbXMuYnVsbGV0Q2xhc3MpO1xuICAgICAgICB9XG4gICAgfSxcbn07XG52YXIgcGFnaW5hdGlvbiA9IHtcbiAgICBuYW1lOiAncGFnaW5hdGlvbicsXG4gICAgcGFyYW1zOiB7XG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIGVsOiBudWxsLFxuICAgICAgICAgICAgYnVsbGV0RWxlbWVudDogJ3NwYW4nLFxuICAgICAgICAgICAgY2xpY2thYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGhpZGVPbkNsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgIHJlbmRlckJ1bGxldDogbnVsbCxcbiAgICAgICAgICAgIHJlbmRlclByb2dyZXNzYmFyOiBudWxsLFxuICAgICAgICAgICAgcmVuZGVyRnJhY3Rpb246IG51bGwsXG4gICAgICAgICAgICByZW5kZXJDdXN0b206IG51bGwsXG4gICAgICAgICAgICBwcm9ncmVzc2Jhck9wcG9zaXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6ICdidWxsZXRzJyxcbiAgICAgICAgICAgIGR5bmFtaWNCdWxsZXRzOiBmYWxzZSxcbiAgICAgICAgICAgIGR5bmFtaWNNYWluQnVsbGV0czogMSxcbiAgICAgICAgICAgIGZvcm1hdEZyYWN0aW9uQ3VycmVudDogZnVuY3Rpb24gKG51bWJlcikgeyByZXR1cm4gbnVtYmVyOyB9LFxuICAgICAgICAgICAgZm9ybWF0RnJhY3Rpb25Ub3RhbDogZnVuY3Rpb24gKG51bWJlcikgeyByZXR1cm4gbnVtYmVyOyB9LFxuICAgICAgICAgICAgYnVsbGV0Q2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1idWxsZXQnLFxuICAgICAgICAgICAgYnVsbGV0QWN0aXZlQ2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlJyxcbiAgICAgICAgICAgIG1vZGlmaWVyQ2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi0nLFxuICAgICAgICAgICAgY3VycmVudENsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tY3VycmVudCcsXG4gICAgICAgICAgICB0b3RhbENsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tdG90YWwnLFxuICAgICAgICAgICAgaGlkZGVuQ2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1oaWRkZW4nLFxuICAgICAgICAgICAgcHJvZ3Jlc3NiYXJGaWxsQ2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1maWxsJyxcbiAgICAgICAgICAgIHByb2dyZXNzYmFyT3Bwb3NpdGVDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRlJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZUNsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tY2xpY2thYmxlJyxcbiAgICAgICAgICAgIGxvY2tDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWxvY2snLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBVdGlscy5leHRlbmQoc3dpcGVyLCB7XG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgaW5pdDogUGFnaW5hdGlvbi5pbml0LmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICAgICAgICByZW5kZXI6IFBhZ2luYXRpb24ucmVuZGVyLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IFBhZ2luYXRpb24udXBkYXRlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICAgICAgICBkZXN0cm95OiBQYWdpbmF0aW9uLmRlc3Ryb3kuYmluZChzd2lwZXIpLFxuICAgICAgICAgICAgICAgIGR5bmFtaWNCdWxsZXRJbmRleDogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5pbml0KCk7XG4gICAgICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5yZW5kZXIoKTtcbiAgICAgICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLnVwZGF0ZSgpO1xuICAgICAgICB9LFxuICAgICAgICBhY3RpdmVJbmRleENoYW5nZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24udXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc3dpcGVyLnNuYXBJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc25hcEluZGV4Q2hhbmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24udXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNsaWRlc0xlbmd0aENoYW5nZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24ucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24udXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNuYXBHcmlkTGVuZ3RoQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24ucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24udXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24uZGVzdHJveSgpO1xuICAgICAgICB9LFxuICAgICAgICBjbGljazogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5lbFxuICAgICAgICAgICAgICAgICYmIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5oaWRlT25DbGlja1xuICAgICAgICAgICAgICAgICYmIHN3aXBlci5wYWdpbmF0aW9uLiRlbC5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgJiYgISQoZS50YXJnZXQpLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5idWxsZXRDbGFzcykpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNIaWRkZW4gPSBzd2lwZXIucGFnaW5hdGlvbi4kZWwuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmhpZGRlbkNsYXNzKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNIaWRkZW4gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ3BhZ2luYXRpb25TaG93Jywgc3dpcGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlci5lbWl0KCdwYWdpbmF0aW9uSGlkZScsIHN3aXBlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLiRlbC50b2dnbGVDbGFzcyhzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uaGlkZGVuQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG59O1xudmFyIFNjcm9sbGJhciA9IHtcbiAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZWwgfHwgIXN3aXBlci5zY3JvbGxiYXIuZWwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBzY3JvbGxiYXIgPSBzd2lwZXIuc2Nyb2xsYmFyLCBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlLCBwcm9ncmVzcyA9IHN3aXBlci5wcm9ncmVzcztcbiAgICAgICAgdmFyIGRyYWdTaXplID0gc2Nyb2xsYmFyLmRyYWdTaXplLCB0cmFja1NpemUgPSBzY3JvbGxiYXIudHJhY2tTaXplLCAkZHJhZ0VsID0gc2Nyb2xsYmFyLiRkcmFnRWwsICRlbCA9IHNjcm9sbGJhci4kZWw7XG4gICAgICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnNjcm9sbGJhcjtcbiAgICAgICAgdmFyIG5ld1NpemUgPSBkcmFnU2l6ZTtcbiAgICAgICAgdmFyIG5ld1BvcyA9ICh0cmFja1NpemUgLSBkcmFnU2l6ZSkgKiBwcm9ncmVzcztcbiAgICAgICAgaWYgKHJ0bCkge1xuICAgICAgICAgICAgbmV3UG9zID0gLW5ld1BvcztcbiAgICAgICAgICAgIGlmIChuZXdQb3MgPiAwKSB7XG4gICAgICAgICAgICAgICAgbmV3U2l6ZSA9IGRyYWdTaXplIC0gbmV3UG9zO1xuICAgICAgICAgICAgICAgIG5ld1BvcyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgtbmV3UG9zICsgZHJhZ1NpemUgPiB0cmFja1NpemUpIHtcbiAgICAgICAgICAgICAgICBuZXdTaXplID0gdHJhY2tTaXplICsgbmV3UG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5ld1BvcyA8IDApIHtcbiAgICAgICAgICAgIG5ld1NpemUgPSBkcmFnU2l6ZSArIG5ld1BvcztcbiAgICAgICAgICAgIG5ld1BvcyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3UG9zICsgZHJhZ1NpemUgPiB0cmFja1NpemUpIHtcbiAgICAgICAgICAgIG5ld1NpemUgPSB0cmFja1NpemUgLSBuZXdQb3M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgaWYgKFN1cHBvcnQudHJhbnNmb3JtczNkKSB7XG4gICAgICAgICAgICAgICAgJGRyYWdFbC50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZChcIiArIG5ld1BvcyArIFwicHgsIDAsIDApXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgJGRyYWdFbC50cmFuc2Zvcm0oXCJ0cmFuc2xhdGVYKFwiICsgbmV3UG9zICsgXCJweClcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkZHJhZ0VsWzBdLnN0eWxlLndpZHRoID0gbmV3U2l6ZSArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChTdXBwb3J0LnRyYW5zZm9ybXMzZCkge1xuICAgICAgICAgICAgICAgICRkcmFnRWwudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMHB4LCBcIiArIG5ld1BvcyArIFwicHgsIDApXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgJGRyYWdFbC50cmFuc2Zvcm0oXCJ0cmFuc2xhdGVZKFwiICsgbmV3UG9zICsgXCJweClcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkZHJhZ0VsWzBdLnN0eWxlLmhlaWdodCA9IG5ld1NpemUgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5oaWRlKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoc3dpcGVyLnNjcm9sbGJhci50aW1lb3V0KTtcbiAgICAgICAgICAgICRlbFswXS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIHN3aXBlci5zY3JvbGxiYXIudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRlbFswXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAkZWwudHJhbnNpdGlvbig0MDApO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbCB8fCAhc3dpcGVyLnNjcm9sbGJhci5lbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc3dpcGVyLnNjcm9sbGJhci4kZHJhZ0VsLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgIH0sXG4gICAgdXBkYXRlU2l6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbCB8fCAhc3dpcGVyLnNjcm9sbGJhci5lbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHNjcm9sbGJhciA9IHN3aXBlci5zY3JvbGxiYXI7XG4gICAgICAgIHZhciAkZHJhZ0VsID0gc2Nyb2xsYmFyLiRkcmFnRWwsICRlbCA9IHNjcm9sbGJhci4kZWw7XG4gICAgICAgICRkcmFnRWxbMF0uc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgJGRyYWdFbFswXS5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgICAgdmFyIHRyYWNrU2l6ZSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/ICRlbFswXS5vZmZzZXRXaWR0aCA6ICRlbFswXS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHZhciBkaXZpZGVyID0gc3dpcGVyLnNpemUgLyBzd2lwZXIudmlydHVhbFNpemU7XG4gICAgICAgIHZhciBtb3ZlRGl2aWRlciA9IGRpdmlkZXIgKiAodHJhY2tTaXplIC8gc3dpcGVyLnNpemUpO1xuICAgICAgICB2YXIgZHJhZ1NpemU7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5kcmFnU2l6ZSA9PT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICBkcmFnU2l6ZSA9IHRyYWNrU2l6ZSAqIGRpdmlkZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkcmFnU2l6ZSA9IHBhcnNlSW50KHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmRyYWdTaXplLCAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgICAgJGRyYWdFbFswXS5zdHlsZS53aWR0aCA9IGRyYWdTaXplICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgJGRyYWdFbFswXS5zdHlsZS5oZWlnaHQgPSBkcmFnU2l6ZSArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGl2aWRlciA+PSAxKSB7XG4gICAgICAgICAgICAkZWxbMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICRlbFswXS5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmhpZGUpIHtcbiAgICAgICAgICAgICRlbFswXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBVdGlscy5leHRlbmQoc2Nyb2xsYmFyLCB7XG4gICAgICAgICAgICB0cmFja1NpemU6IHRyYWNrU2l6ZSxcbiAgICAgICAgICAgIGRpdmlkZXI6IGRpdmlkZXIsXG4gICAgICAgICAgICBtb3ZlRGl2aWRlcjogbW92ZURpdmlkZXIsXG4gICAgICAgICAgICBkcmFnU2l6ZTogZHJhZ1NpemUsXG4gICAgICAgIH0pO1xuICAgICAgICBzY3JvbGxiYXIuJGVsW3N3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuaXNMb2NrZWQgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJ10oc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIubG9ja0NsYXNzKTtcbiAgICB9LFxuICAgIGdldFBvaW50ZXJQb3NpdGlvbjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICAgIHJldHVybiAoKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3RvdWNobW92ZScpID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWCB8fCBlLmNsaWVudFgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3RvdWNobW92ZScpID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWSB8fCBlLmNsaWVudFkpO1xuICAgIH0sXG4gICAgc2V0RHJhZ1Bvc2l0aW9uOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgdmFyIHNjcm9sbGJhciA9IHN3aXBlci5zY3JvbGxiYXIsIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG4gICAgICAgIHZhciAkZWwgPSBzY3JvbGxiYXIuJGVsLCBkcmFnU2l6ZSA9IHNjcm9sbGJhci5kcmFnU2l6ZSwgdHJhY2tTaXplID0gc2Nyb2xsYmFyLnRyYWNrU2l6ZSwgZHJhZ1N0YXJ0UG9zID0gc2Nyb2xsYmFyLmRyYWdTdGFydFBvcztcbiAgICAgICAgdmFyIHBvc2l0aW9uUmF0aW87XG4gICAgICAgIHBvc2l0aW9uUmF0aW8gPSAoKHNjcm9sbGJhci5nZXRQb2ludGVyUG9zaXRpb24oZSkpIC0gJGVsLm9mZnNldCgpW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdsZWZ0JyA6ICd0b3AnXVxuICAgICAgICAgICAgLSAoZHJhZ1N0YXJ0UG9zICE9PSBudWxsID8gZHJhZ1N0YXJ0UG9zIDogZHJhZ1NpemUgLyAyKSkgLyAodHJhY2tTaXplIC0gZHJhZ1NpemUpO1xuICAgICAgICBwb3NpdGlvblJhdGlvID0gTWF0aC5tYXgoTWF0aC5taW4ocG9zaXRpb25SYXRpbywgMSksIDApO1xuICAgICAgICBpZiAocnRsKSB7XG4gICAgICAgICAgICBwb3NpdGlvblJhdGlvID0gMSAtIHBvc2l0aW9uUmF0aW87XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBvc2l0aW9uID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpICsgKChzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpICogcG9zaXRpb25SYXRpbyk7XG4gICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhwb3NpdGlvbik7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUocG9zaXRpb24pO1xuICAgICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICB9LFxuICAgIG9uRHJhZ1N0YXJ0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyO1xuICAgICAgICB2YXIgc2Nyb2xsYmFyID0gc3dpcGVyLnNjcm9sbGJhciwgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsO1xuICAgICAgICB2YXIgJGVsID0gc2Nyb2xsYmFyLiRlbCwgJGRyYWdFbCA9IHNjcm9sbGJhci4kZHJhZ0VsO1xuICAgICAgICBzd2lwZXIuc2Nyb2xsYmFyLmlzVG91Y2hlZCA9IHRydWU7XG4gICAgICAgIHN3aXBlci5zY3JvbGxiYXIuZHJhZ1N0YXJ0UG9zID0gKGUudGFyZ2V0ID09PSAkZHJhZ0VsWzBdIHx8IGUudGFyZ2V0ID09PSAkZHJhZ0VsKVxuICAgICAgICAgICAgPyBzY3JvbGxiYXIuZ2V0UG9pbnRlclBvc2l0aW9uKGUpIC0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2xlZnQnIDogJ3RvcCddIDogbnVsbDtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAkd3JhcHBlckVsLnRyYW5zaXRpb24oMTAwKTtcbiAgICAgICAgJGRyYWdFbC50cmFuc2l0aW9uKDEwMCk7XG4gICAgICAgIHNjcm9sbGJhci5zZXREcmFnUG9zaXRpb24oZSk7XG4gICAgICAgIGNsZWFyVGltZW91dChzd2lwZXIuc2Nyb2xsYmFyLmRyYWdUaW1lb3V0KTtcbiAgICAgICAgJGVsLnRyYW5zaXRpb24oMCk7XG4gICAgICAgIGlmIChwYXJhbXMuaGlkZSkge1xuICAgICAgICAgICAgJGVsLmNzcygnb3BhY2l0eScsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXBlci5lbWl0KCdzY3JvbGxiYXJEcmFnU3RhcnQnLCBlKTtcbiAgICB9LFxuICAgIG9uRHJhZ01vdmU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICB2YXIgc2Nyb2xsYmFyID0gc3dpcGVyLnNjcm9sbGJhciwgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsO1xuICAgICAgICB2YXIgJGVsID0gc2Nyb2xsYmFyLiRlbCwgJGRyYWdFbCA9IHNjcm9sbGJhci4kZHJhZ0VsO1xuICAgICAgICBpZiAoIXN3aXBlci5zY3JvbGxiYXIuaXNUb3VjaGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdClcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICBzY3JvbGxiYXIuc2V0RHJhZ1Bvc2l0aW9uKGUpO1xuICAgICAgICAkd3JhcHBlckVsLnRyYW5zaXRpb24oMCk7XG4gICAgICAgICRlbC50cmFuc2l0aW9uKDApO1xuICAgICAgICAkZHJhZ0VsLnRyYW5zaXRpb24oMCk7XG4gICAgICAgIHN3aXBlci5lbWl0KCdzY3JvbGxiYXJEcmFnTW92ZScsIGUpO1xuICAgIH0sXG4gICAgb25EcmFnRW5kOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyO1xuICAgICAgICB2YXIgc2Nyb2xsYmFyID0gc3dpcGVyLnNjcm9sbGJhcjtcbiAgICAgICAgdmFyICRlbCA9IHNjcm9sbGJhci4kZWw7XG4gICAgICAgIGlmICghc3dpcGVyLnNjcm9sbGJhci5pc1RvdWNoZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHN3aXBlci5zY3JvbGxiYXIuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChwYXJhbXMuaGlkZSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHN3aXBlci5zY3JvbGxiYXIuZHJhZ1RpbWVvdXQpO1xuICAgICAgICAgICAgc3dpcGVyLnNjcm9sbGJhci5kcmFnVGltZW91dCA9IFV0aWxzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkZWwuY3NzKCdvcGFjaXR5JywgMCk7XG4gICAgICAgICAgICAgICAgJGVsLnRyYW5zaXRpb24oNDAwKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgICAgIHN3aXBlci5lbWl0KCdzY3JvbGxiYXJEcmFnRW5kJywgZSk7XG4gICAgICAgIGlmIChwYXJhbXMuc25hcE9uUmVsZWFzZSkge1xuICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG9DbG9zZXN0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGVuYWJsZURyYWdnYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHNjcm9sbGJhciA9IHN3aXBlci5zY3JvbGxiYXIsIHRvdWNoRXZlbnRzVG91Y2ggPSBzd2lwZXIudG91Y2hFdmVudHNUb3VjaCwgdG91Y2hFdmVudHNEZXNrdG9wID0gc3dpcGVyLnRvdWNoRXZlbnRzRGVza3RvcCwgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgICAgICAgdmFyICRlbCA9IHNjcm9sbGJhci4kZWw7XG4gICAgICAgIHZhciB0YXJnZXQgPSAkZWxbMF07XG4gICAgICAgIHZhciBhY3RpdmVMaXN0ZW5lciA9IFN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8geyBwYXNzaXZlOiBmYWxzZSwgY2FwdHVyZTogZmFsc2UgfSA6IGZhbHNlO1xuICAgICAgICB2YXIgcGFzc2l2ZUxpc3RlbmVyID0gU3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgcGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7IHBhc3NpdmU6IHRydWUsIGNhcHR1cmU6IGZhbHNlIH0gOiBmYWxzZTtcbiAgICAgICAgaWYgKCFTdXBwb3J0LnRvdWNoKSB7XG4gICAgICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c0Rlc2t0b3Auc3RhcnQsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnU3RhcnQsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzRGVza3RvcC5tb3ZlLCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ01vdmUsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzRGVza3RvcC5lbmQsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNUb3VjaC5zdGFydCwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdTdGFydCwgYWN0aXZlTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNUb3VjaC5tb3ZlLCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ01vdmUsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzVG91Y2guZW5kLCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ0VuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGlzYWJsZURyYWdnYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHNjcm9sbGJhciA9IHN3aXBlci5zY3JvbGxiYXIsIHRvdWNoRXZlbnRzVG91Y2ggPSBzd2lwZXIudG91Y2hFdmVudHNUb3VjaCwgdG91Y2hFdmVudHNEZXNrdG9wID0gc3dpcGVyLnRvdWNoRXZlbnRzRGVza3RvcCwgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgICAgICAgdmFyICRlbCA9IHNjcm9sbGJhci4kZWw7XG4gICAgICAgIHZhciB0YXJnZXQgPSAkZWxbMF07XG4gICAgICAgIHZhciBhY3RpdmVMaXN0ZW5lciA9IFN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8geyBwYXNzaXZlOiBmYWxzZSwgY2FwdHVyZTogZmFsc2UgfSA6IGZhbHNlO1xuICAgICAgICB2YXIgcGFzc2l2ZUxpc3RlbmVyID0gU3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgcGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7IHBhc3NpdmU6IHRydWUsIGNhcHR1cmU6IGZhbHNlIH0gOiBmYWxzZTtcbiAgICAgICAgaWYgKCFTdXBwb3J0LnRvdWNoKSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c0Rlc2t0b3Auc3RhcnQsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnU3RhcnQsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzRGVza3RvcC5tb3ZlLCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ01vdmUsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzRGVza3RvcC5lbmQsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNUb3VjaC5zdGFydCwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdTdGFydCwgYWN0aXZlTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNUb3VjaC5tb3ZlLCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ01vdmUsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzVG91Y2guZW5kLCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ0VuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHNjcm9sbGJhciA9IHN3aXBlci5zY3JvbGxiYXIsICRzd2lwZXJFbCA9IHN3aXBlci4kZWw7XG4gICAgICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnNjcm9sbGJhcjtcbiAgICAgICAgdmFyICRlbCA9ICQocGFyYW1zLmVsKTtcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIHBhcmFtcy5lbCA9PT0gJ3N0cmluZycgJiYgJGVsLmxlbmd0aCA+IDEgJiYgJHN3aXBlckVsLmZpbmQocGFyYW1zLmVsKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICRlbCA9ICRzd2lwZXJFbC5maW5kKHBhcmFtcy5lbCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyICRkcmFnRWwgPSAkZWwuZmluZChcIi5cIiArIHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmRyYWdDbGFzcyk7XG4gICAgICAgIGlmICgkZHJhZ0VsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgJGRyYWdFbCA9ICQoXCI8ZGl2IGNsYXNzPVxcXCJcIiArIHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmRyYWdDbGFzcyArIFwiXFxcIj48L2Rpdj5cIik7XG4gICAgICAgICAgICAkZWwuYXBwZW5kKCRkcmFnRWwpO1xuICAgICAgICB9XG4gICAgICAgIFV0aWxzLmV4dGVuZChzY3JvbGxiYXIsIHtcbiAgICAgICAgICAgICRlbDogJGVsLFxuICAgICAgICAgICAgZWw6ICRlbFswXSxcbiAgICAgICAgICAgICRkcmFnRWw6ICRkcmFnRWwsXG4gICAgICAgICAgICBkcmFnRWw6ICRkcmFnRWxbMF0sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocGFyYW1zLmRyYWdnYWJsZSkge1xuICAgICAgICAgICAgc2Nyb2xsYmFyLmVuYWJsZURyYWdnYWJsZSgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBzd2lwZXIuc2Nyb2xsYmFyLmRpc2FibGVEcmFnZ2FibGUoKTtcbiAgICB9LFxufTtcbnZhciBzY3JvbGxiYXIgPSB7XG4gICAgbmFtZTogJ3Njcm9sbGJhcicsXG4gICAgcGFyYW1zOiB7XG4gICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgZWw6IG51bGwsXG4gICAgICAgICAgICBkcmFnU2l6ZTogJ2F1dG8nLFxuICAgICAgICAgICAgaGlkZTogZmFsc2UsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgc25hcE9uUmVsZWFzZTogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2tDbGFzczogJ3N3aXBlci1zY3JvbGxiYXItbG9jaycsXG4gICAgICAgICAgICBkcmFnQ2xhc3M6ICdzd2lwZXItc2Nyb2xsYmFyLWRyYWcnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBVdGlscy5leHRlbmQoc3dpcGVyLCB7XG4gICAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgICAgICBpbml0OiBTY3JvbGxiYXIuaW5pdC5iaW5kKHN3aXBlciksXG4gICAgICAgICAgICAgICAgZGVzdHJveTogU2Nyb2xsYmFyLmRlc3Ryb3kuYmluZChzd2lwZXIpLFxuICAgICAgICAgICAgICAgIHVwZGF0ZVNpemU6IFNjcm9sbGJhci51cGRhdGVTaXplLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICAgICAgICBzZXRUcmFuc2xhdGU6IFNjcm9sbGJhci5zZXRUcmFuc2xhdGUuYmluZChzd2lwZXIpLFxuICAgICAgICAgICAgICAgIHNldFRyYW5zaXRpb246IFNjcm9sbGJhci5zZXRUcmFuc2l0aW9uLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICAgICAgICBlbmFibGVEcmFnZ2FibGU6IFNjcm9sbGJhci5lbmFibGVEcmFnZ2FibGUuYmluZChzd2lwZXIpLFxuICAgICAgICAgICAgICAgIGRpc2FibGVEcmFnZ2FibGU6IFNjcm9sbGJhci5kaXNhYmxlRHJhZ2dhYmxlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICAgICAgICBzZXREcmFnUG9zaXRpb246IFNjcm9sbGJhci5zZXREcmFnUG9zaXRpb24uYmluZChzd2lwZXIpLFxuICAgICAgICAgICAgICAgIGdldFBvaW50ZXJQb3NpdGlvbjogU2Nyb2xsYmFyLmdldFBvaW50ZXJQb3NpdGlvbi5iaW5kKHN3aXBlciksXG4gICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ6IFNjcm9sbGJhci5vbkRyYWdTdGFydC5iaW5kKHN3aXBlciksXG4gICAgICAgICAgICAgICAgb25EcmFnTW92ZTogU2Nyb2xsYmFyLm9uRHJhZ01vdmUuYmluZChzd2lwZXIpLFxuICAgICAgICAgICAgICAgIG9uRHJhZ0VuZDogU2Nyb2xsYmFyLm9uRHJhZ0VuZC5iaW5kKHN3aXBlciksXG4gICAgICAgICAgICAgICAgaXNUb3VjaGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBudWxsLFxuICAgICAgICAgICAgICAgIGRyYWdUaW1lb3V0OiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgICAgIHN3aXBlci5zY3JvbGxiYXIuaW5pdCgpO1xuICAgICAgICAgICAgc3dpcGVyLnNjcm9sbGJhci51cGRhdGVTaXplKCk7XG4gICAgICAgICAgICBzd2lwZXIuc2Nyb2xsYmFyLnNldFRyYW5zbGF0ZSgpO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICAgICAgc3dpcGVyLnNjcm9sbGJhci51cGRhdGVTaXplKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc2l6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgICAgICBzd2lwZXIuc2Nyb2xsYmFyLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2JzZXJ2ZXJVcGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICAgICAgc3dpcGVyLnNjcm9sbGJhci51cGRhdGVTaXplKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFRyYW5zbGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgICAgICBzd2lwZXIuc2Nyb2xsYmFyLnNldFRyYW5zbGF0ZSgpO1xuICAgICAgICB9LFxuICAgICAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICAgICAgc3dpcGVyLnNjcm9sbGJhci5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgICAgICBzd2lwZXIuc2Nyb2xsYmFyLmRlc3Ryb3koKTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbnZhciBab29tID0ge1xuICAgIC8vIENhbGMgU2NhbGUgRnJvbSBNdWx0aS10b3VjaGVzXG4gICAgZ2V0RGlzdGFuY2VCZXR3ZWVuVG91Y2hlczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPCAyKVxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIHZhciB4MSA9IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgdmFyIHkxID0gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICB2YXIgeDIgPSBlLnRhcmdldFRvdWNoZXNbMV0ucGFnZVg7XG4gICAgICAgIHZhciB5MiA9IGUudGFyZ2V0VG91Y2hlc1sxXS5wYWdlWTtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KChNYXRoLnBvdygoeDIgLSB4MSksIDIpKSArIChNYXRoLnBvdygoeTIgLSB5MSksIDIpKSk7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZTtcbiAgICB9LFxuICAgIC8vIEV2ZW50c1xuICAgIG9uR2VzdHVyZVN0YXJ0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuem9vbTtcbiAgICAgICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICAgICAgdmFyIGdlc3R1cmUgPSB6b29tLmdlc3R1cmU7XG4gICAgICAgIHpvb20uZmFrZUdlc3R1cmVUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgIHpvb20uZmFrZUdlc3R1cmVNb3ZlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoIVN1cHBvcnQuZ2VzdHVyZXMpIHtcbiAgICAgICAgICAgIGlmIChlLnR5cGUgIT09ICd0b3VjaHN0YXJ0JyB8fCAoZS50eXBlID09PSAndG91Y2hzdGFydCcgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA8IDIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgem9vbS5mYWtlR2VzdHVyZVRvdWNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgZ2VzdHVyZS5zY2FsZVN0YXJ0ID0gWm9vbS5nZXREaXN0YW5jZUJldHdlZW5Ub3VjaGVzKGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZ2VzdHVyZS4kc2xpZGVFbCB8fCAhZ2VzdHVyZS4kc2xpZGVFbC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGdlc3R1cmUuJHNsaWRlRWwgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuc3dpcGVyLXNsaWRlJyk7XG4gICAgICAgICAgICBpZiAoZ2VzdHVyZS4kc2xpZGVFbC5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgZ2VzdHVyZS4kc2xpZGVFbCA9IHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgICAgIGdlc3R1cmUuJGltYWdlRWwgPSBnZXN0dXJlLiRzbGlkZUVsLmZpbmQoJ2ltZywgc3ZnLCBjYW52YXMnKTtcbiAgICAgICAgICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsID0gZ2VzdHVyZS4kaW1hZ2VFbC5wYXJlbnQoXCIuXCIgKyBwYXJhbXMuY29udGFpbmVyQ2xhc3MpO1xuICAgICAgICAgICAgZ2VzdHVyZS5tYXhSYXRpbyA9IGdlc3R1cmUuJGltYWdlV3JhcEVsLmF0dHIoJ2RhdGEtc3dpcGVyLXpvb20nKSB8fCBwYXJhbXMubWF4UmF0aW87XG4gICAgICAgICAgICBpZiAoZ2VzdHVyZS4kaW1hZ2VXcmFwRWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZ2VzdHVyZS4kaW1hZ2VFbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2VzdHVyZS4kaW1hZ2VFbC50cmFuc2l0aW9uKDApO1xuICAgICAgICBzd2lwZXIuem9vbS5pc1NjYWxpbmcgPSB0cnVlO1xuICAgIH0sXG4gICAgb25HZXN0dXJlQ2hhbmdlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuem9vbTtcbiAgICAgICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICAgICAgdmFyIGdlc3R1cmUgPSB6b29tLmdlc3R1cmU7XG4gICAgICAgIGlmICghU3VwcG9ydC5nZXN0dXJlcykge1xuICAgICAgICAgICAgaWYgKGUudHlwZSAhPT0gJ3RvdWNobW92ZScgfHwgKGUudHlwZSA9PT0gJ3RvdWNobW92ZScgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA8IDIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgem9vbS5mYWtlR2VzdHVyZU1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGdlc3R1cmUuc2NhbGVNb3ZlID0gWm9vbS5nZXREaXN0YW5jZUJldHdlZW5Ub3VjaGVzKGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZ2VzdHVyZS4kaW1hZ2VFbCB8fCBnZXN0dXJlLiRpbWFnZUVsLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKFN1cHBvcnQuZ2VzdHVyZXMpIHtcbiAgICAgICAgICAgIHpvb20uc2NhbGUgPSBlLnNjYWxlICogem9vbS5jdXJyZW50U2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB6b29tLnNjYWxlID0gKGdlc3R1cmUuc2NhbGVNb3ZlIC8gZ2VzdHVyZS5zY2FsZVN0YXJ0KSAqIHpvb20uY3VycmVudFNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh6b29tLnNjYWxlID4gZ2VzdHVyZS5tYXhSYXRpbykge1xuICAgICAgICAgICAgem9vbS5zY2FsZSA9IChnZXN0dXJlLm1heFJhdGlvIC0gMSkgKyAoTWF0aC5wb3coKCh6b29tLnNjYWxlIC0gZ2VzdHVyZS5tYXhSYXRpbykgKyAxKSwgMC41KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHpvb20uc2NhbGUgPCBwYXJhbXMubWluUmF0aW8pIHtcbiAgICAgICAgICAgIHpvb20uc2NhbGUgPSAocGFyYW1zLm1pblJhdGlvICsgMSkgLSAoTWF0aC5wb3coKChwYXJhbXMubWluUmF0aW8gLSB6b29tLnNjYWxlKSArIDEpLCAwLjUpKTtcbiAgICAgICAgfVxuICAgICAgICBnZXN0dXJlLiRpbWFnZUVsLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZShcIiArIHpvb20uc2NhbGUgKyBcIilcIik7XG4gICAgfSxcbiAgICBvbkdlc3R1cmVFbmQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy56b29tO1xuICAgICAgICB2YXIgem9vbSA9IHN3aXBlci56b29tO1xuICAgICAgICB2YXIgZ2VzdHVyZSA9IHpvb20uZ2VzdHVyZTtcbiAgICAgICAgaWYgKCFTdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICAgICAgICBpZiAoIXpvb20uZmFrZUdlc3R1cmVUb3VjaGVkIHx8ICF6b29tLmZha2VHZXN0dXJlTW92ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS50eXBlICE9PSAndG91Y2hlbmQnIHx8IChlLnR5cGUgPT09ICd0b3VjaGVuZCcgJiYgZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPCAyICYmICFEZXZpY2UuYW5kcm9pZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB6b29tLmZha2VHZXN0dXJlVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgem9vbS5mYWtlR2VzdHVyZU1vdmVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB6b29tLnNjYWxlID0gTWF0aC5tYXgoTWF0aC5taW4oem9vbS5zY2FsZSwgZ2VzdHVyZS5tYXhSYXRpbyksIHBhcmFtcy5taW5SYXRpbyk7XG4gICAgICAgIGdlc3R1cmUuJGltYWdlRWwudHJhbnNpdGlvbihzd2lwZXIucGFyYW1zLnNwZWVkKS50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoXCIgKyB6b29tLnNjYWxlICsgXCIpXCIpO1xuICAgICAgICB6b29tLmN1cnJlbnRTY2FsZSA9IHpvb20uc2NhbGU7XG4gICAgICAgIHpvb20uaXNTY2FsaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICh6b29tLnNjYWxlID09PSAxKVxuICAgICAgICAgICAgZ2VzdHVyZS4kc2xpZGVFbCA9IHVuZGVmaW5lZDtcbiAgICB9LFxuICAgIG9uVG91Y2hTdGFydDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHZhciB6b29tID0gc3dpcGVyLnpvb207XG4gICAgICAgIHZhciBnZXN0dXJlID0gem9vbS5nZXN0dXJlLCBpbWFnZSA9IHpvb20uaW1hZ2U7XG4gICAgICAgIGlmICghZ2VzdHVyZS4kaW1hZ2VFbCB8fCBnZXN0dXJlLiRpbWFnZUVsLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKGltYWdlLmlzVG91Y2hlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKERldmljZS5hbmRyb2lkKVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpbWFnZS5pc1RvdWNoZWQgPSB0cnVlO1xuICAgICAgICBpbWFnZS50b3VjaGVzU3RhcnQueCA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWDtcbiAgICAgICAgaW1hZ2UudG91Y2hlc1N0YXJ0LnkgPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVk7XG4gICAgfSxcbiAgICBvblRvdWNoTW92ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHZhciB6b29tID0gc3dpcGVyLnpvb207XG4gICAgICAgIHZhciBnZXN0dXJlID0gem9vbS5nZXN0dXJlLCBpbWFnZSA9IHpvb20uaW1hZ2UsIHZlbG9jaXR5ID0gem9vbS52ZWxvY2l0eTtcbiAgICAgICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuICAgICAgICBpZiAoIWltYWdlLmlzVG91Y2hlZCB8fCAhZ2VzdHVyZS4kc2xpZGVFbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCFpbWFnZS5pc01vdmVkKSB7XG4gICAgICAgICAgICBpbWFnZS53aWR0aCA9IGdlc3R1cmUuJGltYWdlRWxbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBpbWFnZS5oZWlnaHQgPSBnZXN0dXJlLiRpbWFnZUVsWzBdLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGltYWdlLnN0YXJ0WCA9IFV0aWxzLmdldFRyYW5zbGF0ZShnZXN0dXJlLiRpbWFnZVdyYXBFbFswXSwgJ3gnKSB8fCAwO1xuICAgICAgICAgICAgaW1hZ2Uuc3RhcnRZID0gVXRpbHMuZ2V0VHJhbnNsYXRlKGdlc3R1cmUuJGltYWdlV3JhcEVsWzBdLCAneScpIHx8IDA7XG4gICAgICAgICAgICBnZXN0dXJlLnNsaWRlV2lkdGggPSBnZXN0dXJlLiRzbGlkZUVsWzBdLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZ2VzdHVyZS5zbGlkZUhlaWdodCA9IGdlc3R1cmUuJHNsaWRlRWxbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwudHJhbnNpdGlvbigwKTtcbiAgICAgICAgICAgIGlmIChzd2lwZXIucnRsKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3RhcnRYID0gLWltYWdlLnN0YXJ0WDtcbiAgICAgICAgICAgICAgICBpbWFnZS5zdGFydFkgPSAtaW1hZ2Uuc3RhcnRZO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIERlZmluZSBpZiB3ZSBuZWVkIGltYWdlIGRyYWdcbiAgICAgICAgdmFyIHNjYWxlZFdpZHRoID0gaW1hZ2Uud2lkdGggKiB6b29tLnNjYWxlO1xuICAgICAgICB2YXIgc2NhbGVkSGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0ICogem9vbS5zY2FsZTtcbiAgICAgICAgaWYgKHNjYWxlZFdpZHRoIDwgZ2VzdHVyZS5zbGlkZVdpZHRoICYmIHNjYWxlZEhlaWdodCA8IGdlc3R1cmUuc2xpZGVIZWlnaHQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGltYWdlLm1pblggPSBNYXRoLm1pbigoKGdlc3R1cmUuc2xpZGVXaWR0aCAvIDIpIC0gKHNjYWxlZFdpZHRoIC8gMikpLCAwKTtcbiAgICAgICAgaW1hZ2UubWF4WCA9IC1pbWFnZS5taW5YO1xuICAgICAgICBpbWFnZS5taW5ZID0gTWF0aC5taW4oKChnZXN0dXJlLnNsaWRlSGVpZ2h0IC8gMikgLSAoc2NhbGVkSGVpZ2h0IC8gMikpLCAwKTtcbiAgICAgICAgaW1hZ2UubWF4WSA9IC1pbWFnZS5taW5ZO1xuICAgICAgICBpbWFnZS50b3VjaGVzQ3VycmVudC54ID0gZS50eXBlID09PSAndG91Y2htb3ZlJyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gICAgICAgIGltYWdlLnRvdWNoZXNDdXJyZW50LnkgPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcbiAgICAgICAgaWYgKCFpbWFnZS5pc01vdmVkICYmICF6b29tLmlzU2NhbGluZykge1xuICAgICAgICAgICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKVxuICAgICAgICAgICAgICAgICYmICgoTWF0aC5mbG9vcihpbWFnZS5taW5YKSA9PT0gTWF0aC5mbG9vcihpbWFnZS5zdGFydFgpICYmIGltYWdlLnRvdWNoZXNDdXJyZW50LnggPCBpbWFnZS50b3VjaGVzU3RhcnQueClcbiAgICAgICAgICAgICAgICAgICAgfHwgKE1hdGguZmxvb3IoaW1hZ2UubWF4WCkgPT09IE1hdGguZmxvb3IoaW1hZ2Uuc3RhcnRYKSAmJiBpbWFnZS50b3VjaGVzQ3VycmVudC54ID4gaW1hZ2UudG91Y2hlc1N0YXJ0LngpKSkge1xuICAgICAgICAgICAgICAgIGltYWdlLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3dpcGVyLmlzSG9yaXpvbnRhbCgpXG4gICAgICAgICAgICAgICAgJiYgKChNYXRoLmZsb29yKGltYWdlLm1pblkpID09PSBNYXRoLmZsb29yKGltYWdlLnN0YXJ0WSkgJiYgaW1hZ2UudG91Y2hlc0N1cnJlbnQueSA8IGltYWdlLnRvdWNoZXNTdGFydC55KVxuICAgICAgICAgICAgICAgICAgICB8fCAoTWF0aC5mbG9vcihpbWFnZS5tYXhZKSA9PT0gTWF0aC5mbG9vcihpbWFnZS5zdGFydFkpICYmIGltYWdlLnRvdWNoZXNDdXJyZW50LnkgPiBpbWFnZS50b3VjaGVzU3RhcnQueSkpKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2UuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaW1hZ2UuaXNNb3ZlZCA9IHRydWU7XG4gICAgICAgIGltYWdlLmN1cnJlbnRYID0gKGltYWdlLnRvdWNoZXNDdXJyZW50LnggLSBpbWFnZS50b3VjaGVzU3RhcnQueCkgKyBpbWFnZS5zdGFydFg7XG4gICAgICAgIGltYWdlLmN1cnJlbnRZID0gKGltYWdlLnRvdWNoZXNDdXJyZW50LnkgLSBpbWFnZS50b3VjaGVzU3RhcnQueSkgKyBpbWFnZS5zdGFydFk7XG4gICAgICAgIGlmIChpbWFnZS5jdXJyZW50WCA8IGltYWdlLm1pblgpIHtcbiAgICAgICAgICAgIGltYWdlLmN1cnJlbnRYID0gKGltYWdlLm1pblggKyAxKSAtIChNYXRoLnBvdygoKGltYWdlLm1pblggLSBpbWFnZS5jdXJyZW50WCkgKyAxKSwgMC44KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGltYWdlLmN1cnJlbnRYID4gaW1hZ2UubWF4WCkge1xuICAgICAgICAgICAgaW1hZ2UuY3VycmVudFggPSAoaW1hZ2UubWF4WCAtIDEpICsgKE1hdGgucG93KCgoaW1hZ2UuY3VycmVudFggLSBpbWFnZS5tYXhYKSArIDEpLCAwLjgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW1hZ2UuY3VycmVudFkgPCBpbWFnZS5taW5ZKSB7XG4gICAgICAgICAgICBpbWFnZS5jdXJyZW50WSA9IChpbWFnZS5taW5ZICsgMSkgLSAoTWF0aC5wb3coKChpbWFnZS5taW5ZIC0gaW1hZ2UuY3VycmVudFkpICsgMSksIDAuOCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbWFnZS5jdXJyZW50WSA+IGltYWdlLm1heFkpIHtcbiAgICAgICAgICAgIGltYWdlLmN1cnJlbnRZID0gKGltYWdlLm1heFkgLSAxKSArIChNYXRoLnBvdygoKGltYWdlLmN1cnJlbnRZIC0gaW1hZ2UubWF4WSkgKyAxKSwgMC44KSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVmVsb2NpdHlcbiAgICAgICAgaWYgKCF2ZWxvY2l0eS5wcmV2UG9zaXRpb25YKVxuICAgICAgICAgICAgdmVsb2NpdHkucHJldlBvc2l0aW9uWCA9IGltYWdlLnRvdWNoZXNDdXJyZW50Lng7XG4gICAgICAgIGlmICghdmVsb2NpdHkucHJldlBvc2l0aW9uWSlcbiAgICAgICAgICAgIHZlbG9jaXR5LnByZXZQb3NpdGlvblkgPSBpbWFnZS50b3VjaGVzQ3VycmVudC55O1xuICAgICAgICBpZiAoIXZlbG9jaXR5LnByZXZUaW1lKVxuICAgICAgICAgICAgdmVsb2NpdHkucHJldlRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB2ZWxvY2l0eS54ID0gKGltYWdlLnRvdWNoZXNDdXJyZW50LnggLSB2ZWxvY2l0eS5wcmV2UG9zaXRpb25YKSAvIChEYXRlLm5vdygpIC0gdmVsb2NpdHkucHJldlRpbWUpIC8gMjtcbiAgICAgICAgdmVsb2NpdHkueSA9IChpbWFnZS50b3VjaGVzQ3VycmVudC55IC0gdmVsb2NpdHkucHJldlBvc2l0aW9uWSkgLyAoRGF0ZS5ub3coKSAtIHZlbG9jaXR5LnByZXZUaW1lKSAvIDI7XG4gICAgICAgIGlmIChNYXRoLmFicyhpbWFnZS50b3VjaGVzQ3VycmVudC54IC0gdmVsb2NpdHkucHJldlBvc2l0aW9uWCkgPCAyKVxuICAgICAgICAgICAgdmVsb2NpdHkueCA9IDA7XG4gICAgICAgIGlmIChNYXRoLmFicyhpbWFnZS50b3VjaGVzQ3VycmVudC55IC0gdmVsb2NpdHkucHJldlBvc2l0aW9uWSkgPCAyKVxuICAgICAgICAgICAgdmVsb2NpdHkueSA9IDA7XG4gICAgICAgIHZlbG9jaXR5LnByZXZQb3NpdGlvblggPSBpbWFnZS50b3VjaGVzQ3VycmVudC54O1xuICAgICAgICB2ZWxvY2l0eS5wcmV2UG9zaXRpb25ZID0gaW1hZ2UudG91Y2hlc0N1cnJlbnQueTtcbiAgICAgICAgdmVsb2NpdHkucHJldlRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbC50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZChcIiArIGltYWdlLmN1cnJlbnRYICsgXCJweCwgXCIgKyBpbWFnZS5jdXJyZW50WSArIFwicHgsMClcIik7XG4gICAgfSxcbiAgICBvblRvdWNoRW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICB2YXIgem9vbSA9IHN3aXBlci56b29tO1xuICAgICAgICB2YXIgZ2VzdHVyZSA9IHpvb20uZ2VzdHVyZSwgaW1hZ2UgPSB6b29tLmltYWdlLCB2ZWxvY2l0eSA9IHpvb20udmVsb2NpdHk7XG4gICAgICAgIGlmICghZ2VzdHVyZS4kaW1hZ2VFbCB8fCBnZXN0dXJlLiRpbWFnZUVsLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCFpbWFnZS5pc1RvdWNoZWQgfHwgIWltYWdlLmlzTW92ZWQpIHtcbiAgICAgICAgICAgIGltYWdlLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaW1hZ2UuaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGltYWdlLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICBpbWFnZS5pc01vdmVkID0gZmFsc2U7XG4gICAgICAgIHZhciBtb21lbnR1bUR1cmF0aW9uWCA9IDMwMDtcbiAgICAgICAgdmFyIG1vbWVudHVtRHVyYXRpb25ZID0gMzAwO1xuICAgICAgICB2YXIgbW9tZW50dW1EaXN0YW5jZVggPSB2ZWxvY2l0eS54ICogbW9tZW50dW1EdXJhdGlvblg7XG4gICAgICAgIHZhciBuZXdQb3NpdGlvblggPSBpbWFnZS5jdXJyZW50WCArIG1vbWVudHVtRGlzdGFuY2VYO1xuICAgICAgICB2YXIgbW9tZW50dW1EaXN0YW5jZVkgPSB2ZWxvY2l0eS55ICogbW9tZW50dW1EdXJhdGlvblk7XG4gICAgICAgIHZhciBuZXdQb3NpdGlvblkgPSBpbWFnZS5jdXJyZW50WSArIG1vbWVudHVtRGlzdGFuY2VZO1xuICAgICAgICAvLyBGaXggZHVyYXRpb25cbiAgICAgICAgaWYgKHZlbG9jaXR5LnggIT09IDApXG4gICAgICAgICAgICBtb21lbnR1bUR1cmF0aW9uWCA9IE1hdGguYWJzKChuZXdQb3NpdGlvblggLSBpbWFnZS5jdXJyZW50WCkgLyB2ZWxvY2l0eS54KTtcbiAgICAgICAgaWYgKHZlbG9jaXR5LnkgIT09IDApXG4gICAgICAgICAgICBtb21lbnR1bUR1cmF0aW9uWSA9IE1hdGguYWJzKChuZXdQb3NpdGlvblkgLSBpbWFnZS5jdXJyZW50WSkgLyB2ZWxvY2l0eS55KTtcbiAgICAgICAgdmFyIG1vbWVudHVtRHVyYXRpb24gPSBNYXRoLm1heChtb21lbnR1bUR1cmF0aW9uWCwgbW9tZW50dW1EdXJhdGlvblkpO1xuICAgICAgICBpbWFnZS5jdXJyZW50WCA9IG5ld1Bvc2l0aW9uWDtcbiAgICAgICAgaW1hZ2UuY3VycmVudFkgPSBuZXdQb3NpdGlvblk7XG4gICAgICAgIC8vIERlZmluZSBpZiB3ZSBuZWVkIGltYWdlIGRyYWdcbiAgICAgICAgdmFyIHNjYWxlZFdpZHRoID0gaW1hZ2Uud2lkdGggKiB6b29tLnNjYWxlO1xuICAgICAgICB2YXIgc2NhbGVkSGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0ICogem9vbS5zY2FsZTtcbiAgICAgICAgaW1hZ2UubWluWCA9IE1hdGgubWluKCgoZ2VzdHVyZS5zbGlkZVdpZHRoIC8gMikgLSAoc2NhbGVkV2lkdGggLyAyKSksIDApO1xuICAgICAgICBpbWFnZS5tYXhYID0gLWltYWdlLm1pblg7XG4gICAgICAgIGltYWdlLm1pblkgPSBNYXRoLm1pbigoKGdlc3R1cmUuc2xpZGVIZWlnaHQgLyAyKSAtIChzY2FsZWRIZWlnaHQgLyAyKSksIDApO1xuICAgICAgICBpbWFnZS5tYXhZID0gLWltYWdlLm1pblk7XG4gICAgICAgIGltYWdlLmN1cnJlbnRYID0gTWF0aC5tYXgoTWF0aC5taW4oaW1hZ2UuY3VycmVudFgsIGltYWdlLm1heFgpLCBpbWFnZS5taW5YKTtcbiAgICAgICAgaW1hZ2UuY3VycmVudFkgPSBNYXRoLm1heChNYXRoLm1pbihpbWFnZS5jdXJyZW50WSwgaW1hZ2UubWF4WSksIGltYWdlLm1pblkpO1xuICAgICAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbC50cmFuc2l0aW9uKG1vbWVudHVtRHVyYXRpb24pLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKFwiICsgaW1hZ2UuY3VycmVudFggKyBcInB4LCBcIiArIGltYWdlLmN1cnJlbnRZICsgXCJweCwwKVwiKTtcbiAgICB9LFxuICAgIG9uVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICAgICAgdmFyIGdlc3R1cmUgPSB6b29tLmdlc3R1cmU7XG4gICAgICAgIGlmIChnZXN0dXJlLiRzbGlkZUVsICYmIHN3aXBlci5wcmV2aW91c0luZGV4ICE9PSBzd2lwZXIuYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgIGdlc3R1cmUuJGltYWdlRWwudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoMSknKTtcbiAgICAgICAgICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMCwwLDApJyk7XG4gICAgICAgICAgICB6b29tLnNjYWxlID0gMTtcbiAgICAgICAgICAgIHpvb20uY3VycmVudFNjYWxlID0gMTtcbiAgICAgICAgICAgIGdlc3R1cmUuJHNsaWRlRWwgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBnZXN0dXJlLiRpbWFnZUVsID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIFRvZ2dsZSBab29tXG4gICAgdG9nZ2xlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICAgICAgaWYgKHpvb20uc2NhbGUgJiYgem9vbS5zY2FsZSAhPT0gMSkge1xuICAgICAgICAgICAgLy8gWm9vbSBPdXRcbiAgICAgICAgICAgIHpvb20ub3V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBab29tIEluXG4gICAgICAgICAgICB6b29tLmluKGUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBpbjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHZhciB6b29tID0gc3dpcGVyLnpvb207XG4gICAgICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnpvb207XG4gICAgICAgIHZhciBnZXN0dXJlID0gem9vbS5nZXN0dXJlLCBpbWFnZSA9IHpvb20uaW1hZ2U7XG4gICAgICAgIGlmICghZ2VzdHVyZS4kc2xpZGVFbCkge1xuICAgICAgICAgICAgZ2VzdHVyZS4kc2xpZGVFbCA9IHN3aXBlci5jbGlja2VkU2xpZGUgPyAkKHN3aXBlci5jbGlja2VkU2xpZGUpIDogc3dpcGVyLnNsaWRlcy5lcShzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgICAgICAgZ2VzdHVyZS4kaW1hZ2VFbCA9IGdlc3R1cmUuJHNsaWRlRWwuZmluZCgnaW1nLCBzdmcsIGNhbnZhcycpO1xuICAgICAgICAgICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwgPSBnZXN0dXJlLiRpbWFnZUVsLnBhcmVudChcIi5cIiArIHBhcmFtcy5jb250YWluZXJDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBnZXN0dXJlLiRzbGlkZUVsLmFkZENsYXNzKFwiXCIgKyBwYXJhbXMuem9vbWVkU2xpZGVDbGFzcyk7XG4gICAgICAgIHZhciB0b3VjaFg7XG4gICAgICAgIHZhciB0b3VjaFk7XG4gICAgICAgIHZhciBvZmZzZXRYO1xuICAgICAgICB2YXIgb2Zmc2V0WTtcbiAgICAgICAgdmFyIGRpZmZYO1xuICAgICAgICB2YXIgZGlmZlk7XG4gICAgICAgIHZhciB0cmFuc2xhdGVYO1xuICAgICAgICB2YXIgdHJhbnNsYXRlWTtcbiAgICAgICAgdmFyIGltYWdlV2lkdGg7XG4gICAgICAgIHZhciBpbWFnZUhlaWdodDtcbiAgICAgICAgdmFyIHNjYWxlZFdpZHRoO1xuICAgICAgICB2YXIgc2NhbGVkSGVpZ2h0O1xuICAgICAgICB2YXIgdHJhbnNsYXRlTWluWDtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZU1pblk7XG4gICAgICAgIHZhciB0cmFuc2xhdGVNYXhYO1xuICAgICAgICB2YXIgdHJhbnNsYXRlTWF4WTtcbiAgICAgICAgdmFyIHNsaWRlV2lkdGg7XG4gICAgICAgIHZhciBzbGlkZUhlaWdodDtcbiAgICAgICAgaWYgKHR5cGVvZiBpbWFnZS50b3VjaGVzU3RhcnQueCA9PT0gJ3VuZGVmaW5lZCcgJiYgZSkge1xuICAgICAgICAgICAgdG91Y2hYID0gZS50eXBlID09PSAndG91Y2hlbmQnID8gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gICAgICAgICAgICB0b3VjaFkgPSBlLnR5cGUgPT09ICd0b3VjaGVuZCcgPyBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvdWNoWCA9IGltYWdlLnRvdWNoZXNTdGFydC54O1xuICAgICAgICAgICAgdG91Y2hZID0gaW1hZ2UudG91Y2hlc1N0YXJ0Lnk7XG4gICAgICAgIH1cbiAgICAgICAgem9vbS5zY2FsZSA9IGdlc3R1cmUuJGltYWdlV3JhcEVsLmF0dHIoJ2RhdGEtc3dpcGVyLXpvb20nKSB8fCBwYXJhbXMubWF4UmF0aW87XG4gICAgICAgIHpvb20uY3VycmVudFNjYWxlID0gZ2VzdHVyZS4kaW1hZ2VXcmFwRWwuYXR0cignZGF0YS1zd2lwZXItem9vbScpIHx8IHBhcmFtcy5tYXhSYXRpbztcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIHNsaWRlV2lkdGggPSBnZXN0dXJlLiRzbGlkZUVsWzBdLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgc2xpZGVIZWlnaHQgPSBnZXN0dXJlLiRzbGlkZUVsWzBdLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIG9mZnNldFggPSBnZXN0dXJlLiRzbGlkZUVsLm9mZnNldCgpLmxlZnQ7XG4gICAgICAgICAgICBvZmZzZXRZID0gZ2VzdHVyZS4kc2xpZGVFbC5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICBkaWZmWCA9IChvZmZzZXRYICsgKHNsaWRlV2lkdGggLyAyKSkgLSB0b3VjaFg7XG4gICAgICAgICAgICBkaWZmWSA9IChvZmZzZXRZICsgKHNsaWRlSGVpZ2h0IC8gMikpIC0gdG91Y2hZO1xuICAgICAgICAgICAgaW1hZ2VXaWR0aCA9IGdlc3R1cmUuJGltYWdlRWxbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBpbWFnZUhlaWdodCA9IGdlc3R1cmUuJGltYWdlRWxbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgc2NhbGVkV2lkdGggPSBpbWFnZVdpZHRoICogem9vbS5zY2FsZTtcbiAgICAgICAgICAgIHNjYWxlZEhlaWdodCA9IGltYWdlSGVpZ2h0ICogem9vbS5zY2FsZTtcbiAgICAgICAgICAgIHRyYW5zbGF0ZU1pblggPSBNYXRoLm1pbigoKHNsaWRlV2lkdGggLyAyKSAtIChzY2FsZWRXaWR0aCAvIDIpKSwgMCk7XG4gICAgICAgICAgICB0cmFuc2xhdGVNaW5ZID0gTWF0aC5taW4oKChzbGlkZUhlaWdodCAvIDIpIC0gKHNjYWxlZEhlaWdodCAvIDIpKSwgMCk7XG4gICAgICAgICAgICB0cmFuc2xhdGVNYXhYID0gLXRyYW5zbGF0ZU1pblg7XG4gICAgICAgICAgICB0cmFuc2xhdGVNYXhZID0gLXRyYW5zbGF0ZU1pblk7XG4gICAgICAgICAgICB0cmFuc2xhdGVYID0gZGlmZlggKiB6b29tLnNjYWxlO1xuICAgICAgICAgICAgdHJhbnNsYXRlWSA9IGRpZmZZICogem9vbS5zY2FsZTtcbiAgICAgICAgICAgIGlmICh0cmFuc2xhdGVYIDwgdHJhbnNsYXRlTWluWCkge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2xhdGVNaW5YO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRyYW5zbGF0ZVggPiB0cmFuc2xhdGVNYXhYKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZU1heFg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHJhbnNsYXRlWSA8IHRyYW5zbGF0ZU1pblkpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZID0gdHJhbnNsYXRlTWluWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0cmFuc2xhdGVZID4gdHJhbnNsYXRlTWF4WSkge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGVNYXhZO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHJhbnNsYXRlWCA9IDA7XG4gICAgICAgICAgICB0cmFuc2xhdGVZID0gMDtcbiAgICAgICAgfVxuICAgICAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbC50cmFuc2l0aW9uKDMwMCkudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIgKyB0cmFuc2xhdGVYICsgXCJweCwgXCIgKyB0cmFuc2xhdGVZICsgXCJweCwwKVwiKTtcbiAgICAgICAgZ2VzdHVyZS4kaW1hZ2VFbC50cmFuc2l0aW9uKDMwMCkudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKFwiICsgem9vbS5zY2FsZSArIFwiKVwiKTtcbiAgICB9LFxuICAgIG91dDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgdmFyIHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICAgICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuem9vbTtcbiAgICAgICAgdmFyIGdlc3R1cmUgPSB6b29tLmdlc3R1cmU7XG4gICAgICAgIGlmICghZ2VzdHVyZS4kc2xpZGVFbCkge1xuICAgICAgICAgICAgZ2VzdHVyZS4kc2xpZGVFbCA9IHN3aXBlci5jbGlja2VkU2xpZGUgPyAkKHN3aXBlci5jbGlja2VkU2xpZGUpIDogc3dpcGVyLnNsaWRlcy5lcShzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgICAgICAgZ2VzdHVyZS4kaW1hZ2VFbCA9IGdlc3R1cmUuJHNsaWRlRWwuZmluZCgnaW1nLCBzdmcsIGNhbnZhcycpO1xuICAgICAgICAgICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwgPSBnZXN0dXJlLiRpbWFnZUVsLnBhcmVudChcIi5cIiArIHBhcmFtcy5jb250YWluZXJDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB6b29tLnNjYWxlID0gMTtcbiAgICAgICAgem9vbS5jdXJyZW50U2NhbGUgPSAxO1xuICAgICAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbC50cmFuc2l0aW9uKDMwMCkudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwLDAsMCknKTtcbiAgICAgICAgZ2VzdHVyZS4kaW1hZ2VFbC50cmFuc2l0aW9uKDMwMCkudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoMSknKTtcbiAgICAgICAgZ2VzdHVyZS4kc2xpZGVFbC5yZW1vdmVDbGFzcyhcIlwiICsgcGFyYW1zLnpvb21lZFNsaWRlQ2xhc3MpO1xuICAgICAgICBnZXN0dXJlLiRzbGlkZUVsID0gdW5kZWZpbmVkO1xuICAgIH0sXG4gICAgLy8gQXR0YWNoL0RldGFjaCBFdmVudHNcbiAgICBlbmFibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHZhciB6b29tID0gc3dpcGVyLnpvb207XG4gICAgICAgIGlmICh6b29tLmVuYWJsZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHpvb20uZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHZhciBwYXNzaXZlTGlzdGVuZXIgPSBzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0JyAmJiBTdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBzd2lwZXIucGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7IHBhc3NpdmU6IHRydWUsIGNhcHR1cmU6IGZhbHNlIH0gOiBmYWxzZTtcbiAgICAgICAgLy8gU2NhbGUgaW1hZ2VcbiAgICAgICAgaWYgKFN1cHBvcnQuZ2VzdHVyZXMpIHtcbiAgICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9uKCdnZXN0dXJlc3RhcnQnLCAnLnN3aXBlci1zbGlkZScsIHpvb20ub25HZXN0dXJlU3RhcnQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vbignZ2VzdHVyZWNoYW5nZScsICcuc3dpcGVyLXNsaWRlJywgem9vbS5vbkdlc3R1cmVDaGFuZ2UsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vbignZ2VzdHVyZWVuZCcsICcuc3dpcGVyLXNsaWRlJywgem9vbS5vbkdlc3R1cmVFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3dpcGVyLnRvdWNoRXZlbnRzLnN0YXJ0ID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9uKHN3aXBlci50b3VjaEV2ZW50cy5zdGFydCwgJy5zd2lwZXItc2xpZGUnLCB6b29tLm9uR2VzdHVyZVN0YXJ0LCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub24oc3dpcGVyLnRvdWNoRXZlbnRzLm1vdmUsICcuc3dpcGVyLXNsaWRlJywgem9vbS5vbkdlc3R1cmVDaGFuZ2UsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vbihzd2lwZXIudG91Y2hFdmVudHMuZW5kLCAnLnN3aXBlci1zbGlkZScsIHpvb20ub25HZXN0dXJlRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1vdmUgaW1hZ2VcbiAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub24oc3dpcGVyLnRvdWNoRXZlbnRzLm1vdmUsIFwiLlwiICsgc3dpcGVyLnBhcmFtcy56b29tLmNvbnRhaW5lckNsYXNzLCB6b29tLm9uVG91Y2hNb3ZlKTtcbiAgICB9LFxuICAgIGRpc2FibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgIHZhciB6b29tID0gc3dpcGVyLnpvb207XG4gICAgICAgIGlmICghem9vbS5lbmFibGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzd2lwZXIuem9vbS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBwYXNzaXZlTGlzdGVuZXIgPSBzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0JyAmJiBTdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBzd2lwZXIucGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7IHBhc3NpdmU6IHRydWUsIGNhcHR1cmU6IGZhbHNlIH0gOiBmYWxzZTtcbiAgICAgICAgLy8gU2NhbGUgaW1hZ2VcbiAgICAgICAgaWYgKFN1cHBvcnQuZ2VzdHVyZXMpIHtcbiAgICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9mZignZ2VzdHVyZXN0YXJ0JywgJy5zd2lwZXItc2xpZGUnLCB6b29tLm9uR2VzdHVyZVN0YXJ0LCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub2ZmKCdnZXN0dXJlY2hhbmdlJywgJy5zd2lwZXItc2xpZGUnLCB6b29tLm9uR2VzdHVyZUNoYW5nZSwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9mZignZ2VzdHVyZWVuZCcsICcuc3dpcGVyLXNsaWRlJywgem9vbS5vbkdlc3R1cmVFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3dpcGVyLnRvdWNoRXZlbnRzLnN0YXJ0ID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9mZihzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQsICcuc3dpcGVyLXNsaWRlJywgem9vbS5vbkdlc3R1cmVTdGFydCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9mZihzd2lwZXIudG91Y2hFdmVudHMubW92ZSwgJy5zd2lwZXItc2xpZGUnLCB6b29tLm9uR2VzdHVyZUNoYW5nZSwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9mZihzd2lwZXIudG91Y2hFdmVudHMuZW5kLCAnLnN3aXBlci1zbGlkZScsIHpvb20ub25HZXN0dXJlRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1vdmUgaW1hZ2VcbiAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub2ZmKHN3aXBlci50b3VjaEV2ZW50cy5tb3ZlLCBcIi5cIiArIHN3aXBlci5wYXJhbXMuem9vbS5jb250YWluZXJDbGFzcywgem9vbS5vblRvdWNoTW92ZSk7XG4gICAgfSxcbn07XG52YXIgem9vbSA9IHtcbiAgICBuYW1lOiAnem9vbScsXG4gICAgcGFyYW1zOiB7XG4gICAgICAgIHpvb206IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbWF4UmF0aW86IDMsXG4gICAgICAgICAgICBtaW5SYXRpbzogMSxcbiAgICAgICAgICAgIHRvZ2dsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzOiAnc3dpcGVyLXpvb20tY29udGFpbmVyJyxcbiAgICAgICAgICAgIHpvb21lZFNsaWRlQ2xhc3M6ICdzd2lwZXItc2xpZGUtem9vbWVkJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgdmFyIHpvb20gPSB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgICAgY3VycmVudFNjYWxlOiAxLFxuICAgICAgICAgICAgaXNTY2FsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGdlc3R1cmU6IHtcbiAgICAgICAgICAgICAgICAkc2xpZGVFbDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHNsaWRlV2lkdGg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBzbGlkZUhlaWdodDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICRpbWFnZUVsOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgJGltYWdlV3JhcEVsOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgbWF4UmF0aW86IDMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBpc1RvdWNoZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBpc01vdmVkOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgY3VycmVudFg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBjdXJyZW50WTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIG1pblg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBtaW5ZOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgbWF4WDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIG1heFk6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHN0YXJ0WDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHRvdWNoZXNTdGFydDoge30sXG4gICAgICAgICAgICAgICAgdG91Y2hlc0N1cnJlbnQ6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZlbG9jaXR5OiB7XG4gICAgICAgICAgICAgICAgeDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHk6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBwcmV2UG9zaXRpb25YOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgcHJldlBvc2l0aW9uWTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHByZXZUaW1lOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICAoJ29uR2VzdHVyZVN0YXJ0IG9uR2VzdHVyZUNoYW5nZSBvbkdlc3R1cmVFbmQgb25Ub3VjaFN0YXJ0IG9uVG91Y2hNb3ZlIG9uVG91Y2hFbmQgb25UcmFuc2l0aW9uRW5kIHRvZ2dsZSBlbmFibGUgZGlzYWJsZSBpbiBvdXQnKS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgICAgIHpvb21bbWV0aG9kTmFtZV0gPSBab29tW21ldGhvZE5hbWVdLmJpbmQoc3dpcGVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgICAgICAgIHpvb206IHpvb20sXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgc2NhbGUgPSAxO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3dpcGVyLnpvb20sICdzY2FsZScsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY2FsZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChzY2FsZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltYWdlRWwgPSBzd2lwZXIuem9vbS5nZXN0dXJlLiRpbWFnZUVsID8gc3dpcGVyLnpvb20uZ2VzdHVyZS4kaW1hZ2VFbFswXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlRWwgPSBzd2lwZXIuem9vbS5nZXN0dXJlLiRzbGlkZUVsID8gc3dpcGVyLnpvb20uZ2VzdHVyZS4kc2xpZGVFbFswXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ3pvb21DaGFuZ2UnLCB2YWx1ZSwgaW1hZ2VFbCwgc2xpZGVFbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNjYWxlID0gdmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuem9vbS5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVyLnpvb20uZW5hYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICAgICAgc3dpcGVyLnpvb20uZGlzYWJsZSgpO1xuICAgICAgICB9LFxuICAgICAgICB0b3VjaFN0YXJ0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoIXN3aXBlci56b29tLmVuYWJsZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgc3dpcGVyLnpvb20ub25Ub3VjaFN0YXJ0KGUpO1xuICAgICAgICB9LFxuICAgICAgICB0b3VjaEVuZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKCFzd2lwZXIuem9vbS5lbmFibGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHN3aXBlci56b29tLm9uVG91Y2hFbmQoZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRvdWJsZVRhcDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuem9vbS5lbmFibGVkICYmIHN3aXBlci56b29tLmVuYWJsZWQgJiYgc3dpcGVyLnBhcmFtcy56b29tLnRvZ2dsZSkge1xuICAgICAgICAgICAgICAgIHN3aXBlci56b29tLnRvZ2dsZShlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoc3dpcGVyLnpvb20uZW5hYmxlZCAmJiBzd2lwZXIucGFyYW1zLnpvb20uZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHN3aXBlci56b29tLm9uVHJhbnNpdGlvbkVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG59O1xuLyogZXNsaW50IG5vLXVuZGVyc2NvcmUtZGFuZ2xlOiBcIm9mZlwiICovXG52YXIgQXV0b3BsYXkgPSB7XG4gICAgcnVuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICB2YXIgJGFjdGl2ZVNsaWRlRWwgPSBzd2lwZXIuc2xpZGVzLmVxKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICAgIHZhciBkZWxheSA9IHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZGVsYXk7XG4gICAgICAgIGlmICgkYWN0aXZlU2xpZGVFbC5hdHRyKCdkYXRhLXN3aXBlci1hdXRvcGxheScpKSB7XG4gICAgICAgICAgICBkZWxheSA9ICRhY3RpdmVTbGlkZUVsLmF0dHIoJ2RhdGEtc3dpcGVyLWF1dG9wbGF5JykgfHwgc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kZWxheTtcbiAgICAgICAgfVxuICAgICAgICBjbGVhclRpbWVvdXQoc3dpcGVyLmF1dG9wbGF5LnRpbWVvdXQpO1xuICAgICAgICBzd2lwZXIuYXV0b3BsYXkudGltZW91dCA9IFV0aWxzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5LnJldmVyc2VEaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlci5zbGlkZVByZXYoc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlci5lbWl0KCdhdXRvcGxheScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghc3dpcGVyLmlzQmVnaW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlci5zbGlkZVByZXYoc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlci5lbWl0KCdhdXRvcGxheScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5zdG9wT25MYXN0U2xpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxLCBzd2lwZXIucGFyYW1zLnNwZWVkLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ2F1dG9wbGF5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkuc3RvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlTmV4dChzd2lwZXIucGFyYW1zLnNwZWVkLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBzd2lwZXIuZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFzd2lwZXIuaXNFbmQpIHtcbiAgICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVOZXh0KHN3aXBlci5wYXJhbXMuc3BlZWQsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHN3aXBlci5lbWl0KCdhdXRvcGxheScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIXN3aXBlci5wYXJhbXMuYXV0b3BsYXkuc3RvcE9uTGFzdFNsaWRlKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG8oMCwgc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ2F1dG9wbGF5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBkZWxheSk7XG4gICAgfSxcbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKHR5cGVvZiBzd2lwZXIuYXV0b3BsYXkudGltZW91dCAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChzd2lwZXIuYXV0b3BsYXkucnVubmluZylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICBzd2lwZXIuZW1pdCgnYXV0b3BsYXlTdGFydCcpO1xuICAgICAgICBzd2lwZXIuYXV0b3BsYXkucnVuKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgaWYgKCFzd2lwZXIuYXV0b3BsYXkucnVubmluZylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHR5cGVvZiBzd2lwZXIuYXV0b3BsYXkudGltZW91dCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChzd2lwZXIuYXV0b3BsYXkudGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHN3aXBlci5hdXRvcGxheS50aW1lb3V0KTtcbiAgICAgICAgICAgIHN3aXBlci5hdXRvcGxheS50aW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHN3aXBlci5hdXRvcGxheS5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHN3aXBlci5lbWl0KCdhdXRvcGxheVN0b3AnKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBwYXVzZTogZnVuY3Rpb24gKHNwZWVkKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBpZiAoIXN3aXBlci5hdXRvcGxheS5ydW5uaW5nKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoc3dpcGVyLmF1dG9wbGF5LnBhdXNlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHN3aXBlci5hdXRvcGxheS50aW1lb3V0KVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHN3aXBlci5hdXRvcGxheS50aW1lb3V0KTtcbiAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCA9IHRydWU7XG4gICAgICAgIGlmIChzcGVlZCA9PT0gMCB8fCAhc3dpcGVyLnBhcmFtcy5hdXRvcGxheS53YWl0Rm9yVHJhbnNpdGlvbikge1xuICAgICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnJ1bigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5hdXRvcGxheS5vblRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIHN3aXBlci5hdXRvcGxheS5vblRyYW5zaXRpb25FbmQpO1xuICAgICAgICB9XG4gICAgfSxcbn07XG52YXIgYXV0b3BsYXkgPSB7XG4gICAgbmFtZTogJ2F1dG9wbGF5JyxcbiAgICBwYXJhbXM6IHtcbiAgICAgICAgYXV0b3BsYXk6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXG4gICAgICAgICAgICB3YWl0Rm9yVHJhbnNpdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlLFxuICAgICAgICAgICAgc3RvcE9uTGFzdFNsaWRlOiBmYWxzZSxcbiAgICAgICAgICAgIHJldmVyc2VEaXJlY3Rpb246IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgICAgICBVdGlscy5leHRlbmQoc3dpcGVyLCB7XG4gICAgICAgICAgICBhdXRvcGxheToge1xuICAgICAgICAgICAgICAgIHJ1bm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhdXNlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcnVuOiBBdXRvcGxheS5ydW4uYmluZChzd2lwZXIpLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBBdXRvcGxheS5zdGFydC5iaW5kKHN3aXBlciksXG4gICAgICAgICAgICAgICAgc3RvcDogQXV0b3BsYXkuc3RvcC5iaW5kKHN3aXBlciksXG4gICAgICAgICAgICAgICAgcGF1c2U6IEF1dG9wbGF5LnBhdXNlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgICAgICAgICBvblRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci4kd3JhcHBlckVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIuYXV0b3BsYXkub25UcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIHN3aXBlci5hdXRvcGxheS5vblRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgICAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXBlci5hdXRvcGxheS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkucnVuKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYmVmb3JlVHJhbnNpdGlvblN0YXJ0OiBmdW5jdGlvbiAoc3BlZWQsIGludGVybmFsKSB7XG4gICAgICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgICAgIGlmIChzd2lwZXIuYXV0b3BsYXkucnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChpbnRlcm5hbCB8fCAhc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2Uoc3BlZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnN0b3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNsaWRlckZpcnN0TW92ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkuc3RvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICAgICAgICAgIGlmIChzd2lwZXIuYXV0b3BsYXkucnVubmluZykge1xuICAgICAgICAgICAgICAgIHN3aXBlci5hdXRvcGxheS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4vLyBTd2lwZXIgQ2xhc3NcbnZhciBjb21wb25lbnRzID0gW1xuICAgIERldmljZSQxLFxuICAgIFN1cHBvcnQkMSxcbiAgICBCcm93c2VyJDEsXG4gICAgUmVzaXplLFxuICAgIE9ic2VydmVyJDEsXG5dO1xuaWYgKHR5cGVvZiBTd2lwZXIudXNlID09PSAndW5kZWZpbmVkJykge1xuICAgIFN3aXBlci51c2UgPSBTd2lwZXIuQ2xhc3MudXNlO1xuICAgIFN3aXBlci5pbnN0YWxsTW9kdWxlID0gU3dpcGVyLkNsYXNzLmluc3RhbGxNb2R1bGU7XG59XG5Td2lwZXIudXNlKGNvbXBvbmVudHMpO1xuU3dpcGVyLnVzZShbcGFnaW5hdGlvbiwgc2Nyb2xsYmFyLCBhdXRvcGxheSwgem9vbV0pO1xuZXhwb3J0IHsgU3dpcGVyIH07XG4iXSwic291cmNlUm9vdCI6IiJ9