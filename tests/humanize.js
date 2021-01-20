"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _humanize = require("../humanize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#humanize', function () {
  equal((0, _humanize.humanize)('the_humanize_string_method'), 'The humanize string method');
  equal((0, _humanize.humanize)('ThehumanizeStringMethod'), 'Thehumanize string method');
  equal((0, _humanize.humanize)('-ThehumanizeStringMethod'), 'Thehumanize string method');
  equal((0, _humanize.humanize)('the humanize string method'), 'The humanize string method');
  equal((0, _humanize.humanize)('the humanize_id string method_id'), 'The humanize id string method');
  equal((0, _humanize.humanize)('the  humanize string method  '), 'The humanize string method');
  equal((0, _humanize.humanize)('   capitalize dash-CamelCase_underscore trim  '), 'Capitalize dash camel case underscore trim');
  equal((0, _humanize.humanize)(123), '123');
  equal((0, _humanize.humanize)(''), '');
  equal((0, _humanize.humanize)(null), '');
  equal((0, _humanize.humanize)(undefined), '');
});