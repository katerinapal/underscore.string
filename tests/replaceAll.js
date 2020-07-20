"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _replaceAll = require("../replaceAll");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#replaceAll', function () {
  equal((0, _replaceAll.replaceAlljs)('a', 'a', 'b'), 'b');
  equal((0, _replaceAll.replaceAlljs)('aa', 'a', 'b'), 'bb');
  equal((0, _replaceAll.replaceAlljs)('aca', 'a', 'b'), 'bcb');
  equal((0, _replaceAll.replaceAlljs)('ccc', 'a', 'b'), 'ccc');
  equal((0, _replaceAll.replaceAlljs)('AAa', 'a', 'b'), 'AAb');
  equal((0, _replaceAll.replaceAlljs)('Aa', 'a', 'b', true), 'bb');
  equal((0, _replaceAll.replaceAlljs)('foo bar foo', 'foo', 'moo'), 'moo bar moo');
  equal((0, _replaceAll.replaceAlljs)('foo bar\n foo', 'foo', 'moo'), 'moo bar\n moo');
  equal((0, _replaceAll.replaceAlljs)('foo bar FoO', 'foo', 'moo', true), 'moo bar moo');
  equal((0, _replaceAll.replaceAlljs)('', 'a', 'b'), '');
  equal((0, _replaceAll.replaceAlljs)(null, 'a', 'b'), '');
  equal((0, _replaceAll.replaceAlljs)(undefined, 'a', 'b'), '');
  equal((0, _replaceAll.replaceAlljs)(12345, 'a', 'b'), 12345);
});