'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dasherizejs = undefined;

var _trim = require('./trim');

var exportedObject = function dasherize(str) {
  return (0, _trim.trimjs)(str).replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
};

exports.dasherizejs = exportedObject;
;
