"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ltrim = undefined;

var _makeString = require("./helper/makeString");

var _defaultToWhiteSpace = require("./helper/defaultToWhiteSpace");

var nativeTrimLeft = String.prototype.trimLeft;

var mod_anonymus = function ltrim(str, characters) {
  str = (0, _makeString.makeString)(str);
  if (!characters && nativeTrimLeft) return nativeTrimLeft.call(str);
  characters = (0, _defaultToWhiteSpace.defaultToWhiteSpace)(characters);
  return str.replace(new RegExp('^' + characters + '+'), '');
};

exports.ltrim = mod_anonymus;
