import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";

var exportedObject = function decapitalize(str) {
  str = helpermakeString_makeStringjsjs(str);
  return str.charAt(0).toLowerCase() + str.slice(1);
};

export { exportedObject as decapitalizejs };
