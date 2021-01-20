"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _swapCase = require("../swapCase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#swapCase', function () {
  equal((0, _swapCase.swapCase)('AaBbCcDdEe'), 'aAbBcCdDeE');
  equal((0, _swapCase.swapCase)('Hello World'), 'hELLO wORLD');
  equal((0, _swapCase.swapCase)(''), '');
  equal((0, _swapCase.swapCase)(null), '');
  equal((0, _swapCase.swapCase)(undefined), '');
});