"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _chars = require("../chars");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#chars', function () {
  equal((0, _chars.charsjs)('Hello').length, 5);
  equal((0, _chars.charsjs)(123).length, 3);
  equal((0, _chars.charsjs)('').length, 0);
  equal((0, _chars.charsjs)(null).length, 0);
  equal((0, _chars.charsjs)(undefined).length, 0);
});