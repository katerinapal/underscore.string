import assert_assert from "assert";
import { numberFormatjs as numberFormat_numberFormatjsjs } from "../numberFormat";
var equal = assert_assert.equal;


test('#numberFormat', function() {
  equal(numberFormat_numberFormatjsjs(9000), '9,000');
  equal(numberFormat_numberFormatjsjs(9000, 0), '9,000');
  equal(numberFormat_numberFormatjsjs(9000, 0, '', ''), '9000');
  equal(numberFormat_numberFormatjsjs(90000, 2), '90,000.00');
  equal(numberFormat_numberFormatjsjs(1000.754), '1,001');
  equal(numberFormat_numberFormatjsjs(1000.754, 2), '1,000.75');
  equal(numberFormat_numberFormatjsjs(1000.755, 2), '1,000.75');
  equal(numberFormat_numberFormatjsjs(1000.756, 2), '1,000.76');
  equal(numberFormat_numberFormatjsjs(1000.754, 0, ',', '.'), '1.001');
  equal(numberFormat_numberFormatjsjs(1000.754, 2, ',', '.'), '1.000,75');
  equal(numberFormat_numberFormatjsjs(1000000.754, 2, ',', '.'), '1.000.000,75');
  equal(numberFormat_numberFormatjsjs(1000000000), '1,000,000,000');
  equal(numberFormat_numberFormatjsjs(100000000), '100,000,000');
  equal(numberFormat_numberFormatjsjs('not number'), '');
  equal(numberFormat_numberFormatjsjs(), '');
  equal(numberFormat_numberFormatjsjs(null, '.', ','), '');
  equal(numberFormat_numberFormatjsjs(undefined, '.', ','), '');
  equal(numberFormat_numberFormatjsjs(new Number(5000)), '5,000');
});

