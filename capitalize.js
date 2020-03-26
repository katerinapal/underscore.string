"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalizejs = undefined;

var _makeString = require("./helper/makeString");

var exportedObject = function capitalize(str, lowercaseRest) {
  str = (0, _makeString.makeStringjs)(str);
  var remainingChars = !lowercaseRest ? str.slice(1) : str.slice(1).toLowerCase();

  return str.charAt(0).toUpperCase() + remainingChars;
};

exports.capitalizejs = exportedObject;
;
