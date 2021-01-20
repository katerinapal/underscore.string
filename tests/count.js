import ext_assert from "assert";
import { count as count_count } from "../count";
var equal = ext_assert.equal;


test('#count', function(){
  equal(count_count('Hello world', 'l'), 3);
  equal(count_count('Hello world', 'Hello'), 1);
  equal(count_count('Hello world', 'foo'), 0);
  equal(count_count('x.xx....x.x', 'x'), 5);
  equal(count_count('', 'x'), 0);
  equal(count_count(null, 'x'), 0);
  equal(count_count(undefined, 'x'), 0);
  equal(count_count(12345, 1), 1);
  equal(count_count(11345, 1), 2);
  equal(count_count('Hello World', ''), 0);
  equal(count_count('Hello World', null), 0);
  equal(count_count('Hello World', undefined), 0);
  equal(count_count('', ''), 0);
  equal(count_count(null, null), 0);
  equal(count_count(undefined, undefined), 0);
});

