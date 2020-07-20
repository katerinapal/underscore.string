"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strLeftBackjs = undefined;

var _makeString = require("./helper/makeString");

var exportedObject = function strLeftBack(str, sep) {
  str = (0, _makeString.makeStringjs)(str);
  sep = (0, _makeString.makeStringjs)(sep);
  var pos = str.lastIndexOf(sep);
  return ~pos ? str.slice(0, pos) : str;
};

exports.strLeftBackjs = exportedObject;
