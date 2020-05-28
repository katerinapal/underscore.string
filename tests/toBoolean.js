"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _toBoolean = require("../toBoolean");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var strictEqual = _assert2.default.strictEqual;

test('#toBoolean', function () {
  strictEqual((0, _toBoolean.toBooleanjs)('false'), false);
  strictEqual((0, _toBoolean.toBooleanjs)('false'), false);
  strictEqual((0, _toBoolean.toBooleanjs)('False'), false);
  strictEqual((0, _toBoolean.toBooleanjs)('Falsy', null, ['false', 'falsy']), false);
  strictEqual((0, _toBoolean.toBooleanjs)('true'), true);
  strictEqual((0, _toBoolean.toBooleanjs)('the truth', 'the truth', 'this is falsy'), true);
  strictEqual((0, _toBoolean.toBooleanjs)('this is falsy', 'the truth', 'this is falsy'), false);
  strictEqual((0, _toBoolean.toBooleanjs)('true'), true);
  strictEqual((0, _toBoolean.toBooleanjs)('trUe'), true);
  strictEqual((0, _toBoolean.toBooleanjs)('trUe', /tru?/i), true);
  strictEqual((0, _toBoolean.toBooleanjs)('something else'), undefined);
  strictEqual((0, _toBoolean.toBooleanjs)(function () {}), true);
  strictEqual((0, _toBoolean.toBooleanjs)(/regexp/), true);
  strictEqual((0, _toBoolean.toBooleanjs)(''), undefined);
  strictEqual((0, _toBoolean.toBooleanjs)(0), false);
  strictEqual((0, _toBoolean.toBooleanjs)(1), true);
  strictEqual((0, _toBoolean.toBooleanjs)('1'), true);
  strictEqual((0, _toBoolean.toBooleanjs)('0'), false);
  strictEqual((0, _toBoolean.toBooleanjs)(2), undefined);
  strictEqual((0, _toBoolean.toBooleanjs)('foo true bar'), undefined);
  strictEqual((0, _toBoolean.toBooleanjs)('foo true bar', /true/), true);
  strictEqual((0, _toBoolean.toBooleanjs)('foo FALSE bar', null, /FALSE/), false);
  strictEqual((0, _toBoolean.toBooleanjs)(' true  '), true);
});