"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _splice = require("../splice");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#splice', function () {
  equal((0, _splice.splicejs)('https://edtsech@bitbucket.org/edtsech/underscore.strings', 30, 7, 'epeli'), 'https://edtsech@bitbucket.org/epeli/underscore.strings');
  equal((0, _splice.splicejs)(12345, 1, 2, 321), '132145', 'Non strings');
});