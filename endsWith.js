"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endsWithjs = undefined;

var _makeString = require("./helper/makeString");

var _toPositive = require("./helper/toPositive");

var exportedObject = function endsWith(str, ends, position) {
  str = (0, _makeString.makeStringjs)(str);
  ends = '' + ends;
  if (typeof position == 'undefined') {
    position = str.length - ends.length;
  } else {
    position = Math.min((0, _toPositive.toPositivejs)(position), str.length) - ends.length;
  }
  return position >= 0 && str.indexOf(ends, position) === position;
};

exports.endsWithjs = exportedObject;
