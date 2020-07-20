import { trimjs as trim_trimjsjs } from "./trim";

var exportedObject = function dasherize(str) {
  return trim_trimjsjs(str).replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
};

export { exportedObject as dasherizejs };
