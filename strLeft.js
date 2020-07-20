import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";

var exportedObject = function strLeft(str, sep) {
  str = helpermakeString_makeStringjsjs(str);
  sep = helpermakeString_makeStringjsjs(sep);
  var pos = !sep ? -1 : str.indexOf(sep);
  return~ pos ? str.slice(0, pos) : str;
};

export { exportedObject as strLeftjs };
