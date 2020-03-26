"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.joinjs = undefined;

var _makeString = require("./helper/makeString");

var slice = [].slice;

var exportedObject = function join() {
  var args = slice.call(arguments),
      separator = args.shift();

  return args.join((0, _makeString.makeStringjs)(separator));
};

exports.joinjs = exportedObject;
;
