"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classifyjs = undefined;

var _capitalize = require("./capitalize");

var _camelize = require("./camelize");

var _makeString = require("./helper/makeString");

var exportedObject = function classify(str) {
  str = (0, _makeString.makeStringjs)(str);
  return (0, _capitalize.capitalizejs)((0, _camelize.camelizejs)(str.replace(/[\W_]/g, ' ')).replace(/\s/g, ''));
};

exports.classifyjs = exportedObject;
;
