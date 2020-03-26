import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";
import { toPositivejs as helpertoPositive_toPositivejsjs } from "./helper/toPositive";

var exportedObject = function startsWith(str, starts, position) {
  str = helpermakeString_makeStringjsjs(str);
  starts = '' + starts;
  position = position == null ? 0 : Math.min(helpertoPositive_toPositivejsjs(position), str.length);
  return str.lastIndexOf(starts, position) === position;
};

export { exportedObject as startsWithjs };;
