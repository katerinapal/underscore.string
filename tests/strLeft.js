"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _strLeft = require("../strLeft");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#strLeft', function () {
  equal((0, _strLeft.strLeftjs)('This_is_a_test_string', '_'), 'This');
  equal((0, _strLeft.strLeftjs)('This_is_a_test_string', 'This'), '');
  equal((0, _strLeft.strLeftjs)('This_is_a_test_string'), 'This_is_a_test_string');
  equal((0, _strLeft.strLeftjs)('This_is_a_test_string', ''), 'This_is_a_test_string');
  equal((0, _strLeft.strLeftjs)('This_is_a_test_string', '-'), 'This_is_a_test_string');
  equal((0, _strLeft.strLeftjs)('', 'foo'), '');
  equal((0, _strLeft.strLeftjs)(null, 'foo'), '');
  equal((0, _strLeft.strLeftjs)(undefined, 'foo'), '');
  equal((0, _strLeft.strLeftjs)(123454321, 3), '12');
});