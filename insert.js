"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertjs = undefined;

var _splice = require("./splice");

var exportedObject = function insert(str, i, substr) {
  return (0, _splice.splicejs)(str, i, 0, substr);
};

exports.insertjs = exportedObject;
;
