"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _capitalize = require("../capitalize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#capitalize', function () {
  equal((0, _capitalize.capitalizejs)('fabio'), 'Fabio', 'First letter is upper case');
  equal((0, _capitalize.capitalizejs)('fabio'), 'Fabio', 'First letter is upper case');
  equal((0, _capitalize.capitalizejs)('FOO'), 'FOO', 'Other letters unchanged');
  equal((0, _capitalize.capitalizejs)('FOO', false), 'FOO', 'Other letters unchanged');
  equal((0, _capitalize.capitalizejs)('foO', false), 'FoO', 'Other letters unchanged');
  equal((0, _capitalize.capitalizejs)('FOO', true), 'Foo', 'Other letters are lowercased');
  equal((0, _capitalize.capitalizejs)('foO', true), 'Foo', 'Other letters are lowercased');
  equal((0, _capitalize.capitalizejs)('f', false), 'F', 'Should uppercase 1 letter');
  equal((0, _capitalize.capitalizejs)('f', true), 'F', 'Should uppercase 1 letter');
  equal((0, _capitalize.capitalizejs)('f'), 'F', 'Should uppercase 1 letter');
  equal((0, _capitalize.capitalizejs)(123), '123', 'Non string');
  equal((0, _capitalize.capitalizejs)(123, true), '123', 'Non string');
  equal((0, _capitalize.capitalizejs)(123, false), '123', 'Non string');
  equal((0, _capitalize.capitalizejs)(''), '', 'Capitalizing empty string returns empty string');
  equal((0, _capitalize.capitalizejs)(null), '', 'Capitalizing null returns empty string');
  equal((0, _capitalize.capitalizejs)(undefined), '', 'Capitalizing undefined returns empty string');
  equal((0, _capitalize.capitalizejs)('', true), '', 'Capitalizing empty string returns empty string');
  equal((0, _capitalize.capitalizejs)(null, true), '', 'Capitalizing null returns empty string');
  equal((0, _capitalize.capitalizejs)(undefined, true), '', 'Capitalizing undefined returns empty string');
  equal((0, _capitalize.capitalizejs)('', false), '', 'Capitalizing empty string returns empty string');
  equal((0, _capitalize.capitalizejs)(null, false), '', 'Capitalizing null returns empty string');
  equal((0, _capitalize.capitalizejs)(undefined, false), '', 'Capitalizing undefined returns empty string');
});