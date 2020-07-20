import ext_assert_assert from "assert";
import { lpadjs as lpad_lpadjsjs } from "../lpad";
var equal = ext_assert_assert.equal;


test('#lpad', function() {
  equal(lpad_lpadjsjs('1', 8), '       1');
  equal(lpad_lpadjsjs(1, 8), '       1');
  equal(lpad_lpadjsjs('1', 8, '0'), '00000001');
  equal(lpad_lpadjsjs('1', 8, '0', 'left'), '00000001');
  equal(lpad_lpadjsjs('', 2), '  ');
  equal(lpad_lpadjsjs(null, 2), '  ');
  equal(lpad_lpadjsjs(undefined, 2), '  ');
});

