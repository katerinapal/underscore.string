import ext_assert from "assert";
import { repeat as repeat_repeat } from "../repeat";
var equal = ext_assert.equal;


test('#repeat', function() {
  equal(repeat_repeat('foo'), '');
  equal(repeat_repeat('foo', 3), 'foofoofoo');
  equal(repeat_repeat('foo', '3'), 'foofoofoo');
  equal(repeat_repeat(123, 2), '123123');
  equal(repeat_repeat(1234, 2, '*'), '1234*1234');
  equal(repeat_repeat(1234, 2, 5), '123451234');
  equal(repeat_repeat('', 2), '');
  equal(repeat_repeat(null, 2), '');
  equal(repeat_repeat(undefined, 2), '');
});

