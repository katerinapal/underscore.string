"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _unquote = require("../unquote");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#unquote', function () {
  equal((0, _unquote.unquotejs)('"foo"'), 'foo');
  equal((0, _unquote.unquotejs)('""foo""'), '"foo"');
  equal((0, _unquote.unquotejs)('"1"'), '1');
  equal((0, _unquote.unquotejs)('\'foo\'', '\''), 'foo');
});
