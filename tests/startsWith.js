"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _startsWith = require("../startsWith");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ok = _assert2.default.ok;
var strictEqual = _assert2.default.strictEqual;

test('#startsWith', function () {
  ok((0, _startsWith.startsWithjs)('foobar', 'foo'), 'foobar starts with foo');
  ok(!(0, _startsWith.startsWithjs)('oobar', 'foo'), 'oobar does not start with foo');
  ok((0, _startsWith.startsWithjs)('oobar', 'o'), 'oobar starts with o');
  ok((0, _startsWith.startsWithjs)(12345, 123), '12345 starts with 123');
  ok(!(0, _startsWith.startsWithjs)(2345, 123), '2345 does not start with 123');
  ok((0, _startsWith.startsWithjs)('', ''), 'empty string starts with empty string');
  ok((0, _startsWith.startsWithjs)(null, ''), 'null starts with empty string');
  ok(!(0, _startsWith.startsWithjs)(null, 'foo'), 'null starts with foo');
  ok((0, _startsWith.startsWithjs)('-foobar', 'foo', 1), 'foobar starts with foo at position 1');
  ok((0, _startsWith.startsWithjs)('foobar', 'foo', 0), 'foobar starts with foo at position 0');
  ok(!(0, _startsWith.startsWithjs)('foobar', 'foo', 1), 'foobar starts not with foo at position 1');
  ok((0, _startsWith.startsWithjs)('Äpfel', 'Ä'), 'string starts with a unicode');

  strictEqual((0, _startsWith.startsWithjs)('hello', 'hell'), true);
  strictEqual((0, _startsWith.startsWithjs)('HELLO', 'HELL'), true);
  strictEqual((0, _startsWith.startsWithjs)('HELLO', 'hell'), false);
  strictEqual((0, _startsWith.startsWithjs)('HELLO', 'hell'), false);
  strictEqual((0, _startsWith.startsWithjs)('hello', 'hell', 0), true);
  strictEqual((0, _startsWith.startsWithjs)('HELLO', 'HELL', 0), true);
  strictEqual((0, _startsWith.startsWithjs)('HELLO', 'hell', 0), false);
  strictEqual((0, _startsWith.startsWithjs)('HELLO', 'hell', 0), false);
  strictEqual((0, _startsWith.startsWithjs)('HELLO'), false);
  strictEqual((0, _startsWith.startsWithjs)('undefined'), true);
  strictEqual((0, _startsWith.startsWithjs)('null', null), true);
  strictEqual((0, _startsWith.startsWithjs)('hello', 'hell', -20), true);
  strictEqual((0, _startsWith.startsWithjs)('hello', 'hell', 1), false);
  strictEqual((0, _startsWith.startsWithjs)('hello', 'hell', 2), false);
  strictEqual((0, _startsWith.startsWithjs)('hello', 'hell', 3), false);
  strictEqual((0, _startsWith.startsWithjs)('hello', 'hell', 4), false);
  strictEqual((0, _startsWith.startsWithjs)('hello', 'hell', 5), false);
  strictEqual((0, _startsWith.startsWithjs)('hello', 'hell', 20), false);
});
