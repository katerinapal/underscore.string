"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strLeftBack = undefined;

var _makeString = require("./helper/makeString");

var mod_anonymus = function strLeftBack(str, sep) {
  str = (0, _makeString.makeString)(str);
  sep = (0, _makeString.makeString)(sep);
  var pos = str.lastIndexOf(sep);
  return ~pos ? str.slice(0, pos) : str;
};

exports.strLeftBack = mod_anonymus;
