import ext_assert from "assert";
import { strLeft as strLeft_strLeft } from "../strLeft";
var equal = ext_assert.equal;


test('#strLeft', function() {
  equal(strLeft_strLeft('This_is_a_test_string', '_'), 'This');
  equal(strLeft_strLeft('This_is_a_test_string', 'This'), '');
  equal(strLeft_strLeft('This_is_a_test_string'), 'This_is_a_test_string');
  equal(strLeft_strLeft('This_is_a_test_string', ''), 'This_is_a_test_string');
  equal(strLeft_strLeft('This_is_a_test_string', '-'), 'This_is_a_test_string');
  equal(strLeft_strLeft('', 'foo'), '');
  equal(strLeft_strLeft(null, 'foo'), '');
  equal(strLeft_strLeft(undefined, 'foo'), '');
  equal(strLeft_strLeft(123454321, 3), '12');
});

