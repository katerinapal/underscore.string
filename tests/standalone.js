import { s as _sjs } from "../";
import assert_assert from "assert";
var equal = assert_assert.equal;
var deepEqual = assert_assert.deepEqual;
var strictEqual = assert_assert.strictEqual;


test('provides standalone functions via the s global', function() {
  equal(typeof _sjs.trim, 'function');
});

test('has standalone chaining', function() {
  var res = _sjs('  foo  ').trim().capitalize().value();
  equal(res, 'Foo');
});

test('chaining supports tapping', function() {
  var res = _sjs('foo').tap(function(value) {
    return 'BAR' + value + 'BAR';
  }).value();
  equal(res, 'BARfooBAR');
});

test('tap breaks the chain if the return value is not a string', function() {
  var res = _sjs('foo').tap(function(value) {
    return value === 'foo';
  });

  strictEqual(res, true);
});

test('chain objects are immutable', function() {
  var chain = _sjs('foo');
  chain.capitalize();
  equal(chain.value(), 'foo');
});

test('methods returning non-string values stops the chain', function() {
  strictEqual(_sjs('foobar').startsWith('foo'), true);
  strictEqual(_sjs('foobar').endsWith('foo'), false);
  deepEqual(_sjs('hello\nworld').lines(), ['hello', 'world']);
});

test('prototype methods are available in the chain', function() {
  var chain = _sjs('foo');
  [
    'toUpperCase',
    'toLowerCase',
    'split',
    'replace',
    'slice',
    'substring',
    'substr',
    'concat'
  ].forEach(function(method) {
    equal(typeof chain[method], 'function', 'has method: ' + method);
  });

});

test('PROTOTYPE: toUpperCase', function() {
  equal(_sjs('foo').toUpperCase().value(), 'FOO');
});

test('PROTOTYPE: toLowerCase', function() {
  equal(_sjs('BAR').toLowerCase().value(), 'bar');
});

test('PROTOTYPE: split', function() {
  deepEqual(_sjs('foo bar').split(' '), ['foo', 'bar']);
});

test('PROTOTYPE: replace', function() {
  equal(_sjs('faa').replace('a', 'o').value(), 'foa');
});

test('PROTOTYPE: slice', function() {
  equal(_sjs('#anchor').slice(1).value(), 'anchor');
});

test('PROTOTYPE: substring', function() {
  equal(_sjs('foobar').substring(0, 3).value(), 'foo');
});

test('PROTOTYPE: substring', function() {
  equal(_sjs('foobar!').substr(3, 3).value(), 'bar');
});

test('PROTOTYPE: concat', function() {
  equal(_sjs('foo').concat('bar').value(), 'foobar');
});

test('PROTOTYPE: can combine methods', function() {
  equal(
    _sjs('  foo  bar').toUpperCase().concat('   BAZ').clean().value(),
    'FOO BAR BAZ'
  );
});
