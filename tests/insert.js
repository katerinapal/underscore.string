import ext_assert_assert from "assert";
import { insertjs as insert_insertjsjs } from "../insert";
var equal = ext_assert_assert.equal;


test('#insert', function(){
  equal(insert_insertjsjs('Hello ', 6, 'Jessy'), 'Hello Jessy');
  equal(insert_insertjsjs('Hello', 0, 'Jessy '), 'Jessy Hello');
  equal(insert_insertjsjs('Hello ', 100, 'Jessy'), 'Hello Jessy');
  equal(insert_insertjsjs('', 100, 'Jessy'), 'Jessy');
  equal(insert_insertjsjs(null, 100, 'Jessy'), 'Jessy');
  equal(insert_insertjsjs(undefined, 100, 'Jessy'), 'Jessy');
  equal(insert_insertjsjs(12345, 5, 'Jessy'), '12345Jessy');
  equal(insert_insertjsjs(12345, 3, 'Jessy'), '123Jessy45');
});

