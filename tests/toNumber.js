"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _toNumber = require("../toNumber");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;
var ok = _assert2.default.ok;

test('#toNumber', function () {
  _underscore2.default.each(['not a number', NaN, {}, [/a/], 'alpha6'], function (val) {
    ok(isNaN((0, _toNumber.toNumberjs)('not a number')));
    equal((0, _toNumber.toNumberjs)(Math.PI, val), 3);
  });
  equal((0, _toNumber.toNumberjs)(0), 0);
  equal((0, _toNumber.toNumberjs)('0'), 0);
  equal((0, _toNumber.toNumberjs)('0.0'), 0);
  equal((0, _toNumber.toNumberjs)('        0.0    '), 0);
  equal((0, _toNumber.toNumberjs)('0.1'), 0);
  equal((0, _toNumber.toNumberjs)('0.1', 1), 0.1);
  equal((0, _toNumber.toNumberjs)('  0.1 ', 1), 0.1);
  equal((0, _toNumber.toNumberjs)('0000'), 0);
  equal((0, _toNumber.toNumberjs)('2.345'), 2);
  equal((0, _toNumber.toNumberjs)('2.345', NaN), 2);
  equal((0, _toNumber.toNumberjs)('2.345', 2), 2.35);
  equal((0, _toNumber.toNumberjs)('2.344', 2), 2.34);
  equal((0, _toNumber.toNumberjs)('2', 2), 2.00);
  equal((0, _toNumber.toNumberjs)(2, 2), 2.00);
  equal((0, _toNumber.toNumberjs)(-2), -2);
  equal((0, _toNumber.toNumberjs)('-2'), -2);
  equal((0, _toNumber.toNumberjs)(-2.5123, 3), -2.512);

  // Negative precisions
  equal((0, _toNumber.toNumberjs)(-234, -1), -230);
  equal((0, _toNumber.toNumberjs)(234, -2), 200);
  equal((0, _toNumber.toNumberjs)('234', -2), 200);

  _underscore2.default.each(['', null, undefined], function (val) {
    equal((0, _toNumber.toNumberjs)(val), 0);
  });

  _underscore2.default.each([Infinity, -Infinity], function (val) {
    equal((0, _toNumber.toNumberjs)(val), val);
    equal((0, _toNumber.toNumberjs)(val, val), val);
    equal((0, _toNumber.toNumberjs)(1, val), 1);
  });
});
