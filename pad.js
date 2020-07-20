import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";
import { strRepeatjs as helperstrRepeat_strRepeatjsjs } from "./helper/strRepeat";

var exportedObject = function pad(str, length, padStr, type) {
  str = helpermakeString_makeStringjsjs(str);
  length = ~~length;

  var padlen = 0;

  if (!padStr)
    padStr = ' ';
  else if (padStr.length > 1)
    padStr = padStr.charAt(0);

  switch (type) {
  case 'right':
    padlen = length - str.length;
    return str + helperstrRepeat_strRepeatjsjs(padStr, padlen);
  case 'both':
    padlen = length - str.length;
    return helperstrRepeat_strRepeatjsjs(padStr, Math.ceil(padlen / 2)) + str + helperstrRepeat_strRepeatjsjs(padStr, Math.floor(padlen / 2));
  default: // 'left'
    padlen = length - str.length;
    return helperstrRepeat_strRepeatjsjs(padStr, padlen) + str;
  }
};

export { exportedObject as padjs };
