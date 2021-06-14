import { chars as chars_chars } from "./chars";

var mod_anonymus = function splice(str, i, howmany, substr) {
  var arr = chars_chars(str);
  arr.splice(~~i, ~~howmany, substr);
  return arr.join('');
};

mod_anonymus = function splice(str, i, howmany, substr) {
  var arr = chars_chars(str);
  arr.splice(~~i, ~~howmany, substr);
  return arr.join('');
};
export { mod_anonymus as splice };
