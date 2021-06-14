import ext_assert from "assert";
import { succ as succ_succ } from "../succ";
var equal = ext_assert.equal;
var deepEqual = ext_assert.deepEqual;


test('#succ', function(){
  equal(succ_succ('a'), 'b');
  equal(succ_succ('A'), 'B');
  equal(succ_succ('+'), ',');
  equal(succ_succ(1), '2');
  deepEqual(succ_succ().length, 0);
  deepEqual(succ_succ('').length, 0);
  deepEqual(succ_succ(null).length, 0);
  deepEqual(succ_succ(undefined).length, 0);
  deepEqual(succ_succ(), '');
  deepEqual(succ_succ(''), '');
  deepEqual(succ_succ(null), '');
  deepEqual(succ_succ(undefined), '');
});

