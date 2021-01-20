import ext_assert from "assert";
import { truncate as truncate_truncate } from "../truncate";
var equal = ext_assert.equal;


test('#truncate', function(){
  equal(truncate_truncate('Hello world', 6, 'read more'), 'Hello read more');
  equal(truncate_truncate('Hello world', 5), 'Hello...');
  equal(truncate_truncate('Hello', 10), 'Hello');
  equal(truncate_truncate('', 10), '');
  equal(truncate_truncate(null, 10), '');
  equal(truncate_truncate(undefined, 10), '');
  equal(truncate_truncate(1234567890, 5), '12345...');
});

