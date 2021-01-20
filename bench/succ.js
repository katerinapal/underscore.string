"use strict";

var _succ = require("../succ");

var encapsulated_anonymus;

encapsulated_anonymus = function encapsulated_anonymus() {
  var letter = 'a',
      alphabet = [];

  for (var i = 0; i < 26; i++) {
    alphabet.push(letter);
    letter = (0, _succ.succ)(letter);
  }

  return alphabet;
};