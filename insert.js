"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insert = undefined;

var _splice = require("./splice");

var mod_anonymus = function insert(str, i, substr) {
  return (0, _splice.splice)(str, i, 0, substr);
};

exports.insert = mod_anonymus = function insert(str, i, substr) {
  return (0, _splice.splice)(str, i, 0, substr);
};
exports.insert = mod_anonymus;
