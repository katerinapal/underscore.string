import ext_assert from "assert";
import { lrpad as lrpad_lrpad } from "../lrpad";
var equal = ext_assert.equal;


test('#lrpad', function() {
  equal(lrpad_lrpad('1', 8), '    1   ');
  equal(lrpad_lrpad(1, 8), '    1   ');
  equal(lrpad_lrpad('1', 8, '0'), '00001000');
  equal(lrpad_lrpad('foo', 8, '0'), '000foo00');
  equal(lrpad_lrpad('foo', 7, '0'), '00foo00');
  equal(lrpad_lrpad('foo', 7, '!@$%dofjrofj'), '!!foo!!');
  equal(lrpad_lrpad('', 2), '  ');
  equal(lrpad_lrpad(null, 2), '  ');
  equal(lrpad_lrpad(undefined, 2), '  ');
});

