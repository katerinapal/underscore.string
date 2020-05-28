import { charsjs as chars_charsjsjs } from "./chars";

var exportedObject = function reverse(str) {
  return chars_charsjsjs(str).reverse().join('');
};

export { exportedObject as reversejs };
