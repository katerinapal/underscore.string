import { padjs as pad_padjsjs } from "./pad";

var exportedObject = function lpad(str, length, padStr) {
  return pad_padjsjs(str, length, padStr);
};

export { exportedObject as lpadjs };
