import ext_assert from "assert";
import { rtrim as rtrim_rtrim } from "../rtrim";
var equal = ext_assert.equal;

test('#rtrim', function() {
  equal(rtrim_rtrim('http://foo/', '/'), 'http://foo', 'clean trailing slash');
  equal(rtrim_rtrim(' foo'), ' foo');
  equal(rtrim_rtrim('foo '), 'foo');
  equal(rtrim_rtrim('foo     '), 'foo');
  equal(rtrim_rtrim('foo  bar     '), 'foo  bar');
  equal(rtrim_rtrim(' foo '), ' foo');

  equal(rtrim_rtrim('ffoo', 'f'), 'ffoo');
  equal(rtrim_rtrim('ooff', 'f'), 'oo');
  equal(rtrim_rtrim('ffooff', 'f'), 'ffoo');

  equal(rtrim_rtrim('_-foobar-_', '_-'), '_-foobar');

  equal(rtrim_rtrim(123, 3), '12');
  equal(rtrim_rtrim(''), '', 'rtrim empty string should return empty string');
  equal(rtrim_rtrim(null), '', 'rtrim null should return empty string');
});

