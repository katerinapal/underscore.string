"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clean = undefined;

var _trim = require("./trim");

var mod_anonymus = function clean(str) {
  return (0, _trim.trim)(str).replace(/\s\s+/g, ' ');
};

exports.clean = mod_anonymus;
