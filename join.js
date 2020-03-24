import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";
var slice = [].slice;

var exportedObject = function join() {
  var args = slice.call(arguments),
    separator = args.shift();

  return args.join(helpermakeString_makeStringjsjs(separator));
};

export { exportedObject as joinjs };;
