import ext_assert_assert from "assert";
import { splicejs as splice_splicejsjs } from "../splice";
var equal = ext_assert_assert.equal;


test('#splice', function(){
  equal(splice_splicejsjs('https://edtsech@bitbucket.org/edtsech/underscore.strings', 30, 7, 'epeli'),
         'https://edtsech@bitbucket.org/epeli/underscore.strings');
  equal(splice_splicejsjs(12345, 1, 2, 321), '132145', 'Non strings');
});

