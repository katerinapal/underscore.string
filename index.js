import { isBlank as isBlank_isBlank } from "./isBlank";
import { stripTags as stripTags_stripTags } from "./stripTags";
import { capitalize as capitalize_capitalize } from "./capitalize";
import { decapitalize as decapitalize_decapitalize } from "./decapitalize";
import { chop as chop_chop } from "./chop";
import { trim as trim_trim } from "./trim";
import { clean as clean_clean } from "./clean";
import { cleanDiacritics as cleanDiacritics_cleanDiacritics } from "./cleanDiacritics";
import { count as count_count } from "./count";
import { chars as chars_chars } from "./chars";
import { swapCase as swapCase_swapCase } from "./swapCase";
import { escapeHTML as escapeHTML_escapeHTML } from "./escapeHTML";
import { unescapeHTML as unescapeHTML_unescapeHTML } from "./unescapeHTML";
import { splice as splice_splice } from "./splice";
import { insert as insert_insert } from "./insert";
import { replaceAll as replaceAll_replaceAll } from "./replaceAll";
import { include as include_include } from "./include";
import { join as join_join } from "./join";
import { lines as lines_lines } from "./lines";
import { dedent as dedent_dedent } from "./dedent";
import { reverse as reverse_reverse } from "./reverse";
import { startsWith as startsWith_startsWith } from "./startsWith";
import { endsWith as endsWith_endsWith } from "./endsWith";
import { pred as pred_pred } from "./pred";
import { succ as succ_succ } from "./succ";
import { titleize as titleize_titleize } from "./titleize";
import { camelize as camelize_camelize } from "./camelize";
import { underscored as underscored_underscored } from "./underscored";
import { dasherize as dasherize_dasherize } from "./dasherize";
import { classify as classify_classify } from "./classify";
import { humanize as humanize_humanize } from "./humanize";
import { ltrim as ltrim_ltrim } from "./ltrim";
import { rtrim as rtrim_rtrim } from "./rtrim";
import { truncate as truncate_truncate } from "./truncate";
import { prune as prune_prune } from "./prune";
import { words as words_words } from "./words";
import { pad as pad_pad } from "./pad";
import { lpad as lpad_lpad } from "./lpad";
import { rpad as rpad_rpad } from "./rpad";
import { lrpad as lrpad_lrpad } from "./lrpad";
import { sprintfjs } from "./sprintf";
import { vsprintfjs } from "./vsprintf";
import { toNumber as toNumber_toNumber } from "./toNumber";
import { numberFormat as numberFormat_numberFormat } from "./numberFormat";
import { strRight as strRight_strRight } from "./strRight";
import { strRightBack as strRightBack_strRightBack } from "./strRightBack";
import { strLeft as strLeft_strLeft } from "./strLeft";
import { strLeftBack as strLeftBack_strLeftBack } from "./strLeftBack";
import { toSentence as toSentence_toSentence } from "./toSentence";
import { toSentenceSerial as toSentenceSerial_toSentenceSerial } from "./toSentenceSerial";
import { slugify as slugify_slugify } from "./slugify";
import { surround as surround_surround } from "./surround";
import { quote as quote_quote } from "./quote";
import { unquote as unquote_unquote } from "./unquote";
import { repeat as repeat_repeat } from "./repeat";
import { naturalCmp as naturalCmp_naturalCmp } from "./naturalCmp";
import { levenshtein as levenshtein_levenshtein } from "./levenshtein";
import { toBoolean as toBoolean_toBoolean } from "./toBoolean";
import { exports as exports_exports } from "./exports";
import { escapeRegExp as escapeRegExp_escapeRegExp } from "./helper/escapeRegExp";
import { wrap as wrap_wrap } from "./wrap";
import { map as map_map } from "./map";
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

isBlank          = isBlank_isBlank;
stripTags        = stripTags_stripTags;
capitalize       = capitalize_capitalize;
decapitalize     = decapitalize_decapitalize;
chop             = chop_chop;
trim             = trim_trim;
clean            = clean_clean;
cleanDiacritics  = cleanDiacritics_cleanDiacritics;
count            = count_count;
chars            = chars_chars;
swapCase         = swapCase_swapCase;
escapeHTML       = escapeHTML_escapeHTML;
unescapeHTML     = unescapeHTML_unescapeHTML;
splice           = splice_splice;
insert           = insert_insert;
replaceAll       = replaceAll_replaceAll;
include          = include_include;
join             = join_join;
lines            = lines_lines;
dedent           = dedent_dedent;
reverse          = reverse_reverse;
startsWith       = startsWith_startsWith;
endsWith         = endsWith_endsWith;
pred             = pred_pred;
succ             = succ_succ;
titleize         = titleize_titleize;
camelize         = camelize_camelize;
underscored      = underscored_underscored;
dasherize        = dasherize_dasherize;
classify         = classify_classify;
humanize         = humanize_humanize;
ltrim            = ltrim_ltrim;
rtrim            = rtrim_rtrim;
truncate         = truncate_truncate;
prune            = prune_prune;
words            = words_words;
pad              = pad_pad;
lpad             = lpad_lpad;
rpad             = rpad_rpad;
lrpad            = lrpad_lrpad;
sprintf          = sprintfjs;
vsprintf         = vsprintfjs;
toNumber         = toNumber_toNumber;
numberFormat     = numberFormat_numberFormat;
strRight         = strRight_strRight;
strRightBack     = strRightBack_strRightBack;
strLeft          = strLeft_strLeft;
strLeftBack      = strLeftBack_strLeftBack;
toSentence       = toSentence_toSentence;
toSentenceSerial = toSentenceSerial_toSentenceSerial;
slugify          = slugify_slugify;
surround         = surround_surround;
quote            = quote_quote;
unquote          = unquote_unquote;
repeat           = repeat_repeat;
naturalCmp       = naturalCmp_naturalCmp;
levenshtein      = levenshtein_levenshtein;
toBoolean        = toBoolean_toBoolean;
index_exports          = exports_exports;
escapeRegExp     = escapeRegExp_escapeRegExp;
wrap             = wrap_wrap;
map              = map_map;

// Aliases
strip     = trim;
lstrip    = ltrim;
rstrip    = rtrim;
center    = lrpad;
rjust     = lpad;
ljust     = rpad;
contains  = include;
q         = quote;
toBool    = toBoolean;
camelcase = camelize;
mapChars  = map;


// Implement chaining
s.prototype = {
  value: function value() {
    return this._wrapped;
  }
};

function fn2method(key, fn) {
  if (typeof fn !== 'function') return;
  s.prototype[key] = function() {
    var args = [this._wrapped].concat(Array.prototype.slice.call(arguments));
    var res = fn.apply(null, args);
    // if the result is non-string stop the chain and return the value
    return typeof res === 'string' ? new s(res) : res;
  };
}

// Copy functions to instance methods for chaining
for (var key in s) fn2method(key, s[key]);

fn2method('tap', function tap(string, fn) {
  return fn(string);
});

function prototype2method(methodName) {
  fn2method(methodName, function(context) {
    var args = Array.prototype.slice.call(arguments, 1);
    return String.prototype[methodName].apply(context, args);
  });
}

var prototypeMethods = [
  'toUpperCase',
  'toLowerCase',
  'split',
  'replace',
  'slice',
  'substring',
  'substr',
  'concat'
];

for (var method in prototypeMethods) prototype2method(prototypeMethods[method]);


export { trim, index_exports as exports, contains, s };
