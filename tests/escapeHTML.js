"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _escapeHTML = require("../escapeHTML");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#escapeHTML', function () {
  equal((0, _escapeHTML.escapeHTML)('<div>Blah & "blah" & \'blah\'</div>'), '&lt;div&gt;Blah &amp; &quot;blah&quot; &amp; &#39;blah&#39;&lt;/div&gt;');
  equal((0, _escapeHTML.escapeHTML)('&lt;'), '&amp;lt;');
  equal((0, _escapeHTML.escapeHTML)(' '), ' ');
  equal((0, _escapeHTML.escapeHTML)('¢'), '&cent;');
  equal((0, _escapeHTML.escapeHTML)('¢ £ ¥ € © ®'), '&cent; &pound; &yen; &euro; &copy; &reg;');
  equal((0, _escapeHTML.escapeHTML)(5), '5');
  equal((0, _escapeHTML.escapeHTML)(''), '');
  equal((0, _escapeHTML.escapeHTML)(null), '');
  equal((0, _escapeHTML.escapeHTML)(undefined), '');
});