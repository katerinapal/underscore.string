'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var exportedObject = function surround(str, wrapper) {
  return [wrapper, str, wrapper].join('');
};

exports.surroundjs = exportedObject;
;
