'use strict';

var _pad = require('../pad');

var tests = {};

tests['pad default'] = function () {
  (0, _pad.pad)('foo', 12);
};

tests['pad hash left'] = function () {
  (0, _pad.pad)('foo', 12, '#');
};

tests['pad hash right'] = function () {
  (0, _pad.pad)('foo', 12, '#', 'right');
};

tests['pad hash both'] = function () {
  (0, _pad.pad)('foo', 12, '#', 'both');
};

tests['pad hash both longPad'] = function () {
  (0, _pad.pad)('foo', 12, 'f00f00f00', 'both');
};

var padjs;

padjs = {
  tests: tests
};