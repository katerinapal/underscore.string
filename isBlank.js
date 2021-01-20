"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBlank = undefined;

var _makeString = require("./helper/makeString");

var mod_anonymus = function isBlank(str) {
  return (/^\s*$/.test((0, _makeString.makeString)(str))
  );
};

exports.isBlank = mod_anonymus;
