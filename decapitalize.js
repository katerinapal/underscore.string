"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decapitalize = undefined;

var _makeString = require("./helper/makeString");

var mod_anonymus = function decapitalize(str) {
  str = (0, _makeString.makeString)(str);
  return str.charAt(0).toLowerCase() + str.slice(1);
};

exports.decapitalize = mod_anonymus;
