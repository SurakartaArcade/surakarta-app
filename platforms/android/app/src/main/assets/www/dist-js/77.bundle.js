(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/css-shim-206ea950-3169f23e.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/css-shim-206ea950-3169f23e.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Extremely simple css parser. Intended to be not more than what we need
and definitely not necessarily correct =).
*/
/** @unrestricted */
var StyleNode = /** @class */ (function () {
    function StyleNode() {
        this.start = 0;
        this.end = 0;
        this.previous = null;
        this.parent = null;
        this.rules = null;
        this.parsedCssText = '';
        this.cssText = '';
        this.atRule = false;
        this.type = 0;
        this.keyframesName = '';
        this.selector = '';
        this.parsedSelector = '';
    }
    return StyleNode;
}());
// given a string of css, return a simple rule tree
/**
 * @param {string} text
 * @return {StyleNode}
 */
function parse(text) {
    text = clean(text);
    return parseCss(lex(text), text);
}
// remove stuff we don't care about that may hinder parsing
/**
 * @param {string} cssText
 * @return {string}
 */
function clean(cssText) {
    return cssText.replace(RX.comments, '').replace(RX.port, '');
}
// super simple {...} lexer that returns a node tree
/**
 * @param {string} text
 * @return {StyleNode}
 */
function lex(text) {
    var root = new StyleNode();
    root['start'] = 0;
    root['end'] = text.length;
    var n = root;
    for (var i = 0, l = text.length; i < l; i++) {
        if (text[i] === OPEN_BRACE) {
            if (!n['rules']) {
                n['rules'] = [];
            }
            var p = n;
            var previous = p['rules'][p['rules'].length - 1] || null;
            n = new StyleNode();
            n['start'] = i + 1;
            n['parent'] = p;
            n['previous'] = previous;
            p['rules'].push(n);
        }
        else if (text[i] === CLOSE_BRACE) {
            n['end'] = i + 1;
            n = n['parent'] || root;
        }
    }
    return root;
}
// add selectors/cssText to node tree
/**
 * @param {StyleNode} node
 * @param {string} text
 * @return {StyleNode}
 */
function parseCss(node, text) {
    var t = text.substring(node['start'], node['end'] - 1);
    node['parsedCssText'] = node['cssText'] = t.trim();
    if (node.parent) {
        var ss = node.previous ? node.previous['end'] : node.parent['start'];
        t = text.substring(ss, node['start'] - 1);
        t = _expandUnicodeEscapes(t);
        t = t.replace(RX.multipleSpaces, ' ');
        // TODO(sorvell): ad hoc; make selector include only after last ;
        // helps with mixin syntax
        t = t.substring(t.lastIndexOf(';') + 1);
        var s = node['parsedSelector'] = node['selector'] = t.trim();
        node['atRule'] = (s.indexOf(AT_START) === 0);
        // note, support a subset of rule types...
        if (node['atRule']) {
            if (s.indexOf(MEDIA_START) === 0) {
                node['type'] = types.MEDIA_RULE;
            }
            else if (s.match(RX.keyframesRule)) {
                node['type'] = types.KEYFRAMES_RULE;
                node['keyframesName'] = node['selector'].split(RX.multipleSpaces).pop();
            }
        }
        else {
            if (s.indexOf(VAR_START) === 0) {
                node['type'] = types.MIXIN_RULE;
            }
            else {
                node['type'] = types.STYLE_RULE;
            }
        }
    }
    var r$ = node['rules'];
    if (r$) {
        for (var i = 0, l = r$.length, r = void 0; (i < l) && (r = r$[i]); i++) {
            parseCss(r, text);
        }
    }
    return node;
}
/**
 * conversion of sort unicode escapes with spaces like `\33 ` (and longer) into
 * expanded form that doesn't require trailing space `\000033`
 * @param {string} s
 * @return {string}
 */
function _expandUnicodeEscapes(s) {
    return s.replace(/\\([0-9a-f]{1,6})\s/gi, function () {
        var code = arguments[1], repeat = 6 - code.length;
        while (repeat--) {
            code = '0' + code;
        }
        return '\\' + code;
    });
}
/** @enum {number} */
var types = {
    STYLE_RULE: 1,
    KEYFRAMES_RULE: 7,
    MEDIA_RULE: 4,
    MIXIN_RULE: 1000
};
var OPEN_BRACE = '{';
var CLOSE_BRACE = '}';
// helper regexp's
var RX = {
    comments: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
    port: /@import[^;]*;/gim,
    customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
    mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
    mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
    varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
    keyframesRule: /^@[^\s]*keyframes/,
    multipleSpaces: /\s+/g
};
var VAR_START = '--';
var MEDIA_START = '@media';
var AT_START = '@';
function findRegex(regex, cssText, offset) {
    regex['lastIndex'] = 0;
    var r = cssText.substring(offset).match(regex);
    if (r) {
        var start = offset + r['index'];
        return {
            start: start,
            end: start + r[0].length
        };
    }
    return null;
}
var VAR_USAGE_START = /\bvar\(/;
var VAR_ASSIGN_START = /\B--[\w-]+\s*:/;
var COMMENTS = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim;
var TRAILING_LINES = /^[\t ]+\n/gm;
function resolveVar(props, prop, fallback) {
    if (props[prop]) {
        return props[prop];
    }
    if (fallback) {
        return executeTemplate(fallback, props);
    }
    return '';
}
function findVarEndIndex(cssText, offset) {
    var count = 0;
    var i = offset;
    for (; i < cssText.length; i++) {
        var c = cssText[i];
        if (c === '(') {
            count++;
        }
        else if (c === ')') {
            count--;
            if (count <= 0) {
                return i + 1;
            }
        }
    }
    return i;
}
function parseVar(cssText, offset) {
    var varPos = findRegex(VAR_USAGE_START, cssText, offset);
    if (!varPos) {
        return null;
    }
    var endVar = findVarEndIndex(cssText, varPos.start);
    var varContent = cssText.substring(varPos.end, endVar - 1);
    var _a = varContent.split(','), propName = _a[0], fallback = _a.slice(1);
    return {
        start: varPos.start,
        end: endVar,
        propName: propName.trim(),
        fallback: fallback.length > 0 ? fallback.join(',').trim() : undefined
    };
}
function compileVar(cssText, template, offset) {
    var varMeta = parseVar(cssText, offset);
    if (!varMeta) {
        template.push(cssText.substring(offset, cssText.length));
        return cssText.length;
    }
    var propName = varMeta.propName;
    var fallback = varMeta.fallback != null ? compileTemplate(varMeta.fallback) : undefined;
    template.push(cssText.substring(offset, varMeta.start), function (params) { return resolveVar(params, propName, fallback); });
    return varMeta.end;
}
function executeTemplate(template, props) {
    var final = '';
    for (var i = 0; i < template.length; i++) {
        var s = template[i];
        final += (typeof s === 'string')
            ? s
            : s(props);
    }
    return final;
}
function findEndValue(cssText, offset) {
    var onStr = false;
    var double = false;
    var i = offset;
    for (; i < cssText.length; i++) {
        var c = cssText[i];
        if (onStr) {
            if (double && c === '"') {
                onStr = false;
            }
            if (!double && c === '\'') {
                onStr = false;
            }
        }
        else {
            if (c === '"') {
                onStr = true;
                double = true;
            }
            else if (c === '\'') {
                onStr = true;
                double = false;
            }
            else if (c === ';') {
                return i + 1;
            }
            else if (c === '}') {
                return i;
            }
        }
    }
    return i;
}
function removeCustomAssigns(cssText) {
    var final = '';
    var offset = 0;
    while (true) {
        var assignPos = findRegex(VAR_ASSIGN_START, cssText, offset);
        var start = assignPos ? assignPos.start : cssText.length;
        final += cssText.substring(offset, start);
        if (assignPos) {
            offset = findEndValue(cssText, start);
        }
        else {
            break;
        }
    }
    return final;
}
function compileTemplate(cssText) {
    var index = 0;
    cssText = cssText.replace(COMMENTS, '');
    cssText = removeCustomAssigns(cssText)
        .replace(TRAILING_LINES, '');
    var segments = [];
    while (index < cssText.length) {
        index = compileVar(cssText, segments, index);
    }
    return segments;
}
function resolveValues(selectors) {
    var props = {};
    selectors.forEach(function (selector) {
        selector.declarations.forEach(function (dec) {
            props[dec.prop] = dec.value;
        });
    });
    var propsValues = {};
    var entries = Object.entries(props);
    var _loop_1 = function (i) {
        var dirty = false;
        entries.forEach(function (_a) {
            var key = _a[0], value = _a[1];
            var propValue = executeTemplate(value, propsValues);
            if (propValue !== propsValues[key]) {
                propsValues[key] = propValue;
                dirty = true;
            }
        });
        if (!dirty) {
            return "break";
        }
    };
    for (var i = 0; i < 10; i++) {
        var state_1 = _loop_1();
        if (state_1 === "break")
            break;
    }
    return propsValues;
}
function getSelectors(root, index) {
    if (index === void 0) {
        index = 0;
    }
    if (!root.rules) {
        return [];
    }
    var selectors = [];
    root.rules
        .filter(function (rule) { return rule.type === types.STYLE_RULE; })
        .forEach(function (rule) {
        var declarations = getDeclarations(rule.cssText);
        if (declarations.length > 0) {
            rule.parsedSelector.split(',').forEach(function (selector) {
                selector = selector.trim();
                selectors.push({
                    selector: selector,
                    declarations: declarations,
                    specificity: computeSpecificity(),
                    nu: index
                });
            });
        }
        index++;
    });
    return selectors;
}
function computeSpecificity(_selector) {
    return 1;
}
var IMPORTANT = '!important';
var FIND_DECLARATIONS = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;
function getDeclarations(cssText) {
    var declarations = [];
    var xArray;
    while (xArray = FIND_DECLARATIONS.exec(cssText.trim())) {
        var _a = normalizeValue(xArray[2]), value = _a.value, important = _a.important;
        declarations.push({
            prop: xArray[1].trim(),
            value: compileTemplate(value),
            important: important,
        });
    }
    return declarations;
}
function normalizeValue(value) {
    var regex = /\s+/gim;
    value = value.replace(regex, ' ').trim();
    var important = value.endsWith(IMPORTANT);
    if (important) {
        value = value.substr(0, value.length - IMPORTANT.length).trim();
    }
    return {
        value: value,
        important: important
    };
}
function getActiveSelectors(hostEl, hostScopeMap, globalScopes) {
    // computes the css scopes that might affect this particular element
    // avoiding using spread arrays to avoid ts helper fns when in es5
    var scopes = [];
    var scopesForElement = getScopesForElement(hostScopeMap, hostEl);
    // globalScopes are always took into account
    globalScopes.forEach(function (s) { return scopes.push(s); });
    // the parent scopes are computed by walking parent dom until <html> is reached
    scopesForElement.forEach(function (s) { return scopes.push(s); });
    // each scope might have an array of associated selectors
    // let's flatten the complete array of selectors from all the scopes
    var selectorSet = getSelectorsForScopes(scopes);
    // we filter to only the selectors that matches the hostEl
    var activeSelectors = selectorSet.filter(function (selector) { return matches(hostEl, selector.selector); });
    // sort selectors by specifity
    return sortSelectors(activeSelectors);
}
function getScopesForElement(hostTemplateMap, node) {
    var scopes = [];
    while (node) {
        var scope = hostTemplateMap.get(node);
        if (scope) {
            scopes.push(scope);
        }
        node = node.parentElement;
    }
    return scopes;
}
function getSelectorsForScopes(scopes) {
    var selectors = [];
    scopes.forEach(function (scope) {
        selectors.push.apply(selectors, scope.selectors);
    });
    return selectors;
}
function sortSelectors(selectors) {
    selectors.sort(function (a, b) {
        if (a.specificity === b.specificity) {
            return a.nu - b.nu;
        }
        return a.specificity - b.specificity;
    });
    return selectors;
}
function matches(el, selector) {
    return selector === ':root' || selector === 'html' || el.matches(selector);
}
function parseCSS(original) {
    var ast = parse(original);
    var template = compileTemplate(original);
    var selectors = getSelectors(ast);
    return {
        original: original,
        template: template,
        selectors: selectors,
        usesCssVars: template.length > 1
    };
}
function addGlobalStyle(globalScopes, styleEl) {
    if (globalScopes.some(function (css) { return css.styleEl === styleEl; })) {
        return false;
    }
    var css = parseCSS(styleEl.textContent);
    css.styleEl = styleEl;
    globalScopes.push(css);
    return true;
}
function updateGlobalScopes(scopes) {
    var selectors = getSelectorsForScopes(scopes);
    var props = resolveValues(selectors);
    scopes.forEach(function (scope) {
        if (scope.usesCssVars) {
            scope.styleEl.textContent = executeTemplate(scope.template, props);
        }
    });
}
function reScope(scope, scopeId) {
    var template = scope.template.map(function (segment) {
        return (typeof segment === 'string')
            ? replaceScope(segment, scope.scopeId, scopeId)
            : segment;
    });
    var selectors = scope.selectors.map(function (sel) {
        return Object.assign(Object.assign({}, sel), { selector: replaceScope(sel.selector, scope.scopeId, scopeId) });
    });
    return Object.assign(Object.assign({}, scope), { template: template,
        selectors: selectors,
        scopeId: scopeId });
}
function replaceScope(original, oldScopeId, newScopeId) {
    original = replaceAll(original, "\\." + oldScopeId, "." + newScopeId);
    return original;
}
function replaceAll(input, find, replace) {
    return input.replace(new RegExp(find, 'g'), replace);
}
function loadDocument(doc, globalScopes) {
    loadDocumentStyles(doc, globalScopes);
    return loadDocumentLinks(doc, globalScopes);
}
function startWatcher(doc, globalScopes) {
    var mutation = new MutationObserver(function () {
        if (loadDocumentStyles(doc, globalScopes)) {
            updateGlobalScopes(globalScopes);
        }
    });
    mutation.observe(document.head, { childList: true });
}
function loadDocumentLinks(doc, globalScopes) {
    var promises = [];
    var linkElms = doc.querySelectorAll('link[rel="stylesheet"][href]:not([data-no-shim])');
    for (var i = 0; i < linkElms.length; i++) {
        promises.push(addGlobalLink(doc, globalScopes, linkElms[i]));
    }
    return Promise.all(promises);
}
function loadDocumentStyles(doc, globalScopes) {
    var styleElms = Array.from(doc.querySelectorAll('style:not([data-styles]):not([data-no-shim])'));
    return styleElms
        .map(function (style) { return addGlobalStyle(globalScopes, style); })
        .some(Boolean);
}
function addGlobalLink(doc, globalScopes, linkElm) {
    var url = linkElm.href;
    return fetch(url).then(function (rsp) { return rsp.text(); }).then(function (text) {
        if (hasCssVariables(text) && linkElm.parentNode) {
            if (hasRelativeUrls(text)) {
                text = fixRelativeUrls(text, url);
            }
            var styleEl = doc.createElement('style');
            styleEl.setAttribute('data-styles', '');
            styleEl.textContent = text;
            addGlobalStyle(globalScopes, styleEl);
            linkElm.parentNode.insertBefore(styleEl, linkElm);
            linkElm.remove();
        }
    }).catch(function (err) {
        console.error(err);
    });
}
// This regexp tries to determine when a variable is declared, for example:
//
// .my-el { --highlight-color: green; }
//
// but we don't want to trigger when a classname uses "--" or a pseudo-class is
// used. We assume that the only characters that can preceed a variable
// declaration are "{", from an opening block, ";" from a preceeding rule, or a
// space. This prevents the regexp from matching a word in a selector, since
// they would need to start with a "." or "#". (We assume element names don't
// start with "--").
var CSS_VARIABLE_REGEXP = /[\s;{]--[-a-zA-Z0-9]+\s*:/m;
function hasCssVariables(css) {
    return css.indexOf('var(') > -1 || CSS_VARIABLE_REGEXP.test(css);
}
// This regexp find all url() usages with relative urls
var CSS_URL_REGEXP = /url[\s]*\([\s]*['"]?(?!(?:https?|data)\:|\/)([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim;
function hasRelativeUrls(css) {
    CSS_URL_REGEXP.lastIndex = 0;
    return CSS_URL_REGEXP.test(css);
}
function fixRelativeUrls(css, originalUrl) {
    // get the basepath from the original import url
    var basePath = originalUrl.replace(/[^/]*$/, '');
    // replace the relative url, with the new relative url
    return css.replace(CSS_URL_REGEXP, function (fullMatch, url) {
        // rhe new relative path is the base path + uri
        // TODO: normalize relative URL
        var relativeUrl = basePath + url;
        return fullMatch.replace(url, relativeUrl);
    });
}
var CustomStyle = /** @class */ (function () {
    function CustomStyle(win, doc) {
        this.win = win;
        this.doc = doc;
        this.count = 0;
        this.hostStyleMap = new WeakMap();
        this.hostScopeMap = new WeakMap();
        this.globalScopes = [];
        this.scopesMap = new Map();
        this.didInit = false;
    }
    CustomStyle.prototype.initShim = function () {
        var _this = this;
        if (this.didInit) {
            return Promise.resolve();
        }
        else {
            this.didInit = true;
            return new Promise(function (resolve) {
                _this.win.requestAnimationFrame(function () {
                    startWatcher(_this.doc, _this.globalScopes);
                    loadDocument(_this.doc, _this.globalScopes).then(function () { return resolve(); });
                });
            });
        }
    };
    CustomStyle.prototype.addLink = function (linkEl) {
        var _this = this;
        return addGlobalLink(this.doc, this.globalScopes, linkEl).then(function () {
            _this.updateGlobal();
        });
    };
    CustomStyle.prototype.addGlobalStyle = function (styleEl) {
        if (addGlobalStyle(this.globalScopes, styleEl)) {
            this.updateGlobal();
        }
    };
    CustomStyle.prototype.createHostStyle = function (hostEl, cssScopeId, cssText, isScoped) {
        if (this.hostScopeMap.has(hostEl)) {
            throw new Error('host style already created');
        }
        var baseScope = this.registerHostTemplate(cssText, cssScopeId, isScoped);
        var styleEl = this.doc.createElement('style');
        styleEl.setAttribute('data-styles', '');
        if (!baseScope.usesCssVars) {
            // This component does not use (read) css variables
            styleEl.textContent = cssText;
        }
        else if (isScoped) {
            // This component is dynamic: uses css var and is scoped
            styleEl['s-sc'] = cssScopeId = baseScope.scopeId + "-" + this.count;
            styleEl.textContent = '/*needs update*/';
            this.hostStyleMap.set(hostEl, styleEl);
            this.hostScopeMap.set(hostEl, reScope(baseScope, cssScopeId));
            this.count++;
        }
        else {
            // This component uses css vars, but it's no-encapsulation (global static)
            baseScope.styleEl = styleEl;
            if (!baseScope.usesCssVars) {
                styleEl.textContent = executeTemplate(baseScope.template, {});
            }
            this.globalScopes.push(baseScope);
            this.updateGlobal();
            this.hostScopeMap.set(hostEl, baseScope);
        }
        return styleEl;
    };
    CustomStyle.prototype.removeHost = function (hostEl) {
        var css = this.hostStyleMap.get(hostEl);
        if (css) {
            css.remove();
        }
        this.hostStyleMap.delete(hostEl);
        this.hostScopeMap.delete(hostEl);
    };
    CustomStyle.prototype.updateHost = function (hostEl) {
        var scope = this.hostScopeMap.get(hostEl);
        if (scope && scope.usesCssVars && scope.isScoped) {
            var styleEl = this.hostStyleMap.get(hostEl);
            if (styleEl) {
                var selectors = getActiveSelectors(hostEl, this.hostScopeMap, this.globalScopes);
                var props = resolveValues(selectors);
                styleEl.textContent = executeTemplate(scope.template, props);
            }
        }
    };
    CustomStyle.prototype.updateGlobal = function () {
        updateGlobalScopes(this.globalScopes);
    };
    CustomStyle.prototype.registerHostTemplate = function (cssText, scopeId, isScoped) {
        var scope = this.scopesMap.get(scopeId);
        if (!scope) {
            scope = parseCSS(cssText);
            scope.scopeId = scopeId;
            scope.isScoped = isScoped;
            this.scopesMap.set(scopeId, scope);
        }
        return scope;
    };
    return CustomStyle;
}());
var win = window;
function needsShim() {
    return !(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'));
}
if (!win.__stencil_cssshim && needsShim()) {
    win.__stencil_cssshim = new CustomStyle(win, document);
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L2Nzcy1zaGltLTIwNmVhOTUwLTMxNjlmMjNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsSUFBSTtBQUNyQjtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLE9BQU87QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Qsd0JBQXdCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRixrQkFBa0IsRUFBRTtBQUN0RyxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ijc3LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5FeHRyZW1lbHkgc2ltcGxlIGNzcyBwYXJzZXIuIEludGVuZGVkIHRvIGJlIG5vdCBtb3JlIHRoYW4gd2hhdCB3ZSBuZWVkXG5hbmQgZGVmaW5pdGVseSBub3QgbmVjZXNzYXJpbHkgY29ycmVjdCA9KS5cbiovXG4vKiogQHVucmVzdHJpY3RlZCAqL1xudmFyIFN0eWxlTm9kZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdHlsZU5vZGUoKSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSAwO1xuICAgICAgICB0aGlzLmVuZCA9IDA7XG4gICAgICAgIHRoaXMucHJldmlvdXMgPSBudWxsO1xuICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMucnVsZXMgPSBudWxsO1xuICAgICAgICB0aGlzLnBhcnNlZENzc1RleHQgPSAnJztcbiAgICAgICAgdGhpcy5jc3NUZXh0ID0gJyc7XG4gICAgICAgIHRoaXMuYXRSdWxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHlwZSA9IDA7XG4gICAgICAgIHRoaXMua2V5ZnJhbWVzTmFtZSA9ICcnO1xuICAgICAgICB0aGlzLnNlbGVjdG9yID0gJyc7XG4gICAgICAgIHRoaXMucGFyc2VkU2VsZWN0b3IgPSAnJztcbiAgICB9XG4gICAgcmV0dXJuIFN0eWxlTm9kZTtcbn0oKSk7XG4vLyBnaXZlbiBhIHN0cmluZyBvZiBjc3MsIHJldHVybiBhIHNpbXBsZSBydWxlIHRyZWVcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHRcbiAqIEByZXR1cm4ge1N0eWxlTm9kZX1cbiAqL1xuZnVuY3Rpb24gcGFyc2UodGV4dCkge1xuICAgIHRleHQgPSBjbGVhbih0ZXh0KTtcbiAgICByZXR1cm4gcGFyc2VDc3MobGV4KHRleHQpLCB0ZXh0KTtcbn1cbi8vIHJlbW92ZSBzdHVmZiB3ZSBkb24ndCBjYXJlIGFib3V0IHRoYXQgbWF5IGhpbmRlciBwYXJzaW5nXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBjc3NUZXh0XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNsZWFuKGNzc1RleHQpIHtcbiAgICByZXR1cm4gY3NzVGV4dC5yZXBsYWNlKFJYLmNvbW1lbnRzLCAnJykucmVwbGFjZShSWC5wb3J0LCAnJyk7XG59XG4vLyBzdXBlciBzaW1wbGUgey4uLn0gbGV4ZXIgdGhhdCByZXR1cm5zIGEgbm9kZSB0cmVlXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gKiBAcmV0dXJuIHtTdHlsZU5vZGV9XG4gKi9cbmZ1bmN0aW9uIGxleCh0ZXh0KSB7XG4gICAgdmFyIHJvb3QgPSBuZXcgU3R5bGVOb2RlKCk7XG4gICAgcm9vdFsnc3RhcnQnXSA9IDA7XG4gICAgcm9vdFsnZW5kJ10gPSB0ZXh0Lmxlbmd0aDtcbiAgICB2YXIgbiA9IHJvb3Q7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0ZXh0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAodGV4dFtpXSA9PT0gT1BFTl9CUkFDRSkge1xuICAgICAgICAgICAgaWYgKCFuWydydWxlcyddKSB7XG4gICAgICAgICAgICAgICAgblsncnVsZXMnXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHAgPSBuO1xuICAgICAgICAgICAgdmFyIHByZXZpb3VzID0gcFsncnVsZXMnXVtwWydydWxlcyddLmxlbmd0aCAtIDFdIHx8IG51bGw7XG4gICAgICAgICAgICBuID0gbmV3IFN0eWxlTm9kZSgpO1xuICAgICAgICAgICAgblsnc3RhcnQnXSA9IGkgKyAxO1xuICAgICAgICAgICAgblsncGFyZW50J10gPSBwO1xuICAgICAgICAgICAgblsncHJldmlvdXMnXSA9IHByZXZpb3VzO1xuICAgICAgICAgICAgcFsncnVsZXMnXS5wdXNoKG4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRleHRbaV0gPT09IENMT1NFX0JSQUNFKSB7XG4gICAgICAgICAgICBuWydlbmQnXSA9IGkgKyAxO1xuICAgICAgICAgICAgbiA9IG5bJ3BhcmVudCddIHx8IHJvb3Q7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJvb3Q7XG59XG4vLyBhZGQgc2VsZWN0b3JzL2Nzc1RleHQgdG8gbm9kZSB0cmVlXG4vKipcbiAqIEBwYXJhbSB7U3R5bGVOb2RlfSBub2RlXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICogQHJldHVybiB7U3R5bGVOb2RlfVxuICovXG5mdW5jdGlvbiBwYXJzZUNzcyhub2RlLCB0ZXh0KSB7XG4gICAgdmFyIHQgPSB0ZXh0LnN1YnN0cmluZyhub2RlWydzdGFydCddLCBub2RlWydlbmQnXSAtIDEpO1xuICAgIG5vZGVbJ3BhcnNlZENzc1RleHQnXSA9IG5vZGVbJ2Nzc1RleHQnXSA9IHQudHJpbSgpO1xuICAgIGlmIChub2RlLnBhcmVudCkge1xuICAgICAgICB2YXIgc3MgPSBub2RlLnByZXZpb3VzID8gbm9kZS5wcmV2aW91c1snZW5kJ10gOiBub2RlLnBhcmVudFsnc3RhcnQnXTtcbiAgICAgICAgdCA9IHRleHQuc3Vic3RyaW5nKHNzLCBub2RlWydzdGFydCddIC0gMSk7XG4gICAgICAgIHQgPSBfZXhwYW5kVW5pY29kZUVzY2FwZXModCk7XG4gICAgICAgIHQgPSB0LnJlcGxhY2UoUlgubXVsdGlwbGVTcGFjZXMsICcgJyk7XG4gICAgICAgIC8vIFRPRE8oc29ydmVsbCk6IGFkIGhvYzsgbWFrZSBzZWxlY3RvciBpbmNsdWRlIG9ubHkgYWZ0ZXIgbGFzdCA7XG4gICAgICAgIC8vIGhlbHBzIHdpdGggbWl4aW4gc3ludGF4XG4gICAgICAgIHQgPSB0LnN1YnN0cmluZyh0Lmxhc3RJbmRleE9mKCc7JykgKyAxKTtcbiAgICAgICAgdmFyIHMgPSBub2RlWydwYXJzZWRTZWxlY3RvciddID0gbm9kZVsnc2VsZWN0b3InXSA9IHQudHJpbSgpO1xuICAgICAgICBub2RlWydhdFJ1bGUnXSA9IChzLmluZGV4T2YoQVRfU1RBUlQpID09PSAwKTtcbiAgICAgICAgLy8gbm90ZSwgc3VwcG9ydCBhIHN1YnNldCBvZiBydWxlIHR5cGVzLi4uXG4gICAgICAgIGlmIChub2RlWydhdFJ1bGUnXSkge1xuICAgICAgICAgICAgaWYgKHMuaW5kZXhPZihNRURJQV9TVEFSVCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBub2RlWyd0eXBlJ10gPSB0eXBlcy5NRURJQV9SVUxFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocy5tYXRjaChSWC5rZXlmcmFtZXNSdWxlKSkge1xuICAgICAgICAgICAgICAgIG5vZGVbJ3R5cGUnXSA9IHR5cGVzLktFWUZSQU1FU19SVUxFO1xuICAgICAgICAgICAgICAgIG5vZGVbJ2tleWZyYW1lc05hbWUnXSA9IG5vZGVbJ3NlbGVjdG9yJ10uc3BsaXQoUlgubXVsdGlwbGVTcGFjZXMpLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHMuaW5kZXhPZihWQVJfU1RBUlQpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbm9kZVsndHlwZSddID0gdHlwZXMuTUlYSU5fUlVMRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGVbJ3R5cGUnXSA9IHR5cGVzLlNUWUxFX1JVTEU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHIkID0gbm9kZVsncnVsZXMnXTtcbiAgICBpZiAociQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSByJC5sZW5ndGgsIHIgPSB2b2lkIDA7IChpIDwgbCkgJiYgKHIgPSByJFtpXSk7IGkrKykge1xuICAgICAgICAgICAgcGFyc2VDc3MociwgdGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG59XG4vKipcbiAqIGNvbnZlcnNpb24gb2Ygc29ydCB1bmljb2RlIGVzY2FwZXMgd2l0aCBzcGFjZXMgbGlrZSBgXFwzMyBgIChhbmQgbG9uZ2VyKSBpbnRvXG4gKiBleHBhbmRlZCBmb3JtIHRoYXQgZG9lc24ndCByZXF1aXJlIHRyYWlsaW5nIHNwYWNlIGBcXDAwMDAzM2BcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIF9leHBhbmRVbmljb2RlRXNjYXBlcyhzKSB7XG4gICAgcmV0dXJuIHMucmVwbGFjZSgvXFxcXChbMC05YS1mXXsxLDZ9KVxccy9naSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29kZSA9IGFyZ3VtZW50c1sxXSwgcmVwZWF0ID0gNiAtIGNvZGUubGVuZ3RoO1xuICAgICAgICB3aGlsZSAocmVwZWF0LS0pIHtcbiAgICAgICAgICAgIGNvZGUgPSAnMCcgKyBjb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnXFxcXCcgKyBjb2RlO1xuICAgIH0pO1xufVxuLyoqIEBlbnVtIHtudW1iZXJ9ICovXG52YXIgdHlwZXMgPSB7XG4gICAgU1RZTEVfUlVMRTogMSxcbiAgICBLRVlGUkFNRVNfUlVMRTogNyxcbiAgICBNRURJQV9SVUxFOiA0LFxuICAgIE1JWElOX1JVTEU6IDEwMDBcbn07XG52YXIgT1BFTl9CUkFDRSA9ICd7JztcbnZhciBDTE9TRV9CUkFDRSA9ICd9Jztcbi8vIGhlbHBlciByZWdleHAnc1xudmFyIFJYID0ge1xuICAgIGNvbW1lbnRzOiAvXFwvXFwqW14qXSpcXCorKFteLypdW14qXSpcXCorKSpcXC8vZ2ltLFxuICAgIHBvcnQ6IC9AaW1wb3J0W147XSo7L2dpbSxcbiAgICBjdXN0b21Qcm9wOiAvKD86XlteO1xcLVxcc31dKyk/LS1bXjt7fV0qPzpbXnt9O10qPyg/Ols7XFxuXXwkKS9naW0sXG4gICAgbWl4aW5Qcm9wOiAvKD86XlteO1xcLVxcc31dKyk/LS1bXjt7fV0qPzpbXnt9O10qP3tbXn1dKj99KD86WztcXG5dfCQpPy9naW0sXG4gICAgbWl4aW5BcHBseTogL0BhcHBseVxccypcXCg/W14pO10qXFwpP1xccyooPzpbO1xcbl18JCk/L2dpbSxcbiAgICB2YXJBcHBseTogL1teOzpdKj86W147XSo/dmFyXFwoW147XSpcXCkoPzpbO1xcbl18JCk/L2dpbSxcbiAgICBrZXlmcmFtZXNSdWxlOiAvXkBbXlxcc10qa2V5ZnJhbWVzLyxcbiAgICBtdWx0aXBsZVNwYWNlczogL1xccysvZ1xufTtcbnZhciBWQVJfU1RBUlQgPSAnLS0nO1xudmFyIE1FRElBX1NUQVJUID0gJ0BtZWRpYSc7XG52YXIgQVRfU1RBUlQgPSAnQCc7XG5mdW5jdGlvbiBmaW5kUmVnZXgocmVnZXgsIGNzc1RleHQsIG9mZnNldCkge1xuICAgIHJlZ2V4WydsYXN0SW5kZXgnXSA9IDA7XG4gICAgdmFyIHIgPSBjc3NUZXh0LnN1YnN0cmluZyhvZmZzZXQpLm1hdGNoKHJlZ2V4KTtcbiAgICBpZiAocikge1xuICAgICAgICB2YXIgc3RhcnQgPSBvZmZzZXQgKyByWydpbmRleCddO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzdGFydCArIHJbMF0ubGVuZ3RoXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxudmFyIFZBUl9VU0FHRV9TVEFSVCA9IC9cXGJ2YXJcXCgvO1xudmFyIFZBUl9BU1NJR05fU1RBUlQgPSAvXFxCLS1bXFx3LV0rXFxzKjovO1xudmFyIENPTU1FTlRTID0gL1xcL1xcKlteKl0qXFwqKyhbXi8qXVteKl0qXFwqKykqXFwvL2dpbTtcbnZhciBUUkFJTElOR19MSU5FUyA9IC9eW1xcdCBdK1xcbi9nbTtcbmZ1bmN0aW9uIHJlc29sdmVWYXIocHJvcHMsIHByb3AsIGZhbGxiYWNrKSB7XG4gICAgaWYgKHByb3BzW3Byb3BdKSB7XG4gICAgICAgIHJldHVybiBwcm9wc1twcm9wXTtcbiAgICB9XG4gICAgaWYgKGZhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBleGVjdXRlVGVtcGxhdGUoZmFsbGJhY2ssIHByb3BzKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xufVxuZnVuY3Rpb24gZmluZFZhckVuZEluZGV4KGNzc1RleHQsIG9mZnNldCkge1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgdmFyIGkgPSBvZmZzZXQ7XG4gICAgZm9yICg7IGkgPCBjc3NUZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjID0gY3NzVGV4dFtpXTtcbiAgICAgICAgaWYgKGMgPT09ICcoJykge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjID09PSAnKScpIHtcbiAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICBpZiAoY291bnQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaTtcbn1cbmZ1bmN0aW9uIHBhcnNlVmFyKGNzc1RleHQsIG9mZnNldCkge1xuICAgIHZhciB2YXJQb3MgPSBmaW5kUmVnZXgoVkFSX1VTQUdFX1NUQVJULCBjc3NUZXh0LCBvZmZzZXQpO1xuICAgIGlmICghdmFyUG9zKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgZW5kVmFyID0gZmluZFZhckVuZEluZGV4KGNzc1RleHQsIHZhclBvcy5zdGFydCk7XG4gICAgdmFyIHZhckNvbnRlbnQgPSBjc3NUZXh0LnN1YnN0cmluZyh2YXJQb3MuZW5kLCBlbmRWYXIgLSAxKTtcbiAgICB2YXIgX2EgPSB2YXJDb250ZW50LnNwbGl0KCcsJyksIHByb3BOYW1lID0gX2FbMF0sIGZhbGxiYWNrID0gX2Euc2xpY2UoMSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQ6IHZhclBvcy5zdGFydCxcbiAgICAgICAgZW5kOiBlbmRWYXIsXG4gICAgICAgIHByb3BOYW1lOiBwcm9wTmFtZS50cmltKCksXG4gICAgICAgIGZhbGxiYWNrOiBmYWxsYmFjay5sZW5ndGggPiAwID8gZmFsbGJhY2suam9pbignLCcpLnRyaW0oKSA6IHVuZGVmaW5lZFxuICAgIH07XG59XG5mdW5jdGlvbiBjb21waWxlVmFyKGNzc1RleHQsIHRlbXBsYXRlLCBvZmZzZXQpIHtcbiAgICB2YXIgdmFyTWV0YSA9IHBhcnNlVmFyKGNzc1RleHQsIG9mZnNldCk7XG4gICAgaWYgKCF2YXJNZXRhKSB7XG4gICAgICAgIHRlbXBsYXRlLnB1c2goY3NzVGV4dC5zdWJzdHJpbmcob2Zmc2V0LCBjc3NUZXh0Lmxlbmd0aCkpO1xuICAgICAgICByZXR1cm4gY3NzVGV4dC5sZW5ndGg7XG4gICAgfVxuICAgIHZhciBwcm9wTmFtZSA9IHZhck1ldGEucHJvcE5hbWU7XG4gICAgdmFyIGZhbGxiYWNrID0gdmFyTWV0YS5mYWxsYmFjayAhPSBudWxsID8gY29tcGlsZVRlbXBsYXRlKHZhck1ldGEuZmFsbGJhY2spIDogdW5kZWZpbmVkO1xuICAgIHRlbXBsYXRlLnB1c2goY3NzVGV4dC5zdWJzdHJpbmcob2Zmc2V0LCB2YXJNZXRhLnN0YXJ0KSwgZnVuY3Rpb24gKHBhcmFtcykgeyByZXR1cm4gcmVzb2x2ZVZhcihwYXJhbXMsIHByb3BOYW1lLCBmYWxsYmFjayk7IH0pO1xuICAgIHJldHVybiB2YXJNZXRhLmVuZDtcbn1cbmZ1bmN0aW9uIGV4ZWN1dGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgcHJvcHMpIHtcbiAgICB2YXIgZmluYWwgPSAnJztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBsYXRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzID0gdGVtcGxhdGVbaV07XG4gICAgICAgIGZpbmFsICs9ICh0eXBlb2YgcyA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICA/IHNcbiAgICAgICAgICAgIDogcyhwcm9wcyk7XG4gICAgfVxuICAgIHJldHVybiBmaW5hbDtcbn1cbmZ1bmN0aW9uIGZpbmRFbmRWYWx1ZShjc3NUZXh0LCBvZmZzZXQpIHtcbiAgICB2YXIgb25TdHIgPSBmYWxzZTtcbiAgICB2YXIgZG91YmxlID0gZmFsc2U7XG4gICAgdmFyIGkgPSBvZmZzZXQ7XG4gICAgZm9yICg7IGkgPCBjc3NUZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjID0gY3NzVGV4dFtpXTtcbiAgICAgICAgaWYgKG9uU3RyKSB7XG4gICAgICAgICAgICBpZiAoZG91YmxlICYmIGMgPT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICBvblN0ciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFkb3VibGUgJiYgYyA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICBvblN0ciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGMgPT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICBvblN0ciA9IHRydWU7XG4gICAgICAgICAgICAgICAgZG91YmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGMgPT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgb25TdHIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRvdWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYyA9PT0gJzsnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYyA9PT0gJ30nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGk7XG59XG5mdW5jdGlvbiByZW1vdmVDdXN0b21Bc3NpZ25zKGNzc1RleHQpIHtcbiAgICB2YXIgZmluYWwgPSAnJztcbiAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgYXNzaWduUG9zID0gZmluZFJlZ2V4KFZBUl9BU1NJR05fU1RBUlQsIGNzc1RleHQsIG9mZnNldCk7XG4gICAgICAgIHZhciBzdGFydCA9IGFzc2lnblBvcyA/IGFzc2lnblBvcy5zdGFydCA6IGNzc1RleHQubGVuZ3RoO1xuICAgICAgICBmaW5hbCArPSBjc3NUZXh0LnN1YnN0cmluZyhvZmZzZXQsIHN0YXJ0KTtcbiAgICAgICAgaWYgKGFzc2lnblBvcykge1xuICAgICAgICAgICAgb2Zmc2V0ID0gZmluZEVuZFZhbHVlKGNzc1RleHQsIHN0YXJ0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmaW5hbDtcbn1cbmZ1bmN0aW9uIGNvbXBpbGVUZW1wbGF0ZShjc3NUZXh0KSB7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKENPTU1FTlRTLCAnJyk7XG4gICAgY3NzVGV4dCA9IHJlbW92ZUN1c3RvbUFzc2lnbnMoY3NzVGV4dClcbiAgICAgICAgLnJlcGxhY2UoVFJBSUxJTkdfTElORVMsICcnKTtcbiAgICB2YXIgc2VnbWVudHMgPSBbXTtcbiAgICB3aGlsZSAoaW5kZXggPCBjc3NUZXh0Lmxlbmd0aCkge1xuICAgICAgICBpbmRleCA9IGNvbXBpbGVWYXIoY3NzVGV4dCwgc2VnbWVudHMsIGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHNlZ21lbnRzO1xufVxuZnVuY3Rpb24gcmVzb2x2ZVZhbHVlcyhzZWxlY3RvcnMpIHtcbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICBzZWxlY3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgc2VsZWN0b3IuZGVjbGFyYXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGRlYykge1xuICAgICAgICAgICAgcHJvcHNbZGVjLnByb3BdID0gZGVjLnZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICB2YXIgcHJvcHNWYWx1ZXMgPSB7fTtcbiAgICB2YXIgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHByb3BzKTtcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHZhciBkaXJ0eSA9IGZhbHNlO1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gX2FbMF0sIHZhbHVlID0gX2FbMV07XG4gICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gZXhlY3V0ZVRlbXBsYXRlKHZhbHVlLCBwcm9wc1ZhbHVlcyk7XG4gICAgICAgICAgICBpZiAocHJvcFZhbHVlICE9PSBwcm9wc1ZhbHVlc1trZXldKSB7XG4gICAgICAgICAgICAgICAgcHJvcHNWYWx1ZXNba2V5XSA9IHByb3BWYWx1ZTtcbiAgICAgICAgICAgICAgICBkaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWRpcnR5KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJicmVha1wiO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgdmFyIHN0YXRlXzEgPSBfbG9vcF8xKCk7XG4gICAgICAgIGlmIChzdGF0ZV8xID09PSBcImJyZWFrXCIpXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BzVmFsdWVzO1xufVxuZnVuY3Rpb24gZ2V0U2VsZWN0b3JzKHJvb3QsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSB2b2lkIDApIHtcbiAgICAgICAgaW5kZXggPSAwO1xuICAgIH1cbiAgICBpZiAoIXJvb3QucnVsZXMpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICB2YXIgc2VsZWN0b3JzID0gW107XG4gICAgcm9vdC5ydWxlc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChydWxlKSB7IHJldHVybiBydWxlLnR5cGUgPT09IHR5cGVzLlNUWUxFX1JVTEU7IH0pXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgIHZhciBkZWNsYXJhdGlvbnMgPSBnZXREZWNsYXJhdGlvbnMocnVsZS5jc3NUZXh0KTtcbiAgICAgICAgaWYgKGRlY2xhcmF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBydWxlLnBhcnNlZFNlbGVjdG9yLnNwbGl0KCcsJykuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpZmljaXR5OiBjb21wdXRlU3BlY2lmaWNpdHkoKSxcbiAgICAgICAgICAgICAgICAgICAgbnU6IGluZGV4XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpbmRleCsrO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxlY3RvcnM7XG59XG5mdW5jdGlvbiBjb21wdXRlU3BlY2lmaWNpdHkoX3NlbGVjdG9yKSB7XG4gICAgcmV0dXJuIDE7XG59XG52YXIgSU1QT1JUQU5UID0gJyFpbXBvcnRhbnQnO1xudmFyIEZJTkRfREVDTEFSQVRJT05TID0gLyg/Ol58WztcXHN7XVxccyopKC0tW1xcdy1dKj8pXFxzKjpcXHMqKD86KCg/OicoPzpcXFxcJ3wuKSo/J3xcIig/OlxcXFxcInwuKSo/XCJ8XFwoW14pXSo/XFwpfFtefTt7XSkrKXxcXHsoW159XSopXFx9KD86KD89WztcXHN9XSl8JCkpL2dtO1xuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25zKGNzc1RleHQpIHtcbiAgICB2YXIgZGVjbGFyYXRpb25zID0gW107XG4gICAgdmFyIHhBcnJheTtcbiAgICB3aGlsZSAoeEFycmF5ID0gRklORF9ERUNMQVJBVElPTlMuZXhlYyhjc3NUZXh0LnRyaW0oKSkpIHtcbiAgICAgICAgdmFyIF9hID0gbm9ybWFsaXplVmFsdWUoeEFycmF5WzJdKSwgdmFsdWUgPSBfYS52YWx1ZSwgaW1wb3J0YW50ID0gX2EuaW1wb3J0YW50O1xuICAgICAgICBkZWNsYXJhdGlvbnMucHVzaCh7XG4gICAgICAgICAgICBwcm9wOiB4QXJyYXlbMV0udHJpbSgpLFxuICAgICAgICAgICAgdmFsdWU6IGNvbXBpbGVUZW1wbGF0ZSh2YWx1ZSksXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IGltcG9ydGFudCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkZWNsYXJhdGlvbnM7XG59XG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIHZhciByZWdleCA9IC9cXHMrL2dpbTtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVnZXgsICcgJykudHJpbSgpO1xuICAgIHZhciBpbXBvcnRhbnQgPSB2YWx1ZS5lbmRzV2l0aChJTVBPUlRBTlQpO1xuICAgIGlmIChpbXBvcnRhbnQpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgdmFsdWUubGVuZ3RoIC0gSU1QT1JUQU5ULmxlbmd0aCkudHJpbSgpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGltcG9ydGFudDogaW1wb3J0YW50XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldEFjdGl2ZVNlbGVjdG9ycyhob3N0RWwsIGhvc3RTY29wZU1hcCwgZ2xvYmFsU2NvcGVzKSB7XG4gICAgLy8gY29tcHV0ZXMgdGhlIGNzcyBzY29wZXMgdGhhdCBtaWdodCBhZmZlY3QgdGhpcyBwYXJ0aWN1bGFyIGVsZW1lbnRcbiAgICAvLyBhdm9pZGluZyB1c2luZyBzcHJlYWQgYXJyYXlzIHRvIGF2b2lkIHRzIGhlbHBlciBmbnMgd2hlbiBpbiBlczVcbiAgICB2YXIgc2NvcGVzID0gW107XG4gICAgdmFyIHNjb3Blc0ZvckVsZW1lbnQgPSBnZXRTY29wZXNGb3JFbGVtZW50KGhvc3RTY29wZU1hcCwgaG9zdEVsKTtcbiAgICAvLyBnbG9iYWxTY29wZXMgYXJlIGFsd2F5cyB0b29rIGludG8gYWNjb3VudFxuICAgIGdsb2JhbFNjb3Blcy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzY29wZXMucHVzaChzKTsgfSk7XG4gICAgLy8gdGhlIHBhcmVudCBzY29wZXMgYXJlIGNvbXB1dGVkIGJ5IHdhbGtpbmcgcGFyZW50IGRvbSB1bnRpbCA8aHRtbD4gaXMgcmVhY2hlZFxuICAgIHNjb3Blc0ZvckVsZW1lbnQuZm9yRWFjaChmdW5jdGlvbiAocykgeyByZXR1cm4gc2NvcGVzLnB1c2gocyk7IH0pO1xuICAgIC8vIGVhY2ggc2NvcGUgbWlnaHQgaGF2ZSBhbiBhcnJheSBvZiBhc3NvY2lhdGVkIHNlbGVjdG9yc1xuICAgIC8vIGxldCdzIGZsYXR0ZW4gdGhlIGNvbXBsZXRlIGFycmF5IG9mIHNlbGVjdG9ycyBmcm9tIGFsbCB0aGUgc2NvcGVzXG4gICAgdmFyIHNlbGVjdG9yU2V0ID0gZ2V0U2VsZWN0b3JzRm9yU2NvcGVzKHNjb3Blcyk7XG4gICAgLy8gd2UgZmlsdGVyIHRvIG9ubHkgdGhlIHNlbGVjdG9ycyB0aGF0IG1hdGNoZXMgdGhlIGhvc3RFbFxuICAgIHZhciBhY3RpdmVTZWxlY3RvcnMgPSBzZWxlY3RvclNldC5maWx0ZXIoZnVuY3Rpb24gKHNlbGVjdG9yKSB7IHJldHVybiBtYXRjaGVzKGhvc3RFbCwgc2VsZWN0b3Iuc2VsZWN0b3IpOyB9KTtcbiAgICAvLyBzb3J0IHNlbGVjdG9ycyBieSBzcGVjaWZpdHlcbiAgICByZXR1cm4gc29ydFNlbGVjdG9ycyhhY3RpdmVTZWxlY3RvcnMpO1xufVxuZnVuY3Rpb24gZ2V0U2NvcGVzRm9yRWxlbWVudChob3N0VGVtcGxhdGVNYXAsIG5vZGUpIHtcbiAgICB2YXIgc2NvcGVzID0gW107XG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgdmFyIHNjb3BlID0gaG9zdFRlbXBsYXRlTWFwLmdldChub2RlKTtcbiAgICAgICAgaWYgKHNjb3BlKSB7XG4gICAgICAgICAgICBzY29wZXMucHVzaChzY29wZSk7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHNjb3Blcztcbn1cbmZ1bmN0aW9uIGdldFNlbGVjdG9yc0ZvclNjb3BlcyhzY29wZXMpIHtcbiAgICB2YXIgc2VsZWN0b3JzID0gW107XG4gICAgc2NvcGVzLmZvckVhY2goZnVuY3Rpb24gKHNjb3BlKSB7XG4gICAgICAgIHNlbGVjdG9ycy5wdXNoLmFwcGx5KHNlbGVjdG9ycywgc2NvcGUuc2VsZWN0b3JzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZWN0b3JzO1xufVxuZnVuY3Rpb24gc29ydFNlbGVjdG9ycyhzZWxlY3RvcnMpIHtcbiAgICBzZWxlY3RvcnMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoYS5zcGVjaWZpY2l0eSA9PT0gYi5zcGVjaWZpY2l0eSkge1xuICAgICAgICAgICAgcmV0dXJuIGEubnUgLSBiLm51O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhLnNwZWNpZmljaXR5IC0gYi5zcGVjaWZpY2l0eTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZWN0b3JzO1xufVxuZnVuY3Rpb24gbWF0Y2hlcyhlbCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gc2VsZWN0b3IgPT09ICc6cm9vdCcgfHwgc2VsZWN0b3IgPT09ICdodG1sJyB8fCBlbC5tYXRjaGVzKHNlbGVjdG9yKTtcbn1cbmZ1bmN0aW9uIHBhcnNlQ1NTKG9yaWdpbmFsKSB7XG4gICAgdmFyIGFzdCA9IHBhcnNlKG9yaWdpbmFsKTtcbiAgICB2YXIgdGVtcGxhdGUgPSBjb21waWxlVGVtcGxhdGUob3JpZ2luYWwpO1xuICAgIHZhciBzZWxlY3RvcnMgPSBnZXRTZWxlY3RvcnMoYXN0KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcmlnaW5hbDogb3JpZ2luYWwsXG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICAgICAgc2VsZWN0b3JzOiBzZWxlY3RvcnMsXG4gICAgICAgIHVzZXNDc3NWYXJzOiB0ZW1wbGF0ZS5sZW5ndGggPiAxXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFkZEdsb2JhbFN0eWxlKGdsb2JhbFNjb3Blcywgc3R5bGVFbCkge1xuICAgIGlmIChnbG9iYWxTY29wZXMuc29tZShmdW5jdGlvbiAoY3NzKSB7IHJldHVybiBjc3Muc3R5bGVFbCA9PT0gc3R5bGVFbDsgfSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgY3NzID0gcGFyc2VDU1Moc3R5bGVFbC50ZXh0Q29udGVudCk7XG4gICAgY3NzLnN0eWxlRWwgPSBzdHlsZUVsO1xuICAgIGdsb2JhbFNjb3Blcy5wdXNoKGNzcyk7XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiB1cGRhdGVHbG9iYWxTY29wZXMoc2NvcGVzKSB7XG4gICAgdmFyIHNlbGVjdG9ycyA9IGdldFNlbGVjdG9yc0ZvclNjb3BlcyhzY29wZXMpO1xuICAgIHZhciBwcm9wcyA9IHJlc29sdmVWYWx1ZXMoc2VsZWN0b3JzKTtcbiAgICBzY29wZXMuZm9yRWFjaChmdW5jdGlvbiAoc2NvcGUpIHtcbiAgICAgICAgaWYgKHNjb3BlLnVzZXNDc3NWYXJzKSB7XG4gICAgICAgICAgICBzY29wZS5zdHlsZUVsLnRleHRDb250ZW50ID0gZXhlY3V0ZVRlbXBsYXRlKHNjb3BlLnRlbXBsYXRlLCBwcm9wcyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHJlU2NvcGUoc2NvcGUsIHNjb3BlSWQpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSBzY29wZS50ZW1wbGF0ZS5tYXAoZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2Ygc2VnbWVudCA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICA/IHJlcGxhY2VTY29wZShzZWdtZW50LCBzY29wZS5zY29wZUlkLCBzY29wZUlkKVxuICAgICAgICAgICAgOiBzZWdtZW50O1xuICAgIH0pO1xuICAgIHZhciBzZWxlY3RvcnMgPSBzY29wZS5zZWxlY3RvcnMubWFwKGZ1bmN0aW9uIChzZWwpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc2VsKSwgeyBzZWxlY3RvcjogcmVwbGFjZVNjb3BlKHNlbC5zZWxlY3Rvciwgc2NvcGUuc2NvcGVJZCwgc2NvcGVJZCkgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc2NvcGUpLCB7IHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICAgICAgc2VsZWN0b3JzOiBzZWxlY3RvcnMsXG4gICAgICAgIHNjb3BlSWQ6IHNjb3BlSWQgfSk7XG59XG5mdW5jdGlvbiByZXBsYWNlU2NvcGUob3JpZ2luYWwsIG9sZFNjb3BlSWQsIG5ld1Njb3BlSWQpIHtcbiAgICBvcmlnaW5hbCA9IHJlcGxhY2VBbGwob3JpZ2luYWwsIFwiXFxcXC5cIiArIG9sZFNjb3BlSWQsIFwiLlwiICsgbmV3U2NvcGVJZCk7XG4gICAgcmV0dXJuIG9yaWdpbmFsO1xufVxuZnVuY3Rpb24gcmVwbGFjZUFsbChpbnB1dCwgZmluZCwgcmVwbGFjZSkge1xuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKG5ldyBSZWdFeHAoZmluZCwgJ2cnKSwgcmVwbGFjZSk7XG59XG5mdW5jdGlvbiBsb2FkRG9jdW1lbnQoZG9jLCBnbG9iYWxTY29wZXMpIHtcbiAgICBsb2FkRG9jdW1lbnRTdHlsZXMoZG9jLCBnbG9iYWxTY29wZXMpO1xuICAgIHJldHVybiBsb2FkRG9jdW1lbnRMaW5rcyhkb2MsIGdsb2JhbFNjb3Blcyk7XG59XG5mdW5jdGlvbiBzdGFydFdhdGNoZXIoZG9jLCBnbG9iYWxTY29wZXMpIHtcbiAgICB2YXIgbXV0YXRpb24gPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChsb2FkRG9jdW1lbnRTdHlsZXMoZG9jLCBnbG9iYWxTY29wZXMpKSB7XG4gICAgICAgICAgICB1cGRhdGVHbG9iYWxTY29wZXMoZ2xvYmFsU2NvcGVzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIG11dGF0aW9uLm9ic2VydmUoZG9jdW1lbnQuaGVhZCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG59XG5mdW5jdGlvbiBsb2FkRG9jdW1lbnRMaW5rcyhkb2MsIGdsb2JhbFNjb3Blcykge1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIHZhciBsaW5rRWxtcyA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl1baHJlZl06bm90KFtkYXRhLW5vLXNoaW1dKScpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua0VsbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcHJvbWlzZXMucHVzaChhZGRHbG9iYWxMaW5rKGRvYywgZ2xvYmFsU2NvcGVzLCBsaW5rRWxtc1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufVxuZnVuY3Rpb24gbG9hZERvY3VtZW50U3R5bGVzKGRvYywgZ2xvYmFsU2NvcGVzKSB7XG4gICAgdmFyIHN0eWxlRWxtcyA9IEFycmF5LmZyb20oZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlOm5vdChbZGF0YS1zdHlsZXNdKTpub3QoW2RhdGEtbm8tc2hpbV0pJykpO1xuICAgIHJldHVybiBzdHlsZUVsbXNcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoc3R5bGUpIHsgcmV0dXJuIGFkZEdsb2JhbFN0eWxlKGdsb2JhbFNjb3Blcywgc3R5bGUpOyB9KVxuICAgICAgICAuc29tZShCb29sZWFuKTtcbn1cbmZ1bmN0aW9uIGFkZEdsb2JhbExpbmsoZG9jLCBnbG9iYWxTY29wZXMsIGxpbmtFbG0pIHtcbiAgICB2YXIgdXJsID0gbGlua0VsbS5ocmVmO1xuICAgIHJldHVybiBmZXRjaCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJzcCkgeyByZXR1cm4gcnNwLnRleHQoKTsgfSkudGhlbihmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICBpZiAoaGFzQ3NzVmFyaWFibGVzKHRleHQpICYmIGxpbmtFbG0ucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgaWYgKGhhc1JlbGF0aXZlVXJscyh0ZXh0KSkge1xuICAgICAgICAgICAgICAgIHRleHQgPSBmaXhSZWxhdGl2ZVVybHModGV4dCwgdXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdHlsZUVsID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICBzdHlsZUVsLnNldEF0dHJpYnV0ZSgnZGF0YS1zdHlsZXMnLCAnJyk7XG4gICAgICAgICAgICBzdHlsZUVsLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgICAgIGFkZEdsb2JhbFN0eWxlKGdsb2JhbFNjb3Blcywgc3R5bGVFbCk7XG4gICAgICAgICAgICBsaW5rRWxtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHN0eWxlRWwsIGxpbmtFbG0pO1xuICAgICAgICAgICAgbGlua0VsbS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH0pO1xufVxuLy8gVGhpcyByZWdleHAgdHJpZXMgdG8gZGV0ZXJtaW5lIHdoZW4gYSB2YXJpYWJsZSBpcyBkZWNsYXJlZCwgZm9yIGV4YW1wbGU6XG4vL1xuLy8gLm15LWVsIHsgLS1oaWdobGlnaHQtY29sb3I6IGdyZWVuOyB9XG4vL1xuLy8gYnV0IHdlIGRvbid0IHdhbnQgdG8gdHJpZ2dlciB3aGVuIGEgY2xhc3NuYW1lIHVzZXMgXCItLVwiIG9yIGEgcHNldWRvLWNsYXNzIGlzXG4vLyB1c2VkLiBXZSBhc3N1bWUgdGhhdCB0aGUgb25seSBjaGFyYWN0ZXJzIHRoYXQgY2FuIHByZWNlZWQgYSB2YXJpYWJsZVxuLy8gZGVjbGFyYXRpb24gYXJlIFwie1wiLCBmcm9tIGFuIG9wZW5pbmcgYmxvY2ssIFwiO1wiIGZyb20gYSBwcmVjZWVkaW5nIHJ1bGUsIG9yIGFcbi8vIHNwYWNlLiBUaGlzIHByZXZlbnRzIHRoZSByZWdleHAgZnJvbSBtYXRjaGluZyBhIHdvcmQgaW4gYSBzZWxlY3Rvciwgc2luY2Vcbi8vIHRoZXkgd291bGQgbmVlZCB0byBzdGFydCB3aXRoIGEgXCIuXCIgb3IgXCIjXCIuIChXZSBhc3N1bWUgZWxlbWVudCBuYW1lcyBkb24ndFxuLy8gc3RhcnQgd2l0aCBcIi0tXCIpLlxudmFyIENTU19WQVJJQUJMRV9SRUdFWFAgPSAvW1xcczt7XS0tWy1hLXpBLVowLTldK1xccyo6L207XG5mdW5jdGlvbiBoYXNDc3NWYXJpYWJsZXMoY3NzKSB7XG4gICAgcmV0dXJuIGNzcy5pbmRleE9mKCd2YXIoJykgPiAtMSB8fCBDU1NfVkFSSUFCTEVfUkVHRVhQLnRlc3QoY3NzKTtcbn1cbi8vIFRoaXMgcmVnZXhwIGZpbmQgYWxsIHVybCgpIHVzYWdlcyB3aXRoIHJlbGF0aXZlIHVybHNcbnZhciBDU1NfVVJMX1JFR0VYUCA9IC91cmxbXFxzXSpcXChbXFxzXSpbJ1wiXT8oPyEoPzpodHRwcz98ZGF0YSlcXDp8XFwvKShbXlxcJ1xcXCJcXCldKilbXFxzXSpbJ1wiXT9cXClbXFxzXSovZ2ltO1xuZnVuY3Rpb24gaGFzUmVsYXRpdmVVcmxzKGNzcykge1xuICAgIENTU19VUkxfUkVHRVhQLmxhc3RJbmRleCA9IDA7XG4gICAgcmV0dXJuIENTU19VUkxfUkVHRVhQLnRlc3QoY3NzKTtcbn1cbmZ1bmN0aW9uIGZpeFJlbGF0aXZlVXJscyhjc3MsIG9yaWdpbmFsVXJsKSB7XG4gICAgLy8gZ2V0IHRoZSBiYXNlcGF0aCBmcm9tIHRoZSBvcmlnaW5hbCBpbXBvcnQgdXJsXG4gICAgdmFyIGJhc2VQYXRoID0gb3JpZ2luYWxVcmwucmVwbGFjZSgvW14vXSokLywgJycpO1xuICAgIC8vIHJlcGxhY2UgdGhlIHJlbGF0aXZlIHVybCwgd2l0aCB0aGUgbmV3IHJlbGF0aXZlIHVybFxuICAgIHJldHVybiBjc3MucmVwbGFjZShDU1NfVVJMX1JFR0VYUCwgZnVuY3Rpb24gKGZ1bGxNYXRjaCwgdXJsKSB7XG4gICAgICAgIC8vIHJoZSBuZXcgcmVsYXRpdmUgcGF0aCBpcyB0aGUgYmFzZSBwYXRoICsgdXJpXG4gICAgICAgIC8vIFRPRE86IG5vcm1hbGl6ZSByZWxhdGl2ZSBVUkxcbiAgICAgICAgdmFyIHJlbGF0aXZlVXJsID0gYmFzZVBhdGggKyB1cmw7XG4gICAgICAgIHJldHVybiBmdWxsTWF0Y2gucmVwbGFjZSh1cmwsIHJlbGF0aXZlVXJsKTtcbiAgICB9KTtcbn1cbnZhciBDdXN0b21TdHlsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDdXN0b21TdHlsZSh3aW4sIGRvYykge1xuICAgICAgICB0aGlzLndpbiA9IHdpbjtcbiAgICAgICAgdGhpcy5kb2MgPSBkb2M7XG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICB0aGlzLmhvc3RTdHlsZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIHRoaXMuaG9zdFNjb3BlTWFwID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTY29wZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zY29wZXNNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZGlkSW5pdCA9IGZhbHNlO1xuICAgIH1cbiAgICBDdXN0b21TdHlsZS5wcm90b3R5cGUuaW5pdFNoaW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmRpZEluaXQpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlkSW5pdCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy53aW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRXYXRjaGVyKF90aGlzLmRvYywgX3RoaXMuZ2xvYmFsU2NvcGVzKTtcbiAgICAgICAgICAgICAgICAgICAgbG9hZERvY3VtZW50KF90aGlzLmRvYywgX3RoaXMuZ2xvYmFsU2NvcGVzKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc29sdmUoKTsgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ3VzdG9tU3R5bGUucHJvdG90eXBlLmFkZExpbmsgPSBmdW5jdGlvbiAobGlua0VsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBhZGRHbG9iYWxMaW5rKHRoaXMuZG9jLCB0aGlzLmdsb2JhbFNjb3BlcywgbGlua0VsKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZUdsb2JhbCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEN1c3RvbVN0eWxlLnByb3RvdHlwZS5hZGRHbG9iYWxTdHlsZSA9IGZ1bmN0aW9uIChzdHlsZUVsKSB7XG4gICAgICAgIGlmIChhZGRHbG9iYWxTdHlsZSh0aGlzLmdsb2JhbFNjb3Blcywgc3R5bGVFbCkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlR2xvYmFsKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEN1c3RvbVN0eWxlLnByb3RvdHlwZS5jcmVhdGVIb3N0U3R5bGUgPSBmdW5jdGlvbiAoaG9zdEVsLCBjc3NTY29wZUlkLCBjc3NUZXh0LCBpc1Njb3BlZCkge1xuICAgICAgICBpZiAodGhpcy5ob3N0U2NvcGVNYXAuaGFzKGhvc3RFbCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaG9zdCBzdHlsZSBhbHJlYWR5IGNyZWF0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYmFzZVNjb3BlID0gdGhpcy5yZWdpc3Rlckhvc3RUZW1wbGF0ZShjc3NUZXh0LCBjc3NTY29wZUlkLCBpc1Njb3BlZCk7XG4gICAgICAgIHZhciBzdHlsZUVsID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgc3R5bGVFbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3R5bGVzJywgJycpO1xuICAgICAgICBpZiAoIWJhc2VTY29wZS51c2VzQ3NzVmFycykge1xuICAgICAgICAgICAgLy8gVGhpcyBjb21wb25lbnQgZG9lcyBub3QgdXNlIChyZWFkKSBjc3MgdmFyaWFibGVzXG4gICAgICAgICAgICBzdHlsZUVsLnRleHRDb250ZW50ID0gY3NzVGV4dDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1Njb3BlZCkge1xuICAgICAgICAgICAgLy8gVGhpcyBjb21wb25lbnQgaXMgZHluYW1pYzogdXNlcyBjc3MgdmFyIGFuZCBpcyBzY29wZWRcbiAgICAgICAgICAgIHN0eWxlRWxbJ3Mtc2MnXSA9IGNzc1Njb3BlSWQgPSBiYXNlU2NvcGUuc2NvcGVJZCArIFwiLVwiICsgdGhpcy5jb3VudDtcbiAgICAgICAgICAgIHN0eWxlRWwudGV4dENvbnRlbnQgPSAnLypuZWVkcyB1cGRhdGUqLyc7XG4gICAgICAgICAgICB0aGlzLmhvc3RTdHlsZU1hcC5zZXQoaG9zdEVsLCBzdHlsZUVsKTtcbiAgICAgICAgICAgIHRoaXMuaG9zdFNjb3BlTWFwLnNldChob3N0RWwsIHJlU2NvcGUoYmFzZVNjb3BlLCBjc3NTY29wZUlkKSk7XG4gICAgICAgICAgICB0aGlzLmNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBUaGlzIGNvbXBvbmVudCB1c2VzIGNzcyB2YXJzLCBidXQgaXQncyBuby1lbmNhcHN1bGF0aW9uIChnbG9iYWwgc3RhdGljKVxuICAgICAgICAgICAgYmFzZVNjb3BlLnN0eWxlRWwgPSBzdHlsZUVsO1xuICAgICAgICAgICAgaWYgKCFiYXNlU2NvcGUudXNlc0Nzc1ZhcnMpIHtcbiAgICAgICAgICAgICAgICBzdHlsZUVsLnRleHRDb250ZW50ID0gZXhlY3V0ZVRlbXBsYXRlKGJhc2VTY29wZS50ZW1wbGF0ZSwge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nbG9iYWxTY29wZXMucHVzaChiYXNlU2NvcGUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVHbG9iYWwoKTtcbiAgICAgICAgICAgIHRoaXMuaG9zdFNjb3BlTWFwLnNldChob3N0RWwsIGJhc2VTY29wZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlRWw7XG4gICAgfTtcbiAgICBDdXN0b21TdHlsZS5wcm90b3R5cGUucmVtb3ZlSG9zdCA9IGZ1bmN0aW9uIChob3N0RWwpIHtcbiAgICAgICAgdmFyIGNzcyA9IHRoaXMuaG9zdFN0eWxlTWFwLmdldChob3N0RWwpO1xuICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICBjc3MucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob3N0U3R5bGVNYXAuZGVsZXRlKGhvc3RFbCk7XG4gICAgICAgIHRoaXMuaG9zdFNjb3BlTWFwLmRlbGV0ZShob3N0RWwpO1xuICAgIH07XG4gICAgQ3VzdG9tU3R5bGUucHJvdG90eXBlLnVwZGF0ZUhvc3QgPSBmdW5jdGlvbiAoaG9zdEVsKSB7XG4gICAgICAgIHZhciBzY29wZSA9IHRoaXMuaG9zdFNjb3BlTWFwLmdldChob3N0RWwpO1xuICAgICAgICBpZiAoc2NvcGUgJiYgc2NvcGUudXNlc0Nzc1ZhcnMgJiYgc2NvcGUuaXNTY29wZWQpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZUVsID0gdGhpcy5ob3N0U3R5bGVNYXAuZ2V0KGhvc3RFbCk7XG4gICAgICAgICAgICBpZiAoc3R5bGVFbCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RvcnMgPSBnZXRBY3RpdmVTZWxlY3RvcnMoaG9zdEVsLCB0aGlzLmhvc3RTY29wZU1hcCwgdGhpcy5nbG9iYWxTY29wZXMpO1xuICAgICAgICAgICAgICAgIHZhciBwcm9wcyA9IHJlc29sdmVWYWx1ZXMoc2VsZWN0b3JzKTtcbiAgICAgICAgICAgICAgICBzdHlsZUVsLnRleHRDb250ZW50ID0gZXhlY3V0ZVRlbXBsYXRlKHNjb3BlLnRlbXBsYXRlLCBwcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEN1c3RvbVN0eWxlLnByb3RvdHlwZS51cGRhdGVHbG9iYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHVwZGF0ZUdsb2JhbFNjb3Blcyh0aGlzLmdsb2JhbFNjb3Blcyk7XG4gICAgfTtcbiAgICBDdXN0b21TdHlsZS5wcm90b3R5cGUucmVnaXN0ZXJIb3N0VGVtcGxhdGUgPSBmdW5jdGlvbiAoY3NzVGV4dCwgc2NvcGVJZCwgaXNTY29wZWQpIHtcbiAgICAgICAgdmFyIHNjb3BlID0gdGhpcy5zY29wZXNNYXAuZ2V0KHNjb3BlSWQpO1xuICAgICAgICBpZiAoIXNjb3BlKSB7XG4gICAgICAgICAgICBzY29wZSA9IHBhcnNlQ1NTKGNzc1RleHQpO1xuICAgICAgICAgICAgc2NvcGUuc2NvcGVJZCA9IHNjb3BlSWQ7XG4gICAgICAgICAgICBzY29wZS5pc1Njb3BlZCA9IGlzU2NvcGVkO1xuICAgICAgICAgICAgdGhpcy5zY29wZXNNYXAuc2V0KHNjb3BlSWQsIHNjb3BlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2NvcGU7XG4gICAgfTtcbiAgICByZXR1cm4gQ3VzdG9tU3R5bGU7XG59KCkpO1xudmFyIHdpbiA9IHdpbmRvdztcbmZ1bmN0aW9uIG5lZWRzU2hpbSgpIHtcbiAgICByZXR1cm4gISh3aW4uQ1NTICYmIHdpbi5DU1Muc3VwcG9ydHMgJiYgd2luLkNTUy5zdXBwb3J0cygnY29sb3InLCAndmFyKC0tYyknKSk7XG59XG5pZiAoIXdpbi5fX3N0ZW5jaWxfY3Nzc2hpbSAmJiBuZWVkc1NoaW0oKSkge1xuICAgIHdpbi5fX3N0ZW5jaWxfY3Nzc2hpbSA9IG5ldyBDdXN0b21TdHlsZSh3aW4sIGRvY3VtZW50KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=