"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strRight = undefined;

var _makeString = require("./helper/makeString");

var mod_anonymus = function strRight(str, sep) {
  str = (0, _makeString.makeString)(str);
  sep = (0, _makeString.makeString)(sep);
  var pos = !sep ? -1 : str.indexOf(sep);
  return ~pos ? str.slice(pos + sep.length, str.length) : str;
};

exports.strRight = mod_anonymus;
