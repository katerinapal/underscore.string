"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slugify = undefined;

var _trim = require("./trim");

var _dasherize = require("./dasherize");

var _cleanDiacritics = require("./cleanDiacritics");

var mod_anonymus = function slugify(str) {
  return (0, _trim.trim)((0, _dasherize.dasherize)((0, _cleanDiacritics.cleanDiacritics)(str).replace(/[^\w\s-]/g, '-').toLowerCase()), '-');
};

exports.slugify = mod_anonymus = function slugify(str) {
  return (0, _trim.trim)((0, _dasherize.dasherize)((0, _cleanDiacritics.cleanDiacritics)(str).replace(/[^\w\s-]/g, '-').toLowerCase()), '-');
};
exports.slugify = mod_anonymus;
