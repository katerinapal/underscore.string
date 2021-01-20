import ext_assert from "assert";
import { clean as clean_clean } from "../clean";
var equal = ext_assert.equal;


test('#clean', function() {
  equal(clean_clean(' foo    bar   '), 'foo bar');
  equal(clean_clean(123), '123');
  equal(clean_clean(''), '', 'claning empty string returns empty string');
  equal(clean_clean(null), '', 'claning null returns empty string');
  equal(clean_clean(undefined), '', 'claning undefined returns empty string');
});
