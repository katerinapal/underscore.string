"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _unescapeHTML = require("../unescapeHTML");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#unescapeHTML', function () {
  equal((0, _unescapeHTML.unescapeHTML)('&lt;div&gt;Blah &amp; &quot;blah&quot; &amp; &apos;blah&#39;&lt;/div&gt;'), '<div>Blah & "blah" & \'blah\'</div>');
  equal((0, _unescapeHTML.unescapeHTML)('&amp;lt;'), '&lt;');
  equal((0, _unescapeHTML.unescapeHTML)('&apos;'), '\'');
  equal((0, _unescapeHTML.unescapeHTML)('&#39;'), '\'');
  equal((0, _unescapeHTML.unescapeHTML)('&#0039;'), '\'');
  equal((0, _unescapeHTML.unescapeHTML)('&#x4a;'), 'J');
  equal((0, _unescapeHTML.unescapeHTML)('&#x04A;'), 'J');
  equal((0, _unescapeHTML.unescapeHTML)('&#X4A;'), '&#X4A;');
  equal((0, _unescapeHTML.unescapeHTML)('&_#39;'), '&_#39;');
  equal((0, _unescapeHTML.unescapeHTML)('&#39_;'), '&#39_;');
  equal((0, _unescapeHTML.unescapeHTML)('&amp;#38;'), '&#38;');
  equal((0, _unescapeHTML.unescapeHTML)('&#38;amp;'), '&amp;');
  equal((0, _unescapeHTML.unescapeHTML)('&#39;'), '\'');
  equal((0, _unescapeHTML.unescapeHTML)(''), '');
  equal((0, _unescapeHTML.unescapeHTML)('&nbsp;'), ' ');
  equal((0, _unescapeHTML.unescapeHTML)('what is the &yen; to &pound; to &euro; conversion process?'), 'what is the ¥ to £ to € conversion process?');
  equal((0, _unescapeHTML.unescapeHTML)('&reg; trademark'), '® trademark');
  equal((0, _unescapeHTML.unescapeHTML)('&copy; 1992. License available for 50 &cent;'), '© 1992. License available for 50 ¢');
  equal((0, _unescapeHTML.unescapeHTML)('&nbsp;'), ' ');
  equal((0, _unescapeHTML.unescapeHTML)('&nbsp;'), ' ');

  equal((0, _unescapeHTML.unescapeHTML)(null), '');
  equal((0, _unescapeHTML.unescapeHTML)(undefined), '');
  equal((0, _unescapeHTML.unescapeHTML)(5), '5');
});