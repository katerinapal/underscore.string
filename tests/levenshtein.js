import assert_assert from "assert";
import { levenshteinjs as levenshtein_levenshteinjsjs } from "../levenshtein";
var equal = assert_assert.equal;

test('#levenshtein', function() {
  equal(levenshtein_levenshteinjsjs('Godfather', 'Godfather'), 0);
  equal(levenshtein_levenshteinjsjs('Godfather', 'Godfathe'), 1);
  equal(levenshtein_levenshteinjsjs('Godfather', 'odfather'), 1);
  equal(levenshtein_levenshteinjsjs('Godfather', 'godfather'), 1);
  equal(levenshtein_levenshteinjsjs('Godfather', 'Gdfthr'), 3);
  equal(levenshtein_levenshteinjsjs('seven', 'eight'), 5);
  equal(levenshtein_levenshteinjsjs('123', 123), 0);
  equal(levenshtein_levenshteinjsjs(321, '321'), 0);
  equal(levenshtein_levenshteinjsjs('lol', null), 3);
  equal(levenshtein_levenshteinjsjs('lol'), 3);
  equal(levenshtein_levenshteinjsjs(null, 'lol'), 3);
  equal(levenshtein_levenshteinjsjs(undefined, 'lol'), 3);
  equal(levenshtein_levenshteinjsjs(), 0);
});

test('#levenshtein non-latin', function() {
  equal(levenshtein_levenshteinjsjs('因為我是中國人所以我會說中文', '因為我是英國人所以我會說英文'), 2);
});
