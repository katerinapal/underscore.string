import ext_assert from "assert";
import { surround as surround_surround } from "../surround";
var equal = ext_assert.equal;


test('#surround', function(){
  equal(surround_surround('foo', 'ab'), 'abfooab');
  equal(surround_surround(1, 'ab'), 'ab1ab');
  equal(surround_surround(1, 2), '212');
  equal(surround_surround('foo', 1), '1foo1');
  equal(surround_surround('', 1), '11');
  equal(surround_surround(null, 1), '11');
  equal(surround_surround('foo', ''), 'foo');
  equal(surround_surround('foo', null), 'foo');
});

