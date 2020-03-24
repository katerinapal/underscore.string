import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";
import { defaultToWhiteSpacejs as helperdefaultToWhiteSpace_defaultToWhiteSpacejsjs } from "./helper/defaultToWhiteSpace";
var nativeTrim = String.prototype.trim;

var exportedObject = function trim(str, characters) {
  str = helpermakeString_makeStringjsjs(str);
  if (!characters && nativeTrim) return nativeTrim.call(str);
  characters = helperdefaultToWhiteSpace_defaultToWhiteSpacejsjs(characters);
  return str.replace(new RegExp('^' + characters + '+|' + characters + '+$', 'g'), '');
};

export { exportedObject as trimjs };;
