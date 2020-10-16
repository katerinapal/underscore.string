import ext_assert_assert from "assert";
import { strRightBackjs as strRightBack_strRightBackjsjs } from "../strRightBack";
var equal = ext_assert_assert.equal;


test('#strRightBack', function() {
  equal(strRightBack_strRightBackjsjs('This_is_a_test_string', '_'), 'string');
  equal(strRightBack_strRightBackjsjs('This_is_a_test_string', 'string'), '');
  equal(strRightBack_strRightBackjsjs('This_is_a_test_string'), 'This_is_a_test_string');
  equal(strRightBack_strRightBackjsjs('This_is_a_test_string', ''), 'This_is_a_test_string');
  equal(strRightBack_strRightBackjsjs('This_is_a_test_string', '-'), 'This_is_a_test_string');
  equal(strRightBack_strRightBackjsjs('', 'foo'), '');
  equal(strRightBack_strRightBackjsjs(null, 'foo'), '');
  equal(strRightBack_strRightBackjsjs(undefined, 'foo'), '');
  equal(strRightBack_strRightBackjsjs(12345, 2), '345');
});

