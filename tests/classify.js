import ext_assert_assert from "assert";
import { classifyjs as classify_classifyjsjs } from "../classify";
var equal = ext_assert_assert.equal;


test('#classify', function(){
  equal(classify_classifyjsjs(1), '1');
  equal(classify_classifyjsjs('some_class_name'), 'SomeClassName');
  equal(classify_classifyjsjs('my wonderfull class_name'), 'MyWonderfullClassName');
  equal(classify_classifyjsjs('my wonderfull.class.name'), 'MyWonderfullClassName');
  equal(classify_classifyjsjs('myLittleCamel'), 'MyLittleCamel');
  equal(classify_classifyjsjs('myLittleCamel.class.name'), 'MyLittleCamelClassName');
  equal(classify_classifyjsjs(123), '123');
  equal(classify_classifyjsjs(''), '');
  equal(classify_classifyjsjs(null), '');
  equal(classify_classifyjsjs(undefined), '');
});

