import ext_assert_assert from "assert";
import { chopjs as chop_chopjsjs } from "../chop";
var ok = ext_assert_assert.ok;


test('#chop', function(){
  ok(chop_chopjsjs(null, 2).length === 0, 'output []');
  ok(chop_chopjsjs('whitespace', 2).length === 5, 'output [wh, it, es, pa, ce]');
  ok(chop_chopjsjs('whitespace', 3).length === 4, 'output [whi, tes, pac, e]');
  ok(chop_chopjsjs('whitespace')[0].length === 10, 'output [whitespace]');
  ok(chop_chopjsjs(12345, 1).length === 5, 'output [1, 2, 3,  4, 5]');
});

