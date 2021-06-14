import { makeString as makeString_makeString } from "./makeString";

var mod_anonymus = function adjacent(str, direction) {
  str = makeString_makeString(str);
  if (str.length === 0) {
    return '';
  }
  return str.slice(0, -1) + String.fromCharCode(str.charCodeAt(str.length - 1) + direction);
};

mod_anonymus = function adjacent(str, direction) {
  str = makeString_makeString(str);
  if (str.length === 0) {
    return '';
  }
  return str.slice(0, -1) + String.fromCharCode(str.charCodeAt(str.length - 1) + direction);
};
export { mod_anonymus as adjacent };
