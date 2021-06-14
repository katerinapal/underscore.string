"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startsWith = undefined;

var _makeString = require("./helper/makeString");

var _toPositive = require("./helper/toPositive");

var mod_anonymus = function startsWith(str, starts, position) {
  str = (0, _makeString.makeString)(str);
  starts = '' + starts;
  position = position == null ? 0 : Math.min((0, _toPositive.toPositive)(position), str.length);
  return str.lastIndexOf(starts, position) === position;
};

exports.startsWith = mod_anonymus = function startsWith(str, starts, position) {
  str = (0, _makeString.makeString)(str);
  starts = '' + starts;
  position = position == null ? 0 : Math.min((0, _toPositive.toPositive)(position), str.length);
  return str.lastIndexOf(starts, position) === position;
};
exports.startsWith = mod_anonymus;
