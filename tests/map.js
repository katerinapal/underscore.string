import ext_assert from "assert";
import { map as map_map } from "../map";
var equal = ext_assert.equal;


test('#map', function() {
  equal(map_map('Hello world', function(x) {
    return x;
  }), 'Hello world');
  equal(map_map(12345, function(x) {
    return x;
  }), '12345');
  equal(map_map('Hello world', function(x) {
    if (x === 'o') x = 'O';
    return x;
  }), 'HellO wOrld');
  equal(map_map('', function(x) {
    return x;
  }), '');
  equal(map_map(null, function(x) {
    return x;
  }), '');
  equal(map_map(undefined, function(x) {
    return x;
  }), '');
  equal(map_map('Hello world', ''), 'Hello world');
  equal(map_map('Hello world', null), 'Hello world');
  equal(map_map('Hello world', undefined), 'Hello world');
  equal(map_map('', ''), '');
  equal(map_map(null, null), '');
  equal(map_map(undefined, undefined), '');
});
