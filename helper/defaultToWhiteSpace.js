'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultToWhiteSpacejs = undefined;

var _escapeRegExp = require('./escapeRegExp');

var exportedObject = function defaultToWhiteSpace(characters) {
  if (characters == null) return '\\s';else if (characters.source) return characters.source;else return '[' + (0, _escapeRegExp.escapeRegExpjs)(characters) + ']';
};

exports.defaultToWhiteSpacejs = exportedObject;