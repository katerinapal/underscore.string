"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanjs = undefined;

var _trim = require("./trim");

var exportedObject = function clean(str) {
  return (0, _trim.trimjs)(str).replace(/\s\s+/g, ' ');
};

exports.cleanjs = exportedObject;
