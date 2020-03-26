import { trimjs as trim_trimjsjs } from "./trim";

var exportedObject = function underscored(str) {
  return trim_trimjsjs(str).replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
};

export { exportedObject as underscoredjs };;
