import ext_assert from "assert";
import { words as words_words } from "../words";
var deepEqual = ext_assert.deepEqual;


test('#words', function() {
  deepEqual(words_words('I love you!'), ['I', 'love', 'you!']);
  deepEqual(words_words(' I    love   you!  '), ['I', 'love', 'you!']);
  deepEqual(words_words('I_love_you!', '_'), ['I', 'love', 'you!']);
  deepEqual(words_words('I-love-you!', /-/), ['I', 'love', 'you!']);
  deepEqual(words_words(123), ['123'], '123 number has one word "123".');
  deepEqual(words_words(0), ['0'], 'Zero number has one word "0".');
  deepEqual(words_words(''), [], 'Empty strings has no words.');
  deepEqual(words_words('   '), [], 'Blank strings has no words.');
  deepEqual(words_words(null), [], 'null has no words.');
  deepEqual(words_words(undefined), [], 'undefined has no words.');
});

