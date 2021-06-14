"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _endsWith = require("../endsWith");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ok = _assert2.default.ok;
var strictEqual = _assert2.default.strictEqual;

test('#endsWith', function () {
  ok((0, _endsWith.endsWith)('foobar', 'bar'), 'foobar ends with bar');
  ok((0, _endsWith.endsWith)('foobarfoobar', 'bar'), 'foobar ends with bar');
  ok((0, _endsWith.endsWith)('foo', 'o'), 'foobar ends with o');
  ok((0, _endsWith.endsWith)('foobar', 'bar'), 'foobar ends with bar');
  ok((0, _endsWith.endsWith)('00018-0000062.Plone.sdh264.1a7264e6912a91aa4a81b64dc5517df7b8875994.mp4', 'mp4'), 'endsWith .mp4');
  ok(!(0, _endsWith.endsWith)('fooba', 'bar'), 'fooba does not end with bar');
  ok((0, _endsWith.endsWith)(12345, 45), '12345 ends with 45');
  ok(!(0, _endsWith.endsWith)(12345, 6), '12345 does not end with 6');
  ok((0, _endsWith.endsWith)('', ''), 'empty string ends with empty string');
  ok((0, _endsWith.endsWith)(null, ''), 'null ends with empty string');
  ok(!(0, _endsWith.endsWith)(null, 'foo'), 'null ends with foo');
  ok((0, _endsWith.endsWith)('foobar?', 'bar', 6), 'foobar ends with bar at position 6');
  ok((0, _endsWith.endsWith)(12345, 34, 4), 'number ends with 34 at position 4');
  ok(!(0, _endsWith.endsWith)(12345, 45, 4), 'number ends not with 45 at position 4');
  ok((0, _endsWith.endsWith)('foobä', 'ä'), 'string ends with a unicode');

  strictEqual((0, _endsWith.endsWith)('vader', 'der'), true);
  strictEqual((0, _endsWith.endsWith)('VADER', 'DER'), true);
  strictEqual((0, _endsWith.endsWith)('VADER', 'der'), false);
  strictEqual((0, _endsWith.endsWith)('VADER', 'DeR'), false);
  strictEqual((0, _endsWith.endsWith)('VADER'), false);
  strictEqual((0, _endsWith.endsWith)('undefined'), true);
  strictEqual((0, _endsWith.endsWith)('null', null), true);
  strictEqual((0, _endsWith.endsWith)('vader', 'der', 5), true);
  strictEqual((0, _endsWith.endsWith)('VADER', 'DER', 5), true);
  strictEqual((0, _endsWith.endsWith)('VADER', 'der', 5), false);
  strictEqual((0, _endsWith.endsWith)('VADER', 'DER', 5), true);
  strictEqual((0, _endsWith.endsWith)('VADER', 'der', 5), false);
  strictEqual((0, _endsWith.endsWith)('vader', 'der', -20), false);
  strictEqual((0, _endsWith.endsWith)('vader', 'der', 0), false);
  strictEqual((0, _endsWith.endsWith)('vader', 'der', 1), false);
  strictEqual((0, _endsWith.endsWith)('vader', 'der', 2), false);
  strictEqual((0, _endsWith.endsWith)('vader', 'der', 3), false);
  strictEqual((0, _endsWith.endsWith)('vader', 'der', 4), false);
});