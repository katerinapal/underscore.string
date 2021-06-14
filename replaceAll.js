'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceAll = undefined;

var _makeString = require('./helper/makeString');

var mod_anonymus = function replaceAll(str, find, replace, ignorecase) {
  var flags = ignorecase === true ? 'gi' : 'g';
  var reg = new RegExp(find, flags);

  return (0, _makeString.makeString)(str).replace(reg, replace);
};

exports.replaceAll = mod_anonymus = function replaceAll(str, find, replace, ignorecase) {
  var flags = ignorecase === true ? 'gi' : 'g';
  var reg = new RegExp(find, flags);

  return (0, _makeString.makeString)(str).replace(reg, replace);
};
exports.replaceAll = mod_anonymus;
