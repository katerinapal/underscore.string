'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mod_anonymus = function surround(str, wrapper) {
  return [wrapper, str, wrapper].join('');
};

exports.surround = mod_anonymus;
