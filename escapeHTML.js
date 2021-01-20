"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeHTML = undefined;

var _makeString = require("./helper/makeString");

var _escapeChars = require("./helper/escapeChars");

var regexString = '[';
for (var key in _escapeChars.escapeChars) {
  regexString += key;
}
regexString += ']';

var regex = new RegExp(regexString, 'g');

var mod_anonymus = function escapeHTML(str) {

  return (0, _makeString.makeString)(str).replace(regex, function (m) {
    return '&' + _escapeChars.escapeChars[m] + ';';
  });
};

exports.escapeHTML = mod_anonymus;
