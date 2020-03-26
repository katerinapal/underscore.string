"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stripTagsjs = undefined;

var _makeString = require("./helper/makeString");

var exportedObject = function stripTags(str) {
  return (0, _makeString.makeStringjs)(str).replace(/<\/?[^>]+>/g, '');
};

exports.stripTagsjs = exportedObject;
;
