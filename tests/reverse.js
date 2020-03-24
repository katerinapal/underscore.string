"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _reverse = require("../reverse");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#reverse', function () {
  equal((0, _reverse.reversejs)('foo'), 'oof');
  equal((0, _reverse.reversejs)('foobar'), 'raboof');
  equal((0, _reverse.reversejs)('foo bar'), 'rab oof');
  equal((0, _reverse.reversejs)('saippuakauppias'), 'saippuakauppias');
  equal((0, _reverse.reversejs)(123), '321', 'Non string');
  equal((0, _reverse.reversejs)(123.45), '54.321', 'Non string');
  equal((0, _reverse.reversejs)(''), '', 'reversing empty string returns empty string');
  equal((0, _reverse.reversejs)(null), '', 'reversing null returns empty string');
  equal((0, _reverse.reversejs)(undefined), '', 'reversing undefined returns empty string');
});
