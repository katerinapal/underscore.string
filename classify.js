"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classify = undefined;

var _capitalize = require("./capitalize");

var _camelize = require("./camelize");

var _makeString = require("./helper/makeString");

var mod_anonymus = function classify(str) {
  str = (0, _makeString.makeString)(str);
  return (0, _capitalize.capitalize)((0, _camelize.camelize)(str.replace(/[\W_]/g, ' ')).replace(/\s/g, ''));
};

exports.classify = mod_anonymus;
