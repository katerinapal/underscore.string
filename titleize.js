"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.titleizejs = undefined;

var _makeString = require("./helper/makeString");

var exportedObject = function titleize(str) {
  return (0, _makeString.makeStringjs)(str).toLowerCase().replace(/(?:^|\s|-)\S/g, function (c) {
    return c.toUpperCase();
  });
};

exports.titleizejs = exportedObject;
