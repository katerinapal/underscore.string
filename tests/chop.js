import ext_assert from "assert";
import { chop as chop_chop } from "../chop";
var ok = ext_assert.ok;


test('#chop', function(){
  ok(chop_chop(null, 2).length === 0, 'output []');
  ok(chop_chop('whitespace', 2).length === 5, 'output [wh, it, es, pa, ce]');
  ok(chop_chop('whitespace', 3).length === 4, 'output [whi, tes, pac, e]');
  ok(chop_chop('whitespace')[0].length === 10, 'output [whitespace]');
  ok(chop_chop(12345, 1).length === 5, 'output [1, 2, 3,  4, 5]');
});

