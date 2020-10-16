"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _strRight = require("../strRight");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#strRight', function () {
  equal((0, _strRight.strRightjs)('This_is_a_test_string', '_'), 'is_a_test_string');
  equal((0, _strRight.strRightjs)('This_is_a_test_string', 'string'), '');
  equal((0, _strRight.strRightjs)('This_is_a_test_string'), 'This_is_a_test_string');
  equal((0, _strRight.strRightjs)('This_is_a_test_string', ''), 'This_is_a_test_string');
  equal((0, _strRight.strRightjs)('This_is_a_test_string', '-'), 'This_is_a_test_string');
  equal((0, _strRight.strRightjs)('This_is_a_test_string', ''), 'This_is_a_test_string');
  equal((0, _strRight.strRightjs)('', 'foo'), '');
  equal((0, _strRight.strRightjs)(null, 'foo'), '');
  equal((0, _strRight.strRightjs)(undefined, 'foo'), '');
  equal((0, _strRight.strRightjs)(12345, 2), '345');
});