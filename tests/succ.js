"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _succ = require("../succ");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;
var deepEqual = _assert2.default.deepEqual;

test('#succ', function () {
  equal((0, _succ.succ)('a'), 'b');
  equal((0, _succ.succ)('A'), 'B');
  equal((0, _succ.succ)('+'), ',');
  equal((0, _succ.succ)(1), '2');
  deepEqual((0, _succ.succ)().length, 0);
  deepEqual((0, _succ.succ)('').length, 0);
  deepEqual((0, _succ.succ)(null).length, 0);
  deepEqual((0, _succ.succ)(undefined).length, 0);
  deepEqual((0, _succ.succ)(), '');
  deepEqual((0, _succ.succ)(''), '');
  deepEqual((0, _succ.succ)(null), '');
  deepEqual((0, _succ.succ)(undefined), '');
});