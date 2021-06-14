import { makeString as makeString_makeString } from "./helper/makeString";

var mod_anonymus = function strLeft(str, sep) {
  str = makeString_makeString(str);
  sep = makeString_makeString(sep);
  var pos = !sep ? -1 : str.indexOf(sep);
  return~ pos ? str.slice(0, pos) : str;
};

mod_anonymus = function strLeft(str, sep) {
  str = makeString_makeString(str);
  sep = makeString_makeString(sep);
  var pos = !sep ? -1 : str.indexOf(sep);
  return~ pos ? str.slice(0, pos) : str;
};
export { mod_anonymus as strLeft };
