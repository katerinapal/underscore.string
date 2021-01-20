import { makeString as makeString_makeString } from "./helper/makeString";

var mod_anonymus = function titleize(str) {
  return makeString_makeString(str).toLowerCase().replace(/(?:^|\s|-)\S/g, function(c) {
    return c.toUpperCase();
  });
};

export { mod_anonymus as titleize };
