"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _vsprintf = require("../vsprintf");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#vsprintf', function () {
  equal((0, _vsprintf.vsprintfjs)('Hello %s', ['me']), 'Hello me', 'basic');
  equal((0, _vsprintf.vsprintfjs)('Hello %s', ['me']), 'Hello me', 'object');
  equal((0, _vsprintf.vsprintfjs)('%.1f', [1.22222]), '1.2', 'round');
  equal((0, _vsprintf.vsprintfjs)('%.1f', [1.17]), '1.2', 'round 2');
  equal((0, _vsprintf.vsprintfjs)('%(id)d - %(name)s', [{ id: 824, name: 'Hello World' }]), '824 - Hello World', 'Named replacement works');
  equal((0, _vsprintf.vsprintfjs)('%(args[0].id)d - %(args[1].name)s', [{ args: [{ id: 824 }, { name: 'Hello World' }] }]), '824 - Hello World', 'Named replacement with arrays works');
});