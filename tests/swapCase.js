import ext_assert_assert from "assert";
import { swapCasejs as swapCase_swapCasejsjs } from "../swapCase";
var equal = ext_assert_assert.equal;


test('#swapCase', function(){
  equal(swapCase_swapCasejsjs('AaBbCcDdEe'), 'aAbBcCdDeE');
  equal(swapCase_swapCasejsjs('Hello World'), 'hELLO wORLD');
  equal(swapCase_swapCasejsjs(''), '');
  equal(swapCase_swapCasejsjs(null), '');
  equal(swapCase_swapCasejsjs(undefined), '');
});

