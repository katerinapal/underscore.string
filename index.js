'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.s = undefined;

var _exports = require('./exports');

/*
* Underscore.string
* (c) 2010 Esa-Matti Suuronen <esa-matti aet suuronen dot org>
* Underscore.string is freely distributable under the terms of the MIT license.
* Documentation: https://github.com/epeli/underscore.string
* Some code is borrowed from MooTools and Alexandru Marasteanu.
* Version '3.3.4'
* @preserve
*/

'use strict';

function s(value) {
  /* jshint validthis: true */
  if (!(this instanceof s)) return new s(value);
  this._wrapped = value;
}

s.VERSION = '3.3.4';

s.isBlank = isBlank_isBlankjsjs;
s.stripTags = stripTags_stripTagsjsjs;
s.capitalize = capitalize_capitalizejsjs;
s.decapitalize = decapitalize_decapitalizejsjs;
s.chop = chop_chopjsjs;
s.trim = trim_trimjsjs;
s.clean = clean_cleanjsjs;
s.cleanDiacritics = cleanDiacritics_cleanDiacriticsjsjs;
s.count = count_countjsjs;
s.chars = chars_charsjsjs;
s.swapCase = swapCase_swapCasejsjs;
s.escapeHTML = escapeHTML_escapeHTMLjsjs;
s.unescapeHTML = unescapeHTML_unescapeHTMLjsjs;
s.splice = splice_splicejsjs;
s.insert = insert_insertjsjs;
s.replaceAll = replaceAll_replaceAlljsjs;
s.include = include_includejsjs;
s.join = join_joinjsjs;
s.lines = lines_linesjsjs;
s.dedent = dedent_dedentjsjs;
s.reverse = reverse_reversejsjs;
s.startsWith = startsWith_startsWithjsjs;
s.endsWith = endsWith_endsWithjsjs;
s.pred = pred_predjsjs;
s.succ = succ_succjsjs;
s.titleize = titleize_titleizejsjs;
s.camelize = camelize_camelizejsjs;
s.underscored = {};
s.dasherize = dasherize_dasherizejsjs;
s.classify = classify_classifyjsjs;
s.humanize = humanize_humanizejsjs;
s.ltrim = ltrim_ltrimjsjs;
s.rtrim = rtrim_rtrimjsjs;
s.truncate = truncate_truncatejsjs;
s.prune = prune_prunejsjs;
s.words = words_wordsjsjs;
s.pad = pad_padjsjs;
s.lpad = lpad_lpadjsjs;
s.rpad = rpad_rpadjsjs;
s.lrpad = lrpad_lrpadjsjs;
s.sprintf = {};
s.vsprintf = {};
s.toNumber = toNumber_toNumberjsjs;
s.numberFormat = numberFormat_numberFormatjsjs;
s.strRight = strRight_strRightjsjs;
s.strRightBack = strRightBack_strRightBackjsjs;
s.strLeft = strLeft_strLeftjsjs;
s.strLeftBack = strLeftBack_strLeftBackjsjs;
s.toSentence = toSentence_toSentencejsjs;
s.toSentenceSerial = toSentenceSerial_toSentenceSerialjsjs;
s.slugify = slugify_slugifyjsjs;
s.surround = surround_surroundjsjs;
s.quote = quote_quotejsjs;
s.unquote = unquote_unquotejsjs;
s.repeat = repeat_repeatjsjs;
s.naturalCmp = naturalCmp_naturalCmpjsjs;
s.levenshtein = levenshtein_levenshteinjsjs;
s.toBoolean = toBoolean_toBooleanjsjs;
s.exports = _exports.exportsjs;
s.escapeRegExp = helperescapeRegExp_escapeRegExpjsjs;
s.wrap = wrap_wrapjsjs;
s.map = map_mapjsjs;

// Aliases
s.strip = s.trim;
s.lstrip = s.ltrim;
s.rstrip = s.rtrim;
s.center = s.lrpad;
s.rjust = s.lpad;
s.ljust = s.rpad;
s.contains = s.include;
s.q = s.quote;
s.toBool = s.toBoolean;
s.camelcase = s.camelize;
s.mapChars = s.map;

// Implement chaining
s.prototype = {
  value: function value() {
    return this._wrapped;
  }
};

function fn2method(key, fn) {
  if (typeof fn !== 'function') return;
  s.prototype[key] = function () {
    var args = [this._wrapped].concat(Array.prototype.slice.call(arguments));
    var res = fn.apply(null, args);
    // if the result is non-string stop the chain and return the value
    return typeof res === 'string' ? new s(res) : res;
  };
}

// Copy functions to instance methods for chaining
for (var key in s) {
  fn2method(key, s[key]);
}fn2method('tap', function tap(string, fn) {
  return fn(string);
});

function prototype2method(methodName) {
  fn2method(methodName, function (context) {
    var args = Array.prototype.slice.call(arguments, 1);
    return String.prototype[methodName].apply(context, args);
  });
}

var prototypeMethods = ['toUpperCase', 'toLowerCase', 'split', 'replace', 'slice', 'substring', 'substr', 'concat'];

for (var method in prototypeMethods) {
  prototype2method(prototypeMethods[method]);
}var exported_s = s;
exports.s = exported_s;
