"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _succ = require("../succ");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;
var deepEqual = _assert2.default.deepEqual;

test('#succ', function () {
  equal((0, _succ.succjs)('a'), 'b');
  equal((0, _succ.succjs)('A'), 'B');
  equal((0, _succ.succjs)('+'), ',');
  equal((0, _succ.succjs)(1), '2');
  deepEqual((0, _succ.succjs)().length, 0);
  deepEqual((0, _succ.succjs)('').length, 0);
  deepEqual((0, _succ.succjs)(null).length, 0);
  deepEqual((0, _succ.succjs)(undefined).length, 0);
  deepEqual((0, _succ.succjs)(), '');
  deepEqual((0, _succ.succjs)(''), '');
  deepEqual((0, _succ.succjs)(null), '');
  deepEqual((0, _succ.succjs)(undefined), '');
});
