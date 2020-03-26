import assert_assert from "assert";
import { escapeRegExpjs as helperescapeRegExp_escapeRegExpjsjs } from "../helper/escapeRegExp";
var equal = assert_assert.equal;


test('#escapeRegExp', function(){
  equal(helperescapeRegExp_escapeRegExpjsjs(/hello(?=\sworld)/.source), 'hello\\(\\?\\=\\\\sworld\\)', 'with lookahead');
  equal(helperescapeRegExp_escapeRegExpjsjs(/hello(?!\shell)/.source), 'hello\\(\\?\\!\\\\shell\\)', 'with negative lookahead');
});

