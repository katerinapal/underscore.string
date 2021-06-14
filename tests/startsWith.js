"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _startsWith = require("../startsWith");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ok = _assert2.default.ok;
var strictEqual = _assert2.default.strictEqual;

test('#startsWith', function () {
  ok((0, _startsWith.startsWith)('foobar', 'foo'), 'foobar starts with foo');
  ok(!(0, _startsWith.startsWith)('oobar', 'foo'), 'oobar does not start with foo');
  ok((0, _startsWith.startsWith)('oobar', 'o'), 'oobar starts with o');
  ok((0, _startsWith.startsWith)(12345, 123), '12345 starts with 123');
  ok(!(0, _startsWith.startsWith)(2345, 123), '2345 does not start with 123');
  ok((0, _startsWith.startsWith)('', ''), 'empty string starts with empty string');
  ok((0, _startsWith.startsWith)(null, ''), 'null starts with empty string');
  ok(!(0, _startsWith.startsWith)(null, 'foo'), 'null starts with foo');
  ok((0, _startsWith.startsWith)('-foobar', 'foo', 1), 'foobar starts with foo at position 1');
  ok((0, _startsWith.startsWith)('foobar', 'foo', 0), 'foobar starts with foo at position 0');
  ok(!(0, _startsWith.startsWith)('foobar', 'foo', 1), 'foobar starts not with foo at position 1');
  ok((0, _startsWith.startsWith)('Äpfel', 'Ä'), 'string starts with a unicode');

  strictEqual((0, _startsWith.startsWith)('hello', 'hell'), true);
  strictEqual((0, _startsWith.startsWith)('HELLO', 'HELL'), true);
  strictEqual((0, _startsWith.startsWith)('HELLO', 'hell'), false);
  strictEqual((0, _startsWith.startsWith)('HELLO', 'hell'), false);
  strictEqual((0, _startsWith.startsWith)('hello', 'hell', 0), true);
  strictEqual((0, _startsWith.startsWith)('HELLO', 'HELL', 0), true);
  strictEqual((0, _startsWith.startsWith)('HELLO', 'hell', 0), false);
  strictEqual((0, _startsWith.startsWith)('HELLO', 'hell', 0), false);
  strictEqual((0, _startsWith.startsWith)('HELLO'), false);
  strictEqual((0, _startsWith.startsWith)('undefined'), true);
  strictEqual((0, _startsWith.startsWith)('null', null), true);
  strictEqual((0, _startsWith.startsWith)('hello', 'hell', -20), true);
  strictEqual((0, _startsWith.startsWith)('hello', 'hell', 1), false);
  strictEqual((0, _startsWith.startsWith)('hello', 'hell', 2), false);
  strictEqual((0, _startsWith.startsWith)('hello', 'hell', 3), false);
  strictEqual((0, _startsWith.startsWith)('hello', 'hell', 4), false);
  strictEqual((0, _startsWith.startsWith)('hello', 'hell', 5), false);
  strictEqual((0, _startsWith.startsWith)('hello', 'hell', 20), false);
});