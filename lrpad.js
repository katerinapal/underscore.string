"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lrpad = undefined;

var _pad = require("./pad");

var mod_anonymus = function lrpad(str, length, padStr) {
  return (0, _pad.pad)(str, length, padStr, 'both');
};

exports.lrpad = mod_anonymus;
