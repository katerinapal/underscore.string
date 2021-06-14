"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _count = require("../count");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#count', function () {
  equal((0, _count.count)('Hello world', 'l'), 3);
  equal((0, _count.count)('Hello world', 'Hello'), 1);
  equal((0, _count.count)('Hello world', 'foo'), 0);
  equal((0, _count.count)('x.xx....x.x', 'x'), 5);
  equal((0, _count.count)('', 'x'), 0);
  equal((0, _count.count)(null, 'x'), 0);
  equal((0, _count.count)(undefined, 'x'), 0);
  equal((0, _count.count)(12345, 1), 1);
  equal((0, _count.count)(11345, 1), 2);
  equal((0, _count.count)('Hello World', ''), 0);
  equal((0, _count.count)('Hello World', null), 0);
  equal((0, _count.count)('Hello World', undefined), 0);
  equal((0, _count.count)('', ''), 0);
  equal((0, _count.count)(null, null), 0);
  equal((0, _count.count)(undefined, undefined), 0);
});