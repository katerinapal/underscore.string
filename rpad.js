"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rpadjs = undefined;

var _pad = require("./pad");

var exportedObject = function rpad(str, length, padStr) {
  return (0, _pad.padjs)(str, length, padStr, 'right');
};

exports.rpadjs = exportedObject;
;
