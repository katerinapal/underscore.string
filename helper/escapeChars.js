'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* We're explicitly defining the list of entities we want to escape.
nbsp is an HTML entity, but we don't want to escape all space characters in a string, hence its omission in this map.

*/
var escapeChars = {
  '¢': 'cent',
  '£': 'pound',
  '¥': 'yen',
  '€': 'euro',
  '©': 'copy',
  '®': 'reg',
  '<': 'lt',
  '>': 'gt',
  '"': 'quot',
  '&': 'amp',
  '\'': '#39'
};

var mod_escapeChars;

exports.escapeChars = mod_escapeChars = escapeChars;
exports.escapeChars = mod_escapeChars;