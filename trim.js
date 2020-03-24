"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trimjs = undefined;

var _makeString = require("./helper/makeString");

var _defaultToWhiteSpace = require("./helper/defaultToWhiteSpace");

var nativeTrim = String.prototype.trim;

var exportedObject = function trim(str, characters) {
  str = (0, _makeString.makeStringjs)(str);
  if (!characters && nativeTrim) return nativeTrim.call(str);
  characters = (0, _defaultToWhiteSpace.defaultToWhiteSpacejs)(characters);
  return str.replace(new RegExp('^' + characters + '+|' + characters + '+$', 'g'), '');
};

exports.trimjs = exportedObject;
;
