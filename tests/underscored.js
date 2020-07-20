import ext_assert_assert from "assert";
import { underscoredjs as underscored_underscoredjsjs } from "../underscored";
var equal = ext_assert_assert.equal;


test('#underscored', function(){
  equal(underscored_underscoredjsjs('the-underscored-string-method'), 'the_underscored_string_method');
  equal(underscored_underscoredjsjs('theUnderscoredStringMethod'), 'the_underscored_string_method');
  equal(underscored_underscoredjsjs('TheUnderscoredStringMethod'), 'the_underscored_string_method');
  equal(underscored_underscoredjsjs(' the underscored  string method'), 'the_underscored_string_method');
  equal(underscored_underscoredjsjs(''), '');
  equal(underscored_underscoredjsjs(null), '');
  equal(underscored_underscoredjsjs(undefined), '');
  equal(underscored_underscoredjsjs(123), '123');
});

