"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _cleanDiacritics = require("../cleanDiacritics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

var from = 'ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž',
    to = 'aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz';

test('#cleanDiacritics', function () {

  equal((0, _cleanDiacritics.cleanDiacriticsjs)(from), to);
  equal((0, _cleanDiacritics.cleanDiacriticsjs)(from.toUpperCase()), to.toUpperCase());

  equal((0, _cleanDiacritics.cleanDiacriticsjs)('ä'), 'a');
  equal((0, _cleanDiacritics.cleanDiacriticsjs)('Ä Ø'), 'A O');
  equal((0, _cleanDiacritics.cleanDiacriticsjs)('1 foo ääkkönen'), '1 foo aakkonen');
  equal((0, _cleanDiacritics.cleanDiacriticsjs)('Äöö ÖÖ'), 'Aoo OO');
  equal((0, _cleanDiacritics.cleanDiacriticsjs)(' ä '), ' a ');
  equal((0, _cleanDiacritics.cleanDiacriticsjs)('- " , £ $ ä'), '- " , £ $ a');

  equal((0, _cleanDiacritics.cleanDiacriticsjs)('ß'), 'ss');
  equal((0, _cleanDiacritics.cleanDiacriticsjs)('Schuß'), 'Schuss');
});
