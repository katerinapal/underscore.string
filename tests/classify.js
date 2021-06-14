import ext_assert from "assert";
import { classify as classify_classify } from "../classify";
var equal = ext_assert.equal;


test('#classify', function(){
  equal(classify_classify(1), '1');
  equal(classify_classify('some_class_name'), 'SomeClassName');
  equal(classify_classify('my wonderfull class_name'), 'MyWonderfullClassName');
  equal(classify_classify('my wonderfull.class.name'), 'MyWonderfullClassName');
  equal(classify_classify('myLittleCamel'), 'MyLittleCamel');
  equal(classify_classify('myLittleCamel.class.name'), 'MyLittleCamelClassName');
  equal(classify_classify(123), '123');
  equal(classify_classify(''), '');
  equal(classify_classify(null), '');
  equal(classify_classify(undefined), '');
});

