import ext_assert from "assert";
import { include as include_include } from "../include";
import { s as _s } from "../";
var ok = ext_assert.ok;


test('#include', function() {
  ok(include_include('foobar', 'bar'), 'foobar includes bar');
  ok(!include_include('foobar', 'buzz'), 'foobar does not includes buzz');
  ok(include_include(12345, 34), '12345 includes 34');
  ok(!_s.contains(12345, 6), '12345 does not include 6');
  ok(!include_include('', 34), 'empty string includes 34');
  ok(!include_include(null, 34), 'null includes 34');
  ok(include_include(null, ''), 'null includes empty string');
});

