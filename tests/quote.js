"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _quote = require("../quote");

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#quote', function () {
  equal((0, _quote.quotejs)('foo'), '"foo"');
  equal((0, _quote.quotejs)('"foo"'), '""foo""');
  equal((0, _quote.quotejs)(1), '"1"');
  equal((0, _quote.quotejs)('foo', '\''), '\'foo\'');

  // alias
  equal((0, _.q)('foo'), '"foo"');
  equal((0, _.q)(''), '""');
  equal((0, _.q)(null), '""');
  equal((0, _.q)(undefined), '""');
});
