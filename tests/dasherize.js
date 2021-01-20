import ext_assert from "assert";
import { dasherize as dasherize_dasherize } from "../dasherize";
var equal = ext_assert.equal;


test('#dasherize', function(){
  equal(dasherize_dasherize('the_dasherize_string_method'), 'the-dasherize-string-method');
  equal(dasherize_dasherize('TheDasherizeStringMethod'), '-the-dasherize-string-method');
  equal(dasherize_dasherize('thisIsATest'), 'this-is-a-test');
  equal(dasherize_dasherize('this Is A Test'), 'this-is-a-test');
  equal(dasherize_dasherize('thisIsATest123'), 'this-is-a-test123');
  equal(dasherize_dasherize('123thisIsATest'), '123this-is-a-test');
  equal(dasherize_dasherize('the dasherize string method'), 'the-dasherize-string-method');
  equal(dasherize_dasherize('the  dasherize string method  '), 'the-dasherize-string-method');
  equal(dasherize_dasherize('téléphone'), 'téléphone');
  equal(dasherize_dasherize('foo$bar'), 'foo$bar');
  equal(dasherize_dasherize('input with a-dash'), 'input-with-a-dash');
  equal(dasherize_dasherize(''), '');
  equal(dasherize_dasherize(null), '');
  equal(dasherize_dasherize(undefined), '');
  equal(dasherize_dasherize(123), '123');
});

