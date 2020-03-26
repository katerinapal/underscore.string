"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slugifyjs = undefined;

var _trim = require("./trim");

var _dasherize = require("./dasherize");

var _cleanDiacritics = require("./cleanDiacritics");

var exportedObject = function slugify(str) {
  return (0, _trim.trimjs)((0, _dasherize.dasherizejs)((0, _cleanDiacritics.cleanDiacriticsjs)(str).replace(/[^\w\s-]/g, '-').toLowerCase()), '-');
};

exports.slugifyjs = exportedObject;
;
