import ext_assert from "assert";
import { splice as splice_splice } from "../splice";
var equal = ext_assert.equal;


test('#splice', function(){
  equal(splice_splice('https://edtsech@bitbucket.org/edtsech/underscore.strings', 30, 7, 'epeli'),
         'https://edtsech@bitbucket.org/epeli/underscore.strings');
  equal(splice_splice(12345, 1, 2, 321), '132145', 'Non strings');
});

