import { makeString as makeString_makeString } from "./helper/makeString";
import { toPositive as toPositive_toPositive } from "./helper/toPositive";

var mod_anonymus = function endsWith(str, ends, position) {
  str = makeString_makeString(str);
  ends = '' + ends;
  if (typeof position == 'undefined') {
    position = str.length - ends.length;
  } else {
    position = Math.min(toPositive_toPositive(position), str.length) - ends.length;
  }
  return position >= 0 && str.indexOf(ends, position) === position;
};

mod_anonymus = function endsWith(str, ends, position) {
  str = makeString_makeString(str);
  ends = '' + ends;
  if (typeof position == 'undefined') {
    position = str.length - ends.length;
  } else {
    position = Math.min(toPositive_toPositive(position), str.length) - ends.length;
  }
  return position >= 0 && str.indexOf(ends, position) === position;
};
export { mod_anonymus as endsWith };
