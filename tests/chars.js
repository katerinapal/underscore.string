import assert_assert from "assert";
import { charsjs as chars_charsjsjs } from "../chars";
var equal = assert_assert.equal;


test('#chars', function() {
  equal(chars_charsjsjs('Hello').length, 5);
  equal(chars_charsjsjs(123).length, 3);
  equal(chars_charsjsjs('').length, 0);
  equal(chars_charsjsjs(null).length, 0);
  equal(chars_charsjsjs(undefined).length, 0);
});

