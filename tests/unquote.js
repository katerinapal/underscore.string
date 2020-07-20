import ext_assert_assert from "assert";
import { unquotejs as unquote_unquotejsjs } from "../unquote";
var equal = ext_assert_assert.equal;


test('#unquote', function(){
  equal(unquote_unquotejsjs('"foo"'), 'foo');
  equal(unquote_unquotejsjs('""foo""'), '"foo"');
  equal(unquote_unquotejsjs('"1"'), '1');
  equal(unquote_unquotejsjs('\'foo\'', '\''), 'foo');
});

