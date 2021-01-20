"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mod_anonymus = function lines(str) {
  if (str == null) return [];
  return String(str).split(/\r\n?|\n/);
};

exports.lines = mod_anonymus;
