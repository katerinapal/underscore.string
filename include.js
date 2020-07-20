"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.includejs = undefined;

var _makeString = require("./helper/makeString");

var exportedObject = function include(str, needle) {
  if (needle === '') return true;
  return (0, _makeString.makeStringjs)(str).indexOf(needle) !== -1;
};

exports.includejs = exportedObject;
