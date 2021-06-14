import ext_assert from "assert";
import { strRight as strRight_strRight } from "../strRight";
var equal = ext_assert.equal;


test('#strRight', function() {
  equal(strRight_strRight('This_is_a_test_string', '_'), 'is_a_test_string');
  equal(strRight_strRight('This_is_a_test_string', 'string'), '');
  equal(strRight_strRight('This_is_a_test_string'), 'This_is_a_test_string');
  equal(strRight_strRight('This_is_a_test_string', ''), 'This_is_a_test_string');
  equal(strRight_strRight('This_is_a_test_string', '-'), 'This_is_a_test_string');
  equal(strRight_strRight('This_is_a_test_string', ''), 'This_is_a_test_string');
  equal(strRight_strRight('', 'foo'), '');
  equal(strRight_strRight(null, 'foo'), '');
  equal(strRight_strRight(undefined, 'foo'), '');
  equal(strRight_strRight(12345, 2), '345');
});

