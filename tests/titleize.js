"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _titleize = require("../titleize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#titleize', function () {
  equal((0, _titleize.titleizejs)('the titleize string method'), 'The Titleize String Method');
  equal((0, _titleize.titleizejs)('the titleize string  method'), 'The Titleize String  Method');
  equal((0, _titleize.titleizejs)(''), '', 'Titleize empty string returns empty string');
  equal((0, _titleize.titleizejs)(null), '', 'Titleize null returns empty string');
  equal((0, _titleize.titleizejs)(undefined), '', 'Titleize undefined returns empty string');
  equal((0, _titleize.titleizejs)('let\'s have some fun'), 'Let\'s Have Some Fun');
  equal((0, _titleize.titleizejs)('a-dash-separated-string'), 'A-Dash-Separated-String');
  equal((0, _titleize.titleizejs)('A-DASH-SEPARATED-STRING'), 'A-Dash-Separated-String');
  equal((0, _titleize.titleizejs)(123), '123');
});
