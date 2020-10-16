import ext_assert_assert from "assert";
import { decapitalizejs as decapitalize_decapitalizejsjs } from "../decapitalize";
var equal = ext_assert_assert.equal;


test('#decapitalize', function() {
  equal(decapitalize_decapitalizejsjs('Fabio'), 'fabio', 'First letter is lower case');
  equal(decapitalize_decapitalizejsjs('FOO'), 'fOO', 'Other letters unchanged');
  equal(decapitalize_decapitalizejsjs(123), '123', 'Non string');
  equal(decapitalize_decapitalizejsjs(''), '', 'Decapitalizing empty string returns empty string');
  equal(decapitalize_decapitalizejsjs(null), '', 'Decapitalizing null returns empty string');
  equal(decapitalize_decapitalizejsjs(undefined), '', 'Decapitalizing undefined returns empty string');
});

