import assert_assert from "assert";
import { predjs as pred_predjsjs } from "../pred";
var equal = assert_assert.equal;
var deepEqual = assert_assert.deepEqual;


test('#pred', function(){
  equal(pred_predjsjs('b'), 'a');
  equal(pred_predjsjs('B'), 'A');
  equal(pred_predjsjs(','), '+');
  equal(pred_predjsjs(2), '1');
  deepEqual(pred_predjsjs().length, 0);
  deepEqual(pred_predjsjs('').length, 0);
  deepEqual(pred_predjsjs(null).length, 0);
  deepEqual(pred_predjsjs(undefined).length, 0);
  deepEqual(pred_predjsjs(), '');
  deepEqual(pred_predjsjs(''), '');
  deepEqual(pred_predjsjs(null), '');
  deepEqual(pred_predjsjs(undefined), '');
});

