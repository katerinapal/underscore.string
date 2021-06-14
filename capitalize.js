import { makeString as makeString_makeString } from "./helper/makeString";

var mod_anonymus = function capitalize(str, lowercaseRest) {
  str = makeString_makeString(str);
  var remainingChars = !lowercaseRest ? str.slice(1) : str.slice(1).toLowerCase();

  return str.charAt(0).toUpperCase() + remainingChars;
};

mod_anonymus = function capitalize(str, lowercaseRest) {
  str = makeString_makeString(str);
  var remainingChars = !lowercaseRest ? str.slice(1) : str.slice(1).toLowerCase();

  return str.charAt(0).toUpperCase() + remainingChars;
};
export { mod_anonymus as capitalize };
