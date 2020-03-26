import { charsjs as chars_charsjsjs } from "./chars";

var exportedObject = function splice(str, i, howmany, substr) {
  var arr = chars_charsjsjs(str);
  arr.splice(~~i, ~~howmany, substr);
  return arr.join('');
};

export { exportedObject as splicejs };;
