"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.s = exports.contains = exports.exports = exports.trim = undefined;

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

var mapChars;
var camelcase;
var toBool;
var q;
var contains;
var ljust;
var rjust;
var center;
var rstrip;
var lstrip;
var strip;
var map;
var wrap;
var escapeRegExp;
var index_exports;
var toBoolean;
var levenshtein;
var naturalCmp;
var repeat;
var unquote;
var quote;
var surround;
var slugify;
var toSentenceSerial;
var toSentence;
var strLeftBack;
var strLeft;
var strRightBack;
var strRight;
var numberFormat;
var toNumber;
var vsprintf;
var sprintf;
var lrpad;
var rpad;
var lpad;
var pad;
var words;
var prune;
var truncate;
var rtrim;
var ltrim;
var humanize;
var classify;
var dasherize;
var underscored;
var camelize;
var titleize;
var succ;
var pred;
var endsWith;
var startsWith;
var reverse;
var dedent;
var lines;
var join;
var include;
var replaceAll;
var insert;
var splice;
var unescapeHTML;
var escapeHTML;
var swapCase;
var chars;
var count;
var cleanDiacritics;
var clean;
var trim;
var chop;
var decapitalize;
var capitalize;
var stripTags;
var isBlank;
var VERSION;
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

VERSION = '3.3.4';

isBlank = _isBlank.isBlank;
stripTags = _stripTags.stripTags;
capitalize = _capitalize.capitalize;
decapitalize = _decapitalize.decapitalize;
chop = _chop.chop;
exports.trim = trim = _trim.trim;
clean = _clean.clean;
cleanDiacritics = _cleanDiacritics.cleanDiacritics;
count = _count.count;
chars = _chars.chars;
swapCase = _swapCase.swapCase;
escapeHTML = _escapeHTML.escapeHTML;
unescapeHTML = _unescapeHTML.unescapeHTML;
splice = _splice.splice;
insert = _insert.insert;
replaceAll = _replaceAll.replaceAll;
include = _include.include;
join = _join.join;
lines = _lines.lines;
dedent = _dedent.dedent;
reverse = _reverse.reverse;
startsWith = _startsWith.startsWith;
endsWith = _endsWith.endsWith;
pred = _pred.pred;
succ = _succ.succ;
titleize = _titleize.titleize;
camelize = _camelize.camelize;
underscored = _underscored.underscored;
dasherize = _dasherize.dasherize;
classify = _classify.classify;
humanize = _humanize.humanize;
ltrim = _ltrim.ltrim;
rtrim = _rtrim.rtrim;
truncate = _truncate.truncate;
prune = _prune.prune;
words = _words.words;
pad = _pad.pad;
lpad = _lpad.lpad;
rpad = _rpad.rpad;
lrpad = _lrpad.lrpad;
sprintf = _sprintf.sprintfjs;
vsprintf = _vsprintf.vsprintfjs;
toNumber = _toNumber.toNumber;
numberFormat = _numberFormat.numberFormat;
strRight = _strRight.strRight;
strRightBack = _strRightBack.strRightBack;
strLeft = _strLeft.strLeft;
strLeftBack = _strLeftBack.strLeftBack;
toSentence = _toSentence.toSentence;
toSentenceSerial = _toSentenceSerial.toSentenceSerial;
slugify = _slugify.slugify;
surround = _surround.surround;
quote = _quote.quote;
unquote = _unquote.unquote;
repeat = _repeat.repeat;
naturalCmp = _naturalCmp.naturalCmp;
levenshtein = _levenshtein.levenshtein;
toBoolean = _toBoolean.toBoolean;
exports.exports = index_exports = _exports.exports;
escapeRegExp = _escapeRegExp.escapeRegExp;
wrap = _wrap.wrap;
map = _map.map;

// Aliases
strip = trim;
lstrip = ltrim;
rstrip = rtrim;
center = lrpad;
rjust = lpad;
ljust = rpad;
exports.contains = contains = include;
q = quote;
toBool = toBoolean;
camelcase = camelize;
mapChars = map;

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
}exports.trim = trim;
exports.exports = index_exports;
exports.contains = contains;
exports.s = s;
