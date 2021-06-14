"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _capitalize = require("../capitalize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#capitalize', function () {
  equal((0, _capitalize.capitalize)('fabio'), 'Fabio', 'First letter is upper case');
  equal((0, _capitalize.capitalize)('fabio'), 'Fabio', 'First letter is upper case');
  equal((0, _capitalize.capitalize)('FOO'), 'FOO', 'Other letters unchanged');
  equal((0, _capitalize.capitalize)('FOO', false), 'FOO', 'Other letters unchanged');
  equal((0, _capitalize.capitalize)('foO', false), 'FoO', 'Other letters unchanged');
  equal((0, _capitalize.capitalize)('FOO', true), 'Foo', 'Other letters are lowercased');
  equal((0, _capitalize.capitalize)('foO', true), 'Foo', 'Other letters are lowercased');
  equal((0, _capitalize.capitalize)('f', false), 'F', 'Should uppercase 1 letter');
  equal((0, _capitalize.capitalize)('f', true), 'F', 'Should uppercase 1 letter');
  equal((0, _capitalize.capitalize)('f'), 'F', 'Should uppercase 1 letter');
  equal((0, _capitalize.capitalize)(123), '123', 'Non string');
  equal((0, _capitalize.capitalize)(123, true), '123', 'Non string');
  equal((0, _capitalize.capitalize)(123, false), '123', 'Non string');
  equal((0, _capitalize.capitalize)(''), '', 'Capitalizing empty string returns empty string');
  equal((0, _capitalize.capitalize)(null), '', 'Capitalizing null returns empty string');
  equal((0, _capitalize.capitalize)(undefined), '', 'Capitalizing undefined returns empty string');
  equal((0, _capitalize.capitalize)('', true), '', 'Capitalizing empty string returns empty string');
  equal((0, _capitalize.capitalize)(null, true), '', 'Capitalizing null returns empty string');
  equal((0, _capitalize.capitalize)(undefined, true), '', 'Capitalizing undefined returns empty string');
  equal((0, _capitalize.capitalize)('', false), '', 'Capitalizing empty string returns empty string');
  equal((0, _capitalize.capitalize)(null, false), '', 'Capitalizing null returns empty string');
  equal((0, _capitalize.capitalize)(undefined, false), '', 'Capitalizing undefined returns empty string');
});