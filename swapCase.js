import { makeString as makeString_makeString } from "./helper/makeString";

var mod_anonymus = function swapCase(str) {
  return makeString_makeString(str).replace(/\S/g, function(c) {
    return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
  });
};

export { mod_anonymus as swapCase };
