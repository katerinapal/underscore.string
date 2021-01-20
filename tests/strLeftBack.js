"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _strLeftBack = require("../strLeftBack");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#strLeftBack', function () {
  equal((0, _strLeftBack.strLeftBack)('This_is_a_test_string', '_'), 'This_is_a_test');
  equal((0, _strLeftBack.strLeftBack)('This_is_a_test_string', 'This'), '');
  equal((0, _strLeftBack.strLeftBack)('This_is_a_test_string'), 'This_is_a_test_string');
  equal((0, _strLeftBack.strLeftBack)('This_is_a_test_string', ''), 'This_is_a_test_string');
  equal((0, _strLeftBack.strLeftBack)('This_is_a_test_string', '-'), 'This_is_a_test_string');
  equal((0, _strLeftBack.strLeftBack)('', 'foo'), '');
  equal((0, _strLeftBack.strLeftBack)(null, 'foo'), '');
  equal((0, _strLeftBack.strLeftBack)(undefined, 'foo'), '');
  equal((0, _strLeftBack.strLeftBack)(123454321, 3), '123454');
});