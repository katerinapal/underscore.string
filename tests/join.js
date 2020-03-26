import assert_assert from "assert";
import { joinjs as join_joinjsjs } from "../join";
var equal = assert_assert.equal;


test('#join', function() {
  equal(join_joinjsjs('', 'foo', 'bar'), 'foobar', 'basic join');
  equal(join_joinjsjs('', 1, 'foo', 2), '1foo2', 'join numbers and strings');
  equal(join_joinjsjs(' ','foo', 'bar'), 'foo bar', 'join with spaces');
  equal(join_joinjsjs('1', '2', '2'), '212', 'join number strings');
  equal(join_joinjsjs(1, 2, 2), '212', 'join numbers');
  equal(join_joinjsjs('','foo', null), 'foo', 'join null with string returns string');
  equal(join_joinjsjs(null,'foo', 'bar'), 'foobar', 'join strings with null returns string');
  equal(join_joinjsjs(1, 2, 3, 4), '21314');
  equal(join_joinjsjs('|', 'foo', 'bar', 'baz'), 'foo|bar|baz');
  equal(join_joinjsjs('',2,3,null), '23');
  equal(join_joinjsjs(null,2,3), '23');
});

