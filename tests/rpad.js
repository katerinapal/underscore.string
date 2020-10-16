"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _rpad = require("../rpad");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#rpad', function () {
  equal((0, _rpad.rpadjs)('1', 8), '1       ');
  equal((0, _rpad.rpadjs)(1, 8), '1       ');
  equal((0, _rpad.rpadjs)('1', 8, '0'), '10000000');
  equal((0, _rpad.rpadjs)('foo', 8, '0'), 'foo00000');
  equal((0, _rpad.rpadjs)('foo', 7, '0'), 'foo0000');
  equal((0, _rpad.rpadjs)('', 2), '  ');
  equal((0, _rpad.rpadjs)(null, 2), '  ');
  equal((0, _rpad.rpadjs)(undefined, 2), '  ');
});