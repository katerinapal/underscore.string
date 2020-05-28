import ext_assert_assert from "assert";
import { padjs as pad_padjsjs } from "../pad";
var equal = ext_assert_assert.equal;


test('#pad', function() {
  equal(pad_padjsjs('1', 8), '       1');
  equal(pad_padjsjs(1, 8), '       1');
  equal(pad_padjsjs('1', 8, '0'), '00000001');
  equal(pad_padjsjs('1', 8, '0', 'left'), '00000001');
  equal(pad_padjsjs('1', 8, '0', 'right'), '10000000');
  equal(pad_padjsjs('1', 8, '0', 'both'), '00001000');
  equal(pad_padjsjs('foo', 8, '0', 'both'), '000foo00');
  equal(pad_padjsjs('foo', 7, '0', 'both'), '00foo00');
  equal(pad_padjsjs('foo', 7, '!@$%dofjrofj', 'both'), '!!foo!!');
  equal(pad_padjsjs('', 2), '  ');
  equal(pad_padjsjs(null, 2), '  ');
  equal(pad_padjsjs(undefined, 2), '  ');
});

