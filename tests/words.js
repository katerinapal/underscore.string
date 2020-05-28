import ext_assert_assert from "assert";
import { wordsjs as words_wordsjsjs } from "../words";
var deepEqual = ext_assert_assert.deepEqual;


test('#words', function() {
  deepEqual(words_wordsjsjs('I love you!'), ['I', 'love', 'you!']);
  deepEqual(words_wordsjsjs(' I    love   you!  '), ['I', 'love', 'you!']);
  deepEqual(words_wordsjsjs('I_love_you!', '_'), ['I', 'love', 'you!']);
  deepEqual(words_wordsjsjs('I-love-you!', /-/), ['I', 'love', 'you!']);
  deepEqual(words_wordsjsjs(123), ['123'], '123 number has one word "123".');
  deepEqual(words_wordsjsjs(0), ['0'], 'Zero number has one word "0".');
  deepEqual(words_wordsjsjs(''), [], 'Empty strings has no words.');
  deepEqual(words_wordsjsjs('   '), [], 'Blank strings has no words.');
  deepEqual(words_wordsjsjs(null), [], 'null has no words.');
  deepEqual(words_wordsjsjs(undefined), [], 'undefined has no words.');
});

