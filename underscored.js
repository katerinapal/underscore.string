'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.underscored = undefined;

var _trim = require('./trim');

var mod_anonymus = function underscored(str) {
  return (0, _trim.trim)(str).replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
};

exports.underscored = mod_anonymus;
