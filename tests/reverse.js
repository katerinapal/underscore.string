"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _reverse = require("../reverse");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#reverse', function () {
  equal((0, _reverse.reverse)('foo'), 'oof');
  equal((0, _reverse.reverse)('foobar'), 'raboof');
  equal((0, _reverse.reverse)('foo bar'), 'rab oof');
  equal((0, _reverse.reverse)('saippuakauppias'), 'saippuakauppias');
  equal((0, _reverse.reverse)(123), '321', 'Non string');
  equal((0, _reverse.reverse)(123.45), '54.321', 'Non string');
  equal((0, _reverse.reverse)(''), '', 'reversing empty string returns empty string');
  equal((0, _reverse.reverse)(null), '', 'reversing null returns empty string');
  equal((0, _reverse.reverse)(undefined), '', 'reversing undefined returns empty string');
});