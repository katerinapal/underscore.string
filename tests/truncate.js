"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _truncate = require("../truncate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#truncate', function () {
  equal((0, _truncate.truncatejs)('Hello world', 6, 'read more'), 'Hello read more');
  equal((0, _truncate.truncatejs)('Hello world', 5), 'Hello...');
  equal((0, _truncate.truncatejs)('Hello', 10), 'Hello');
  equal((0, _truncate.truncatejs)('', 10), '');
  equal((0, _truncate.truncatejs)(null, 10), '');
  equal((0, _truncate.truncatejs)(undefined, 10), '');
  equal((0, _truncate.truncatejs)(1234567890, 5), '12345...');
});