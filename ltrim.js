import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";
import { defaultToWhiteSpacejs as helperdefaultToWhiteSpace_defaultToWhiteSpacejsjs } from "./helper/defaultToWhiteSpace";
var nativeTrimLeft = String.prototype.trimLeft;

var exportedObject = function ltrim(str, characters) {
  str = helpermakeString_makeStringjsjs(str);
  if (!characters && nativeTrimLeft) return nativeTrimLeft.call(str);
  characters = helperdefaultToWhiteSpace_defaultToWhiteSpacejsjs(characters);
  return str.replace(new RegExp('^' + characters + '+'), '');
};

export { exportedObject as ltrimjs };;
