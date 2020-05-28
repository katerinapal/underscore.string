"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _lines = require("../lines");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;
var deepEqual = _assert2.default.deepEqual;

test('#lines', function () {
  equal((0, _lines.linesjs)('Hello\nWorld').length, 2);
  equal((0, _lines.linesjs)('Hello\rWorld').length, 2);
  equal((0, _lines.linesjs)('Hello World').length, 1);
  equal((0, _lines.linesjs)('\r\n\n\r').length, 4);
  equal((0, _lines.linesjs)('Hello\r\r\nWorld').length, 3);
  equal((0, _lines.linesjs)('Hello\r\rWorld').length, 3);
  equal((0, _lines.linesjs)(123).length, 1);
  deepEqual((0, _lines.linesjs)(''), ['']);
  deepEqual((0, _lines.linesjs)(null), []);
  deepEqual((0, _lines.linesjs)(undefined), []);
  deepEqual((0, _lines.linesjs)('Hello\rWorld'), ['Hello', 'World']);
  deepEqual((0, _lines.linesjs)('Hello\r\nWorld'), ['Hello', 'World']);
});