import ext_assert from "assert";
import { strLeftBack as strLeftBack_strLeftBack } from "../strLeftBack";
var equal = ext_assert.equal;


test('#strLeftBack', function() {
  equal(strLeftBack_strLeftBack('This_is_a_test_string', '_'), 'This_is_a_test');
  equal(strLeftBack_strLeftBack('This_is_a_test_string', 'This'), '');
  equal(strLeftBack_strLeftBack('This_is_a_test_string'), 'This_is_a_test_string');
  equal(strLeftBack_strLeftBack('This_is_a_test_string', ''), 'This_is_a_test_string');
  equal(strLeftBack_strLeftBack('This_is_a_test_string', '-'), 'This_is_a_test_string');
  equal(strLeftBack_strLeftBack('', 'foo'), '');
  equal(strLeftBack_strLeftBack(null, 'foo'), '');
  equal(strLeftBack_strLeftBack(undefined, 'foo'), '');
  equal(strLeftBack_strLeftBack(123454321, 3), '123454');
});

