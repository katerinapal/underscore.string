"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startsWithjs = undefined;

var _makeString = require("./helper/makeString");

var _toPositive = require("./helper/toPositive");

var exportedObject = function startsWith(str, starts, position) {
  str = (0, _makeString.makeStringjs)(str);
  starts = '' + starts;
  position = position == null ? 0 : Math.min((0, _toPositive.toPositivejs)(position), str.length);
  return str.lastIndexOf(starts, position) === position;
};

exports.startsWithjs = exportedObject;
;
