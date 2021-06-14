"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _include = require("../include");

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ok = _assert2.default.ok;

test('#include', function () {
  ok((0, _include.include)('foobar', 'bar'), 'foobar includes bar');
  ok(!(0, _include.include)('foobar', 'buzz'), 'foobar does not includes buzz');
  ok((0, _include.include)(12345, 34), '12345 includes 34');
  ok(!_.s.contains(12345, 6), '12345 does not include 6');
  ok(!(0, _include.include)('', 34), 'empty string includes 34');
  ok(!(0, _include.include)(null, 34), 'null includes 34');
  ok((0, _include.include)(null, ''), 'null includes empty string');
});