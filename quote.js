import { surroundjs as surround_surroundjsjs } from "./surround";

var exportedObject = function quote(str, quoteChar) {
  return surround_surroundjsjs(str, quoteChar || '"');
};

export { exportedObject as quotejs };
