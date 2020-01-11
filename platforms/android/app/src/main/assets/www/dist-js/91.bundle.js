(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/shadow-css-4889ae62-23996f3f.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/shadow-css-4889ae62-23996f3f.js ***!
  \*******************************************************************************/
/*! exports provided: scopeCss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scopeCss", function() { return scopeCss; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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
var safeSelector = function (selector) {
    var placeholders = [];
    var index = 0;
    var content;
    // Replaces attribute selectors with placeholders.
    // The WS in [attr="va lue"] would otherwise be interpreted as a selector separator.
    selector = selector.replace(/(\[[^\]]*\])/g, function (_, keep) {
        var replaceBy = "__ph-" + index + "__";
        placeholders.push(keep);
        index++;
        return replaceBy;
    });
    // Replaces the expression in `:nth-child(2n + 1)` with a placeholder.
    // WS and "+" would otherwise be interpreted as selector separators.
    content = selector.replace(/(:nth-[-\w]+)(\([^)]+\))/g, function (_, pseudo, exp) {
        var replaceBy = "__ph-" + index + "__";
        placeholders.push(exp);
        index++;
        return pseudo + replaceBy;
    });
    var ss = {
        content: content,
        placeholders: placeholders,
    };
    return ss;
};
var restoreSafeSelector = function (placeholders, content) {
    return content.replace(/__ph-(\d+)__/g, function (_, index) { return placeholders[+index]; });
};
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
var stripComments = function (input) {
    return input.replace(_commentRe, '');
};
var _commentWithHashRe = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g;
var extractCommentsWithHash = function (input) {
    return input.match(_commentWithHashRe) || [];
};
var _ruleRe = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g;
var _curlyRe = /([{}])/g;
var OPEN_CURLY = '{';
var CLOSE_CURLY = '}';
var BLOCK_PLACEHOLDER = '%BLOCK%';
var processRules = function (input, ruleCallback) {
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
        var cssRule = {
            selector: selector,
            content: content
        };
        var rule = ruleCallback(cssRule);
        return "" + m[1] + rule.selector + m[3] + contentPrefix + rule.content + suffix;
    });
};
var escapeBlocks = function (input) {
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
    var strEscapedBlocks = {
        escapedString: resultParts.join(''),
        blocks: escapedBlocks
    };
    return strEscapedBlocks;
};
var insertPolyfillHostInCssText = function (selector) {
    selector = selector
        .replace(_colonHostContextRe, _polyfillHostContext)
        .replace(_colonHostRe, _polyfillHost)
        .replace(_colonSlottedRe, _polyfillSlotted);
    return selector;
};
var convertColonRule = function (cssText, regExp, partReplacer) {
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
var colonHostPartReplacer = function (host, part, suffix) {
    return host + part.replace(_polyfillHost, '') + suffix;
};
var convertColonHost = function (cssText) {
    return convertColonRule(cssText, _cssColonHostRe, colonHostPartReplacer);
};
var colonHostContextPartReplacer = function (host, part, suffix) {
    if (part.indexOf(_polyfillHost) > -1) {
        return colonHostPartReplacer(host, part, suffix);
    }
    else {
        return host + part + suffix + ', ' + part + ' ' + host + suffix;
    }
};
var convertColonSlotted = function (cssText, slotAttr) {
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
var convertColonHostContext = function (cssText) {
    return convertColonRule(cssText, _cssColonHostContextRe, colonHostContextPartReplacer);
};
var convertShadowDOMSelectors = function (cssText) {
    return _shadowDOMSelectorsRe.reduce(function (result, pattern) { return result.replace(pattern, ' '); }, cssText);
};
var makeScopeMatcher = function (scopeSelector) {
    var lre = /\[/g;
    var rre = /\]/g;
    scopeSelector = scopeSelector.replace(lre, '\\[').replace(rre, '\\]');
    return new RegExp('^(' + scopeSelector + ')' + _selectorReSuffix, 'm');
};
var selectorNeedsScoping = function (selector, scopeSelector) {
    var re = makeScopeMatcher(scopeSelector);
    return !re.test(selector);
};
var applySimpleSelectorScope = function (selector, scopeSelector, hostSelector) {
    // In Android browser, the lastIndex is not reset when the regex is used in String.replace()
    _polyfillHostRe.lastIndex = 0;
    if (_polyfillHostRe.test(selector)) {
        var replaceBy_1 = "." + hostSelector;
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
var applyStrictSelectorScope = function (selector, scopeSelector, hostSelector) {
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
            scopedP = applySimpleSelectorScope(p, scopeSelector, hostSelector);
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
    var safeContent = safeSelector(selector);
    selector = safeContent.content;
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
    return restoreSafeSelector(safeContent.placeholders, scopedSelector);
};
var scopeSelector = function (selector, scopeSelectorText, hostSelector, slotSelector) {
    return selector.split(',')
        .map(function (shallowPart) {
        if (slotSelector && shallowPart.indexOf('.' + slotSelector) > -1) {
            return shallowPart.trim();
        }
        if (selectorNeedsScoping(shallowPart, scopeSelectorText)) {
            return applyStrictSelectorScope(shallowPart, scopeSelectorText, hostSelector).trim();
        }
        else {
            return shallowPart.trim();
        }
    })
        .join(', ');
};
var scopeSelectors = function (cssText, scopeSelectorText, hostSelector, slotSelector, commentOriginalSelector) {
    return processRules(cssText, function (rule) {
        var selector = rule.selector;
        var content = rule.content;
        if (rule.selector[0] !== '@') {
            selector = scopeSelector(rule.selector, scopeSelectorText, hostSelector, slotSelector);
        }
        else if (rule.selector.startsWith('@media') || rule.selector.startsWith('@supports') ||
            rule.selector.startsWith('@page') || rule.selector.startsWith('@document')) {
            content = scopeSelectors(rule.content, scopeSelectorText, hostSelector, slotSelector);
        }
        var cssRule = {
            selector: selector.replace(/\s{2,}/g, ' ').trim(),
            content: content
        };
        return cssRule;
    });
};
var scopeCssText = function (cssText, scopeId, hostScopeId, slotScopeId, commentOriginalSelector) {
    cssText = insertPolyfillHostInCssText(cssText);
    cssText = convertColonHost(cssText);
    cssText = convertColonHostContext(cssText);
    cssText = convertColonSlotted(cssText, slotScopeId);
    cssText = convertShadowDOMSelectors(cssText);
    if (scopeId) {
        cssText = scopeSelectors(cssText, scopeId, hostScopeId, slotScopeId);
    }
    cssText = cssText.replace(/-shadowcsshost-no-combinator/g, "." + hostScopeId);
    cssText = cssText.replace(/>\s*\*\s+([^{, ]+)/gm, ' $1 ');
    return cssText.trim();
};
var scopeCss = function (cssText, scopeId, commentOriginalSelector) {
    var hostScopeId = scopeId + '-h';
    var slotScopeId = scopeId + '-s';
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
    var scopedCssText = scopeCssText(cssText, scopeId, hostScopeId, slotScopeId);
    cssText = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([scopedCssText], commentsWithHash).join('\n');
    if (commentOriginalSelector) {
        orgSelectors.forEach(function (_a) {
            var placeholder = _a.placeholder, comment = _a.comment;
            cssText = cssText.replace(placeholder, comment);
        });
    }
    return cssText;
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20tZXM1L3NoYWRvdy1jc3MtNDg4OWFlNjItMjM5OTZmM2YuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSw2QkFBNkIsRUFBRTtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLEVBQUUsRUFBRSxjQUFjLFFBQVEsS0FBSyxVQUFVO0FBQ2pFLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkIsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLHFDQUFxQyxFQUFFO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLEdBQUc7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDZDQUE2QztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsY0FBYyw0REFBYztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDb0IiLCJmaWxlIjoiOTEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX19zcHJlYWRBcnJheXMgfSBmcm9tIFwidHNsaWJcIjtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKlxuICogVGhpcyBmaWxlIGlzIGEgcG9ydCBvZiBzaGFkb3dDU1MgZnJvbSB3ZWJjb21wb25lbnRzLmpzIHRvIFR5cGVTY3JpcHQuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMvYmxvYi80ZWZlY2Q3ZTBlL3NyYy9TaGFkb3dDU1MvU2hhZG93Q1NTLmpzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzXG4gKi9cbnZhciBzYWZlU2VsZWN0b3IgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICB2YXIgcGxhY2Vob2xkZXJzID0gW107XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgY29udGVudDtcbiAgICAvLyBSZXBsYWNlcyBhdHRyaWJ1dGUgc2VsZWN0b3JzIHdpdGggcGxhY2Vob2xkZXJzLlxuICAgIC8vIFRoZSBXUyBpbiBbYXR0cj1cInZhIGx1ZVwiXSB3b3VsZCBvdGhlcndpc2UgYmUgaW50ZXJwcmV0ZWQgYXMgYSBzZWxlY3RvciBzZXBhcmF0b3IuXG4gICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKC8oXFxbW15cXF1dKlxcXSkvZywgZnVuY3Rpb24gKF8sIGtlZXApIHtcbiAgICAgICAgdmFyIHJlcGxhY2VCeSA9IFwiX19waC1cIiArIGluZGV4ICsgXCJfX1wiO1xuICAgICAgICBwbGFjZWhvbGRlcnMucHVzaChrZWVwKTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VCeTtcbiAgICB9KTtcbiAgICAvLyBSZXBsYWNlcyB0aGUgZXhwcmVzc2lvbiBpbiBgOm50aC1jaGlsZCgybiArIDEpYCB3aXRoIGEgcGxhY2Vob2xkZXIuXG4gICAgLy8gV1MgYW5kIFwiK1wiIHdvdWxkIG90aGVyd2lzZSBiZSBpbnRlcnByZXRlZCBhcyBzZWxlY3RvciBzZXBhcmF0b3JzLlxuICAgIGNvbnRlbnQgPSBzZWxlY3Rvci5yZXBsYWNlKC8oOm50aC1bLVxcd10rKShcXChbXildK1xcKSkvZywgZnVuY3Rpb24gKF8sIHBzZXVkbywgZXhwKSB7XG4gICAgICAgIHZhciByZXBsYWNlQnkgPSBcIl9fcGgtXCIgKyBpbmRleCArIFwiX19cIjtcbiAgICAgICAgcGxhY2Vob2xkZXJzLnB1c2goZXhwKTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgcmV0dXJuIHBzZXVkbyArIHJlcGxhY2VCeTtcbiAgICB9KTtcbiAgICB2YXIgc3MgPSB7XG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgIHBsYWNlaG9sZGVyczogcGxhY2Vob2xkZXJzLFxuICAgIH07XG4gICAgcmV0dXJuIHNzO1xufTtcbnZhciByZXN0b3JlU2FmZVNlbGVjdG9yID0gZnVuY3Rpb24gKHBsYWNlaG9sZGVycywgY29udGVudCkge1xuICAgIHJldHVybiBjb250ZW50LnJlcGxhY2UoL19fcGgtKFxcZCspX18vZywgZnVuY3Rpb24gKF8sIGluZGV4KSB7IHJldHVybiBwbGFjZWhvbGRlcnNbK2luZGV4XTsgfSk7XG59O1xudmFyIF9wb2x5ZmlsbEhvc3QgPSAnLXNoYWRvd2Nzc2hvc3QnO1xudmFyIF9wb2x5ZmlsbFNsb3R0ZWQgPSAnLXNoYWRvd2Nzc3Nsb3R0ZWQnO1xuLy8gbm90ZTogOmhvc3QtY29udGV4dCBwcmUtcHJvY2Vzc2VkIHRvIC1zaGFkb3djc3Nob3N0Y29udGV4dC5cbnZhciBfcG9seWZpbGxIb3N0Q29udGV4dCA9ICctc2hhZG93Y3NzY29udGV4dCc7XG52YXIgX3BhcmVuU3VmZml4ID0gJykoPzpcXFxcKCgnICtcbiAgICAnKD86XFxcXChbXikoXSpcXFxcKXxbXikoXSopKz8nICtcbiAgICAnKVxcXFwpKT8oW14se10qKSc7XG52YXIgX2Nzc0NvbG9uSG9zdFJlID0gbmV3IFJlZ0V4cCgnKCcgKyBfcG9seWZpbGxIb3N0ICsgX3BhcmVuU3VmZml4LCAnZ2ltJyk7XG52YXIgX2Nzc0NvbG9uSG9zdENvbnRleHRSZSA9IG5ldyBSZWdFeHAoJygnICsgX3BvbHlmaWxsSG9zdENvbnRleHQgKyBfcGFyZW5TdWZmaXgsICdnaW0nKTtcbnZhciBfY3NzQ29sb25TbG90dGVkUmUgPSBuZXcgUmVnRXhwKCcoJyArIF9wb2x5ZmlsbFNsb3R0ZWQgKyBfcGFyZW5TdWZmaXgsICdnaW0nKTtcbnZhciBfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yID0gX3BvbHlmaWxsSG9zdCArICctbm8tY29tYmluYXRvcic7XG52YXIgX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvclJlID0gLy1zaGFkb3djc3Nob3N0LW5vLWNvbWJpbmF0b3IoW15cXHNdKikvO1xudmFyIF9zaGFkb3dET01TZWxlY3RvcnNSZSA9IFtcbiAgICAvOjpzaGFkb3cvZyxcbiAgICAvOjpjb250ZW50L2dcbl07XG52YXIgX3NlbGVjdG9yUmVTdWZmaXggPSAnKFs+XFxcXHN+K1xcWy4sezpdW1xcXFxzXFxcXFNdKik/JCc7XG52YXIgX3BvbHlmaWxsSG9zdFJlID0gLy1zaGFkb3djc3Nob3N0L2dpbTtcbnZhciBfY29sb25Ib3N0UmUgPSAvOmhvc3QvZ2ltO1xudmFyIF9jb2xvblNsb3R0ZWRSZSA9IC86OnNsb3R0ZWQvZ2ltO1xudmFyIF9jb2xvbkhvc3RDb250ZXh0UmUgPSAvOmhvc3QtY29udGV4dC9naW07XG52YXIgX2NvbW1lbnRSZSA9IC9cXC9cXCpcXHMqW1xcc1xcU10qP1xcKlxcLy9nO1xudmFyIHN0cmlwQ29tbWVudHMgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZShfY29tbWVudFJlLCAnJyk7XG59O1xudmFyIF9jb21tZW50V2l0aEhhc2hSZSA9IC9cXC9cXCpcXHMqI1xccypzb3VyY2UoTWFwcGluZyk/VVJMPVtcXHNcXFNdKz9cXCpcXC8vZztcbnZhciBleHRyYWN0Q29tbWVudHNXaXRoSGFzaCA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC5tYXRjaChfY29tbWVudFdpdGhIYXNoUmUpIHx8IFtdO1xufTtcbnZhciBfcnVsZVJlID0gLyhcXHMqKShbXjtcXHtcXH1dKz8pKFxccyopKCg/OnslQkxPQ0slfT9cXHMqOz8pfCg/Olxccyo7KSkvZztcbnZhciBfY3VybHlSZSA9IC8oW3t9XSkvZztcbnZhciBPUEVOX0NVUkxZID0gJ3snO1xudmFyIENMT1NFX0NVUkxZID0gJ30nO1xudmFyIEJMT0NLX1BMQUNFSE9MREVSID0gJyVCTE9DSyUnO1xudmFyIHByb2Nlc3NSdWxlcyA9IGZ1bmN0aW9uIChpbnB1dCwgcnVsZUNhbGxiYWNrKSB7XG4gICAgdmFyIGlucHV0V2l0aEVzY2FwZWRCbG9ja3MgPSBlc2NhcGVCbG9ja3MoaW5wdXQpO1xuICAgIHZhciBuZXh0QmxvY2tJbmRleCA9IDA7XG4gICAgcmV0dXJuIGlucHV0V2l0aEVzY2FwZWRCbG9ja3MuZXNjYXBlZFN0cmluZy5yZXBsYWNlKF9ydWxlUmUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG0gPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG1bX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZWN0b3IgPSBtWzJdO1xuICAgICAgICB2YXIgY29udGVudCA9ICcnO1xuICAgICAgICB2YXIgc3VmZml4ID0gbVs0XTtcbiAgICAgICAgdmFyIGNvbnRlbnRQcmVmaXggPSAnJztcbiAgICAgICAgaWYgKHN1ZmZpeCAmJiBzdWZmaXguc3RhcnRzV2l0aCgneycgKyBCTE9DS19QTEFDRUhPTERFUikpIHtcbiAgICAgICAgICAgIGNvbnRlbnQgPSBpbnB1dFdpdGhFc2NhcGVkQmxvY2tzLmJsb2Nrc1tuZXh0QmxvY2tJbmRleCsrXTtcbiAgICAgICAgICAgIHN1ZmZpeCA9IHN1ZmZpeC5zdWJzdHJpbmcoQkxPQ0tfUExBQ0VIT0xERVIubGVuZ3RoICsgMSk7XG4gICAgICAgICAgICBjb250ZW50UHJlZml4ID0gJ3snO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjc3NSdWxlID0ge1xuICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxuICAgICAgICAgICAgY29udGVudDogY29udGVudFxuICAgICAgICB9O1xuICAgICAgICB2YXIgcnVsZSA9IHJ1bGVDYWxsYmFjayhjc3NSdWxlKTtcbiAgICAgICAgcmV0dXJuIFwiXCIgKyBtWzFdICsgcnVsZS5zZWxlY3RvciArIG1bM10gKyBjb250ZW50UHJlZml4ICsgcnVsZS5jb250ZW50ICsgc3VmZml4O1xuICAgIH0pO1xufTtcbnZhciBlc2NhcGVCbG9ja3MgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICB2YXIgaW5wdXRQYXJ0cyA9IGlucHV0LnNwbGl0KF9jdXJseVJlKTtcbiAgICB2YXIgcmVzdWx0UGFydHMgPSBbXTtcbiAgICB2YXIgZXNjYXBlZEJsb2NrcyA9IFtdO1xuICAgIHZhciBicmFja2V0Q291bnQgPSAwO1xuICAgIHZhciBjdXJyZW50QmxvY2tQYXJ0cyA9IFtdO1xuICAgIGZvciAodmFyIHBhcnRJbmRleCA9IDA7IHBhcnRJbmRleCA8IGlucHV0UGFydHMubGVuZ3RoOyBwYXJ0SW5kZXgrKykge1xuICAgICAgICB2YXIgcGFydCA9IGlucHV0UGFydHNbcGFydEluZGV4XTtcbiAgICAgICAgaWYgKHBhcnQgPT09IENMT1NFX0NVUkxZKSB7XG4gICAgICAgICAgICBicmFja2V0Q291bnQtLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnJhY2tldENvdW50ID4gMCkge1xuICAgICAgICAgICAgY3VycmVudEJsb2NrUGFydHMucHVzaChwYXJ0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50QmxvY2tQYXJ0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZXNjYXBlZEJsb2Nrcy5wdXNoKGN1cnJlbnRCbG9ja1BhcnRzLmpvaW4oJycpKTtcbiAgICAgICAgICAgICAgICByZXN1bHRQYXJ0cy5wdXNoKEJMT0NLX1BMQUNFSE9MREVSKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50QmxvY2tQYXJ0cyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0UGFydHMucHVzaChwYXJ0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFydCA9PT0gT1BFTl9DVVJMWSkge1xuICAgICAgICAgICAgYnJhY2tldENvdW50Kys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGN1cnJlbnRCbG9ja1BhcnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZXNjYXBlZEJsb2Nrcy5wdXNoKGN1cnJlbnRCbG9ja1BhcnRzLmpvaW4oJycpKTtcbiAgICAgICAgcmVzdWx0UGFydHMucHVzaChCTE9DS19QTEFDRUhPTERFUik7XG4gICAgfVxuICAgIHZhciBzdHJFc2NhcGVkQmxvY2tzID0ge1xuICAgICAgICBlc2NhcGVkU3RyaW5nOiByZXN1bHRQYXJ0cy5qb2luKCcnKSxcbiAgICAgICAgYmxvY2tzOiBlc2NhcGVkQmxvY2tzXG4gICAgfTtcbiAgICByZXR1cm4gc3RyRXNjYXBlZEJsb2Nrcztcbn07XG52YXIgaW5zZXJ0UG9seWZpbGxIb3N0SW5Dc3NUZXh0ID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgc2VsZWN0b3IgPSBzZWxlY3RvclxuICAgICAgICAucmVwbGFjZShfY29sb25Ib3N0Q29udGV4dFJlLCBfcG9seWZpbGxIb3N0Q29udGV4dClcbiAgICAgICAgLnJlcGxhY2UoX2NvbG9uSG9zdFJlLCBfcG9seWZpbGxIb3N0KVxuICAgICAgICAucmVwbGFjZShfY29sb25TbG90dGVkUmUsIF9wb2x5ZmlsbFNsb3R0ZWQpO1xuICAgIHJldHVybiBzZWxlY3Rvcjtcbn07XG52YXIgY29udmVydENvbG9uUnVsZSA9IGZ1bmN0aW9uIChjc3NUZXh0LCByZWdFeHAsIHBhcnRSZXBsYWNlcikge1xuICAgIC8vIG1bMV0gPSA6aG9zdCgtY29udGV4dCksIG1bMl0gPSBjb250ZW50cyBvZiAoKSwgbVszXSByZXN0IG9mIHJ1bGVcbiAgICByZXR1cm4gY3NzVGV4dC5yZXBsYWNlKHJlZ0V4cCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgbVtfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtWzJdKSB7XG4gICAgICAgICAgICB2YXIgcGFydHMgPSBtWzJdLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICB2YXIgciA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBwID0gcGFydHNbaV0udHJpbSgpO1xuICAgICAgICAgICAgICAgIGlmICghcClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgci5wdXNoKHBhcnRSZXBsYWNlcihfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yLCBwLCBtWzNdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gci5qb2luKCcsJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvciArIG1bM107XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG52YXIgY29sb25Ib3N0UGFydFJlcGxhY2VyID0gZnVuY3Rpb24gKGhvc3QsIHBhcnQsIHN1ZmZpeCkge1xuICAgIHJldHVybiBob3N0ICsgcGFydC5yZXBsYWNlKF9wb2x5ZmlsbEhvc3QsICcnKSArIHN1ZmZpeDtcbn07XG52YXIgY29udmVydENvbG9uSG9zdCA9IGZ1bmN0aW9uIChjc3NUZXh0KSB7XG4gICAgcmV0dXJuIGNvbnZlcnRDb2xvblJ1bGUoY3NzVGV4dCwgX2Nzc0NvbG9uSG9zdFJlLCBjb2xvbkhvc3RQYXJ0UmVwbGFjZXIpO1xufTtcbnZhciBjb2xvbkhvc3RDb250ZXh0UGFydFJlcGxhY2VyID0gZnVuY3Rpb24gKGhvc3QsIHBhcnQsIHN1ZmZpeCkge1xuICAgIGlmIChwYXJ0LmluZGV4T2YoX3BvbHlmaWxsSG9zdCkgPiAtMSkge1xuICAgICAgICByZXR1cm4gY29sb25Ib3N0UGFydFJlcGxhY2VyKGhvc3QsIHBhcnQsIHN1ZmZpeCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gaG9zdCArIHBhcnQgKyBzdWZmaXggKyAnLCAnICsgcGFydCArICcgJyArIGhvc3QgKyBzdWZmaXg7XG4gICAgfVxufTtcbnZhciBjb252ZXJ0Q29sb25TbG90dGVkID0gZnVuY3Rpb24gKGNzc1RleHQsIHNsb3RBdHRyKSB7XG4gICAgdmFyIHJlZ0V4cCA9IF9jc3NDb2xvblNsb3R0ZWRSZTtcbiAgICByZXR1cm4gY3NzVGV4dC5yZXBsYWNlKHJlZ0V4cCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgbVtfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtWzJdKSB7XG4gICAgICAgICAgICB2YXIgY29tcG91bmQgPSBtWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBtWzNdO1xuICAgICAgICAgICAgdmFyIHNlbCA9ICcuJyArIHNsb3RBdHRyICsgJyA+ICcgKyBjb21wb3VuZCArIHN1ZmZpeDtcbiAgICAgICAgICAgIHJldHVybiBzZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvciArIG1bM107XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG52YXIgY29udmVydENvbG9uSG9zdENvbnRleHQgPSBmdW5jdGlvbiAoY3NzVGV4dCkge1xuICAgIHJldHVybiBjb252ZXJ0Q29sb25SdWxlKGNzc1RleHQsIF9jc3NDb2xvbkhvc3RDb250ZXh0UmUsIGNvbG9uSG9zdENvbnRleHRQYXJ0UmVwbGFjZXIpO1xufTtcbnZhciBjb252ZXJ0U2hhZG93RE9NU2VsZWN0b3JzID0gZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgICByZXR1cm4gX3NoYWRvd0RPTVNlbGVjdG9yc1JlLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBwYXR0ZXJuKSB7IHJldHVybiByZXN1bHQucmVwbGFjZShwYXR0ZXJuLCAnICcpOyB9LCBjc3NUZXh0KTtcbn07XG52YXIgbWFrZVNjb3BlTWF0Y2hlciA9IGZ1bmN0aW9uIChzY29wZVNlbGVjdG9yKSB7XG4gICAgdmFyIGxyZSA9IC9cXFsvZztcbiAgICB2YXIgcnJlID0gL1xcXS9nO1xuICAgIHNjb3BlU2VsZWN0b3IgPSBzY29wZVNlbGVjdG9yLnJlcGxhY2UobHJlLCAnXFxcXFsnKS5yZXBsYWNlKHJyZSwgJ1xcXFxdJyk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJ14oJyArIHNjb3BlU2VsZWN0b3IgKyAnKScgKyBfc2VsZWN0b3JSZVN1ZmZpeCwgJ20nKTtcbn07XG52YXIgc2VsZWN0b3JOZWVkc1Njb3BpbmcgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHNjb3BlU2VsZWN0b3IpIHtcbiAgICB2YXIgcmUgPSBtYWtlU2NvcGVNYXRjaGVyKHNjb3BlU2VsZWN0b3IpO1xuICAgIHJldHVybiAhcmUudGVzdChzZWxlY3Rvcik7XG59O1xudmFyIGFwcGx5U2ltcGxlU2VsZWN0b3JTY29wZSA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgc2NvcGVTZWxlY3RvciwgaG9zdFNlbGVjdG9yKSB7XG4gICAgLy8gSW4gQW5kcm9pZCBicm93c2VyLCB0aGUgbGFzdEluZGV4IGlzIG5vdCByZXNldCB3aGVuIHRoZSByZWdleCBpcyB1c2VkIGluIFN0cmluZy5yZXBsYWNlKClcbiAgICBfcG9seWZpbGxIb3N0UmUubGFzdEluZGV4ID0gMDtcbiAgICBpZiAoX3BvbHlmaWxsSG9zdFJlLnRlc3Qoc2VsZWN0b3IpKSB7XG4gICAgICAgIHZhciByZXBsYWNlQnlfMSA9IFwiLlwiICsgaG9zdFNlbGVjdG9yO1xuICAgICAgICByZXR1cm4gc2VsZWN0b3JcbiAgICAgICAgICAgIC5yZXBsYWNlKF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3JSZSwgZnVuY3Rpb24gKF8sIHNlbGVjdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0b3IucmVwbGFjZSgvKFteOl0qKSg6KikoLiopLywgZnVuY3Rpb24gKF8sIGJlZm9yZSwgY29sb24sIGFmdGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJlZm9yZSArIHJlcGxhY2VCeV8xICsgY29sb24gKyBhZnRlcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnJlcGxhY2UoX3BvbHlmaWxsSG9zdFJlLCByZXBsYWNlQnlfMSArICcgJyk7XG4gICAgfVxuICAgIHJldHVybiBzY29wZVNlbGVjdG9yICsgJyAnICsgc2VsZWN0b3I7XG59O1xudmFyIGFwcGx5U3RyaWN0U2VsZWN0b3JTY29wZSA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgc2NvcGVTZWxlY3RvciwgaG9zdFNlbGVjdG9yKSB7XG4gICAgdmFyIGlzUmUgPSAvXFxbaXM9KFteXFxdXSopXFxdL2c7XG4gICAgc2NvcGVTZWxlY3RvciA9IHNjb3BlU2VsZWN0b3IucmVwbGFjZShpc1JlLCBmdW5jdGlvbiAoXykge1xuICAgICAgICB2YXIgcGFydHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHBhcnRzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJ0c1swXTtcbiAgICB9KTtcbiAgICB2YXIgY2xhc3NOYW1lID0gJy4nICsgc2NvcGVTZWxlY3RvcjtcbiAgICB2YXIgX3Njb3BlU2VsZWN0b3JQYXJ0ID0gZnVuY3Rpb24gKHApIHtcbiAgICAgICAgdmFyIHNjb3BlZFAgPSBwLnRyaW0oKTtcbiAgICAgICAgaWYgKCFzY29wZWRQKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHAuaW5kZXhPZihfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yKSA+IC0xKSB7XG4gICAgICAgICAgICBzY29wZWRQID0gYXBwbHlTaW1wbGVTZWxlY3RvclNjb3BlKHAsIHNjb3BlU2VsZWN0b3IsIGhvc3RTZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgOmhvc3Qgc2luY2UgaXQgc2hvdWxkIGJlIHVubmVjZXNzYXJ5XG4gICAgICAgICAgICB2YXIgdCA9IHAucmVwbGFjZShfcG9seWZpbGxIb3N0UmUsICcnKTtcbiAgICAgICAgICAgIGlmICh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IHQubWF0Y2goLyhbXjpdKikoOiopKC4qKS8pO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFAgPSBtYXRjaGVzWzFdICsgY2xhc3NOYW1lICsgbWF0Y2hlc1syXSArIG1hdGNoZXNbM107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzY29wZWRQO1xuICAgIH07XG4gICAgdmFyIHNhZmVDb250ZW50ID0gc2FmZVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBzZWxlY3RvciA9IHNhZmVDb250ZW50LmNvbnRlbnQ7XG4gICAgdmFyIHNjb3BlZFNlbGVjdG9yID0gJyc7XG4gICAgdmFyIHN0YXJ0SW5kZXggPSAwO1xuICAgIHZhciByZXM7XG4gICAgdmFyIHNlcCA9IC8oIHw+fFxcK3x+KD8hPSkpXFxzKi9nO1xuICAgIC8vIElmIGEgc2VsZWN0b3IgYXBwZWFycyBiZWZvcmUgOmhvc3QgaXQgc2hvdWxkIG5vdCBiZSBzaGltbWVkIGFzIGl0XG4gICAgLy8gbWF0Y2hlcyBvbiBhbmNlc3RvciBlbGVtZW50cyBhbmQgbm90IG9uIGVsZW1lbnRzIGluIHRoZSBob3N0J3Mgc2hhZG93XG4gICAgLy8gYDpob3N0LWNvbnRleHQoZGl2KWAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgICAvLyBgLXNoYWRvd2Nzc2hvc3Qtbm8tY29tYmluYXRvcmRpdiwgZGl2IC1zaGFkb3djc3Nob3N0LW5vLWNvbWJpbmF0b3JgXG4gICAgLy8gdGhlIGBkaXZgIGlzIG5vdCBwYXJ0IG9mIHRoZSBjb21wb25lbnQgaW4gdGhlIDJuZCBzZWxlY3RvcnMgYW5kIHNob3VsZCBub3QgYmUgc2NvcGVkLlxuICAgIC8vIEhpc3RvcmljYWxseSBgY29tcG9uZW50LXRhZzpob3N0YCB3YXMgbWF0Y2hpbmcgdGhlIGNvbXBvbmVudCBzbyB3ZSBhbHNvIHdhbnQgdG8gcHJlc2VydmVcbiAgICAvLyB0aGlzIGJlaGF2aW9yIHRvIGF2b2lkIGJyZWFraW5nIGxlZ2FjeSBhcHBzIChpdCBzaG91bGQgbm90IG1hdGNoKS5cbiAgICAvLyBUaGUgYmVoYXZpb3Igc2hvdWxkIGJlOlxuICAgIC8vIC0gYHRhZzpob3N0YCAtPiBgdGFnW2hdYCAodGhpcyBpcyB0byBhdm9pZCBicmVha2luZyBsZWdhY3kgYXBwcywgc2hvdWxkIG5vdCBtYXRjaCBhbnl0aGluZylcbiAgICAvLyAtIGB0YWcgOmhvc3RgIC0+IGB0YWcgW2hdYCAoYHRhZ2AgaXMgbm90IHNjb3BlZCBiZWNhdXNlIGl0J3MgY29uc2lkZXJlZCBwYXJ0IG9mIGFcbiAgICAvLyAgIGA6aG9zdC1jb250ZXh0KHRhZylgKVxuICAgIHZhciBoYXNIb3N0ID0gc2VsZWN0b3IuaW5kZXhPZihfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yKSA+IC0xO1xuICAgIC8vIE9ubHkgc2NvcGUgcGFydHMgYWZ0ZXIgdGhlIGZpcnN0IGAtc2hhZG93Y3NzaG9zdC1uby1jb21iaW5hdG9yYCB3aGVuIGl0IGlzIHByZXNlbnRcbiAgICB2YXIgc2hvdWxkU2NvcGUgPSAhaGFzSG9zdDtcbiAgICB3aGlsZSAoKHJlcyA9IHNlcC5leGVjKHNlbGVjdG9yKSkgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIHNlcGFyYXRvciA9IHJlc1sxXTtcbiAgICAgICAgdmFyIHBhcnRfMSA9IHNlbGVjdG9yLnNsaWNlKHN0YXJ0SW5kZXgsIHJlcy5pbmRleCkudHJpbSgpO1xuICAgICAgICBzaG91bGRTY29wZSA9IHNob3VsZFNjb3BlIHx8IHBhcnRfMS5pbmRleE9mKF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3IpID4gLTE7XG4gICAgICAgIHZhciBzY29wZWRQYXJ0ID0gc2hvdWxkU2NvcGUgPyBfc2NvcGVTZWxlY3RvclBhcnQocGFydF8xKSA6IHBhcnRfMTtcbiAgICAgICAgc2NvcGVkU2VsZWN0b3IgKz0gc2NvcGVkUGFydCArIFwiIFwiICsgc2VwYXJhdG9yICsgXCIgXCI7XG4gICAgICAgIHN0YXJ0SW5kZXggPSBzZXAubGFzdEluZGV4O1xuICAgIH1cbiAgICB2YXIgcGFydCA9IHNlbGVjdG9yLnN1YnN0cmluZyhzdGFydEluZGV4KTtcbiAgICBzaG91bGRTY29wZSA9IHNob3VsZFNjb3BlIHx8IHBhcnQuaW5kZXhPZihfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yKSA+IC0xO1xuICAgIHNjb3BlZFNlbGVjdG9yICs9IHNob3VsZFNjb3BlID8gX3Njb3BlU2VsZWN0b3JQYXJ0KHBhcnQpIDogcGFydDtcbiAgICAvLyByZXBsYWNlIHRoZSBwbGFjZWhvbGRlcnMgd2l0aCB0aGVpciBvcmlnaW5hbCB2YWx1ZXNcbiAgICByZXR1cm4gcmVzdG9yZVNhZmVTZWxlY3RvcihzYWZlQ29udGVudC5wbGFjZWhvbGRlcnMsIHNjb3BlZFNlbGVjdG9yKTtcbn07XG52YXIgc2NvcGVTZWxlY3RvciA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgc2NvcGVTZWxlY3RvclRleHQsIGhvc3RTZWxlY3Rvciwgc2xvdFNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yLnNwbGl0KCcsJylcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoc2hhbGxvd1BhcnQpIHtcbiAgICAgICAgaWYgKHNsb3RTZWxlY3RvciAmJiBzaGFsbG93UGFydC5pbmRleE9mKCcuJyArIHNsb3RTZWxlY3RvcikgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHNoYWxsb3dQYXJ0LnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0b3JOZWVkc1Njb3Bpbmcoc2hhbGxvd1BhcnQsIHNjb3BlU2VsZWN0b3JUZXh0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGFwcGx5U3RyaWN0U2VsZWN0b3JTY29wZShzaGFsbG93UGFydCwgc2NvcGVTZWxlY3RvclRleHQsIGhvc3RTZWxlY3RvcikudHJpbSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNoYWxsb3dQYXJ0LnRyaW0oKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgICAgIC5qb2luKCcsICcpO1xufTtcbnZhciBzY29wZVNlbGVjdG9ycyA9IGZ1bmN0aW9uIChjc3NUZXh0LCBzY29wZVNlbGVjdG9yVGV4dCwgaG9zdFNlbGVjdG9yLCBzbG90U2VsZWN0b3IsIGNvbW1lbnRPcmlnaW5hbFNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHByb2Nlc3NSdWxlcyhjc3NUZXh0LCBmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSBydWxlLnNlbGVjdG9yO1xuICAgICAgICB2YXIgY29udGVudCA9IHJ1bGUuY29udGVudDtcbiAgICAgICAgaWYgKHJ1bGUuc2VsZWN0b3JbMF0gIT09ICdAJykge1xuICAgICAgICAgICAgc2VsZWN0b3IgPSBzY29wZVNlbGVjdG9yKHJ1bGUuc2VsZWN0b3IsIHNjb3BlU2VsZWN0b3JUZXh0LCBob3N0U2VsZWN0b3IsIHNsb3RTZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKCdAbWVkaWEnKSB8fCBydWxlLnNlbGVjdG9yLnN0YXJ0c1dpdGgoJ0BzdXBwb3J0cycpIHx8XG4gICAgICAgICAgICBydWxlLnNlbGVjdG9yLnN0YXJ0c1dpdGgoJ0BwYWdlJykgfHwgcnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKCdAZG9jdW1lbnQnKSkge1xuICAgICAgICAgICAgY29udGVudCA9IHNjb3BlU2VsZWN0b3JzKHJ1bGUuY29udGVudCwgc2NvcGVTZWxlY3RvclRleHQsIGhvc3RTZWxlY3Rvciwgc2xvdFNlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3NzUnVsZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3Rvci5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykudHJpbSgpLFxuICAgICAgICAgICAgY29udGVudDogY29udGVudFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY3NzUnVsZTtcbiAgICB9KTtcbn07XG52YXIgc2NvcGVDc3NUZXh0ID0gZnVuY3Rpb24gKGNzc1RleHQsIHNjb3BlSWQsIGhvc3RTY29wZUlkLCBzbG90U2NvcGVJZCwgY29tbWVudE9yaWdpbmFsU2VsZWN0b3IpIHtcbiAgICBjc3NUZXh0ID0gaW5zZXJ0UG9seWZpbGxIb3N0SW5Dc3NUZXh0KGNzc1RleHQpO1xuICAgIGNzc1RleHQgPSBjb252ZXJ0Q29sb25Ib3N0KGNzc1RleHQpO1xuICAgIGNzc1RleHQgPSBjb252ZXJ0Q29sb25Ib3N0Q29udGV4dChjc3NUZXh0KTtcbiAgICBjc3NUZXh0ID0gY29udmVydENvbG9uU2xvdHRlZChjc3NUZXh0LCBzbG90U2NvcGVJZCk7XG4gICAgY3NzVGV4dCA9IGNvbnZlcnRTaGFkb3dET01TZWxlY3RvcnMoY3NzVGV4dCk7XG4gICAgaWYgKHNjb3BlSWQpIHtcbiAgICAgICAgY3NzVGV4dCA9IHNjb3BlU2VsZWN0b3JzKGNzc1RleHQsIHNjb3BlSWQsIGhvc3RTY29wZUlkLCBzbG90U2NvcGVJZCk7XG4gICAgfVxuICAgIGNzc1RleHQgPSBjc3NUZXh0LnJlcGxhY2UoLy1zaGFkb3djc3Nob3N0LW5vLWNvbWJpbmF0b3IvZywgXCIuXCIgKyBob3N0U2NvcGVJZCk7XG4gICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZSgvPlxccypcXCpcXHMrKFteeywgXSspL2dtLCAnICQxICcpO1xuICAgIHJldHVybiBjc3NUZXh0LnRyaW0oKTtcbn07XG52YXIgc2NvcGVDc3MgPSBmdW5jdGlvbiAoY3NzVGV4dCwgc2NvcGVJZCwgY29tbWVudE9yaWdpbmFsU2VsZWN0b3IpIHtcbiAgICB2YXIgaG9zdFNjb3BlSWQgPSBzY29wZUlkICsgJy1oJztcbiAgICB2YXIgc2xvdFNjb3BlSWQgPSBzY29wZUlkICsgJy1zJztcbiAgICB2YXIgY29tbWVudHNXaXRoSGFzaCA9IGV4dHJhY3RDb21tZW50c1dpdGhIYXNoKGNzc1RleHQpO1xuICAgIGNzc1RleHQgPSBzdHJpcENvbW1lbnRzKGNzc1RleHQpO1xuICAgIHZhciBvcmdTZWxlY3RvcnMgPSBbXTtcbiAgICBpZiAoY29tbWVudE9yaWdpbmFsU2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIHByb2Nlc3NDb21tZW50ZWRTZWxlY3Rvcl8xID0gZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICAgIHZhciBwbGFjZWhvbGRlciA9IFwiLyohQF9fX1wiICsgb3JnU2VsZWN0b3JzLmxlbmd0aCArIFwiX19fKi9cIjtcbiAgICAgICAgICAgIHZhciBjb21tZW50ID0gXCIvKiFAXCIgKyBydWxlLnNlbGVjdG9yICsgXCIqL1wiO1xuICAgICAgICAgICAgb3JnU2VsZWN0b3JzLnB1c2goeyBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsIGNvbW1lbnQ6IGNvbW1lbnQgfSk7XG4gICAgICAgICAgICBydWxlLnNlbGVjdG9yID0gcGxhY2Vob2xkZXIgKyBydWxlLnNlbGVjdG9yO1xuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgIH07XG4gICAgICAgIGNzc1RleHQgPSBwcm9jZXNzUnVsZXMoY3NzVGV4dCwgZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICAgIGlmIChydWxlLnNlbGVjdG9yWzBdICE9PSAnQCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvY2Vzc0NvbW1lbnRlZFNlbGVjdG9yXzEocnVsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChydWxlLnNlbGVjdG9yLnN0YXJ0c1dpdGgoJ0BtZWRpYScpIHx8IHJ1bGUuc2VsZWN0b3Iuc3RhcnRzV2l0aCgnQHN1cHBvcnRzJykgfHxcbiAgICAgICAgICAgICAgICBydWxlLnNlbGVjdG9yLnN0YXJ0c1dpdGgoJ0BwYWdlJykgfHwgcnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKCdAZG9jdW1lbnQnKSkge1xuICAgICAgICAgICAgICAgIHJ1bGUuY29udGVudCA9IHByb2Nlc3NSdWxlcyhydWxlLmNvbnRlbnQsIHByb2Nlc3NDb21tZW50ZWRTZWxlY3Rvcl8xKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFyIHNjb3BlZENzc1RleHQgPSBzY29wZUNzc1RleHQoY3NzVGV4dCwgc2NvcGVJZCwgaG9zdFNjb3BlSWQsIHNsb3RTY29wZUlkKTtcbiAgICBjc3NUZXh0ID0gX19zcHJlYWRBcnJheXMoW3Njb3BlZENzc1RleHRdLCBjb21tZW50c1dpdGhIYXNoKS5qb2luKCdcXG4nKTtcbiAgICBpZiAoY29tbWVudE9yaWdpbmFsU2VsZWN0b3IpIHtcbiAgICAgICAgb3JnU2VsZWN0b3JzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgcGxhY2Vob2xkZXIgPSBfYS5wbGFjZWhvbGRlciwgY29tbWVudCA9IF9hLmNvbW1lbnQ7XG4gICAgICAgICAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKHBsYWNlaG9sZGVyLCBjb21tZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjc3NUZXh0O1xufTtcbmV4cG9ydCB7IHNjb3BlQ3NzIH07XG4iXSwic291cmNlUm9vdCI6IiJ9