"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wordsjs = undefined;

var _isBlank = require("./isBlank");

var _trim = require("./trim");

var exportedObject = function words(str, delimiter) {
  if ((0, _isBlank.isBlankjs)(str)) return [];
  return (0, _trim.trimjs)(str, delimiter).split(delimiter || /\s+/);
};

exports.wordsjs = exportedObject;
