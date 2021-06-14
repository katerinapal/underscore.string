import ext_assert_assert from "assert";
import { naturalCmp as naturalCmp_naturalCmp } from "../naturalCmp";

test('#naturalSort', function() {
  var arr =  ['foo2', 'foo1', 'foo10', 'foo30', 'foo100', 'foo10bar'],
    sorted = ['foo1', 'foo2', 'foo10', 'foo10bar', 'foo30', 'foo100'];
  ext_assert_assert.deepEqual(arr.sort(naturalCmp_naturalCmp), sorted);
});
