"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _dasherize = require("../dasherize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#dasherize', function () {
  equal((0, _dasherize.dasherize)('the_dasherize_string_method'), 'the-dasherize-string-method');
  equal((0, _dasherize.dasherize)('TheDasherizeStringMethod'), '-the-dasherize-string-method');
  equal((0, _dasherize.dasherize)('thisIsATest'), 'this-is-a-test');
  equal((0, _dasherize.dasherize)('this Is A Test'), 'this-is-a-test');
  equal((0, _dasherize.dasherize)('thisIsATest123'), 'this-is-a-test123');
  equal((0, _dasherize.dasherize)('123thisIsATest'), '123this-is-a-test');
  equal((0, _dasherize.dasherize)('the dasherize string method'), 'the-dasherize-string-method');
  equal((0, _dasherize.dasherize)('the  dasherize string method  '), 'the-dasherize-string-method');
  equal((0, _dasherize.dasherize)('téléphone'), 'téléphone');
  equal((0, _dasherize.dasherize)('foo$bar'), 'foo$bar');
  equal((0, _dasherize.dasherize)('input with a-dash'), 'input-with-a-dash');
  equal((0, _dasherize.dasherize)(''), '');
  equal((0, _dasherize.dasherize)(null), '');
  equal((0, _dasherize.dasherize)(undefined), '');
  equal((0, _dasherize.dasherize)(123), '123');
});