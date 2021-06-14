"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rtrim = undefined;

var _makeString = require("./helper/makeString");

var _defaultToWhiteSpace = require("./helper/defaultToWhiteSpace");

var nativeTrimRight = String.prototype.trimRight;

var mod_anonymus = function rtrim(str, characters) {
  str = (0, _makeString.makeString)(str);
  if (!characters && nativeTrimRight) return nativeTrimRight.call(str);
  characters = (0, _defaultToWhiteSpace.defaultToWhiteSpace)(characters);
  return str.replace(new RegExp(characters + '+$'), '');
};

exports.rtrim = mod_anonymus = function rtrim(str, characters) {
  str = (0, _makeString.makeString)(str);
  if (!characters && nativeTrimRight) return nativeTrimRight.call(str);
  characters = (0, _defaultToWhiteSpace.defaultToWhiteSpace)(characters);
  return str.replace(new RegExp(characters + '+$'), '');
};
exports.rtrim = mod_anonymus;
