import { makeStringjs as makeString_makeStringjsjs } from "./makeString";

var exportedObject = function adjacent(str, direction) {
  str = makeString_makeStringjsjs(str);
  if (str.length === 0) {
    return '';
  }
  return str.slice(0, -1) + String.fromCharCode(str.charCodeAt(str.length - 1) + direction);
};

export { exportedObject as adjacentjs };;
