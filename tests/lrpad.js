import assert_assert from "assert";
import { lrpadjs as lrpad_lrpadjsjs } from "../lrpad";
var equal = assert_assert.equal;


test('#lrpad', function() {
  equal(lrpad_lrpadjsjs('1', 8), '    1   ');
  equal(lrpad_lrpadjsjs(1, 8), '    1   ');
  equal(lrpad_lrpadjsjs('1', 8, '0'), '00001000');
  equal(lrpad_lrpadjsjs('foo', 8, '0'), '000foo00');
  equal(lrpad_lrpadjsjs('foo', 7, '0'), '00foo00');
  equal(lrpad_lrpadjsjs('foo', 7, '!@$%dofjrofj'), '!!foo!!');
  equal(lrpad_lrpadjsjs('', 2), '  ');
  equal(lrpad_lrpadjsjs(null, 2), '  ');
  equal(lrpad_lrpadjsjs(undefined, 2), '  ');
});

