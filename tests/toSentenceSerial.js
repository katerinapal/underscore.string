"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _toSentenceSerial = require("../toSentenceSerial");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#toSentenceSerial', function () {
  equal((0, _toSentenceSerial.toSentenceSerialjs)(['jQuery']), 'jQuery');
  equal((0, _toSentenceSerial.toSentenceSerialjs)(['jQuery', 'MooTools']), 'jQuery and MooTools');
  equal((0, _toSentenceSerial.toSentenceSerialjs)(['jQuery', 'MooTools', 'Prototype']), 'jQuery, MooTools, and Prototype');
});