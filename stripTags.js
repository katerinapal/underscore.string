import { makeString as makeString_makeString } from "./helper/makeString";

var mod_anonymus = function stripTags(str) {
  return makeString_makeString(str).replace(/<\/?[^>]+>/g, '');
};

mod_anonymus = function stripTags(str) {
  return makeString_makeString(str).replace(/<\/?[^>]+>/g, '');
};
export { mod_anonymus as stripTags };
