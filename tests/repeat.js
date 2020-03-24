"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _repeat = require("../repeat");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#repeat', function () {
  equal((0, _repeat.repeatjs)('foo'), '');
  equal((0, _repeat.repeatjs)('foo', 3), 'foofoofoo');
  equal((0, _repeat.repeatjs)('foo', '3'), 'foofoofoo');
  equal((0, _repeat.repeatjs)(123, 2), '123123');
  equal((0, _repeat.repeatjs)(1234, 2, '*'), '1234*1234');
  equal((0, _repeat.repeatjs)(1234, 2, 5), '123451234');
  equal((0, _repeat.repeatjs)('', 2), '');
  equal((0, _repeat.repeatjs)(null, 2), '');
  equal((0, _repeat.repeatjs)(undefined, 2), '');
});
