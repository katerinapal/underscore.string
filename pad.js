"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.padjs = undefined;

var _makeString = require("./helper/makeString");

var _strRepeat = require("./helper/strRepeat");

var exportedObject = function pad(str, length, padStr, type) {
  str = (0, _makeString.makeStringjs)(str);
  length = ~~length;

  var padlen = 0;

  if (!padStr) padStr = ' ';else if (padStr.length > 1) padStr = padStr.charAt(0);

  switch (type) {
    case 'right':
      padlen = length - str.length;
      return str + (0, _strRepeat.strRepeatjs)(padStr, padlen);
    case 'both':
      padlen = length - str.length;
      return (0, _strRepeat.strRepeatjs)(padStr, Math.ceil(padlen / 2)) + str + (0, _strRepeat.strRepeatjs)(padStr, Math.floor(padlen / 2));
    default:
      // 'left'
      padlen = length - str.length;
      return (0, _strRepeat.strRepeatjs)(padStr, padlen) + str;
  }
};

exports.padjs = exportedObject;
;
