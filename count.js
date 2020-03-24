import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";

var exportedObject = function(str, substr) {
  str = helpermakeString_makeStringjsjs(str);
  substr = helpermakeString_makeStringjsjs(substr);

  if (str.length === 0 || substr.length === 0) return 0;
  
  return str.split(substr).length - 1;
};

export { exportedObject as countjs };;
