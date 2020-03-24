"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _insert = require("../insert");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#insert', function () {
  equal((0, _insert.insertjs)('Hello ', 6, 'Jessy'), 'Hello Jessy');
  equal((0, _insert.insertjs)('Hello', 0, 'Jessy '), 'Jessy Hello');
  equal((0, _insert.insertjs)('Hello ', 100, 'Jessy'), 'Hello Jessy');
  equal((0, _insert.insertjs)('', 100, 'Jessy'), 'Jessy');
  equal((0, _insert.insertjs)(null, 100, 'Jessy'), 'Jessy');
  equal((0, _insert.insertjs)(undefined, 100, 'Jessy'), 'Jessy');
  equal((0, _insert.insertjs)(12345, 5, 'Jessy'), '12345Jessy');
  equal((0, _insert.insertjs)(12345, 3, 'Jessy'), '123Jessy45');
});
