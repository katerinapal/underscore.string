"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.words = undefined;

var _isBlank = require("./isBlank");

var _trim = require("./trim");

var mod_anonymus = function words(str, delimiter) {
  if ((0, _isBlank.isBlank)(str)) return [];
  return (0, _trim.trim)(str, delimiter).split(delimiter || /\s+/);
};

exports.words = mod_anonymus;
