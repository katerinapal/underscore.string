import { trimjs as trim_trimjsjs } from "./trim";

var exportedObject = function clean(str) {
  return trim_trimjsjs(str).replace(/\s\s+/g, ' ');
};

export { exportedObject as cleanjs };
