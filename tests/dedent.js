"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _dedent = require("../dedent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;
var deepEqual = _assert2.default.deepEqual;

test('#dedent', function () {
  equal((0, _dedent.dedentjs)('Hello\nWorld'), 'Hello\nWorld');
  equal((0, _dedent.dedentjs)('Hello\t\nWorld'), 'Hello\t\nWorld');
  equal((0, _dedent.dedentjs)('Hello \nWorld'), 'Hello \nWorld');
  equal((0, _dedent.dedentjs)('Hello\n  World'), 'Hello\n  World');
  equal((0, _dedent.dedentjs)('    Hello\n  World'), '  Hello\nWorld');
  equal((0, _dedent.dedentjs)('  Hello\nWorld'), '  Hello\nWorld');
  equal((0, _dedent.dedentjs)('  Hello World'), 'Hello World');
  equal((0, _dedent.dedentjs)('  Hello\n  World'), 'Hello\nWorld');
  equal((0, _dedent.dedentjs)('  Hello\n    World'), 'Hello\n  World');
  equal((0, _dedent.dedentjs)('\t\tHello\tWorld'), 'Hello\tWorld');
  equal((0, _dedent.dedentjs)('\t\tHello\n\t\tWorld'), 'Hello\nWorld');
  equal((0, _dedent.dedentjs)('Hello\n\t\tWorld'), 'Hello\n\t\tWorld');
  equal((0, _dedent.dedentjs)('\t\tHello\n\t\t\t\tWorld'), 'Hello\n\t\tWorld');
  equal((0, _dedent.dedentjs)('\t\tHello\r\n\t\t\t\tWorld'), 'Hello\r\n\t\tWorld');
  equal((0, _dedent.dedentjs)('\t\tHello\r\n\r\n\t\t\t\tWorld'), 'Hello\r\n\r\n\t\tWorld');
  equal((0, _dedent.dedentjs)('\t\tHello\n\n\n\n\t\t\t\tWorld'), 'Hello\n\n\n\n\t\tWorld');
  equal((0, _dedent.dedentjs)('\t\t\tHello\n\t\tWorld', '\\t'), '\t\tHello\n\tWorld');
  equal((0, _dedent.dedentjs)('    Hello\n    World', '  '), '  Hello\n  World');
  equal((0, _dedent.dedentjs)('    Hello\n    World', ''), '    Hello\n    World');
  equal((0, _dedent.dedentjs)('\t\tHello\n\n\n\n\t\t\t\tWorld', '\\t'), '\tHello\n\n\n\n\t\t\tWorld');
  equal((0, _dedent.dedentjs)('Hello\n\t\tWorld', '\t'), 'Hello\n\t\tWorld');
  equal((0, _dedent.dedentjs)('Hello\n  World', ' '), 'Hello\n  World');
  equal((0, _dedent.dedentjs)('  Hello\nWorld', ' '), '  Hello\nWorld');
  deepEqual((0, _dedent.dedentjs)(123), '123');
  deepEqual((0, _dedent.dedentjs)(''), '');
  deepEqual((0, _dedent.dedentjs)(null), '');
  deepEqual((0, _dedent.dedentjs)(undefined), '');
});