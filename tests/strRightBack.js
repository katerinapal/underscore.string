"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _strRightBack = require("../strRightBack");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#strRightBack', function () {
  equal((0, _strRightBack.strRightBack)('This_is_a_test_string', '_'), 'string');
  equal((0, _strRightBack.strRightBack)('This_is_a_test_string', 'string'), '');
  equal((0, _strRightBack.strRightBack)('This_is_a_test_string'), 'This_is_a_test_string');
  equal((0, _strRightBack.strRightBack)('This_is_a_test_string', ''), 'This_is_a_test_string');
  equal((0, _strRightBack.strRightBack)('This_is_a_test_string', '-'), 'This_is_a_test_string');
  equal((0, _strRightBack.strRightBack)('', 'foo'), '');
  equal((0, _strRightBack.strRightBack)(null, 'foo'), '');
  equal((0, _strRightBack.strRightBack)(undefined, 'foo'), '');
  equal((0, _strRightBack.strRightBack)(12345, 2), '345');
});