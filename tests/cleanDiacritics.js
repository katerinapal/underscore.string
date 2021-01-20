
import ext_assert from "assert";
import { cleanDiacritics as cleanDiacritics_cleanDiacritics } from "../cleanDiacritics";
var equal = ext_assert.equal;

var from  = 'ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž',
  to    = 'aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz';

test('#cleanDiacritics', function() {

  equal(cleanDiacritics_cleanDiacritics(from), to);
  equal(cleanDiacritics_cleanDiacritics(from.toUpperCase()), to.toUpperCase());


  equal(cleanDiacritics_cleanDiacritics('ä'), 'a');
  equal(cleanDiacritics_cleanDiacritics('Ä Ø'), 'A O');
  equal(cleanDiacritics_cleanDiacritics('1 foo ääkkönen'), '1 foo aakkonen');
  equal(cleanDiacritics_cleanDiacritics('Äöö ÖÖ'), 'Aoo OO');
  equal(cleanDiacritics_cleanDiacritics(' ä '), ' a ');
  equal(cleanDiacritics_cleanDiacritics('- " , £ $ ä'), '- " , £ $ a');

  equal(cleanDiacritics_cleanDiacritics('ß'), 'ss');
  equal(cleanDiacritics_cleanDiacritics('Schuß'), 'Schuss');
});

