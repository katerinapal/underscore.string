"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBlankjs = undefined;

var _makeString = require("./helper/makeString");

var exportedObject = function isBlank(str) {
  return (/^\s*$/.test((0, _makeString.makeStringjs)(str))
  );
};

exports.isBlankjs = exportedObject;
