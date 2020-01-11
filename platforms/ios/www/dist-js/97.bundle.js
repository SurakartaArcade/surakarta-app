(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ "./node_modules/ionicons/dist/esm/legacy/shadow-css-984bac74-549b16dd.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ionicons/dist/esm/legacy/shadow-css-984bac74-549b16dd.js ***!
  \*******************************************************************************/
/*! exports provided: ShadowCss, scopeCss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadowCss", function() { return ShadowCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scopeCss", function() { return scopeCss; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */
function scopeCss(cssText, scopeId, commentOriginalSelector) {
    var sc = new ShadowCss();
    return sc.shimCssText(cssText, scopeId, scopeId + '-h', scopeId + '-s', commentOriginalSelector);
}
var ShadowCss = /** @class */ (function () {
    function ShadowCss() {
        this.strictStyling = true;
    }
    ShadowCss.prototype.shimCssText = function (cssText, scopeId, hostScopeId, slotScopeId, commentOriginalSelector) {
        if (hostScopeId === void 0) { hostScopeId = ''; }
        if (slotScopeId === void 0) { slotScopeId = ''; }
        if (commentOriginalSelector === void 0) { commentOriginalSelector = false; }
        var commentsWithHash = extractCommentsWithHash(cssText);
        cssText = stripComments(cssText);
        var orgSelectors = [];
        if (commentOriginalSelector) {
            var processCommentedSelector_1 = function (rule) {
                var placeholder = "/*!@___" + orgSelectors.length + "___*/";
                var comment = "/*!@" + rule.selector + "*/";
                orgSelectors.push({ placeholder: placeholder, comment: comment });
                rule.selector = placeholder + rule.selector;
                return rule;
            };
            cssText = processRules(cssText, function (rule) {
                if (rule.selector[0] !== '@') {
                    return processCommentedSelector_1(rule);
                }
                else if (rule.selector.startsWith('@media') || rule.selector.startsWith('@supports') ||
                    rule.selector.startsWith('@page') || rule.selector.startsWith('@document')) {
                    rule.content = processRules(rule.content, processCommentedSelector_1);
                    return rule;
                }
                return rule;
            });
        }
        var scopedCssText = this._scopeCssText(cssText, scopeId, hostScopeId, slotScopeId, commentOriginalSelector);
        cssText = [scopedCssText].concat(commentsWithHash).join('\n');
        if (commentOriginalSelector) {
            orgSelectors.forEach(function (_a) {
                var placeholder = _a.placeholder, comment = _a.comment;
                cssText = cssText.replace(placeholder, comment);
            });
        }
        return cssText;
    };
    ShadowCss.prototype._scopeCssText = function (cssText, scopeId, hostScopeId, slotScopeId, commentOriginalSelector) {
        // replace :host and :host-context -shadowcsshost and -shadowcsshost respectively
        cssText = this._insertPolyfillHostInCssText(cssText);
        cssText = this._convertColonHost(cssText);
        cssText = this._convertColonHostContext(cssText);
        cssText = this._convertColonSlotted(cssText, slotScopeId);
        cssText = this._convertShadowDOMSelectors(cssText);
        if (scopeId) {
            cssText = this._scopeSelectors(cssText, scopeId, hostScopeId, slotScopeId, commentOriginalSelector);
        }
        cssText = cssText.replace(/-shadowcsshost-no-combinator/g, "." + hostScopeId);
        cssText = cssText.replace(/>\s*\*\s+([^{, ]+)/gm, ' $1 ');
        return cssText.trim();
    };
    /*
     * convert a rule like :host(.foo) > .bar { }
     *
     * to
     *
     * .foo<scopeName> > .bar
    */
    ShadowCss.prototype._convertColonHost = function (cssText) {
        return this._convertColonRule(cssText, _cssColonHostRe, this._colonHostPartReplacer);
    };
    /*
   * convert a rule like ::slotted(.foo) { }
  */
    ShadowCss.prototype._convertColonSlotted = function (cssText, slotAttr) {
        var regExp = _cssColonSlottedRe;
        return cssText.replace(regExp, function () {
            var m = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                m[_i] = arguments[_i];
            }
            if (m[2]) {
                var compound = m[2].trim();
                var suffix = m[3];
                var sel = '.' + slotAttr + ' > ' + compound + suffix;
                return sel;
            }
            else {
                return _polyfillHostNoCombinator + m[3];
            }
        });
    };
    /*
     * convert a rule like :host-context(.foo) > .bar { }
     *
     * to
     *
     * .foo<scopeName> > .bar, .foo scopeName > .bar { }
     *
     * and
     *
     * :host-context(.foo:host) .bar { ... }
     *
     * to
     *
     * .foo<scopeName> .bar { ... }
    */
    ShadowCss.prototype._convertColonHostContext = function (cssText) {
        return this._convertColonRule(cssText, _cssColonHostContextRe, this._colonHostContextPartReplacer);
    };
    ShadowCss.prototype._convertColonRule = function (cssText, regExp, partReplacer) {
        // m[1] = :host(-context), m[2] = contents of (), m[3] rest of rule
        return cssText.replace(regExp, function () {
            var m = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                m[_i] = arguments[_i];
            }
            if (m[2]) {
                var parts = m[2].split(',');
                var r = [];
                for (var i = 0; i < parts.length; i++) {
                    var p = parts[i].trim();
                    if (!p)
                        break;
                    r.push(partReplacer(_polyfillHostNoCombinator, p, m[3]));
                }
                return r.join(',');
            }
            else {
                return _polyfillHostNoCombinator + m[3];
            }
        });
    };
    ShadowCss.prototype._colonHostContextPartReplacer = function (host, part, suffix) {
        if (part.indexOf(_polyfillHost) > -1) {
            return this._colonHostPartReplacer(host, part, suffix);
        }
        else {
            return host + part + suffix + ', ' + part + ' ' + host + suffix;
        }
    };
    ShadowCss.prototype._colonHostPartReplacer = function (host, part, suffix) {
        return host + part.replace(_polyfillHost, '') + suffix;
    };
    /*
     * Convert combinators like ::shadow and pseudo-elements like ::content
     * by replacing with space.
    */
    ShadowCss.prototype._convertShadowDOMSelectors = function (cssText) {
        return _shadowDOMSelectorsRe.reduce(function (result, pattern) { return result.replace(pattern, ' '); }, cssText);
    };
    // change a selector like 'div' to 'name div'
    ShadowCss.prototype._scopeSelectors = function (cssText, scopeSelector, hostSelector, slotSelector, commentOriginalSelector) {
        var _this = this;
        return processRules(cssText, function (rule) {
            var selector = rule.selector;
            var content = rule.content;
            if (rule.selector[0] !== '@') {
                selector =
                    _this._scopeSelector(rule.selector, scopeSelector, hostSelector, slotSelector, _this.strictStyling);
            }
            else if (rule.selector.startsWith('@media') || rule.selector.startsWith('@supports') ||
                rule.selector.startsWith('@page') || rule.selector.startsWith('@document')) {
                content = _this._scopeSelectors(rule.content, scopeSelector, hostSelector, slotSelector, commentOriginalSelector);
            }
            selector = selector.replace(/\s{2,}/g, ' ').trim();
            return new CssRule(selector, content);
        });
    };
    ShadowCss.prototype._scopeSelector = function (selector, scopeSelector, hostSelector, slotSelector, strict) {
        var _this = this;
        return selector.split(',')
            .map(function (shallowPart) {
            if (slotSelector && shallowPart.indexOf('.' + slotSelector) > -1) {
                return shallowPart.trim();
            }
            if (_this._selectorNeedsScoping(shallowPart, scopeSelector)) {
                return strict ?
                    _this._applyStrictSelectorScope(shallowPart, scopeSelector, hostSelector).trim() :
                    _this._applySelectorScope(shallowPart, scopeSelector, hostSelector).trim();
            }
            else {
                return shallowPart.trim();
            }
        })
            .join(', ');
    };
    ShadowCss.prototype._selectorNeedsScoping = function (selector, scopeSelector) {
        var re = this._makeScopeMatcher(scopeSelector);
        return !re.test(selector);
    };
    ShadowCss.prototype._makeScopeMatcher = function (scopeSelector) {
        var lre = /\[/g;
        var rre = /\]/g;
        scopeSelector = scopeSelector.replace(lre, '\\[').replace(rre, '\\]');
        return new RegExp('^(' + scopeSelector + ')' + _selectorReSuffix, 'm');
    };
    ShadowCss.prototype._applySelectorScope = function (selector, scopeSelector, hostSelector) {
        // Difference from webcomponents.js: scopeSelector could not be an array
        return this._applySimpleSelectorScope(selector, scopeSelector, hostSelector);
    };
    // scope via name and [is=name]
    ShadowCss.prototype._applySimpleSelectorScope = function (selector, scopeSelector, hostSelector) {
        // In Android browser, the lastIndex is not reset when the regex is used in String.replace()
        _polyfillHostRe.lastIndex = 0;
        if (_polyfillHostRe.test(selector)) {
            var replaceBy_1 = this.strictStyling ? "." + hostSelector : scopeSelector;
            return selector
                .replace(_polyfillHostNoCombinatorRe, function (_, selector) {
                return selector.replace(/([^:]*)(:*)(.*)/, function (_, before, colon, after) {
                    return before + replaceBy_1 + colon + after;
                });
            })
                .replace(_polyfillHostRe, replaceBy_1 + ' ');
        }
        return scopeSelector + ' ' + selector;
    };
    ShadowCss.prototype._applyStrictSelectorScope = function (selector, scopeSelector, hostSelector) {
        var _this = this;
        var isRe = /\[is=([^\]]*)\]/g;
        scopeSelector = scopeSelector.replace(isRe, function (_) {
            var parts = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                parts[_i - 1] = arguments[_i];
            }
            return parts[0];
        });
        var className = '.' + scopeSelector;
        var _scopeSelectorPart = function (p) {
            var scopedP = p.trim();
            if (!scopedP) {
                return '';
            }
            if (p.indexOf(_polyfillHostNoCombinator) > -1) {
                scopedP = _this._applySimpleSelectorScope(p, scopeSelector, hostSelector);
            }
            else {
                // remove :host since it should be unnecessary
                var t = p.replace(_polyfillHostRe, '');
                if (t.length > 0) {
                    var matches = t.match(/([^:]*)(:*)(.*)/);
                    if (matches) {
                        scopedP = matches[1] + className + matches[2] + matches[3];
                    }
                }
            }
            return scopedP;
        };
        var safeContent = new SafeSelector(selector);
        selector = safeContent.content();
        var scopedSelector = '';
        var startIndex = 0;
        var res;
        var sep = /( |>|\+|~(?!=))\s*/g;
        // If a selector appears before :host it should not be shimmed as it
        // matches on ancestor elements and not on elements in the host's shadow
        // `:host-context(div)` is transformed to
        // `-shadowcsshost-no-combinatordiv, div -shadowcsshost-no-combinator`
        // the `div` is not part of the component in the 2nd selectors and should not be scoped.
        // Historically `component-tag:host` was matching the component so we also want to preserve
        // this behavior to avoid breaking legacy apps (it should not match).
        // The behavior should be:
        // - `tag:host` -> `tag[h]` (this is to avoid breaking legacy apps, should not match anything)
        // - `tag :host` -> `tag [h]` (`tag` is not scoped because it's considered part of a
        //   `:host-context(tag)`)
        var hasHost = selector.indexOf(_polyfillHostNoCombinator) > -1;
        // Only scope parts after the first `-shadowcsshost-no-combinator` when it is present
        var shouldScope = !hasHost;
        while ((res = sep.exec(selector)) !== null) {
            var separator = res[1];
            var part_1 = selector.slice(startIndex, res.index).trim();
            shouldScope = shouldScope || part_1.indexOf(_polyfillHostNoCombinator) > -1;
            var scopedPart = shouldScope ? _scopeSelectorPart(part_1) : part_1;
            scopedSelector += scopedPart + " " + separator + " ";
            startIndex = sep.lastIndex;
        }
        var part = selector.substring(startIndex);
        shouldScope = shouldScope || part.indexOf(_polyfillHostNoCombinator) > -1;
        scopedSelector += shouldScope ? _scopeSelectorPart(part) : part;
        // replace the placeholders with their original values
        return safeContent.restore(scopedSelector);
    };
    ShadowCss.prototype._insertPolyfillHostInCssText = function (selector) {
        selector = selector
            .replace(_colonHostContextRe, _polyfillHostContext)
            .replace(_colonHostRe, _polyfillHost)
            .replace(_colonSlottedRe, _polyfillSlotted);
        return selector;
    };
    return ShadowCss;
}());
var SafeSelector = /** @class */ (function () {
    function SafeSelector(selector) {
        var _this = this;
        this.placeholders = [];
        this.index = 0;
        // Replaces attribute selectors with placeholders.
        // The WS in [attr="va lue"] would otherwise be interpreted as a selector separator.
        selector = selector.replace(/(\[[^\]]*\])/g, function (_, keep) {
            var replaceBy = "__ph-" + _this.index + "__";
            _this.placeholders.push(keep);
            _this.index++;
            return replaceBy;
        });
        // Replaces the expression in `:nth-child(2n + 1)` with a placeholder.
        // WS and "+" would otherwise be interpreted as selector separators.
        this._content = selector.replace(/(:nth-[-\w]+)(\([^)]+\))/g, function (_, pseudo, exp) {
            var replaceBy = "__ph-" + _this.index + "__";
            _this.placeholders.push(exp);
            _this.index++;
            return pseudo + replaceBy;
        });
    }
    SafeSelector.prototype.restore = function (content) {
        var _this = this;
        return content.replace(/__ph-(\d+)__/g, function (_, index) { return _this.placeholders[+index]; });
    };
    SafeSelector.prototype.content = function () { return this._content; };
    return SafeSelector;
}());
var _polyfillHost = '-shadowcsshost';
var _polyfillSlotted = '-shadowcssslotted';
// note: :host-context pre-processed to -shadowcsshostcontext.
var _polyfillHostContext = '-shadowcsscontext';
var _parenSuffix = ')(?:\\((' +
    '(?:\\([^)(]*\\)|[^)(]*)+?' +
    ')\\))?([^,{]*)';
var _cssColonHostRe = new RegExp('(' + _polyfillHost + _parenSuffix, 'gim');
var _cssColonHostContextRe = new RegExp('(' + _polyfillHostContext + _parenSuffix, 'gim');
var _cssColonSlottedRe = new RegExp('(' + _polyfillSlotted + _parenSuffix, 'gim');
var _polyfillHostNoCombinator = _polyfillHost + '-no-combinator';
var _polyfillHostNoCombinatorRe = /-shadowcsshost-no-combinator([^\s]*)/;
var _shadowDOMSelectorsRe = [
    /::shadow/g,
    /::content/g
];
var _selectorReSuffix = '([>\\s~+\[.,{:][\\s\\S]*)?$';
var _polyfillHostRe = /-shadowcsshost/gim;
var _colonHostRe = /:host/gim;
var _colonSlottedRe = /::slotted/gim;
var _colonHostContextRe = /:host-context/gim;
var _commentRe = /\/\*\s*[\s\S]*?\*\//g;
function stripComments(input) {
    return input.replace(_commentRe, '');
}
var _commentWithHashRe = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g;
function extractCommentsWithHash(input) {
    return input.match(_commentWithHashRe) || [];
}
var _ruleRe = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g;
var _curlyRe = /([{}])/g;
var OPEN_CURLY = '{';
var CLOSE_CURLY = '}';
var BLOCK_PLACEHOLDER = '%BLOCK%';
var CssRule = /** @class */ (function () {
    function CssRule(selector, content) {
        this.selector = selector;
        this.content = content;
    }
    return CssRule;
}());
function processRules(input, ruleCallback) {
    var inputWithEscapedBlocks = escapeBlocks(input);
    var nextBlockIndex = 0;
    return inputWithEscapedBlocks.escapedString.replace(_ruleRe, function () {
        var m = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            m[_i] = arguments[_i];
        }
        var selector = m[2];
        var content = '';
        var suffix = m[4];
        var contentPrefix = '';
        if (suffix && suffix.startsWith('{' + BLOCK_PLACEHOLDER)) {
            content = inputWithEscapedBlocks.blocks[nextBlockIndex++];
            suffix = suffix.substring(BLOCK_PLACEHOLDER.length + 1);
            contentPrefix = '{';
        }
        var rule = ruleCallback(new CssRule(selector, content));
        return "" + m[1] + rule.selector + m[3] + contentPrefix + rule.content + suffix;
    });
}
var StringWithEscapedBlocks = /** @class */ (function () {
    function StringWithEscapedBlocks(escapedString, blocks) {
        this.escapedString = escapedString;
        this.blocks = blocks;
    }
    return StringWithEscapedBlocks;
}());
function escapeBlocks(input) {
    var inputParts = input.split(_curlyRe);
    var resultParts = [];
    var escapedBlocks = [];
    var bracketCount = 0;
    var currentBlockParts = [];
    for (var partIndex = 0; partIndex < inputParts.length; partIndex++) {
        var part = inputParts[partIndex];
        if (part === CLOSE_CURLY) {
            bracketCount--;
        }
        if (bracketCount > 0) {
            currentBlockParts.push(part);
        }
        else {
            if (currentBlockParts.length > 0) {
                escapedBlocks.push(currentBlockParts.join(''));
                resultParts.push(BLOCK_PLACEHOLDER);
                currentBlockParts = [];
            }
            resultParts.push(part);
        }
        if (part === OPEN_CURLY) {
            bracketCount++;
        }
    }
    if (currentBlockParts.length > 0) {
        escapedBlocks.push(currentBlockParts.join(''));
        resultParts.push(BLOCK_PLACEHOLDER);
    }
    return new StringWithEscapedBlocks(resultParts.join(''), escapedBlocks);
}



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW9uaWNvbnMvZGlzdC9lc20vbGVnYWN5L3NoYWRvdy1jc3MtOTg0YmFjNzQtNTQ5YjE2ZGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsa0JBQWtCO0FBQ3ZELHFDQUFxQyxrQkFBa0I7QUFDdkQsaURBQWlELGlDQUFpQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw2Q0FBNkM7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdUJBQXVCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrQiIsImZpbGUiOiI5Ny5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICpcbiAqIFRoaXMgZmlsZSBpcyBhIHBvcnQgb2Ygc2hhZG93Q1NTIGZyb20gd2ViY29tcG9uZW50cy5qcyB0byBUeXBlU2NyaXB0LlxuICogaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzL2Jsb2IvNGVmZWNkN2UwZS9zcmMvU2hhZG93Q1NTL1NoYWRvd0NTUy5qc1xuICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iL21hc3Rlci9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50c1xuICovXG5mdW5jdGlvbiBzY29wZUNzcyhjc3NUZXh0LCBzY29wZUlkLCBjb21tZW50T3JpZ2luYWxTZWxlY3Rvcikge1xuICAgIHZhciBzYyA9IG5ldyBTaGFkb3dDc3MoKTtcbiAgICByZXR1cm4gc2Muc2hpbUNzc1RleHQoY3NzVGV4dCwgc2NvcGVJZCwgc2NvcGVJZCArICctaCcsIHNjb3BlSWQgKyAnLXMnLCBjb21tZW50T3JpZ2luYWxTZWxlY3Rvcik7XG59XG52YXIgU2hhZG93Q3NzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNoYWRvd0NzcygpIHtcbiAgICAgICAgdGhpcy5zdHJpY3RTdHlsaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgU2hhZG93Q3NzLnByb3RvdHlwZS5zaGltQ3NzVGV4dCA9IGZ1bmN0aW9uIChjc3NUZXh0LCBzY29wZUlkLCBob3N0U2NvcGVJZCwgc2xvdFNjb3BlSWQsIGNvbW1lbnRPcmlnaW5hbFNlbGVjdG9yKSB7XG4gICAgICAgIGlmIChob3N0U2NvcGVJZCA9PT0gdm9pZCAwKSB7IGhvc3RTY29wZUlkID0gJyc7IH1cbiAgICAgICAgaWYgKHNsb3RTY29wZUlkID09PSB2b2lkIDApIHsgc2xvdFNjb3BlSWQgPSAnJzsgfVxuICAgICAgICBpZiAoY29tbWVudE9yaWdpbmFsU2VsZWN0b3IgPT09IHZvaWQgMCkgeyBjb21tZW50T3JpZ2luYWxTZWxlY3RvciA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBjb21tZW50c1dpdGhIYXNoID0gZXh0cmFjdENvbW1lbnRzV2l0aEhhc2goY3NzVGV4dCk7XG4gICAgICAgIGNzc1RleHQgPSBzdHJpcENvbW1lbnRzKGNzc1RleHQpO1xuICAgICAgICB2YXIgb3JnU2VsZWN0b3JzID0gW107XG4gICAgICAgIGlmIChjb21tZW50T3JpZ2luYWxTZWxlY3Rvcikge1xuICAgICAgICAgICAgdmFyIHByb2Nlc3NDb21tZW50ZWRTZWxlY3Rvcl8xID0gZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGxhY2Vob2xkZXIgPSBcIi8qIUBfX19cIiArIG9yZ1NlbGVjdG9ycy5sZW5ndGggKyBcIl9fXyovXCI7XG4gICAgICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBcIi8qIUBcIiArIHJ1bGUuc2VsZWN0b3IgKyBcIiovXCI7XG4gICAgICAgICAgICAgICAgb3JnU2VsZWN0b3JzLnB1c2goeyBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsIGNvbW1lbnQ6IGNvbW1lbnQgfSk7XG4gICAgICAgICAgICAgICAgcnVsZS5zZWxlY3RvciA9IHBsYWNlaG9sZGVyICsgcnVsZS5zZWxlY3RvcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjc3NUZXh0ID0gcHJvY2Vzc1J1bGVzKGNzc1RleHQsIGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJ1bGUuc2VsZWN0b3JbMF0gIT09ICdAJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvY2Vzc0NvbW1lbnRlZFNlbGVjdG9yXzEocnVsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJ1bGUuc2VsZWN0b3Iuc3RhcnRzV2l0aCgnQG1lZGlhJykgfHwgcnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKCdAc3VwcG9ydHMnKSB8fFxuICAgICAgICAgICAgICAgICAgICBydWxlLnNlbGVjdG9yLnN0YXJ0c1dpdGgoJ0BwYWdlJykgfHwgcnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKCdAZG9jdW1lbnQnKSkge1xuICAgICAgICAgICAgICAgICAgICBydWxlLmNvbnRlbnQgPSBwcm9jZXNzUnVsZXMocnVsZS5jb250ZW50LCBwcm9jZXNzQ29tbWVudGVkU2VsZWN0b3JfMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzY29wZWRDc3NUZXh0ID0gdGhpcy5fc2NvcGVDc3NUZXh0KGNzc1RleHQsIHNjb3BlSWQsIGhvc3RTY29wZUlkLCBzbG90U2NvcGVJZCwgY29tbWVudE9yaWdpbmFsU2VsZWN0b3IpO1xuICAgICAgICBjc3NUZXh0ID0gW3Njb3BlZENzc1RleHRdLmNvbmNhdChjb21tZW50c1dpdGhIYXNoKS5qb2luKCdcXG4nKTtcbiAgICAgICAgaWYgKGNvbW1lbnRPcmlnaW5hbFNlbGVjdG9yKSB7XG4gICAgICAgICAgICBvcmdTZWxlY3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGxhY2Vob2xkZXIgPSBfYS5wbGFjZWhvbGRlciwgY29tbWVudCA9IF9hLmNvbW1lbnQ7XG4gICAgICAgICAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZShwbGFjZWhvbGRlciwgY29tbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3NzVGV4dDtcbiAgICB9O1xuICAgIFNoYWRvd0Nzcy5wcm90b3R5cGUuX3Njb3BlQ3NzVGV4dCA9IGZ1bmN0aW9uIChjc3NUZXh0LCBzY29wZUlkLCBob3N0U2NvcGVJZCwgc2xvdFNjb3BlSWQsIGNvbW1lbnRPcmlnaW5hbFNlbGVjdG9yKSB7XG4gICAgICAgIC8vIHJlcGxhY2UgOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgLXNoYWRvd2Nzc2hvc3QgYW5kIC1zaGFkb3djc3Nob3N0IHJlc3BlY3RpdmVseVxuICAgICAgICBjc3NUZXh0ID0gdGhpcy5faW5zZXJ0UG9seWZpbGxIb3N0SW5Dc3NUZXh0KGNzc1RleHQpO1xuICAgICAgICBjc3NUZXh0ID0gdGhpcy5fY29udmVydENvbG9uSG9zdChjc3NUZXh0KTtcbiAgICAgICAgY3NzVGV4dCA9IHRoaXMuX2NvbnZlcnRDb2xvbkhvc3RDb250ZXh0KGNzc1RleHQpO1xuICAgICAgICBjc3NUZXh0ID0gdGhpcy5fY29udmVydENvbG9uU2xvdHRlZChjc3NUZXh0LCBzbG90U2NvcGVJZCk7XG4gICAgICAgIGNzc1RleHQgPSB0aGlzLl9jb252ZXJ0U2hhZG93RE9NU2VsZWN0b3JzKGNzc1RleHQpO1xuICAgICAgICBpZiAoc2NvcGVJZCkge1xuICAgICAgICAgICAgY3NzVGV4dCA9IHRoaXMuX3Njb3BlU2VsZWN0b3JzKGNzc1RleHQsIHNjb3BlSWQsIGhvc3RTY29wZUlkLCBzbG90U2NvcGVJZCwgY29tbWVudE9yaWdpbmFsU2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGNzc1RleHQgPSBjc3NUZXh0LnJlcGxhY2UoLy1zaGFkb3djc3Nob3N0LW5vLWNvbWJpbmF0b3IvZywgXCIuXCIgKyBob3N0U2NvcGVJZCk7XG4gICAgICAgIGNzc1RleHQgPSBjc3NUZXh0LnJlcGxhY2UoLz5cXHMqXFwqXFxzKyhbXnssIF0rKS9nbSwgJyAkMSAnKTtcbiAgICAgICAgcmV0dXJuIGNzc1RleHQudHJpbSgpO1xuICAgIH07XG4gICAgLypcbiAgICAgKiBjb252ZXJ0IGEgcnVsZSBsaWtlIDpob3N0KC5mb28pID4gLmJhciB7IH1cbiAgICAgKlxuICAgICAqIHRvXG4gICAgICpcbiAgICAgKiAuZm9vPHNjb3BlTmFtZT4gPiAuYmFyXG4gICAgKi9cbiAgICBTaGFkb3dDc3MucHJvdG90eXBlLl9jb252ZXJ0Q29sb25Ib3N0ID0gZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnZlcnRDb2xvblJ1bGUoY3NzVGV4dCwgX2Nzc0NvbG9uSG9zdFJlLCB0aGlzLl9jb2xvbkhvc3RQYXJ0UmVwbGFjZXIpO1xuICAgIH07XG4gICAgLypcbiAgICogY29udmVydCBhIHJ1bGUgbGlrZSA6OnNsb3R0ZWQoLmZvbykgeyB9XG4gICovXG4gICAgU2hhZG93Q3NzLnByb3RvdHlwZS5fY29udmVydENvbG9uU2xvdHRlZCA9IGZ1bmN0aW9uIChjc3NUZXh0LCBzbG90QXR0cikge1xuICAgICAgICB2YXIgcmVnRXhwID0gX2Nzc0NvbG9uU2xvdHRlZFJlO1xuICAgICAgICByZXR1cm4gY3NzVGV4dC5yZXBsYWNlKHJlZ0V4cCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG0gPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgbVtfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1bMl0pIHtcbiAgICAgICAgICAgICAgICB2YXIgY29tcG91bmQgPSBtWzJdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB2YXIgc3VmZml4ID0gbVszXTtcbiAgICAgICAgICAgICAgICB2YXIgc2VsID0gJy4nICsgc2xvdEF0dHIgKyAnID4gJyArIGNvbXBvdW5kICsgc3VmZml4O1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvciArIG1bM107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLypcbiAgICAgKiBjb252ZXJ0IGEgcnVsZSBsaWtlIDpob3N0LWNvbnRleHQoLmZvbykgPiAuYmFyIHsgfVxuICAgICAqXG4gICAgICogdG9cbiAgICAgKlxuICAgICAqIC5mb288c2NvcGVOYW1lPiA+IC5iYXIsIC5mb28gc2NvcGVOYW1lID4gLmJhciB7IH1cbiAgICAgKlxuICAgICAqIGFuZFxuICAgICAqXG4gICAgICogOmhvc3QtY29udGV4dCguZm9vOmhvc3QpIC5iYXIgeyAuLi4gfVxuICAgICAqXG4gICAgICogdG9cbiAgICAgKlxuICAgICAqIC5mb288c2NvcGVOYW1lPiAuYmFyIHsgLi4uIH1cbiAgICAqL1xuICAgIFNoYWRvd0Nzcy5wcm90b3R5cGUuX2NvbnZlcnRDb2xvbkhvc3RDb250ZXh0ID0gZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnZlcnRDb2xvblJ1bGUoY3NzVGV4dCwgX2Nzc0NvbG9uSG9zdENvbnRleHRSZSwgdGhpcy5fY29sb25Ib3N0Q29udGV4dFBhcnRSZXBsYWNlcik7XG4gICAgfTtcbiAgICBTaGFkb3dDc3MucHJvdG90eXBlLl9jb252ZXJ0Q29sb25SdWxlID0gZnVuY3Rpb24gKGNzc1RleHQsIHJlZ0V4cCwgcGFydFJlcGxhY2VyKSB7XG4gICAgICAgIC8vIG1bMV0gPSA6aG9zdCgtY29udGV4dCksIG1bMl0gPSBjb250ZW50cyBvZiAoKSwgbVszXSByZXN0IG9mIHJ1bGVcbiAgICAgICAgcmV0dXJuIGNzc1RleHQucmVwbGFjZShyZWdFeHAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIG1bX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtWzJdKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnRzID0gbVsyXS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgIHZhciByID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHBhcnRzW2ldLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIHIucHVzaChwYXJ0UmVwbGFjZXIoX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvciwgcCwgbVszXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gci5qb2luKCcsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvciArIG1bM107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2hhZG93Q3NzLnByb3RvdHlwZS5fY29sb25Ib3N0Q29udGV4dFBhcnRSZXBsYWNlciA9IGZ1bmN0aW9uIChob3N0LCBwYXJ0LCBzdWZmaXgpIHtcbiAgICAgICAgaWYgKHBhcnQuaW5kZXhPZihfcG9seWZpbGxIb3N0KSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29sb25Ib3N0UGFydFJlcGxhY2VyKGhvc3QsIHBhcnQsIHN1ZmZpeCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaG9zdCArIHBhcnQgKyBzdWZmaXggKyAnLCAnICsgcGFydCArICcgJyArIGhvc3QgKyBzdWZmaXg7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNoYWRvd0Nzcy5wcm90b3R5cGUuX2NvbG9uSG9zdFBhcnRSZXBsYWNlciA9IGZ1bmN0aW9uIChob3N0LCBwYXJ0LCBzdWZmaXgpIHtcbiAgICAgICAgcmV0dXJuIGhvc3QgKyBwYXJ0LnJlcGxhY2UoX3BvbHlmaWxsSG9zdCwgJycpICsgc3VmZml4O1xuICAgIH07XG4gICAgLypcbiAgICAgKiBDb252ZXJ0IGNvbWJpbmF0b3JzIGxpa2UgOjpzaGFkb3cgYW5kIHBzZXVkby1lbGVtZW50cyBsaWtlIDo6Y29udGVudFxuICAgICAqIGJ5IHJlcGxhY2luZyB3aXRoIHNwYWNlLlxuICAgICovXG4gICAgU2hhZG93Q3NzLnByb3RvdHlwZS5fY29udmVydFNoYWRvd0RPTVNlbGVjdG9ycyA9IGZ1bmN0aW9uIChjc3NUZXh0KSB7XG4gICAgICAgIHJldHVybiBfc2hhZG93RE9NU2VsZWN0b3JzUmUucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIHBhdHRlcm4pIHsgcmV0dXJuIHJlc3VsdC5yZXBsYWNlKHBhdHRlcm4sICcgJyk7IH0sIGNzc1RleHQpO1xuICAgIH07XG4gICAgLy8gY2hhbmdlIGEgc2VsZWN0b3IgbGlrZSAnZGl2JyB0byAnbmFtZSBkaXYnXG4gICAgU2hhZG93Q3NzLnByb3RvdHlwZS5fc2NvcGVTZWxlY3RvcnMgPSBmdW5jdGlvbiAoY3NzVGV4dCwgc2NvcGVTZWxlY3RvciwgaG9zdFNlbGVjdG9yLCBzbG90U2VsZWN0b3IsIGNvbW1lbnRPcmlnaW5hbFNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBwcm9jZXNzUnVsZXMoY3NzVGV4dCwgZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RvciA9IHJ1bGUuc2VsZWN0b3I7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJ1bGUuY29udGVudDtcbiAgICAgICAgICAgIGlmIChydWxlLnNlbGVjdG9yWzBdICE9PSAnQCcpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvciA9XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9zY29wZVNlbGVjdG9yKHJ1bGUuc2VsZWN0b3IsIHNjb3BlU2VsZWN0b3IsIGhvc3RTZWxlY3Rvciwgc2xvdFNlbGVjdG9yLCBfdGhpcy5zdHJpY3RTdHlsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJ1bGUuc2VsZWN0b3Iuc3RhcnRzV2l0aCgnQG1lZGlhJykgfHwgcnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKCdAc3VwcG9ydHMnKSB8fFxuICAgICAgICAgICAgICAgIHJ1bGUuc2VsZWN0b3Iuc3RhcnRzV2l0aCgnQHBhZ2UnKSB8fCBydWxlLnNlbGVjdG9yLnN0YXJ0c1dpdGgoJ0Bkb2N1bWVudCcpKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IF90aGlzLl9zY29wZVNlbGVjdG9ycyhydWxlLmNvbnRlbnQsIHNjb3BlU2VsZWN0b3IsIGhvc3RTZWxlY3Rvciwgc2xvdFNlbGVjdG9yLCBjb21tZW50T3JpZ2luYWxTZWxlY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKS50cmltKCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENzc1J1bGUoc2VsZWN0b3IsIGNvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNoYWRvd0Nzcy5wcm90b3R5cGUuX3Njb3BlU2VsZWN0b3IgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHNjb3BlU2VsZWN0b3IsIGhvc3RTZWxlY3Rvciwgc2xvdFNlbGVjdG9yLCBzdHJpY3QpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yLnNwbGl0KCcsJylcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHNoYWxsb3dQYXJ0KSB7XG4gICAgICAgICAgICBpZiAoc2xvdFNlbGVjdG9yICYmIHNoYWxsb3dQYXJ0LmluZGV4T2YoJy4nICsgc2xvdFNlbGVjdG9yKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNoYWxsb3dQYXJ0LnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfdGhpcy5fc2VsZWN0b3JOZWVkc1Njb3Bpbmcoc2hhbGxvd1BhcnQsIHNjb3BlU2VsZWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0cmljdCA/XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9hcHBseVN0cmljdFNlbGVjdG9yU2NvcGUoc2hhbGxvd1BhcnQsIHNjb3BlU2VsZWN0b3IsIGhvc3RTZWxlY3RvcikudHJpbSgpIDpcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2FwcGx5U2VsZWN0b3JTY29wZShzaGFsbG93UGFydCwgc2NvcGVTZWxlY3RvciwgaG9zdFNlbGVjdG9yKS50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hhbGxvd1BhcnQudHJpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oJywgJyk7XG4gICAgfTtcbiAgICBTaGFkb3dDc3MucHJvdG90eXBlLl9zZWxlY3Rvck5lZWRzU2NvcGluZyA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgc2NvcGVTZWxlY3Rvcikge1xuICAgICAgICB2YXIgcmUgPSB0aGlzLl9tYWtlU2NvcGVNYXRjaGVyKHNjb3BlU2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gIXJlLnRlc3Qoc2VsZWN0b3IpO1xuICAgIH07XG4gICAgU2hhZG93Q3NzLnByb3RvdHlwZS5fbWFrZVNjb3BlTWF0Y2hlciA9IGZ1bmN0aW9uIChzY29wZVNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBscmUgPSAvXFxbL2c7XG4gICAgICAgIHZhciBycmUgPSAvXFxdL2c7XG4gICAgICAgIHNjb3BlU2VsZWN0b3IgPSBzY29wZVNlbGVjdG9yLnJlcGxhY2UobHJlLCAnXFxcXFsnKS5yZXBsYWNlKHJyZSwgJ1xcXFxdJyk7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKCdeKCcgKyBzY29wZVNlbGVjdG9yICsgJyknICsgX3NlbGVjdG9yUmVTdWZmaXgsICdtJyk7XG4gICAgfTtcbiAgICBTaGFkb3dDc3MucHJvdG90eXBlLl9hcHBseVNlbGVjdG9yU2NvcGUgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHNjb3BlU2VsZWN0b3IsIGhvc3RTZWxlY3Rvcikge1xuICAgICAgICAvLyBEaWZmZXJlbmNlIGZyb20gd2ViY29tcG9uZW50cy5qczogc2NvcGVTZWxlY3RvciBjb3VsZCBub3QgYmUgYW4gYXJyYXlcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5U2ltcGxlU2VsZWN0b3JTY29wZShzZWxlY3Rvciwgc2NvcGVTZWxlY3RvciwgaG9zdFNlbGVjdG9yKTtcbiAgICB9O1xuICAgIC8vIHNjb3BlIHZpYSBuYW1lIGFuZCBbaXM9bmFtZV1cbiAgICBTaGFkb3dDc3MucHJvdG90eXBlLl9hcHBseVNpbXBsZVNlbGVjdG9yU2NvcGUgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHNjb3BlU2VsZWN0b3IsIGhvc3RTZWxlY3Rvcikge1xuICAgICAgICAvLyBJbiBBbmRyb2lkIGJyb3dzZXIsIHRoZSBsYXN0SW5kZXggaXMgbm90IHJlc2V0IHdoZW4gdGhlIHJlZ2V4IGlzIHVzZWQgaW4gU3RyaW5nLnJlcGxhY2UoKVxuICAgICAgICBfcG9seWZpbGxIb3N0UmUubGFzdEluZGV4ID0gMDtcbiAgICAgICAgaWYgKF9wb2x5ZmlsbEhvc3RSZS50ZXN0KHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgdmFyIHJlcGxhY2VCeV8xID0gdGhpcy5zdHJpY3RTdHlsaW5nID8gXCIuXCIgKyBob3N0U2VsZWN0b3IgOiBzY29wZVNlbGVjdG9yO1xuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9yXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvclJlLCBmdW5jdGlvbiAoXywgc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3IucmVwbGFjZSgvKFteOl0qKSg6KikoLiopLywgZnVuY3Rpb24gKF8sIGJlZm9yZSwgY29sb24sIGFmdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiZWZvcmUgKyByZXBsYWNlQnlfMSArIGNvbG9uICsgYWZ0ZXI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKF9wb2x5ZmlsbEhvc3RSZSwgcmVwbGFjZUJ5XzEgKyAnICcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzY29wZVNlbGVjdG9yICsgJyAnICsgc2VsZWN0b3I7XG4gICAgfTtcbiAgICBTaGFkb3dDc3MucHJvdG90eXBlLl9hcHBseVN0cmljdFNlbGVjdG9yU2NvcGUgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHNjb3BlU2VsZWN0b3IsIGhvc3RTZWxlY3Rvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgaXNSZSA9IC9cXFtpcz0oW15cXF1dKilcXF0vZztcbiAgICAgICAgc2NvcGVTZWxlY3RvciA9IHNjb3BlU2VsZWN0b3IucmVwbGFjZShpc1JlLCBmdW5jdGlvbiAoXykge1xuICAgICAgICAgICAgdmFyIHBhcnRzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHBhcnRzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzWzBdO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9ICcuJyArIHNjb3BlU2VsZWN0b3I7XG4gICAgICAgIHZhciBfc2NvcGVTZWxlY3RvclBhcnQgPSBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgdmFyIHNjb3BlZFAgPSBwLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICghc2NvcGVkUCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwLmluZGV4T2YoX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvcikgPiAtMSkge1xuICAgICAgICAgICAgICAgIHNjb3BlZFAgPSBfdGhpcy5fYXBwbHlTaW1wbGVTZWxlY3RvclNjb3BlKHAsIHNjb3BlU2VsZWN0b3IsIGhvc3RTZWxlY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgOmhvc3Qgc2luY2UgaXQgc2hvdWxkIGJlIHVubmVjZXNzYXJ5XG4gICAgICAgICAgICAgICAgdmFyIHQgPSBwLnJlcGxhY2UoX3BvbHlmaWxsSG9zdFJlLCAnJyk7XG4gICAgICAgICAgICAgICAgaWYgKHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IHQubWF0Y2goLyhbXjpdKikoOiopKC4qKS8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkUCA9IG1hdGNoZXNbMV0gKyBjbGFzc05hbWUgKyBtYXRjaGVzWzJdICsgbWF0Y2hlc1szXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzY29wZWRQO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgc2FmZUNvbnRlbnQgPSBuZXcgU2FmZVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgc2VsZWN0b3IgPSBzYWZlQ29udGVudC5jb250ZW50KCk7XG4gICAgICAgIHZhciBzY29wZWRTZWxlY3RvciA9ICcnO1xuICAgICAgICB2YXIgc3RhcnRJbmRleCA9IDA7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIHZhciBzZXAgPSAvKCB8PnxcXCt8fig/IT0pKVxccyovZztcbiAgICAgICAgLy8gSWYgYSBzZWxlY3RvciBhcHBlYXJzIGJlZm9yZSA6aG9zdCBpdCBzaG91bGQgbm90IGJlIHNoaW1tZWQgYXMgaXRcbiAgICAgICAgLy8gbWF0Y2hlcyBvbiBhbmNlc3RvciBlbGVtZW50cyBhbmQgbm90IG9uIGVsZW1lbnRzIGluIHRoZSBob3N0J3Mgc2hhZG93XG4gICAgICAgIC8vIGA6aG9zdC1jb250ZXh0KGRpdilgIGlzIHRyYW5zZm9ybWVkIHRvXG4gICAgICAgIC8vIGAtc2hhZG93Y3NzaG9zdC1uby1jb21iaW5hdG9yZGl2LCBkaXYgLXNoYWRvd2Nzc2hvc3Qtbm8tY29tYmluYXRvcmBcbiAgICAgICAgLy8gdGhlIGBkaXZgIGlzIG5vdCBwYXJ0IG9mIHRoZSBjb21wb25lbnQgaW4gdGhlIDJuZCBzZWxlY3RvcnMgYW5kIHNob3VsZCBub3QgYmUgc2NvcGVkLlxuICAgICAgICAvLyBIaXN0b3JpY2FsbHkgYGNvbXBvbmVudC10YWc6aG9zdGAgd2FzIG1hdGNoaW5nIHRoZSBjb21wb25lbnQgc28gd2UgYWxzbyB3YW50IHRvIHByZXNlcnZlXG4gICAgICAgIC8vIHRoaXMgYmVoYXZpb3IgdG8gYXZvaWQgYnJlYWtpbmcgbGVnYWN5IGFwcHMgKGl0IHNob3VsZCBub3QgbWF0Y2gpLlxuICAgICAgICAvLyBUaGUgYmVoYXZpb3Igc2hvdWxkIGJlOlxuICAgICAgICAvLyAtIGB0YWc6aG9zdGAgLT4gYHRhZ1toXWAgKHRoaXMgaXMgdG8gYXZvaWQgYnJlYWtpbmcgbGVnYWN5IGFwcHMsIHNob3VsZCBub3QgbWF0Y2ggYW55dGhpbmcpXG4gICAgICAgIC8vIC0gYHRhZyA6aG9zdGAgLT4gYHRhZyBbaF1gIChgdGFnYCBpcyBub3Qgc2NvcGVkIGJlY2F1c2UgaXQncyBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgICAgICAvLyAgIGA6aG9zdC1jb250ZXh0KHRhZylgKVxuICAgICAgICB2YXIgaGFzSG9zdCA9IHNlbGVjdG9yLmluZGV4T2YoX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvcikgPiAtMTtcbiAgICAgICAgLy8gT25seSBzY29wZSBwYXJ0cyBhZnRlciB0aGUgZmlyc3QgYC1zaGFkb3djc3Nob3N0LW5vLWNvbWJpbmF0b3JgIHdoZW4gaXQgaXMgcHJlc2VudFxuICAgICAgICB2YXIgc2hvdWxkU2NvcGUgPSAhaGFzSG9zdDtcbiAgICAgICAgd2hpbGUgKChyZXMgPSBzZXAuZXhlYyhzZWxlY3RvcikpICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgc2VwYXJhdG9yID0gcmVzWzFdO1xuICAgICAgICAgICAgdmFyIHBhcnRfMSA9IHNlbGVjdG9yLnNsaWNlKHN0YXJ0SW5kZXgsIHJlcy5pbmRleCkudHJpbSgpO1xuICAgICAgICAgICAgc2hvdWxkU2NvcGUgPSBzaG91bGRTY29wZSB8fCBwYXJ0XzEuaW5kZXhPZihfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yKSA+IC0xO1xuICAgICAgICAgICAgdmFyIHNjb3BlZFBhcnQgPSBzaG91bGRTY29wZSA/IF9zY29wZVNlbGVjdG9yUGFydChwYXJ0XzEpIDogcGFydF8xO1xuICAgICAgICAgICAgc2NvcGVkU2VsZWN0b3IgKz0gc2NvcGVkUGFydCArIFwiIFwiICsgc2VwYXJhdG9yICsgXCIgXCI7XG4gICAgICAgICAgICBzdGFydEluZGV4ID0gc2VwLmxhc3RJbmRleDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGFydCA9IHNlbGVjdG9yLnN1YnN0cmluZyhzdGFydEluZGV4KTtcbiAgICAgICAgc2hvdWxkU2NvcGUgPSBzaG91bGRTY29wZSB8fCBwYXJ0LmluZGV4T2YoX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvcikgPiAtMTtcbiAgICAgICAgc2NvcGVkU2VsZWN0b3IgKz0gc2hvdWxkU2NvcGUgPyBfc2NvcGVTZWxlY3RvclBhcnQocGFydCkgOiBwYXJ0O1xuICAgICAgICAvLyByZXBsYWNlIHRoZSBwbGFjZWhvbGRlcnMgd2l0aCB0aGVpciBvcmlnaW5hbCB2YWx1ZXNcbiAgICAgICAgcmV0dXJuIHNhZmVDb250ZW50LnJlc3RvcmUoc2NvcGVkU2VsZWN0b3IpO1xuICAgIH07XG4gICAgU2hhZG93Q3NzLnByb3RvdHlwZS5faW5zZXJ0UG9seWZpbGxIb3N0SW5Dc3NUZXh0ID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3JcbiAgICAgICAgICAgIC5yZXBsYWNlKF9jb2xvbkhvc3RDb250ZXh0UmUsIF9wb2x5ZmlsbEhvc3RDb250ZXh0KVxuICAgICAgICAgICAgLnJlcGxhY2UoX2NvbG9uSG9zdFJlLCBfcG9seWZpbGxIb3N0KVxuICAgICAgICAgICAgLnJlcGxhY2UoX2NvbG9uU2xvdHRlZFJlLCBfcG9seWZpbGxTbG90dGVkKTtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH07XG4gICAgcmV0dXJuIFNoYWRvd0Nzcztcbn0oKSk7XG52YXIgU2FmZVNlbGVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNhZmVTZWxlY3RvcihzZWxlY3Rvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVycyA9IFtdO1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgLy8gUmVwbGFjZXMgYXR0cmlidXRlIHNlbGVjdG9ycyB3aXRoIHBsYWNlaG9sZGVycy5cbiAgICAgICAgLy8gVGhlIFdTIGluIFthdHRyPVwidmEgbHVlXCJdIHdvdWxkIG90aGVyd2lzZSBiZSBpbnRlcnByZXRlZCBhcyBhIHNlbGVjdG9yIHNlcGFyYXRvci5cbiAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKC8oXFxbW15cXF1dKlxcXSkvZywgZnVuY3Rpb24gKF8sIGtlZXApIHtcbiAgICAgICAgICAgIHZhciByZXBsYWNlQnkgPSBcIl9fcGgtXCIgKyBfdGhpcy5pbmRleCArIFwiX19cIjtcbiAgICAgICAgICAgIF90aGlzLnBsYWNlaG9sZGVycy5wdXNoKGtlZXApO1xuICAgICAgICAgICAgX3RoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIHJldHVybiByZXBsYWNlQnk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBSZXBsYWNlcyB0aGUgZXhwcmVzc2lvbiBpbiBgOm50aC1jaGlsZCgybiArIDEpYCB3aXRoIGEgcGxhY2Vob2xkZXIuXG4gICAgICAgIC8vIFdTIGFuZCBcIitcIiB3b3VsZCBvdGhlcndpc2UgYmUgaW50ZXJwcmV0ZWQgYXMgc2VsZWN0b3Igc2VwYXJhdG9ycy5cbiAgICAgICAgdGhpcy5fY29udGVudCA9IHNlbGVjdG9yLnJlcGxhY2UoLyg6bnRoLVstXFx3XSspKFxcKFteKV0rXFwpKS9nLCBmdW5jdGlvbiAoXywgcHNldWRvLCBleHApIHtcbiAgICAgICAgICAgIHZhciByZXBsYWNlQnkgPSBcIl9fcGgtXCIgKyBfdGhpcy5pbmRleCArIFwiX19cIjtcbiAgICAgICAgICAgIF90aGlzLnBsYWNlaG9sZGVycy5wdXNoKGV4cCk7XG4gICAgICAgICAgICBfdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgcmV0dXJuIHBzZXVkbyArIHJlcGxhY2VCeTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFNhZmVTZWxlY3Rvci5wcm90b3R5cGUucmVzdG9yZSA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBjb250ZW50LnJlcGxhY2UoL19fcGgtKFxcZCspX18vZywgZnVuY3Rpb24gKF8sIGluZGV4KSB7IHJldHVybiBfdGhpcy5wbGFjZWhvbGRlcnNbK2luZGV4XTsgfSk7XG4gICAgfTtcbiAgICBTYWZlU2VsZWN0b3IucHJvdG90eXBlLmNvbnRlbnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9jb250ZW50OyB9O1xuICAgIHJldHVybiBTYWZlU2VsZWN0b3I7XG59KCkpO1xudmFyIF9wb2x5ZmlsbEhvc3QgPSAnLXNoYWRvd2Nzc2hvc3QnO1xudmFyIF9wb2x5ZmlsbFNsb3R0ZWQgPSAnLXNoYWRvd2Nzc3Nsb3R0ZWQnO1xuLy8gbm90ZTogOmhvc3QtY29udGV4dCBwcmUtcHJvY2Vzc2VkIHRvIC1zaGFkb3djc3Nob3N0Y29udGV4dC5cbnZhciBfcG9seWZpbGxIb3N0Q29udGV4dCA9ICctc2hhZG93Y3NzY29udGV4dCc7XG52YXIgX3BhcmVuU3VmZml4ID0gJykoPzpcXFxcKCgnICtcbiAgICAnKD86XFxcXChbXikoXSpcXFxcKXxbXikoXSopKz8nICtcbiAgICAnKVxcXFwpKT8oW14se10qKSc7XG52YXIgX2Nzc0NvbG9uSG9zdFJlID0gbmV3IFJlZ0V4cCgnKCcgKyBfcG9seWZpbGxIb3N0ICsgX3BhcmVuU3VmZml4LCAnZ2ltJyk7XG52YXIgX2Nzc0NvbG9uSG9zdENvbnRleHRSZSA9IG5ldyBSZWdFeHAoJygnICsgX3BvbHlmaWxsSG9zdENvbnRleHQgKyBfcGFyZW5TdWZmaXgsICdnaW0nKTtcbnZhciBfY3NzQ29sb25TbG90dGVkUmUgPSBuZXcgUmVnRXhwKCcoJyArIF9wb2x5ZmlsbFNsb3R0ZWQgKyBfcGFyZW5TdWZmaXgsICdnaW0nKTtcbnZhciBfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yID0gX3BvbHlmaWxsSG9zdCArICctbm8tY29tYmluYXRvcic7XG52YXIgX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvclJlID0gLy1zaGFkb3djc3Nob3N0LW5vLWNvbWJpbmF0b3IoW15cXHNdKikvO1xudmFyIF9zaGFkb3dET01TZWxlY3RvcnNSZSA9IFtcbiAgICAvOjpzaGFkb3cvZyxcbiAgICAvOjpjb250ZW50L2dcbl07XG52YXIgX3NlbGVjdG9yUmVTdWZmaXggPSAnKFs+XFxcXHN+K1xcWy4sezpdW1xcXFxzXFxcXFNdKik/JCc7XG52YXIgX3BvbHlmaWxsSG9zdFJlID0gLy1zaGFkb3djc3Nob3N0L2dpbTtcbnZhciBfY29sb25Ib3N0UmUgPSAvOmhvc3QvZ2ltO1xudmFyIF9jb2xvblNsb3R0ZWRSZSA9IC86OnNsb3R0ZWQvZ2ltO1xudmFyIF9jb2xvbkhvc3RDb250ZXh0UmUgPSAvOmhvc3QtY29udGV4dC9naW07XG52YXIgX2NvbW1lbnRSZSA9IC9cXC9cXCpcXHMqW1xcc1xcU10qP1xcKlxcLy9nO1xuZnVuY3Rpb24gc3RyaXBDb21tZW50cyhpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKF9jb21tZW50UmUsICcnKTtcbn1cbnZhciBfY29tbWVudFdpdGhIYXNoUmUgPSAvXFwvXFwqXFxzKiNcXHMqc291cmNlKE1hcHBpbmcpP1VSTD1bXFxzXFxTXSs/XFwqXFwvL2c7XG5mdW5jdGlvbiBleHRyYWN0Q29tbWVudHNXaXRoSGFzaChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC5tYXRjaChfY29tbWVudFdpdGhIYXNoUmUpIHx8IFtdO1xufVxudmFyIF9ydWxlUmUgPSAvKFxccyopKFteO1xce1xcfV0rPykoXFxzKikoKD86eyVCTE9DSyV9P1xccyo7Pyl8KD86XFxzKjspKS9nO1xudmFyIF9jdXJseVJlID0gLyhbe31dKS9nO1xudmFyIE9QRU5fQ1VSTFkgPSAneyc7XG52YXIgQ0xPU0VfQ1VSTFkgPSAnfSc7XG52YXIgQkxPQ0tfUExBQ0VIT0xERVIgPSAnJUJMT0NLJSc7XG52YXIgQ3NzUnVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDc3NSdWxlKHNlbGVjdG9yLCBjb250ZW50KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB9XG4gICAgcmV0dXJuIENzc1J1bGU7XG59KCkpO1xuZnVuY3Rpb24gcHJvY2Vzc1J1bGVzKGlucHV0LCBydWxlQ2FsbGJhY2spIHtcbiAgICB2YXIgaW5wdXRXaXRoRXNjYXBlZEJsb2NrcyA9IGVzY2FwZUJsb2NrcyhpbnB1dCk7XG4gICAgdmFyIG5leHRCbG9ja0luZGV4ID0gMDtcbiAgICByZXR1cm4gaW5wdXRXaXRoRXNjYXBlZEJsb2Nrcy5lc2NhcGVkU3RyaW5nLnJlcGxhY2UoX3J1bGVSZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgbVtfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZWxlY3RvciA9IG1bMl07XG4gICAgICAgIHZhciBjb250ZW50ID0gJyc7XG4gICAgICAgIHZhciBzdWZmaXggPSBtWzRdO1xuICAgICAgICB2YXIgY29udGVudFByZWZpeCA9ICcnO1xuICAgICAgICBpZiAoc3VmZml4ICYmIHN1ZmZpeC5zdGFydHNXaXRoKCd7JyArIEJMT0NLX1BMQUNFSE9MREVSKSkge1xuICAgICAgICAgICAgY29udGVudCA9IGlucHV0V2l0aEVzY2FwZWRCbG9ja3MuYmxvY2tzW25leHRCbG9ja0luZGV4KytdO1xuICAgICAgICAgICAgc3VmZml4ID0gc3VmZml4LnN1YnN0cmluZyhCTE9DS19QTEFDRUhPTERFUi5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIGNvbnRlbnRQcmVmaXggPSAneyc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJ1bGUgPSBydWxlQ2FsbGJhY2sobmV3IENzc1J1bGUoc2VsZWN0b3IsIGNvbnRlbnQpKTtcbiAgICAgICAgcmV0dXJuIFwiXCIgKyBtWzFdICsgcnVsZS5zZWxlY3RvciArIG1bM10gKyBjb250ZW50UHJlZml4ICsgcnVsZS5jb250ZW50ICsgc3VmZml4O1xuICAgIH0pO1xufVxudmFyIFN0cmluZ1dpdGhFc2NhcGVkQmxvY2tzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0cmluZ1dpdGhFc2NhcGVkQmxvY2tzKGVzY2FwZWRTdHJpbmcsIGJsb2Nrcykge1xuICAgICAgICB0aGlzLmVzY2FwZWRTdHJpbmcgPSBlc2NhcGVkU3RyaW5nO1xuICAgICAgICB0aGlzLmJsb2NrcyA9IGJsb2NrcztcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZ1dpdGhFc2NhcGVkQmxvY2tzO1xufSgpKTtcbmZ1bmN0aW9uIGVzY2FwZUJsb2NrcyhpbnB1dCkge1xuICAgIHZhciBpbnB1dFBhcnRzID0gaW5wdXQuc3BsaXQoX2N1cmx5UmUpO1xuICAgIHZhciByZXN1bHRQYXJ0cyA9IFtdO1xuICAgIHZhciBlc2NhcGVkQmxvY2tzID0gW107XG4gICAgdmFyIGJyYWNrZXRDb3VudCA9IDA7XG4gICAgdmFyIGN1cnJlbnRCbG9ja1BhcnRzID0gW107XG4gICAgZm9yICh2YXIgcGFydEluZGV4ID0gMDsgcGFydEluZGV4IDwgaW5wdXRQYXJ0cy5sZW5ndGg7IHBhcnRJbmRleCsrKSB7XG4gICAgICAgIHZhciBwYXJ0ID0gaW5wdXRQYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgICBpZiAocGFydCA9PT0gQ0xPU0VfQ1VSTFkpIHtcbiAgICAgICAgICAgIGJyYWNrZXRDb3VudC0tO1xuICAgICAgICB9XG4gICAgICAgIGlmIChicmFja2V0Q291bnQgPiAwKSB7XG4gICAgICAgICAgICBjdXJyZW50QmxvY2tQYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRCbG9ja1BhcnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBlc2NhcGVkQmxvY2tzLnB1c2goY3VycmVudEJsb2NrUGFydHMuam9pbignJykpO1xuICAgICAgICAgICAgICAgIHJlc3VsdFBhcnRzLnB1c2goQkxPQ0tfUExBQ0VIT0xERVIpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRCbG9ja1BhcnRzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRQYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJ0ID09PSBPUEVOX0NVUkxZKSB7XG4gICAgICAgICAgICBicmFja2V0Q291bnQrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY3VycmVudEJsb2NrUGFydHMubGVuZ3RoID4gMCkge1xuICAgICAgICBlc2NhcGVkQmxvY2tzLnB1c2goY3VycmVudEJsb2NrUGFydHMuam9pbignJykpO1xuICAgICAgICByZXN1bHRQYXJ0cy5wdXNoKEJMT0NLX1BMQUNFSE9MREVSKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTdHJpbmdXaXRoRXNjYXBlZEJsb2NrcyhyZXN1bHRQYXJ0cy5qb2luKCcnKSwgZXNjYXBlZEJsb2Nrcyk7XG59XG5leHBvcnQgeyBTaGFkb3dDc3MsIHNjb3BlQ3NzIH07XG4iXSwic291cmNlUm9vdCI6IiJ9