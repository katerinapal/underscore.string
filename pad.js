import { makeString as makeString_makeString } from "./helper/makeString";
import { strRepeat as strRepeat_strRepeat } from "./helper/strRepeat";

var mod_anonymus = function pad(str, length, padStr, type) {
  str = makeString_makeString(str);
  length = ~~length;

  var padlen = 0;

  if (!padStr)
    padStr = ' ';
  else if (padStr.length > 1)
    padStr = padStr.charAt(0);

  switch (type) {
  case 'right':
    padlen = length - str.length;
    return str + strRepeat_strRepeat(padStr, padlen);
  case 'both':
    padlen = length - str.length;
    return strRepeat_strRepeat(padStr, Math.ceil(padlen / 2)) + str + strRepeat_strRepeat(padStr, Math.floor(padlen / 2));
  default: // 'left'
    padlen = length - str.length;
    return strRepeat_strRepeat(padStr, padlen) + str;
  }
};

export { mod_anonymus as pad };
