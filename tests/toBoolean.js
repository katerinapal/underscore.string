"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _toBoolean = require("../toBoolean");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var strictEqual = _assert2.default.strictEqual;

test('#toBoolean', function () {
  strictEqual((0, _toBoolean.toBoolean)('false'), false);
  strictEqual((0, _toBoolean.toBoolean)('false'), false);
  strictEqual((0, _toBoolean.toBoolean)('False'), false);
  strictEqual((0, _toBoolean.toBoolean)('Falsy', null, ['false', 'falsy']), false);
  strictEqual((0, _toBoolean.toBoolean)('true'), true);
  strictEqual((0, _toBoolean.toBoolean)('the truth', 'the truth', 'this is falsy'), true);
  strictEqual((0, _toBoolean.toBoolean)('this is falsy', 'the truth', 'this is falsy'), false);
  strictEqual((0, _toBoolean.toBoolean)('true'), true);
  strictEqual((0, _toBoolean.toBoolean)('trUe'), true);
  strictEqual((0, _toBoolean.toBoolean)('trUe', /tru?/i), true);
  strictEqual((0, _toBoolean.toBoolean)('something else'), undefined);
  strictEqual((0, _toBoolean.toBoolean)(function () {}), true);
  strictEqual((0, _toBoolean.toBoolean)(/regexp/), true);
  strictEqual((0, _toBoolean.toBoolean)(''), undefined);
  strictEqual((0, _toBoolean.toBoolean)(0), false);
  strictEqual((0, _toBoolean.toBoolean)(1), true);
  strictEqual((0, _toBoolean.toBoolean)('1'), true);
  strictEqual((0, _toBoolean.toBoolean)('0'), false);
  strictEqual((0, _toBoolean.toBoolean)(2), undefined);
  strictEqual((0, _toBoolean.toBoolean)('foo true bar'), undefined);
  strictEqual((0, _toBoolean.toBoolean)('foo true bar', /true/), true);
  strictEqual((0, _toBoolean.toBoolean)('foo FALSE bar', null, /FALSE/), false);
  strictEqual((0, _toBoolean.toBoolean)(' true  '), true);
});