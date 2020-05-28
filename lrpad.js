import { padjs as pad_padjsjs } from "./pad";

var exportedObject = function lrpad(str, length, padStr) {
  return pad_padjsjs(str, length, padStr, 'both');
};

export { exportedObject as lrpadjs };
