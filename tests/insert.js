"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _insert = require("../insert");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#insert', function () {
  equal((0, _insert.insert)('Hello ', 6, 'Jessy'), 'Hello Jessy');
  equal((0, _insert.insert)('Hello', 0, 'Jessy '), 'Jessy Hello');
  equal((0, _insert.insert)('Hello ', 100, 'Jessy'), 'Hello Jessy');
  equal((0, _insert.insert)('', 100, 'Jessy'), 'Jessy');
  equal((0, _insert.insert)(null, 100, 'Jessy'), 'Jessy');
  equal((0, _insert.insert)(undefined, 100, 'Jessy'), 'Jessy');
  equal((0, _insert.insert)(12345, 5, 'Jessy'), '12345Jessy');
  equal((0, _insert.insert)(12345, 3, 'Jessy'), '123Jessy45');
});