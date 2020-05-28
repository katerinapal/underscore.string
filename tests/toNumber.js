import ext_assert_assert from "assert";
import ext_underscore__ from "underscore";
import { toNumberjs as toNumber_toNumberjsjs } from "../toNumber";
var equal = ext_assert_assert.equal;
var ok = ext_assert_assert.ok;


test('#toNumber', function() {
  ext_underscore__.each(['not a number', NaN, {}, [/a/], 'alpha6'], function(val) {
    ok(isNaN(toNumber_toNumberjsjs('not a number')));
    equal(toNumber_toNumberjsjs(Math.PI, val), 3);
  });
  equal(toNumber_toNumberjsjs(0), 0);
  equal(toNumber_toNumberjsjs('0'), 0);
  equal(toNumber_toNumberjsjs('0.0'), 0);
  equal(toNumber_toNumberjsjs('        0.0    '), 0);
  equal(toNumber_toNumberjsjs('0.1'), 0);
  equal(toNumber_toNumberjsjs('0.1', 1), 0.1);
  equal(toNumber_toNumberjsjs('  0.1 ', 1), 0.1);
  equal(toNumber_toNumberjsjs('0000'), 0);
  equal(toNumber_toNumberjsjs('2.345'), 2);
  equal(toNumber_toNumberjsjs('2.345', NaN), 2);
  equal(toNumber_toNumberjsjs('2.345', 2), 2.35);
  equal(toNumber_toNumberjsjs('2.344', 2), 2.34);
  equal(toNumber_toNumberjsjs('2', 2), 2.00);
  equal(toNumber_toNumberjsjs(2, 2), 2.00);
  equal(toNumber_toNumberjsjs(-2), -2);
  equal(toNumber_toNumberjsjs('-2'), -2);
  equal(toNumber_toNumberjsjs(-2.5123, 3), -2.512);

  // Negative precisions
  equal(toNumber_toNumberjsjs(-234, -1), -230);
  equal(toNumber_toNumberjsjs(234, -2), 200);
  equal(toNumber_toNumberjsjs('234', -2), 200);

  ext_underscore__.each(['', null, undefined], function(val) {
    equal(toNumber_toNumberjsjs(val), 0);
  });

  ext_underscore__.each([Infinity, -Infinity], function(val) {
    equal(toNumber_toNumberjsjs(val), val);
    equal(toNumber_toNumberjsjs(val, val), val);
    equal(toNumber_toNumberjsjs(1, val), 1);
  });
});

