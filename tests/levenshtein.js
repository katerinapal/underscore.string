import ext_assert from "assert";
import { levenshtein as levenshtein_levenshtein } from "../levenshtein";
var equal = ext_assert.equal;

test('#levenshtein', function() {
  equal(levenshtein_levenshtein('Godfather', 'Godfather'), 0);
  equal(levenshtein_levenshtein('Godfather', 'Godfathe'), 1);
  equal(levenshtein_levenshtein('Godfather', 'odfather'), 1);
  equal(levenshtein_levenshtein('Godfather', 'godfather'), 1);
  equal(levenshtein_levenshtein('Godfather', 'Gdfthr'), 3);
  equal(levenshtein_levenshtein('seven', 'eight'), 5);
  equal(levenshtein_levenshtein('123', 123), 0);
  equal(levenshtein_levenshtein(321, '321'), 0);
  equal(levenshtein_levenshtein('lol', null), 3);
  equal(levenshtein_levenshtein('lol'), 3);
  equal(levenshtein_levenshtein(null, 'lol'), 3);
  equal(levenshtein_levenshtein(undefined, 'lol'), 3);
  equal(levenshtein_levenshtein(), 0);
});

test('#levenshtein non-latin', function() {
  equal(levenshtein_levenshtein('因為我是中國人所以我會說中文', '因為我是英國人所以我會說英文'), 2);
});
