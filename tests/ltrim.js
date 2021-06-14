import ext_assert from "assert";
import { ltrim as ltrim_ltrim } from "../ltrim";
var equal = ext_assert.equal;

test('#ltrim', function() {
  equal(ltrim_ltrim(' foo'), 'foo');
  equal(ltrim_ltrim('    foo'), 'foo');
  equal(ltrim_ltrim('foo '), 'foo ');
  equal(ltrim_ltrim(' foo '), 'foo ');
  equal(ltrim_ltrim(''), '', 'ltrim empty string should return empty string');
  equal(ltrim_ltrim(null), '', 'ltrim null should return empty string');
  equal(ltrim_ltrim(undefined), '', 'ltrim undefined should return empty string');

  equal(ltrim_ltrim('ffoo', 'f'), 'oo');
  equal(ltrim_ltrim('ooff', 'f'), 'ooff');
  equal(ltrim_ltrim('ffooff', 'f'), 'ooff');

  equal(ltrim_ltrim('_-foobar-_', '_-'), 'foobar-_');

  equal(ltrim_ltrim(123, 1), '23');
});

