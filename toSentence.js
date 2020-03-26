'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toSentencejs = undefined;

var _rtrim = require('./rtrim');

var exportedObject = function toSentence(array, separator, lastSeparator, serial) {
  separator = separator || ', ';
  lastSeparator = lastSeparator || ' and ';
  var a = array.slice(),
      lastMember = a.pop();

  if (array.length > 2 && serial) lastSeparator = (0, _rtrim.rtrimjs)(separator) + lastSeparator;

  return a.length ? a.join(separator) + lastSeparator + lastMember : lastMember;
};

exports.toSentencejs = exportedObject;
;
