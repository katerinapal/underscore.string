import ext_assert_assert from "assert";
import { stripTagsjs as stripTags_stripTagsjsjs } from "../stripTags";
var equal = ext_assert_assert.equal;


test('#stripTags', function() {
  equal(stripTags_stripTagsjsjs('a <a href="#">link</a>'), 'a link');
  equal(stripTags_stripTagsjsjs('a <a href="#">link</a><script>alert("hello world!")</scr'+'ipt>'), 'a linkalert("hello world!")');
  equal(stripTags_stripTagsjsjs('<html><body>hello world</body></html>'), 'hello world');
  equal(stripTags_stripTagsjsjs(123), '123');
  equal(stripTags_stripTagsjsjs(''), '');
  equal(stripTags_stripTagsjsjs(null), '');
  equal(stripTags_stripTagsjsjs(undefined), '');
});

