"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.count = undefined;

var _makeString = require("./helper/makeString");

var mod_anonymus = function mod_anonymus(str, substr) {
  str = (0, _makeString.makeString)(str);
  substr = (0, _makeString.makeString)(substr);

  if (str.length === 0 || substr.length === 0) return 0;

  return str.split(substr).length - 1;
};

exports.count = mod_anonymus = function mod_anonymus(str, substr) {
  str = (0, _makeString.makeString)(str);
  substr = (0, _makeString.makeString)(substr);

  if (str.length === 0 || substr.length === 0) return 0;

  return str.split(substr).length - 1;
};
exports.count = mod_anonymus;
