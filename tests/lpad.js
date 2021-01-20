import ext_assert from "assert";
import { lpad as lpad_lpad } from "../lpad";
var equal = ext_assert.equal;


test('#lpad', function() {
  equal(lpad_lpad('1', 8), '       1');
  equal(lpad_lpad(1, 8), '       1');
  equal(lpad_lpad('1', 8, '0'), '00000001');
  equal(lpad_lpad('1', 8, '0', 'left'), '00000001');
  equal(lpad_lpad('', 2), '  ');
  equal(lpad_lpad(null, 2), '  ');
  equal(lpad_lpad(undefined, 2), '  ');
});

