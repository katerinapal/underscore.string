"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _lpad = require("../lpad");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#lpad', function () {
  equal((0, _lpad.lpadjs)('1', 8), '       1');
  equal((0, _lpad.lpadjs)(1, 8), '       1');
  equal((0, _lpad.lpadjs)('1', 8, '0'), '00000001');
  equal((0, _lpad.lpadjs)('1', 8, '0', 'left'), '00000001');
  equal((0, _lpad.lpadjs)('', 2), '  ');
  equal((0, _lpad.lpadjs)(null, 2), '  ');
  equal((0, _lpad.lpadjs)(undefined, 2), '  ');
});