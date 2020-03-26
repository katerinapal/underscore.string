"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _join = require("../join");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#join', function () {
  equal((0, _join.joinjs)('', 'foo', 'bar'), 'foobar', 'basic join');
  equal((0, _join.joinjs)('', 1, 'foo', 2), '1foo2', 'join numbers and strings');
  equal((0, _join.joinjs)(' ', 'foo', 'bar'), 'foo bar', 'join with spaces');
  equal((0, _join.joinjs)('1', '2', '2'), '212', 'join number strings');
  equal((0, _join.joinjs)(1, 2, 2), '212', 'join numbers');
  equal((0, _join.joinjs)('', 'foo', null), 'foo', 'join null with string returns string');
  equal((0, _join.joinjs)(null, 'foo', 'bar'), 'foobar', 'join strings with null returns string');
  equal((0, _join.joinjs)(1, 2, 3, 4), '21314');
  equal((0, _join.joinjs)('|', 'foo', 'bar', 'baz'), 'foo|bar|baz');
  equal((0, _join.joinjs)('', 2, 3, null), '23');
  equal((0, _join.joinjs)(null, 2, 3), '23');
});
