"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _ltrim = require("../ltrim");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#ltrim', function () {
  equal((0, _ltrim.ltrimjs)(' foo'), 'foo');
  equal((0, _ltrim.ltrimjs)('    foo'), 'foo');
  equal((0, _ltrim.ltrimjs)('foo '), 'foo ');
  equal((0, _ltrim.ltrimjs)(' foo '), 'foo ');
  equal((0, _ltrim.ltrimjs)(''), '', 'ltrim empty string should return empty string');
  equal((0, _ltrim.ltrimjs)(null), '', 'ltrim null should return empty string');
  equal((0, _ltrim.ltrimjs)(undefined), '', 'ltrim undefined should return empty string');

  equal((0, _ltrim.ltrimjs)('ffoo', 'f'), 'oo');
  equal((0, _ltrim.ltrimjs)('ooff', 'f'), 'ooff');
  equal((0, _ltrim.ltrimjs)('ffooff', 'f'), 'ooff');

  equal((0, _ltrim.ltrimjs)('_-foobar-_', '_-'), 'foobar-_');

  equal((0, _ltrim.ltrimjs)(123, 1), '23');
});