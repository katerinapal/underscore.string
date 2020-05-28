"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rtrimjs = undefined;

var _makeString = require("./helper/makeString");

var _defaultToWhiteSpace = require("./helper/defaultToWhiteSpace");

var nativeTrimRight = String.prototype.trimRight;

var exportedObject = function rtrim(str, characters) {
  str = (0, _makeString.makeStringjs)(str);
  if (!characters && nativeTrimRight) return nativeTrimRight.call(str);
  characters = (0, _defaultToWhiteSpace.defaultToWhiteSpacejs)(characters);
  return str.replace(new RegExp(characters + '+$'), '');
};

exports.rtrimjs = exportedObject;
