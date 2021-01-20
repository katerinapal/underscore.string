'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultToWhiteSpace = undefined;

var _escapeRegExp = require('./escapeRegExp');

var mod_anonymus = function defaultToWhiteSpace(characters) {
  if (characters == null) return '\\s';else if (characters.source) return characters.source;else return '[' + (0, _escapeRegExp.escapeRegExp)(characters) + ']';
};

exports.defaultToWhiteSpace = mod_anonymus;