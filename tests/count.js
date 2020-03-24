"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _count = require("../count");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#count', function () {
  equal((0, _count.countjs)('Hello world', 'l'), 3);
  equal((0, _count.countjs)('Hello world', 'Hello'), 1);
  equal((0, _count.countjs)('Hello world', 'foo'), 0);
  equal((0, _count.countjs)('x.xx....x.x', 'x'), 5);
  equal((0, _count.countjs)('', 'x'), 0);
  equal((0, _count.countjs)(null, 'x'), 0);
  equal((0, _count.countjs)(undefined, 'x'), 0);
  equal((0, _count.countjs)(12345, 1), 1);
  equal((0, _count.countjs)(11345, 1), 2);
  equal((0, _count.countjs)('Hello World', ''), 0);
  equal((0, _count.countjs)('Hello World', null), 0);
  equal((0, _count.countjs)('Hello World', undefined), 0);
  equal((0, _count.countjs)('', ''), 0);
  equal((0, _count.countjs)(null, null), 0);
  equal((0, _count.countjs)(undefined, undefined), 0);
});
