import ext_assert from "assert";
import { rpad as rpad_rpad } from "../rpad";
var equal = ext_assert.equal;


test('#rpad', function() {
  equal(rpad_rpad('1', 8), '1       ');
  equal(rpad_rpad(1, 8), '1       ');
  equal(rpad_rpad('1', 8, '0'), '10000000');
  equal(rpad_rpad('foo', 8, '0'), 'foo00000');
  equal(rpad_rpad('foo', 7, '0'), 'foo0000');
  equal(rpad_rpad('', 2), '  ');
  equal(rpad_rpad(null, 2), '  ');
  equal(rpad_rpad(undefined, 2), '  ');
});

