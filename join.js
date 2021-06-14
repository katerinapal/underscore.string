import { makeString as makeString_makeString } from "./helper/makeString";
var slice = [].slice;

var mod_anonymus = function join() {
  var args = slice.call(arguments),
    separator = args.shift();

  return args.join(makeString_makeString(separator));
};

mod_anonymus = function join() {
  var args = slice.call(arguments),
    separator = args.shift();

  return args.join(makeString_makeString(separator));
};
export { mod_anonymus as join };
