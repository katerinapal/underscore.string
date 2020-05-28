'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceAlljs = undefined;

var _makeString = require('./helper/makeString');

var exportedObject = function replaceAll(str, find, replace, ignorecase) {
  var flags = ignorecase === true ? 'gi' : 'g';
  var reg = new RegExp(find, flags);

  return (0, _makeString.makeStringjs)(str).replace(reg, replace);
};

exports.replaceAlljs = exportedObject;
