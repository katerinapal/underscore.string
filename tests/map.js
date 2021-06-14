"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _map = require("../map");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#map', function () {
  equal((0, _map.map)('Hello world', function (x) {
    return x;
  }), 'Hello world');
  equal((0, _map.map)(12345, function (x) {
    return x;
  }), '12345');
  equal((0, _map.map)('Hello world', function (x) {
    if (x === 'o') x = 'O';
    return x;
  }), 'HellO wOrld');
  equal((0, _map.map)('', function (x) {
    return x;
  }), '');
  equal((0, _map.map)(null, function (x) {
    return x;
  }), '');
  equal((0, _map.map)(undefined, function (x) {
    return x;
  }), '');
  equal((0, _map.map)('Hello world', ''), 'Hello world');
  equal((0, _map.map)('Hello world', null), 'Hello world');
  equal((0, _map.map)('Hello world', undefined), 'Hello world');
  equal((0, _map.map)('', ''), '');
  equal((0, _map.map)(null, null), '');
  equal((0, _map.map)(undefined, undefined), '');
});