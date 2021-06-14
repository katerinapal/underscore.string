"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _naturalCmp = require("../naturalCmp");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('#naturalSort', function () {
  var arr = ['foo2', 'foo1', 'foo10', 'foo30', 'foo100', 'foo10bar'],
      sorted = ['foo1', 'foo2', 'foo10', 'foo10bar', 'foo30', 'foo100'];
  _assert2.default.deepEqual(arr.sort(_naturalCmp.naturalCmp), sorted);
});