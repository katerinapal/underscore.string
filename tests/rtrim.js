import ext_assert_assert from "assert";
import { rtrimjs as rtrim_rtrimjsjs } from "../rtrim";
var equal = ext_assert_assert.equal;

test('#rtrim', function() {
  equal(rtrim_rtrimjsjs('http://foo/', '/'), 'http://foo', 'clean trailing slash');
  equal(rtrim_rtrimjsjs(' foo'), ' foo');
  equal(rtrim_rtrimjsjs('foo '), 'foo');
  equal(rtrim_rtrimjsjs('foo     '), 'foo');
  equal(rtrim_rtrimjsjs('foo  bar     '), 'foo  bar');
  equal(rtrim_rtrimjsjs(' foo '), ' foo');

  equal(rtrim_rtrimjsjs('ffoo', 'f'), 'ffoo');
  equal(rtrim_rtrimjsjs('ooff', 'f'), 'oo');
  equal(rtrim_rtrimjsjs('ffooff', 'f'), 'ffoo');

  equal(rtrim_rtrimjsjs('_-foobar-_', '_-'), '_-foobar');

  equal(rtrim_rtrimjsjs(123, 3), '12');
  equal(rtrim_rtrimjsjs(''), '', 'rtrim empty string should return empty string');
  equal(rtrim_rtrimjsjs(null), '', 'rtrim null should return empty string');
});

