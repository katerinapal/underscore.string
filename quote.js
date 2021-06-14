'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quote = undefined;

var _surround = require('./surround');

var mod_anonymus = function quote(str, quoteChar) {
  return (0, _surround.surround)(str, quoteChar || '"');
};

exports.quote = mod_anonymus = function quote(str, quoteChar) {
  return (0, _surround.surround)(str, quoteChar || '"');
};
exports.quote = mod_anonymus;
