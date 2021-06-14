"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _numberFormat = require("../numberFormat");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#numberFormat', function () {
  equal((0, _numberFormat.numberFormat)(9000), '9,000');
  equal((0, _numberFormat.numberFormat)(9000, 0), '9,000');
  equal((0, _numberFormat.numberFormat)(9000, 0, '', ''), '9000');
  equal((0, _numberFormat.numberFormat)(90000, 2), '90,000.00');
  equal((0, _numberFormat.numberFormat)(1000.754), '1,001');
  equal((0, _numberFormat.numberFormat)(1000.754, 2), '1,000.75');
  equal((0, _numberFormat.numberFormat)(1000.755, 2), '1,000.75');
  equal((0, _numberFormat.numberFormat)(1000.756, 2), '1,000.76');
  equal((0, _numberFormat.numberFormat)(1000.754, 0, ',', '.'), '1.001');
  equal((0, _numberFormat.numberFormat)(1000.754, 2, ',', '.'), '1.000,75');
  equal((0, _numberFormat.numberFormat)(1000000.754, 2, ',', '.'), '1.000.000,75');
  equal((0, _numberFormat.numberFormat)(1000000000), '1,000,000,000');
  equal((0, _numberFormat.numberFormat)(100000000), '100,000,000');
  equal((0, _numberFormat.numberFormat)('not number'), '');
  equal((0, _numberFormat.numberFormat)(), '');
  equal((0, _numberFormat.numberFormat)(null, '.', ','), '');
  equal((0, _numberFormat.numberFormat)(undefined, '.', ','), '');
  equal((0, _numberFormat.numberFormat)(new Number(5000)), '5,000');
});