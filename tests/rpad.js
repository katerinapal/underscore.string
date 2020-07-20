import ext_assert_assert from "assert";
import { rpadjs as rpad_rpadjsjs } from "../rpad";
var equal = ext_assert_assert.equal;


test('#rpad', function() {
  equal(rpad_rpadjsjs('1', 8), '1       ');
  equal(rpad_rpadjsjs(1, 8), '1       ');
  equal(rpad_rpadjsjs('1', 8, '0'), '10000000');
  equal(rpad_rpadjsjs('foo', 8, '0'), 'foo00000');
  equal(rpad_rpadjsjs('foo', 7, '0'), 'foo0000');
  equal(rpad_rpadjsjs('', 2), '  ');
  equal(rpad_rpadjsjs(null, 2), '  ');
  equal(rpad_rpadjsjs(undefined, 2), '  ');
});

