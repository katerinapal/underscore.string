"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _rtrim = require("../rtrim");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#rtrim', function () {
  equal((0, _rtrim.rtrim)('http://foo/', '/'), 'http://foo', 'clean trailing slash');
  equal((0, _rtrim.rtrim)(' foo'), ' foo');
  equal((0, _rtrim.rtrim)('foo '), 'foo');
  equal((0, _rtrim.rtrim)('foo     '), 'foo');
  equal((0, _rtrim.rtrim)('foo  bar     '), 'foo  bar');
  equal((0, _rtrim.rtrim)(' foo '), ' foo');

  equal((0, _rtrim.rtrim)('ffoo', 'f'), 'ffoo');
  equal((0, _rtrim.rtrim)('ooff', 'f'), 'oo');
  equal((0, _rtrim.rtrim)('ffooff', 'f'), 'ffoo');

  equal((0, _rtrim.rtrim)('_-foobar-_', '_-'), '_-foobar');

  equal((0, _rtrim.rtrim)(123, 3), '12');
  equal((0, _rtrim.rtrim)(''), '', 'rtrim empty string should return empty string');
  equal((0, _rtrim.rtrim)(null), '', 'rtrim null should return empty string');
});