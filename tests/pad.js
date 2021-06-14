"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _pad = require("../pad");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#pad', function () {
  equal((0, _pad.pad)('1', 8), '       1');
  equal((0, _pad.pad)(1, 8), '       1');
  equal((0, _pad.pad)('1', 8, '0'), '00000001');
  equal((0, _pad.pad)('1', 8, '0', 'left'), '00000001');
  equal((0, _pad.pad)('1', 8, '0', 'right'), '10000000');
  equal((0, _pad.pad)('1', 8, '0', 'both'), '00001000');
  equal((0, _pad.pad)('foo', 8, '0', 'both'), '000foo00');
  equal((0, _pad.pad)('foo', 7, '0', 'both'), '00foo00');
  equal((0, _pad.pad)('foo', 7, '!@$%dofjrofj', 'both'), '!!foo!!');
  equal((0, _pad.pad)('', 2), '  ');
  equal((0, _pad.pad)(null, 2), '  ');
  equal((0, _pad.pad)(undefined, 2), '  ');
});