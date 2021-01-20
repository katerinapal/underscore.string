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

var mod_s = s;

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

s.isBlank = _isBlank.isBlank;
s.stripTags = _stripTags.stripTags;
s.capitalize = _capitalize.capitalize;
s.decapitalize = _decapitalize.decapitalize;
s.chop = _chop.chop;
s.trim = _trim.trim;
s.clean = _clean.clean;
s.cleanDiacritics = _cleanDiacritics.cleanDiacritics;
s.count = _count.count;
s.chars = _chars.chars;
s.swapCase = _swapCase.swapCase;
s.escapeHTML = _escapeHTML.escapeHTML;
s.unescapeHTML = _unescapeHTML.unescapeHTML;
s.splice = _splice.splice;
s.insert = _insert.insert;
s.replaceAll = _replaceAll.replaceAll;
s.include = _include.include;
s.join = _join.join;
s.lines = _lines.lines;
s.dedent = _dedent.dedent;
s.reverse = _reverse.reverse;
s.startsWith = _startsWith.startsWith;
s.endsWith = _endsWith.endsWith;
s.pred = _pred.pred;
s.succ = _succ.succ;
s.titleize = _titleize.titleize;
s.camelize = _camelize.camelize;
s.underscored = _underscored.underscored;
s.dasherize = _dasherize.dasherize;
s.classify = _classify.classify;
s.humanize = _humanize.humanize;
s.ltrim = _ltrim.ltrim;
s.rtrim = _rtrim.rtrim;
s.truncate = _truncate.truncate;
s.prune = _prune.prune;
s.words = _words.words;
s.pad = _pad.pad;
s.lpad = _lpad.lpad;
s.rpad = _rpad.rpad;
s.lrpad = _lrpad.lrpad;
s.sprintf = _sprintf.sprintfjs;
s.vsprintf = _vsprintf.vsprintfjs;
s.toNumber = _toNumber.toNumber;
s.numberFormat = _numberFormat.numberFormat;
s.strRight = _strRight.strRight;
s.strRightBack = _strRightBack.strRightBack;
s.strLeft = _strLeft.strLeft;
s.strLeftBack = _strLeftBack.strLeftBack;
s.toSentence = _toSentence.toSentence;
s.toSentenceSerial = _toSentenceSerial.toSentenceSerial;
s.slugify = _slugify.slugify;
s.surround = _surround.surround;
s.quote = _quote.quote;
s.unquote = _unquote.unquote;
s.repeat = _repeat.repeat;
s.naturalCmp = _naturalCmp.naturalCmp;
s.levenshtein = _levenshtein.levenshtein;
s.toBoolean = _toBoolean.toBoolean;
s.exports = _exports.exports;
s.escapeRegExp = _escapeRegExp.escapeRegExp;
s.wrap = _wrap.wrap;
s.map = _map.map;

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
}exports.s = mod_s;
