import ext_assert from "assert";
import { insert as insert_insert } from "../insert";
var equal = ext_assert.equal;


test('#insert', function(){
  equal(insert_insert('Hello ', 6, 'Jessy'), 'Hello Jessy');
  equal(insert_insert('Hello', 0, 'Jessy '), 'Jessy Hello');
  equal(insert_insert('Hello ', 100, 'Jessy'), 'Hello Jessy');
  equal(insert_insert('', 100, 'Jessy'), 'Jessy');
  equal(insert_insert(null, 100, 'Jessy'), 'Jessy');
  equal(insert_insert(undefined, 100, 'Jessy'), 'Jessy');
  equal(insert_insert(12345, 5, 'Jessy'), '12345Jessy');
  equal(insert_insert(12345, 3, 'Jessy'), '123Jessy45');
});

