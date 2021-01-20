"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stripTags = undefined;

var _makeString = require("./helper/makeString");

var mod_anonymus = function stripTags(str) {
  return (0, _makeString.makeString)(str).replace(/<\/?[^>]+>/g, '');
};

exports.stripTags = mod_anonymus;
