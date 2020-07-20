"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _prune = require("../prune");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#prune', function () {
  equal((0, _prune.prunejs)('Hello, cruel world', 6, ' read more'), 'Hello read more');
  equal((0, _prune.prunejs)('Hello, world', 5, 'read a lot more'), 'Hello, world');
  equal((0, _prune.prunejs)('Hello, world', 5), 'Hello...');
  equal((0, _prune.prunejs)('Hello, world', 8), 'Hello...');
  equal((0, _prune.prunejs)('Hello, cruel world', 15), 'Hello, cruel...');
  equal((0, _prune.prunejs)('Hello world', 22), 'Hello world');
  equal((0, _prune.prunejs)('Привет, жестокий мир', 6, ' read more'), 'Привет read more');
  equal((0, _prune.prunejs)('Привет, мир', 6, 'read a lot more'), 'Привет, мир');
  equal((0, _prune.prunejs)('Привет, мир', 6), 'Привет...');
  equal((0, _prune.prunejs)('Привет, мир', 8), 'Привет...');
  equal((0, _prune.prunejs)('Привет, жестокий мир', 16), 'Привет, жестокий...');
  equal((0, _prune.prunejs)('Привет, мир', 22), 'Привет, мир');
  equal((0, _prune.prunejs)('alksjd!!!!!!....', 100, ''), 'alksjd!!!!!!....');
  equal((0, _prune.prunejs)(123, 10), '123');
  equal((0, _prune.prunejs)(123, 1, 321), '321');
  equal((0, _prune.prunejs)('', 5), '');
  equal((0, _prune.prunejs)(null, 5), '');
  equal((0, _prune.prunejs)(undefined, 5), '');
});