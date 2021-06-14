import ext_assert from "assert";
import { toSentence as toSentence_toSentence } from "../toSentence";
var equal = ext_assert.equal;


test('#toSentence', function() {
  equal(toSentence_toSentence(['jQuery']), 'jQuery', 'array with a single element');
  equal(toSentence_toSentence(['jQuery', 'MooTools']), 'jQuery and MooTools', 'array with two elements');
  equal(toSentence_toSentence(['jQuery', 'MooTools', 'Prototype']), 'jQuery, MooTools and Prototype', 'array with three elements');
  equal(toSentence_toSentence(['jQuery', 'MooTools', 'Prototype', 'YUI']), 'jQuery, MooTools, Prototype and YUI', 'array with multiple elements');
  equal(toSentence_toSentence(['jQuery', 'MooTools', 'Prototype'], ',', ' or '), 'jQuery,MooTools or Prototype', 'handles custom separators');
});

