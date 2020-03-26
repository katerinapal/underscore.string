"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reversejs = undefined;

var _chars = require("./chars");

var exportedObject = function reverse(str) {
  return (0, _chars.charsjs)(str).reverse().join('');
};

exports.reversejs = exportedObject;
;
