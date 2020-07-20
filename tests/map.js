"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _map = require("../map");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#map', function () {
  equal((0, _map.mapjs)('Hello world', function (x) {
    return x;
  }), 'Hello world');
  equal((0, _map.mapjs)(12345, function (x) {
    return x;
  }), '12345');
  equal((0, _map.mapjs)('Hello world', function (x) {
    if (x === 'o') x = 'O';
    return x;
  }), 'HellO wOrld');
  equal((0, _map.mapjs)('', function (x) {
    return x;
  }), '');
  equal((0, _map.mapjs)(null, function (x) {
    return x;
  }), '');
  equal((0, _map.mapjs)(undefined, function (x) {
    return x;
  }), '');
  equal((0, _map.mapjs)('Hello world', ''), 'Hello world');
  equal((0, _map.mapjs)('Hello world', null), 'Hello world');
  equal((0, _map.mapjs)('Hello world', undefined), 'Hello world');
  equal((0, _map.mapjs)('', ''), '');
  equal((0, _map.mapjs)(null, null), '');
  equal((0, _map.mapjs)(undefined, undefined), '');
});