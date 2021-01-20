import { makeString as makeString_makeString } from "./makeString";

var mod_anonymus = function escapeRegExp(str) {
  return makeString_makeString(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};

export { mod_anonymus as escapeRegExp };
