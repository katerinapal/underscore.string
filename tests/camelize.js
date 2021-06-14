import ext_assert from "assert";
import { camelize as camelize_camelize } from "../camelize";
var equal = ext_assert.equal;


test('#camelize', function(){
  equal(camelize_camelize('the_camelize_string_method'), 'theCamelizeStringMethod');
  equal(camelize_camelize('webkit-transform'), 'webkitTransform');
  equal(camelize_camelize('-the-camelize-string-method'), 'TheCamelizeStringMethod');
  equal(camelize_camelize('_the_camelize_string_method'), 'TheCamelizeStringMethod');
  equal(camelize_camelize('The-camelize-string-method'), 'TheCamelizeStringMethod');
  equal(camelize_camelize('the camelize string method'), 'theCamelizeStringMethod');
  equal(camelize_camelize(' the camelize  string method'), 'theCamelizeStringMethod');
  equal(camelize_camelize('the camelize   string method'), 'theCamelizeStringMethod');
  equal(camelize_camelize(' with   spaces'), 'withSpaces');
  equal(camelize_camelize('_som eWeird---name-'), 'SomEWeirdName');
  equal(camelize_camelize(''), '', 'Camelize empty string returns empty string');
  equal(camelize_camelize(null), '', 'Camelize null returns empty string');
  equal(camelize_camelize(undefined), '', 'Camelize undefined returns empty string');
  equal(camelize_camelize(123), '123');
  equal(camelize_camelize('the_camelize_string_method', true), 'theCamelizeStringMethod');
  equal(camelize_camelize('webkit-transform', true), 'webkitTransform');
  equal(camelize_camelize('-the-camelize-string-method', true), 'theCamelizeStringMethod');
  equal(camelize_camelize('_the_camelize_string_method', true), 'theCamelizeStringMethod');
  equal(camelize_camelize('The-camelize-string-method', true), 'theCamelizeStringMethod');
  equal(camelize_camelize('the camelize string method', true), 'theCamelizeStringMethod');
  equal(camelize_camelize(' the camelize  string method', true), 'theCamelizeStringMethod');
  equal(camelize_camelize('the camelize   string method', true), 'theCamelizeStringMethod');
  equal(camelize_camelize(' with   spaces', true), 'withSpaces');
  equal(camelize_camelize('_som eWeird---name-', true), 'somEWeirdName');
  equal(camelize_camelize('', true), '', 'Camelize empty string returns empty string');
  equal(camelize_camelize(null, true), '', 'Camelize null returns empty string');
  equal(camelize_camelize(undefined, true), '', 'Camelize undefined returns empty string');
  equal(camelize_camelize(123, true), '123');
});

