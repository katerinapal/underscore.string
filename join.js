"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.join = undefined;

var _makeString = require("./helper/makeString");

var slice = [].slice;

var mod_anonymus = function join() {
  var args = slice.call(arguments),
      separator = args.shift();

  return args.join((0, _makeString.makeString)(separator));
};

exports.join = mod_anonymus;
