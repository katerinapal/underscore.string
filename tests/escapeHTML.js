import ext_assert from "assert";
import { escapeHTML as escapeHTML_escapeHTML } from "../escapeHTML";
var equal = ext_assert.equal;


test('#escapeHTML', function(){
  equal(escapeHTML_escapeHTML('<div>Blah & "blah" & \'blah\'</div>'), '&lt;div&gt;Blah &amp; &quot;blah&quot; &amp; &#39;blah&#39;&lt;/div&gt;');
  equal(escapeHTML_escapeHTML('&lt;'), '&amp;lt;');
  equal(escapeHTML_escapeHTML(' '), ' ');
  equal(escapeHTML_escapeHTML('¢'), '&cent;');
  equal(escapeHTML_escapeHTML('¢ £ ¥ € © ®'), '&cent; &pound; &yen; &euro; &copy; &reg;');
  equal(escapeHTML_escapeHTML(5), '5');
  equal(escapeHTML_escapeHTML(''), '');
  equal(escapeHTML_escapeHTML(null), '');
  equal(escapeHTML_escapeHTML(undefined), '');
});
