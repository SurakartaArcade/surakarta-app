/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist-js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./www/js/AnalysisWorker.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./www/js/AnalysisWorker.worker.js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./www/js/AnalysisWorker.worker.js ***!
  \******************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var surakarta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! surakarta */ "./node_modules/surakarta/lib/index.js");
/* harmony import */ var surakarta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(surakarta__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var surakarta_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! surakarta-ai */ "./node_modules/surakarta-ai/dist/index.bundle.js");
/* harmony import */ var surakarta_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(surakarta_ai__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}




self.onmessage = function (messageEvent) {
  var _messageEvent$data = _slicedToArray(messageEvent.data, 2),
      action = _messageEvent$data[0],
      surakarta = _messageEvent$data[1];

  console.log('action: ' + action);

  if (action === 'suggestPlay') {
    var surakarta_ = surakarta__WEBPACK_IMPORTED_MODULE_0__["Surakarta"].fromState(surakarta.states);
    surakarta_.turn = surakarta.turn;
    console.log(surakarta);
    console.log(surakarta_);
    var computedPlay = surakarta_ai__WEBPACK_IMPORTED_MODULE_1__["suggestPlay"](surakarta_);
    console.log('here');
    self.postMessage([computedPlay]);
  } else {
    throw new Error('Illegal actino code');
  }
};

/***/ }),

/***/ "./node_modules/eventemitter3/index.js":
/*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./node_modules/surakarta-ai/dist/index.bundle.js":
/*!********************************************************!*\
  !*** ./node_modules/surakarta-ai/dist/index.bundle.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! surakarta */ "./node_modules/surakarta/lib/index.js"), __webpack_require__(/*! surakarta-analysis */ "./node_modules/surakarta-analysis/lib/index.js"));
	else {}
})(window, function(__WEBPACK_EXTERNAL_MODULE_surakarta__, __WEBPACK_EXTERNAL_MODULE_surakarta_analysis__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/opool/index.js":
/*!*************************************!*\
  !*** ./node_modules/opool/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Pool = (function () {\n    function Pool(Func) {\n        this.pool = [];\n        this.Func = Func;\n    }\n    Pool.prototype.get = function () {\n        if (this.pool.length) {\n            return this.pool.splice(0, 1)[0];\n        }\n        return new this.Func();\n    };\n    Pool.prototype.release = function (obj) {\n        if (this.Func.reset) {\n            this.Func.reset(obj);\n        }\n        this.pool.push(obj);\n    };\n    return Pool;\n})();\nmodule.exports = Pool;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://SKAI/./node_modules/opool/index.js?");

/***/ }),

/***/ "./src/CommonContext.ts":
/*!******************************!*\
  !*** ./src/CommonContext.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar mem_1 = __webpack_require__(/*! ./mem */ \"./src/mem/index.ts\");\nvar CommonContext = (function () {\n    function CommonContext(noCache, requestHandle) {\n        if (noCache === void 0) { noCache = false; }\n        if (requestHandle === void 0) { requestHandle = 0; }\n        this.requestHandle = requestHandle || Math.random() * (1 << 30);\n        this.useCache = !noCache;\n    }\n    Object.defineProperty(CommonContext.prototype, \"cache\", {\n        get: function () {\n            if (!this.useCache) {\n                return null;\n            }\n            else if (!this._cache) {\n                this._cache = new mem_1.TranspositionTable({ nodeLimit: 9000 });\n            }\n            return this._cache;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    CommonContext.postThreadBoundary = function (context) {\n        return new CommonContext(!!context.cache, context.requestHandle);\n    };\n    return CommonContext;\n}());\nexports.CommonContext = CommonContext;\n\n\n//# sourceURL=webpack://SKAI/./src/CommonContext.ts?");

/***/ }),

/***/ "./src/SearchContext.ts":
/*!******************************!*\
  !*** ./src/SearchContext.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar SK = __importStar(__webpack_require__(/*! surakarta */ \"surakarta\"));\nvar CommonContext_1 = __webpack_require__(/*! ./CommonContext */ \"./src/CommonContext.ts\");\nvar opool_1 = __importDefault(__webpack_require__(/*! opool */ \"./node_modules/opool/index.js\"));\nvar SearchContext = (function () {\n    function SearchContext() {\n        this.surakarta = null;\n        this.playerId = SK.NOT_FILLED;\n        this.searchDepth = 0;\n        this.depthLimit = 0;\n        this.alpha = Number.NEGATIVE_INFINITY;\n        this.beta = Number.POSITIVE_INFINITY;\n        this.common = null;\n    }\n    SearchContext.prototype.init = function (surakarta, playerId, depthLimit, searchDepth) {\n        if (searchDepth === void 0) { searchDepth = 0; }\n        this.surakarta = surakarta;\n        this.playerId = playerId;\n        this.depthLimit = depthLimit;\n        this.searchDepth = searchDepth;\n        this.alpha = Number.NEGATIVE_INFINITY;\n        this.beta = Number.POSITIVE_INFINITY;\n    };\n    SearchContext.prototype.reset = function () {\n        this.surakarta = null;\n        this.playerId = 0;\n        this.depthLimit = 0;\n        this.searchDepth = 0;\n        this.alpha = Number.NEGATIVE_INFINITY;\n        this.beta = Number.POSITIVE_INFINITY;\n    };\n    SearchContext.prototype.destroy = function () {\n        SearchContext.pool.release(this);\n    };\n    SearchContext.postThreadBoundary = function (context) {\n        var newContext = new SearchContext();\n        newContext.surakarta = context.surakarta;\n        newContext.playerId = context.playerId;\n        newContext.depthLimit = context.depthLimit;\n        newContext.searchDepth = context.searchDepth;\n        newContext.alpha = context.alpha;\n        newContext.beta = context.beta;\n        var _a = context.surakarta, states = _a.states, turn = _a.turn;\n        newContext.surakarta = SK.Surakarta.fromState(states);\n        newContext.surakarta.turn = turn;\n        newContext.common = CommonContext_1.CommonContext.postThreadBoundary(context.common);\n        return newContext;\n    };\n    SearchContext.pool = new opool_1.default(SearchContext);\n    return SearchContext;\n}());\nexports.SearchContext = SearchContext;\nfunction createContext(surakarta, searchOptions) {\n    if (searchOptions === void 0) { searchOptions = { noCache: false }; }\n    var context = SearchContext.pool.get();\n    context.init(surakarta, surakarta.turnPlayer, 4);\n    context.common = new CommonContext_1.CommonContext(searchOptions.noCache);\n    return context;\n}\nexports.createContext = createContext;\nfunction createInheritedContext(surakarta, parent) {\n    var context = SearchContext.pool.get();\n    context.surakarta = surakarta;\n    context.playerId =\n        parent.playerId === SK.BLACK_PLAYER ? SK.RED_PLAYER : SK.BLACK_PLAYER;\n    context.searchDepth = parent.searchDepth + 1;\n    context.depthLimit = parent.depthLimit;\n    context.alpha = -parent.beta;\n    context.beta = -parent.alpha;\n    context.common = parent.common;\n    return context;\n}\nexports.createInheritedContext = createInheritedContext;\n\n\n//# sourceURL=webpack://SKAI/./src/SearchContext.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar search_1 = __webpack_require__(/*! ./search */ \"./src/search.ts\");\nvar SearchContext_1 = __webpack_require__(/*! ./SearchContext */ \"./src/SearchContext.ts\");\nfunction suggestPlay(surakarta) {\n    return search_1.search(SearchContext_1.createContext(surakarta));\n}\nexports.suggestPlay = suggestPlay;\nfunction play(surakarta) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            return [2, search_1.search(SearchContext_1.createContext(surakarta))];\n        });\n    });\n}\nexports.play = play;\nfunction resetResources() {\n    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {\n        return [2];\n    }); });\n}\nexports.resetResources = resetResources;\nexports.default = {\n    suggestPlay: suggestPlay\n};\nexports.AI = { suggestPlay: suggestPlay };\n\n\n//# sourceURL=webpack://SKAI/./src/index.ts?");

/***/ }),

/***/ "./src/mem/TranspositionTable.ts":
/*!***************************************!*\
  !*** ./src/mem/TranspositionTable.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ZobristHasher_1 = __webpack_require__(/*! ./ZobristHasher */ \"./src/mem/ZobristHasher.ts\");\nfunction npow2(n) {\n    return 1 << (31 - Math.clz32(n));\n}\nvar TTEntry = (function () {\n    function TTEntry() {\n        this.key = -1;\n        this.value = 0;\n        this.depth = 0;\n        this.lastHit = 0;\n    }\n    Object.defineProperty(TTEntry.prototype, \"weight\", {\n        get: function () {\n            return -this.depth - 2 * (performance.now() - this.lastHit);\n        },\n        enumerable: true,\n        configurable: true\n    });\n    TTEntry.prototype.feed = function (key, value, depth) {\n        if (this.weight > -depth) {\n            return;\n        }\n        this.key = key;\n        this.value = value;\n        this.depth = depth;\n        this.lastHit = performance.now();\n    };\n    TTEntry.prototype.hit = function () {\n        this.lastHit = performance.now();\n        return this.value;\n    };\n    return TTEntry;\n}());\nexports.TTEntry = TTEntry;\nvar TranspositionTable = (function () {\n    function TranspositionTable(options) {\n        this.nodeLimit = npow2(options.nodeLimit);\n        var size = Math.floor(this.nodeLimit / 3);\n        this.buckets = new Array(size);\n        for (var i = 0; i < size; i++) {\n            this.buckets[i] = new Array(3);\n            for (var j = 0; j < 3; j++) {\n                this.buckets[i][j] = new TTEntry();\n            }\n        }\n        ZobristHasher_1.initZobrist();\n    }\n    TranspositionTable.prototype.hit = function (key, willFeed) {\n        if (willFeed === void 0) { willFeed = true; }\n        var bucket = this.buckets[key % this.buckets.length];\n        for (var i = 0; i < bucket.length; i++) {\n            if (bucket[i].key == key) {\n                return bucket[i].hit();\n            }\n        }\n        if (willFeed) {\n            var worstEntry = bucket[0];\n            for (var i = 1; i < bucket.length; i++) {\n                var entry = bucket[i];\n                if (entry.weight < worstEntry.weight) {\n                    worstEntry = entry;\n                }\n            }\n            return worstEntry;\n        }\n        return null;\n    };\n    return TranspositionTable;\n}());\nexports.TranspositionTable = TranspositionTable;\n\n\n//# sourceURL=webpack://SKAI/./src/mem/TranspositionTable.ts?");

/***/ }),

/***/ "./src/mem/ZobristHasher.ts":
/*!**********************************!*\
  !*** ./src/mem/ZobristHasher.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar baseCodes = [];\nvar isInit = false;\nfunction initZobrist() {\n    if (isInit) {\n        return;\n    }\n    for (var player = -1; player <= 1; player++) {\n        var playerHashes = new Array(36);\n        for (var pos = 0; pos < 36; pos++) {\n            playerHashes[pos] = Math.random() * (1 << 30);\n        }\n        baseCodes[player] = playerHashes;\n    }\n    isInit = true;\n}\nexports.initZobrist = initZobrist;\nfunction hash(node) {\n    initZobrist();\n    var hashCode = 0;\n    for (var p = 0; p < 36; p++) {\n        hashCode ^= baseCodes[node.states[p]][p];\n    }\n    return hashCode;\n}\nexports.hash = hash;\n\n\n//# sourceURL=webpack://SKAI/./src/mem/ZobristHasher.ts?");

/***/ }),

/***/ "./src/mem/index.ts":
/*!**************************!*\
  !*** ./src/mem/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./ZobristHasher */ \"./src/mem/ZobristHasher.ts\"));\n__export(__webpack_require__(/*! ./TranspositionTable */ \"./src/mem/TranspositionTable.ts\"));\n\n\n//# sourceURL=webpack://SKAI/./src/mem/index.ts?");

/***/ }),

/***/ "./src/search.ts":
/*!***********************!*\
  !*** ./src/search.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar SK = __importStar(__webpack_require__(/*! surakarta */ \"surakarta\"));\nvar surakarta_analysis_1 = __webpack_require__(/*! surakarta-analysis */ \"surakarta-analysis\");\nvar SearchContext_1 = __webpack_require__(/*! ./SearchContext */ \"./src/SearchContext.ts\");\nvar mem_1 = __webpack_require__(/*! ./mem */ \"./src/mem/index.ts\");\nvar inflateHandle = surakarta_analysis_1.MoveHelper.inflateHandle;\nvar Aggregate = (function () {\n    function Aggregate() {\n        this.indexed = [];\n    }\n    Object.defineProperty(Aggregate.prototype, \"length\", {\n        get: function () {\n            return this.indexed.length;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Aggregate.prototype.forEach = function (callback) {\n        var moveTarget = new SK.Move();\n        this.indexed.forEach(function (moveHandle) {\n            callback(inflateHandle(moveHandle, moveTarget));\n        });\n    };\n    Aggregate.from = function (context) {\n        var surakarta = context.surakarta;\n        var movesArray = new Aggregate();\n        surakarta_analysis_1.Indexer.index(surakarta, movesArray.indexed);\n        surakarta_analysis_1.sortIndex(surakarta, movesArray.indexed);\n        return movesArray;\n    };\n    return Aggregate;\n}());\nvar surakartaPool = [];\nfunction search(context) {\n    var surakarta = context.surakarta, playerId = context.playerId, searchDepth = context.searchDepth, depthLimit = context.depthLimit;\n    if (searchDepth === depthLimit) {\n        return (2 * playerId - 1) * surakarta_analysis_1.evaluate(surakarta);\n    }\n    var hit;\n    var hashCode = mem_1.hash(surakarta);\n    if (context.common.cache && searchDepth > 0) {\n        hit = context.common.cache.hit(hashCode);\n        if (typeof hit === \"number\") {\n            return hit;\n        }\n    }\n    var childState = surakartaPool.pop() || new SK.Surakarta(true);\n    childState.copyFrom(surakarta);\n    childState.turn = surakarta.turn;\n    var movesIterable = Aggregate.from(context);\n    var bestMove = null;\n    var bestValue = Number.NEGATIVE_INFINITY;\n    var stopped = false;\n    movesIterable.forEach(function (move) {\n        if (stopped) {\n            return;\n        }\n        childState.step(move.srcRow, move.srcColumn, move.dstRow, move.dstColumn, true, move.isAttack);\n        ++childState.turn;\n        var value = -search(SearchContext_1.createInheritedContext(childState, context));\n        if (value > bestValue) {\n            if (searchDepth === 0) {\n                bestMove = move.clone();\n            }\n            bestValue = value;\n        }\n        context.alpha = Math.max(context.alpha, value);\n        if (context.alpha >= context.beta) {\n            stopped = true;\n        }\n        childState.copyFrom(surakarta);\n        --childState.turn;\n    });\n    if (searchDepth === 0) {\n        return bestMove;\n    }\n    if (hit) {\n        hit.feed(hashCode, bestValue, searchDepth);\n    }\n    context.destroy();\n    return bestValue;\n}\nexports.search = search;\n\n\n//# sourceURL=webpack://SKAI/./src/search.ts?");

/***/ }),

/***/ "surakarta":
/*!**********************************************************************************************!*\
  !*** external {"commonjs":"surakarta","commonjs2":"surakarta","amd":"surakarta","root":"_"} ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_surakarta__;\n\n//# sourceURL=webpack://SKAI/external_%7B%22commonjs%22:%22surakarta%22,%22commonjs2%22:%22surakarta%22,%22amd%22:%22surakarta%22,%22root%22:%22_%22%7D?");

/***/ }),

/***/ "surakarta-analysis":
/*!*************************************************************************************************************************!*\
  !*** external {"commonjs":"surakarta-analysis","commonjs2":"surakarta-analysis","amd":"surakarta-analysis","root":"_"} ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_surakarta_analysis__;\n\n//# sourceURL=webpack://SKAI/external_%7B%22commonjs%22:%22surakarta-analysis%22,%22commonjs2%22:%22surakarta-analysis%22,%22amd%22:%22surakarta-analysis%22,%22root%22:%22_%22%7D?");

/***/ })

/******/ });
});

/***/ }),

/***/ "./node_modules/surakarta-analysis/lib/data/MoveHandle.js":
/*!****************************************************************!*\
  !*** ./node_modules/surakarta-analysis/lib/data/MoveHandle.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoveHelper = void 0;

var _surakarta = __webpack_require__(/*! surakarta */ "./node_modules/surakarta/lib/index.js");

/**
 * @namespace SK.analysis
 */
var MoveHelper = {
  roomBitSize: 12,
  createHandle: function createHandle(move) {
    return move.srcRow | move.srcColumn << 3 | move.dstRow << 6 | move.dstColumn << 9 | (move.isAttack ? 1 : 0) << 12 | (move.direction > 0 ? move.direction : 0) << 13;
  },
  buildHandle: function buildHandle(srcRow, srcColumn, dstRow, dstColumn) {
    var isAttack = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var direction = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : -1;
    return srcRow | srcColumn << 3 | dstRow << 6 | dstColumn << 9 | (isAttack ? 1 : 0) << 12 | (direction > 0 ? direction : 0) << 13;
  },
  expandHandle: function expandHandle(handle) {
    return MoveHelper.inflateHandle(handle, new _surakarta.Move());
  },
  inflateHandle: function inflateHandle(handle, move) {
    var isAttack = !!(handle >> 12 & 1);
    var direction = isAttack ? handle >> 13 & 15 : -1;
    move.srcRow = handle & 7;
    move.srcColumn = handle >> 3 & 7;
    move.dstRow = handle >> 6 & 7;
    move.dstColumn = handle >> 9 & 7;
    move.isAttack = isAttack;
    move.direction = direction;
    return move;
  },
  storeInRoom: function storeInRoom(handle, data) {
    return handle | data << 18;
  },
  inflateRoom: function inflateRoom(handle) {
    return handle >> 18;
  }
};
exports.MoveHelper = MoveHelper;

/***/ }),

/***/ "./node_modules/surakarta-analysis/lib/data/PositionHandle.js":
/*!********************************************************************!*\
  !*** ./node_modules/surakarta-analysis/lib/data/PositionHandle.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PositionHelper = void 0;

var _surakarta = __webpack_require__(/*! surakarta */ "./node_modules/surakarta/lib/index.js");

/**
 * @namespace SK.analysis.PositionHelper
 */
var PositionHelper = {
  createHandle: function createHandle(position) {
    return position.row | position.column << 3;
  },
  buildHandle: function buildHandle(row, column) {
    return row | column << 3;
  },
  expandHandle: function expandHandle(handle) {
    return PositionHelper.inflateHandle(handle, new _surakarta.Position());
  },
  inflateHandle: function inflateHandle(handle, position) {
    position.row = handle & 7;
    position.column = handle >> 3 & 7;
    return position;
  }
};
exports.PositionHelper = PositionHelper;

/***/ }),

/***/ "./node_modules/surakarta-analysis/lib/data/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/surakarta-analysis/lib/data/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MoveHandle = __webpack_require__(/*! ./MoveHandle */ "./node_modules/surakarta-analysis/lib/data/MoveHandle.js");

Object.keys(_MoveHandle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MoveHandle[key];
    }
  });
});

var _PositionHandle = __webpack_require__(/*! ./PositionHandle */ "./node_modules/surakarta-analysis/lib/data/PositionHandle.js");

Object.keys(_PositionHandle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PositionHandle[key];
    }
  });
});

/***/ }),

/***/ "./node_modules/surakarta-analysis/lib/evaluate.js":
/*!*********************************************************!*\
  !*** ./node_modules/surakarta-analysis/lib/evaluate.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.evaluate = evaluate;

var _surakarta = __webpack_require__(/*! surakarta */ "./node_modules/surakarta/lib/index.js");

function isCorner(r, c) {
  return (r === c || r === 5 - c) && (r === 0 || r === 5);
}

function evaluate(surakarta) {
  var advantage = 0;
  surakarta.forEach(function (player, row, column) {
    var pebbleValue = 0;

    if (player === _surakarta.RED_PLAYER) {
      pebbleValue = 1;
    } else if (player === _surakarta.BLACK_PLAYER) {
      pebbleValue = -1;
    }

    if (isCorner(row, column)) {
      pebbleValue *= 0.5;
    }

    advantage += pebbleValue;
  });
  return advantage;
}

/***/ }),

/***/ "./node_modules/surakarta-analysis/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/surakarta-analysis/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexer = __webpack_require__(/*! ./indexer */ "./node_modules/surakarta-analysis/lib/indexer.js");

Object.keys(_indexer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _indexer[key];
    }
  });
});

var _evaluate = __webpack_require__(/*! ./evaluate */ "./node_modules/surakarta-analysis/lib/evaluate.js");

Object.keys(_evaluate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _evaluate[key];
    }
  });
});

var _data = __webpack_require__(/*! ./data */ "./node_modules/surakarta-analysis/lib/data/index.js");

Object.keys(_data).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _data[key];
    }
  });
});

var _sortIndex = __webpack_require__(/*! ./sortIndex */ "./node_modules/surakarta-analysis/lib/sortIndex.js");

Object.keys(_sortIndex).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sortIndex[key];
    }
  });
});

/***/ }),

/***/ "./node_modules/surakarta-analysis/lib/indexer.js":
/*!********************************************************!*\
  !*** ./node_modules/surakarta-analysis/lib/indexer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indexSingleStepsFrom = indexSingleStepsFrom;
exports.indexAttacksFrom = indexAttacksFrom;
exports.indexFrom = indexFrom;
exports.indexSingleSteps = indexSingleSteps;
exports.indexAttacks = indexAttacks;
exports.index = index;
exports.Indexer = void 0;

var _surakarta = __webpack_require__(/*! surakarta */ "./node_modules/surakarta/lib/index.js");

var _data = __webpack_require__(/*! ./data */ "./node_modules/surakarta-analysis/lib/data/index.js");

var ATTACK_DIRECTIONS = [_surakarta.Directions.LEFT, _surakarta.Directions.UP, _surakarta.Directions.RIGHT, _surakarta.Directions.DOWN];

var PositionDB = function () {
  var buffer = [];

  for (var r = 0; r < 6; r++) {
    for (var c = 0; c < 6; c++) {
      buffer.push(new _surakarta.Position(r, c));
    }
  }

  return buffer;
}();
/**
 * Indexes all the possible single-step moves from the given position.
 *
 * @param {SK.Surakarta} surakarta - board state before the move
 * @param {SK.Position} basePosition - position of pebble being moved
 * @param {Array<SK.analysis.MoveHandle>}[index] - buffer to append into
 */


function indexSingleStepsFrom(surakarta, basePosition) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (surakarta.states[basePosition.index()] !== surakarta.turnPlayer) {
    return index;
  }

  var r = basePosition.row,
      c = basePosition.column;

  if (surakarta.state(r, c - 1) === _surakarta.NOT_FILLED) {
    index.push(_data.MoveHelper.buildHandle(r, c, r, c - 1));
  }

  if (surakarta.state(r - 1, c - 1) === _surakarta.NOT_FILLED) {
    index.push(_data.MoveHelper.buildHandle(r, c, r - 1, c - 1));
  }

  if (surakarta.state(r - 1, c) === _surakarta.NOT_FILLED) {
    index.push(_data.MoveHelper.buildHandle(r, c, r - 1, c));
  }

  if (surakarta.state(r - 1, c + 1) === _surakarta.NOT_FILLED) {
    index.push(_data.MoveHelper.buildHandle(r, c, r - 1, c + 1));
  }

  if (surakarta.state(r, c + 1) === _surakarta.NOT_FILLED) {
    index.push(_data.MoveHelper.buildHandle(r, c, r, c + 1));
  }

  if (surakarta.state(r + 1, c + 1) === _surakarta.NOT_FILLED) {
    index.push(_data.MoveHelper.buildHandle(r, c, r + 1, c + 1));
  }

  if (surakarta.state(r + 1, c) === _surakarta.NOT_FILLED) {
    index.push(_data.MoveHelper.buildHandle(r, c, r + 1, c));
  }

  if (surakarta.state(r + 1, c - 1) === _surakarta.NOT_FILLED) {
    index.push(_data.MoveHelper.buildHandle(r, c, r + 1, c - 1));
  }

  return index;
}
/**
 * Indexes all possible attacking moves from the given position.
 *
 * @param {SK.Surakarta} surakarta - board state before the attack
 * @param {SK.Position} basePosition - attacking pebble's original position
 * @param {Array<SK.analysis.MoveHandle>}[index] - buffer to append into
 */


function indexAttacksFrom(surakarta, basePosition) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (surakarta.states[basePosition.index()] != surakarta.turnPlayer) {
    return index;
  }

  var baseRow = basePosition.row,
      baseColumn = basePosition.column; // Algorithm similar to SK.PathFinder

  var pebble = surakarta.state(basePosition.row, basePosition.column);
  var row;
  var column;
  var direction;
  var selfTouch;
  var loops;

  for (var i = 0; i < 4; i++) {
    row = basePosition.row;
    column = basePosition.column;
    direction = ATTACK_DIRECTIONS[i];
    var baseDirection = direction;
    selfTouch = 0;
    loops = 0;
    var builderBuffer = []; // eslint-disable-next-line no-constant-condition

    while (true) {
      var next = void 0;

      try {
        next = _surakarta.PathFinder.findStep(row, column, direction);
      } catch (e) {
        break; // illegal attack path
      }

      row = next[0];
      column = next[1];
      var self = false;

      if (row === basePosition.row && column === basePosition.column) {
        ++selfTouch;

        if (selfTouch > 1) {
          break; // prevent infinite loop
        }

        self = true;
      }

      var state = surakarta.state(row, column);

      if (!self && state === pebble) {
        break; // can't capture our own pebble
      }

      if (next.length === 3) {
        ++loops;
        direction = next.direction;
      }

      if (loops >= 1) {
        builderBuffer.push(_data.MoveHelper.buildHandle(baseRow, baseColumn, row, column, true, baseDirection));
      }

      if (state !== _surakarta.NOT_FILLED) {
        break;
      }
    }

    index.push.apply(index, builderBuffer);
  }

  return index;
}
/**
 * Indexes all possible moves from a given position.
 *
 * @param {SK.Surakarta} surakarta - board state before the move
 * @param {SK.Position} basePosition - position of pebble being moved
 * @param {Array<MoveHandle>} index - buffer to append into
 */


function indexFrom(surakarta, basePosition, index) {
  indexAttacksFrom(surakarta, basePosition, index);
  indexSingleStepsFrom(surakarta, basePosition, index);
}
/**
 * Index all possible single-step moves on the given board.
 *
 * @param {SK.Surakarta} surakarta
 * @param {Array<SK.analysis.MoveHandle>}[index]
 * @param {Array<SK.Position>}[positions]
 * @returns {Array<SK.analysis.MoveHandle>} index
 */


function indexSingleSteps(surakarta) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var positions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PositionDB;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = positions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var pos = _step.value;
      indexSingleStepsFrom(surakarta, pos, index);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return index;
}
/**
 * Index all possible attacks on the given board.
 *
 * @param {SK.Surakarta} surakarta
 * @param {Array<SK.analysis.MoveHandle>}[index]
 * @param {Array<SK.Position>}[positions]
 * @returns {Array<SK.analysis.MoveHandle>} index
 */


function indexAttacks(surakarta) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var positions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PositionDB;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = positions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var pos = _step2.value;
      indexAttacksFrom(surakarta, pos, index);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return index;
}
/**
 * Indexes all possible moves for a node.
 *
 * @param {SK.Surakarta} surakarta - node to explore
 * @param {Array<SK.analysis.MoveHandle>}[index=[]] - buffer to append to
 * @param {Array<SK.Position>}[positions] - index moves only from the given positions
 */


function index(surakarta) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var positions = arguments.length > 2 ? arguments[2] : undefined;
  indexAttacks(surakarta, index, positions);
  indexSingleSteps(surakarta, index, positions);
  return index;
}

var Indexer = {
  index: index,
  indexSingleSteps: indexSingleSteps,
  indexAttacks: indexAttacks,
  indexSingleStepsFrom: indexSingleStepsFrom,
  indexAttacksFrom: indexAttacksFrom
};
exports.Indexer = Indexer;

/***/ }),

/***/ "./node_modules/surakarta-analysis/lib/sortIndex.js":
/*!**********************************************************!*\
  !*** ./node_modules/surakarta-analysis/lib/sortIndex.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortIndex = sortIndex;

var _surakarta = __webpack_require__(/*! surakarta */ "./node_modules/surakarta/lib/index.js");

var _evaluate = __webpack_require__(/*! ./evaluate */ "./node_modules/surakarta-analysis/lib/evaluate.js");

var _data = __webpack_require__(/*! ./data */ "./node_modules/surakarta-analysis/lib/data/index.js");

/**
 * Sorts the index of moves in-place by an approximation of how "good" they
 * are when used on the given node.
 *
 * @param {SK.Surakarta} node - node on which moves are to be played
 * @param {SK.analysis.MoveHandle[]} index - index of moves (in handle format)
 * @returns {SK.analysis.MoveHandlep[]} - the same index, sorted
 */
function sortIndex(node, index) {
  var deepNode = node.clone();
  var move = new _surakarta.Move();
  var evalCoef = 2 * node.turn - 1; // flip evaluations for black player
  // Map each handle to one with its evaluation

  for (var i = 0; i < index.length; i++) {
    var handle = index[i];
    deepNode.copyFrom(node);
    deepNode.turn = node.turn;

    _data.MoveHelper.inflateHandle(handle, move);

    deepNode.step(move.srcRow, move.srcColumn, move.dstRow, move.dstColumn, true, move.isAttack);
    index[i] = _data.MoveHelper.storeInRoom(handle, evalCoef * Math.max(Math.min(2047, (0, _evaluate.evaluate)(deepNode)), -2047));
  } // Sort making highest evaluations to front


  index.sort(function (handle0, handle1) {
    return _data.MoveHelper.inflateRoom(handle0) - _data.MoveHelper.inflateRoom(handle1);
  });
  return index;
}

/***/ }),

/***/ "./node_modules/surakarta/lib/Move.js":
/*!********************************************!*\
  !*** ./node_modules/surakarta/lib/Move.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = exports.Move = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Represents a move that can be made in Surakarta.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */var
Move = /*#__PURE__*/function () {







  function Move()






  {var srcRow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;var srcColumn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var dstRow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;var dstColumn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;var isAttack = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;var direction = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : -1;_classCallCheck(this, Move);_defineProperty(this, "srcRow", void 0);_defineProperty(this, "srcColumn", void 0);_defineProperty(this, "dstRow", void 0);_defineProperty(this, "dstColumn", void 0);_defineProperty(this, "isAttack", void 0);_defineProperty(this, "direction", void 0);
    /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * Row of source/starting position.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @member {number}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */
    this.srcRow = srcRow;

    /**
                           * Column of source/starting position.
                           * @member {number}
                           */
    this.srcColumn = srcColumn;

    /**
                                 * Row of destination/final position.
                                 * @member {number}
                                 */
    this.dstRow = dstRow;

    /**
                           * Column of destination/final position.
                           * @member {number}
                           */
    this.dstColumn = dstColumn;

    /**
                                 * Whether this move is an attack (need not be a capture).
                                 * @member {boolean}
                                 */
    this.isAttack = isAttack;

    /**
                               * Starting direction, if attack move
                               * @member {Direction}
                               */
    this.direction = direction;
  }_createClass(Move, [{ key: "makeAttack", value: function makeAttack(

    direction) {
      this.isAttack = true;
      this.direction = direction;
    }

    /**
       * @param {number} row
       * @param {number} column
       */ }, { key: "setSource", value: function setSource(
    row, column) {
      this.srcRow = row;
      this.srcColumn = column;
    }

    /**
       * @param {number} row
       * @param {number} column
       */ }, { key: "setDestination", value: function setDestination(
    row, column) {
      this.dstRow = row;
      this.dstColumn = column;
      return this;
    }

    /**
       * Generate an exact copy of this move.
       * @returns {Move}
       */ }, { key: "clone", value: function clone()
    {
      return Move.postThreadBoundary(this);
    }

    /**
       * Repairs a {@code Move} object after it has been copied through a
       * web-worker boundary.
       *
       * @param {Move} move
       */ }], [{ key: "postThreadBoundary", value: function postThreadBoundary(
    move) {
      var cmove = new Move();

      cmove.srcRow = move.srcRow;
      cmove.srcColumn = move.srcColumn;
      cmove.dstRow = move.dstRow;
      cmove.dstColumn = move.dstColumn;
      cmove.isAttack = move.isAttack;
      cmove.direction = move.direction;

      return cmove;
    } }]);return Move;}();exports.Move = Move;var _default =


Move;exports["default"] = _default;

/***/ }),

/***/ "./node_modules/surakarta/lib/PlayerStats.js":
/*!***************************************************!*\
  !*** ./node_modules/surakarta/lib/PlayerStats.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = exports.PlayerStats = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} /**
                                                                                                                                                                                                                                                                                    * Holds statistical information about a player playing Surakarta.
                                                                                                                                                                                                                                                                                    */var
PlayerStats =
function PlayerStats() {_classCallCheck(this, PlayerStats);
  /**
                                                             * @member {number} pebbles - no. of pebbles live for this player
                                                             */
  this.pebbles = 0;
};exports.PlayerStats = PlayerStats;var _default =


PlayerStats;exports["default"] = _default;

/***/ }),

/***/ "./node_modules/surakarta/lib/Position.js":
/*!************************************************!*\
  !*** ./node_modules/surakarta/lib/Position.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.Position = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * @class
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * @namespace SK
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    */var
Position = /*#__PURE__*/function () {
  function Position() {var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;var col = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;_classCallCheck(this, Position);
    this.set(row, col);
  }_createClass(Position, [{ key: "set", value: function set(

    row, col) {
      /** @member {number} */
      this.row = row;

      /** @member {number} */
      this.column = col;
    } }, { key: "index", value: function index()

    {
      return this.row * 6 + this.column;
    } }], [{ key: "from", value: function from(

    index) {
      return new Position(Math.floor(index / 6), index % 6);
    } }]);return Position;}();exports.Position = Position;

/***/ }),

/***/ "./node_modules/surakarta/lib/Surakarta.js":
/*!*************************************************!*\
  !*** ./node_modules/surakarta/lib/Surakarta.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.Surakarta = exports.BLACK_PLAYER = exports.RED_PLAYER = exports.NOT_FILLED = void 0;var _eventemitter = _interopRequireDefault(__webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js"));
var _traverseUtils = _interopRequireWildcard(__webpack_require__(/*! ./traverse-utils */ "./node_modules/surakarta/lib/traverse-utils/index.js"));







var _PlayerStats = _interopRequireDefault(__webpack_require__(/*! ./PlayerStats */ "./node_modules/surakarta/lib/PlayerStats.js"));
var _stepUtils = __webpack_require__(/*! ./step-utils */ "./node_modules/surakarta/lib/step-utils/index.js");function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {return { "default": obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj["default"] = obj;if (cache) {cache.set(obj, newObj);}return newObj;}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function _typeof(obj) {if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _possibleConstructorReturn(self, call) {if (call && (_typeof(call) === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}

var NOT_FILLED = -1;exports.NOT_FILLED = NOT_FILLED;
var RED_PLAYER = 0; // starting player
exports.RED_PLAYER = RED_PLAYER;var BLACK_PLAYER = 1; // other player

/**
 * Handle the state of an actual Surakarta game.
 */exports.BLACK_PLAYER = BLACK_PLAYER;var
Surakarta = /*#__PURE__*/function (_EventEmitter) {_inherits(Surakarta, _EventEmitter);
  /**
                                                                                         * Constructs a Surakarta board state with the pebbles in their initial
                                                                                         * positions.
                                                                                         * @param {boolean} [noInit=false] - whether not to initialize the board
                                                                                         */
  function Surakarta() {var _this;var noInit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;_classCallCheck(this, Surakarta);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Surakarta).call(this));

    /**
                                                                                      * States of each pebble position.
                                                                                      * @member {Array<number>}
                                                                                      * @readonly
                                                                                      */
    _this.states = new Array(36);

    /**
                                   * No. of moves done already.
                                   * @member {number}
                                   */
    _this.turn = 0;

    /**
                     * Responders that are invoked on the turns of the red &
                     * black players, and then on both. Both type responders are notified
                     * first.
                     * @member {Array<Array<SurakartaResponder>>}
                     */
    _this.responders = [[], [], []];

    /**
                                      * Stats for the red & black player.
                                      * @member {{ red: PlayerStats, black: PlayerStats }}
                                      */
    _this.playerStats = {
      red: new _PlayerStats["default"](),
      black: new _PlayerStats["default"]() };


    if (!noInit) {
      for (var i = 0; i < 12; i++) {
        _this.states[i] = RED_PLAYER;
      }
      for (var _i = 12; _i < 24; _i++) {
        _this.states[_i] = NOT_FILLED;
      }
      for (var _i2 = 24; _i2 < 36; _i2++) {
        _this.states[_i2] = BLACK_PLAYER;
      }

      _this.playerStats.red.pebbles = 12;
      _this.playerStats.black.pebbles = 12;
    }return _this;
  }

  /**
     * Index of a position in {@code this.states}
     * @param {number} row
     * @param {number} column
     * @returns {number}
     */_createClass(Surakarta, [{ key: "indexOf", value: function indexOf(
    r, c) {
      return r * 6 + c;
    } }, { key: "state", value: function state(

    row, column) {
      if (row < 0 || column < 0 || row >= 6 || column >= 6) {
        return null;
      }

      return this.states[row * 6 + column];
    }

    /**
       * The player whose turn it is currently.
       * @member {number}
       */ }, { key: "step",











    /**
                             * Perform a simple move on the board. Only validation that occurs is if the
                             * destination is already filled or if it isn't the pebble's turn.
                             *
                             * _If the game is finished due to this move_: The responders will not be notified,
                             * rather the 'gameover' event is emitted.
                             *
                             * @param {number} rs - initial position row
                             * @param {number} cs - intial position column
                             * @param {number} rd - final position row
                             * @param {number} cd - final position column
                             * @param {boolean} [noRespond=false] - whether not to consider this a
                             *  turning move, e.g. increment the current turn.
                             * @param {boolean} capture - is this a capture move?
                             * @throws if destination is already filled
                             */value: function step(
    rs, cs, rd, cd) {var noRespond = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;var capture = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var is = this.indexOf(rs, cs);
      var id = this.indexOf(rd, cd);

      if (this.states[is] !== this.turnPlayer) {
        throw new Error("Not turning player pebble");
      }
      if (!capture && this.states[id] !== NOT_FILLED) {
        // capture is used internally
        throw new Error(
        "Cannot step into destination since it is already filled");

      }

      capture = this.states[id] !== NOT_FILLED;

      this.states[id] = this.states[is];
      this.states[is] = NOT_FILLED;

      if (!noRespond) {
        var color;

        if (capture) {
          color = this.turnPlayerColor;
          --this.playerStats[color].pebbles;
        }

        if (capture && this.playerStats[color].pebbles <= 0) {
          this.emit("gameover", color);
        } else {
          this.turn++;
          this._notifyRespondersOnTurn();
        }
      }
    }

    /**
       * Wrapper around `step` that validates the step using `validateStep`.
       */ }, { key: "safeStep", value: function safeStep(
    rs, cs, rd, cd) {var noRespond = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      if ((0, _stepUtils.validateStep)(rs, cs, rd, cd)) {
        this.step(rs, cs, rd, cd, noRespond);
        return true;
      } else {
        return false;
      }
    }

    /**
       * Perform an attack move
       * @param {number} r - starting row
       * @param {number} c - starting col
       * @param {number} dir - direction of traversing
       * @param {Array<number>} cut - preferred ending position
       * @param {boolean} [saveSteps=true] - returns the intermediate steps of the move
       * @param {boolean} [perform=true] - whether to actual perform the move
       * @param {boolean} [noRespond=false] - whether to not consider this "move" for the turn
       */ }, { key: "traverse", value: function traverse(

    r,
    c,
    dir,
    cut)



    {var saveSteps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;var perform = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;var noRespond = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
      if (
      _traverseUtils.Directions.isHorizontal(dir) && (r === 0 || r === 5) ||
      _traverseUtils.Directions.isVertical(dir) && (c === 0 || c === 5))
      {
        throw new Error("".concat(
        r).concat(c, " cannot be looped in direction ").concat(dir, ", ends at corner"));

      }
      if (this.states[this.indexOf(r, c)] !== this.turnPlayer) {
        throw new Error("Not turning player's pebble");
      }

      var steps = (0, _traverseUtils.findPath)(this, r, c, dir, cut, !saveSteps && !perform);

      if (perform) {
        var lastPosition = steps[steps.length - 1];
        this.step(r, c, lastPosition.row, lastPosition.column, noRespond, true);
      }

      return steps;
    }

    /**
       * Iterate over all positions with a callback that receives three arguments:
       * 1. Pebble state
       * 2. Row
       * 3. Column
       * @param {Function} callback
       */ }, { key: "forEach", value: function forEach(
    callback) {
      for (var i = 0, r = 0; r < 6; r++) {
        for (var c = 0; c < 6; c++, i++) {
          callback(this.states[i], r, c);
        }
      }
    } }, { key: "copyTo", value: function copyTo(

    surakarta) {
      for (var i = 0; i < 36; i++) {
        surakarta.states[i] = this.states[i];
      }
    } }, { key: "copyFrom", value: function copyFrom(

    surakarta) {
      surakarta.copyTo(this);
    }

    /**
       * Clone this instance without the responders.
       *
       * @returns {Surakarta}
       */ }, { key: "clone", value: function clone()
    {
      var clonedState = new Surakarta(true);

      for (var i = 0; i < 36; i++) {
        clonedState.states[i] = this.states[i];
      }

      clonedState.turn = this.turn;
      return clonedState;
    }

    /**  @private */ }, { key: "_notifyRespondersOnTurn", value: function _notifyRespondersOnTurn()
    {
      this.responders[2].forEach(function (responder) {return responder.onTurn();});
      this.responders[this.turnPlayer].forEach(function (responder) {return responder.onTurn();});
    } }, { key: "turnPlayer", get: function get() {return this.turn % 2;} /**
                                                                           * @member {'red' | 'black'}
                                                                           */ }, { key: "turnPlayerColor", get: function get() {return this.turnPlayer === 0 ? "red" : "black";} }]);return Surakarta;}(_eventemitter["default"]);
/**
                                                                                                                                                                                                                                    * Generate a `Surakarta` instance with a predefined layout.
                                                                                                                                                                                                                                    *
                                                                                                                                                                                                                                    * @static
                                                                                                                                                                                                                                    * @param {Array<int>} states
                                                                                                                                                                                                                                    * @returns {Surakarta}
                                                                                                                                                                                                                                    */exports.Surakarta = Surakarta;
Surakarta.fromState = function (states) {
  var instance = new Surakarta(true);

  for (var i = 0; i < 36; i++) {
    instance.states[i] = states[i];

    if (states[i] === RED_PLAYER) {
      ++instance.playerStats.red.pebbles;
    } else if (states[i] === BLACK_PLAYER) {
      ++instance.playerStats.black.pebbles;
    }
  }

  return instance;
};

/**
    * @interface SurakartaResponder
    *
    * @method onTurn
    * @param {Surakarta} surakarta
    */

/***/ }),

/***/ "./node_modules/surakarta/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/surakarta/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _exportNames = { RED_PLAYER: true, BLACK_PLAYER: true, NOT_FILLED: true, Surakarta: true, Move: true, Position: true };Object.defineProperty(exports, "RED_PLAYER", { enumerable: true, get: function get() {return _Surakarta.RED_PLAYER;} });Object.defineProperty(exports, "BLACK_PLAYER", { enumerable: true, get: function get() {return _Surakarta.BLACK_PLAYER;} });Object.defineProperty(exports, "NOT_FILLED", { enumerable: true, get: function get() {return _Surakarta.NOT_FILLED;} });Object.defineProperty(exports, "Surakarta", { enumerable: true, get: function get() {return _Surakarta.Surakarta;} });Object.defineProperty(exports, "Move", { enumerable: true, get: function get() {return _Move.Move;} });Object.defineProperty(exports, "Position", { enumerable: true, get: function get() {return _Position.Position;} });



var _Surakarta = __webpack_require__(/*! ./Surakarta */ "./node_modules/surakarta/lib/Surakarta.js");
var _Move = __webpack_require__(/*! ./Move */ "./node_modules/surakarta/lib/Move.js");
var _Position = __webpack_require__(/*! ./Position */ "./node_modules/surakarta/lib/Position.js");
var _traverseUtils = __webpack_require__(/*! ./traverse-utils */ "./node_modules/surakarta/lib/traverse-utils/index.js");Object.keys(_traverseUtils).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;Object.defineProperty(exports, key, { enumerable: true, get: function get() {return _traverseUtils[key];} });});
var _stepUtils = __webpack_require__(/*! ./step-utils */ "./node_modules/surakarta/lib/step-utils/index.js");Object.keys(_stepUtils).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;Object.defineProperty(exports, key, { enumerable: true, get: function get() {return _stepUtils[key];} });});
var _PlayerStats = __webpack_require__(/*! ./PlayerStats */ "./node_modules/surakarta/lib/PlayerStats.js");Object.keys(_PlayerStats).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;Object.defineProperty(exports, key, { enumerable: true, get: function get() {return _PlayerStats[key];} });});

/***/ }),

/***/ "./node_modules/surakarta/lib/step-utils/index.js":
/*!********************************************************!*\
  !*** ./node_modules/surakarta/lib/step-utils/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "validateStep", { enumerable: true, get: function get() {return _validateStep.validateStep;} });exports["default"] = void 0;var _validateStep = __webpack_require__(/*! ./validateStep */ "./node_modules/surakarta/lib/step-utils/validateStep.js");var _default =



{
  validateStep: _validateStep.validateStep };exports["default"] = _default;

/***/ }),

/***/ "./node_modules/surakarta/lib/step-utils/validateStep.js":
/*!***************************************************************!*\
  !*** ./node_modules/surakarta/lib/step-utils/validateStep.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.validateStep = validateStep;function validateStep(r0, c0, r1, c1) {
  return r1 >= 0 && c1 >= 0 && r1 < 6 && c1 < 6 &&
  Math.abs(r1 - r0) <= 1 && Math.abs(c1 - c0) <= 1;
}

/***/ }),

/***/ "./node_modules/surakarta/lib/traverse-utils/Directions.js":
/*!*****************************************************************!*\
  !*** ./node_modules/surakarta/lib/traverse-utils/Directions.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = exports.Directions = exports.DOWN = exports.RIGHT = exports.UP = exports.LEFT = void 0;var LEFT = 10;exports.LEFT = LEFT;
var UP = 11;exports.UP = UP;
var RIGHT = 12;exports.RIGHT = RIGHT;
var DOWN = 13;exports.DOWN = DOWN;

var Directions = {
  LEFT: LEFT,
  UP: UP,
  RIGHT: RIGHT,
  DOWN: DOWN };exports.Directions = Directions;var _default =


{
  LEFT: LEFT,
  UP: UP,
  RIGHT: RIGHT,
  DOWN: DOWN,
  Directions: Directions,
  get TOP() {
    throw new Error("Directions.TOP is invalid. Use Directions.UP");
  },
  get BOTTOM() {
    throw new Error("Directions.BOTTOM is invalid. Use Directions.DOWN");
  },
  isHorizontal: function isHorizontal(d) {
    return d === LEFT || d === RIGHT;
  },
  isVertical: function isVertical(d) {
    return d === UP || d === DOWN;
  },
  of: function of(start, end) {
    if (end[1] > 5) {
      return RIGHT;
    } else if (end[1] < 0) {
      return LEFT;
    }
    if (end[0] > 5) {
      return DOWN;
    } else if (end[0] < 0) {
      return UP;
    }

    var r = end[0] - start[0];
    var c = end[1] - start[1];

    if (r * c !== 0) {
      throw new Error("(".concat(
      start[0], ", ").concat(start[1], ") to (").concat(end[0], ", ").concat(end[1], ") isn't an orthogonal direction"));

    }
    if (r !== 0) {
      return r > 0 ? DOWN : UP;
    }
    if (c !== 0) {
      return c > 0 ? RIGHT : LEFT;
    }

    throw new Error(
    "No move made, and direction cannot be given to zero vector.");

  } };exports["default"] = _default;

/***/ }),

/***/ "./node_modules/surakarta/lib/traverse-utils/index.js":
/*!************************************************************!*\
  !*** ./node_modules/surakarta/lib/traverse-utils/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _typeof(obj) {if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}Object.defineProperty(exports, "__esModule", { value: true });var _exportNames = { Directions: true, LEFT: true, UP: true, RIGHT: true, DOWN: true, getLoopRadius: true, getLoopRotation: true, getLoopTangent: true, getLoopTerminal: true };Object.defineProperty(exports, "Directions", { enumerable: true, get: function get() {return _Directions["default"];} });Object.defineProperty(exports, "LEFT", { enumerable: true, get: function get() {return _Directions.LEFT;} });Object.defineProperty(exports, "UP", { enumerable: true, get: function get() {return _Directions.UP;} });Object.defineProperty(exports, "RIGHT", { enumerable: true, get: function get() {return _Directions.RIGHT;} });Object.defineProperty(exports, "DOWN", { enumerable: true, get: function get() {return _Directions.DOWN;} });Object.defineProperty(exports, "getLoopRadius", { enumerable: true, get: function get() {return _loopInfo.getLoopRadius;} });Object.defineProperty(exports, "getLoopRotation", { enumerable: true, get: function get() {return _loopInfo.getLoopRotation;} });Object.defineProperty(exports, "getLoopTangent", { enumerable: true, get: function get() {return _loopInfo.getLoopTangent;} });Object.defineProperty(exports, "getLoopTerminal", { enumerable: true, get: function get() {return _loopInfo.getLoopTerminal;} });exports["default"] = void 0;var _Directions = _interopRequireWildcard(__webpack_require__(/*! ./Directions */ "./node_modules/surakarta/lib/traverse-utils/Directions.js"));



var _loopInfo = __webpack_require__(/*! ./loop-info */ "./node_modules/surakarta/lib/traverse-utils/loop-info.js");














var _pathFinder = __webpack_require__(/*! ./path-finder */ "./node_modules/surakarta/lib/traverse-utils/path-finder.js");Object.keys(_pathFinder).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;Object.defineProperty(exports, key, { enumerable: true, get: function get() {return _pathFinder[key];} });});function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {return { "default": obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj["default"] = obj;if (cache) {cache.set(obj, newObj);}return newObj;}var _default =

{
  getLoopRadius: _loopInfo.getLoopRadius,
  getLoopRotation: _loopInfo.getLoopRotation,
  getLoopTangent: _loopInfo.getLoopTangent,
  getLoopTerminal: _loopInfo.getLoopTerminal };exports["default"] = _default;

/***/ }),

/***/ "./node_modules/surakarta/lib/traverse-utils/loop-info.js":
/*!****************************************************************!*\
  !*** ./node_modules/surakarta/lib/traverse-utils/loop-info.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getLoopRadius = getLoopRadius;exports.getLoopRotation = getLoopRotation;exports.getLoopTangent = getLoopTangent;exports.getLoopTerminal = getLoopTerminal;var _Directions = __webpack_require__(/*! ./Directions */ "./node_modules/surakarta/lib/traverse-utils/Directions.js");








function getLoopRadius(dir, r, c) {
  if (dir === _Directions.Directions.LEFT || dir === _Directions.Directions.RIGHT) {
    return r < 3 ? r : 5 - r;
  } else {
    return c < 3 ? c : 5 - c;
  }
}

function angle(r0, c0, r1, c1) {
  if (r0 === r1) {
    return c1 > c0 ? 0 : Math.PI;
  } else if (c1 === c0) {
    return r1 > r0 ? Math.PI / 2 : 1.5 * Math.PI;
  }
}

/**
   * Calculates the angular rotation when looping from start to
   * end.
   * @param {number} startX
   * @param {number} startY
   * @param {number} endX
   * @param {number} endY
   */
function getLoopRotation(startX, startY, endX, endY) {
  var cx;

  if (endX === 0 || startX === 0) {
    cx = 0;
  } else {
    cx = 5;
  }

  var cy;

  if (endY === 0 || startY === 0) {
    cy = 0;
  } else {
    cy = 5;
  }

  var startAngle = angle(cx, cy, startX, startY);
  var endAngle = angle(cx, cy, endX, endY);

  return [cx, cy, startAngle, endAngle, Math.abs(endX - startX)];
}

/**
   * Calculates the direction of the tangent to the loop (geometrically) emerging
   * from the given point.
   * @param {number} r
   * @param {number} c
   */
function getLoopTangent(r, c) {
  if ((r === c || r === 5 - c) && (r === 0 || r === 5)) {
    throw new Error("(".concat(r, ", ").concat(c, ") is a corner, not a loop terminal"));
  }

  if (r === 0) {
    return _Directions.Directions.UP;
  } else if (r === 5) {
    return _Directions.Directions.DOWN;
  } else if (c === 0) {
    return _Directions.Directions.LEFT;
  } else if (c === 5) {
    return _Directions.Directions.RIGHT;
  } else {
    throw new Error("(".concat(r, ", ").concat(c, ") is not a loop terminal position."));
  }
}

/**
   * Calculates the point on which a point will land on after looping through
   * a loop from a terminal point.
   * @param {number} r
   * @param {number} c
   * @param {Array<number>} [loc_]
   */
function getLoopTerminal(r, c, loc_) {
  var loc = loc_ || new Array(3);
  var tangent = getLoopTangent(r, c);
  var loopRadius = getLoopRadius(tangent, r, c);

  switch (tangent) {
    case _Directions.UP:
      loc[0] = loopRadius;
      loc[1] = c < 3 ? 0 : 5;
      loc[2] = loc[1] === 0 ? _Directions.RIGHT : _Directions.LEFT;
      break;
    case _Directions.DOWN:
      loc[0] = 5 - loopRadius;
      loc[1] = c < 3 ? 0 : 5;
      loc[2] = loc[1] === 0 ? _Directions.RIGHT : _Directions.LEFT;
      break;
    case _Directions.LEFT:
      loc[0] = r < 3 ? 0 : 5;
      loc[1] = loopRadius;
      loc[2] = loc[0] === 0 ? _Directions.DOWN : _Directions.UP;
      break;
    case _Directions.RIGHT:
      loc[0] = r < 3 ? 0 : 5;
      loc[1] = 5 - loopRadius;
      loc[2] = loc[1] === 0 ? _Directions.DOWN : _Directions.UP;
      break;}


  return loc;
}

/***/ }),

/***/ "./node_modules/surakarta/lib/traverse-utils/path-finder.js":
/*!******************************************************************!*\
  !*** ./node_modules/surakarta/lib/traverse-utils/path-finder.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.simpleStepContext = simpleStepContext;exports.loopStepContext = loopStepContext;exports.findStep = findStep;exports.findPath = findPath;exports.PathFinder = void 0;var _Directions = __webpack_require__(/*! ./Directions */ "./node_modules/surakarta/lib/traverse-utils/Directions.js");
var _loopInfo = __webpack_require__(/*! ./loop-info */ "./node_modules/surakarta/lib/traverse-utils/loop-info.js");

var NOT_FILLED = -1;

/**
                      * @typedef {Array} TraverseContext
                      * @property {number} 0 - row
                      * @property {number} 1 - column
                      * @property {Direction?} 2 - direction
                      * @property {number} row
                      * @property {number} column
                      * @property {Direction} direction
                      */

function simpleStepContext(row, column) {
  var context = [row, column];
  context.row = row;
  context.column = column;
  return context;
}

function loopStepContext(row, column, direction) {
  var context = [row, column, direction];
  context.row = row;
  context.column = column;
  context.direction = direction;
  context.isLoop = true;
  return context;
}

function findSimpleStep(row, column, direction) {
  switch (direction) {
    case _Directions.UP:
      if (row !== 0) {
        return [row - 1, column];
      }
      break;
    case _Directions.LEFT:
      if (column !== 0) {
        return [row, column - 1];
      }
      break;
    case _Directions.DOWN:
      if (row !== 5) {
        return [row + 1, column];
      }
      break;
    case _Directions.RIGHT:
      if (column !== 5) {
        return [row, column + 1];
      }
      break;}


  return null;
}

/**
   * Finds the next position that the attack will land on, if continuable.
   * @returns {TraverseContext}
   */
function findStep(row, column, direction) {
  var simpleStep = findSimpleStep(row, column, direction);

  if (simpleStep) {
    simpleStep.row = simpleStep[0];
    simpleStep.column = simpleStep[1];
    return simpleStep;
  } else {
    var loopStep = (0, _loopInfo.getLoopTerminal)(row, column);
    loopStep.row = loopStep[0];
    loopStep.column = loopStep[1];
    loopStep.direction = loopStep[2];
    loopStep.isLoop = true;
    return loopStep;
  }
}

/**
   * Finds all the steps in the attack.
   * @param {Surakarta} surakarta
   * @param {number} row
   * @param {number} column
   * @param {Direction} direction
   * @param {Position} cut
   * @param {boolean} [findPossiblity=false]
   * @returns {Array<TraverseContext> | boolean}
   */
function findPath(surakarta, row, column, direction, cut) {var findPossiblity = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var start = [row, column];
  var pebble = surakarta.states[surakarta.indexOf(row, column)];
  var steps = findPossiblity ? true : [];
  var selfTouch = 0;
  var loops = 0;
  var cutFound = false;

  while (true) {
    var next = findStep(row, column, direction);

    row = next[0];
    column = next[1];

    if (next.isLoop) {
      direction = next.direction;
    }

    var self = false;
    if (row === start[0] && column === start[1]) {
      ++selfTouch;
      if (selfTouch > 1) {
        return false; // Infinite loop
      }
      self = true;
    }

    var state = surakarta.state(row, column);

    if (!self && state === pebble) {
      return false; // can't capture our own pebble :)
    }
    if (!findPossiblity) {
      steps.push(next);

      if (next.length === 3) {// loop
        ++loops;
        steps[steps.length - 1].isLoop = true;
      }
    }
    if (cut && cut.row === row && cut.column === column || !self && state !== NOT_FILLED) {
      cutFound = state === NOT_FILLED; // landed optional intermediate if current position not filled
      break;
    }
  }

  if (loops === 0) {
    return false;
  }

  steps.isCapture = !cutFound;
  return steps;
}

/**
   * @namespace SK
   */
var PathFinder = {
  findStep: findStep,
  findPath: findPath };exports.PathFinder = PathFinder;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL0FuYWx5c2lzV29ya2VyLndvcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXZlbnRlbWl0dGVyMy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3VyYWthcnRhLWFpL2Rpc3QvaW5kZXguYnVuZGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdXJha2FydGEtYW5hbHlzaXMvbGliL2RhdGEvTW92ZUhhbmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3VyYWthcnRhLWFuYWx5c2lzL2xpYi9kYXRhL1Bvc2l0aW9uSGFuZGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdXJha2FydGEtYW5hbHlzaXMvbGliL2RhdGEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N1cmFrYXJ0YS1hbmFseXNpcy9saWIvZXZhbHVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N1cmFrYXJ0YS1hbmFseXNpcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N1cmFrYXJ0YS1hbmFseXNpcy9saWIvaW5kZXhlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3VyYWthcnRhLWFuYWx5c2lzL2xpYi9zb3J0SW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N1cmFrYXJ0YS9saWIvTW92ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3VyYWthcnRhL2xpYi9QbGF5ZXJTdGF0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3VyYWthcnRhL2xpYi9Qb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3VyYWthcnRhL2xpYi9TdXJha2FydGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N1cmFrYXJ0YS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N1cmFrYXJ0YS9saWIvc3RlcC11dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3VyYWthcnRhL2xpYi9zdGVwLXV0aWxzL3ZhbGlkYXRlU3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3VyYWthcnRhL2xpYi90cmF2ZXJzZS11dGlscy9EaXJlY3Rpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdXJha2FydGEvbGliL3RyYXZlcnNlLXV0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdXJha2FydGEvbGliL3RyYXZlcnNlLXV0aWxzL2xvb3AtaW5mby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3VyYWthcnRhL2xpYi90cmF2ZXJzZS11dGlscy9wYXRoLWZpbmRlci5qcyJdLCJuYW1lcyI6WyJzZWxmIiwibWVzc2FnZUV2ZW50IiwiYWN0aW9uIiwic3VyYWthcnRhIiwiY29uc29sZSIsInN1cmFrYXJ0YV8iLCJTdXJha2FydGEiLCJjb21wdXRlZFBsYXkiLCJTdXJha2FydGFFbmdpbmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FB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QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBOztBQUVBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0MiLCJmaWxlIjoiZTdkYmUzOWE5ZDU5NDMyNzFhNDMud29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL2Rpc3QtanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9kZV9tb2R1bGVzL3RocmVhZC1sb2FkZXIvZGlzdC9janMuanMhLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuL3d3dy9qcy9BbmFseXNpc1dvcmtlci53b3JrZXIuanNcIik7XG4iLCJpbXBvcnQgeyBTdXJha2FydGEgfSBmcm9tICdzdXJha2FydGEnXG5pbXBvcnQgKiBhcyBTdXJha2FydGFFbmdpbmUgZnJvbSAnc3VyYWthcnRhLWFpJ1xuXG5zZWxmLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlRXZlbnQpIHtcbiAgY29uc3QgW2FjdGlvbiwgc3VyYWthcnRhXSA9IG1lc3NhZ2VFdmVudC5kYXRhXG5cbiAgY29uc29sZS5sb2coJ2FjdGlvbjogJyArIGFjdGlvbilcbiAgaWYgKGFjdGlvbiA9PT0gJ3N1Z2dlc3RQbGF5Jykge1xuICAgIGNvbnN0IHN1cmFrYXJ0YV8gPSBTdXJha2FydGEuZnJvbVN0YXRlKHN1cmFrYXJ0YS5zdGF0ZXMpXG4gICAgc3VyYWthcnRhXy50dXJuID0gc3VyYWthcnRhLnR1cm5cbiAgICBjb25zb2xlLmxvZyhzdXJha2FydGEpXG4gICAgY29uc29sZS5sb2coc3VyYWthcnRhXylcbiAgICBjb25zdCBjb21wdXRlZFBsYXkgPSBTdXJha2FydGFFbmdpbmUuc3VnZ2VzdFBsYXkoc3VyYWthcnRhXylcbiAgICBjb25zb2xlLmxvZygnaGVyZScpXG4gICAgc2VsZi5wb3N0TWVzc2FnZShbY29tcHV0ZWRQbGF5XSlcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgYWN0aW5vIGNvZGUnKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICwgcHJlZml4ID0gJ34nO1xuXG4vKipcbiAqIENvbnN0cnVjdG9yIHRvIGNyZWF0ZSBhIHN0b3JhZ2UgZm9yIG91ciBgRUVgIG9iamVjdHMuXG4gKiBBbiBgRXZlbnRzYCBpbnN0YW5jZSBpcyBhIHBsYWluIG9iamVjdCB3aG9zZSBwcm9wZXJ0aWVzIGFyZSBldmVudCBuYW1lcy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEV2ZW50cygpIHt9XG5cbi8vXG4vLyBXZSB0cnkgdG8gbm90IGluaGVyaXQgZnJvbSBgT2JqZWN0LnByb3RvdHlwZWAuIEluIHNvbWUgZW5naW5lcyBjcmVhdGluZyBhblxuLy8gaW5zdGFuY2UgaW4gdGhpcyB3YXkgaXMgZmFzdGVyIHRoYW4gY2FsbGluZyBgT2JqZWN0LmNyZWF0ZShudWxsKWAgZGlyZWN0bHkuXG4vLyBJZiBgT2JqZWN0LmNyZWF0ZShudWxsKWAgaXMgbm90IHN1cHBvcnRlZCB3ZSBwcmVmaXggdGhlIGV2ZW50IG5hbWVzIHdpdGggYVxuLy8gY2hhcmFjdGVyIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBidWlsdC1pbiBvYmplY3QgcHJvcGVydGllcyBhcmUgbm90XG4vLyBvdmVycmlkZGVuIG9yIHVzZWQgYXMgYW4gYXR0YWNrIHZlY3Rvci5cbi8vXG5pZiAoT2JqZWN0LmNyZWF0ZSkge1xuICBFdmVudHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAvL1xuICAvLyBUaGlzIGhhY2sgaXMgbmVlZGVkIGJlY2F1c2UgdGhlIGBfX3Byb3RvX19gIHByb3BlcnR5IGlzIHN0aWxsIGluaGVyaXRlZCBpblxuICAvLyBzb21lIG9sZCBicm93c2VycyBsaWtlIEFuZHJvaWQgNCwgaVBob25lIDUuMSwgT3BlcmEgMTEgYW5kIFNhZmFyaSA1LlxuICAvL1xuICBpZiAoIW5ldyBFdmVudHMoKS5fX3Byb3RvX18pIHByZWZpeCA9IGZhbHNlO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgc2luZ2xlIGV2ZW50IGxpc3RlbmVyLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvbmNlPWZhbHNlXSBTcGVjaWZ5IGlmIHRoZSBsaXN0ZW5lciBpcyBhIG9uZS10aW1lIGxpc3RlbmVyLlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBFRShmbiwgY29udGV4dCwgb25jZSkge1xuICB0aGlzLmZuID0gZm47XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMub25jZSA9IG9uY2UgfHwgZmFsc2U7XG59XG5cbi8qKlxuICogQWRkIGEgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IGVtaXR0ZXIgUmVmZXJlbmNlIHRvIHRoZSBgRXZlbnRFbWl0dGVyYCBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9uY2UgU3BlY2lmeSBpZiB0aGUgbGlzdGVuZXIgaXMgYSBvbmUtdGltZSBsaXN0ZW5lci5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcihlbWl0dGVyLCBldmVudCwgZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIHZhciBsaXN0ZW5lciA9IG5ldyBFRShmbiwgY29udGV4dCB8fCBlbWl0dGVyLCBvbmNlKVxuICAgICwgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIWVtaXR0ZXIuX2V2ZW50c1tldnRdKSBlbWl0dGVyLl9ldmVudHNbZXZ0XSA9IGxpc3RlbmVyLCBlbWl0dGVyLl9ldmVudHNDb3VudCsrO1xuICBlbHNlIGlmICghZW1pdHRlci5fZXZlbnRzW2V2dF0uZm4pIGVtaXR0ZXIuX2V2ZW50c1tldnRdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlIGVtaXR0ZXIuX2V2ZW50c1tldnRdID0gW2VtaXR0ZXIuX2V2ZW50c1tldnRdLCBsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIGVtaXR0ZXI7XG59XG5cbi8qKlxuICogQ2xlYXIgZXZlbnQgYnkgbmFtZS5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gZW1pdHRlciBSZWZlcmVuY2UgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGluc3RhbmNlLlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2dCBUaGUgRXZlbnQgbmFtZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNsZWFyRXZlbnQoZW1pdHRlciwgZXZ0KSB7XG4gIGlmICgtLWVtaXR0ZXIuX2V2ZW50c0NvdW50ID09PSAwKSBlbWl0dGVyLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gIGVsc2UgZGVsZXRlIGVtaXR0ZXIuX2V2ZW50c1tldnRdO1xufVxuXG4vKipcbiAqIE1pbmltYWwgYEV2ZW50RW1pdHRlcmAgaW50ZXJmYWNlIHRoYXQgaXMgbW9sZGVkIGFnYWluc3QgdGhlIE5vZGUuanNcbiAqIGBFdmVudEVtaXR0ZXJgIGludGVyZmFjZS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgbGlzdGluZyB0aGUgZXZlbnRzIGZvciB3aGljaCB0aGUgZW1pdHRlciBoYXMgcmVnaXN0ZXJlZFxuICogbGlzdGVuZXJzLlxuICpcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgdmFyIG5hbWVzID0gW11cbiAgICAsIGV2ZW50c1xuICAgICwgbmFtZTtcblxuICBpZiAodGhpcy5fZXZlbnRzQ291bnQgPT09IDApIHJldHVybiBuYW1lcztcblxuICBmb3IgKG5hbWUgaW4gKGV2ZW50cyA9IHRoaXMuX2V2ZW50cykpIHtcbiAgICBpZiAoaGFzLmNhbGwoZXZlbnRzLCBuYW1lKSkgbmFtZXMucHVzaChwcmVmaXggPyBuYW1lLnNsaWNlKDEpIDogbmFtZSk7XG4gIH1cblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHJldHVybiBuYW1lcy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhldmVudHMpKTtcbiAgfVxuXG4gIHJldHVybiBuYW1lcztcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFRoZSByZWdpc3RlcmVkIGxpc3RlbmVycy5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnMoZXZlbnQpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnRcbiAgICAsIGhhbmRsZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKCFoYW5kbGVycykgcmV0dXJuIFtdO1xuICBpZiAoaGFuZGxlcnMuZm4pIHJldHVybiBbaGFuZGxlcnMuZm5dO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gaGFuZGxlcnMubGVuZ3RoLCBlZSA9IG5ldyBBcnJheShsKTsgaSA8IGw7IGkrKykge1xuICAgIGVlW2ldID0gaGFuZGxlcnNbaV0uZm47XG4gIH1cblxuICByZXR1cm4gZWU7XG59O1xuXG4vKipcbiAqIFJldHVybiB0aGUgbnVtYmVyIG9mIGxpc3RlbmVycyBsaXN0ZW5pbmcgdG8gYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgbnVtYmVyIG9mIGxpc3RlbmVycy5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24gbGlzdGVuZXJDb3VudChldmVudCkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudFxuICAgICwgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKCFsaXN0ZW5lcnMpIHJldHVybiAwO1xuICBpZiAobGlzdGVuZXJzLmZuKSByZXR1cm4gMTtcbiAgcmV0dXJuIGxpc3RlbmVycy5sZW5ndGg7XG59O1xuXG4vKipcbiAqIENhbGxzIGVhY2ggb2YgdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIGV2ZW50IGhhZCBsaXN0ZW5lcnMsIGVsc2UgYGZhbHNlYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdChldmVudCwgYTEsIGEyLCBhMywgYTQsIGE1KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiBmYWxzZTtcblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF1cbiAgICAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGFyZ3NcbiAgICAsIGk7XG5cbiAgaWYgKGxpc3RlbmVycy5mbikge1xuICAgIGlmIChsaXN0ZW5lcnMub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgc3dpdGNoIChsZW4pIHtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSksIHRydWU7XG4gICAgICBjYXNlIDM6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyKSwgdHJ1ZTtcbiAgICAgIGNhc2UgNDogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzKSwgdHJ1ZTtcbiAgICAgIGNhc2UgNTogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCksIHRydWU7XG4gICAgICBjYXNlIDY6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQsIGE1KSwgdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGkgPCBsZW47IGkrKykge1xuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZuLmFwcGx5KGxpc3RlbmVycy5jb250ZXh0LCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aFxuICAgICAgLCBqO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyc1tpXS5mbiwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgc3dpdGNoIChsZW4pIHtcbiAgICAgICAgY2FzZSAxOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCk7IGJyZWFrO1xuICAgICAgICBjYXNlIDI6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSk7IGJyZWFrO1xuICAgICAgICBjYXNlIDM6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIpOyBicmVhaztcbiAgICAgICAgY2FzZSA0OiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEsIGEyLCBhMyk7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmICghYXJncykgZm9yIChqID0gMSwgYXJncyA9IG5ldyBBcnJheShsZW4gLTEpOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaiAtIDFdID0gYXJndW1lbnRzW2pdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpc3RlbmVyc1tpXS5mbi5hcHBseShsaXN0ZW5lcnNbaV0uY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIEFkZCBhIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2NvbnRleHQ9dGhpc10gVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHJldHVybiBhZGRMaXN0ZW5lcih0aGlzLCBldmVudCwgZm4sIGNvbnRleHQsIGZhbHNlKTtcbn07XG5cbi8qKlxuICogQWRkIGEgb25lLXRpbWUgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHJldHVybiBhZGRMaXN0ZW5lcih0aGlzLCBldmVudCwgZm4sIGNvbnRleHQsIHRydWUpO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGxpc3RlbmVycyBvZiBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIE9ubHkgcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgdGhhdCBtYXRjaCB0aGlzIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IE9ubHkgcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgdGhhdCBoYXZlIHRoaXMgY29udGV4dC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBPbmx5IHJlbW92ZSBvbmUtdGltZSBsaXN0ZW5lcnMuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihldmVudCwgZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIHRoaXM7XG4gIGlmICghZm4pIHtcbiAgICBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKGxpc3RlbmVycy5mbikge1xuICAgIGlmIChcbiAgICAgIGxpc3RlbmVycy5mbiA9PT0gZm4gJiZcbiAgICAgICghb25jZSB8fCBsaXN0ZW5lcnMub25jZSkgJiZcbiAgICAgICghY29udGV4dCB8fCBsaXN0ZW5lcnMuY29udGV4dCA9PT0gY29udGV4dClcbiAgICApIHtcbiAgICAgIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGV2ZW50cyA9IFtdLCBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgbGlzdGVuZXJzW2ldLmZuICE9PSBmbiB8fFxuICAgICAgICAob25jZSAmJiAhbGlzdGVuZXJzW2ldLm9uY2UpIHx8XG4gICAgICAgIChjb250ZXh0ICYmIGxpc3RlbmVyc1tpXS5jb250ZXh0ICE9PSBjb250ZXh0KVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50cy5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBSZXNldCB0aGUgYXJyYXksIG9yIHJlbW92ZSBpdCBjb21wbGV0ZWx5IGlmIHdlIGhhdmUgbm8gbW9yZSBsaXN0ZW5lcnMuXG4gICAgLy9cbiAgICBpZiAoZXZlbnRzLmxlbmd0aCkgdGhpcy5fZXZlbnRzW2V2dF0gPSBldmVudHMubGVuZ3RoID09PSAxID8gZXZlbnRzWzBdIDogZXZlbnRzO1xuICAgIGVsc2UgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgbGlzdGVuZXJzLCBvciB0aG9zZSBvZiB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBbZXZlbnRdIFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyhldmVudCkge1xuICB2YXIgZXZ0O1xuXG4gIGlmIChldmVudCkge1xuICAgIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG4gICAgaWYgKHRoaXMuX2V2ZW50c1tldnRdKSBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy9cbi8vIEFsaWFzIG1ldGhvZHMgbmFtZXMgYmVjYXVzZSBwZW9wbGUgcm9sbCBsaWtlIHRoYXQuXG4vL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUub247XG5cbi8vXG4vLyBFeHBvc2UgdGhlIHByZWZpeC5cbi8vXG5FdmVudEVtaXR0ZXIucHJlZml4ZWQgPSBwcmVmaXg7XG5cbi8vXG4vLyBBbGxvdyBgRXZlbnRFbWl0dGVyYCB0byBiZSBpbXBvcnRlZCBhcyBtb2R1bGUgbmFtZXNwYWNlLlxuLy9cbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbi8vXG4vLyBFeHBvc2UgdGhlIG1vZHVsZS5cbi8vXG5pZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBtb2R1bGUpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG59XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJzdXJha2FydGFcIiksIHJlcXVpcmUoXCJzdXJha2FydGEtYW5hbHlzaXNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wic3VyYWthcnRhXCIsIFwic3VyYWthcnRhLWFuYWx5c2lzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlNLQUlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJzdXJha2FydGFcIiksIHJlcXVpcmUoXCJzdXJha2FydGEtYW5hbHlzaXNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlNLQUlcIl0gPSBmYWN0b3J5KHJvb3RbXCJfXCJdLCByb290W1wiX1wiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfc3VyYWthcnRhX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfc3VyYWthcnRhX2FuYWx5c2lzX18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvb3Bvb2wvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvb3Bvb2wvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZXZhbChcInZhciBQb29sID0gKGZ1bmN0aW9uICgpIHtcXG4gICAgZnVuY3Rpb24gUG9vbChGdW5jKSB7XFxuICAgICAgICB0aGlzLnBvb2wgPSBbXTtcXG4gICAgICAgIHRoaXMuRnVuYyA9IEZ1bmM7XFxuICAgIH1cXG4gICAgUG9vbC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xcbiAgICAgICAgaWYgKHRoaXMucG9vbC5sZW5ndGgpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb29sLnNwbGljZSgwLCAxKVswXTtcXG4gICAgICAgIH1cXG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5GdW5jKCk7XFxuICAgIH07XFxuICAgIFBvb2wucHJvdG90eXBlLnJlbGVhc2UgPSBmdW5jdGlvbiAob2JqKSB7XFxuICAgICAgICBpZiAodGhpcy5GdW5jLnJlc2V0KSB7XFxuICAgICAgICAgICAgdGhpcy5GdW5jLnJlc2V0KG9iaik7XFxuICAgICAgICB9XFxuICAgICAgICB0aGlzLnBvb2wucHVzaChvYmopO1xcbiAgICB9O1xcbiAgICByZXR1cm4gUG9vbDtcXG59KSgpO1xcbm1vZHVsZS5leHBvcnRzID0gUG9vbDtcXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9TS0FJLy4vbm9kZV9tb2R1bGVzL29wb29sL2luZGV4LmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvQ29tbW9uQ29udGV4dC50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL0NvbW1vbkNvbnRleHQudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbmV2YWwoXCJcXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXFxcIl9fZXNNb2R1bGVcXFwiLCB7IHZhbHVlOiB0cnVlIH0pO1xcbnZhciBtZW1fMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbWVtICovIFxcXCIuL3NyYy9tZW0vaW5kZXgudHNcXFwiKTtcXG52YXIgQ29tbW9uQ29udGV4dCA9IChmdW5jdGlvbiAoKSB7XFxuICAgIGZ1bmN0aW9uIENvbW1vbkNvbnRleHQobm9DYWNoZSwgcmVxdWVzdEhhbmRsZSkge1xcbiAgICAgICAgaWYgKG5vQ2FjaGUgPT09IHZvaWQgMCkgeyBub0NhY2hlID0gZmFsc2U7IH1cXG4gICAgICAgIGlmIChyZXF1ZXN0SGFuZGxlID09PSB2b2lkIDApIHsgcmVxdWVzdEhhbmRsZSA9IDA7IH1cXG4gICAgICAgIHRoaXMucmVxdWVzdEhhbmRsZSA9IHJlcXVlc3RIYW5kbGUgfHwgTWF0aC5yYW5kb20oKSAqICgxIDw8IDMwKTtcXG4gICAgICAgIHRoaXMudXNlQ2FjaGUgPSAhbm9DYWNoZTtcXG4gICAgfVxcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tbW9uQ29udGV4dC5wcm90b3R5cGUsIFxcXCJjYWNoZVxcXCIsIHtcXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgIGlmICghdGhpcy51c2VDYWNoZSkge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMuX2NhY2hlKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlID0gbmV3IG1lbV8xLlRyYW5zcG9zaXRpb25UYWJsZSh7IG5vZGVMaW1pdDogOTAwMCB9KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcXG4gICAgfSk7XFxuICAgIENvbW1vbkNvbnRleHQucG9zdFRocmVhZEJvdW5kYXJ5ID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcXG4gICAgICAgIHJldHVybiBuZXcgQ29tbW9uQ29udGV4dCghIWNvbnRleHQuY2FjaGUsIGNvbnRleHQucmVxdWVzdEhhbmRsZSk7XFxuICAgIH07XFxuICAgIHJldHVybiBDb21tb25Db250ZXh0O1xcbn0oKSk7XFxuZXhwb3J0cy5Db21tb25Db250ZXh0ID0gQ29tbW9uQ29udGV4dDtcXG5cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9TS0FJLy4vc3JjL0NvbW1vbkNvbnRleHQudHM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9TZWFyY2hDb250ZXh0LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvU2VhcmNoQ29udGV4dC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuZXZhbChcIlxcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xcbiAgICB2YXIgcmVzdWx0ID0ge307XFxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XFxuICAgIHJlc3VsdFtcXFwiZGVmYXVsdFxcXCJdID0gbW9kO1xcbiAgICByZXR1cm4gcmVzdWx0O1xcbn07XFxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XFxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXFxcImRlZmF1bHRcXFwiOiBtb2QgfTtcXG59O1xcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcXFwiX19lc01vZHVsZVxcXCIsIHsgdmFsdWU6IHRydWUgfSk7XFxudmFyIFNLID0gX19pbXBvcnRTdGFyKF9fd2VicGFja19yZXF1aXJlX18oLyohIHN1cmFrYXJ0YSAqLyBcXFwic3VyYWthcnRhXFxcIikpO1xcbnZhciBDb21tb25Db250ZXh0XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0NvbW1vbkNvbnRleHQgKi8gXFxcIi4vc3JjL0NvbW1vbkNvbnRleHQudHNcXFwiKTtcXG52YXIgb3Bvb2xfMSA9IF9faW1wb3J0RGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBvcG9vbCAqLyBcXFwiLi9ub2RlX21vZHVsZXMvb3Bvb2wvaW5kZXguanNcXFwiKSk7XFxudmFyIFNlYXJjaENvbnRleHQgPSAoZnVuY3Rpb24gKCkge1xcbiAgICBmdW5jdGlvbiBTZWFyY2hDb250ZXh0KCkge1xcbiAgICAgICAgdGhpcy5zdXJha2FydGEgPSBudWxsO1xcbiAgICAgICAgdGhpcy5wbGF5ZXJJZCA9IFNLLk5PVF9GSUxMRUQ7XFxuICAgICAgICB0aGlzLnNlYXJjaERlcHRoID0gMDtcXG4gICAgICAgIHRoaXMuZGVwdGhMaW1pdCA9IDA7XFxuICAgICAgICB0aGlzLmFscGhhID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xcbiAgICAgICAgdGhpcy5iZXRhID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xcbiAgICAgICAgdGhpcy5jb21tb24gPSBudWxsO1xcbiAgICB9XFxuICAgIFNlYXJjaENvbnRleHQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoc3VyYWthcnRhLCBwbGF5ZXJJZCwgZGVwdGhMaW1pdCwgc2VhcmNoRGVwdGgpIHtcXG4gICAgICAgIGlmIChzZWFyY2hEZXB0aCA9PT0gdm9pZCAwKSB7IHNlYXJjaERlcHRoID0gMDsgfVxcbiAgICAgICAgdGhpcy5zdXJha2FydGEgPSBzdXJha2FydGE7XFxuICAgICAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWQ7XFxuICAgICAgICB0aGlzLmRlcHRoTGltaXQgPSBkZXB0aExpbWl0O1xcbiAgICAgICAgdGhpcy5zZWFyY2hEZXB0aCA9IHNlYXJjaERlcHRoO1xcbiAgICAgICAgdGhpcy5hbHBoYSA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcXG4gICAgICAgIHRoaXMuYmV0YSA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcXG4gICAgfTtcXG4gICAgU2VhcmNoQ29udGV4dC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XFxuICAgICAgICB0aGlzLnN1cmFrYXJ0YSA9IG51bGw7XFxuICAgICAgICB0aGlzLnBsYXllcklkID0gMDtcXG4gICAgICAgIHRoaXMuZGVwdGhMaW1pdCA9IDA7XFxuICAgICAgICB0aGlzLnNlYXJjaERlcHRoID0gMDtcXG4gICAgICAgIHRoaXMuYWxwaGEgPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XFxuICAgICAgICB0aGlzLmJldGEgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XFxuICAgIH07XFxuICAgIFNlYXJjaENvbnRleHQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XFxuICAgICAgICBTZWFyY2hDb250ZXh0LnBvb2wucmVsZWFzZSh0aGlzKTtcXG4gICAgfTtcXG4gICAgU2VhcmNoQ29udGV4dC5wb3N0VGhyZWFkQm91bmRhcnkgPSBmdW5jdGlvbiAoY29udGV4dCkge1xcbiAgICAgICAgdmFyIG5ld0NvbnRleHQgPSBuZXcgU2VhcmNoQ29udGV4dCgpO1xcbiAgICAgICAgbmV3Q29udGV4dC5zdXJha2FydGEgPSBjb250ZXh0LnN1cmFrYXJ0YTtcXG4gICAgICAgIG5ld0NvbnRleHQucGxheWVySWQgPSBjb250ZXh0LnBsYXllcklkO1xcbiAgICAgICAgbmV3Q29udGV4dC5kZXB0aExpbWl0ID0gY29udGV4dC5kZXB0aExpbWl0O1xcbiAgICAgICAgbmV3Q29udGV4dC5zZWFyY2hEZXB0aCA9IGNvbnRleHQuc2VhcmNoRGVwdGg7XFxuICAgICAgICBuZXdDb250ZXh0LmFscGhhID0gY29udGV4dC5hbHBoYTtcXG4gICAgICAgIG5ld0NvbnRleHQuYmV0YSA9IGNvbnRleHQuYmV0YTtcXG4gICAgICAgIHZhciBfYSA9IGNvbnRleHQuc3VyYWthcnRhLCBzdGF0ZXMgPSBfYS5zdGF0ZXMsIHR1cm4gPSBfYS50dXJuO1xcbiAgICAgICAgbmV3Q29udGV4dC5zdXJha2FydGEgPSBTSy5TdXJha2FydGEuZnJvbVN0YXRlKHN0YXRlcyk7XFxuICAgICAgICBuZXdDb250ZXh0LnN1cmFrYXJ0YS50dXJuID0gdHVybjtcXG4gICAgICAgIG5ld0NvbnRleHQuY29tbW9uID0gQ29tbW9uQ29udGV4dF8xLkNvbW1vbkNvbnRleHQucG9zdFRocmVhZEJvdW5kYXJ5KGNvbnRleHQuY29tbW9uKTtcXG4gICAgICAgIHJldHVybiBuZXdDb250ZXh0O1xcbiAgICB9O1xcbiAgICBTZWFyY2hDb250ZXh0LnBvb2wgPSBuZXcgb3Bvb2xfMS5kZWZhdWx0KFNlYXJjaENvbnRleHQpO1xcbiAgICByZXR1cm4gU2VhcmNoQ29udGV4dDtcXG59KCkpO1xcbmV4cG9ydHMuU2VhcmNoQ29udGV4dCA9IFNlYXJjaENvbnRleHQ7XFxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChzdXJha2FydGEsIHNlYXJjaE9wdGlvbnMpIHtcXG4gICAgaWYgKHNlYXJjaE9wdGlvbnMgPT09IHZvaWQgMCkgeyBzZWFyY2hPcHRpb25zID0geyBub0NhY2hlOiBmYWxzZSB9OyB9XFxuICAgIHZhciBjb250ZXh0ID0gU2VhcmNoQ29udGV4dC5wb29sLmdldCgpO1xcbiAgICBjb250ZXh0LmluaXQoc3VyYWthcnRhLCBzdXJha2FydGEudHVyblBsYXllciwgNCk7XFxuICAgIGNvbnRleHQuY29tbW9uID0gbmV3IENvbW1vbkNvbnRleHRfMS5Db21tb25Db250ZXh0KHNlYXJjaE9wdGlvbnMubm9DYWNoZSk7XFxuICAgIHJldHVybiBjb250ZXh0O1xcbn1cXG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xcbmZ1bmN0aW9uIGNyZWF0ZUluaGVyaXRlZENvbnRleHQoc3VyYWthcnRhLCBwYXJlbnQpIHtcXG4gICAgdmFyIGNvbnRleHQgPSBTZWFyY2hDb250ZXh0LnBvb2wuZ2V0KCk7XFxuICAgIGNvbnRleHQuc3VyYWthcnRhID0gc3VyYWthcnRhO1xcbiAgICBjb250ZXh0LnBsYXllcklkID1cXG4gICAgICAgIHBhcmVudC5wbGF5ZXJJZCA9PT0gU0suQkxBQ0tfUExBWUVSID8gU0suUkVEX1BMQVlFUiA6IFNLLkJMQUNLX1BMQVlFUjtcXG4gICAgY29udGV4dC5zZWFyY2hEZXB0aCA9IHBhcmVudC5zZWFyY2hEZXB0aCArIDE7XFxuICAgIGNvbnRleHQuZGVwdGhMaW1pdCA9IHBhcmVudC5kZXB0aExpbWl0O1xcbiAgICBjb250ZXh0LmFscGhhID0gLXBhcmVudC5iZXRhO1xcbiAgICBjb250ZXh0LmJldGEgPSAtcGFyZW50LmFscGhhO1xcbiAgICBjb250ZXh0LmNvbW1vbiA9IHBhcmVudC5jb21tb247XFxuICAgIHJldHVybiBjb250ZXh0O1xcbn1cXG5leHBvcnRzLmNyZWF0ZUluaGVyaXRlZENvbnRleHQgPSBjcmVhdGVJbmhlcml0ZWRDb250ZXh0O1xcblxcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL1NLQUkvLi9zcmMvU2VhcmNoQ29udGV4dC50cz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2luZGV4LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuZXZhbChcIlxcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XFxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XFxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcXFwidGhyb3dcXFwiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XFxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xcbiAgICB9KTtcXG59O1xcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XFxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XFxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcXFwidGhyb3dcXFwiOiB2ZXJiKDEpLCBcXFwicmV0dXJuXFxcIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcXFwiZnVuY3Rpb25cXFwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cXFwiKTtcXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXFxcInJldHVyblxcXCJdIDogb3BbMF0gPyB5W1xcXCJ0aHJvd1xcXCJdIHx8ICgodCA9IHlbXFxcInJldHVyblxcXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XFxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XFxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XFxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XFxuICAgIH1cXG59O1xcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcXFwiX19lc01vZHVsZVxcXCIsIHsgdmFsdWU6IHRydWUgfSk7XFxudmFyIHNlYXJjaF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9zZWFyY2ggKi8gXFxcIi4vc3JjL3NlYXJjaC50c1xcXCIpO1xcbnZhciBTZWFyY2hDb250ZXh0XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1NlYXJjaENvbnRleHQgKi8gXFxcIi4vc3JjL1NlYXJjaENvbnRleHQudHNcXFwiKTtcXG5mdW5jdGlvbiBzdWdnZXN0UGxheShzdXJha2FydGEpIHtcXG4gICAgcmV0dXJuIHNlYXJjaF8xLnNlYXJjaChTZWFyY2hDb250ZXh0XzEuY3JlYXRlQ29udGV4dChzdXJha2FydGEpKTtcXG59XFxuZXhwb3J0cy5zdWdnZXN0UGxheSA9IHN1Z2dlc3RQbGF5O1xcbmZ1bmN0aW9uIHBsYXkoc3VyYWthcnRhKSB7XFxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcXG4gICAgICAgICAgICByZXR1cm4gWzIsIHNlYXJjaF8xLnNlYXJjaChTZWFyY2hDb250ZXh0XzEuY3JlYXRlQ29udGV4dChzdXJha2FydGEpKV07XFxuICAgICAgICB9KTtcXG4gICAgfSk7XFxufVxcbmV4cG9ydHMucGxheSA9IHBsYXk7XFxuZnVuY3Rpb24gcmVzZXRSZXNvdXJjZXMoKSB7XFxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xcbiAgICAgICAgcmV0dXJuIFsyXTtcXG4gICAgfSk7IH0pO1xcbn1cXG5leHBvcnRzLnJlc2V0UmVzb3VyY2VzID0gcmVzZXRSZXNvdXJjZXM7XFxuZXhwb3J0cy5kZWZhdWx0ID0ge1xcbiAgICBzdWdnZXN0UGxheTogc3VnZ2VzdFBsYXlcXG59O1xcbmV4cG9ydHMuQUkgPSB7IHN1Z2dlc3RQbGF5OiBzdWdnZXN0UGxheSB9O1xcblxcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL1NLQUkvLi9zcmMvaW5kZXgudHM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9tZW0vVHJhbnNwb3NpdGlvblRhYmxlLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvbWVtL1RyYW5zcG9zaXRpb25UYWJsZS50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuZXZhbChcIlxcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcXFwiX19lc01vZHVsZVxcXCIsIHsgdmFsdWU6IHRydWUgfSk7XFxudmFyIFpvYnJpc3RIYXNoZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vWm9icmlzdEhhc2hlciAqLyBcXFwiLi9zcmMvbWVtL1pvYnJpc3RIYXNoZXIudHNcXFwiKTtcXG5mdW5jdGlvbiBucG93MihuKSB7XFxuICAgIHJldHVybiAxIDw8ICgzMSAtIE1hdGguY2x6MzIobikpO1xcbn1cXG52YXIgVFRFbnRyeSA9IChmdW5jdGlvbiAoKSB7XFxuICAgIGZ1bmN0aW9uIFRURW50cnkoKSB7XFxuICAgICAgICB0aGlzLmtleSA9IC0xO1xcbiAgICAgICAgdGhpcy52YWx1ZSA9IDA7XFxuICAgICAgICB0aGlzLmRlcHRoID0gMDtcXG4gICAgICAgIHRoaXMubGFzdEhpdCA9IDA7XFxuICAgIH1cXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRURW50cnkucHJvdG90eXBlLCBcXFwid2VpZ2h0XFxcIiwge1xcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIC10aGlzLmRlcHRoIC0gMiAqIChwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMubGFzdEhpdCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxcbiAgICB9KTtcXG4gICAgVFRFbnRyeS5wcm90b3R5cGUuZmVlZCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBkZXB0aCkge1xcbiAgICAgICAgaWYgKHRoaXMud2VpZ2h0ID4gLWRlcHRoKSB7XFxuICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgfVxcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XFxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XFxuICAgICAgICB0aGlzLmRlcHRoID0gZGVwdGg7XFxuICAgICAgICB0aGlzLmxhc3RIaXQgPSBwZXJmb3JtYW5jZS5ub3coKTtcXG4gICAgfTtcXG4gICAgVFRFbnRyeS5wcm90b3R5cGUuaGl0ID0gZnVuY3Rpb24gKCkge1xcbiAgICAgICAgdGhpcy5sYXN0SGl0ID0gcGVyZm9ybWFuY2Uubm93KCk7XFxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcXG4gICAgfTtcXG4gICAgcmV0dXJuIFRURW50cnk7XFxufSgpKTtcXG5leHBvcnRzLlRURW50cnkgPSBUVEVudHJ5O1xcbnZhciBUcmFuc3Bvc2l0aW9uVGFibGUgPSAoZnVuY3Rpb24gKCkge1xcbiAgICBmdW5jdGlvbiBUcmFuc3Bvc2l0aW9uVGFibGUob3B0aW9ucykge1xcbiAgICAgICAgdGhpcy5ub2RlTGltaXQgPSBucG93MihvcHRpb25zLm5vZGVMaW1pdCk7XFxuICAgICAgICB2YXIgc2l6ZSA9IE1hdGguZmxvb3IodGhpcy5ub2RlTGltaXQgLyAzKTtcXG4gICAgICAgIHRoaXMuYnVja2V0cyA9IG5ldyBBcnJheShzaXplKTtcXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XFxuICAgICAgICAgICAgdGhpcy5idWNrZXRzW2ldID0gbmV3IEFycmF5KDMpO1xcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgMzsgaisrKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuYnVja2V0c1tpXVtqXSA9IG5ldyBUVEVudHJ5KCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgWm9icmlzdEhhc2hlcl8xLmluaXRab2JyaXN0KCk7XFxuICAgIH1cXG4gICAgVHJhbnNwb3NpdGlvblRhYmxlLnByb3RvdHlwZS5oaXQgPSBmdW5jdGlvbiAoa2V5LCB3aWxsRmVlZCkge1xcbiAgICAgICAgaWYgKHdpbGxGZWVkID09PSB2b2lkIDApIHsgd2lsbEZlZWQgPSB0cnVlOyB9XFxuICAgICAgICB2YXIgYnVja2V0ID0gdGhpcy5idWNrZXRzW2tleSAlIHRoaXMuYnVja2V0cy5sZW5ndGhdO1xcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidWNrZXQubGVuZ3RoOyBpKyspIHtcXG4gICAgICAgICAgICBpZiAoYnVja2V0W2ldLmtleSA9PSBrZXkpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1Y2tldFtpXS5oaXQoKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBpZiAod2lsbEZlZWQpIHtcXG4gICAgICAgICAgICB2YXIgd29yc3RFbnRyeSA9IGJ1Y2tldFswXTtcXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGJ1Y2tldC5sZW5ndGg7IGkrKykge1xcbiAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSBidWNrZXRbaV07XFxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS53ZWlnaHQgPCB3b3JzdEVudHJ5LndlaWdodCkge1xcbiAgICAgICAgICAgICAgICAgICAgd29yc3RFbnRyeSA9IGVudHJ5O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHJldHVybiB3b3JzdEVudHJ5O1xcbiAgICAgICAgfVxcbiAgICAgICAgcmV0dXJuIG51bGw7XFxuICAgIH07XFxuICAgIHJldHVybiBUcmFuc3Bvc2l0aW9uVGFibGU7XFxufSgpKTtcXG5leHBvcnRzLlRyYW5zcG9zaXRpb25UYWJsZSA9IFRyYW5zcG9zaXRpb25UYWJsZTtcXG5cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9TS0FJLy4vc3JjL21lbS9UcmFuc3Bvc2l0aW9uVGFibGUudHM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9tZW0vWm9icmlzdEhhc2hlci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9tZW0vWm9icmlzdEhhc2hlci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbmV2YWwoXCJcXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXFxcIl9fZXNNb2R1bGVcXFwiLCB7IHZhbHVlOiB0cnVlIH0pO1xcbnZhciBiYXNlQ29kZXMgPSBbXTtcXG52YXIgaXNJbml0ID0gZmFsc2U7XFxuZnVuY3Rpb24gaW5pdFpvYnJpc3QoKSB7XFxuICAgIGlmIChpc0luaXQpIHtcXG4gICAgICAgIHJldHVybjtcXG4gICAgfVxcbiAgICBmb3IgKHZhciBwbGF5ZXIgPSAtMTsgcGxheWVyIDw9IDE7IHBsYXllcisrKSB7XFxuICAgICAgICB2YXIgcGxheWVySGFzaGVzID0gbmV3IEFycmF5KDM2KTtcXG4gICAgICAgIGZvciAodmFyIHBvcyA9IDA7IHBvcyA8IDM2OyBwb3MrKykge1xcbiAgICAgICAgICAgIHBsYXllckhhc2hlc1twb3NdID0gTWF0aC5yYW5kb20oKSAqICgxIDw8IDMwKTtcXG4gICAgICAgIH1cXG4gICAgICAgIGJhc2VDb2Rlc1twbGF5ZXJdID0gcGxheWVySGFzaGVzO1xcbiAgICB9XFxuICAgIGlzSW5pdCA9IHRydWU7XFxufVxcbmV4cG9ydHMuaW5pdFpvYnJpc3QgPSBpbml0Wm9icmlzdDtcXG5mdW5jdGlvbiBoYXNoKG5vZGUpIHtcXG4gICAgaW5pdFpvYnJpc3QoKTtcXG4gICAgdmFyIGhhc2hDb2RlID0gMDtcXG4gICAgZm9yICh2YXIgcCA9IDA7IHAgPCAzNjsgcCsrKSB7XFxuICAgICAgICBoYXNoQ29kZSBePSBiYXNlQ29kZXNbbm9kZS5zdGF0ZXNbcF1dW3BdO1xcbiAgICB9XFxuICAgIHJldHVybiBoYXNoQ29kZTtcXG59XFxuZXhwb3J0cy5oYXNoID0gaGFzaDtcXG5cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9TS0FJLy4vc3JjL21lbS9ab2JyaXN0SGFzaGVyLnRzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvbWVtL2luZGV4LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9tZW0vaW5kZXgudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuZXZhbChcIlxcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xcbn1cXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXFxcIl9fZXNNb2R1bGVcXFwiLCB7IHZhbHVlOiB0cnVlIH0pO1xcbl9fZXhwb3J0KF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vWm9icmlzdEhhc2hlciAqLyBcXFwiLi9zcmMvbWVtL1pvYnJpc3RIYXNoZXIudHNcXFwiKSk7XFxuX19leHBvcnQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9UcmFuc3Bvc2l0aW9uVGFibGUgKi8gXFxcIi4vc3JjL21lbS9UcmFuc3Bvc2l0aW9uVGFibGUudHNcXFwiKSk7XFxuXFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vU0tBSS8uL3NyYy9tZW0vaW5kZXgudHM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9zZWFyY2gudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3NlYXJjaC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5ldmFsKFwiXFxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XFxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XFxuICAgIHZhciByZXN1bHQgPSB7fTtcXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcXG4gICAgcmVzdWx0W1xcXCJkZWZhdWx0XFxcIl0gPSBtb2Q7XFxuICAgIHJldHVybiByZXN1bHQ7XFxufTtcXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXFxcIl9fZXNNb2R1bGVcXFwiLCB7IHZhbHVlOiB0cnVlIH0pO1xcbnZhciBTSyA9IF9faW1wb3J0U3RhcihfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBzdXJha2FydGEgKi8gXFxcInN1cmFrYXJ0YVxcXCIpKTtcXG52YXIgc3VyYWthcnRhX2FuYWx5c2lzXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBzdXJha2FydGEtYW5hbHlzaXMgKi8gXFxcInN1cmFrYXJ0YS1hbmFseXNpc1xcXCIpO1xcbnZhciBTZWFyY2hDb250ZXh0XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1NlYXJjaENvbnRleHQgKi8gXFxcIi4vc3JjL1NlYXJjaENvbnRleHQudHNcXFwiKTtcXG52YXIgbWVtXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL21lbSAqLyBcXFwiLi9zcmMvbWVtL2luZGV4LnRzXFxcIik7XFxudmFyIGluZmxhdGVIYW5kbGUgPSBzdXJha2FydGFfYW5hbHlzaXNfMS5Nb3ZlSGVscGVyLmluZmxhdGVIYW5kbGU7XFxudmFyIEFnZ3JlZ2F0ZSA9IChmdW5jdGlvbiAoKSB7XFxuICAgIGZ1bmN0aW9uIEFnZ3JlZ2F0ZSgpIHtcXG4gICAgICAgIHRoaXMuaW5kZXhlZCA9IFtdO1xcbiAgICB9XFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBZ2dyZWdhdGUucHJvdG90eXBlLCBcXFwibGVuZ3RoXFxcIiwge1xcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXhlZC5sZW5ndGg7XFxuICAgICAgICB9LFxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxcbiAgICB9KTtcXG4gICAgQWdncmVnYXRlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XFxuICAgICAgICB2YXIgbW92ZVRhcmdldCA9IG5ldyBTSy5Nb3ZlKCk7XFxuICAgICAgICB0aGlzLmluZGV4ZWQuZm9yRWFjaChmdW5jdGlvbiAobW92ZUhhbmRsZSkge1xcbiAgICAgICAgICAgIGNhbGxiYWNrKGluZmxhdGVIYW5kbGUobW92ZUhhbmRsZSwgbW92ZVRhcmdldCkpO1xcbiAgICAgICAgfSk7XFxuICAgIH07XFxuICAgIEFnZ3JlZ2F0ZS5mcm9tID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcXG4gICAgICAgIHZhciBzdXJha2FydGEgPSBjb250ZXh0LnN1cmFrYXJ0YTtcXG4gICAgICAgIHZhciBtb3Zlc0FycmF5ID0gbmV3IEFnZ3JlZ2F0ZSgpO1xcbiAgICAgICAgc3VyYWthcnRhX2FuYWx5c2lzXzEuSW5kZXhlci5pbmRleChzdXJha2FydGEsIG1vdmVzQXJyYXkuaW5kZXhlZCk7XFxuICAgICAgICBzdXJha2FydGFfYW5hbHlzaXNfMS5zb3J0SW5kZXgoc3VyYWthcnRhLCBtb3Zlc0FycmF5LmluZGV4ZWQpO1xcbiAgICAgICAgcmV0dXJuIG1vdmVzQXJyYXk7XFxuICAgIH07XFxuICAgIHJldHVybiBBZ2dyZWdhdGU7XFxufSgpKTtcXG52YXIgc3VyYWthcnRhUG9vbCA9IFtdO1xcbmZ1bmN0aW9uIHNlYXJjaChjb250ZXh0KSB7XFxuICAgIHZhciBzdXJha2FydGEgPSBjb250ZXh0LnN1cmFrYXJ0YSwgcGxheWVySWQgPSBjb250ZXh0LnBsYXllcklkLCBzZWFyY2hEZXB0aCA9IGNvbnRleHQuc2VhcmNoRGVwdGgsIGRlcHRoTGltaXQgPSBjb250ZXh0LmRlcHRoTGltaXQ7XFxuICAgIGlmIChzZWFyY2hEZXB0aCA9PT0gZGVwdGhMaW1pdCkge1xcbiAgICAgICAgcmV0dXJuICgyICogcGxheWVySWQgLSAxKSAqIHN1cmFrYXJ0YV9hbmFseXNpc18xLmV2YWx1YXRlKHN1cmFrYXJ0YSk7XFxuICAgIH1cXG4gICAgdmFyIGhpdDtcXG4gICAgdmFyIGhhc2hDb2RlID0gbWVtXzEuaGFzaChzdXJha2FydGEpO1xcbiAgICBpZiAoY29udGV4dC5jb21tb24uY2FjaGUgJiYgc2VhcmNoRGVwdGggPiAwKSB7XFxuICAgICAgICBoaXQgPSBjb250ZXh0LmNvbW1vbi5jYWNoZS5oaXQoaGFzaENvZGUpO1xcbiAgICAgICAgaWYgKHR5cGVvZiBoaXQgPT09IFxcXCJudW1iZXJcXFwiKSB7XFxuICAgICAgICAgICAgcmV0dXJuIGhpdDtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICB2YXIgY2hpbGRTdGF0ZSA9IHN1cmFrYXJ0YVBvb2wucG9wKCkgfHwgbmV3IFNLLlN1cmFrYXJ0YSh0cnVlKTtcXG4gICAgY2hpbGRTdGF0ZS5jb3B5RnJvbShzdXJha2FydGEpO1xcbiAgICBjaGlsZFN0YXRlLnR1cm4gPSBzdXJha2FydGEudHVybjtcXG4gICAgdmFyIG1vdmVzSXRlcmFibGUgPSBBZ2dyZWdhdGUuZnJvbShjb250ZXh0KTtcXG4gICAgdmFyIGJlc3RNb3ZlID0gbnVsbDtcXG4gICAgdmFyIGJlc3RWYWx1ZSA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcXG4gICAgdmFyIHN0b3BwZWQgPSBmYWxzZTtcXG4gICAgbW92ZXNJdGVyYWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChtb3ZlKSB7XFxuICAgICAgICBpZiAoc3RvcHBlZCkge1xcbiAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgIH1cXG4gICAgICAgIGNoaWxkU3RhdGUuc3RlcChtb3ZlLnNyY1JvdywgbW92ZS5zcmNDb2x1bW4sIG1vdmUuZHN0Um93LCBtb3ZlLmRzdENvbHVtbiwgdHJ1ZSwgbW92ZS5pc0F0dGFjayk7XFxuICAgICAgICArK2NoaWxkU3RhdGUudHVybjtcXG4gICAgICAgIHZhciB2YWx1ZSA9IC1zZWFyY2goU2VhcmNoQ29udGV4dF8xLmNyZWF0ZUluaGVyaXRlZENvbnRleHQoY2hpbGRTdGF0ZSwgY29udGV4dCkpO1xcbiAgICAgICAgaWYgKHZhbHVlID4gYmVzdFZhbHVlKSB7XFxuICAgICAgICAgICAgaWYgKHNlYXJjaERlcHRoID09PSAwKSB7XFxuICAgICAgICAgICAgICAgIGJlc3RNb3ZlID0gbW92ZS5jbG9uZSgpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBiZXN0VmFsdWUgPSB2YWx1ZTtcXG4gICAgICAgIH1cXG4gICAgICAgIGNvbnRleHQuYWxwaGEgPSBNYXRoLm1heChjb250ZXh0LmFscGhhLCB2YWx1ZSk7XFxuICAgICAgICBpZiAoY29udGV4dC5hbHBoYSA+PSBjb250ZXh0LmJldGEpIHtcXG4gICAgICAgICAgICBzdG9wcGVkID0gdHJ1ZTtcXG4gICAgICAgIH1cXG4gICAgICAgIGNoaWxkU3RhdGUuY29weUZyb20oc3VyYWthcnRhKTtcXG4gICAgICAgIC0tY2hpbGRTdGF0ZS50dXJuO1xcbiAgICB9KTtcXG4gICAgaWYgKHNlYXJjaERlcHRoID09PSAwKSB7XFxuICAgICAgICByZXR1cm4gYmVzdE1vdmU7XFxuICAgIH1cXG4gICAgaWYgKGhpdCkge1xcbiAgICAgICAgaGl0LmZlZWQoaGFzaENvZGUsIGJlc3RWYWx1ZSwgc2VhcmNoRGVwdGgpO1xcbiAgICB9XFxuICAgIGNvbnRleHQuZGVzdHJveSgpO1xcbiAgICByZXR1cm4gYmVzdFZhbHVlO1xcbn1cXG5leHBvcnRzLnNlYXJjaCA9IHNlYXJjaDtcXG5cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9TS0FJLy4vc3JjL3NlYXJjaC50cz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcInN1cmFrYXJ0YVwiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBleHRlcm5hbCB7XCJjb21tb25qc1wiOlwic3VyYWthcnRhXCIsXCJjb21tb25qczJcIjpcInN1cmFrYXJ0YVwiLFwiYW1kXCI6XCJzdXJha2FydGFcIixcInJvb3RcIjpcIl9cIn0gKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZXZhbChcIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9zdXJha2FydGFfXztcXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9TS0FJL2V4dGVybmFsXyU3QiUyMmNvbW1vbmpzJTIyOiUyMnN1cmFrYXJ0YSUyMiwlMjJjb21tb25qczIlMjI6JTIyc3VyYWthcnRhJTIyLCUyMmFtZCUyMjolMjJzdXJha2FydGElMjIsJTIycm9vdCUyMjolMjJfJTIyJTdEP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwic3VyYWthcnRhLWFuYWx5c2lzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJzdXJha2FydGEtYW5hbHlzaXNcIixcImNvbW1vbmpzMlwiOlwic3VyYWthcnRhLWFuYWx5c2lzXCIsXCJhbWRcIjpcInN1cmFrYXJ0YS1hbmFseXNpc1wiLFwicm9vdFwiOlwiX1wifSAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5ldmFsKFwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3N1cmFrYXJ0YV9hbmFseXNpc19fO1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL1NLQUkvZXh0ZXJuYWxfJTdCJTIyY29tbW9uanMlMjI6JTIyc3VyYWthcnRhLWFuYWx5c2lzJTIyLCUyMmNvbW1vbmpzMiUyMjolMjJzdXJha2FydGEtYW5hbHlzaXMlMjIsJTIyYW1kJTIyOiUyMnN1cmFrYXJ0YS1hbmFseXNpcyUyMiwlMjJyb290JTIyOiUyMl8lMjIlN0Q/XCIpO1xuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Nb3ZlSGVscGVyID0gdm9pZCAwO1xuXG52YXIgX3N1cmFrYXJ0YSA9IHJlcXVpcmUoXCJzdXJha2FydGFcIik7XG5cbi8qKlxuICogQG5hbWVzcGFjZSBTSy5hbmFseXNpc1xuICovXG52YXIgTW92ZUhlbHBlciA9IHtcbiAgcm9vbUJpdFNpemU6IDEyLFxuICBjcmVhdGVIYW5kbGU6IGZ1bmN0aW9uIGNyZWF0ZUhhbmRsZShtb3ZlKSB7XG4gICAgcmV0dXJuIG1vdmUuc3JjUm93IHwgbW92ZS5zcmNDb2x1bW4gPDwgMyB8IG1vdmUuZHN0Um93IDw8IDYgfCBtb3ZlLmRzdENvbHVtbiA8PCA5IHwgKG1vdmUuaXNBdHRhY2sgPyAxIDogMCkgPDwgMTIgfCAobW92ZS5kaXJlY3Rpb24gPiAwID8gbW92ZS5kaXJlY3Rpb24gOiAwKSA8PCAxMztcbiAgfSxcbiAgYnVpbGRIYW5kbGU6IGZ1bmN0aW9uIGJ1aWxkSGFuZGxlKHNyY1Jvdywgc3JjQ29sdW1uLCBkc3RSb3csIGRzdENvbHVtbikge1xuICAgIHZhciBpc0F0dGFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogZmFsc2U7XG4gICAgdmFyIGRpcmVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDogLTE7XG4gICAgcmV0dXJuIHNyY1JvdyB8IHNyY0NvbHVtbiA8PCAzIHwgZHN0Um93IDw8IDYgfCBkc3RDb2x1bW4gPDwgOSB8IChpc0F0dGFjayA/IDEgOiAwKSA8PCAxMiB8IChkaXJlY3Rpb24gPiAwID8gZGlyZWN0aW9uIDogMCkgPDwgMTM7XG4gIH0sXG4gIGV4cGFuZEhhbmRsZTogZnVuY3Rpb24gZXhwYW5kSGFuZGxlKGhhbmRsZSkge1xuICAgIHJldHVybiBNb3ZlSGVscGVyLmluZmxhdGVIYW5kbGUoaGFuZGxlLCBuZXcgX3N1cmFrYXJ0YS5Nb3ZlKCkpO1xuICB9LFxuICBpbmZsYXRlSGFuZGxlOiBmdW5jdGlvbiBpbmZsYXRlSGFuZGxlKGhhbmRsZSwgbW92ZSkge1xuICAgIHZhciBpc0F0dGFjayA9ICEhKGhhbmRsZSA+PiAxMiAmIDEpO1xuICAgIHZhciBkaXJlY3Rpb24gPSBpc0F0dGFjayA/IGhhbmRsZSA+PiAxMyAmIDE1IDogLTE7XG4gICAgbW92ZS5zcmNSb3cgPSBoYW5kbGUgJiA3O1xuICAgIG1vdmUuc3JjQ29sdW1uID0gaGFuZGxlID4+IDMgJiA3O1xuICAgIG1vdmUuZHN0Um93ID0gaGFuZGxlID4+IDYgJiA3O1xuICAgIG1vdmUuZHN0Q29sdW1uID0gaGFuZGxlID4+IDkgJiA3O1xuICAgIG1vdmUuaXNBdHRhY2sgPSBpc0F0dGFjaztcbiAgICBtb3ZlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICByZXR1cm4gbW92ZTtcbiAgfSxcbiAgc3RvcmVJblJvb206IGZ1bmN0aW9uIHN0b3JlSW5Sb29tKGhhbmRsZSwgZGF0YSkge1xuICAgIHJldHVybiBoYW5kbGUgfCBkYXRhIDw8IDE4O1xuICB9LFxuICBpbmZsYXRlUm9vbTogZnVuY3Rpb24gaW5mbGF0ZVJvb20oaGFuZGxlKSB7XG4gICAgcmV0dXJuIGhhbmRsZSA+PiAxODtcbiAgfVxufTtcbmV4cG9ydHMuTW92ZUhlbHBlciA9IE1vdmVIZWxwZXI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlBvc2l0aW9uSGVscGVyID0gdm9pZCAwO1xuXG52YXIgX3N1cmFrYXJ0YSA9IHJlcXVpcmUoXCJzdXJha2FydGFcIik7XG5cbi8qKlxuICogQG5hbWVzcGFjZSBTSy5hbmFseXNpcy5Qb3NpdGlvbkhlbHBlclxuICovXG52YXIgUG9zaXRpb25IZWxwZXIgPSB7XG4gIGNyZWF0ZUhhbmRsZTogZnVuY3Rpb24gY3JlYXRlSGFuZGxlKHBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uLnJvdyB8IHBvc2l0aW9uLmNvbHVtbiA8PCAzO1xuICB9LFxuICBidWlsZEhhbmRsZTogZnVuY3Rpb24gYnVpbGRIYW5kbGUocm93LCBjb2x1bW4pIHtcbiAgICByZXR1cm4gcm93IHwgY29sdW1uIDw8IDM7XG4gIH0sXG4gIGV4cGFuZEhhbmRsZTogZnVuY3Rpb24gZXhwYW5kSGFuZGxlKGhhbmRsZSkge1xuICAgIHJldHVybiBQb3NpdGlvbkhlbHBlci5pbmZsYXRlSGFuZGxlKGhhbmRsZSwgbmV3IF9zdXJha2FydGEuUG9zaXRpb24oKSk7XG4gIH0sXG4gIGluZmxhdGVIYW5kbGU6IGZ1bmN0aW9uIGluZmxhdGVIYW5kbGUoaGFuZGxlLCBwb3NpdGlvbikge1xuICAgIHBvc2l0aW9uLnJvdyA9IGhhbmRsZSAmIDc7XG4gICAgcG9zaXRpb24uY29sdW1uID0gaGFuZGxlID4+IDMgJiA3O1xuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufTtcbmV4cG9ydHMuUG9zaXRpb25IZWxwZXIgPSBQb3NpdGlvbkhlbHBlcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9Nb3ZlSGFuZGxlID0gcmVxdWlyZShcIi4vTW92ZUhhbmRsZVwiKTtcblxuT2JqZWN0LmtleXMoX01vdmVIYW5kbGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9Nb3ZlSGFuZGxlW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX1Bvc2l0aW9uSGFuZGxlID0gcmVxdWlyZShcIi4vUG9zaXRpb25IYW5kbGVcIik7XG5cbk9iamVjdC5rZXlzKF9Qb3NpdGlvbkhhbmRsZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1Bvc2l0aW9uSGFuZGxlW2tleV07XG4gICAgfVxuICB9KTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ldmFsdWF0ZSA9IGV2YWx1YXRlO1xuXG52YXIgX3N1cmFrYXJ0YSA9IHJlcXVpcmUoXCJzdXJha2FydGFcIik7XG5cbmZ1bmN0aW9uIGlzQ29ybmVyKHIsIGMpIHtcbiAgcmV0dXJuIChyID09PSBjIHx8IHIgPT09IDUgLSBjKSAmJiAociA9PT0gMCB8fCByID09PSA1KTtcbn1cblxuZnVuY3Rpb24gZXZhbHVhdGUoc3VyYWthcnRhKSB7XG4gIHZhciBhZHZhbnRhZ2UgPSAwO1xuICBzdXJha2FydGEuZm9yRWFjaChmdW5jdGlvbiAocGxheWVyLCByb3csIGNvbHVtbikge1xuICAgIHZhciBwZWJibGVWYWx1ZSA9IDA7XG5cbiAgICBpZiAocGxheWVyID09PSBfc3VyYWthcnRhLlJFRF9QTEFZRVIpIHtcbiAgICAgIHBlYmJsZVZhbHVlID0gMTtcbiAgICB9IGVsc2UgaWYgKHBsYXllciA9PT0gX3N1cmFrYXJ0YS5CTEFDS19QTEFZRVIpIHtcbiAgICAgIHBlYmJsZVZhbHVlID0gLTE7XG4gICAgfVxuXG4gICAgaWYgKGlzQ29ybmVyKHJvdywgY29sdW1uKSkge1xuICAgICAgcGViYmxlVmFsdWUgKj0gMC41O1xuICAgIH1cblxuICAgIGFkdmFudGFnZSArPSBwZWJibGVWYWx1ZTtcbiAgfSk7XG4gIHJldHVybiBhZHZhbnRhZ2U7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaW5kZXhlciA9IHJlcXVpcmUoXCIuL2luZGV4ZXJcIik7XG5cbk9iamVjdC5rZXlzKF9pbmRleGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfaW5kZXhlcltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9ldmFsdWF0ZSA9IHJlcXVpcmUoXCIuL2V2YWx1YXRlXCIpO1xuXG5PYmplY3Qua2V5cyhfZXZhbHVhdGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9ldmFsdWF0ZVtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9kYXRhID0gcmVxdWlyZShcIi4vZGF0YVwiKTtcblxuT2JqZWN0LmtleXMoX2RhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9kYXRhW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX3NvcnRJbmRleCA9IHJlcXVpcmUoXCIuL3NvcnRJbmRleFwiKTtcblxuT2JqZWN0LmtleXMoX3NvcnRJbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3NvcnRJbmRleFtrZXldO1xuICAgIH1cbiAgfSk7XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaW5kZXhTaW5nbGVTdGVwc0Zyb20gPSBpbmRleFNpbmdsZVN0ZXBzRnJvbTtcbmV4cG9ydHMuaW5kZXhBdHRhY2tzRnJvbSA9IGluZGV4QXR0YWNrc0Zyb207XG5leHBvcnRzLmluZGV4RnJvbSA9IGluZGV4RnJvbTtcbmV4cG9ydHMuaW5kZXhTaW5nbGVTdGVwcyA9IGluZGV4U2luZ2xlU3RlcHM7XG5leHBvcnRzLmluZGV4QXR0YWNrcyA9IGluZGV4QXR0YWNrcztcbmV4cG9ydHMuaW5kZXggPSBpbmRleDtcbmV4cG9ydHMuSW5kZXhlciA9IHZvaWQgMDtcblxudmFyIF9zdXJha2FydGEgPSByZXF1aXJlKFwic3VyYWthcnRhXCIpO1xuXG52YXIgX2RhdGEgPSByZXF1aXJlKFwiLi9kYXRhXCIpO1xuXG52YXIgQVRUQUNLX0RJUkVDVElPTlMgPSBbX3N1cmFrYXJ0YS5EaXJlY3Rpb25zLkxFRlQsIF9zdXJha2FydGEuRGlyZWN0aW9ucy5VUCwgX3N1cmFrYXJ0YS5EaXJlY3Rpb25zLlJJR0hULCBfc3VyYWthcnRhLkRpcmVjdGlvbnMuRE9XTl07XG5cbnZhciBQb3NpdGlvbkRCID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYnVmZmVyID0gW107XG5cbiAgZm9yICh2YXIgciA9IDA7IHIgPCA2OyByKyspIHtcbiAgICBmb3IgKHZhciBjID0gMDsgYyA8IDY7IGMrKykge1xuICAgICAgYnVmZmVyLnB1c2gobmV3IF9zdXJha2FydGEuUG9zaXRpb24ociwgYykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWZmZXI7XG59KCk7XG4vKipcbiAqIEluZGV4ZXMgYWxsIHRoZSBwb3NzaWJsZSBzaW5nbGUtc3RlcCBtb3ZlcyBmcm9tIHRoZSBnaXZlbiBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1NLLlN1cmFrYXJ0YX0gc3VyYWthcnRhIC0gYm9hcmQgc3RhdGUgYmVmb3JlIHRoZSBtb3ZlXG4gKiBAcGFyYW0ge1NLLlBvc2l0aW9ufSBiYXNlUG9zaXRpb24gLSBwb3NpdGlvbiBvZiBwZWJibGUgYmVpbmcgbW92ZWRcbiAqIEBwYXJhbSB7QXJyYXk8U0suYW5hbHlzaXMuTW92ZUhhbmRsZT59W2luZGV4XSAtIGJ1ZmZlciB0byBhcHBlbmQgaW50b1xuICovXG5cblxuZnVuY3Rpb24gaW5kZXhTaW5nbGVTdGVwc0Zyb20oc3VyYWthcnRhLCBiYXNlUG9zaXRpb24pIHtcbiAgdmFyIGluZGV4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBbXTtcblxuICBpZiAoc3VyYWthcnRhLnN0YXRlc1tiYXNlUG9zaXRpb24uaW5kZXgoKV0gIT09IHN1cmFrYXJ0YS50dXJuUGxheWVyKSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgdmFyIHIgPSBiYXNlUG9zaXRpb24ucm93LFxuICAgICAgYyA9IGJhc2VQb3NpdGlvbi5jb2x1bW47XG5cbiAgaWYgKHN1cmFrYXJ0YS5zdGF0ZShyLCBjIC0gMSkgPT09IF9zdXJha2FydGEuTk9UX0ZJTExFRCkge1xuICAgIGluZGV4LnB1c2goX2RhdGEuTW92ZUhlbHBlci5idWlsZEhhbmRsZShyLCBjLCByLCBjIC0gMSkpO1xuICB9XG5cbiAgaWYgKHN1cmFrYXJ0YS5zdGF0ZShyIC0gMSwgYyAtIDEpID09PSBfc3VyYWthcnRhLk5PVF9GSUxMRUQpIHtcbiAgICBpbmRleC5wdXNoKF9kYXRhLk1vdmVIZWxwZXIuYnVpbGRIYW5kbGUociwgYywgciAtIDEsIGMgLSAxKSk7XG4gIH1cblxuICBpZiAoc3VyYWthcnRhLnN0YXRlKHIgLSAxLCBjKSA9PT0gX3N1cmFrYXJ0YS5OT1RfRklMTEVEKSB7XG4gICAgaW5kZXgucHVzaChfZGF0YS5Nb3ZlSGVscGVyLmJ1aWxkSGFuZGxlKHIsIGMsIHIgLSAxLCBjKSk7XG4gIH1cblxuICBpZiAoc3VyYWthcnRhLnN0YXRlKHIgLSAxLCBjICsgMSkgPT09IF9zdXJha2FydGEuTk9UX0ZJTExFRCkge1xuICAgIGluZGV4LnB1c2goX2RhdGEuTW92ZUhlbHBlci5idWlsZEhhbmRsZShyLCBjLCByIC0gMSwgYyArIDEpKTtcbiAgfVxuXG4gIGlmIChzdXJha2FydGEuc3RhdGUociwgYyArIDEpID09PSBfc3VyYWthcnRhLk5PVF9GSUxMRUQpIHtcbiAgICBpbmRleC5wdXNoKF9kYXRhLk1vdmVIZWxwZXIuYnVpbGRIYW5kbGUociwgYywgciwgYyArIDEpKTtcbiAgfVxuXG4gIGlmIChzdXJha2FydGEuc3RhdGUociArIDEsIGMgKyAxKSA9PT0gX3N1cmFrYXJ0YS5OT1RfRklMTEVEKSB7XG4gICAgaW5kZXgucHVzaChfZGF0YS5Nb3ZlSGVscGVyLmJ1aWxkSGFuZGxlKHIsIGMsIHIgKyAxLCBjICsgMSkpO1xuICB9XG5cbiAgaWYgKHN1cmFrYXJ0YS5zdGF0ZShyICsgMSwgYykgPT09IF9zdXJha2FydGEuTk9UX0ZJTExFRCkge1xuICAgIGluZGV4LnB1c2goX2RhdGEuTW92ZUhlbHBlci5idWlsZEhhbmRsZShyLCBjLCByICsgMSwgYykpO1xuICB9XG5cbiAgaWYgKHN1cmFrYXJ0YS5zdGF0ZShyICsgMSwgYyAtIDEpID09PSBfc3VyYWthcnRhLk5PVF9GSUxMRUQpIHtcbiAgICBpbmRleC5wdXNoKF9kYXRhLk1vdmVIZWxwZXIuYnVpbGRIYW5kbGUociwgYywgciArIDEsIGMgLSAxKSk7XG4gIH1cblxuICByZXR1cm4gaW5kZXg7XG59XG4vKipcbiAqIEluZGV4ZXMgYWxsIHBvc3NpYmxlIGF0dGFja2luZyBtb3ZlcyBmcm9tIHRoZSBnaXZlbiBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1NLLlN1cmFrYXJ0YX0gc3VyYWthcnRhIC0gYm9hcmQgc3RhdGUgYmVmb3JlIHRoZSBhdHRhY2tcbiAqIEBwYXJhbSB7U0suUG9zaXRpb259IGJhc2VQb3NpdGlvbiAtIGF0dGFja2luZyBwZWJibGUncyBvcmlnaW5hbCBwb3NpdGlvblxuICogQHBhcmFtIHtBcnJheTxTSy5hbmFseXNpcy5Nb3ZlSGFuZGxlPn1baW5kZXhdIC0gYnVmZmVyIHRvIGFwcGVuZCBpbnRvXG4gKi9cblxuXG5mdW5jdGlvbiBpbmRleEF0dGFja3NGcm9tKHN1cmFrYXJ0YSwgYmFzZVBvc2l0aW9uKSB7XG4gIHZhciBpbmRleCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogW107XG5cbiAgaWYgKHN1cmFrYXJ0YS5zdGF0ZXNbYmFzZVBvc2l0aW9uLmluZGV4KCldICE9IHN1cmFrYXJ0YS50dXJuUGxheWVyKSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgdmFyIGJhc2VSb3cgPSBiYXNlUG9zaXRpb24ucm93LFxuICAgICAgYmFzZUNvbHVtbiA9IGJhc2VQb3NpdGlvbi5jb2x1bW47IC8vIEFsZ29yaXRobSBzaW1pbGFyIHRvIFNLLlBhdGhGaW5kZXJcblxuICB2YXIgcGViYmxlID0gc3VyYWthcnRhLnN0YXRlKGJhc2VQb3NpdGlvbi5yb3csIGJhc2VQb3NpdGlvbi5jb2x1bW4pO1xuICB2YXIgcm93O1xuICB2YXIgY29sdW1uO1xuICB2YXIgZGlyZWN0aW9uO1xuICB2YXIgc2VsZlRvdWNoO1xuICB2YXIgbG9vcHM7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICByb3cgPSBiYXNlUG9zaXRpb24ucm93O1xuICAgIGNvbHVtbiA9IGJhc2VQb3NpdGlvbi5jb2x1bW47XG4gICAgZGlyZWN0aW9uID0gQVRUQUNLX0RJUkVDVElPTlNbaV07XG4gICAgdmFyIGJhc2VEaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgc2VsZlRvdWNoID0gMDtcbiAgICBsb29wcyA9IDA7XG4gICAgdmFyIGJ1aWxkZXJCdWZmZXIgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciBuZXh0ID0gdm9pZCAwO1xuXG4gICAgICB0cnkge1xuICAgICAgICBuZXh0ID0gX3N1cmFrYXJ0YS5QYXRoRmluZGVyLmZpbmRTdGVwKHJvdywgY29sdW1uLCBkaXJlY3Rpb24pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBicmVhazsgLy8gaWxsZWdhbCBhdHRhY2sgcGF0aFxuICAgICAgfVxuXG4gICAgICByb3cgPSBuZXh0WzBdO1xuICAgICAgY29sdW1uID0gbmV4dFsxXTtcbiAgICAgIHZhciBzZWxmID0gZmFsc2U7XG5cbiAgICAgIGlmIChyb3cgPT09IGJhc2VQb3NpdGlvbi5yb3cgJiYgY29sdW1uID09PSBiYXNlUG9zaXRpb24uY29sdW1uKSB7XG4gICAgICAgICsrc2VsZlRvdWNoO1xuXG4gICAgICAgIGlmIChzZWxmVG91Y2ggPiAxKSB7XG4gICAgICAgICAgYnJlYWs7IC8vIHByZXZlbnQgaW5maW5pdGUgbG9vcFxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZiA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGF0ZSA9IHN1cmFrYXJ0YS5zdGF0ZShyb3csIGNvbHVtbik7XG5cbiAgICAgIGlmICghc2VsZiAmJiBzdGF0ZSA9PT0gcGViYmxlKSB7XG4gICAgICAgIGJyZWFrOyAvLyBjYW4ndCBjYXB0dXJlIG91ciBvd24gcGViYmxlXG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0Lmxlbmd0aCA9PT0gMykge1xuICAgICAgICArK2xvb3BzO1xuICAgICAgICBkaXJlY3Rpb24gPSBuZXh0LmRpcmVjdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKGxvb3BzID49IDEpIHtcbiAgICAgICAgYnVpbGRlckJ1ZmZlci5wdXNoKF9kYXRhLk1vdmVIZWxwZXIuYnVpbGRIYW5kbGUoYmFzZVJvdywgYmFzZUNvbHVtbiwgcm93LCBjb2x1bW4sIHRydWUsIGJhc2VEaXJlY3Rpb24pKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlICE9PSBfc3VyYWthcnRhLk5PVF9GSUxMRUQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5kZXgucHVzaC5hcHBseShpbmRleCwgYnVpbGRlckJ1ZmZlcik7XG4gIH1cblxuICByZXR1cm4gaW5kZXg7XG59XG4vKipcbiAqIEluZGV4ZXMgYWxsIHBvc3NpYmxlIG1vdmVzIGZyb20gYSBnaXZlbiBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1NLLlN1cmFrYXJ0YX0gc3VyYWthcnRhIC0gYm9hcmQgc3RhdGUgYmVmb3JlIHRoZSBtb3ZlXG4gKiBAcGFyYW0ge1NLLlBvc2l0aW9ufSBiYXNlUG9zaXRpb24gLSBwb3NpdGlvbiBvZiBwZWJibGUgYmVpbmcgbW92ZWRcbiAqIEBwYXJhbSB7QXJyYXk8TW92ZUhhbmRsZT59IGluZGV4IC0gYnVmZmVyIHRvIGFwcGVuZCBpbnRvXG4gKi9cblxuXG5mdW5jdGlvbiBpbmRleEZyb20oc3VyYWthcnRhLCBiYXNlUG9zaXRpb24sIGluZGV4KSB7XG4gIGluZGV4QXR0YWNrc0Zyb20oc3VyYWthcnRhLCBiYXNlUG9zaXRpb24sIGluZGV4KTtcbiAgaW5kZXhTaW5nbGVTdGVwc0Zyb20oc3VyYWthcnRhLCBiYXNlUG9zaXRpb24sIGluZGV4KTtcbn1cbi8qKlxuICogSW5kZXggYWxsIHBvc3NpYmxlIHNpbmdsZS1zdGVwIG1vdmVzIG9uIHRoZSBnaXZlbiBib2FyZC5cbiAqXG4gKiBAcGFyYW0ge1NLLlN1cmFrYXJ0YX0gc3VyYWthcnRhXG4gKiBAcGFyYW0ge0FycmF5PFNLLmFuYWx5c2lzLk1vdmVIYW5kbGU+fVtpbmRleF1cbiAqIEBwYXJhbSB7QXJyYXk8U0suUG9zaXRpb24+fVtwb3NpdGlvbnNdXG4gKiBAcmV0dXJucyB7QXJyYXk8U0suYW5hbHlzaXMuTW92ZUhhbmRsZT59IGluZGV4XG4gKi9cblxuXG5mdW5jdGlvbiBpbmRleFNpbmdsZVN0ZXBzKHN1cmFrYXJ0YSkge1xuICB2YXIgaW5kZXggPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFtdO1xuICB2YXIgcG9zaXRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBQb3NpdGlvbkRCO1xuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBwb3NpdGlvbnNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIgcG9zID0gX3N0ZXAudmFsdWU7XG4gICAgICBpbmRleFNpbmdsZVN0ZXBzRnJvbShzdXJha2FydGEsIHBvcywgaW5kZXgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yW1wicmV0dXJuXCJdICE9IG51bGwpIHtcbiAgICAgICAgX2l0ZXJhdG9yW1wicmV0dXJuXCJdKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5kZXg7XG59XG4vKipcbiAqIEluZGV4IGFsbCBwb3NzaWJsZSBhdHRhY2tzIG9uIHRoZSBnaXZlbiBib2FyZC5cbiAqXG4gKiBAcGFyYW0ge1NLLlN1cmFrYXJ0YX0gc3VyYWthcnRhXG4gKiBAcGFyYW0ge0FycmF5PFNLLmFuYWx5c2lzLk1vdmVIYW5kbGU+fVtpbmRleF1cbiAqIEBwYXJhbSB7QXJyYXk8U0suUG9zaXRpb24+fVtwb3NpdGlvbnNdXG4gKiBAcmV0dXJucyB7QXJyYXk8U0suYW5hbHlzaXMuTW92ZUhhbmRsZT59IGluZGV4XG4gKi9cblxuXG5mdW5jdGlvbiBpbmRleEF0dGFja3Moc3VyYWthcnRhKSB7XG4gIHZhciBpbmRleCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogW107XG4gIHZhciBwb3NpdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFBvc2l0aW9uREI7XG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgdmFyIF9pdGVyYXRvckVycm9yMiA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBwb3NpdGlvbnNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcbiAgICAgIHZhciBwb3MgPSBfc3RlcDIudmFsdWU7XG4gICAgICBpbmRleEF0dGFja3NGcm9tKHN1cmFrYXJ0YSwgcG9zLCBpbmRleCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvcjIgPSB0cnVlO1xuICAgIF9pdGVyYXRvckVycm9yMiA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiAmJiBfaXRlcmF0b3IyW1wicmV0dXJuXCJdICE9IG51bGwpIHtcbiAgICAgICAgX2l0ZXJhdG9yMltcInJldHVyblwiXSgpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5kZXg7XG59XG4vKipcbiAqIEluZGV4ZXMgYWxsIHBvc3NpYmxlIG1vdmVzIGZvciBhIG5vZGUuXG4gKlxuICogQHBhcmFtIHtTSy5TdXJha2FydGF9IHN1cmFrYXJ0YSAtIG5vZGUgdG8gZXhwbG9yZVxuICogQHBhcmFtIHtBcnJheTxTSy5hbmFseXNpcy5Nb3ZlSGFuZGxlPn1baW5kZXg9W11dIC0gYnVmZmVyIHRvIGFwcGVuZCB0b1xuICogQHBhcmFtIHtBcnJheTxTSy5Qb3NpdGlvbj59W3Bvc2l0aW9uc10gLSBpbmRleCBtb3ZlcyBvbmx5IGZyb20gdGhlIGdpdmVuIHBvc2l0aW9uc1xuICovXG5cblxuZnVuY3Rpb24gaW5kZXgoc3VyYWthcnRhKSB7XG4gIHZhciBpbmRleCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogW107XG4gIHZhciBwb3NpdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgaW5kZXhBdHRhY2tzKHN1cmFrYXJ0YSwgaW5kZXgsIHBvc2l0aW9ucyk7XG4gIGluZGV4U2luZ2xlU3RlcHMoc3VyYWthcnRhLCBpbmRleCwgcG9zaXRpb25zKTtcbiAgcmV0dXJuIGluZGV4O1xufVxuXG52YXIgSW5kZXhlciA9IHtcbiAgaW5kZXg6IGluZGV4LFxuICBpbmRleFNpbmdsZVN0ZXBzOiBpbmRleFNpbmdsZVN0ZXBzLFxuICBpbmRleEF0dGFja3M6IGluZGV4QXR0YWNrcyxcbiAgaW5kZXhTaW5nbGVTdGVwc0Zyb206IGluZGV4U2luZ2xlU3RlcHNGcm9tLFxuICBpbmRleEF0dGFja3NGcm9tOiBpbmRleEF0dGFja3NGcm9tXG59O1xuZXhwb3J0cy5JbmRleGVyID0gSW5kZXhlcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc29ydEluZGV4ID0gc29ydEluZGV4O1xuXG52YXIgX3N1cmFrYXJ0YSA9IHJlcXVpcmUoXCJzdXJha2FydGFcIik7XG5cbnZhciBfZXZhbHVhdGUgPSByZXF1aXJlKFwiLi9ldmFsdWF0ZVwiKTtcblxudmFyIF9kYXRhID0gcmVxdWlyZShcIi4vZGF0YVwiKTtcblxuLyoqXG4gKiBTb3J0cyB0aGUgaW5kZXggb2YgbW92ZXMgaW4tcGxhY2UgYnkgYW4gYXBwcm94aW1hdGlvbiBvZiBob3cgXCJnb29kXCIgdGhleVxuICogYXJlIHdoZW4gdXNlZCBvbiB0aGUgZ2l2ZW4gbm9kZS5cbiAqXG4gKiBAcGFyYW0ge1NLLlN1cmFrYXJ0YX0gbm9kZSAtIG5vZGUgb24gd2hpY2ggbW92ZXMgYXJlIHRvIGJlIHBsYXllZFxuICogQHBhcmFtIHtTSy5hbmFseXNpcy5Nb3ZlSGFuZGxlW119IGluZGV4IC0gaW5kZXggb2YgbW92ZXMgKGluIGhhbmRsZSBmb3JtYXQpXG4gKiBAcmV0dXJucyB7U0suYW5hbHlzaXMuTW92ZUhhbmRsZXBbXX0gLSB0aGUgc2FtZSBpbmRleCwgc29ydGVkXG4gKi9cbmZ1bmN0aW9uIHNvcnRJbmRleChub2RlLCBpbmRleCkge1xuICB2YXIgZGVlcE5vZGUgPSBub2RlLmNsb25lKCk7XG4gIHZhciBtb3ZlID0gbmV3IF9zdXJha2FydGEuTW92ZSgpO1xuICB2YXIgZXZhbENvZWYgPSAyICogbm9kZS50dXJuIC0gMTsgLy8gZmxpcCBldmFsdWF0aW9ucyBmb3IgYmxhY2sgcGxheWVyXG4gIC8vIE1hcCBlYWNoIGhhbmRsZSB0byBvbmUgd2l0aCBpdHMgZXZhbHVhdGlvblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW5kZXgubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaGFuZGxlID0gaW5kZXhbaV07XG4gICAgZGVlcE5vZGUuY29weUZyb20obm9kZSk7XG4gICAgZGVlcE5vZGUudHVybiA9IG5vZGUudHVybjtcblxuICAgIF9kYXRhLk1vdmVIZWxwZXIuaW5mbGF0ZUhhbmRsZShoYW5kbGUsIG1vdmUpO1xuXG4gICAgZGVlcE5vZGUuc3RlcChtb3ZlLnNyY1JvdywgbW92ZS5zcmNDb2x1bW4sIG1vdmUuZHN0Um93LCBtb3ZlLmRzdENvbHVtbiwgdHJ1ZSwgbW92ZS5pc0F0dGFjayk7XG4gICAgaW5kZXhbaV0gPSBfZGF0YS5Nb3ZlSGVscGVyLnN0b3JlSW5Sb29tKGhhbmRsZSwgZXZhbENvZWYgKiBNYXRoLm1heChNYXRoLm1pbigyMDQ3LCAoMCwgX2V2YWx1YXRlLmV2YWx1YXRlKShkZWVwTm9kZSkpLCAtMjA0NykpO1xuICB9IC8vIFNvcnQgbWFraW5nIGhpZ2hlc3QgZXZhbHVhdGlvbnMgdG8gZnJvbnRcblxuXG4gIGluZGV4LnNvcnQoZnVuY3Rpb24gKGhhbmRsZTAsIGhhbmRsZTEpIHtcbiAgICByZXR1cm4gX2RhdGEuTW92ZUhlbHBlci5pbmZsYXRlUm9vbShoYW5kbGUwKSAtIF9kYXRhLk1vdmVIZWxwZXIuaW5mbGF0ZVJvb20oaGFuZGxlMSk7XG4gIH0pO1xuICByZXR1cm4gaW5kZXg7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO2V4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5Nb3ZlID0gdm9pZCAwO2Z1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge3Rocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7fX1mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7Zm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge3ZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07ZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO2Rlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTt9fWZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7cmV0dXJuIENvbnN0cnVjdG9yO31mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7aWYgKGtleSBpbiBvYmopIHtPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO30gZWxzZSB7b2JqW2tleV0gPSB2YWx1ZTt9cmV0dXJuIG9iajt9XG5cbi8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogUmVwcmVzZW50cyBhIG1vdmUgdGhhdCBjYW4gYmUgbWFkZSBpbiBTdXJha2FydGEuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi92YXJcbk1vdmUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuXG5cblxuXG5cblxuXG4gIGZ1bmN0aW9uIE1vdmUoKVxuXG5cblxuXG5cblxuICB7dmFyIHNyY1JvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDt2YXIgc3JjQ29sdW1uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO3ZhciBkc3RSb3cgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDA7dmFyIGRzdENvbHVtbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMDt2YXIgaXNBdHRhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IGZhbHNlO3ZhciBkaXJlY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gNSAmJiBhcmd1bWVudHNbNV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s1XSA6IC0xO19jbGFzc0NhbGxDaGVjayh0aGlzLCBNb3ZlKTtfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzcmNSb3dcIiwgdm9pZCAwKTtfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzcmNDb2x1bW5cIiwgdm9pZCAwKTtfZGVmaW5lUHJvcGVydHkodGhpcywgXCJkc3RSb3dcIiwgdm9pZCAwKTtfZGVmaW5lUHJvcGVydHkodGhpcywgXCJkc3RDb2x1bW5cIiwgdm9pZCAwKTtfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpc0F0dGFja1wiLCB2b2lkIDApO19kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImRpcmVjdGlvblwiLCB2b2lkIDApO1xuICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBSb3cgb2Ygc291cmNlL3N0YXJ0aW5nIHBvc2l0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgIHRoaXMuc3JjUm93ID0gc3JjUm93O1xuXG4gICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqIENvbHVtbiBvZiBzb3VyY2Uvc3RhcnRpbmcgcG9zaXRpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgdGhpcy5zcmNDb2x1bW4gPSBzcmNDb2x1bW47XG5cbiAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogUm93IG9mIGRlc3RpbmF0aW9uL2ZpbmFsIHBvc2l0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgIHRoaXMuZHN0Um93ID0gZHN0Um93O1xuXG4gICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqIENvbHVtbiBvZiBkZXN0aW5hdGlvbi9maW5hbCBwb3NpdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICB0aGlzLmRzdENvbHVtbiA9IGRzdENvbHVtbjtcblxuICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIHRoaXMgbW92ZSBpcyBhbiBhdHRhY2sgKG5lZWQgbm90IGJlIGEgY2FwdHVyZSkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgIHRoaXMuaXNBdHRhY2sgPSBpc0F0dGFjaztcblxuICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogU3RhcnRpbmcgZGlyZWN0aW9uLCBpZiBhdHRhY2sgbW92ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1lbWJlciB7RGlyZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gIH1fY3JlYXRlQ2xhc3MoTW92ZSwgW3sga2V5OiBcIm1ha2VBdHRhY2tcIiwgdmFsdWU6IGZ1bmN0aW9uIG1ha2VBdHRhY2soXG5cbiAgICBkaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMuaXNBdHRhY2sgPSB0cnVlO1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93XG4gICAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uXG4gICAgICAgKi8gfSwgeyBrZXk6IFwic2V0U291cmNlXCIsIHZhbHVlOiBmdW5jdGlvbiBzZXRTb3VyY2UoXG4gICAgcm93LCBjb2x1bW4pIHtcbiAgICAgIHRoaXMuc3JjUm93ID0gcm93O1xuICAgICAgdGhpcy5zcmNDb2x1bW4gPSBjb2x1bW47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93XG4gICAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uXG4gICAgICAgKi8gfSwgeyBrZXk6IFwic2V0RGVzdGluYXRpb25cIiwgdmFsdWU6IGZ1bmN0aW9uIHNldERlc3RpbmF0aW9uKFxuICAgIHJvdywgY29sdW1uKSB7XG4gICAgICB0aGlzLmRzdFJvdyA9IHJvdztcbiAgICAgIHRoaXMuZHN0Q29sdW1uID0gY29sdW1uO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgKiBHZW5lcmF0ZSBhbiBleGFjdCBjb3B5IG9mIHRoaXMgbW92ZS5cbiAgICAgICAqIEByZXR1cm5zIHtNb3ZlfVxuICAgICAgICovIH0sIHsga2V5OiBcImNsb25lXCIsIHZhbHVlOiBmdW5jdGlvbiBjbG9uZSgpXG4gICAge1xuICAgICAgcmV0dXJuIE1vdmUucG9zdFRocmVhZEJvdW5kYXJ5KHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICogUmVwYWlycyBhIHtAY29kZSBNb3ZlfSBvYmplY3QgYWZ0ZXIgaXQgaGFzIGJlZW4gY29waWVkIHRocm91Z2ggYVxuICAgICAgICogd2ViLXdvcmtlciBib3VuZGFyeS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge01vdmV9IG1vdmVcbiAgICAgICAqLyB9XSwgW3sga2V5OiBcInBvc3RUaHJlYWRCb3VuZGFyeVwiLCB2YWx1ZTogZnVuY3Rpb24gcG9zdFRocmVhZEJvdW5kYXJ5KFxuICAgIG1vdmUpIHtcbiAgICAgIHZhciBjbW92ZSA9IG5ldyBNb3ZlKCk7XG5cbiAgICAgIGNtb3ZlLnNyY1JvdyA9IG1vdmUuc3JjUm93O1xuICAgICAgY21vdmUuc3JjQ29sdW1uID0gbW92ZS5zcmNDb2x1bW47XG4gICAgICBjbW92ZS5kc3RSb3cgPSBtb3ZlLmRzdFJvdztcbiAgICAgIGNtb3ZlLmRzdENvbHVtbiA9IG1vdmUuZHN0Q29sdW1uO1xuICAgICAgY21vdmUuaXNBdHRhY2sgPSBtb3ZlLmlzQXR0YWNrO1xuICAgICAgY21vdmUuZGlyZWN0aW9uID0gbW92ZS5kaXJlY3Rpb247XG5cbiAgICAgIHJldHVybiBjbW92ZTtcbiAgICB9IH1dKTtyZXR1cm4gTW92ZTt9KCk7ZXhwb3J0cy5Nb3ZlID0gTW92ZTt2YXIgX2RlZmF1bHQgPVxuXG5cbk1vdmU7ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLlBsYXllclN0YXRzID0gdm9pZCAwO2Z1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge3Rocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7fX0gLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEhvbGRzIHN0YXRpc3RpY2FsIGluZm9ybWF0aW9uIGFib3V0IGEgcGxheWVyIHBsYXlpbmcgU3VyYWthcnRhLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi92YXJcblBsYXllclN0YXRzID1cbmZ1bmN0aW9uIFBsYXllclN0YXRzKCkge19jbGFzc0NhbGxDaGVjayh0aGlzLCBQbGF5ZXJTdGF0cyk7XG4gIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1lbWJlciB7bnVtYmVyfSBwZWJibGVzIC0gbm8uIG9mIHBlYmJsZXMgbGl2ZSBmb3IgdGhpcyBwbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICB0aGlzLnBlYmJsZXMgPSAwO1xufTtleHBvcnRzLlBsYXllclN0YXRzID0gUGxheWVyU3RhdHM7dmFyIF9kZWZhdWx0ID1cblxuXG5QbGF5ZXJTdGF0cztleHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtleHBvcnRzLlBvc2l0aW9uID0gdm9pZCAwO2Z1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge3Rocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7fX1mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7Zm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge3ZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07ZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO2Rlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTt9fWZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7cmV0dXJuIENvbnN0cnVjdG9yO30gLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBuYW1lc3BhY2UgU0tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL3ZhclxuUG9zaXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQb3NpdGlvbigpIHt2YXIgcm93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO3ZhciBjb2wgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvc2l0aW9uKTtcbiAgICB0aGlzLnNldChyb3csIGNvbCk7XG4gIH1fY3JlYXRlQ2xhc3MoUG9zaXRpb24sIFt7IGtleTogXCJzZXRcIiwgdmFsdWU6IGZ1bmN0aW9uIHNldChcblxuICAgIHJvdywgY29sKSB7XG4gICAgICAvKiogQG1lbWJlciB7bnVtYmVyfSAqL1xuICAgICAgdGhpcy5yb3cgPSByb3c7XG5cbiAgICAgIC8qKiBAbWVtYmVyIHtudW1iZXJ9ICovXG4gICAgICB0aGlzLmNvbHVtbiA9IGNvbDtcbiAgICB9IH0sIHsga2V5OiBcImluZGV4XCIsIHZhbHVlOiBmdW5jdGlvbiBpbmRleCgpXG5cbiAgICB7XG4gICAgICByZXR1cm4gdGhpcy5yb3cgKiA2ICsgdGhpcy5jb2x1bW47XG4gICAgfSB9XSwgW3sga2V5OiBcImZyb21cIiwgdmFsdWU6IGZ1bmN0aW9uIGZyb20oXG5cbiAgICBpbmRleCkge1xuICAgICAgcmV0dXJuIG5ldyBQb3NpdGlvbihNYXRoLmZsb29yKGluZGV4IC8gNiksIGluZGV4ICUgNik7XG4gICAgfSB9XSk7cmV0dXJuIFBvc2l0aW9uO30oKTtleHBvcnRzLlBvc2l0aW9uID0gUG9zaXRpb247IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO2V4cG9ydHMuU3VyYWthcnRhID0gZXhwb3J0cy5CTEFDS19QTEFZRVIgPSBleHBvcnRzLlJFRF9QTEFZRVIgPSBleHBvcnRzLk5PVF9GSUxMRUQgPSB2b2lkIDA7dmFyIF9ldmVudGVtaXR0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJldmVudGVtaXR0ZXIzXCIpKTtcbnZhciBfdHJhdmVyc2VVdGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3RyYXZlcnNlLXV0aWxzXCIpKTtcblxuXG5cblxuXG5cblxudmFyIF9QbGF5ZXJTdGF0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vUGxheWVyU3RhdHNcIikpO1xudmFyIF9zdGVwVXRpbHMgPSByZXF1aXJlKFwiLi9zdGVwLXV0aWxzXCIpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7dmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7cmV0dXJuIG9iajt9aWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7cmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9O312YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmogPSB7fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yICh2YXIga2V5IGluIG9iaikge2lmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7dmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7aWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7fSBlbHNlIHtuZXdPYmpba2V5XSA9IG9ialtrZXldO319fW5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7aWYgKGNhY2hlKSB7Y2FjaGUuc2V0KG9iaiwgbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtyZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07fWZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7aWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7X3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7cmV0dXJuIHR5cGVvZiBvYmo7fTt9IGVsc2Uge190eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge3JldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO307fXJldHVybiBfdHlwZW9mKG9iaik7fWZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge3Rocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7fX1mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7Zm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge3ZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07ZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO2Rlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTt9fWZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7cmV0dXJuIENvbnN0cnVjdG9yO31mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7aWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtyZXR1cm4gY2FsbDt9cmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7fWZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge2lmIChzZWxmID09PSB2b2lkIDApIHt0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7fXJldHVybiBzZWxmO31mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge19nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7cmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTt9O3JldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7fWZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge2lmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHt0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7fXN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTtpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTt9ZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtvLl9fcHJvdG9fXyA9IHA7cmV0dXJuIG87fTtyZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO31cblxudmFyIE5PVF9GSUxMRUQgPSAtMTtleHBvcnRzLk5PVF9GSUxMRUQgPSBOT1RfRklMTEVEO1xudmFyIFJFRF9QTEFZRVIgPSAwOyAvLyBzdGFydGluZyBwbGF5ZXJcbmV4cG9ydHMuUkVEX1BMQVlFUiA9IFJFRF9QTEFZRVI7dmFyIEJMQUNLX1BMQVlFUiA9IDE7IC8vIG90aGVyIHBsYXllclxuXG4vKipcbiAqIEhhbmRsZSB0aGUgc3RhdGUgb2YgYW4gYWN0dWFsIFN1cmFrYXJ0YSBnYW1lLlxuICovZXhwb3J0cy5CTEFDS19QTEFZRVIgPSBCTEFDS19QTEFZRVI7dmFyXG5TdXJha2FydGEgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9FdmVudEVtaXR0ZXIpIHtfaW5oZXJpdHMoU3VyYWthcnRhLCBfRXZlbnRFbWl0dGVyKTtcbiAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQ29uc3RydWN0cyBhIFN1cmFrYXJ0YSBib2FyZCBzdGF0ZSB3aXRoIHRoZSBwZWJibGVzIGluIHRoZWlyIGluaXRpYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBwb3NpdGlvbnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBbbm9Jbml0PWZhbHNlXSAtIHdoZXRoZXIgbm90IHRvIGluaXRpYWxpemUgdGhlIGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gIGZ1bmN0aW9uIFN1cmFrYXJ0YSgpIHt2YXIgX3RoaXM7dmFyIG5vSW5pdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN1cmFrYXJ0YSk7XG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoU3VyYWthcnRhKS5jYWxsKHRoaXMpKTtcblxuICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFN0YXRlcyBvZiBlYWNoIHBlYmJsZSBwb3NpdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbWVtYmVyIHtBcnJheTxudW1iZXI+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgIF90aGlzLnN0YXRlcyA9IG5ldyBBcnJheSgzNik7XG5cbiAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBOby4gb2YgbW92ZXMgZG9uZSBhbHJlYWR5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICBfdGhpcy50dXJuID0gMDtcblxuICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBSZXNwb25kZXJzIHRoYXQgYXJlIGludm9rZWQgb24gdGhlIHR1cm5zIG9mIHRoZSByZWQgJlxuICAgICAgICAgICAgICAgICAgICAgKiBibGFjayBwbGF5ZXJzLCBhbmQgdGhlbiBvbiBib3RoLiBCb3RoIHR5cGUgcmVzcG9uZGVycyBhcmUgbm90aWZpZWRcbiAgICAgICAgICAgICAgICAgICAgICogZmlyc3QuXG4gICAgICAgICAgICAgICAgICAgICAqIEBtZW1iZXIge0FycmF5PEFycmF5PFN1cmFrYXJ0YVJlc3BvbmRlcj4+fVxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICBfdGhpcy5yZXNwb25kZXJzID0gW1tdLCBbXSwgW11dO1xuXG4gICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogU3RhdHMgZm9yIHRoZSByZWQgJiBibGFjayBwbGF5ZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1lbWJlciB7eyByZWQ6IFBsYXllclN0YXRzLCBibGFjazogUGxheWVyU3RhdHMgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICBfdGhpcy5wbGF5ZXJTdGF0cyA9IHtcbiAgICAgIHJlZDogbmV3IF9QbGF5ZXJTdGF0c1tcImRlZmF1bHRcIl0oKSxcbiAgICAgIGJsYWNrOiBuZXcgX1BsYXllclN0YXRzW1wiZGVmYXVsdFwiXSgpIH07XG5cblxuICAgIGlmICghbm9Jbml0KSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgX3RoaXMuc3RhdGVzW2ldID0gUkVEX1BMQVlFUjtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIF9pID0gMTI7IF9pIDwgMjQ7IF9pKyspIHtcbiAgICAgICAgX3RoaXMuc3RhdGVzW19pXSA9IE5PVF9GSUxMRUQ7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBfaTIgPSAyNDsgX2kyIDwgMzY7IF9pMisrKSB7XG4gICAgICAgIF90aGlzLnN0YXRlc1tfaTJdID0gQkxBQ0tfUExBWUVSO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5wbGF5ZXJTdGF0cy5yZWQucGViYmxlcyA9IDEyO1xuICAgICAgX3RoaXMucGxheWVyU3RhdHMuYmxhY2sucGViYmxlcyA9IDEyO1xuICAgIH1yZXR1cm4gX3RoaXM7XG4gIH1cblxuICAvKipcbiAgICAgKiBJbmRleCBvZiBhIHBvc2l0aW9uIGluIHtAY29kZSB0aGlzLnN0YXRlc31cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtblxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovX2NyZWF0ZUNsYXNzKFN1cmFrYXJ0YSwgW3sga2V5OiBcImluZGV4T2ZcIiwgdmFsdWU6IGZ1bmN0aW9uIGluZGV4T2YoXG4gICAgciwgYykge1xuICAgICAgcmV0dXJuIHIgKiA2ICsgYztcbiAgICB9IH0sIHsga2V5OiBcInN0YXRlXCIsIHZhbHVlOiBmdW5jdGlvbiBzdGF0ZShcblxuICAgIHJvdywgY29sdW1uKSB7XG4gICAgICBpZiAocm93IDwgMCB8fCBjb2x1bW4gPCAwIHx8IHJvdyA+PSA2IHx8IGNvbHVtbiA+PSA2KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZXNbcm93ICogNiArIGNvbHVtbl07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgKiBUaGUgcGxheWVyIHdob3NlIHR1cm4gaXQgaXMgY3VycmVudGx5LlxuICAgICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAgICovIH0sIHsga2V5OiBcInN0ZXBcIixcblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogUGVyZm9ybSBhIHNpbXBsZSBtb3ZlIG9uIHRoZSBib2FyZC4gT25seSB2YWxpZGF0aW9uIHRoYXQgb2NjdXJzIGlzIGlmIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGRlc3RpbmF0aW9uIGlzIGFscmVhZHkgZmlsbGVkIG9yIGlmIGl0IGlzbid0IHRoZSBwZWJibGUncyB0dXJuLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogX0lmIHRoZSBnYW1lIGlzIGZpbmlzaGVkIGR1ZSB0byB0aGlzIG1vdmVfOiBUaGUgcmVzcG9uZGVycyB3aWxsIG5vdCBiZSBub3RpZmllZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiByYXRoZXIgdGhlICdnYW1lb3ZlcicgZXZlbnQgaXMgZW1pdHRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBycyAtIGluaXRpYWwgcG9zaXRpb24gcm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNzIC0gaW50aWFsIHBvc2l0aW9uIGNvbHVtblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByZCAtIGZpbmFsIHBvc2l0aW9uIHJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjZCAtIGZpbmFsIHBvc2l0aW9uIGNvbHVtblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW25vUmVzcG9uZD1mYWxzZV0gLSB3aGV0aGVyIG5vdCB0byBjb25zaWRlciB0aGlzIGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiAgdHVybmluZyBtb3ZlLCBlLmcuIGluY3JlbWVudCB0aGUgY3VycmVudCB0dXJuLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gY2FwdHVyZSAtIGlzIHRoaXMgYSBjYXB0dXJlIG1vdmU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHRocm93cyBpZiBkZXN0aW5hdGlvbiBpcyBhbHJlYWR5IGZpbGxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL3ZhbHVlOiBmdW5jdGlvbiBzdGVwKFxuICAgIHJzLCBjcywgcmQsIGNkKSB7dmFyIG5vUmVzcG9uZCA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogZmFsc2U7dmFyIGNhcHR1cmUgPSBhcmd1bWVudHMubGVuZ3RoID4gNSAmJiBhcmd1bWVudHNbNV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s1XSA6IGZhbHNlO1xuICAgICAgdmFyIGlzID0gdGhpcy5pbmRleE9mKHJzLCBjcyk7XG4gICAgICB2YXIgaWQgPSB0aGlzLmluZGV4T2YocmQsIGNkKTtcblxuICAgICAgaWYgKHRoaXMuc3RhdGVzW2lzXSAhPT0gdGhpcy50dXJuUGxheWVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCB0dXJuaW5nIHBsYXllciBwZWJibGVcIik7XG4gICAgICB9XG4gICAgICBpZiAoIWNhcHR1cmUgJiYgdGhpcy5zdGF0ZXNbaWRdICE9PSBOT1RfRklMTEVEKSB7XG4gICAgICAgIC8vIGNhcHR1cmUgaXMgdXNlZCBpbnRlcm5hbGx5XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJDYW5ub3Qgc3RlcCBpbnRvIGRlc3RpbmF0aW9uIHNpbmNlIGl0IGlzIGFscmVhZHkgZmlsbGVkXCIpO1xuXG4gICAgICB9XG5cbiAgICAgIGNhcHR1cmUgPSB0aGlzLnN0YXRlc1tpZF0gIT09IE5PVF9GSUxMRUQ7XG5cbiAgICAgIHRoaXMuc3RhdGVzW2lkXSA9IHRoaXMuc3RhdGVzW2lzXTtcbiAgICAgIHRoaXMuc3RhdGVzW2lzXSA9IE5PVF9GSUxMRUQ7XG5cbiAgICAgIGlmICghbm9SZXNwb25kKSB7XG4gICAgICAgIHZhciBjb2xvcjtcblxuICAgICAgICBpZiAoY2FwdHVyZSkge1xuICAgICAgICAgIGNvbG9yID0gdGhpcy50dXJuUGxheWVyQ29sb3I7XG4gICAgICAgICAgLS10aGlzLnBsYXllclN0YXRzW2NvbG9yXS5wZWJibGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhcHR1cmUgJiYgdGhpcy5wbGF5ZXJTdGF0c1tjb2xvcl0ucGViYmxlcyA8PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbWl0KFwiZ2FtZW92ZXJcIiwgY29sb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudHVybisrO1xuICAgICAgICAgIHRoaXMuX25vdGlmeVJlc3BvbmRlcnNPblR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAgICogV3JhcHBlciBhcm91bmQgYHN0ZXBgIHRoYXQgdmFsaWRhdGVzIHRoZSBzdGVwIHVzaW5nIGB2YWxpZGF0ZVN0ZXBgLlxuICAgICAgICovIH0sIHsga2V5OiBcInNhZmVTdGVwXCIsIHZhbHVlOiBmdW5jdGlvbiBzYWZlU3RlcChcbiAgICBycywgY3MsIHJkLCBjZCkge3ZhciBub1Jlc3BvbmQgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IGZhbHNlO1xuICAgICAgaWYgKCgwLCBfc3RlcFV0aWxzLnZhbGlkYXRlU3RlcCkocnMsIGNzLCByZCwgY2QpKSB7XG4gICAgICAgIHRoaXMuc3RlcChycywgY3MsIHJkLCBjZCwgbm9SZXNwb25kKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgKiBQZXJmb3JtIGFuIGF0dGFjayBtb3ZlXG4gICAgICAgKiBAcGFyYW0ge251bWJlcn0gciAtIHN0YXJ0aW5nIHJvd1xuICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGMgLSBzdGFydGluZyBjb2xcbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkaXIgLSBkaXJlY3Rpb24gb2YgdHJhdmVyc2luZ1xuICAgICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBjdXQgLSBwcmVmZXJyZWQgZW5kaW5nIHBvc2l0aW9uXG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzYXZlU3RlcHM9dHJ1ZV0gLSByZXR1cm5zIHRoZSBpbnRlcm1lZGlhdGUgc3RlcHMgb2YgdGhlIG1vdmVcbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3BlcmZvcm09dHJ1ZV0gLSB3aGV0aGVyIHRvIGFjdHVhbCBwZXJmb3JtIHRoZSBtb3ZlXG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtub1Jlc3BvbmQ9ZmFsc2VdIC0gd2hldGhlciB0byBub3QgY29uc2lkZXIgdGhpcyBcIm1vdmVcIiBmb3IgdGhlIHR1cm5cbiAgICAgICAqLyB9LCB7IGtleTogXCJ0cmF2ZXJzZVwiLCB2YWx1ZTogZnVuY3Rpb24gdHJhdmVyc2UoXG5cbiAgICByLFxuICAgIGMsXG4gICAgZGlyLFxuICAgIGN1dClcblxuXG5cbiAgICB7dmFyIHNhdmVTdGVwcyA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogdHJ1ZTt2YXIgcGVyZm9ybSA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDogdHJ1ZTt2YXIgbm9SZXNwb25kID0gYXJndW1lbnRzLmxlbmd0aCA+IDYgJiYgYXJndW1lbnRzWzZdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNl0gOiBmYWxzZTtcbiAgICAgIGlmIChcbiAgICAgIF90cmF2ZXJzZVV0aWxzLkRpcmVjdGlvbnMuaXNIb3Jpem9udGFsKGRpcikgJiYgKHIgPT09IDAgfHwgciA9PT0gNSkgfHxcbiAgICAgIF90cmF2ZXJzZVV0aWxzLkRpcmVjdGlvbnMuaXNWZXJ0aWNhbChkaXIpICYmIChjID09PSAwIHx8IGMgPT09IDUpKVxuICAgICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQoXG4gICAgICAgIHIpLmNvbmNhdChjLCBcIiBjYW5ub3QgYmUgbG9vcGVkIGluIGRpcmVjdGlvbiBcIikuY29uY2F0KGRpciwgXCIsIGVuZHMgYXQgY29ybmVyXCIpKTtcblxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGVzW3RoaXMuaW5kZXhPZihyLCBjKV0gIT09IHRoaXMudHVyblBsYXllcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgdHVybmluZyBwbGF5ZXIncyBwZWJibGVcIik7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGVwcyA9ICgwLCBfdHJhdmVyc2VVdGlscy5maW5kUGF0aCkodGhpcywgciwgYywgZGlyLCBjdXQsICFzYXZlU3RlcHMgJiYgIXBlcmZvcm0pO1xuXG4gICAgICBpZiAocGVyZm9ybSkge1xuICAgICAgICB2YXIgbGFzdFBvc2l0aW9uID0gc3RlcHNbc3RlcHMubGVuZ3RoIC0gMV07XG4gICAgICAgIHRoaXMuc3RlcChyLCBjLCBsYXN0UG9zaXRpb24ucm93LCBsYXN0UG9zaXRpb24uY29sdW1uLCBub1Jlc3BvbmQsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RlcHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgKiBJdGVyYXRlIG92ZXIgYWxsIHBvc2l0aW9ucyB3aXRoIGEgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyB0aHJlZSBhcmd1bWVudHM6XG4gICAgICAgKiAxLiBQZWJibGUgc3RhdGVcbiAgICAgICAqIDIuIFJvd1xuICAgICAgICogMy4gQ29sdW1uXG4gICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICovIH0sIHsga2V5OiBcImZvckVhY2hcIiwgdmFsdWU6IGZ1bmN0aW9uIGZvckVhY2goXG4gICAgY2FsbGJhY2spIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCByID0gMDsgciA8IDY7IHIrKykge1xuICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IDY7IGMrKywgaSsrKSB7XG4gICAgICAgICAgY2FsbGJhY2sodGhpcy5zdGF0ZXNbaV0sIHIsIGMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSB9LCB7IGtleTogXCJjb3B5VG9cIiwgdmFsdWU6IGZ1bmN0aW9uIGNvcHlUbyhcblxuICAgIHN1cmFrYXJ0YSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzNjsgaSsrKSB7XG4gICAgICAgIHN1cmFrYXJ0YS5zdGF0ZXNbaV0gPSB0aGlzLnN0YXRlc1tpXTtcbiAgICAgIH1cbiAgICB9IH0sIHsga2V5OiBcImNvcHlGcm9tXCIsIHZhbHVlOiBmdW5jdGlvbiBjb3B5RnJvbShcblxuICAgIHN1cmFrYXJ0YSkge1xuICAgICAgc3VyYWthcnRhLmNvcHlUbyh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAqIENsb25lIHRoaXMgaW5zdGFuY2Ugd2l0aG91dCB0aGUgcmVzcG9uZGVycy5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7U3VyYWthcnRhfVxuICAgICAgICovIH0sIHsga2V5OiBcImNsb25lXCIsIHZhbHVlOiBmdW5jdGlvbiBjbG9uZSgpXG4gICAge1xuICAgICAgdmFyIGNsb25lZFN0YXRlID0gbmV3IFN1cmFrYXJ0YSh0cnVlKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzNjsgaSsrKSB7XG4gICAgICAgIGNsb25lZFN0YXRlLnN0YXRlc1tpXSA9IHRoaXMuc3RhdGVzW2ldO1xuICAgICAgfVxuXG4gICAgICBjbG9uZWRTdGF0ZS50dXJuID0gdGhpcy50dXJuO1xuICAgICAgcmV0dXJuIGNsb25lZFN0YXRlO1xuICAgIH1cblxuICAgIC8qKiAgQHByaXZhdGUgKi8gfSwgeyBrZXk6IFwiX25vdGlmeVJlc3BvbmRlcnNPblR1cm5cIiwgdmFsdWU6IGZ1bmN0aW9uIF9ub3RpZnlSZXNwb25kZXJzT25UdXJuKClcbiAgICB7XG4gICAgICB0aGlzLnJlc3BvbmRlcnNbMl0uZm9yRWFjaChmdW5jdGlvbiAocmVzcG9uZGVyKSB7cmV0dXJuIHJlc3BvbmRlci5vblR1cm4oKTt9KTtcbiAgICAgIHRoaXMucmVzcG9uZGVyc1t0aGlzLnR1cm5QbGF5ZXJdLmZvckVhY2goZnVuY3Rpb24gKHJlc3BvbmRlcikge3JldHVybiByZXNwb25kZXIub25UdXJuKCk7fSk7XG4gICAgfSB9LCB7IGtleTogXCJ0dXJuUGxheWVyXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiB0aGlzLnR1cm4gJSAyO30gLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtZW1iZXIgeydyZWQnIHwgJ2JsYWNrJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovIH0sIHsga2V5OiBcInR1cm5QbGF5ZXJDb2xvclwiLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gdGhpcy50dXJuUGxheWVyID09PSAwID8gXCJyZWRcIiA6IFwiYmxhY2tcIjt9IH1dKTtyZXR1cm4gU3VyYWthcnRhO30oX2V2ZW50ZW1pdHRlcltcImRlZmF1bHRcIl0pO1xuLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEdlbmVyYXRlIGEgYFN1cmFrYXJ0YWAgaW5zdGFuY2Ugd2l0aCBhIHByZWRlZmluZWQgbGF5b3V0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXk8aW50Pn0gc3RhdGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEByZXR1cm5zIHtTdXJha2FydGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL2V4cG9ydHMuU3VyYWthcnRhID0gU3VyYWthcnRhO1xuU3VyYWthcnRhLmZyb21TdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZXMpIHtcbiAgdmFyIGluc3RhbmNlID0gbmV3IFN1cmFrYXJ0YSh0cnVlKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDM2OyBpKyspIHtcbiAgICBpbnN0YW5jZS5zdGF0ZXNbaV0gPSBzdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGVzW2ldID09PSBSRURfUExBWUVSKSB7XG4gICAgICArK2luc3RhbmNlLnBsYXllclN0YXRzLnJlZC5wZWJibGVzO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVzW2ldID09PSBCTEFDS19QTEFZRVIpIHtcbiAgICAgICsraW5zdGFuY2UucGxheWVyU3RhdHMuYmxhY2sucGViYmxlcztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5zdGFuY2U7XG59O1xuXG4vKipcbiAgICAqIEBpbnRlcmZhY2UgU3VyYWthcnRhUmVzcG9uZGVyXG4gICAgKlxuICAgICogQG1ldGhvZCBvblR1cm5cbiAgICAqIEBwYXJhbSB7U3VyYWthcnRhfSBzdXJha2FydGFcbiAgICAqLyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTt2YXIgX2V4cG9ydE5hbWVzID0geyBSRURfUExBWUVSOiB0cnVlLCBCTEFDS19QTEFZRVI6IHRydWUsIE5PVF9GSUxMRUQ6IHRydWUsIFN1cmFrYXJ0YTogdHJ1ZSwgTW92ZTogdHJ1ZSwgUG9zaXRpb246IHRydWUgfTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSRURfUExBWUVSXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7cmV0dXJuIF9TdXJha2FydGEuUkVEX1BMQVlFUjt9IH0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkJMQUNLX1BMQVlFUlwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfU3VyYWthcnRhLkJMQUNLX1BMQVlFUjt9IH0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk5PVF9GSUxMRURcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gX1N1cmFrYXJ0YS5OT1RfRklMTEVEO30gfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU3VyYWthcnRhXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7cmV0dXJuIF9TdXJha2FydGEuU3VyYWthcnRhO30gfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTW92ZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfTW92ZS5Nb3ZlO30gfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUG9zaXRpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gX1Bvc2l0aW9uLlBvc2l0aW9uO30gfSk7XG5cblxuXG52YXIgX1N1cmFrYXJ0YSA9IHJlcXVpcmUoXCIuL1N1cmFrYXJ0YVwiKTtcbnZhciBfTW92ZSA9IHJlcXVpcmUoXCIuL01vdmVcIik7XG52YXIgX1Bvc2l0aW9uID0gcmVxdWlyZShcIi4vUG9zaXRpb25cIik7XG52YXIgX3RyYXZlcnNlVXRpbHMgPSByZXF1aXJlKFwiLi90cmF2ZXJzZS11dGlsc1wiKTtPYmplY3Qua2V5cyhfdHJhdmVyc2VVdGlscykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7aWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO2lmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gX3RyYXZlcnNlVXRpbHNba2V5XTt9IH0pO30pO1xudmFyIF9zdGVwVXRpbHMgPSByZXF1aXJlKFwiLi9zdGVwLXV0aWxzXCIpO09iamVjdC5rZXlzKF9zdGVwVXRpbHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge2lmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9leHBvcnROYW1lcywga2V5KSkgcmV0dXJuO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7cmV0dXJuIF9zdGVwVXRpbHNba2V5XTt9IH0pO30pO1xudmFyIF9QbGF5ZXJTdGF0cyA9IHJlcXVpcmUoXCIuL1BsYXllclN0YXRzXCIpO09iamVjdC5rZXlzKF9QbGF5ZXJTdGF0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7aWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO2lmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gX1BsYXllclN0YXRzW2tleV07fSB9KTt9KTsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmFsaWRhdGVTdGVwXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7cmV0dXJuIF92YWxpZGF0ZVN0ZXAudmFsaWRhdGVTdGVwO30gfSk7ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7dmFyIF92YWxpZGF0ZVN0ZXAgPSByZXF1aXJlKFwiLi92YWxpZGF0ZVN0ZXBcIik7dmFyIF9kZWZhdWx0ID1cblxuXG5cbntcbiAgdmFsaWRhdGVTdGVwOiBfdmFsaWRhdGVTdGVwLnZhbGlkYXRlU3RlcCB9O2V4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO2V4cG9ydHMudmFsaWRhdGVTdGVwID0gdmFsaWRhdGVTdGVwO2Z1bmN0aW9uIHZhbGlkYXRlU3RlcChyMCwgYzAsIHIxLCBjMSkge1xuICByZXR1cm4gcjEgPj0gMCAmJiBjMSA+PSAwICYmIHIxIDwgNiAmJiBjMSA8IDYgJiZcbiAgTWF0aC5hYnMocjEgLSByMCkgPD0gMSAmJiBNYXRoLmFicyhjMSAtIGMwKSA8PSAxO1xufSIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4cG9ydHMuRGlyZWN0aW9ucyA9IGV4cG9ydHMuRE9XTiA9IGV4cG9ydHMuUklHSFQgPSBleHBvcnRzLlVQID0gZXhwb3J0cy5MRUZUID0gdm9pZCAwO3ZhciBMRUZUID0gMTA7ZXhwb3J0cy5MRUZUID0gTEVGVDtcbnZhciBVUCA9IDExO2V4cG9ydHMuVVAgPSBVUDtcbnZhciBSSUdIVCA9IDEyO2V4cG9ydHMuUklHSFQgPSBSSUdIVDtcbnZhciBET1dOID0gMTM7ZXhwb3J0cy5ET1dOID0gRE9XTjtcblxudmFyIERpcmVjdGlvbnMgPSB7XG4gIExFRlQ6IExFRlQsXG4gIFVQOiBVUCxcbiAgUklHSFQ6IFJJR0hULFxuICBET1dOOiBET1dOIH07ZXhwb3J0cy5EaXJlY3Rpb25zID0gRGlyZWN0aW9uczt2YXIgX2RlZmF1bHQgPVxuXG5cbntcbiAgTEVGVDogTEVGVCxcbiAgVVA6IFVQLFxuICBSSUdIVDogUklHSFQsXG4gIERPV046IERPV04sXG4gIERpcmVjdGlvbnM6IERpcmVjdGlvbnMsXG4gIGdldCBUT1AoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRGlyZWN0aW9ucy5UT1AgaXMgaW52YWxpZC4gVXNlIERpcmVjdGlvbnMuVVBcIik7XG4gIH0sXG4gIGdldCBCT1RUT00oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRGlyZWN0aW9ucy5CT1RUT00gaXMgaW52YWxpZC4gVXNlIERpcmVjdGlvbnMuRE9XTlwiKTtcbiAgfSxcbiAgaXNIb3Jpem9udGFsOiBmdW5jdGlvbiBpc0hvcml6b250YWwoZCkge1xuICAgIHJldHVybiBkID09PSBMRUZUIHx8IGQgPT09IFJJR0hUO1xuICB9LFxuICBpc1ZlcnRpY2FsOiBmdW5jdGlvbiBpc1ZlcnRpY2FsKGQpIHtcbiAgICByZXR1cm4gZCA9PT0gVVAgfHwgZCA9PT0gRE9XTjtcbiAgfSxcbiAgb2Y6IGZ1bmN0aW9uIG9mKHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAoZW5kWzFdID4gNSkge1xuICAgICAgcmV0dXJuIFJJR0hUO1xuICAgIH0gZWxzZSBpZiAoZW5kWzFdIDwgMCkge1xuICAgICAgcmV0dXJuIExFRlQ7XG4gICAgfVxuICAgIGlmIChlbmRbMF0gPiA1KSB7XG4gICAgICByZXR1cm4gRE9XTjtcbiAgICB9IGVsc2UgaWYgKGVuZFswXSA8IDApIHtcbiAgICAgIHJldHVybiBVUDtcbiAgICB9XG5cbiAgICB2YXIgciA9IGVuZFswXSAtIHN0YXJ0WzBdO1xuICAgIHZhciBjID0gZW5kWzFdIC0gc3RhcnRbMV07XG5cbiAgICBpZiAociAqIGMgIT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIihcIi5jb25jYXQoXG4gICAgICBzdGFydFswXSwgXCIsIFwiKS5jb25jYXQoc3RhcnRbMV0sIFwiKSB0byAoXCIpLmNvbmNhdChlbmRbMF0sIFwiLCBcIikuY29uY2F0KGVuZFsxXSwgXCIpIGlzbid0IGFuIG9ydGhvZ29uYWwgZGlyZWN0aW9uXCIpKTtcblxuICAgIH1cbiAgICBpZiAociAhPT0gMCkge1xuICAgICAgcmV0dXJuIHIgPiAwID8gRE9XTiA6IFVQO1xuICAgIH1cbiAgICBpZiAoYyAhPT0gMCkge1xuICAgICAgcmV0dXJuIGMgPiAwID8gUklHSFQgOiBMRUZUO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICBcIk5vIG1vdmUgbWFkZSwgYW5kIGRpcmVjdGlvbiBjYW5ub3QgYmUgZ2l2ZW4gdG8gemVybyB2ZWN0b3IuXCIpO1xuXG4gIH0gfTtleHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO2Z1bmN0aW9uIF90eXBlb2Yob2JqKSB7aWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7X3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7cmV0dXJuIHR5cGVvZiBvYmo7fTt9IGVsc2Uge190eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge3JldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO307fXJldHVybiBfdHlwZW9mKG9iaik7fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTt2YXIgX2V4cG9ydE5hbWVzID0geyBEaXJlY3Rpb25zOiB0cnVlLCBMRUZUOiB0cnVlLCBVUDogdHJ1ZSwgUklHSFQ6IHRydWUsIERPV046IHRydWUsIGdldExvb3BSYWRpdXM6IHRydWUsIGdldExvb3BSb3RhdGlvbjogdHJ1ZSwgZ2V0TG9vcFRhbmdlbnQ6IHRydWUsIGdldExvb3BUZXJtaW5hbDogdHJ1ZSB9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkRpcmVjdGlvbnNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gX0RpcmVjdGlvbnNbXCJkZWZhdWx0XCJdO30gfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTEVGVFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfRGlyZWN0aW9ucy5MRUZUO30gfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiVVBcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gX0RpcmVjdGlvbnMuVVA7fSB9KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSSUdIVFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfRGlyZWN0aW9ucy5SSUdIVDt9IH0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkRPV05cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gX0RpcmVjdGlvbnMuRE9XTjt9IH0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldExvb3BSYWRpdXNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gX2xvb3BJbmZvLmdldExvb3BSYWRpdXM7fSB9KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRMb29wUm90YXRpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gX2xvb3BJbmZvLmdldExvb3BSb3RhdGlvbjt9IH0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldExvb3BUYW5nZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7cmV0dXJuIF9sb29wSW5mby5nZXRMb29wVGFuZ2VudDt9IH0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldExvb3BUZXJtaW5hbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfbG9vcEluZm8uZ2V0TG9vcFRlcm1pbmFsO30gfSk7ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7dmFyIF9EaXJlY3Rpb25zID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vRGlyZWN0aW9uc1wiKSk7XG5cblxuXG52YXIgX2xvb3BJbmZvID0gcmVxdWlyZShcIi4vbG9vcC1pbmZvXCIpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBfcGF0aEZpbmRlciA9IHJlcXVpcmUoXCIuL3BhdGgtZmluZGVyXCIpO09iamVjdC5rZXlzKF9wYXRoRmluZGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfcGF0aEZpbmRlcltrZXldO30gfSk7fSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge2lmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDt2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge2lmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtyZXR1cm4gb2JqO31pZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtyZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07fXZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaiA9IHt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IgKHZhciBrZXkgaW4gb2JqKSB7aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHt2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTt9IGVsc2Uge25ld09ialtrZXldID0gb2JqW2tleV07fX19bmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtpZiAoY2FjaGUpIHtjYWNoZS5zZXQob2JqLCBuZXdPYmopO31yZXR1cm4gbmV3T2JqO312YXIgX2RlZmF1bHQgPVxuXG57XG4gIGdldExvb3BSYWRpdXM6IF9sb29wSW5mby5nZXRMb29wUmFkaXVzLFxuICBnZXRMb29wUm90YXRpb246IF9sb29wSW5mby5nZXRMb29wUm90YXRpb24sXG4gIGdldExvb3BUYW5nZW50OiBfbG9vcEluZm8uZ2V0TG9vcFRhbmdlbnQsXG4gIGdldExvb3BUZXJtaW5hbDogX2xvb3BJbmZvLmdldExvb3BUZXJtaW5hbCB9O2V4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO2V4cG9ydHMuZ2V0TG9vcFJhZGl1cyA9IGdldExvb3BSYWRpdXM7ZXhwb3J0cy5nZXRMb29wUm90YXRpb24gPSBnZXRMb29wUm90YXRpb247ZXhwb3J0cy5nZXRMb29wVGFuZ2VudCA9IGdldExvb3BUYW5nZW50O2V4cG9ydHMuZ2V0TG9vcFRlcm1pbmFsID0gZ2V0TG9vcFRlcm1pbmFsO3ZhciBfRGlyZWN0aW9ucyA9IHJlcXVpcmUoXCIuL0RpcmVjdGlvbnNcIik7XG5cblxuXG5cblxuXG5cblxuZnVuY3Rpb24gZ2V0TG9vcFJhZGl1cyhkaXIsIHIsIGMpIHtcbiAgaWYgKGRpciA9PT0gX0RpcmVjdGlvbnMuRGlyZWN0aW9ucy5MRUZUIHx8IGRpciA9PT0gX0RpcmVjdGlvbnMuRGlyZWN0aW9ucy5SSUdIVCkge1xuICAgIHJldHVybiByIDwgMyA/IHIgOiA1IC0gcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYyA8IDMgPyBjIDogNSAtIGM7XG4gIH1cbn1cblxuZnVuY3Rpb24gYW5nbGUocjAsIGMwLCByMSwgYzEpIHtcbiAgaWYgKHIwID09PSByMSkge1xuICAgIHJldHVybiBjMSA+IGMwID8gMCA6IE1hdGguUEk7XG4gIH0gZWxzZSBpZiAoYzEgPT09IGMwKSB7XG4gICAgcmV0dXJuIHIxID4gcjAgPyBNYXRoLlBJIC8gMiA6IDEuNSAqIE1hdGguUEk7XG4gIH1cbn1cblxuLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIGFuZ3VsYXIgcm90YXRpb24gd2hlbiBsb29waW5nIGZyb20gc3RhcnQgdG9cbiAgICogZW5kLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRYXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFlcbiAgICogQHBhcmFtIHtudW1iZXJ9IGVuZFhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGVuZFlcbiAgICovXG5mdW5jdGlvbiBnZXRMb29wUm90YXRpb24oc3RhcnRYLCBzdGFydFksIGVuZFgsIGVuZFkpIHtcbiAgdmFyIGN4O1xuXG4gIGlmIChlbmRYID09PSAwIHx8IHN0YXJ0WCA9PT0gMCkge1xuICAgIGN4ID0gMDtcbiAgfSBlbHNlIHtcbiAgICBjeCA9IDU7XG4gIH1cblxuICB2YXIgY3k7XG5cbiAgaWYgKGVuZFkgPT09IDAgfHwgc3RhcnRZID09PSAwKSB7XG4gICAgY3kgPSAwO1xuICB9IGVsc2Uge1xuICAgIGN5ID0gNTtcbiAgfVxuXG4gIHZhciBzdGFydEFuZ2xlID0gYW5nbGUoY3gsIGN5LCBzdGFydFgsIHN0YXJ0WSk7XG4gIHZhciBlbmRBbmdsZSA9IGFuZ2xlKGN4LCBjeSwgZW5kWCwgZW5kWSk7XG5cbiAgcmV0dXJuIFtjeCwgY3ksIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBNYXRoLmFicyhlbmRYIC0gc3RhcnRYKV07XG59XG5cbi8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHRhbmdlbnQgdG8gdGhlIGxvb3AgKGdlb21ldHJpY2FsbHkpIGVtZXJnaW5nXG4gICAqIGZyb20gdGhlIGdpdmVuIHBvaW50LlxuICAgKiBAcGFyYW0ge251bWJlcn0gclxuICAgKiBAcGFyYW0ge251bWJlcn0gY1xuICAgKi9cbmZ1bmN0aW9uIGdldExvb3BUYW5nZW50KHIsIGMpIHtcbiAgaWYgKChyID09PSBjIHx8IHIgPT09IDUgLSBjKSAmJiAociA9PT0gMCB8fCByID09PSA1KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIihcIi5jb25jYXQociwgXCIsIFwiKS5jb25jYXQoYywgXCIpIGlzIGEgY29ybmVyLCBub3QgYSBsb29wIHRlcm1pbmFsXCIpKTtcbiAgfVxuXG4gIGlmIChyID09PSAwKSB7XG4gICAgcmV0dXJuIF9EaXJlY3Rpb25zLkRpcmVjdGlvbnMuVVA7XG4gIH0gZWxzZSBpZiAociA9PT0gNSkge1xuICAgIHJldHVybiBfRGlyZWN0aW9ucy5EaXJlY3Rpb25zLkRPV047XG4gIH0gZWxzZSBpZiAoYyA9PT0gMCkge1xuICAgIHJldHVybiBfRGlyZWN0aW9ucy5EaXJlY3Rpb25zLkxFRlQ7XG4gIH0gZWxzZSBpZiAoYyA9PT0gNSkge1xuICAgIHJldHVybiBfRGlyZWN0aW9ucy5EaXJlY3Rpb25zLlJJR0hUO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcIihcIi5jb25jYXQociwgXCIsIFwiKS5jb25jYXQoYywgXCIpIGlzIG5vdCBhIGxvb3AgdGVybWluYWwgcG9zaXRpb24uXCIpKTtcbiAgfVxufVxuXG4vKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgcG9pbnQgb24gd2hpY2ggYSBwb2ludCB3aWxsIGxhbmQgb24gYWZ0ZXIgbG9vcGluZyB0aHJvdWdoXG4gICAqIGEgbG9vcCBmcm9tIGEgdGVybWluYWwgcG9pbnQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjXG4gICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2xvY19dXG4gICAqL1xuZnVuY3Rpb24gZ2V0TG9vcFRlcm1pbmFsKHIsIGMsIGxvY18pIHtcbiAgdmFyIGxvYyA9IGxvY18gfHwgbmV3IEFycmF5KDMpO1xuICB2YXIgdGFuZ2VudCA9IGdldExvb3BUYW5nZW50KHIsIGMpO1xuICB2YXIgbG9vcFJhZGl1cyA9IGdldExvb3BSYWRpdXModGFuZ2VudCwgciwgYyk7XG5cbiAgc3dpdGNoICh0YW5nZW50KSB7XG4gICAgY2FzZSBfRGlyZWN0aW9ucy5VUDpcbiAgICAgIGxvY1swXSA9IGxvb3BSYWRpdXM7XG4gICAgICBsb2NbMV0gPSBjIDwgMyA/IDAgOiA1O1xuICAgICAgbG9jWzJdID0gbG9jWzFdID09PSAwID8gX0RpcmVjdGlvbnMuUklHSFQgOiBfRGlyZWN0aW9ucy5MRUZUO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBfRGlyZWN0aW9ucy5ET1dOOlxuICAgICAgbG9jWzBdID0gNSAtIGxvb3BSYWRpdXM7XG4gICAgICBsb2NbMV0gPSBjIDwgMyA/IDAgOiA1O1xuICAgICAgbG9jWzJdID0gbG9jWzFdID09PSAwID8gX0RpcmVjdGlvbnMuUklHSFQgOiBfRGlyZWN0aW9ucy5MRUZUO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBfRGlyZWN0aW9ucy5MRUZUOlxuICAgICAgbG9jWzBdID0gciA8IDMgPyAwIDogNTtcbiAgICAgIGxvY1sxXSA9IGxvb3BSYWRpdXM7XG4gICAgICBsb2NbMl0gPSBsb2NbMF0gPT09IDAgPyBfRGlyZWN0aW9ucy5ET1dOIDogX0RpcmVjdGlvbnMuVVA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIF9EaXJlY3Rpb25zLlJJR0hUOlxuICAgICAgbG9jWzBdID0gciA8IDMgPyAwIDogNTtcbiAgICAgIGxvY1sxXSA9IDUgLSBsb29wUmFkaXVzO1xuICAgICAgbG9jWzJdID0gbG9jWzFdID09PSAwID8gX0RpcmVjdGlvbnMuRE9XTiA6IF9EaXJlY3Rpb25zLlVQO1xuICAgICAgYnJlYWs7fVxuXG5cbiAgcmV0dXJuIGxvYztcbn0iLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7ZXhwb3J0cy5zaW1wbGVTdGVwQ29udGV4dCA9IHNpbXBsZVN0ZXBDb250ZXh0O2V4cG9ydHMubG9vcFN0ZXBDb250ZXh0ID0gbG9vcFN0ZXBDb250ZXh0O2V4cG9ydHMuZmluZFN0ZXAgPSBmaW5kU3RlcDtleHBvcnRzLmZpbmRQYXRoID0gZmluZFBhdGg7ZXhwb3J0cy5QYXRoRmluZGVyID0gdm9pZCAwO3ZhciBfRGlyZWN0aW9ucyA9IHJlcXVpcmUoXCIuL0RpcmVjdGlvbnNcIik7XG52YXIgX2xvb3BJbmZvID0gcmVxdWlyZShcIi4vbG9vcC1pbmZvXCIpO1xuXG52YXIgTk9UX0ZJTExFRCA9IC0xO1xuXG4vKipcbiAgICAgICAgICAgICAgICAgICAgICAqIEB0eXBlZGVmIHtBcnJheX0gVHJhdmVyc2VDb250ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gMCAtIHJvd1xuICAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IDEgLSBjb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7RGlyZWN0aW9uP30gMiAtIGRpcmVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHJvd1xuICAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGNvbHVtblxuICAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtEaXJlY3Rpb259IGRpcmVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICovXG5cbmZ1bmN0aW9uIHNpbXBsZVN0ZXBDb250ZXh0KHJvdywgY29sdW1uKSB7XG4gIHZhciBjb250ZXh0ID0gW3JvdywgY29sdW1uXTtcbiAgY29udGV4dC5yb3cgPSByb3c7XG4gIGNvbnRleHQuY29sdW1uID0gY29sdW1uO1xuICByZXR1cm4gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gbG9vcFN0ZXBDb250ZXh0KHJvdywgY29sdW1uLCBkaXJlY3Rpb24pIHtcbiAgdmFyIGNvbnRleHQgPSBbcm93LCBjb2x1bW4sIGRpcmVjdGlvbl07XG4gIGNvbnRleHQucm93ID0gcm93O1xuICBjb250ZXh0LmNvbHVtbiA9IGNvbHVtbjtcbiAgY29udGV4dC5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gIGNvbnRleHQuaXNMb29wID0gdHJ1ZTtcbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRTaW1wbGVTdGVwKHJvdywgY29sdW1uLCBkaXJlY3Rpb24pIHtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIF9EaXJlY3Rpb25zLlVQOlxuICAgICAgaWYgKHJvdyAhPT0gMCkge1xuICAgICAgICByZXR1cm4gW3JvdyAtIDEsIGNvbHVtbl07XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIF9EaXJlY3Rpb25zLkxFRlQ6XG4gICAgICBpZiAoY29sdW1uICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBbcm93LCBjb2x1bW4gLSAxXTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgX0RpcmVjdGlvbnMuRE9XTjpcbiAgICAgIGlmIChyb3cgIT09IDUpIHtcbiAgICAgICAgcmV0dXJuIFtyb3cgKyAxLCBjb2x1bW5dO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBfRGlyZWN0aW9ucy5SSUdIVDpcbiAgICAgIGlmIChjb2x1bW4gIT09IDUpIHtcbiAgICAgICAgcmV0dXJuIFtyb3csIGNvbHVtbiArIDFdO1xuICAgICAgfVxuICAgICAgYnJlYWs7fVxuXG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICAgKiBGaW5kcyB0aGUgbmV4dCBwb3NpdGlvbiB0aGF0IHRoZSBhdHRhY2sgd2lsbCBsYW5kIG9uLCBpZiBjb250aW51YWJsZS5cbiAgICogQHJldHVybnMge1RyYXZlcnNlQ29udGV4dH1cbiAgICovXG5mdW5jdGlvbiBmaW5kU3RlcChyb3csIGNvbHVtbiwgZGlyZWN0aW9uKSB7XG4gIHZhciBzaW1wbGVTdGVwID0gZmluZFNpbXBsZVN0ZXAocm93LCBjb2x1bW4sIGRpcmVjdGlvbik7XG5cbiAgaWYgKHNpbXBsZVN0ZXApIHtcbiAgICBzaW1wbGVTdGVwLnJvdyA9IHNpbXBsZVN0ZXBbMF07XG4gICAgc2ltcGxlU3RlcC5jb2x1bW4gPSBzaW1wbGVTdGVwWzFdO1xuICAgIHJldHVybiBzaW1wbGVTdGVwO1xuICB9IGVsc2Uge1xuICAgIHZhciBsb29wU3RlcCA9ICgwLCBfbG9vcEluZm8uZ2V0TG9vcFRlcm1pbmFsKShyb3csIGNvbHVtbik7XG4gICAgbG9vcFN0ZXAucm93ID0gbG9vcFN0ZXBbMF07XG4gICAgbG9vcFN0ZXAuY29sdW1uID0gbG9vcFN0ZXBbMV07XG4gICAgbG9vcFN0ZXAuZGlyZWN0aW9uID0gbG9vcFN0ZXBbMl07XG4gICAgbG9vcFN0ZXAuaXNMb29wID0gdHJ1ZTtcbiAgICByZXR1cm4gbG9vcFN0ZXA7XG4gIH1cbn1cblxuLyoqXG4gICAqIEZpbmRzIGFsbCB0aGUgc3RlcHMgaW4gdGhlIGF0dGFjay5cbiAgICogQHBhcmFtIHtTdXJha2FydGF9IHN1cmFrYXJ0YVxuICAgKiBAcGFyYW0ge251bWJlcn0gcm93XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5cbiAgICogQHBhcmFtIHtEaXJlY3Rpb259IGRpcmVjdGlvblxuICAgKiBAcGFyYW0ge1Bvc2l0aW9ufSBjdXRcbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZFBvc3NpYmxpdHk9ZmFsc2VdXG4gICAqIEByZXR1cm5zIHtBcnJheTxUcmF2ZXJzZUNvbnRleHQ+IHwgYm9vbGVhbn1cbiAgICovXG5mdW5jdGlvbiBmaW5kUGF0aChzdXJha2FydGEsIHJvdywgY29sdW1uLCBkaXJlY3Rpb24sIGN1dCkge3ZhciBmaW5kUG9zc2libGl0eSA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDogZmFsc2U7XG4gIHZhciBzdGFydCA9IFtyb3csIGNvbHVtbl07XG4gIHZhciBwZWJibGUgPSBzdXJha2FydGEuc3RhdGVzW3N1cmFrYXJ0YS5pbmRleE9mKHJvdywgY29sdW1uKV07XG4gIHZhciBzdGVwcyA9IGZpbmRQb3NzaWJsaXR5ID8gdHJ1ZSA6IFtdO1xuICB2YXIgc2VsZlRvdWNoID0gMDtcbiAgdmFyIGxvb3BzID0gMDtcbiAgdmFyIGN1dEZvdW5kID0gZmFsc2U7XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgbmV4dCA9IGZpbmRTdGVwKHJvdywgY29sdW1uLCBkaXJlY3Rpb24pO1xuXG4gICAgcm93ID0gbmV4dFswXTtcbiAgICBjb2x1bW4gPSBuZXh0WzFdO1xuXG4gICAgaWYgKG5leHQuaXNMb29wKSB7XG4gICAgICBkaXJlY3Rpb24gPSBuZXh0LmRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IGZhbHNlO1xuICAgIGlmIChyb3cgPT09IHN0YXJ0WzBdICYmIGNvbHVtbiA9PT0gc3RhcnRbMV0pIHtcbiAgICAgICsrc2VsZlRvdWNoO1xuICAgICAgaWYgKHNlbGZUb3VjaCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBJbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgICBzZWxmID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgc3RhdGUgPSBzdXJha2FydGEuc3RhdGUocm93LCBjb2x1bW4pO1xuXG4gICAgaWYgKCFzZWxmICYmIHN0YXRlID09PSBwZWJibGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gY2FuJ3QgY2FwdHVyZSBvdXIgb3duIHBlYmJsZSA6KVxuICAgIH1cbiAgICBpZiAoIWZpbmRQb3NzaWJsaXR5KSB7XG4gICAgICBzdGVwcy5wdXNoKG5leHQpO1xuXG4gICAgICBpZiAobmV4dC5sZW5ndGggPT09IDMpIHsvLyBsb29wXG4gICAgICAgICsrbG9vcHM7XG4gICAgICAgIHN0ZXBzW3N0ZXBzLmxlbmd0aCAtIDFdLmlzTG9vcCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjdXQgJiYgY3V0LnJvdyA9PT0gcm93ICYmIGN1dC5jb2x1bW4gPT09IGNvbHVtbiB8fCAhc2VsZiAmJiBzdGF0ZSAhPT0gTk9UX0ZJTExFRCkge1xuICAgICAgY3V0Rm91bmQgPSBzdGF0ZSA9PT0gTk9UX0ZJTExFRDsgLy8gbGFuZGVkIG9wdGlvbmFsIGludGVybWVkaWF0ZSBpZiBjdXJyZW50IHBvc2l0aW9uIG5vdCBmaWxsZWRcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChsb29wcyA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0ZXBzLmlzQ2FwdHVyZSA9ICFjdXRGb3VuZDtcbiAgcmV0dXJuIHN0ZXBzO1xufVxuXG4vKipcbiAgICogQG5hbWVzcGFjZSBTS1xuICAgKi9cbnZhciBQYXRoRmluZGVyID0ge1xuICBmaW5kU3RlcDogZmluZFN0ZXAsXG4gIGZpbmRQYXRoOiBmaW5kUGF0aCB9O2V4cG9ydHMuUGF0aEZpbmRlciA9IFBhdGhGaW5kZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==