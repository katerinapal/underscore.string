import ext_assert_assert from "assert";
import { capitalizejs as capitalize_capitalizejsjs } from "../capitalize";
var equal = ext_assert_assert.equal;


test('#capitalize', function() {
  equal(capitalize_capitalizejsjs('fabio'), 'Fabio', 'First letter is upper case');
  equal(capitalize_capitalizejsjs('fabio'), 'Fabio', 'First letter is upper case');
  equal(capitalize_capitalizejsjs('FOO'), 'FOO', 'Other letters unchanged');
  equal(capitalize_capitalizejsjs('FOO', false), 'FOO', 'Other letters unchanged');
  equal(capitalize_capitalizejsjs('foO', false), 'FoO', 'Other letters unchanged');
  equal(capitalize_capitalizejsjs('FOO', true), 'Foo', 'Other letters are lowercased');
  equal(capitalize_capitalizejsjs('foO', true), 'Foo', 'Other letters are lowercased');
  equal(capitalize_capitalizejsjs('f', false), 'F', 'Should uppercase 1 letter');
  equal(capitalize_capitalizejsjs('f', true), 'F', 'Should uppercase 1 letter');
  equal(capitalize_capitalizejsjs('f'), 'F', 'Should uppercase 1 letter');
  equal(capitalize_capitalizejsjs(123), '123', 'Non string');
  equal(capitalize_capitalizejsjs(123, true), '123', 'Non string');
  equal(capitalize_capitalizejsjs(123, false), '123', 'Non string');
  equal(capitalize_capitalizejsjs(''), '', 'Capitalizing empty string returns empty string');
  equal(capitalize_capitalizejsjs(null), '', 'Capitalizing null returns empty string');
  equal(capitalize_capitalizejsjs(undefined), '', 'Capitalizing undefined returns empty string');
  equal(capitalize_capitalizejsjs('', true), '', 'Capitalizing empty string returns empty string');
  equal(capitalize_capitalizejsjs(null, true), '', 'Capitalizing null returns empty string');
  equal(capitalize_capitalizejsjs(undefined, true), '', 'Capitalizing undefined returns empty string');
  equal(capitalize_capitalizejsjs('', false), '', 'Capitalizing empty string returns empty string');
  equal(capitalize_capitalizejsjs(null, false), '', 'Capitalizing null returns empty string');
  equal(capitalize_capitalizejsjs(undefined, false), '', 'Capitalizing undefined returns empty string');
});

