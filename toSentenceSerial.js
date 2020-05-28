"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toSentenceSerialjs = undefined;

var _toSentence = require("./toSentence");

var exportedObject = function toSentenceSerial(array, sep, lastSep) {
  return (0, _toSentence.toSentencejs)(array, sep, lastSep, true);
};

exports.toSentenceSerialjs = exportedObject;
