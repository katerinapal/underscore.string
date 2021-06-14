"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _toSentence = require("../toSentence");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#toSentence', function () {
  equal((0, _toSentence.toSentence)(['jQuery']), 'jQuery', 'array with a single element');
  equal((0, _toSentence.toSentence)(['jQuery', 'MooTools']), 'jQuery and MooTools', 'array with two elements');
  equal((0, _toSentence.toSentence)(['jQuery', 'MooTools', 'Prototype']), 'jQuery, MooTools and Prototype', 'array with three elements');
  equal((0, _toSentence.toSentence)(['jQuery', 'MooTools', 'Prototype', 'YUI']), 'jQuery, MooTools, Prototype and YUI', 'array with multiple elements');
  equal((0, _toSentence.toSentence)(['jQuery', 'MooTools', 'Prototype'], ',', ' or '), 'jQuery,MooTools or Prototype', 'handles custom separators');
});