import assert_assert from "assert";
import { surroundjs as surround_surroundjsjs } from "../surround";
var equal = assert_assert.equal;


test('#surround', function(){
  equal(surround_surroundjsjs('foo', 'ab'), 'abfooab');
  equal(surround_surroundjsjs(1, 'ab'), 'ab1ab');
  equal(surround_surroundjsjs(1, 2), '212');
  equal(surround_surroundjsjs('foo', 1), '1foo1');
  equal(surround_surroundjsjs('', 1), '11');
  equal(surround_surroundjsjs(null, 1), '11');
  equal(surround_surroundjsjs('foo', ''), 'foo');
  equal(surround_surroundjsjs('foo', null), 'foo');
});

