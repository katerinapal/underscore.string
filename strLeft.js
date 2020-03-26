"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strLeftjs = undefined;

var _makeString = require("./helper/makeString");

var exportedObject = function strLeft(str, sep) {
  str = (0, _makeString.makeStringjs)(str);
  sep = (0, _makeString.makeStringjs)(sep);
  var pos = !sep ? -1 : str.indexOf(sep);
  return ~pos ? str.slice(0, pos) : str;
};

exports.strLeftjs = exportedObject;
;
