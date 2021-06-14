"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vsprintfjs = undefined;

var _utilDeprecate = require("util-deprecate");

var _utilDeprecate2 = _interopRequireDefault(_utilDeprecate);

var _sprintfJs = require("sprintf-js");

var _sprintfJs2 = _interopRequireDefault(_sprintfJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.vsprintfjs = mod_vsprintfjs = (0, _utilDeprecate2.default)(_sprintfJs2.default.vsprintf, 'vsprintf() will be removed in the next major release, use the sprintf-js package instead.');
var mod_vsprintfjs;
exports.vsprintfjs = mod_vsprintfjs;
