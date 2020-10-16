"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeRegExpjs = undefined;

var _makeString = require("./makeString");

var exportedObject = function escapeRegExp(str) {
  return (0, _makeString.makeStringjs)(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};

exports.escapeRegExpjs = exportedObject;