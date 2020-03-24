"use strict";

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _2 = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deepEqual = _assert2.default.deepEqual;

test('#exports', function () {
  deepEqual(_underscore2.default.intersection(Object.keys(_2.s.exports()), _underscore2.default.functions(_underscore2.default)), [], 'Conflicts exist between exports and underscore functions');
});
