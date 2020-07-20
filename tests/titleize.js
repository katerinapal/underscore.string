import ext_assert_assert from "assert";
import { titleizejs as titleize_titleizejsjs } from "../titleize";
var equal = ext_assert_assert.equal;


test('#titleize', function(){
  equal(titleize_titleizejsjs('the titleize string method'), 'The Titleize String Method');
  equal(titleize_titleizejsjs('the titleize string  method'), 'The Titleize String  Method');
  equal(titleize_titleizejsjs(''), '', 'Titleize empty string returns empty string');
  equal(titleize_titleizejsjs(null), '', 'Titleize null returns empty string');
  equal(titleize_titleizejsjs(undefined), '', 'Titleize undefined returns empty string');
  equal(titleize_titleizejsjs('let\'s have some fun'), 'Let\'s Have Some Fun');
  equal(titleize_titleizejsjs('a-dash-separated-string'), 'A-Dash-Separated-String');
  equal(titleize_titleizejsjs('A-DASH-SEPARATED-STRING'), 'A-Dash-Separated-String');
  equal(titleize_titleizejsjs(123), '123');
});

