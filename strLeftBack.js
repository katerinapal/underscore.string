import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";

var exportedObject = function strLeftBack(str, sep) {
  str = helpermakeString_makeStringjsjs(str);
  sep = helpermakeString_makeStringjsjs(sep);
  var pos = str.lastIndexOf(sep);
  return~ pos ? str.slice(0, pos) : str;
};

export { exportedObject as strLeftBackjs };;
