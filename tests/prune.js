import ext_assert_assert from "assert";
import { prunejs as prune_prunejsjs } from "../prune";
var equal = ext_assert_assert.equal;


test('#prune', function(){
  equal(prune_prunejsjs('Hello, cruel world', 6, ' read more'), 'Hello read more');
  equal(prune_prunejsjs('Hello, world', 5, 'read a lot more'), 'Hello, world');
  equal(prune_prunejsjs('Hello, world', 5), 'Hello...');
  equal(prune_prunejsjs('Hello, world', 8), 'Hello...');
  equal(prune_prunejsjs('Hello, cruel world', 15), 'Hello, cruel...');
  equal(prune_prunejsjs('Hello world', 22), 'Hello world');
  equal(prune_prunejsjs('Привет, жестокий мир', 6, ' read more'), 'Привет read more');
  equal(prune_prunejsjs('Привет, мир', 6, 'read a lot more'), 'Привет, мир');
  equal(prune_prunejsjs('Привет, мир', 6), 'Привет...');
  equal(prune_prunejsjs('Привет, мир', 8), 'Привет...');
  equal(prune_prunejsjs('Привет, жестокий мир', 16), 'Привет, жестокий...');
  equal(prune_prunejsjs('Привет, мир', 22), 'Привет, мир');
  equal(prune_prunejsjs('alksjd!!!!!!....', 100, ''), 'alksjd!!!!!!....');
  equal(prune_prunejsjs(123, 10), '123');
  equal(prune_prunejsjs(123, 1, 321), '321');
  equal(prune_prunejsjs('', 5), '');
  equal(prune_prunejsjs(null, 5), '');
  equal(prune_prunejsjs(undefined, 5), '');
});

