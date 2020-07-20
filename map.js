"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapjs = undefined;

var _makeString = require("./helper/makeString");

var exportedObject = function exportedObject(str, callback) {
  str = (0, _makeString.makeStringjs)(str);

  if (str.length === 0 || typeof callback !== 'function') return str;

  return str.replace(/./g, callback);
};

exports.mapjs = exportedObject;
