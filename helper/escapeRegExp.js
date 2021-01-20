"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeRegExp = undefined;

var _makeString = require("./makeString");

var mod_anonymus = function escapeRegExp(str) {
  return (0, _makeString.makeString)(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};

exports.escapeRegExp = mod_anonymus;