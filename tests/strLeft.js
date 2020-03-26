import assert_assert from "assert";
import { strLeftjs as strLeft_strLeftjsjs } from "../strLeft";
var equal = assert_assert.equal;


test('#strLeft', function() {
  equal(strLeft_strLeftjsjs('This_is_a_test_string', '_'), 'This');
  equal(strLeft_strLeftjsjs('This_is_a_test_string', 'This'), '');
  equal(strLeft_strLeftjsjs('This_is_a_test_string'), 'This_is_a_test_string');
  equal(strLeft_strLeftjsjs('This_is_a_test_string', ''), 'This_is_a_test_string');
  equal(strLeft_strLeftjsjs('This_is_a_test_string', '-'), 'This_is_a_test_string');
  equal(strLeft_strLeftjsjs('', 'foo'), '');
  equal(strLeft_strLeftjsjs(null, 'foo'), '');
  equal(strLeft_strLeftjsjs(undefined, 'foo'), '');
  equal(strLeft_strLeftjsjs(123454321, 3), '12');
});

