"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _replaceAll = require("../replaceAll");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#replaceAll', function () {
  equal((0, _replaceAll.replaceAll)('a', 'a', 'b'), 'b');
  equal((0, _replaceAll.replaceAll)('aa', 'a', 'b'), 'bb');
  equal((0, _replaceAll.replaceAll)('aca', 'a', 'b'), 'bcb');
  equal((0, _replaceAll.replaceAll)('ccc', 'a', 'b'), 'ccc');
  equal((0, _replaceAll.replaceAll)('AAa', 'a', 'b'), 'AAb');
  equal((0, _replaceAll.replaceAll)('Aa', 'a', 'b', true), 'bb');
  equal((0, _replaceAll.replaceAll)('foo bar foo', 'foo', 'moo'), 'moo bar moo');
  equal((0, _replaceAll.replaceAll)('foo bar\n foo', 'foo', 'moo'), 'moo bar\n moo');
  equal((0, _replaceAll.replaceAll)('foo bar FoO', 'foo', 'moo', true), 'moo bar moo');
  equal((0, _replaceAll.replaceAll)('', 'a', 'b'), '');
  equal((0, _replaceAll.replaceAll)(null, 'a', 'b'), '');
  equal((0, _replaceAll.replaceAll)(undefined, 'a', 'b'), '');
  equal((0, _replaceAll.replaceAll)(12345, 'a', 'b'), 12345);
});