"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _lines = require("../lines");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;
var deepEqual = _assert2.default.deepEqual;

test('#lines', function () {
  equal((0, _lines.lines)('Hello\nWorld').length, 2);
  equal((0, _lines.lines)('Hello\rWorld').length, 2);
  equal((0, _lines.lines)('Hello World').length, 1);
  equal((0, _lines.lines)('\r\n\n\r').length, 4);
  equal((0, _lines.lines)('Hello\r\r\nWorld').length, 3);
  equal((0, _lines.lines)('Hello\r\rWorld').length, 3);
  equal((0, _lines.lines)(123).length, 1);
  deepEqual((0, _lines.lines)(''), ['']);
  deepEqual((0, _lines.lines)(null), []);
  deepEqual((0, _lines.lines)(undefined), []);
  deepEqual((0, _lines.lines)('Hello\rWorld'), ['Hello', 'World']);
  deepEqual((0, _lines.lines)('Hello\r\nWorld'), ['Hello', 'World']);
});