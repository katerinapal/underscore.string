var mod_s = s;
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

s.isBlank          = isBlank_isBlank;
s.stripTags        = stripTags_stripTags;
s.capitalize       = capitalize_capitalize;
s.decapitalize     = decapitalize_decapitalize;
s.chop             = chop_chop;
s.trim             = trim_trim;
s.clean            = clean_clean;
s.cleanDiacritics  = cleanDiacritics_cleanDiacritics;
s.count            = count_count;
s.chars            = chars_chars;
s.swapCase         = swapCase_swapCase;
s.escapeHTML       = escapeHTML_escapeHTML;
s.unescapeHTML     = unescapeHTML_unescapeHTML;
s.splice           = splice_splice;
s.insert           = insert_insert;
s.replaceAll       = replaceAll_replaceAll;
s.include          = include_include;
s.join             = join_join;
s.lines            = lines_lines;
s.dedent           = dedent_dedent;
s.reverse          = reverse_reverse;
s.startsWith       = startsWith_startsWith;
s.endsWith         = endsWith_endsWith;
s.pred             = pred_pred;
s.succ             = succ_succ;
s.titleize         = titleize_titleize;
s.camelize         = camelize_camelize;
s.underscored      = underscored_underscored;
s.dasherize        = dasherize_dasherize;
s.classify         = classify_classify;
s.humanize         = humanize_humanize;
s.ltrim            = ltrim_ltrim;
s.rtrim            = rtrim_rtrim;
s.truncate         = truncate_truncate;
s.prune            = prune_prune;
s.words            = words_words;
s.pad              = pad_pad;
s.lpad             = lpad_lpad;
s.rpad             = rpad_rpad;
s.lrpad            = lrpad_lrpad;
s.sprintf          = sprintfjs;
s.vsprintf         = vsprintfjs;
s.toNumber         = toNumber_toNumber;
s.numberFormat     = numberFormat_numberFormat;
s.strRight         = strRight_strRight;
s.strRightBack     = strRightBack_strRightBack;
s.strLeft          = strLeft_strLeft;
s.strLeftBack      = strLeftBack_strLeftBack;
s.toSentence       = toSentence_toSentence;
s.toSentenceSerial = toSentenceSerial_toSentenceSerial;
s.slugify          = slugify_slugify;
s.surround         = surround_surround;
s.quote            = quote_quote;
s.unquote          = unquote_unquote;
s.repeat           = repeat_repeat;
s.naturalCmp       = naturalCmp_naturalCmp;
s.levenshtein      = levenshtein_levenshtein;
s.toBoolean        = toBoolean_toBoolean;
s.exports          = exports_exports;
s.escapeRegExp     = escapeRegExp_escapeRegExp;
s.wrap             = wrap_wrap;
s.map              = map_map;

// Aliases
s.strip     = s.trim;
s.lstrip    = s.ltrim;
s.rstrip    = s.rtrim;
s.center    = s.lrpad;
s.rjust     = s.lpad;
s.ljust     = s.rpad;
s.contains  = s.include;
s.q         = s.quote;
s.toBool    = s.toBoolean;
s.camelcase = s.camelize;
s.mapChars  = s.map;


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


export { mod_s as s };
