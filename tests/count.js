import assert_assert from "assert";
import { countjs as count_countjsjs } from "../count";
var equal = assert_assert.equal;


test('#count', function(){
  equal(count_countjsjs('Hello world', 'l'), 3);
  equal(count_countjsjs('Hello world', 'Hello'), 1);
  equal(count_countjsjs('Hello world', 'foo'), 0);
  equal(count_countjsjs('x.xx....x.x', 'x'), 5);
  equal(count_countjsjs('', 'x'), 0);
  equal(count_countjsjs(null, 'x'), 0);
  equal(count_countjsjs(undefined, 'x'), 0);
  equal(count_countjsjs(12345, 1), 1);
  equal(count_countjsjs(11345, 1), 2);
  equal(count_countjsjs('Hello World', ''), 0);
  equal(count_countjsjs('Hello World', null), 0);
  equal(count_countjsjs('Hello World', undefined), 0);
  equal(count_countjsjs('', ''), 0);
  equal(count_countjsjs(null, null), 0);
  equal(count_countjsjs(undefined, undefined), 0);
});

