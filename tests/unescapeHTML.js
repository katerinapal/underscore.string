import assert_assert from "assert";
import { unescapeHTMLjs as unescapeHTML_unescapeHTMLjsjs } from "../unescapeHTML";
var equal = assert_assert.equal;


test('#unescapeHTML', function(){
  equal(unescapeHTML_unescapeHTMLjsjs('&lt;div&gt;Blah &amp; &quot;blah&quot; &amp; &apos;blah&#39;&lt;/div&gt;'),
           '<div>Blah & "blah" & \'blah\'</div>');
  equal(unescapeHTML_unescapeHTMLjsjs('&amp;lt;'), '&lt;');
  equal(unescapeHTML_unescapeHTMLjsjs('&apos;'), '\'');
  equal(unescapeHTML_unescapeHTMLjsjs('&#39;'), '\'');
  equal(unescapeHTML_unescapeHTMLjsjs('&#0039;'), '\'');
  equal(unescapeHTML_unescapeHTMLjsjs('&#x4a;'), 'J');
  equal(unescapeHTML_unescapeHTMLjsjs('&#x04A;'), 'J');
  equal(unescapeHTML_unescapeHTMLjsjs('&#X4A;'), '&#X4A;');
  equal(unescapeHTML_unescapeHTMLjsjs('&_#39;'), '&_#39;');
  equal(unescapeHTML_unescapeHTMLjsjs('&#39_;'), '&#39_;');
  equal(unescapeHTML_unescapeHTMLjsjs('&amp;#38;'), '&#38;');
  equal(unescapeHTML_unescapeHTMLjsjs('&#38;amp;'), '&amp;');
  equal(unescapeHTML_unescapeHTMLjsjs('&#39;'), '\'');
  equal(unescapeHTML_unescapeHTMLjsjs(''), '');
  equal(unescapeHTML_unescapeHTMLjsjs('&nbsp;'), ' ');
  equal(unescapeHTML_unescapeHTMLjsjs('what is the &yen; to &pound; to &euro; conversion process?'), 'what is the ¥ to £ to € conversion process?');
  equal(unescapeHTML_unescapeHTMLjsjs('&reg; trademark'), '® trademark');
  equal(unescapeHTML_unescapeHTMLjsjs('&copy; 1992. License available for 50 &cent;'), '© 1992. License available for 50 ¢');
  equal(unescapeHTML_unescapeHTMLjsjs('&nbsp;'), ' ');
  equal(unescapeHTML_unescapeHTMLjsjs('&nbsp;'), ' ');

  equal(unescapeHTML_unescapeHTMLjsjs(null), '');
  equal(unescapeHTML_unescapeHTMLjsjs(undefined), '');
  equal(unescapeHTML_unescapeHTMLjsjs(5), '5');
});
