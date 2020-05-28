"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prunejs = undefined;

var _makeString = require("./helper/makeString");

var _rtrim = require("./rtrim");

var exportedObject = function prune(str, length, pruneStr) {
  str = (0, _makeString.makeStringjs)(str);
  length = ~~length;
  pruneStr = pruneStr != null ? String(pruneStr) : '...';

  if (str.length <= length) return str;

  var tmpl = function tmpl(c) {
    return c.toUpperCase() !== c.toLowerCase() ? 'A' : ' ';
  },
      template = str.slice(0, length + 1).replace(/.(?=\W*\w*$)/g, tmpl); // 'Hello, world' -> 'HellAA AAAAA'

  if (template.slice(template.length - 2).match(/\w\w/)) template = template.replace(/\s*\S+$/, '');else template = (0, _rtrim.rtrimjs)(template.slice(0, template.length - 1));

  return (template + pruneStr).length > str.length ? str : str.slice(0, template.length) + pruneStr;
};

exports.prunejs = exportedObject;
