import ext_assert from "assert";
import { endsWith as endsWith_endsWith } from "../endsWith";
var ok = ext_assert.ok;
var strictEqual = ext_assert.strictEqual;


test('#endsWith', function() {
  ok(endsWith_endsWith('foobar', 'bar'), 'foobar ends with bar');
  ok(endsWith_endsWith('foobarfoobar', 'bar'), 'foobar ends with bar');
  ok(endsWith_endsWith('foo', 'o'), 'foobar ends with o');
  ok(endsWith_endsWith('foobar', 'bar'), 'foobar ends with bar');
  ok(endsWith_endsWith('00018-0000062.Plone.sdh264.1a7264e6912a91aa4a81b64dc5517df7b8875994.mp4', 'mp4'), 'endsWith .mp4');
  ok(!endsWith_endsWith('fooba', 'bar'), 'fooba does not end with bar');
  ok(endsWith_endsWith(12345, 45), '12345 ends with 45');
  ok(!endsWith_endsWith(12345, 6), '12345 does not end with 6');
  ok(endsWith_endsWith('', ''), 'empty string ends with empty string');
  ok(endsWith_endsWith(null, ''), 'null ends with empty string');
  ok(!endsWith_endsWith(null, 'foo'), 'null ends with foo');
  ok(endsWith_endsWith('foobar?', 'bar', 6), 'foobar ends with bar at position 6');
  ok(endsWith_endsWith(12345, 34, 4), 'number ends with 34 at position 4');
  ok(!endsWith_endsWith(12345, 45, 4), 'number ends not with 45 at position 4');
  ok(endsWith_endsWith('foobä', 'ä'), 'string ends with a unicode');

  strictEqual(endsWith_endsWith('vader', 'der'), true);
  strictEqual(endsWith_endsWith('VADER', 'DER'), true);
  strictEqual(endsWith_endsWith('VADER', 'der'), false);
  strictEqual(endsWith_endsWith('VADER', 'DeR'), false);
  strictEqual(endsWith_endsWith('VADER'), false);
  strictEqual(endsWith_endsWith('undefined'), true);
  strictEqual(endsWith_endsWith('null', null), true);
  strictEqual(endsWith_endsWith('vader', 'der', 5), true);
  strictEqual(endsWith_endsWith('VADER', 'DER', 5), true);
  strictEqual(endsWith_endsWith('VADER', 'der', 5), false);
  strictEqual(endsWith_endsWith('VADER', 'DER', 5), true);
  strictEqual(endsWith_endsWith('VADER', 'der', 5), false);
  strictEqual(endsWith_endsWith('vader', 'der', -20), false);
  strictEqual(endsWith_endsWith('vader', 'der', 0), false);
  strictEqual(endsWith_endsWith('vader', 'der', 1), false);
  strictEqual(endsWith_endsWith('vader', 'der', 2), false);
  strictEqual(endsWith_endsWith('vader', 'der', 3), false);
  strictEqual(endsWith_endsWith('vader', 'der', 4), false);
});

