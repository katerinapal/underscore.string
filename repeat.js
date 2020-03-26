"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeatjs = undefined;

var _makeString = require("./helper/makeString");

var _strRepeat = require("./helper/strRepeat");

var exportedObject = function repeat(str, qty, separator) {
  str = (0, _makeString.makeStringjs)(str);

  qty = ~~qty;

  // using faster implementation if separator is not needed;
  if (separator == null) return (0, _strRepeat.strRepeatjs)(str, qty);

  // this one is about 300x slower in Google Chrome
  /*eslint no-empty: 0*/
  for (var repeat = []; qty > 0; repeat[--qty] = str) {}
  return repeat.join(separator);
};

exports.repeatjs = exportedObject;
;
