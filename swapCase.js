"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swapCasejs = undefined;

var _makeString = require("./helper/makeString");

var exportedObject = function swapCase(str) {
  return (0, _makeString.makeStringjs)(str).replace(/\S/g, function (c) {
    return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
  });
};

exports.swapCasejs = exportedObject;
;
