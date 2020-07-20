"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lpadjs = undefined;

var _pad = require("./pad");

var exportedObject = function lpad(str, length, padStr) {
  return (0, _pad.padjs)(str, length, padStr);
};

exports.lpadjs = exportedObject;
