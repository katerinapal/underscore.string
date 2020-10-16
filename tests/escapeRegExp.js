"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _escapeRegExp = require("../helper/escapeRegExp");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#escapeRegExp', function () {
  equal((0, _escapeRegExp.escapeRegExpjs)(/hello(?=\sworld)/.source), 'hello\\(\\?\\=\\\\sworld\\)', 'with lookahead');
  equal((0, _escapeRegExp.escapeRegExpjs)(/hello(?!\shell)/.source), 'hello\\(\\?\\!\\\\shell\\)', 'with negative lookahead');
});