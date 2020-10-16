'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dedentjs = undefined;

var _makeString = require('./helper/makeString');

function getIndent(str) {
  var matches = str.match(/^[\s\\t]*/gm);
  var indent = matches[0].length;

  for (var i = 1; i < matches.length; i++) {
    indent = Math.min(matches[i].length, indent);
  }

  return indent;
}

var exportedObject = function dedent(str, pattern) {
  str = (0, _makeString.makeStringjs)(str);
  var indent = getIndent(str);
  var reg;

  if (indent === 0) return str;

  if (typeof pattern === 'string') {
    reg = new RegExp('^' + pattern, 'gm');
  } else {
    reg = new RegExp('^[ \\t]{' + indent + '}', 'gm');
  }

  return str.replace(reg, '');
};

exports.dedentjs = exportedObject;
