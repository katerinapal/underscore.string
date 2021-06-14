"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _decapitalize = require("../decapitalize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#decapitalize', function () {
  equal((0, _decapitalize.decapitalize)('Fabio'), 'fabio', 'First letter is lower case');
  equal((0, _decapitalize.decapitalize)('FOO'), 'fOO', 'Other letters unchanged');
  equal((0, _decapitalize.decapitalize)(123), '123', 'Non string');
  equal((0, _decapitalize.decapitalize)(''), '', 'Decapitalizing empty string returns empty string');
  equal((0, _decapitalize.decapitalize)(null), '', 'Decapitalizing null returns empty string');
  equal((0, _decapitalize.decapitalize)(undefined), '', 'Decapitalizing undefined returns empty string');
});