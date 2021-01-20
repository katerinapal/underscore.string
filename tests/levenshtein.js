"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _levenshtein = require("../levenshtein");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#levenshtein', function () {
  equal((0, _levenshtein.levenshtein)('Godfather', 'Godfather'), 0);
  equal((0, _levenshtein.levenshtein)('Godfather', 'Godfathe'), 1);
  equal((0, _levenshtein.levenshtein)('Godfather', 'odfather'), 1);
  equal((0, _levenshtein.levenshtein)('Godfather', 'godfather'), 1);
  equal((0, _levenshtein.levenshtein)('Godfather', 'Gdfthr'), 3);
  equal((0, _levenshtein.levenshtein)('seven', 'eight'), 5);
  equal((0, _levenshtein.levenshtein)('123', 123), 0);
  equal((0, _levenshtein.levenshtein)(321, '321'), 0);
  equal((0, _levenshtein.levenshtein)('lol', null), 3);
  equal((0, _levenshtein.levenshtein)('lol'), 3);
  equal((0, _levenshtein.levenshtein)(null, 'lol'), 3);
  equal((0, _levenshtein.levenshtein)(undefined, 'lol'), 3);
  equal((0, _levenshtein.levenshtein)(), 0);
});

test('#levenshtein non-latin', function () {
  equal((0, _levenshtein.levenshtein)('因為我是中國人所以我會說中文', '因為我是英國人所以我會說英文'), 2);
});