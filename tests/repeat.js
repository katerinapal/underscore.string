import ext_assert_assert from "assert";
import { repeatjs as repeat_repeatjsjs } from "../repeat";
var equal = ext_assert_assert.equal;


test('#repeat', function() {
  equal(repeat_repeatjsjs('foo'), '');
  equal(repeat_repeatjsjs('foo', 3), 'foofoofoo');
  equal(repeat_repeatjsjs('foo', '3'), 'foofoofoo');
  equal(repeat_repeatjsjs(123, 2), '123123');
  equal(repeat_repeatjsjs(1234, 2, '*'), '1234*1234');
  equal(repeat_repeatjsjs(1234, 2, 5), '123451234');
  equal(repeat_repeatjsjs('', 2), '');
  equal(repeat_repeatjsjs(null, 2), '');
  equal(repeat_repeatjsjs(undefined, 2), '');
});

