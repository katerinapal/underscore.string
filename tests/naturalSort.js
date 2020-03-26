import assert from "assert";
import { naturalCmpjs as naturalCmp_naturalCmpjsjs } from "../naturalCmp";

test('#naturalSort', function() {
  var arr =  ['foo2', 'foo1', 'foo10', 'foo30', 'foo100', 'foo10bar'],
    sorted = ['foo1', 'foo2', 'foo10', 'foo10bar', 'foo30', 'foo100'];
  assert.deepEqual(arr.sort(naturalCmp_naturalCmpjsjs), sorted);
});
