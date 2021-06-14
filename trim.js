import { makeString as makeString_makeString } from "./helper/makeString";
import { defaultToWhiteSpace as defaultToWhiteSpace_defaultToWhiteSpace } from "./helper/defaultToWhiteSpace";
var nativeTrim = String.prototype.trim;

var mod_anonymus = function trim(str, characters) {
  str = makeString_makeString(str);
  if (!characters && nativeTrim) return nativeTrim.call(str);
  characters = defaultToWhiteSpace_defaultToWhiteSpace(characters);
  return str.replace(new RegExp('^' + characters + '+|' + characters + '+$', 'g'), '');
};

mod_anonymus = function trim(str, characters) {
  str = makeString_makeString(str);
  if (!characters && nativeTrim) return nativeTrim.call(str);
  characters = defaultToWhiteSpace_defaultToWhiteSpace(characters);
  return str.replace(new RegExp('^' + characters + '+|' + characters + '+$', 'g'), '');
};
export { mod_anonymus as trim };
