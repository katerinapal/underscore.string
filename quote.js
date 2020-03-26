"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quotejs = undefined;

var _surround = require("./surround");

var exportedObject = function quote(str, quoteChar) {
  return (0, _surround.surroundjs)(str, quoteChar || '"');
};

exports.quotejs = exportedObject;
;
