import { succ as succ_succ } from "../succ";
var encapsulated_anonymus;

encapsulated_anonymus = function() {
  var letter = 'a', alphabet = [];

  for (var i=0; i < 26; i++) {
    alphabet.push(letter);
    letter = succ_succ(letter);
  }

  return alphabet;
};
