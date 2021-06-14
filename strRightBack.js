import { makeString as makeString_makeString } from "./helper/makeString";

var mod_anonymus = function strRightBack(str, sep) {
  str = makeString_makeString(str);
  sep = makeString_makeString(sep);
  var pos = !sep ? -1 : str.lastIndexOf(sep);
  return~ pos ? str.slice(pos + sep.length, str.length) : str;
};

mod_anonymus = function strRightBack(str, sep) {
  str = makeString_makeString(str);
  sep = makeString_makeString(sep);
  var pos = !sep ? -1 : str.lastIndexOf(sep);
  return~ pos ? str.slice(pos + sep.length, str.length) : str;
};
export { mod_anonymus as strRightBack };
