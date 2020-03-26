import { makeStringjs as makeString_makeStringjsjs } from "./makeString";

var exportedObject = function escapeRegExp(str) {
  return makeString_makeStringjsjs(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};

export { exportedObject as escapeRegExpjs };;
