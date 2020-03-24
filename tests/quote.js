import assert_assert from "assert";
import { quotejs as quote_quotejsjs } from "../quote";
import { q as _sjs } from "../";
var equal = assert_assert.equal;


test('#quote', function(){
  equal(quote_quotejsjs('foo'), '"foo"');
  equal(quote_quotejsjs('"foo"'), '""foo""');
  equal(quote_quotejsjs(1), '"1"');
  equal(quote_quotejsjs('foo', '\''), '\'foo\'');

  // alias
  equal(_sjs('foo'), '"foo"');
  equal(_sjs(''), '""');
  equal(_sjs(null), '""');
  equal(_sjs(undefined), '""');
});

