'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.underscoredjs = undefined;

var _trim = require('./trim');

var exportedObject = function underscored(str) {
  return (0, _trim.trimjs)(str).replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
};

exports.underscoredjs = exportedObject;
