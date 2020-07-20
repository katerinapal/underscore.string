"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decapitalizejs = undefined;

var _makeString = require("./helper/makeString");

var exportedObject = function decapitalize(str) {
  str = (0, _makeString.makeStringjs)(str);
  return str.charAt(0).toLowerCase() + str.slice(1);
};

exports.decapitalizejs = exportedObject;
