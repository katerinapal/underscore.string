"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ltrimjs = undefined;

var _makeString = require("./helper/makeString");

var _defaultToWhiteSpace = require("./helper/defaultToWhiteSpace");

var nativeTrimLeft = String.prototype.trimLeft;

var exportedObject = function ltrim(str, characters) {
  str = (0, _makeString.makeStringjs)(str);
  if (!characters && nativeTrimLeft) return nativeTrimLeft.call(str);
  characters = (0, _defaultToWhiteSpace.defaultToWhiteSpacejs)(characters);
  return str.replace(new RegExp('^' + characters + '+'), '');
};

exports.ltrimjs = exportedObject;
