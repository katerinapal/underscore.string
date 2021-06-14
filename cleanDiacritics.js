'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanDiacritics = undefined;

var _makeString = require('./helper/makeString');

var from = 'ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž',
    to = 'aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz';

from += from.toUpperCase();
to += to.toUpperCase();

to = to.split('');

// for tokens requireing multitoken output
from += 'ß';
to.push('ss');

var mod_anonymus = function cleanDiacritics(str) {
  return (0, _makeString.makeString)(str).replace(/.{1}/g, function (c) {
    var index = from.indexOf(c);
    return index === -1 ? c : to[index];
  });
};

exports.cleanDiacritics = mod_anonymus = function cleanDiacritics(str) {
  return (0, _makeString.makeString)(str).replace(/.{1}/g, function (c) {
    var index = from.indexOf(c);
    return index === -1 ? c : to[index];
  });
};
exports.cleanDiacritics = mod_anonymus;
