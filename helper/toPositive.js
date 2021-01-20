"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mod_anonymus = function toPositive(number) {
  return number < 0 ? 0 : +number || 0;
};

exports.toPositive = mod_anonymus;