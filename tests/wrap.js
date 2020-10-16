"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _wrap = require("../wrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equal = _assert2.default.equal;

test('#wrap', function () {

  // without trailing spaces
  equal((0, _wrap.wrapjs)('My name is', { width: 2, seperator: '.', cut: false, trailingSpaces: false }), 'My.name.is', 'works with width 2 and cut = false');
  equal((0, _wrap.wrapjs)('My name is', { width: 2, seperator: '.', cut: true, trailingSpaces: false }), 'My. n.am.e .is', 'works with width 2 and cut = true');
  equal((0, _wrap.wrapjs)('My name is', { width: 3, seperator: '.', cut: false, trailingSpaces: false }), 'My.name.is', 'works with width 3 and cut = true');
  equal((0, _wrap.wrapjs)('My name is', { width: 3, seperator: '.', cut: true, trailingSpaces: false }), 'My .nam.e i.s', 'works with width 3 and cut = true');

  // with trailing spaces
  equal((0, _wrap.wrapjs)('My name is', { width: 2, seperator: '.', cut: false, trailingSpaces: true }), 'My.name.is', 'works with width 2 and cut = false and trailingSpaces = true');
  equal((0, _wrap.wrapjs)('My name is', { width: 2, seperator: '.', cut: true, trailingSpaces: true }), 'My. n.am.e .is', 'works with width 2 and cut = true and trailingSpaces = true');
  equal((0, _wrap.wrapjs)('My name is', { width: 3, seperator: '.', cut: false, trailingSpaces: true }), 'My .name.is ', 'works with width 3 and cut = true and trailingSpaces = true');
  equal((0, _wrap.wrapjs)('My name is', { width: 3, seperator: '.', cut: true, trailingSpaces: true }), 'My .nam.e i.s  ', 'works with width 3 and cut = true and trailingSpaces = true');

  // with preserveSpaces
  equal((0, _wrap.wrapjs)('My name is', { width: 2, seperator: '.', cut: false, preserveSpaces: true }), 'My .name .is', 'preserve spaces keeps the space at the end of a line');
  equal((0, _wrap.wrapjs)('My name is', { width: 3, seperator: '.', cut: false, preserveSpaces: true }), 'My .name .is', 'preserve spaces keeps the space at the end of a line');

  // with preserveSpaces and trailingSpaces
  equal((0, _wrap.wrapjs)('My name is', { width: 2, seperator: '.', cut: false, preserveSpaces: true, trailingSpaces: true }), 'My .name .is', 'preserve spaces takes precedence over trailing spaces');

  // defaults
  equal((0, _wrap.wrapjs)('My name is', { width: 3 }), 'My\nname\nis', 'Default parameters work');
  equal((0, _wrap.wrapjs)('My name is'), 'My name is', 'Default parameters work');
  equal((0, _wrap.wrapjs)('', { width: 5 }), '', 'Empty string');
  equal((0, _wrap.wrapjs)('My name is', { width: 0 }), 'My name is', 'Just return original line if width <= 0');
  equal((0, _wrap.wrapjs)('My name is', { width: -1 }), 'My name is', 'Just return original line if width <= 0');
  equal((0, _wrap.wrapjs)(null, { width: 5 }), '', 'null');
  equal((0, _wrap.wrapjs)(undefined, { width: 5 }), '', 'undefined');
});