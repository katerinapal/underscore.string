"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strLeft = undefined;

var _makeString = require("./helper/makeString");

var mod_anonymus = function strLeft(str, sep) {
  str = (0, _makeString.makeString)(str);
  sep = (0, _makeString.makeString)(sep);
  var pos = !sep ? -1 : str.indexOf(sep);
  return ~pos ? str.slice(0, pos) : str;
};

exports.strLeft = mod_anonymus = function strLeft(str, sep) {
  str = (0, _makeString.makeString)(str);
  sep = (0, _makeString.makeString)(sep);
  var pos = !sep ? -1 : str.indexOf(sep);
  return ~pos ? str.slice(0, pos) : str;
};
exports.strLeft = mod_anonymus;
