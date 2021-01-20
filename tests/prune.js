import ext_assert from "assert";
import { prune as prune_prune } from "../prune";
var equal = ext_assert.equal;


test('#prune', function(){
  equal(prune_prune('Hello, cruel world', 6, ' read more'), 'Hello read more');
  equal(prune_prune('Hello, world', 5, 'read a lot more'), 'Hello, world');
  equal(prune_prune('Hello, world', 5), 'Hello...');
  equal(prune_prune('Hello, world', 8), 'Hello...');
  equal(prune_prune('Hello, cruel world', 15), 'Hello, cruel...');
  equal(prune_prune('Hello world', 22), 'Hello world');
  equal(prune_prune('Привет, жестокий мир', 6, ' read more'), 'Привет read more');
  equal(prune_prune('Привет, мир', 6, 'read a lot more'), 'Привет, мир');
  equal(prune_prune('Привет, мир', 6), 'Привет...');
  equal(prune_prune('Привет, мир', 8), 'Привет...');
  equal(prune_prune('Привет, жестокий мир', 16), 'Привет, жестокий...');
  equal(prune_prune('Привет, мир', 22), 'Привет, мир');
  equal(prune_prune('alksjd!!!!!!....', 100, ''), 'alksjd!!!!!!....');
  equal(prune_prune(123, 10), '123');
  equal(prune_prune(123, 1, 321), '321');
  equal(prune_prune('', 5), '');
  equal(prune_prune(null, 5), '');
  equal(prune_prune(undefined, 5), '');
});

