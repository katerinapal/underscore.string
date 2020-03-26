"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _sprintf = require("../sprintf");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#sprintf', function () {
  // Should be very tested function already.  Thanks to
  // http://www.diveintojavascript.com/projects/sprintf-for-javascript
  equal((0, _sprintf.sprintfjs)('Hello %s', 'me'), 'Hello me', 'basic');
  equal((0, _sprintf.sprintfjs)('Hello %s', 'me'), 'Hello me', 'object');
  equal((0, _sprintf.sprintfjs)('%.1f', 1.22222), '1.2', 'round');
  equal((0, _sprintf.sprintfjs)('%.1f', 1.17), '1.2', 'round 2');
  equal((0, _sprintf.sprintfjs)('%(id)d - %(name)s', { id: 824, name: 'Hello World' }), '824 - Hello World', 'Named replacements work');
  equal((0, _sprintf.sprintfjs)('%(args[0].id)d - %(args[1].name)s', { args: [{ id: 824 }, { name: 'Hello World' }] }), '824 - Hello World', 'Named replacements with arrays work');
});
