"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var exportedObject = function exportedObject() {
  var result = {};

  for (var prop in this) {
    if (!this.hasOwnProperty(prop) || prop.match(/^(?:include|contains|reverse|join|map|wrap)$/)) continue;
    result[prop] = this[prop];
  }

  return result;
};

exports.exportsjs = exportedObject;
;
