import { makeString as makeString_makeString } from "./helper/makeString";

var mod_anonymus = function replaceAll(str, find, replace, ignorecase) {
  var flags = (ignorecase === true)?'gi':'g';
  var reg = new RegExp(find, flags);

  return makeString_makeString(str).replace(reg, replace);
};

mod_anonymus = function replaceAll(str, find, replace, ignorecase) {
  var flags = (ignorecase === true)?'gi':'g';
  var reg = new RegExp(find, flags);

  return makeString_makeString(str).replace(reg, replace);
};
export { mod_anonymus as replaceAll };
