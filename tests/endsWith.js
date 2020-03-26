"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _endsWith = require("../endsWith");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ok = _assert2.default.ok;
var strictEqual = _assert2.default.strictEqual;

test('#endsWith', function () {
  ok((0, _endsWith.endsWithjs)('foobar', 'bar'), 'foobar ends with bar');
  ok((0, _endsWith.endsWithjs)('foobarfoobar', 'bar'), 'foobar ends with bar');
  ok((0, _endsWith.endsWithjs)('foo', 'o'), 'foobar ends with o');
  ok((0, _endsWith.endsWithjs)('foobar', 'bar'), 'foobar ends with bar');
  ok((0, _endsWith.endsWithjs)('00018-0000062.Plone.sdh264.1a7264e6912a91aa4a81b64dc5517df7b8875994.mp4', 'mp4'), 'endsWith .mp4');
  ok(!(0, _endsWith.endsWithjs)('fooba', 'bar'), 'fooba does not end with bar');
  ok((0, _endsWith.endsWithjs)(12345, 45), '12345 ends with 45');
  ok(!(0, _endsWith.endsWithjs)(12345, 6), '12345 does not end with 6');
  ok((0, _endsWith.endsWithjs)('', ''), 'empty string ends with empty string');
  ok((0, _endsWith.endsWithjs)(null, ''), 'null ends with empty string');
  ok(!(0, _endsWith.endsWithjs)(null, 'foo'), 'null ends with foo');
  ok((0, _endsWith.endsWithjs)('foobar?', 'bar', 6), 'foobar ends with bar at position 6');
  ok((0, _endsWith.endsWithjs)(12345, 34, 4), 'number ends with 34 at position 4');
  ok(!(0, _endsWith.endsWithjs)(12345, 45, 4), 'number ends not with 45 at position 4');
  ok((0, _endsWith.endsWithjs)('foobä', 'ä'), 'string ends with a unicode');

  strictEqual((0, _endsWith.endsWithjs)('vader', 'der'), true);
  strictEqual((0, _endsWith.endsWithjs)('VADER', 'DER'), true);
  strictEqual((0, _endsWith.endsWithjs)('VADER', 'der'), false);
  strictEqual((0, _endsWith.endsWithjs)('VADER', 'DeR'), false);
  strictEqual((0, _endsWith.endsWithjs)('VADER'), false);
  strictEqual((0, _endsWith.endsWithjs)('undefined'), true);
  strictEqual((0, _endsWith.endsWithjs)('null', null), true);
  strictEqual((0, _endsWith.endsWithjs)('vader', 'der', 5), true);
  strictEqual((0, _endsWith.endsWithjs)('VADER', 'DER', 5), true);
  strictEqual((0, _endsWith.endsWithjs)('VADER', 'der', 5), false);
  strictEqual((0, _endsWith.endsWithjs)('VADER', 'DER', 5), true);
  strictEqual((0, _endsWith.endsWithjs)('VADER', 'der', 5), false);
  strictEqual((0, _endsWith.endsWithjs)('vader', 'der', -20), false);
  strictEqual((0, _endsWith.endsWithjs)('vader', 'der', 0), false);
  strictEqual((0, _endsWith.endsWithjs)('vader', 'der', 1), false);
  strictEqual((0, _endsWith.endsWithjs)('vader', 'der', 2), false);
  strictEqual((0, _endsWith.endsWithjs)('vader', 'der', 3), false);
  strictEqual((0, _endsWith.endsWithjs)('vader', 'der', 4), false);
});
