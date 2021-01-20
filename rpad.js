"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rpad = undefined;

var _pad = require("./pad");

var mod_anonymus = function rpad(str, length, padStr) {
  return (0, _pad.pad)(str, length, padStr, 'right');
};

exports.rpad = mod_anonymus;
