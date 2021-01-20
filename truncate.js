"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.truncate = undefined;

var _makeString = require("./helper/makeString");

var mod_anonymus = function truncate(str, length, truncateStr) {
  str = (0, _makeString.makeString)(str);
  truncateStr = truncateStr || '...';
  length = ~~length;
  return str.length > length ? str.slice(0, length) + truncateStr : str;
};

exports.truncate = mod_anonymus;
