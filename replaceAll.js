import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";

var exportedObject = function replaceAll(str, find, replace, ignorecase) {
  var flags = (ignorecase === true)?'gi':'g';
  var reg = new RegExp(find, flags);

  return helpermakeString_makeStringjsjs(str).replace(reg, replace);
};

export { exportedObject as replaceAlljs };;
