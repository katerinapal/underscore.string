'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mod_anonymus = function strRepeat(str, qty) {
  if (qty < 1) return '';
  var result = '';
  while (qty > 0) {
    if (qty & 1) result += str;
    qty >>= 1, str += str;
  }
  return result;
};

exports.strRepeat = mod_anonymus;