"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _clean = require("../clean");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#clean', function () {
  equal((0, _clean.cleanjs)(' foo    bar   '), 'foo bar');
  equal((0, _clean.cleanjs)(123), '123');
  equal((0, _clean.cleanjs)(''), '', 'claning empty string returns empty string');
  equal((0, _clean.cleanjs)(null), '', 'claning null returns empty string');
  equal((0, _clean.cleanjs)(undefined), '', 'claning undefined returns empty string');
});