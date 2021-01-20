'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toSentence = undefined;

var _rtrim = require('./rtrim');

var mod_anonymus = function toSentence(array, separator, lastSeparator, serial) {
  separator = separator || ', ';
  lastSeparator = lastSeparator || ' and ';
  var a = array.slice(),
      lastMember = a.pop();

  if (array.length > 2 && serial) lastSeparator = (0, _rtrim.rtrim)(separator) + lastSeparator;

  return a.length ? a.join(separator) + lastSeparator + lastMember : lastMember;
};

exports.toSentence = mod_anonymus;
