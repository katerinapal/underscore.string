import { s as index_sjs } from "../";
var tests = {};

tests['trimNoNative'] = function() {
  return index_sjs.trim('  foobar  ', ' ');
};

tests['trim'] = function() {
  return index_sjs.trim('  foobar  ');
};

tests['trim object-oriented'] = function() {
  return index_sjs('  foobar  ').trim().value();
};

var trimjs;

trimjs = {
  tests: tests
};
