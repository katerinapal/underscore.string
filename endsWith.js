import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";
import { toPositivejs as helpertoPositive_toPositivejsjs } from "./helper/toPositive";

var exportedObject = function endsWith(str, ends, position) {
  str = helpermakeString_makeStringjsjs(str);
  ends = '' + ends;
  if (typeof position == 'undefined') {
    position = str.length - ends.length;
  } else {
    position = Math.min(helpertoPositive_toPositivejsjs(position), str.length) - ends.length;
  }
  return position >= 0 && str.indexOf(ends, position) === position;
};

export { exportedObject as endsWithjs };
