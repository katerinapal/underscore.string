import ext_assert from "assert";
import { startsWith as startsWith_startsWith } from "../startsWith";
var ok = ext_assert.ok;
var strictEqual = ext_assert.strictEqual;


test('#startsWith', function() {
  ok(startsWith_startsWith('foobar', 'foo'), 'foobar starts with foo');
  ok(!startsWith_startsWith('oobar', 'foo'), 'oobar does not start with foo');
  ok(startsWith_startsWith('oobar', 'o'), 'oobar starts with o');
  ok(startsWith_startsWith(12345, 123), '12345 starts with 123');
  ok(!startsWith_startsWith(2345, 123), '2345 does not start with 123');
  ok(startsWith_startsWith('', ''), 'empty string starts with empty string');
  ok(startsWith_startsWith(null, ''), 'null starts with empty string');
  ok(!startsWith_startsWith(null, 'foo'), 'null starts with foo');
  ok(startsWith_startsWith('-foobar', 'foo', 1), 'foobar starts with foo at position 1');
  ok(startsWith_startsWith('foobar', 'foo', 0), 'foobar starts with foo at position 0');
  ok(!startsWith_startsWith('foobar', 'foo', 1), 'foobar starts not with foo at position 1');
  ok(startsWith_startsWith('Äpfel', 'Ä'), 'string starts with a unicode');

  strictEqual(startsWith_startsWith('hello', 'hell'), true);
  strictEqual(startsWith_startsWith('HELLO', 'HELL'), true);
  strictEqual(startsWith_startsWith('HELLO', 'hell'), false);
  strictEqual(startsWith_startsWith('HELLO', 'hell'), false);
  strictEqual(startsWith_startsWith('hello', 'hell', 0), true);
  strictEqual(startsWith_startsWith('HELLO', 'HELL', 0), true);
  strictEqual(startsWith_startsWith('HELLO', 'hell', 0), false);
  strictEqual(startsWith_startsWith('HELLO', 'hell', 0), false);
  strictEqual(startsWith_startsWith('HELLO'), false);
  strictEqual(startsWith_startsWith('undefined'), true);
  strictEqual(startsWith_startsWith('null', null), true);
  strictEqual(startsWith_startsWith('hello', 'hell', -20), true);
  strictEqual(startsWith_startsWith('hello', 'hell', 1), false);
  strictEqual(startsWith_startsWith('hello', 'hell', 2), false);
  strictEqual(startsWith_startsWith('hello', 'hell', 3), false);
  strictEqual(startsWith_startsWith('hello', 'hell', 4), false);
  strictEqual(startsWith_startsWith('hello', 'hell', 5), false);
  strictEqual(startsWith_startsWith('hello', 'hell', 20), false);
});

