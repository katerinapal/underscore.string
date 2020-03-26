import assert_assert from "assert";
import { startsWithjs as startsWith_startsWithjsjs } from "../startsWith";
var ok = assert_assert.ok;
var strictEqual = assert_assert.strictEqual;


test('#startsWith', function() {
  ok(startsWith_startsWithjsjs('foobar', 'foo'), 'foobar starts with foo');
  ok(!startsWith_startsWithjsjs('oobar', 'foo'), 'oobar does not start with foo');
  ok(startsWith_startsWithjsjs('oobar', 'o'), 'oobar starts with o');
  ok(startsWith_startsWithjsjs(12345, 123), '12345 starts with 123');
  ok(!startsWith_startsWithjsjs(2345, 123), '2345 does not start with 123');
  ok(startsWith_startsWithjsjs('', ''), 'empty string starts with empty string');
  ok(startsWith_startsWithjsjs(null, ''), 'null starts with empty string');
  ok(!startsWith_startsWithjsjs(null, 'foo'), 'null starts with foo');
  ok(startsWith_startsWithjsjs('-foobar', 'foo', 1), 'foobar starts with foo at position 1');
  ok(startsWith_startsWithjsjs('foobar', 'foo', 0), 'foobar starts with foo at position 0');
  ok(!startsWith_startsWithjsjs('foobar', 'foo', 1), 'foobar starts not with foo at position 1');
  ok(startsWith_startsWithjsjs('Äpfel', 'Ä'), 'string starts with a unicode');

  strictEqual(startsWith_startsWithjsjs('hello', 'hell'), true);
  strictEqual(startsWith_startsWithjsjs('HELLO', 'HELL'), true);
  strictEqual(startsWith_startsWithjsjs('HELLO', 'hell'), false);
  strictEqual(startsWith_startsWithjsjs('HELLO', 'hell'), false);
  strictEqual(startsWith_startsWithjsjs('hello', 'hell', 0), true);
  strictEqual(startsWith_startsWithjsjs('HELLO', 'HELL', 0), true);
  strictEqual(startsWith_startsWithjsjs('HELLO', 'hell', 0), false);
  strictEqual(startsWith_startsWithjsjs('HELLO', 'hell', 0), false);
  strictEqual(startsWith_startsWithjsjs('HELLO'), false);
  strictEqual(startsWith_startsWithjsjs('undefined'), true);
  strictEqual(startsWith_startsWithjsjs('null', null), true);
  strictEqual(startsWith_startsWithjsjs('hello', 'hell', -20), true);
  strictEqual(startsWith_startsWithjsjs('hello', 'hell', 1), false);
  strictEqual(startsWith_startsWithjsjs('hello', 'hell', 2), false);
  strictEqual(startsWith_startsWithjsjs('hello', 'hell', 3), false);
  strictEqual(startsWith_startsWithjsjs('hello', 'hell', 4), false);
  strictEqual(startsWith_startsWithjsjs('hello', 'hell', 5), false);
  strictEqual(startsWith_startsWithjsjs('hello', 'hell', 20), false);
});

