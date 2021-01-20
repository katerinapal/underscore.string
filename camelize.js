"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.camelize = undefined;

var _trim = require("./trim");

var _decapitalize = require("./decapitalize");

var mod_anonymus = function camelize(str, decapitalize) {
  str = (0, _trim.trim)(str).replace(/[-_\s]+(.)?/g, function (match, c) {
    return c ? c.toUpperCase() : '';
  });

  if (decapitalize === true) {
    return (0, _decapitalize.decapitalize)(str);
  } else {
    return str;
  }
};

exports.camelize = mod_anonymus;
