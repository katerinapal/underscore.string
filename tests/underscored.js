"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _underscored = require("../underscored");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#underscored', function () {
  equal((0, _underscored.underscored)('the-underscored-string-method'), 'the_underscored_string_method');
  equal((0, _underscored.underscored)('theUnderscoredStringMethod'), 'the_underscored_string_method');
  equal((0, _underscored.underscored)('TheUnderscoredStringMethod'), 'the_underscored_string_method');
  equal((0, _underscored.underscored)(' the underscored  string method'), 'the_underscored_string_method');
  equal((0, _underscored.underscored)(''), '');
  equal((0, _underscored.underscored)(null), '');
  equal((0, _underscored.underscored)(undefined), '');
  equal((0, _underscored.underscored)(123), '123');
});