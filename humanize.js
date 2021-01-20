"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.humanize = undefined;

var _capitalize = require("./capitalize");

var _underscored = require("./underscored");

var _trim = require("./trim");

var mod_anonymus = function humanize(str) {
  return (0, _capitalize.capitalize)((0, _trim.trim)((0, _underscored.underscored)(str).replace(/_id$/, '').replace(/_/g, ' ')));
};

exports.humanize = mod_anonymus;
