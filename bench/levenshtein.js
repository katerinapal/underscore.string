import { levenshtein as levenshtein_levenshtein } from "../levenshtein";
var encapsulated_anonymus;

encapsulated_anonymus = function() {
  levenshtein_levenshtein('pineapple', 'potato');
  levenshtein_levenshtein('seven', 'eight');
  levenshtein_levenshtein('the very same string', 'the very same string');
  levenshtein_levenshtein('very very very long string', 'something completely different');
};
