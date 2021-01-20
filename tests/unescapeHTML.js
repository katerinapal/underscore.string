import ext_assert from "assert";
import { unescapeHTML as unescapeHTML_unescapeHTML } from "../unescapeHTML";
var equal = ext_assert.equal;


test('#unescapeHTML', function(){
  equal(unescapeHTML_unescapeHTML('&lt;div&gt;Blah &amp; &quot;blah&quot; &amp; &apos;blah&#39;&lt;/div&gt;'),
           '<div>Blah & "blah" & \'blah\'</div>');
  equal(unescapeHTML_unescapeHTML('&amp;lt;'), '&lt;');
  equal(unescapeHTML_unescapeHTML('&apos;'), '\'');
  equal(unescapeHTML_unescapeHTML('&#39;'), '\'');
  equal(unescapeHTML_unescapeHTML('&#0039;'), '\'');
  equal(unescapeHTML_unescapeHTML('&#x4a;'), 'J');
  equal(unescapeHTML_unescapeHTML('&#x04A;'), 'J');
  equal(unescapeHTML_unescapeHTML('&#X4A;'), '&#X4A;');
  equal(unescapeHTML_unescapeHTML('&_#39;'), '&_#39;');
  equal(unescapeHTML_unescapeHTML('&#39_;'), '&#39_;');
  equal(unescapeHTML_unescapeHTML('&amp;#38;'), '&#38;');
  equal(unescapeHTML_unescapeHTML('&#38;amp;'), '&amp;');
  equal(unescapeHTML_unescapeHTML('&#39;'), '\'');
  equal(unescapeHTML_unescapeHTML(''), '');
  equal(unescapeHTML_unescapeHTML('&nbsp;'), ' ');
  equal(unescapeHTML_unescapeHTML('what is the &yen; to &pound; to &euro; conversion process?'), 'what is the ¥ to £ to € conversion process?');
  equal(unescapeHTML_unescapeHTML('&reg; trademark'), '® trademark');
  equal(unescapeHTML_unescapeHTML('&copy; 1992. License available for 50 &cent;'), '© 1992. License available for 50 ¢');
  equal(unescapeHTML_unescapeHTML('&nbsp;'), ' ');
  equal(unescapeHTML_unescapeHTML('&nbsp;'), ' ');

  equal(unescapeHTML_unescapeHTML(null), '');
  equal(unescapeHTML_unescapeHTML(undefined), '');
  equal(unescapeHTML_unescapeHTML(5), '5');
});
