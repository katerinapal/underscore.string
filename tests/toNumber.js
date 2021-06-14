import ext_assert from "assert";
import ext__ from "underscore";
import { toNumber as toNumber_toNumber } from "../toNumber";
var equal = ext_assert.equal;
var ok = ext_assert.ok;


test('#toNumber', function() {
  ext__.each(['not a number', NaN, {}, [/a/], 'alpha6'], function(val) {
    ok(isNaN(toNumber_toNumber('not a number')));
    equal(toNumber_toNumber(Math.PI, val), 3);
  });
  equal(toNumber_toNumber(0), 0);
  equal(toNumber_toNumber('0'), 0);
  equal(toNumber_toNumber('0.0'), 0);
  equal(toNumber_toNumber('        0.0    '), 0);
  equal(toNumber_toNumber('0.1'), 0);
  equal(toNumber_toNumber('0.1', 1), 0.1);
  equal(toNumber_toNumber('  0.1 ', 1), 0.1);
  equal(toNumber_toNumber('0000'), 0);
  equal(toNumber_toNumber('2.345'), 2);
  equal(toNumber_toNumber('2.345', NaN), 2);
  equal(toNumber_toNumber('2.345', 2), 2.35);
  equal(toNumber_toNumber('2.344', 2), 2.34);
  equal(toNumber_toNumber('2', 2), 2.00);
  equal(toNumber_toNumber(2, 2), 2.00);
  equal(toNumber_toNumber(-2), -2);
  equal(toNumber_toNumber('-2'), -2);
  equal(toNumber_toNumber(-2.5123, 3), -2.512);

  // Negative precisions
  equal(toNumber_toNumber(-234, -1), -230);
  equal(toNumber_toNumber(234, -2), 200);
  equal(toNumber_toNumber('234', -2), 200);

  ext__.each(['', null, undefined], function(val) {
    equal(toNumber_toNumber(val), 0);
  });

  ext__.each([Infinity, -Infinity], function(val) {
    equal(toNumber_toNumber(val), val);
    equal(toNumber_toNumber(val, val), val);
    equal(toNumber_toNumber(1, val), 1);
  });
});

