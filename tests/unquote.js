import ext_assert from "assert";
import { unquote as unquote_unquote } from "../unquote";
var equal = ext_assert.equal;


test('#unquote', function(){
  equal(unquote_unquote('"foo"'), 'foo');
  equal(unquote_unquote('""foo""'), '"foo"');
  equal(unquote_unquote('"1"'), '1');
  equal(unquote_unquote('\'foo\'', '\''), 'foo');
});

