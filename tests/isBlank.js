"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _isBlank = require("../isBlank");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ok = _assert2.default.ok;

test('#isBlank', function () {
  ok((0, _isBlank.isBlankjs)(''));
  ok((0, _isBlank.isBlankjs)(' '));
  ok((0, _isBlank.isBlankjs)('\n'));
  ok(!(0, _isBlank.isBlankjs)('a'));
  ok(!(0, _isBlank.isBlankjs)('0'));
  ok(!(0, _isBlank.isBlankjs)(0));
  ok((0, _isBlank.isBlankjs)(''));
  ok((0, _isBlank.isBlankjs)(null));
  ok((0, _isBlank.isBlankjs)(undefined));
  ok(!(0, _isBlank.isBlankjs)(false));
});
