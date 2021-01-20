"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trim = undefined;

var _makeString = require("./helper/makeString");

var _defaultToWhiteSpace = require("./helper/defaultToWhiteSpace");

var nativeTrim = String.prototype.trim;

var mod_anonymus = function trim(str, characters) {
  str = (0, _makeString.makeString)(str);
  if (!characters && nativeTrim) return nativeTrim.call(str);
  characters = (0, _defaultToWhiteSpace.defaultToWhiteSpace)(characters);
  return str.replace(new RegExp('^' + characters + '+|' + characters + '+$', 'g'), '');
};

exports.trim = mod_anonymus;
