import ext_assert_assert from "assert";
import { truncatejs as truncate_truncatejsjs } from "../truncate";
var equal = ext_assert_assert.equal;


test('#truncate', function(){
  equal(truncate_truncatejsjs('Hello world', 6, 'read more'), 'Hello read more');
  equal(truncate_truncatejsjs('Hello world', 5), 'Hello...');
  equal(truncate_truncatejsjs('Hello', 10), 'Hello');
  equal(truncate_truncatejsjs('', 10), '');
  equal(truncate_truncatejsjs(null, 10), '');
  equal(truncate_truncatejsjs(undefined, 10), '');
  equal(truncate_truncatejsjs(1234567890, 5), '12345...');
});

