import ext_assert from "assert";
import { chars as chars_chars } from "../chars";
var equal = ext_assert.equal;


test('#chars', function() {
  equal(chars_chars('Hello').length, 5);
  equal(chars_chars(123).length, 3);
  equal(chars_chars('').length, 0);
  equal(chars_chars(null).length, 0);
  equal(chars_chars(undefined).length, 0);
});

