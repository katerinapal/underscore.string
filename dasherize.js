'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dasherize = undefined;

var _trim = require('./trim');

var mod_anonymus = function dasherize(str) {
  return (0, _trim.trim)(str).replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
};

exports.dasherize = mod_anonymus;
