import ext_assert from "assert";
import { titleize as titleize_titleize } from "../titleize";
var equal = ext_assert.equal;


test('#titleize', function(){
  equal(titleize_titleize('the titleize string method'), 'The Titleize String Method');
  equal(titleize_titleize('the titleize string  method'), 'The Titleize String  Method');
  equal(titleize_titleize(''), '', 'Titleize empty string returns empty string');
  equal(titleize_titleize(null), '', 'Titleize null returns empty string');
  equal(titleize_titleize(undefined), '', 'Titleize undefined returns empty string');
  equal(titleize_titleize('let\'s have some fun'), 'Let\'s Have Some Fun');
  equal(titleize_titleize('a-dash-separated-string'), 'A-Dash-Separated-String');
  equal(titleize_titleize('A-DASH-SEPARATED-STRING'), 'A-Dash-Separated-String');
  equal(titleize_titleize(123), '123');
});

