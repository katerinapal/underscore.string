'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = undefined;

var _makeString = require('./helper/makeString');

var mod_anonymus = function mod_anonymus(str, callback) {
  str = (0, _makeString.makeString)(str);

  if (str.length === 0 || typeof callback !== 'function') return str;

  return str.replace(/./g, callback);
};

exports.map = mod_anonymus = function mod_anonymus(str, callback) {
  str = (0, _makeString.makeString)(str);

  if (str.length === 0 || typeof callback !== 'function') return str;

  return str.replace(/./g, callback);
};
exports.map = mod_anonymus;
