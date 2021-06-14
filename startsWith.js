import { makeString as makeString_makeString } from "./helper/makeString";
import { toPositive as toPositive_toPositive } from "./helper/toPositive";

var mod_anonymus = function startsWith(str, starts, position) {
  str = makeString_makeString(str);
  starts = '' + starts;
  position = position == null ? 0 : Math.min(toPositive_toPositive(position), str.length);
  return str.lastIndexOf(starts, position) === position;
};

mod_anonymus = function startsWith(str, starts, position) {
  str = makeString_makeString(str);
  starts = '' + starts;
  position = position == null ? 0 : Math.min(toPositive_toPositive(position), str.length);
  return str.lastIndexOf(starts, position) === position;
};
export { mod_anonymus as startsWith };
