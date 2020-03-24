"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countjs = undefined;

var _makeString = require("./helper/makeString");

var exportedObject = function exportedObject(str, substr) {
  str = (0, _makeString.makeStringjs)(str);
  substr = (0, _makeString.makeStringjs)(substr);

  if (str.length === 0 || substr.length === 0) return 0;

  return str.split(substr).length - 1;
};

exports.countjs = exportedObject;
;
