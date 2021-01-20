import { makeString as makeString_makeString } from "./helper/makeString";
import { strRepeat as strRepeat_strRepeat } from "./helper/strRepeat";

var mod_anonymus = function repeat(str, qty, separator) {
  str = makeString_makeString(str);

  qty = ~~qty;

  // using faster implementation if separator is not needed;
  if (separator == null) return strRepeat_strRepeat(str, qty);

  // this one is about 300x slower in Google Chrome
  /*eslint no-empty: 0*/
  for (var repeat = []; qty > 0; repeat[--qty] = str) {}
  return repeat.join(separator);
};

export { mod_anonymus as repeat };
