import ext_assert from "assert";
import { replaceAll as replaceAll_replaceAll } from "../replaceAll";
var equal = ext_assert.equal;


test('#replaceAll', function(){
  equal(replaceAll_replaceAll('a', 'a', 'b'), 'b');
  equal(replaceAll_replaceAll('aa', 'a', 'b'), 'bb');
  equal(replaceAll_replaceAll('aca', 'a', 'b'), 'bcb');
  equal(replaceAll_replaceAll('ccc', 'a', 'b'), 'ccc');
  equal(replaceAll_replaceAll('AAa', 'a', 'b'), 'AAb');
  equal(replaceAll_replaceAll('Aa', 'a', 'b', true), 'bb');
  equal(replaceAll_replaceAll('foo bar foo', 'foo', 'moo'), 'moo bar moo');
  equal(replaceAll_replaceAll('foo bar\n foo', 'foo', 'moo'), 'moo bar\n moo');
  equal(replaceAll_replaceAll('foo bar FoO', 'foo', 'moo', true), 'moo bar moo');
  equal(replaceAll_replaceAll('', 'a', 'b'), '');
  equal(replaceAll_replaceAll(null, 'a', 'b'), '');
  equal(replaceAll_replaceAll(undefined, 'a', 'b'), '');
  equal(replaceAll_replaceAll(12345, 'a', 'b'), 12345);
});

