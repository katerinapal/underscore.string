
import { makeString as makeString_makeString } from "./helper/makeString";

var from  = 'ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž',
  to    = 'aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz';

from += from.toUpperCase();
to += to.toUpperCase();

to = to.split('');

// for tokens requireing multitoken output
from += 'ß';
to.push('ss');


var mod_anonymus = function cleanDiacritics(str) {
  return makeString_makeString(str).replace(/.{1}/g, function(c){
    var index = from.indexOf(c);
    return index === -1 ? c : to[index];
  });
};


mod_anonymus = function cleanDiacritics(str) {
  return makeString_makeString(str).replace(/.{1}/g, function(c){
    var index = from.indexOf(c);
    return index === -1 ? c : to[index];
  });
};
export { mod_anonymus as cleanDiacritics };
