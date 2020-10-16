"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.camelizejs = undefined;

var _trim = require("./trim");

var _decapitalize = require("./decapitalize");

var exportedObject = function camelize(str, decapitalize) {
  str = (0, _trim.trimjs)(str).replace(/[-_\s]+(.)?/g, function (match, c) {
    return c ? c.toUpperCase() : '';
  });

  if (decapitalize === true) {
    return (0, _decapitalize.decapitalizejs)(str);
  } else {
    return str;
  }
};

exports.camelizejs = exportedObject;
