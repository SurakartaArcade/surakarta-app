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

/***/ "../../Web Projects/surakarta-ai/dist/index.bundle.js":
/*!************************************************************************!*\
  !*** /Users/shukantpal/Web Projects/surakarta-ai/dist/index.bundle.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory(__webpack_require__(/*! surakarta */ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/index.js"), __webpack_require__(/*! surakarta-analysis */ "../../Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/index.js"));else {}
})(this, function (__WEBPACK_EXTERNAL_MODULE_surakarta__, __WEBPACK_EXTERNAL_MODULE_surakarta_analysis__) {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "./src/index.ts");
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./node_modules/opool/index.js":
      /*!*************************************!*\
        !*** ./node_modules/opool/index.js ***!
        \*************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("var Pool = (function () {\n    function Pool(Func) {\n        this.pool = [];\n        this.Func = Func;\n    }\n    Pool.prototype.get = function () {\n        if (this.pool.length) {\n            return this.pool.splice(0, 1)[0];\n        }\n        return new this.Func();\n    };\n    Pool.prototype.release = function (obj) {\n        if (this.Func.reset) {\n            this.Func.reset(obj);\n        }\n        this.pool.push(obj);\n    };\n    return Pool;\n})();\nmodule.exports = Pool;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://SKAI/./node_modules/opool/index.js?");
        /***/
      },

      /***/
      "./src/CommonContext.ts":
      /*!******************************!*\
        !*** ./src/CommonContext.ts ***!
        \******************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar mem_1 = __webpack_require__(/*! ./mem */ \"./src/mem/index.ts\");\nvar CommonContext = (function () {\n    function CommonContext(noCache, requestHandle) {\n        if (noCache === void 0) { noCache = false; }\n        if (requestHandle === void 0) { requestHandle = 0; }\n        this.requestHandle = requestHandle || Math.random() * (1 << 30);\n        this.useCache = !noCache;\n    }\n    Object.defineProperty(CommonContext.prototype, \"cache\", {\n        get: function () {\n            if (!this.useCache) {\n                return null;\n            }\n            else if (!this._cache) {\n                this._cache = new mem_1.TranspositionTable({ nodeLimit: 9000 });\n            }\n            return this._cache;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    CommonContext.postThreadBoundary = function (context) {\n        return new CommonContext(!!context.cache, context.requestHandle);\n    };\n    return CommonContext;\n}());\nexports.CommonContext = CommonContext;\n\n\n//# sourceURL=webpack://SKAI/./src/CommonContext.ts?");
        /***/
      },

      /***/
      "./src/SearchContext.ts":
      /*!******************************!*\
        !*** ./src/SearchContext.ts ***!
        \******************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar SK = __importStar(__webpack_require__(/*! surakarta */ \"surakarta\"));\nvar CommonContext_1 = __webpack_require__(/*! ./CommonContext */ \"./src/CommonContext.ts\");\nvar opool_1 = __importDefault(__webpack_require__(/*! opool */ \"./node_modules/opool/index.js\"));\nvar SearchContext = (function () {\n    function SearchContext() {\n        this.surakarta = null;\n        this.playerId = SK.NOT_FILLED;\n        this.searchDepth = 0;\n        this.depthLimit = 0;\n        this.alpha = Number.NEGATIVE_INFINITY;\n        this.beta = Number.POSITIVE_INFINITY;\n        this.common = null;\n    }\n    SearchContext.prototype.init = function (surakarta, playerId, depthLimit, searchDepth) {\n        if (searchDepth === void 0) { searchDepth = 0; }\n        this.surakarta = surakarta;\n        this.playerId = playerId;\n        this.depthLimit = depthLimit;\n        this.searchDepth = searchDepth;\n        this.alpha = Number.NEGATIVE_INFINITY;\n        this.beta = Number.POSITIVE_INFINITY;\n    };\n    SearchContext.prototype.reset = function () {\n        this.surakarta = null;\n        this.playerId = 0;\n        this.depthLimit = 0;\n        this.searchDepth = 0;\n        this.alpha = Number.NEGATIVE_INFINITY;\n        this.beta = Number.POSITIVE_INFINITY;\n    };\n    SearchContext.prototype.destroy = function () {\n        SearchContext.pool.release(this);\n    };\n    SearchContext.postThreadBoundary = function (context) {\n        var newContext = new SearchContext();\n        newContext.surakarta = context.surakarta;\n        newContext.playerId = context.playerId;\n        newContext.depthLimit = context.depthLimit;\n        newContext.searchDepth = context.searchDepth;\n        newContext.alpha = context.alpha;\n        newContext.beta = context.beta;\n        var _a = context.surakarta, states = _a.states, turn = _a.turn;\n        newContext.surakarta = SK.Surakarta.fromState(states);\n        newContext.surakarta.turn = turn;\n        newContext.common = CommonContext_1.CommonContext.postThreadBoundary(context.common);\n        return newContext;\n    };\n    SearchContext.pool = new opool_1.default(SearchContext);\n    return SearchContext;\n}());\nexports.SearchContext = SearchContext;\nfunction createContext(surakarta, searchOptions) {\n    if (searchOptions === void 0) { searchOptions = { noCache: false }; }\n    var context = SearchContext.pool.get();\n    context.init(surakarta, surakarta.turnPlayer, 4);\n    context.common = new CommonContext_1.CommonContext(searchOptions.noCache);\n    return context;\n}\nexports.createContext = createContext;\nfunction createInheritedContext(surakarta, parent) {\n    var context = SearchContext.pool.get();\n    context.surakarta = surakarta;\n    context.playerId =\n        parent.playerId === SK.BLACK_PLAYER ? SK.RED_PLAYER : SK.BLACK_PLAYER;\n    context.searchDepth = parent.searchDepth + 1;\n    context.depthLimit = parent.depthLimit;\n    context.alpha = -parent.beta;\n    context.beta = -parent.alpha;\n    context.common = parent.common;\n    return context;\n}\nexports.createInheritedContext = createInheritedContext;\n\n\n//# sourceURL=webpack://SKAI/./src/SearchContext.ts?");
        /***/
      },

      /***/
      "./src/index.ts":
      /*!**********************!*\
        !*** ./src/index.ts ***!
        \**********************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar search_1 = __webpack_require__(/*! ./search */ \"./src/search.ts\");\nvar SearchContext_1 = __webpack_require__(/*! ./SearchContext */ \"./src/SearchContext.ts\");\nfunction suggestPlay(surakarta) {\n    return search_1.search(SearchContext_1.createContext(surakarta));\n}\nexports.suggestPlay = suggestPlay;\nfunction play(surakarta) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            return [2, search_1.search(SearchContext_1.createContext(surakarta))];\n        });\n    });\n}\nexports.play = play;\nfunction resetResources() {\n    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {\n        return [2];\n    }); });\n}\nexports.resetResources = resetResources;\nexports.default = {\n    suggestPlay: suggestPlay\n};\nexports.AI = { suggestPlay: suggestPlay };\n\n\n//# sourceURL=webpack://SKAI/./src/index.ts?");
        /***/
      },

      /***/
      "./src/mem/TranspositionTable.ts":
      /*!***************************************!*\
        !*** ./src/mem/TranspositionTable.ts ***!
        \***************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ZobristHasher_1 = __webpack_require__(/*! ./ZobristHasher */ \"./src/mem/ZobristHasher.ts\");\nfunction npow2(n) {\n    return 1 << (31 - Math.clz32(n));\n}\nvar TTEntry = (function () {\n    function TTEntry() {\n        this.key = -1;\n        this.value = 0;\n        this.depth = 0;\n        this.lastHit = 0;\n    }\n    Object.defineProperty(TTEntry.prototype, \"weight\", {\n        get: function () {\n            return -this.depth - 2 * (performance.now() - this.lastHit);\n        },\n        enumerable: true,\n        configurable: true\n    });\n    TTEntry.prototype.feed = function (key, value, depth) {\n        if (this.weight > -depth) {\n            return;\n        }\n        this.key = key;\n        this.value = value;\n        this.depth = depth;\n        this.lastHit = performance.now();\n    };\n    TTEntry.prototype.hit = function () {\n        this.lastHit = performance.now();\n        return this.value;\n    };\n    return TTEntry;\n}());\nexports.TTEntry = TTEntry;\nvar TranspositionTable = (function () {\n    function TranspositionTable(options) {\n        this.nodeLimit = npow2(options.nodeLimit);\n        var size = Math.floor(this.nodeLimit / 3);\n        this.buckets = new Array(size);\n        for (var i = 0; i < size; i++) {\n            this.buckets[i] = new Array(3);\n            for (var j = 0; j < 3; j++) {\n                this.buckets[i][j] = new TTEntry();\n            }\n        }\n        ZobristHasher_1.initZobrist();\n    }\n    TranspositionTable.prototype.hit = function (key, willFeed) {\n        if (willFeed === void 0) { willFeed = true; }\n        var bucket = this.buckets[key % this.buckets.length];\n        for (var i = 0; i < bucket.length; i++) {\n            if (bucket[i].key == key) {\n                return bucket[i].hit();\n            }\n        }\n        if (willFeed) {\n            var worstEntry = bucket[0];\n            for (var i = 1; i < bucket.length; i++) {\n                var entry = bucket[i];\n                if (entry.weight < worstEntry.weight) {\n                    worstEntry = entry;\n                }\n            }\n            return worstEntry;\n        }\n        return null;\n    };\n    return TranspositionTable;\n}());\nexports.TranspositionTable = TranspositionTable;\n\n\n//# sourceURL=webpack://SKAI/./src/mem/TranspositionTable.ts?");
        /***/
      },

      /***/
      "./src/mem/ZobristHasher.ts":
      /*!**********************************!*\
        !*** ./src/mem/ZobristHasher.ts ***!
        \**********************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar baseCodes = [];\nvar isInit = false;\nfunction initZobrist() {\n    if (isInit) {\n        return;\n    }\n    for (var player = -1; player <= 1; player++) {\n        var playerHashes = new Array(36);\n        for (var pos = 0; pos < 36; pos++) {\n            playerHashes[pos] = Math.random() * (1 << 30);\n        }\n        baseCodes[player] = playerHashes;\n    }\n    isInit = true;\n}\nexports.initZobrist = initZobrist;\nfunction hash(node) {\n    initZobrist();\n    var hashCode = 0;\n    for (var p = 0; p < 36; p++) {\n        hashCode ^= baseCodes[node.states[p]][p];\n    }\n    return hashCode;\n}\nexports.hash = hash;\n\n\n//# sourceURL=webpack://SKAI/./src/mem/ZobristHasher.ts?");
        /***/
      },

      /***/
      "./src/mem/index.ts":
      /*!**************************!*\
        !*** ./src/mem/index.ts ***!
        \**************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./ZobristHasher */ \"./src/mem/ZobristHasher.ts\"));\n__export(__webpack_require__(/*! ./TranspositionTable */ \"./src/mem/TranspositionTable.ts\"));\n\n\n//# sourceURL=webpack://SKAI/./src/mem/index.ts?");
        /***/
      },

      /***/
      "./src/search.ts":
      /*!***********************!*\
        !*** ./src/search.ts ***!
        \***********************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar SK = __importStar(__webpack_require__(/*! surakarta */ \"surakarta\"));\nvar surakarta_analysis_1 = __webpack_require__(/*! surakarta-analysis */ \"surakarta-analysis\");\nvar SearchContext_1 = __webpack_require__(/*! ./SearchContext */ \"./src/SearchContext.ts\");\nvar mem_1 = __webpack_require__(/*! ./mem */ \"./src/mem/index.ts\");\nvar inflateHandle = surakarta_analysis_1.MoveHelper.inflateHandle;\nvar Aggregate = (function () {\n    function Aggregate() {\n        this.indexed = [];\n    }\n    Object.defineProperty(Aggregate.prototype, \"length\", {\n        get: function () {\n            return this.indexed.length;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Aggregate.prototype.forEach = function (callback) {\n        var moveTarget = new SK.Move();\n        this.indexed.forEach(function (moveHandle) {\n            callback(inflateHandle(moveHandle, moveTarget));\n        });\n    };\n    Aggregate.from = function (context) {\n        var surakarta = context.surakarta;\n        var movesArray = new Aggregate();\n        surakarta_analysis_1.Indexer.index(surakarta, movesArray.indexed);\n        surakarta_analysis_1.sortIndex(surakarta, movesArray.indexed);\n        return movesArray;\n    };\n    return Aggregate;\n}());\nvar surakartaPool = [];\nfunction search(context) {\n    var surakarta = context.surakarta, playerId = context.playerId, searchDepth = context.searchDepth, depthLimit = context.depthLimit;\n    if (searchDepth === depthLimit) {\n        return (2 * playerId - 1) * surakarta_analysis_1.evaluate(surakarta);\n    }\n    var hit;\n    var hashCode = mem_1.hash(surakarta);\n    if (context.common.cache && searchDepth > 0) {\n        hit = context.common.cache.hit(hashCode);\n        if (typeof hit === \"number\") {\n            return hit;\n        }\n    }\n    var childState = surakartaPool.pop() || new SK.Surakarta(true);\n    childState.copyFrom(surakarta);\n    childState.turn = surakarta.turn;\n    var movesIterable = Aggregate.from(context);\n    var bestMove = null;\n    var bestValue = Number.NEGATIVE_INFINITY;\n    var stopped = false;\n    movesIterable.forEach(function (move) {\n        if (stopped) {\n            return;\n        }\n        childState.step(move.srcRow, move.srcColumn, move.dstRow, move.dstColumn, true, move.isAttack);\n        ++childState.turn;\n        var value = -search(SearchContext_1.createInheritedContext(childState, context));\n        if (value > bestValue) {\n            if (searchDepth === 0) {\n                bestMove = move.clone();\n            }\n            bestValue = value;\n        }\n        context.alpha = Math.max(context.alpha, value);\n        if (context.alpha >= context.beta) {\n            stopped = true;\n        }\n        childState.copyFrom(surakarta);\n        --childState.turn;\n    });\n    if (searchDepth === 0) {\n        return bestMove;\n    }\n    if (hit) {\n        hit.feed(hashCode, bestValue, searchDepth);\n    }\n    context.destroy();\n    return bestValue;\n}\nexports.search = search;\n\n\n//# sourceURL=webpack://SKAI/./src/search.ts?");
        /***/
      },

      /***/
      "surakarta":
      /*!**********************************************************************************************!*\
        !*** external {"commonjs":"surakarta","commonjs2":"surakarta","amd":"surakarta","root":"_"} ***!
        \**********************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("module.exports = __WEBPACK_EXTERNAL_MODULE_surakarta__;\n\n//# sourceURL=webpack://SKAI/external_%7B%22commonjs%22:%22surakarta%22,%22commonjs2%22:%22surakarta%22,%22amd%22:%22surakarta%22,%22root%22:%22_%22%7D?");
        /***/
      },

      /***/
      "surakarta-analysis":
      /*!*************************************************************************************************************************!*\
        !*** external {"commonjs":"surakarta-analysis","commonjs2":"surakarta-analysis","amd":"surakarta-analysis","root":"_"} ***!
        \*************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        eval("module.exports = __WEBPACK_EXTERNAL_MODULE_surakarta_analysis__;\n\n//# sourceURL=webpack://SKAI/external_%7B%22commonjs%22:%22surakarta-analysis%22,%22commonjs2%22:%22surakarta-analysis%22,%22amd%22:%22surakarta-analysis%22,%22root%22:%22_%22%7D?");
        /***/
      }
      /******/

    })
  );
});

/***/ }),

/***/ "../../Web Projects/surakarta-ai/node_modules/eventemitter3/index.js":
/*!***************************************************************************************!*\
  !*** /Users/shukantpal/Web Projects/surakarta-ai/node_modules/eventemitter3/index.js ***!
  \***************************************************************************************/
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

/***/ "../../Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/data/MoveHandle.js":
/*!**********************************************************************************************************!*\
  !*** /Users/shukantpal/Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/data/MoveHandle.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoveHelper = void 0;

var _surakarta = __webpack_require__(/*! surakarta */ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/index.js");

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

/***/ "../../Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/data/PositionHandle.js":
/*!**************************************************************************************************************!*\
  !*** /Users/shukantpal/Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/data/PositionHandle.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PositionHelper = void 0;

var _surakarta = __webpack_require__(/*! surakarta */ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/index.js");

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

/***/ "../../Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/data/index.js":
/*!*****************************************************************************************************!*\
  !*** /Users/shukantpal/Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/data/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MoveHandle = __webpack_require__(/*! ./MoveHandle */ "../../Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/data/MoveHandle.js");

Object.keys(_MoveHandle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MoveHandle[key];
    }
  });
});

var _PositionHandle = __webpack_require__(/*! ./PositionHandle */ "../../Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/data/PositionHandle.js");

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

/***/ "../../Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/evaluate.js":
/*!***************************************************************************************************!*\
  !*** /Users/shukantpal/Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/evaluate.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.evaluate = evaluate;

var _surakarta = __webpack_require__(/*! surakarta */ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/index.js");

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

/***/ "../../Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/index.js":
/*!************************************************************************************************!*\
  !*** /Users/shukantpal/Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexer = __webpack_require__(/*! ./indexer */ "../../Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/indexer.js");

Object.keys(_indexer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _indexer[key];
    }
  });
});

var _evaluate = __webpack_require__(/*! ./evaluate */ "../../Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/evaluate.js");

Object.keys(_evaluate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _evaluate[key];
    }
  });
});

var _data = __webpack_require__(/*! ./data */ "../../Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/data/index.js");

Object.keys(_data).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _data[key];
    }
  });
});

var _sortIndex = __webpack_require__(/*! ./sortIndex */ "../../Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/sortIndex.js");

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

/***/ "../../Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/indexer.js":
/*!**************************************************************************************************!*\
  !*** /Users/shukantpal/Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/indexer.js ***!
  \**************************************************************************************************/
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

var _surakarta = __webpack_require__(/*! surakarta */ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/index.js");

var _data = __webpack_require__(/*! ./data */ "../../Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/data/index.js");

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

/***/ "../../Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/sortIndex.js":
/*!****************************************************************************************************!*\
  !*** /Users/shukantpal/Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/sortIndex.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortIndex = sortIndex;

var _surakarta = __webpack_require__(/*! surakarta */ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/index.js");

var _evaluate = __webpack_require__(/*! ./evaluate */ "../../Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/evaluate.js");

var _data = __webpack_require__(/*! ./data */ "../../Web Projects/surakarta-ai/node_modules/surakarta-analysis/lib/data/index.js");

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

/***/ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/Move.js":
/*!**************************************************************************************!*\
  !*** /Users/shukantpal/Web Projects/surakarta-ai/node_modules/surakarta/lib/Move.js ***!
  \**************************************************************************************/
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

/***/ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/PlayerStats.js":
/*!*********************************************************************************************!*\
  !*** /Users/shukantpal/Web Projects/surakarta-ai/node_modules/surakarta/lib/PlayerStats.js ***!
  \*********************************************************************************************/
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

/***/ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/Position.js":
/*!******************************************************************************************!*\
  !*** /Users/shukantpal/Web Projects/surakarta-ai/node_modules/surakarta/lib/Position.js ***!
  \******************************************************************************************/
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

/***/ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/Surakarta.js":
/*!*******************************************************************************************!*\
  !*** /Users/shukantpal/Web Projects/surakarta-ai/node_modules/surakarta/lib/Surakarta.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.Surakarta = exports.BLACK_PLAYER = exports.RED_PLAYER = exports.NOT_FILLED = void 0;var _eventemitter = _interopRequireDefault(__webpack_require__(/*! eventemitter3 */ "../../Web Projects/surakarta-ai/node_modules/eventemitter3/index.js"));
var _traverseUtils = _interopRequireWildcard(__webpack_require__(/*! ./traverse-utils */ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/traverse-utils/index.js"));







var _PlayerStats = _interopRequireDefault(__webpack_require__(/*! ./PlayerStats */ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/PlayerStats.js"));
var _stepUtils = __webpack_require__(/*! ./step-utils */ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/step-utils/index.js");function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {return { "default": obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj["default"] = obj;if (cache) {cache.set(obj, newObj);}return newObj;}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function _typeof(obj) {if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _possibleConstructorReturn(self, call) {if (call && (_typeof(call) === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}

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

/***/ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/index.js":
/*!***************************************************************************************!*\
  !*** /Users/shukantpal/Web Projects/surakarta-ai/node_modules/surakarta/lib/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _exportNames = { RED_PLAYER: true, BLACK_PLAYER: true, NOT_FILLED: true, Surakarta: true, Move: true, Position: true };Object.defineProperty(exports, "RED_PLAYER", { enumerable: true, get: function get() {return _Surakarta.RED_PLAYER;} });Object.defineProperty(exports, "BLACK_PLAYER", { enumerable: true, get: function get() {return _Surakarta.BLACK_PLAYER;} });Object.defineProperty(exports, "NOT_FILLED", { enumerable: true, get: function get() {return _Surakarta.NOT_FILLED;} });Object.defineProperty(exports, "Surakarta", { enumerable: true, get: function get() {return _Surakarta.Surakarta;} });Object.defineProperty(exports, "Move", { enumerable: true, get: function get() {return _Move.Move;} });Object.defineProperty(exports, "Position", { enumerable: true, get: function get() {return _Position.Position;} });



var _Surakarta = __webpack_require__(/*! ./Surakarta */ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/Surakarta.js");
var _Move = __webpack_require__(/*! ./Move */ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/Move.js");
var _Position = __webpack_require__(/*! ./Position */ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/Position.js");
var _traverseUtils = __webpack_require__(/*! ./traverse-utils */ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/traverse-utils/index.js");Object.keys(_traverseUtils).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;Object.defineProperty(exports, key, { enumerable: true, get: function get() {return _traverseUtils[key];} });});
var _stepUtils = __webpack_require__(/*! ./step-utils */ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/step-utils/index.js");Object.keys(_stepUtils).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;Object.defineProperty(exports, key, { enumerable: true, get: function get() {return _stepUtils[key];} });});
var _PlayerStats = __webpack_require__(/*! ./PlayerStats */ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/PlayerStats.js");Object.keys(_PlayerStats).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;Object.defineProperty(exports, key, { enumerable: true, get: function get() {return _PlayerStats[key];} });});

/***/ }),

/***/ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/step-utils/index.js":
/*!**************************************************************************************************!*\
  !*** /Users/shukantpal/Web Projects/surakarta-ai/node_modules/surakarta/lib/step-utils/index.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "validateStep", { enumerable: true, get: function get() {return _validateStep.validateStep;} });exports["default"] = void 0;var _validateStep = __webpack_require__(/*! ./validateStep */ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/step-utils/validateStep.js");var _default =



{
  validateStep: _validateStep.validateStep };exports["default"] = _default;

/***/ }),

/***/ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/step-utils/validateStep.js":
/*!*********************************************************************************************************!*\
  !*** /Users/shukantpal/Web Projects/surakarta-ai/node_modules/surakarta/lib/step-utils/validateStep.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.validateStep = validateStep;function validateStep(r0, c0, r1, c1) {
  return r1 >= 0 && c1 >= 0 && r1 < 6 && c1 < 6 &&
  Math.abs(r1 - r0) <= 1 && Math.abs(c1 - c0) <= 1;
}

/***/ }),

/***/ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/traverse-utils/Directions.js":
/*!***********************************************************************************************************!*\
  !*** /Users/shukantpal/Web Projects/surakarta-ai/node_modules/surakarta/lib/traverse-utils/Directions.js ***!
  \***********************************************************************************************************/
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

/***/ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/traverse-utils/index.js":
/*!******************************************************************************************************!*\
  !*** /Users/shukantpal/Web Projects/surakarta-ai/node_modules/surakarta/lib/traverse-utils/index.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _typeof(obj) {if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}Object.defineProperty(exports, "__esModule", { value: true });var _exportNames = { Directions: true, LEFT: true, UP: true, RIGHT: true, DOWN: true, getLoopRadius: true, getLoopRotation: true, getLoopTangent: true, getLoopTerminal: true };Object.defineProperty(exports, "Directions", { enumerable: true, get: function get() {return _Directions["default"];} });Object.defineProperty(exports, "LEFT", { enumerable: true, get: function get() {return _Directions.LEFT;} });Object.defineProperty(exports, "UP", { enumerable: true, get: function get() {return _Directions.UP;} });Object.defineProperty(exports, "RIGHT", { enumerable: true, get: function get() {return _Directions.RIGHT;} });Object.defineProperty(exports, "DOWN", { enumerable: true, get: function get() {return _Directions.DOWN;} });Object.defineProperty(exports, "getLoopRadius", { enumerable: true, get: function get() {return _loopInfo.getLoopRadius;} });Object.defineProperty(exports, "getLoopRotation", { enumerable: true, get: function get() {return _loopInfo.getLoopRotation;} });Object.defineProperty(exports, "getLoopTangent", { enumerable: true, get: function get() {return _loopInfo.getLoopTangent;} });Object.defineProperty(exports, "getLoopTerminal", { enumerable: true, get: function get() {return _loopInfo.getLoopTerminal;} });exports["default"] = void 0;var _Directions = _interopRequireWildcard(__webpack_require__(/*! ./Directions */ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/traverse-utils/Directions.js"));



var _loopInfo = __webpack_require__(/*! ./loop-info */ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/traverse-utils/loop-info.js");














var _pathFinder = __webpack_require__(/*! ./path-finder */ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/traverse-utils/path-finder.js");Object.keys(_pathFinder).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;Object.defineProperty(exports, key, { enumerable: true, get: function get() {return _pathFinder[key];} });});function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {return { "default": obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj["default"] = obj;if (cache) {cache.set(obj, newObj);}return newObj;}var _default =

{
  getLoopRadius: _loopInfo.getLoopRadius,
  getLoopRotation: _loopInfo.getLoopRotation,
  getLoopTangent: _loopInfo.getLoopTangent,
  getLoopTerminal: _loopInfo.getLoopTerminal };exports["default"] = _default;

/***/ }),

/***/ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/traverse-utils/loop-info.js":
/*!**********************************************************************************************************!*\
  !*** /Users/shukantpal/Web Projects/surakarta-ai/node_modules/surakarta/lib/traverse-utils/loop-info.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getLoopRadius = getLoopRadius;exports.getLoopRotation = getLoopRotation;exports.getLoopTangent = getLoopTangent;exports.getLoopTerminal = getLoopTerminal;var _Directions = __webpack_require__(/*! ./Directions */ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/traverse-utils/Directions.js");








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

/***/ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/traverse-utils/path-finder.js":
/*!************************************************************************************************************!*\
  !*** /Users/shukantpal/Web Projects/surakarta-ai/node_modules/surakarta/lib/traverse-utils/path-finder.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.simpleStepContext = simpleStepContext;exports.loopStepContext = loopStepContext;exports.findStep = findStep;exports.findPath = findPath;exports.PathFinder = void 0;var _Directions = __webpack_require__(/*! ./Directions */ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/traverse-utils/Directions.js");
var _loopInfo = __webpack_require__(/*! ./loop-info */ "../../Web Projects/surakarta-ai/node_modules/surakarta/lib/traverse-utils/loop-info.js");

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

/***/ }),

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
/* harmony import */ var surakarta_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! surakarta-ai */ "../../Web Projects/surakarta-ai/dist/index.bundle.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zaHVrYW50cGFsL1dlYiBQcm9qZWN0cy9zdXJha2FydGEtYWkvZGlzdC9pbmRleC5idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zaHVrYW50cGFsL1dlYiBQcm9qZWN0cy9zdXJha2FydGEtYWkvbm9kZV9tb2R1bGVzL2V2ZW50ZW1pdHRlcjMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zaHVrYW50cGFsL1dlYiBQcm9qZWN0cy9zdXJha2FydGEtYWkvbm9kZV9tb2R1bGVzL3N1cmFrYXJ0YS1hbmFseXNpcy9saWIvZGF0YS9Nb3ZlSGFuZGxlLmpzIiwid2VicGFjazovLy8vVXNlcnMvc2h1a2FudHBhbC9XZWIgUHJvamVjdHMvc3VyYWthcnRhLWFpL25vZGVfbW9kdWxlcy9zdXJha2FydGEtYW5hbHlzaXMvbGliL2RhdGEvUG9zaXRpb25IYW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zaHVrYW50cGFsL1dlYiBQcm9qZWN0cy9zdXJha2FydGEtYWkvbm9kZV9tb2R1bGVzL3N1cmFrYXJ0YS1hbmFseXNpcy9saWIvZGF0YS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3NodWthbnRwYWwvV2ViIFByb2plY3RzL3N1cmFrYXJ0YS1haS9ub2RlX21vZHVsZXMvc3VyYWthcnRhLWFuYWx5c2lzL2xpYi9ldmFsdWF0ZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3NodWthbnRwYWwvV2ViIFByb2plY3RzL3N1cmFrYXJ0YS1haS9ub2RlX21vZHVsZXMvc3VyYWthcnRhLWFuYWx5c2lzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3NodWthbnRwYWwvV2ViIFByb2plY3RzL3N1cmFrYXJ0YS1haS9ub2RlX21vZHVsZXMvc3VyYWthcnRhLWFuYWx5c2lzL2xpYi9pbmRleGVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvc2h1a2FudHBhbC9XZWIgUHJvamVjdHMvc3VyYWthcnRhLWFpL25vZGVfbW9kdWxlcy9zdXJha2FydGEtYW5hbHlzaXMvbGliL3NvcnRJbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3NodWthbnRwYWwvV2ViIFByb2plY3RzL3N1cmFrYXJ0YS1haS9ub2RlX21vZHVsZXMvc3VyYWthcnRhL2xpYi9Nb3ZlLmpzIiwid2VicGFjazovLy8vVXNlcnMvc2h1a2FudHBhbC9XZWIgUHJvamVjdHMvc3VyYWthcnRhLWFpL25vZGVfbW9kdWxlcy9zdXJha2FydGEvbGliL1BsYXllclN0YXRzLmpzIiwid2VicGFjazovLy8vVXNlcnMvc2h1a2FudHBhbC9XZWIgUHJvamVjdHMvc3VyYWthcnRhLWFpL25vZGVfbW9kdWxlcy9zdXJha2FydGEvbGliL1Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8vVXNlcnMvc2h1a2FudHBhbC9XZWIgUHJvamVjdHMvc3VyYWthcnRhLWFpL25vZGVfbW9kdWxlcy9zdXJha2FydGEvbGliL1N1cmFrYXJ0YS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3NodWthbnRwYWwvV2ViIFByb2plY3RzL3N1cmFrYXJ0YS1haS9ub2RlX21vZHVsZXMvc3VyYWthcnRhL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3NodWthbnRwYWwvV2ViIFByb2plY3RzL3N1cmFrYXJ0YS1haS9ub2RlX21vZHVsZXMvc3VyYWthcnRhL2xpYi9zdGVwLXV0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvc2h1a2FudHBhbC9XZWIgUHJvamVjdHMvc3VyYWthcnRhLWFpL25vZGVfbW9kdWxlcy9zdXJha2FydGEvbGliL3N0ZXAtdXRpbHMvdmFsaWRhdGVTdGVwLmpzIiwid2VicGFjazovLy8vVXNlcnMvc2h1a2FudHBhbC9XZWIgUHJvamVjdHMvc3VyYWthcnRhLWFpL25vZGVfbW9kdWxlcy9zdXJha2FydGEvbGliL3RyYXZlcnNlLXV0aWxzL0RpcmVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zaHVrYW50cGFsL1dlYiBQcm9qZWN0cy9zdXJha2FydGEtYWkvbm9kZV9tb2R1bGVzL3N1cmFrYXJ0YS9saWIvdHJhdmVyc2UtdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zaHVrYW50cGFsL1dlYiBQcm9qZWN0cy9zdXJha2FydGEtYWkvbm9kZV9tb2R1bGVzL3N1cmFrYXJ0YS9saWIvdHJhdmVyc2UtdXRpbHMvbG9vcC1pbmZvLmpzIiwid2VicGFjazovLy8vVXNlcnMvc2h1a2FudHBhbC9XZWIgUHJvamVjdHMvc3VyYWthcnRhLWFpL25vZGVfbW9kdWxlcy9zdXJha2FydGEvbGliL3RyYXZlcnNlLXV0aWxzL3BhdGgtZmluZGVyLmpzIiwid2VicGFjazovLy8uL3d3dy9qcy9BbmFseXNpc1dvcmtlci53b3JrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50ZW1pdHRlcjMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N1cmFrYXJ0YS9saWIvTW92ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3VyYWthcnRhL2xpYi9QbGF5ZXJTdGF0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3VyYWthcnRhL2xpYi9Qb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3VyYWthcnRhL2xpYi9TdXJha2FydGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N1cmFrYXJ0YS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N1cmFrYXJ0YS9saWIvc3RlcC11dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3VyYWthcnRhL2xpYi9zdGVwLXV0aWxzL3ZhbGlkYXRlU3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3VyYWthcnRhL2xpYi90cmF2ZXJzZS11dGlscy9EaXJlY3Rpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdXJha2FydGEvbGliL3RyYXZlcnNlLXV0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdXJha2FydGEvbGliL3RyYXZlcnNlLXV0aWxzL2xvb3AtaW5mby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3VyYWthcnRhL2xpYi90cmF2ZXJzZS11dGlscy9wYXRoLWZpbmRlci5qcyJdLCJuYW1lcyI6WyJ3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsInJvb3QiLCJmYWN0b3J5IiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3N1cmFrYXJ0YV9fIiwiX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9zdXJha2FydGFfYW5hbHlzaXNfXyIsIm1vZHVsZXMiLCJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiaSIsImwiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJnZXREZWZhdWx0IiwiZ2V0TW9kdWxlRXhwb3J0cyIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImV2YWwiLCJzZWxmIiwibWVzc2FnZUV2ZW50IiwiYWN0aW9uIiwic3VyYWthcnRhIiwiY29uc29sZSIsInN1cmFrYXJ0YV8iLCJTdXJha2FydGEiLCJjb21wdXRlZFBsYXkiLCJTdXJha2FydGFFbmdpbmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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Q0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLFVBQVU7QUFDdkIsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdDIiwiZmlsZSI6IjY5NDk0ZTI1N2NlYjY3MWI0MzhjLndvcmtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9kaXN0LWpzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vZGVfbW9kdWxlcy90aHJlYWQtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi93d3cvanMvQW5hbHlzaXNXb3JrZXIud29ya2VyLmpzXCIpO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwic3VyYWthcnRhXCIpLCByZXF1aXJlKFwic3VyYWthcnRhLWFuYWx5c2lzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInN1cmFrYXJ0YVwiLCBcInN1cmFrYXJ0YS1hbmFseXNpc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTS0FJXCJdID0gZmFjdG9yeShyZXF1aXJlKFwic3VyYWthcnRhXCIpLCByZXF1aXJlKFwic3VyYWthcnRhLWFuYWx5c2lzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTS0FJXCJdID0gZmFjdG9yeShyb290W1wiX1wiXSwgcm9vdFtcIl9cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9zdXJha2FydGFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9zdXJha2FydGFfYW5hbHlzaXNfXykge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9vcG9vbC9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9vcG9vbC9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5ldmFsKFwidmFyIFBvb2wgPSAoZnVuY3Rpb24gKCkge1xcbiAgICBmdW5jdGlvbiBQb29sKEZ1bmMpIHtcXG4gICAgICAgIHRoaXMucG9vbCA9IFtdO1xcbiAgICAgICAgdGhpcy5GdW5jID0gRnVuYztcXG4gICAgfVxcbiAgICBQb29sLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XFxuICAgICAgICBpZiAodGhpcy5wb29sLmxlbmd0aCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvb2wuc3BsaWNlKDAsIDEpWzBdO1xcbiAgICAgICAgfVxcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLkZ1bmMoKTtcXG4gICAgfTtcXG4gICAgUG9vbC5wcm90b3R5cGUucmVsZWFzZSA9IGZ1bmN0aW9uIChvYmopIHtcXG4gICAgICAgIGlmICh0aGlzLkZ1bmMucmVzZXQpIHtcXG4gICAgICAgICAgICB0aGlzLkZ1bmMucmVzZXQob2JqKTtcXG4gICAgICAgIH1cXG4gICAgICAgIHRoaXMucG9vbC5wdXNoKG9iaik7XFxuICAgIH07XFxuICAgIHJldHVybiBQb29sO1xcbn0pKCk7XFxubW9kdWxlLmV4cG9ydHMgPSBQb29sO1xcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL1NLQUkvLi9ub2RlX21vZHVsZXMvb3Bvb2wvaW5kZXguanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9Db21tb25Db250ZXh0LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvQ29tbW9uQ29udGV4dC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuZXZhbChcIlxcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcXFwiX19lc01vZHVsZVxcXCIsIHsgdmFsdWU6IHRydWUgfSk7XFxudmFyIG1lbV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9tZW0gKi8gXFxcIi4vc3JjL21lbS9pbmRleC50c1xcXCIpO1xcbnZhciBDb21tb25Db250ZXh0ID0gKGZ1bmN0aW9uICgpIHtcXG4gICAgZnVuY3Rpb24gQ29tbW9uQ29udGV4dChub0NhY2hlLCByZXF1ZXN0SGFuZGxlKSB7XFxuICAgICAgICBpZiAobm9DYWNoZSA9PT0gdm9pZCAwKSB7IG5vQ2FjaGUgPSBmYWxzZTsgfVxcbiAgICAgICAgaWYgKHJlcXVlc3RIYW5kbGUgPT09IHZvaWQgMCkgeyByZXF1ZXN0SGFuZGxlID0gMDsgfVxcbiAgICAgICAgdGhpcy5yZXF1ZXN0SGFuZGxlID0gcmVxdWVzdEhhbmRsZSB8fCBNYXRoLnJhbmRvbSgpICogKDEgPDwgMzApO1xcbiAgICAgICAgdGhpcy51c2VDYWNoZSA9ICFub0NhY2hlO1xcbiAgICB9XFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21tb25Db250ZXh0LnByb3RvdHlwZSwgXFxcImNhY2hlXFxcIiwge1xcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVzZUNhY2hlKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBlbHNlIGlmICghdGhpcy5fY2FjaGUpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGUgPSBuZXcgbWVtXzEuVHJhbnNwb3NpdGlvblRhYmxlKHsgbm9kZUxpbWl0OiA5MDAwIH0pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGU7XFxuICAgICAgICB9LFxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxcbiAgICB9KTtcXG4gICAgQ29tbW9uQ29udGV4dC5wb3N0VGhyZWFkQm91bmRhcnkgPSBmdW5jdGlvbiAoY29udGV4dCkge1xcbiAgICAgICAgcmV0dXJuIG5ldyBDb21tb25Db250ZXh0KCEhY29udGV4dC5jYWNoZSwgY29udGV4dC5yZXF1ZXN0SGFuZGxlKTtcXG4gICAgfTtcXG4gICAgcmV0dXJuIENvbW1vbkNvbnRleHQ7XFxufSgpKTtcXG5leHBvcnRzLkNvbW1vbkNvbnRleHQgPSBDb21tb25Db250ZXh0O1xcblxcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL1NLQUkvLi9zcmMvQ29tbW9uQ29udGV4dC50cz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL1NlYXJjaENvbnRleHQudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9TZWFyY2hDb250ZXh0LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5ldmFsKFwiXFxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XFxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XFxuICAgIHZhciByZXN1bHQgPSB7fTtcXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcXG4gICAgcmVzdWx0W1xcXCJkZWZhdWx0XFxcIl0gPSBtb2Q7XFxuICAgIHJldHVybiByZXN1bHQ7XFxufTtcXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcXFwiZGVmYXVsdFxcXCI6IG1vZCB9O1xcbn07XFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFxcXCJfX2VzTW9kdWxlXFxcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcXG52YXIgU0sgPSBfX2ltcG9ydFN0YXIoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgc3VyYWthcnRhICovIFxcXCJzdXJha2FydGFcXFwiKSk7XFxudmFyIENvbW1vbkNvbnRleHRfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vQ29tbW9uQ29udGV4dCAqLyBcXFwiLi9zcmMvQ29tbW9uQ29udGV4dC50c1xcXCIpO1xcbnZhciBvcG9vbF8xID0gX19pbXBvcnREZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oLyohIG9wb29sICovIFxcXCIuL25vZGVfbW9kdWxlcy9vcG9vbC9pbmRleC5qc1xcXCIpKTtcXG52YXIgU2VhcmNoQ29udGV4dCA9IChmdW5jdGlvbiAoKSB7XFxuICAgIGZ1bmN0aW9uIFNlYXJjaENvbnRleHQoKSB7XFxuICAgICAgICB0aGlzLnN1cmFrYXJ0YSA9IG51bGw7XFxuICAgICAgICB0aGlzLnBsYXllcklkID0gU0suTk9UX0ZJTExFRDtcXG4gICAgICAgIHRoaXMuc2VhcmNoRGVwdGggPSAwO1xcbiAgICAgICAgdGhpcy5kZXB0aExpbWl0ID0gMDtcXG4gICAgICAgIHRoaXMuYWxwaGEgPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XFxuICAgICAgICB0aGlzLmJldGEgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XFxuICAgICAgICB0aGlzLmNvbW1vbiA9IG51bGw7XFxuICAgIH1cXG4gICAgU2VhcmNoQ29udGV4dC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChzdXJha2FydGEsIHBsYXllcklkLCBkZXB0aExpbWl0LCBzZWFyY2hEZXB0aCkge1xcbiAgICAgICAgaWYgKHNlYXJjaERlcHRoID09PSB2b2lkIDApIHsgc2VhcmNoRGVwdGggPSAwOyB9XFxuICAgICAgICB0aGlzLnN1cmFrYXJ0YSA9IHN1cmFrYXJ0YTtcXG4gICAgICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZDtcXG4gICAgICAgIHRoaXMuZGVwdGhMaW1pdCA9IGRlcHRoTGltaXQ7XFxuICAgICAgICB0aGlzLnNlYXJjaERlcHRoID0gc2VhcmNoRGVwdGg7XFxuICAgICAgICB0aGlzLmFscGhhID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xcbiAgICAgICAgdGhpcy5iZXRhID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xcbiAgICB9O1xcbiAgICBTZWFyY2hDb250ZXh0LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgIHRoaXMuc3VyYWthcnRhID0gbnVsbDtcXG4gICAgICAgIHRoaXMucGxheWVySWQgPSAwO1xcbiAgICAgICAgdGhpcy5kZXB0aExpbWl0ID0gMDtcXG4gICAgICAgIHRoaXMuc2VhcmNoRGVwdGggPSAwO1xcbiAgICAgICAgdGhpcy5hbHBoYSA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcXG4gICAgICAgIHRoaXMuYmV0YSA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcXG4gICAgfTtcXG4gICAgU2VhcmNoQ29udGV4dC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgIFNlYXJjaENvbnRleHQucG9vbC5yZWxlYXNlKHRoaXMpO1xcbiAgICB9O1xcbiAgICBTZWFyY2hDb250ZXh0LnBvc3RUaHJlYWRCb3VuZGFyeSA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XFxuICAgICAgICB2YXIgbmV3Q29udGV4dCA9IG5ldyBTZWFyY2hDb250ZXh0KCk7XFxuICAgICAgICBuZXdDb250ZXh0LnN1cmFrYXJ0YSA9IGNvbnRleHQuc3VyYWthcnRhO1xcbiAgICAgICAgbmV3Q29udGV4dC5wbGF5ZXJJZCA9IGNvbnRleHQucGxheWVySWQ7XFxuICAgICAgICBuZXdDb250ZXh0LmRlcHRoTGltaXQgPSBjb250ZXh0LmRlcHRoTGltaXQ7XFxuICAgICAgICBuZXdDb250ZXh0LnNlYXJjaERlcHRoID0gY29udGV4dC5zZWFyY2hEZXB0aDtcXG4gICAgICAgIG5ld0NvbnRleHQuYWxwaGEgPSBjb250ZXh0LmFscGhhO1xcbiAgICAgICAgbmV3Q29udGV4dC5iZXRhID0gY29udGV4dC5iZXRhO1xcbiAgICAgICAgdmFyIF9hID0gY29udGV4dC5zdXJha2FydGEsIHN0YXRlcyA9IF9hLnN0YXRlcywgdHVybiA9IF9hLnR1cm47XFxuICAgICAgICBuZXdDb250ZXh0LnN1cmFrYXJ0YSA9IFNLLlN1cmFrYXJ0YS5mcm9tU3RhdGUoc3RhdGVzKTtcXG4gICAgICAgIG5ld0NvbnRleHQuc3VyYWthcnRhLnR1cm4gPSB0dXJuO1xcbiAgICAgICAgbmV3Q29udGV4dC5jb21tb24gPSBDb21tb25Db250ZXh0XzEuQ29tbW9uQ29udGV4dC5wb3N0VGhyZWFkQm91bmRhcnkoY29udGV4dC5jb21tb24pO1xcbiAgICAgICAgcmV0dXJuIG5ld0NvbnRleHQ7XFxuICAgIH07XFxuICAgIFNlYXJjaENvbnRleHQucG9vbCA9IG5ldyBvcG9vbF8xLmRlZmF1bHQoU2VhcmNoQ29udGV4dCk7XFxuICAgIHJldHVybiBTZWFyY2hDb250ZXh0O1xcbn0oKSk7XFxuZXhwb3J0cy5TZWFyY2hDb250ZXh0ID0gU2VhcmNoQ29udGV4dDtcXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KHN1cmFrYXJ0YSwgc2VhcmNoT3B0aW9ucykge1xcbiAgICBpZiAoc2VhcmNoT3B0aW9ucyA9PT0gdm9pZCAwKSB7IHNlYXJjaE9wdGlvbnMgPSB7IG5vQ2FjaGU6IGZhbHNlIH07IH1cXG4gICAgdmFyIGNvbnRleHQgPSBTZWFyY2hDb250ZXh0LnBvb2wuZ2V0KCk7XFxuICAgIGNvbnRleHQuaW5pdChzdXJha2FydGEsIHN1cmFrYXJ0YS50dXJuUGxheWVyLCA0KTtcXG4gICAgY29udGV4dC5jb21tb24gPSBuZXcgQ29tbW9uQ29udGV4dF8xLkNvbW1vbkNvbnRleHQoc2VhcmNoT3B0aW9ucy5ub0NhY2hlKTtcXG4gICAgcmV0dXJuIGNvbnRleHQ7XFxufVxcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XFxuZnVuY3Rpb24gY3JlYXRlSW5oZXJpdGVkQ29udGV4dChzdXJha2FydGEsIHBhcmVudCkge1xcbiAgICB2YXIgY29udGV4dCA9IFNlYXJjaENvbnRleHQucG9vbC5nZXQoKTtcXG4gICAgY29udGV4dC5zdXJha2FydGEgPSBzdXJha2FydGE7XFxuICAgIGNvbnRleHQucGxheWVySWQgPVxcbiAgICAgICAgcGFyZW50LnBsYXllcklkID09PSBTSy5CTEFDS19QTEFZRVIgPyBTSy5SRURfUExBWUVSIDogU0suQkxBQ0tfUExBWUVSO1xcbiAgICBjb250ZXh0LnNlYXJjaERlcHRoID0gcGFyZW50LnNlYXJjaERlcHRoICsgMTtcXG4gICAgY29udGV4dC5kZXB0aExpbWl0ID0gcGFyZW50LmRlcHRoTGltaXQ7XFxuICAgIGNvbnRleHQuYWxwaGEgPSAtcGFyZW50LmJldGE7XFxuICAgIGNvbnRleHQuYmV0YSA9IC1wYXJlbnQuYWxwaGE7XFxuICAgIGNvbnRleHQuY29tbW9uID0gcGFyZW50LmNvbW1vbjtcXG4gICAgcmV0dXJuIGNvbnRleHQ7XFxufVxcbmV4cG9ydHMuY3JlYXRlSW5oZXJpdGVkQ29udGV4dCA9IGNyZWF0ZUluaGVyaXRlZENvbnRleHQ7XFxuXFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vU0tBSS8uL3NyYy9TZWFyY2hDb250ZXh0LnRzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaW5kZXgudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW5kZXgudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5ldmFsKFwiXFxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XFxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1xcXCJ0aHJvd1xcXCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XFxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XFxuICAgIH0pO1xcbn07XFxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFxcXCJ0aHJvd1xcXCI6IHZlcmIoMSksIFxcXCJyZXR1cm5cXFwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFxcXCJmdW5jdGlvblxcXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XFxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XFxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcXFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlxcXCIpO1xcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XFxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcXFwicmV0dXJuXFxcIl0gOiBvcFswXSA/IHlbXFxcInRocm93XFxcIl0gfHwgKCh0ID0geVtcXFwicmV0dXJuXFxcIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XFxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XFxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XFxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XFxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcXG4gICAgfVxcbn07XFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFxcXCJfX2VzTW9kdWxlXFxcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcXG52YXIgc2VhcmNoXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3NlYXJjaCAqLyBcXFwiLi9zcmMvc2VhcmNoLnRzXFxcIik7XFxudmFyIFNlYXJjaENvbnRleHRfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vU2VhcmNoQ29udGV4dCAqLyBcXFwiLi9zcmMvU2VhcmNoQ29udGV4dC50c1xcXCIpO1xcbmZ1bmN0aW9uIHN1Z2dlc3RQbGF5KHN1cmFrYXJ0YSkge1xcbiAgICByZXR1cm4gc2VhcmNoXzEuc2VhcmNoKFNlYXJjaENvbnRleHRfMS5jcmVhdGVDb250ZXh0KHN1cmFrYXJ0YSkpO1xcbn1cXG5leHBvcnRzLnN1Z2dlc3RQbGF5ID0gc3VnZ2VzdFBsYXk7XFxuZnVuY3Rpb24gcGxheShzdXJha2FydGEpIHtcXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xcbiAgICAgICAgICAgIHJldHVybiBbMiwgc2VhcmNoXzEuc2VhcmNoKFNlYXJjaENvbnRleHRfMS5jcmVhdGVDb250ZXh0KHN1cmFrYXJ0YSkpXTtcXG4gICAgICAgIH0pO1xcbiAgICB9KTtcXG59XFxuZXhwb3J0cy5wbGF5ID0gcGxheTtcXG5mdW5jdGlvbiByZXNldFJlc291cmNlcygpIHtcXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XFxuICAgICAgICByZXR1cm4gWzJdO1xcbiAgICB9KTsgfSk7XFxufVxcbmV4cG9ydHMucmVzZXRSZXNvdXJjZXMgPSByZXNldFJlc291cmNlcztcXG5leHBvcnRzLmRlZmF1bHQgPSB7XFxuICAgIHN1Z2dlc3RQbGF5OiBzdWdnZXN0UGxheVxcbn07XFxuZXhwb3J0cy5BSSA9IHsgc3VnZ2VzdFBsYXk6IHN1Z2dlc3RQbGF5IH07XFxuXFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vU0tBSS8uL3NyYy9pbmRleC50cz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL21lbS9UcmFuc3Bvc2l0aW9uVGFibGUudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9tZW0vVHJhbnNwb3NpdGlvblRhYmxlLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5ldmFsKFwiXFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFxcXCJfX2VzTW9kdWxlXFxcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcXG52YXIgWm9icmlzdEhhc2hlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ab2JyaXN0SGFzaGVyICovIFxcXCIuL3NyYy9tZW0vWm9icmlzdEhhc2hlci50c1xcXCIpO1xcbmZ1bmN0aW9uIG5wb3cyKG4pIHtcXG4gICAgcmV0dXJuIDEgPDwgKDMxIC0gTWF0aC5jbHozMihuKSk7XFxufVxcbnZhciBUVEVudHJ5ID0gKGZ1bmN0aW9uICgpIHtcXG4gICAgZnVuY3Rpb24gVFRFbnRyeSgpIHtcXG4gICAgICAgIHRoaXMua2V5ID0gLTE7XFxuICAgICAgICB0aGlzLnZhbHVlID0gMDtcXG4gICAgICAgIHRoaXMuZGVwdGggPSAwO1xcbiAgICAgICAgdGhpcy5sYXN0SGl0ID0gMDtcXG4gICAgfVxcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVFRFbnRyeS5wcm90b3R5cGUsIFxcXCJ3ZWlnaHRcXFwiLCB7XFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICByZXR1cm4gLXRoaXMuZGVwdGggLSAyICogKHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5sYXN0SGl0KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXFxuICAgIH0pO1xcbiAgICBUVEVudHJ5LnByb3RvdHlwZS5mZWVkID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGRlcHRoKSB7XFxuICAgICAgICBpZiAodGhpcy53ZWlnaHQgPiAtZGVwdGgpIHtcXG4gICAgICAgICAgICByZXR1cm47XFxuICAgICAgICB9XFxuICAgICAgICB0aGlzLmtleSA9IGtleTtcXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcXG4gICAgICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcXG4gICAgICAgIHRoaXMubGFzdEhpdCA9IHBlcmZvcm1hbmNlLm5vdygpO1xcbiAgICB9O1xcbiAgICBUVEVudHJ5LnByb3RvdHlwZS5oaXQgPSBmdW5jdGlvbiAoKSB7XFxuICAgICAgICB0aGlzLmxhc3RIaXQgPSBwZXJmb3JtYW5jZS5ub3coKTtcXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xcbiAgICB9O1xcbiAgICByZXR1cm4gVFRFbnRyeTtcXG59KCkpO1xcbmV4cG9ydHMuVFRFbnRyeSA9IFRURW50cnk7XFxudmFyIFRyYW5zcG9zaXRpb25UYWJsZSA9IChmdW5jdGlvbiAoKSB7XFxuICAgIGZ1bmN0aW9uIFRyYW5zcG9zaXRpb25UYWJsZShvcHRpb25zKSB7XFxuICAgICAgICB0aGlzLm5vZGVMaW1pdCA9IG5wb3cyKG9wdGlvbnMubm9kZUxpbWl0KTtcXG4gICAgICAgIHZhciBzaXplID0gTWF0aC5mbG9vcih0aGlzLm5vZGVMaW1pdCAvIDMpO1xcbiAgICAgICAgdGhpcy5idWNrZXRzID0gbmV3IEFycmF5KHNpemUpO1xcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcXG4gICAgICAgICAgICB0aGlzLmJ1Y2tldHNbaV0gPSBuZXcgQXJyYXkoMyk7XFxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCAzOyBqKyspIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5idWNrZXRzW2ldW2pdID0gbmV3IFRURW50cnkoKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBab2JyaXN0SGFzaGVyXzEuaW5pdFpvYnJpc3QoKTtcXG4gICAgfVxcbiAgICBUcmFuc3Bvc2l0aW9uVGFibGUucHJvdG90eXBlLmhpdCA9IGZ1bmN0aW9uIChrZXksIHdpbGxGZWVkKSB7XFxuICAgICAgICBpZiAod2lsbEZlZWQgPT09IHZvaWQgMCkgeyB3aWxsRmVlZCA9IHRydWU7IH1cXG4gICAgICAgIHZhciBidWNrZXQgPSB0aGlzLmJ1Y2tldHNba2V5ICUgdGhpcy5idWNrZXRzLmxlbmd0aF07XFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1Y2tldC5sZW5ndGg7IGkrKykge1xcbiAgICAgICAgICAgIGlmIChidWNrZXRbaV0ua2V5ID09IGtleSkge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVja2V0W2ldLmhpdCgpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIGlmICh3aWxsRmVlZCkge1xcbiAgICAgICAgICAgIHZhciB3b3JzdEVudHJ5ID0gYnVja2V0WzBdO1xcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYnVja2V0Lmxlbmd0aDsgaSsrKSB7XFxuICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IGJ1Y2tldFtpXTtcXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LndlaWdodCA8IHdvcnN0RW50cnkud2VpZ2h0KSB7XFxuICAgICAgICAgICAgICAgICAgICB3b3JzdEVudHJ5ID0gZW50cnk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgcmV0dXJuIHdvcnN0RW50cnk7XFxuICAgICAgICB9XFxuICAgICAgICByZXR1cm4gbnVsbDtcXG4gICAgfTtcXG4gICAgcmV0dXJuIFRyYW5zcG9zaXRpb25UYWJsZTtcXG59KCkpO1xcbmV4cG9ydHMuVHJhbnNwb3NpdGlvblRhYmxlID0gVHJhbnNwb3NpdGlvblRhYmxlO1xcblxcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL1NLQUkvLi9zcmMvbWVtL1RyYW5zcG9zaXRpb25UYWJsZS50cz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL21lbS9ab2JyaXN0SGFzaGVyLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL21lbS9ab2JyaXN0SGFzaGVyLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuZXZhbChcIlxcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcXFwiX19lc01vZHVsZVxcXCIsIHsgdmFsdWU6IHRydWUgfSk7XFxudmFyIGJhc2VDb2RlcyA9IFtdO1xcbnZhciBpc0luaXQgPSBmYWxzZTtcXG5mdW5jdGlvbiBpbml0Wm9icmlzdCgpIHtcXG4gICAgaWYgKGlzSW5pdCkge1xcbiAgICAgICAgcmV0dXJuO1xcbiAgICB9XFxuICAgIGZvciAodmFyIHBsYXllciA9IC0xOyBwbGF5ZXIgPD0gMTsgcGxheWVyKyspIHtcXG4gICAgICAgIHZhciBwbGF5ZXJIYXNoZXMgPSBuZXcgQXJyYXkoMzYpO1xcbiAgICAgICAgZm9yICh2YXIgcG9zID0gMDsgcG9zIDwgMzY7IHBvcysrKSB7XFxuICAgICAgICAgICAgcGxheWVySGFzaGVzW3Bvc10gPSBNYXRoLnJhbmRvbSgpICogKDEgPDwgMzApO1xcbiAgICAgICAgfVxcbiAgICAgICAgYmFzZUNvZGVzW3BsYXllcl0gPSBwbGF5ZXJIYXNoZXM7XFxuICAgIH1cXG4gICAgaXNJbml0ID0gdHJ1ZTtcXG59XFxuZXhwb3J0cy5pbml0Wm9icmlzdCA9IGluaXRab2JyaXN0O1xcbmZ1bmN0aW9uIGhhc2gobm9kZSkge1xcbiAgICBpbml0Wm9icmlzdCgpO1xcbiAgICB2YXIgaGFzaENvZGUgPSAwO1xcbiAgICBmb3IgKHZhciBwID0gMDsgcCA8IDM2OyBwKyspIHtcXG4gICAgICAgIGhhc2hDb2RlIF49IGJhc2VDb2Rlc1tub2RlLnN0YXRlc1twXV1bcF07XFxuICAgIH1cXG4gICAgcmV0dXJuIGhhc2hDb2RlO1xcbn1cXG5leHBvcnRzLmhhc2ggPSBoYXNoO1xcblxcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL1NLQUkvLi9zcmMvbWVtL1pvYnJpc3RIYXNoZXIudHM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9tZW0vaW5kZXgudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL21lbS9pbmRleC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5ldmFsKFwiXFxuZnVuY3Rpb24gX19leHBvcnQobSkge1xcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XFxufVxcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcXFwiX19lc01vZHVsZVxcXCIsIHsgdmFsdWU6IHRydWUgfSk7XFxuX19leHBvcnQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ab2JyaXN0SGFzaGVyICovIFxcXCIuL3NyYy9tZW0vWm9icmlzdEhhc2hlci50c1xcXCIpKTtcXG5fX2V4cG9ydChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1RyYW5zcG9zaXRpb25UYWJsZSAqLyBcXFwiLi9zcmMvbWVtL1RyYW5zcG9zaXRpb25UYWJsZS50c1xcXCIpKTtcXG5cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9TS0FJLy4vc3JjL21lbS9pbmRleC50cz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3NlYXJjaC50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvc2VhcmNoLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbmV2YWwoXCJcXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xcbiAgICByZXN1bHRbXFxcImRlZmF1bHRcXFwiXSA9IG1vZDtcXG4gICAgcmV0dXJuIHJlc3VsdDtcXG59O1xcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcXFwiX19lc01vZHVsZVxcXCIsIHsgdmFsdWU6IHRydWUgfSk7XFxudmFyIFNLID0gX19pbXBvcnRTdGFyKF9fd2VicGFja19yZXF1aXJlX18oLyohIHN1cmFrYXJ0YSAqLyBcXFwic3VyYWthcnRhXFxcIikpO1xcbnZhciBzdXJha2FydGFfYW5hbHlzaXNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIHN1cmFrYXJ0YS1hbmFseXNpcyAqLyBcXFwic3VyYWthcnRhLWFuYWx5c2lzXFxcIik7XFxudmFyIFNlYXJjaENvbnRleHRfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vU2VhcmNoQ29udGV4dCAqLyBcXFwiLi9zcmMvU2VhcmNoQ29udGV4dC50c1xcXCIpO1xcbnZhciBtZW1fMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbWVtICovIFxcXCIuL3NyYy9tZW0vaW5kZXgudHNcXFwiKTtcXG52YXIgaW5mbGF0ZUhhbmRsZSA9IHN1cmFrYXJ0YV9hbmFseXNpc18xLk1vdmVIZWxwZXIuaW5mbGF0ZUhhbmRsZTtcXG52YXIgQWdncmVnYXRlID0gKGZ1bmN0aW9uICgpIHtcXG4gICAgZnVuY3Rpb24gQWdncmVnYXRlKCkge1xcbiAgICAgICAgdGhpcy5pbmRleGVkID0gW107XFxuICAgIH1cXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFnZ3JlZ2F0ZS5wcm90b3R5cGUsIFxcXCJsZW5ndGhcXFwiLCB7XFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbmRleGVkLmxlbmd0aDtcXG4gICAgICAgIH0sXFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXFxuICAgIH0pO1xcbiAgICBBZ2dyZWdhdGUucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcXG4gICAgICAgIHZhciBtb3ZlVGFyZ2V0ID0gbmV3IFNLLk1vdmUoKTtcXG4gICAgICAgIHRoaXMuaW5kZXhlZC5mb3JFYWNoKGZ1bmN0aW9uIChtb3ZlSGFuZGxlKSB7XFxuICAgICAgICAgICAgY2FsbGJhY2soaW5mbGF0ZUhhbmRsZShtb3ZlSGFuZGxlLCBtb3ZlVGFyZ2V0KSk7XFxuICAgICAgICB9KTtcXG4gICAgfTtcXG4gICAgQWdncmVnYXRlLmZyb20gPSBmdW5jdGlvbiAoY29udGV4dCkge1xcbiAgICAgICAgdmFyIHN1cmFrYXJ0YSA9IGNvbnRleHQuc3VyYWthcnRhO1xcbiAgICAgICAgdmFyIG1vdmVzQXJyYXkgPSBuZXcgQWdncmVnYXRlKCk7XFxuICAgICAgICBzdXJha2FydGFfYW5hbHlzaXNfMS5JbmRleGVyLmluZGV4KHN1cmFrYXJ0YSwgbW92ZXNBcnJheS5pbmRleGVkKTtcXG4gICAgICAgIHN1cmFrYXJ0YV9hbmFseXNpc18xLnNvcnRJbmRleChzdXJha2FydGEsIG1vdmVzQXJyYXkuaW5kZXhlZCk7XFxuICAgICAgICByZXR1cm4gbW92ZXNBcnJheTtcXG4gICAgfTtcXG4gICAgcmV0dXJuIEFnZ3JlZ2F0ZTtcXG59KCkpO1xcbnZhciBzdXJha2FydGFQb29sID0gW107XFxuZnVuY3Rpb24gc2VhcmNoKGNvbnRleHQpIHtcXG4gICAgdmFyIHN1cmFrYXJ0YSA9IGNvbnRleHQuc3VyYWthcnRhLCBwbGF5ZXJJZCA9IGNvbnRleHQucGxheWVySWQsIHNlYXJjaERlcHRoID0gY29udGV4dC5zZWFyY2hEZXB0aCwgZGVwdGhMaW1pdCA9IGNvbnRleHQuZGVwdGhMaW1pdDtcXG4gICAgaWYgKHNlYXJjaERlcHRoID09PSBkZXB0aExpbWl0KSB7XFxuICAgICAgICByZXR1cm4gKDIgKiBwbGF5ZXJJZCAtIDEpICogc3VyYWthcnRhX2FuYWx5c2lzXzEuZXZhbHVhdGUoc3VyYWthcnRhKTtcXG4gICAgfVxcbiAgICB2YXIgaGl0O1xcbiAgICB2YXIgaGFzaENvZGUgPSBtZW1fMS5oYXNoKHN1cmFrYXJ0YSk7XFxuICAgIGlmIChjb250ZXh0LmNvbW1vbi5jYWNoZSAmJiBzZWFyY2hEZXB0aCA+IDApIHtcXG4gICAgICAgIGhpdCA9IGNvbnRleHQuY29tbW9uLmNhY2hlLmhpdChoYXNoQ29kZSk7XFxuICAgICAgICBpZiAodHlwZW9mIGhpdCA9PT0gXFxcIm51bWJlclxcXCIpIHtcXG4gICAgICAgICAgICByZXR1cm4gaGl0O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIHZhciBjaGlsZFN0YXRlID0gc3VyYWthcnRhUG9vbC5wb3AoKSB8fCBuZXcgU0suU3VyYWthcnRhKHRydWUpO1xcbiAgICBjaGlsZFN0YXRlLmNvcHlGcm9tKHN1cmFrYXJ0YSk7XFxuICAgIGNoaWxkU3RhdGUudHVybiA9IHN1cmFrYXJ0YS50dXJuO1xcbiAgICB2YXIgbW92ZXNJdGVyYWJsZSA9IEFnZ3JlZ2F0ZS5mcm9tKGNvbnRleHQpO1xcbiAgICB2YXIgYmVzdE1vdmUgPSBudWxsO1xcbiAgICB2YXIgYmVzdFZhbHVlID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xcbiAgICB2YXIgc3RvcHBlZCA9IGZhbHNlO1xcbiAgICBtb3Zlc0l0ZXJhYmxlLmZvckVhY2goZnVuY3Rpb24gKG1vdmUpIHtcXG4gICAgICAgIGlmIChzdG9wcGVkKSB7XFxuICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgfVxcbiAgICAgICAgY2hpbGRTdGF0ZS5zdGVwKG1vdmUuc3JjUm93LCBtb3ZlLnNyY0NvbHVtbiwgbW92ZS5kc3RSb3csIG1vdmUuZHN0Q29sdW1uLCB0cnVlLCBtb3ZlLmlzQXR0YWNrKTtcXG4gICAgICAgICsrY2hpbGRTdGF0ZS50dXJuO1xcbiAgICAgICAgdmFyIHZhbHVlID0gLXNlYXJjaChTZWFyY2hDb250ZXh0XzEuY3JlYXRlSW5oZXJpdGVkQ29udGV4dChjaGlsZFN0YXRlLCBjb250ZXh0KSk7XFxuICAgICAgICBpZiAodmFsdWUgPiBiZXN0VmFsdWUpIHtcXG4gICAgICAgICAgICBpZiAoc2VhcmNoRGVwdGggPT09IDApIHtcXG4gICAgICAgICAgICAgICAgYmVzdE1vdmUgPSBtb3ZlLmNsb25lKCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGJlc3RWYWx1ZSA9IHZhbHVlO1xcbiAgICAgICAgfVxcbiAgICAgICAgY29udGV4dC5hbHBoYSA9IE1hdGgubWF4KGNvbnRleHQuYWxwaGEsIHZhbHVlKTtcXG4gICAgICAgIGlmIChjb250ZXh0LmFscGhhID49IGNvbnRleHQuYmV0YSkge1xcbiAgICAgICAgICAgIHN0b3BwZWQgPSB0cnVlO1xcbiAgICAgICAgfVxcbiAgICAgICAgY2hpbGRTdGF0ZS5jb3B5RnJvbShzdXJha2FydGEpO1xcbiAgICAgICAgLS1jaGlsZFN0YXRlLnR1cm47XFxuICAgIH0pO1xcbiAgICBpZiAoc2VhcmNoRGVwdGggPT09IDApIHtcXG4gICAgICAgIHJldHVybiBiZXN0TW92ZTtcXG4gICAgfVxcbiAgICBpZiAoaGl0KSB7XFxuICAgICAgICBoaXQuZmVlZChoYXNoQ29kZSwgYmVzdFZhbHVlLCBzZWFyY2hEZXB0aCk7XFxuICAgIH1cXG4gICAgY29udGV4dC5kZXN0cm95KCk7XFxuICAgIHJldHVybiBiZXN0VmFsdWU7XFxufVxcbmV4cG9ydHMuc2VhcmNoID0gc2VhcmNoO1xcblxcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL1NLQUkvLi9zcmMvc2VhcmNoLnRzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwic3VyYWthcnRhXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJzdXJha2FydGFcIixcImNvbW1vbmpzMlwiOlwic3VyYWthcnRhXCIsXCJhbWRcIjpcInN1cmFrYXJ0YVwiLFwicm9vdFwiOlwiX1wifSAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5ldmFsKFwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3N1cmFrYXJ0YV9fO1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL1NLQUkvZXh0ZXJuYWxfJTdCJTIyY29tbW9uanMlMjI6JTIyc3VyYWthcnRhJTIyLCUyMmNvbW1vbmpzMiUyMjolMjJzdXJha2FydGElMjIsJTIyYW1kJTIyOiUyMnN1cmFrYXJ0YSUyMiwlMjJyb290JTIyOiUyMl8lMjIlN0Q/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJzdXJha2FydGEtYW5hbHlzaXNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInN1cmFrYXJ0YS1hbmFseXNpc1wiLFwiY29tbW9uanMyXCI6XCJzdXJha2FydGEtYW5hbHlzaXNcIixcImFtZFwiOlwic3VyYWthcnRhLWFuYWx5c2lzXCIsXCJyb290XCI6XCJfXCJ9ICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmV2YWwoXCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfc3VyYWthcnRhX2FuYWx5c2lzX187XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vU0tBSS9leHRlcm5hbF8lN0IlMjJjb21tb25qcyUyMjolMjJzdXJha2FydGEtYW5hbHlzaXMlMjIsJTIyY29tbW9uanMyJTIyOiUyMnN1cmFrYXJ0YS1hbmFseXNpcyUyMiwlMjJhbWQlMjI6JTIyc3VyYWthcnRhLWFuYWx5c2lzJTIyLCUyMnJvb3QlMjI6JTIyXyUyMiU3RD9cIik7XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAsIHByZWZpeCA9ICd+JztcblxuLyoqXG4gKiBDb25zdHJ1Y3RvciB0byBjcmVhdGUgYSBzdG9yYWdlIGZvciBvdXIgYEVFYCBvYmplY3RzLlxuICogQW4gYEV2ZW50c2AgaW5zdGFuY2UgaXMgYSBwbGFpbiBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyBhcmUgZXZlbnQgbmFtZXMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBFdmVudHMoKSB7fVxuXG4vL1xuLy8gV2UgdHJ5IHRvIG5vdCBpbmhlcml0IGZyb20gYE9iamVjdC5wcm90b3R5cGVgLiBJbiBzb21lIGVuZ2luZXMgY3JlYXRpbmcgYW5cbi8vIGluc3RhbmNlIGluIHRoaXMgd2F5IGlzIGZhc3RlciB0aGFuIGNhbGxpbmcgYE9iamVjdC5jcmVhdGUobnVsbClgIGRpcmVjdGx5LlxuLy8gSWYgYE9iamVjdC5jcmVhdGUobnVsbClgIGlzIG5vdCBzdXBwb3J0ZWQgd2UgcHJlZml4IHRoZSBldmVudCBuYW1lcyB3aXRoIGFcbi8vIGNoYXJhY3RlciB0byBtYWtlIHN1cmUgdGhhdCB0aGUgYnVpbHQtaW4gb2JqZWN0IHByb3BlcnRpZXMgYXJlIG5vdFxuLy8gb3ZlcnJpZGRlbiBvciB1c2VkIGFzIGFuIGF0dGFjayB2ZWN0b3IuXG4vL1xuaWYgKE9iamVjdC5jcmVhdGUpIHtcbiAgRXZlbnRzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgLy9cbiAgLy8gVGhpcyBoYWNrIGlzIG5lZWRlZCBiZWNhdXNlIHRoZSBgX19wcm90b19fYCBwcm9wZXJ0eSBpcyBzdGlsbCBpbmhlcml0ZWQgaW5cbiAgLy8gc29tZSBvbGQgYnJvd3NlcnMgbGlrZSBBbmRyb2lkIDQsIGlQaG9uZSA1LjEsIE9wZXJhIDExIGFuZCBTYWZhcmkgNS5cbiAgLy9cbiAgaWYgKCFuZXcgRXZlbnRzKCkuX19wcm90b19fKSBwcmVmaXggPSBmYWxzZTtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIHNpbmdsZSBldmVudCBsaXN0ZW5lci5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHBhcmFtIHtCb29sZWFufSBbb25jZT1mYWxzZV0gU3BlY2lmeSBpZiB0aGUgbGlzdGVuZXIgaXMgYSBvbmUtdGltZSBsaXN0ZW5lci5cbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRUUoZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgdGhpcy5mbiA9IGZuO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLm9uY2UgPSBvbmNlIHx8IGZhbHNlO1xufVxuXG4vKipcbiAqIEFkZCBhIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyIFJlZmVyZW5jZSB0byB0aGUgYEV2ZW50RW1pdHRlcmAgaW5zdGFuY2UuXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIFNwZWNpZnkgaWYgdGhlIGxpc3RlbmVyIGlzIGEgb25lLXRpbWUgbGlzdGVuZXIuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkTGlzdGVuZXIoZW1pdHRlciwgZXZlbnQsIGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICB2YXIgbGlzdGVuZXIgPSBuZXcgRUUoZm4sIGNvbnRleHQgfHwgZW1pdHRlciwgb25jZSlcbiAgICAsIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCFlbWl0dGVyLl9ldmVudHNbZXZ0XSkgZW1pdHRlci5fZXZlbnRzW2V2dF0gPSBsaXN0ZW5lciwgZW1pdHRlci5fZXZlbnRzQ291bnQrKztcbiAgZWxzZSBpZiAoIWVtaXR0ZXIuX2V2ZW50c1tldnRdLmZuKSBlbWl0dGVyLl9ldmVudHNbZXZ0XS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZSBlbWl0dGVyLl9ldmVudHNbZXZ0XSA9IFtlbWl0dGVyLl9ldmVudHNbZXZ0XSwgbGlzdGVuZXJdO1xuXG4gIHJldHVybiBlbWl0dGVyO1xufVxuXG4vKipcbiAqIENsZWFyIGV2ZW50IGJ5IG5hbWUuXG4gKlxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IGVtaXR0ZXIgUmVmZXJlbmNlIHRvIHRoZSBgRXZlbnRFbWl0dGVyYCBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldnQgVGhlIEV2ZW50IG5hbWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjbGVhckV2ZW50KGVtaXR0ZXIsIGV2dCkge1xuICBpZiAoLS1lbWl0dGVyLl9ldmVudHNDb3VudCA9PT0gMCkgZW1pdHRlci5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICBlbHNlIGRlbGV0ZSBlbWl0dGVyLl9ldmVudHNbZXZ0XTtcbn1cblxuLyoqXG4gKiBNaW5pbWFsIGBFdmVudEVtaXR0ZXJgIGludGVyZmFjZSB0aGF0IGlzIG1vbGRlZCBhZ2FpbnN0IHRoZSBOb2RlLmpzXG4gKiBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG59XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IGxpc3RpbmcgdGhlIGV2ZW50cyBmb3Igd2hpY2ggdGhlIGVtaXR0ZXIgaGFzIHJlZ2lzdGVyZWRcbiAqIGxpc3RlbmVycy5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHZhciBuYW1lcyA9IFtdXG4gICAgLCBldmVudHNcbiAgICAsIG5hbWU7XG5cbiAgaWYgKHRoaXMuX2V2ZW50c0NvdW50ID09PSAwKSByZXR1cm4gbmFtZXM7XG5cbiAgZm9yIChuYW1lIGluIChldmVudHMgPSB0aGlzLl9ldmVudHMpKSB7XG4gICAgaWYgKGhhcy5jYWxsKGV2ZW50cywgbmFtZSkpIG5hbWVzLnB1c2gocHJlZml4ID8gbmFtZS5zbGljZSgxKSA6IG5hbWUpO1xuICB9XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICByZXR1cm4gbmFtZXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZXZlbnRzKSk7XG4gIH1cblxuICByZXR1cm4gbmFtZXM7XG59O1xuXG4vKipcbiAqIFJldHVybiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0FycmF5fSBUaGUgcmVnaXN0ZXJlZCBsaXN0ZW5lcnMuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKGV2ZW50KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBoYW5kbGVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmICghaGFuZGxlcnMpIHJldHVybiBbXTtcbiAgaWYgKGhhbmRsZXJzLmZuKSByZXR1cm4gW2hhbmRsZXJzLmZuXTtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGhhbmRsZXJzLmxlbmd0aCwgZWUgPSBuZXcgQXJyYXkobCk7IGkgPCBsOyBpKyspIHtcbiAgICBlZVtpXSA9IGhhbmRsZXJzW2ldLmZuO1xuICB9XG5cbiAgcmV0dXJuIGVlO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIG51bWJlciBvZiBsaXN0ZW5lcnMgbGlzdGVuaW5nIHRvIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge051bWJlcn0gVGhlIG51bWJlciBvZiBsaXN0ZW5lcnMuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uIGxpc3RlbmVyQ291bnQoZXZlbnQpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnRcbiAgICAsIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmICghbGlzdGVuZXJzKSByZXR1cm4gMDtcbiAgaWYgKGxpc3RlbmVycy5mbikgcmV0dXJuIDE7XG4gIHJldHVybiBsaXN0ZW5lcnMubGVuZ3RoO1xufTtcblxuLyoqXG4gKiBDYWxscyBlYWNoIG9mIHRoZSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBldmVudCBoYWQgbGlzdGVuZXJzLCBlbHNlIGBmYWxzZWAuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoZXZlbnQsIGExLCBhMiwgYTMsIGE0LCBhNSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdXG4gICAgLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBhcmdzXG4gICAgLCBpO1xuXG4gIGlmIChsaXN0ZW5lcnMuZm4pIHtcbiAgICBpZiAobGlzdGVuZXJzLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVycy5mbiwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICBjYXNlIDE6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCksIHRydWU7XG4gICAgICBjYXNlIDI6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEpLCB0cnVlO1xuICAgICAgY2FzZSAzOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiksIHRydWU7XG4gICAgICBjYXNlIDQ6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMyksIHRydWU7XG4gICAgICBjYXNlIDU6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQpLCB0cnVlO1xuICAgICAgY2FzZSA2OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0LCBhNSksIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMSwgYXJncyA9IG5ldyBBcnJheShsZW4gLTEpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mbi5hcHBseShsaXN0ZW5lcnMuY29udGV4dCwgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGhcbiAgICAgICwgajtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXS5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnNbaV0uZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICAgIGNhc2UgMTogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQpOyBicmVhaztcbiAgICAgICAgY2FzZSAyOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEpOyBicmVhaztcbiAgICAgICAgY2FzZSAzOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEsIGEyKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgNDogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMiwgYTMpOyBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoIWFyZ3MpIGZvciAoaiA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICBhcmdzW2ogLSAxXSA9IGFyZ3VtZW50c1tqXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaXN0ZW5lcnNbaV0uZm4uYXBwbHkobGlzdGVuZXJzW2ldLmNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICByZXR1cm4gYWRkTGlzdGVuZXIodGhpcywgZXZlbnQsIGZuLCBjb250ZXh0LCBmYWxzZSk7XG59O1xuXG4vKipcbiAqIEFkZCBhIG9uZS10aW1lIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2NvbnRleHQ9dGhpc10gVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICByZXR1cm4gYWRkTGlzdGVuZXIodGhpcywgZXZlbnQsIGZuLCBjb250ZXh0LCB0cnVlKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBsaXN0ZW5lcnMgb2YgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBPbmx5IHJlbW92ZSB0aGUgbGlzdGVuZXJzIHRoYXQgbWF0Y2ggdGhpcyBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBPbmx5IHJlbW92ZSB0aGUgbGlzdGVuZXJzIHRoYXQgaGF2ZSB0aGlzIGNvbnRleHQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9uY2UgT25seSByZW1vdmUgb25lLXRpbWUgbGlzdGVuZXJzLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiB0aGlzO1xuICBpZiAoIWZuKSB7XG4gICAgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmIChsaXN0ZW5lcnMuZm4pIHtcbiAgICBpZiAoXG4gICAgICBsaXN0ZW5lcnMuZm4gPT09IGZuICYmXG4gICAgICAoIW9uY2UgfHwgbGlzdGVuZXJzLm9uY2UpICYmXG4gICAgICAoIWNvbnRleHQgfHwgbGlzdGVuZXJzLmNvbnRleHQgPT09IGNvbnRleHQpXG4gICAgKSB7XG4gICAgICBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGkgPSAwLCBldmVudHMgPSBbXSwgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGxpc3RlbmVyc1tpXS5mbiAhPT0gZm4gfHxcbiAgICAgICAgKG9uY2UgJiYgIWxpc3RlbmVyc1tpXS5vbmNlKSB8fFxuICAgICAgICAoY29udGV4dCAmJiBsaXN0ZW5lcnNbaV0uY29udGV4dCAhPT0gY29udGV4dClcbiAgICAgICkge1xuICAgICAgICBldmVudHMucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vXG4gICAgLy8gUmVzZXQgdGhlIGFycmF5LCBvciByZW1vdmUgaXQgY29tcGxldGVseSBpZiB3ZSBoYXZlIG5vIG1vcmUgbGlzdGVuZXJzLlxuICAgIC8vXG4gICAgaWYgKGV2ZW50cy5sZW5ndGgpIHRoaXMuX2V2ZW50c1tldnRdID0gZXZlbnRzLmxlbmd0aCA9PT0gMSA/IGV2ZW50c1swXSA6IGV2ZW50cztcbiAgICBlbHNlIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIGxpc3RlbmVycywgb3IgdGhvc2Ugb2YgdGhlIHNwZWNpZmllZCBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gW2V2ZW50XSBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnQpIHtcbiAgdmFyIGV2dDtcblxuICBpZiAoZXZlbnQpIHtcbiAgICBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuICAgIGlmICh0aGlzLl9ldmVudHNbZXZ0XSkgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vXG4vLyBBbGlhcyBtZXRob2RzIG5hbWVzIGJlY2F1c2UgcGVvcGxlIHJvbGwgbGlrZSB0aGF0LlxuLy9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBwcmVmaXguXG4vL1xuRXZlbnRFbWl0dGVyLnByZWZpeGVkID0gcHJlZml4O1xuXG4vL1xuLy8gQWxsb3cgYEV2ZW50RW1pdHRlcmAgdG8gYmUgaW1wb3J0ZWQgYXMgbW9kdWxlIG5hbWVzcGFjZS5cbi8vXG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBtb2R1bGUuXG4vL1xuaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgbW9kdWxlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLk1vdmVIZWxwZXIgPSB2b2lkIDA7XG5cbnZhciBfc3VyYWthcnRhID0gcmVxdWlyZShcInN1cmFrYXJ0YVwiKTtcblxuLyoqXG4gKiBAbmFtZXNwYWNlIFNLLmFuYWx5c2lzXG4gKi9cbnZhciBNb3ZlSGVscGVyID0ge1xuICByb29tQml0U2l6ZTogMTIsXG4gIGNyZWF0ZUhhbmRsZTogZnVuY3Rpb24gY3JlYXRlSGFuZGxlKG1vdmUpIHtcbiAgICByZXR1cm4gbW92ZS5zcmNSb3cgfCBtb3ZlLnNyY0NvbHVtbiA8PCAzIHwgbW92ZS5kc3RSb3cgPDwgNiB8IG1vdmUuZHN0Q29sdW1uIDw8IDkgfCAobW92ZS5pc0F0dGFjayA/IDEgOiAwKSA8PCAxMiB8IChtb3ZlLmRpcmVjdGlvbiA+IDAgPyBtb3ZlLmRpcmVjdGlvbiA6IDApIDw8IDEzO1xuICB9LFxuICBidWlsZEhhbmRsZTogZnVuY3Rpb24gYnVpbGRIYW5kbGUoc3JjUm93LCBzcmNDb2x1bW4sIGRzdFJvdywgZHN0Q29sdW1uKSB7XG4gICAgdmFyIGlzQXR0YWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiBmYWxzZTtcbiAgICB2YXIgZGlyZWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiAtMTtcbiAgICByZXR1cm4gc3JjUm93IHwgc3JjQ29sdW1uIDw8IDMgfCBkc3RSb3cgPDwgNiB8IGRzdENvbHVtbiA8PCA5IHwgKGlzQXR0YWNrID8gMSA6IDApIDw8IDEyIHwgKGRpcmVjdGlvbiA+IDAgPyBkaXJlY3Rpb24gOiAwKSA8PCAxMztcbiAgfSxcbiAgZXhwYW5kSGFuZGxlOiBmdW5jdGlvbiBleHBhbmRIYW5kbGUoaGFuZGxlKSB7XG4gICAgcmV0dXJuIE1vdmVIZWxwZXIuaW5mbGF0ZUhhbmRsZShoYW5kbGUsIG5ldyBfc3VyYWthcnRhLk1vdmUoKSk7XG4gIH0sXG4gIGluZmxhdGVIYW5kbGU6IGZ1bmN0aW9uIGluZmxhdGVIYW5kbGUoaGFuZGxlLCBtb3ZlKSB7XG4gICAgdmFyIGlzQXR0YWNrID0gISEoaGFuZGxlID4+IDEyICYgMSk7XG4gICAgdmFyIGRpcmVjdGlvbiA9IGlzQXR0YWNrID8gaGFuZGxlID4+IDEzICYgMTUgOiAtMTtcbiAgICBtb3ZlLnNyY1JvdyA9IGhhbmRsZSAmIDc7XG4gICAgbW92ZS5zcmNDb2x1bW4gPSBoYW5kbGUgPj4gMyAmIDc7XG4gICAgbW92ZS5kc3RSb3cgPSBoYW5kbGUgPj4gNiAmIDc7XG4gICAgbW92ZS5kc3RDb2x1bW4gPSBoYW5kbGUgPj4gOSAmIDc7XG4gICAgbW92ZS5pc0F0dGFjayA9IGlzQXR0YWNrO1xuICAgIG1vdmUuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIHJldHVybiBtb3ZlO1xuICB9LFxuICBzdG9yZUluUm9vbTogZnVuY3Rpb24gc3RvcmVJblJvb20oaGFuZGxlLCBkYXRhKSB7XG4gICAgcmV0dXJuIGhhbmRsZSB8IGRhdGEgPDwgMTg7XG4gIH0sXG4gIGluZmxhdGVSb29tOiBmdW5jdGlvbiBpbmZsYXRlUm9vbShoYW5kbGUpIHtcbiAgICByZXR1cm4gaGFuZGxlID4+IDE4O1xuICB9XG59O1xuZXhwb3J0cy5Nb3ZlSGVscGVyID0gTW92ZUhlbHBlcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuUG9zaXRpb25IZWxwZXIgPSB2b2lkIDA7XG5cbnZhciBfc3VyYWthcnRhID0gcmVxdWlyZShcInN1cmFrYXJ0YVwiKTtcblxuLyoqXG4gKiBAbmFtZXNwYWNlIFNLLmFuYWx5c2lzLlBvc2l0aW9uSGVscGVyXG4gKi9cbnZhciBQb3NpdGlvbkhlbHBlciA9IHtcbiAgY3JlYXRlSGFuZGxlOiBmdW5jdGlvbiBjcmVhdGVIYW5kbGUocG9zaXRpb24pIHtcbiAgICByZXR1cm4gcG9zaXRpb24ucm93IHwgcG9zaXRpb24uY29sdW1uIDw8IDM7XG4gIH0sXG4gIGJ1aWxkSGFuZGxlOiBmdW5jdGlvbiBidWlsZEhhbmRsZShyb3csIGNvbHVtbikge1xuICAgIHJldHVybiByb3cgfCBjb2x1bW4gPDwgMztcbiAgfSxcbiAgZXhwYW5kSGFuZGxlOiBmdW5jdGlvbiBleHBhbmRIYW5kbGUoaGFuZGxlKSB7XG4gICAgcmV0dXJuIFBvc2l0aW9uSGVscGVyLmluZmxhdGVIYW5kbGUoaGFuZGxlLCBuZXcgX3N1cmFrYXJ0YS5Qb3NpdGlvbigpKTtcbiAgfSxcbiAgaW5mbGF0ZUhhbmRsZTogZnVuY3Rpb24gaW5mbGF0ZUhhbmRsZShoYW5kbGUsIHBvc2l0aW9uKSB7XG4gICAgcG9zaXRpb24ucm93ID0gaGFuZGxlICYgNztcbiAgICBwb3NpdGlvbi5jb2x1bW4gPSBoYW5kbGUgPj4gMyAmIDc7XG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59O1xuZXhwb3J0cy5Qb3NpdGlvbkhlbHBlciA9IFBvc2l0aW9uSGVscGVyOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX01vdmVIYW5kbGUgPSByZXF1aXJlKFwiLi9Nb3ZlSGFuZGxlXCIpO1xuXG5PYmplY3Qua2V5cyhfTW92ZUhhbmRsZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX01vdmVIYW5kbGVba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfUG9zaXRpb25IYW5kbGUgPSByZXF1aXJlKFwiLi9Qb3NpdGlvbkhhbmRsZVwiKTtcblxuT2JqZWN0LmtleXMoX1Bvc2l0aW9uSGFuZGxlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfUG9zaXRpb25IYW5kbGVba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmV2YWx1YXRlID0gZXZhbHVhdGU7XG5cbnZhciBfc3VyYWthcnRhID0gcmVxdWlyZShcInN1cmFrYXJ0YVwiKTtcblxuZnVuY3Rpb24gaXNDb3JuZXIociwgYykge1xuICByZXR1cm4gKHIgPT09IGMgfHwgciA9PT0gNSAtIGMpICYmIChyID09PSAwIHx8IHIgPT09IDUpO1xufVxuXG5mdW5jdGlvbiBldmFsdWF0ZShzdXJha2FydGEpIHtcbiAgdmFyIGFkdmFudGFnZSA9IDA7XG4gIHN1cmFrYXJ0YS5mb3JFYWNoKGZ1bmN0aW9uIChwbGF5ZXIsIHJvdywgY29sdW1uKSB7XG4gICAgdmFyIHBlYmJsZVZhbHVlID0gMDtcblxuICAgIGlmIChwbGF5ZXIgPT09IF9zdXJha2FydGEuUkVEX1BMQVlFUikge1xuICAgICAgcGViYmxlVmFsdWUgPSAxO1xuICAgIH0gZWxzZSBpZiAocGxheWVyID09PSBfc3VyYWthcnRhLkJMQUNLX1BMQVlFUikge1xuICAgICAgcGViYmxlVmFsdWUgPSAtMTtcbiAgICB9XG5cbiAgICBpZiAoaXNDb3JuZXIocm93LCBjb2x1bW4pKSB7XG4gICAgICBwZWJibGVWYWx1ZSAqPSAwLjU7XG4gICAgfVxuXG4gICAgYWR2YW50YWdlICs9IHBlYmJsZVZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIGFkdmFudGFnZTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9pbmRleGVyID0gcmVxdWlyZShcIi4vaW5kZXhlclwiKTtcblxuT2JqZWN0LmtleXMoX2luZGV4ZXIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9pbmRleGVyW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2V2YWx1YXRlID0gcmVxdWlyZShcIi4vZXZhbHVhdGVcIik7XG5cbk9iamVjdC5rZXlzKF9ldmFsdWF0ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2V2YWx1YXRlW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2RhdGEgPSByZXF1aXJlKFwiLi9kYXRhXCIpO1xuXG5PYmplY3Qua2V5cyhfZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2RhdGFba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfc29ydEluZGV4ID0gcmVxdWlyZShcIi4vc29ydEluZGV4XCIpO1xuXG5PYmplY3Qua2V5cyhfc29ydEluZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfc29ydEluZGV4W2tleV07XG4gICAgfVxuICB9KTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5pbmRleFNpbmdsZVN0ZXBzRnJvbSA9IGluZGV4U2luZ2xlU3RlcHNGcm9tO1xuZXhwb3J0cy5pbmRleEF0dGFja3NGcm9tID0gaW5kZXhBdHRhY2tzRnJvbTtcbmV4cG9ydHMuaW5kZXhGcm9tID0gaW5kZXhGcm9tO1xuZXhwb3J0cy5pbmRleFNpbmdsZVN0ZXBzID0gaW5kZXhTaW5nbGVTdGVwcztcbmV4cG9ydHMuaW5kZXhBdHRhY2tzID0gaW5kZXhBdHRhY2tzO1xuZXhwb3J0cy5pbmRleCA9IGluZGV4O1xuZXhwb3J0cy5JbmRleGVyID0gdm9pZCAwO1xuXG52YXIgX3N1cmFrYXJ0YSA9IHJlcXVpcmUoXCJzdXJha2FydGFcIik7XG5cbnZhciBfZGF0YSA9IHJlcXVpcmUoXCIuL2RhdGFcIik7XG5cbnZhciBBVFRBQ0tfRElSRUNUSU9OUyA9IFtfc3VyYWthcnRhLkRpcmVjdGlvbnMuTEVGVCwgX3N1cmFrYXJ0YS5EaXJlY3Rpb25zLlVQLCBfc3VyYWthcnRhLkRpcmVjdGlvbnMuUklHSFQsIF9zdXJha2FydGEuRGlyZWN0aW9ucy5ET1dOXTtcblxudmFyIFBvc2l0aW9uREIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBidWZmZXIgPSBbXTtcblxuICBmb3IgKHZhciByID0gMDsgciA8IDY7IHIrKykge1xuICAgIGZvciAodmFyIGMgPSAwOyBjIDwgNjsgYysrKSB7XG4gICAgICBidWZmZXIucHVzaChuZXcgX3N1cmFrYXJ0YS5Qb3NpdGlvbihyLCBjKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZmZlcjtcbn0oKTtcbi8qKlxuICogSW5kZXhlcyBhbGwgdGhlIHBvc3NpYmxlIHNpbmdsZS1zdGVwIG1vdmVzIGZyb20gdGhlIGdpdmVuIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7U0suU3VyYWthcnRhfSBzdXJha2FydGEgLSBib2FyZCBzdGF0ZSBiZWZvcmUgdGhlIG1vdmVcbiAqIEBwYXJhbSB7U0suUG9zaXRpb259IGJhc2VQb3NpdGlvbiAtIHBvc2l0aW9uIG9mIHBlYmJsZSBiZWluZyBtb3ZlZFxuICogQHBhcmFtIHtBcnJheTxTSy5hbmFseXNpcy5Nb3ZlSGFuZGxlPn1baW5kZXhdIC0gYnVmZmVyIHRvIGFwcGVuZCBpbnRvXG4gKi9cblxuXG5mdW5jdGlvbiBpbmRleFNpbmdsZVN0ZXBzRnJvbShzdXJha2FydGEsIGJhc2VQb3NpdGlvbikge1xuICB2YXIgaW5kZXggPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFtdO1xuXG4gIGlmIChzdXJha2FydGEuc3RhdGVzW2Jhc2VQb3NpdGlvbi5pbmRleCgpXSAhPT0gc3VyYWthcnRhLnR1cm5QbGF5ZXIpIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICB2YXIgciA9IGJhc2VQb3NpdGlvbi5yb3csXG4gICAgICBjID0gYmFzZVBvc2l0aW9uLmNvbHVtbjtcblxuICBpZiAoc3VyYWthcnRhLnN0YXRlKHIsIGMgLSAxKSA9PT0gX3N1cmFrYXJ0YS5OT1RfRklMTEVEKSB7XG4gICAgaW5kZXgucHVzaChfZGF0YS5Nb3ZlSGVscGVyLmJ1aWxkSGFuZGxlKHIsIGMsIHIsIGMgLSAxKSk7XG4gIH1cblxuICBpZiAoc3VyYWthcnRhLnN0YXRlKHIgLSAxLCBjIC0gMSkgPT09IF9zdXJha2FydGEuTk9UX0ZJTExFRCkge1xuICAgIGluZGV4LnB1c2goX2RhdGEuTW92ZUhlbHBlci5idWlsZEhhbmRsZShyLCBjLCByIC0gMSwgYyAtIDEpKTtcbiAgfVxuXG4gIGlmIChzdXJha2FydGEuc3RhdGUociAtIDEsIGMpID09PSBfc3VyYWthcnRhLk5PVF9GSUxMRUQpIHtcbiAgICBpbmRleC5wdXNoKF9kYXRhLk1vdmVIZWxwZXIuYnVpbGRIYW5kbGUociwgYywgciAtIDEsIGMpKTtcbiAgfVxuXG4gIGlmIChzdXJha2FydGEuc3RhdGUociAtIDEsIGMgKyAxKSA9PT0gX3N1cmFrYXJ0YS5OT1RfRklMTEVEKSB7XG4gICAgaW5kZXgucHVzaChfZGF0YS5Nb3ZlSGVscGVyLmJ1aWxkSGFuZGxlKHIsIGMsIHIgLSAxLCBjICsgMSkpO1xuICB9XG5cbiAgaWYgKHN1cmFrYXJ0YS5zdGF0ZShyLCBjICsgMSkgPT09IF9zdXJha2FydGEuTk9UX0ZJTExFRCkge1xuICAgIGluZGV4LnB1c2goX2RhdGEuTW92ZUhlbHBlci5idWlsZEhhbmRsZShyLCBjLCByLCBjICsgMSkpO1xuICB9XG5cbiAgaWYgKHN1cmFrYXJ0YS5zdGF0ZShyICsgMSwgYyArIDEpID09PSBfc3VyYWthcnRhLk5PVF9GSUxMRUQpIHtcbiAgICBpbmRleC5wdXNoKF9kYXRhLk1vdmVIZWxwZXIuYnVpbGRIYW5kbGUociwgYywgciArIDEsIGMgKyAxKSk7XG4gIH1cblxuICBpZiAoc3VyYWthcnRhLnN0YXRlKHIgKyAxLCBjKSA9PT0gX3N1cmFrYXJ0YS5OT1RfRklMTEVEKSB7XG4gICAgaW5kZXgucHVzaChfZGF0YS5Nb3ZlSGVscGVyLmJ1aWxkSGFuZGxlKHIsIGMsIHIgKyAxLCBjKSk7XG4gIH1cblxuICBpZiAoc3VyYWthcnRhLnN0YXRlKHIgKyAxLCBjIC0gMSkgPT09IF9zdXJha2FydGEuTk9UX0ZJTExFRCkge1xuICAgIGluZGV4LnB1c2goX2RhdGEuTW92ZUhlbHBlci5idWlsZEhhbmRsZShyLCBjLCByICsgMSwgYyAtIDEpKTtcbiAgfVxuXG4gIHJldHVybiBpbmRleDtcbn1cbi8qKlxuICogSW5kZXhlcyBhbGwgcG9zc2libGUgYXR0YWNraW5nIG1vdmVzIGZyb20gdGhlIGdpdmVuIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7U0suU3VyYWthcnRhfSBzdXJha2FydGEgLSBib2FyZCBzdGF0ZSBiZWZvcmUgdGhlIGF0dGFja1xuICogQHBhcmFtIHtTSy5Qb3NpdGlvbn0gYmFzZVBvc2l0aW9uIC0gYXR0YWNraW5nIHBlYmJsZSdzIG9yaWdpbmFsIHBvc2l0aW9uXG4gKiBAcGFyYW0ge0FycmF5PFNLLmFuYWx5c2lzLk1vdmVIYW5kbGU+fVtpbmRleF0gLSBidWZmZXIgdG8gYXBwZW5kIGludG9cbiAqL1xuXG5cbmZ1bmN0aW9uIGluZGV4QXR0YWNrc0Zyb20oc3VyYWthcnRhLCBiYXNlUG9zaXRpb24pIHtcbiAgdmFyIGluZGV4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBbXTtcblxuICBpZiAoc3VyYWthcnRhLnN0YXRlc1tiYXNlUG9zaXRpb24uaW5kZXgoKV0gIT0gc3VyYWthcnRhLnR1cm5QbGF5ZXIpIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICB2YXIgYmFzZVJvdyA9IGJhc2VQb3NpdGlvbi5yb3csXG4gICAgICBiYXNlQ29sdW1uID0gYmFzZVBvc2l0aW9uLmNvbHVtbjsgLy8gQWxnb3JpdGhtIHNpbWlsYXIgdG8gU0suUGF0aEZpbmRlclxuXG4gIHZhciBwZWJibGUgPSBzdXJha2FydGEuc3RhdGUoYmFzZVBvc2l0aW9uLnJvdywgYmFzZVBvc2l0aW9uLmNvbHVtbik7XG4gIHZhciByb3c7XG4gIHZhciBjb2x1bW47XG4gIHZhciBkaXJlY3Rpb247XG4gIHZhciBzZWxmVG91Y2g7XG4gIHZhciBsb29wcztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIHJvdyA9IGJhc2VQb3NpdGlvbi5yb3c7XG4gICAgY29sdW1uID0gYmFzZVBvc2l0aW9uLmNvbHVtbjtcbiAgICBkaXJlY3Rpb24gPSBBVFRBQ0tfRElSRUNUSU9OU1tpXTtcbiAgICB2YXIgYmFzZURpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICBzZWxmVG91Y2ggPSAwO1xuICAgIGxvb3BzID0gMDtcbiAgICB2YXIgYnVpbGRlckJ1ZmZlciA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc3RhbnQtY29uZGl0aW9uXG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIG5leHQgPSB2b2lkIDA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIG5leHQgPSBfc3VyYWthcnRhLlBhdGhGaW5kZXIuZmluZFN0ZXAocm93LCBjb2x1bW4sIGRpcmVjdGlvbik7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGJyZWFrOyAvLyBpbGxlZ2FsIGF0dGFjayBwYXRoXG4gICAgICB9XG5cbiAgICAgIHJvdyA9IG5leHRbMF07XG4gICAgICBjb2x1bW4gPSBuZXh0WzFdO1xuICAgICAgdmFyIHNlbGYgPSBmYWxzZTtcblxuICAgICAgaWYgKHJvdyA9PT0gYmFzZVBvc2l0aW9uLnJvdyAmJiBjb2x1bW4gPT09IGJhc2VQb3NpdGlvbi5jb2x1bW4pIHtcbiAgICAgICAgKytzZWxmVG91Y2g7XG5cbiAgICAgICAgaWYgKHNlbGZUb3VjaCA+IDEpIHtcbiAgICAgICAgICBicmVhazsgLy8gcHJldmVudCBpbmZpbml0ZSBsb29wXG4gICAgICAgIH1cblxuICAgICAgICBzZWxmID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXRlID0gc3VyYWthcnRhLnN0YXRlKHJvdywgY29sdW1uKTtcblxuICAgICAgaWYgKCFzZWxmICYmIHN0YXRlID09PSBwZWJibGUpIHtcbiAgICAgICAgYnJlYWs7IC8vIGNhbid0IGNhcHR1cmUgb3VyIG93biBwZWJibGVcbiAgICAgIH1cblxuICAgICAgaWYgKG5leHQubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICsrbG9vcHM7XG4gICAgICAgIGRpcmVjdGlvbiA9IG5leHQuZGlyZWN0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAobG9vcHMgPj0gMSkge1xuICAgICAgICBidWlsZGVyQnVmZmVyLnB1c2goX2RhdGEuTW92ZUhlbHBlci5idWlsZEhhbmRsZShiYXNlUm93LCBiYXNlQ29sdW1uLCByb3csIGNvbHVtbiwgdHJ1ZSwgYmFzZURpcmVjdGlvbikpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgIT09IF9zdXJha2FydGEuTk9UX0ZJTExFRCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmRleC5wdXNoLmFwcGx5KGluZGV4LCBidWlsZGVyQnVmZmVyKTtcbiAgfVxuXG4gIHJldHVybiBpbmRleDtcbn1cbi8qKlxuICogSW5kZXhlcyBhbGwgcG9zc2libGUgbW92ZXMgZnJvbSBhIGdpdmVuIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7U0suU3VyYWthcnRhfSBzdXJha2FydGEgLSBib2FyZCBzdGF0ZSBiZWZvcmUgdGhlIG1vdmVcbiAqIEBwYXJhbSB7U0suUG9zaXRpb259IGJhc2VQb3NpdGlvbiAtIHBvc2l0aW9uIG9mIHBlYmJsZSBiZWluZyBtb3ZlZFxuICogQHBhcmFtIHtBcnJheTxNb3ZlSGFuZGxlPn0gaW5kZXggLSBidWZmZXIgdG8gYXBwZW5kIGludG9cbiAqL1xuXG5cbmZ1bmN0aW9uIGluZGV4RnJvbShzdXJha2FydGEsIGJhc2VQb3NpdGlvbiwgaW5kZXgpIHtcbiAgaW5kZXhBdHRhY2tzRnJvbShzdXJha2FydGEsIGJhc2VQb3NpdGlvbiwgaW5kZXgpO1xuICBpbmRleFNpbmdsZVN0ZXBzRnJvbShzdXJha2FydGEsIGJhc2VQb3NpdGlvbiwgaW5kZXgpO1xufVxuLyoqXG4gKiBJbmRleCBhbGwgcG9zc2libGUgc2luZ2xlLXN0ZXAgbW92ZXMgb24gdGhlIGdpdmVuIGJvYXJkLlxuICpcbiAqIEBwYXJhbSB7U0suU3VyYWthcnRhfSBzdXJha2FydGFcbiAqIEBwYXJhbSB7QXJyYXk8U0suYW5hbHlzaXMuTW92ZUhhbmRsZT59W2luZGV4XVxuICogQHBhcmFtIHtBcnJheTxTSy5Qb3NpdGlvbj59W3Bvc2l0aW9uc11cbiAqIEByZXR1cm5zIHtBcnJheTxTSy5hbmFseXNpcy5Nb3ZlSGFuZGxlPn0gaW5kZXhcbiAqL1xuXG5cbmZ1bmN0aW9uIGluZGV4U2luZ2xlU3RlcHMoc3VyYWthcnRhKSB7XG4gIHZhciBpbmRleCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogW107XG4gIHZhciBwb3NpdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFBvc2l0aW9uREI7XG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHBvc2l0aW9uc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgIHZhciBwb3MgPSBfc3RlcC52YWx1ZTtcbiAgICAgIGluZGV4U2luZ2xlU3RlcHNGcm9tKHN1cmFrYXJ0YSwgcG9zLCBpbmRleCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3JbXCJyZXR1cm5cIl0gIT0gbnVsbCkge1xuICAgICAgICBfaXRlcmF0b3JbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmRleDtcbn1cbi8qKlxuICogSW5kZXggYWxsIHBvc3NpYmxlIGF0dGFja3Mgb24gdGhlIGdpdmVuIGJvYXJkLlxuICpcbiAqIEBwYXJhbSB7U0suU3VyYWthcnRhfSBzdXJha2FydGFcbiAqIEBwYXJhbSB7QXJyYXk8U0suYW5hbHlzaXMuTW92ZUhhbmRsZT59W2luZGV4XVxuICogQHBhcmFtIHtBcnJheTxTSy5Qb3NpdGlvbj59W3Bvc2l0aW9uc11cbiAqIEByZXR1cm5zIHtBcnJheTxTSy5hbmFseXNpcy5Nb3ZlSGFuZGxlPn0gaW5kZXhcbiAqL1xuXG5cbmZ1bmN0aW9uIGluZGV4QXR0YWNrcyhzdXJha2FydGEpIHtcbiAgdmFyIGluZGV4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBbXTtcbiAgdmFyIHBvc2l0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogUG9zaXRpb25EQjtcbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IHBvc2l0aW9uc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgdmFyIHBvcyA9IF9zdGVwMi52YWx1ZTtcbiAgICAgIGluZGV4QXR0YWNrc0Zyb20oc3VyYWthcnRhLCBwb3MsIGluZGV4KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjJbXCJyZXR1cm5cIl0gIT0gbnVsbCkge1xuICAgICAgICBfaXRlcmF0b3IyW1wicmV0dXJuXCJdKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmRleDtcbn1cbi8qKlxuICogSW5kZXhlcyBhbGwgcG9zc2libGUgbW92ZXMgZm9yIGEgbm9kZS5cbiAqXG4gKiBAcGFyYW0ge1NLLlN1cmFrYXJ0YX0gc3VyYWthcnRhIC0gbm9kZSB0byBleHBsb3JlXG4gKiBAcGFyYW0ge0FycmF5PFNLLmFuYWx5c2lzLk1vdmVIYW5kbGU+fVtpbmRleD1bXV0gLSBidWZmZXIgdG8gYXBwZW5kIHRvXG4gKiBAcGFyYW0ge0FycmF5PFNLLlBvc2l0aW9uPn1bcG9zaXRpb25zXSAtIGluZGV4IG1vdmVzIG9ubHkgZnJvbSB0aGUgZ2l2ZW4gcG9zaXRpb25zXG4gKi9cblxuXG5mdW5jdGlvbiBpbmRleChzdXJha2FydGEpIHtcbiAgdmFyIGluZGV4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBbXTtcbiAgdmFyIHBvc2l0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICBpbmRleEF0dGFja3Moc3VyYWthcnRhLCBpbmRleCwgcG9zaXRpb25zKTtcbiAgaW5kZXhTaW5nbGVTdGVwcyhzdXJha2FydGEsIGluZGV4LCBwb3NpdGlvbnMpO1xuICByZXR1cm4gaW5kZXg7XG59XG5cbnZhciBJbmRleGVyID0ge1xuICBpbmRleDogaW5kZXgsXG4gIGluZGV4U2luZ2xlU3RlcHM6IGluZGV4U2luZ2xlU3RlcHMsXG4gIGluZGV4QXR0YWNrczogaW5kZXhBdHRhY2tzLFxuICBpbmRleFNpbmdsZVN0ZXBzRnJvbTogaW5kZXhTaW5nbGVTdGVwc0Zyb20sXG4gIGluZGV4QXR0YWNrc0Zyb206IGluZGV4QXR0YWNrc0Zyb21cbn07XG5leHBvcnRzLkluZGV4ZXIgPSBJbmRleGVyOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zb3J0SW5kZXggPSBzb3J0SW5kZXg7XG5cbnZhciBfc3VyYWthcnRhID0gcmVxdWlyZShcInN1cmFrYXJ0YVwiKTtcblxudmFyIF9ldmFsdWF0ZSA9IHJlcXVpcmUoXCIuL2V2YWx1YXRlXCIpO1xuXG52YXIgX2RhdGEgPSByZXF1aXJlKFwiLi9kYXRhXCIpO1xuXG4vKipcbiAqIFNvcnRzIHRoZSBpbmRleCBvZiBtb3ZlcyBpbi1wbGFjZSBieSBhbiBhcHByb3hpbWF0aW9uIG9mIGhvdyBcImdvb2RcIiB0aGV5XG4gKiBhcmUgd2hlbiB1c2VkIG9uIHRoZSBnaXZlbiBub2RlLlxuICpcbiAqIEBwYXJhbSB7U0suU3VyYWthcnRhfSBub2RlIC0gbm9kZSBvbiB3aGljaCBtb3ZlcyBhcmUgdG8gYmUgcGxheWVkXG4gKiBAcGFyYW0ge1NLLmFuYWx5c2lzLk1vdmVIYW5kbGVbXX0gaW5kZXggLSBpbmRleCBvZiBtb3ZlcyAoaW4gaGFuZGxlIGZvcm1hdClcbiAqIEByZXR1cm5zIHtTSy5hbmFseXNpcy5Nb3ZlSGFuZGxlcFtdfSAtIHRoZSBzYW1lIGluZGV4LCBzb3J0ZWRcbiAqL1xuZnVuY3Rpb24gc29ydEluZGV4KG5vZGUsIGluZGV4KSB7XG4gIHZhciBkZWVwTm9kZSA9IG5vZGUuY2xvbmUoKTtcbiAgdmFyIG1vdmUgPSBuZXcgX3N1cmFrYXJ0YS5Nb3ZlKCk7XG4gIHZhciBldmFsQ29lZiA9IDIgKiBub2RlLnR1cm4gLSAxOyAvLyBmbGlwIGV2YWx1YXRpb25zIGZvciBibGFjayBwbGF5ZXJcbiAgLy8gTWFwIGVhY2ggaGFuZGxlIHRvIG9uZSB3aXRoIGl0cyBldmFsdWF0aW9uXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmRleC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBoYW5kbGUgPSBpbmRleFtpXTtcbiAgICBkZWVwTm9kZS5jb3B5RnJvbShub2RlKTtcbiAgICBkZWVwTm9kZS50dXJuID0gbm9kZS50dXJuO1xuXG4gICAgX2RhdGEuTW92ZUhlbHBlci5pbmZsYXRlSGFuZGxlKGhhbmRsZSwgbW92ZSk7XG5cbiAgICBkZWVwTm9kZS5zdGVwKG1vdmUuc3JjUm93LCBtb3ZlLnNyY0NvbHVtbiwgbW92ZS5kc3RSb3csIG1vdmUuZHN0Q29sdW1uLCB0cnVlLCBtb3ZlLmlzQXR0YWNrKTtcbiAgICBpbmRleFtpXSA9IF9kYXRhLk1vdmVIZWxwZXIuc3RvcmVJblJvb20oaGFuZGxlLCBldmFsQ29lZiAqIE1hdGgubWF4KE1hdGgubWluKDIwNDcsICgwLCBfZXZhbHVhdGUuZXZhbHVhdGUpKGRlZXBOb2RlKSksIC0yMDQ3KSk7XG4gIH0gLy8gU29ydCBtYWtpbmcgaGlnaGVzdCBldmFsdWF0aW9ucyB0byBmcm9udFxuXG5cbiAgaW5kZXguc29ydChmdW5jdGlvbiAoaGFuZGxlMCwgaGFuZGxlMSkge1xuICAgIHJldHVybiBfZGF0YS5Nb3ZlSGVscGVyLmluZmxhdGVSb29tKGhhbmRsZTApIC0gX2RhdGEuTW92ZUhlbHBlci5pbmZsYXRlUm9vbShoYW5kbGUxKTtcbiAgfSk7XG4gIHJldHVybiBpbmRleDtcbn0iLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLk1vdmUgPSB2b2lkIDA7ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge2lmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTt9fWZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7dmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7ZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO2lmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO319ZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge2lmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO2lmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtyZXR1cm4gQ29uc3RydWN0b3I7fWZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtpZiAoa2V5IGluIG9iaikge09iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7fSBlbHNlIHtvYmpba2V5XSA9IHZhbHVlO31yZXR1cm4gb2JqO31cblxuLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBSZXByZXNlbnRzIGEgbW92ZSB0aGF0IGNhbiBiZSBtYWRlIGluIFN1cmFrYXJ0YS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL3ZhclxuTW92ZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG5cblxuXG5cblxuXG5cbiAgZnVuY3Rpb24gTW92ZSgpXG5cblxuXG5cblxuXG4gIHt2YXIgc3JjUm93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO3ZhciBzcmNDb2x1bW4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7dmFyIGRzdFJvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMDt2YXIgZHN0Q29sdW1uID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO3ZhciBpc0F0dGFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogZmFsc2U7dmFyIGRpcmVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDogLTE7X2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vdmUpO19kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNyY1Jvd1wiLCB2b2lkIDApO19kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNyY0NvbHVtblwiLCB2b2lkIDApO19kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImRzdFJvd1wiLCB2b2lkIDApO19kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImRzdENvbHVtblwiLCB2b2lkIDApO19kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlzQXR0YWNrXCIsIHZvaWQgMCk7X2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZGlyZWN0aW9uXCIsIHZvaWQgMCk7XG4gICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFJvdyBvZiBzb3VyY2Uvc3RhcnRpbmcgcG9zaXRpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgdGhpcy5zcmNSb3cgPSBzcmNSb3c7XG5cbiAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICogQ29sdW1uIG9mIHNvdXJjZS9zdGFydGluZyBwb3NpdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICB0aGlzLnNyY0NvbHVtbiA9IHNyY0NvbHVtbjtcblxuICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBSb3cgb2YgZGVzdGluYXRpb24vZmluYWwgcG9zaXRpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgdGhpcy5kc3RSb3cgPSBkc3RSb3c7XG5cbiAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICogQ29sdW1uIG9mIGRlc3RpbmF0aW9uL2ZpbmFsIHBvc2l0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgIHRoaXMuZHN0Q29sdW1uID0gZHN0Q29sdW1uO1xuXG4gICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgdGhpcyBtb3ZlIGlzIGFuIGF0dGFjayAobmVlZCBub3QgYmUgYSBjYXB0dXJlKS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgdGhpcy5pc0F0dGFjayA9IGlzQXR0YWNrO1xuXG4gICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBTdGFydGluZyBkaXJlY3Rpb24sIGlmIGF0dGFjayBtb3ZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbWVtYmVyIHtEaXJlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgfV9jcmVhdGVDbGFzcyhNb3ZlLCBbeyBrZXk6IFwibWFrZUF0dGFja1wiLCB2YWx1ZTogZnVuY3Rpb24gbWFrZUF0dGFjayhcblxuICAgIGRpcmVjdGlvbikge1xuICAgICAgdGhpcy5pc0F0dGFjayA9IHRydWU7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dcbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5cbiAgICAgICAqLyB9LCB7IGtleTogXCJzZXRTb3VyY2VcIiwgdmFsdWU6IGZ1bmN0aW9uIHNldFNvdXJjZShcbiAgICByb3csIGNvbHVtbikge1xuICAgICAgdGhpcy5zcmNSb3cgPSByb3c7XG4gICAgICB0aGlzLnNyY0NvbHVtbiA9IGNvbHVtbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dcbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5cbiAgICAgICAqLyB9LCB7IGtleTogXCJzZXREZXN0aW5hdGlvblwiLCB2YWx1ZTogZnVuY3Rpb24gc2V0RGVzdGluYXRpb24oXG4gICAgcm93LCBjb2x1bW4pIHtcbiAgICAgIHRoaXMuZHN0Um93ID0gcm93O1xuICAgICAgdGhpcy5kc3RDb2x1bW4gPSBjb2x1bW47XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAqIEdlbmVyYXRlIGFuIGV4YWN0IGNvcHkgb2YgdGhpcyBtb3ZlLlxuICAgICAgICogQHJldHVybnMge01vdmV9XG4gICAgICAgKi8gfSwgeyBrZXk6IFwiY2xvbmVcIiwgdmFsdWU6IGZ1bmN0aW9uIGNsb25lKClcbiAgICB7XG4gICAgICByZXR1cm4gTW92ZS5wb3N0VGhyZWFkQm91bmRhcnkodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgKiBSZXBhaXJzIGEge0Bjb2RlIE1vdmV9IG9iamVjdCBhZnRlciBpdCBoYXMgYmVlbiBjb3BpZWQgdGhyb3VnaCBhXG4gICAgICAgKiB3ZWItd29ya2VyIGJvdW5kYXJ5LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7TW92ZX0gbW92ZVxuICAgICAgICovIH1dLCBbeyBrZXk6IFwicG9zdFRocmVhZEJvdW5kYXJ5XCIsIHZhbHVlOiBmdW5jdGlvbiBwb3N0VGhyZWFkQm91bmRhcnkoXG4gICAgbW92ZSkge1xuICAgICAgdmFyIGNtb3ZlID0gbmV3IE1vdmUoKTtcblxuICAgICAgY21vdmUuc3JjUm93ID0gbW92ZS5zcmNSb3c7XG4gICAgICBjbW92ZS5zcmNDb2x1bW4gPSBtb3ZlLnNyY0NvbHVtbjtcbiAgICAgIGNtb3ZlLmRzdFJvdyA9IG1vdmUuZHN0Um93O1xuICAgICAgY21vdmUuZHN0Q29sdW1uID0gbW92ZS5kc3RDb2x1bW47XG4gICAgICBjbW92ZS5pc0F0dGFjayA9IG1vdmUuaXNBdHRhY2s7XG4gICAgICBjbW92ZS5kaXJlY3Rpb24gPSBtb3ZlLmRpcmVjdGlvbjtcblxuICAgICAgcmV0dXJuIGNtb3ZlO1xuICAgIH0gfV0pO3JldHVybiBNb3ZlO30oKTtleHBvcnRzLk1vdmUgPSBNb3ZlO3ZhciBfZGVmYXVsdCA9XG5cblxuTW92ZTtleHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4cG9ydHMuUGxheWVyU3RhdHMgPSB2b2lkIDA7ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge2lmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTt9fSAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogSG9sZHMgc3RhdGlzdGljYWwgaW5mb3JtYXRpb24gYWJvdXQgYSBwbGF5ZXIgcGxheWluZyBTdXJha2FydGEuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL3ZhclxuUGxheWVyU3RhdHMgPVxuZnVuY3Rpb24gUGxheWVyU3RhdHMoKSB7X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBsYXllclN0YXRzKTtcbiAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IHBlYmJsZXMgLSBuby4gb2YgcGViYmxlcyBsaXZlIGZvciB0aGlzIHBsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gIHRoaXMucGViYmxlcyA9IDA7XG59O2V4cG9ydHMuUGxheWVyU3RhdHMgPSBQbGF5ZXJTdGF0czt2YXIgX2RlZmF1bHQgPVxuXG5cblBsYXllclN0YXRzO2V4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO2V4cG9ydHMuUG9zaXRpb24gPSB2b2lkIDA7ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge2lmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTt9fWZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7dmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7ZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO2lmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO319ZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge2lmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO2lmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtyZXR1cm4gQ29uc3RydWN0b3I7fSAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG5hbWVzcGFjZSBTS1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovdmFyXG5Qb3NpdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBvc2l0aW9uKCkge3ZhciByb3cgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7dmFyIGNvbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9zaXRpb24pO1xuICAgIHRoaXMuc2V0KHJvdywgY29sKTtcbiAgfV9jcmVhdGVDbGFzcyhQb3NpdGlvbiwgW3sga2V5OiBcInNldFwiLCB2YWx1ZTogZnVuY3Rpb24gc2V0KFxuXG4gICAgcm93LCBjb2wpIHtcbiAgICAgIC8qKiBAbWVtYmVyIHtudW1iZXJ9ICovXG4gICAgICB0aGlzLnJvdyA9IHJvdztcblxuICAgICAgLyoqIEBtZW1iZXIge251bWJlcn0gKi9cbiAgICAgIHRoaXMuY29sdW1uID0gY29sO1xuICAgIH0gfSwgeyBrZXk6IFwiaW5kZXhcIiwgdmFsdWU6IGZ1bmN0aW9uIGluZGV4KClcblxuICAgIHtcbiAgICAgIHJldHVybiB0aGlzLnJvdyAqIDYgKyB0aGlzLmNvbHVtbjtcbiAgICB9IH1dLCBbeyBrZXk6IFwiZnJvbVwiLCB2YWx1ZTogZnVuY3Rpb24gZnJvbShcblxuICAgIGluZGV4KSB7XG4gICAgICByZXR1cm4gbmV3IFBvc2l0aW9uKE1hdGguZmxvb3IoaW5kZXggLyA2KSwgaW5kZXggJSA2KTtcbiAgICB9IH1dKTtyZXR1cm4gUG9zaXRpb247fSgpO2V4cG9ydHMuUG9zaXRpb24gPSBQb3NpdGlvbjsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7ZXhwb3J0cy5TdXJha2FydGEgPSBleHBvcnRzLkJMQUNLX1BMQVlFUiA9IGV4cG9ydHMuUkVEX1BMQVlFUiA9IGV4cG9ydHMuTk9UX0ZJTExFRCA9IHZvaWQgMDt2YXIgX2V2ZW50ZW1pdHRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImV2ZW50ZW1pdHRlcjNcIikpO1xudmFyIF90cmF2ZXJzZVV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vdHJhdmVyc2UtdXRpbHNcIikpO1xuXG5cblxuXG5cblxuXG52YXIgX1BsYXllclN0YXRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9QbGF5ZXJTdGF0c1wiKSk7XG52YXIgX3N0ZXBVdGlscyA9IHJlcXVpcmUoXCIuL3N0ZXAtdXRpbHNcIik7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge2lmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDt2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge2lmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtyZXR1cm4gb2JqO31pZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtyZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07fXZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaiA9IHt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IgKHZhciBrZXkgaW4gb2JqKSB7aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHt2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTt9IGVsc2Uge25ld09ialtrZXldID0gb2JqW2tleV07fX19bmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtpZiAoY2FjaGUpIHtjYWNoZS5zZXQob2JqLCBuZXdPYmopO31yZXR1cm4gbmV3T2JqO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge3JldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTt9ZnVuY3Rpb24gX3R5cGVvZihvYmopIHtpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtyZXR1cm4gdHlwZW9mIG9iajt9O30gZWxzZSB7X3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7cmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7fTt9cmV0dXJuIF90eXBlb2Yob2JqKTt9ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge2lmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTt9fWZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7dmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7ZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO2lmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO319ZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge2lmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO2lmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtyZXR1cm4gQ29uc3RydWN0b3I7fWZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge3JldHVybiBjYWxsO31yZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTt9ZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7aWYgKHNlbGYgPT09IHZvaWQgMCkge3Rocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTt9cmV0dXJuIHNlbGY7fWZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7X2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtyZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO307cmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTt9ZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7aWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge3Rocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTt9c3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pO2lmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO31mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge19zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge28uX19wcm90b19fID0gcDtyZXR1cm4gbzt9O3JldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7fVxuXG52YXIgTk9UX0ZJTExFRCA9IC0xO2V4cG9ydHMuTk9UX0ZJTExFRCA9IE5PVF9GSUxMRUQ7XG52YXIgUkVEX1BMQVlFUiA9IDA7IC8vIHN0YXJ0aW5nIHBsYXllclxuZXhwb3J0cy5SRURfUExBWUVSID0gUkVEX1BMQVlFUjt2YXIgQkxBQ0tfUExBWUVSID0gMTsgLy8gb3RoZXIgcGxheWVyXG5cbi8qKlxuICogSGFuZGxlIHRoZSBzdGF0ZSBvZiBhbiBhY3R1YWwgU3VyYWthcnRhIGdhbWUuXG4gKi9leHBvcnRzLkJMQUNLX1BMQVlFUiA9IEJMQUNLX1BMQVlFUjt2YXJcblN1cmFrYXJ0YSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0V2ZW50RW1pdHRlcikge19pbmhlcml0cyhTdXJha2FydGEsIF9FdmVudEVtaXR0ZXIpO1xuICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgU3VyYWthcnRhIGJvYXJkIHN0YXRlIHdpdGggdGhlIHBlYmJsZXMgaW4gdGhlaXIgaW5pdGlhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHBvc2l0aW9ucy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtub0luaXQ9ZmFsc2VdIC0gd2hldGhlciBub3QgdG8gaW5pdGlhbGl6ZSB0aGUgYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgZnVuY3Rpb24gU3VyYWthcnRhKCkge3ZhciBfdGhpczt2YXIgbm9Jbml0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3VyYWthcnRhKTtcbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihTdXJha2FydGEpLmNhbGwodGhpcykpO1xuXG4gICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogU3RhdGVzIG9mIGVhY2ggcGViYmxlIHBvc2l0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtZW1iZXIge0FycmF5PG51bWJlcj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgX3RoaXMuc3RhdGVzID0gbmV3IEFycmF5KDM2KTtcblxuICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIE5vLiBvZiBtb3ZlcyBkb25lIGFscmVhZHkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgIF90aGlzLnR1cm4gPSAwO1xuXG4gICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIFJlc3BvbmRlcnMgdGhhdCBhcmUgaW52b2tlZCBvbiB0aGUgdHVybnMgb2YgdGhlIHJlZCAmXG4gICAgICAgICAgICAgICAgICAgICAqIGJsYWNrIHBsYXllcnMsIGFuZCB0aGVuIG9uIGJvdGguIEJvdGggdHlwZSByZXNwb25kZXJzIGFyZSBub3RpZmllZFxuICAgICAgICAgICAgICAgICAgICAgKiBmaXJzdC5cbiAgICAgICAgICAgICAgICAgICAgICogQG1lbWJlciB7QXJyYXk8QXJyYXk8U3VyYWthcnRhUmVzcG9uZGVyPj59XG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgIF90aGlzLnJlc3BvbmRlcnMgPSBbW10sIFtdLCBbXV07XG5cbiAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBTdGF0cyBmb3IgdGhlIHJlZCAmIGJsYWNrIHBsYXllci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbWVtYmVyIHt7IHJlZDogUGxheWVyU3RhdHMsIGJsYWNrOiBQbGF5ZXJTdGF0cyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgIF90aGlzLnBsYXllclN0YXRzID0ge1xuICAgICAgcmVkOiBuZXcgX1BsYXllclN0YXRzW1wiZGVmYXVsdFwiXSgpLFxuICAgICAgYmxhY2s6IG5ldyBfUGxheWVyU3RhdHNbXCJkZWZhdWx0XCJdKCkgfTtcblxuXG4gICAgaWYgKCFub0luaXQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICBfdGhpcy5zdGF0ZXNbaV0gPSBSRURfUExBWUVSO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgX2kgPSAxMjsgX2kgPCAyNDsgX2krKykge1xuICAgICAgICBfdGhpcy5zdGF0ZXNbX2ldID0gTk9UX0ZJTExFRDtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIF9pMiA9IDI0OyBfaTIgPCAzNjsgX2kyKyspIHtcbiAgICAgICAgX3RoaXMuc3RhdGVzW19pMl0gPSBCTEFDS19QTEFZRVI7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnBsYXllclN0YXRzLnJlZC5wZWJibGVzID0gMTI7XG4gICAgICBfdGhpcy5wbGF5ZXJTdGF0cy5ibGFjay5wZWJibGVzID0gMTI7XG4gICAgfXJldHVybiBfdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgICAqIEluZGV4IG9mIGEgcG9zaXRpb24gaW4ge0Bjb2RlIHRoaXMuc3RhdGVzfVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9fY3JlYXRlQ2xhc3MoU3VyYWthcnRhLCBbeyBrZXk6IFwiaW5kZXhPZlwiLCB2YWx1ZTogZnVuY3Rpb24gaW5kZXhPZihcbiAgICByLCBjKSB7XG4gICAgICByZXR1cm4gciAqIDYgKyBjO1xuICAgIH0gfSwgeyBrZXk6IFwic3RhdGVcIiwgdmFsdWU6IGZ1bmN0aW9uIHN0YXRlKFxuXG4gICAgcm93LCBjb2x1bW4pIHtcbiAgICAgIGlmIChyb3cgPCAwIHx8IGNvbHVtbiA8IDAgfHwgcm93ID49IDYgfHwgY29sdW1uID49IDYpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnN0YXRlc1tyb3cgKiA2ICsgY29sdW1uXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAqIFRoZSBwbGF5ZXIgd2hvc2UgdHVybiBpdCBpcyBjdXJyZW50bHkuXG4gICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICAgKi8gfSwgeyBrZXk6IFwic3RlcFwiLFxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBQZXJmb3JtIGEgc2ltcGxlIG1vdmUgb24gdGhlIGJvYXJkLiBPbmx5IHZhbGlkYXRpb24gdGhhdCBvY2N1cnMgaXMgaWYgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogZGVzdGluYXRpb24gaXMgYWxyZWFkeSBmaWxsZWQgb3IgaWYgaXQgaXNuJ3QgdGhlIHBlYmJsZSdzIHR1cm4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBfSWYgdGhlIGdhbWUgaXMgZmluaXNoZWQgZHVlIHRvIHRoaXMgbW92ZV86IFRoZSByZXNwb25kZXJzIHdpbGwgbm90IGJlIG5vdGlmaWVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHJhdGhlciB0aGUgJ2dhbWVvdmVyJyBldmVudCBpcyBlbWl0dGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJzIC0gaW5pdGlhbCBwb3NpdGlvbiByb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY3MgLSBpbnRpYWwgcG9zaXRpb24gY29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJkIC0gZmluYWwgcG9zaXRpb24gcm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNkIC0gZmluYWwgcG9zaXRpb24gY29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBbbm9SZXNwb25kPWZhbHNlXSAtIHdoZXRoZXIgbm90IHRvIGNvbnNpZGVyIHRoaXMgYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqICB0dXJuaW5nIG1vdmUsIGUuZy4gaW5jcmVtZW50IHRoZSBjdXJyZW50IHR1cm4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBjYXB0dXJlIC0gaXMgdGhpcyBhIGNhcHR1cmUgbW92ZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAdGhyb3dzIGlmIGRlc3RpbmF0aW9uIGlzIGFscmVhZHkgZmlsbGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICovdmFsdWU6IGZ1bmN0aW9uIHN0ZXAoXG4gICAgcnMsIGNzLCByZCwgY2QpIHt2YXIgbm9SZXNwb25kID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiBmYWxzZTt2YXIgY2FwdHVyZSA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDogZmFsc2U7XG4gICAgICB2YXIgaXMgPSB0aGlzLmluZGV4T2YocnMsIGNzKTtcbiAgICAgIHZhciBpZCA9IHRoaXMuaW5kZXhPZihyZCwgY2QpO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZXNbaXNdICE9PSB0aGlzLnR1cm5QbGF5ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IHR1cm5pbmcgcGxheWVyIHBlYmJsZVwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghY2FwdHVyZSAmJiB0aGlzLnN0YXRlc1tpZF0gIT09IE5PVF9GSUxMRUQpIHtcbiAgICAgICAgLy8gY2FwdHVyZSBpcyB1c2VkIGludGVybmFsbHlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNhbm5vdCBzdGVwIGludG8gZGVzdGluYXRpb24gc2luY2UgaXQgaXMgYWxyZWFkeSBmaWxsZWRcIik7XG5cbiAgICAgIH1cblxuICAgICAgY2FwdHVyZSA9IHRoaXMuc3RhdGVzW2lkXSAhPT0gTk9UX0ZJTExFRDtcblxuICAgICAgdGhpcy5zdGF0ZXNbaWRdID0gdGhpcy5zdGF0ZXNbaXNdO1xuICAgICAgdGhpcy5zdGF0ZXNbaXNdID0gTk9UX0ZJTExFRDtcblxuICAgICAgaWYgKCFub1Jlc3BvbmQpIHtcbiAgICAgICAgdmFyIGNvbG9yO1xuXG4gICAgICAgIGlmIChjYXB0dXJlKSB7XG4gICAgICAgICAgY29sb3IgPSB0aGlzLnR1cm5QbGF5ZXJDb2xvcjtcbiAgICAgICAgICAtLXRoaXMucGxheWVyU3RhdHNbY29sb3JdLnBlYmJsZXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FwdHVyZSAmJiB0aGlzLnBsYXllclN0YXRzW2NvbG9yXS5wZWJibGVzIDw9IDApIHtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJnYW1lb3ZlclwiLCBjb2xvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50dXJuKys7XG4gICAgICAgICAgdGhpcy5fbm90aWZ5UmVzcG9uZGVyc09uVHVybigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgKiBXcmFwcGVyIGFyb3VuZCBgc3RlcGAgdGhhdCB2YWxpZGF0ZXMgdGhlIHN0ZXAgdXNpbmcgYHZhbGlkYXRlU3RlcGAuXG4gICAgICAgKi8gfSwgeyBrZXk6IFwic2FmZVN0ZXBcIiwgdmFsdWU6IGZ1bmN0aW9uIHNhZmVTdGVwKFxuICAgIHJzLCBjcywgcmQsIGNkKSB7dmFyIG5vUmVzcG9uZCA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogZmFsc2U7XG4gICAgICBpZiAoKDAsIF9zdGVwVXRpbHMudmFsaWRhdGVTdGVwKShycywgY3MsIHJkLCBjZCkpIHtcbiAgICAgICAgdGhpcy5zdGVwKHJzLCBjcywgcmQsIGNkLCBub1Jlc3BvbmQpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAqIFBlcmZvcm0gYW4gYXR0YWNrIG1vdmVcbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByIC0gc3RhcnRpbmcgcm93XG4gICAgICAgKiBAcGFyYW0ge251bWJlcn0gYyAtIHN0YXJ0aW5nIGNvbFxuICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGRpciAtIGRpcmVjdGlvbiBvZiB0cmF2ZXJzaW5nXG4gICAgICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGN1dCAtIHByZWZlcnJlZCBlbmRpbmcgcG9zaXRpb25cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NhdmVTdGVwcz10cnVlXSAtIHJldHVybnMgdGhlIGludGVybWVkaWF0ZSBzdGVwcyBvZiB0aGUgbW92ZVxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBbcGVyZm9ybT10cnVlXSAtIHdoZXRoZXIgdG8gYWN0dWFsIHBlcmZvcm0gdGhlIG1vdmVcbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW25vUmVzcG9uZD1mYWxzZV0gLSB3aGV0aGVyIHRvIG5vdCBjb25zaWRlciB0aGlzIFwibW92ZVwiIGZvciB0aGUgdHVyblxuICAgICAgICovIH0sIHsga2V5OiBcInRyYXZlcnNlXCIsIHZhbHVlOiBmdW5jdGlvbiB0cmF2ZXJzZShcblxuICAgIHIsXG4gICAgYyxcbiAgICBkaXIsXG4gICAgY3V0KVxuXG5cblxuICAgIHt2YXIgc2F2ZVN0ZXBzID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiB0cnVlO3ZhciBwZXJmb3JtID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiB0cnVlO3ZhciBub1Jlc3BvbmQgPSBhcmd1bWVudHMubGVuZ3RoID4gNiAmJiBhcmd1bWVudHNbNl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s2XSA6IGZhbHNlO1xuICAgICAgaWYgKFxuICAgICAgX3RyYXZlcnNlVXRpbHMuRGlyZWN0aW9ucy5pc0hvcml6b250YWwoZGlyKSAmJiAociA9PT0gMCB8fCByID09PSA1KSB8fFxuICAgICAgX3RyYXZlcnNlVXRpbHMuRGlyZWN0aW9ucy5pc1ZlcnRpY2FsKGRpcikgJiYgKGMgPT09IDAgfHwgYyA9PT0gNSkpXG4gICAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChcbiAgICAgICAgcikuY29uY2F0KGMsIFwiIGNhbm5vdCBiZSBsb29wZWQgaW4gZGlyZWN0aW9uIFwiKS5jb25jYXQoZGlyLCBcIiwgZW5kcyBhdCBjb3JuZXJcIikpO1xuXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZXNbdGhpcy5pbmRleE9mKHIsIGMpXSAhPT0gdGhpcy50dXJuUGxheWVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCB0dXJuaW5nIHBsYXllcidzIHBlYmJsZVwiKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0ZXBzID0gKDAsIF90cmF2ZXJzZVV0aWxzLmZpbmRQYXRoKSh0aGlzLCByLCBjLCBkaXIsIGN1dCwgIXNhdmVTdGVwcyAmJiAhcGVyZm9ybSk7XG5cbiAgICAgIGlmIChwZXJmb3JtKSB7XG4gICAgICAgIHZhciBsYXN0UG9zaXRpb24gPSBzdGVwc1tzdGVwcy5sZW5ndGggLSAxXTtcbiAgICAgICAgdGhpcy5zdGVwKHIsIGMsIGxhc3RQb3NpdGlvbi5yb3csIGxhc3RQb3NpdGlvbi5jb2x1bW4sIG5vUmVzcG9uZCwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGVwcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAqIEl0ZXJhdGUgb3ZlciBhbGwgcG9zaXRpb25zIHdpdGggYSBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIHRocmVlIGFyZ3VtZW50czpcbiAgICAgICAqIDEuIFBlYmJsZSBzdGF0ZVxuICAgICAgICogMi4gUm93XG4gICAgICAgKiAzLiBDb2x1bW5cbiAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgKi8gfSwgeyBrZXk6IFwiZm9yRWFjaFwiLCB2YWx1ZTogZnVuY3Rpb24gZm9yRWFjaChcbiAgICBjYWxsYmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIHIgPSAwOyByIDwgNjsgcisrKSB7XG4gICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgNjsgYysrLCBpKyspIHtcbiAgICAgICAgICBjYWxsYmFjayh0aGlzLnN0YXRlc1tpXSwgciwgYyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IH0sIHsga2V5OiBcImNvcHlUb1wiLCB2YWx1ZTogZnVuY3Rpb24gY29weVRvKFxuXG4gICAgc3VyYWthcnRhKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM2OyBpKyspIHtcbiAgICAgICAgc3VyYWthcnRhLnN0YXRlc1tpXSA9IHRoaXMuc3RhdGVzW2ldO1xuICAgICAgfVxuICAgIH0gfSwgeyBrZXk6IFwiY29weUZyb21cIiwgdmFsdWU6IGZ1bmN0aW9uIGNvcHlGcm9tKFxuXG4gICAgc3VyYWthcnRhKSB7XG4gICAgICBzdXJha2FydGEuY29weVRvKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICogQ2xvbmUgdGhpcyBpbnN0YW5jZSB3aXRob3V0IHRoZSByZXNwb25kZXJzLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtTdXJha2FydGF9XG4gICAgICAgKi8gfSwgeyBrZXk6IFwiY2xvbmVcIiwgdmFsdWU6IGZ1bmN0aW9uIGNsb25lKClcbiAgICB7XG4gICAgICB2YXIgY2xvbmVkU3RhdGUgPSBuZXcgU3VyYWthcnRhKHRydWUpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM2OyBpKyspIHtcbiAgICAgICAgY2xvbmVkU3RhdGUuc3RhdGVzW2ldID0gdGhpcy5zdGF0ZXNbaV07XG4gICAgICB9XG5cbiAgICAgIGNsb25lZFN0YXRlLnR1cm4gPSB0aGlzLnR1cm47XG4gICAgICByZXR1cm4gY2xvbmVkU3RhdGU7XG4gICAgfVxuXG4gICAgLyoqICBAcHJpdmF0ZSAqLyB9LCB7IGtleTogXCJfbm90aWZ5UmVzcG9uZGVyc09uVHVyblwiLCB2YWx1ZTogZnVuY3Rpb24gX25vdGlmeVJlc3BvbmRlcnNPblR1cm4oKVxuICAgIHtcbiAgICAgIHRoaXMucmVzcG9uZGVyc1syXS5mb3JFYWNoKGZ1bmN0aW9uIChyZXNwb25kZXIpIHtyZXR1cm4gcmVzcG9uZGVyLm9uVHVybigpO30pO1xuICAgICAgdGhpcy5yZXNwb25kZXJzW3RoaXMudHVyblBsYXllcl0uZm9yRWFjaChmdW5jdGlvbiAocmVzcG9uZGVyKSB7cmV0dXJuIHJlc3BvbmRlci5vblR1cm4oKTt9KTtcbiAgICB9IH0sIHsga2V5OiBcInR1cm5QbGF5ZXJcIiwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7cmV0dXJuIHRoaXMudHVybiAlIDI7fSAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1lbWJlciB7J3JlZCcgfCAnYmxhY2snfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi8gfSwgeyBrZXk6IFwidHVyblBsYXllckNvbG9yXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiB0aGlzLnR1cm5QbGF5ZXIgPT09IDAgPyBcInJlZFwiIDogXCJibGFja1wiO30gfV0pO3JldHVybiBTdXJha2FydGE7fShfZXZlbnRlbWl0dGVyW1wiZGVmYXVsdFwiXSk7XG4vKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogR2VuZXJhdGUgYSBgU3VyYWthcnRhYCBpbnN0YW5jZSB3aXRoIGEgcHJlZGVmaW5lZCBsYXlvdXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtBcnJheTxpbnQ+fSBzdGF0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHJldHVybnMge1N1cmFrYXJ0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovZXhwb3J0cy5TdXJha2FydGEgPSBTdXJha2FydGE7XG5TdXJha2FydGEuZnJvbVN0YXRlID0gZnVuY3Rpb24gKHN0YXRlcykge1xuICB2YXIgaW5zdGFuY2UgPSBuZXcgU3VyYWthcnRhKHRydWUpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMzY7IGkrKykge1xuICAgIGluc3RhbmNlLnN0YXRlc1tpXSA9IHN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZXNbaV0gPT09IFJFRF9QTEFZRVIpIHtcbiAgICAgICsraW5zdGFuY2UucGxheWVyU3RhdHMucmVkLnBlYmJsZXM7XG4gICAgfSBlbHNlIGlmIChzdGF0ZXNbaV0gPT09IEJMQUNLX1BMQVlFUikge1xuICAgICAgKytpbnN0YW5jZS5wbGF5ZXJTdGF0cy5ibGFjay5wZWJibGVzO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbnN0YW5jZTtcbn07XG5cbi8qKlxuICAgICogQGludGVyZmFjZSBTdXJha2FydGFSZXNwb25kZXJcbiAgICAqXG4gICAgKiBAbWV0aG9kIG9uVHVyblxuICAgICogQHBhcmFtIHtTdXJha2FydGF9IHN1cmFrYXJ0YVxuICAgICovIiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO3ZhciBfZXhwb3J0TmFtZXMgPSB7IFJFRF9QTEFZRVI6IHRydWUsIEJMQUNLX1BMQVlFUjogdHJ1ZSwgTk9UX0ZJTExFRDogdHJ1ZSwgU3VyYWthcnRhOiB0cnVlLCBNb3ZlOiB0cnVlLCBQb3NpdGlvbjogdHJ1ZSB9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJFRF9QTEFZRVJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gX1N1cmFrYXJ0YS5SRURfUExBWUVSO30gfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQkxBQ0tfUExBWUVSXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7cmV0dXJuIF9TdXJha2FydGEuQkxBQ0tfUExBWUVSO30gfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTk9UX0ZJTExFRFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfU3VyYWthcnRhLk5PVF9GSUxMRUQ7fSB9KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTdXJha2FydGFcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gX1N1cmFrYXJ0YS5TdXJha2FydGE7fSB9KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNb3ZlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7cmV0dXJuIF9Nb3ZlLk1vdmU7fSB9KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJQb3NpdGlvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfUG9zaXRpb24uUG9zaXRpb247fSB9KTtcblxuXG5cbnZhciBfU3VyYWthcnRhID0gcmVxdWlyZShcIi4vU3VyYWthcnRhXCIpO1xudmFyIF9Nb3ZlID0gcmVxdWlyZShcIi4vTW92ZVwiKTtcbnZhciBfUG9zaXRpb24gPSByZXF1aXJlKFwiLi9Qb3NpdGlvblwiKTtcbnZhciBfdHJhdmVyc2VVdGlscyA9IHJlcXVpcmUoXCIuL3RyYXZlcnNlLXV0aWxzXCIpO09iamVjdC5rZXlzKF90cmF2ZXJzZVV0aWxzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfdHJhdmVyc2VVdGlsc1trZXldO30gfSk7fSk7XG52YXIgX3N0ZXBVdGlscyA9IHJlcXVpcmUoXCIuL3N0ZXAtdXRpbHNcIik7T2JqZWN0LmtleXMoX3N0ZXBVdGlscykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7aWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO2lmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gX3N0ZXBVdGlsc1trZXldO30gfSk7fSk7XG52YXIgX1BsYXllclN0YXRzID0gcmVxdWlyZShcIi4vUGxheWVyU3RhdHNcIik7T2JqZWN0LmtleXMoX1BsYXllclN0YXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfUGxheWVyU3RhdHNba2V5XTt9IH0pO30pOyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2YWxpZGF0ZVN0ZXBcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gX3ZhbGlkYXRlU3RlcC52YWxpZGF0ZVN0ZXA7fSB9KTtleHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDt2YXIgX3ZhbGlkYXRlU3RlcCA9IHJlcXVpcmUoXCIuL3ZhbGlkYXRlU3RlcFwiKTt2YXIgX2RlZmF1bHQgPVxuXG5cblxue1xuICB2YWxpZGF0ZVN0ZXA6IF92YWxpZGF0ZVN0ZXAudmFsaWRhdGVTdGVwIH07ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7ZXhwb3J0cy52YWxpZGF0ZVN0ZXAgPSB2YWxpZGF0ZVN0ZXA7ZnVuY3Rpb24gdmFsaWRhdGVTdGVwKHIwLCBjMCwgcjEsIGMxKSB7XG4gIHJldHVybiByMSA+PSAwICYmIGMxID49IDAgJiYgcjEgPCA2ICYmIGMxIDwgNiAmJlxuICBNYXRoLmFicyhyMSAtIHIwKSA8PSAxICYmIE1hdGguYWJzKGMxIC0gYzApIDw9IDE7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO2V4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5EaXJlY3Rpb25zID0gZXhwb3J0cy5ET1dOID0gZXhwb3J0cy5SSUdIVCA9IGV4cG9ydHMuVVAgPSBleHBvcnRzLkxFRlQgPSB2b2lkIDA7dmFyIExFRlQgPSAxMDtleHBvcnRzLkxFRlQgPSBMRUZUO1xudmFyIFVQID0gMTE7ZXhwb3J0cy5VUCA9IFVQO1xudmFyIFJJR0hUID0gMTI7ZXhwb3J0cy5SSUdIVCA9IFJJR0hUO1xudmFyIERPV04gPSAxMztleHBvcnRzLkRPV04gPSBET1dOO1xuXG52YXIgRGlyZWN0aW9ucyA9IHtcbiAgTEVGVDogTEVGVCxcbiAgVVA6IFVQLFxuICBSSUdIVDogUklHSFQsXG4gIERPV046IERPV04gfTtleHBvcnRzLkRpcmVjdGlvbnMgPSBEaXJlY3Rpb25zO3ZhciBfZGVmYXVsdCA9XG5cblxue1xuICBMRUZUOiBMRUZULFxuICBVUDogVVAsXG4gIFJJR0hUOiBSSUdIVCxcbiAgRE9XTjogRE9XTixcbiAgRGlyZWN0aW9uczogRGlyZWN0aW9ucyxcbiAgZ2V0IFRPUCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXJlY3Rpb25zLlRPUCBpcyBpbnZhbGlkLiBVc2UgRGlyZWN0aW9ucy5VUFwiKTtcbiAgfSxcbiAgZ2V0IEJPVFRPTSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXJlY3Rpb25zLkJPVFRPTSBpcyBpbnZhbGlkLiBVc2UgRGlyZWN0aW9ucy5ET1dOXCIpO1xuICB9LFxuICBpc0hvcml6b250YWw6IGZ1bmN0aW9uIGlzSG9yaXpvbnRhbChkKSB7XG4gICAgcmV0dXJuIGQgPT09IExFRlQgfHwgZCA9PT0gUklHSFQ7XG4gIH0sXG4gIGlzVmVydGljYWw6IGZ1bmN0aW9uIGlzVmVydGljYWwoZCkge1xuICAgIHJldHVybiBkID09PSBVUCB8fCBkID09PSBET1dOO1xuICB9LFxuICBvZjogZnVuY3Rpb24gb2Yoc3RhcnQsIGVuZCkge1xuICAgIGlmIChlbmRbMV0gPiA1KSB7XG4gICAgICByZXR1cm4gUklHSFQ7XG4gICAgfSBlbHNlIGlmIChlbmRbMV0gPCAwKSB7XG4gICAgICByZXR1cm4gTEVGVDtcbiAgICB9XG4gICAgaWYgKGVuZFswXSA+IDUpIHtcbiAgICAgIHJldHVybiBET1dOO1xuICAgIH0gZWxzZSBpZiAoZW5kWzBdIDwgMCkge1xuICAgICAgcmV0dXJuIFVQO1xuICAgIH1cblxuICAgIHZhciByID0gZW5kWzBdIC0gc3RhcnRbMF07XG4gICAgdmFyIGMgPSBlbmRbMV0gLSBzdGFydFsxXTtcblxuICAgIGlmIChyICogYyAhPT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiKFwiLmNvbmNhdChcbiAgICAgIHN0YXJ0WzBdLCBcIiwgXCIpLmNvbmNhdChzdGFydFsxXSwgXCIpIHRvIChcIikuY29uY2F0KGVuZFswXSwgXCIsIFwiKS5jb25jYXQoZW5kWzFdLCBcIikgaXNuJ3QgYW4gb3J0aG9nb25hbCBkaXJlY3Rpb25cIikpO1xuXG4gICAgfVxuICAgIGlmIChyICE9PSAwKSB7XG4gICAgICByZXR1cm4gciA+IDAgPyBET1dOIDogVVA7XG4gICAgfVxuICAgIGlmIChjICE9PSAwKSB7XG4gICAgICByZXR1cm4gYyA+IDAgPyBSSUdIVCA6IExFRlQ7XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgIFwiTm8gbW92ZSBtYWRlLCBhbmQgZGlyZWN0aW9uIGNhbm5vdCBiZSBnaXZlbiB0byB6ZXJvIHZlY3Rvci5cIik7XG5cbiAgfSB9O2V4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gX3R5cGVvZihvYmopIHtpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtyZXR1cm4gdHlwZW9mIG9iajt9O30gZWxzZSB7X3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7cmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7fTt9cmV0dXJuIF90eXBlb2Yob2JqKTt9T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO3ZhciBfZXhwb3J0TmFtZXMgPSB7IERpcmVjdGlvbnM6IHRydWUsIExFRlQ6IHRydWUsIFVQOiB0cnVlLCBSSUdIVDogdHJ1ZSwgRE9XTjogdHJ1ZSwgZ2V0TG9vcFJhZGl1czogdHJ1ZSwgZ2V0TG9vcFJvdGF0aW9uOiB0cnVlLCBnZXRMb29wVGFuZ2VudDogdHJ1ZSwgZ2V0TG9vcFRlcm1pbmFsOiB0cnVlIH07T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRGlyZWN0aW9uc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfRGlyZWN0aW9uc1tcImRlZmF1bHRcIl07fSB9KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJMRUZUXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7cmV0dXJuIF9EaXJlY3Rpb25zLkxFRlQ7fSB9KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJVUFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfRGlyZWN0aW9ucy5VUDt9IH0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJJR0hUXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7cmV0dXJuIF9EaXJlY3Rpb25zLlJJR0hUO30gfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRE9XTlwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfRGlyZWN0aW9ucy5ET1dOO30gfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0TG9vcFJhZGl1c1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfbG9vcEluZm8uZ2V0TG9vcFJhZGl1czt9IH0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldExvb3BSb3RhdGlvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfbG9vcEluZm8uZ2V0TG9vcFJvdGF0aW9uO30gfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0TG9vcFRhbmdlbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gX2xvb3BJbmZvLmdldExvb3BUYW5nZW50O30gfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0TG9vcFRlcm1pbmFsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7cmV0dXJuIF9sb29wSW5mby5nZXRMb29wVGVybWluYWw7fSB9KTtleHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDt2YXIgX0RpcmVjdGlvbnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9EaXJlY3Rpb25zXCIpKTtcblxuXG5cbnZhciBfbG9vcEluZm8gPSByZXF1aXJlKFwiLi9sb29wLWluZm9cIik7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxudmFyIF9wYXRoRmluZGVyID0gcmVxdWlyZShcIi4vcGF0aC1maW5kZXJcIik7T2JqZWN0LmtleXMoX3BhdGhGaW5kZXIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge2lmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9leHBvcnROYW1lcywga2V5KSkgcmV0dXJuO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7cmV0dXJuIF9wYXRoRmluZGVyW2tleV07fSB9KTt9KTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7aWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO3ZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7aWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge3JldHVybiBvYmo7fWlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge3JldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTt9dmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqID0ge307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2ZvciAodmFyIGtleSBpbiBvYmopIHtpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge3ZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO2lmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO30gZWxzZSB7bmV3T2JqW2tleV0gPSBvYmpba2V5XTt9fX1uZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO2lmIChjYWNoZSkge2NhY2hlLnNldChvYmosIG5ld09iaik7fXJldHVybiBuZXdPYmo7fXZhciBfZGVmYXVsdCA9XG5cbntcbiAgZ2V0TG9vcFJhZGl1czogX2xvb3BJbmZvLmdldExvb3BSYWRpdXMsXG4gIGdldExvb3BSb3RhdGlvbjogX2xvb3BJbmZvLmdldExvb3BSb3RhdGlvbixcbiAgZ2V0TG9vcFRhbmdlbnQ6IF9sb29wSW5mby5nZXRMb29wVGFuZ2VudCxcbiAgZ2V0TG9vcFRlcm1pbmFsOiBfbG9vcEluZm8uZ2V0TG9vcFRlcm1pbmFsIH07ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7ZXhwb3J0cy5nZXRMb29wUmFkaXVzID0gZ2V0TG9vcFJhZGl1cztleHBvcnRzLmdldExvb3BSb3RhdGlvbiA9IGdldExvb3BSb3RhdGlvbjtleHBvcnRzLmdldExvb3BUYW5nZW50ID0gZ2V0TG9vcFRhbmdlbnQ7ZXhwb3J0cy5nZXRMb29wVGVybWluYWwgPSBnZXRMb29wVGVybWluYWw7dmFyIF9EaXJlY3Rpb25zID0gcmVxdWlyZShcIi4vRGlyZWN0aW9uc1wiKTtcblxuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBnZXRMb29wUmFkaXVzKGRpciwgciwgYykge1xuICBpZiAoZGlyID09PSBfRGlyZWN0aW9ucy5EaXJlY3Rpb25zLkxFRlQgfHwgZGlyID09PSBfRGlyZWN0aW9ucy5EaXJlY3Rpb25zLlJJR0hUKSB7XG4gICAgcmV0dXJuIHIgPCAzID8gciA6IDUgLSByO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjIDwgMyA/IGMgOiA1IC0gYztcbiAgfVxufVxuXG5mdW5jdGlvbiBhbmdsZShyMCwgYzAsIHIxLCBjMSkge1xuICBpZiAocjAgPT09IHIxKSB7XG4gICAgcmV0dXJuIGMxID4gYzAgPyAwIDogTWF0aC5QSTtcbiAgfSBlbHNlIGlmIChjMSA9PT0gYzApIHtcbiAgICByZXR1cm4gcjEgPiByMCA/IE1hdGguUEkgLyAyIDogMS41ICogTWF0aC5QSTtcbiAgfVxufVxuXG4vKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgYW5ndWxhciByb3RhdGlvbiB3aGVuIGxvb3BpbmcgZnJvbSBzdGFydCB0b1xuICAgKiBlbmQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFhcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0WVxuICAgKiBAcGFyYW0ge251bWJlcn0gZW5kWFxuICAgKiBAcGFyYW0ge251bWJlcn0gZW5kWVxuICAgKi9cbmZ1bmN0aW9uIGdldExvb3BSb3RhdGlvbihzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSkge1xuICB2YXIgY3g7XG5cbiAgaWYgKGVuZFggPT09IDAgfHwgc3RhcnRYID09PSAwKSB7XG4gICAgY3ggPSAwO1xuICB9IGVsc2Uge1xuICAgIGN4ID0gNTtcbiAgfVxuXG4gIHZhciBjeTtcblxuICBpZiAoZW5kWSA9PT0gMCB8fCBzdGFydFkgPT09IDApIHtcbiAgICBjeSA9IDA7XG4gIH0gZWxzZSB7XG4gICAgY3kgPSA1O1xuICB9XG5cbiAgdmFyIHN0YXJ0QW5nbGUgPSBhbmdsZShjeCwgY3ksIHN0YXJ0WCwgc3RhcnRZKTtcbiAgdmFyIGVuZEFuZ2xlID0gYW5nbGUoY3gsIGN5LCBlbmRYLCBlbmRZKTtcblxuICByZXR1cm4gW2N4LCBjeSwgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIE1hdGguYWJzKGVuZFggLSBzdGFydFgpXTtcbn1cblxuLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIGRpcmVjdGlvbiBvZiB0aGUgdGFuZ2VudCB0byB0aGUgbG9vcCAoZ2VvbWV0cmljYWxseSkgZW1lcmdpbmdcbiAgICogZnJvbSB0aGUgZ2l2ZW4gcG9pbnQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjXG4gICAqL1xuZnVuY3Rpb24gZ2V0TG9vcFRhbmdlbnQociwgYykge1xuICBpZiAoKHIgPT09IGMgfHwgciA9PT0gNSAtIGMpICYmIChyID09PSAwIHx8IHIgPT09IDUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiKFwiLmNvbmNhdChyLCBcIiwgXCIpLmNvbmNhdChjLCBcIikgaXMgYSBjb3JuZXIsIG5vdCBhIGxvb3AgdGVybWluYWxcIikpO1xuICB9XG5cbiAgaWYgKHIgPT09IDApIHtcbiAgICByZXR1cm4gX0RpcmVjdGlvbnMuRGlyZWN0aW9ucy5VUDtcbiAgfSBlbHNlIGlmIChyID09PSA1KSB7XG4gICAgcmV0dXJuIF9EaXJlY3Rpb25zLkRpcmVjdGlvbnMuRE9XTjtcbiAgfSBlbHNlIGlmIChjID09PSAwKSB7XG4gICAgcmV0dXJuIF9EaXJlY3Rpb25zLkRpcmVjdGlvbnMuTEVGVDtcbiAgfSBlbHNlIGlmIChjID09PSA1KSB7XG4gICAgcmV0dXJuIF9EaXJlY3Rpb25zLkRpcmVjdGlvbnMuUklHSFQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiKFwiLmNvbmNhdChyLCBcIiwgXCIpLmNvbmNhdChjLCBcIikgaXMgbm90IGEgbG9vcCB0ZXJtaW5hbCBwb3NpdGlvbi5cIikpO1xuICB9XG59XG5cbi8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBwb2ludCBvbiB3aGljaCBhIHBvaW50IHdpbGwgbGFuZCBvbiBhZnRlciBsb29waW5nIHRocm91Z2hcbiAgICogYSBsb29wIGZyb20gYSB0ZXJtaW5hbCBwb2ludC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNcbiAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbbG9jX11cbiAgICovXG5mdW5jdGlvbiBnZXRMb29wVGVybWluYWwociwgYywgbG9jXykge1xuICB2YXIgbG9jID0gbG9jXyB8fCBuZXcgQXJyYXkoMyk7XG4gIHZhciB0YW5nZW50ID0gZ2V0TG9vcFRhbmdlbnQociwgYyk7XG4gIHZhciBsb29wUmFkaXVzID0gZ2V0TG9vcFJhZGl1cyh0YW5nZW50LCByLCBjKTtcblxuICBzd2l0Y2ggKHRhbmdlbnQpIHtcbiAgICBjYXNlIF9EaXJlY3Rpb25zLlVQOlxuICAgICAgbG9jWzBdID0gbG9vcFJhZGl1cztcbiAgICAgIGxvY1sxXSA9IGMgPCAzID8gMCA6IDU7XG4gICAgICBsb2NbMl0gPSBsb2NbMV0gPT09IDAgPyBfRGlyZWN0aW9ucy5SSUdIVCA6IF9EaXJlY3Rpb25zLkxFRlQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIF9EaXJlY3Rpb25zLkRPV046XG4gICAgICBsb2NbMF0gPSA1IC0gbG9vcFJhZGl1cztcbiAgICAgIGxvY1sxXSA9IGMgPCAzID8gMCA6IDU7XG4gICAgICBsb2NbMl0gPSBsb2NbMV0gPT09IDAgPyBfRGlyZWN0aW9ucy5SSUdIVCA6IF9EaXJlY3Rpb25zLkxFRlQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIF9EaXJlY3Rpb25zLkxFRlQ6XG4gICAgICBsb2NbMF0gPSByIDwgMyA/IDAgOiA1O1xuICAgICAgbG9jWzFdID0gbG9vcFJhZGl1cztcbiAgICAgIGxvY1syXSA9IGxvY1swXSA9PT0gMCA/IF9EaXJlY3Rpb25zLkRPV04gOiBfRGlyZWN0aW9ucy5VUDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgX0RpcmVjdGlvbnMuUklHSFQ6XG4gICAgICBsb2NbMF0gPSByIDwgMyA/IDAgOiA1O1xuICAgICAgbG9jWzFdID0gNSAtIGxvb3BSYWRpdXM7XG4gICAgICBsb2NbMl0gPSBsb2NbMV0gPT09IDAgPyBfRGlyZWN0aW9ucy5ET1dOIDogX0RpcmVjdGlvbnMuVVA7XG4gICAgICBicmVhazt9XG5cblxuICByZXR1cm4gbG9jO1xufSIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtleHBvcnRzLnNpbXBsZVN0ZXBDb250ZXh0ID0gc2ltcGxlU3RlcENvbnRleHQ7ZXhwb3J0cy5sb29wU3RlcENvbnRleHQgPSBsb29wU3RlcENvbnRleHQ7ZXhwb3J0cy5maW5kU3RlcCA9IGZpbmRTdGVwO2V4cG9ydHMuZmluZFBhdGggPSBmaW5kUGF0aDtleHBvcnRzLlBhdGhGaW5kZXIgPSB2b2lkIDA7dmFyIF9EaXJlY3Rpb25zID0gcmVxdWlyZShcIi4vRGlyZWN0aW9uc1wiKTtcbnZhciBfbG9vcEluZm8gPSByZXF1aXJlKFwiLi9sb29wLWluZm9cIik7XG5cbnZhciBOT1RfRklMTEVEID0gLTE7XG5cbi8qKlxuICAgICAgICAgICAgICAgICAgICAgICogQHR5cGVkZWYge0FycmF5fSBUcmF2ZXJzZUNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSAwIC0gcm93XG4gICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gMSAtIGNvbHVtblxuICAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtEaXJlY3Rpb24/fSAyIC0gZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gcm93XG4gICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gY29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge0RpcmVjdGlvbn0gZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgKi9cblxuZnVuY3Rpb24gc2ltcGxlU3RlcENvbnRleHQocm93LCBjb2x1bW4pIHtcbiAgdmFyIGNvbnRleHQgPSBbcm93LCBjb2x1bW5dO1xuICBjb250ZXh0LnJvdyA9IHJvdztcbiAgY29udGV4dC5jb2x1bW4gPSBjb2x1bW47XG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBsb29wU3RlcENvbnRleHQocm93LCBjb2x1bW4sIGRpcmVjdGlvbikge1xuICB2YXIgY29udGV4dCA9IFtyb3csIGNvbHVtbiwgZGlyZWN0aW9uXTtcbiAgY29udGV4dC5yb3cgPSByb3c7XG4gIGNvbnRleHQuY29sdW1uID0gY29sdW1uO1xuICBjb250ZXh0LmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgY29udGV4dC5pc0xvb3AgPSB0cnVlO1xuICByZXR1cm4gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gZmluZFNpbXBsZVN0ZXAocm93LCBjb2x1bW4sIGRpcmVjdGlvbikge1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgX0RpcmVjdGlvbnMuVVA6XG4gICAgICBpZiAocm93ICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBbcm93IC0gMSwgY29sdW1uXTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgX0RpcmVjdGlvbnMuTEVGVDpcbiAgICAgIGlmIChjb2x1bW4gIT09IDApIHtcbiAgICAgICAgcmV0dXJuIFtyb3csIGNvbHVtbiAtIDFdO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBfRGlyZWN0aW9ucy5ET1dOOlxuICAgICAgaWYgKHJvdyAhPT0gNSkge1xuICAgICAgICByZXR1cm4gW3JvdyArIDEsIGNvbHVtbl07XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIF9EaXJlY3Rpb25zLlJJR0hUOlxuICAgICAgaWYgKGNvbHVtbiAhPT0gNSkge1xuICAgICAgICByZXR1cm4gW3JvdywgY29sdW1uICsgMV07XG4gICAgICB9XG4gICAgICBicmVhazt9XG5cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gICAqIEZpbmRzIHRoZSBuZXh0IHBvc2l0aW9uIHRoYXQgdGhlIGF0dGFjayB3aWxsIGxhbmQgb24sIGlmIGNvbnRpbnVhYmxlLlxuICAgKiBAcmV0dXJucyB7VHJhdmVyc2VDb250ZXh0fVxuICAgKi9cbmZ1bmN0aW9uIGZpbmRTdGVwKHJvdywgY29sdW1uLCBkaXJlY3Rpb24pIHtcbiAgdmFyIHNpbXBsZVN0ZXAgPSBmaW5kU2ltcGxlU3RlcChyb3csIGNvbHVtbiwgZGlyZWN0aW9uKTtcblxuICBpZiAoc2ltcGxlU3RlcCkge1xuICAgIHNpbXBsZVN0ZXAucm93ID0gc2ltcGxlU3RlcFswXTtcbiAgICBzaW1wbGVTdGVwLmNvbHVtbiA9IHNpbXBsZVN0ZXBbMV07XG4gICAgcmV0dXJuIHNpbXBsZVN0ZXA7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxvb3BTdGVwID0gKDAsIF9sb29wSW5mby5nZXRMb29wVGVybWluYWwpKHJvdywgY29sdW1uKTtcbiAgICBsb29wU3RlcC5yb3cgPSBsb29wU3RlcFswXTtcbiAgICBsb29wU3RlcC5jb2x1bW4gPSBsb29wU3RlcFsxXTtcbiAgICBsb29wU3RlcC5kaXJlY3Rpb24gPSBsb29wU3RlcFsyXTtcbiAgICBsb29wU3RlcC5pc0xvb3AgPSB0cnVlO1xuICAgIHJldHVybiBsb29wU3RlcDtcbiAgfVxufVxuXG4vKipcbiAgICogRmluZHMgYWxsIHRoZSBzdGVwcyBpbiB0aGUgYXR0YWNrLlxuICAgKiBAcGFyYW0ge1N1cmFrYXJ0YX0gc3VyYWthcnRhXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByb3dcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtblxuICAgKiBAcGFyYW0ge0RpcmVjdGlvbn0gZGlyZWN0aW9uXG4gICAqIEBwYXJhbSB7UG9zaXRpb259IGN1dFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kUG9zc2libGl0eT1mYWxzZV1cbiAgICogQHJldHVybnMge0FycmF5PFRyYXZlcnNlQ29udGV4dD4gfCBib29sZWFufVxuICAgKi9cbmZ1bmN0aW9uIGZpbmRQYXRoKHN1cmFrYXJ0YSwgcm93LCBjb2x1bW4sIGRpcmVjdGlvbiwgY3V0KSB7dmFyIGZpbmRQb3NzaWJsaXR5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiBmYWxzZTtcbiAgdmFyIHN0YXJ0ID0gW3JvdywgY29sdW1uXTtcbiAgdmFyIHBlYmJsZSA9IHN1cmFrYXJ0YS5zdGF0ZXNbc3VyYWthcnRhLmluZGV4T2Yocm93LCBjb2x1bW4pXTtcbiAgdmFyIHN0ZXBzID0gZmluZFBvc3NpYmxpdHkgPyB0cnVlIDogW107XG4gIHZhciBzZWxmVG91Y2ggPSAwO1xuICB2YXIgbG9vcHMgPSAwO1xuICB2YXIgY3V0Rm91bmQgPSBmYWxzZTtcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHZhciBuZXh0ID0gZmluZFN0ZXAocm93LCBjb2x1bW4sIGRpcmVjdGlvbik7XG5cbiAgICByb3cgPSBuZXh0WzBdO1xuICAgIGNvbHVtbiA9IG5leHRbMV07XG5cbiAgICBpZiAobmV4dC5pc0xvb3ApIHtcbiAgICAgIGRpcmVjdGlvbiA9IG5leHQuZGlyZWN0aW9uO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gZmFsc2U7XG4gICAgaWYgKHJvdyA9PT0gc3RhcnRbMF0gJiYgY29sdW1uID09PSBzdGFydFsxXSkge1xuICAgICAgKytzZWxmVG91Y2g7XG4gICAgICBpZiAoc2VsZlRvdWNoID4gMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIEluZmluaXRlIGxvb3BcbiAgICAgIH1cbiAgICAgIHNlbGYgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZSA9IHN1cmFrYXJ0YS5zdGF0ZShyb3csIGNvbHVtbik7XG5cbiAgICBpZiAoIXNlbGYgJiYgc3RhdGUgPT09IHBlYmJsZSkge1xuICAgICAgcmV0dXJuIGZhbHNlOyAvLyBjYW4ndCBjYXB0dXJlIG91ciBvd24gcGViYmxlIDopXG4gICAgfVxuICAgIGlmICghZmluZFBvc3NpYmxpdHkpIHtcbiAgICAgIHN0ZXBzLnB1c2gobmV4dCk7XG5cbiAgICAgIGlmIChuZXh0Lmxlbmd0aCA9PT0gMykgey8vIGxvb3BcbiAgICAgICAgKytsb29wcztcbiAgICAgICAgc3RlcHNbc3RlcHMubGVuZ3RoIC0gMV0uaXNMb29wID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGN1dCAmJiBjdXQucm93ID09PSByb3cgJiYgY3V0LmNvbHVtbiA9PT0gY29sdW1uIHx8ICFzZWxmICYmIHN0YXRlICE9PSBOT1RfRklMTEVEKSB7XG4gICAgICBjdXRGb3VuZCA9IHN0YXRlID09PSBOT1RfRklMTEVEOyAvLyBsYW5kZWQgb3B0aW9uYWwgaW50ZXJtZWRpYXRlIGlmIGN1cnJlbnQgcG9zaXRpb24gbm90IGZpbGxlZFxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGxvb3BzID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RlcHMuaXNDYXB0dXJlID0gIWN1dEZvdW5kO1xuICByZXR1cm4gc3RlcHM7XG59XG5cbi8qKlxuICAgKiBAbmFtZXNwYWNlIFNLXG4gICAqL1xudmFyIFBhdGhGaW5kZXIgPSB7XG4gIGZpbmRTdGVwOiBmaW5kU3RlcCxcbiAgZmluZFBhdGg6IGZpbmRQYXRoIH07ZXhwb3J0cy5QYXRoRmluZGVyID0gUGF0aEZpbmRlcjsiLCJpbXBvcnQgeyBTdXJha2FydGEgfSBmcm9tICdzdXJha2FydGEnXG5pbXBvcnQgKiBhcyBTdXJha2FydGFFbmdpbmUgZnJvbSAnc3VyYWthcnRhLWFpJ1xuXG5zZWxmLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlRXZlbnQpIHtcbiAgY29uc3QgW2FjdGlvbiwgc3VyYWthcnRhXSA9IG1lc3NhZ2VFdmVudC5kYXRhXG5cbiAgY29uc29sZS5sb2coJ2FjdGlvbjogJyArIGFjdGlvbilcbiAgaWYgKGFjdGlvbiA9PT0gJ3N1Z2dlc3RQbGF5Jykge1xuICAgIGNvbnN0IHN1cmFrYXJ0YV8gPSBTdXJha2FydGEuZnJvbVN0YXRlKHN1cmFrYXJ0YS5zdGF0ZXMpXG4gICAgc3VyYWthcnRhXy50dXJuID0gc3VyYWthcnRhLnR1cm5cbiAgICBjb25zb2xlLmxvZyhzdXJha2FydGEpXG4gICAgY29uc29sZS5sb2coc3VyYWthcnRhXylcbiAgICBjb25zdCBjb21wdXRlZFBsYXkgPSBTdXJha2FydGFFbmdpbmUuc3VnZ2VzdFBsYXkoc3VyYWthcnRhXylcbiAgICBjb25zb2xlLmxvZygnaGVyZScpXG4gICAgc2VsZi5wb3N0TWVzc2FnZShbY29tcHV0ZWRQbGF5XSlcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgYWN0aW5vIGNvZGUnKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICwgcHJlZml4ID0gJ34nO1xuXG4vKipcbiAqIENvbnN0cnVjdG9yIHRvIGNyZWF0ZSBhIHN0b3JhZ2UgZm9yIG91ciBgRUVgIG9iamVjdHMuXG4gKiBBbiBgRXZlbnRzYCBpbnN0YW5jZSBpcyBhIHBsYWluIG9iamVjdCB3aG9zZSBwcm9wZXJ0aWVzIGFyZSBldmVudCBuYW1lcy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEV2ZW50cygpIHt9XG5cbi8vXG4vLyBXZSB0cnkgdG8gbm90IGluaGVyaXQgZnJvbSBgT2JqZWN0LnByb3RvdHlwZWAuIEluIHNvbWUgZW5naW5lcyBjcmVhdGluZyBhblxuLy8gaW5zdGFuY2UgaW4gdGhpcyB3YXkgaXMgZmFzdGVyIHRoYW4gY2FsbGluZyBgT2JqZWN0LmNyZWF0ZShudWxsKWAgZGlyZWN0bHkuXG4vLyBJZiBgT2JqZWN0LmNyZWF0ZShudWxsKWAgaXMgbm90IHN1cHBvcnRlZCB3ZSBwcmVmaXggdGhlIGV2ZW50IG5hbWVzIHdpdGggYVxuLy8gY2hhcmFjdGVyIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBidWlsdC1pbiBvYmplY3QgcHJvcGVydGllcyBhcmUgbm90XG4vLyBvdmVycmlkZGVuIG9yIHVzZWQgYXMgYW4gYXR0YWNrIHZlY3Rvci5cbi8vXG5pZiAoT2JqZWN0LmNyZWF0ZSkge1xuICBFdmVudHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAvL1xuICAvLyBUaGlzIGhhY2sgaXMgbmVlZGVkIGJlY2F1c2UgdGhlIGBfX3Byb3RvX19gIHByb3BlcnR5IGlzIHN0aWxsIGluaGVyaXRlZCBpblxuICAvLyBzb21lIG9sZCBicm93c2VycyBsaWtlIEFuZHJvaWQgNCwgaVBob25lIDUuMSwgT3BlcmEgMTEgYW5kIFNhZmFyaSA1LlxuICAvL1xuICBpZiAoIW5ldyBFdmVudHMoKS5fX3Byb3RvX18pIHByZWZpeCA9IGZhbHNlO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgc2luZ2xlIGV2ZW50IGxpc3RlbmVyLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvbmNlPWZhbHNlXSBTcGVjaWZ5IGlmIHRoZSBsaXN0ZW5lciBpcyBhIG9uZS10aW1lIGxpc3RlbmVyLlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBFRShmbiwgY29udGV4dCwgb25jZSkge1xuICB0aGlzLmZuID0gZm47XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMub25jZSA9IG9uY2UgfHwgZmFsc2U7XG59XG5cbi8qKlxuICogQWRkIGEgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IGVtaXR0ZXIgUmVmZXJlbmNlIHRvIHRoZSBgRXZlbnRFbWl0dGVyYCBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9uY2UgU3BlY2lmeSBpZiB0aGUgbGlzdGVuZXIgaXMgYSBvbmUtdGltZSBsaXN0ZW5lci5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcihlbWl0dGVyLCBldmVudCwgZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIHZhciBsaXN0ZW5lciA9IG5ldyBFRShmbiwgY29udGV4dCB8fCBlbWl0dGVyLCBvbmNlKVxuICAgICwgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIWVtaXR0ZXIuX2V2ZW50c1tldnRdKSBlbWl0dGVyLl9ldmVudHNbZXZ0XSA9IGxpc3RlbmVyLCBlbWl0dGVyLl9ldmVudHNDb3VudCsrO1xuICBlbHNlIGlmICghZW1pdHRlci5fZXZlbnRzW2V2dF0uZm4pIGVtaXR0ZXIuX2V2ZW50c1tldnRdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlIGVtaXR0ZXIuX2V2ZW50c1tldnRdID0gW2VtaXR0ZXIuX2V2ZW50c1tldnRdLCBsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIGVtaXR0ZXI7XG59XG5cbi8qKlxuICogQ2xlYXIgZXZlbnQgYnkgbmFtZS5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gZW1pdHRlciBSZWZlcmVuY2UgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGluc3RhbmNlLlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2dCBUaGUgRXZlbnQgbmFtZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNsZWFyRXZlbnQoZW1pdHRlciwgZXZ0KSB7XG4gIGlmICgtLWVtaXR0ZXIuX2V2ZW50c0NvdW50ID09PSAwKSBlbWl0dGVyLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gIGVsc2UgZGVsZXRlIGVtaXR0ZXIuX2V2ZW50c1tldnRdO1xufVxuXG4vKipcbiAqIE1pbmltYWwgYEV2ZW50RW1pdHRlcmAgaW50ZXJmYWNlIHRoYXQgaXMgbW9sZGVkIGFnYWluc3QgdGhlIE5vZGUuanNcbiAqIGBFdmVudEVtaXR0ZXJgIGludGVyZmFjZS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgbGlzdGluZyB0aGUgZXZlbnRzIGZvciB3aGljaCB0aGUgZW1pdHRlciBoYXMgcmVnaXN0ZXJlZFxuICogbGlzdGVuZXJzLlxuICpcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgdmFyIG5hbWVzID0gW11cbiAgICAsIGV2ZW50c1xuICAgICwgbmFtZTtcblxuICBpZiAodGhpcy5fZXZlbnRzQ291bnQgPT09IDApIHJldHVybiBuYW1lcztcblxuICBmb3IgKG5hbWUgaW4gKGV2ZW50cyA9IHRoaXMuX2V2ZW50cykpIHtcbiAgICBpZiAoaGFzLmNhbGwoZXZlbnRzLCBuYW1lKSkgbmFtZXMucHVzaChwcmVmaXggPyBuYW1lLnNsaWNlKDEpIDogbmFtZSk7XG4gIH1cblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHJldHVybiBuYW1lcy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhldmVudHMpKTtcbiAgfVxuXG4gIHJldHVybiBuYW1lcztcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFRoZSByZWdpc3RlcmVkIGxpc3RlbmVycy5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnMoZXZlbnQpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnRcbiAgICAsIGhhbmRsZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKCFoYW5kbGVycykgcmV0dXJuIFtdO1xuICBpZiAoaGFuZGxlcnMuZm4pIHJldHVybiBbaGFuZGxlcnMuZm5dO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gaGFuZGxlcnMubGVuZ3RoLCBlZSA9IG5ldyBBcnJheShsKTsgaSA8IGw7IGkrKykge1xuICAgIGVlW2ldID0gaGFuZGxlcnNbaV0uZm47XG4gIH1cblxuICByZXR1cm4gZWU7XG59O1xuXG4vKipcbiAqIFJldHVybiB0aGUgbnVtYmVyIG9mIGxpc3RlbmVycyBsaXN0ZW5pbmcgdG8gYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgbnVtYmVyIG9mIGxpc3RlbmVycy5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24gbGlzdGVuZXJDb3VudChldmVudCkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudFxuICAgICwgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKCFsaXN0ZW5lcnMpIHJldHVybiAwO1xuICBpZiAobGlzdGVuZXJzLmZuKSByZXR1cm4gMTtcbiAgcmV0dXJuIGxpc3RlbmVycy5sZW5ndGg7XG59O1xuXG4vKipcbiAqIENhbGxzIGVhY2ggb2YgdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIGV2ZW50IGhhZCBsaXN0ZW5lcnMsIGVsc2UgYGZhbHNlYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdChldmVudCwgYTEsIGEyLCBhMywgYTQsIGE1KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiBmYWxzZTtcblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF1cbiAgICAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGFyZ3NcbiAgICAsIGk7XG5cbiAgaWYgKGxpc3RlbmVycy5mbikge1xuICAgIGlmIChsaXN0ZW5lcnMub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgc3dpdGNoIChsZW4pIHtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSksIHRydWU7XG4gICAgICBjYXNlIDM6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyKSwgdHJ1ZTtcbiAgICAgIGNhc2UgNDogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzKSwgdHJ1ZTtcbiAgICAgIGNhc2UgNTogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCksIHRydWU7XG4gICAgICBjYXNlIDY6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQsIGE1KSwgdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGkgPCBsZW47IGkrKykge1xuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZuLmFwcGx5KGxpc3RlbmVycy5jb250ZXh0LCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aFxuICAgICAgLCBqO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyc1tpXS5mbiwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgc3dpdGNoIChsZW4pIHtcbiAgICAgICAgY2FzZSAxOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCk7IGJyZWFrO1xuICAgICAgICBjYXNlIDI6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSk7IGJyZWFrO1xuICAgICAgICBjYXNlIDM6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIpOyBicmVhaztcbiAgICAgICAgY2FzZSA0OiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEsIGEyLCBhMyk7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmICghYXJncykgZm9yIChqID0gMSwgYXJncyA9IG5ldyBBcnJheShsZW4gLTEpOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaiAtIDFdID0gYXJndW1lbnRzW2pdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpc3RlbmVyc1tpXS5mbi5hcHBseShsaXN0ZW5lcnNbaV0uY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIEFkZCBhIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2NvbnRleHQ9dGhpc10gVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHJldHVybiBhZGRMaXN0ZW5lcih0aGlzLCBldmVudCwgZm4sIGNvbnRleHQsIGZhbHNlKTtcbn07XG5cbi8qKlxuICogQWRkIGEgb25lLXRpbWUgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHJldHVybiBhZGRMaXN0ZW5lcih0aGlzLCBldmVudCwgZm4sIGNvbnRleHQsIHRydWUpO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGxpc3RlbmVycyBvZiBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIE9ubHkgcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgdGhhdCBtYXRjaCB0aGlzIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IE9ubHkgcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgdGhhdCBoYXZlIHRoaXMgY29udGV4dC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBPbmx5IHJlbW92ZSBvbmUtdGltZSBsaXN0ZW5lcnMuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihldmVudCwgZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIHRoaXM7XG4gIGlmICghZm4pIHtcbiAgICBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKGxpc3RlbmVycy5mbikge1xuICAgIGlmIChcbiAgICAgIGxpc3RlbmVycy5mbiA9PT0gZm4gJiZcbiAgICAgICghb25jZSB8fCBsaXN0ZW5lcnMub25jZSkgJiZcbiAgICAgICghY29udGV4dCB8fCBsaXN0ZW5lcnMuY29udGV4dCA9PT0gY29udGV4dClcbiAgICApIHtcbiAgICAgIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGV2ZW50cyA9IFtdLCBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgbGlzdGVuZXJzW2ldLmZuICE9PSBmbiB8fFxuICAgICAgICAob25jZSAmJiAhbGlzdGVuZXJzW2ldLm9uY2UpIHx8XG4gICAgICAgIChjb250ZXh0ICYmIGxpc3RlbmVyc1tpXS5jb250ZXh0ICE9PSBjb250ZXh0KVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50cy5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBSZXNldCB0aGUgYXJyYXksIG9yIHJlbW92ZSBpdCBjb21wbGV0ZWx5IGlmIHdlIGhhdmUgbm8gbW9yZSBsaXN0ZW5lcnMuXG4gICAgLy9cbiAgICBpZiAoZXZlbnRzLmxlbmd0aCkgdGhpcy5fZXZlbnRzW2V2dF0gPSBldmVudHMubGVuZ3RoID09PSAxID8gZXZlbnRzWzBdIDogZXZlbnRzO1xuICAgIGVsc2UgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgbGlzdGVuZXJzLCBvciB0aG9zZSBvZiB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBbZXZlbnRdIFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyhldmVudCkge1xuICB2YXIgZXZ0O1xuXG4gIGlmIChldmVudCkge1xuICAgIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG4gICAgaWYgKHRoaXMuX2V2ZW50c1tldnRdKSBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy9cbi8vIEFsaWFzIG1ldGhvZHMgbmFtZXMgYmVjYXVzZSBwZW9wbGUgcm9sbCBsaWtlIHRoYXQuXG4vL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUub247XG5cbi8vXG4vLyBFeHBvc2UgdGhlIHByZWZpeC5cbi8vXG5FdmVudEVtaXR0ZXIucHJlZml4ZWQgPSBwcmVmaXg7XG5cbi8vXG4vLyBBbGxvdyBgRXZlbnRFbWl0dGVyYCB0byBiZSBpbXBvcnRlZCBhcyBtb2R1bGUgbmFtZXNwYWNlLlxuLy9cbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbi8vXG4vLyBFeHBvc2UgdGhlIG1vZHVsZS5cbi8vXG5pZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBtb2R1bGUpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLk1vdmUgPSB2b2lkIDA7ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge2lmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTt9fWZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7dmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7ZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO2lmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO319ZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge2lmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO2lmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtyZXR1cm4gQ29uc3RydWN0b3I7fWZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtpZiAoa2V5IGluIG9iaikge09iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7fSBlbHNlIHtvYmpba2V5XSA9IHZhbHVlO31yZXR1cm4gb2JqO31cblxuLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBSZXByZXNlbnRzIGEgbW92ZSB0aGF0IGNhbiBiZSBtYWRlIGluIFN1cmFrYXJ0YS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL3ZhclxuTW92ZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG5cblxuXG5cblxuXG5cbiAgZnVuY3Rpb24gTW92ZSgpXG5cblxuXG5cblxuXG4gIHt2YXIgc3JjUm93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO3ZhciBzcmNDb2x1bW4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7dmFyIGRzdFJvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMDt2YXIgZHN0Q29sdW1uID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO3ZhciBpc0F0dGFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogZmFsc2U7dmFyIGRpcmVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDogLTE7X2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vdmUpO19kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNyY1Jvd1wiLCB2b2lkIDApO19kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNyY0NvbHVtblwiLCB2b2lkIDApO19kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImRzdFJvd1wiLCB2b2lkIDApO19kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImRzdENvbHVtblwiLCB2b2lkIDApO19kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlzQXR0YWNrXCIsIHZvaWQgMCk7X2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZGlyZWN0aW9uXCIsIHZvaWQgMCk7XG4gICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFJvdyBvZiBzb3VyY2Uvc3RhcnRpbmcgcG9zaXRpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgdGhpcy5zcmNSb3cgPSBzcmNSb3c7XG5cbiAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICogQ29sdW1uIG9mIHNvdXJjZS9zdGFydGluZyBwb3NpdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICB0aGlzLnNyY0NvbHVtbiA9IHNyY0NvbHVtbjtcblxuICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBSb3cgb2YgZGVzdGluYXRpb24vZmluYWwgcG9zaXRpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtZW1iZXIge251bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgdGhpcy5kc3RSb3cgPSBkc3RSb3c7XG5cbiAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICogQ29sdW1uIG9mIGRlc3RpbmF0aW9uL2ZpbmFsIHBvc2l0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgIHRoaXMuZHN0Q29sdW1uID0gZHN0Q29sdW1uO1xuXG4gICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgdGhpcyBtb3ZlIGlzIGFuIGF0dGFjayAobmVlZCBub3QgYmUgYSBjYXB0dXJlKS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgdGhpcy5pc0F0dGFjayA9IGlzQXR0YWNrO1xuXG4gICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBTdGFydGluZyBkaXJlY3Rpb24sIGlmIGF0dGFjayBtb3ZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbWVtYmVyIHtEaXJlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgfV9jcmVhdGVDbGFzcyhNb3ZlLCBbeyBrZXk6IFwibWFrZUF0dGFja1wiLCB2YWx1ZTogZnVuY3Rpb24gbWFrZUF0dGFjayhcblxuICAgIGRpcmVjdGlvbikge1xuICAgICAgdGhpcy5pc0F0dGFjayA9IHRydWU7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dcbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5cbiAgICAgICAqLyB9LCB7IGtleTogXCJzZXRTb3VyY2VcIiwgdmFsdWU6IGZ1bmN0aW9uIHNldFNvdXJjZShcbiAgICByb3csIGNvbHVtbikge1xuICAgICAgdGhpcy5zcmNSb3cgPSByb3c7XG4gICAgICB0aGlzLnNyY0NvbHVtbiA9IGNvbHVtbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dcbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5cbiAgICAgICAqLyB9LCB7IGtleTogXCJzZXREZXN0aW5hdGlvblwiLCB2YWx1ZTogZnVuY3Rpb24gc2V0RGVzdGluYXRpb24oXG4gICAgcm93LCBjb2x1bW4pIHtcbiAgICAgIHRoaXMuZHN0Um93ID0gcm93O1xuICAgICAgdGhpcy5kc3RDb2x1bW4gPSBjb2x1bW47XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAqIEdlbmVyYXRlIGFuIGV4YWN0IGNvcHkgb2YgdGhpcyBtb3ZlLlxuICAgICAgICogQHJldHVybnMge01vdmV9XG4gICAgICAgKi8gfSwgeyBrZXk6IFwiY2xvbmVcIiwgdmFsdWU6IGZ1bmN0aW9uIGNsb25lKClcbiAgICB7XG4gICAgICByZXR1cm4gTW92ZS5wb3N0VGhyZWFkQm91bmRhcnkodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgKiBSZXBhaXJzIGEge0Bjb2RlIE1vdmV9IG9iamVjdCBhZnRlciBpdCBoYXMgYmVlbiBjb3BpZWQgdGhyb3VnaCBhXG4gICAgICAgKiB3ZWItd29ya2VyIGJvdW5kYXJ5LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7TW92ZX0gbW92ZVxuICAgICAgICovIH1dLCBbeyBrZXk6IFwicG9zdFRocmVhZEJvdW5kYXJ5XCIsIHZhbHVlOiBmdW5jdGlvbiBwb3N0VGhyZWFkQm91bmRhcnkoXG4gICAgbW92ZSkge1xuICAgICAgdmFyIGNtb3ZlID0gbmV3IE1vdmUoKTtcblxuICAgICAgY21vdmUuc3JjUm93ID0gbW92ZS5zcmNSb3c7XG4gICAgICBjbW92ZS5zcmNDb2x1bW4gPSBtb3ZlLnNyY0NvbHVtbjtcbiAgICAgIGNtb3ZlLmRzdFJvdyA9IG1vdmUuZHN0Um93O1xuICAgICAgY21vdmUuZHN0Q29sdW1uID0gbW92ZS5kc3RDb2x1bW47XG4gICAgICBjbW92ZS5pc0F0dGFjayA9IG1vdmUuaXNBdHRhY2s7XG4gICAgICBjbW92ZS5kaXJlY3Rpb24gPSBtb3ZlLmRpcmVjdGlvbjtcblxuICAgICAgcmV0dXJuIGNtb3ZlO1xuICAgIH0gfV0pO3JldHVybiBNb3ZlO30oKTtleHBvcnRzLk1vdmUgPSBNb3ZlO3ZhciBfZGVmYXVsdCA9XG5cblxuTW92ZTtleHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtleHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4cG9ydHMuUGxheWVyU3RhdHMgPSB2b2lkIDA7ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge2lmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTt9fSAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogSG9sZHMgc3RhdGlzdGljYWwgaW5mb3JtYXRpb24gYWJvdXQgYSBwbGF5ZXIgcGxheWluZyBTdXJha2FydGEuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL3ZhclxuUGxheWVyU3RhdHMgPVxuZnVuY3Rpb24gUGxheWVyU3RhdHMoKSB7X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBsYXllclN0YXRzKTtcbiAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IHBlYmJsZXMgLSBuby4gb2YgcGViYmxlcyBsaXZlIGZvciB0aGlzIHBsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gIHRoaXMucGViYmxlcyA9IDA7XG59O2V4cG9ydHMuUGxheWVyU3RhdHMgPSBQbGF5ZXJTdGF0czt2YXIgX2RlZmF1bHQgPVxuXG5cblBsYXllclN0YXRzO2V4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO2V4cG9ydHMuUG9zaXRpb24gPSB2b2lkIDA7ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge2lmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTt9fWZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7dmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7ZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO2lmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO319ZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge2lmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO2lmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtyZXR1cm4gQ29uc3RydWN0b3I7fSAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG5hbWVzcGFjZSBTS1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovdmFyXG5Qb3NpdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBvc2l0aW9uKCkge3ZhciByb3cgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7dmFyIGNvbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9zaXRpb24pO1xuICAgIHRoaXMuc2V0KHJvdywgY29sKTtcbiAgfV9jcmVhdGVDbGFzcyhQb3NpdGlvbiwgW3sga2V5OiBcInNldFwiLCB2YWx1ZTogZnVuY3Rpb24gc2V0KFxuXG4gICAgcm93LCBjb2wpIHtcbiAgICAgIC8qKiBAbWVtYmVyIHtudW1iZXJ9ICovXG4gICAgICB0aGlzLnJvdyA9IHJvdztcblxuICAgICAgLyoqIEBtZW1iZXIge251bWJlcn0gKi9cbiAgICAgIHRoaXMuY29sdW1uID0gY29sO1xuICAgIH0gfSwgeyBrZXk6IFwiaW5kZXhcIiwgdmFsdWU6IGZ1bmN0aW9uIGluZGV4KClcblxuICAgIHtcbiAgICAgIHJldHVybiB0aGlzLnJvdyAqIDYgKyB0aGlzLmNvbHVtbjtcbiAgICB9IH1dLCBbeyBrZXk6IFwiZnJvbVwiLCB2YWx1ZTogZnVuY3Rpb24gZnJvbShcblxuICAgIGluZGV4KSB7XG4gICAgICByZXR1cm4gbmV3IFBvc2l0aW9uKE1hdGguZmxvb3IoaW5kZXggLyA2KSwgaW5kZXggJSA2KTtcbiAgICB9IH1dKTtyZXR1cm4gUG9zaXRpb247fSgpO2V4cG9ydHMuUG9zaXRpb24gPSBQb3NpdGlvbjsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7ZXhwb3J0cy5TdXJha2FydGEgPSBleHBvcnRzLkJMQUNLX1BMQVlFUiA9IGV4cG9ydHMuUkVEX1BMQVlFUiA9IGV4cG9ydHMuTk9UX0ZJTExFRCA9IHZvaWQgMDt2YXIgX2V2ZW50ZW1pdHRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImV2ZW50ZW1pdHRlcjNcIikpO1xudmFyIF90cmF2ZXJzZVV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vdHJhdmVyc2UtdXRpbHNcIikpO1xuXG5cblxuXG5cblxuXG52YXIgX1BsYXllclN0YXRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9QbGF5ZXJTdGF0c1wiKSk7XG52YXIgX3N0ZXBVdGlscyA9IHJlcXVpcmUoXCIuL3N0ZXAtdXRpbHNcIik7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge2lmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDt2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge2lmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtyZXR1cm4gb2JqO31pZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtyZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07fXZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaiA9IHt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IgKHZhciBrZXkgaW4gb2JqKSB7aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHt2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTt9IGVsc2Uge25ld09ialtrZXldID0gb2JqW2tleV07fX19bmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtpZiAoY2FjaGUpIHtjYWNoZS5zZXQob2JqLCBuZXdPYmopO31yZXR1cm4gbmV3T2JqO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge3JldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTt9ZnVuY3Rpb24gX3R5cGVvZihvYmopIHtpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtyZXR1cm4gdHlwZW9mIG9iajt9O30gZWxzZSB7X3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7cmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7fTt9cmV0dXJuIF90eXBlb2Yob2JqKTt9ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge2lmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTt9fWZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7dmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7ZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO2lmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO319ZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge2lmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO2lmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtyZXR1cm4gQ29uc3RydWN0b3I7fWZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge3JldHVybiBjYWxsO31yZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTt9ZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7aWYgKHNlbGYgPT09IHZvaWQgMCkge3Rocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTt9cmV0dXJuIHNlbGY7fWZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7X2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtyZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO307cmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTt9ZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7aWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge3Rocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTt9c3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pO2lmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO31mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge19zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge28uX19wcm90b19fID0gcDtyZXR1cm4gbzt9O3JldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7fVxuXG52YXIgTk9UX0ZJTExFRCA9IC0xO2V4cG9ydHMuTk9UX0ZJTExFRCA9IE5PVF9GSUxMRUQ7XG52YXIgUkVEX1BMQVlFUiA9IDA7IC8vIHN0YXJ0aW5nIHBsYXllclxuZXhwb3J0cy5SRURfUExBWUVSID0gUkVEX1BMQVlFUjt2YXIgQkxBQ0tfUExBWUVSID0gMTsgLy8gb3RoZXIgcGxheWVyXG5cbi8qKlxuICogSGFuZGxlIHRoZSBzdGF0ZSBvZiBhbiBhY3R1YWwgU3VyYWthcnRhIGdhbWUuXG4gKi9leHBvcnRzLkJMQUNLX1BMQVlFUiA9IEJMQUNLX1BMQVlFUjt2YXJcblN1cmFrYXJ0YSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0V2ZW50RW1pdHRlcikge19pbmhlcml0cyhTdXJha2FydGEsIF9FdmVudEVtaXR0ZXIpO1xuICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgU3VyYWthcnRhIGJvYXJkIHN0YXRlIHdpdGggdGhlIHBlYmJsZXMgaW4gdGhlaXIgaW5pdGlhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHBvc2l0aW9ucy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtub0luaXQ9ZmFsc2VdIC0gd2hldGhlciBub3QgdG8gaW5pdGlhbGl6ZSB0aGUgYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgZnVuY3Rpb24gU3VyYWthcnRhKCkge3ZhciBfdGhpczt2YXIgbm9Jbml0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3VyYWthcnRhKTtcbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihTdXJha2FydGEpLmNhbGwodGhpcykpO1xuXG4gICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogU3RhdGVzIG9mIGVhY2ggcGViYmxlIHBvc2l0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtZW1iZXIge0FycmF5PG51bWJlcj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgX3RoaXMuc3RhdGVzID0gbmV3IEFycmF5KDM2KTtcblxuICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIE5vLiBvZiBtb3ZlcyBkb25lIGFscmVhZHkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1lbWJlciB7bnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgIF90aGlzLnR1cm4gPSAwO1xuXG4gICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIFJlc3BvbmRlcnMgdGhhdCBhcmUgaW52b2tlZCBvbiB0aGUgdHVybnMgb2YgdGhlIHJlZCAmXG4gICAgICAgICAgICAgICAgICAgICAqIGJsYWNrIHBsYXllcnMsIGFuZCB0aGVuIG9uIGJvdGguIEJvdGggdHlwZSByZXNwb25kZXJzIGFyZSBub3RpZmllZFxuICAgICAgICAgICAgICAgICAgICAgKiBmaXJzdC5cbiAgICAgICAgICAgICAgICAgICAgICogQG1lbWJlciB7QXJyYXk8QXJyYXk8U3VyYWthcnRhUmVzcG9uZGVyPj59XG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgIF90aGlzLnJlc3BvbmRlcnMgPSBbW10sIFtdLCBbXV07XG5cbiAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBTdGF0cyBmb3IgdGhlIHJlZCAmIGJsYWNrIHBsYXllci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbWVtYmVyIHt7IHJlZDogUGxheWVyU3RhdHMsIGJsYWNrOiBQbGF5ZXJTdGF0cyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgIF90aGlzLnBsYXllclN0YXRzID0ge1xuICAgICAgcmVkOiBuZXcgX1BsYXllclN0YXRzW1wiZGVmYXVsdFwiXSgpLFxuICAgICAgYmxhY2s6IG5ldyBfUGxheWVyU3RhdHNbXCJkZWZhdWx0XCJdKCkgfTtcblxuXG4gICAgaWYgKCFub0luaXQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICBfdGhpcy5zdGF0ZXNbaV0gPSBSRURfUExBWUVSO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgX2kgPSAxMjsgX2kgPCAyNDsgX2krKykge1xuICAgICAgICBfdGhpcy5zdGF0ZXNbX2ldID0gTk9UX0ZJTExFRDtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIF9pMiA9IDI0OyBfaTIgPCAzNjsgX2kyKyspIHtcbiAgICAgICAgX3RoaXMuc3RhdGVzW19pMl0gPSBCTEFDS19QTEFZRVI7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnBsYXllclN0YXRzLnJlZC5wZWJibGVzID0gMTI7XG4gICAgICBfdGhpcy5wbGF5ZXJTdGF0cy5ibGFjay5wZWJibGVzID0gMTI7XG4gICAgfXJldHVybiBfdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgICAqIEluZGV4IG9mIGEgcG9zaXRpb24gaW4ge0Bjb2RlIHRoaXMuc3RhdGVzfVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9fY3JlYXRlQ2xhc3MoU3VyYWthcnRhLCBbeyBrZXk6IFwiaW5kZXhPZlwiLCB2YWx1ZTogZnVuY3Rpb24gaW5kZXhPZihcbiAgICByLCBjKSB7XG4gICAgICByZXR1cm4gciAqIDYgKyBjO1xuICAgIH0gfSwgeyBrZXk6IFwic3RhdGVcIiwgdmFsdWU6IGZ1bmN0aW9uIHN0YXRlKFxuXG4gICAgcm93LCBjb2x1bW4pIHtcbiAgICAgIGlmIChyb3cgPCAwIHx8IGNvbHVtbiA8IDAgfHwgcm93ID49IDYgfHwgY29sdW1uID49IDYpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnN0YXRlc1tyb3cgKiA2ICsgY29sdW1uXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAqIFRoZSBwbGF5ZXIgd2hvc2UgdHVybiBpdCBpcyBjdXJyZW50bHkuXG4gICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9XG4gICAgICAgKi8gfSwgeyBrZXk6IFwic3RlcFwiLFxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBQZXJmb3JtIGEgc2ltcGxlIG1vdmUgb24gdGhlIGJvYXJkLiBPbmx5IHZhbGlkYXRpb24gdGhhdCBvY2N1cnMgaXMgaWYgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogZGVzdGluYXRpb24gaXMgYWxyZWFkeSBmaWxsZWQgb3IgaWYgaXQgaXNuJ3QgdGhlIHBlYmJsZSdzIHR1cm4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBfSWYgdGhlIGdhbWUgaXMgZmluaXNoZWQgZHVlIHRvIHRoaXMgbW92ZV86IFRoZSByZXNwb25kZXJzIHdpbGwgbm90IGJlIG5vdGlmaWVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHJhdGhlciB0aGUgJ2dhbWVvdmVyJyBldmVudCBpcyBlbWl0dGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJzIC0gaW5pdGlhbCBwb3NpdGlvbiByb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gY3MgLSBpbnRpYWwgcG9zaXRpb24gY29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHJkIC0gZmluYWwgcG9zaXRpb24gcm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGNkIC0gZmluYWwgcG9zaXRpb24gY29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBbbm9SZXNwb25kPWZhbHNlXSAtIHdoZXRoZXIgbm90IHRvIGNvbnNpZGVyIHRoaXMgYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqICB0dXJuaW5nIG1vdmUsIGUuZy4gaW5jcmVtZW50IHRoZSBjdXJyZW50IHR1cm4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBjYXB0dXJlIC0gaXMgdGhpcyBhIGNhcHR1cmUgbW92ZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAdGhyb3dzIGlmIGRlc3RpbmF0aW9uIGlzIGFscmVhZHkgZmlsbGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICovdmFsdWU6IGZ1bmN0aW9uIHN0ZXAoXG4gICAgcnMsIGNzLCByZCwgY2QpIHt2YXIgbm9SZXNwb25kID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiBmYWxzZTt2YXIgY2FwdHVyZSA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDogZmFsc2U7XG4gICAgICB2YXIgaXMgPSB0aGlzLmluZGV4T2YocnMsIGNzKTtcbiAgICAgIHZhciBpZCA9IHRoaXMuaW5kZXhPZihyZCwgY2QpO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZXNbaXNdICE9PSB0aGlzLnR1cm5QbGF5ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IHR1cm5pbmcgcGxheWVyIHBlYmJsZVwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghY2FwdHVyZSAmJiB0aGlzLnN0YXRlc1tpZF0gIT09IE5PVF9GSUxMRUQpIHtcbiAgICAgICAgLy8gY2FwdHVyZSBpcyB1c2VkIGludGVybmFsbHlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNhbm5vdCBzdGVwIGludG8gZGVzdGluYXRpb24gc2luY2UgaXQgaXMgYWxyZWFkeSBmaWxsZWRcIik7XG5cbiAgICAgIH1cblxuICAgICAgY2FwdHVyZSA9IHRoaXMuc3RhdGVzW2lkXSAhPT0gTk9UX0ZJTExFRDtcblxuICAgICAgdGhpcy5zdGF0ZXNbaWRdID0gdGhpcy5zdGF0ZXNbaXNdO1xuICAgICAgdGhpcy5zdGF0ZXNbaXNdID0gTk9UX0ZJTExFRDtcblxuICAgICAgaWYgKCFub1Jlc3BvbmQpIHtcbiAgICAgICAgdmFyIGNvbG9yO1xuXG4gICAgICAgIGlmIChjYXB0dXJlKSB7XG4gICAgICAgICAgY29sb3IgPSB0aGlzLnR1cm5QbGF5ZXJDb2xvcjtcbiAgICAgICAgICAtLXRoaXMucGxheWVyU3RhdHNbY29sb3JdLnBlYmJsZXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FwdHVyZSAmJiB0aGlzLnBsYXllclN0YXRzW2NvbG9yXS5wZWJibGVzIDw9IDApIHtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJnYW1lb3ZlclwiLCBjb2xvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50dXJuKys7XG4gICAgICAgICAgdGhpcy5fbm90aWZ5UmVzcG9uZGVyc09uVHVybigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgKiBXcmFwcGVyIGFyb3VuZCBgc3RlcGAgdGhhdCB2YWxpZGF0ZXMgdGhlIHN0ZXAgdXNpbmcgYHZhbGlkYXRlU3RlcGAuXG4gICAgICAgKi8gfSwgeyBrZXk6IFwic2FmZVN0ZXBcIiwgdmFsdWU6IGZ1bmN0aW9uIHNhZmVTdGVwKFxuICAgIHJzLCBjcywgcmQsIGNkKSB7dmFyIG5vUmVzcG9uZCA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogZmFsc2U7XG4gICAgICBpZiAoKDAsIF9zdGVwVXRpbHMudmFsaWRhdGVTdGVwKShycywgY3MsIHJkLCBjZCkpIHtcbiAgICAgICAgdGhpcy5zdGVwKHJzLCBjcywgcmQsIGNkLCBub1Jlc3BvbmQpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAqIFBlcmZvcm0gYW4gYXR0YWNrIG1vdmVcbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByIC0gc3RhcnRpbmcgcm93XG4gICAgICAgKiBAcGFyYW0ge251bWJlcn0gYyAtIHN0YXJ0aW5nIGNvbFxuICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGRpciAtIGRpcmVjdGlvbiBvZiB0cmF2ZXJzaW5nXG4gICAgICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGN1dCAtIHByZWZlcnJlZCBlbmRpbmcgcG9zaXRpb25cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NhdmVTdGVwcz10cnVlXSAtIHJldHVybnMgdGhlIGludGVybWVkaWF0ZSBzdGVwcyBvZiB0aGUgbW92ZVxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBbcGVyZm9ybT10cnVlXSAtIHdoZXRoZXIgdG8gYWN0dWFsIHBlcmZvcm0gdGhlIG1vdmVcbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW25vUmVzcG9uZD1mYWxzZV0gLSB3aGV0aGVyIHRvIG5vdCBjb25zaWRlciB0aGlzIFwibW92ZVwiIGZvciB0aGUgdHVyblxuICAgICAgICovIH0sIHsga2V5OiBcInRyYXZlcnNlXCIsIHZhbHVlOiBmdW5jdGlvbiB0cmF2ZXJzZShcblxuICAgIHIsXG4gICAgYyxcbiAgICBkaXIsXG4gICAgY3V0KVxuXG5cblxuICAgIHt2YXIgc2F2ZVN0ZXBzID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiB0cnVlO3ZhciBwZXJmb3JtID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiB0cnVlO3ZhciBub1Jlc3BvbmQgPSBhcmd1bWVudHMubGVuZ3RoID4gNiAmJiBhcmd1bWVudHNbNl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s2XSA6IGZhbHNlO1xuICAgICAgaWYgKFxuICAgICAgX3RyYXZlcnNlVXRpbHMuRGlyZWN0aW9ucy5pc0hvcml6b250YWwoZGlyKSAmJiAociA9PT0gMCB8fCByID09PSA1KSB8fFxuICAgICAgX3RyYXZlcnNlVXRpbHMuRGlyZWN0aW9ucy5pc1ZlcnRpY2FsKGRpcikgJiYgKGMgPT09IDAgfHwgYyA9PT0gNSkpXG4gICAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChcbiAgICAgICAgcikuY29uY2F0KGMsIFwiIGNhbm5vdCBiZSBsb29wZWQgaW4gZGlyZWN0aW9uIFwiKS5jb25jYXQoZGlyLCBcIiwgZW5kcyBhdCBjb3JuZXJcIikpO1xuXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZXNbdGhpcy5pbmRleE9mKHIsIGMpXSAhPT0gdGhpcy50dXJuUGxheWVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCB0dXJuaW5nIHBsYXllcidzIHBlYmJsZVwiKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0ZXBzID0gKDAsIF90cmF2ZXJzZVV0aWxzLmZpbmRQYXRoKSh0aGlzLCByLCBjLCBkaXIsIGN1dCwgIXNhdmVTdGVwcyAmJiAhcGVyZm9ybSk7XG5cbiAgICAgIGlmIChwZXJmb3JtKSB7XG4gICAgICAgIHZhciBsYXN0UG9zaXRpb24gPSBzdGVwc1tzdGVwcy5sZW5ndGggLSAxXTtcbiAgICAgICAgdGhpcy5zdGVwKHIsIGMsIGxhc3RQb3NpdGlvbi5yb3csIGxhc3RQb3NpdGlvbi5jb2x1bW4sIG5vUmVzcG9uZCwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGVwcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAqIEl0ZXJhdGUgb3ZlciBhbGwgcG9zaXRpb25zIHdpdGggYSBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIHRocmVlIGFyZ3VtZW50czpcbiAgICAgICAqIDEuIFBlYmJsZSBzdGF0ZVxuICAgICAgICogMi4gUm93XG4gICAgICAgKiAzLiBDb2x1bW5cbiAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgKi8gfSwgeyBrZXk6IFwiZm9yRWFjaFwiLCB2YWx1ZTogZnVuY3Rpb24gZm9yRWFjaChcbiAgICBjYWxsYmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIHIgPSAwOyByIDwgNjsgcisrKSB7XG4gICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgNjsgYysrLCBpKyspIHtcbiAgICAgICAgICBjYWxsYmFjayh0aGlzLnN0YXRlc1tpXSwgciwgYyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IH0sIHsga2V5OiBcImNvcHlUb1wiLCB2YWx1ZTogZnVuY3Rpb24gY29weVRvKFxuXG4gICAgc3VyYWthcnRhKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM2OyBpKyspIHtcbiAgICAgICAgc3VyYWthcnRhLnN0YXRlc1tpXSA9IHRoaXMuc3RhdGVzW2ldO1xuICAgICAgfVxuICAgIH0gfSwgeyBrZXk6IFwiY29weUZyb21cIiwgdmFsdWU6IGZ1bmN0aW9uIGNvcHlGcm9tKFxuXG4gICAgc3VyYWthcnRhKSB7XG4gICAgICBzdXJha2FydGEuY29weVRvKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICogQ2xvbmUgdGhpcyBpbnN0YW5jZSB3aXRob3V0IHRoZSByZXNwb25kZXJzLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtTdXJha2FydGF9XG4gICAgICAgKi8gfSwgeyBrZXk6IFwiY2xvbmVcIiwgdmFsdWU6IGZ1bmN0aW9uIGNsb25lKClcbiAgICB7XG4gICAgICB2YXIgY2xvbmVkU3RhdGUgPSBuZXcgU3VyYWthcnRhKHRydWUpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM2OyBpKyspIHtcbiAgICAgICAgY2xvbmVkU3RhdGUuc3RhdGVzW2ldID0gdGhpcy5zdGF0ZXNbaV07XG4gICAgICB9XG5cbiAgICAgIGNsb25lZFN0YXRlLnR1cm4gPSB0aGlzLnR1cm47XG4gICAgICByZXR1cm4gY2xvbmVkU3RhdGU7XG4gICAgfVxuXG4gICAgLyoqICBAcHJpdmF0ZSAqLyB9LCB7IGtleTogXCJfbm90aWZ5UmVzcG9uZGVyc09uVHVyblwiLCB2YWx1ZTogZnVuY3Rpb24gX25vdGlmeVJlc3BvbmRlcnNPblR1cm4oKVxuICAgIHtcbiAgICAgIHRoaXMucmVzcG9uZGVyc1syXS5mb3JFYWNoKGZ1bmN0aW9uIChyZXNwb25kZXIpIHtyZXR1cm4gcmVzcG9uZGVyLm9uVHVybigpO30pO1xuICAgICAgdGhpcy5yZXNwb25kZXJzW3RoaXMudHVyblBsYXllcl0uZm9yRWFjaChmdW5jdGlvbiAocmVzcG9uZGVyKSB7cmV0dXJuIHJlc3BvbmRlci5vblR1cm4oKTt9KTtcbiAgICB9IH0sIHsga2V5OiBcInR1cm5QbGF5ZXJcIiwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7cmV0dXJuIHRoaXMudHVybiAlIDI7fSAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1lbWJlciB7J3JlZCcgfCAnYmxhY2snfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi8gfSwgeyBrZXk6IFwidHVyblBsYXllckNvbG9yXCIsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiB0aGlzLnR1cm5QbGF5ZXIgPT09IDAgPyBcInJlZFwiIDogXCJibGFja1wiO30gfV0pO3JldHVybiBTdXJha2FydGE7fShfZXZlbnRlbWl0dGVyW1wiZGVmYXVsdFwiXSk7XG4vKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogR2VuZXJhdGUgYSBgU3VyYWthcnRhYCBpbnN0YW5jZSB3aXRoIGEgcHJlZGVmaW5lZCBsYXlvdXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtBcnJheTxpbnQ+fSBzdGF0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHJldHVybnMge1N1cmFrYXJ0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovZXhwb3J0cy5TdXJha2FydGEgPSBTdXJha2FydGE7XG5TdXJha2FydGEuZnJvbVN0YXRlID0gZnVuY3Rpb24gKHN0YXRlcykge1xuICB2YXIgaW5zdGFuY2UgPSBuZXcgU3VyYWthcnRhKHRydWUpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMzY7IGkrKykge1xuICAgIGluc3RhbmNlLnN0YXRlc1tpXSA9IHN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZXNbaV0gPT09IFJFRF9QTEFZRVIpIHtcbiAgICAgICsraW5zdGFuY2UucGxheWVyU3RhdHMucmVkLnBlYmJsZXM7XG4gICAgfSBlbHNlIGlmIChzdGF0ZXNbaV0gPT09IEJMQUNLX1BMQVlFUikge1xuICAgICAgKytpbnN0YW5jZS5wbGF5ZXJTdGF0cy5ibGFjay5wZWJibGVzO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbnN0YW5jZTtcbn07XG5cbi8qKlxuICAgICogQGludGVyZmFjZSBTdXJha2FydGFSZXNwb25kZXJcbiAgICAqXG4gICAgKiBAbWV0aG9kIG9uVHVyblxuICAgICogQHBhcmFtIHtTdXJha2FydGF9IHN1cmFrYXJ0YVxuICAgICovIiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO3ZhciBfZXhwb3J0TmFtZXMgPSB7IFJFRF9QTEFZRVI6IHRydWUsIEJMQUNLX1BMQVlFUjogdHJ1ZSwgTk9UX0ZJTExFRDogdHJ1ZSwgU3VyYWthcnRhOiB0cnVlLCBNb3ZlOiB0cnVlLCBQb3NpdGlvbjogdHJ1ZSB9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJFRF9QTEFZRVJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gX1N1cmFrYXJ0YS5SRURfUExBWUVSO30gfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQkxBQ0tfUExBWUVSXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7cmV0dXJuIF9TdXJha2FydGEuQkxBQ0tfUExBWUVSO30gfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTk9UX0ZJTExFRFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfU3VyYWthcnRhLk5PVF9GSUxMRUQ7fSB9KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTdXJha2FydGFcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gX1N1cmFrYXJ0YS5TdXJha2FydGE7fSB9KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNb3ZlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7cmV0dXJuIF9Nb3ZlLk1vdmU7fSB9KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJQb3NpdGlvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfUG9zaXRpb24uUG9zaXRpb247fSB9KTtcblxuXG5cbnZhciBfU3VyYWthcnRhID0gcmVxdWlyZShcIi4vU3VyYWthcnRhXCIpO1xudmFyIF9Nb3ZlID0gcmVxdWlyZShcIi4vTW92ZVwiKTtcbnZhciBfUG9zaXRpb24gPSByZXF1aXJlKFwiLi9Qb3NpdGlvblwiKTtcbnZhciBfdHJhdmVyc2VVdGlscyA9IHJlcXVpcmUoXCIuL3RyYXZlcnNlLXV0aWxzXCIpO09iamVjdC5rZXlzKF90cmF2ZXJzZVV0aWxzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfdHJhdmVyc2VVdGlsc1trZXldO30gfSk7fSk7XG52YXIgX3N0ZXBVdGlscyA9IHJlcXVpcmUoXCIuL3N0ZXAtdXRpbHNcIik7T2JqZWN0LmtleXMoX3N0ZXBVdGlscykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7aWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO2lmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gX3N0ZXBVdGlsc1trZXldO30gfSk7fSk7XG52YXIgX1BsYXllclN0YXRzID0gcmVxdWlyZShcIi4vUGxheWVyU3RhdHNcIik7T2JqZWN0LmtleXMoX1BsYXllclN0YXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfUGxheWVyU3RhdHNba2V5XTt9IH0pO30pOyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2YWxpZGF0ZVN0ZXBcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gX3ZhbGlkYXRlU3RlcC52YWxpZGF0ZVN0ZXA7fSB9KTtleHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDt2YXIgX3ZhbGlkYXRlU3RlcCA9IHJlcXVpcmUoXCIuL3ZhbGlkYXRlU3RlcFwiKTt2YXIgX2RlZmF1bHQgPVxuXG5cblxue1xuICB2YWxpZGF0ZVN0ZXA6IF92YWxpZGF0ZVN0ZXAudmFsaWRhdGVTdGVwIH07ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7ZXhwb3J0cy52YWxpZGF0ZVN0ZXAgPSB2YWxpZGF0ZVN0ZXA7ZnVuY3Rpb24gdmFsaWRhdGVTdGVwKHIwLCBjMCwgcjEsIGMxKSB7XG4gIHJldHVybiByMSA+PSAwICYmIGMxID49IDAgJiYgcjEgPCA2ICYmIGMxIDwgNiAmJlxuICBNYXRoLmFicyhyMSAtIHIwKSA8PSAxICYmIE1hdGguYWJzKGMxIC0gYzApIDw9IDE7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO2V4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5EaXJlY3Rpb25zID0gZXhwb3J0cy5ET1dOID0gZXhwb3J0cy5SSUdIVCA9IGV4cG9ydHMuVVAgPSBleHBvcnRzLkxFRlQgPSB2b2lkIDA7dmFyIExFRlQgPSAxMDtleHBvcnRzLkxFRlQgPSBMRUZUO1xudmFyIFVQID0gMTE7ZXhwb3J0cy5VUCA9IFVQO1xudmFyIFJJR0hUID0gMTI7ZXhwb3J0cy5SSUdIVCA9IFJJR0hUO1xudmFyIERPV04gPSAxMztleHBvcnRzLkRPV04gPSBET1dOO1xuXG52YXIgRGlyZWN0aW9ucyA9IHtcbiAgTEVGVDogTEVGVCxcbiAgVVA6IFVQLFxuICBSSUdIVDogUklHSFQsXG4gIERPV046IERPV04gfTtleHBvcnRzLkRpcmVjdGlvbnMgPSBEaXJlY3Rpb25zO3ZhciBfZGVmYXVsdCA9XG5cblxue1xuICBMRUZUOiBMRUZULFxuICBVUDogVVAsXG4gIFJJR0hUOiBSSUdIVCxcbiAgRE9XTjogRE9XTixcbiAgRGlyZWN0aW9uczogRGlyZWN0aW9ucyxcbiAgZ2V0IFRPUCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXJlY3Rpb25zLlRPUCBpcyBpbnZhbGlkLiBVc2UgRGlyZWN0aW9ucy5VUFwiKTtcbiAgfSxcbiAgZ2V0IEJPVFRPTSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXJlY3Rpb25zLkJPVFRPTSBpcyBpbnZhbGlkLiBVc2UgRGlyZWN0aW9ucy5ET1dOXCIpO1xuICB9LFxuICBpc0hvcml6b250YWw6IGZ1bmN0aW9uIGlzSG9yaXpvbnRhbChkKSB7XG4gICAgcmV0dXJuIGQgPT09IExFRlQgfHwgZCA9PT0gUklHSFQ7XG4gIH0sXG4gIGlzVmVydGljYWw6IGZ1bmN0aW9uIGlzVmVydGljYWwoZCkge1xuICAgIHJldHVybiBkID09PSBVUCB8fCBkID09PSBET1dOO1xuICB9LFxuICBvZjogZnVuY3Rpb24gb2Yoc3RhcnQsIGVuZCkge1xuICAgIGlmIChlbmRbMV0gPiA1KSB7XG4gICAgICByZXR1cm4gUklHSFQ7XG4gICAgfSBlbHNlIGlmIChlbmRbMV0gPCAwKSB7XG4gICAgICByZXR1cm4gTEVGVDtcbiAgICB9XG4gICAgaWYgKGVuZFswXSA+IDUpIHtcbiAgICAgIHJldHVybiBET1dOO1xuICAgIH0gZWxzZSBpZiAoZW5kWzBdIDwgMCkge1xuICAgICAgcmV0dXJuIFVQO1xuICAgIH1cblxuICAgIHZhciByID0gZW5kWzBdIC0gc3RhcnRbMF07XG4gICAgdmFyIGMgPSBlbmRbMV0gLSBzdGFydFsxXTtcblxuICAgIGlmIChyICogYyAhPT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiKFwiLmNvbmNhdChcbiAgICAgIHN0YXJ0WzBdLCBcIiwgXCIpLmNvbmNhdChzdGFydFsxXSwgXCIpIHRvIChcIikuY29uY2F0KGVuZFswXSwgXCIsIFwiKS5jb25jYXQoZW5kWzFdLCBcIikgaXNuJ3QgYW4gb3J0aG9nb25hbCBkaXJlY3Rpb25cIikpO1xuXG4gICAgfVxuICAgIGlmIChyICE9PSAwKSB7XG4gICAgICByZXR1cm4gciA+IDAgPyBET1dOIDogVVA7XG4gICAgfVxuICAgIGlmIChjICE9PSAwKSB7XG4gICAgICByZXR1cm4gYyA+IDAgPyBSSUdIVCA6IExFRlQ7XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgIFwiTm8gbW92ZSBtYWRlLCBhbmQgZGlyZWN0aW9uIGNhbm5vdCBiZSBnaXZlbiB0byB6ZXJvIHZlY3Rvci5cIik7XG5cbiAgfSB9O2V4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gX3R5cGVvZihvYmopIHtpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtyZXR1cm4gdHlwZW9mIG9iajt9O30gZWxzZSB7X3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7cmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7fTt9cmV0dXJuIF90eXBlb2Yob2JqKTt9T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO3ZhciBfZXhwb3J0TmFtZXMgPSB7IERpcmVjdGlvbnM6IHRydWUsIExFRlQ6IHRydWUsIFVQOiB0cnVlLCBSSUdIVDogdHJ1ZSwgRE9XTjogdHJ1ZSwgZ2V0TG9vcFJhZGl1czogdHJ1ZSwgZ2V0TG9vcFJvdGF0aW9uOiB0cnVlLCBnZXRMb29wVGFuZ2VudDogdHJ1ZSwgZ2V0TG9vcFRlcm1pbmFsOiB0cnVlIH07T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRGlyZWN0aW9uc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfRGlyZWN0aW9uc1tcImRlZmF1bHRcIl07fSB9KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJMRUZUXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7cmV0dXJuIF9EaXJlY3Rpb25zLkxFRlQ7fSB9KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJVUFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfRGlyZWN0aW9ucy5VUDt9IH0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJJR0hUXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7cmV0dXJuIF9EaXJlY3Rpb25zLlJJR0hUO30gfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRE9XTlwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfRGlyZWN0aW9ucy5ET1dOO30gfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0TG9vcFJhZGl1c1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfbG9vcEluZm8uZ2V0TG9vcFJhZGl1czt9IH0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldExvb3BSb3RhdGlvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gZ2V0KCkge3JldHVybiBfbG9vcEluZm8uZ2V0TG9vcFJvdGF0aW9uO30gfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0TG9vcFRhbmdlbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtyZXR1cm4gX2xvb3BJbmZvLmdldExvb3BUYW5nZW50O30gfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0TG9vcFRlcm1pbmFsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7cmV0dXJuIF9sb29wSW5mby5nZXRMb29wVGVybWluYWw7fSB9KTtleHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDt2YXIgX0RpcmVjdGlvbnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9EaXJlY3Rpb25zXCIpKTtcblxuXG5cbnZhciBfbG9vcEluZm8gPSByZXF1aXJlKFwiLi9sb29wLWluZm9cIik7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxudmFyIF9wYXRoRmluZGVyID0gcmVxdWlyZShcIi4vcGF0aC1maW5kZXJcIik7T2JqZWN0LmtleXMoX3BhdGhGaW5kZXIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge2lmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9leHBvcnROYW1lcywga2V5KSkgcmV0dXJuO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7cmV0dXJuIF9wYXRoRmluZGVyW2tleV07fSB9KTt9KTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7aWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO3ZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7aWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge3JldHVybiBvYmo7fWlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge3JldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTt9dmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqID0ge307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2ZvciAodmFyIGtleSBpbiBvYmopIHtpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge3ZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO2lmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO30gZWxzZSB7bmV3T2JqW2tleV0gPSBvYmpba2V5XTt9fX1uZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO2lmIChjYWNoZSkge2NhY2hlLnNldChvYmosIG5ld09iaik7fXJldHVybiBuZXdPYmo7fXZhciBfZGVmYXVsdCA9XG5cbntcbiAgZ2V0TG9vcFJhZGl1czogX2xvb3BJbmZvLmdldExvb3BSYWRpdXMsXG4gIGdldExvb3BSb3RhdGlvbjogX2xvb3BJbmZvLmdldExvb3BSb3RhdGlvbixcbiAgZ2V0TG9vcFRhbmdlbnQ6IF9sb29wSW5mby5nZXRMb29wVGFuZ2VudCxcbiAgZ2V0TG9vcFRlcm1pbmFsOiBfbG9vcEluZm8uZ2V0TG9vcFRlcm1pbmFsIH07ZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7ZXhwb3J0cy5nZXRMb29wUmFkaXVzID0gZ2V0TG9vcFJhZGl1cztleHBvcnRzLmdldExvb3BSb3RhdGlvbiA9IGdldExvb3BSb3RhdGlvbjtleHBvcnRzLmdldExvb3BUYW5nZW50ID0gZ2V0TG9vcFRhbmdlbnQ7ZXhwb3J0cy5nZXRMb29wVGVybWluYWwgPSBnZXRMb29wVGVybWluYWw7dmFyIF9EaXJlY3Rpb25zID0gcmVxdWlyZShcIi4vRGlyZWN0aW9uc1wiKTtcblxuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBnZXRMb29wUmFkaXVzKGRpciwgciwgYykge1xuICBpZiAoZGlyID09PSBfRGlyZWN0aW9ucy5EaXJlY3Rpb25zLkxFRlQgfHwgZGlyID09PSBfRGlyZWN0aW9ucy5EaXJlY3Rpb25zLlJJR0hUKSB7XG4gICAgcmV0dXJuIHIgPCAzID8gciA6IDUgLSByO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjIDwgMyA/IGMgOiA1IC0gYztcbiAgfVxufVxuXG5mdW5jdGlvbiBhbmdsZShyMCwgYzAsIHIxLCBjMSkge1xuICBpZiAocjAgPT09IHIxKSB7XG4gICAgcmV0dXJuIGMxID4gYzAgPyAwIDogTWF0aC5QSTtcbiAgfSBlbHNlIGlmIChjMSA9PT0gYzApIHtcbiAgICByZXR1cm4gcjEgPiByMCA/IE1hdGguUEkgLyAyIDogMS41ICogTWF0aC5QSTtcbiAgfVxufVxuXG4vKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgYW5ndWxhciByb3RhdGlvbiB3aGVuIGxvb3BpbmcgZnJvbSBzdGFydCB0b1xuICAgKiBlbmQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFhcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0WVxuICAgKiBAcGFyYW0ge251bWJlcn0gZW5kWFxuICAgKiBAcGFyYW0ge251bWJlcn0gZW5kWVxuICAgKi9cbmZ1bmN0aW9uIGdldExvb3BSb3RhdGlvbihzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSkge1xuICB2YXIgY3g7XG5cbiAgaWYgKGVuZFggPT09IDAgfHwgc3RhcnRYID09PSAwKSB7XG4gICAgY3ggPSAwO1xuICB9IGVsc2Uge1xuICAgIGN4ID0gNTtcbiAgfVxuXG4gIHZhciBjeTtcblxuICBpZiAoZW5kWSA9PT0gMCB8fCBzdGFydFkgPT09IDApIHtcbiAgICBjeSA9IDA7XG4gIH0gZWxzZSB7XG4gICAgY3kgPSA1O1xuICB9XG5cbiAgdmFyIHN0YXJ0QW5nbGUgPSBhbmdsZShjeCwgY3ksIHN0YXJ0WCwgc3RhcnRZKTtcbiAgdmFyIGVuZEFuZ2xlID0gYW5nbGUoY3gsIGN5LCBlbmRYLCBlbmRZKTtcblxuICByZXR1cm4gW2N4LCBjeSwgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIE1hdGguYWJzKGVuZFggLSBzdGFydFgpXTtcbn1cblxuLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIGRpcmVjdGlvbiBvZiB0aGUgdGFuZ2VudCB0byB0aGUgbG9vcCAoZ2VvbWV0cmljYWxseSkgZW1lcmdpbmdcbiAgICogZnJvbSB0aGUgZ2l2ZW4gcG9pbnQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjXG4gICAqL1xuZnVuY3Rpb24gZ2V0TG9vcFRhbmdlbnQociwgYykge1xuICBpZiAoKHIgPT09IGMgfHwgciA9PT0gNSAtIGMpICYmIChyID09PSAwIHx8IHIgPT09IDUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiKFwiLmNvbmNhdChyLCBcIiwgXCIpLmNvbmNhdChjLCBcIikgaXMgYSBjb3JuZXIsIG5vdCBhIGxvb3AgdGVybWluYWxcIikpO1xuICB9XG5cbiAgaWYgKHIgPT09IDApIHtcbiAgICByZXR1cm4gX0RpcmVjdGlvbnMuRGlyZWN0aW9ucy5VUDtcbiAgfSBlbHNlIGlmIChyID09PSA1KSB7XG4gICAgcmV0dXJuIF9EaXJlY3Rpb25zLkRpcmVjdGlvbnMuRE9XTjtcbiAgfSBlbHNlIGlmIChjID09PSAwKSB7XG4gICAgcmV0dXJuIF9EaXJlY3Rpb25zLkRpcmVjdGlvbnMuTEVGVDtcbiAgfSBlbHNlIGlmIChjID09PSA1KSB7XG4gICAgcmV0dXJuIF9EaXJlY3Rpb25zLkRpcmVjdGlvbnMuUklHSFQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiKFwiLmNvbmNhdChyLCBcIiwgXCIpLmNvbmNhdChjLCBcIikgaXMgbm90IGEgbG9vcCB0ZXJtaW5hbCBwb3NpdGlvbi5cIikpO1xuICB9XG59XG5cbi8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBwb2ludCBvbiB3aGljaCBhIHBvaW50IHdpbGwgbGFuZCBvbiBhZnRlciBsb29waW5nIHRocm91Z2hcbiAgICogYSBsb29wIGZyb20gYSB0ZXJtaW5hbCBwb2ludC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNcbiAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbbG9jX11cbiAgICovXG5mdW5jdGlvbiBnZXRMb29wVGVybWluYWwociwgYywgbG9jXykge1xuICB2YXIgbG9jID0gbG9jXyB8fCBuZXcgQXJyYXkoMyk7XG4gIHZhciB0YW5nZW50ID0gZ2V0TG9vcFRhbmdlbnQociwgYyk7XG4gIHZhciBsb29wUmFkaXVzID0gZ2V0TG9vcFJhZGl1cyh0YW5nZW50LCByLCBjKTtcblxuICBzd2l0Y2ggKHRhbmdlbnQpIHtcbiAgICBjYXNlIF9EaXJlY3Rpb25zLlVQOlxuICAgICAgbG9jWzBdID0gbG9vcFJhZGl1cztcbiAgICAgIGxvY1sxXSA9IGMgPCAzID8gMCA6IDU7XG4gICAgICBsb2NbMl0gPSBsb2NbMV0gPT09IDAgPyBfRGlyZWN0aW9ucy5SSUdIVCA6IF9EaXJlY3Rpb25zLkxFRlQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIF9EaXJlY3Rpb25zLkRPV046XG4gICAgICBsb2NbMF0gPSA1IC0gbG9vcFJhZGl1cztcbiAgICAgIGxvY1sxXSA9IGMgPCAzID8gMCA6IDU7XG4gICAgICBsb2NbMl0gPSBsb2NbMV0gPT09IDAgPyBfRGlyZWN0aW9ucy5SSUdIVCA6IF9EaXJlY3Rpb25zLkxFRlQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIF9EaXJlY3Rpb25zLkxFRlQ6XG4gICAgICBsb2NbMF0gPSByIDwgMyA/IDAgOiA1O1xuICAgICAgbG9jWzFdID0gbG9vcFJhZGl1cztcbiAgICAgIGxvY1syXSA9IGxvY1swXSA9PT0gMCA/IF9EaXJlY3Rpb25zLkRPV04gOiBfRGlyZWN0aW9ucy5VUDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgX0RpcmVjdGlvbnMuUklHSFQ6XG4gICAgICBsb2NbMF0gPSByIDwgMyA/IDAgOiA1O1xuICAgICAgbG9jWzFdID0gNSAtIGxvb3BSYWRpdXM7XG4gICAgICBsb2NbMl0gPSBsb2NbMV0gPT09IDAgPyBfRGlyZWN0aW9ucy5ET1dOIDogX0RpcmVjdGlvbnMuVVA7XG4gICAgICBicmVhazt9XG5cblxuICByZXR1cm4gbG9jO1xufSIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtleHBvcnRzLnNpbXBsZVN0ZXBDb250ZXh0ID0gc2ltcGxlU3RlcENvbnRleHQ7ZXhwb3J0cy5sb29wU3RlcENvbnRleHQgPSBsb29wU3RlcENvbnRleHQ7ZXhwb3J0cy5maW5kU3RlcCA9IGZpbmRTdGVwO2V4cG9ydHMuZmluZFBhdGggPSBmaW5kUGF0aDtleHBvcnRzLlBhdGhGaW5kZXIgPSB2b2lkIDA7dmFyIF9EaXJlY3Rpb25zID0gcmVxdWlyZShcIi4vRGlyZWN0aW9uc1wiKTtcbnZhciBfbG9vcEluZm8gPSByZXF1aXJlKFwiLi9sb29wLWluZm9cIik7XG5cbnZhciBOT1RfRklMTEVEID0gLTE7XG5cbi8qKlxuICAgICAgICAgICAgICAgICAgICAgICogQHR5cGVkZWYge0FycmF5fSBUcmF2ZXJzZUNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSAwIC0gcm93XG4gICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gMSAtIGNvbHVtblxuICAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtEaXJlY3Rpb24/fSAyIC0gZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gcm93XG4gICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gY29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge0RpcmVjdGlvbn0gZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgKi9cblxuZnVuY3Rpb24gc2ltcGxlU3RlcENvbnRleHQocm93LCBjb2x1bW4pIHtcbiAgdmFyIGNvbnRleHQgPSBbcm93LCBjb2x1bW5dO1xuICBjb250ZXh0LnJvdyA9IHJvdztcbiAgY29udGV4dC5jb2x1bW4gPSBjb2x1bW47XG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBsb29wU3RlcENvbnRleHQocm93LCBjb2x1bW4sIGRpcmVjdGlvbikge1xuICB2YXIgY29udGV4dCA9IFtyb3csIGNvbHVtbiwgZGlyZWN0aW9uXTtcbiAgY29udGV4dC5yb3cgPSByb3c7XG4gIGNvbnRleHQuY29sdW1uID0gY29sdW1uO1xuICBjb250ZXh0LmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgY29udGV4dC5pc0xvb3AgPSB0cnVlO1xuICByZXR1cm4gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gZmluZFNpbXBsZVN0ZXAocm93LCBjb2x1bW4sIGRpcmVjdGlvbikge1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgX0RpcmVjdGlvbnMuVVA6XG4gICAgICBpZiAocm93ICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBbcm93IC0gMSwgY29sdW1uXTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgX0RpcmVjdGlvbnMuTEVGVDpcbiAgICAgIGlmIChjb2x1bW4gIT09IDApIHtcbiAgICAgICAgcmV0dXJuIFtyb3csIGNvbHVtbiAtIDFdO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBfRGlyZWN0aW9ucy5ET1dOOlxuICAgICAgaWYgKHJvdyAhPT0gNSkge1xuICAgICAgICByZXR1cm4gW3JvdyArIDEsIGNvbHVtbl07XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIF9EaXJlY3Rpb25zLlJJR0hUOlxuICAgICAgaWYgKGNvbHVtbiAhPT0gNSkge1xuICAgICAgICByZXR1cm4gW3JvdywgY29sdW1uICsgMV07XG4gICAgICB9XG4gICAgICBicmVhazt9XG5cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gICAqIEZpbmRzIHRoZSBuZXh0IHBvc2l0aW9uIHRoYXQgdGhlIGF0dGFjayB3aWxsIGxhbmQgb24sIGlmIGNvbnRpbnVhYmxlLlxuICAgKiBAcmV0dXJucyB7VHJhdmVyc2VDb250ZXh0fVxuICAgKi9cbmZ1bmN0aW9uIGZpbmRTdGVwKHJvdywgY29sdW1uLCBkaXJlY3Rpb24pIHtcbiAgdmFyIHNpbXBsZVN0ZXAgPSBmaW5kU2ltcGxlU3RlcChyb3csIGNvbHVtbiwgZGlyZWN0aW9uKTtcblxuICBpZiAoc2ltcGxlU3RlcCkge1xuICAgIHNpbXBsZVN0ZXAucm93ID0gc2ltcGxlU3RlcFswXTtcbiAgICBzaW1wbGVTdGVwLmNvbHVtbiA9IHNpbXBsZVN0ZXBbMV07XG4gICAgcmV0dXJuIHNpbXBsZVN0ZXA7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxvb3BTdGVwID0gKDAsIF9sb29wSW5mby5nZXRMb29wVGVybWluYWwpKHJvdywgY29sdW1uKTtcbiAgICBsb29wU3RlcC5yb3cgPSBsb29wU3RlcFswXTtcbiAgICBsb29wU3RlcC5jb2x1bW4gPSBsb29wU3RlcFsxXTtcbiAgICBsb29wU3RlcC5kaXJlY3Rpb24gPSBsb29wU3RlcFsyXTtcbiAgICBsb29wU3RlcC5pc0xvb3AgPSB0cnVlO1xuICAgIHJldHVybiBsb29wU3RlcDtcbiAgfVxufVxuXG4vKipcbiAgICogRmluZHMgYWxsIHRoZSBzdGVwcyBpbiB0aGUgYXR0YWNrLlxuICAgKiBAcGFyYW0ge1N1cmFrYXJ0YX0gc3VyYWthcnRhXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByb3dcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtblxuICAgKiBAcGFyYW0ge0RpcmVjdGlvbn0gZGlyZWN0aW9uXG4gICAqIEBwYXJhbSB7UG9zaXRpb259IGN1dFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kUG9zc2libGl0eT1mYWxzZV1cbiAgICogQHJldHVybnMge0FycmF5PFRyYXZlcnNlQ29udGV4dD4gfCBib29sZWFufVxuICAgKi9cbmZ1bmN0aW9uIGZpbmRQYXRoKHN1cmFrYXJ0YSwgcm93LCBjb2x1bW4sIGRpcmVjdGlvbiwgY3V0KSB7dmFyIGZpbmRQb3NzaWJsaXR5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiBmYWxzZTtcbiAgdmFyIHN0YXJ0ID0gW3JvdywgY29sdW1uXTtcbiAgdmFyIHBlYmJsZSA9IHN1cmFrYXJ0YS5zdGF0ZXNbc3VyYWthcnRhLmluZGV4T2Yocm93LCBjb2x1bW4pXTtcbiAgdmFyIHN0ZXBzID0gZmluZFBvc3NpYmxpdHkgPyB0cnVlIDogW107XG4gIHZhciBzZWxmVG91Y2ggPSAwO1xuICB2YXIgbG9vcHMgPSAwO1xuICB2YXIgY3V0Rm91bmQgPSBmYWxzZTtcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHZhciBuZXh0ID0gZmluZFN0ZXAocm93LCBjb2x1bW4sIGRpcmVjdGlvbik7XG5cbiAgICByb3cgPSBuZXh0WzBdO1xuICAgIGNvbHVtbiA9IG5leHRbMV07XG5cbiAgICBpZiAobmV4dC5pc0xvb3ApIHtcbiAgICAgIGRpcmVjdGlvbiA9IG5leHQuZGlyZWN0aW9uO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gZmFsc2U7XG4gICAgaWYgKHJvdyA9PT0gc3RhcnRbMF0gJiYgY29sdW1uID09PSBzdGFydFsxXSkge1xuICAgICAgKytzZWxmVG91Y2g7XG4gICAgICBpZiAoc2VsZlRvdWNoID4gMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIEluZmluaXRlIGxvb3BcbiAgICAgIH1cbiAgICAgIHNlbGYgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZSA9IHN1cmFrYXJ0YS5zdGF0ZShyb3csIGNvbHVtbik7XG5cbiAgICBpZiAoIXNlbGYgJiYgc3RhdGUgPT09IHBlYmJsZSkge1xuICAgICAgcmV0dXJuIGZhbHNlOyAvLyBjYW4ndCBjYXB0dXJlIG91ciBvd24gcGViYmxlIDopXG4gICAgfVxuICAgIGlmICghZmluZFBvc3NpYmxpdHkpIHtcbiAgICAgIHN0ZXBzLnB1c2gobmV4dCk7XG5cbiAgICAgIGlmIChuZXh0Lmxlbmd0aCA9PT0gMykgey8vIGxvb3BcbiAgICAgICAgKytsb29wcztcbiAgICAgICAgc3RlcHNbc3RlcHMubGVuZ3RoIC0gMV0uaXNMb29wID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGN1dCAmJiBjdXQucm93ID09PSByb3cgJiYgY3V0LmNvbHVtbiA9PT0gY29sdW1uIHx8ICFzZWxmICYmIHN0YXRlICE9PSBOT1RfRklMTEVEKSB7XG4gICAgICBjdXRGb3VuZCA9IHN0YXRlID09PSBOT1RfRklMTEVEOyAvLyBsYW5kZWQgb3B0aW9uYWwgaW50ZXJtZWRpYXRlIGlmIGN1cnJlbnQgcG9zaXRpb24gbm90IGZpbGxlZFxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGxvb3BzID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RlcHMuaXNDYXB0dXJlID0gIWN1dEZvdW5kO1xuICByZXR1cm4gc3RlcHM7XG59XG5cbi8qKlxuICAgKiBAbmFtZXNwYWNlIFNLXG4gICAqL1xudmFyIFBhdGhGaW5kZXIgPSB7XG4gIGZpbmRTdGVwOiBmaW5kU3RlcCxcbiAgZmluZFBhdGg6IGZpbmRQYXRoIH07ZXhwb3J0cy5QYXRoRmluZGVyID0gUGF0aEZpbmRlcjsiXSwic291cmNlUm9vdCI6IiJ9