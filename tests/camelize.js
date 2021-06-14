"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _camelize = require("../camelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#camelize', function () {
  equal((0, _camelize.camelize)('the_camelize_string_method'), 'theCamelizeStringMethod');
  equal((0, _camelize.camelize)('webkit-transform'), 'webkitTransform');
  equal((0, _camelize.camelize)('-the-camelize-string-method'), 'TheCamelizeStringMethod');
  equal((0, _camelize.camelize)('_the_camelize_string_method'), 'TheCamelizeStringMethod');
  equal((0, _camelize.camelize)('The-camelize-string-method'), 'TheCamelizeStringMethod');
  equal((0, _camelize.camelize)('the camelize string method'), 'theCamelizeStringMethod');
  equal((0, _camelize.camelize)(' the camelize  string method'), 'theCamelizeStringMethod');
  equal((0, _camelize.camelize)('the camelize   string method'), 'theCamelizeStringMethod');
  equal((0, _camelize.camelize)(' with   spaces'), 'withSpaces');
  equal((0, _camelize.camelize)('_som eWeird---name-'), 'SomEWeirdName');
  equal((0, _camelize.camelize)(''), '', 'Camelize empty string returns empty string');
  equal((0, _camelize.camelize)(null), '', 'Camelize null returns empty string');
  equal((0, _camelize.camelize)(undefined), '', 'Camelize undefined returns empty string');
  equal((0, _camelize.camelize)(123), '123');
  equal((0, _camelize.camelize)('the_camelize_string_method', true), 'theCamelizeStringMethod');
  equal((0, _camelize.camelize)('webkit-transform', true), 'webkitTransform');
  equal((0, _camelize.camelize)('-the-camelize-string-method', true), 'theCamelizeStringMethod');
  equal((0, _camelize.camelize)('_the_camelize_string_method', true), 'theCamelizeStringMethod');
  equal((0, _camelize.camelize)('The-camelize-string-method', true), 'theCamelizeStringMethod');
  equal((0, _camelize.camelize)('the camelize string method', true), 'theCamelizeStringMethod');
  equal((0, _camelize.camelize)(' the camelize  string method', true), 'theCamelizeStringMethod');
  equal((0, _camelize.camelize)('the camelize   string method', true), 'theCamelizeStringMethod');
  equal((0, _camelize.camelize)(' with   spaces', true), 'withSpaces');
  equal((0, _camelize.camelize)('_som eWeird---name-', true), 'somEWeirdName');
  equal((0, _camelize.camelize)('', true), '', 'Camelize empty string returns empty string');
  equal((0, _camelize.camelize)(null, true), '', 'Camelize null returns empty string');
  equal((0, _camelize.camelize)(undefined, true), '', 'Camelize undefined returns empty string');
  equal((0, _camelize.camelize)(123, true), '123');
});