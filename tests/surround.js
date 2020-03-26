"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _surround = require("../surround");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#surround', function () {
  equal((0, _surround.surroundjs)('foo', 'ab'), 'abfooab');
  equal((0, _surround.surroundjs)(1, 'ab'), 'ab1ab');
  equal((0, _surround.surroundjs)(1, 2), '212');
  equal((0, _surround.surroundjs)('foo', 1), '1foo1');
  equal((0, _surround.surroundjs)('', 1), '11');
  equal((0, _surround.surroundjs)(null, 1), '11');
  equal((0, _surround.surroundjs)('foo', ''), 'foo');
  equal((0, _surround.surroundjs)('foo', null), 'foo');
});
