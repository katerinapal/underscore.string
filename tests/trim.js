import { trim as trim_trim } from "../trim";
import ext_assert from "assert";
var equal = ext_assert.equal;

test('#trim', function() {
  equal(trim_trim(123), '123', 'Non string');
  equal(trim_trim(' foo'), 'foo');
  equal(trim_trim('foo '), 'foo');
  equal(trim_trim(' foo '), 'foo');
  equal(trim_trim('    foo     '), 'foo');
  equal(trim_trim('    foo     '), 'foo', 'Manually set whitespace');
  equal(trim_trim('\t    foo \t  '), 'foo', 'Manually set RegExp /\\s+/');

  equal(trim_trim('ffoo', 'ff'), 'oo');
  equal(trim_trim('ooff', 'ff'), 'oo');
  equal(trim_trim('ffooff', 'ff'), 'oo');


  equal(trim_trim('_-foobar-_', '_-'), 'foobar');

  equal(trim_trim('http://foo/', '/'), 'http://foo');
  equal(trim_trim('c:\\', '\\'), 'c:');

  equal(trim_trim(123), '123');
  equal(trim_trim(123, 3), '12');
  equal(trim_trim(''), '', 'Trim empty string should return empty string');
  equal(trim_trim(null), '', 'Trim null should return empty string');
  equal(trim_trim(undefined), '', 'Trim undefined should return empty string');
});

