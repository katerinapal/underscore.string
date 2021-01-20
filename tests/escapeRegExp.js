import ext_assert from "assert";
import { escapeRegExp as escapeRegExp_escapeRegExp } from "../helper/escapeRegExp";
var equal = ext_assert.equal;


test('#escapeRegExp', function(){
  equal(escapeRegExp_escapeRegExp(/hello(?=\sworld)/.source), 'hello\\(\\?\\=\\\\sworld\\)', 'with lookahead');
  equal(escapeRegExp_escapeRegExp(/hello(?!\shell)/.source), 'hello\\(\\?\\!\\\\shell\\)', 'with negative lookahead');
});

