import ext_assert from "assert";
import { pred as pred_pred } from "../pred";
var equal = ext_assert.equal;
var deepEqual = ext_assert.deepEqual;


test('#pred', function(){
  equal(pred_pred('b'), 'a');
  equal(pred_pred('B'), 'A');
  equal(pred_pred(','), '+');
  equal(pred_pred(2), '1');
  deepEqual(pred_pred().length, 0);
  deepEqual(pred_pred('').length, 0);
  deepEqual(pred_pred(null).length, 0);
  deepEqual(pred_pred(undefined).length, 0);
  deepEqual(pred_pred(), '');
  deepEqual(pred_pred(''), '');
  deepEqual(pred_pred(null), '');
  deepEqual(pred_pred(undefined), '');
});

