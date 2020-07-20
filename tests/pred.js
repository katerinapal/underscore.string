"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _pred = require("../pred");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;
var deepEqual = _assert2.default.deepEqual;

test('#pred', function () {
  equal((0, _pred.predjs)('b'), 'a');
  equal((0, _pred.predjs)('B'), 'A');
  equal((0, _pred.predjs)(','), '+');
  equal((0, _pred.predjs)(2), '1');
  deepEqual((0, _pred.predjs)().length, 0);
  deepEqual((0, _pred.predjs)('').length, 0);
  deepEqual((0, _pred.predjs)(null).length, 0);
  deepEqual((0, _pred.predjs)(undefined).length, 0);
  deepEqual((0, _pred.predjs)(), '');
  deepEqual((0, _pred.predjs)(''), '');
  deepEqual((0, _pred.predjs)(null), '');
  deepEqual((0, _pred.predjs)(undefined), '');
});