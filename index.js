var index_s = s;
import { isBlankjs as isBlank_isBlankjsjs } from "./isBlank";
import { stripTagsjs as stripTags_stripTagsjsjs } from "./stripTags";
import { capitalizejs as capitalize_capitalizejsjs } from "./capitalize";
import { decapitalizejs as decapitalize_decapitalizejsjs } from "./decapitalize";
import { chopjs as chop_chopjsjs } from "./chop";
import { trimjs as trim_trimjsjs } from "./trim";
import { cleanjs as clean_cleanjsjs } from "./clean";
import { cleanDiacriticsjs as cleanDiacritics_cleanDiacriticsjsjs } from "./cleanDiacritics";
import { countjs as count_countjsjs } from "./count";
import { charsjs as chars_charsjsjs } from "./chars";
import { swapCasejs as swapCase_swapCasejsjs } from "./swapCase";
import { escapeHTMLjs as escapeHTML_escapeHTMLjsjs } from "./escapeHTML";
import { unescapeHTMLjs as unescapeHTML_unescapeHTMLjsjs } from "./unescapeHTML";
import { splicejs as splice_splicejsjs } from "./splice";
import { insertjs as insert_insertjsjs } from "./insert";
import { replaceAlljs as replaceAll_replaceAlljsjs } from "./replaceAll";
import { includejs as include_includejsjs } from "./include";
import { joinjs as join_joinjsjs } from "./join";
import { linesjs as lines_linesjsjs } from "./lines";
import { dedentjs as dedent_dedentjsjs } from "./dedent";
import { reversejs as reverse_reversejsjs } from "./reverse";
import { startsWithjs as startsWith_startsWithjsjs } from "./startsWith";
import { endsWithjs as endsWith_endsWithjsjs } from "./endsWith";
import { predjs as pred_predjsjs } from "./pred";
import { succjs as succ_succjsjs } from "./succ";
import { titleizejs as titleize_titleizejsjs } from "./titleize";
import { camelizejs as camelize_camelizejsjs } from "./camelize";
import { underscoredjs as underscored_underscoredjsjs } from "./underscored";
import { dasherizejs as dasherize_dasherizejsjs } from "./dasherize";
import { classifyjs as classify_classifyjsjs } from "./classify";
import { humanizejs as humanize_humanizejsjs } from "./humanize";
import { ltrimjs as ltrim_ltrimjsjs } from "./ltrim";
import { rtrimjs as rtrim_rtrimjsjs } from "./rtrim";
import { truncatejs as truncate_truncatejsjs } from "./truncate";
import { prunejs as prune_prunejsjs } from "./prune";
import { wordsjs as words_wordsjsjs } from "./words";
import { padjs as pad_padjsjs } from "./pad";
import { lpadjs as lpad_lpadjsjs } from "./lpad";
import { rpadjs as rpad_rpadjsjs } from "./rpad";
import { lrpadjs as lrpad_lrpadjsjs } from "./lrpad";
import { sprintfjs as sprintf_sprintfjsjs } from "./sprintf";
import { vsprintfjs as vsprintf_vsprintfjsjs } from "./vsprintf";
import { toNumberjs as toNumber_toNumberjsjs } from "./toNumber";
import { numberFormatjs as numberFormat_numberFormatjsjs } from "./numberFormat";
import { strRightjs as strRight_strRightjsjs } from "./strRight";
import { strRightBackjs as strRightBack_strRightBackjsjs } from "./strRightBack";
import { strLeftjs as strLeft_strLeftjsjs } from "./strLeft";
import { strLeftBackjs as strLeftBack_strLeftBackjsjs } from "./strLeftBack";
import { toSentencejs as toSentence_toSentencejsjs } from "./toSentence";
import { toSentenceSerialjs as toSentenceSerial_toSentenceSerialjsjs } from "./toSentenceSerial";
import { slugifyjs as slugify_slugifyjsjs } from "./slugify";
import { surroundjs as surround_surroundjsjs } from "./surround";
import { quotejs as quote_quotejsjs } from "./quote";
import { unquotejs as unquote_unquotejsjs } from "./unquote";
import { repeatjs as repeat_repeatjsjs } from "./repeat";
import { naturalCmpjs as naturalCmp_naturalCmpjsjs } from "./naturalCmp";
import { levenshteinjs as levenshtein_levenshteinjsjs } from "./levenshtein";
import { toBooleanjs as toBoolean_toBooleanjsjs } from "./toBoolean";
import { exportsjs as exports_exportsjsjs } from "./exports";
import { escapeRegExpjs as helperescapeRegExp_escapeRegExpjsjs } from "./helper/escapeRegExp";
import { wrapjs as wrap_wrapjsjs } from "./wrap";
import { mapjs as map_mapjsjs } from "./map";
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

s.isBlank          = isBlank_isBlankjsjs;
s.stripTags        = stripTags_stripTagsjsjs;
s.capitalize       = capitalize_capitalizejsjs;
s.decapitalize     = decapitalize_decapitalizejsjs;
s.chop             = chop_chopjsjs;
s.trim             = trim_trimjsjs;
s.clean            = clean_cleanjsjs;
s.cleanDiacritics  = cleanDiacritics_cleanDiacriticsjsjs;
s.count            = count_countjsjs;
s.chars            = chars_charsjsjs;
s.swapCase         = swapCase_swapCasejsjs;
s.escapeHTML       = escapeHTML_escapeHTMLjsjs;
s.unescapeHTML     = unescapeHTML_unescapeHTMLjsjs;
s.splice           = splice_splicejsjs;
s.insert           = insert_insertjsjs;
s.replaceAll       = replaceAll_replaceAlljsjs;
s.include          = include_includejsjs;
s.join             = join_joinjsjs;
s.lines            = lines_linesjsjs;
s.dedent           = dedent_dedentjsjs;
s.reverse          = reverse_reversejsjs;
s.startsWith       = startsWith_startsWithjsjs;
s.endsWith         = endsWith_endsWithjsjs;
s.pred             = pred_predjsjs;
s.succ             = succ_succjsjs;
s.titleize         = titleize_titleizejsjs;
s.camelize         = camelize_camelizejsjs;
s.underscored      = underscored_underscoredjsjs;
s.dasherize        = dasherize_dasherizejsjs;
s.classify         = classify_classifyjsjs;
s.humanize         = humanize_humanizejsjs;
s.ltrim            = ltrim_ltrimjsjs;
s.rtrim            = rtrim_rtrimjsjs;
s.truncate         = truncate_truncatejsjs;
s.prune            = prune_prunejsjs;
s.words            = words_wordsjsjs;
s.pad              = pad_padjsjs;
s.lpad             = lpad_lpadjsjs;
s.rpad             = rpad_rpadjsjs;
s.lrpad            = lrpad_lrpadjsjs;
s.sprintf          = sprintf_sprintfjsjs;
s.vsprintf         = vsprintf_vsprintfjsjs;
s.toNumber         = toNumber_toNumberjsjs;
s.numberFormat     = numberFormat_numberFormatjsjs;
s.strRight         = strRight_strRightjsjs;
s.strRightBack     = strRightBack_strRightBackjsjs;
s.strLeft          = strLeft_strLeftjsjs;
s.strLeftBack      = strLeftBack_strLeftBackjsjs;
s.toSentence       = toSentence_toSentencejsjs;
s.toSentenceSerial = toSentenceSerial_toSentenceSerialjsjs;
s.slugify          = slugify_slugifyjsjs;
s.surround         = surround_surroundjsjs;
s.quote            = quote_quotejsjs;
s.unquote          = unquote_unquotejsjs;
s.repeat           = repeat_repeatjsjs;
s.naturalCmp       = naturalCmp_naturalCmpjsjs;
s.levenshtein      = levenshtein_levenshteinjsjs;
s.toBoolean        = toBoolean_toBooleanjsjs;
s.exports          = exports_exportsjsjs;
s.escapeRegExp     = helperescapeRegExp_escapeRegExpjsjs;
s.wrap             = wrap_wrapjsjs;
s.map              = map_mapjsjs;

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


export { index_s as s };
