"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _words = require("../words");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deepEqual = _assert2.default.deepEqual;

test('#words', function () {
  deepEqual((0, _words.wordsjs)('I love you!'), ['I', 'love', 'you!']);
  deepEqual((0, _words.wordsjs)(' I    love   you!  '), ['I', 'love', 'you!']);
  deepEqual((0, _words.wordsjs)('I_love_you!', '_'), ['I', 'love', 'you!']);
  deepEqual((0, _words.wordsjs)('I-love-you!', /-/), ['I', 'love', 'you!']);
  deepEqual((0, _words.wordsjs)(123), ['123'], '123 number has one word "123".');
  deepEqual((0, _words.wordsjs)(0), ['0'], 'Zero number has one word "0".');
  deepEqual((0, _words.wordsjs)(''), [], 'Empty strings has no words.');
  deepEqual((0, _words.wordsjs)('   '), [], 'Blank strings has no words.');
  deepEqual((0, _words.wordsjs)(null), [], 'null has no words.');
  deepEqual((0, _words.wordsjs)(undefined), [], 'undefined has no words.');
});