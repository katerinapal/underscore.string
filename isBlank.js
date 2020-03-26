import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";

var exportedObject = function isBlank(str) {
  return (/^\s*$/).test(helpermakeString_makeStringjsjs(str));
};

export { exportedObject as isBlankjs };;
