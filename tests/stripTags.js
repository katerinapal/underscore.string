import ext_assert from "assert";
import { stripTags as stripTags_stripTags } from "../stripTags";
var equal = ext_assert.equal;


test('#stripTags', function() {
  equal(stripTags_stripTags('a <a href="#">link</a>'), 'a link');
  equal(stripTags_stripTags('a <a href="#">link</a><script>alert("hello world!")</scr'+'ipt>'), 'a linkalert("hello world!")');
  equal(stripTags_stripTags('<html><body>hello world</body></html>'), 'hello world');
  equal(stripTags_stripTags(123), '123');
  equal(stripTags_stripTags(''), '');
  equal(stripTags_stripTags(null), '');
  equal(stripTags_stripTags(undefined), '');
});

