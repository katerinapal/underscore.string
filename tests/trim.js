import { trimjs as trim_trimjsjs } from "../trim";
import ext_assert_assert from "assert";
var equal = ext_assert_assert.equal;

test('#trim', function() {
  equal(trim_trimjsjs(123), '123', 'Non string');
  equal(trim_trimjsjs(' foo'), 'foo');
  equal(trim_trimjsjs('foo '), 'foo');
  equal(trim_trimjsjs(' foo '), 'foo');
  equal(trim_trimjsjs('    foo     '), 'foo');
  equal(trim_trimjsjs('    foo     '), 'foo', 'Manually set whitespace');
  equal(trim_trimjsjs('\t    foo \t  '), 'foo', 'Manually set RegExp /\\s+/');

  equal(trim_trimjsjs('ffoo', 'ff'), 'oo');
  equal(trim_trimjsjs('ooff', 'ff'), 'oo');
  equal(trim_trimjsjs('ffooff', 'ff'), 'oo');


  equal(trim_trimjsjs('_-foobar-_', '_-'), 'foobar');

  equal(trim_trimjsjs('http://foo/', '/'), 'http://foo');
  equal(trim_trimjsjs('c:\\', '\\'), 'c:');

  equal(trim_trimjsjs(123), '123');
  equal(trim_trimjsjs(123, 3), '12');
  equal(trim_trimjsjs(''), '', 'Trim empty string should return empty string');
  equal(trim_trimjsjs(null), '', 'Trim null should return empty string');
  equal(trim_trimjsjs(undefined), '', 'Trim undefined should return empty string');
});

