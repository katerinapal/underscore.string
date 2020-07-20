import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";
import { escapeChars as helperescapeChars_escapeCharsjs } from "./helper/escapeChars";

var regexString = '[';
for(var key in helperescapeChars_escapeCharsjs) {
  regexString += key;
}
regexString += ']';

var regex = new RegExp( regexString, 'g');

var exportedObject = function escapeHTML(str) {

  return helpermakeString_makeStringjsjs(str).replace(regex, function(m) {
    return '&' + helperescapeChars_escapeCharsjs[m] + ';';
  });
};

export { exportedObject as escapeHTMLjs };
