
import ext_assert_assert from "assert";
import { cleanDiacriticsjs as cleanDiacritics_cleanDiacriticsjsjs } from "../cleanDiacritics";
var equal = ext_assert_assert.equal;

var from  = 'ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž',
  to    = 'aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz';

test('#cleanDiacritics', function() {

  equal(cleanDiacritics_cleanDiacriticsjsjs(from), to);
  equal(cleanDiacritics_cleanDiacriticsjsjs(from.toUpperCase()), to.toUpperCase());


  equal(cleanDiacritics_cleanDiacriticsjsjs('ä'), 'a');
  equal(cleanDiacritics_cleanDiacriticsjsjs('Ä Ø'), 'A O');
  equal(cleanDiacritics_cleanDiacriticsjsjs('1 foo ääkkönen'), '1 foo aakkonen');
  equal(cleanDiacritics_cleanDiacriticsjsjs('Äöö ÖÖ'), 'Aoo OO');
  equal(cleanDiacritics_cleanDiacriticsjsjs(' ä '), ' a ');
  equal(cleanDiacritics_cleanDiacriticsjsjs('- " , £ $ ä'), '- " , £ $ a');

  equal(cleanDiacritics_cleanDiacriticsjsjs('ß'), 'ss');
  equal(cleanDiacritics_cleanDiacriticsjsjs('Schuß'), 'Schuss');
});

