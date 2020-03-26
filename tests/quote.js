import assert_assert from "assert";
import { quotejs as quote_quotejsjs } from "../quote";
import { s as _sjs } from "../";
var equal = assert_assert.equal;
var q = _sjs.q;


test('#quote', function(){
  equal(quote_quotejsjs('foo'), '"foo"');
  equal(quote_quotejsjs('"foo"'), '""foo""');
  equal(quote_quotejsjs(1), '"1"');
  equal(quote_quotejsjs('foo', '\''), '\'foo\'');

  // alias
  equal(q('foo'), '"foo"');
  equal(q(''), '""');
  equal(q(null), '""');
  equal(q(undefined), '""');
});

