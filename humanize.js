"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.humanizejs = undefined;

var _capitalize = require("./capitalize");

var _trim = require("./trim");

var underscored = {};

var exportedObject = function humanize(str) {
  return (0, _capitalize.capitalizejs)((0, _trim.trimjs)(underscored(str).replace(/_id$/, '').replace(/_/g, ' ')));
};

exports.humanizejs = exportedObject;
;
