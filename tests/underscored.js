"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _underscored = require("../underscored");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#underscored', function () {
  equal((0, _underscored.underscoredjs)('the-underscored-string-method'), 'the_underscored_string_method');
  equal((0, _underscored.underscoredjs)('theUnderscoredStringMethod'), 'the_underscored_string_method');
  equal((0, _underscored.underscoredjs)('TheUnderscoredStringMethod'), 'the_underscored_string_method');
  equal((0, _underscored.underscoredjs)(' the underscored  string method'), 'the_underscored_string_method');
  equal((0, _underscored.underscoredjs)(''), '');
  equal((0, _underscored.underscoredjs)(null), '');
  equal((0, _underscored.underscoredjs)(undefined), '');
  equal((0, _underscored.underscoredjs)(123), '123');
});
