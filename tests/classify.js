"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _classify = require("../classify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#classify', function () {
  equal((0, _classify.classify)(1), '1');
  equal((0, _classify.classify)('some_class_name'), 'SomeClassName');
  equal((0, _classify.classify)('my wonderfull class_name'), 'MyWonderfullClassName');
  equal((0, _classify.classify)('my wonderfull.class.name'), 'MyWonderfullClassName');
  equal((0, _classify.classify)('myLittleCamel'), 'MyLittleCamel');
  equal((0, _classify.classify)('myLittleCamel.class.name'), 'MyLittleCamelClassName');
  equal((0, _classify.classify)(123), '123');
  equal((0, _classify.classify)(''), '');
  equal((0, _classify.classify)(null), '');
  equal((0, _classify.classify)(undefined), '');
});