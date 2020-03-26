"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.humanizejs = undefined;

var _capitalize = require("./capitalize");

var _underscored = require("./underscored");

var _trim = require("./trim");

var exportedObject = function humanize(str) {
  return (0, _capitalize.capitalizejs)((0, _trim.trimjs)((0, _underscored.underscoredjs)(str).replace(/_id$/, '').replace(/_/g, ' ')));
};

exports.humanizejs = exportedObject;
;
