import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";
import { defaultToWhiteSpacejs as helperdefaultToWhiteSpace_defaultToWhiteSpacejsjs } from "./helper/defaultToWhiteSpace";
var nativeTrimRight = String.prototype.trimRight;

var exportedObject = function rtrim(str, characters) {
  str = helpermakeString_makeStringjsjs(str);
  if (!characters && nativeTrimRight) return nativeTrimRight.call(str);
  characters = helperdefaultToWhiteSpace_defaultToWhiteSpacejsjs(characters);
  return str.replace(new RegExp(characters + '+$'), '');
};

export { exportedObject as rtrimjs };;
