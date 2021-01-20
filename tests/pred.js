"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _pred = require("../pred");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;
var deepEqual = _assert2.default.deepEqual;

test('#pred', function () {
  equal((0, _pred.pred)('b'), 'a');
  equal((0, _pred.pred)('B'), 'A');
  equal((0, _pred.pred)(','), '+');
  equal((0, _pred.pred)(2), '1');
  deepEqual((0, _pred.pred)().length, 0);
  deepEqual((0, _pred.pred)('').length, 0);
  deepEqual((0, _pred.pred)(null).length, 0);
  deepEqual((0, _pred.pred)(undefined).length, 0);
  deepEqual((0, _pred.pred)(), '');
  deepEqual((0, _pred.pred)(''), '');
  deepEqual((0, _pred.pred)(null), '');
  deepEqual((0, _pred.pred)(undefined), '');
});