'use strict';

var _ = require('../');

var tests = {};

tests['trimNoNative'] = function () {
  return _.s.trim('  foobar  ', ' ');
};

tests['trim'] = function () {
  return _.s.trim('  foobar  ');
};

tests['trim object-oriented'] = function () {
  return (0, _.s)('  foobar  ').trim().value();
};

var trimjs;

trimjs = {
  tests: tests
};
