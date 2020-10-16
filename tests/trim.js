"use strict";

var _trim = require("../trim");

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#trim', function () {
  equal((0, _trim.trimjs)(123), '123', 'Non string');
  equal((0, _trim.trimjs)(' foo'), 'foo');
  equal((0, _trim.trimjs)('foo '), 'foo');
  equal((0, _trim.trimjs)(' foo '), 'foo');
  equal((0, _trim.trimjs)('    foo     '), 'foo');
  equal((0, _trim.trimjs)('    foo     '), 'foo', 'Manually set whitespace');
  equal((0, _trim.trimjs)('\t    foo \t  '), 'foo', 'Manually set RegExp /\\s+/');

  equal((0, _trim.trimjs)('ffoo', 'ff'), 'oo');
  equal((0, _trim.trimjs)('ooff', 'ff'), 'oo');
  equal((0, _trim.trimjs)('ffooff', 'ff'), 'oo');

  equal((0, _trim.trimjs)('_-foobar-_', '_-'), 'foobar');

  equal((0, _trim.trimjs)('http://foo/', '/'), 'http://foo');
  equal((0, _trim.trimjs)('c:\\', '\\'), 'c:');

  equal((0, _trim.trimjs)(123), '123');
  equal((0, _trim.trimjs)(123, 3), '12');
  equal((0, _trim.trimjs)(''), '', 'Trim empty string should return empty string');
  equal((0, _trim.trimjs)(null), '', 'Trim null should return empty string');
  equal((0, _trim.trimjs)(undefined), '', 'Trim undefined should return empty string');
});