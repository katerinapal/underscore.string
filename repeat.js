import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";
import { strRepeatjs as helperstrRepeat_strRepeatjsjs } from "./helper/strRepeat";

var exportedObject = function repeat(str, qty, separator) {
  str = helpermakeString_makeStringjsjs(str);

  qty = ~~qty;

  // using faster implementation if separator is not needed;
  if (separator == null) return helperstrRepeat_strRepeatjsjs(str, qty);

  // this one is about 300x slower in Google Chrome
  /*eslint no-empty: 0*/
  for (var repeat = []; qty > 0; repeat[--qty] = str) {}
  return repeat.join(separator);
};

export { exportedObject as repeatjs };;
