import { s as _sjs } from "../";
var tests = {};

tests['trimNoNative'] = function() {
  return _sjs.trim('  foobar  ', ' ');
};

tests['trim'] = function() {
  return _sjs.trim('  foobar  ');
};

tests['trim object-oriented'] = function() {
  return _sjs('  foobar  ').trim().value();
};

var trimjs;

trimjs = {
  tests: tests
};
