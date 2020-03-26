"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.truncatejs = undefined;

var _makeString = require("./helper/makeString");

var exportedObject = function truncate(str, length, truncateStr) {
  str = (0, _makeString.makeStringjs)(str);
  truncateStr = truncateStr || '...';
  length = ~~length;
  return str.length > length ? str.slice(0, length) + truncateStr : str;
};

exports.truncatejs = exportedObject;
;
