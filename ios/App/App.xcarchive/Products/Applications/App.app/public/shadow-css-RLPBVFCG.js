import "./chunk-LQ2EECYJ.js";

// node_modules/@stencil/core/internal/client/shadow-css.js
var escapeRegExpSpecialCharacters = (text) => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
var safeSelector = (selector) => {
  const placeholders = [];
  let index = 0;
  selector = selector.replace(/(\[[^\]]*\])/g, (_, keep) => {
    const replaceBy = `__ph-${index}__`;
    placeholders.push(keep);
    index++;
    return replaceBy;
  });
  const content = selector.replace(/(:nth-[-\w]+)(\([^)]+\))/g, (_, pseudo, exp) => {
    const replaceBy = `__ph-${index}__`;
    placeholders.push(exp);
    index++;
    return pseudo + replaceBy;
  });
  const ss = {
    content,
    placeholders
  };
  return ss;
};
var restoreSafeSelector = (placeholders, content) => {
  return content.replace(/__ph-(\d+)__/g, (_, index) => placeholders[+index]);
};
var _polyfillHost = "-shadowcsshost";
var _polyfillSlotted = "-shadowcssslotted";
var _polyfillHostContext = "-shadowcsscontext";
var _parenSuffix = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)";
var _cssColonHostRe = new RegExp("(" + _polyfillHost + _parenSuffix, "gim");
var _cssColonHostContextRe = new RegExp("(" + _polyfillHostContext + _parenSuffix, "gim");
var _cssColonSlottedRe = new RegExp("(" + _polyfillSlotted + _parenSuffix, "gim");
var _polyfillHostNoCombinator = _polyfillHost + "-no-combinator";
var _polyfillHostNoCombinatorRe = /-shadowcsshost-no-combinator([^\s]*)/;
var _shadowDOMSelectorsRe = [/::shadow/g, /::content/g];
var _selectorReSuffix = "([>\\s~+[.,{:][\\s\\S]*)?$";
var _polyfillHostRe = /-shadowcsshost/gim;
var createSupportsRuleRe = (selector) => new RegExp(`((?<!(^@supports(.*)))|(?<={.*))(${selector}\\b)`, "gim");
var _colonSlottedRe = createSupportsRuleRe("::slotted");
var _colonHostRe = createSupportsRuleRe(":host");
var _colonHostContextRe = createSupportsRuleRe(":host-context");
var _commentRe = /\/\*\s*[\s\S]*?\*\//g;
var stripComments = (input) => {
  return input.replace(_commentRe, "");
};
var _commentWithHashRe = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g;
var extractCommentsWithHash = (input) => {
  return input.match(_commentWithHashRe) || [];
};
var _ruleRe = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g;
var _curlyRe = /([{}])/g;
var _selectorPartsRe = /(^.*?[^\\])??((:+)(.*)|$)/;
var OPEN_CURLY = "{";
var CLOSE_CURLY = "}";
var BLOCK_PLACEHOLDER = "%BLOCK%";
var processRules = (input, ruleCallback) => {
  const inputWithEscapedBlocks = escapeBlocks(input);
  let nextBlockIndex = 0;
  return inputWithEscapedBlocks.escapedString.replace(_ruleRe, (...m) => {
    const selector = m[2];
    let content = "";
    let suffix = m[4];
    let contentPrefix = "";
    if (suffix && suffix.startsWith("{" + BLOCK_PLACEHOLDER)) {
      content = inputWithEscapedBlocks.blocks[nextBlockIndex++];
      suffix = suffix.substring(BLOCK_PLACEHOLDER.length + 1);
      contentPrefix = "{";
    }
    const cssRule = {
      selector,
      content
    };
    const rule = ruleCallback(cssRule);
    return `${m[1]}${rule.selector}${m[3]}${contentPrefix}${rule.content}${suffix}`;
  });
};
var escapeBlocks = (input) => {
  const inputParts = input.split(_curlyRe);
  const resultParts = [];
  const escapedBlocks = [];
  let bracketCount = 0;
  let currentBlockParts = [];
  for (let partIndex = 0; partIndex < inputParts.length; partIndex++) {
    const part = inputParts[partIndex];
    if (part === CLOSE_CURLY) {
      bracketCount--;
    }
    if (bracketCount > 0) {
      currentBlockParts.push(part);
    } else {
      if (currentBlockParts.length > 0) {
        escapedBlocks.push(currentBlockParts.join(""));
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
    escapedBlocks.push(currentBlockParts.join(""));
    resultParts.push(BLOCK_PLACEHOLDER);
  }
  const strEscapedBlocks = {
    escapedString: resultParts.join(""),
    blocks: escapedBlocks
  };
  return strEscapedBlocks;
};
var insertPolyfillHostInCssText = (cssText) => {
  cssText = cssText.replace(_colonHostContextRe, `$1${_polyfillHostContext}`).replace(_colonHostRe, `$1${_polyfillHost}`).replace(_colonSlottedRe, `$1${_polyfillSlotted}`);
  return cssText;
};
var convertColonRule = (cssText, regExp, partReplacer) => {
  return cssText.replace(regExp, (...m) => {
    if (m[2]) {
      const parts = m[2].split(",");
      const r = [];
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i].trim();
        if (!p) break;
        r.push(partReplacer(_polyfillHostNoCombinator, p, m[3]));
      }
      return r.join(",");
    } else {
      return _polyfillHostNoCombinator + m[3];
    }
  });
};
var colonHostPartReplacer = (host, part, suffix) => {
  return host + part.replace(_polyfillHost, "") + suffix;
};
var convertColonHost = (cssText) => {
  return convertColonRule(cssText, _cssColonHostRe, colonHostPartReplacer);
};
var colonHostContextPartReplacer = (host, part, suffix) => {
  if (part.indexOf(_polyfillHost) > -1) {
    return colonHostPartReplacer(host, part, suffix);
  } else {
    return host + part + suffix + ", " + part + " " + host + suffix;
  }
};
var convertColonSlotted = (cssText, slotScopeId) => {
  const slotClass = "." + slotScopeId + " > ";
  const selectors = [];
  cssText = cssText.replace(_cssColonSlottedRe, (...m) => {
    if (m[2]) {
      const compound = m[2].trim();
      const suffix = m[3];
      const slottedSelector = slotClass + compound + suffix;
      let prefixSelector = "";
      for (let i = m[4] - 1; i >= 0; i--) {
        const char = m[5][i];
        if (char === "}" || char === ",") {
          break;
        }
        prefixSelector = char + prefixSelector;
      }
      const orgSelector = (prefixSelector + slottedSelector).trim();
      const addedSelector = `${prefixSelector.trimEnd()}${slottedSelector.trim()}`.trim();
      if (orgSelector !== addedSelector) {
        const updatedSelector = `${addedSelector}, ${orgSelector}`;
        selectors.push({
          orgSelector,
          updatedSelector
        });
      }
      return slottedSelector;
    } else {
      return _polyfillHostNoCombinator + m[3];
    }
  });
  return {
    selectors,
    cssText
  };
};
var convertColonHostContext = (cssText) => {
  return convertColonRule(cssText, _cssColonHostContextRe, colonHostContextPartReplacer);
};
var convertShadowDOMSelectors = (cssText) => {
  return _shadowDOMSelectorsRe.reduce((result, pattern) => result.replace(pattern, " "), cssText);
};
var makeScopeMatcher = (scopeSelector2) => {
  const lre = /\[/g;
  const rre = /\]/g;
  scopeSelector2 = scopeSelector2.replace(lre, "\\[").replace(rre, "\\]");
  return new RegExp("^(" + scopeSelector2 + ")" + _selectorReSuffix, "m");
};
var selectorNeedsScoping = (selector, scopeSelector2) => {
  const re = makeScopeMatcher(scopeSelector2);
  return !re.test(selector);
};
var injectScopingSelector = (selector, scopingSelector) => {
  return selector.replace(_selectorPartsRe, (_, before = "", _colonGroup, colon = "", after = "") => {
    return before + scopingSelector + colon + after;
  });
};
var applySimpleSelectorScope = (selector, scopeSelector2, hostSelector) => {
  _polyfillHostRe.lastIndex = 0;
  if (_polyfillHostRe.test(selector)) {
    const replaceBy = `.${hostSelector}`;
    return selector.replace(_polyfillHostNoCombinatorRe, (_, selector2) => injectScopingSelector(selector2, replaceBy)).replace(_polyfillHostRe, replaceBy + " ");
  }
  return scopeSelector2 + " " + selector;
};
var applyStrictSelectorScope = (selector, scopeSelector2, hostSelector) => {
  const isRe = /\[is=([^\]]*)\]/g;
  scopeSelector2 = scopeSelector2.replace(isRe, (_, ...parts) => parts[0]);
  const className = "." + scopeSelector2;
  const _scopeSelectorPart = (p) => {
    let scopedP = p.trim();
    if (!scopedP) {
      return "";
    }
    if (p.indexOf(_polyfillHostNoCombinator) > -1) {
      scopedP = applySimpleSelectorScope(p, scopeSelector2, hostSelector);
    } else {
      const t = p.replace(_polyfillHostRe, "");
      if (t.length > 0) {
        scopedP = injectScopingSelector(t, className);
      }
    }
    return scopedP;
  };
  const safeContent = safeSelector(selector);
  selector = safeContent.content;
  let scopedSelector = "";
  let startIndex = 0;
  let res;
  const sep = /( |>|\+|~(?!=))\s*/g;
  const hasHost = selector.indexOf(_polyfillHostNoCombinator) > -1;
  let shouldScope = !hasHost;
  while ((res = sep.exec(selector)) !== null) {
    const separator = res[1];
    const part2 = selector.slice(startIndex, res.index).trim();
    shouldScope = shouldScope || part2.indexOf(_polyfillHostNoCombinator) > -1;
    const scopedPart = shouldScope ? _scopeSelectorPart(part2) : part2;
    scopedSelector += `${scopedPart} ${separator} `;
    startIndex = sep.lastIndex;
  }
  const part = selector.substring(startIndex);
  shouldScope = shouldScope || part.indexOf(_polyfillHostNoCombinator) > -1;
  scopedSelector += shouldScope ? _scopeSelectorPart(part) : part;
  return restoreSafeSelector(safeContent.placeholders, scopedSelector);
};
var scopeSelector = (selector, scopeSelectorText, hostSelector, slotSelector) => {
  return selector.split(",").map((shallowPart) => {
    if (slotSelector && shallowPart.indexOf("." + slotSelector) > -1) {
      return shallowPart.trim();
    }
    if (selectorNeedsScoping(shallowPart, scopeSelectorText)) {
      return applyStrictSelectorScope(shallowPart, scopeSelectorText, hostSelector).trim();
    } else {
      return shallowPart.trim();
    }
  }).join(", ");
};
var scopeSelectors = (cssText, scopeSelectorText, hostSelector, slotSelector) => {
  return processRules(cssText, (rule) => {
    let selector = rule.selector;
    let content = rule.content;
    if (rule.selector[0] !== "@") {
      selector = scopeSelector(rule.selector, scopeSelectorText, hostSelector, slotSelector);
    } else if (rule.selector.startsWith("@media") || rule.selector.startsWith("@supports") || rule.selector.startsWith("@page") || rule.selector.startsWith("@document")) {
      content = scopeSelectors(rule.content, scopeSelectorText, hostSelector, slotSelector);
    }
    const cssRule = {
      selector: selector.replace(/\s{2,}/g, " ").trim(),
      content
    };
    return cssRule;
  });
};
var scopeCssText = (cssText, scopeId, hostScopeId, slotScopeId) => {
  cssText = insertPolyfillHostInCssText(cssText);
  cssText = convertColonHost(cssText);
  cssText = convertColonHostContext(cssText);
  const slotted = convertColonSlotted(cssText, slotScopeId);
  cssText = slotted.cssText;
  cssText = convertShadowDOMSelectors(cssText);
  if (scopeId) {
    cssText = scopeSelectors(cssText, scopeId, hostScopeId, slotScopeId);
  }
  cssText = replaceShadowCssHost(cssText, hostScopeId);
  cssText = cssText.replace(/>\s*\*\s+([^{, ]+)/gm, " $1 ");
  return {
    cssText: cssText.trim(),
    // We need to replace the shadow CSS host string in each of these selectors since we created
    // them prior to the replacement happening in the components CSS text.
    slottedSelectors: slotted.selectors.map((ref) => ({
      orgSelector: replaceShadowCssHost(ref.orgSelector, hostScopeId),
      updatedSelector: replaceShadowCssHost(ref.updatedSelector, hostScopeId)
    }))
  };
};
var replaceShadowCssHost = (cssText, hostScopeId) => {
  return cssText.replace(/-shadowcsshost-no-combinator/g, `.${hostScopeId}`);
};
var scopeCss = (cssText, scopeId) => {
  const hostScopeId = scopeId + "-h";
  const slotScopeId = scopeId + "-s";
  const commentsWithHash = extractCommentsWithHash(cssText);
  cssText = stripComments(cssText);
  const scoped = scopeCssText(cssText, scopeId, hostScopeId, slotScopeId);
  cssText = [scoped.cssText, ...commentsWithHash].join("\n");
  scoped.slottedSelectors.forEach((slottedSelector) => {
    const regex = new RegExp(escapeRegExpSpecialCharacters(slottedSelector.orgSelector), "g");
    cssText = cssText.replace(regex, slottedSelector.updatedSelector);
  });
  return cssText;
};
export {
  scopeCss
};
/*! Bundled license information:

@stencil/core/internal/client/shadow-css.js:
  (**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *
   * This file is a port of shadowCSS from `webcomponents.js` to TypeScript.
   * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
   * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9Ac3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9zaGFkb3ctY3NzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy91dGlscy9yZWd1bGFyLWV4cHJlc3Npb24udHNcbnZhciBlc2NhcGVSZWdFeHBTcGVjaWFsQ2hhcmFjdGVycyA9IHRleHQgPT4ge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgXCJcXFxcJCZcIik7XG59O1xuXG4vLyBzcmMvdXRpbHMvc2hhZG93LWNzcy50c1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqXG4gKiBUaGlzIGZpbGUgaXMgYSBwb3J0IG9mIHNoYWRvd0NTUyBmcm9tIGB3ZWJjb21wb25lbnRzLmpzYCB0byBUeXBlU2NyaXB0LlxuICogaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzL2Jsb2IvNGVmZWNkN2UwZS9zcmMvU2hhZG93Q1NTL1NoYWRvd0NTUy5qc1xuICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iL21hc3Rlci9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50c1xuICovXG52YXIgc2FmZVNlbGVjdG9yID0gc2VsZWN0b3IgPT4ge1xuICBjb25zdCBwbGFjZWhvbGRlcnMgPSBbXTtcbiAgbGV0IGluZGV4ID0gMDtcbiAgc2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKC8oXFxbW15cXF1dKlxcXSkvZywgKF8sIGtlZXApID0+IHtcbiAgICBjb25zdCByZXBsYWNlQnkgPSBgX19waC0ke2luZGV4fV9fYDtcbiAgICBwbGFjZWhvbGRlcnMucHVzaChrZWVwKTtcbiAgICBpbmRleCsrO1xuICAgIHJldHVybiByZXBsYWNlQnk7XG4gIH0pO1xuICBjb25zdCBjb250ZW50ID0gc2VsZWN0b3IucmVwbGFjZSgvKDpudGgtWy1cXHddKykoXFwoW14pXStcXCkpL2csIChfLCBwc2V1ZG8sIGV4cCkgPT4ge1xuICAgIGNvbnN0IHJlcGxhY2VCeSA9IGBfX3BoLSR7aW5kZXh9X19gO1xuICAgIHBsYWNlaG9sZGVycy5wdXNoKGV4cCk7XG4gICAgaW5kZXgrKztcbiAgICByZXR1cm4gcHNldWRvICsgcmVwbGFjZUJ5O1xuICB9KTtcbiAgY29uc3Qgc3MgPSB7XG4gICAgY29udGVudCxcbiAgICBwbGFjZWhvbGRlcnNcbiAgfTtcbiAgcmV0dXJuIHNzO1xufTtcbnZhciByZXN0b3JlU2FmZVNlbGVjdG9yID0gKHBsYWNlaG9sZGVycywgY29udGVudCkgPT4ge1xuICByZXR1cm4gY29udGVudC5yZXBsYWNlKC9fX3BoLShcXGQrKV9fL2csIChfLCBpbmRleCkgPT4gcGxhY2Vob2xkZXJzWytpbmRleF0pO1xufTtcbnZhciBfcG9seWZpbGxIb3N0ID0gXCItc2hhZG93Y3NzaG9zdFwiO1xudmFyIF9wb2x5ZmlsbFNsb3R0ZWQgPSBcIi1zaGFkb3djc3NzbG90dGVkXCI7XG52YXIgX3BvbHlmaWxsSG9zdENvbnRleHQgPSBcIi1zaGFkb3djc3Njb250ZXh0XCI7XG52YXIgX3BhcmVuU3VmZml4ID0gXCIpKD86XFxcXCgoKD86XFxcXChbXikoXSpcXFxcKXxbXikoXSopKz8pXFxcXCkpPyhbXix7XSopXCI7XG52YXIgX2Nzc0NvbG9uSG9zdFJlID0gbmV3IFJlZ0V4cChcIihcIiArIF9wb2x5ZmlsbEhvc3QgKyBfcGFyZW5TdWZmaXgsIFwiZ2ltXCIpO1xudmFyIF9jc3NDb2xvbkhvc3RDb250ZXh0UmUgPSBuZXcgUmVnRXhwKFwiKFwiICsgX3BvbHlmaWxsSG9zdENvbnRleHQgKyBfcGFyZW5TdWZmaXgsIFwiZ2ltXCIpO1xudmFyIF9jc3NDb2xvblNsb3R0ZWRSZSA9IG5ldyBSZWdFeHAoXCIoXCIgKyBfcG9seWZpbGxTbG90dGVkICsgX3BhcmVuU3VmZml4LCBcImdpbVwiKTtcbnZhciBfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yID0gX3BvbHlmaWxsSG9zdCArIFwiLW5vLWNvbWJpbmF0b3JcIjtcbnZhciBfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yUmUgPSAvLXNoYWRvd2Nzc2hvc3Qtbm8tY29tYmluYXRvcihbXlxcc10qKS87XG52YXIgX3NoYWRvd0RPTVNlbGVjdG9yc1JlID0gWy86OnNoYWRvdy9nLCAvOjpjb250ZW50L2ddO1xudmFyIF9zZWxlY3RvclJlU3VmZml4ID0gXCIoWz5cXFxcc34rWy4sezpdW1xcXFxzXFxcXFNdKik/JFwiO1xudmFyIF9wb2x5ZmlsbEhvc3RSZSA9IC8tc2hhZG93Y3NzaG9zdC9naW07XG52YXIgY3JlYXRlU3VwcG9ydHNSdWxlUmUgPSBzZWxlY3RvciA9PiBuZXcgUmVnRXhwKGAoKD88ISheQHN1cHBvcnRzKC4qKSkpfCg/PD17LiopKSgke3NlbGVjdG9yfVxcXFxiKWAsIFwiZ2ltXCIpO1xudmFyIF9jb2xvblNsb3R0ZWRSZSA9IGNyZWF0ZVN1cHBvcnRzUnVsZVJlKFwiOjpzbG90dGVkXCIpO1xudmFyIF9jb2xvbkhvc3RSZSA9IGNyZWF0ZVN1cHBvcnRzUnVsZVJlKFwiOmhvc3RcIik7XG52YXIgX2NvbG9uSG9zdENvbnRleHRSZSA9IGNyZWF0ZVN1cHBvcnRzUnVsZVJlKFwiOmhvc3QtY29udGV4dFwiKTtcbnZhciBfY29tbWVudFJlID0gL1xcL1xcKlxccypbXFxzXFxTXSo/XFwqXFwvL2c7XG52YXIgc3RyaXBDb21tZW50cyA9IGlucHV0ID0+IHtcbiAgcmV0dXJuIGlucHV0LnJlcGxhY2UoX2NvbW1lbnRSZSwgXCJcIik7XG59O1xudmFyIF9jb21tZW50V2l0aEhhc2hSZSA9IC9cXC9cXCpcXHMqI1xccypzb3VyY2UoTWFwcGluZyk/VVJMPVtcXHNcXFNdKz9cXCpcXC8vZztcbnZhciBleHRyYWN0Q29tbWVudHNXaXRoSGFzaCA9IGlucHV0ID0+IHtcbiAgcmV0dXJuIGlucHV0Lm1hdGNoKF9jb21tZW50V2l0aEhhc2hSZSkgfHwgW107XG59O1xudmFyIF9ydWxlUmUgPSAvKFxccyopKFteO1xce1xcfV0rPykoXFxzKikoKD86eyVCTE9DSyV9P1xccyo7Pyl8KD86XFxzKjspKS9nO1xudmFyIF9jdXJseVJlID0gLyhbe31dKS9nO1xudmFyIF9zZWxlY3RvclBhcnRzUmUgPSAvKF4uKj9bXlxcXFxdKT8/KCg6KykoLiopfCQpLztcbnZhciBPUEVOX0NVUkxZID0gXCJ7XCI7XG52YXIgQ0xPU0VfQ1VSTFkgPSBcIn1cIjtcbnZhciBCTE9DS19QTEFDRUhPTERFUiA9IFwiJUJMT0NLJVwiO1xudmFyIHByb2Nlc3NSdWxlcyA9IChpbnB1dCwgcnVsZUNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGlucHV0V2l0aEVzY2FwZWRCbG9ja3MgPSBlc2NhcGVCbG9ja3MoaW5wdXQpO1xuICBsZXQgbmV4dEJsb2NrSW5kZXggPSAwO1xuICByZXR1cm4gaW5wdXRXaXRoRXNjYXBlZEJsb2Nrcy5lc2NhcGVkU3RyaW5nLnJlcGxhY2UoX3J1bGVSZSwgKC4uLm0pID0+IHtcbiAgICBjb25zdCBzZWxlY3RvciA9IG1bMl07XG4gICAgbGV0IGNvbnRlbnQgPSBcIlwiO1xuICAgIGxldCBzdWZmaXggPSBtWzRdO1xuICAgIGxldCBjb250ZW50UHJlZml4ID0gXCJcIjtcbiAgICBpZiAoc3VmZml4ICYmIHN1ZmZpeC5zdGFydHNXaXRoKFwie1wiICsgQkxPQ0tfUExBQ0VIT0xERVIpKSB7XG4gICAgICBjb250ZW50ID0gaW5wdXRXaXRoRXNjYXBlZEJsb2Nrcy5ibG9ja3NbbmV4dEJsb2NrSW5kZXgrK107XG4gICAgICBzdWZmaXggPSBzdWZmaXguc3Vic3RyaW5nKEJMT0NLX1BMQUNFSE9MREVSLmxlbmd0aCArIDEpO1xuICAgICAgY29udGVudFByZWZpeCA9IFwie1wiO1xuICAgIH1cbiAgICBjb25zdCBjc3NSdWxlID0ge1xuICAgICAgc2VsZWN0b3IsXG4gICAgICBjb250ZW50XG4gICAgfTtcbiAgICBjb25zdCBydWxlID0gcnVsZUNhbGxiYWNrKGNzc1J1bGUpO1xuICAgIHJldHVybiBgJHttWzFdfSR7cnVsZS5zZWxlY3Rvcn0ke21bM119JHtjb250ZW50UHJlZml4fSR7cnVsZS5jb250ZW50fSR7c3VmZml4fWA7XG4gIH0pO1xufTtcbnZhciBlc2NhcGVCbG9ja3MgPSBpbnB1dCA9PiB7XG4gIGNvbnN0IGlucHV0UGFydHMgPSBpbnB1dC5zcGxpdChfY3VybHlSZSk7XG4gIGNvbnN0IHJlc3VsdFBhcnRzID0gW107XG4gIGNvbnN0IGVzY2FwZWRCbG9ja3MgPSBbXTtcbiAgbGV0IGJyYWNrZXRDb3VudCA9IDA7XG4gIGxldCBjdXJyZW50QmxvY2tQYXJ0cyA9IFtdO1xuICBmb3IgKGxldCBwYXJ0SW5kZXggPSAwOyBwYXJ0SW5kZXggPCBpbnB1dFBhcnRzLmxlbmd0aDsgcGFydEluZGV4KyspIHtcbiAgICBjb25zdCBwYXJ0ID0gaW5wdXRQYXJ0c1twYXJ0SW5kZXhdO1xuICAgIGlmIChwYXJ0ID09PSBDTE9TRV9DVVJMWSkge1xuICAgICAgYnJhY2tldENvdW50LS07XG4gICAgfVxuICAgIGlmIChicmFja2V0Q291bnQgPiAwKSB7XG4gICAgICBjdXJyZW50QmxvY2tQYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY3VycmVudEJsb2NrUGFydHMubGVuZ3RoID4gMCkge1xuICAgICAgICBlc2NhcGVkQmxvY2tzLnB1c2goY3VycmVudEJsb2NrUGFydHMuam9pbihcIlwiKSk7XG4gICAgICAgIHJlc3VsdFBhcnRzLnB1c2goQkxPQ0tfUExBQ0VIT0xERVIpO1xuICAgICAgICBjdXJyZW50QmxvY2tQYXJ0cyA9IFtdO1xuICAgICAgfVxuICAgICAgcmVzdWx0UGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gICAgaWYgKHBhcnQgPT09IE9QRU5fQ1VSTFkpIHtcbiAgICAgIGJyYWNrZXRDb3VudCsrO1xuICAgIH1cbiAgfVxuICBpZiAoY3VycmVudEJsb2NrUGFydHMubGVuZ3RoID4gMCkge1xuICAgIGVzY2FwZWRCbG9ja3MucHVzaChjdXJyZW50QmxvY2tQYXJ0cy5qb2luKFwiXCIpKTtcbiAgICByZXN1bHRQYXJ0cy5wdXNoKEJMT0NLX1BMQUNFSE9MREVSKTtcbiAgfVxuICBjb25zdCBzdHJFc2NhcGVkQmxvY2tzID0ge1xuICAgIGVzY2FwZWRTdHJpbmc6IHJlc3VsdFBhcnRzLmpvaW4oXCJcIiksXG4gICAgYmxvY2tzOiBlc2NhcGVkQmxvY2tzXG4gIH07XG4gIHJldHVybiBzdHJFc2NhcGVkQmxvY2tzO1xufTtcbnZhciBpbnNlcnRQb2x5ZmlsbEhvc3RJbkNzc1RleHQgPSBjc3NUZXh0ID0+IHtcbiAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZShfY29sb25Ib3N0Q29udGV4dFJlLCBgJDEke19wb2x5ZmlsbEhvc3RDb250ZXh0fWApLnJlcGxhY2UoX2NvbG9uSG9zdFJlLCBgJDEke19wb2x5ZmlsbEhvc3R9YCkucmVwbGFjZShfY29sb25TbG90dGVkUmUsIGAkMSR7X3BvbHlmaWxsU2xvdHRlZH1gKTtcbiAgcmV0dXJuIGNzc1RleHQ7XG59O1xudmFyIGNvbnZlcnRDb2xvblJ1bGUgPSAoY3NzVGV4dCwgcmVnRXhwLCBwYXJ0UmVwbGFjZXIpID0+IHtcbiAgcmV0dXJuIGNzc1RleHQucmVwbGFjZShyZWdFeHAsICguLi5tKSA9PiB7XG4gICAgaWYgKG1bMl0pIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gbVsyXS5zcGxpdChcIixcIik7XG4gICAgICBjb25zdCByID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHAgPSBwYXJ0c1tpXS50cmltKCk7XG4gICAgICAgIGlmICghcCkgYnJlYWs7XG4gICAgICAgIHIucHVzaChwYXJ0UmVwbGFjZXIoX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvciwgcCwgbVszXSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHIuam9pbihcIixcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yICsgbVszXTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciBjb2xvbkhvc3RQYXJ0UmVwbGFjZXIgPSAoaG9zdCwgcGFydCwgc3VmZml4KSA9PiB7XG4gIHJldHVybiBob3N0ICsgcGFydC5yZXBsYWNlKF9wb2x5ZmlsbEhvc3QsIFwiXCIpICsgc3VmZml4O1xufTtcbnZhciBjb252ZXJ0Q29sb25Ib3N0ID0gY3NzVGV4dCA9PiB7XG4gIHJldHVybiBjb252ZXJ0Q29sb25SdWxlKGNzc1RleHQsIF9jc3NDb2xvbkhvc3RSZSwgY29sb25Ib3N0UGFydFJlcGxhY2VyKTtcbn07XG52YXIgY29sb25Ib3N0Q29udGV4dFBhcnRSZXBsYWNlciA9IChob3N0LCBwYXJ0LCBzdWZmaXgpID0+IHtcbiAgaWYgKHBhcnQuaW5kZXhPZihfcG9seWZpbGxIb3N0KSA+IC0xKSB7XG4gICAgcmV0dXJuIGNvbG9uSG9zdFBhcnRSZXBsYWNlcihob3N0LCBwYXJ0LCBzdWZmaXgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBob3N0ICsgcGFydCArIHN1ZmZpeCArIFwiLCBcIiArIHBhcnQgKyBcIiBcIiArIGhvc3QgKyBzdWZmaXg7XG4gIH1cbn07XG52YXIgY29udmVydENvbG9uU2xvdHRlZCA9IChjc3NUZXh0LCBzbG90U2NvcGVJZCkgPT4ge1xuICBjb25zdCBzbG90Q2xhc3MgPSBcIi5cIiArIHNsb3RTY29wZUlkICsgXCIgPiBcIjtcbiAgY29uc3Qgc2VsZWN0b3JzID0gW107XG4gIGNzc1RleHQgPSBjc3NUZXh0LnJlcGxhY2UoX2Nzc0NvbG9uU2xvdHRlZFJlLCAoLi4ubSkgPT4ge1xuICAgIGlmIChtWzJdKSB7XG4gICAgICBjb25zdCBjb21wb3VuZCA9IG1bMl0udHJpbSgpO1xuICAgICAgY29uc3Qgc3VmZml4ID0gbVszXTtcbiAgICAgIGNvbnN0IHNsb3R0ZWRTZWxlY3RvciA9IHNsb3RDbGFzcyArIGNvbXBvdW5kICsgc3VmZml4O1xuICAgICAgbGV0IHByZWZpeFNlbGVjdG9yID0gXCJcIjtcbiAgICAgIGZvciAobGV0IGkgPSBtWzRdIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgY2hhciA9IG1bNV1baV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIiB8fCBjaGFyID09PSBcIixcIikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHByZWZpeFNlbGVjdG9yID0gY2hhciArIHByZWZpeFNlbGVjdG9yO1xuICAgICAgfVxuICAgICAgY29uc3Qgb3JnU2VsZWN0b3IgPSAocHJlZml4U2VsZWN0b3IgKyBzbG90dGVkU2VsZWN0b3IpLnRyaW0oKTtcbiAgICAgIGNvbnN0IGFkZGVkU2VsZWN0b3IgPSBgJHtwcmVmaXhTZWxlY3Rvci50cmltRW5kKCl9JHtzbG90dGVkU2VsZWN0b3IudHJpbSgpfWAudHJpbSgpO1xuICAgICAgaWYgKG9yZ1NlbGVjdG9yICE9PSBhZGRlZFNlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRTZWxlY3RvciA9IGAke2FkZGVkU2VsZWN0b3J9LCAke29yZ1NlbGVjdG9yfWA7XG4gICAgICAgIHNlbGVjdG9ycy5wdXNoKHtcbiAgICAgICAgICBvcmdTZWxlY3RvcixcbiAgICAgICAgICB1cGRhdGVkU2VsZWN0b3JcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2xvdHRlZFNlbGVjdG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvciArIG1bM107XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBzZWxlY3RvcnMsXG4gICAgY3NzVGV4dFxuICB9O1xufTtcbnZhciBjb252ZXJ0Q29sb25Ib3N0Q29udGV4dCA9IGNzc1RleHQgPT4ge1xuICByZXR1cm4gY29udmVydENvbG9uUnVsZShjc3NUZXh0LCBfY3NzQ29sb25Ib3N0Q29udGV4dFJlLCBjb2xvbkhvc3RDb250ZXh0UGFydFJlcGxhY2VyKTtcbn07XG52YXIgY29udmVydFNoYWRvd0RPTVNlbGVjdG9ycyA9IGNzc1RleHQgPT4ge1xuICByZXR1cm4gX3NoYWRvd0RPTVNlbGVjdG9yc1JlLnJlZHVjZSgocmVzdWx0LCBwYXR0ZXJuKSA9PiByZXN1bHQucmVwbGFjZShwYXR0ZXJuLCBcIiBcIiksIGNzc1RleHQpO1xufTtcbnZhciBtYWtlU2NvcGVNYXRjaGVyID0gc2NvcGVTZWxlY3RvcjIgPT4ge1xuICBjb25zdCBscmUgPSAvXFxbL2c7XG4gIGNvbnN0IHJyZSA9IC9cXF0vZztcbiAgc2NvcGVTZWxlY3RvcjIgPSBzY29wZVNlbGVjdG9yMi5yZXBsYWNlKGxyZSwgXCJcXFxcW1wiKS5yZXBsYWNlKHJyZSwgXCJcXFxcXVwiKTtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKFwiICsgc2NvcGVTZWxlY3RvcjIgKyBcIilcIiArIF9zZWxlY3RvclJlU3VmZml4LCBcIm1cIik7XG59O1xudmFyIHNlbGVjdG9yTmVlZHNTY29waW5nID0gKHNlbGVjdG9yLCBzY29wZVNlbGVjdG9yMikgPT4ge1xuICBjb25zdCByZSA9IG1ha2VTY29wZU1hdGNoZXIoc2NvcGVTZWxlY3RvcjIpO1xuICByZXR1cm4gIXJlLnRlc3Qoc2VsZWN0b3IpO1xufTtcbnZhciBpbmplY3RTY29waW5nU2VsZWN0b3IgPSAoc2VsZWN0b3IsIHNjb3BpbmdTZWxlY3RvcikgPT4ge1xuICByZXR1cm4gc2VsZWN0b3IucmVwbGFjZShfc2VsZWN0b3JQYXJ0c1JlLCAoXywgYmVmb3JlID0gXCJcIiwgX2NvbG9uR3JvdXAsIGNvbG9uID0gXCJcIiwgYWZ0ZXIgPSBcIlwiKSA9PiB7XG4gICAgcmV0dXJuIGJlZm9yZSArIHNjb3BpbmdTZWxlY3RvciArIGNvbG9uICsgYWZ0ZXI7XG4gIH0pO1xufTtcbnZhciBhcHBseVNpbXBsZVNlbGVjdG9yU2NvcGUgPSAoc2VsZWN0b3IsIHNjb3BlU2VsZWN0b3IyLCBob3N0U2VsZWN0b3IpID0+IHtcbiAgX3BvbHlmaWxsSG9zdFJlLmxhc3RJbmRleCA9IDA7XG4gIGlmIChfcG9seWZpbGxIb3N0UmUudGVzdChzZWxlY3RvcikpIHtcbiAgICBjb25zdCByZXBsYWNlQnkgPSBgLiR7aG9zdFNlbGVjdG9yfWA7XG4gICAgcmV0dXJuIHNlbGVjdG9yLnJlcGxhY2UoX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvclJlLCAoXywgc2VsZWN0b3IyKSA9PiBpbmplY3RTY29waW5nU2VsZWN0b3Ioc2VsZWN0b3IyLCByZXBsYWNlQnkpKS5yZXBsYWNlKF9wb2x5ZmlsbEhvc3RSZSwgcmVwbGFjZUJ5ICsgXCIgXCIpO1xuICB9XG4gIHJldHVybiBzY29wZVNlbGVjdG9yMiArIFwiIFwiICsgc2VsZWN0b3I7XG59O1xudmFyIGFwcGx5U3RyaWN0U2VsZWN0b3JTY29wZSA9IChzZWxlY3Rvciwgc2NvcGVTZWxlY3RvcjIsIGhvc3RTZWxlY3RvcikgPT4ge1xuICBjb25zdCBpc1JlID0gL1xcW2lzPShbXlxcXV0qKVxcXS9nO1xuICBzY29wZVNlbGVjdG9yMiA9IHNjb3BlU2VsZWN0b3IyLnJlcGxhY2UoaXNSZSwgKF8sIC4uLnBhcnRzKSA9PiBwYXJ0c1swXSk7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IFwiLlwiICsgc2NvcGVTZWxlY3RvcjI7XG4gIGNvbnN0IF9zY29wZVNlbGVjdG9yUGFydCA9IHAgPT4ge1xuICAgIGxldCBzY29wZWRQID0gcC50cmltKCk7XG4gICAgaWYgKCFzY29wZWRQKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgaWYgKHAuaW5kZXhPZihfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yKSA+IC0xKSB7XG4gICAgICBzY29wZWRQID0gYXBwbHlTaW1wbGVTZWxlY3RvclNjb3BlKHAsIHNjb3BlU2VsZWN0b3IyLCBob3N0U2VsZWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ID0gcC5yZXBsYWNlKF9wb2x5ZmlsbEhvc3RSZSwgXCJcIik7XG4gICAgICBpZiAodC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNjb3BlZFAgPSBpbmplY3RTY29waW5nU2VsZWN0b3IodCwgY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNjb3BlZFA7XG4gIH07XG4gIGNvbnN0IHNhZmVDb250ZW50ID0gc2FmZVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgc2VsZWN0b3IgPSBzYWZlQ29udGVudC5jb250ZW50O1xuICBsZXQgc2NvcGVkU2VsZWN0b3IgPSBcIlwiO1xuICBsZXQgc3RhcnRJbmRleCA9IDA7XG4gIGxldCByZXM7XG4gIGNvbnN0IHNlcCA9IC8oIHw+fFxcK3x+KD8hPSkpXFxzKi9nO1xuICBjb25zdCBoYXNIb3N0ID0gc2VsZWN0b3IuaW5kZXhPZihfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yKSA+IC0xO1xuICBsZXQgc2hvdWxkU2NvcGUgPSAhaGFzSG9zdDtcbiAgd2hpbGUgKChyZXMgPSBzZXAuZXhlYyhzZWxlY3RvcikpICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2VwYXJhdG9yID0gcmVzWzFdO1xuICAgIGNvbnN0IHBhcnQyID0gc2VsZWN0b3Iuc2xpY2Uoc3RhcnRJbmRleCwgcmVzLmluZGV4KS50cmltKCk7XG4gICAgc2hvdWxkU2NvcGUgPSBzaG91bGRTY29wZSB8fCBwYXJ0Mi5pbmRleE9mKF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3IpID4gLTE7XG4gICAgY29uc3Qgc2NvcGVkUGFydCA9IHNob3VsZFNjb3BlID8gX3Njb3BlU2VsZWN0b3JQYXJ0KHBhcnQyKSA6IHBhcnQyO1xuICAgIHNjb3BlZFNlbGVjdG9yICs9IGAke3Njb3BlZFBhcnR9ICR7c2VwYXJhdG9yfSBgO1xuICAgIHN0YXJ0SW5kZXggPSBzZXAubGFzdEluZGV4O1xuICB9XG4gIGNvbnN0IHBhcnQgPSBzZWxlY3Rvci5zdWJzdHJpbmcoc3RhcnRJbmRleCk7XG4gIHNob3VsZFNjb3BlID0gc2hvdWxkU2NvcGUgfHwgcGFydC5pbmRleE9mKF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3IpID4gLTE7XG4gIHNjb3BlZFNlbGVjdG9yICs9IHNob3VsZFNjb3BlID8gX3Njb3BlU2VsZWN0b3JQYXJ0KHBhcnQpIDogcGFydDtcbiAgcmV0dXJuIHJlc3RvcmVTYWZlU2VsZWN0b3Ioc2FmZUNvbnRlbnQucGxhY2Vob2xkZXJzLCBzY29wZWRTZWxlY3Rvcik7XG59O1xudmFyIHNjb3BlU2VsZWN0b3IgPSAoc2VsZWN0b3IsIHNjb3BlU2VsZWN0b3JUZXh0LCBob3N0U2VsZWN0b3IsIHNsb3RTZWxlY3RvcikgPT4ge1xuICByZXR1cm4gc2VsZWN0b3Iuc3BsaXQoXCIsXCIpLm1hcChzaGFsbG93UGFydCA9PiB7XG4gICAgaWYgKHNsb3RTZWxlY3RvciAmJiBzaGFsbG93UGFydC5pbmRleE9mKFwiLlwiICsgc2xvdFNlbGVjdG9yKSA+IC0xKSB7XG4gICAgICByZXR1cm4gc2hhbGxvd1BhcnQudHJpbSgpO1xuICAgIH1cbiAgICBpZiAoc2VsZWN0b3JOZWVkc1Njb3Bpbmcoc2hhbGxvd1BhcnQsIHNjb3BlU2VsZWN0b3JUZXh0KSkge1xuICAgICAgcmV0dXJuIGFwcGx5U3RyaWN0U2VsZWN0b3JTY29wZShzaGFsbG93UGFydCwgc2NvcGVTZWxlY3RvclRleHQsIGhvc3RTZWxlY3RvcikudHJpbSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2hhbGxvd1BhcnQudHJpbSgpO1xuICAgIH1cbiAgfSkuam9pbihcIiwgXCIpO1xufTtcbnZhciBzY29wZVNlbGVjdG9ycyA9IChjc3NUZXh0LCBzY29wZVNlbGVjdG9yVGV4dCwgaG9zdFNlbGVjdG9yLCBzbG90U2VsZWN0b3IpID0+IHtcbiAgcmV0dXJuIHByb2Nlc3NSdWxlcyhjc3NUZXh0LCBydWxlID0+IHtcbiAgICBsZXQgc2VsZWN0b3IgPSBydWxlLnNlbGVjdG9yO1xuICAgIGxldCBjb250ZW50ID0gcnVsZS5jb250ZW50O1xuICAgIGlmIChydWxlLnNlbGVjdG9yWzBdICE9PSBcIkBcIikge1xuICAgICAgc2VsZWN0b3IgPSBzY29wZVNlbGVjdG9yKHJ1bGUuc2VsZWN0b3IsIHNjb3BlU2VsZWN0b3JUZXh0LCBob3N0U2VsZWN0b3IsIHNsb3RTZWxlY3Rvcik7XG4gICAgfSBlbHNlIGlmIChydWxlLnNlbGVjdG9yLnN0YXJ0c1dpdGgoXCJAbWVkaWFcIikgfHwgcnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKFwiQHN1cHBvcnRzXCIpIHx8IHJ1bGUuc2VsZWN0b3Iuc3RhcnRzV2l0aChcIkBwYWdlXCIpIHx8IHJ1bGUuc2VsZWN0b3Iuc3RhcnRzV2l0aChcIkBkb2N1bWVudFwiKSkge1xuICAgICAgY29udGVudCA9IHNjb3BlU2VsZWN0b3JzKHJ1bGUuY29udGVudCwgc2NvcGVTZWxlY3RvclRleHQsIGhvc3RTZWxlY3Rvciwgc2xvdFNlbGVjdG9yKTtcbiAgICB9XG4gICAgY29uc3QgY3NzUnVsZSA9IHtcbiAgICAgIHNlbGVjdG9yOiBzZWxlY3Rvci5yZXBsYWNlKC9cXHN7Mix9L2csIFwiIFwiKS50cmltKCksXG4gICAgICBjb250ZW50XG4gICAgfTtcbiAgICByZXR1cm4gY3NzUnVsZTtcbiAgfSk7XG59O1xudmFyIHNjb3BlQ3NzVGV4dCA9IChjc3NUZXh0LCBzY29wZUlkLCBob3N0U2NvcGVJZCwgc2xvdFNjb3BlSWQpID0+IHtcbiAgY3NzVGV4dCA9IGluc2VydFBvbHlmaWxsSG9zdEluQ3NzVGV4dChjc3NUZXh0KTtcbiAgY3NzVGV4dCA9IGNvbnZlcnRDb2xvbkhvc3QoY3NzVGV4dCk7XG4gIGNzc1RleHQgPSBjb252ZXJ0Q29sb25Ib3N0Q29udGV4dChjc3NUZXh0KTtcbiAgY29uc3Qgc2xvdHRlZCA9IGNvbnZlcnRDb2xvblNsb3R0ZWQoY3NzVGV4dCwgc2xvdFNjb3BlSWQpO1xuICBjc3NUZXh0ID0gc2xvdHRlZC5jc3NUZXh0O1xuICBjc3NUZXh0ID0gY29udmVydFNoYWRvd0RPTVNlbGVjdG9ycyhjc3NUZXh0KTtcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBjc3NUZXh0ID0gc2NvcGVTZWxlY3RvcnMoY3NzVGV4dCwgc2NvcGVJZCwgaG9zdFNjb3BlSWQsIHNsb3RTY29wZUlkKTtcbiAgfVxuICBjc3NUZXh0ID0gcmVwbGFjZVNoYWRvd0Nzc0hvc3QoY3NzVGV4dCwgaG9zdFNjb3BlSWQpO1xuICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKC8+XFxzKlxcKlxccysoW157LCBdKykvZ20sIFwiICQxIFwiKTtcbiAgcmV0dXJuIHtcbiAgICBjc3NUZXh0OiBjc3NUZXh0LnRyaW0oKSxcbiAgICAvLyBXZSBuZWVkIHRvIHJlcGxhY2UgdGhlIHNoYWRvdyBDU1MgaG9zdCBzdHJpbmcgaW4gZWFjaCBvZiB0aGVzZSBzZWxlY3RvcnMgc2luY2Ugd2UgY3JlYXRlZFxuICAgIC8vIHRoZW0gcHJpb3IgdG8gdGhlIHJlcGxhY2VtZW50IGhhcHBlbmluZyBpbiB0aGUgY29tcG9uZW50cyBDU1MgdGV4dC5cbiAgICBzbG90dGVkU2VsZWN0b3JzOiBzbG90dGVkLnNlbGVjdG9ycy5tYXAocmVmID0+ICh7XG4gICAgICBvcmdTZWxlY3RvcjogcmVwbGFjZVNoYWRvd0Nzc0hvc3QocmVmLm9yZ1NlbGVjdG9yLCBob3N0U2NvcGVJZCksXG4gICAgICB1cGRhdGVkU2VsZWN0b3I6IHJlcGxhY2VTaGFkb3dDc3NIb3N0KHJlZi51cGRhdGVkU2VsZWN0b3IsIGhvc3RTY29wZUlkKVxuICAgIH0pKVxuICB9O1xufTtcbnZhciByZXBsYWNlU2hhZG93Q3NzSG9zdCA9IChjc3NUZXh0LCBob3N0U2NvcGVJZCkgPT4ge1xuICByZXR1cm4gY3NzVGV4dC5yZXBsYWNlKC8tc2hhZG93Y3NzaG9zdC1uby1jb21iaW5hdG9yL2csIGAuJHtob3N0U2NvcGVJZH1gKTtcbn07XG52YXIgc2NvcGVDc3MgPSAoY3NzVGV4dCwgc2NvcGVJZCkgPT4ge1xuICBjb25zdCBob3N0U2NvcGVJZCA9IHNjb3BlSWQgKyBcIi1oXCI7XG4gIGNvbnN0IHNsb3RTY29wZUlkID0gc2NvcGVJZCArIFwiLXNcIjtcbiAgY29uc3QgY29tbWVudHNXaXRoSGFzaCA9IGV4dHJhY3RDb21tZW50c1dpdGhIYXNoKGNzc1RleHQpO1xuICBjc3NUZXh0ID0gc3RyaXBDb21tZW50cyhjc3NUZXh0KTtcbiAgY29uc3Qgc2NvcGVkID0gc2NvcGVDc3NUZXh0KGNzc1RleHQsIHNjb3BlSWQsIGhvc3RTY29wZUlkLCBzbG90U2NvcGVJZCk7XG4gIGNzc1RleHQgPSBbc2NvcGVkLmNzc1RleHQsIC4uLmNvbW1lbnRzV2l0aEhhc2hdLmpvaW4oXCJcXG5cIik7XG4gIHNjb3BlZC5zbG90dGVkU2VsZWN0b3JzLmZvckVhY2goc2xvdHRlZFNlbGVjdG9yID0+IHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwU3BlY2lhbENoYXJhY3RlcnMoc2xvdHRlZFNlbGVjdG9yLm9yZ1NlbGVjdG9yKSwgXCJnXCIpO1xuICAgIGNzc1RleHQgPSBjc3NUZXh0LnJlcGxhY2UocmVnZXgsIHNsb3R0ZWRTZWxlY3Rvci51cGRhdGVkU2VsZWN0b3IpO1xuICB9KTtcbiAgcmV0dXJuIGNzc1RleHQ7XG59O1xuZXhwb3J0IHsgc2NvcGVDc3MgfTsiXSwibWFwcGluZ3MiOiI7OztBQUNBLElBQUksZ0NBQWdDLFVBQVE7QUFDMUMsU0FBTyxLQUFLLFFBQVEsdUJBQXVCLE1BQU07QUFDbkQ7QUFjQSxJQUFJLGVBQWUsY0FBWTtBQUM3QixRQUFNLGVBQWUsQ0FBQztBQUN0QixNQUFJLFFBQVE7QUFDWixhQUFXLFNBQVMsUUFBUSxpQkFBaUIsQ0FBQyxHQUFHLFNBQVM7QUFDeEQsVUFBTSxZQUFZLFFBQVEsS0FBSztBQUMvQixpQkFBYSxLQUFLLElBQUk7QUFDdEI7QUFDQSxXQUFPO0FBQUEsRUFDVCxDQUFDO0FBQ0QsUUFBTSxVQUFVLFNBQVMsUUFBUSw2QkFBNkIsQ0FBQyxHQUFHLFFBQVEsUUFBUTtBQUNo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QUssS0FBSyxTQUFTLFdBQVcsV0FBVyxHQUFHO0FBQ3BLLGdCQUFVLGVBQWUsS0FBSyxTQUFTLG1CQUFtQixjQUFjLFlBQVk7QUFBQSxJQUN0RjtBQUNBLFVBQU0sVUFBVTtBQUFBLE1BQ2QsVUFBVSxTQUFTLFFBQVEsV0FBVyxHQUFHLEVBQUUsS0FBSztBQUFBLE1BQ2hEO0FBQUEsSUFDRjtBQUNBLFdBQU87QUFBQSxFQUNULENBQUM7QUFDSDtBQUNBLElBQUksZUFBZSxDQUFDLFNBQVMsU0FBUyxhQUFhLGdCQUFnQjtBQUNqRSxZQUFVLDRCQUE0QixPQUFPO0FBQzdDLFlBQVUsaUJBQWlCLE9BQU87QUFDbEMsWUFBVSx3QkFBd0IsT0FBTztBQUN6QyxRQUFNLFVBQVUsb0JBQW9CLFNBQVMsV0FBVztBQUN4RCxZQUFVLFFBQVE7QUFDbEIsWUFBVSwwQkFBMEIsT0FBTztBQUMzQyxNQUFJLFNBQVM7QUFDWCxjQUFVLGVBQWUsU0FBUyxTQUFTLGFBQWEsV0FBVztBQUFBLEVBQ3JFO0FBQ0EsWUFBVSxxQkFBcUIsU0FBUyxXQUFXO0FBQ25ELFlBQVUsUUFBUSxRQUFRLHdCQUF3QixNQUFNO0FBQ3hELFNBQU87QUFBQSxJQUNMLFNBQVMsUUFBUSxLQUFLO0FBQUE7QUFBQTtBQUFBLElBR3RCLGtCQUFrQixRQUFRLFVBQVUsSUFBSSxVQUFRO0FBQUEsTUFDOUMsYUFBYSxxQkFBcUIsSUFBSSxhQUFhLFdBQVc7QUFBQSxNQUM5RCxpQkFBaUIscUJBQXFCLElBQUksaUJBQWlCLFdBQVc7QUFBQSxJQUN4RSxFQUFFO0FBQUEsRUFDSjtBQUNGO0FBQ0EsSUFBSSx1QkFBdUIsQ0FBQyxTQUFTLGdCQUFnQjtBQUNuRCxTQUFPLFFBQVEsUUFBUSxpQ0FBaUMsSUFBSSxXQUFXLEVBQUU7QUFDM0U7QUFDQSxJQUFJLFdBQVcsQ0FBQyxTQUFTLFlBQVk7QUFDbkMsUUFBTSxjQUFjLFVBQVU7QUFDOUIsUUFBTSxjQUFjLFVBQVU7QUFDOUIsUUFBTSxtQkFBbUIsd0JBQXdCLE9BQU87QUFDeEQsWUFBVSxjQUFjLE9BQU87QUFDL0IsUUFBTSxTQUFTLGFBQWEsU0FBUyxTQUFTLGFBQWEsV0FBVztBQUN0RSxZQUFVLENBQUMsT0FBTyxTQUFTLEdBQUcsZ0JBQWdCLEVBQUUsS0FBSyxJQUFJO0FBQ3pELFNBQU8saUJBQWlCLFFBQVEscUJBQW1CO0FBQ2pELFVBQU0sUUFBUSxJQUFJLE9BQU8sOEJBQThCLGdCQUFnQixXQUFXLEdBQUcsR0FBRztBQUN4RixjQUFVLFFBQVEsUUFBUSxPQUFPLGdCQUFnQixlQUFlO0FBQUEsRUFDbEUsQ0FBQztBQUNELFNBQU87QUFDVDsiLCJuYW1lcyI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
