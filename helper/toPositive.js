"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var exportedObject = function toPositive(number) {
  return number < 0 ? 0 : +number || 0;
};

exports.toPositivejs = exportedObject;