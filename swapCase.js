"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swapCase = undefined;

var _makeString = require("./helper/makeString");

var mod_anonymus = function swapCase(str) {
  return (0, _makeString.makeString)(str).replace(/\S/g, function (c) {
    return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
  });
};

exports.swapCase = mod_anonymus;
