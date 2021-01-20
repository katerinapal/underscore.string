import ext_assert from "assert";
import { numberFormat as numberFormat_numberFormat } from "../numberFormat";
var equal = ext_assert.equal;


test('#numberFormat', function() {
  equal(numberFormat_numberFormat(9000), '9,000');
  equal(numberFormat_numberFormat(9000, 0), '9,000');
  equal(numberFormat_numberFormat(9000, 0, '', ''), '9000');
  equal(numberFormat_numberFormat(90000, 2), '90,000.00');
  equal(numberFormat_numberFormat(1000.754), '1,001');
  equal(numberFormat_numberFormat(1000.754, 2), '1,000.75');
  equal(numberFormat_numberFormat(1000.755, 2), '1,000.75');
  equal(numberFormat_numberFormat(1000.756, 2), '1,000.76');
  equal(numberFormat_numberFormat(1000.754, 0, ',', '.'), '1.001');
  equal(numberFormat_numberFormat(1000.754, 2, ',', '.'), '1.000,75');
  equal(numberFormat_numberFormat(1000000.754, 2, ',', '.'), '1.000.000,75');
  equal(numberFormat_numberFormat(1000000000), '1,000,000,000');
  equal(numberFormat_numberFormat(100000000), '100,000,000');
  equal(numberFormat_numberFormat('not number'), '');
  equal(numberFormat_numberFormat(), '');
  equal(numberFormat_numberFormat(null, '.', ','), '');
  equal(numberFormat_numberFormat(undefined, '.', ','), '');
  equal(numberFormat_numberFormat(new Number(5000)), '5,000');
});

