import { padjs as pad_padjsjs } from "./pad";

var exportedObject = function rpad(str, length, padStr) {
  return pad_padjsjs(str, length, padStr, 'right');
};

export { exportedObject as rpadjs };;
