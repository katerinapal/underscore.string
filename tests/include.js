import assert_assert from "assert";
import { includejs as include_includejsjs } from "../include";
import { s as _sjs } from "../";
var ok = assert_assert.ok;


test('#include', function() {
  ok(include_includejsjs('foobar', 'bar'), 'foobar includes bar');
  ok(!include_includejsjs('foobar', 'buzz'), 'foobar does not includes buzz');
  ok(include_includejsjs(12345, 34), '12345 includes 34');
  ok(!_sjs.contains(12345, 6), '12345 does not include 6');
  ok(!include_includejsjs('', 34), 'empty string includes 34');
  ok(!include_includejsjs(null, 34), 'null includes 34');
  ok(include_includejsjs(null, ''), 'null includes empty string');
});

