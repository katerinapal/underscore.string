"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.s = undefined;

var _isBlank = require("./isBlank");

var _stripTags = require("./stripTags");

var _capitalize = require("./capitalize");

var _decapitalize = require("./decapitalize");

var _chop = require("./chop");

var _trim = require("./trim");

var _clean = require("./clean");

var _cleanDiacritics = require("./cleanDiacritics");

var _count = require("./count");

var _chars = require("./chars");

var _swapCase = require("./swapCase");

var _escapeHTML = require("./escapeHTML");

var _unescapeHTML = require("./unescapeHTML");

var _splice = require("./splice");

var _insert = require("./insert");

var _replaceAll = require("./replaceAll");

var _include = require("./include");

var _join = require("./join");

var _lines = require("./lines");

var _dedent = require("./dedent");

var _reverse = require("./reverse");

var _startsWith = require("./startsWith");

var _endsWith = require("./endsWith");

var _pred = require("./pred");

var _succ = require("./succ");

var _titleize = require("./titleize");

var _camelize = require("./camelize");

var _underscored = require("./underscored");

var _dasherize = require("./dasherize");

var _classify = require("./classify");

var _humanize = require("./humanize");

var _ltrim = require("./ltrim");

var _rtrim = require("./rtrim");

var _truncate = require("./truncate");

var _prune = require("./prune");

var _words = require("./words");

var _pad = require("./pad");

var _lpad = require("./lpad");

var _rpad = require("./rpad");

var _lrpad = require("./lrpad");

var _sprintf = require("./sprintf");

var _vsprintf = require("./vsprintf");

var _toNumber = require("./toNumber");

var _numberFormat = require("./numberFormat");

var _strRight = require("./strRight");

var _strRightBack = require("./strRightBack");

var _strLeft = require("./strLeft");

var _strLeftBack = require("./strLeftBack");

var _toSentence = require("./toSentence");

var _toSentenceSerial = require("./toSentenceSerial");

var _slugify = require("./slugify");

var _surround = require("./surround");

var _quote = require("./quote");

var _unquote = require("./unquote");

var _repeat = require("./repeat");

var _naturalCmp = require("./naturalCmp");

var _levenshtein = require("./levenshtein");

var _toBoolean = require("./toBoolean");

var _exports = require("./exports");

var _escapeRegExp = require("./helper/escapeRegExp");

var _wrap = require("./wrap");

var _map = require("./map");

var index_s = s;

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

s.isBlank = _isBlank.isBlankjs;
s.stripTags = _stripTags.stripTagsjs;
s.capitalize = _capitalize.capitalizejs;
s.decapitalize = _decapitalize.decapitalizejs;
s.chop = _chop.chopjs;
s.trim = _trim.trimjs;
s.clean = _clean.cleanjs;
s.cleanDiacritics = _cleanDiacritics.cleanDiacriticsjs;
s.count = _count.countjs;
s.chars = _chars.charsjs;
s.swapCase = _swapCase.swapCasejs;
s.escapeHTML = _escapeHTML.escapeHTMLjs;
s.unescapeHTML = _unescapeHTML.unescapeHTMLjs;
s.splice = _splice.splicejs;
s.insert = _insert.insertjs;
s.replaceAll = _replaceAll.replaceAlljs;
s.include = _include.includejs;
s.join = _join.joinjs;
s.lines = _lines.linesjs;
s.dedent = _dedent.dedentjs;
s.reverse = _reverse.reversejs;
s.startsWith = _startsWith.startsWithjs;
s.endsWith = _endsWith.endsWithjs;
s.pred = _pred.predjs;
s.succ = _succ.succjs;
s.titleize = _titleize.titleizejs;
s.camelize = _camelize.camelizejs;
s.underscored = _underscored.underscoredjs;
s.dasherize = _dasherize.dasherizejs;
s.classify = _classify.classifyjs;
s.humanize = _humanize.humanizejs;
s.ltrim = _ltrim.ltrimjs;
s.rtrim = _rtrim.rtrimjs;
s.truncate = _truncate.truncatejs;
s.prune = _prune.prunejs;
s.words = _words.wordsjs;
s.pad = _pad.padjs;
s.lpad = _lpad.lpadjs;
s.rpad = _rpad.rpadjs;
s.lrpad = _lrpad.lrpadjs;
s.sprintf = _sprintf.sprintfjs;
s.vsprintf = _vsprintf.vsprintfjs;
s.toNumber = _toNumber.toNumberjs;
s.numberFormat = _numberFormat.numberFormatjs;
s.strRight = _strRight.strRightjs;
s.strRightBack = _strRightBack.strRightBackjs;
s.strLeft = _strLeft.strLeftjs;
s.strLeftBack = _strLeftBack.strLeftBackjs;
s.toSentence = _toSentence.toSentencejs;
s.toSentenceSerial = _toSentenceSerial.toSentenceSerialjs;
s.slugify = _slugify.slugifyjs;
s.surround = _surround.surroundjs;
s.quote = _quote.quotejs;
s.unquote = _unquote.unquotejs;
s.repeat = _repeat.repeatjs;
s.naturalCmp = _naturalCmp.naturalCmpjs;
s.levenshtein = _levenshtein.levenshteinjs;
s.toBoolean = _toBoolean.toBooleanjs;
s.exports = _exports.exportsjs;
s.escapeRegExp = _escapeRegExp.escapeRegExpjs;
s.wrap = _wrap.wrapjs;
s.map = _map.mapjs;

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
}exports.s = index_s;
