"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lrpadjs = undefined;

var _pad = require("./pad");

var exportedObject = function lrpad(str, length, padStr) {
  return (0, _pad.padjs)(str, length, padStr, 'both');
};

exports.lrpadjs = exportedObject;
