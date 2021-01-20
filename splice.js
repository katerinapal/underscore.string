"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splice = undefined;

var _chars = require("./chars");

var mod_anonymus = function splice(str, i, howmany, substr) {
  var arr = (0, _chars.chars)(str);
  arr.splice(~~i, ~~howmany, substr);
  return arr.join('');
};

exports.splice = mod_anonymus;
