"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endsWith = undefined;

var _makeString = require("./helper/makeString");

var _toPositive = require("./helper/toPositive");

var mod_anonymus = function endsWith(str, ends, position) {
  str = (0, _makeString.makeString)(str);
  ends = '' + ends;
  if (typeof position == 'undefined') {
    position = str.length - ends.length;
  } else {
    position = Math.min((0, _toPositive.toPositive)(position), str.length) - ends.length;
  }
  return position >= 0 && str.indexOf(ends, position) === position;
};

exports.endsWith = mod_anonymus;
