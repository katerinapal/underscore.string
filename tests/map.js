import ext_assert_assert from "assert";
import { mapjs as map_mapjsjs } from "../map";
var equal = ext_assert_assert.equal;


test('#map', function() {
  equal(map_mapjsjs('Hello world', function(x) {
    return x;
  }), 'Hello world');
  equal(map_mapjsjs(12345, function(x) {
    return x;
  }), '12345');
  equal(map_mapjsjs('Hello world', function(x) {
    if (x === 'o') x = 'O';
    return x;
  }), 'HellO wOrld');
  equal(map_mapjsjs('', function(x) {
    return x;
  }), '');
  equal(map_mapjsjs(null, function(x) {
    return x;
  }), '');
  equal(map_mapjsjs(undefined, function(x) {
    return x;
  }), '');
  equal(map_mapjsjs('Hello world', ''), 'Hello world');
  equal(map_mapjsjs('Hello world', null), 'Hello world');
  equal(map_mapjsjs('Hello world', undefined), 'Hello world');
  equal(map_mapjsjs('', ''), '');
  equal(map_mapjsjs(null, null), '');
  equal(map_mapjsjs(undefined, undefined), '');
});
