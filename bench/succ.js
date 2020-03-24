import { succjs as succ_succjsjs } from "../succ";
var encapsulated_anonymus;

encapsulated_anonymus = function() {
  var letter = 'a', alphabet = [];

  for (var i=0; i < 26; i++) {
    alphabet.push(letter);
    letter = succ_succjsjs(letter);
  }

  return alphabet;
};
