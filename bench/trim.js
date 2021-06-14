import { s as _s } from "../";
var tests = {};

tests['trimNoNative'] = function() {
  return _s.trim('  foobar  ', ' ');
};

tests['trim'] = function() {
  return _s.trim('  foobar  ');
};

tests['trim object-oriented'] = function() {
  return _s('  foobar  ').trim().value();
};

var trimjs;

trimjs = {
  tests: tests
};
