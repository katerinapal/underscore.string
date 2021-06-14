'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.include = undefined;

var _makeString = require('./helper/makeString');

var mod_anonymus = function include(str, needle) {
  if (needle === '') return true;
  return (0, _makeString.makeString)(str).indexOf(needle) !== -1;
};

exports.include = mod_anonymus = function include(str, needle) {
  if (needle === '') return true;
  return (0, _makeString.makeString)(str).indexOf(needle) !== -1;
};
exports.include = mod_anonymus;
