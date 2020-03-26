'use strict';

var _levenshtein = require('../levenshtein');

var encapsulated_anonymus;

encapsulated_anonymus = function encapsulated_anonymus() {
  (0, _levenshtein.levenshteinjs)('pineapple', 'potato');
  (0, _levenshtein.levenshteinjs)('seven', 'eight');
  (0, _levenshtein.levenshteinjs)('the very same string', 'the very same string');
  (0, _levenshtein.levenshteinjs)('very very very long string', 'something completely different');
};
