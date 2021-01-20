import ext_assert from "assert";
import { pad as pad_pad } from "../pad";
var equal = ext_assert.equal;


test('#pad', function() {
  equal(pad_pad('1', 8), '       1');
  equal(pad_pad(1, 8), '       1');
  equal(pad_pad('1', 8, '0'), '00000001');
  equal(pad_pad('1', 8, '0', 'left'), '00000001');
  equal(pad_pad('1', 8, '0', 'right'), '10000000');
  equal(pad_pad('1', 8, '0', 'both'), '00001000');
  equal(pad_pad('foo', 8, '0', 'both'), '000foo00');
  equal(pad_pad('foo', 7, '0', 'both'), '00foo00');
  equal(pad_pad('foo', 7, '!@$%dofjrofj', 'both'), '!!foo!!');
  equal(pad_pad('', 2), '  ');
  equal(pad_pad(null, 2), '  ');
  equal(pad_pad(undefined, 2), '  ');
});

