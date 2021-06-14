import ext_assert from "assert";
import { quote as quote_quote } from "../quote";
import { s as _s } from "../";
var equal = ext_assert.equal;
var q = _s.q;


test('#quote', function(){
  equal(quote_quote('foo'), '"foo"');
  equal(quote_quote('"foo"'), '""foo""');
  equal(quote_quote(1), '"1"');
  equal(quote_quote('foo', '\''), '\'foo\'');

  // alias
  equal(q('foo'), '"foo"');
  equal(q(''), '""');
  equal(q(null), '""');
  equal(q(undefined), '""');
});

