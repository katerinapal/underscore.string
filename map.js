import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";

var exportedObject = function(str, callback) {
  str = helpermakeString_makeStringjsjs(str);

  if (str.length === 0 || typeof callback !== 'function') return str;

  return str.replace(/./g, callback);
};

export { exportedObject as mapjs };
