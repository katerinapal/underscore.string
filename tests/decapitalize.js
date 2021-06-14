import ext_assert from "assert";
import { decapitalize as decapitalize_decapitalize } from "../decapitalize";
var equal = ext_assert.equal;


test('#decapitalize', function() {
  equal(decapitalize_decapitalize('Fabio'), 'fabio', 'First letter is lower case');
  equal(decapitalize_decapitalize('FOO'), 'fOO', 'Other letters unchanged');
  equal(decapitalize_decapitalize(123), '123', 'Non string');
  equal(decapitalize_decapitalize(''), '', 'Decapitalizing empty string returns empty string');
  equal(decapitalize_decapitalize(null), '', 'Decapitalizing null returns empty string');
  equal(decapitalize_decapitalize(undefined), '', 'Decapitalizing undefined returns empty string');
});

