import ext_assert_assert from "assert";
import { cleanjs as clean_cleanjsjs } from "../clean";
var equal = ext_assert_assert.equal;


test('#clean', function() {
  equal(clean_cleanjsjs(' foo    bar   '), 'foo bar');
  equal(clean_cleanjsjs(123), '123');
  equal(clean_cleanjsjs(''), '', 'claning empty string returns empty string');
  equal(clean_cleanjsjs(null), '', 'claning null returns empty string');
  equal(clean_cleanjsjs(undefined), '', 'claning undefined returns empty string');
});
