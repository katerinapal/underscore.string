import ext_assert from "assert";
import { join as join_join } from "../join";
var equal = ext_assert.equal;


test('#join', function() {
  equal(join_join('', 'foo', 'bar'), 'foobar', 'basic join');
  equal(join_join('', 1, 'foo', 2), '1foo2', 'join numbers and strings');
  equal(join_join(' ','foo', 'bar'), 'foo bar', 'join with spaces');
  equal(join_join('1', '2', '2'), '212', 'join number strings');
  equal(join_join(1, 2, 2), '212', 'join numbers');
  equal(join_join('','foo', null), 'foo', 'join null with string returns string');
  equal(join_join(null,'foo', 'bar'), 'foobar', 'join strings with null returns string');
  equal(join_join(1, 2, 3, 4), '21314');
  equal(join_join('|', 'foo', 'bar', 'baz'), 'foo|bar|baz');
  equal(join_join('',2,3,null), '23');
  equal(join_join(null,2,3), '23');
});

