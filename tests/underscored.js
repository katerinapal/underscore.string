import ext_assert from "assert";
import { underscored as underscored_underscored } from "../underscored";
var equal = ext_assert.equal;


test('#underscored', function(){
  equal(underscored_underscored('the-underscored-string-method'), 'the_underscored_string_method');
  equal(underscored_underscored('theUnderscoredStringMethod'), 'the_underscored_string_method');
  equal(underscored_underscored('TheUnderscoredStringMethod'), 'the_underscored_string_method');
  equal(underscored_underscored(' the underscored  string method'), 'the_underscored_string_method');
  equal(underscored_underscored(''), '');
  equal(underscored_underscored(null), '');
  equal(underscored_underscored(undefined), '');
  equal(underscored_underscored(123), '123');
});

