"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalize = undefined;

var _makeString = require("./helper/makeString");

var mod_anonymus = function capitalize(str, lowercaseRest) {
  str = (0, _makeString.makeString)(str);
  var remainingChars = !lowercaseRest ? str.slice(1) : str.slice(1).toLowerCase();

  return str.charAt(0).toUpperCase() + remainingChars;
};

exports.capitalize = mod_anonymus = function capitalize(str, lowercaseRest) {
  str = (0, _makeString.makeString)(str);
  var remainingChars = !lowercaseRest ? str.slice(1) : str.slice(1).toLowerCase();

  return str.charAt(0).toUpperCase() + remainingChars;
};
exports.capitalize = mod_anonymus;
