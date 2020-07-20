"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strRightjs = undefined;

var _makeString = require("./helper/makeString");

var exportedObject = function strRight(str, sep) {
  str = (0, _makeString.makeStringjs)(str);
  sep = (0, _makeString.makeStringjs)(sep);
  var pos = !sep ? -1 : str.indexOf(sep);
  return ~pos ? str.slice(pos + sep.length, str.length) : str;
};

exports.strRightjs = exportedObject;
