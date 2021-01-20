import { makeString as makeString_makeString } from "./helper/makeString";

var mod_anonymus = function strLeftBack(str, sep) {
  str = makeString_makeString(str);
  sep = makeString_makeString(sep);
  var pos = str.lastIndexOf(sep);
  return~ pos ? str.slice(0, pos) : str;
};

export { mod_anonymus as strLeftBack };
