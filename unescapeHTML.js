"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unescapeHTML = undefined;

var _makeString = require("./helper/makeString");

var _htmlEntities = require("./helper/htmlEntities");

var mod_anonymus = function unescapeHTML(str) {
  return (0, _makeString.makeString)(str).replace(/\&([^;]+);/g, function (entity, entityCode) {
    var match;

    if (entityCode in _htmlEntities.htmlEntities) {
      return _htmlEntities.htmlEntities[entityCode];
      /*eslint no-cond-assign: 0*/
    } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
      return String.fromCharCode(parseInt(match[1], 16));
      /*eslint no-cond-assign: 0*/
    } else if (match = entityCode.match(/^#(\d+)$/)) {
      return String.fromCharCode(~~match[1]);
    } else {
      return entity;
    }
  });
};

exports.unescapeHTML = mod_anonymus = function unescapeHTML(str) {
  return (0, _makeString.makeString)(str).replace(/\&([^;]+);/g, function (entity, entityCode) {
    var match;

    if (entityCode in _htmlEntities.htmlEntities) {
      return _htmlEntities.htmlEntities[entityCode];
      /*eslint no-cond-assign: 0*/
    } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
      return String.fromCharCode(parseInt(match[1], 16));
      /*eslint no-cond-assign: 0*/
    } else if (match = entityCode.match(/^#(\d+)$/)) {
      return String.fromCharCode(~~match[1]);
    } else {
      return entity;
    }
  });
};
exports.unescapeHTML = mod_anonymus;
