"use strict";

var _naturalCmp = require("../naturalCmp");

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#naturalCmp', function () {
  // Should be associative
  _underscore2.default.each([['abc', null], ['abc', '123'], ['def', 'abc'], ['ab', 'a'], ['r69', 'r9'], ['123', '122'], ['ac2', 'ab3'], ['a-12', 'a-11'], ['11', '-12'], ['15.05', '15'], ['15ac', '15ab32'], ['16', '15ab'], ['15a123', '15a122'], ['15ab16', '15ab'], ['abc', 'Abc'], ['abc', 'aBc'], ['aBc', 'Abc']], function (vals) {
    var a = vals[0],
        b = vals[1];
    equal((0, _naturalCmp.naturalCmpjs)(a, b), 1, '\'' + a + '\' >= \'' + b + '\'');
    equal((0, _naturalCmp.naturalCmpjs)(b, a), -1, '\'' + b + '\' <= \'' + a + '\'');
  });
  _underscore2.default.each([['123', '123'], ['abc', 'abc'], ['r12', 'r12'], ['12a', '12a']], function (vals) {
    var a = vals[0],
        b = vals[1];
    equal((0, _naturalCmp.naturalCmpjs)(a, b), 0, '\'' + a + '\' == \'' + b + '\'');
    equal((0, _naturalCmp.naturalCmpjs)(b, a), 0, '\'' + b + '\' == \'' + a + '\'');
  });
});