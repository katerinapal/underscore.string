import ext_assert from "assert";
import { strRightBack as strRightBack_strRightBack } from "../strRightBack";
var equal = ext_assert.equal;


test('#strRightBack', function() {
  equal(strRightBack_strRightBack('This_is_a_test_string', '_'), 'string');
  equal(strRightBack_strRightBack('This_is_a_test_string', 'string'), '');
  equal(strRightBack_strRightBack('This_is_a_test_string'), 'This_is_a_test_string');
  equal(strRightBack_strRightBack('This_is_a_test_string', ''), 'This_is_a_test_string');
  equal(strRightBack_strRightBack('This_is_a_test_string', '-'), 'This_is_a_test_string');
  equal(strRightBack_strRightBack('', 'foo'), '');
  equal(strRightBack_strRightBack(null, 'foo'), '');
  equal(strRightBack_strRightBack(undefined, 'foo'), '');
  equal(strRightBack_strRightBack(12345, 2), '345');
});

