import assert_assert from "assert";
import { slugifyjs as slugify_slugifyjsjs } from "../slugify";
var equal = assert_assert.equal;


test('#slugify', function() {
  equal(slugify_slugifyjsjs('Jack & Jill like numbers 1,2,3 and 4 and silly characters ?%.$!/'), 'jack-jill-like-numbers-1-2-3-and-4-and-silly-characters');
  equal(slugify_slugifyjsjs('Un éléphant à l\'orée du bois'), 'un-elephant-a-l-oree-du-bois');
  equal(slugify_slugifyjsjs('I know latin characters: á í ó ú ç ã õ ñ ü ă ș ț'), 'i-know-latin-characters-a-i-o-u-c-a-o-n-u-a-s-t');
  equal(slugify_slugifyjsjs('I am a word too, even though I am but a single letter: i!'), 'i-am-a-word-too-even-though-i-am-but-a-single-letter-i');
  equal(slugify_slugifyjsjs('Some asian 天地人 characters'), 'some-asian-characters');
  equal(slugify_slugifyjsjs('SOME Capital Letters'), 'some-capital-letters');
  equal(slugify_slugifyjsjs(''), '');
  equal(slugify_slugifyjsjs(null), '');
  equal(slugify_slugifyjsjs(undefined), '');
});

