import assert_assert from "assert";
import { succjs as succ_succjsjs } from "../succ";
var equal = assert_assert.equal;
var deepEqual = assert_assert.deepEqual;


test('#succ', function(){
  equal(succ_succjsjs('a'), 'b');
  equal(succ_succjsjs('A'), 'B');
  equal(succ_succjsjs('+'), ',');
  equal(succ_succjsjs(1), '2');
  deepEqual(succ_succjsjs().length, 0);
  deepEqual(succ_succjsjs('').length, 0);
  deepEqual(succ_succjsjs(null).length, 0);
  deepEqual(succ_succjsjs(undefined).length, 0);
  deepEqual(succ_succjsjs(), '');
  deepEqual(succ_succjsjs(''), '');
  deepEqual(succ_succjsjs(null), '');
  deepEqual(succ_succjsjs(undefined), '');
});

