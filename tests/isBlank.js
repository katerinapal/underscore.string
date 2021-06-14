"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _isBlank = require("../isBlank");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ok = _assert2.default.ok;

test('#isBlank', function () {
  ok((0, _isBlank.isBlank)(''));
  ok((0, _isBlank.isBlank)(' '));
  ok((0, _isBlank.isBlank)('\n'));
  ok(!(0, _isBlank.isBlank)('a'));
  ok(!(0, _isBlank.isBlank)('0'));
  ok(!(0, _isBlank.isBlank)(0));
  ok((0, _isBlank.isBlank)(''));
  ok((0, _isBlank.isBlank)(null));
  ok((0, _isBlank.isBlank)(undefined));
  ok(!(0, _isBlank.isBlank)(false));
});