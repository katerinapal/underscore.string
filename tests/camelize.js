import assert_assert from "assert";
import { camelizejs as camelize_camelizejsjs } from "../camelize";
var equal = assert_assert.equal;


test('#camelize', function(){
  equal(camelize_camelizejsjs('the_camelize_string_method'), 'theCamelizeStringMethod');
  equal(camelize_camelizejsjs('webkit-transform'), 'webkitTransform');
  equal(camelize_camelizejsjs('-the-camelize-string-method'), 'TheCamelizeStringMethod');
  equal(camelize_camelizejsjs('_the_camelize_string_method'), 'TheCamelizeStringMethod');
  equal(camelize_camelizejsjs('The-camelize-string-method'), 'TheCamelizeStringMethod');
  equal(camelize_camelizejsjs('the camelize string method'), 'theCamelizeStringMethod');
  equal(camelize_camelizejsjs(' the camelize  string method'), 'theCamelizeStringMethod');
  equal(camelize_camelizejsjs('the camelize   string method'), 'theCamelizeStringMethod');
  equal(camelize_camelizejsjs(' with   spaces'), 'withSpaces');
  equal(camelize_camelizejsjs('_som eWeird---name-'), 'SomEWeirdName');
  equal(camelize_camelizejsjs(''), '', 'Camelize empty string returns empty string');
  equal(camelize_camelizejsjs(null), '', 'Camelize null returns empty string');
  equal(camelize_camelizejsjs(undefined), '', 'Camelize undefined returns empty string');
  equal(camelize_camelizejsjs(123), '123');
  equal(camelize_camelizejsjs('the_camelize_string_method', true), 'theCamelizeStringMethod');
  equal(camelize_camelizejsjs('webkit-transform', true), 'webkitTransform');
  equal(camelize_camelizejsjs('-the-camelize-string-method', true), 'theCamelizeStringMethod');
  equal(camelize_camelizejsjs('_the_camelize_string_method', true), 'theCamelizeStringMethod');
  equal(camelize_camelizejsjs('The-camelize-string-method', true), 'theCamelizeStringMethod');
  equal(camelize_camelizejsjs('the camelize string method', true), 'theCamelizeStringMethod');
  equal(camelize_camelizejsjs(' the camelize  string method', true), 'theCamelizeStringMethod');
  equal(camelize_camelizejsjs('the camelize   string method', true), 'theCamelizeStringMethod');
  equal(camelize_camelizejsjs(' with   spaces', true), 'withSpaces');
  equal(camelize_camelizejsjs('_som eWeird---name-', true), 'somEWeirdName');
  equal(camelize_camelizejsjs('', true), '', 'Camelize empty string returns empty string');
  equal(camelize_camelizejsjs(null, true), '', 'Camelize null returns empty string');
  equal(camelize_camelizejsjs(undefined, true), '', 'Camelize undefined returns empty string');
  equal(camelize_camelizejsjs(123, true), '123');
});

