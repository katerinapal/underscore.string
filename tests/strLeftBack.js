import ext_assert_assert from "assert";
import { strLeftBackjs as strLeftBack_strLeftBackjsjs } from "../strLeftBack";
var equal = ext_assert_assert.equal;


test('#strLeftBack', function() {
  equal(strLeftBack_strLeftBackjsjs('This_is_a_test_string', '_'), 'This_is_a_test');
  equal(strLeftBack_strLeftBackjsjs('This_is_a_test_string', 'This'), '');
  equal(strLeftBack_strLeftBackjsjs('This_is_a_test_string'), 'This_is_a_test_string');
  equal(strLeftBack_strLeftBackjsjs('This_is_a_test_string', ''), 'This_is_a_test_string');
  equal(strLeftBack_strLeftBackjsjs('This_is_a_test_string', '-'), 'This_is_a_test_string');
  equal(strLeftBack_strLeftBackjsjs('', 'foo'), '');
  equal(strLeftBack_strLeftBackjsjs(null, 'foo'), '');
  equal(strLeftBack_strLeftBackjsjs(undefined, 'foo'), '');
  equal(strLeftBack_strLeftBackjsjs(123454321, 3), '123454');
});

