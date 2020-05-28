import ext_assert_assert from "assert";
import { toSentenceSerialjs as toSentenceSerial_toSentenceSerialjsjs } from "../toSentenceSerial";
var equal = ext_assert_assert.equal;


test('#toSentenceSerial', function (){
  equal(toSentenceSerial_toSentenceSerialjsjs(['jQuery']), 'jQuery');
  equal(toSentenceSerial_toSentenceSerialjsjs(['jQuery', 'MooTools']), 'jQuery and MooTools');
  equal(toSentenceSerial_toSentenceSerialjsjs(['jQuery', 'MooTools', 'Prototype']), 'jQuery, MooTools, and Prototype');
});

