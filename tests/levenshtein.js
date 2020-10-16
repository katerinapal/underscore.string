"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _levenshtein = require("../levenshtein");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#levenshtein', function () {
  equal((0, _levenshtein.levenshteinjs)('Godfather', 'Godfather'), 0);
  equal((0, _levenshtein.levenshteinjs)('Godfather', 'Godfathe'), 1);
  equal((0, _levenshtein.levenshteinjs)('Godfather', 'odfather'), 1);
  equal((0, _levenshtein.levenshteinjs)('Godfather', 'godfather'), 1);
  equal((0, _levenshtein.levenshteinjs)('Godfather', 'Gdfthr'), 3);
  equal((0, _levenshtein.levenshteinjs)('seven', 'eight'), 5);
  equal((0, _levenshtein.levenshteinjs)('123', 123), 0);
  equal((0, _levenshtein.levenshteinjs)(321, '321'), 0);
  equal((0, _levenshtein.levenshteinjs)('lol', null), 3);
  equal((0, _levenshtein.levenshteinjs)('lol'), 3);
  equal((0, _levenshtein.levenshteinjs)(null, 'lol'), 3);
  equal((0, _levenshtein.levenshteinjs)(undefined, 'lol'), 3);
  equal((0, _levenshtein.levenshteinjs)(), 0);
});

test('#levenshtein non-latin', function () {
  equal((0, _levenshtein.levenshteinjs)('因為我是中國人所以我會說中文', '因為我是英國人所以我會說英文'), 2);
});