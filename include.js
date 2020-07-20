import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";

var exportedObject = function include(str, needle) {
  if (needle === '') return true;
  return helpermakeString_makeStringjsjs(str).indexOf(needle) !== -1;
};

export { exportedObject as includejs };
