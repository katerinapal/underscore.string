"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _slugify = require("../slugify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#slugify', function () {
  equal((0, _slugify.slugifyjs)('Jack & Jill like numbers 1,2,3 and 4 and silly characters ?%.$!/'), 'jack-jill-like-numbers-1-2-3-and-4-and-silly-characters');
  equal((0, _slugify.slugifyjs)('Un éléphant à l\'orée du bois'), 'un-elephant-a-l-oree-du-bois');
  equal((0, _slugify.slugifyjs)('I know latin characters: á í ó ú ç ã õ ñ ü ă ș ț'), 'i-know-latin-characters-a-i-o-u-c-a-o-n-u-a-s-t');
  equal((0, _slugify.slugifyjs)('I am a word too, even though I am but a single letter: i!'), 'i-am-a-word-too-even-though-i-am-but-a-single-letter-i');
  equal((0, _slugify.slugifyjs)('Some asian 天地人 characters'), 'some-asian-characters');
  equal((0, _slugify.slugifyjs)('SOME Capital Letters'), 'some-capital-letters');
  equal((0, _slugify.slugifyjs)(''), '');
  equal((0, _slugify.slugifyjs)(null), '');
  equal((0, _slugify.slugifyjs)(undefined), '');
});
