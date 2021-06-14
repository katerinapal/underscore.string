import ext_assert from "assert";
import { capitalize as capitalize_capitalize } from "../capitalize";
var equal = ext_assert.equal;


test('#capitalize', function() {
  equal(capitalize_capitalize('fabio'), 'Fabio', 'First letter is upper case');
  equal(capitalize_capitalize('fabio'), 'Fabio', 'First letter is upper case');
  equal(capitalize_capitalize('FOO'), 'FOO', 'Other letters unchanged');
  equal(capitalize_capitalize('FOO', false), 'FOO', 'Other letters unchanged');
  equal(capitalize_capitalize('foO', false), 'FoO', 'Other letters unchanged');
  equal(capitalize_capitalize('FOO', true), 'Foo', 'Other letters are lowercased');
  equal(capitalize_capitalize('foO', true), 'Foo', 'Other letters are lowercased');
  equal(capitalize_capitalize('f', false), 'F', 'Should uppercase 1 letter');
  equal(capitalize_capitalize('f', true), 'F', 'Should uppercase 1 letter');
  equal(capitalize_capitalize('f'), 'F', 'Should uppercase 1 letter');
  equal(capitalize_capitalize(123), '123', 'Non string');
  equal(capitalize_capitalize(123, true), '123', 'Non string');
  equal(capitalize_capitalize(123, false), '123', 'Non string');
  equal(capitalize_capitalize(''), '', 'Capitalizing empty string returns empty string');
  equal(capitalize_capitalize(null), '', 'Capitalizing null returns empty string');
  equal(capitalize_capitalize(undefined), '', 'Capitalizing undefined returns empty string');
  equal(capitalize_capitalize('', true), '', 'Capitalizing empty string returns empty string');
  equal(capitalize_capitalize(null, true), '', 'Capitalizing null returns empty string');
  equal(capitalize_capitalize(undefined, true), '', 'Capitalizing undefined returns empty string');
  equal(capitalize_capitalize('', false), '', 'Capitalizing empty string returns empty string');
  equal(capitalize_capitalize(null, false), '', 'Capitalizing null returns empty string');
  equal(capitalize_capitalize(undefined, false), '', 'Capitalizing undefined returns empty string');
});

