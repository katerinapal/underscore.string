import { makeString as makeString_makeString } from "./helper/makeString";
import { escapeChars as escapeChars_escapeChars } from "./helper/escapeChars";

var regexString = '[';
for(var key in escapeChars_escapeChars) {
  regexString += key;
}
regexString += ']';

var regex = new RegExp( regexString, 'g');

var mod_anonymus = function escapeHTML(str) {

  return makeString_makeString(str).replace(regex, function(m) {
    return '&' + escapeChars_escapeChars[m] + ';';
  });
};

export { mod_anonymus as escapeHTML };
