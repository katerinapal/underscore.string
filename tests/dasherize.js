import ext_assert_assert from "assert";
import { dasherizejs as dasherize_dasherizejsjs } from "../dasherize";
var equal = ext_assert_assert.equal;


test('#dasherize', function(){
  equal(dasherize_dasherizejsjs('the_dasherize_string_method'), 'the-dasherize-string-method');
  equal(dasherize_dasherizejsjs('TheDasherizeStringMethod'), '-the-dasherize-string-method');
  equal(dasherize_dasherizejsjs('thisIsATest'), 'this-is-a-test');
  equal(dasherize_dasherizejsjs('this Is A Test'), 'this-is-a-test');
  equal(dasherize_dasherizejsjs('thisIsATest123'), 'this-is-a-test123');
  equal(dasherize_dasherizejsjs('123thisIsATest'), '123this-is-a-test');
  equal(dasherize_dasherizejsjs('the dasherize string method'), 'the-dasherize-string-method');
  equal(dasherize_dasherizejsjs('the  dasherize string method  '), 'the-dasherize-string-method');
  equal(dasherize_dasherizejsjs('téléphone'), 'téléphone');
  equal(dasherize_dasherizejsjs('foo$bar'), 'foo$bar');
  equal(dasherize_dasherizejsjs('input with a-dash'), 'input-with-a-dash');
  equal(dasherize_dasherizejsjs(''), '');
  equal(dasherize_dasherizejsjs(null), '');
  equal(dasherize_dasherizejsjs(undefined), '');
  equal(dasherize_dasherizejsjs(123), '123');
});

