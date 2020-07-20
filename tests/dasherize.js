"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _dasherize = require("../dasherize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#dasherize', function () {
  equal((0, _dasherize.dasherizejs)('the_dasherize_string_method'), 'the-dasherize-string-method');
  equal((0, _dasherize.dasherizejs)('TheDasherizeStringMethod'), '-the-dasherize-string-method');
  equal((0, _dasherize.dasherizejs)('thisIsATest'), 'this-is-a-test');
  equal((0, _dasherize.dasherizejs)('this Is A Test'), 'this-is-a-test');
  equal((0, _dasherize.dasherizejs)('thisIsATest123'), 'this-is-a-test123');
  equal((0, _dasherize.dasherizejs)('123thisIsATest'), '123this-is-a-test');
  equal((0, _dasherize.dasherizejs)('the dasherize string method'), 'the-dasherize-string-method');
  equal((0, _dasherize.dasherizejs)('the  dasherize string method  '), 'the-dasherize-string-method');
  equal((0, _dasherize.dasherizejs)('téléphone'), 'téléphone');
  equal((0, _dasherize.dasherizejs)('foo$bar'), 'foo$bar');
  equal((0, _dasherize.dasherizejs)('input with a-dash'), 'input-with-a-dash');
  equal((0, _dasherize.dasherizejs)(''), '');
  equal((0, _dasherize.dasherizejs)(null), '');
  equal((0, _dasherize.dasherizejs)(undefined), '');
  equal((0, _dasherize.dasherizejs)(123), '123');
});