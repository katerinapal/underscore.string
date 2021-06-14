import { makeString as makeString_makeString } from "./helper/makeString";

var mod_anonymus = function(str, callback) {
  str = makeString_makeString(str);

  if (str.length === 0 || typeof callback !== 'function') return str;

  return str.replace(/./g, callback);
};

mod_anonymus = function(str, callback) {
  str = makeString_makeString(str);

  if (str.length === 0 || typeof callback !== 'function') return str;

  return str.replace(/./g, callback);
};
export { mod_anonymus as map };
