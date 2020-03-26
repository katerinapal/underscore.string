import assert_assert from "assert";
import { ltrimjs as ltrim_ltrimjsjs } from "../ltrim";
var equal = assert_assert.equal;

test('#ltrim', function() {
  equal(ltrim_ltrimjsjs(' foo'), 'foo');
  equal(ltrim_ltrimjsjs('    foo'), 'foo');
  equal(ltrim_ltrimjsjs('foo '), 'foo ');
  equal(ltrim_ltrimjsjs(' foo '), 'foo ');
  equal(ltrim_ltrimjsjs(''), '', 'ltrim empty string should return empty string');
  equal(ltrim_ltrimjsjs(null), '', 'ltrim null should return empty string');
  equal(ltrim_ltrimjsjs(undefined), '', 'ltrim undefined should return empty string');

  equal(ltrim_ltrimjsjs('ffoo', 'f'), 'oo');
  equal(ltrim_ltrimjsjs('ooff', 'f'), 'ooff');
  equal(ltrim_ltrimjsjs('ffooff', 'f'), 'ooff');

  equal(ltrim_ltrimjsjs('_-foobar-_', '_-'), 'foobar-_');

  equal(ltrim_ltrimjsjs(123, 1), '23');
});

