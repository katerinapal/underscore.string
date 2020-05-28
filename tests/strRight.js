import ext_assert_assert from "assert";
import { strRightjs as strRight_strRightjsjs } from "../strRight";
var equal = ext_assert_assert.equal;


test('#strRight', function() {
  equal(strRight_strRightjsjs('This_is_a_test_string', '_'), 'is_a_test_string');
  equal(strRight_strRightjsjs('This_is_a_test_string', 'string'), '');
  equal(strRight_strRightjsjs('This_is_a_test_string'), 'This_is_a_test_string');
  equal(strRight_strRightjsjs('This_is_a_test_string', ''), 'This_is_a_test_string');
  equal(strRight_strRightjsjs('This_is_a_test_string', '-'), 'This_is_a_test_string');
  equal(strRight_strRightjsjs('This_is_a_test_string', ''), 'This_is_a_test_string');
  equal(strRight_strRightjsjs('', 'foo'), '');
  equal(strRight_strRightjsjs(null, 'foo'), '');
  equal(strRight_strRightjsjs(undefined, 'foo'), '');
  equal(strRight_strRightjsjs(12345, 2), '345');
});

