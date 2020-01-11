(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ "./node_modules/ionicons/dist/esm/legacy/css-shim-3ea8955c-3ea8955c.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ionicons/dist/esm/legacy/css-shim-3ea8955c-3ea8955c.js ***!
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
    var scopes = globalScopes.concat(getScopesForElement(hostScopeMap, hostEl));
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
    var css = parseCSS(styleEl.innerHTML);
    css.styleEl = styleEl;
    globalScopes.push(css);
}
function updateGlobalScopes(scopes) {
    var selectors = getSelectorsForScopes(scopes);
    var props = resolveValues(selectors);
    scopes.forEach(function (scope) {
        if (scope.usesCssVars) {
            scope.styleEl.innerHTML = executeTemplate(scope.template, props);
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
        return Object.assign({}, sel, { selector: replaceScope(sel.selector, scope.scopeId, scopeId) });
    });
    return Object.assign({}, scope, { template: template,
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
function loadDocumentLinks(doc, globalScopes) {
    var promises = [];
    var linkElms = doc.querySelectorAll('link[rel="stylesheet"][href]');
    for (var i = 0; i < linkElms.length; i++) {
        promises.push(addGlobalLink(doc, globalScopes, linkElms[i]));
    }
    return Promise.all(promises);
}
function loadDocumentStyles(doc, globalScopes) {
    var styleElms = doc.querySelectorAll('style:not([data-styles])');
    for (var i = 0; i < styleElms.length; i++) {
        addGlobalStyle(globalScopes, styleElms[i]);
    }
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
            styleEl.innerHTML = text;
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
var CSS_URL_REGEXP = /url[\s]*\([\s]*['"]?(?![http|/])([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim;
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
    }
    CustomStyle.prototype.initShim = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.win.requestAnimationFrame(function () {
                loadDocument(_this.doc, _this.globalScopes).then(function () { return resolve(); });
            });
        });
    };
    CustomStyle.prototype.addLink = function (linkEl) {
        var _this = this;
        return addGlobalLink(this.doc, this.globalScopes, linkEl).then(function () {
            _this.updateGlobal();
        });
    };
    CustomStyle.prototype.addGlobalStyle = function (styleEl) {
        addGlobalStyle(this.globalScopes, styleEl);
        this.updateGlobal();
    };
    CustomStyle.prototype.createHostStyle = function (hostEl, cssScopeId, cssText, isScoped) {
        if (this.hostScopeMap.has(hostEl)) {
            throw new Error('host style already created');
        }
        var baseScope = this.registerHostTemplate(cssText, cssScopeId, isScoped);
        var styleEl = this.doc.createElement('style');
        if (!baseScope.usesCssVars) {
            // This component does not use (read) css variables
            styleEl.innerHTML = cssText;
        }
        else if (isScoped) {
            // This component is dynamic: uses css var and is scoped
            styleEl['s-sc'] = cssScopeId = baseScope.scopeId + "-" + this.count;
            styleEl.innerHTML = '/*needs update*/';
            this.hostStyleMap.set(hostEl, styleEl);
            this.hostScopeMap.set(hostEl, reScope(baseScope, cssScopeId));
            this.count++;
        }
        else {
            // This component uses css vars, but it's no-encapsulation (global static)
            baseScope.styleEl = styleEl;
            if (!baseScope.usesCssVars) {
                styleEl.innerHTML = executeTemplate(baseScope.template, {});
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
                styleEl.innerHTML = executeTemplate(scope.template, props);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW9uaWNvbnMvZGlzdC9lc20vbGVnYWN5L2Nzcy1zaGltLTNlYTg5NTVjLTNlYTg5NTVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsSUFBSTtBQUNyQjtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLE9BQU87QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Qsd0JBQXdCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FB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Q2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ijk0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5FeHRyZW1lbHkgc2ltcGxlIGNzcyBwYXJzZXIuIEludGVuZGVkIHRvIGJlIG5vdCBtb3JlIHRoYW4gd2hhdCB3ZSBuZWVkXG5hbmQgZGVmaW5pdGVseSBub3QgbmVjZXNzYXJpbHkgY29ycmVjdCA9KS5cbiovXG4vKiogQHVucmVzdHJpY3RlZCAqL1xudmFyIFN0eWxlTm9kZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdHlsZU5vZGUoKSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSAwO1xuICAgICAgICB0aGlzLmVuZCA9IDA7XG4gICAgICAgIHRoaXMucHJldmlvdXMgPSBudWxsO1xuICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMucnVsZXMgPSBudWxsO1xuICAgICAgICB0aGlzLnBhcnNlZENzc1RleHQgPSAnJztcbiAgICAgICAgdGhpcy5jc3NUZXh0ID0gJyc7XG4gICAgICAgIHRoaXMuYXRSdWxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHlwZSA9IDA7XG4gICAgICAgIHRoaXMua2V5ZnJhbWVzTmFtZSA9ICcnO1xuICAgICAgICB0aGlzLnNlbGVjdG9yID0gJyc7XG4gICAgICAgIHRoaXMucGFyc2VkU2VsZWN0b3IgPSAnJztcbiAgICB9XG4gICAgcmV0dXJuIFN0eWxlTm9kZTtcbn0oKSk7XG4vLyBnaXZlbiBhIHN0cmluZyBvZiBjc3MsIHJldHVybiBhIHNpbXBsZSBydWxlIHRyZWVcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHRcbiAqIEByZXR1cm4ge1N0eWxlTm9kZX1cbiAqL1xuZnVuY3Rpb24gcGFyc2UodGV4dCkge1xuICAgIHRleHQgPSBjbGVhbih0ZXh0KTtcbiAgICByZXR1cm4gcGFyc2VDc3MobGV4KHRleHQpLCB0ZXh0KTtcbn1cbi8vIHJlbW92ZSBzdHVmZiB3ZSBkb24ndCBjYXJlIGFib3V0IHRoYXQgbWF5IGhpbmRlciBwYXJzaW5nXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBjc3NUZXh0XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNsZWFuKGNzc1RleHQpIHtcbiAgICByZXR1cm4gY3NzVGV4dC5yZXBsYWNlKFJYLmNvbW1lbnRzLCAnJykucmVwbGFjZShSWC5wb3J0LCAnJyk7XG59XG4vLyBzdXBlciBzaW1wbGUgey4uLn0gbGV4ZXIgdGhhdCByZXR1cm5zIGEgbm9kZSB0cmVlXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gKiBAcmV0dXJuIHtTdHlsZU5vZGV9XG4gKi9cbmZ1bmN0aW9uIGxleCh0ZXh0KSB7XG4gICAgdmFyIHJvb3QgPSBuZXcgU3R5bGVOb2RlKCk7XG4gICAgcm9vdFsnc3RhcnQnXSA9IDA7XG4gICAgcm9vdFsnZW5kJ10gPSB0ZXh0Lmxlbmd0aDtcbiAgICB2YXIgbiA9IHJvb3Q7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0ZXh0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAodGV4dFtpXSA9PT0gT1BFTl9CUkFDRSkge1xuICAgICAgICAgICAgaWYgKCFuWydydWxlcyddKSB7XG4gICAgICAgICAgICAgICAgblsncnVsZXMnXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHAgPSBuO1xuICAgICAgICAgICAgdmFyIHByZXZpb3VzID0gcFsncnVsZXMnXVtwWydydWxlcyddLmxlbmd0aCAtIDFdIHx8IG51bGw7XG4gICAgICAgICAgICBuID0gbmV3IFN0eWxlTm9kZSgpO1xuICAgICAgICAgICAgblsnc3RhcnQnXSA9IGkgKyAxO1xuICAgICAgICAgICAgblsncGFyZW50J10gPSBwO1xuICAgICAgICAgICAgblsncHJldmlvdXMnXSA9IHByZXZpb3VzO1xuICAgICAgICAgICAgcFsncnVsZXMnXS5wdXNoKG4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRleHRbaV0gPT09IENMT1NFX0JSQUNFKSB7XG4gICAgICAgICAgICBuWydlbmQnXSA9IGkgKyAxO1xuICAgICAgICAgICAgbiA9IG5bJ3BhcmVudCddIHx8IHJvb3Q7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJvb3Q7XG59XG4vLyBhZGQgc2VsZWN0b3JzL2Nzc1RleHQgdG8gbm9kZSB0cmVlXG4vKipcbiAqIEBwYXJhbSB7U3R5bGVOb2RlfSBub2RlXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICogQHJldHVybiB7U3R5bGVOb2RlfVxuICovXG5mdW5jdGlvbiBwYXJzZUNzcyhub2RlLCB0ZXh0KSB7XG4gICAgdmFyIHQgPSB0ZXh0LnN1YnN0cmluZyhub2RlWydzdGFydCddLCBub2RlWydlbmQnXSAtIDEpO1xuICAgIG5vZGVbJ3BhcnNlZENzc1RleHQnXSA9IG5vZGVbJ2Nzc1RleHQnXSA9IHQudHJpbSgpO1xuICAgIGlmIChub2RlLnBhcmVudCkge1xuICAgICAgICB2YXIgc3MgPSBub2RlLnByZXZpb3VzID8gbm9kZS5wcmV2aW91c1snZW5kJ10gOiBub2RlLnBhcmVudFsnc3RhcnQnXTtcbiAgICAgICAgdCA9IHRleHQuc3Vic3RyaW5nKHNzLCBub2RlWydzdGFydCddIC0gMSk7XG4gICAgICAgIHQgPSBfZXhwYW5kVW5pY29kZUVzY2FwZXModCk7XG4gICAgICAgIHQgPSB0LnJlcGxhY2UoUlgubXVsdGlwbGVTcGFjZXMsICcgJyk7XG4gICAgICAgIC8vIFRPRE8oc29ydmVsbCk6IGFkIGhvYzsgbWFrZSBzZWxlY3RvciBpbmNsdWRlIG9ubHkgYWZ0ZXIgbGFzdCA7XG4gICAgICAgIC8vIGhlbHBzIHdpdGggbWl4aW4gc3ludGF4XG4gICAgICAgIHQgPSB0LnN1YnN0cmluZyh0Lmxhc3RJbmRleE9mKCc7JykgKyAxKTtcbiAgICAgICAgdmFyIHMgPSBub2RlWydwYXJzZWRTZWxlY3RvciddID0gbm9kZVsnc2VsZWN0b3InXSA9IHQudHJpbSgpO1xuICAgICAgICBub2RlWydhdFJ1bGUnXSA9IChzLmluZGV4T2YoQVRfU1RBUlQpID09PSAwKTtcbiAgICAgICAgLy8gbm90ZSwgc3VwcG9ydCBhIHN1YnNldCBvZiBydWxlIHR5cGVzLi4uXG4gICAgICAgIGlmIChub2RlWydhdFJ1bGUnXSkge1xuICAgICAgICAgICAgaWYgKHMuaW5kZXhPZihNRURJQV9TVEFSVCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBub2RlWyd0eXBlJ10gPSB0eXBlcy5NRURJQV9SVUxFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocy5tYXRjaChSWC5rZXlmcmFtZXNSdWxlKSkge1xuICAgICAgICAgICAgICAgIG5vZGVbJ3R5cGUnXSA9IHR5cGVzLktFWUZSQU1FU19SVUxFO1xuICAgICAgICAgICAgICAgIG5vZGVbJ2tleWZyYW1lc05hbWUnXSA9IG5vZGVbJ3NlbGVjdG9yJ10uc3BsaXQoUlgubXVsdGlwbGVTcGFjZXMpLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHMuaW5kZXhPZihWQVJfU1RBUlQpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbm9kZVsndHlwZSddID0gdHlwZXMuTUlYSU5fUlVMRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGVbJ3R5cGUnXSA9IHR5cGVzLlNUWUxFX1JVTEU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHIkID0gbm9kZVsncnVsZXMnXTtcbiAgICBpZiAociQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSByJC5sZW5ndGgsIHIgPSB2b2lkIDA7IChpIDwgbCkgJiYgKHIgPSByJFtpXSk7IGkrKykge1xuICAgICAgICAgICAgcGFyc2VDc3MociwgdGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG59XG4vKipcbiAqIGNvbnZlcnNpb24gb2Ygc29ydCB1bmljb2RlIGVzY2FwZXMgd2l0aCBzcGFjZXMgbGlrZSBgXFwzMyBgIChhbmQgbG9uZ2VyKSBpbnRvXG4gKiBleHBhbmRlZCBmb3JtIHRoYXQgZG9lc24ndCByZXF1aXJlIHRyYWlsaW5nIHNwYWNlIGBcXDAwMDAzM2BcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIF9leHBhbmRVbmljb2RlRXNjYXBlcyhzKSB7XG4gICAgcmV0dXJuIHMucmVwbGFjZSgvXFxcXChbMC05YS1mXXsxLDZ9KVxccy9naSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29kZSA9IGFyZ3VtZW50c1sxXSwgcmVwZWF0ID0gNiAtIGNvZGUubGVuZ3RoO1xuICAgICAgICB3aGlsZSAocmVwZWF0LS0pIHtcbiAgICAgICAgICAgIGNvZGUgPSAnMCcgKyBjb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnXFxcXCcgKyBjb2RlO1xuICAgIH0pO1xufVxuLyoqIEBlbnVtIHtudW1iZXJ9ICovXG52YXIgdHlwZXMgPSB7XG4gICAgU1RZTEVfUlVMRTogMSxcbiAgICBLRVlGUkFNRVNfUlVMRTogNyxcbiAgICBNRURJQV9SVUxFOiA0LFxuICAgIE1JWElOX1JVTEU6IDEwMDBcbn07XG52YXIgT1BFTl9CUkFDRSA9ICd7JztcbnZhciBDTE9TRV9CUkFDRSA9ICd9Jztcbi8vIGhlbHBlciByZWdleHAnc1xudmFyIFJYID0ge1xuICAgIGNvbW1lbnRzOiAvXFwvXFwqW14qXSpcXCorKFteLypdW14qXSpcXCorKSpcXC8vZ2ltLFxuICAgIHBvcnQ6IC9AaW1wb3J0W147XSo7L2dpbSxcbiAgICBjdXN0b21Qcm9wOiAvKD86XlteO1xcLVxcc31dKyk/LS1bXjt7fV0qPzpbXnt9O10qPyg/Ols7XFxuXXwkKS9naW0sXG4gICAgbWl4aW5Qcm9wOiAvKD86XlteO1xcLVxcc31dKyk/LS1bXjt7fV0qPzpbXnt9O10qP3tbXn1dKj99KD86WztcXG5dfCQpPy9naW0sXG4gICAgbWl4aW5BcHBseTogL0BhcHBseVxccypcXCg/W14pO10qXFwpP1xccyooPzpbO1xcbl18JCk/L2dpbSxcbiAgICB2YXJBcHBseTogL1teOzpdKj86W147XSo/dmFyXFwoW147XSpcXCkoPzpbO1xcbl18JCk/L2dpbSxcbiAgICBrZXlmcmFtZXNSdWxlOiAvXkBbXlxcc10qa2V5ZnJhbWVzLyxcbiAgICBtdWx0aXBsZVNwYWNlczogL1xccysvZ1xufTtcbnZhciBWQVJfU1RBUlQgPSAnLS0nO1xudmFyIE1FRElBX1NUQVJUID0gJ0BtZWRpYSc7XG52YXIgQVRfU1RBUlQgPSAnQCc7XG5mdW5jdGlvbiBmaW5kUmVnZXgocmVnZXgsIGNzc1RleHQsIG9mZnNldCkge1xuICAgIHJlZ2V4WydsYXN0SW5kZXgnXSA9IDA7XG4gICAgdmFyIHIgPSBjc3NUZXh0LnN1YnN0cmluZyhvZmZzZXQpLm1hdGNoKHJlZ2V4KTtcbiAgICBpZiAocikge1xuICAgICAgICB2YXIgc3RhcnQgPSBvZmZzZXQgKyByWydpbmRleCddO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBzdGFydCArIHJbMF0ubGVuZ3RoXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxudmFyIFZBUl9VU0FHRV9TVEFSVCA9IC9cXGJ2YXJcXCgvO1xudmFyIFZBUl9BU1NJR05fU1RBUlQgPSAvXFxCLS1bXFx3LV0rXFxzKjovO1xudmFyIENPTU1FTlRTID0gL1xcL1xcKlteKl0qXFwqKyhbXi8qXVteKl0qXFwqKykqXFwvL2dpbTtcbnZhciBUUkFJTElOR19MSU5FUyA9IC9eW1xcdCBdK1xcbi9nbTtcbmZ1bmN0aW9uIHJlc29sdmVWYXIocHJvcHMsIHByb3AsIGZhbGxiYWNrKSB7XG4gICAgaWYgKHByb3BzW3Byb3BdKSB7XG4gICAgICAgIHJldHVybiBwcm9wc1twcm9wXTtcbiAgICB9XG4gICAgaWYgKGZhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBleGVjdXRlVGVtcGxhdGUoZmFsbGJhY2ssIHByb3BzKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xufVxuZnVuY3Rpb24gZmluZFZhckVuZEluZGV4KGNzc1RleHQsIG9mZnNldCkge1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgdmFyIGkgPSBvZmZzZXQ7XG4gICAgZm9yICg7IGkgPCBjc3NUZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjID0gY3NzVGV4dFtpXTtcbiAgICAgICAgaWYgKGMgPT09ICcoJykge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjID09PSAnKScpIHtcbiAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICBpZiAoY291bnQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaTtcbn1cbmZ1bmN0aW9uIHBhcnNlVmFyKGNzc1RleHQsIG9mZnNldCkge1xuICAgIHZhciB2YXJQb3MgPSBmaW5kUmVnZXgoVkFSX1VTQUdFX1NUQVJULCBjc3NUZXh0LCBvZmZzZXQpO1xuICAgIGlmICghdmFyUG9zKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgZW5kVmFyID0gZmluZFZhckVuZEluZGV4KGNzc1RleHQsIHZhclBvcy5zdGFydCk7XG4gICAgdmFyIHZhckNvbnRlbnQgPSBjc3NUZXh0LnN1YnN0cmluZyh2YXJQb3MuZW5kLCBlbmRWYXIgLSAxKTtcbiAgICB2YXIgX2EgPSB2YXJDb250ZW50LnNwbGl0KCcsJyksIHByb3BOYW1lID0gX2FbMF0sIGZhbGxiYWNrID0gX2Euc2xpY2UoMSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQ6IHZhclBvcy5zdGFydCxcbiAgICAgICAgZW5kOiBlbmRWYXIsXG4gICAgICAgIHByb3BOYW1lOiBwcm9wTmFtZS50cmltKCksXG4gICAgICAgIGZhbGxiYWNrOiBmYWxsYmFjay5sZW5ndGggPiAwID8gZmFsbGJhY2suam9pbignLCcpLnRyaW0oKSA6IHVuZGVmaW5lZFxuICAgIH07XG59XG5mdW5jdGlvbiBjb21waWxlVmFyKGNzc1RleHQsIHRlbXBsYXRlLCBvZmZzZXQpIHtcbiAgICB2YXIgdmFyTWV0YSA9IHBhcnNlVmFyKGNzc1RleHQsIG9mZnNldCk7XG4gICAgaWYgKCF2YXJNZXRhKSB7XG4gICAgICAgIHRlbXBsYXRlLnB1c2goY3NzVGV4dC5zdWJzdHJpbmcob2Zmc2V0LCBjc3NUZXh0Lmxlbmd0aCkpO1xuICAgICAgICByZXR1cm4gY3NzVGV4dC5sZW5ndGg7XG4gICAgfVxuICAgIHZhciBwcm9wTmFtZSA9IHZhck1ldGEucHJvcE5hbWU7XG4gICAgdmFyIGZhbGxiYWNrID0gdmFyTWV0YS5mYWxsYmFjayAhPSBudWxsID8gY29tcGlsZVRlbXBsYXRlKHZhck1ldGEuZmFsbGJhY2spIDogdW5kZWZpbmVkO1xuICAgIHRlbXBsYXRlLnB1c2goY3NzVGV4dC5zdWJzdHJpbmcob2Zmc2V0LCB2YXJNZXRhLnN0YXJ0KSwgZnVuY3Rpb24gKHBhcmFtcykgeyByZXR1cm4gcmVzb2x2ZVZhcihwYXJhbXMsIHByb3BOYW1lLCBmYWxsYmFjayk7IH0pO1xuICAgIHJldHVybiB2YXJNZXRhLmVuZDtcbn1cbmZ1bmN0aW9uIGV4ZWN1dGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgcHJvcHMpIHtcbiAgICB2YXIgZmluYWwgPSAnJztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBsYXRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzID0gdGVtcGxhdGVbaV07XG4gICAgICAgIGZpbmFsICs9ICh0eXBlb2YgcyA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICA/IHNcbiAgICAgICAgICAgIDogcyhwcm9wcyk7XG4gICAgfVxuICAgIHJldHVybiBmaW5hbDtcbn1cbmZ1bmN0aW9uIGZpbmRFbmRWYWx1ZShjc3NUZXh0LCBvZmZzZXQpIHtcbiAgICB2YXIgb25TdHIgPSBmYWxzZTtcbiAgICB2YXIgZG91YmxlID0gZmFsc2U7XG4gICAgdmFyIGkgPSBvZmZzZXQ7XG4gICAgZm9yICg7IGkgPCBjc3NUZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjID0gY3NzVGV4dFtpXTtcbiAgICAgICAgaWYgKG9uU3RyKSB7XG4gICAgICAgICAgICBpZiAoZG91YmxlICYmIGMgPT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICBvblN0ciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFkb3VibGUgJiYgYyA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICBvblN0ciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGMgPT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICBvblN0ciA9IHRydWU7XG4gICAgICAgICAgICAgICAgZG91YmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGMgPT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgb25TdHIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRvdWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYyA9PT0gJzsnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYyA9PT0gJ30nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGk7XG59XG5mdW5jdGlvbiByZW1vdmVDdXN0b21Bc3NpZ25zKGNzc1RleHQpIHtcbiAgICB2YXIgZmluYWwgPSAnJztcbiAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgYXNzaWduUG9zID0gZmluZFJlZ2V4KFZBUl9BU1NJR05fU1RBUlQsIGNzc1RleHQsIG9mZnNldCk7XG4gICAgICAgIHZhciBzdGFydCA9IGFzc2lnblBvcyA/IGFzc2lnblBvcy5zdGFydCA6IGNzc1RleHQubGVuZ3RoO1xuICAgICAgICBmaW5hbCArPSBjc3NUZXh0LnN1YnN0cmluZyhvZmZzZXQsIHN0YXJ0KTtcbiAgICAgICAgaWYgKGFzc2lnblBvcykge1xuICAgICAgICAgICAgb2Zmc2V0ID0gZmluZEVuZFZhbHVlKGNzc1RleHQsIHN0YXJ0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmaW5hbDtcbn1cbmZ1bmN0aW9uIGNvbXBpbGVUZW1wbGF0ZShjc3NUZXh0KSB7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKENPTU1FTlRTLCAnJyk7XG4gICAgY3NzVGV4dCA9IHJlbW92ZUN1c3RvbUFzc2lnbnMoY3NzVGV4dClcbiAgICAgICAgLnJlcGxhY2UoVFJBSUxJTkdfTElORVMsICcnKTtcbiAgICB2YXIgc2VnbWVudHMgPSBbXTtcbiAgICB3aGlsZSAoaW5kZXggPCBjc3NUZXh0Lmxlbmd0aCkge1xuICAgICAgICBpbmRleCA9IGNvbXBpbGVWYXIoY3NzVGV4dCwgc2VnbWVudHMsIGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHNlZ21lbnRzO1xufVxuZnVuY3Rpb24gcmVzb2x2ZVZhbHVlcyhzZWxlY3RvcnMpIHtcbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICBzZWxlY3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgc2VsZWN0b3IuZGVjbGFyYXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGRlYykge1xuICAgICAgICAgICAgcHJvcHNbZGVjLnByb3BdID0gZGVjLnZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICB2YXIgcHJvcHNWYWx1ZXMgPSB7fTtcbiAgICB2YXIgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHByb3BzKTtcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHZhciBkaXJ0eSA9IGZhbHNlO1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gX2FbMF0sIHZhbHVlID0gX2FbMV07XG4gICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gZXhlY3V0ZVRlbXBsYXRlKHZhbHVlLCBwcm9wc1ZhbHVlcyk7XG4gICAgICAgICAgICBpZiAocHJvcFZhbHVlICE9PSBwcm9wc1ZhbHVlc1trZXldKSB7XG4gICAgICAgICAgICAgICAgcHJvcHNWYWx1ZXNba2V5XSA9IHByb3BWYWx1ZTtcbiAgICAgICAgICAgICAgICBkaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWRpcnR5KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJicmVha1wiO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgdmFyIHN0YXRlXzEgPSBfbG9vcF8xKCk7XG4gICAgICAgIGlmIChzdGF0ZV8xID09PSBcImJyZWFrXCIpXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BzVmFsdWVzO1xufVxuZnVuY3Rpb24gZ2V0U2VsZWN0b3JzKHJvb3QsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSB2b2lkIDApIHtcbiAgICAgICAgaW5kZXggPSAwO1xuICAgIH1cbiAgICBpZiAoIXJvb3QucnVsZXMpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICB2YXIgc2VsZWN0b3JzID0gW107XG4gICAgcm9vdC5ydWxlc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChydWxlKSB7IHJldHVybiBydWxlLnR5cGUgPT09IHR5cGVzLlNUWUxFX1JVTEU7IH0pXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgIHZhciBkZWNsYXJhdGlvbnMgPSBnZXREZWNsYXJhdGlvbnMocnVsZS5jc3NUZXh0KTtcbiAgICAgICAgaWYgKGRlY2xhcmF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBydWxlLnBhcnNlZFNlbGVjdG9yLnNwbGl0KCcsJykuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpZmljaXR5OiBjb21wdXRlU3BlY2lmaWNpdHkoKSxcbiAgICAgICAgICAgICAgICAgICAgbnU6IGluZGV4XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpbmRleCsrO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxlY3RvcnM7XG59XG5mdW5jdGlvbiBjb21wdXRlU3BlY2lmaWNpdHkoX3NlbGVjdG9yKSB7XG4gICAgcmV0dXJuIDE7XG59XG52YXIgSU1QT1JUQU5UID0gJyFpbXBvcnRhbnQnO1xudmFyIEZJTkRfREVDTEFSQVRJT05TID0gLyg/Ol58WztcXHN7XVxccyopKC0tW1xcdy1dKj8pXFxzKjpcXHMqKD86KCg/OicoPzpcXFxcJ3wuKSo/J3xcIig/OlxcXFxcInwuKSo/XCJ8XFwoW14pXSo/XFwpfFtefTt7XSkrKXxcXHsoW159XSopXFx9KD86KD89WztcXHN9XSl8JCkpL2dtO1xuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25zKGNzc1RleHQpIHtcbiAgICB2YXIgZGVjbGFyYXRpb25zID0gW107XG4gICAgdmFyIHhBcnJheTtcbiAgICB3aGlsZSAoeEFycmF5ID0gRklORF9ERUNMQVJBVElPTlMuZXhlYyhjc3NUZXh0LnRyaW0oKSkpIHtcbiAgICAgICAgdmFyIF9hID0gbm9ybWFsaXplVmFsdWUoeEFycmF5WzJdKSwgdmFsdWUgPSBfYS52YWx1ZSwgaW1wb3J0YW50ID0gX2EuaW1wb3J0YW50O1xuICAgICAgICBkZWNsYXJhdGlvbnMucHVzaCh7XG4gICAgICAgICAgICBwcm9wOiB4QXJyYXlbMV0udHJpbSgpLFxuICAgICAgICAgICAgdmFsdWU6IGNvbXBpbGVUZW1wbGF0ZSh2YWx1ZSksXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IGltcG9ydGFudCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkZWNsYXJhdGlvbnM7XG59XG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIHZhciByZWdleCA9IC9cXHMrL2dpbTtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVnZXgsICcgJykudHJpbSgpO1xuICAgIHZhciBpbXBvcnRhbnQgPSB2YWx1ZS5lbmRzV2l0aChJTVBPUlRBTlQpO1xuICAgIGlmIChpbXBvcnRhbnQpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgdmFsdWUubGVuZ3RoIC0gSU1QT1JUQU5ULmxlbmd0aCkudHJpbSgpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGltcG9ydGFudDogaW1wb3J0YW50XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldEFjdGl2ZVNlbGVjdG9ycyhob3N0RWwsIGhvc3RTY29wZU1hcCwgZ2xvYmFsU2NvcGVzKSB7XG4gICAgLy8gY29tcHV0ZXMgdGhlIGNzcyBzY29wZXMgdGhhdCBtaWdodCBhZmZlY3QgdGhpcyBwYXJ0aWN1bGFyIGVsZW1lbnRcbiAgICB2YXIgc2NvcGVzID0gZ2xvYmFsU2NvcGVzLmNvbmNhdChnZXRTY29wZXNGb3JFbGVtZW50KGhvc3RTY29wZU1hcCwgaG9zdEVsKSk7XG4gICAgLy8gZWFjaCBzY29wZSBtaWdodCBoYXZlIGFuIGFycmF5IG9mIGFzc29jaWF0ZWQgc2VsZWN0b3JzXG4gICAgLy8gbGV0J3MgZmxhdHRlbiB0aGUgY29tcGxldGUgYXJyYXkgb2Ygc2VsZWN0b3JzIGZyb20gYWxsIHRoZSBzY29wZXNcbiAgICB2YXIgc2VsZWN0b3JTZXQgPSBnZXRTZWxlY3RvcnNGb3JTY29wZXMoc2NvcGVzKTtcbiAgICAvLyB3ZSBmaWx0ZXIgdG8gb25seSB0aGUgc2VsZWN0b3JzIHRoYXQgbWF0Y2hlcyB0aGUgaG9zdEVsXG4gICAgdmFyIGFjdGl2ZVNlbGVjdG9ycyA9IHNlbGVjdG9yU2V0LmZpbHRlcihmdW5jdGlvbiAoc2VsZWN0b3IpIHsgcmV0dXJuIG1hdGNoZXMoaG9zdEVsLCBzZWxlY3Rvci5zZWxlY3Rvcik7IH0pO1xuICAgIC8vIHNvcnQgc2VsZWN0b3JzIGJ5IHNwZWNpZml0eVxuICAgIHJldHVybiBzb3J0U2VsZWN0b3JzKGFjdGl2ZVNlbGVjdG9ycyk7XG59XG5mdW5jdGlvbiBnZXRTY29wZXNGb3JFbGVtZW50KGhvc3RUZW1wbGF0ZU1hcCwgbm9kZSkge1xuICAgIHZhciBzY29wZXMgPSBbXTtcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICB2YXIgc2NvcGUgPSBob3N0VGVtcGxhdGVNYXAuZ2V0KG5vZGUpO1xuICAgICAgICBpZiAoc2NvcGUpIHtcbiAgICAgICAgICAgIHNjb3Blcy5wdXNoKHNjb3BlKTtcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gc2NvcGVzO1xufVxuZnVuY3Rpb24gZ2V0U2VsZWN0b3JzRm9yU2NvcGVzKHNjb3Blcykge1xuICAgIHZhciBzZWxlY3RvcnMgPSBbXTtcbiAgICBzY29wZXMuZm9yRWFjaChmdW5jdGlvbiAoc2NvcGUpIHtcbiAgICAgICAgc2VsZWN0b3JzLnB1c2guYXBwbHkoc2VsZWN0b3JzLCBzY29wZS5zZWxlY3RvcnMpO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxlY3RvcnM7XG59XG5mdW5jdGlvbiBzb3J0U2VsZWN0b3JzKHNlbGVjdG9ycykge1xuICAgIHNlbGVjdG9ycy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChhLnNwZWNpZmljaXR5ID09PSBiLnNwZWNpZmljaXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gYS5udSAtIGIubnU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGEuc3BlY2lmaWNpdHkgLSBiLnNwZWNpZmljaXR5O1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxlY3RvcnM7XG59XG5mdW5jdGlvbiBtYXRjaGVzKGVsLCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBzZWxlY3RvciA9PT0gJzpyb290JyB8fCBzZWxlY3RvciA9PT0gJ2h0bWwnIHx8IGVsLm1hdGNoZXMoc2VsZWN0b3IpO1xufVxuZnVuY3Rpb24gcGFyc2VDU1Mob3JpZ2luYWwpIHtcbiAgICB2YXIgYXN0ID0gcGFyc2Uob3JpZ2luYWwpO1xuICAgIHZhciB0ZW1wbGF0ZSA9IGNvbXBpbGVUZW1wbGF0ZShvcmlnaW5hbCk7XG4gICAgdmFyIHNlbGVjdG9ycyA9IGdldFNlbGVjdG9ycyhhc3QpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9yaWdpbmFsOiBvcmlnaW5hbCxcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgICAgICBzZWxlY3RvcnM6IHNlbGVjdG9ycyxcbiAgICAgICAgdXNlc0Nzc1ZhcnM6IHRlbXBsYXRlLmxlbmd0aCA+IDFcbiAgICB9O1xufVxuZnVuY3Rpb24gYWRkR2xvYmFsU3R5bGUoZ2xvYmFsU2NvcGVzLCBzdHlsZUVsKSB7XG4gICAgdmFyIGNzcyA9IHBhcnNlQ1NTKHN0eWxlRWwuaW5uZXJIVE1MKTtcbiAgICBjc3Muc3R5bGVFbCA9IHN0eWxlRWw7XG4gICAgZ2xvYmFsU2NvcGVzLnB1c2goY3NzKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUdsb2JhbFNjb3BlcyhzY29wZXMpIHtcbiAgICB2YXIgc2VsZWN0b3JzID0gZ2V0U2VsZWN0b3JzRm9yU2NvcGVzKHNjb3Blcyk7XG4gICAgdmFyIHByb3BzID0gcmVzb2x2ZVZhbHVlcyhzZWxlY3RvcnMpO1xuICAgIHNjb3Blcy5mb3JFYWNoKGZ1bmN0aW9uIChzY29wZSkge1xuICAgICAgICBpZiAoc2NvcGUudXNlc0Nzc1ZhcnMpIHtcbiAgICAgICAgICAgIHNjb3BlLnN0eWxlRWwuaW5uZXJIVE1MID0gZXhlY3V0ZVRlbXBsYXRlKHNjb3BlLnRlbXBsYXRlLCBwcm9wcyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHJlU2NvcGUoc2NvcGUsIHNjb3BlSWQpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSBzY29wZS50ZW1wbGF0ZS5tYXAoZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2Ygc2VnbWVudCA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICA/IHJlcGxhY2VTY29wZShzZWdtZW50LCBzY29wZS5zY29wZUlkLCBzY29wZUlkKVxuICAgICAgICAgICAgOiBzZWdtZW50O1xuICAgIH0pO1xuICAgIHZhciBzZWxlY3RvcnMgPSBzY29wZS5zZWxlY3RvcnMubWFwKGZ1bmN0aW9uIChzZWwpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHNlbCwgeyBzZWxlY3RvcjogcmVwbGFjZVNjb3BlKHNlbC5zZWxlY3Rvciwgc2NvcGUuc2NvcGVJZCwgc2NvcGVJZCkgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHNjb3BlLCB7IHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICAgICAgc2VsZWN0b3JzOiBzZWxlY3RvcnMsXG4gICAgICAgIHNjb3BlSWQ6IHNjb3BlSWQgfSk7XG59XG5mdW5jdGlvbiByZXBsYWNlU2NvcGUob3JpZ2luYWwsIG9sZFNjb3BlSWQsIG5ld1Njb3BlSWQpIHtcbiAgICBvcmlnaW5hbCA9IHJlcGxhY2VBbGwob3JpZ2luYWwsIFwiXFxcXC5cIiArIG9sZFNjb3BlSWQsIFwiLlwiICsgbmV3U2NvcGVJZCk7XG4gICAgcmV0dXJuIG9yaWdpbmFsO1xufVxuZnVuY3Rpb24gcmVwbGFjZUFsbChpbnB1dCwgZmluZCwgcmVwbGFjZSkge1xuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKG5ldyBSZWdFeHAoZmluZCwgJ2cnKSwgcmVwbGFjZSk7XG59XG5mdW5jdGlvbiBsb2FkRG9jdW1lbnQoZG9jLCBnbG9iYWxTY29wZXMpIHtcbiAgICBsb2FkRG9jdW1lbnRTdHlsZXMoZG9jLCBnbG9iYWxTY29wZXMpO1xuICAgIHJldHVybiBsb2FkRG9jdW1lbnRMaW5rcyhkb2MsIGdsb2JhbFNjb3Blcyk7XG59XG5mdW5jdGlvbiBsb2FkRG9jdW1lbnRMaW5rcyhkb2MsIGdsb2JhbFNjb3Blcykge1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIHZhciBsaW5rRWxtcyA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl1baHJlZl0nKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmtFbG1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHByb21pc2VzLnB1c2goYWRkR2xvYmFsTGluayhkb2MsIGdsb2JhbFNjb3BlcywgbGlua0VsbXNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn1cbmZ1bmN0aW9uIGxvYWREb2N1bWVudFN0eWxlcyhkb2MsIGdsb2JhbFNjb3Blcykge1xuICAgIHZhciBzdHlsZUVsbXMgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgnc3R5bGU6bm90KFtkYXRhLXN0eWxlc10pJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZUVsbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYWRkR2xvYmFsU3R5bGUoZ2xvYmFsU2NvcGVzLCBzdHlsZUVsbXNbaV0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZEdsb2JhbExpbmsoZG9jLCBnbG9iYWxTY29wZXMsIGxpbmtFbG0pIHtcbiAgICB2YXIgdXJsID0gbGlua0VsbS5ocmVmO1xuICAgIHJldHVybiBmZXRjaCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJzcCkgeyByZXR1cm4gcnNwLnRleHQoKTsgfSkudGhlbihmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICBpZiAoaGFzQ3NzVmFyaWFibGVzKHRleHQpICYmIGxpbmtFbG0ucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgaWYgKGhhc1JlbGF0aXZlVXJscyh0ZXh0KSkge1xuICAgICAgICAgICAgICAgIHRleHQgPSBmaXhSZWxhdGl2ZVVybHModGV4dCwgdXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdHlsZUVsID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICBzdHlsZUVsLnNldEF0dHJpYnV0ZSgnZGF0YS1zdHlsZXMnLCAnJyk7XG4gICAgICAgICAgICBzdHlsZUVsLmlubmVySFRNTCA9IHRleHQ7XG4gICAgICAgICAgICBhZGRHbG9iYWxTdHlsZShnbG9iYWxTY29wZXMsIHN0eWxlRWwpO1xuICAgICAgICAgICAgbGlua0VsbS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzdHlsZUVsLCBsaW5rRWxtKTtcbiAgICAgICAgICAgIGxpbmtFbG0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9KTtcbn1cbi8vIFRoaXMgcmVnZXhwIHRyaWVzIHRvIGRldGVybWluZSB3aGVuIGEgdmFyaWFibGUgaXMgZGVjbGFyZWQsIGZvciBleGFtcGxlOlxuLy9cbi8vIC5teS1lbCB7IC0taGlnaGxpZ2h0LWNvbG9yOiBncmVlbjsgfVxuLy9cbi8vIGJ1dCB3ZSBkb24ndCB3YW50IHRvIHRyaWdnZXIgd2hlbiBhIGNsYXNzbmFtZSB1c2VzIFwiLS1cIiBvciBhIHBzZXVkby1jbGFzcyBpc1xuLy8gdXNlZC4gV2UgYXNzdW1lIHRoYXQgdGhlIG9ubHkgY2hhcmFjdGVycyB0aGF0IGNhbiBwcmVjZWVkIGEgdmFyaWFibGVcbi8vIGRlY2xhcmF0aW9uIGFyZSBcIntcIiwgZnJvbSBhbiBvcGVuaW5nIGJsb2NrLCBcIjtcIiBmcm9tIGEgcHJlY2VlZGluZyBydWxlLCBvciBhXG4vLyBzcGFjZS4gVGhpcyBwcmV2ZW50cyB0aGUgcmVnZXhwIGZyb20gbWF0Y2hpbmcgYSB3b3JkIGluIGEgc2VsZWN0b3IsIHNpbmNlXG4vLyB0aGV5IHdvdWxkIG5lZWQgdG8gc3RhcnQgd2l0aCBhIFwiLlwiIG9yIFwiI1wiLiAoV2UgYXNzdW1lIGVsZW1lbnQgbmFtZXMgZG9uJ3Rcbi8vIHN0YXJ0IHdpdGggXCItLVwiKS5cbnZhciBDU1NfVkFSSUFCTEVfUkVHRVhQID0gL1tcXHM7e10tLVstYS16QS1aMC05XStcXHMqOi9tO1xuZnVuY3Rpb24gaGFzQ3NzVmFyaWFibGVzKGNzcykge1xuICAgIHJldHVybiBjc3MuaW5kZXhPZigndmFyKCcpID4gLTEgfHwgQ1NTX1ZBUklBQkxFX1JFR0VYUC50ZXN0KGNzcyk7XG59XG4vLyBUaGlzIHJlZ2V4cCBmaW5kIGFsbCB1cmwoKSB1c2FnZXMgd2l0aCByZWxhdGl2ZSB1cmxzXG52YXIgQ1NTX1VSTF9SRUdFWFAgPSAvdXJsW1xcc10qXFwoW1xcc10qWydcIl0/KD8hW2h0dHB8L10pKFteXFwnXFxcIlxcKV0qKVtcXHNdKlsnXCJdP1xcKVtcXHNdKi9naW07XG5mdW5jdGlvbiBoYXNSZWxhdGl2ZVVybHMoY3NzKSB7XG4gICAgQ1NTX1VSTF9SRUdFWFAubGFzdEluZGV4ID0gMDtcbiAgICByZXR1cm4gQ1NTX1VSTF9SRUdFWFAudGVzdChjc3MpO1xufVxuZnVuY3Rpb24gZml4UmVsYXRpdmVVcmxzKGNzcywgb3JpZ2luYWxVcmwpIHtcbiAgICAvLyBnZXQgdGhlIGJhc2VwYXRoIGZyb20gdGhlIG9yaWdpbmFsIGltcG9ydCB1cmxcbiAgICB2YXIgYmFzZVBhdGggPSBvcmlnaW5hbFVybC5yZXBsYWNlKC9bXi9dKiQvLCAnJyk7XG4gICAgLy8gcmVwbGFjZSB0aGUgcmVsYXRpdmUgdXJsLCB3aXRoIHRoZSBuZXcgcmVsYXRpdmUgdXJsXG4gICAgcmV0dXJuIGNzcy5yZXBsYWNlKENTU19VUkxfUkVHRVhQLCBmdW5jdGlvbiAoZnVsbE1hdGNoLCB1cmwpIHtcbiAgICAgICAgLy8gcmhlIG5ldyByZWxhdGl2ZSBwYXRoIGlzIHRoZSBiYXNlIHBhdGggKyB1cmlcbiAgICAgICAgLy8gVE9ETzogbm9ybWFsaXplIHJlbGF0aXZlIFVSTFxuICAgICAgICB2YXIgcmVsYXRpdmVVcmwgPSBiYXNlUGF0aCArIHVybDtcbiAgICAgICAgcmV0dXJuIGZ1bGxNYXRjaC5yZXBsYWNlKHVybCwgcmVsYXRpdmVVcmwpO1xuICAgIH0pO1xufVxudmFyIEN1c3RvbVN0eWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEN1c3RvbVN0eWxlKHdpbiwgZG9jKSB7XG4gICAgICAgIHRoaXMud2luID0gd2luO1xuICAgICAgICB0aGlzLmRvYyA9IGRvYztcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICAgIHRoaXMuaG9zdFN0eWxlTWFwID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgdGhpcy5ob3N0U2NvcGVNYXAgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICB0aGlzLmdsb2JhbFNjb3BlcyA9IFtdO1xuICAgICAgICB0aGlzLnNjb3Blc01hcCA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgQ3VzdG9tU3R5bGUucHJvdG90eXBlLmluaXRTaGltID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIF90aGlzLndpbi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxvYWREb2N1bWVudChfdGhpcy5kb2MsIF90aGlzLmdsb2JhbFNjb3BlcykudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiByZXNvbHZlKCk7IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ3VzdG9tU3R5bGUucHJvdG90eXBlLmFkZExpbmsgPSBmdW5jdGlvbiAobGlua0VsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBhZGRHbG9iYWxMaW5rKHRoaXMuZG9jLCB0aGlzLmdsb2JhbFNjb3BlcywgbGlua0VsKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZUdsb2JhbCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEN1c3RvbVN0eWxlLnByb3RvdHlwZS5hZGRHbG9iYWxTdHlsZSA9IGZ1bmN0aW9uIChzdHlsZUVsKSB7XG4gICAgICAgIGFkZEdsb2JhbFN0eWxlKHRoaXMuZ2xvYmFsU2NvcGVzLCBzdHlsZUVsKTtcbiAgICAgICAgdGhpcy51cGRhdGVHbG9iYWwoKTtcbiAgICB9O1xuICAgIEN1c3RvbVN0eWxlLnByb3RvdHlwZS5jcmVhdGVIb3N0U3R5bGUgPSBmdW5jdGlvbiAoaG9zdEVsLCBjc3NTY29wZUlkLCBjc3NUZXh0LCBpc1Njb3BlZCkge1xuICAgICAgICBpZiAodGhpcy5ob3N0U2NvcGVNYXAuaGFzKGhvc3RFbCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaG9zdCBzdHlsZSBhbHJlYWR5IGNyZWF0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYmFzZVNjb3BlID0gdGhpcy5yZWdpc3Rlckhvc3RUZW1wbGF0ZShjc3NUZXh0LCBjc3NTY29wZUlkLCBpc1Njb3BlZCk7XG4gICAgICAgIHZhciBzdHlsZUVsID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgaWYgKCFiYXNlU2NvcGUudXNlc0Nzc1ZhcnMpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgY29tcG9uZW50IGRvZXMgbm90IHVzZSAocmVhZCkgY3NzIHZhcmlhYmxlc1xuICAgICAgICAgICAgc3R5bGVFbC5pbm5lckhUTUwgPSBjc3NUZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU2NvcGVkKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGNvbXBvbmVudCBpcyBkeW5hbWljOiB1c2VzIGNzcyB2YXIgYW5kIGlzIHNjb3BlZFxuICAgICAgICAgICAgc3R5bGVFbFsncy1zYyddID0gY3NzU2NvcGVJZCA9IGJhc2VTY29wZS5zY29wZUlkICsgXCItXCIgKyB0aGlzLmNvdW50O1xuICAgICAgICAgICAgc3R5bGVFbC5pbm5lckhUTUwgPSAnLypuZWVkcyB1cGRhdGUqLyc7XG4gICAgICAgICAgICB0aGlzLmhvc3RTdHlsZU1hcC5zZXQoaG9zdEVsLCBzdHlsZUVsKTtcbiAgICAgICAgICAgIHRoaXMuaG9zdFNjb3BlTWFwLnNldChob3N0RWwsIHJlU2NvcGUoYmFzZVNjb3BlLCBjc3NTY29wZUlkKSk7XG4gICAgICAgICAgICB0aGlzLmNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBUaGlzIGNvbXBvbmVudCB1c2VzIGNzcyB2YXJzLCBidXQgaXQncyBuby1lbmNhcHN1bGF0aW9uIChnbG9iYWwgc3RhdGljKVxuICAgICAgICAgICAgYmFzZVNjb3BlLnN0eWxlRWwgPSBzdHlsZUVsO1xuICAgICAgICAgICAgaWYgKCFiYXNlU2NvcGUudXNlc0Nzc1ZhcnMpIHtcbiAgICAgICAgICAgICAgICBzdHlsZUVsLmlubmVySFRNTCA9IGV4ZWN1dGVUZW1wbGF0ZShiYXNlU2NvcGUudGVtcGxhdGUsIHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsU2NvcGVzLnB1c2goYmFzZVNjb3BlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlR2xvYmFsKCk7XG4gICAgICAgICAgICB0aGlzLmhvc3RTY29wZU1hcC5zZXQoaG9zdEVsLCBiYXNlU2NvcGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZUVsO1xuICAgIH07XG4gICAgQ3VzdG9tU3R5bGUucHJvdG90eXBlLnJlbW92ZUhvc3QgPSBmdW5jdGlvbiAoaG9zdEVsKSB7XG4gICAgICAgIHZhciBjc3MgPSB0aGlzLmhvc3RTdHlsZU1hcC5nZXQoaG9zdEVsKTtcbiAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgY3NzLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaG9zdFN0eWxlTWFwLmRlbGV0ZShob3N0RWwpO1xuICAgICAgICB0aGlzLmhvc3RTY29wZU1hcC5kZWxldGUoaG9zdEVsKTtcbiAgICB9O1xuICAgIEN1c3RvbVN0eWxlLnByb3RvdHlwZS51cGRhdGVIb3N0ID0gZnVuY3Rpb24gKGhvc3RFbCkge1xuICAgICAgICB2YXIgc2NvcGUgPSB0aGlzLmhvc3RTY29wZU1hcC5nZXQoaG9zdEVsKTtcbiAgICAgICAgaWYgKHNjb3BlICYmIHNjb3BlLnVzZXNDc3NWYXJzICYmIHNjb3BlLmlzU2NvcGVkKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGVFbCA9IHRoaXMuaG9zdFN0eWxlTWFwLmdldChob3N0RWwpO1xuICAgICAgICAgICAgaWYgKHN0eWxlRWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0b3JzID0gZ2V0QWN0aXZlU2VsZWN0b3JzKGhvc3RFbCwgdGhpcy5ob3N0U2NvcGVNYXAsIHRoaXMuZ2xvYmFsU2NvcGVzKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSByZXNvbHZlVmFsdWVzKHNlbGVjdG9ycyk7XG4gICAgICAgICAgICAgICAgc3R5bGVFbC5pbm5lckhUTUwgPSBleGVjdXRlVGVtcGxhdGUoc2NvcGUudGVtcGxhdGUsIHByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgQ3VzdG9tU3R5bGUucHJvdG90eXBlLnVwZGF0ZUdsb2JhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdXBkYXRlR2xvYmFsU2NvcGVzKHRoaXMuZ2xvYmFsU2NvcGVzKTtcbiAgICB9O1xuICAgIEN1c3RvbVN0eWxlLnByb3RvdHlwZS5yZWdpc3Rlckhvc3RUZW1wbGF0ZSA9IGZ1bmN0aW9uIChjc3NUZXh0LCBzY29wZUlkLCBpc1Njb3BlZCkge1xuICAgICAgICB2YXIgc2NvcGUgPSB0aGlzLnNjb3Blc01hcC5nZXQoc2NvcGVJZCk7XG4gICAgICAgIGlmICghc2NvcGUpIHtcbiAgICAgICAgICAgIHNjb3BlID0gcGFyc2VDU1MoY3NzVGV4dCk7XG4gICAgICAgICAgICBzY29wZS5zY29wZUlkID0gc2NvcGVJZDtcbiAgICAgICAgICAgIHNjb3BlLmlzU2NvcGVkID0gaXNTY29wZWQ7XG4gICAgICAgICAgICB0aGlzLnNjb3Blc01hcC5zZXQoc2NvcGVJZCwgc2NvcGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzY29wZTtcbiAgICB9O1xuICAgIHJldHVybiBDdXN0b21TdHlsZTtcbn0oKSk7XG52YXIgd2luID0gd2luZG93O1xuZnVuY3Rpb24gbmVlZHNTaGltKCkge1xuICAgIHJldHVybiAhKHdpbi5DU1MgJiYgd2luLkNTUy5zdXBwb3J0cyAmJiB3aW4uQ1NTLnN1cHBvcnRzKCdjb2xvcicsICd2YXIoLS1jKScpKTtcbn1cbmlmICghd2luLl9fc3RlbmNpbF9jc3NzaGltICYmIG5lZWRzU2hpbSgpKSB7XG4gICAgd2luLl9fc3RlbmNpbF9jc3NzaGltID0gbmV3IEN1c3RvbVN0eWxlKHdpbiwgZG9jdW1lbnQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==