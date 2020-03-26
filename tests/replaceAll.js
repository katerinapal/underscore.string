import assert_assert from "assert";
import { replaceAlljs as replaceAll_replaceAlljsjs } from "../replaceAll";
var equal = assert_assert.equal;


test('#replaceAll', function(){
  equal(replaceAll_replaceAlljsjs('a', 'a', 'b'), 'b');
  equal(replaceAll_replaceAlljsjs('aa', 'a', 'b'), 'bb');
  equal(replaceAll_replaceAlljsjs('aca', 'a', 'b'), 'bcb');
  equal(replaceAll_replaceAlljsjs('ccc', 'a', 'b'), 'ccc');
  equal(replaceAll_replaceAlljsjs('AAa', 'a', 'b'), 'AAb');
  equal(replaceAll_replaceAlljsjs('Aa', 'a', 'b', true), 'bb');
  equal(replaceAll_replaceAlljsjs('foo bar foo', 'foo', 'moo'), 'moo bar moo');
  equal(replaceAll_replaceAlljsjs('foo bar\n foo', 'foo', 'moo'), 'moo bar\n moo');
  equal(replaceAll_replaceAlljsjs('foo bar FoO', 'foo', 'moo', true), 'moo bar moo');
  equal(replaceAll_replaceAlljsjs('', 'a', 'b'), '');
  equal(replaceAll_replaceAlljsjs(null, 'a', 'b'), '');
  equal(replaceAll_replaceAlljsjs(undefined, 'a', 'b'), '');
  equal(replaceAll_replaceAlljsjs(12345, 'a', 'b'), 12345);
});

