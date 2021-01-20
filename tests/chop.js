"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _chop = require("../chop");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ok = _assert2.default.ok;

test('#chop', function () {
  ok((0, _chop.chop)(null, 2).length === 0, 'output []');
  ok((0, _chop.chop)('whitespace', 2).length === 5, 'output [wh, it, es, pa, ce]');
  ok((0, _chop.chop)('whitespace', 3).length === 4, 'output [whi, tes, pac, e]');
  ok((0, _chop.chop)('whitespace')[0].length === 10, 'output [whitespace]');
  ok((0, _chop.chop)(12345, 1).length === 5, 'output [1, 2, 3,  4, 5]');
});