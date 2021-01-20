'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mod_anonymus = function unquote(str, quoteChar) {
  quoteChar = quoteChar || '"';
  if (str[0] === quoteChar && str[str.length - 1] === quoteChar) return str.slice(1, str.length - 1);else return str;
};

exports.unquote = mod_anonymus;
