"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.predjs = undefined;

var _adjacent = require("./helper/adjacent");

var exportedObject = function succ(str) {
  return (0, _adjacent.adjacentjs)(str, -1);
};

exports.predjs = exportedObject;
