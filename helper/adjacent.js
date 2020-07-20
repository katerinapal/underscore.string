"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adjacentjs = undefined;

var _makeString = require("./makeString");

var exportedObject = function adjacent(str, direction) {
  str = (0, _makeString.makeStringjs)(str);
  if (str.length === 0) {
    return '';
  }
  return str.slice(0, -1) + String.fromCharCode(str.charCodeAt(str.length - 1) + direction);
};

exports.adjacentjs = exportedObject;