import { makeString as makeString_makeString } from "./helper/makeString";
import { defaultToWhiteSpace as defaultToWhiteSpace_defaultToWhiteSpace } from "./helper/defaultToWhiteSpace";
var nativeTrimLeft = String.prototype.trimLeft;

var mod_anonymus = function ltrim(str, characters) {
  str = makeString_makeString(str);
  if (!characters && nativeTrimLeft) return nativeTrimLeft.call(str);
  characters = defaultToWhiteSpace_defaultToWhiteSpace(characters);
  return str.replace(new RegExp('^' + characters + '+'), '');
};

export { mod_anonymus as ltrim };
