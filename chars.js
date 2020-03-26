"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.charsjs = undefined;

var _makeString = require("./helper/makeString");

var exportedObject = function chars(str) {
  return (0, _makeString.makeStringjs)(str).split('');
};

exports.charsjs = exportedObject;
;
