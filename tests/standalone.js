import { s as index_sjs } from "../";
import ext_assert_assert from "assert";
var equal = ext_assert_assert.equal;
var deepEqual = ext_assert_assert.deepEqual;
var strictEqual = ext_assert_assert.strictEqual;


test('provides standalone functions via the s global', function() {
  equal(typeof index_sjs.trim, 'function');
});

test('has standalone chaining', function() {
  var res = index_sjs('  foo  ').trim().capitalize().value();
  equal(res, 'Foo');
});

test('chaining supports tapping', function() {
  var res = index_sjs('foo').tap(function(value) {
    return 'BAR' + value + 'BAR';
  }).value();
  equal(res, 'BARfooBAR');
});

test('tap breaks the chain if the return value is not a string', function() {
  var res = index_sjs('foo').tap(function(value) {
    return value === 'foo';
  });

  strictEqual(res, true);
});

test('chain objects are immutable', function() {
  var chain = index_sjs('foo');
  chain.capitalize();
  equal(chain.value(), 'foo');
});

test('methods returning non-string values stops the chain', function() {
  strictEqual(index_sjs('foobar').startsWith('foo'), true);
  strictEqual(index_sjs('foobar').endsWith('foo'), false);
  deepEqual(index_sjs('hello\nworld').lines(), ['hello', 'world']);
});

test('prototype methods are available in the chain', function() {
  var chain = index_sjs('foo');
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
  equal(index_sjs('foo').toUpperCase().value(), 'FOO');
});

test('PROTOTYPE: toLowerCase', function() {
  equal(index_sjs('BAR').toLowerCase().value(), 'bar');
});

test('PROTOTYPE: split', function() {
  deepEqual(index_sjs('foo bar').split(' '), ['foo', 'bar']);
});

test('PROTOTYPE: replace', function() {
  equal(index_sjs('faa').replace('a', 'o').value(), 'foa');
});

test('PROTOTYPE: slice', function() {
  equal(index_sjs('#anchor').slice(1).value(), 'anchor');
});

test('PROTOTYPE: substring', function() {
  equal(index_sjs('foobar').substring(0, 3).value(), 'foo');
});

test('PROTOTYPE: substring', function() {
  equal(index_sjs('foobar!').substr(3, 3).value(), 'bar');
});

test('PROTOTYPE: concat', function() {
  equal(index_sjs('foo').concat('bar').value(), 'foobar');
});

test('PROTOTYPE: can combine methods', function() {
  equal(
    index_sjs('  foo  bar').toUpperCase().concat('   BAZ').clean().value(),
    'FOO BAR BAZ'
  );
});
