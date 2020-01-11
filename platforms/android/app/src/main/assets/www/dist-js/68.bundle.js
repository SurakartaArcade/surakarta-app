(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-route_4.entry.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-route_4.entry.js ***!
  \********************************************************************/
/*! exports provided: ion_route, ion_route_redirect, ion_router, ion_router_link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_route_redirect", function() { return RouteRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_router_link", function() { return RouterLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");





var Route = /** @class */ (function () {
    function Route(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        /**
         * Relative path that needs to match in order for this route to apply.
         *
         * Accepts paths similar to expressjs so that you can define parameters
         * in the url /foo/:bar where bar would be available in incoming props.
         */
        this.url = '';
        this.ionRouteDataChanged = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionRouteDataChanged", 7);
    }
    Route.prototype.onUpdate = function (newValue) {
        this.ionRouteDataChanged.emit(newValue);
    };
    Route.prototype.onComponentProps = function (newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        var keys1 = newValue ? Object.keys(newValue) : [];
        var keys2 = oldValue ? Object.keys(oldValue) : [];
        if (keys1.length !== keys2.length) {
            this.onUpdate(newValue);
            return;
        }
        for (var _i = 0, keys1_1 = keys1; _i < keys1_1.length; _i++) {
            var key = keys1_1[_i];
            if (newValue[key] !== oldValue[key]) {
                this.onUpdate(newValue);
                return;
            }
        }
    };
    Route.prototype.connectedCallback = function () {
        this.ionRouteDataChanged.emit();
    };
    Object.defineProperty(Route, "watchers", {
        get: function () {
            return {
                "url": ["onUpdate"],
                "component": ["onUpdate"],
                "componentProps": ["onComponentProps"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return Route;
}());
var RouteRedirect = /** @class */ (function () {
    function RouteRedirect(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.ionRouteRedirectChanged = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionRouteRedirectChanged", 7);
    }
    RouteRedirect.prototype.propDidChange = function () {
        this.ionRouteRedirectChanged.emit();
    };
    RouteRedirect.prototype.connectedCallback = function () {
        this.ionRouteRedirectChanged.emit();
    };
    Object.defineProperty(RouteRedirect, "watchers", {
        get: function () {
            return {
                "from": ["propDidChange"],
                "to": ["propDidChange"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return RouteRedirect;
}());
var ROUTER_INTENT_NONE = 'root';
var ROUTER_INTENT_FORWARD = 'forward';
var ROUTER_INTENT_BACK = 'back';
var generatePath = function (segments) {
    var path = segments
        .filter(function (s) { return s.length > 0; })
        .join('/');
    return '/' + path;
};
var chainToPath = function (chain) {
    var path = [];
    for (var _i = 0, chain_1 = chain; _i < chain_1.length; _i++) {
        var route = chain_1[_i];
        for (var _a = 0, _b = route.path; _a < _b.length; _a++) {
            var segment = _b[_a];
            if (segment[0] === ':') {
                var param = route.params && route.params[segment.slice(1)];
                if (!param) {
                    return null;
                }
                path.push(param);
            }
            else if (segment !== '') {
                path.push(segment);
            }
        }
    }
    return path;
};
var writePath = function (history, root, useHash, path, direction, state) {
    var url = generatePath(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(parsePath(root), path));
    if (useHash) {
        url = '#' + url;
    }
    if (direction === ROUTER_INTENT_FORWARD) {
        history.pushState(state, '', url);
    }
    else {
        history.replaceState(state, '', url);
    }
};
var removePrefix = function (prefix, path) {
    if (prefix.length > path.length) {
        return null;
    }
    if (prefix.length <= 1 && prefix[0] === '') {
        return path;
    }
    for (var i = 0; i < prefix.length; i++) {
        if (prefix[i].length > 0 && prefix[i] !== path[i]) {
            return null;
        }
    }
    if (path.length === prefix.length) {
        return [''];
    }
    return path.slice(prefix.length);
};
var readPath = function (loc, root, useHash) {
    var pathname = loc.pathname;
    if (useHash) {
        var hash = loc.hash;
        pathname = (hash[0] === '#')
            ? hash.slice(1)
            : '';
    }
    var prefix = parsePath(root);
    var path = parsePath(pathname);
    return removePrefix(prefix, path);
};
var parsePath = function (path) {
    if (path == null) {
        return [''];
    }
    var segments = path.split('/')
        .map(function (s) { return s.trim(); })
        .filter(function (s) { return s.length > 0; });
    if (segments.length === 0) {
        return [''];
    }
    else {
        return segments;
    }
};
var printRoutes = function (routes) {
    console.group("[ion-core] ROUTES[" + routes.length + "]");
    var _loop_1 = function (chain) {
        var path = [];
        chain.forEach(function (r) { return path.push.apply(path, r.path); });
        var ids = chain.map(function (r) { return r.id; });
        console.debug("%c " + generatePath(path), 'font-weight: bold; padding-left: 20px', '=>\t', "(" + ids.join(', ') + ")");
    };
    for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
        var chain = routes_1[_i];
        _loop_1(chain);
    }
    console.groupEnd();
};
var printRedirects = function (redirects) {
    console.group("[ion-core] REDIRECTS[" + redirects.length + "]");
    for (var _i = 0, redirects_1 = redirects; _i < redirects_1.length; _i++) {
        var redirect = redirects_1[_i];
        if (redirect.to) {
            console.debug('FROM: ', "$c " + generatePath(redirect.from), 'font-weight: bold', ' TO: ', "$c " + generatePath(redirect.to), 'font-weight: bold');
        }
    }
    console.groupEnd();
};
var writeNavState = function (root, chain, direction, index, changed) {
    if (changed === void 0) { changed = false; }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
        var outlet, route, result, e_1;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    outlet = searchNavNode(root);
                    // make sure we can continue interacting the DOM, otherwise abort
                    if (index >= chain.length || !outlet) {
                        return [2 /*return*/, changed];
                    }
                    return [4 /*yield*/, outlet.componentOnReady()];
                case 1:
                    _a.sent();
                    route = chain[index];
                    return [4 /*yield*/, outlet.setRouteId(route.id, route.params, direction)];
                case 2:
                    result = _a.sent();
                    // if the outlet changed the page, reset navigation to neutral (no direction)
                    // this means nested outlets will not animate
                    if (result.changed) {
                        direction = ROUTER_INTENT_NONE;
                        changed = true;
                    }
                    return [4 /*yield*/, writeNavState(result.element, chain, direction, index + 1, changed)];
                case 3:
                    // recursively set nested outlets
                    changed = _a.sent();
                    if (!result.markVisible) return [3 /*break*/, 5];
                    return [4 /*yield*/, result.markVisible()];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5: return [2 /*return*/, changed];
                case 6:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [2 /*return*/, false];
                case 7: return [2 /*return*/];
            }
        });
    });
};
var readNavState = function (root) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var ids, outlet, node, id;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0:
                ids = [];
                node = root;
                _a.label = 1;
            case 1:
                if (false) {}
                outlet = searchNavNode(node);
                if (!outlet) return [3 /*break*/, 3];
                return [4 /*yield*/, outlet.getRouteId()];
            case 2:
                id = _a.sent();
                if (id) {
                    node = id.element;
                    id.element = undefined;
                    ids.push(id);
                }
                else {
                    return [3 /*break*/, 5];
                }
                return [3 /*break*/, 4];
            case 3: return [3 /*break*/, 5];
            case 4: return [3 /*break*/, 1];
            case 5: return [2 /*return*/, { ids: ids, outlet: outlet }];
        }
    });
}); };
var waitUntilNavNode = function () {
    if (searchNavNode(document.body)) {
        return Promise.resolve();
    }
    return new Promise(function (resolve) {
        window.addEventListener('ionNavWillLoad', resolve, { once: true });
    });
};
var QUERY = ':not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet';
var searchNavNode = function (root) {
    if (!root) {
        return undefined;
    }
    if (root.matches(QUERY)) {
        return root;
    }
    var outlet = root.querySelector(QUERY);
    return outlet ? outlet : undefined;
};
var matchesRedirect = function (input, route) {
    var from = route.from, to = route.to;
    if (to === undefined) {
        return false;
    }
    if (from.length > input.length) {
        return false;
    }
    for (var i = 0; i < from.length; i++) {
        var expected = from[i];
        if (expected === '*') {
            return true;
        }
        if (expected !== input[i]) {
            return false;
        }
    }
    return from.length === input.length;
};
var routeRedirect = function (path, routes) {
    return routes.find(function (route) { return matchesRedirect(path, route); });
};
var matchesIDs = function (ids, chain) {
    var len = Math.min(ids.length, chain.length);
    var i = 0;
    for (; i < len; i++) {
        if (ids[i].toLowerCase() !== chain[i].id) {
            break;
        }
    }
    return i;
};
var matchesPath = function (inputPath, chain) {
    var segments = new RouterSegments(inputPath);
    var matchesDefault = false;
    var allparams;
    for (var i = 0; i < chain.length; i++) {
        var path = chain[i].path;
        if (path[0] === '') {
            matchesDefault = true;
        }
        else {
            for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
                var segment = path_1[_i];
                var data = segments.next();
                // data param
                if (segment[0] === ':') {
                    if (data === '') {
                        return null;
                    }
                    allparams = allparams || [];
                    var params = allparams[i] || (allparams[i] = {});
                    params[segment.slice(1)] = data;
                }
                else if (data !== segment) {
                    return null;
                }
            }
            matchesDefault = false;
        }
    }
    var matches = (matchesDefault)
        ? matchesDefault === (segments.next() === '')
        : true;
    if (!matches) {
        return null;
    }
    if (allparams) {
        return chain.map(function (route, i) { return ({
            id: route.id,
            path: route.path,
            params: mergeParams(route.params, allparams[i])
        }); });
    }
    return chain;
};
var mergeParams = function (a, b) {
    if (!a && b) {
        return b;
    }
    else if (a && !b) {
        return a;
    }
    else if (a && b) {
        return Object.assign(Object.assign({}, a), b);
    }
    return undefined;
};
var routerIDsToChain = function (ids, chains) {
    var match = null;
    var maxMatches = 0;
    var plainIDs = ids.map(function (i) { return i.id; });
    for (var _i = 0, chains_1 = chains; _i < chains_1.length; _i++) {
        var chain = chains_1[_i];
        var score = matchesIDs(plainIDs, chain);
        if (score > maxMatches) {
            match = chain;
            maxMatches = score;
        }
    }
    if (match) {
        return match.map(function (route, i) { return ({
            id: route.id,
            path: route.path,
            params: mergeParams(route.params, ids[i] && ids[i].params)
        }); });
    }
    return null;
};
var routerPathToChain = function (path, chains) {
    var match = null;
    var matches = 0;
    for (var _i = 0, chains_2 = chains; _i < chains_2.length; _i++) {
        var chain = chains_2[_i];
        var matchedChain = matchesPath(path, chain);
        if (matchedChain !== null) {
            var score = computePriority(matchedChain);
            if (score > matches) {
                matches = score;
                match = matchedChain;
            }
        }
    }
    return match;
};
var computePriority = function (chain) {
    var score = 1;
    var level = 1;
    for (var _i = 0, chain_2 = chain; _i < chain_2.length; _i++) {
        var route = chain_2[_i];
        for (var _a = 0, _b = route.path; _a < _b.length; _a++) {
            var path = _b[_a];
            if (path[0] === ':') {
                score += Math.pow(1, level);
            }
            else if (path !== '') {
                score += Math.pow(2, level);
            }
            level++;
        }
    }
    return score;
};
var RouterSegments = /** @class */ (function () {
    function RouterSegments(path) {
        this.path = path.slice();
    }
    RouterSegments.prototype.next = function () {
        if (this.path.length > 0) {
            return this.path.shift();
        }
        return '';
    };
    return RouterSegments;
}());
var readRedirects = function (root) {
    return Array.from(root.children)
        .filter(function (el) { return el.tagName === 'ION-ROUTE-REDIRECT'; })
        .map(function (el) {
        var to = readProp(el, 'to');
        return {
            from: parsePath(readProp(el, 'from')),
            to: to == null ? undefined : parsePath(to),
        };
    });
};
var readRoutes = function (root) {
    return flattenRouterTree(readRouteNodes(root));
};
var readRouteNodes = function (root, node) {
    if (node === void 0) { node = root; }
    return Array.from(node.children)
        .filter(function (el) { return el.tagName === 'ION-ROUTE' && el.component; })
        .map(function (el) {
        var component = readProp(el, 'component');
        if (component == null) {
            throw new Error('component missing in ion-route');
        }
        return {
            path: parsePath(readProp(el, 'url')),
            id: component.toLowerCase(),
            params: el.componentProps,
            children: readRouteNodes(root, el)
        };
    });
};
var readProp = function (el, prop) {
    if (prop in el) {
        return el[prop];
    }
    if (el.hasAttribute(prop)) {
        return el.getAttribute(prop);
    }
    return null;
};
var flattenRouterTree = function (nodes) {
    var routes = [];
    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
        var node = nodes_1[_i];
        flattenNode([], routes, node);
    }
    return routes;
};
var flattenNode = function (chain, routes, node) {
    var s = chain.slice();
    s.push({
        id: node.id,
        path: node.path,
        params: node.params
    });
    if (node.children.length === 0) {
        routes.push(s);
        return;
    }
    for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
        var sub = _a[_i];
        flattenNode(s, routes, sub);
    }
};
var Router = /** @class */ (function () {
    function class_1(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.previousPath = null;
        this.busy = false;
        this.state = 0;
        this.lastState = 0;
        /**
         * By default `ion-router` will match the routes at the root path ("/").
         * That can be changed when
         *
         */
        this.root = '/';
        /**
         * The router can work in two "modes":
         * - With hash: `/index.html#/path/to/page`
         * - Without hash: `/path/to/page`
         *
         * Using one or another might depend in the requirements of your app and/or where it's deployed.
         *
         * Usually "hash-less" navigation works better for SEO and it's more user friendly too, but it might
         * requires additional server-side configuration in order to properly work.
         *
         * On the otherside hash-navigation is much easier to deploy, it even works over the file protocol.
         *
         * By default, this property is `true`, change to `false` to allow hash-less URLs.
         */
        this.useHash = true;
        this.ionRouteWillChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionRouteWillChange", 7);
        this.ionRouteDidChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionRouteDidChange", 7);
    }
    class_1.prototype.componentWillLoad = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.debug('[ion-router] router will load');
                        return [4 /*yield*/, waitUntilNavNode()];
                    case 1:
                        _a.sent();
                        console.debug('[ion-router] found nav');
                        return [4 /*yield*/, this.onRoutesChanged()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.componentDidLoad = function () {
        window.addEventListener('ionRouteRedirectChanged', Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this.onRedirectChanged.bind(this), 10));
        window.addEventListener('ionRouteDataChanged', Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this.onRoutesChanged.bind(this), 100));
    };
    class_1.prototype.onPopState = function () {
        var direction = this.historyDirection();
        var path = this.getPath();
        console.debug('[ion-router] URL changed -> update nav', path, direction);
        return this.writeNavStateRoot(path, direction);
    };
    class_1.prototype.onBackButton = function (ev) {
        var _this = this;
        ev.detail.register(0, function () { return _this.back(); });
    };
    /**
     * Navigate to the specified URL.
     *
     * @param url The url to navigate to.
     * @param direction The direction of the animation. Defaults to `"forward"`.
     */
    class_1.prototype.push = function (url, direction) {
        if (direction === void 0) { direction = 'forward'; }
        if (url.startsWith('.')) {
            url = (new URL(url, window.location.href)).pathname;
        }
        console.debug('[ion-router] URL pushed -> updating nav', url, direction);
        var path = parsePath(url);
        this.setPath(path, direction);
        return this.writeNavStateRoot(path, direction);
    };
    /**
     * Go back to previous page in the window.history.
     */
    class_1.prototype.back = function () {
        window.history.back();
        return Promise.resolve(this.waitPromise);
    };
    /** @internal */
    class_1.prototype.printDebug = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                console.debug('CURRENT PATH', this.getPath());
                console.debug('PREVIOUS PATH', this.previousPath);
                printRoutes(readRoutes(this.el));
                printRedirects(readRedirects(this.el));
                return [2 /*return*/];
            });
        });
    };
    /** @internal */
    class_1.prototype.navChanged = function (direction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, ids, outlet, routes, chain, path;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.busy) {
                            console.warn('[ion-router] router is busy, navChanged was cancelled');
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, readNavState(window.document.body)];
                    case 1:
                        _a = _b.sent(), ids = _a.ids, outlet = _a.outlet;
                        routes = readRoutes(this.el);
                        chain = routerIDsToChain(ids, routes);
                        if (!chain) {
                            console.warn('[ion-router] no matching URL for ', ids.map(function (i) { return i.id; }));
                            return [2 /*return*/, false];
                        }
                        path = chainToPath(chain);
                        if (!path) {
                            console.warn('[ion-router] router could not match path because some required param is missing');
                            return [2 /*return*/, false];
                        }
                        console.debug('[ion-router] nav changed -> update URL', ids, path);
                        this.setPath(path, direction);
                        return [4 /*yield*/, this.safeWriteNavState(outlet, chain, ROUTER_INTENT_NONE, path, null, ids.length)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    class_1.prototype.onRedirectChanged = function () {
        var path = this.getPath();
        if (path && routeRedirect(path, readRedirects(this.el))) {
            this.writeNavStateRoot(path, ROUTER_INTENT_NONE);
        }
    };
    class_1.prototype.onRoutesChanged = function () {
        return this.writeNavStateRoot(this.getPath(), ROUTER_INTENT_NONE);
    };
    class_1.prototype.historyDirection = function () {
        var win = window;
        if (win.history.state === null) {
            this.state++;
            win.history.replaceState(this.state, win.document.title, win.document.location && win.document.location.href);
        }
        var state = win.history.state;
        var lastState = this.lastState;
        this.lastState = state;
        if (state > lastState) {
            return ROUTER_INTENT_FORWARD;
        }
        else if (state < lastState) {
            return ROUTER_INTENT_BACK;
        }
        else {
            return ROUTER_INTENT_NONE;
        }
    };
    class_1.prototype.writeNavStateRoot = function (path, direction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var redirects, redirect, redirectFrom, routes, chain;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (!path) {
                    console.error('[ion-router] URL is not part of the routing set');
                    return [2 /*return*/, false];
                }
                redirects = readRedirects(this.el);
                redirect = routeRedirect(path, redirects);
                redirectFrom = null;
                if (redirect) {
                    this.setPath(redirect.to, direction);
                    redirectFrom = redirect.from;
                    path = redirect.to;
                }
                routes = readRoutes(this.el);
                chain = routerPathToChain(path, routes);
                if (!chain) {
                    console.error('[ion-router] the path does not match any route');
                    return [2 /*return*/, false];
                }
                // write DOM give
                return [2 /*return*/, this.safeWriteNavState(document.body, chain, direction, path, redirectFrom)];
            });
        });
    };
    class_1.prototype.safeWriteNavState = function (node, chain, direction, path, redirectFrom, index) {
        if (index === void 0) { index = 0; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var unlock, changed, e_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lock()];
                    case 1:
                        unlock = _a.sent();
                        changed = false;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.writeNavState(node, chain, direction, path, redirectFrom, index)];
                    case 3:
                        changed = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [3 /*break*/, 5];
                    case 5:
                        unlock();
                        return [2 /*return*/, changed];
                }
            });
        });
    };
    class_1.prototype.lock = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var p, resolve;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        p = this.waitPromise;
                        this.waitPromise = new Promise(function (r) { return resolve = r; });
                        if (!(p !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, p];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, resolve];
                }
            });
        });
    };
    class_1.prototype.writeNavState = function (node, chain, direction, path, redirectFrom, index) {
        if (index === void 0) { index = 0; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var routeEvent, changed;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.busy) {
                            console.warn('[ion-router] router is busy, transition was cancelled');
                            return [2 /*return*/, false];
                        }
                        this.busy = true;
                        routeEvent = this.routeChangeEvent(path, redirectFrom);
                        if (routeEvent) {
                            this.ionRouteWillChange.emit(routeEvent);
                        }
                        return [4 /*yield*/, writeNavState(node, chain, direction, index)];
                    case 1:
                        changed = _a.sent();
                        this.busy = false;
                        if (changed) {
                            console.debug('[ion-router] route changed', path);
                        }
                        // emit did change
                        if (routeEvent) {
                            this.ionRouteDidChange.emit(routeEvent);
                        }
                        return [2 /*return*/, changed];
                }
            });
        });
    };
    class_1.prototype.setPath = function (path, direction) {
        this.state++;
        writePath(window.history, this.root, this.useHash, path, direction, this.state);
    };
    class_1.prototype.getPath = function () {
        return readPath(window.location, this.root, this.useHash);
    };
    class_1.prototype.routeChangeEvent = function (path, redirectFromPath) {
        var from = this.previousPath;
        var to = generatePath(path);
        this.previousPath = to;
        if (to === from) {
            return null;
        }
        var redirectedFrom = redirectFromPath ? generatePath(redirectFromPath) : null;
        return {
            from: from,
            redirectedFrom: redirectedFrom,
            to: to,
        };
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var RouterLink = /** @class */ (function () {
    function RouterLink(hostRef) {
        var _this = this;
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */
        this.routerDirection = 'forward';
        this.onClick = function (ev) {
            Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["o"])(_this.href, ev, _this.routerDirection);
        };
    }
    RouterLink.prototype.render = function () {
        var _a;
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var attrs = {
            href: this.href,
            rel: this.rel,
            target: this.target
        };
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onClick: this.onClick, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this.color)), (_a = {}, _a[mode] = true, _a['ion-activatable'] = true, _a)) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("a", Object.assign({}, attrs), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null))));
    };
    Object.defineProperty(RouterLink, "style", {
        get: function () { return ":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"; },
        enumerable: true,
        configurable: true
    });
    return RouterLink;
}());



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var router;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction)];
            }
        }
        return [2 /*return*/, false];
    });
}); };



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2lvbi1yb3V0ZV80LmVudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS1lczUvdGhlbWUtMThjYmUyY2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStEO0FBQzhEO0FBQy9GO0FBQ3dCO0FBQ3NCO0FBQzVFO0FBQ0E7QUFDQSxRQUFRLDJEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywyREFBVztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHFCQUFxQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCLHVDQUF1QywyREFBVztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIscUJBQXFCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQSx5Q0FBeUMsZ0JBQWdCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDREQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCLEVBQUU7QUFDOUMsOEJBQThCLHFCQUFxQixFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msc0NBQXNDLEVBQUU7QUFDNUUsMENBQTBDLGFBQWEsRUFBRTtBQUN6RCxxRUFBcUU7QUFDckU7QUFDQSx1Q0FBdUMsc0JBQXNCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHlCQUF5QjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGlCQUFpQjtBQUM5QyxXQUFXLHVEQUFTO0FBQ3BCO0FBQ0EsZUFBZSx5REFBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQSxvQ0FBb0MsUUFBUSx1REFBUztBQUNyRDtBQUNBLFdBQVcseURBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLEtBQUssRUFBRSxFQUF3QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyQkFBMkI7QUFDdEU7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxhQUFhO0FBQ3pFLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHFDQUFxQyxFQUFFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxTQUFTO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG9CQUFvQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRUFBRSxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsYUFBYSxFQUFFO0FBQ3hELHVDQUF1QyxzQkFBc0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQSxTQUFTLEVBQUUsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxzQkFBc0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHFCQUFxQjtBQUMxRDtBQUNBLHlDQUF5QyxnQkFBZ0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsK0JBQStCLDRDQUE0QyxFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGFBQWE7QUFDdkM7QUFDQSwrQkFBK0IsbURBQW1ELEVBQUU7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMscUJBQXFCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsZ0JBQWdCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDJEQUFXO0FBQzdDLGlDQUFpQywyREFBVztBQUM1QztBQUNBO0FBQ0EsZUFBZSx1REFBUztBQUN4QixtQkFBbUIseURBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsMkRBQTJELDhEQUFRO0FBQ25FLHVEQUF1RCw4REFBUTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMscUJBQXFCLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx1QkFBdUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdURBQVM7QUFDeEIsbUJBQW1CLHlEQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdURBQVM7QUFDeEI7QUFDQSxtQkFBbUIseURBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0dBQW9HLGFBQWEsRUFBRTtBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVEQUFTO0FBQ3hCO0FBQ0EsbUJBQW1CLHlEQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQyxlQUFlLHVEQUFTO0FBQ3hCO0FBQ0EsbUJBQW1CLHlEQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxlQUFlLHVEQUFTO0FBQ3hCO0FBQ0EsbUJBQW1CLHlEQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxvQkFBb0IsRUFBRTtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLCtCQUErQixXQUFXO0FBQzFDLGVBQWUsdURBQVM7QUFDeEI7QUFDQSxtQkFBbUIseURBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFFBQVEsMkRBQVUsT0FBTyxFQUFFO0FBQ3JEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw0REFBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFDLENBQUMsbURBQUksR0FBRyw2REFBNkQsRUFBRSw0REFBa0IsdUJBQXVCLHVEQUF1RCxFQUFFLDJEQUFDLHNCQUFzQixVQUFVLDJEQUFDO0FBQzVOO0FBQ0E7QUFDQSwwQkFBMEIsZUFBZSx5QkFBeUIseUNBQXlDLDZCQUE2QixtQkFBbUIsa0JBQWtCLDRCQUE0QixFQUFFLG9CQUFvQixrQkFBa0IsbUJBQW1CLG9CQUFvQix1QkFBdUIsd0JBQXdCLHNCQUFzQix1QkFBdUIsbUJBQW1CLG9CQUFvQixjQUFjLEVBQUUsRUFBRTtBQUM3YTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUN1SDs7Ozs7Ozs7Ozs7OztBQ3R6QnhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxrQkFBa0IsRUFBRTtBQUN0RCwrQkFBK0IsaUJBQWlCLEVBQUU7QUFDbEQsa0NBQWtDLGlCQUFpQixFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Qsc0JBQXNCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFFBQVEsdURBQVM7QUFDOUQ7QUFDQSxXQUFXLHlEQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNrRiIsImZpbGUiOiI2OC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yLCBfX3NwcmVhZEFycmF5cyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBkIGFzIGNyZWF0ZUV2ZW50LCBlIGFzIGdldEVsZW1lbnQsIGMgYXMgZ2V0SW9uTW9kZSwgaCwgSCBhcyBIb3N0IH0gZnJvbSAnLi9jb3JlLWZlZWVmZjBkLmpzJztcbmltcG9ydCAnLi9jb25maWctM2M3ZjM3OTAuanMnO1xuaW1wb3J0IHsgZSBhcyBkZWJvdW5jZSB9IGZyb20gJy4vaGVscGVycy00NmY0YTI2Mi5qcyc7XG5pbXBvcnQgeyBvIGFzIG9wZW5VUkwsIGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS0xOGNiZTJjYy5qcyc7XG52YXIgUm91dGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUm91dGUoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVsYXRpdmUgcGF0aCB0aGF0IG5lZWRzIHRvIG1hdGNoIGluIG9yZGVyIGZvciB0aGlzIHJvdXRlIHRvIGFwcGx5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBBY2NlcHRzIHBhdGhzIHNpbWlsYXIgdG8gZXhwcmVzc2pzIHNvIHRoYXQgeW91IGNhbiBkZWZpbmUgcGFyYW1ldGVyc1xuICAgICAgICAgKiBpbiB0aGUgdXJsIC9mb28vOmJhciB3aGVyZSBiYXIgd291bGQgYmUgYXZhaWxhYmxlIGluIGluY29taW5nIHByb3BzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51cmwgPSAnJztcbiAgICAgICAgdGhpcy5pb25Sb3V0ZURhdGFDaGFuZ2VkID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Sb3V0ZURhdGFDaGFuZ2VkXCIsIDcpO1xuICAgIH1cbiAgICBSb3V0ZS5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy5pb25Sb3V0ZURhdGFDaGFuZ2VkLmVtaXQobmV3VmFsdWUpO1xuICAgIH07XG4gICAgUm91dGUucHJvdG90eXBlLm9uQ29tcG9uZW50UHJvcHMgPSBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIga2V5czEgPSBuZXdWYWx1ZSA/IE9iamVjdC5rZXlzKG5ld1ZhbHVlKSA6IFtdO1xuICAgICAgICB2YXIga2V5czIgPSBvbGRWYWx1ZSA/IE9iamVjdC5rZXlzKG9sZFZhbHVlKSA6IFtdO1xuICAgICAgICBpZiAoa2V5czEubGVuZ3RoICE9PSBrZXlzMi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMub25VcGRhdGUobmV3VmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwga2V5czFfMSA9IGtleXMxOyBfaSA8IGtleXMxXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5czFfMVtfaV07XG4gICAgICAgICAgICBpZiAobmV3VmFsdWVba2V5XSAhPT0gb2xkVmFsdWVba2V5XSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25VcGRhdGUobmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgUm91dGUucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlvblJvdXRlRGF0YUNoYW5nZWQuZW1pdCgpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJvdXRlLCBcIndhdGNoZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwidXJsXCI6IFtcIm9uVXBkYXRlXCJdLFxuICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFtcIm9uVXBkYXRlXCJdLFxuICAgICAgICAgICAgICAgIFwiY29tcG9uZW50UHJvcHNcIjogW1wib25Db21wb25lbnRQcm9wc1wiXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFJvdXRlO1xufSgpKTtcbnZhciBSb3V0ZVJlZGlyZWN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJvdXRlUmVkaXJlY3QoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLmlvblJvdXRlUmVkaXJlY3RDaGFuZ2VkID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Sb3V0ZVJlZGlyZWN0Q2hhbmdlZFwiLCA3KTtcbiAgICB9XG4gICAgUm91dGVSZWRpcmVjdC5wcm90b3R5cGUucHJvcERpZENoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pb25Sb3V0ZVJlZGlyZWN0Q2hhbmdlZC5lbWl0KCk7XG4gICAgfTtcbiAgICBSb3V0ZVJlZGlyZWN0LnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pb25Sb3V0ZVJlZGlyZWN0Q2hhbmdlZC5lbWl0KCk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUm91dGVSZWRpcmVjdCwgXCJ3YXRjaGVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcImZyb21cIjogW1wicHJvcERpZENoYW5nZVwiXSxcbiAgICAgICAgICAgICAgICBcInRvXCI6IFtcInByb3BEaWRDaGFuZ2VcIl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBSb3V0ZVJlZGlyZWN0O1xufSgpKTtcbnZhciBST1VURVJfSU5URU5UX05PTkUgPSAncm9vdCc7XG52YXIgUk9VVEVSX0lOVEVOVF9GT1JXQVJEID0gJ2ZvcndhcmQnO1xudmFyIFJPVVRFUl9JTlRFTlRfQkFDSyA9ICdiYWNrJztcbnZhciBnZW5lcmF0ZVBhdGggPSBmdW5jdGlvbiAoc2VnbWVudHMpIHtcbiAgICB2YXIgcGF0aCA9IHNlZ21lbnRzXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMubGVuZ3RoID4gMDsgfSlcbiAgICAgICAgLmpvaW4oJy8nKTtcbiAgICByZXR1cm4gJy8nICsgcGF0aDtcbn07XG52YXIgY2hhaW5Ub1BhdGggPSBmdW5jdGlvbiAoY2hhaW4pIHtcbiAgICB2YXIgcGF0aCA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMCwgY2hhaW5fMSA9IGNoYWluOyBfaSA8IGNoYWluXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciByb3V0ZSA9IGNoYWluXzFbX2ldO1xuICAgICAgICBmb3IgKHZhciBfYSA9IDAsIF9iID0gcm91dGUucGF0aDsgX2EgPCBfYi5sZW5ndGg7IF9hKyspIHtcbiAgICAgICAgICAgIHZhciBzZWdtZW50ID0gX2JbX2FdO1xuICAgICAgICAgICAgaWYgKHNlZ21lbnRbMF0gPT09ICc6Jykge1xuICAgICAgICAgICAgICAgIHZhciBwYXJhbSA9IHJvdXRlLnBhcmFtcyAmJiByb3V0ZS5wYXJhbXNbc2VnbWVudC5zbGljZSgxKV07XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aC5wdXNoKHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNlZ21lbnQgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcGF0aC5wdXNoKHNlZ21lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufTtcbnZhciB3cml0ZVBhdGggPSBmdW5jdGlvbiAoaGlzdG9yeSwgcm9vdCwgdXNlSGFzaCwgcGF0aCwgZGlyZWN0aW9uLCBzdGF0ZSkge1xuICAgIHZhciB1cmwgPSBnZW5lcmF0ZVBhdGgoX19zcHJlYWRBcnJheXMocGFyc2VQYXRoKHJvb3QpLCBwYXRoKSk7XG4gICAgaWYgKHVzZUhhc2gpIHtcbiAgICAgICAgdXJsID0gJyMnICsgdXJsO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uID09PSBST1VURVJfSU5URU5UX0ZPUldBUkQpIHtcbiAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoc3RhdGUsICcnLCB1cmwpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoc3RhdGUsICcnLCB1cmwpO1xuICAgIH1cbn07XG52YXIgcmVtb3ZlUHJlZml4ID0gZnVuY3Rpb24gKHByZWZpeCwgcGF0aCkge1xuICAgIGlmIChwcmVmaXgubGVuZ3RoID4gcGF0aC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChwcmVmaXgubGVuZ3RoIDw9IDEgJiYgcHJlZml4WzBdID09PSAnJykge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByZWZpeFtpXS5sZW5ndGggPiAwICYmIHByZWZpeFtpXSAhPT0gcGF0aFtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhdGgubGVuZ3RoID09PSBwcmVmaXgubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBbJyddO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aC5zbGljZShwcmVmaXgubGVuZ3RoKTtcbn07XG52YXIgcmVhZFBhdGggPSBmdW5jdGlvbiAobG9jLCByb290LCB1c2VIYXNoKSB7XG4gICAgdmFyIHBhdGhuYW1lID0gbG9jLnBhdGhuYW1lO1xuICAgIGlmICh1c2VIYXNoKSB7XG4gICAgICAgIHZhciBoYXNoID0gbG9jLmhhc2g7XG4gICAgICAgIHBhdGhuYW1lID0gKGhhc2hbMF0gPT09ICcjJylcbiAgICAgICAgICAgID8gaGFzaC5zbGljZSgxKVxuICAgICAgICAgICAgOiAnJztcbiAgICB9XG4gICAgdmFyIHByZWZpeCA9IHBhcnNlUGF0aChyb290KTtcbiAgICB2YXIgcGF0aCA9IHBhcnNlUGF0aChwYXRobmFtZSk7XG4gICAgcmV0dXJuIHJlbW92ZVByZWZpeChwcmVmaXgsIHBhdGgpO1xufTtcbnZhciBwYXJzZVBhdGggPSBmdW5jdGlvbiAocGF0aCkge1xuICAgIGlmIChwYXRoID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFsnJ107XG4gICAgfVxuICAgIHZhciBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLnRyaW0oKTsgfSlcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAocykgeyByZXR1cm4gcy5sZW5ndGggPiAwOyB9KTtcbiAgICBpZiAoc2VnbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbJyddO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNlZ21lbnRzO1xuICAgIH1cbn07XG52YXIgcHJpbnRSb3V0ZXMgPSBmdW5jdGlvbiAocm91dGVzKSB7XG4gICAgY29uc29sZS5ncm91cChcIltpb24tY29yZV0gUk9VVEVTW1wiICsgcm91dGVzLmxlbmd0aCArIFwiXVwiKTtcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChjaGFpbikge1xuICAgICAgICB2YXIgcGF0aCA9IFtdO1xuICAgICAgICBjaGFpbi5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IHJldHVybiBwYXRoLnB1c2guYXBwbHkocGF0aCwgci5wYXRoKTsgfSk7XG4gICAgICAgIHZhciBpZHMgPSBjaGFpbi5tYXAoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHIuaWQ7IH0pO1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiJWMgXCIgKyBnZW5lcmF0ZVBhdGgocGF0aCksICdmb250LXdlaWdodDogYm9sZDsgcGFkZGluZy1sZWZ0OiAyMHB4JywgJz0+XFx0JywgXCIoXCIgKyBpZHMuam9pbignLCAnKSArIFwiKVwiKTtcbiAgICB9O1xuICAgIGZvciAodmFyIF9pID0gMCwgcm91dGVzXzEgPSByb3V0ZXM7IF9pIDwgcm91dGVzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBjaGFpbiA9IHJvdXRlc18xW19pXTtcbiAgICAgICAgX2xvb3BfMShjaGFpbik7XG4gICAgfVxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbn07XG52YXIgcHJpbnRSZWRpcmVjdHMgPSBmdW5jdGlvbiAocmVkaXJlY3RzKSB7XG4gICAgY29uc29sZS5ncm91cChcIltpb24tY29yZV0gUkVESVJFQ1RTW1wiICsgcmVkaXJlY3RzLmxlbmd0aCArIFwiXVwiKTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIHJlZGlyZWN0c18xID0gcmVkaXJlY3RzOyBfaSA8IHJlZGlyZWN0c18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgcmVkaXJlY3QgPSByZWRpcmVjdHNfMVtfaV07XG4gICAgICAgIGlmIChyZWRpcmVjdC50bykge1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnRlJPTTogJywgXCIkYyBcIiArIGdlbmVyYXRlUGF0aChyZWRpcmVjdC5mcm9tKSwgJ2ZvbnQtd2VpZ2h0OiBib2xkJywgJyBUTzogJywgXCIkYyBcIiArIGdlbmVyYXRlUGF0aChyZWRpcmVjdC50byksICdmb250LXdlaWdodDogYm9sZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbn07XG52YXIgd3JpdGVOYXZTdGF0ZSA9IGZ1bmN0aW9uIChyb290LCBjaGFpbiwgZGlyZWN0aW9uLCBpbmRleCwgY2hhbmdlZCkge1xuICAgIGlmIChjaGFuZ2VkID09PSB2b2lkIDApIHsgY2hhbmdlZCA9IGZhbHNlOyB9XG4gICAgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvdXRsZXQsIHJvdXRlLCByZXN1bHQsIGVfMTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCA2LCAsIDddKTtcbiAgICAgICAgICAgICAgICAgICAgb3V0bGV0ID0gc2VhcmNoTmF2Tm9kZShyb290KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHdlIGNhbiBjb250aW51ZSBpbnRlcmFjdGluZyB0aGUgRE9NLCBvdGhlcndpc2UgYWJvcnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IGNoYWluLmxlbmd0aCB8fCAhb3V0bGV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgY2hhbmdlZF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgb3V0bGV0LmNvbXBvbmVudE9uUmVhZHkoKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlID0gY2hhaW5baW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBvdXRsZXQuc2V0Um91dGVJZChyb3V0ZS5pZCwgcm91dGUucGFyYW1zLCBkaXJlY3Rpb24pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIG91dGxldCBjaGFuZ2VkIHRoZSBwYWdlLCByZXNldCBuYXZpZ2F0aW9uIHRvIG5ldXRyYWwgKG5vIGRpcmVjdGlvbilcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBtZWFucyBuZXN0ZWQgb3V0bGV0cyB3aWxsIG5vdCBhbmltYXRlXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gUk9VVEVSX0lOVEVOVF9OT05FO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd3JpdGVOYXZTdGF0ZShyZXN1bHQuZWxlbWVudCwgY2hhaW4sIGRpcmVjdGlvbiwgaW5kZXggKyAxLCBjaGFuZ2VkKV07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAvLyByZWN1cnNpdmVseSBzZXQgbmVzdGVkIG91dGxldHNcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQubWFya1Zpc2libGUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXN1bHQubWFya1Zpc2libGUoKV07XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovLCBjaGFuZ2VkXTtcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlXzEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG52YXIgcmVhZE5hdlN0YXRlID0gZnVuY3Rpb24gKHJvb3QpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlkcywgb3V0bGV0LCBub2RlLCBpZDtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZHMgPSBbXTtcbiAgICAgICAgICAgICAgICBub2RlID0gcm9vdDtcbiAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKCF0cnVlKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICBvdXRsZXQgPSBzZWFyY2hOYXZOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIGlmICghb3V0bGV0KSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBvdXRsZXQuZ2V0Um91dGVJZCgpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpZCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGlkLmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlkLmVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIGlkcy5wdXNoKGlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xuICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qLywgeyBpZHM6IGlkcywgb3V0bGV0OiBvdXRsZXQgfV07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xudmFyIHdhaXRVbnRpbE5hdk5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNlYXJjaE5hdk5vZGUoZG9jdW1lbnQuYm9keSkpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2lvbk5hdldpbGxMb2FkJywgcmVzb2x2ZSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIH0pO1xufTtcbnZhciBRVUVSWSA9ICc6bm90KFtuby1yb3V0ZXJdKSBpb24tbmF2LCA6bm90KFtuby1yb3V0ZXJdKSBpb24tdGFicywgOm5vdChbbm8tcm91dGVyXSkgaW9uLXJvdXRlci1vdXRsZXQnO1xudmFyIHNlYXJjaE5hdk5vZGUgPSBmdW5jdGlvbiAocm9vdCkge1xuICAgIGlmICghcm9vdCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAocm9vdC5tYXRjaGVzKFFVRVJZKSkge1xuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG4gICAgdmFyIG91dGxldCA9IHJvb3QucXVlcnlTZWxlY3RvcihRVUVSWSk7XG4gICAgcmV0dXJuIG91dGxldCA/IG91dGxldCA6IHVuZGVmaW5lZDtcbn07XG52YXIgbWF0Y2hlc1JlZGlyZWN0ID0gZnVuY3Rpb24gKGlucHV0LCByb3V0ZSkge1xuICAgIHZhciBmcm9tID0gcm91dGUuZnJvbSwgdG8gPSByb3V0ZS50bztcbiAgICBpZiAodG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChmcm9tLmxlbmd0aCA+IGlucHV0Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnJvbS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXhwZWN0ZWQgPSBmcm9tW2ldO1xuICAgICAgICBpZiAoZXhwZWN0ZWQgPT09ICcqJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV4cGVjdGVkICE9PSBpbnB1dFtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmcm9tLmxlbmd0aCA9PT0gaW5wdXQubGVuZ3RoO1xufTtcbnZhciByb3V0ZVJlZGlyZWN0ID0gZnVuY3Rpb24gKHBhdGgsIHJvdXRlcykge1xuICAgIHJldHVybiByb3V0ZXMuZmluZChmdW5jdGlvbiAocm91dGUpIHsgcmV0dXJuIG1hdGNoZXNSZWRpcmVjdChwYXRoLCByb3V0ZSk7IH0pO1xufTtcbnZhciBtYXRjaGVzSURzID0gZnVuY3Rpb24gKGlkcywgY2hhaW4pIHtcbiAgICB2YXIgbGVuID0gTWF0aC5taW4oaWRzLmxlbmd0aCwgY2hhaW4ubGVuZ3RoKTtcbiAgICB2YXIgaSA9IDA7XG4gICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoaWRzW2ldLnRvTG93ZXJDYXNlKCkgIT09IGNoYWluW2ldLmlkKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaTtcbn07XG52YXIgbWF0Y2hlc1BhdGggPSBmdW5jdGlvbiAoaW5wdXRQYXRoLCBjaGFpbikge1xuICAgIHZhciBzZWdtZW50cyA9IG5ldyBSb3V0ZXJTZWdtZW50cyhpbnB1dFBhdGgpO1xuICAgIHZhciBtYXRjaGVzRGVmYXVsdCA9IGZhbHNlO1xuICAgIHZhciBhbGxwYXJhbXM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFpbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGF0aCA9IGNoYWluW2ldLnBhdGg7XG4gICAgICAgIGlmIChwYXRoWzBdID09PSAnJykge1xuICAgICAgICAgICAgbWF0Y2hlc0RlZmF1bHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBwYXRoXzEgPSBwYXRoOyBfaSA8IHBhdGhfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IHBhdGhfMVtfaV07XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBzZWdtZW50cy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgLy8gZGF0YSBwYXJhbVxuICAgICAgICAgICAgICAgIGlmIChzZWdtZW50WzBdID09PSAnOicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhbGxwYXJhbXMgPSBhbGxwYXJhbXMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSBhbGxwYXJhbXNbaV0gfHwgKGFsbHBhcmFtc1tpXSA9IHt9KTtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zW3NlZ21lbnQuc2xpY2UoMSldID0gZGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF0YSAhPT0gc2VnbWVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXRjaGVzRGVmYXVsdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBtYXRjaGVzID0gKG1hdGNoZXNEZWZhdWx0KVxuICAgICAgICA/IG1hdGNoZXNEZWZhdWx0ID09PSAoc2VnbWVudHMubmV4dCgpID09PSAnJylcbiAgICAgICAgOiB0cnVlO1xuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGFsbHBhcmFtcykge1xuICAgICAgICByZXR1cm4gY2hhaW4ubWFwKGZ1bmN0aW9uIChyb3V0ZSwgaSkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgIGlkOiByb3V0ZS5pZCxcbiAgICAgICAgICAgIHBhdGg6IHJvdXRlLnBhdGgsXG4gICAgICAgICAgICBwYXJhbXM6IG1lcmdlUGFyYW1zKHJvdXRlLnBhcmFtcywgYWxscGFyYW1zW2ldKVxuICAgICAgICB9KTsgfSk7XG4gICAgfVxuICAgIHJldHVybiBjaGFpbjtcbn07XG52YXIgbWVyZ2VQYXJhbXMgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIGlmICghYSAmJiBiKSB7XG4gICAgICAgIHJldHVybiBiO1xuICAgIH1cbiAgICBlbHNlIGlmIChhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICBlbHNlIGlmIChhICYmIGIpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgYSksIGIpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufTtcbnZhciByb3V0ZXJJRHNUb0NoYWluID0gZnVuY3Rpb24gKGlkcywgY2hhaW5zKSB7XG4gICAgdmFyIG1hdGNoID0gbnVsbDtcbiAgICB2YXIgbWF4TWF0Y2hlcyA9IDA7XG4gICAgdmFyIHBsYWluSURzID0gaWRzLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gaS5pZDsgfSk7XG4gICAgZm9yICh2YXIgX2kgPSAwLCBjaGFpbnNfMSA9IGNoYWluczsgX2kgPCBjaGFpbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGNoYWluID0gY2hhaW5zXzFbX2ldO1xuICAgICAgICB2YXIgc2NvcmUgPSBtYXRjaGVzSURzKHBsYWluSURzLCBjaGFpbik7XG4gICAgICAgIGlmIChzY29yZSA+IG1heE1hdGNoZXMpIHtcbiAgICAgICAgICAgIG1hdGNoID0gY2hhaW47XG4gICAgICAgICAgICBtYXhNYXRjaGVzID0gc2NvcmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBtYXRjaC5tYXAoZnVuY3Rpb24gKHJvdXRlLCBpKSB7IHJldHVybiAoe1xuICAgICAgICAgICAgaWQ6IHJvdXRlLmlkLFxuICAgICAgICAgICAgcGF0aDogcm91dGUucGF0aCxcbiAgICAgICAgICAgIHBhcmFtczogbWVyZ2VQYXJhbXMocm91dGUucGFyYW1zLCBpZHNbaV0gJiYgaWRzW2ldLnBhcmFtcylcbiAgICAgICAgfSk7IH0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG52YXIgcm91dGVyUGF0aFRvQ2hhaW4gPSBmdW5jdGlvbiAocGF0aCwgY2hhaW5zKSB7XG4gICAgdmFyIG1hdGNoID0gbnVsbDtcbiAgICB2YXIgbWF0Y2hlcyA9IDA7XG4gICAgZm9yICh2YXIgX2kgPSAwLCBjaGFpbnNfMiA9IGNoYWluczsgX2kgPCBjaGFpbnNfMi5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGNoYWluID0gY2hhaW5zXzJbX2ldO1xuICAgICAgICB2YXIgbWF0Y2hlZENoYWluID0gbWF0Y2hlc1BhdGgocGF0aCwgY2hhaW4pO1xuICAgICAgICBpZiAobWF0Y2hlZENoYWluICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgc2NvcmUgPSBjb21wdXRlUHJpb3JpdHkobWF0Y2hlZENoYWluKTtcbiAgICAgICAgICAgIGlmIChzY29yZSA+IG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gc2NvcmU7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBtYXRjaGVkQ2hhaW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoO1xufTtcbnZhciBjb21wdXRlUHJpb3JpdHkgPSBmdW5jdGlvbiAoY2hhaW4pIHtcbiAgICB2YXIgc2NvcmUgPSAxO1xuICAgIHZhciBsZXZlbCA9IDE7XG4gICAgZm9yICh2YXIgX2kgPSAwLCBjaGFpbl8yID0gY2hhaW47IF9pIDwgY2hhaW5fMi5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHJvdXRlID0gY2hhaW5fMltfaV07XG4gICAgICAgIGZvciAodmFyIF9hID0gMCwgX2IgPSByb3V0ZS5wYXRoOyBfYSA8IF9iLmxlbmd0aDsgX2ErKykge1xuICAgICAgICAgICAgdmFyIHBhdGggPSBfYltfYV07XG4gICAgICAgICAgICBpZiAocGF0aFswXSA9PT0gJzonKSB7XG4gICAgICAgICAgICAgICAgc2NvcmUgKz0gTWF0aC5wb3coMSwgbGV2ZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGF0aCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBzY29yZSArPSBNYXRoLnBvdygyLCBsZXZlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXZlbCsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzY29yZTtcbn07XG52YXIgUm91dGVyU2VnbWVudHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUm91dGVyU2VnbWVudHMocGF0aCkge1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoLnNsaWNlKCk7XG4gICAgfVxuICAgIFJvdXRlclNlZ21lbnRzLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5wYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhdGguc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfTtcbiAgICByZXR1cm4gUm91dGVyU2VnbWVudHM7XG59KCkpO1xudmFyIHJlYWRSZWRpcmVjdHMgPSBmdW5jdGlvbiAocm9vdCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHJvb3QuY2hpbGRyZW4pXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC50YWdOYW1lID09PSAnSU9OLVJPVVRFLVJFRElSRUNUJzsgfSlcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIHRvID0gcmVhZFByb3AoZWwsICd0bycpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZnJvbTogcGFyc2VQYXRoKHJlYWRQcm9wKGVsLCAnZnJvbScpKSxcbiAgICAgICAgICAgIHRvOiB0byA9PSBudWxsID8gdW5kZWZpbmVkIDogcGFyc2VQYXRoKHRvKSxcbiAgICAgICAgfTtcbiAgICB9KTtcbn07XG52YXIgcmVhZFJvdXRlcyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgcmV0dXJuIGZsYXR0ZW5Sb3V0ZXJUcmVlKHJlYWRSb3V0ZU5vZGVzKHJvb3QpKTtcbn07XG52YXIgcmVhZFJvdXRlTm9kZXMgPSBmdW5jdGlvbiAocm9vdCwgbm9kZSkge1xuICAgIGlmIChub2RlID09PSB2b2lkIDApIHsgbm9kZSA9IHJvb3Q7IH1cbiAgICByZXR1cm4gQXJyYXkuZnJvbShub2RlLmNoaWxkcmVuKVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwudGFnTmFtZSA9PT0gJ0lPTi1ST1VURScgJiYgZWwuY29tcG9uZW50OyB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gcmVhZFByb3AoZWwsICdjb21wb25lbnQnKTtcbiAgICAgICAgaWYgKGNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbXBvbmVudCBtaXNzaW5nIGluIGlvbi1yb3V0ZScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXRoOiBwYXJzZVBhdGgocmVhZFByb3AoZWwsICd1cmwnKSksXG4gICAgICAgICAgICBpZDogY29tcG9uZW50LnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBwYXJhbXM6IGVsLmNvbXBvbmVudFByb3BzLFxuICAgICAgICAgICAgY2hpbGRyZW46IHJlYWRSb3V0ZU5vZGVzKHJvb3QsIGVsKVxuICAgICAgICB9O1xuICAgIH0pO1xufTtcbnZhciByZWFkUHJvcCA9IGZ1bmN0aW9uIChlbCwgcHJvcCkge1xuICAgIGlmIChwcm9wIGluIGVsKSB7XG4gICAgICAgIHJldHVybiBlbFtwcm9wXTtcbiAgICB9XG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZShwcm9wKSkge1xuICAgICAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKHByb3ApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG52YXIgZmxhdHRlblJvdXRlclRyZWUgPSBmdW5jdGlvbiAobm9kZXMpIHtcbiAgICB2YXIgcm91dGVzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwLCBub2Rlc18xID0gbm9kZXM7IF9pIDwgbm9kZXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIG5vZGUgPSBub2Rlc18xW19pXTtcbiAgICAgICAgZmxhdHRlbk5vZGUoW10sIHJvdXRlcywgbm9kZSk7XG4gICAgfVxuICAgIHJldHVybiByb3V0ZXM7XG59O1xudmFyIGZsYXR0ZW5Ob2RlID0gZnVuY3Rpb24gKGNoYWluLCByb3V0ZXMsIG5vZGUpIHtcbiAgICB2YXIgcyA9IGNoYWluLnNsaWNlKCk7XG4gICAgcy5wdXNoKHtcbiAgICAgICAgaWQ6IG5vZGUuaWQsXG4gICAgICAgIHBhdGg6IG5vZGUucGF0aCxcbiAgICAgICAgcGFyYW1zOiBub2RlLnBhcmFtc1xuICAgIH0pO1xuICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByb3V0ZXMucHVzaChzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gbm9kZS5jaGlsZHJlbjsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHN1YiA9IF9hW19pXTtcbiAgICAgICAgZmxhdHRlbk5vZGUocywgcm91dGVzLCBzdWIpO1xuICAgIH1cbn07XG52YXIgUm91dGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzEoaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICB0aGlzLnByZXZpb3VzUGF0aCA9IG51bGw7XG4gICAgICAgIHRoaXMuYnVzeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXRlID0gMDtcbiAgICAgICAgdGhpcy5sYXN0U3RhdGUgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogQnkgZGVmYXVsdCBgaW9uLXJvdXRlcmAgd2lsbCBtYXRjaCB0aGUgcm91dGVzIGF0IHRoZSByb290IHBhdGggKFwiL1wiKS5cbiAgICAgICAgICogVGhhdCBjYW4gYmUgY2hhbmdlZCB3aGVuXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJvb3QgPSAnLyc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcm91dGVyIGNhbiB3b3JrIGluIHR3byBcIm1vZGVzXCI6XG4gICAgICAgICAqIC0gV2l0aCBoYXNoOiBgL2luZGV4Lmh0bWwjL3BhdGgvdG8vcGFnZWBcbiAgICAgICAgICogLSBXaXRob3V0IGhhc2g6IGAvcGF0aC90by9wYWdlYFxuICAgICAgICAgKlxuICAgICAgICAgKiBVc2luZyBvbmUgb3IgYW5vdGhlciBtaWdodCBkZXBlbmQgaW4gdGhlIHJlcXVpcmVtZW50cyBvZiB5b3VyIGFwcCBhbmQvb3Igd2hlcmUgaXQncyBkZXBsb3llZC5cbiAgICAgICAgICpcbiAgICAgICAgICogVXN1YWxseSBcImhhc2gtbGVzc1wiIG5hdmlnYXRpb24gd29ya3MgYmV0dGVyIGZvciBTRU8gYW5kIGl0J3MgbW9yZSB1c2VyIGZyaWVuZGx5IHRvbywgYnV0IGl0IG1pZ2h0XG4gICAgICAgICAqIHJlcXVpcmVzIGFkZGl0aW9uYWwgc2VydmVyLXNpZGUgY29uZmlndXJhdGlvbiBpbiBvcmRlciB0byBwcm9wZXJseSB3b3JrLlxuICAgICAgICAgKlxuICAgICAgICAgKiBPbiB0aGUgb3RoZXJzaWRlIGhhc2gtbmF2aWdhdGlvbiBpcyBtdWNoIGVhc2llciB0byBkZXBsb3ksIGl0IGV2ZW4gd29ya3Mgb3ZlciB0aGUgZmlsZSBwcm90b2NvbC5cbiAgICAgICAgICpcbiAgICAgICAgICogQnkgZGVmYXVsdCwgdGhpcyBwcm9wZXJ0eSBpcyBgdHJ1ZWAsIGNoYW5nZSB0byBgZmFsc2VgIHRvIGFsbG93IGhhc2gtbGVzcyBVUkxzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51c2VIYXNoID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pb25Sb3V0ZVdpbGxDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblJvdXRlV2lsbENoYW5nZVwiLCA3KTtcbiAgICAgICAgdGhpcy5pb25Sb3V0ZURpZENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUm91dGVEaWRDaGFuZ2VcIiwgNyk7XG4gICAgfVxuICAgIGNsYXNzXzEucHJvdG90eXBlLmNvbXBvbmVudFdpbGxMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdbaW9uLXJvdXRlcl0gcm91dGVyIHdpbGwgbG9hZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd2FpdFVudGlsTmF2Tm9kZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnW2lvbi1yb3V0ZXJdIGZvdW5kIG5hdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5vblJvdXRlc0NoYW5nZWQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb21wb25lbnREaWRMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaW9uUm91dGVSZWRpcmVjdENoYW5nZWQnLCBkZWJvdW5jZSh0aGlzLm9uUmVkaXJlY3RDaGFuZ2VkLmJpbmQodGhpcyksIDEwKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdpb25Sb3V0ZURhdGFDaGFuZ2VkJywgZGVib3VuY2UodGhpcy5vblJvdXRlc0NoYW5nZWQuYmluZCh0aGlzKSwgMTAwKSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5vblBvcFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0gdGhpcy5oaXN0b3J5RGlyZWN0aW9uKCk7XG4gICAgICAgIHZhciBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ1tpb24tcm91dGVyXSBVUkwgY2hhbmdlZCAtPiB1cGRhdGUgbmF2JywgcGF0aCwgZGlyZWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGVOYXZTdGF0ZVJvb3QocGF0aCwgZGlyZWN0aW9uKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9uQmFja0J1dHRvbiA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBldi5kZXRhaWwucmVnaXN0ZXIoMCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYmFjaygpOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE5hdmlnYXRlIHRvIHRoZSBzcGVjaWZpZWQgVVJMLlxuICAgICAqXG4gICAgICogQHBhcmFtIHVybCBUaGUgdXJsIHRvIG5hdmlnYXRlIHRvLlxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiBvZiB0aGUgYW5pbWF0aW9uLiBEZWZhdWx0cyB0byBgXCJmb3J3YXJkXCJgLlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAodXJsLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gdm9pZCAwKSB7IGRpcmVjdGlvbiA9ICdmb3J3YXJkJzsgfVxuICAgICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy4nKSkge1xuICAgICAgICAgICAgdXJsID0gKG5ldyBVUkwodXJsLCB3aW5kb3cubG9jYXRpb24uaHJlZikpLnBhdGhuYW1lO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ1tpb24tcm91dGVyXSBVUkwgcHVzaGVkIC0+IHVwZGF0aW5nIG5hdicsIHVybCwgZGlyZWN0aW9uKTtcbiAgICAgICAgdmFyIHBhdGggPSBwYXJzZVBhdGgodXJsKTtcbiAgICAgICAgdGhpcy5zZXRQYXRoKHBhdGgsIGRpcmVjdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlTmF2U3RhdGVSb290KHBhdGgsIGRpcmVjdGlvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHbyBiYWNrIHRvIHByZXZpb3VzIHBhZ2UgaW4gdGhlIHdpbmRvdy5oaXN0b3J5LlxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLndhaXRQcm9taXNlKTtcbiAgICB9O1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5wcmludERlYnVnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnQ1VSUkVOVCBQQVRIJywgdGhpcy5nZXRQYXRoKCkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1BSRVZJT1VTIFBBVEgnLCB0aGlzLnByZXZpb3VzUGF0aCk7XG4gICAgICAgICAgICAgICAgcHJpbnRSb3V0ZXMocmVhZFJvdXRlcyh0aGlzLmVsKSk7XG4gICAgICAgICAgICAgICAgcHJpbnRSZWRpcmVjdHMocmVhZFJlZGlyZWN0cyh0aGlzLmVsKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm5hdkNoYW5nZWQgPSBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYSwgaWRzLCBvdXRsZXQsIHJvdXRlcywgY2hhaW4sIHBhdGg7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5idXN5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdbaW9uLXJvdXRlcl0gcm91dGVyIGlzIGJ1c3ksIG5hdkNoYW5nZWQgd2FzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZWFkTmF2U3RhdGUod2luZG93LmRvY3VtZW50LmJvZHkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBfYi5zZW50KCksIGlkcyA9IF9hLmlkcywgb3V0bGV0ID0gX2Eub3V0bGV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVzID0gcmVhZFJvdXRlcyh0aGlzLmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluID0gcm91dGVySURzVG9DaGFpbihpZHMsIHJvdXRlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNoYWluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdbaW9uLXJvdXRlcl0gbm8gbWF0Y2hpbmcgVVJMIGZvciAnLCBpZHMubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiBpLmlkOyB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGggPSBjaGFpblRvUGF0aChjaGFpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1tpb24tcm91dGVyXSByb3V0ZXIgY291bGQgbm90IG1hdGNoIHBhdGggYmVjYXVzZSBzb21lIHJlcXVpcmVkIHBhcmFtIGlzIG1pc3NpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnW2lvbi1yb3V0ZXJdIG5hdiBjaGFuZ2VkIC0+IHVwZGF0ZSBVUkwnLCBpZHMsIHBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQYXRoKHBhdGgsIGRpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnNhZmVXcml0ZU5hdlN0YXRlKG91dGxldCwgY2hhaW4sIFJPVVRFUl9JTlRFTlRfTk9ORSwgcGF0aCwgbnVsbCwgaWRzLmxlbmd0aCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdHJ1ZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25SZWRpcmVjdENoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gICAgICAgIGlmIChwYXRoICYmIHJvdXRlUmVkaXJlY3QocGF0aCwgcmVhZFJlZGlyZWN0cyh0aGlzLmVsKSkpIHtcbiAgICAgICAgICAgIHRoaXMud3JpdGVOYXZTdGF0ZVJvb3QocGF0aCwgUk9VVEVSX0lOVEVOVF9OT05FKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUub25Sb3V0ZXNDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy53cml0ZU5hdlN0YXRlUm9vdCh0aGlzLmdldFBhdGgoKSwgUk9VVEVSX0lOVEVOVF9OT05FKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmhpc3RvcnlEaXJlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3aW4gPSB3aW5kb3c7XG4gICAgICAgIGlmICh3aW4uaGlzdG9yeS5zdGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSsrO1xuICAgICAgICAgICAgd2luLmhpc3RvcnkucmVwbGFjZVN0YXRlKHRoaXMuc3RhdGUsIHdpbi5kb2N1bWVudC50aXRsZSwgd2luLmRvY3VtZW50LmxvY2F0aW9uICYmIHdpbi5kb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhdGUgPSB3aW4uaGlzdG9yeS5zdGF0ZTtcbiAgICAgICAgdmFyIGxhc3RTdGF0ZSA9IHRoaXMubGFzdFN0YXRlO1xuICAgICAgICB0aGlzLmxhc3RTdGF0ZSA9IHN0YXRlO1xuICAgICAgICBpZiAoc3RhdGUgPiBsYXN0U3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBST1VURVJfSU5URU5UX0ZPUldBUkQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhdGUgPCBsYXN0U3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBST1VURVJfSU5URU5UX0JBQ0s7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUk9VVEVSX0lOVEVOVF9OT05FO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS53cml0ZU5hdlN0YXRlUm9vdCA9IGZ1bmN0aW9uIChwYXRoLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlZGlyZWN0cywgcmVkaXJlY3QsIHJlZGlyZWN0RnJvbSwgcm91dGVzLCBjaGFpbjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignW2lvbi1yb3V0ZXJdIFVSTCBpcyBub3QgcGFydCBvZiB0aGUgcm91dGluZyBzZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RzID0gcmVhZFJlZGlyZWN0cyh0aGlzLmVsKTtcbiAgICAgICAgICAgICAgICByZWRpcmVjdCA9IHJvdXRlUmVkaXJlY3QocGF0aCwgcmVkaXJlY3RzKTtcbiAgICAgICAgICAgICAgICByZWRpcmVjdEZyb20gPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBhdGgocmVkaXJlY3QudG8sIGRpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0RnJvbSA9IHJlZGlyZWN0LmZyb207XG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSByZWRpcmVjdC50bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcm91dGVzID0gcmVhZFJvdXRlcyh0aGlzLmVsKTtcbiAgICAgICAgICAgICAgICBjaGFpbiA9IHJvdXRlclBhdGhUb0NoYWluKHBhdGgsIHJvdXRlcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFjaGFpbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbaW9uLXJvdXRlcl0gdGhlIHBhdGggZG9lcyBub3QgbWF0Y2ggYW55IHJvdXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHdyaXRlIERPTSBnaXZlXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMuc2FmZVdyaXRlTmF2U3RhdGUoZG9jdW1lbnQuYm9keSwgY2hhaW4sIGRpcmVjdGlvbiwgcGF0aCwgcmVkaXJlY3RGcm9tKV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5zYWZlV3JpdGVOYXZTdGF0ZSA9IGZ1bmN0aW9uIChub2RlLCBjaGFpbiwgZGlyZWN0aW9uLCBwYXRoLCByZWRpcmVjdEZyb20sIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7IGluZGV4ID0gMDsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdW5sb2NrLCBjaGFuZ2VkLCBlXzI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMubG9jaygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgdW5sb2NrID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzIsIDQsICwgNV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy53cml0ZU5hdlN0YXRlKG5vZGUsIGNoYWluLCBkaXJlY3Rpb24sIHBhdGgsIHJlZGlyZWN0RnJvbSwgaW5kZXgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVfMik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgdW5sb2NrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgY2hhbmdlZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUubG9jayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHAsIHJlc29sdmU7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBwID0gdGhpcy53YWl0UHJvbWlzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2FpdFByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocikgeyByZXR1cm4gcmVzb2x2ZSA9IHI7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocCAhPT0gdW5kZWZpbmVkKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBwXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovLCByZXNvbHZlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS53cml0ZU5hdlN0YXRlID0gZnVuY3Rpb24gKG5vZGUsIGNoYWluLCBkaXJlY3Rpb24sIHBhdGgsIHJlZGlyZWN0RnJvbSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSB2b2lkIDApIHsgaW5kZXggPSAwOyB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByb3V0ZUV2ZW50LCBjaGFuZ2VkO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYnVzeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignW2lvbi1yb3V0ZXJdIHJvdXRlciBpcyBidXN5LCB0cmFuc2l0aW9uIHdhcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idXN5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlRXZlbnQgPSB0aGlzLnJvdXRlQ2hhbmdlRXZlbnQocGF0aCwgcmVkaXJlY3RGcm9tKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pb25Sb3V0ZVdpbGxDaGFuZ2UuZW1pdChyb3V0ZUV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHdyaXRlTmF2U3RhdGUobm9kZSwgY2hhaW4sIGRpcmVjdGlvbiwgaW5kZXgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVzeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdbaW9uLXJvdXRlcl0gcm91dGUgY2hhbmdlZCcsIHBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW1pdCBkaWQgY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW9uUm91dGVEaWRDaGFuZ2UuZW1pdChyb3V0ZUV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBjaGFuZ2VkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5zZXRQYXRoID0gZnVuY3Rpb24gKHBhdGgsIGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLnN0YXRlKys7XG4gICAgICAgIHdyaXRlUGF0aCh3aW5kb3cuaGlzdG9yeSwgdGhpcy5yb290LCB0aGlzLnVzZUhhc2gsIHBhdGgsIGRpcmVjdGlvbiwgdGhpcy5zdGF0ZSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5nZXRQYXRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVhZFBhdGgod2luZG93LmxvY2F0aW9uLCB0aGlzLnJvb3QsIHRoaXMudXNlSGFzaCk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yb3V0ZUNoYW5nZUV2ZW50ID0gZnVuY3Rpb24gKHBhdGgsIHJlZGlyZWN0RnJvbVBhdGgpIHtcbiAgICAgICAgdmFyIGZyb20gPSB0aGlzLnByZXZpb3VzUGF0aDtcbiAgICAgICAgdmFyIHRvID0gZ2VuZXJhdGVQYXRoKHBhdGgpO1xuICAgICAgICB0aGlzLnByZXZpb3VzUGF0aCA9IHRvO1xuICAgICAgICBpZiAodG8gPT09IGZyb20pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZWRpcmVjdGVkRnJvbSA9IHJlZGlyZWN0RnJvbVBhdGggPyBnZW5lcmF0ZVBhdGgocmVkaXJlY3RGcm9tUGF0aCkgOiBudWxsO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZnJvbTogZnJvbSxcbiAgICAgICAgICAgIHJlZGlyZWN0ZWRGcm9tOiByZWRpcmVjdGVkRnJvbSxcbiAgICAgICAgICAgIHRvOiB0byxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzE7XG59KCkpO1xudmFyIFJvdXRlckxpbmsgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUm91dGVyTGluayhob3N0UmVmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIHVzaW5nIGEgcm91dGVyLCBpdCBzcGVjaWZpZXMgdGhlIHRyYW5zaXRpb24gZGlyZWN0aW9uIHdoZW4gbmF2aWdhdGluZyB0b1xuICAgICAgICAgKiBhbm90aGVyIHBhZ2UgdXNpbmcgYGhyZWZgLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yb3V0ZXJEaXJlY3Rpb24gPSAnZm9yd2FyZCc7XG4gICAgICAgIHRoaXMub25DbGljayA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgb3BlblVSTChfdGhpcy5ocmVmLCBldiwgX3RoaXMucm91dGVyRGlyZWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgUm91dGVyTGluay5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAgICAgdmFyIGF0dHJzID0ge1xuICAgICAgICAgICAgaHJlZjogdGhpcy5ocmVmLFxuICAgICAgICAgICAgcmVsOiB0aGlzLnJlbCxcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy50YXJnZXRcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5vbkNsaWNrLCBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvcikpLCAoX2EgPSB7fSwgX2FbbW9kZV0gPSB0cnVlLCBfYVsnaW9uLWFjdGl2YXRhYmxlJ10gPSB0cnVlLCBfYSkpIH0sIGgoXCJhXCIsIE9iamVjdC5hc3NpZ24oe30sIGF0dHJzKSwgaChcInNsb3RcIiwgbnVsbCkpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUm91dGVyTGluaywgXCJzdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCI6aG9zdHstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKX06aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9YXtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdH1cIjsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFJvdXRlckxpbms7XG59KCkpO1xuZXhwb3J0IHsgUm91dGUgYXMgaW9uX3JvdXRlLCBSb3V0ZVJlZGlyZWN0IGFzIGlvbl9yb3V0ZV9yZWRpcmVjdCwgUm91dGVyIGFzIGlvbl9yb3V0ZXIsIFJvdXRlckxpbmsgYXMgaW9uX3JvdXRlcl9saW5rIH07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG52YXIgaG9zdENvbnRleHQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGVsKSB7XG4gICAgcmV0dXJuIGVsLmNsb3Nlc3Qoc2VsZWN0b3IpICE9PSBudWxsO1xufTtcbi8qKlxuICogQ3JlYXRlIHRoZSBtb2RlIGFuZCBjb2xvciBjbGFzc2VzIGZvciB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBjbGFzc2VzIHBhc3NlZCBpblxuICovXG52YXIgY3JlYXRlQ29sb3JDbGFzc2VzID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiBjb2xvci5sZW5ndGggPiAwKSA/IChfYSA9IHtcbiAgICAgICAgICAgICdpb24tY29sb3InOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIF9hW1wiaW9uLWNvbG9yLVwiICsgY29sb3JdID0gdHJ1ZSxcbiAgICAgICAgX2EpIDogdW5kZWZpbmVkO1xufTtcbnZhciBnZXRDbGFzc0xpc3QgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIGlmIChjbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgIHJldHVybiBhcnJheVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYyAhPSBudWxsOyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50cmltKCk7IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSAnJzsgfSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbn07XG52YXIgZ2V0Q2xhc3NNYXAgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICBnZXRDbGFzc0xpc3QoY2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gbWFwW2NdID0gdHJ1ZTsgfSk7XG4gICAgcmV0dXJuIG1hcDtcbn07XG52YXIgU0NIRU1FID0gL15bYS16XVthLXowLTkrXFwtLl0qOi87XG52YXIgb3BlblVSTCA9IGZ1bmN0aW9uICh1cmwsIGV2LCBkaXJlY3Rpb24pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvdXRlcjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmxbMF0gIT09ICcjJyAmJiAhU0NIRU1FLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgICAgICAgaWYgKHJvdXRlcikge1xuICAgICAgICAgICAgICAgIGlmIChldiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByb3V0ZXIucHVzaCh1cmwsIGRpcmVjdGlvbildO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydCB7IGNyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLCBnZXRDbGFzc01hcCBhcyBnLCBob3N0Q29udGV4dCBhcyBoLCBvcGVuVVJMIGFzIG8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=