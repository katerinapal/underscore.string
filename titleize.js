"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.titleize = undefined;

var _makeString = require("./helper/makeString");

var mod_anonymus = function titleize(str) {
  return (0, _makeString.makeString)(str).toLowerCase().replace(/(?:^|\s|-)\S/g, function (c) {
    return c.toUpperCase();
  });
};

exports.titleize = mod_anonymus;
