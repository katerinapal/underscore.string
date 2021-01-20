import { makeString as makeString_makeString } from "./helper/makeString";

var mod_anonymus = function include(str, needle) {
  if (needle === '') return true;
  return makeString_makeString(str).indexOf(needle) !== -1;
};

export { mod_anonymus as include };
