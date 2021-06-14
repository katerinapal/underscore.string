import ext_assert from "assert";
import { swapCase as swapCase_swapCase } from "../swapCase";
var equal = ext_assert.equal;


test('#swapCase', function(){
  equal(swapCase_swapCase('AaBbCcDdEe'), 'aAbBcCdDeE');
  equal(swapCase_swapCase('Hello World'), 'hELLO wORLD');
  equal(swapCase_swapCase(''), '');
  equal(swapCase_swapCase(null), '');
  equal(swapCase_swapCase(undefined), '');
});

