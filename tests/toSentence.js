import ext_assert_assert from "assert";
import { toSentencejs as toSentence_toSentencejsjs } from "../toSentence";
var equal = ext_assert_assert.equal;


test('#toSentence', function() {
  equal(toSentence_toSentencejsjs(['jQuery']), 'jQuery', 'array with a single element');
  equal(toSentence_toSentencejsjs(['jQuery', 'MooTools']), 'jQuery and MooTools', 'array with two elements');
  equal(toSentence_toSentencejsjs(['jQuery', 'MooTools', 'Prototype']), 'jQuery, MooTools and Prototype', 'array with three elements');
  equal(toSentence_toSentencejsjs(['jQuery', 'MooTools', 'Prototype', 'YUI']), 'jQuery, MooTools, Prototype and YUI', 'array with multiple elements');
  equal(toSentence_toSentencejsjs(['jQuery', 'MooTools', 'Prototype'], ',', ' or '), 'jQuery,MooTools or Prototype', 'handles custom separators');
});

