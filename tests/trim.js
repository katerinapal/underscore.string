"use strict";

var _trim = require("../trim");

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#trim', function () {
  equal((0, _trim.trim)(123), '123', 'Non string');
  equal((0, _trim.trim)(' foo'), 'foo');
  equal((0, _trim.trim)('foo '), 'foo');
  equal((0, _trim.trim)(' foo '), 'foo');
  equal((0, _trim.trim)('    foo     '), 'foo');
  equal((0, _trim.trim)('    foo     '), 'foo', 'Manually set whitespace');
  equal((0, _trim.trim)('\t    foo \t  '), 'foo', 'Manually set RegExp /\\s+/');

  equal((0, _trim.trim)('ffoo', 'ff'), 'oo');
  equal((0, _trim.trim)('ooff', 'ff'), 'oo');
  equal((0, _trim.trim)('ffooff', 'ff'), 'oo');

  equal((0, _trim.trim)('_-foobar-_', '_-'), 'foobar');

  equal((0, _trim.trim)('http://foo/', '/'), 'http://foo');
  equal((0, _trim.trim)('c:\\', '\\'), 'c:');

  equal((0, _trim.trim)(123), '123');
  equal((0, _trim.trim)(123, 3), '12');
  equal((0, _trim.trim)(''), '', 'Trim empty string should return empty string');
  equal((0, _trim.trim)(null), '', 'Trim null should return empty string');
  equal((0, _trim.trim)(undefined), '', 'Trim undefined should return empty string');
});