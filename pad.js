"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pad = undefined;

var _makeString = require("./helper/makeString");

var _strRepeat = require("./helper/strRepeat");

var mod_anonymus = function pad(str, length, padStr, type) {
  str = (0, _makeString.makeString)(str);
  length = ~~length;

  var padlen = 0;

  if (!padStr) padStr = ' ';else if (padStr.length > 1) padStr = padStr.charAt(0);

  switch (type) {
    case 'right':
      padlen = length - str.length;
      return str + (0, _strRepeat.strRepeat)(padStr, padlen);
    case 'both':
      padlen = length - str.length;
      return (0, _strRepeat.strRepeat)(padStr, Math.ceil(padlen / 2)) + str + (0, _strRepeat.strRepeat)(padStr, Math.floor(padlen / 2));
    default:
      // 'left'
      padlen = length - str.length;
      return (0, _strRepeat.strRepeat)(padStr, padlen) + str;
  }
};

exports.pad = mod_anonymus;
