"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _cleanDiacritics = require("../cleanDiacritics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

var from = 'ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž',
    to = 'aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz';

test('#cleanDiacritics', function () {

  equal((0, _cleanDiacritics.cleanDiacritics)(from), to);
  equal((0, _cleanDiacritics.cleanDiacritics)(from.toUpperCase()), to.toUpperCase());

  equal((0, _cleanDiacritics.cleanDiacritics)('ä'), 'a');
  equal((0, _cleanDiacritics.cleanDiacritics)('Ä Ø'), 'A O');
  equal((0, _cleanDiacritics.cleanDiacritics)('1 foo ääkkönen'), '1 foo aakkonen');
  equal((0, _cleanDiacritics.cleanDiacritics)('Äöö ÖÖ'), 'Aoo OO');
  equal((0, _cleanDiacritics.cleanDiacritics)(' ä '), ' a ');
  equal((0, _cleanDiacritics.cleanDiacritics)('- " , £ $ ä'), '- " , £ $ a');

  equal((0, _cleanDiacritics.cleanDiacritics)('ß'), 'ss');
  equal((0, _cleanDiacritics.cleanDiacritics)('Schuß'), 'Schuss');
});