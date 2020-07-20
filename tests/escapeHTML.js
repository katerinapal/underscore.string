import ext_assert_assert from "assert";
import { escapeHTMLjs as escapeHTML_escapeHTMLjsjs } from "../escapeHTML";
var equal = ext_assert_assert.equal;


test('#escapeHTML', function(){
  equal(escapeHTML_escapeHTMLjsjs('<div>Blah & "blah" & \'blah\'</div>'), '&lt;div&gt;Blah &amp; &quot;blah&quot; &amp; &#39;blah&#39;&lt;/div&gt;');
  equal(escapeHTML_escapeHTMLjsjs('&lt;'), '&amp;lt;');
  equal(escapeHTML_escapeHTMLjsjs(' '), ' ');
  equal(escapeHTML_escapeHTMLjsjs('¢'), '&cent;');
  equal(escapeHTML_escapeHTMLjsjs('¢ £ ¥ € © ®'), '&cent; &pound; &yen; &euro; &copy; &reg;');
  equal(escapeHTML_escapeHTMLjsjs(5), '5');
  equal(escapeHTML_escapeHTMLjsjs(''), '');
  equal(escapeHTML_escapeHTMLjsjs(null), '');
  equal(escapeHTML_escapeHTMLjsjs(undefined), '');
});
