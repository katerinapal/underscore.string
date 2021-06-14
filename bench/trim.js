import { s as _s, trim as indexjs_trim } from "../";
var tests = {};

tests['trimNoNative'] = function() {
  return indexjs_trim('  foobar  ', ' ');
};

tests['trim'] = function() {
  return indexjs_trim('  foobar  ');
};

tests['trim object-oriented'] = function() {
  return _s('  foobar  ').trim().value();
};

var trimjs;

trimjs = {
  tests: tests
};
