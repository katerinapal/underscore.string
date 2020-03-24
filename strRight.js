import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";

var exportedObject = function strRight(str, sep) {
  str = helpermakeString_makeStringjsjs(str);
  sep = helpermakeString_makeStringjsjs(sep);
  var pos = !sep ? -1 : str.indexOf(sep);
  return~ pos ? str.slice(pos + sep.length, str.length) : str;
};

export { exportedObject as strRightjs };;
