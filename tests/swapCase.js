"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _swapCase = require("../swapCase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#swapCase', function () {
  equal((0, _swapCase.swapCasejs)('AaBbCcDdEe'), 'aAbBcCdDeE');
  equal((0, _swapCase.swapCasejs)('Hello World'), 'hELLO wORLD');
  equal((0, _swapCase.swapCasejs)(''), '');
  equal((0, _swapCase.swapCasejs)(null), '');
  equal((0, _swapCase.swapCasejs)(undefined), '');
});
