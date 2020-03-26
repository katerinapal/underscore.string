"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _rtrim = require("../rtrim");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#rtrim', function () {
  equal((0, _rtrim.rtrimjs)('http://foo/', '/'), 'http://foo', 'clean trailing slash');
  equal((0, _rtrim.rtrimjs)(' foo'), ' foo');
  equal((0, _rtrim.rtrimjs)('foo '), 'foo');
  equal((0, _rtrim.rtrimjs)('foo     '), 'foo');
  equal((0, _rtrim.rtrimjs)('foo  bar     '), 'foo  bar');
  equal((0, _rtrim.rtrimjs)(' foo '), ' foo');

  equal((0, _rtrim.rtrimjs)('ffoo', 'f'), 'ffoo');
  equal((0, _rtrim.rtrimjs)('ooff', 'f'), 'oo');
  equal((0, _rtrim.rtrimjs)('ffooff', 'f'), 'ffoo');

  equal((0, _rtrim.rtrimjs)('_-foobar-_', '_-'), '_-foobar');

  equal((0, _rtrim.rtrimjs)(123, 3), '12');
  equal((0, _rtrim.rtrimjs)(''), '', 'rtrim empty string should return empty string');
  equal((0, _rtrim.rtrimjs)(null), '', 'rtrim null should return empty string');
});
