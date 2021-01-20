"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _stripTags = require("../stripTags");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#stripTags', function () {
  equal((0, _stripTags.stripTags)('a <a href="#">link</a>'), 'a link');
  equal((0, _stripTags.stripTags)('a <a href="#">link</a><script>alert("hello world!")</scr' + 'ipt>'), 'a linkalert("hello world!")');
  equal((0, _stripTags.stripTags)('<html><body>hello world</body></html>'), 'hello world');
  equal((0, _stripTags.stripTags)(123), '123');
  equal((0, _stripTags.stripTags)(''), '');
  equal((0, _stripTags.stripTags)(null), '');
  equal((0, _stripTags.stripTags)(undefined), '');
});