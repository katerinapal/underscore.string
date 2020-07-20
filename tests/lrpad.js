"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _lrpad = require("../lrpad");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#lrpad', function () {
  equal((0, _lrpad.lrpadjs)('1', 8), '    1   ');
  equal((0, _lrpad.lrpadjs)(1, 8), '    1   ');
  equal((0, _lrpad.lrpadjs)('1', 8, '0'), '00001000');
  equal((0, _lrpad.lrpadjs)('foo', 8, '0'), '000foo00');
  equal((0, _lrpad.lrpadjs)('foo', 7, '0'), '00foo00');
  equal((0, _lrpad.lrpadjs)('foo', 7, '!@$%dofjrofj'), '!!foo!!');
  equal((0, _lrpad.lrpadjs)('', 2), '  ');
  equal((0, _lrpad.lrpadjs)(null, 2), '  ');
  equal((0, _lrpad.lrpadjs)(undefined, 2), '  ');
});