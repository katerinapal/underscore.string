"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _ = require("../");

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;
var deepEqual = _assert2.default.deepEqual;
var strictEqual = _assert2.default.strictEqual;

test('provides standalone functions via the s global', function () {
  equal(_typeof(_.s.trim), 'function');
});

test('has standalone chaining', function () {
  var res = (0, _.s)('  foo  ').trim().capitalize().value();
  equal(res, 'Foo');
});

test('chaining supports tapping', function () {
  var res = (0, _.s)('foo').tap(function (value) {
    return 'BAR' + value + 'BAR';
  }).value();
  equal(res, 'BARfooBAR');
});

test('tap breaks the chain if the return value is not a string', function () {
  var res = (0, _.s)('foo').tap(function (value) {
    return value === 'foo';
  });

  strictEqual(res, true);
});

test('chain objects are immutable', function () {
  var chain = (0, _.s)('foo');
  chain.capitalize();
  equal(chain.value(), 'foo');
});

test('methods returning non-string values stops the chain', function () {
  strictEqual((0, _.s)('foobar').startsWith('foo'), true);
  strictEqual((0, _.s)('foobar').endsWith('foo'), false);
  deepEqual((0, _.s)('hello\nworld').lines(), ['hello', 'world']);
});

test('prototype methods are available in the chain', function () {
  var chain = (0, _.s)('foo');
  ['toUpperCase', 'toLowerCase', 'split', 'replace', 'slice', 'substring', 'substr', 'concat'].forEach(function (method) {
    equal(_typeof(chain[method]), 'function', 'has method: ' + method);
  });
});

test('PROTOTYPE: toUpperCase', function () {
  equal((0, _.s)('foo').toUpperCase().value(), 'FOO');
});

test('PROTOTYPE: toLowerCase', function () {
  equal((0, _.s)('BAR').toLowerCase().value(), 'bar');
});

test('PROTOTYPE: split', function () {
  deepEqual((0, _.s)('foo bar').split(' '), ['foo', 'bar']);
});

test('PROTOTYPE: replace', function () {
  equal((0, _.s)('faa').replace('a', 'o').value(), 'foa');
});

test('PROTOTYPE: slice', function () {
  equal((0, _.s)('#anchor').slice(1).value(), 'anchor');
});

test('PROTOTYPE: substring', function () {
  equal((0, _.s)('foobar').substring(0, 3).value(), 'foo');
});

test('PROTOTYPE: substring', function () {
  equal((0, _.s)('foobar!').substr(3, 3).value(), 'bar');
});

test('PROTOTYPE: concat', function () {
  equal((0, _.s)('foo').concat('bar').value(), 'foobar');
});

test('PROTOTYPE: can combine methods', function () {
  equal((0, _.s)('  foo  bar').toUpperCase().concat('   BAZ').clean().value(), 'FOO BAR BAZ');
});
