"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splicejs = undefined;

var _chars = require("./chars");

var exportedObject = function splice(str, i, howmany, substr) {
  var arr = (0, _chars.charsjs)(str);
  arr.splice(~~i, ~~howmany, substr);
  return arr.join('');
};

exports.splicejs = exportedObject;
;
