"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var exportedObject = function lines(str) {
  if (str == null) return [];
  return String(str).split(/\r\n?|\n/);
};

exports.linesjs = exportedObject;
;
