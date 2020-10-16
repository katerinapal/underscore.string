import ext_assert_assert from "assert";
import { sprintfjs as sprintf_sprintfjsjs } from "../sprintf";
var equal = ext_assert_assert.equal;


test('#sprintf', function() {
  // Should be very tested function already.  Thanks to
  // http://www.diveintojavascript.com/projects/sprintf-for-javascript
  equal(sprintf_sprintfjsjs('Hello %s', 'me'), 'Hello me', 'basic');
  equal(sprintf_sprintfjsjs('Hello %s', 'me'), 'Hello me', 'object');
  equal(sprintf_sprintfjsjs('%.1f', 1.22222), '1.2', 'round');
  equal(sprintf_sprintfjsjs('%.1f', 1.17), '1.2', 'round 2');
  equal(sprintf_sprintfjsjs('%(id)d - %(name)s', {id: 824, name: 'Hello World'}), '824 - Hello World', 'Named replacements work');
  equal(sprintf_sprintfjsjs('%(args[0].id)d - %(args[1].name)s', {args: [{id: 824}, {name: 'Hello World'}]}), '824 - Hello World', 'Named replacements with arrays work');
});

