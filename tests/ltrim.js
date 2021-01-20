"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _ltrim = require("../ltrim");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#ltrim', function () {
  equal((0, _ltrim.ltrim)(' foo'), 'foo');
  equal((0, _ltrim.ltrim)('    foo'), 'foo');
  equal((0, _ltrim.ltrim)('foo '), 'foo ');
  equal((0, _ltrim.ltrim)(' foo '), 'foo ');
  equal((0, _ltrim.ltrim)(''), '', 'ltrim empty string should return empty string');
  equal((0, _ltrim.ltrim)(null), '', 'ltrim null should return empty string');
  equal((0, _ltrim.ltrim)(undefined), '', 'ltrim undefined should return empty string');

  equal((0, _ltrim.ltrim)('ffoo', 'f'), 'oo');
  equal((0, _ltrim.ltrim)('ooff', 'f'), 'ooff');
  equal((0, _ltrim.ltrim)('ffooff', 'f'), 'ooff');

  equal((0, _ltrim.ltrim)('_-foobar-_', '_-'), 'foobar-_');

  equal((0, _ltrim.ltrim)(123, 1), '23');
});