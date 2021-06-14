import ext_assert from "assert";
import { toSentenceSerial as toSentenceSerial_toSentenceSerial } from "../toSentenceSerial";
var equal = ext_assert.equal;


test('#toSentenceSerial', function (){
  equal(toSentenceSerial_toSentenceSerial(['jQuery']), 'jQuery');
  equal(toSentenceSerial_toSentenceSerial(['jQuery', 'MooTools']), 'jQuery and MooTools');
  equal(toSentenceSerial_toSentenceSerial(['jQuery', 'MooTools', 'Prototype']), 'jQuery, MooTools, and Prototype');
});

