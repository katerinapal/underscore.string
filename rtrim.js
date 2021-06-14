import { makeString as makeString_makeString } from "./helper/makeString";
import { defaultToWhiteSpace as defaultToWhiteSpace_defaultToWhiteSpace } from "./helper/defaultToWhiteSpace";
var nativeTrimRight = String.prototype.trimRight;

var mod_anonymus = function rtrim(str, characters) {
  str = makeString_makeString(str);
  if (!characters && nativeTrimRight) return nativeTrimRight.call(str);
  characters = defaultToWhiteSpace_defaultToWhiteSpace(characters);
  return str.replace(new RegExp(characters + '+$'), '');
};

mod_anonymus = function rtrim(str, characters) {
  str = makeString_makeString(str);
  if (!characters && nativeTrimRight) return nativeTrimRight.call(str);
  characters = defaultToWhiteSpace_defaultToWhiteSpace(characters);
  return str.replace(new RegExp(characters + '+$'), '');
};
export { mod_anonymus as rtrim };
