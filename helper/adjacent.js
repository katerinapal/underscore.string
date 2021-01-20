"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adjacent = undefined;

var _makeString = require("./makeString");

var mod_anonymus = function adjacent(str, direction) {
  str = (0, _makeString.makeString)(str);
  if (str.length === 0) {
    return '';
  }
  return str.slice(0, -1) + String.fromCharCode(str.charCodeAt(str.length - 1) + direction);
};

exports.adjacent = mod_anonymus;